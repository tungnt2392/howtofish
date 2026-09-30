import * as THREE from 'three';

/** Pooled struct-of-arrays particle system rendered as one InstancedMesh (low-poly diamonds) + a coin pool. */
export function createParticles(scene, groundFn) {
  const CAP = 1600;
  const geo = new THREE.OctahedronGeometry(0.5, 0);
  const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false });
  const inst = new THREE.InstancedMesh(geo, mat, CAP);
  inst.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(CAP * 3), 3);
  inst.frustumCulled = false; inst.count = 0; scene.add(inst);
  const F = n => new Float32Array(n);
  const px = F(CAP), py = F(CAP), pz = F(CAP), vx = F(CAP), vy = F(CAP), vz = F(CAP), life = F(CAP), max = F(CAP), s0 = F(CAP), s1 = F(CAP), gr = F(CAP), drag = F(CAP), spin = F(CAP), cr = F(CAP), cg = F(CAP), cb = F(CAP), ph = F(CAP);
  let n = 0;
  const d = new THREE.Object3D(), c = new THREE.Color();

  function spawn(x, y, z, ax, ay, az, o) {
    if (n >= CAP) return;
    const i = n++;
    px[i] = x; py[i] = y; pz[i] = z; vx[i] = ax; vy[i] = ay; vz[i] = az;
    life[i] = max[i] = o.life; s0[i] = o.size; s1[i] = o.sizeEnd ?? 0; gr[i] = o.gravity ?? 0; drag[i] = o.drag ?? 0; spin[i] = (Math.random() - 0.5) * 10; ph[i] = Math.random() * 6.28;
    c.set(o.color); cr[i] = c.r; cg[i] = c.g; cb[i] = c.b;
  }
  const pick = a => a[Math.floor(Math.random() * a.length)];

  const api = {
    /** generic radial burst; `up` biases upward, `flat` squashes vertical spread */
    burst(pos, { count = 12, color = '#fff', colors, speed = 4, up = 2, life = 0.6, size = 0.2, sizeEnd = 0, gravity = 12, drag = 1.5, flat = 1 } = {}) {
      for (let k = 0; k < count; k++) {
        const th = Math.random() * 6.283, ph2 = Math.acos(2 * Math.random() - 1), sp = speed * (0.4 + Math.random() * 0.8);
        spawn(pos.x, pos.y, pos.z, Math.sin(ph2) * Math.cos(th) * sp, Math.cos(ph2) * sp * flat + up, Math.sin(ph2) * Math.sin(th) * sp,
          { color: colors ? pick(colors) : color, life: life * (0.7 + Math.random() * 0.6), size: size * (0.6 + Math.random() * 0.8), sizeEnd, gravity, drag });
      }
    },
    splash(pos, power = 1) {
      const n2 = Math.round(14 * power);
      for (let k = 0; k < n2; k++) {
        const th = Math.random() * 6.283, sp = (1 + Math.random() * 2.5) * power;
        spawn(pos.x, pos.y, pos.z, Math.cos(th) * sp, (4 + Math.random() * 4) * Math.sqrt(power), Math.sin(th) * sp,
          { color: pick(['#ffffff', '#d8f6ff', '#9fe6ff']), life: 0.7 + Math.random() * 0.3, size: 0.13 + Math.random() * 0.12, sizeEnd: 0.02, gravity: 20, drag: 0.4 });
      }
    },
    stars(pos, count = 8, scale = 1) {
      api.burst(pos, { count, colors: ['#ffe14d', '#ffffff', '#ffb830'], speed: 7 * scale, up: 1, life: 0.45, size: 0.34 * scale, gravity: 6, drag: 3 });
    },
    sparkles(pos, { count = 14, color = '#fff6a8', radius = 0.6, life = 1, size = 0.16 } = {}) {
      for (let k = 0; k < count; k++) {
        const th = Math.random() * 6.283, r = Math.random() * radius;
        spawn(pos.x + Math.cos(th) * r, pos.y + Math.random() * 0.5, pos.z + Math.sin(th) * r, (Math.random() - 0.5) * 0.8, 1.2 + Math.random() * 2, (Math.random() - 0.5) * 0.8,
          { color: Array.isArray(color) ? pick(color) : color, life: life * (0.6 + Math.random() * 0.8), size, sizeEnd: 0, gravity: -1.5, drag: 1 });
      }
    },
    /** horizontal expanding ring of particles (shock/dust) */
    ring(pos, { count = 20, color = '#ffffff', speed = 5, life = 0.5, size = 0.2 } = {}) {
      for (let k = 0; k < count; k++) {
        const th = (k / count) * 6.283; spawn(pos.x, pos.y + 0.05, pos.z, Math.cos(th) * speed, 0.2, Math.sin(th) * speed, { color, life, size, sizeEnd: 0, gravity: 0, drag: 4 });
      }
    },
    puff(pos, { count = 6, color = '#e9eef2', size = 0.35, life = 0.7 } = {}) {
      for (let k = 0; k < count; k++) spawn(pos.x + (Math.random() - 0.5) * 0.3, pos.y, pos.z + (Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 1.5, 0.8 + Math.random(), (Math.random() - 0.5) * 1.5,
        { color, life: life * (0.7 + Math.random() * 0.6), size, sizeEnd: size * 2, gravity: -0.5, drag: 2 });
    },
    update(dt) {
      for (let i = 0; i < n;) {
        life[i] -= dt;
        if (life[i] <= 0) { // swap-remove
          const l = --n;
          if (i !== l) { px[i] = px[l]; py[i] = py[l]; pz[i] = pz[l]; vx[i] = vx[l]; vy[i] = vy[l]; vz[i] = vz[l]; life[i] = life[l]; max[i] = max[l]; s0[i] = s0[l]; s1[i] = s1[l]; gr[i] = gr[l]; drag[i] = drag[l]; spin[i] = spin[l]; cr[i] = cr[l]; cg[i] = cg[l]; cb[i] = cb[l]; ph[i] = ph[l]; }
          continue;
        }
        const k = 1 - life[i] / max[i], dr = Math.exp(-drag[i] * dt);
        vy[i] -= gr[i] * dt; vx[i] *= dr; vz[i] *= dr; vy[i] *= (gr[i] === 0 ? dr : 1);
        px[i] += vx[i] * dt; py[i] += vy[i] * dt; pz[i] += vz[i] * dt;
        const s = s0[i] + (s1[i] - s0[i]) * k * k;
        d.position.set(px[i], py[i], pz[i]); d.rotation.set(ph[i] + k * spin[i], ph[i] + k * spin[i] * 0.7, 0); d.scale.setScalar(Math.max(s, 0.001)); d.updateMatrix();
        inst.setMatrixAt(i, d.matrix); inst.instanceColor.setXYZ(i, cr[i], cg[i], cb[i]);
        i++;
      }
      inst.count = n; inst.instanceMatrix.needsUpdate = true; inst.instanceColor.needsUpdate = true;
      coinsUpdate(dt);
    },
  };

  // ---------- coins ----------
  const COINS = 96;
  const cgeo = new THREE.CylinderGeometry(0.2, 0.2, 0.06, 10); cgeo.rotateX(Math.PI / 2);
  const cmat = new THREE.MeshStandardMaterial({ color: 0xffd23c, emissive: 0xffa800, emissiveIntensity: 0.6, metalness: 0.6, roughness: 0.3, flatShading: true });
  const coinMesh = new THREE.InstancedMesh(cgeo, cmat, COINS); coinMesh.frustumCulled = false; coinMesh.count = 0; coinMesh.castShadow = true; scene.add(coinMesh);
  const coins = [];
  api.coins = (pos, count = 8, up = 9) => {
    for (let k = 0; k < count && coins.length < COINS; k++) {
      const th = Math.random() * 6.283, sp = 1.5 + Math.random() * 3;
      coins.push({ x: pos.x, y: pos.y, z: pos.z, vx: Math.cos(th) * sp, vy: up * (0.7 + Math.random() * 0.5), vz: Math.sin(th) * sp, a: Math.random() * 6, w: 6 + Math.random() * 10, t: 0, life: 1.8 + Math.random() * 0.5 });
    }
  };
  function coinsUpdate(dt) {
    for (let i = coins.length - 1; i >= 0; i--) {
      const q = coins[i]; q.t += dt;
      if (q.t > q.life) { coins.splice(i, 1); continue; }
      q.vy -= 26 * dt; q.x += q.vx * dt; q.y += q.vy * dt; q.z += q.vz * dt; q.a += q.w * dt;
      const gy = groundFn(q.x, q.z) + 0.15;
      if (q.y < gy && q.vy < 0) { q.y = gy; q.vy *= -0.5; q.vx *= 0.7; q.vz *= 0.7; if (Math.abs(q.vy) < 1) q.vy = 0; }
    }
    coinMesh.count = coins.length;
    coins.forEach((q, i) => { const s = Math.min(1, (q.life - q.t) * 3); d.position.set(q.x, q.y, q.z); d.rotation.set(q.a, q.a * 0.5, 0); d.scale.setScalar(Math.max(s, 0.001)); d.updateMatrix(); coinMesh.setMatrixAt(i, d.matrix); });
    coinMesh.instanceMatrix.needsUpdate = true;
  }
  return api;
}
