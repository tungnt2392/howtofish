// End-to-end smoke test: full core loop through the real UI in headless Edge.
// Usage: (dev server running on :5173)  node tests/e2e-smoke.mjs
import { chromium } from 'playwright-core';

const URL = process.env.URL || 'http://localhost:5173/?lowfx';
const browser = await chromium.launch({ channel: 'msedge', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [], log = [];
page.on('console', m => { if (['error', 'warning'].includes(m.type())) errors.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', e => errors.push('[pageerror] ' + e.message));
const G = (f, a) => page.evaluate(f, a);
const step = (name, ok, extra = '') => { log.push({ name, ok }); console.log((ok ? '✔ ' : '✘ ') + name + (extra ? '  ' + extra : '')); if (!ok) process.exitCode = 1; };
const until = async (fn, timeout = 30000, arg) => { try { await page.waitForFunction(fn, arg, { timeout, polling: 100 }); return true; } catch { return false; } };

await page.goto(URL); await page.evaluate(() => localStorage.clear()); await page.reload();
await page.waitForFunction(() => window.__game);
step('title screen renders', !!(await page.$('#t-play')));
await page.click('#t-play', { force: true }); await page.waitForTimeout(800);

// ---- buy a rod + bait through the real UI ----
await G(() => window.__game.player.pos.set(-6.2, 0.6, -4.4));
await page.waitForTimeout(600);
await page.keyboard.press('KeyE');
step('market panel opens with E', await until(() => !!document.querySelector('.panel .tabs')));
await page.click('button[data-act="buy"][data-kind="rod"][data-id="basic"]', { force: true });
await page.click('button[data-act="buy"][data-kind="bait"][data-id="ham"]');
const bought = await G(() => { const s = window.__game.store.state; return { rod: s.equippedRod, ham: s.baits.ham, money: s.money }; });
step('bought Basic Rod ($3) + Ham ×5 ($1)', bought.rod === 'basic' && bought.ham === 5 && bought.money === 1, JSON.stringify(bought));
await page.click('button[data-act="buy"][data-kind="weapon"][data-id="pistol"]');
step('cannot overspend (pistol $40 with $1)', (await G(() => window.__game.store.state.money)) === 1);
await page.keyboard.press('Escape'); await page.waitForTimeout(400);
step('panel closes with Esc', !(await page.$('.panel .tabs')));

// ---- fish ----
await G(() => { const g = window.__game; g.player.pos.set(0, 0.58, -18); g.player.facing = Math.PI; });
await page.mouse.move(640, 240); await page.waitForTimeout(700);
await page.mouse.down(); await page.waitForTimeout(1000); await page.mouse.up();
step('cast → bite', await until(() => window.__game.fishing.state === 'bite', 30000));
await page.mouse.down();
step('hook → reeling', await until(() => window.__game.fishing.state === 'reeling', 3000));
await G(() => { const r = window.__game.fishing.current.reel; if (r) r.progress = Math.max(r.progress, 0.9); });
for (let i = 0; i < 400; i++) {
  const s = await G(() => { const f = window.__game.fishing; return { n: f.state, t: f.current.reel && f.current.reel.tension }; });
  if (s.n !== 'reeling') break;
  if (s.t > 0.7) await page.mouse.up(); else await page.mouse.down();
  await page.waitForTimeout(40);
}
await page.mouse.up();
const caught = await until(() => window.__game.store.state.stats.caught >= 1, 5000);
step('reeled in a creature', caught);

// ---- shoot it (slingshot, RMB) ----
let killed = false;
for (let i = 0; i < 40 && !killed; i++) {
  killed = await G(() => window.__game.store.state.stats.killed >= 1);
  if (killed) break;
  await page.waitForFunction(() => { const c = window.__game.creatures[0]; return !c || c.mode === 'ground'; }, null, { timeout: 8000 }).catch(() => {});
  await G(() => { const g = window.__game, e = g.creatures[0]; if (!e) return; const v = e.pos.clone(); v.y += 0.4; v.project(g.camera); g.input.mouse.ndc.x = v.x; g.input.mouse.ndc.y = v.y; g.input.mouse.rightPressed = true; });
  await page.waitForTimeout(700);
}
step('shot it dead → loot in inventory', killed && (await until(() => window.__game.store.state.inventory.length >= 1, 8000)));

// ---- sell ----
const before = await G(() => window.__game.store.state.money);
await G(() => window.__game.player.pos.set(-6.2, 0.6, -4.4)); await page.waitForTimeout(600);
await page.keyboard.press('KeyE'); await until(() => !!document.querySelector('.panel .tabs'));
await page.click('button[data-act="sellall"]');
const after = await G(() => window.__game.store.state.money);
step('sold catch for cash', after > before, `$${before} → $${after}`);
await page.keyboard.press('Escape'); await page.waitForTimeout(300);

// ---- persistence ----
await page.waitForTimeout(300);
const savedMoney = await G(() => window.__game.store.state.money);
await page.reload(); await page.waitForFunction(() => window.__game);
step('progress persists across reload', (await G(() => window.__game.store.state.money)) === savedMoney);

// ---- corrupt save falls back ----
await G(() => { window.__game.skipSave = true; localStorage.setItem('howtofish.save.v1', '{not json'); }); await page.reload(); await page.waitForFunction(() => window.__game);
step('corrupt save → fresh game (no crash)', (await G(() => window.__game.store.state.money)) === 5);

// ---- rendering sanity ----
const nonBlank = await G(() => { const c = document.querySelector('canvas'); return !!c && c.width > 100; });
step('canvas present', nonBlank);
await page.screenshot({ path: 'shots/e2e-final.png' });
step('no console errors', errors.length === 0, errors.slice(0, 5).join(' | '));
await browser.close();
console.log(`\n${log.filter(l => l.ok).length}/${log.length} checks passed`);
