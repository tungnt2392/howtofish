import * as THREE from 'three';
import { easings } from '../core/tween.js';
import { createCreatureMesh } from '../entities/creatureMesh.js';
import { disposeTree } from '../world/lowpoly.js';

const G = 24;

/** Owns every live creature in the world: spawn, ballistic flight, flopping, escaping. */
export function createCreatureSystem(game) {
  const { scene, bus, island, tweens } = game;
  const list = []; game.creatures = list;
  let time = 0;

  function spawn(def, pos) {
    const mesh = createCreatureMesh(def);
    mesh.position.copy(pos); mesh.scale.setScalar(0.01); scene.add(mesh);
    tweens.to(mesh.scale, { x: 1, y: 1, z: 1 }, 0.4, easings.outBack);
    const ent = {
      def, mesh, hp: def.hp, maxHp: def.hp, pos: pos.clone(), vel: new THREE.Vector3(), alive: true,
      air: false, mode: 'water', groundAge: 0, hopT: 0.4, yaw: Math.random() * 6.28, roll: 0, pitch: 0, spin: 0,
      escaping: false, hurt: 0, phase: Math.random() * 6.28, seaDir: new THREE.Vector3(0, 0, -1),
    };
    list.push(ent); return ent;
  }

  /** Throw ent along a ballistic arc landing at `target` after T seconds. */
  function launch(ent, target, T = 0.95) {
    ent.mode = 'ballistic'; ent.air = true; ent.groundAge = 0; ent.escaping = false;
    ent.vel.set((target.x - ent.pos.x) / T, (target.y - ent.pos.y + 0.5 * G * T * T) / T, (target.z - ent.pos.z) / T);
    ent.spin = 9; ent.hopT = 0.6;
  }

  /** Pop it up (called when a shot doesn't kill) so the player can juggle for air shots. */
  function pop(ent, up = 7, push) {
    ent.mode = 'ballistic'; ent.air = true; ent.vel.y = up; ent.spin = 12;
    if (push) { ent.vel.x += push.x; ent.vel.z += push.z; }
  }

  function remove(ent) {
    const i = list.indexOf(ent); if (i >= 0) list.splice(i, 1);
    ent.alive = false; scene.remove(ent.mesh);
    if (ent.mesh.isObject3D && ent.mesh.traverse) disposeTree(ent.mesh);
  }

  function landAt(ent) { return island.groundY(ent.pos.x, ent.pos.z) + 0.12 + ent.def.radius * 0.2; }

  function update(dt) {
    time += dt;
    for (const ent of [...list]) {
      const { mesh } = ent;
      ent.hurt = Math.max(0, ent.hurt - dt * 4);
      if (ent.mode === 'ballistic') {
        ent.vel.y -= G * dt;
        const px0 = ent.pos.x, pz0 = ent.pos.z;
        ent.pos.addScaledVector(ent.vel, dt);
        // once it has touched down, juggling/hopping keeps it on solid ground (only 'escaping' may leave)
        if (ent.landedOnce && !ent.escaping && !island.walkable(ent.pos.x, ent.pos.z)) { ent.pos.x = px0; ent.pos.z = pz0; ent.vel.x *= -0.4; ent.vel.z *= -0.4; }
        const overLand = island.walkable(ent.pos.x, ent.pos.z);
        if (!overLand && ent.pos.y < 0.05 && ent.vel.y < 0) {
          bus.emit('creature:splash', { ent, pos: ent.pos.clone(), escaped: ent.escaping || true });
          bus.emit('creature:lost', { ent });
          remove(ent); continue;
        }
        const gy = landAt(ent);
        if (overLand && ent.pos.y <= gy && ent.vel.y < 0) {
          const impact = -ent.vel.y; ent.pos.y = gy; ent.landedOnce = true;
          if (impact > 3.5) bus.emit('catch:bounce', { ent, pos: ent.pos.clone(), impact });
          ent.air = false; ent.spin = 0;
          if (impact < 3) { ent.vel.y = 0; ent.mode = 'ground'; } else ent.vel.y = impact * 0.38;
          ent.vel.x *= 0.55; ent.vel.z *= 0.55;
        }
      } else if (ent.mode === 'ground') {
        ent.groundAge += dt; ent.pos.y = landAt(ent);
        ent.vel.x *= Math.exp(-4 * dt); ent.vel.z *= Math.exp(-4 * dt);
        ent.pos.x += ent.vel.x * dt; ent.pos.z += ent.vel.z * dt;
        if (!ent.escaping && ent.groundAge > 8) { ent.escaping = true; bus.emit('creature:escaping', { ent }); }
        ent.hopT -= dt;
        if (ent.hopT <= 0) {
          ent.hopT = ent.escaping ? 0.35 : 0.5 + Math.random() * 0.9;
          ent.mode = 'ballistic'; ent.vel.y = 3.6 + Math.random() * 2;
          if (ent.escaping) {
            const onDock = ent.pos.x > island.dock.x0 && ent.pos.x < island.dock.x1 && ent.pos.z < island.dock.zStart;
            const d = onDock ? new THREE.Vector3(0, 0, -1) : new THREE.Vector3(ent.pos.x, 0, ent.pos.z).normalize();
            ent.vel.x = d.x * 4; ent.vel.z = d.z * 4;
          } else {
            ent.vel.x = (Math.random() - 0.5) * 3; ent.vel.z = (Math.random() - 0.5) * 3;
            // stay on solid ground: never flop off the dock/shore by accident
            if (!island.walkable(ent.pos.x + ent.vel.x * 0.7, ent.pos.z + ent.vel.z * 0.7)) { ent.vel.x *= -1; ent.vel.z *= -1; }
            if (!island.walkable(ent.pos.x + ent.vel.x * 0.7, ent.pos.z + ent.vel.z * 0.7)) { ent.vel.x = 0; ent.vel.z = 0; }
          }
          ent.spin = 0;
        }
      }
      // ---- visuals ----
      if (ent.mode !== 'water') {
        if (Math.hypot(ent.vel.x, ent.vel.z) > 0.6) ent.yaw = Math.atan2(ent.vel.x, ent.vel.z);
        ent.pitch += ent.spin * dt;
        if (ent.mode === 'ground') ent.pitch *= Math.exp(-10 * dt);
        const lie = mesh.userData.upright ? 0 : (ent.air ? 0.3 : 1.35);
        ent.roll += (lie - ent.roll) * (1 - Math.exp(-10 * dt));
        mesh.rotation.set(ent.pitch, ent.yaw, ent.roll, 'YXZ');
        mesh.position.copy(ent.pos);
      }
      mesh.userData.anim(time + ent.phase, ent.air ? 0.7 : 0.9 + ent.hurt);
      mesh.userData.flash(ent.hurt);
    }
  }

  return { spawn, launch, pop, remove, update, list };
}
