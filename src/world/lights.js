import * as THREE from 'three';

export function createLights(scene) {
  const sun = new THREE.DirectionalLight(0xffe0ac, 3.1);
  sun.position.set(-22, 20, 16);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const c = sun.shadow.camera; c.left = -24; c.right = 24; c.top = 24; c.bottom = -24; c.near = 1; c.far = 90;
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.04; sun.shadow.radius = 3;
  scene.add(sun, sun.target);
  const hemi = new THREE.HemisphereLight(0xbfe8ff, 0xe0b880, 0.95);
  scene.add(hemi);
  const offset = sun.position.clone();
  return {
    sun, hemi,
    update(t, focus) {
      // shadow frustum follows the player, snapped to a texel-ish grid to avoid shimmering
      const snap = 0.1;
      const fx = Math.round(focus.x / snap) * snap, fz = Math.round(focus.z / snap) * snap;
      sun.target.position.set(fx, 0, fz);
      sun.position.set(fx + offset.x + Math.sin(t * 0.05) * 1.5, offset.y, fz + offset.z);
    },
  };
}
