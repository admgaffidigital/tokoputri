const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js"])))=>i.map(i=>d[i]);
import{a as o,c as M,s as et,b as R,d as H,f as x,e as h,g as F,h as O,i as S,j as c,w as Z,k as u,l as we,t as oe,m as Mt,n as aa,o as ge,p as be,q as fe,r as le,u as Ce,v as Ie,x as Pt,y as Lt,z as _t,A as Bt,B as sa,C as ra,D as te,E as $,F as A,G as P,H as pe,I as _e,J as de,K as je,L as ce,M as De,N as oa,O as la,P as Q,Q as Et,R as ia,S as na,T as qe,U as me,V as da,W as At,X as I,Y as it,Z as ca,_ as pa,$ as ma,a0 as ua,a1 as nt,a2 as ie,a3 as z,a4 as ba,a5 as fa,a6 as ga}from"./module-print-BNRNvO6h.js";import{f as K}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const xa="modulepreload",ha=function(e){return"/"+e},Tt={},wa=function(t,a,r){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=n?.nonce||n?.getAttribute("nonce");s=Promise.allSettled(a.map(d=>{if(d=ha(d),d in Tt)return;Tt[d]=!0;const p=d.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const b=document.createElement("link");if(b.rel=p?"stylesheet":xa,p||(b.as="script"),b.crossOrigin="",b.href=d,l&&b.setAttribute("nonce",l),document.head.appendChild(b),p)return new Promise((g,w)=>{b.addEventListener("load",g),b.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(n){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n}return s.then(n=>{for(const l of n||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},va={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const Nt=window.FIREBASE_CONFIG||va;K.apps.length||K.initializeApp(Nt);const v=K.firestore(),G=K.auth();typeof window<"u"&&(window.firebase=K,window.db=v,window.auth=G);try{v.settings({ignoreUndefinedProperties:!0,experimentalAutoDetectLongPolling:!0,merge:!0})}catch{}let ka=null;const tr=()=>{wa(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{ka=K.analytics()}catch{}}).catch(()=>{})},ya="K2ijSERTT2dg27yYGTEgn6XHSnW2",$e={emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#dc2626",600:"#b91c1c",700:"#991b1b",800:"#7f1d1d",900:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#ea580c",600:"#c2410c",700:"#9a3412",800:"#7c2d12",900:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#d97706",600:"#b45309",700:"#92400e",800:"#78350f",900:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#eab308",500:"#d97706",600:"#b45309",700:"#854d0e",800:"#713f12",900:"#3f1d0b"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#65a30d",600:"#4d7c0f",700:"#3f6212",800:"#365314",900:"#1a2e05"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#16a34a",600:"#15803d",700:"#166534",800:"#14532d",900:"#052e16"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#475569",600:"#334155",700:"#1e293b",800:"#0f172a",900:"#020617"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#57534e",600:"#44403c",700:"#292524",800:"#1c1917",900:"#0c0a09"}},$a=e=>{let t=parseInt(e.replace("#",""),16);return(t>>16&255)+","+(t>>8&255)+","+(t&255)},Ct=(e,t)=>{let a=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return a=Math.max(0,Math.min(255,a+t)),r=Math.max(0,Math.min(255,r+t)),s=Math.max(0,Math.min(255,s+t)),"#"+[a,r,s].map(i=>i.toString(16).padStart(2,"0")).join("")},Sa=e=>{if(!e)return;try{document.querySelectorAll('meta[name="theme-color"]').forEach(d=>d.remove())}catch{}const t=document.createElement("meta");t.setAttribute("name","theme-color"),t.setAttribute("content",e),document.head.appendChild(t);try{document.querySelectorAll('meta[name="msapplication-navbutton-color"], meta[name="msapplication-TileColor"]').forEach(d=>d.remove())}catch{}const a=document.createElement("meta");a.setAttribute("name","msapplication-navbutton-color"),a.setAttribute("content",e),document.head.appendChild(a);const r=document.createElement("meta");r.setAttribute("name","msapplication-TileColor"),r.setAttribute("content",e),document.head.appendChild(r);let s=document.querySelector('meta[name="apple-mobile-web-app-capable"]');s||(s=document.createElement("meta"),s.setAttribute("name","apple-mobile-web-app-capable"),document.head.appendChild(s)),s.setAttribute("content","yes");let i=document.querySelector('meta[name="mobile-web-app-capable"]');i||(i=document.createElement("meta"),i.setAttribute("name","mobile-web-app-capable"),document.head.appendChild(i)),i.setAttribute("content","yes");let n=document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');n||(n=document.createElement("meta"),n.setAttribute("name","apple-mobile-web-app-status-bar-style"),document.head.appendChild(n)),n.setAttribute("content","default"),typeof window.updatePwaManifest=="function"&&window.updatePwaManifest(e)},Pe=(e,t)=>{const a=e||localStorage.getItem("freshmart_ui_theme")||"emerald",r=$e[a]||$e.emerald;e&&localStorage.setItem("freshmart_ui_theme",a);const s=t||localStorage.getItem("freshmart_theme_color")||r[500];t&&localStorage.setItem("freshmart_theme_color",s);const i=$a(s),n=Ct(s,-30),l=Ct(s,150);return document.documentElement.style.setProperty("--color-primary",s),document.documentElement.style.setProperty("--color-primary-dark",n),document.documentElement.style.setProperty("--color-primary-light",l),document.documentElement.style.setProperty("--color-primary-rgb",i),Sa(s),r},ar=()=>{const e=localStorage.getItem("freshmart_theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;(e==="dark"||!e&&t)&&document.documentElement.classList.add("dark")},sr=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")},rr=()=>{const e=document.documentElement.classList.contains("dark"),t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")},Ae=(e="minimalist",t="")=>{const a=e||localStorage.getItem("freshmart_bg_style")||"minimalist",r=t??(localStorage.getItem("freshmart_bg_custom_url")||"");e&&localStorage.setItem("freshmart_bg_style",a),t!=null&&localStorage.setItem("freshmart_bg_custom_url",r);const i=(p=>{if(!p||typeof p!="string")return"";const m=p.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);return m?`https://lh3.googleusercontent.com/d/${m[1]}`:p.trim()})(r);document.documentElement.setAttribute("data-bg-style",a),document.body?.setAttribute("data-bg-style",a);const n=document.getElementById("app-container");n&&(n.setAttribute("data-bg-style",a),i?n.setAttribute("data-has-custom-bg","true"):n.removeAttribute("data-has-custom-bg"));const l=document.getElementById("dynamic-bg-container");if(!l)return;if(l.innerHTML="",l.className="pointer-events-none fixed inset-0 z-0 overflow-hidden",i){const p=document.createElement("div");p.className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-35 dark:opacity-25 pointer-events-none transition-all duration-500",p.style.backgroundImage=`url('${i}')`,l.appendChild(p);const m=document.createElement("div");m.className="absolute inset-0 z-0 bg-slate-50/70 dark:bg-[#0b1120]/80 pointer-events-none backdrop-blur-[0.5px]",l.appendChild(m)}let d="";if(a==="hero_arch"?d=`
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
        `:d="",d){const p=document.createElement("div");p.className="absolute inset-0 z-0 pointer-events-none",p.innerHTML=d,l.appendChild(p)}},Be=()=>{const e=o.store.useStock===!0||o.store.useStock==="true",t=M.filter(a=>{const r=o.products.find(s=>s.id===a.id);if(!r||r.isActive==="false"||r.isActive===!1)return!1;if(a.variantName){const s=(r.variants||[]).find(i=>i.name===a.variantName);if(!s||s.isActive===!1||s.isActive==="false"||e&&(parseFloat(s.stock)||0)<=0)return!1}else if(e&&(parseFloat(r.stock)||0)<=0)return!1;return!0});et(t),R("freshmart_cart",JSON.stringify(M))},Y=()=>{R("freshmart_cart",JSON.stringify(M));const e=typeof window.getEffP=="function"?window.getEffP:i=>i.price||0,t=parseFloat(M.reduce((i,n)=>i+(parseFloat(n.qty)||0),0).toFixed(2)),a=M.reduce((i,n)=>i+e(n)*(parseFloat(n.qty)||0),0);H("cart-badge",t.toString()),H("cart-total-preview",x(a));const r=h("cart-badge");r&&r.classList.toggle("scale-0",t<=0),document.querySelectorAll(".desktop-cart-badge").forEach(i=>{i.textContent=t.toString(),i.classList.toggle("hidden",t<=0)});const s=h("floating-cart-container");s&&(t>0?(s.classList.remove("scale-0","pointer-events-none"),s.classList.add("scale-100","pointer-events-auto")):(s.classList.remove("scale-100","pointer-events-auto"),s.classList.add("scale-0","pointer-events-none")))},xe=()=>{if(!M.length){F("cart-empty-state"),O("cart-bottom-bar"),O("btn-clear-cart"),F("spacer-cart"),S("cart-items-container","");return}O("cart-empty-state"),F("cart-bottom-bar"),F("btn-clear-cart"),O("spacer-cart");const e=typeof window.getEffP=="function"?window.getEffP:a=>a.price||0;let t=0;S("cart-items-container",M.map((a,r)=>{let s=parseFloat(a.qty)||0,i=e(a),n=i<a.price;t+=i*s;let l=a.colorCode?`<span class="w-3.5 h-3.5 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 shrink-0" style="background-color: ${c(a.colorCode)};"></span>`:"";return`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex gap-4 relative overflow-hidden group min-w-0 hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all duration-300">
            
            <div class="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white border border-slate-100 dark:border-slate-700/50 p-2 flex items-center justify-center overflow-hidden">
                <img loading="lazy" src="${c(a.img)}" alt="${c(a.name)}" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'">
            </div>
            
            <div class="flex-1 flex flex-col min-w-0 relative">
                <button onclick="rmCart(${r})" class="absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/50 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 transition-all active:scale-90 border border-slate-100 dark:border-slate-600 shadow-sm z-10"><i class="fa-solid fa-xmark text-sm"></i></button>
                
                <h4 class="text-[13px] sm:text-sm font-bold text-slate-800 dark:text-white leading-snug line-clamp-2 mb-1.5 pr-10 uppercase tracking-wide">${c(a.name)}</h4>
                
                <div class="flex flex-wrap items-center gap-1.5 mb-2.5">
                    ${n?'<span class="bg-amber-500 text-white px-2.5 py-0.5 rounded-full text-[9px] font-bold shadow-sm flex items-center gap-1 uppercase tracking-wide"><i class="fa-solid fa-layer-group"></i> Grosir</span>':""}
                    ${l}
                    ${a.variantName?`<span class="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[9px] font-bold border border-slate-200 dark:border-slate-600 uppercase tracking-wide">${c(a.variantName)}</span>`:""}
                    ${a.poTime?`<span class="amber-badge px-2 py-0.5 rounded-full text-[9px] font-bold flex items-center uppercase tracking-wide"><i class="fa-solid fa-clock mr-1"></i> PO ${c(a.poTime)}</span>`:""}
                </div>
                
                <div class="flex justify-between items-end mt-auto pt-1">
                    <div>
                        ${n?`<p class="text-[10px] line-through text-slate-400 font-bold mb-0.5">${x(a.price)}</p>`:""}
                        <div class="flex items-baseline gap-1">
                            <p class="text-[var(--color-primary)] font-bold text-base sm:text-lg leading-none tracking-tight">${x(i)}</p>
                            <p class="text-[9px] text-slate-400 font-bold uppercase tracking-widest">/${c(a.unit||"pcs")}</p>
                        </div>
                    </div>
                    
                    <div class="flex bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shrink-0 shadow-sm h-9">
                        <button onclick="updCQty(${r}, -1)" class="w-9 h-full flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-700 font-bold transition-colors active:bg-slate-100"><i class="fa-solid fa-minus text-xs"></i></button>
                        <input type="number" step="0.01" class="w-10 h-full text-center text-xs font-bold bg-transparent text-slate-800 dark:text-white focus:outline-none border-x border-slate-200 dark:border-slate-700" value="${s}" onchange="setCQty(${r}, this.value)">
                        <button onclick="updCQty(${r}, 1)" class="w-9 h-full flex items-center justify-center text-slate-500 hover:text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] dark:text-slate-400 dark:hover:text-[var(--color-primary)] dark:hover:bg-[rgba(var(--color-primary-rgb),0.12)] font-bold transition-colors active:bg-slate-100"><i class="fa-solid fa-plus text-xs"></i></button>
                    </div>
                </div>
            </div>
        </div>`}).join("")),H("cart-subtotal",x(t))},Pa=(e,t)=>{let a=parseFloat(t);if(isNaN(a)||a<=0)M.splice(e,1);else{if(o.store.useStock===!0||o.store.useStock==="true"){const s=M[e],i=o.products.find(n=>n.id===s.id);if(i){const n=s.variantName?parseFloat(((i.variants||[]).find(l=>l.name===s.variantName)||{}).stock)||0:parseFloat(i.stock)||0;a>n&&(a=n,typeof window.showToast=="function"&&window.showToast(`Maks stok: ${n}`))}}M[e].qty=parseFloat(a.toFixed(2))}xe(),Y()},Aa=(e,t)=>{let a=parseFloat((parseFloat(M[e].qty)+t).toFixed(2));if(a<=0)M.splice(e,1);else{if((o.store.useStock===!0||o.store.useStock==="true")&&t>0){const s=M[e],i=o.products.find(n=>n.id===s.id);if(i){const n=s.variantName?parseFloat(((i.variants||[]).find(l=>l.name===s.variantName)||{}).stock)||0:parseFloat(i.stock)||0;a>n&&(a=n,typeof window.showToast=="function"&&window.showToast(`Maks stok: ${n}`))}}M[e].qty=a}xe(),Y()},Ta=e=>{M.splice(e,1),xe(),Y()},Ca=()=>{typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Semua barang akan dihapus. Lanjutkan?",()=>{et([]),Y(),xe(),typeof window.showToast=="function"&&window.showToast("Dibersihkan")}):(et([]),Y(),xe())},Ia=()=>{if(window.isAdm){typeof window.showConfirm=="function"&&window.showConfirm("Akses Ditolak","Anda sedang login sebagai Seller. Silakan logout terlebih dahulu untuk membuat pesanan sebagai pelanggan.",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Logout Sekarang",!1);return}M.length&&typeof window.changeView=="function"&&window.changeView("view-checkout")};window.sanitizeCart=Be;window.updCart=Y;window.renderCart=xe;window.setCQty=Pa;window.updCQty=Aa;window.rmCart=Ta;window.clearCart=Ca;window.validateCartToCheckout=Ia;const Ee=()=>{const e=h("wishlist-badge");e&&(e.innerText=Z.length,e.classList.toggle("scale-0",!Z.length))},ja=e=>{Z.splice(e,1),R("freshmart_wishlist",JSON.stringify(Z)),Ee(),dt()},Da=e=>{const t=Z[e],a=o.products?.find(n=>n.id===t.id);if(!a||a.isActive==="false"||a.isActive===!1)return u(`${t.name} sudah tidak tersedia.`);const r=t.variantName?(a.variants||[]).find(n=>n.name===t.variantName):null;if(o.store?.useStock===!0||o.store?.useStock==="true"){if(t.variantName&&(!r||r.isActive===!1||r.isActive==="false"))return u(`Varian ${t.variantName} sudah tidak tersedia.`);const n=r?parseFloat(r.stock)||0:parseFloat(a.stock)||0,l=M.find(p=>p.id===t.id&&p.variantName===t.variantName),d=l&&parseFloat(l.qty)||0;if(n<=0||d>=n)return u(`Stok ${t.name} tidak mencukupi!`)}const i=M.find(n=>n.id===t.id&&n.variantName===t.variantName);if(i)i.qty=parseFloat((i.qty+1).toFixed(2));else{const n=r&&parseFloat(r.poin)>0?parseFloat(r.poin):parseFloat(a.poin)||0;M.push({id:a.id,name:a.name,variantName:t.variantName||"",price:r?r.price:a.price,img:r?.img||a.img,qty:1,unit:a.unit||"pcs",poTime:a.poTime||"",colorCode:r?.colorCode||"",poin:n})}Y(),u("Ke Keranjang!"),typeof window.curViewName<"u"&&window.curViewName==="view-cart"&&xe()},Ma=()=>{we("Hapus Favorit","Yakin ingin menghapus semua?",()=>{Z.length=0,R("freshmart_wishlist",JSON.stringify(Z)),Ee(),dt(),u("Dibersihkan")})},dt=()=>{if(!Z.length){F("wishlist-empty-state"),O("btn-clear-wishlist"),F("spacer-wishlist"),S("wishlist-items-container","");return}O("wishlist-empty-state"),F("btn-clear-wishlist"),O("spacer-wishlist"),S("wishlist-items-container",Z.map((e,t)=>{let a=e.colorCode?`<span class="w-3.5 h-3.5 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 shrink-0" style="background-color: ${c(e.colorCode)};"></span>`:"";return`
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
        </div>`}).join(""))};window.updWish=Ee;window.rmWish=ja;window.moveWish=Da;window.clearWishlist=Ma;window.renderWish=dt;let It=null;const J=()=>{const e=fe!=="Semua Produk"||le!=="Semua Merek"||Ce!=="";oe("dynamic-banners-container","hidden",e),oe("reward-catalog-container","hidden",e),oe("dynamic-vouchers-container","hidden",e),oe("dynamic-categories-container","hidden",e),oe("dynamic-brands-container","hidden",e);const t=o.store.showCategories!==!1&&o.store.showCategories!=="false",a=o.store.showBrands!==!1&&o.store.showBrands!=="false";oe("sec-categories","hidden",e||!t),oe("sec-brands","hidden",e||!a);let r=h("dynamic-active-filter");if(!r){let l=h("product-container");l&&(l.insertAdjacentHTML("beforebegin",'<div id="dynamic-active-filter" class="transition-all w-full"></div>'),r=h("dynamic-active-filter"))}if(r)if(e){let l="Menampilkan",d="",p="fa-filter",m="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30";Ce!==""?(l="Hasil Pencarian",d=`"${Ce}"`,p="fa-magnifying-glass",m="text-rose-500 bg-rose-50 dark:bg-rose-900/30"):fe!=="Semua Produk"?(l="Kategori Pilihan",d=fe,p="fa-layer-group",m="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30"):le!=="Semua Merek"&&(l="Merek Pilihan",d=le,p="fa-tag",m="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30"),r.innerHTML=`
            <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 flex justify-between items-center mb-5 shadow-sm">
                <div class="flex items-center gap-3 overflow-hidden">
                    <div class="w-10 h-10 rounded-xl ${m} flex items-center justify-center shrink-0"><i class="fa-solid ${p} text-lg"></i></div>
                    <div class="flex flex-col min-w-0 pr-2">
                        <span class="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest">${l}</span>
                        <span class="text-sm font-bold text-slate-800 dark:text-white truncate leading-tight mt-0.5">${c(d)}</span>
                    </div>
                </div>
                <button onclick="resetSemuaFilter()" class="shrink-0 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 w-10 h-10 flex items-center justify-center rounded-xl font-bold shadow-sm hover:bg-rose-50 hover:text-rose-500 hover:border-rose-200 transition-all active:scale-95 group"><i class="fa-solid fa-xmark text-lg group-hover:rotate-90 transition-transform duration-300"></i></button>
            </div>`,r.classList.remove("hidden")}else r.innerHTML="",r.classList.add("hidden");let s=o.products.filter(l=>{if(l.isActive===!1||l.isActive==="false"||fe!=="Semua Produk"&&l.category!==fe||le!=="Semua Merek"&&l.brand!==le)return!1;if(!Ce)return!0;let d=Ce.toLowerCase();return(l.name||"").toLowerCase().includes(d)||(l.sku||"").toLowerCase().includes(d)||(l.category||"").toLowerCase().includes(d)||(l.brand||"").toLowerCase().includes(d)||l.variants&&l.variants.some(p=>(p.name||"").toLowerCase().includes(d)||(p.sku||"").toLowerCase().includes(d))}).sort((l,d)=>Ie==="cheapest"?(l.price||0)-(d.price||0):Ie==="expensive"?(d.price||0)-(l.price||0):Ie==="az"?(l.name||"").localeCompare(d.name||""):Ie==="za"?(d.name||"").localeCompare(l.name||""):Ie==="oldest"?(l.id||0)-(d.id||0):(d.id||0)-(l.id||0));const i=h("product-container");if(!i)return;if(i.className=Pt==="grid"?"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8":"flex flex-col gap-3 sm:gap-4",!s.length){i.innerHTML='<div class="col-span-full text-center py-16 sm:py-24 text-slate-500 dark:text-slate-400 font-bold bg-slate-50 dark:bg-slate-800/50 rounded-[1.5rem] border border-slate-200 border-dashed dark:border-slate-700 text-sm sm:text-base flex flex-col items-center justify-center"><div class="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm mb-4"><i class="fa-solid fa-box-open text-3xl sm:text-4xl text-slate-300 dark:text-slate-600"></i></div>Maaf, produk tidak ditemukan.<br><span class="text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 font-normal">Coba gunakan kata kunci pencarian yang berbeda atau hapus filter.</span></div>',O("load-more-container");return}const n=s.slice(0,Mt*aa);i.innerHTML=n.map(l=>{let d="";const p=o.store.useStock===!0||o.store.useStock==="true";let m="";if(p){const j=l.variants&&l.variants.length?l.variants.filter(B=>B.isActive!==!1&&B.isActive!=="false").reduce((B,Ye)=>B+(parseFloat(Ye.stock)||0),0):parseFloat(l.stock)||0;j<=0?d='<div class="absolute inset-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-[2px] z-20 flex items-center justify-center rounded-2xl"><span class="bg-slate-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-lg uppercase tracking-widest"><i class="fa-solid fa-ban mr-1"></i> HABIS</span></div>':j<=5?m=`<span class="absolute top-2 left-2 z-10 bg-rose-500 text-white text-[8px] font-bold px-2 py-1 rounded-xl shadow uppercase tracking-wider"><i class="fa-solid fa-fire mr-0.5"></i> SISA ${j}</span>`:m=`<span class="absolute top-2 left-2 z-10 bg-slate-800/80 text-white text-[8px] font-bold px-2 py-1 rounded-xl shadow uppercase tracking-wider backdrop-blur-sm"><i class="fa-solid fa-box mr-0.5"></i> Stok ${j}</span>`}const b=!d,g=b?"cursor-pointer hover:shadow-md hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40":"cursor-not-allowed",w=b?"cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40":"cursor-not-allowed";let f="",y="";l.priceNormal&&l.priceNormal>l.price&&(f=`<span class="bg-rose-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-tags"></i> -${Math.round((l.priceNormal-l.price)/l.priceNormal*100)}%</span>`,y=`<p class="text-[10px] text-slate-600 dark:text-slate-400 line-through mb-0.5 font-bold">${x(l.priceNormal)}</p>`);let C=l.poTime?`<span class="bg-amber-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${c(l.poTime)}</span>`:"",T="";if(l.variants&&l.variants.length){const j=l.variants.map(B=>parseFloat(B.poin)||0).filter(B=>B>0);if(j.length){const B=[...new Set(j)];T=B.length===1?`<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> +${B[0]} Poin</span>`:'<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> Dapat Poin</span>'}}else parseFloat(l.poin)>0&&(T=`<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> +${parseFloat(l.poin)} Poin</span>`);const k=l.variants&&l.variants.length?l.variants.reduce((j,B)=>j+(parseFloat(B.totalSold)||0),0):parseFloat(l.totalSold)||0,q=k>0?`<span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-fire-flame-curved text-orange-400"></i> ${k} Terjual</span>`:"";let L=`<div class="mb-2.5 flex flex-wrap gap-1.5 items-center overflow-hidden shrink-0">
            ${f}
            ${C}
            ${T}
            ${q}
            ${l.tag?`<span class="bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] dark:bg-[var(--color-primary-dark)]/50 dark:text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-hashtag"></i> ${c(l.tag)}</span>`:""}
            <span class="accent-badge px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-circle-check"></i> Official</span>
            ${l.brand?`<span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-tag"></i> ${c(l.brand)}</span>`:""}
            ${l.wholesale?.length&&!l.variants?.length?'<span class="amber-badge px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-layer-group"></i> Grosir</span>':""}
        </div>`,_=`<span class="text-[9px] text-slate-600 dark:text-slate-400 font-bold ml-0.5 mb-0.5 uppercase tracking-wide">/${c(l.unit||"PCS")}</span>`;return Pt==="grid"?`
            <a href="?p=${l.id}" class="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-[1.5rem] shadow-soft ${g} transition-all duration-300 flex flex-col group relative overflow-hidden text-left" onclick="event.preventDefault(); openProductModal(${l.id})">
                ${d}
                <div class="relative aspect-square w-full bg-white flex items-center justify-center shrink-0 border-b border-slate-100 dark:border-slate-700/50">
                      ${m}
                      <img loading="lazy" decoding="async" src="${c(ge(l.img,"w300-rw"))}" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${d?"grayscale opacity-50":""}">
                </div>
                <div class="flex-1 flex flex-col p-3 sm:p-4 min-w-0 bg-white dark:bg-slate-800 relative z-10">
                    ${L}
                    <h4 class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug mb-2 group-hover:text-[var(--color-primary)] transition-colors uppercase">${c(l.name)}</h4>
                    <div class="flex items-end justify-between mt-auto pt-1">
                        <div>
                            ${l.variants&&l.variants.length>0?"":y}
                            <p class="text-[var(--color-primary)] font-bold text-sm sm:text-[15px] leading-none tracking-tight">
                                ${l.variants&&l.variants.length>0?'<span class="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">PILIH VARIAN</span>':x(l.price)}
                            </p>
                            ${l.variants&&l.variants.length>0?"":_}
                        </div>
                        <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110 active:scale-90 shadow-sm">
                            <i class="fa-solid fa-plus text-xs sm:text-sm"></i>
                        </div>
                    </div>
                </div>
            </a>`:`
            <a href="?p=${l.id}" class="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-[1.5rem] shadow-soft ${w} transition-all duration-300 flex items-stretch p-2.5 sm:p-3 gap-3 sm:gap-4 group relative overflow-hidden text-left" onclick="event.preventDefault(); openProductModal(${l.id})">
                ${d}
                <div class="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center p-2 border border-slate-100 dark:border-slate-700/50 overflow-hidden">
                    ${m}
                    <img loading="lazy" decoding="async" src="${c(ge(l.img,"w300-rw"))}" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'" class="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 ${d?"grayscale opacity-50":""}">
                </div>
                <div class="flex-1 min-w-0 py-1 flex flex-col justify-center h-full relative z-10 pr-2">
                    ${L}
                    <h4 class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug mb-1.5 group-hover:text-[var(--color-primary)] transition-colors uppercase">${c(l.name)}</h4>
                    <div class="flex items-end justify-between mt-auto pt-1">
                        <div>
                            ${l.variants&&l.variants.length>0?"":y}
                            <p class="text-[var(--color-primary)] font-bold text-sm sm:text-[15px] leading-none tracking-tight">
                                ${l.variants&&l.variants.length>0?'<span class="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">PILIH VARIAN</span>':x(l.price)}
                            </p>
                            ${l.variants&&l.variants.length>0?"":_}
                        </div>
                        <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110 active:scale-90 shadow-sm mr-1">
                            <i class="fa-solid fa-plus text-xs sm:text-sm"></i>
                        </div>
                    </div>
                </div>
            </a>`}).join(""),n.length<s.length?F("load-more-container"):O("load-more-container")},La=e=>{Lt(fe===e&&e!=="Semua Produk"?"Semua Produk":e),be(1),typeof window.rDyn=="function"&&window.rDyn();const t=document.querySelector("#view-catalog .scroll-content");t&&setTimeout(()=>t.scrollTo({top:0,behavior:"smooth"}),10)},_a=e=>{_t(le===e&&e!=="Semua Merek"?"Semua Merek":e),be(1),typeof window.rDyn=="function"&&window.rDyn();const t=document.querySelector("#view-catalog .scroll-content");t&&setTimeout(()=>t.scrollTo({top:0,behavior:"smooth"}),10)},Ba=()=>{Lt("Semua Produk"),_t("Semua Merek"),Bt(""),be(1),typeof window.rDyn=="function"&&window.rDyn()},Ea=e=>{clearTimeout(It),It=setTimeout(()=>{Bt(e),be(1),J()},300)},Na=e=>{sa(e),be(1),J()},Ra=e=>{ra(e),be(1),h("btn-view-grid")&&(h("btn-view-grid").className=e==="grid"?"w-8 h-8 rounded-xl flex items-center justify-center text-[var(--color-primary)] bg-white dark:bg-slate-700 shadow-sm transition-all":"w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-all"),h("btn-view-list")&&(h("btn-view-list").className=e==="list"?"w-8 h-8 rounded-xl flex items-center justify-center text-[var(--color-primary)] bg-white dark:bg-slate-700 shadow-sm transition-all":"w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-all"),J()},Fa=()=>{be(Mt+1),J()};window.rCat=J;window.filterCategory=La;window.filterBrand=_a;window.resetSemuaFilter=Ba;window.handleSearch=Ea;window.handleSort=Na;window.toggleView=Ra;window.loadMoreProducts=Fa;const ct={products:[{key:"name",label:"Nama Produk",type:"text"},{key:"sku",label:"Barcode / SKU (Kosongkan utk Auto)",type:"text"},{key:"price",label:"Harga Jual Promo (Rp)",type:"number"},{key:"priceNormal",label:"Harga Coret / Normal (Rp) - Opsional",type:"number"},{key:"hpp",label:"Harga Modal / HPP (Rp) — Hanya Seller",type:"number"},{key:"poin",label:"Poin Member (per unit terjual, Produk Tanpa Varian)",type:"number"},{key:"stock",label:"Stok Awal (Qty) — Aktif jika Manajemen Stok ON",type:"number"},{key:"unit",label:"Satuan Dasar (Cth: Pcs, Kg)",type:"text"},{key:"poTime",label:"Estimasi Pre-Order (Opsional)",type:"text"},{key:"video",label:"Link Video YouTube (Opsional)",type:"text"},{key:"img",label:"URL Gambar",type:"text"},{key:"category",label:"Kategori",type:"dynamic_select_category"},{key:"brand",label:"Merek",type:"dynamic_select_brand"},{key:"tag",label:"Label/Tag",type:"text"},{key:"isActive",label:"Status",type:"select",options:[{val:"true",text:"Tersedia"},{val:"false",text:"Habis"}]},{key:"desc",label:"Deskripsi Lengkap",type:"richtext"},{key:"specTable",label:"Tabel Spesifikasi (Opsional)",type:"spec_table_builder"},{key:"wholesale",label:"Grosir",type:"wholesale_builder"},{key:"variants",label:"Varian",type:"variants_builder"}],colors:[{key:"name",label:"Nama Warna",type:"text"},{key:"hex",label:"Kode Warna (Hex) - Opsional",type:"text"},{key:"catalog",label:"Katalog / Merek (Contoh: No Drop)",type:"text"}],categories:[{key:"name",label:"Kategori",type:"text"},{key:"img",label:"URL Ikon",type:"text"}],brands:[{key:"name",label:"Nama Merek",type:"text"},{key:"img",label:"URL Logo Merek",type:"text"}],banks:[{key:"bankName",label:"Nama Bank",type:"text"},{key:"bankAccount",label:"No. Rekening",type:"text"},{key:"bankOwner",label:"Atas Nama",type:"text"}],customers:[{key:"name",label:"Nama Lengkap",type:"text"},{key:"phone",label:"No. WhatsApp Aktif (Cth: 081234567890)",type:"text"},{key:"points",label:"Poin Member (Penyesuaian Manual)",type:"number"}],rewards:[{key:"name",label:"Nama Hadiah",type:"text"},{key:"img",label:"URL Gambar Hadiah",type:"text"},{key:"pointsCost",label:"Poin yang Dibutuhkan",type:"number"},{key:"stock",label:"Stok Hadiah Tersedia",type:"number"},{key:"isActive",label:"Status",type:"select",options:[{val:"true",text:"Aktif (Bisa Ditukar)"},{val:"false",text:"Nonaktif"}]}],banners:[{key:"title",label:"Judul Banner",type:"text"},{key:"desc",label:"Deskripsi Pendek (Opsional)",type:"textarea"},{key:"type",label:"Tipe Banner",type:"select",options:[{val:"image",text:"🖼 Gambar (Default)"},{val:"video",text:"🎬 Video (Drive / YouTube / MP4)"}]},{key:"img",label:"URL Gambar (jika Tipe = Gambar)",type:"text"},{key:"videoUrl",label:"URL / Link Video (Google Drive, YouTube, atau MP4)",type:"text"},{key:"link",label:"Link Tujuan Klik (Opsional)",type:"text"}],vouchers:[{key:"code",label:"Kode Voucher (Cth: MERDEKA50)",type:"text"},{key:"type",label:"Jenis Diskon",type:"select",options:[{val:"percent",text:"Potongan Persen (%)"},{val:"flat",text:"Potongan Rupiah (Rp)"},{val:"shipping_free",text:"Gratis Ongkir (100%)"},{val:"shipping_flat",text:"Potongan Ongkir (Rp)"}]},{key:"value",label:"Nilai Potongan (Contoh: 50 untuk %, atau 10000 untuk Rp)",type:"number"},{key:"minPurchase",label:"Syarat Minimal Belanja (Rp) - 0 Jika Tidak Ada",type:"number"},{key:"maxDiscount",label:"Maksimal Nominal Potongan (Rp) - Khusus Tipe Persen",type:"number"},{key:"targetProduct",label:"Target Produk Spesifik (Pilih jika berlaku khusus)",type:"dynamic_select_products"},{key:"isShow",label:"Tampilkan di Beranda?",type:"select",options:[{val:"true",text:"Ya, Tampilkan Promo"},{val:"false",text:"Sembunyikan"}]}]};window.aF=ct;let Me=null,He=!1,tt=!1;const at=e=>{tt=!!e,typeof window<"u"&&(window.__isLoggingIn=tt)},Rt=()=>tt||typeof window<"u"&&!!window.__isLoggingIn,Oa=()=>{if(typeof navigator>"u")return"Perangkat Lain";const e=navigator.userAgent||"",t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e);let a="Perangkat";/iPhone|iPad|iPod/i.test(e)?a="iPhone/iPad":/Android/i.test(e)?a="HP Android":/Windows/i.test(e)?a="Desktop Windows":/Mac/i.test(e)?a="Mac/MacBook":/Linux/i.test(e)?a="Linux PC":a=t?"Smartphone":"Komputer Desktop";let r="Browser";return/Edg/i.test(e)?r="Edge":/Chrome/i.test(e)?r="Chrome":/Safari/i.test(e)?r="Safari":/Firefox/i.test(e)&&(r="Firefox"),`${a} (${r})`},Ft=async(e=null)=>{const t=typeof v<"u"&&v?v:window.db;if(!t)return null;const a=e||localStorage.getItem("freshmart_admin_session_id")||"sess_"+Date.now()+"_"+Math.random().toString(36).substring(2,9),r=Oa();try{return localStorage.setItem("freshmart_admin_session_id",a),await t.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").set({sessionId:a,deviceName:r,loginAt:K.firestore.FieldValue.serverTimestamp(),lastActive:K.firestore.FieldValue.serverTimestamp()}),He=!1,a}catch(s){return console.warn("Gagal mengklaim sesi admin aktif:",s),null}},Ha=e=>{let t=document.getElementById("session-kicked-modal");t||(t=document.createElement("div"),t.id="session-kicked-modal",t.className="fixed inset-0 z-[150] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300",document.body.appendChild(t)),t.innerHTML=`
        <div class="bg-white dark:bg-slate-900 rounded-[2rem] p-6 sm:p-8 max-w-md w-full border border-rose-200 dark:border-rose-900/50 shadow-2xl text-center flex flex-col items-center">
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
    `,t.style.display="flex",t.style.opacity="1";const a=document.getElementById("btn-session-kicked-ok");a&&(a.onclick=()=>{t.style.opacity="0",setTimeout(()=>{t.style.display="none"},250)})},Ke=()=>{if(Me)return;const e=typeof v<"u"&&v?v:window.db;!e||!localStorage.getItem("freshmart_admin_session_id")||(He=!1,Me=e.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").onSnapshot(async a=>{if(!a.exists)return;const r=a.data(),s=r.sessionId,i=localStorage.getItem("freshmart_admin_session_id");if(s&&i&&s!==i){if(He)return;He=!0,Ge(),localStorage.removeItem("freshmart_admin_session_id");const n=r.deviceName||"Perangkat Lain";try{window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,G&&typeof G.signOut=="function"&&await G.signOut()}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog"),Ha(n)}},a=>{console.warn("Admin session guard listener error:",a)}))},Ge=()=>{Me&&(Me(),Me=null)},Ot=async()=>{if(Rt())return!0;const e=typeof v<"u"&&v?v:window.db;if(!e)return!0;const t=localStorage.getItem("freshmart_admin_session_id");if(!t)try{return!(await e.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").get()).exists}catch{return!0}try{const a=await e.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").get();return a.exists?a.data().sessionId===t:!0}catch{return!0}};typeof window<"u"&&(window.claimAdminSession=Ft,window.attachAdminSessionGuard=Ke,window.detachAdminSessionGuard=Ge,window.isCurrentSessionActive=Ot,window.setLoggingIn=at,window.isLoggingIn=Rt);const Ua=async()=>{if(window.isAdm||window.location.hostname==="localhost"){if(!await Ot()&&G.currentUser){Ge(),localStorage.removeItem("freshmart_admin_session_id"),await G.signOut(),window.isAdm=!1,window.__localIsAdm=!1,u("Sesi Admin telah diambil alih oleh perangkat lain."),te("login-username",""),te("login-password",""),typeof window.changeView=="function"&&window.changeView("view-admin-login");return}if(window.__localIsAdm=!0,typeof window.changeView=="function"&&window.changeView("view-admin"),Ke(),G.currentUser)Ue();else{const t=G.onAuthStateChanged(()=>{t(),Ue()})}}else te("login-username",""),te("login-password",""),typeof window.changeView=="function"&&window.changeView("view-admin-login")},Ue=()=>{Ke();const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0),F("admin-dashboard-view"),O("admin-content-view"),O("btn-admin-back"),F("admin-logo-box"),H("admin-header-title","CMS SELLER"),pe&&(pe(),_e(null)),de&&(de(),je(null)),ce&&(ce(),De(null)),Ht(oa),pt()},pt=()=>{const e=h("admin-menu-tax-btn");if(!e)return;o.store.ppnEnabled===!0||o.store.ppnEnabled==="true"?(e.classList.remove("hidden"),e.classList.add("flex")):(e.classList.add("hidden"),e.classList.remove("flex"))},We=()=>{const e=o.store.useStock===!0||o.store.useStock==="true";let t=0,a=0,r=0,s=0,i=0,n=0;return(o.products||[]).forEach(l=>{if(l.variants&&l.variants.length)l.variants.forEach(d=>{const p=d.isActive!==!1&&d.isActive!=="false",m=parseFloat(d.stock)||0;p&&(!e||m>0)?r++:s++,i+=(parseFloat(d.hpp)||0)*m,n+=(parseFloat(d.price)||0)*m});else{const d=l.isActive!==!1&&l.isActive!=="false",p=parseFloat(l.stock)||0;d&&(!e||p>0)?t++:a++,i+=(parseFloat(l.hpp)||0)*p,n+=(parseFloat(l.price)||0)*p}}),{activeProd:t,inactiveProd:a,activeVar:r,inactiveVar:s,assetHpp:i,assetJual:n}},jt=new Map,Va=2*60*1e3,Ht=async(e="month")=>{if(la(e),document.querySelectorAll(".report-period-btn").forEach(b=>{const g=b.dataset.period===e;b.style.background=g?"var(--color-primary)":"transparent",b.style.color=g?"var(--color-primary-contrast, #fff)":"",b.style.boxShadow=g?"0 2px 8px rgba(var(--color-primary-rgb),0.35)":"none"}),!h("admin-report-container"))return;const a=({totalPenjualan:b,totalHppTerjual:g,totalDiskonProduk:w,orderCount:f,truncated:y})=>{const C=b-g,T=C-w,k={today:"Hari Ini",week:"Minggu Ini",month:"Bulan Ini",all:"Sepanjang Waktu"}[e]||"";S("admin-report-container",`
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Total Penjualan (${k})</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white truncate">${x(b)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">${f} pesanan${y?" (≥3000, dibatasi)":""}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1.5"><i class="fa-solid fa-arrow-trend-up mr-1"></i>Laba Kotor</p>
                    <p class="text-lg sm:text-xl font-bold text-[var(--color-primary)] truncate">${x(C)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Penjualan − HPP Terjual</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-rose-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-tag mr-1"></i>Total HPP Terjual</p>
                    <p class="text-lg sm:text-xl font-bold text-rose-500 truncate">${x(g)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Modal barang yang laku</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-sack-dollar mr-1"></i>Laba Bersih</p>
                    <p class="text-lg sm:text-xl font-bold truncate" style="color:var(--color-primary)">${x(T)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Laba Kotor − Diskon</p>
                </div>
            </div>
        `)},r=jt.get(e);if(r&&Date.now()-r.timestamp<Va){a(r.data);return}S("admin-report-container",'<div class="text-center py-10"><i class="fa-solid fa-spinner fa-spin text-2xl text-slate-300"></i></div>');let s=null;const i=new Date;if(e==="today")s=new Date(i.getFullYear(),i.getMonth(),i.getDate());else if(e==="week"){const b=i.getDay(),g=b===0?6:b-1;s=new Date(i.getFullYear(),i.getMonth(),i.getDate()-g)}else e==="month"&&(s=new Date(i.getFullYear(),i.getMonth(),1));let n=0,l=0,d=0,p=0,m=!1;try{if(!G.currentUser){S("admin-report-container",'<div class="text-center py-10 text-slate-400"><i class="fa-solid fa-lock text-2xl mb-3"></i><p class="text-xs font-bold">Login terlebih dahulu untuk melihat laporan.</p></div>');return}let b=v.collection("freshmart_orders");s&&(b=b.where("timestamp",">=",K.firestore.Timestamp.fromDate(s)));const g=await b.limit(3e3).get();m=g.size>=3e3,g.forEach(f=>{const y=f.data();y.status!=="Dibatalkan"&&(p++,n+=parseFloat(y.payment?.subtotal)||0,d+=parseFloat(y.payment?.productDiscount)||0,(y.items||[]).forEach(C=>{const T=C.hpp!==void 0&&C.hpp!==null?parseFloat(C.hpp):typeof window.getEffHpp=="function"?window.getEffHpp(C):0;l+=(parseFloat(T)||0)*(parseFloat(C.qty)||0)}))});const w={totalPenjualan:n,totalHppTerjual:l,totalDiskonProduk:d,orderCount:p,truncated:m};jt.set(e,{data:w,timestamp:Date.now()}),a(w)}catch(b){console.error("Gagal memuat laporan penjualan:",b)}},qa=async()=>{const e=$("login-username"),t=$("login-password");if(!e||!t)return u("Email & Password wajib diisi!");at(!0),A("Verifikasi Login...");try{const a="sess_"+Date.now()+"_"+Math.random().toString(36).substring(2,9);localStorage.setItem("freshmart_admin_session_id",a);const s=(await G.signInWithEmailAndPassword(e,t)).user||G.currentUser;if(!s||s.uid!==ya){const i=s?s.uid:"null";throw await G.signOut(),localStorage.removeItem("freshmart_admin_session_id"),new Error("UID_MISMATCH: "+i)}await Ft(a),Ke(),window.isAdm=!0,history.replaceState({view:"view-admin"},"",window.location.href),typeof window.changeView=="function"&&window.changeView("view-admin",!0),Ue(),u("Login Berhasil!")}catch(a){if(console.error(a),localStorage.removeItem("freshmart_admin_session_id"),a.message&&a.message.startsWith("UID_MISMATCH:")){const r=a.message.replace("UID_MISMATCH: ","");u("Login Ditolak: UID Anda ("+r+") tidak cocok dengan ADMIN_UID!")}else u("Login Ditolak: Email atau Password salah!")}finally{at(!1),P()}},Ut=async()=>{A("Keluar...");try{Ge(),localStorage.removeItem("freshmart_admin_session_id"),await G.signOut(),window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,typeof window.updateProBadge=="function"&&window.updateProBadge(),pe&&(pe(),_e(null)),de&&(de(),je(null)),ce&&(ce(),De(null)),u("Berhasil Logout"),typeof window.changeView=="function"&&window.changeView("view-catalog")}catch{u("Gagal Logout")}finally{P()}},Ka=()=>{we("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{Ut()},"Ya, Keluar")};window.checkAdminAccess=Ua;window.openAdminMenu=Ue;window.toggleTaxMenuVisibility=pt;window.computeInventoryStats=We;window.loadAdminReport=Ht;window.processAdminLogin=qa;window.logoutAdmin=Ut;window.confirmLogoutAdmin=Ka;const Ga=async()=>{if(!Q||Q.length===0)return u("Belum ada data pesanan!");A("Menyiapkan modul Excel...");try{await Et("https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js",()=>typeof XLSX<"u")}catch{P(),u("Gagal memuat modul Excel. Cek koneksi internet Anda.");return}P();let e=[];Q.forEach((i,n)=>{let l=i.dateString?new Date(i.dateString).toLocaleString("id-ID"):"-",d=i.customer?.name||"Anonim",p=i.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko",m=i.status||"-",b=i.items?i.items.reduce((w,f)=>w+(parseFloat(f.qty)||0),0):0,g=i.payment?.grandTotal||0;e.push({No:n+1,"ID Pesanan":i.orderId,Tanggal:l,"Nama Pelanggan":d,"Metode Kirim":p,Status:m,"Total Item":b,"Total Tagihan (Rp)":g})});const t=XLSX.utils.json_to_sheet(e),a=XLSX.utils.book_new();XLSX.utils.book_append_sheet(a,t,"Laporan Pesanan");const r=[{wch:5},{wch:25},{wch:22},{wch:25},{wch:15},{wch:15},{wch:12},{wch:20}];t["!cols"]=r;const s=new Date().toISOString().split("T")[0];XLSX.writeFile(a,`Laporan_Pesanan_${s}.xlsx`),u("Laporan Excel (.xlsx) berhasil diunduh!")},Wa=()=>{try{const e=new(window.AudioContext||window.webkitAudioContext),t=e.createOscillator(),a=e.createGain();t.connect(a),a.connect(e.destination),t.type="sine",t.frequency.setValueAtTime(800,e.currentTime),a.gain.setValueAtTime(1,e.currentTime),t.frequency.setValueAtTime(600,e.currentTime+.2),t.frequency.setValueAtTime(800,e.currentTime+.6),a.gain.setValueAtTime(1,e.currentTime+.6),t.frequency.setValueAtTime(600,e.currentTime+.8),a.gain.exponentialRampToValueAtTime(1e-5,e.currentTime+1.5),t.start(e.currentTime),t.stop(e.currentTime+1.5)}catch{}},za=()=>{S("admin-content",`
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
    `);const e=()=>{pe&&(pe(),_e(null));let t=!0;const a=v.collection("freshmart_orders").orderBy("timestamp","desc").limit(100).onSnapshot(r=>{if(At([]),!t){let i=!1;r.docChanges().forEach(n=>{n.type==="added"&&n.doc.data().status==="Baru"&&(i=!0)}),i&&(u("🔔 Pesanan Baru Masuk!"),Wa())}if(t=!1,r.empty){S("admin-orders-list",'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-receipt text-5xl mb-4 opacity-30"></i>Belum ada pesanan</div>'),H("stat-orders",0);return}H("stat-orders",r.size+(r.size===100?"+":""));const s=[];S("admin-orders-list",r.docs.map(i=>{const n=i.data();s.push(n);let l="text-slate-500 border-slate-200 dark:border-slate-600",d="fa-clock",p="bg-slate-50 dark:bg-slate-700/50",m="text-slate-400";n.status==="Baru"?(l="text-rose-500 border-rose-200 bg-rose-50 dark:bg-rose-900/20 dark:border-rose-800 animate-pulse",d="fa-asterisk",p="bg-rose-500",m="text-white shadow-md shadow-rose-500/30"):n.status==="Diproses"?(l="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30",d="fa-spinner fa-spin",p="primary-bg",m="shadow-sm"):n.status==="Selesai"?(l="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30",d="fa-check-double",p="primary-bg-soft",m="primary-text"):n.status==="Dibatalkan"&&(l="text-slate-400 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",d="fa-xmark",p="bg-slate-100 dark:bg-slate-800",m="text-slate-400");let b="fa-wallet text-slate-400",g=n.payment?.method||"";g==="transfer"?b="fa-building-columns text-[var(--color-primary)]":g==="qris"?b="fa-qrcode text-purple-500":g==="cod"?b="fa-hand-holding-dollar text-[var(--color-primary)]":g==="cashier"&&(b="fa-cash-register text-amber-500");let w=n.items?parseFloat(n.items.reduce((C,T)=>C+(parseFloat(T.qty)||0),0).toFixed(2)):0;const f=n.dateString?new Date(n.dateString).toLocaleDateString("id-ID",{day:"numeric",month:"short"}):"",y=(n.orderId||"").split("-").pop();return`
                <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-primary)] transition-all duration-300" onclick="openOrderDetail('${n.orderId}')">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${p} ${m} flex items-center justify-center shrink-0 transition-colors">
                            <i class="fa-solid fa-receipt text-xl sm:text-2xl"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex justify-between items-start mb-1">
                                <div class="flex items-center gap-2">
                                    <span class="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 tracking-tight">#${y}</span>
                                    <span class="text-[9px] font-bold px-2 py-0.5 rounded border ${l} uppercase tracking-widest flex items-center"><i class="fa-solid ${d} mr-1"></i> ${c(n.status)}</span>
                                </div>
                                <span class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5 whitespace-nowrap"><i class="fa-regular fa-calendar"></i> <span class="hidden sm:inline">${f}</span></span>
                            </div>
                            <div class="flex items-center gap-2 mt-1.5">
                                <p class="text-xs font-bold text-slate-600 dark:text-slate-300 truncate max-w-[120px] sm:max-w-xs"><i class="fa-solid fa-user text-slate-400 mr-1"></i> ${c(n.customer?.name||"Anonim")}</p>
                                <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0"></span>
                                <span class="text-[9px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-xl border border-slate-200 dark:border-slate-700 uppercase tracking-widest shrink-0">${w} Item</span>
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
                            <span class="text-[9px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">${c(g)}</span>
                        </div>
                    </div>
                </div>`}).join("")),At(s)},()=>{S("admin-orders-list",'<div class="text-center text-rose-500 font-bold">Koneksi terputus. Retrying...</div>'),setTimeout(e,5e3)});_e(a)};e()},mt=e=>{const t=Q.find(s=>s.orderId===e);if(!t)return;ia(e);let a=`<div class="relative w-full sm:w-40 mt-1"><select onchange="updateOrderStatus('${t.orderId}', this.value)" class="w-full text-sm font-bold ${t.status==="Baru"?"text-rose-600 bg-rose-50 border-rose-200":t.status==="Diproses"?"text-blue-600 bg-blue-50 border-blue-200":t.status==="Selesai"?"text-emerald-600 bg-emerald-50 border-emerald-200":"text-slate-500 bg-slate-50 border-slate-200"} border px-4 py-2.5 rounded-xl focus:outline-none appearance-none cursor-pointer transition-colors shadow-sm"><option value="Baru" ${t.status==="Baru"?"selected":""} class="text-slate-800">Baru (Pending)</option><option value="Diproses" ${t.status==="Diproses"?"selected":""} class="text-slate-800">Diproses</option><option value="Selesai" ${t.status==="Selesai"?"selected":""} class="text-slate-800">Selesai</option><option value="Dibatalkan" ${t.status==="Dibatalkan"?"selected":""} class="text-slate-800">Dibatalkan</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 ${t.status==="Baru"?"text-rose-400":t.status==="Diproses"?"text-blue-400":t.status==="Selesai"?"text-emerald-400":"text-slate-400"} pointer-events-none text-xs"></i></div>`;S("admin-order-modal-content",`
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
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Status</span><span class="font-bold text-xs px-2 py-1 rounded-xl ${t.claimedReward.status==="ready"?"bg-emerald-100 text-emerald-600":t.claimedReward.status==="waiting_stock"?"bg-amber-100 text-amber-600":"bg-slate-200 text-slate-600"}">${na(t.claimedReward)}</span></div>
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
                    ${(()=>{if(!t.payment?.ppnAmount||t.payment.ppnAmount<=0)return"";const s=t.payment.ppnType==="inclusive",i=t.payment.ppnRate||11,n=t.payment.ppnAmount,l=(t.payment.subtotal||0)-(t.payment.productDiscount||0)+(t.payment.shippingCost||0)-(t.payment.shippingDiscount||0),d=t.payment.dppAmount||(s?Math.round(l*100/(100+i)):Math.max(0,l));return`
                        <div class="flex justify-between items-center text-slate-400"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-bold text-white">${x(d)}</span></div>
                        <div class="flex justify-between items-center text-amber-400 bg-amber-900/20 px-2 py-1 -mx-2 rounded-xl"><span>${s?"Termasuk PPN":"PPN"} (${i}%)</span><span class="font-bold">${s?"":"+"}${x(n)}</span></div>
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
        </div>`);const r=h("admin-order-modal");r&&r.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminOrder"),F("admin-order-modal"),setTimeout(()=>{h("admin-order-modal")&&h("admin-order-modal").classList.remove("opacity-0"),h("admin-order-modal-box")&&h("admin-order-modal-box").classList.remove("scale-95")},10)},Ja=async(e,t)=>{const r=(typeof window.normalizeWA=="function"?window.normalizeWA:s=>String(s||"").replace(/\D/g,"").replace(/^0/,"62"))(t);if(!r||r.length<10)return u("Nomor WA tidak valid!");A("Menyimpan...");try{const s=v.collection("freshmart").doc("cms_data").collection("customers").doc(r),i=await s.get();i.exists?(await s.set({name:e||i.data().name},{merge:!0}),u("Data pelanggan sudah ada, nama diperbarui.")):(await s.set({id:parseInt(r,10),name:e||"-",phone:r,points:0}),u("✅ Pelanggan baru disimpan ke database!"))}catch(s){console.error("Gagal simpan pelanggan:",s),u("Gagal menyimpan data pelanggan: "+(s.message||""))}finally{P()}},Qa=async(e,t)=>{if(t==="waiting_stock"&&typeof window.customPrompt=="function"){window.customPrompt("Catatan untuk pelanggan:","Stok hadiah kosong, akan kami kirim susulan begitu stok tersedia kembali.",async r=>{if(r!==null){A("Menyimpan...");try{await v.collection("freshmart_orders").doc(e).update({"claimedReward.status":t,"claimedReward.note":r||""}),u("Status klaim hadiah diperbarui!");let s=Q.findIndex(i=>i.orderId===e);s!==-1&&(Q[s].claimedReward||(Q[s].claimedReward={}),Q[s].claimedReward.status=t,Q[s].claimedReward.note=r||""),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(s){u("Gagal update klaim: "+s.message)}finally{P()}}});return}let a="";A("Menyimpan...");try{await v.collection("freshmart_orders").doc(e).update({"claimedReward.status":t,"claimedReward.note":a});const r=Q.find(s=>s.orderId===e);r&&(r.claimedReward.status=t,r.claimedReward.note=a,mt(e)),u("Status hadiah diperbarui!")}catch(r){console.error("Gagal update status hadiah:",r),u("Gagal update status hadiah: "+(r.message||""))}finally{P()}},Vt=(e=!1)=>{const t=()=>{h("admin-order-modal")&&h("admin-order-modal").classList.add("opacity-0"),h("admin-order-modal-box")&&h("admin-order-modal-box").classList.add("scale-95"),setTimeout(()=>O("admin-order-modal"),300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminOrder",e,t):t()},Ya=async(e,t)=>{if(!qe){me(!0),A("Update...");try{await v.collection("freshmart_orders").doc(e).update({status:t});let a=Q.find(r=>r.orderId===e);a&&(a.status=t),mt(e),u("Status diupdate!")}catch{u("Gagal!")}finally{me(!1),P()}}},Xa=async e=>{if(!e)return u("ID pesanan tidak valid!");A("Memuat data...");try{const t=await v.collection("freshmart_orders").doc(e).get();if(P(),!t.exists)return u("Data pesanan tidak ditemukan!");const a=t.data(),r=a.customer&&a.customer.wa;if(!r)return u("Nomor WhatsApp pelanggan tidak tersedia!");const s=o&&o.store&&o.store.name?o.store.name:"Toko Kami",i=a.customer&&a.customer.name?a.customer.name:"Pelanggan",n=a.status||"Baru",l=a.payment&&a.payment.grandTotal?x(a.payment.grandTotal):"-",d=a.payment&&a.payment.method?a.payment.method.toUpperCase():"-",p=`Halo *${i}*! 👋

Terima kasih telah berbelanja di *${s}*. 🛒

*Detail Pesanan Anda:*
📋 ID: *${e.split("-").pop()}*
💰 Total: *${l}*
💳 Pembayaran: *${d}*
📦 Status: *${n}*

Kami akan segera memproses pesanan Anda. Terima kasih! 🙏`;window.open(`https://wa.me/${r}?text=${encodeURIComponent(p)}`,"_blank")}catch{P(),u("Gagal memuat data pesanan!")}},Za=e=>{we("Hapus Pesanan","Yakin ingin hapus permanen?",async()=>{if(!qe){me(!0),A("Menghapus...");try{await v.collection("freshmart_orders").doc(e).delete(),u("Terhapus!"),da===e&&Vt()}catch{u("Gagal!")}finally{me(!1),P()}}})};window.exportOrdersToExcel=Ga;window.rAdmOrd=za;window.openOrderDetail=mt;window.saveOrderCustomerToDB=Ja;window.ackRewardClaim=Qa;window.closeOrderDetailModal=Vt;window.updateOrderStatus=Ya;window.konfirmasiKeWA=Xa;window.deleteOrder=Za;const es=()=>{const e=o.store.name||"Toko Grosir",t=o.store.themeColor||"#10b981",a=(i,n,l=!1)=>{let d=document.querySelector(`meta[${l?"property":"name"}="${i}"]`);d||(d=document.createElement("meta"),l?d.setAttribute("property",i):d.setAttribute("name",i),document.head.appendChild(d)),d.setAttribute("content",n)};a("theme-color",t),a("mobile-web-app-capable","yes"),a("apple-mobile-web-app-capable","yes"),a("apple-mobile-web-app-status-bar-style","black-translucent"),a("apple-mobile-web-app-title",e),a("application-name",e),a("msapplication-TileColor",t),document.title=e,localStorage.setItem("freshmart_theme_color",t),o.store.uiTheme&&o.store.uiTheme!==localStorage.getItem("freshmart_ui_theme")&&(localStorage.setItem("freshmart_ui_theme",o.store.uiTheme),Pe(o.store.uiTheme));const r=o.store.bgStyle||localStorage.getItem("freshmart_bg_style")||"minimalist",s=o.store.bgCustomUrl!==void 0?o.store.bgCustomUrl:localStorage.getItem("freshmart_bg_custom_url")||"";Ae(r,s)},qt=()=>{S("admin-content",`
    <div class="max-w-full pb-10 text-sm fade-in-scale">
        <div class="mb-5 flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                    <i class="fa-solid fa-sliders text-base"></i>
                </div>
                <div>
                    <h2 class="font-bold text-sm text-slate-800 dark:text-slate-100 uppercase tracking-widest leading-tight">Pengaturan Toko</h2>
                    <p class="text-[9px] font-bold text-slate-500 mt-0.5">Pilih menu konfigurasi di bawah</p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-6">
            <button onclick="openSettingForm('profile')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-[rgba(var(--color-primary-rgb),0.4)] hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:text-white transition-all duration-300 z-10" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)" onmouseover="this.style.background='var(--color-primary)'" onmouseout="this.style.background='rgba(var(--color-primary-rgb),0.1)'"><i class="fa-solid fa-store text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">Profil Toko</span>
            </button>
            <button onclick="openSettingForm('catalog')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-palette text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">Kategori UI UX</span>
            </button>
            <button onclick="openSettingForm('shipping')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-900/30 text-amber-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-motorcycle text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">Pengiriman</span>
            </button>
            <button onclick="openSettingForm('payment')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-qrcode text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">QRIS Pay</span>
            </button>
            <button onclick="openSettingForm('config')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-rose-300 dark:hover:border-rose-600 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-laptop-code text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">Sistem & API</span>
            </button>
            <button onclick="openSettingForm('operasional')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-[var(--color-primary)] dark:hover:border-[var(--color-primary-dark)] hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-900/30 text-violet-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-sliders text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">Operasional</span>
            </button>
        </div>

        <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 class="font-bold text-slate-700 dark:text-white mb-4 text-[10px] uppercase tracking-widest flex items-center gap-2"><i class="fa-solid fa-database" style="color: var(--color-primary)"></i> Pencadangan Data</h3>
            <div class="flex flex-col sm:flex-row gap-3">
                <button onclick="backupData()" class="flex-1 bg-slate-900 dark:bg-slate-950 text-white font-bold py-3.5 rounded-xl transition-all text-xs flex items-center justify-center gap-2 border border-slate-800 shadow-sm active:scale-95 hover:opacity-90"><i class="fa-solid fa-download"></i> Backup Lokal (.json)</button>
                <button onclick="el('restore-file').click()" class="flex-1 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold py-3.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-600 transition-all text-xs flex items-center justify-center gap-2 shadow-sm active:scale-95"><i class="fa-solid fa-upload"></i> Restore Data</button>
            </div>
        </div>
    </div>
    `)},ts=e=>{const t=$e[e][500],a=document.getElementById("set-ui-theme"),r=document.getElementById("set-theme-color"),s=document.getElementById("set-theme-color-picker");a&&(a.value=e),r&&(r.value=t),s&&(s.value=t),document.querySelectorAll(".preset-color-chip").forEach(l=>{l.classList.remove("ring-4","ring-offset-2","ring-slate-400","dark:ring-slate-500","scale-110"),l.querySelector(".check-icon")?.classList.add("hidden")});const i=document.getElementById(`preset-chip-${e}`);i&&(i.classList.add("ring-4","ring-offset-2","ring-slate-400","dark:ring-slate-500","scale-110"),i.querySelector(".check-icon")?.classList.remove("hidden"));const n=document.getElementById("custom-color-chip");if(n){n.style.background="";const l=n.querySelector("i");l&&(l.style.color="")}Pe(e,t)},as=e=>{const t=document.getElementById("set-bg-style");t&&(t.value=e);const a=document.getElementById("set-bg-custom-url")?.value||"";document.querySelectorAll(".bg-style-card").forEach(s=>{s.classList.remove("border-[var(--color-primary)]","shadow-md","ring-2","ring-[var(--color-primary)]/20"),s.classList.add("border-slate-200","dark:border-slate-700");const i=s.querySelector(".bg-icon-wrap");i&&(i.className="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300")});const r=document.getElementById(`bg-opt-${e}`);if(r){r.classList.add("border-[var(--color-primary)]","shadow-md","ring-2","ring-[var(--color-primary)]/20"),r.classList.remove("border-slate-200","dark:border-slate-700");const s=r.querySelector(".bg-icon-wrap");s&&(s.className="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform bg-[var(--color-primary)] text-white shadow-sm")}Ae(e,a)},ss=e=>{let t,a,r,s;if(e==="profile"){t="Profil Toko & Tampilan Visual",a="fa-store",r={line:"bg-[var(--color-primary)]",box:"bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)]"};const n=o.store.uiTheme||"emerald",l=o.store.bgStyle||localStorage.getItem("freshmart_bg_style")||"minimalist",d={emerald:"Emerald",teal:"Teal",lime:"Lime",cyan:"Cyan",sky:"Sky",blue:"Blue",indigo:"Indigo",violet:"Violet",purple:"Purple",fuchsia:"Fuchsia",pink:"Pink",rose:"Rose",red:"Red",orange:"Orange",amber:"Amber",yellow:"Yellow",green:"Green",slate:"Slate",stone:"Stone"},p=Object.keys($e).map(m=>{const b=$e[m][500],g=d[m]||m,w=n===m;return`
                <button type="button" id="preset-chip-${m}" onclick="selectPresetTheme('${m}')" 
                        class="preset-color-chip w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 ${w?"ring-4 ring-offset-2 ring-slate-400 dark:ring-slate-500 scale-110":""}" 
                        style="background-color: ${b}; border: 1.5px solid rgba(0,0,0,0.08)" 
                        title="${g}">
                    <i class="check-icon fa-solid fa-check text-white text-[11px] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${w?"":"hidden"}"></i>
                </button>
            `}).join("");s=`
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Toko (Nama Aplikasi)</label>
                    <input autocomplete='off' id="set-name" value="${c(o.store.name)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Slogan Toko</label>
                    <input autocomplete='off' id="set-slogan" value="${c(o.store.slogan)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>
            
            <!-- Warna Tema Toko -->
            <div class="grid grid-cols-1 gap-3">
                <div class="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl">
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-widest flex items-center gap-2">
                        <i class="fa-solid fa-palette" style="color:var(--color-primary)"></i> Warna Tema &amp; Header PWA
                    </label>
                    <input type="hidden" id="set-ui-theme" value="${n}">
                    <input type="hidden" id="set-theme-color" value="${c(o.store.themeColor||"#10b981")}">
                    <div class="flex flex-wrap gap-3">
                        ${p}
                        <div class="relative" title="Warna Kustom (Klik untuk pilih warna bebas)">
                            <label for="set-theme-color-picker" class="w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 border-2 border-dashed border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]" id="custom-color-chip">
                                <i class="fa-solid fa-pen text-slate-500 dark:text-slate-400 text-[11px]"></i>
                            </label>
                            <input type="color" id="set-theme-color-picker" value="${c(o.store.themeColor||"#10b981")}" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
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
            </div>

            <!-- Model Gaya Visual Background Toko & Wallpaper Kustom -->
            <div class="grid grid-cols-1 gap-3">
                <div class="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl">
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-widest flex items-center gap-2">
                        <i class="fa-solid fa-shapes" style="color:var(--color-primary)"></i> MODEL GAYA VISUAL BACKGROUND TOKO
                    </label>
                    <input type="hidden" id="set-bg-style" value="${l}">
                    
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-5">
                        <!-- 1. Hero Arch -->
                        <button type="button" onclick="selectBgStyle('hero_arch')" id="bg-opt-hero_arch"
                                class="bg-style-card flex flex-col items-center justify-center text-center p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer ${l==="hero_arch"?"border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                            <div class="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform ${l==="hero_arch"?"bg-[var(--color-primary)] text-white shadow-sm":"bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">
                                <i class="fa-solid fa-circle-half-stroke"></i>
                            </div>
                            <span class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Hero Arch</span>
                            <span class="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Header lengkung solid</span>
                        </button>

                        <!-- 2. Geometris 3D -->
                        <button type="button" onclick="selectBgStyle('geometric_3d')" id="bg-opt-geometric_3d"
                                class="bg-style-card flex flex-col items-center justify-center text-center p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer ${l==="geometric_3d"?"border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                            <div class="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform ${l==="geometric_3d"?"bg-[var(--color-primary)] text-white shadow-sm":"bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">
                                <i class="fa-solid fa-cube"></i>
                            </div>
                            <span class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Geometris 3D</span>
                            <span class="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Vektor sudut presisi</span>
                        </button>

                        <!-- 3. Diagonal Skew -->
                        <button type="button" onclick="selectBgStyle('diagonal_skew')" id="bg-opt-diagonal_skew"
                                class="bg-style-card flex flex-col items-center justify-center text-center p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer ${l==="diagonal_skew"?"border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                            <div class="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform ${l==="diagonal_skew"?"bg-[var(--color-primary)] text-white shadow-sm":"bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">
                                <i class="fa-solid fa-slash"></i>
                            </div>
                            <span class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Diagonal Skew</span>
                            <span class="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Aksen garis tegas</span>
                        </button>

                        <!-- 4. Dual-Tone -->
                        <button type="button" onclick="selectBgStyle('dual_tone')" id="bg-opt-dual_tone"
                                class="bg-style-card flex flex-col items-center justify-center text-center p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer ${l==="dual_tone"?"border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                            <div class="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform ${l==="dual_tone"?"bg-[var(--color-primary)] text-white shadow-sm":"bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">
                                <i class="fa-solid fa-layer-group"></i>
                            </div>
                            <span class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Dual-Tone</span>
                            <span class="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Header solid 2 warna</span>
                        </button>

                        <!-- 5. Minimalis -->
                        <button type="button" onclick="selectBgStyle('minimalist')" id="bg-opt-minimalist"
                                class="bg-style-card flex flex-col items-center justify-center text-center p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer col-span-2 sm:col-span-1 ${l==="minimalist"?"border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                            <div class="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform ${l==="minimalist"?"bg-[var(--color-primary)] text-white shadow-sm":"bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">
                                <i class="fa-solid fa-square"></i>
                            </div>
                            <span class="text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Minimalis</span>
                            <span class="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Polos bersih elegan</span>
                        </button>
                    </div>

                    <!-- Gambar / Wallpaper Background Kustom (Opsional) -->
                    <div class="pt-4 border-t border-slate-200 dark:border-slate-700/80">
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <i class="fa-solid fa-image" style="color:var(--color-primary)"></i> GAMBAR / WALLPAPER BACKGROUND KUSTOM (OPSIONAL)
                        </label>
                        <div class="flex gap-3">
                            <input autocomplete="off" id="set-bg-custom-url" value="${c(o.store.bgCustomUrl||"")}"
                                   class="admin-input !py-3.5 bg-white dark:bg-slate-800 flex-1 shadow-sm"
                                   placeholder="URL Gambar Background (Opsional, contoh: https://...)"
                                   oninput="if(typeof window.applyBackgroundStyle==='function') window.applyBackgroundStyle(document.getElementById('set-bg-style').value, this.value)">
                            <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-5 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold">
                                <i class="fa-solid fa-cloud-arrow-up sm:mr-2"></i> <span class="hidden sm:inline">Upload</span>
                                <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-bg-custom-url')">
                            </label>
                        </div>
                        <p class="text-[9px] text-slate-500 dark:text-slate-400 mt-2 font-medium">
                            Jika diisi, gambar akan otomatis terpasang tajam dan jernih sebagai wallpaper latar belakang toko dan CMS.
                        </p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Logo Toko (Ikon Aplikasi)</label>
                    <div class="flex gap-2">
                        <input autocomplete='off' id="set-logo" value="${c(o.store.logo)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm flex-1">
                        <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                            <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload
                            <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-logo')">
                        </label>
                    </div>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Email Toko</label>
                    <input autocomplete='off' id="set-email" value="${c(o.store.email||"")}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>

            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Deskripsi Toko</label>
                <textarea id="set-description" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full" rows="3">${c(o.store.description)}</textarea>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Jam Operasional</label>
                    <input autocomplete='off' id="set-hours" value="${c(o.store.operationalHours||"")}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Teks Hak Cipta Footer</label>
                    <input autocomplete='off' id="set-credit" value="${c(o.store.footerCredit||"")}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>

            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tampilkan Katalog Tukar Hadiah di Beranda</label>
                <select id="set-show-reward-catalog" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                    <option value="true" ${o.store.showRewardCatalog!==!1?"selected":""}>Ya, Tampilkan Hadiah</option>
                    <option value="false" ${o.store.showRewardCatalog===!1?"selected":""}>Sembunyikan</option>
                </select>
            </div>
        `}else e==="catalog"?(t="Tampilan Kategori & Merek",a="fa-palette",r={line:"bg-blue-500",box:"bg-blue-50 text-blue-500"},s=`
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gaya Tampilan Kategori</label>
                    <select id="set-category-style" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="grid" ${o.store.categoryStyle==="grid"?"selected":""}>Grid Ikon</option>
                        <option value="pill" ${o.store.categoryStyle==="pill"?"selected":""}>Pill Horizontal Scroll</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gaya Tampilan Merek</label>
                    <select id="set-brand-style" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="logo" ${o.store.brandStyle==="logo"||!o.store.brandStyle?"selected":""}>Logo Kotak (Grid)</option>
                        <option value="text" ${o.store.brandStyle==="text"?"selected":""}>Pill Horizontal Scroll</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tampilkan Slider Kategori di Beranda</label>
                    <select id="set-show-categories" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${o.store.showCategories!==!1?"selected":""}>Tampilkan</option>
                        <option value="false" ${o.store.showCategories===!1?"selected":""}>Sembunyikan</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tampilkan Slider Merek di Beranda</label>
                    <select id="set-show-brands" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${o.store.showBrands!==!1?"selected":""}>Tampilkan</option>
                        <option value="false" ${o.store.showBrands===!1?"selected":""}>Sembunyikan</option>
                    </select>
                </div>
            </div>
        `):e==="shipping"?(t="Pengiriman & Lokasi Toko",a="fa-motorcycle",r={line:"bg-amber-500",box:"bg-amber-50 text-amber-500"},s=`
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nomor WhatsApp Admin</label>
                    <input autocomplete='off' id="set-wa" value="${c(o.store.wa||"")}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full" placeholder="Contoh: 08123456789">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Ongkir per Kilometer (Rp)</label>
                    <input autocomplete='off' type="number" id="set-cost" value="${c(o.store.costPerKm||0)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Alamat Lengkap Toko</label>
                <textarea id="set-address" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full" rows="3">${c(o.store.address||"")}</textarea>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Opsi Kirim ke Alamat</label>
                    <select id="set-delivery-enabled" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${o.store.isDeliveryEnabled!==!1?"selected":""}>Aktif</option>
                        <option value="false" ${o.store.isDeliveryEnabled===!1?"selected":""}>Nonaktif</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Opsi Ambil di Toko</label>
                    <select id="set-pickup-enabled" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${o.store.isPickupEnabled!==!1?"selected":""}>Aktif</option>
                        <option value="false" ${o.store.isPickupEnabled===!1?"selected":""}>Nonaktif</option>
                    </select>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Latitude Toko (GPS)</label>
                    <input autocomplete='off' id="set-lat" value="${c(o.store.lat||"")}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Longitude Toko (GPS)</label>
                    <input autocomplete='off' id="set-lng" value="${c(o.store.lng||"")}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>
        `):e==="payment"?(t="Metode Pembayaran QRIS",a="fa-qrcode",r={line:"bg-indigo-500",box:"bg-indigo-50 text-indigo-500"},s=`
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">URL Gambar Barcode QRIS</label>
                <div class="flex gap-2">
                    <input autocomplete='off' id="set-qris-url" value="${c(o.payment?.qrisUrl||"")}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm flex-1" placeholder="URL QRIS Image (atau klik Upload)">
                    <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                        <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload QRIS
                        <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-qris-url')">
                    </label>
                </div>
                ${o.payment?.qrisUrl?`
                    <div class="mt-4 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl flex items-center gap-4">
                        <img src="${c(o.payment.qrisUrl)}" alt="Preview QRIS" class="w-20 h-20 object-contain rounded-xl bg-white border border-slate-200 dark:border-slate-600 p-1">
                        <div>
                            <span class="text-xs font-bold text-slate-700 dark:text-slate-200 block">Preview Barcode QRIS Aktif</span>
                            <span class="text-[10px] text-slate-400">Gambar ini akan tampil otomatis saat pelanggan checkout menggunakan QRIS.</span>
                        </div>
                    </div>
                `:""}
            </div>
        `):e==="config"?(t="Sistem & Integrasi Cloud",a="fa-laptop-code",r={line:"bg-rose-500",box:"bg-rose-50 text-rose-500"},s=`
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Google Apps Script URL (Media Drive)</label>
                <input autocomplete='off' id="set-gas-url" value="${c(o.config?.gasUrl||"")}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full" placeholder="https://script.google.com/macros/s/.../exec">
                <p class="text-[9px] text-slate-500 dark:text-slate-400 mt-2">Digunakan untuk upload gambar produk & video promosi langsung ke Google Drive.</p>
            </div>
        `):e==="operasional"&&(t="Operasional & Pajak",a="fa-sliders",r={line:"bg-violet-500",box:"bg-violet-50 text-violet-500"},s=`
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Manajemen Stok Produk</label>
                    <select id="set-use-stock" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${o.store.useStock===!0?"selected":""}>Aktif (Produk otomatis habis jika stok 0)</option>
                        <option value="false" ${o.store.useStock!==!0?"selected":""}>Nonaktif (Stok tak terbatas)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Perhitungan Pajak PPN</label>
                    <select id="set-ppn-enabled" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${o.store.ppnEnabled===!0?"selected":""}>Aktif</option>
                        <option value="false" ${o.store.ppnEnabled!==!0?"selected":""}>Nonaktif</option>
                    </select>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tipe PPN</label>
                    <select id="set-ppn-type" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="exclusive" ${o.store.ppnType!=="inclusive"?"selected":""}>Eksklusif (Ditambah di checkout)</option>
                        <option value="inclusive" ${o.store.ppnType==="inclusive"?"selected":""}>Inklusif (Sudah termasuk di harga)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tarif PPN (%)</label>
                    <input autocomplete='off' type="number" id="set-ppn-rate" value="${c(o.store.ppnRate||11)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>
        `);let i=`
    <div class="w-full max-w-5xl mx-auto pb-10 text-sm fade-in-scale">
        <button onclick="rAdmSet()" class="mb-5 flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all shadow-sm"><i class="fa-solid fa-arrow-left"></i></button>
        <div class="bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden mb-6 relative">
            <div class="absolute top-0 left-0 w-full h-1.5 ${r.line}"></div>
            <div class="p-6 sm:p-8 flex-1 mt-2">
                <h3 class="font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3 text-base">
                    <div class="w-10 h-10 rounded-xl ${r.box} flex items-center justify-center shrink-0"><i class="fa-solid ${a}"></i></div> 
                    ${t}
                </h3>
                <div class="space-y-5">
                    ${s}
                </div>
            </div>
        </div>
        <button onclick="saveAdminSettings('${e}')" class="btn-primary py-4 text-base shadow-glow w-full !rounded-2xl flex items-center justify-center gap-2"><i class="fa-solid fa-save"></i> Simpan Pengaturan</button>
    </div>
    `;if(S("admin-content",i),e==="profile"){const n=o.store.uiTheme||"",l=o.store.themeColor||"#10b981";(n==="custom"||!$e?.[n])&&setTimeout(()=>{const p=document.getElementById("custom-color-chip");if(p){p.style.background=l;const m=p.querySelector("i");m&&(m.style.color="#fff")}},50)}},rs=async e=>{if(!qe){me(!0),A("Menyimpan...");try{e==="profile"?(o.store.name=$("set-name"),o.store.slogan=$("set-slogan"),o.store.logo=I($("set-logo")),o.store.description=$("set-description"),o.store.email=$("set-email"),o.store.showRewardCatalog=$("set-show-reward-catalog")==="true",o.store.operationalHours=$("set-hours"),o.store.footerCredit=$("set-credit"),o.store.themeColor=$("set-theme-color"),o.store.uiTheme=$("set-ui-theme"),o.store.bgStyle=$("set-bg-style")||"minimalist",o.store.bgCustomUrl=I($("set-bg-custom-url")),localStorage.setItem("freshmart_theme_color",o.store.themeColor),localStorage.setItem("freshmart_ui_theme",o.store.uiTheme),localStorage.setItem("freshmart_bg_style",o.store.bgStyle),localStorage.setItem("freshmart_bg_custom_url",o.store.bgCustomUrl||""),Pe(o.store.uiTheme,o.store.themeColor),Ae(o.store.bgStyle,o.store.bgCustomUrl)):e==="catalog"?(o.store.categoryStyle=$("set-category-style"),o.store.brandStyle=$("set-brand-style"),o.store.showCategories=$("set-show-categories")==="true",o.store.showBrands=$("set-show-brands")==="true"):e==="shipping"?(o.store.wa=$("set-wa").replace(/\D/g,""),o.store.address=$("set-address"),o.store.costPerKm=$("set-cost"),o.store.isDeliveryEnabled=$("set-delivery-enabled")==="true",o.store.isPickupEnabled=$("set-pickup-enabled")==="true",o.store.lat=$("set-lat"),o.store.lng=$("set-lng")):e==="payment"?(o.payment||(o.payment={}),o.payment.qrisUrl=I($("set-qris-url"))):e==="config"?(o.config||(o.config={}),o.config.gasUrl=$("set-gas-url"),u("Pengaturan GAS URL tersimpan.")):e==="operasional"&&(o.store.useStock=$("set-use-stock")==="true",o.store.ppnEnabled=$("set-ppn-enabled")==="true",o.store.ppnType=$("set-ppn-type")||"exclusive",o.store.ppnRate=parseFloat($("set-ppn-rate"))||11,pt());const t={profile:"store",catalog:"store",shipping:"store",operasional:"store",payment:"payment",config:"config"};typeof window.saveApp=="function"&&await window.saveApp([t[e]||"store"]),e==="profile"||e==="config"?(u(e==="config"?"Sistem Diperbarui! Memuat Ulang...":"Warna Berubah! Memuat Ulang..."),setTimeout(()=>location.reload(),1500)):(u("Tersimpan!"),qt())}catch{u("Gagal menyimpan pengaturan")}finally{me(!1),P()}}},os=()=>{const e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(o,null,2)),t=document.createElement("a");t.href=e,t.download=`backup_freshmart_${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(t),t.click(),t.remove(),u("Backup diunduh!")},ls=e=>{const t=e.target.files[0];if(!t)return;const a=new FileReader;a.onload=async r=>{try{const s=JSON.parse(r.target.result);Object.assign(o,s),typeof window.saveApp=="function"&&await window.saveApp(),u("Data dipulihkan!"),setTimeout(()=>location.reload(),1e3)}catch{u("Gagal memulihkan data!")}},a.readAsText(t)};window.syncAppMeta=es;window.rAdmSet=qt;window.selectPresetTheme=ts;window.selectBgStyle=as;window.openSettingForm=ss;window.saveAdminSettings=rs;window.backupData=os;window.restoreData=ls;let E=new Date().getFullYear(),N=0,ae="menu",se=null;const re=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],is=e=>{if(typeof window.getEffHpp=="function")return window.getEffHpp(e);const t=o.products?.find(a=>a.id===e.id);if(!t)return 0;if(e.variantName&&t.variants){const a=t.variants.find(r=>r.name===e.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(t.hpp)||0},Dt=new Map,ns=2*60*1e3,ut=async e=>{const t=Dt.get(e);if(t&&Date.now()-t.timestamp<ns)return t.data;const a={};for(let r=1;r<=12;r++)a[r]={omset:0,ppn:0,hpp:0,disc:0,orderCount:0};try{const r=new Date(e,0,1),s=new Date(e+1,0,1);(await v.collection("freshmart_orders").where("timestamp",">=",K.firestore.Timestamp.fromDate(r)).where("timestamp","<",K.firestore.Timestamp.fromDate(s)).limit(5e3).get()).forEach(l=>{const d=l.data();if(d.status==="Dibatalkan"||!d.timestamp||!d.timestamp.toDate)return;const p=d.timestamp.toDate().getMonth()+1;if(!a[p])return;const m=d.payment?.dppAmount!==void 0&&d.payment?.dppAmount!==null?parseFloat(d.payment.dppAmount):parseFloat(d.payment?.subtotal)||0;a[p].omset+=m,a[p].ppn+=parseFloat(d.payment?.ppnAmount)||0,a[p].disc+=parseFloat(d.payment?.productDiscount)||0,a[p].orderCount++,(d.items||[]).forEach(b=>{const g=b.hpp!==void 0&&b.hpp!==null?parseFloat(b.hpp):is(b);a[p].hpp+=(parseFloat(g)||0)*(parseFloat(b.qty)||0)})})}catch(r){console.error("Gagal memuat data pajak:",r),u("Gagal memuat data periode ini!")}return Dt.set(e,{data:a,timestamp:Date.now()}),a},Ne=()=>se?(N===0?Object.keys(se):[N]).reduce((t,a)=>{const r=se[a];return t.omset+=r.omset,t.ppn+=r.ppn,t.hpp+=r.hpp,t.disc+=r.disc,t.orderCount+=r.orderCount,t},{omset:0,ppn:0,hpp:0,disc:0,orderCount:0}):{omset:0,ppn:0,hpp:0,disc:0,orderCount:0},bt=()=>{const e=o.taxSettings?.monthlyExpenses||{};return(N===0?Array.from({length:12},(a,r)=>r+1):[N]).reduce((a,r)=>a+(parseFloat(e[`${E}-${r}`])||0),0)},ds=async()=>{S("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),se=await ut(E),ft()},ft=()=>{const e=Array.from({length:6},(r,s)=>new Date().getFullYear()-4+s),t=[{k:"summary",l:"Ringkasan PPN",i:"fa-receipt"},{k:"income",l:"Laba Rugi",i:"fa-chart-pie"},{k:"balance",l:"Neraca",i:"fa-scale-balanced"},{k:"settings",l:"Pengaturan",i:"fa-gear"}];ae==="menu"&&(ae="summary");const a=`
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
        
        ${ae==="settings"?"":`
        <div class="flex items-center gap-2">
            <select id="tax-year-select" onchange="changeTaxYear(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                ${e.map(r=>`<option value="${r}" ${r===E?"selected":""}>${r}</option>`).join("")}
            </select>
            <select id="tax-month-select" onchange="changeTaxMonth(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                <option value="0" ${N===0?"selected":""}>Setahun Penuh</option>
                ${re.map((r,s)=>`<option value="${s+1}" ${N===s+1?"selected":""}>${r} ${E}</option>`).join("")}
            </select>
        </div>
        `}
    </div>

    <!-- Sub-Tab Navigation Bar -->
    <div class="flex items-center gap-2 mb-5 overflow-x-auto hide-scrollbar pb-1">
        ${t.map(r=>{const s=ae===r.k;return`
            <button onclick="switchTaxTab('${r.k}')" class="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2 shrink-0 ${s?"primary-bg text-white shadow-glow":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[rgba(var(--color-primary-rgb),0.4)]"}">
                <i class="fa-solid ${r.i} text-xs"></i>
                <span>${r.l}</span>
            </button>`}).join("")}
    </div>
    `;S("admin-content",`
    <div class="max-w-5xl mx-auto pb-10 text-sm fade-in-scale">
        <div class="mb-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-4 flex items-start gap-3 text-xs font-semibold text-amber-800 dark:text-amber-300 shadow-xs">
            <i class="fa-solid fa-circle-info text-amber-500 text-base shrink-0 mt-0.5"></i>
            <span class="leading-relaxed">Halaman ini adalah <b>alat bantu rekap internal</b> Omset, PPN, Laba Rugi, dan Neraca dari data transaksi toko. Bukan pengganti konsultan pajak/akuntan — validasi kembali angkanya sebelum digunakan untuk pelaporan SPT resmi.</span>
        </div>

        ${a}

        <div id="tax-content"></div>
    </div>`),ze()},cs=e=>{ae=e,ft()},ps=async e=>{E=parseInt(e,10),S("tax-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),se=await ut(E),ze()},ms=e=>{N=parseInt(e,10),ze()},ze=()=>{ae==="summary"?Kt():ae==="income"?gt():ae==="balance"?xt():ae==="settings"&&Gt()},Kt=()=>{const e=Ne(),t=N===0?`Tahun ${E}`:`${re[N-1]} ${E}`,a=e.omset-e.disc,r=Array.from({length:12},(s,i)=>i+1).map(s=>{const i=se?se[s]:{omset:0,ppn:0,orderCount:0};return`<tr class="${N===s?"bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.14)] font-bold":"hover:bg-slate-50 dark:hover:bg-slate-700/30"} border-b border-slate-100 dark:border-slate-700/50 last:border-0 transition-colors">
            <td class="py-3 px-4 text-xs font-bold text-slate-700 dark:text-slate-200">${re[s-1]}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-800 dark:text-white text-right">${x(i.omset)}</td>
            <td class="py-3 px-4 text-xs font-bold text-right" style="color:var(--color-primary)">${x(i.ppn)}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">${i.orderCount}</td>
        </tr>`}).join("");S("tax-content",`
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
                <h4 class="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-widest">Rincian Per Bulan — ${E}</h4>
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
                    <tbody>${r}</tbody>
                </table>
            </div>
        </div>
    `)},gt=()=>{const e=Ne(),t=N===0?`Tahun ${E}`:`${re[N-1]} ${E}`,a=e.omset-e.disc-e.hpp,r=N===0?null:`${E}-${N}`,s=bt(),i=a-s,n=o.taxSettings?.taxScheme||"umkm_final";let l,d,p;n==="umkm_final"?(l=.5,d=e.omset,p="PPh Final UMKM (0,5% × Omset)"):n==="badan_normal"?(l=22,d=Math.max(0,i),p="PPh Badan (22% × Laba Bersih)"):(l=parseFloat(o.taxSettings?.customTaxRate)||0,d=Math.max(0,i),p=`PPh Custom (${l}% × Laba Bersih)`);const m=d*(l/100),b=i-m;let g="";if(N===0)g=Array.from({length:12},(w,f)=>f+1).map(w=>{const f=`${E}-${w}`,y=(o.taxSettings?.monthlyExpenses||{})[f]||0;return`<div class="flex items-center justify-between gap-2 py-2 border-b border-slate-100 dark:border-slate-700/50 last:border-0">
                <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${re[w-1]} ${E}</span>
                <input type="number" min="0" value="${y}" onchange="saveMonthlyExpense('${f}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>`}).join("");else{const w=(o.taxSettings?.monthlyExpenses||{})[r]||0;g=`<div class="flex items-center justify-between gap-2 py-2">
            <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${re[N-1]} ${E}</span>
            <input type="number" min="0" value="${w}" onchange="saveMonthlyExpense('${r}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
        </div>`}S("tax-content",`
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
                <div class="flex justify-between py-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Bersih Sebelum Pajak</span><span class="font-bold" style="color:var(--color-primary)">${x(i)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Estimasi ${p}</span><span class="font-bold text-rose-500">-${x(m)}</span></div>
                <div class="flex justify-between py-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2"><span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Laba Bersih Setelah Pajak (Estimasi)</span><span class="font-extrabold text-sm sm:text-base" style="color:var(--color-primary)">${x(b)}</span></div>
            </div>

            <div class="mt-8 pt-5 border-t border-dashed border-slate-200 dark:border-slate-700">
                <h5 class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5"><i class="fa-solid fa-pen" style="color:var(--color-primary)"></i> Input Biaya Operasional (Manual)</h5>
                <p class="text-[10px] font-bold text-slate-400 mb-4">Contoh: sewa tempat, gaji karyawan, listrik, internet, dll. Sistem tidak melacak biaya ini otomatis.</p>
                <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                    ${g}
                </div>
            </div>
        </div>
    `)},us=async(e,t)=>{const a=parseFloat(t)||0;o.taxSettings||(o.taxSettings={}),o.taxSettings.monthlyExpenses||(o.taxSettings.monthlyExpenses={}),o.taxSettings.monthlyExpenses[e]=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),gt()}catch{u("Gagal menyimpan biaya operasional!")}},xt=()=>{const e=We(),t=o.taxSettings?.balanceSheet||{kas:0,piutang:0,hutang:0},a=(parseFloat(t.kas)||0)+(parseFloat(t.piutang)||0)+e.assetHpp,r=parseFloat(t.hutang)||0,s=a-r;S("tax-content",`
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
                        <span class="font-bold text-xs sm:text-sm" style="color:var(--color-primary)">${x(r+s)}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6 text-center">
            <button onclick="openTaxDocPreview('balance')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all inline-flex items-center gap-2 shadow-xs active:scale-95">
                <i class="fa-solid fa-print"></i> Preview &amp; Cetak Neraca
            </button>
        </div>
    `)},bs=async(e,t)=>{const a=parseFloat(t)||0;o.taxSettings||(o.taxSettings={}),o.taxSettings.balanceSheet||(o.taxSettings.balanceSheet={kas:0,piutang:0,hutang:0,modalDisetor:0}),o.taxSettings.balanceSheet[e]=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),xt()}catch{u("Gagal menyimpan data neraca!")}},Gt=()=>{const e=o.taxSettings||{};S("tax-content",`
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
    `)},fs=e=>{oe("tax-custom-rate-wrap","hidden",e!=="custom")},gs=async()=>{if(!qe){me(!0),A("Menyimpan...");try{o.taxSettings||(o.taxSettings={}),o.taxSettings.companyName=$("tax-company-name"),o.taxSettings.npwp=$("tax-npwp"),o.taxSettings.taxScheme=$("tax-scheme"),o.taxSettings.customTaxRate=parseFloat($("tax-custom-rate"))||.5,typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),u("Pengaturan pajak tersimpan!")}catch{u("Gagal menyimpan pengaturan pajak!")}finally{me(!1),P()}}},xs=e=>{const t=N===0?`Tahun ${E}`:`${re[N-1]} ${E}`,a=o.taxSettings||{},r=new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"});let s="";o.store.logo&&(o.store.logo.includes("http")||o.store.logo.includes("data:"))?s=`<img loading="eager" src="${c(o.store.logo)}" class="w-16 h-16 object-contain">`:s='<div class="w-16 h-16 bg-slate-700 text-white flex items-center justify-center rounded-xl"><i class="fa-solid fa-store text-3xl"></i></div>';const n={summary:"LAPORAN PPN & OMSET",income:"LAPORAN LABA RUGI",balance:"NERACA"}[e]||"LAPORAN";let l=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${s}
            <div>
                <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${c(a.companyName||o.store.name)}</h1>
                ${a.npwp?`<p class="text-xs font-bold text-slate-500 mt-1">NPWP: ${c(a.npwp)}</p>`:""}
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${c(o.store.address||"")}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl tracking-widest text-slate-700 uppercase">${n}</h2>
            <p class="text-sm font-bold text-slate-600 mt-2">Periode: ${t}</p>
            <p class="text-xs font-semibold text-slate-400 mt-1">Dicetak: ${r}</p>
        </div>
    </div>
    <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-[11px] font-bold text-amber-700 leading-relaxed">
        <i class="fa-solid fa-triangle-exclamation mr-1"></i> Dokumen ini adalah rekap internal sebagai alat bantu — bukan dokumen resmi DJP. Mohon validasi ke akuntan/konsultan pajak sebelum digunakan untuk pelaporan SPT resmi.
    </div>`,d="";if(e==="summary"){const m=Ne(),b=m.omset-m.disc,g=Array.from({length:12},(w,f)=>f+1).map(w=>{const f=se?se[w]:{omset:0,ppn:0,orderCount:0};return`<tr class="border-b border-slate-200"><td class="py-2.5 px-3 font-bold text-slate-700">${re[w-1]} ${E}</td><td class="py-2.5 px-3 text-right font-bold text-slate-700">${x(f.omset)}</td><td class="py-2.5 px-3 text-right font-bold text-slate-900">${x(f.ppn)}</td><td class="py-2.5 px-3 text-right font-bold text-slate-500">${f.orderCount}</td></tr>`}).join("");d=`
        <div class="grid grid-cols-4 gap-4 mb-8">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">Omset Bruto</p><p class="font-bold text-slate-900">${x(m.omset)}</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">Diskon</p><p class="font-bold text-rose-600">${x(m.disc)}</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">DPP</p><p class="font-bold text-slate-900">${x(b)}</p></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4"><p class="text-[9px] font-bold text-amber-600 uppercase mb-1">PPN Keluaran</p><p class="font-bold text-amber-700">${x(m.ppn)}</p></div>
        </div>
        <table class="w-full text-xs"><thead><tr class="bg-slate-100 text-left"><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px]">Bulan</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">Omset</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">PPN Keluaran</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">Pesanan</th></tr></thead><tbody>${g}</tbody></table>`}else if(e==="income"){const m=Ne(),b=m.omset-m.disc-m.hpp,g=bt(),w=b-g,f=a.taxScheme||"umkm_final";let y,C,T;f==="umkm_final"?(y=.5,C=m.omset,T="PPh Final UMKM (0,5% × Omset)"):f==="badan_normal"?(y=22,C=Math.max(0,w),T="PPh Badan (22% × Laba Bersih)"):(y=parseFloat(a.customTaxRate)||0,C=Math.max(0,w),T=`PPh Custom (${y}% × Laba Bersih)`);const k=C*(y/100),q=w-k,L=(_,j,B,Ye)=>`<div class="flex justify-between py-2 ${B?"border-t-2 border-slate-800 mt-1 pt-3":"border-b border-slate-100"}"><span class="${B?"font-bold text-slate-900":"font-bold text-slate-600"}">${_}</span><span class="font-bold ${Ye||"text-slate-900"}">${j}</span></div>`;d=`<div class="max-w-xl">
            ${L("Omset Bruto",x(m.omset))}
            ${L("(−) Diskon Produk","-"+x(m.disc),!1,"text-rose-600")}
            ${L("(−) HPP","-"+x(m.hpp),!1,"text-rose-600")}
            ${L("Laba Kotor",x(b),!0,"text-emerald-600")}
            ${L("(−) Biaya Operasional","-"+x(g),!1,"text-rose-600")}
            ${L("Laba Bersih Sebelum Pajak",x(w),!0)}
            ${L("(−) Estimasi "+T,"-"+x(k),!1,"text-rose-600")}
            ${L("Laba Bersih Setelah Pajak (Estimasi)",x(q),!0)}
        </div>`}else if(e==="balance"){const m=We(),b=a.balanceSheet||{kas:0,piutang:0,hutang:0},g=(parseFloat(b.kas)||0)+(parseFloat(b.piutang)||0)+m.assetHpp,w=parseFloat(b.hutang)||0,f=g-w;d=`
        <div class="grid grid-cols-2 gap-8">
            <div>
                <h3 class="font-bold text-slate-800 uppercase text-xs tracking-widest mb-3 pb-2 border-b-2 border-slate-800">Aset</h3>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Kas &amp; Bank</span><span class="font-bold text-slate-900">${x(b.kas||0)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Piutang Usaha</span><span class="font-bold text-slate-900">${x(b.piutang||0)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Persediaan Barang</span><span class="font-bold text-slate-900">${x(m.assetHpp)}</span></div>
                <div class="flex justify-between py-2.5 border-t-2 border-slate-800 mt-1"><span class="font-bold text-slate-900">Total Aset</span><span class="font-bold text-slate-900">${x(g)}</span></div>
            </div>
            <div>
                <h3 class="font-bold text-slate-800 uppercase text-xs tracking-widest mb-3 pb-2 border-b-2 border-slate-800">Kewajiban &amp; Modal</h3>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Hutang Usaha</span><span class="font-bold text-slate-900">${x(w)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Modal &amp; Laba Ditahan</span><span class="font-bold text-slate-900">${x(f)}</span></div>
                <div class="flex justify-between py-2.5 border-t-2 border-slate-800 mt-1"><span class="font-bold text-slate-900">Total Kewajiban + Modal</span><span class="font-bold text-slate-900">${x(w+f)}</span></div>
            </div>
        </div>`}H("doc-modal-title","Preview "+n),S("doc-paper-content",l+d);const p=h("doc-preview-modal");p&&p.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),F("doc-preview-modal"),setTimeout(()=>{h("doc-preview-modal")&&h("doc-preview-modal").classList.remove("opacity-0"),h("doc-preview-modal-box")&&h("doc-preview-modal-box").classList.remove("scale-95"),typeof window.fitDocPreview=="function"&&window.fitDocPreview()},10)};window.fetchTaxPeriodData=ut;window.getTaxPeriodTotals=Ne;window.getTaxPeriodExpenses=bt;window.rTaxPanel=ds;window.rTaxRenderShell=ft;window.switchTaxTab=cs;window.changeTaxYear=ps;window.changeTaxMonth=ms;window.rTaxSubContent=ze;window.rTaxSummary=Kt;window.rTaxIncome=gt;window.saveMonthlyExpense=us;window.rTaxBalance=xt;window.saveBalanceField=bs;window.rTaxSettingsPanel=Gt;window.toggleCustomTaxRateInput=fs;window.saveTaxSettingsPanel=gs;window.openTaxDocPreview=xs;window.MONTH_NAMES=re;window.editTempoPenalty=(e,t)=>{window.customPrompt("Persentase Denda Baru",t,async a=>{if(!a)return;let r=parseFloat(a.replace(",","."));if(isNaN(r)||r<0)return u("Persentase tidak valid!");A("Menyimpan...");try{await v.collection("freshmart_orders").doc(e).update({"payment.tempoPenaltyRate":r}),u("Persentase denda berhasil diubah!"),window.rAdmPiutang()}catch(s){u("Gagal mengubah denda: "+s.message)}P()})};window.stopTempoPenalty=(e,t,a)=>{let r="Konfirmasi Denda",s=a?"Lanjutkan perhitungan denda otomatis?":"Hentikan denda berjalan sekarang? (Nominal denda akan dibekukan di "+x(t)+")";we(r,s,async()=>{A("Menyimpan...");try{await v.collection("freshmart_orders").doc(e).update({"payment.tempoPenaltyStopped":!a,"payment.tempoFixedPenalty":a?null:t}),u(a?"Denda dilanjutkan!":"Denda berhasil dibekukan!"),window.rAdmPiutang()}catch(n){u("Gagal mengubah status denda: "+n.message)}P()},a?"Lanjutkan":"Bekukan")};window.payTempoInstallment=e=>{window.customPrompt("Masukkan Nominal Cicilan (Rp)","",async t=>{if(!t)return;let a=parseFloat(t.replace(/[^0-9]/g,""));if(isNaN(a)||a<=0)return u("Nominal tidak valid!");A("Menyimpan cicilan...");try{const s=(await v.collection("freshmart_orders").doc(e).get()).data();let i=(s.payment.tempoBalance||0)-a,n=s.payment.installments||[];n.push({date:Date.now(),amount:a,note:"Cicilan"});let l={"payment.tempoBalance":Math.max(0,i),"payment.installments":n};i<=0&&(l["payment.paymentStatus"]="lunas",l.status="Selesai"),await v.collection("freshmart_orders").doc(e).update(l),u("Cicilan berhasil ditambahkan!"),window.rAdmPiutang&&window.rAdmPiutang()}catch(r){u("Gagal memproses cicilan: "+r.message)}P()})};window.previewTempoReceipt=async e=>{A("Memuat data struk...");try{const t=await v.collection("freshmart_orders").doc(e).get();if(!t.exists)return P(),u("Pesanan tidak ditemukan");const a=t.data();P();const r=a.dateString?new Date(a.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",s=o.store.name||"Toko",i=o.store.wa||"",n=(k,q,L=32)=>{const _=L-k.length-q.length;return k+(_>0?" ".repeat(_):" ")+q};let l=`<div class="text-center font-bold" style="font-size:13px;margin-bottom:2px;">${c(s)}</div>`;i&&(l+=`<div class="text-center" style="margin-bottom:4px;">WA: ${c(i)}</div>`),l+=`<div class="text-center font-bold uppercase my-2" style="font-size:14px;border-bottom:1px solid #000;border-top:1px solid #000;padding:2px 0;">NOTA TEMPO${a.payment?.paymentStatus==="lunas"?" - LUNAS":""}</div>`,l+=`<div style="white-space:pre;">Order: #${a.orderId}</div><div style="white-space:pre;">Tgl  : ${r}</div><div style="white-space:pre;">Plg  : ${c(a.customer?.name||"Guest").substring(0,20)}</div>`,a.payment?.tempoDueDate&&(l+=`<div style="white-space:pre;">J.Tmp: ${new Date(a.payment.tempoDueDate).toLocaleDateString("id-ID")}</div>`),l+='<div class="border-b border-dashed border-black my-2"></div>';let d=0;if(a.items.forEach(k=>{let q=k.variantName?` (${c(k.variantName)}${k.colorCode?" "+c(k.colorCode):""})`:"";const L=(c(k.name)+q+(k.poTime?" [PO]":"")).substring(0,32),_=`${parseFloat(k.qty)} ${c(k.unit||"pcs")} x ${k.effectivePrice.toLocaleString("id-ID")}`,j=(parseFloat(k.qty)*k.effectivePrice).toLocaleString("id-ID");l+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${L}</div><div style="white-space:pre;font-size:11px;">${n(_,j)}</div>`,k.poTime&&(l+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${c(k.poTime)}</div>`),d+=parseFloat(k.qty)*k.effectivePrice}),l+='<div class="border-b border-dashed border-black my-2"></div>',l+=`<div style="white-space:pre;font-weight:bold;">${n("Subtotal",d.toLocaleString("id-ID"))}</div>`,a.payment?.grandTotal&&a.payment.grandTotal!==d){let k=a.payment.grandTotal-d;k>0?l+=`<div style="white-space:pre;">${n("Ongkir/Biaya",k.toLocaleString("id-ID"))}</div>`:l+=`<div style="white-space:pre;">${n("Diskon",Math.abs(k).toLocaleString("id-ID"))}</div>`}l+=`<div style="white-space:pre;font-weight:bold;margin-top:4px;">${n("TOTAL KREDIT",(a.payment?.grandTotal||d).toLocaleString("id-ID"))}</div>`,l+='<div class="border-b border-black my-2" style="border-width:1px;"></div>';let p=0;a.payment?.installments&&a.payment.installments.length>0&&(l+='<div style="white-space:pre;font-weight:bold;margin-bottom:2px;">HISTORI CICILAN:</div>',a.payment.installments.forEach((k,q)=>{let L=new Date(k.date).toLocaleDateString("id-ID",{day:"2-digit",month:"short"}),_=k.amount.toLocaleString("id-ID");l+=`<div style="white-space:pre;">${n(`${q+1}. ${L}`,_)}</div>`,p+=k.amount}),l+=`<div style="white-space:pre;font-weight:bold;margin-top:2px;">${n("TOTAL DIBAYAR",p.toLocaleString("id-ID"))}</div>`,l+='<div class="border-b border-dashed border-black my-2"></div>');let m=a.payment?.tempoBalance||0,b=0,g=a.payment?.tempoPenaltyStopped===!0,w=a.payment?.tempoDueDate||0,f=a.payment?.tempoPenaltyRate!==void 0?parseFloat(a.payment.tempoPenaltyRate):1;if(a.payment?.paymentStatus!=="lunas"){if(g)b=parseFloat(a.payment?.tempoFixedPenalty)||0;else if(Date.now()>w){let k=Math.floor((Date.now()-w)/864e5);k>0&&(b=f/100*m*k)}}l+=`<div style="white-space:pre;font-weight:bold;">${n("SISA POKOK",m.toLocaleString("id-ID"))}</div>`,b>0&&(l+=`<div style="white-space:pre;">${n("DENDA",Math.round(b).toLocaleString("id-ID"))}</div>`);let y=m+b;l+='<div class="border-b border-black my-2" style="border-width:1px;"></div>',l+=`<div style="white-space:pre;font-weight:black;">${n("SISA TAGIHAN",Math.round(y).toLocaleString("id-ID"))}</div>`,a.items.some(k=>k.poTime&&k.poTime!=="")&&(l+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul (estimasi sesuai label) tanpa dikenakan biaya tambahan.</div>'),l+='<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;">Terima kasih atas kepercayaannya.</div><div class="border-b border-dashed border-black my-2"></div><div style="height:20px;"></div>',S("receipt-paper-content",l);const T=h("receipt-preview-modal");T&&T.classList.contains("hidden")&&pushModalHistory("receipt"),show("receipt-preview-modal"),setTimeout(()=>{h("receipt-preview-modal").classList.remove("opacity-0"),h("receipt-preview-modal-box").classList.remove("scale-95")},10)}catch(t){P(),u("Gagal memuat struk: "+t.message)}};window.markTempoPaid=async e=>{we("Konfirmasi","Tandai tagihan tempo ini sebagai LUNAS?",async()=>{try{await v.collection("freshmart_orders").doc(e).update({"payment.paymentStatus":"lunas","payment.tempoBalance":0,status:"Selesai"}),u("Tagihan berhasil dilunasi!");let t=gOrds.findIndex(a=>a.orderId===e);t!==-1&&(gOrds[t].payment.paymentStatus="lunas",gOrds[t].payment.tempoBalance=0,gOrds[t].status="Selesai"),window.rAdmPiutang()}catch(t){u("Gagal mengubah status: "+t.message)}})};window.rAdmPiutang=async()=>{A("Memuat data piutang...");let e=[];try{(await v.collection("freshmart_orders").where("payment.method","==","tempo").where("payment.paymentStatus","==","hutang").get()).forEach(s=>{e.push(s.data())})}catch(r){P(),u("Gagal memuat piutang: "+r.message);return}P();let t=0,a=`
    <div class="max-w-full pb-10 fade-in text-sm">
        <div class="mb-5 bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-pink-50 dark:bg-pink-900/30 text-pink-600 rounded-xl flex items-center justify-center"><i class="fa-solid fa-hand-holding-dollar text-xl"></i></div>
                <div>
                    <h2 class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-sm">Tagihan Tempo</h2>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Daftar pelanggan VIP yang belum lunas</p>
                </div>
            </div>
            <div class="text-right">
                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Piutang Berjalan</p>
                <p class="text-xl font-bold text-rose-500" id="total-piutang-header">Rp 0</p>
            </div>
        </div>
    `;e.length===0?a+=`<div class="bg-white dark:bg-slate-800 p-8 text-center rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-20 h-20 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-check-double text-4xl"></i></div>
                <h3 class="font-bold text-slate-700 dark:text-slate-200 text-lg uppercase tracking-widest">Luar Biasa!</h3>
                <p class="text-slate-500 mt-2 text-xs font-bold">Semua tagihan pelanggan telah lunas. Tidak ada piutang tertunda.</p>
              </div>`:(a+='<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">',e.forEach(r=>{let s=r.payment?.tempoBalance||0,i=r.payment?.tempoPenaltyRate!==void 0?parseFloat(r.payment.tempoPenaltyRate):1,n=r.payment?.tempoPenaltyStopped===!0,l=0,d=r.payment?.tempoDueDate||0,p=0,m=!1;n?(l=parseFloat(r.payment?.tempoFixedPenalty)||0,Date.now()>d&&(p=Math.floor((Date.now()-d)/(24*60*60*1e3)),p>0&&(m=!0))):Date.now()>d&&(p=Math.floor((Date.now()-d)/(24*60*60*1e3)),p>0&&(m=!0,l=i/100*s*p));let b=s+l;t+=b;let g=window.normalizeWA?window.normalizeWA(r.customer?.wa):r.customer?.wa||"";a+=`
            <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border ${m?"border-rose-300 dark:border-rose-700 shadow-[0_0_15px_rgba(225,29,72,0.1)]":"border-slate-200 dark:border-slate-700 shadow-sm"} relative overflow-hidden group hover:-translate-y-1 transition-all">
                ${m?`<div class="absolute -right-6 top-4 ${n?"bg-slate-500":"bg-rose-500"} text-white text-[9px] font-bold uppercase tracking-widest px-8 py-1 rotate-45 shadow-sm">TERLAMBAT ${p} HARI</div>`:""}
                
                <div class="flex justify-between items-start mb-4 pr-12">
                    <div>
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pesanan #${r.orderId.substring(4,10)}</p>
                        <h3 class="font-bold text-slate-800 dark:text-slate-200 mt-1 uppercase">${c(r.customer?.name||"Anonim")}</h3>
                        <p class="text-[10px] font-bold text-slate-500 flex items-center gap-1 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${c(r.customer?.wa||"-")}</p>
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
                        <span class="font-bold">Denda (${i}%/hari) ${n?'<span class="text-[9px] bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded ml-1">STOPPED</span>':""}</span>
                        <span class="font-bold font-mono">+${x(l)}</span>
                    </div>`:""}
                </div>
                
                <div class="flex justify-between items-center bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 p-3.5 rounded-xl border border-rose-100 dark:border-rose-900/30 mb-3">
                    <span class="text-[10px] font-bold uppercase tracking-widest">Total Tagihan</span>
                    <span class="text-sm font-bold font-mono tracking-tight">${x(b)}</span>
                </div>
                
                <div class="flex gap-2 mb-3">
                    <button onclick="editTempoPenalty('${r.orderId}', ${i})" class="flex-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                        <i class="fa-solid fa-percent"></i> Edit Denda
                    </button>
                    <button onclick="stopTempoPenalty('${r.orderId}', ${l}, ${n})" class="flex-1 ${n?"bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.15)]":"bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-200"} rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                        <i class="fa-solid ${n?"fa-play":"fa-stop"}"></i> ${n?"Lanjut Denda":"Stop Denda"}
                    </button>
                </div>
                
                ${r.payment?.installments&&r.payment.installments.length>0?`
                <div class="mb-3 space-y-1.5 bg-slate-50 dark:bg-slate-900/30 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex justify-between">
                        <span>Riwayat Cicilan</span>
                        <span>Total: ${x(r.payment.installments.reduce((w,f)=>w+(parseFloat(f.amount)||0),0))}</span>
                    </div>
                    ${r.payment.installments.map(w=>`
                    <div class="flex justify-between items-center text-[10px]">
                        <span class="text-slate-500 dark:text-slate-400">${new Date(w.date).toLocaleDateString("id-ID")}</span>
                        <span class="font-bold text-[var(--color-primary)] font-mono">+${x(w.amount)}</span>
                    </div>
                    `).join("")}
                </div>`:""}
                
                <div class="flex gap-2 mb-2">
                    <a href="https://wa.me/${g}?text=Halo%20kak%20${c(r.customer?.name||"")},%20mengingatkan%20bahwa%20sisa%20tagihan%20Tempo%20untuk%20pesanan%20${r.orderId}%20sebesar%20${x(b)}%20sudah%20jatuh%20tempo.%20Mohon%20segera%20dilunasi." target="_blank" class="flex-1 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] hover:bg-[rgba(var(--color-primary-rgb),0.12)] dark:hover:bg-[rgba(var(--color-primary-rgb),0.16)] text-[var(--color-primary)] border border-[var(--color-primary)]/25 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                        <i class="fa-brands fa-whatsapp text-sm"></i> Tagih
                    </a>
                    <button onclick="previewTempoReceipt('${r.orderId}')" class="flex-1 bg-amber-500 hover:bg-amber-600 text-white rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm shadow-amber-500/30 transition-all">
                        <i class="fa-solid fa-print"></i> Struk
                    </button>
                </div>
                <div class="flex gap-2">
                    <button onclick="payTempoInstallment('${r.orderId}')" class="flex-1 bg-[var(--color-primary)] hover:opacity-90 text-white rounded-xl py-2.5 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm transition-all">
                        <i class="fa-solid fa-money-bill-wave"></i> Cicil
                    </button>
                    <button onclick="markTempoPaid('${r.orderId}')" class="flex-1 bg-[var(--color-primary)] hover:opacity-90 text-white rounded-xl py-2.5 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm transition-all">
                        <i class="fa-solid fa-check-double"></i> Lunas
                    </button>
                </div>
            </div>`}),a+="</div>"),a+="</div>",S("admin-content",a),setTimeout(()=>{h("total-piutang-header")&&(h("total-piutang-header").innerText=x(t))},100)};const hs=e=>{pa(e),Wt()},Wt=()=>{const e=ca||"all",t=(it||[]).filter(i=>e==="visible"?i.isVisible!==!1:e==="hidden"?i.isVisible===!1:!0),a=`
        <div class="flex gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-5 w-fit">
            ${[{k:"all",l:"Semua"},{k:"visible",l:"Ditampilkan"},{k:"hidden",l:"Disembunyikan"}].map(i=>`
                <button onclick="filterReviews('${i.k}')" class="px-3.5 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${e===i.k?"shadow-sm":"text-slate-500 dark:text-slate-400"}" style="${e===i.k?"background:var(--color-primary);color:#fff":""}">${i.l}</button>
            `).join("")}
        </div>`;if(!t.length){S("admin-content",a+'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-comment-slash text-5xl mb-4 opacity-30"></i>Belum ada ulasan</div>');return}const r=i=>Array.from({length:5},(n,l)=>`<i class="fa-solid fa-star ${l<Math.round(i)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join(""),s=t.map(i=>{let n="";try{i.createdAt&&i.createdAt.toDate&&(n=i.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))}catch{}const l=i.isVisible===!1;return`
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border shadow-sm ${l?"border-rose-200 bg-rose-50/40 dark:border-rose-900/40 dark:bg-rose-900/10":"border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"} mb-3">
            <div class="flex items-start justify-between gap-3 mb-2">
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate">${c(i.customerName||"Pelanggan")}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">${c(i.productName||"")}${i.variantName?" · "+c(i.variantName):""}</p>
                </div>
                <span class="text-[9px] font-bold text-slate-400 whitespace-nowrap">${n}</span>
            </div>
            <div class="flex text-xs mb-2.5">${r(i.rating)}</div>
            ${i.text?`<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2.5">${c(i.text)}</p>`:""}
            ${i.photoUrl?`<img src="${c(i.photoUrl)}" onclick="window.open('${c(i.photoUrl)}','_blank')" class="w-20 h-20 rounded-xl object-cover border border-slate-200 dark:border-slate-700 cursor-pointer mb-2.5" onerror="this.style.display='none'" loading="lazy">`:""}
            ${i.adminReply?`<div class="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-3 mb-2.5"><p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1"><i class="fa-solid fa-store mr-1"></i>Balasan Anda</p><p class="text-[11px] text-slate-600 dark:text-slate-300">${c(i.adminReply)}</p></div>`:""}
            <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                <button onclick="replyToReview(${i.id})" class="px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-blue-100 transition-all"><i class="fa-solid fa-reply"></i> ${i.adminReply?"Edit Balasan":"Balas"}</button>
                <button onclick="toggleReviewVisibility(${i.id})" class="px-3 py-2 rounded-xl ${l?"primary-bg-soft primary-text hover:brightness-95":"bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100"} text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all"><i class="fa-solid ${l?"fa-eye":"fa-eye-slash"}"></i> ${l?"Tampilkan":"Sembunyikan"}</button>
                <button onclick="deleteReview(${i.id})" class="px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-rose-100 transition-all"><i class="fa-solid fa-trash"></i> Hapus</button>
            </div>
        </div>`}).join("");S("admin-content",a+s)},ws=async e=>{const t=(it||[]).find(a=>a.id===e);t&&typeof window.customPrompt=="function"&&window.customPrompt("Tulis balasan untuk ulasan ini:",t.adminReply||"",async a=>{A("Menyimpan balasan...");try{await v.collection("freshmart").doc("cms_data").collection("reviews").doc(e.toString()).update({adminReply:a}),u("Balasan tersimpan!")}catch{u("Gagal menyimpan balasan!")}finally{P()}})},vs=async e=>{const t=(it||[]).find(r=>r.id===e);if(!t)return;const a=t.isVisible===!1;A("Menyimpan...");try{await v.collection("freshmart").doc("cms_data").collection("reviews").doc(e.toString()).update({isVisible:a}),u(a?"Ulasan ditampilkan lagi!":"Ulasan disembunyikan dari halaman produk!")}catch{u("Gagal mengubah status ulasan!")}finally{P()}},ks=e=>{we("Hapus Ulasan","Ulasan yang dihapus tidak bisa dikembalikan lagi.",async()=>{A("Menghapus...");try{await v.collection("freshmart").doc("cms_data").collection("reviews").doc(e.toString()).delete(),u("Ulasan dihapus!")}catch{u("Gagal menghapus ulasan!")}finally{P()}})};window.filterReviews=hs;window.rAdmReviews=Wt;window.replyToReview=ws;window.toggleReviewVisibility=vs;window.deleteReview=ks;window.rAdmL=e=>{Je(e),typeof window.setCTab=="function"&&window.setCTab(e),window.cTab=e,S("admin-content",`
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
    `),rAdmItms(e)};window.rAdmItms=e=>{e&&(Je(e),typeof window.setCTab=="function"&&window.setCTab(e),window.cTab=e);const t=h("admin-list-container"),a=t?t.closest(".scroll-content"):null,r=a?a.scrollTop:0;if(e==="products"&&h("admin-product-stats")){const l=We();S("admin-product-stats",`
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-box mr-1"></i>Produk Aktif</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">${l.activeProd}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-layer-group mr-1"></i>Varian Aktif</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">${l.activeVar}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Kosong / Nonaktif</p>
                    <p class="text-lg sm:text-xl font-bold text-amber-500">${l.inactiveProd+l.inactiveVar}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">${l.inactiveProd} produk, ${l.inactiveVar} varian</p>
                </div>
                <div class="card-modern p-5 sm:p-5 bg-slate-50 dark:bg-slate-800/40">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-warehouse mr-1"></i>Total Aset Gudang</p>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400">Modal (HPP): <b class="text-slate-700 dark:text-slate-200">${x(l.assetHpp)}</b></p>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">Harga Jual: <b class="text-slate-700 dark:text-slate-200">${x(l.assetJual)}</b></p>
                </div>
            </div>
        `)}let s=[...o[e]||[]];s.sort((l,d)=>(d.id||0)-(l.id||0));const i=(Xt||window.aSq||"").toLowerCase();let n=s.filter(l=>{let d=(l.name||l.title||l.bankName||l.code||l.sku||l.phone||"").toLowerCase().includes(i);return e==="products"&&!d&&l.variants&&(d=l.variants.some(p=>p.sku&&p.sku.toLowerCase().includes(i))),d});if(!n.length)return S("admin-list-container",'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-folder-open text-5xl mb-4 opacity-30"></i>Data kosong</div>');S("admin-list-container",n.map(l=>{let d=e==="products",p=d&&(l.isActive==="false"||l.isActive===!1),m=p?"border-rose-200 bg-rose-50/50 dark:border-rose-900/50 dark:bg-rose-900/10":"border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800",b=p?"text-slate-500 dark:text-slate-400 line-through":"text-slate-800 dark:text-slate-100",g=l.img?`<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white border border-slate-100 dark:border-slate-700/60 rounded-2xl p-1.5 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${c(l.img)}" alt="${c(l.name)}" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Img'" class="w-full h-full object-contain ${p?"grayscale opacity-50":""}"></div>`:'<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-2xl flex items-center justify-center text-slate-300 dark:text-slate-600"><i class="fa-solid fa-image text-2xl"></i></div>';const w=window.isAdm||window.__localIsAdm;let f=d?p?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl primary-icon-btn border flex items-center justify-center transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus('${l.id}', true)" title="Aktifkan Stok"><i class="fa-solid fa-check text-xs sm:text-sm"></i></button>`:`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-500 flex items-center justify-center hover:bg-amber-500 hover:text-white dark:bg-amber-900/30 dark:border-amber-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus('${l.id}', false)" title="Nonaktifkan (Habis)"><i class="fa-solid fa-ban text-xs sm:text-sm"></i></button>`:"",y=d?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white dark:bg-blue-900/30 dark:border-blue-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); duplicateProduct('${l.id}')" title="Duplikat Produk"><i class="fa-regular fa-copy text-xs sm:text-sm"></i></button>`:"";const C=o.store.useStock===!0||o.store.useStock==="true";let T=d&&C?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-500 flex items-center justify-center hover:bg-indigo-500 hover:text-white dark:bg-indigo-900/30 dark:border-indigo-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openRestockModal('${l.id}')" title="Restock Produk"><i class="fa-solid fa-boxes-stacked text-xs sm:text-sm"></i></button>`:"",k=d?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl primary-icon-btn border flex items-center justify-center transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openQuickPriceModal('${l.id}')" title="Edit Cepat Harga"><i class="fa-solid fa-tags text-xs sm:text-sm"></i></button>`:"",q=`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-500 hover:text-white dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oAEd('${e}','${l.id}')" title="Edit Data"><i class="fa-solid fa-pen text-xs sm:text-sm"></i></button>`,L=`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oADel('${e}','${l.id}')" title="Hapus Permanen"><i class="fa-solid fa-trash text-xs sm:text-sm"></i></button>`;return`
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[1.5rem] border shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all duration-300 ${m}" onclick="oAEd('${e}','${l.id}')">
            <div class="flex items-start sm:items-center gap-4 min-w-0 w-full">
                ${g}
                <div class="min-w-0 flex flex-col justify-center py-1">
                    <p class="text-xs sm:text-sm font-bold ${b} line-clamp-2 uppercase tracking-wide leading-snug mb-1.5">${c(l.name||l.title||l.bankName||l.code||"Item")}</p>
                    ${d?`<p class="text-sm sm:text-base font-bold text-[var(--color-primary)] tracking-tight">${x(l.price)}</p>`:""}
                    ${d&&w&&C?`<p class="text-[10px] font-bold mt-1 ${(l.variants&&l.variants.length?l.variants.reduce((_,j)=>_+(parseFloat(j.stock)||0),0):parseFloat(l.stock)||0)===0?"text-rose-500 animate-pulse":"text-blue-500"}"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${l.variants&&l.variants.length?l.variants.reduce((_,j)=>_+(parseFloat(j.stock)||0),0).toFixed(2).replace(/\.?0+$/,""):parseFloat(l.stock)||0}</p>`:""}
                    ${d&&w&&l.hpp?`<p class="text-[10px] font-bold text-amber-500 mt-0.5"><i class="fa-solid fa-coins mr-1"></i>HPP: ${x(l.hpp)}</p>`:""}
                    ${d?(()=>{const _=l.variants&&l.variants.length?l.variants.reduce((j,B)=>j+(parseFloat(B.totalSold)||0),0):parseFloat(l.totalSold)||0;return _>0?`<p class="text-[10px] font-bold text-orange-400 mt-0.5"><i class="fa-solid fa-fire-flame-curved mr-1"></i>Terjual: ${_}</p>`:""})():""}
                    ${e==="colors"?`<div class="flex items-center gap-2 mt-1"><div class="w-4 h-4 rounded-full border border-slate-200 dark:border-slate-600 shadow-sm" style="background-color: ${c(l.hex||"transparent")}"></div><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-swatchbook mr-1"></i>${c(l.catalog||"Tanpa Katalog")}</p></div>`:""}
                    ${e==="customers"?`<p class="text-xs font-bold text-slate-500 dark:text-slate-400"><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i>+${c(l.phone)}</p><p class="text-[11px] font-bold text-[var(--color-primary)] mt-0.5"><i class="fa-solid fa-star mr-1"></i>${parseFloat(l.points)||0} Poin</p>`:""}
                    ${e==="rewards"?`<p class="text-sm font-bold text-violet-500"><i class="fa-solid fa-star mr-1"></i>${parseFloat(l.pointsCost)||0} Poin</p><p class="text-[10px] font-bold text-slate-500 mt-0.5"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${parseFloat(l.stock)||0}</p>`:""}
                </div>
            </div>
            <div class="flex gap-2.5 shrink-0 self-end sm:self-center pt-3 sm:pt-0 border-t border-slate-100 sm:border-0 dark:border-slate-700/50 w-full sm:w-auto justify-end">
                ${f}
                ${T}
                ${k}
                ${y}
                ${q}
                ${L}
            </div>
        </div>`}).join("")),a&&requestAnimationFrame(()=>{a.scrollTop=r})};window.rAdmReviews=()=>window.rAdmReviews?.();window.rTaxPanel=()=>window.rTaxPanel?.();typeof window.bannerTmr>"u"&&(window.bannerTmr=null);let Xe=null;const st=()=>{document.querySelectorAll("#banner-slider video.banner-video-element").forEach(e=>{e.dataset.init||(e.dataset.init="true",e.muted=!0,e.loop=!0,e.playsInline=!0,e.setAttribute("playsinline",""),e.setAttribute("loop",""),e.setAttribute("autoplay","")),e.dataset.loopAttached||(e.dataset.loopAttached="true",e.addEventListener("ended",()=>{e.currentTime=0,e.play().catch(()=>{})})),e.dataset.userUnmuted==="true"&&(e.muted=!1),e.play().catch(()=>{})})},ys=(e,t)=>{const a=h(`banner-slide-${t}`)||e&&e.closest(".banner-slide-item");if(!a)return;const r=a.querySelector("video.banner-video-element");if(r){r.muted?(r.muted=!1,r.volume=1,r.dataset.userUnmuted="true",r.play().catch(()=>{}),e&&(e.innerHTML='<i class="fa-solid fa-volume-high text-xs"></i> <span>Suara On</span>',e.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 primary-bg text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer")):(r.muted=!0,r.dataset.userUnmuted="false",e&&(e.innerHTML='<i class="fa-solid fa-volume-xmark text-xs"></i> <span>Muted</span>',e.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer"));return}const s=a.querySelector("iframe.banner-video-iframe");s&&(s.dataset.muted!=="false"?(s.dataset.muted="false",s.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}',"*"),s.contentWindow?.postMessage('{"event":"command","func":"setVolume","args":[100]}',"*"),e&&(e.innerHTML='<i class="fa-solid fa-volume-high text-xs"></i> <span>Suara On</span>',e.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 primary-bg text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer")):(s.dataset.muted="true",s.contentWindow?.postMessage('{"event":"command","func":"mute","args":""}',"*"),e&&(e.innerHTML='<i class="fa-solid fa-volume-xmark text-xs"></i> <span>Muted</span>',e.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer")))},Te=e=>{const t=h("banner-dots-container");if(!t)return;t.querySelectorAll(".banner-dot-item").forEach((r,s)=>{s===e?r.className="banner-dot-item h-2.5 rounded-full transition-all duration-300 bg-[var(--color-primary)] w-7 shadow-sm":r.className="banner-dot-item w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"})},$s=()=>{Xe&&clearTimeout(Xe),Xe=setTimeout(()=>{const e=h("banner-slider");if(!e)return;const t=e.querySelectorAll(".banner-slide-item");if(!t||!t.length)return;let a=0,r=1/0;t.forEach((s,i)=>{const n=Math.abs(s.offsetLeft-e.scrollLeft);n<r&&(r=n,a=i)}),Te(a)},100)},Ss=e=>{clearInterval(window.bannerTmr);const t=h("banner-slider");if(!t)return;const a=t.querySelectorAll(".banner-slide-item");a&&a[e]&&(t.scrollTo({left:a[e].offsetLeft-t.offsetLeft,behavior:"smooth"}),Te(e)),setTimeout(Fe,8e3)},Ps=()=>{clearInterval(window.bannerTmr);const e=h("banner-slider");if(!e)return;const t=e.querySelectorAll(".banner-slide-item");if(!t||!t.length)return;let a=0,r=1/0;t.forEach((i,n)=>{const l=Math.abs(i.offsetLeft-e.scrollLeft);l<r&&(r=l,a=n)});const s=(a-1+t.length)%t.length;e.scrollTo({left:t[s].offsetLeft-e.offsetLeft,behavior:"smooth"}),Te(s),setTimeout(Fe,8e3)},As=()=>{clearInterval(window.bannerTmr);const e=h("banner-slider");if(!e)return;const t=e.querySelectorAll(".banner-slide-item");if(!t||!t.length)return;let a=0,r=1/0;t.forEach((i,n)=>{const l=Math.abs(i.offsetLeft-e.scrollLeft);l<r&&(r=l,a=n)});const s=(a+1)%t.length;e.scrollTo({left:t[s].offsetLeft-e.offsetLeft,behavior:"smooth"}),Te(s),setTimeout(Fe,8e3)},Fe=()=>{if(clearInterval(window.bannerTmr),!h("banner-slider")||!o.banners||o.banners.length<=1)return;const t=()=>{st()};t(),st(),window.bannerTmr=setInterval(()=>{const a=h("banner-slider");if(!a)return clearInterval(window.bannerTmr);const r=a.querySelectorAll(".banner-slide-item");if(!r||r.length<=1){const s=a.scrollWidth-a.clientWidth;a.scrollLeft>=s-10?a.scrollTo({left:0,behavior:"smooth"}):a.scrollBy({left:a.clientWidth,behavior:"smooth"})}else{let s=0,i=1/0;r.forEach((d,p)=>{const m=Math.abs(d.offsetLeft-a.scrollLeft);m<i&&(i=m,s=p)});const n=(s+1)%r.length,l=r[n];a.scrollTo({left:l.offsetLeft-a.offsetLeft,behavior:"smooth"}),Te(n)}setTimeout(t,400)},8e3)};window.forcePlayBannerVideos=st;window.toggleBannerVideoSound=ys;window.updateBannerDots=Te;window.onBannerScroll=$s;window.scrollToBanner=Ss;window.scrollBannerPrev=Ps;window.scrollBannerNext=As;window.startBannerAutoSlide=Fe;const Ts=[{id:"log-1-4-0",version:"v1.4.0",date:"2026-09-16",title:"Fitur Single Active Admin Session (Auto Kick-out Antar Perangkat) & Firestore Security Rules",category:"feature",badge:"Single Session Security",items:["Sistem Single Concurrent Admin Session: membatasi akses CMS Seller hanya dapat aktif di 1 perangkat/browser dalam satu waktu untuk mencegah tabrakan edit data dan kebocoran akses.","Mekanisme Realtime Auto Kick-out: jika admin login dari perangkat baru (misal laptop/desktop), sesi CMS di perangkat lama (misal HP atau browser lain) secara instan ditendang keluar secara aman (<300ms) disertai modal dialog penjelasan nama perangkat yang mengambil alih.","Deteksi perangkat cerdas (Smartphone Android, iPhone, Laptop Windows, Mac, Linux, dll) untuk identifikasi login yang transparan.","Validasi ganda startup sesi (auto-login guard) untuk memastikan sesi lokal yang telah digantikan perangkat lain tidak dapat membuka dashboard tanpa login ulang.","Pembaruan cloud Firestore Security Rules dengan otorisasi sub-koleksi admin_session khusus untuk ADMIN_UID terverifikasi."]},{id:"log-1-3-1",version:"v1.3.1",date:"2026-09-16",title:"Native Realtime Sync Sub-Koleksi Produk, Rekonsiliasi Multi-Browser & Hardening Rules",category:"bugfix",badge:"Realtime Multi-Device",items:["Pemasangan native listener onSnapshot langsung pada sub-koleksi products Firestore sehingga perubahan status produk (aktif/nonaktif/stok) dari admin desktop langsung terdorong seketika (<200ms) ke seluruh HP & browser aktif tanpa reload.","Rekonsiliasi otomatis data produk dari server saat snapshot pertama tiba (initial load), mengeliminasi bug perbedaan tampilan antar browser akibat cache localStorage yang usang.","Penyegaran antarmuka tabel admin reaktif otomatis via deteksi kontainer DOM tanpa terhambat status sesi login.","Pengamanan perbandingan ID produk dengan konversi string eksplisit (id.toString()) pada pencarian indeks array dan event handler onclick.","Optimasi evaluasi kondisi stok pada firestore.rules untuk mencegah type error dan mempercepat validasi transaksi checkout."]},{id:"log-1-3-0",version:"v1.3.0",date:"2026-09-15",title:"Hotfix Realtime Sync Multi-Perangkat, Eliminasi Stale Cache & Granular Sync",category:"bugfix",badge:"Realtime Sync & Hotfix",items:["Perbaikan bug fatal inisialisasi syncAppMeta() dan listener Firestore onSnapshot sehingga perubahan status produk (aktif/nonaktif/stok) di Admin Desktop seketika terupdate live di HP tanpa reload.","Penonaktifan persistentLocalCache IndexedDB yang menyebabkan data produk usang (stale) menolak pembaruan server Firestore.","Optimasi granular sync: penambahan penanganan event product_delete dan pengiriman updatedProductIds pada saveApp() sehingga hemat kuota Firestore hingga 95%.","Penyegaran antarmuka instan pada tombol toggle status aktif/habis produk di tabel admin.","Integrasi konfigurasi Firestore db.settings({ merge: true }) guna mencegah host override warning.","Pembaruan log pembaruan sistem dan sinkronisasi seluruh paket distribusi flashdisk & build siap pakai."]},{id:"log-1-2-0",version:"v1.2.0",date:"2026-09-15",title:"Maintenance Keamanan, Optimasi Bundle (-68%) & Isolasi Cache Multi-Projek",category:"maintenance",badge:"Maintenance & Optimasi",items:["Pembersihan celah keamanan dependensi melalui audit paket npm.","Optimasi Vite Rollup code-splitting: modul admin dan cetak dokumen dipisah ke chunk tersendiri, memangkas ukuran bundle storefront utama dari 509 kB ke 163 kB (turun 68%).","Isolasi cache multi-projek pada localStorage untuk mencegah data toko tertukar saat pengujian di localhost.","Percepatan First Contentful Paint (FCP) dan eliminasi peringatan batas ukuran bundle.","Pembaruan berkas siap pakai dan paket flashdisk installer."]},{id:"log-1-1-0",version:"v1.1.0",date:"2026-09-10",title:"Harmonisasi Warna Token, Desain Vouchers & Kategori Kompak",category:"optimization",badge:"Peningkatan Visual",items:["Harmonisasi variabel CSS token warna tema (primary, primary-dark, primary-light) di seluruh komponen.","Penyesuaian tata letak kartu voucher, kategori, brand mitra, dan reward agar lebih padat dan hemat ruang di layar ponsel.","Penyempurnaan navigasi header desktop agar lebih bersih dan minimalis.","Perbaikan urutan CSS view-section untuk mencegah auto-redirect saat me-refresh halaman."]},{id:"log-1-0-0",version:"v1.0.0",date:"2026-09-01",title:"Peluncuran Sistem Web & POS Kasir Toko Putri Resmi",category:"feature",badge:"Rilis Perdana",items:["Rilis resmi platform e-commerce dan kasir point-of-sales (POS) Toko Putri.","Katalog produk interaktif dengan varian harga, grosir, dan spesifikasi lengkap.","Keranjang belanja instan terhubung otomatis ke WhatsApp Checkout.","Dukungan metode pembayaran QRIS Nasional dan Transfer Bank.","Modul cetak struk kasir thermal 58mm/80mm, invoice A4, dan surat jalan.","PWA (Progressive Web App) dengan dukungan mode offline dan installable di HP/PC."]}],ht=e=>{const t=e&&Array.isArray(e.changelog)?e.changelog:[],a=new Set(t.map(i=>i.id||i.version)),r=Ts.filter(i=>!a.has(i.id)&&!a.has(i.version));return[...t,...r].sort((i,n)=>{const l=new Date(i.date||"2026-01-01").getTime();return new Date(n.date||"2026-01-01").getTime()-l})},wt=e=>{const t=ht(e);return t.length>0&&t[0].version||"v1.0.0"},zt=()=>{const e=document.getElementById("storefront-footer-container");if(!e)return;const t=o.store||{},a=t.name||"Toko Putri",r=t.description||t.slogan||"Selamat datang di toko kami. Melayani pembelian online dan offline dengan kualitas terbaik.",s=t.email||"",i=t.operationalHours||"Buka Setiap Hari (08:00 - 17:00)",n=t.address||"",l=t.wa||"",d=t.footerCredit||"Seluruh hak cipta dilindungi undang-undang.",p=new Date().getFullYear(),m=wt(o);let b=(l||"").replace(/\D/g,"");b.startsWith("0")?b="62"+b.slice(1):!b.startsWith("62")&&b.length>0&&(b="62"+b);let g='<i class="fa-solid fa-store text-2xl text-[var(--color-primary)]"></i>';t.logo&&(t.logo.includes("http")||t.logo.includes("data:")?g=`<img src="${c(t.logo)}" alt="${c(a)}" class="h-full w-full max-h-10 max-w-10 object-contain" onerror="this.outerHTML='<i class=\\'fa-solid fa-store text-2xl text-[var(--color-primary)]\\'></i>'">`:g=`<i class="fa-solid ${c(t.logo)} text-2xl text-[var(--color-primary)]"></i>`);const w=b?`window.open('https://wa.me/${c(b)}', '_blank')`:"if(typeof window.showToast==='function') window.showToast('Nomor WhatsApp belum dikonfigurasi admin.');";e.innerHTML=`
    <!-- ================= FOOTER TOKO RESMI (MODERN, CLEAN, HARMONIS DENGAN TEMA) ================= -->
    <footer class="themed-footer relative mt-14 w-full overflow-hidden pb-[calc(6.5rem+env(safe-area-inset-bottom))] sm:pb-[calc(3.5rem+env(safe-area-inset-bottom))]">
      <div class="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-[1240px] pt-10 sm:pt-14 pb-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <!-- Kolom 1: Profil Perusahaan & Brand -->
          <div class="flex flex-col items-start text-left md:col-span-6 lg:col-span-4">
            <div class="mb-4 flex items-center gap-3.5">
              <div class="flex h-13 w-13 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white p-2.5 shadow-md">
                ${g}
              </div>
              <div class="flex flex-col items-start min-w-0">
                <h3 class="text-base sm:text-lg font-black tracking-tight text-white leading-tight break-words max-w-full">${c(a)}</h3>
                <span class="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/15 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-[var(--color-primary)]">
                  <i class="fa-solid fa-circle-check"></i> Verified Official Store
                </span>
              </div>
            </div>

            <p class="mb-4 max-w-md text-xs font-normal leading-relaxed text-white/80">
              ${c(r)}
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
              <!-- WhatsApp CTA Card (Dark Glassmorphic Card dengan Aksen Hijau Glowing yang Selaras) -->
              <a
                class="group flex cursor-pointer items-center gap-3.5 rounded-2xl border border-emerald-500/30 bg-emerald-950/25 hover:bg-emerald-900/35 p-3.5 transition-all duration-200 shadow-sm hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-950/50"
                href="javascript:void(0)"
                onclick="${w}"
              >
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white text-2xl shadow-md shadow-[#25D366]/30 group-hover:scale-105 transition-transform">
                  <i class="fa-brands fa-whatsapp"></i>
                </div>
                <div class="min-w-0 text-left">
                  <div class="flex items-center gap-1.5">
                    <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <p class="text-[9px] font-extrabold uppercase tracking-widest text-emerald-400">Customer Support</p>
                  </div>
                  <p class="truncate text-xs font-black text-white group-hover:text-emerald-300 transition-colors">Konsultasi via WhatsApp</p>
                  <p class="text-[10px] font-medium text-white/70">Respon Cepat &amp; Ramah</p>
                </div>
                <div class="ml-auto text-white/30 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all">
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
                    <p class="truncate text-xs font-bold text-white tracking-wide">${c(i)}</p>
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
                  <i class="fa-solid fa-truck-fast text-emerald-300"></i> Ekspedisi Cepat
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
      <div class="border-t border-white/10 bg-black/30 backdrop-blur-sm py-4">
        <div class="mx-auto flex w-full flex-col items-center justify-between gap-3 px-4 sm:px-6 md:flex-row lg:px-8 xl:max-w-[1240px]">
          <p class="text-[11px] font-medium text-white/80 text-center sm:text-left">
            &#169; <span>${p}</span> <span class="font-extrabold text-white">${c(a)}</span>. <span>${c(d)}</span>
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3 text-[10px] font-bold text-white">
            <button type="button" onclick="if(typeof window.openChangelogModal==='function') window.openChangelogModal();" class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider text-white hover:bg-white/20 transition-all active:scale-95 cursor-pointer shadow-xs" title="Lihat Catatan Pembaruan & Versi">
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
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
    `},Cs=()=>{let e=document.getElementById("guarantee-modal");e||(e=document.createElement("div"),e.id="guarantee-modal",e.className="fixed inset-0 z-[115] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=t=>{t.target===e&&Jt()},document.body.appendChild(e)),e.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-md rounded-t-[2rem] sm:rounded-[2rem] p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-4">
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
        </div>`,e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"})},Jt=()=>{const e=document.getElementById("guarantee-modal");!e||e.style.display==="none"||(e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250))},Is=()=>{let e=document.getElementById("security-modal");e||(e=document.createElement("div"),e.id="security-modal",e.className="fixed inset-0 z-[115] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=t=>{t.target===e&&Qt()},document.body.appendChild(e)),e.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-md rounded-t-[2rem] sm:rounded-[2rem] p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-4">
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
        </div>`,e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"})},Qt=()=>{const e=document.getElementById("security-modal");!e||e.style.display==="none"||(e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250))};window.renderStorefrontFooter=zt;window.openQualityGuaranteeModal=Cs;window.closeQualityGuaranteeModal=Jt;window.openSecurityModal=Is;window.closeSecurityModal=Qt;const he=()=>{if(zt(),H("dyn-store-name",o.store.name||"Toko Putri"),H("dyn-store-slogan",o.store.slogan||o.store.tagline||o.store.desc||o.store.description||"Toko Online & Kasir Resmi"),o.store.logo){const n=h("dyn-store-logo-img"),l=h("dyn-store-logo-icon");o.store.logo.includes("http")||o.store.logo.includes("data:")?n&&(n.src=o.store.logo,n.onerror=()=>{n.onerror=null,n.src="https://placehold.co/100?text=Logo"},F("dyn-store-logo-img"),O("dyn-store-logo-icon")):l&&(l.className=`fa-solid ${c(o.store.logo)} text-xl text-[var(--color-primary)]`,F("dyn-store-logo-icon"),O("dyn-store-logo-img"))}let e=o.banners&&o.banners.length?`
    <div class="relative group/banner-wrapper w-full">
        <div id="banner-slider" class="flex overflow-x-auto gap-4 sm:gap-6 pb-4 pt-2 snap-x hide-scrollbar scroll-smooth" ontouchstart="clearInterval(window.bannerTmr)" ontouchend="setTimeout(() => window.startBannerAutoSlide?.(), 8000)" onmouseenter="clearInterval(window.bannerTmr)" onmouseleave="window.startBannerAutoSlide?.()" onscroll="window.onBannerScroll && window.onBannerScroll()">
            ${o.banners.map((n,l)=>{const d=n.type==="video"&&n.videoUrl,p=!d&&n.link?`onclick="window.open('${c(n.link)}', '_self')"`:"";if(d){const m=ma(n.videoUrl)||{type:"direct",directUrl:nt(n.videoUrl),embedUrl:ua(n.videoUrl)};let b="";return m.type==="youtube"?b=`
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
            <div id="banner-slide-${l}" class="banner-slide-item w-[88vw] sm:w-[520px] aspect-video snap-center shrink-0 rounded-[2rem] relative overflow-hidden group bg-black shadow-none border border-white/10 flex flex-col select-none">
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
                        <button onclick="event.stopPropagation(); window.toggleBannerVideoSound(this, ${l});" type="button" aria-label="Aktifkan Suara Video" class="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-none border border-white/20 active:scale-95 transition-all cursor-pointer">
                            <i class="fa-solid fa-volume-xmark text-xs"></i> <span>Aktifkan Suara</span>
                        </button>
                    </div>
                </div>

            </div>`}return`
        <div ${p} class="banner-slide-item w-[88vw] sm:w-[480px] min-h-[180px] sm:min-h-[220px] snap-center shrink-0 rounded-[2rem] relative overflow-hidden group cursor-pointer bg-[var(--color-primary)] text-white shadow-none hover:-translate-y-1 hover:scale-[1.01] hover:shadow-none transition-all duration-300 border border-white/15 flex flex-col">
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
                    ${n.img?`<img loading="lazy" src="${c(ge(n.img,"w800-rw"))}" alt="${c(n.title||"Promo Banner")}" class="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105" onerror="this.style.display='none'">`:`
                    <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300">
                        <i class="fa-solid fa-gift text-4xl sm:text-5xl text-white"></i>
                    </div>`}
                </div>
            </div>
        </div>`}).join("")}
        </div>
        ${o.banners.length>1?`
        <!-- Navigation Arrows (Desktop) -->
        <button onclick="window.scrollBannerPrev()" type="button" aria-label="Banner Sebelumnya" class="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white items-center justify-center border border-slate-700 transition-all opacity-0 group-hover/banner-wrapper:opacity-100 shadow-xl active:scale-95">
            <i class="fa-solid fa-chevron-left text-sm"></i>
        </button>
        <button onclick="window.scrollBannerNext()" type="button" aria-label="Banner Selanjutnya" class="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white items-center justify-center border border-slate-700 transition-all opacity-0 group-hover/banner-wrapper:opacity-100 shadow-xl active:scale-95">
            <i class="fa-solid fa-chevron-right text-sm"></i>
        </button>

        <!-- Dots Indicator Navigation -->
        <div id="banner-dots-container" class="flex items-center justify-center gap-1.5 mt-2">
            ${o.banners.map((n,l)=>`
                <button onclick="window.scrollToBanner(${l})" type="button" aria-label="Slide ${l+1}" class="banner-dot-item ${l===0?"h-2.5 rounded-full transition-all duration-300 bg-[var(--color-primary)] w-7 shadow-sm":"w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"}" data-index="${l}"></button>
            `).join("")}
        </div>
        `:""}
    </div>`:"";S("dynamic-banners-container",e),setTimeout(Fe,500);const t=(o.vouchers||[]).filter(n=>n.isShow==="true"||n.isShow===!0),a=h("dynamic-vouchers-container");if(t.length>0&&a){a.classList.remove("hidden");let n=`
        <div class="flex items-center justify-between mb-2.5">
            <h3 class="font-bold text-slate-800 dark:text-white text-xs sm:text-sm tracking-tight flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white shadow-2xs">
                    <i class="fa-solid fa-ticket-simple text-xs -rotate-45"></i>
                </div> VOUCHER TOKO
            </h3>
        </div>
        <div class="flex gap-2.5 sm:gap-3 overflow-x-auto hide-scrollbar snap-x pb-3 pt-1">
            ${t.map(l=>{let d=l.type==="shipping_free"?"Gratis Ongkir":l.type==="percent"?`Diskon ${c(String(parseFloat(l.value)||0))}%`:`Diskon ${x(l.value)}`,p=[];l.minPurchase>0&&p.push(`Min. Blj ${x(l.minPurchase)}`),l.maxDiscount>0&&p.push(`Maks. ptg ${x(l.maxDiscount)}`),l.targetProduct&&p.push("Produk Khusus");let m=p.length>0?c(p.join(" • ")):"Tanpa min. belanja";return`
                <div class="w-[220px] sm:w-[245px] shrink-0 snap-start relative group cursor-pointer active:scale-95 transition-all duration-200" onclick="copyVoucher('${c(l.code)}')">
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
                                    <i class="fa-solid fa-ticket text-amber-300 text-[8px]"></i> ${c(l.code)}
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
        </div>`;a.innerHTML=n}else a&&(a.classList.add("hidden"),a.innerHTML="");const r=[...o.categories||[]];S("dynamic-categories-container",r.map(n=>{const l=fe===n.name,d=decodeURIComponent(encodeURIComponent(n.name).replace(/'/g,"%27"));if(o.store.categoryStyle==="text"||!o.store.categoryStyle)return`<div onclick="filterCategory('${d}')" class="cursor-pointer shrink-0 snap-start group py-0.5"><div class="px-3.5 py-1.5 rounded-xl border transition-all duration-200 flex items-center gap-2 ${l?"bg-[var(--color-primary)] border-transparent text-white shadow-xs":"bg-slate-50 dark:bg-slate-800/90 border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[var(--color-primary)]/50 hover:bg-white dark:hover:bg-slate-800"}"><div class="w-5 h-5 rounded-md flex items-center justify-center ${l?"bg-white/20 text-white":"bg-white dark:bg-slate-700 text-slate-400 group-hover:text-[var(--color-primary)]"} transition-colors"><i class="fa-solid fa-layer-group text-[9px]"></i></div><span class="font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">${c(n.name)}</span></div></div>`;{const p=n.img&&!n.img.includes("10b981")?ge(n.img,"w150-rw"):"https://placehold.co/150/f1f5f9/64748b?text=Cat";return`<div onclick="filterCategory('${d}')" class="flex flex-col items-center gap-1.5 cursor-pointer shrink-0 w-[64px] sm:w-[72px] group snap-start py-0.5"><div class="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-1.5 transition-all duration-200 ${l?"bg-[var(--color-primary-light)] border-2 border-[var(--color-primary)] shadow-xs dark:bg-[var(--color-primary-dark)]/20":"border border-slate-200 dark:border-slate-700 shadow-2xs group-hover:border-[var(--color-primary)] group-hover:-translate-y-0.5"} overflow-hidden"><img loading="lazy" src="${c(p)}" alt="${c(n.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/f1f5f9/64748b?text=Cat'" class="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"></div><span class="text-[8.5px] sm:text-[9px] text-center w-full line-clamp-1 leading-tight px-0.5 ${l?"font-bold text-[var(--color-primary)]":"font-semibold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]"} uppercase tracking-wider transition-colors">${c(n.name)}</span></div>`}}).join(""));const s=[...o.brands||[]],i=[{name:"Semua Merek",img:o.store.allBrandsIcon&&!o.store.allBrandsIcon.includes("10b981")?o.store.allBrandsIcon:"https://placehold.co/150/f1f5f9/475569?text=Semua+Merek"},...o.brands||[]];S("dynamic-brands-container",s.map(n=>{const l=le===n.name,d=decodeURIComponent(encodeURIComponent(n.name).replace(/'/g,"%27"));if(o.store.brandStyle==="text")return`<div onclick="filterBrand('${d}')" class="cursor-pointer shrink-0 snap-start group py-0.5"><div class="px-3.5 py-1.5 rounded-xl border transition-all duration-200 flex items-center gap-2 ${l?"bg-[var(--color-primary)] border-transparent text-white shadow-xs":"bg-slate-50 dark:bg-slate-800/90 border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[var(--color-primary)]/50 hover:bg-white dark:hover:bg-slate-800"}"><div class="w-5 h-5 rounded-md flex items-center justify-center ${l?"bg-white/20 text-white":"bg-white dark:bg-slate-700 text-slate-400 group-hover:text-[var(--color-primary)]"} transition-colors"><i class="fa-solid fa-copyright text-[9px]"></i></div><span class="font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">${c(n.name)}</span></div></div>`;{const p=n.img&&!n.img.includes("10b981")?ge(n.img,"w150-rw"):"https://placehold.co/150/f1f5f9/64748b?text=Brand";return`<div onclick="filterBrand('${d}')" class="flex flex-col items-center gap-1.5 cursor-pointer shrink-0 w-[64px] sm:w-[72px] group snap-start py-0.5"><div class="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden p-1.5 transition-all duration-200 ${l?"ring-2 ring-[var(--color-primary)] ring-offset-1 ring-offset-slate-50 dark:ring-offset-slate-800 shadow-xs":"border border-slate-200 dark:border-slate-700 shadow-2xs group-hover:border-[var(--color-primary)]/50 group-hover:-translate-y-0.5"}"><img loading="lazy" src="${c(p)}" alt="${c(n.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/f1f5f9/64748b?text=Brand'" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"></div><span class="text-[8.5px] sm:text-[9px] text-center w-full line-clamp-1 leading-tight px-0.5 ${l?"font-bold text-[var(--color-primary)]":"font-semibold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]"} uppercase tracking-wider transition-colors">${c(n.name)}</span></div>`}}).join("")),S("modal-brand-grid",i.map(n=>{const l=le===n.name,d=decodeURIComponent(encodeURIComponent(n.name).replace(/'/g,"%27")),p=n.img&&!n.img.includes("10b981")?ge(n.img,"w150-rw"):"https://placehold.co/150/f1f5f9/64748b?text=Brand";return`<button onclick="filterBrand('${d}'); closeBrandModal();" class="flex flex-col items-center gap-3 p-4 rounded-2xl border ${l?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.07)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-sm":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]/40 hover:shadow-sm"} transition-all active:scale-[0.96]"><div class="w-14 h-14 rounded-2xl flex items-center justify-center bg-white border border-slate-100 dark:border-slate-600 shadow-inner overflow-hidden p-1.5"><img loading="lazy" src="${c(p)}" alt="${c(n.name)}" class="w-full h-full object-contain" onerror="this.src='https://placehold.co/150/f1f5f9/64748b?text=Brand'"></div> <span class="text-[10px] sm:text-xs font-bold ${l?"text-[var(--color-primary)]":"text-slate-700 dark:text-slate-300"} text-center leading-tight line-clamp-2 uppercase tracking-widest">${c(n.name)}</span></button>`}).join("")),h("dyn-qris-img")&&o.payment&&(h("dyn-qris-img").src=o.payment.qrisUrl),typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog(),typeof window.applyBackgroundStyle=="function"&&window.applyBackgroundStyle(o.store.bgStyle,o.store.bgCustomUrl),be(1),J()};window.rDyn=he;const js=async()=>{if(document.documentElement.classList.contains("dark")){const f=h("icon-theme");f&&(f.className="fa-solid fa-sun text-sm text-amber-500")}const e=()=>{o.products=o.products||[],o.categories=o.categories||[],o.brands=o.brands||[],o.vouchers=o.vouchers||[],o.changelog=o.changelog||[],o.products.forEach(f=>{f.img&&(f.img=I(f.img)),f.variants&&f.variants.forEach(y=>{y.img&&(y.img=I(y.img))})}),o.banners&&o.banners.forEach(f=>{f.img&&(f.img=I(f.img)),f.videoUrl&&(f.videoUrl=nt(f.videoUrl))}),o.categories&&o.categories.forEach(f=>{f.img&&(f.img=I(f.img),f.img.includes("10b981")&&(f.img="https://placehold.co/150/f1f5f9/64748b?text=Cat"))}),o.brands&&o.brands.forEach(f=>{f.img&&(f.img=I(f.img),f.img.includes("10b981")&&(f.img="https://placehold.co/150/f1f5f9/64748b?text=Brand"))}),o.store.logo&&(o.store.logo=I(o.store.logo)),o.store.allProductsIcon&&(o.store.allProductsIcon=I(o.store.allProductsIcon)),o.store.allBrandsIcon&&(o.store.allBrandsIcon=I(o.store.allBrandsIcon),o.store.allBrandsIcon.includes("10b981")&&(o.store.allBrandsIcon="https://placehold.co/150/f1f5f9/475569?text=Semua+Merek")),o.payment.qrisUrl&&(o.payment.qrisUrl=I(o.payment.qrisUrl)),M.forEach(f=>{f.img&&(f.img=I(f.img))}),Z.forEach(f=>{f.img&&(f.img=I(f.img))})},t=Nt?.projectId||"default",a=ie("freshmart_active_project");if(a&&a!==t)try{localStorage.removeItem("freshmart_cms_data"),localStorage.removeItem("freshmart_products"),localStorage.removeItem("freshmart_rewards"),localStorage.removeItem("freshmart_last_update"),localStorage.removeItem("freshmart_cart"),localStorage.removeItem("freshmart_wishlist")}catch{}R("freshmart_active_project",t);let r=JSON.parse(ie("freshmart_cms_data")||"null"),s=JSON.parse(ie("freshmart_products")||"null"),i=JSON.parse(ie("freshmart_rewards")||"null");parseInt(ie("freshmart_last_update")||"0");let n=!1;if(r?(Object.assign(o,z,r),o.store={...z.store,...r.store||{}},o.payment={...z.payment,...r.payment||{}},o.config={...z.config,...r.config||{}},o.config&&o.config.gasUrl&&(window.GAS_UPLOAD_URL=o.config.gasUrl),s&&(o.products=s),i&&(o.rewards=i),e(),o.store&&(Pe(o.store.uiTheme,o.store.themeColor),Ae(o.store.bgStyle,o.store.bgCustomUrl)),Be(),Y(),Ee(),he(),J(),H("stat-products",o.products.filter(f=>f.isActive!=="false"&&f.isActive!==!1).length),P(),n=!0):A("Memuat Toko..."),!n)try{const f=await v.collection("freshmart").doc("cms_data").get();if(f.exists){const y=f.data(),C=y.lastUpdate||0;R("freshmart_cms_data",JSON.stringify(y)),Object.assign(o,z,y),o.store={...z.store,...y.store||{}},o.payment={...z.payment,...y.payment||{}},o.config={...z.config,...y.config||{}},o.config&&o.config.gasUrl&&(window.GAS_UPLOAD_URL=o.config.gasUrl);const T=await v.collection("freshmart").doc("cms_data").collection("products").get();o.products=T.docs.map(k=>k.data()).sort((k,q)=>(q.id||0)-(k.id||0)),R("freshmart_products",JSON.stringify(o.products)),R("freshmart_last_update",C.toString()),e(),o.store&&(Pe(o.store.uiTheme,o.store.themeColor),Ae(o.store.bgStyle,o.store.bgCustomUrl)),Be(),Y(),Ee(),he(),J(),H("stat-products",o.products.filter(k=>k.isActive!=="false"&&k.isActive!==!1).length)}}catch{u("Mode Offline (Data Lokal)")}finally{P()}H("stat-products",o.products.filter(f=>f.isActive!=="false"&&f.isActive!==!1).length);const l=h("loader-store-name"),d=h("loader-tagline");l&&(l.textContent=(o.store.name||"").toUpperCase()),d&&(d.textContent=o.store.tagline||o.store.desc||o.store.address||"");const p=h("loader-logo-icon"),m=h("loader-logo-img"),b=o.store.logo&&o.store.logo!=="fa-store"?o.store.logo:"";b&&(p&&(p.style.display="none"),m&&(m.src=b,m.style.display="block")),vt(),window.injectJSONLD("seo-website",{"@context":"https://schema.org","@type":"WebSite",name:"Toko Putri",url:window.location.origin}),window.injectJSONLD("seo-localbusiness",{"@context":"https://schema.org","@type":"HardwareStore",name:"Toko Putri",image:ge(o.store.logo,"w300-rw"),description:"Solusi grosir dan e-commerce terpercaya untuk alat teknik, perkakas, dan perlengkapan pertukangan berkualitas.",url:window.location.origin,telephone:o.store.phone||"",address:{"@type":"PostalAddress",streetAddress:o.store.address||"",addressCountry:"ID"}});const w=new URLSearchParams(window.location.search).get("p");if(w&&o.products.find(f=>f.id==parseInt(w))){const f=new URLSearchParams(window.location.search);f.delete("p");let y=window.location.pathname;f.toString()&&(y+="?"+f.toString()),window.history.replaceState({},document.title,y),setTimeout(()=>openProductModal(parseInt(w)),600)}P()},U=async(e=null,t=null)=>{try{if(Array.isArray(e)){const r={lastUpdate:K.firestore.FieldValue.increment(1),updateType:t?.updateType||(e.length?"settings_change":"full"),changedKeys:e};t?.updatedProductIds&&Array.isArray(t.updatedProductIds)?r.updatedProductIds=t.updatedProductIds:r.updatedProductIds=K.firestore.FieldValue.delete(),e.forEach(s=>{s&&(r[s]=o[s])}),await v.collection("freshmart").doc("cms_data").set(r,{merge:!0})}else{const r={...o};delete r.products,delete r.auth,r.lastUpdate=K.firestore.FieldValue.increment(1),r.updateType="full",await v.collection("freshmart").doc("cms_data").set(r)}o.lastUpdate=(parseInt(ie("freshmart_last_update"))||o.lastUpdate||0)+1;const a={...o};delete a.products,delete a.auth,R("freshmart_cms_data",JSON.stringify(a)),R("freshmart_last_update",o.lastUpdate.toString()),R("freshmart_products",JSON.stringify(o.products))}catch{u("Tersimpan secara Lokal")}};let Ze=!1,ne=null,rt=typeof document<"u"?document.hidden:!1,ot=!1,ke=!1;typeof document<"u"&&document.addEventListener("visibilitychange",()=>{if(rt=document.hidden,!rt&&ot&&ne){ot=!1;const e=ne;ne=null,typeof window._doSyncCmsData=="function"&&window._doSyncCmsData(e)}});const lt=e=>{if(!e)return e;const t={...e};return t.id==null&&(t.id=0),typeof t.id=="string"&&!isNaN(t.id)&&(t.id=Number(t.id)),t.img&&(t.img=I(t.img)),t.variants&&t.variants.forEach(a=>{a.img&&(a.img=I(a.img))}),t},Ve=()=>{if(H("stat-products",o.products.filter(a=>a.isActive!=="false"&&a.isActive!==!1).length),Be(),Y(),typeof he=="function"?he():typeof window.rDyn=="function"&&window.rDyn(),typeof J=="function"?J():typeof window.rCat=="function"&&window.rCat(),document.getElementById("admin-list-container")&&typeof window.rAdmItms=="function"){const a=window.cTab||"products";["products","colors"].includes(a)&&window.rAdmItms(a)}const t=window.cProd;if(t){const a=o.products.find(r=>r.id===t.id);if(a&&(window.cProd=a,typeof window.rProdMod=="function")){const r=document.getElementById("product-modal");r&&!r.classList.contains("hidden")&&!r.classList.contains("opacity-0")&&window.rProdMod()}}},Ds=()=>{if(window.unsubCmsRealtime)return;const e=async t=>{if(!t.exists)return;const a=t.data(),r=a.lastUpdate||0,s=parseInt(ie("freshmart_last_update")||"0");if(rt){ne=t,ot=!0;return}if(!(r===s&&r>0&&ke&&o.products&&o.products.length>0)){Ze=!0;try{const i=a.updateType||"full",n=Array.isArray(a.updatedProductIds)?a.updatedProductIds.map(String):[];if(o.store={...z.store,...a.store||{}},a.categories&&(o.categories=a.categories),a.vouchers&&(o.vouchers=a.vouchers),a.banners&&(o.banners=a.banners),a.brands&&(o.brands=a.brands),a.banks&&(o.banks=a.banks),a.faqs&&(o.faqs=a.faqs),o.payment={...z.payment,...a.payment||{}},o.config={...z.config,...a.config||{}},o.taxSettings={...z.taxSettings,...a.taxSettings||{}},o.config&&o.config.gasUrl&&(window.GAS_UPLOAD_URL=o.config.gasUrl),o.banners&&o.banners.forEach(d=>{d.img&&(d.img=I(d.img)),d.videoUrl&&(d.videoUrl=nt(d.videoUrl))}),o.categories&&o.categories.forEach(d=>{d.img&&(d.img=I(d.img),d.img.includes("10b981")&&(d.img="https://placehold.co/150/f1f5f9/64748b?text=Cat"))}),o.brands&&o.brands.forEach(d=>{d.img&&(d.img=I(d.img),d.img.includes("10b981")&&(d.img="https://placehold.co/150/f1f5f9/64748b?text=Brand"))}),i==="product_delete"&&n.length>0)n.forEach(d=>{const p=o.products.findIndex(m=>(m.id!=null?m.id.toString():"")===d);p>-1&&o.products.splice(p,1)}),R("freshmart_products",JSON.stringify(o.products)),ke=!0,Ve();else if(!ke&&(!o.products||o.products.length===0)){const d=await v.collection("freshmart").doc("cms_data").collection("products").get();o.products=d.docs.map(p=>lt(p.data())).sort((p,m)=>(m.id||0)-(p.id||0)),R("freshmart_products",JSON.stringify(o.products)),ke=!0,Ve()}else ke=!0;if(R("freshmart_cms_data",JSON.stringify(a)),R("freshmart_last_update",r.toString()),o.store&&(Pe(o.store.uiTheme,o.store.themeColor),Ae(o.store.bgStyle,o.store.bgCustomUrl)),vt(),H("stat-products",o.products.filter(d=>d.isActive!=="false"&&d.isActive!==!1).length),typeof he=="function"?he():typeof window.rDyn=="function"&&window.rDyn(),typeof J=="function"?J():typeof window.rCat=="function"&&window.rCat(),Be(),Y(),(window.isAdm||window.__localIsAdm)&&typeof window.rAdmItms=="function"){const d=window.cTab||"products";["categories","vouchers","banners","brands","banks","colors"].includes(d)&&window.rAdmItms(d)}}catch(i){console.error("Gagal sinkron realtime settings:",i)}finally{if(Ze=!1,ne){const i=ne;ne=null,e(i)}}}};window._doSyncCmsData=e,window.unsubCmsRealtime=v.collection("freshmart").doc("cms_data").onSnapshot(async t=>{if(Ze){ne=t;return}await e(t)},t=>{console.warn("Realtime listener error:",t)})},Ms=()=>{if(window.unsubProductsRealtime)return;let e=!0;window.unsubProductsRealtime=v.collection("freshmart").doc("cms_data").collection("products").onSnapshot(t=>{if(e){e=!1,ke=!0,o.products=t.docs.map(r=>lt(r.data())).sort((r,s)=>(s.id||0)-(r.id||0)),R("freshmart_products",JSON.stringify(o.products)),Ve();return}let a=!1;t.docChanges().forEach(r=>{const s=lt(r.doc.data()),i=r.doc.id;if(r.type==="added"||r.type==="modified"){const n=o.products.findIndex(l=>(l.id!=null?l.id.toString():"")===i);n>-1?o.products[n]=s:(o.products.unshift(s),o.products.sort((l,d)=>(d.id||0)-(l.id||0))),a=!0}else if(r.type==="removed"){const n=o.products.findIndex(l=>(l.id!=null?l.id.toString():"")===i);n>-1&&(o.products.splice(n,1),a=!0)}}),a&&(R("freshmart_products",JSON.stringify(o.products)),Ve())},t=>{console.warn("Realtime products listener error:",t)})},Ls=()=>{if(!window.unsubRewardsRealtime){if(!o.rewards||!o.rewards.length)try{const e=JSON.parse(ie("freshmart_rewards")||"null");e&&Array.isArray(e)&&(o.rewards=e,o.rewards.forEach(t=>{t.img&&(t.img=I(t.img))}))}catch{}window.unsubRewardsRealtime=v.collection("freshmart").doc("cms_data").collection("rewards").onSnapshot(e=>{o.rewards=e.docs.map(a=>a.data()).sort((a,r)=>(r.id||0)-(a.id||0)),o.rewards.forEach(a=>{a.img&&(a.img=I(a.img))}),R("freshmart_rewards",JSON.stringify(o.rewards)),window.isAdm&&window.cTab==="rewards"&&typeof window.rAdmItms=="function"&&window.rAdmItms("rewards"),typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog();const t=document.getElementById("member-modal");t&&t.style.display==="flex"&&currentMember&&typeof window.rMemberModalBody=="function"&&window.rMemberModalBody()},e=>{console.warn("Realtime hadiah gagal:",e)})}},vt=e=>{try{const t=o.store?.name||"Toko Putri",a=o.store?.logo||"",r=/^(https?:|data:)/i.test(a)?a:"https://placehold.co/192x192?text=Logo",s=document.documentElement.classList.contains("dark")?"#0b1120":"#ffffff",i=e||o.store?.themeColor||localStorage.getItem("freshmart_theme_color")||"#10b981";let n=document.getElementById("dynamic-manifest");n||(n=document.createElement("link"),n.id="dynamic-manifest",n.rel="manifest",document.head.appendChild(n));let l=document.getElementById("dynamic-apple-icon");l||(l=document.createElement("link"),l.id="dynamic-apple-icon",l.rel="apple-touch-icon",document.head.appendChild(l)),l.href=r;let d=document.getElementById("dynamic-favicon");d||(d=document.createElement("link"),d.id="dynamic-favicon",d.rel="icon",document.head.appendChild(d)),d.href=r;const p={id:window.location.origin+"/",name:t,short_name:t,description:o.store?.slogan||t+" - Belanja online lebih mudah",start_url:window.location.origin+"/",scope:window.location.origin+"/",lang:"id",dir:"ltr",display:"standalone",display_override:["standalone","minimal-ui"],orientation:"portrait",categories:["shopping","business"],background_color:s,theme_color:i,icons:[{src:r,sizes:"192x192",type:"image/png",purpose:"any"},{src:r,sizes:"512x512",type:"image/png",purpose:"any"}]};if(n.dataset.blobUrl)try{URL.revokeObjectURL(n.dataset.blobUrl)}catch{}const m=URL.createObjectURL(new Blob([JSON.stringify(p)],{type:"application/manifest+json"}));n.dataset.blobUrl=m,n.href=m}catch(t){console.error("PWA Manifest Update Error: ",t)}};window.loadAppData=js;window.saveApp=U;window.attachRealtimeStockSync=Ds;window.attachRealtimeProductsSync=Ms;window.attachRewardsRealtime=Ls;window.updatePwaManifest=vt;function _s(e){if(!e)return"";const t=e.match(/\/d\/([a-zA-Z0-9_-]+)/);return t?`https://drive.google.com/file/d/${t[1]}/preview`:e}const Bs=e=>window.pushModalHistory?.(e);window.oAAdd=()=>{window.oAEd(kt||window.cTab||"products",null)};window.oAEd=(e,t)=>{Je(e),typeof window.setCTab=="function"&&window.setCTab(e),window.cTab=e,Zt(t),typeof window.setEId=="function"&&window.setEId(t),window.eId=t;let a=t?(o[e]||[]).find(p=>p.id===t):null;H("admin-modal-title",t?"Edit Data":"Tambah Data");let r=ct[e]||[],s="";e==="products"&&(Qe(a&&a.variants?JSON.parse(JSON.stringify(a.variants)):[]),yt(a&&a.wholesale?JSON.parse(JSON.stringify(a.wholesale)):[]),$t(a&&a.specTable?JSON.parse(JSON.stringify(a.specTable)):[]));const i=["textarea","richtext","variants_builder","wholesale_builder","spec_table_builder"],n=["img","desc","name","isActive","tag","poTime","video"],l=p=>i.includes(p.type)||n.includes(p.key);r.forEach(p=>{let m=a?p.type==="number"&&a[p.key]!==void 0?a[p.key]:a[p.key]||"":"";const b=l(p)?"lg:col-span-2":"";s+=`<div class="flex flex-col gap-1.5 ${b}"><label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">${p.label}</label>`,p.type==="textarea"?s+=`<textarea autocomplete='off' id="af-${p.key}" class="admin-input resize-none shadow-sm bg-slate-50 dark:bg-slate-900" rows="3">${c(m)}</textarea>`:p.type==="select"?(s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();">`,p.options.forEach(g=>{s+=`<option value="${g.val}" ${m==g.val||m==="true"&&g.val==="true"||m==="false"&&g.val==="false"?"selected":""} class="font-bold">${g.text}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>'):p.type==="dynamic_select_category"?(s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Pilih Kategori</option>`,o.categories.forEach(g=>{s+=`<option value="${c(g.name)}" ${m===g.name?"selected":""} class="font-bold">${c(g.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>'):p.type==="dynamic_select_brand"?(s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Tanpa Merek</option>`,(o.brands||[]).forEach(g=>{s+=`<option value="${c(g.name)}" ${m===g.name?"selected":""} class="font-bold">${c(g.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>'):p.type==="dynamic_select_products"?(s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold primary-text">-- Semua Produk (Tanpa Batasan) --</option>`,(o.products||[]).forEach(g=>{s+=`<option value="${g.id}" ${m==g.id?"selected":""} class="font-bold">${c(g.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>'):p.type==="variants_builder"?s+='<div id="variants-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 lg:p-8 lg:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>':p.type==="wholesale_builder"?s+='<div id="wholesale-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 lg:p-8 lg:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>':p.type==="spec_table_builder"?s+='<div id="spec-table-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>':p.key==="sku"?s+=`<div class="relative flex items-center"><input autocomplete='off' type="${p.type}" id="af-${p.key}" value="${c(m)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 !pr-12" placeholder="Scan atau ketik..." ><button type="button" onclick="openCameraScanner('af-${p.key}')" class="absolute right-2 w-9 h-9 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-[var(--color-primary)] rounded-xl transition-all" title="Scan Barcode via HP"><i class="fa-solid fa-qrcode text-lg"></i></button></div>`:p.key==="img"?s+=`<div class="flex gap-3"><input autocomplete='off' type="text" id="af-${p.key}" value="${c(m)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="URL Gambar" ><label class="primary-bg-soft border primary-border text-[var(--color-primary)] font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-cloud-arrow-up sm:mr-2"></i><span class="hidden sm:inline">Upload</span><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'af-${p.key}')" ></label><label class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'af-${p.key}')" ></label></div>`:p.key==="videoUrl"?s+=`<div class="flex flex-col gap-2">
                <div class="flex gap-3">
                    <input autocomplete='off' type="text" id="af-${p.key}" value="${c(m)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="Paste URL Drive atau upload video di bawah">
                    <label class="bg-violet-50 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-400 font-bold rounded-xl px-4 flex items-center justify-center cursor-pointer hover:bg-violet-100 transition-all shrink-0 active:scale-95 shadow-sm gap-2" title="Upload Video ke Google Drive">
                        <i class="fa-solid fa-film"></i><span class="hidden sm:inline text-[11px]">Upload Video</span>
                        <input type="file" accept="video/mp4,video/webm,video/quicktime,video/x-msvideo,video/3gpp" class="hidden" onchange="handleVideoUpload(this, 'af-${p.key}')">
                    </label>
                </div>
                <p class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-info text-violet-400"></i><b>Tips Autoplay:</b> Untuk video 100% otomatis play &amp; loop tanpa klik, gunakan link <b>YouTube / Shorts</b> atau <b>Direct MP4</b>. Upload Drive/HP juga didukung.</p>
                ${m?`<div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-black aspect-video w-full max-w-xs"><iframe src="${c(_s(m))}" class="w-full h-full" frameborder="0" allow="autoplay; fullscreen" loading="lazy"></iframe></div>`:""}
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
>`,s+="</div>"}),s=`<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 items-start">${s}</div>`,S("admin-modal-form",s),e==="products"&&(window.rVarsB?.(),window.rWholB?.(),window.rSpecB?.());const d=h("admin-modal");d&&d.classList.contains("hidden")&&Bs("admin"),F("admin-modal"),setTimeout(()=>{h("admin-modal").classList.remove("opacity-0"),h("admin-modal-box").classList.remove("scale-95")},10)};window.submitAdminForm=async()=>{if(ve)return;D(!0);const e=kt||window.cTab||"products";let t={},a=ct[e]||[];for(let s of a)if(s.type==="variants_builder")t.variants=W.filter(i=>i.name.trim()!=="");else if(s.type==="wholesale_builder")t.wholesale=ue.filter(i=>parseFloat(i.minQty)>.01&&i.price>0);else if(s.type==="spec_table_builder")t.specTable=ee.filter(i=>i.key.trim()!=="");else{let i="";if(s.type==="richtext"){const n=h(`af-${s.key}-editor`);i=n?n.innerHTML:""}else i=$(`af-${s.key}`);if(typeof i=="string"){if(i.startsWith("data:image/")&&i.length>3e5)return D(!1),u("Gambar Base64 terlalu besar! Upload file.");s.key==="img"&&(i=I(i))}t[s.key]=s.type==="number"?parseFloat(i)||0:i}if(!t.name&&!t.title&&!t.bankName&&!t.code)return D(!1),u("Judul/Nama/Kode wajib diisi!");if(e==="products"&&!t.sku&&(t.sku="SKU"+Date.now().toString().slice(-6)),e==="customers"){const s=window.normalizeWA?window.normalizeWA(t.phone):(t.phone||"").replace(/\D/g,"").replace(/^0/,"62");if(!s||s.length<10)return D(!1),u("Nomor WhatsApp tidak valid!");t.phone=s,t.points=parseFloat(t.points)||0,t.id=parseInt(s,10)}let r=null;if(e==="customers")if(o.customers||(o.customers=[]),X){r=X;let s=o.customers.findIndex(i=>i.id===X);s>-1?o.customers[s]=t:o.customers.unshift(t)}else o.customers.unshift(t);else if(e==="rewards")if(o.rewards||(o.rewards=[]),X){t.id=X;let s=o.rewards.findIndex(i=>i.id===X);s>-1&&(o.rewards[s]=t)}else t.id=Date.now(),o.rewards.unshift(t);else if(X){t.id=X,o[e]||(o[e]=[]);let s=o[e].findIndex(i=>i.id===X);if(e==="products"&&s>-1){const i=o[e][s];t.totalSold=i.totalSold||0,t.variants&&t.variants.length&&i.variants&&t.variants.forEach(n=>{const l=i.variants.find(d=>d.name===n.name);l&&l.totalSold&&(n.totalSold=l.totalSold)})}s>-1&&(o[e][s]=t)}else t.id=Date.now(),o[e]||(o[e]=[]),o[e].unshift(t);A("Menyimpan...");try{const s=typeof v<"u"&&v?v:window.db,i=typeof U=="function"?U:window.saveApp||(async()=>{});if(!s)throw new Error("Database Firebase belum terhubung");if(e==="products")await s.collection("freshmart").doc("cms_data").collection("products").doc(t.id.toString()).set(t),await i([],{updateType:"product_single",updatedProductIds:[t.id.toString()]});else if(e==="customers"){const n=s.collection("freshmart").doc("cms_data").collection("customers");r!==null&&r!==t.id&&await n.doc(r.toString()).delete().catch(()=>{}),await n.doc(t.phone).set(t,{merge:!0})}else e==="rewards"?await s.collection("freshmart").doc("cms_data").collection("rewards").doc(t.id.toString()).set(t):await i([e]);window.closeAdminModal?.(),window.rAdmItms?.(e),u("Tersimpan!")}catch(s){console.error("Gagal simpan admin data:",s),u("Gagal menyimpan: "+(s.message||""))}finally{D(!1),P()}};window.oADel=async(e,t)=>{window.showConfirm?.("Hapus Data","Data yang dihapus tidak bisa dikembalikan lagi.",async()=>{if(ve)return;D(!0);const a=typeof v<"u"&&v?v:window.db,r=typeof U=="function"?U:window.saveApp||(async()=>{}),s=o[e]&&o[e].find(i=>i.id===t);o[e]=o[e].filter(i=>i.id!==t),A("Menghapus...");try{if(!a)throw new Error("Database Firebase belum terhubung");if(e==="products")await a.collection("freshmart").doc("cms_data").collection("products").doc(t.toString()).delete(),await r([],{updateType:"product_delete",updatedProductIds:[t.toString()]});else if(e==="customers"){const i=s?s.phone:t.toString();await a.collection("freshmart").doc("cms_data").collection("customers").doc(i).delete()}else e==="rewards"?await a.collection("freshmart").doc("cms_data").collection("rewards").doc(t.toString()).delete():await r([e]);window.rAdmItms?.(e),u("Berhasil Dihapus!")}catch(i){u("Gagal menghapus: "+(i.message||""))}finally{D(!1),P()}})};window.duplicateProduct=async e=>{window.showConfirm?.("Duplikat Produk","Menyalin data produk ini ke item baru?",async()=>{if(ve)return;D(!0);const t=typeof v<"u"&&v?v:window.db,a=typeof U=="function"?U:window.saveApp||(async()=>{}),r=o.products.find(i=>i.id===e);if(!r){D(!1);return}let s=JSON.parse(JSON.stringify(r));s.id=Date.now()+Math.floor(Math.random()*1e3),s.name=s.name+" COPY",s.sku="",s.totalSold=0,s.variants&&s.variants.length>0&&(s.variants=s.variants.map(i=>(i.sku="",i.totalSold=0,i))),o.products.unshift(s),A("Menyalin...");try{if(!t)throw new Error("Database Firebase belum terhubung");await t.collection("freshmart").doc("cms_data").collection("products").doc(s.id.toString()).set(s),await a([],{updateType:"product_single",updatedProductIds:[s.id.toString()]}),window.rAdmItms?.("products"),u("Produk berhasil disalin!")}catch(i){u("Gagal menyalin: "+(i.message||""))}finally{D(!1),P()}},"Ya, Salin",!1)};window.rSpecB=()=>{const e=document.getElementById("spec-table-builder-container");if(!e)return;let t="";ee.length>0?t+=`<div class="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm mb-4">
            <table class="w-full text-sm">
                <thead>
                    <tr class="bg-slate-100 dark:bg-slate-800">
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest w-5/12">Nama Spesifikasi</th>
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Nilai / Keterangan</th>
                        <th class="py-2.5 px-2 w-10"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                    ${ee.map((a,r)=>`
                    <tr class="bg-white dark:bg-slate-900 group">
                        <td class="py-2 px-3"><input autocomplete='off' placeholder="Cth: Berat" class="w-full bg-transparent text-[13px] font-semibold text-slate-700 dark:text-slate-200 focus:outline-none placeholder:text-slate-300" value="${c(a.key)}" oninput="uSpec(${r},'key',this.value)"></td>
                        <td class="py-2 px-3"><input autocomplete='off' placeholder="Cth: 2.5 kg" class="w-full bg-transparent text-[13px] text-slate-600 dark:text-slate-300 focus:outline-none placeholder:text-slate-300" value="${c(a.val)}" oninput="uSpec(${r},'val',this.value)"></td>
                        <td class="py-2 px-2 text-center"><button type="button" onclick="rmSpec(${r})" class="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 text-rose-400 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-60 group-hover:opacity-100 active:scale-95" title="Hapus Baris"><i class="fa-solid fa-trash text-[10px]"></i></button></td>
                    </tr>`).join("")}
                </tbody>
            </table>
        </div>`:t+='<div class="text-center py-6 text-slate-400 dark:text-slate-600 text-[12px] font-medium"><i class="fa-solid fa-table-cells-large text-2xl mb-2 block opacity-30"></i>Belum ada spesifikasi. Klik tombol di bawah untuk menambahkan.</div>',t+='<button type="button" onclick="addSpec()" class="w-full py-4 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 font-bold rounded-[1.5rem] text-sm border-2 border-cyan-200 dark:border-cyan-800 border-dashed hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-plus-circle"></i> Tambah Baris Spesifikasi</button>',e.innerHTML=t};window.addSpec=()=>{ee.push({key:"",val:""}),$t(ee),window.rSpecB()};window.rmSpec=e=>{ee.splice(e,1),$t(ee),window.rSpecB()};window.uSpec=(e,t,a)=>{ee[e]&&(ee[e][t]=a)};window.rVarsB=()=>{const e=document.getElementById("af-category"),t=e?/\bcat\b/i.test(e.value):!1;let a=`<div class="space-y-5 mb-5">${W.map((r,s)=>{let i=r.isActive!==!1&&r.isActive!=="false";return`
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 md:p-7 lg:p-8 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative transition-all duration-300 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 hover:shadow-md">
            <div class="flex items-center justify-between mb-5 pb-4 border-b border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-xl primary-bg text-[11px] font-bold flex items-center justify-center shadow-sm">${s+1}</div>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest">${r.name||"Varian Baru"}</span>
                </div>
                <div class="flex items-center gap-2">
                    <button type="button" onclick="exportVariantToColorDB(${s})" class="w-8 h-8 rounded-xl bg-pink-50 border border-pink-200 text-pink-500 hover:bg-pink-500 hover:text-white dark:bg-pink-900/30 dark:border-pink-800 transition-all flex items-center justify-center shadow-sm active:scale-95" title="Simpan ke Database Warna"><i class="fa-solid fa-database text-xs"></i></button>
                    <button type="button" onclick="rmVar(${s})" class="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center shadow-sm active:scale-95" title="Hapus Varian"><i class="fa-solid fa-trash text-xs"></i></button>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Varian (Warna/Ukuran)</label>
                    <input autocomplete='off' placeholder="Cth: Hijau Tosca" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${c(r.name)}" onchange="uVar(${s},'name',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Satuan / Unit</label>
                    <input autocomplete='off' placeholder="Cth: Pcs / Liter" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${c(r.unit||"")}" onchange="uVar(${s},'unit',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Promo / Jual (Rp)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.price}" onchange="uVar(${s},'price',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Coret (Opsional)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.priceNormal||""}" onchange="uVar(${s},'priceNormal',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Kode Warna (Khusus Cat)</label>
                    <div class="flex gap-3 items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2 shadow-sm">
                        <div class="relative shrink-0">
                            <input type="color" class="w-11 h-11 rounded-xl cursor-pointer border-2 border-slate-200 dark:border-slate-600 p-0.5 bg-white dark:bg-slate-700 shadow-inner" value="${r.colorCode||"#ffffff"}"
                                onchange="uVar(${s},'colorCode',this.value); document.getElementById('var-hex-${s}').value = this.value;" title="Klik untuk pilih warna">
                            <i class="fa-solid fa-eye-dropper absolute -bottom-1 -right-1 text-[9px] bg-white dark:bg-slate-700 text-slate-400 w-4 h-4 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-600 pointer-events-none"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-[9px] font-bold text-slate-400 mb-0.5 uppercase tracking-widest">Kode HEX</p>
                            <input autocomplete='off' id="var-hex-${s}" placeholder="#RRGGBB (opsional)" class="w-full bg-transparent text-sm font-mono font-bold focus:outline-none dark:text-white uppercase" value="${c(r.colorCode||"")}" onchange="uVar(${s},'colorCode',this.value)">
                        </div>
                        ${r.colorCode?`<div class="w-6 h-6 rounded-full border-2 border-white shadow-md shrink-0" style="background:${c(r.colorCode)}"></div>`:""}
                    </div>
                </div>
                ${t?"":`
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gambar Khusus Varian</label>
                    <div class="flex gap-2.5 items-center">
                        ${r.img?`<img src="${c(r.img)}" class="w-11 h-11 rounded-xl object-cover border-2 border-slate-200 dark:border-slate-600 shrink-0 shadow-sm" onerror="this.style.display='none'" loading="lazy">`:""}
                        <input autocomplete='off' id="var-img-${s}" placeholder="URL Gambar Varian" class="admin-input !text-sm flex-1 bg-white dark:bg-slate-800 shadow-sm" value="${c(r.img||"")}" onchange="uVar(${s},'img',fixD(this.value))">
                        <label class="primary-icon-btn border rounded-xl w-11 h-11 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-upload text-sm"></i><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'var-img-${s}')"></label>
                        <label class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rounded-xl w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera text-sm"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'var-img-${s}')"></label>
                    </div>
                </div>
                `}
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">SKU / Barcode</label>
                    <div class="relative h-[48px]">
                        <input autocomplete='off' id="var-sku-${s}" placeholder="Auto (Bisa Kosong)" class="admin-input !text-sm h-full bg-white dark:bg-slate-800 shadow-sm !pr-12" value="${c(r.sku||"")}" onchange="uVar(${s},'sku',this.value)">
                        <button type="button" onclick="openCameraScanner('var-sku-${s}')" class="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all"><i class="fa-solid fa-qrcode text-lg"></i></button>
                    </div>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Status Stok Varian</label>
                    <button type="button" onclick="tVars[${s}].isActive = ${!i}; rVarsB();" class="w-full py-3.5 px-4 rounded-xl text-[13px] font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2.5 border-2 active:scale-95 ${i?"primary-bg border-[var(--color-primary-dark)] shadow-md":"bg-slate-100 text-rose-500 border-rose-200 hover:bg-rose-50 dark:bg-slate-800 dark:border-rose-800"}">
                        ${i?'<i class="fa-solid fa-circle-check text-base"></i> STOK TERSEDIA':'<i class="fa-solid fa-ban text-base"></i> STOK HABIS'}
                    </button>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Modal / HPP (Rp)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.hpp||0}" onchange="uVar(${s},'hpp',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Stok Varian (Qty)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.stock!==void 0?r.stock:""}" onchange="uVar(${s},'stock',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-violet-500 mb-2 uppercase tracking-widest"><i class="fa-solid fa-star mr-1"></i>Poin Member (per unit terjual)</label>
                    <input autocomplete='off' placeholder="0" type="number" min="0" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.poin||0}" onchange="uVar(${s},'poin',this.value)">
                </div>
            </div>
        </div>`}).join("")}</div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <button type="button" onclick="openColorImportModal()" class="py-3 text-pink-600 font-bold rounded-2xl text-sm border-2 border-pink-200 bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/30 dark:border-pink-800 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-swatchbook"></i> Impor dari DB Warna</button>
        <button type="button" onclick="exportAllVariantsToColorDB()" class="py-3 text-violet-600 font-bold rounded-2xl text-sm border-2 border-violet-200 bg-violet-50 hover:bg-violet-100 dark:bg-violet-900/30 dark:border-violet-800 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-upload"></i> Ekspor Semua ke DB</button>
        <button type="button" onclick="addVar()" class="py-3 primary-bg font-bold rounded-2xl text-sm border border-[rgba(var(--color-primary-rgb),0.3)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-glow"><i class="fa-solid fa-plus-circle text-base"></i> Tambah Varian Baru</button>
    </div>`;S("variants-builder-container",a)};window.addVar=()=>{W.push({name:"",price:0,priceNormal:0,hpp:0,stock:0,sku:"",img:"",unit:"",colorCode:"",poin:0,isActive:!0}),Qe(W),window.rVarsB()};window.rmVar=e=>{W.splice(e,1),Qe(W),window.rVarsB()};window.uVar=(e,t,a)=>{W[e][t]=t==="price"||t==="priceNormal"||t==="hpp"||t==="stock"||t==="poin"?parseFloat(a)||0:t==="img"?I(a):a};window._openColorFloatModal=e=>{_closeColorFloatModal();const t=document.createElement("div");t.id="color-float-modal",t.className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/80 p-4 opacity-0 transition-opacity duration-300",t.onclick=r=>{r.target===t&&_closeColorFloatModal()};const a=document.createElement("div");a.id="color-float-box",a.className="relative w-full max-w-sm scale-95 transform rounded-[2rem] border border-slate-200 bg-white shadow-2xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-800 overflow-y-auto max-h-[90vh]",a.innerHTML=e,t.appendChild(a),document.body.appendChild(t),requestAnimationFrame(()=>{t.classList.remove("opacity-0"),a.classList.remove("scale-95")})};window._closeColorFloatModal=()=>{const e=document.getElementById("color-float-modal");if(!e)return;const t=document.getElementById("color-float-box");e.classList.add("opacity-0"),t&&t.classList.add("scale-95"),setTimeout(()=>{e.parentNode&&e.remove()},300)};window.openColorImportModal=()=>{let e=o.colors||[];if(!e.length){u("Database Warna masih kosong!");return}let t={};e.forEach(r=>{let s=r.catalog||"Tanpa Katalog";t[s]||(t[s]=[]),t[s].push(r)});let a=`<div class="p-6">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2"><i class="fa-solid fa-swatchbook text-pink-500"></i> Pilih Warna</h3>
            <button type="button" onclick="_closeColorFloatModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 flex items-center justify-center transition-all"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="space-y-6 max-h-[60vh] overflow-y-auto pr-2">`;for(let r in t)a+=`<div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">${c(r)}</h4>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                ${t[r].map(s=>`
                    <button type="button" onclick="importColorToVariant('${c(s.name)}', '${c(s.hex||"")}')" class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-pink-300 dark:hover:border-pink-600 hover:-translate-y-1 hover:shadow-md transition-all text-left bg-white dark:bg-slate-800">
                        <div class="w-8 h-8 rounded-full border-2 border-slate-100 dark:border-slate-600 shadow-sm shrink-0" style="background-color: ${c(s.hex||"transparent")}"></div>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2">${c(s.name)}</span>
                    </button>`).join("")}
            </div>
        </div>`;a+="</div></div>",_openColorFloatModal(a)};window.importColorToVariant=(e,t)=>{W.push({name:e,price:0,priceNormal:0,hpp:0,stock:0,sku:"",img:"",unit:"",colorCode:t||"",poin:0,isActive:!0}),Qe(W),window.rVarsB(),_closeColorFloatModal(),u("Warna ditambahkan!")};window.exportVariantToColorDB=async e=>{const t=W[e];if(!t||!t.name.trim()){u("Nama varian kosong!");return}if((o.colors||[]).find(i=>i.name.toLowerCase()===t.name.trim().toLowerCase())){u(`"${t.name}" sudah ada di Database Warna.`);return}let s=[...new Set((o.colors||[]).map(i=>i.catalog).filter(Boolean))].map(i=>`<option value="${c(i)}">${c(i)}</option>`).join("");_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"><i class="fa-solid fa-database text-pink-500"></i> Simpan ke Database Warna</h3>
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
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 text-sm hover:bg-slate-50 transition-all">Batal</button>
                <button onclick="confirmExportVariantToColorDB()" class="flex-1 py-3 rounded-xl bg-pink-500 text-white font-bold text-sm hover:bg-pink-600 transition-all active:scale-95"><i class="fa-solid fa-floppy-disk mr-2"></i>Simpan</button>
            </div>
        </div>`)};window.confirmExportVariantToColorDB=async()=>{const e=(document.getElementById("exp-name")?.value||"").trim(),t=(document.getElementById("exp-hex")?.value||"").trim(),a=(document.getElementById("exp-catalog")?.value||"").trim();if(!e){u("Nama warna wajib diisi!");return}const r={id:Date.now(),name:e,hex:t,catalog:a};o.colors||(o.colors=[]),o.colors.push(r),_closeColorFloatModal(),A("Menyimpan ke Database Warna...");try{await U(["colors"]),u(`"${e}" berhasil disimpan ke Database Warna! 🎨`)}catch{u("Gagal menyimpan!")}finally{P()}};window.exportAllVariantsToColorDB=async()=>{const e=W.filter(r=>r.name.trim());if(!e.length){u("Tidak ada varian untuk diekspor!");return}o.colors||(o.colors=[]);let a=[...new Set(o.colors.map(r=>r.catalog).filter(Boolean))].map(r=>`<option value="${c(r)}">${c(r)}</option>`).join("");_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-upload text-violet-500"></i> Ekspor Semua Varian</h3>
            <p class="text-xs text-slate-500 mb-5">${e.length} varian akan diekspor ke Database Warna. Nama yang sudah ada di database akan dilewati.</p>
            <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek (berlaku untuk semua)</label>
                <input id="expall-catalog" list="expall-catalog-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll">
                <datalist id="expall-catalog-list">${a}</datalist>
            </div>
            <div class="flex gap-3 mt-6">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 text-sm hover:bg-slate-50 transition-all">Batal</button>
                <button onclick="confirmExportAllVariants()" class="flex-1 py-3 rounded-xl bg-violet-500 text-white font-bold text-sm hover:bg-violet-600 transition-all active:scale-95"><i class="fa-solid fa-upload mr-2"></i>Ekspor</button>
            </div>
        </div>`)};window.confirmExportAllVariants=async()=>{const e=(document.getElementById("expall-catalog")?.value||"").trim(),t=W.filter(s=>s.name.trim());o.colors||(o.colors=[]);const a=new Set(o.colors.map(s=>s.name.toLowerCase()));let r=0;if(t.forEach(s=>{a.has(s.name.trim().toLowerCase())||(o.colors.push({id:Date.now()+r,name:s.name.trim(),hex:s.colorCode||"",catalog:e}),a.add(s.name.trim().toLowerCase()),r++)}),_closeColorFloatModal(),!r){u("Semua varian sudah ada di Database Warna!");return}A("Menyimpan...");try{await U(["colors"]),u(`${r} warna berhasil diekspor ke Database Warna! 🎨`)}catch{u("Gagal menyimpan!")}finally{P()}};window.openImportFromProductsModal=async()=>{const e=[];if((o.products||[]).forEach(i=>{(i.variants||[]).forEach(n=>{n.name&&n.name.trim()&&e.push({varName:n.name.trim(),hex:n.colorCode||"",prodName:i.name||""})})}),!e.length){u("Tidak ada varian produk yang ditemukan!");return}const t=new Set((o.colors||[]).map(i=>i.name.toLowerCase())),a=e.filter(i=>!t.has(i.varName.toLowerCase()));if(!a.length){u("Semua varian produk sudah ada di Database Warna!");return}let s=[...new Set((o.colors||[]).map(i=>i.catalog).filter(Boolean))].map(i=>`<option value="${c(i)}">${c(i)}</option>`).join("");window._pendingImportVariants=a,_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-box-archive text-[var(--color-primary)]"></i> Impor dari Semua Produk</h3>
            <p class="text-xs text-slate-500 mb-4">${a.length} nama varian baru ditemukan (yang sudah ada di database dilewati).</p>
            <div class="max-h-48 overflow-y-auto mb-4 space-y-2">
                ${a.map((i,n)=>`
                    <label class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-[var(--color-primary)] transition-all">
                        <input type="checkbox" id="imp-chk-${n}" checked class="w-4 h-4 rounded accent-[var(--color-primary)]">
                        <div class="w-5 h-5 rounded-full border border-slate-200 dark:border-slate-600 shrink-0" style="background-color:${c(i.hex||"transparent")}"></div>
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">${c(i.varName)}</p>
                            <p class="text-[10px] text-slate-400 truncate">dari: ${c(i.prodName)}</p>
                        </div>
                    </label>`).join("")}
            </div>
            <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek</label>
                <input id="impprod-catalog" list="impprod-cat-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll (opsional)">
                <datalist id="impprod-cat-list">${s}</datalist>
            </div>
            <div class="flex gap-3 mt-5">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 text-sm hover:bg-slate-50 transition-all">Batal</button>
                <button onclick="confirmImportFromProducts()" class="flex-1 py-3 rounded-xl primary-bg font-bold text-sm transition-all active:scale-95"><i class="fa-solid fa-download mr-2"></i>Impor</button>
            </div>
        </div>`)};window.confirmImportFromProducts=async()=>{const e=window._pendingImportVariants||[];window._pendingImportVariants=null;const t=(document.getElementById("impprod-catalog")?.value||"").trim();o.colors||(o.colors=[]);const a=new Set(o.colors.map(s=>s.name.toLowerCase()));let r=0;if(e.forEach((s,i)=>{const n=document.getElementById(`imp-chk-${i}`);n&&n.checked&&!a.has(s.varName.toLowerCase())&&(o.colors.push({id:Date.now()+r,name:s.varName,hex:s.hex||"",catalog:t}),a.add(s.varName.toLowerCase()),r++)}),_closeColorFloatModal(),!r){u("Tidak ada warna baru yang ditambahkan!");return}A("Menyimpan...");try{await U(["colors"]),u(`${r} warna berhasil diimpor ke Database Warna! 🎨`),window.cTab==="colors"&&window.rAdmItms?.("colors")}catch{u("Gagal menyimpan!")}finally{P()}};const Es=e=>window.pushModalHistory?.(e),Yt=(e,t,a)=>window.requestCloseModal?.(e,t,a);window.openRestockModal=e=>{const t=o.products.find(i=>i.id===e);if(!t)return;const a=t.variants&&t.variants.length>0;let r="";a?r=t.variants.map((i,n)=>`
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-3 min-w-0 flex-1">
                    ${i.colorCode?`<span class="w-5 h-5 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${c(i.colorCode)}"></span>`:""}
                    <div class="min-w-0 flex-1">
                        <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${c(i.name)}</p>
                        <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(i.stock)||0}</span></p>
                    </div>
                </div>
                <input type="number" id="restock-var-${n}" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`).join(""):r=`
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div class="min-w-0 flex-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${c(t.name)}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(t.stock)||0}</span></p>
                </div>
                <input type="number" id="restock-main" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`;let s=document.getElementById("restock-modal");s||(s=document.createElement("div"),s.id="restock-modal",s.className="fixed inset-0 z-[110] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=i=>{i.target===s&&closeRestockModal()},document.body.appendChild(s)),s.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-boxes-stacked text-indigo-500"></i> Restock Produk</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${c(t.name)}</p>
                </div>
                <button onclick="closeRestockModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3">
                <p class="text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 p-3 rounded-xl"><i class="fa-solid fa-circle-info text-indigo-500 mr-1.5"></i> Masukkan jumlah <b>penambahan</b> stok. Stok lama + nilai ini = stok baru.</p>
                ${r}
            </div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processRestock(${e})" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2"><i class="fa-solid fa-save"></i> Simpan Restock</button>
            </div>
        </div>`,s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),Es("restock")};window.closeRestockModal=(e=!1)=>{Yt("restock",e,()=>{const t=document.getElementById("restock-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250))})};window.processRestock=async e=>{if(ve)return;D(!0);const t=o.products.findIndex(n=>n.id===e);if(t<0){D(!1);return}const a=o.products[t],r=a.variants&&a.variants.length>0;let s=JSON.parse(JSON.stringify(a)),i=0;if(r)s.variants=s.variants.map((l,d)=>{const p=parseFloat(document.getElementById("restock-var-"+d)?.value)||0;return p>0&&(l.stock=(parseFloat(l.stock)||0)+p,i+=p,l.stock>0&&(l.isActive===!1||l.isActive==="false")&&(l.isActive=!0)),l}),s.variants.some(l=>(parseFloat(l.stock)||0)>0&&l.isActive!==!1&&l.isActive!=="false")&&(s.isActive===!1||s.isActive==="false")&&(s.isActive="true");else{const n=parseFloat(document.getElementById("restock-main")?.value)||0;n>0&&(s.stock=(parseFloat(s.stock)||0)+n,i+=n,s.stock>0&&(s.isActive===!1||s.isActive==="false")&&(s.isActive="true"))}if(i<=0)return D(!1),u("Masukkan jumlah restock terlebih dahulu!");A("Menyimpan Restock...");try{const n=typeof v<"u"&&v?v:window.db,l=typeof U=="function"?U:window.saveApp||(async()=>{});if(!n)throw new Error("Database Firebase belum terhubung");const d=n.collection("freshmart").doc("cms_data").collection("products").doc(e.toString());let p=0;await n.runTransaction(async m=>{const b=await m.get(d);if(!b.exists)throw new Error("Produk tidak ditemukan di server");const g=JSON.parse(JSON.stringify(b.data()));if(r)a.variants.forEach((f,y)=>{const C=parseFloat(document.getElementById("restock-var-"+y)?.value)||0;if(C<=0)return;const T=(g.variants||[]).findIndex(k=>k.name===f.name);T>-1&&(g.variants[T].stock=(parseFloat(g.variants[T].stock)||0)+C,g.variants[T].stock>0&&(g.variants[T].isActive===!1||g.variants[T].isActive==="false")&&(g.variants[T].isActive=!0))}),g.variants.some(f=>(parseFloat(f.stock)||0)>0&&f.isActive!==!1&&f.isActive!=="false")&&(g.isActive===!1||g.isActive==="false")&&(g.isActive="true"),p=g.variants.reduce((f,y)=>f+(parseFloat(y.stock)||0),0);else{const w=parseFloat(document.getElementById("restock-main")?.value)||0;g.stock=(parseFloat(g.stock)||0)+w,g.stock>0&&(g.isActive===!1||g.isActive==="false")&&(g.isActive="true"),p=g.stock}m.set(d,g),Object.assign(s,g)}),o.products[t]=s,await l([],{updateType:"stock_change",updatedProductIds:[e.toString()]}),closeRestockModal(),window.rAdmItms?.("products"),H("stat-products",o.products.filter(m=>m.isActive!=="false"&&m.isActive!==!1).length),u(`✅ Restock +${i} berhasil! Total stok: ${p}`)}catch(n){u("Gagal restock: "+(n.message||""))}finally{D(!1),P()}};window.toggleProductStatus=async(e,t)=>{if(ve)return;D(!0);const a=o.products.findIndex(r=>r.id!=null&&r.id.toString()===e.toString());if(a>-1){o.products[a].isActive=t?"true":"false",A(t?"Mengaktifkan...":"Menonaktifkan...");try{const r=typeof v<"u"&&v?v:window.db,s=typeof U=="function"?U:window.saveApp||(async()=>{});if(!r)throw new Error("Database Firebase belum terhubung");await r.collection("freshmart").doc("cms_data").collection("products").doc(e.toString()).update({isActive:t?"true":"false"}),await s([],{updateType:"stock_change",updatedProductIds:[e.toString()]}),H("stat-products",o.products.filter(i=>i.isActive!=="false"&&i.isActive!==!1).length),window.rAdmItms?.("products"),u(t?"Produk Aktif!":"Stok Dikosongkan!")}catch(r){u("Gagal update status: "+(r.message||""))}finally{D(!1),P()}}else D(!1)};window.closeAdminModal=(e=!1)=>{Yt("admin",e,()=>{h("admin-modal").classList.add("opacity-0"),h("admin-modal-box").classList.add("scale-95"),setTimeout(()=>O("admin-modal"),300)})};const Ns=e=>window.pushModalHistory?.(e),Rs=(e,t,a)=>window.requestCloseModal?.(e,t,a);let V;window.openCameraScanner=async(e="search-input")=>{const t=h("scanner-modal");t&&t.classList.contains("hidden")&&Ns("scanner"),F("scanner-modal"),setTimeout(()=>{h("scanner-modal").classList.remove("opacity-0")},10);try{await Et("https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js",()=>typeof Html5Qrcode<"u")}catch{u("Gagal memuat modul kamera. Cek koneksi internet Anda."),closeCameraScanner();return}V||(V=new Html5Qrcode("reader"));const a={fps:10,qrbox:{width:250,height:250}};setTimeout(()=>{V&&V.start({facingMode:"environment"},a,r=>{let s=h(e);s&&(s.value=r,e==="search-input"?window.handleSearch?.(r):(s.dispatchEvent(new Event("input",{bubbles:!0})),s.dispatchEvent(new Event("change",{bubbles:!0})))),u("Barcode discan!"),closeCameraScanner()},r=>{}).catch(r=>{u("Akses kamera ditolak/gagal!"),closeCameraScanner()})},100)};window.closeCameraScanner=(e=!1)=>{Rs("scanner",e,()=>{if(h("scanner-modal").classList.add("opacity-0"),V)try{V.getState()===2||V.getState()===3?V.stop().then(()=>{V.clear(),V=null}).catch(t=>{V.clear(),V=null}):(V.clear(),V=null)}catch{V=null}setTimeout(()=>O("scanner-modal"),300)})};const Fs=e=>window.pushModalHistory?.(e),Os=(e,t,a)=>window.requestCloseModal?.(e,t,a);let Re=[];window.openQuickPriceModal=e=>{const t=o.products.find(i=>i.id===e);if(!t)return;const a=t.variants&&t.variants.length>0;Re=!a&&t.wholesale?JSON.parse(JSON.stringify(t.wholesale)):[];let r="";a?r=t.variants.map((i,n)=>`
            <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
                <div class="flex items-center gap-2.5 min-w-0">
                    ${i.colorCode?`<span class="w-4 h-4 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${c(i.colorCode)}"></span>`:""}
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${c(i.name)}</p>
                </div>
                <div class="grid grid-cols-4 gap-2.5">
                    <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP</label><input type="number" id="qp-var-hpp-${n}" value="${i.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Jual</label><input type="number" id="qp-var-price-${n}" value="${i.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Coret</label><input type="number" id="qp-var-normal-${n}" value="${i.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-violet-500 mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-var-poin-${n}" value="${i.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                </div>
            </div>`).join(""):r=`
            <div class="grid grid-cols-4 gap-2.5">
                <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP / Modal</label><input type="number" id="qp-hpp" value="${t.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Harga Jual</label><input type="number" id="qp-price" value="${t.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Harga Coret</label><input type="number" id="qp-normal" value="${t.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-violet-500 mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-poin" value="${t.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
            </div>
            <div class="pt-2">
                <div class="flex justify-between items-center mb-2.5">
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Harga Grosir</label>
                    <button type="button" onclick="qpAddWhol()" class="text-[10px] font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] flex items-center gap-1"><i class="fa-solid fa-plus"></i> Tambah</button>
                </div>
                <div id="qp-whol-container" class="space-y-2"></div>
            </div>`;let s=document.getElementById("quickprice-modal");s||(s=document.createElement("div"),s.id="quickprice-modal",s.className="fixed inset-0 z-[110] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=i=>{i.target===s&&closeQuickPriceModal()},document.body.appendChild(s)),s.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-tags text-[var(--color-primary)]"></i> Edit Cepat Harga</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${c(t.name)}</p>
                </div>
                <button onclick="closeQuickPriceModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3" id="qp-body">${r}</div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processQuickPrice(${e})" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2"><i class="fa-solid fa-save"></i> Simpan Harga</button>
            </div>
        </div>`,a||rQpWhol(),s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),Fs("quickprice")};window.rQpWhol=()=>{S("qp-whol-container",Re.length?Re.map((e,t)=>`
        <div class="flex items-center gap-2">
            <input type="number" min="1" placeholder="Min. Qty" value="${e.minQty||""}" onchange="qpWhol[${t}].minQty=parseFloat(this.value)||0" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <input type="number" min="0" placeholder="Harga/Unit" value="${e.price||""}" onchange="qpWhol[${t}].price=parseFloat(this.value)||0" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <button type="button" onclick="qpWhol.splice(${t},1); rQpWhol();" class="w-9 h-9 shrink-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all"><i class="fa-solid fa-trash text-xs"></i></button>
        </div>`).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-2">Belum ada tingkat harga grosir.</p>')};window.qpAddWhol=()=>{Re.push({minQty:0,price:0}),rQpWhol()};window.closeQuickPriceModal=(e=!1)=>{Os("quickprice",e,()=>{const t=document.getElementById("quickprice-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250))})};window.processQuickPrice=async e=>{if(ve)return;D(!0);const t=o.products.findIndex(s=>s.id===e);if(t<0){D(!1);return}const a=o.products[t],r=a.variants&&a.variants.length>0;A("Menyimpan Harga...");try{const s=typeof v<"u"&&v?v:window.db,i=typeof U=="function"?U:window.saveApp||(async()=>{});if(!s)throw new Error("Database Firebase belum terhubung");const n=s.collection("freshmart").doc("cms_data").collection("products").doc(e.toString());let l=null;await s.runTransaction(async d=>{const p=await d.get(n);if(!p.exists)throw new Error("Produk tidak ditemukan di server");const m=JSON.parse(JSON.stringify(p.data()));r?a.variants.forEach((b,g)=>{const w=(m.variants||[]).findIndex(f=>f.name===b.name);w<0||(m.variants[w].hpp=parseFloat(document.getElementById("qp-var-hpp-"+g)?.value)||0,m.variants[w].price=parseFloat(document.getElementById("qp-var-price-"+g)?.value)||0,m.variants[w].priceNormal=parseFloat(document.getElementById("qp-var-normal-"+g)?.value)||0,m.variants[w].poin=parseFloat(document.getElementById("qp-var-poin-"+g)?.value)||0)}):(m.hpp=parseFloat(document.getElementById("qp-hpp")?.value)||0,m.price=parseFloat(document.getElementById("qp-price")?.value)||0,m.priceNormal=parseFloat(document.getElementById("qp-normal")?.value)||0,m.poin=parseFloat(document.getElementById("qp-poin")?.value)||0,m.wholesale=Re.filter(b=>parseFloat(b.minQty)>.01&&b.price>0)),d.set(n,m),l=m}),o.products[t]=l,await i([],{updateType:"stock_change",updatedProductIds:[e.toString()]}),closeQuickPriceModal(),window.rAdmItms?.("products"),u("✅ Harga berhasil diperbarui!")}catch(s){u("Gagal simpan harga: "+(s.message||""))}finally{D(!1),P()}};window.rWholB=()=>{let e=`<div class="space-y-4 mb-4">${ue.map((a,r)=>`
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative group transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-600">
            <button onclick="rmWhol(${r})" class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md z-10"><i class="fa-solid fa-trash text-xs"></i></button>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Minimal Pembelian (Qty)</label>
                    <input autocomplete='off' type="number" step="0.01" placeholder="Cth: 12" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${a.minQty}" onchange="uWhol(${r},'minQty',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Satuan Spesial (Rp)</label>
                    <input autocomplete='off' type="number" placeholder="Cth: 15000" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${a.price}" onchange="uWhol(${r},'price',this.value)">
                </div>
            </div>
        </div>`).join("")}</div>
        <button onclick="addWhol()" class="w-full py-4 bg-amber-50 dark:bg-amber-900/20 text-amber-600 font-bold rounded-[1.5rem] text-sm border-2 border-amber-200 border-dashed hover:bg-amber-100 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-tags"></i> Tambah Tingkatan Grosir</button>`;const t=document.getElementById("wholesale-builder-container");t&&(t.innerHTML=e)};window.addWhol=()=>{ue.push({minQty:2,price:0}),yt(ue),window.rWholB()};window.rmWhol=e=>{ue.splice(e,1),yt(ue),window.rWholB()};window.uWhol=(e,t,a)=>{ue[e][t]=parseFloat(a)||0};let kt="products";const Je=e=>{kt=e,window.cTab=e};let Xt="";const Hs=e=>{Xt=e,window.aSq=e};let X=null;const Zt=e=>{X=e,window.eId=e};let ve=!1;const D=e=>{ve=e};let W=[];const Qe=e=>{W=e};let ue=[];const yt=e=>{ue=e};let ee=[];const $t=e=>{ee=e};window.setCTab=Je;window.setASq=Hs;window.setEId=Zt;const Us=(e,t=!1)=>{const a=document.querySelector("#view-admin .scroll-content");if(a&&(a.scrollTop=0),fa(e),ga(""),!t){const s=history.state;s&&s.view==="view-admin"&&s.tab?history.replaceState({view:"view-admin",tab:e},"",window.location.href):history.pushState({view:"view-admin",tab:e},"",window.location.href)}if(O("admin-dashboard-view"),F("admin-content-view"),F("btn-admin-back"),O("admin-logo-box"),H("admin-header-title",{orders:"Pesanan",settings:"Toko",products:"Produk",categories:"Kategori",brands:"Merek",banks:"Rekening",banners:"Banner",vouchers:"Voucher",customers:"Database Pelanggan",rewards:"Program Hadiah",reviews:"Ulasan Pelanggan",faqs:"Tanya Jawab / Q&A",tax:"Pajak & Keuangan",piutang:"Piutang Tempo",colors:"Database Warna",changelog:"Log Pembaruan Sistem"}[e]||"CMS"),e!=="orders"&&pe&&(pe(),_e(null)),e!=="customers"&&de&&(de(),je(null)),e!=="reviews"&&ce&&(ce(),De(null)),e==="settings")typeof window.rAdmSet=="function"&&window.rAdmSet();else if(e==="orders")typeof window.rAdmOrd=="function"&&window.rAdmOrd();else if(e==="tax")typeof window.rTaxPanel=="function"&&window.rTaxPanel();else if(e==="piutang")typeof window.rAdmPiutang=="function"&&window.rAdmPiutang();else if(e==="customers"){S("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),de&&(de(),je(null));const s=v.collection("freshmart").doc("cms_data").collection("customers").onSnapshot(i=>{o.customers=i.docs.map(n=>n.data()),typeof window.rAdmL=="function"&&window.rAdmL("customers")},()=>{u("Gagal memuat data pelanggan!"),typeof window.rAdmL=="function"&&window.rAdmL("customers")});je(s)}else if(e==="reviews"){S("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),ce&&(ce(),De(null));const s=v.collection("freshmart").doc("cms_data").collection("reviews").onSnapshot(i=>{const n=i.docs.map(l=>l.data());n.sort((l,d)=>{const p=l.createdAt&&l.createdAt.toMillis?l.createdAt.toMillis():0;return(d.createdAt&&d.createdAt.toMillis?d.createdAt.toMillis():0)-p}),ba(n),typeof window.rAdmReviews=="function"&&window.rAdmReviews()},()=>{u("Gagal memuat ulasan!")});De(s)}else e==="faqs"?typeof window.rAdmFAQ=="function"&&window.rAdmFAQ():e==="changelog"?typeof window.rAdmChangelog=="function"&&window.rAdmChangelog():typeof window.rAdmL=="function"&&window.rAdmL(e)};window.openAdminTab=Us;let Le="all";const Vs=e=>{if(!e)return"";try{const t=e.split("-");return t.length===3?new Date(parseInt(t[0]),parseInt(t[1])-1,parseInt(t[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e}catch{return e}},qs=e=>{switch(e){case"feature":return{label:"Fitur Baru",icon:"fa-rocket",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"optimization":return{label:"Optimasi",icon:"fa-bolt-lightning",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"maintenance":return{label:"Maintenance",icon:"fa-wrench",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"bugfix":return{label:"Perbaikan",icon:"fa-bug-slash",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};default:return{label:"Update",icon:"fa-tag",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"}}},Ks=()=>{const e=h("changelog-items-container");if(!e)return;const t=ht(o),a=Le==="all"?t:t.filter(s=>s.category===Le);if(a.length===0){e.innerHTML=`
        <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3">
                <i class="fa-solid fa-clipboard-list opacity-60"></i>
            </div>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan pada kategori ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Pilih filter kategori lain di atas</p>
        </div>`;return}let r="";a.forEach((s,i)=>{const n=i===0&&Le==="all",l=qs(s.category),d=Vs(s.date),p=(s.items||[]).map(m=>`
            <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[11px] mt-1 shrink-0"></i>
                <span>${c(m)}</span>
            </li>
        `).join("");r+=`
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
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${l.colorClass}">
                            <i class="fa-solid ${l.icon} text-[9px] ${l.iconColor}"></i> ${c(l.label)}
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
        </div>`}),e.innerHTML=r},ea=e=>{Le=e,document.querySelectorAll(".btn-changelog-filter").forEach(t=>{const a=t.getAttribute("data-category"),r=t.querySelector("i");a===e?(t.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent",r&&(r.className=r.className.replace(/text-\[[^\]]+\]/g,"").trim()+" text-white")):(t.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer",r&&a!=="all"?r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-[var(--color-primary)]":r&&a==="all"&&(r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-slate-400"))}),Ks()},Gs=(e="all")=>{let t=h("changelog-modal");t||(t=document.createElement("div"),t.id="changelog-modal",t.className="fixed inset-0 z-[125] bg-slate-900/80 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",t.onclick=s=>{s.target===t&&ta()},t.innerHTML=`
        <div id="changelog-modal-box" class="w-full max-w-xl max-h-[90dvh] sm:max-h-[85dvh] bg-white dark:bg-[#0b1121] rounded-t-[2rem] sm:rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden shadow-2xl transform translate-y-full sm:translate-y-8 transition-transform duration-300">
            <!-- Header Modal -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between shrink-0 bg-white/80 dark:bg-[#0b1121]/80 backdrop-blur-md">
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
        </div>`,document.body.appendChild(t));const a=wt(o),r=h("changelog-header-ver");r&&(r.textContent=a),Le=e,ea(e),t.style.display="flex",requestAnimationFrame(()=>{t.classList.remove("opacity-0");const s=h("changelog-modal-box");s&&s.classList.remove("translate-y-full","sm:translate-y-8")})},ta=()=>{const e=h("changelog-modal");if(!e||e.style.display==="none")return;e.classList.add("opacity-0");const t=h("changelog-modal-box");t&&t.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{e.style.display="none"},300)};window.openChangelogModal=Gs;window.closeChangelogModal=ta;window.filterChangelog=ea;let Se=!1,ye=null;const St=()=>{const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${r}`},Ws=e=>{if(!e)return"";try{const t=e.split("-");return t.length===3?new Date(parseInt(t[0]),parseInt(t[1])-1,parseInt(t[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e}catch{return e}},Oe=()=>{const e=h("admin-content");if(!e)return;const t=o.changelog||[],a=ht(o),r=wt(o);let s="";a.length===0?s=`
        <div class="text-center py-12 text-slate-400">
            <i class="fa-solid fa-clipboard-list text-3xl mb-2 opacity-50"></i>
            <p class="text-xs font-bold">Belum ada catatan pembaruan</p>
        </div>`:s=a.map(i=>{const n=t.some(b=>b.id===i.id),l=i.version===r,d=(i.items||[]).map(b=>`
                <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                    <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[10px] mt-1 shrink-0"></i>
                    <span>${c(b)}</span>
                </li>
            `).join("");let p="Update",m="fa-tag";return i.category==="feature"?(p="Fitur Baru",m="fa-rocket"):i.category==="optimization"?(p="Optimasi",m="fa-bolt-lightning"):i.category==="maintenance"?(p="Maintenance",m="fa-wrench"):i.category==="bugfix"&&(p="Perbaikan",m="fa-bug-slash"),`
            <div class="p-4 sm:p-5 rounded-2xl border ${l?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.02)] dark:bg-[rgba(var(--color-primary-rgb),0.05)] shadow-sm":"border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"} space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="px-2.5 py-1 rounded-lg text-xs font-black tracking-wider uppercase ${l?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-800 text-white dark:bg-slate-700"}">
                            ${c(i.version)}
                        </span>
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-slate-200/80 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid ${m} text-[9px] text-[var(--color-primary)]"></i> ${c(p)}
                        </span>
                        ${l?'<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[9px] font-extrabold uppercase"><span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span> Versi Aktif</span>':""}
                        ${n?'<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] text-[9px] font-bold">Kustom Toko</span>':'<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 text-[9px] font-bold">Sistem Bawaan</span>'}
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500">
                            <i class="fa-regular fa-calendar mr-1"></i> ${c(Ws(i.date))}
                        </span>
                        ${n?`
                        <button onclick="window.editChangelogEntry('${c(i.id)}')" class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs transition-all" title="Edit Catatan">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button onclick="window.deleteChangelogEntry('${c(i.id)}')" class="w-7 h-7 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center text-xs transition-all" title="Hapus Catatan">
                            <i class="fa-solid fa-trash"></i>
                        </button>`:""}
                    </div>
                </div>

                <div>
                    <h4 class="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                        ${c(i.title)}
                    </h4>
                </div>

                <ul class="space-y-1.5 pt-1">
                    ${d}
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
                            ${c(r)}
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
        <div id="changelog-form-box" class="${Se?"block":"hidden"} p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-[var(--color-primary)]/40 shadow-lg space-y-4">
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
                    <input id="form-log-date" type="date" value="${St()}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none" />
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
            <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-1">
                Riwayat Rilis &amp; Log Perubahan (${a.length} Versi)
            </h4>
            <div class="space-y-3">
                ${s}
            </div>
        </div>
    </div>`},zs=(e=null)=>{Se=e!==null?e:!Se,Se||(ye=null),Oe()},Js=e=>{const t=(o.changelog||[]).find(s=>s.id===e);if(!t)return;ye=e,Se=!0,Oe(),te("form-log-version",t.version||""),te("form-log-category",t.category||"feature"),te("form-log-date",t.date||St()),te("form-log-title",t.title||""),te("form-log-items",(t.items||[]).join(`
`));const a=h("changelog-form-title");a&&(a.innerHTML=`<i class="fa-solid fa-pen text-[var(--color-primary)]"></i> Edit Catatan Pembaruan (${c(t.version)})`);const r=h("changelog-form-box");r&&r.scrollIntoView({behavior:"smooth"})},Qs=async()=>{const e=($("form-log-version")||"").trim(),t=$("form-log-category")||"feature",a=$("form-log-date")||St(),r=($("form-log-title")||"").trim(),s=($("form-log-items")||"").trim();if(!e)return u("Nomor versi harus diisi (contoh: v1.2.1)!");if(!r)return u("Judul pembaruan harus diisi!");if(!s)return u("Tuliskan minimal 1 poin rincian perubahan!");const i=s.split(`
`).map(l=>l.replace(/^[-*•]\s*/,"").trim()).filter(l=>l.length>0);if(i.length===0)return u("Rincian perubahan tidak boleh kosong!");A("Menyimpan catatan pembaruan...");const n={id:ye||"log-"+Date.now().toString(36),version:e.startsWith("v")?e:"v"+e,category:t,date:a,title:r,items:i,updatedAt:new Date().toISOString()};if(o.changelog=o.changelog||[],ye){const l=o.changelog.findIndex(d=>d.id===ye);l!==-1?o.changelog[l]=n:o.changelog.unshift(n)}else o.changelog.unshift(n);try{await U(["changelog"]),u("Catatan pembaruan berhasil dipublikasikan secara real-time!","success"),Se=!1,ye=null,Oe()}catch(l){u("Gagal menyimpan log pembaruan: "+l.message,"error")}finally{P()}},Ys=e=>{const t=(o.changelog||[]).find(a=>a.id===e);t&&we(`Hapus catatan pembaruan versi "${t.version}"?`,async()=>{A("Menghapus catatan..."),o.changelog=(o.changelog||[]).filter(a=>a.id!==e);try{await U(["changelog"]),u("Catatan berhasil dihapus!","success"),Oe()}catch(a){u("Gagal menghapus catatan: "+a.message,"error")}finally{P()}},"Ya, Hapus","Konfirmasi Hapus")};window.rAdmChangelog=Oe;window.toggleChangelogForm=zs;window.editChangelogEntry=Js;window.saveChangelogEntry=Qs;window.deleteChangelogEntry=Ys;export{ya as A,$e as a,Pe as b,Ae as c,v as d,js as e,Ds as f,Ms as g,$a as h,ar as i,Ls as j,G as k,tr as l,Rt as m,Ot as n,Ge as o,Ke as p,Nt as q,Be as r,es as s,sr as t,Y as u,rr as v,zt as w};
