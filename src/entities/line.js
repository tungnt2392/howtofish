import * as THREE from 'three';

const SEGS = 26;
export function createLine(scene) {
  const geo = new THREE.CylinderGeometry(0.02, 0.02, 1, 4); geo.translate(0, 0.5, 0); // origin at base, extends +y
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const inst = new THREE.InstancedMesh(geo, material, SEGS);
  inst.frustumCulled = false; inst.visible = false; inst.castShadow = false; scene.add(inst);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), s = new THREE.Vector3();
  const a = new THREE.Vector3(), b = new THREE.Vector3(), ctrl = new THREE.Vector3(), p0 = new THREE.Vector3(), p1 = new THREE.Vector3(), d = new THREE.Vector3();
  const white = new THREE.Color('#ffffff'), red = new THREE.Color('#ff3b30'), yellow = new THREE.Color('#ffd23c');
  const bez = (t, out) => { const u = 1 - t; return out.set(u * u * a.x + 2 * u * t * ctrl.x + t * t * b.x, u * u * a.y + 2 * u * t * ctrl.y + t * t * b.y, u * u * a.z + 2 * u * t * ctrl.z + t * t * b.z); };
  return {
    mesh: inst,
    show() { inst.visible = true; }, hide() { inst.visible = false; },
    /** sag in metres (slack); wobble adds gentle life */
    setEnds(from, to, sag = 0.6, wobble = 0, time = 0) {
      a.copy(from); b.copy(to);
      ctrl.copy(a).lerp(b, 0.5); ctrl.y -= sag * 2; ctrl.x += Math.sin(time * 3) * wobble; ctrl.z += Math.cos(time * 2.6) * wobble;
      bez(0, p0);
      for (let i = 0; i < SEGS; i++) {
        bez((i + 1) / SEGS, p1); d.subVectors(p1, p0); const len = Math.max(d.length(), 1e-4);
        q.setFromUnitVectors(up, d.multiplyScalar(1 / len)); s.set(1, len * 1.02, 1);
        m.compose(p0, q, s); inst.setMatrixAt(i, m); p0.copy(p1);
      }
      inst.instanceMatrix.needsUpdate = true;
    },
    /** 0..1 tension: white → yellow → red */
    tint(t) { material.color.copy(t < 0.6 ? white.clone().lerp(yellow, t / 0.6) : yellow.clone().lerp(red, (t - 0.6) / 0.4)); },
  };
}
