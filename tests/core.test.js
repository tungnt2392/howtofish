import { test, expect, vi } from 'vitest';
import { createBus } from '../src/core/events.js';
import { Tweens, Spring, easings } from '../src/core/tween.js';
import { defaultState, serialize, deserialize, loadState, saveState } from '../src/core/store.js';
import { createLoop } from '../src/core/loop.js';

test('bus emits and unsubscribes', () => {
  const bus = createBus(); const fn = vi.fn();
  const off = bus.on('a', fn); bus.emit('a', 1); off(); bus.emit('a', 2);
  expect(fn).toHaveBeenCalledTimes(1); expect(fn).toHaveBeenCalledWith(1);
});
test('tween reaches target and calls onDone', () => {
  const t = new Tweens(); const o = { x: 0 }; const done = vi.fn();
  t.to(o, { x: 10 }, 1, easings.linear, done);
  t.update(0.5); expect(o.x).toBeCloseTo(5);
  t.update(0.6); expect(o.x).toBe(10); expect(done).toHaveBeenCalled();
});
test('spring settles at target', () => {
  const s = new Spring(0); s.target = 1;
  for (let i = 0; i < 600; i++) s.update(1 / 60);
  expect(s.value).toBeCloseTo(1, 2);
});
test('save roundtrip', () => {
  const s = defaultState(); s.money = 42;
  expect(deserialize(serialize(s)).money).toBe(42);
});
test('corrupt / wrong version / missing save -> default', () => {
  expect(deserialize('{nope').money).toBe(defaultState().money);
  expect(deserialize(JSON.stringify({ version: 999, money: 5 })).money).toBe(defaultState().money);
  expect(deserialize(JSON.stringify({ version: 1, money: -50 })).money).toBe(defaultState().money);
  expect(deserialize(null).money).toBe(defaultState().money);
  const empty = { getItem: () => null, setItem() {} };
  expect(loadState(empty).money).toBe(defaultState().money);
});
test('saveState swallows storage errors', () => {
  const bad = { setItem() { throw new Error('quota'); } };
  expect(() => saveState(bad, defaultState())).not.toThrow();
});
test('loop clamps huge frame deltas', () => {
  const update = vi.fn(); const loop = createLoop({ update, render() {}, step: 1 / 60, maxFrame: 0.25 });
  loop.tick(0); const n = loop.tick(60000);
  expect(n).toBeLessThanOrEqual(15); expect(update).toHaveBeenCalledTimes(n);
});
