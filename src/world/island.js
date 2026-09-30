import * as THREE from 'three';
import { mat, mesh, lowpoly, rng } from './lowpoly.js';
import { shoreRadius } from './water.js';
import { makePalm, makeLighthouse, makeVendorHut, makeGrill, makeSlotMachine, makeDock, makeRock, makeWreck, makeFlock, makeButterflies, makeBuoy, makeDistantIsland, makeScatter } from './props.js';

const EDGE_EXTRA = 1.67;
export const edgeRadius = a => shoreRadius(a) + EDGE_EXTRA;
const smooth = t => t * t * (3 - 2 * t);

export function terrainHeight(x, z) {
  const r = Math.hypot(x, z), a = Math.atan2(z, x), R = edgeRadius(a);
  const t = THREE.MathUtils.clamp((r - (R - 3)) / 3, 0, 1), s = smooth(t);
  let h = 0.6 - 1.4 * s;
  h += 3.0 * Math.exp(-(((x + 5) ** 2) + ((z - 3.5) ** 2)) / 16) * (1 - s);
  h += 0.12 * Math.sin(x * 0.9) * Math.cos(z * 0.8) * (1 - s);
  return h;
}

export const DOCK = { x0: -1.3, x1: 1.3, zStart: -10.2, zEnd: -20.4, y: 0.58 };
const onDock = (x, z) => x > DOCK.x0 && x < DOCK.x1 && z < DOCK.zStart && z > DOCK.zEnd;

export function groundY(x, z) {
  if (onDock(x, z)) return DOCK.y;
  return Math.max(terrainHeight(x, z), 0.02);
}
export function walkable(x, z) {
  if (onDock(x, z)) return true;
  const r = Math.hypot(x, z), a = Math.atan2(z, x);
  return r < shoreRadius(a) + 0.2;
}

function buildTerrain() {
  const rings = 18, segs = 56, pts = [];
  const vert = (i, j) => {
    const th = (j % segs) / segs * Math.PI * 2, a = Math.atan2(Math.sin(th), Math.cos(th));
    if (i > rings) { const R = edgeRadius(a) * 1.12; return [Math.cos(th) * R, -2.4, Math.sin(th) * R]; }
    const R = edgeRadius(a) * (i / rings), x = Math.cos(th) * R, z = Math.sin(th) * R;
    return [x, terrainHeight(x, z), z];
  };
  const pos = [], col = [];
  const sand = new THREE.Color('#f3d69c'), sandDark = new THREE.Color('#e3bf80'), g1 = new THREE.Color('#6fc45a'), g2 = new THREE.Color('#57ab4c'), g3 = new THREE.Color('#8fd465');
  const rand = rng(11);
  const tri = (a, b, c) => {
    const h = (a[1] + b[1] + c[1]) / 3, x = (a[0] + b[0] + c[0]) / 3, z = (a[2] + b[2] + c[2]) / 3;
    let color;
    if (h < -0.3) color = sandDark.clone();
    else if (h < 0.3) color = sand.clone().lerp(sandDark, rand() * 0.5);
    else { color = g1.clone().lerp(g2, rand()); if (h > 1.4) color.lerp(g3, Math.min(1, (h - 1.4) / 1.6)); }
    for (const v of [a, b, c]) { pos.push(...v); col.push(color.r, color.g, color.b); }
    pts.push([x, z]);
  };
  for (let i = 0; i <= rings; i++) for (let j = 0; j < segs; j++) {
    const a = vert(i, j), b = vert(i + 1, j), c = vert(i + 1, j + 1), d = vert(i, j + 1);
    if (i === 0) tri(a, c, b); else { tri(a, d, b); tri(b, d, c); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95 }));
  m.receiveShadow = true; m.castShadow = true;
  return m;
}

/** Station anchors (world positions) the interaction system queries. */
export const STATIONS = {
  vendor: new THREE.Vector3(-6.2, 0.6, -6.6),
  grill: new THREE.Vector3(-3.2, 0.6, -8.6),
  slots: new THREE.Vector3(-9.2, 0.6, -2.6),
  dockEnd: new THREE.Vector3(0, DOCK.y, -19.2),
};

