(()=>{"use strict";
const $=id=>document.getElementById(id);
const NAMES=["Reactive Nonmetal","Noble Gas","Alkali Metal","Alkaline Earth Metal","Metalloid","Halogen","Transition Metal","Post-Transition Metal","Lanthanide","Actinide"];
const COL=["#00f2fe","#d8b4fe","#ff6b6b","#fbbf24","#34d399","#a7f3d0","#60a5fa","#2dd4bf","#f472b6","#c084fc"];
const RAW=`H|Hydrogen|1.008|Fuel of the stars
He|Helium|4.0026|Inert gas used for cryogenics
Li|Lithium|6.94|The battery metal
Be|Beryllium|9.0122|Light, stiff aerospace metal
B|Boron|10.81|Heat-proof borosilicate glass
C|Carbon|12.011|Backbone of life, graphite and diamond
N|Nitrogen|14.007|78% of Earth's air
O|Oxygen|15.999|Breathed by aerobic life
F|Fluorine|18.998|The most electronegative element
Ne|Neon|20.180|Red-orange glow in signs
Na|Sodium|22.990|Nerve signals and table salt
Mg|Magnesium|24.305|Heart of chlorophyll
Al|Aluminium|26.982|Light, corrosion-resistant metal
Si|Silicon|28.085|The backbone of electronics
P|Phosphorus|30.974|In DNA, ATP and bones
S|Sulfur|32.06|Makes sulfuric acid
Cl|Chlorine|35.45|Disinfectant, and half of salt
Ar|Argon|39.948|Shield gas for welding
K|Potassium|39.098|Cells, muscles and nerves
Ca|Calcium|40.078|Bones and shells
Sc|Scandium|44.956|Light, strong aluminium alloys
Ti|Titanium|47.867|Strong, biocompatible metal
V|Vanadium|50.942|Strengthens steel
Cr|Chromium|51.996|Makes steel stainless
Mn|Manganese|54.938|Essential for steelmaking
Fe|Iron|55.845|Steel, and oxygen in your blood
Co|Cobalt|58.933|Magnets, batteries, vitamin B12
Ni|Nickel|58.693|Tough, corrosion-resistant alloys
Cu|Copper|63.546|Wiring since antiquity
Zn|Zinc|65.38|Galvanizes steel
Ga|Gallium|69.723|Melts in your hand, powers LEDs
Ge|Germanium|72.630|Fiber optics and infrared lenses
As|Arsenic|74.922|Toxic metalloid
Se|Selenium|78.971|Trace nutrient, photocells
Br|Bromine|79.904|Liquid at room temperature
Kr|Krypton|83.798|High-performance lighting
Rb|Rubidium|85.468|Atomic clocks
Sr|Strontium|87.62|Red fireworks
Y|Yttrium|88.906|Phosphors and lasers
Zr|Zirconium|91.224|Nuclear reactor cladding
Nb|Niobium|92.906|Superconducting magnets
Mo|Molybdenum|95.95|Hardens steel
Tc|Technetium|[98]|Lightest element with no stable isotope
Ru|Ruthenium|101.07|Hardens platinum alloys
Rh|Rhodium|102.91|Catalytic converters
Pd|Palladium|106.42|Catalyst that soaks up hydrogen
Ag|Silver|107.87|Best electrical conductor
Cd|Cadmium|112.41|Toxic, once common in batteries
In|Indium|114.82|Touchscreen coatings
Sn|Tin|118.71|Solder and bronze
Sb|Antimony|121.76|Flame retardants
Te|Tellurium|127.60|Solar cells
I|Iodine|126.90|Thyroid hormones
Xe|Xenon|131.29|Ion thrusters and bright lamps
Cs|Caesium|132.91|Defines the second
Ba|Barium|137.33|X-ray contrast and green fireworks
La|Lanthanum|138.91|Camera lenses and lighter flints
Ce|Cerium|140.12|Most abundant rare earth
Pr|Praseodymium|140.91|Magnets and yellow glass
Nd|Neodymium|144.24|The strongest permanent magnets
Pm|Promethium|[145]|Radioactive, no stable isotope
Sm|Samarium|150.36|Heat-resistant magnets
Eu|Europium|151.96|Red phosphors in displays
Gd|Gadolinium|157.25|MRI contrast agent
Tb|Terbium|158.93|Green phosphors
Dy|Dysprosium|162.50|Magnets for hot motors
Ho|Holmium|164.93|Exceptional magnetic moment
Er|Erbium|167.26|Amplifies fiber-optic signals
Tm|Thulium|168.93|Rarest stable lanthanide
Yb|Ytterbium|173.05|Atomic clocks and fiber lasers
Lu|Lutetium|174.97|PET scanner crystals
Hf|Hafnium|178.49|Reactor control rods
Ta|Tantalum|180.95|Capacitors and implants
W|Tungsten|183.84|Highest melting point of any metal
Re|Rhenium|186.21|Jet turbine alloys
Os|Osmium|190.23|Among the densest elements
Ir|Iridium|192.22|Shrugs off corrosion
Pt|Platinum|195.08|Catalyst and jewelry
Au|Gold|196.97|Unreactive, conductive, prized
Hg|Mercury|200.59|Liquid metal, toxic
Tl|Thallium|204.38|Toxic soft metal
Pb|Lead|207.2|Dense, soft and hazardous
Bi|Bismuth|208.98|Low-toxicity heavy metal
Po|Polonium|[209]|Discovered by Marie Curie
At|Astatine|[210]|Rarest natural element
Rn|Radon|[222]|Radioactive gas in basements
Fr|Francium|[223]|Extremely rare alkali metal
Ra|Radium|[226]|Glowing radioactive metal
Ac|Actinium|[227]|Glows blue in the dark
Th|Thorium|232.04|Possible future nuclear fuel
Pa|Protactinium|231.04|Rare uranium decay product
U|Uranium|238.03|Fuel for nuclear reactors
Np|Neptunium|[237]|First transuranium element
Pu|Plutonium|[244]|Powers deep-space probes
Am|Americium|[243]|Inside smoke detectors
Cm|Curium|[247]|Space-power research
Bk|Berkelium|[247]|Made atom by atom
Cf|Californium|[251]|Strong neutron source
Es|Einsteinium|[252]|Found in test debris
Fm|Fermium|[257]|Microscopic amounts only
Md|Mendelevium|[258]|Named for Mendeleev
No|Nobelium|[259]|Named for Alfred Nobel
Lr|Lawrencium|[266]|The last actinide
Rf|Rutherfordium|[267]|Superheavy, hafnium-like
Db|Dubnium|[268]|Studied a few atoms at a time
Sg|Seaborgium|[269]|Tungsten-like chemistry
Bh|Bohrium|[270]|Named for Niels Bohr
Hs|Hassium|[277]|Osmium-like and short-lived
Mt|Meitnerium|[278]|Named for Lise Meitner
Ds|Darmstadtium|[281]|First made in Darmstadt
Rg|Roentgenium|[282]|Predicted to resemble gold
Cn|Copernicium|[285]|Volatile superheavy metal
Nh|Nihonium|[286]|First element found in Asia
Fl|Flerovium|[289]|Superheavy with odd volatility
Mc|Moscovium|[290]|Named for the Moscow region
Lv|Livermorium|[293]|Named for Livermore lab
Ts|Tennessine|[294]|Heaviest halogen
Og|Oganesson|[294]|Heaviest known element`;
const SETS=[[1,6,7,8,15,16,34],[2,10,18,36,54,86,118],[3,11,19,37,55,87],[4,12,20,38,56,88],[5,14,32,33,51,52],[9,17,35,53,85,117]],PM=[13,31,49,50,81,82,83,84,113,114,115,116];
const cat=z=>z>=57&&z<=71?8:z>=89&&z<=103?9:PM.includes(z)?7:Math.max(SETS.findIndex(s=>s.includes(z)),-1)<0?6:SETS.findIndex(s=>s.includes(z));
const per=z=>[2,10,18,36,54,86,118].findIndex(n=>z<=n)+1;
function pos(z){if(z===1)return[1,1];if(z===2)return[1,18];if(z>=57&&z<=71)return[9,z-54];if(z>=89&&z<=103)return[10,z-86];
if(z<=4)return[2,z-2];if(z<=10)return[2,z+8];if(z<=12)return[3,z-10];if(z<=18)return[3,z];if(z<=36)return[4,z-18];if(z<=54)return[5,z-36];
if(z<=56)return[6,z-54];if(z<=86)return[6,z-68];if(z<=88)return[7,z-86];return[7,z-100]}
const EX={24:[13,1],29:[18,1],41:[18,12,1],42:[18,13,1],44:[18,15,1],45:[18,16,1],46:[18,18],47:[18,18,1],57:[18,18,9,2],58:[18,19,9,2],64:[18,25,9,2],78:[18,32,17,1],79:[18,32,18,1],89:[18,32,18,9,2],90:[18,32,18,10,2],91:[18,32,20,9,2],92:[18,32,21,9,2],93:[18,32,22,9,2],96:[18,32,25,9,2],103:[18,32,32,8,3],110:[18,32,32,17,1],111:[18,32,32,18,1]};
const ORD=[[1,2],[2,2],[2,6],[3,2],[3,6],[4,2],[3,10],[4,6],[5,2],[4,10],[5,6],[6,2],[4,14],[5,10],[6,6],[7,2],[5,14],[6,10],[7,6]];
function shells(z){if(EX[z])return[2,8,...EX[z]];const s=[];let r=z;for(const[n,c]of ORD){const k=Math.min(r,c);s[n-1]=(s[n-1]||0)+k;r-=k;if(!r)break}return s}
const D=RAW.split("\n").map((l,i)=>{const[s,n,m,t]=l.split("|"),z=i+1;return{z,s,n,m,t,c:cat(z),p:per(z),sh:shells(z)}});

const T=$("T"),P=$("P"),cv=$("cv"),g=cv.getContext("2d"),still=matchMedia("(prefers-reduced-motion:reduce)").matches;
let cur=null,cf=-1,view="",rx=-.5,ry=.4,drag=null,spin=!still,raf=0,last=0,t0=0;

D.forEach(e=>{const b=document.createElement("button"),[r,k]=pos(e.z);b.className="t";b.style.cssText=`--c:${COL[e.c]};--r:${r};--k:${k}`;
b.innerHTML=`<i>${e.z}</i><b>${e.s}</b><span>${e.n}</span>`;b.setAttribute("aria-label",`${e.n}, atomic number ${e.z}`);b.onclick=()=>open(e.z);e.el=b;e.ok=true;T.append(b)});

const chips=$("chips");["All",...NAMES].forEach((n,i)=>{const b=document.createElement("button");b.className="chip";b.textContent=n;if(i)b.style.setProperty("--c",COL[i-1]);
b.setAttribute("aria-pressed",i===0);b.onclick=()=>{cf=i-1;[...chips.children].forEach((x,j)=>x.setAttribute("aria-pressed",j===i));apply()};chips.append(b)});

function apply(){const q=$("q").value.trim().toLowerCase();let n=0;
D.forEach(e=>{e.ok=(cf<0||e.c===cf)&&(!q||e.n.toLowerCase().includes(q)||e.s.toLowerCase().startsWith(q)||String(e.z)===q);e.el.classList.toggle("dim",!e.ok);n+=e.ok});
$("count").textContent=n?`${n} of 118 elements`:"No elements match. Try a symbol, a name or a number.";if(window.PT3D&&PT3D.on)PT3D.filter()}
$("q").oninput=apply;
$("q").onkeydown=e=>{if(e.key==="Enter"){const f=D.find(x=>x.ok);if(f){open(f.z);e.target.blur()}}};

const V3=["sphere","helix","rings"];let ld=null;
function add(src){return new Promise((ok,no)=>{const s=document.createElement("script");s.src=src;s.onload=ok;s.onerror=no;document.head.append(s)})}
function load3d(){return add("https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js").then(()=>add("https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js")).then(()=>add("periodic-table-3d.js")).then(()=>PT3D.init({host:$("S"),D,COL,onPick:z=>open(z)}))}
function setView(v){view=v;const is3=V3.includes(v);document.body.classList.toggle("v3d",is3);
document.querySelectorAll("[data-v]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.v===v));
T.parentNode.hidden=is3;$("S").hidden=!is3;
if(!is3){T.className=v;if(window.PT3D)PT3D.stop();return}
$("count").textContent="Loading 3D...";
(ld=ld||load3d()).then(()=>{if(view!==v)return;PT3D.start(v);apply();if(cur)PT3D.select(cur.z)}).catch(()=>{ld=null;setView("grid");$("count").textContent="The 3D views need a connection to load. Showing the grid instead."})}
document.querySelectorAll("[data-v]").forEach(b=>b.onclick=()=>setView(b.dataset.v));
setView(innerWidth<700?"grid":"table");

function fill(){const e=cur;P.style.setProperty("--c",COL[e.c]);$("ps").textContent=e.s;$("pn").textContent=e.n;$("pc").textContent=NAMES[e.c];$("pt").textContent=e.t;
$("pd").innerHTML=[["Atomic number",e.z],["Atomic mass",e.m+" u"],["Group",e.c>7?"f-block":pos(e.z)[1]],["Period",e.p],["Electrons per shell",e.sh.join(" · ")]].map(([a,b])=>`<div><dt>${a}</dt><dd>${b}</dd></div>`).join("")}
function open(z){cur=D[z-1];P.hidden=false;document.body.classList.add("open");D.forEach(e=>e.el.classList.toggle("sel",e===cur));fill();size();go();if(window.PT3D&&PT3D.on)PT3D.select(z);
history.replaceState(null,"","#"+cur.s);cur.el.scrollIntoView({block:"nearest",inline:"nearest",behavior:still?"auto":"smooth"})}
function close(){if(!cur)return;cur.el.classList.remove("sel");if(window.PT3D&&PT3D.on)PT3D.select(0);cur=null;P.hidden=true;document.body.classList.remove("open");history.replaceState(null,"",location.pathname+location.search)}
function step(d){const v=D.filter(e=>e.ok),L=v.length?v:D;let i=L.indexOf(cur);i=i<0?0:(i+d+L.length)%L.length;open(L[i].z)}
$("x").onclick=close;$("prev").onclick=()=>step(-1);$("next").onclick=()=>step(1);
$("spin").onclick=e=>{spin=!spin;e.currentTarget.setAttribute("aria-pressed",spin)};
$("rand").onclick=()=>{const v=D.filter(e=>e.ok);if(v.length)open(v[Math.random()*v.length|0].z)};
addEventListener("keydown",e=>{const typing=/INPUT/.test(document.activeElement.tagName);
if(e.key==="Escape")close();else if(e.key==="/"&&!typing){e.preventDefault();$("q").focus()}else if(cur&&!typing&&(e.key==="ArrowLeft"||e.key==="ArrowRight")){e.preventDefault();step(e.key==="ArrowRight"?1:-1)}});

function size(){const d=Math.min(devicePixelRatio||1,2);cv.width=cv.clientWidth*d;cv.height=cv.clientHeight*d}
function go(){if(!raf){last=performance.now();raf=requestAnimationFrame(frame)}}
function frame(now){if(!cur||document.hidden){raf=0;return}const dt=still?0:Math.min(.05,(now-last)/1e3||0);last=now;t0+=dt;if(spin&&!drag)ry+=dt*.35;draw();raf=requestAnimationFrame(frame)}
document.addEventListener("visibilitychange",()=>{if(!document.hidden)go()});
addEventListener("resize",()=>{if(cur){size();go()}});
cv.onpointerdown=e=>{drag={x:e.clientX,y:e.clientY};cv.setPointerCapture(e.pointerId);cv.style.cursor="grabbing"};
cv.onpointermove=e=>{if(!drag)return;ry+=(e.clientX-drag.x)*.01;rx+=(e.clientY-drag.y)*.01;drag.x=e.clientX;drag.y=e.clientY;if(still)draw()};
cv.onpointerup=cv.onpointercancel=()=>{drag=null;cv.style.cursor="grab"};

function draw(){const W=cv.width,H=cv.height,cx=W/2,cy=H/2,u=Math.min(W,H)/2*.88,d=W/cv.clientWidth,n=cur.sh.length,col=COL[cur.c];
const cX=Math.cos(rx),sX=Math.sin(rx),cY=Math.cos(ry),sY=Math.sin(ry);
const proj=(x,y,z)=>{const y1=y*cX-z*sX,z1=y*sX+z*cX,x2=x*cY+z1*sY,z2=-x*sY+z1*cY,s=3/(3-z2*.6);return[cx+x2*u*s,cy+y1*u*s,s,z2]};
g.clearRect(0,0,W,H);g.globalAlpha=1;
const gr=g.createRadialGradient(cx,cy,0,cx,cy,u*.2);gr.addColorStop(0,"#fff");gr.addColorStop(.3,col);gr.addColorStop(1,col+"00");g.fillStyle=gr;g.beginPath();g.arc(cx,cy,u*.2,0,7);g.fill();
cur.sh.forEach((cnt,i)=>{const r=.2+.8*(i+1)/n,a=i*.62+.3,b=i*1.1,ca=Math.cos(a),sa=Math.sin(a),cb=Math.cos(b),sb=Math.sin(b);
const pt=th=>{const x=r*Math.cos(th),y=r*Math.sin(th)*ca;return proj(x*cb-y*sb,x*sb+y*cb,r*Math.sin(th)*sa)};
g.strokeStyle=col;g.globalAlpha=.3;g.lineWidth=d;g.beginPath();for(let k=0;k<=64;k++){const p=pt(k/64*6.2832);k?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1])}g.stroke();
const v=(i%2?-1:1)*.9/Math.pow(i+1,.6);
for(let j=0;j<cnt;j++){const p=pt(j/cnt*6.2832+t0*v+i),a2=.45+.55*(Math.max(-1,Math.min(1,p[3]))+1)/2;
g.globalAlpha=a2*.3;g.fillStyle=col;g.beginPath();g.arc(p[0],p[1],5.5*d*p[2],0,7);g.fill();
g.globalAlpha=a2;g.fillStyle="#fff";g.beginPath();g.arc(p[0],p[1],2.4*d*p[2],0,7);g.fill()}});g.globalAlpha=1}

apply();
const h=decodeURIComponent(location.hash.slice(1)),f=h&&D.find(e=>e.s===h||String(e.z)===h);if(f)open(f.z);
})();
