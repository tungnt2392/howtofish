import * as THREE from 'three';
import { mat, mesh, lowpoly, rng } from './lowpoly.js';

const box = (w, h, d, color, o) => mesh(new THREE.BoxGeometry(w, h, d), color, o);
const cyl = (rt, rb, h, seg, color, o) => mesh(new THREE.CylinderGeometry(rt, rb, h, seg), color, o);
const emissive = (color, i = 1.6) => new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: i, flatShading: true });

function label(text, w, h, bg, fg, font = 'bold 64px system-ui,sans-serif') {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const x = c.getContext('2d'); x.fillStyle = bg; x.fillRect(0, 0, w, h);
  x.strokeStyle = fg; x.lineWidth = 8; x.strokeRect(6, 6, w - 12, h - 12);
  x.fillStyle = fg; x.font = font; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, w / 2, h / 2 + 4);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function makePalm(seed = 1) {
  const g = new THREE.Group(), r = rng(seed + 3), lean = (r() - 0.5) * 2.2, H = 4.4 + r() * 1.4, N = 6;
  const P = t => new THREE.Vector3(lean * t * t * 1.4, H * t, 0);
  for (let i = 0; i < N; i++) {
    const a = P(i / N), b = P((i + 1) / N), len = a.distanceTo(b);
    const s = cyl(0.26 - 0.1 * ((i + 1) / N), 0.28 - 0.1 * (i / N), len * 1.06, 6, i % 2 ? '#8a5a34' : '#7a4d2b');
    s.position.copy(a).add(b).multiplyScalar(0.5); s.rotation.z = -Math.atan2(b.x - a.x, b.y - a.y); g.add(s);
  }
  const crown = new THREE.Group(); crown.position.copy(P(1)); g.add(crown);
  const leafMat = mat('#3fae4c'), leafMat2 = mat('#59c85a');
  for (let k = 0; k < 9; k++) {
    const holder = new THREE.Group(); holder.rotation.y = (k / 9) * Math.PI * 2 + r() * 0.3;
    const leaf = mesh(lowpoly(new THREE.ConeGeometry(0.55, 3.2, 4), 0.06, seed + k), k % 2 ? leafMat : leafMat2);
    leaf.rotation.z = -Math.PI / 2; leaf.position.x = 1.5; leaf.scale.set(0.22, 1, 1.4);
    const pivot = new THREE.Group(); pivot.rotation.z = -0.4 - r() * 0.35; pivot.add(leaf); holder.add(pivot);
    crown.add(holder);
  }
  for (let k = 0; k < 3; k++) { const c = mesh(new THREE.IcosahedronGeometry(0.2, 0), '#6b4a25'); c.position.set(Math.cos(k * 2.1) * 0.3, -0.25, Math.sin(k * 2.1) * 0.3); crown.add(c); }
  const ph = r() * 6.28;
  g.userData.sway = t => { g.rotation.z = Math.sin(t * 1.3 + ph) * 0.025; crown.rotation.y = Math.sin(t * 0.9 + ph) * 0.06; };
  return g;
}

export function makeRock(size = 1, seed = 1) {
  const m = mesh(lowpoly(new THREE.DodecahedronGeometry(size, 0), size * 0.22, seed), ['#8d929c', '#a0a4ad', '#7b808b'][seed % 3]);
  m.scale.y = 0.75; m.rotation.y = seed; return m;
}

