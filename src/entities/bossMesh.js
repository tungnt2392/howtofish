import * as THREE from 'three';
import { mat, mesh, lowpoly } from '../world/lowpoly.js';

/** Colossal low-poly spider crab. Faces +z (toward the dock). */
export function createBossMesh() {
  const g = new THREE.Group(), body = new THREE.Group(); g.add(body);
  const RED = '#d9482f', DARK = '#a3301f', LIGHT = '#ff7a5c';
  const shell = mesh(lowpoly(new THREE.IcosahedronGeometry(3, 1), 0.18, 77), RED); shell.scale.set(1.15, 0.6, 1); shell.position.y = 1.6; body.add(shell);
  const plate = mesh(lowpoly(new THREE.IcosahedronGeometry(2.2, 1), 0.14, 78), LIGHT); plate.scale.set(1.1, 0.4, 0.9); plate.position.y = 2.5; body.add(plate);
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2, sp = mesh(new THREE.ConeGeometry(0.28, 1.1, 5), DARK);
    sp.position.set(Math.cos(a) * 2.3, 2.7 + Math.sin(i * 2.1) * 0.15, Math.sin(a) * 1.9 - 0.2); sp.rotation.set(Math.sin(a) * 0.5, 0, -Math.cos(a) * 0.5); body.add(sp);
  }
  const eyes = [];
  for (const s of [-1, 1]) {
    const stalk = mesh(new THREE.CylinderGeometry(0.16, 0.2, 1.2, 6), DARK); stalk.position.set(s * 0.9, 2.4, 2.3); stalk.rotation.x = -0.4; body.add(stalk);
    const eye = new THREE.Group(); eye.position.set(s * 0.9, 3.0, 2.55);
    const w = mesh(new THREE.SphereGeometry(0.5, 10, 8), '#ffffff'); const p = mesh(new THREE.SphereGeometry(0.26, 8, 6), '#111'); p.position.z = 0.34; eye.add(w, p); body.add(eye); eyes.push(eye);
  }
  const claws = [];
  for (const s of [-1, 1]) {
    const arm = new THREE.Group(); arm.position.set(s * 3.1, 1.6, 1.4); body.add(arm);
    const a1 = mesh(lowpoly(new THREE.CylinderGeometry(0.4, 0.5, 2.6, 6), 0.05, 5), DARK); a1.rotation.set(Math.PI / 2 - 0.3, 0, s * 0.6); a1.position.set(s * 0.7, 0.2, 1.1); arm.add(a1);
    const hand = new THREE.Group(); hand.position.set(s * 1.4, 0.4, 2.5); arm.add(hand);
    const palm = mesh(lowpoly(new THREE.IcosahedronGeometry(1, 1), 0.08, 9), RED); palm.scale.set(1.1, 0.8, 1.5); palm.position.z = 0.3; hand.add(palm);
    const top = new THREE.Group(), bot = new THREE.Group(); hand.add(top, bot);
    const t1 = mesh(new THREE.ConeGeometry(0.5, 1.9, 5), LIGHT); t1.rotation.x = Math.PI / 2; t1.position.set(0, 0.25, 1.8); top.add(t1);
    const t2 = mesh(new THREE.ConeGeometry(0.5, 1.9, 5), LIGHT); t2.rotation.x = Math.PI / 2; t2.position.set(0, -0.25, 1.8); bot.add(t2);
    claws.push({ top, bot, hand, s });
  }
  const legs = [];
  for (let i = 0; i < 8; i++) {
    const s = i % 2 ? 1 : -1, row = Math.floor(i / 2), leg = new THREE.Group();
    leg.position.set(s * 2.6, 1.7, -1.6 + row * 1.15);
    const up = mesh(lowpoly(new THREE.CylinderGeometry(0.16, 0.22, 3.2, 5), 0.03, 20 + i), DARK); up.position.set(s * 1.4, 0.5, 0); up.rotation.z = -s * 1.1; leg.add(up);
    const down = mesh(lowpoly(new THREE.CylinderGeometry(0.1, 0.16, 3.6, 5), 0.03, 30 + i), RED); down.position.set(s * 3.1, -1.3, 0); down.rotation.z = s * 0.35; leg.add(down);
    body.add(leg); legs.push({ leg, s, row });
  }
  const glow = new THREE.PointLight(0xff6a4a, 0, 16); glow.position.y = 3; g.add(glow);
  const st = { flash: 0 };
  g.userData = {
    body, glow,
    hurt() { st.flash = 1; },
    /** mode: idle | stunned | angry */
    animate(t, mode, dt) {
      const stun = mode === 'stunned', angry = mode === 'angry';
      body.position.y = stun ? -0.35 : Math.sin(t * 1.6) * 0.12;
      body.rotation.z = stun ? Math.sin(t * 40) * 0.015 : Math.sin(t * 0.9) * 0.03;
      legs.forEach(({ leg, s, row }, i) => {
        leg.rotation.y = stun ? s * 0.55 : Math.sin(t * (angry ? 9 : 3) + i * 1.3) * 0.22;
        leg.rotation.z = stun ? -s * 0.25 : Math.sin(t * (angry ? 9 : 3) + i * 1.3 + 1) * 0.06;
      });
      claws.forEach(({ top, bot, hand, s }, i) => {
        const open = stun ? 0.05 : angry ? 0.5 + Math.sin(t * 16 + i) * 0.45 : 0.3 + Math.sin(t * 2.4 + i * 2) * 0.28;
        top.rotation.x = -open * 0.7; bot.rotation.x = open * 0.7; hand.rotation.y = -s * (stun ? 0.5 : 0.15 + Math.sin(t * 1.5 + i) * 0.1);
      });
      eyes.forEach((e, i) => { e.rotation.z = stun ? t * 12 : 0; e.rotation.y = Math.sin(t * 1.2 + i) * 0.3; e.scale.setScalar(stun ? 1.15 : 1); });
      st.flash = Math.max(0, st.flash - dt * 5);
      glow.intensity = (angry ? 60 : 0) + st.flash * 40;
      body.traverse(o => { if (o.isMesh && o.material.emissive) { o.material.emissive.setRGB(st.flash, st.flash * 0.6, st.flash * 0.4); o.material.emissiveIntensity = 1; } });
    },
  };
  return g;
}
