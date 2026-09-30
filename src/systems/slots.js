export const SYMBOLS = [
  { id: 'cherry', w: 40, triple: 5 }, { id: 'bell', w: 30, triple: 10 },
  { id: 'fish', w: 20, triple: 20 }, { id: 'seven', w: 8, triple: 50 }, { id: 'rod', w: 2, triple: 200 },
];
const TOTAL = SYMBOLS.reduce((a, s) => a + s.w, 0);
const draw = rng => { let r = Math.min(rng(), 0.999999) * TOTAL; for (const s of SYMBOLS) { r -= s.w; if (r < 0) return s; } return SYMBOLS.at(-1); };
export function spinSlots(rng = Math.random) {
  const reels = [draw(rng), draw(rng), draw(rng)];
  const triple = reels.every(r => r.id === reels[0].id);
  return { reels: reels.map(r => r.id), payoutMult: triple ? reels[0].triple : 0, jackpot: triple && reels[0].id === 'rod' };
}
export const slotRTP = () => SYMBOLS.reduce((a, s) => a + Math.pow(s.w / TOTAL, 3) * s.triple, 0);
