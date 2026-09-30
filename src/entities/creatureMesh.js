import * as THREE from 'three';
import { mat, mesh, lowpoly } from '../world/lowpoly.js';

const col = c => new THREE.Color(c);
const lighten = (c, k = 0.35) => col(c).lerp(new THREE.Color(1, 1, 1), k);
const darken = (c, k = 0.35) => col(c).lerp(new THREE.Color(0, 0, 0), k);

let seedCounter = 1;
const ell = (sx, sy, sz, color, opts) => {
  const m = mesh(lowpoly(new THREE.IcosahedronGeometry(1, 1), 0.05, seedCounter++), color, opts); m.scale.set(sx, sy, sz); return m;
};
const cone = (r, h, seg, color) => mesh(new THREE.ConeGeometry(r, h, seg), color);
const eyes = (g, x, y, z, s = 0.075) => {
  for (const sx of [-1, 1]) {
    const w = mesh(new THREE.SphereGeometry(s, 8, 6), '#ffffff', { cast: false }); w.position.set(sx * x, y, z);
    const p = mesh(new THREE.SphereGeometry(s * 0.55, 6, 5), '#161616', { cast: false }); p.position.set(0, 0, s * 0.6); w.add(p); g.add(w);
  }
};

function fishBase(def, o = {}) {
  const g = new THREE.Group(), c = def.color;
  const sx = o.w ?? 0.28, sy = o.h ?? 0.3, sz = o.l ?? 0.6;
  const body = ell(sx, sy, sz, c); g.add(body);
  const belly = ell(sx * 0.9, sy * 0.55, sz * 0.9, lighten(c, 0.55), { cast: false }); belly.position.y = -sy * 0.42; g.add(belly);
  const tail = new THREE.Group(); tail.position.z = -sz * 0.85; g.add(tail);
  const tf = cone(sy * 1.0, sz * 0.8, 4, darken(c, 0.1)); tf.rotation.x = -Math.PI / 2; tf.scale.set(0.15, 1, 1.4); tf.position.z = -sz * 0.4; tail.add(tf);
  const dorsal = cone(sy * 0.5, sz * 0.7, 4, darken(c, 0.15)); dorsal.rotation.x = -Math.PI / 2 + 0.5; dorsal.scale.set(0.15, 1, 1); dorsal.position.set(0, sy * 0.85, -sz * 0.1); g.add(dorsal);
  for (const s of [-1, 1]) { const f = cone(sy * 0.35, sz * 0.5, 4, darken(c, 0.1)); f.rotation.set(-Math.PI / 2 + 0.3, 0, s * 0.9); f.scale.set(0.2, 1, 1); f.position.set(s * sx * 0.95, -sy * 0.3, sz * 0.1); g.add(f); }
  eyes(g, sx * 0.62, sy * 0.25, sz * 0.62, sy * 0.28);
  g.userData.anim = (t, k) => { tail.rotation.y = Math.sin(t * (10 + k * 14)) * (0.35 + k * 0.5); body.rotation.z = Math.sin(t * (6 + k * 10)) * 0.08 * (1 + k); };
  g.userData.parts = { body, tail };
  return g;
}

