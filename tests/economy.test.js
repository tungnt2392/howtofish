import { test, expect } from 'vitest';
import { defaultState } from '../src/core/store.js';
import { CREATURES } from '../src/data/creatures.js';
import { pickCreature, sellValue, buy, sellAll, equip } from '../src/systems/economy.js';

const seq = arr => { let i = 0; return () => arr[i++ % arr.length]; };

test('tier 1 bait only yields tier-1 creatures', () => {
  for (let i = 0; i < 300; i++) expect(pickCreature('ham', 'basic').minTier).toBeLessThanOrEqual(1);
});
test('higher bait can reach legendary', () => {
  expect(pickCreature('lurePro', 'golden', () => 0.9999).rarity).toBe('legendary');
});
test('luck shifts distribution towards rarer creatures', () => {
  const avg = rod => { let s = 0; const r = seq([...Array(200)].map((_, i) => i / 200)); for (let i = 0; i < 200; i++) s += pickCreature('lurePro', rod, r).baseValue; return s; };
  expect(avg('golden')).toBeGreaterThan(avg('basic'));
});
test('sellValue applies cook x1.5, burnt x0.25, mult', () => {
  const c = CREATURES.find(x => x.id === 'crab');
  expect(sellValue(c, {})).toBe(15);
  expect(sellValue(c, { cooked: true })).toBe(23);
  expect(sellValue(c, { burnt: true })).toBe(4);
  expect(sellValue(c, { mult: 5 })).toBe(75);
});
test('buy rod for $3 with $5 succeeds; cannot buy twice', () => {
  const s = defaultState();
  expect(buy(s, 'rod', 'basic').ok).toBe(true);
  expect(s.money).toBe(2); expect(s.rods).toContain('basic'); expect(s.equippedRod).toBe('basic');
  expect(buy(s, 'rod', 'basic').ok).toBe(false); expect(s.money).toBe(2);
});
test('insufficient funds / unknown id never change state or go negative', () => {
  const s = defaultState(); s.money = 2;
  expect(buy(s, 'rod', 'carbon')).toEqual({ ok: false, reason: 'funds' });
  expect(buy(s, 'rod', 'nope').ok).toBe(false);
  expect(buy(s, 'bogus', 'x').ok).toBe(false);
  expect(buy(s, 'rod', 'golden').ok).toBe(false);
  expect(s.money).toBe(2);
});
test('bait packs add 5 units', () => {
  const s = defaultState(); buy(s, 'bait', 'ham');
  expect(s.baits.ham).toBe(5); expect(s.money).toBe(4);
});
test('sellAll totals, empties, and tolerates empty inventory', () => {
  const s = defaultState(); expect(sellAll(s)).toEqual({ total: 0, count: 0 });
  s.inventory = [{ id: 'crab', value: 15 }, { id: 'sardine', value: 4 }];
  expect(sellAll(s)).toEqual({ total: 19, count: 2 });
  expect(s.inventory).toEqual([]); expect(s.money).toBe(24); expect(s.stats.earned).toBe(19);
});
test('equip refuses unowned gear', () => {
  const s = defaultState(); expect(equip(s, 'rod', 'carbon')).toBe(false);
  expect(equip(s, 'weapon', 'slingshot')).toBe(true);
});
