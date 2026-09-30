import * as THREE from 'three';
import { Spring, easings } from '../core/tween.js';
import { mat, mesh, lowpoly, lerpAngle, damp } from '../world/lowpoly.js';

const SKIN = '#ffcf9f';

export function createPlayer(scene, island) {
  const root = new THREE.Group(); scene.add(root);
  const pos = new THREE.Vector3(-1.5, 0, -3), vel = new THREE.Vector3();
  const body = new THREE.Group(); root.add(body); // squash/stretch + bob live here

  const torso = mesh(new THREE.CapsuleGeometry(0.36, 0.5, 4, 8), '#ff7a3d'); torso.scale.z = 0.8; torso.position.y = 1.2; body.add(torso);
  const belt = mesh(new THREE.CylinderGeometry(0.37, 0.37, 0.12, 8), '#2b4a8a'); belt.position.y = 0.86; belt.scale.z = 0.8; body.add(belt);
  const head = new THREE.Group(); head.position.y = 1.95; body.add(head);
  head.add(mesh(lowpoly(new THREE.IcosahedronGeometry(0.36, 1), 0.01, 2), SKIN));
  for (const sx of [-1, 1]) { const e = mesh(new THREE.SphereGeometry(0.055, 6, 5), '#222'); e.position.set(sx * 0.13, 0.04, 0.32); head.add(e); }
  const nose = mesh(new THREE.IcosahedronGeometry(0.06, 0), '#ffb98a'); nose.position.set(0, -0.03, 0.36); head.add(nose);
  const brim = mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.05, 12), '#f2cf63'); brim.position.y = 0.22; head.add(brim);
  const crown = mesh(new THREE.CylinderGeometry(0.28, 0.34, 0.26, 10), '#f2cf63'); crown.position.y = 0.36; head.add(crown);
  const band = mesh(new THREE.CylinderGeometry(0.345, 0.345, 0.07, 10), '#d94a3a'); band.position.y = 0.28; head.add(band);

  const limb = (color, skin, len, w) => {
    const g = new THREE.Group();
    const top = mesh(new THREE.BoxGeometry(w, len * 0.5, w), color); top.position.y = -len * 0.25;
    const bot = mesh(new THREE.BoxGeometry(w * 0.85, len * 0.5, w * 0.85), skin); bot.position.y = -len * 0.75;
    g.add(top, bot); return g;
  };
  const legL = limb('#2b4a8a', SKIN, 0.85, 0.26), legR = limb('#2b4a8a', SKIN, 0.85, 0.26);
  legL.position.set(-0.17, 0.86, 0); legR.position.set(0.17, 0.86, 0);
  for (const l of [legL, legR]) { const shoe = mesh(new THREE.BoxGeometry(0.26, 0.12, 0.38), '#fff'); shoe.position.set(0, -0.86, 0.06); l.add(shoe); body.add(l); }
  const armL = limb('#ff7a3d', SKIN, 0.75, 0.2), armR = limb('#ff7a3d', SKIN, 0.75, 0.2);
  armL.position.set(-0.5, 1.55, 0); armR.position.set(0.5, 1.55, 0); body.add(armL, armR);

  // rod in right hand: two segments so the tip can bend
  const rodG = new THREE.Group(); rodG.position.set(0, -0.78, 0.05); armR.add(rodG);
  rodG.rotation.x = 1.6;
  const seg1 = new THREE.Group(); rodG.add(seg1);
  const s1 = mesh(new THREE.CylinderGeometry(0.035, 0.05, 1.5, 5), '#8b5a2b'); s1.position.y = 0.75; seg1.add(s1);
  const reel = mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.12, 8), '#cfd6de'); reel.rotation.z = Math.PI / 2; reel.position.set(0.09, 0.3, 0); seg1.add(reel);
  const seg2 = new THREE.Group(); seg2.position.y = 1.5; seg1.add(seg2);
  const s2 = mesh(new THREE.CylinderGeometry(0.02, 0.035, 1.4, 5), '#e8553c'); s2.position.y = 0.7; seg2.add(s2);
  const tip = new THREE.Object3D(); tip.position.y = 1.4; seg2.add(tip);
  rodG.visible = false;

  const scale = { x: new Spring(1, 260, 13), y: new Spring(1, 260, 13) };
  const bend = new Spring(0, 200, 10), bendTarget = { v: 0 };
  const state = { phase: 0, facing: Math.PI, moving: 0, anim: null, aimUntil: 0, time: 0, hop: 0, hopV: 0 };

  const player = {
    group: root, pos, vel, rod: rodG,
    get facing() { return state.facing; },
    set facing(v) { state.facing = v; },
    showRod(v) { rodG.visible = v; },
    rodTip(out = new THREE.Vector3()) { tip.updateWorldMatrix(true, false); return tip.getWorldPosition(out); },
    setBend(v) { bendTarget.v = v; },
    squash(a) { scale.y.kick(-a * 14); scale.x.kick(a * 14); },
    /** name: cast | hook | shoot | celebrate | hurt */
    playAnim(name) {
      const dur = { cast: 0.55, hook: 0.45, shoot: 0.25, celebrate: 0.9, hurt: 0.5 }[name] || 0.4;
      state.anim = { name, t: 0, dur };
      if (name === 'cast' || name === 'shoot' || name === 'hook') state.aimUntil = state.time + 1.2;
      if (name === 'hook') { state.hopV = 5.5; this.squash(0.25); }
      if (name === 'celebrate') { state.hopV = 6.5; this.squash(0.3); }
      if (name === 'shoot') this.squash(0.12);
    },
    /** keep facing the aim point for a while (fishing / shooting) */
    holdAim(seconds = 0.3) { state.aimUntil = Math.max(state.aimUntil, state.time + seconds); },
    update(dt, move, aimPoint) {
      state.time += dt;
      const len = Math.hypot(move.x, move.z);
      const speed = 5.6;
      const want = len > 0 ? new THREE.Vector3(move.x / len * speed, 0, move.z / len * speed) : new THREE.Vector3();
      vel.x = damp(vel.x, want.x, len > 0 ? 14 : 18, dt); vel.z = damp(vel.z, want.z, len > 0 ? 14 : 18, dt);
      const nx = pos.x + vel.x * dt, nz = pos.z + vel.z * dt;
      if (island.walkable(nx, nz)) { pos.x = nx; pos.z = nz; }
      else if (island.walkable(nx, pos.z)) { pos.x = nx; vel.z = 0; }
      else if (island.walkable(pos.x, nz)) { pos.z = nz; vel.x = 0; }
      else { vel.x = vel.z = 0; }
      const gy = island.groundY(pos.x, pos.z);
      state.hopV -= 22 * dt; state.hop = Math.max(0, state.hop + state.hopV * dt); if (state.hop === 0 && state.hopV < 0) { if (state.hopV < -3) this.squash(0.18); state.hopV = 0; }
      pos.y = damp(pos.y, gy, 20, dt) + 0;
      root.position.set(pos.x, pos.y + state.hop, pos.z);

      const sp = Math.hypot(vel.x, vel.z), spN = Math.min(1, sp / speed);
      if (state.time < state.aimUntil && aimPoint) state.facing = lerpAngle(state.facing, Math.atan2(aimPoint.x - pos.x, aimPoint.z - pos.z), 1 - Math.exp(-16 * dt));
      else if (sp > 0.3) state.facing = lerpAngle(state.facing, Math.atan2(vel.x, vel.z), 1 - Math.exp(-14 * dt));
      root.rotation.y = state.facing;

      state.phase += dt * (4 + sp * 2.4);
      const sw = Math.sin(state.phase) * 0.95 * spN;
      legL.rotation.x = sw; legR.rotation.x = -sw;
      let armSwing = Math.sin(state.phase) * 0.8 * spN;
      armL.rotation.x = -armSwing; armR.rotation.x = rodG.visible ? -0.5 + armSwing * 0.25 : armSwing;
      armL.rotation.z = 0.08; armR.rotation.z = -0.08;
      const bob = Math.abs(Math.sin(state.phase)) * 0.09 * spN + Math.sin(state.time * 2.2) * 0.012 * (1 - spN);
      body.position.y = bob;
      body.rotation.x = 0.16 * spN; body.rotation.z = Math.sin(state.phase) * 0.04 * spN;
      head.rotation.y = Math.sin(state.time * 1.1) * 0.08 * (1 - spN);

      // one-shot animations layered on arms/body
      const a = state.anim;
      if (a) {
        a.t += dt; const k = Math.min(1, a.t / a.dur);
        if (a.name === 'cast') {
          if (k < 0.35) { const w = easings.outCubic(k / 0.35); armR.rotation.x = -0.5 - 2.1 * w; body.rotation.x -= 0.18 * w; }
          else { const w = easings.outBack((k - 0.35) / 0.65); armR.rotation.x = -2.6 + 2.6 * w; body.rotation.x += 0.22 * Math.sin(Math.min(1, (k - 0.35) * 3) * Math.PI); }
        } else if (a.name === 'hook') { armR.rotation.x = -2.4 * (1 - k) - 0.3 * k; }
        else if (a.name === 'shoot') { armR.rotation.x = -1.5 - 0.5 * (1 - k); body.rotation.x -= 0.2 * (1 - k); }
        else if (a.name === 'celebrate') { const u = Math.sin(k * Math.PI); armL.rotation.x = -2.8 * u; armR.rotation.x = -2.8 * u; body.rotation.y = k * Math.PI * 2; }
        else if (a.name === 'hurt') { body.rotation.z += Math.sin(k * 30) * 0.15 * (1 - k); }
        if (k >= 1) { state.anim = null; body.rotation.y = 0; }
      }
      // squash & stretch
      scale.x.target = 1; scale.y.target = 1;
      scale.x.update(dt); scale.y.update(dt);
      body.scale.set(scale.x.value, scale.y.value, scale.x.value);
      // rod bend spring
      bend.target = bendTarget.v; bend.update(dt);
      seg2.rotation.x = -bend.value * 0.9 + Math.sin(state.time * 30) * 0.02 * Math.abs(bendTarget.v);
      seg1.rotation.x = -bend.value * 0.25;
    },
  };
  return player;
}
