import { RODS } from '../data/rods.js';
import { BAITS } from '../data/baits.js';
export const castPower = h => Math.max(0, Math.min(1, h / 1.2));
export const castDistance = (p, rod) => 3 + p * (rod.range - 3);
export function canCast(s) {
  if (!s.equippedRod || !RODS[s.equippedRod]) return { ok: false, reason: 'norod' };
  if ((s.baits[s.equippedBait] || 0) <= 0) {
    // fall back to the best bait still owned so leftover stock is never stranded
    const next = Object.keys(s.baits).filter(k => s.baits[k] > 0 && BAITS[k]).sort((a, b) => BAITS[b].tier - BAITS[a].tier)[0];
    if (!next) return { ok: false, reason: 'nobait' };
    s.equippedBait = next;
  }
  return { ok: true };
}
export function consumeBait(s) { s.baits[s.equippedBait] -= 1; return s.equippedBait; }
export const biteDelay = (rng = Math.random) => 1.5 + rng() * 3.5;
export function createReel(creature, rod) {
  return { creature, rod, progress: 0.2, tension: 0.1, t: 0, status: 'reeling' };
}
export function updateReel(r, dt, holding) {
  if (r.status !== 'reeling') return r.status;
  r.t += dt;
  const surge = Math.max(0, Math.sin(r.t * 3.2));
  r.tension += ((holding ? 0.7 : -0.5) + r.creature.fight * surge * 1.5) * dt;
  r.tension = Math.max(0, r.tension);
  r.progress += (holding ? r.rod.reelSpeed * (1 - 0.3 * r.tension) : -0.05) * dt;
  if (r.tension >= 1) r.status = 'snapped';
  else if (r.progress >= 1) r.status = 'landed';
  else if (r.progress <= 0) r.status = 'escaped';
  return r.status;
}
