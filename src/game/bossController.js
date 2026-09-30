import * as THREE from 'three';
import { easings } from '../core/tween.js';
import { createBoss, bossHooked, bossUpdate, bossDamage, canSummon } from '../systems/bossFight.js';
import { BOSS } from '../data/boss.js';
import { createBossMesh } from '../entities/bossMesh.js';
import { disposeTree } from '../world/lowpoly.js';

const HOME = new THREE.Vector3(0, 0, -30), NEAR = new THREE.Vector3(0, 0, -26.5);
const HOOK_DEF = { id: 'boss', name: BOSS.name, rarity: 'legendary', fight: 0.62, radius: 2.5, hp: 1, baseValue: 0 };

/** Summon with chum → hook it with the reel minigame → it is stunned → shoot it down. */
export function createBossController(game) {
  const { bus, store, scene, player, water, camRig, tweens } = game;
  const S = { boss: null, mesh: null, active: false, prev: 'idle', pos: HOME.clone(), t: 0, riseY: -6, target: HOME.clone(), telegraph: null, bubble: null, stunT: 0, reelK: 0 };

  function summon() {
    if (!canSummon(store.state, createBoss(), S.active)) return false;
    S.boss = createBoss(); S.defeated = false; S.active = true; S.prev = 'idle'; S.pos.copy(HOME); S.riseY = -7;
    S.mesh = createBossMesh(); S.mesh.position.set(HOME.x, S.riseY, HOME.z); scene.add(S.mesh);
    tweens.to(S, { riseY: 0.3 }, 2.2, easings.outBack);
    bus.emit('boss:summon', {});
    for (let i = 0; i < 6; i++) setTimeout(() => water.ripple(HOME.x + (Math.random() - 0.5) * 8, HOME.z + (Math.random() - 0.5) * 6, 1.4), i * 300);
    return true;
  }

  function damage(dmg, pos) {
    if (!S.active || !S.boss || S.defeated) return;
    const dealt = bossDamage(S.boss, dmg);
    if (dealt > 0) { S.mesh.userData.hurt(); bus.emit('boss:hit', { pos, damage: dealt }); }
    else bus.emit('boss:blocked', { pos });
    if (S.boss.state === 'dead' && !S.defeated) defeat();
  }

  function defeat() {
    S.defeated = true;
    const st = store.state; st.chum = Math.max(0, st.chum - 1); st.bossDefeated = true; st.money += BOSS.reward; st.stats.earned += BOSS.reward;
    const p = S.mesh.position.clone().add(new THREE.Vector3(0, 2, 0));
    bus.emit('boss:down', { pos: p });
    bus.emit('toast', { msg: `🏆 ${BOSS.name} defeated! +$${BOSS.reward}` });
    setTimeout(() => bus.emit('toast', { msg: '🏝️ Island cleared — more islands coming soon!' }), 1800);
    const m = S.mesh; tweens.to(m.position, { y: -8 }, 3, easings.inOutSine, () => { scene.remove(m); disposeTree(m); S.active = false; S.mesh = null; });
    tweens.to(m.rotation, { z: 0.6, x: 0.3 }, 3, easings.outCubic);
  }

  return {
    get active() { return S.active; },
    get boss() { return S.boss; },
    hookDef: HOOK_DEF,
    summon,
    damage,
    centerPos() { return S.mesh ? new THREE.Vector3(S.pos.x, S.mesh.position.y + 2, S.pos.z) : null; },
    /** ray: THREE.Ray. returns {t, pos} when the ray passes through the boss body */
    hitTest(ray) {
      if (!S.active || !S.mesh || S.boss.state === 'dead') return null;
      const c = new THREE.Vector3(S.pos.x, S.mesh.position.y + 2, S.pos.z), o = c.clone().sub(ray.origin), t = o.dot(ray.direction);
      if (t < 0) return null;
      const perp = Math.sqrt(Math.max(0, o.lengthSq() - t * t));
      return perp <= 4.4 ? { t, pos: c.clone() } : null;
    },
    /** a cast that lands near the boss can hook it (only while idle) */
    isTarget(target) { return S.active && S.boss && S.boss.state === 'idle' && S.mesh && Math.hypot(target.x - S.pos.x, target.z - S.pos.z) < 6.5; },
    hookPoint() { return new THREE.Vector3(S.pos.x, 0.6, S.pos.z + 3.2); },
    reelUpdate(progress, tension) { S.reelK = progress; S.mesh && S.mesh.userData.hurt && tension > 0.85 && S.mesh.userData.hurt(); },
    reelEnd(status) {
      S.reelK = 0;
      if (status === 'landed') { bossHooked(S.boss); }
    },
    update(dt) {
      if (!S.active || !S.mesh) return;
      S.t += dt;
      const b = S.boss;
      if (b.state !== 'dead') {
        bossUpdate(b, dt);
        // state transitions → events
        if (b.state !== S.prev) {
          if (b.state === 'vulnerable') { const p = this.centerPos(); bus.emit('boss:stun', { pos: p }); }
          if (b.state === 'recover') this.retaliate();
          S.prev = b.state;
        }
        // where should it be?
        let goal = HOME;
        if (b.state === 'vulnerable') goal = NEAR;
        else if (b.state === 'idle' && S.reelK > 0) goal = HOME.clone().lerp(NEAR, S.reelK * 0.8);
        const sway = b.state === 'idle' ? Math.sin(S.t * 0.5) * 3.5 : 0;
        S.pos.x += ((goal.x + sway) - S.pos.x) * (1 - Math.exp(-2.2 * dt)); S.pos.z += (goal.z - S.pos.z) * (1 - Math.exp(-2.2 * dt));
        S.mesh.position.set(S.pos.x, S.riseY, S.pos.z);
        const mode = b.state === 'vulnerable' ? 'stunned' : b.state === 'recover' ? 'angry' : 'idle';
        S.mesh.userData.animate(S.t, mode, dt);
        if (Math.random() < dt * (mode === 'stunned' ? 2 : 1)) water.ripple(S.pos.x + (Math.random() - 0.5) * 6, S.pos.z + 3 + Math.random() * 2, 0.7);
      }
      // retaliation bubble: telegraph ring → projectile → knock-back
      if (S.telegraph) {
        const tg = S.telegraph; tg.t += dt;
        tg.ring.scale.setScalar(1 + Math.sin(tg.t * 14) * 0.08); tg.mat.opacity = 0.5 + Math.sin(tg.t * 18) * 0.3;
        if (tg.t > 1.1 && !S.bubble) {
          const bub = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 1), new THREE.MeshStandardMaterial({ color: 0x9fe6ff, emissive: 0x4fb6ff, emissiveIntensity: 0.8, transparent: true, opacity: 0.85, flatShading: true }));
          bub.position.copy(S.mesh.position).add(new THREE.Vector3(0, 3, 2)); scene.add(bub);
          S.bubble = { m: bub, from: bub.position.clone(), to: tg.ring.position.clone(), t: 0 };
        }
        if (S.bubble) {
          const bb = S.bubble; bb.t += dt / 0.7; const k = Math.min(1, bb.t);
          bb.m.position.lerpVectors(bb.from, bb.to, k); bb.m.position.y += Math.sin(k * Math.PI) * 6;
          if (k >= 1) this.bubbleHit();
        }
      }
      if (S.stunT > 0) { S.stunT -= dt; if (S.stunT <= 0) { game.input.enabled = !game.uiBlocking; } }
    },
    retaliate() {
      if (S.telegraph) return;
      const ring = new THREE.Mesh(new THREE.RingGeometry(1.4, 1.9, 24), new THREE.MeshBasicMaterial({ color: 0xff4d3d, transparent: true, opacity: 0.7, depthTest: false, depthWrite: false }));
      ring.rotation.x = -Math.PI / 2; ring.position.set(player.pos.x, player.pos.y + 0.12, player.pos.z); ring.renderOrder = 12; scene.add(ring);
      S.telegraph = { ring, mat: ring.material, t: 0 };
      bus.emit('boss:telegraph', { pos: ring.position.clone() });
    },
    bubbleHit() {
      const tg = S.telegraph, bb = S.bubble; scene.remove(bb.m); scene.remove(tg.ring); disposeTree(bb.m); disposeTree(tg.ring); S.telegraph = null; S.bubble = null;
      bus.emit('explosion', { pos: tg.ring.position.clone(), radius: 2 });
      if (Math.hypot(player.pos.x - tg.ring.position.x, player.pos.z - tg.ring.position.z) < 2.3) {
        player.vel.z += 14; player.playAnim('hurt'); game.input.enabled = false; S.stunT = 0.8; bus.emit('boss:playerHit', {});
        bus.emit('toast', { msg: 'Ouch! Keep moving!' });
      } else bus.emit('toast', { msg: 'Dodged!' });
    },
  };
}
