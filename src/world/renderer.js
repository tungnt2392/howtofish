import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export const GradeShader = {
  uniforms: { tDiffuse: { value: null }, uVig: { value: 0.32 }, uSat: { value: 1.14 }, uFlash: { value: 0 }, uFlashColor: { value: new THREE.Color(1, 0.2, 0.1) } },
  vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader: `uniform sampler2D tDiffuse;uniform float uVig,uSat,uFlash;uniform vec3 uFlashColor;varying vec2 vUv;
    void main(){vec4 c=texture2D(tDiffuse,vUv);float l=dot(c.rgb,vec3(.299,.587,.114));
    c.rgb=mix(vec3(l),c.rgb,uSat);c.rgb*=vec3(1.04,1.0,.95);
    float d=distance(vUv,vec2(.5));c.rgb*=1.-smoothstep(.32,.9,d)*uVig;
    c.rgb=mix(c.rgb,uFlashColor,uFlash*smoothstep(.2,.9,d));gl_FragColor=c;}`,
};

export const FOG_COLOR = '#c4e6ee';

export function createRenderer(container) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  } catch (e) { return null; }
  if (!renderer.getContext()) return null;
  const LOWFX = new URLSearchParams(location.search).has('lowfx');
  renderer.setPixelRatio(LOWFX ? 0.6 : Math.min(window.devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = !LOWFX;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#8fd6f0');
  scene.fog = new THREE.Fog(FOG_COLOR, 55, 150);
  const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 400);
  camera.position.set(0, 9, 11);

  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 4 });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.28, 0.55, 0.9);
  bloom.enabled = !LOWFX; composer.addPass(bloom);
  const grade = new ShaderPass(GradeShader);
  composer.addPass(grade);
  composer.addPass(new OutputPass());

  const api = {
    renderer, scene, camera, composer, bloom, grade,
    resize() {
      renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight);
      camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
    },
    render() { composer.render(); },
  };
  addEventListener('resize', api.resize);
  return api;
}
