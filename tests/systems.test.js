import { test, expect } from 'vitest';
import { trickMultiplier, applyDamage, raySphereHit } from '../src/systems/combat.js';
import { createGrill, startCook, updateGrill, pullCook } from '../src/systems/cooking.js';
import { spinSlots, slotRTP } from '../src/systems/slots.js';
import { createBoss, bossHooked, bossUpdate, bossDamage, canSummon } from '../src/systems/bossFight.js';

test('trick multipliers', () => {
  expect(trickMultiplier({ air: false, spin: false, chain: 1 })).toBe(1);
  expect(trickMultiplier({ air: true, spin: false, chain: 1 })).toBe(2);
  expect(trickMultiplier({ air: false, spin: true, chain: 1 })).toBe(5);
  expect(trickMultiplier({ air: true, spin: true, chain: 3 })).toBe(7);
});
test('damage kills once, dead targets inert', () => {
  const t = { hp: 10 }; expect(applyDamage(t, 4)).toEqual({ dead: false }); expect(t.hp).toBe(6);
  expect(applyDamage(t, 99)).toEqual({ dead: true }); expect(t.hp).toBe(0);
  expect(applyDamage(t, 5)).toEqual({ dead: true }); expect(t.hp).toBe(0);
});
test('ray-sphere', () => {
  expect(raySphereHit([0,0,0],[0,0,1],[0,0,5],1)).toBe(true);
  expect(raySphereHit([0,0,0],[0,0,1],[0,3,5],1)).toBe(false);
  expect(raySphereHit([0,0,0],[0,0,1],[0,0,-5],1)).toBe(false);
});
test('grill windows', () => {
  const g = createGrill(); expect(pullCook(g)).toBeNull();
  startCook(g, { id: 'crab' }); updateGrill(g, 1); expect(pullCook(g).result).toBe('raw');
  startCook(g, { id: 'crab' }); updateGrill(g, 4); expect(pullCook(g).result).toBe('cooked');
  startCook(g, { id: 'crab' }); updateGrill(g, 8); expect(pullCook(g).result).toBe('burnt');
});
test('slots: house always wins on average; triples pay', () => {
  const rtp = slotRTP(); expect(rtp).toBeGreaterThan(0.6); expect(rtp).toBeLessThan(0.95);
  expect(spinSlots(() => 0).payoutMult).toBeGreaterThan(0);
  expect(spinSlots(() => 0.999).jackpot).toBe(true);
});
test('boss only takes full damage when stunned', () => {
  const b = createBoss(); const hp0 = b.hp;
  expect(bossDamage(b, 100)).toBe(0); expect(b.hp).toBe(hp0);
  bossHooked(b); expect(b.state).toBe('vulnerable');
  expect(bossDamage(b, 100)).toBe(100);
  bossUpdate(b, 99); expect(b.state).toBe('recover');
  expect(bossDamage(b, 100)).toBe(0);
  bossUpdate(b, 99); expect(b.state).toBe('idle');
});
test('boss double hook does not extend stun; dies at 0', () => {
  const b = createBoss(); bossHooked(b); bossHooked(b);
  expect(b.timer).toBeLessThanOrEqual(b.stunTime);
  b.hp = 50; bossDamage(b, 500); expect(b.state).toBe('dead'); expect(bossDamage(b, 5)).toBe(0);
});
test('canSummon guards', () => {
  const s = { chum: 1, bossDefeated: false }, b = createBoss();
  expect(canSummon(s, b, false)).toBe(true); expect(canSummon(s, b, true)).toBe(false);
  expect(canSummon({ ...s, chum: 0 }, b, false)).toBe(false);
  expect(canSummon({ ...s, bossDefeated: true }, b, false)).toBe(false);
});