export function makeLighthouse() {
  const g = new THREE.Group();
  for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2; const rk = makeRock(1.1 + (i % 3) * 0.3, i + 40); rk.position.set(Math.cos(a) * 1.9, 0.2, Math.sin(a) * 1.9); g.add(rk); }
  const H = 1.7;
  for (let i = 0; i < 6; i++) {
    const rb = 1.5 - i * 0.09, rt = 1.5 - (i + 1) * 0.09;
    const s = cyl(rt, rb, H, 10, i % 2 ? '#d94a3a' : '#f1ece0'); s.position.y = 0.4 + i * H + H / 2; g.add(s);
  }
  const top = 0.4 + 6 * H;
  const gallery = cyl(1.35, 1.35, 0.25, 10, '#3d4a5c'); gallery.position.y = top + 0.12; g.add(gallery);
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 1.2, 8), emissive('#ffe9a0', 1.8)); glass.position.y = top + 0.85; g.add(glass);
  const roof = cyl(0.05, 1.1, 1.0, 8, '#d94a3a'); roof.position.y = top + 1.95; g.add(roof);
  const door = box(0.6, 1.0, 0.2, '#6b4326'); door.position.set(0, 1.0, 1.4); g.add(door);
  const beam = new THREE.Group(); beam.position.y = top + 0.85;
  const bg = new THREE.ConeGeometry(2.4, 18, 14, 1, true); bg.translate(0, -9, 0); bg.rotateZ(Math.PI / 2);
  const bm = new THREE.MeshBasicMaterial({ color: '#fff2b0', transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
  const b1 = new THREE.Mesh(bg, bm), b2 = b1.clone(); b2.rotation.y = Math.PI; beam.add(b1, b2); g.add(beam);
  g.userData.update = t => { beam.rotation.y = t * 0.8; };
  g.scale.setScalar(1.05);
  return g;
}

export function makeVendorHut() {
  const g = new THREE.Group();
  const floor = box(4.4, 0.2, 3.4, '#a87a4a'); floor.position.y = 0.05; g.add(floor);
  for (const [x, z] of [[-2, -1.5], [2, -1.5], [-2, 1.5], [2, 1.5]]) { const p = cyl(0.12, 0.12, 2.8, 6, '#6b4326'); p.position.set(x, 1.4, z); g.add(p); }
  const back = box(4.2, 2.5, 0.15, '#c98a4b'); back.position.set(0, 1.35, -1.55); g.add(back);
  for (const sx of [-1, 1]) { const w = box(0.15, 2.5, 3.1, '#bf7f43'); w.position.set(sx * 2.05, 1.35, 0); g.add(w); }
  const counter = box(3.8, 1.0, 0.8, '#e0a465'); counter.position.set(0, 0.65, 1.25); g.add(counter);
  const top = box(4.0, 0.12, 1.0, '#f3c88b'); top.position.set(0, 1.2, 1.25); g.add(top);
  const roof = mesh(new THREE.ConeGeometry(3.7, 1.5, 4), '#3b8f9f'); roof.rotation.y = Math.PI / 4; roof.scale.set(1.05, 1, 0.9); roof.position.y = 3.55; g.add(roof);
  for (let i = 0; i < 6; i++) {
    const s = box(0.7, 0.08, 1.6, i % 2 ? '#ffffff' : '#ff5b4f'); s.position.set(-1.75 + i * 0.7, 2.75, 1.55); s.rotation.x = 0.35; g.add(s);
  }
  for (let i = 0; i < 7; i++) { const l = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 4), emissive(['#ffd166', '#ff7ab6', '#7ae0ff'][i % 3], 2)); l.position.set(-1.9 + i * 0.63, 2.3 - Math.sin(i / 6 * Math.PI) * 0.15 * -1, 2.28); g.add(l); }
  const signMat = new THREE.MeshBasicMaterial({ map: label('FISH  $$$', 256, 96, '#1e5f74', '#ffe08a', 'bold 56px system-ui,sans-serif') });
  const sign = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.9, 0.12), [mat('#6b4326'), mat('#6b4326'), mat('#6b4326'), mat('#6b4326'), signMat, mat('#6b4326')]);
  sign.position.set(0, 3.15, 1.0); sign.castShadow = true; g.add(sign);
  for (const [x, z, c] of [[-1.5, 0.2, '#b98a58'], [1.6, -0.6, '#c99b68']]) { const cr = box(0.8, 0.6, 0.8, c); cr.position.set(x, 0.4, z); g.add(cr); }
  for (let i = 0; i < 4; i++) { const f = mesh(new THREE.ConeGeometry(0.16, 0.6, 5), ['#6fb5e0', '#ff9a7a', '#7ee0a6', '#ffd166'][i]); f.rotation.z = Math.PI / 2; f.position.set(-0.9 + i * 0.6, 1.36, 1.2); g.add(f); }
  return g;
}

