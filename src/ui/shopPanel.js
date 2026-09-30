import { RODS } from '../data/rods.js';
import { BAITS, BAIT_PACK, CHUM } from '../data/baits.js';
import { WEAPONS } from '../data/weapons.js';
import { RARITY_COLOR } from '../data/creatures.js';
import { buy, sellAll, equip } from '../systems/economy.js';
import { createGrill, startCook, updateGrill, pullCook, applyCookResult, COOK_TIME, BURN_TIME } from '../systems/cooking.js';
import { spinSlots, SYMBOLS } from '../systems/slots.js';

const EMOJI = { cherry: '🍒', bell: '🔔', fish: '🐟', seven: '7️⃣', rod: '🎣' };
const BAIT_ICON = { ham: '🍖', hotdog: '🌭', fries: '🍟', lurePro: '🪝' };
const TABS = { vendor: [['sell', '💰 Sell'], ['shop', '🛒 Shop']], grill: [['grill', '🔥 Grill']], slots: [['slots', '🎰 Slots']] };
const TITLES = { vendor: 'Fish Market', grill: 'Beach Grill', slots: 'Lucky Slots' };
const GRILL_MAX = 10;

export function createShopPanel(root, game) {
  const { bus, store } = game;
  const grill = createGrill();
  let el = null, station = null, tab = null, slot = { spinning: false, reels: ['cherry', 'bell', 'fish'], msg: '' }, timers = [];
  const s = () => store.state;
  const click = () => bus.emit('ui:click', {});

  function open(st, startTab) {
    if (el) return;
    station = st; tab = startTab || TABS[st][0][0];
    el = document.createElement('div'); el.className = 'overlay';
    el.innerHTML = '<div class="panel"></div>';
    el.addEventListener('pointerdown', e => e.stopPropagation());
    el.addEventListener('click', onClick);
    root.appendChild(el);
    game.uiBlocking = true; game.input.enabled = false;
    render(); bus.emit('ui:open', {});
  }
  function close() {
    if (!el) return;
    if (grill.item) { const r = pullCook(grill); s().inventory.push(r.item); } // never lose the item
    const panel = el.querySelector('.panel'); panel.classList.add('closing');
    const old = el; el = null; setTimeout(() => old.remove(), 170);
    game.uiBlocking = false; game.input.enabled = true; bus.emit('ui:close', {});
  }

  function render() {
    if (!el) return;
    const tabs = TABS[station].map(([id, label]) => `<button class="tab ${id === tab ? 'on' : ''}" data-act="tab" data-id="${id}">${label}</button>`).join('');
    const body = { sell: sellHtml, shop: shopHtml, grill: grillHtml, slots: slotsHtml }[tab]();
    el.querySelector('.panel').innerHTML = `<header><h2>${TITLES[station]}</h2><div class="tabs">${tabs}</div><button class="btn red small" data-act="close">✕ Close</button></header><div class="body"><div class="money-line">🪙 $${s().money}</div>${body}</div>`;
  }

  // ---------- SELL ----------
  function sellHtml() {
    const inv = s().inventory;
    if (!inv.length) return '<div class="empty">Nothing to sell yet.<br/>Catch a creature, shoot it, then bring it here!</div>';
    const total = inv.reduce((a, i) => a + i.value, 0);
    const rows = inv.map(i => `<div class="sell-item"><span class="rarity-${i.rarity}">●</span> ${i.name}${i.cooked === 'cooked' ? ' 🔥' : i.cooked === 'burnt' ? ' 💨' : ''}${i.mult > 1 ? ` <small>(×${i.mult})</small>` : ''}<span class="v">$${i.value}</span></div>`).join('');
    return `<div class="sell-list">${rows}</div><div style="text-align:center"><button class="btn yellow" data-act="sellall">Sell All (${inv.length}) &nbsp; +$${total}</button></div>`;
  }

  // ---------- SHOP ----------
  function card({ icon, name, desc, price, kind, id, owned, equipped, stackable, extra = '' }) {
    const afford = s().money >= price;
    let btn;
    if (owned && !stackable) btn = equipped ? '<button class="btn small yellow off" disabled>Equipped</button>' : `<button class="btn small blue" data-act="equip" data-kind="${kind}" data-id="${id}">Equip</button>`;
    else btn = `<button class="btn small ${afford ? '' : 'off'}" data-act="buy" data-kind="${kind}" data-id="${id}" data-price="${price}">Buy $${price}</button>`;
    return `<div class="card ${owned && !stackable ? 'owned' : ''}"><h4><span>${icon}</span>${name}</h4><p>${desc}</p><div class="row">${stackable && s().baits[id] !== undefined ? `<small>You have ${s().baits[id] || 0}</small>` : '<span></span>'}<span style="display:flex;gap:6px">${extra}${btn}</span></div></div>`;
  }
  function shopHtml() {
    const st = s();
    const rods = Object.values(RODS).filter(r => Number.isFinite(r.price)).map(r => card({ icon: '🎣', name: r.name, desc: `Range ${r.range} · Reel ${Math.round(r.reelSpeed * 100)} · Luck ${r.luck}`, price: r.price, kind: 'rod', id: r.id, owned: st.rods.includes(r.id), equipped: st.equippedRod === r.id })).join('');
    const golden = st.rods.includes('golden') ? card({ icon: '✨', name: 'Golden Rod', desc: `Range ${RODS.golden.range} · Reel ${Math.round(RODS.golden.reelSpeed * 100)} · Luck ${RODS.golden.luck}`, price: 0, kind: 'rod', id: 'golden', owned: true, equipped: st.equippedRod === 'golden' }) : '';
    const baits = Object.values(BAITS).map(b => card({ icon: BAIT_ICON[b.id], name: `${b.name} ×${BAIT_PACK}`, desc: `Tier ${b.tier} — ${['', 'attracts small fry', 'lures uncommon catches', 'draws rare & epic prey', 'the good stuff: legendaries'][b.tier]}`, price: b.price, kind: 'bait', id: b.id, owned: true, stackable: true, extra: (st.baits[b.id] > 0 && st.equippedBait !== b.id) ? `<button class="btn small blue" data-act="equip" data-kind="bait" data-id="${b.id}">Use</button>` : (st.equippedBait === b.id && st.baits[b.id] > 0 ? '<span class="chip on" style="font-size:13px">In use</span>' : '') })).join('');
    const weapons = Object.values(WEAPONS).filter(w => w.price > 0 || st.weapons.includes(w.id)).map(w => card({ icon: { slingshot: '🪃', pistol: '🔫', shotgun: '💥', dynamite: '🧨' }[w.id], name: w.name, desc: `Damage ${w.damage}${w.pellets ? '×' + w.pellets : ''} · ${w.kind === 'thrown' ? 'area blast' : w.kind === 'spread' ? 'wide spread' : 'precise'} · ${(1 / w.cooldown).toFixed(1)}/s`, price: w.price, kind: 'weapon', id: w.id, owned: st.weapons.includes(w.id), equipped: st.equippedWeapon === w.id })).join('');
    const chum = st.bossDefeated ? '' : card({ icon: '🦀', name: CHUM.name, desc: 'Throw it off the end of the dock (E) to summon something enormous.' + (st.chum ? ` You have ${st.chum}.` : ''), price: CHUM.price, kind: 'chum', id: 'chum', owned: false, stackable: true });
    return `<div class="section-title">Rods</div><div class="grid">${rods}${golden}</div><div class="section-title">Bait</div><div class="grid">${baits}</div><div class="section-title">Weapons</div><div class="grid">${weapons}</div>${chum ? `<div class="section-title">Special</div><div class="grid">${chum}</div>` : ''}`;
  }

  // ---------- GRILL ----------
  function grillHtml() {
    const inv = s().inventory;
    if (grill.item) {
      return `<p style="text-align:center;font-size:18px;margin:0">Cooking <b>${grill.item.name}</b> — pull it while the marker is in the <b style="color:#1a8a3a">green</b> for ×1.5 value!</p>
        <div class="cookbar" id="cookbar"><div class="z" style="left:0;width:${COOK_TIME / GRILL_MAX * 100}%;background:#f3b9a9"></div><div class="z" style="left:${COOK_TIME / GRILL_MAX * 100}%;width:${(BURN_TIME - COOK_TIME) / GRILL_MAX * 100}%;background:#5be07a"></div><div class="z" style="left:${BURN_TIME / GRILL_MAX * 100}%;right:0;background:#5a4a4a"></div>
        <span class="lbl" style="left:15%">RAW</span><span class="lbl" style="left:50%">PERFECT ×1.5</span><span class="lbl" style="left:85%">BURNT</span><div class="mk" id="cookmk" style="left:0%"></div></div>
        <div style="text-align:center"><button class="btn yellow" data-act="pull">🔥 Pull it off! (Space)</button></div>`;
    }
    const list = inv.map((i, idx) => `<div class="sell-item"><span class="rarity-${i.rarity}">●</span> ${i.name} <span class="v">$${i.value}</span>${i.cooked ? `<small>${i.cooked === 'cooked' ? '🔥 done' : '💨 burnt'}</small>` : `<button class="btn small" data-act="cook" data-idx="${idx}">Grill</button>`}</div>`).join('');
    return inv.length ? `<p style="margin-top:0">Grill a catch for <b>×1.5</b> sell value. Miss the window and it burns to <b>×0.25</b>!</p><div class="sell-list">${list}</div>` : '<div class="empty">Nothing to grill.<br/>Bring me a catch!</div>';
  }

  // ---------- SLOTS ----------
  function slotsHtml() {
    const pay = SYMBOLS.map(x => `${EMOJI[x.id]}×3 = ${x.triple}×`).join(' &nbsp; ');
    const bets = [10, 50, 100].map(b => `<button class="btn ${s().money >= b && !slot.spinning ? 'yellow' : 'off'}" data-act="spin" data-bet="${b}">Bet $${b}</button>`).join('');
    return `<div class="reels">${slot.reels.map((r, i) => `<div class="reel ${slot.spinning === true || (slot.spinning && slot.spinning[i]) ? 'spin' : ''}" id="reel${i}">${EMOJI[r]}</div>`).join('')}</div><div class="result">${slot.msg}</div><div class="bets">${bets}</div><div class="paytable">${pay}<br/>Three 🎣 = <b>JACKPOT</b> + the legendary Golden Rod!</div>`;
  }
  function spinSlotsUi(bet) {
    if (slot.spinning) return;
    if (s().money < bet) { bus.emit('toast', { msg: 'Not enough cash!' }); return false; }
    s().money -= bet;
    const res = spinSlots();
    slot.spinning = [true, true, true]; slot.msg = 'Spinning…'; bus.emit('slots:spin', {});
    render();
    const machine = game.island.slotMachine.userData;
    [0, 1, 2].forEach(i => machine.setSpinning(i, true));
    const ticker = setInterval(() => { if (!el) return; slot.reels = slot.reels.map((r, i) => slot.spinning[i] ? SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)].id : r); [0, 1, 2].forEach(i => { const d = el.querySelector('#reel' + i); if (d) d.textContent = EMOJI[slot.reels[i]]; }); }, 70);
    [900, 1400, 1900].forEach((ms, i) => setTimeout(() => {
      slot.spinning[i] = false; slot.reels[i] = res.reels[i]; machine.setSpinning(i, false); bus.emit('slots:stop', { index: i });
      machine.setReels(slot.reels);
      const d = el && el.querySelector('#reel' + i); if (d) { d.classList.remove('spin'); d.classList.add('stop'); d.textContent = EMOJI[res.reels[i]]; }
      if (i === 2) {
        clearInterval(ticker); slot.spinning = false;
        const payout = bet * res.payoutMult;
        if (payout > 0) {
          s().money += payout; slot.msg = res.jackpot ? '🎉 JACKPOT! Golden Rod unlocked! 🎉' : `🎉 You win $${payout}!`;
          if (res.jackpot && !s().rods.includes('golden')) { s().rods.push('golden'); s().equippedRod = 'golden'; s().goldenRod = true; }
          bus.emit('slots:win', { payout, jackpot: res.jackpot });
        } else slot.msg = 'No luck… try again!';
        if (el) render();
      }
    }, ms));
  }

  // ---------- events ----------
  function onClick(e) {
    const t = e.target.closest('[data-act]');
    if (!t) { if (e.target === el) close(); return; }
    click();
    const act = t.dataset.act, st = s();
    if (act === 'close') return close();
    if (act === 'tab') { tab = t.dataset.id; return render(); }
    if (act === 'sellall') { const r = sellAll(st); if (r.count) bus.emit('sell', r); return render(); }
    if (act === 'buy') {
      const r = buy(st, t.dataset.kind, t.dataset.id);
      if (!r.ok) { t.classList.remove('shake'); void t.offsetWidth; t.classList.add('shake'); bus.emit('toast', { msg: r.reason === 'funds' ? 'Not enough cash!' : 'Can’t buy that' }); bus.emit('ui:deny', {}); return; }
      bus.emit('purchase', { kind: t.dataset.kind, id: t.dataset.id }); bus.emit('toast', { msg: '✅ Bought!' }); return render();
    }
    if (act === 'equip') { equip(st, t.dataset.kind, t.dataset.id); return render(); }
    if (act === 'cook') { const item = st.inventory.splice(Number(t.dataset.idx), 1)[0]; startCook(grill, item); bus.emit('cook:start', {}); return render(); }
    if (act === 'pull') return pull();
    if (act === 'spin') return spinSlotsUi(Number(t.dataset.bet));
  }
  function pull() {
    const r = pullCook(grill); if (!r) return;
    applyCookResult(r.item, r.result); s().inventory.push(r.item);
    bus.emit('cook:done', { item: r.item, result: r.result });
    render();
  }

  /** state as it should be persisted: an item on the grill is still the player's */
  function snapshot(st) { return grill.item ? { ...st, inventory: [...st.inventory, grill.item] } : st; }

  return {
    snapshot, open, close, get isOpen() { return !!el; }, pull,
    update(dt) {
      if (!el) return;
      if (tab === 'grill' && grill.item) {
        updateGrill(grill, dt);
        const mk = el.querySelector('#cookmk'); if (mk) mk.style.left = Math.min(100, grill.t / GRILL_MAX * 100) + '%';
        if (grill.t >= GRILL_MAX) pull();
      }
    },
  };
}
