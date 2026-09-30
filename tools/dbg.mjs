import { chromium } from 'playwright-core';
const browser = await chromium.launch({ channel: 'msedge', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
page.on('console', m => console.log('[page]', m.text()));
page.on('pageerror', e => console.log('[pageerror]', e.message));
await page.goto('http://localhost:5173/');
await page.waitForFunction(() => window.__game);
await page.evaluate(() => { const g = window.__game; localStorage.clear(); Object.assign(g.store.state, { money: 50, rods: ['basic'], equippedRod: 'basic', baits: { ham: 20 } }); g.player.pos.set(0, 0.58, -18);
  const orig = g.bus.emit; g.bus.emit = (t, p) => { if (t !== 'reel:update' && t !== 'cast:charge') console.log('EVT', t, g.fishing.state, g.time.toFixed(2)); return orig(t, p); }; });
await page.mouse.move(640, 250); await page.waitForTimeout(800);
await page.mouse.down(); await page.waitForTimeout(700); await page.mouse.up();
for (let i = 0; i < 100; i++) { await page.waitForTimeout(120); if (await page.evaluate(() => window.__game.fishing.state) === 'bite') break; }
await page.mouse.down(); await page.waitForTimeout(1500);
console.log('state', await page.evaluate(() => window.__game.fishing.state));
await browser.close();
