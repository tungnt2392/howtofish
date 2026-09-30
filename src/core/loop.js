export function createLoop({ update, render, step = 1 / 60, maxFrame = 0.25 }) {
  let last = null, acc = 0, raf = 0, running = false;
  const loop = {
    tick(nowMs) {
      if (last === null) { last = nowMs; return 0; }
      const frame = Math.min(maxFrame, (nowMs - last) / 1000); last = nowMs; acc += frame;
      let n = 0; while (acc >= step) { update(step); acc -= step; n++; }
      render(acc / step, frame); return n;
    },
    start() { running = true; const f = t => { if (!running) return; loop.tick(t); raf = requestAnimationFrame(f); }; raf = requestAnimationFrame(f); },
    stop() { running = false; cancelAnimationFrame(raf); },
  };
  return loop;
}
