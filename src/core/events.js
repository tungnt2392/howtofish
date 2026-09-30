export function createBus() {
  const m = new Map();
  return {
    on(t, f) { if (!m.has(t)) m.set(t, new Set()); m.get(t).add(f); return () => m.get(t).delete(f); },
    emit(t, p) { const s = m.get(t); if (s) for (const f of [...s]) f(p); },
  };
}
