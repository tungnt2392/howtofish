import { test, expect } from 'vitest';
import { applyCookResult } from '../src/systems/cooking.js';

test('cooked x1.5, burnt x0.25, raw unchanged; cannot cook twice', () => {
  const a = { id: 'crab', value: 15 }; applyCookResult(a, 'cooked');
  expect(a.value).toBe(23); expect(a.cooked).toBe('cooked');
  const b = { id: 'crab', value: 15 }; applyCookResult(b, 'burnt'); expect(b.value).toBe(4);
  const c = { id: 'crab', value: 15 }; applyCookResult(c, 'raw'); expect(c.value).toBe(15); expect(c.cooked).toBeUndefined();
  expect(applyCookResult(a, 'cooked')).toBe(false); expect(a.value).toBe(23);
});
