import * as THREE from 'three';
import { Spring } from '../core/tween.js';
import { mat, mesh } from '../world/lowpoly.js';

export function createBobber() {
  const group = new THREE.Group();
  const inner = new THREE.Group(); group.add(inner);
  const top = mesh(new THREE.SphereGeometry(0.2, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), '#ff3b30'); inner.add(top);
  const bot = mesh(new THREE.SphereGeometry(0.2, 10, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), '#ffffff'); inner.add(bot);
  const stick = mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35, 4), '#ffffff'); stick.position.y = 0.32; inner.add(stick);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 4), new THREE.MeshStandardMaterial({ color: '#ffd166', emissive: '#ffd166', emissiveIntensity: 2 })); lamp.position.y = 0.52; inner.add(lamp);
  const dipSpring = new Spring(0, 220, 9);
  const s = { t: 0, floating: false, base: new THREE.Vector3() };
  return {
    group, inner,
    place(p) { group.position.copy(p); s.base.copy(p); },
    setFloating(v) { s.floating = v; },
    /** amount ~ metres to push under water */
    dip(amount) { dipSpring.target = 0; dipSpring.value = -amount; dipSpring.vel = -amount * 6; },
    show() { group.visible = true; }, hide() { group.visible = false; },
    update(dt, time, waveY = 0) {
      dipSpring.update(dt);
      if (s.floating) {
        group.position.y = s.base.y + waveY + Math.sin(time * 2.4) * 0.05 + dipSpring.value;
        inner.rotation.z = Math.sin(time * 1.7) * 0.12 + dipSpring.vel * 0.02; inner.rotation.x = Math.cos(time * 1.3) * 0.1;
      } else { inner.rotation.set(0, 0, 0); }
    },
  };
}