export function makeGrill() {
  const g = new THREE.Group();
  const base = box(1.2, 0.7, 1.0, '#3a3a44'); base.position.y = 0.7; g.add(base);
  for (const [x, z] of [[-0.5, -0.4], [0.5, -0.4], [-0.5, 0.4], [0.5, 0.4]]) { const l = cyl(0.06, 0.06, 0.45, 5, '#2b2b33'); l.position.set(x, 0.22, z); g.add(l); }
  const coals = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.05, 0.8), emissive('#ff6a1f', 1.4)); coals.position.y = 1.06; g.add(coals);
  for (let i = 0; i < 6; i++) { const b = box(0.04, 0.05, 0.85, '#15151a', { cast: false }); b.position.set(-0.45 + i * 0.18, 1.12, 0); g.add(b); }
  const smoke = [];
  for (let i = 0; i < 6; i++) { const m = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 0), new THREE.MeshBasicMaterial({ color: '#dfe6ea', transparent: true, depthWrite: false })); m.position.y = 1.2; g.add(m); smoke.push(m); }
  g.userData.update = t => {
    smoke.forEach((m, i) => { const k = (t * 0.35 + i / 6) % 1; m.position.set(Math.sin(k * 5 + i) * 0.15, 1.3 + k * 2.2, Math.cos(k * 4 + i) * 0.1); m.scale.setScalar(0.08 + k * 0.28); m.material.opacity = 0.5 * (1 - k); });
    coals.material.emissiveIntensity = 1.3 + Math.sin(t * 9) * 0.25 + Math.sin(t * 23) * 0.15;
  };
  return g;
}

