import * as THREE from 'three';
import { Spring } from '../core/tween.js';
import { damp } from '../world/lowpoly.js';

export function createCameraRig(camera) {
  const BASE_FOV = 50;
  const pos = camera.position.clone(), look = new THREE.Vector3(0, 1, -4);
  const fov = new Spring(0, 140, 12);
  const shakes = [];
  let focus = null, focusAmt = 0;
  const offset = new THREE.Vector3(0, 11.5, 13.5);
  const tmp = new THREE.Vector3();
  return {
    camera,
    /** amp in world units, dur in seconds */
    shake(amp, dur = 0.25) { shakes.push({ amp, dur, t: 0 }); },
    kick(dFov) { fov.kick(dFov * 14); },
    setFocus(v) { focus = v; },
    setOffset(x, y, z) { offset.set(x, y, z); },
    update(dt, target, time) {
      focusAmt = damp(focusAmt, focus ? 1 : 0, 4, dt);
      const desired = tmp.copy(target).add(offset);
      if (focus) desired.lerp(tmp.set(focus.x * 0.25 + target.x * 0.75, desired.y, desired.z), 0.0);
      pos.set(damp(pos.x, desired.x, 5, dt), damp(pos.y, desired.y, 5, dt), damp(pos.z, desired.z, 5, dt));
      const lookT = new THREE.Vector3(target.x, target.y + 1.2, target.z - 2.5);
      if (focus) lookT.lerp(new THREE.Vector3(focus.x, 0.5, focus.z), 0.38 * focusAmt);
      look.set(damp(look.x, lookT.x, 6, dt), damp(look.y, lookT.y, 6, dt), damp(look.z, lookT.z, 6, dt));
      let sx = 0, sy = 0;
      for (let i = shakes.length - 1; i >= 0; i--) {
        const s = shakes[i]; s.t += dt; const k = 1 - s.t / s.dur;
        if (k <= 0) { shakes.splice(i, 1); continue; }
        sx += (Math.sin(time * 90 + i) * 0.5 + Math.sin(time * 53)) * s.amp * k * k;
        sy += (Math.cos(time * 77 + i) * 0.5 + Math.cos(time * 61)) * s.amp * k * k;
      }
      camera.position.set(pos.x + sx, pos.y + sy, pos.z);
      camera.lookAt(look);
      fov.update(dt);
      const f = BASE_FOV + fov.value;
      if (Math.abs(camera.fov - f) > 0.01) { camera.fov = f; camera.updateProjectionMatrix(); }
    },
  };
}
