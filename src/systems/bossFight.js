import { BOSS } from '../data/boss.js';
export const createBoss = () => ({ hp: BOSS.hp, maxHp: BOSS.hp, state: 'idle', timer: 0, stunTime: BOSS.stunTime });
export function bossHooked(b) { if (b.state === 'idle' || b.state === 'vulnerable') { b.state = 'vulnerable'; b.timer = BOSS.stunTime; } }
export function bossUpdate(b, dt) {
  if (b.state === 'dead' || b.state === 'idle') return;
  b.timer -= dt;
  if (b.timer > 0) return;
  if (b.state === 'vulnerable') { b.state = 'recover'; b.timer = BOSS.recoverTime; } else { b.state = 'idle'; b.timer = 0; }
}
export function bossDamage(b, dmg) {
  if (b.state !== 'vulnerable') return 0;
  const dealt = Math.min(dmg, b.hp); b.hp -= dealt;
  if (b.hp <= 0) { b.state = 'dead'; b.timer = 0; }
  return dealt;
}
export const canSummon = (s, b, active) => !active && s.chum > 0 && !s.bossDefeated && b.state !== 'dead';