const SLOT_EMOJI = { cherry: '🍒', bell: '🔔', fish: '🐟', seven: '7', rod: '🎣' };
const symbolTexCache = {};
function symbolTex(id) {
  if (symbolTexCache[id]) return symbolTexCache[id];
  const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
  x.fillStyle = '#fff8e0'; x.fillRect(0, 0, 128, 128);
  x.font = id === 'seven' ? 'bold 100px system-ui' : '84px "Segoe UI Emoji","Apple Color Emoji",sans-serif'; x.fillStyle = id === 'seven' ? '#d61f2c' : '#222'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(SLOT_EMOJI[id], 64, 70);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return (symbolTexCache[id] = t);
}
export function makeSlotMachine() {
  const g = new THREE.Group();
  const body = box(1.8, 2.5, 1.2, '#c42233'); body.position.y = 1.35; g.add(body);
  const dome = cyl(0.9, 0.9, 1.2, 14, '#ffcf3a'); dome.rotation.x = Math.PI / 2; dome.position.y = 2.6; g.add(dome);
  const base = box(2.0, 0.2, 1.4, '#3a3a44'); base.position.y = 0.1; g.add(base);
  const bezel = box(1.5, 0.7, 0.1, '#1b1b22'); bezel.position.set(0, 1.9, 0.62); g.add(bezel);
  const reels = [];
  for (let i = 0; i < 3; i++) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.55), new THREE.MeshBasicMaterial({ map: symbolTex(['cherry', 'bell', 'fish'][i]) }));
    m.position.set(-0.46 + i * 0.46, 1.9, 0.69); g.add(m); reels.push(m);
  }
  const panel = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.3), new THREE.MeshBasicMaterial({ map: label('JACKPOT', 256, 64, '#111', '#ffd166', 'bold 40px system-ui') }));
  panel.position.set(0, 1.35, 0.62); g.add(panel);
  const lever = new THREE.Group(); lever.position.set(1.0, 1.5, 0);
  const rod = cyl(0.05, 0.05, 0.8, 5, '#cccccc'); rod.position.y = 0.4; const ball = mesh(new THREE.IcosahedronGeometry(0.16, 1), '#ff2d55'); ball.position.y = 0.85; lever.add(rod, ball); g.add(lever);
  const bulbs = [];
  for (let i = 0; i < 8; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 4), emissive('#ffd166', 2)); b.position.set(-0.75 + i * 0.214, 2.32, 0.62); g.add(b); bulbs.push(b); }
  const st = { spinning: [false, false, false], acc: 0, leverT: 0, flash: 0 };
  const ids = Object.keys(SLOT_EMOJI);
  g.userData.setReels = list => list.forEach((id, i) => { reels[i].material.map = symbolTex(id); reels[i].material.needsUpdate = true; });
  g.userData.setSpinning = (i, v) => { st.spinning[i] = v; };
  g.userData.pull = () => { st.leverT = 1; };
  g.userData.flash = () => { st.flash = 1.2; };
  g.userData.update = (t, dt = 0.016) => {
    st.acc += dt;
    if (st.acc > 0.07) { st.acc = 0; st.spinning.forEach((s, i) => { if (s) { reels[i].material.map = symbolTex(ids[Math.floor(Math.random() * ids.length)]); reels[i].material.needsUpdate = true; } }); }
    st.leverT = Math.max(0, st.leverT - dt * 2.2); lever.rotation.x = Math.sin(st.leverT * Math.PI) * 1.0;
    st.flash = Math.max(0, st.flash - dt);
    bulbs.forEach((b, i) => { const on = st.flash > 0 ? (Math.floor(t * 12) + i) % 2 : (Math.floor(t * 2) + i) % 2; b.material.emissiveIntensity = on ? 2.6 : 0.5; });
  };
  return g;
}

export function makeDock({ x0, x1, zStart, zEnd, y }) {
  const g = new THREE.Group(), r = rng(9), w = x1 - x0, len = zStart - zEnd;
  const n = Math.floor(len / 0.5);
  for (let i = 0; i < n; i++) {
    const p = box(w, 0.12, 0.44, ['#b98553', '#a97845', '#c4915c'][i % 3]); p.position.set(0, y - 0.06, zStart - i * 0.5 - 0.25); p.rotation.y = (r() - 0.5) * 0.02; g.add(p);
  }
  for (const sx of [-1, 1]) { const beam = box(0.16, 0.16, len, '#6b4326'); beam.position.set(sx * (w / 2 - 0.1), y - 0.24, (zStart + zEnd) / 2); g.add(beam); }
  for (let z = zStart - 0.5; z > zEnd; z -= 3) for (const sx of [-1, 1]) {
    const p = cyl(0.14, 0.16, 2.2, 6, '#5a3820'); p.position.set(sx * (w / 2 + 0.05), y - 0.4, z); g.add(p);
    const cap = mesh(new THREE.SphereGeometry(0.16, 6, 4), '#7a4d2b'); cap.position.set(sx * (w / 2 + 0.05), y + 0.7, z); g.add(cap);
  }
  for (const sx of [-1, 1]) { const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), emissive('#ffd98a', 2.2)); lamp.position.set(sx * (w / 2 + 0.05), y + 1.2, zEnd + 0.4); g.add(lamp); const pole = cyl(0.05, 0.05, 1.2, 5, '#3a3a44'); pole.position.set(sx * (w / 2 + 0.05), y + 0.6, zEnd + 0.4); g.add(pole); }
  const barrel = cyl(0.35, 0.3, 0.8, 8, '#8c5a2b'); barrel.position.set(-1.1, y + 0.4, zStart - 0.7); g.add(barrel);
  const crate = box(0.7, 0.6, 0.7, '#c99b68'); crate.position.set(1.0, y + 0.3, zStart - 0.9); crate.rotation.y = 0.3; g.add(crate);
  return g;
}

