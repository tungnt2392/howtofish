import * as THREE from 'three';
import { easings } from '../core/tween.js';

/** DOM text that pops (outBack), rises and fades, anchored to a world position. */
export function createFloatingText(container, camera) {
  const root = document.createElement('div'); root.className = 'ft-root'; container.appendChild(root);
  const items = [], v = new THREE.Vector3(), pool = [];
  return {
    spawn(text, world, { color = '#ffffff', size = 36, life = 1.1, rise = 70, stroke = '#14304a', wobble = 0, delay = 0, oy = 0, ox = 0 } = {}) {
      const el = pool.pop() || document.createElement('div');
      el.className = 'ft'; el.textContent = text; el.style.color = color; el.style.fontSize = size + 'px'; el.style.webkitTextStroke = Math.max(4, size / 6) + 'px ' + stroke;
      el.style.opacity = '0'; root.appendChild(el);
      items.push({ el, world: world.clone(), life, rise, age: -delay, wobble, size, oy, ox, rot: (Math.random() - 0.5) * 0.25 });
    },
    update(dt) {
      for (let i = items.length - 1; i >= 0; i--) {
        const it = items[i]; it.age += dt;
        if (it.age < 0) continue;
        const k = it.age / it.life;
        if (k >= 1) { it.el.remove(); pool.push(it.el); items.splice(i, 1); continue; }
        v.copy(it.world).project(camera);
        if (v.z > 1) { it.el.style.opacity = '0'; continue; }
        const x = (v.x * 0.5 + 0.5) * innerWidth + it.ox, y = (-v.y * 0.5 + 0.5) * innerHeight + it.oy - it.rise * easings.outCubic(Math.min(1, k * 1.3));
        const pop = easings.outBack(Math.min(1, it.age / 0.22)), sc = pop * (k > 0.75 ? 1 - (k - 0.75) * 2 : 1) * (1 + Math.sin(it.age * 20) * it.wobble);
        it.el.style.opacity = String(k > 0.7 ? 1 - (k - 0.7) / 0.3 : 1);
        it.el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${Math.max(sc, 0.01)}) rotate(${it.rot * (1 - k)}rad)`;
      }
    },
  };
}
