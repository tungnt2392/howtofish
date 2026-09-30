import { test, expect } from 'vitest';
import { defaultState } from '../src/core/store.js';
import { RODS } from '../src/data/rods.js';
import { CREATURES } from '../src/data/creatures.js';
import { castPower, castDistance, canCast, consumeBait, biteDelay, createReel, updateReel } from '../src/systems/fishing.js';

test('cast power clamps 0..1', () => {
  expect(castPower(0)).toBe(0); expect(castPower(0.6)).toBeCloseTo(0.5); expect(castPower(99)).toBe(1);
});
test('cast distance scales with rod range', () => {
  expect(castDistance(1, RODS.basic)).toBe(10); expect(castDistance(0, RODS.basic)).toBe(3);
});
test('cast refused without rod or bait, and consumes nothing', () => {
  const s = defaultState();
  expect(canCast(s)).toEqual({ ok: false, reason: 'norod' });
  s.rods = ['basic']; s.equippedRod = 'basic';
  expect(canCast(s)).toEqual({ ok: false, reason: 'nobait' });
  expect(s.baits).toEqual({});
});
test('consumeBait decrements and returns id', () => {
  const s = defaultState(); s.rods = ['basic']; s.equippedRod = 'basic'; s.baits = { ham: 2 };
  expect(canCast(s).ok).toBe(true); expect(consumeBait(s)).toBe('ham'); expect(s.baits.ham).toBe(1);
});
test('bite delay in range', () => {
  expect(biteDelay(() => 0)).toBeCloseTo(1.5); expect(biteDelay(() => 1)).toBeCloseTo(5);
});
test('never reeling -> escapes', () => {
  const r = createReel(CREATURES[0], RODS.basic); let st = 'reeling';
  for (let i = 0; i < 60 * 30 && st === 'reeling'; i++) st = updateReel(r, 1 / 60, false);
  expect(st).toBe('escaped');
});
test('holding forever -> snaps', () => {
  const r = createReel(CREATURES[0], RODS.basic); let st = 'reeling';
  for (let i = 0; i < 60 * 30 && st === 'reeling'; i++) st = updateReel(r, 1 / 60, true);
  expect(st).toBe('snapped');
});
test('a pulsing player lands a common creature', () => {
  const r = createReel(CREATURES[0], RODS.basic); let st = 'reeling', steps = 0;
  while (st === 'reeling' && steps++ < 60 * 60) st = updateReel(r, 1 / 60, r.tension < 0.75);
  expect(st).toBe('landed');
});
test('updateReel after finish is inert', () => {
  const r = createReel(CREATURES[0], RODS.basic); r.status = 'escaped';
  expect(updateReel(r, 1 / 60, true)).toBe('escaped');
});