export function makeWreck() {
  const g = new THREE.Group();
  const hull = mesh(lowpoly(new THREE.BoxGeometry(2.2, 1.1, 5.4, 2, 1, 4), 0.14, 3), '#f4f1e8'); hull.position.y = 0.2; g.add(hull);
  const stripe = box(2.25, 0.25, 5.45, '#e8553c'); stripe.position.y = -0.05; g.add(stripe);
  const mast = cyl(0.07, 0.09, 3.2, 5, '#6b4326'); mast.position.set(0.2, 1.7, -0.6); mast.rotation.z = 0.5; g.add(mast);
  const sail = mesh(new THREE.PlaneGeometry(1.6, 1.8), mat('#f7e9c8', { side: THREE.DoubleSide })); sail.position.set(0.9, 2.0, -0.6); sail.rotation.set(0, 1.2, 0.5); g.add(sail);
  g.rotation.set(0.2, 0, 0.18);
  g.userData.update = t => { g.position.y = -0.35 + Math.sin(t * 0.9) * 0.06; g.rotation.x = 0.2 + Math.sin(t * 0.7) * 0.03; };
  return g;
}

export function makeBuoy() {
  const g = new THREE.Group(); const ph = Math.random() * 6;
  const b = mesh(lowpoly(new THREE.SphereGeometry(0.45, 7, 5), 0.02, 4), '#ff4d3d'); b.position.y = 0.25; const band = cyl(0.47, 0.47, 0.18, 7, '#ffffff'); band.position.y = 0.3;
  const top = new THREE.Mesh(new THREE.SphereGeometry(0.1, 6, 4), emissive('#ffd166', 2)); top.position.y = 0.85; const stick = cyl(0.03, 0.03, 0.5, 4, '#333'); stick.position.y = 0.6;
  g.add(b, band, stick, top);
  g.userData.update = t => { g.position.y = Math.sin(t * 1.2 + ph) * 0.1; g.rotation.z = Math.sin(t * 0.9 + ph) * 0.12; };
  return g;
}

export function makeDistantIsland(i = 0) {
  const g = new THREE.Group(), r = rng(i * 31 + 5), s = 7 + r() * 9;
  const sand = mesh(lowpoly(new THREE.CylinderGeometry(s, s * 1.25, 1.5, 9), 0.5, i + 1), '#f0d39a', { cast: false }); sand.position.y = -0.2; g.add(sand);
  const hill = mesh(lowpoly(new THREE.ConeGeometry(s * 0.75, 3 + r() * 6, 8), 0.5, i + 9), '#5fae52', { cast: false }); hill.position.y = 1.5 + 1.5; g.add(hill);
  if (i % 2) { const p = makePalm(i + 90); p.position.set(s * 0.3, 1, 0); p.scale.setScalar(1.3); g.add(p); }
  return g;
}

export function makeFlock(n = 6) {
  const g = new THREE.Group(), birds = [], r = rng(33);
  const wingMat = mat('#ffffff', { side: THREE.DoubleSide });
  for (let i = 0; i < n; i++) {
    const b = new THREE.Group(), body = mesh(new THREE.ConeGeometry(0.16, 0.7, 5), '#ffffff', { cast: false }); body.rotation.x = Math.PI / 2; b.add(body);
    const wl = new THREE.Group(), wr = new THREE.Group();
    const wg = new THREE.BufferGeometry(); wg.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0.25, 1.1, 0, 0, 0, 0, -0.25], 3)); wg.computeVertexNormals();
    const a = new THREE.Mesh(wg, wingMat), c = new THREE.Mesh(wg, wingMat); c.scale.x = -1; wl.add(a); wr.add(c); b.add(wl, wr);
    b.userData = { wl, wr, rad: 14 + r() * 24, h: 12 + r() * 8, sp: 0.15 + r() * 0.1, ph: r() * 6.28, cx: (r() - 0.5) * 20, cz: (r() - 0.5) * 20 };
    birds.push(b); g.add(b);
  }
  g.userData.update = t => birds.forEach(b => {
    const u = b.userData, a = t * u.sp + u.ph;
    b.position.set(u.cx + Math.cos(a) * u.rad, u.h + Math.sin(t * 0.7 + u.ph) * 0.8, u.cz + Math.sin(a) * u.rad);
    b.rotation.y = -a + Math.PI; b.rotation.z = -0.25;
    const f = Math.sin(t * 8 + u.ph) * 0.6; u.wl.rotation.z = f; u.wr.rotation.z = -f;
  });
  return g;
}

