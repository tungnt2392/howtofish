export const COOK_TIME = 3, BURN_TIME = 7;
export const createGrill = () => ({ item: null, t: 0 });
export function startCook(g, item) { g.item = item; g.t = 0; }
export function updateGrill(g, dt) { if (g.item) g.t += dt; return g; }
export function pullCook(g) {
  if (!g.item) return null;
  const result = g.t >= BURN_TIME ? 'burnt' : g.t >= COOK_TIME ? 'cooked' : 'raw';
  const item = g.item; g.item = null; g.t = 0; return { item, result };
}

/** Mutates the inventory item for a finished cook. Items can only be cooked once (raw may be retried). */
export function applyCookResult(item, result) {
  if (item.cooked) return false;
  if (result === 'cooked') { item.value = Math.round(item.value * 1.5); item.cooked = 'cooked'; }
  else if (result === 'burnt') { item.value = Math.round(item.value * 0.25); item.cooked = 'burnt'; }
  return true;
}
