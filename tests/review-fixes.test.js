import { test, expect } from 'vitest';
import * as THREE from 'three';
import { deserialize, defaultState, SAVE_KEY } from '../src/core/store.js';
import { canCast, consumeBait } from '../src/systems/fishing.js';
import { rescueBait } from '../src/systems/economy.js';
import { Tweens } from '../src/core/tween.js';
import { createBus } from '../src/core/events.js';
import { createBossController } from '../src/game/bossController.js';

test('malformed nested save fields fall back instead of crashing later', () => {
  const bad = (patch) => deserialize(JSON.stringify({ version: 1, money: 10, ...patch }));
  expect(bad({ stats: null }).stats).toEqual(defaultState().stats);
  expect(Array.isArray(bad({ inventory: null }).inventory)).toBe(true);
  expect(bad({ inventory: [null, 5, { value: 'x' }, { id: 'crab', name: 'Crab', rarity: 'common', value: 4 }] }).inventory.length).toBe(1);
  expect(bad({ equippedBait: 'nope' }).equippedBait).toBe('ham');
  expect(bad({ baits: 'x' }).baits).toEqual({});
  expect(bad({ baits: { ham: -3, fries: 'a', hotdog: 2 } }).baits).toEqual({ hotdog: 2 });
  expect(bad({ rods: ['basic', 'ghost'], equippedRod: 'ghost' }).equippedRod).toBe(null);
  expect(bad({ weapons: [] }).weapons).toContain('slingshot');
  expect(bad({ equippedWeapon: 'laser' }).equippedWeapon).toBe('slingshot');
  expect(bad({ money: 10 }).money).toBe(10);
});

test('owned bait auto-equips when the equipped bait runs out', () => {
  const s = defaultState(); s.rods = ['basic']; s.equippedRod = 'basic'; s.baits = { ham: 1, fries: 5 }; s.equippedBait = 'ham';
  consumeBait(s);
  expect(canCast(s).ok).toBe(true);
  expect(s.equippedBait).toBe('fries');
  s.baits = {}; expect(canCast(s)).toEqual({ ok: false, reason: 'nobait' });
});

test('rescue: broke player with nothing gets a way back in; never when they can still play', () => {
  const s = defaultState(); s.money = 0; s.rods = ['basic']; s.equippedRod = 'basic';
  expect(rescueBait(s)).toBe('bait'); expect(s.baits.ham).toBe(3); expect(s.equippedBait).toBe('ham');
  expect(rescueBait(s)).toBe(false);                                   // has bait now
  const t = defaultState(); t.money = 0; t.baits = { ham: 2 }; expect(rescueBait(t)).toBe('rod'); expect(t.money).toBe(3);
  const u = defaultState(); u.money = 5; expect(rescueBait(u)).toBe(false);          // can afford things
  const v = defaultState(); v.money = 0; v.rods = ['basic']; v.equippedRod = 'basic'; v.inventory = [{ id: 'crab', value: 15 }]; expect(rescueBait(v)).toBe(false); // can sell
});

test('boss reward is paid once even if damage lands during the death animation; chum spent on defeat only', () => {
  const bus = createBus(), scene = new THREE.Scene(), tweens = new Tweens();
  const state = { chum: 1, bossDefeated: false, money: 0, stats: { earned: 0 } };
  const game = { bus, store: { state }, scene, player: { pos: new THREE.Vector3(), vel: new THREE.Vector3(), playAnim() {} }, water: { ripple() {} }, camRig: {}, tweens, input: {}, uiBlocking: false };
  const ctl = createBossController(game);
  expect(ctl.summon()).toBe(true); expect(state.chum).toBe(1);        // not consumed until the fight is won
  expect(ctl.summon()).toBe(false);                                   // no double summon
  ctl.reelEnd('landed');
  const p = ctl.centerPos();
  ctl.damage(99999, p); expect(state.money).toBe(1500); expect(state.chum).toBe(0);
  ctl.damage(99999, p); ctl.damage(1, p);
  expect(state.money).toBe(1500); expect(state.stats.earned).toBe(1500);
});