export function createIsland(scene) {
  const group = new THREE.Group(); scene.add(group);
  group.add(buildTerrain());
  const r = rng(5), sway = [], animated = [];

  const placed = [];
  const free = (x, z, d) => placed.every(p => Math.hypot(p[0] - x, p[1] - z) > d) && !onDock(x, z) && !(Math.abs(x) < 3 && z < -8.5 && z > -13)
    && Object.values(STATIONS).every(s => Math.hypot(s.x - x, s.z - z) > 3.2);

  // palms on land
  let tries = 0;
  while (placed.length < 12 && tries++ < 400) {
    const a = r() * Math.PI * 2, d = 7.5 + r() * 5, x = Math.cos(a) * d, z = Math.sin(a) * d;
    if (!walkable(x, z) || terrainHeight(x, z) < 0.15 || !free(x, z, 3.2) || Math.hypot(x - 8, z + 7) < 4.5) continue;
    placed.push([x, z]);
    const p = makePalm(placed.length * 7); p.position.set(x, terrainHeight(x, z) - 0.1, z); p.rotation.y = r() * 6.28; p.scale.setScalar(0.8 + r() * 0.15); group.add(p); sway.push(p);
  }
  // rocks on the shore + boulders
  for (let i = 0; i < 16; i++) {
    const a = r() * Math.PI * 2, d = edgeRadius(a) - 0.6 + r() * 1.6, x = Math.cos(a) * d, z = Math.sin(a) * d;
    if (onDock(x, z) || (Math.abs(x) < 3 && z < -9)) continue;
    const rk = makeRock(0.5 + r() * 1.1, i); rk.position.set(x, -0.1, z); group.add(rk);
  }

  group.add(makeScatter(terrainHeight, (x, z) => walkable(x, z) && Object.values(STATIONS).every(st => Math.hypot(st.x - x, st.z - z) > 2.2) && !(Math.abs(x) < 3 && z < -9)));
  const lighthouse = makeLighthouse(); lighthouse.position.set(8.2, terrainHeight(8.2, -7) - 0.2, -7.2); group.add(lighthouse);
  animated.push(lighthouse);
  const vendor = makeVendorHut(); vendor.position.copy(STATIONS.vendor); vendor.rotation.y = Math.PI * 0.12; group.add(vendor);
  const grill = makeGrill(); grill.position.copy(STATIONS.grill); grill.rotation.y = -0.4; group.add(grill); animated.push(grill);
  const slots = makeSlotMachine(); slots.position.copy(STATIONS.slots); slots.rotation.y = Math.PI * 0.4; group.add(slots);
  const dock = makeDock(DOCK); group.add(dock);
  const wreck = makeWreck(); wreck.position.set(-11.5, -0.2, -13); wreck.rotation.y = 0.6; group.add(wreck); animated.push(wreck);

  // sea decor
  const decor = new THREE.Group(); scene.add(decor);
  const rd = rng(21);
  for (let i = 0; i < 6; i++) { const b = makeBuoy(); b.position.set((rd() - 0.5) * 34, 0, -16 - rd() * 22); decor.add(b); animated.push(b); }
  for (let i = 0; i < 7; i++) {
    const isl = makeDistantIsland(i);
    const ang = -Math.PI / 2 + (i - 3) * 0.45 + (rd() - 0.5) * 0.2, dist = 55 + rd() * 35;
    isl.position.set(Math.cos(ang) * dist, 0, Math.sin(ang) * dist - 5); decor.add(isl);
  }
  const flock = makeFlock(6); scene.add(flock); animated.push(flock);
  const flies = makeButterflies(6, terrainHeight); group.add(flies); animated.push(flies);

  return {
    group, walkable, groundY, terrainHeight, stations: STATIONS, dock: DOCK, slotMachine: slots, vendor, grill, lighthouse,
    update(t, dt) {
      for (const p of sway) p.userData.sway(t);
      for (const a of animated) a.userData.update && a.userData.update(t, dt);
    },
  };
}
