export const easings = {
  linear: t => t,
  outCubic: t => 1 - Math.pow(1 - t, 3),
  outBack: t => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
  outElastic: t => t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI / 3)) + 1,
  inOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
};
export class Tweens {
  constructor() { this.list = []; }
  to(obj, props, dur, ease = easings.outCubic, onDone) {
    const from = {}; for (const k in props) from[k] = obj[k];
    this.list.push({ obj, props, from, dur: Math.max(dur, 1e-4), t: 0, ease, onDone });
  }
  update(dt) {
    for (const tw of [...this.list]) {
      tw.t += dt; const k = Math.min(1, tw.t / tw.dur), e = tw.ease(k);
      for (const p in tw.props) tw.obj[p] = tw.from[p] + (tw.props[p] - tw.from[p]) * e;
      if (k >= 1) { this.list.splice(this.list.indexOf(tw), 1); tw.onDone && tw.onDone(); }
    }
  }
}
export class Spring {
  constructor(value = 0, k = 180, d = 12) { this.value = value; this.target = value; this.vel = 0; this.k = k; this.d = d; }
  update(dt) { const a = this.k * (this.target - this.value) - this.d * this.vel; this.vel += a * dt; this.value += this.vel * dt; return this.value; }
  kick(v) { this.vel += v; }
}
