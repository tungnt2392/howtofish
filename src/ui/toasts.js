export function createToasts(root, bus) {
  const box = document.createElement('div'); box.className = 'toasts'; root.appendChild(box);
  function toast(msg) {
    const el = document.createElement('div'); el.className = 'toast'; el.innerHTML = msg; box.appendChild(el);
    while (box.children.length > 3) box.firstChild.remove();
    setTimeout(() => el.remove(), 2700);
  }
  bus.on('toast', ({ msg }) => toast(msg));
  return { toast };
}
