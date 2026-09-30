import { RARITY_RANK } from '../data/creatures.js';

const PENTA = [0, 2, 4, 7, 9]; // major pentatonic degrees
const mtof = m => 440 * Math.pow(2, (m - 69) / 12);

/** All-synthesized audio: SFX subscribe to the bus; a light ukulele-ish loop + ocean ambience. Starts on first gesture. */
export function createAudio(bus, game) {
  let ctx = null, master, sfx, music, noiseBuf, muted = false, musicTimer = 0, nextBeat = 0, beat = 0, duckT = 0;

  function unlock() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    ctx = new AC();
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 5;
    master = ctx.createGain(); master.gain.value = muted ? 0 : 0.75; master.connect(comp); comp.connect(ctx.destination);
    sfx = ctx.createGain(); sfx.gain.value = 1; sfx.connect(master);
    music = ctx.createGain(); music.gain.value = 0.55; music.connect(master);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    startAmbience(); nextBeat = ctx.currentTime + 0.2; musicTimer = setInterval(schedule, 100);
  }

  // ---------- primitives ----------
  function tone({ freq = 440, type = 'sine', dur = 0.15, vol = 0.25, slide = 1, delay = 0, attack = 0.004, out = sfx, detune = 0 }) {
    if (!ctx) return; const t = ctx.currentTime + delay;
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type; o.frequency.setValueAtTime(freq, t); o.detune.value = detune;
    if (slide !== 1) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq * slide), t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(out); o.start(t); o.stop(t + dur + 0.05);
  }
  function noise({ dur = 0.2, vol = 0.2, type = 'lowpass', freq = 2000, freqEnd, q = 1, delay = 0, out = sfx, attack = 0.005 }) {
    if (!ctx) return; const t = ctx.currentTime + delay;
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (freqEnd) f.frequency.exponentialRampToValueAtTime(Math.max(20, freqEnd), t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(out); s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }
  const jit = (v, a = 0.08) => v * (1 + (Math.random() - 0.5) * 2 * a);
  const arp = (notes, { type = 'triangle', step = 0.07, dur = 0.2, vol = 0.2, base = 72 } = {}) => notes.forEach((n, i) => tone({ freq: mtof(base + n), type, dur, vol, delay: i * step }));
  function duck(amount = 0.25, secs = 0.7) {
    if (!ctx) return; const t = ctx.currentTime; music.gain.cancelScheduledValues(t); music.gain.setTargetAtTime(0.55 * amount, t, 0.02); music.gain.setTargetAtTime(0.55, t + secs, 0.25);
  }

  // ---------- music & ambience ----------
  const CHORDS = [[48, 0], [45, 3], [41, 5], [43, 4]]; // bass note + scale-degree offset flavour
  const MELODY = [4, 2, 0, 2, 4, 4, 2, 4, 0, 2, 4, 3, 2, 0, 1, 2];
  function schedule() {
    if (!ctx || ctx.state !== 'running') return;
    const spb = 60 / 96 / 2; // eighth note
    while (nextBeat < ctx.currentTime + 0.35) {
      const step = beat % 32, bar = Math.floor(step / 8) % 4, [bass] = CHORDS[bar], t = nextBeat - ctx.currentTime;
      if (step % 4 === 0) tone({ freq: mtof(bass), type: 'triangle', dur: 0.5, vol: 0.14, delay: t, out: music, attack: 0.01 });
      if (step % 8 === 4) tone({ freq: mtof(bass + 7), type: 'triangle', dur: 0.35, vol: 0.08, delay: t, out: music });
      if (step % 2 === 0 || Math.random() < 0.3) {
        const deg = MELODY[(step + bar * 3) % MELODY.length], oct = 60 + (bar % 2 ? 0 : 12) * 0 ;
        if (Math.random() < 0.72) tone({ freq: mtof(oct + PENTA[deg % 5] + (deg > 4 ? 12 : 0)), type: 'triangle', dur: 0.32, vol: 0.09, delay: t, out: music, attack: 0.003 });
      }
      if (step % 2 === 1) noise({ dur: 0.05, vol: 0.02, type: 'highpass', freq: 6000, delay: t, out: music });
      nextBeat += spb; beat++;
    }
    if (Math.random() < 0.01) gull();
  }
  function startAmbience() {
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500; f.Q.value = 0.7;
    const g = ctx.createGain(); g.gain.value = 0.06;
    const lfo = ctx.createOscillator(), lg = ctx.createGain(); lfo.frequency.value = 0.13; lg.gain.value = 0.035; lfo.connect(lg); lg.connect(g.gain);
    const lfo2 = ctx.createOscillator(), lg2 = ctx.createGain(); lfo2.frequency.value = 0.09; lg2.gain.value = 180; lfo2.connect(lg2); lg2.connect(f.frequency);
    s.connect(f); f.connect(g); g.connect(master); s.start(); lfo.start(); lfo2.start();
  }
  function gull() { tone({ freq: 1700, type: 'sine', dur: 0.35, vol: 0.03, slide: 1.4, out: music }); tone({ freq: 2300, type: 'sine', dur: 0.4, vol: 0.025, slide: 0.6, delay: 0.3, out: music }); }

  // ---------- SFX wiring ----------
  let reelAcc = 0;
  const on = (e, fn) => bus.on(e, p => { if (ctx) fn(p || {}); });
  on('ui:click', () => tone({ freq: 620, type: 'square', dur: 0.06, vol: 0.09, slide: 1.4 }));
  on('ui:deny', () => tone({ freq: 220, type: 'sawtooth', dur: 0.18, vol: 0.12, slide: 0.6 }));
  on('ui:open', () => { arp([0, 4, 7], { step: 0.04, dur: 0.12, vol: 0.1, base: 76 }); });
  on('game:start', () => arp([0, 4, 7, 12, 16], { step: 0.07, dur: 0.3, vol: 0.14, base: 67 }));
  on('cast:refused', () => { tone({ freq: 200, type: 'sawtooth', dur: 0.2, vol: 0.14, slide: 0.55 }); });
  on('cast:charge', ({ power }) => { if (Math.random() < 0.12) tone({ freq: 300 + power * 900, type: 'sine', dur: 0.05, vol: 0.05 }); });
  on('cast:release', ({ power }) => { noise({ dur: 0.35, vol: 0.22, type: 'bandpass', freq: 500, freqEnd: 2600, q: 2 }); tone({ freq: 400 + power * 300, type: 'sine', dur: 0.2, vol: 0.06, slide: 2 }); });
  const splash = (v = 1) => { noise({ dur: 0.45, vol: 0.28 * v, freq: 3200, freqEnd: 250 }); tone({ freq: jit(190), type: 'sine', dur: 0.25, vol: 0.14 * v, slide: 0.4 }); };
  on('bobber:land', () => splash()); on('creature:splash', () => splash(0.9));
  on('nibble', () => { tone({ freq: jit(900), type: 'sine', dur: 0.05, vol: 0.1 }); tone({ freq: jit(1200), type: 'sine', dur: 0.04, vol: 0.06, delay: 0.06 }); });
  on('bite', () => { tone({ freq: 880, type: 'square', dur: 0.09, vol: 0.14, slide: 0.75 }); tone({ freq: 880, type: 'square', dur: 0.09, vol: 0.14, slide: 0.75, delay: 0.1 }); tone({ freq: 90, type: 'sine', dur: 0.25, vol: 0.3, slide: 0.5 }); });
  on('bite:miss', () => tone({ freq: 330, type: 'triangle', dur: 0.3, vol: 0.12, slide: 0.5 }));
  on('hook', () => { tone({ freq: 260, type: 'sine', dur: 0.3, vol: 0.28, slide: 3 }); tone({ freq: 780, type: 'triangle', dur: 0.2, vol: 0.1, delay: 0.05, slide: 0.5 }); splash(1.3); });
  on('reel:update', ({ tension, holding }) => {
    reelAcc -= 1 / 60; if (!holding || reelAcc > 0) return;
    reelAcc = 0.16 - tension * 0.1;
    tone({ freq: 380 + tension * 900, type: 'square', dur: 0.035, vol: 0.06 }); noise({ dur: 0.03, vol: 0.05, type: 'highpass', freq: 3000 });
    if (tension > 0.85) tone({ freq: 1500, type: 'sine', dur: 0.06, vol: 0.06, delay: 0.05 });
  });
  on('reel:snap', () => { tone({ freq: 900, type: 'sawtooth', dur: 0.35, vol: 0.2, slide: 0.12 }); noise({ dur: 0.12, vol: 0.2, type: 'highpass', freq: 2500 }); });
  on('reel:escape', () => arp([0, -3, -7], { type: 'triangle', step: 0.12, dur: 0.3, vol: 0.14, base: 64 }));
  on('catch:land', ({ creature }) => {
    const r = RARITY_RANK[creature.rarity], n = 3 + r * 2; arp(PENTA.concat([12, 14, 16]).slice(0, n).map(x => x + (r ? 0 : 0)), { step: 0.065, dur: 0.28, vol: 0.18, base: 67 + r * 2 });
    if (r >= 3) { arp([0, 7, 12, 16, 19, 24], { type: 'square', step: 0.05, dur: 0.4, vol: 0.06, base: 79 }); duck(0.3, 1.4); }
  });
  on('catch:bounce', ({ impact }) => tone({ freq: 140, type: 'sine', dur: 0.14, vol: Math.min(0.3, impact * 0.03), slide: 0.4 }));
  on('shoot', ({ weapon }) => {
    if (weapon === 'slingshot') { tone({ freq: 520, type: 'triangle', dur: 0.14, vol: 0.2, slide: 0.35 }); noise({ dur: 0.07, vol: 0.08, type: 'highpass', freq: 2000 }); }
    else if (weapon === 'pistol') { noise({ dur: 0.12, vol: 0.34, type: 'bandpass', freq: 2200, freqEnd: 500, q: 0.8 }); tone({ freq: 170, type: 'square', dur: 0.1, vol: 0.2, slide: 0.3 }); }
    else if (weapon === 'shotgun') { noise({ dur: 0.32, vol: 0.5, freq: 2600, freqEnd: 180 }); tone({ freq: 90, type: 'sine', dur: 0.3, vol: 0.4, slide: 0.4 }); }
    else noise({ dur: 0.3, vol: 0.14, type: 'bandpass', freq: 400, freqEnd: 1600, q: 2 });
  });
  on('hit', ({ air }) => { noise({ dur: 0.09, vol: 0.28, type: 'bandpass', freq: jit(1800), q: 1 }); tone({ freq: jit(240), type: 'square', dur: 0.09, vol: 0.18, slide: 0.4 }); if (air) tone({ freq: 1400, type: 'sine', dur: 0.12, vol: 0.08, delay: 0.03, slide: 1.5 }); });
  on('explosion', () => { noise({ dur: 0.9, vol: 0.6, freq: 1400, freqEnd: 90 }); tone({ freq: 70, type: 'sine', dur: 0.8, vol: 0.55, slide: 0.35 }); duck(0.15, 1.2); });
  on('kill', ({ mult, value }) => {
    duck(0.35, 0.8); const p = Math.min(1.7, 1 + (mult - 1) * 0.08);
    noise({ dur: 0.18, vol: 0.3, type: 'bandpass', freq: 900, q: 0.6 }); tone({ freq: 660 * p, type: 'square', dur: 0.09, vol: 0.14 }); tone({ freq: 990 * p, type: 'square', dur: 0.18, vol: 0.14, delay: 0.09 });
    if (mult >= 2) arp([0, 4, 7, 12], { type: 'triangle', step: 0.05, dur: 0.3, vol: 0.14, base: 79 });
    if (mult >= 5) arp([0, 7, 12, 19, 24], { type: 'square', step: 0.05, dur: 0.5, vol: 0.07, base: 72 });
    for (let i = 0; i < Math.min(8, 2 + value / 40); i++) tone({ freq: jit(1800, 0.15), type: 'sine', dur: 0.08, vol: 0.05, delay: 0.15 + i * 0.05 });
  });
  on('loot:collect', () => tone({ freq: 700, type: 'triangle', dur: 0.14, vol: 0.14, slide: 2.2 }));
  on('sell', ({ count }) => { for (let i = 0; i < Math.min(14, count * 2); i++) { tone({ freq: 1200 + i * 90, type: 'sine', dur: 0.09, vol: 0.12, delay: i * 0.06 }); tone({ freq: 2400 + i * 120, type: 'sine', dur: 0.05, vol: 0.05, delay: i * 0.06 }); } arp([0, 7, 12], { step: 0.08, dur: 0.4, vol: 0.12, base: 79, }); });
  on('purchase', () => { tone({ freq: 1047, type: 'square', dur: 0.09, vol: 0.12 }); tone({ freq: 1568, type: 'square', dur: 0.3, vol: 0.12, delay: 0.09 }); noise({ dur: 0.1, vol: 0.08, type: 'highpass', freq: 5000, delay: 0.09 }); });
  on('cook:start', () => noise({ dur: 1.2, vol: 0.12, type: 'highpass', freq: 3500, freqEnd: 6000, attack: 0.3 }));
  on('cook:done', ({ result }) => { if (result === 'cooked') arp([0, 4, 7, 12], { step: 0.07, dur: 0.3, vol: 0.16, base: 76 }); else if (result === 'burnt') arp([0, -2, -5, -9], { type: 'sawtooth', step: 0.1, dur: 0.25, vol: 0.09, base: 60 }); else tone({ freq: 300, type: 'triangle', dur: 0.15, vol: 0.1 }); });
  on('slots:spin', () => { for (let i = 0; i < 26; i++) tone({ freq: 800 + (i % 3) * 120, type: 'square', dur: 0.025, vol: 0.05, delay: i * 0.07 }); tone({ freq: 220, type: 'sawtooth', dur: 0.2, vol: 0.12, slide: 0.5 }); });
  on('slots:stop', () => { tone({ freq: 160, type: 'sine', dur: 0.12, vol: 0.28, slide: 0.5 }); tone({ freq: 900, type: 'square', dur: 0.05, vol: 0.08 }); });
  on('slots:win', ({ jackpot }) => { arp(jackpot ? [0, 4, 7, 12, 16, 19, 24, 28, 31, 36] : [0, 4, 7, 12, 16], { type: 'square', step: jackpot ? 0.09 : 0.075, dur: 0.4, vol: 0.09, base: 72 }); for (let i = 0; i < (jackpot ? 24 : 8); i++) tone({ freq: jit(1800), type: 'sine', dur: 0.07, vol: 0.05, delay: 0.3 + i * 0.05 }); duck(0.3, 2); });
  on('boss:summon', () => { noise({ dur: 3, vol: 0.4, freq: 220, freqEnd: 60 }); tone({ freq: 55, type: 'sawtooth', dur: 3, vol: 0.28, slide: 0.6 }); tone({ freq: 90, type: 'sine', dur: 2.6, vol: 0.3, slide: 0.5, delay: 0.3 }); duck(0.2, 3); });
  on('boss:stun', () => { tone({ freq: 196, type: 'sine', dur: 1.6, vol: 0.32, slide: 0.98 }); tone({ freq: 392, type: 'triangle', dur: 1.2, vol: 0.14 }); noise({ dur: 0.4, vol: 0.25, type: 'bandpass', freq: 800, q: 4 }); duck(0.3, 1.2); });
  on('boss:hit', () => { tone({ freq: jit(300), type: 'square', dur: 0.14, vol: 0.2, slide: 0.4 }); noise({ dur: 0.15, vol: 0.3, type: 'bandpass', freq: 1000, q: 3 }); });
  on('boss:blocked', () => { tone({ freq: 1400, type: 'triangle', dur: 0.12, vol: 0.14, slide: 0.7 }); });
  on('boss:telegraph', () => { for (let i = 0; i < 4; i++) tone({ freq: 700, type: 'square', dur: 0.1, vol: 0.09, delay: i * 0.25 }); });
  on('boss:playerHit', () => { noise({ dur: 0.4, vol: 0.4, freq: 900, freqEnd: 100 }); tone({ freq: 120, type: 'sine', dur: 0.3, vol: 0.35, slide: 0.4 }); });
  on('boss:down', () => { duck(0.15, 6); noise({ dur: 1.2, vol: 0.5, freq: 1600, freqEnd: 100 }); arp([0, 4, 7, 12, 16, 19, 24, 28, 31, 36, 40], { type: 'square', step: 0.11, dur: 0.6, vol: 0.09, base: 60 }); arp([0, 7, 12, 19], { type: 'triangle', step: 0.11, dur: 1.4, vol: 0.14, base: 48 }); });

  addEventListener('pointerdown', unlock, { once: false }); addEventListener('keydown', unlock);
  addEventListener('keydown', e => { if (e.code === 'KeyM' && !e.repeat) api.toggleMute(); });
  document.addEventListener('visibilitychange', () => { if (!ctx) return; if (document.hidden) ctx.suspend(); else if (!muted) ctx.resume(); });

  const api = {
    unlock,
    toggleMute() { muted = !muted; if (master && ctx) master.gain.setTargetAtTime(muted ? 0 : 0.75, ctx.currentTime, 0.03); bus.emit('toast', { msg: muted ? '🔇 Sound off' : '🔊 Sound on' }); return muted; },
    get muted() { return muted; },
  };
  return api;
}
