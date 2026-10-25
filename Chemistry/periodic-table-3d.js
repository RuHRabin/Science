/* 3D views for the periodic table. Loaded only when a 3D view is chosen. Needs three.js r128 + OrbitControls. */
window.PT3D=(()=>{"use strict";
let o,R,S,C,O,T={},cards=[],raf=0,on=false,lay="sphere",sel=0,mv=null,fly=null,hv=null,down=null,auto=false,dist=1000;
const BASE={sphere:1000,helix:1000,rings:1050},ease=t=>1-Math.pow(1-t,4),ray=()=>init.ray||(init.ray=new THREE.Raycaster());

function tex(e,col){const c=document.createElement("canvas");c.width=128;c.height=160;const x=c.getContext("2d");
x.fillStyle="#0c1220";x.fillRect(0,0,128,160);x.fillStyle=col+"33";x.fillRect(0,0,128,160);
x.strokeStyle=col;x.lineWidth=4;x.strokeRect(2,2,124,156);x.fillStyle=col;x.fillRect(0,0,128,6);
x.font="600 18px system-ui,Arial";x.textAlign="left";x.fillText(e.z,10,30);
x.textAlign="center";x.fillStyle="#f8fafc";x.font="800 62px system-ui,Arial";x.fillText(e.s,64,94);
x.fillStyle="#cbd5e1";x.font="500 16px system-ui,Arial";x.fillText(e.n.length>11?e.n.slice(0,10)+"…":e.n,64,124);
x.fillStyle="#8d9bb0";x.font="500 14px system-ui,Arial";x.fillText(e.m,64,146);
const t=new THREE.CanvasTexture(c);t.generateMipmaps=false;t.minFilter=THREE.LinearFilter;return t}

function build(){const V=THREE.Vector3,ob=new THREE.Object3D(),n=118,cnt={},idx={};
o.D.forEach(e=>cnt[e.p]=(cnt[e.p]||0)+1);T.sphere=[];T.helix=[];T.rings=[];
o.D.forEach((e,i)=>{const phi=Math.acos(-1+2*(i+.5)/n),th=Math.sqrt(n*Math.PI)*phi,
p=new V(330*Math.cos(th)*Math.sin(phi),330*Math.sin(th)*Math.sin(phi),330*Math.cos(phi));
ob.position.copy(p);ob.lookAt(p.x*2,p.y*2,p.z*2);T.sphere.push({p,q:ob.quaternion.clone()});
const a=i*.34,h=new V(235*Math.sin(a),(i-58.5)*5.2,235*Math.cos(a));
ob.position.copy(h);ob.lookAt(h.x*2,h.y,h.z*2);T.helix.push({p:h,q:ob.quaternion.clone()});
const k=idx[e.p]=(idx[e.p]||0)+1,ang=(k-1)/cnt[e.p]*6.2832-1.5708,r=50+e.p*44;
T.rings.push({p:new V(r*Math.cos(ang),-r*Math.sin(ang),0),q:new THREE.Quaternion()})})}

function init(opts){o=opts;const host=o.host;
R=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:"low-power"});R.setPixelRatio(Math.min(devicePixelRatio||1,1.5));host.prepend(R.domElement);
S=new THREE.Scene();C=new THREE.PerspectiveCamera(45,1,10,4000);
O=new THREE.OrbitControls(C,R.domElement);O.enableDamping=true;O.dampingFactor=.08;O.enablePan=false;O.minDistance=220;O.maxDistance=2200;O.rotateSpeed=.8;
O.addEventListener("start",()=>{fly=null});
const geo=new THREE.PlaneGeometry(40,50);
o.D.forEach(e=>{const m=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({map:tex(e,o.COL[e.c]),transparent:true}));m.userData.z=e.z;m.scale.setScalar(.01);S.add(m);cards.push(m)});
build();
host.insertAdjacentHTML("beforeend",'<div class="tools"><button id="t-auto" aria-pressed="false">Auto-rotate</button><button id="t-reset">Reset view</button></div><div class="hint">Drag to rotate, pinch or scroll to zoom, tap an element</div>');
const ta=host.querySelector("#t-auto");
ta.onclick=()=>{auto=!auto;O.autoRotate=auto;O.autoRotateSpeed=1.2;ta.setAttribute("aria-pressed",auto)};
host.querySelector("#t-reset").onclick=reset;
const cv=R.domElement;
cv.addEventListener("pointerdown",e=>{down={x:e.clientX,y:e.clientY,t:performance.now()}});
cv.addEventListener("pointerup",e=>{if(!down||!e.isPrimary)return;const d=Math.hypot(e.clientX-down.x,e.clientY-down.y),dt=performance.now()-down.t;down=null;
if(d<8&&dt<600){const m=hit(e);if(m)o.onPick(m.userData.z)}});
cv.addEventListener("pointermove",e=>{if(e.pointerType!=="mouse"||down)return;hv=hit(e);cv.style.cursor=hv?"pointer":"grab"});
cv.addEventListener("pointerleave",()=>{hv=null});
new ResizeObserver(resize).observe(host);
document.addEventListener("visibilitychange",()=>{if(!document.hidden)go()})}

