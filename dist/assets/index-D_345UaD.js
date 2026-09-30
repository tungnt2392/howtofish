(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="170",Gc=0,xa=1,Wc=2,Bl=1,kl=2,bn=3,Wn=0,De=1,Ne=2,wn=0,wi=1,er=2,Ma=3,ya=4,Xc=5,Qn=100,qc=101,Yc=102,$c=103,Kc=104,Jc=200,Zc=201,jc=202,Qc=203,Zr=204,jr=205,tu=206,eu=207,nu=208,iu=209,su=210,ru=211,ou=212,au=213,lu=214,Qr=0,to=1,eo=2,Pi=3,no=4,io=5,so=6,ro=7,Hl=0,cu=1,uu=2,Gn=0,Vl=1,Gl=2,Wl=3,Go=4,hu=5,Xl=6,ql=7,Yl=300,Li=301,Di=302,oo=303,ao=304,lr=306,lo=1e3,ei=1001,co=1002,He=1003,du=1004,ys=1005,un=1006,fr=1007,ni=1008,Cn=1009,$l=1010,Kl=1011,ls=1012,Wo=1013,ii=1014,hn=1015,fn=1016,Xo=1017,qo=1018,Ii=1020,Jl=35902,Zl=1021,jl=1022,Qe=1023,Ql=1024,tc=1025,Ti=1026,Ui=1027,Yo=1028,$o=1029,ec=1030,Ko=1031,Jo=1033,Ys=33776,$s=33777,Ks=33778,Js=33779,uo=35840,ho=35841,fo=35842,po=35843,mo=36196,go=37492,vo=37496,_o=37808,xo=37809,Mo=37810,yo=37811,So=37812,bo=37813,Eo=37814,wo=37815,To=37816,Ao=37817,Co=37818,Ro=37819,Po=37820,Lo=37821,Zs=36492,Do=36494,Io=36495,nc=36283,Uo=36284,No=36285,Fo=36286,fu=3200,pu=3201,ic=0,mu=1,Hn="",Re="srgb",Oi="srgb-linear",cr="linear",jt="srgb",oi=7680,Sa=519,gu=512,vu=513,_u=514,sc=515,xu=516,Mu=517,yu=518,Su=519,ba=35044,Ea="300 es",En=2e3,nr=2001;class zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wa=1234567;const is=Math.PI/180,cs=180/Math.PI;function Bi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function Zo(i,t){return(i%t+t)%t}function bu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Eu(i,t,e){return i!==t?(e-i)/(t-i):0}function ss(i,t,e){return(1-e)*i+e*t}function wu(i,t,e,n){return ss(i,t,1-Math.exp(-e*n))}function Tu(i,t=1){return t-Math.abs(Zo(i,t*2)-t)}function Au(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Cu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ru(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Pu(i,t){return i+Math.random()*(t-i)}function Lu(i){return i*(.5-Math.random())}function Du(i){i!==void 0&&(wa=i);let t=wa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Iu(i){return i*is}function Uu(i){return i*cs}function Nu(i){return(i&i-1)===0&&i!==0}function Fu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ou(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),u=r((t+n)/2),f=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*f,l*h,l*d,a*u);break;case"YZY":i.set(l*d,a*f,l*h,a*u);break;case"ZXZ":i.set(l*h,l*d,a*f,a*u);break;case"XZX":i.set(a*f,l*g,l*p,a*u);break;case"YXY":i.set(l*p,a*f,l*g,a*u);break;case"ZYZ":i.set(l*g,l*p,a*f,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bu={DEG2RAD:is,RAD2DEG:cs,generateUUID:Bi,clamp:pe,euclideanModulo:Zo,mapLinear:bu,inverseLerp:Eu,lerp:ss,damp:wu,pingpong:Tu,smoothstep:Au,smootherstep:Cu,randInt:Ru,randFloat:Pu,randFloatSpread:Lu,seededRandom:Du,degToRad:Iu,radToDeg:Uu,isPowerOfTwo:Nu,ceilPowerOfTwo:Fu,floorPowerOfTwo:Ou,setQuaternionFromProperEuler:zu,normalize:Ae,denormalize:bi};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,s,r,o,a,l,u){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,u)}set(t,e,n,s,r,o,a,l,u){const f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],f=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],c=s[6],M=s[1],S=s[4],y=s[7],U=s[2],b=s[5],A=s[8];return r[0]=o*_+a*M+l*U,r[3]=o*m+a*S+l*b,r[6]=o*c+a*y+l*A,r[1]=u*_+f*M+h*U,r[4]=u*m+f*S+h*b,r[7]=u*c+f*y+h*A,r[2]=d*_+p*M+g*U,r[5]=d*m+p*S+g*b,r[8]=d*c+p*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],f=t[8];return e*o*f-e*a*u-n*r*f+n*a*l+s*r*u-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],f=t[8],h=f*o-a*u,d=a*l-f*r,p=u*r-o*l,g=e*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*u-f*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(f*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-u*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*a)+o+t,-s*u,s*l,-s*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pr.makeScale(t,e)),this}rotate(t){return this.premultiply(pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pr=new Ot;function rc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ku(){const i=ir("canvas");return i.style.display="block",i}const Ta={};function es(i){i in Ta||(Ta[i]=!0,console.warn(i))}function Hu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Vu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wt={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===jt&&(i.r=Tn(i.r),i.g=Tn(i.g),i.b=Tn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===jt&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?cr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Aa=[.64,.33,.3,.6,.15,.06],Ca=[.2126,.7152,.0722],Ra=[.3127,.329],Pa=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),La=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Oi]:{primaries:Aa,whitePoint:Ra,transfer:cr,toXYZ:Pa,fromXYZ:La,luminanceCoefficients:Ca,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:Aa,whitePoint:Ra,transfer:jt,toXYZ:Pa,fromXYZ:La,luminanceCoefficients:Ca,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}});let ai;class Wu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ai===void 0&&(ai=ir("canvas")),ai.width=t.width,ai.height=t.height;const n=ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Tn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tn(e[n]/255)*255):e[n]=Tn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xu=0;class oc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mr(s[o].image)):r.push(mr(s[o]))}else r=mr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function mr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qu=0;class we extends zi{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=ei,s=ei,r=un,o=ni,a=Qe,l=Cn,u=we.DEFAULT_ANISOTROPY,f=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Bi(),this.name="",this.source=new oc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lo:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lo:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=Yl;we.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,s=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,u=l[0],f=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(u+1)/2,y=(p+1)/2,U=(c+1)/2,b=(f+d)/4,A=(h+_)/4,R=(g+m)/4;return S>y&&S>U?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=b/n,r=A/n):y>U?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=R/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=A/r,s=R/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-f)*(d-f));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-f)/M,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yu extends zi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new we(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new oc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qe extends Yu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ac extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $u extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],u=n[s+1],f=n[s+2],h=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=f,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||u!==p||f!==g){let m=1-a;const c=l*d+u*p+f*g+h*_,M=c>=0?1:-1,S=1-c*c;if(S>Number.EPSILON){const U=Math.sqrt(S),b=Math.atan2(U,c*M);m=Math.sin(m*b)/U,a=Math.sin(a*b)/U}const y=a*M;if(l=l*m+d*y,u=u*m+p*y,f=f*m+g*y,h=h*m+_*y,m===1-a){const U=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=U,u*=U,f*=U,h*=U}}t[e]=l,t[e+1]=u,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],u=n[s+2],f=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+f*h+l*p-u*d,t[e+1]=l*g+f*d+u*h-a*p,t[e+2]=u*g+f*p+a*d-l*h,t[e+3]=f*g-a*h-l*d-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(n/2),f=a(s/2),h=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*f*h+u*p*g,this._y=u*p*h-d*f*g,this._z=u*f*g+d*p*h,this._w=u*f*h-d*p*g;break;case"YXZ":this._x=d*f*h+u*p*g,this._y=u*p*h-d*f*g,this._z=u*f*g-d*p*h,this._w=u*f*h+d*p*g;break;case"ZXY":this._x=d*f*h-u*p*g,this._y=u*p*h+d*f*g,this._z=u*f*g+d*p*h,this._w=u*f*h-d*p*g;break;case"ZYX":this._x=d*f*h-u*p*g,this._y=u*p*h+d*f*g,this._z=u*f*g-d*p*h,this._w=u*f*h+d*p*g;break;case"YZX":this._x=d*f*h+u*p*g,this._y=u*p*h+d*f*g,this._z=u*f*g-d*p*h,this._w=u*f*h-d*p*g;break;case"XZY":this._x=d*f*h-u*p*g,this._y=u*p*h-d*f*g,this._z=u*f*g+d*p*h,this._w=u*f*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],u=e[2],f=e[6],h=e[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-u)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-u)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,u=e._z,f=e._w;return this._x=n*f+o*a+s*u-r*l,this._y=s*f+o*l+r*a-n*u,this._z=r*f+o*u+n*l-s*a,this._w=o*f-n*a-s*l-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-e)*f)/u,d=Math.sin(e*f)/u;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Da.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Da.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*s-a*n),f=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*u+o*h-a*f,this.y=n+l*f+a*u-r*h,this.z=s+l*h+r*f-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return gr.copy(this).projectOnVector(t),this.sub(gr)}reflect(t){return this.sub(gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gr=new P,Da=new ki;class si{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ke):Ke.fromBufferAttribute(r,o),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(t.matrixWorld),this.union(Ss)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yi),bs.subVectors(this.max,Yi),li.subVectors(t.a,Yi),ci.subVectors(t.b,Yi),ui.subVectors(t.c,Yi),In.subVectors(ci,li),Un.subVectors(ui,ci),qn.subVectors(li,ui);let e=[0,-In.z,In.y,0,-Un.z,Un.y,0,-qn.z,qn.y,In.z,0,-In.x,Un.z,0,-Un.x,qn.z,0,-qn.x,-In.y,In.x,0,-Un.y,Un.x,0,-qn.y,qn.x,0];return!vr(e,li,ci,ui,bs)||(e=[1,0,0,0,1,0,0,0,1],!vr(e,li,ci,ui,bs))?!1:(Es.crossVectors(In,Un),e=[Es.x,Es.y,Es.z],vr(e,li,ci,ui,bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new P,new P,new P,new P,new P,new P,new P,new P],Ke=new P,Ss=new si,li=new P,ci=new P,ui=new P,In=new P,Un=new P,qn=new P,Yi=new P,bs=new P,Es=new P,Yn=new P;function vr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Yn.fromArray(i,r);const a=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=t.dot(Yn),u=e.dot(Yn),f=n.dot(Yn);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const Ku=new si,$i=new P,_r=new P;class ms{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ku.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$i.subVectors(t,this.center);const e=$i.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_r.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($i.copy(t.center).add(_r)),this.expandByPoint($i.copy(t.center).sub(_r))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new P,xr=new P,ws=new P,Nn=new P,Mr=new P,Ts=new P,yr=new P;class lc{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xr.copy(t).add(e).multiplyScalar(.5),ws.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(xr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ws),a=Nn.dot(this.direction),l=-Nn.dot(ws),u=Nn.lengthSq(),f=Math.abs(1-o*o);let h,d,p,g;if(f>0)if(h=o*l-a,d=o*a-l,g=r*f,h>=0)if(d>=-g)if(d<=g){const _=1/f;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+u):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+u):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+u);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(xr).addScaledVector(ws,d),p}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),f>=0?(r=(t.min.y-d.y)*f,o=(t.max.y-d.y)*f):(r=(t.max.y-d.y)*f,o=(t.min.y-d.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,r){Mr.subVectors(e,t),Ts.subVectors(n,t),yr.crossVectors(Mr,Ts);let o=this.direction.dot(yr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,t);const l=a*this.direction.dot(Ts.crossVectors(Nn,Ts));if(l<0)return null;const u=a*this.direction.dot(Mr.cross(Nn));if(u<0||l+u>o)return null;const f=-a*Nn.dot(yr);return f<0?null:this.at(f/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,s,r,o,a,l,u,f,h,d,p,g,_,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,u,f,h,d,p,g,_,m)}set(t,e,n,s,r,o,a,l,u,f,h,d,p,g,_,m){const c=this.elements;return c[0]=t,c[4]=e,c[8]=n,c[12]=s,c[1]=r,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=p,c[7]=g,c[11]=_,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/hi.setFromMatrixColumn(t,0).length(),r=1/hi.setFromMatrixColumn(t,1).length(),o=1/hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),u=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*f,p=o*h,g=a*f,_=a*h;e[0]=l*f,e[4]=-l*h,e[8]=u,e[1]=p+g*u,e[5]=d-_*u,e[9]=-a*l,e[2]=_-d*u,e[6]=g+p*u,e[10]=o*l}else if(t.order==="YXZ"){const d=l*f,p=l*h,g=u*f,_=u*h;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*u,e[1]=o*h,e[5]=o*f,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*f,p=l*h,g=u*f,_=u*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*f,e[9]=_-d*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*f,p=o*h,g=a*f,_=a*h;e[0]=l*f,e[4]=g*u-p,e[8]=d*u+_,e[1]=l*h,e[5]=_*u+d,e[9]=p*u-g,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*u,g=a*l,_=a*u;e[0]=l*f,e[4]=_-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*f,e[9]=-a*f,e[2]=-u*f,e[6]=p*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,p=o*u,g=a*l,_=a*u;e[0]=l*f,e[4]=-h,e[8]=u*f,e[1]=d*h+_,e[5]=o*f,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*f,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ju,t,Zu)}lookAt(t,e,n){const s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Fn.crossVectors(n,ze),Fn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Fn.crossVectors(n,ze)),Fn.normalize(),As.crossVectors(ze,Fn),s[0]=Fn.x,s[4]=As.x,s[8]=ze.x,s[1]=Fn.y,s[5]=As.y,s[9]=ze.y,s[2]=Fn.z,s[6]=As.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],f=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],c=n[14],M=n[3],S=n[7],y=n[11],U=n[15],b=s[0],A=s[4],R=s[8],x=s[12],v=s[1],w=s[5],C=s[9],N=s[13],L=s[2],I=s[6],z=s[10],G=s[14],O=s[3],K=s[7],W=s[11],V=s[15];return r[0]=o*b+a*v+l*L+u*O,r[4]=o*A+a*w+l*I+u*K,r[8]=o*R+a*C+l*z+u*W,r[12]=o*x+a*N+l*G+u*V,r[1]=f*b+h*v+d*L+p*O,r[5]=f*A+h*w+d*I+p*K,r[9]=f*R+h*C+d*z+p*W,r[13]=f*x+h*N+d*G+p*V,r[2]=g*b+_*v+m*L+c*O,r[6]=g*A+_*w+m*I+c*K,r[10]=g*R+_*C+m*z+c*W,r[14]=g*x+_*N+m*G+c*V,r[3]=M*b+S*v+y*L+U*O,r[7]=M*A+S*w+y*I+U*K,r[11]=M*R+S*C+y*z+U*W,r[15]=M*x+S*N+y*G+U*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],u=t[13],f=t[2],h=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],c=t[15];return g*(+r*l*h-s*u*h-r*a*d+n*u*d+s*a*p-n*l*p)+_*(+e*l*p-e*u*d+r*o*d-s*o*p+s*u*f-r*l*f)+m*(+e*u*h-e*a*p-r*o*h+n*o*p+r*a*f-n*u*f)+c*(-s*a*f-e*l*h+e*a*d+s*o*h-n*o*d+n*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],f=t[8],h=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],c=t[15],M=h*m*u-_*d*u+_*l*p-a*m*p-h*l*c+a*d*c,S=g*d*u-f*m*u-g*l*p+o*m*p+f*l*c-o*d*c,y=f*_*u-g*h*u+g*a*p-o*_*p-f*a*c+o*h*c,U=g*h*l-f*_*l-g*a*d+o*_*d+f*a*m-o*h*m,b=e*M+n*S+s*y+r*U;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=M*A,t[1]=(_*d*r-h*m*r-_*s*p+n*m*p+h*s*c-n*d*c)*A,t[2]=(a*m*r-_*l*r+_*s*u-n*m*u-a*s*c+n*l*c)*A,t[3]=(h*l*r-a*d*r-h*s*u+n*d*u+a*s*p-n*l*p)*A,t[4]=S*A,t[5]=(f*m*r-g*d*r+g*s*p-e*m*p-f*s*c+e*d*c)*A,t[6]=(g*l*r-o*m*r-g*s*u+e*m*u+o*s*c-e*l*c)*A,t[7]=(o*d*r-f*l*r+f*s*u-e*d*u-o*s*p+e*l*p)*A,t[8]=y*A,t[9]=(g*h*r-f*_*r-g*n*p+e*_*p+f*n*c-e*h*c)*A,t[10]=(o*_*r-g*a*r+g*n*u-e*_*u-o*n*c+e*a*c)*A,t[11]=(f*a*r-o*h*r-f*n*u+e*h*u+o*n*p-e*a*p)*A,t[12]=U*A,t[13]=(f*_*s-g*h*s+g*n*d-e*_*d-f*n*m+e*h*m)*A,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*A,t[15]=(o*h*s-f*a*s+f*n*l-e*h*l-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,u=r*o,f=r*a;return this.set(u*o+n,u*a-s*l,u*l+s*a,0,u*a+s*l,f*a+n,f*l-s*o,0,u*l-s*a,f*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,u=r+r,f=o+o,h=a+a,d=r*u,p=r*f,g=r*h,_=o*f,m=o*h,c=a*h,M=l*u,S=l*f,y=l*h,U=n.x,b=n.y,A=n.z;return s[0]=(1-(_+c))*U,s[1]=(p+y)*U,s[2]=(g-S)*U,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(d+c))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+S)*A,s[9]=(m-M)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=hi.set(s[0],s[1],s[2]).length();const o=hi.set(s[4],s[5],s[6]).length(),a=hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Je.copy(this);const u=1/r,f=1/o,h=1/a;return Je.elements[0]*=u,Je.elements[1]*=u,Je.elements[2]*=u,Je.elements[4]*=f,Je.elements[5]*=f,Je.elements[6]*=f,Je.elements[8]*=h,Je.elements[9]*=h,Je.elements[10]*=h,e.setFromRotationMatrix(Je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=En){const l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===En)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===nr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=En){const l=this.elements,u=1/(e-t),f=1/(n-s),h=1/(o-r),d=(e+t)*u,p=(n+s)*f;let g,_;if(a===En)g=(o+r)*h,_=-2*h;else if(a===nr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hi=new P,Je=new Jt,Ju=new P(0,0,0),Zu=new P(1,1,1),Fn=new P,As=new P,ze=new P,Ia=new Jt,Ua=new ki;class sn{constructor(t=0,e=0,n=0,s=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],f=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ia.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ia,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class jo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ju=0;const Na=new P,di=new ki,xn=new Jt,Cs=new P,Ki=new P,Qu=new P,th=new ki,Fa=new P(1,0,0),Oa=new P(0,1,0),za=new P(0,0,1),Ba={type:"added"},eh={type:"removed"},fi={type:"childadded",child:null},Sr={type:"childremoved",child:null};class ue extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new P,e=new sn,n=new ki,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Ot}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(Fa,t)}rotateY(t){return this.rotateOnAxis(Oa,t)}rotateZ(t){return this.rotateOnAxis(za,t)}translateOnAxis(t,e){return Na.copy(t).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fa,t)}translateY(t){return this.translateOnAxis(Oa,t)}translateZ(t){return this.translateOnAxis(za,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cs.copy(t):Cs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Ki,Cs,this.up):xn.lookAt(Cs,Ki,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),di.setFromRotationMatrix(xn),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ba),fi.child=t,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eh),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ba),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,Qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,th,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),f=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ue.DEFAULT_UP=new P(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new P,Mn=new P,br=new P,yn=new P,pi=new P,mi=new P,ka=new P,Er=new P,wr=new P,Tr=new P,Ar=new Qt,Cr=new Qt,Rr=new Qt;class je{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ze.subVectors(t,e),s.cross(Ze);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ze.subVectors(s,e),Mn.subVectors(n,e),br.subVectors(t,e);const o=Ze.dot(Ze),a=Ze.dot(Mn),l=Ze.dot(br),u=Mn.dot(Mn),f=Mn.dot(br),h=o*u-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(u*l-a*f)*d,g=(o*f-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yn.x),l.addScaledVector(o,yn.y),l.addScaledVector(a,yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ar.setScalar(0),Cr.setScalar(0),Rr.setScalar(0),Ar.fromBufferAttribute(t,e),Cr.fromBufferAttribute(t,n),Rr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ar,r.x),o.addScaledVector(Cr,r.y),o.addScaledVector(Rr,r.z),o}static isFrontFacing(t,e,n,s){return Ze.subVectors(n,e),Mn.subVectors(t,e),Ze.cross(Mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Ze.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;pi.subVectors(s,n),mi.subVectors(r,n),Er.subVectors(t,n);const l=pi.dot(Er),u=mi.dot(Er);if(l<=0&&u<=0)return e.copy(n);wr.subVectors(t,s);const f=pi.dot(wr),h=mi.dot(wr);if(f>=0&&h<=f)return e.copy(s);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(pi,o);Tr.subVectors(t,r);const p=pi.dot(Tr),g=mi.dot(Tr);if(g>=0&&p<=g)return e.copy(r);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(n).addScaledVector(mi,a);const m=f*g-p*h;if(m<=0&&h-f>=0&&p-g>=0)return ka.subVectors(r,s),a=(h-f)/(h-f+(p-g)),e.copy(s).addScaledVector(ka,a);const c=1/(m+_+d);return o=_*c,a=d*c,e.copy(n).addScaledVector(pi,o).addScaledVector(mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function Pr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=Zo(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Pr(o,r,t+1/3),this.g=Pr(o,r,t),this.b=Pr(o,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const n=cc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return Wt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(pe(Ee.r*255,0,255))*65536+Math.round(pe(Ee.g*255,0,255))*256+Math.round(pe(Ee.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,s=Ee.g,r=Ee.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=u,t.l=f,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Re){Wt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,s=Ee.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Rs);const n=ss(On.h,Rs.h,e),s=ss(On.s,Rs.s,e),r=ss(On.l,Rs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Mt;Mt.NAMES=cc;let nh=0;class gs extends zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Bi(),this.name="",this.blending=wi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zr,this.blendDst=jr,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zr&&(n.blendSrc=this.blendSrc),this.blendDst!==jr&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Te extends gs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new P,Ps=new at;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ba,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ba&&(t.usage=this.usage),t}}class uc extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hc extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ih=0;const Ge=new Jt,Lr=new ue,gi=new P,Be=new si,Ji=new si,fe=new P;class Me extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rc(t)?hc:uc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return Lr.lookAt(t),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ji.setFromBufferAttribute(a),this.morphTargetsRelative?(fe.addVectors(Be.min,Ji.min),Be.expandByPoint(fe),fe.addVectors(Be.max,Ji.max),Be.expandByPoint(fe)):(Be.expandByPoint(Ji.min),Be.expandByPoint(Ji.max))}Be.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)fe.fromBufferAttribute(a,u),l&&(gi.fromBufferAttribute(t,u),fe.add(gi)),s=Math.max(s,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new P,l[R]=new P;const u=new P,f=new P,h=new P,d=new at,p=new at,g=new at,_=new P,m=new P;function c(R,x,v){u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,x),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,x),g.fromBufferAttribute(r,v),f.sub(u),h.sub(u),p.sub(d),g.sub(d);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(w),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(w),a[R].add(_),a[x].add(_),a[v].add(_),l[R].add(m),l[x].add(m),l[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,x=M.length;R<x;++R){const v=M[R],w=v.start,C=v.count;for(let N=w,L=w+C;N<L;N+=3)c(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const S=new P,y=new P,U=new P,b=new P;function A(R){U.fromBufferAttribute(s,R),b.copy(U);const x=a[R];S.copy(x),S.sub(U.multiplyScalar(U.dot(x))).normalize(),y.crossVectors(b,x);const w=y.dot(l[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,w)}for(let R=0,x=M.length;R<x;++R){const v=M[R],w=v.start,C=v.count;for(let N=w,L=w+C;N<L;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,u=new P,f=new P,h=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,m),a.add(f),l.add(f),u.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*f;for(let c=0;c<f;c++)d[g++]=u[p++]}return new tn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=t(l,n);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const f=s[u];this.setAttribute(u,f.clone(e))}const r=t.morphAttributes;for(const u in r){const f=[],h=r[u];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(e));this.morphAttributes[u]=f}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ha=new Jt,$n=new lc,Ls=new ms,Va=new P,Ds=new P,Is=new P,Us=new P,Dr=new P,Ns=new P,Ga=new P,Fs=new P;class Ut extends ue{constructor(t=new Me,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ns.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const f=a[l],h=r[l];f!==0&&(Dr.fromBufferAttribute(h,t),o?Ns.addScaledVector(Dr,f):Ns.addScaledVector(Dr.sub(e),f))}e.add(Ns)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(r),$n.copy(t.ray).recast(t.near),!(Ls.containsPoint($n.origin)===!1&&($n.intersectSphere(Ls,Va)===null||$n.origin.distanceToSquared(Va)>(t.far-t.near)**2))&&(Ha.copy(r).invert(),$n.copy(t.ray).applyMatrix4(Ha),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],c=o[m.materialIndex],M=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,U=S;y<U;y+=3){const b=a.getX(y),A=a.getX(y+1),R=a.getX(y+2);s=Os(this,c,t,n,u,f,h,b,A,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,c=_;m<c;m+=3){const M=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);s=Os(this,o,t,n,u,f,h,M,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],c=o[m.materialIndex],M=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,U=S;y<U;y+=3){const b=y,A=y+1,R=y+2;s=Os(this,c,t,n,u,f,h,b,A,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,c=_;m<c;m+=3){const M=m,S=m+1,y=m+2;s=Os(this,o,t,n,u,f,h,M,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function sh(i,t,e,n,s,r,o,a){let l;if(t.side===De?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Wn,a),l===null)return null;Fs.copy(a),Fs.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Fs);return u<e.near||u>e.far?null:{distance:u,point:Fs.clone(),object:i}}function Os(i,t,e,n,s,r,o,a,l,u){i.getVertexPosition(a,Ds),i.getVertexPosition(l,Is),i.getVertexPosition(u,Us);const f=sh(i,t,e,n,Ds,Is,Us,Ga);if(f){const h=new P;je.getBarycoord(Ga,Ds,Is,Us,h),s&&(f.uv=je.getInterpolatedAttribute(s,a,l,u,h,new at)),r&&(f.uv1=je.getInterpolatedAttribute(r,a,l,u,h,new at)),o&&(f.normal=je.getInterpolatedAttribute(o,a,l,u,h,new P),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new P,materialIndex:0};je.getNormal(Ds,Is,Us,d.normal),f.face=d,f.barycoord=h}return f}class ve extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(h,2));function g(_,m,c,M,S,y,U,b,A,R,x){const v=y/A,w=U/R,C=y/2,N=U/2,L=b/2,I=A+1,z=R+1;let G=0,O=0;const K=new P;for(let W=0;W<z;W++){const V=W*w-N;for(let et=0;et<I;et++){const pt=et*v-C;K[_]=pt*M,K[m]=V*S,K[c]=L,u.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[c]=b>0?1:-1,f.push(K.x,K.y,K.z),h.push(et/A),h.push(1-W/R),G+=1}}for(let W=0;W<R;W++)for(let V=0;V<A;V++){const et=d+V+I*W,pt=d+V+I*(W+1),Y=d+(V+1)+I*(W+1),J=d+(V+1)+I*W;l.push(et,pt,J),l.push(pt,Y,J),O+=6}a.addGroup(p,O,x),p+=O,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ni(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ce(i){const t={};for(let e=0;e<i.length;e++){const n=Ni(i[e]);for(const s in n)t[s]=n[s]}return t}function rh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const us={clone:Ni,merge:Ce};var oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ah=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ge extends gs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oh,this.fragmentShader=ah,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=rh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fc extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new P,Wa=new at,Xa=new at;class ke extends fc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,Wa,Xa),e.subVectors(Xa,Wa)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(is*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/u,s*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vi=-90,_i=1;class lh extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ke(vi,_i,t,e);s.layers=this.layers,this.add(s);const r=new ke(vi,_i,t,e);r.layers=this.layers,this.add(r);const o=new ke(vi,_i,t,e);o.layers=this.layers,this.add(o);const a=new ke(vi,_i,t,e);a.layers=this.layers,this.add(a);const l=new ke(vi,_i,t,e);l.layers=this.layers,this.add(l);const u=new ke(vi,_i,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const u of e)this.remove(u);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,f]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,f),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class pc extends we{constructor(t,e,n,s,r,o,a,l,u,f){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,s,r,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ch extends qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ve(5,5,5),r=new ge({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:wn});r.uniforms.tEquirect.value=e;const o=new Ut(s,r),a=e.minFilter;return e.minFilter===ni&&(e.minFilter=un),new lh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Ir=new P,uh=new P,hh=new Ot;class Bn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ir.subVectors(n,e).cross(uh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ir),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hh.getNormalMatrix(t),s=this.coplanarPoint(Ir).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new ms,zs=new P;class Qo{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],f=s[5],h=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],c=s[12],M=s[13],S=s[14],y=s[15];if(n[0].setComponents(l-r,d-u,m-p,y-c).normalize(),n[1].setComponents(l+r,d+u,m+p,y+c).normalize(),n[2].setComponents(l+o,d+f,m+g,y+M).normalize(),n[3].setComponents(l-o,d-f,m-g,y-M).normalize(),n[4].setComponents(l-a,d-h,m-_,y-S).normalize(),e===En)n[5].setComponents(l+a,d+h,m+_,y+S).normalize();else if(e===nr)n[5].setComponents(a,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(zs.x=s.normal.x>0?t.max.x:t.min.x,zs.y=s.normal.y>0?t.max.y:t.min.y,zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dh(i){const t=new WeakMap;function e(a,l){const u=a.array,f=a.usage,h=u.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,u,f),a.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,u){const f=l.array,h=l.updateRanges;if(i.bindBuffer(u,a),h.length===0)i.bufferSubData(u,0,f);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(u,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}class Rn extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),u=a+1,f=l+1,h=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let c=0;c<f;c++){const M=c*d-o;for(let S=0;S<u;S++){const y=S*h-r;g.push(y,-M,0),_.push(0,0,1),m.push(S/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let M=0;M<a;M++){const S=M+u*c,y=M+u*(c+1),U=M+1+u*(c+1),b=M+1+u*c;p.push(S,y,b),p.push(y,U,b)}this.setIndex(p),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.width,t.height,t.widthSegments,t.heightSegments)}}var fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ph=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Th=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ah=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Oh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,td=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ed=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ad=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ud=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,md=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Md=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Td=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ld=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ef=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,of=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,af=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Af=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Df=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ff=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:fh,alphahash_pars_fragment:ph,alphamap_fragment:mh,alphamap_pars_fragment:gh,alphatest_fragment:vh,alphatest_pars_fragment:_h,aomap_fragment:xh,aomap_pars_fragment:Mh,batching_pars_vertex:yh,batching_vertex:Sh,begin_vertex:bh,beginnormal_vertex:Eh,bsdfs:wh,iridescence_fragment:Th,bumpmap_pars_fragment:Ah,clipping_planes_fragment:Ch,clipping_planes_pars_fragment:Rh,clipping_planes_pars_vertex:Ph,clipping_planes_vertex:Lh,color_fragment:Dh,color_pars_fragment:Ih,color_pars_vertex:Uh,color_vertex:Nh,common:Fh,cube_uv_reflection_fragment:Oh,defaultnormal_vertex:zh,displacementmap_pars_vertex:Bh,displacementmap_vertex:kh,emissivemap_fragment:Hh,emissivemap_pars_fragment:Vh,colorspace_fragment:Gh,colorspace_pars_fragment:Wh,envmap_fragment:Xh,envmap_common_pars_fragment:qh,envmap_pars_fragment:Yh,envmap_pars_vertex:$h,envmap_physical_pars_fragment:rd,envmap_vertex:Kh,fog_vertex:Jh,fog_pars_vertex:Zh,fog_fragment:jh,fog_pars_fragment:Qh,gradientmap_pars_fragment:td,lightmap_pars_fragment:ed,lights_lambert_fragment:nd,lights_lambert_pars_fragment:id,lights_pars_begin:sd,lights_toon_fragment:od,lights_toon_pars_fragment:ad,lights_phong_fragment:ld,lights_phong_pars_fragment:cd,lights_physical_fragment:ud,lights_physical_pars_fragment:hd,lights_fragment_begin:dd,lights_fragment_maps:fd,lights_fragment_end:pd,logdepthbuf_fragment:md,logdepthbuf_pars_fragment:gd,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:_d,map_fragment:xd,map_pars_fragment:Md,map_particle_fragment:yd,map_particle_pars_fragment:Sd,metalnessmap_fragment:bd,metalnessmap_pars_fragment:Ed,morphinstance_vertex:wd,morphcolor_vertex:Td,morphnormal_vertex:Ad,morphtarget_pars_vertex:Cd,morphtarget_vertex:Rd,normal_fragment_begin:Pd,normal_fragment_maps:Ld,normal_pars_fragment:Dd,normal_pars_vertex:Id,normal_vertex:Ud,normalmap_pars_fragment:Nd,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:Od,clearcoat_pars_fragment:zd,iridescence_pars_fragment:Bd,opaque_fragment:kd,packing:Hd,premultiplied_alpha_fragment:Vd,project_vertex:Gd,dithering_fragment:Wd,dithering_pars_fragment:Xd,roughnessmap_fragment:qd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:$d,shadowmap_pars_vertex:Kd,shadowmap_vertex:Jd,shadowmask_pars_fragment:Zd,skinbase_vertex:jd,skinning_pars_vertex:Qd,skinning_vertex:tf,skinnormal_vertex:ef,specularmap_fragment:nf,specularmap_pars_fragment:sf,tonemapping_fragment:rf,tonemapping_pars_fragment:of,transmission_fragment:af,transmission_pars_fragment:lf,uv_pars_fragment:cf,uv_pars_vertex:uf,uv_vertex:hf,worldpos_vertex:df,background_vert:ff,background_frag:pf,backgroundCube_vert:mf,backgroundCube_frag:gf,cube_vert:vf,cube_frag:_f,depth_vert:xf,depth_frag:Mf,distanceRGBA_vert:yf,distanceRGBA_frag:Sf,equirect_vert:bf,equirect_frag:Ef,linedashed_vert:wf,linedashed_frag:Tf,meshbasic_vert:Af,meshbasic_frag:Cf,meshlambert_vert:Rf,meshlambert_frag:Pf,meshmatcap_vert:Lf,meshmatcap_frag:Df,meshnormal_vert:If,meshnormal_frag:Uf,meshphong_vert:Nf,meshphong_frag:Ff,meshphysical_vert:Of,meshphysical_frag:zf,meshtoon_vert:Bf,meshtoon_frag:kf,points_vert:Hf,points_frag:Vf,shadow_vert:Gf,shadow_frag:Wf,sprite_vert:Xf,sprite_frag:qf},lt={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},cn={basic:{uniforms:Ce([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ce([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ce([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ce([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ce([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ce([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ce([lt.points,lt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ce([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ce([lt.common,lt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ce([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ce([lt.sprite,lt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ce([lt.common,lt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ce([lt.lights,lt.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};cn.physical={uniforms:Ce([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Bs={r:0,b:0,g:0},Jn=new sn,Yf=new Jt;function $f(i,t,e,n,s,r,o){const a=new Mt(0);let l=r===!0?0:1,u,f,h=null,d=0,p=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function _(M){let S=!1;const y=g(M);y===null?c(a,l):y&&y.isColor&&(c(y,1),S=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,S){const y=g(S);y&&(y.isCubeTexture||y.mapping===lr)?(f===void 0&&(f=new Ut(new ve(1,1,1),new ge({name:"BackgroundCubeMaterial",uniforms:Ni(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(U,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),Jn.copy(S.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Yf.makeRotationFromEuler(Jn)),f.material.toneMapped=Wt.getTransfer(y.colorSpace)!==jt,(h!==y||d!==y.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,h=y,d=y.version,p=i.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Ut(new Rn(2,2),new ge({name:"BackgroundMaterial",uniforms:Ni(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=Wt.getTransfer(y.colorSpace)!==jt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function c(M,S){M.getRGB(Bs,dc(i)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),l=S,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,c(a,l)},render:_,addToRenderList:m}}function Kf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(v,w,C,N,L){let I=!1;const z=h(N,C,w);r!==z&&(r=z,u(r.object)),I=p(v,N,C,L),I&&g(v,N,C,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,y(v,w,C,N),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function u(v){return i.bindVertexArray(v)}function f(v){return i.deleteVertexArray(v)}function h(v,w,C){const N=C.wireframe===!0;let L=n[v.id];L===void 0&&(L={},n[v.id]=L);let I=L[w.id];I===void 0&&(I={},L[w.id]=I);let z=I[N];return z===void 0&&(z=d(l()),I[N]=z),z}function d(v){const w=[],C=[],N=[];for(let L=0;L<e;L++)w[L]=0,C[L]=0,N[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:C,attributeDivisors:N,object:v,attributes:{},index:null}}function p(v,w,C,N){const L=r.attributes,I=w.attributes;let z=0;const G=C.getAttributes();for(const O in G)if(G[O].location>=0){const W=L[O];let V=I[O];if(V===void 0&&(O==="instanceMatrix"&&v.instanceMatrix&&(V=v.instanceMatrix),O==="instanceColor"&&v.instanceColor&&(V=v.instanceColor)),W===void 0||W.attribute!==V||V&&W.data!==V.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function g(v,w,C,N){const L={},I=w.attributes;let z=0;const G=C.getAttributes();for(const O in G)if(G[O].location>=0){let W=I[O];W===void 0&&(O==="instanceMatrix"&&v.instanceMatrix&&(W=v.instanceMatrix),O==="instanceColor"&&v.instanceColor&&(W=v.instanceColor));const V={};V.attribute=W,W&&W.data&&(V.data=W.data),L[O]=V,z++}r.attributes=L,r.attributesNum=z,r.index=N}function _(){const v=r.newAttributes;for(let w=0,C=v.length;w<C;w++)v[w]=0}function m(v){c(v,0)}function c(v,w){const C=r.newAttributes,N=r.enabledAttributes,L=r.attributeDivisors;C[v]=1,N[v]===0&&(i.enableVertexAttribArray(v),N[v]=1),L[v]!==w&&(i.vertexAttribDivisor(v,w),L[v]=w)}function M(){const v=r.newAttributes,w=r.enabledAttributes;for(let C=0,N=w.length;C<N;C++)w[C]!==v[C]&&(i.disableVertexAttribArray(C),w[C]=0)}function S(v,w,C,N,L,I,z){z===!0?i.vertexAttribIPointer(v,w,C,L,I):i.vertexAttribPointer(v,w,C,N,L,I)}function y(v,w,C,N){_();const L=N.attributes,I=C.getAttributes(),z=w.defaultAttributeValues;for(const G in I){const O=I[G];if(O.location>=0){let K=L[G];if(K===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(K=v.instanceColor)),K!==void 0){const W=K.normalized,V=K.itemSize,et=t.get(K);if(et===void 0)continue;const pt=et.buffer,Y=et.type,J=et.bytesPerElement,ot=Y===i.INT||Y===i.UNSIGNED_INT||K.gpuType===Wo;if(K.isInterleavedBufferAttribute){const nt=K.data,_t=nt.stride,yt=K.offset;if(nt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<O.locationSize;Lt++)c(O.location+Lt,nt.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Lt=0;Lt<O.locationSize;Lt++)m(O.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Lt=0;Lt<O.locationSize;Lt++)S(O.location+Lt,V/O.locationSize,Y,W,_t*J,(yt+V/O.locationSize*Lt)*J,ot)}else{if(K.isInstancedBufferAttribute){for(let nt=0;nt<O.locationSize;nt++)c(O.location+nt,K.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let nt=0;nt<O.locationSize;nt++)m(O.location+nt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let nt=0;nt<O.locationSize;nt++)S(O.location+nt,V/O.locationSize,Y,W,V*J,V/O.locationSize*nt*J,ot)}}else if(z!==void 0){const W=z[G];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(O.location,W);break;case 3:i.vertexAttrib3fv(O.location,W);break;case 4:i.vertexAttrib4fv(O.location,W);break;default:i.vertexAttrib1fv(O.location,W)}}}}M()}function U(){R();for(const v in n){const w=n[v];for(const C in w){const N=w[C];for(const L in N)f(N[L].object),delete N[L];delete w[C]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;const w=n[v.id];for(const C in w){const N=w[C];for(const L in N)f(N[L].object),delete N[L];delete w[C]}delete n[v.id]}function A(v){for(const w in n){const C=n[w];if(C[v.id]===void 0)continue;const N=C[v.id];for(const L in N)f(N[L].object),delete N[L];delete C[v.id]}}function R(){x(),o=!0,r!==s&&(r=s,u(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:x,dispose:U,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Jf(i,t,e){let n;function s(u){n=u}function r(u,f){i.drawArrays(n,u,f),e.update(f,n,1)}function o(u,f,h){h!==0&&(i.drawArraysInstanced(n,u,f,h),e.update(f,n,h))}function a(u,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,h);let p=0;for(let g=0;g<h;g++)p+=f[g];e.update(p,n,1)}function l(u,f,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],f[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,f,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Qe&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==hn&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),c=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:c,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:U,maxSamples:b}}function jf(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Bn,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=f(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,c=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?f(null):u();else{const M=r?0:n,S=M*4;let y=c.clippingState||null;l.value=y,y=f(g,d,S,p);for(let U=0;U!==S;++U)y[U]=e[U];c.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const c=p+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<c)&&(m=new Float32Array(c));for(let S=0,y=p;S!==_;++S,y+=4)o.copy(h[S]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Qf(i){let t=new WeakMap;function e(o,a){return a===oo?o.mapping=Li:a===ao&&(o.mapping=Di),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===oo||a===ao)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new ch(l.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ta extends fc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ei=4,qa=[.125,.215,.35,.446,.526,.582],ti=20,Ur=new ta,Ya=new Mt;let Nr=null,Fr=0,Or=0,zr=!1;const jn=(1+Math.sqrt(5))/2,xi=1/jn,$a=[new P(-jn,xi,0),new P(jn,xi,0),new P(-xi,0,jn),new P(xi,0,jn),new P(0,jn,-xi),new P(0,jn,xi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Ka{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Nr=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nr,Fr,Or),this._renderer.xr.enabled=zr,t.scissorTest=!1,ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nr=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:fn,format:Qe,colorSpace:Oi,depthBuffer:!1},s=Ja(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ja(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tp(r)),this._blurMaterial=ep(r,t,e)}return s}_compileMaterial(t){const e=new Ut(this._lodPlanes[0],t);this._renderer.compile(e,Ur)}_sceneToCubeUV(t,e,n,s){const a=new ke(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Ya),f.toneMapping=Gn,f.autoClear=!1;const p=new Te({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new Ut(new ve,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Ya),_=!0);for(let c=0;c<6;c++){const M=c%3;M===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):M===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const S=this._cubeSize;ks(s,M*S,c>2?S:0,S,S),f.setRenderTarget(s),_&&f.render(g,a),f.render(t,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=d,f.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Li||t.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Za());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ur)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$a[(s-r-1)%$a.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Ut(this._lodPlanes[s],u),d=u.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ti-1),_=r/g,m=isFinite(r)?1+Math.floor(f*_):ti;m>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);const c=[];let M=0;for(let A=0;A<ti;++A){const R=A/_,x=Math.exp(-R*R/2);c.push(x),A===0?M+=x:A<m&&(M+=2*x)}for(let A=0;A<c.length;A++)c[A]=c[A]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const y=this._sizeLods[s],U=3*y*(s>S-Ei?s-S+Ei:0),b=4*(this._cubeSize-y);ks(e,U,b,3*y,2*y),l.setRenderTarget(e),l.render(h,Ur)}}function tp(i){const t=[],e=[],n=[];let s=i;const r=i-Ei+1+qa.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ei?l=qa[o-i+Ei-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,g=6,_=3,m=2,c=1,M=new Float32Array(_*g*p),S=new Float32Array(m*g*p),y=new Float32Array(c*g*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,R=b>2?0:-1,x=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];M.set(x,_*g*b),S.set(d,m*g*b);const v=[b,b,b,b,b,b];y.set(v,c*g*b)}const U=new Me;U.setAttribute("position",new tn(M,_)),U.setAttribute("uv",new tn(S,m)),U.setAttribute("faceIndex",new tn(y,c)),t.push(U),s>Ei&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ja(i,t,e){const n=new qe(i,t,e);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ep(i,t,e){const n=new Float32Array(ti),s=new P(0,1,0);return new ge({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Za(){return new ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ja(){return new ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function np(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===oo||l===ao,f=l===Li||l===Di;if(u||f){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ka(i)),h=u?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||f&&p&&s(p)?(e===null&&(e=new Ka(i)),h=u?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ip(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&es("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sp(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,c=_.length;m<c;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,c=_.length;m<c;m++)t.update(_[m],i.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let S=0,y=M.length;S<y;S+=3){const U=M[S+0],b=M[S+1],A=M[S+2];d.push(U,b,b,A,A,U)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,y=M.length/3-1;S<y;S+=3){const U=S+0,b=S+1,A=S+2;d.push(U,b,b,A,A,U)}}else return;const m=new(rc(d)?hc:uc)(d,1);m.version=_;const c=r.get(h);c&&t.remove(c),r.set(h,m)}function f(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function rp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function u(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function f(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let c=0;c<g;c++)m+=p[c];e.update(m,n,1)}function h(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<d.length;c++)u(d[c]/o,p[c],_[c]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let c=0;for(let M=0;M<g;M++)c+=p[M]*_[M];e.update(c,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function op(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ap(i,t,e){const n=new WeakMap,s=new Qt;function r(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let v=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let U=a.attributes.position.count*y,b=1;U>t.maxTextureSize&&(b=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const A=new Float32Array(U*b*4*h),R=new ac(A,U,b,h);R.type=hn,R.needsUpdate=!0;const x=y*4;for(let w=0;w<h;w++){const C=c[w],N=M[w],L=S[w],I=U*b*4*w;for(let z=0;z<C.count;z++){const G=z*x;g===!0&&(s.fromBufferAttribute(C,z),A[I+G+0]=s.x,A[I+G+1]=s.y,A[I+G+2]=s.z,A[I+G+3]=0),_===!0&&(s.fromBufferAttribute(N,z),A[I+G+4]=s.x,A[I+G+5]=s.y,A[I+G+6]=s.z,A[I+G+7]=0),m===!0&&(s.fromBufferAttribute(L,z),A[I+G+8]=s.x,A[I+G+9]=s.y,A[I+G+10]=s.z,A[I+G+11]=L.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new at(U,b)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function lp(i,t,e,n){let s=new WeakMap;function r(l){const u=n.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}class gc extends we{constructor(t,e,n,s,r,o,a,l,u,f=Ti){if(f!==Ti&&f!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ti&&(n=ii),n===void 0&&f===Ui&&(n=Ii),super(null,s,r,o,a,l,f,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const vc=new we,Qa=new gc(1,1),_c=new ac,xc=new $u,Mc=new pc,tl=[],el=[],nl=new Float32Array(16),il=new Float32Array(9),sl=new Float32Array(4);function Hi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=tl[s];if(r===void 0&&(r=new Float32Array(s),tl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function he(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function de(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ur(i,t){let e=el[t];e===void 0&&(e=new Int32Array(t),el[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2fv(this.addr,t),de(e,t)}}function hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;i.uniform3fv(this.addr,t),de(e,t)}}function dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4fv(this.addr,t),de(e,t)}}function fp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(he(e,n))return;sl.set(n),i.uniformMatrix2fv(this.addr,!1,sl),de(e,n)}}function pp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(he(e,n))return;il.set(n),i.uniformMatrix3fv(this.addr,!1,il),de(e,n)}}function mp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(he(e,n))return;nl.set(n),i.uniformMatrix4fv(this.addr,!1,nl),de(e,n)}}function gp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2iv(this.addr,t),de(e,t)}}function _p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3iv(this.addr,t),de(e,t)}}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4iv(this.addr,t),de(e,t)}}function Mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2uiv(this.addr,t),de(e,t)}}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3uiv(this.addr,t),de(e,t)}}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4uiv(this.addr,t),de(e,t)}}function Ep(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qa.compareFunction=sc,r=Qa):r=vc,e.setTexture2D(t||r,s)}function wp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xc,s)}function Tp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mc,s)}function Ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_c,s)}function Cp(i){switch(i){case 5126:return cp;case 35664:return up;case 35665:return hp;case 35666:return dp;case 35674:return fp;case 35675:return pp;case 35676:return mp;case 5124:case 35670:return gp;case 35667:case 35671:return vp;case 35668:case 35672:return _p;case 35669:case 35673:return xp;case 5125:return Mp;case 36294:return yp;case 36295:return Sp;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Tp;case 36289:case 36303:case 36311:case 36292:return Ap}}function Rp(i,t){i.uniform1fv(this.addr,t)}function Pp(i,t){const e=Hi(t,this.size,2);i.uniform2fv(this.addr,e)}function Lp(i,t){const e=Hi(t,this.size,3);i.uniform3fv(this.addr,e)}function Dp(i,t){const e=Hi(t,this.size,4);i.uniform4fv(this.addr,e)}function Ip(i,t){const e=Hi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Up(i,t){const e=Hi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Np(i,t){const e=Hi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fp(i,t){i.uniform1iv(this.addr,t)}function Op(i,t){i.uniform2iv(this.addr,t)}function zp(i,t){i.uniform3iv(this.addr,t)}function Bp(i,t){i.uniform4iv(this.addr,t)}function kp(i,t){i.uniform1uiv(this.addr,t)}function Hp(i,t){i.uniform2uiv(this.addr,t)}function Vp(i,t){i.uniform3uiv(this.addr,t)}function Gp(i,t){i.uniform4uiv(this.addr,t)}function Wp(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);he(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||vc,r[o])}function Xp(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);he(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||xc,r[o])}function qp(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);he(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Mc,r[o])}function Yp(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);he(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||_c,r[o])}function $p(i){switch(i){case 5126:return Rp;case 35664:return Pp;case 35665:return Lp;case 35666:return Dp;case 35674:return Ip;case 35675:return Up;case 35676:return Np;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return zp;case 35669:case 35673:return Bp;case 5125:return kp;case 36294:return Hp;case 36295:return Vp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}class Kp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cp(e.type)}}class Jp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$p(e.type)}}class Zp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Br=/(\w+)(\])?(\[|\.)?/g;function rl(i,t){i.seq.push(t),i.map[t.id]=t}function jp(i,t,e){const n=i.name,s=n.length;for(Br.lastIndex=0;;){const r=Br.exec(n),o=Br.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){rl(e,u===void 0?new Kp(a,i,t):new Jp(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Zp(a),rl(e,h)),e=h}}}class js{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);jp(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ol(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qp=37297;let tm=0;function em(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const al=new Ot;function nm(i){Wt._getMatrix(al,Wt.workingColorSpace,i);const t=`mat3( ${al.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case cr:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ll(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+em(i.getShaderSource(t),o)}else return s}function im(i,t){const e=nm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sm(i,t){let e;switch(t){case Vl:e="Linear";break;case Gl:e="Reinhard";break;case Wl:e="Cineon";break;case Go:e="ACESFilmic";break;case Xl:e="AgX";break;case ql:e="Neutral";break;case hu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Hs=new P;function rm(){Wt.getLuminanceCoefficients(Hs);const i=Hs.x.toFixed(4),t=Hs.y.toFixed(4),e=Hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function om(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function am(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ns(i){return i!==""}function cl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ul(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(i){return i.replace(cm,hm)}const um=new Map;function hm(i,t){let e=Bt[t];if(e===void 0){const n=um.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oo(e)}const dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hl(i){return i.replace(dm,fm)}function fm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===kl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function mm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case Di:t="ENVMAP_TYPE_CUBE";break;case lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Di:t="ENVMAP_MODE_REFRACTION";break}return t}function vm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hl:t="ENVMAP_BLENDING_MULTIPLY";break;case cu:t="ENVMAP_BLENDING_MIX";break;case uu:t="ENVMAP_BLENDING_ADD";break}return t}function _m(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=pm(e),u=mm(e),f=gm(e),h=vm(e),d=_m(e),p=om(e),g=am(r),_=s.createProgram();let m,c,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ns).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ns).join(`
`),c.length>0&&(c+=`
`)):(m=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),c=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?sm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,im("linearToOutputTexel",e.outputColorSpace),rm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),o=Oo(o),o=cl(o,e),o=ul(o,e),a=Oo(a),a=cl(a,e),a=ul(a,e),o=hl(o),a=hl(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",e.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const S=M+m+o,y=M+c+a,U=ol(s,s.VERTEX_SHADER,S),b=ol(s,s.FRAGMENT_SHADER,y);s.attachShader(_,U),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(w){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(U).trim(),L=s.getShaderInfoLog(b).trim();let I=!0,z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,U,b);else{const G=ll(s,U,"vertex"),O=ll(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+C+`
`+G+`
`+O)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(N===""||L==="")&&(z=!1);z&&(w.diagnostics={runnable:I,programLog:C,vertexShader:{log:N,prefix:m},fragmentShader:{log:L,prefix:c}})}s.deleteShader(U),s.deleteShader(b),R=new js(s,_),x=lm(s,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Qp)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=b,this}let Mm=0;class ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sm(t),e.set(t,n)),n}}class Sm{constructor(t){this.id=Mm++,this.code=t,this.usedTimes=0}}function bm(i,t,e,n,s,r,o){const a=new jo,l=new ym,u=new Set,f=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return u.add(x),x===0?"uv":`uv${x}`}function m(x,v,w,C,N){const L=C.fog,I=N.geometry,z=x.isMeshStandardMaterial?C.environment:null,G=(x.isMeshStandardMaterial?e:t).get(x.envMap||z),O=G&&G.mapping===lr?G.image.height:null,K=g[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const W=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,V=W!==void 0?W.length:0;let et=0;I.morphAttributes.position!==void 0&&(et=1),I.morphAttributes.normal!==void 0&&(et=2),I.morphAttributes.color!==void 0&&(et=3);let pt,Y,J,ot;if(K){const Zt=cn[K];pt=Zt.vertexShader,Y=Zt.fragmentShader}else pt=x.vertexShader,Y=x.fragmentShader,l.update(x),J=l.getVertexShaderID(x),ot=l.getFragmentShaderID(x);const nt=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),yt=N.isInstancedMesh===!0,Lt=N.isBatchedMesh===!0,ie=!!x.map,kt=!!x.matcap,ae=!!G,B=!!x.aoMap,ye=!!x.lightMap,Ht=!!x.bumpMap,Vt=!!x.normalMap,Rt=!!x.displacementMap,se=!!x.emissiveMap,Ct=!!x.metalnessMap,D=!!x.roughnessMap,E=x.anisotropy>0,X=x.clearcoat>0,Q=x.dispersion>0,it=x.iridescence>0,j=x.sheen>0,Tt=x.transmission>0,ut=E&&!!x.anisotropyMap,mt=X&&!!x.clearcoatMap,Xt=X&&!!x.clearcoatNormalMap,st=X&&!!x.clearcoatRoughnessMap,gt=it&&!!x.iridescenceMap,Pt=it&&!!x.iridescenceThicknessMap,Dt=j&&!!x.sheenColorMap,vt=j&&!!x.sheenRoughnessMap,Gt=!!x.specularMap,zt=!!x.specularColorMap,te=!!x.specularIntensityMap,F=Tt&&!!x.transmissionMap,ct=Tt&&!!x.thicknessMap,Z=!!x.gradientMap,tt=!!x.alphaMap,ft=x.alphaTest>0,ht=!!x.alphaHash,Nt=!!x.extensions;let le=Gn;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(le=i.toneMapping);const Se={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:pt,fragmentShader:Y,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:ot,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Lt,batchingColor:Lt&&N._colorsTexture!==null,instancing:yt,instancingColor:yt&&N.instanceColor!==null,instancingMorph:yt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Oi,alphaToCoverage:!!x.alphaToCoverage,map:ie,matcap:kt,envMap:ae,envMapMode:ae&&G.mapping,envMapCubeUVHeight:O,aoMap:B,lightMap:ye,bumpMap:Ht,normalMap:Vt,displacementMap:d&&Rt,emissiveMap:se,normalMapObjectSpace:Vt&&x.normalMapType===mu,normalMapTangentSpace:Vt&&x.normalMapType===ic,metalnessMap:Ct,roughnessMap:D,anisotropy:E,anisotropyMap:ut,clearcoat:X,clearcoatMap:mt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:st,dispersion:Q,iridescence:it,iridescenceMap:gt,iridescenceThicknessMap:Pt,sheen:j,sheenColorMap:Dt,sheenRoughnessMap:vt,specularMap:Gt,specularColorMap:zt,specularIntensityMap:te,transmission:Tt,transmissionMap:F,thicknessMap:ct,gradientMap:Z,opaque:x.transparent===!1&&x.blending===wi&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:ft,alphaHash:ht,combine:x.combine,mapUv:ie&&_(x.map.channel),aoMapUv:B&&_(x.aoMap.channel),lightMapUv:ye&&_(x.lightMap.channel),bumpMapUv:Ht&&_(x.bumpMap.channel),normalMapUv:Vt&&_(x.normalMap.channel),displacementMapUv:Rt&&_(x.displacementMap.channel),emissiveMapUv:se&&_(x.emissiveMap.channel),metalnessMapUv:Ct&&_(x.metalnessMap.channel),roughnessMapUv:D&&_(x.roughnessMap.channel),anisotropyMapUv:ut&&_(x.anisotropyMap.channel),clearcoatMapUv:mt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(x.sheenRoughnessMap.channel),specularMapUv:Gt&&_(x.specularMap.channel),specularColorMapUv:zt&&_(x.specularColorMap.channel),specularIntensityMapUv:te&&_(x.specularIntensityMap.channel),transmissionMapUv:F&&_(x.transmissionMap.channel),thicknessMapUv:ct&&_(x.thicknessMap.channel),alphaMapUv:tt&&_(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Vt||E),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(ie||tt),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:_t,skinning:N.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:et,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:ie&&x.map.isVideoTexture===!0&&Wt.getTransfer(x.map.colorSpace)===jt,decodeVideoTextureEmissive:se&&x.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(x.emissiveMap.colorSpace)===jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ne,flipSided:x.side===De,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Nt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&x.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Se.vertexUv1s=u.has(1),Se.vertexUv2s=u.has(2),Se.vertexUv3s=u.has(3),u.clear(),Se}function c(x){const v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(const w in x.defines)v.push(w),v.push(x.defines[w]);return x.isRawShaderMaterial===!1&&(M(v,x),S(v,x),v.push(i.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function M(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function S(x,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),x.push(a.mask)}function y(x){const v=g[x.type];let w;if(v){const C=cn[v];w=us.clone(C.uniforms)}else w=x.uniforms;return w}function U(x,v){let w;for(let C=0,N=f.length;C<N;C++){const L=f[C];if(L.cacheKey===v){w=L,++w.usedTimes;break}}return w===void 0&&(w=new xm(i,v,x,r),f.push(w)),w}function b(x){if(--x.usedTimes===0){const v=f.indexOf(x);f[v]=f[f.length-1],f.pop(),x.destroy()}}function A(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:y,acquireProgram:U,releaseProgram:b,releaseShaderCache:A,programs:f,dispose:R}}function Em(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,p,g,_,m){let c=i[t];return c===void 0?(c={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=p,c.groupOrder=g,c.renderOrder=h.renderOrder,c.z=_,c.group=m),t++,c}function a(h,d,p,g,_,m){const c=o(h,d,p,g,_,m);p.transmission>0?n.push(c):p.transparent===!0?s.push(c):e.push(c)}function l(h,d,p,g,_,m){const c=o(h,d,p,g,_,m);p.transmission>0?n.unshift(c):p.transparent===!0?s.unshift(c):e.unshift(c)}function u(h,d){e.length>1&&e.sort(h||wm),n.length>1&&n.sort(d||fl),s.length>1&&s.sort(d||fl)}function f(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:f,sort:u}}function Tm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new pl,i.set(n,[o])):s>=r.length?(o=new pl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Am(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Mt};break;case"SpotLight":e={position:new P,direction:new P,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Cm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Rm=0;function Pm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lm(i){const t=new Am,e=Cm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new P);const s=new P,r=new Jt,o=new Jt;function a(u){let f=0,h=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,c=0,M=0,S=0,y=0,U=0,b=0,A=0;u.sort(Pm);for(let x=0,v=u.length;x<v;x++){const w=u[x],C=w.color,N=w.intensity,L=w.distance,I=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=C.r*N,h+=C.g*N,d+=C.b*N;else if(w.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(w.sh.coefficients[z],N);A++}else if(w.isDirectionalLight){const z=t.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const G=w.shadow,O=e.get(w);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,n.directionalShadow[p]=O,n.directionalShadowMap[p]=I,n.directionalShadowMatrix[p]=w.shadow.matrix,M++}n.directional[p]=z,p++}else if(w.isSpotLight){const z=t.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(C).multiplyScalar(N),z.distance=L,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,n.spot[_]=z;const G=w.shadow;if(w.map&&(n.spotLightMap[U]=w.map,U++,G.updateMatrices(w),w.castShadow&&b++),n.spotLightMatrix[_]=G.matrix,w.castShadow){const O=e.get(w);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,n.spotShadow[_]=O,n.spotShadowMap[_]=I,y++}_++}else if(w.isRectAreaLight){const z=t.get(w);z.color.copy(C).multiplyScalar(N),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=z,m++}else if(w.isPointLight){const z=t.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){const G=w.shadow,O=e.get(w);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,O.shadowCameraNear=G.camera.near,O.shadowCameraFar=G.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=I,n.pointShadowMatrix[g]=w.shadow.matrix,S++}n.point[g]=z,g++}else if(w.isHemisphereLight){const z=t.get(w);z.skyColor.copy(w.color).multiplyScalar(N),z.groundColor.copy(w.groundColor).multiplyScalar(N),n.hemi[c]=z,c++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==c||R.numDirectionalShadows!==M||R.numPointShadows!==S||R.numSpotShadows!==y||R.numSpotMaps!==U||R.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=c,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+U-b,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=c,R.numDirectionalShadows=M,R.numPointShadows=S,R.numSpotShadows=y,R.numSpotMaps=U,R.numLightProbes=A,n.version=Rm++)}function l(u,f){let h=0,d=0,p=0,g=0,_=0;const m=f.matrixWorldInverse;for(let c=0,M=u.length;c<M;c++){const S=u[c];if(S.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(S.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function ml(i){const t=new Lm(i),e=[],n=[];function s(f){u.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function o(f){n.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Dm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ml(i),t.set(s,[a])):r>=o.length?(a=new ml(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Im extends gs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Um extends gs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Om(i,t,e){let n=new Qo;const s=new at,r=new at,o=new Qt,a=new Im({depthPacking:pu}),l=new Um,u={},f=e.maxTextureSize,h={[Wn]:De,[De]:Wn,[Ne]:Ne},d=new ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Nm,fragmentShader:Fm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ut(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bl;let c=this.type;this.render=function(b,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const x=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),C=i.state;C.setBlending(wn),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const N=c!==bn&&this.type===bn,L=c===bn&&this.type!==bn;for(let I=0,z=b.length;I<z;I++){const G=b[I],O=G.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const K=O.getFrameExtents();if(s.multiply(K),r.copy(O.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/K.x),s.x=r.x*K.x,O.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/K.y),s.y=r.y*K.y,O.mapSize.y=r.y)),O.map===null||N===!0||L===!0){const V=this.type!==bn?{minFilter:He,magFilter:He}:{};O.map!==null&&O.map.dispose(),O.map=new qe(s.x,s.y,V),O.map.texture.name=G.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const W=O.getViewportCount();for(let V=0;V<W;V++){const et=O.getViewport(V);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),C.viewport(o),O.updateMatrices(G,V),n=O.getFrustum(),y(A,R,O.camera,G,this.type)}O.isPointLightShadow!==!0&&this.type===bn&&M(O,R),O.needsUpdate=!1}c=this.type,m.needsUpdate=!1,i.setRenderTarget(x,v,w)};function M(b,A){const R=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new qe(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,R,d,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,R,p,_,null)}function S(b,A,R,x){let v=null;const w=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)v=w;else if(v=R.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const C=v.uuid,N=A.uuid;let L=u[C];L===void 0&&(L={},u[C]=L);let I=L[N];I===void 0&&(I=v.clone(),L[N]=I,A.addEventListener("dispose",U)),v=I}if(v.visible=A.visible,v.wireframe=A.wireframe,x===bn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const C=i.properties.get(v);C.light=R}return v}function y(b,A,R,x,v){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===bn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const N=t.update(b),L=b.material;if(Array.isArray(L)){const I=N.groups;for(let z=0,G=I.length;z<G;z++){const O=I[z],K=L[O.materialIndex];if(K&&K.visible){const W=S(b,K,x,v);b.onBeforeShadow(i,b,A,R,N,W,O),i.renderBufferDirect(R,null,N,W,b,O),b.onAfterShadow(i,b,A,R,N,W,O)}}}else if(L.visible){const I=S(b,L,x,v);b.onBeforeShadow(i,b,A,R,N,I,null),i.renderBufferDirect(R,null,N,I,b,null),b.onAfterShadow(i,b,A,R,N,I,null)}}const C=b.children;for(let N=0,L=C.length;N<L;N++)y(C[N],A,R,x,v)}function U(b){b.target.removeEventListener("dispose",U);for(const R in u){const x=u[R],v=b.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}const zm={[Qr]:to,[eo]:so,[no]:ro,[Pi]:io,[to]:Qr,[so]:eo,[ro]:no,[io]:Pi};function Bm(i,t){function e(){let F=!1;const ct=new Qt;let Z=null;const tt=new Qt(0,0,0,0);return{setMask:function(ft){Z!==ft&&!F&&(i.colorMask(ft,ft,ft,ft),Z=ft)},setLocked:function(ft){F=ft},setClear:function(ft,ht,Nt,le,Se){Se===!0&&(ft*=le,ht*=le,Nt*=le),ct.set(ft,ht,Nt,le),tt.equals(ct)===!1&&(i.clearColor(ft,ht,Nt,le),tt.copy(ct))},reset:function(){F=!1,Z=null,tt.set(-1,0,0,0)}}}function n(){let F=!1,ct=!1,Z=null,tt=null,ft=null;return{setReversed:function(ht){if(ct!==ht){const Nt=t.get("EXT_clip_control");ct?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const le=ft;ft=null,this.setClear(le)}ct=ht},getReversed:function(){return ct},setTest:function(ht){ht?nt(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(ht){Z!==ht&&!F&&(i.depthMask(ht),Z=ht)},setFunc:function(ht){if(ct&&(ht=zm[ht]),tt!==ht){switch(ht){case Qr:i.depthFunc(i.NEVER);break;case to:i.depthFunc(i.ALWAYS);break;case eo:i.depthFunc(i.LESS);break;case Pi:i.depthFunc(i.LEQUAL);break;case no:i.depthFunc(i.EQUAL);break;case io:i.depthFunc(i.GEQUAL);break;case so:i.depthFunc(i.GREATER);break;case ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=ht}},setLocked:function(ht){F=ht},setClear:function(ht){ft!==ht&&(ct&&(ht=1-ht),i.clearDepth(ht),ft=ht)},reset:function(){F=!1,Z=null,tt=null,ft=null,ct=!1}}}function s(){let F=!1,ct=null,Z=null,tt=null,ft=null,ht=null,Nt=null,le=null,Se=null;return{setTest:function(Zt){F||(Zt?nt(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(Zt){ct!==Zt&&!F&&(i.stencilMask(Zt),ct=Zt)},setFunc:function(Zt,Ye,mn){(Z!==Zt||tt!==Ye||ft!==mn)&&(i.stencilFunc(Zt,Ye,mn),Z=Zt,tt=Ye,ft=mn)},setOp:function(Zt,Ye,mn){(ht!==Zt||Nt!==Ye||le!==mn)&&(i.stencilOp(Zt,Ye,mn),ht=Zt,Nt=Ye,le=mn)},setLocked:function(Zt){F=Zt},setClear:function(Zt){Se!==Zt&&(i.clearStencil(Zt),Se=Zt)},reset:function(){F=!1,ct=null,Z=null,tt=null,ft=null,ht=null,Nt=null,le=null,Se=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,u=new WeakMap;let f={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,c=null,M=null,S=null,y=null,U=null,b=null,A=new Mt(0,0,0),R=0,x=!1,v=null,w=null,C=null,N=null,L=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(O)[1]),z=G>=1):O.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),z=G>=2);let K=null,W={};const V=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),pt=new Qt().fromArray(V),Y=new Qt().fromArray(et);function J(F,ct,Z,tt){const ft=new Uint8Array(4),ht=i.createTexture();i.bindTexture(F,ht),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<Z;Nt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ct+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ht}const ot={};ot[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),o.setFunc(Pi),Ht(!1),Vt(xa),nt(i.CULL_FACE),B(wn);function nt(F){f[F]!==!0&&(i.enable(F),f[F]=!0)}function _t(F){f[F]!==!1&&(i.disable(F),f[F]=!1)}function yt(F,ct){return h[F]!==ct?(i.bindFramebuffer(F,ct),h[F]=ct,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ct),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Lt(F,ct){let Z=p,tt=!1;if(F){Z=d.get(ct),Z===void 0&&(Z=[],d.set(ct,Z));const ft=F.textures;if(Z.length!==ft.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Nt=ft.length;ht<Nt;ht++)Z[ht]=i.COLOR_ATTACHMENT0+ht;Z.length=ft.length,tt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,tt=!0);tt&&i.drawBuffers(Z)}function ie(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const kt={[Qn]:i.FUNC_ADD,[qc]:i.FUNC_SUBTRACT,[Yc]:i.FUNC_REVERSE_SUBTRACT};kt[$c]=i.MIN,kt[Kc]=i.MAX;const ae={[Jc]:i.ZERO,[Zc]:i.ONE,[jc]:i.SRC_COLOR,[Zr]:i.SRC_ALPHA,[su]:i.SRC_ALPHA_SATURATE,[nu]:i.DST_COLOR,[tu]:i.DST_ALPHA,[Qc]:i.ONE_MINUS_SRC_COLOR,[jr]:i.ONE_MINUS_SRC_ALPHA,[iu]:i.ONE_MINUS_DST_COLOR,[eu]:i.ONE_MINUS_DST_ALPHA,[ru]:i.CONSTANT_COLOR,[ou]:i.ONE_MINUS_CONSTANT_COLOR,[au]:i.CONSTANT_ALPHA,[lu]:i.ONE_MINUS_CONSTANT_ALPHA};function B(F,ct,Z,tt,ft,ht,Nt,le,Se,Zt){if(F===wn){_===!0&&(_t(i.BLEND),_=!1);return}if(_===!1&&(nt(i.BLEND),_=!0),F!==Xc){if(F!==m||Zt!==x){if((c!==Qn||y!==Qn)&&(i.blendEquation(i.FUNC_ADD),c=Qn,y=Qn),Zt)switch(F){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case er:i.blendFunc(i.ONE,i.ONE);break;case Ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ya:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case er:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ya:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,S=null,U=null,b=null,A.set(0,0,0),R=0,m=F,x=Zt}return}ft=ft||ct,ht=ht||Z,Nt=Nt||tt,(ct!==c||ft!==y)&&(i.blendEquationSeparate(kt[ct],kt[ft]),c=ct,y=ft),(Z!==M||tt!==S||ht!==U||Nt!==b)&&(i.blendFuncSeparate(ae[Z],ae[tt],ae[ht],ae[Nt]),M=Z,S=tt,U=ht,b=Nt),(le.equals(A)===!1||Se!==R)&&(i.blendColor(le.r,le.g,le.b,Se),A.copy(le),R=Se),m=F,x=!1}function ye(F,ct){F.side===Ne?_t(i.CULL_FACE):nt(i.CULL_FACE);let Z=F.side===De;ct&&(Z=!Z),Ht(Z),F.blending===wi&&F.transparent===!1?B(wn):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const tt=F.stencilWrite;a.setTest(tt),tt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),se(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(F){v!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),v=F)}function Vt(F){F!==Gc?(nt(i.CULL_FACE),F!==w&&(F===xa?i.cullFace(i.BACK):F===Wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),w=F}function Rt(F){F!==C&&(z&&i.lineWidth(F),C=F)}function se(F,ct,Z){F?(nt(i.POLYGON_OFFSET_FILL),(N!==ct||L!==Z)&&(i.polygonOffset(ct,Z),N=ct,L=Z)):_t(i.POLYGON_OFFSET_FILL)}function Ct(F){F?nt(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function D(F){F===void 0&&(F=i.TEXTURE0+I-1),K!==F&&(i.activeTexture(F),K=F)}function E(F,ct,Z){Z===void 0&&(K===null?Z=i.TEXTURE0+I-1:Z=K);let tt=W[Z];tt===void 0&&(tt={type:void 0,texture:void 0},W[Z]=tt),(tt.type!==F||tt.texture!==ct)&&(K!==Z&&(i.activeTexture(Z),K=Z),i.bindTexture(F,ct||ot[F]),tt.type=F,tt.texture=ct)}function X(){const F=W[K];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(F){pt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),pt.copy(F))}function vt(F){Y.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function Gt(F,ct){let Z=u.get(ct);Z===void 0&&(Z=new WeakMap,u.set(ct,Z));let tt=Z.get(F);tt===void 0&&(tt=i.getUniformBlockIndex(ct,F.name),Z.set(F,tt))}function zt(F,ct){const tt=u.get(ct).get(F);l.get(ct)!==tt&&(i.uniformBlockBinding(ct,tt,F.__bindingPointIndex),l.set(ct,tt))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},K=null,W={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,c=null,M=null,S=null,y=null,U=null,b=null,A=new Mt(0,0,0),R=0,x=!1,v=null,w=null,C=null,N=null,L=null,pt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:_t,bindFramebuffer:yt,drawBuffers:Lt,useProgram:ie,setBlending:B,setMaterial:ye,setFlipSided:Ht,setCullFace:Vt,setLineWidth:Rt,setPolygonOffset:se,setScissorTest:Ct,activeTexture:D,bindTexture:E,unbindTexture:X,compressedTexImage2D:Q,compressedTexImage3D:it,texImage2D:gt,texImage3D:Pt,updateUBOMapping:Gt,uniformBlockBinding:zt,texStorage2D:Xt,texStorage3D:st,texSubImage2D:j,texSubImage3D:Tt,compressedTexSubImage2D:ut,compressedTexSubImage3D:mt,scissor:Dt,viewport:vt,reset:te}}function gl(i,t,e,n){const s=km(n);switch(e){case Zl:return i*t;case Ql:return i*t;case tc:return i*t*2;case Yo:return i*t/s.components*s.byteLength;case $o:return i*t/s.components*s.byteLength;case ec:return i*t*2/s.components*s.byteLength;case Ko:return i*t*2/s.components*s.byteLength;case jl:return i*t*3/s.components*s.byteLength;case Qe:return i*t*4/s.components*s.byteLength;case Jo:return i*t*4/s.components*s.byteLength;case Ys:case $s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ks:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:case po:return Math.max(i,16)*Math.max(t,8)/4;case uo:case fo:return Math.max(i,8)*Math.max(t,8)/2;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Lo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zs:case Do:case Io:return Math.ceil(i/4)*Math.ceil(t/4)*16;case nc:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case No:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function km(i){switch(i){case Cn:case $l:return{byteLength:1,components:1};case ls:case Kl:case fn:return{byteLength:2,components:1};case Xo:case qo:return{byteLength:2,components:4};case ii:case Wo:case hn:return{byteLength:4,components:1};case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Hm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new at,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,E){return p?new OffscreenCanvas(D,E):ir("canvas")}function _(D,E,X){let Q=1;const it=Ct(D);if((it.width>X||it.height>X)&&(Q=X/Math.max(it.width,it.height)),Q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const j=Math.floor(Q*it.width),Tt=Math.floor(Q*it.height);h===void 0&&(h=g(j,Tt));const ut=E?g(j,Tt):h;return ut.width=j,ut.height=Tt,ut.getContext("2d").drawImage(D,0,0,j,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+j+"x"+Tt+")."),ut}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),D;return D}function m(D){return D.generateMipmaps}function c(D){i.generateMipmap(D)}function M(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(D,E,X,Q,it=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let j=E;if(E===i.RED&&(X===i.FLOAT&&(j=i.R32F),X===i.HALF_FLOAT&&(j=i.R16F),X===i.UNSIGNED_BYTE&&(j=i.R8)),E===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.R8UI),X===i.UNSIGNED_SHORT&&(j=i.R16UI),X===i.UNSIGNED_INT&&(j=i.R32UI),X===i.BYTE&&(j=i.R8I),X===i.SHORT&&(j=i.R16I),X===i.INT&&(j=i.R32I)),E===i.RG&&(X===i.FLOAT&&(j=i.RG32F),X===i.HALF_FLOAT&&(j=i.RG16F),X===i.UNSIGNED_BYTE&&(j=i.RG8)),E===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.RG8UI),X===i.UNSIGNED_SHORT&&(j=i.RG16UI),X===i.UNSIGNED_INT&&(j=i.RG32UI),X===i.BYTE&&(j=i.RG8I),X===i.SHORT&&(j=i.RG16I),X===i.INT&&(j=i.RG32I)),E===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.RGB8UI),X===i.UNSIGNED_SHORT&&(j=i.RGB16UI),X===i.UNSIGNED_INT&&(j=i.RGB32UI),X===i.BYTE&&(j=i.RGB8I),X===i.SHORT&&(j=i.RGB16I),X===i.INT&&(j=i.RGB32I)),E===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),X===i.UNSIGNED_INT&&(j=i.RGBA32UI),X===i.BYTE&&(j=i.RGBA8I),X===i.SHORT&&(j=i.RGBA16I),X===i.INT&&(j=i.RGBA32I)),E===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),E===i.RGBA){const Tt=it?cr:Wt.getTransfer(Q);X===i.FLOAT&&(j=i.RGBA32F),X===i.HALF_FLOAT&&(j=i.RGBA16F),X===i.UNSIGNED_BYTE&&(j=Tt===jt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(D,E){let X;return D?E===null||E===ii||E===Ii?X=i.DEPTH24_STENCIL8:E===hn?X=i.DEPTH32F_STENCIL8:E===ls&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ii||E===Ii?X=i.DEPTH_COMPONENT24:E===hn?X=i.DEPTH_COMPONENT32F:E===ls&&(X=i.DEPTH_COMPONENT16),X}function U(D,E){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==He&&D.minFilter!==un?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function b(D){const E=D.target;E.removeEventListener("dispose",b),R(E),E.isVideoTexture&&f.delete(E)}function A(D){const E=D.target;E.removeEventListener("dispose",A),v(E)}function R(D){const E=n.get(D);if(E.__webglInit===void 0)return;const X=D.source,Q=d.get(X);if(Q){const it=Q[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&x(D),Object.keys(Q).length===0&&d.delete(X)}n.remove(D)}function x(D){const E=n.get(D);i.deleteTexture(E.__webglTexture);const X=D.source,Q=d.get(X);delete Q[E.__cacheKey],o.memory.textures--}function v(D){const E=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let it=0;it<E.__webglFramebuffer[Q].length;it++)i.deleteFramebuffer(E.__webglFramebuffer[Q][it]);else i.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[Q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=D.textures;for(let Q=0,it=X.length;Q<it;Q++){const j=n.get(X[Q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(X[Q])}n.remove(D)}let w=0;function C(){w=0}function N(){const D=w;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),w+=1,D}function L(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function I(D,E){const X=n.get(D);if(D.isVideoTexture&&Rt(D),D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){const Q=D.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(X,D,E);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+E)}function z(D,E){const X=n.get(D);if(D.version>0&&X.__version!==D.version){Y(X,D,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+E)}function G(D,E){const X=n.get(D);if(D.version>0&&X.__version!==D.version){Y(X,D,E);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+E)}function O(D,E){const X=n.get(D);if(D.version>0&&X.__version!==D.version){J(X,D,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+E)}const K={[lo]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[co]:i.MIRRORED_REPEAT},W={[He]:i.NEAREST,[du]:i.NEAREST_MIPMAP_NEAREST,[ys]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[fr]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},V={[gu]:i.NEVER,[Su]:i.ALWAYS,[vu]:i.LESS,[sc]:i.LEQUAL,[_u]:i.EQUAL,[yu]:i.GEQUAL,[xu]:i.GREATER,[Mu]:i.NOTEQUAL};function et(D,E){if(E.type===hn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===un||E.magFilter===fr||E.magFilter===ys||E.magFilter===ni||E.minFilter===un||E.minFilter===fr||E.minFilter===ys||E.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,K[E.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,K[E.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,K[E.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,W[E.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,W[E.minFilter]),E.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,V[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===He||E.minFilter!==ys&&E.minFilter!==ni||E.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function pt(D,E){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",b));const Q=E.source;let it=d.get(Q);it===void 0&&(it={},d.set(Q,it));const j=L(E);if(j!==D.__cacheKey){it[j]===void 0&&(it[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),it[j].usedTimes++;const Tt=it[D.__cacheKey];Tt!==void 0&&(it[D.__cacheKey].usedTimes--,Tt.usedTimes===0&&x(E)),D.__cacheKey=j,D.__webglTexture=it[j].texture}return X}function Y(D,E,X){let Q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=i.TEXTURE_3D);const it=pt(D,E),j=E.source;e.bindTexture(Q,D.__webglTexture,i.TEXTURE0+X);const Tt=n.get(j);if(j.version!==Tt.__version||it===!0){e.activeTexture(i.TEXTURE0+X);const ut=Wt.getPrimaries(Wt.workingColorSpace),mt=E.colorSpace===Hn?null:Wt.getPrimaries(E.colorSpace),Xt=E.colorSpace===Hn||ut===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let st=_(E.image,!1,s.maxTextureSize);st=se(E,st);const gt=r.convert(E.format,E.colorSpace),Pt=r.convert(E.type);let Dt=S(E.internalFormat,gt,Pt,E.colorSpace,E.isVideoTexture);et(Q,E);let vt;const Gt=E.mipmaps,zt=E.isVideoTexture!==!0,te=Tt.__version===void 0||it===!0,F=j.dataReady,ct=U(E,st);if(E.isDepthTexture)Dt=y(E.format===Ui,E.type),te&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Dt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Dt,st.width,st.height,0,gt,Pt,null));else if(E.isDataTexture)if(Gt.length>0){zt&&te&&e.texStorage2D(i.TEXTURE_2D,ct,Dt,Gt[0].width,Gt[0].height);for(let Z=0,tt=Gt.length;Z<tt;Z++)vt=Gt[Z],zt?F&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,vt.width,vt.height,gt,Pt,vt.data):e.texImage2D(i.TEXTURE_2D,Z,Dt,vt.width,vt.height,0,gt,Pt,vt.data);E.generateMipmaps=!1}else zt?(te&&e.texStorage2D(i.TEXTURE_2D,ct,Dt,st.width,st.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,gt,Pt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,st.width,st.height,0,gt,Pt,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){zt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Dt,Gt[0].width,Gt[0].height,st.depth);for(let Z=0,tt=Gt.length;Z<tt;Z++)if(vt=Gt[Z],E.format!==Qe)if(gt!==null)if(zt){if(F)if(E.layerUpdates.size>0){const ft=gl(vt.width,vt.height,E.format,E.type);for(const ht of E.layerUpdates){const Nt=vt.data.subarray(ht*ft/vt.data.BYTES_PER_ELEMENT,(ht+1)*ft/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ht,vt.width,vt.height,1,gt,Nt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,vt.width,vt.height,st.depth,gt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Dt,vt.width,vt.height,st.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,vt.width,vt.height,st.depth,gt,Pt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Dt,vt.width,vt.height,st.depth,0,gt,Pt,vt.data)}else{zt&&te&&e.texStorage2D(i.TEXTURE_2D,ct,Dt,Gt[0].width,Gt[0].height);for(let Z=0,tt=Gt.length;Z<tt;Z++)vt=Gt[Z],E.format!==Qe?gt!==null?zt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,vt.width,vt.height,gt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Dt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?F&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,vt.width,vt.height,gt,Pt,vt.data):e.texImage2D(i.TEXTURE_2D,Z,Dt,vt.width,vt.height,0,gt,Pt,vt.data)}else if(E.isDataArrayTexture)if(zt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Dt,st.width,st.height,st.depth),F)if(E.layerUpdates.size>0){const Z=gl(st.width,st.height,E.format,E.type);for(const tt of E.layerUpdates){const ft=st.data.subarray(tt*Z/st.data.BYTES_PER_ELEMENT,(tt+1)*Z/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,gt,Pt,ft)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,gt,Pt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,st.width,st.height,st.depth,0,gt,Pt,st.data);else if(E.isData3DTexture)zt?(te&&e.texStorage3D(i.TEXTURE_3D,ct,Dt,st.width,st.height,st.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,gt,Pt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,st.width,st.height,st.depth,0,gt,Pt,st.data);else if(E.isFramebufferTexture){if(te)if(zt)e.texStorage2D(i.TEXTURE_2D,ct,Dt,st.width,st.height);else{let Z=st.width,tt=st.height;for(let ft=0;ft<ct;ft++)e.texImage2D(i.TEXTURE_2D,ft,Dt,Z,tt,0,gt,Pt,null),Z>>=1,tt>>=1}}else if(Gt.length>0){if(zt&&te){const Z=Ct(Gt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Dt,Z.width,Z.height)}for(let Z=0,tt=Gt.length;Z<tt;Z++)vt=Gt[Z],zt?F&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,gt,Pt,vt):e.texImage2D(i.TEXTURE_2D,Z,Dt,gt,Pt,vt);E.generateMipmaps=!1}else if(zt){if(te){const Z=Ct(st);e.texStorage2D(i.TEXTURE_2D,ct,Dt,Z.width,Z.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Pt,st)}else e.texImage2D(i.TEXTURE_2D,0,Dt,gt,Pt,st);m(E)&&c(Q),Tt.__version=j.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function J(D,E,X){if(E.image.length!==6)return;const Q=pt(D,E),it=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+X);const j=n.get(it);if(it.version!==j.__version||Q===!0){e.activeTexture(i.TEXTURE0+X);const Tt=Wt.getPrimaries(Wt.workingColorSpace),ut=E.colorSpace===Hn?null:Wt.getPrimaries(E.colorSpace),mt=E.colorSpace===Hn||Tt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Xt=E.isCompressedTexture||E.image[0].isCompressedTexture,st=E.image[0]&&E.image[0].isDataTexture,gt=[];for(let tt=0;tt<6;tt++)!Xt&&!st?gt[tt]=_(E.image[tt],!0,s.maxCubemapSize):gt[tt]=st?E.image[tt].image:E.image[tt],gt[tt]=se(E,gt[tt]);const Pt=gt[0],Dt=r.convert(E.format,E.colorSpace),vt=r.convert(E.type),Gt=S(E.internalFormat,Dt,vt,E.colorSpace),zt=E.isVideoTexture!==!0,te=j.__version===void 0||Q===!0,F=it.dataReady;let ct=U(E,Pt);et(i.TEXTURE_CUBE_MAP,E);let Z;if(Xt){zt&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Gt,Pt.width,Pt.height);for(let tt=0;tt<6;tt++){Z=gt[tt].mipmaps;for(let ft=0;ft<Z.length;ft++){const ht=Z[ft];E.format!==Qe?Dt!==null?zt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,ht.width,ht.height,Dt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,ht.width,ht.height,Dt,vt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Gt,ht.width,ht.height,0,Dt,vt,ht.data)}}}else{if(Z=E.mipmaps,zt&&te){Z.length>0&&ct++;const tt=Ct(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Gt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,gt[tt].width,gt[tt].height,Dt,vt,gt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Gt,gt[tt].width,gt[tt].height,0,Dt,vt,gt[tt].data);for(let ft=0;ft<Z.length;ft++){const Nt=Z[ft].image[tt].image;zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,Nt.width,Nt.height,Dt,vt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Gt,Nt.width,Nt.height,0,Dt,vt,Nt.data)}}else{zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,vt,gt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Gt,Dt,vt,gt[tt]);for(let ft=0;ft<Z.length;ft++){const ht=Z[ft];zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,Dt,vt,ht.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Gt,Dt,vt,ht.image[tt])}}}m(E)&&c(i.TEXTURE_CUBE_MAP),j.__version=it.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ot(D,E,X,Q,it,j){const Tt=r.convert(X.format,X.colorSpace),ut=r.convert(X.type),mt=S(X.internalFormat,Tt,ut,X.colorSpace),Xt=n.get(E),st=n.get(X);if(st.__renderTarget=E,!Xt.__hasExternalTextures){const gt=Math.max(1,E.width>>j),Pt=Math.max(1,E.height>>j);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,j,mt,gt,Pt,E.depth,0,Tt,ut,null):e.texImage2D(it,j,mt,gt,Pt,0,Tt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Vt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,it,st.__webglTexture,0,Ht(E)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,it,st.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(D,E,X){if(i.bindRenderbuffer(i.RENDERBUFFER,D),E.depthBuffer){const Q=E.depthTexture,it=Q&&Q.isDepthTexture?Q.type:null,j=y(E.stencilBuffer,it),Tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Ht(E);Vt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,j,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,j,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,j,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,D)}else{const Q=E.textures;for(let it=0;it<Q.length;it++){const j=Q[it],Tt=r.convert(j.format,j.colorSpace),ut=r.convert(j.type),mt=S(j.internalFormat,Tt,ut,j.colorSpace),Xt=Ht(E);X&&Vt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,mt,E.width,E.height):Vt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,mt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,mt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),I(E.depthTexture,0);const it=Q.__webglTexture,j=Ht(E);if(E.depthTexture.format===Ti)Vt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(E.depthTexture.format===Ui)Vt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function yt(D){const E=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const Q=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const it=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",it)};Q.addEventListener("dispose",it),E.__depthDisposeCallback=it}E.__boundDepthTexture=Q}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");_t(E.__webglFramebuffer,D)}else if(X){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=i.createRenderbuffer(),nt(E.__webglDepthbuffer[Q],D,!1);else{const it=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),nt(E.__webglDepthbuffer,D,!1);else{const Q=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(D,E,X){const Q=n.get(D);E!==void 0&&ot(Q.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&yt(D)}function ie(D){const E=D.texture,X=n.get(D),Q=n.get(E);D.addEventListener("dispose",A);const it=D.textures,j=D.isWebGLCubeRenderTarget===!0,Tt=it.length>1;if(Tt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=E.version,o.memory.textures++),j){X.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[ut]=[];for(let mt=0;mt<E.mipmaps.length;mt++)X.__webglFramebuffer[ut][mt]=i.createFramebuffer()}else X.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)X.__webglFramebuffer[ut]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ut=0,mt=it.length;ut<mt;ut++){const Xt=n.get(it[ut]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Vt(D)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const mt=it[ut];X.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ut]);const Xt=r.convert(mt.format,mt.colorSpace),st=r.convert(mt.type),gt=S(mt.internalFormat,Xt,st,mt.colorSpace,D.isXRRenderTarget===!0),Pt=Ht(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,gt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,X.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(X.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),et(i.TEXTURE_CUBE_MAP,E);for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)ot(X.__webglFramebuffer[ut][mt],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt);else ot(X.__webglFramebuffer[ut],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(E)&&c(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ut=0,mt=it.length;ut<mt;ut++){const Xt=it[ut],st=n.get(Xt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),et(i.TEXTURE_2D,Xt),ot(X.__webglFramebuffer,D,Xt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Xt)&&c(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ut=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,Q.__webglTexture),et(ut,E),E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)ot(X.__webglFramebuffer[mt],D,E,i.COLOR_ATTACHMENT0,ut,mt);else ot(X.__webglFramebuffer,D,E,i.COLOR_ATTACHMENT0,ut,0);m(E)&&c(ut),e.unbindTexture()}D.depthBuffer&&yt(D)}function kt(D){const E=D.textures;for(let X=0,Q=E.length;X<Q;X++){const it=E[X];if(m(it)){const j=M(D),Tt=n.get(it).__webglTexture;e.bindTexture(j,Tt),c(j),e.unbindTexture()}}}const ae=[],B=[];function ye(D){if(D.samples>0){if(Vt(D)===!1){const E=D.textures,X=D.width,Q=D.height;let it=i.COLOR_BUFFER_BIT;const j=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(D),ut=E.length>1;if(ut)for(let mt=0;mt<E.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let mt=0;mt<E.length;mt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[mt]);const Xt=n.get(E[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,X,Q,0,0,X,Q,it,i.NEAREST),l===!0&&(ae.length=0,B.length=0,ae.push(i.COLOR_ATTACHMENT0+mt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ae.push(j),B.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let mt=0;mt<E.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[mt]);const Xt=n.get(E[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const E=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Ht(D){return Math.min(s.maxSamples,D.samples)}function Vt(D){const E=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Rt(D){const E=o.render.frame;f.get(D)!==E&&(f.set(D,E),D.update())}function se(D,E){const X=D.colorSpace,Q=D.format,it=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==Oi&&X!==Hn&&(Wt.getTransfer(X)===jt?(Q!==Qe||it!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function Ct(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=C,this.setTexture2D=I,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=O,this.rebindTextures=Lt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Vt}function Vm(i,t){function e(n,s=Hn){let r;const o=Wt.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$l)return i.BYTE;if(n===Kl)return i.SHORT;if(n===ls)return i.UNSIGNED_SHORT;if(n===Wo)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===Zl)return i.ALPHA;if(n===jl)return i.RGB;if(n===Qe)return i.RGBA;if(n===Ql)return i.LUMINANCE;if(n===tc)return i.LUMINANCE_ALPHA;if(n===Ti)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===Yo)return i.RED;if(n===$o)return i.RED_INTEGER;if(n===ec)return i.RG;if(n===Ko)return i.RG_INTEGER;if(n===Jo)return i.RGBA_INTEGER;if(n===Ys||n===$s||n===Ks||n===Js)if(o===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uo||n===ho||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mo||n===go||n===vo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mo||n===go)return o===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_o||n===xo||n===Mo||n===yo||n===So||n===bo||n===Eo||n===wo||n===To||n===Ao||n===Co||n===Ro||n===Po||n===Lo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_o)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===So)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Co)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Po)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zs||n===Do||n===Io)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zs)return o===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nc||n===Uo||n===No||n===Fo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===No)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ii?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Gm extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class wt extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wm={type:"move"};class kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),c=this._getHandJoint(u,_);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ym{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new we,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ge({vertexShader:Xm,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new Rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $m extends zi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,p=null,g=null;const _=new Ym,m=e.getContextAttributes();let c=null,M=null;const S=[],y=[],U=new at;let b=null;const A=new ke;A.viewport=new Qt;const R=new ke;R.viewport=new Qt;const x=[A,R],v=new Gm;let w=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=S[Y];return J===void 0&&(J=new kr,S[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=S[Y];return J===void 0&&(J=new kr,S[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=S[Y];return J===void 0&&(J=new kr,S[Y]=J),J.getHandSpace()};function N(Y){const J=y.indexOf(Y.inputSource);if(J===-1)return;const ot=S[J];ot!==void 0&&(ot.update(Y.inputSource,Y.frame,u||o),ot.dispatchEvent({type:Y.type,data:Y.inputSource}))}function L(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",I);for(let Y=0;Y<S.length;Y++){const J=y[Y];J!==null&&(y[Y]=null,S[Y].disconnect(J))}w=null,C=null,_.reset(),t.setRenderTarget(c),p=null,d=null,h=null,s=null,M=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(c=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",L),s.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new qe(p.framebufferWidth,p.framebufferHeight,{format:Qe,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ot=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?Ui:Ti,ot=m.stencil?Ii:ii);const _t={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(_t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new qe(d.textureWidth,d.textureHeight,{format:Qe,type:Cn,depthTexture:new gc(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function I(Y){for(let J=0;J<Y.removed.length;J++){const ot=Y.removed[J],nt=y.indexOf(ot);nt>=0&&(y[nt]=null,S[nt].disconnect(ot))}for(let J=0;J<Y.added.length;J++){const ot=Y.added[J];let nt=y.indexOf(ot);if(nt===-1){for(let yt=0;yt<S.length;yt++)if(yt>=y.length){y.push(ot),nt=yt;break}else if(y[yt]===null){y[yt]=ot,nt=yt;break}if(nt===-1)break}const _t=S[nt];_t&&_t.connect(ot)}}const z=new P,G=new P;function O(Y,J,ot){z.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(ot.matrixWorld);const nt=z.distanceTo(G),_t=J.projectionMatrix.elements,yt=ot.projectionMatrix.elements,Lt=_t[14]/(_t[10]-1),ie=_t[14]/(_t[10]+1),kt=(_t[9]+1)/_t[5],ae=(_t[9]-1)/_t[5],B=(_t[8]-1)/_t[0],ye=(yt[8]+1)/yt[0],Ht=Lt*B,Vt=Lt*ye,Rt=nt/(-B+ye),se=Rt*-B;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(se),Y.translateZ(Rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_t[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Ct=Lt+Rt,D=ie+Rt,E=Ht-se,X=Vt+(nt-se),Q=kt*ie/D*Ct,it=ae*ie/D*Ct;Y.projectionMatrix.makePerspective(E,X,Q,it,Ct,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function K(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let J=Y.near,ot=Y.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(ot=_.depthFar)),v.near=R.near=A.near=J,v.far=R.far=A.far=ot,(w!==v.near||C!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,C=v.far),A.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,v.layers.mask=A.layers.mask|R.layers.mask;const nt=Y.parent,_t=v.cameras;K(v,nt);for(let yt=0;yt<_t.length;yt++)K(_t[yt],nt);_t.length===2?O(v,A,R):v.projectionMatrix.copy(A.projectionMatrix),W(Y,v,nt)};function W(Y,J,ot){ot===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(ot.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=cs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let V=null;function et(Y,J){if(f=J.getViewerPose(u||o),g=J,f!==null){const ot=f.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let nt=!1;ot.length!==v.cameras.length&&(v.cameras.length=0,nt=!0);for(let yt=0;yt<ot.length;yt++){const Lt=ot[yt];let ie=null;if(p!==null)ie=p.getViewport(Lt);else{const ae=h.getViewSubImage(d,Lt);ie=ae.viewport,yt===0&&(t.setRenderTargetTextures(M,ae.colorTexture,d.ignoreDepthValues?void 0:ae.depthStencilTexture),t.setRenderTarget(M))}let kt=x[yt];kt===void 0&&(kt=new ke,kt.layers.enable(yt),kt.viewport=new Qt,x[yt]=kt),kt.matrix.fromArray(Lt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Lt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(ie.x,ie.y,ie.width,ie.height),yt===0&&(v.matrix.copy(kt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),nt===!0&&v.cameras.push(kt)}const _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")){const yt=h.getDepthInformation(ot[0]);yt&&yt.isValid&&yt.texture&&_.init(t,yt,s.renderState)}}for(let ot=0;ot<S.length;ot++){const nt=y[ot],_t=S[ot];nt!==null&&_t!==void 0&&_t.update(nt,J,u||o)}V&&V(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const pt=new mc;pt.setAnimationLoop(et),this.setAnimationLoop=function(Y){V=Y},this.dispose=function(){}}}const Zn=new sn,Km=new Jt;function Jm(i,t){function e(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function n(m,c){c.color.getRGB(m.fogColor.value,dc(i)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function s(m,c,M,S,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(m,c):c.isMeshToonMaterial?(r(m,c),h(m,c)):c.isMeshPhongMaterial?(r(m,c),f(m,c)):c.isMeshStandardMaterial?(r(m,c),d(m,c),c.isMeshPhysicalMaterial&&p(m,c,y)):c.isMeshMatcapMaterial?(r(m,c),g(m,c)):c.isMeshDepthMaterial?r(m,c):c.isMeshDistanceMaterial?(r(m,c),_(m,c)):c.isMeshNormalMaterial?r(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,M,S):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,e(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,e(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,e(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===De&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,e(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===De&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,e(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,e(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,e(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const M=t.get(c),S=M.envMap,y=M.envMapRotation;S&&(m.envMap.value=S,Zn.copy(y),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),m.envMapRotation.value.setFromMatrix4(Km.makeRotationFromEuler(Zn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,e(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,e(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,e(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,M,S){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*M,m.scale.value=S*.5,c.map&&(m.map.value=c.map,e(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,e(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,e(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,e(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function h(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function d(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,M){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===De&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,c){c.matcap&&(m.matcap.value=c.matcap)}function _(m,c){const M=t.get(c).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const y=S.program;n.uniformBlockBinding(M,y)}function u(M,S){let y=s[M.id];y===void 0&&(g(M),y=f(M),s[M.id]=y,M.addEventListener("dispose",m));const U=S.program;n.updateUBOMapping(M,U);const b=t.render.frame;r[M.id]!==b&&(d(M),r[M.id]=b)}function f(M){const S=h();M.__bindingPointIndex=S;const y=i.createBuffer(),U=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,U,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const S=s[M.id],y=M.uniforms,U=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let b=0,A=y.length;b<A;b++){const R=Array.isArray(y[b])?y[b]:[y[b]];for(let x=0,v=R.length;x<v;x++){const w=R[x];if(p(w,b,x,U)===!0){const C=w.__offset,N=Array.isArray(w.value)?w.value:[w.value];let L=0;for(let I=0;I<N.length;I++){const z=N[I],G=_(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,C+L,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):(z.toArray(w.__data,L),L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,S,y,U){const b=M.value,A=S+"_"+y;if(U[A]===void 0)return typeof b=="number"||typeof b=="boolean"?U[A]=b:U[A]=b.clone(),!0;{const R=U[A];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return U[A]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(M){const S=M.uniforms;let y=0;const U=16;for(let A=0,R=S.length;A<R;A++){const x=Array.isArray(S[A])?S[A]:[S[A]];for(let v=0,w=x.length;v<w;v++){const C=x[v],N=Array.isArray(C.value)?C.value:[C.value];for(let L=0,I=N.length;L<I;L++){const z=N[L],G=_(z),O=y%U,K=O%G.boundary,W=O+K;y+=K,W!==0&&U-W<G.storage&&(y+=U-W),C.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,y+=G.storage}}}const b=y%U;return b>0&&(y+=U-b),M.__size=y,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function c(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:u,dispose:c}}class jm{constructor(t={}){const{canvas:e=ku(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,c=null;const M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this.toneMapping=Gn,this.toneMappingExposure=1;const y=this;let U=!1,b=0,A=0,R=null,x=-1,v=null;const w=new Qt,C=new Qt;let N=null;const L=new Mt(0);let I=0,z=e.width,G=e.height,O=1,K=null,W=null;const V=new Qt(0,0,z,G),et=new Qt(0,0,z,G);let pt=!1;const Y=new Qo;let J=!1,ot=!1;const nt=new Jt,_t=new Jt,yt=new P,Lt=new Qt,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function ae(){return R===null?O:1}let B=n;function ye(T,k){return e.getContext(T,k)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vo}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ht,!1),B===null){const k="webgl2";if(B=ye(k,T),B===null)throw ye(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ht,Vt,Rt,se,Ct,D,E,X,Q,it,j,Tt,ut,mt,Xt,st,gt,Pt,Dt,vt,Gt,zt,te,F;function ct(){Ht=new ip(B),Ht.init(),zt=new Vm(B,Ht),Vt=new Zf(B,Ht,t,zt),Rt=new Bm(B,Ht),Vt.reverseDepthBuffer&&d&&Rt.buffers.depth.setReversed(!0),se=new op(B),Ct=new Em,D=new Hm(B,Ht,Rt,Ct,Vt,zt,se),E=new Qf(y),X=new np(y),Q=new dh(B),te=new Kf(B,Q),it=new sp(B,Q,se,te),j=new lp(B,it,Q,se),Dt=new ap(B,Vt,D),st=new jf(Ct),Tt=new bm(y,E,X,Ht,Vt,te,st),ut=new Jm(y,Ct),mt=new Tm,Xt=new Dm(Ht),Pt=new $f(y,E,X,Rt,j,p,l),gt=new Om(y,j,Vt),F=new Zm(B,se,Vt,Rt),vt=new Jf(B,Ht,se),Gt=new rp(B,Ht,se),se.programs=Tt.programs,y.capabilities=Vt,y.extensions=Ht,y.properties=Ct,y.renderLists=mt,y.shadowMap=gt,y.state=Rt,y.info=se}ct();const Z=new $m(y,B);this.xr=Z,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(z,G,!1))},this.getSize=function(T){return T.set(z,G)},this.setSize=function(T,k,q=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,G=k,e.width=Math.floor(T*O),e.height=Math.floor(k*O),q===!0&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(z*O,G*O).floor()},this.setDrawingBufferSize=function(T,k,q){z=T,G=k,O=q,e.width=Math.floor(T*q),e.height=Math.floor(k*q),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(V)},this.setViewport=function(T,k,q,$){T.isVector4?V.set(T.x,T.y,T.z,T.w):V.set(T,k,q,$),Rt.viewport(w.copy(V).multiplyScalar(O).round())},this.getScissor=function(T){return T.copy(et)},this.setScissor=function(T,k,q,$){T.isVector4?et.set(T.x,T.y,T.z,T.w):et.set(T,k,q,$),Rt.scissor(C.copy(et).multiplyScalar(O).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(T){Rt.setScissorTest(pt=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(T=!0,k=!0,q=!0){let $=0;if(T){let H=!1;if(R!==null){const rt=R.texture.format;H=rt===Jo||rt===Ko||rt===$o}if(H){const rt=R.texture.type,dt=rt===Cn||rt===ii||rt===ls||rt===Ii||rt===Xo||rt===qo,St=Pt.getClearColor(),bt=Pt.getClearAlpha(),It=St.r,Ft=St.g,Et=St.b;dt?(g[0]=It,g[1]=Ft,g[2]=Et,g[3]=bt,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=It,_[1]=Ft,_[2]=Et,_[3]=bt,B.clearBufferiv(B.COLOR,0,_))}else $|=B.COLOR_BUFFER_BIT}k&&($|=B.DEPTH_BUFFER_BIT),q&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),mt.dispose(),Xt.dispose(),Ct.dispose(),E.dispose(),X.dispose(),j.dispose(),te.dispose(),F.dispose(),Tt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",ha),Z.removeEventListener("sessionend",da),Xn.stop()};function tt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const T=se.autoReset,k=gt.enabled,q=gt.autoUpdate,$=gt.needsUpdate,H=gt.type;ct(),se.autoReset=T,gt.enabled=k,gt.autoUpdate=q,gt.needsUpdate=$,gt.type=H}function ht(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Nt(T){const k=T.target;k.removeEventListener("dispose",Nt),le(k)}function le(T){Se(T),Ct.remove(T)}function Se(T){const k=Ct.get(T).programs;k!==void 0&&(k.forEach(function(q){Tt.releaseProgram(q)}),T.isShaderMaterial&&Tt.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,q,$,H,rt){k===null&&(k=ie);const dt=H.isMesh&&H.matrixWorld.determinant()<0,St=kc(T,k,q,$,H);Rt.setMaterial($,dt);let bt=q.index,It=1;if($.wireframe===!0){if(bt=it.getWireframeAttribute(q),bt===void 0)return;It=2}const Ft=q.drawRange,Et=q.attributes.position;let qt=Ft.start*It,ee=(Ft.start+Ft.count)*It;rt!==null&&(qt=Math.max(qt,rt.start*It),ee=Math.min(ee,(rt.start+rt.count)*It)),bt!==null?(qt=Math.max(qt,0),ee=Math.min(ee,bt.count)):Et!=null&&(qt=Math.max(qt,0),ee=Math.min(ee,Et.count));const re=ee-qt;if(re<0||re===1/0)return;te.setup(H,$,St,q,bt);let Ue,$t=vt;if(bt!==null&&(Ue=Q.get(bt),$t=Gt,$t.setIndex(Ue)),H.isMesh)$.wireframe===!0?(Rt.setLineWidth($.wireframeLinewidth*ae()),$t.setMode(B.LINES)):$t.setMode(B.TRIANGLES);else if(H.isLine){let At=$.linewidth;At===void 0&&(At=1),Rt.setLineWidth(At*ae()),H.isLineSegments?$t.setMode(B.LINES):H.isLineLoop?$t.setMode(B.LINE_LOOP):$t.setMode(B.LINE_STRIP)}else H.isPoints?$t.setMode(B.POINTS):H.isSprite&&$t.setMode(B.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)$t.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))$t.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const At=H._multiDrawStarts,gn=H._multiDrawCounts,Kt=H._multiDrawCount,$e=bt?Q.get(bt).bytesPerElement:1,ri=Ct.get($).currentProgram.getUniforms();for(let Oe=0;Oe<Kt;Oe++)ri.setValue(B,"_gl_DrawID",Oe),$t.render(At[Oe]/$e,gn[Oe])}else if(H.isInstancedMesh)$t.renderInstances(qt,re,H.count);else if(q.isInstancedBufferGeometry){const At=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,gn=Math.min(q.instanceCount,At);$t.renderInstances(qt,re,gn)}else $t.render(qt,re)};function Zt(T,k,q){T.transparent===!0&&T.side===Ne&&T.forceSinglePass===!1?(T.side=De,T.needsUpdate=!0,Ms(T,k,q),T.side=Wn,T.needsUpdate=!0,Ms(T,k,q),T.side=Ne):Ms(T,k,q)}this.compile=function(T,k,q=null){q===null&&(q=T),c=Xt.get(q),c.init(k),S.push(c),q.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(c.pushLight(H),H.castShadow&&c.pushShadow(H))}),T!==q&&T.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(c.pushLight(H),H.castShadow&&c.pushShadow(H))}),c.setupLights();const $=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const rt=H.material;if(rt)if(Array.isArray(rt))for(let dt=0;dt<rt.length;dt++){const St=rt[dt];Zt(St,q,H),$.add(St)}else Zt(rt,q,H),$.add(rt)}),S.pop(),c=null,$},this.compileAsync=function(T,k,q=null){const $=this.compile(T,k,q);return new Promise(H=>{function rt(){if($.forEach(function(dt){Ct.get(dt).currentProgram.isReady()&&$.delete(dt)}),$.size===0){H(T);return}setTimeout(rt,10)}Ht.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Ye=null;function mn(T){Ye&&Ye(T)}function ha(){Xn.stop()}function da(){Xn.start()}const Xn=new mc;Xn.setAnimationLoop(mn),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(T){Ye=T,Z.setAnimationLoop(T),T===null?Xn.stop():Xn.start()},Z.addEventListener("sessionstart",ha),Z.addEventListener("sessionend",da),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(k),k=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,k,R),c=Xt.get(T,S.length),c.init(k),S.push(c),_t.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(_t),ot=this.localClippingEnabled,J=st.init(this.clippingPlanes,ot),m=mt.get(T,M.length),m.init(),M.push(m),Z.enabled===!0&&Z.isPresenting===!0){const rt=y.xr.getDepthSensingMesh();rt!==null&&dr(rt,k,-1/0,y.sortObjects)}dr(T,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(K,W),kt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,kt&&Pt.addToRenderList(m,T),this.info.render.frame++,J===!0&&st.beginShadows();const q=c.state.shadowsArray;gt.render(q,T,k),J===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,H=m.transmissive;if(c.setupLights(),k.isArrayCamera){const rt=k.cameras;if(H.length>0)for(let dt=0,St=rt.length;dt<St;dt++){const bt=rt[dt];pa($,H,T,bt)}kt&&Pt.render(T);for(let dt=0,St=rt.length;dt<St;dt++){const bt=rt[dt];fa(m,T,bt,bt.viewport)}}else H.length>0&&pa($,H,T,k),kt&&Pt.render(T),fa(m,T,k);R!==null&&(D.updateMultisampleRenderTarget(R),D.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,k),te.resetDefaultState(),x=-1,v=null,S.pop(),S.length>0?(c=S[S.length-1],J===!0&&st.setGlobalState(y.clippingPlanes,c.state.camera)):c=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function dr(T,k,q,$){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)c.pushLight(T),T.castShadow&&c.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){$&&Lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_t);const dt=j.update(T),St=T.material;St.visible&&m.push(T,dt,St,q,Lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const dt=j.update(T),St=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Lt.copy(T.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Lt.copy(dt.boundingSphere.center)),Lt.applyMatrix4(T.matrixWorld).applyMatrix4(_t)),Array.isArray(St)){const bt=dt.groups;for(let It=0,Ft=bt.length;It<Ft;It++){const Et=bt[It],qt=St[Et.materialIndex];qt&&qt.visible&&m.push(T,dt,qt,q,Lt.z,Et)}}else St.visible&&m.push(T,dt,St,q,Lt.z,null)}}const rt=T.children;for(let dt=0,St=rt.length;dt<St;dt++)dr(rt[dt],k,q,$)}function fa(T,k,q,$){const H=T.opaque,rt=T.transmissive,dt=T.transparent;c.setupLightsView(q),J===!0&&st.setGlobalState(y.clippingPlanes,q),$&&Rt.viewport(w.copy($)),H.length>0&&xs(H,k,q),rt.length>0&&xs(rt,k,q),dt.length>0&&xs(dt,k,q),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function pa(T,k,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[$.id]===void 0&&(c.state.transmissionRenderTarget[$.id]=new qe(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?fn:Cn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const rt=c.state.transmissionRenderTarget[$.id],dt=$.viewport||w;rt.setSize(dt.z,dt.w);const St=y.getRenderTarget();y.setRenderTarget(rt),y.getClearColor(L),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear(),kt&&Pt.render(q);const bt=y.toneMapping;y.toneMapping=Gn;const It=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),c.setupLightsView($),J===!0&&st.setGlobalState(y.clippingPlanes,$),xs(T,q,$),D.updateMultisampleRenderTarget(rt),D.updateRenderTargetMipmap(rt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Et=0,qt=k.length;Et<qt;Et++){const ee=k[Et],re=ee.object,Ue=ee.geometry,$t=ee.material,At=ee.group;if($t.side===Ne&&re.layers.test($.layers)){const gn=$t.side;$t.side=De,$t.needsUpdate=!0,ma(re,q,$,Ue,$t,At),$t.side=gn,$t.needsUpdate=!0,Ft=!0}}Ft===!0&&(D.updateMultisampleRenderTarget(rt),D.updateRenderTargetMipmap(rt))}y.setRenderTarget(St),y.setClearColor(L,I),It!==void 0&&($.viewport=It),y.toneMapping=bt}function xs(T,k,q){const $=k.isScene===!0?k.overrideMaterial:null;for(let H=0,rt=T.length;H<rt;H++){const dt=T[H],St=dt.object,bt=dt.geometry,It=$===null?dt.material:$,Ft=dt.group;St.layers.test(q.layers)&&ma(St,k,q,bt,It,Ft)}}function ma(T,k,q,$,H,rt){T.onBeforeRender(y,k,q,$,H,rt),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(y,k,q,$,T,rt),H.transparent===!0&&H.side===Ne&&H.forceSinglePass===!1?(H.side=De,H.needsUpdate=!0,y.renderBufferDirect(q,k,$,H,T,rt),H.side=Wn,H.needsUpdate=!0,y.renderBufferDirect(q,k,$,H,T,rt),H.side=Ne):y.renderBufferDirect(q,k,$,H,T,rt),T.onAfterRender(y,k,q,$,H,rt)}function Ms(T,k,q){k.isScene!==!0&&(k=ie);const $=Ct.get(T),H=c.state.lights,rt=c.state.shadowsArray,dt=H.state.version,St=Tt.getParameters(T,H.state,rt,k,q),bt=Tt.getProgramCacheKey(St);let It=$.programs;$.environment=T.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(T.isMeshStandardMaterial?X:E).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,It===void 0&&(T.addEventListener("dispose",Nt),It=new Map,$.programs=It);let Ft=It.get(bt);if(Ft!==void 0){if($.currentProgram===Ft&&$.lightsStateVersion===dt)return va(T,St),Ft}else St.uniforms=Tt.getUniforms(T),T.onBeforeCompile(St,y),Ft=Tt.acquireProgram(St,bt),It.set(bt,Ft),$.uniforms=St.uniforms;const Et=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Et.clippingPlanes=st.uniform),va(T,St),$.needsLights=Vc(T),$.lightsStateVersion=dt,$.needsLights&&(Et.ambientLightColor.value=H.state.ambient,Et.lightProbe.value=H.state.probe,Et.directionalLights.value=H.state.directional,Et.directionalLightShadows.value=H.state.directionalShadow,Et.spotLights.value=H.state.spot,Et.spotLightShadows.value=H.state.spotShadow,Et.rectAreaLights.value=H.state.rectArea,Et.ltc_1.value=H.state.rectAreaLTC1,Et.ltc_2.value=H.state.rectAreaLTC2,Et.pointLights.value=H.state.point,Et.pointLightShadows.value=H.state.pointShadow,Et.hemisphereLights.value=H.state.hemi,Et.directionalShadowMap.value=H.state.directionalShadowMap,Et.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Et.spotShadowMap.value=H.state.spotShadowMap,Et.spotLightMatrix.value=H.state.spotLightMatrix,Et.spotLightMap.value=H.state.spotLightMap,Et.pointShadowMap.value=H.state.pointShadowMap,Et.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Ft,$.uniformsList=null,Ft}function ga(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=js.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function va(T,k){const q=Ct.get(T);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function kc(T,k,q,$,H){k.isScene!==!0&&(k=ie),D.resetTextureUnits();const rt=k.fog,dt=$.isMeshStandardMaterial?k.environment:null,St=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Oi,bt=($.isMeshStandardMaterial?X:E).get($.envMap||dt),It=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ft=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Et=!!q.morphAttributes.position,qt=!!q.morphAttributes.normal,ee=!!q.morphAttributes.color;let re=Gn;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(re=y.toneMapping);const Ue=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,$t=Ue!==void 0?Ue.length:0,At=Ct.get($),gn=c.state.lights;if(J===!0&&(ot===!0||T!==v)){const Ve=T===v&&$.id===x;st.setState($,T,Ve)}let Kt=!1;$.version===At.__version?(At.needsLights&&At.lightsStateVersion!==gn.state.version||At.outputColorSpace!==St||H.isBatchedMesh&&At.batching===!1||!H.isBatchedMesh&&At.batching===!0||H.isBatchedMesh&&At.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&At.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&At.instancing===!1||!H.isInstancedMesh&&At.instancing===!0||H.isSkinnedMesh&&At.skinning===!1||!H.isSkinnedMesh&&At.skinning===!0||H.isInstancedMesh&&At.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&At.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&At.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&At.instancingMorph===!1&&H.morphTexture!==null||At.envMap!==bt||$.fog===!0&&At.fog!==rt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==It||At.vertexTangents!==Ft||At.morphTargets!==Et||At.morphNormals!==qt||At.morphColors!==ee||At.toneMapping!==re||At.morphTargetsCount!==$t)&&(Kt=!0):(Kt=!0,At.__version=$.version);let $e=At.currentProgram;Kt===!0&&($e=Ms($,k,H));let ri=!1,Oe=!1,Xi=!1;const oe=$e.getUniforms(),an=At.uniforms;if(Rt.useProgram($e.program)&&(ri=!0,Oe=!0,Xi=!0),$.id!==x&&(x=$.id,Oe=!0),ri||v!==T){Rt.buffers.depth.getReversed()?(nt.copy(T.projectionMatrix),Vu(nt),Gu(nt),oe.setValue(B,"projectionMatrix",nt)):oe.setValue(B,"projectionMatrix",T.projectionMatrix),oe.setValue(B,"viewMatrix",T.matrixWorldInverse);const Ln=oe.map.cameraPosition;Ln!==void 0&&Ln.setValue(B,yt.setFromMatrixPosition(T.matrixWorld)),Vt.logarithmicDepthBuffer&&oe.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&oe.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,Oe=!0,Xi=!0)}if(H.isSkinnedMesh){oe.setOptional(B,H,"bindMatrix"),oe.setOptional(B,H,"bindMatrixInverse");const Ve=H.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),oe.setValue(B,"boneTexture",Ve.boneTexture,D))}H.isBatchedMesh&&(oe.setOptional(B,H,"batchingTexture"),oe.setValue(B,"batchingTexture",H._matricesTexture,D),oe.setOptional(B,H,"batchingIdTexture"),oe.setValue(B,"batchingIdTexture",H._indirectTexture,D),oe.setOptional(B,H,"batchingColorTexture"),H._colorsTexture!==null&&oe.setValue(B,"batchingColorTexture",H._colorsTexture,D));const qi=q.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&Dt.update(H,q,$e),(Oe||At.receiveShadow!==H.receiveShadow)&&(At.receiveShadow=H.receiveShadow,oe.setValue(B,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(an.envMap.value=bt,an.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(an.envMapIntensity.value=k.environmentIntensity),Oe&&(oe.setValue(B,"toneMappingExposure",y.toneMappingExposure),At.needsLights&&Hc(an,Xi),rt&&$.fog===!0&&ut.refreshFogUniforms(an,rt),ut.refreshMaterialUniforms(an,$,O,G,c.state.transmissionRenderTarget[T.id]),js.upload(B,ga(At),an,D)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(js.upload(B,ga(At),an,D),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&oe.setValue(B,"center",H.center),oe.setValue(B,"modelViewMatrix",H.modelViewMatrix),oe.setValue(B,"normalMatrix",H.normalMatrix),oe.setValue(B,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ve=$.uniformsGroups;for(let Ln=0,Dn=Ve.length;Ln<Dn;Ln++){const _a=Ve[Ln];F.update(_a,$e),F.bind(_a,$e)}}return $e}function Hc(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Vc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,k,q){Ct.get(T.texture).__webglTexture=k,Ct.get(T.depthTexture).__webglTexture=q;const $=Ct.get(T);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const q=Ct.get(T);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,q=0){R=T,b=k,A=q;let $=!0,H=null,rt=!1,dt=!1;if(T){const bt=Ct.get(T);if(bt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(B.FRAMEBUFFER,null),$=!1;else if(bt.__webglFramebuffer===void 0)D.setupRenderTarget(T);else if(bt.__hasExternalTextures)D.rebindTextures(T,Ct.get(T.texture).__webglTexture,Ct.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Et=T.depthTexture;if(bt.__boundDepthTexture!==Et){if(Et!==null&&Ct.has(Et)&&(T.width!==Et.image.width||T.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(T)}}const It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(dt=!0);const Ft=Ct.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[k])?H=Ft[k][q]:H=Ft[k],rt=!0):T.samples>0&&D.useMultisampledRTT(T)===!1?H=Ct.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?H=Ft[q]:H=Ft,w.copy(T.viewport),C.copy(T.scissor),N=T.scissorTest}else w.copy(V).multiplyScalar(O).floor(),C.copy(et).multiplyScalar(O).floor(),N=pt;if(Rt.bindFramebuffer(B.FRAMEBUFFER,H)&&$&&Rt.drawBuffers(T,H),Rt.viewport(w),Rt.scissor(C),Rt.setScissorTest(N),rt){const bt=Ct.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,bt.__webglTexture,q)}else if(dt){const bt=Ct.get(T.texture),It=k||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,bt.__webglTexture,q||0,It)}x=-1},this.readRenderTargetPixels=function(T,k,q,$,H,rt,dt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(St=St[dt]),St){Rt.bindFramebuffer(B.FRAMEBUFFER,St);try{const bt=T.texture,It=bt.format,Ft=bt.type;if(!Vt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-$&&q>=0&&q<=T.height-H&&B.readPixels(k,q,$,H,zt.convert(It),zt.convert(Ft),rt)}finally{const bt=R!==null?Ct.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(B.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(T,k,q,$,H,rt,dt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(St=St[dt]),St){const bt=T.texture,It=bt.format,Ft=bt.type;if(!Vt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-$&&q>=0&&q<=T.height-H){Rt.bindFramebuffer(B.FRAMEBUFFER,St);const Et=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Et),B.bufferData(B.PIXEL_PACK_BUFFER,rt.byteLength,B.STREAM_READ),B.readPixels(k,q,$,H,zt.convert(It),zt.convert(Ft),0);const qt=R!==null?Ct.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(B.FRAMEBUFFER,qt);const ee=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Hu(B,ee,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Et),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,rt),B.deleteBuffer(Et),B.deleteSync(ee),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,q=0){T.isTexture!==!0&&(es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);const $=Math.pow(2,-q),H=Math.floor(T.image.width*$),rt=Math.floor(T.image.height*$),dt=k!==null?k.x:0,St=k!==null?k.y:0;D.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,dt,St,H,rt),Rt.unbindTexture()},this.copyTextureToTexture=function(T,k,q=null,$=null,H=0){T.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,T=arguments[1],k=arguments[2],H=arguments[3]||0,q=null);let rt,dt,St,bt,It,Ft,Et,qt,ee;const re=T.isCompressedTexture?T.mipmaps[H]:T.image;q!==null?(rt=q.max.x-q.min.x,dt=q.max.y-q.min.y,St=q.isBox3?q.max.z-q.min.z:1,bt=q.min.x,It=q.min.y,Ft=q.isBox3?q.min.z:0):(rt=re.width,dt=re.height,St=re.depth||1,bt=0,It=0,Ft=0),$!==null?(Et=$.x,qt=$.y,ee=$.z):(Et=0,qt=0,ee=0);const Ue=zt.convert(k.format),$t=zt.convert(k.type);let At;k.isData3DTexture?(D.setTexture3D(k,0),At=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(D.setTexture2DArray(k,0),At=B.TEXTURE_2D_ARRAY):(D.setTexture2D(k,0),At=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const gn=B.getParameter(B.UNPACK_ROW_LENGTH),Kt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),$e=B.getParameter(B.UNPACK_SKIP_PIXELS),ri=B.getParameter(B.UNPACK_SKIP_ROWS),Oe=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,re.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,re.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,bt),B.pixelStorei(B.UNPACK_SKIP_ROWS,It),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ft);const Xi=T.isDataArrayTexture||T.isData3DTexture,oe=k.isDataArrayTexture||k.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const an=Ct.get(T),qi=Ct.get(k),Ve=Ct.get(an.__renderTarget),Ln=Ct.get(qi.__renderTarget);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,Ve.__webglFramebuffer),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let Dn=0;Dn<St;Dn++)Xi&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(T).__webglTexture,H,Ft+Dn),T.isDepthTexture?(oe&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(k).__webglTexture,H,ee+Dn),B.blitFramebuffer(bt,It,rt,dt,Et,qt,rt,dt,B.DEPTH_BUFFER_BIT,B.NEAREST)):oe?B.copyTexSubImage3D(At,H,Et,qt,ee+Dn,bt,It,rt,dt):B.copyTexSubImage2D(At,H,Et,qt,ee+Dn,bt,It,rt,dt);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else oe?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(At,H,Et,qt,ee,rt,dt,St,Ue,$t,re.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(At,H,Et,qt,ee,rt,dt,St,Ue,re.data):B.texSubImage3D(At,H,Et,qt,ee,rt,dt,St,Ue,$t,re):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,H,Et,qt,rt,dt,Ue,$t,re.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,H,Et,qt,re.width,re.height,Ue,re.data):B.texSubImage2D(B.TEXTURE_2D,H,Et,qt,rt,dt,Ue,$t,re);B.pixelStorei(B.UNPACK_ROW_LENGTH,gn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Kt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$e),B.pixelStorei(B.UNPACK_SKIP_ROWS,ri),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Oe),H===0&&k.generateMipmaps&&B.generateMipmap(At),Rt.unbindTexture()},this.copyTextureToTexture3D=function(T,k,q=null,$=null,H=0){return T.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,T=arguments[2],k=arguments[3],H=arguments[4]||0),es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,k,q,$,H)},this.initRenderTarget=function(T){Ct.get(T).__webglFramebuffer===void 0&&D.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?D.setTextureCube(T,0):T.isData3DTexture?D.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?D.setTexture2DArray(T,0):D.setTexture2D(T,0),Rt.unbindTexture()},this.resetState=function(){b=0,A=0,R=null,Rt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class na{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Mt(t),this.near=e,this.far=n}clone(){return new na(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qm extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class t0 extends we{constructor(t=null,e=1,n=1,s,r,o,a,l,u=He,f=He,h,d){super(null,o,a,l,u,f,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo extends tn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Mi=new Jt,vl=new Jt,Vs=[],_l=new si,e0=new Jt,Zi=new Ut,ji=new ms;class hs extends Ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,e0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mi),_l.copy(t.boundingBox).applyMatrix4(Mi),this.boundingBox.union(_l)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ms),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mi),ji.copy(t.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(ji)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ji.copy(this.boundingSphere),ji.applyMatrix4(n),t.ray.intersectsSphere(ji)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mi),vl.multiplyMatrices(n,Mi),Zi.matrixWorld=vl,Zi.raycast(t,Vs);for(let o=0,a=Vs.length;o<a;o++){const l=Vs[o];l.instanceId=r,l.object=this,e.push(l)}Vs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new t0(new Float32Array(s*this.count),s,this.count,Yo,hn));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class yc extends we{constructor(t,e,n,s,r,o,a,l,u){super(t,e,n,s,r,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,u;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),u=n[s]-o,u<0)a=s+1;else if(u>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const f=n[s],d=n[s+1]-f,p=(o-f)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new at:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],o=[],a=new P,l=new Jt;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let u=Number.MAX_VALUE;const f=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);f<=u&&(u=f,n.set(1,0,0)),h<=u&&(u=h,n.set(0,1,0)),d<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(pe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(pe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ia extends pn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=u-this.aY;l=d*f-p*h+this.aX,u=d*h+p*f+this.aY}return n.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class n0 extends ia{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sa(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,u){s(o,a,u*(a-r),u*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,u,f,h){let d=(o-r)/u-(a-r)/(u+f)+(a-o)/f,p=(a-o)/f-(l-o)/(f+h)+(l-a)/h;d*=f,p*=f,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Gs=new P,Hr=new sa,Vr=new sa,Gr=new sa;class i0 extends pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let u,f;this.closed||a>0?u=s[(a-1)%r]:(Gs.subVectors(s[0],s[1]).add(s[0]),u=Gs);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(Gs.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Gs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(f),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Hr.initNonuniformCatmullRom(u.x,h.x,d.x,f.x,g,_,m),Vr.initNonuniformCatmullRom(u.y,h.y,d.y,f.y,g,_,m),Gr.initNonuniformCatmullRom(u.z,h.z,d.z,f.z,g,_,m)}else this.curveType==="catmullrom"&&(Hr.initCatmullRom(u.x,h.x,d.x,f.x,this.tension),Vr.initCatmullRom(u.y,h.y,d.y,f.y,this.tension),Gr.initCatmullRom(u.z,h.z,d.z,f.z,this.tension));return n.set(Hr.calc(l),Vr.calc(l),Gr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function s0(i,t){const e=1-i;return e*e*t}function r0(i,t){return 2*(1-i)*i*t}function o0(i,t){return i*i*t}function rs(i,t,e,n){return s0(i,t)+r0(i,e)+o0(i,n)}function a0(i,t){const e=1-i;return e*e*e*t}function l0(i,t){const e=1-i;return 3*e*e*i*t}function c0(i,t){return 3*(1-i)*i*i*t}function u0(i,t){return i*i*i*t}function os(i,t,e,n,s){return a0(i,t)+l0(i,e)+c0(i,n)+u0(i,s)}class Sc extends pn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(os(t,s.x,r.x,o.x,a.x),os(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class h0 extends pn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(os(t,s.x,r.x,o.x,a.x),os(t,s.y,r.y,o.y,a.y),os(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bc extends pn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class d0 extends pn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ec extends pn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(rs(t,s.x,r.x,o.x),rs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class f0 extends pn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(rs(t,s.x,r.x,o.x),rs(t,s.y,r.y,o.y),rs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wc extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],u=s[o],f=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(xl(a,l.x,u.x,f.x,h.x),xl(a,l.y,u.y,f.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var Ml=Object.freeze({__proto__:null,ArcCurve:n0,CatmullRomCurve3:i0,CubicBezierCurve:Sc,CubicBezierCurve3:h0,EllipseCurve:ia,LineCurve:bc,LineCurve3:d0,QuadraticBezierCurve:Ec,QuadraticBezierCurve3:f0,SplineCurve:wc});class p0 extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ml[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let u=0;u<l.length;u++){const f=l[u];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ml[s.type]().fromJSON(s))}return this}}class m0 extends p0{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new bc(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ec(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Sc(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+u,e+f,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const u=new ia(t,e,n,s,r,o,a,l);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ra extends Me{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=pe(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],u=[],f=1/e,h=new P,d=new at,p=new P,g=new P,_=new P;let m=0,c=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,c=t[M+1].y-t[M].y,p.x=c*1,p.y=-m,p.z=c*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,c=t[M+1].y-t[M].y,p.x=c*1,p.y=-m,p.z=c*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let M=0;M<=e;M++){const S=n+M*f*s,y=Math.sin(S),U=Math.cos(S);for(let b=0;b<=t.length-1;b++){h.x=t[b].x*y,h.y=t[b].y,h.z=t[b].x*U,o.push(h.x,h.y,h.z),d.x=M/e,d.y=b/(t.length-1),a.push(d.x,d.y);const A=l[3*b+0]*y,R=l[3*b+1],x=l[3*b+0]*U;u.push(A,R,x)}}for(let M=0;M<e;M++)for(let S=0;S<t.length-1;S++){const y=S+M*t.length,U=y,b=y+t.length,A=y+t.length+1,R=y+1;r.push(U,b,R),r.push(A,R,b)}this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("uv",new Yt(a,2)),this.setAttribute("normal",new Yt(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.points,t.segments,t.phiStart,t.phiLength)}}class oa extends ra{constructor(t=1,e=1,n=4,s=8){const r=new m0;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new oa(t.radius,t.length,t.capSegments,t.radialSegments)}}class ne extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const u=this;s=Math.floor(s),r=Math.floor(r);const f=[],h=[],d=[],p=[];let g=0;const _=[],m=n/2;let c=0;M(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(f),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(p,2));function M(){const y=new P,U=new P;let b=0;const A=(e-t)/n;for(let R=0;R<=r;R++){const x=[],v=R/r,w=v*(e-t)+t;for(let C=0;C<=s;C++){const N=C/s,L=N*l+a,I=Math.sin(L),z=Math.cos(L);U.x=w*I,U.y=-v*n+m,U.z=w*z,h.push(U.x,U.y,U.z),y.set(I,A,z).normalize(),d.push(y.x,y.y,y.z),p.push(N,1-v),x.push(g++)}_.push(x)}for(let R=0;R<s;R++)for(let x=0;x<r;x++){const v=_[x][R],w=_[x+1][R],C=_[x+1][R+1],N=_[x][R+1];(t>0||x!==0)&&(f.push(v,w,N),b+=3),(e>0||x!==r-1)&&(f.push(w,C,N),b+=3)}u.addGroup(c,b,0),c+=b}function S(y){const U=g,b=new at,A=new P;let R=0;const x=y===!0?t:e,v=y===!0?1:-1;for(let C=1;C<=s;C++)h.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),g++;const w=g;for(let C=0;C<=s;C++){const L=C/s*l+a,I=Math.cos(L),z=Math.sin(L);A.x=x*z,A.y=m*v,A.z=x*I,h.push(A.x,A.y,A.z),d.push(0,v,0),b.x=I*.5+.5,b.y=z*.5*v+.5,p.push(b.x,b.y),g++}for(let C=0;C<s;C++){const N=U+C,L=w+C;y===!0?f.push(L,L+1,N):f.push(L+1,L,N),R+=3}u.addGroup(c,R,y===!0?1:2),c+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ie extends ne{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ie(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vs extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),u(n),f(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const S=new P,y=new P,U=new P;for(let b=0;b<e.length;b+=3)p(e[b+0],S),p(e[b+1],y),p(e[b+2],U),l(S,y,U,M)}function l(M,S,y,U){const b=U+1,A=[];for(let R=0;R<=b;R++){A[R]=[];const x=M.clone().lerp(y,R/b),v=S.clone().lerp(y,R/b),w=b-R;for(let C=0;C<=w;C++)C===0&&R===b?A[R][C]=x:A[R][C]=x.clone().lerp(v,C/w)}for(let R=0;R<b;R++)for(let x=0;x<2*(b-R)-1;x++){const v=Math.floor(x/2);x%2===0?(d(A[R][v+1]),d(A[R+1][v]),d(A[R][v])):(d(A[R][v+1]),d(A[R+1][v+1]),d(A[R+1][v]))}}function u(M){const S=new P;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(M),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function f(){const M=new P;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];const y=m(M)/2/Math.PI+.5,U=c(M)/Math.PI+.5;o.push(y,1-U)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const S=o[M+0],y=o[M+2],U=o[M+4],b=Math.max(S,y,U),A=Math.min(S,y,U);b>.9&&A<.1&&(S<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),U<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,S){const y=M*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function g(){const M=new P,S=new P,y=new P,U=new P,b=new at,A=new at,R=new at;for(let x=0,v=0;x<r.length;x+=9,v+=6){M.set(r[x+0],r[x+1],r[x+2]),S.set(r[x+3],r[x+4],r[x+5]),y.set(r[x+6],r[x+7],r[x+8]),b.set(o[v+0],o[v+1]),A.set(o[v+2],o[v+3]),R.set(o[v+4],o[v+5]),U.copy(M).add(S).add(y).divideScalar(3);const w=m(U);_(b,v+0,M,w),_(A,v+2,S,w),_(R,v+4,y,w)}}function _(M,S,y,U){U<0&&M.x===1&&(o[S]=M.x-1),y.x===0&&y.z===0&&(o[S]=U/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function c(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.vertices,t.indices,t.radius,t.details)}}class aa extends vs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new aa(t.radius,t.detail)}}class _e extends vs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _e(t.radius,t.detail)}}class la extends vs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new la(t.radius,t.detail)}}class ds extends Me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],u=[],f=[];let h=t;const d=(e-t)/s,p=new P,g=new at;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const c=r+m/n*o;p.x=h*Math.cos(c),p.y=h*Math.sin(c),l.push(p.x,p.y,p.z),u.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,f.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let c=0;c<n;c++){const M=c+m,S=M,y=M+n+1,U=M+n+2,b=M+1;a.push(S,y,b),a.push(y,U,b)}}this.setIndex(a),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xe extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const f=[],h=new P,d=new P,p=[],g=[],_=[],m=[];for(let c=0;c<=n;c++){const M=[],S=c/n;let y=0;c===0&&o===0?y=.5/e:c===n&&l===Math.PI&&(y=-.5/e);for(let U=0;U<=e;U++){const b=U/e;h.x=-t*Math.cos(s+b*r)*Math.sin(o+S*a),h.y=t*Math.cos(o+S*a),h.z=t*Math.sin(s+b*r)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(b+y,1-S),M.push(u++)}f.push(M)}for(let c=0;c<n;c++)for(let M=0;M<e;M++){const S=f[c][M+1],y=f[c][M],U=f[c+1][M],b=f[c+1][M+1];(c!==0||o>0)&&p.push(S,y,b),(c!==n-1||l<Math.PI)&&p.push(y,U,b)}this.setIndex(p),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hr extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],u=[],f=new P,h=new P,d=new P;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),f.x=t*Math.cos(_),f.y=t*Math.sin(_),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),u.push(g/s),u.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,c=(s+1)*(p-1)+g,M=(s+1)*p+g;o.push(_,m,M),o.push(m,c,M)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class g0 extends ge{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class rn extends gs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ca extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class v0 extends ca{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Wr=new Jt,yl=new P,Sl=new P;class Tc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qo,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(yl),Sl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sl),e.updateMatrixWorld(),Wr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const bl=new Jt,Qi=new P,Xr=new P;class _0 extends Tc{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Qi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Qi),Xr.copy(n.position),Xr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Xr),n.updateMatrixWorld(),s.makeTranslation(-Qi.x,-Qi.y,-Qi.z),bl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl)}}class x0 extends ca{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class M0 extends Tc{constructor(){super(new ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y0 extends ca{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new M0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class S0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=El(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=El();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function El(){return performance.now()}const wl=new Jt;class b0{constructor(t,e,n=0,s=1/0){this.ray=new lc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wl),this}intersectObject(t,e=!0,n=[]){return Bo(t,this,n,e),n.sort(Tl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Bo(t[s],this,n,e);return n.sort(Tl),n}}function Tl(i,t){return i.distance-t.distance}function Bo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Bo(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);function E0(){const i=new Map;return{on(t,e){return i.has(t)||i.set(t,new Set),i.get(t).add(e),()=>i.get(t).delete(e)},emit(t,e){const n=i.get(t);if(n)for(const s of[...n])s(e)}}}const An={linear:i=>i,outCubic:i=>1-Math.pow(1-i,3),outBack:i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),outElastic:i=>i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i*10-.75)*(2*Math.PI/3))+1,inOutSine:i=>-(Math.cos(Math.PI*i)-1)/2};class w0{constructor(){this.list=[]}to(t,e,n,s=An.outCubic,r){const o={};for(const a in e)o[a]=t[a];this.list.push({obj:t,props:e,from:o,dur:Math.max(n,1e-4),t:0,ease:s,onDone:r})}update(t){for(const e of[...this.list]){e.t+=t;const n=Math.min(1,e.t/e.dur),s=e.ease(n);for(const r in e.props)e.obj[r]=e.from[r]+(e.props[r]-e.from[r])*s;n>=1&&(this.list.splice(this.list.indexOf(e),1),e.onDone&&e.onDone())}}}class as{constructor(t=0,e=180,n=12){this.value=t,this.target=t,this.vel=0,this.k=e,this.d=n}update(t){const e=this.k*(this.target-this.value)-this.d*this.vel;return this.vel+=e*t,this.value+=this.vel*t,this.value}kick(t){this.vel+=t}}function T0({update:i,render:t,step:e=1/60,maxFrame:n=.25}){let s=null,r=0,o=0,a=!1;const l={tick(u){if(s===null)return s=u,0;const f=Math.min(n,(u-s)/1e3);s=u,r+=f;let h=0;for(;r>=e;)i(e),r-=e,h++;return t(r/e,f),h},start(){a=!0;const u=f=>{a&&(l.tick(f),o=requestAnimationFrame(u))};o=requestAnimationFrame(u)},stop(){a=!1,cancelAnimationFrame(o)}};return l}function A0(i){const t=new Set,e={x:0,y:0,ndc:{x:0,y:0},left:!1,right:!1,leftPressed:!1,leftReleased:!1,rightPressed:!1},n=new Set;return addEventListener("keydown",s=>{s.repeat||(t.add(s.code),n.add(s.code)),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(s.code)&&s.preventDefault()}),addEventListener("keyup",s=>t.delete(s.code)),i.addEventListener("pointermove",s=>{e.x=s.clientX,e.y=s.clientY,e.ndc.x=s.clientX/innerWidth*2-1,e.ndc.y=-(s.clientY/innerHeight*2-1)}),i.addEventListener("pointerdown",s=>{s.button===0&&(e.left=!0,e.leftPressed=!0),s.button===2&&(e.right=!0,e.rightPressed=!0)}),addEventListener("pointerup",s=>{s.button===0&&(e.left&&(e.leftReleased=!0),e.left=!1),s.button===2&&(e.right=!1)}),i.addEventListener("contextmenu",s=>s.preventDefault()),addEventListener("blur",()=>{t.clear(),e.left=e.right=!1}),{keys:t,mouse:e,enabled:!0,axis(){if(!this.enabled)return{x:0,z:0};const s=r=>t.has(r)?1:0;return{x:s("KeyD")+s("ArrowRight")-s("KeyA")-s("ArrowLeft"),z:s("KeyS")+s("ArrowDown")-s("KeyW")-s("ArrowUp")}},wasPressed(s){return n.has(s)},endFrame(){e.leftPressed=e.leftReleased=e.rightPressed=!1,n.clear()}}}const sr="howtofish.save.v1",Ac=1;function Ci(){return{version:Ac,money:5,rods:[],equippedRod:null,baits:{},equippedBait:"ham",weapons:["slingshot"],equippedWeapon:"slingshot",inventory:[],chum:0,bossDefeated:!1,goldenRod:!1,dex:{},stats:{caught:0,killed:0,earned:0}}}const C0=i=>JSON.stringify(i);function R0(i){try{const t=JSON.parse(i);return!t||t.version!==Ac||!Number.isFinite(t.money)||t.money<0?Ci():{...Ci(),...t}}catch{return Ci()}}function P0(i){try{return R0(i.getItem(sr))}catch{return Ci()}}function L0(i,t){try{i.setItem(sr,C0(t))}catch{}}function D0(i=Ci()){const t={state:i,reset(){t.state=Ci()}};return t}const Cc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Vi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const I0=new ta(-1,1,1,-1,0,1);class U0 extends Me{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}}const N0=new U0;class ua{constructor(t){this._mesh=new Ut(N0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,I0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Rc extends Vi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=us.clone(t.uniforms),this.material=new ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ua(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Al extends Vi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class F0 extends Vi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class O0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rc(Cc),this.copyPass.material.blending=wn,this.clock=new S0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Al!==void 0&&(o instanceof Al?n=!0:o instanceof F0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class z0 extends Vi{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Mt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const B0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Mt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Fi extends Vi{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new Mt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qe(r,o,{type:fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new qe(r,o,{type:fn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new qe(r,o,{type:fn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=B0;this.highPassUniforms=us.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ge({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new at(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=Cc;this.copyUniforms=us.clone(f.uniforms),this.blendMaterial=new ge({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:er,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Mt,this.oldClearAlpha=1,this.basic=new Te,this.fsQuad=new ua(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Fi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Fi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Fi.BlurDirectionX=new at(1,0);Fi.BlurDirectionY=new at(0,1);const k0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class H0 extends Vi{constructor(){super();const t=k0;this.uniforms=us.clone(t.uniforms),this.material=new g0({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ua(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Wt.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Go?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ql&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const V0={uniforms:{tDiffuse:{value:null},uVig:{value:.32},uSat:{value:1.14},uFlash:{value:0},uFlashColor:{value:new Mt(1,.2,.1)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uVig,uSat,uFlash;uniform vec3 uFlashColor;varying vec2 vUv;
    void main(){vec4 c=texture2D(tDiffuse,vUv);float l=dot(c.rgb,vec3(.299,.587,.114));
    c.rgb=mix(vec3(l),c.rgb,uSat);c.rgb*=vec3(1.04,1.0,.95);
    float d=distance(vUv,vec2(.5));c.rgb*=1.-smoothstep(.32,.9,d)*uVig;
    c.rgb=mix(c.rgb,uFlashColor,uFlash*smoothstep(.2,.9,d));gl_FragColor=c;}`},Pc="#c4e6ee";function G0(i){let t;try{t=new jm({antialias:!0,powerPreference:"high-performance"})}catch{return null}if(!t.getContext())return null;const e=new URLSearchParams(location.search).has("lowfx");t.setPixelRatio(e?.6:Math.min(window.devicePixelRatio,2)),t.setSize(innerWidth,innerHeight),t.shadowMap.enabled=!e,t.shadowMap.type=kl,t.toneMapping=Go,t.toneMappingExposure=1.1,t.outputColorSpace=Re,i.appendChild(t.domElement);const n=new Qm;n.background=new Mt("#8fd6f0"),n.fog=new na(Pc,55,150);const s=new ke(50,innerWidth/innerHeight,.1,400);s.position.set(0,9,11);const r=t.getDrawingBufferSize(new at),o=new qe(r.x,r.y,{type:fn,samples:4}),a=new O0(t,o);a.addPass(new z0(n,s));const l=new Fi(new at(innerWidth,innerHeight),.28,.55,.9);l.enabled=!e,a.addPass(l);const u=new Rc(V0);a.addPass(u),a.addPass(new H0);const f={renderer:t,scene:n,camera:s,composer:a,bloom:l,grade:u,resize(){t.setSize(innerWidth,innerHeight),a.setSize(innerWidth,innerHeight),s.aspect=innerWidth/innerHeight,s.updateProjectionMatrix()},render(){a.render()}};return addEventListener("resize",f.resize),f}function W0(i){const t=new y0(16769196,3.1);t.position.set(-22,20,16),t.castShadow=!0,t.shadow.mapSize.set(2048,2048);const e=t.shadow.camera;e.left=-24,e.right=24,e.top=24,e.bottom=-24,e.near=1,e.far=90,t.shadow.bias=-4e-4,t.shadow.normalBias=.04,t.shadow.radius=3,i.add(t,t.target);const n=new v0(12577023,14727296,.95);i.add(n);const s=t.position.clone();return{sun:t,hemi:n,update(r,o){const l=Math.round(o.x/.1)*.1,u=Math.round(o.z/.1)*.1;t.target.position.set(l,0,u),t.position.set(l+s.x+Math.sin(r*.05)*1.5,s.y,u+s.z)}}}const Ws=8,Lc=i=>12.33+1.2*Math.sin(3*i)+.8*Math.sin(5*i+1),Qs=(i,t,e)=>Math.sin(i*.35+e*1.2)*.12+Math.sin(t*.5+e*.9)*.09+Math.sin((i+t)*.9+e*1.7)*.03;function X0(){const i=new Rn(320,320,150,150);i.rotateX(-Math.PI/2);const t=Array.from({length:Ws},()=>new Qt(0,0,-100,0)),e={uTime:{value:0},uShallow:{value:new Mt("#62f0d8")},uDeep:{value:new Mt("#1782c9")},uFoam:{value:new Mt("#ffffff")},uFogColor:{value:new Mt(Pc)},uFogNear:{value:55},uFogFar:{value:150},uRipples:{value:t}},n=new ge({uniforms:e,transparent:!0,vertexShader:`
      uniform float uTime; varying vec3 vW;
      void main(){ vec3 p=position;
        p.y += sin(p.x*.35+uTime*1.2)*.12 + sin(p.z*.5+uTime*.9)*.09 + sin((p.x+p.z)*.9+uTime*1.7)*.03;
        vec4 w=modelMatrix*vec4(p,1.); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }`,fragmentShader:`
      uniform float uTime; uniform vec3 uShallow,uDeep,uFoam,uFogColor; uniform float uFogNear,uFogFar;
      uniform vec4 uRipples[${Ws}]; varying vec3 vW;
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
        for(int i=0;i<${Ws};i++){ vec4 r=uRipples[i]; float age=uTime-r.z; if(age<0.||age>2.5) continue;
          float rad=age*3.2; float dd=abs(distance(vW.xz,r.xy)-rad);
          float ring=(1.-smoothstep(0.,.22+age*.1,dd))*exp(-age*1.7)*r.w; col=mix(col,uFoam,clamp(ring,0.,1.)); }
        float alpha=mix(.62,.97,smoothstep(0.,5.,shore));
        float fogF=smoothstep(uFogNear,uFogFar,length(cameraPosition-vW)); col=mix(col,uFogColor,fogF);
        gl_FragColor=vec4(col,alpha); }`}),s=new Ut(i,n);s.frustumCulled=!1,s.renderOrder=1;let r=0;return{mesh:s,uniforms:e,update(o){e.uTime.value=o},ripple(o,a,l=1){t[r].set(o,a,e.uTime.value,l),r=(r+1)%Ws}}}function on(i=1){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Pe(i,t=.15,e=1){const n=i.index?i.toNonIndexed():i,s=n.attributes.position,r=on(e),o=new Map;for(let a=0;a<s.count;a++){const l=s.getX(a),u=s.getY(a),f=s.getZ(a),h=`${l.toFixed(3)},${u.toFixed(3)},${f.toFixed(3)}`;let d=o.get(h);d||(d=[(r()-.5)*2*t,(r()-.5)*2*t,(r()-.5)*2*t],o.set(h,d)),s.setXYZ(a,l+d[0],u+d[1],f+d[2])}return n.computeVertexNormals(),n}const Le=(i,t={})=>new rn({color:i,flatShading:!0,roughness:.85,metalness:0,...t});function xt(i,t,{cast:e=!0,receive:n=!0,opts:s}={}){const r=new Ut(i,t.isMaterial?t:Le(t,s));return r.castShadow=e,r.receiveShadow=n,r}function Cl(i,t,e){const n=((t-i+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return i+n*e}const ln=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));function q0(i){const t=new Ut(new xe(300,24,16),new ge({side:De,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Mt("#4fb6ee")},uMid:{value:new Mt("#9fdcf6")},uHor:{value:new Mt("#fff0cf")}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 uTop,uMid,uHor;varying vec3 vP;void main(){float h=normalize(vP).y;vec3 c=mix(uHor,uMid,smoothstep(0.,.25,h));c=mix(c,uTop,smoothstep(.2,.8,h));gl_FragColor=vec4(c,1.);}"}));t.renderOrder=-10,i.add(t);const e=on(7),n=[],s=new rn({color:16777215,flatShading:!0,roughness:1,emissive:16777215,emissiveIntensity:.35,fog:!1});for(let r=0;r<10;r++){const o=new wt,a=4+Math.floor(e()*3);for(let l=0;l<a;l++){const u=2+e()*2.2,f=new Ut(Pe(new _e(u,1),.25,r*13+l),s);f.position.set((l-a/2)*2.6+e(),e()*1.2,(e()-.5)*2.2),f.scale.y=.65,o.add(f)}o.position.set((e()-.5)*300,38+e()*22,-60-e()*120),o.userData.speed=.6+e()*.8,n.push(o),i.add(o)}return{dome:t,update(r,o){t.position.copy(o);for(const a of n)a.position.x+=a.userData.speed*r,a.position.x>160&&(a.position.x=-160)}}}const me=(i,t,e,n,s)=>xt(new ve(i,t,e),n,s),Fe=(i,t,e,n,s,r)=>xt(new ne(i,t,e,n),s,r),Gi=(i,t=1.6)=>new rn({color:i,emissive:i,emissiveIntensity:t,flatShading:!0});function Dc(i,t,e,n,s,r="bold 64px system-ui,sans-serif"){const o=document.createElement("canvas");o.width=t,o.height=e;const a=o.getContext("2d");a.fillStyle=n,a.fillRect(0,0,t,e),a.strokeStyle=s,a.lineWidth=8,a.strokeRect(6,6,t-12,e-12),a.fillStyle=s,a.font=r,a.textAlign="center",a.textBaseline="middle",a.fillText(i,t/2,e/2+4);const l=new yc(o);return l.colorSpace=Re,l}function Ic(i=1){const t=new wt,e=on(i+3),n=(e()-.5)*2.2,s=4.4+e()*1.4,r=6,o=h=>new P(n*h*h*1.4,s*h,0);for(let h=0;h<r;h++){const d=o(h/r),p=o((h+1)/r),g=d.distanceTo(p),_=Fe(.26-.1*((h+1)/r),.28-.1*(h/r),g*1.06,6,h%2?"#8a5a34":"#7a4d2b");_.position.copy(d).add(p).multiplyScalar(.5),_.rotation.z=-Math.atan2(p.x-d.x,p.y-d.y),t.add(_)}const a=new wt;a.position.copy(o(1)),t.add(a);const l=Le("#3fae4c"),u=Le("#59c85a");for(let h=0;h<9;h++){const d=new wt;d.rotation.y=h/9*Math.PI*2+e()*.3;const p=xt(Pe(new Ie(.55,3.2,4),.06,i+h),h%2?l:u);p.rotation.z=-Math.PI/2,p.position.x=1.5,p.scale.set(.22,1,1.4);const g=new wt;g.rotation.z=-.4-e()*.35,g.add(p),d.add(g),a.add(d)}for(let h=0;h<3;h++){const d=xt(new _e(.2,0),"#6b4a25");d.position.set(Math.cos(h*2.1)*.3,-.25,Math.sin(h*2.1)*.3),a.add(d)}const f=e()*6.28;return t.userData.sway=h=>{t.rotation.z=Math.sin(h*1.3+f)*.025,a.rotation.y=Math.sin(h*.9+f)*.06},t}function Uc(i=1,t=1){const e=xt(Pe(new aa(i,0),i*.22,t),["#8d929c","#a0a4ad","#7b808b"][t%3]);return e.scale.y=.75,e.rotation.y=t,e}function Y0(){const i=new wt;for(let d=0;d<7;d++){const p=d/7*Math.PI*2,g=Uc(1.1+d%3*.3,d+40);g.position.set(Math.cos(p)*1.9,.2,Math.sin(p)*1.9),i.add(g)}const t=1.7;for(let d=0;d<6;d++){const p=1.5-d*.09,g=1.5-(d+1)*.09,_=Fe(g,p,t,10,d%2?"#d94a3a":"#f1ece0");_.position.y=.4+d*t+t/2,i.add(_)}const e=.4+6*t,n=Fe(1.35,1.35,.25,10,"#3d4a5c");n.position.y=e+.12,i.add(n);const s=new Ut(new ne(.75,.75,1.2,8),Gi("#ffe9a0",1.8));s.position.y=e+.85,i.add(s);const r=Fe(.05,1.1,1,8,"#d94a3a");r.position.y=e+1.95,i.add(r);const o=me(.6,1,.2,"#6b4326");o.position.set(0,1,1.4),i.add(o);const a=new wt;a.position.y=e+.85;const l=new Ie(2.4,18,14,1,!0);l.translate(0,-9,0),l.rotateZ(Math.PI/2);const u=new Te({color:"#fff2b0",transparent:!0,opacity:.16,blending:er,depthWrite:!1,side:Ne,fog:!1}),f=new Ut(l,u),h=f.clone();return h.rotation.y=Math.PI,a.add(f,h),i.add(a),i.userData.update=d=>{a.rotation.y=d*.8},i.scale.setScalar(1.05),i}function $0(){const i=new wt,t=me(4.4,.2,3.4,"#a87a4a");t.position.y=.05,i.add(t);for(const[l,u]of[[-2,-1.5],[2,-1.5],[-2,1.5],[2,1.5]]){const f=Fe(.12,.12,2.8,6,"#6b4326");f.position.set(l,1.4,u),i.add(f)}const e=me(4.2,2.5,.15,"#c98a4b");e.position.set(0,1.35,-1.55),i.add(e);for(const l of[-1,1]){const u=me(.15,2.5,3.1,"#bf7f43");u.position.set(l*2.05,1.35,0),i.add(u)}const n=me(3.8,1,.8,"#e0a465");n.position.set(0,.65,1.25),i.add(n);const s=me(4,.12,1,"#f3c88b");s.position.set(0,1.2,1.25),i.add(s);const r=xt(new Ie(3.7,1.5,4),"#3b8f9f");r.rotation.y=Math.PI/4,r.scale.set(1.05,1,.9),r.position.y=3.55,i.add(r);for(let l=0;l<6;l++){const u=me(.7,.08,1.6,l%2?"#ffffff":"#ff5b4f");u.position.set(-1.75+l*.7,2.75,1.55),u.rotation.x=.35,i.add(u)}for(let l=0;l<7;l++){const u=new Ut(new xe(.07,6,4),Gi(["#ffd166","#ff7ab6","#7ae0ff"][l%3],2));u.position.set(-1.9+l*.63,2.3-Math.sin(l/6*Math.PI)*.15*-1,2.28),i.add(u)}const o=new Te({map:Dc("FISH  $$$",256,96,"#1e5f74","#ffe08a","bold 56px system-ui,sans-serif")}),a=new Ut(new ve(2.6,.9,.12),[Le("#6b4326"),Le("#6b4326"),Le("#6b4326"),Le("#6b4326"),o,Le("#6b4326")]);a.position.set(0,3.15,1),a.castShadow=!0,i.add(a);for(const[l,u,f]of[[-1.5,.2,"#b98a58"],[1.6,-.6,"#c99b68"]]){const h=me(.8,.6,.8,f);h.position.set(l,.4,u),i.add(h)}for(let l=0;l<4;l++){const u=xt(new Ie(.16,.6,5),["#6fb5e0","#ff9a7a","#7ee0a6","#ffd166"][l]);u.rotation.z=Math.PI/2,u.position.set(-.9+l*.6,1.36,1.2),i.add(u)}return i}function K0(){const i=new wt,t=me(1.2,.7,1,"#3a3a44");t.position.y=.7,i.add(t);for(const[s,r]of[[-.5,-.4],[.5,-.4],[-.5,.4],[.5,.4]]){const o=Fe(.06,.06,.45,5,"#2b2b33");o.position.set(s,.22,r),i.add(o)}const e=new Ut(new ve(1,.05,.8),Gi("#ff6a1f",1.4));e.position.y=1.06,i.add(e);for(let s=0;s<6;s++){const r=me(.04,.05,.85,"#15151a",{cast:!1});r.position.set(-.45+s*.18,1.12,0),i.add(r)}const n=[];for(let s=0;s<6;s++){const r=new Ut(new _e(1,0),new Te({color:"#dfe6ea",transparent:!0,depthWrite:!1}));r.position.y=1.2,i.add(r),n.push(r)}return i.userData.update=s=>{n.forEach((r,o)=>{const a=(s*.35+o/6)%1;r.position.set(Math.sin(a*5+o)*.15,1.3+a*2.2,Math.cos(a*4+o)*.1),r.scale.setScalar(.08+a*.28),r.material.opacity=.5*(1-a)}),e.material.emissiveIntensity=1.3+Math.sin(s*9)*.25+Math.sin(s*23)*.15},i}const Nc={cherry:"🍒",bell:"🔔",fish:"🐟",seven:"7",rod:"🎣"},qr={};function Yr(i){if(qr[i])return qr[i];const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");e.fillStyle="#fff8e0",e.fillRect(0,0,128,128),e.font=i==="seven"?"bold 100px system-ui":'84px "Segoe UI Emoji","Apple Color Emoji",sans-serif',e.fillStyle=i==="seven"?"#d61f2c":"#222",e.textAlign="center",e.textBaseline="middle",e.fillText(Nc[i],64,70);const n=new yc(t);return n.colorSpace=Re,qr[i]=n}function J0(){const i=new wt,t=me(1.8,2.5,1.2,"#c42233");t.position.y=1.35,i.add(t);const e=Fe(.9,.9,1.2,14,"#ffcf3a");e.rotation.x=Math.PI/2,e.position.y=2.6,i.add(e);const n=me(2,.2,1.4,"#3a3a44");n.position.y=.1,i.add(n);const s=me(1.5,.7,.1,"#1b1b22");s.position.set(0,1.9,.62),i.add(s);const r=[];for(let p=0;p<3;p++){const g=new Ut(new Rn(.42,.55),new Te({map:Yr(["cherry","bell","fish"][p])}));g.position.set(-.46+p*.46,1.9,.69),i.add(g),r.push(g)}const o=new Ut(new Rn(1.2,.3),new Te({map:Dc("JACKPOT",256,64,"#111","#ffd166","bold 40px system-ui")}));o.position.set(0,1.35,.62),i.add(o);const a=new wt;a.position.set(1,1.5,0);const l=Fe(.05,.05,.8,5,"#cccccc");l.position.y=.4;const u=xt(new _e(.16,1),"#ff2d55");u.position.y=.85,a.add(l,u),i.add(a);const f=[];for(let p=0;p<8;p++){const g=new Ut(new xe(.06,6,4),Gi("#ffd166",2));g.position.set(-.75+p*.214,2.32,.62),i.add(g),f.push(g)}const h={spinning:[!1,!1,!1],acc:0,leverT:0,flash:0},d=Object.keys(Nc);return i.userData.setReels=p=>p.forEach((g,_)=>{r[_].material.map=Yr(g),r[_].material.needsUpdate=!0}),i.userData.setSpinning=(p,g)=>{h.spinning[p]=g},i.userData.pull=()=>{h.leverT=1},i.userData.flash=()=>{h.flash=1.2},i.userData.update=(p,g=.016)=>{h.acc+=g,h.acc>.07&&(h.acc=0,h.spinning.forEach((_,m)=>{_&&(r[m].material.map=Yr(d[Math.floor(Math.random()*d.length)]),r[m].material.needsUpdate=!0)})),h.leverT=Math.max(0,h.leverT-g*2.2),a.rotation.x=Math.sin(h.leverT*Math.PI)*1,h.flash=Math.max(0,h.flash-g),f.forEach((_,m)=>{const c=h.flash>0?(Math.floor(p*12)+m)%2:(Math.floor(p*2)+m)%2;_.material.emissiveIntensity=c?2.6:.5})},i}function Z0({x0:i,x1:t,zStart:e,zEnd:n,y:s}){const r=new wt,o=on(9),a=t-i,l=e-n,u=Math.floor(l/.5);for(let d=0;d<u;d++){const p=me(a,.12,.44,["#b98553","#a97845","#c4915c"][d%3]);p.position.set(0,s-.06,e-d*.5-.25),p.rotation.y=(o()-.5)*.02,r.add(p)}for(const d of[-1,1]){const p=me(.16,.16,l,"#6b4326");p.position.set(d*(a/2-.1),s-.24,(e+n)/2),r.add(p)}for(let d=e-.5;d>n;d-=3)for(const p of[-1,1]){const g=Fe(.14,.16,2.2,6,"#5a3820");g.position.set(p*(a/2+.05),s-.4,d),r.add(g);const _=xt(new xe(.16,6,4),"#7a4d2b");_.position.set(p*(a/2+.05),s+.7,d),r.add(_)}for(const d of[-1,1]){const p=new Ut(new xe(.16,8,6),Gi("#ffd98a",2.2));p.position.set(d*(a/2+.05),s+1.2,n+.4),r.add(p);const g=Fe(.05,.05,1.2,5,"#3a3a44");g.position.set(d*(a/2+.05),s+.6,n+.4),r.add(g)}const f=Fe(.35,.3,.8,8,"#8c5a2b");f.position.set(-1.1,s+.4,e-.7),r.add(f);const h=me(.7,.6,.7,"#c99b68");return h.position.set(1,s+.3,e-.9),h.rotation.y=.3,r.add(h),r}function j0(){const i=new wt,t=xt(Pe(new ve(2.2,1.1,5.4,2,1,4),.14,3),"#f4f1e8");t.position.y=.2,i.add(t);const e=me(2.25,.25,5.45,"#e8553c");e.position.y=-.05,i.add(e);const n=Fe(.07,.09,3.2,5,"#6b4326");n.position.set(.2,1.7,-.6),n.rotation.z=.5,i.add(n);const s=xt(new Rn(1.6,1.8),Le("#f7e9c8",{side:Ne}));return s.position.set(.9,2,-.6),s.rotation.set(0,1.2,.5),i.add(s),i.rotation.set(.2,0,.18),i.userData.update=r=>{i.position.y=-.35+Math.sin(r*.9)*.06,i.rotation.x=.2+Math.sin(r*.7)*.03},i}function Q0(){const i=new wt,t=Math.random()*6,e=xt(Pe(new xe(.45,7,5),.02,4),"#ff4d3d");e.position.y=.25;const n=Fe(.47,.47,.18,7,"#ffffff");n.position.y=.3;const s=new Ut(new xe(.1,6,4),Gi("#ffd166",2));s.position.y=.85;const r=Fe(.03,.03,.5,4,"#333");return r.position.y=.6,i.add(e,n,r,s),i.userData.update=o=>{i.position.y=Math.sin(o*1.2+t)*.1,i.rotation.z=Math.sin(o*.9+t)*.12},i}function tg(i=0){const t=new wt,e=on(i*31+5),n=7+e()*9,s=xt(Pe(new ne(n,n*1.25,1.5,9),.5,i+1),"#f0d39a",{cast:!1});s.position.y=-.2,t.add(s);const r=xt(Pe(new Ie(n*.75,3+e()*6,8),.5,i+9),"#5fae52",{cast:!1});if(r.position.y=1.5+1.5,t.add(r),i%2){const o=Ic(i+90);o.position.set(n*.3,1,0),o.scale.setScalar(1.3),t.add(o)}return t}function eg(i=6){const t=new wt,e=[],n=on(33),s=Le("#ffffff",{side:Ne});for(let r=0;r<i;r++){const o=new wt,a=xt(new Ie(.16,.7,5),"#ffffff",{cast:!1});a.rotation.x=Math.PI/2,o.add(a);const l=new wt,u=new wt,f=new Me;f.setAttribute("position",new Yt([0,0,.25,1.1,0,0,0,0,-.25],3)),f.computeVertexNormals();const h=new Ut(f,s),d=new Ut(f,s);d.scale.x=-1,l.add(h),u.add(d),o.add(l,u),o.userData={wl:l,wr:u,rad:14+n()*24,h:12+n()*8,sp:.15+n()*.1,ph:n()*6.28,cx:(n()-.5)*20,cz:(n()-.5)*20},e.push(o),t.add(o)}return t.userData.update=r=>e.forEach(o=>{const a=o.userData,l=r*a.sp+a.ph;o.position.set(a.cx+Math.cos(l)*a.rad,a.h+Math.sin(r*.7+a.ph)*.8,a.cz+Math.sin(l)*a.rad),o.rotation.y=-l+Math.PI,o.rotation.z=-.25;const u=Math.sin(r*8+a.ph)*.6;a.wl.rotation.z=u,a.wr.rotation.z=-u}),t}function ng(i,t){const e=new wt,n=[],s=on(71);for(let r=0;r<i;r++){const o=new wt,a=["#ff7ab6","#ffd166","#7ae0ff","#c58bff"][r%4],l=new Te({color:a,side:Ne}),u=new Me;u.setAttribute("position",new Yt([0,0,0,.22,0,.14,.22,0,-.14],3));const f=new Ut(u,l),h=new Ut(u,l);h.scale.x=-1,o.add(f,h);const d=s()*6.28,p=3+s()*6;o.userData={wl:f,wr:h,cx:Math.cos(d)*p,cz:Math.sin(d)*p,ph:s()*6.28,rad:1+s()*1.5},n.push(o),e.add(o)}return e.userData.update=r=>n.forEach(o=>{const a=o.userData,l=r*.6+a.ph,u=a.cx+Math.cos(l)*a.rad,f=a.cz+Math.sin(l*1.3)*a.rad;o.position.set(u,Math.max(.3,t(u,f))+.9+Math.sin(r*2.3+a.ph)*.3,f),o.rotation.y=-l;const h=Math.sin(r*22+a.ph)*.9;a.wl.rotation.z=h,a.wr.rotation.z=-h}),e}function ig(i,t){const e=new wt,n=on(99),s=new hs(new _e(.11,0),new rn({flatShading:!0}),90),r=new hs(new Ie(.09,.5,4),new rn({color:"#4ea443",flatShading:!0}),260);r.receiveShadow=!0;const o=["#ff7ab6","#ffd166","#ffffff","#ff8a4a","#c58bff"],a=new Jt,l=new Mt;let u=0,f=0,h=0;for(;(u<90||f<260)&&h++<4e3;){const d=n()*6.28,p=n()*13,g=Math.cos(d)*p,_=Math.sin(d)*p,m=i(g,_);m<.3||!t(g,_)||(u<90&&n()<.3?(a.makeTranslation(g,m+.15,_),s.setMatrixAt(u,a),s.setColorAt(u,l.set(o[u%o.length])),u++):f<260&&(a.makeRotationY(n()*6.28).setPosition(g,m+.2,_),r.setMatrixAt(f,a),f++))}return s.count=u,r.count=f,e.add(s,r),e}const sg=1.67,rr=i=>Lc(i)+sg,rg=i=>i*i*(3-2*i);function kn(i,t){const e=Math.hypot(i,t),n=Math.atan2(t,i),s=rr(n),r=Bu.clamp((e-(s-3))/3,0,1),o=rg(r);let a=.6-1.4*o;return a+=3*Math.exp(-((i+5)**2+(t-3.5)**2)/16)*(1-o),a+=.12*Math.sin(i*.9)*Math.cos(t*.8)*(1-o),a}const Vn={x0:-1.3,x1:1.3,zStart:-10.2,zEnd:-20.4,y:.58},or=(i,t)=>i>Vn.x0&&i<Vn.x1&&t<Vn.zStart&&t>Vn.zEnd;function og(i,t){return or(i,t)?Vn.y:Math.max(kn(i,t),.02)}function $r(i,t){if(or(i,t))return!0;const e=Math.hypot(i,t),n=Math.atan2(t,i);return e<Lc(n)+.2}function ag(){const e=(g,_)=>{const m=_%56/56*Math.PI*2,c=Math.atan2(Math.sin(m),Math.cos(m));if(g>18){const U=rr(c)*1.12;return[Math.cos(m)*U,-2.4,Math.sin(m)*U]}const M=rr(c)*(g/18),S=Math.cos(m)*M,y=Math.sin(m)*M;return[S,kn(S,y),y]},n=[],s=[],r=new Mt("#f3d69c"),o=new Mt("#e3bf80"),a=new Mt("#6fc45a"),l=new Mt("#57ab4c"),u=new Mt("#8fd465"),f=on(11),h=(g,_,m)=>{const c=(g[1]+_[1]+m[1])/3;(g[0]+_[0]+m[0])/3,(g[2]+_[2]+m[2])/3;let M;c<-.3?M=o.clone():c<.3?M=r.clone().lerp(o,f()*.5):(M=a.clone().lerp(l,f()),c>1.4&&M.lerp(u,Math.min(1,(c-1.4)/1.6)));for(const S of[g,_,m])n.push(...S),s.push(M.r,M.g,M.b)};for(let g=0;g<=18;g++)for(let _=0;_<56;_++){const m=e(g,_),c=e(g+1,_),M=e(g+1,_+1),S=e(g,_+1);g===0?h(m,M,c):(h(m,S,c),h(c,S,M))}const d=new Me;d.setAttribute("position",new Yt(n,3)),d.setAttribute("color",new Yt(s,3)),d.computeVertexNormals();const p=new Ut(d,new rn({vertexColors:!0,flatShading:!0,roughness:.95}));return p.receiveShadow=!0,p.castShadow=!0,p}const yi={vendor:new P(-6.2,.6,-6.6),grill:new P(-3.2,.6,-8.6),slots:new P(-9.2,.6,-2.6),dockEnd:new P(0,Vn.y,-19.2)};function lg(i){const t=new wt;i.add(t),t.add(ag());const e=on(5),n=[],s=[],r=[],o=(M,S,y)=>r.every(U=>Math.hypot(U[0]-M,U[1]-S)>y)&&!or(M,S)&&!(Math.abs(M)<3&&S<-8.5&&S>-13)&&Object.values(yi).every(U=>Math.hypot(U.x-M,U.z-S)>3.2);let a=0;for(;r.length<12&&a++<400;){const M=e()*Math.PI*2,S=7.5+e()*5,y=Math.cos(M)*S,U=Math.sin(M)*S;if(!$r(y,U)||kn(y,U)<.15||!o(y,U,3.2)||Math.hypot(y-8,U+7)<4.5)continue;r.push([y,U]);const b=Ic(r.length*7);b.position.set(y,kn(y,U)-.1,U),b.rotation.y=e()*6.28,b.scale.setScalar(.8+e()*.15),t.add(b),n.push(b)}for(let M=0;M<16;M++){const S=e()*Math.PI*2,y=rr(S)-.6+e()*1.6,U=Math.cos(S)*y,b=Math.sin(S)*y;if(or(U,b)||Math.abs(U)<3&&b<-9)continue;const A=Uc(.5+e()*1.1,M);A.position.set(U,-.1,b),t.add(A)}t.add(ig(kn,(M,S)=>$r(M,S)&&Object.values(yi).every(y=>Math.hypot(y.x-M,y.z-S)>2.2)&&!(Math.abs(M)<3&&S<-9)));const l=Y0();l.position.set(8.2,kn(8.2,-7)-.2,-7.2),t.add(l),s.push(l);const u=$0();u.position.copy(yi.vendor),u.rotation.y=Math.PI*.12,t.add(u);const f=K0();f.position.copy(yi.grill),f.rotation.y=-.4,t.add(f),s.push(f);const h=J0();h.position.copy(yi.slots),h.rotation.y=Math.PI*.4,t.add(h);const d=Z0(Vn);t.add(d);const p=j0();p.position.set(-11.5,-.2,-13),p.rotation.y=.6,t.add(p),s.push(p);const g=new wt;i.add(g);const _=on(21);for(let M=0;M<6;M++){const S=Q0();S.position.set((_()-.5)*34,0,-16-_()*22),g.add(S),s.push(S)}for(let M=0;M<7;M++){const S=tg(M),y=-Math.PI/2+(M-3)*.45+(_()-.5)*.2,U=55+_()*35;S.position.set(Math.cos(y)*U,0,Math.sin(y)*U-5),g.add(S)}const m=eg(6);i.add(m),s.push(m);const c=ng(6,kn);return t.add(c),s.push(c),{group:t,walkable:$r,groundY:og,terrainHeight:kn,stations:yi,dock:Vn,slotMachine:h,vendor:u,grill:f,lighthouse:l,update(M,S){for(const y of n)y.userData.sway(M);for(const y of s)y.userData.update&&y.userData.update(M,S)}}}const ts="#ffcf9f";function cg(i,t){const e=new wt;i.add(e);const n=new P(-1.5,0,-3),s=new P,r=new wt;e.add(r);const o=xt(new oa(.36,.5,4,8),"#ff7a3d");o.scale.z=.8,o.position.y=1.2,r.add(o);const a=xt(new ne(.37,.37,.12,8),"#2b4a8a");a.position.y=.86,a.scale.z=.8,r.add(a);const l=new wt;l.position.y=1.95,r.add(l),l.add(xt(Pe(new _e(.36,1),.01,2),ts));for(const L of[-1,1]){const I=xt(new xe(.055,6,5),"#222");I.position.set(L*.13,.04,.32),l.add(I)}const u=xt(new _e(.06,0),"#ffb98a");u.position.set(0,-.03,.36),l.add(u);const f=xt(new ne(.62,.62,.05,12),"#f2cf63");f.position.y=.22,l.add(f);const h=xt(new ne(.28,.34,.26,10),"#f2cf63");h.position.y=.36,l.add(h);const d=xt(new ne(.345,.345,.07,10),"#d94a3a");d.position.y=.28,l.add(d);const p=(L,I,z,G)=>{const O=new wt,K=xt(new ve(G,z*.5,G),L);K.position.y=-z*.25;const W=xt(new ve(G*.85,z*.5,G*.85),I);return W.position.y=-z*.75,O.add(K,W),O},g=p("#2b4a8a",ts,.85,.26),_=p("#2b4a8a",ts,.85,.26);g.position.set(-.17,.86,0),_.position.set(.17,.86,0);for(const L of[g,_]){const I=xt(new ve(.26,.12,.38),"#fff");I.position.set(0,-.86,.06),L.add(I),r.add(L)}const m=p("#ff7a3d",ts,.75,.2),c=p("#ff7a3d",ts,.75,.2);m.position.set(-.5,1.55,0),c.position.set(.5,1.55,0),r.add(m,c);const M=new wt;M.position.set(0,-.78,.05),c.add(M),M.rotation.x=1.6;const S=new wt;M.add(S);const y=xt(new ne(.035,.05,1.5,5),"#8b5a2b");y.position.y=.75,S.add(y);const U=xt(new ne(.09,.09,.12,8),"#cfd6de");U.rotation.z=Math.PI/2,U.position.set(.09,.3,0),S.add(U);const b=new wt;b.position.y=1.5,S.add(b);const A=xt(new ne(.02,.035,1.4,5),"#e8553c");A.position.y=.7,b.add(A);const R=new ue;R.position.y=1.4,b.add(R),M.visible=!1;const x={x:new as(1,260,13),y:new as(1,260,13)},v=new as(0,200,10),w={v:0},C={phase:0,facing:Math.PI,anim:null,aimUntil:0,time:0,hop:0,hopV:0};return{group:e,pos:n,vel:s,rod:M,get facing(){return C.facing},set facing(L){C.facing=L},showRod(L){M.visible=L},rodTip(L=new P){return R.updateWorldMatrix(!0,!1),R.getWorldPosition(L)},setBend(L){w.v=L},squash(L){x.y.kick(-L*14),x.x.kick(L*14)},playAnim(L){const I={cast:.55,hook:.45,shoot:.25,celebrate:.9,hurt:.5}[L]||.4;C.anim={name:L,t:0,dur:I},(L==="cast"||L==="shoot"||L==="hook")&&(C.aimUntil=C.time+1.2),L==="hook"&&(C.hopV=5.5,this.squash(.25)),L==="celebrate"&&(C.hopV=6.5,this.squash(.3)),L==="shoot"&&this.squash(.12)},holdAim(L=.3){C.aimUntil=Math.max(C.aimUntil,C.time+L)},update(L,I,z){C.time+=L;const G=Math.hypot(I.x,I.z),O=5.6,K=G>0?new P(I.x/G*O,0,I.z/G*O):new P;s.x=ln(s.x,K.x,G>0?14:18,L),s.z=ln(s.z,K.z,G>0?14:18,L);const W=n.x+s.x*L,V=n.z+s.z*L;t.walkable(W,V)?(n.x=W,n.z=V):t.walkable(W,n.z)?(n.x=W,s.z=0):t.walkable(n.x,V)?(n.z=V,s.x=0):s.x=s.z=0;const et=t.groundY(n.x,n.z);C.hopV-=22*L,C.hop=Math.max(0,C.hop+C.hopV*L),C.hop===0&&C.hopV<0&&(C.hopV<-3&&this.squash(.18),C.hopV=0),n.y=ln(n.y,et,20,L)+0,e.position.set(n.x,n.y+C.hop,n.z);const pt=Math.hypot(s.x,s.z),Y=Math.min(1,pt/O);C.time<C.aimUntil&&z?C.facing=Cl(C.facing,Math.atan2(z.x-n.x,z.z-n.z),1-Math.exp(-16*L)):pt>.3&&(C.facing=Cl(C.facing,Math.atan2(s.x,s.z),1-Math.exp(-14*L))),e.rotation.y=C.facing,C.phase+=L*(4+pt*2.4);const J=Math.sin(C.phase)*.95*Y;g.rotation.x=J,_.rotation.x=-J;let ot=Math.sin(C.phase)*.8*Y;m.rotation.x=-ot,c.rotation.x=M.visible?-.5+ot*.25:ot,m.rotation.z=.08,c.rotation.z=-.08;const nt=Math.abs(Math.sin(C.phase))*.09*Y+Math.sin(C.time*2.2)*.012*(1-Y);r.position.y=nt,r.rotation.x=.16*Y,r.rotation.z=Math.sin(C.phase)*.04*Y,l.rotation.y=Math.sin(C.time*1.1)*.08*(1-Y);const _t=C.anim;if(_t){_t.t+=L;const yt=Math.min(1,_t.t/_t.dur);if(_t.name==="cast")if(yt<.35){const Lt=An.outCubic(yt/.35);c.rotation.x=-.5-2.1*Lt,r.rotation.x-=.18*Lt}else{const Lt=An.outBack((yt-.35)/.65);c.rotation.x=-2.6+2.6*Lt,r.rotation.x+=.22*Math.sin(Math.min(1,(yt-.35)*3)*Math.PI)}else if(_t.name==="hook")c.rotation.x=-2.4*(1-yt)-.3*yt;else if(_t.name==="shoot")c.rotation.x=-1.5-.5*(1-yt),r.rotation.x-=.2*(1-yt);else if(_t.name==="celebrate"){const Lt=Math.sin(yt*Math.PI);m.rotation.x=-2.8*Lt,c.rotation.x=-2.8*Lt,r.rotation.y=yt*Math.PI*2}else _t.name==="hurt"&&(r.rotation.z+=Math.sin(yt*30)*.15*(1-yt));yt>=1&&(C.anim=null,r.rotation.y=0)}x.x.target=1,x.y.target=1,x.x.update(L),x.y.update(L),r.scale.set(x.x.value,x.y.value,x.x.value),v.target=w.v,v.update(L),b.rotation.x=-v.value*.9+Math.sin(C.time*30)*.02*Math.abs(w.v),S.rotation.x=-v.value*.25}}}function ug(i){const e=i.position.clone(),n=new P(0,1,-4),s=new as(0,140,12),r=[];let o=null,a=0;const l=new P(0,11.5,13.5),u=new P;return{camera:i,shake(f,h=.25){r.push({amp:f,dur:h,t:0})},kick(f){s.kick(f*14)},setFocus(f){o=f},setOffset(f,h,d){l.set(f,h,d)},update(f,h,d){a=ln(a,o?1:0,4,f);const p=u.copy(h).add(l);o&&p.lerp(u.set(o.x*.25+h.x*.75,p.y,p.z),0),e.set(ln(e.x,p.x,5,f),ln(e.y,p.y,5,f),ln(e.z,p.z,5,f));const g=new P(h.x,h.y+1.2,h.z-2.5);o&&g.lerp(new P(o.x,.5,o.z),.38*a),n.set(ln(n.x,g.x,6,f),ln(n.y,g.y,6,f),ln(n.z,g.z,6,f));let _=0,m=0;for(let M=r.length-1;M>=0;M--){const S=r[M];S.t+=f;const y=1-S.t/S.dur;if(y<=0){r.splice(M,1);continue}_+=(Math.sin(d*90+M)*.5+Math.sin(d*53))*S.amp*y*y,m+=(Math.cos(d*77+M)*.5+Math.cos(d*61))*S.amp*y*y}i.position.set(e.x+_,e.y+m,e.z),i.lookAt(n),s.update(f);const c=50+s.value;Math.abs(i.fov-c)>.01&&(i.fov=c,i.updateProjectionMatrix())}}}function hg(i,t){const n=new la(.5,0),s=new Te({color:16777215,fog:!1}),r=new hs(n,s,1600);r.instanceColor=new zo(new Float32Array(1600*3),3),r.frustumCulled=!1,r.count=0,i.add(r);const o=W=>new Float32Array(W),a=o(1600),l=o(1600),u=o(1600),f=o(1600),h=o(1600),d=o(1600),p=o(1600),g=o(1600),_=o(1600),m=o(1600),c=o(1600),M=o(1600),S=o(1600),y=o(1600),U=o(1600),b=o(1600),A=o(1600);let R=0;const x=new ue,v=new Mt;function w(W,V,et,pt,Y,J,ot){if(R>=1600)return;const nt=R++;a[nt]=W,l[nt]=V,u[nt]=et,f[nt]=pt,h[nt]=Y,d[nt]=J,p[nt]=g[nt]=ot.life,_[nt]=ot.size,m[nt]=ot.sizeEnd??0,c[nt]=ot.gravity??0,M[nt]=ot.drag??0,S[nt]=(Math.random()-.5)*10,A[nt]=Math.random()*6.28,v.set(ot.color),y[nt]=v.r,U[nt]=v.g,b[nt]=v.b}const C=W=>W[Math.floor(Math.random()*W.length)],N={burst(W,{count:V=12,color:et="#fff",colors:pt,speed:Y=4,up:J=2,life:ot=.6,size:nt=.2,sizeEnd:_t=0,gravity:yt=12,drag:Lt=1.5,flat:ie=1}={}){for(let kt=0;kt<V;kt++){const ae=Math.random()*6.283,B=Math.acos(2*Math.random()-1),ye=Y*(.4+Math.random()*.8);w(W.x,W.y,W.z,Math.sin(B)*Math.cos(ae)*ye,Math.cos(B)*ye*ie+J,Math.sin(B)*Math.sin(ae)*ye,{color:pt?C(pt):et,life:ot*(.7+Math.random()*.6),size:nt*(.6+Math.random()*.8),sizeEnd:_t,gravity:yt,drag:Lt})}},splash(W,V=1){const et=Math.round(14*V);for(let pt=0;pt<et;pt++){const Y=Math.random()*6.283,J=(1+Math.random()*2.5)*V;w(W.x,W.y,W.z,Math.cos(Y)*J,(4+Math.random()*4)*Math.sqrt(V),Math.sin(Y)*J,{color:C(["#ffffff","#d8f6ff","#9fe6ff"]),life:.7+Math.random()*.3,size:.13+Math.random()*.12,sizeEnd:.02,gravity:20,drag:.4})}},stars(W,V=8,et=1){N.burst(W,{count:V,colors:["#ffe14d","#ffffff","#ffb830"],speed:7*et,up:1,life:.45,size:.34*et,gravity:6,drag:3})},sparkles(W,{count:V=14,color:et="#fff6a8",radius:pt=.6,life:Y=1,size:J=.16}={}){for(let ot=0;ot<V;ot++){const nt=Math.random()*6.283,_t=Math.random()*pt;w(W.x+Math.cos(nt)*_t,W.y+Math.random()*.5,W.z+Math.sin(nt)*_t,(Math.random()-.5)*.8,1.2+Math.random()*2,(Math.random()-.5)*.8,{color:Array.isArray(et)?C(et):et,life:Y*(.6+Math.random()*.8),size:J,sizeEnd:0,gravity:-1.5,drag:1})}},ring(W,{count:V=20,color:et="#ffffff",speed:pt=5,life:Y=.5,size:J=.2}={}){for(let ot=0;ot<V;ot++){const nt=ot/V*6.283;w(W.x,W.y+.05,W.z,Math.cos(nt)*pt,.2,Math.sin(nt)*pt,{color:et,life:Y,size:J,sizeEnd:0,gravity:0,drag:4})}},puff(W,{count:V=6,color:et="#e9eef2",size:pt=.35,life:Y=.7}={}){for(let J=0;J<V;J++)w(W.x+(Math.random()-.5)*.3,W.y,W.z+(Math.random()-.5)*.3,(Math.random()-.5)*1.5,.8+Math.random(),(Math.random()-.5)*1.5,{color:et,life:Y*(.7+Math.random()*.6),size:pt,sizeEnd:pt*2,gravity:-.5,drag:2})},update(W){for(let V=0;V<R;){if(p[V]-=W,p[V]<=0){const J=--R;V!==J&&(a[V]=a[J],l[V]=l[J],u[V]=u[J],f[V]=f[J],h[V]=h[J],d[V]=d[J],p[V]=p[J],g[V]=g[J],_[V]=_[J],m[V]=m[J],c[V]=c[J],M[V]=M[J],S[V]=S[J],y[V]=y[J],U[V]=U[J],b[V]=b[J],A[V]=A[J]);continue}const et=1-p[V]/g[V],pt=Math.exp(-M[V]*W);h[V]-=c[V]*W,f[V]*=pt,d[V]*=pt,h[V]*=c[V]===0?pt:1,a[V]+=f[V]*W,l[V]+=h[V]*W,u[V]+=d[V]*W;const Y=_[V]+(m[V]-_[V])*et*et;x.position.set(a[V],l[V],u[V]),x.rotation.set(A[V]+et*S[V],A[V]+et*S[V]*.7,0),x.scale.setScalar(Math.max(Y,.001)),x.updateMatrix(),r.setMatrixAt(V,x.matrix),r.instanceColor.setXYZ(V,y[V],U[V],b[V]),V++}r.count=R,r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0,K(W)}},L=96,I=new ne(.2,.2,.06,10);I.rotateX(Math.PI/2);const z=new rn({color:16765500,emissive:16754688,emissiveIntensity:.6,metalness:.6,roughness:.3,flatShading:!0}),G=new hs(I,z,L);G.frustumCulled=!1,G.count=0,G.castShadow=!0,i.add(G);const O=[];N.coins=(W,V=8,et=9)=>{for(let pt=0;pt<V&&O.length<L;pt++){const Y=Math.random()*6.283,J=1.5+Math.random()*3;O.push({x:W.x,y:W.y,z:W.z,vx:Math.cos(Y)*J,vy:et*(.7+Math.random()*.5),vz:Math.sin(Y)*J,a:Math.random()*6,w:6+Math.random()*10,t:0,life:1.8+Math.random()*.5})}};function K(W){for(let V=O.length-1;V>=0;V--){const et=O[V];if(et.t+=W,et.t>et.life){O.splice(V,1);continue}et.vy-=26*W,et.x+=et.vx*W,et.y+=et.vy*W,et.z+=et.vz*W,et.a+=et.w*W;const pt=t(et.x,et.z)+.15;et.y<pt&&et.vy<0&&(et.y=pt,et.vy*=-.5,et.vx*=.7,et.vz*=.7,Math.abs(et.vy)<1&&(et.vy=0))}G.count=O.length,O.forEach((V,et)=>{const pt=Math.min(1,(V.life-V.t)*3);x.position.set(V.x,V.y,V.z),x.rotation.set(V.a,V.a*.5,0),x.scale.setScalar(Math.max(pt,.001)),x.updateMatrix(),G.setMatrixAt(et,x.matrix)}),G.instanceMatrix.needsUpdate=!0}return N}function dg(i,t){const e=document.createElement("div");e.className="ft-root",i.appendChild(e);const n=[],s=new P,r=[];return{spawn(o,a,{color:l="#ffffff",size:u=36,life:f=1.1,rise:h=70,stroke:d="#14304a",wobble:p=0,delay:g=0,oy:_=0,ox:m=0}={}){const c=r.pop()||document.createElement("div");c.className="ft",c.textContent=o,c.style.color=l,c.style.fontSize=u+"px",c.style.webkitTextStroke=Math.max(4,u/6)+"px "+d,c.style.opacity="0",e.appendChild(c),n.push({el:c,world:a.clone(),life:f,rise:h,age:-g,wobble:p,size:u,oy:_,ox:m,rot:(Math.random()-.5)*.25})},update(o){for(let a=n.length-1;a>=0;a--){const l=n[a];if(l.age+=o,l.age<0)continue;const u=l.age/l.life;if(u>=1){l.el.remove(),r.push(l.el),n.splice(a,1);continue}if(s.copy(l.world).project(t),s.z>1){l.el.style.opacity="0";continue}const f=(s.x*.5+.5)*innerWidth+l.ox,h=(-s.y*.5+.5)*innerHeight+l.oy-l.rise*An.outCubic(Math.min(1,u*1.3)),d=An.outBack(Math.min(1,l.age/.22)),p=d*(u>.75?1-(u-.75)*2:1)*(1+Math.sin(l.age*20)*l.wobble);l.el.style.opacity=String(u>.7?1-(u-.7)/.3:1),l.el.style.transform=`translate(${f}px, ${h}px) translate(-50%, -50%) scale(${Math.max(p,.01)}) rotate(${l.rot*(1-u)}rad)`}}}}function fg(){let i=0;return{trigger(t){i=Math.max(i,t/1e3)},update(t){i=Math.max(0,i-t)},scale(){return i>0?.03:1},get active(){return i>0}}}const pg={common:60,uncommon:25,rare:10,epic:4,legendary:1},ar={common:0,uncommon:1,rare:2,epic:3,legendary:4},Rl={common:"#ffffff",uncommon:"#7CFC7C",rare:"#4db8ff",epic:"#c86bff",legendary:"#ffc933"},mg=[{id:"sardine",name:"Sardine",rarity:"common",baseValue:4,hp:10,minTier:1,fight:.15,radius:.5,color:10471912},{id:"mackerel",name:"Mackerel",rarity:"common",baseValue:6,hp:15,minTier:1,fight:.2,radius:.55,color:5939400},{id:"shrimp",name:"Shrimp",rarity:"common",baseValue:8,hp:8,minTier:1,fight:.1,radius:.4,color:16751226},{id:"crab",name:"Crab",rarity:"uncommon",baseValue:15,hp:30,minTier:1,fight:.3,radius:.6,color:15226172},{id:"flyingFish",name:"Flying Fish",rarity:"uncommon",baseValue:25,hp:20,minTier:2,fight:.3,radius:.6,color:4182224},{id:"lobster",name:"Lobster",rarity:"uncommon",baseValue:30,hp:40,minTier:2,fight:.35,radius:.7,color:12857375},{id:"seahorse",name:"Seahorse",rarity:"rare",baseValue:60,hp:25,minTier:2,fight:.3,radius:.5,color:16763210},{id:"urchin",name:"Sea Urchin",rarity:"rare",baseValue:75,hp:50,minTier:3,fight:.35,radius:.6,color:6963104},{id:"voxelFish",name:"Voxel Fish",rarity:"rare",baseValue:90,hp:40,minTier:3,fight:.4,radius:.7,color:7070571},{id:"dripFish",name:"Drip Fish",rarity:"epic",baseValue:220,hp:60,minTier:3,fight:.5,radius:.8,color:16732067},{id:"superdwarf",name:"Superdwarf Fish",rarity:"epic",baseValue:350,hp:80,minTier:4,fight:.55,radius:.8,color:16747039},{id:"goldenKoi",name:"Golden Koi",rarity:"legendary",baseValue:1e3,hp:150,minTier:4,fight:.7,radius:1,color:16765500}];function gg(i){const{bus:t,particles:e,text:n,hitstop:s,camRig:r,water:o,player:a,gfx:l}=i,u=(m,c,M)=>new P(m,c,M),f=(m,c)=>u(m.x,m.y+c,m.z),h={tension:0,reeling:!1,dangerT:0,flash:0,flashColor:new Mt("#ff3b30")},d=m=>u(m.x,Qs(m.x,m.z,i.time)+.1,m.z),p=(m,c)=>{h.flashColor.set(m),h.flash=Math.max(h.flash,c)},g=()=>a.rodTip(new P);t.on("cast:release",()=>{r.kick(2),a.squash(.12),e.burst(g(),{count:6,colors:["#ffffff","#cfefff"],speed:3,up:0,life:.3,size:.12,gravity:0})}),t.on("bobber:land",({pos:m})=>{const c=d(m);o.ripple(m.x,m.z,1),e.splash(c,1),r.shake(.03,.15)}),t.on("nibble",({pos:m})=>{o.ripple(m.x,m.z,.4),e.splash(d(m),.25)}),t.on("bite",({pos:m})=>{const c=d(m);o.ripple(m.x,m.z,1.3),e.splash(c,.9),e.ring(c,{count:16,color:"#ffffff",speed:3.5,life:.5}),n.spawn("!",f(c,1.8),{color:"#ffdd33",size:84,life:1.2,rise:30,wobble:.06}),r.shake(.16,.3),r.kick(-3),a.squash(.18)}),t.on("bite:miss",({pos:m})=>n.spawn("Too slow…",f(m,1.2),{color:"#c9d3dc",size:30,life:1.2})),t.on("cast:retrieve",({pos:m})=>{n.spawn("Reeled in early",f(m,1),{color:"#c9d3dc",size:26,life:1}),o.ripple(m.x,m.z,.5)}),t.on("cast:refused",({reason:m})=>{const c={norod:"Buy a rod first! (E at the market)",nobait:"Out of bait!",land:"Aim at the water!"}[m]||"Can’t cast";n.spawn(c,f(a.pos,3.2),{color:"#ff9f8a",size:30,life:1.4,rise:40}),a.squash(.1),r.shake(.05,.12)}),t.on("hook",({pos:m})=>{const c=d(m);e.splash(c,1.6),e.ring(c,{count:24,speed:5,life:.6}),n.spawn("HOOKED!",f(c,2.1),{color:"#ff9a3c",size:60,life:1.2,rise:50,wobble:.05}),r.shake(.28,.35),r.kick(-6),s.trigger(70),o.ripple(m.x,m.z,1.6)}),t.on("reel:update",({tension:m,holding:c,pos:M})=>{h.tension=m,h.reeling=!0,c&&Math.random()<.3&&e.sparkles(d(M),{count:1,color:["#ffffff","#bfefff"],radius:.5,life:.6,size:.12}),m>.82&&(r.shake(.03+(m-.82)*.5,.08),Math.random()<.25&&e.burst(g(),{count:2,color:"#ff5a3a",speed:2,up:1,life:.3,size:.1,gravity:4}),i.time-h.dangerT>.9&&(h.dangerT=i.time,n.spawn("LET GO!",f(a.pos,3.4),{color:"#ff4d3d",size:34,life:.8,rise:20,wobble:.1})))});const _=()=>{h.reeling=!1,h.tension=0};return t.on("reel:snap",({pos:m})=>{_();const c=d(m);e.burst(c,{count:18,colors:["#ff4d3d","#ffb0a0","#ffffff"],speed:6,up:2,life:.6,size:.22}),n.spawn("SNAP!",f(c,2),{color:"#ff4d3d",size:70,life:1.2,rise:40,wobble:.08}),r.shake(.45,.4),r.kick(5),s.trigger(90),p("#ff3b30",.7),a.playAnim("hurt")}),t.on("reel:escape",({pos:m})=>{_(),n.spawn("Got away…",f(d(m),1.6),{color:"#c9d3dc",size:36,life:1.3}),e.puff(d(m),{color:"#e9f6ff"})}),t.on("catch:land",({creature:m,pos:c})=>{_();const M=ar[m.rarity],S=Rl[m.rarity],y=f(c,.3);e.burst(y,{count:16+M*14,colors:[S,"#ffffff"],speed:6+M,up:3,life:.8,size:.24+M*.03,gravity:10}),e.splash(d(c),1.8),e.sparkles(y,{count:10+M*8,color:[S,"#ffffff"],radius:1,life:1.2}),n.spawn(m.name+"!",f(c,2.4),{color:S==="#ffffff"?"#fff8dc":S,size:44+M*8,life:1.7,rise:80,wobble:.04}),M>=2&&n.spawn(m.rarity.toUpperCase(),f(c,2.4),{color:S,size:26,life:1.6,rise:80,delay:.15,oy:44+M*4}),r.shake(.15+M*.05,.3),r.kick(4+M),M>=3&&(s.trigger(120+M*40),p(S,.5)),M===4&&(e.coins(f(c,1),12),n.spawn("LEGENDARY!!!",f(c,2.4),{color:"#ffd23c",size:76,life:2.2,rise:60,wobble:.07,oy:-110,delay:.1}))}),t.on("catch:bounce",({pos:m,impact:c})=>{e.puff(f(m,.05),{count:3,size:.25,life:.4}),r.shake(Math.min(.12,c*.008),.12)}),t.on("creature:splash",({pos:m})=>{const c=d(m);e.splash(c,1),o.ripple(m.x,m.z,1)}),t.on("creature:lost",({ent:m})=>n.spawn("Got away!",f(m.pos,1.2),{color:"#c9d3dc",size:32,life:1.2})),t.on("creature:escaping",({ent:m})=>n.spawn("It’s escaping!",f(m.pos,1.6),{color:"#ffd166",size:30,life:1.2,wobble:.08})),t.on("hit",({pos:m,damage:c,air:M,crit:S})=>{s.trigger(55),e.stars(m,8,1),e.ring(m,{count:12,color:"#ffffff",speed:4,life:.3,size:.15}),n.spawn(String(Math.round(c)),f(m,.9),{color:M?"#7ae0ff":"#ffffff",size:28+Math.min(20,c*.3),life:.8,rise:60,wobble:.05}),r.shake(.18,.2)}),t.on("shoot",({from:m,weapon:c})=>{e.burst(m,{count:6,colors:["#ffe14d","#ffffff"],speed:5,up:0,life:.18,size:.16,gravity:0}),r.shake(c==="shotgun"?.22:.08,.15),r.kick(c==="shotgun"?3:1.2)}),t.on("explosion",({pos:m,radius:c})=>{e.burst(m,{count:40,colors:["#ffb830","#ff6a1f","#ffffff","#4a4a4a"],speed:9,up:3,life:.8,size:.5,sizeEnd:.05,gravity:5}),e.ring(m,{count:30,color:"#ffd166",speed:c*2.4,life:.5,size:.35}),r.shake(.7,.5),r.kick(7),s.trigger(120),p("#ffb830",.5)}),t.on("kill",({creature:m,pos:c,value:M,mult:S,tags:y=[]})=>{const U=ar[m.rarity],b=Rl[m.rarity];s.trigger(100+Math.min(120,S*12)),e.burst(c,{count:24+U*8,colors:[b,"#ffffff","#ffe14d"],speed:8,up:3,life:.7,size:.28,gravity:12}),e.stars(c,10,1.3),e.coins(c,Math.min(26,5+Math.round(Math.log2(M+1)*2)),10),n.spawn("+$"+M,f(c,1.2),{color:S>1?"#7dff7a":"#b8ff9a",size:40+Math.min(40,S*6),life:1.4,rise:90,wobble:.05}),y.forEach((A,R)=>n.spawn(A,f(c,1.2),{color:"#ffe14d",size:34+(A.includes("360")?20:0),life:1.5,rise:90,delay:.1+R*.12,wobble:.06,oy:-(R+1)*52})),r.shake(.35+Math.min(.5,S*.05),.35),r.kick(5+Math.min(6,S)),S>=5&&p("#ffe14d",.55),a.squash(.15)}),t.on("loot:collect",({item:m})=>{e.sparkles(f(a.pos,1.5),{count:8,color:["#ffe14d","#ffffff"],radius:.5,life:.6}),a.squash(.1)}),t.on("sell",({total:m,count:c})=>{if(!c)return;const M=i.island.stations.vendor.clone();M.y+=2.4,n.spawn("SOLD! +$"+m,M,{color:"#7dff7a",size:46,life:1.8,rise:80,wobble:.05}),e.coins(u(M.x,M.y-.5,M.z+1),Math.min(30,6+c*2),11),r.shake(.1,.25),e.stars(u(M.x,M.y-1,M.z+1),8,1)}),t.on("purchase",()=>{e.sparkles(f(a.pos,1.3),{count:16,color:["#fff6a8","#ffffff","#9fe6ff"],radius:.8,life:1.1}),a.squash(.18),a.playAnim("celebrate")}),t.on("cook:done",({result:m})=>{const c=i.island.stations.grill.clone();c.y+=1.6;const M={cooked:["PERFECT! ×1.5","#7dff7a"],burnt:["BURNT…","#8a8a8a"],raw:["Raw","#c9d3dc"]}[m];n.spawn(M[0],c,{color:M[1],size:44,life:1.5,rise:70,wobble:.05}),e.burst(c,{count:m==="cooked"?18:8,colors:m==="cooked"?["#ffb830","#ff6a1f","#fff"]:["#555","#888"],speed:4,up:2,life:.7,size:.25}),m!=="cooked"&&e.puff(c,{color:"#666",count:6})}),t.on("slots:spin",()=>{i.island.slotMachine.userData.pull(),r.shake(.05,.15)}),t.on("slots:win",({payout:m,jackpot:c})=>{const M=i.island.stations.slots.clone();M.y+=3,i.island.slotMachine.userData.flash(),n.spawn(c?"JACKPOT!!!":"WIN +$"+m,M,{color:"#ffd23c",size:c?84:52,life:2,rise:60,wobble:.08}),e.coins(M,c?40:14,12),e.stars(M,14,1.4),r.shake(c?.6:.2,.5),c&&(p("#ffd23c",.8),s.trigger(200))}),t.on("boss:summon",()=>{r.shake(.6,1.2),p("#ff3b30",.4),n.spawn("SOMETHING STIRS…",f(i.island.stations.dockEnd,3.5),{color:"#ff7a5c",size:52,life:2.4,rise:40,wobble:.05})}),t.on("boss:stun",({pos:m})=>{r.shake(.5,.5),s.trigger(160),n.spawn("STUNNED! SHOOT IT!",f(m,4),{color:"#ffe14d",size:56,life:2,rise:30,wobble:.08}),p("#ffe14d",.5)}),t.on("boss:hit",({pos:m,damage:c})=>{e.burst(m,{count:14,colors:["#ff7a5c","#ffffff"],speed:7,up:2,life:.5,size:.35}),r.shake(.3,.25),s.trigger(50),n.spawn(String(Math.round(c)),f(m,1.5),{color:"#ffb830",size:44,life:.9,rise:70})}),t.on("boss:blocked",({pos:m})=>n.spawn("CLANG!",f(m,1.5),{color:"#c9d3dc",size:32,life:.7,rise:40})),t.on("boss:down",({pos:m})=>{r.shake(1,1.2),s.trigger(450),p("#ffffff",.9),e.coins(f(m,2),60,14),e.burst(f(m,2),{count:80,colors:["#ffd23c","#ff7a5c","#fff"],speed:12,up:4,life:1.2,size:.5,gravity:8}),n.spawn("BOSS DEFEATED!",f(m,5),{color:"#ffd23c",size:86,life:3,rise:30,wobble:.06})}),{update(m){const c=h.reeling?Math.max(0,(h.tension-.72)/.28):0,M=Math.max(h.flash,c*.35),S=l.grade.uniforms;S.uFlash.value+=(M-S.uFlash.value)*(1-Math.exp(-14*m)),S.uFlashColor.value.lerp(c>.05&&h.flash<.05?new Mt("#ff3b30"):h.flashColor,.3),h.flash=Math.max(0,h.flash-m*2.2),h.reeling||(h.tension=0),h.reeling=!1}}}const Pl=[0,2,4,7,9],Xs=i=>440*Math.pow(2,(i-69)/12);function vg(i,t){let e=null,n,s,r,o,a=!1,l=0,u=0;function f(){if(e){e.state==="suspended"&&e.resume();return}const x=window.AudioContext||window.webkitAudioContext;if(!x)return;e=new x;const v=e.createDynamicsCompressor();v.threshold.value=-14,v.ratio.value=5,n=e.createGain(),n.gain.value=a?0:.75,n.connect(v),v.connect(e.destination),s=e.createGain(),s.gain.value=1,s.connect(n),r=e.createGain(),r.gain.value=.55,r.connect(n),o=e.createBuffer(1,e.sampleRate*2,e.sampleRate);const w=o.getChannelData(0);for(let C=0;C<w.length;C++)w[C]=Math.random()*2-1;S(),l=e.currentTime+.2,setInterval(M,100)}function h({freq:x=440,type:v="sine",dur:w=.15,vol:C=.25,slide:N=1,delay:L=0,attack:I=.004,out:z=s,detune:G=0}){if(!e)return;const O=e.currentTime+L,K=e.createOscillator(),W=e.createGain();K.type=v,K.frequency.setValueAtTime(x,O),K.detune.value=G,N!==1&&K.frequency.exponentialRampToValueAtTime(Math.max(20,x*N),O+w),W.gain.setValueAtTime(1e-4,O),W.gain.exponentialRampToValueAtTime(C,O+I),W.gain.exponentialRampToValueAtTime(1e-4,O+w),K.connect(W),W.connect(z),K.start(O),K.stop(O+w+.05)}function d({dur:x=.2,vol:v=.2,type:w="lowpass",freq:C=2e3,freqEnd:N,q:L=1,delay:I=0,out:z=s,attack:G=.005}){if(!e)return;const O=e.currentTime+I,K=e.createBufferSource();K.buffer=o,K.loop=!0;const W=e.createBiquadFilter();W.type=w,W.frequency.setValueAtTime(C,O),W.Q.value=L,N&&W.frequency.exponentialRampToValueAtTime(Math.max(20,N),O+x);const V=e.createGain();V.gain.setValueAtTime(1e-4,O),V.gain.exponentialRampToValueAtTime(v,O+G),V.gain.exponentialRampToValueAtTime(1e-4,O+x),K.connect(W),W.connect(V),V.connect(z),K.start(O,Math.random()),K.stop(O+x+.05)}const p=(x,v=.08)=>x*(1+(Math.random()-.5)*2*v),g=(x,{type:v="triangle",step:w=.07,dur:C=.2,vol:N=.2,base:L=72}={})=>x.forEach((I,z)=>h({freq:Xs(L+I),type:v,dur:C,vol:N,delay:z*w}));function _(x=.25,v=.7){if(!e)return;const w=e.currentTime;r.gain.cancelScheduledValues(w),r.gain.setTargetAtTime(.55*x,w,.02),r.gain.setTargetAtTime(.55,w+v,.25)}const m=[[48,0],[45,3],[41,5],[43,4]],c=[4,2,0,2,4,4,2,4,0,2,4,3,2,0,1,2];function M(){if(!e||e.state!=="running")return;const x=60/96/2;for(;l<e.currentTime+.35;){const v=u%32,w=Math.floor(v/8)%4,[C]=m[w],N=l-e.currentTime;if(v%4===0&&h({freq:Xs(C),type:"triangle",dur:.5,vol:.14,delay:N,out:r,attack:.01}),v%8===4&&h({freq:Xs(C+7),type:"triangle",dur:.35,vol:.08,delay:N,out:r}),v%2===0||Math.random()<.3){const L=c[(v+w*3)%c.length],I=60+(w%2?0:12)*0;Math.random()<.72&&h({freq:Xs(I+Pl[L%5]+(L>4?12:0)),type:"triangle",dur:.32,vol:.09,delay:N,out:r,attack:.003})}v%2===1&&d({dur:.05,vol:.02,type:"highpass",freq:6e3,delay:N,out:r}),l+=x,u++}Math.random()<.01&&y()}function S(){const x=e.createBufferSource();x.buffer=o,x.loop=!0;const v=e.createBiquadFilter();v.type="lowpass",v.frequency.value=500,v.Q.value=.7;const w=e.createGain();w.gain.value=.06;const C=e.createOscillator(),N=e.createGain();C.frequency.value=.13,N.gain.value=.035,C.connect(N),N.connect(w.gain);const L=e.createOscillator(),I=e.createGain();L.frequency.value=.09,I.gain.value=180,L.connect(I),I.connect(v.frequency),x.connect(v),v.connect(w),w.connect(n),x.start(),C.start(),L.start()}function y(){h({freq:1700,type:"sine",dur:.35,vol:.03,slide:1.4,out:r}),h({freq:2300,type:"sine",dur:.4,vol:.025,slide:.6,delay:.3,out:r})}let U=0;const b=(x,v)=>i.on(x,w=>{e&&v(w||{})});b("ui:click",()=>h({freq:620,type:"square",dur:.06,vol:.09,slide:1.4})),b("ui:deny",()=>h({freq:220,type:"sawtooth",dur:.18,vol:.12,slide:.6})),b("ui:open",()=>{g([0,4,7],{step:.04,dur:.12,vol:.1,base:76})}),b("game:start",()=>g([0,4,7,12,16],{step:.07,dur:.3,vol:.14,base:67})),b("cast:refused",()=>{h({freq:200,type:"sawtooth",dur:.2,vol:.14,slide:.55})}),b("cast:charge",({power:x})=>{Math.random()<.12&&h({freq:300+x*900,type:"sine",dur:.05,vol:.05})}),b("cast:release",({power:x})=>{d({dur:.35,vol:.22,type:"bandpass",freq:500,freqEnd:2600,q:2}),h({freq:400+x*300,type:"sine",dur:.2,vol:.06,slide:2})});const A=(x=1)=>{d({dur:.45,vol:.28*x,freq:3200,freqEnd:250}),h({freq:p(190),type:"sine",dur:.25,vol:.14*x,slide:.4})};b("bobber:land",()=>A()),b("creature:splash",()=>A(.9)),b("nibble",()=>{h({freq:p(900),type:"sine",dur:.05,vol:.1}),h({freq:p(1200),type:"sine",dur:.04,vol:.06,delay:.06})}),b("bite",()=>{h({freq:880,type:"square",dur:.09,vol:.14,slide:.75}),h({freq:880,type:"square",dur:.09,vol:.14,slide:.75,delay:.1}),h({freq:90,type:"sine",dur:.25,vol:.3,slide:.5})}),b("bite:miss",()=>h({freq:330,type:"triangle",dur:.3,vol:.12,slide:.5})),b("hook",()=>{h({freq:260,type:"sine",dur:.3,vol:.28,slide:3}),h({freq:780,type:"triangle",dur:.2,vol:.1,delay:.05,slide:.5}),A(1.3)}),b("reel:update",({tension:x,holding:v})=>{U-=1/60,!(!v||U>0)&&(U=.16-x*.1,h({freq:380+x*900,type:"square",dur:.035,vol:.06}),d({dur:.03,vol:.05,type:"highpass",freq:3e3}),x>.85&&h({freq:1500,type:"sine",dur:.06,vol:.06,delay:.05}))}),b("reel:snap",()=>{h({freq:900,type:"sawtooth",dur:.35,vol:.2,slide:.12}),d({dur:.12,vol:.2,type:"highpass",freq:2500})}),b("reel:escape",()=>g([0,-3,-7],{type:"triangle",step:.12,dur:.3,vol:.14,base:64})),b("catch:land",({creature:x})=>{const v=ar[x.rarity],w=3+v*2;g(Pl.concat([12,14,16]).slice(0,w).map(C=>C+0),{step:.065,dur:.28,vol:.18,base:67+v*2}),v>=3&&(g([0,7,12,16,19,24],{type:"square",step:.05,dur:.4,vol:.06,base:79}),_(.3,1.4))}),b("catch:bounce",({impact:x})=>h({freq:140,type:"sine",dur:.14,vol:Math.min(.3,x*.03),slide:.4})),b("shoot",({weapon:x})=>{x==="slingshot"?(h({freq:520,type:"triangle",dur:.14,vol:.2,slide:.35}),d({dur:.07,vol:.08,type:"highpass",freq:2e3})):x==="pistol"?(d({dur:.12,vol:.34,type:"bandpass",freq:2200,freqEnd:500,q:.8}),h({freq:170,type:"square",dur:.1,vol:.2,slide:.3})):x==="shotgun"?(d({dur:.32,vol:.5,freq:2600,freqEnd:180}),h({freq:90,type:"sine",dur:.3,vol:.4,slide:.4})):d({dur:.3,vol:.14,type:"bandpass",freq:400,freqEnd:1600,q:2})}),b("hit",({air:x})=>{d({dur:.09,vol:.28,type:"bandpass",freq:p(1800),q:1}),h({freq:p(240),type:"square",dur:.09,vol:.18,slide:.4}),x&&h({freq:1400,type:"sine",dur:.12,vol:.08,delay:.03,slide:1.5})}),b("explosion",()=>{d({dur:.9,vol:.6,freq:1400,freqEnd:90}),h({freq:70,type:"sine",dur:.8,vol:.55,slide:.35}),_(.15,1.2)}),b("kill",({mult:x,value:v})=>{_(.35,.8);const w=Math.min(1.7,1+(x-1)*.08);d({dur:.18,vol:.3,type:"bandpass",freq:900,q:.6}),h({freq:660*w,type:"square",dur:.09,vol:.14}),h({freq:990*w,type:"square",dur:.18,vol:.14,delay:.09}),x>=2&&g([0,4,7,12],{type:"triangle",step:.05,dur:.3,vol:.14,base:79}),x>=5&&g([0,7,12,19,24],{type:"square",step:.05,dur:.5,vol:.07,base:72});for(let C=0;C<Math.min(8,2+v/40);C++)h({freq:p(1800,.15),type:"sine",dur:.08,vol:.05,delay:.15+C*.05})}),b("loot:collect",()=>h({freq:700,type:"triangle",dur:.14,vol:.14,slide:2.2})),b("sell",({count:x})=>{for(let v=0;v<Math.min(14,x*2);v++)h({freq:1200+v*90,type:"sine",dur:.09,vol:.12,delay:v*.06}),h({freq:2400+v*120,type:"sine",dur:.05,vol:.05,delay:v*.06});g([0,7,12],{step:.08,dur:.4,vol:.12,base:79})}),b("purchase",()=>{h({freq:1047,type:"square",dur:.09,vol:.12}),h({freq:1568,type:"square",dur:.3,vol:.12,delay:.09}),d({dur:.1,vol:.08,type:"highpass",freq:5e3,delay:.09})}),b("cook:start",()=>d({dur:1.2,vol:.12,type:"highpass",freq:3500,freqEnd:6e3,attack:.3})),b("cook:done",({result:x})=>{x==="cooked"?g([0,4,7,12],{step:.07,dur:.3,vol:.16,base:76}):x==="burnt"?g([0,-2,-5,-9],{type:"sawtooth",step:.1,dur:.25,vol:.09,base:60}):h({freq:300,type:"triangle",dur:.15,vol:.1})}),b("slots:spin",()=>{for(let x=0;x<26;x++)h({freq:800+x%3*120,type:"square",dur:.025,vol:.05,delay:x*.07});h({freq:220,type:"sawtooth",dur:.2,vol:.12,slide:.5})}),b("slots:stop",()=>{h({freq:160,type:"sine",dur:.12,vol:.28,slide:.5}),h({freq:900,type:"square",dur:.05,vol:.08})}),b("slots:win",({jackpot:x})=>{g(x?[0,4,7,12,16,19,24,28,31,36]:[0,4,7,12,16],{type:"square",step:x?.09:.075,dur:.4,vol:.09,base:72});for(let v=0;v<(x?24:8);v++)h({freq:p(1800),type:"sine",dur:.07,vol:.05,delay:.3+v*.05});_(.3,2)}),b("boss:summon",()=>{d({dur:3,vol:.4,freq:220,freqEnd:60}),h({freq:55,type:"sawtooth",dur:3,vol:.28,slide:.6}),h({freq:90,type:"sine",dur:2.6,vol:.3,slide:.5,delay:.3}),_(.2,3)}),b("boss:stun",()=>{h({freq:196,type:"sine",dur:1.6,vol:.32,slide:.98}),h({freq:392,type:"triangle",dur:1.2,vol:.14}),d({dur:.4,vol:.25,type:"bandpass",freq:800,q:4}),_(.3,1.2)}),b("boss:hit",()=>{h({freq:p(300),type:"square",dur:.14,vol:.2,slide:.4}),d({dur:.15,vol:.3,type:"bandpass",freq:1e3,q:3})}),b("boss:blocked",()=>{h({freq:1400,type:"triangle",dur:.12,vol:.14,slide:.7})}),b("boss:telegraph",()=>{for(let x=0;x<4;x++)h({freq:700,type:"square",dur:.1,vol:.09,delay:x*.25})}),b("boss:playerHit",()=>{d({dur:.4,vol:.4,freq:900,freqEnd:100}),h({freq:120,type:"sine",dur:.3,vol:.35,slide:.4})}),b("boss:down",()=>{_(.15,6),d({dur:1.2,vol:.5,freq:1600,freqEnd:100}),g([0,4,7,12,16,19,24,28,31,36,40],{type:"square",step:.11,dur:.6,vol:.09,base:60}),g([0,7,12,19],{type:"triangle",step:.11,dur:1.4,vol:.14,base:48})}),addEventListener("pointerdown",f,{once:!1}),addEventListener("keydown",f),addEventListener("keydown",x=>{x.code==="KeyM"&&!x.repeat&&R.toggleMute()}),document.addEventListener("visibilitychange",()=>{e&&(document.hidden?e.suspend():a||e.resume())});const R={unlock:f,toggleMute(){return a=!a,n&&e&&n.gain.setTargetAtTime(a?0:.75,e.currentTime,.03),i.emit("toast",{msg:a?"🔇 Sound off":"🔊 Sound on"}),a},get muted(){return a}};return R}function _g(i,t){const e=document.createElement("div");e.className="toasts",i.appendChild(e);function n(s){const r=document.createElement("div");for(r.className="toast",r.innerHTML=s,e.appendChild(r);e.children.length>3;)e.firstChild.remove();setTimeout(()=>r.remove(),2700)}return t.on("toast",({msg:s})=>n(s)),{toast:n}}const Xe={basic:{id:"basic",name:"Basic Rod",price:3,range:10,reelSpeed:.4,luck:0},carbon:{id:"carbon",name:"Carbon Rod",price:60,range:14,reelSpeed:.55,luck:.5},deluxe:{id:"deluxe",name:"Deluxe Rod",price:300,range:18,reelSpeed:.7,luck:1.2},golden:{id:"golden",name:"Golden Rod",price:1/0,range:20,reelSpeed:.8,luck:2.5}},fs={ham:{id:"ham",name:"Ham",price:1,tier:1},hotdog:{id:"hotdog",name:"Hot Dog",price:4,tier:2},fries:{id:"fries",name:"French Fry",price:12,tier:3},lurePro:{id:"lurePro",name:"Pro Lure",price:40,tier:4}},Fc=5,ko={name:"Suspicious Chum",price:250},ps={slingshot:{id:"slingshot",name:"Slingshot",price:0,damage:10,cooldown:.5,kind:"hitscan"},pistol:{id:"pistol",name:"Pistol",price:40,damage:20,cooldown:.3,kind:"hitscan"},shotgun:{id:"shotgun",name:"Shotgun",price:150,damage:12,cooldown:.9,kind:"spread",pellets:6},dynamite:{id:"dynamite",name:"Dynamite",price:120,damage:120,cooldown:1.5,kind:"thrown",radius:4}};function xg(i,t,e=Math.random){const n=(fs[i]||fs.ham).tier,s=(Xe[t]||Xe.basic).luck,r=mg.filter(u=>u.minTier<=n),o=r.map(u=>pg[u.rarity]*(1+s*ar[u.rarity])),a=o.reduce((u,f)=>u+f,0);let l=Math.min(e(),.999999)*a;for(let u=0;u<r.length;u++)if(l-=o[u],l<0)return r[u];return r[r.length-1]}function Mg(i,{cooked:t=!1,burnt:e=!1,mult:n=1}={}){return Math.round(i.baseValue*(e?.25:t?1.5:1)*n)}function yg(i,t,e){const n=t==="rod"?Xe[e]:t==="bait"?fs[e]:t==="weapon"?ps[e]:t==="chum"?ko:null;return!n||!Number.isFinite(n.price)?{ok:!1,reason:"unknown"}:t==="rod"&&i.rods.includes(e)?{ok:!1,reason:"owned"}:t==="weapon"&&i.weapons.includes(e)?{ok:!1,reason:"owned"}:i.money<n.price?{ok:!1,reason:"funds"}:(i.money-=n.price,t==="rod"?(i.rods.push(e),i.equippedRod=e):t==="weapon"?(i.weapons.push(e),i.equippedWeapon=e):t==="bait"?(i.baits[e]=(i.baits[e]||0)+Fc,i.equippedBait=e):i.chum+=1,{ok:!0})}function Sg(i){const t=i.inventory.reduce((n,s)=>n+s.value,0),e=i.inventory.length;return i.inventory=[],i.money+=t,i.stats.earned+=t,{total:t,count:e}}function bg(i,t,e){return t==="rod"&&i.rods.includes(e)?(i.equippedRod=e,!0):t==="weapon"&&i.weapons.includes(e)?(i.equippedWeapon=e,!0):t==="bait"&&(i.baits[e]||0)>0?(i.equippedBait=e,!0):!1}const tr=3,Ho=7,Eg=()=>({item:null,t:0});function wg(i,t){i.item=t,i.t=0}function Tg(i,t){return i.item&&(i.t+=t),i}function Ll(i){if(!i.item)return null;const t=i.t>=Ho?"burnt":i.t>=tr?"cooked":"raw",e=i.item;return i.item=null,i.t=0,{item:e,result:t}}function Ag(i,t){return i.cooked?!1:(t==="cooked"?(i.value=Math.round(i.value*1.5),i.cooked="cooked"):t==="burnt"&&(i.value=Math.round(i.value*.25),i.cooked="burnt"),!0)}const Ri=[{id:"cherry",w:40,triple:5},{id:"bell",w:30,triple:10},{id:"fish",w:20,triple:20},{id:"seven",w:8,triple:50},{id:"rod",w:2,triple:200}],Cg=Ri.reduce((i,t)=>i+t.w,0),Kr=i=>{let t=Math.min(i(),.999999)*Cg;for(const e of Ri)if(t-=e.w,t<0)return e;return Ri.at(-1)};function Rg(i=Math.random){const t=[Kr(i),Kr(i),Kr(i)],e=t.every(n=>n.id===t[0].id);return{reels:t.map(n=>n.id),payoutMult:e?t[0].triple:0,jackpot:e&&t[0].id==="rod"}}const qs={cherry:"🍒",bell:"🔔",fish:"🐟",seven:"7️⃣",rod:"🎣"},Pg={ham:"🍖",hotdog:"🌭",fries:"🍟",lurePro:"🪝"},Dl={vendor:[["sell","💰 Sell"],["shop","🛒 Shop"]],grill:[["grill","🔥 Grill"]],slots:[["slots","🎰 Slots"]]},Lg={vendor:"Fish Market",grill:"Beach Grill",slots:"Lucky Slots"},Si=10;function Dg(i,t){const{bus:e,store:n}=t,s=Eg();let r=null,o=null,a=null,l={spinning:!1,reels:["cherry","bell","fish"],msg:""};const u=()=>n.state,f=()=>e.emit("ui:click",{});function h(b,A){r||(o=b,a=A||Dl[b][0][0],r=document.createElement("div"),r.className="overlay",r.innerHTML='<div class="panel"></div>',r.addEventListener("pointerdown",R=>R.stopPropagation()),r.addEventListener("click",y),i.appendChild(r),t.uiBlocking=!0,t.input.enabled=!1,p(),e.emit("ui:open",{}))}function d(){if(!r)return;if(s.item){const R=Ll(s);u().inventory.push(R.item)}r.querySelector(".panel").classList.add("closing");const A=r;r=null,setTimeout(()=>A.remove(),170),t.uiBlocking=!1,t.input.enabled=!0,e.emit("ui:close",{})}function p(){if(!r)return;const b=Dl[o].map(([R,x])=>`<button class="tab ${R===a?"on":""}" data-act="tab" data-id="${R}">${x}</button>`).join(""),A={sell:g,shop:m,grill:c,slots:M}[a]();r.querySelector(".panel").innerHTML=`<header><h2>${Lg[o]}</h2><div class="tabs">${b}</div><button class="btn red small" data-act="close">✕ Close</button></header><div class="body"><div class="money-line">🪙 $${u().money}</div>${A}</div>`}function g(){const b=u().inventory;if(!b.length)return'<div class="empty">Nothing to sell yet.<br/>Catch a creature, shoot it, then bring it here!</div>';const A=b.reduce((x,v)=>x+v.value,0);return`<div class="sell-list">${b.map(x=>`<div class="sell-item"><span class="rarity-${x.rarity}">●</span> ${x.name}${x.cooked==="cooked"?" 🔥":x.cooked==="burnt"?" 💨":""}${x.mult>1?` <small>(×${x.mult})</small>`:""}<span class="v">$${x.value}</span></div>`).join("")}</div><div style="text-align:center"><button class="btn yellow" data-act="sellall">Sell All (${b.length}) &nbsp; +$${A}</button></div>`}function _({icon:b,name:A,desc:R,price:x,kind:v,id:w,owned:C,equipped:N,stackable:L}){const I=u().money>=x;let z;return C&&!L?z=N?'<button class="btn small yellow off" disabled>Equipped</button>':`<button class="btn small blue" data-act="equip" data-kind="${v}" data-id="${w}">Equip</button>`:z=`<button class="btn small ${I?"":"off"}" data-act="buy" data-kind="${v}" data-id="${w}" data-price="${x}">Buy $${x}</button>`,`<div class="card ${C&&!L?"owned":""}"><h4><span>${b}</span>${A}</h4><p>${R}</p><div class="row">${L&&u().baits[w]!==void 0?`<small>You have ${u().baits[w]||0}</small>`:"<span></span>"}${z}</div></div>`}function m(){const b=u(),A=Object.values(Xe).filter(C=>Number.isFinite(C.price)).map(C=>_({icon:"🎣",name:C.name,desc:`Range ${C.range} · Reel ${Math.round(C.reelSpeed*100)} · Luck ${C.luck}`,price:C.price,kind:"rod",id:C.id,owned:b.rods.includes(C.id),equipped:b.equippedRod===C.id})).join(""),R=b.rods.includes("golden")?_({icon:"✨",name:"Golden Rod",desc:`Range ${Xe.golden.range} · Reel ${Math.round(Xe.golden.reelSpeed*100)} · Luck ${Xe.golden.luck}`,price:0,kind:"rod",id:"golden",owned:!0,equipped:b.equippedRod==="golden"}):"",x=Object.values(fs).map(C=>_({icon:Pg[C.id],name:`${C.name} ×${Fc}`,desc:`Tier ${C.tier} — ${["","attracts small fry","lures uncommon catches","draws rare & epic prey","the good stuff: legendaries"][C.tier]}`,price:C.price,kind:"bait",id:C.id,owned:!0,stackable:!0})).join(""),v=Object.values(ps).filter(C=>C.price>0||b.weapons.includes(C.id)).map(C=>_({icon:{slingshot:"🪃",pistol:"🔫",shotgun:"💥",dynamite:"🧨"}[C.id],name:C.name,desc:`Damage ${C.damage}${C.pellets?"×"+C.pellets:""} · ${C.kind==="thrown"?"area blast":C.kind==="spread"?"wide spread":"precise"} · ${(1/C.cooldown).toFixed(1)}/s`,price:C.price,kind:"weapon",id:C.id,owned:b.weapons.includes(C.id),equipped:b.equippedWeapon===C.id})).join(""),w=b.bossDefeated?"":_({icon:"🦀",name:ko.name,desc:"Throw it off the end of the dock (E) to summon something enormous."+(b.chum?` You have ${b.chum}.`:""),price:ko.price,kind:"chum",id:"chum",owned:!1,stackable:!0});return`<div class="section-title">Rods</div><div class="grid">${A}${R}</div><div class="section-title">Bait</div><div class="grid">${x}</div><div class="section-title">Weapons</div><div class="grid">${v}</div>${w?`<div class="section-title">Special</div><div class="grid">${w}</div>`:""}`}function c(){const b=u().inventory;if(s.item)return`<p style="text-align:center;font-size:18px;margin:0">Cooking <b>${s.item.name}</b> — pull it while the marker is in the <b style="color:#1a8a3a">green</b> for ×1.5 value!</p>
        <div class="cookbar" id="cookbar"><div class="z" style="left:0;width:${tr/Si*100}%;background:#f3b9a9"></div><div class="z" style="left:${tr/Si*100}%;width:${(Ho-tr)/Si*100}%;background:#5be07a"></div><div class="z" style="left:${Ho/Si*100}%;right:0;background:#5a4a4a"></div>
        <span class="lbl" style="left:15%">RAW</span><span class="lbl" style="left:50%">PERFECT ×1.5</span><span class="lbl" style="left:85%">BURNT</span><div class="mk" id="cookmk" style="left:0%"></div></div>
        <div style="text-align:center"><button class="btn yellow" data-act="pull">🔥 Pull it off! (Space)</button></div>`;const A=b.map((R,x)=>`<div class="sell-item"><span class="rarity-${R.rarity}">●</span> ${R.name} <span class="v">$${R.value}</span>${R.cooked?`<small>${R.cooked==="cooked"?"🔥 done":"💨 burnt"}</small>`:`<button class="btn small" data-act="cook" data-idx="${x}">Grill</button>`}</div>`).join("");return b.length?`<p style="margin-top:0">Grill a catch for <b>×1.5</b> sell value. Miss the window and it burns to <b>×0.25</b>!</p><div class="sell-list">${A}</div>`:'<div class="empty">Nothing to grill.<br/>Bring me a catch!</div>'}function M(){const b=Ri.map(R=>`${qs[R.id]}×3 = ${R.triple}×`).join(" &nbsp; "),A=[10,50,100].map(R=>`<button class="btn ${u().money>=R&&!l.spinning?"yellow":"off"}" data-act="spin" data-bet="${R}">Bet $${R}</button>`).join("");return`<div class="reels">${l.reels.map((R,x)=>`<div class="reel ${l.spinning===!0||l.spinning&&l.spinning[x]?"spin":""}" id="reel${x}">${qs[R]}</div>`).join("")}</div><div class="result">${l.msg}</div><div class="bets">${A}</div><div class="paytable">${b}<br/>Three 🎣 = <b>JACKPOT</b> + the legendary Golden Rod!</div>`}function S(b){if(l.spinning)return;if(u().money<b)return e.emit("toast",{msg:"Not enough cash!"}),!1;u().money-=b;const A=Rg();l.spinning=[!0,!0,!0],l.msg="Spinning…",e.emit("slots:spin",{}),p();const R=t.island.slotMachine.userData;[0,1,2].forEach(v=>R.setSpinning(v,!0));const x=setInterval(()=>{r&&(l.reels=l.reels.map((v,w)=>l.spinning[w]?Ri[Math.floor(Math.random()*Ri.length)].id:v),[0,1,2].forEach(v=>{const w=r.querySelector("#reel"+v);w&&(w.textContent=qs[l.reels[v]])}))},70);[900,1400,1900].forEach((v,w)=>setTimeout(()=>{l.spinning[w]=!1,l.reels[w]=A.reels[w],R.setSpinning(w,!1),e.emit("slots:stop",{index:w}),R.setReels(l.reels);const C=r&&r.querySelector("#reel"+w);if(C&&(C.classList.remove("spin"),C.classList.add("stop"),C.textContent=qs[A.reels[w]]),w===2){clearInterval(x),l.spinning=!1;const N=b*A.payoutMult;N>0?(u().money+=N,l.msg=A.jackpot?"🎉 JACKPOT! Golden Rod unlocked! 🎉":`🎉 You win $${N}!`,A.jackpot&&!u().rods.includes("golden")&&(u().rods.push("golden"),u().equippedRod="golden",u().goldenRod=!0),e.emit("slots:win",{payout:N,jackpot:A.jackpot})):l.msg="No luck… try again!",r&&p()}},v))}function y(b){const A=b.target.closest("[data-act]");if(!A){b.target===r&&d();return}f();const R=A.dataset.act,x=u();if(R==="close")return d();if(R==="tab")return a=A.dataset.id,p();if(R==="sellall"){const v=Sg(x);return v.count&&e.emit("sell",v),p()}if(R==="buy"){const v=yg(x,A.dataset.kind,A.dataset.id);if(!v.ok){A.classList.remove("shake"),A.offsetWidth,A.classList.add("shake"),e.emit("toast",{msg:v.reason==="funds"?"Not enough cash!":"Can’t buy that"}),e.emit("ui:deny",{});return}return e.emit("purchase",{kind:A.dataset.kind,id:A.dataset.id}),e.emit("toast",{msg:"✅ Bought!"}),p()}if(R==="equip")return bg(x,A.dataset.kind,A.dataset.id),p();if(R==="cook"){const v=x.inventory.splice(Number(A.dataset.idx),1)[0];return wg(s,v),e.emit("cook:start",{}),p()}if(R==="pull")return U();if(R==="spin")return S(Number(A.dataset.bet))}function U(){const b=Ll(s);b&&(Ag(b.item,b.result),u().inventory.push(b.item),e.emit("cook:done",{item:b.item,result:b.result}),p())}return{open:h,close:d,get isOpen(){return!!r},pull:U,update(b){if(r&&a==="grill"&&s.item){Tg(s,b);const A=r.querySelector("#cookmk");A&&(A.style.left=Math.min(100,s.t/Si*100)+"%"),s.t>=Si&&U()}}}}const Ig={ham:"🍖",hotdog:"🌭",fries:"🍟",lurePro:"🪝"},Ug={slingshot:"🪃",pistol:"🔫",shotgun:"💥",dynamite:"🧨"},Ng=["slingshot","pistol","shotgun","dynamite"],Fg=3.4;function Og(i,t){const{bus:e,store:n,player:s,camera:r,island:o,input:a}=t,l=document.createElement("div");l.className="hud",l.innerHTML=`
    <div class="hud-tl"><div class="pill" id="h-money"><span class="ico">🪙</span><span id="h-moneyv">0</span></div><div class="pill small" id="h-inv">🐟 0 · $0</div></div>
    <div class="hud-hint hide" id="h-hint"></div>
    <div class="bossbar" id="h-boss"><div id="h-bossname">Colossal Spider Crab</div><div class="track"><div class="fill" id="h-bossfill"></div></div></div>
    <div class="hud-bl" id="h-gear"></div>
    <div class="hud-bc">
      <div class="bar progress" id="h-prog"><div class="fill" id="h-progfill"></div></div>
      <div class="bar tension" id="h-tens"><div class="safe"></div><div class="danger"></div><div class="fill" id="h-tensfill"></div><div class="lbl" id="h-tenslbl">Hold to reel — let go before it snaps!</div></div>
      <div class="bar power" id="h-power"><div class="fill" id="h-powerfill"></div><div class="lbl">Release to cast</div></div>
    </div>
    <div class="hud-br" id="h-controls"><kbd>WASD</kbd> move &nbsp; <kbd>Hold LMB</kbd> cast &nbsp; <kbd>LMB</kbd> hook / reel<br/><kbd>RMB</kbd> shoot &nbsp; <kbd>1</kbd>-<kbd>4</kbd> weapon &nbsp; <kbd>E</kbd> interact &nbsp; <kbd>M</kbd> mute &nbsp; <kbd>Esc</kbd> menu</div>
    <div class="prompt" id="h-prompt"><span class="k">E</span><span id="h-promptt"></span></div>`,i.appendChild(l);const u=x=>l.querySelector("#"+x),f={money:u("h-money"),moneyv:u("h-moneyv"),inv:u("h-inv"),hint:u("h-hint"),gear:u("h-gear"),prog:u("h-prog"),progfill:u("h-progfill"),tens:u("h-tens"),tensfill:u("h-tensfill"),tenslbl:u("h-tenslbl"),power:u("h-power"),powerfill:u("h-powerfill"),prompt:u("h-prompt"),promptt:u("h-promptt"),boss:u("h-boss"),bossfill:u("h-bossfill"),bossname:u("h-bossname"),controls:u("h-controls")},h=Dg(i,t);t.panel=h;const d={shownMoney:n.state.money,lastMoney:n.state.money,tension:0,progress:0,reelT:-9,power:0,powerT:-9,hintKey:"",gearKey:"",started:!1,paused:!1,t:0,pauseEl:null};e.on("reel:update",x=>{d.tension=x.tension,d.progress=x.progress,d.reelT=d.t}),e.on("cast:charge",x=>{d.power=x.power,d.powerT=d.t});const p=document.createElement("div");p.className="title";const g=x=>[...x].map((v,w)=>v===" "?" ":`<span style="animation-delay:${w*.09}s">${v}</span>`).join(""),_=!!localStorage.getItem(sr)&&n.state.stats.caught+n.state.stats.killed>0;p.innerHTML=`<div><h1>${g("HOW TO")}<br/><span class="fish">${g("FISH")}</span></h1><p>Fish. Shoot. Sell. Survive the island.</p><button class="btn yellow" id="t-play">${_?"Continue":"Play"}</button>${_?'<br/><button class="btn small red" id="t-new" style="margin-top:14px">New game</button>':""}<span class="sub" style="color:#fff;-webkit-text-stroke:4px var(--ink);paint-order:stroke fill">Unofficial fan-made tribute • built with Three.js</span></div>`,i.appendChild(p),t.uiBlocking=!0,t.input.enabled=!1;function m(){d.started||(d.started=!0,p.classList.add("gone"),setTimeout(()=>p.remove(),700),t.uiBlocking=!1,t.input.enabled=!0,e.emit("game:start",{}),e.emit("ui:click",{}))}p.querySelector("#t-play").onclick=m;const c=p.querySelector("#t-new");c&&(c.onclick=()=>M());function M(){t.skipSave=!0,localStorage.removeItem(sr),location.reload()}function S(x){const v=x??!d.paused;if(v!==d.paused)if(d.paused=v,t.paused=v,v){t.uiBlocking=!0,t.input.enabled=!1;const w=document.createElement("div");w.className="overlay",w.innerHTML='<div class="panel" style="width:min(420px,90vw)"><header><h2>Paused</h2></header><div class="pause-actions"><button class="btn" data-a="resume">▶ Resume</button><button class="btn blue" data-a="mute">🔊 Sound: on</button><button class="btn red" data-a="new">🗑 New game</button></div></div>',w.addEventListener("pointerdown",C=>C.stopPropagation()),w.onclick=C=>{var L;const N=(L=C.target.closest("[data-a]"))==null?void 0:L.dataset.a;if(N){if(e.emit("ui:click",{}),N==="resume"&&S(!1),N==="mute"){const I=t.audio?t.audio.toggleMute():!1;C.target.textContent=I?"🔇 Sound: off":"🔊 Sound: on"}N==="new"&&(C.target.dataset.sure?M():(C.target.dataset.sure="1",C.target.textContent="Really? Click again"))}},i.appendChild(w),d.pauseEl=w}else d.pauseEl&&d.pauseEl.remove(),t.uiBlocking=!1,t.input.enabled=!0}const y=()=>{const x=o.stations,v=n.state,w=[{id:"vendor",pos:x.vendor,text:"Fish Market",act:()=>h.open("vendor",v.inventory.length?"sell":"shop")},{id:"grill",pos:x.grill,text:"Beach Grill",act:()=>h.open("grill")},{id:"slots",pos:x.slots,text:"Lucky Slots",act:()=>h.open("slots")}];return v.chum>0&&!v.bossDefeated&&t.bossCtl&&!t.bossCtl.active&&w.push({id:"dock",pos:x.dockEnd,text:"Throw the chum!",act:()=>t.bossCtl.summon()}),w},U=new P;let b=null;function A(){const x=n.state,v=t.fishing.state,w=s.pos;return t.bossCtl&&t.bossCtl.active?null:x.equippedRod?x.baits[x.equippedBait]>0?v==="waiting"?"Wait for the bobber to dip…":v==="bite"?"<b>CLICK NOW!</b>":v==="reeling"?"Hold <b>Left Mouse</b> to reel — <b>let go</b> when the bar goes red!":v==="charging"?"Release to throw — more hold = further":t.creatures.some(C=>C.alive&&C.mode!=="water")?"Aim at your catch and <b>Right Click</b> to shoot it! Air shots and 360° swirls pay extra":x.inventory.length>0?"Sell your haul at the <b>Fish Market</b> — press <b>E</b> (or grill it first for ×1.5!)":w.z>-12?"Walk down the <b>dock</b> and cast into the sea: <b>hold Left Mouse</b>, release to throw":x.stats.caught<2?"Hold <b>Left Mouse</b> to charge a cast, release to throw":null:"Buy some <b>bait</b> at the market — press <b>E</b> next to the hut":"Head to the <b>Fish Market</b> (the striped hut) and press <b>E</b> to buy a <b>Basic Rod</b> — $3"}function R(){const x=n.state,v=Xe[x.equippedRod],w=fs[x.equippedBait],C=x.baits[x.equippedBait]||0,N=Ng.filter(L=>x.weapons.includes(L)).map((L,I)=>`<span class="chip ${L===x.equippedWeapon?"on":""}"><span class="key">${I+1}</span>${Ug[L]} ${ps[L].name}</span>`).join("");return`<span class="chip ${v?"":"warn"}">🎣 ${v?v.name:"No rod!"}</span><span class="chip ${C?"":"warn"}">${Ig[x.equippedBait]} ${w.name} ×${C}</span><div style="display:flex;gap:6px;flex-wrap:wrap">${N}</div>`}return{panel:h,start:m,togglePause:S,get started(){return d.started},update(x){d.t+=x;const v=n.state;v.money!==d.lastMoney&&(f.money.classList.remove("bump","shake"),f.money.offsetWidth,f.money.classList.add(v.money>d.lastMoney?"bump":"shake"),d.lastMoney=v.money);const w=v.money-d.shownMoney;d.shownMoney+=Math.abs(w)<1?w:w*Math.min(1,x*9)+Math.sign(w)*.2,f.moneyv.textContent=Math.round(d.shownMoney).toLocaleString();const C=v.inventory.reduce((V,et)=>V+et.value,0),N=`🐟 ${v.inventory.length} · $${C}`;f.inv.textContent!==N&&(f.inv.textContent=N,f.inv.classList.remove("bump"),f.inv.offsetWidth,f.inv.classList.add("bump"));const L=JSON.stringify([v.equippedRod,v.equippedBait,v.baits[v.equippedBait],v.weapons,v.equippedWeapon]);L!==d.gearKey&&(d.gearKey=L,f.gear.innerHTML=R());const I=d.t-d.reelT<.15,z=d.t-d.powerT<.15;f.tens.classList.toggle("show",I),f.prog.classList.toggle("show",I),f.power.classList.toggle("show",z&&!I),I&&(f.tensfill.style.width=d.tension*100+"%",f.tens.classList.toggle("hot",d.tension>.8),f.progfill.style.width=Math.min(1,d.progress)*100+"%"),z&&(f.powerfill.style.width=d.power*100+"%"),f.controls.classList.toggle("faded",v.stats.caught>=3&&!d.paused);const G=d.started&&!t.uiBlocking?A():null,O=G||"";O!==d.hintKey&&(d.hintKey=O,G?(f.hint.innerHTML=G,f.hint.classList.remove("hide")):f.hint.classList.add("hide"));const K=t.bossCtl;if(K&&K.active&&K.boss?(f.boss.classList.add("show"),f.bossfill.style.width=K.boss.hp/K.boss.maxHp*100+"%",f.boss.classList.toggle("stunned",K.boss.state==="vulnerable"),f.bossname.textContent=K.boss.state==="vulnerable"?"STUNNED — SHOOT IT!":K.boss.state==="recover"?"Colossal Spider Crab (angry!)":"Colossal Spider Crab — hook it!"):f.boss.classList.remove("show"),!d.started||(a.wasPressed("Escape")&&(h.isOpen?h.close():S()),d.paused))return;if(h.update(x),h.isOpen){a.wasPressed("KeyE")&&h.close(),a.wasPressed("Space")&&h.pull&&h.pull();return}b=null;let W=Fg;for(const V of y()){const et=Math.hypot(V.pos.x-s.pos.x,V.pos.z-s.pos.z);et<W&&(W=et,b=V)}b&&t.fishing.state==="idle"?(f.promptt.textContent=b.text,U.set(b.pos.x,b.pos.y+(b.id==="vendor"?4.6:3.2),b.pos.z).project(r),f.prompt.style.transform=`translate(${(U.x*.5+.5)*innerWidth}px, ${(-U.y*.5+.5)*innerHeight}px) translate(-50%,-100%)`,f.prompt.classList.add("show"),a.wasPressed("KeyE")&&!t.uiBlocking&&b.act()):f.prompt.classList.remove("show")}}}const Oc=i=>new Mt(i),Pn=(i,t=.35)=>Oc(i).lerp(new Mt(1,1,1),t),en=(i,t=.35)=>Oc(i).lerp(new Mt(0,0,0),t);let zg=1;const We=(i,t,e,n,s)=>{const r=xt(Pe(new _e(1,1),.05,zg++),n,s);return r.scale.set(i,t,e),r},nn=(i,t,e,n)=>xt(new Ie(i,t,e),n),_s=(i,t,e,n,s=.075)=>{for(const r of[-1,1]){const o=xt(new xe(s,8,6),"#ffffff",{cast:!1});o.position.set(r*t,e,n);const a=xt(new xe(s*.55,6,5),"#161616",{cast:!1});a.position.set(0,0,s*.6),o.add(a),i.add(o)}};function Wi(i,t={}){const e=new wt,n=i.color,s=t.w??.28,r=t.h??.3,o=t.l??.6,a=We(s,r,o,n);e.add(a);const l=We(s*.9,r*.55,o*.9,Pn(n,.55),{cast:!1});l.position.y=-r*.42,e.add(l);const u=new wt;u.position.z=-o*.85,e.add(u);const f=nn(r*1,o*.8,4,en(n,.1));f.rotation.x=-Math.PI/2,f.scale.set(.15,1,1.4),f.position.z=-o*.4,u.add(f);const h=nn(r*.5,o*.7,4,en(n,.15));h.rotation.x=-Math.PI/2+.5,h.scale.set(.15,1,1),h.position.set(0,r*.85,-o*.1),e.add(h);for(const d of[-1,1]){const p=nn(r*.35,o*.5,4,en(n,.1));p.rotation.set(-Math.PI/2+.3,0,d*.9),p.scale.set(.2,1,1),p.position.set(d*s*.95,-r*.3,o*.1),e.add(p)}return _s(e,s*.62,r*.25,o*.62,r*.28),e.userData.anim=(d,p)=>{u.rotation.y=Math.sin(d*(10+p*14))*(.35+p*.5),a.rotation.z=Math.sin(d*(6+p*10))*.08*(1+p)},e.userData.parts={body:a,tail:u},e}function Il(i,t={}){var a;const e=new wt,n=i.color,s=t.len??1,r=We(.5,.22,.4*s,n);r.position.y=.28,e.add(r);const o=We(.42,.14,.32*s,Pn(n,.2),{cast:!1});o.position.y=.4,e.add(o);for(const l of[-1,1]){const u=xt(new ne(.025,.025,.2,4),n);u.position.set(l*.14,.5,.32*s),e.add(u),_s(e,.14,.62,.34*s,.06);const f=new wt;f.position.set(l*.45,.28,.25*s),e.add(f);const h=We(.08,.08,.3,n);h.position.z=.25,f.add(h);const d=We(.2,.1,.22,en(n,.05));d.position.z=.6,f.add(d);const p=nn(.08,.28,4,Pn(n,.3));p.rotation.x=Math.PI/2,p.position.set(0,0,.85),f.add(p),f.userData.side=l,((a=e.userData).arms||(a.arms=[])).push(f)}e.userData.legs=[];for(let l=0;l<6;l++){const u=l%2?1:-1,f=Math.floor(l/2),h=new wt;h.position.set(u*.4,.28,(f-1)*.2*s);const d=xt(new ne(.03,.03,.5,4),en(n,.15));d.rotation.z=u*1.2,d.position.set(u*.22,-.08,0),h.add(d),e.add(h),e.userData.legs.push(h)}if(t.tail){for(let u=0;u<4;u++){const f=We(.22-u*.03,.14-u*.015,.2,en(n,.05*u));f.position.set(0,.24-u*.02,-.5*s-u*.28),e.add(f)}const l=nn(.3,.3,5,n);l.rotation.x=-Math.PI/2,l.scale.set(1.3,1,.25),l.position.set(0,.18,-.5*s-4*.28-.1),e.add(l);for(const u of[-1,1]){const f=xt(new ne(.01,.01,1,3),"#f7d0c0",{cast:!1});f.rotation.set(1.2,0,u*.3),f.position.set(u*.12,.5,.75*s),e.add(f)}}return e.userData.anim=(l,u)=>{e.userData.legs.forEach((f,h)=>{f.rotation.y=Math.sin(l*(12+u*10)+h*1.7)*.35}),e.userData.arms.forEach(f=>{f.rotation.y=-f.userData.side*(.2+Math.sin(l*(5+u*8))*.25)})},e}function Bg(i){const t=new wt,e=i.color,n=[];for(let r=0;r<6;r++){const o=r/5,a=We(.16-o*.05,.16-o*.05,.16,r===0?Pn(e,.15):e);a.position.set(0,.25+Math.sin(o*Math.PI)*.22-o*.1,.3-r*.16),t.add(a),n.push(a)}const s=nn(.18,.25,4,en(e,.1));s.rotation.x=-Math.PI/2,s.scale.set(1.5,1,.2),s.position.set(0,.16,-.75),t.add(s),_s(t,.09,.42,.42,.045);for(const r of[-1,1]){const o=xt(new ne(.008,.008,.8,3),"#ffd0c0",{cast:!1});o.rotation.set(1.3,0,r*.25),o.position.set(r*.06,.42,.78),t.add(o)}return t.userData.anim=(r,o)=>{n.forEach((a,l)=>{a.position.x=Math.sin(r*(14+o*10)-l*.6)*.04*(1+o)})},t}function kg(i){const t=new wt,e=i.color,n=We(.36,.32,.36,e);n.position.y=.4,t.add(n);const s=34;for(let r=0;r<s;r++){const o=1-r/(s-1)*2,a=Math.sqrt(1-o*o),l=r*2.399963,u=new P(Math.cos(l)*a,o,Math.sin(l)*a),f=nn(.045,.5,4,r%3?en(e,.35):Pn(e,.1));f.position.copy(u).multiplyScalar(.52).add(new P(0,.4,0)),f.quaternion.setFromUnitVectors(new P(0,1,0),u),t.add(f)}return _s(t,.13,.5,.33,.07),t.userData.anim=(r,o)=>{n.scale.setScalar(1+Math.sin(r*(8+o*8))*.04),t.rotation.y=Math.sin(r*2)*.1},t}function Hg(i){const t=new wt,e=i.color,n=[];for(let u=0;u<7;u++){const f=u/6,h=We(.2-f*.1,.17,.2-f*.1,u%2?Pn(e,.2):e);h.position.set(0,.95-u*.16,Math.sin(f*2.4)*-.12+(u>4?-.1*(u-4):0)),t.add(h),n.push(h)}const s=We(.18,.2,.2,e);s.position.set(0,1.12,.12),t.add(s);const r=nn(.06,.32,5,e);r.rotation.x=Math.PI/2,r.position.set(0,1.08,.36),t.add(r);const o=nn(.05,.25,4,en(e,.2));o.position.set(0,1.35,.05),t.add(o);const a=xt(new hr(.16,.05,5,10,Math.PI*1.5),e);a.position.set(0,.1,-.27),a.rotation.y=Math.PI/2,t.add(a);const l=nn(.14,.3,4,Pn(e,.5));return l.scale.set(.12,1,1),l.rotation.x=-Math.PI/2,l.position.set(0,.85,-.25),t.add(l),_s(t,.12,1.16,.24,.06),t.userData.anim=(u,f)=>{l.rotation.y=Math.sin(u*25)*.4,n.forEach((h,d)=>{h.position.x=Math.sin(u*3-d*.4)*.03*(1+f*2)})},t}function Vg(i){const t=new wt,e=i.color,n=.16,s=[[0,0],[1,0],[2,0],[3,0],[4,0],[1,1],[2,1],[3,1],[2,-1],[3,-1],[-1,1],[-1,-1],[-1,0]],r=[Le(e),Le(Pn(e,.3)),Le(en(e,.25))];s.forEach(([o,a],l)=>{const u=new Ut(new ve(n*.96,n*.96,n*.96),r[(o+a+5)%3]);u.castShadow=!0,u.position.set(0,.35+a*n,(1.5-o)*n*1.05-.05),o===4&&(u.position.y+=0),t.add(u)});for(const o of[-1,1]){const a=new Ut(new ve(n*.5,n*.5,n*.5),Le("#111"));a.position.set(o*n*.55,.35+n*.3,.6-.05),t.add(a)}return t.userData.anim=(o,a)=>{t.rotation.z=Math.sin(o*(7+a*12))*.12},t}function Gg(i){var n;const t=Wi(i,{w:.22,h:.22,l:.55});for(const s of[-1,1]){const r=xt(new Ie(.22,.9,3),Pn(i.color,.55));r.rotation.set(0,0,s*(Math.PI/2)),r.scale.set(.25,1,1.4),r.position.set(s*.5,.08,.05),t.add(r),((n=t.userData).wings||(n.wings=[])).push({w:r,s})}const e=t.userData.anim;return t.userData.anim=(s,r)=>{e(s,r),t.userData.wings.forEach(({w:o,s:a})=>{o.rotation.x=Math.sin(s*(12+r*10))*.35*a*a})},t}function Wg(i){const t=Wi(i,{w:.32,h:.34,l:.62}),e=xt(new ve(.62,.11,.1),"#111111");e.position.set(0,.1,.42),t.add(e);const n=xt(new hr(.28,.03,5,12),"#ffd23c",{opts:{metalness:.7,roughness:.3}});n.rotation.x=Math.PI/2,n.position.set(0,-.12,.25),n.scale.set(1,1,1.4),t.add(n);const s=xt(new _e(.09,0),"#7ae0ff",{opts:{emissive:"#3fb6ff",emissiveIntensity:.6}});return s.position.set(0,-.3,.44),t.add(s),t}function Xg(i){const t=Wi(i,{w:.34,h:.36,l:.5}),e=xt(new Rn(.7,.8,1,3),Le("#d61f2c",{side:Ne}));e.position.set(0,.05,-.15),e.rotation.x=1.1,t.add(e);const n=xt(new Ie(.12,.05,5),"#ffe066");return n.rotation.x=Math.PI/2,n.position.set(0,.05,.5),t.add(n),t}function qg(i){const t=new wt,e=new rn({color:i.color,emissive:"#ffb300",emissiveIntensity:.55,metalness:.5,roughness:.35,flatShading:!0}),n=Wi({...i,color:i.color},{w:.3,h:.3,l:.75});n.traverse(r=>{r.isMesh&&r.material.color&&r.material.color.getHex()!==1118481&&r.material.color.getHex()!==16777215&&(r.material=e)}),t.add(n);for(let r=0;r<4;r++){const o=We(.14,.05,.14,"#ffffff",{cast:!1});o.position.set((r%2?1:-1)*.1,.27-r%2*.03,.3-r*.22),n.add(o)}for(const r of[-1,1]){const o=xt(new ne(.008,.008,.7,3),"#ffe9a0");o.rotation.set(1.2,0,r*.5),o.position.set(r*.15,-.05,.75),t.add(o)}const s=nn(.16,.22,5,"#fff2a0");return s.position.set(0,.45,.35),t.add(s),t.userData.anim=n.userData.anim,t.userData.parts=n.userData.parts,t}function Yg(i){const t=Wi(i,{w:.24,h:.26,l:.7});for(let e=0;e<5;e++){const n=xt(new ve(.2,.03,.06),en(i.color,.6),{cast:!1});n.position.set(0,.24,.35-e*.16),t.add(n)}return t}const $g={crab:i=>Il(i),lobster:i=>Il(i,{len:1.4,tail:!0}),shrimp:Bg,urchin:kg,seahorse:Hg,voxelFish:Vg,flyingFish:Gg,dripFish:Wg,superdwarf:Xg,goldenKoi:qg,mackerel:Yg};function zc(i){const t=($g[i.id]||(r=>Wi(r)))(i),e=new wt;e.add(t);const n=i.radius*1.5;t.scale.setScalar(n),e.userData.anim=t.userData.anim||(()=>{}),e.userData.inner=t;const s=[];return e.traverse(r=>{r.isMesh&&r.material&&r.material.emissive&&!s.some(o=>o.m===r.material)&&s.push({m:r.material,e:r.material.emissive.clone(),i:r.material.emissiveIntensity})}),e.userData.flash=r=>{for(const o of s)r>0?(o.m.emissive.setRGB(1,1,1),o.m.emissiveIntensity=r*1.4):(o.m.emissive.copy(o.e),o.m.emissiveIntensity=o.i)},e.userData.upright=["crab","lobster","shrimp","urchin","seahorse"].includes(i.id),e}const Ul=24;function Kg(i){const{scene:t,bus:e,island:n,tweens:s}=i,r=[];i.creatures=r;let o=0;function a(p,g){const _=zc(p);_.position.copy(g),_.scale.setScalar(.01),t.add(_),s.to(_.scale,{x:1,y:1,z:1},.4,An.outBack);const m={def:p,mesh:_,hp:p.hp,maxHp:p.hp,pos:g.clone(),vel:new P,alive:!0,air:!1,mode:"water",groundAge:0,hopT:.4,yaw:Math.random()*6.28,roll:0,pitch:0,spin:0,escaping:!1,hurt:0,phase:Math.random()*6.28,seaDir:new P(0,0,-1)};return r.push(m),m}function l(p,g,_=.95){p.mode="ballistic",p.air=!0,p.groundAge=0,p.escaping=!1,p.vel.set((g.x-p.pos.x)/_,(g.y-p.pos.y+.5*Ul*_*_)/_,(g.z-p.pos.z)/_),p.spin=9,p.hopT=.6}function u(p,g=7,_){p.mode="ballistic",p.air=!0,p.vel.y=g,p.spin=12,_&&(p.vel.x+=_.x,p.vel.z+=_.z)}function f(p){const g=r.indexOf(p);g>=0&&r.splice(g,1),p.alive=!1,t.remove(p.mesh),p.mesh.traverse(_=>{_.geometry&&_.geometry.dispose()})}function h(p){return n.groundY(p.pos.x,p.pos.z)+.12+p.def.radius*.2}function d(p){o+=p;for(const g of[...r]){const{mesh:_}=g;if(g.hurt=Math.max(0,g.hurt-p*4),g.mode==="ballistic"){g.vel.y-=Ul*p;const m=g.pos.x,c=g.pos.z;g.pos.addScaledVector(g.vel,p),g.landedOnce&&!g.escaping&&!n.walkable(g.pos.x,g.pos.z)&&(g.pos.x=m,g.pos.z=c,g.vel.x*=-.4,g.vel.z*=-.4);const M=n.walkable(g.pos.x,g.pos.z);if(!M&&g.pos.y<.05&&g.vel.y<0){e.emit("creature:splash",{ent:g,pos:g.pos.clone(),escaped:g.escaping||!0}),e.emit("creature:lost",{ent:g}),f(g);continue}const S=h(g);if(M&&g.pos.y<=S&&g.vel.y<0){const y=-g.vel.y;g.pos.y=S,g.landedOnce=!0,y>3.5&&e.emit("catch:bounce",{ent:g,pos:g.pos.clone(),impact:y}),g.air=!1,g.spin=0,y<3?(g.vel.y=0,g.mode="ground"):g.vel.y=y*.38,g.vel.x*=.55,g.vel.z*=.55}}else if(g.mode==="ground"&&(g.groundAge+=p,g.pos.y=h(g),g.vel.x*=Math.exp(-4*p),g.vel.z*=Math.exp(-4*p),g.pos.x+=g.vel.x*p,g.pos.z+=g.vel.z*p,!g.escaping&&g.groundAge>8&&(g.escaping=!0,e.emit("creature:escaping",{ent:g})),g.hopT-=p,g.hopT<=0)){if(g.hopT=g.escaping?.35:.5+Math.random()*.9,g.mode="ballistic",g.vel.y=3.6+Math.random()*2,g.escaping){const c=g.pos.x>n.dock.x0&&g.pos.x<n.dock.x1&&g.pos.z<n.dock.zStart?new P(0,0,-1):new P(g.pos.x,0,g.pos.z).normalize();g.vel.x=c.x*4,g.vel.z=c.z*4}else g.vel.x=(Math.random()-.5)*3,g.vel.z=(Math.random()-.5)*3,n.walkable(g.pos.x+g.vel.x*.7,g.pos.z+g.vel.z*.7)||(g.vel.x*=-1,g.vel.z*=-1),n.walkable(g.pos.x+g.vel.x*.7,g.pos.z+g.vel.z*.7)||(g.vel.x=0,g.vel.z=0);g.spin=0}if(g.mode!=="water"){Math.hypot(g.vel.x,g.vel.z)>.6&&(g.yaw=Math.atan2(g.vel.x,g.vel.z)),g.pitch+=g.spin*p,g.mode==="ground"&&(g.pitch*=Math.exp(-10*p));const m=_.userData.upright?0:g.air?.3:1.35;g.roll+=(m-g.roll)*(1-Math.exp(-10*p)),_.rotation.set(g.pitch,g.yaw,g.roll,"YXZ"),_.position.copy(g.pos)}_.userData.anim(o+g.phase,g.air?.7:.9+g.hurt),_.userData.flash(g.hurt)}}return{spawn:a,launch:l,pop:u,remove:f,update:d,list:r}}const dn={name:"Colossal Spider Crab",hp:600,stunTime:8,recoverTime:5,reward:1500},Nl=()=>({hp:dn.hp,maxHp:dn.hp,state:"idle",timer:0,stunTime:dn.stunTime});function Jg(i){(i.state==="idle"||i.state==="vulnerable")&&(i.state="vulnerable",i.timer=dn.stunTime)}function Zg(i,t){i.state==="dead"||i.state==="idle"||(i.timer-=t,!(i.timer>0)&&(i.state==="vulnerable"?(i.state="recover",i.timer=dn.recoverTime):(i.state="idle",i.timer=0)))}function jg(i,t){if(i.state!=="vulnerable")return 0;const e=Math.min(t,i.hp);return i.hp-=e,i.hp<=0&&(i.state="dead",i.timer=0),e}const Qg=(i,t,e)=>!e&&i.chum>0&&!i.bossDefeated&&t.state!=="dead";function tv(){const i=new wt,t=new wt;i.add(t);const e="#d9482f",n="#a3301f",s="#ff7a5c",r=xt(Pe(new _e(3,1),.18,77),e);r.scale.set(1.15,.6,1),r.position.y=1.6,t.add(r);const o=xt(Pe(new _e(2.2,1),.14,78),s);o.scale.set(1.1,.4,.9),o.position.y=2.5,t.add(o);for(let d=0;d<9;d++){const p=d/9*Math.PI*2,g=xt(new Ie(.28,1.1,5),n);g.position.set(Math.cos(p)*2.3,2.7+Math.sin(d*2.1)*.15,Math.sin(p)*1.9-.2),g.rotation.set(Math.sin(p)*.5,0,-Math.cos(p)*.5),t.add(g)}const a=[];for(const d of[-1,1]){const p=xt(new ne(.16,.2,1.2,6),n);p.position.set(d*.9,2.4,2.3),p.rotation.x=-.4,t.add(p);const g=new wt;g.position.set(d*.9,3,2.55);const _=xt(new xe(.5,10,8),"#ffffff"),m=xt(new xe(.26,8,6),"#111");m.position.z=.34,g.add(_,m),t.add(g),a.push(g)}const l=[];for(const d of[-1,1]){const p=new wt;p.position.set(d*3.1,1.6,1.4),t.add(p);const g=xt(Pe(new ne(.4,.5,2.6,6),.05,5),n);g.rotation.set(Math.PI/2-.3,0,d*.6),g.position.set(d*.7,.2,1.1),p.add(g);const _=new wt;_.position.set(d*1.4,.4,2.5),p.add(_);const m=xt(Pe(new _e(1,1),.08,9),e);m.scale.set(1.1,.8,1.5),m.position.z=.3,_.add(m);const c=new wt,M=new wt;_.add(c,M);const S=xt(new Ie(.5,1.9,5),s);S.rotation.x=Math.PI/2,S.position.set(0,.25,1.8),c.add(S);const y=xt(new Ie(.5,1.9,5),s);y.rotation.x=Math.PI/2,y.position.set(0,-.25,1.8),M.add(y),l.push({top:c,bot:M,hand:_,s:d})}const u=[];for(let d=0;d<8;d++){const p=d%2?1:-1,g=Math.floor(d/2),_=new wt;_.position.set(p*2.6,1.7,-1.6+g*1.15);const m=xt(Pe(new ne(.16,.22,3.2,5),.03,20+d),n);m.position.set(p*1.4,.5,0),m.rotation.z=-p*1.1,_.add(m);const c=xt(Pe(new ne(.1,.16,3.6,5),.03,30+d),e);c.position.set(p*3.1,-1.3,0),c.rotation.z=p*.35,_.add(c),t.add(_),u.push({leg:_,s:p,row:g})}const f=new x0(16738890,0,16);f.position.y=3,i.add(f);const h={flash:0};return i.userData={body:t,glow:f,hurt(){h.flash=1},animate(d,p,g){const _=p==="stunned",m=p==="angry";t.position.y=_?-.35:Math.sin(d*1.6)*.12,t.rotation.z=_?Math.sin(d*40)*.015:Math.sin(d*.9)*.03,u.forEach(({leg:c,s:M,row:S},y)=>{c.rotation.y=_?M*.55:Math.sin(d*(m?9:3)+y*1.3)*.22,c.rotation.z=_?-M*.25:Math.sin(d*(m?9:3)+y*1.3+1)*.06}),l.forEach(({top:c,bot:M,hand:S,s:y},U)=>{const b=_?.05:m?.5+Math.sin(d*16+U)*.45:.3+Math.sin(d*2.4+U*2)*.28;c.rotation.x=-b*.7,M.rotation.x=b*.7,S.rotation.y=-y*(_?.5:.15+Math.sin(d*1.5+U)*.1)}),a.forEach((c,M)=>{c.rotation.z=_?d*12:0,c.rotation.y=Math.sin(d*1.2+M)*.3,c.scale.setScalar(_?1.15:1)}),h.flash=Math.max(0,h.flash-g*5),f.intensity=(m?60:0)+h.flash*40,t.traverse(c=>{c.isMesh&&c.material.emissive&&(c.material.emissive.setRGB(h.flash,h.flash*.6,h.flash*.4),c.material.emissiveIntensity=1)})}},i}const Sn=new P(0,0,-30),Fl=new P(0,0,-26.5),ev={id:"boss",name:dn.name,rarity:"legendary",fight:.62,radius:2.5,hp:1,baseValue:0};function nv(i){const{bus:t,store:e,scene:n,player:s,water:r,camRig:o,tweens:a}=i,l={boss:null,mesh:null,active:!1,prev:"idle",pos:Sn.clone(),t:0,riseY:-6,target:Sn.clone(),telegraph:null,bubble:null,stunT:0,reelK:0};function u(){if(!Qg(e.state,l.boss||Nl(),l.active))return!1;e.state.chum--,l.boss=Nl(),l.active=!0,l.prev="idle",l.pos.copy(Sn),l.riseY=-7,l.mesh=tv(),l.mesh.position.set(Sn.x,l.riseY,Sn.z),n.add(l.mesh),a.to(l,{riseY:.3},2.2,An.outBack),t.emit("boss:summon",{});for(let d=0;d<6;d++)setTimeout(()=>r.ripple(Sn.x+(Math.random()-.5)*8,Sn.z+(Math.random()-.5)*6,1.4),d*300);return!0}function f(d,p){if(!l.active||!l.boss)return;const g=jg(l.boss,d);g>0?(l.mesh.userData.hurt(),t.emit("boss:hit",{pos:p,damage:g})):t.emit("boss:blocked",{pos:p}),l.boss.state==="dead"&&h()}function h(){const d=e.state;d.bossDefeated=!0,d.money+=dn.reward,d.stats.earned+=dn.reward;const p=l.mesh.position.clone().add(new P(0,2,0));t.emit("boss:down",{pos:p}),t.emit("toast",{msg:`🏆 ${dn.name} defeated! +$${dn.reward}`}),setTimeout(()=>t.emit("toast",{msg:"🏝️ Island cleared — more islands coming soon!"}),1800);const g=l.mesh;a.to(g.position,{y:-8},3,An.inOutSine,()=>{n.remove(g),l.active=!1,l.mesh=null}),a.to(g.rotation,{z:.6,x:.3},3,An.outCubic)}return{get active(){return l.active},get boss(){return l.boss},hookDef:ev,summon:u,damage:f,centerPos(){return l.mesh?new P(l.pos.x,l.mesh.position.y+2,l.pos.z):null},hitTest(d){if(!l.active||!l.mesh||l.boss.state==="dead")return null;const p=new P(l.pos.x,l.mesh.position.y+2,l.pos.z),g=p.clone().sub(d.origin),_=g.dot(d.direction);return _<0?null:Math.sqrt(Math.max(0,g.lengthSq()-_*_))<=4.4?{t:_,pos:p.clone()}:null},isTarget(d){return l.active&&l.boss&&l.boss.state==="idle"&&l.mesh&&Math.hypot(d.x-l.pos.x,d.z-l.pos.z)<6.5},hookPoint(){return new P(l.pos.x,.6,l.pos.z+3.2)},reelUpdate(d,p){l.reelK=d,l.mesh&&l.mesh.userData.hurt&&p>.85&&l.mesh.userData.hurt()},reelEnd(d){l.reelK=0,d==="landed"&&Jg(l.boss)},update(d){if(!l.active||!l.mesh)return;l.t+=d;const p=l.boss;if(p.state!=="dead"){if(Zg(p,d),p.state!==l.prev){if(p.state==="vulnerable"){const c=this.centerPos();t.emit("boss:stun",{pos:c})}p.state==="recover"&&this.retaliate(),l.prev=p.state}let g=Sn;p.state==="vulnerable"?g=Fl:p.state==="idle"&&l.reelK>0&&(g=Sn.clone().lerp(Fl,l.reelK*.8));const _=p.state==="idle"?Math.sin(l.t*.5)*3.5:0;l.pos.x+=(g.x+_-l.pos.x)*(1-Math.exp(-2.2*d)),l.pos.z+=(g.z-l.pos.z)*(1-Math.exp(-2.2*d)),l.mesh.position.set(l.pos.x,l.riseY,l.pos.z);const m=p.state==="vulnerable"?"stunned":p.state==="recover"?"angry":"idle";l.mesh.userData.animate(l.t,m,d),Math.random()<d*(m==="stunned"?2:1)&&r.ripple(l.pos.x+(Math.random()-.5)*6,l.pos.z+3+Math.random()*2,.7)}if(l.telegraph){const g=l.telegraph;if(g.t+=d,g.ring.scale.setScalar(1+Math.sin(g.t*14)*.08),g.mat.opacity=.5+Math.sin(g.t*18)*.3,g.t>1.1&&!l.bubble){const _=new Ut(new _e(.7,1),new rn({color:10479359,emissive:5224191,emissiveIntensity:.8,transparent:!0,opacity:.85,flatShading:!0}));_.position.copy(l.mesh.position).add(new P(0,3,2)),n.add(_),l.bubble={m:_,from:_.position.clone(),to:g.ring.position.clone(),t:0}}if(l.bubble){const _=l.bubble;_.t+=d/.7;const m=Math.min(1,_.t);_.m.position.lerpVectors(_.from,_.to,m),_.m.position.y+=Math.sin(m*Math.PI)*6,m>=1&&this.bubbleHit()}}l.stunT>0&&(l.stunT-=d,l.stunT<=0&&(i.input.enabled=!i.uiBlocking))},retaliate(){if(l.telegraph)return;const d=new Ut(new ds(1.4,1.9,24),new Te({color:16731453,transparent:!0,opacity:.7,depthTest:!1,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.set(s.pos.x,s.pos.y+.12,s.pos.z),d.renderOrder=12,n.add(d),l.telegraph={ring:d,mat:d.material,t:0},t.emit("boss:telegraph",{pos:d.position.clone()})},bubbleHit(){const d=l.telegraph,p=l.bubble;n.remove(p.m),n.remove(d.ring),l.telegraph=null,l.bubble=null,t.emit("explosion",{pos:d.ring.position.clone(),radius:2}),Math.hypot(s.pos.x-d.ring.position.x,s.pos.z-d.ring.position.z)<2.3?(s.vel.z+=14,s.playAnim("hurt"),i.input.enabled=!1,l.stunT=.8,t.emit("boss:playerHit",{}),t.emit("toast",{msg:"Ouch! Keep moving!"})):t.emit("toast",{msg:"Dodged!"})}}}const iv=({air:i=!1,spin:t=!1,chain:e=1})=>(t?5:1)+(i?1:0)+.5*Math.max(0,e-1);function sv(i,t){return i.hp<=0?{dead:!0}:(i.hp=Math.max(0,i.hp-t),{dead:i.hp===0})}const rv=1,ov=Math.PI*2*.85,av=["slingshot","pistol","shotgun","dynamite"];function lv(i){const{bus:t,store:e,scene:n,player:s,input:r,creatureSys:o,aimPoint:a}=i,l={cool:0,chain:0,chainT:-99,angle:null,hist:[],time:0},u=[],f=[],h=[],d=new P,p=new P;new P;const g=new Te({color:16771488}),_=new ve(.06,.06,1);_.translate(0,0,.5);function m(v,w,C=16771488){const N=new Ut(_,g.clone());N.material.color.setHex(C),N.position.copy(v),N.lookAt(w),N.scale.z=v.distanceTo(w),n.add(N),f.push({m:N,t:0})}const c=()=>i.uiBlocking,M=()=>ps[e.state.equippedWeapon]||ps.slingshot;function S(){return p.set(s.pos.x+Math.sin(s.facing)*.7,s.pos.y+1.45,s.pos.z+Math.cos(s.facing)*.7),p}function y(v,w=.5){let C=null;for(const N of i.creatures){if(!N.alive||N.mode==="water")continue;d.set(N.pos.x,N.pos.y+N.def.radius*.5,N.pos.z).sub(v.origin);const L=d.dot(v.direction);if(L<0)continue;const I=Math.sqrt(Math.max(0,d.lengthSq()-L*L));I<=N.def.radius*1.7+w&&(!C||L<C.t)&&(C={ent:N,t:L,perp:I})}return C}function U(v,w,C,N){const L=new P(v.pos.x,v.pos.y+v.def.radius*.6,v.pos.z),I=v.air,z=sv(v,w);if(v.hurt=1,t.emit("hit",{pos:L,damage:w,air:I,ent:v}),!z.dead){const W=new P(s.pos.x-v.pos.x,0,s.pos.z-v.pos.z).normalize().multiplyScalar(1.6).add(new P((Math.random()-.5)*1.6,0,(Math.random()-.5)*1.6));return o.pop(v,6.5+Math.min(3,w*.04),W),null}l.chain=l.time-l.chainT<3?l.chain+1:1,l.chainT=l.time;const G=iv({air:I,spin:N,chain:l.chain}),O=Mg(v.def,{mult:G}),K=[];return N&&K.push("360 NO-SCOPE! ×5"),I&&K.push("AIR SHOT! +1"),l.chain>1&&K.push("CHAIN ×"+l.chain),e.state.stats.killed++,t.emit("kill",{creature:v.def,pos:L,value:O,mult:G,tags:K,ent:v}),b(v,L,O,G),o.remove(v),N&&(l.hist.length=0),{value:O,mult:G}}function b(v,w,C,N){const L=zc(v.def);L.scale.setScalar(.5),L.position.copy(w),n.add(L);const I=new Ut(new _e(.7,0),new Te({color:16769357,transparent:!0,opacity:.35,depthWrite:!1}));L.add(I),u.push({mesh:L,glow:I,def:v.def,value:C,mult:N,pos:w.clone(),vel:new P((Math.random()-.5)*3,6,(Math.random()-.5)*3),t:0})}function A(){const v=M();l.cool=v.cooldown;const w=S().clone();i.cursorRay&&i.cursorRay.direction.normalize();const C=i.cursorRay,N=Math.abs(l.hist.reduce((K,W)=>K+W.d,0))>=ov,L=y(C,v.kind==="spread"?1.4:.5),I=L?new P(L.ent.pos.x,L.ent.pos.y+L.ent.def.radius*.5,L.ent.pos.z):a.clone();if(s.holdAim(.5),s.playAnim("shoot"),t.emit("shoot",{from:w,weapon:v.id,spin:N}),v.kind==="thrown"){R(w,I,v);return}if(m(w,I),v.kind==="spread")for(let K=1;K<5;K++)m(w,I.clone().add(new P((Math.random()-.5)*1.4,(Math.random()-.5)*.8,(Math.random()-.5)*1.4)),16761963);const z=i.bossCtl;let G=!1;if(z&&z.active){const K=z.hitTest(C);K&&(!L||K.t<L.t)&&(z.damage(v.damage*(v.kind==="spread"?4:1),K.pos),G=!0)}if(!L||G)return;const O=v.kind==="spread"?i.creatures.filter(K=>K.alive&&K.mode!=="water"&&K.pos.distanceTo(L.ent.pos)<2.2):[L.ent];for(const K of O){const W=v.kind==="spread"?K===L.ent?5+Math.floor(Math.random()*2):2+Math.floor(Math.random()*3):1;U(K,v.damage*W,w,N)}}function R(v,w,C){const N=new wt,L=new Ut(new ne(.11,.11,.55,8),new rn({color:14169130,flatShading:!0})),I=new Ut(new _e(.1,0),new Te({color:16765500}));I.position.y=.4,N.add(L,I),N.position.copy(v),n.add(N);const z=.7,G=24,O=Math.max(.15,i.island.groundY(w.x,w.z));h.push({mesh:N,spark:I,pos:v.clone(),vel:new P((w.x-v.x)/z,(O-v.y+.5*G*z*z)/z,(w.z-v.z)/z),fuse:.55,landed:!1,w:C,G})}function x(v){const w=v.w;t.emit("explosion",{pos:v.pos.clone(),radius:w.radius});const C=!1;for(const L of[...i.creatures]){if(!L.alive||L.mode==="water")continue;const I=L.pos.distanceTo(v.pos);I<w.radius&&U(L,w.damage*(1-I/w.radius*.5),v.pos,C)}const N=i.bossCtl;if(N&&N.active){const L=N.centerPos();L&&L.distanceTo(v.pos)<w.radius+3&&N.damage(w.damage*1.5,L)}}return{get weapon(){return M()},get debug(){return l},update(v){l.time+=v,l.cool=Math.max(0,l.cool-v);const w=Math.atan2(a.z-s.pos.z,a.x-s.pos.x);if(l.angle!==null){let L=w-l.angle;L=Math.atan2(Math.sin(L),Math.cos(L)),Math.abs(L)<2.5&&l.hist.push({t:l.time,d:L})}for(l.angle=w;l.hist.length&&l.time-l.hist[0].t>rv;)l.hist.shift();const C=av.filter(L=>e.state.weapons.includes(L));for(let L=0;L<C.length;L++)r.wasPressed("Digit"+(L+1))&&(e.state.equippedWeapon=C[L],t.emit("weapon:equip",{id:C[L]}));r.wasPressed("KeyQ")&&C.length>1&&(e.state.equippedWeapon=C[(C.indexOf(e.state.equippedWeapon)+1)%C.length],t.emit("weapon:equip",{id:e.state.equippedWeapon})),(r.mouse.rightPressed||r.wasPressed("KeyF"))&&!c()&&l.cool<=0&&i.fishing.state==="idle"&&A();for(let L=f.length-1;L>=0;L--){const I=f[L];I.t+=v,I.m.scale.x=I.m.scale.y=Math.max(.01,1-I.t/.09),I.t>.09&&(n.remove(I.m),I.m.material.dispose(),f.splice(L,1))}for(let L=h.length-1;L>=0;L--){const I=h[L];if(I.landed)I.fuse-=v;else{I.vel.y-=I.G*v,I.pos.addScaledVector(I.vel,v),I.mesh.rotation.x+=v*12;const z=i.island.walkable(I.pos.x,I.pos.z)?i.island.groundY(I.pos.x,I.pos.z)+.15:-3;I.pos.y<=z&&I.vel.y<0&&(I.pos.y=Math.max(z,.15),I.landed=!0,I.vel.set(0,0,0))}I.mesh.position.copy(I.pos),I.spark.scale.setScalar(1+Math.sin(i.time*40)*.5),I.landed&&I.fuse<=0?(x(I),n.remove(I.mesh),h.splice(L,1)):I.pos.y<-2&&(n.remove(I.mesh),h.splice(L,1))}for(let L=u.length-1;L>=0;L--){const I=u[L];if(I.t+=v,I.t<.5){I.vel.y-=22*v,I.pos.addScaledVector(I.vel,v);const z=(i.island.walkable(I.pos.x,I.pos.z)?i.island.groundY(I.pos.x,I.pos.z):0)+.5;I.pos.y<z&&(I.pos.y=z,I.vel.y*=-.4)}else{d.set(s.pos.x,s.pos.y+1.4,s.pos.z).sub(I.pos);const z=d.length(),G=6+(I.t-.5)*30;if(z<.7){e.state.inventory.push({id:I.def.id,name:I.def.name,rarity:I.def.rarity,value:I.value,mult:I.mult}),t.emit("loot:collect",{item:I}),n.remove(I.mesh),u.splice(L,1);continue}I.pos.addScaledVector(d.normalize(),Math.min(z,G*v))}I.mesh.position.copy(I.pos),I.mesh.rotation.y+=v*6,I.glow.scale.setScalar(1+Math.sin(i.time*10)*.12)}}}}function cv(){const i=new wt,t=new wt;i.add(t);const e=xt(new xe(.2,10,6,0,Math.PI*2,0,Math.PI/2),"#ff3b30");t.add(e);const n=xt(new xe(.2,10,6,0,Math.PI*2,Math.PI/2,Math.PI/2),"#ffffff");t.add(n);const s=xt(new ne(.02,.02,.35,4),"#ffffff");s.position.y=.32,t.add(s);const r=new Ut(new xe(.05,6,4),new rn({color:"#ffd166",emissive:"#ffd166",emissiveIntensity:2}));r.position.y=.52,t.add(r);const o=new as(0,220,9),a={floating:!1,base:new P};return{group:i,inner:t,place(l){i.position.copy(l),a.base.copy(l)},setFloating(l){a.floating=l},dip(l){o.target=0,o.value=-l,o.vel=-l*6},show(){i.visible=!0},hide(){i.visible=!1},update(l,u,f=0){o.update(l),a.floating?(i.position.y=a.base.y+f+Math.sin(u*2.4)*.05+o.value,t.rotation.z=Math.sin(u*1.7)*.12+o.vel*.02,t.rotation.x=Math.cos(u*1.3)*.1):t.rotation.set(0,0,0)}}}const Jr=26;function uv(i){const t=new ne(.02,.02,1,4);t.translate(0,.5,0);const e=new Te({color:16777215}),n=new hs(t,e,Jr);n.frustumCulled=!1,n.visible=!1,n.castShadow=!1,i.add(n);const s=new Jt,r=new ki,o=new P(0,1,0),a=new P,l=new P,u=new P,f=new P,h=new P,d=new P,p=new P,g=new Mt("#ffffff"),_=new Mt("#ff3b30"),m=new Mt("#ffd23c"),c=(M,S)=>{const y=1-M;return S.set(y*y*l.x+2*y*M*f.x+M*M*u.x,y*y*l.y+2*y*M*f.y+M*M*u.y,y*y*l.z+2*y*M*f.z+M*M*u.z)};return{mesh:n,show(){n.visible=!0},hide(){n.visible=!1},setEnds(M,S,y=.6,U=0,b=0){l.copy(M),u.copy(S),f.copy(l).lerp(u,.5),f.y-=y*2,f.x+=Math.sin(b*3)*U,f.z+=Math.cos(b*2.6)*U,c(0,h);for(let A=0;A<Jr;A++){c((A+1)/Jr,d),p.subVectors(d,h);const R=Math.max(p.length(),1e-4);r.setFromUnitVectors(o,p.multiplyScalar(1/R)),a.set(1,R*1.02,1),s.compose(h,r,a),n.setMatrixAt(A,s),h.copy(d)}n.instanceMatrix.needsUpdate=!0},tint(M){e.color.copy(M<.6?g.clone().lerp(m,M/.6):m.clone().lerp(_,(M-.6)/.4))}}}const hv=i=>Math.max(0,Math.min(1,i/1.2)),Ol=(i,t)=>3+i*(t.range-3);function dv(i){return!i.equippedRod||!Xe[i.equippedRod]?{ok:!1,reason:"norod"}:!i.equippedBait||(i.baits[i.equippedBait]||0)<=0?{ok:!1,reason:"nobait"}:{ok:!0}}function fv(i){return i.baits[i.equippedBait]-=1,i.equippedBait}const pv=(i=Math.random)=>1.5+i()*3.5;function mv(i,t){return{creature:i,rod:t,progress:.2,tension:.1,t:0,status:"reeling"}}function gv(i,t,e){if(i.status!=="reeling")return i.status;i.t+=t;const n=Math.max(0,Math.sin(i.t*3.2));return i.tension+=((e?.7:-.5)+i.creature.fight*n*1.5)*t,i.tension=Math.max(0,i.tension),i.progress+=(e?i.rod.reelSpeed*(1-.3*i.tension):-.05)*t,i.tension>=1?i.status="snapped":i.progress>=1?i.status="landed":i.progress<=0&&(i.status="escaped"),i.status}const vv=1.2,_v=.55;function xv(i){const{bus:t,store:e,scene:n,player:s,island:r,water:o,input:a,camRig:l,aimPoint:u,creatureSys:f}=i,h=cv();h.hide(),n.add(h.group);const d=uv(n),p=new wt;p.visible=!1,n.add(p);const g=new Te({color:16777215,transparent:!0,opacity:.9,depthWrite:!1,depthTest:!1}),_=new Ut(new ds(.55,.7,28),g);_.rotation.x=-Math.PI/2;const m=new Ut(new ds(.2,.3,20),g);m.rotation.x=-Math.PI/2,p.add(_,m),p.renderOrder=10,_.renderOrder=10,m.renderOrder=10;const c={name:"idle",t:0,hold:0,power:0,biteIn:0,biteWin:0,nibbles:[],creature:null,ent:null,reel:null,baitId:"ham",start:new P,target:new P,pos:new P,pull:new P,cool:0},M=new P,S=new P,y=new P;function U(){return S.set(u.x-s.pos.x,0,u.z-s.pos.z),S.lengthSq()<.01&&S.set(Math.sin(s.facing),0,Math.cos(s.facing)),S.normalize()}const b=(I,z)=>!r.walkable(I,z);function A(){c.name="idle",c.ent=null,c.reel=null,h.setFloating(!1),h.hide(),d.hide(),l.setFocus(null),s.setBend(0)}const R=()=>i.uiBlocking,x=()=>!R()&&(a.mouse.leftPressed||a.wasPressed("Space"));function v(){const I=dv(e.state);if(!I.ok){t.emit("cast:refused",{reason:I.reason});return}c.name="charging",c.hold=0,c.power=0}function w(){const I=Xe[e.state.equippedRod],z=U(),G=Ol(c.power,I);if(c.target.set(s.pos.x+z.x*G,0,s.pos.z+z.z*G),p.visible=!1,s.setBend(0),!b(c.target.x,c.target.z)){c.name="idle",t.emit("cast:refused",{reason:"land"});return}c.baitId=fv(e.state),c.creature=xg(c.baitId,e.state.equippedRod),s.playAnim("cast"),s.rodTip(c.start),c.name="flying",c.t=0,h.place(c.start),h.setFloating(!1),h.show(),d.show(),t.emit("cast:release",{power:c.power,target:c.target.clone(),dir:z.clone()})}function C(){c.name="waiting",c.target.y=0,h.place(c.target),h.setFloating(!0),t.emit("bobber:land",{pos:c.target.clone()}),c.biteIn=pv(),c.t=0,c.isBoss=!!(i.bossCtl&&i.bossCtl.isTarget(c.target)),c.isBoss&&(c.creature=i.bossCtl.hookDef),c.isBoss&&(c.biteIn=1.2),c.nibbles=[c.biteIn*(.3+Math.random()*.15),c.biteIn*(.6+Math.random()*.2)]}function N(){const I=Xe[e.state.equippedRod];c.reel=mv(c.creature,I),c.isBoss?c.ent={pos:new P,mesh:{position:new P,rotation:new sn,userData:{anim(){}}}}:(c.ent=f.spawn(c.creature,y.set(c.target.x,-.1,c.target.z)),c.ent.mode="water"),c.name="reeling",s.playAnim("hook"),t.emit("hook",{creature:c.creature,pos:c.target.clone()})}function L(I){const z=c.ent;if(c.isBoss){i.bossCtl.reelEnd(I),I==="landed"?s.playAnim("celebrate"):t.emit(I==="snapped"?"reel:snap":"reel:escape",{pos:c.pos.clone(),creature:c.creature}),c.isBoss=!1,A(),c.cool=.35;return}if(I==="landed"){const G=U(),O=new P(s.pos.x,0,s.pos.z),K=-G.z,W=G.x;for(const[et,pt]of[[2.6,.8],[2,.8],[1.4,.8],[2.2,0],[1.5,0],[.8,0]]){const Y=s.pos.x+G.x*et+K*pt,J=s.pos.z+G.z*et+W*pt;if(r.walkable(Y,J)&&r.walkable(Y+G.x*.6,J+G.z*.6)){O.set(Y,0,J);break}}O.y=r.groundY(O.x,O.z)+.3,z.pos.set(c.pos.x,Math.max(c.pos.y,.2),c.pos.z),f.launch(z,O,.95);const V=e.state;V.stats.caught++,V.dex[c.creature.id]=!0,t.emit("catch:land",{creature:c.creature,ent:z,pos:z.pos.clone(),spot:O}),s.playAnim("celebrate")}else t.emit(I==="snapped"?"reel:snap":"reel:escape",{pos:c.pos.clone(),creature:c.creature}),t.emit("creature:splash",{ent:z,pos:c.pos.clone(),escaped:!0}),f.remove(z);A(),c.cool=.35}return{get state(){return c.name},get current(){return c},update(I){c.cool=Math.max(0,c.cool-I),s.showRod(!!e.state.equippedRod);const z=c.name!=="idle";switch(z&&s.holdAim(.25),c.name){case"idle":c.cool<=0&&!R()&&a.mouse.leftPressed&&v();break;case"charging":{c.hold+=I,c.power=hv(c.hold);const G=Xe[e.state.equippedRod],O=U(),K=Ol(c.power,G);p.visible=!0,p.position.set(s.pos.x+O.x*K,.08+Qs(s.pos.x+O.x*K,s.pos.z+O.z*K,i.time),s.pos.z+O.z*K);const W=b(p.position.x,p.position.z);g.color.set(W?c.power>.95?"#ffd23c":"#ffffff":"#ff5a4a");const V=1+Math.sin(i.time*12)*.08+c.power*.5;_.scale.setScalar(V),m.scale.setScalar(1.2-c.power*.5),s.setBend(-c.power*.8),t.emit("cast:charge",{power:c.power,pos:p.position.clone(),ok:W}),(a.mouse.leftReleased||!a.mouse.left)&&w();break}case"flying":{c.t+=I;const G=Math.min(1,c.t/_v);s.rodTip(M),c.pos.lerpVectors(c.start,c.target,G),c.pos.y+=Math.sin(G*Math.PI)*(2+c.power*3),h.place(c.pos),h.group.rotation.y+=I*10,d.setEnds(M,c.pos,.15+(1-G)*.3,0,i.time),G>=1&&C();break}case"waiting":{c.t+=I,c.biteIn-=I;const G=Qs(c.target.x,c.target.z,i.time);if(h.update(I,i.time,G),s.rodTip(M),y.copy(h.group.position),d.setEnds(M,y,.35,.05,i.time),c.nibbles.length&&c.t>c.nibbles[0]&&(c.nibbles.shift(),h.dip(.14),t.emit("nibble",{pos:c.target.clone()})),x()){t.emit("cast:retrieve",{pos:c.target.clone()}),A(),c.cool=.25;break}c.biteIn<=0&&(c.name="bite",c.biteWin=vv,h.dip(.55),t.emit("bite",{pos:c.target.clone(),creature:c.creature}));break}case"bite":{c.biteWin-=I;const G=Qs(c.target.x,c.target.z,i.time);if(h.update(I,i.time,G),Math.sin(i.time*22)>.97&&h.dip(.35),s.rodTip(M),y.copy(h.group.position),d.setEnds(M,y,.25,.08,i.time),x()){N();break}c.biteWin<=0&&(t.emit("bite:miss",{pos:c.target.clone()}),A(),c.cool=.3);break}case"reeling":{const G=!R()&&(a.mouse.left||a.keys.has("Space")),O=gv(c.reel,I,G),K=c.ent,W=c.reel,V=U();c.pull.set(s.pos.x+V.x*3.2,0,s.pos.z+V.z*3.2);const et=Math.min(1,Math.max(0,(W.progress-.1)/.9));c.pos.lerpVectors(c.target,c.pull,et*et*(3-2*et)*.92+et*.08);const pt=.12+W.creature.fight*.6;c.pos.x+=Math.sin(i.time*7)*pt*.5,c.pos.z+=Math.cos(i.time*6)*pt*.5,c.pos.y=Math.abs(Math.sin(i.time*9))*pt*1.2-.1,c.isBoss&&(c.pos.copy(i.bossCtl.hookPoint()),i.bossCtl.reelUpdate(W.progress,W.tension)),K.pos.copy(c.pos),K.mesh.position.copy(c.pos),K.mesh.rotation.set(0,Math.atan2(c.pull.x-c.pos.x,c.pull.z-c.pos.z)+Math.sin(i.time*8)*.6,Math.sin(i.time*11)*.5,"YXZ"),K.mesh.userData.anim(i.time,1),y.set(c.pos.x,Math.max(c.pos.y,0)+.25,c.pos.z),h.place(y),h.setFloating(!1),h.inner.rotation.z=Math.sin(i.time*10)*.3,s.rodTip(M),d.setEnds(M,y,Math.max(.03,.5*(1-W.tension)),.02,i.time),d.tint(W.tension),s.setBend(.25+W.tension*.9),l.setFocus(c.pos),Math.random()<I*5&&o.ripple(c.pos.x,c.pos.z,.5),t.emit("reel:update",{tension:W.tension,progress:W.progress,holding:G,pos:c.pos.clone()}),O!=="reeling"&&L(O);break}}c.name!=="reeling"&&d.tint(0),z||(p.visible=!1)}}}const Bc=document.getElementById("app"),zl=G0(Bc);zl?Mv(zl):Bc.innerHTML=`<div class="nogl"><h1>🎣 How to Fish</h1><p>Your browser or device doesn't support WebGL, which this game needs. Try a recent Chrome, Edge, Firefox or Safari with hardware acceleration enabled.</p></div>`;function Mv(i){const{scene:t,camera:e}=i,n=E0(),s=new w0,r=D0(P0(localStorage)),o=A0(i.renderer.domElement),a=W0(t),l=X0();t.add(l.mesh);const u=q0(t),f=lg(t),h=cg(t,f),d=ug(e),p=new b0,g=new Bn(new P(0,1,0),0),_=new P;function m(){p.setFromCamera(new at(o.mouse.ndc.x,o.mouse.ndc.y),e),p.ray.intersectPlane(g,_)||_.copy(h.pos)}const c={bus:n,store:r,tweens:s,input:o,gfx:i,scene:t,camera:e,lights:a,water:l,sky:u,island:f,player:h,camRig:d,aimPoint:_,time:0,systems:[]};c.uiBlocking=!1,c.particles=hg(t,(b,A)=>f.walkable(b,A)?f.groundY(b,A):-.5),c.text=dg(document.getElementById("ui"),e),c.hitstop=fg(),c.juice=gg(c),c.creatureSys=Kg(c),c.bossCtl=nv(c),c.fishing=xv(c),c.cursorRay=p.ray,c.combat=lv(c),c.systems.push(c.fishing,c.combat,c.bossCtl,c.creatureSys),c.audio=vg(n),c.toasts=_g(document.getElementById("ui"),n),c.hud=Og(document.getElementById("ui"),c),window.__game=c;const M={ema:16,bad:0,level:0,locked:new URLSearchParams(location.search).has("lowfx")};function S(b){M.level=b,b>=1&&(i.bloom.enabled=!1,a.sun.shadow.mapSize.set(1024,1024),a.sun.shadow.map&&(a.sun.shadow.map.dispose(),a.sun.shadow.map=null)),b>=2&&(i.renderer.setPixelRatio(1),i.resize()),console.info("[quality] level",b)}c.setQuality=S,T0({update(b){c.hitstop.update(b);const A=c.paused?0:b*c.hitstop.scale();c.time+=b,m(),h.update(A,o.axis(),_);for(const R of c.systems)R.update(A);c.hud.update(b),s.update(A),c.particles.update(b),c.text.update(b),c.juice.update(b),d.update(b,h.pos,c.time),a.update(c.time,h.pos),l.update(c.time),f.update(c.time,b),u.update(b,e.position),o.endFrame()},render(b,A){M.ema+=(A*1e3-M.ema)*.05,!M.locked&&M.ema>26&&M.level<2?(M.bad+=A,M.bad>3&&(M.bad=0,S(M.level+1))):M.bad=0,i.render()}}).start();const U=()=>{c.skipSave||L0(localStorage,r.state)};setInterval(U,5e3),addEventListener("beforeunload",U),document.addEventListener("visibilitychange",()=>{document.hidden&&U()})}
