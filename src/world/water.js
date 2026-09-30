import * as THREE from 'three';
import { FOG_COLOR } from './renderer.js';

const MAX_RIPPLES = 8;
/** Radius at which terrain height crosses 0 (the waterline) for polar angle a. Mirrored in GLSL below. */
export const shoreRadius = a => 12.33 + 1.2 * Math.sin(3 * a) + 0.8 * Math.sin(5 * a + 1);

export const waveHeight = (x, z, t) => Math.sin(x * 0.35 + t * 1.2) * 0.12 + Math.sin(z * 0.5 + t * 0.9) * 0.09 + Math.sin((x + z) * 0.9 + t * 1.7) * 0.03;

export function createWater() {
  const geo = new THREE.PlaneGeometry(320, 320, 150, 150); geo.rotateX(-Math.PI / 2);
  const ripples = Array.from({ length: MAX_RIPPLES }, () => new THREE.Vector4(0, 0, -100, 0));
  const uniforms = {
    uTime: { value: 0 },
    uShallow: { value: new THREE.Color('#62f0d8') }, uDeep: { value: new THREE.Color('#1782c9') },
    uFoam: { value: new THREE.Color('#ffffff') },
    uFogColor: { value: new THREE.Color(FOG_COLOR) }, uFogNear: { value: 55 }, uFogFar: { value: 150 },
    uRipples: { value: ripples },
  };
  const material = new THREE.ShaderMaterial({
    uniforms, transparent: true,
    vertexShader: `
      uniform float uTime; varying vec3 vW;
      void main(){ vec3 p=position;
        p.y += sin(p.x*.35+uTime*1.2)*.12 + sin(p.z*.5+uTime*.9)*.09 + sin((p.x+p.z)*.9+uTime*1.7)*.03;
        vec4 w=modelMatrix*vec4(p,1.); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }`,
    fragmentShader: `
      uniform float uTime; uniform vec3 uShallow,uDeep,uFoam,uFogColor; uniform float uFogNear,uFogFar;
      uniform vec4 uRipples[${MAX_RIPPLES}]; varying vec3 vW;
      void main(){
        float a=atan(vW.z,vW.x); float d=length(vW.xz);
        float shoreR=12.33+1.2*sin(3.*a)+.8*sin(5.*a+1.);
        float shore=d-shoreR;
        float depth=smoothstep(0.,16.,shore);
        vec3 col=mix(uShallow,uDeep,pow(depth,.7));
        float band=sin(vW.x*.8+uTime*.6)*sin(vW.z*.9-uTime*.5);
        col+=vec3(.05,.08,.08)*smoothstep(.3,1.,band)*(1.-depth);
        float wob=.55+.3*sin(uTime*1.5+d*2.2)+.15*sin(a*14.+uTime);
        float foam=1.-smoothstep(0.,wob,abs(shore-.2)); foam*=step(-.9,shore);
        float foam2=(1.-smoothstep(0.,.25,abs(shore-(1.4+.5*sin(uTime*1.1)))))*step(0.,shore)*.6*(1.-depth);
        col=mix(col,uFoam,clamp(foam+foam2,0.,1.));
        float vd=length(cameraPosition-vW); float sp=pow(max(0.,sin(vW.x*1.7+uTime*1.6)*sin(vW.z*1.5-uTime*1.3)),22.); col+=vec3(sp)*.55*(1.-smoothstep(15.,45.,vd));
        for(int i=0;i<${MAX_RIPPLES};i++){ vec4 r=uRipples[i]; float age=uTime-r.z; if(age<0.||age>2.5) continue;
          float rad=age*3.2; float dd=abs(distance(vW.xz,r.xy)-rad);
          float ring=(1.-smoothstep(0.,.22+age*.1,dd))*exp(-age*1.7)*r.w; col=mix(col,uFoam,clamp(ring,0.,1.)); }
        float alpha=mix(.62,.97,smoothstep(0.,5.,shore));
        float fogF=smoothstep(uFogNear,uFogFar,length(cameraPosition-vW)); col=mix(col,uFogColor,fogF);
        gl_FragColor=vec4(col,alpha); }`,
  });
  const mesh = new THREE.Mesh(geo, material); mesh.frustumCulled = false; mesh.renderOrder = 1;
  let idx = 0;
  return {
    mesh, uniforms,
    update(t) { uniforms.uTime.value = t; },
    ripple(x, z, strength = 1) { ripples[idx].set(x, z, uniforms.uTime.value, strength); idx = (idx + 1) % MAX_RIPPLES; },
  };
}
