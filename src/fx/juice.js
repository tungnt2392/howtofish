import * as THREE from 'three';
import { RARITY_COLOR, RARITY_RANK } from '../data/creatures.js';
import { waveHeight } from '../world/water.js';

/** The ONLY place that maps game events to visual feedback. Systems never import fx. */
export function installJuice(game) {
  const { bus, particles, text, hitstop, camRig, water, player, gfx } = game;
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const up = (p, dy) => V(p.x, p.y + dy, p.z);
  const S = { tension: 0, reeling: false, dangerT: 0, flash: 0, flashColor: new THREE.Color('#ff3b30') };
  const water0 = p => V(p.x, waveHeight(p.x, p.z, game.time) + 0.1, p.z);
  const flash = (color, amount) => { S.flashColor.set(color); S.flash = Math.max(S.flash, amount); };
  const tipPos = () => player.rodTip(new THREE.Vector3());

  bus.on('cast:release', () => {
    camRig.kick(2); player.squash(0.12);
    particles.burst(tipPos(), { count: 6, colors: ['#ffffff', '#cfefff'], speed: 3, up: 0, life: 0.3, size: 0.12, gravity: 0 });
  });
  bus.on('bobber:land', ({ pos }) => {
    const p = water0(pos); water.ripple(pos.x, pos.z, 1); particles.splash(p, 1); camRig.shake(0.03, 0.15);
  });
  bus.on('nibble', ({ pos }) => { water.ripple(pos.x, pos.z, 0.4); particles.splash(water0(pos), 0.25); });
  bus.on('bite', ({ pos }) => {
    const p = water0(pos);
    water.ripple(pos.x, pos.z, 1.3); particles.splash(p, 0.9); particles.ring(p, { count: 16, color: '#ffffff', speed: 3.5, life: 0.5 });
    text.spawn('!', up(p, 1.8), { color: '#ffdd33', size: 84, life: 1.2, rise: 30, wobble: 0.06 });
    camRig.shake(0.16, 0.3); camRig.kick(-3); player.squash(0.18);
  });
  bus.on('bite:miss', ({ pos }) => text.spawn('Too slow…', up(pos, 1.2), { color: '#c9d3dc', size: 30, life: 1.2 }));
  bus.on('cast:retrieve', ({ pos }) => { text.spawn('Reeled in early', up(pos, 1), { color: '#c9d3dc', size: 26, life: 1.0 }); water.ripple(pos.x, pos.z, 0.5); });
  bus.on('cast:refused', ({ reason }) => {
    const msg = { norod: 'Buy a rod first! (E at the market)', nobait: 'Out of bait!', land: 'Aim at the water!' }[reason] || 'Can’t cast';
    text.spawn(msg, up(player.pos, 3.2), { color: '#ff9f8a', size: 30, life: 1.4, rise: 40 }); player.squash(0.1); camRig.shake(0.05, 0.12);
  });
  bus.on('hook', ({ pos }) => {
    const p = water0(pos); particles.splash(p, 1.6); particles.ring(p, { count: 24, speed: 5, life: 0.6 });
    text.spawn('HOOKED!', up(p, 2.1), { color: '#ff9a3c', size: 60, life: 1.2, rise: 50, wobble: 0.05 });
    camRig.shake(0.28, 0.35); camRig.kick(-6); hitstop.trigger(70); water.ripple(pos.x, pos.z, 1.6);
  });
  bus.on('reel:update', ({ tension, holding, pos }) => {
    S.tension = tension; S.reeling = true;
    if (holding && Math.random() < 0.3) particles.sparkles(water0(pos), { count: 1, color: ['#ffffff', '#bfefff'], radius: 0.5, life: 0.6, size: 0.12 });
    if (tension > 0.82) {
      camRig.shake(0.03 + (tension - 0.82) * 0.5, 0.08);
      if (Math.random() < 0.25) particles.burst(tipPos(), { count: 2, color: '#ff5a3a', speed: 2, up: 1, life: 0.3, size: 0.1, gravity: 4 });
      if (game.time - S.dangerT > 0.9) { S.dangerT = game.time; text.spawn('LET GO!', up(player.pos, 3.4), { color: '#ff4d3d', size: 34, life: 0.8, rise: 20, wobble: 0.1 }); }
    }
  });
  const reelEnd = () => { S.reeling = false; S.tension = 0; };
  bus.on('reel:snap', ({ pos }) => {
    reelEnd(); const p = water0(pos);
    particles.burst(p, { count: 18, colors: ['#ff4d3d', '#ffb0a0', '#ffffff'], speed: 6, up: 2, life: 0.6, size: 0.22 });
    text.spawn('SNAP!', up(p, 2), { color: '#ff4d3d', size: 70, life: 1.2, rise: 40, wobble: 0.08 });
    camRig.shake(0.45, 0.4); camRig.kick(5); hitstop.trigger(90); flash('#ff3b30', 0.7); player.playAnim('hurt');
  });
  bus.on('reel:escape', ({ pos }) => { reelEnd(); text.spawn('Got away…', up(water0(pos), 1.6), { color: '#c9d3dc', size: 36, life: 1.3 }); particles.puff(water0(pos), { color: '#e9f6ff' }); });
  bus.on('catch:land', ({ creature, pos }) => {
    reelEnd();
    const rank = RARITY_RANK[creature.rarity], col = RARITY_COLOR[creature.rarity];
    const p = up(pos, 0.3);
    particles.burst(p, { count: 16 + rank * 14, colors: [col, '#ffffff'], speed: 6 + rank, up: 3, life: 0.8, size: 0.24 + rank * 0.03, gravity: 10 });
    particles.splash(water0(pos), 1.8); particles.sparkles(p, { count: 10 + rank * 8, color: [col, '#ffffff'], radius: 1, life: 1.2 });
    text.spawn(creature.name + '!', up(pos, 2.4), { color: col === '#ffffff' ? '#fff8dc' : col, size: 44 + rank * 8, life: 1.7, rise: 80, wobble: 0.04 });
    if (rank >= 2) text.spawn(creature.rarity.toUpperCase(), up(pos, 2.4), { color: col, size: 26, life: 1.6, rise: 80, delay: 0.15, oy: 44 + rank * 4 });
    camRig.shake(0.15 + rank * 0.05, 0.3); camRig.kick(4 + rank);
    if (rank >= 3) { hitstop.trigger(120 + rank * 40); flash(col, 0.5); }
    if (rank === 4) { particles.coins(up(pos, 1), 12); text.spawn('LEGENDARY!!!', up(pos, 2.4), { color: '#ffd23c', size: 76, life: 2.2, rise: 60, wobble: 0.07, oy: -110, delay: 0.1 }); }
  });
  bus.on('catch:bounce', ({ pos, impact }) => { particles.puff(up(pos, 0.05), { count: 3, size: 0.25, life: 0.4 }); camRig.shake(Math.min(0.12, impact * 0.008), 0.12); });
  bus.on('creature:splash', ({ pos }) => { const p = water0(pos); particles.splash(p, 1); water.ripple(pos.x, pos.z, 1); });
  bus.on('creature:lost', ({ ent }) => text.spawn('Got away!', up(ent.pos, 1.2), { color: '#c9d3dc', size: 32, life: 1.2 }));
  bus.on('creature:escaping', ({ ent }) => text.spawn('It’s escaping!', up(ent.pos, 1.6), { color: '#ffd166', size: 30, life: 1.2, wobble: 0.08 }));

  // ---- combat ----
  bus.on('hit', ({ pos, damage, air, crit }) => {
    hitstop.trigger(55); particles.stars(pos, 8, 1); particles.ring(pos, { count: 12, color: '#ffffff', speed: 4, life: 0.3, size: 0.15 });
    text.spawn(String(Math.round(damage)), up(pos, 0.9), { color: air ? '#7ae0ff' : '#ffffff', size: 28 + Math.min(20, damage * 0.3), life: 0.8, rise: 60, wobble: 0.05 });
    camRig.shake(0.18, 0.2);
  });
  bus.on('shoot', ({ from, weapon }) => {
    particles.burst(from, { count: 6, colors: ['#ffe14d', '#ffffff'], speed: 5, up: 0, life: 0.18, size: 0.16, gravity: 0 });
    camRig.shake(weapon === 'shotgun' ? 0.22 : 0.08, 0.15); camRig.kick(weapon === 'shotgun' ? 3 : 1.2);
  });
  bus.on('explosion', ({ pos, radius }) => {
    particles.burst(pos, { count: 40, colors: ['#ffb830', '#ff6a1f', '#ffffff', '#4a4a4a'], speed: 9, up: 3, life: 0.8, size: 0.5, sizeEnd: 0.05, gravity: 5 });
    particles.ring(pos, { count: 30, color: '#ffd166', speed: radius * 2.4, life: 0.5, size: 0.35 });
    camRig.shake(0.7, 0.5); camRig.kick(7); hitstop.trigger(120); flash('#ffb830', 0.5);
  });
  bus.on('kill', ({ creature, pos, value, mult, tags = [] }) => {
    const rank = RARITY_RANK[creature.rarity], col = RARITY_COLOR[creature.rarity];
    hitstop.trigger(100 + Math.min(120, mult * 12));
    particles.burst(pos, { count: 24 + rank * 8, colors: [col, '#ffffff', '#ffe14d'], speed: 8, up: 3, life: 0.7, size: 0.28, gravity: 12 });
    particles.stars(pos, 10, 1.3); particles.coins(pos, Math.min(26, 5 + Math.round(Math.log2(value + 1) * 2)), 10);
    text.spawn('+$' + value, up(pos, 1.2), { color: mult > 1 ? '#7dff7a' : '#b8ff9a', size: 40 + Math.min(40, mult * 6), life: 1.4, rise: 90, wobble: 0.05 });
    tags.forEach((tg, i) => text.spawn(tg, up(pos, 1.2), { color: '#ffe14d', size: 34 + (tg.includes('360') ? 20 : 0), life: 1.5, rise: 90, delay: 0.1 + i * 0.12, wobble: 0.06, oy: -(i + 1) * 52 }));
    camRig.shake(0.35 + Math.min(0.5, mult * 0.05), 0.35); camRig.kick(5 + Math.min(6, mult));
    if (mult >= 5) flash('#ffe14d', 0.55);
    player.squash(0.15);
  });
  bus.on('loot:collect', ({ item }) => {
    particles.sparkles(up(player.pos, 1.5), { count: 8, color: ['#ffe14d', '#ffffff'], radius: 0.5, life: 0.6 }); player.squash(0.1);
  });
  bus.on('sell', ({ total, count }) => {
    if (!count) return;
    const at = game.island.stations.vendor.clone(); at.y += 2.4;
    text.spawn('SOLD! +$' + total, at, { color: '#7dff7a', size: 46, life: 1.8, rise: 80, wobble: 0.05 });
    particles.coins(V(at.x, at.y - 0.5, at.z + 1), Math.min(30, 6 + count * 2), 11); camRig.shake(0.1, 0.25); particles.stars(V(at.x, at.y - 1, at.z + 1), 8, 1);
  });
  bus.on('purchase', () => { particles.sparkles(up(player.pos, 1.3), { count: 16, color: ['#fff6a8', '#ffffff', '#9fe6ff'], radius: 0.8, life: 1.1 }); player.squash(0.18); player.playAnim('celebrate'); });
  bus.on('cook:done', ({ result }) => {
    const at = game.island.stations.grill.clone(); at.y += 1.6;
    const cfg = { cooked: ['PERFECT! ×1.5', '#7dff7a'], burnt: ['BURNT…', '#8a8a8a'], raw: ['Raw', '#c9d3dc'] }[result];
    text.spawn(cfg[0], at, { color: cfg[1], size: 44, life: 1.5, rise: 70, wobble: 0.05 });
    particles.burst(at, { count: result === 'cooked' ? 18 : 8, colors: result === 'cooked' ? ['#ffb830', '#ff6a1f', '#fff'] : ['#555', '#888'], speed: 4, up: 2, life: 0.7, size: 0.25 });
    if (result !== 'cooked') particles.puff(at, { color: '#666', count: 6 });
  });
  bus.on('slots:spin', () => { const s = game.island.slotMachine; s.userData.pull(); camRig.shake(0.05, 0.15); });
  bus.on('slots:win', ({ payout, jackpot }) => {
    const at = game.island.stations.slots.clone(); at.y += 3;
    game.island.slotMachine.userData.flash();
    text.spawn(jackpot ? 'JACKPOT!!!' : 'WIN +$' + payout, at, { color: '#ffd23c', size: jackpot ? 84 : 52, life: 2, rise: 60, wobble: 0.08 });
    particles.coins(at, jackpot ? 40 : 14, 12); particles.stars(at, 14, 1.4); camRig.shake(jackpot ? 0.6 : 0.2, 0.5); if (jackpot) { flash('#ffd23c', 0.8); hitstop.trigger(200); }
  });
  bus.on('boss:summon', () => { camRig.shake(0.6, 1.2); flash('#ff3b30', 0.4); text.spawn('SOMETHING STIRS…', up(game.island.stations.dockEnd, 3.5), { color: '#ff7a5c', size: 52, life: 2.4, rise: 40, wobble: 0.05 }); });
  bus.on('boss:stun', ({ pos }) => { camRig.shake(0.5, 0.5); hitstop.trigger(160); text.spawn('STUNNED! SHOOT IT!', up(pos, 4), { color: '#ffe14d', size: 56, life: 2, rise: 30, wobble: 0.08 }); flash('#ffe14d', 0.5); });
  bus.on('boss:hit', ({ pos, damage }) => { particles.burst(pos, { count: 14, colors: ['#ff7a5c', '#ffffff'], speed: 7, up: 2, life: 0.5, size: 0.35 }); camRig.shake(0.3, 0.25); hitstop.trigger(50); text.spawn(String(Math.round(damage)), up(pos, 1.5), { color: '#ffb830', size: 44, life: 0.9, rise: 70 }); });
  bus.on('boss:blocked', ({ pos }) => text.spawn('CLANG!', up(pos, 1.5), { color: '#c9d3dc', size: 32, life: 0.7, rise: 40 }));
  bus.on('boss:down', ({ pos }) => { camRig.shake(1, 1.2); hitstop.trigger(450); flash('#ffffff', 0.9); particles.coins(up(pos, 2), 60, 14); particles.burst(up(pos, 2), { count: 80, colors: ['#ffd23c', '#ff7a5c', '#fff'], speed: 12, up: 4, life: 1.2, size: 0.5, gravity: 8 }); text.spawn('BOSS DEFEATED!', up(pos, 5), { color: '#ffd23c', size: 86, life: 3, rise: 30, wobble: 0.06 }); });

  return {
    update(realDt) {
      const dangerous = S.reeling ? Math.max(0, (S.tension - 0.72) / 0.28) : 0;
      const target = Math.max(S.flash, dangerous * 0.35);
      const u = gfx.grade.uniforms;
      u.uFlash.value += (target - u.uFlash.value) * (1 - Math.exp(-14 * realDt));
      u.uFlashColor.value.lerp(dangerous > 0.05 && S.flash < 0.05 ? new THREE.Color('#ff3b30') : S.flashColor, 0.3);
      S.flash = Math.max(0, S.flash - realDt * 2.2);
      if (!S.reeling) S.tension = 0;
      S.reeling = false; // reel:update re-arms each frame
    },
  };
}
