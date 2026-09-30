export function createInput(dom) {
  const keys = new Set();
  const mouse = { x: 0, y: 0, ndc: { x: 0, y: 0 }, left: false, right: false, leftPressed: false, leftReleased: false, rightPressed: false };
  const pressed = new Set();
  addEventListener('keydown', e => {
    if (!e.repeat) { keys.add(e.code); pressed.add(e.code); }
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  });
  addEventListener('keyup', e => keys.delete(e.code));
  dom.addEventListener('pointermove', e => {
    mouse.x = e.clientX; mouse.y = e.clientY;
    mouse.ndc.x = e.clientX / innerWidth * 2 - 1; mouse.ndc.y = -(e.clientY / innerHeight * 2 - 1);
  });
  dom.addEventListener('pointerdown', e => {
    if (e.button === 0) { mouse.left = true; mouse.leftPressed = true; }
    if (e.button === 2) { mouse.right = true; mouse.rightPressed = true; }
  });
  addEventListener('pointerup', e => {
    if (e.button === 0) { if (mouse.left) mouse.leftReleased = true; mouse.left = false; }
    if (e.button === 2) mouse.right = false;
  });
  dom.addEventListener('contextmenu', e => e.preventDefault());
  addEventListener('blur', () => { keys.clear(); mouse.left = mouse.right = false; });
  return {
    keys, mouse,
    enabled: true,
    axis() {
      if (!this.enabled) return { x: 0, z: 0 };
      const k = c => keys.has(c) ? 1 : 0;
      return { x: k('KeyD') + k('ArrowRight') - k('KeyA') - k('ArrowLeft'), z: k('KeyS') + k('ArrowDown') - k('KeyW') - k('ArrowUp') };
    },
    /** true once on the frame a key went down */
    wasPressed(code) { return pressed.has(code); },
    endFrame() { mouse.leftPressed = mouse.leftReleased = mouse.rightPressed = false; pressed.clear(); },
  };
}
