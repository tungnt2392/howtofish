import * as THREE from 'three';
import { lowpoly, rng } from './lowpoly.js';

export function createSky(scene) {
  const dome = new THREE.Mesh(new THREE.SphereGeometry(300, 24, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { uTop: { value: new THREE.Color('#4fb6ee') }, uMid: { value: new THREE.Color('#9fdcf6') }, uHor: { value: new THREE.Color('#fff0cf') } },
    vertexShader: 'varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: 'uniform vec3 uTop,uMid,uHor;varying vec3 vP;void main(){float h=normalize(vP).y;vec3 c=mix(uHor,uMid,smoothstep(0.,.25,h));c=mix(c,uTop,smoothstep(.2,.8,h));gl_FragColor=vec4(c,1.);}',
  }));
  dome.renderOrder = -10; scene.add(dome);

  const r = rng(7), clouds = [];
  const cloudMat = new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 1, emissive: 0xffffff, emissiveIntensity: 0.35, fog: false });
  for (let i = 0; i < 10; i++) {
    const g = new THREE.Group(), n = 4 + Math.floor(r() * 3);
    for (let k = 0; k < n; k++) {
      const s = 2 + r() * 2.2;
      const m = new THREE.Mesh(lowpoly(new THREE.IcosahedronGeometry(s, 1), 0.25, i * 13 + k), cloudMat);
      m.position.set((k - n / 2) * 2.6 + r(), r() * 1.2, (r() - 0.5) * 2.2); m.scale.y = 0.65; g.add(m);
    }
    g.position.set((r() - 0.5) * 300, 38 + r() * 22, -60 - r() * 120);
    g.userData.speed = 0.6 + r() * 0.8; clouds.push(g); scene.add(g);
  }
  return {
    dome,
    update(dt, focus) {
      dome.position.copy(focus);
      for (const c of clouds) { c.position.x += c.userData.speed * dt; if (c.position.x > 160) c.position.x = -160; }
    },
  };
}
