const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js"])))=>i.map(i=>d[i]);
import{a as r,c as I,s as at,b as O,d as H,f as x,e as k,g as F,h as K,i as P,j as c,w as ee,k as u,l as le,t as de,m as Et,n as oa,o as he,p as ne,q as ae,r as ce,u as Ie,v as Q,x as je,y as Ct,z as _t,A as dt,B as Rt,C as Nt,D as ia,E as la,F as se,G as S,H as C,I as $,J as ge,K as _e,L as ue,M as Be,N as be,O as Le,P as na,Q as da,R as Y,S as Ot,T as ca,U as pa,V as qe,W as fe,X as ma,Y as Mt,Z as M,_ as ct,$ as ua,a0 as ba,a1 as ga,a2 as fa,a3 as pt,a4 as pe,a5 as J,a6 as xa,a7 as ha,a8 as ka}from"./module-print-Bhh4Xm7N.js";import{f as G}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const va="modulepreload",wa=function(e){return"/"+e},It={},ya=function(t,a,o){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),i=n?.nonce||n?.getAttribute("nonce");s=Promise.allSettled(a.map(d=>{if(d=wa(d),d in It)return;It[d]=!0;const p=d.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const b=document.createElement("link");if(b.rel=p?"stylesheet":va,p||(b.as="script"),b.crossOrigin="",b.href=d,i&&b.setAttribute("nonce",i),document.head.appendChild(b),p)return new Promise((f,h)=>{b.addEventListener("load",f),b.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${d}`)))})}))}function l(n){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n}return s.then(n=>{for(const i of n||[])i.status==="rejected"&&l(i.reason);return t().catch(l)})},Sa={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const Ft=window.FIREBASE_CONFIG||Sa;G.apps.length||G.initializeApp(Ft);const w=G.firestore(),q=G.auth();typeof window<"u"&&(window.firebase=G,window.db=w,window.auth=q);try{w.settings({ignoreUndefinedProperties:!0,experimentalAutoDetectLongPolling:!0,merge:!0})}catch{}let $a=null;const mr=()=>{ya(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{$a=G.analytics()}catch{}}).catch(()=>{})},Pa="K2ijSERTT2dg27yYGTEgn6XHSnW2",Pe={emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#dc2626",600:"#b91c1c",700:"#991b1b",800:"#7f1d1d",900:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#ea580c",600:"#c2410c",700:"#9a3412",800:"#7c2d12",900:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#d97706",600:"#b45309",700:"#92400e",800:"#78350f",900:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#eab308",500:"#d97706",600:"#b45309",700:"#854d0e",800:"#713f12",900:"#3f1d0b"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#65a30d",600:"#4d7c0f",700:"#3f6212",800:"#365314",900:"#1a2e05"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#16a34a",600:"#15803d",700:"#166534",800:"#14532d",900:"#052e16"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#475569",600:"#334155",700:"#1e293b",800:"#0f172a",900:"#020617"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#57534e",600:"#44403c",700:"#292524",800:"#1c1917",900:"#0c0a09"}},Aa=e=>{let t=parseInt(e.replace("#",""),16);return(t>>16&255)+","+(t>>8&255)+","+(t&255)},jt=(e,t)=>{let a=parseInt(e.slice(1,3),16),o=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return a=Math.max(0,Math.min(255,a+t)),o=Math.max(0,Math.min(255,o+t)),s=Math.max(0,Math.min(255,s+t)),"#"+[a,o,s].map(l=>l.toString(16).padStart(2,"0")).join("")},Ta=e=>{if(!e)return;try{document.querySelectorAll('meta[name="theme-color"]').forEach(d=>d.remove())}catch{}const t=document.createElement("meta");t.setAttribute("name","theme-color"),t.setAttribute("content",e),document.head.appendChild(t);try{document.querySelectorAll('meta[name="msapplication-navbutton-color"], meta[name="msapplication-TileColor"]').forEach(d=>d.remove())}catch{}const a=document.createElement("meta");a.setAttribute("name","msapplication-navbutton-color"),a.setAttribute("content",e),document.head.appendChild(a);const o=document.createElement("meta");o.setAttribute("name","msapplication-TileColor"),o.setAttribute("content",e),document.head.appendChild(o);let s=document.querySelector('meta[name="apple-mobile-web-app-capable"]');s||(s=document.createElement("meta"),s.setAttribute("name","apple-mobile-web-app-capable"),document.head.appendChild(s)),s.setAttribute("content","yes");let l=document.querySelector('meta[name="mobile-web-app-capable"]');l||(l=document.createElement("meta"),l.setAttribute("name","mobile-web-app-capable"),document.head.appendChild(l)),l.setAttribute("content","yes");let n=document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');n||(n=document.createElement("meta"),n.setAttribute("name","apple-mobile-web-app-status-bar-style"),document.head.appendChild(n)),n.setAttribute("content","default"),typeof window.updatePwaManifest=="function"&&window.updatePwaManifest(e)},Te=(e,t)=>{const a=e||localStorage.getItem("freshmart_ui_theme")||"emerald",o=Pe[a]||Pe.emerald;e&&localStorage.setItem("freshmart_ui_theme",a);const s=t||localStorage.getItem("freshmart_theme_color")||o[500];t&&localStorage.setItem("freshmart_theme_color",s);const l=Aa(s),n=jt(s,-30),i=jt(s,150);return document.documentElement.style.setProperty("--color-primary",s),document.documentElement.style.setProperty("--color-primary-dark",n),document.documentElement.style.setProperty("--color-primary-light",i),document.documentElement.style.setProperty("--color-primary-rgb",l),Ta(s),o},ur=()=>{const e=localStorage.getItem("freshmart_theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;(e==="dark"||!e&&t)&&document.documentElement.classList.add("dark")},br=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")},gr=()=>{const e=document.documentElement.classList.contains("dark"),t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")},Ce=(e="minimalist",t="")=>{const a=e||localStorage.getItem("freshmart_bg_style")||"minimalist",o=t??(localStorage.getItem("freshmart_bg_custom_url")||"");e&&localStorage.setItem("freshmart_bg_style",a),t!=null&&localStorage.setItem("freshmart_bg_custom_url",o);const l=(p=>{if(!p||typeof p!="string")return"";const m=p.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);return m?`https://lh3.googleusercontent.com/d/${m[1]}`:p.trim()})(o);document.documentElement.setAttribute("data-bg-style",a),document.body?.setAttribute("data-bg-style",a);const n=document.getElementById("app-container");n&&(n.setAttribute("data-bg-style",a),l?n.setAttribute("data-has-custom-bg","true"):n.removeAttribute("data-has-custom-bg"));const i=document.getElementById("dynamic-bg-container");if(!i)return;if(i.innerHTML="",i.className="pointer-events-none fixed inset-0 z-0 overflow-hidden",l){const p=document.createElement("div");p.className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-35 dark:opacity-25 pointer-events-none transition-all duration-500",p.style.backgroundImage=`url('${l}')`,i.appendChild(p);const m=document.createElement("div");m.className="absolute inset-0 z-0 bg-slate-50/70 dark:bg-[#0b1120]/80 pointer-events-none",i.appendChild(m)}let d="";if(a==="hero_arch"?d=`
            <!-- Hero Arch Glow & Vector Curve -->
            <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-[140%] max-w-[1500px] h-80 rounded-b-[100%] bg-gradient-to-b from-[rgba(var(--color-primary-rgb),0.18)] to-transparent pointer-events-none blur-sm"></div>
            <div class="absolute top-28 left-1/2 -translate-x-1/2 w-[110%] max-w-[1300px] h-52 rounded-b-[100%] border-b-2 border-[rgba(var(--color-primary-rgb),0.2)] pointer-events-none"></div>
        `:a==="geometric_3d"?d=`
            <!-- Geometris 3D Matrix Grid & Isometric Vector -->
            <div class="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20" style="background-image: linear-gradient(30deg, rgba(var(--color-primary-rgb),0.15) 12%, transparent 12.5%, transparent 87%, rgba(var(--color-primary-rgb),0.15) 87.5%, rgba(var(--color-primary-rgb),0.15)), linear-gradient(150deg, rgba(var(--color-primary-rgb),0.15) 12%, transparent 12.5%, transparent 87%, rgba(var(--color-primary-rgb),0.15) 87.5%, rgba(var(--color-primary-rgb),0.15)), linear-gradient(30deg, rgba(var(--color-primary-rgb),0.15) 12%, transparent 12.5%, transparent 87%, rgba(var(--color-primary-rgb),0.15) 87.5%, rgba(var(--color-primary-rgb),0.15)), linear-gradient(150deg, rgba(var(--color-primary-rgb),0.15) 12%, transparent 12.5%, transparent 87%, rgba(var(--color-primary-rgb),0.15) 87.5%, rgba(var(--color-primary-rgb),0.15)), linear-gradient(60deg, rgba(var(--color-primary-rgb),0.2) 25%, transparent 25.5%, transparent 75%, rgba(var(--color-primary-rgb),0.2) 75%, rgba(var(--color-primary-rgb),0.2)), linear-gradient(60deg, rgba(var(--color-primary-rgb),0.2) 25%, transparent 25.5%, transparent 75%, rgba(var(--color-primary-rgb),0.2) 75%, rgba(var(--color-primary-rgb),0.2)); background-size: 40px 70px; background-position: 0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px;"></div>
            <div class="absolute -top-24 -left-24 w-96 h-96 bg-[rgba(var(--color-primary-rgb),0.15)] rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute top-1/3 -right-24 w-96 h-96 bg-[rgba(var(--color-primary-rgb),0.1)] rounded-full blur-3xl pointer-events-none"></div>
        `:a==="diagonal_skew"?d=`
            <!-- Diagonal Skew Linear Grid & Glow -->
            <div class="absolute inset-0 pointer-events-none opacity-25 dark:opacity-20" style="background: repeating-linear-gradient(45deg, rgba(var(--color-primary-rgb),0.12), rgba(var(--color-primary-rgb),0.12) 2px, transparent 2px, transparent 24px);"></div>
            <div class="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[rgba(var(--color-primary-rgb),0.2)] to-transparent rounded-full blur-3xl pointer-events-none"></div>
        `:a==="dual_tone"?d=`
            <!-- Dual-Tone Split Atmosphere -->
            <div class="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[rgba(var(--color-primary-rgb),0.16)] via-[rgba(var(--color-primary-rgb),0.05)] to-transparent pointer-events-none"></div>
            <div class="absolute top-0 right-0 w-2/3 h-80 bg-[rgba(var(--color-primary-rgb),0.08)] -skew-y-6 pointer-events-none blur-2xl"></div>
        `:d="",d){const p=document.createElement("div");p.className="absolute inset-0 z-0 pointer-events-none",p.innerHTML=d,i.appendChild(p)}},Re=()=>{const e=r.store.useStock===!0||r.store.useStock==="true",t=I.filter(a=>{const o=r.products.find(s=>s&&s.id!=null&&String(s.id)===String(a.id));if(!o||o.isActive==="false"||o.isActive===!1)return!1;if(a.variantName){const s=(o.variants||[]).find(l=>l.name===a.variantName);if(!s||s.isActive===!1||s.isActive==="false"||e&&(parseFloat(s.stock)||0)<=0)return!1}else if(e&&(parseFloat(o.stock)||0)<=0)return!1;return!0});at(t),O("freshmart_cart",JSON.stringify(I))},X=()=>{O("freshmart_cart",JSON.stringify(I));const e=typeof window.getEffP=="function"?window.getEffP:n=>n.price||0,t=parseFloat(I.reduce((n,i)=>n+(parseFloat(i.qty)||0),0).toFixed(2)),a=I.reduce((n,i)=>n+e(i)*(parseFloat(i.qty)||0),0);H("cart-badge",t.toString()),H("cart-total-preview",x(a));const o=k("cart-badge");o&&o.classList.toggle("scale-0",t<=0);const s=k("bottom-nav-cart-badge");s&&(s.textContent=t>99?"99+":t.toString(),s.classList.toggle("scale-0",t<=0)),document.querySelectorAll(".desktop-cart-badge").forEach(n=>{n.textContent=t.toString(),n.classList.toggle("hidden",t<=0)});const l=k("floating-cart-container");l&&(t>0?(l.classList.remove("scale-0","pointer-events-none"),l.classList.add("scale-100","pointer-events-auto")):(l.classList.remove("scale-100","pointer-events-auto"),l.classList.add("scale-0","pointer-events-none")))},ke=()=>{const e=k("cart-free-shipping-bar"),t=k("cart-loyalty-points-bar");if(!I.length){F("cart-empty-state"),K("cart-bottom-bar"),K("btn-clear-cart"),F("spacer-cart"),P("cart-items-container",""),e&&(e.classList.add("hidden"),e.innerHTML=""),t&&(t.classList.add("hidden"),t.innerHTML="");return}K("cart-empty-state"),F("cart-bottom-bar"),F("btn-clear-cart"),K("spacer-cart");const a=typeof window.getEffP=="function"?window.getEffP:n=>n.price||0;let o=0;P("cart-items-container",I.map((n,i)=>{let d=parseFloat(n.qty)||0,p=a(n),m=p<n.price;o+=p*d;let b=n.colorCode?`<span class="w-3.5 h-3.5 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 shrink-0" style="background-color: ${c(n.colorCode)};"></span>`:"";return`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex gap-4 relative overflow-hidden group min-w-0 hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all duration-300">
            
            <div class="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white border border-slate-100 dark:border-slate-700/50 p-2 flex items-center justify-center overflow-hidden">
                <img loading="lazy" src="${c(n.img)}" alt="${c(n.name)}" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'">
            </div>
            
            <div class="flex-1 flex flex-col min-w-0 relative">
                <button onclick="rmCart(${i})" class="absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/50 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 transition-all active:scale-90 border border-slate-100 dark:border-slate-600 shadow-sm z-10"><i class="fa-solid fa-xmark text-sm"></i></button>
                
                <h4 class="text-[13px] sm:text-sm font-bold text-slate-800 dark:text-white leading-snug line-clamp-2 mb-1.5 pr-10 uppercase tracking-wide">${c(n.name)}</h4>
                
                <div class="flex flex-wrap items-center gap-1.5 mb-2.5">
                    ${m?'<span class="bg-amber-500 text-white px-2.5 py-0.5 rounded-full text-[9px] font-bold shadow-sm flex items-center gap-1 uppercase tracking-wide"><i class="fa-solid fa-layer-group"></i> Grosir</span>':""}
                    ${b}
                    ${n.variantName?`<span class="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[9px] font-bold border border-slate-200 dark:border-slate-600 uppercase tracking-wide">${c(n.variantName)}</span>`:""}
                    ${n.poTime?`<span class="amber-badge px-2 py-0.5 rounded-full text-[9px] font-bold flex items-center uppercase tracking-wide"><i class="fa-solid fa-clock mr-1"></i> PO ${c(n.poTime)}</span>`:""}
                </div>
                
                <div class="flex justify-between items-end mt-auto pt-1">
                    <div>
                        ${m?`<p class="text-[10px] line-through text-slate-400 font-bold mb-0.5">${x(n.price)}</p>`:""}
                        <div class="flex items-baseline gap-1">
                            <p class="text-[var(--color-primary)] font-bold text-base sm:text-lg leading-none tracking-tight">${x(p)}</p>
                            <p class="text-[9px] text-slate-400 font-bold uppercase tracking-widest">/${c(n.unit||"pcs")}</p>
                        </div>
                    </div>
                    
                    <div class="flex bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shrink-0 shadow-sm h-9">
                        <button onclick="updCQty(${i}, -1)" class="w-9 h-full flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-700 font-bold transition-colors active:bg-slate-100"><i class="fa-solid fa-minus text-xs"></i></button>
                        <input type="number" step="0.01" class="w-10 h-full text-center text-xs font-bold bg-transparent text-slate-800 dark:text-white focus:outline-none border-x border-slate-200 dark:border-slate-700" value="${d}" onchange="setCQty(${i}, this.value)">
                        <button onclick="updCQty(${i}, 1)" class="w-9 h-full flex items-center justify-center text-slate-500 hover:text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] dark:text-slate-400 dark:hover:text-[var(--color-primary)] dark:hover:bg-[rgba(var(--color-primary-rgb),0.12)] font-bold transition-colors active:bg-slate-100"><i class="fa-solid fa-plus text-xs"></i></button>
                    </div>
                </div>
            </div>
        </div>`}).join("")),H("cart-subtotal",x(o));const s=r.store.freeShippingMinSpendEnabled===!0||r.store.freeShippingMinSpendEnabled==="true",l=parseFloat(r.store.freeShippingMinSpendAmount)||0;if(e)if(s&&l>0){e.classList.remove("hidden");const n=Math.min(100,Math.round(o/l*100)),i=Math.max(0,l-o),d=o>=l;e.innerHTML=`
            <div class="p-4 rounded-2xl border transition-all duration-300 ${d?"bg-[var(--color-primary)] text-white border-[var(--color-primary)]/40 shadow-md shadow-[rgba(var(--color-primary-rgb),0.2)]":"bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm text-slate-800 dark:text-slate-100"}">
                <div class="flex items-center justify-between gap-3 mb-2.5">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <span class="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0 ${d?"bg-white/20 text-white":"bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)]"}">
                            <i class="fa-solid ${d?"fa-circle-check text-base":"fa-truck-fast"}"></i>
                        </span>
                        <div class="min-w-0">
                            <p class="text-xs font-bold leading-tight ${d?"text-white":"text-slate-800 dark:text-slate-100"}">
                                ${d?'Hore! Anda berhak mendapatkan <span class="underline decoration-wavy decoration-white/60 font-extrabold">Gratis Ongkir Otomatis</span>':`Belanja <span class="text-[var(--color-primary)] font-extrabold">${x(i)}</span> lagi untuk <b>Gratis Ongkir</b>!`}
                            </p>
                            <p class="text-[10px] ${d?"text-white/85":"text-slate-400 dark:text-slate-500"} mt-0.5">
                                ${d?"Ongkos kirim otomatis dipotong Rp 0 saat checkout.":`Min. belanja ${x(l)} untuk pengiriman ke alamat.`}
                            </p>
                        </div>
                    </div>
                    <span class="text-[11px] font-black shrink-0 px-2.5 py-1 rounded-full ${d?"bg-white text-[var(--color-primary)] shadow-sm":"bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)]"}">
                        ${n}%
                    </span>
                </div>
                <div class="w-full h-2 rounded-full overflow-hidden ${d?"bg-black/20":"bg-slate-100 dark:bg-slate-700/60"}">
                    <div class="h-full rounded-full transition-all duration-500 ${d?"bg-white shadow-sm":"bg-[var(--color-primary)]"}" style="width: ${n}%"></div>
                </div>
            </div>`}else e.classList.add("hidden"),e.innerHTML="";if(t){const n=typeof window.calculateCartPoints=="function"?window.calculateCartPoints(I,r.store):{totalPoints:0,directPoints:0,spendPoints:0,nonPointSpend:0,threshold:1e5,pointsPerThreshold:1,isSpendPointsActive:!1,remainingToNextPoint:0,progressPercent:0},{totalPoints:i,directPoints:d,spendPoints:p,nonPointSpend:m,threshold:b,pointsPerThreshold:f,isSpendPointsActive:h,remainingToNextPoint:g,progressPercent:v}=n;if(i>0||h&&m>0){t.classList.remove("hidden");let A="";d>0&&p>0?A=`+${i} Poin didapat (${d} dari produk, ${p} dari belanja)`:d>0?A=`+${i} Poin didapat dari produk pilihan`:p>0?A=`+${i} Poin didapat dari kelipatan belanja!`:A="Kumpulkan poin belanja member";let T="";h&&g>0&&g<b?T=`Belanja <span class="text-amber-600 dark:text-amber-400 font-extrabold">${x(g)}</span> lagi untuk dapat +${f} poin berikutnya!`:i>0?T="Poin otomatis ditambahkan ke saldo member Anda setelah pesanan dikonfirmasi.":T=`Belanja minimal ${x(b)} untuk produk tanpa poin agar mendapatkan +${f} poin.`,t.innerHTML=`
            <div class="p-4 rounded-2xl border transition-all duration-300 ${i>0?"bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border-amber-200 dark:border-amber-700/60 dark:bg-amber-950/20":"bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm"}">
                <div class="flex items-center justify-between gap-3 mb-2">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <span class="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0 bg-amber-500 text-white shadow-sm shadow-amber-500/20">
                            <i class="fa-solid fa-coins"></i>
                        </span>
                        <div class="min-w-0">
                            <p class="text-xs font-bold leading-tight text-slate-800 dark:text-slate-100">
                                ${A}
                            </p>
                            <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                                ${T}
                            </p>
                        </div>
                    </div>
                    <span class="text-[11px] font-black shrink-0 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                        <i class="fa-solid fa-star text-[10px] mr-1"></i>${i} Poin
                    </span>
                </div>
                ${h&&g>0&&g<b?`
                <div class="w-full h-1.5 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700/60 mt-2">
                    <div class="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-amber-400 to-amber-500" style="width: ${v}%"></div>
                </div>
                `:""}
            </div>`}else t.classList.add("hidden"),t.innerHTML=""}},Ca=(e,t)=>{let a=parseFloat(t);if(isNaN(a)||a<=0)I.splice(e,1);else{if(r.store.useStock===!0||r.store.useStock==="true"){const s=I[e],l=r.products.find(n=>n&&n.id!=null&&String(n.id)===String(s.id));if(l){const n=s.variantName?parseFloat(((l.variants||[]).find(i=>i.name===s.variantName)||{}).stock)||0:parseFloat(l.stock)||0;a>n&&(a=n,typeof window.showToast=="function"&&window.showToast(`Maks stok: ${n}`))}}I[e].qty=parseFloat(a.toFixed(2))}ke(),X()},Ma=(e,t)=>{let a=parseFloat((parseFloat(I[e].qty)+t).toFixed(2));if(a<=0)I.splice(e,1);else{if((r.store.useStock===!0||r.store.useStock==="true")&&t>0){const s=I[e],l=r.products.find(n=>n&&n.id!=null&&String(n.id)===String(s.id));if(l){const n=s.variantName?parseFloat(((l.variants||[]).find(i=>i.name===s.variantName)||{}).stock)||0:parseFloat(l.stock)||0;a>n&&(a=n,typeof window.showToast=="function"&&window.showToast(`Maks stok: ${n}`))}}I[e].qty=a}ke(),X()},Ia=e=>{I.splice(e,1),ke(),X()},ja=()=>{typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Semua barang akan dihapus. Lanjutkan?",()=>{at([]),X(),ke(),typeof window.showToast=="function"&&window.showToast("Dibersihkan")}):(at([]),X(),ke())},Ba=()=>{if(window.isAdm){typeof window.showConfirm=="function"&&window.showConfirm("Akses Ditolak","Anda sedang login sebagai Seller. Silakan logout terlebih dahulu untuk membuat pesanan sebagai pelanggan.",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Logout Sekarang",!1);return}I.length&&typeof window.changeView=="function"&&window.changeView("view-checkout")};window.sanitizeCart=Re;window.updCart=X;window.renderCart=ke;window.setCQty=Ca;window.updCQty=Ma;window.rmCart=Ia;window.clearCart=ja;window.validateCartToCheckout=Ba;const Ne=()=>{const e=k("wishlist-badge");e&&(e.innerText=ee.length,e.classList.toggle("scale-0",!ee.length))},La=e=>{ee.splice(e,1),O("freshmart_wishlist",JSON.stringify(ee)),Ne(),mt()},Da=e=>{const t=ee[e],a=r.products?.find(n=>n.id===t.id);if(!a||a.isActive==="false"||a.isActive===!1)return u(`${t.name} sudah tidak tersedia.`);const o=t.variantName?(a.variants||[]).find(n=>n.name===t.variantName):null;if(r.store?.useStock===!0||r.store?.useStock==="true"){if(t.variantName&&(!o||o.isActive===!1||o.isActive==="false"))return u(`Varian ${t.variantName} sudah tidak tersedia.`);const n=o?parseFloat(o.stock)||0:parseFloat(a.stock)||0,i=I.find(p=>p.id===t.id&&p.variantName===t.variantName),d=i&&parseFloat(i.qty)||0;if(n<=0||d>=n)return u(`Stok ${t.name} tidak mencukupi!`)}const l=I.find(n=>n.id===t.id&&n.variantName===t.variantName);if(l)l.qty=parseFloat((l.qty+1).toFixed(2));else{const n=o&&parseFloat(o.poin)>0?parseFloat(o.poin):parseFloat(a.poin)||0;I.push({id:a.id,name:a.name,variantName:t.variantName||"",price:o?o.price:a.price,img:o?.img||a.img,qty:1,unit:a.unit||"pcs",poTime:a.poTime||"",colorCode:o?.colorCode||"",poin:n})}X(),u("Ke Keranjang!"),typeof window.curViewName<"u"&&window.curViewName==="view-cart"&&ke()},Ea=()=>{le("Hapus Favorit","Yakin ingin menghapus semua?",()=>{ee.length=0,O("freshmart_wishlist",JSON.stringify(ee)),Ne(),mt(),u("Dibersihkan")})},mt=()=>{if(!ee.length){F("wishlist-empty-state"),K("btn-clear-wishlist"),F("spacer-wishlist"),P("wishlist-items-container","");return}K("wishlist-empty-state"),F("btn-clear-wishlist"),K("spacer-wishlist"),P("wishlist-items-container",ee.map((e,t)=>{let a=e.colorCode?`<span class="w-3.5 h-3.5 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 shrink-0" style="background-color: ${c(e.colorCode)};"></span>`:"";return`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex gap-4 relative overflow-hidden group min-w-0 hover:shadow-md hover:-translate-y-1 hover:border-rose-300 dark:hover:border-rose-600 transition-all duration-300">
            <div class="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white border border-slate-100 dark:border-slate-700/50 p-2 flex items-center justify-center overflow-hidden">
                <img loading="lazy" src="${c(e.img)}" alt="${c(e.name)}" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'">
            </div>
            
            <div class="flex-1 flex flex-col min-w-0 relative">
                <button onclick="rmWish(${t})" class="absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/50 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 transition-all active:scale-90 border border-slate-100 dark:border-slate-600 shadow-sm z-10"><i class="fa-solid fa-xmark text-sm"></i></button>
                
                <h4 class="text-[13px] sm:text-sm font-bold text-slate-800 dark:text-white leading-snug line-clamp-2 mb-1.5 pr-10 uppercase tracking-wide">${c(e.name)}</h4>
                
                ${e.variantName?`<div class="mb-2 flex items-center gap-1.5">${a}<span class="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full text-[9px] font-bold border border-slate-200 dark:border-slate-600 uppercase tracking-wide">${c(e.variantName)}</span></div>`:""}
                
                <div class="flex justify-between items-end mt-auto pt-1">
                    <p class="text-[var(--color-primary)] font-bold text-base sm:text-lg leading-none tracking-tight">${x(e.price)}</p>
                    <button onclick="moveWish(${t})" class="h-9 px-5 rounded-xl bg-[var(--color-primary)] hover:opacity-90 text-white border border-[var(--color-primary)] text-xs font-bold transition-colors active:scale-95 shadow-glow flex items-center gap-1.5"><i class="fa-solid fa-cart-plus"></i> Beli</button>
                </div>
            </div>
        </div>`}).join(""))};window.updWish=Ne;window.rmWish=La;window.moveWish=Da;window.clearWishlist=Ea;window.renderWish=mt;let Bt=null;const W=()=>{const e=ae!=="Semua Produk"||ce!=="Semua Merek"||Ie!==""||Q!=="Semua Jenis";de("dynamic-banners-container","hidden",e),de("reward-catalog-container","hidden",e),de("dynamic-vouchers-container","hidden",e),de("dynamic-categories-container","hidden",e),de("dynamic-brands-container","hidden",e);const t=r.store.showCategories!==!1&&r.store.showCategories!=="false",a=r.store.showBrands!==!1&&r.store.showBrands!=="false";de("sec-categories","hidden",e||!t),de("sec-brands","hidden",e||!a);let o=k("dynamic-active-filter");if(!o){let i=k("product-container");i&&(i.insertAdjacentHTML("beforebegin",'<div id="dynamic-active-filter" class="transition-all w-full"></div>'),o=k("dynamic-active-filter"))}if(o)if(e){let i="Menampilkan",d="",p="fa-filter",m="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30";Ie!==""?(i="Hasil Pencarian",d=`"${Ie}"`,p="fa-magnifying-glass",m="text-rose-500 bg-rose-50 dark:bg-rose-900/30"):ae!=="Semua Produk"?(i="Kategori Pilihan",d=ae+(Q!=="Semua Jenis"?` • ${Q}`:""),p="fa-layer-group",m="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30"):ce!=="Semua Merek"?(i="Merek Pilihan",d=ce,p="fa-tag",m="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30"):Q!=="Semua Jenis"&&(i="Sub-Kategori",d=Q,p="fa-shapes",m="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30");let b="";if(ae!=="Semua Produk"){const f=r.products.filter(v=>v.isActive!==!1&&v.isActive!=="false"&&v.category===ae),h={};f.forEach(v=>{const A=(v.subCategory||"").trim();A&&(h[A]=(h[A]||0)+1)});const g=Object.keys(h).sort().map(v=>({name:v,count:h[v]}));g.length>0&&(b=`
                    <div class="pt-2 border-t border-slate-100 dark:border-slate-700/60">
                        <div class="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1.5 flex items-center gap-1.5">
                            <i class="fa-solid fa-shapes text-[var(--color-primary)]"></i>
                            <span>Pilih Jenis / Sub-Kategori:</span>
                        </div>
                        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar -mx-1 px-1">
                            <button onclick="filterSubCategory('Semua Jenis')" class="shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${Q==="Semua Jenis"?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}">
                                Semua Jenis
                            </button>
                            ${g.map(v=>`
                                <button onclick="filterSubCategory('${c(v.name).replace(/'/g,"\\'")}')" class="shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${Q===v.name?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}">
                                    <span>${c(v.name)}</span>
                                    <span class="text-[10px] px-1.5 py-0.2 rounded-full ${Q===v.name?"bg-white/20 text-white":"bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">${v.count}</span>
                                </button>
                            `).join("")}
                        </div>
                    </div>`)}o.innerHTML=`
            <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 flex flex-col gap-2.5 mb-5 shadow-sm">
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-3 overflow-hidden">
                        <div class="w-10 h-10 rounded-xl ${m} flex items-center justify-center shrink-0"><i class="fa-solid ${p} text-lg"></i></div>
                        <div class="flex flex-col min-w-0 pr-2">
                            <span class="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest">${i}</span>
                            <span class="text-sm font-bold text-slate-800 dark:text-white truncate leading-tight mt-0.5">${c(d)}</span>
                        </div>
                    </div>
                    <button onclick="resetSemuaFilter()" class="shrink-0 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 w-10 h-10 flex items-center justify-center rounded-xl font-bold shadow-sm hover:bg-rose-50 hover:text-rose-500 hover:border-rose-200 transition-all active:scale-95 group"><i class="fa-solid fa-xmark text-lg group-hover:rotate-90 transition-transform duration-300"></i></button>
                </div>
                ${b}
            </div>`,o.classList.remove("hidden")}else o.innerHTML="",o.classList.add("hidden");let s=r.products.filter(i=>{if(i.isActive===!1||i.isActive==="false"||ae!=="Semua Produk"&&i.category!==ae||Q!=="Semua Jenis"&&i.subCategory!==Q||ce!=="Semua Merek"&&i.brand!==ce)return!1;if(!Ie)return!0;let d=Ie.toLowerCase();return(i.name||"").toLowerCase().includes(d)||(i.sku||"").toLowerCase().includes(d)||(i.category||"").toLowerCase().includes(d)||(i.subCategory||"").toLowerCase().includes(d)||(i.brand||"").toLowerCase().includes(d)||i.variants&&i.variants.some(p=>(p.name||"").toLowerCase().includes(d)||(p.sku||"").toLowerCase().includes(d))}).sort((i,d)=>je==="cheapest"?(i.price||0)-(d.price||0):je==="expensive"?(d.price||0)-(i.price||0):je==="az"?(i.name||"").localeCompare(i.name||""):je==="za"?(d.name||"").localeCompare(i.name||""):je==="oldest"?(i.id||0)-(d.id||0):(d.id||0)-(i.id||0));const l=k("product-container");if(!l)return;if(l.className=Ct==="grid"?"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8":"flex flex-col gap-3 sm:gap-4",!s.length){l.innerHTML='<div class="col-span-full text-center py-16 sm:py-24 text-slate-500 dark:text-slate-400 font-bold bg-slate-50 dark:bg-slate-800/50 rounded-[1.5rem] border border-slate-200 border-dashed dark:border-slate-700 text-sm sm:text-base flex flex-col items-center justify-center"><div class="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm mb-4"><i class="fa-solid fa-box-open text-3xl sm:text-4xl text-slate-300 dark:text-slate-600"></i></div>Maaf, produk tidak ditemukan.<br><span class="text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 font-normal">Coba gunakan kata kunci pencarian yang berbeda atau hapus filter.</span></div>',K("load-more-container");return}const n=s.slice(0,Et*oa);l.innerHTML=n.map(i=>{let d="";const p=r.store.useStock===!0||r.store.useStock==="true";let m="";if(p){const j=i.variants&&i.variants.length?i.variants.filter(_=>_.isActive!==!1&&_.isActive!=="false").reduce((_,Ze)=>_+(parseFloat(Ze.stock)||0),0):parseFloat(i.stock)||0;j<=0?d='<div class="absolute inset-0 bg-white/75 dark:bg-slate-900/75 z-20 flex items-center justify-center rounded-2xl"><span class="bg-slate-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-lg uppercase tracking-widest"><i class="fa-solid fa-ban mr-1"></i> HABIS</span></div>':j<=5?m=`<span class="absolute top-2 left-2 z-10 bg-rose-500 text-white text-[8px] font-bold px-2 py-1 rounded-xl shadow uppercase tracking-wider"><i class="fa-solid fa-fire mr-0.5"></i> SISA ${j}</span>`:m=`<span class="absolute top-2 left-2 z-10 bg-slate-800/90 text-white text-[8px] font-bold px-2 py-1 rounded-xl shadow uppercase tracking-wider"><i class="fa-solid fa-box mr-0.5"></i> Stok ${j}</span>`}const b=!d,f=b?"cursor-pointer hover:shadow-md hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40":"cursor-not-allowed",h=b?"cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40":"cursor-not-allowed";let g="",v="";i.priceNormal&&i.priceNormal>i.price&&(g=`<span class="bg-rose-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-tags"></i> -${Math.round((i.priceNormal-i.price)/i.priceNormal*100)}%</span>`,v=`<p class="text-[10px] text-slate-600 dark:text-slate-400 line-through mb-0.5 font-bold">${x(i.priceNormal)}</p>`);let A=i.poTime?`<span class="bg-amber-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${c(i.poTime)}</span>`:"",T="";if(i.variants&&i.variants.length){const j=i.variants.map(_=>parseFloat(_.poin)||0).filter(_=>_>0);if(j.length){const _=[...new Set(j)];T=_.length===1?`<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> +${_[0]} Poin</span>`:'<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> Dapat Poin</span>'}}else parseFloat(i.poin)>0&&(T=`<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> +${parseFloat(i.poin)} Poin</span>`);const y=i.variants&&i.variants.length?i.variants.reduce((j,_)=>j+(parseFloat(_.totalSold)||0),0):parseFloat(i.totalSold)||0,V=y>0?`<span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-fire-flame-curved text-orange-400"></i> ${y} Terjual</span>`:"";let D=`<div class="mb-2.5 flex flex-wrap gap-1.5 items-center overflow-hidden shrink-0">
            ${g}
            ${A}
            ${T}
            ${V}
            ${i.subCategory?`<span class="bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-shapes"></i> ${c(i.subCategory)}</span>`:""}
            ${i.tag?`<span class="bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] dark:bg-[var(--color-primary-dark)]/50 dark:text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-hashtag"></i> ${c(i.tag)}</span>`:""}
            <span class="accent-badge px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-circle-check"></i> Official</span>
            ${i.brand?`<span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-tag"></i> ${c(i.brand)}</span>`:""}
            ${i.wholesale?.length&&!i.variants?.length?'<span class="amber-badge px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-layer-group"></i> Grosir</span>':""}
        </div>`,E=`<span class="text-[9px] text-slate-600 dark:text-slate-400 font-bold ml-0.5 mb-0.5 uppercase tracking-wide">/${c(i.unit||"PCS")}</span>`;return Ct==="grid"?`
            <a href="?p=${i.id}" class="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-[1.5rem] shadow-soft ${f} transition-all duration-300 flex flex-col group relative overflow-hidden text-left" onclick="event.preventDefault(); openProductModal('${c(i.id)}')">
                ${d}
                <div class="relative aspect-square w-full bg-white flex items-center justify-center shrink-0 border-b border-slate-100 dark:border-slate-700/50">
                      ${m}
                      <img loading="lazy" decoding="async" src="${c(he(i.img,"w300-rw"))}" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${d?"grayscale opacity-50":""}">
                </div>
                <div class="flex-1 flex flex-col p-3 sm:p-4 min-w-0 bg-white dark:bg-slate-800 relative z-10">
                    ${D}
                    <h4 class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug mb-2 group-hover:text-[var(--color-primary)] transition-colors uppercase">${c(i.name)}</h4>
                    <div class="flex items-end justify-between mt-auto pt-1">
                        <div>
                            ${i.variants&&i.variants.length>0?"":v}
                            <p class="text-[var(--color-primary)] font-bold text-sm sm:text-[15px] leading-none tracking-tight">
                                ${i.variants&&i.variants.length>0?'<span class="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">PILIH VARIAN</span>':x(i.price)}
                            </p>
                            ${i.variants&&i.variants.length>0?"":E}
                        </div>
                        <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110 active:scale-90 shadow-sm">
                            <i class="fa-solid fa-plus text-xs sm:text-sm"></i>
                        </div>
                    </div>
                </div>
            </a>`:`
            <a href="?p=${i.id}" class="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-[1.5rem] shadow-soft ${h} transition-all duration-300 flex items-stretch p-2.5 sm:p-3 gap-3 sm:gap-4 group relative overflow-hidden text-left" onclick="event.preventDefault(); openProductModal('${c(i.id)}')">
                ${d}
                <div class="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center p-2 border border-slate-100 dark:border-slate-700/50 overflow-hidden">
                    ${m}
                    <img loading="lazy" decoding="async" src="${c(he(i.img,"w300-rw"))}" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'" class="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 ${d?"grayscale opacity-50":""}">
                </div>
                <div class="flex-1 min-w-0 py-1 flex flex-col justify-center h-full relative z-10 pr-2">
                    ${D}
                    <h4 class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug mb-1.5 group-hover:text-[var(--color-primary)] transition-colors uppercase">${c(i.name)}</h4>
                    <div class="flex items-end justify-between mt-auto pt-1">
                        <div>
                            ${i.variants&&i.variants.length>0?"":v}
                            <p class="text-[var(--color-primary)] font-bold text-sm sm:text-[15px] leading-none tracking-tight">
                                ${i.variants&&i.variants.length>0?'<span class="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">PILIH VARIAN</span>':x(i.price)}
                            </p>
                            ${i.variants&&i.variants.length>0?"":E}
                        </div>
                        <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110 active:scale-90 shadow-sm mr-1">
                            <i class="fa-solid fa-plus text-xs sm:text-sm"></i>
                        </div>
                    </div>
                </div>
            </a>`}).join(""),n.length<s.length?F("load-more-container"):K("load-more-container")},_a=e=>{_t(ae===e&&e!=="Semua Produk"?"Semua Produk":e),dt("Semua Jenis"),ne(1),typeof window.rDyn=="function"&&window.rDyn();const t=document.querySelector("#view-catalog .scroll-content");t&&setTimeout(()=>t.scrollTo({top:0,behavior:"smooth"}),10)},Ra=e=>{dt(Q===e?"Semua Jenis":e),ne(1),W();const t=document.querySelector("#view-catalog .scroll-content");t&&setTimeout(()=>t.scrollTo({top:0,behavior:"smooth"}),10)},Na=e=>{Rt(ce===e&&e!=="Semua Merek"?"Semua Merek":e),ne(1),typeof window.rDyn=="function"&&window.rDyn();const t=document.querySelector("#view-catalog .scroll-content");t&&setTimeout(()=>t.scrollTo({top:0,behavior:"smooth"}),10)},Oa=()=>{_t("Semua Produk"),dt("Semua Jenis"),Rt("Semua Merek"),Nt(""),ne(1),typeof window.rDyn=="function"&&window.rDyn()},Fa=e=>{clearTimeout(Bt),Bt=setTimeout(()=>{Nt(e),ne(1),W()},300)},Ka=e=>{ia(e),ne(1),W()},Ha=e=>{la(e),ne(1),k("btn-view-grid")&&(k("btn-view-grid").className=e==="grid"?"w-8 h-8 rounded-xl flex items-center justify-center text-[var(--color-primary)] bg-white dark:bg-slate-700 shadow-sm transition-all":"w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-all"),k("btn-view-list")&&(k("btn-view-list").className=e==="list"?"w-8 h-8 rounded-xl flex items-center justify-center text-[var(--color-primary)] bg-white dark:bg-slate-700 shadow-sm transition-all":"w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-all"),W()},Ua=()=>{ne(Et+1),W()};window.rCat=W;window.filterCategory=_a;window.filterSubCategory=Ra;window.filterBrand=Na;window.resetSemuaFilter=Oa;window.handleSearch=Fa;window.handleSort=Ka;window.toggleView=Ha;window.loadMoreProducts=Ua;const ut={products:[{key:"name",label:"Nama Produk",type:"text"},{key:"sku",label:"Barcode / SKU (Kosongkan utk Auto)",type:"text"},{key:"price",label:"Harga Jual Promo (Rp)",type:"number"},{key:"priceNormal",label:"Harga Coret / Normal (Rp) - Opsional",type:"number"},{key:"hpp",label:"Harga Modal / HPP (Rp) — Hanya Seller",type:"number"},{key:"poin",label:"Poin Member (per unit terjual, Produk Tanpa Varian)",type:"number"},{key:"stock",label:"Stok Awal (Qty) — Aktif jika Manajemen Stok ON",type:"number"},{key:"unit",label:"Satuan Dasar (Cth: Pcs, Kg)",type:"text"},{key:"poTime",label:"Estimasi Pre-Order (Opsional)",type:"text"},{key:"video",label:"Link Video YouTube (Opsional)",type:"text"},{key:"img",label:"URL Gambar",type:"text"},{key:"category",label:"Kategori",type:"dynamic_select_category"},{key:"subCategory",label:"Jenis / Sub-Kategori (Cth: Cat Tembok, Pipa PVC, Power Tools)",type:"text"},{key:"brand",label:"Merek",type:"dynamic_select_brand"},{key:"tag",label:"Label/Tag",type:"text"},{key:"isActive",label:"Status",type:"select",options:[{val:"true",text:"Tersedia"},{val:"false",text:"Habis"}]},{key:"desc",label:"Deskripsi Lengkap",type:"richtext"},{key:"specTable",label:"Tabel Spesifikasi (Opsional)",type:"spec_table_builder"},{key:"wholesale",label:"Grosir",type:"wholesale_builder"},{key:"variants",label:"Varian",type:"variants_builder"}],colors:[{key:"name",label:"Nama Warna",type:"text"},{key:"hex",label:"Kode Warna (Hex) - Opsional",type:"text"},{key:"catalog",label:"Katalog / Merek (Contoh: No Drop)",type:"text"}],categories:[{key:"name",label:"Kategori",type:"text"},{key:"img",label:"URL Ikon",type:"text"}],brands:[{key:"name",label:"Nama Merek",type:"text"},{key:"img",label:"URL Logo Merek",type:"text"}],banks:[{key:"bankName",label:"Nama Bank",type:"text"},{key:"bankAccount",label:"No. Rekening",type:"text"},{key:"bankOwner",label:"Atas Nama",type:"text"}],customers:[{key:"name",label:"Nama Lengkap",type:"text"},{key:"phone",label:"No. WhatsApp Aktif (Cth: 081234567890)",type:"text"},{key:"points",label:"Poin Member (Penyesuaian Manual)",type:"number"}],rewards:[{key:"name",label:"Nama Hadiah",type:"text"},{key:"img",label:"URL Gambar Hadiah",type:"text"},{key:"pointsCost",label:"Poin yang Dibutuhkan",type:"number"},{key:"stock",label:"Stok Hadiah Tersedia",type:"number"},{key:"isActive",label:"Status",type:"select",options:[{val:"true",text:"Aktif (Bisa Ditukar)"},{val:"false",text:"Nonaktif"}]}],banners:[{key:"title",label:"Judul Banner",type:"text"},{key:"desc",label:"Deskripsi Pendek (Opsional)",type:"textarea"},{key:"type",label:"Tipe Banner",type:"select",options:[{val:"image",text:"🖼 Gambar (Default)"},{val:"video",text:"🎬 Video (Drive / YouTube / MP4)"}]},{key:"img",label:"URL Gambar (jika Tipe = Gambar)",type:"text"},{key:"videoUrl",label:"URL / Link Video (Google Drive, YouTube, atau MP4)",type:"text"},{key:"link",label:"Link Tujuan Klik (Opsional)",type:"text"}],vouchers:[{key:"code",label:"Kode Voucher (Cth: MERDEKA50)",type:"text"},{key:"type",label:"Jenis Diskon",type:"select",options:[{val:"percent",text:"Potongan Persen (%)"},{val:"flat",text:"Potongan Rupiah (Rp)"},{val:"shipping_free",text:"Gratis Ongkir (100%)"},{val:"shipping_flat",text:"Potongan Ongkir (Rp)"}]},{key:"value",label:"Nilai Potongan (Contoh: 50 untuk %, atau 10000 untuk Rp)",type:"number"},{key:"minPurchase",label:"Syarat Minimal Belanja (Rp) - 0 Jika Tidak Ada",type:"number"},{key:"maxDiscount",label:"Maksimal Nominal Potongan (Rp) - Khusus Tipe Persen",type:"number"},{key:"targetProduct",label:"Target Produk Spesifik (Pilih jika berlaku khusus)",type:"dynamic_select_products"},{key:"isShow",label:"Tampilkan di Beranda?",type:"select",options:[{val:"true",text:"Ya, Tampilkan Promo"},{val:"false",text:"Sembunyikan"}]}]};window.aF=ut;let De=null,Ue=!1,st=!1;const rt=e=>{st=!!e,typeof window<"u"&&(window.__isLoggingIn=st)},Kt=()=>st||typeof window<"u"&&!!window.__isLoggingIn,Va=()=>{if(typeof navigator>"u")return"Perangkat Lain";const e=navigator.userAgent||"",t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e);let a="Perangkat";/iPhone|iPad|iPod/i.test(e)?a="iPhone/iPad":/Android/i.test(e)?a="HP Android":/Windows/i.test(e)?a="Desktop Windows":/Mac/i.test(e)?a="Mac/MacBook":/Linux/i.test(e)?a="Linux PC":a=t?"Smartphone":"Komputer Desktop";let o="Browser";return/Edg/i.test(e)?o="Edge":/Chrome/i.test(e)?o="Chrome":/Safari/i.test(e)?o="Safari":/Firefox/i.test(e)&&(o="Firefox"),`${a} (${o})`},Ht=async(e=null)=>{const t=typeof w<"u"&&w?w:window.db;if(!t)return null;const a=e||localStorage.getItem("freshmart_admin_session_id")||"sess_"+Date.now()+"_"+Math.random().toString(36).substring(2,9),o=Va();try{return localStorage.setItem("freshmart_admin_session_id",a),await t.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").set({sessionId:a,deviceName:o,loginAt:G.firestore.FieldValue.serverTimestamp(),lastActive:G.firestore.FieldValue.serverTimestamp()}),Ue=!1,a}catch(s){return console.warn("Gagal mengklaim sesi admin aktif:",s),null}},Ga=e=>{let t=document.getElementById("session-kicked-modal");t||(t=document.createElement("div"),t.id="session-kicked-modal",t.className="fixed inset-0 z-[150] bg-slate-900/80 flex items-center justify-center p-4 transition-opacity duration-300",document.body.appendChild(t)),t.innerHTML=`
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full border border-rose-200 dark:border-rose-900/50 shadow-2xl text-center flex flex-col items-center">
            <div class="w-16 h-16 rounded-full bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800 text-rose-500 flex items-center justify-center text-2xl mb-4 shadow-sm animate-bounce">
                <i class="fa-solid fa-right-from-bracket"></i>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-2">
                Sesi Anda Telah Diakhiri
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                Akun Admin baru saja login dari perangkat lain:
                <br>
                <b class="text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-900/20 px-2.5 py-1 rounded-lg mt-1.5 inline-block">${e}</b>
            </p>
            <p class="text-[11px] text-slate-400 dark:text-slate-500 mb-6 leading-normal bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <i class="fa-solid fa-shield-halved text-amber-500 mr-1"></i>
                Untuk mencegah konflik data dan menjaga keamanan toko, sistem hanya mengizinkan 1 perangkat aktif mengelola CMS pada satu waktu.
            </p>
            <button id="btn-session-kicked-ok" class="btn-primary w-full py-3.5 text-sm !rounded-xl font-bold flex items-center justify-center gap-2 shadow-glow">
                <i class="fa-solid fa-arrow-left"></i> Kembali ke Toko
            </button>
        </div>
    `,t.style.display="flex",t.style.opacity="1";const a=document.getElementById("btn-session-kicked-ok");a&&(a.onclick=()=>{t.style.opacity="0",setTimeout(()=>{t.style.display="none"},250)})},We=()=>{if(De)return;const e=typeof w<"u"&&w?w:window.db;!e||!localStorage.getItem("freshmart_admin_session_id")||(Ue=!1,De=e.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").onSnapshot(async a=>{if(!a.exists)return;const o=a.data(),s=o.sessionId,l=localStorage.getItem("freshmart_admin_session_id");if(s&&l&&s!==l){if(Ue)return;Ue=!0,ze(),localStorage.removeItem("freshmart_admin_session_id");const n=o.deviceName||"Perangkat Lain";try{window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,q&&typeof q.signOut=="function"&&await q.signOut()}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog"),Ga(n)}},a=>{console.warn("Admin session guard listener error:",a)}))},ze=()=>{De&&(De(),De=null)},Ut=async()=>{if(Kt())return!0;const e=typeof w<"u"&&w?w:window.db;if(!e)return!0;const t=localStorage.getItem("freshmart_admin_session_id");if(!t)try{return!(await e.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").get()).exists}catch{return!0}try{const a=await e.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").get();return a.exists?a.data().sessionId===t:!0}catch{return!0}};typeof window<"u"&&(window.claimAdminSession=Ht,window.attachAdminSessionGuard=We,window.detachAdminSessionGuard=ze,window.isCurrentSessionActive=Ut,window.setLoggingIn=rt,window.isLoggingIn=Kt);const qa=async()=>{const e=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";if(window.isAdm||e){if(!await Ut()&&q.currentUser){ze(),localStorage.removeItem("freshmart_admin_session_id"),await q.signOut(),window.isAdm=!1,window.__localIsAdm=!1,u("Sesi Admin telah diambil alih oleh perangkat lain."),se("login-username",""),se("login-password",""),typeof window.changeView=="function"&&window.changeView("view-admin-login");return}if(window.__localIsAdm=!0,typeof window.changeView=="function"&&window.changeView("view-admin"),We(),q.currentUser)Ve();else{const a=q.onAuthStateChanged(()=>{a(),Ve()})}}else se("login-username",""),se("login-password",""),typeof window.changeView=="function"&&window.changeView("view-admin-login")},Ve=()=>{We();const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0),F("admin-dashboard-view"),K("admin-content-view"),K("btn-admin-back"),F("admin-logo-box"),H("admin-header-title","CMS SELLER"),ge&&(ge(),_e(null)),ue&&(ue(),Be(null)),be&&(be(),Le(null)),Vt(na),bt()},bt=()=>{const e=k("admin-menu-tax-btn");if(!e)return;r.store.ppnEnabled===!0||r.store.ppnEnabled==="true"?(e.classList.remove("hidden"),e.classList.add("flex")):(e.classList.add("hidden"),e.classList.remove("flex"))},Je=()=>{const e=r.store.useStock===!0||r.store.useStock==="true";let t=0,a=0,o=0,s=0,l=0,n=0;return(r.products||[]).forEach(i=>{if(i.variants&&i.variants.length)i.variants.forEach(d=>{const p=d.isActive!==!1&&d.isActive!=="false",m=parseFloat(d.stock)||0;p&&(!e||m>0)?o++:s++,l+=(parseFloat(d.hpp)||0)*m,n+=(parseFloat(d.price)||0)*m});else{const d=i.isActive!==!1&&i.isActive!=="false",p=parseFloat(i.stock)||0;d&&(!e||p>0)?t++:a++,l+=(parseFloat(i.hpp)||0)*p,n+=(parseFloat(i.price)||0)*p}}),{activeProd:t,inactiveProd:a,activeVar:o,inactiveVar:s,assetHpp:l,assetJual:n}},Lt=new Map,Wa=2*60*1e3,Vt=async(e="month")=>{if(da(e),document.querySelectorAll(".report-period-btn").forEach(b=>{const f=b.dataset.period===e;b.style.background=f?"var(--color-primary)":"transparent",b.style.color=f?"var(--color-primary-contrast, #fff)":"",b.style.boxShadow=f?"0 2px 8px rgba(var(--color-primary-rgb),0.35)":"none"}),!k("admin-report-container"))return;const a=({totalPenjualan:b,totalHppTerjual:f,totalDiskonProduk:h,orderCount:g,truncated:v})=>{const A=b-f,T=A-h,y={today:"Hari Ini",week:"Minggu Ini",month:"Bulan Ini",all:"Sepanjang Waktu"}[e]||"";P("admin-report-container",`
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Total Penjualan (${y})</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white truncate">${x(b)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">${g} pesanan${v?" (≥3000, dibatasi)":""}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1.5"><i class="fa-solid fa-arrow-trend-up mr-1"></i>Laba Kotor</p>
                    <p class="text-lg sm:text-xl font-bold text-[var(--color-primary)] truncate">${x(A)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Penjualan − HPP Terjual</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-rose-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-tag mr-1"></i>Total HPP Terjual</p>
                    <p class="text-lg sm:text-xl font-bold text-rose-500 truncate">${x(f)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Modal barang yang laku</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-sack-dollar mr-1"></i>Laba Bersih</p>
                    <p class="text-lg sm:text-xl font-bold truncate" style="color:var(--color-primary)">${x(T)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Laba Kotor − Diskon</p>
                </div>
            </div>
        `)},o=Lt.get(e);if(o&&Date.now()-o.timestamp<Wa){a(o.data);return}P("admin-report-container",'<div class="text-center py-10"><i class="fa-solid fa-spinner fa-spin text-2xl text-slate-300"></i></div>');let s=null;const l=new Date;if(e==="today")s=new Date(l.getFullYear(),l.getMonth(),l.getDate());else if(e==="week"){const b=l.getDay(),f=b===0?6:b-1;s=new Date(l.getFullYear(),l.getMonth(),l.getDate()-f)}else e==="month"&&(s=new Date(l.getFullYear(),l.getMonth(),1));let n=0,i=0,d=0,p=0,m=!1;try{if(!q.currentUser){P("admin-report-container",'<div class="text-center py-10 text-slate-400"><i class="fa-solid fa-lock text-2xl mb-3"></i><p class="text-xs font-bold">Login terlebih dahulu untuk melihat laporan.</p></div>');return}let b=w.collection("freshmart_orders");s&&(b=b.where("timestamp",">=",G.firestore.Timestamp.fromDate(s)));const f=await b.limit(3e3).get();m=f.size>=3e3,f.forEach(g=>{const v=g.data();v.status!=="Dibatalkan"&&(p++,n+=parseFloat(v.payment?.subtotal)||0,d+=parseFloat(v.payment?.productDiscount)||0,(v.items||[]).forEach(A=>{const T=A.hpp!==void 0&&A.hpp!==null?parseFloat(A.hpp):typeof window.getEffHpp=="function"?window.getEffHpp(A):0;i+=(parseFloat(T)||0)*(parseFloat(A.qty)||0)}))});const h={totalPenjualan:n,totalHppTerjual:i,totalDiskonProduk:d,orderCount:p,truncated:m};Lt.set(e,{data:h,timestamp:Date.now()}),a(h)}catch(b){console.error("Gagal memuat laporan penjualan:",b)}},za=async()=>{const e=S("login-username"),t=S("login-password");if(!e||!t)return u("Email & Password wajib diisi!");rt(!0),C("Verifikasi Login...");try{const a="sess_"+Date.now()+"_"+Math.random().toString(36).substring(2,9);localStorage.setItem("freshmart_admin_session_id",a);const s=(await q.signInWithEmailAndPassword(e,t)).user||q.currentUser;if(!s||s.uid!==Pa){const l=s?s.uid:"null";throw await q.signOut(),localStorage.removeItem("freshmart_admin_session_id"),new Error("UID_MISMATCH: "+l)}await Ht(a),We(),window.isAdm=!0,history.replaceState({view:"view-admin"},"",window.location.href),typeof window.changeView=="function"&&window.changeView("view-admin",!0),Ve(),u("Login Berhasil!")}catch(a){if(console.error(a),localStorage.removeItem("freshmart_admin_session_id"),a.message&&a.message.startsWith("UID_MISMATCH:")){const o=a.message.replace("UID_MISMATCH: ","");u("Login Ditolak: UID Anda ("+o+") tidak cocok dengan ADMIN_UID!")}else u("Login Ditolak: Email atau Password salah!")}finally{rt(!1),$()}},Gt=async()=>{C("Keluar...");try{ze(),localStorage.removeItem("freshmart_admin_session_id"),await q.signOut(),window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,typeof window.updateProBadge=="function"&&window.updateProBadge(),ge&&(ge(),_e(null)),ue&&(ue(),Be(null)),be&&(be(),Le(null)),u("Berhasil Logout"),typeof window.changeView=="function"&&window.changeView("view-catalog")}catch{u("Gagal Logout")}finally{$()}},Ja=()=>{le("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{Gt()},"Ya, Keluar")};window.checkAdminAccess=qa;window.openAdminMenu=Ve;window.toggleTaxMenuVisibility=bt;window.computeInventoryStats=Je;window.loadAdminReport=Vt;window.processAdminLogin=za;window.logoutAdmin=Gt;window.confirmLogoutAdmin=Ja;const Qa=async()=>{if(!Y||Y.length===0)return u("Belum ada data pesanan!");C("Menyiapkan modul Excel...");try{await Ot("https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js",()=>typeof XLSX<"u")}catch{$(),u("Gagal memuat modul Excel. Cek koneksi internet Anda.");return}$();let e=[];Y.forEach((l,n)=>{let i=l.dateString?new Date(l.dateString).toLocaleString("id-ID"):"-",d=l.customer?.name||"Anonim",p=l.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko",m=l.status||"-",b=l.items?l.items.reduce((h,g)=>h+(parseFloat(g.qty)||0),0):0,f=l.payment?.grandTotal||0;e.push({No:n+1,"ID Pesanan":l.orderId,Tanggal:i,"Nama Pelanggan":d,"Metode Kirim":p,Status:m,"Total Item":b,"Total Tagihan (Rp)":f})});const t=XLSX.utils.json_to_sheet(e),a=XLSX.utils.book_new();XLSX.utils.book_append_sheet(a,t,"Laporan Pesanan");const o=[{wch:5},{wch:25},{wch:22},{wch:25},{wch:15},{wch:15},{wch:12},{wch:20}];t["!cols"]=o;const s=new Date().toISOString().split("T")[0];XLSX.writeFile(a,`Laporan_Pesanan_${s}.xlsx`),u("Laporan Excel (.xlsx) berhasil diunduh!")},Ya=()=>{try{const e=new(window.AudioContext||window.webkitAudioContext),t=e.createOscillator(),a=e.createGain();t.connect(a),a.connect(e.destination),t.type="sine",t.frequency.setValueAtTime(800,e.currentTime),a.gain.setValueAtTime(1,e.currentTime),t.frequency.setValueAtTime(600,e.currentTime+.2),t.frequency.setValueAtTime(800,e.currentTime+.6),a.gain.setValueAtTime(1,e.currentTime+.6),t.frequency.setValueAtTime(600,e.currentTime+.8),a.gain.exponentialRampToValueAtTime(1e-5,e.currentTime+1.5),t.start(e.currentTime),t.stop(e.currentTime+1.5)}catch{}},Xa=()=>{P("admin-content",`
        <div class="mb-5 flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                    <i class="fa-solid fa-satellite-dish animate-pulse text-base"></i>
                </div>
                <div>
                    <h2 class="font-bold text-sm text-slate-800 dark:text-slate-100 uppercase tracking-widest leading-tight">Live Orders</h2>
                    <p class="text-[9px] font-bold text-slate-500 mt-0.5">Pantau pesanan masuk secara realtime</p>
                </div>
            </div>
            <button onclick="exportOrdersToExcel()" class="h-9 px-4 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm border transition-all active:scale-95 hover:text-white hover:border-[var(--color-primary)] text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600" style="--tw-shadow-color: rgba(var(--color-primary-rgb),0.2)" onmouseover="this.style.background='var(--color-primary)'" onmouseout="this.style.background=''">
                <i class="fa-solid fa-file-csv"></i> <span class="hidden sm:inline">Export Excel</span>
            </button>
        </div>
        <div id="admin-orders-list" class="space-y-4"><div class="text-center py-16"><div class="w-12 h-12 border-4 border-[rgba(var(--color-primary-rgb),0.2)] border-t-[var(--color-primary)] rounded-full animate-spin mx-auto"></div></div></div>
    `);const e=()=>{ge&&(ge(),_e(null));let t=!0;const a=w.collection("freshmart_orders").orderBy("timestamp","desc").limit(100).onSnapshot(o=>{if(Mt([]),!t){let l=!1;o.docChanges().forEach(n=>{n.type==="added"&&n.doc.data().status==="Baru"&&(l=!0)}),l&&(u("🔔 Pesanan Baru Masuk!"),Ya())}if(t=!1,o.empty){P("admin-orders-list",'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-receipt text-5xl mb-4 opacity-30"></i>Belum ada pesanan</div>'),H("stat-orders",0);return}H("stat-orders",o.size+(o.size===100?"+":""));const s=[];P("admin-orders-list",o.docs.map(l=>{const n=l.data();s.push(n);let i="text-slate-500 border-slate-200 dark:border-slate-600",d="fa-clock",p="bg-slate-50 dark:bg-slate-700/50",m="text-slate-400";n.status==="Baru"?(i="text-rose-500 border-rose-200 bg-rose-50 dark:bg-rose-900/20 dark:border-rose-800 animate-pulse",d="fa-asterisk",p="bg-rose-500",m="text-white shadow-md shadow-rose-500/30"):n.status==="Diproses"?(i="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30",d="fa-spinner fa-spin",p="primary-bg",m="shadow-sm"):n.status==="Selesai"?(i="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30",d="fa-check-double",p="primary-bg-soft",m="primary-text"):n.status==="Dibatalkan"&&(i="text-slate-400 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",d="fa-xmark",p="bg-slate-100 dark:bg-slate-800",m="text-slate-400");let b="fa-wallet text-slate-400",f=n.payment?.method||"";f==="transfer"?b="fa-building-columns text-[var(--color-primary)]":f==="qris"?b="fa-qrcode text-purple-500":f==="cod"?b="fa-hand-holding-dollar text-[var(--color-primary)]":f==="cashier"&&(b="fa-cash-register text-amber-500");let h=n.items?parseFloat(n.items.reduce((A,T)=>A+(parseFloat(T.qty)||0),0).toFixed(2)):0;const g=n.dateString?new Date(n.dateString).toLocaleDateString("id-ID",{day:"numeric",month:"short"}):"",v=(n.orderId||"").split("-").pop();return`
                <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-primary)] transition-all duration-300" onclick="openOrderDetail('${n.orderId}')">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${p} ${m} flex items-center justify-center shrink-0 transition-colors">
                            <i class="fa-solid fa-receipt text-xl sm:text-2xl"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex justify-between items-start mb-1">
                                <div class="flex items-center gap-2">
                                    <span class="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 tracking-tight">#${v}</span>
                                    <span class="text-[9px] font-bold px-2 py-0.5 rounded border ${i} uppercase tracking-widest flex items-center"><i class="fa-solid ${d} mr-1"></i> ${c(n.status)}</span>
                                </div>
                                <span class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5 whitespace-nowrap"><i class="fa-regular fa-calendar"></i> <span class="hidden sm:inline">${g}</span></span>
                            </div>
                            <div class="flex items-center gap-2 mt-1.5">
                                <p class="text-xs font-bold text-slate-600 dark:text-slate-300 truncate max-w-[120px] sm:max-w-xs"><i class="fa-solid fa-user text-slate-400 mr-1"></i> ${c(n.customer?.name||"Anonim")}</p>
                                <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0"></span>
                                <span class="text-[9px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-xl border border-slate-200 dark:border-slate-700 uppercase tracking-widest shrink-0">${h} Item</span>
                                ${n.customer?.lat?'<span class="text-[9px] font-bold text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] px-1.5 py-0.5 rounded-xl border border-[rgba(var(--color-primary-rgb),0.2)] uppercase tracking-widest shrink-0"><i class="fa-solid fa-location-dot"></i> GPS</span>':""}
                                ${n.buktiPayment?'<span class="text-[9px] font-bold text-violet-500 bg-violet-50 dark:bg-violet-900/20 px-1.5 py-0.5 rounded-xl border border-violet-100 dark:border-violet-800 uppercase tracking-widest shrink-0"><i class="fa-solid fa-image"></i></span>':""}
                            </div>
                        </div>
                        <div class="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:primary-bg transition-all shrink-0" style="transition: background-color 0.2s, color 0.2s">
                            <i class="fa-solid fa-chevron-right text-sm"></i>
                        </div>
                    </div>
                    <div class="w-full border-t border-dashed border-slate-200 dark:border-slate-700 my-4"></div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-[var(--color-primary)] text-lg sm:text-xl tracking-tight">${x(n.payment?.grandTotal)}</span>
                            ${n.payment?.ppnAmount?`<span class="text-[8px] font-bold bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800 uppercase tracking-widest">PPN ${n.payment.ppnRate||11}%</span>`:""}
                        </div>
                        <div class="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-700">
                            <i class="fa-solid ${b} text-xs"></i>
                            <span class="text-[9px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">${c(f)}</span>
                        </div>
                    </div>
                </div>`}).join("")),Mt(s)},()=>{P("admin-orders-list",'<div class="text-center text-rose-500 font-bold">Koneksi terputus. Retrying...</div>'),setTimeout(e,5e3)});_e(a)};e()},gt=e=>{const t=Y.find(s=>s.orderId===e);if(!t)return;ca(e);let a=`<div class="relative w-full sm:w-40 mt-1"><select onchange="updateOrderStatus('${t.orderId}', this.value)" class="w-full text-sm font-bold ${t.status==="Baru"?"text-rose-600 bg-rose-50 border-rose-200":t.status==="Diproses"?"text-blue-600 bg-blue-50 border-blue-200":t.status==="Selesai"?"text-emerald-600 bg-emerald-50 border-emerald-200":"text-slate-500 bg-slate-50 border-slate-200"} border px-4 py-2.5 rounded-xl focus:outline-none appearance-none cursor-pointer transition-colors shadow-sm"><option value="Baru" ${t.status==="Baru"?"selected":""} class="text-slate-800">Baru (Pending)</option><option value="Diproses" ${t.status==="Diproses"?"selected":""} class="text-slate-800">Diproses</option><option value="Selesai" ${t.status==="Selesai"?"selected":""} class="text-slate-800">Selesai</option><option value="Dibatalkan" ${t.status==="Dibatalkan"?"selected":""} class="text-slate-800">Dibatalkan</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 ${t.status==="Baru"?"text-rose-400":t.status==="Diproses"?"text-blue-400":t.status==="Selesai"?"text-emerald-400":"text-slate-400"} pointer-events-none text-xs"></i></div>`;P("admin-order-modal-content",`
        <div class="flex flex-col gap-4 text-sm pb-2">
            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row justify-between gap-5 sm:items-center">
                <div class="flex-1">
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-crosshairs text-[var(--color-primary)]"></i> Status</p>
                    ${a}
                </div>
                <div class="text-left sm:text-right flex flex-col justify-center">
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">ID Pesanan</p>
                    <p class="text-sm sm:text-base font-bold text-slate-900 dark:text-white break-all tracking-wide">#${t.orderId}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1.5">${t.dateString?new Date(t.dateString).toLocaleString("id-ID"):""}</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-start">
            <div class="flex flex-col gap-4">

            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 class="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center border border-blue-100 dark:border-blue-800"><i class="fa-solid fa-user"></i></div> Data Pemesan</h4>
                <div class="space-y-4">
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold">Nama</span><span class="font-bold text-slate-900 dark:text-white text-base">${c(t.customer?.name||"-")}</span></div>
                    ${t.customer?.wa?`<div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5"><i class="fa-brands fa-whatsapp text-green-500"></i> WhatsApp</span><a href="https://wa.me/${c(t.customer.wa)}" target="_blank" class="font-bold text-green-600 dark:text-green-400 hover:underline">+${c(t.customer.wa)}</a></div>`:""}
                    ${t.customer?.wa?`<button type="button" onclick="saveOrderCustomerToDB('${c(t.customer.name||"")}','${c(t.customer.wa)}')" class="w-full py-2.5 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-teal-100 transition-all active:scale-95"><i class="fa-solid fa-address-book"></i> Simpan ke Database Pelanggan</button>`:""}
                    <div class="border-t border-dashed border-slate-200 dark:border-slate-700 pt-4">
                        <span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2 mb-2.5"><i class="fa-solid fa-map-location-dot"></i> Alamat (${t.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko"})</span>
                        <div class="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner text-sm">${c(t.customer?.address||"-")}</div>
                        ${t.customer?.lat&&t.customer?.deliveryMethod==="delivery"?`<a href="https://www.google.com/maps?q=${c(t.customer.lat)},${c(t.customer.lng)}" target="_blank" class="mt-3 flex items-center justify-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-blue-100 transition-colors"><i class="fa-solid fa-location-dot"></i> Buka Lokasi di Google Maps</a>`:""}
                    </div>
                    ${t.customer?.note?`<div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800 mt-2"><p class="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-note-sticky"></i> Catatan Pembeli</p><p class="text-sm text-amber-900 dark:text-amber-100 font-bold">${c(t.customer.note)}</p></div>`:""}
                    ${t.buktiPayment?`<div class="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl border border-violet-200 dark:border-violet-800 mt-2"><p class="text-[10px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2.5"><i class="fa-solid fa-image"></i> Bukti Pembayaran</p><a href="${c(t.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border border-violet-200 dark:border-violet-800"><img src="${c(t.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-48 object-cover" onerror="this.style.display='none'" loading="lazy"><div class="bg-violet-100 dark:bg-violet-900/40 py-2 text-center text-[10px] font-bold text-violet-600 dark:text-violet-400"><i class="fa-solid fa-arrow-up-right-from-square mr-1"></i> Tap untuk buka</div></a></div>`:""}
                </div>
            </div>

            </div>

            <div class="flex flex-col gap-4">

            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 class="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl primary-light-icon-box flex items-center justify-center border border-slate-200 dark:border-slate-700"><i class="fa-solid fa-box-open"></i></div> Rincian Item</h4>
                <div class="space-y-3">${t.items.map(s=>`
                    <div class="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
                        <div class="flex items-center gap-3 min-w-0">
                            <div class="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0"><i class="fa-solid fa-tag text-sm"></i></div>
                            <div class="min-w-0">
                                <p class="font-bold text-sm text-slate-900 dark:text-white truncate mb-1" title="${c(s.name)}">${c(s.name)}</p>
                                ${s.variantName||s.poTime?`
                                <div class="flex flex-wrap gap-1 mb-1">
                                    ${s.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg border border-slate-300 dark:border-slate-600 text-[9px] font-bold">${c(s.variantName)}</span>`:""}
                                    ${s.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${c(s.poTime)}</span>`:""}
                                </div>
                                `:""}
                                <p class="text-[11px] text-slate-500 dark:text-slate-400 font-bold">${parseFloat(s.qty)} ${c(s.unit||"pcs")} x ${x(s.effectivePrice)}</p>
                            </div>
                        </div>
                        <div class="font-bold text-sm text-slate-900 dark:text-white ml-3 shrink-0">${x(s.effectivePrice*parseFloat(s.qty))}</div>
                    </div>`).join("")}
                </div>
            </div>

            ${t.claimedReward?`
            <div class="bg-violet-50 dark:bg-violet-900/10 p-5 sm:p-6 rounded-[1.5rem] border border-violet-200 dark:border-violet-800 shadow-sm">
                <h4 class="font-bold text-violet-700 dark:text-violet-400 text-sm border-b border-violet-200 dark:border-violet-800 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl bg-violet-100 dark:bg-violet-900/40 text-violet-500 flex items-center justify-center border border-violet-200 dark:border-violet-800"><i class="fa-solid fa-gift"></i></div> Klaim Hadiah</h4>
                <div class="space-y-3">
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Hadiah</span><span class="font-bold text-violet-700 dark:text-violet-400 text-sm">${c(t.claimedReward.name)}</span></div>
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Poin Ditukar</span><span class="font-bold text-slate-800 dark:text-white text-sm">${t.claimedReward.pointsCost} Poin</span></div>
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Status</span><span class="font-bold text-xs px-2 py-1 rounded-xl ${t.claimedReward.status==="ready"?"bg-emerald-100 text-emerald-600":t.claimedReward.status==="waiting_stock"?"bg-amber-100 text-amber-600":"bg-slate-200 text-slate-600"}">${pa(t.claimedReward)}</span></div>
                    ${t.claimedReward.note?`<div class="bg-white/70 dark:bg-slate-900/40 p-2.5 rounded-xl text-[11px] italic text-violet-600 dark:text-violet-400">"${c(t.claimedReward.note)}"</div>`:""}
                    <div class="border-t border-dashed border-violet-200 dark:border-violet-800 pt-3.5 mt-1 space-y-2.5">
                        <button type="button" onclick="ackRewardClaim('${t.orderId}','ready')" class="w-full py-2.5 rounded-xl primary-bg text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i class="fa-solid fa-check"></i> Stok Ada — Kirim Bersama Pesanan</button>
                        <button type="button" onclick="ackRewardClaim('${t.orderId}','waiting_stock')" class="w-full py-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i class="fa-solid fa-clock"></i> Stok Kosong — Tunda Pengiriman</button>
                    </div>
                </div>
            </div>`:""}

            <div class="bg-slate-900 p-6 sm:p-7 rounded-[1.5rem] text-white shadow-xl shadow-slate-900/20 border border-slate-700/60 relative overflow-hidden group mt-2">
                <div class="absolute -top-10 -right-10 w-32 h-32 primary-blur-orb rounded-full blur-3xl pointer-events-none transition-all duration-700"></div>
                
                <div class="flex justify-between items-center border-b border-slate-700/80 pb-4 mb-4 relative z-10">
                    <h4 class="font-bold text-[11px] uppercase tracking-widest text-slate-300 flex items-center gap-2.5"><i class="fa-solid fa-wallet text-[var(--color-primary)] text-sm"></i> Ringkasan Bayar</h4>
                    <span class="bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] font-bold tracking-widest border border-white/10 uppercase shadow-inner text-white">${c(t.payment?.method||"").toUpperCase()}</span>
                </div>
                
                <div class="space-y-3 font-medium text-sm text-slate-300 relative z-10">
                    <div class="flex justify-between items-center"><span>Subtotal Produk</span><span class="font-bold text-white">${x(t.payment?.subtotal)}</span></div>
                    ${t.customer?.deliveryMethod==="delivery"?`<div class="flex justify-between items-center"><span>Ongkos Kirim</span><span class="font-bold text-white">${x(t.payment?.shippingCost)}</span></div>`:""}
                    ${t.payment?.shippingDiscount?`<div class="flex justify-between items-center text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.15)] px-2 py-1 -mx-2 rounded-xl"><span>Diskon Ongkir</span><span class="font-bold">-${x(t.payment.shippingDiscount)}</span></div>`:""}
                    ${t.payment?.productDiscount?`<div class="flex justify-between items-center text-rose-400 bg-rose-900/20 px-2 py-1 -mx-2 rounded-xl"><span>Diskon Promo</span><span class="font-bold">-${x(t.payment.productDiscount)}</span></div>`:""}
                    ${(()=>{if(!t.payment?.ppnAmount||t.payment.ppnAmount<=0)return"";const s=t.payment.ppnType==="inclusive",l=t.payment.ppnRate||11,n=t.payment.ppnAmount,i=(t.payment.subtotal||0)-(t.payment.productDiscount||0)+(t.payment.shippingCost||0)-(t.payment.shippingDiscount||0),d=t.payment.dppAmount||(s?Math.round(i*100/(100+l)):Math.max(0,i));return`
                        <div class="flex justify-between items-center text-slate-400"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-bold text-white">${x(d)}</span></div>
                        <div class="flex justify-between items-center text-amber-400 bg-amber-900/20 px-2 py-1 -mx-2 rounded-xl"><span>${s?"Termasuk PPN":"PPN"} (${l}%)</span><span class="font-bold">${s?"":"+"}${x(n)}</span></div>
                        `})()}
                </div>
                
                <div class="border-t border-dashed border-slate-600/60 my-5 relative z-10"></div>
                
                <div class="flex justify-between items-end relative z-10">
                    <span class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Tagihan</span>
                    <span class="text-3xl font-bold text-[var(--color-primary)] tracking-tight font-extrabold">${x(t.payment?.grandTotal)}</span>
                </div>
            </div>

            </div>
            </div>
        </div>`);const o=k("admin-order-modal");o&&o.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminOrder"),F("admin-order-modal"),setTimeout(()=>{k("admin-order-modal")&&k("admin-order-modal").classList.remove("opacity-0"),k("admin-order-modal-box")&&k("admin-order-modal-box").classList.remove("scale-95")},10)},Za=async(e,t)=>{const o=(typeof window.normalizeWA=="function"?window.normalizeWA:s=>String(s||"").replace(/\D/g,"").replace(/^0/,"62"))(t);if(!o||o.length<10)return u("Nomor WA tidak valid!");C("Menyimpan...");try{const s=w.collection("freshmart").doc("cms_data").collection("customers").doc(o),l=await s.get();l.exists?(await s.set({name:e||l.data().name},{merge:!0}),u("Data pelanggan sudah ada, nama diperbarui.")):(await s.set({id:parseInt(o,10),name:e||"-",phone:o,points:0}),u("✅ Pelanggan baru disimpan ke database!"))}catch(s){console.error("Gagal simpan pelanggan:",s),u("Gagal menyimpan data pelanggan: "+(s.message||""))}finally{$()}},es=async(e,t)=>{if(t==="waiting_stock"&&typeof window.customPrompt=="function"){window.customPrompt("Catatan untuk pelanggan:","Stok hadiah kosong, akan kami kirim susulan begitu stok tersedia kembali.",async o=>{if(o!==null){C("Menyimpan...");try{await w.collection("freshmart_orders").doc(e).update({"claimedReward.status":t,"claimedReward.note":o||""}),u("Status klaim hadiah diperbarui!");let s=Y.findIndex(l=>l.orderId===e);s!==-1&&(Y[s].claimedReward||(Y[s].claimedReward={}),Y[s].claimedReward.status=t,Y[s].claimedReward.note=o||""),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(s){u("Gagal update klaim: "+s.message)}finally{$()}}});return}let a="";C("Menyimpan...");try{await w.collection("freshmart_orders").doc(e).update({"claimedReward.status":t,"claimedReward.note":a});const o=Y.find(s=>s.orderId===e);o&&(o.claimedReward.status=t,o.claimedReward.note=a,gt(e)),u("Status hadiah diperbarui!")}catch(o){console.error("Gagal update status hadiah:",o),u("Gagal update status hadiah: "+(o.message||""))}finally{$()}},qt=(e=!1)=>{const t=()=>{k("admin-order-modal")&&k("admin-order-modal").classList.add("opacity-0"),k("admin-order-modal-box")&&k("admin-order-modal-box").classList.add("scale-95"),setTimeout(()=>K("admin-order-modal"),300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminOrder",e,t):t()},ts=async(e,t)=>{if(!qe){fe(!0),C("Update...");try{await w.collection("freshmart_orders").doc(e).update({status:t});let a=Y.find(o=>o.orderId===e);a&&(a.status=t),gt(e),u("Status diupdate!")}catch{u("Gagal!")}finally{fe(!1),$()}}},as=async e=>{if(!e)return u("ID pesanan tidak valid!");C("Memuat data...");try{const t=await w.collection("freshmart_orders").doc(e).get();if($(),!t.exists)return u("Data pesanan tidak ditemukan!");const a=t.data(),o=a.customer&&a.customer.wa;if(!o)return u("Nomor WhatsApp pelanggan tidak tersedia!");const s=r&&r.store&&r.store.name?r.store.name:"Toko Kami",l=a.customer&&a.customer.name?a.customer.name:"Pelanggan",n=a.status||"Baru",i=a.payment&&a.payment.grandTotal?x(a.payment.grandTotal):"-",d=a.payment&&a.payment.method?a.payment.method.toUpperCase():"-",p=`Halo *${l}*! 👋

Terima kasih telah berbelanja di *${s}*. 🛒

*Detail Pesanan Anda:*
📋 ID: *${e.split("-").pop()}*
💰 Total: *${i}*
💳 Pembayaran: *${d}*
📦 Status: *${n}*

Kami akan segera memproses pesanan Anda. Terima kasih! 🙏`;window.open(`https://wa.me/${o}?text=${encodeURIComponent(p)}`,"_blank")}catch{$(),u("Gagal memuat data pesanan!")}},ss=e=>{le("Hapus Pesanan","Yakin ingin hapus permanen?",async()=>{if(!qe){fe(!0),C("Menghapus...");try{await w.collection("freshmart_orders").doc(e).delete(),u("Terhapus!"),ma===e&&qt()}catch{u("Gagal!")}finally{fe(!1),$()}}})};window.exportOrdersToExcel=Qa;window.rAdmOrd=Xa;window.openOrderDetail=gt;window.saveOrderCustomerToDB=Za;window.ackRewardClaim=es;window.closeOrderDetailModal=qt;window.updateOrderStatus=ts;window.konfirmasiKeWA=as;window.deleteOrder=ss;const rs=()=>{const e=r.store.name||"Toko Grosir",t=r.store.themeColor||"#10b981",a=(l,n,i=!1)=>{let d=document.querySelector(`meta[${i?"property":"name"}="${l}"]`);d||(d=document.createElement("meta"),i?d.setAttribute("property",l):d.setAttribute("name",l),document.head.appendChild(d)),d.setAttribute("content",n)};a("theme-color",t),a("mobile-web-app-capable","yes"),a("apple-mobile-web-app-capable","yes"),a("apple-mobile-web-app-status-bar-style","black-translucent"),a("apple-mobile-web-app-title",e),a("application-name",e),a("msapplication-TileColor",t),document.title=e,localStorage.setItem("freshmart_theme_color",t),r.store.uiTheme&&r.store.uiTheme!==localStorage.getItem("freshmart_ui_theme")&&(localStorage.setItem("freshmart_ui_theme",r.store.uiTheme),Te(r.store.uiTheme));const o=r.store.bgStyle||localStorage.getItem("freshmart_bg_style")||"minimalist",s=r.store.bgCustomUrl!==void 0?r.store.bgCustomUrl:localStorage.getItem("freshmart_bg_custom_url")||"";Ce(o,s)},Wt=()=>{P("admin-content",`
    <div class="max-w-full pb-10 text-sm fade-in-scale">
        <div class="mb-5 flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                    <i class="fa-solid fa-sliders text-base"></i>
                </div>
                <div>
                    <h2 class="font-bold text-sm text-slate-800 dark:text-slate-100 uppercase tracking-widest leading-tight">Pengaturan Toko</h2>
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">Kelola konfigurasi profil, katalog, pengiriman, pembayaran, dan operasional</p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-6">
            <button onclick="openSettingForm('profile')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1 hover:border-[rgba(var(--color-primary-rgb),0.4)] hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:text-white transition-all duration-300 z-10" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)" onmouseover="this.style.background='var(--color-primary)'" onmouseout="this.style.background='rgba(var(--color-primary-rgb),0.1)'"><i class="fa-solid fa-store text-xl"></i></div>
                <div class="z-10">
                    <span class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-[10px] block">Profil Toko</span>
                    <span class="text-[9px] text-slate-400 block mt-0.5 font-medium">Branding & Tema</span>
                </div>
            </button>
            <button onclick="openSettingForm('catalog')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-palette text-xl"></i></div>
                <div class="z-10">
                    <span class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-[10px] block">Kategori & Brand</span>
                    <span class="text-[9px] text-slate-400 block mt-0.5 font-medium">Layout & Navigasi</span>
                </div>
            </button>
            <button onclick="openSettingForm('shipping')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-900/30 text-amber-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-motorcycle text-xl"></i></div>
                <div class="z-10">
                    <span class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-[10px] block">Pengiriman</span>
                    <span class="text-[9px] text-slate-400 block mt-0.5 font-medium">Ongkir & Lokasi</span>
                </div>
            </button>
            <button onclick="openSettingForm('payment')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-qrcode text-xl"></i></div>
                <div class="z-10">
                    <span class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-[10px] block">QRIS Pay</span>
                    <span class="text-[9px] text-slate-400 block mt-0.5 font-medium">Metode Non-Tunai</span>
                </div>
            </button>
            <button onclick="openSettingForm('config')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1 hover:border-rose-300 dark:hover:border-rose-600 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-laptop-code text-xl"></i></div>
                <div class="z-10">
                    <span class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-[10px] block">Sistem & API</span>
                    <span class="text-[9px] text-slate-400 block mt-0.5 font-medium">Google Apps Script</span>
                </div>
            </button>
            <button onclick="openSettingForm('operasional')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1 hover:border-violet-300 dark:hover:border-violet-600 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-900/30 text-violet-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-sliders text-xl"></i></div>
                <div class="z-10">
                    <span class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-[10px] block">Operasional</span>
                    <span class="text-[9px] text-slate-400 block mt-0.5 font-medium">Stok, Pajak & Poin</span>
                </div>
            </button>
        </div>

        <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
            <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                    <i class="fa-solid fa-database"></i>
                </div>
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-wider">Pencadangan Data Toko (Backup &amp; Restore)</h3>
                    <p class="text-[10px] text-slate-500 dark:text-slate-400">Amankan database toko ke file lokal .json atau pulihkan data riwayat dari file cadangan</p>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-3 pt-1">
                <button onclick="backupData()" class="flex-1 bg-slate-900 dark:bg-slate-950 text-white font-bold py-3.5 rounded-xl transition-all text-xs flex items-center justify-center gap-2 border border-slate-800 shadow-sm active:scale-95 hover:opacity-90"><i class="fa-solid fa-download"></i> Backup Lokal (.json)</button>
                <button onclick="el('restore-file').click()" class="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold py-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-xs flex items-center justify-center gap-2 shadow-sm active:scale-95"><i class="fa-solid fa-upload"></i> Restore Data</button>
            </div>
        </div>
    </div>
    `)},os=e=>{const t=Pe[e][500],a=document.getElementById("set-ui-theme"),o=document.getElementById("set-theme-color"),s=document.getElementById("set-theme-color-picker");a&&(a.value=e),o&&(o.value=t),s&&(s.value=t),document.querySelectorAll(".preset-color-chip").forEach(i=>{i.classList.remove("ring-4","ring-offset-2","ring-slate-400","dark:ring-slate-500","scale-110"),i.querySelector(".check-icon")?.classList.add("hidden")});const l=document.getElementById(`preset-chip-${e}`);l&&(l.classList.add("ring-4","ring-offset-2","ring-slate-400","dark:ring-slate-500","scale-110"),l.querySelector(".check-icon")?.classList.remove("hidden"));const n=document.getElementById("custom-color-chip");if(n){n.style.background="";const i=n.querySelector("i");i&&(i.style.color="")}Te(e,t)},is=e=>{const t=document.getElementById("set-bg-style");t&&(t.value=e);const a=document.getElementById("set-bg-custom-url")?.value||"";document.querySelectorAll(".bg-style-card").forEach(s=>{s.classList.remove("border-[var(--color-primary)]","shadow-md","ring-2","ring-[var(--color-primary)]/20"),s.classList.add("border-slate-200","dark:border-slate-700");const l=s.querySelector(".bg-icon-wrap");l&&(l.className="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300")});const o=document.getElementById(`bg-opt-${e}`);if(o){o.classList.add("border-[var(--color-primary)]","shadow-md","ring-2","ring-[var(--color-primary)]/20"),o.classList.remove("border-slate-200","dark:border-slate-700");const s=o.querySelector(".bg-icon-wrap");s&&(s.className="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform bg-[var(--color-primary)] text-white shadow-sm")}Ce(e,a)},ls=e=>{let t,a,o,s,l;if(e==="profile"){t="Profil Toko & Tampilan Visual",a="Kelola identitas utama toko, palet warna tema, model layout background, dan informasi legal",o="fa-store",s={line:"bg-[var(--color-primary)]",box:"bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)]"};const i=r.store.uiTheme||"emerald",d=r.store.bgStyle||localStorage.getItem("freshmart_bg_style")||"minimalist",p={emerald:"Emerald",teal:"Teal",lime:"Lime",cyan:"Cyan",sky:"Sky",blue:"Blue",indigo:"Indigo",violet:"Violet",purple:"Purple",fuchsia:"Fuchsia",pink:"Pink",rose:"Rose",red:"Red",orange:"Orange",amber:"Amber",yellow:"Yellow",green:"Green",slate:"Slate",stone:"Stone"},m=Object.keys(Pe).map(b=>{const f=Pe[b][500],h=p[b]||b,g=i===b;return`
                <button type="button" id="preset-chip-${b}" onclick="selectPresetTheme('${b}')" 
                        class="preset-color-chip w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 ${g?"ring-4 ring-offset-2 ring-slate-400 dark:ring-slate-500 scale-110":""}" 
                        style="background-color: ${f}; border: 1.5px solid rgba(0,0,0,0.08)" 
                        title="${h}">
                    <i class="check-icon fa-solid fa-check text-white text-[11px] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${g?"":"hidden"}"></i>
                </button>
            `}).join("");l=`
            <!-- KARTU 1: IDENTITAS UTAMA TOKO -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                        <i class="fa-solid fa-shop"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Identitas Pokok &amp; Branding Toko</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Nama toko, slogan, logo aplikasi, dan deskripsi publik</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Nama Toko (Nama Aplikasi)</label>
                        <input autocomplete='off' id="set-name" value="${c(r.store.name)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Toko Putri">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Slogan Toko</label>
                        <input autocomplete='off' id="set-slogan" value="${c(r.store.slogan)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Belanja Hemat & Segar Setiap Hari">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Logo Toko (Ikon Aplikasi PWA)</label>
                        <div class="flex gap-2">
                            <input autocomplete='off' id="set-logo" value="${c(r.store.logo)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm flex-1 text-xs" placeholder="URL Logo atau klik upload">
                            <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                                <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload
                                <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-logo')">
                            </label>
                        </div>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Email Resmi Toko</label>
                        <input autocomplete='off' id="set-email" value="${c(r.store.email||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="admin@tokoputri.com">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Deskripsi Lengkap Toko</label>
                    <textarea id="set-description" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Deskripsi profil toko yang tampil pada profil pelanggan dan informasi footer...">${c(r.store.description)}</textarea>
                </div>
            </div>
            
            <!-- KARTU 2: WARNA TEMA TOKO -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                        <i class="fa-solid fa-palette"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Warna Tema &amp; Header PWA</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Pilih palet warna khas toko atau gunakan pemilih warna bebas</p>
                    </div>
                </div>

                <input type="hidden" id="set-ui-theme" value="${i}">
                <input type="hidden" id="set-theme-color" value="${c(r.store.themeColor||"#10b981")}">
                <div class="flex flex-wrap gap-3 pt-1">
                    ${m}
                    <div class="relative" title="Warna Kustom (Klik untuk pilih warna bebas)">
                        <label for="set-theme-color-picker" class="w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 border-2 border-dashed border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]" id="custom-color-chip">
                            <i class="fa-solid fa-pen text-slate-500 dark:text-slate-400 text-[11px]"></i>
                        </label>
                        <input type="color" id="set-theme-color-picker" value="${c(r.store.themeColor||"#10b981")}" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
                            oninput="
                                const hex = this.value;
                                document.getElementById('set-theme-color').value = hex;
                                document.getElementById('custom-color-chip').style.background = hex;
                                document.getElementById('custom-color-chip').querySelector('i').style.color = '#fff';
                                document.querySelectorAll('.preset-color-chip').forEach(el => {
                                    el.classList.remove('ring-4', 'ring-offset-2', 'ring-slate-400', 'dark:ring-slate-500', 'scale-110');
                                    el.querySelector('.check-icon')?.classList.add('hidden');
                                });
                                document.getElementById('set-ui-theme').value = 'custom';
                                applyUITheme('custom', hex);
                            ">
                    </div>
                </div>
            </div>

            <!-- KARTU 3: MODEL GAYA VISUAL BACKGROUND TOKO & WALLPAPER KUSTOM -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                        <i class="fa-solid fa-shapes"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Model Gaya Visual Background Toko</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Pilih tata letak grafis latar belakang halaman utama dan wallpaper kustom</p>
                    </div>
                </div>

                <input type="hidden" id="set-bg-style" value="${d}">
                
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    <!-- 1. Hero Arch -->
                    <button type="button" onclick="selectBgStyle('hero_arch')" id="bg-opt-hero_arch"
                            class="bg-style-card flex flex-col items-center justify-center text-center p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer ${d==="hero_arch"?"border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <div class="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform ${d==="hero_arch"?"bg-[var(--color-primary)] text-white shadow-sm":"bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">
                            <i class="fa-solid fa-circle-half-stroke"></i>
                        </div>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Hero Arch</span>
                        <span class="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Header lengkung solid</span>
                    </button>

                    <!-- 2. Geometris 3D -->
                    <button type="button" onclick="selectBgStyle('geometric_3d')" id="bg-opt-geometric_3d"
                            class="bg-style-card flex flex-col items-center justify-center text-center p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer ${d==="geometric_3d"?"border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <div class="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform ${d==="geometric_3d"?"bg-[var(--color-primary)] text-white shadow-sm":"bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">
                            <i class="fa-solid fa-cube"></i>
                        </div>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Geometris 3D</span>
                        <span class="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Vektor sudut presisi</span>
                    </button>

                    <!-- 3. Diagonal Skew -->
                    <button type="button" onclick="selectBgStyle('diagonal_skew')" id="bg-opt-diagonal_skew"
                            class="bg-style-card flex flex-col items-center justify-center text-center p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer ${d==="diagonal_skew"?"border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <div class="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform ${d==="diagonal_skew"?"bg-[var(--color-primary)] text-white shadow-sm":"bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">
                            <i class="fa-solid fa-slash"></i>
                        </div>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Diagonal Skew</span>
                        <span class="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Aksen garis tegas</span>
                    </button>

                    <!-- 4. Dual-Tone -->
                    <button type="button" onclick="selectBgStyle('dual_tone')" id="bg-opt-dual_tone"
                            class="bg-style-card flex flex-col items-center justify-center text-center p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer ${d==="dual_tone"?"border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <div class="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform ${d==="dual_tone"?"bg-[var(--color-primary)] text-white shadow-sm":"bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">
                            <i class="fa-solid fa-layer-group"></i>
                        </div>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Dual-Tone</span>
                        <span class="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Header solid 2 warna</span>
                    </button>

                    <!-- 5. Minimalis -->
                    <button type="button" onclick="selectBgStyle('minimalist')" id="bg-opt-minimalist"
                            class="bg-style-card flex flex-col items-center justify-center text-center p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer col-span-2 sm:col-span-1 ${d==="minimalist"?"border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <div class="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform ${d==="minimalist"?"bg-[var(--color-primary)] text-white shadow-sm":"bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">
                            <i class="fa-solid fa-square"></i>
                        </div>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Minimalis</span>
                        <span class="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Polos bersih elegan</span>
                    </button>
                </div>

                <!-- Gambar / Wallpaper Background Kustom (Opsional) -->
                <div class="pt-3 border-t border-slate-200 dark:border-slate-700/80">
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <i class="fa-solid fa-image" style="color:var(--color-primary)"></i> Gambar / Wallpaper Background Kustom (Opsional)
                    </label>
                    <div class="flex gap-2">
                        <input autocomplete="off" id="set-bg-custom-url" value="${c(r.store.bgCustomUrl||"")}"
                               class="admin-input !py-3 bg-white dark:bg-slate-900 flex-1 shadow-sm text-xs"
                               placeholder="URL Gambar Background (Opsional, contoh: https://...)"
                               oninput="if(typeof window.applyBackgroundStyle==='function') window.applyBackgroundStyle(document.getElementById('set-bg-style').value, this.value)">
                        <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                            <i class="fa-solid fa-cloud-arrow-up sm:mr-1.5"></i> <span class="hidden sm:inline">Upload</span>
                            <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-bg-custom-url')">
                        </label>
                    </div>
                    <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium">
                        Jika diisi, gambar otomatis dipasang sebagai wallpaper latar belakang aplikasi dan halaman toko.
                    </p>
                </div>
            </div>

            <!-- KARTU 4: WAKTU OPERASIONAL, FOOTER & HADIAH -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-sm shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                        <i class="fa-solid fa-clock"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Operasional Publik &amp; Fitur Tambahan</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Jam buka toko, teks hak cipta footer, dan katalog tukar reward</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Jam Operasional Toko</label>
                        <input autocomplete='off' id="set-hours" value="${c(r.store.operationalHours||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Senin - Minggu (08:00 - 21:00 WIB)">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Teks Hak Cipta Footer</label>
                        <input autocomplete='off' id="set-credit" value="${c(r.store.footerCredit||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Toko Putri © 2026. All Rights Reserved.">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Katalog Tukar Hadiah di Beranda</label>
                    <select id="set-show-reward-catalog" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                        <option value="true" ${r.store.showRewardCatalog!==!1?"selected":""}>Ya, Tampilkan Katalog Hadiah</option>
                        <option value="false" ${r.store.showRewardCatalog===!1?"selected":""}>Sembunyikan</option>
                    </select>
                </div>
            </div>
        `}else e==="catalog"?(t="Tampilan Kategori & Merek",a="Kelola tata letak, model navigasi slider, dan visibilitas kategori produk serta brand di beranda",o="fa-palette",s={line:"bg-blue-500",box:"bg-blue-50 dark:bg-blue-900/30 text-blue-500"},l=`
            <!-- KARTU 1: TATA LETAK KATEGORI -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-blue-500 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-layer-group"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Gaya Tampilan &amp; Slider Kategori</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Atur model navigasi kategori produk untuk memudahkan pencarian barang oleh pelanggan</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Gaya Tampilan Kategori</label>
                        <select id="set-category-style" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="grid" ${r.store.categoryStyle==="grid"?"selected":""}>Grid Ikon (Kotak berjejer)</option>
                            <option value="pill" ${r.store.categoryStyle==="pill"?"selected":""}>Pill Horizontal Scroll (Kapsul geser)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Slider Kategori di Beranda</label>
                        <select id="set-show-categories" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${r.store.showCategories!==!1?"selected":""}>Tampilkan Slider Kategori</option>
                            <option value="false" ${r.store.showCategories===!1?"selected":""}>Sembunyikan</option>
                        </select>
                    </div>
                </div>

                <div class="p-3 bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 rounded-xl text-[11px] text-blue-700 dark:text-blue-300 flex items-start gap-2">
                    <i class="fa-solid fa-circle-info text-blue-500 mt-0.5"></i>
                    <span><b>Tips Desain:</b> Model <i>Pill Horizontal Scroll</i> sangat hemat ruang di layar HP, sedangkan <i>Grid Ikon</i> mempermudah pelanggan melihat seluruh kategori sekaligus.</span>
                </div>
            </div>

            <!-- KARTU 2: TATA LETAK MEREK (BRAND) -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-indigo-500 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-tags"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Gaya Tampilan &amp; Slider Merek / Brand</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Atur visualisasi merek mitra dagang resmi pada halaman depan toko</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Gaya Tampilan Merek</label>
                        <select id="set-brand-style" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="logo" ${r.store.brandStyle==="logo"||!r.store.brandStyle?"selected":""}>Logo Kotak (Grid Visual)</option>
                            <option value="text" ${r.store.brandStyle==="text"?"selected":""}>Pill Horizontal Scroll (Kapsul teks)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Slider Merek di Beranda</label>
                        <select id="set-show-brands" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${r.store.showBrands!==!1?"selected":""}>Tampilkan Slider Merek</option>
                            <option value="false" ${r.store.showBrands===!1?"selected":""}>Sembunyikan</option>
                        </select>
                    </div>
                </div>

                <div class="p-3 bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 rounded-xl text-[11px] text-indigo-700 dark:text-indigo-300 flex items-start gap-2">
                    <i class="fa-solid fa-circle-check text-indigo-500 mt-0.5"></i>
                    <span>Pelanggan dapat mengklik logo brand untuk langsung memfilter etalase hanya menampilkan barang dari merek tersebut.</span>
                </div>
            </div>
        `):e==="shipping"?(t="Pengiriman & Lokasi Toko",a="Atur nomor kontak admin, tarif dasar ongkir per kilometer, promo gratis ongkir, dan titik koordinat GPS toko",o="fa-motorcycle",s={line:"bg-amber-500",box:"bg-amber-50 dark:bg-amber-900/30 text-amber-500"},l=`
            <!-- KARTU 1: KONTAK & METODE PENGANTARAN -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-truck-ramp-box"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Kontak Admin &amp; Metode Pengantaran</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Nomor WhatsApp konfirmasi, tarif dasar ongkir kurir, dan alamat fisik toko</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Nomor WhatsApp Admin</label>
                        <input autocomplete='off' id="set-wa" value="${c(r.store.wa||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: 08123456789">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Ongkir per Kilometer (Rp)</label>
                        <input autocomplete='off' type="number" id="set-cost" value="${c(r.store.costPerKm||0)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: 2000">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Alamat Lengkap Toko</label>
                    <textarea id="set-address" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Nama jalan, nomor bangunan, RT/RW, kelurahan, kecamatan, kota/kabupaten...">${c(r.store.address||"")}</textarea>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Opsi Kirim ke Alamat (Kurir Toko)</label>
                        <select id="set-delivery-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${r.store.isDeliveryEnabled!==!1?"selected":""}>Aktif (Bisa diantar kurir)</option>
                            <option value="false" ${r.store.isDeliveryEnabled===!1?"selected":""}>Nonaktif (Hanya ambil di toko)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Opsi Ambil di Toko (Self Pickup)</label>
                        <select id="set-pickup-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${r.store.isPickupEnabled!==!1?"selected":""}>Aktif (Bisa ambil di kasir)</option>
                            <option value="false" ${r.store.isPickupEnabled===!1?"selected":""}>Nonaktif</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <!-- KARTU 2: PROMO GRATIS ONGKIR MINIMAL BELANJA -->
            <div class="p-4 sm:p-5 bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-truck-fast"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider">Promo Gratis Ongkir Otomatis</h4>
                        <p class="text-[10px] text-emerald-700 dark:text-emerald-400">Otomatis bebas ongkir saat total belanja pelanggan mencapai nominal batas minimal</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Status Promo</label>
                        <select id="set-free-shipping-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${r.store.freeShippingMinSpendEnabled===!0||r.store.freeShippingMinSpendEnabled==="true"?"selected":""}>Aktif (Bebas ongkir otomatis)</option>
                            <option value="false" ${r.store.freeShippingMinSpendEnabled!==!0&&r.store.freeShippingMinSpendEnabled!=="true"?"selected":""}>Nonaktif</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Minimal Belanja (Rp)</label>
                        <input autocomplete='off' type="number" id="set-free-shipping-amount" value="${c(r.store.freeShippingMinSpendAmount||0)}" min="0" step="1000" placeholder="Contoh: 1000000" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                        <span class="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">Contoh: 1000000 (Rp 1.000.000). Bilah progres belanja akan tampil di keranjang.</span>
                    </div>
                </div>
            </div>

            <!-- KARTU 3: KOTAK GEOLOKASI GPS CERDAS TOKO -->
            <div class="p-4 sm:p-5 bg-gradient-to-br from-blue-50/90 via-sky-50/70 to-indigo-50/50 dark:from-blue-950/30 dark:via-sky-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800/60 rounded-2xl shadow-sm space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm shadow-md shadow-blue-500/20 shrink-0">
                            <i class="fa-solid fa-map-location-dot"></i>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold text-blue-950 dark:text-blue-200 uppercase tracking-wider">Lokasi Toko &amp; Pin Google Maps</h4>
                            <p class="text-[10px] text-blue-700 dark:text-blue-400">Tinggal tempel link atau angka koordinat dari Google Maps — sistem langsung mengekstrak titik presisi</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button type="button" id="btn-preview-maps" onclick="previewStoreOnMaps()" class="text-[11px] font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-slate-700 shadow-sm transition-all flex items-center gap-1.5 active:scale-95" title="Buka dan Cek Titik di Google Maps">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> Cek di Maps
                        </button>
                        <button type="button" onclick="detectAdminGPS()" class="text-[11px] font-bold px-3 py-1.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-all flex items-center gap-1.5 active:scale-95" title="Ambil GPS Perangkat Saat Ini">
                            <i class="fa-solid fa-crosshairs"></i> GPS Saya
                        </button>
                    </div>
                </div>

                <!-- Input Cerdas Tempel Link / Koordinat -->
                <div>
                    <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider flex items-center justify-between">
                        <span>Tempel Link / Koordinat Google Maps</span>
                        <span class="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-100/70 dark:bg-blue-900/50 px-2 py-0.5 rounded-md">Smart Auto-Extract</span>
                    </label>
                    <div class="relative flex items-center">
                        <input autocomplete='off' id="set-maps-smart-input" 
                            value="${c(r.store.lat&&r.store.lng?`${r.store.lat}, ${r.store.lng}`:"-7.82308507053985, 112.0988374794464")}"
                            placeholder="Tempel di sini: -7.823085, 112.098837 atau link Google Maps" 
                            class="admin-input !py-3 !pr-24 bg-white dark:bg-slate-900 shadow-sm w-full font-mono text-xs text-slate-800 dark:text-slate-100"
                            oninput="handleSmartMapsInput(this.value)"
                            onpaste="setTimeout(() => handleSmartMapsInput(this.value), 50)">
                        <button type="button" onclick="pasteFromClipboardToMapsInput()" class="absolute right-2 px-3 py-1.5 text-[10px] font-bold rounded-lg bg-blue-50 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700 hover:bg-blue-100 active:scale-95 transition-all flex items-center gap-1">
                            <i class="fa-solid fa-paste"></i> Tempel
                        </button>
                    </div>
                    <div id="maps-smart-feedback" class="text-[10px] mt-1.5 font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-circle-check"></i> <span>Koordinat aktif: Presisi tinggi terhubung ke kalkulator ongkir kurir</span>
                    </div>
                </div>

                <!-- Kolom Terpisah Latitude & Longitude Presisi Tinggi -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-blue-100 dark:border-blue-900/40">
                    <div>
                        <label class="block text-[10px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Latitude Toko (Garis Lintang)</label>
                        <input autocomplete='off' id="set-lat" value="${c(r.store.lat||"-7.82308507053985")}" class="admin-input !py-2.5 bg-white dark:bg-slate-900 shadow-sm text-xs font-mono w-full" placeholder="-7.82308507053985" oninput="handleManualCoordChange()">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Longitude Toko (Garis Bujur)</label>
                        <input autocomplete='off' id="set-lng" value="${c(r.store.lng||"112.0988374794464")}" class="admin-input !py-2.5 bg-white dark:bg-slate-900 shadow-sm text-xs font-mono w-full" placeholder="112.0988374794464" oninput="handleManualCoordChange()">
                    </div>
                </div>
            </div>
        `):e==="payment"?(t="Metode Pembayaran QRIS",a="Konfigurasi barcode QRIS resmi toko untuk penerimaan pembayaran instan via e-wallet dan m-banking",o="fa-qrcode",s={line:"bg-indigo-500",box:"bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500"},l=`
            <!-- KARTU 1: INTEGRASI BARCODE QRIS TOKO -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-indigo-500 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-qrcode"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Barcode Pembayaran QRIS Nasional</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Mendukung scan dari GoPay, OVO, DANA, ShopeePay, BCA, Mandiri, BRI, BNI, dan seluruh bank</p>
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">URL Gambar Barcode QRIS</label>
                    <div class="flex gap-2">
                        <input autocomplete='off' id="set-qris-url" value="${c(r.payment?.qrisUrl||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm flex-1 text-xs" placeholder="URL file gambar QRIS atau klik tombol upload di kanan">
                        <label class="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                            <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload QRIS
                            <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-qris-url')">
                        </label>
                    </div>
                </div>

                <!-- PREVIEW BOX QRIS -->
                ${r.payment?.qrisUrl?`
                    <div class="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl flex flex-col sm:flex-row items-center gap-4 shadow-sm">
                        <div class="p-2 bg-white rounded-xl border border-slate-200 dark:border-slate-600 shadow-inner">
                            <img src="${c(r.payment.qrisUrl)}" alt="Preview QRIS" class="w-28 h-28 object-contain rounded-lg">
                        </div>
                        <div class="text-center sm:text-left space-y-1">
                            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-bold">
                                <i class="fa-solid fa-circle-check"></i> QRIS Siap Digunakan
                            </div>
                            <h5 class="text-xs font-bold text-slate-800 dark:text-slate-100">Barcode QRIS Aktif di Halaman Checkout</h5>
                            <p class="text-[11px] text-slate-500 dark:text-slate-400">Gambar barcode di atas akan otomatis ditampilkan dengan jelas saat pembeli memilih opsi pembayaran QRIS.</p>
                        </div>
                    </div>
                `:`
                    <div class="p-6 bg-white dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl text-center space-y-2">
                        <div class="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 mx-auto flex items-center justify-center text-xl">
                            <i class="fa-solid fa-qrcode"></i>
                        </div>
                        <h5 class="text-xs font-bold text-slate-700 dark:text-slate-200">Belum Ada Barcode QRIS</h5>
                        <p class="text-[11px] text-slate-400 max-w-sm mx-auto">Klik tombol <b>Upload QRIS</b> di atas untuk mengunggah gambar barcode QRIS toko Anda agar pembeli bisa membayar secara digital.</p>
                    </div>
                `}

                <div class="p-3 bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 rounded-xl text-[11px] text-indigo-700 dark:text-indigo-300 flex items-start gap-2">
                    <i class="fa-solid fa-shield-halved text-indigo-500 mt-0.5"></i>
                    <span><b>Keamanan Transaksi:</b> Pastikan barcode QRIS yang diunggah memiliki nama toko Anda yang terdaftar resmi di penyedia jasa pembayaran (PJSP).</span>
                </div>
            </div>
        `):e==="config"?(t="Sistem & Integrasi Cloud",a="Konfigurasi jembatan endpoint Google Apps Script untuk cloud storage gambar produk, banner promosi, dan media drive",o="fa-laptop-code",s={line:"bg-rose-500",box:"bg-rose-50 dark:bg-rose-900/30 text-rose-500"},l=`
            <!-- KARTU 1: INTEGRASI GOOGLE APPS SCRIPT (GAS) -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-rose-500 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-cloud-arrow-up"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Google Apps Script Endpoint (Media Drive)</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Jalur serverless gratis untuk upload foto produk & bukti transfer langsung ke Google Drive toko</p>
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Web App URL Endpoint</label>
                    <input autocomplete='off' id="set-gas-url" value="${c(r.config?.gasUrl||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full font-mono text-xs" placeholder="https://script.google.com/macros/s/.../exec">
                    <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium">Tempel URL hasil deploy Web App dari Google Apps Script project toko Anda.</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl space-y-2">
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full ${r.config?.gasUrl?"bg-emerald-500":"bg-amber-500"} animate-pulse"></span>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200">
                            ${r.config?.gasUrl?"Integrasi Cloud Storage Aktif":"Endpoint Belum Dikonfigurasi"}
                        </span>
                    </div>
                    <ul class="text-[11px] text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
                        <li>Semua file gambar produk yang diupload admin akan disimpan aman di Google Drive Anda.</li>
                        <li>Tidak membebani memori hosting lokal dan menjaga loading website tetap ringan.</li>
                        <li>Mendukung konversi otomatis ke link thumbnail instan untuk etalase katalog.</li>
                    </ul>
                </div>
            </div>
        `):e==="operasional"&&(t="Operasional & Perpajakan",a="Konfigurasi pembatasan inventaris stok produk otomatis, skema kalkulasi PPN transaksi, dan program poin loyalitas member",o="fa-sliders",s={line:"bg-violet-500",box:"bg-violet-50 dark:bg-violet-900/30 text-violet-500"},l=`
            <!-- KARTU 1: MANAJEMEN STOK PRODUK -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-violet-500 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-boxes-stacked"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Manajemen Inventaris &amp; Kontrol Stok</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Atur perilaku katalog toko saat kuantitas stok produk mencapai angka 0</p>
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Mode Pengurangan &amp; Pembatasan Stok</label>
                    <select id="set-use-stock" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                        <option value="true" ${r.store.useStock===!0?"selected":""}>Aktif — Otomatis tandai HABIS jika stok 0 (Pelanggan tidak bisa checkout)</option>
                        <option value="false" ${r.store.useStock!==!0?"selected":""}>Nonaktif — Stok tak terbatas (Cocok untuk barang pre-order / tanpa pembatasan stok)</option>
                    </select>
                </div>

                <div class="p-3 bg-violet-50/60 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/40 rounded-xl text-[11px] text-violet-700 dark:text-violet-300 flex items-start gap-2">
                    <i class="fa-solid fa-circle-info text-violet-500 mt-0.5"></i>
                    <span>Saat mode aktif, setiap transaksi kasir atau checkout online akan otomatis memotong stok barang secara real-time.</span>
                </div>
            </div>

            <!-- KARTU 2: PERHITUNGAN PAJAK PPN -->
            <div class="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-receipt"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Konfigurasi Pajak Pertambahan Nilai (PPN)</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400">Atur skema perpajakan resmi pada kalkulasi struk kasir, invoice A4, dan checkout belanja</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Status Perhitungan PPN</label>
                        <select id="set-ppn-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${r.store.ppnEnabled===!0?"selected":""}>Aktif (Kalkulasi PPN Dihitung)</option>
                            <option value="false" ${r.store.ppnEnabled!==!0?"selected":""}>Nonaktif (Bebas PPN)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tipe Perhitungan</label>
                        <select id="set-ppn-type" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="exclusive" ${r.store.ppnType!=="inclusive"?"selected":""}>Eksklusif (Ditambah di checkout)</option>
                            <option value="inclusive" ${r.store.ppnType==="inclusive"?"selected":""}>Inklusif (Sudah termasuk di harga)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tarif PPN (%)</label>
                        <input autocomplete='off' type="number" id="set-ppn-rate" value="${c(r.store.ppnRate||11)}" min="0" max="100" step="0.1" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="11">
                    </div>
                </div>

                <div class="p-3 bg-purple-50/60 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40 rounded-xl text-[11px] text-purple-700 dark:text-purple-300 flex items-start gap-2">
                    <i class="fa-solid fa-file-invoice-dollar text-purple-500 mt-0.5"></i>
                    <span><b>Penjelasan Skema:</b> <i>Eksklusif</i> akan menambahkan nilai pajak di atas subtotal belanja pelanggan. <i>Inklusif</i> akan menguraikan nilai pajak tanpa menambah total yang harus dibayar pembeli.</span>
                </div>
            </div>

            <!-- KARTU 3: PROGRAM POIN BELANJA & LOYALITAS MEMBER -->
            <div class="p-4 sm:p-5 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-2xl shadow-sm space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center text-sm shadow-sm shrink-0">
                        <i class="fa-solid fa-coins"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">Program Poin Belanja &amp; Loyalitas Member</h4>
                        <p class="text-[10px] text-amber-700 dark:text-amber-400">Berikan poin belanja otomatis pada produk yang tidak memiliki poin langsung dengan kelipatan nominal belanja</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Status Program Poin</label>
                        <select id="set-spend-points-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${r.store.spendPointsEnabled===!0||r.store.spendPointsEnabled==="true"?"selected":""}>Aktif (Poin Dihitung)</option>
                            <option value="false" ${r.store.spendPointsEnabled!==!0&&r.store.spendPointsEnabled!=="true"?"selected":""}>Nonaktif</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Minimal Belanja (Kelipatan Rp)</label>
                        <input autocomplete='off' type="number" id="set-spend-points-threshold" value="${c(r.store.spendPointsThreshold||1e5)}" min="1000" step="1000" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="100000">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Perolehan Poin per Kelipatan</label>
                        <input autocomplete='off' type="number" id="set-spend-points-per-threshold" value="${c(r.store.spendPointsPerThreshold||1)}" min="1" step="1" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="1">
                    </div>
                </div>

                <div class="p-3 bg-white/80 dark:bg-slate-900/80 border border-amber-200/80 dark:border-amber-800/40 rounded-xl text-[11px] text-amber-800 dark:text-amber-200 flex items-start gap-2">
                    <i class="fa-solid fa-circle-info text-amber-500 mt-0.5 shrink-0"></i>
                    <span><b>Sistem Hibrida Cerdas:</b> Produk yang sudah memiliki poin reward langsung akan tetap memberikan poin per item. Untuk produk tanpa poin, nilai total belanjanya akan diakumulasikan dan dihitung poinnya sesuai kelipatan minimal belanja di atas (contoh: Belanja Rp 100.000 = 1 poin, Rp 200.000 = 2 poin).</span>
                </div>
            </div>
        `);let n=`
    <div class="w-full max-w-5xl mx-auto pb-10 text-sm fade-in-scale">
        <div class="mb-5 flex items-center justify-between">
            <button onclick="rAdmSet()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold text-xs shadow-sm transition-all active:scale-95">
                <i class="fa-solid fa-arrow-left"></i> Kembali ke Menu Pengaturan
            </button>
            <button onclick="saveAdminSettings('${e}')" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-bold text-xs shadow-sm transition-all active:scale-95 hover:opacity-95" style="background: var(--color-primary)">
                <i class="fa-solid fa-floppy-disk"></i> Simpan
            </button>
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden mb-6 relative">
            <div class="absolute top-0 left-0 w-full h-1.5 ${s.line}"></div>
            <div class="p-6 sm:p-8 flex-1 mt-2">
                <div class="mb-6 flex items-center gap-3.5 pb-4 border-b border-slate-100 dark:border-slate-700/80">
                    <div class="w-12 h-12 rounded-2xl ${s.box} flex items-center justify-center shrink-0 text-xl shadow-sm"><i class="fa-solid ${o}"></i></div> 
                    <div>
                        <h3 class="font-bold text-slate-800 dark:text-white text-base tracking-wide leading-tight">${t}</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${a||"Konfigurasi pengaturan toko"}</p>
                    </div>
                </div>
                <div class="space-y-5">
                    ${l}
                </div>
            </div>
        </div>

        <button onclick="saveAdminSettings('${e}')" class="btn-primary py-4 text-base shadow-glow w-full !rounded-2xl flex items-center justify-center gap-2 font-bold tracking-wide"><i class="fa-solid fa-floppy-disk"></i> Simpan Perubahan Pengaturan</button>
    </div>
    `;if(P("admin-content",n),e==="profile"){const i=r.store.uiTheme||"",d=r.store.themeColor||"#10b981";(i==="custom"||!Pe?.[i])&&setTimeout(()=>{const m=document.getElementById("custom-color-chip");if(m){m.style.background=d;const b=m.querySelector("i");b&&(b.style.color="#fff")}},50)}},ns=async e=>{if(!qe){fe(!0),C("Menyimpan...");try{if(e==="profile")r.store.name=S("set-name"),r.store.slogan=S("set-slogan"),r.store.logo=M(S("set-logo")),r.store.description=S("set-description"),r.store.email=S("set-email"),r.store.showRewardCatalog=S("set-show-reward-catalog")==="true",r.store.operationalHours=S("set-hours"),r.store.footerCredit=S("set-credit"),r.store.themeColor=S("set-theme-color"),r.store.uiTheme=S("set-ui-theme"),r.store.bgStyle=S("set-bg-style")||"minimalist",r.store.bgCustomUrl=M(S("set-bg-custom-url")),localStorage.setItem("freshmart_theme_color",r.store.themeColor),localStorage.setItem("freshmart_ui_theme",r.store.uiTheme),localStorage.setItem("freshmart_bg_style",r.store.bgStyle),localStorage.setItem("freshmart_bg_custom_url",r.store.bgCustomUrl||""),Te(r.store.uiTheme,r.store.themeColor),Ce(r.store.bgStyle,r.store.bgCustomUrl);else if(e==="catalog")r.store.categoryStyle=S("set-category-style"),r.store.brandStyle=S("set-brand-style"),r.store.showCategories=S("set-show-categories")==="true",r.store.showBrands=S("set-show-brands")==="true";else if(e==="shipping"){r.store.wa=S("set-wa").replace(/\D/g,""),r.store.address=S("set-address"),r.store.costPerKm=S("set-cost"),r.store.isDeliveryEnabled=S("set-delivery-enabled")==="true",r.store.isPickupEnabled=S("set-pickup-enabled")==="true",r.store.freeShippingMinSpendEnabled=S("set-free-shipping-enabled")==="true",r.store.freeShippingMinSpendAmount=Math.max(0,parseFloat(S("set-free-shipping-amount"))||0);let a=(S("set-lat")||"").trim(),o=(S("set-lng")||"").trim();const s=(S("set-maps-smart-input")||"").trim();if(s&&typeof window.parseGeoCoordinates=="function"){const l=window.parseGeoCoordinates(s);l&&(a=l.lat,o=l.lng)}(!a||!o)&&(a="-7.82308507053985",o="112.0988374794464"),r.store.lat=a,r.store.lng=o}else e==="payment"?(r.payment||(r.payment={}),r.payment.qrisUrl=M(S("set-qris-url"))):e==="config"?(r.config||(r.config={}),r.config.gasUrl=S("set-gas-url"),u("Pengaturan GAS URL tersimpan.")):e==="operasional"&&(r.store.useStock=S("set-use-stock")==="true",r.store.ppnEnabled=S("set-ppn-enabled")==="true",r.store.ppnType=S("set-ppn-type")||"exclusive",r.store.ppnRate=parseFloat(S("set-ppn-rate"))||11,r.store.spendPointsEnabled=S("set-spend-points-enabled")==="true",r.store.spendPointsThreshold=Math.max(1,parseFloat(S("set-spend-points-threshold"))||1e5),r.store.spendPointsPerThreshold=Math.max(1,parseFloat(S("set-spend-points-per-threshold"))||1),bt());const t={profile:"store",catalog:"store",shipping:"store",operasional:"store",payment:"payment",config:"config"};typeof window.saveApp=="function"&&await window.saveApp([t[e]||"store"]),e==="profile"||e==="config"?(u(e==="config"?"Sistem Diperbarui! Memuat Ulang...":"Warna Berubah! Memuat Ulang..."),setTimeout(()=>location.reload(),1500)):(u("Tersimpan!"),Wt())}catch{u("Gagal menyimpan pengaturan")}finally{fe(!1),$()}}},ft=e=>{const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null,o=document.getElementById("maps-smart-feedback"),s=document.getElementById("set-lat"),l=document.getElementById("set-lng");a?(s&&(s.value=a.lat),l&&(l.value=a.lng),o&&(o.className="text-[10px] mt-1.5 font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5",o.innerHTML=`<i class="fa-solid fa-circle-check text-xs"></i> <span>Akurat! Koordinat terdeteksi: <b>${a.lat}, ${a.lng}</b></span>`)):e&&e.trim().length>3?o&&(o.className="text-[10px] mt-1.5 font-medium text-amber-600 dark:text-amber-400 flex items-center gap-1.5",o.innerHTML='<i class="fa-solid fa-triangle-exclamation text-xs"></i> <span>Pola belum terbaca. Coba tempel format: <code>-7.823085, 112.098837</code> atau link Google Maps</span>'):o&&(o.className="text-[10px] mt-1.5 font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5",o.innerHTML='<i class="fa-solid fa-circle-info text-blue-500"></i> <span>Tempel tautan Maps atau angka koordinat dari Google Maps</span>')},ds=()=>{const e=document.getElementById("set-lat"),t=document.getElementById("set-lng"),a=document.getElementById("set-maps-smart-input");e&&t&&a&&e.value&&t.value&&(a.value=`${e.value.trim()}, ${t.value.trim()}`)},cs=async()=>{const e=document.getElementById("set-maps-smart-input");if(e){try{if(navigator.clipboard&&navigator.clipboard.readText){const t=await navigator.clipboard.readText();if(t){e.value=t,ft(t),u("Teks berhasil ditempel dari clipboard!");return}}}catch{}e.focus(),u("Silakan tekan Ctrl+V atau tahan untuk menempel")}},ps=()=>{const e=document.getElementById("set-lat"),t=document.getElementById("set-lng");let a=e?e.value.trim():"",o=t?t.value.trim():"";if(!a||!o){const s=document.getElementById("set-maps-smart-input");if(s&&s.value&&typeof window.parseGeoCoordinates=="function"){const l=window.parseGeoCoordinates(s.value);l&&(a=l.lat,o=l.lng)}}a&&o?window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${a},${o}`)}`,"_blank"):u("Masukkan koordinat toko terlebih dahulu")},ms=()=>{if(!navigator.geolocation){u("Browser tidak mendukung sensor GPS");return}u("Sedang mendeteksi lokasi GPS..."),navigator.geolocation.getCurrentPosition(e=>{const t=e.coords.latitude.toString(),a=e.coords.longitude.toString(),o=document.getElementById("set-maps-smart-input");o&&(o.value=`${t}, ${a}`),ft(`${t}, ${a}`),u("Lokasi GPS berhasil didapatkan!")},()=>{u("Gagal mengambil GPS perangkat. Pastikan izin lokasi aktif.")},{enableHighAccuracy:!0,timeout:15e3})},us=()=>{const e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(r,null,2)),t=document.createElement("a");t.href=e,t.download=`backup_freshmart_${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(t),t.click(),t.remove(),u("Backup diunduh!")},bs=e=>{const t=e.target.files[0];if(!t)return;const a=new FileReader;a.onload=async o=>{try{const s=JSON.parse(o.target.result);Object.assign(r,s),typeof window.saveApp=="function"&&await window.saveApp(),u("Data dipulihkan!"),setTimeout(()=>location.reload(),1e3)}catch{u("Gagal memulihkan data!")}},a.readAsText(t)};window.syncAppMeta=rs;window.rAdmSet=Wt;window.selectPresetTheme=os;window.selectBgStyle=is;window.openSettingForm=ls;window.saveAdminSettings=ns;window.backupData=us;window.restoreData=bs;window.handleSmartMapsInput=ft;window.handleManualCoordChange=ds;window.pasteFromClipboardToMapsInput=cs;window.previewStoreOnMaps=ps;window.detectAdminGPS=ms;let R=new Date().getFullYear(),N=0,re="menu",oe=null;const ie=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],gs=e=>{if(typeof window.getEffHpp=="function")return window.getEffHpp(e);const t=r.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return 0;if(e.variantName&&t.variants){const a=t.variants.find(o=>o.name===e.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(t.hpp)||0},Dt=new Map,fs=2*60*1e3,xt=async e=>{const t=Dt.get(e);if(t&&Date.now()-t.timestamp<fs)return t.data;const a={};for(let o=1;o<=12;o++)a[o]={omset:0,ppn:0,hpp:0,disc:0,orderCount:0};try{const o=new Date(e,0,1),s=new Date(e+1,0,1);(await w.collection("freshmart_orders").where("timestamp",">=",G.firestore.Timestamp.fromDate(o)).where("timestamp","<",G.firestore.Timestamp.fromDate(s)).limit(5e3).get()).forEach(i=>{const d=i.data();if(d.status==="Dibatalkan"||!d.timestamp||!d.timestamp.toDate)return;const p=d.timestamp.toDate().getMonth()+1;if(!a[p])return;const m=d.payment?.dppAmount!==void 0&&d.payment?.dppAmount!==null?parseFloat(d.payment.dppAmount):parseFloat(d.payment?.subtotal)||0;a[p].omset+=m,a[p].ppn+=parseFloat(d.payment?.ppnAmount)||0,a[p].disc+=parseFloat(d.payment?.productDiscount)||0,a[p].orderCount++,(d.items||[]).forEach(b=>{const f=b.hpp!==void 0&&b.hpp!==null?parseFloat(b.hpp):gs(b);a[p].hpp+=(parseFloat(f)||0)*(parseFloat(b.qty)||0)})})}catch(o){console.error("Gagal memuat data pajak:",o),u("Gagal memuat data periode ini!")}return Dt.set(e,{data:a,timestamp:Date.now()}),a},Oe=()=>oe?(N===0?Object.keys(oe):[N]).reduce((t,a)=>{const o=oe[a];return t.omset+=o.omset,t.ppn+=o.ppn,t.hpp+=o.hpp,t.disc+=o.disc,t.orderCount+=o.orderCount,t},{omset:0,ppn:0,hpp:0,disc:0,orderCount:0}):{omset:0,ppn:0,hpp:0,disc:0,orderCount:0},ht=()=>{const e=r.taxSettings?.monthlyExpenses||{};return(N===0?Array.from({length:12},(a,o)=>o+1):[N]).reduce((a,o)=>a+(parseFloat(e[`${R}-${o}`])||0),0)},xs=async()=>{P("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),oe=await xt(R),kt()},kt=()=>{const e=Array.from({length:6},(o,s)=>new Date().getFullYear()-4+s),t=[{k:"summary",l:"Ringkasan PPN",i:"fa-receipt"},{k:"income",l:"Laba Rugi",i:"fa-chart-pie"},{k:"balance",l:"Neraca",i:"fa-scale-balanced"},{k:"settings",l:"Pengaturan",i:"fa-gear"}];re==="menu"&&(re="summary");const a=`
    <div class="mb-5 flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                <i class="fa-solid fa-file-invoice-dollar text-base"></i>
            </div>
            <div>
                <h2 class="font-bold text-sm text-slate-800 dark:text-slate-100 uppercase tracking-widest leading-tight">Pajak &amp; Keuangan</h2>
                <p class="text-[9px] font-bold text-slate-500 mt-0.5">Rekap Omset, PPN, Laba Rugi, &amp; Neraca Toko</p>
            </div>
        </div>
        
        ${re==="settings"?"":`
        <div class="flex items-center gap-2">
            <select id="tax-year-select" onchange="changeTaxYear(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                ${e.map(o=>`<option value="${o}" ${o===R?"selected":""}>${o}</option>`).join("")}
            </select>
            <select id="tax-month-select" onchange="changeTaxMonth(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                <option value="0" ${N===0?"selected":""}>Setahun Penuh</option>
                ${ie.map((o,s)=>`<option value="${s+1}" ${N===s+1?"selected":""}>${o} ${R}</option>`).join("")}
            </select>
        </div>
        `}
    </div>

    <!-- Sub-Tab Navigation Bar -->
    <div class="flex items-center gap-2 mb-5 overflow-x-auto hide-scrollbar pb-1">
        ${t.map(o=>{const s=re===o.k;return`
            <button onclick="switchTaxTab('${o.k}')" class="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2 shrink-0 ${s?"primary-bg text-white shadow-glow":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[rgba(var(--color-primary-rgb),0.4)]"}">
                <i class="fa-solid ${o.i} text-xs"></i>
                <span>${o.l}</span>
            </button>`}).join("")}
    </div>
    `;P("admin-content",`
    <div class="max-w-5xl mx-auto pb-10 text-sm fade-in-scale">
        <div class="mb-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-4 flex items-start gap-3 text-xs font-semibold text-amber-800 dark:text-amber-300 shadow-xs">
            <i class="fa-solid fa-circle-info text-amber-500 text-base shrink-0 mt-0.5"></i>
            <span class="leading-relaxed">Halaman ini adalah <b>alat bantu rekap internal</b> Omset, PPN, Laba Rugi, dan Neraca dari data transaksi toko. Bukan pengganti konsultan pajak/akuntan — validasi kembali angkanya sebelum digunakan untuk pelaporan SPT resmi.</span>
        </div>

        ${a}

        <div id="tax-content"></div>
    </div>`),Qe()},hs=e=>{re=e,kt()},ks=async e=>{R=parseInt(e,10),P("tax-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),oe=await xt(R),Qe()},vs=e=>{N=parseInt(e,10),Qe()},Qe=()=>{re==="summary"?zt():re==="income"?vt():re==="balance"?wt():re==="settings"&&Jt()},zt=()=>{const e=Oe(),t=N===0?`Tahun ${R}`:`${ie[N-1]} ${R}`,a=e.omset-e.disc,o=Array.from({length:12},(s,l)=>l+1).map(s=>{const l=oe?oe[s]:{omset:0,ppn:0,orderCount:0};return`<tr class="${N===s?"bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.14)] font-bold":"hover:bg-slate-50 dark:hover:bg-slate-700/30"} border-b border-slate-100 dark:border-slate-700/50 last:border-0 transition-colors">
            <td class="py-3 px-4 text-xs font-bold text-slate-700 dark:text-slate-200">${ie[s-1]}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-800 dark:text-white text-right">${x(l.omset)}</td>
            <td class="py-3 px-4 text-xs font-bold text-right" style="color:var(--color-primary)">${x(l.ppn)}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">${l.orderCount}</td>
        </tr>`}).join("");P("tax-content",`
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div class="card-modern p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Omset Bruto (${t})</p>
                <p class="text-base sm:text-xl font-bold text-slate-800 dark:text-white truncate">${x(e.omset)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">${e.orderCount} pesanan</p>
            </div>
            <div class="card-modern p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-minus mr-1"></i>Diskon Produk</p>
                <p class="text-base sm:text-xl font-bold text-rose-500 truncate">${x(e.disc)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Potongan diskon</p>
            </div>
            <div class="card-modern p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">DPP (Dasar Pengenaan Pajak)</p>
                <p class="text-base sm:text-xl font-bold text-slate-800 dark:text-white truncate">${x(a)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Omset bersih</p>
            </div>
            <div class="card-modern p-5 flex flex-col justify-between border-[rgba(var(--color-primary-rgb),0.4)] relative overflow-hidden" style="background: rgba(var(--color-primary-rgb),0.04)">
                <div class="absolute -right-4 -bottom-4 w-20 h-20 rounded-full blur-xl pointer-events-none" style="background: rgba(var(--color-primary-rgb),0.15)"></div>
                <p class="text-[9px] font-bold uppercase tracking-widest mb-1.5" style="color:var(--color-primary)"><i class="fa-solid fa-file-invoice-dollar mr-1"></i>PPN Keluaran</p>
                <p class="text-base sm:text-xl font-bold truncate" style="color:var(--color-primary)">${x(e.ppn)}</p>
                <p class="text-[10px] font-bold mt-1 opacity-80" style="color:var(--color-primary)">Wajib disetor ke negara</p>
            </div>
        </div>
        <div class="card-modern overflow-hidden">
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-700/70 flex items-center justify-between">
                <h4 class="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-widest">Rincian Per Bulan — ${R}</h4>
                <button onclick="openTaxDocPreview('summary')" class="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-[10px] font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 active:scale-95">
                    <i class="fa-solid fa-print"></i> Preview &amp; Cetak
                </button>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-700/70">
                            <th class="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Bulan</th>
                            <th class="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Omset</th>
                            <th class="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">PPN Keluaran</th>
                            <th class="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Pesanan</th>
                        </tr>
                    </thead>
                    <tbody>${o}</tbody>
                </table>
            </div>
        </div>
    `)},vt=()=>{const e=Oe(),t=N===0?`Tahun ${R}`:`${ie[N-1]} ${R}`,a=e.omset-e.disc-e.hpp,o=N===0?null:`${R}-${N}`,s=ht(),l=a-s,n=r.taxSettings?.taxScheme||"umkm_final";let i,d,p;n==="umkm_final"?(i=.5,d=e.omset,p="PPh Final UMKM (0,5% × Omset)"):n==="badan_normal"?(i=22,d=Math.max(0,l),p="PPh Badan (22% × Laba Bersih)"):(i=parseFloat(r.taxSettings?.customTaxRate)||0,d=Math.max(0,l),p=`PPh Custom (${i}% × Laba Bersih)`);const m=d*(i/100),b=l-m;let f="";if(N===0)f=Array.from({length:12},(h,g)=>g+1).map(h=>{const g=`${R}-${h}`,v=(r.taxSettings?.monthlyExpenses||{})[g]||0;return`<div class="flex items-center justify-between gap-2 py-2 border-b border-slate-100 dark:border-slate-700/50 last:border-0">
                <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${ie[h-1]} ${R}</span>
                <input type="number" min="0" value="${v}" onchange="saveMonthlyExpense('${g}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>`}).join("");else{const h=(r.taxSettings?.monthlyExpenses||{})[o]||0;f=`<div class="flex items-center justify-between gap-2 py-2">
            <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${ie[N-1]} ${R}</span>
            <input type="number" min="0" value="${h}" onchange="saveMonthlyExpense('${o}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
        </div>`}P("tax-content",`
        <div class="card-modern p-6 sm:p-8 space-y-4">
            <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
                <div>
                    <h4 class="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm uppercase tracking-widest">Laporan Laba Rugi — ${t}</h4>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Estimasi pendapatan &amp; beban usaha</p>
                </div>
                <button onclick="openTaxDocPreview('income')" class="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-[10px] font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 active:scale-95">
                    <i class="fa-solid fa-print"></i> Preview &amp; Cetak
                </button>
            </div>
            <div class="space-y-3 text-xs sm:text-sm">
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">Omset Bruto</span><span class="font-bold text-slate-800 dark:text-slate-100">${x(e.omset)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Diskon Produk</span><span class="font-bold text-rose-500">-${x(e.disc)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) HPP (Harga Pokok Penjualan)</span><span class="font-bold text-rose-500">-${x(e.hpp)}</span></div>
                <div class="flex justify-between py-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Kotor</span><span class="font-bold text-emerald-500">${x(a)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Biaya Operasional</span><span class="font-bold text-rose-500">-${x(s)}</span></div>
                <div class="flex justify-between py-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Bersih Sebelum Pajak</span><span class="font-bold" style="color:var(--color-primary)">${x(l)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Estimasi ${p}</span><span class="font-bold text-rose-500">-${x(m)}</span></div>
                <div class="flex justify-between py-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2"><span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Laba Bersih Setelah Pajak (Estimasi)</span><span class="font-extrabold text-sm sm:text-base" style="color:var(--color-primary)">${x(b)}</span></div>
            </div>

            <div class="mt-8 pt-5 border-t border-dashed border-slate-200 dark:border-slate-700">
                <h5 class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5"><i class="fa-solid fa-pen" style="color:var(--color-primary)"></i> Input Biaya Operasional (Manual)</h5>
                <p class="text-[10px] font-bold text-slate-400 mb-4">Contoh: sewa tempat, gaji karyawan, listrik, internet, dll. Sistem tidak melacak biaya ini otomatis.</p>
                <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                    ${f}
                </div>
            </div>
        </div>
    `)},ws=async(e,t)=>{const a=parseFloat(t)||0;r.taxSettings||(r.taxSettings={}),r.taxSettings.monthlyExpenses||(r.taxSettings.monthlyExpenses={}),r.taxSettings.monthlyExpenses[e]=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),vt()}catch{u("Gagal menyimpan biaya operasional!")}},wt=()=>{const e=Je(),t=r.taxSettings?.balanceSheet||{kas:0,piutang:0,hutang:0},a=(parseFloat(t.kas)||0)+(parseFloat(t.piutang)||0)+e.assetHpp,o=parseFloat(t.hutang)||0,s=a-o;P("tax-content",`
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- ASET CARD -->
            <div class="card-modern p-6 space-y-3 relative overflow-hidden">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                    <h4 class="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-widest flex items-center gap-2">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                            <i class="fa-solid fa-arrow-down-wide-short text-xs"></i>
                        </div>
                        <span>ASET (Aktiva)</span>
                    </h4>
                </div>
                <div class="space-y-3">
                    <div class="flex items-center justify-between gap-2 py-1">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Kas &amp; Bank (manual)</span>
                        <input type="number" min="0" value="${t.kas||0}" onchange="saveBalanceField('kas', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-1">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Piutang Usaha (manual)</span>
                        <input type="number" min="0" value="${t.piutang||0}" onchange="saveBalanceField('piutang', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-2.5 rounded-xl px-3 border border-[rgba(var(--color-primary-rgb),0.3)]" style="background: rgba(var(--color-primary-rgb),0.06)">
                        <span class="text-xs font-bold" style="color:var(--color-primary)">Persediaan Barang (Otomatis)</span>
                        <span class="text-xs font-bold" style="color:var(--color-primary)">${x(e.assetHpp)}</span>
                    </div>
                    <div class="flex justify-between pt-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2">
                        <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-widest">Total Aset</span>
                        <span class="font-bold text-xs sm:text-sm" style="color:var(--color-primary)">${x(a)}</span>
                    </div>
                </div>
            </div>

            <!-- KEWAJIBAN & MODAL CARD -->
            <div class="card-modern p-6 space-y-3 relative overflow-hidden">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                    <h4 class="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-widest flex items-center gap-2">
                        <div class="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center shrink-0">
                            <i class="fa-solid fa-arrow-up-wide-short text-xs"></i>
                        </div>
                        <span>KEWAJIBAN &amp; MODAL (Pasiva)</span>
                    </h4>
                </div>
                <div class="space-y-3">
                    <div class="flex items-center justify-between gap-2 py-1">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Hutang Usaha (manual)</span>
                        <input type="number" min="0" value="${t.hutang||0}" onchange="saveBalanceField('hutang', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-2.5 rounded-xl px-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Modal &amp; Laba Ditahan</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-100">${x(s)}</span>
                    </div>
                    <p class="text-[10px] font-semibold text-slate-400 leading-relaxed px-1">Angka Modal &amp; Laba Ditahan dihitung otomatis (Total Aset − Hutang) agar neraca seimbang.</p>
                    <div class="flex justify-between pt-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2">
                        <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-widest">Total Kewajiban + Modal</span>
                        <span class="font-bold text-xs sm:text-sm" style="color:var(--color-primary)">${x(o+s)}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6 text-center">
            <button onclick="openTaxDocPreview('balance')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all inline-flex items-center gap-2 shadow-xs active:scale-95">
                <i class="fa-solid fa-print"></i> Preview &amp; Cetak Neraca
            </button>
        </div>
    `)},ys=async(e,t)=>{const a=parseFloat(t)||0;r.taxSettings||(r.taxSettings={}),r.taxSettings.balanceSheet||(r.taxSettings.balanceSheet={kas:0,piutang:0,hutang:0,modalDisetor:0}),r.taxSettings.balanceSheet[e]=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),wt()}catch{u("Gagal menyimpan data neraca!")}},Jt=()=>{const e=r.taxSettings||{};P("tax-content",`
        <div class="card-modern p-6 sm:p-8 max-w-2xl mx-auto space-y-5">
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Badan Usaha / Toko</label>
                <input id="tax-company-name" type="text" value="${c(e.companyName||"")}" placeholder="Cth: Toko Putri" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">NPWP (Nomor Pokok Wajib Pajak)</label>
                <input id="tax-npwp" type="text" value="${c(e.npwp||"")}" placeholder="XX.XXX.XXX.X-XXX.XXX" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Skema Perhitungan PPh</label>
                <select id="tax-scheme" onchange="toggleCustomTaxRateInput(this.value)" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer font-bold focus:border-[var(--color-primary)]">
                    <option value="umkm_final" ${e.taxScheme==="umkm_final"?"selected":""}>PPh Final UMKM — 0,5% dari Omset (PP 23/2018)</option>
                    <option value="badan_normal" ${e.taxScheme==="badan_normal"?"selected":""}>PPh Badan Normal — 22% dari Laba Bersih</option>
                    <option value="custom" ${e.taxScheme==="custom"?"selected":""}>Custom (isi tarif sendiri)</option>
                </select>
            </div>
            <div id="tax-custom-rate-wrap" class="${e.taxScheme==="custom"?"":"hidden"}">
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tarif Custom (% dari Laba Bersih)</label>
                <input id="tax-custom-rate" type="number" min="0" max="100" step="0.1" value="${e.customTaxRate||.5}" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <button onclick="saveTaxSettingsPanel()" class="primary-bg py-3.5 text-xs sm:text-sm font-bold shadow-glow rounded-xl flex items-center justify-center gap-2 w-full uppercase tracking-widest text-white active:scale-95 transition-all">
                <i class="fa-solid fa-floppy-disk"></i> Simpan Pengaturan Pajak
            </button>
        </div>
    `)},Ss=e=>{de("tax-custom-rate-wrap","hidden",e!=="custom")},$s=async()=>{if(!qe){fe(!0),C("Menyimpan...");try{r.taxSettings||(r.taxSettings={}),r.taxSettings.companyName=S("tax-company-name"),r.taxSettings.npwp=S("tax-npwp"),r.taxSettings.taxScheme=S("tax-scheme"),r.taxSettings.customTaxRate=parseFloat(S("tax-custom-rate"))||.5,typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),u("Pengaturan pajak tersimpan!")}catch{u("Gagal menyimpan pengaturan pajak!")}finally{fe(!1),$()}}},Ps=e=>{const t=N===0?`Tahun ${R}`:`${ie[N-1]} ${R}`,a=r.taxSettings||{},o=new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"});let s="";r.store.logo&&(r.store.logo.includes("http")||r.store.logo.includes("data:"))?s=`<img loading="eager" src="${c(r.store.logo)}" class="w-16 h-16 object-contain">`:s='<div class="w-16 h-16 bg-slate-700 text-white flex items-center justify-center rounded-xl"><i class="fa-solid fa-store text-3xl"></i></div>';const n={summary:"LAPORAN PPN & OMSET",income:"LAPORAN LABA RUGI",balance:"NERACA"}[e]||"LAPORAN";let i=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${s}
            <div>
                <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${c(a.companyName||r.store.name)}</h1>
                ${a.npwp?`<p class="text-xs font-bold text-slate-500 mt-1">NPWP: ${c(a.npwp)}</p>`:""}
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${c(r.store.address||"")}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl tracking-widest text-slate-700 uppercase">${n}</h2>
            <p class="text-sm font-bold text-slate-600 mt-2">Periode: ${t}</p>
            <p class="text-xs font-semibold text-slate-400 mt-1">Dicetak: ${o}</p>
        </div>
    </div>
    <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-[11px] font-bold text-amber-700 leading-relaxed">
        <i class="fa-solid fa-triangle-exclamation mr-1"></i> Dokumen ini adalah rekap internal sebagai alat bantu — bukan dokumen resmi DJP. Mohon validasi ke akuntan/konsultan pajak sebelum digunakan untuk pelaporan SPT resmi.
    </div>`,d="";if(e==="summary"){const m=Oe(),b=m.omset-m.disc,f=Array.from({length:12},(h,g)=>g+1).map(h=>{const g=oe?oe[h]:{omset:0,ppn:0,orderCount:0};return`<tr class="border-b border-slate-200"><td class="py-2.5 px-3 font-bold text-slate-700">${ie[h-1]} ${R}</td><td class="py-2.5 px-3 text-right font-bold text-slate-700">${x(g.omset)}</td><td class="py-2.5 px-3 text-right font-bold text-slate-900">${x(g.ppn)}</td><td class="py-2.5 px-3 text-right font-bold text-slate-500">${g.orderCount}</td></tr>`}).join("");d=`
        <div class="grid grid-cols-4 gap-4 mb-8">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">Omset Bruto</p><p class="font-bold text-slate-900">${x(m.omset)}</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">Diskon</p><p class="font-bold text-rose-600">${x(m.disc)}</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">DPP</p><p class="font-bold text-slate-900">${x(b)}</p></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4"><p class="text-[9px] font-bold text-amber-600 uppercase mb-1">PPN Keluaran</p><p class="font-bold text-amber-700">${x(m.ppn)}</p></div>
        </div>
        <table class="w-full text-xs"><thead><tr class="bg-slate-100 text-left"><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px]">Bulan</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">Omset</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">PPN Keluaran</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">Pesanan</th></tr></thead><tbody>${f}</tbody></table>`}else if(e==="income"){const m=Oe(),b=m.omset-m.disc-m.hpp,f=ht(),h=b-f,g=a.taxScheme||"umkm_final";let v,A,T;g==="umkm_final"?(v=.5,A=m.omset,T="PPh Final UMKM (0,5% × Omset)"):g==="badan_normal"?(v=22,A=Math.max(0,h),T="PPh Badan (22% × Laba Bersih)"):(v=parseFloat(a.customTaxRate)||0,A=Math.max(0,h),T=`PPh Custom (${v}% × Laba Bersih)`);const y=A*(v/100),V=h-y,D=(E,j,_,Ze)=>`<div class="flex justify-between py-2 ${_?"border-t-2 border-slate-800 mt-1 pt-3":"border-b border-slate-100"}"><span class="${_?"font-bold text-slate-900":"font-bold text-slate-600"}">${E}</span><span class="font-bold ${Ze||"text-slate-900"}">${j}</span></div>`;d=`<div class="max-w-xl">
            ${D("Omset Bruto",x(m.omset))}
            ${D("(−) Diskon Produk","-"+x(m.disc),!1,"text-rose-600")}
            ${D("(−) HPP","-"+x(m.hpp),!1,"text-rose-600")}
            ${D("Laba Kotor",x(b),!0,"text-emerald-600")}
            ${D("(−) Biaya Operasional","-"+x(f),!1,"text-rose-600")}
            ${D("Laba Bersih Sebelum Pajak",x(h),!0)}
            ${D("(−) Estimasi "+T,"-"+x(y),!1,"text-rose-600")}
            ${D("Laba Bersih Setelah Pajak (Estimasi)",x(V),!0)}
        </div>`}else if(e==="balance"){const m=Je(),b=a.balanceSheet||{kas:0,piutang:0,hutang:0},f=(parseFloat(b.kas)||0)+(parseFloat(b.piutang)||0)+m.assetHpp,h=parseFloat(b.hutang)||0,g=f-h;d=`
        <div class="grid grid-cols-2 gap-8">
            <div>
                <h3 class="font-bold text-slate-800 uppercase text-xs tracking-widest mb-3 pb-2 border-b-2 border-slate-800">Aset</h3>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Kas &amp; Bank</span><span class="font-bold text-slate-900">${x(b.kas||0)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Piutang Usaha</span><span class="font-bold text-slate-900">${x(b.piutang||0)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Persediaan Barang</span><span class="font-bold text-slate-900">${x(m.assetHpp)}</span></div>
                <div class="flex justify-between py-2.5 border-t-2 border-slate-800 mt-1"><span class="font-bold text-slate-900">Total Aset</span><span class="font-bold text-slate-900">${x(f)}</span></div>
            </div>
            <div>
                <h3 class="font-bold text-slate-800 uppercase text-xs tracking-widest mb-3 pb-2 border-b-2 border-slate-800">Kewajiban &amp; Modal</h3>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Hutang Usaha</span><span class="font-bold text-slate-900">${x(h)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Modal &amp; Laba Ditahan</span><span class="font-bold text-slate-900">${x(g)}</span></div>
                <div class="flex justify-between py-2.5 border-t-2 border-slate-800 mt-1"><span class="font-bold text-slate-900">Total Kewajiban + Modal</span><span class="font-bold text-slate-900">${x(h+g)}</span></div>
            </div>
        </div>`}H("doc-modal-title","Preview "+n),P("doc-paper-content",i+d);const p=k("doc-preview-modal");p&&p.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),F("doc-preview-modal"),setTimeout(()=>{k("doc-preview-modal")&&k("doc-preview-modal").classList.remove("opacity-0"),k("doc-preview-modal-box")&&k("doc-preview-modal-box").classList.remove("scale-95"),typeof window.fitDocPreview=="function"&&window.fitDocPreview()},10)};window.fetchTaxPeriodData=xt;window.getTaxPeriodTotals=Oe;window.getTaxPeriodExpenses=ht;window.rTaxPanel=xs;window.rTaxRenderShell=kt;window.switchTaxTab=hs;window.changeTaxYear=ks;window.changeTaxMonth=vs;window.rTaxSubContent=Qe;window.rTaxSummary=zt;window.rTaxIncome=vt;window.saveMonthlyExpense=ws;window.rTaxBalance=wt;window.saveBalanceField=ys;window.rTaxSettingsPanel=Jt;window.toggleCustomTaxRateInput=Ss;window.saveTaxSettingsPanel=$s;window.openTaxDocPreview=Ps;window.MONTH_NAMES=ie;const As=e=>window.pushModalHistory?.(e);window.editTempoPenalty=(e,t)=>{window.customPrompt("Persentase Denda Baru",t,async a=>{if(!a)return;let o=parseFloat(a.replace(",","."));if(isNaN(o)||o<0)return u("Persentase tidak valid!");C("Menyimpan...");try{await w.collection("freshmart_orders").doc(e).update({"payment.tempoPenaltyRate":o}),u("Persentase denda berhasil diubah!"),window.rAdmPiutang()}catch(s){u("Gagal mengubah denda: "+s.message)}$()})};window.stopTempoPenalty=(e,t,a)=>{let o="Konfirmasi Denda",s=a?"Lanjutkan perhitungan denda otomatis?":"Hentikan denda berjalan sekarang? (Nominal denda akan dibekukan di "+x(t)+")";le(o,s,async()=>{C("Menyimpan...");try{await w.collection("freshmart_orders").doc(e).update({"payment.tempoPenaltyStopped":!a,"payment.tempoFixedPenalty":a?null:t}),u(a?"Denda dilanjutkan!":"Denda berhasil dibekukan!"),window.rAdmPiutang()}catch(n){u("Gagal mengubah status denda: "+n.message)}$()},a?"Lanjutkan":"Bekukan")};window.payTempoInstallment=e=>{window.customPrompt("Masukkan Nominal Cicilan (Rp)","",async t=>{if(!t)return;let a=parseFloat(t.replace(/[^0-9]/g,""));if(isNaN(a)||a<=0)return u("Nominal tidak valid!");C("Menyimpan cicilan...");try{const s=(await w.collection("freshmart_orders").doc(e).get()).data();let l=(s.payment.tempoBalance||0)-a,n=s.payment.installments||[];n.push({date:Date.now(),amount:a,note:"Cicilan"});let i={"payment.tempoBalance":Math.max(0,l),"payment.installments":n};l<=0&&(i["payment.paymentStatus"]="lunas",i.status="Selesai"),await w.collection("freshmart_orders").doc(e).update(i),u("Cicilan berhasil ditambahkan!"),window.rAdmPiutang&&window.rAdmPiutang()}catch(o){u("Gagal memproses cicilan: "+o.message)}$()})};window.previewTempoReceipt=async e=>{C("Memuat data struk...");try{const t=await w.collection("freshmart_orders").doc(e).get();if(!t.exists)return $(),u("Pesanan tidak ditemukan");const a=t.data();$();const o=a.dateString?new Date(a.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",s=r.store.name||"Toko",l=r.store.wa||"",n=(y,V,D=32)=>{const E=D-y.length-V.length;return y+(E>0?" ".repeat(E):" ")+V};let i=`<div class="text-center font-bold" style="font-size:13px;margin-bottom:2px;">${c(s)}</div>`;l&&(i+=`<div class="text-center" style="margin-bottom:4px;">WA: ${c(l)}</div>`),i+=`<div class="text-center font-bold uppercase my-2" style="font-size:14px;border-bottom:1px solid #000;border-top:1px solid #000;padding:2px 0;">NOTA TEMPO${a.payment?.paymentStatus==="lunas"?" - LUNAS":""}</div>`,i+=`<div style="white-space:pre;">Order: #${a.orderId}</div><div style="white-space:pre;">Tgl  : ${o}</div><div style="white-space:pre;">Plg  : ${c(a.customer?.name||"Guest").substring(0,20)}</div>`,a.payment?.tempoDueDate&&(i+=`<div style="white-space:pre;">J.Tmp: ${new Date(a.payment.tempoDueDate).toLocaleDateString("id-ID")}</div>`),i+='<div class="border-b border-dashed border-black my-2"></div>';let d=0;if(a.items.forEach(y=>{let V=y.variantName?` (${c(y.variantName)}${y.colorCode?" "+c(y.colorCode):""})`:"";const D=(c(y.name)+V+(y.poTime?" [PO]":"")).substring(0,32),E=`${parseFloat(y.qty)} ${c(y.unit||"pcs")} x ${y.effectivePrice.toLocaleString("id-ID")}`,j=(parseFloat(y.qty)*y.effectivePrice).toLocaleString("id-ID");i+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${D}</div><div style="white-space:pre;font-size:11px;">${n(E,j)}</div>`,y.poTime&&(i+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${c(y.poTime)}</div>`),d+=parseFloat(y.qty)*y.effectivePrice}),i+='<div class="border-b border-dashed border-black my-2"></div>',i+=`<div style="white-space:pre;font-weight:bold;">${n("Subtotal",d.toLocaleString("id-ID"))}</div>`,a.payment?.grandTotal&&a.payment.grandTotal!==d){let y=a.payment.grandTotal-d;y>0?i+=`<div style="white-space:pre;">${n("Ongkir/Biaya",y.toLocaleString("id-ID"))}</div>`:i+=`<div style="white-space:pre;">${n("Diskon",Math.abs(y).toLocaleString("id-ID"))}</div>`}i+=`<div style="white-space:pre;font-weight:bold;margin-top:4px;">${n("TOTAL KREDIT",(a.payment?.grandTotal||d).toLocaleString("id-ID"))}</div>`,i+='<div class="border-b border-black my-2" style="border-width:1px;"></div>';let p=0;a.payment?.installments&&a.payment.installments.length>0&&(i+='<div style="white-space:pre;font-weight:bold;margin-bottom:2px;">HISTORI CICILAN:</div>',a.payment.installments.forEach((y,V)=>{let D=new Date(y.date).toLocaleDateString("id-ID",{day:"2-digit",month:"short"}),E=y.amount.toLocaleString("id-ID");i+=`<div style="white-space:pre;">${n(`${V+1}. ${D}`,E)}</div>`,p+=y.amount}),i+=`<div style="white-space:pre;font-weight:bold;margin-top:2px;">${n("TOTAL DIBAYAR",p.toLocaleString("id-ID"))}</div>`,i+='<div class="border-b border-dashed border-black my-2"></div>');let m=a.payment?.tempoBalance||0,b=0,f=a.payment?.tempoPenaltyStopped===!0,h=a.payment?.tempoDueDate||0,g=a.payment?.tempoPenaltyRate!==void 0?parseFloat(a.payment.tempoPenaltyRate):1;if(a.payment?.paymentStatus!=="lunas"){if(f)b=parseFloat(a.payment?.tempoFixedPenalty)||0;else if(Date.now()>h){let y=Math.floor((Date.now()-h)/864e5);y>0&&(b=g/100*m*y)}}i+=`<div style="white-space:pre;font-weight:bold;">${n("SISA POKOK",m.toLocaleString("id-ID"))}</div>`,b>0&&(i+=`<div style="white-space:pre;">${n("DENDA",Math.round(b).toLocaleString("id-ID"))}</div>`);let v=m+b;i+='<div class="border-b border-black my-2" style="border-width:1px;"></div>',i+=`<div style="white-space:pre;font-weight:black;">${n("SISA TAGIHAN",Math.round(v).toLocaleString("id-ID"))}</div>`,a.items.some(y=>y.poTime&&y.poTime!=="")&&(i+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul (estimasi sesuai label) tanpa dikenakan biaya tambahan.</div>'),i+='<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;">Terima kasih atas kepercayaannya.</div><div class="border-b border-dashed border-black my-2"></div><div style="height:20px;"></div>',P("receipt-paper-content",i);const T=k("receipt-preview-modal");T&&T.classList.contains("hidden")&&As("receipt"),show("receipt-preview-modal"),setTimeout(()=>{k("receipt-preview-modal").classList.remove("opacity-0"),k("receipt-preview-modal-box").classList.remove("scale-95")},10)}catch(t){$(),u("Gagal memuat struk: "+t.message)}};window.markTempoPaid=async e=>{le("Konfirmasi","Tandai tagihan tempo ini sebagai LUNAS?",async()=>{try{await w.collection("freshmart_orders").doc(e).update({"payment.paymentStatus":"lunas","payment.tempoBalance":0,status:"Selesai"}),u("Tagihan berhasil dilunasi!");let t=gOrds.findIndex(a=>a.orderId===e);t!==-1&&(gOrds[t].payment.paymentStatus="lunas",gOrds[t].payment.tempoBalance=0,gOrds[t].status="Selesai"),window.rAdmPiutang()}catch(t){u("Gagal mengubah status: "+t.message)}})};window.rAdmPiutang=async()=>{C("Memuat data piutang...");let e=[];try{(await w.collection("freshmart_orders").where("payment.method","==","tempo").where("payment.paymentStatus","==","hutang").get()).forEach(s=>{e.push(s.data())})}catch(o){$(),u("Gagal memuat piutang: "+o.message);return}$();let t=0,a=`
    <div class="max-w-full pb-10 fade-in-scale text-sm">
        <div class="mb-5 flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                    <i class="fa-solid fa-hand-holding-dollar text-base"></i>
                </div>
                <div>
                    <h2 class="font-bold text-sm text-slate-800 dark:text-slate-100 uppercase tracking-widest leading-tight">Tagihan Tempo</h2>
                    <p class="text-[9px] font-bold text-slate-500 mt-0.5">Daftar piutang pelanggan yang belum lunas</p>
                </div>
            </div>
            <div class="text-right">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Piutang</p>
                <p class="text-lg font-bold text-rose-500" id="total-piutang-header">Rp 0</p>
            </div>
        </div>
    `;e.length===0?a+=`<div class="bg-white dark:bg-slate-800 p-8 text-center rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-20 h-20 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-check-double text-4xl"></i></div>
                <h3 class="font-bold text-slate-700 dark:text-slate-200 text-lg uppercase tracking-widest">Luar Biasa!</h3>
                <p class="text-slate-500 mt-2 text-xs font-bold">Semua tagihan pelanggan telah lunas. Tidak ada piutang tertunda.</p>
              </div>`:(a+='<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">',e.forEach(o=>{let s=o.payment?.tempoBalance||0,l=o.payment?.tempoPenaltyRate!==void 0?parseFloat(o.payment.tempoPenaltyRate):1,n=o.payment?.tempoPenaltyStopped===!0,i=0,d=o.payment?.tempoDueDate||0,p=0,m=!1;n?(i=parseFloat(o.payment?.tempoFixedPenalty)||0,Date.now()>d&&(p=Math.floor((Date.now()-d)/(24*60*60*1e3)),p>0&&(m=!0))):Date.now()>d&&(p=Math.floor((Date.now()-d)/(24*60*60*1e3)),p>0&&(m=!0,i=l/100*s*p));let b=s+i;t+=b;let f=window.normalizeWA?window.normalizeWA(o.customer?.wa):o.customer?.wa||"";a+=`
            <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border ${m?"border-rose-300 dark:border-rose-700 shadow-[0_0_15px_rgba(225,29,72,0.1)]":"border-slate-200 dark:border-slate-700 shadow-sm"} relative overflow-hidden group hover:-translate-y-1 transition-all">
                ${m?`<div class="absolute -right-6 top-4 ${n?"bg-slate-500":"bg-rose-500"} text-white text-[9px] font-bold uppercase tracking-widest px-8 py-1 rotate-45 shadow-sm">TERLAMBAT ${p} HARI</div>`:""}
                
                <div class="flex justify-between items-start mb-4 pr-12">
                    <div>
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pesanan #${o.orderId.substring(4,10)}</p>
                        <h3 class="font-bold text-slate-800 dark:text-slate-200 mt-1 uppercase">${c(o.customer?.name||"Anonim")}</h3>
                        <p class="text-[10px] font-bold text-slate-500 flex items-center gap-1 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${c(o.customer?.wa||"-")}</p>
                    </div>
                </div>
                
                <div class="space-y-2 mb-4 bg-slate-50 dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-700/50">
                    <div class="flex justify-between items-center text-xs">
                        <span class="font-bold text-slate-500">Jatuh Tempo</span>
                        <span class="font-bold ${m?"text-rose-600":"text-slate-700 dark:text-slate-300"}">${new Date(d).toLocaleDateString("id-ID")}</span>
                    </div>
                    <div class="flex justify-between items-center text-xs">
                        <span class="font-bold text-slate-500">Sisa Pokok</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${x(s)}</span>
                    </div>
                    ${m?`
                    <div class="flex justify-between items-center text-xs ${n?"text-slate-500":"text-rose-600"}">
                        <span class="font-bold">Denda (${l}%/hari) ${n?'<span class="text-[9px] bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded ml-1">STOPPED</span>':""}</span>
                        <span class="font-bold font-mono">+${x(i)}</span>
                    </div>`:""}
                </div>
                
                <div class="flex justify-between items-center bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 p-3.5 rounded-xl border border-rose-100 dark:border-rose-900/30 mb-3">
                    <span class="text-[10px] font-bold uppercase tracking-widest">Total Tagihan</span>
                    <span class="text-sm font-bold font-mono tracking-tight">${x(b)}</span>
                </div>
                
                <div class="flex gap-2 mb-3">
                    <button onclick="editTempoPenalty('${o.orderId}', ${l})" class="flex-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                        <i class="fa-solid fa-percent"></i> Edit Denda
                    </button>
                    <button onclick="stopTempoPenalty('${o.orderId}', ${i}, ${n})" class="flex-1 ${n?"bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.15)]":"bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-200"} rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                        <i class="fa-solid ${n?"fa-play":"fa-stop"}"></i> ${n?"Lanjut Denda":"Stop Denda"}
                    </button>
                </div>
                
                ${o.payment?.installments&&o.payment.installments.length>0?`
                <div class="mb-3 space-y-1.5 bg-slate-50 dark:bg-slate-900/30 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex justify-between">
                        <span>Riwayat Cicilan</span>
                        <span>Total: ${x(o.payment.installments.reduce((h,g)=>h+(parseFloat(g.amount)||0),0))}</span>
                    </div>
                    ${o.payment.installments.map(h=>`
                    <div class="flex justify-between items-center text-[10px]">
                        <span class="text-slate-500 dark:text-slate-400">${new Date(h.date).toLocaleDateString("id-ID")}</span>
                        <span class="font-bold text-[var(--color-primary)] font-mono">+${x(h.amount)}</span>
                    </div>
                    `).join("")}
                </div>`:""}
                
                <div class="flex gap-2 mb-2">
                    <a href="https://wa.me/${f}?text=Halo%20kak%20${c(o.customer?.name||"")},%20mengingatkan%20bahwa%20sisa%20tagihan%20Tempo%20untuk%20pesanan%20${o.orderId}%20sebesar%20${x(b)}%20sudah%20jatuh%20tempo.%20Mohon%20segera%20dilunasi." target="_blank" class="flex-1 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] hover:bg-[rgba(var(--color-primary-rgb),0.12)] dark:hover:bg-[rgba(var(--color-primary-rgb),0.16)] text-[var(--color-primary)] border border-[var(--color-primary)]/25 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                        <i class="fa-brands fa-whatsapp text-sm"></i> Tagih
                    </a>
                    <button onclick="previewTempoReceipt('${o.orderId}')" class="flex-1 bg-amber-500 hover:bg-amber-600 text-white rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm shadow-amber-500/30 transition-all">
                        <i class="fa-solid fa-print"></i> Struk
                    </button>
                </div>
                <div class="flex gap-2">
                    <button onclick="payTempoInstallment('${o.orderId}')" class="flex-1 bg-white dark:bg-slate-700 border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl py-2.5 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95">
                        <i class="fa-solid fa-money-bill-wave"></i> Cicil
                    </button>
                    <button onclick="markTempoPaid('${o.orderId}')" class="flex-1 primary-bg hover:opacity-90 text-white rounded-xl py-2.5 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm transition-all active:scale-95">
                        <i class="fa-solid fa-check-double"></i> Lunas
                    </button>
                </div>
            </div>`}),a+="</div>"),a+="</div>",P("admin-content",a),setTimeout(()=>{k("total-piutang-header")&&(k("total-piutang-header").innerText=x(t))},100)};const Ts=e=>{ba(e),Qt()},Qt=()=>{const e=ua||"all",t=(ct||[]).filter(l=>e==="visible"?l.isVisible!==!1:e==="hidden"?l.isVisible===!1:!0),a=`
        <div class="mb-5 flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                    <i class="fa-solid fa-comments text-base"></i>
                </div>
                <div>
                    <h2 class="font-bold text-sm text-slate-800 dark:text-slate-100 uppercase tracking-widest leading-tight">Ulasan Pelanggan</h2>
                    <p class="text-[9px] font-bold text-slate-500 mt-0.5">Moderasi, balas, dan kelola testimoni pembeli</p>
                </div>
            </div>
        </div>
        <div class="flex gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-5 w-fit">
            ${[{k:"all",l:"Semua"},{k:"visible",l:"Ditampilkan"},{k:"hidden",l:"Disembunyikan"}].map(l=>`
                <button onclick="filterReviews('${l.k}')" class="px-3.5 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${e===l.k?"shadow-sm":"text-slate-500 dark:text-slate-400"}" style="${e===l.k?"background:var(--color-primary);color:#fff":""}">${l.l}</button>
            `).join("")}
        </div>`;if(!t.length){P("admin-content",'<div class="max-w-full pb-10 text-sm fade-in-scale">'+a+'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-comment-slash text-5xl mb-4 opacity-30"></i>Belum ada ulasan</div></div>');return}const o=l=>Array.from({length:5},(n,i)=>`<i class="fa-solid fa-star ${i<Math.round(l)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join(""),s=t.map(l=>{let n="";try{l.createdAt&&l.createdAt.toDate&&(n=l.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))}catch{}const i=l.isVisible===!1;return`
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border shadow-sm ${i?"border-rose-200 bg-rose-50/40 dark:border-rose-900/40 dark:bg-rose-900/10":"border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"} mb-3">
            <div class="flex items-start justify-between gap-3 mb-2">
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate">${c(l.customerName||"Pelanggan")}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">${c(l.productName||"")}${l.variantName?" · "+c(l.variantName):""}</p>
                </div>
                <span class="text-[9px] font-bold text-slate-400 whitespace-nowrap">${n}</span>
            </div>
            <div class="flex text-xs mb-2.5">${o(l.rating)}</div>
            ${l.text?`<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2.5">${c(l.text)}</p>`:""}
            ${l.photoUrl?`<img src="${c(l.photoUrl)}" onclick="window.open('${c(l.photoUrl)}','_blank')" class="w-20 h-20 rounded-xl object-cover border border-slate-200 dark:border-slate-700 cursor-pointer mb-2.5" onerror="this.style.display='none'" loading="lazy">`:""}
            ${l.adminReply?`<div class="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-3 mb-2.5"><p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1"><i class="fa-solid fa-store mr-1"></i>Balasan Anda</p><p class="text-[11px] text-slate-600 dark:text-slate-300">${c(l.adminReply)}</p></div>`:""}
            <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                <button onclick="replyToReview(${l.id})" class="px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-blue-100 transition-all"><i class="fa-solid fa-reply"></i> ${l.adminReply?"Edit Balasan":"Balas"}</button>
                <button onclick="toggleReviewVisibility(${l.id})" class="px-3 py-2 rounded-xl ${i?"primary-bg-soft primary-text hover:brightness-95":"bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100"} text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all"><i class="fa-solid ${i?"fa-eye":"fa-eye-slash"}"></i> ${i?"Tampilkan":"Sembunyikan"}</button>
                <button onclick="deleteReview(${l.id})" class="px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-rose-100 transition-all"><i class="fa-solid fa-trash"></i> Hapus</button>
            </div>
        </div>`}).join("");P("admin-content",'<div class="max-w-full pb-10 text-sm fade-in-scale">'+a+s+"</div>")},Cs=async e=>{const t=(ct||[]).find(a=>a&&a.id!=null&&String(a.id)===String(e));t&&typeof window.customPrompt=="function"&&window.customPrompt("Tulis balasan untuk ulasan ini:",t.adminReply||"",async a=>{C("Menyimpan balasan...");try{await w.collection("freshmart").doc("cms_data").collection("reviews").doc(e.toString()).update({adminReply:a}),u("Balasan tersimpan!")}catch{u("Gagal menyimpan balasan!")}finally{$()}})},Ms=async e=>{const t=(ct||[]).find(o=>o&&o.id!=null&&String(o.id)===String(e));if(!t)return;const a=t.isVisible===!1;C("Menyimpan...");try{await w.collection("freshmart").doc("cms_data").collection("reviews").doc(e.toString()).update({isVisible:a}),u(a?"Ulasan ditampilkan lagi!":"Ulasan disembunyikan dari halaman produk!")}catch{u("Gagal mengubah status ulasan!")}finally{$()}},Is=e=>{le("Hapus Ulasan","Ulasan yang dihapus tidak bisa dikembalikan lagi.",async()=>{C("Menghapus...");try{await w.collection("freshmart").doc("cms_data").collection("reviews").doc(e.toString()).delete(),u("Ulasan dihapus!")}catch{u("Gagal menghapus ulasan!")}finally{$()}})};window.filterReviews=Ts;window.rAdmReviews=Qt;window.replyToReview=Cs;window.toggleReviewVisibility=Ms;window.deleteReview=Is;window.rAdmL=e=>{Ye(e),typeof window.setCTab=="function"&&window.setCTab(e),window.cTab=e,P("admin-content",`
        <div class="max-w-5xl mx-auto">
        ${e==="products"?'<div id="admin-product-stats" class="mb-5"></div>':""}
        <div class="mb-6">
            ${e==="colors"?`
        <div class="flex gap-2 mb-4 flex-wrap">
            <button onclick="openImportFromProductsModal()" class="flex items-center gap-2 px-4 py-2 rounded-xl primary-bg-soft border primary-border primary-text font-bold text-[11px] uppercase tracking-widest hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all active:scale-95 shadow-sm"><i class="fa-solid fa-box-archive"></i> Impor dari Semua Produk</button>
        </div>`:""}
            <div class="flex gap-2 items-center mb-4">
                <div class="relative flex-1">
                    <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                    <input autocomplete='off' id="admin-search-input" name='cari_admin_q' placeholder="Cari..." oninput="(window.setASq ? window.setASq(this.value.toLowerCase()) : (window.aSq=this.value.toLowerCase()));rAdmItms('${e}')" class="w-full bg-white dark:bg-slate-800 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-2xl py-3.5 pl-11 pr-12 text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(var(--color-primary-rgb),0.12)] shadow-sm transition-all" ></i>
                    <button onclick="openCameraScanner('admin-search-input')" class="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl transition-all" title="Scan Barcode"><i class="fa-solid fa-qrcode text-sm"></i></button>
                </div>
                <button onclick="oAAdd()" class="h-[46px] px-5 rounded-2xl primary-bg font-bold text-sm flex items-center gap-2 shadow-glow active:scale-95 transition-all shrink-0"><i class="fa-solid fa-plus text-xs"></i> Tambah</button>
            </div>
        </div>
        <div id="admin-list-container" class="space-y-3 pb-12"></div>
        </div>
    `),rAdmItms(e)};window.rAdmItms=e=>{e&&(Ye(e),typeof window.setCTab=="function"&&window.setCTab(e),window.cTab=e);const t=k("admin-list-container"),a=t?t.closest(".scroll-content"):null,o=a?a.scrollTop:0;if(e==="products"&&k("admin-product-stats")){const i=Je();P("admin-product-stats",`
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-box mr-1"></i>Produk Aktif</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">${i.activeProd}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-layer-group mr-1"></i>Varian Aktif</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">${i.activeVar}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Kosong / Nonaktif</p>
                    <p class="text-lg sm:text-xl font-bold text-amber-500">${i.inactiveProd+i.inactiveVar}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">${i.inactiveProd} produk, ${i.inactiveVar} varian</p>
                </div>
                <div class="card-modern p-5 sm:p-5 bg-slate-50 dark:bg-slate-800/40">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-warehouse mr-1"></i>Total Aset Gudang</p>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400">Modal (HPP): <b class="text-slate-700 dark:text-slate-200">${x(i.assetHpp)}</b></p>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">Harga Jual: <b class="text-slate-700 dark:text-slate-200">${x(i.assetJual)}</b></p>
                </div>
            </div>
        `)}let s=[...r[e]||[]];s.sort((i,d)=>(d.id||0)-(i.id||0));const l=(ta||window.aSq||"").toLowerCase();let n=s.filter(i=>{let d=(i.name||i.title||i.bankName||i.code||i.sku||i.phone||"").toLowerCase().includes(l);return e==="products"&&!d&&i.variants&&(d=i.variants.some(p=>p.sku&&p.sku.toLowerCase().includes(l))),d});if(!n.length)return P("admin-list-container",'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-folder-open text-5xl mb-4 opacity-30"></i>Data kosong</div>');P("admin-list-container",n.map(i=>{let d=e==="products",p=d&&(i.isActive==="false"||i.isActive===!1),m=p?"border-rose-200 bg-rose-50/50 dark:border-rose-900/50 dark:bg-rose-900/10":"border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800",b=p?"text-slate-500 dark:text-slate-400 line-through":"text-slate-800 dark:text-slate-100",f=i.img?`<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white border border-slate-100 dark:border-slate-700/60 rounded-2xl p-1.5 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${c(i.img)}" alt="${c(i.name)}" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Img'" class="w-full h-full object-contain ${p?"grayscale opacity-50":""}"></div>`:'<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-2xl flex items-center justify-center text-slate-300 dark:text-slate-600"><i class="fa-solid fa-image text-2xl"></i></div>';const h=window.isAdm||window.__localIsAdm;let g=d?p?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl primary-icon-btn border flex items-center justify-center transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus('${i.id}', true)" title="Aktifkan Stok"><i class="fa-solid fa-check text-xs sm:text-sm"></i></button>`:`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-500 flex items-center justify-center hover:bg-amber-500 hover:text-white dark:bg-amber-900/30 dark:border-amber-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus('${i.id}', false)" title="Nonaktifkan (Habis)"><i class="fa-solid fa-ban text-xs sm:text-sm"></i></button>`:"",v=d?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white dark:bg-blue-900/30 dark:border-blue-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); duplicateProduct('${i.id}')" title="Duplikat Produk"><i class="fa-regular fa-copy text-xs sm:text-sm"></i></button>`:"";const A=r.store.useStock===!0||r.store.useStock==="true";let T=d&&A?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-500 flex items-center justify-center hover:bg-indigo-500 hover:text-white dark:bg-indigo-900/30 dark:border-indigo-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openRestockModal('${i.id}')" title="Restock Produk"><i class="fa-solid fa-boxes-stacked text-xs sm:text-sm"></i></button>`:"",y=d?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl primary-icon-btn border flex items-center justify-center transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openQuickPriceModal('${i.id}')" title="Edit Cepat Harga"><i class="fa-solid fa-tags text-xs sm:text-sm"></i></button>`:"",V=`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-500 hover:text-white dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oAEd('${e}','${i.id}')" title="Edit Data"><i class="fa-solid fa-pen text-xs sm:text-sm"></i></button>`,D=`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oADel('${e}','${i.id}')" title="Hapus Permanen"><i class="fa-solid fa-trash text-xs sm:text-sm"></i></button>`;return`
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[1.5rem] border shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all duration-300 ${m}" onclick="oAEd('${e}','${i.id}')">
            <div class="flex items-start sm:items-center gap-4 min-w-0 w-full">
                ${f}
                <div class="min-w-0 flex flex-col justify-center py-1">
                    <p class="text-xs sm:text-sm font-bold ${b} line-clamp-2 uppercase tracking-wide leading-snug mb-1.5">${c(i.name||i.title||i.bankName||i.code||"Item")}</p>
                    ${d?`<p class="text-sm sm:text-base font-bold text-[var(--color-primary)] tracking-tight">${x(i.price)}</p>`:""}
                    ${d&&h&&A?`<p class="text-[10px] font-bold mt-1 ${(i.variants&&i.variants.length?i.variants.reduce((E,j)=>E+(parseFloat(j.stock)||0),0):parseFloat(i.stock)||0)===0?"text-rose-500 animate-pulse":"text-blue-500"}"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${i.variants&&i.variants.length?i.variants.reduce((E,j)=>E+(parseFloat(j.stock)||0),0).toFixed(2).replace(/\.?0+$/,""):parseFloat(i.stock)||0}</p>`:""}
                    ${d&&h&&i.hpp?`<p class="text-[10px] font-bold text-amber-500 mt-0.5"><i class="fa-solid fa-coins mr-1"></i>HPP: ${x(i.hpp)}</p>`:""}
                    ${d?(()=>{const E=i.variants&&i.variants.length?i.variants.reduce((j,_)=>j+(parseFloat(_.totalSold)||0),0):parseFloat(i.totalSold)||0;return E>0?`<p class="text-[10px] font-bold text-orange-400 mt-0.5"><i class="fa-solid fa-fire-flame-curved mr-1"></i>Terjual: ${E}</p>`:""})():""}
                    ${e==="colors"?`<div class="flex items-center gap-2 mt-1"><div class="w-4 h-4 rounded-full border border-slate-200 dark:border-slate-600 shadow-sm" style="background-color: ${c(i.hex||"transparent")}"></div><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-swatchbook mr-1"></i>${c(i.catalog||"Tanpa Katalog")}</p></div>`:""}
                    ${e==="customers"?`<p class="text-xs font-bold text-slate-500 dark:text-slate-400"><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i>+${c(i.phone)}</p><p class="text-[11px] font-bold text-[var(--color-primary)] mt-0.5"><i class="fa-solid fa-star mr-1"></i>${parseFloat(i.points)||0} Poin</p>`:""}
                    ${e==="rewards"?`<p class="text-sm font-bold text-violet-500"><i class="fa-solid fa-star mr-1"></i>${parseFloat(i.pointsCost)||0} Poin</p><p class="text-[10px] font-bold text-slate-500 mt-0.5"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${parseFloat(i.stock)||0}</p>`:""}
                </div>
            </div>
            <div class="flex gap-2.5 shrink-0 self-end sm:self-center pt-3 sm:pt-0 border-t border-slate-100 sm:border-0 dark:border-slate-700/50 w-full sm:w-auto justify-end">
                ${g}
                ${T}
                ${y}
                ${v}
                ${V}
                ${D}
            </div>
        </div>`}).join("")),a&&requestAnimationFrame(()=>{a.scrollTop=o})};typeof window.bannerTmr>"u"&&(window.bannerTmr=null);let et=null;const ot=()=>{document.querySelectorAll("#banner-slider video.banner-video-element").forEach(e=>{e.dataset.init||(e.dataset.init="true",e.muted=!0,e.loop=!0,e.playsInline=!0,e.setAttribute("playsinline",""),e.setAttribute("loop",""),e.setAttribute("autoplay","")),e.dataset.loopAttached||(e.dataset.loopAttached="true",e.addEventListener("ended",()=>{e.currentTime=0,e.play().catch(()=>{})})),e.dataset.userUnmuted==="true"&&(e.muted=!1),e.play().catch(()=>{})})},js=(e,t)=>{const a=k(`banner-slide-${t}`)||e&&e.closest(".banner-slide-item");if(!a)return;const o=a.querySelector("video.banner-video-element");if(o){o.muted?(o.muted=!1,o.volume=1,o.dataset.userUnmuted="true",o.play().catch(()=>{}),e&&(e.innerHTML='<i class="fa-solid fa-volume-high text-xs"></i> <span>Suara On</span>',e.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 primary-bg text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer")):(o.muted=!0,o.dataset.userUnmuted="false",e&&(e.innerHTML='<i class="fa-solid fa-volume-xmark text-xs"></i> <span>Muted</span>',e.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer"));return}const s=a.querySelector("iframe.banner-video-iframe");s&&(s.dataset.muted!=="false"?(s.dataset.muted="false",s.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}',"*"),s.contentWindow?.postMessage('{"event":"command","func":"setVolume","args":[100]}',"*"),e&&(e.innerHTML='<i class="fa-solid fa-volume-high text-xs"></i> <span>Suara On</span>',e.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 primary-bg text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer")):(s.dataset.muted="true",s.contentWindow?.postMessage('{"event":"command","func":"mute","args":""}',"*"),e&&(e.innerHTML='<i class="fa-solid fa-volume-xmark text-xs"></i> <span>Muted</span>',e.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer")))},Me=e=>{const t=k("banner-dots-container");if(!t)return;t.querySelectorAll(".banner-dot-item").forEach((o,s)=>{s===e?o.className="banner-dot-item h-2.5 rounded-full transition-all duration-300 bg-[var(--color-primary)] w-7 shadow-sm":o.className="banner-dot-item w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"})},Bs=()=>{et&&clearTimeout(et),et=setTimeout(()=>{const e=k("banner-slider");if(!e)return;const t=e.querySelectorAll(".banner-slide-item");if(!t||!t.length)return;let a=0,o=1/0;t.forEach((s,l)=>{const n=Math.abs(s.offsetLeft-e.scrollLeft);n<o&&(o=n,a=l)}),Me(a)},100)},Ls=e=>{clearInterval(window.bannerTmr);const t=k("banner-slider");if(!t)return;const a=t.querySelectorAll(".banner-slide-item");a&&a[e]&&(t.scrollTo({left:a[e].offsetLeft-t.offsetLeft,behavior:"smooth"}),Me(e)),setTimeout(Ke,8e3)},Ds=()=>{clearInterval(window.bannerTmr);const e=k("banner-slider");if(!e)return;const t=e.querySelectorAll(".banner-slide-item");if(!t||!t.length)return;let a=0,o=1/0;t.forEach((l,n)=>{const i=Math.abs(l.offsetLeft-e.scrollLeft);i<o&&(o=i,a=n)});const s=(a-1+t.length)%t.length;e.scrollTo({left:t[s].offsetLeft-e.offsetLeft,behavior:"smooth"}),Me(s),setTimeout(Ke,8e3)},Es=()=>{clearInterval(window.bannerTmr);const e=k("banner-slider");if(!e)return;const t=e.querySelectorAll(".banner-slide-item");if(!t||!t.length)return;let a=0,o=1/0;t.forEach((l,n)=>{const i=Math.abs(l.offsetLeft-e.scrollLeft);i<o&&(o=i,a=n)});const s=(a+1)%t.length;e.scrollTo({left:t[s].offsetLeft-e.offsetLeft,behavior:"smooth"}),Me(s),setTimeout(Ke,8e3)},Ke=()=>{if(clearInterval(window.bannerTmr),!k("banner-slider")||!r.banners||r.banners.length<=1)return;const t=()=>{ot()};t(),ot(),window.bannerTmr=setInterval(()=>{const a=k("banner-slider");if(!a)return clearInterval(window.bannerTmr);const o=a.querySelectorAll(".banner-slide-item");if(!o||o.length<=1){const s=a.scrollWidth-a.clientWidth;a.scrollLeft>=s-10?a.scrollTo({left:0,behavior:"smooth"}):a.scrollBy({left:a.clientWidth,behavior:"smooth"})}else{let s=0,l=1/0;o.forEach((d,p)=>{const m=Math.abs(d.offsetLeft-a.scrollLeft);m<l&&(l=m,s=p)});const n=(s+1)%o.length,i=o[n];a.scrollTo({left:i.offsetLeft-a.offsetLeft,behavior:"smooth"}),Me(n)}setTimeout(t,400)},8e3)};window.forcePlayBannerVideos=ot;window.toggleBannerVideoSound=js;window.updateBannerDots=Me;window.onBannerScroll=Bs;window.scrollToBanner=Ls;window.scrollBannerPrev=Ds;window.scrollBannerNext=Es;window.startBannerAutoSlide=Ke;const _s=[{id:"log-1-7-5",version:"v1.7.5",date:"2026-09-17",title:"Desain Navigasi Bawah Modern: Beranda Timbul Melayang di Tengah (Elevated Center Hub) & Tampilan 100% Aplikasi Mobile",category:"feature",badge:"Mobile App Navigation v1.7.5",items:["Navigasi Bawah Mobile Modern (App-Like Bottom Navigation): Menghadirkan bilah navigasi bawah 5 tab simetris (Kategori, Keranjang, Beranda, Pesanan, Menu) yang intuitif untuk kemudahan pengoperasian satu tangan (Golden Thumb Zone) di layar ponsel.","Tombol Beranda Timbul Melayang di Tengah (Elevated Center Hero Hub): Menempatkan tombol Beranda tepat di tengah dengan lingkaran 52px melayang timbul (offset -top-5) bergradien tema dinamis, ring cutout notch, dan drop-shadow lembut yang elegan.","Solid Background Anti-Tembus & Bordered Cart Badge: Panel navigasi menggunakan latar belakang 100% solid (bg-white dark:bg-[#0b1120]) tanpa efek tembus pandang/blur residual saat menggulir halaman, dilengkapi badge keranjang belanja dengan outline kontras tinggi.","Sinkronisasi Routing & Active State Cerdas: Status tab navigasi otomatis menyala aktif secara akurat mengikuti URL hash/halaman yang sedang dibuka (Beranda, Riwayat Pesanan, Kategori Modal, atau Menu Drawer).","Manajemen Pruning Log Pembaruan di CMS: Administrator toko kini dapat menghapus catatan log pembaruan lama langsung dari panel CMS Admin agar riwayat changelog tetap rapi, ringkas, dan bebas spam seiring berjalannya waktu."]},{id:"log-1-7-2",version:"v1.7.2",date:"2026-09-17",title:"Finalisasi & Audit Debugging Menyeluruh Sistem (Stabilitas Router Modal, Type Safety ID Produk & Akses Dev Lokal)",category:"maintenance",badge:"Final System Audit & Stability v1.7.2",items:["Resolusi Import Router Modal Storefront: Mengimpor fungsi pushModalHistory dan requestCloseModal secara eksplisit pada modul dialog storefront (modals.js) untuk menjamin semua dialog (Tautan Cepat, Kategori, Brand Mitra, Syarat & Ketentuan, Kebijakan Privasi, Panduan Belanja) terbuka dan tertutup dengan mulus tanpa memicu ReferenceError.","Safe String ID Handling pada Katalog & Rekomendasi: Mengenkapsulasi parameter ID produk pada atribut onclick kartu produk dan kartu rekomendasi slider (openProductModal), memastikan kompatibilitas penuh untuk ID numerik maupun string alfa-numerik tanpa risiko syntax error.","Perbaikan Pencocokan Produk Target Voucher: Menyempurnakan pencocokan target produk voucher diskon dengan konversi string bertipe aman (String(item.id) === String(f.targetProduct)).","Penyempurnaan Struk Tempo Admin: Menambahkan deklarasi aman helper pushModalHistory pada modul piutang & struk pembayaran tempo (tempo.js).","Dukungan Host Lokalitas Lingkungan Pengujian: Menambahkan pengenalan host 127.0.0.1 secara setara dengan localhost pada pemeriksaan akses dev admin (checkAdminAccess).","Audit Menyeluruh 200+ Inline Event Handler: Memverifikasi seluruh event handler di index.html dan template JS untuk memastikan 100% fungsi terdaftar resmi di window tanpa ada broken reference."]},{id:"log-1-7-1",version:"v1.7.1",date:"2026-09-17",title:"Penyelarasan Desain Modal CMS Admin & Builder Komponen (Tabel Spesifikasi, Grosir, Varian & Eliminasi Scrollbar Native)",category:"optimization",badge:"Admin Modal & Theme Harmonization v1.7.1",items:['Penyelarasan Builder Tabel Spesifikasi (Spec Table Builder): Mengganti warna hardcoded cyan pada tombol "Tambah Baris Spesifikasi" dan ikon placeholder dengan variabel warna tema aktif toko (--color-primary), sehingga menyatu sempurna dengan seluruh 19 preset tema (termasuk tema emas/olive Toko Putri).',"Eliminasi Scrollbar Native Abu-abu di Modal CMS: Mengintegrasikan utilitas hide-scrollbar pada kontainer formulir Admin Modal (#admin-modal-form), Modal Detail Pesanan (#admin-order-modal-content), Modal Edit Cepat Harga (#qp-body), dan Modal Restock Stok, sehingga scrollbar native yang tebal dan kaku hilang tanpa mengurangi kenyamanan scroll.","Harmonisasi Builder Grosir & Varian Produk: Menyelaraskan kartu grosir, tombol tambah tingkatan grosir, kartu varian, serta dialog database warna ke standar border-radius rounded-2xl dan aksen tema aktif toko tanpa warna kontras yang jomplang (menghapus hardcoded amber, pink, dan violet).","Penyempurnaan Visual Header & Tombol Modal Admin: Menstandarisasi radius modal utama ke rounded-2xl, menambahkan badge ikon tematik di samping judul, menyempurnakan tombol tutup melingkar (cursor-pointer), dan tombol solid simpan data dengan efek shadow-glow dan active scaling.","Optimalisasi Modal Restock & Edit Cepat Harga: Menyelaraskan seluruh dialog popup operasional admin dengan warna aksen dinamis toko dan konsistensi interaksi penuh."]},{id:"log-1-7-0",version:"v1.7.0",date:"2026-09-17",title:"Pengelompokan Produk Sejenis (Sub-Kategori Cerdas) & Rekomendasi Produk Alternatif di Modal Detail",category:"feature",badge:"Smart Sub-Category & Related Products v1.7.0",items:["Sistem Sub-Kategori Cerdas (Smart Sub-Grouping): Mengelompokkan produk berdasarkan jenis yang lebih spesifik dalam kategori yang sama (contoh kategori Cat Bangunan: Cat Tembok, Cat Kayu & Besi, Waterproofing, Kuas & Rol) dengan kompatibilitas penuh tanpa merombak struktur database yang sudah ada.","Bilah Filter Sub-Kategori Interaktif (Dynamic Chip Bar): Menampilkan bilah chip filter horizontal di etalase saat sebuah kategori dipilih, lengkap dengan indikator jumlah produk per jenis dan penanda aktif sesuai tema toko.",'Rekomendasi Produk Sejenis & Alternatif Pilihan di Modal: Menambahkan kartu slider horizontal "Produk Sejenis & Alternatif Pilihan" di dalam modal detail produk menggunakan algoritma pencocokan skor relevansi (jenis produk, kategori, dan brand) untuk memudahkan pembeli membandingkan pilihan dan mendorong cross-selling.',"Autocomplete Datalist di Form Produk Admin: Formulir penambahan/pengeditan produk di CMS Admin kini dilengkapi input cerdas yang otomatis menyarankan jenis/sub-kategori yang sudah pernah ada di toko untuk mencegah typo dan menjaga konsistensi penamaan.","Badge Jenis Produk pada Kartu Katalog: Menampilkan label sub-kategori bernuansa tema toko pada kartu produk di tampilan grid maupun list etalase.","Penyelarasan Desain Modal Detail Produk: Menstandarisasi radius modal (rounded-t-3xl sm:rounded-2xl) dan drag bar minimalis modern, serta memastikan perpindahan antar produk sejenis bergulir mulus ke posisi atas (scroll-to-top)."]},{id:"log-1-6-2",version:"v1.6.2",date:"2026-09-17",title:"Penyempurnaan Modal Syarat & Ketentuan, Kebijakan Privasi, dan Storefront Dialog (Modern Card Layout & Anti-Overlay Vercel Toolbar)",category:"optimization",badge:"Modal Card Layout v1.6.2",items:["Restrukturisasi Visual Modal Syarat & Ketentuan serta Kebijakan Privasi: Mengubah tampilan modal teks polos menjadi format kartu interaktif bertingkat bernomor (Numbered Badges) dengan padding proporsional, border halus, dan kontras tinggi sesuai tema aktif.","Eliminasi Glitch Format HTML Baris Baru: Memperbaiki parser teks di modals.js sehingga konten HTML dan default copy tidak lagi disusupi tag <br> yang menyebabkan spasi melompat/renggang tidak wajar.",'Penyelarasan Desain Modal Bottom Sheet: Menstandarisasi radius modal (rounded-t-3xl sm:rounded-2xl), menghapus drag bar abu-abu usang, mempercantik kotak ikon header dengan aksen tema resmi (w-10 h-10 rounded-2xl), serta melengkapi footer dengan tombol "Tutup" yang ramah mobile.',"Supresi Floating Toolbar Vercel Feedback: Menyuntikkan aturan CSS khusus untuk menyembunyikan widget floating Vercel live feedback/toolbar agar tidak lagi menutupi konten modal dan teks transaksi pelanggan pada layar mobile.","Harmonisasi Modal Tautan Cepat, Kategori, Brand, Panduan Belanja & Q&A: Menyatukan gaya visual seluruh dialog storefront ke standar modern tanpa tampilan jomplang."]},{id:"log-1-6-1",version:"v1.6.1",date:"2026-09-17",title:"Penyelarasan Desain Menyeluruh Storefront & CMS Modal (Visual Theme Consistency & Solid Design)",category:"optimization",badge:"Theme Consistency v1.6.1",items:["Harmonisasi Penuh Storefront & CMS dengan Theme Engine: Menghapus seluruh kelas warna hardcoded (seperti emerald-*, teal-*, pink-*) sehingga seluruh antarmuka toko beradaptasi 100% mulus dengan 19 palet tema warna sistem.","Penyelarasan Banner Progres Gratis Ongkir: Elemen pelacak progres gratis ongkir di keranjang belanja kini menggunakan variabel tema aktif (--color-primary) secara dinamis baik pada progress bar, ikon, teks, maupun badge.","Standarisasi Modal Dialog & Bottom Sheet: Seluruh modal dialog (Ulasan Pelanggan, Poin Hadiah Member, Kupon Promo, Log Pembaruan Sistem, Jaminan Mutu, Keamanan & Privasi, Konfirmasi, Edit Harga Cepat, dan Restock) distandarisasi ke border-radius solid rounded-t-3xl sm:rounded-2xl dengan latar belakang bg-slate-900/80 yang tajam dan konsisten.","Penghapusan Efek Blur Residual: Mengeliminasi sisa-sisa kelas backdrop-blur pada modal dan kontainer kartu storefront untuk memastikan antarmuka 100% solid, tajam, ringan diakses, dan bebas glitch grafis di semua browser.","Penyelarasan Form Tempo VIP & Kartu Customer Support: Formulir pembayaran tempo VIP dan kartu kontak WhatsApp di footer kini menyatu secara harmonis dengan warna aksen tema aktif toko.","Pembaruan Kompilasi & Optimalisasi Bundle Produksi: Memperbarui build produksi Vite v1.6.1 dengan ukuran bundle yang efisien dan sinkronisasi penuh."]},{id:"log-1-6-0",version:"v1.6.0",date:"2026-09-16",title:"Program Poin Belanja Hibrida & Loyalitas Member Cerdas (Hybrid Loyalty Points System)",category:"feature",badge:"Hybrid Loyalty Points",items:["Sistem Poin Belanja Hibrida (Hybrid Points Engine): Menghubungkan poin produk reward langsung dengan poin kelipatan minimal belanja untuk produk non-poin secara otomatis.","Kombinasi Poin Akurat: Produk yang memiliki poin langsung tetap menyumbangkan poin per itemnya, sementara produk tanpa poin diakumulasikan total belanjanya untuk mendapatkan poin kelipatan (misal tiap Rp 100.000 = 1 poin).","Pengaturan Fleksibel di Panel Admin: Administrator toko dapat mengaktifkan/menonaktifkan program poin belanja, menentukan nominal batas belanja (kelipatan Rp), serta jumlah poin yang diperoleh per kelipatan.","Bilah Progres & Notifikasi Gamifikasi di Keranjang: Pembeli dapat melihat langsung kalkulasi perolehan poin dan progres nominal belanja yang dibutuhkan menuju poin berikutnya.","Integrasi Checkout & Sinkronisasi Saldo Member: Total poin hibrida otomatis disimpan ke data pesanan (pointsEarned & pointsBreakdown) dan langsung mengkredit saldo akun member terdaftar saat transaksi selesai."]},{id:"log-1-5-2",version:"v1.5.2",date:"2026-09-16",title:"Penyelarasan & Sinkronisasi Visual Seluruh Form Pengaturan Toko (Harmonious & Unified Settings UI)",category:"optimization",badge:"Unified Settings UI",items:["Sinkronisasi Visual Menyeluruh (Anti-Jomplang): Menyelaraskan tata letak visual seluruh 6 kategori pengaturan toko (Profil, Kategori & Brand, Pengiriman & Lokasi, QRIS Pay, Sistem & API, dan Operasional) dengan standar container kartu modern dan tipografi yang harmonis.","Struktur Kartu Berbasis Badge Ikon: Seluruh blok form kini memiliki header kartu tematik berbingkai rounded-xl lengkap dengan ikon representatif, judul tegas, dan deskripsi fungsi yang jelas.","Tata Letak Kategori & Brand Lebih Lega: Mengelompokkan konfigurasi slider dan gaya tampilan (Grid/Pill/Logo) ke dalam sub-kartu tersendiri dilengkapi kotak tips pengalaman pengguna (UX).","Form Pembayaran QRIS & Integrasi Cloud Dipercantik: Menambahkan kartu preview QRIS terverifikasi serta status koneksi endpoint Google Apps Script (GAS) dengan indikator aktif yang elegan.","Harmonisasi Kontrol Operasional & PPN: Formulir pembatasan stok barang dan skema pajak PPN (Eksklusif/Inklusif) dikemas ke dalam kartu rapi dengan penjelasan skema perhitungan transaksi.","Navigasi Atas & Tombol Simpan Ganda: Menghadirkan tombol kembali berlabel jelas beserta tombol simpan cepat di baris header atas untuk kenyamanan akses di layar desktop maupun mobile."]},{id:"log-1-5-1",version:"v1.5.1",date:"2026-09-16",title:"Input Geolokasi Cerdas Google Maps (Tempel & Simpan Akurat Presisi Tinggi)",category:"feature",badge:"Smart Geolocation",items:["Smart Auto-Extract Google Maps: Admin cukup menempel tautan (link) atau angka koordinat dari Google Maps langsung pada satu kotak input cerdas di Pengaturan Pengiriman & Lokasi.","Presisi Tinggi Desimal Penuh: Sistem otomatis mengekstrak Latitude & Longitude dengan ketepatan presisi penuh (contoh: -7.82308507053985, 112.0988374794464) tanpa terpotong.","Tombol Tempel Otomatis Clipboard: Fitur satu klik untuk membaca clipboard dan menempel koordinat secara instan tanpa perlu ketik manual.",'Verifikasi Titik Pin Google Maps: Tombol "Cek di Maps" untuk membuka koordinat di tab baru Google Maps dan memastikan letak toko 100% akurat.',"Dukungan Tempel Koordinat Pelanggan saat Checkout: Memudahkan pembeli di perangkat laptop/PC menyematkan link/koordinat Maps rumah mereka saat sensor GPS tidak aktif."]},{id:"log-1-5-0",version:"v1.5.0",date:"2026-09-16",title:"Fitur Promo Gratis Ongkir Otomatis Minimal Belanja (Free Shipping Threshold) & Gamifikasi Keranjang",category:"feature",badge:"Free Shipping Promo",items:["Fitur Promo Bebas Ongkir Otomatis: Admin dapat mengaktifkan promo dan menentukan nominal batas minimal belanja (misal Rp 1.000.000) melalui menu Pengaturan > Pengiriman & Lokasi.","Bilah Kemajuan (Progress Bar) Interaktif di Keranjang Belanja: Menampilkan persentase pencapaian serta kalkulasi sisa belanja secara real-time yang memotivasi pelanggan untuk menambah belanja.","Pemberitahuan Selebrasi Pencapaian: Banner ucapan selamat dengan efek visual cerah dan animasi saat subtotal keranjang berhasil mencapai syarat gratis ongkir.","Kalkulasi Otomatis Tanpa Kode Voucher: Ongkos kirim delivery langsung terpotong 100% (Rp 0) di ringkasan pembayaran checkout tanpa mewajibkan pembeli mengklaim kode kupon manual.","Integrasi Penuh Dokumen & Struk: Diskon ongkir tercatat rapi pada database pesanan Firestore, struk thermal kasir, rincian faktur belanja A4, dan histori pesanan pembeli."]},{id:"log-1-4-1",version:"v1.4.1",date:"2026-09-16",title:"Penyempurnaan Tampilan Footer (Clean & Harmonious UI) & Maintenance Perawatan Sistem",category:"optimization",badge:"UI Refinement & Maintenance",items:["Desain ulang layout footer toko agar harmonis dengan tema warna emas/mustard, mengeliminasi kontras warna putih yang menyilaukan pada kartu WhatsApp dengan konsep dark glassmorphism modern.","Penyempurnaan tipografi dan spasi vertikal: menu navigasi bantuan & belanja cepat bebas dari simbol kaku, berganti interaksi hover dot dinamis yang lega.","Pembersihan kalimat redundan pada profil toko serta penyelarasan badge metode pembayaran dan logistik pengiriman 50:50 yang simetris.","Pemeriksaan integritas dependensi npm, audit keamanan dependensi, serta pemeliharaan cache storage multi-proyek.","Pembersihan berkas build usang dan pemeliharaan sinkronisasi penuh pada folder paket distribusi flashdisk & siap pakai."]},{id:"log-1-4-0",version:"v1.4.0",date:"2026-09-16",title:"Fitur Single Active Admin Session (Auto Kick-out Antar Perangkat) & Firestore Security Rules",category:"feature",badge:"Single Session Security",items:["Sistem Single Concurrent Admin Session: membatasi akses CMS Seller hanya dapat aktif di 1 perangkat/browser dalam satu waktu untuk mencegah tabrakan edit data dan kebocoran akses.","Mekanisme Realtime Auto Kick-out: jika admin login dari perangkat baru (misal laptop/desktop), sesi CMS di perangkat lama (misal HP atau browser lain) secara instan ditendang keluar secara aman (<300ms) disertai modal dialog penjelasan nama perangkat yang mengambil alih.","Deteksi perangkat cerdas (Smartphone Android, iPhone, Laptop Windows, Mac, Linux, dll) untuk identifikasi login yang transparan.","Validasi ganda startup sesi (auto-login guard) untuk memastikan sesi lokal yang telah digantikan perangkat lain tidak dapat membuka dashboard tanpa login ulang.","Pembaruan cloud Firestore Security Rules dengan otorisasi sub-koleksi admin_session khusus untuk ADMIN_UID terverifikasi."]},{id:"log-1-3-1",version:"v1.3.1",date:"2026-09-16",title:"Native Realtime Sync Sub-Koleksi Produk, Rekonsiliasi Multi-Browser & Hardening Rules",category:"bugfix",badge:"Realtime Multi-Device",items:["Pemasangan native listener onSnapshot langsung pada sub-koleksi products Firestore sehingga perubahan status produk (aktif/nonaktif/stok) dari admin desktop langsung terdorong seketika (<200ms) ke seluruh HP & browser aktif tanpa reload.","Rekonsiliasi otomatis data produk dari server saat snapshot pertama tiba (initial load), mengeliminasi bug perbedaan tampilan antar browser akibat cache localStorage yang usang.","Penyegaran antarmuka tabel admin reaktif otomatis via deteksi kontainer DOM tanpa terhambat status sesi login.","Pengamanan perbandingan ID produk dengan konversi string eksplisit (id.toString()) pada pencarian indeks array dan event handler onclick.","Optimasi evaluasi kondisi stok pada firestore.rules untuk mencegah type error dan mempercepat validasi transaksi checkout."]},{id:"log-1-3-0",version:"v1.3.0",date:"2026-09-15",title:"Hotfix Realtime Sync Multi-Perangkat, Eliminasi Stale Cache & Granular Sync",category:"bugfix",badge:"Realtime Sync & Hotfix",items:["Perbaikan bug fatal inisialisasi syncAppMeta() dan listener Firestore onSnapshot sehingga perubahan status produk (aktif/nonaktif/stok) di Admin Desktop seketika terupdate live di HP tanpa reload.","Penonaktifan persistentLocalCache IndexedDB yang menyebabkan data produk usang (stale) menolak pembaruan server Firestore.","Optimasi granular sync: penambahan penanganan event product_delete dan pengiriman updatedProductIds pada saveApp() sehingga hemat kuota Firestore hingga 95%.","Penyegaran antarmuka instan pada tombol toggle status aktif/habis produk di tabel admin.","Integrasi konfigurasi Firestore db.settings({ merge: true }) guna mencegah host override warning.","Pembaruan log pembaruan sistem dan sinkronisasi seluruh paket distribusi flashdisk & build siap pakai."]},{id:"log-1-2-0",version:"v1.2.0",date:"2026-09-15",title:"Maintenance Keamanan, Optimasi Bundle (-68%) & Isolasi Cache Multi-Projek",category:"maintenance",badge:"Maintenance & Optimasi",items:["Pembersihan celah keamanan dependensi melalui audit paket npm.","Optimasi Vite Rollup code-splitting: modul admin dan cetak dokumen dipisah ke chunk tersendiri, memangkas ukuran bundle storefront utama dari 509 kB ke 163 kB (turun 68%).","Isolasi cache multi-projek pada localStorage untuk mencegah data toko tertukar saat pengujian di localhost.","Percepatan First Contentful Paint (FCP) dan eliminasi peringatan batas ukuran bundle.","Pembaruan berkas siap pakai dan paket flashdisk installer."]},{id:"log-1-1-0",version:"v1.1.0",date:"2026-09-10",title:"Harmonisasi Warna Token, Desain Vouchers & Kategori Kompak",category:"optimization",badge:"Peningkatan Visual",items:["Harmonisasi variabel CSS token warna tema (primary, primary-dark, primary-light) di seluruh komponen.","Penyesuaian tata letak kartu voucher, kategori, brand mitra, dan reward agar lebih padat dan hemat ruang di layar ponsel.","Penyempurnaan navigasi header desktop agar lebih bersih dan minimalis.","Perbaikan urutan CSS view-section untuk mencegah auto-redirect saat me-refresh halaman."]},{id:"log-1-0-0",version:"v1.0.0",date:"2026-09-01",title:"Peluncuran Sistem Web & POS Kasir Toko Putri Resmi",category:"feature",badge:"Rilis Perdana",items:["Rilis resmi platform e-commerce dan kasir point-of-sales (POS) Toko Putri.","Katalog produk interaktif dengan varian harga, grosir, dan spesifikasi lengkap.","Keranjang belanja instan terhubung otomatis ke WhatsApp Checkout.","Dukungan metode pembayaran QRIS Nasional dan Transfer Bank.","Modul cetak struk kasir thermal 58mm/80mm, invoice A4, dan surat jalan.","PWA (Progressive Web App) dengan dukungan mode offline dan installable di HP/PC."]}],He=e=>{const t=e&&Array.isArray(e.changelog)?e.changelog:[],a=new Set(e&&Array.isArray(e.deletedChangelogIds)?e.deletedChangelogIds:[]),o=new Set(t.map(i=>i.id||i.version)),s=_s.filter(i=>!o.has(i.id)&&!o.has(i.version)&&!a.has(i.id)&&!a.has(i.version));return[...t.filter(i=>!a.has(i.id)&&!a.has(i.version)),...s].sort((i,d)=>{const p=new Date(i.date||"2026-01-01").getTime();return new Date(d.date||"2026-01-01").getTime()-p})},yt=e=>{const t=He(e);return t.length>0&&t[0].version||"v1.0.0"},Yt=()=>{const e=document.getElementById("storefront-footer-container");if(!e)return;const t=r.store||{},a=t.name||"Toko Putri",o=t.description||t.slogan||"Selamat datang di toko kami. Melayani pembelian online dan offline dengan kualitas terbaik.",s=t.email||"",l=t.operationalHours||"Buka Setiap Hari (08:00 - 17:00)",n=t.address||"",i=t.wa||"",d=t.footerCredit||"Seluruh hak cipta dilindungi undang-undang.",p=new Date().getFullYear(),m=yt(r);let b=(i||"").replace(/\D/g,"");b.startsWith("0")?b="62"+b.slice(1):!b.startsWith("62")&&b.length>0&&(b="62"+b);let f='<i class="fa-solid fa-store text-2xl text-[var(--color-primary)]"></i>';t.logo&&(t.logo.includes("http")||t.logo.includes("data:")?f=`<img src="${c(t.logo)}" alt="${c(a)}" class="h-full w-full max-h-10 max-w-10 object-contain" onerror="this.outerHTML='<i class=\\'fa-solid fa-store text-2xl text-[var(--color-primary)]\\'></i>'">`:f=`<i class="fa-solid ${c(t.logo)} text-2xl text-[var(--color-primary)]"></i>`);const h=b?`window.open('https://wa.me/${c(b)}', '_blank')`:"if(typeof window.showToast==='function') window.showToast('Nomor WhatsApp belum dikonfigurasi admin.');";e.innerHTML=`
    <!-- ================= FOOTER TOKO RESMI (MODERN, CLEAN, HARMONIS DENGAN TEMA) ================= -->
    <footer class="themed-footer relative mt-14 w-full overflow-hidden pb-[calc(6.5rem+env(safe-area-inset-bottom))] sm:pb-[calc(3.5rem+env(safe-area-inset-bottom))]">
      <div class="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-[1240px] pt-10 sm:pt-14 pb-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <!-- Kolom 1: Profil Perusahaan & Brand -->
          <div class="flex flex-col items-start text-left md:col-span-6 lg:col-span-4">
            <div class="mb-4 flex items-center gap-3.5">
              <div class="flex h-13 w-13 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white p-2.5 shadow-md">
                ${f}
              </div>
              <div class="flex flex-col items-start min-w-0">
                <h3 class="text-base sm:text-lg font-black tracking-tight text-white leading-tight break-words max-w-full">${c(a)}</h3>
                <span class="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/15 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-[var(--color-primary)]">
                  <i class="fa-solid fa-circle-check"></i> Verified Official Store
                </span>
              </div>
            </div>

            <p class="mb-4 max-w-md text-xs font-normal leading-relaxed text-white/80">
              ${c(o)}
            </p>

            <!-- Value Trust Pill (Tidak mengulang kalimat deskripsi) -->
            <div class="mb-3.5 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white/90 shadow-xs">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                <span class="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]"></span>
              </span>
              <span>Siap Kirim &amp; Ambil di Toko Fisik</span>
            </div>

            <!-- Store Address (Formatted Card) -->
            ${n?`
            <div class="text-xs text-white/80 flex items-start gap-2.5 max-w-md bg-white/5 border border-white/10 rounded-xl p-3">
              <i class="fa-solid fa-location-dot text-[var(--color-primary)] mt-0.5 shrink-0 text-sm"></i>
              <span class="leading-relaxed font-medium">${c(n)}</span>
            </div>`:""}
          </div>

          <!-- Wrapper Kolom 2 & 3:
               On Mobile: side by side (grid-cols-2)
               On Tablet/Desktop: contents (expands into 12-col grid)
          -->
          <div class="grid grid-cols-2 gap-6 md:contents">
            <!-- Kolom 2: Navigasi Belanja Cepat -->
            <div class="flex flex-col items-start text-left md:col-span-3 lg:col-span-2">
              <h4 class="mb-4 text-[11px] font-black uppercase tracking-wider text-white border-b border-white/10 pb-2.5 w-full flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></span> Belanja Cepat
              </h4>
              <ul class="space-y-3 w-full text-xs font-semibold">
                <li>
                  <a class="group inline-flex items-center gap-2 text-white/75 hover:text-white transition-all duration-200 cursor-pointer hover:translate-x-1" onclick="changeView('view-catalog')">
                    <span class="h-1.5 w-1.5 rounded-full bg-white/30 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    <span>Katalog Produk</span>
                  </a>
                </li>
                <li>
                  <a class="group inline-flex items-center gap-2 text-white/75 hover:text-white transition-all duration-200 cursor-pointer hover:translate-x-1" onclick="changeView('view-cart')">
                    <span class="h-1.5 w-1.5 rounded-full bg-white/30 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    <span>Keranjang</span>
                  </a>
                </li>
                <li>
                  <a class="group inline-flex items-center gap-2 text-white/75 hover:text-white transition-all duration-200 cursor-pointer hover:translate-x-1" onclick="changeView('view-wishlist')">
                    <span class="h-1.5 w-1.5 rounded-full bg-white/30 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    <span>Produk Favorit</span>
                  </a>
                </li>
                <li>
                  <a class="group inline-flex items-center gap-2 text-white/75 hover:text-white transition-all duration-200 cursor-pointer hover:translate-x-1" onclick="if(typeof window.openVoucherModal==='function') window.openVoucherModal();">
                    <span class="h-1.5 w-1.5 rounded-full bg-white/30 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    <span>Kupon Promo</span>
                  </a>
                </li>
                <li>
                  <a class="group inline-flex items-center gap-2 text-white/75 hover:text-white transition-all duration-200 cursor-pointer hover:translate-x-1" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal();">
                    <span class="h-1.5 w-1.5 rounded-full bg-white/30 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    <span>Poin Member</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Kolom 3: Layanan & Informasi -->
            <div class="flex flex-col items-start text-left md:col-span-3 lg:col-span-2">
              <h4 class="mb-4 text-[11px] font-black uppercase tracking-wider text-white border-b border-white/10 pb-2.5 w-full flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></span> Bantuan
              </h4>
              <ul class="space-y-3 w-full text-xs font-semibold">
                <li>
                  <a class="group inline-flex items-center gap-2 text-white/75 hover:text-white transition-all duration-200 cursor-pointer hover:translate-x-1" onclick="openShoppingGuideModal()">
                    <span class="h-1.5 w-1.5 rounded-full bg-white/30 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    <span>Cara Memesan</span>
                  </a>
                </li>
                <li>
                  <a class="group inline-flex items-center gap-2 text-white/75 hover:text-white transition-all duration-200 cursor-pointer hover:translate-x-1" onclick="changeView('view-orders')">
                    <span class="h-1.5 w-1.5 rounded-full bg-white/30 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    <span>Lacak Pesanan</span>
                  </a>
                </li>
                <li>
                  <a class="group inline-flex items-center gap-2 text-white/75 hover:text-white transition-all duration-200 cursor-pointer hover:translate-x-1" onclick="changeView('view-faq')">
                    <span class="h-1.5 w-1.5 rounded-full bg-white/30 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    <span>Pusat Bantuan &amp; FAQ</span>
                  </a>
                </li>
                <li>
                  <a class="group inline-flex items-center gap-2 text-white/75 hover:text-white transition-all duration-200 cursor-pointer hover:translate-x-1" onclick="openQualityGuaranteeModal()">
                    <span class="h-1.5 w-1.5 rounded-full bg-white/30 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    <span>Jaminan Mutu</span>
                  </a>
                </li>
                <li>
                  <a class="group inline-flex items-center gap-2 text-white/75 hover:text-white transition-all duration-200 cursor-pointer hover:translate-x-1" onclick="openSecurityModal()">
                    <span class="h-1.5 w-1.5 rounded-full bg-white/30 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                    <span>Keamanan</span>
                  </a>
                </li>
                <li>
                  <a class="group inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-all duration-200 cursor-pointer hover:translate-x-1" onclick="changeView('view-admin-login')">
                    <i class="fa-solid fa-lock text-[9px] text-amber-400"></i>
                    <span>Portal Admin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Kolom 4: Hubungi Kami & Jam Kerja -->
          <div class="flex flex-col items-start text-left md:col-span-6 lg:col-span-4">
            <h4 class="mb-4 text-[11px] font-black uppercase tracking-wider text-white border-b border-white/10 pb-2.5 w-full flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></span> Hubungi Kami
            </h4>
            <div class="w-full space-y-3">
              <!-- WhatsApp CTA Card (Themed Dark Card dengan Aksen Warna Tema Toko yang Selaras) -->
              <a
                class="group flex cursor-pointer items-center gap-3.5 rounded-2xl border border-[rgba(var(--color-primary-rgb),0.35)] bg-[rgba(var(--color-primary-rgb),0.1)] hover:bg-[rgba(var(--color-primary-rgb),0.2)] p-3.5 transition-all duration-200 shadow-sm hover:border-[rgba(var(--color-primary-rgb),0.6)] hover:shadow-md"
                href="javascript:void(0)"
                onclick="${h}"
              >
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white text-2xl shadow-md shadow-[#25D366]/30 group-hover:scale-105 transition-transform">
                  <i class="fa-brands fa-whatsapp"></i>
                </div>
                <div class="min-w-0 text-left">
                  <div class="flex items-center gap-1.5">
                    <span class="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
                    <p class="text-[9px] font-extrabold uppercase tracking-widest text-[var(--color-primary)]">Customer Support</p>
                  </div>
                  <p class="truncate text-xs font-black text-white group-hover:text-white transition-colors">Konsultasi via WhatsApp</p>
                  <p class="text-[10px] font-medium text-white/70">Respon Cepat &amp; Ramah</p>
                </div>
                <div class="ml-auto text-white/30 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                  <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </div>
              </a>

              <!-- Email & Hours Card (Glass Translucent Selaras) -->
              <div class="rounded-2xl border border-white/10 bg-white/5 p-3.5 space-y-3 text-white shadow-xs">
                <!-- Email (if configured) -->
                ${s?`
                <a href="mailto:${c(s)}" class="flex items-center gap-2.5 text-white/85 hover:text-white transition-colors pb-2.5 border-b border-white/10">
                  <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white">
                    <i class="fa-solid fa-envelope text-xs"></i>
                  </div>
                  <span class="truncate text-xs font-bold tracking-wide">${c(s)}</span>
                </a>`:""}

                <!-- Operating Hours -->
                <div class="flex items-center gap-2.5 text-white/90">
                  <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-[var(--color-primary)]">
                    <i class="fa-solid fa-clock text-xs"></i>
                  </div>
                  <div class="min-w-0 text-left">
                    <p class="truncate text-xs font-bold text-white tracking-wide">${c(l)}</p>
                    <p class="text-[10px] font-medium text-white/60">Pemesanan online 24 jam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Payment & Shipping Badges Row (Harmonis, Proporsional & Modern) -->
        <div class="mt-10 border-t border-white/10 pt-7">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-start">
            <!-- Payment -->
            <div class="flex flex-col items-start w-full">
              <p class="mb-3 text-[10px] font-black uppercase tracking-wider text-white/90 flex items-center gap-2">
                <i class="fa-solid fa-credit-card text-[var(--color-primary)]"></i> Metode Pembayaran Resmi
              </p>
              <div class="flex flex-wrap items-center gap-2 w-full">
                <span class="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/90 transition-colors shadow-xs" title="QRIS Standar Nasional">
                  <i class="fa-solid fa-qrcode text-rose-300"></i> QRIS
                </span>
                <span class="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/90 transition-colors shadow-xs" title="Transfer Bank BCA">
                  <i class="fa-solid fa-building-columns text-blue-300"></i> BCA
                </span>
                <span class="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/90 transition-colors shadow-xs" title="Transfer Bank Mandiri">
                  <i class="fa-solid fa-building-columns text-amber-300"></i> Mandiri
                </span>
                <span class="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/90 transition-colors shadow-xs" title="Transfer Bank BRI">
                  <i class="fa-solid fa-building-columns text-sky-300"></i> BRI
                </span>
                <span class="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/90 transition-colors shadow-xs" title="Visa & Mastercard">
                  <i class="fa-brands fa-cc-visa text-indigo-300"></i> <i class="fa-brands fa-cc-mastercard text-orange-300"></i> Kartu
                </span>
                <span class="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/90 transition-colors shadow-xs" title="Bayar di Kasir Toko">
                  <i class="fa-solid fa-cash-register text-[var(--color-primary)]"></i> Kasir Toko
                </span>
              </div>
            </div>

            <!-- Shipping -->
            <div class="flex flex-col items-start w-full">
              <p class="mb-3 text-[10px] font-black uppercase tracking-wider text-white/90 flex items-center gap-2">
                <i class="fa-solid fa-truck-fast text-[var(--color-primary)]"></i> Jasa Pengiriman &amp; Logistik
              </p>
              <div class="flex flex-wrap items-center gap-2 w-full">
                <span class="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/90 transition-colors shadow-xs" title="Kirim Cepat Ekspedisi">
                  <i class="fa-solid fa-truck-fast text-sky-400"></i> Ekspedisi Cepat
                </span>
                <span class="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/90 transition-colors shadow-xs" title="Kargo Truk & Partai Besar">
                  <i class="fa-solid fa-truck-ramp-box text-amber-300"></i> Kargo &amp; Truk
                </span>
                <span class="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/90 transition-colors shadow-xs" title="Kurir Instan & Same Day">
                  <i class="fa-solid fa-motorcycle text-[var(--color-primary)]"></i> Kurir Instan
                </span>
                <span class="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/90 transition-colors shadow-xs" title="Ambil di Toko Fisik">
                  <i class="fa-solid fa-store text-sky-300"></i> Ambil Sendiri
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sub-Footer Bottom Bar (Clean Solid Bar) -->
      <div class="border-t border-white/10 bg-black/40 py-4">
        <div class="mx-auto flex w-full flex-col items-center justify-between gap-3 px-4 sm:px-6 md:flex-row lg:px-8 xl:max-w-[1240px]">
          <p class="text-[11px] font-medium text-white/80 text-center sm:text-left">
            &#169; <span>${p}</span> <span class="font-extrabold text-white">${c(a)}</span>. <span>${c(d)}</span>
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3 text-[10px] font-bold text-white">
            <button type="button" onclick="if(typeof window.openChangelogModal==='function') window.openChangelogModal();" class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider text-white hover:bg-white/20 transition-all active:scale-95 cursor-pointer shadow-xs" title="Lihat Catatan Pembaruan & Versi">
              <span class="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
              <span>${c(m)}</span> • Changelog
            </button>
            <span class="text-white/20">•</span>
            <span class="flex items-center gap-1 text-[var(--color-primary)] font-bold">
              <i class="fa-solid fa-lock"></i> SSL Secured
            </span>
            <span class="text-white/20">•</span>
            <button type="button" onclick="const c = document.querySelector('#view-catalog .scroll-content'); if (c) c.scrollTo({ top: 0, behavior: 'smooth' }); else window.scrollTo({ top: 0, behavior: 'smooth' });" class="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer active:scale-95 font-bold">
              Kembali ke Atas <i class="fa-solid fa-arrow-up text-[9px] text-[var(--color-primary)]"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
    `},Rs=()=>{let e=document.getElementById("guarantee-modal");e||(e=document.createElement("div"),e.id="guarantee-modal",e.className="fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=t=>{t.target===e&&Xt()},document.body.appendChild(e)),e.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-md rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-4">
            <div class="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
                <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2">
                    <i class="fa-solid fa-shield-halved text-[var(--color-primary)]"></i> Jaminan Mutu &amp; Kualitas
                </h3>
                <button onclick="closeQualityGuaranteeModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="space-y-3.5 text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <i class="fa-solid fa-certificate text-[var(--color-primary)] text-lg shrink-0 mt-0.5"></i>
                    <div>
                        <p class="font-bold text-slate-800 dark:text-white mb-0.5">100% Produk Berkualitas Resmi</p>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Seluruh produk yang kami sediakan terjamin keasliannya dan telah melalui proses sortir mutu terbaik.</p>
                    </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <i class="fa-solid fa-arrows-rotate text-[var(--color-primary)] text-lg shrink-0 mt-0.5"></i>
                    <div>
                        <p class="font-bold text-slate-800 dark:text-white mb-0.5">Garansi Toko Terpercaya</p>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Jika produk yang diterima tidak sesuai atau mengalami kendala, hubungi kami via WhatsApp untuk solusi penggantian cepat.</p>
                    </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <i class="fa-solid fa-headset text-[var(--color-primary)] text-lg shrink-0 mt-0.5"></i>
                    <div>
                        <p class="font-bold text-slate-800 dark:text-white mb-0.5">Layanan Purna Jual Responsif</p>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Customer service kami siap membantu Anda dengan ramah dan solutif setiap hari operasional.</p>
                    </div>
                </div>
            </div>
            <button onclick="closeQualityGuaranteeModal()" class="w-full primary-bg text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-95 shadow-sm">
                Tutup
            </button>
        </div>`,e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"})},Xt=()=>{const e=document.getElementById("guarantee-modal");!e||e.style.display==="none"||(e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250))},Ns=()=>{let e=document.getElementById("security-modal");e||(e=document.createElement("div"),e.id="security-modal",e.className="fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=t=>{t.target===e&&Zt()},document.body.appendChild(e)),e.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-md rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-4">
            <div class="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
                <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2">
                    <i class="fa-solid fa-lock text-[var(--color-primary)]"></i> Keamanan &amp; Privasi
                </h3>
                <button onclick="closeSecurityModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="space-y-3.5 text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <i class="fa-solid fa-shield-check text-[var(--color-primary)] text-lg shrink-0 mt-0.5"></i>
                    <div>
                        <p class="font-bold text-slate-800 dark:text-white mb-0.5">Enkripsi SSL 256-Bit</p>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Seluruh lalu lintas data transaksi dan kontak Anda dilindungi enkripsi standar industri internasional.</p>
                    </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <i class="fa-solid fa-user-shield text-[var(--color-primary)] text-lg shrink-0 mt-0.5"></i>
                    <div>
                        <p class="font-bold text-slate-800 dark:text-white mb-0.5">Privasi Data Pelanggan Terlindungi</p>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Nomor WhatsApp dan riwayat pesanan Anda hanya digunakan untuk kebutuhan pemrosesan pesanan dan poin loyalitas.</p>
                    </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <i class="fa-solid fa-qrcode text-[var(--color-primary)] text-lg shrink-0 mt-0.5"></i>
                    <div>
                        <p class="font-bold text-slate-800 dark:text-white mb-0.5">Pembayaran Resmi &amp; Terverifikasi</p>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Kanal QRIS Nasional dan transfer bank toko resmi tanpa perantara pihak ketiga yang meragukan.</p>
                    </div>
                </div>
            </div>
            <button onclick="closeSecurityModal()" class="w-full primary-bg text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-95 shadow-sm">
                Tutup
            </button>
        </div>`,e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"})},Zt=()=>{const e=document.getElementById("security-modal");!e||e.style.display==="none"||(e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250))};window.renderStorefrontFooter=Yt;window.openQualityGuaranteeModal=Rs;window.closeQualityGuaranteeModal=Xt;window.openSecurityModal=Ns;window.closeSecurityModal=Zt;const ve=()=>{if(Yt(),H("dyn-store-name",r.store.name||"Toko Putri"),H("dyn-store-slogan",r.store.slogan||r.store.tagline||r.store.desc||r.store.description||"Toko Online & Kasir Resmi"),r.store.logo){const n=k("dyn-store-logo-img"),i=k("dyn-store-logo-icon");r.store.logo.includes("http")||r.store.logo.includes("data:")?n&&(n.src=r.store.logo,n.onerror=()=>{n.onerror=null,n.src="https://placehold.co/100?text=Logo"},F("dyn-store-logo-img"),K("dyn-store-logo-icon")):i&&(i.className=`fa-solid ${c(r.store.logo)} text-xl text-[var(--color-primary)]`,F("dyn-store-logo-icon"),K("dyn-store-logo-img"))}let e=r.banners&&r.banners.length?`
    <div class="relative group/banner-wrapper w-full">
        <div id="banner-slider" class="flex overflow-x-auto gap-4 sm:gap-6 pb-4 pt-2 snap-x hide-scrollbar scroll-smooth" ontouchstart="clearInterval(window.bannerTmr)" ontouchend="setTimeout(() => window.startBannerAutoSlide?.(), 8000)" onmouseenter="clearInterval(window.bannerTmr)" onmouseleave="window.startBannerAutoSlide?.()" onscroll="window.onBannerScroll && window.onBannerScroll()">
            ${r.banners.map((n,i)=>{const d=n.type==="video"&&n.videoUrl,p=!d&&n.link?`onclick="window.open('${c(n.link)}', '_self')"`:"";if(d){const m=ga(n.videoUrl)||{type:"direct",directUrl:pt(n.videoUrl),embedUrl:fa(n.videoUrl)};let b="";return m.type==="youtube"?b=`
                <iframe
                    class="banner-video-iframe w-full h-full absolute inset-0 z-0 border-0 pointer-events-none select-none"
                    src="${c(m.embedUrl)}"
                    data-src="${c(m.embedUrl)}"
                    frameborder="0"
                    scrolling="no"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>`:m.type==="gdrive"?b=`
                <iframe
                    class="banner-video-iframe absolute z-0 border-0 pointer-events-none select-none"
                    src="${c(m.embedUrl)}"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    style="width:180%; height:210%; top:-55%; left:-40%; transform:scale(1); object-fit:cover;"
                ></iframe>`:b=`
                <video
                    class="banner-video-element w-full h-full object-cover absolute inset-0 z-0 pointer-events-none select-none"
                    src="${c(m.directUrl)}"
                    autoplay
                    loop
                    muted
                    playsinline
                    webkit-playsinline
                    onended="this.currentTime=0; this.play();"
                ></video>`,`
            <div id="banner-slide-${i}" class="banner-slide-item w-[88vw] sm:w-[520px] aspect-video snap-center shrink-0 rounded-3xl relative overflow-hidden group bg-black shadow-none border border-white/10 flex flex-col select-none">
                ${b}
                <!-- Shield Transparan: Mencegah klik/tap pada video agar video tidak bisa di-klik/di-pause -->
                <div class="absolute inset-0 z-15 bg-transparent pointer-events-auto cursor-default" onclick="event.preventDefault(); event.stopPropagation();"></div>
                <!-- Konten bawah: judul & tombol suara murni transparan tanpa shadow gradient -->
                <div class="absolute bottom-0 left-0 right-0 z-20 bg-transparent px-5 py-4 flex items-end justify-between pointer-events-none">
                    <div class="flex-1 min-w-0 pointer-events-none">
                        ${n.title?`<p class="text-white font-extrabold text-sm sm:text-base line-clamp-1">${c(n.title)}</p>`:""}
                        ${n.desc?`<p class="text-white/80 text-[10px] sm:text-xs font-medium line-clamp-1 mt-0.5">${c(n.desc)}</p>`:""}
                    </div>
                    <div class="ml-3 shrink-0 flex items-center gap-2 pointer-events-auto">
                        <button onclick="event.stopPropagation(); window.toggleBannerVideoSound(this, ${i});" type="button" aria-label="Aktifkan Suara Video" class="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer">
                            <i class="fa-solid fa-volume-xmark text-xs"></i> <span>Aktifkan Suara</span>
                        </button>
                    </div>
                </div>

            </div>`}return`
        <div ${p} class="banner-slide-item w-[88vw] sm:w-[480px] min-h-[180px] sm:min-h-[220px] snap-center shrink-0 rounded-3xl relative overflow-hidden group cursor-pointer bg-[var(--color-primary)] text-white shadow-none hover:-translate-y-1 hover:scale-[1.01] hover:shadow-none transition-all duration-300 border border-white/15 flex flex-col">
            <!-- Dynamic Solid Header Shapes -->
            <div class="absolute -right-10 -top-10 w-40 h-40 border-[16px] border-white/10 rounded-full pointer-events-none group-hover:scale-105 transition-transform duration-500"></div>
            <div class="absolute -left-12 top-10 w-24 h-24 bg-white/10 rounded-full border border-white/10 pointer-events-none transform -rotate-12 group-hover:-translate-x-1 transition-transform duration-500"></div>
            
            <div class="flex flex-1 w-full relative z-10">
                <div class="w-[60%] p-5 sm:p-6 md:p-7 flex flex-col justify-center z-20">
                    <span class="inline-block px-3 py-1 bg-black/25 rounded-full text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest w-max mb-3 border border-white/20 shadow-sm"><i class="fa-solid fa-star text-amber-300 mr-1 animate-pulse"></i> Promo</span>
                    <h2 class="text-[15px] sm:text-lg md:text-xl font-extrabold text-white leading-snug mb-2 drop-shadow-sm line-clamp-2 tracking-tight">${c(n.title||"Penawaran Spesial")}</h2>
                    <p class="text-[10px] sm:text-[11px] text-white/90 font-medium line-clamp-3 leading-relaxed mb-3">${c(n.desc||"Belanja sekarang dan dapatkan penawaran terbaik.")}</p>
                    ${n.link?'<button class="mt-auto bg-white text-slate-900 text-[9px] sm:text-[10px] uppercase tracking-wider font-extrabold py-2.5 px-4.5 rounded-full w-max hover:bg-slate-100 active:scale-95 transition-all shadow-md flex items-center gap-2 group-hover:pr-5">Beli Sekarang <i class="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i></button>':""}
                </div>
                <div class="w-[40%] relative z-10 flex items-center justify-center p-2 sm:p-4 pr-4 sm:pr-6">
                    ${n.img?`<img loading="lazy" src="${c(he(n.img,"w800-rw"))}" alt="${c(n.title||"Promo Banner")}" class="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105" onerror="this.style.display='none'">`:`
                    <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300">
                        <i class="fa-solid fa-gift text-4xl sm:text-5xl text-white"></i>
                    </div>`}
                </div>
            </div>
        </div>`}).join("")}
        </div>
        ${r.banners.length>1?`
        <!-- Navigation Arrows (Desktop) -->
        <button onclick="window.scrollBannerPrev()" type="button" aria-label="Banner Sebelumnya" class="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white items-center justify-center border border-slate-700 transition-all opacity-0 group-hover/banner-wrapper:opacity-100 shadow-xl active:scale-95">
            <i class="fa-solid fa-chevron-left text-sm"></i>
        </button>
        <button onclick="window.scrollBannerNext()" type="button" aria-label="Banner Selanjutnya" class="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white items-center justify-center border border-slate-700 transition-all opacity-0 group-hover/banner-wrapper:opacity-100 shadow-xl active:scale-95">
            <i class="fa-solid fa-chevron-right text-sm"></i>
        </button>

        <!-- Dots Indicator Navigation -->
        <div id="banner-dots-container" class="flex items-center justify-center gap-1.5 mt-2">
            ${r.banners.map((n,i)=>`
                <button onclick="window.scrollToBanner(${i})" type="button" aria-label="Slide ${i+1}" class="banner-dot-item ${i===0?"h-2.5 rounded-full transition-all duration-300 bg-[var(--color-primary)] w-7 shadow-sm":"w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"}" data-index="${i}"></button>
            `).join("")}
        </div>
        `:""}
    </div>`:"";P("dynamic-banners-container",e),setTimeout(Ke,500);const t=(r.vouchers||[]).filter(n=>n.isShow==="true"||n.isShow===!0),a=k("dynamic-vouchers-container");if(t.length>0&&a){a.classList.remove("hidden");let n=`
        <div class="flex items-center justify-between mb-2.5">
            <h3 class="font-bold text-slate-800 dark:text-white text-xs sm:text-sm tracking-tight flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white shadow-2xs">
                    <i class="fa-solid fa-ticket-simple text-xs -rotate-45"></i>
                </div> VOUCHER TOKO
            </h3>
        </div>
        <div class="flex gap-2.5 sm:gap-3 overflow-x-auto hide-scrollbar snap-x pb-3 pt-1">
            ${t.map(i=>{let d=i.type==="shipping_free"?"Gratis Ongkir":i.type==="percent"?`Diskon ${c(String(parseFloat(i.value)||0))}%`:`Diskon ${x(i.value)}`,p=[];i.minPurchase>0&&p.push(`Min. Blj ${x(i.minPurchase)}`),i.maxDiscount>0&&p.push(`Maks. ptg ${x(i.maxDiscount)}`),i.targetProduct&&p.push("Produk Khusus");let m=p.length>0?c(p.join(" • ")):"Tanpa min. belanja";return`
                <div class="w-[220px] sm:w-[245px] shrink-0 snap-start relative group cursor-pointer active:scale-95 transition-all duration-200" onclick="copyVoucher('${c(i.code)}')">
                    <div class="w-full h-[78px] sm:h-[82px] bg-[var(--color-primary)] rounded-xl shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex relative overflow-hidden border border-white/20 text-white">
                        <!-- Left/Right Ticket Punch Holes (Biting into the sides) -->
                        <div class="absolute -top-2 right-[25%] w-3.5 h-3.5 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-b border-white/10 z-20 pointer-events-none transform translate-x-1/2 transition-colors duration-300"></div>
                        <div class="absolute -bottom-2 right-[25%] w-3.5 h-3.5 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-t border-white/10 z-20 pointer-events-none transform translate-x-1/2 transition-colors duration-300"></div>
                        
                        <!-- Main Details (Left Side) -->
                        <div class="flex-1 px-3 py-2 sm:px-3.5 sm:py-2 flex flex-col justify-center relative z-10 min-w-0">
                            <h4 class="font-extrabold text-white text-xs sm:text-[13px] leading-tight mb-0.5 drop-shadow-xs line-clamp-1">${d}</h4>
                            <p class="text-[7.5px] sm:text-[8px] font-medium text-white/90 flex items-center gap-1 mb-1.5 uppercase tracking-wider line-clamp-1"><i class="fa-solid fa-circle-info text-white/70 text-[7px]"></i> ${m}</p>
                            <div class="inline-flex">
                                <span class="bg-black/30 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border border-white/20 flex items-center gap-1 font-mono w-max">
                                    <i class="fa-solid fa-ticket text-amber-300 text-[8px]"></i> ${c(i.code)}
                                </span>
                            </div>
                        </div>
                        
                        <!-- Divider Line -->
                        <div class="w-0 border-l-[1.5px] border-dashed border-white/30 relative z-10 my-2"></div>
                        
                        <!-- Action Area (Right Side) -->
                        <div class="w-[25%] flex flex-col items-center justify-center relative z-10 bg-black/15 group-hover:bg-black/25 transition-all duration-200">
                            <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-[var(--color-primary)] font-bold flex items-center justify-center mb-0.5 shadow-2xs group-hover:scale-105 transition-all">
                                <i class="fa-regular fa-copy text-xs"></i>
                            </div>
                            <span class="text-[8px] font-bold uppercase tracking-wider text-white drop-shadow-xs">Salin</span>
                        </div>
                    </div>
                </div>`}).join("")}
        </div>`;a.innerHTML=n}else a&&(a.classList.add("hidden"),a.innerHTML="");const o=[...r.categories||[]];P("dynamic-categories-container",o.map(n=>{const i=ae===n.name,d=decodeURIComponent(encodeURIComponent(n.name).replace(/'/g,"%27"));if(r.store.categoryStyle==="text"||!r.store.categoryStyle)return`<div onclick="filterCategory('${d}')" class="cursor-pointer shrink-0 snap-start group py-0.5"><div class="px-3.5 py-1.5 rounded-xl border transition-all duration-200 flex items-center gap-2 ${i?"bg-[var(--color-primary)] border-transparent text-white shadow-xs":"bg-slate-50 dark:bg-slate-800/90 border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[var(--color-primary)]/50 hover:bg-white dark:hover:bg-slate-800"}"><div class="w-5 h-5 rounded-md flex items-center justify-center ${i?"bg-white/20 text-white":"bg-white dark:bg-slate-700 text-slate-400 group-hover:text-[var(--color-primary)]"} transition-colors"><i class="fa-solid fa-layer-group text-[9px]"></i></div><span class="font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">${c(n.name)}</span></div></div>`;{const p=n.img&&!n.img.includes("10b981")?he(n.img,"w150-rw"):"https://placehold.co/150/f1f5f9/64748b?text=Cat";return`<div onclick="filterCategory('${d}')" class="flex flex-col items-center gap-1.5 cursor-pointer shrink-0 w-[64px] sm:w-[72px] group snap-start py-0.5"><div class="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-1.5 transition-all duration-200 ${i?"bg-[var(--color-primary-light)] border-2 border-[var(--color-primary)] shadow-xs dark:bg-[var(--color-primary-dark)]/20":"border border-slate-200 dark:border-slate-700 shadow-2xs group-hover:border-[var(--color-primary)] group-hover:-translate-y-0.5"} overflow-hidden"><img loading="lazy" src="${c(p)}" alt="${c(n.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/f1f5f9/64748b?text=Cat'" class="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"></div><span class="text-[8.5px] sm:text-[9px] text-center w-full line-clamp-1 leading-tight px-0.5 ${i?"font-bold text-[var(--color-primary)]":"font-semibold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]"} uppercase tracking-wider transition-colors">${c(n.name)}</span></div>`}}).join(""));const s=[...r.brands||[]],l=[{name:"Semua Merek",img:r.store.allBrandsIcon&&!r.store.allBrandsIcon.includes("10b981")?r.store.allBrandsIcon:"https://placehold.co/150/f1f5f9/475569?text=Semua+Merek"},...r.brands||[]];P("dynamic-brands-container",s.map(n=>{const i=ce===n.name,d=decodeURIComponent(encodeURIComponent(n.name).replace(/'/g,"%27"));if(r.store.brandStyle==="text")return`<div onclick="filterBrand('${d}')" class="cursor-pointer shrink-0 snap-start group py-0.5"><div class="px-3.5 py-1.5 rounded-xl border transition-all duration-200 flex items-center gap-2 ${i?"bg-[var(--color-primary)] border-transparent text-white shadow-xs":"bg-slate-50 dark:bg-slate-800/90 border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[var(--color-primary)]/50 hover:bg-white dark:hover:bg-slate-800"}"><div class="w-5 h-5 rounded-md flex items-center justify-center ${i?"bg-white/20 text-white":"bg-white dark:bg-slate-700 text-slate-400 group-hover:text-[var(--color-primary)]"} transition-colors"><i class="fa-solid fa-copyright text-[9px]"></i></div><span class="font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">${c(n.name)}</span></div></div>`;{const p=n.img&&!n.img.includes("10b981")?he(n.img,"w150-rw"):"https://placehold.co/150/f1f5f9/64748b?text=Brand";return`<div onclick="filterBrand('${d}')" class="flex flex-col items-center gap-1.5 cursor-pointer shrink-0 w-[64px] sm:w-[72px] group snap-start py-0.5"><div class="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden p-1.5 transition-all duration-200 ${i?"ring-2 ring-[var(--color-primary)] ring-offset-1 ring-offset-slate-50 dark:ring-offset-slate-800 shadow-xs":"border border-slate-200 dark:border-slate-700 shadow-2xs group-hover:border-[var(--color-primary)]/50 group-hover:-translate-y-0.5"}"><img loading="lazy" src="${c(p)}" alt="${c(n.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/f1f5f9/64748b?text=Brand'" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"></div><span class="text-[8.5px] sm:text-[9px] text-center w-full line-clamp-1 leading-tight px-0.5 ${i?"font-bold text-[var(--color-primary)]":"font-semibold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]"} uppercase tracking-wider transition-colors">${c(n.name)}</span></div>`}}).join("")),P("modal-brand-grid",l.map(n=>{const i=ce===n.name,d=decodeURIComponent(encodeURIComponent(n.name).replace(/'/g,"%27")),p=n.img&&!n.img.includes("10b981")?he(n.img,"w150-rw"):"https://placehold.co/150/f1f5f9/64748b?text=Brand";return`<button onclick="filterBrand('${d}'); closeBrandModal();" class="flex flex-col items-center gap-3 p-4 rounded-2xl border ${i?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.07)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-sm":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]/40 hover:shadow-sm"} transition-all active:scale-[0.96]"><div class="w-14 h-14 rounded-2xl flex items-center justify-center bg-white border border-slate-100 dark:border-slate-600 shadow-inner overflow-hidden p-1.5"><img loading="lazy" src="${c(p)}" alt="${c(n.name)}" class="w-full h-full object-contain" onerror="this.src='https://placehold.co/150/f1f5f9/64748b?text=Brand'"></div> <span class="text-[10px] sm:text-xs font-bold ${i?"text-[var(--color-primary)]":"text-slate-700 dark:text-slate-300"} text-center leading-tight line-clamp-2 uppercase tracking-widest">${c(n.name)}</span></button>`}).join("")),k("dyn-qris-img")&&r.payment&&(k("dyn-qris-img").src=r.payment.qrisUrl),typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog(),typeof window.applyBackgroundStyle=="function"&&window.applyBackgroundStyle(r.store.bgStyle,r.store.bgCustomUrl),ne(1),W()};window.rDyn=ve;const Os=async()=>{if(document.documentElement.classList.contains("dark")){const g=k("icon-theme");g&&(g.className="fa-solid fa-sun text-sm text-amber-500")}const e=()=>{r.products=r.products||[],r.categories=r.categories||[],r.brands=r.brands||[],r.vouchers=r.vouchers||[],r.changelog=r.changelog||[],r.products.forEach(g=>{g.img&&(g.img=M(g.img)),g.variants&&g.variants.forEach(v=>{v.img&&(v.img=M(v.img))})}),r.banners&&r.banners.forEach(g=>{g.img&&(g.img=M(g.img)),g.videoUrl&&(g.videoUrl=pt(g.videoUrl))}),r.categories&&r.categories.forEach(g=>{g.img&&(g.img=M(g.img),g.img.includes("10b981")&&(g.img="https://placehold.co/150/f1f5f9/64748b?text=Cat"))}),r.brands&&r.brands.forEach(g=>{g.img&&(g.img=M(g.img),g.img.includes("10b981")&&(g.img="https://placehold.co/150/f1f5f9/64748b?text=Brand"))}),r.store.logo&&(r.store.logo=M(r.store.logo)),r.store.allProductsIcon&&(r.store.allProductsIcon=M(r.store.allProductsIcon)),r.store.allBrandsIcon&&(r.store.allBrandsIcon=M(r.store.allBrandsIcon),r.store.allBrandsIcon.includes("10b981")&&(r.store.allBrandsIcon="https://placehold.co/150/f1f5f9/475569?text=Semua+Merek")),r.payment.qrisUrl&&(r.payment.qrisUrl=M(r.payment.qrisUrl)),I.forEach(g=>{g.img&&(g.img=M(g.img))}),ee.forEach(g=>{g.img&&(g.img=M(g.img))})},t=Ft?.projectId||"default",a=pe("freshmart_active_project");if(a&&a!==t)try{localStorage.removeItem("freshmart_cms_data"),localStorage.removeItem("freshmart_products"),localStorage.removeItem("freshmart_rewards"),localStorage.removeItem("freshmart_last_update"),localStorage.removeItem("freshmart_cart"),localStorage.removeItem("freshmart_wishlist")}catch{}O("freshmart_active_project",t);let o=JSON.parse(pe("freshmart_cms_data")||"null"),s=JSON.parse(pe("freshmart_products")||"null"),l=JSON.parse(pe("freshmart_rewards")||"null");parseInt(pe("freshmart_last_update")||"0");let n=!1;if(o?(Object.assign(r,J,o),r.store={...J.store,...o.store||{}},r.payment={...J.payment,...o.payment||{}},r.config={...J.config,...o.config||{}},r.config&&r.config.gasUrl&&(window.GAS_UPLOAD_URL=r.config.gasUrl),s&&(r.products=s),l&&(r.rewards=l),e(),r.store&&(Te(r.store.uiTheme,r.store.themeColor),Ce(r.store.bgStyle,r.store.bgCustomUrl)),Re(),X(),Ne(),ve(),W(),H("stat-products",r.products.filter(g=>g.isActive!=="false"&&g.isActive!==!1).length),$(),n=!0):C("Memuat Toko..."),!n)try{const g=await w.collection("freshmart").doc("cms_data").get();if(g.exists){const v=g.data(),A=v.lastUpdate||0;O("freshmart_cms_data",JSON.stringify(v)),Object.assign(r,J,v),r.store={...J.store,...v.store||{}},r.payment={...J.payment,...v.payment||{}},r.config={...J.config,...v.config||{}},r.config&&r.config.gasUrl&&(window.GAS_UPLOAD_URL=r.config.gasUrl);const T=await w.collection("freshmart").doc("cms_data").collection("products").get();r.products=T.docs.map(y=>y.data()).sort((y,V)=>(V.id||0)-(y.id||0)),O("freshmart_products",JSON.stringify(r.products)),O("freshmart_last_update",A.toString()),e(),r.store&&(Te(r.store.uiTheme,r.store.themeColor),Ce(r.store.bgStyle,r.store.bgCustomUrl)),Re(),X(),Ne(),ve(),W(),H("stat-products",r.products.filter(y=>y.isActive!=="false"&&y.isActive!==!1).length)}}catch{u("Mode Offline (Data Lokal)")}finally{$()}H("stat-products",r.products.filter(g=>g.isActive!=="false"&&g.isActive!==!1).length);const i=k("loader-store-name"),d=k("loader-tagline");i&&(i.textContent=(r.store.name||"").toUpperCase()),d&&(d.textContent=r.store.tagline||r.store.desc||r.store.address||"");const p=k("loader-logo-icon"),m=k("loader-logo-img"),b=r.store.logo&&r.store.logo!=="fa-store"?r.store.logo:"";b&&(p&&(p.style.display="none"),m&&(m.src=b,m.style.display="block")),St(),window.injectJSONLD("seo-website",{"@context":"https://schema.org","@type":"WebSite",name:"Toko Putri",url:window.location.origin}),window.injectJSONLD("seo-localbusiness",{"@context":"https://schema.org","@type":"HardwareStore",name:"Toko Putri",image:he(r.store.logo,"w300-rw"),description:"Solusi grosir dan e-commerce terpercaya untuk alat teknik, perkakas, dan perlengkapan pertukangan berkualitas.",url:window.location.origin,telephone:r.store.phone||"",address:{"@type":"PostalAddress",streetAddress:r.store.address||"",addressCountry:"ID"}});const h=new URLSearchParams(window.location.search).get("p");if(h&&r.products.find(g=>g.id==parseInt(h))){const g=new URLSearchParams(window.location.search);g.delete("p");let v=window.location.pathname;g.toString()&&(v+="?"+g.toString()),window.history.replaceState({},document.title,v),setTimeout(()=>openProductModal(parseInt(h)),600)}$()},L=async(e=null,t=null)=>{try{if(Array.isArray(e)){const o={lastUpdate:G.firestore.FieldValue.increment(1),updateType:t?.updateType||(e.length?"settings_change":"full"),changedKeys:e};t?.updatedProductIds&&Array.isArray(t.updatedProductIds)?o.updatedProductIds=t.updatedProductIds:o.updatedProductIds=G.firestore.FieldValue.delete(),e.forEach(s=>{s&&(o[s]=r[s])}),await w.collection("freshmart").doc("cms_data").set(o,{merge:!0})}else{const o={...r};delete o.products,delete o.auth,o.lastUpdate=G.firestore.FieldValue.increment(1),o.updateType="full",await w.collection("freshmart").doc("cms_data").set(o)}r.lastUpdate=(parseInt(pe("freshmart_last_update"))||r.lastUpdate||0)+1;const a={...r};delete a.products,delete a.auth,O("freshmart_cms_data",JSON.stringify(a)),O("freshmart_last_update",r.lastUpdate.toString()),O("freshmart_products",JSON.stringify(r.products))}catch{u("Tersimpan secara Lokal")}};let tt=!1,me=null,it=typeof document<"u"?document.hidden:!1,lt=!1,Se=!1;typeof document<"u"&&document.addEventListener("visibilitychange",()=>{if(it=document.hidden,!it&&lt&&me){lt=!1;const e=me;me=null,typeof window._doSyncCmsData=="function"&&window._doSyncCmsData(e)}});const nt=e=>{if(!e)return e;const t={...e};return t.id==null&&(t.id=0),typeof t.id=="string"&&!isNaN(t.id)&&(t.id=Number(t.id)),t.img&&(t.img=M(t.img)),t.variants&&t.variants.forEach(a=>{a.img&&(a.img=M(a.img))}),t},Ge=()=>{if(H("stat-products",r.products.filter(a=>a.isActive!=="false"&&a.isActive!==!1).length),Re(),X(),typeof ve=="function"?ve():typeof window.rDyn=="function"&&window.rDyn(),typeof W=="function"?W():typeof window.rCat=="function"&&window.rCat(),document.getElementById("admin-list-container")&&typeof window.rAdmItms=="function"){const a=window.cTab||"products";["products","colors"].includes(a)&&window.rAdmItms(a)}const t=window.cProd;if(t){const a=r.products.find(o=>o.id===t.id);if(a&&(window.cProd=a,typeof window.rProdMod=="function")){const o=document.getElementById("product-modal");o&&!o.classList.contains("hidden")&&!o.classList.contains("opacity-0")&&window.rProdMod()}}},Fs=()=>{if(window.unsubCmsRealtime)return;const e=async t=>{if(!t.exists)return;const a=t.data(),o=a.lastUpdate||0,s=parseInt(pe("freshmart_last_update")||"0");if(it){me=t,lt=!0;return}if(!(o===s&&o>0&&Se&&r.products&&r.products.length>0)){tt=!0;try{const l=a.updateType||"full",n=Array.isArray(a.updatedProductIds)?a.updatedProductIds.map(String):[];if(r.store={...J.store,...a.store||{}},a.categories&&(r.categories=a.categories),a.vouchers&&(r.vouchers=a.vouchers),a.banners&&(r.banners=a.banners),a.brands&&(r.brands=a.brands),a.banks&&(r.banks=a.banks),a.faqs&&(r.faqs=a.faqs),r.payment={...J.payment,...a.payment||{}},r.config={...J.config,...a.config||{}},r.taxSettings={...J.taxSettings,...a.taxSettings||{}},r.config&&r.config.gasUrl&&(window.GAS_UPLOAD_URL=r.config.gasUrl),r.banners&&r.banners.forEach(d=>{d.img&&(d.img=M(d.img)),d.videoUrl&&(d.videoUrl=pt(d.videoUrl))}),r.categories&&r.categories.forEach(d=>{d.img&&(d.img=M(d.img),d.img.includes("10b981")&&(d.img="https://placehold.co/150/f1f5f9/64748b?text=Cat"))}),r.brands&&r.brands.forEach(d=>{d.img&&(d.img=M(d.img),d.img.includes("10b981")&&(d.img="https://placehold.co/150/f1f5f9/64748b?text=Brand"))}),l==="product_delete"&&n.length>0)n.forEach(d=>{const p=r.products.findIndex(m=>(m.id!=null?m.id.toString():"")===d);p>-1&&r.products.splice(p,1)}),O("freshmart_products",JSON.stringify(r.products)),Se=!0,Ge();else if(!Se&&(!r.products||r.products.length===0)){const d=await w.collection("freshmart").doc("cms_data").collection("products").get();r.products=d.docs.map(p=>nt(p.data())).sort((p,m)=>(m.id||0)-(p.id||0)),O("freshmart_products",JSON.stringify(r.products)),Se=!0,Ge()}else Se=!0;if(O("freshmart_cms_data",JSON.stringify(a)),O("freshmart_last_update",o.toString()),r.store&&(Te(r.store.uiTheme,r.store.themeColor),Ce(r.store.bgStyle,r.store.bgCustomUrl)),St(),H("stat-products",r.products.filter(d=>d.isActive!=="false"&&d.isActive!==!1).length),typeof ve=="function"?ve():typeof window.rDyn=="function"&&window.rDyn(),typeof W=="function"?W():typeof window.rCat=="function"&&window.rCat(),Re(),X(),(window.isAdm||window.__localIsAdm)&&typeof window.rAdmItms=="function"){const d=window.cTab||"products";["categories","vouchers","banners","brands","banks","colors"].includes(d)&&window.rAdmItms(d)}}catch(l){console.error("Gagal sinkron realtime settings:",l)}finally{if(tt=!1,me){const l=me;me=null,e(l)}}}};window._doSyncCmsData=e,window.unsubCmsRealtime=w.collection("freshmart").doc("cms_data").onSnapshot(async t=>{if(tt){me=t;return}await e(t)},t=>{console.warn("Realtime listener error:",t)})},Ks=()=>{if(window.unsubProductsRealtime)return;let e=!0;window.unsubProductsRealtime=w.collection("freshmart").doc("cms_data").collection("products").onSnapshot(t=>{if(e){e=!1,Se=!0,r.products=t.docs.map(o=>nt(o.data())).sort((o,s)=>(s.id||0)-(o.id||0)),O("freshmart_products",JSON.stringify(r.products)),Ge();return}let a=!1;t.docChanges().forEach(o=>{const s=nt(o.doc.data()),l=o.doc.id;if(o.type==="added"||o.type==="modified"){const n=r.products.findIndex(i=>(i.id!=null?i.id.toString():"")===l);n>-1?r.products[n]=s:(r.products.unshift(s),r.products.sort((i,d)=>(d.id||0)-(i.id||0))),a=!0}else if(o.type==="removed"){const n=r.products.findIndex(i=>(i.id!=null?i.id.toString():"")===l);n>-1&&(r.products.splice(n,1),a=!0)}}),a&&(O("freshmart_products",JSON.stringify(r.products)),Ge())},t=>{console.warn("Realtime products listener error:",t)})},Hs=()=>{if(!window.unsubRewardsRealtime){if(!r.rewards||!r.rewards.length)try{const e=JSON.parse(pe("freshmart_rewards")||"null");e&&Array.isArray(e)&&(r.rewards=e,r.rewards.forEach(t=>{t.img&&(t.img=M(t.img))}))}catch{}window.unsubRewardsRealtime=w.collection("freshmart").doc("cms_data").collection("rewards").onSnapshot(e=>{r.rewards=e.docs.map(a=>a.data()).sort((a,o)=>(o.id||0)-(a.id||0)),r.rewards.forEach(a=>{a.img&&(a.img=M(a.img))}),O("freshmart_rewards",JSON.stringify(r.rewards)),window.isAdm&&window.cTab==="rewards"&&typeof window.rAdmItms=="function"&&window.rAdmItms("rewards"),typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog();const t=document.getElementById("member-modal");t&&t.style.display==="flex"&&currentMember&&typeof window.rMemberModalBody=="function"&&window.rMemberModalBody()},e=>{console.warn("Realtime hadiah gagal:",e)})}},St=e=>{try{const t=r.store?.name||"Toko Putri",a=r.store?.logo||"",o=/^(https?:|data:)/i.test(a)?a:"https://placehold.co/192x192?text=Logo",s=document.documentElement.classList.contains("dark")?"#0b1120":"#ffffff",l=e||r.store?.themeColor||localStorage.getItem("freshmart_theme_color")||"#10b981";let n=document.getElementById("dynamic-manifest");n||(n=document.createElement("link"),n.id="dynamic-manifest",n.rel="manifest",document.head.appendChild(n));let i=document.getElementById("dynamic-apple-icon");i||(i=document.createElement("link"),i.id="dynamic-apple-icon",i.rel="apple-touch-icon",document.head.appendChild(i)),i.href=o;let d=document.getElementById("dynamic-favicon");d||(d=document.createElement("link"),d.id="dynamic-favicon",d.rel="icon",document.head.appendChild(d)),d.href=o;const p={id:window.location.origin+"/",name:t,short_name:t,description:r.store?.slogan||t+" - Belanja online lebih mudah",start_url:window.location.origin+"/",scope:window.location.origin+"/",lang:"id",dir:"ltr",display:"standalone",display_override:["standalone","minimal-ui"],orientation:"portrait",categories:["shopping","business"],background_color:s,theme_color:l,icons:[{src:o,sizes:"192x192",type:"image/png",purpose:"any"},{src:o,sizes:"512x512",type:"image/png",purpose:"any"}]};if(n.dataset.blobUrl)try{URL.revokeObjectURL(n.dataset.blobUrl)}catch{}const m=URL.createObjectURL(new Blob([JSON.stringify(p)],{type:"application/manifest+json"}));n.dataset.blobUrl=m,n.href=m}catch(t){console.error("PWA Manifest Update Error: ",t)}};window.loadAppData=Os;window.saveApp=L;window.attachRealtimeStockSync=Fs;window.attachRealtimeProductsSync=Ks;window.attachRewardsRealtime=Hs;window.updatePwaManifest=St;function Us(e){if(!e)return"";const t=e.match(/\/d\/([a-zA-Z0-9_-]+)/);return t?`https://drive.google.com/file/d/${t[1]}/preview`:e}const Vs=e=>window.pushModalHistory?.(e);window.oAAdd=()=>{window.oAEd($t||window.cTab||"products",null)};window.oAEd=(e,t)=>{Ye(e),typeof window.setCTab=="function"&&window.setCTab(e),window.cTab=e,aa(t),typeof window.setEId=="function"&&window.setEId(t),window.eId=t;let a=t!=null&&t!==""?(r[e]||[]).find(p=>p&&p.id!=null&&String(p.id)===String(t)):null;H("admin-modal-title",t?"Edit Data":"Tambah Data");let o=ut[e]||[],s="";e==="products"&&(Xe(a&&a.variants?JSON.parse(JSON.stringify(a.variants)):[]),Pt(a&&a.wholesale?JSON.parse(JSON.stringify(a.wholesale)):[]),At(a&&a.specTable?JSON.parse(JSON.stringify(a.specTable)):[]));const l=["textarea","richtext","variants_builder","wholesale_builder","spec_table_builder"],n=["img","desc","name","isActive","tag","poTime","video"],i=p=>l.includes(p.type)||n.includes(p.key);o.forEach(p=>{let m=a?p.type==="number"&&a[p.key]!==void 0?a[p.key]:a[p.key]||"":"";const b=i(p)?"lg:col-span-2":"";if(s+=`<div class="flex flex-col gap-1.5 ${b}"><label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">${p.label}</label>`,p.type==="textarea")s+=`<textarea autocomplete='off' id="af-${p.key}" class="admin-input resize-none shadow-sm bg-slate-50 dark:bg-slate-900" rows="3">${c(m)}</textarea>`;else if(p.type==="select")s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();">`,p.options.forEach(f=>{const h=String(m)===String(f.val);s+=`<option value="${f.val}" ${h?"selected":""} class="font-bold">${f.text}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(p.type==="dynamic_select_category")s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Pilih Kategori</option>`,r.categories.forEach(f=>{s+=`<option value="${c(f.name)}" ${m===f.name?"selected":""} class="font-bold">${c(f.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(p.type==="dynamic_select_brand")s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Tanpa Merek</option>`,(r.brands||[]).forEach(f=>{s+=`<option value="${c(f.name)}" ${m===f.name?"selected":""} class="font-bold">${c(f.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(p.type==="dynamic_select_products")s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold primary-text">-- Semua Produk (Tanpa Batasan) --</option>`,(r.products||[]).forEach(f=>{s+=`<option value="${f.id}" ${m==f.id?"selected":""} class="font-bold">${c(f.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(p.type==="variants_builder")s+='<div id="variants-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(p.type==="wholesale_builder")s+='<div id="wholesale-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(p.type==="spec_table_builder")s+='<div id="spec-table-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(p.key==="subCategory"){const f=[...new Set((r.products||[]).map(h=>(h.subCategory||"").trim()).filter(Boolean))].sort();s+=`<div class="relative flex items-center">
                <input autocomplete='off' type="text" id="af-${p.key}" list="subcategories-datalist" value="${c(m)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 !pr-10" placeholder="Ketik atau pilih jenis produk..." >
                <datalist id="subcategories-datalist">
                    ${f.map(h=>`<option value="${c(h)}"></option>`).join("")}
                </datalist>
                <i class="fa-solid fa-list-check absolute right-3 text-slate-400 pointer-events-none text-xs"></i>
            </div>`}else p.key==="sku"?s+=`<div class="relative flex items-center"><input autocomplete='off' type="${p.type}" id="af-${p.key}" value="${c(m)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 !pr-12" placeholder="Scan atau ketik..." ><button type="button" onclick="openCameraScanner('af-${p.key}')" class="absolute right-2 w-9 h-9 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-[var(--color-primary)] rounded-xl transition-all" title="Scan Barcode via HP"><i class="fa-solid fa-qrcode text-lg"></i></button></div>`:p.key==="img"?s+=`<div class="flex gap-3"><input autocomplete='off' type="text" id="af-${p.key}" value="${c(m)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="URL Gambar" ><label class="primary-bg-soft border primary-border text-[var(--color-primary)] font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-cloud-arrow-up sm:mr-2"></i><span class="hidden sm:inline">Upload</span><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'af-${p.key}')" ></label><label class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'af-${p.key}')" ></label></div>`:p.key==="videoUrl"?s+=`<div class="flex flex-col gap-2">
                <div class="flex gap-3">
                    <input autocomplete='off' type="text" id="af-${p.key}" value="${c(m)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="Paste URL Drive atau upload video di bawah">
                    <label class="primary-bg-soft border primary-border text-[var(--color-primary)] font-bold rounded-xl px-4 flex items-center justify-center cursor-pointer hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all shrink-0 active:scale-95 shadow-sm gap-2" title="Upload Video ke Google Drive">
                        <i class="fa-solid fa-film"></i><span class="hidden sm:inline text-[11px]">Upload Video</span>
                        <input type="file" accept="video/mp4,video/webm,video/quicktime,video/x-msvideo,video/3gpp" class="hidden" onchange="handleVideoUpload(this, 'af-${p.key}')">
                    </label>
                </div>
                <p class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-info text-[var(--color-primary)]"></i><b>Tips Autoplay:</b> Untuk video 100% otomatis play &amp; loop tanpa klik, gunakan link <b>YouTube / Shorts</b> atau <b>Direct MP4</b>. Upload Drive/HP juga didukung.</p>
                ${m?`<div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-black aspect-video w-full max-w-xs"><iframe src="${c(Us(m))}" class="w-full h-full" frameborder="0" allow="autoplay; fullscreen" loading="lazy"></iframe></div>`:""}
            </div>`:p.type==="richtext"?s+=`
            <div class="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-slate-900">
                <div class="bg-slate-100 dark:bg-slate-800 p-2 border-b border-slate-200 dark:border-slate-700 flex gap-1 flex-wrap items-center">
                    <button type="button" onclick="document.execCommand('bold',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition-colors" title="Cetak Tebal">B</button>
                    <button type="button" onclick="document.execCommand('insertOrderedList',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Daftar Angka"><i class="fa-solid fa-list-ol"></i></button>
                    <button type="button" onclick="document.execCommand('insertUnorderedList',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Daftar Titik"><i class="fa-solid fa-list-ul"></i></button>
                    <div class="w-px h-5 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                    <button type="button" onclick="document.execCommand('justifyLeft',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Rata Kiri"><i class="fa-solid fa-align-left"></i></button>
                    <button type="button" onclick="document.execCommand('justifyCenter',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Rata Tengah"><i class="fa-solid fa-align-center"></i></button>
                    <button type="button" onclick="document.execCommand('justifyRight',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Rata Kanan"><i class="fa-solid fa-align-right"></i></button>
                    <div class="w-px h-5 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                    <label class="w-8 h-8 rounded hover:bg-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center cursor-pointer text-[var(--color-primary)] transition-colors" title="Upload &amp; Sisipkan Gambar"><i class="fa-solid fa-image"></i>
                        <input type="file" accept="image/*" class="hidden" onchange="handleRTEditorImage(this, 'af-${p.key}-editor')" >
                    </label>
                </div>
                <div id="af-${p.key}-editor" contenteditable="true" class="p-4 min-h-[150px] max-h-[350px] overflow-y-auto outline-none text-sm text-slate-800 dark:text-slate-200 leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_b]:font-bold [&_strong]:font-bold [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-2">
                    ${m}
                </div>
            </div>`:s+=`<input autocomplete='off' type="${p.type}" id="af-${p.key}" value="${c(m)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 transition-all"
    ${p.key==="price"?'min="0" step="1" placeholder="0"':""}
    ${p.key==="priceNormal"?'min="0" step="1" placeholder="0 (kosong = tidak ada coretan)"':""}
    ${p.key==="hpp"?'min="0" step="1" placeholder="0"':""}
    ${p.key==="stock"?'min="0" step="0.01" placeholder="0"':""}
>`;s+="</div>"}),s=`<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 items-start">${s}</div>`,P("admin-modal-form",s),e==="products"&&(window.rVarsB?.(),window.rWholB?.(),window.rSpecB?.());const d=k("admin-modal");d&&d.classList.contains("hidden")&&Vs("admin"),F("admin-modal"),setTimeout(()=>{k("admin-modal").classList.remove("opacity-0"),k("admin-modal-box").classList.remove("scale-95")},10)};window.submitAdminForm=async()=>{if(we)return;B(!0);const e=$t||window.cTab||"products";let t={},a=ut[e]||[];for(let s of a)if(s.type==="variants_builder")t.variants=z.filter(l=>l.name.trim()!=="");else if(s.type==="wholesale_builder")t.wholesale=xe.filter(l=>parseFloat(l.minQty)>.01&&l.price>0);else if(s.type==="spec_table_builder")t.specTable=te.filter(l=>l.key.trim()!=="");else{let l="";if(s.type==="richtext"){const n=k(`af-${s.key}-editor`);l=n?n.innerHTML:""}else l=S(`af-${s.key}`);if(typeof l=="string"){if(l.startsWith("data:image/")&&l.length>3e5)return B(!1),u("Gambar Base64 terlalu besar! Upload file.");s.key==="img"&&(l=M(l))}t[s.key]=s.type==="number"?parseFloat(l)||0:l}if(!t.name&&!t.title&&!t.bankName&&!t.code)return B(!1),u("Judul/Nama/Kode wajib diisi!");if(e==="products"&&!t.sku&&(t.sku="SKU"+Date.now().toString().slice(-6)),e==="customers"){const s=window.normalizeWA?window.normalizeWA(t.phone):(t.phone||"").replace(/\D/g,"").replace(/^0/,"62");if(!s||s.length<10)return B(!1),u("Nomor WhatsApp tidak valid!");t.phone=s,t.points=parseFloat(t.points)||0,t.id=parseInt(s,10)}let o=null;if(e==="customers")if(r.customers||(r.customers=[]),Z){o=Z;let s=r.customers.findIndex(l=>l&&l.id!=null&&String(l.id)===String(Z));s>-1?r.customers[s]=t:r.customers.unshift(t)}else r.customers.unshift(t);else if(e==="rewards")if(r.rewards||(r.rewards=[]),Z){let s=r.rewards.findIndex(l=>l&&l.id!=null&&String(l.id)===String(Z));s>-1?(t.id=r.rewards[s].id,r.rewards[s]=t):t.id=Z}else t.id=Date.now(),r.rewards.unshift(t);else if(Z){r[e]||(r[e]=[]);let s=r[e].findIndex(l=>l&&l.id!=null&&String(l.id)===String(Z));if(s>-1){if(t.id=r[e][s].id,e==="products"){const l=r[e][s];t.totalSold=l.totalSold||0,t.variants&&t.variants.length&&l.variants&&t.variants.forEach(n=>{const i=l.variants.find(d=>d.name===n.name);i&&i.totalSold&&(n.totalSold=i.totalSold)})}r[e][s]=t}else t.id=Z,r[e].push(t)}else t.id=Date.now(),r[e]||(r[e]=[]),r[e].unshift(t);C("Menyimpan...");try{const s=typeof w<"u"&&w?w:window.db,l=typeof L=="function"?L:window.saveApp||(async()=>{});if(!s)throw new Error("Database Firebase belum terhubung");if(e==="products")await s.collection("freshmart").doc("cms_data").collection("products").doc(t.id.toString()).set(t),await l([],{updateType:"product_single",updatedProductIds:[t.id.toString()]});else if(e==="customers"){const n=s.collection("freshmart").doc("cms_data").collection("customers");o!==null&&o!==t.id&&await n.doc(o.toString()).delete().catch(()=>{}),await n.doc(t.phone).set(t,{merge:!0})}else e==="rewards"?await s.collection("freshmart").doc("cms_data").collection("rewards").doc(t.id.toString()).set(t):await l([e]);window.closeAdminModal?.(),window.rAdmItms?.(e),u("Tersimpan!")}catch(s){console.error("Gagal simpan admin data:",s),u("Gagal menyimpan: "+(s.message||""))}finally{B(!1),$()}};window.oADel=async(e,t)=>{window.showConfirm?.("Hapus Data","Data yang dihapus tidak bisa dikembalikan lagi.",async()=>{if(we)return;B(!0);const a=typeof w<"u"&&w?w:window.db,o=typeof L=="function"?L:window.saveApp||(async()=>{}),s=r[e]&&r[e].find(l=>l&&l.id!=null&&String(l.id)===String(t));r[e]=(r[e]||[]).filter(l=>!l||l.id==null||String(l.id)!==String(t)),C("Menghapus...");try{if(!a)throw new Error("Database Firebase belum terhubung");if(e==="products")await a.collection("freshmart").doc("cms_data").collection("products").doc(t.toString()).delete(),await o([],{updateType:"product_delete",updatedProductIds:[t.toString()]});else if(e==="customers"){const l=s?s.phone:t.toString();await a.collection("freshmart").doc("cms_data").collection("customers").doc(l).delete()}else e==="rewards"?await a.collection("freshmart").doc("cms_data").collection("rewards").doc(t.toString()).delete():await o([e]);window.rAdmItms?.(e),u("Berhasil Dihapus!")}catch(l){u("Gagal menghapus: "+(l.message||""))}finally{B(!1),$()}})};window.duplicateProduct=async e=>{window.showConfirm?.("Duplikat Produk","Menyalin data produk ini ke item baru?",async()=>{if(we)return;B(!0);const t=typeof w<"u"&&w?w:window.db,a=typeof L=="function"?L:window.saveApp||(async()=>{}),o=r.products.find(l=>l&&l.id!=null&&String(l.id)===String(e));if(!o){B(!1);return}let s=JSON.parse(JSON.stringify(o));s.id=Date.now()+Math.floor(Math.random()*1e3),s.name=s.name+" COPY",s.sku="",s.totalSold=0,s.variants&&s.variants.length>0&&(s.variants=s.variants.map(l=>(l.sku="",l.totalSold=0,l))),r.products.unshift(s),C("Menyalin...");try{if(!t)throw new Error("Database Firebase belum terhubung");await t.collection("freshmart").doc("cms_data").collection("products").doc(s.id.toString()).set(s),await a([],{updateType:"product_single",updatedProductIds:[s.id.toString()]}),window.rAdmItms?.("products"),u("Produk berhasil disalin!")}catch(l){u("Gagal menyalin: "+(l.message||""))}finally{B(!1),$()}},"Ya, Salin",!1)};window.rSpecB=()=>{const e=document.getElementById("spec-table-builder-container");if(!e)return;let t="";te.length>0?t+=`<div class="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm mb-3">
            <table class="w-full text-sm">
                <thead>
                    <tr class="bg-slate-100 dark:bg-slate-800">
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest w-5/12">Nama Spesifikasi</th>
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Nilai / Keterangan</th>
                        <th class="py-2.5 px-2 w-10"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                    ${te.map((a,o)=>`
                    <tr class="bg-white dark:bg-slate-900 group">
                        <td class="py-2 px-3"><input autocomplete='off' placeholder="Cth: Berat" class="w-full bg-transparent text-[13px] font-semibold text-slate-700 dark:text-slate-200 focus:outline-none placeholder:text-slate-300" value="${c(a.key)}" oninput="uSpec(${o},'key',this.value)"></td>
                        <td class="py-2 px-3"><input autocomplete='off' placeholder="Cth: 2.5 kg" class="w-full bg-transparent text-[13px] text-slate-600 dark:text-slate-300 focus:outline-none placeholder:text-slate-300" value="${c(a.val)}" oninput="uSpec(${o},'val',this.value)"></td>
                        <td class="py-2 px-2 text-center"><button type="button" onclick="rmSpec(${o})" class="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 text-rose-400 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-60 group-hover:opacity-100 active:scale-95 cursor-pointer" title="Hapus Baris"><i class="fa-solid fa-trash text-[10px]"></i></button></td>
                    </tr>`).join("")}
                </tbody>
            </table>
        </div>`:t+='<div class="text-center py-5 text-slate-400 dark:text-slate-500 text-[12px] font-medium"><i class="fa-solid fa-table-cells-large text-2xl mb-2 block opacity-30 text-[var(--color-primary)]"></i>Belum ada spesifikasi. Klik tombol di bawah untuk menambahkan.</div>',t+='<button type="button" onclick="addSpec()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-plus-circle text-base"></i> Tambah Baris Spesifikasi</button>',e.innerHTML=t};window.addSpec=()=>{te.push({key:"",val:""}),At(te),window.rSpecB()};window.rmSpec=e=>{te.splice(e,1),At(te),window.rSpecB()};window.uSpec=(e,t,a)=>{te[e]&&(te[e][t]=a)};window.rVarsB=()=>{const e=document.getElementById("af-category"),t=e?/\bcat\b/i.test(e.value):!1;let a=`<div class="space-y-5 mb-5">${z.map((o,s)=>{let l=o.isActive!==!1&&o.isActive!=="false";return`
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative transition-all duration-300 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 hover:shadow-md">
            <div class="flex items-center justify-between mb-5 pb-4 border-b border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-xl primary-bg text-[11px] font-bold flex items-center justify-center shadow-sm">${s+1}</div>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest">${o.name||"Varian Baru"}</span>
                </div>
                <div class="flex items-center gap-2">
                    <button type="button" onclick="exportVariantToColorDB(${s})" class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/40 hover:bg-[rgba(var(--color-primary-rgb),0.08)] transition-all flex items-center justify-center shadow-sm active:scale-95 cursor-pointer" title="Simpan ke Database Warna"><i class="fa-solid fa-database text-xs"></i></button>
                    <button type="button" onclick="rmVar(${s})" class="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center shadow-sm active:scale-95 cursor-pointer" title="Hapus Varian"><i class="fa-solid fa-trash text-xs"></i></button>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Varian (Warna/Ukuran)</label>
                    <input autocomplete='off' placeholder="Cth: Hijau Tosca" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${c(o.name)}" onchange="uVar(${s},'name',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Satuan / Unit</label>
                    <input autocomplete='off' placeholder="Cth: Pcs / Liter" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${c(o.unit||"")}" onchange="uVar(${s},'unit',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Promo / Jual (Rp)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${o.price}" onchange="uVar(${s},'price',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Coret (Opsional)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${o.priceNormal||""}" onchange="uVar(${s},'priceNormal',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Kode Warna (Khusus Cat)</label>
                    <div class="flex gap-3 items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2 shadow-sm">
                        <div class="relative shrink-0">
                            <input type="color" class="w-11 h-11 rounded-xl cursor-pointer border-2 border-slate-200 dark:border-slate-600 p-0.5 bg-white dark:bg-slate-700 shadow-inner" value="${o.colorCode||"#ffffff"}"
                                onchange="uVar(${s},'colorCode',this.value); document.getElementById('var-hex-${s}').value = this.value;" title="Klik untuk pilih warna">
                            <i class="fa-solid fa-eye-dropper absolute -bottom-1 -right-1 text-[9px] bg-white dark:bg-slate-700 text-slate-400 w-4 h-4 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-600 pointer-events-none"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-[9px] font-bold text-slate-400 mb-0.5 uppercase tracking-widest">Kode HEX</p>
                            <input autocomplete='off' id="var-hex-${s}" placeholder="#RRGGBB (opsional)" class="w-full bg-transparent text-sm font-mono font-bold focus:outline-none dark:text-white uppercase" value="${c(o.colorCode||"")}" onchange="uVar(${s},'colorCode',this.value)">
                        </div>
                        ${o.colorCode?`<div class="w-6 h-6 rounded-full border-2 border-white shadow-md shrink-0" style="background:${c(o.colorCode)}"></div>`:""}
                    </div>
                </div>
                ${t?"":`
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gambar Khusus Varian</label>
                    <div class="flex gap-2.5 items-center">
                        ${o.img?`<img src="${c(o.img)}" class="w-11 h-11 rounded-xl object-cover border-2 border-slate-200 dark:border-slate-600 shrink-0 shadow-sm" onerror="this.style.display='none'" loading="lazy">`:""}
                        <input autocomplete='off' id="var-img-${s}" placeholder="URL Gambar Varian" class="admin-input !text-sm flex-1 bg-white dark:bg-slate-800 shadow-sm" value="${c(o.img||"")}" onchange="uVar(${s},'img',fixD(this.value))">
                        <label class="primary-icon-btn border rounded-xl w-11 h-11 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-upload text-sm"></i><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'var-img-${s}')"></label>
                        <label class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rounded-xl w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera text-sm"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'var-img-${s}')"></label>
                    </div>
                </div>
                `}
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">SKU / Barcode</label>
                    <div class="relative h-[48px]">
                        <input autocomplete='off' id="var-sku-${s}" placeholder="Auto (Bisa Kosong)" class="admin-input !text-sm h-full bg-white dark:bg-slate-800 shadow-sm !pr-12" value="${c(o.sku||"")}" onchange="uVar(${s},'sku',this.value)">
                        <button type="button" onclick="openCameraScanner('var-sku-${s}')" class="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all"><i class="fa-solid fa-qrcode text-lg"></i></button>
                    </div>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Status Stok Varian</label>
                    <button type="button" onclick="tVars[${s}].isActive = ${!l}; rVarsB();" class="w-full py-3.5 px-4 rounded-xl text-[13px] font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2.5 border-2 active:scale-95 ${l?"primary-bg border-[var(--color-primary-dark)] shadow-md":"bg-slate-100 text-rose-500 border-rose-200 hover:bg-rose-50 dark:bg-slate-800 dark:border-rose-800"}">
                        ${l?'<i class="fa-solid fa-circle-check text-base"></i> STOK TERSEDIA':'<i class="fa-solid fa-ban text-base"></i> STOK HABIS'}
                    </button>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Modal / HPP (Rp)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${o.hpp||0}" onchange="uVar(${s},'hpp',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Stok Varian (Qty)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${o.stock!==void 0?o.stock:""}" onchange="uVar(${s},'stock',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-[var(--color-primary)] mb-2 uppercase tracking-widest flex items-center gap-1"><i class="fa-solid fa-star"></i> Poin Member (per unit terjual)</label>
                    <input autocomplete='off' placeholder="0" type="number" min="0" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${o.poin||0}" onchange="uVar(${s},'poin',this.value)">
                </div>
            </div>
        </div>`}).join("")}</div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <button type="button" onclick="openColorImportModal()" class="py-3 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm cursor-pointer"><i class="fa-solid fa-swatchbook text-[var(--color-primary)]"></i> Impor dari DB Warna</button>
        <button type="button" onclick="exportAllVariantsToColorDB()" class="py-3 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm cursor-pointer"><i class="fa-solid fa-upload text-[var(--color-primary)]"></i> Ekspor Semua ke DB</button>
        <button type="button" onclick="addVar()" class="py-3 primary-bg font-bold rounded-xl text-xs sm:text-sm border border-[rgba(var(--color-primary-rgb),0.3)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-glow cursor-pointer"><i class="fa-solid fa-plus-circle text-base"></i> Tambah Varian Baru</button>
    </div>`;P("variants-builder-container",a)};window.addVar=()=>{z.push({name:"",price:0,priceNormal:0,hpp:0,stock:0,sku:"",img:"",unit:"",colorCode:"",poin:0,isActive:!0}),Xe(z),window.rVarsB()};window.rmVar=e=>{z.splice(e,1),Xe(z),window.rVarsB()};window.uVar=(e,t,a)=>{z[e][t]=t==="price"||t==="priceNormal"||t==="hpp"||t==="stock"||t==="poin"?parseFloat(a)||0:t==="img"?M(a):a};window._openColorFloatModal=e=>{_closeColorFloatModal();const t=document.createElement("div");t.id="color-float-modal",t.className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/80 p-4 opacity-0 transition-opacity duration-300",t.onclick=o=>{o.target===t&&_closeColorFloatModal()};const a=document.createElement("div");a.id="color-float-box",a.className="relative w-full max-w-sm scale-95 transform rounded-3xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-800 overflow-y-auto max-h-[90vh]",a.innerHTML=e,t.appendChild(a),document.body.appendChild(t),requestAnimationFrame(()=>{t.classList.remove("opacity-0"),a.classList.remove("scale-95")})};window._closeColorFloatModal=()=>{const e=document.getElementById("color-float-modal");if(!e)return;const t=document.getElementById("color-float-box");e.classList.add("opacity-0"),t&&t.classList.add("scale-95"),setTimeout(()=>{e.parentNode&&e.remove()},300)};window.openColorImportModal=()=>{let e=r.colors||[];if(!e.length){u("Database Warna masih kosong!");return}let t={};e.forEach(o=>{let s=o.catalog||"Tanpa Katalog";t[s]||(t[s]=[]),t[s].push(o)});let a=`<div class="p-6">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2"><i class="fa-solid fa-swatchbook text-[var(--color-primary)]"></i> Pilih Warna</h3>
            <button type="button" onclick="_closeColorFloatModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="space-y-6 max-h-[60vh] overflow-y-auto pr-2">`;for(let o in t)a+=`<div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">${c(o)}</h4>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                ${t[o].map(s=>`
                    <button type="button" onclick="importColorToVariant('${c(s.name)}', '${c(s.hex||"")}')" class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50 hover:-translate-y-0.5 hover:shadow-md transition-all text-left bg-white dark:bg-slate-800 cursor-pointer">
                        <div class="w-8 h-8 rounded-full border-2 border-slate-100 dark:border-slate-600 shadow-sm shrink-0" style="background-color: ${c(s.hex||"transparent")}"></div>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2">${c(s.name)}</span>
                    </button>`).join("")}
            </div>
        </div>`;a+="</div></div>",_openColorFloatModal(a)};window.importColorToVariant=(e,t)=>{z.push({name:e,price:0,priceNormal:0,hpp:0,stock:0,sku:"",img:"",unit:"",colorCode:t||"",poin:0,isActive:!0}),Xe(z),window.rVarsB(),_closeColorFloatModal(),u("Warna ditambahkan!")};window.exportVariantToColorDB=async e=>{const t=z[e];if(!t||!t.name.trim()){u("Nama varian kosong!");return}if((r.colors||[]).find(l=>l.name.toLowerCase()===t.name.trim().toLowerCase())){u(`"${t.name}" sudah ada di Database Warna.`);return}let s=[...new Set((r.colors||[]).map(l=>l.catalog).filter(Boolean))].map(l=>`<option value="${c(l)}">${c(l)}</option>`).join("");_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"><i class="fa-solid fa-database text-[var(--color-primary)]"></i> Simpan ke Database Warna</h3>
            <div class="space-y-4">
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nama Warna</label><input id="exp-name" class="admin-input" value="${c(t.name)}"></div>
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Kode Warna (Hex)</label>
                    <div class="flex gap-3 items-center">
                        <input type="color" id="exp-hex-picker" value="${c(t.colorCode||"#ffffff")}" class="w-10 h-10 rounded-xl cursor-pointer" onchange="document.getElementById('exp-hex').value=this.value">
                        <input id="exp-hex" class="admin-input flex-1" placeholder="#FFFFFF (opsional)" value="${c(t.colorCode||"")}">
                    </div></div>
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek</label>
                    <input id="exp-catalog" list="exp-catalog-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll">
                    <datalist id="exp-catalog-list">${s}</datalist>
                </div>
            </div>
            <div class="flex gap-3 mt-6">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 text-sm hover:bg-slate-50 transition-all cursor-pointer">Batal</button>
                <button onclick="confirmExportVariantToColorDB()" class="flex-1 py-3 rounded-xl primary-bg text-white font-bold text-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer"><i class="fa-solid fa-floppy-disk mr-2"></i>Simpan</button>
            </div>
        </div>`)};window.confirmExportVariantToColorDB=async()=>{const e=(document.getElementById("exp-name")?.value||"").trim(),t=(document.getElementById("exp-hex")?.value||"").trim(),a=(document.getElementById("exp-catalog")?.value||"").trim();if(!e){u("Nama warna wajib diisi!");return}const o={id:Date.now(),name:e,hex:t,catalog:a};r.colors||(r.colors=[]),r.colors.push(o),_closeColorFloatModal(),C("Menyimpan ke Database Warna...");try{await L(["colors"]),u(`"${e}" berhasil disimpan ke Database Warna! 🎨`)}catch{u("Gagal menyimpan!")}finally{$()}};window.exportAllVariantsToColorDB=async()=>{const e=z.filter(o=>o.name.trim());if(!e.length){u("Tidak ada varian untuk diekspor!");return}r.colors||(r.colors=[]);let a=[...new Set(r.colors.map(o=>o.catalog).filter(Boolean))].map(o=>`<option value="${c(o)}">${c(o)}</option>`).join("");_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-upload text-[var(--color-primary)]"></i> Ekspor Semua Varian</h3>
            <p class="text-xs text-slate-500 mb-5">${e.length} varian akan diekspor ke Database Warna. Nama yang sudah ada di database akan dilewati.</p>
            <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek (berlaku untuk semua)</label>
                <input id="expall-catalog" list="expall-catalog-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll">
                <datalist id="expall-catalog-list">${a}</datalist>
            </div>
            <div class="flex gap-3 mt-6">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 text-sm hover:bg-slate-50 transition-all cursor-pointer">Batal</button>
                <button onclick="confirmExportAllVariants()" class="flex-1 py-3 rounded-xl primary-bg text-white font-bold text-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer"><i class="fa-solid fa-upload mr-2"></i>Ekspor</button>
            </div>
        </div>`)};window.confirmExportAllVariants=async()=>{const e=(document.getElementById("expall-catalog")?.value||"").trim(),t=z.filter(s=>s.name.trim());r.colors||(r.colors=[]);const a=new Set(r.colors.map(s=>s.name.toLowerCase()));let o=0;if(t.forEach(s=>{a.has(s.name.trim().toLowerCase())||(r.colors.push({id:Date.now()+o,name:s.name.trim(),hex:s.colorCode||"",catalog:e}),a.add(s.name.trim().toLowerCase()),o++)}),_closeColorFloatModal(),!o){u("Semua varian sudah ada di Database Warna!");return}C("Menyimpan...");try{await L(["colors"]),u(`${o} warna berhasil diekspor ke Database Warna! 🎨`)}catch{u("Gagal menyimpan!")}finally{$()}};window.openImportFromProductsModal=async()=>{const e=[];if((r.products||[]).forEach(l=>{(l.variants||[]).forEach(n=>{n.name&&n.name.trim()&&e.push({varName:n.name.trim(),hex:n.colorCode||"",prodName:l.name||""})})}),!e.length){u("Tidak ada varian produk yang ditemukan!");return}const t=new Set((r.colors||[]).map(l=>l.name.toLowerCase())),a=e.filter(l=>!t.has(l.varName.toLowerCase()));if(!a.length){u("Semua varian produk sudah ada di Database Warna!");return}let s=[...new Set((r.colors||[]).map(l=>l.catalog).filter(Boolean))].map(l=>`<option value="${c(l)}">${c(l)}</option>`).join("");window._pendingImportVariants=a,_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-box-archive text-[var(--color-primary)]"></i> Impor dari Semua Produk</h3>
            <p class="text-xs text-slate-500 mb-4">${a.length} nama varian baru ditemukan (yang sudah ada di database dilewati).</p>
            <div class="hide-scrollbar max-h-48 overflow-y-auto mb-4 space-y-2">
                ${a.map((l,n)=>`
                    <label class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-[var(--color-primary)] transition-all">
                        <input type="checkbox" id="imp-chk-${n}" checked class="w-4 h-4 rounded accent-[var(--color-primary)]">
                        <div class="w-5 h-5 rounded-full border border-slate-200 dark:border-slate-600 shrink-0" style="background-color:${c(l.hex||"transparent")}"></div>
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">${c(l.varName)}</p>
                            <p class="text-[10px] text-slate-400 truncate">dari: ${c(l.prodName)}</p>
                        </div>
                    </label>`).join("")}
            </div>
            <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek</label>
                <input id="impprod-catalog" list="impprod-cat-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll (opsional)">
                <datalist id="impprod-cat-list">${s}</datalist>
            </div>
            <div class="flex gap-3 mt-5">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 text-sm hover:bg-slate-50 transition-all cursor-pointer">Batal</button>
                <button onclick="confirmImportFromProducts()" class="flex-1 py-3 rounded-xl primary-bg font-bold text-sm transition-all active:scale-95 cursor-pointer"><i class="fa-solid fa-download mr-2"></i>Impor</button>
            </div>
        </div>`)};window.confirmImportFromProducts=async()=>{const e=window._pendingImportVariants||[];window._pendingImportVariants=null;const t=(document.getElementById("impprod-catalog")?.value||"").trim();r.colors||(r.colors=[]);const a=new Set(r.colors.map(s=>s.name.toLowerCase()));let o=0;if(e.forEach((s,l)=>{const n=document.getElementById(`imp-chk-${l}`);n&&n.checked&&!a.has(s.varName.toLowerCase())&&(r.colors.push({id:Date.now()+o,name:s.varName,hex:s.hex||"",catalog:t}),a.add(s.varName.toLowerCase()),o++)}),_closeColorFloatModal(),!o){u("Tidak ada warna baru yang ditambahkan!");return}C("Menyimpan...");try{await L(["colors"]),u(`${o} warna berhasil diimpor ke Database Warna! 🎨`),window.cTab==="colors"&&window.rAdmItms?.("colors")}catch{u("Gagal menyimpan!")}finally{$()}};const Gs=e=>window.pushModalHistory?.(e),ea=(e,t,a)=>window.requestCloseModal?.(e,t,a);window.openRestockModal=e=>{const t=r.products.find(l=>l&&l.id!=null&&String(l.id)===String(e));if(!t)return;const a=t.variants&&t.variants.length>0;let o="";a?o=t.variants.map((l,n)=>`
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-3 min-w-0 flex-1">
                    ${l.colorCode?`<span class="w-5 h-5 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${c(l.colorCode)}"></span>`:""}
                    <div class="min-w-0 flex-1">
                        <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${c(l.name)}</p>
                        <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(l.stock)||0}</span></p>
                    </div>
                </div>
                <input type="number" id="restock-var-${n}" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`).join(""):o=`
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div class="min-w-0 flex-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${c(t.name)}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(t.stock)||0}</span></p>
                </div>
                <input type="number" id="restock-main" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`;let s=document.getElementById("restock-modal");s||(s=document.createElement("div"),s.id="restock-modal",s.className="fixed inset-0 z-[110] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=l=>{l.target===s&&closeRestockModal()},document.body.appendChild(s)),s.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-boxes-stacked text-[var(--color-primary)]"></i> Restock Produk</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${c(t.name)}</p>
                </div>
                <button onclick="closeRestockModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="hide-scrollbar p-5 sm:p-6 overflow-y-auto flex-1 space-y-3">
                <p class="text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.3)] p-3 rounded-xl"><i class="fa-solid fa-circle-info text-[var(--color-primary)] mr-1.5"></i> Masukkan jumlah <b>penambahan</b> stok. Stok lama + nilai ini = stok baru.</p>
                ${o}
            </div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processRestock(${e})" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"><i class="fa-solid fa-save"></i> Simpan Restock</button>
            </div>
        </div>`,s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),Gs("restock")};window.closeRestockModal=(e=!1)=>{ea("restock",e,()=>{const t=document.getElementById("restock-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250))})};window.processRestock=async e=>{if(we)return;B(!0);const t=r.products.findIndex(n=>n&&n.id!=null&&String(n.id)===String(e));if(t<0){B(!1);return}const a=r.products[t],o=a.variants&&a.variants.length>0;let s=JSON.parse(JSON.stringify(a)),l=0;if(o)s.variants=s.variants.map((i,d)=>{const p=parseFloat(document.getElementById("restock-var-"+d)?.value)||0;return p>0&&(i.stock=(parseFloat(i.stock)||0)+p,l+=p,i.stock>0&&(i.isActive===!1||i.isActive==="false")&&(i.isActive=!0)),i}),s.variants.some(i=>(parseFloat(i.stock)||0)>0&&i.isActive!==!1&&i.isActive!=="false")&&(s.isActive===!1||s.isActive==="false")&&(s.isActive="true");else{const n=parseFloat(document.getElementById("restock-main")?.value)||0;n>0&&(s.stock=(parseFloat(s.stock)||0)+n,l+=n,s.stock>0&&(s.isActive===!1||s.isActive==="false")&&(s.isActive="true"))}if(l<=0)return B(!1),u("Masukkan jumlah restock terlebih dahulu!");C("Menyimpan Restock...");try{const n=typeof w<"u"&&w?w:window.db,i=typeof L=="function"?L:window.saveApp||(async()=>{});if(!n)throw new Error("Database Firebase belum terhubung");const d=n.collection("freshmart").doc("cms_data").collection("products").doc(e.toString());let p=0;await n.runTransaction(async m=>{const b=await m.get(d);if(!b.exists)throw new Error("Produk tidak ditemukan di server");const f=JSON.parse(JSON.stringify(b.data()));if(o)a.variants.forEach((g,v)=>{const A=parseFloat(document.getElementById("restock-var-"+v)?.value)||0;if(A<=0)return;const T=(f.variants||[]).findIndex(y=>y.name===g.name);T>-1&&(f.variants[T].stock=(parseFloat(f.variants[T].stock)||0)+A,f.variants[T].stock>0&&(f.variants[T].isActive===!1||f.variants[T].isActive==="false")&&(f.variants[T].isActive=!0))}),f.variants.some(g=>(parseFloat(g.stock)||0)>0&&g.isActive!==!1&&g.isActive!=="false")&&(f.isActive===!1||f.isActive==="false")&&(f.isActive="true"),p=f.variants.reduce((g,v)=>g+(parseFloat(v.stock)||0),0);else{const h=parseFloat(document.getElementById("restock-main")?.value)||0;f.stock=(parseFloat(f.stock)||0)+h,f.stock>0&&(f.isActive===!1||f.isActive==="false")&&(f.isActive="true"),p=f.stock}m.set(d,f),Object.assign(s,f)}),r.products[t]=s,await i([],{updateType:"stock_change",updatedProductIds:[e.toString()]}),closeRestockModal(),window.rAdmItms?.("products"),H("stat-products",r.products.filter(m=>m.isActive!=="false"&&m.isActive!==!1).length),u(`✅ Restock +${l} berhasil! Total stok: ${p}`)}catch(n){u("Gagal restock: "+(n.message||""))}finally{B(!1),$()}};window.toggleProductStatus=async(e,t)=>{if(we)return;B(!0);const a=r.products.findIndex(o=>o.id!=null&&o.id.toString()===e.toString());if(a>-1){r.products[a].isActive=t?"true":"false",C(t?"Mengaktifkan...":"Menonaktifkan...");try{const o=typeof w<"u"&&w?w:window.db,s=typeof L=="function"?L:window.saveApp||(async()=>{});if(!o)throw new Error("Database Firebase belum terhubung");await o.collection("freshmart").doc("cms_data").collection("products").doc(e.toString()).update({isActive:t?"true":"false"}),await s([],{updateType:"stock_change",updatedProductIds:[e.toString()]}),H("stat-products",r.products.filter(l=>l.isActive!=="false"&&l.isActive!==!1).length),window.rAdmItms?.("products"),u(t?"Produk Aktif!":"Stok Dikosongkan!")}catch(o){u("Gagal update status: "+(o.message||""))}finally{B(!1),$()}}else B(!1)};window.closeAdminModal=(e=!1)=>{ea("admin",e,()=>{k("admin-modal").classList.add("opacity-0"),k("admin-modal-box").classList.add("scale-95"),setTimeout(()=>K("admin-modal"),300)})};const qs=e=>window.pushModalHistory?.(e),Ws=(e,t,a)=>window.requestCloseModal?.(e,t,a);let U;window.openCameraScanner=async(e="search-input")=>{const t=k("scanner-modal");t&&t.classList.contains("hidden")&&qs("scanner"),F("scanner-modal"),setTimeout(()=>{k("scanner-modal").classList.remove("opacity-0")},10);try{await Ot("https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js",()=>typeof Html5Qrcode<"u")}catch{u("Gagal memuat modul kamera. Cek koneksi internet Anda."),closeCameraScanner();return}U||(U=new Html5Qrcode("reader"));const a={fps:10,qrbox:{width:250,height:250}};setTimeout(()=>{U&&U.start({facingMode:"environment"},a,o=>{let s=k(e);s&&(s.value=o,e==="search-input"?window.handleSearch?.(o):(s.dispatchEvent(new Event("input",{bubbles:!0})),s.dispatchEvent(new Event("change",{bubbles:!0})))),u("Barcode discan!"),closeCameraScanner()},o=>{}).catch(o=>{u("Akses kamera ditolak/gagal!"),closeCameraScanner()})},100)};window.closeCameraScanner=(e=!1)=>{Ws("scanner",e,()=>{if(k("scanner-modal").classList.add("opacity-0"),U)try{U.getState()===2||U.getState()===3?U.stop().then(()=>{U.clear(),U=null}).catch(t=>{U.clear(),U=null}):(U.clear(),U=null)}catch{U=null}setTimeout(()=>K("scanner-modal"),300)})};const zs=e=>window.pushModalHistory?.(e),Js=(e,t,a)=>window.requestCloseModal?.(e,t,a);let Fe=[];window.openQuickPriceModal=e=>{const t=r.products.find(l=>l&&l.id!=null&&String(l.id)===String(e));if(!t)return;const a=t.variants&&t.variants.length>0;Fe=!a&&t.wholesale?JSON.parse(JSON.stringify(t.wholesale)):[];let o="";a?o=t.variants.map((l,n)=>`
            <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
                <div class="flex items-center gap-2.5 min-w-0">
                    ${l.colorCode?`<span class="w-4 h-4 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${c(l.colorCode)}"></span>`:""}
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${c(l.name)}</p>
                </div>
                <div class="grid grid-cols-4 gap-2.5">
                    <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP</label><input type="number" id="qp-var-hpp-${n}" value="${l.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Jual</label><input type="number" id="qp-var-price-${n}" value="${l.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Coret</label><input type="number" id="qp-var-normal-${n}" value="${l.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-var-poin-${n}" value="${l.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                </div>
            </div>`).join(""):o=`
            <div class="grid grid-cols-4 gap-2.5">
                <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP / Modal</label><input type="number" id="qp-hpp" value="${t.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Harga Jual</label><input type="number" id="qp-price" value="${t.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Harga Coret</label><input type="number" id="qp-normal" value="${t.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-poin" value="${t.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
            </div>
            <div class="pt-2">
                <div class="flex justify-between items-center mb-2.5">
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Harga Grosir</label>
                    <button type="button" onclick="qpAddWhol()" class="text-[10px] font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] flex items-center gap-1"><i class="fa-solid fa-plus"></i> Tambah</button>
                </div>
                <div id="qp-whol-container" class="space-y-2"></div>
            </div>`;let s=document.getElementById("quickprice-modal");s||(s=document.createElement("div"),s.id="quickprice-modal",s.className="fixed inset-0 z-[110] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=l=>{l.target===s&&closeQuickPriceModal()},document.body.appendChild(s)),s.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-tags text-[var(--color-primary)]"></i> Edit Cepat Harga</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${c(t.name)}</p>
                </div>
                <button onclick="closeQuickPriceModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="hide-scrollbar p-5 sm:p-6 overflow-y-auto flex-1 space-y-3" id="qp-body">${o}</div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processQuickPrice(${e})" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"><i class="fa-solid fa-save"></i> Simpan Harga</button>
            </div>
        </div>`,a||rQpWhol(),s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),zs("quickprice")};window.rQpWhol=()=>{P("qp-whol-container",Fe.length?Fe.map((e,t)=>`
        <div class="flex items-center gap-2">
            <input type="number" min="1" placeholder="Min. Qty" value="${e.minQty||""}" onchange="qpWhol[${t}].minQty=parseFloat(this.value)||0" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <input type="number" min="0" placeholder="Harga/Unit" value="${e.price||""}" onchange="qpWhol[${t}].price=parseFloat(this.value)||0" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <button type="button" onclick="qpWhol.splice(${t},1); rQpWhol();" class="w-9 h-9 shrink-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all"><i class="fa-solid fa-trash text-xs"></i></button>
        </div>`).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-2">Belum ada tingkat harga grosir.</p>')};window.qpAddWhol=()=>{Fe.push({minQty:0,price:0}),rQpWhol()};window.closeQuickPriceModal=(e=!1)=>{Js("quickprice",e,()=>{const t=document.getElementById("quickprice-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250))})};window.processQuickPrice=async e=>{if(we)return;B(!0);const t=r.products.findIndex(s=>s&&s.id!=null&&String(s.id)===String(e));if(t<0){B(!1);return}const a=r.products[t],o=a.variants&&a.variants.length>0;C("Menyimpan Harga...");try{const s=typeof w<"u"&&w?w:window.db,l=typeof L=="function"?L:window.saveApp||(async()=>{});if(!s)throw new Error("Database Firebase belum terhubung");const n=s.collection("freshmart").doc("cms_data").collection("products").doc(e.toString());let i=null;await s.runTransaction(async d=>{const p=await d.get(n);if(!p.exists)throw new Error("Produk tidak ditemukan di server");const m=JSON.parse(JSON.stringify(p.data()));o?a.variants.forEach((b,f)=>{const h=(m.variants||[]).findIndex(g=>g.name===b.name);h<0||(m.variants[h].hpp=parseFloat(document.getElementById("qp-var-hpp-"+f)?.value)||0,m.variants[h].price=parseFloat(document.getElementById("qp-var-price-"+f)?.value)||0,m.variants[h].priceNormal=parseFloat(document.getElementById("qp-var-normal-"+f)?.value)||0,m.variants[h].poin=parseFloat(document.getElementById("qp-var-poin-"+f)?.value)||0)}):(m.hpp=parseFloat(document.getElementById("qp-hpp")?.value)||0,m.price=parseFloat(document.getElementById("qp-price")?.value)||0,m.priceNormal=parseFloat(document.getElementById("qp-normal")?.value)||0,m.poin=parseFloat(document.getElementById("qp-poin")?.value)||0,m.wholesale=Fe.filter(b=>parseFloat(b.minQty)>.01&&b.price>0)),d.set(n,m),i=m}),r.products[t]=i,await l([],{updateType:"stock_change",updatedProductIds:[e.toString()]}),closeQuickPriceModal(),window.rAdmItms?.("products"),u("✅ Harga berhasil diperbarui!")}catch(s){u("Gagal simpan harga: "+(s.message||""))}finally{B(!1),$()}};window.rWholB=()=>{let e=`<div class="space-y-4 mb-4">${xe.map((a,o)=>`
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative group transition-all duration-300 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40">
            <button onclick="rmWhol(${o})" class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md z-10 cursor-pointer"><i class="fa-solid fa-trash text-xs"></i></button>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Minimal Pembelian (Qty)</label>
                    <input autocomplete='off' type="number" step="0.01" placeholder="Cth: 12" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${a.minQty}" onchange="uWhol(${o},'minQty',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Satuan Spesial (Rp)</label>
                    <input autocomplete='off' type="number" placeholder="Cth: 15000" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${a.price}" onchange="uWhol(${o},'price',this.value)">
                </div>
            </div>
        </div>`).join("")}</div>
        <button onclick="addWhol()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-tags text-base"></i> Tambah Tingkatan Grosir</button>`;const t=document.getElementById("wholesale-builder-container");t&&(t.innerHTML=e)};window.addWhol=()=>{xe.push({minQty:2,price:0}),Pt(xe),window.rWholB()};window.rmWhol=e=>{xe.splice(e,1),Pt(xe),window.rWholB()};window.uWhol=(e,t,a)=>{xe[e][t]=parseFloat(a)||0};let $t="products";const Ye=e=>{$t=e,window.cTab=e};let ta="";const Qs=e=>{ta=e,window.aSq=e};let Z=null;const aa=e=>{Z=e,window.eId=e};let we=!1;const B=e=>{we=e};let z=[];const Xe=e=>{z=e};let xe=[];const Pt=e=>{xe=e};let te=[];const At=e=>{te=e};window.setCTab=Ye;window.setASq=Qs;window.setEId=aa;const Ys=(e,t=!1)=>{const a=document.querySelector("#view-admin .scroll-content");if(a&&(a.scrollTop=0),ha(e),ka(""),!t){const s=history.state;s&&s.view==="view-admin"&&s.tab?history.replaceState({view:"view-admin",tab:e},"",window.location.href):history.pushState({view:"view-admin",tab:e},"",window.location.href)}if(K("admin-dashboard-view"),F("admin-content-view"),F("btn-admin-back"),K("admin-logo-box"),H("admin-header-title",{orders:"Pesanan",settings:"Toko",products:"Produk",categories:"Kategori",brands:"Merek",banks:"Rekening",banners:"Banner",vouchers:"Voucher",customers:"Database Pelanggan",rewards:"Program Hadiah",reviews:"Ulasan Pelanggan",faqs:"Tanya Jawab / Q&A",tax:"Pajak & Keuangan",piutang:"Piutang Tempo",colors:"Database Warna",changelog:"Log Pembaruan Sistem"}[e]||"CMS"),e!=="orders"&&ge&&(ge(),_e(null)),e!=="customers"&&ue&&(ue(),Be(null)),e!=="reviews"&&be&&(be(),Le(null)),e==="settings")typeof window.rAdmSet=="function"&&window.rAdmSet();else if(e==="orders")typeof window.rAdmOrd=="function"&&window.rAdmOrd();else if(e==="tax")typeof window.rTaxPanel=="function"&&window.rTaxPanel();else if(e==="piutang")typeof window.rAdmPiutang=="function"&&window.rAdmPiutang();else if(e==="customers"){P("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),ue&&(ue(),Be(null));const s=w.collection("freshmart").doc("cms_data").collection("customers").onSnapshot(l=>{r.customers=l.docs.map(n=>n.data()),typeof window.rAdmL=="function"&&window.rAdmL("customers")},()=>{u("Gagal memuat data pelanggan!"),typeof window.rAdmL=="function"&&window.rAdmL("customers")});Be(s)}else if(e==="reviews"){P("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),be&&(be(),Le(null));const s=w.collection("freshmart").doc("cms_data").collection("reviews").onSnapshot(l=>{const n=l.docs.map(i=>i.data());n.sort((i,d)=>{const p=i.createdAt&&i.createdAt.toMillis?i.createdAt.toMillis():0;return(d.createdAt&&d.createdAt.toMillis?d.createdAt.toMillis():0)-p}),xa(n),typeof window.rAdmReviews=="function"&&window.rAdmReviews()},()=>{u("Gagal memuat ulasan!")});Le(s)}else e==="faqs"?typeof window.rAdmFAQ=="function"&&window.rAdmFAQ():e==="changelog"?typeof window.rAdmChangelog=="function"&&window.rAdmChangelog():typeof window.rAdmL=="function"&&window.rAdmL(e)};window.openAdminTab=Ys;let Ee="all";const Xs=e=>{if(!e)return"";try{const t=e.split("-");return t.length===3?new Date(parseInt(t[0]),parseInt(t[1])-1,parseInt(t[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e}catch{return e}},Zs=e=>{switch(e){case"feature":return{label:"Fitur Baru",icon:"fa-rocket",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"optimization":return{label:"Optimasi",icon:"fa-bolt-lightning",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"maintenance":return{label:"Maintenance",icon:"fa-wrench",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"bugfix":return{label:"Perbaikan",icon:"fa-bug-slash",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};default:return{label:"Update",icon:"fa-tag",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"}}},er=()=>{const e=k("changelog-items-container");if(!e)return;const t=He(r),a=Ee==="all"?t:t.filter(s=>s.category===Ee);if(a.length===0){e.innerHTML=`
        <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3">
                <i class="fa-solid fa-clipboard-list opacity-60"></i>
            </div>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan pada kategori ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Pilih filter kategori lain di atas</p>
        </div>`;return}let o="";a.forEach((s,l)=>{const n=l===0&&Ee==="all",i=Zs(s.category),d=Xs(s.date),p=(s.items||[]).map(m=>`
            <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[11px] mt-1 shrink-0"></i>
                <span>${c(m)}</span>
            </li>
        `).join("");o+=`
        <div class="relative pl-6 sm:pl-8 pb-6 border-l-2 ${n?"border-[var(--color-primary)]":"border-slate-200 dark:border-slate-700"} last:border-l-transparent last:pb-2">
            <!-- Timeline Node Indicator -->
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full ${n?"bg-[var(--color-primary)] ring-4 ring-[rgba(var(--color-primary-rgb),0.2)]":"bg-slate-300 dark:bg-slate-600"} flex items-center justify-center transition-all">
                ${n?'<span class="w-1.5 h-1.5 rounded-full bg-white"></span>':""}
            </div>

            <!-- Card Box -->
            <div class="rounded-2xl border ${n?"border-[var(--color-primary)]/40 bg-[rgba(var(--color-primary-rgb),0.03)] dark:bg-[rgba(var(--color-primary-rgb),0.06)] shadow-sm":"border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40"} p-4 sm:p-5 transition-all">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[11px] font-black tracking-wider uppercase ${n?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-800 text-white dark:bg-slate-700"}">
                            ${c(s.version||"v1.0.0")}
                        </span>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${i.colorClass}">
                            <i class="fa-solid ${i.icon} text-[9px] ${i.iconColor}"></i> ${c(i.label)}
                        </span>
                        ${n?`
                        <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[9px] font-black uppercase tracking-wider">
                            <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span> Versi Terbaru
                        </span>`:""}
                    </div>
                    <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                        <i class="fa-regular fa-calendar text-[10px]"></i> ${c(d)}
                    </span>
                </div>

                <h4 class="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-white leading-snug mb-3">
                    ${c(s.title||"Pembaruan Sistem")}
                </h4>

                <ul class="space-y-2">
                    ${p}
                </ul>
            </div>
        </div>`}),e.innerHTML=o},sa=e=>{Ee=e,document.querySelectorAll(".btn-changelog-filter").forEach(t=>{const a=t.getAttribute("data-category"),o=t.querySelector("i");a===e?(t.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent",o&&(o.className=o.className.replace(/text-\[[^\]]+\]/g,"").trim()+" text-white")):(t.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer",o&&a!=="all"?o.className=o.className.replace(/\btext-white\b/g,"").trim()+" text-[var(--color-primary)]":o&&a==="all"&&(o.className=o.className.replace(/\btext-white\b/g,"").trim()+" text-slate-400"))}),er()},tr=(e="all")=>{let t=k("changelog-modal");t||(t=document.createElement("div"),t.id="changelog-modal",t.className="fixed inset-0 z-[125] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",t.onclick=s=>{s.target===t&&ra()},t.innerHTML=`
        <div id="changelog-modal-box" class="w-full max-w-xl max-h-[90dvh] sm:max-h-[85dvh] bg-white dark:bg-[#0b1121] rounded-t-3xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden shadow-2xl transform translate-y-full sm:translate-y-8 transition-transform duration-300">
            <!-- Header Modal -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between shrink-0 bg-white dark:bg-[#0b1121]">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.12)] border border-[rgba(var(--color-primary-rgb),0.22)] text-[var(--color-primary)] flex items-center justify-center text-base sm:text-lg shadow-2xs shrink-0">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                                Log Pembaruan Sistem
                            </h3>
                            <span id="changelog-header-ver" class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider primary-bg text-white">
                                v1.3.1
                            </span>
                        </div>
                        <p class="text-[10px] sm:text-[11px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">
                            Transparansi riwayat perbaikan, fitur, dan performa Toko Putri
                        </p>
                    </div>
                </div>
                <button onclick="closeChangelogModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Filter Kategori Kancing (Horizontal Scroll) -->
            <div class="px-4 sm:px-5 py-2.5 border-b border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 sm:gap-2 overflow-x-auto hide-scrollbar shrink-0 bg-slate-50/60 dark:bg-slate-900/40">
                <button onclick="window.filterChangelog('all')" data-category="all" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent">
                    <i class="fa-solid fa-list-check text-[10px]"></i>
                    <span>Semua</span>
                </button>
                <button onclick="window.filterChangelog('feature')" data-category="feature" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-rocket text-[10px] text-[var(--color-primary)]"></i>
                    <span>Fitur Baru</span>
                </button>
                <button onclick="window.filterChangelog('optimization')" data-category="optimization" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-bolt-lightning text-[10px] text-[var(--color-primary)]"></i>
                    <span>Optimasi</span>
                </button>
                <button onclick="window.filterChangelog('maintenance')" data-category="maintenance" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-wrench text-[10px] text-[var(--color-primary)]"></i>
                    <span>Maintenance</span>
                </button>
                <button onclick="window.filterChangelog('bugfix')" data-category="bugfix" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-bug-slash text-[10px] text-[var(--color-primary)]"></i>
                    <span>Perbaikan</span>
                </button>
            </div>

            <!-- List Content Timeline -->
            <div class="p-4 sm:p-6 overflow-y-auto flex-1 hide-scrollbar">
                <div id="changelog-items-container" class="space-y-1"></div>
            </div>

            <!-- Footer Modal -->
            <div class="p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#0b1121]/90 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-2 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                    <span class="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
                    <span>Real-Time Sync Active</span>
                </div>
                <button onclick="closeChangelogModal()" class="px-5 py-2 rounded-xl primary-bg text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm">
                    Tutup
                </button>
            </div>
        </div>`,document.body.appendChild(t));const a=yt(r),o=k("changelog-header-ver");o&&(o.textContent=a),Ee=e,sa(e),t.style.display="flex",requestAnimationFrame(()=>{t.classList.remove("opacity-0");const s=k("changelog-modal-box");s&&s.classList.remove("translate-y-full","sm:translate-y-8")})},ra=()=>{const e=k("changelog-modal");if(!e||e.style.display==="none")return;e.classList.add("opacity-0");const t=k("changelog-modal-box");t&&t.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{e.style.display="none"},300)};window.openChangelogModal=tr;window.closeChangelogModal=ra;window.filterChangelog=sa;let Ae=!1,$e=null;const Tt=()=>{const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${o}`},ar=e=>{if(!e)return"";try{const t=e.split("-");return t.length===3?new Date(parseInt(t[0]),parseInt(t[1])-1,parseInt(t[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e}catch{return e}},ye=()=>{const e=k("admin-content");if(!e)return;const t=r.changelog||[],a=He(r),o=yt(r),s=(r.deletedChangelogIds||[]).length;let l="";a.length===0?l=`
        <div class="text-center py-12 text-slate-400">
            <i class="fa-solid fa-clipboard-list text-3xl mb-2 opacity-50"></i>
            <p class="text-xs font-bold">Belum ada catatan pembaruan</p>
        </div>`:l=a.map(n=>{const i=t.some(f=>f.id===n.id),d=n.version===o,p=(n.items||[]).map(f=>`
                <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                    <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[10px] mt-1 shrink-0"></i>
                    <span>${c(f)}</span>
                </li>
            `).join("");let m="Update",b="fa-tag";return n.category==="feature"?(m="Fitur Baru",b="fa-rocket"):n.category==="optimization"?(m="Optimasi",b="fa-bolt-lightning"):n.category==="maintenance"?(m="Maintenance",b="fa-wrench"):n.category==="bugfix"&&(m="Perbaikan",b="fa-bug-slash"),`
            <div class="p-4 sm:p-5 rounded-2xl border ${d?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.02)] dark:bg-[rgba(var(--color-primary-rgb),0.05)] shadow-sm":"border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"} space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="px-2.5 py-1 rounded-lg text-xs font-black tracking-wider uppercase ${d?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-800 text-white dark:bg-slate-700"}">
                            ${c(n.version)}
                        </span>
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-slate-200/80 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid ${b} text-[9px] text-[var(--color-primary)]"></i> ${c(m)}
                        </span>
                        ${d?'<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[9px] font-extrabold uppercase"><span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span> Versi Aktif</span>':""}
                        ${i?'<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] text-[9px] font-bold">Kustom Toko</span>':'<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 text-[9px] font-bold">Sistem Bawaan</span>'}
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500">
                            <i class="fa-regular fa-calendar mr-1"></i> ${c(ar(n.date))}
                        </span>
                        ${i?`
                        <button onclick="window.editChangelogEntry('${c(n.id)}')" class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs transition-all cursor-pointer" title="Edit Catatan">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button onclick="window.deleteChangelogEntry('${c(n.id)}')" class="w-7 h-7 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center text-xs transition-all cursor-pointer" title="Hapus Catatan">
                            <i class="fa-solid fa-trash"></i>
                        </button>`:`
                        <button onclick="window.deleteChangelogEntry('${c(n.id||n.version)}')" class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-rose-50 dark:bg-slate-800 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 flex items-center justify-center text-xs transition-all cursor-pointer" title="Hapus Log Ini dari Sistem">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>`}
                    </div>
                </div>

                <div>
                    <h4 class="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                        ${c(n.title)}
                    </h4>
                </div>

                <ul class="space-y-1.5 pt-1">
                    ${p}
                </ul>
            </div>`}).join(""),e.innerHTML=`
    <div class="max-w-4xl mx-auto space-y-6 pb-12">
        <!-- Top Action Card -->
        <div class="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.12)] border border-[rgba(var(--color-primary-rgb),0.22)] text-[var(--color-primary)] flex items-center justify-center text-xl shadow-2xs shrink-0">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <h3 class="text-base font-extrabold text-slate-900 dark:text-white">
                            Log Pembaruan Sistem (Changelog)
                        </h3>
                        <span class="px-2 py-0.5 rounded-md primary-bg text-white text-[10px] font-black uppercase">
                            ${c(o)}
                        </span>
                    </div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Setiap pembaruan akan langsung tampil secara real-time di antarmuka toko pengunjung
                    </p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="window.openChangelogModal()" class="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-eye text-slate-400"></i> Preview Etalase
                </button>
                <button onclick="window.toggleChangelogForm()" class="px-4 py-2 rounded-xl primary-bg text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95">
                    <i class="fa-solid fa-plus"></i> Tambah Catatan Baru
                </button>
            </div>
        </div>

        <!-- Form Tambah / Edit Catatan Pembaruan (Dinamis) -->
        <div id="changelog-form-box" class="${Ae?"block":"hidden"} p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-[var(--color-primary)]/40 shadow-lg space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h4 id="changelog-form-title" class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-circle-plus text-[var(--color-primary)]"></i> Tambah Catatan Pembaruan Baru
                </h4>
                <button onclick="window.toggleChangelogForm(false)" class="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 flex items-center justify-center text-xs">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Nomor Versi</label>
                    <input id="form-log-version" type="text" placeholder="Cth: v1.2.1" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none" />
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Kategori Update</label>
                    <select id="form-log-category" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none">
                        <option value="feature">Fitur Baru (Feature)</option>
                        <option value="optimization">Optimasi Performa (Optimization)</option>
                        <option value="maintenance">Pemeliharaan &amp; Maintenance</option>
                        <option value="bugfix">Perbaikan Bug (Bugfix)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Tanggal Rilis</label>
                    <input id="form-log-date" type="date" value="${Tt()}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none" />
                </div>
            </div>

            <div>
                <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Judul Ringkas Pembaruan</label>
                <input id="form-log-title" type="text" placeholder="Cth: Penambahan Fitur Cetak Invoice A4 & Perbaikan Kecepatan Katalog" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none" />
            </div>

            <div>
                <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Rincian Perubahan (Tulis 1 Poin per Baris)
                </label>
                <textarea id="form-log-items" rows="4" placeholder="- Memperbarui sistem pencarian nama produk&#10;- Mempercepat loading keranjang belanja&#10;- Menambahkan tombol cetak invoice baru" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none leading-relaxed"></textarea>
                <p class="text-[10px] text-slate-400 mt-1">Setiap baris baru otomatis menjadi 1 poin checklist pada tampilan kartu rilis.</p>
            </div>

            <div class="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button onclick="window.toggleChangelogForm(false)" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold transition-all">
                    Batal
                </button>
                <button onclick="window.saveChangelogEntry()" class="px-5 py-2 rounded-xl primary-bg text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95">
                    <i class="fa-solid fa-cloud-arrow-up"></i> Simpan &amp; Publikasikan
                </button>
            </div>
        </div>

        <!-- Daftar Riwayat Pembaruan -->
        <div class="space-y-3.5">
            <div class="flex flex-wrap items-center justify-between gap-2 px-1">
                <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    Riwayat Rilis &amp; Log Perubahan (${a.length} Versi)
                </h4>
                <div class="flex items-center gap-2">
                    ${s>0?`
                    <button onclick="window.restoreDefaultChangelogs()" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
                        <i class="fa-solid fa-rotate-left text-slate-400"></i> Pulihkan Log (${s})
                    </button>`:""}
                    ${a.length>5?`
                    <button onclick="window.pruneOldChangelogs()" class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/60 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer" title="Bersihkan riwayat log terlama agar tidak menumpuk">
                        <i class="fa-solid fa-broom"></i> Pangkas Log Lama
                    </button>`:""}
                </div>
            </div>
            <div class="space-y-3">
                ${l}
            </div>
        </div>
    </div>`},sr=(e=null)=>{Ae=e!==null?e:!Ae,Ae||($e=null),ye()},rr=e=>{const t=(r.changelog||[]).find(s=>s.id===e);if(!t)return;$e=e,Ae=!0,ye(),se("form-log-version",t.version||""),se("form-log-category",t.category||"feature"),se("form-log-date",t.date||Tt()),se("form-log-title",t.title||""),se("form-log-items",(t.items||[]).join(`
`));const a=k("changelog-form-title");a&&(a.innerHTML=`<i class="fa-solid fa-pen text-[var(--color-primary)]"></i> Edit Catatan Pembaruan (${c(t.version)})`);const o=k("changelog-form-box");o&&o.scrollIntoView({behavior:"smooth"})},or=async()=>{const e=(S("form-log-version")||"").trim(),t=S("form-log-category")||"feature",a=S("form-log-date")||Tt(),o=(S("form-log-title")||"").trim(),s=(S("form-log-items")||"").trim();if(!e)return u("Nomor versi harus diisi (contoh: v1.2.1)!");if(!o)return u("Judul pembaruan harus diisi!");if(!s)return u("Tuliskan minimal 1 poin rincian perubahan!");const l=s.split(`
`).map(i=>i.replace(/^[-*•]\s*/,"").trim()).filter(i=>i.length>0);if(l.length===0)return u("Rincian perubahan tidak boleh kosong!");C("Menyimpan catatan pembaruan...");const n={id:$e||"log-"+Date.now().toString(36),version:e.startsWith("v")?e:"v"+e,category:t,date:a,title:o,items:l,updatedAt:new Date().toISOString()};if(r.changelog=r.changelog||[],$e){const i=r.changelog.findIndex(d=>d.id===$e);i!==-1?r.changelog[i]=n:r.changelog.unshift(n)}else r.changelog.unshift(n);r.deletedChangelogIds&&Array.isArray(r.deletedChangelogIds)&&(r.deletedChangelogIds=r.deletedChangelogIds.filter(i=>i!==n.id&&i!==n.version));try{await L(["changelog","deletedChangelogIds"]),u("Catatan pembaruan berhasil dipublikasikan secara real-time!","success"),Ae=!1,$e=null,ye()}catch(i){u("Gagal menyimpan log pembaruan: "+i.message,"error")}finally{$()}},ir=e=>{const a=He(r).find(s=>s.id===e||s.version===e);if(!a)return;const o=a.version||a.title||"ini";le(`Hapus catatan pembaruan versi "${o}" dari daftar log toko?`,async()=>{C("Menghapus catatan...");try{r.changelog=(r.changelog||[]).filter(l=>l.id!==e&&l.version!==e),r.deletedChangelogIds=Array.isArray(r.deletedChangelogIds)?r.deletedChangelogIds:[];const s=a.id||e;r.deletedChangelogIds.includes(s)||r.deletedChangelogIds.push(s),a.version&&!r.deletedChangelogIds.includes(a.version)&&r.deletedChangelogIds.push(a.version),await L(["changelog","deletedChangelogIds"]),u(`Catatan pembaruan ${o} berhasil dihapus!`,"success"),ye()}catch(s){u("Gagal menghapus catatan: "+s.message,"error")}finally{$()}},"Ya, Hapus","Konfirmasi Hapus Log")},lr=()=>{const e=He(r);if(e.length<=5)return u(`Daftar log masih ringkas (${e.length} versi), belum perlu pembersihan.`,"info");const t=e.slice(5),a=t.length;le(`Pangkas ${a} catatan log pembaruan terlama dan hanya sisakan 5 versi terbaru? Tindakan ini merapikan daftar log toko agar tidak menumpuk spam.`,async()=>{C("Memangkas catatan lama...");try{const o=new Set;t.forEach(s=>{s.id&&o.add(s.id),s.version&&o.add(s.version)}),r.changelog=(r.changelog||[]).filter(s=>!o.has(s.id)&&!o.has(s.version)),r.deletedChangelogIds=Array.isArray(r.deletedChangelogIds)?r.deletedChangelogIds:[],o.forEach(s=>{r.deletedChangelogIds.includes(s)||r.deletedChangelogIds.push(s)}),await L(["changelog","deletedChangelogIds"]),u(`Berhasil membersihkan ${a} log lama! Tersisa 5 versi terbaru.`,"success"),ye()}catch(o){u("Gagal memangkas log: "+o.message,"error")}finally{$()}},"Ya, Pangkas Log","Pangkas Log Terlama")},nr=()=>{if((r.deletedChangelogIds||[]).length===0)return u("Tidak ada log bawaan yang terhapus.","info");le("Pulihkan kembali seluruh catatan log rilis sistem yang pernah dihapus?",async()=>{C("Memulihkan catatan log...");try{r.deletedChangelogIds=[],await L(["deletedChangelogIds"]),u("Seluruh log pembaruan bawaan berhasil dipulihkan!","success"),ye()}catch(t){u("Gagal memulihkan catatan: "+t.message,"error")}finally{$()}},"Ya, Pulihkan","Pulihkan Log Bawaan")};window.rAdmChangelog=ye;window.toggleChangelogForm=sr;window.editChangelogEntry=rr;window.saveChangelogEntry=or;window.deleteChangelogEntry=ir;window.pruneOldChangelogs=lr;window.restoreDefaultChangelogs=nr;export{Pa as A,Pe as a,Te as b,Ce as c,w as d,Os as e,Fs as f,Ks as g,Aa as h,ur as i,Hs as j,q as k,mr as l,Kt as m,Ut as n,ze as o,We as p,Ft as q,Re as r,rs as s,br as t,X as u,gr as v,Yt as w};
