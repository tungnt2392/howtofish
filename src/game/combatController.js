import * as THREE from 'three';
import { WEAPONS } from '../data/weapons.js';
import { applyDamage, trickMultiplier } from '../systems/combat.js';
import { sellValue } from '../systems/economy.js';
import { createCreatureMesh } from '../entities/creatureMesh.js';
import { disposeTree } from '../world/lowpoly.js';

const SPIN_WINDOW = 1.0, SPIN_NEEDED = Math.PI * 2 * 0.85;
const WEAPON_ORDER = ['slingshot', 'pistol', 'shotgun', 'dynamite'];

/** Shooting, trick detection (air / chain / 360 spin), kills and loot. */
export function createCombatController(game) {
  const { bus, store, scene, player, input, creatureSys, aimPoint } = game;
  const S = { cool: 0, chain: 0, chainT: -99, angle: null, hist: [], time: 0 };
  const orbs = [], tracers = [], bombs = [];
  const tmp = new THREE.Vector3(), muzzle = new THREE.Vector3(), dirV = new THREE.Vector3();

  const tracerMat = new THREE.MeshBasicMaterial({ color: 0xffe9a0 });
  const tracerGeo = new THREE.BoxGeometry(0.06, 0.06, 1); tracerGeo.translate(0, 0, 0.5);
  function tracer(a, b, color = 0xffe9a0) {
    const m = new THREE.Mesh(tracerGeo, tracerMat.clone()); m.material.color.setHex(color);
    m.position.copy(a); m.lookAt(b); m.scale.z = a.distanceTo(b); scene.add(m); tracers.push({ m, t: 0 });
  }

  const blocked = () => game.uiBlocking;
  const weapon = () => WEAPONS[store.state.equippedWeapon] || WEAPONS.slingshot;
  function getMuzzle() {
    muzzle.set(player.pos.x + Math.sin(player.facing) * 0.7, player.pos.y + 1.45, player.pos.z + Math.cos(player.facing) * 0.7); return muzzle;
  }

  /** nearest creature under the cursor (generous radius = aim assist), returns {ent, t} */
  function pickUnderCursor(ray, extra = 0.5) {
    let best = null;
    for (const ent of game.creatures) {
      if (!ent.alive || ent.mode === 'water') continue;
      tmp.set(ent.pos.x, ent.pos.y + ent.def.radius * 0.5, ent.pos.z).sub(ray.origin);
      const t = tmp.dot(ray.direction); if (t < 0) continue;
      const perp = Math.sqrt(Math.max(0, tmp.lengthSq() - t * t));
      if (perp <= ent.def.radius * 1.7 + extra && (!best || t < best.t)) best = { ent, t, perp };
    }
    return best;
  }

  function resolveHit(ent, dmg, from, spin) {
    const center = new THREE.Vector3(ent.pos.x, ent.pos.y + ent.def.radius * 0.6, ent.pos.z);
    const air = ent.air, res = applyDamage(ent, dmg);
    ent.hurt = 1;
    bus.emit('hit', { pos: center, damage: dmg, air, ent });
    if (!res.dead) {
      const push = new THREE.Vector3(player.pos.x - ent.pos.x, 0, player.pos.z - ent.pos.z).normalize().multiplyScalar(1.6).add(new THREE.Vector3((Math.random() - 0.5) * 1.6, 0, (Math.random() - 0.5) * 1.6));
      creatureSys.pop(ent, 6.5 + Math.min(3, dmg * 0.04), push);
      return null;
    }
    // ---- kill ----
    S.chain = (S.time - S.chainT < 3) ? S.chain + 1 : 1; S.chainT = S.time;
    const mult = trickMultiplier({ air, spin, chain: S.chain });
    const value = sellValue(ent.def, { mult });
    const tags = [];
    if (spin) tags.push('360 NO-SCOPE! ×5'); if (air) tags.push('AIR SHOT! +1'); if (S.chain > 1) tags.push('CHAIN ×' + S.chain);
    store.state.stats.killed++;
    bus.emit('kill', { creature: ent.def, pos: center, value, mult, tags, ent });
    spawnOrb(ent, center, value, mult);
    creatureSys.remove(ent);
    if (spin) S.hist.length = 0;
    return { value, mult };
  }

  function spawnOrb(ent, pos, value, mult) {
    const mesh = createCreatureMesh(ent.def); mesh.scale.setScalar(0.5); mesh.position.copy(pos); scene.add(mesh);
    const glow = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 0), new THREE.MeshBasicMaterial({ color: 0xffe14d, transparent: true, opacity: 0.35, depthWrite: false }));
    mesh.add(glow);
    orbs.push({ mesh, glow, def: ent.def, value, mult, pos: pos.clone(), vel: new THREE.Vector3((Math.random() - 0.5) * 3, 6, (Math.random() - 0.5) * 3), t: 0 });
  }

  function fire() {
    const w = weapon();
    S.cool = w.cooldown;
    const from = getMuzzle().clone();
    game.cursorRay && (game.cursorRay.direction.normalize());
    const ray = game.cursorRay;
    const spin = Math.abs(S.hist.reduce((a, h) => a + h.d, 0)) >= SPIN_NEEDED;
    const under = pickUnderCursor(ray, w.kind === 'spread' ? 1.4 : 0.5);
    const aimAt = under ? new THREE.Vector3(under.ent.pos.x, under.ent.pos.y + under.ent.def.radius * 0.5, under.ent.pos.z) : aimPoint.clone();
    player.holdAim(0.5); player.playAnim('shoot');
    bus.emit('shoot', { from, weapon: w.id, spin });

    if (w.kind === 'thrown') { throwBomb(from, aimAt, w); return; }
    tracer(from, aimAt);
    if (w.kind === 'spread') {
      for (let i = 1; i < 5; i++) tracer(from, aimAt.clone().add(new THREE.Vector3((Math.random() - 0.5) * 1.4, (Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 1.4)), 0xffc46b);
    }
    // boss first (large target)
    const boss = game.bossCtl;
    let hitBoss = false;
    if (boss && boss.active) {
      const bp = boss.hitTest(ray);
      if (bp && (!under || bp.t < under.t)) { boss.damage(w.damage * (w.kind === 'spread' ? 4 : 1), bp.pos); hitBoss = true; }
    }
    if (!under || hitBoss) return;
    const targets = w.kind === 'spread'
      ? game.creatures.filter(e => e.alive && e.mode !== 'water' && e.pos.distanceTo(under.ent.pos) < 2.2)
      : [under.ent];
    for (const ent of targets) {
      const pellets = w.kind === 'spread' ? (ent === under.ent ? 5 + Math.floor(Math.random() * 2) : 2 + Math.floor(Math.random() * 3)) : 1;
      resolveHit(ent, w.damage * pellets, from, spin);
    }
  }

  function throwBomb(from, to, w) {
    const mesh = new THREE.Group();
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.55, 8), new THREE.MeshStandardMaterial({ color: 0xd8342a, flatShading: true }));
    const spark = new THREE.Mesh(new THREE.IcosahedronGeometry(0.1, 0), new THREE.MeshBasicMaterial({ color: 0xffd23c })); spark.position.y = 0.4;
    mesh.add(stick, spark); mesh.position.copy(from); scene.add(mesh);
    const T = 0.7, G = 24, ground = Math.max(0.15, game.island.groundY(to.x, to.z));
    bombs.push({ mesh, spark, pos: from.clone(), vel: new THREE.Vector3((to.x - from.x) / T, (ground - from.y + 0.5 * G * T * T) / T, (to.z - from.z) / T), fuse: 0.55, landed: false, w, G });
  }

  function explode(b) {
    const w = b.w;
    bus.emit('explosion', { pos: b.pos.clone(), radius: w.radius });
    const spin = false;
    for (const ent of [...game.creatures]) {
      if (!ent.alive || ent.mode === 'water') continue;
      const d = ent.pos.distanceTo(b.pos);
      if (d < w.radius) resolveHit(ent, w.damage * (1 - (d / w.radius) * 0.5), b.pos, spin);
    }
    const boss = game.bossCtl;
    if (boss && boss.active) { const bp = boss.centerPos(); if (bp && bp.distanceTo(b.pos) < w.radius + 3) boss.damage(w.damage * 1.5, bp); }
  }

  return {
    get weapon() { return weapon(); },
    get debug() { return S; },
    update(dt) {
      S.time += dt; S.cool = Math.max(0, S.cool - dt);
      if (dt <= 0 || blocked()) { S.angle = null; S.hist.length = 0; } // paused / in a menu: no spin pre-loading, no weapon keys, no firing
      else {
        // ---- spin history (aim angle around the player) ----
        const a = Math.atan2(aimPoint.z - player.pos.z, aimPoint.x - player.pos.x);
        if (S.angle !== null) {
          let d = a - S.angle; d = Math.atan2(Math.sin(d), Math.cos(d));
          if (Math.abs(d) < 2.5) S.hist.push({ t: S.time, d });
        }
        S.angle = a;
        while (S.hist.length && S.time - S.hist[0].t > SPIN_WINDOW) S.hist.shift();
        // ---- weapon switching ----
        const owned = WEAPON_ORDER.filter(id => store.state.weapons.includes(id));
        for (let i = 0; i < owned.length; i++) if (input.wasPressed('Digit' + (i + 1))) { store.state.equippedWeapon = owned[i]; bus.emit('weapon:equip', { id: owned[i] }); }
        if (input.wasPressed('KeyQ') && owned.length > 1) { store.state.equippedWeapon = owned[(owned.indexOf(store.state.equippedWeapon) + 1) % owned.length]; bus.emit('weapon:equip', { id: store.state.equippedWeapon }); }
        // ---- firing ----
        const wantFire = input.mouse.rightPressed || input.wasPressed('KeyF');
        if (wantFire && !blocked() && S.cool <= 0 && game.fishing.state === 'idle') fire();
      }
      // ---- tracers ----
      for (let i = tracers.length - 1; i >= 0; i--) {
        const t = tracers[i]; t.t += dt; t.m.scale.x = t.m.scale.y = Math.max(0.01, 1 - t.t / 0.09);
        if (t.t > 0.09) { scene.remove(t.m); t.m.material.dispose(); tracers.splice(i, 1); }
      }
      // ---- bombs ----
      for (let i = bombs.length - 1; i >= 0; i--) {
        const b = bombs[i];
        if (!b.landed) {
          b.vel.y -= b.G * dt; b.pos.addScaledVector(b.vel, dt); b.mesh.rotation.x += dt * 12;
          const gy = game.island.walkable(b.pos.x, b.pos.z) ? game.island.groundY(b.pos.x, b.pos.z) + 0.15 : -3;
          if (b.pos.y <= gy && b.vel.y < 0) { b.pos.y = Math.max(gy, 0.15); b.landed = true; b.vel.set(0, 0, 0); }
        } else b.fuse -= dt;
        b.mesh.position.copy(b.pos); b.spark.scale.setScalar(1 + Math.sin(game.time * 40) * 0.5);
        if (b.landed && b.fuse <= 0) { explode(b); scene.remove(b.mesh); disposeTree(b.mesh); bombs.splice(i, 1); }
        else if (b.pos.y < -2) { scene.remove(b.mesh); disposeTree(b.mesh); bombs.splice(i, 1); }
      }
      // ---- loot orbs magnetise to the player ----
      for (let i = orbs.length - 1; i >= 0; i--) {
        const o = orbs[i]; o.t += dt;
        if (o.t < 0.5) { o.vel.y -= 22 * dt; o.pos.addScaledVector(o.vel, dt); const gy = (game.island.walkable(o.pos.x, o.pos.z) ? game.island.groundY(o.pos.x, o.pos.z) : 0) + 0.5; if (o.pos.y < gy) { o.pos.y = gy; o.vel.y *= -0.4; } }
        else {
          tmp.set(player.pos.x, player.pos.y + 1.4, player.pos.z).sub(o.pos);
          const dist = tmp.length(), sp = 6 + (o.t - 0.5) * 30;
          if (dist < 0.7) {
            store.state.inventory.push({ id: o.def.id, name: o.def.name, rarity: o.def.rarity, value: o.value, mult: o.mult });
            bus.emit('loot:collect', { item: o }); scene.remove(o.mesh); disposeTree(o.mesh); orbs.splice(i, 1); continue;
          }
          o.pos.addScaledVector(tmp.normalize(), Math.min(dist, sp * dt));
        }
        o.mesh.position.copy(o.pos); o.mesh.rotation.y += dt * 6; o.glow.scale.setScalar(1 + Math.sin(game.time * 10) * 0.12);
      }
    },
  };
}
