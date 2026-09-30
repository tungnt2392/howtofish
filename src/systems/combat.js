export const trickMultiplier = ({ air = false, spin = false, chain = 1 }) =>
  (spin ? 5 : 1) + (air ? 1 : 0) + 0.5 * Math.max(0, chain - 1);
export function applyDamage(t, dmg) {
  if (t.hp <= 0) return { dead: true };
  t.hp = Math.max(0, t.hp - dmg); return { dead: t.hp === 0 };
}
export function raySphereHit(o, d, c, r) {
  const ox = c[0] - o[0], oy = c[1] - o[1], oz = c[2] - o[2];
  const t = ox * d[0] + oy * d[1] + oz * d[2]; if (t < 0) return false;
  const px = ox - d[0] * t, py = oy - d[1] * t, pz = oz - d[2] * t;
  return px * px + py * py + pz * pz <= r * r;
}