function hit(e){const r=R.domElement.getBoundingClientRect(),v=new THREE.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),rc=ray();
rc.setFromCamera(v,C);const h=rc.intersectObjects(cards.filter(m=>m.visible&&o.D[m.userData.z-1].ok),false)[0];return h?h.object:null}

function resize(){const w=o.host.clientWidth,h=o.host.clientHeight;if(!w||!h)return;R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix();dist=BASE[lay]*Math.max(1,1.1/C.aspect)}
function reset(){fly=null;resize();C.position.set(0,dist*.1,dist);O.target.set(0,0,0);O.update()}

function start(v){lay=v;on=true;
cards.forEach(m=>{m.material.side=v==="rings"?THREE.DoubleSide:THREE.FrontSide;m.material.needsUpdate=true});
mv={t:performance.now(),f:cards.map(m=>({p:m.position.clone(),q:m.quaternion.clone()}))};reset();go()}
function stop(){on=false}
function go(){if(on&&!raf)raf=requestAnimationFrame(frame)}

function select(z){sel=z;if(!z||!on)return;
const t=T[lay][z-1],n=new THREE.Vector3(0,0,1).applyQuaternion(t.q),tg=new THREE.Vector3(0,lay==="helix"?t.p.y:0,0);
let to;if(lay==="rings")to=new THREE.Vector3(t.p.x*.6,t.p.y*.6,dist*.85);else{n.y=lay==="helix"?0:n.y;to=tg.clone().add(n.normalize().multiplyScalar(dist*.7))}
fly={t:performance.now(),f:C.position.clone(),ft:O.target.clone(),to,tt:tg}}

function frame(now){raf=0;if(!on||document.hidden)return;
if(mv){const k=Math.min(1,(now-mv.t)/900),e=ease(k);cards.forEach((m,i)=>{const f=mv.f[i],g=T[lay][i];m.position.lerpVectors(f.p,g.p,e);m.quaternion.copy(f.q).slerp(g.q,e)});if(k>=1)mv=null}
if(fly){const k=Math.min(1,(now-fly.t)/800),e=ease(k);C.position.lerpVectors(fly.f,fly.to,e);O.target.lerpVectors(fly.ft,fly.tt,e);if(k>=1)fly=null}
cards.forEach((m,i)=>{const d=o.D[i],ok=d.ok,sc=m.userData.z===sel?1.45:m===hv?1.2:ok?1:.7;
m.material.opacity+=((ok?1:.08)-m.material.opacity)*.15;m.scale.setScalar(m.scale.x+(sc-m.scale.x)*.15);m.visible=m.material.opacity>.02});
O.update();R.render(S,C);raf=requestAnimationFrame(frame)}

return{init,start,stop,select,filter:go,get on(){return on}}})();
