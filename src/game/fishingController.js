import * as THREE from 'three';
import { createBobber } from '../entities/bobber.js';
import { createLine } from '../entities/line.js';
import { waveHeight } from '../world/water.js';
import { RODS } from '../data/rods.js';
import { pickCreature } from '../systems/economy.js';
import { castPower, castDistance, canCast, consumeBait, biteDelay, createReel, updateReel } from '../systems/fishing.js';

const BITE_WINDOW = 1.2;
const FLIGHT = 0.55;

/** cast → wait → bite → hook → reel → land. Emits events per the plan's contract; contains no juice. */
export function createFishingController(game) {
  const { bus, store, scene, player, island, water, input, camRig, aimPoint, creatureSys } = game;
  const bobber = createBobber(); bobber.hide(); scene.add(bobber.group);
  const line = createLine(scene);
  const marker = new THREE.Group(); marker.visible = false; scene.add(marker);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9, depthWrite: false, depthTest: false });
  const ring1 = new THREE.Mesh(new THREE.RingGeometry(0.55, 0.7, 28), ringMat); ring1.rotation.x = -Math.PI / 2;
  const ring2 = new THREE.Mesh(new THREE.RingGeometry(0.2, 0.3, 20), ringMat); ring2.rotation.x = -Math.PI / 2;
  marker.add(ring1, ring2); marker.renderOrder = 10; ring1.renderOrder = 10; ring2.renderOrder = 10;

  const S = {
    name: 'idle', t: 0, hold: 0, power: 0, biteIn: 0, biteWin: 0, nibbles: [], creature: null, ent: null, reel: null, baitId: 'ham',
    start: new THREE.Vector3(), target: new THREE.Vector3(), pos: new THREE.Vector3(), pull: new THREE.Vector3(), cool: 0,
  };
  const tip = new THREE.Vector3(), dir = new THREE.Vector3(), tmp = new THREE.Vector3();

  function aimDir() {
    dir.set(aimPoint.x - player.pos.x, 0, aimPoint.z - player.pos.z);
    if (dir.lengthSq() < 0.01) dir.set(Math.sin(player.facing), 0, Math.cos(player.facing));
    return dir.normalize();
  }
  const isWater = (x, z) => !island.walkable(x, z);
  function reset() { S.name = 'idle'; S.ent = null; S.reel = null; bobber.setFloating(false); bobber.hide(); line.hide(); camRig.setFocus(null); player.setBend(0); }
  const blocked = () => game.uiBlocking;
  const clickPressed = () => !blocked() && (input.mouse.leftPressed || input.wasPressed('Space'));

  function startCharge() {
    const c = canCast(store.state);
    if (!c.ok) { bus.emit('cast:refused', { reason: c.reason }); return; }
    S.name = 'charging'; S.hold = 0; S.power = 0;
  }

  function release() {
    const rod = RODS[store.state.equippedRod];
    const d = aimDir(), dist = castDistance(S.power, rod);
    S.target.set(player.pos.x + d.x * dist, 0, player.pos.z + d.z * dist);
    marker.visible = false; player.setBend(0);
    if (!isWater(S.target.x, S.target.z)) { S.name = 'idle'; bus.emit('cast:refused', { reason: 'land' }); return; }
    S.baitId = consumeBait(store.state);
    S.creature = pickCreature(S.baitId, store.state.equippedRod);
    player.playAnim('cast'); player.rodTip(S.start);
    S.name = 'flying'; S.t = 0;
    bobber.place(S.start); bobber.setFloating(false); bobber.show(); line.show();
    bus.emit('cast:release', { power: S.power, target: S.target.clone(), dir: d.clone() });
  }

  function land() {
    S.name = 'waiting';
    S.target.y = 0; bobber.place(S.target); bobber.setFloating(true);
    bus.emit('bobber:land', { pos: S.target.clone() });
    S.biteIn = biteDelay(); S.t = 0;
    S.isBoss = !!(game.bossCtl && game.bossCtl.isTarget(S.target));
    if (S.isBoss) S.creature = game.bossCtl.hookDef;
    if (S.isBoss) S.biteIn = 1.2;
    S.nibbles = [S.biteIn * (0.3 + Math.random() * 0.15), S.biteIn * (0.6 + Math.random() * 0.2)];
  }

  function hook() {
    const rod = RODS[store.state.equippedRod];
    S.reel = createReel(S.creature, rod);
    if (S.isBoss) S.ent = { pos: new THREE.Vector3(), mesh: { position: new THREE.Vector3(), rotation: new THREE.Euler(), userData: { anim() {} } } };
    else { S.ent = creatureSys.spawn(S.creature, tmp.set(S.target.x, -0.1, S.target.z)); S.ent.mode = 'water'; }
    S.name = 'reeling';
    player.playAnim('hook');
    bus.emit('hook', { creature: S.creature, pos: S.target.clone() });
  }

  function finishReel(status) {
    const ent = S.ent;
    if (S.isBoss) {
      game.bossCtl.reelEnd(status);
      if (status === 'landed') player.playAnim('celebrate');
      else { bus.emit(status === 'snapped' ? 'reel:snap' : 'reel:escape', { pos: S.pos.clone(), creature: S.creature }); }
      S.isBoss = false; reset(); S.cool = 0.35; return;
    }
    if (status === 'landed') {
      const d = aimDir();
      const spot = new THREE.Vector3(player.pos.x, 0, player.pos.z);
      const px = -d.z, pz = d.x; // right-hand perpendicular, so the catch lands beside the player, clear of the hat
      for (const [k, sd] of [[2.6, 0.8], [2.0, 0.8], [1.4, 0.8], [2.2, 0], [1.5, 0], [0.8, 0]]) {
        const x = player.pos.x + d.x * k + px * sd, z = player.pos.z + d.z * k + pz * sd;
        if (island.walkable(x, z) && island.walkable(x + d.x * 0.6, z + d.z * 0.6)) { spot.set(x, 0, z); break; }
      }
      spot.y = island.groundY(spot.x, spot.z) + 0.3;
      ent.pos.set(S.pos.x, Math.max(S.pos.y, 0.2), S.pos.z);
      creatureSys.launch(ent, spot, 0.95);
      const st = store.state; st.stats.caught++; st.dex[S.creature.id] = true;
      bus.emit('catch:land', { creature: S.creature, ent, pos: ent.pos.clone(), spot });
      player.playAnim('celebrate');
    } else {
      bus.emit(status === 'snapped' ? 'reel:snap' : 'reel:escape', { pos: S.pos.clone(), creature: S.creature });
      bus.emit('creature:splash', { ent, pos: S.pos.clone(), escaped: true });
      creatureSys.remove(ent);
    }
    reset(); S.cool = 0.35;
  }

  return {
    get state() { return S.name; },
    get current() { return S; },
    update(dt) {
      S.cool = Math.max(0, S.cool - dt);
      player.showRod(!!store.state.equippedRod);
      const active = S.name !== 'idle';
      if (active) player.holdAim(0.25);
      switch (S.name) {
        case 'idle':
          if (S.cool <= 0 && !blocked() && input.mouse.leftPressed) startCharge();
          break;
        case 'charging': {
          S.hold += dt; S.power = castPower(S.hold);
          const rod = RODS[store.state.equippedRod], d = aimDir(), dist = castDistance(S.power, rod);
          marker.visible = true; marker.position.set(player.pos.x + d.x * dist, 0.08 + waveHeight(player.pos.x + d.x * dist, player.pos.z + d.z * dist, game.time), player.pos.z + d.z * dist);
          const ok = isWater(marker.position.x, marker.position.z);
          ringMat.color.set(ok ? (S.power > 0.95 ? '#ffd23c' : '#ffffff') : '#ff5a4a');
          const pulse = 1 + Math.sin(game.time * 12) * 0.08 + S.power * 0.5; ring1.scale.setScalar(pulse); ring2.scale.setScalar(1.2 - S.power * 0.5);
          player.setBend(-S.power * 0.8);
          bus.emit('cast:charge', { power: S.power, pos: marker.position.clone(), ok });
          if (input.mouse.leftReleased || !input.mouse.left) release();
          break;
        }
        case 'flying': {
          S.t += dt; const k = Math.min(1, S.t / FLIGHT);
          player.rodTip(tip);
          S.pos.lerpVectors(S.start, S.target, k); S.pos.y += Math.sin(k * Math.PI) * (2 + S.power * 3) ;
          bobber.place(S.pos); bobber.group.rotation.y += dt * 10;
          line.setEnds(tip, S.pos, 0.15 + (1 - k) * 0.3, 0, game.time);
          if (k >= 1) land();
          break;
        }
        case 'waiting': {
          S.t += dt; S.biteIn -= dt;
          const wy = waveHeight(S.target.x, S.target.z, game.time);
          bobber.update(dt, game.time, wy);
          player.rodTip(tip); tmp.copy(bobber.group.position);
          line.setEnds(tip, tmp, 0.35, 0.05, game.time);
          if (S.nibbles.length && S.t > S.nibbles[0]) { S.nibbles.shift(); bobber.dip(0.14); bus.emit('nibble', { pos: S.target.clone() }); }
          if (clickPressed()) { bus.emit('cast:retrieve', { pos: S.target.clone() }); reset(); S.cool = 0.25; break; }
          if (S.biteIn <= 0) { S.name = 'bite'; S.biteWin = BITE_WINDOW; bobber.dip(0.55); bus.emit('bite', { pos: S.target.clone(), creature: S.creature }); }
          break;
        }
        case 'bite': {
          S.biteWin -= dt;
          const wy = waveHeight(S.target.x, S.target.z, game.time);
          bobber.update(dt, game.time, wy);
          if (Math.sin(game.time * 22) > 0.97) bobber.dip(0.35);
          player.rodTip(tip); tmp.copy(bobber.group.position);
          line.setEnds(tip, tmp, 0.25, 0.08, game.time);
          if (clickPressed()) { hook(); break; }
          if (S.biteWin <= 0) { bus.emit('bite:miss', { pos: S.target.clone() }); reset(); S.cool = 0.3; }
          break;
        }
        case 'reeling': {
          const holding = !blocked() && (input.mouse.left || input.keys.has('Space'));
          const status = updateReel(S.reel, dt, holding);
          const ent = S.ent, r = S.reel, d = aimDir();
          // creature is dragged from the hook point toward the player as progress grows
          S.pull.set(player.pos.x + d.x * 3.2, 0, player.pos.z + d.z * 3.2);
          const k = Math.min(1, Math.max(0, (r.progress - 0.1) / 0.9));
          S.pos.lerpVectors(S.target, S.pull, k * k * (3 - 2 * k) * 0.92 + k * 0.08);
          const thrash = 0.12 + r.creature.fight * 0.6;
          S.pos.x += Math.sin(game.time * 7) * thrash * 0.5; S.pos.z += Math.cos(game.time * 6) * thrash * 0.5;
          S.pos.y = Math.abs(Math.sin(game.time * 9)) * thrash * 1.2 - 0.1;
          if (S.isBoss) { S.pos.copy(game.bossCtl.hookPoint()); game.bossCtl.reelUpdate(r.progress, r.tension); }
          ent.pos.copy(S.pos); ent.mesh.position.copy(S.pos);
          ent.mesh.rotation.set(0, Math.atan2(S.pull.x - S.pos.x, S.pull.z - S.pos.z) + Math.sin(game.time * 8) * 0.6, Math.sin(game.time * 11) * 0.5, 'YXZ');
          ent.mesh.userData.anim(game.time, 1);
          tmp.set(S.pos.x, Math.max(S.pos.y, 0) + 0.25, S.pos.z); bobber.place(tmp); bobber.setFloating(false); bobber.inner.rotation.z = Math.sin(game.time * 10) * 0.3;
          player.rodTip(tip);
          line.setEnds(tip, tmp, Math.max(0.03, 0.5 * (1 - r.tension)), 0.02, game.time); line.tint(r.tension);
          player.setBend(0.25 + r.tension * 0.9);
          camRig.setFocus(S.pos);
          if (Math.random() < dt * 5) water.ripple(S.pos.x, S.pos.z, 0.5);
          bus.emit('reel:update', { tension: r.tension, progress: r.progress, holding, pos: S.pos.clone() });
          if (status !== 'reeling') finishReel(status);
          break;
        }
      }
      if (S.name !== 'reeling') line.tint(0);
      if (!active) { marker.visible = false; }
    },
  };
}
