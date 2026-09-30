/** Freeze-frame: gameplay time scale collapses briefly. Timer runs on real time. */
export function createHitstop() {
  let t = 0;
  return {
    trigger(ms) { t = Math.max(t, ms / 1000); },
    update(realDt) { t = Math.max(0, t - realDt); },
    scale() { return t > 0 ? 0.03 : 1; },
    get active() { return t > 0; },
  };
}
