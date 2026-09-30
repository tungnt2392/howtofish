import { chromium } from 'playwright-core';
const browser = await chromium.launch({ channel: 'msedge', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('console', m => { if (['error', 'warning'].includes(m.type())) errors.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', e => errors.push('[pageerror] ' + e.message));
await page.goto('http://localhost:5173/?lowfx');
await page.waitForFunction(() => window.__game);
const G = (f, a) => page.evaluate(f, a);
await G(async () => {
  const g = window.__game; const { CREATURES } = await import('/src/data/creatures.js');
  Object.assign(g.store.state, { weapons: ['slingshot', 'pistol'], equippedWeapon: 'pistol', rods: ['basic'], equippedRod: 'basic', baits: { ham: 5 } });
  g.player.pos.set(0, 0.58, -18); g.player.facing = Math.PI;
  window.__events = []; const o = g.bus.emit; g.bus.emit = (t, p) => { if (['kill', 'hit', 'shoot', 'loot:collect'].includes(t)) window.__events.push(t + (p && p.mult ? ' x' + p.mult + ' ' + (p.tags || []).join('|') : '')); return o(t, p); };
  const def = CREATURES.find(c => c.id === 'crab');
  const e = g.creatureSys.spawn(def, new g.player.pos.constructor(0.9, 0.9, -20)); e.mode = 'ground';
  window.__crab = e;
});
await page.waitForTimeout(800);
// aim at crab
async function shootAtCrab() {
  await page.waitForFunction(() => { const e = window.__crab; return !e || !e.alive || (e.mode === 'ground'); }, null, { timeout: 8000 }).catch(() => {});
  await G(() => { const g = window.__game, e = window.__crab; if (!e || !e.alive) return; const v = e.pos.clone(); v.y += 0.4; v.project(g.camera); g.input.mouse.ndc.x = v.x; g.input.mouse.ndc.y = v.y; g.input.mouse.rightPressed = true; });
  await page.waitForTimeout(450);
}
await shootAtCrab(); await page.screenshot({ path: 'shots/30-hit.png' });
await shootAtCrab(); console.log(JSON.stringify(await G(() => ({ cool: window.__game.combat.debug.cool, fs: window.__game.fishing.state, ui: window.__game.uiBlocking, mode: window.__crab.mode, alive: window.__crab.alive, hs: window.__game.hitstop.scale() }))));
await shootAtCrab();
await page.waitForTimeout(1500);
await page.screenshot({ path: 'shots/31-kill.png' });
console.log(JSON.stringify(await G(() => ({ ev: window.__events, inv: window.__game.store.state.inventory, killed: window.__game.store.state.stats.killed, hp: window.__crab.hp }))));
console.log(errors.length ? errors.join('\n') : 'no console errors');
await browser.close();
