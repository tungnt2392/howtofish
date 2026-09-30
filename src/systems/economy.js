import { CREATURES, RARITY_WEIGHT, RARITY_RANK } from '../data/creatures.js';
import { BAITS, BAIT_PACK, CHUM } from '../data/baits.js';
import { RODS } from '../data/rods.js';
import { WEAPONS } from '../data/weapons.js';

export function pickCreature(baitId, rodId, rng = Math.random) {
  const tier = (BAITS[baitId] || BAITS.ham).tier, luck = (RODS[rodId] || RODS.basic).luck;
  const pool = CREATURES.filter(c => c.minTier <= tier);
  const w = pool.map(c => RARITY_WEIGHT[c.rarity] * (1 + luck * RARITY_RANK[c.rarity]));
  const total = w.reduce((a, b) => a + b, 0);
  let r = Math.min(rng(), 0.999999) * total;
  for (let i = 0; i < pool.length; i++) { r -= w[i]; if (r < 0) return pool[i]; }
  return pool[pool.length - 1];
}
export function sellValue(c, { cooked = false, burnt = false, mult = 1 } = {}) {
  return Math.round(c.baseValue * (burnt ? 0.25 : cooked ? 1.5 : 1) * mult);
}
export function buy(s, kind, id) {
  const item = kind === 'rod' ? RODS[id] : kind === 'bait' ? BAITS[id] : kind === 'weapon' ? WEAPONS[id] : kind === 'chum' ? CHUM : null;
  if (!item || !Number.isFinite(item.price)) return { ok: false, reason: 'unknown' };
  if (kind === 'rod' && s.rods.includes(id)) return { ok: false, reason: 'owned' };
  if (kind === 'weapon' && s.weapons.includes(id)) return { ok: false, reason: 'owned' };
  if (s.money < item.price) return { ok: false, reason: 'funds' };
  s.money -= item.price;
  if (kind === 'rod') { s.rods.push(id); s.equippedRod = id; }
  else if (kind === 'weapon') { s.weapons.push(id); s.equippedWeapon = id; }
  else if (kind === 'bait') { s.baits[id] = (s.baits[id] || 0) + BAIT_PACK; s.equippedBait = id; }
  else s.chum += 1;
  return { ok: true };
}
export function sellAll(s) {
  const total = s.inventory.reduce((a, i) => a + i.value, 0), count = s.inventory.length;
  s.inventory = []; s.money += total; s.stats.earned += total;
  return { total, count };
}
export function equip(s, kind, id) {
  if (kind === 'rod' && s.rods.includes(id)) { s.equippedRod = id; return true; }
  if (kind === 'weapon' && s.weapons.includes(id)) { s.equippedWeapon = id; return true; }
  if (kind === 'bait' && (s.baits[id] || 0) > 0) { s.equippedBait = id; return true; }
  return false;
}

/** Anti-soft-lock: a player with no money, no stock and nothing to sell always has a way back in. */
export function rescueBait(s) {
  if (s.inventory.length) return false;
  if (!s.equippedRod && s.rods.length === 0) {
    if (s.money >= RODS.basic.price) return false;
    s.money = RODS.basic.price; return 'rod';
  }
  const hasBait = Object.values(s.baits).some(n => n > 0);
  if (hasBait || s.money >= BAITS.ham.price) return false;
  s.baits.ham = (s.baits.ham || 0) + 3; s.equippedBait = 'ham'; return 'bait';
}
