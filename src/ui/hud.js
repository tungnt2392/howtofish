import * as THREE from 'three';
import { RODS } from '../data/rods.js';
import { BAITS } from '../data/baits.js';
import { WEAPONS } from '../data/weapons.js';
import { SAVE_KEY } from '../core/store.js';
import { createShopPanel } from './shopPanel.js';
import { rescueBait } from '../systems/economy.js';

const BAIT_ICON = { ham: '🍖', hotdog: '🌭', fries: '🍟', lurePro: '🪝' };
const WEAPON_ICON = { slingshot: '🪃', pistol: '🔫', shotgun: '💥', dynamite: '🧨' };
const WEAPON_ORDER = ['slingshot', 'pistol', 'shotgun', 'dynamite'];
const NEAR = 3.4;

/** HUD, station prompts, contextual hints, boss bar, title screen and pause menu. */
export function createHud(root, game) {
  const { bus, store, player, camera, island, input } = game;
  const wrap = document.createElement('div'); wrap.className = 'hud';
  wrap.innerHTML = `
    <div class="hud-tl"><div class="pill" id="h-money"><span class="ico">🪙</span><span id="h-moneyv">0</span></div><div class="pill small" id="h-inv">🐟 0 · $0</div></div>
    <div class="hud-hint hide" id="h-hint"></div>
    <div class="bossbar" id="h-boss"><div id="h-bossname">Colossal Spider Crab</div><div class="track"><div class="fill" id="h-bossfill"></div></div></div>
    <div class="hud-bl" id="h-gear"></div>
    <div class="hud-bc">
      <div class="bar progress" id="h-prog"><div class="fill" id="h-progfill"></div></div>
      <div class="bar tension" id="h-tens"><div class="safe"></div><div class="danger"></div><div class="fill" id="h-tensfill"></div><div class="lbl" id="h-tenslbl">Hold to reel — let go before it snaps!</div></div>
      <div class="bar power" id="h-power"><div class="fill" id="h-powerfill"></div><div class="lbl">Release to cast</div></div>
    </div>
    <div class="hud-br" id="h-controls"><kbd>WASD</kbd> move &nbsp; <kbd>Hold LMB</kbd> cast &nbsp; <kbd>LMB</kbd> hook / reel<br/><kbd>RMB</kbd> shoot &nbsp; <kbd>1</kbd>-<kbd>4</kbd> weapon &nbsp; <kbd>E</kbd> interact &nbsp; <kbd>M</kbd> mute &nbsp; <kbd>Esc</kbd> menu</div>
    <div class="prompt" id="h-prompt"><span class="k">E</span><span id="h-promptt"></span></div>`;
  root.appendChild(wrap);
  const $ = id => wrap.querySelector('#' + id);
  const el = { money: $('h-money'), moneyv: $('h-moneyv'), inv: $('h-inv'), hint: $('h-hint'), gear: $('h-gear'), prog: $('h-prog'), progfill: $('h-progfill'), tens: $('h-tens'), tensfill: $('h-tensfill'), tenslbl: $('h-tenslbl'), power: $('h-power'), powerfill: $('h-powerfill'), prompt: $('h-prompt'), promptt: $('h-promptt'), boss: $('h-boss'), bossfill: $('h-bossfill'), bossname: $('h-bossname'), controls: $('h-controls') };
  const panel = createShopPanel(root, game);
  game.panel = panel;

  const S = { shownMoney: store.state.money, lastMoney: store.state.money, tension: 0, progress: 0, reelT: -9, power: 0, powerT: -9, hintKey: '', gearKey: '', started: false, paused: false, t: 0, pauseEl: null };

  bus.on('reel:update', e => { S.tension = e.tension; S.progress = e.progress; S.reelT = S.t; });
  bus.on('cast:charge', e => { S.power = e.power; S.powerT = S.t; });

  // ---- title ----
  const title = document.createElement('div'); title.className = 'title';
  const letters = txt => [...txt].map((c, i) => c === ' ' ? ' ' : `<span style="animation-delay:${i * 0.09}s">${c}</span>`).join('');
  const hasSave = !!localStorage.getItem(SAVE_KEY) && store.state.stats.caught + store.state.stats.killed > 0;
  title.innerHTML = `<div><h1>${letters('HOW TO')}<br/><span class="fish">${letters('FISH')}</span></h1><p>Fish. Shoot. Sell. Survive the island.</p><button class="btn yellow" id="t-play">${hasSave ? 'Continue' : 'Play'}</button>${hasSave ? '<br/><button class="btn small red" id="t-new" style="margin-top:14px">New game</button>' : ''}<span class="sub" style="color:#fff;-webkit-text-stroke:4px var(--ink);paint-order:stroke fill">Unofficial fan-made tribute • built with Three.js</span></div>`;
  root.appendChild(title);
  game.uiBlocking = true; game.input.enabled = false;
  function start() {
    if (S.started) return; S.started = true; title.classList.add('gone'); setTimeout(() => title.remove(), 700);
    game.uiBlocking = false; game.input.enabled = true; bus.emit('game:start', {}); bus.emit('ui:click', {});
  }
  title.querySelector('#t-play').onclick = start;
  const tn = title.querySelector('#t-new'); if (tn) tn.onclick = () => newGame();

  function newGame() { game.skipSave = true; localStorage.removeItem(SAVE_KEY); location.reload(); }

  // ---- pause ----
  function togglePause(force) {
    const want = force ?? !S.paused;
    if (want === S.paused) return;
    S.paused = want; game.paused = want;
    if (want) {
      game.uiBlocking = true; game.input.enabled = false;
      const o = document.createElement('div'); o.className = 'overlay';
      o.innerHTML = `<div class="panel" style="width:min(420px,90vw)"><header><h2>Paused</h2></header><div class="pause-actions"><button class="btn" data-a="resume">▶ Resume</button><button class="btn blue" data-a="mute">🔊 Sound: on</button><button class="btn red" data-a="new">🗑 New game</button></div></div>`;
      o.addEventListener('pointerdown', e => e.stopPropagation());
      o.onclick = e => {
        const a = e.target.closest('[data-a]')?.dataset.a; if (!a) return; bus.emit('ui:click', {});
        if (a === 'resume') togglePause(false);
        if (a === 'mute') { const m = game.audio ? game.audio.toggleMute() : false; e.target.textContent = m ? '🔇 Sound: off' : '🔊 Sound: on'; }
        if (a === 'new') { if (e.target.dataset.sure) newGame(); else { e.target.dataset.sure = '1'; e.target.textContent = 'Really? Click again'; } }
      };
      root.appendChild(o); S.pauseEl = o;
    } else { S.pauseEl && S.pauseEl.remove(); game.uiBlocking = false; game.input.enabled = true; }
  }

  // ---- stations ----
  const stationList = () => {
    const st = island.stations, s = store.state, list = [
      { id: 'vendor', pos: st.vendor, text: 'Fish Market', act: () => panel.open('vendor', s.inventory.length ? 'sell' : 'shop') },
      { id: 'grill', pos: st.grill, text: 'Beach Grill', act: () => panel.open('grill') },
      { id: 'slots', pos: st.slots, text: 'Lucky Slots', act: () => panel.open('slots') },
    ];
    if (s.chum > 0 && !s.bossDefeated && game.bossCtl && !game.bossCtl.active) list.push({ id: 'dock', pos: st.dockEnd, text: 'Throw the chum!', act: () => game.bossCtl.summon() });
    return list;
  };
  const v = new THREE.Vector3(); let nearStation = null;

  // ---- hint logic ----
  function hint() {
    const s = store.state, fs = game.fishing.state, p = player.pos;
    if (game.bossCtl && game.bossCtl.active) return null;
    if (!s.equippedRod) return 'Head to the <b>Fish Market</b> (the striped hut) and press <b>E</b> to buy a <b>Basic Rod</b> — $3';
    if (!(s.baits[s.equippedBait] > 0)) return 'Buy some <b>bait</b> at the market — press <b>E</b> next to the hut';
    if (fs === 'waiting') return 'Wait for the bobber to dip…';
    if (fs === 'bite') return '<b>CLICK NOW!</b>';
    if (fs === 'reeling') return 'Hold <b>Left Mouse</b> to reel — <b>let go</b> when the bar goes red!';
    if (fs === 'charging') return 'Release to throw — more hold = further';
    if (game.creatures.some(c => c.alive && c.mode !== 'water')) return 'Aim at your catch and <b>Right Click</b> to shoot it! Air shots and 360° swirls pay extra';
    if (s.inventory.length > 0) return 'Sell your haul at the <b>Fish Market</b> — press <b>E</b> (or grill it first for ×1.5!)';
    if (p.z > -12) return 'Walk down the <b>dock</b> and cast into the sea: <b>hold Left Mouse</b>, release to throw';
    if (s.stats.caught < 2) return 'Hold <b>Left Mouse</b> to charge a cast, release to throw';
    return null;
  }

  function gearHtml() {
    const s = store.state, rod = RODS[s.equippedRod], bait = BAITS[s.equippedBait], n = s.baits[s.equippedBait] || 0;
    const weapons = WEAPON_ORDER.filter(id => s.weapons.includes(id)).map((id, i) => `<span class="chip ${id === s.equippedWeapon ? 'on' : ''}"><span class="key">${i + 1}</span>${WEAPON_ICON[id]} ${WEAPONS[id].name}</span>`).join('');
    return `<span class="chip ${rod ? '' : 'warn'}">🎣 ${rod ? rod.name : 'No rod!'}</span><span class="chip ${n ? '' : 'warn'}">${BAIT_ICON[s.equippedBait]} ${bait.name} ×${n}</span><div style="display:flex;gap:6px;flex-wrap:wrap">${weapons}</div>`;
  }

  return {
    panel, start, togglePause, get started() { return S.started; },
    update(dt) {
      S.t += dt;
      const s = store.state;
      // money: rolling counter + bump/shake
      if (s.money !== S.lastMoney) { el.money.classList.remove('bump', 'shake'); void el.money.offsetWidth; el.money.classList.add(s.money > S.lastMoney ? 'bump' : 'shake'); S.lastMoney = s.money; }
      const diff = s.money - S.shownMoney; S.shownMoney += Math.abs(diff) < 1 ? diff : diff * Math.min(1, dt * 9) + Math.sign(diff) * 0.2;
      el.moneyv.textContent = Math.round(S.shownMoney).toLocaleString();
      const invTotal = s.inventory.reduce((a, i) => a + i.value, 0), invTxt = `🐟 ${s.inventory.length} · $${invTotal}`;
      if (el.inv.textContent !== invTxt) { el.inv.textContent = invTxt; el.inv.classList.remove('bump'); void el.inv.offsetWidth; el.inv.classList.add('bump'); }
      // gear
      const gk = JSON.stringify([s.equippedRod, s.equippedBait, s.baits[s.equippedBait], s.weapons, s.equippedWeapon]);
      if (gk !== S.gearKey) { S.gearKey = gk; el.gear.innerHTML = gearHtml(); }
      // bars
      const reeling = S.t - S.reelT < 0.15, charging = S.t - S.powerT < 0.15;
      el.tens.classList.toggle('show', reeling); el.prog.classList.toggle('show', reeling); el.power.classList.toggle('show', charging && !reeling);
      if (reeling) { el.tensfill.style.width = (S.tension * 100) + '%'; el.tens.classList.toggle('hot', S.tension > 0.8); el.progfill.style.width = (Math.min(1, S.progress) * 100) + '%'; }
      if (charging) el.powerfill.style.width = (S.power * 100) + '%';
      el.controls.classList.toggle('faded', s.stats.caught >= 3 && !S.paused);
      // hint
      const h = S.started && !game.uiBlocking ? hint() : null, hk = h || '';
      if (hk !== S.hintKey) { S.hintKey = hk; if (h) { el.hint.innerHTML = h; el.hint.classList.remove('hide'); } else el.hint.classList.add('hide'); }
      // boss bar
      const bc = game.bossCtl;
      if (bc && bc.active && bc.boss) { el.boss.classList.add('show'); el.bossfill.style.width = (bc.boss.hp / bc.boss.maxHp * 100) + '%'; el.boss.classList.toggle('stunned', bc.boss.state === 'vulnerable'); el.bossname.textContent = bc.boss.state === 'vulnerable' ? 'STUNNED — SHOOT IT!' : bc.boss.state === 'recover' ? 'Colossal Spider Crab (angry!)' : 'Colossal Spider Crab — hook it!'; }
      else el.boss.classList.remove('show');

      if (!S.started) return;
      // Esc: close panel or toggle pause
      if (input.wasPressed('Escape')) { if (panel.isOpen) panel.close(); else togglePause(); }
      if (S.paused) return;
      panel.update(dt);
      // anti-soft-lock: nothing left to play with → a gull drops a lifeline
      S.rescueT = (S.rescueT || 0) + dt;
      if (S.rescueT > 1 && !panel.isOpen && game.fishing.state === 'idle' && !game.creatures.some(c => c.alive) && !(game.bossCtl && game.bossCtl.active)) {
        S.rescueT = 0; const r = rescueBait(s);
        if (r) bus.emit('toast', { msg: r === 'rod' ? '🐦 A seagull drops $3 — enough for a rod!' : '🐦 A seagull drops some ham bait!' });
      }
      if (panel.isOpen) { if (input.wasPressed('KeyE')) panel.close(); if (input.wasPressed('Space')) panel.pull && panel.pull(); return; }
      // nearest station prompt
      nearStation = null; let best = NEAR;
      for (const st of stationList()) { const d = Math.hypot(st.pos.x - player.pos.x, st.pos.z - player.pos.z); if (d < best) { best = d; nearStation = st; } }
      if (nearStation && game.fishing.state === 'idle') {
        el.promptt.textContent = nearStation.text;
        v.set(nearStation.pos.x, nearStation.pos.y + (nearStation.id === 'vendor' ? 4.6 : 3.2), nearStation.pos.z).project(camera);
        el.prompt.style.transform = `translate(${(v.x * 0.5 + 0.5) * innerWidth}px, ${(-v.y * 0.5 + 0.5) * innerHeight}px) translate(-50%,-100%)`;
        el.prompt.classList.add('show');
        if (input.wasPressed('KeyE') && !game.uiBlocking) nearStation.act();
      } else el.prompt.classList.remove('show');
    },
  };
}
