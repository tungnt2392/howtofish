// Usage: node tools/shot.mjs <out.png> [waitMs] [evalScript] [url]
// Loads the dev server in headless Edge (software GL), runs an optional script in the page, screenshots, prints console errors.
import { chromium } from 'playwright-core';

const [out = 'shots/shot.png', wait = '2500', script = '', url = 'http://localhost:5173/'] = process.argv.slice(2);
const browser = await chromium.launch({ channel: 'msedge', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('console', m => { if (['error', 'warning'].includes(m.type())) errors.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', e => errors.push('[pageerror] ' + e.message));
await page.goto(url);
await page.waitForFunction(() => window.__game, null, { timeout: 30000 }).catch(() => errors.push('[shot] __game never appeared'));
if (script) { const r = await page.evaluate(script).catch(e => 'EVAL ERROR: ' + e.message); if (r !== undefined) console.log('eval →', JSON.stringify(r)); }
await page.waitForTimeout(Number(wait));
await page.screenshot({ path: out });
const fps = await page.evaluate(() => new Promise(res => { let n = 0; const t0 = performance.now(); const f = () => { n++; if (performance.now() - t0 > 1500) res(Math.round(n / ((performance.now() - t0) / 1000))); else requestAnimationFrame(f); }; f(); }));
console.log('fps(sw-gl):', fps);
console.log(errors.length ? errors.join('\n') : 'no console errors');
await browser.close();
