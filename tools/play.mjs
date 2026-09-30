// Scripted playthrough for visual checks. Usage: node tools/play.mjs
import { chromium } from 'playwright-core';
const browser = await chromium.launch({ channel: 'msedge', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('console', m => { if (['error', 'warning'].includes(m.type())) errors.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', e => errors.push('[pageerror] ' + e.message));
await page.goto('http://localhost:5173/?lowfx');
await page.waitForFunction(() => window.__game);
const G = f => page.evaluate(f);
await G(() => { const g = window.__game; localStorage.clear(); Object.assign(g.store.state, { money: 50, rods: ['basic'], equippedRod: 'basic', baits: { ham: 20 } }); g.player.pos.set(0, 0.58, -18); g.player.facing = Math.PI; });
await page.mouse.move(640, 250);
await page.waitForTimeout(1200);
await page.mouse.down(); await page.waitForTimeout(900); await page.screenshot({ path: 'shots/10-charge.png' });
await page.mouse.up(); await page.waitForTimeout(500); await page.screenshot({ path: 'shots/11-flight.png' });
let st = '';
for (let i = 0; i < 200 && st !== 'bite'; i++) { await page.waitForTimeout(150); st = await G(() => window.__game.fishing.state); }
console.log('reached state:', st);
await page.mouse.down();
for (let i = 0; i < 20 && (await G(() => window.__game.fishing.state)) === 'bite'; i++) await page.waitForTimeout(50);
console.log('hooked ->', await G(() => window.__game.fishing.state));
await G(() => { const r = window.__game.fishing.current.reel; if (r) r.progress = 0.85; });
let shots = 0;
for (let i = 0; i < 400; i++) {
  const s = await G(() => { const g = window.__game, c = g.fishing.current; return { name: g.fishing.state, t: c.reel && c.reel.tension, p: c.reel && c.reel.progress }; });
  if (s.name !== 'reeling') { console.log('reel ended, state', s.name); break; }
  if (s.t > 0.72) await page.mouse.up(); else await page.mouse.down();
  if (shots < 1 && s.p > 0.45) { await page.screenshot({ path: 'shots/13-reel.png' }); shots++; }
  await page.waitForTimeout(60);
}
await page.mouse.up();
for (let i = 0; i < 14; i++) { console.log(i, JSON.stringify(await G(() => { const g = window.__game, c = g.creatures[0]; return c ? { m: c.mode, air: c.air, p: c.pos.toArray().map(v => +v.toFixed(1)), t: +g.time.toFixed(1) } : { gone: true, pl: g.player.pos.toArray().map(v => +v.toFixed(1)) }; }))); await page.waitForTimeout(120); }
await page.screenshot({ path: 'shots/14-land.png' });
await page.waitForTimeout(1500); await page.screenshot({ path: 'shots/15-flop.png' });
console.log('creature', await G(() => { const c = window.__game.creatures[0]; return c && { id: c.def.id, mode: c.mode, pos: c.pos.toArray().map(v => +v.toFixed(2)), vis: c.mesh.visible }; }));
console.log('caught:', await G(() => window.__game.store.state.stats.caught), 'creatures:', await G(() => window.__game.creatures.length));
console.log(errors.length ? errors.join('\n') : 'no console errors');
await browser.close();