function crabLike(def, o = {}) {
  const g = new THREE.Group(), c = def.color, len = o.len ?? 1;
  const body = ell(0.5, 0.22, 0.4 * len, c); body.position.y = 0.28; g.add(body);
  const shell = ell(0.42, 0.14, 0.32 * len, lighten(c, 0.2), { cast: false }); shell.position.y = 0.4; g.add(shell);
  for (const s of [-1, 1]) {
    const stalk = mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.2, 4), c); stalk.position.set(s * 0.14, 0.5, 0.32 * len); g.add(stalk);
    eyes(g, 0.14, 0.62, 0.34 * len, 0.06);
    const arm = new THREE.Group(); arm.position.set(s * 0.45, 0.28, 0.25 * len); g.add(arm);
    const a1 = ell(0.08, 0.08, 0.3, c); a1.position.z = 0.25; arm.add(a1);
    const claw = ell(0.2, 0.1, 0.22, darken(c, 0.05)); claw.position.z = 0.6; arm.add(claw);
    const pin = cone(0.08, 0.28, 4, lighten(c, 0.3)); pin.rotation.x = Math.PI / 2; pin.position.set(0, 0, 0.85); arm.add(pin);
    arm.userData.side = s;
    (g.userData.arms ||= []).push(arm);
  }
  g.userData.legs = [];
  for (let i = 0; i < 6; i++) {
    const s = i % 2 ? 1 : -1, row = Math.floor(i / 2);
    const leg = new THREE.Group(); leg.position.set(s * 0.4, 0.28, (row - 1) * 0.2 * len);
    const seg = mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.5, 4), darken(c, 0.15)); seg.rotation.z = s * 1.2; seg.position.set(s * 0.22, -0.08, 0); leg.add(seg);
    g.add(leg); g.userData.legs.push(leg);
  }
  if (o.tail) {
    for (let i = 0; i < 4; i++) { const t = ell(0.22 - i * 0.03, 0.14 - i * 0.015, 0.2, darken(c, 0.05 * i)); t.position.set(0, 0.24 - i * 0.02, -0.5 * len - i * 0.28); g.add(t); }
    const fan = cone(0.3, 0.3, 5, c); fan.rotation.x = -Math.PI / 2; fan.scale.set(1.3, 1, 0.25); fan.position.set(0, 0.18, -0.5 * len - 4 * 0.28 - 0.1); g.add(fan);
    for (const s of [-1, 1]) { const an = mesh(new THREE.CylinderGeometry(0.01, 0.01, 1.0, 3), '#f7d0c0', { cast: false }); an.rotation.set(1.2, 0, s * 0.3); an.position.set(s * 0.12, 0.5, 0.75 * len); g.add(an); }
  }
  g.userData.anim = (t, k) => {
    g.userData.legs.forEach((l, i) => { l.rotation.y = Math.sin(t * (12 + k * 10) + i * 1.7) * 0.35; });
    g.userData.arms.forEach(a => { a.rotation.y = -a.userData.side * (0.2 + Math.sin(t * (5 + k * 8)) * 0.25); });
  };
  return g;
}

function shrimp(def) {
  const g = new THREE.Group(), c = def.color; const segs = [];
  for (let i = 0; i < 6; i++) {
    const a = i / 5, s = ell(0.16 - a * 0.05, 0.16 - a * 0.05, 0.16, i === 0 ? lighten(c, 0.15) : c);
    s.position.set(0, 0.25 + Math.sin(a * Math.PI) * 0.22 - a * 0.1, 0.3 - i * 0.16); g.add(s); segs.push(s);
  }
  const fan = cone(0.18, 0.25, 4, darken(c, 0.1)); fan.rotation.x = -Math.PI / 2; fan.scale.set(1.5, 1, 0.2); fan.position.set(0, 0.16, -0.75); g.add(fan);
  eyes(g, 0.09, 0.42, 0.42, 0.045);
  for (const s of [-1, 1]) { const an = mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.8, 3), '#ffd0c0', { cast: false }); an.rotation.set(1.3, 0, s * 0.25); an.position.set(s * 0.06, 0.42, 0.78); g.add(an); }
  g.userData.anim = (t, k) => { segs.forEach((s, i) => { s.position.x = Math.sin(t * (14 + k * 10) - i * 0.6) * 0.04 * (1 + k); }); };
  return g;
}

function urchin(def) {
  const g = new THREE.Group(), c = def.color;
  const core = ell(0.36, 0.32, 0.36, c); core.position.y = 0.4; g.add(core);
  const N = 34;
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = i * 2.399963;
    const d = new THREE.Vector3(Math.cos(th) * r, y, Math.sin(th) * r);
    const sp = cone(0.045, 0.5, 4, i % 3 ? darken(c, 0.35) : lighten(c, 0.1));
    sp.position.copy(d).multiplyScalar(0.52).add(new THREE.Vector3(0, 0.4, 0));
    sp.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d); g.add(sp);
  }
  eyes(g, 0.13, 0.5, 0.33, 0.07);
  g.userData.anim = (t, k) => { core.scale.setScalar(1 + Math.sin(t * (8 + k * 8)) * 0.04); g.rotation.y = Math.sin(t * 2) * 0.1; };
  return g;
}

