import { BAITS } from '../data/baits.js';
import { RODS } from '../data/rods.js';
import { WEAPONS } from '../data/weapons.js';

export const SAVE_KEY = 'howtofish.save.v1';
export const SAVE_VERSION = 1;
export function defaultState() {
  return {
    version: SAVE_VERSION, money: 5,
    rods: [], equippedRod: null,
    baits: {}, equippedBait: 'ham',
    weapons: ['slingshot'], equippedWeapon: 'slingshot',
    inventory: [], chum: 0, bossDefeated: false, goldenRod: false,
    dex: {}, stats: { caught: 0, killed: 0, earned: 0 },
  };
}
/** Coerce every field to a shape the game can safely use; unknown ids / wrong types fall back to defaults. */
function sanitize(p) {
  const d = defaultState(), isObj = v => v && typeof v === 'object' && !Array.isArray(v);
  const bools = ['bossDefeated', 'goldenRod'];
  for (const k of bools) p[k] = p[k] === true;
  p.chum = Number.isFinite(p.chum) && p.chum > 0 ? Math.floor(p.chum) : 0;
  p.rods = (Array.isArray(p.rods) ? p.rods : []).filter(id => RODS[id]);
  if (!p.rods.includes(p.equippedRod)) p.equippedRod = null;
  const baits = {}; if (isObj(p.baits)) for (const [k, n] of Object.entries(p.baits)) if (BAITS[k] && Number.isFinite(n) && n > 0) baits[k] = Math.floor(n);
  p.baits = baits; if (!BAITS[p.equippedBait]) p.equippedBait = 'ham';
  p.weapons = (Array.isArray(p.weapons) ? p.weapons : []).filter(id => WEAPONS[id]);
  if (!p.weapons.includes('slingshot')) p.weapons.unshift('slingshot');
  if (!p.weapons.includes(p.equippedWeapon)) p.equippedWeapon = 'slingshot';
  p.inventory = (Array.isArray(p.inventory) ? p.inventory : []).filter(i => isObj(i) && typeof i.id === 'string' && typeof i.name === 'string' && typeof i.rarity === 'string' && Number.isFinite(i.value)).map(i => ({ ...i, value: Math.max(0, Math.round(i.value)) }));
  p.dex = isObj(p.dex) ? p.dex : {};
  p.stats = { ...d.stats, ...(isObj(p.stats) ? p.stats : {}) };
  for (const k of Object.keys(d.stats)) if (!Number.isFinite(p.stats[k])) p.stats[k] = 0;
  return p;
}
export const serialize = s => JSON.stringify(s);
export function deserialize(str) {
  try {
    const p = JSON.parse(str);
    if (!p || p.version !== SAVE_VERSION || !Number.isFinite(p.money) || p.money < 0) return defaultState();
    return sanitize({ ...defaultState(), ...p });
  } catch { return defaultState(); }
}
export function loadState(storage) { try { return deserialize(storage.getItem(SAVE_KEY)); } catch { return defaultState(); } }
export function saveState(storage, s) { try { storage.setItem(SAVE_KEY, serialize(s)); } catch { /* ignore quota/private mode */ } }
export function createStore(initial = defaultState()) {
  const store = {
    state: initial,
    reset() { store.state = defaultState(); },
  };
  return store;
}
