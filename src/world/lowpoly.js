import * as THREE from 'three';

export function rng(seed = 1) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

/** Non-indexed, flat-faceted; shared vertices are jittered together so the mesh stays closed. */
export function lowpoly(geo, jitter = 0.15, seed = 1) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const pos = g.attributes.position, r = rng(seed), seen = new Map();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const k = `${x.toFixed(3)},${y.toFixed(3)},${z.toFixed(3)}`;
    let o = seen.get(k);
    if (!o) { o = [(r() - 0.5) * 2 * jitter, (r() - 0.5) * 2 * jitter, (r() - 0.5) * 2 * jitter]; seen.set(k, o); }
    pos.setXYZ(i, x + o[0], y + o[1], z + o[2]);
  }
  g.computeVertexNormals();
  return g;
}

export const mat = (color, opts = {}) => new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.85, metalness: 0, ...opts });

export function mesh(geo, color, { cast = true, receive = true, opts } = {}) {
  const m = new THREE.Mesh(geo, color.isMaterial ? color : mat(color, opts));
  m.castShadow = cast; m.receiveShadow = receive; return m;
}

export function lerpAngle(a, b, t) {
  const d = ((b - a + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
  return a + d * t;
}
export const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));

/** Free GPU resources of an object tree that owns its geometry/materials (not for shared geometry). */
export function disposeTree(obj) {
  obj.traverse(o => {
    if (o.geometry) o.geometry.dispose();
    const m = o.material; if (m) (Array.isArray(m) ? m : [m]).forEach(x => x.dispose());
  });
}