function seahorse(def) {
  const g = new THREE.Group(), c = def.color;
  const parts = [];
  for (let i = 0; i < 7; i++) {
    const a = i / 6, s = ell(0.2 - a * 0.1, 0.17, 0.2 - a * 0.1, i % 2 ? lighten(c, 0.2) : c);
    s.position.set(0, 0.95 - i * 0.16, Math.sin(a * 2.4) * -0.12 + (i > 4 ? -0.1 * (i - 4) : 0)); g.add(s); parts.push(s);
  }
  const head = ell(0.18, 0.2, 0.2, c); head.position.set(0, 1.12, 0.12); g.add(head);
  const snout = cone(0.06, 0.32, 5, c); snout.rotation.x = Math.PI / 2; snout.position.set(0, 1.08, 0.36); g.add(snout);
  const crest = cone(0.05, 0.25, 4, darken(c, 0.2)); crest.position.set(0, 1.35, 0.05); g.add(crest);
  const curl = mesh(new THREE.TorusGeometry(0.16, 0.05, 5, 10, Math.PI * 1.5), c); curl.position.set(0, 0.1, -0.27); curl.rotation.y = Math.PI / 2; g.add(curl);
  const fin = cone(0.14, 0.3, 4, lighten(c, 0.5)); fin.scale.set(0.12, 1, 1); fin.rotation.x = -Math.PI / 2; fin.position.set(0, 0.85, -0.25); g.add(fin);
  eyes(g, 0.12, 1.16, 0.24, 0.06);
  g.userData.anim = (t, k) => { fin.rotation.y = Math.sin(t * 25) * 0.4; parts.forEach((p, i) => { p.position.x = Math.sin(t * 3 - i * 0.4) * 0.03 * (1 + k * 2); }); };
  return g;
}

function voxelFish(def) {
  const g = new THREE.Group(), c = def.color, S = 0.16;
  const shape = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [1, 1], [2, 1], [3, 1], [2, -1], [3, -1], [-1, 1], [-1, -1], [-1, 0]];
  const ms = [mat(c), mat(lighten(c, 0.3)), mat(darken(c, 0.25))];
  shape.forEach(([z, y], i) => { const m = new THREE.Mesh(new THREE.BoxGeometry(S * 0.96, S * 0.96, S * 0.96), ms[(z + y + 5) % 3]); m.castShadow = true; m.position.set(0, 0.35 + y * S, (1.5 - z) * S * 1.05 - 0.05); if (z === 4) m.position.y += 0; g.add(m); });
  for (const s of [-1, 1]) { const e = new THREE.Mesh(new THREE.BoxGeometry(S * 0.5, S * 0.5, S * 0.5), mat('#111')); e.position.set(s * S * 0.55, 0.35 + S * 0.3, 0.6 - 0.05); g.add(e); }
  g.userData.anim = (t, k) => { g.rotation.z = Math.sin(t * (7 + k * 12)) * 0.12; };
  return g;
}

function flyingFish(def) {
  const g = fishBase(def, { w: 0.22, h: 0.22, l: 0.55 });
  for (const s of [-1, 1]) {
    const w = mesh(new THREE.ConeGeometry(0.22, 0.9, 3), lighten(def.color, 0.55)); w.rotation.set(0, 0, s * (Math.PI / 2)); w.scale.set(0.25, 1, 1.4); w.position.set(s * 0.5, 0.08, 0.05); g.add(w);
    (g.userData.wings ||= []).push({ w, s });
  }
  const base = g.userData.anim;
  g.userData.anim = (t, k) => { base(t, k); g.userData.wings.forEach(({ w, s }) => { w.rotation.x = Math.sin(t * (12 + k * 10)) * 0.35 * s * s; }); };
  return g;
}