export function makeButterflies(n, heightFn) {
  const g = new THREE.Group(), flies = [], r = rng(71);
  for (let i = 0; i < n; i++) {
    const b = new THREE.Group(), col = ['#ff7ab6', '#ffd166', '#7ae0ff', '#c58bff'][i % 4];
    const wm = new THREE.MeshBasicMaterial({ color: col, side: THREE.DoubleSide });
    const wg = new THREE.BufferGeometry(); wg.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0.22, 0, 0.14, 0.22, 0, -0.14], 3));
    const wl = new THREE.Mesh(wg, wm), wr = new THREE.Mesh(wg, wm); wr.scale.x = -1; b.add(wl, wr);
    const a = r() * 6.28, d = 3 + r() * 6;
    b.userData = { wl, wr, cx: Math.cos(a) * d, cz: Math.sin(a) * d, ph: r() * 6.28, rad: 1 + r() * 1.5 };
    flies.push(b); g.add(b);
  }
  g.userData.update = t => flies.forEach(b => {
    const u = b.userData, a = t * 0.6 + u.ph;
    const x = u.cx + Math.cos(a) * u.rad, z = u.cz + Math.sin(a * 1.3) * u.rad;
    b.position.set(x, Math.max(0.3, heightFn(x, z)) + 0.9 + Math.sin(t * 2.3 + u.ph) * 0.3, z);
    b.rotation.y = -a; const f = Math.sin(t * 22 + u.ph) * 0.9; u.wl.rotation.z = f; u.wr.rotation.z = -f;
  });
  return g;
}

/** Instanced flowers + grass tufts scattered on the land for lushness. */
export function makeScatter(heightFn, ok) {
  const g = new THREE.Group(), r = rng(99);
  const fl = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.11, 0), new THREE.MeshStandardMaterial({ flatShading: true }), 90);
  const tf = new THREE.InstancedMesh(new THREE.ConeGeometry(0.09, 0.5, 4), new THREE.MeshStandardMaterial({ color: '#4ea443', flatShading: true }), 260);
  tf.receiveShadow = true;
  const cols = ['#ff7ab6', '#ffd166', '#ffffff', '#ff8a4a', '#c58bff'], m = new THREE.Matrix4(), c = new THREE.Color();
  let fi = 0, ti = 0, tries = 0;
  while ((fi < 90 || ti < 260) && tries++ < 4000) {
    const a = r() * 6.28, d = r() * 13, x = Math.cos(a) * d, z = Math.sin(a) * d, h = heightFn(x, z);
    if (h < 0.3 || !ok(x, z)) continue;
    if (fi < 90 && r() < 0.3) { m.makeTranslation(x, h + 0.15, z); fl.setMatrixAt(fi, m); fl.setColorAt(fi, c.set(cols[fi % cols.length])); fi++; }
    else if (ti < 260) { m.makeRotationY(r() * 6.28).setPosition(x, h + 0.2, z); tf.setMatrixAt(ti, m); ti++; }
  }
  fl.count = fi; tf.count = ti; g.add(fl, tf); return g;
}
