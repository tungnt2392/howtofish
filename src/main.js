import './style.css';
import './ui/ui.css';
import * as THREE from 'three';
import { createBus } from './core/events.js';
import { Tweens } from './core/tween.js';
import { createLoop } from './core/loop.js';
import { createInput } from './core/input.js';
import { loadState, saveState, createStore } from './core/store.js';
import { createRenderer } from './world/renderer.js';
import { createLights } from './world/lights.js';
import { createWater } from './world/water.js';
import { createSky } from './world/sky.js';
import { createIsland } from './world/island.js';
import { createPlayer } from './entities/player.js';
import { createCameraRig } from './fx/cameraRig.js';
import { createParticles } from './fx/particles.js';
import { createFloatingText } from './fx/floatingText.js';
import { createHitstop } from './fx/hitstop.js';
import { installJuice } from './fx/juice.js';
import { createAudio } from './audio/audio.js';
import { createToasts } from './ui/toasts.js';
import { createHud } from './ui/hud.js';
import { createCreatureSystem } from './game/creatures.js';
import { createBossController } from './game/bossController.js';
import { createCombatController } from './game/combatController.js';
import { createFishingController } from './game/fishingController.js';

const app = document.getElementById('app');
const gfx = createRenderer(app);
if (!gfx) {
  app.innerHTML = '<div class="nogl"><h1>🎣 How to Fish</h1><p>Your browser or device doesn\'t support WebGL, which this game needs. Try a recent Chrome, Edge, Firefox or Safari with hardware acceleration enabled.</p></div>';
} else {
  boot(gfx);
}

function boot(gfx) {
  const { scene, camera } = gfx;
  const bus = createBus(), tweens = new Tweens();
  const store = createStore(loadState(localStorage));
  const input = createInput(gfx.renderer.domElement);

  const lights = createLights(scene);
  const water = createWater(); scene.add(water.mesh);
  const sky = createSky(scene);
  const island = createIsland(scene);
  const player = createPlayer(scene, island);
  const camRig = createCameraRig(camera);

  const ray = new THREE.Raycaster(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), aimPoint = new THREE.Vector3();
  function updateAim() {
    ray.setFromCamera(new THREE.Vector2(input.mouse.ndc.x, input.mouse.ndc.y), camera);
    if (!ray.ray.intersectPlane(plane, aimPoint)) aimPoint.copy(player.pos);
  }

  const game = { bus, store, tweens, input, gfx, scene, camera, lights, water, sky, island, player, camRig, aimPoint, time: 0, systems: [] };
  game.uiBlocking = false;
  game.particles = createParticles(scene, (x, z) => island.walkable(x, z) ? island.groundY(x, z) : -0.5);
  game.text = createFloatingText(document.getElementById('ui'), camera);
  game.hitstop = createHitstop();
  game.juice = installJuice(game);
  game.creatureSys = createCreatureSystem(game);
  game.bossCtl = createBossController(game);
  game.fishing = createFishingController(game);
  game.cursorRay = ray.ray;
  game.combat = createCombatController(game);
  game.systems.push(game.fishing, game.combat, game.bossCtl, game.creatureSys);
  game.audio = createAudio(bus, game);
  game.toasts = createToasts(document.getElementById('ui'), bus);
  game.hud = createHud(document.getElementById('ui'), game);
  window.__game = game; // debug + tests

  const quality = { ema: 16, bad: 0, level: 0, locked: new URLSearchParams(location.search).has('lowfx') };
  function setQuality(level) {
    quality.level = level;
    if (level >= 1) { gfx.bloom.enabled = false; lights.sun.shadow.mapSize.set(1024, 1024); if (lights.sun.shadow.map) { lights.sun.shadow.map.dispose(); lights.sun.shadow.map = null; } }
    if (level >= 2) { gfx.renderer.setPixelRatio(1); gfx.resize(); }
    console.info('[quality] level', level);
  }
  game.setQuality = setQuality;

  const loop = createLoop({
    update(rdt) {
      game.hitstop.update(rdt);
      const dt = game.paused ? 0 : rdt * game.hitstop.scale(); // gameplay time (freezes on hit-stop); fx/camera/water run on real time
      game.time += rdt;
      updateAim();
      player.update(dt, input.axis(), aimPoint);
      for (const s of game.systems) s.update(dt);
      game.hud.update(rdt);
      tweens.update(dt);
      game.particles.update(rdt); game.text.update(rdt); game.juice.update(rdt);
      camRig.update(rdt, player.pos, game.time);
      lights.update(game.time, player.pos);
      water.update(game.time);
      island.update(game.time, rdt);
      sky.update(rdt, camera.position);
      input.endFrame();
    },
    render(alpha, frame) {
      // adaptive quality: if frames stay slow for ~3s, shed bloom/shadow resolution, then pixel ratio
      quality.ema += (frame * 1000 - quality.ema) * 0.05;
      if (!quality.locked && quality.ema > 26 && quality.level < 2) { quality.bad += frame; if (quality.bad > 3) { quality.bad = 0; setQuality(quality.level + 1); } } else quality.bad = 0;
      gfx.render();
    },
  });
  loop.start();

  const save = () => { if (!game.skipSave) saveState(localStorage, game.panel ? game.panel.snapshot(store.state) : store.state); };
  setInterval(save, 5000);
  addEventListener('beforeunload', save);
  document.addEventListener('visibilitychange', () => { if (document.hidden) save(); });
}