function dripFish(def) {
  const g = fishBase(def, { w: 0.32, h: 0.34, l: 0.62 });
  const glasses = mesh(new THREE.BoxGeometry(0.62, 0.11, 0.1), '#111111'); glasses.position.set(0, 0.1, 0.42); g.add(glasses);
  const chain = mesh(new THREE.TorusGeometry(0.28, 0.03, 5, 12), '#ffd23c', { opts: { metalness: 0.7, roughness: 0.3 } }); chain.rotation.x = Math.PI / 2; chain.position.set(0, -0.12, 0.25); chain.scale.set(1, 1, 1.4); g.add(chain);
  const pend = mesh(new THREE.IcosahedronGeometry(0.09, 0), '#7ae0ff', { opts: { emissive: '#3fb6ff', emissiveIntensity: 0.6 } }); pend.position.set(0, -0.3, 0.44); g.add(pend);
  return g;
}

function superdwarf(def) {
  const g = fishBase(def, { w: 0.34, h: 0.36, l: 0.5 });
  const cape = mesh(new THREE.PlaneGeometry(0.7, 0.8, 1, 3), mat('#d61f2c', { side: THREE.DoubleSide })); cape.position.set(0, 0.05, -0.15); cape.rotation.x = 1.1; g.add(cape);
  const star = mesh(new THREE.ConeGeometry(0.12, 0.05, 5), '#ffe066'); star.rotation.x = Math.PI / 2; star.position.set(0, 0.05, 0.5); g.add(star);
  return g;
}

function goldenKoi(def) {
  const g = new THREE.Group();
  const gold = new THREE.MeshStandardMaterial({ color: def.color, emissive: '#ffb300', emissiveIntensity: 0.55, metalness: 0.5, roughness: 0.35, flatShading: true });
  const f = fishBase({ ...def, color: def.color }, { w: 0.3, h: 0.3, l: 0.75 });
  f.traverse(o => { if (o.isMesh && o.material.color && o.material.color.getHex() !== 0x111111 && o.material.color.getHex() !== 0xffffff) { o.material = gold; } });
  g.add(f);
  for (let i = 0; i < 4; i++) { const p = ell(0.14, 0.05, 0.14, '#ffffff', { cast: false }); p.position.set((i % 2 ? 1 : -1) * 0.1, 0.27 - (i % 2) * 0.03, 0.3 - i * 0.22); f.add(p); }
  for (const s of [-1, 1]) { const w = mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.7, 3), '#ffe9a0'); w.rotation.set(1.2, 0, s * 0.5); w.position.set(s * 0.15, -0.05, 0.75); g.add(w); }
  const crown = cone(0.16, 0.22, 5, '#fff2a0'); crown.position.set(0, 0.45, 0.35); g.add(crown);
  g.userData.anim = f.userData.anim; g.userData.parts = f.userData.parts;
  return g;
}

function mackerel(def) {
  const g = fishBase(def, { w: 0.24, h: 0.26, l: 0.7 });
  for (let i = 0; i < 5; i++) { const s = mesh(new THREE.BoxGeometry(0.2, 0.03, 0.06), darken(def.color, 0.6), { cast: false }); s.position.set(0, 0.24, 0.35 - i * 0.16); g.add(s); }
  return g;
}

const BUILDERS = { crab: d => crabLike(d), lobster: d => crabLike(d, { len: 1.4, tail: true }), shrimp: shrimp, urchin, seahorse, voxelFish, flyingFish, dripFish, superdwarf, goldenKoi, mackerel };

export function createCreatureMesh(def) {
  const inner = (BUILDERS[def.id] || (d => fishBase(d)))(def);
  const g = new THREE.Group(); g.add(inner);
  const s = def.radius * 1.5;
  inner.scale.setScalar(s);
  g.userData.anim = inner.userData.anim || (() => {});
  g.userData.inner = inner;
  const mats = [];
  g.traverse(o => { if (o.isMesh && o.material && o.material.emissive && !mats.some(x => x.m === o.material)) mats.push({ m: o.material, e: o.material.emissive.clone(), i: o.material.emissiveIntensity }); });
  g.userData.flash = v => { for (const x of mats) { if (v > 0) { x.m.emissive.setRGB(1, 1, 1); x.m.emissiveIntensity = v * 1.4; } else { x.m.emissive.copy(x.e); x.m.emissiveIntensity = x.i; } } };
  g.userData.upright = ['crab', 'lobster', 'shrimp', 'urchin', 'seahorse'].includes(def.id);
  return g;
}
