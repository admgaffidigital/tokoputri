const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js"])))=>i.map(i=>d[i]);
import{f as ue}from"./vendor-firebase-core-D2OF5R23.js";import{p as or,a as ir}from"./vendor-firebase-db-BHlQMNP0.js";import{p as lr}from"./vendor-utils-bRchjNq8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const nr="modulepreload",dr=function(e){return"/"+e},Ea={},cr=function(t,a,r){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");s=Promise.allSettled(a.map(d=>{if(d=dr(d),d in Ea)return;Ea[d]=!0;const p=d.endsWith(".css"),f=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${f}`))return;const b=document.createElement("link");if(b.rel=p?"stylesheet":nr,p||(b.as="script"),b.crossOrigin="",b.href=d,l&&b.setAttribute("nonce",l),document.head.appendChild(b),p)return new Promise((u,w)=>{b.addEventListener("load",u),b.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return s.then(i=>{for(const l of i||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},pr={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const na=window.FIREBASE_CONFIG||pr;ue.apps.length||ue.initializeApp(na);const k=ue.firestore(),ge=ue.auth();typeof window<"u"&&(window.firebase=ue,window.db=k,window.auth=ge);try{k.settings({localCache:or({tabManager:ir()}),ignoreUndefinedProperties:!0,merge:!0,experimentalAutoDetectLongPolling:!0})}catch{try{k.settings({ignoreUndefinedProperties:!0,merge:!0,experimentalAutoDetectLongPolling:!0})}catch{}}let mr=null;const _a=()=>{cr(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{mr=ue.analytics()}catch{}}).catch(()=>{})},da="K2ijSERTT2dg27yYGTEgn6XHSnW2",Ze={emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#dc2626",600:"#b91c1c",700:"#991b1b",800:"#7f1d1d",900:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#ea580c",600:"#c2410c",700:"#9a3412",800:"#7c2d12",900:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#d97706",600:"#b45309",700:"#92400e",800:"#78350f",900:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#eab308",500:"#d97706",600:"#b45309",700:"#854d0e",800:"#713f12",900:"#3f1d0b"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#65a30d",600:"#4d7c0f",700:"#3f6212",800:"#365314",900:"#1a2e05"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#16a34a",600:"#15803d",700:"#166534",800:"#14532d",900:"#052e16"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#475569",600:"#334155",700:"#1e293b",800:"#0f172a",900:"#020617"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#57534e",600:"#44403c",700:"#292524",800:"#1c1917",900:"#0c0a09"}},As=e=>{let t=parseInt(e.replace("#",""),16);return(t>>16&255)+","+(t>>8&255)+","+(t&255)},Ra=(e,t)=>{let a=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return a=Math.max(0,Math.min(255,a+t)),r=Math.max(0,Math.min(255,r+t)),s=Math.max(0,Math.min(255,s+t)),"#"+[a,r,s].map(o=>o.toString(16).padStart(2,"0")).join("")},ur=e=>{if(!e)return;try{document.querySelectorAll('meta[name="theme-color"]').forEach(d=>d.remove())}catch{}const t=document.createElement("meta");t.setAttribute("name","theme-color"),t.setAttribute("content",e),document.head.appendChild(t);try{document.querySelectorAll('meta[name="msapplication-navbutton-color"], meta[name="msapplication-TileColor"]').forEach(d=>d.remove())}catch{}const a=document.createElement("meta");a.setAttribute("name","msapplication-navbutton-color"),a.setAttribute("content",e),document.head.appendChild(a);const r=document.createElement("meta");r.setAttribute("name","msapplication-TileColor"),r.setAttribute("content",e),document.head.appendChild(r);let s=document.querySelector('meta[name="apple-mobile-web-app-capable"]');s||(s=document.createElement("meta"),s.setAttribute("name","apple-mobile-web-app-capable"),document.head.appendChild(s)),s.setAttribute("content","yes");let o=document.querySelector('meta[name="mobile-web-app-capable"]');o||(o=document.createElement("meta"),o.setAttribute("name","mobile-web-app-capable"),document.head.appendChild(o)),o.setAttribute("content","yes");let i=document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');i||(i=document.createElement("meta"),i.setAttribute("name","apple-mobile-web-app-status-bar-style"),document.head.appendChild(i)),i.setAttribute("content","default"),typeof window.updatePwaManifest=="function"&&window.updatePwaManifest(e)},Ve=(e,t)=>{const a=e||localStorage.getItem("freshmart_ui_theme")||"emerald",r=Ze[a]||Ze.emerald;e&&localStorage.setItem("freshmart_ui_theme",a);const s=t||localStorage.getItem("freshmart_theme_color")||r[500];t&&localStorage.setItem("freshmart_theme_color",s);const o=As(s),i=Ra(s,-30),l=Ra(s,150);return document.documentElement.style.setProperty("--color-primary",s),document.documentElement.style.setProperty("--color-primary-dark",i),document.documentElement.style.setProperty("--color-primary-light",l),document.documentElement.style.setProperty("--color-primary-rgb",o),ur(s),r},fr=()=>{const e=localStorage.getItem("freshmart_theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;(e==="dark"||!e&&t)&&document.documentElement.classList.add("dark")},br=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")},gr=()=>{const e=document.documentElement.classList.contains("dark"),t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")},Ge=(e="minimalist",t="")=>{const a=e||localStorage.getItem("freshmart_bg_style")||"minimalist",r=t??(localStorage.getItem("freshmart_bg_custom_url")||"");e&&localStorage.setItem("freshmart_bg_style",a),t!=null&&localStorage.setItem("freshmart_bg_custom_url",r);const o=(p=>{if(!p||typeof p!="string")return"";const f=p.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);return f?`https://lh3.googleusercontent.com/d/${f[1]}`:p.trim()})(r);document.documentElement.setAttribute("data-bg-style",a),document.body?.setAttribute("data-bg-style",a);const i=document.getElementById("app-container");i&&(i.setAttribute("data-bg-style",a),o?i.setAttribute("data-has-custom-bg","true"):i.removeAttribute("data-has-custom-bg"));const l=document.getElementById("dynamic-bg-container");if(!l)return;if(l.innerHTML="",l.className="pointer-events-none fixed inset-0 z-0 overflow-hidden",o){const p=document.createElement("div");p.className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-35 dark:opacity-25 pointer-events-none transition-all duration-500",p.style.backgroundImage=`url('${o}')`,l.appendChild(p);const f=document.createElement("div");f.className="absolute inset-0 z-0 bg-slate-50/70 dark:bg-[#0b1120]/80 pointer-events-none backdrop-blur-[0.5px]",l.appendChild(f)}let d="";if(a==="hero_arch"?d=`
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
        `:d="",d){const p=document.createElement("div");p.className="absolute inset-0 z-0 pointer-events-none",p.innerHTML=d,l.appendChild(p)}},m=e=>document.getElementById(e),L=e=>{const t=m(e);t&&t.classList.remove("hidden")},$=e=>{const t=m(e);t&&t.classList.add("hidden")},Z=(e,t,a)=>{const r=m(e);r&&r.classList.toggle(t,a)},U=(e,t)=>{const a=m(e);a&&(a.innerText=t)},P=(e,t)=>{const a=m(e);a&&(a.innerHTML=t)},se=(e,t)=>{const a=m(e);a&&(a.value=t)},C=e=>{const t=m(e);return t?t.value:""},we=e=>{try{return localStorage.getItem(e)}catch{return null}},te=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},c=e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),x=e=>{const t=Number(e);return isNaN(t)||e===null?"Rp 0":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(Math.abs(t)).replace(/^/,t<0?"-":"")},W=e=>{if(typeof e!="string")return e;const t=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);return t?`https://lh3.googleusercontent.com/d/${t[1]}`:e},Rt=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(t))return t;const a=t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return a?a[1]:null},Ft=e=>{if(typeof e!="string"||!e.trim())return null;const t=e.trim(),a=Rt(t);if(a)return{type:"youtube",id:a,embedUrl:`https://www.youtube.com/embed/${a}?autoplay=1&mute=1&muted=1&loop=1&playlist=${a}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const r=t.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(r&&r[1]){const s=r[1];return{type:"gdrive",id:s,streamUrl:`https://drive.google.com/uc?export=download&id=${s}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${s}`,directUrl:`https://drive.google.com/uc?export=download&id=${s}`,embedUrl:`https://drive.google.com/file/d/${s}/preview?autoplay=1`}}return{type:"direct",directUrl:t,embedUrl:t}},Nt=e=>{const t=Ft(e);return t?t.embedUrl:e},Ms=e=>{const t=Ft(e);return t?t.embedUrl:e},pe=(e,t)=>typeof e!="string"?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${t}`:e,Bt=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",xr=(e,t,a,r)=>{document.title=e||"Toko Putri";const s=(o,i,l=!1)=>{const d=l?"property":"name";let p=document.querySelector(`meta[${d}="${o}"]`);p||(p=document.createElement("meta"),p.setAttribute(d,o),document.head.appendChild(p)),p.setAttribute("content",i)};t&&s("description",t),e&&s("og:title",e,!0),t&&s("og:description",t,!0),a&&s("og:image",a,!0),r&&s("og:url",r,!0)},wr=(e,t)=>{let a=document.getElementById(e);a||(a=document.createElement("script"),a.id=e,a.type="application/ld+json",document.head.appendChild(a)),a.textContent=JSON.stringify(t)},O=e=>{e&&U("loader-text",e);const t=m("global-loader");t&&(t.style.display="flex")},D=()=>{const e=m("global-loader");e&&(e.style.display="none")},g=(e,t,a,r)=>{typeof window.showToast=="function"&&window.showToast(e,t,a,r)},Le=(e,t,a,r)=>{typeof window.showConfirm=="function"&&window.showConfirm(e,t,a,r)},at={};window.loadedScripts=at;const Ds=(e,t)=>t&&t()?Promise.resolve():(at[e]||(at[e]=new Promise((a,r)=>{const s=document.createElement("script");s.src=e,s.onload=()=>a(),s.onerror=()=>{delete at[e],r(new Error("Gagal memuat: "+e))},document.head.appendChild(s)})),at[e]),hr=e=>{let t=(e||"").toString().replace(/\D/g,"");return t?(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),t):""};window.normalizeWA=hr;const fe={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"",lng:"",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"text",brandStyle:"image",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showRewardCatalog:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let n=JSON.parse(JSON.stringify(fe)),R=[],me=[],ie=[];try{const e=localStorage.getItem("freshmart_cart");e&&(R=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(me=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(ie=JSON.parse(e)||[])}catch{}let B={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},$e=null,Pe=null,De="Semua Produk",Se="Semua Merek",st="",rt="newest",Xt="grid",ca=1,vr=12,A=null,ae=0,Te=1,ke=[],qe=null,Re=null,Fe=null,ce=[],Ot=[],ct=null,N=null,Qe=!1,Cs="all",Ls="today";const nt=e=>{R=e},Is=e=>{me=e},$t=e=>{ie=e},yr=e=>{B=e},Ye=e=>{$e=e},Ce=e=>{Pe=e},pa=e=>{De=e},ma=e=>{Se=e},js=e=>{st=e},kr=e=>{rt=e},$r=e=>{Xt=e},Ie=e=>{ca=e},Sr=e=>{A=e},Zt=e=>{ae=e},ua=e=>{Te=e},Fa=e=>{ce=e},Pr=e=>{Ot=e},Tr=e=>{ct=e},xe=e=>{N=e},ee=e=>{Qe=e},Ar=e=>{Cs=e},Mr=e=>{Ls=e},ht=e=>{qe=e},gt=e=>{Re=e},xt=e=>{Fe=e};let qt="https://script.google.com/macros/s/AKfycbx3dW9rHcdoKNYjSOJ8PoH2k6fABe7XlBD9teNHsBlCBqJquq8jd4UvnfXZVsfKdFsC/exec";const Es=()=>{const e=ce.find(d=>d.orderId===ct);if(!e)return;const t=e.dateString?new Date(e.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",a=n.store.name||"Toko",r=n.store.wa||"",s=(d,p,f=32)=>{const b=f-d.length-p.length;return d+(b>0?" ".repeat(b):" ")+p};let o=`<div class="text-center font-bold" style="font-size:13px;margin-bottom:2px;">${c(a)}</div>`;if(r&&(o+=`<div class="text-center" style="margin-bottom:4px;">WA: ${c(r)}</div>`),o+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">Order: #${e.orderId}</div><div style="white-space:pre;">Tgl  : ${t}</div><div style="white-space:pre;">Plg  : ${c(e.customer?.name||"Guest").substring(0,20)}</div><div style="white-space:pre;">Tipe : ${e.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko"}</div><div class="border-b border-dashed border-black my-2"></div>`,e.customer?.note&&(o+=`<div style="white-space:pre-wrap;word-break:break-all;">Cat: ${c(e.customer.note)}</div><div class="border-b border-dashed border-black my-2"></div>`),e.items.forEach(d=>{let p=d.variantName?` (${c(d.variantName)}${d.colorCode?" "+c(d.colorCode):""})`:"";const f=(c(d.name)+p+(d.poTime?" [PO]":"")).substring(0,32),b=`${parseFloat(d.qty)} ${c(d.unit||"pcs")} x ${d.effectivePrice.toLocaleString("id-ID")}`,u=(parseFloat(d.qty)*d.effectivePrice).toLocaleString("id-ID");o+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${f}</div><div style="white-space:pre;font-size:11px;">${s(b,u)}</div>`,d.poTime&&(o+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${c(d.poTime)}</div>`)}),o+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">${s("Subtotal",(e.payment?.subtotal||0).toLocaleString("id-ID"))}</div>`,e.customer?.deliveryMethod==="delivery"&&(o+=`<div style="white-space:pre;">${s("Ongkir",(e.payment?.shippingCost||0).toLocaleString("id-ID"))}</div>`),e.payment?.shippingDiscount&&(o+=`<div style="white-space:pre;">${s("Pot.Ongkir",`-${e.payment.shippingDiscount.toLocaleString("id-ID")}`)}</div>`),e.payment?.productDiscount&&(o+=`<div style="white-space:pre;">${s("Pot.Harga",`-${e.payment.productDiscount.toLocaleString("id-ID")}`)}</div>`),e.payment?.ppnAmount&&e.payment.ppnAmount>0){const d=e.payment.ppnType==="inclusive",p=e.payment.ppnRate||11,f=e.payment.ppnAmount||0,b=(e.payment.subtotal||0)-(e.payment.productDiscount||0)+(e.payment.shippingCost||0)-(e.payment.shippingDiscount||0),u=e.payment.dppAmount||(d?Math.round(b*100/(100+p)):Math.max(0,b));o+=`<div style="white-space:pre;">${s("DPP",u.toLocaleString("id-ID"))}</div>`,o+=`<div style="white-space:pre;">${s(`${d?"Inc. PPN":"PPN"} (${p}%)`,(d?"":"+")+f.toLocaleString("id-ID"))}</div>`}o+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-weight:bold;font-size:12px;">${s("TOTAL","Rp "+(e.payment?.grandTotal||0).toLocaleString("id-ID"))}</div><div style="white-space:pre;">${s("Bayar:",String(e.payment?.method||"").toUpperCase())}</div>`,(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(o+='<div class="border-b border-dashed border-black my-2"></div>',e.pointsEarned>0&&(o+=`<div style="white-space:pre;">${s("Poin Didapat:","+"+e.pointsEarned)}</div>`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&(o+=`<div style="white-space:pre;font-weight:bold;">${s("Saldo Poin:",String(e.finalMemberPoints))}</div>`),e.claimedReward&&(o+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;margin-top:2px;">HADIAH: ${c(e.claimedReward.name)}</div><div style="white-space:pre;font-size:10px;">(${e.claimedReward.status==="ready"?"Kirim bersama pesanan":e.claimedReward.status==="waiting_stock"?"Stok kosong-ditunda":"Menunggu konfirmasi"})</div>`)),e.items.some(d=>d.poTime&&d.poTime!=="")&&(o+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),o+='<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;">Terima Kasih</div><div class="border-b border-dashed border-black my-2"></div><div style="height:15px;"></div>',P("receipt-paper-content",o);const l=m("receipt-preview-modal");l&&l.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),L("receipt-preview-modal"),setTimeout(()=>{m("receipt-preview-modal")&&m("receipt-preview-modal").classList.remove("opacity-0"),m("receipt-preview-modal-box")&&m("receipt-preview-modal-box").classList.remove("scale-95")},10)},Dr=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{m("receipt-preview-modal")&&m("receipt-preview-modal").classList.add("opacity-0"),m("receipt-preview-modal-box")&&m("receipt-preview-modal-box").classList.add("scale-95"),setTimeout(()=>$("receipt-preview-modal"),300)}):(m("receipt-preview-modal")&&m("receipt-preview-modal").classList.add("opacity-0"),m("receipt-preview-modal-box")&&m("receipt-preview-modal-box").classList.add("scale-95"),setTimeout(()=>$("receipt-preview-modal"),300))},Cr=()=>{if(!ce.find(r=>r.orderId===ct))return;const t=m("receipt-paper-content")?m("receipt-paper-content").innerHTML:"",a=m("thermal-print-section");a&&(a.innerHTML=t,window.print())};window.openReceiptPreview=Es;window.closeReceiptPreviewModal=Dr;window.executePrintReceipt=Cr;window.checkProPrint=()=>{Es()};let _s="invoice";const Lr=e=>{_s=e;const t=ce.find(l=>l.orderId===ct);if(!t)return;U("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const a=t.dateString?new Date(t.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"";let r="";n.store.logo&&(n.store.logo.includes("http")||n.store.logo.includes("data:"))?r=`<img loading="eager" src="${c(n.store.logo)}" class="w-16 h-16 object-contain">`:r='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';let s=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${r}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${c(n.store.name)}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${c(n.store.slogan||"General Supplier")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${c(n.store.address||"Alamat fisik toko belum diatur.")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${c(n.store.wa||"-")}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-3xl tracking-widest ${e==="invoice"?"text-blue-600":"text-amber-600"} uppercase">${e==="invoice"?t.payment?.method==="tempo"?"PROFORMA INVOICE":"INVOICE":"SURAT JALAN"}</h2>
            <p class="text-sm font-bold text-slate-600 mt-2 font-mono">#${t.orderId}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${a}</p>
        </div>
    </div>

    <div class="grid grid-cols-2 gap-8 mb-8">
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ditagihkan / Dikirim Kepada:</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-1">${c(t.customer?.name||"Guest")}</p>
            <p class="text-sm font-medium text-slate-700 leading-relaxed mb-3">${c(t.customer?.address||"-")}</p>
            ${t.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200"><i class="fa-solid fa-note-sticky"></i> Catatan: ${c(t.customer.note)}</p>`:""}
        </div>
        
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-center space-y-3">
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Metode Pengiriman</span>
                <span class="text-sm font-bold text-slate-800 uppercase">${c(t.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko")}</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Sistem Pembayaran</span>
                <span class="text-sm font-bold text-slate-800 uppercase">${c(t.payment?.method||"cash")}</span>
            </div>
            <div class="flex justify-between items-center pb-1">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Bayar</span>
                <span class="text-sm font-bold ${t.status==="Selesai"?"text-emerald-600":"text-rose-600"} uppercase">${t.status==="Selesai"?"LUNAS":"BELUM LUNAS"}</span>
            </div>
        </div>
    </div>
    `;if(e==="invoice"?s+=`
        <table class="w-full text-left text-sm text-slate-900 border-collapse mb-6">
            <thead>
                <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-xs">
                    <th class="py-3 px-4 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
                    <th class="py-3 px-4 border-r border-slate-700">Deskripsi Produk & Varian</th>
                    <th class="py-3 px-4 text-center w-24 border-r border-slate-700">Qty</th>
                    <th class="py-3 px-4 text-right w-32 border-r border-slate-700">Harga Sat.</th>
                    <th class="py-3 px-4 rounded-tr-xl text-right w-32">Total</th>
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">
                ${t.items.map((l,d)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${d+1}</td>
                    <td class="py-4 px-4 font-bold flex items-center gap-2">
                        ${c(l.name)} 
                        ${l.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${c(l.variantName)}</span> ${l.colorCode?`<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${c(l.colorCode)};"></span>`:""}`:""}
                        ${l.poTime?`<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${c(l.poTime)}</span>`:""}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-slate-700">${parseFloat(l.qty)} <span class="text-[10px] font-bold text-slate-400 uppercase">${c(l.unit||"pcs")}</span></td>
                    <td class="py-4 px-4 text-right font-mono font-medium">${x(l.effectivePrice)}</td>
                    <td class="py-4 px-4 text-right font-mono font-bold">${x(l.effectivePrice*parseFloat(l.qty))}</td>
                </tr>`).join("")}
            </tbody>
        </table>

        <div class="flex justify-end mb-10">
            <div class="w-1/2 md:w-[45%] space-y-3 text-sm font-bold text-slate-700">
                <div class="flex justify-between px-4"><span>Subtotal Produk</span><span class="font-mono">${x(t.payment?.subtotal)}</span></div>
                ${t.payment?.shippingCost?`<div class="flex justify-between px-4"><span>Ongkos Kirim</span><span class="font-mono">${x(t.payment.shippingCost)}</span></div>`:""}
                ${t.payment?.shippingDiscount?`<div class="flex justify-between px-4 text-emerald-600"><span>Diskon Ongkir</span><span class="font-mono">-${x(t.payment.shippingDiscount)}</span></div>`:""}
                ${t.payment?.productDiscount?`<div class="flex justify-between px-4 text-rose-600"><span>Diskon Produk</span><span class="font-mono">-${x(t.payment.productDiscount)}</span></div>`:""}
                ${(()=>{if(!t.payment?.ppnAmount||t.payment.ppnAmount<=0)return"";const l=t.payment.ppnType==="inclusive",d=t.payment.ppnRate||11,p=t.payment.ppnAmount,f=(t.payment.subtotal||0)-(t.payment.productDiscount||0)+(t.payment.shippingCost||0)-(t.payment.shippingDiscount||0),b=t.payment.dppAmount||(l?Math.round(f*100/(100+d)):Math.max(0,f));return`
                    <div class="flex justify-between px-4 text-slate-600"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-mono">${x(b)}</span></div>
                    <div class="flex justify-between px-4 text-amber-600"><span>${l?"Termasuk PPN":"PPN"} (${d}%)</span><span class="font-mono">${l?"":"+"}${x(p)}</span></div>
                    `})()}
                
                <div class="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl mt-4 shadow-md">
                    <span class="font-bold text-base uppercase tracking-widest">Grand Total</span>
                    <span class="font-mono text-xl text-emerald-400 font-bold tracking-tight">${x(t.payment?.grandTotal)}</span>
                </div>
                ${t.payment?.method==="tempo"?`
                <div class="flex justify-between px-4 mt-4 text-emerald-600"><span>Uang Muka (DP)</span><span class="font-mono">${x(t.payment?.tempoDp||0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-4 rounded-xl mt-2 border border-rose-200">
                    <span class="font-bold text-base uppercase tracking-widest">Sisa Tagihan</span>
                    <span class="font-mono text-xl font-bold tracking-tight">${x(t.payment?.tempoBalance||0)}</span>
                </div>
                `:""}
            </div>
        </div>`:s+=`
        <table class="w-full text-left text-sm text-slate-900 border-collapse mb-10">
            <thead>
                <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-xs">
                    <th class="py-3 px-4 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
                    <th class="py-3 px-4 border-r border-slate-700">Nama & Spesifikasi Barang</th>
                    <th class="py-3 px-4 text-center w-28 border-r border-slate-700">Kuantitas</th>
                    <th class="py-3 px-4 text-center w-24 border-r border-slate-700">Satuan</th>
                    <th class="py-3 px-4 rounded-tr-xl text-center w-24">Ceklis Gudang</th>
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">
                ${t.items.map((l,d)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${d+1}</td>
                    <td class="py-4 px-4 font-bold uppercase flex items-center gap-2">
                        ${c(l.name)} 
                        ${l.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${c(l.variantName)}</span> ${l.colorCode?`<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${c(l.colorCode)};"></span>`:""}`:""}
                        ${l.poTime?`<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${c(l.poTime)}</span>`:""}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-lg text-slate-800">${parseFloat(l.qty)}</td>
                    <td class="py-4 px-4 text-center text-slate-500 font-bold uppercase text-xs">${c(l.unit||"pcs")}</td>
                    <td class="py-4 px-4 text-center"><div class="w-5 h-5 border-2 border-slate-300 mx-auto rounded shadow-inner"></div></td>
                </tr>`).join("")}
            </tbody>
        </table>
        `,(t.pointsEarned>0||t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null)&&(s+=`
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5 flex items-center gap-6">
            <div class="w-10 h-10 rounded-xl bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
            ${t.pointsEarned>0?`<div><p class="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-lg text-amber-700">+${t.pointsEarned}</p></div>`:""}
            ${t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null?`<div><p class="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Terkumpul</p><p class="font-bold text-lg text-amber-700">${t.finalMemberPoints}</p></div>`:""}
        </div>`),t.claimedReward){const l=t.claimedReward.status==="ready"?"SERTAKAN BERSAMA PENGIRIMAN INI":t.claimedReward.status==="waiting_stock"?"STOK KOSONG — KIRIM SUSULAN":"MENUNGGU KONFIRMASI GUDANG";s+=`
        <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-5 mb-8 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                <div>
                    <p class="text-[10px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${t.claimedReward.pointsCost} Poin)</p>
                    <p class="font-bold text-base text-violet-800 uppercase">${c(t.claimedReward.name)}</p>
                    ${t.claimedReward.note?`<p class="text-xs italic text-violet-600 mt-1">"${c(t.claimedReward.note)}"</p>`:""}
                </div>
            </div>
            <span class="text-[10px] font-bold px-3 py-2 rounded-xl bg-violet-600 text-white uppercase tracking-widest text-center shrink-0">${l}</span>
        </div>`}t.payment?.method==="tempo"&&(s+=`
        <div class="mt-6 mb-8 border border-pink-200 bg-pink-50 p-4 rounded-xl text-left">
            <h4 class="font-bold text-pink-700 text-xs uppercase tracking-widest mb-1"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo</h4>
            <p class="text-[10px] text-pink-600 font-bold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${t.payment.tempoDueDate?new Date(t.payment.tempoDueDate).toLocaleDateString("id-ID"):"-"}). Keterlambatan pembayaran akan dikenakan denda sebesar 1% dari sisa tagihan untuk setiap harinya.</p>
        </div>`),t.items.some(l=>l.poTime&&l.poTime!=="")&&(s+=`
        <div class="mt-6 mb-8 border border-amber-200 bg-amber-50 p-4 rounded-xl text-left flex gap-3 items-start">
            <i class="fa-solid fa-clock text-amber-500 mt-0.5 animate-pulse"></i>
            <div>
                <h4 class="font-bold text-amber-700 text-xs uppercase tracking-widest mb-1">Informasi Produk Pre-Order (PO)</h4>
                <p class="text-[10px] text-amber-600 font-bold leading-relaxed">Pesanan ini mengandung produk Pre-Order (PO). Khusus untuk produk berlabel PO akan dikirimkan menyusul tanpa dikenakan biaya tambahan.</p>
            </div>
        </div>`),s+=`
    <div class="grid grid-cols-3 gap-8 text-center text-sm mt-auto pt-8">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Penerima / Klien</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900">${c(t.customer?.name||"Nama Terang & TTD")}</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Sopir / Pengantar</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900">Nama Terang & TTD</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Hormat Kami,</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900 uppercase">${c(n.store.name)}</span>
        </div>
    </div>
    `,P("doc-paper-content",s);const i=m("doc-preview-modal");i&&i.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),L("doc-preview-modal"),setTimeout(()=>{m("doc-preview-modal")&&m("doc-preview-modal").classList.remove("opacity-0"),m("doc-preview-modal-box")&&m("doc-preview-modal-box").classList.remove("scale-95"),fa()},10)},fa=()=>{const e=m("doc-paper-scroll-area"),t=m("doc-paper-content"),a=m("doc-paper-wrapper");if(!e||!t||!a)return;const r=794,o=e.clientWidth-16,i=Math.min(1,o/r);t.style.transform=`translateX(-50%) scale(${i})`,a.style.height=t.offsetHeight*i+"px"};window.addEventListener("resize",()=>{const e=m("doc-preview-modal");e&&!e.classList.contains("hidden")&&fa()});const Ir=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{m("doc-preview-modal")&&m("doc-preview-modal").classList.add("opacity-0"),m("doc-preview-modal-box")&&m("doc-preview-modal-box").classList.add("scale-95"),setTimeout(()=>$("doc-preview-modal"),300)}):(m("doc-preview-modal")&&m("doc-preview-modal").classList.add("opacity-0"),m("doc-preview-modal-box")&&m("doc-preview-modal-box").classList.add("scale-95"),setTimeout(()=>$("doc-preview-modal"),300))},jr=()=>{const e=m("doc-paper-content")?m("doc-paper-content").innerHTML:"",t=window.open("","_blank");if(!t){typeof window.showToast=="function"&&window.showToast("Gagal membuka tab baru. Izinkan pop-up di browser Anda!");return}t.document.write(`
        <html>
        <head>
            <title>Cetak Dokumen</title>
            <script src="https://cdn.tailwindcss.com"><\/script>
            <style>
                @page { size: A4 portrait; margin: 10mm; }
                body { font-family: 'Barlow', system-ui, sans-serif; background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            </style>
        </head>
        <body onload="setTimeout(() => { window.print(); }, 800)">
            <div class="w-full max-w-[794px] mx-auto p-4 text-sm leading-relaxed text-slate-900">
                ${e}
            </div>
        </body>
        </html>
    `),t.document.close()},Er=async e=>{if(!Qe){ee(!0),O(e==="image"?"Membuat Gambar HD...":"Menyusun PDF...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{D(),ee(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const t=m("doc-paper-content");if(!t)throw new Error("Elemen dokumen tidak ditemukan.");const a=document.createElement("div");a.style.position="absolute",a.style.top="-9999px",a.style.left="-9999px",a.style.width=t.offsetWidth+"px",a.style.height="max-content",a.style.backgroundColor="#ffffff",a.style.overflow="visible";const r=t.cloneNode(!0);r.id="doc-clone-printing",r.style.margin="0 auto",r.style.boxShadow="none",r.classList.remove("absolute","top-0","left-1/2"),r.style.position="static",r.style.left="auto",r.style.top="auto",r.style.transform="none",r.style.height="max-content",r.style.maxHeight="none",r.style.overflow="visible",r.classList.add("h-max"),a.appendChild(r),document.body.appendChild(a);const s=Array.from(r.querySelectorAll("img"));if(await Promise.all(s.map(d=>d.complete?Promise.resolve():new Promise(p=>{d.addEventListener("load",p,{once:!0}),d.addEventListener("error",p,{once:!0})}))),await new Promise(d=>setTimeout(d,300)),a.offsetWidth===0||a.offsetHeight===0)throw new Error("Dokumen belum sepenuhnya ter-render. Coba lagi.");const o={scale:2,useCORS:!0,backgroundColor:"#ffffff",width:a.offsetWidth,height:a.offsetHeight,windowWidth:a.offsetWidth,windowHeight:a.offsetHeight},i=await html2canvas(a,o);if(document.body.removeChild(a),!i||i.width===0||i.height===0)throw new Error("Gagal menangkap gambar dokumen (canvas kosong).");const l=`${_s.toUpperCase()}_${ct}`;if(e==="image"){const d=document.createElement("a");d.download=`${l}.png`,d.href=i.toDataURL("image/png",1),d.click(),typeof window.showToast=="function"&&window.showToast("Gambar Berhasil Disimpan!")}else{const d=i.toDataURL("image/jpeg",1);if(!d||!d.startsWith("data:image/jpeg;base64,"))throw new Error("Data gambar hasil export tidak valid.");const p=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,f=210,b=i.height*f/i.width;if(!isFinite(b)||b<=0)throw new Error("Ukuran halaman PDF tidak valid.");const u=new p({orientation:"p",unit:"mm",format:[f,b]});u.addImage(d,"JPEG",0,0,f,b),u.save(`${l}.pdf`),typeof window.showToast=="function"&&window.showToast("File PDF Berhasil Disimpan!")}}catch(t){console.error("Export Error: ",t),typeof window.showToast=="function"&&window.showToast(t&&t.message?`Gagal: ${t.message}`:"Gagal memproses dokumen.");const a=document.getElementById("doc-clone-printing");a&&a.parentElement&&document.body.removeChild(a.parentElement)}finally{D(),ee(!1)}}};window.openDocPreview=Lr;window.fitDocPreview=fa;window.closeDocPreviewModal=Ir;window.printDocA4=jr;window.exportDocFile=Er;const Rs=()=>{m("voucher-input");const e=(C("voucher-input")||"").toUpperCase().trim(),t=(n.vouchers||[]).find(s=>(s.code||"").toUpperCase()===e);L("voucher-msg-container");const a=typeof window.getEffP=="function"?window.getEffP:s=>s.effectivePrice||s.price||0,r=R.reduce((s,o)=>s+(parseFloat(a(o))||0)*(parseFloat(o.qty)||0),0);if(t){let s=!0;if(t.targetProduct&&t.targetProduct!==""){const o=parseInt(t.targetProduct);s=R.some(i=>i.id===o)}t.targetProduct&&t.targetProduct!==""&&!s?(xe(null),P("voucher-msg",'<i class="fa-solid fa-box mr-1"></i> Khusus Produk Tertentu!'),m("voucher-msg")&&(m("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):t.minPurchase&&parseFloat(t.minPurchase)>0&&r<parseFloat(t.minPurchase)?(xe(null),P("voucher-msg",`<i class="fa-solid fa-circle-exclamation mr-1"></i> Minimal belanja ${x(t.minPurchase)}`),m("voucher-msg")&&(m("voucher-msg").className="text-sm font-bold text-amber-500 dark:text-amber-400")):t.type&&t.type.includes("shipping")&&B.deliveryMethod!=="delivery"?(xe(null),P("voucher-msg",'<i class="fa-solid fa-motorcycle mr-1"></i> Khusus pesanan dikirim kurir!'),m("voucher-msg")&&(m("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):(xe(t),P("voucher-msg",'<i class="fa-solid fa-check-circle mr-1"></i> Voucher Diterapkan!'),m("voucher-msg")&&(m("voucher-msg").className="text-sm font-bold text-[var(--color-primary)]"))}else e===""?(xe(null),$("voucher-msg-container"),typeof window.rPay=="function"&&window.rPay()):(xe(null),P("voucher-msg",'<i class="fa-solid fa-times-circle mr-1"></i> Kode Tidak Valid'),m("voucher-msg")&&(m("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400"));typeof window.rPay=="function"&&window.rPay()},_r=()=>{let e=document.getElementById("voucher-modal");e||(e=document.createElement("div"),e.id="voucher-modal",e.className="fixed inset-0 z-[115] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=r=>{r.target===e&&ba()},document.body.appendChild(e));const t=(n.vouchers||[]).filter(r=>r.isShow!==!1&&r.isShow!=="false"),a=t.length?t.map(r=>{let s="";r.type==="percent"?s=`Diskon ${r.value}%`:r.type==="shipping_free"?s="Gratis Ongkir":r.type==="shipping_flat"?s=`Diskon Ongkir ${x(r.value)}`:s=`Potongan ${x(r.value)}`;const o=r.minPurchase&&parseFloat(r.minPurchase)>0?`Min. belanja ${x(r.minPurchase)}`:"Tanpa minimal belanja";return`
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:border-[var(--color-primary)] transition-all shadow-xs">
            <div class="flex items-start gap-3.5 min-w-0">
                <div class="w-11 h-11 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-lg shrink-0 shadow-sm mt-0.5">
                    <i class="fa-solid fa-ticket"></i>
                </div>
                <div class="min-w-0">
                    <div class="flex flex-wrap items-center gap-2 mb-1.5">
                        <span class="font-extrabold text-sm font-mono tracking-wider text-slate-800 dark:text-white bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700 select-all">${c(r.code)}</span>
                        <span class="primary-bg text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase whitespace-nowrap shadow-2xs">${s}</span>
                    </div>
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-[var(--color-primary)] text-xs"></i> ${o}</p>
                </div>
            </div>
            <div class="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-700">
                <button type="button" onclick="copyVoucherCode('${c(r.code)}')" class="flex-1 md:flex-initial bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-2xs">
                    <i class="fa-regular fa-copy"></i> Salin
                </button>
                <button type="button" onclick="useVoucherCode('${c(r.code)}')" class="flex-1 md:flex-initial primary-bg text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm">
                    Gunakan <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
            </div>
        </div>`}).join(""):`
        <div class="p-8 text-center">
            <div class="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mx-auto mb-3">
                <i class="fa-solid fa-ticket text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-800 dark:text-white mb-1">Belum Ada Kupon Promo</p>
            <p class="text-xs text-slate-500 dark:text-slate-400">Saat ini belum ada promo aktif. Silakan cek kembali nanti!</p>
        </div>
    `;e.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2">
                    <i class="fa-solid fa-ticket text-[var(--color-primary)]"></i> Kupon &amp; Voucher Promo
                </h3>
                <button onclick="closeVoucherModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3.5">
                ${a}
            </div>
        </div>`,e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("voucher")},Rr=e=>{navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>{typeof window.showToast=="function"&&window.showToast(`✅ Kode "${e}" disalin ke clipboard!`)}).catch(()=>{typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${e}`)}):typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${e}`)},Fr=e=>{ba();const t=m("voucher-input");t&&(t.value=e,Rs()),R.length>0?typeof window.changeView=="function"&&window.changeView("view-checkout"):(typeof window.showToast=="function"&&window.showToast(`Kode "${e}" siap digunakan saat checkout belanja!`),typeof window.changeView=="function"&&window.changeView("view-catalog"))},ba=()=>{const e=document.getElementById("voucher-modal");!e||e.style.display==="none"||(e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250))};window.applyVoucher=Rs;window.openVoucherModal=_r;window.closeVoucherModal=ba;window.copyVoucherCode=Rr;window.useVoucherCode=Fr;const zt=new Map,Nr=3*60*1e3,Br=()=>{const e=m("reward-catalog-container");if(!e)return;const t=n.store.showRewardCatalog!==!1&&n.store.showRewardCatalog!=="false",a=(n.rewards||[]).filter(s=>s.isActive!=="false"&&s.isActive!==!1);if(!t||a.length===0){e.classList.add("hidden");return}typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime(),e.classList.remove("hidden");let r=`
    <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-slate-800 dark:text-white text-sm sm:text-base tracking-tight flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-[var(--color-primary)] flex items-center justify-center text-white shadow-sm">
                <i class="fa-solid fa-gift text-sm"></i>
            </div> KATALOG HADIAH POIN PELANGGAN
        </h3>
    </div>
    <div class="flex gap-4 overflow-x-auto hide-scrollbar snap-x pb-6 pt-2">
        ${a.map(s=>`
            <div class="w-[140px] sm:w-[160px] shrink-0 snap-start relative group cursor-pointer active:scale-95 transition-all duration-300" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Tukarkan hadiah ini saat checkout menggunakan poin belanja Anda!');">
                <div class="w-full bg-[var(--color-primary)] rounded-[1.25rem] shadow-md hover:shadow-[0_12px_28px_-6px_rgba(var(--color-primary-rgb),0.4)] hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 flex flex-col relative overflow-hidden border border-white/20 text-white p-2">
                    <div class="absolute -right-4 -top-4 w-24 h-24 bg-white/20 rounded-full blur-xl pointer-events-none"></div>
                    <div class="absolute bottom-11 -left-3 w-6 h-6 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-r border-white/20 z-20 pointer-events-none transition-colors duration-400 shadow-inner"></div>
                    <div class="absolute bottom-11 -right-3 w-6 h-6 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-l border-white/20 z-20 pointer-events-none transition-colors duration-400 shadow-inner"></div>
                    <div class="absolute bottom-14 left-2 right-2 border-t border-dashed border-white/40 z-10 pointer-events-none"></div>
                    <div class="w-full aspect-square rounded-xl bg-white flex items-center justify-center overflow-hidden relative shadow-inner z-0">
                        <img loading="lazy" src="${c(s.img)}" alt="${c(s.name)}" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-2" onerror="this.onerror=null;this.src='https://placehold.co/400?text=Hadiah'">
                        <div class="absolute top-1.5 left-1.5 bg-rose-500 text-white text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm uppercase tracking-widest"><i class="fa-solid fa-gift mr-1"></i>Gratis</div>
                        <div class="absolute top-1.5 right-1.5 bg-[var(--color-primary)] text-white text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm border border-white/20">${parseFloat(s.pointsCost||s.pointsRequired)||0} Poin</div>
                    </div>
                    <div class="w-full h-6 shrink-0"></div>
                    <div class="h-8 w-full px-1 flex flex-col justify-center items-center relative z-0 shrink-0 mb-1">
                        <h4 class="text-[10px] sm:text-[11px] font-bold text-white leading-tight line-clamp-2 uppercase tracking-widest text-center drop-shadow-sm">${c(s.name)}</h4>
                    </div>
                </div>
            </div>`).join("")}
    </div>`;e.innerHTML=r};let Na=null;const Or=()=>{clearTimeout(Na),Na=setTimeout(async()=>{const t=(window.normalizeWA||(s=>(s||"").replace(/\D/g,"").replace(/^0/,"62")))(C("cust-wa")),a=m("member-status-banner");if(!a)return;if(!t||t.length<10){$(a),$("payment-option-tempo"),Ye(null),Ce(null);return}const r=zt.get(t);if(r&&Date.now()-r.timestamp<Nr){r.data?(Ye(r.data),a.className="mt-3 p-4 rounded-2xl border border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] flex items-center justify-between gap-3",a.innerHTML='<p class="text-[11px] font-bold text-[var(--color-primary)] leading-snug"><i class="fa-solid fa-circle-check mr-1"></i>Nomor Anda terdaftar sebagai pelanggan toko kami!</p><button type="button" onclick="openMemberModal()" class="shrink-0 bg-[var(--color-primary)] hover:opacity-90 text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-2.5 rounded-xl shadow-sm active:scale-95 transition-all whitespace-nowrap">Lihat Data Saya</button>',L(a),L("payment-option-tempo")):(Ye(null),Ce(null),$(a),$("payment-option-tempo"));return}try{const s=await k.collection("freshmart").doc("cms_data").collection("customers").doc(t).get();if(s.exists){const o=s.data();zt.set(t,{data:o,timestamp:Date.now()}),Ye(o),a.className="mt-3 p-4 rounded-2xl border border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] flex items-center justify-between gap-3",a.innerHTML='<p class="text-[11px] font-bold text-[var(--color-primary)] leading-snug"><i class="fa-solid fa-circle-check mr-1"></i>Nomor Anda terdaftar sebagai pelanggan toko kami!</p><button type="button" onclick="openMemberModal()" class="shrink-0 bg-[var(--color-primary)] hover:opacity-90 text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-2.5 rounded-xl shadow-sm active:scale-95 transition-all whitespace-nowrap">Lihat Data Saya</button>',L(a),L("payment-option-tempo")}else zt.set(t,{data:null,timestamp:Date.now()}),Ye(null),Ce(null),$(a),$("payment-option-tempo")}catch{}},500)},qr=()=>{typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();let e=document.getElementById("member-modal");e||(e=document.createElement("div"),e.id="member-modal",e.className="fixed inset-0 z-[115] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=t=>{t.target===e&&Fs()},document.body.appendChild(e)),e.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-crown text-amber-400"></i> Poin &amp; Hadiah Member</h3>
                <button onclick="closeMemberModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5" id="member-modal-body"></div>
        </div>`,St(),e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("member")},St=()=>{const e=(n.rewards||[]).filter(r=>r.isActive!=="false"&&r.isActive!==!1),t=$e&&parseFloat($e.points)||0,a=e.length?e.map(r=>{const s=(parseFloat(r.stock)||0)>0,o=$e&&t>=(parseFloat(r.pointsCost)||0)&&s,i=Pe&&Pe.id===r.id;return`
        <div class="flex items-center gap-3 p-4 rounded-[1.25rem] border ${i?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)]":"border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50"}">
            ${r.img?`<img src="${c(r.img)}" class="w-14 h-14 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.style.display='none'" loading="lazy">`:'<div class="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 shrink-0"><i class="fa-solid fa-gift text-xl"></i></div>'}
            <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${c(r.name)}</p>
                <p class="text-[11px] font-bold text-[var(--color-primary)] mt-0.5"><i class="fa-solid fa-star mr-1"></i>${parseFloat(r.pointsCost)||0} Poin</p>
                ${s?"":'<p class="text-[10px] font-bold text-rose-500 mt-0.5">Stok hadiah kosong</p>'}
            </div>
            ${$e?i?'<button type="button" onclick="deselectReward()" class="shrink-0 bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-bold uppercase px-3 py-2.5 rounded-xl active:scale-95 transition-all whitespace-nowrap">Batal</button>':`<button type="button" ${o?"":"disabled"} onclick="selectReward(${r.id})" class="shrink-0 ${o?"primary-bg hover:opacity-90 text-white active:scale-95":"bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"} text-[10px] font-bold uppercase px-3 py-2.5 rounded-xl transition-all whitespace-nowrap">Pilih</button>`:`<span class="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg">${parseFloat(r.pointsCost)||0} Poin</span>`}
        </div>`}).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-3">Belum ada program hadiah yang tersedia.</p>';$e?P("member-modal-body",`
            <div class="bg-[var(--color-primary)] rounded-[1.5rem] p-5 text-white shadow-lg">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <p class="text-[10px] font-bold uppercase tracking-widest opacity-80">Nama Pelanggan</p>
                        <p class="text-base font-bold">${c($e.name||"Pelanggan")}</p>
                    </div>
                    <button type="button" onclick="setCurrentMember(null); rMemberModalBody();" class="bg-white/20 hover:bg-white/30 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-lg transition-all active:scale-95">Keluar</button>
                </div>
                <p class="text-[10px] font-bold uppercase tracking-widest opacity-80 mt-2">No. WhatsApp</p>
                <p class="text-sm font-bold mb-3">+${c($e.phone||"")}</p>
                <div class="flex items-center gap-2 bg-white/15 rounded-xl px-4 py-3 mt-2">
                    <i class="fa-solid fa-star text-amber-300 text-lg"></i>
                    <p class="text-xl font-bold">${t}</p>
                    <p class="text-[11px] font-bold opacity-90">Poin Terkumpul</p>
                </div>
            </div>
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Tersedia</p>
                <div class="space-y-2.5">${a}</div>
            </div>
            ${Pe?`<div class="bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[var(--color-primary)]/30 rounded-xl p-3.5 text-[11px] font-bold text-[var(--color-primary)]"><i class="fa-solid fa-circle-info mr-1"></i>Hadiah "<b>${c(Pe.name)}</b>" akan otomatis ditukar saat pesanan Anda diproses di checkout.</div>`:""}
        `):P("member-modal-body",`
            <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-3">
                <div class="flex items-center gap-2.5 text-slate-800 dark:text-white font-bold text-sm">
                    <div class="w-8 h-8 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-sm shrink-0">
                        <i class="fa-solid fa-search"></i>
                    </div>
                    <span>Cek Poin &amp; Status Member</span>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">Masukkan nomor WhatsApp yang pernah Anda gunakan saat berbelanja di toko kami:</p>
                <div class="flex gap-2">
                    <div class="relative flex-1">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">+62</span>
                        <input type="tel" id="member-lookup-input" class="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-3 text-xs font-bold text-slate-800 outline-none focus:border-[var(--color-primary)] dark:border-slate-700 dark:bg-slate-800 dark:text-white" placeholder="81234567890" inputmode="numeric" />
                    </div>
                    <button type="button" onclick="lookupMemberPoints()" class="primary-bg text-white px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 transition-all active:scale-95 shadow-sm">
                        Cek Poin
                    </button>
                </div>
                <div id="member-lookup-result" class="hidden text-xs font-bold mt-2"></div>
            </div>

            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${a}</div>
            </div>
        `)},Ur=async()=>{const e=document.getElementById("member-lookup-input"),t=document.getElementById("member-lookup-result");if(!e||!t)return;let a=e.value.replace(/\D/g,"");if(!a||a.length<9){t.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",t.textContent="Masukkan minimal 9 digit nomor WhatsApp!",t.classList.remove("hidden");return}a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),t.className="text-xs font-bold text-[var(--color-primary)] p-2.5 primary-bg-soft rounded-xl",t.textContent="Mengecek data member...",t.classList.remove("hidden");try{const r=await k.collection("freshmart").doc("cms_data").collection("customers").doc(a).get();if(r.exists){const s=r.data();Ye(s),St(),typeof window.showToast=="function"&&window.showToast(`Selamat datang, ${s.name||"Pelanggan"}!`)}else t.className="text-xs font-bold text-amber-600 dark:text-amber-400 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl leading-relaxed",t.innerHTML=`<i class="fa-solid fa-circle-info mr-1"></i> Nomor <b>+${c(a)}</b> belum terdaftar. Lakukan pesanan pertama Anda untuk otomatis mengumpulkan poin member!`}catch{t.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",t.textContent="Gagal mengecek data. Silakan periksa koneksi internet Anda."}},Hr=e=>{const t=(n.rewards||[]).find(r=>r.id===e);if(!t)return;if((parseFloat($e?.points)||0)<(parseFloat(t.pointsCost)||0)){typeof window.showToast=="function"&&window.showToast("Poin Anda belum cukup untuk hadiah ini!");return}if((parseFloat(t.stock)||0)<=0){typeof window.showToast=="function"&&window.showToast("Maaf, stok hadiah ini sedang kosong!");return}Ce({id:t.id,name:t.name,pointsCost:parseFloat(t.pointsCost)||0}),St(),typeof window.showToast=="function"&&window.showToast(`Hadiah "${t.name}" dipilih! Lanjutkan checkout untuk menukarnya.`)},Vr=()=>{Ce(null),St()},Fs=(e=!1)=>{const t=document.getElementById("member-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250))};window.renderRewardCatalog=Br;window.checkMemberStatus=Or;window.openMemberModal=qr;window.rMemberModalBody=St;window.lookupMemberPoints=Ur;window.selectReward=Hr;window.deselectReward=Vr;window.closeMemberModal=Fs;const Ct=()=>{const e=n.store.useStock===!0||n.store.useStock==="true",t=R.filter(a=>{const r=n.products.find(s=>s.id===a.id);if(!r||r.isActive==="false"||r.isActive===!1)return!1;if(a.variantName){const s=(r.variants||[]).find(o=>o.name===a.variantName);if(!s||s.isActive===!1||s.isActive==="false"||e&&(parseFloat(s.stock)||0)<=0)return!1}else if(e&&(parseFloat(r.stock)||0)<=0)return!1;return!0});nt(t),te("freshmart_cart",JSON.stringify(R))},Ae=()=>{te("freshmart_cart",JSON.stringify(R));const e=typeof window.getEffP=="function"?window.getEffP:o=>o.price||0,t=parseFloat(R.reduce((o,i)=>o+(parseFloat(i.qty)||0),0).toFixed(2)),a=R.reduce((o,i)=>o+e(i)*(parseFloat(i.qty)||0),0);U("cart-badge",t.toString()),U("cart-total-preview",x(a));const r=m("cart-badge");r&&r.classList.toggle("scale-0",t<=0);const s=m("floating-cart-container");s&&(t>0?(s.classList.remove("scale-0","pointer-events-none"),s.classList.add("scale-100","pointer-events-auto")):(s.classList.remove("scale-100","pointer-events-auto"),s.classList.add("scale-0","pointer-events-none")))},et=()=>{if(!R.length){L("cart-empty-state"),$("cart-bottom-bar"),$("btn-clear-cart"),L("spacer-cart"),P("cart-items-container","");return}$("cart-empty-state"),L("cart-bottom-bar"),L("btn-clear-cart"),$("spacer-cart");const e=typeof window.getEffP=="function"?window.getEffP:a=>a.price||0;let t=0;P("cart-items-container",R.map((a,r)=>{let s=parseFloat(a.qty)||0,o=e(a),i=o<a.price;t+=o*s;let l=a.colorCode?`<span class="w-3.5 h-3.5 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 shrink-0" style="background-color: ${c(a.colorCode)};"></span>`:"";return`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700 shadow-sm flex gap-4 relative overflow-hidden group min-w-0 hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all duration-300">
            
            <div class="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white border border-slate-100 dark:border-slate-700/50 p-2 flex items-center justify-center overflow-hidden">
                <img loading="lazy" src="${c(a.img)}" alt="${c(a.name)}" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'">
            </div>
            
            <div class="flex-1 flex flex-col min-w-0 relative">
                <button onclick="rmCart(${r})" class="absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/50 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 transition-all active:scale-90 border border-slate-100 dark:border-slate-600 shadow-sm z-10"><i class="fa-solid fa-xmark text-sm"></i></button>
                
                <h4 class="text-[13px] sm:text-sm font-bold text-slate-800 dark:text-white leading-snug line-clamp-2 mb-1.5 pr-10 uppercase tracking-wide">${c(a.name)}</h4>
                
                <div class="flex flex-wrap items-center gap-1.5 mb-2.5">
                    ${i?'<span class="bg-amber-500 text-white px-2.5 py-0.5 rounded-full text-[9px] font-bold shadow-sm flex items-center gap-1 uppercase tracking-wide"><i class="fa-solid fa-layer-group"></i> Grosir</span>':""}
                    ${l}
                    ${a.variantName?`<span class="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[9px] font-bold border border-slate-200 dark:border-slate-600 uppercase tracking-wide">${c(a.variantName)}</span>`:""}
                    ${a.poTime?`<span class="amber-badge px-2 py-0.5 rounded-full text-[9px] font-bold flex items-center uppercase tracking-wide"><i class="fa-solid fa-clock mr-1"></i> PO ${c(a.poTime)}</span>`:""}
                </div>
                
                <div class="flex justify-between items-end mt-auto pt-1">
                    <div>
                        ${i?`<p class="text-[10px] line-through text-slate-400 font-bold mb-0.5">${x(a.price)}</p>`:""}
                        <div class="flex items-baseline gap-1">
                            <p class="text-[var(--color-primary)] font-bold text-base sm:text-lg leading-none tracking-tight">${x(o)}</p>
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
        </div>`}).join("")),U("cart-subtotal",x(t))},Gr=(e,t)=>{let a=parseFloat(t);if(isNaN(a)||a<=0)R.splice(e,1);else{if(n.store.useStock===!0||n.store.useStock==="true"){const s=R[e],o=n.products.find(i=>i.id===s.id);if(o){const i=s.variantName?parseFloat(((o.variants||[]).find(l=>l.name===s.variantName)||{}).stock)||0:parseFloat(o.stock)||0;a>i&&(a=i,typeof window.showToast=="function"&&window.showToast(`Maks stok: ${i}`))}}R[e].qty=parseFloat(a.toFixed(2))}et(),Ae()},Kr=(e,t)=>{let a=parseFloat((parseFloat(R[e].qty)+t).toFixed(2));if(a<=0)R.splice(e,1);else{if((n.store.useStock===!0||n.store.useStock==="true")&&t>0){const s=R[e],o=n.products.find(i=>i.id===s.id);if(o){const i=s.variantName?parseFloat(((o.variants||[]).find(l=>l.name===s.variantName)||{}).stock)||0:parseFloat(o.stock)||0;a>i&&(a=i,typeof window.showToast=="function"&&window.showToast(`Maks stok: ${i}`))}}R[e].qty=a}et(),Ae()},Wr=e=>{R.splice(e,1),et(),Ae()},Qr=()=>{typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Semua barang akan dihapus. Lanjutkan?",()=>{nt([]),Ae(),et(),typeof window.showToast=="function"&&window.showToast("Dibersihkan")}):(nt([]),Ae(),et())},zr=()=>{if(window.isAdm){typeof window.showConfirm=="function"&&window.showConfirm("Akses Ditolak","Anda sedang login sebagai Seller. Silakan logout terlebih dahulu untuk membuat pesanan sebagai pelanggan.",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Logout Sekarang",!1);return}R.length&&typeof window.changeView=="function"&&window.changeView("view-checkout")};window.sanitizeCart=Ct;window.updCart=Ae;window.renderCart=et;window.setCQty=Gr;window.updCQty=Kr;window.rmCart=Wr;window.clearCart=Qr;window.validateCartToCheckout=zr;const Jr=()=>{if(n.store.isDeliveryEnabled===!1&&n.store.isPickupEnabled===!1){typeof window.showToast=="function"&&window.showToast("Toko tutup!");return}const e=C("cust-name"),t=(document.querySelector('input[name="delivery-method"]:checked')||{}).value;if(!e||!t){typeof window.showToast=="function"&&window.showToast("Lengkapi form nama!");return}let a=C("cust-wa").replace(/\D/g,"");if(!a||a.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp wajib diisi! (min. 9 digit)");return}if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),B.name=e,B.deliveryMethod=t,B.note=C("cust-note"),B.wa=a,t==="delivery"){if(B.address=C("cust-address"),!B.address||!B.lat||!B.lng){typeof window.showToast=="function"&&window.showToast("Alamat & GPS wajib!");return}const r=typeof window.getDist=="function"?window.getDist:()=>0;B.distance=r(parseFloat(n.store.lat||0),parseFloat(n.store.lng||0),B.lat,B.lng)||0}else B.address="Ambil di Toko",B.distance=0;N&&N.type&&N.type.includes("shipping")&&t!=="delivery"&&xe(null),m("voucher-input")&&!N&&(m("voucher-input").value="",$("voucher-msg-container")),typeof window.changeView=="function"&&window.changeView("view-payment")},ga=()=>{Z("address-container","hidden",(document.querySelector('input[name="delivery-method"]:checked')||{}).value==="pickup")},Ns=()=>{const e=m("tnc-checkbox"),t=m("btn-process-order");!e||!t||(e.checked?t.classList.remove("btn-disabled"):t.classList.add("btn-disabled"))},Bs=()=>{if(!R.length){typeof window.showToast=="function"&&window.showToast("Keranjang belanja kosong!"),typeof window.changeView=="function"&&window.changeView("view-catalog",!0);return}if(!B.name){typeof window.showToast=="function"&&window.showToast("Lengkapi data pengiriman terlebih dahulu!"),typeof window.changeView=="function"&&window.changeView("view-checkout",!0);return}const e=typeof window.getEffP=="function"?window.getEffP:h=>h.price||0,t=R.reduce((h,T)=>h+(parseFloat(e(T))||0)*(parseFloat(T.qty)||0),0);let a=0,r=0,s=0;if(B.deliveryMethod==="delivery"&&(a=Math.ceil((parseFloat(B.distance)||0)*(parseFloat(n.store.costPerKm)||0)/500)*500),N&&(N.minPurchase&&parseFloat(N.minPurchase)>0&&t<parseFloat(N.minPurchase)?(xe(null),$("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast(`Voucher dibatalkan (min. belanja ${x(N.minPurchase)})`)):N.targetProduct&&!R.some(h=>h.id===parseInt(N.targetProduct))&&(xe(null),$("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast("Voucher dibatalkan (produk khusus dihapus)"))),N){let h=t;if(N.targetProduct&&N.targetProduct!==""){const T=parseInt(N.targetProduct);h=R.filter(M=>M.id===T).reduce((M,V)=>M+(parseFloat(e(V))||0)*(parseFloat(V.qty)||0),0)}if(N.type==="shipping_free")r=a;else if(N.type==="shipping_flat")r=parseFloat(N.value)||0;else if(N.type==="percent"){let T=h*((parseFloat(N.value)||0)/100);N.maxDiscount&&parseFloat(N.maxDiscount)>0&&(T=Math.min(T,parseFloat(N.maxDiscount))),s=T}else s=parseFloat(N.value)||0,s=Math.min(s,h)}r=Math.min(r,a),s=Math.min(s,t);const o=Math.max(0,t-s+(a-r)),l=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(o),d=l.ppnAmount,p=o+l.grandTotalAdd;U("summary-subtotal",x(t)),Z("summary-shipping-row","hidden",B.deliveryMethod!=="delivery");const f=m("summary-discount-row");if(f)if(s>0||r>0){f.classList.remove("hidden");let h="";s>0&&(h+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Promo</p><p class="text-[13px] font-bold text-rose-500">-${x(s)}</p></div>`),r>0&&(h+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Ongkir</p><p class="text-[13px] font-bold text-rose-500">-${x(r)}</p></div>`),f.innerHTML=h}else f.classList.add("hidden");B.deliveryMethod==="delivery"&&(U("summary-shipping",x(a)),U("summary-distance",`(${B.distance.toFixed(1)}km)`)),U("summary-total",x(p)),m("btn-total-preview")&&U("btn-total-preview",x(p));const b=m("summary-ppn-row");b&&(l.ppnEnabled&&d>0?(b.classList.remove("hidden"),l.ppnType==="inclusive"?(U("summary-ppn-label",`Termasuk PPN (${l.ppnRate}%)`),U("summary-ppn",x(d))):(U("summary-ppn-label",`PPN (${l.ppnRate}%)`),U("summary-ppn",`+${x(d)}`))):b.classList.add("hidden")),U("payment-cust-name",B.name||"-"),m("payment-cust-wa")&&(m("payment-cust-wa").textContent=B.wa?"+"+B.wa:"-"),U("payment-cust-method",B.deliveryMethod==="delivery"?`Dikirim (${B.distance.toFixed(1)}km)`:"Ambil di Toko"),U("payment-cust-address",B.address||"-"),P("payment-items-preview",R.map(h=>{const T=h.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${c(h.variantName)}</span>`:"",E=h.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${c(h.poTime)}</span>`:"";return`
        <div class="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
            <div class="flex items-center gap-3.5 min-w-0">
                <img loading="lazy" src="${c(h.img)}" alt="${c(h.name)}" class="w-12 h-12 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'">
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate mb-1" title="${c(h.name)}">${c(h.name)}</p>
                    ${h.variantName||h.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${T}
                        ${E}
                    </div>`:""}
                    <p class="text-[11px] text-[var(--color-primary)] font-bold">${parseFloat(h.qty)} ${c(h.unit||"pcs")} x ${x(e(h))}</p>
                </div>
            </div>
            <div class="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap ml-3 shrink-0">${x(e(h)*parseFloat(h.qty))}</div>
        </div>`}).join("")+(Pe?`<div class="flex justify-between items-center bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] p-4 rounded-[1.25rem] border border-[var(--color-primary)]/30 shadow-sm min-w-0"><div class="flex items-center gap-3.5 min-w-0"><div class="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div><div class="min-w-0"><p class="text-sm font-bold text-[var(--color-primary)] truncate">${c(Pe.name)}</p><p class="text-[11px] text-[var(--color-primary)] font-bold mt-1"><i class="fa-solid fa-star mr-1"></i>Tukar ${Pe.pointsCost} Poin (Gratis)</p></div></div><button type="button" onclick="if(typeof deselectReward==='function') deselectReward(); rPay();" class="text-[10px] font-bold text-rose-500 uppercase shrink-0 ml-3">Batal</button></div>`:"")),B.note?(U("payment-note-text",`"${c(B.note)}"`),L("payment-note-preview")):$("payment-note-preview"),P("dynamic-banks-container",n.banks?.length?n.banks.map(h=>`<div class="bg-white dark:bg-slate-800 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700 shadow-sm"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Bank ${c(h.bankName)}</p><p class="text-lg font-bold text-[var(--color-primary)] tracking-wide">${c(h.bankAccount)}</p><p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1.5">a.n <span class="font-bold text-slate-700 dark:text-white">${c(h.bankOwner)}</span></p></div>`).join(""):'<div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 p-4 rounded-[1.25rem] text-center"><p class="text-sm text-rose-500 dark:text-rose-400 font-bold">Rekening belum diatur.</p></div>');const u=m("payment-option-cashier"),w=m("payment-option-cod");if(u&&w){if(B.deliveryMethod==="pickup"){if(L("payment-option-cashier"),$("payment-option-cod"),(document.querySelector('input[name="payment"]:checked')||{}).value==="cod"){const h=document.querySelector('input[value="cashier"]');h&&(h.checked=!0)}}else{$("payment-option-cashier"),L("payment-option-cod");const h=(document.querySelector('input[name="payment"]:checked')||{}).value;if(h==="cashier"||!h){const T=document.querySelector('input[value="cod"]');T&&(T.checked=!0)}}typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()}const y=m("tnc-checkbox");y&&(y.checked=!1,Ns())},Yr=async()=>{if(!m("tnc-checkbox").checked||Qe)return;if(window.isAdm){typeof window.showToast=="function"&&window.showToast("Anda login sebagai Seller. Logout dulu untuk membuat pesanan.");return}const e=we("freshmart_last_order");if(e&&Date.now()-parseInt(e)<6e4){typeof window.showToast=="function"&&window.showToast("Tunggu 1 menit untuk pesanan baru!");return}const t=typeof window.getEffP=="function"?window.getEffP:o=>o.price||0,a=typeof window.getEffHpp=="function"?window.getEffHpp:()=>0,r=typeof window.getEffPoin=="function"?window.getEffPoin:()=>0;let s=!1;if(R.forEach(o=>{const i=n.products.find(d=>d.id===o.id);if(!i)return;const l=o.variantName?((i.variants||[]).find(d=>d.name===o.variantName)||{}).price??i.price:i.price;l!==void 0&&Math.abs(o.price-l)>1&&(o.price=l,s=!0),o.poin=r(o)}),s){te("freshmart_cart",JSON.stringify(R)),typeof window.renderCart=="function"&&window.renderCart(),Bs(),typeof window.showToast=="function"&&window.showToast("Harga produk telah diperbarui. Periksa kembali sebelum order.");return}ee(!0),O("Proses Pesanan...");try{const o=R.reduce((v,_)=>v+(parseFloat(t(_))||0)*(parseFloat(_.qty)||0),0);let i=0,l=0,d=0;B.deliveryMethod==="delivery"&&(i=Math.ceil((parseFloat(B.distance)||0)*(parseFloat(n.store.costPerKm)||0)/500)*500);const p=n.store.useStock===!0||n.store.useStock==="true";if(p)for(const v of R){const _=n.products.find(j=>j.id===v.id);if(!_)continue;const Y=parseFloat(v.qty)||0;if(v.variantName){const j=(_.variants||[]).find(Q=>Q.name===v.variantName),G=parseFloat(j&&j.stock!==void 0?j.stock:0);if(G<Y){ee(!1),D(),typeof window.showToast=="function"&&window.showToast(`Stok ${v.name} (${v.variantName}) tidak cukup! Sisa: ${G}`);return}}else{const j=parseFloat(_.stock!==void 0?_.stock:0);if(j<Y){ee(!1),D(),typeof window.showToast=="function"&&window.showToast(`Stok ${v.name} tidak cukup! Sisa: ${j}`);return}}}if(N){let v=o;if(N.targetProduct&&N.targetProduct!==""){const _=parseInt(N.targetProduct);v=R.filter(j=>j.id===_).reduce((j,G)=>j+(parseFloat(t(G))||0)*(parseFloat(G.qty)||0),0)}if(N.minPurchase&&parseFloat(N.minPurchase)>0&&o<parseFloat(N.minPurchase))xe(null);else if(N.targetProduct&&N.targetProduct!==""&&v===0)xe(null);else if(N.type&&N.type.includes("shipping")&&B.deliveryMethod!=="delivery")xe(null);else if(N.type==="shipping_free")l=i;else if(N.type==="shipping_flat")l=parseFloat(N.value)||0;else if(N.type==="percent"){let _=v*((parseFloat(N.value)||0)/100);N.maxDiscount&&parseFloat(N.maxDiscount)>0&&(_=Math.min(_,parseFloat(N.maxDiscount))),d=_}else d=parseFloat(N.value)||0,d=Math.min(d,v)}l=Math.min(l,i),d=Math.min(d,o);const f=Math.max(0,o-d+(i-l)),u=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(f),w=u.ppnAmount,y=u.dppAmount,h=f+u.grandTotalAdd,T=(document.querySelector('input[name="payment"]:checked')||{}).value,E=T==="transfer"||T==="qris"||T==="tempo",M=window.buktiGDriveUploaded&&window.buktiPaymentUrl&&!window.buktiPaymentUrl.startsWith("data:");if(E&&!M){if(ee(!1),D(),!window.buktiPaymentFile){typeof window.showToast=="function"&&window.showToast("Upload bukti pembayaran terlebih dahulu!");return}typeof window.showToast=="function"&&window.showToast("Tunggu upload Google Drive selesai, atau coba lagi!");return}const V="ORD-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase();if(window.buktiPaymentFile&&!window.buktiGDriveUploaded)try{O("Upload Bukti ke Google Drive...");const v=await window.uploadBuktiToFirebase(window.buktiPaymentFile,V);if(v&&!v.startsWith("data:"))window.buktiPaymentUrl=v,window.buktiGDriveUploaded=!0;else{ee(!1),D(),typeof window.showToast=="function"&&window.showToast("❌ Upload bukti ke Google Drive gagal. Coba pilih gambar lagi!");return}O("Proses Pesanan...")}catch{ee(!1),D(),typeof window.showToast=="function"&&window.showToast("❌ Gagal upload bukti. Periksa koneksi dan coba lagi!");return}const I={orderId:V,timestamp:ue.firestore.FieldValue.serverTimestamp(),dateString:new Date().toISOString(),customer:B,items:R.map(v=>({...v,qty:parseFloat(v.qty),effectivePrice:t(v),poTime:v.poTime||"",hpp:a(v),poin:r(v)})),payment:{method:T,subtotal:o,shippingCost:i,shippingDiscount:l,productDiscount:d,ppnAmount:w,dppAmount:y,ppnRate:u.ppnEnabled?u.ppnRate:0,ppnType:u.ppnEnabled?u.ppnType:"exclusive",grandTotal:h},status:"Baru",buktiPayment:window.buktiPaymentUrl||null};if(T==="tempo"){const v=document.getElementById("tempo-dp-input");let _=v&&parseFloat(v.value)||0;_>h&&(_=h),I.payment.tempoDp=_,I.payment.tempoBalance=h-_,I.payment.tempoDueDate=Date.now()+30*24*60*60*1e3,I.payment.paymentStatus="hutang"}const S=k.collection("freshmart_orders").doc(V),q=R.reduce((v,_)=>v+r(_)*(parseFloat(_.qty)||0),0),K=k.collection("freshmart").doc("cms_data"),ne=B.wa?K.collection("customers").doc(B.wa):null,he=!!Pe;let F=null;if(p){const v={};R.forEach(j=>{const G=j.id!=null?j.id.toString():null;if(!G)return;v[G]||(v[G]={main:0,variants:{}});const Q=parseFloat(j.qty)||0;j.variantName?v[G].variants[j.variantName]=(v[G].variants[j.variantName]||0)+Q:v[G].main+=Q});const _=Object.keys(v),Y=_.map(j=>k.collection("freshmart").doc("cms_data").collection("products").doc(j));await k.runTransaction(async j=>{const G=he?k.collection("freshmart").doc("cms_data").collection("rewards").doc(Pe.id.toString()):null,Q=await Promise.all(Y.map(be=>j.get(be))),X=ne?await j.get(ne):null,ut=X&&X.exists&&G?await j.get(G):null,Ee=[];if(Q.forEach((be,ve)=>{if(!be.exists)return;const Ue=be.data(),ye=v[_[ve]];if(ye.main>0){const z=parseFloat(Ue.stock!==void 0?Ue.stock:0);z<ye.main&&Ee.push(`${Ue.name} (sisa ${z})`)}Object.keys(ye.variants).forEach(z=>{const _e=(Ue.variants||[]).find(ze=>ze.name===z),bt=parseFloat(_e&&_e.stock!==void 0?_e.stock:0);bt<ye.variants[z]&&Ee.push(`${Ue.name} (${z}, sisa ${bt})`)})}),Ee.length)throw new Error("STOK_TIDAK_CUKUP: "+Ee.join(", "));let ft=null,At=null;if(X&&X.exists){let be=parseFloat(X.data().points)||0;if(he){if(!ut||!ut.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const ve=ut.data();if(be<(parseFloat(ve.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(ve.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");ft=(parseFloat(ve.stock)||0)-1,be-=parseFloat(ve.pointsCost)||0,I.claimedReward={id:ve.id,name:ve.name,pointsCost:parseFloat(ve.pointsCost)||0,status:"pending",note:""}}be+=q,At=be,I.pointsEarned=q,I.customerPhone=B.wa,I.finalMemberPoints=be}else if(he)throw new Error("MEMBER_TIDAK_DITEMUKAN");Q.forEach((be,ve)=>{if(!be.exists)return;const Ue=_[ve],ye=v[Ue],z=JSON.parse(JSON.stringify(be.data())),_e={};ye.main>0&&(z.stock=Math.max(0,(parseFloat(z.stock)||0)-ye.main),_e.stock=z.stock,z.stock===0&&(z.isActive="false",_e.isActive="false"),z.totalSold=(parseFloat(z.totalSold)||0)+ye.main,_e.totalSold=z.totalSold),Object.keys(ye.variants).length>0&&z.variants&&(Object.keys(ye.variants).forEach(ze=>{const Je=(z.variants||[]).findIndex(rr=>rr.name===ze);Je>-1&&(z.variants[Je].stock=Math.max(0,(parseFloat(z.variants[Je].stock)||0)-ye.variants[ze]),z.variants[Je].stock===0&&(z.variants[Je].isActive=!1),z.variants[Je].totalSold=(parseFloat(z.variants[Je].totalSold)||0)+ye.variants[ze])}),_e.variants=z.variants);const bt=n.products.findIndex(ze=>ze.id.toString()===Ue);bt>-1&&(n.products[bt]=z),j.update(Y[ve],_e)}),j.set(S,I),At!==null&&(j.set(ne,{points:At},{merge:!0}),F=At),ft!==null&&j.set(G,{stock:ft},{merge:!0}),j.update(K,{lastUpdate:ue.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:_})}),n.lastUpdate=(parseInt(we("freshmart_last_update"))||n.lastUpdate||0)+1,te("freshmart_last_update",n.lastUpdate.toString()),te("freshmart_products",JSON.stringify(n.products))}else ne?await k.runTransaction(async v=>{const _=he?k.collection("freshmart").doc("cms_data").collection("rewards").doc(Pe.id.toString()):null,Y=await v.get(ne),j=Y.exists&&_?await v.get(_):null;if(Y.exists){let G=parseFloat(Y.data().points)||0,Q=null;if(he){if(!j||!j.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const X=j.data();if(G<(parseFloat(X.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(X.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");Q=(parseFloat(X.stock)||0)-1,G-=parseFloat(X.pointsCost)||0,I.claimedReward={id:X.id,name:X.name,pointsCost:parseFloat(X.pointsCost)||0,status:"pending",note:""}}G+=q,I.pointsEarned=q,I.customerPhone=B.wa,I.finalMemberPoints=G,v.set(S,I),v.set(ne,{points:G},{merge:!0}),F=G,Q!==null&&v.set(_,{stock:Q},{merge:!0})}else{if(he)throw new Error("MEMBER_TIDAK_DITEMUKAN");v.set(S,I)}}):await S.set(I);ie.unshift({orderId:V,date:new Date().toISOString(),total:h,itemCount:R.reduce((v,_)=>v+parseFloat(_.qty),0),status:"Baru",pointsEarned:I.pointsEarned||0,claimedReward:I.claimedReward||null,finalMemberPoints:F}),$t(ie);try{localStorage.setItem("freshmart_my_orders",JSON.stringify(ie)),localStorage.setItem("freshmart_last_order",Date.now().toString())}catch{}typeof analytics<"u"&&analytics.logEvent("purchase",{transaction_id:V,value:h,currency:"IDR"}),I.claimedReward&&F!==null?typeof window.showToast=="function"&&window.showToast(`✅ Hadiah "${I.claimedReward.name}" berhasil ditukar! Sisa poin Anda: ${F}`):typeof window.showToast=="function"&&window.showToast("✅ Pesanan berhasil dikirim ke admin!"),$e&&F!==null&&($e.points=F),setTimeout(()=>{nt([]),se("cust-name",""),se("cust-address",""),se("cust-note",""),se("cust-wa",""),window.buktiPaymentUrl=null,window.buktiPaymentFile=null,window.buktiGDriveUploaded=!1;const v=m("bukti-preview-wrap"),_=m("bukti-placeholder");v&&v.classList.add("hidden"),_&&_.classList.remove("hidden"),$("bukti-uploading"),$("bukti-success"),$("bukti-gdrive-error");const Y=m("bukti-file-input");Y&&(Y.value=""),yr({name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""}),xe(null),Ye(null),Ce(null);const j=m("member-status-banner");j&&$(j),m("voucher-input")&&(m("voucher-input").value=""),$("voucher-msg-container"),$("location-status"),m("btn-location")&&L("btn-location");const G=document.querySelector('input[name="delivery-method"][value="delivery"]');G&&(G.checked=!0,ga());const Q=document.querySelector('input[name="payment"][value="transfer"]');Q&&(Q.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()),typeof window.updCart=="function"&&window.updCart(),typeof window.renderCart=="function"&&window.renderCart(),typeof window.changeView=="function"&&window.changeView("view-catalog"),typeof window.showToast=="function"&&window.showToast("Pesanan Dibuat! 🎉")},2e3)}catch(o){const i=o.message||"Error";i.startsWith("STOK_TIDAK_CUKUP:")?typeof window.showToast=="function"&&window.showToast("Maaf, stok berubah: "+i.replace("STOK_TIDAK_CUKUP: ","")):i==="POIN_TIDAK_CUKUP"?(typeof window.showToast=="function"&&window.showToast("Maaf, poin Anda ternyata tidak cukup untuk hadiah ini. Silakan cek lagi."),Ce(null)):i==="STOK_HADIAH_HABIS"?(typeof window.showToast=="function"&&window.showToast("Maaf, stok hadiah yang dipilih baru saja habis. Silakan pilih hadiah lain."),Ce(null)):i==="HADIAH_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Hadiah yang dipilih sudah tidak tersedia. Silakan pilih ulang."),Ce(null)):i==="MEMBER_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Data member tidak ditemukan, klaim hadiah dibatalkan. Pesanan bisa dicoba lagi tanpa hadiah."),Ce(null)):typeof window.showToast=="function"&&window.showToast(o.code==="resource-exhausted"?"Quota Server Penuh!":"Gagal proses: "+i)}finally{ee(!1),D()}};window.validateAndGoToPayment=Jr;window.toggleDeliveryMethod=ga;window.toggleOrderButton=Ns;window.rPay=Bs;window.processOrder=Yr;const vt=()=>{const e=m("wishlist-badge");e&&(e.innerText=me.length,e.classList.toggle("scale-0",!me.length))},Xr=e=>{me.splice(e,1),te("freshmart_wishlist",JSON.stringify(me)),vt(),xa()},Zr=e=>{const t=me[e],a=n.products?.find(i=>i.id===t.id);if(!a||a.isActive==="false"||a.isActive===!1)return g(`${t.name} sudah tidak tersedia.`);const r=t.variantName?(a.variants||[]).find(i=>i.name===t.variantName):null;if(n.store?.useStock===!0||n.store?.useStock==="true"){if(t.variantName&&(!r||r.isActive===!1||r.isActive==="false"))return g(`Varian ${t.variantName} sudah tidak tersedia.`);const i=r?parseFloat(r.stock)||0:parseFloat(a.stock)||0,l=R.find(p=>p.id===t.id&&p.variantName===t.variantName),d=l&&parseFloat(l.qty)||0;if(i<=0||d>=i)return g(`Stok ${t.name} tidak mencukupi!`)}const o=R.find(i=>i.id===t.id&&i.variantName===t.variantName);if(o)o.qty=parseFloat((o.qty+1).toFixed(2));else{const i=r&&parseFloat(r.poin)>0?parseFloat(r.poin):parseFloat(a.poin)||0;R.push({id:a.id,name:a.name,variantName:t.variantName||"",price:r?r.price:a.price,img:r?.img||a.img,qty:1,unit:a.unit||"pcs",poTime:a.poTime||"",colorCode:r?.colorCode||"",poin:i})}Ae(),g("Ke Keranjang!"),typeof window.curViewName<"u"&&window.curViewName==="view-cart"&&et()},eo=()=>{Le("Hapus Favorit","Yakin ingin menghapus semua?",()=>{me.length=0,te("freshmart_wishlist",JSON.stringify(me)),vt(),xa(),g("Dibersihkan")})},xa=()=>{if(!me.length){L("wishlist-empty-state"),$("btn-clear-wishlist"),L("spacer-wishlist"),P("wishlist-items-container","");return}$("wishlist-empty-state"),L("btn-clear-wishlist"),$("spacer-wishlist"),P("wishlist-items-container",me.map((e,t)=>{let a=e.colorCode?`<span class="w-3.5 h-3.5 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 shrink-0" style="background-color: ${c(e.colorCode)};"></span>`:"";return`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700 shadow-sm flex gap-4 relative overflow-hidden group min-w-0 hover:shadow-md hover:-translate-y-1 hover:border-rose-300 dark:hover:border-rose-600 transition-all duration-300">
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
        </div>`}).join(""))};window.updWish=vt;window.rmWish=Xr;window.moveWish=Zr;window.clearWishlist=eo;window.renderWish=xa;window.getLocation=()=>{if(!navigator.geolocation)return g("GPS tidak didukung");m("btn-location").innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i>',navigator.geolocation.getCurrentPosition(e=>{B.lat=e.coords.latitude,B.lng=e.coords.longitude,$("btn-location"),L("location-status"),m("location-status").classList.add("flex"),g("GPS Didapatkan")},e=>{m("btn-location").innerHTML='<i class="fa-solid fa-location-crosshairs text-[var(--color-primary)]"></i> Set GPS Maps',g("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})};const to=()=>{const e=n.store.isDeliveryEnabled!==!1,t=n.store.isPickupEnabled!==!1;Z("delivery-option-container","hidden",!e),Z("pickup-option-container","hidden",!t),Z("no-delivery-warning","hidden",e||t),Z("delivery-methods-grid","hidden",!(e||t));const a=m("btn-checkout-next");if(a)if(e||t){a.removeAttribute("disabled"),a.classList.remove("opacity-50");const s=(B.deliveryMethod||"delivery")==="pickup"&&t?"pickup":e?"delivery":"pickup",o=document.querySelector(`input[value="${s}"]`);o&&(o.checked=!0)}else a.setAttribute("disabled","true"),a.classList.add("opacity-50");ga()};window.rChck=to;window.buktiPaymentUrl=null;window.buktiPaymentFile=null;window.buktiGDriveUploaded=!1;window.compressImageForUpload=(e,t=1600,a=.82)=>new Promise(r=>{const s=new FileReader;s.readAsDataURL(e),s.onload=o=>{const i=new Image;i.onload=()=>{let{width:l,height:d}=i;(l>t||d>t)&&(l>d?(d=Math.round(d*t/l),l=t):(l=Math.round(l*t/d),d=t));const p=document.createElement("canvas");p.width=l,p.height=d,p.getContext("2d").drawImage(i,0,0,l,d),p.toBlob(f=>{if(!f)return r(e);r(new File([f],e.name,{type:"image/jpeg",lastModified:Date.now()}))},"image/jpeg",a)},i.onerror=()=>r(e),i.src=o.target.result},s.onerror=()=>r(e)});window._doSingleGDriveUpload=async(e,t)=>{const a=new FileReader;return new Promise(r=>{a.readAsDataURL(e),a.onload=async()=>{try{const s=a.result.split(",")[1],o=(e.name||"bukti.jpg").replace(/[^a-zA-Z0-9.]/g,"_"),i={name:"BUKTI_"+t+"_"+Date.now()+"_"+o,mimeType:e.type||"image/jpeg",data:s,token:GAS_SECRET_TOKEN},l=await fetch(GAS_UPLOAD_URL,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"});if(!l.ok)return console.warn("GDrive upload HTTP error:",l.status),r(null);const d=await l.text();let p;try{p=JSON.parse(d)}catch{return console.warn("GDrive response parse error"),r(null)}p&&p.status==="success"&&p.url?r(W(p.url)):(console.warn("GDrive upload gagal:",p&&p.message),r(null))}catch(s){console.warn("GDrive upload exception:",s),r(null)}},a.onerror=()=>r(null)})};window.uploadBuktiToGDrive=async(e,t)=>{if(!e)return null;if(!GAS_UPLOAD_URL||GAS_UPLOAD_URL.includes("ISI_DENGAN"))return console.error("GAS_UPLOAD_URL belum dikonfigurasi!"),null;let a=e;try{a=await window.compressImageForUpload(e)}catch{}const r=2,s=3e4;for(let o=1;o<=r;o++){const i=m("bukti-uploading-text");i&&(i.textContent=o>1?`Mencoba ulang ke Google Drive... (${o}/${r})`:"Mengupload ke Google Drive...");try{const l=await Promise.race([window._doSingleGDriveUpload(a,t),new Promise((d,p)=>setTimeout(()=>p(new Error("timeout")),s))]);if(l)return l}catch(l){console.warn(`Percobaan upload ${o} gagal:`,l.message)}o<r&&await new Promise(l=>setTimeout(l,1500*o))}return null};window.handleBuktiUpload=async e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/"))return g("Hanya file gambar yang diizinkan!");if(t.size>5*1024*1024)return g("Ukuran gambar max 5MB!");window.buktiPaymentFile=t,window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const a=new FileReader;a.onload=i=>{const l=m("bukti-preview-img"),d=m("bukti-preview-wrap"),p=m("bukti-placeholder");l&&(l.src=i.target.result),d&&d.classList.remove("hidden"),p&&p.classList.add("hidden")},a.readAsDataURL(t),$("bukti-success"),$("bukti-gdrive-error");const r=m("bukti-uploading");r&&(r.classList.remove("hidden"),r.style.display="flex");const s="TEMP_"+Date.now().toString(36).toUpperCase(),o=await window.uploadBuktiToGDrive(t,s);if($("bukti-uploading"),o){window.buktiPaymentUrl=o,window.buktiGDriveUploaded=!0;const i=m("bukti-success"),l=m("bukti-success-text"),d=m("bukti-storage-info");l&&(l.textContent="Bukti berhasil disimpan!"),d&&(d.textContent="(tersimpan di Google Drive ✓)"),i&&(i.classList.remove("hidden"),i.style.display="flex"),$("bukti-gdrive-error")}else{window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const i=m("bukti-gdrive-error");i&&(i.classList.remove("hidden"),i.style.display="flex"),$("bukti-success"),g("❌ Upload ke Google Drive gagal. Coba lagi!")}};window.retryBuktiUpload=async()=>{if(!window.buktiPaymentFile)return g("Pilih gambar terlebih dahulu!");$("bukti-gdrive-error"),$("bukti-success");const e=m("bukti-uploading");e&&(e.classList.remove("hidden"),e.style.display="flex");const t="RETRY_"+Date.now().toString(36).toUpperCase(),a=await window.uploadBuktiToGDrive(window.buktiPaymentFile,t);if($("bukti-uploading"),a){window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0;const r=m("bukti-success"),s=m("bukti-success-text"),o=m("bukti-storage-info");s&&(s.textContent="Bukti berhasil disimpan!"),o&&(o.textContent="(tersimpan di Google Drive ✓)"),r&&(r.classList.remove("hidden"),r.style.display="flex"),g("✅ Upload berhasil!")}else{const r=m("bukti-gdrive-error");r&&(r.classList.remove("hidden"),r.style.display="flex"),g("❌ Masih gagal. Periksa koneksi internet Anda.")}};window.uploadBuktiToFirebase=async(e,t)=>{if(window.buktiGDriveUploaded&&window.buktiPaymentUrl)return window.buktiPaymentUrl;if(!e)return null;const a=await window.uploadBuktiToGDrive(e,t);return a&&(window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0),a};window.togglePaymentDetails=()=>{const e=(document.querySelector('input[name="payment"]:checked')||{}).value;Z("detail-transfer","hidden",e!=="transfer"),Z("detail-qris","hidden",e!=="qris"),Z("detail-cashier","hidden",e!=="cashier"),Z("detail-cod","hidden",e!=="cod"),Z("detail-tempo","hidden",e!=="tempo"),e==="tempo"&&window.calculateTempoBalance(),Z("bukti-payment-section","hidden",!(e==="transfer"||e==="qris"||e==="tempo"))};window.calculateTempoBalance=()=>{const e=document.getElementById("tempo-dp-input");let t=parseFloat(e?.value)||0;t<0&&(t=0,e&&(e.value=0));let a=R.reduce((w,y)=>w+(parseFloat(getEffP(y))||0)*(parseFloat(y.qty)||0),0),r=0,s=0,o=0;if(B.deliveryMethod==="delivery"&&(r=Math.ceil((parseFloat(B.distance)||0)*(parseFloat(n.store.costPerKm)||0)/500)*500),vouch){let w=a;if(vouch.targetProduct&&vouch.targetProduct!==""){const y=parseInt(vouch.targetProduct);w=R.filter(T=>T.id===y).reduce((T,E)=>T+(parseFloat(getEffP(E))||0)*(parseFloat(E.qty)||0),0)}if(vouch.type==="shipping_free")o=r;else if(vouch.type==="shipping_flat")o=parseFloat(vouch.value)||0;else if(vouch.type==="percent"){let y=w*((parseFloat(vouch.value)||0)/100);vouch.maxDiscount&&parseFloat(vouch.maxDiscount)>0&&(y=Math.min(y,parseFloat(vouch.maxDiscount))),s=y}else s=parseFloat(vouch.value)||0,s=Math.min(s,w)}o=Math.min(o,r),s=Math.min(s,a);let i=Math.max(0,a-s),l=Math.max(0,r-o);const d=window.calcTaxDetails(i+l);let p=0;window.useMemberPoints&&currentMember&&(p=Math.min(i+l+d.grandTotalAdd,parseFloat(currentMember.points)||0));let f=i+l+d.grandTotalAdd-p;t>f&&(t=f,e&&(e.value=t));let b=f-t;const u=document.getElementById("tempo-balance-display");u&&(u.innerText=x(b))};let Ba=null;const Ke=()=>{const e=De!=="Semua Produk"||Se!=="Semua Merek"||st!=="";Z("dynamic-banners-container","hidden",e),Z("reward-catalog-container","hidden",e),Z("dynamic-vouchers-container","hidden",e),Z("dynamic-categories-container","hidden",e),Z("dynamic-brands-container","hidden",e);const t=n.store.showCategories!==!1&&n.store.showCategories!=="false",a=n.store.showBrands!==!1&&n.store.showBrands!=="false";Z("sec-categories","hidden",e||!t),Z("sec-brands","hidden",e||!a);let r=m("dynamic-active-filter");if(!r){let l=m("product-container");l&&(l.insertAdjacentHTML("beforebegin",'<div id="dynamic-active-filter" class="transition-all w-full"></div>'),r=m("dynamic-active-filter"))}if(r)if(e){let l="Menampilkan",d="",p="fa-filter",f="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30";st!==""?(l="Hasil Pencarian",d=`"${st}"`,p="fa-magnifying-glass",f="text-rose-500 bg-rose-50 dark:bg-rose-900/30"):De!=="Semua Produk"?(l="Kategori Pilihan",d=De,p="fa-layer-group",f="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30"):Se!=="Semua Merek"&&(l="Merek Pilihan",d=Se,p="fa-tag",f="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30"),r.innerHTML=`
            <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 flex justify-between items-center mb-5 shadow-sm">
                <div class="flex items-center gap-3 overflow-hidden">
                    <div class="w-10 h-10 rounded-xl ${f} flex items-center justify-center shrink-0"><i class="fa-solid ${p} text-lg"></i></div>
                    <div class="flex flex-col min-w-0 pr-2">
                        <span class="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest">${l}</span>
                        <span class="text-sm font-bold text-slate-800 dark:text-white truncate leading-tight mt-0.5">${c(d)}</span>
                    </div>
                </div>
                <button onclick="resetSemuaFilter()" class="shrink-0 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 w-10 h-10 flex items-center justify-center rounded-xl font-bold shadow-sm hover:bg-rose-50 hover:text-rose-500 hover:border-rose-200 transition-all active:scale-95 group"><i class="fa-solid fa-xmark text-lg group-hover:rotate-90 transition-transform duration-300"></i></button>
            </div>`,r.classList.remove("hidden")}else r.innerHTML="",r.classList.add("hidden");let s=n.products.filter(l=>{if(l.isActive===!1||l.isActive==="false"||De!=="Semua Produk"&&l.category!==De||Se!=="Semua Merek"&&l.brand!==Se)return!1;if(!st)return!0;let d=st.toLowerCase();return(l.name||"").toLowerCase().includes(d)||(l.sku||"").toLowerCase().includes(d)||(l.category||"").toLowerCase().includes(d)||(l.brand||"").toLowerCase().includes(d)||l.variants&&l.variants.some(p=>(p.name||"").toLowerCase().includes(d)||(p.sku||"").toLowerCase().includes(d))}).sort((l,d)=>rt==="cheapest"?(l.price||0)-(d.price||0):rt==="expensive"?(d.price||0)-(l.price||0):rt==="az"?(l.name||"").localeCompare(d.name||""):rt==="za"?(d.name||"").localeCompare(l.name||""):rt==="oldest"?(l.id||0)-(d.id||0):(d.id||0)-(l.id||0));const o=m("product-container");if(!o)return;if(o.className=Xt==="grid"?"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8":"flex flex-col gap-3 sm:gap-4",!s.length){o.innerHTML='<div class="col-span-full text-center py-16 sm:py-24 text-slate-500 dark:text-slate-400 font-bold bg-slate-50 dark:bg-slate-800/50 rounded-[1.5rem] border border-slate-200 border-dashed dark:border-slate-700 text-sm sm:text-base flex flex-col items-center justify-center"><div class="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm mb-4"><i class="fa-solid fa-box-open text-3xl sm:text-4xl text-slate-300 dark:text-slate-600"></i></div>Maaf, produk tidak ditemukan.<br><span class="text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 font-normal">Coba gunakan kata kunci pencarian yang berbeda atau hapus filter.</span></div>',$("load-more-container");return}const i=s.slice(0,ca*vr);o.innerHTML=i.map(l=>{let d="";const p=n.store.useStock===!0||n.store.useStock==="true";let f="";if(p){const q=l.variants&&l.variants.length?l.variants.filter(K=>K.isActive!==!1&&K.isActive!=="false").reduce((K,ne)=>K+(parseFloat(ne.stock)||0),0):parseFloat(l.stock)||0;q<=0?d='<div class="absolute inset-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-[2px] z-20 flex items-center justify-center rounded-[1.25rem]"><span class="bg-slate-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-lg uppercase tracking-widest"><i class="fa-solid fa-ban mr-1"></i> HABIS</span></div>':q<=5?f=`<span class="absolute top-2 left-2 z-10 bg-rose-500 text-white text-[8px] font-bold px-2 py-1 rounded-xl shadow uppercase tracking-wider"><i class="fa-solid fa-fire mr-0.5"></i> SISA ${q}</span>`:f=`<span class="absolute top-2 left-2 z-10 bg-slate-800/80 text-white text-[8px] font-bold px-2 py-1 rounded-xl shadow uppercase tracking-wider backdrop-blur-sm"><i class="fa-solid fa-box mr-0.5"></i> Stok ${q}</span>`}const b=!d,u=b?"cursor-pointer hover:shadow-md hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40":"cursor-not-allowed",w=b?"cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40":"cursor-not-allowed";let y="",h="";l.priceNormal&&l.priceNormal>l.price&&(y=`<span class="bg-rose-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-tags"></i> -${Math.round((l.priceNormal-l.price)/l.priceNormal*100)}%</span>`,h=`<p class="text-[10px] text-slate-600 dark:text-slate-400 line-through mb-0.5 font-bold">${x(l.priceNormal)}</p>`);let T=l.poTime?`<span class="bg-amber-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${c(l.poTime)}</span>`:"",E="";if(l.variants&&l.variants.length){const q=l.variants.map(K=>parseFloat(K.poin)||0).filter(K=>K>0);if(q.length){const K=[...new Set(q)];E=K.length===1?`<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> +${K[0]} Poin</span>`:'<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> Dapat Poin</span>'}}else parseFloat(l.poin)>0&&(E=`<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> +${parseFloat(l.poin)} Poin</span>`);const M=l.variants&&l.variants.length?l.variants.reduce((q,K)=>q+(parseFloat(K.totalSold)||0),0):parseFloat(l.totalSold)||0,V=M>0?`<span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-fire-flame-curved text-orange-400"></i> ${M} Terjual</span>`:"";let I=`<div class="mb-2.5 flex flex-wrap gap-1.5 items-center overflow-hidden shrink-0">
            ${y}
            ${T}
            ${E}
            ${V}
            ${l.tag?`<span class="bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] dark:bg-[var(--color-primary-dark)]/50 dark:text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-hashtag"></i> ${c(l.tag)}</span>`:""}
            <span class="accent-badge px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-circle-check"></i> Official</span>
            ${l.brand?`<span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-tag"></i> ${c(l.brand)}</span>`:""}
            ${l.wholesale?.length&&!l.variants?.length?'<span class="amber-badge px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-layer-group"></i> Grosir</span>':""}
        </div>`,S=`<span class="text-[9px] text-slate-600 dark:text-slate-400 font-bold ml-0.5 mb-0.5 uppercase tracking-wide">/${c(l.unit||"PCS")}</span>`;return Xt==="grid"?`
            <a href="?p=${l.id}" class="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-[1.5rem] shadow-soft ${u} transition-all duration-300 flex flex-col group relative overflow-hidden text-left" onclick="event.preventDefault(); openProductModal(${l.id})">
                ${d}
                <div class="relative aspect-square w-full bg-white flex items-center justify-center shrink-0 border-b border-slate-100 dark:border-slate-700/50">
                      ${f}
                      <img loading="lazy" decoding="async" src="${c(pe(l.img,"w300-rw"))}" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${d?"grayscale opacity-50":""}">
                </div>
                <div class="flex-1 flex flex-col p-3 sm:p-4 min-w-0 bg-white dark:bg-slate-800 relative z-10">
                    ${I}
                    <h4 class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug mb-2 group-hover:text-[var(--color-primary)] transition-colors uppercase">${c(l.name)}</h4>
                    <div class="flex items-end justify-between mt-auto pt-1">
                        <div>
                            ${l.variants&&l.variants.length>0?"":h}
                            <p class="text-[var(--color-primary)] font-bold text-sm sm:text-[15px] leading-none tracking-tight">
                                ${l.variants&&l.variants.length>0?'<span class="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">PILIH VARIAN</span>':x(l.price)}
                            </p>
                            ${l.variants&&l.variants.length>0?"":S}
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
                    ${f}
                    <img loading="lazy" decoding="async" src="${c(pe(l.img,"w300-rw"))}" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'" class="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 ${d?"grayscale opacity-50":""}">
                </div>
                <div class="flex-1 min-w-0 py-1 flex flex-col justify-center h-full relative z-10 pr-2">
                    ${I}
                    <h4 class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug mb-1.5 group-hover:text-[var(--color-primary)] transition-colors uppercase">${c(l.name)}</h4>
                    <div class="flex items-end justify-between mt-auto pt-1">
                        <div>
                            ${l.variants&&l.variants.length>0?"":h}
                            <p class="text-[var(--color-primary)] font-bold text-sm sm:text-[15px] leading-none tracking-tight">
                                ${l.variants&&l.variants.length>0?'<span class="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">PILIH VARIAN</span>':x(l.price)}
                            </p>
                            ${l.variants&&l.variants.length>0?"":S}
                        </div>
                        <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110 active:scale-90 shadow-sm mr-1">
                            <i class="fa-solid fa-plus text-xs sm:text-sm"></i>
                        </div>
                    </div>
                </div>
            </a>`}).join(""),i.length<s.length?L("load-more-container"):$("load-more-container")},ao=e=>{pa(De===e&&e!=="Semua Produk"?"Semua Produk":e),Ie(1),typeof window.rDyn=="function"&&window.rDyn();const t=document.querySelector("#view-catalog .scroll-content");t&&setTimeout(()=>t.scrollTo({top:0,behavior:"smooth"}),10)},so=e=>{ma(Se===e&&e!=="Semua Merek"?"Semua Merek":e),Ie(1),typeof window.rDyn=="function"&&window.rDyn();const t=document.querySelector("#view-catalog .scroll-content");t&&setTimeout(()=>t.scrollTo({top:0,behavior:"smooth"}),10)},ro=()=>{pa("Semua Produk"),ma("Semua Merek"),js(""),Ie(1),typeof window.rDyn=="function"&&window.rDyn()},oo=e=>{clearTimeout(Ba),Ba=setTimeout(()=>{js(e),Ie(1),Ke()},300)},io=e=>{kr(e),Ie(1),Ke()},lo=e=>{$r(e),Ie(1),m("btn-view-grid")&&(m("btn-view-grid").className=e==="grid"?"w-8 h-8 rounded-xl flex items-center justify-center text-[var(--color-primary)] bg-white dark:bg-slate-700 shadow-sm transition-all":"w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-all"),m("btn-view-list")&&(m("btn-view-list").className=e==="list"?"w-8 h-8 rounded-xl flex items-center justify-center text-[var(--color-primary)] bg-white dark:bg-slate-700 shadow-sm transition-all":"w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-all"),Ke()},no=()=>{Ie(ca+1),Ke()};window.rCat=Ke;window.filterCategory=ao;window.filterBrand=so;window.resetSemuaFilter=ro;window.handleSearch=oo;window.handleSort=io;window.toggleView=lo;window.loadMoreProducts=no;window.cSlideIdx=0;const co=e=>{window.cSlideIdx=0;const t=n.products.find(u=>u.id===e);if(!t)return;const a=t.isActive!=="false"&&t.isActive!==!1,r=n.store.useStock===!0||n.store.useStock==="true";let s=1/0;if(r&&(s=t.variants&&t.variants.length?t.variants.filter(u=>u.isActive!==!1&&u.isActive!=="false").reduce((u,w)=>u+(parseFloat(w.stock)||0),0):parseFloat(t.stock)||0),!a){g("Produk ini sedang tidak tersedia");return}if(r&&s<=0){g("Maaf, stok produk ini sedang kosong");return}Sr(t),ua(1),t.variants&&t.variants.length>0?Zt(null):Zt(0),se("modal-qty-input",1),Ut();const o=t.desc?t.desc.replace(/<[^>]*>/g,"").substring(0,160):`Beli ${t.name} berkualitas dengan harga terbaik hanya di Toko Putri.`,i=window.location.origin+window.location.pathname+"?p="+t.id;typeof window.updateSEO=="function"&&window.updateSEO(`${t.name} - Toko Putri`,o,pe(t.img,"w500-rw"),i);const l=t.variants&&t.variants.length>0?Math.min(...t.variants.map(u=>parseFloat(u.price)||t.price)):t.price,d=s>0?"https://schema.org/InStock":"https://schema.org/OutOfStock",p={"@context":"https://schema.org","@type":"Product",name:t.name,image:[pe(t.img,"w500-rw")],description:o,sku:`PROD-${t.id}`,category:t.category||"",brand:{"@type":"Brand",name:t.brand||"Toko Putri"},offers:{"@type":"Offer",url:i,priceCurrency:"IDR",price:l,itemCondition:"https://schema.org/NewCondition",availability:d,priceValidUntil:"2030-12-31"}};t.variants&&t.variants.length>0&&(p.offers=t.variants.map(u=>({"@type":"Offer",name:u.name,priceCurrency:"IDR",price:parseFloat(u.price)||t.price,itemCondition:"https://schema.org/NewCondition",availability:(parseFloat(u.stock)||0)>0?"https://schema.org/InStock":"https://schema.org/OutOfStock"}))),typeof window.injectJSONLD=="function"&&window.injectJSONLD("seo-product",p);try{const u=m("product-modal-ad-container");u&&(n.store.adsEnabled===!0||n.store.adsEnabled==="true"?(u.classList.remove("hidden"),u.innerHTML='<ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-2636322336243340" data-ad-slot="8219064079"></ins>',(window.adsbygoogle=window.adsbygoogle||[]).push({})):(u.classList.add("hidden"),u.innerHTML=""))}catch(u){console.error("Gagal render iklan in-article:",u)}typeof window.loadProductReviews=="function"&&window.loadProductReviews(t.id);const f=m("product-modal"),b=m("product-modal-content");if(f&&b){if(f.classList.contains("hidden")){const u=new URLSearchParams(window.location.search);u.get("p")!==String(t.id)&&(u.set("p",t.id),window.history.pushState({modal:"product"},t.name,window.location.pathname+"?"+u.toString()),ke.push("product"))}L("product-modal"),b.scrollTo(0,0),setTimeout(()=>{f.classList.remove("opacity-0"),b.classList.remove("translate-y-full","sm:translate-y-10")},10)}},wa=(e=!1)=>{const t=m("product-modal"),a=m("product-modal-content");if(t&&a){const r=()=>{t.classList.add("opacity-0"),a.classList.add("translate-y-full","sm:translate-y-10"),setTimeout(()=>$("product-modal"),300);const s=m("product-modal-video-container");s&&(s.innerHTML="",s.classList.add("hidden"));const o=new URLSearchParams(window.location.search);o.delete("p");let i=window.location.pathname;o.toString()&&(i+="?"+o.toString()),window.history.replaceState({},"Toko Putri",i),typeof window.updateSEO=="function"&&window.updateSEO("Toko Putri","Toko Putri - Solusi grosir dan e-commerce terpercaya untuk alat teknik, perkakas, dan perlengkapan pertukangan berkualitas dengan harga terbaik.",pe(n.store.logo,"w300-rw"),window.location.origin+i);const l=document.getElementById("seo-product");l&&l.remove()};typeof window.requestCloseModal=="function"?window.requestCloseModal("product",e,r):r()}},po=e=>{if(!A||!A.variants||!A.variants[e])return;const t=A.variants[e],a=m("variant-preview-modal"),r=m("variant-preview-content");if(!a||!r)return;let s="";`${c(A.name)}${c(t.name)}`;const o=x(t.price||A.price);t.img?s=`
            <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <img class="w-full h-full object-contain" src="${pe(t.img,"w800-rw")}" alt="${c(t.name)}">
                ${t.colorCode?`<div class="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-white shadow-lg" style="background-color: ${c(t.colorCode)};"></div>`:""}
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <h4 class="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase break-words leading-tight">${c(t.name)}</h4>
                <p class="text-[var(--color-primary)] font-extrabold text-lg mt-1 tracking-tight">${o}</p>
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${c(A.name)}</p>
            </div>
        `:t.colorCode?s=`
            <div class="w-full aspect-square rounded-3xl shadow-2xl border-4 border-white/20 flex flex-col items-center justify-center p-6 relative overflow-hidden" style="background-color: ${c(t.colorCode)};">
                <div class="absolute bottom-0 inset-x-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center border-t border-slate-200/50 dark:border-slate-800/50">
                    <span class="text-slate-905 dark:text-white font-extrabold text-lg uppercase tracking-wider break-words leading-tight">${c(t.name)}</span>
                    <span class="text-slate-500 dark:text-slate-400 font-mono text-xs font-bold mt-1 uppercase">${c(t.colorCode)}</span>
                    <span class="text-[var(--color-primary)] font-extrabold text-lg mt-1">${o}</span>
                </div>
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${c(A.name)}</p>
            </div>
        `:s=`
            <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <img loading="lazy" decoding="async" class="w-full h-full object-contain" src="${pe(A.img||"","w800-rw")}" alt="${c(A.name)}">
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <h4 class="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase break-words leading-tight">${c(t.name)}</h4>
                <p class="text-[var(--color-primary)] font-extrabold text-lg mt-1 tracking-tight">${o}</p>
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${c(A.name)}</p>
            </div>
        `,r.innerHTML=s,a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("variantPreview"),L("variant-preview-modal"),setTimeout(()=>{a.classList.remove("opacity-0"),r.classList.remove("scale-95")},10)},mo=()=>{if(!A)return;const e=m("variant-preview-modal"),t=m("variant-preview-content");if(!e||!t)return;const a=A.variants&&ae!==null?A.variants[ae]:null,r=a?.img||A.img||"",s=a?`${c(A.name)} - ${c(a.name)}`:c(A.name),o=x(a?.price??A.price);let i=`
        <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
            <img loading="lazy" decoding="async" class="w-full h-full object-contain" src="${pe(r,"w800-rw")}" alt="${s}">
            ${a?.colorCode?`<div class="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-white shadow-lg" style="background-color: ${c(a.colorCode)};"></div>`:""}
        </div>
        <div class="mt-5 text-center px-4 w-full">
            <h4 class="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase break-words leading-tight">${c(A.name)}</h4>
            ${a?`<p class="text-slate-300 font-bold text-sm mt-1 uppercase tracking-wide">Varian: ${c(a.name)}</p>`:""}
            <p class="text-[var(--color-primary)] font-extrabold text-lg mt-1 tracking-tight">${o}</p>
        </div>
    `;t.innerHTML=i,e.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("variantPreview"),L("variant-preview-modal"),setTimeout(()=>{e.classList.remove("opacity-0"),t.classList.remove("scale-95")},10)},uo=(e=!1)=>{const t=m("variant-preview-modal"),a=m("variant-preview-content");if(t&&a){const r=()=>{t.classList.add("opacity-0"),a.classList.add("scale-95"),setTimeout(()=>{$("variant-preview-modal"),a.innerHTML=""},300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("variantPreview",e,r):r()}},fo=e=>{Rt(A?.video)&&(window.cSlideIdx+=e,window.cSlideIdx>1&&(window.cSlideIdx=0),window.cSlideIdx<0&&(window.cSlideIdx=1),Ut())},Ut=()=>{if(!A)return;let e=A,t=e.isActive!=="false"&&e.isActive!==!1,a=e.variants?.length>0;const r=(e.name||"").toLowerCase(),s=(e.category||"").toLowerCase(),o=(e.tag||"").toLowerCase(),i=["cat","paint","warna","colour","color","putih","hitam","merah","biru","hijau","kuning","orange","abu","coklat","cream","krem","beige","ivory","mocca","rose","tosca","lavender","salmon","broken white","off white","natural","magnolia","primer","dasar","eksterior","exterior","interior","tembok","duco","gloss","matte","satin","semi gloss"],l=r.includes("cat")&&(r.includes("tembok")||r.includes("interior")||r.includes("eksterior")||r.includes("exterior"))||s.includes("cat")||s.includes("paint")||o.includes("cat")||o.includes("paint"),d=a&&e.variants.some(F=>{const v=(F.name||"").toLowerCase();return i.some(_=>v.includes(_))}),p=l||d,f=m("product-modal-paint-warning");f&&(p?f.classList.remove("hidden"):f.classList.add("hidden"));let b=a&&ae!==null?e.variants[ae]:null,u=b?.unit||e.unit||"Pcs";const w=m("product-modal-img"),y=m("product-modal-video-container"),h=Rt(e.video),T=b&&b.img,E=m("slide-prev"),M=m("slide-next"),V=m("slide-dots");if(h&&!T)if(E&&E.classList.remove("hidden"),M&&M.classList.remove("hidden"),V&&(V.classList.remove("hidden"),V.innerHTML=`
                <div class="w-2 h-2 rounded-full ${window.cSlideIdx===0?"bg-[var(--color-primary)] scale-125":"bg-slate-300 dark:bg-slate-600"} transition-all cursor-pointer shadow-sm" onclick="window.cSlideIdx=0; rProdMod()"></div>
                <div class="w-2 h-2 rounded-full ${window.cSlideIdx===1?"bg-[var(--color-primary)] scale-125":"bg-slate-300 dark:bg-slate-600"} transition-all cursor-pointer shadow-sm" onclick="window.cSlideIdx=1; rProdMod()"></div>
            `),window.cSlideIdx===1){w&&(w.style.display="none"),y&&(y.classList.remove("hidden"),y.innerHTML||(y.innerHTML=`<iframe class="w-full h-full pointer-events-none" src="https://www.youtube.com/embed/${h}?autoplay=1&mute=1&loop=1&playlist=${h}&enablejsapi=1&modestbranding=1&controls=0&rel=0&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure"></iframe>`));const F=m("zoom-indicator");F&&F.classList.add("hidden")}else{y&&y.classList.add("hidden"),w&&(w.style.display="block",w.src=pe(b?.img||e.img||"","w600-rw"),w.style.opacity=1);const F=m("zoom-indicator");F&&F.classList.remove("hidden")}else{E&&E.classList.add("hidden"),M&&M.classList.add("hidden"),V&&V.classList.add("hidden"),y&&(y.innerHTML="",y.classList.add("hidden")),w&&(w.style.display="block",w.style.opacity=0,setTimeout(()=>{w.src=pe(b?.img||e.img||"","w600-rw"),w.style.opacity=1},150));const F=m("zoom-indicator");F&&F.classList.remove("hidden")}if(U("product-modal-title",e.name),a&&ae===null)P("product-modal-price",'<span class="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Pilih Warna/Varian</span>');else{let F=b?.price??e.price,v=b?.priceNormal??e.priceNormal;const Y=(n.store.ppnEnabled===!0||n.store.ppnEnabled==="true")&&n.store.ppnType==="inclusive"?'<span class="text-[9px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800 uppercase tracking-widest ml-2 align-middle inline-block">Inc. PPN</span>':"";let j="";if(v&&v>F){let G=Math.round((v-F)/v*100);j=`<div class="flex flex-col"><span class="text-[11px] text-rose-500 font-bold line-through mb-0.5 tracking-wide">${x(v)} <span class="bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded ml-1 text-[9px] no-underline tracking-widest border border-rose-200">-${G}%</span></span><span>${x(F)} ${Y}</span></div>`}else j=`<span>${x(F)} ${Y}</span>`;P("product-modal-price",j)}const I=m("product-modal-desc");if(I){I.className="text-[13px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_b]:font-bold [&_strong]:font-bold [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-2 [&_div]:my-1";const F=e.desc||"-";I.innerHTML=typeof DOMPurify<"u"?DOMPurify.sanitize(F,{ALLOWED_TAGS:["p","br","b","strong","i","em","u","s","span","div","h1","h2","h3","h4","ul","ol","li","a","img","table","thead","tbody","tr","th","td","blockquote","code","pre","hr"],ALLOWED_ATTR:["href","src","alt","title","class","style","target","rel","width","height","loading"],FORBID_TAGS:["script","iframe","object","embed","form","input"],FORBID_ATTR:["onclick","oninput","onload","onmouseover","onsubmit","onerror"]}):F}const S=m("product-modal-spec-table");if(S)if(e.specTable&&e.specTable.length>0){let F=`
            <div class="mt-5">
                <p class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-3">
                    <i class="fa-solid fa-table-cells-large text-[var(--color-primary)] opacity-80"></i> Spesifikasi Produk
                </p>
                <div class="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <table class="w-full text-[13px] spec-product-table">
                        <tbody>`;e.specTable.forEach((v,_)=>{const Y=_%2===0?"bg-white dark:bg-slate-900":"bg-slate-50/80 dark:bg-slate-800/60";F+=`<tr class="${Y}">
                    <td class="py-2.5 px-4 font-semibold text-slate-600 dark:text-slate-300 w-5/12 border-r border-slate-100 dark:border-slate-700/60 align-top">${c(v.key)}</td>
                    <td class="py-2.5 px-4 text-slate-700 dark:text-slate-200 align-top">${c(v.val)}</td>
                </tr>`}),F+="</tbody></table></div></div>",S.innerHTML=typeof DOMPurify<"u"?DOMPurify.sanitize(F,{ALLOWED_TAGS:["div","p","i","table","tbody","tr","td","th","thead","br","span"],ALLOWED_ATTR:["class","style"]}):F,S.style.display=""}else S.innerHTML="",S.style.display="none";U("modal-unit-label",u);let q="";e.sku&&(q+=`<span class="bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap tracking-wider"><i class="fa-solid fa-barcode"></i> ${c(e.sku)}</span>`),e.tag&&(q+=`<span class="accent-badge px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-hashtag"></i> ${c(e.tag)}</span>`),q+='<span class="accent-badge px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-circle-check"></i> Official</span>',e.brand&&(q+=`<span class="bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-tag"></i> ${c(e.brand)}</span>`),e.poTime&&(q+=`<span class="bg-amber-500 text-white px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${c(e.poTime)}</span>`);const K=b&&parseFloat(b.poin)>0?parseFloat(b.poin):parseFloat(e.poin)||0;K>0&&(!a||ae!==null)&&(q+=`<span class="bg-[var(--color-primary)] text-white px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-star"></i> +${K} Poin</span>`);const ne=a&&ae!==null?parseFloat(b?b.totalSold:0)||0:a?e.variants.reduce((F,v)=>F+(parseFloat(v.totalSold)||0),0):parseFloat(e.totalSold)||0;ne>0&&(q+=`<span class="bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-fire-flame-curved text-orange-400"></i> ${ne} Terjual</span>`),P("product-modal-badges",q),P("product-modal-wholesale-container",e.wholesale?.length&&!e.variants?.length?`
        <div class="mb-6 bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-4 border border-amber-200 dark:border-amber-800/50 shadow-inner">
            <p class="text-[10px] font-bold text-amber-600 dark:text-amber-500 mb-3 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-layer-group"></i> Harga Grosir</p>
            <div class="space-y-2">${e.wholesale.slice().sort((F,v)=>F.minQty-v.minQty).map(F=>`
                <div class="flex justify-between items-center text-sm font-bold bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-amber-100 dark:border-slate-700 shadow-sm">
                    <span class="text-slate-600 dark:text-slate-300">≥ ${parseFloat(F.minQty)} <span class="text-[10px] uppercase tracking-wider">${c(u)}</span></span>
                    <span class="text-[var(--color-primary)] font-bold">${x(F.price)}</span>
                </div>`).join("")}
            </div>
        </div>`:"");const he=m("product-modal-admin-info");if(he)if(window.isAdm&&window.curViewName==="view-admin"){const F=n.store.useStock===!0||n.store.useStock==="true",v=e.variants?.length>0,_=b?b.hpp||0:e.hpp||0;b?b.stock!==void 0&&b.stock:e.stock!==void 0&&e.stock;const Y=b?b.price||e.price||0:e.price||0,j=_>0?Math.round((Y-_)/Y*100):null;let G="";if(F)if(v)G=`<div class="col-span-2 space-y-1.5">${(e.variants||[]).map(Q=>{const X=parseFloat(Q.stock)||0;return`<div class="flex justify-between items-center text-[11px] font-bold bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-700">
                            <span class="text-slate-500 flex items-center gap-1.5">${Q.colorCode?`<span class="w-3 h-3 rounded-full inline-block" style="background:${c(Q.colorCode)}"></span>`:""}${c(Q.name)}</span>
                            <span class="${X===0?"text-rose-500":X<=5?"text-amber-500":"text-emerald-500"} font-bold">${X} ${c(Q.unit||e.unit||"pcs")}</span>
                        </div>`}).join("")}</div>`;else{const Q=parseFloat(e.stock)||0;G=`<div class="flex flex-col gap-1"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Sisa Stok</p><p class="font-bold text-xl ${Q===0?"text-rose-500":Q<=5?"text-amber-500":"text-blue-500"}">${Q} <span class="text-sm font-bold">${c(e.unit||"pcs")}</span></p></div>`}he.innerHTML=`
            <div class="mb-6 bg-[rgba(var(--color-primary-rgb),0.05)] dark:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-2xl p-4 border border-[var(--color-primary)]/20">
                <p class="text-[10px] font-bold text-[var(--color-primary)] mb-3 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-lock"></i> Info Seller</p>
                <div class="grid grid-cols-2 gap-3">
                    <div class="flex flex-col gap-1">
                        <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">HPP / Modal</p>
                        <p class="font-bold text-lg text-amber-500">${x(_)}</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Margin</p>
                        <p class="font-bold text-lg ${j===null?"text-slate-400":j>=30?"text-emerald-500":j>=10?"text-amber-500":"text-rose-500"}">${j!==null?j+"%":"—"}</p>
                    </div>
                    ${G}
                </div>
                <button onclick="closeProductModal(); setTimeout(()=>{ if(window.openAdminTab) openAdminTab('products'); setTimeout(()=> { if(window.oAEd) oAEd('products', ${e.id}); }, 200); }, 400);" class="mt-3 w-full py-2.5 rounded-xl border border-violet-200 dark:border-[var(--color-primary)]/40 bg-white dark:bg-slate-800 text-[var(--color-primary)] font-bold text-[11px] uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-all flex items-center justify-center gap-2">
                    <i class="fa-solid fa-pen-to-square"></i> Edit Produk
                </button>
            </div>`}else he.innerHTML="";if(t)if(a&&ae===null?($("modal-active-controls"),$("modal-inactive-controls")):(a?b.isActive!==!1&&b.isActive!=="false":!0)?(L("modal-active-controls"),$("modal-inactive-controls")):($("modal-active-controls"),L("modal-inactive-controls")),a){L("product-modal-options-container");let F='<div class="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(95px,1fr))] gap-2 sm:gap-3 w-full">';F+=e.variants.map((v,_)=>{let Y=v.isActive!==!1&&v.isActive!=="false";const j=n.store.useStock===!0||n.store.useStock==="true",G=parseFloat(v.stock)||0,Q=j&&G<=0;let X=Y&&!Q,ut=v.colorCode?`<span class="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 mb-2 shrink-0" style="background-color: ${c(v.colorCode)};"></span>`:"",Ee="";X?_===ae?Ee="bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] text-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:text-[var(--color-primary)] shadow-sm":Ee="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-[var(--color-primary)]/40 hover:shadow-sm":Ee="bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 opacity-60 cursor-not-allowed";const ft=X&&(v.colorCode||v.img)?`<span onclick="event.stopPropagation(); previewVariant(${_})" class="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/90 dark:bg-slate-700/90 shadow-sm flex items-center justify-center text-slate-500 hover:text-[var(--color-primary)] hover:scale-110 active:scale-90 transition-all border border-slate-200/50 dark:border-slate-600/50" title="Perbesar"><i class="fa-solid fa-magnifying-glass-plus text-[9px]"></i></span>`:"";return`<button ${X?"":"disabled"} class="relative p-2.5 sm:p-3 rounded-xl text-[10px] sm:text-[11px] font-bold uppercase tracking-wide border-2 transition-all active:scale-95 flex flex-col items-center justify-start text-center h-full ${Ee}" ${X?`onclick="selectVariant(${_})"`:""}>
                    ${ft}
                    ${ut} 
                    <span class="${X?"":"line-through"} leading-snug break-words w-full ${v.colorCode?"":"my-auto"}">${c(v.name)}</span>
                    ${Q&&Y?'<span class="text-[8px] font-bold text-rose-500 normal-case mt-0.5">Stok Habis</span>':""}
                </button>`}).join(""),F+="</div>",P("product-modal-options",F)}else $("product-modal-options-container");else $("modal-active-controls"),L("modal-inactive-controls"),$("product-modal-options-container");Ht()},Ht=()=>{if(!A)return;if(A.variants?.length>0&&ae===null){U("btn-modal-price-preview","Rp 0");return}let e=(A.variants||[])[ae],a=e?.price??A.price;const r=e?.name||null;let s=0;r?s=parseFloat(R.find(i=>i.id===A.id&&i.variantName===r)?.qty||0):s=R.filter(i=>i.id===A.id).reduce((i,l)=>i+(parseFloat(l.qty)||0),0);let o=Te+s;if(A.wholesale?.length){for(let i of A.wholesale.slice().sort((l,d)=>d.minQty-l.minQty))if(o>=parseFloat(i.minQty)){a=i.price;break}}U("btn-modal-price-preview",x(a*Te))},bo=e=>{const t=n.store.useStock===!0||n.store.useStock==="true",a=A?.variants?.[ae],r=a?.name||null,s=t?r?parseFloat(a?.stock)||0:parseFloat(A?.stock)||0:1/0,o=parseFloat(Math.min(s,Math.max(.01,Te+e)).toFixed(2));ua(o),se("modal-qty-input",Te),Ht(),t&&s!==1/0&&Te>=s&&g(`Maks stok: ${s}`)},go=e=>{const t=n.store.useStock===!0||n.store.useStock==="true",a=A?.variants?.[ae],r=a?.name||null,s=t?r?parseFloat(a?.stock)||0:parseFloat(A?.stock)||0:1/0;let o=parseFloat(e);(isNaN(o)||o<=0)&&(o=.01),o=Math.min(s,o);const i=parseFloat(o.toFixed(2));ua(i),se("modal-qty-input",Te),Ht()},xo=e=>{Zt(e),Ut()},wo=()=>{if(A.variants?.length>0&&ae===null)return g("Pilih varian / warna terlebih dahulu!");if(n.store.useStock===!0||n.store.useStock==="true"){const o=A.variants?.[ae],i=o?.name||null,l=i?parseFloat(o.stock)||0:parseFloat(A.stock)||0,d=R.find(f=>f.id===A.id&&f.variantName===i),p=d&&parseFloat(d.qty)||0;if(Te+p>l)return g(`Stok tidak cukup! Tersisa: ${l}`)}const t=A.variants?.[ae],a=t?.name||null,r=R.find(o=>o.id===A.id&&o.variantName===a),s=t?.unit||A.unit||"pcs";if(r)r.qty=parseFloat((r.qty+Te).toFixed(2)),r.unit=s;else{const o=t&&parseFloat(t.poin)>0?parseFloat(t.poin):parseFloat(A.poin)||0;R.push({id:A.id,name:A.name,variantName:a,price:t?.price??A.price,img:t?.img||A.img,qty:Te,unit:s,poTime:A.poTime||"",colorCode:t?.colorCode||"",poin:o})}Ae(),typeof analytics<"u"&&analytics.logEvent("add_to_cart",{item_id:A.id,item_name:A.name,quantity:Te}),wa(),g("Berhasil Masuk Keranjang")},ho=()=>{if(A.variants?.length>0&&ae===null)return g("Pilih varian / warna terlebih dahulu!");const e=A.variants?.[ae],t=e?.name||null;if(me.find(a=>a.id===A.id&&a.variantName===t))return g("Sudah di Favorit!");me.push({id:A.id,name:A.name,variantName:t,price:e?.price??A.price,img:e?.img||A.img,colorCode:e?.colorCode||""}),te("freshmart_wishlist",JSON.stringify(me)),typeof window.updWish=="function"&&window.updWish(),wa(),g("Masuk Favorit ❤️")},vo=()=>{if(!A)return;const e=window.location.origin+window.location.pathname+"?p="+A.id,t=A.name,a=`Cek produk ${A.name} di ${n.store.name} sekarang!`;if(navigator.share)navigator.share({title:t,text:a,url:e}).catch(r=>{console.log("User membatalkan share",r)});else if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(e).then(()=>g("Link produk berhasil disalin!")).catch(()=>g("Gagal menyalin link."));else{const r=document.createElement("textarea");r.value=e,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),g("Link produk berhasil disalin!")}};window.openProductModal=co;window.closeProductModal=wa;window.previewVariant=po;window.previewProductImage=mo;window.closeVariantPreviewModal=uo;window.changeSlide=fo;window.rProdMod=Ut;window.uMPP=Ht;window.updateModalQty=bo;window.handleModalQtyChange=go;window.selectVariant=xo;window.confirmAddProductToCart=wo;window.confirmAddToWishlist=ho;window.shareProduct=vo;let ea=[];const Vt=()=>{try{localStorage.setItem("freshmart_my_orders",JSON.stringify(ie))}catch(e){console.warn("[MyOrders] Gagal menyimpan ke localStorage:",e)}},yo=()=>{try{const e=localStorage.getItem("freshmart_my_orders");if(e){const t=JSON.parse(e);Array.isArray(t)&&t.length>0&&$t(t)}}catch(e){console.warn("[MyOrders] Gagal memuat dari localStorage:",e)}return ie},Os=()=>{ea.forEach(e=>{try{typeof e=="function"&&e()}catch{}}),ea=[]},qs=()=>{Os(),ie.filter(a=>{const r=a.status==="Selesai"||a.status==="Dibatalkan",s=a.claimedReward&&(a.claimedReward.status==="Menunggu Persetujuan"||!a.claimedReward.status);return!r||s}).slice(0,10).forEach(a=>{const r=a.orderId;if(!r)return;const s=k.collection("freshmart_orders").doc(r).onSnapshot(o=>{if(!o.exists)return;const i=o.data(),l=i.status,d=i.claimedReward?i.claimedReward.status:null,p=i.claimedReward&&i.claimedReward.note||"";let f=!1,b="";const u=ie.find(w=>w.orderId===r);if(u){if(l&&u.status!==l){const w=u.status;u.status=l,f=!0,w!==void 0&&(b=`Pesanan #${r.split("-").pop()} kini: ${l}`)}u.claimedReward&&d&&(u.claimedReward.status!==d||u.claimedReward.note!==p)&&(u.claimedReward.status=d,u.claimedReward.note=p,f=!0),f&&(Vt(),window.curViewName==="view-orders"&&Pt(),b&&g(b))}},o=>{console.warn("[MyOrders Realtime] Snapshot error:",o.message)});ea.push(s)})},Pt=async()=>{if(yo(),!ie.length){L("orders-empty-state"),$("btn-clear-orders"),L("spacer-orders"),P("orders-items-container","");return}$("orders-empty-state"),L("btn-clear-orders"),$("spacer-orders"),qs(),P("orders-items-container",ie.map((e,t)=>{const a=new Date(e.date).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});let r="text-slate-500 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",s="fa-clock";return e.status==="Baru"?(r="text-rose-600 border-rose-200 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400",s="fa-asterisk"):e.status==="Diproses"?(r="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",s="fa-spinner fa-spin"):e.status==="Selesai"?(r="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",s="fa-check-double"):e.status==="Dibatalkan"&&(r="text-slate-400 border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400",s="fa-xmark"),`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group min-w-0 transition-all hover:border-[var(--color-primary)]/40">
            <div class="flex justify-between items-start mb-3 border-b border-slate-100 dark:border-slate-700/60 pb-3">
                <div>
                    <span class="font-bold text-sm text-slate-800 dark:text-white tracking-tight">#${e.orderId.split("-").pop()}</span>
                    <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5"><i class="fa-regular fa-calendar-days mr-1"></i>${a}</p>
                </div>
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-lg border ${r} uppercase tracking-wider flex items-center shadow-xs"><i class="fa-solid ${s} mr-1.5 text-[9px]"></i> ${c(e.status)}</span>
            </div>
            ${e.pointsEarned>0||e.claimedReward?`
            <div class="flex flex-wrap gap-1.5 mb-3">
                ${e.pointsEarned>0?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400"><i class="fa-solid fa-star mr-1"></i>+${e.pointsEarned} Poin</span>`:""}
                ${e.claimedReward?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)]/40 dark:text-[var(--color-primary)]"><i class="fa-solid fa-gift mr-1"></i>Hadiah: ${c(e.claimedReward.name)} ${Bt(e.claimedReward)}</span>`:""}
                ${e.claimedReward&&e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-slate-100 text-slate-500 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"><i class="fa-solid fa-wallet mr-1"></i>Sisa: ${e.finalMemberPoints} Poin</span>`:""}
            </div>`:""}
            <div class="flex justify-between items-end mt-2 pt-1">
                <div>
                    <p class="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Total Tagihan</p>
                    <p class="text-[var(--color-primary)] font-bold text-base tracking-tight">${x(e.total)} <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium ml-1">(${e.itemCount} Item)</span></p>
                </div>
                <div class="flex gap-2">
                    <button onclick="openCustomerOrderDetail('${e.orderId}')" class="h-8 px-3.5 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] hover:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.35)] text-[11px] font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5"><i class="fa-solid fa-file-invoice"></i> Detail</button>
                    <button onclick="checkOrderStatus('${e.orderId}', ${t})" class="h-8 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-[11px] font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5"><i class="fa-solid fa-rotate"></i> Status</button>
                </div>
            </div>
        </div>`}).join(""))},ko=async(e,t)=>{O("Melacak Status...");try{const a=await k.collection("freshmart_orders").doc(e).get();if(a.exists){const r=a.data();if(ie[t])ie[t].status=r.status;else{const s=ie.findIndex(o=>o.orderId===e);s>-1&&(ie[s].status=r.status)}Vt(),Pt(),g(`✅ Status Pesanan: ${r.status}`)}else g("Pesanan tidak ditemukan di server.")}catch(a){console.error("Gagal cek status pesanan:",a),g("Gagal mengambil data sistem. Periksa koneksi.")}finally{D()}},$o=async()=>{const e=m("order-tracking-input"),t=e?e.value.trim():"";if(!t){g("Masukkan ID Pesanan terlebih dahulu!");return}let a=t.replace(/^#/,"").trim();const r=ie.find(s=>s.orderId===a||s.orderId.endsWith(a));if(r){ta(r.orderId);return}O("Mencari Pesanan...");try{let s=await k.collection("freshmart_orders").doc(a).get();if(!s.exists&&!a.startsWith("ORD-")){const o="ORD-"+a,i=await k.collection("freshmart_orders").doc(o).get();i.exists&&(s=i,a=o)}if(s.exists){const o=s.data();ie.some(l=>l.orderId===a)||(ie.unshift({orderId:a,date:o.dateString||(o.timestamp?o.timestamp.toDate().toISOString():new Date().toISOString()),total:o.payment&&o.payment.grandTotal?o.payment.grandTotal:0,itemCount:(o.items||[]).reduce((l,d)=>l+(parseFloat(d.qty)||0),0),status:o.status||"Baru",pointsEarned:o.pointsEarned||0,claimedReward:o.claimedReward||null,finalMemberPoints:o.finalMemberPoints||null}),Vt(),Pt()),e&&(e.value=""),g("✅ Pesanan berhasil ditemukan!"),ta(a)}else g("❌ Pesanan dengan ID tersebut tidak ditemukan.")}catch(s){console.error("Gagal melacak pesanan:",s),g("Gagal menghubungi server. Pastikan ID Pesanan sudah benar.")}finally{D()}},So=()=>{Le("Hapus Riwayat","Riwayat pesanan di perangkat ini akan dihapus. Pesanan tetap tersimpan di sistem toko. Lanjutkan?",()=>{$t([]),Vt(),Pt(),g("Riwayat lokal dibersihkan")})},ta=async e=>{O("Memuat Rincian...");try{const t=await k.collection("freshmart_orders").doc(e).get();if(!t.exists){g("Pesanan tidak ditemukan."),D();return}const a=t.data();let r=[];if(a.status==="Selesai")try{r=(await k.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(o=>`${o.data().productId}::${o.data().variantName||""}`)}catch{}Us(e,a,r)}catch(t){console.error("Gagal mengambil data pesanan:",t),g("Gagal memuat rincian pesanan. Coba beberapa saat lagi.")}finally{D()}},Us=(e,t,a=[])=>{try{let r=document.getElementById("order-detail-modal");r||(r=document.createElement("div"),r.id="order-detail-modal",r.className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 opacity-0 pointer-events-none transition-opacity duration-300",document.body.appendChild(r));const s=c(t.customer&&t.customer.name?t.customer.name:"-"),o=c(t.customer&&t.customer.wa?t.customer.wa:"-"),i=c(t.customer&&t.customer.address?t.customer.address:"-"),l=t.customer&&t.customer.deliveryMethod==="delivery"?"Dikirim ke Alamat":"Ambil di Toko (Pickup)",d=c(t.customer&&t.customer.note?t.customer.note:""),p=c(t.payment&&t.payment.method?t.payment.method:"Cash / COD"),f=t.items||[],b=f.some(S=>S.poTime&&S.poTime!==""),u=f.map(S=>{const q=parseFloat(S.qty)||0,K=parseFloat(S.effectivePrice||S.price)||0,ne=q*K,he=`${S.id}::${S.variantName||""}`,F=t.status==="Selesai"&&!a.includes(he)&&S.id!==void 0&&S.id!==null;return`
            <div class="flex gap-3 items-center border-b border-slate-100 dark:border-slate-700/50 py-3 last:border-0">
                <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-700" style="background-image:url('${c(S.img||(n&&n.store?n.store.logo:""))}')"></div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate mb-0.5" title="${c(S.name)}">${c(S.name)}</p>
                    ${S.variantName||S.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${S.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded text-[9px] font-semibold">${c(S.variantName)}</span>`:""}
                        ${S.poTime?`<span class="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">PO ${c(S.poTime)}</span>`:""}
                    </div>
                    `:""}
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400">${q} ${c(S.unit||"pcs")} x ${x(K)}</p>
                    ${F?`<button type="button" onclick="openReviewModal('${e}',${S.id},'${encodeURIComponent(S.variantName||"")}','${encodeURIComponent(S.name||"")}','${encodeURIComponent(t.customer?.name||"")}')" class="mt-1.5 text-[10px] font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1 transition-colors"><i class="fa-solid fa-star"></i> Berikan Ulasan</button>`:""}
                </div>
                <div class="text-right shrink-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-[var(--color-primary)]">${x(ne)}</p>
                </div>
            </div>
            `}).join("");let w="Tanggal Tidak Tersedia";try{let S;if(t.timestamp&&typeof t.timestamp.toDate=="function")S=t.timestamp.toDate();else{const q=t.timestamp||t.dateString||Date.now();if(typeof q=="number")S=new Date(q);else if(!isNaN(Number(q))&&String(q).trim()!=="")S=new Date(Number(q));else{const K=String(q).replace(/-/g,"/").replace("T"," ").replace(/\..*$/,"");S=new Date(q),isNaN(S.getTime())&&(S=new Date(K))}}S&&!isNaN(S.getTime())&&(w=S.toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))}catch(S){console.error("Gagal memproses tanggal:",S)}const y=t.payment&&t.payment.subtotal?t.payment.subtotal:0,h=t.payment&&t.payment.shippingCost?t.payment.shippingCost:0,T=t.payment&&t.payment.productDiscount?t.payment.productDiscount:0,E=t.payment&&t.payment.shippingDiscount?t.payment.shippingDiscount:0,M=t.payment&&t.payment.ppnAmount?t.payment.ppnAmount:0,V=t.payment&&t.payment.ppnRate?t.payment.ppnRate:0,I=t.payment&&t.payment.grandTotal?t.payment.grandTotal:0;r.innerHTML=`
            <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[88vh] flex flex-col shadow-2xl transform translate-y-full sm:translate-y-10 scale-100 transition-transform duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden" id="order-detail-content">
                
                <div class="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50 dark:bg-slate-800/80">
                    <div>
                        <h3 class="font-bold text-slate-800 dark:text-white text-base">Rincian Pesanan</h3>
                        <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">ID: #${e.split("-").pop()}</p>
                    </div>
                    <button onclick="closeCustomerOrderDetailModal()" class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-rose-100 hover:text-rose-500 transition-colors active:scale-95"><i class="fa-solid fa-xmark"></i></button>
                </div>
                
                <div class="p-4 sm:p-5 overflow-y-auto flex-1 space-y-5 custom-scrollbar text-sm">
                    <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                        <div>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status Pesanan</p>
                            <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40">${c(t.status||"Baru")}</span>
                        </div>
                        <div class="text-right">
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Waktu Pembelian</p>
                            <p class="text-[11px] font-bold text-slate-700 dark:text-slate-300">${w}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-user text-slate-400"></i> Info Pelanggan</h4>
                            <div class="space-y-1 text-xs">
                                <p class="font-bold text-slate-800 dark:text-slate-200">${s}</p>
                                ${t.customer&&t.customer.wa?`<a href="https://wa.me/${o}" target="_blank" class="flex items-center gap-1 text-[var(--color-primary)] font-bold hover:underline"><i class="fa-brands fa-whatsapp"></i> +${o}</a>`:""}
                                ${t.customer&&t.customer.lat&&t.customer.deliveryMethod==="delivery"?`<a href="https://www.google.com/maps?q=${c(t.customer.lat)},${c(t.customer.lng)}" target="_blank" class="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"><i class="fa-solid fa-location-dot"></i> Lihat Peta</a>`:""}
                            </div>
                        </div>
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-truck text-slate-400"></i> Pengiriman & Bayar</h4>
                            <div class="space-y-1 text-xs">
                                <p><span class="text-slate-500 inline-block w-14">Metode</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${l}</span></p>
                                <p><span class="text-slate-500 inline-block w-14">Bayar</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${p.toUpperCase()}</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2.5">
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1">Alamat Tujuan</p>
                            <p class="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">${i}</p>
                        </div>
                        ${d?`<div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60"><p class="text-[9px] font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest mb-1">Catatan Pembeli</p><p class="text-xs font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic">"${d}"</p></div>`:""}
                    </div>

                    ${t.buktiPayment?`
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-image text-[var(--color-primary)]"></i> Bukti Pembayaran</h4>
                        <a href="${c(t.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border-2 border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] transition-colors shadow-xs">
                            <img src="${c(t.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-52 object-cover" onerror="this.style.display='none'" loading="lazy">
                            <div class="bg-[rgba(var(--color-primary-rgb),0.06)] p-2 flex items-center justify-center gap-1.5 text-[10px] font-bold text-[var(--color-primary)]"><i class="fa-solid fa-arrow-up-right-from-square"></i> Buka Ukuran Penuh</div>
                        </a>
                    </div>`:""}
                    
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-basket-shopping text-slate-400"></i> Daftar Produk</h4>
                        <div class="bg-slate-50 dark:bg-slate-800/30 rounded-xl px-3 py-1 border border-slate-200 dark:border-slate-700/80">
                            ${u}
                        </div>
                    </div>

                    ${b?`
                    <div class="bg-amber-50 dark:bg-amber-900/15 p-3.5 rounded-xl border border-amber-200 dark:border-amber-800/40 flex gap-2.5 items-start">
                        <i class="fa-solid fa-clock text-amber-500 mt-0.5 animate-pulse"></i>
                        <p class="text-[11px] font-semibold text-amber-800 dark:text-amber-300 leading-relaxed">Catatan: Pesanan ini mengandung produk Pre-Order (PO). Khusus produk PO akan dikirimkan menyusul (estimasi sesuai label) tanpa biaya tambahan.</p>
                    </div>`:""}

                    ${t.pointsEarned>0||t.claimedReward||t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null?`
                    <div class="space-y-2">
                        ${t.pointsEarned>0?`<div class="bg-amber-50 dark:bg-amber-900/15 p-3 rounded-xl border border-amber-200 dark:border-amber-800/30 flex items-center gap-2"><i class="fa-solid fa-star text-amber-500"></i><p class="text-xs font-bold text-amber-700 dark:text-amber-400">Mendapat <b>+${t.pointsEarned} Poin</b> dari pesanan ini!</p></div>`:""}
                        ${t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null?`<div class="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2"><i class="fa-solid fa-wallet text-slate-400"></i><p class="text-xs font-semibold text-slate-600 dark:text-slate-300">Saldo Poin Member: <b>${t.finalMemberPoints}</b></p></div>`:""}
                        ${t.claimedReward?`
                        <div class="bg-[rgba(var(--color-primary-rgb),0.06)] p-3 rounded-xl border border-[var(--color-primary)]/20">
                            <div class="flex items-center gap-2"><i class="fa-solid fa-gift text-[var(--color-primary)]"></i><p class="text-xs font-bold text-[var(--color-primary)]">Klaim Hadiah: <b>${c(t.claimedReward.name)}</b> (${t.claimedReward.pointsCost} Poin)</p></div>
                            <p class="text-[11px] font-semibold text-[var(--color-primary)] mt-1 ml-5">${Bt(t.claimedReward)}</p>
                            ${t.claimedReward.note?`<p class="text-[11px] text-[var(--color-primary)]/70 italic mt-0.5 ml-5">"${c(t.claimedReward.note)}"</p>`:""}
                        </div>`:""}
                    </div>`:""}

                    <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl space-y-2 text-xs">
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Subtotal Produk</p><p class="font-bold text-slate-800 dark:text-white">${x(y)}</p></div>
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Ongkos Kirim</p><p class="font-bold text-slate-800 dark:text-white">${x(h)}</p></div>
                        ${E>0?`<div class="flex justify-between text-[var(--color-primary)]"><p>Diskon Ongkir</p><p class="font-bold">-${x(E)}</p></div>`:""}
                        ${T>0?`<div class="flex justify-between text-rose-500"><p>Diskon Promo</p><p class="font-bold">-${x(T)}</p></div>`:""}
                        ${(()=>{if(M<=0)return"";const S=t.payment?.ppnType==="inclusive",q=y-T+(h-E),K=t.payment?.dppAmount||(S?Math.round(q*100/(100+V)):Math.max(0,q));return`
                            <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>DPP (Dasar Pengenaan Pajak)</p><p class="font-bold text-slate-800 dark:text-white">${x(K)}</p></div>
                            <div class="flex justify-between text-amber-600 dark:text-amber-400"><p>${S?"Termasuk PPN":"PPN"} (${V}%)</p><p class="font-bold">${S?"":"+"}${x(M)}</p></div>
                            `})()}
                        <div class="flex justify-between items-center border-t border-dashed border-slate-300 dark:border-slate-700 pt-3 mt-2">
                            <p class="font-bold text-slate-800 dark:text-white uppercase tracking-wider">Total Tagihan</p>
                            <p class="text-lg font-bold text-[var(--color-primary)]">${x(I)}</p>
                        </div>
                    </div>
                </div>
            </div>
        `,r.classList.contains("opacity-0")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("customerOrder"),r.classList.remove("opacity-0","pointer-events-none"),setTimeout(()=>{const S=document.getElementById("order-detail-content");S&&(S.classList.remove("translate-y-full","sm:translate-y-10"),S.classList.add("translate-y-0","sm:translate-y-0"))},50)}catch(r){console.error("Error Render HTML Modal:",r),g("Gagal menampilkan detail. Coba lagi.")}},Po=(e=!1)=>{const t=()=>{const a=document.getElementById("order-detail-modal"),r=document.getElementById("order-detail-content");r&&(r.classList.remove("translate-y-0","sm:translate-y-0"),r.classList.add("translate-y-full","sm:translate-y-10")),setTimeout(()=>{a&&a.classList.add("opacity-0","pointer-events-none")},300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("customerOrder",e,t):t()};window.attachMyOrdersRealtime=qs;window.detachMyOrdersRealtime=Os;window.renderMyOrders=Pt;window.checkOrderStatus=ko;window.trackOrderManual=$o;window.clearMyOrders=So;window.openCustomerOrderDetail=ta;window.renderOrderDetailModal=Us;window.closeCustomerOrderDetailModal=Po;window.reviewPhotoFile=null;window.reviewRating=0;const To=(e,t,a,r,s)=>{const o=decodeURIComponent(a||""),i=decodeURIComponent(r||""),l=decodeURIComponent(s||"");let d=document.getElementById("review-modal");d||(d=document.createElement("div"),d.id="review-modal",d.className="fixed inset-0 z-[120] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5",d.onclick=p=>{p.target===d&&ha()},document.body.appendChild(d)),window.reviewPhotoFile=null,window.reviewRating=0,d.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div class="min-w-0">
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-star text-amber-400"></i> Berikan Ulasan</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest truncate">${c(i)}</p>
                </div>
                <button onclick="closeReviewModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all shrink-0"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
                <div class="text-center">
                    <p class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Beri Bintang</p>
                    <div class="flex items-center justify-center gap-2" id="review-star-picker">
                        ${[1,2,3,4,5].map(p=>`<button type="button" onclick="setReviewRating(${p})" class="review-star text-3xl text-slate-300 dark:text-slate-600 transition-all hover:scale-110" data-star="${p}"><i class="fa-solid fa-star"></i></button>`).join("")}
                    </div>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Ceritakan Pengalaman Anda</label>
                    <textarea id="review-text" rows="4" placeholder="Bagaimana kualitas produknya?" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 shadow-inner"></textarea>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Unggah Foto (Opsional)</label>
                    <input type="file" accept="image/*" id="review-photo-input" onchange="handleReviewPhotoSelect(event)" class="hidden">
                    <div id="review-photo-preview-wrap" class="hidden mb-2.5 relative w-24 h-24">
                        <img id="review-photo-preview" class="w-24 h-24 rounded-xl object-cover border border-slate-200 dark:border-slate-700" loading="lazy">
                        <button type="button" onclick="removeReviewPhoto()" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px] shadow"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <button type="button" onclick="document.getElementById('review-photo-input').click()" id="review-photo-btn" class="w-full py-3 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-slate-400 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"><i class="fa-solid fa-camera"></i> Tambah Foto Bukti</button>
                </div>
            </div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button id="review-submit-btn" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2"><i class="fa-solid fa-paper-plane"></i> Kirim Ulasan</button>
            </div>
        </div>`,m("review-submit-btn").onclick=()=>va(e,t,o,i,l),d.style.opacity="0",d.style.display="flex",requestAnimationFrame(()=>{d.style.transition="opacity 0.25s ease",d.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("review")},Ao=e=>{window.reviewRating=e,document.querySelectorAll(".review-star").forEach(t=>{const a=parseInt(t.dataset.star);t.classList.toggle("text-amber-400",a<=e),t.classList.toggle("text-slate-300",a>e),t.classList.toggle("dark:text-slate-600",a>e)})},Mo=e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/")){g("Hanya file gambar yang diizinkan!");return}if(t.size>5*1024*1024){g("Ukuran gambar max 5MB!");return}window.reviewPhotoFile=t;const a=new FileReader;a.onload=r=>{m("review-photo-preview").src=r.target.result,L("review-photo-preview-wrap"),$("review-photo-btn")},a.readAsDataURL(t)},Do=()=>{window.reviewPhotoFile=null,$("review-photo-preview-wrap"),L("review-photo-btn");const e=m("review-photo-input");e&&(e.value="")},ha=(e=!1)=>{const t=document.getElementById("review-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250),!e&&ke.length&&ke[ke.length-1]==="review"&&(ke.pop(),history.back()))},va=async(e,t,a,r,s)=>{if(!window.reviewRating||window.reviewRating<1)return g("Silakan beri bintang terlebih dahulu!");if(!Qe){ee(!0),O("Mengirim ulasan...");try{let o="";if(window.reviewPhotoFile&&typeof window.uploadBuktiToGDrive=="function"){const d=await window.uploadBuktiToGDrive(window.reviewPhotoFile,"review-"+e);d?o=d:g("Foto gagal diupload, ulasan tetap dikirim tanpa foto.")}const i=Date.now(),l={id:i,orderId:e||"",productId:t??0,variantName:a||"",productName:r||"",customerName:s||"Pelanggan",rating:window.reviewRating,text:C("review-text")||"",photoUrl:o||"",adminReply:"",isVisible:!0,createdAt:ue.firestore.FieldValue.serverTimestamp()};await k.collection("freshmart").doc("cms_data").collection("reviews").doc(i.toString()).set(l),aa.delete(t),ha(),g("✅ Terima kasih atas ulasan Anda!"),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(o){console.error("Gagal mengirim ulasan:",o),g("Gagal mengirim ulasan: "+(o.message||"Error tidak diketahui"))}finally{ee(!1),D()}}},aa=new Map,Co=5*60*1e3,Lo=async e=>{if(!m("product-modal-reviews-container"))return;const a=s=>{const o=s.length?s.reduce((p,f)=>p+(parseFloat(f.rating)||0),0)/s.length:0,i=p=>Array.from({length:5},(f,b)=>`<i class="fa-solid fa-star ${b<Math.round(p)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join("");let l=`
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2"><i class="fa-solid fa-comment-dots text-amber-400"></i> Ulasan Pelanggan</h4>
                ${s.length?`<div class="flex items-center gap-1.5"><span class="flex text-xs">${i(o)}</span><span class="text-xs font-bold text-slate-600 dark:text-slate-300">${o.toFixed(1)}</span><span class="text-[10px] font-bold text-slate-400">(${s.length})</span></div>`:""}
            </div>`;if(!s.length){P("product-modal-reviews-container",l+'<p class="text-[11px] font-bold text-slate-400 text-center py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">Belum ada ulasan untuk produk ini.</p>');return}const d=s.map(p=>{let f="";try{p.createdAt&&p.createdAt.toDate&&(f=p.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}))}catch{}return`
            <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div class="flex items-center justify-between mb-1.5">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${c(p.customerName||"Pelanggan")}</p>
                    <span class="text-[9px] font-bold text-slate-400">${f}</span>
                </div>
                <div class="flex text-[11px] mb-2">${i(p.rating)}</div>
                ${p.variantName?`<p class="text-[10px] font-bold text-slate-400 mb-1.5">Varian: ${c(p.variantName)}</p>`:""}
                ${p.text?`<p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${c(p.text)}</p>`:""}
                ${p.photoUrl?`<div class="w-16 h-16 rounded-xl overflow-hidden mb-3 border border-slate-200 dark:border-slate-700"><img src="${c(p.photoUrl)}" class="w-full h-full object-cover cursor-pointer" onclick="window.open('${c(p.photoUrl)}','_blank')" alt="Foto ulasan"></div>`:""}
                ${p.adminReply?`
                <div class="mt-2.5 p-3 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.2)] rounded-xl">
                    <p class="text-[10px] font-bold text-[var(--color-primary-dark)] dark:text-[var(--color-primary)] mb-1 flex items-center gap-1"><i class="fa-solid fa-reply"></i> Balasan Penjual</p>
                    <p class="text-xs text-slate-600 dark:text-slate-300">${c(p.adminReply)}</p>
                </div>`:""}
            </div>`}).join("");P("product-modal-reviews-container",l+`<div class="space-y-3">${d}</div>`)},r=aa.get(e);if(r&&Date.now()-r.timestamp<Co){a(r.data);return}P("product-modal-reviews-container",'<div class="text-center py-6"><i class="fa-solid fa-spinner fa-spin text-xl text-slate-300"></i></div>');try{let o=(await k.collection("freshmart").doc("cms_data").collection("reviews").where("productId","==",e).get()).docs.map(i=>i.data()).filter(i=>i.isVisible!==!1);o.sort((i,l)=>{const d=i.createdAt&&i.createdAt.toMillis?i.createdAt.toMillis():0;return(l.createdAt&&l.createdAt.toMillis?l.createdAt.toMillis():0)-d}),aa.set(e,{data:o,timestamp:Date.now()}),a(o)}catch(s){console.warn("Gagal memuat ulasan:",s),P("product-modal-reviews-container",'<p class="text-[11px] text-slate-400 text-center py-4">Belum ada ulasan yang dapat dimuat.</p>')}};window.openReviewModal=To;window.setReviewRating=Ao;window.handleReviewPhotoSelect=Mo;window.removeReviewPhoto=Do;window.closeReviewModal=ha;window.submitReview=va;window.submitProductReview=va;window.loadProductReviews=Lo;const ya={products:[{key:"name",label:"Nama Produk",type:"text"},{key:"sku",label:"Barcode / SKU (Kosongkan utk Auto)",type:"text"},{key:"price",label:"Harga Jual Promo (Rp)",type:"number"},{key:"priceNormal",label:"Harga Coret / Normal (Rp) - Opsional",type:"number"},{key:"hpp",label:"Harga Modal / HPP (Rp) — Hanya Seller",type:"number"},{key:"poin",label:"Poin Member (per unit terjual, Produk Tanpa Varian)",type:"number"},{key:"stock",label:"Stok Awal (Qty) — Aktif jika Manajemen Stok ON",type:"number"},{key:"unit",label:"Satuan Dasar (Cth: Pcs, Kg)",type:"text"},{key:"poTime",label:"Estimasi Pre-Order (Opsional)",type:"text"},{key:"video",label:"Link Video YouTube (Opsional)",type:"text"},{key:"img",label:"URL Gambar",type:"text"},{key:"category",label:"Kategori",type:"dynamic_select_category"},{key:"brand",label:"Merek",type:"dynamic_select_brand"},{key:"tag",label:"Label/Tag",type:"text"},{key:"isActive",label:"Status",type:"select",options:[{val:"true",text:"Tersedia"},{val:"false",text:"Habis"}]},{key:"desc",label:"Deskripsi Lengkap",type:"richtext"},{key:"specTable",label:"Tabel Spesifikasi (Opsional)",type:"spec_table_builder"},{key:"wholesale",label:"Grosir",type:"wholesale_builder"},{key:"variants",label:"Varian",type:"variants_builder"}],colors:[{key:"name",label:"Nama Warna",type:"text"},{key:"hex",label:"Kode Warna (Hex) - Opsional",type:"text"},{key:"catalog",label:"Katalog / Merek (Contoh: No Drop)",type:"text"}],categories:[{key:"name",label:"Kategori",type:"text"},{key:"img",label:"URL Ikon",type:"text"}],brands:[{key:"name",label:"Nama Merek",type:"text"},{key:"img",label:"URL Logo Merek",type:"text"}],banks:[{key:"bankName",label:"Nama Bank",type:"text"},{key:"bankAccount",label:"No. Rekening",type:"text"},{key:"bankOwner",label:"Atas Nama",type:"text"}],customers:[{key:"name",label:"Nama Lengkap",type:"text"},{key:"phone",label:"No. WhatsApp Aktif (Cth: 081234567890)",type:"text"},{key:"points",label:"Poin Member (Penyesuaian Manual)",type:"number"}],rewards:[{key:"name",label:"Nama Hadiah",type:"text"},{key:"img",label:"URL Gambar Hadiah",type:"text"},{key:"pointsCost",label:"Poin yang Dibutuhkan",type:"number"},{key:"stock",label:"Stok Hadiah Tersedia",type:"number"},{key:"isActive",label:"Status",type:"select",options:[{val:"true",text:"Aktif (Bisa Ditukar)"},{val:"false",text:"Nonaktif"}]}],banners:[{key:"title",label:"Judul Banner",type:"text"},{key:"desc",label:"Deskripsi Pendek (Opsional)",type:"textarea"},{key:"type",label:"Tipe Banner",type:"select",options:[{val:"image",text:"🖼 Gambar (Default)"},{val:"video",text:"🎬 Video (Drive / YouTube / MP4)"}]},{key:"img",label:"URL Gambar (jika Tipe = Gambar)",type:"text"},{key:"videoUrl",label:"URL / Link Video (Google Drive, YouTube, atau MP4)",type:"text"},{key:"link",label:"Link Tujuan Klik (Opsional)",type:"text"}],vouchers:[{key:"code",label:"Kode Voucher (Cth: MERDEKA50)",type:"text"},{key:"type",label:"Jenis Diskon",type:"select",options:[{val:"percent",text:"Potongan Persen (%)"},{val:"flat",text:"Potongan Rupiah (Rp)"},{val:"shipping_free",text:"Gratis Ongkir (100%)"},{val:"shipping_flat",text:"Potongan Ongkir (Rp)"}]},{key:"value",label:"Nilai Potongan (Contoh: 50 untuk %, atau 10000 untuk Rp)",type:"number"},{key:"minPurchase",label:"Syarat Minimal Belanja (Rp) - 0 Jika Tidak Ada",type:"number"},{key:"maxDiscount",label:"Maksimal Nominal Potongan (Rp) - Khusus Tipe Persen",type:"number"},{key:"targetProduct",label:"Target Produk Spesifik (Pilih jika berlaku khusus)",type:"dynamic_select_products"},{key:"isShow",label:"Tampilkan di Beranda?",type:"select",options:[{val:"true",text:"Ya, Tampilkan Promo"},{val:"false",text:"Sembunyikan"}]}]};window.aF=ya;const Io=()=>{if(window.isAdm||window.location.hostname==="localhost")if(window.__localIsAdm=!0,typeof window.changeView=="function"&&window.changeView("view-admin"),ge.currentUser)Lt();else{const e=ge.onAuthStateChanged(()=>{e(),Lt()})}else se("login-username",""),se("login-password",""),typeof window.changeView=="function"&&window.changeView("view-admin-login")},Lt=()=>{const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0),L("admin-dashboard-view"),$("admin-content-view"),$("btn-admin-back"),L("admin-logo-box"),U("admin-header-title","CMS SELLER"),qe&&(qe(),ht(null)),Re&&(Re(),gt(null)),Fe&&(Fe(),xt(null)),Hs(Ls),ka()},ka=()=>{const e=m("admin-menu-tax-btn");if(!e)return;n.store.ppnEnabled===!0||n.store.ppnEnabled==="true"?(e.classList.remove("hidden"),e.classList.add("flex")):(e.classList.add("hidden"),e.classList.remove("flex"))},Gt=()=>{const e=n.store.useStock===!0||n.store.useStock==="true";let t=0,a=0,r=0,s=0,o=0,i=0;return(n.products||[]).forEach(l=>{if(l.variants&&l.variants.length)l.variants.forEach(d=>{const p=d.isActive!==!1&&d.isActive!=="false",f=parseFloat(d.stock)||0;p&&(!e||f>0)?r++:s++,o+=(parseFloat(d.hpp)||0)*f,i+=(parseFloat(d.price)||0)*f});else{const d=l.isActive!==!1&&l.isActive!=="false",p=parseFloat(l.stock)||0;d&&(!e||p>0)?t++:a++,o+=(parseFloat(l.hpp)||0)*p,i+=(parseFloat(l.price)||0)*p}}),{activeProd:t,inactiveProd:a,activeVar:r,inactiveVar:s,assetHpp:o,assetJual:i}},Oa=new Map,jo=2*60*1e3,Hs=async(e="month")=>{if(Mr(e),document.querySelectorAll(".report-period-btn").forEach(b=>{const u=b.dataset.period===e;b.style.background=u?"var(--color-primary)":"transparent",b.style.color=u?"var(--color-primary-contrast, #fff)":"",b.style.boxShadow=u?"0 2px 8px rgba(var(--color-primary-rgb),0.35)":"none"}),!m("admin-report-container"))return;const a=({totalPenjualan:b,totalHppTerjual:u,totalDiskonProduk:w,orderCount:y,truncated:h})=>{const T=b-u,E=T-w,M={today:"Hari Ini",week:"Minggu Ini",month:"Bulan Ini",all:"Sepanjang Waktu"}[e]||"";P("admin-report-container",`
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Total Penjualan (${M})</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white truncate">${x(b)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">${y} pesanan${h?" (≥3000, dibatasi)":""}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1.5"><i class="fa-solid fa-arrow-trend-up mr-1"></i>Laba Kotor</p>
                    <p class="text-lg sm:text-xl font-bold text-[var(--color-primary)] truncate">${x(T)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Penjualan − HPP Terjual</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-rose-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-tag mr-1"></i>Total HPP Terjual</p>
                    <p class="text-lg sm:text-xl font-bold text-rose-500 truncate">${x(u)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Modal barang yang laku</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-sack-dollar mr-1"></i>Laba Bersih</p>
                    <p class="text-lg sm:text-xl font-bold truncate" style="color:var(--color-primary)">${x(E)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Laba Kotor − Diskon</p>
                </div>
            </div>
        `)},r=Oa.get(e);if(r&&Date.now()-r.timestamp<jo){a(r.data);return}P("admin-report-container",'<div class="text-center py-10"><i class="fa-solid fa-spinner fa-spin text-2xl text-slate-300"></i></div>');let s=null;const o=new Date;if(e==="today")s=new Date(o.getFullYear(),o.getMonth(),o.getDate());else if(e==="week"){const b=o.getDay(),u=b===0?6:b-1;s=new Date(o.getFullYear(),o.getMonth(),o.getDate()-u)}else e==="month"&&(s=new Date(o.getFullYear(),o.getMonth(),1));let i=0,l=0,d=0,p=0,f=!1;try{if(!ge.currentUser){P("admin-report-container",'<div class="text-center py-10 text-slate-400"><i class="fa-solid fa-lock text-2xl mb-3"></i><p class="text-xs font-bold">Login terlebih dahulu untuk melihat laporan.</p></div>');return}let b=k.collection("freshmart_orders");s&&(b=b.where("timestamp",">=",ue.firestore.Timestamp.fromDate(s)));const u=await b.limit(3e3).get();f=u.size>=3e3,u.forEach(y=>{const h=y.data();h.status!=="Dibatalkan"&&(p++,i+=parseFloat(h.payment?.subtotal)||0,d+=parseFloat(h.payment?.productDiscount)||0,(h.items||[]).forEach(T=>{const E=T.hpp!==void 0&&T.hpp!==null?parseFloat(T.hpp):typeof window.getEffHpp=="function"?window.getEffHpp(T):0;l+=(parseFloat(E)||0)*(parseFloat(T.qty)||0)}))});const w={totalPenjualan:i,totalHppTerjual:l,totalDiskonProduk:d,orderCount:p,truncated:f};Oa.set(e,{data:w,timestamp:Date.now()}),a(w)}catch(b){console.error("Gagal memuat laporan penjualan:",b)}},Eo=async()=>{const e=C("login-username"),t=C("login-password");if(!e||!t)return g("Email & Password wajib diisi!");O("Verifikasi Login...");try{if(await ge.signInWithEmailAndPassword(e,t),!ge.currentUser||ge.currentUser.uid!==da){const a=ge.currentUser?ge.currentUser.uid:"null";throw await ge.signOut(),new Error("UID_MISMATCH: "+a)}window.isAdm=!0,history.replaceState({view:"view-admin"},"",window.location.href),typeof window.changeView=="function"&&window.changeView("view-admin",!0),Lt(),g("Login Berhasil!")}catch(a){if(console.error(a),a.message&&a.message.startsWith("UID_MISMATCH:")){const r=a.message.replace("UID_MISMATCH: ","");g("Login Ditolak: UID Anda ("+r+") tidak cocok dengan ADMIN_UID!")}else g("Login Ditolak: Email atau Password salah!")}finally{D()}},Vs=async()=>{O("Keluar...");try{await ge.signOut(),window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,typeof window.updateProBadge=="function"&&window.updateProBadge(),qe&&(qe(),ht(null)),Re&&(Re(),gt(null)),Fe&&(Fe(),xt(null)),g("Berhasil Logout"),typeof window.changeView=="function"&&window.changeView("view-catalog")}catch{g("Gagal Logout")}finally{D()}},_o=()=>{Le("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{Vs()},"Ya, Keluar")};window.checkAdminAccess=Io;window.openAdminMenu=Lt;window.toggleTaxMenuVisibility=ka;window.computeInventoryStats=Gt;window.loadAdminReport=Hs;window.processAdminLogin=Eo;window.logoutAdmin=Vs;window.confirmLogoutAdmin=_o;const Ro=async()=>{if(!ce||ce.length===0)return g("Belum ada data pesanan!");O("Menyiapkan modul Excel...");try{await Ds("https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js",()=>typeof XLSX<"u")}catch{D(),g("Gagal memuat modul Excel. Cek koneksi internet Anda.");return}D();let e=[];ce.forEach((o,i)=>{let l=o.dateString?new Date(o.dateString).toLocaleString("id-ID"):"-",d=o.customer?.name||"Anonim",p=o.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko",f=o.status||"-",b=o.items?o.items.reduce((w,y)=>w+(parseFloat(y.qty)||0),0):0,u=o.payment?.grandTotal||0;e.push({No:i+1,"ID Pesanan":o.orderId,Tanggal:l,"Nama Pelanggan":d,"Metode Kirim":p,Status:f,"Total Item":b,"Total Tagihan (Rp)":u})});const t=XLSX.utils.json_to_sheet(e),a=XLSX.utils.book_new();XLSX.utils.book_append_sheet(a,t,"Laporan Pesanan");const r=[{wch:5},{wch:25},{wch:22},{wch:25},{wch:15},{wch:15},{wch:12},{wch:20}];t["!cols"]=r;const s=new Date().toISOString().split("T")[0];XLSX.writeFile(a,`Laporan_Pesanan_${s}.xlsx`),g("Laporan Excel (.xlsx) berhasil diunduh!")},Fo=()=>{try{const e=new(window.AudioContext||window.webkitAudioContext),t=e.createOscillator(),a=e.createGain();t.connect(a),a.connect(e.destination),t.type="sine",t.frequency.setValueAtTime(800,e.currentTime),a.gain.setValueAtTime(1,e.currentTime),t.frequency.setValueAtTime(600,e.currentTime+.2),t.frequency.setValueAtTime(800,e.currentTime+.6),a.gain.setValueAtTime(1,e.currentTime+.6),t.frequency.setValueAtTime(600,e.currentTime+.8),a.gain.exponentialRampToValueAtTime(1e-5,e.currentTime+1.5),t.start(e.currentTime),t.stop(e.currentTime+1.5)}catch{}},No=()=>{P("admin-content",`
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
    `);const e=()=>{qe&&(qe(),ht(null));let t=!0;const a=k.collection("freshmart_orders").orderBy("timestamp","desc").limit(100).onSnapshot(r=>{if(Fa([]),!t){let o=!1;r.docChanges().forEach(i=>{i.type==="added"&&i.doc.data().status==="Baru"&&(o=!0)}),o&&(g("🔔 Pesanan Baru Masuk!"),Fo())}if(t=!1,r.empty){P("admin-orders-list",'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-receipt text-5xl mb-4 opacity-30"></i>Belum ada pesanan</div>'),U("stat-orders",0);return}U("stat-orders",r.size+(r.size===100?"+":""));const s=[];P("admin-orders-list",r.docs.map(o=>{const i=o.data();s.push(i);let l="text-slate-500 border-slate-200 dark:border-slate-600",d="fa-clock",p="bg-slate-50 dark:bg-slate-700/50",f="text-slate-400";i.status==="Baru"?(l="text-rose-500 border-rose-200 bg-rose-50 dark:bg-rose-900/20 dark:border-rose-800 animate-pulse",d="fa-asterisk",p="bg-rose-500",f="text-white shadow-md shadow-rose-500/30"):i.status==="Diproses"?(l="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30",d="fa-spinner fa-spin",p="primary-bg",f="shadow-sm"):i.status==="Selesai"?(l="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30",d="fa-check-double",p="primary-bg-soft",f="primary-text"):i.status==="Dibatalkan"&&(l="text-slate-400 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",d="fa-xmark",p="bg-slate-100 dark:bg-slate-800",f="text-slate-400");let b="fa-wallet text-slate-400",u=i.payment?.method||"";u==="transfer"?b="fa-building-columns text-[var(--color-primary)]":u==="qris"?b="fa-qrcode text-purple-500":u==="cod"?b="fa-hand-holding-dollar text-[var(--color-primary)]":u==="cashier"&&(b="fa-cash-register text-amber-500");let w=i.items?parseFloat(i.items.reduce((T,E)=>T+(parseFloat(E.qty)||0),0).toFixed(2)):0;const y=i.dateString?new Date(i.dateString).toLocaleDateString("id-ID",{day:"numeric",month:"short"}):"",h=(i.orderId||"").split("-").pop();return`
                <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-primary)] transition-all duration-300" onclick="openOrderDetail('${i.orderId}')">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${p} ${f} flex items-center justify-center shrink-0 transition-colors">
                            <i class="fa-solid fa-receipt text-xl sm:text-2xl"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex justify-between items-start mb-1">
                                <div class="flex items-center gap-2">
                                    <span class="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 tracking-tight">#${h}</span>
                                    <span class="text-[9px] font-bold px-2 py-0.5 rounded border ${l} uppercase tracking-widest flex items-center"><i class="fa-solid ${d} mr-1"></i> ${c(i.status)}</span>
                                </div>
                                <span class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5 whitespace-nowrap"><i class="fa-regular fa-calendar"></i> <span class="hidden sm:inline">${y}</span></span>
                            </div>
                            <div class="flex items-center gap-2 mt-1.5">
                                <p class="text-xs font-bold text-slate-600 dark:text-slate-300 truncate max-w-[120px] sm:max-w-xs"><i class="fa-solid fa-user text-slate-400 mr-1"></i> ${c(i.customer?.name||"Anonim")}</p>
                                <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0"></span>
                                <span class="text-[9px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-xl border border-slate-200 dark:border-slate-700 uppercase tracking-widest shrink-0">${w} Item</span>
                                ${i.customer?.lat?'<span class="text-[9px] font-bold text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] px-1.5 py-0.5 rounded-xl border border-[rgba(var(--color-primary-rgb),0.2)] uppercase tracking-widest shrink-0"><i class="fa-solid fa-location-dot"></i> GPS</span>':""}
                                ${i.buktiPayment?'<span class="text-[9px] font-bold text-violet-500 bg-violet-50 dark:bg-violet-900/20 px-1.5 py-0.5 rounded-xl border border-violet-100 dark:border-violet-800 uppercase tracking-widest shrink-0"><i class="fa-solid fa-image"></i></span>':""}
                            </div>
                        </div>
                        <div class="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:primary-bg transition-all shrink-0" style="transition: background-color 0.2s, color 0.2s">
                            <i class="fa-solid fa-chevron-right text-sm"></i>
                        </div>
                    </div>
                    <div class="w-full border-t border-dashed border-slate-200 dark:border-slate-700 my-4"></div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-[var(--color-primary)] text-lg sm:text-xl tracking-tight">${x(i.payment?.grandTotal)}</span>
                            ${i.payment?.ppnAmount?`<span class="text-[8px] font-bold bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800 uppercase tracking-widest">PPN ${i.payment.ppnRate||11}%</span>`:""}
                        </div>
                        <div class="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-700">
                            <i class="fa-solid ${b} text-xs"></i>
                            <span class="text-[9px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">${c(u)}</span>
                        </div>
                    </div>
                </div>`}).join("")),Fa(s)},()=>{P("admin-orders-list",'<div class="text-center text-rose-500 font-bold">Koneksi terputus. Retrying...</div>'),setTimeout(e,5e3)});ht(a)};e()},$a=e=>{const t=ce.find(s=>s.orderId===e);if(!t)return;Tr(e);let a=`<div class="relative w-full sm:w-40 mt-1"><select onchange="updateOrderStatus('${t.orderId}', this.value)" class="w-full text-sm font-bold ${t.status==="Baru"?"text-rose-600 bg-rose-50 border-rose-200":t.status==="Diproses"?"text-blue-600 bg-blue-50 border-blue-200":t.status==="Selesai"?"text-emerald-600 bg-emerald-50 border-emerald-200":"text-slate-500 bg-slate-50 border-slate-200"} border px-4 py-2.5 rounded-xl focus:outline-none appearance-none cursor-pointer transition-colors shadow-sm"><option value="Baru" ${t.status==="Baru"?"selected":""} class="text-slate-800">Baru (Pending)</option><option value="Diproses" ${t.status==="Diproses"?"selected":""} class="text-slate-800">Diproses</option><option value="Selesai" ${t.status==="Selesai"?"selected":""} class="text-slate-800">Selesai</option><option value="Dibatalkan" ${t.status==="Dibatalkan"?"selected":""} class="text-slate-800">Dibatalkan</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 ${t.status==="Baru"?"text-rose-400":t.status==="Diproses"?"text-blue-400":t.status==="Selesai"?"text-emerald-400":"text-slate-400"} pointer-events-none text-xs"></i></div>`;P("admin-order-modal-content",`
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
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Status</span><span class="font-bold text-xs px-2 py-1 rounded-xl ${t.claimedReward.status==="ready"?"bg-emerald-100 text-emerald-600":t.claimedReward.status==="waiting_stock"?"bg-amber-100 text-amber-600":"bg-slate-200 text-slate-600"}">${Bt(t.claimedReward)}</span></div>
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
                    ${(()=>{if(!t.payment?.ppnAmount||t.payment.ppnAmount<=0)return"";const s=t.payment.ppnType==="inclusive",o=t.payment.ppnRate||11,i=t.payment.ppnAmount,l=(t.payment.subtotal||0)-(t.payment.productDiscount||0)+(t.payment.shippingCost||0)-(t.payment.shippingDiscount||0),d=t.payment.dppAmount||(s?Math.round(l*100/(100+o)):Math.max(0,l));return`
                        <div class="flex justify-between items-center text-slate-400"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-bold text-white">${x(d)}</span></div>
                        <div class="flex justify-between items-center text-amber-400 bg-amber-900/20 px-2 py-1 -mx-2 rounded-xl"><span>${s?"Termasuk PPN":"PPN"} (${o}%)</span><span class="font-bold">${s?"":"+"}${x(i)}</span></div>
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
        </div>`);const r=m("admin-order-modal");r&&r.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminOrder"),L("admin-order-modal"),setTimeout(()=>{m("admin-order-modal")&&m("admin-order-modal").classList.remove("opacity-0"),m("admin-order-modal-box")&&m("admin-order-modal-box").classList.remove("scale-95")},10)},Bo=async(e,t)=>{const r=(typeof window.normalizeWA=="function"?window.normalizeWA:s=>String(s||"").replace(/\D/g,"").replace(/^0/,"62"))(t);if(!r||r.length<10)return g("Nomor WA tidak valid!");O("Menyimpan...");try{const s=k.collection("freshmart").doc("cms_data").collection("customers").doc(r),o=await s.get();o.exists?(await s.set({name:e||o.data().name},{merge:!0}),g("Data pelanggan sudah ada, nama diperbarui.")):(await s.set({id:parseInt(r,10),name:e||"-",phone:r,points:0}),g("✅ Pelanggan baru disimpan ke database!"))}catch(s){console.error("Gagal simpan pelanggan:",s),g("Gagal menyimpan data pelanggan: "+(s.message||""))}finally{D()}},Oo=async(e,t)=>{if(t==="waiting_stock"&&typeof window.customPrompt=="function"){window.customPrompt("Catatan untuk pelanggan:","Stok hadiah kosong, akan kami kirim susulan begitu stok tersedia kembali.",async r=>{if(r!==null){O("Menyimpan...");try{await k.collection("freshmart_orders").doc(e).update({"claimedReward.status":t,"claimedReward.note":r||""}),g("Status klaim hadiah diperbarui!");let s=ce.findIndex(o=>o.orderId===e);s!==-1&&(ce[s].claimedReward||(ce[s].claimedReward={}),ce[s].claimedReward.status=t,ce[s].claimedReward.note=r||""),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(s){g("Gagal update klaim: "+s.message)}finally{D()}}});return}let a="";O("Menyimpan...");try{await k.collection("freshmart_orders").doc(e).update({"claimedReward.status":t,"claimedReward.note":a});const r=ce.find(s=>s.orderId===e);r&&(r.claimedReward.status=t,r.claimedReward.note=a,$a(e)),g("Status hadiah diperbarui!")}catch(r){console.error("Gagal update status hadiah:",r),g("Gagal update status hadiah: "+(r.message||""))}finally{D()}},Gs=(e=!1)=>{const t=()=>{m("admin-order-modal")&&m("admin-order-modal").classList.add("opacity-0"),m("admin-order-modal-box")&&m("admin-order-modal-box").classList.add("scale-95"),setTimeout(()=>$("admin-order-modal"),300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminOrder",e,t):t()},qo=async(e,t)=>{if(!Qe){ee(!0),O("Update...");try{await k.collection("freshmart_orders").doc(e).update({status:t});let a=ce.find(r=>r.orderId===e);a&&(a.status=t),$a(e),g("Status diupdate!")}catch{g("Gagal!")}finally{ee(!1),D()}}},Uo=async e=>{if(!e)return g("ID pesanan tidak valid!");O("Memuat data...");try{const t=await k.collection("freshmart_orders").doc(e).get();if(D(),!t.exists)return g("Data pesanan tidak ditemukan!");const a=t.data(),r=a.customer&&a.customer.wa;if(!r)return g("Nomor WhatsApp pelanggan tidak tersedia!");const s=n&&n.store&&n.store.name?n.store.name:"Toko Kami",o=a.customer&&a.customer.name?a.customer.name:"Pelanggan",i=a.status||"Baru",l=a.payment&&a.payment.grandTotal?x(a.payment.grandTotal):"-",d=a.payment&&a.payment.method?a.payment.method.toUpperCase():"-",p=`Halo *${o}*! 👋

Terima kasih telah berbelanja di *${s}*. 🛒

*Detail Pesanan Anda:*
📋 ID: *${e.split("-").pop()}*
💰 Total: *${l}*
💳 Pembayaran: *${d}*
📦 Status: *${i}*

Kami akan segera memproses pesanan Anda. Terima kasih! 🙏`;window.open(`https://wa.me/${r}?text=${encodeURIComponent(p)}`,"_blank")}catch{D(),g("Gagal memuat data pesanan!")}},Ho=e=>{Le("Hapus Pesanan","Yakin ingin hapus permanen?",async()=>{if(!Qe){ee(!0),O("Menghapus...");try{await k.collection("freshmart_orders").doc(e).delete(),g("Terhapus!"),ct===e&&Gs()}catch{g("Gagal!")}finally{ee(!1),D()}}})};window.exportOrdersToExcel=Ro;window.rAdmOrd=No;window.openOrderDetail=$a;window.saveOrderCustomerToDB=Bo;window.ackRewardClaim=Oo;window.closeOrderDetailModal=Gs;window.updateOrderStatus=qo;window.konfirmasiKeWA=Uo;window.deleteOrder=Ho;const Vo=()=>{const e=n.store.name||"Toko Grosir",t=n.store.themeColor||"#10b981",a=(o,i,l=!1)=>{let d=document.querySelector(`meta[${l?"property":"name"}="${o}"]`);d||(d=document.createElement("meta"),l?d.setAttribute("property",o):d.setAttribute("name",o),document.head.appendChild(d)),d.setAttribute("content",i)};a("theme-color",t),a("mobile-web-app-capable","yes"),a("apple-mobile-web-app-capable","yes"),a("apple-mobile-web-app-status-bar-style","black-translucent"),a("apple-mobile-web-app-title",e),a("application-name",e),a("msapplication-TileColor",t),document.title=e,localStorage.setItem("freshmart_theme_color",t),n.store.uiTheme&&n.store.uiTheme!==localStorage.getItem("freshmart_ui_theme")&&(localStorage.setItem("freshmart_ui_theme",n.store.uiTheme),Ve(n.store.uiTheme));const r=n.store.bgStyle||localStorage.getItem("freshmart_bg_style")||"minimalist",s=n.store.bgCustomUrl!==void 0?n.store.bgCustomUrl:localStorage.getItem("freshmart_bg_custom_url")||"";Ge(r,s)},Ks=()=>{P("admin-content",`
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
    `)},Go=e=>{const t=Ze[e][500],a=document.getElementById("set-ui-theme"),r=document.getElementById("set-theme-color"),s=document.getElementById("set-theme-color-picker");a&&(a.value=e),r&&(r.value=t),s&&(s.value=t),document.querySelectorAll(".preset-color-chip").forEach(l=>{l.classList.remove("ring-4","ring-offset-2","ring-slate-400","dark:ring-slate-500","scale-110"),l.querySelector(".check-icon")?.classList.add("hidden")});const o=document.getElementById(`preset-chip-${e}`);o&&(o.classList.add("ring-4","ring-offset-2","ring-slate-400","dark:ring-slate-500","scale-110"),o.querySelector(".check-icon")?.classList.remove("hidden"));const i=document.getElementById("custom-color-chip");if(i){i.style.background="";const l=i.querySelector("i");l&&(l.style.color="")}Ve(e,t)},Ko=e=>{const t=document.getElementById("set-bg-style");t&&(t.value=e);const a=document.getElementById("set-bg-custom-url")?.value||"";document.querySelectorAll(".bg-style-card").forEach(s=>{s.classList.remove("border-[var(--color-primary)]","shadow-md","ring-2","ring-[var(--color-primary)]/20"),s.classList.add("border-slate-200","dark:border-slate-700");const o=s.querySelector(".bg-icon-wrap");o&&(o.className="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300")});const r=document.getElementById(`bg-opt-${e}`);if(r){r.classList.add("border-[var(--color-primary)]","shadow-md","ring-2","ring-[var(--color-primary)]/20"),r.classList.remove("border-slate-200","dark:border-slate-700");const s=r.querySelector(".bg-icon-wrap");s&&(s.className="bg-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-base transition-transform bg-[var(--color-primary)] text-white shadow-sm")}Ge(e,a)},Wo=e=>{let t,a,r,s;if(e==="profile"){t="Profil Toko & Tampilan Visual",a="fa-store",r={line:"bg-[var(--color-primary)]",box:"bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)]"};const i=n.store.uiTheme||"emerald",l=n.store.bgStyle||localStorage.getItem("freshmart_bg_style")||"minimalist",d={emerald:"Emerald",teal:"Teal",lime:"Lime",cyan:"Cyan",sky:"Sky",blue:"Blue",indigo:"Indigo",violet:"Violet",purple:"Purple",fuchsia:"Fuchsia",pink:"Pink",rose:"Rose",red:"Red",orange:"Orange",amber:"Amber",yellow:"Yellow",green:"Green",slate:"Slate",stone:"Stone"},p=Object.keys(Ze).map(f=>{const b=Ze[f][500],u=d[f]||f,w=i===f;return`
                <button type="button" id="preset-chip-${f}" onclick="selectPresetTheme('${f}')" 
                        class="preset-color-chip w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 ${w?"ring-4 ring-offset-2 ring-slate-400 dark:ring-slate-500 scale-110":""}" 
                        style="background-color: ${b}; border: 1.5px solid rgba(0,0,0,0.08)" 
                        title="${u}">
                    <i class="check-icon fa-solid fa-check text-white text-[11px] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${w?"":"hidden"}"></i>
                </button>
            `}).join("");s=`
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Toko (Nama Aplikasi)</label>
                    <input autocomplete='off' id="set-name" value="${c(n.store.name)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Slogan Toko</label>
                    <input autocomplete='off' id="set-slogan" value="${c(n.store.slogan)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>
            
            <!-- Warna Tema Toko -->
            <div class="grid grid-cols-1 gap-3">
                <div class="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl">
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-widest flex items-center gap-2">
                        <i class="fa-solid fa-palette" style="color:var(--color-primary)"></i> Warna Tema &amp; Header PWA
                    </label>
                    <input type="hidden" id="set-ui-theme" value="${i}">
                    <input type="hidden" id="set-theme-color" value="${c(n.store.themeColor||"#10b981")}">
                    <div class="flex flex-wrap gap-3">
                        ${p}
                        <div class="relative" title="Warna Kustom (Klik untuk pilih warna bebas)">
                            <label for="set-theme-color-picker" class="w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 border-2 border-dashed border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]" id="custom-color-chip">
                                <i class="fa-solid fa-pen text-slate-500 dark:text-slate-400 text-[11px]"></i>
                            </label>
                            <input type="color" id="set-theme-color-picker" value="${c(n.store.themeColor||"#10b981")}" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
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
                            <input autocomplete="off" id="set-bg-custom-url" value="${c(n.store.bgCustomUrl||"")}"
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
                        <input autocomplete='off' id="set-logo" value="${c(n.store.logo)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm flex-1">
                        <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                            <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload
                            <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-logo')">
                        </label>
                    </div>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Email Toko</label>
                    <input autocomplete='off' id="set-email" value="${c(n.store.email||"")}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>

            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Deskripsi Toko</label>
                <textarea id="set-description" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full" rows="3">${c(n.store.description)}</textarea>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Jam Operasional</label>
                    <input autocomplete='off' id="set-hours" value="${c(n.store.operationalHours||"")}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Teks Hak Cipta Footer</label>
                    <input autocomplete='off' id="set-credit" value="${c(n.store.footerCredit||"")}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>

            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tampilkan Katalog Tukar Hadiah di Beranda</label>
                <select id="set-show-reward-catalog" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                    <option value="true" ${n.store.showRewardCatalog!==!1?"selected":""}>Ya, Tampilkan Hadiah</option>
                    <option value="false" ${n.store.showRewardCatalog===!1?"selected":""}>Sembunyikan</option>
                </select>
            </div>
        `}else e==="catalog"?(t="Tampilan Kategori & Merek",a="fa-palette",r={line:"bg-blue-500",box:"bg-blue-50 text-blue-500"},s=`
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gaya Tampilan Kategori</label>
                    <select id="set-category-style" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="grid" ${n.store.categoryStyle==="grid"?"selected":""}>Grid Ikon</option>
                        <option value="pill" ${n.store.categoryStyle==="pill"?"selected":""}>Pill Horizontal Scroll</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gaya Tampilan Merek</label>
                    <select id="set-brand-style" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="logo" ${n.store.brandStyle==="logo"||!n.store.brandStyle?"selected":""}>Logo Kotak (Grid)</option>
                        <option value="text" ${n.store.brandStyle==="text"?"selected":""}>Pill Horizontal Scroll</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tampilkan Slider Kategori di Beranda</label>
                    <select id="set-show-categories" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${n.store.showCategories!==!1?"selected":""}>Tampilkan</option>
                        <option value="false" ${n.store.showCategories===!1?"selected":""}>Sembunyikan</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tampilkan Slider Merek di Beranda</label>
                    <select id="set-show-brands" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${n.store.showBrands!==!1?"selected":""}>Tampilkan</option>
                        <option value="false" ${n.store.showBrands===!1?"selected":""}>Sembunyikan</option>
                    </select>
                </div>
            </div>
        `):e==="shipping"?(t="Pengiriman & Lokasi Toko",a="fa-motorcycle",r={line:"bg-amber-500",box:"bg-amber-50 text-amber-500"},s=`
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nomor WhatsApp Admin</label>
                    <input autocomplete='off' id="set-wa" value="${c(n.store.wa||"")}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full" placeholder="Contoh: 08123456789">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Ongkir per Kilometer (Rp)</label>
                    <input autocomplete='off' type="number" id="set-cost" value="${c(n.store.costPerKm||0)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Alamat Lengkap Toko</label>
                <textarea id="set-address" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full" rows="3">${c(n.store.address||"")}</textarea>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Opsi Kirim ke Alamat</label>
                    <select id="set-delivery-enabled" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${n.store.isDeliveryEnabled!==!1?"selected":""}>Aktif</option>
                        <option value="false" ${n.store.isDeliveryEnabled===!1?"selected":""}>Nonaktif</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Opsi Ambil di Toko</label>
                    <select id="set-pickup-enabled" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${n.store.isPickupEnabled!==!1?"selected":""}>Aktif</option>
                        <option value="false" ${n.store.isPickupEnabled===!1?"selected":""}>Nonaktif</option>
                    </select>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Latitude Toko (GPS)</label>
                    <input autocomplete='off' id="set-lat" value="${c(n.store.lat||"")}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Longitude Toko (GPS)</label>
                    <input autocomplete='off' id="set-lng" value="${c(n.store.lng||"")}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>
        `):e==="payment"?(t="Metode Pembayaran QRIS",a="fa-qrcode",r={line:"bg-indigo-500",box:"bg-indigo-50 text-indigo-500"},s=`
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">URL Gambar Barcode QRIS</label>
                <div class="flex gap-2">
                    <input autocomplete='off' id="set-qris-url" value="${c(n.payment?.qrisUrl||"")}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm flex-1" placeholder="URL QRIS Image (atau klik Upload)">
                    <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                        <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload QRIS
                        <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-qris-url')">
                    </label>
                </div>
                ${n.payment?.qrisUrl?`
                    <div class="mt-4 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl flex items-center gap-4">
                        <img src="${c(n.payment.qrisUrl)}" alt="Preview QRIS" class="w-20 h-20 object-contain rounded-xl bg-white border border-slate-200 dark:border-slate-600 p-1">
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
                <input autocomplete='off' id="set-gas-url" value="${c(n.config?.gasUrl||"")}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full" placeholder="https://script.google.com/macros/s/.../exec">
                <p class="text-[9px] text-slate-500 dark:text-slate-400 mt-2">Digunakan untuk upload gambar produk & video promosi langsung ke Google Drive.</p>
            </div>
        `):e==="operasional"&&(t="Operasional & Pajak",a="fa-sliders",r={line:"bg-violet-500",box:"bg-violet-50 text-violet-500"},s=`
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Manajemen Stok Produk</label>
                    <select id="set-use-stock" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${n.store.useStock===!0?"selected":""}>Aktif (Produk otomatis habis jika stok 0)</option>
                        <option value="false" ${n.store.useStock!==!0?"selected":""}>Nonaktif (Stok tak terbatas)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Perhitungan Pajak PPN</label>
                    <select id="set-ppn-enabled" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="true" ${n.store.ppnEnabled===!0?"selected":""}>Aktif</option>
                        <option value="false" ${n.store.ppnEnabled!==!0?"selected":""}>Nonaktif</option>
                    </select>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tipe PPN</label>
                    <select id="set-ppn-type" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                        <option value="exclusive" ${n.store.ppnType!=="inclusive"?"selected":""}>Eksklusif (Ditambah di checkout)</option>
                        <option value="inclusive" ${n.store.ppnType==="inclusive"?"selected":""}>Inklusif (Sudah termasuk di harga)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tarif PPN (%)</label>
                    <input autocomplete='off' type="number" id="set-ppn-rate" value="${c(n.store.ppnRate||11)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm w-full">
                </div>
            </div>
        `);let o=`
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
    `;if(P("admin-content",o),e==="profile"){const i=n.store.uiTheme||"",l=n.store.themeColor||"#10b981";(i==="custom"||!Ze?.[i])&&setTimeout(()=>{const p=document.getElementById("custom-color-chip");if(p){p.style.background=l;const f=p.querySelector("i");f&&(f.style.color="#fff")}},50)}},Qo=async e=>{if(!Qe){ee(!0),O("Menyimpan...");try{e==="profile"?(n.store.name=C("set-name"),n.store.slogan=C("set-slogan"),n.store.logo=W(C("set-logo")),n.store.description=C("set-description"),n.store.email=C("set-email"),n.store.showRewardCatalog=C("set-show-reward-catalog")==="true",n.store.operationalHours=C("set-hours"),n.store.footerCredit=C("set-credit"),n.store.themeColor=C("set-theme-color"),n.store.uiTheme=C("set-ui-theme"),n.store.bgStyle=C("set-bg-style")||"minimalist",n.store.bgCustomUrl=W(C("set-bg-custom-url")),localStorage.setItem("freshmart_theme_color",n.store.themeColor),localStorage.setItem("freshmart_ui_theme",n.store.uiTheme),localStorage.setItem("freshmart_bg_style",n.store.bgStyle),localStorage.setItem("freshmart_bg_custom_url",n.store.bgCustomUrl||""),Ve(n.store.uiTheme,n.store.themeColor),Ge(n.store.bgStyle,n.store.bgCustomUrl)):e==="catalog"?(n.store.categoryStyle=C("set-category-style"),n.store.brandStyle=C("set-brand-style"),n.store.showCategories=C("set-show-categories")==="true",n.store.showBrands=C("set-show-brands")==="true"):e==="shipping"?(n.store.wa=C("set-wa").replace(/\D/g,""),n.store.address=C("set-address"),n.store.costPerKm=C("set-cost"),n.store.isDeliveryEnabled=C("set-delivery-enabled")==="true",n.store.isPickupEnabled=C("set-pickup-enabled")==="true",n.store.lat=C("set-lat"),n.store.lng=C("set-lng")):e==="payment"?(n.payment||(n.payment={}),n.payment.qrisUrl=W(C("set-qris-url"))):e==="config"?(n.config||(n.config={}),n.config.gasUrl=C("set-gas-url"),g("Pengaturan GAS URL tersimpan.")):e==="operasional"&&(n.store.useStock=C("set-use-stock")==="true",n.store.ppnEnabled=C("set-ppn-enabled")==="true",n.store.ppnType=C("set-ppn-type")||"exclusive",n.store.ppnRate=parseFloat(C("set-ppn-rate"))||11,ka());const t={profile:"store",catalog:"store",shipping:"store",operasional:"store",payment:"payment",config:"config"};typeof window.saveApp=="function"&&await window.saveApp([t[e]||"store"]),e==="profile"||e==="config"?(g(e==="config"?"Sistem Diperbarui! Memuat Ulang...":"Warna Berubah! Memuat Ulang..."),setTimeout(()=>location.reload(),1500)):(g("Tersimpan!"),Ks())}catch{g("Gagal menyimpan pengaturan")}finally{ee(!1),D()}}},zo=()=>{const e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(n,null,2)),t=document.createElement("a");t.href=e,t.download=`backup_freshmart_${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(t),t.click(),t.remove(),g("Backup diunduh!")},Jo=e=>{const t=e.target.files[0];if(!t)return;const a=new FileReader;a.onload=async r=>{try{const s=JSON.parse(r.target.result);Object.assign(n,s),typeof window.saveApp=="function"&&await window.saveApp(),g("Data dipulihkan!"),setTimeout(()=>location.reload(),1e3)}catch{g("Gagal memulihkan data!")}},a.readAsText(t)};window.syncAppMeta=Vo;window.rAdmSet=Ks;window.selectPresetTheme=Go;window.selectBgStyle=Ko;window.openSettingForm=Wo;window.saveAdminSettings=Qo;window.backupData=zo;window.restoreData=Jo;let re=new Date().getFullYear(),oe=0,Ne="menu",Be=null;const Oe=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],Yo=e=>{if(typeof window.getEffHpp=="function")return window.getEffHpp(e);const t=n.products?.find(a=>a.id===e.id);if(!t)return 0;if(e.variantName&&t.variants){const a=t.variants.find(r=>r.name===e.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(t.hpp)||0},qa=new Map,Xo=2*60*1e3,Sa=async e=>{const t=qa.get(e);if(t&&Date.now()-t.timestamp<Xo)return t.data;const a={};for(let r=1;r<=12;r++)a[r]={omset:0,ppn:0,hpp:0,disc:0,orderCount:0};try{const r=new Date(e,0,1),s=new Date(e+1,0,1);(await k.collection("freshmart_orders").where("timestamp",">=",ue.firestore.Timestamp.fromDate(r)).where("timestamp","<",ue.firestore.Timestamp.fromDate(s)).limit(5e3).get()).forEach(l=>{const d=l.data();if(d.status==="Dibatalkan"||!d.timestamp||!d.timestamp.toDate)return;const p=d.timestamp.toDate().getMonth()+1;if(!a[p])return;const f=d.payment?.dppAmount!==void 0&&d.payment?.dppAmount!==null?parseFloat(d.payment.dppAmount):parseFloat(d.payment?.subtotal)||0;a[p].omset+=f,a[p].ppn+=parseFloat(d.payment?.ppnAmount)||0,a[p].disc+=parseFloat(d.payment?.productDiscount)||0,a[p].orderCount++,(d.items||[]).forEach(b=>{const u=b.hpp!==void 0&&b.hpp!==null?parseFloat(b.hpp):Yo(b);a[p].hpp+=(parseFloat(u)||0)*(parseFloat(b.qty)||0)})})}catch(r){console.error("Gagal memuat data pajak:",r),g("Gagal memuat data periode ini!")}return qa.set(e,{data:a,timestamp:Date.now()}),a},yt=()=>Be?(oe===0?Object.keys(Be):[oe]).reduce((t,a)=>{const r=Be[a];return t.omset+=r.omset,t.ppn+=r.ppn,t.hpp+=r.hpp,t.disc+=r.disc,t.orderCount+=r.orderCount,t},{omset:0,ppn:0,hpp:0,disc:0,orderCount:0}):{omset:0,ppn:0,hpp:0,disc:0,orderCount:0},Pa=()=>{const e=n.taxSettings?.monthlyExpenses||{};return(oe===0?Array.from({length:12},(a,r)=>r+1):[oe]).reduce((a,r)=>a+(parseFloat(e[`${re}-${r}`])||0),0)},Zo=async()=>{P("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),Be=await Sa(re),Ta()},Ta=()=>{const e=Array.from({length:6},(r,s)=>new Date().getFullYear()-4+s),t=[{k:"summary",l:"Ringkasan PPN",i:"fa-receipt"},{k:"income",l:"Laba Rugi",i:"fa-chart-pie"},{k:"balance",l:"Neraca",i:"fa-scale-balanced"},{k:"settings",l:"Pengaturan",i:"fa-gear"}];Ne==="menu"&&(Ne="summary");const a=`
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
        
        ${Ne==="settings"?"":`
        <div class="flex items-center gap-2">
            <select id="tax-year-select" onchange="changeTaxYear(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                ${e.map(r=>`<option value="${r}" ${r===re?"selected":""}>${r}</option>`).join("")}
            </select>
            <select id="tax-month-select" onchange="changeTaxMonth(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                <option value="0" ${oe===0?"selected":""}>Setahun Penuh</option>
                ${Oe.map((r,s)=>`<option value="${s+1}" ${oe===s+1?"selected":""}>${r} ${re}</option>`).join("")}
            </select>
        </div>
        `}
    </div>

    <!-- Sub-Tab Navigation Bar -->
    <div class="flex items-center gap-2 mb-5 overflow-x-auto hide-scrollbar pb-1">
        ${t.map(r=>{const s=Ne===r.k;return`
            <button onclick="switchTaxTab('${r.k}')" class="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2 shrink-0 ${s?"primary-bg text-white shadow-glow":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[rgba(var(--color-primary-rgb),0.4)]"}">
                <i class="fa-solid ${r.i} text-xs"></i>
                <span>${r.l}</span>
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
    </div>`),Kt()},ei=e=>{Ne=e,Ta()},ti=async e=>{re=parseInt(e,10),P("tax-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),Be=await Sa(re),Kt()},ai=e=>{oe=parseInt(e,10),Kt()},Kt=()=>{Ne==="summary"?Ws():Ne==="income"?Aa():Ne==="balance"?Ma():Ne==="settings"&&Qs()},Ws=()=>{const e=yt(),t=oe===0?`Tahun ${re}`:`${Oe[oe-1]} ${re}`,a=e.omset-e.disc,r=Array.from({length:12},(s,o)=>o+1).map(s=>{const o=Be?Be[s]:{omset:0,ppn:0,orderCount:0};return`<tr class="${oe===s?"bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.14)] font-bold":"hover:bg-slate-50 dark:hover:bg-slate-700/30"} border-b border-slate-100 dark:border-slate-700/50 last:border-0 transition-colors">
            <td class="py-3 px-4 text-xs font-bold text-slate-700 dark:text-slate-200">${Oe[s-1]}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-800 dark:text-white text-right">${x(o.omset)}</td>
            <td class="py-3 px-4 text-xs font-bold text-right" style="color:var(--color-primary)">${x(o.ppn)}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">${o.orderCount}</td>
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
                <h4 class="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-widest">Rincian Per Bulan — ${re}</h4>
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
    `)},Aa=()=>{const e=yt(),t=oe===0?`Tahun ${re}`:`${Oe[oe-1]} ${re}`,a=e.omset-e.disc-e.hpp,r=oe===0?null:`${re}-${oe}`,s=Pa(),o=a-s,i=n.taxSettings?.taxScheme||"umkm_final";let l,d,p;i==="umkm_final"?(l=.5,d=e.omset,p="PPh Final UMKM (0,5% × Omset)"):i==="badan_normal"?(l=22,d=Math.max(0,o),p="PPh Badan (22% × Laba Bersih)"):(l=parseFloat(n.taxSettings?.customTaxRate)||0,d=Math.max(0,o),p=`PPh Custom (${l}% × Laba Bersih)`);const f=d*(l/100),b=o-f;let u="";if(oe===0)u=Array.from({length:12},(w,y)=>y+1).map(w=>{const y=`${re}-${w}`,h=(n.taxSettings?.monthlyExpenses||{})[y]||0;return`<div class="flex items-center justify-between gap-2 py-2 border-b border-slate-100 dark:border-slate-700/50 last:border-0">
                <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${Oe[w-1]} ${re}</span>
                <input type="number" min="0" value="${h}" onchange="saveMonthlyExpense('${y}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>`}).join("");else{const w=(n.taxSettings?.monthlyExpenses||{})[r]||0;u=`<div class="flex items-center justify-between gap-2 py-2">
            <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${Oe[oe-1]} ${re}</span>
            <input type="number" min="0" value="${w}" onchange="saveMonthlyExpense('${r}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
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
                <div class="flex justify-between py-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Bersih Sebelum Pajak</span><span class="font-bold" style="color:var(--color-primary)">${x(o)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Estimasi ${p}</span><span class="font-bold text-rose-500">-${x(f)}</span></div>
                <div class="flex justify-between py-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2"><span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Laba Bersih Setelah Pajak (Estimasi)</span><span class="font-extrabold text-sm sm:text-base" style="color:var(--color-primary)">${x(b)}</span></div>
            </div>

            <div class="mt-8 pt-5 border-t border-dashed border-slate-200 dark:border-slate-700">
                <h5 class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5"><i class="fa-solid fa-pen" style="color:var(--color-primary)"></i> Input Biaya Operasional (Manual)</h5>
                <p class="text-[10px] font-bold text-slate-400 mb-4">Contoh: sewa tempat, gaji karyawan, listrik, internet, dll. Sistem tidak melacak biaya ini otomatis.</p>
                <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                    ${u}
                </div>
            </div>
        </div>
    `)},si=async(e,t)=>{const a=parseFloat(t)||0;n.taxSettings||(n.taxSettings={}),n.taxSettings.monthlyExpenses||(n.taxSettings.monthlyExpenses={}),n.taxSettings.monthlyExpenses[e]=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),Aa()}catch{g("Gagal menyimpan biaya operasional!")}},Ma=()=>{const e=Gt(),t=n.taxSettings?.balanceSheet||{kas:0,piutang:0,hutang:0},a=(parseFloat(t.kas)||0)+(parseFloat(t.piutang)||0)+e.assetHpp,r=parseFloat(t.hutang)||0,s=a-r;P("tax-content",`
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
    `)},ri=async(e,t)=>{const a=parseFloat(t)||0;n.taxSettings||(n.taxSettings={}),n.taxSettings.balanceSheet||(n.taxSettings.balanceSheet={kas:0,piutang:0,hutang:0,modalDisetor:0}),n.taxSettings.balanceSheet[e]=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),Ma()}catch{g("Gagal menyimpan data neraca!")}},Qs=()=>{const e=n.taxSettings||{};P("tax-content",`
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
    `)},oi=e=>{Z("tax-custom-rate-wrap","hidden",e!=="custom")},ii=async()=>{if(!Qe){ee(!0),O("Menyimpan...");try{n.taxSettings||(n.taxSettings={}),n.taxSettings.companyName=C("tax-company-name"),n.taxSettings.npwp=C("tax-npwp"),n.taxSettings.taxScheme=C("tax-scheme"),n.taxSettings.customTaxRate=parseFloat(C("tax-custom-rate"))||.5,typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),g("Pengaturan pajak tersimpan!")}catch{g("Gagal menyimpan pengaturan pajak!")}finally{ee(!1),D()}}},li=e=>{const t=oe===0?`Tahun ${re}`:`${Oe[oe-1]} ${re}`,a=n.taxSettings||{},r=new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"});let s="";n.store.logo&&(n.store.logo.includes("http")||n.store.logo.includes("data:"))?s=`<img loading="eager" src="${c(n.store.logo)}" class="w-16 h-16 object-contain">`:s='<div class="w-16 h-16 bg-slate-700 text-white flex items-center justify-center rounded-xl"><i class="fa-solid fa-store text-3xl"></i></div>';const i={summary:"LAPORAN PPN & OMSET",income:"LAPORAN LABA RUGI",balance:"NERACA"}[e]||"LAPORAN";let l=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${s}
            <div>
                <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${c(a.companyName||n.store.name)}</h1>
                ${a.npwp?`<p class="text-xs font-bold text-slate-500 mt-1">NPWP: ${c(a.npwp)}</p>`:""}
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${c(n.store.address||"")}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl tracking-widest text-slate-700 uppercase">${i}</h2>
            <p class="text-sm font-bold text-slate-600 mt-2">Periode: ${t}</p>
            <p class="text-xs font-semibold text-slate-400 mt-1">Dicetak: ${r}</p>
        </div>
    </div>
    <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-[11px] font-bold text-amber-700 leading-relaxed">
        <i class="fa-solid fa-triangle-exclamation mr-1"></i> Dokumen ini adalah rekap internal sebagai alat bantu — bukan dokumen resmi DJP. Mohon validasi ke akuntan/konsultan pajak sebelum digunakan untuk pelaporan SPT resmi.
    </div>`,d="";if(e==="summary"){const f=yt(),b=f.omset-f.disc,u=Array.from({length:12},(w,y)=>y+1).map(w=>{const y=Be?Be[w]:{omset:0,ppn:0,orderCount:0};return`<tr class="border-b border-slate-200"><td class="py-2.5 px-3 font-bold text-slate-700">${Oe[w-1]} ${re}</td><td class="py-2.5 px-3 text-right font-bold text-slate-700">${x(y.omset)}</td><td class="py-2.5 px-3 text-right font-bold text-slate-900">${x(y.ppn)}</td><td class="py-2.5 px-3 text-right font-bold text-slate-500">${y.orderCount}</td></tr>`}).join("");d=`
        <div class="grid grid-cols-4 gap-4 mb-8">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">Omset Bruto</p><p class="font-bold text-slate-900">${x(f.omset)}</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">Diskon</p><p class="font-bold text-rose-600">${x(f.disc)}</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">DPP</p><p class="font-bold text-slate-900">${x(b)}</p></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4"><p class="text-[9px] font-bold text-amber-600 uppercase mb-1">PPN Keluaran</p><p class="font-bold text-amber-700">${x(f.ppn)}</p></div>
        </div>
        <table class="w-full text-xs"><thead><tr class="bg-slate-100 text-left"><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px]">Bulan</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">Omset</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">PPN Keluaran</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">Pesanan</th></tr></thead><tbody>${u}</tbody></table>`}else if(e==="income"){const f=yt(),b=f.omset-f.disc-f.hpp,u=Pa(),w=b-u,y=a.taxScheme||"umkm_final";let h,T,E;y==="umkm_final"?(h=.5,T=f.omset,E="PPh Final UMKM (0,5% × Omset)"):y==="badan_normal"?(h=22,T=Math.max(0,w),E="PPh Badan (22% × Laba Bersih)"):(h=parseFloat(a.customTaxRate)||0,T=Math.max(0,w),E=`PPh Custom (${h}% × Laba Bersih)`);const M=T*(h/100),V=w-M,I=(S,q,K,ne)=>`<div class="flex justify-between py-2 ${K?"border-t-2 border-slate-800 mt-1 pt-3":"border-b border-slate-100"}"><span class="${K?"font-bold text-slate-900":"font-bold text-slate-600"}">${S}</span><span class="font-bold ${ne||"text-slate-900"}">${q}</span></div>`;d=`<div class="max-w-xl">
            ${I("Omset Bruto",x(f.omset))}
            ${I("(−) Diskon Produk","-"+x(f.disc),!1,"text-rose-600")}
            ${I("(−) HPP","-"+x(f.hpp),!1,"text-rose-600")}
            ${I("Laba Kotor",x(b),!0,"text-emerald-600")}
            ${I("(−) Biaya Operasional","-"+x(u),!1,"text-rose-600")}
            ${I("Laba Bersih Sebelum Pajak",x(w),!0)}
            ${I("(−) Estimasi "+E,"-"+x(M),!1,"text-rose-600")}
            ${I("Laba Bersih Setelah Pajak (Estimasi)",x(V),!0)}
        </div>`}else if(e==="balance"){const f=Gt(),b=a.balanceSheet||{kas:0,piutang:0,hutang:0},u=(parseFloat(b.kas)||0)+(parseFloat(b.piutang)||0)+f.assetHpp,w=parseFloat(b.hutang)||0,y=u-w;d=`
        <div class="grid grid-cols-2 gap-8">
            <div>
                <h3 class="font-bold text-slate-800 uppercase text-xs tracking-widest mb-3 pb-2 border-b-2 border-slate-800">Aset</h3>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Kas &amp; Bank</span><span class="font-bold text-slate-900">${x(b.kas||0)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Piutang Usaha</span><span class="font-bold text-slate-900">${x(b.piutang||0)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Persediaan Barang</span><span class="font-bold text-slate-900">${x(f.assetHpp)}</span></div>
                <div class="flex justify-between py-2.5 border-t-2 border-slate-800 mt-1"><span class="font-bold text-slate-900">Total Aset</span><span class="font-bold text-slate-900">${x(u)}</span></div>
            </div>
            <div>
                <h3 class="font-bold text-slate-800 uppercase text-xs tracking-widest mb-3 pb-2 border-b-2 border-slate-800">Kewajiban &amp; Modal</h3>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Hutang Usaha</span><span class="font-bold text-slate-900">${x(w)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Modal &amp; Laba Ditahan</span><span class="font-bold text-slate-900">${x(y)}</span></div>
                <div class="flex justify-between py-2.5 border-t-2 border-slate-800 mt-1"><span class="font-bold text-slate-900">Total Kewajiban + Modal</span><span class="font-bold text-slate-900">${x(w+y)}</span></div>
            </div>
        </div>`}U("doc-modal-title","Preview "+i),P("doc-paper-content",l+d);const p=m("doc-preview-modal");p&&p.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),L("doc-preview-modal"),setTimeout(()=>{m("doc-preview-modal")&&m("doc-preview-modal").classList.remove("opacity-0"),m("doc-preview-modal-box")&&m("doc-preview-modal-box").classList.remove("scale-95"),typeof window.fitDocPreview=="function"&&window.fitDocPreview()},10)};window.fetchTaxPeriodData=Sa;window.getTaxPeriodTotals=yt;window.getTaxPeriodExpenses=Pa;window.rTaxPanel=Zo;window.rTaxRenderShell=Ta;window.switchTaxTab=ei;window.changeTaxYear=ti;window.changeTaxMonth=ai;window.rTaxSubContent=Kt;window.rTaxSummary=Ws;window.rTaxIncome=Aa;window.saveMonthlyExpense=si;window.rTaxBalance=Ma;window.saveBalanceField=ri;window.rTaxSettingsPanel=Qs;window.toggleCustomTaxRateInput=oi;window.saveTaxSettingsPanel=ii;window.openTaxDocPreview=li;window.MONTH_NAMES=Oe;window.editTempoPenalty=(e,t)=>{window.customPrompt("Persentase Denda Baru",t,async a=>{if(!a)return;let r=parseFloat(a.replace(",","."));if(isNaN(r)||r<0)return g("Persentase tidak valid!");O("Menyimpan...");try{await k.collection("freshmart_orders").doc(e).update({"payment.tempoPenaltyRate":r}),g("Persentase denda berhasil diubah!"),window.rAdmPiutang()}catch(s){g("Gagal mengubah denda: "+s.message)}D()})};window.stopTempoPenalty=(e,t,a)=>{let r="Konfirmasi Denda",s=a?"Lanjutkan perhitungan denda otomatis?":"Hentikan denda berjalan sekarang? (Nominal denda akan dibekukan di "+x(t)+")";Le(r,s,async()=>{O("Menyimpan...");try{await k.collection("freshmart_orders").doc(e).update({"payment.tempoPenaltyStopped":!a,"payment.tempoFixedPenalty":a?null:t}),g(a?"Denda dilanjutkan!":"Denda berhasil dibekukan!"),window.rAdmPiutang()}catch(i){g("Gagal mengubah status denda: "+i.message)}D()},a?"Lanjutkan":"Bekukan")};window.payTempoInstallment=e=>{window.customPrompt("Masukkan Nominal Cicilan (Rp)","",async t=>{if(!t)return;let a=parseFloat(t.replace(/[^0-9]/g,""));if(isNaN(a)||a<=0)return g("Nominal tidak valid!");O("Menyimpan cicilan...");try{const s=(await k.collection("freshmart_orders").doc(e).get()).data();let o=(s.payment.tempoBalance||0)-a,i=s.payment.installments||[];i.push({date:Date.now(),amount:a,note:"Cicilan"});let l={"payment.tempoBalance":Math.max(0,o),"payment.installments":i};o<=0&&(l["payment.paymentStatus"]="lunas",l.status="Selesai"),await k.collection("freshmart_orders").doc(e).update(l),g("Cicilan berhasil ditambahkan!"),window.rAdmPiutang&&window.rAdmPiutang()}catch(r){g("Gagal memproses cicilan: "+r.message)}D()})};window.previewTempoReceipt=async e=>{O("Memuat data struk...");try{const t=await k.collection("freshmart_orders").doc(e).get();if(!t.exists)return D(),g("Pesanan tidak ditemukan");const a=t.data();D();const r=a.dateString?new Date(a.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",s=n.store.name||"Toko",o=n.store.wa||"",i=(M,V,I=32)=>{const S=I-M.length-V.length;return M+(S>0?" ".repeat(S):" ")+V};let l=`<div class="text-center font-bold" style="font-size:13px;margin-bottom:2px;">${c(s)}</div>`;o&&(l+=`<div class="text-center" style="margin-bottom:4px;">WA: ${c(o)}</div>`),l+=`<div class="text-center font-bold uppercase my-2" style="font-size:14px;border-bottom:1px solid #000;border-top:1px solid #000;padding:2px 0;">NOTA TEMPO${a.payment?.paymentStatus==="lunas"?" - LUNAS":""}</div>`,l+=`<div style="white-space:pre;">Order: #${a.orderId}</div><div style="white-space:pre;">Tgl  : ${r}</div><div style="white-space:pre;">Plg  : ${c(a.customer?.name||"Guest").substring(0,20)}</div>`,a.payment?.tempoDueDate&&(l+=`<div style="white-space:pre;">J.Tmp: ${new Date(a.payment.tempoDueDate).toLocaleDateString("id-ID")}</div>`),l+='<div class="border-b border-dashed border-black my-2"></div>';let d=0;if(a.items.forEach(M=>{let V=M.variantName?` (${c(M.variantName)}${M.colorCode?" "+c(M.colorCode):""})`:"";const I=(c(M.name)+V+(M.poTime?" [PO]":"")).substring(0,32),S=`${parseFloat(M.qty)} ${c(M.unit||"pcs")} x ${M.effectivePrice.toLocaleString("id-ID")}`,q=(parseFloat(M.qty)*M.effectivePrice).toLocaleString("id-ID");l+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${I}</div><div style="white-space:pre;font-size:11px;">${i(S,q)}</div>`,M.poTime&&(l+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${c(M.poTime)}</div>`),d+=parseFloat(M.qty)*M.effectivePrice}),l+='<div class="border-b border-dashed border-black my-2"></div>',l+=`<div style="white-space:pre;font-weight:bold;">${i("Subtotal",d.toLocaleString("id-ID"))}</div>`,a.payment?.grandTotal&&a.payment.grandTotal!==d){let M=a.payment.grandTotal-d;M>0?l+=`<div style="white-space:pre;">${i("Ongkir/Biaya",M.toLocaleString("id-ID"))}</div>`:l+=`<div style="white-space:pre;">${i("Diskon",Math.abs(M).toLocaleString("id-ID"))}</div>`}l+=`<div style="white-space:pre;font-weight:bold;margin-top:4px;">${i("TOTAL KREDIT",(a.payment?.grandTotal||d).toLocaleString("id-ID"))}</div>`,l+='<div class="border-b border-black my-2" style="border-width:1px;"></div>';let p=0;a.payment?.installments&&a.payment.installments.length>0&&(l+='<div style="white-space:pre;font-weight:bold;margin-bottom:2px;">HISTORI CICILAN:</div>',a.payment.installments.forEach((M,V)=>{let I=new Date(M.date).toLocaleDateString("id-ID",{day:"2-digit",month:"short"}),S=M.amount.toLocaleString("id-ID");l+=`<div style="white-space:pre;">${i(`${V+1}. ${I}`,S)}</div>`,p+=M.amount}),l+=`<div style="white-space:pre;font-weight:bold;margin-top:2px;">${i("TOTAL DIBAYAR",p.toLocaleString("id-ID"))}</div>`,l+='<div class="border-b border-dashed border-black my-2"></div>');let f=a.payment?.tempoBalance||0,b=0,u=a.payment?.tempoPenaltyStopped===!0,w=a.payment?.tempoDueDate||0,y=a.payment?.tempoPenaltyRate!==void 0?parseFloat(a.payment.tempoPenaltyRate):1;if(a.payment?.paymentStatus!=="lunas"){if(u)b=parseFloat(a.payment?.tempoFixedPenalty)||0;else if(Date.now()>w){let M=Math.floor((Date.now()-w)/864e5);M>0&&(b=y/100*f*M)}}l+=`<div style="white-space:pre;font-weight:bold;">${i("SISA POKOK",f.toLocaleString("id-ID"))}</div>`,b>0&&(l+=`<div style="white-space:pre;">${i("DENDA",Math.round(b).toLocaleString("id-ID"))}</div>`);let h=f+b;l+='<div class="border-b border-black my-2" style="border-width:1px;"></div>',l+=`<div style="white-space:pre;font-weight:black;">${i("SISA TAGIHAN",Math.round(h).toLocaleString("id-ID"))}</div>`,a.items.some(M=>M.poTime&&M.poTime!=="")&&(l+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul (estimasi sesuai label) tanpa dikenakan biaya tambahan.</div>'),l+='<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;">Terima kasih atas kepercayaannya.</div><div class="border-b border-dashed border-black my-2"></div><div style="height:20px;"></div>',P("receipt-paper-content",l);const E=m("receipt-preview-modal");E&&E.classList.contains("hidden")&&pushModalHistory("receipt"),show("receipt-preview-modal"),setTimeout(()=>{m("receipt-preview-modal").classList.remove("opacity-0"),m("receipt-preview-modal-box").classList.remove("scale-95")},10)}catch(t){D(),g("Gagal memuat struk: "+t.message)}};window.markTempoPaid=async e=>{Le("Konfirmasi","Tandai tagihan tempo ini sebagai LUNAS?",async()=>{try{await k.collection("freshmart_orders").doc(e).update({"payment.paymentStatus":"lunas","payment.tempoBalance":0,status:"Selesai"}),g("Tagihan berhasil dilunasi!");let t=gOrds.findIndex(a=>a.orderId===e);t!==-1&&(gOrds[t].payment.paymentStatus="lunas",gOrds[t].payment.tempoBalance=0,gOrds[t].status="Selesai"),window.rAdmPiutang()}catch(t){g("Gagal mengubah status: "+t.message)}})};window.rAdmPiutang=async()=>{O("Memuat data piutang...");let e=[];try{(await k.collection("freshmart_orders").where("payment.method","==","tempo").where("payment.paymentStatus","==","hutang").get()).forEach(s=>{e.push(s.data())})}catch(r){D(),g("Gagal memuat piutang: "+r.message);return}D();let t=0,a=`
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
              </div>`:(a+='<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">',e.forEach(r=>{let s=r.payment?.tempoBalance||0,o=r.payment?.tempoPenaltyRate!==void 0?parseFloat(r.payment.tempoPenaltyRate):1,i=r.payment?.tempoPenaltyStopped===!0,l=0,d=r.payment?.tempoDueDate||0,p=0,f=!1;i?(l=parseFloat(r.payment?.tempoFixedPenalty)||0,Date.now()>d&&(p=Math.floor((Date.now()-d)/(24*60*60*1e3)),p>0&&(f=!0))):Date.now()>d&&(p=Math.floor((Date.now()-d)/(24*60*60*1e3)),p>0&&(f=!0,l=o/100*s*p));let b=s+l;t+=b;let u=window.normalizeWA?window.normalizeWA(r.customer?.wa):r.customer?.wa||"";a+=`
            <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border ${f?"border-rose-300 dark:border-rose-700 shadow-[0_0_15px_rgba(225,29,72,0.1)]":"border-slate-200 dark:border-slate-700 shadow-sm"} relative overflow-hidden group hover:-translate-y-1 transition-all">
                ${f?`<div class="absolute -right-6 top-4 ${i?"bg-slate-500":"bg-rose-500"} text-white text-[9px] font-bold uppercase tracking-widest px-8 py-1 rotate-45 shadow-sm">TERLAMBAT ${p} HARI</div>`:""}
                
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
                        <span class="font-bold ${f?"text-rose-600":"text-slate-700 dark:text-slate-300"}">${new Date(d).toLocaleDateString("id-ID")}</span>
                    </div>
                    <div class="flex justify-between items-center text-xs">
                        <span class="font-bold text-slate-500">Sisa Pokok</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${x(s)}</span>
                    </div>
                    ${f?`
                    <div class="flex justify-between items-center text-xs ${i?"text-slate-500":"text-rose-600"}">
                        <span class="font-bold">Denda (${o}%/hari) ${i?'<span class="text-[9px] bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded ml-1">STOPPED</span>':""}</span>
                        <span class="font-bold font-mono">+${x(l)}</span>
                    </div>`:""}
                </div>
                
                <div class="flex justify-between items-center bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 p-3.5 rounded-xl border border-rose-100 dark:border-rose-900/30 mb-3">
                    <span class="text-[10px] font-bold uppercase tracking-widest">Total Tagihan</span>
                    <span class="text-sm font-bold font-mono tracking-tight">${x(b)}</span>
                </div>
                
                <div class="flex gap-2 mb-3">
                    <button onclick="editTempoPenalty('${r.orderId}', ${o})" class="flex-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                        <i class="fa-solid fa-percent"></i> Edit Denda
                    </button>
                    <button onclick="stopTempoPenalty('${r.orderId}', ${l}, ${i})" class="flex-1 ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.15)]":"bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-200"} rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                        <i class="fa-solid ${i?"fa-play":"fa-stop"}"></i> ${i?"Lanjut Denda":"Stop Denda"}
                    </button>
                </div>
                
                ${r.payment?.installments&&r.payment.installments.length>0?`
                <div class="mb-3 space-y-1.5 bg-slate-50 dark:bg-slate-900/30 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex justify-between">
                        <span>Riwayat Cicilan</span>
                        <span>Total: ${x(r.payment.installments.reduce((w,y)=>w+(parseFloat(y.amount)||0),0))}</span>
                    </div>
                    ${r.payment.installments.map(w=>`
                    <div class="flex justify-between items-center text-[10px]">
                        <span class="text-slate-500 dark:text-slate-400">${new Date(w.date).toLocaleDateString("id-ID")}</span>
                        <span class="font-bold text-[var(--color-primary)] font-mono">+${x(w.amount)}</span>
                    </div>
                    `).join("")}
                </div>`:""}
                
                <div class="flex gap-2 mb-2">
                    <a href="https://wa.me/${u}?text=Halo%20kak%20${c(r.customer?.name||"")},%20mengingatkan%20bahwa%20sisa%20tagihan%20Tempo%20untuk%20pesanan%20${r.orderId}%20sebesar%20${x(b)}%20sudah%20jatuh%20tempo.%20Mohon%20segera%20dilunasi." target="_blank" class="flex-1 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] hover:bg-[rgba(var(--color-primary-rgb),0.12)] dark:hover:bg-[rgba(var(--color-primary-rgb),0.16)] text-[var(--color-primary)] border border-[var(--color-primary)]/25 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
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
            </div>`}),a+="</div>"),a+="</div>",P("admin-content",a),setTimeout(()=>{m("total-piutang-header")&&(m("total-piutang-header").innerText=x(t))},100)};const ni=e=>{Ar(e),zs()},zs=()=>{const e=Cs||"all",t=(Ot||[]).filter(o=>e==="visible"?o.isVisible!==!1:e==="hidden"?o.isVisible===!1:!0),a=`
        <div class="flex gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-5 w-fit">
            ${[{k:"all",l:"Semua"},{k:"visible",l:"Ditampilkan"},{k:"hidden",l:"Disembunyikan"}].map(o=>`
                <button onclick="filterReviews('${o.k}')" class="px-3.5 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${e===o.k?"shadow-sm":"text-slate-500 dark:text-slate-400"}" style="${e===o.k?"background:var(--color-primary);color:#fff":""}">${o.l}</button>
            `).join("")}
        </div>`;if(!t.length){P("admin-content",a+'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-comment-slash text-5xl mb-4 opacity-30"></i>Belum ada ulasan</div>');return}const r=o=>Array.from({length:5},(i,l)=>`<i class="fa-solid fa-star ${l<Math.round(o)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join(""),s=t.map(o=>{let i="";try{o.createdAt&&o.createdAt.toDate&&(i=o.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))}catch{}const l=o.isVisible===!1;return`
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border shadow-sm ${l?"border-rose-200 bg-rose-50/40 dark:border-rose-900/40 dark:bg-rose-900/10":"border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"} mb-3">
            <div class="flex items-start justify-between gap-3 mb-2">
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate">${c(o.customerName||"Pelanggan")}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">${c(o.productName||"")}${o.variantName?" · "+c(o.variantName):""}</p>
                </div>
                <span class="text-[9px] font-bold text-slate-400 whitespace-nowrap">${i}</span>
            </div>
            <div class="flex text-xs mb-2.5">${r(o.rating)}</div>
            ${o.text?`<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2.5">${c(o.text)}</p>`:""}
            ${o.photoUrl?`<img src="${c(o.photoUrl)}" onclick="window.open('${c(o.photoUrl)}','_blank')" class="w-20 h-20 rounded-xl object-cover border border-slate-200 dark:border-slate-700 cursor-pointer mb-2.5" onerror="this.style.display='none'" loading="lazy">`:""}
            ${o.adminReply?`<div class="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-3 mb-2.5"><p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1"><i class="fa-solid fa-store mr-1"></i>Balasan Anda</p><p class="text-[11px] text-slate-600 dark:text-slate-300">${c(o.adminReply)}</p></div>`:""}
            <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                <button onclick="replyToReview(${o.id})" class="px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-blue-100 transition-all"><i class="fa-solid fa-reply"></i> ${o.adminReply?"Edit Balasan":"Balas"}</button>
                <button onclick="toggleReviewVisibility(${o.id})" class="px-3 py-2 rounded-xl ${l?"primary-bg-soft primary-text hover:brightness-95":"bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100"} text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all"><i class="fa-solid ${l?"fa-eye":"fa-eye-slash"}"></i> ${l?"Tampilkan":"Sembunyikan"}</button>
                <button onclick="deleteReview(${o.id})" class="px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-rose-100 transition-all"><i class="fa-solid fa-trash"></i> Hapus</button>
            </div>
        </div>`}).join("");P("admin-content",a+s)},di=async e=>{const t=(Ot||[]).find(a=>a.id===e);t&&typeof window.customPrompt=="function"&&window.customPrompt("Tulis balasan untuk ulasan ini:",t.adminReply||"",async a=>{O("Menyimpan balasan...");try{await k.collection("freshmart").doc("cms_data").collection("reviews").doc(e.toString()).update({adminReply:a}),g("Balasan tersimpan!")}catch{g("Gagal menyimpan balasan!")}finally{D()}})},ci=async e=>{const t=(Ot||[]).find(r=>r.id===e);if(!t)return;const a=t.isVisible===!1;O("Menyimpan...");try{await k.collection("freshmart").doc("cms_data").collection("reviews").doc(e.toString()).update({isVisible:a}),g(a?"Ulasan ditampilkan lagi!":"Ulasan disembunyikan dari halaman produk!")}catch{g("Gagal mengubah status ulasan!")}finally{D()}},pi=e=>{Le("Hapus Ulasan","Ulasan yang dihapus tidak bisa dikembalikan lagi.",async()=>{O("Menghapus...");try{await k.collection("freshmart").doc("cms_data").collection("reviews").doc(e.toString()).delete(),g("Ulasan dihapus!")}catch{g("Gagal menghapus ulasan!")}finally{D()}})};window.filterReviews=ni;window.rAdmReviews=zs;window.replyToReview=di;window.toggleReviewVisibility=ci;window.deleteReview=pi;let lt=null,Jt=null;const sa=()=>{document.querySelectorAll("#banner-slider video.banner-video-element").forEach(e=>{e.dataset.init||(e.dataset.init="true",e.muted=!0,e.loop=!0,e.playsInline=!0,e.setAttribute("playsinline",""),e.setAttribute("loop",""),e.setAttribute("autoplay","")),e.dataset.loopAttached||(e.dataset.loopAttached="true",e.addEventListener("ended",()=>{e.currentTime=0,e.play().catch(()=>{})})),e.dataset.userUnmuted==="true"&&(e.muted=!1),e.play().catch(()=>{})})},mi=(e,t)=>{const a=m(`banner-slide-${t}`)||e&&e.closest(".banner-slide-item");if(!a)return;const r=a.querySelector("video.banner-video-element");if(r){r.muted?(r.muted=!1,r.volume=1,r.dataset.userUnmuted="true",r.play().catch(()=>{}),e&&(e.innerHTML='<i class="fa-solid fa-volume-high text-xs"></i> <span>Suara On</span>',e.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 primary-bg text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer")):(r.muted=!0,r.dataset.userUnmuted="false",e&&(e.innerHTML='<i class="fa-solid fa-volume-xmark text-xs"></i> <span>Muted</span>',e.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer"));return}const s=a.querySelector("iframe.banner-video-iframe");s&&(s.dataset.muted!=="false"?(s.dataset.muted="false",s.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}',"*"),s.contentWindow?.postMessage('{"event":"command","func":"setVolume","args":[100]}',"*"),e&&(e.innerHTML='<i class="fa-solid fa-volume-high text-xs"></i> <span>Suara On</span>',e.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 primary-bg text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer")):(s.dataset.muted="true",s.contentWindow?.postMessage('{"event":"command","func":"mute","args":""}',"*"),e&&(e.innerHTML='<i class="fa-solid fa-volume-xmark text-xs"></i> <span>Muted</span>',e.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer")))},pt=e=>{const t=m("banner-dots-container");if(!t)return;t.querySelectorAll(".banner-dot-item").forEach((r,s)=>{s===e?r.className="banner-dot-item h-2.5 rounded-full transition-all duration-300 bg-[var(--color-primary)] w-7 shadow-sm":r.className="banner-dot-item w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"})},ui=()=>{Jt&&clearTimeout(Jt),Jt=setTimeout(()=>{const e=m("banner-slider");if(!e)return;const t=e.querySelectorAll(".banner-slide-item");if(!t||!t.length)return;let a=0,r=1/0;t.forEach((s,o)=>{const i=Math.abs(s.offsetLeft-e.scrollLeft);i<r&&(r=i,a=o)}),pt(a)},100)},fi=e=>{clearInterval(lt);const t=m("banner-slider");if(!t)return;const a=t.querySelectorAll(".banner-slide-item");a&&a[e]&&(t.scrollTo({left:a[e].offsetLeft-t.offsetLeft,behavior:"smooth"}),pt(e)),setTimeout(Tt,8e3)},bi=()=>{clearInterval(lt);const e=m("banner-slider");if(!e)return;const t=e.querySelectorAll(".banner-slide-item");if(!t||!t.length)return;let a=0,r=1/0;t.forEach((o,i)=>{const l=Math.abs(o.offsetLeft-e.scrollLeft);l<r&&(r=l,a=i)});const s=(a-1+t.length)%t.length;e.scrollTo({left:t[s].offsetLeft-e.offsetLeft,behavior:"smooth"}),pt(s),setTimeout(Tt,8e3)},gi=()=>{clearInterval(lt);const e=m("banner-slider");if(!e)return;const t=e.querySelectorAll(".banner-slide-item");if(!t||!t.length)return;let a=0,r=1/0;t.forEach((o,i)=>{const l=Math.abs(o.offsetLeft-e.scrollLeft);l<r&&(r=l,a=i)});const s=(a+1)%t.length;e.scrollTo({left:t[s].offsetLeft-e.offsetLeft,behavior:"smooth"}),pt(s),setTimeout(Tt,8e3)},Tt=()=>{if(clearInterval(lt),!m("banner-slider")||!n.banners||n.banners.length<=1)return;const t=()=>{sa()};t(),sa(),lt=setInterval(()=>{const a=m("banner-slider");if(!a)return clearInterval(lt);const r=a.querySelectorAll(".banner-slide-item");if(!r||r.length<=1){const s=a.scrollWidth-a.clientWidth;a.scrollLeft>=s-10?a.scrollTo({left:0,behavior:"smooth"}):a.scrollBy({left:a.clientWidth,behavior:"smooth"})}else{let s=0,o=1/0;r.forEach((d,p)=>{const f=Math.abs(d.offsetLeft-a.scrollLeft);f<o&&(o=f,s=p)});const i=(s+1)%r.length,l=r[i];a.scrollTo({left:l.offsetLeft-a.offsetLeft,behavior:"smooth"}),pt(i)}setTimeout(t,400)},8e3)};window.forcePlayBannerVideos=sa;window.toggleBannerVideoSound=mi;window.updateBannerDots=pt;window.onBannerScroll=ui;window.scrollToBanner=fi;window.scrollBannerPrev=bi;window.scrollBannerNext=gi;window.startBannerAutoSlide=Tt;const Da=()=>{const e=document.getElementById("storefront-footer-container");if(!e)return;const t=n.store||{},a=t.name||"Toko Putri",r=t.description||t.slogan||"Selamat datang di toko kami. Melayani pembelian online dan offline dengan kualitas terbaik.",s=t.email||"",o=t.operationalHours||"Buka Setiap Hari (08:00 - 17:00)",i=t.address||"",l=t.wa||"",d=t.footerCredit||"Seluruh hak cipta dilindungi undang-undang.",p=new Date().getFullYear();let f=(l||"").replace(/\D/g,"");f.startsWith("0")?f="62"+f.slice(1):!f.startsWith("62")&&f.length>0&&(f="62"+f);let b='<i class="fa-solid fa-store text-2xl text-[var(--color-primary)]"></i>';t.logo&&(t.logo.includes("http")||t.logo.includes("data:")?b=`<img src="${c(t.logo)}" alt="${c(a)}" class="h-full w-full max-h-10 max-w-10 object-contain" onerror="this.outerHTML='<i class=\\'fa-solid fa-store text-2xl text-[var(--color-primary)]\\'></i>'">`:b=`<i class="fa-solid ${c(t.logo)} text-2xl text-[var(--color-primary)]"></i>`);const u=f?`window.open('https://wa.me/${c(f)}', '_blank')`:"if(typeof window.showToast==='function') window.showToast('Nomor WhatsApp belum dikonfigurasi admin.');";e.innerHTML=`
    <!-- ================= FOOTER TOKO RESMI (MODERN 4-KOLOM, SOLID THEMED, RESPONSIF) ================= -->
    <footer class="themed-footer relative mt-14 w-full overflow-hidden pb-[calc(6.5rem+env(safe-area-inset-bottom))] sm:pb-[calc(3.5rem+env(safe-area-inset-bottom))]">
      <div class="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-[1240px] pt-10 sm:pt-12 pb-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          <!-- Kolom 1: Profil Perusahaan & Brand -->
          <div class="flex flex-col items-start text-left md:col-span-6 lg:col-span-4">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-12 w-12 sm:h-13 sm:w-13 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/30 bg-white p-2 shadow-none">
                ${b}
              </div>
              <div class="flex flex-col items-start min-w-0">
                <h3 class="text-base sm:text-lg font-black tracking-tight text-white leading-tight truncate max-w-full">${c(a)}</h3>
                <span class="mt-1 inline-flex items-center gap-1 rounded border border-white/30 bg-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white shadow-none">
                  <i class="fa-solid fa-circle-check text-[var(--color-primary)]"></i> Verified Official Store
                </span>
              </div>
            </div>

            <p class="mb-4 max-w-md text-xs font-normal leading-relaxed text-white/90">
              ${c(r)}
            </p>

            <!-- Live Operating Status Pill -->
            <div class="mb-3 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white shadow-none">
              <span class="relative flex h-2 w-2">
                <span class="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]"></span>
              </span>
              Melayani Pembelian Online &amp; Offline
            </div>

            <!-- Store Address (if configured) -->
            ${i?`
            <div class="text-xs text-white/90 flex items-start gap-2 max-w-md">
              <i class="fa-solid fa-location-dot text-[var(--color-primary)] mt-0.5 shrink-0 text-sm"></i>
              <span class="leading-relaxed">${c(i)}</span>
            </div>`:""}
          </div>

          <!-- Wrapper Kolom 2 & 3:
               On Mobile: side by side (grid-cols-2)
               On Tablet/Desktop: contents (expands into 12-col grid)
          -->
          <div class="grid grid-cols-2 gap-4 md:contents">
            <!-- Kolom 2: Navigasi Belanja Cepat -->
            <div class="flex flex-col items-start text-left md:col-span-3 lg:col-span-2">
              <h4 class="mb-3 text-[11px] font-black uppercase tracking-wider text-white border-b border-white/20 pb-2 w-full">
                Belanja Cepat
              </h4>
              <ul class="space-y-2.5 w-full text-xs font-semibold text-white/85">
                <li><a class="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer" onclick="changeView('view-catalog')"><i class="fa-solid fa-chevron-right text-[9px] opacity-70"></i> Katalog Produk</a></li>
                <li><a class="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer" onclick="changeView('view-cart')"><i class="fa-solid fa-chevron-right text-[9px] opacity-70"></i> Keranjang</a></li>
                <li><a class="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer" onclick="changeView('view-wishlist')"><i class="fa-solid fa-chevron-right text-[9px] opacity-70"></i> Produk Favorit</a></li>
                <li><a class="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer" onclick="if(typeof window.openVoucherModal==='function') window.openVoucherModal();"><i class="fa-solid fa-chevron-right text-[9px] opacity-70"></i> Kupon Promo</a></li>
                <li><a class="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal();"><i class="fa-solid fa-chevron-right text-[9px] opacity-70"></i> Poin Member</a></li>
              </ul>
            </div>

            <!-- Kolom 3: Layanan & Informasi -->
            <div class="flex flex-col items-start text-left md:col-span-3 lg:col-span-2">
              <h4 class="mb-3 text-[11px] font-black uppercase tracking-wider text-white border-b border-white/20 pb-2 w-full">
                Bantuan
              </h4>
              <ul class="space-y-2.5 w-full text-xs font-semibold text-white/85">
                <li><a class="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer" onclick="openShoppingGuideModal()"><i class="fa-solid fa-chevron-right text-[9px] opacity-70"></i> Cara Memesan</a></li>
                <li><a class="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer" onclick="changeView('view-orders')"><i class="fa-solid fa-chevron-right text-[9px] opacity-70"></i> Lacak Pesanan</a></li>
                <li><a class="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer" onclick="changeView('view-faq')"><i class="fa-solid fa-chevron-right text-[9px] opacity-70"></i> Pusat Bantuan &amp; FAQ</a></li>
                <li><a class="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer" onclick="openQualityGuaranteeModal()"><i class="fa-solid fa-chevron-right text-[9px] opacity-70"></i> Jaminan Mutu</a></li>
                <li><a class="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer" onclick="openSecurityModal()"><i class="fa-solid fa-chevron-right text-[9px] opacity-70"></i> Keamanan</a></li>
                <li><a class="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors cursor-pointer" onclick="changeView('view-admin-login')"><i class="fa-solid fa-lock text-[8px] opacity-70"></i> Portal Admin</a></li>
              </ul>
            </div>
          </div>

          <!-- Kolom 4: Hubungi Kami & Jam Kerja -->
          <div class="flex flex-col items-start text-left md:col-span-6 lg:col-span-4">
            <h4 class="mb-3 text-[11px] font-black uppercase tracking-wider text-white border-b border-white/20 pb-2 w-full">
              Hubungi Kami
            </h4>
            <div class="w-full space-y-2.5">
              <!-- WhatsApp CTA Card (Flat Solid White Card) -->
              <a
                class="flex cursor-pointer items-center gap-3 rounded-xl border border-white/30 bg-white p-3 text-slate-800 transition-colors hover:bg-slate-100 active:bg-slate-200 shadow-none"
                href="javascript:void(0)"
                onclick="${u}"
              >
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white text-xl">
                  <i class="fa-brands fa-whatsapp"></i>
                </div>
                <div class="min-w-0 text-left">
                  <div class="flex items-center gap-1.5">
                    <span class="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]"></span>
                    <p class="text-[9px] font-extrabold uppercase tracking-widest text-[var(--color-primary-dark)]">Customer Support</p>
                  </div>
                  <p class="truncate text-xs font-black text-slate-900">Konsultasi via WhatsApp</p>
                  <p class="text-[9px] font-medium text-slate-500">Respon Cepat &amp; Ramah</p>
                </div>
              </a>

              <!-- Email & Hours Card (Flat Solid Translucent) -->
              <div class="rounded-xl border border-white/20 bg-white/10 p-3 space-y-2.5 text-white shadow-none">
                <!-- Email (if configured) -->
                ${s?`
                <a href="mailto:${c(s)}" class="flex items-center gap-2.5 text-white hover:text-white/80 transition-colors">
                  <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white">
                    <i class="fa-solid fa-envelope text-xs"></i>
                  </div>
                  <span class="truncate text-xs font-bold text-white tracking-wide">${c(s)}</span>
                </a>`:""}

                <!-- Operating Hours -->
                <div class="flex items-center gap-2.5 text-white">
                  <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white">
                    <i class="fa-solid fa-clock text-xs text-[var(--color-primary)]"></i>
                  </div>
                  <div class="min-w-0 text-left">
                    <p class="truncate text-xs font-bold text-white tracking-wide">${c(o)}</p>
                    <p class="text-[9px] font-medium text-white/75">Pemesanan online 24 jam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Payment & Shipping Badges Row (Solid Flat Badges) -->
        <div class="mt-8 border-t border-white/20 pt-6">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 items-start">
            <!-- Payment -->
            <div class="flex flex-col items-start">
              <p class="mb-2.5 text-[10px] font-black uppercase tracking-wider text-white">
                <i class="fa-solid fa-credit-card mr-1 text-[var(--color-primary)]"></i> Metode Pembayaran Resmi
              </p>
              <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span class="inline-flex items-center gap-1.5 rounded-lg border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white shadow-none" title="QRIS Standar Nasional"><i class="fa-solid fa-qrcode text-rose-300"></i> QRIS</span>
                <span class="inline-flex items-center gap-1.5 rounded-lg border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white shadow-none" title="Transfer Bank BCA"><i class="fa-solid fa-building-columns text-blue-300"></i> BCA</span>
                <span class="inline-flex items-center gap-1.5 rounded-lg border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white shadow-none" title="Transfer Bank Mandiri"><i class="fa-solid fa-building-columns text-amber-300"></i> Mandiri</span>
                <span class="inline-flex items-center gap-1.5 rounded-lg border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white shadow-none" title="Transfer Bank BRI"><i class="fa-solid fa-building-columns text-sky-300"></i> BRI</span>
                <span class="inline-flex items-center gap-1.5 rounded-lg border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white shadow-none" title="Visa & Mastercard"><i class="fa-brands fa-cc-visa text-indigo-300"></i> <i class="fa-brands fa-cc-mastercard text-orange-300"></i> Kartu</span>
                <span class="inline-flex items-center gap-1.5 rounded-lg border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white shadow-none" title="Bayar di Kasir"><i class="fa-solid fa-cash-register text-[var(--color-primary)]"></i> Kasir Toko</span>
              </div>
            </div>

            <!-- Shipping -->
            <div class="flex flex-col items-start">
              <p class="mb-2.5 text-[10px] font-black uppercase tracking-wider text-white">
                <i class="fa-solid fa-truck-fast mr-1 text-[var(--color-primary)]"></i> Jasa Pengiriman &amp; Logistik
              </p>
              <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span class="inline-flex items-center gap-1.5 rounded-lg border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white shadow-none" title="Kirim Cepat Ekspedisi"><i class="fa-solid fa-truck-fast text-white"></i> Ekspedisi Cepat</span>
                <span class="inline-flex items-center gap-1.5 rounded-lg border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white shadow-none" title="Kargo Truk & Partai Besar"><i class="fa-solid fa-truck-ramp-box text-amber-300"></i> Kargo &amp; Ekspedisi</span>
                <span class="inline-flex items-center gap-1.5 rounded-lg border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white shadow-none" title="Kurir Instan & Same Day"><i class="fa-solid fa-motorcycle text-[var(--color-primary)]"></i> Kurir Instan</span>
                <span class="inline-flex items-center gap-1.5 rounded-lg border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white shadow-none" title="Ambil di Toko Fisik"><i class="fa-solid fa-store text-sky-300"></i> Ambil Sendiri</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sub-Footer Bottom Bar (Clean Solid Bar) -->
      <div class="border-t border-white/15 bg-black/20 py-3.5">
        <div class="mx-auto flex w-full flex-col items-center justify-between gap-3 px-4 sm:px-6 md:flex-row lg:px-8 xl:max-w-[1240px]">
          <p class="text-[11px] font-medium text-white/90 text-center sm:text-left">
            &#169; <span>${p}</span> <span class="font-extrabold text-white">${c(a)}</span>. <span>${c(d)}</span>
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3 text-[10px] font-bold text-white">
            <span class="flex items-center gap-1 text-[var(--color-primary)] font-bold">
              <i class="fa-solid fa-lock"></i> SSL Secured
            </span>
            <span class="text-white/30">•</span>
            <button type="button" onclick="const c = document.querySelector('#view-catalog .scroll-content'); if (c) c.scrollTo({ top: 0, behavior: 'smooth' }); else window.scrollTo({ top: 0, behavior: 'smooth' });" class="inline-flex items-center gap-1 text-white hover:underline cursor-pointer active:scale-95 font-bold">
              Kembali ke Atas <i class="fa-solid fa-arrow-up text-[9px]"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
    `},xi=()=>{let e=document.getElementById("guarantee-modal");e||(e=document.createElement("div"),e.id="guarantee-modal",e.className="fixed inset-0 z-[115] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=t=>{t.target===e&&Js()},document.body.appendChild(e)),e.innerHTML=`
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
        </div>`,e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"})},Js=()=>{const e=document.getElementById("guarantee-modal");!e||e.style.display==="none"||(e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250))},wi=()=>{let e=document.getElementById("security-modal");e||(e=document.createElement("div"),e.id="security-modal",e.className="fixed inset-0 z-[115] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=t=>{t.target===e&&Ys()},document.body.appendChild(e)),e.innerHTML=`
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
        </div>`,e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"})},Ys=()=>{const e=document.getElementById("security-modal");!e||e.style.display==="none"||(e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250))};window.renderStorefrontFooter=Da;window.openQualityGuaranteeModal=xi;window.closeQualityGuaranteeModal=Js;window.openSecurityModal=wi;window.closeSecurityModal=Ys;const ra=()=>{if(Da(),U("dyn-store-name",n.store.name||"Toko Putri"),U("dyn-store-slogan",n.store.slogan||"Toko Online & Kasir Resmi"),n.store.logo){const i=m("dyn-store-logo-img"),l=m("dyn-store-logo-icon");n.store.logo.includes("http")||n.store.logo.includes("data:")?i&&(i.src=n.store.logo,i.onerror=()=>{i.onerror=null,i.src="https://placehold.co/100?text=Logo"},L("dyn-store-logo-img"),$("dyn-store-logo-icon")):l&&(l.className=`fa-solid ${c(n.store.logo)} text-xl text-[var(--color-primary)]`,L("dyn-store-logo-icon"),$("dyn-store-logo-img"))}let e=n.banners&&n.banners.length?`
    <div class="relative group/banner-wrapper w-full">
        <div id="banner-slider" class="flex overflow-x-auto gap-4 sm:gap-6 pb-4 pt-2 snap-x hide-scrollbar scroll-smooth" ontouchstart="clearInterval(bannerTmr)" ontouchend="setTimeout(startBannerAutoSlide, 8000)" onmouseenter="clearInterval(bannerTmr)" onmouseleave="startBannerAutoSlide()" onscroll="window.onBannerScroll && window.onBannerScroll()">
            ${n.banners.map((i,l)=>{const d=i.type==="video"&&i.videoUrl,p=!d&&i.link?`onclick="window.open('${c(i.link)}', '_self')"`:"";if(d){const f=Ft(i.videoUrl)||{type:"direct",directUrl:Nt(i.videoUrl),embedUrl:Ms(i.videoUrl)};let b="";return f.type==="youtube"?b=`
                <iframe
                    class="banner-video-iframe w-full h-full absolute inset-0 z-0 border-0 pointer-events-none select-none"
                    src="${c(f.embedUrl)}"
                    data-src="${c(f.embedUrl)}"
                    frameborder="0"
                    scrolling="no"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>`:f.type==="gdrive"?b=`
                <iframe
                    class="banner-video-iframe absolute z-0 border-0 pointer-events-none select-none"
                    src="${c(f.embedUrl)}"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    style="width:180%; height:210%; top:-55%; left:-40%; transform:scale(1); object-fit:cover;"
                ></iframe>`:b=`
                <video
                    class="banner-video-element w-full h-full object-cover absolute inset-0 z-0 pointer-events-none select-none"
                    src="${c(f.directUrl)}"
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
                        ${i.title?`<p class="text-white font-extrabold text-sm sm:text-base line-clamp-1">${c(i.title)}</p>`:""}
                        ${i.desc?`<p class="text-white/80 text-[10px] sm:text-xs font-medium line-clamp-1 mt-0.5">${c(i.desc)}</p>`:""}
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
                    <h2 class="text-[15px] sm:text-lg md:text-xl font-extrabold text-white leading-snug mb-2 drop-shadow-sm line-clamp-2 tracking-tight">${c(i.title||"Penawaran Spesial")}</h2>
                    <p class="text-[10px] sm:text-[11px] text-white/90 font-medium line-clamp-3 leading-relaxed mb-3">${c(i.desc||"Belanja sekarang dan dapatkan penawaran terbaik.")}</p>
                    ${i.link?'<button class="mt-auto bg-white text-slate-900 text-[9px] sm:text-[10px] uppercase tracking-wider font-extrabold py-2.5 px-4.5 rounded-full w-max hover:bg-slate-100 active:scale-95 transition-all shadow-md flex items-center gap-2 group-hover:pr-5">Beli Sekarang <i class="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i></button>':""}
                </div>
                <div class="w-[40%] relative z-10 flex items-center justify-center p-2 sm:p-4 pr-4 sm:pr-6">
                    ${i.img?`<img loading="lazy" src="${c(pe(i.img,"w800-rw"))}" alt="${c(i.title||"Promo Banner")}" class="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105" onerror="this.style.display='none'">`:`
                    <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300">
                        <i class="fa-solid fa-gift text-4xl sm:text-5xl text-white"></i>
                    </div>`}
                </div>
            </div>
        </div>`}).join("")}
        </div>
        ${n.banners.length>1?`
        <!-- Navigation Arrows (Desktop) -->
        <button onclick="window.scrollBannerPrev()" type="button" aria-label="Banner Sebelumnya" class="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white items-center justify-center border border-slate-700 transition-all opacity-0 group-hover/banner-wrapper:opacity-100 shadow-xl active:scale-95">
            <i class="fa-solid fa-chevron-left text-sm"></i>
        </button>
        <button onclick="window.scrollBannerNext()" type="button" aria-label="Banner Selanjutnya" class="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white items-center justify-center border border-slate-700 transition-all opacity-0 group-hover/banner-wrapper:opacity-100 shadow-xl active:scale-95">
            <i class="fa-solid fa-chevron-right text-sm"></i>
        </button>

        <!-- Dots Indicator Navigation -->
        <div id="banner-dots-container" class="flex items-center justify-center gap-1.5 mt-2">
            ${n.banners.map((i,l)=>`
                <button onclick="window.scrollToBanner(${l})" type="button" aria-label="Slide ${l+1}" class="banner-dot-item ${l===0?"h-2.5 rounded-full transition-all duration-300 bg-[var(--color-primary)] w-7 shadow-sm":"w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"}" data-index="${l}"></button>
            `).join("")}
        </div>
        `:""}
    </div>`:"";P("dynamic-banners-container",e),setTimeout(Tt,500);const t=(n.vouchers||[]).filter(i=>i.isShow==="true"||i.isShow===!0),a=m("dynamic-vouchers-container");if(t.length>0&&a){a.classList.remove("hidden");let i=`
        <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-slate-800 dark:text-white text-sm sm:text-base tracking-tight flex items-center gap-2">
                <div class="w-8 h-8 rounded-xl bg-[var(--color-primary)] flex items-center justify-center text-white shadow-sm">
                    <i class="fa-solid fa-ticket-simple text-sm -rotate-45"></i>
                </div> VOUCHER TOKO
            </h3>
        </div>
        <div class="flex gap-4 overflow-x-auto hide-scrollbar snap-x pb-6 pt-2">
            ${t.map(l=>{let d=l.type==="shipping_free"?"Gratis Ongkir":l.type==="percent"?`Diskon ${c(String(parseFloat(l.value)||0))}%`:`Diskon ${x(l.value)}`,p=[];l.minPurchase>0&&p.push(`Min. Blj ${x(l.minPurchase)}`),l.maxDiscount>0&&p.push(`Maks. ptg ${x(l.maxDiscount)}`),l.targetProduct&&p.push("Produk Khusus");let f=p.length>0?c(p.join(" • ")):"Tanpa minimal belanja";return`
                <div class="w-[280px] sm:w-[320px] shrink-0 snap-start relative group cursor-pointer active:scale-95 transition-all duration-300" onclick="copyVoucher('${c(l.code)}')">
                    <div class="w-full h-[110px] bg-[var(--color-primary)] rounded-[1.25rem] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex relative overflow-hidden border border-white/20 text-white">
                        <!-- Left/Right Ticket Punch Holes (Biting into the sides) -->
                        <div class="absolute -top-2.5 right-[28%] w-5 h-5 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-b border-white/10 z-20 pointer-events-none transform translate-x-1/2 transition-colors duration-400"></div>
                        <div class="absolute -bottom-2.5 right-[28%] w-5 h-5 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-t border-white/10 z-20 pointer-events-none transform translate-x-1/2 transition-colors duration-400"></div>
                        
                        <!-- Main Details (Left Side) -->
                        <div class="flex-1 px-5 py-3 flex flex-col justify-center relative z-10">
                            <h4 class="font-extrabold text-white text-base leading-tight mb-1 drop-shadow-sm line-clamp-1">${d}</h4>
                            <p class="text-[8px] sm:text-[9px] font-bold text-white/90 flex items-center gap-1.5 mb-2.5 uppercase tracking-wider"><i class="fa-solid fa-circle-info text-white/70"></i> ${f}</p>
                            <div class="inline-flex">
                                <span class="bg-black/35 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-xl uppercase tracking-widest border border-white/20 shadow-inner flex items-center gap-2 font-mono">
                                    <i class="fa-solid fa-ticket text-amber-300"></i> ${c(l.code)}
                                </span>
                            </div>
                        </div>
                        
                        <!-- Divider Line -->
                        <div class="w-0 border-l-[2px] border-dashed border-white/30 relative z-10 my-3"></div>
                        
                        <!-- Action Area (Right Side) -->
                        <div class="w-[28%] flex flex-col items-center justify-center relative z-10 bg-black/15 group-hover:bg-black/25 transition-all duration-300">
                            <div class="w-9 h-9 rounded-full bg-white text-[var(--color-primary)] font-bold flex items-center justify-center mb-1.5 shadow-sm group-hover:scale-110 transition-all duration-300">
                                <i class="fa-regular fa-copy text-sm"></i>
                            </div>
                            <span class="text-[9px] font-bold uppercase tracking-wider text-white drop-shadow-sm group-hover:scale-105 transition-transform">Salin</span>
                        </div>
                    </div>
                </div>`}).join("")}
        </div>`;a.innerHTML=i}else a&&(a.classList.add("hidden"),a.innerHTML="");const r=[...n.categories||[]];P("dynamic-categories-container",r.map(i=>{const l=De===i.name,d=decodeURIComponent(encodeURIComponent(i.name).replace(/'/g,"%27"));return n.store.categoryStyle==="text"||!n.store.categoryStyle?`<div onclick="filterCategory('${d}')" class="cursor-pointer shrink-0 snap-start group py-1"><div class="px-5 py-2.5 rounded-[1.25rem] border-2 transition-all duration-300 flex items-center gap-3 ${l?"bg-[var(--color-primary)] border-transparent text-white shadow-md":"bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[var(--color-primary)] hover:shadow-md hover:-translate-y-1"}"><div class="w-6 h-6 rounded-full flex items-center justify-center ${l?"bg-white/20 text-white shadow-inner":"bg-slate-50 dark:bg-slate-700 text-slate-400 group-hover:bg-[var(--color-primary-light)] group-hover:text-[var(--color-primary)]"} transition-all duration-300"><i class="fa-solid fa-layer-group text-[10px]"></i></div><span class="font-bold text-[11px] sm:text-xs uppercase tracking-widest pr-2">${c(i.name)}</span></div></div>`:`<div onclick="filterCategory('${d}')" class="flex flex-col items-center gap-3 cursor-pointer shrink-0 w-[80px] sm:w-[95px] group snap-start py-1"><div class="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[1.25rem] bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-2 transition-all duration-300 ${l?"bg-[var(--color-primary-light)] border-2 border-[var(--color-primary)] shadow-glow dark:bg-[var(--color-primary-dark)]/20":"border border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-[var(--color-primary)] group-hover:shadow-lg group-hover:-translate-y-1.5"} overflow-hidden"><img loading="lazy" src="${c(pe(i.img,"w150-rw"))}" alt="${c(i.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/10b981/ffffff?text=Cat'" class="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"></div><span class="text-[9px] sm:text-[10px] text-center w-full line-clamp-2 leading-tight px-1 ${l?"font-bold text-[var(--color-primary)]":"font-bold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]"} uppercase tracking-widest transition-colors">${c(i.name)}</span></div>`}).join(""));const s=[...n.brands||[]],o=[{name:"Semua Merek",img:n.store.allBrandsIcon||"https://placehold.co/150/10b981/ffffff?text=Semua+Merek"},...n.brands||[]];P("dynamic-brands-container",s.map(i=>{const l=Se===i.name,d=decodeURIComponent(encodeURIComponent(i.name).replace(/'/g,"%27"));return n.store.brandStyle==="text"?`<div onclick="filterBrand('${d}')" class="cursor-pointer shrink-0 snap-start group py-1"><div class="px-5 py-2.5 rounded-[1.25rem] border-2 transition-all duration-300 flex items-center gap-3 ${l?"bg-[var(--color-primary)] border-transparent text-white shadow-sm":"bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[var(--color-primary)]/40 hover:shadow-md hover:-translate-y-1"}"><div class="w-6 h-6 rounded-full flex items-center justify-center ${l?"bg-white/20 text-white shadow-inner":"bg-slate-50 dark:bg-slate-700 text-slate-400 group-hover:bg-[rgba(var(--color-primary-rgb),0.08)] group-hover:text-[var(--color-primary)]"} transition-all duration-300"><i class="fa-solid fa-copyright text-[10px]"></i></div><span class="font-bold text-[11px] sm:text-xs uppercase tracking-widest pr-2">${c(i.name)}</span></div></div>`:`<div onclick="filterBrand('${d}')" class="flex flex-col items-center gap-3 cursor-pointer shrink-0 w-[75px] sm:w-[85px] group snap-start py-1"><div class="relative w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-2xl bg-white flex items-center justify-center overflow-hidden p-2 transition-all duration-500 ${l?"ring-4 ring-[var(--color-primary)] ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-800 shadow-md shadow-[rgba(var(--color-primary-rgb),0.25)]":"border border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-[var(--color-primary)]/50 group-hover:shadow-md group-hover:-translate-y-1.5"}"><img loading="lazy" src="${c(pe(i.img,"w150-rw"))}" alt="${c(i.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/10b981/ffffff?text=Brand'" class="w-full h-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-110"></div><span class="text-[9px] sm:text-[10px] text-center w-full line-clamp-2 leading-tight px-1 ${l?"font-bold text-[var(--color-primary)]":"font-bold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]"} uppercase tracking-widest transition-colors">${c(i.name)}</span></div>`}).join("")),P("modal-brand-grid",o.map(i=>{const l=Se===i.name;return`<button onclick="filterBrand('${decodeURIComponent(encodeURIComponent(i.name).replace(/'/g,"%27"))}'); closeBrandModal();" class="flex flex-col items-center gap-3 p-4 rounded-[1.25rem] border ${l?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.07)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-sm":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]/40 hover:shadow-sm"} transition-all active:scale-[0.96]"><div class="w-14 h-14 rounded-2xl flex items-center justify-center bg-white border border-slate-100 dark:border-slate-600 shadow-inner overflow-hidden p-1.5"><img loading="lazy" src="${c(pe(i.img,"w150-rw"))}" alt="${c(i.name)}" class="w-full h-full object-contain" onerror="this.src='https://placehold.co/100?text=Brand'"></div> <span class="text-[10px] sm:text-xs font-bold ${l?"text-[var(--color-primary)]":"text-slate-700 dark:text-slate-300"} text-center leading-tight line-clamp-2 uppercase tracking-widest">${c(i.name)}</span></button>`}).join("")),m("dyn-qris-img")&&n.payment&&(m("dyn-qris-img").src=n.payment.qrisUrl),typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog(),typeof window.applyBackgroundStyle=="function"&&window.applyBackgroundStyle(n.store.bgStyle,n.store.bgCustomUrl),Ie(1),Ke()};window.rDyn=ra;const hi=async()=>{if(document.documentElement.classList.contains("dark")){const u=m("icon-theme");u&&(u.className="fa-solid fa-sun text-sm text-amber-500")}const e=()=>{n.products=n.products||[],n.categories=n.categories||[],n.brands=n.brands||[],n.vouchers=n.vouchers||[],n.products.forEach(u=>{u.img&&(u.img=W(u.img)),u.variants&&u.variants.forEach(w=>{w.img&&(w.img=W(w.img))})}),n.banners&&n.banners.forEach(u=>{u.img&&(u.img=W(u.img)),u.videoUrl&&(u.videoUrl=Nt(u.videoUrl))}),n.categories&&n.categories.forEach(u=>{u.img&&(u.img=W(u.img))}),n.brands&&n.brands.forEach(u=>{u.img&&(u.img=W(u.img))}),n.store.logo&&(n.store.logo=W(n.store.logo)),n.store.allProductsIcon&&(n.store.allProductsIcon=W(n.store.allProductsIcon)),n.store.allBrandsIcon&&(n.store.allBrandsIcon=W(n.store.allBrandsIcon)),n.payment.qrisUrl&&(n.payment.qrisUrl=W(n.payment.qrisUrl)),R.forEach(u=>{u.img&&(u.img=W(u.img))}),me.forEach(u=>{u.img&&(u.img=W(u.img))})};let t=JSON.parse(we("freshmart_cms_data")||"null"),a=JSON.parse(we("freshmart_products")||"null"),r=JSON.parse(we("freshmart_rewards")||"null");parseInt(we("freshmart_last_update")||"0");let s=!1;if(t?(Object.assign(n,fe,t),n.store={...fe.store,...t.store||{}},n.payment={...fe.payment,...t.payment||{}},n.config={...fe.config,...t.config||{}},n.config&&n.config.gasUrl&&(window.GAS_UPLOAD_URL=n.config.gasUrl),a&&(n.products=a),r&&(n.rewards=r),e(),n.store&&(Ve(n.store.uiTheme,n.store.themeColor),Ge(n.store.bgStyle,n.store.bgCustomUrl)),Ct(),Ae(),vt(),ra(),Ke(),U("stat-products",n.products.filter(u=>u.isActive!=="false"&&u.isActive!==!1).length),D(),s=!0):O("Memuat Toko..."),!s)try{const u=await k.collection("freshmart").doc("cms_data").get();if(u.exists){const w=u.data(),y=w.lastUpdate||0;te("freshmart_cms_data",JSON.stringify(w)),Object.assign(n,fe,w),n.store={...fe.store,...w.store||{}},n.payment={...fe.payment,...w.payment||{}},n.config={...fe.config,...w.config||{}},n.config&&n.config.gasUrl&&(window.GAS_UPLOAD_URL=n.config.gasUrl);const h=await k.collection("freshmart").doc("cms_data").collection("products").get();n.products=h.docs.map(T=>T.data()).sort((T,E)=>(E.id||0)-(T.id||0)),te("freshmart_products",JSON.stringify(n.products)),te("freshmart_last_update",y.toString()),e(),n.store&&(Ve(n.store.uiTheme,n.store.themeColor),Ge(n.store.bgStyle,n.store.bgCustomUrl)),Ct(),Ae(),vt(),ra(),Ke(),U("stat-products",n.products.filter(T=>T.isActive!=="false"&&T.isActive!==!1).length)}}catch{g("Mode Offline (Data Lokal)")}finally{D()}U("stat-products",n.products.filter(u=>u.isActive!=="false"&&u.isActive!==!1).length);const o=m("loader-store-name"),i=m("loader-tagline");o&&(o.textContent=(n.store.name||"").toUpperCase()),i&&(i.textContent=n.store.tagline||n.store.desc||n.store.address||"");const l=m("loader-logo-icon"),d=m("loader-logo-img"),p=n.store.logo&&n.store.logo!=="fa-store"?n.store.logo:"";p&&(l&&(l.style.display="none"),d&&(d.src=p,d.style.display="block")),Ca(),window.injectJSONLD("seo-website",{"@context":"https://schema.org","@type":"WebSite",name:"Toko Putri",url:window.location.origin}),window.injectJSONLD("seo-localbusiness",{"@context":"https://schema.org","@type":"HardwareStore",name:"Toko Putri",image:pe(n.store.logo,"w300-rw"),description:"Solusi grosir dan e-commerce terpercaya untuk alat teknik, perkakas, dan perlengkapan pertukangan berkualitas.",url:window.location.origin,telephone:n.store.phone||"",address:{"@type":"PostalAddress",streetAddress:n.store.address||"",addressCountry:"ID"}});const b=new URLSearchParams(window.location.search).get("p");if(b&&n.products.find(u=>u.id==parseInt(b))){const u=new URLSearchParams(window.location.search);u.delete("p");let w=window.location.pathname;u.toString()&&(w+="?"+u.toString()),window.history.replaceState({},document.title,w),setTimeout(()=>openProductModal(parseInt(b)),600)}D()},le=async(e=null,t=null)=>{try{if(Array.isArray(e)){const r={lastUpdate:ue.firestore.FieldValue.increment(1),updateType:t?.updateType||(e.length?"settings_change":"full"),changedKeys:e};t?.updatedProductIds&&(r.updatedProductIds=t.updatedProductIds),e.forEach(s=>{s&&(r[s]=n[s])}),await k.collection("freshmart").doc("cms_data").set(r,{merge:!0})}else{const r={...n};delete r.products,delete r.auth,r.lastUpdate=ue.firestore.FieldValue.increment(1),r.updateType="full",await k.collection("freshmart").doc("cms_data").set(r)}n.lastUpdate=(parseInt(we("freshmart_last_update"))||n.lastUpdate||0)+1;const a={...n};delete a.products,delete a.auth,te("freshmart_cms_data",JSON.stringify(a)),te("freshmart_last_update",n.lastUpdate.toString()),te("freshmart_products",JSON.stringify(n.products))}catch{g("Tersimpan secara Lokal")}};let Yt=!1,He=null,oa=typeof document<"u"?document.hidden:!1,ia=!1;typeof document<"u"&&document.addEventListener("visibilitychange",()=>{if(oa=document.hidden,!oa&&ia&&He){ia=!1;const e=He;He=null,typeof window._doSyncCmsData=="function"&&window._doSyncCmsData(e)}});window.attachRealtimeStockSync=()=>{if(window.unsubCmsRealtime)return;const e=async t=>{if(!t.exists)return;const a=t.data(),r=a.lastUpdate||0,s=parseInt(we("freshmart_last_update")||"0");if(oa){He=t,ia=!0;return}if(!(r===s&&r>0&&n.products&&n.products.length>0)){Yt=!0;try{const o=a.updateType||"full",i=Array.isArray(a.updatedProductIds)?a.updatedProductIds.map(String):[];if(n.store={...fe.store,...a.store||{}},a.categories&&(n.categories=a.categories),a.vouchers&&(n.vouchers=a.vouchers),a.banners&&(n.banners=a.banners),a.brands&&(n.brands=a.brands),a.banks&&(n.banks=a.banks),a.faqs&&(n.faqs=a.faqs),n.payment={...fe.payment,...a.payment||{}},n.config={...fe.config,...a.config||{}},n.taxSettings={...fe.taxSettings,...a.taxSettings||{}},n.config&&n.config.gasUrl&&(window.GAS_UPLOAD_URL=n.config.gasUrl),n.banners&&n.banners.forEach(l=>{l.img&&(l.img=W(l.img)),l.videoUrl&&(l.videoUrl=Nt(l.videoUrl))}),n.categories&&n.categories.forEach(l=>{l.img&&(l.img=W(l.img))}),n.brands&&n.brands.forEach(l=>{l.img&&(l.img=W(l.img))}),!(o==="settings_change"&&n.products&&n.products.length>0))if((o==="stock_change"||o==="product_single")&&i.length>0&&n.products&&n.products.length>0)(await Promise.all(i.map(d=>k.collection("freshmart").doc("cms_data").collection("products").doc(d).get().catch(()=>null)))).forEach((d,p)=>{const f=i[p];if(d&&d.exists){const b=d.data();b.img&&(b.img=W(b.img)),b.variants&&b.variants.forEach(w=>{w.img&&(w.img=W(w.img))});const u=n.products.findIndex(w=>w.id.toString()===d.id);u>-1?n.products[u]=b:n.products.unshift(b)}else if(d&&!d.exists&&f){const b=n.products.findIndex(u=>u.id.toString()===f);b>-1&&n.products.splice(b,1)}}),te("freshmart_products",JSON.stringify(n.products));else{const l=await k.collection("freshmart").doc("cms_data").collection("products").get();n.products=l.docs.map(d=>d.data()).sort((d,p)=>(p.id||0)-(d.id||0)),n.products.forEach(d=>{d.img&&(d.img=W(d.img)),d.variants&&d.variants.forEach(p=>{p.img&&(p.img=W(p.img))})}),te("freshmart_products",JSON.stringify(n.products))}if(te("freshmart_cms_data",JSON.stringify(a)),te("freshmart_last_update",r.toString()),n.store&&(Ve(n.store.uiTheme,n.store.themeColor),Ge(n.store.bgStyle,n.store.bgCustomUrl)),Ca(),window.isAdm&&cTab&&["categories","vouchers","banners","brands","banks","products","colors"].includes(cTab)&&typeof window.rAdmItms=="function"&&window.rAdmItms(cTab),Ct(),Ae(),typeof window.rDyn=="function"&&window.rDyn(),typeof window.rCat=="function"&&window.rCat(),cProd){const l=n.products.find(d=>d.id===cProd.id);if(l&&(cProd=l,typeof window.rProdMod=="function")){const d=document.getElementById("product-modal");d&&!d.classList.contains("hidden")&&!d.classList.contains("opacity-0")&&window.rProdMod()}}}catch(o){console.warn("Gagal sinkron realtime stok:",o)}finally{if(Yt=!1,He){const o=He;He=null,e(o)}}}};window._doSyncCmsData=e,window.unsubCmsRealtime=k.collection("freshmart").doc("cms_data").onSnapshot(async t=>{if(Yt){He=t;return}await e(t)},t=>{console.warn("Realtime listener error:",t)})};window.attachRewardsRealtime=()=>{if(!window.unsubRewardsRealtime){if(!n.rewards||!n.rewards.length)try{const e=JSON.parse(we("freshmart_rewards")||"null");e&&Array.isArray(e)&&(n.rewards=e,n.rewards.forEach(t=>{t.img&&(t.img=W(t.img))}))}catch{}window.unsubRewardsRealtime=k.collection("freshmart").doc("cms_data").collection("rewards").onSnapshot(e=>{n.rewards=e.docs.map(a=>a.data()).sort((a,r)=>(r.id||0)-(a.id||0)),n.rewards.forEach(a=>{a.img&&(a.img=W(a.img))}),te("freshmart_rewards",JSON.stringify(n.rewards)),window.isAdm&&cTab==="rewards"&&typeof window.rAdmItms=="function"&&window.rAdmItms("rewards"),typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog();const t=document.getElementById("member-modal");t&&t.style.display==="flex"&&currentMember&&typeof window.rMemberModalBody=="function"&&window.rMemberModalBody()},e=>{console.warn("Realtime hadiah gagal:",e)})}};window.getEffP=e=>{const t=n.products.find(s=>s.id===e.id);let a=e.price||0;if(e.variantName&&t&&t.variants){const s=t.variants.find(o=>o.name===e.variantName);s&&s.price!=null&&(a=s.price)}if(e.variantName||!t||!t.wholesale||!t.wholesale.length)return a;const r=R.filter(s=>s.id===e.id).reduce((s,o)=>s+(parseFloat(o.qty)||0),0);for(let s of t.wholesale.slice().sort((o,i)=>i.minQty-o.minQty))if(r>=parseFloat(s.minQty))return s.price;return a};window.getEffHpp=e=>{const t=n.products.find(a=>a.id===e.id);if(!t)return 0;if(e.variantName&&t.variants){const a=t.variants.find(r=>r.name===e.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(t.hpp)||0};window.getEffPoin=e=>{if(!e)return 0;const t=n.products.find(a=>a.id===e.id);if(!t)return parseFloat(e.poin)||0;if(e.variantName&&t.variants){const a=t.variants.find(r=>r.name===e.variantName);if(a&&a.poin!==void 0&&a.poin!==null&&a.poin!==""){const r=parseFloat(a.poin);if(!isNaN(r)&&r>0)return r}}return parseFloat(t.poin)||0};window.getDist=(e,t,a,r)=>{if(!e||!t||!a||!r)return 0;const s=6371,o=(a-e)*Math.PI/180,i=(r-t)*Math.PI/180,l=Math.sin(o/2)*Math.sin(o/2)+Math.cos(e*Math.PI/180)*Math.cos(a*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2),d=2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l));return s*d};window.autoParseCoords=e=>{const a=e.value.trim().split(",");if(a.length>=2){const r=parseFloat(a[0].trim()),s=parseFloat(a[1].trim());if(!isNaN(r)&&!isNaN(s)){setV("set-lat",r),setV("set-lng",s),g("Koordinat tersalin!");return}}g("Format salah! Coba: Lat, Lng")};const Ca=e=>{try{const t=n.store?.name||"Toko Putri",a=n.store?.logo||"",r=/^(https?:|data:)/i.test(a)?a:"https://placehold.co/192x192?text=Logo",s=document.documentElement.classList.contains("dark")?"#0b1120":"#ffffff",o=e||n.store?.themeColor||localStorage.getItem("freshmart_theme_color")||"#10b981";let i=document.getElementById("dynamic-manifest");i||(i=document.createElement("link"),i.id="dynamic-manifest",i.rel="manifest",document.head.appendChild(i));let l=document.getElementById("dynamic-apple-icon");l||(l=document.createElement("link"),l.id="dynamic-apple-icon",l.rel="apple-touch-icon",document.head.appendChild(l)),l.href=r;let d=document.getElementById("dynamic-favicon");d||(d=document.createElement("link"),d.id="dynamic-favicon",d.rel="icon",document.head.appendChild(d)),d.href=r;const p={id:window.location.origin+"/",name:t,short_name:t,description:n.store?.slogan||t+" - Belanja online lebih mudah",start_url:window.location.origin+"/",scope:window.location.origin+"/",lang:"id",dir:"ltr",display:"standalone",display_override:["standalone","minimal-ui"],orientation:"portrait",categories:["shopping","business"],background_color:s,theme_color:o,icons:[{src:r,sizes:"192x192",type:"image/png",purpose:"any"},{src:r,sizes:"512x512",type:"image/png",purpose:"any"}]};if(i.dataset.blobUrl)try{URL.revokeObjectURL(i.dataset.blobUrl)}catch{}const f=URL.createObjectURL(new Blob([JSON.stringify(p)],{type:"application/manifest+json"}));i.dataset.blobUrl=f,i.href=f}catch(t){console.error("PWA Manifest Update Error: ",t)}};window.loadAppData=hi;window.saveApp=le;window.attachRealtimeStockSync=attachRealtimeStockSync;window.updatePwaManifest=Ca;let J=!1,tt="products",Ua="",Me=null,je=[],mt=[],We=[];window.rAdmL=e=>{tt=e,typeof window.setCTab=="function"&&window.setCTab(e),window.cTab=e,P("admin-content",`
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
                    <input autocomplete='off' id="admin-search-input" name='cari_admin_q' placeholder="Cari..." oninput="aSq=this.value.toLowerCase();rAdmItms('${e}')" class="w-full bg-white dark:bg-slate-800 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-2xl py-3.5 pl-11 pr-12 text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(var(--color-primary-rgb),0.12)] shadow-sm transition-all" ></i>
                    <button onclick="openCameraScanner('admin-search-input')" class="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl transition-all" title="Scan Barcode"><i class="fa-solid fa-qrcode text-sm"></i></button>
                </div>
                <button onclick="oAAdd()" class="h-[46px] px-5 rounded-2xl primary-bg font-bold text-sm flex items-center gap-2 shadow-glow active:scale-95 transition-all shrink-0"><i class="fa-solid fa-plus text-xs"></i> Tambah</button>
            </div>
        </div>
        <div id="admin-list-container" class="space-y-3 pb-12"></div>
        </div>
    `),rAdmItms(e)};window.rAdmItms=e=>{e&&(tt=e,typeof window.setCTab=="function"&&window.setCTab(e),window.cTab=e);const t=m("admin-list-container"),a=t?t.closest(".scroll-content"):null,r=a?a.scrollTop:0;if(e==="products"&&m("admin-product-stats")){const i=Gt();P("admin-product-stats",`
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
        `)}let s=[...n[e]||[]];s.sort((i,l)=>(l.id||0)-(i.id||0));let o=s.filter(i=>{let l=(i.name||i.title||i.bankName||i.code||i.sku||i.phone||"").toLowerCase().includes(Ua);return e==="products"&&!l&&i.variants&&(l=i.variants.some(d=>d.sku&&d.sku.toLowerCase().includes(Ua))),l});if(!o.length)return P("admin-list-container",'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-folder-open text-5xl mb-4 opacity-30"></i>Data kosong</div>');P("admin-list-container",o.map(i=>{let l=e==="products",d=l&&(i.isActive==="false"||i.isActive===!1),p=d?"border-rose-200 bg-rose-50/50 dark:border-rose-900/50 dark:bg-rose-900/10":"border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800",f=d?"text-slate-500 dark:text-slate-400 line-through":"text-slate-800 dark:text-slate-100",b=i.img?`<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white border border-slate-100 dark:border-slate-700/60 rounded-2xl p-1.5 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${c(i.img)}" alt="${c(i.name)}" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Img'" class="w-full h-full object-contain ${d?"grayscale opacity-50":""}"></div>`:'<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-2xl flex items-center justify-center text-slate-300 dark:text-slate-600"><i class="fa-solid fa-image text-2xl"></i></div>',u=l?d?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl primary-icon-btn border flex items-center justify-center transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus(${i.id}, true)" title="Aktifkan Stok"><i class="fa-solid fa-check text-xs sm:text-sm"></i></button>`:`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-500 flex items-center justify-center hover:bg-amber-500 hover:text-white dark:bg-amber-900/30 dark:border-amber-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus(${i.id}, false)" title="Nonaktifkan (Habis)"><i class="fa-solid fa-ban text-xs sm:text-sm"></i></button>`:"",w=l?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white dark:bg-blue-900/30 dark:border-blue-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); duplicateProduct(${i.id})" title="Duplikat Produk"><i class="fa-regular fa-copy text-xs sm:text-sm"></i></button>`:"";const y=n.store.useStock===!0||n.store.useStock==="true";let h=l&&y?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-500 flex items-center justify-center hover:bg-indigo-500 hover:text-white dark:bg-indigo-900/30 dark:border-indigo-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openRestockModal(${i.id})" title="Restock Produk"><i class="fa-solid fa-boxes-stacked text-xs sm:text-sm"></i></button>`:"",T=l?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl primary-icon-btn border flex items-center justify-center transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openQuickPriceModal(${i.id})" title="Edit Cepat Harga"><i class="fa-solid fa-tags text-xs sm:text-sm"></i></button>`:"",E=`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-500 hover:text-white dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oAEd('${e}',${i.id})" title="Edit Data"><i class="fa-solid fa-pen text-xs sm:text-sm"></i></button>`,M=`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oADel('${e}',${i.id})" title="Hapus Permanen"><i class="fa-solid fa-trash text-xs sm:text-sm"></i></button>`;return`
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[1.5rem] border shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all duration-300 ${p}" onclick="oAEd('${e}',${i.id})">
            <div class="flex items-start sm:items-center gap-4 min-w-0 w-full">
                ${b}
                <div class="min-w-0 flex flex-col justify-center py-1">
                    <p class="text-xs sm:text-sm font-bold ${f} line-clamp-2 uppercase tracking-wide leading-snug mb-1.5">${c(i.name||i.title||i.bankName||i.code||"Item")}</p>
                    ${l?`<p class="text-sm sm:text-base font-bold text-[var(--color-primary)] tracking-tight">${x(i.price)}</p>`:""}
                    ${l&&window.isAdm&&y?`<p class="text-[10px] font-bold mt-1 ${(i.variants&&i.variants.length?i.variants.reduce((V,I)=>V+(parseFloat(I.stock)||0),0):parseFloat(i.stock)||0)===0?"text-rose-500 animate-pulse":"text-blue-500"}"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${i.variants&&i.variants.length?i.variants.reduce((V,I)=>V+(parseFloat(I.stock)||0),0).toFixed(2).replace(/\.?0+$/,""):parseFloat(i.stock)||0}</p>`:""}
                    ${l&&window.isAdm&&i.hpp?`<p class="text-[10px] font-bold text-amber-500 mt-0.5"><i class="fa-solid fa-coins mr-1"></i>HPP: ${x(i.hpp)}</p>`:""}
                    ${l?(()=>{const V=i.variants&&i.variants.length?i.variants.reduce((I,S)=>I+(parseFloat(S.totalSold)||0),0):parseFloat(i.totalSold)||0;return V>0?`<p class="text-[10px] font-bold text-orange-400 mt-0.5"><i class="fa-solid fa-fire-flame-curved mr-1"></i>Terjual: ${V}</p>`:""})():""}
                    ${e==="colors"?`<div class="flex items-center gap-2 mt-1"><div class="w-4 h-4 rounded-full border border-slate-200 dark:border-slate-600 shadow-sm" style="background-color: ${c(i.hex||"transparent")}"></div><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-swatchbook mr-1"></i>${c(i.catalog||"Tanpa Katalog")}</p></div>`:""}
                    ${e==="customers"?`<p class="text-xs font-bold text-slate-500 dark:text-slate-400"><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i>+${c(i.phone)}</p><p class="text-[11px] font-bold text-[var(--color-primary)] mt-0.5"><i class="fa-solid fa-star mr-1"></i>${parseFloat(i.points)||0} Poin</p>`:""}
                    ${e==="rewards"?`<p class="text-sm font-bold text-violet-500"><i class="fa-solid fa-star mr-1"></i>${parseFloat(i.pointsCost)||0} Poin</p><p class="text-[10px] font-bold text-slate-500 mt-0.5"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${parseFloat(i.stock)||0}</p>`:""}
                </div>
            </div>
            <div class="flex gap-2.5 shrink-0 self-end sm:self-center pt-3 sm:pt-0 border-t border-slate-100 sm:border-0 dark:border-slate-700/50 w-full sm:w-auto justify-end">
                ${u}
                ${h}
                ${T}
                ${w}
                ${E}
                ${M}
            </div>
        </div>`}).join("")),a&&requestAnimationFrame(()=>{a.scrollTop=r})};window.oAAdd=()=>{oAEd(tt||window.cTab||"products",null)};window.oAEd=(e,t)=>{tt=e,typeof window.setCTab=="function"&&window.setCTab(e),window.cTab=e,Me=t,typeof window.setEId=="function"&&window.setEId(t),window.eId=t;let a=t?(n[e]||[]).find(p=>p.id===t):null;U("admin-modal-title",t?"Edit Data":"Tambah Data");let r=ya[e]||[],s="";e==="products"&&(je=a&&a.variants?JSON.parse(JSON.stringify(a.variants)):[],mt=a&&a.wholesale?JSON.parse(JSON.stringify(a.wholesale)):[],We=a&&a.specTable?JSON.parse(JSON.stringify(a.specTable)):[]);const o=["textarea","richtext","variants_builder","wholesale_builder","spec_table_builder"],i=["img","desc","name","isActive","tag","poTime","video"],l=p=>o.includes(p.type)||i.includes(p.key);r.forEach(p=>{let f=a?p.type==="number"&&a[p.key]!==void 0?a[p.key]:a[p.key]||"":"";const b=l(p)?"lg:col-span-2":"";s+=`<div class="flex flex-col gap-1.5 ${b}"><label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">${p.label}</label>`,p.type==="textarea"?s+=`<textarea autocomplete='off' id="af-${p.key}" class="admin-input resize-none shadow-sm bg-slate-50 dark:bg-slate-900" rows="3">${c(f)}</textarea>`:p.type==="select"?(s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();">`,p.options.forEach(u=>{s+=`<option value="${u.val}" ${f==u.val||f==="true"&&u.val==="true"||f==="false"&&u.val==="false"?"selected":""} class="font-bold">${u.text}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>'):p.type==="dynamic_select_category"?(s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Pilih Kategori</option>`,n.categories.forEach(u=>{s+=`<option value="${c(u.name)}" ${f===u.name?"selected":""} class="font-bold">${c(u.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>'):p.type==="dynamic_select_brand"?(s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Tanpa Merek</option>`,(n.brands||[]).forEach(u=>{s+=`<option value="${c(u.name)}" ${f===u.name?"selected":""} class="font-bold">${c(u.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>'):p.type==="dynamic_select_products"?(s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold primary-text">-- Semua Produk (Tanpa Batasan) --</option>`,(n.products||[]).forEach(u=>{s+=`<option value="${u.id}" ${f==u.id?"selected":""} class="font-bold">${c(u.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>'):p.type==="variants_builder"?s+='<div id="variants-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 lg:p-8 lg:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>':p.type==="wholesale_builder"?s+='<div id="wholesale-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 lg:p-8 lg:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>':p.type==="spec_table_builder"?s+='<div id="spec-table-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>':p.key==="sku"?s+=`<div class="relative flex items-center"><input autocomplete='off' type="${p.type}" id="af-${p.key}" value="${c(f)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 !pr-12" placeholder="Scan atau ketik..." ></i><button type="button" onclick="openCameraScanner('af-${p.key}')" class="absolute right-2 w-9 h-9 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-[var(--color-primary)] rounded-xl transition-all" title="Scan Barcode via HP"><i class="fa-solid fa-qrcode text-lg"></i></button></div>`:p.key==="img"?s+=`<div class="flex gap-3"><input autocomplete='off' type="text" id="af-${p.key}" value="${c(f)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="URL Gambar" ></i><label class="primary-bg-soft border primary-border text-[var(--color-primary)] font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-cloud-arrow-up sm:mr-2"></i><span class="hidden sm:inline">Upload</span><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'af-${p.key}')" ></i></label><label class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'af-${p.key}')" ></i></label></div>`:p.key==="videoUrl"?s+=`<div class="flex flex-col gap-2">
                <div class="flex gap-3">
                    <input autocomplete='off' type="text" id="af-${p.key}" value="${c(f)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="Paste URL Drive atau upload video di bawah">
                    <label class="bg-violet-50 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-400 font-bold rounded-xl px-4 flex items-center justify-center cursor-pointer hover:bg-violet-100 transition-all shrink-0 active:scale-95 shadow-sm gap-2" title="Upload Video ke Google Drive">
                        <i class="fa-solid fa-film"></i><span class="hidden sm:inline text-[11px]">Upload Video</span>
                        <input type="file" accept="video/mp4,video/webm,video/quicktime,video/x-msvideo,video/3gpp" class="hidden" onchange="handleVideoUpload(this, 'af-${p.key}')">
                    </label>
                </div>
                <p class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-info text-violet-400"></i><b>Tips Autoplay:</b> Untuk video 100% otomatis play & loop tanpa klik, gunakan link <b>YouTube / Shorts</b> atau <b>Direct MP4</b>. Upload Drive/HP juga didukung.</p>
                ${f?`<div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-black aspect-video w-full max-w-xs"><iframe src="${c(fixDriveVideo(f))}" class="w-full h-full" frameborder="0" allow="autoplay; fullscreen" loading="lazy"></iframe></div>`:""}
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
                    <label class="w-8 h-8 rounded hover:bg-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center cursor-pointer text-[var(--color-primary)] transition-colors" title="Upload & Sisipkan Gambar"><i class="fa-solid fa-image"></i>
                        <input type="file" accept="image/*" class="hidden" onchange="handleRTEditorImage(this, 'af-${p.key}-editor')" ></i>
                    </label>
                </div>
                <div id="af-${p.key}-editor" contenteditable="true" class="p-4 min-h-[150px] max-h-[350px] overflow-y-auto outline-none text-sm text-slate-800 dark:text-slate-200 leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_b]:font-bold [&_strong]:font-bold [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-2">
                    ${f}
                </div>
            </div>`:s+=`<input autocomplete='off' type="${p.type}" id="af-${p.key}" value="${c(f)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 transition-all" 
    ${p.key==="price"?'min="0" step="1" placeholder="0"':""} 
    ${p.key==="priceNormal"?'min="0" step="1" placeholder="0 (kosong = tidak ada coretan)"':""} 
    ${p.key==="hpp"?'min="0" step="1" placeholder="0"':""} 
    ${p.key==="stock"?'min="0" step="0.01" placeholder="0"':""}
></i>`,s+="</div>"}),s=`<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 items-start">${s}</div>`,P("admin-modal-form",s),e==="products"&&(rVarsB(),rWholB(),rSpecB());const d=m("admin-modal");d&&d.classList.contains("hidden")&&pushModalHistory("admin"),L("admin-modal"),setTimeout(()=>{m("admin-modal").classList.remove("opacity-0"),m("admin-modal-box").classList.remove("scale-95")},10)};window.rVarsB=()=>{const e=document.getElementById("af-category"),t=e?/\bcat\b/i.test(e.value):!1;let a=`<div class="space-y-5 mb-5">${je.map((r,s)=>{let o=r.isActive!==!1&&r.isActive!=="false";return`
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 md:p-7 lg:p-8 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative transition-all duration-300 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 hover:shadow-md">
            
            <!-- Header varian: nomor + tombol hapus selalu terlihat -->
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
                    <input autocomplete='off' placeholder="Cth: Hijau Tosca" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${c(r.name)}" onchange="uVar(${s},'name',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Satuan / Unit</label>
                    <input autocomplete='off' placeholder="Cth: Pcs / Liter" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${c(r.unit||"")}" onchange="uVar(${s},'unit',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Promo / Jual (Rp)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.price}" onchange="uVar(${s},'price',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Coret (Opsional)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.priceNormal||""}" onchange="uVar(${s},'priceNormal',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Kode Warna (Khusus Cat)</label>
                    <div class="flex gap-3 items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2 shadow-sm">
                        <div class="relative shrink-0">
                            <input type="color" class="w-11 h-11 rounded-xl cursor-pointer border-2 border-slate-200 dark:border-slate-600 p-0.5 bg-white dark:bg-slate-700 shadow-inner" value="${r.colorCode||"#ffffff"}" 
                                onchange="uVar(${s},'colorCode',this.value); document.getElementById('var-hex-${s}').value = this.value;" 
                                title="Klik untuk pilih warna"></i>
                            <i class="fa-solid fa-eye-dropper absolute -bottom-1 -right-1 text-[9px] bg-white dark:bg-slate-700 text-slate-400 w-4 h-4 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-600 pointer-events-none"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-[9px] font-bold text-slate-400 mb-0.5 uppercase tracking-widest">Kode HEX</p>
                            <input autocomplete='off' id="var-hex-${s}" placeholder="#RRGGBB (opsional)" class="w-full bg-transparent text-sm font-mono font-bold focus:outline-none dark:text-white uppercase" value="${c(r.colorCode||"")}" onchange="uVar(${s},'colorCode',this.value)"></i>
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
                            <input autocomplete='off' id="var-sku-${s}" placeholder="Auto (Bisa Kosong)" class="admin-input !text-sm h-full bg-white dark:bg-slate-800 shadow-sm !pr-12" value="${c(r.sku||"")}" onchange="uVar(${s},'sku',this.value)"></i>
                            <button type="button" onclick="openCameraScanner('var-sku-${s}')" class="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all"><i class="fa-solid fa-qrcode text-lg"></i></button>
                        </div>
                    </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Status Stok Varian</label>
                    <button type="button" onclick="tVars[${s}].isActive = ${!o}; rVarsB();" class="w-full py-3.5 px-4 rounded-xl text-[13px] font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2.5 border-2 active:scale-95 ${o?"primary-bg border-[var(--color-primary-dark)] shadow-md":"bg-slate-100 text-rose-500 border-rose-200 hover:bg-rose-50 dark:bg-slate-800 dark:border-rose-800"}">
                        ${o?'<i class="fa-solid fa-circle-check text-base"></i> STOK TERSEDIA':'<i class="fa-solid fa-ban text-base"></i> STOK HABIS'}
                    </button>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Modal / HPP (Rp)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.hpp||0}" onchange="uVar(${s},'hpp',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Stok Varian (Qty)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.stock!==void 0?r.stock:""}" onchange="uVar(${s},'stock',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-violet-500 mb-2 uppercase tracking-widest"><i class="fa-solid fa-star mr-1"></i>Poin Member (per unit terjual)</label>
                    <input autocomplete='off' placeholder="0" type="number" min="0" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.poin||0}" onchange="uVar(${s},'poin',this.value)"></i>
                </div>
            </div>
        </div>`}).join("")}</div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <button type="button" onclick="openColorImportModal()" class="py-3 text-pink-600 font-bold rounded-2xl text-sm border-2 border-pink-200 bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/30 dark:border-pink-800 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-swatchbook"></i> Impor dari DB Warna</button>
        <button type="button" onclick="exportAllVariantsToColorDB()" class="py-3 text-violet-600 font-bold rounded-2xl text-sm border-2 border-violet-200 bg-violet-50 hover:bg-violet-100 dark:bg-violet-900/30 dark:border-violet-800 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-upload"></i> Ekspor Semua ke DB</button>
        <button type="button" onclick="addVar()" class="py-3 primary-bg font-bold rounded-2xl text-sm border border-[rgba(var(--color-primary-rgb),0.3)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-glow"><i class="fa-solid fa-plus-circle text-base"></i> Tambah Varian Baru</button>
    </div>`;P("variants-builder-container",a)};window.addVar=()=>{je.push({name:"",price:0,priceNormal:0,hpp:0,stock:0,sku:"",img:"",unit:"",colorCode:"",poin:0,isActive:!0}),rVarsB()};window.rmVar=e=>{je.splice(e,1),rVarsB()};window.uVar=(e,t,a)=>{je[e][t]=t==="price"||t==="priceNormal"||t==="hpp"||t==="stock"||t==="poin"?parseFloat(a)||0:t==="img"?W(a):a};window.openColorImportModal=()=>{let e=n.colors||[];if(!e.length){g("Database Warna masih kosong!");return}let t={};e.forEach(r=>{let s=r.catalog||"Tanpa Katalog";t[s]||(t[s]=[]),t[s].push(r)});let a=`<div class="p-6">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2"><i class="fa-solid fa-swatchbook text-pink-500"></i> Pilih Warna</h3>
            <button type="button" onclick="_closeColorFloatModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 flex items-center justify-center transition-all"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
    `;for(let r in t)a+=`<div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">${c(r)}</h4>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                ${t[r].map(s=>`
                    <button type="button" onclick="importColorToVariant('${c(s.name)}', '${c(s.hex||"")}')" class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-pink-300 dark:hover:border-pink-600 hover:-translate-y-1 hover:shadow-md transition-all text-left bg-white dark:bg-slate-800">
                        <div class="w-8 h-8 rounded-full border-2 border-slate-100 dark:border-slate-600 shadow-sm shrink-0" style="background-color: ${c(s.hex||"transparent")}"></div>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2">${c(s.name)}</span>
                    </button>
                `).join("")}
            </div>
        </div>`;a+="</div></div>",_openColorFloatModal(a)};window._openColorFloatModal=e=>{_closeColorFloatModal();const t=document.createElement("div");t.id="color-float-modal",t.className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/80 p-4 opacity-0 transition-opacity duration-300",t.onclick=r=>{r.target===t&&_closeColorFloatModal()};const a=document.createElement("div");a.id="color-float-box",a.className="relative w-full max-w-sm scale-95 transform rounded-[2rem] border border-slate-200 bg-white shadow-2xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-800 overflow-y-auto max-h-[90vh]",a.innerHTML=e,t.appendChild(a),document.body.appendChild(t),requestAnimationFrame(()=>{t.classList.remove("opacity-0"),a.classList.remove("scale-95")})};window._closeColorFloatModal=()=>{const e=document.getElementById("color-float-modal");if(!e)return;const t=document.getElementById("color-float-box");e.classList.add("opacity-0"),t&&t.classList.add("scale-95"),setTimeout(()=>{e.parentNode&&e.remove()},300)};window.importColorToVariant=(e,t)=>{je.push({name:e,price:0,priceNormal:0,hpp:0,stock:0,sku:"",img:"",unit:"",colorCode:t||"",poin:0,isActive:!0}),rVarsB(),_closeColorFloatModal(),g("Warna ditambahkan!")};window.exportVariantToColorDB=async e=>{const t=je[e];if(!t||!t.name.trim()){g("Nama varian kosong!");return}if((n.colors||[]).find(o=>o.name.toLowerCase()===t.name.trim().toLowerCase())){g(`"${t.name}" sudah ada di Database Warna.`);return}let s=[...new Set((n.colors||[]).map(o=>o.catalog).filter(Boolean))].map(o=>`<option value="${c(o)}">${c(o)}</option>`).join("");_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"><i class="fa-solid fa-database text-pink-500"></i> Simpan ke Database Warna</h3>
            <div class="space-y-4">
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nama Warna</label>
                    <input id="exp-name" class="admin-input" value="${c(t.name)}"></div>
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
        </div>`)};window.confirmExportVariantToColorDB=async()=>{const e=(document.getElementById("exp-name")?.value||"").trim(),t=(document.getElementById("exp-hex")?.value||"").trim(),a=(document.getElementById("exp-catalog")?.value||"").trim();if(!e){g("Nama warna wajib diisi!");return}const r={id:Date.now(),name:e,hex:t,catalog:a};n.colors||(n.colors=[]),n.colors.push(r),_closeColorFloatModal(),O("Menyimpan ke Database Warna...");try{await le(["colors"]),g(`"${e}" berhasil disimpan ke Database Warna! 🎨`)}catch{g("Gagal menyimpan!")}finally{D()}};window.exportAllVariantsToColorDB=async()=>{const e=je.filter(r=>r.name.trim());if(!e.length){g("Tidak ada varian untuk diekspor!");return}n.colors||(n.colors=[]),new Set(n.colors.map(r=>r.name.toLowerCase()));let a=[...new Set(n.colors.map(r=>r.catalog).filter(Boolean))].map(r=>`<option value="${c(r)}">${c(r)}</option>`).join("");_openColorFloatModal(`
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
        </div>`)};window.confirmExportAllVariants=async()=>{const e=(document.getElementById("expall-catalog")?.value||"").trim(),t=je.filter(s=>s.name.trim());n.colors||(n.colors=[]);const a=new Set(n.colors.map(s=>s.name.toLowerCase()));let r=0;if(t.forEach(s=>{a.has(s.name.trim().toLowerCase())||(n.colors.push({id:Date.now()+r,name:s.name.trim(),hex:s.colorCode||"",catalog:e}),a.add(s.name.trim().toLowerCase()),r++)}),_closeColorFloatModal(),!r){g("Semua varian sudah ada di Database Warna!");return}O("Menyimpan...");try{await le(["colors"]),g(`${r} warna berhasil diekspor ke Database Warna! 🎨`)}catch{g("Gagal menyimpan!")}finally{D()}};window.openImportFromProductsModal=async()=>{const e=[];if((n.products||[]).forEach(o=>{(o.variants||[]).forEach(i=>{i.name&&i.name.trim()&&e.push({varName:i.name.trim(),hex:i.colorCode||"",prodName:o.name||""})})}),!e.length){g("Tidak ada varian produk yang ditemukan!");return}const t=new Set((n.colors||[]).map(o=>o.name.toLowerCase())),a=e.filter(o=>!t.has(o.varName.toLowerCase()));if(!a.length){g("Semua varian produk sudah ada di Database Warna!");return}let s=[...new Set((n.colors||[]).map(o=>o.catalog).filter(Boolean))].map(o=>`<option value="${c(o)}">${c(o)}</option>`).join("");window._pendingImportVariants=a,_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-box-archive text-[var(--color-primary)]"></i> Impor dari Semua Produk</h3>
            <p class="text-xs text-slate-500 mb-4">${a.length} nama varian baru ditemukan (yang sudah ada di database dilewati).</p>
            <div class="max-h-48 overflow-y-auto mb-4 space-y-2">
                ${a.map((o,i)=>`
                    <label class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-[var(--color-primary)] transition-all">
                        <input type="checkbox" id="imp-chk-${i}" checked class="w-4 h-4 rounded accent-[var(--color-primary)]">
                        <div class="w-5 h-5 rounded-full border border-slate-200 dark:border-slate-600 shrink-0" style="background-color:${c(o.hex||"transparent")}"></div>
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">${c(o.varName)}</p>
                            <p class="text-[10px] text-slate-400 truncate">dari: ${c(o.prodName)}</p>
                        </div>
                    </label>
                `).join("")}
            </div>
            <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek</label>
                <input id="impprod-catalog" list="impprod-cat-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll (opsional)">
                <datalist id="impprod-cat-list">${s}</datalist>
            </div>
            <div class="flex gap-3 mt-5">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 text-sm hover:bg-slate-50 transition-all">Batal</button>
                <button onclick="confirmImportFromProducts()" class="flex-1 py-3 rounded-xl primary-bg font-bold text-sm transition-all active:scale-95"><i class="fa-solid fa-download mr-2"></i>Impor</button>
            </div>
        </div>`)};window.confirmImportFromProducts=async()=>{const e=window._pendingImportVariants||[];window._pendingImportVariants=null;const t=(document.getElementById("impprod-catalog")?.value||"").trim();n.colors||(n.colors=[]);const a=new Set(n.colors.map(s=>s.name.toLowerCase()));let r=0;if(e.forEach((s,o)=>{const i=document.getElementById(`imp-chk-${o}`);i&&i.checked&&!a.has(s.varName.toLowerCase())&&(n.colors.push({id:Date.now()+r,name:s.varName,hex:s.hex||"",catalog:t}),a.add(s.varName.toLowerCase()),r++)}),_closeColorFloatModal(),!r){g("Tidak ada warna baru yang ditambahkan!");return}O("Menyimpan...");try{await le(["colors"]),g(`${r} warna berhasil diimpor ke Database Warna! 🎨`),typeof tt<"u"&&tt==="colors"&&rAdmItms("colors")}catch{g("Gagal menyimpan!")}finally{D()}};window.rWholB=()=>{let e=`<div class="space-y-4 mb-4">${mt.map((t,a)=>`
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative group transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-600">
            <button onclick="rmWhol(${a})" class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md z-10"><i class="fa-solid fa-trash text-xs"></i></button>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Minimal Pembelian (Qty)</label>
                    <input autocomplete='off' type="number" step="0.01" placeholder="Cth: 12" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${t.minQty}" onchange="uWhol(${a},'minQty',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Satuan Spesial (Rp)</label>
                    <input autocomplete='off' type="number" placeholder="Cth: 15000" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${t.price}" onchange="uWhol(${a},'price',this.value)"></i>
                </div>
            </div>
        </div>`).join("")}</div>
        <button onclick="addWhol()" class="w-full py-4 bg-amber-50 dark:bg-amber-900/20 text-amber-600 font-bold rounded-[1.5rem] text-sm border-2 border-amber-200 border-dashed hover:bg-amber-100 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-tags"></i> Tambah Tingkatan Grosir</button>`;P("wholesale-builder-container",e)};window.addWhol=()=>{mt.push({minQty:2,price:0}),rWholB()};window.rmWhol=e=>{mt.splice(e,1),rWholB()};window.uWhol=(e,t,a)=>{mt[e][t]=parseFloat(a)||0};window.rSpecB=()=>{if(!m("spec-table-builder-container"))return;let t="";We.length>0?t+=`<div class="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm mb-4">
            <table class="w-full text-sm">
                <thead>
                    <tr class="bg-slate-100 dark:bg-slate-800">
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest w-5/12">Nama Spesifikasi</th>
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Nilai / Keterangan</th>
                        <th class="py-2.5 px-2 w-10"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                    ${We.map((a,r)=>`
                    <tr class="bg-white dark:bg-slate-900 group">
                        <td class="py-2 px-3">
                            <input autocomplete='off' placeholder="Cth: Berat" class="w-full bg-transparent text-[13px] font-semibold text-slate-700 dark:text-slate-200 focus:outline-none placeholder:text-slate-300" value="${c(a.key)}" oninput="uSpec(${r},'key',this.value)">
                        </td>
                        <td class="py-2 px-3">
                            <input autocomplete='off' placeholder="Cth: 2.5 kg" class="w-full bg-transparent text-[13px] text-slate-600 dark:text-slate-300 focus:outline-none placeholder:text-slate-300" value="${c(a.val)}" oninput="uSpec(${r},'val',this.value)">
                        </td>
                        <td class="py-2 px-2 text-center">
                            <button type="button" onclick="rmSpec(${r})" class="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 text-rose-400 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-60 group-hover:opacity-100 active:scale-95" title="Hapus Baris"><i class="fa-solid fa-trash text-[10px]"></i></button>
                        </td>
                    </tr>`).join("")}
                </tbody>
            </table>
        </div>`:t+='<div class="text-center py-6 text-slate-400 dark:text-slate-600 text-[12px] font-medium"><i class="fa-solid fa-table-cells-large text-2xl mb-2 block opacity-30"></i>Belum ada spesifikasi. Klik tombol di bawah untuk menambahkan.</div>',t+='<button type="button" onclick="addSpec()" class="w-full py-4 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 font-bold rounded-[1.5rem] text-sm border-2 border-cyan-200 dark:border-cyan-800 border-dashed hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-plus-circle"></i> Tambah Baris Spesifikasi</button>',P("spec-table-builder-container",t)};window.addSpec=()=>{We.push({key:"",val:""}),rSpecB()};window.rmSpec=e=>{We.splice(e,1),rSpecB()};window.uSpec=(e,t,a)=>{We[e]&&(We[e][t]=a)};window.submitAdminForm=async()=>{if(J)return;J=!0;const e=tt||window.cTab||"products";let t={},a=ya[e]||[];for(let s of a)if(s.type==="variants_builder")t.variants=je.filter(o=>o.name.trim()!=="");else if(s.type==="wholesale_builder")t.wholesale=mt.filter(o=>parseFloat(o.minQty)>.01&&o.price>0);else if(s.type==="spec_table_builder")t.specTable=We.filter(o=>o.key.trim()!=="");else{let o="";if(s.type==="richtext"){const i=m(`af-${s.key}-editor`);o=i?i.innerHTML:""}else o=C(`af-${s.key}`);if(typeof o=="string"){if(o.startsWith("data:image/")&&o.length>3e5)return J=!1,g("Gambar Base64 terlalu besar! Upload file.");s.key==="img"&&(o=W(o))}t[s.key]=s.type==="number"?parseFloat(o)||0:o}if(!t.name&&!t.title&&!t.bankName&&!t.code)return J=!1,g("Judul/Nama/Kode wajib diisi!");if(e==="products"&&!t.sku&&(t.sku="SKU"+Date.now().toString().slice(-6)),e==="customers"){const s=window.normalizeWA?window.normalizeWA(t.phone):(t.phone||"").replace(/\D/g,"").replace(/^0/,"62");if(!s||s.length<10)return J=!1,g("Nomor WhatsApp tidak valid!");t.phone=s,t.points=parseFloat(t.points)||0,t.id=parseInt(s,10)}let r=null;if(e==="customers")if(n.customers||(n.customers=[]),Me){r=Me;let s=n.customers.findIndex(o=>o.id===Me);s>-1?n.customers[s]=t:n.customers.unshift(t)}else n.customers.unshift(t);else if(e==="rewards")if(n.rewards||(n.rewards=[]),Me){t.id=Me;let s=n.rewards.findIndex(o=>o.id===Me);s>-1&&(n.rewards[s]=t)}else t.id=Date.now(),n.rewards.unshift(t);else if(Me){t.id=Me,n[e]||(n[e]=[]);let s=n[e].findIndex(o=>o.id===Me);if(e==="products"&&s>-1){const o=n[e][s];t.totalSold=o.totalSold||0,t.variants&&t.variants.length&&o.variants&&t.variants.forEach(i=>{const l=o.variants.find(d=>d.name===i.name);l&&l.totalSold&&(i.totalSold=l.totalSold)})}s>-1&&(n[e][s]=t)}else t.id=Date.now(),n[e]||(n[e]=[]),n[e].unshift(t);O("Menyimpan...");try{const s=typeof k<"u"&&k?k:window.db,o=typeof le=="function"?le:window.saveApp||(async()=>{});if(!s)throw new Error("Database Firebase belum terhubung");if(e==="products")await s.collection("freshmart").doc("cms_data").collection("products").doc(t.id.toString()).set(t),await o([],{updateType:"product_single",updatedProductIds:[t.id.toString()]});else if(e==="customers"){const i=s.collection("freshmart").doc("cms_data").collection("customers");if(r!==null&&r!==t.id){const l=r.toString();await i.doc(l).delete().catch(()=>{})}await i.doc(t.phone).set(t,{merge:!0})}else e==="rewards"?await s.collection("freshmart").doc("cms_data").collection("rewards").doc(t.id.toString()).set(t):await o([e]);closeAdminModal(),rAdmItms(e),g("Tersimpan!")}catch(s){console.error("Gagal simpan admin data:",s),g("Gagal menyimpan: "+(s.message||""))}finally{J=!1,D()}};window.oADel=async(e,t)=>{Le("Hapus Data","Data yang dihapus tidak bisa dikembalikan lagi.",async()=>{if(J)return;J=!0;const a=typeof k<"u"&&k?k:window.db,r=typeof le=="function"?le:window.saveApp||(async()=>{}),s=n[e]&&n[e].find(o=>o.id===t);n[e]=n[e].filter(o=>o.id!==t),O("Menghapus...");try{if(!a)throw new Error("Database Firebase belum terhubung");if(e==="products")await a.collection("freshmart").doc("cms_data").collection("products").doc(t.toString()).delete(),await r([]);else if(e==="customers"){const o=s?s.phone:t.toString();await a.collection("freshmart").doc("cms_data").collection("customers").doc(o).delete()}else e==="rewards"?await a.collection("freshmart").doc("cms_data").collection("rewards").doc(t.toString()).delete():await r([e]);rAdmItms(e),g("Berhasil Dihapus!")}catch(o){g("Gagal menghapus: "+(o.message||""))}finally{J=!1,D()}})};window.duplicateProduct=async e=>{Le("Duplikat Produk","Menyalin data produk ini ke item baru?",async()=>{if(J)return;J=!0;const t=typeof k<"u"&&k?k:window.db,a=typeof le=="function"?le:window.saveApp||(async()=>{}),r=n.products.find(o=>o.id===e);if(!r){J=!1;return}let s=JSON.parse(JSON.stringify(r));s.id=Date.now()+Math.floor(Math.random()*1e3),s.name=s.name+" COPY",s.sku="",s.totalSold=0,s.variants&&s.variants.length>0&&(s.variants=s.variants.map(o=>(o.sku="",o.totalSold=0,o))),n.products.unshift(s),O("Menyalin...");try{if(!t)throw new Error("Database Firebase belum terhubung");await t.collection("freshmart").doc("cms_data").collection("products").doc(s.id.toString()).set(s),await a([],{updateType:"product_single",updatedProductIds:[s.id.toString()]}),rAdmItms("products"),g("Produk berhasil disalin!")}catch(o){g("Gagal menyalin: "+(o.message||""))}finally{J=!1,D()}},"Ya, Salin")};window.openRestockModal=e=>{const t=n.products.find(o=>o.id===e);if(!t)return;const a=t.variants&&t.variants.length>0;let r="";a?r=t.variants.map((o,i)=>`
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-3 min-w-0 flex-1">
                    ${o.colorCode?`<span class="w-5 h-5 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${c(o.colorCode)}"></span>`:""}
                    <div class="min-w-0 flex-1">
                        <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${c(o.name)}</p>
                        <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(o.stock)||0}</span></p>
                    </div>
                </div>
                <input type="number" id="restock-var-${i}" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`).join(""):r=`
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700">
                <div class="min-w-0 flex-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${c(t.name)}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(t.stock)||0}</span></p>
                </div>
                <input type="number" id="restock-main" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`;let s=document.getElementById("restock-modal");s||(s=document.createElement("div"),s.id="restock-modal",s.className="fixed inset-0 z-[110] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=o=>{o.target===s&&closeRestockModal()},document.body.appendChild(s)),s.innerHTML=`
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
        </div>`,s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),pushModalHistory("restock")};window.closeRestockModal=(e=!1)=>{requestCloseModal("restock",e,()=>{const t=document.getElementById("restock-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250))})};window.processRestock=async e=>{if(J)return;J=!0;const t=n.products.findIndex(i=>i.id===e);if(t<0){J=!1;return}const a=n.products[t],r=a.variants&&a.variants.length>0;let s=JSON.parse(JSON.stringify(a)),o=0;if(r)s.variants=s.variants.map((l,d)=>{const p=parseFloat(document.getElementById("restock-var-"+d)?.value)||0;return p>0&&(l.stock=(parseFloat(l.stock)||0)+p,o+=p,l.stock>0&&(l.isActive===!1||l.isActive==="false")&&(l.isActive=!0)),l}),s.variants.some(l=>(parseFloat(l.stock)||0)>0&&l.isActive!==!1&&l.isActive!=="false")&&(s.isActive===!1||s.isActive==="false")&&(s.isActive="true");else{const i=parseFloat(document.getElementById("restock-main")?.value)||0;i>0&&(s.stock=(parseFloat(s.stock)||0)+i,o+=i,s.stock>0&&(s.isActive===!1||s.isActive==="false")&&(s.isActive="true"))}if(o<=0)return J=!1,g("Masukkan jumlah restock terlebih dahulu!");O("Menyimpan Restock...");try{const i=typeof k<"u"&&k?k:window.db,l=typeof le=="function"?le:window.saveApp||(async()=>{});if(!i)throw new Error("Database Firebase belum terhubung");const d=i.collection("freshmart").doc("cms_data").collection("products").doc(e.toString());let p=0;await i.runTransaction(async f=>{const b=await f.get(d);if(!b.exists)throw new Error("Produk tidak ditemukan di server");const u=JSON.parse(JSON.stringify(b.data()));if(r)a.variants.forEach((y,h)=>{const T=parseFloat(document.getElementById("restock-var-"+h)?.value)||0;if(T<=0)return;const E=(u.variants||[]).findIndex(M=>M.name===y.name);E>-1&&(u.variants[E].stock=(parseFloat(u.variants[E].stock)||0)+T,u.variants[E].stock>0&&(u.variants[E].isActive===!1||u.variants[E].isActive==="false")&&(u.variants[E].isActive=!0))}),u.variants.some(y=>(parseFloat(y.stock)||0)>0&&y.isActive!==!1&&y.isActive!=="false")&&(u.isActive===!1||u.isActive==="false")&&(u.isActive="true"),p=u.variants.reduce((y,h)=>y+(parseFloat(h.stock)||0),0);else{const w=parseFloat(document.getElementById("restock-main")?.value)||0;u.stock=(parseFloat(u.stock)||0)+w,u.stock>0&&(u.isActive===!1||u.isActive==="false")&&(u.isActive="true"),p=u.stock}f.set(d,u),Object.assign(s,u)}),n.products[t]=s,await l([],{updateType:"stock_change",updatedProductIds:[e.toString()]}),closeRestockModal(),rAdmItms("products"),U("stat-products",n.products.filter(f=>f.isActive!=="false"&&f.isActive!==!1).length),g(`✅ Restock +${o} berhasil! Total stok: ${p}`)}catch(i){g("Gagal restock: "+(i.message||""))}finally{J=!1,D()}};window.closeAdminModal=(e=!1)=>{requestCloseModal("admin",e,()=>{m("admin-modal").classList.add("opacity-0"),m("admin-modal-box").classList.add("scale-95"),setTimeout(()=>$("admin-modal"),300)})};let kt=[];window.openQuickPriceModal=e=>{const t=n.products.find(o=>o.id===e);if(!t)return;const a=t.variants&&t.variants.length>0;kt=!a&&t.wholesale?JSON.parse(JSON.stringify(t.wholesale)):[];let r="";a?r=t.variants.map((o,i)=>`
            <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700 space-y-3">
                <div class="flex items-center gap-2.5 min-w-0">
                    ${o.colorCode?`<span class="w-4 h-4 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${c(o.colorCode)}"></span>`:""}
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${c(o.name)}</p>
                </div>
                <div class="grid grid-cols-4 gap-2.5">
                    <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP</label><input type="number" id="qp-var-hpp-${i}" value="${o.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                    <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Jual</label><input type="number" id="qp-var-price-${i}" value="${o.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                    <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Coret</label><input type="number" id="qp-var-normal-${i}" value="${o.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                    <div><label class="block text-[9px] font-bold text-violet-500 mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-var-poin-${i}" value="${o.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                </div>
            </div>`).join(""):r=`
            <div class="grid grid-cols-4 gap-2.5">
                <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP / Modal</label><input type="number" id="qp-hpp" value="${t.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Harga Jual</label><input type="number" id="qp-price" value="${t.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Harga Coret</label><input type="number" id="qp-normal" value="${t.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                <div><label class="block text-[9px] font-bold text-violet-500 mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-poin" value="${t.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
            </div>
            <div class="pt-2">
                <div class="flex justify-between items-center mb-2.5">
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Harga Grosir</label>
                    <button type="button" onclick="qpAddWhol()" class="text-[10px] font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] flex items-center gap-1"><i class="fa-solid fa-plus"></i> Tambah</button>
                </div>
                <div id="qp-whol-container" class="space-y-2"></div>
            </div>`;let s=document.getElementById("quickprice-modal");s||(s=document.createElement("div"),s.id="quickprice-modal",s.className="fixed inset-0 z-[110] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=o=>{o.target===s&&closeQuickPriceModal()},document.body.appendChild(s)),s.innerHTML=`
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
        </div>`,a||rQpWhol(),s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),pushModalHistory("quickprice")};window.rQpWhol=()=>{P("qp-whol-container",kt.length?kt.map((e,t)=>`
        <div class="flex items-center gap-2">
            <input type="number" min="1" placeholder="Min. Qty" value="${e.minQty||""}" onchange="qpWhol[${t}].minQty=parseFloat(this.value)||0" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1"></i>
            <input type="number" min="0" placeholder="Harga/Unit" value="${e.price||""}" onchange="qpWhol[${t}].price=parseFloat(this.value)||0" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1"></i>
            <button type="button" onclick="qpWhol.splice(${t},1); rQpWhol();" class="w-9 h-9 shrink-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all"><i class="fa-solid fa-trash text-xs"></i></button>
        </div>`).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-2">Belum ada tingkat harga grosir.</p>')};window.qpAddWhol=()=>{kt.push({minQty:0,price:0}),rQpWhol()};window.closeQuickPriceModal=(e=!1)=>{requestCloseModal("quickprice",e,()=>{const t=document.getElementById("quickprice-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250))})};window.processQuickPrice=async e=>{if(J)return;J=!0;const t=n.products.findIndex(s=>s.id===e);if(t<0){J=!1;return}const a=n.products[t],r=a.variants&&a.variants.length>0;O("Menyimpan Harga...");try{const s=typeof k<"u"&&k?k:window.db,o=typeof le=="function"?le:window.saveApp||(async()=>{});if(!s)throw new Error("Database Firebase belum terhubung");const i=s.collection("freshmart").doc("cms_data").collection("products").doc(e.toString());let l=null;await s.runTransaction(async d=>{const p=await d.get(i);if(!p.exists)throw new Error("Produk tidak ditemukan di server");const f=JSON.parse(JSON.stringify(p.data()));r?a.variants.forEach((b,u)=>{const w=(f.variants||[]).findIndex(M=>M.name===b.name);if(w<0)return;const y=parseFloat(document.getElementById("qp-var-hpp-"+u)?.value)||0,h=parseFloat(document.getElementById("qp-var-price-"+u)?.value)||0,T=parseFloat(document.getElementById("qp-var-normal-"+u)?.value)||0,E=parseFloat(document.getElementById("qp-var-poin-"+u)?.value)||0;f.variants[w].hpp=y,f.variants[w].price=h,f.variants[w].priceNormal=T,f.variants[w].poin=E}):(f.hpp=parseFloat(document.getElementById("qp-hpp")?.value)||0,f.price=parseFloat(document.getElementById("qp-price")?.value)||0,f.priceNormal=parseFloat(document.getElementById("qp-normal")?.value)||0,f.poin=parseFloat(document.getElementById("qp-poin")?.value)||0,f.wholesale=kt.filter(b=>parseFloat(b.minQty)>.01&&b.price>0)),d.set(i,f),l=f}),n.products[t]=l,await o([],{updateType:"stock_change",updatedProductIds:[e.toString()]}),closeQuickPriceModal(),rAdmItms("products"),g("✅ Harga berhasil diperbarui!")}catch(s){g("Gagal simpan harga: "+(s.message||""))}finally{J=!1,D()}};let de;window.openCameraScanner=async(e="search-input")=>{const t=m("scanner-modal");t&&t.classList.contains("hidden")&&pushModalHistory("scanner"),L("scanner-modal"),setTimeout(()=>{m("scanner-modal").classList.remove("opacity-0")},10);try{await Ds("https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js",()=>typeof Html5Qrcode<"u")}catch{g("Gagal memuat modul kamera. Cek koneksi internet Anda."),closeCameraScanner();return}de||(de=new Html5Qrcode("reader"));const a={fps:10,qrbox:{width:250,height:250}};setTimeout(()=>{de&&de.start({facingMode:"environment"},a,r=>{let s=m(e);s&&(s.value=r,e==="search-input"?handleSearch(r):(s.dispatchEvent(new Event("input",{bubbles:!0})),s.dispatchEvent(new Event("change",{bubbles:!0})))),g("Barcode discan!"),closeCameraScanner()},r=>{}).catch(r=>{g("Akses kamera ditolak/gagal!"),closeCameraScanner()})},100)};window.closeCameraScanner=(e=!1)=>{requestCloseModal("scanner",e,()=>{if(m("scanner-modal").classList.add("opacity-0"),de)try{de.getState()===2||de.getState()===3?de.stop().then(()=>{de.clear(),de=null}).catch(t=>{de.clear(),de=null}):(de.clear(),de=null)}catch{de=null}setTimeout(()=>$("scanner-modal"),300)})};window.toggleProductStatus=async(e,t)=>{if(J)return;J=!0;const a=n.products.findIndex(r=>r.id===e);if(a>-1){n.products[a].isActive=t?"true":"false",O(t?"Mengaktifkan...":"Menonaktifkan...");try{const r=typeof k<"u"&&k?k:window.db,s=typeof le=="function"?le:window.saveApp||(async()=>{});if(!r)throw new Error("Database Firebase belum terhubung");await r.collection("freshmart").doc("cms_data").collection("products").doc(e.toString()).update({isActive:t?"true":"false"}),await s([],{updateType:"stock_change",updatedProductIds:[e.toString()]}),U("stat-products",n.products.filter(o=>o.isActive!=="false"&&o.isActive!==!1).length),g(t?"Produk Aktif!":"Stok Dikosongkan!")}catch(r){g("Gagal update status: "+(r.message||""))}finally{J=!1,D()}}};const vi=(e,t=!1)=>{const a=document.querySelector("#view-admin .scroll-content");if(a&&(a.scrollTop=0),!t){const s=history.state;s&&s.view==="view-admin"&&s.tab?history.replaceState({view:"view-admin",tab:e},"",window.location.href):history.pushState({view:"view-admin",tab:e},"",window.location.href)}if($("admin-dashboard-view"),L("admin-content-view"),L("btn-admin-back"),$("admin-logo-box"),U("admin-header-title",{orders:"Pesanan",settings:"Toko",products:"Produk",categories:"Kategori",brands:"Merek",banks:"Rekening",banners:"Banner",vouchers:"Voucher",customers:"Database Pelanggan",rewards:"Program Hadiah",reviews:"Ulasan Pelanggan",faqs:"Tanya Jawab / Q&A",tax:"Pajak & Keuangan",piutang:"Piutang Tempo",colors:"Database Warna"}[e]||"CMS"),e!=="orders"&&qe&&(qe(),ht(null)),e!=="customers"&&Re&&(Re(),gt(null)),e!=="reviews"&&Fe&&(Fe(),xt(null)),e==="settings")typeof window.rAdmSet=="function"&&window.rAdmSet();else if(e==="orders")typeof window.rAdmOrd=="function"&&window.rAdmOrd();else if(e==="tax")typeof window.rTaxPanel=="function"&&window.rTaxPanel();else if(e==="piutang")typeof window.rAdmPiutang=="function"&&window.rAdmPiutang();else if(e==="customers"){P("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),Re&&(Re(),gt(null));const s=k.collection("freshmart").doc("cms_data").collection("customers").onSnapshot(o=>{n.customers=o.docs.map(i=>i.data()),typeof window.rAdmL=="function"&&window.rAdmL("customers")},()=>{g("Gagal memuat data pelanggan!"),typeof window.rAdmL=="function"&&window.rAdmL("customers")});gt(s)}else if(e==="reviews"){P("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),Fe&&(Fe(),xt(null));const s=k.collection("freshmart").doc("cms_data").collection("reviews").onSnapshot(o=>{const i=o.docs.map(l=>l.data());i.sort((l,d)=>{const p=l.createdAt&&l.createdAt.toMillis?l.createdAt.toMillis():0;return(d.createdAt&&d.createdAt.toMillis?d.createdAt.toMillis():0)-p}),Pr(i),typeof window.rAdmReviews=="function"&&window.rAdmReviews()},()=>{g("Gagal memuat ulasan!")});xt(s)}else e==="faqs"?typeof window.rAdmFAQ=="function"&&window.rAdmFAQ():typeof window.rAdmL=="function"&&window.rAdmL(e)};window.openAdminTab=vi;let Ha=null;const La=()=>{if(!Ha)try{Ha=k.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(e=>{e&&e.docs&&(n.faqs=e.docs.map(t=>({id:t.id,...t.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&dt(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},e=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",e.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&dt(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let Mt="Semua";const dt=()=>{La();const e=document.getElementById("storefront-faq-container"),t=document.getElementById("faq-category-pills");if(!e)return;const a=(n.faqs||[]).filter(i=>i.status==="published"),r=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];t&&(t.innerHTML=r.map(i=>`
            <button onclick="selectFAQCategory('${i}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${Mt===i?"primary-bg text-white shadow-md":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                ${i}
            </button>
        `).join(""));const s=(document.getElementById("faq-search-input")?.value||"").toLowerCase().trim(),o=a.filter(i=>{const l=Mt==="Semua"||i.category===Mt,d=!s||(i.question||"").toLowerCase().includes(s)||(i.answer||"").toLowerCase().includes(s);return l&&d});if(!o.length){e.innerHTML=`
            <div class="text-center py-12 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <div class="w-16 h-16 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-500 mx-auto flex items-center justify-center mb-3">
                    <i class="fa-solid fa-circle-question text-3xl"></i>
                </div>
                <h3 class="font-bold text-slate-800 dark:text-white text-base">Belum Ada Q&A Ditemukan</h3>
                <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Punya pertanyaan lain? Silakan gunakan tombol <b>Ajukan Pertanyaan</b> untuk bertanya ke admin.</p>
                <button onclick="openAskQuestionModal()" class="mt-4 primary-bg text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all">Ajukan Pertanyaan Sekarang</button>
            </div>
        `;return}e.innerHTML=o.map(i=>`
        <div class="bg-white dark:bg-slate-800/95 rounded-[1.5rem] border border-slate-200/80 dark:border-slate-700/80 shadow-soft transition-all duration-200 hover:shadow-md overflow-hidden">
            <button onclick="toggleFAQAccordion('${i.id}')" class="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3.5 hover:bg-slate-50/80 dark:hover:bg-slate-800/60 transition-colors">
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-9 h-9 rounded-xl primary-bg text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><i class="fa-solid fa-question text-xs font-bold"></i></div>
                    <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-2 mb-1.5">
                            <span class="text-[9px] font-bold uppercase tracking-wider primary-bg-soft primary-text primary-border px-2.5 py-0.5 rounded-lg border">${c(i.category||"Umum")}</span>
                            ${i.authorName?`<span class="text-[10px] font-medium text-slate-400">Oleh: ${c(i.authorName)}</span>`:""}
                        </div>
                        <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${c(i.question)}</h4>
                    </div>
                </div>
                <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700/80 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-300" id="faq-icon-${i.id}">
                    <i class="fa-solid fa-chevron-down text-xs"></i>
                </div>
            </button>
            <div class="hidden border-t border-slate-100 dark:border-slate-700/70 p-3.5 sm:p-5 primary-bg-soft dark:bg-slate-900/60 text-xs sm:text-sm font-medium leading-relaxed" id="faq-body-${i.id}">
                <div class="flex items-start gap-3 bg-white/90 dark:bg-slate-800/90 p-3.5 sm:p-4 rounded-2xl border primary-border shadow-sm">
                    <div class="w-8 h-8 rounded-xl primary-bg text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm shadow-[rgba(var(--color-primary-rgb),0.25)]">
                        <i class="fa-solid fa-reply text-xs"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center justify-between gap-2 mb-1">
                            <span class="text-[10px] font-extrabold uppercase tracking-wider primary-text flex items-center gap-1">
                                <i class="fa-solid fa-user-shield text-[10px]"></i> Jawaban Tim Admin Toko
                            </span>
                        </div>
                        <div class="text-slate-800 dark:text-slate-100 font-semibold leading-relaxed whitespace-pre-wrap break-words">${c(i.answer||"Belum ada jawaban.")}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join("")},yi=e=>{Mt=e,dt()},ki=()=>{dt()},$i=e=>{const t=document.getElementById(`faq-body-${e}`),a=document.getElementById(`faq-icon-${e}`);if(!t||!a)return;t.classList.contains("hidden")?(t.classList.remove("hidden"),a.classList.add("rotate-180")):(t.classList.add("hidden"),a.classList.remove("rotate-180"))},Si=()=>{const e=m("modal-ask-question");e&&(e.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),L("modal-ask-question"),setTimeout(()=>{m("modal-ask-question")&&m("modal-ask-question").classList.remove("opacity-0"),m("modal-ask-question-box")&&m("modal-ask-question-box").classList.remove("translate-y-full")},10))},Xs=(e=!1)=>{const t=()=>{m("modal-ask-question")&&m("modal-ask-question").classList.add("opacity-0"),m("modal-ask-question-box")&&m("modal-ask-question-box").classList.add("translate-y-full"),setTimeout(()=>$("modal-ask-question"),300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",e,t):t()},Pi=async()=>{const e=(C("ask-author-name")||"").trim()||"Pelanggan",t=C("ask-category")||"Pemesanan",a=(C("ask-question-text")||"").trim();if(!a)return g("Tuliskan pertanyaan Anda terlebih dahulu!");O("Mengirim pertanyaan...");const r="faq-"+Date.now().toString(36),s={id:r,question:a,answer:"",category:t,authorName:e,status:"pending_answer",createdAt:new Date().toISOString()};let o=!1;try{await k.collection("freshmart").doc("cms_data").collection("faqs").doc(r).set(s),o=!0}catch(i){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",i)}if(!o)try{const i=[s,...(n.faqs||[]).filter(l=>l.id!==r)];await k.collection("freshmart").doc("cms_data").set({faqs:i},{merge:!0}),n.faqs=i,o=!0}catch(i){console.warn("Fallback cms_data.faqs juga gagal:",i)}D(),o?(Xs(),se("ask-question-text",""),g("Pertanyaan terkirim! Admin akan menjawabnya segera."),dt()):g("Gagal mengirim pertanyaan. Coba lagi!")};let ot="all";const Wt=()=>{La();const e=n.faqs||[],t=e.filter(s=>ot==="pending"?s.status==="pending_answer":ot==="published"?s.status==="published":!0),a=e.filter(s=>s.status==="pending_answer").length;let r=`
        <div class="space-y-5 pb-12">
            <!-- Header Card -->
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3.5 bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div>
                    <h2 class="text-base sm:text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-circle-question primary-text text-lg"></i> Kelola Tanya Jawab (Q&A / FAQ)
                    </h2>
                    <p class="text-xs font-medium text-slate-500 mt-0.5">Sunting FAQ toko & jawab pertanyaan yang diajukan pelanggan.</p>
                </div>
                <button onclick="openFAQModal('')" class="w-full sm:w-auto primary-bg text-white shadow-glow px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all">
                    <i class="fa-solid fa-plus"></i> Tambah Q&A Baru
                </button>
            </div>

            <!-- Filter Tabs -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1.5 hide-scrollbar border-b border-slate-200 dark:border-slate-700">
                <button onclick="setAdminFAQFilter('all')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${ot==="all"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Semua (${e.length})
                </button>
                <button onclick="setAdminFAQFilter('pending')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${ot==="pending"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    <span>Belum Dijawab</span>
                    ${a>0?`<span class="bg-rose-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">${a}</span>`:""}
                </button>
                <button onclick="setAdminFAQFilter('published')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${ot==="published"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Terpublikasi
                </button>
            </div>

            <!-- List Q&A Admin -->
            <div class="space-y-4">
                ${t.length?t.map(s=>`
                    <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl border ${s.status==="pending_answer"?"border-amber-300/80 bg-amber-50/20 dark:bg-amber-900/10":"border-slate-200/80 dark:border-slate-700/80"} shadow-sm space-y-3">
                        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-2.5">
                            <div class="flex flex-wrap items-center gap-1.5 min-w-0">
                                <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-lg ${s.status==="published"?"bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400":s.status==="pending_answer"?"bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400":"bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400"}">
                                    ${s.status==="published"?"Terpublikasi":s.status==="pending_answer"?"Menunggu Jawaban":"Disembunyikan"}
                                </span>
                                <span class="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700/50">${c(s.category||"Umum")}</span>
                                ${s.authorName?`<span class="text-[10px] text-slate-400 italic">Oleh: ${c(s.authorName)}</span>`:""}
                            </div>
                            <div class="flex items-center gap-1.5 shrink-0 ml-auto">
                                <button onclick="openFAQModal('${s.id}')" class="px-2.5 py-1.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-bold text-xs hover:bg-blue-100 transition-colors flex items-center gap-1 active:scale-95">
                                    <i class="fa-solid fa-pen-to-square"></i> Edit / Jawab
                                </button>
                                <button onclick="deleteAdminFAQ('${s.id}')" class="px-2.5 py-1.5 rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 font-bold text-xs hover:bg-rose-100 transition-colors active:scale-95" title="Hapus Q&A">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${c(s.question)}</h3>
                        </div>

                        <div class="primary-bg-soft dark:bg-slate-900/60 p-3.5 sm:p-4 rounded-xl border primary-border text-xs font-medium text-slate-800 dark:text-slate-200">
                            <span class="font-extrabold primary-text uppercase text-[10px] tracking-wider flex items-center gap-1.5 mb-1">
                                <i class="fa-solid fa-user-shield text-[10px]"></i> Jawaban Admin Toko:
                            </span>
                            <div class="whitespace-pre-wrap leading-relaxed font-semibold break-words">${s.answer?c(s.answer):'<span class="text-rose-500 italic font-semibold">Belum dijawab. Klik "Edit / Jawab" untuk memberikan jawaban.</span>'}</div>
                        </div>
                    </div>
                `).join(""):`
                    <div class="text-center py-10 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
                        <i class="fa-solid fa-inbox text-3xl text-slate-300 mb-2"></i>
                        <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Tidak ada Q&A ditemukan pada kategori filter ini.</p>
                    </div>
                `}
            </div>
        </div>
    `;setH("admin-content",r)},Ti=e=>{ot=e,Wt()},Ai=e=>{const t=(n.faqs||[]).find(r=>r.id===e)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};se("admin-faq-id",t.id),se("admin-faq-category",t.category||"Pemesanan"),se("admin-faq-author",t.authorName||"Admin"),se("admin-faq-question",t.question||""),se("admin-faq-answer",t.answer||""),se("admin-faq-status",t.status||"published"),U("admin-faq-modal-title",e?"Edit Q&A":"Tambah Q&A Baru");const a=m("modal-admin-faq");a&&(a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),L("modal-admin-faq"),setTimeout(()=>{m("modal-admin-faq")&&m("modal-admin-faq").classList.remove("opacity-0"),m("modal-admin-faq-box")&&m("modal-admin-faq-box").classList.remove("translate-y-full")},10))},Zs=(e=!1)=>{const t=()=>{m("modal-admin-faq")&&m("modal-admin-faq").classList.add("opacity-0"),m("modal-admin-faq-box")&&m("modal-admin-faq-box").classList.add("translate-y-full"),setTimeout(()=>$("modal-admin-faq"),300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",e,t):t()},Mi=async()=>{const e=C("admin-faq-id")||"faq-"+Date.now().toString(36),t=C("admin-faq-category"),a=(C("admin-faq-author")||"").trim()||"Admin",r=(C("admin-faq-question")||"").trim(),s=(C("admin-faq-answer")||"").trim();let o=C("admin-faq-status");if(!r)return g("Pertanyaan tidak boleh kosong!");s&&o==="pending_answer"&&(o="published"),O("Menyimpan Q&A...");const i={id:e,question:r,answer:s,category:t,authorName:a,status:o,updatedAt:new Date().toISOString()};let l=[...n.faqs||[]];const d=l.findIndex(p=>p.id===e);d>-1?l[d]={...l[d],...i}:l.unshift(i),n.faqs=l;try{await k.collection("freshmart").doc("cms_data").collection("faqs").doc(e).set(i,{merge:!0})}catch(p){console.warn("Gagal set ke sub-koleksi faqs:",p)}try{await k.collection("freshmart").doc("cms_data").set({faqs:l},{merge:!0})}catch(p){console.warn("Gagal update cms_data.faqs:",p)}D(),Zs(),g("Q&A Berhasil Disimpan!"),Wt()},Di=e=>{Le("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{O("Menghapus Q&A...");let t=(n.faqs||[]).filter(a=>a.id!==e);n.faqs=t;try{await k.collection("freshmart").doc("cms_data").collection("faqs").doc(e).delete()}catch(a){console.warn("Gagal delete dari sub-koleksi faqs:",a)}try{await k.collection("freshmart").doc("cms_data").set({faqs:t},{merge:!0})}catch(a){console.warn("Gagal update cms_data.faqs:",a)}D(),g("Q&A Berhasil Dihapus!"),Wt()})};window.attachFAQRealtime=La;window.renderStorefrontFAQ=dt;window.selectFAQCategory=yi;window.filterStorefrontFAQ=ki;window.toggleFAQAccordion=$i;window.openAskQuestionModal=Si;window.closeAskQuestionModal=Xs;window.submitCustomerQuestion=Pi;window.rAdmFAQ=Wt;window.setAdminFAQFilter=Ti;window.openFAQModal=Ai;window.closeAdminFAQModal=Zs;window.saveAdminFAQ=Mi;window.deleteAdminFAQ=Di;const Qt="B7qgwFQqtYLpBqdaK69HgtCfR7s5t67p",Ci=20*1024*1024,Li=["video/mp4","video/webm","video/quicktime","video/x-msvideo","video/3gpp"],er=["image/jpeg","image/png","image/webp","image/gif"],Ii=async(e,t,a=null)=>{const r=e.files[0];if(!r)return;if(!er.includes(r.type))return e.value="",g("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");if(r.size>3*1024*1024)return e.value="",g("Maksimal gambar 3MB!");const s=window.GAS_UPLOAD_URL||qt;if(s.includes("ISI_DENGAN"))return e.value="",g("URL Script Google belum diisi!");O("Upload Gambar...");const o=new FileReader;o.readAsDataURL(r),o.onload=async()=>{try{const i=o.result.split(",")[1],l=r.name.replace(/[^a-zA-Z0-9.]/g,"_"),d={name:"POS_"+Date.now()+"_"+l,mimeType:r.type,data:i,token:Qt},f=await(await fetch(s,{method:"POST",body:JSON.stringify(d),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let b;try{b=JSON.parse(f)}catch{return g("Error Server!")}if(b.status==="success"){const u=W(b.url),w=m(t);w&&(w.value=u,w.dispatchEvent(new Event("input",{bubbles:!0})),w.dispatchEvent(new Event("change",{bubbles:!0})),a!==null&&typeof window.uVar=="function"&&window.uVar(a,"img",u),g("Gambar diupload!"))}else g("Gagal: "+(b.message||"Error"))}catch{g("Koneksi terputus saat upload.")}finally{D(),e.value=""}},o.onerror=()=>{g("Gagal membaca file!"),D(),e.value=""}},ji=async(e,t)=>{const a=e.files[0];if(!a)return;if(!Li.includes(a.type))return e.value="",g("Hanya file MP4, WEBM, MOV, atau AVI yang diizinkan!");if(a.size>Ci)return e.value="",g("Video terlalu besar! Maksimal 20MB.");const r=window.GAS_UPLOAD_URL||qt;if(r.includes("ISI_DENGAN"))return e.value="",g("URL Script Google belum diisi di Pengaturan!");O("Upload Video... (harap tunggu)");const s=new FileReader;s.readAsDataURL(a),s.onload=async()=>{try{const o=s.result.split(",")[1],i=a.name.replace(/[^a-zA-Z0-9.]/g,"_"),l={name:"VID_"+Date.now()+"_"+i,mimeType:a.type,data:o,token:Qt},p=await(await fetch(r,{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let f;try{f=JSON.parse(p)}catch{return g("Error Server GAS!")}if(f.status==="success"){const b="https://drive.google.com/file/d/"+f.fileId+"/preview",u=m(t);u&&(u.value=b,u.dispatchEvent(new Event("input",{bubbles:!0})),u.dispatchEvent(new Event("change",{bubbles:!0})),g("Video berhasil diupload ke Drive!"))}else g("Gagal upload: "+(f.message||"Error"))}catch{g("Koneksi terputus saat upload video.")}finally{D(),e.value=""}},s.onerror=()=>{g("Gagal membaca file video!"),D(),e.value=""}},Ei=async(e,t)=>{const a=e.files[0];if(!a)return;if(!er.includes(a.type))return e.value="",g("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");if(a.size>3*1024*1024)return e.value="",g("Maksimal gambar 3MB!");const r=window.GAS_UPLOAD_URL||qt;if(r.includes("ISI_DENGAN"))return e.value="",g("URL Script Google belum diisi!");O("Menyisipkan Gambar...");const s=new FileReader;s.readAsDataURL(a),s.onload=async()=>{try{const o=s.result.split(",")[1],i=a.name.replace(/[^a-zA-Z0-9.]/g,"_"),l={name:"RTE_"+Date.now()+"_"+i,mimeType:a.type,data:o,token:Qt},p=await(await fetch(r,{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let f;try{f=JSON.parse(p)}catch{return g("Error Server!")}if(f.status==="success"){const b=W(f.url),u=m(t);u&&(u.focus(),document.execCommand("insertHTML",!1,`<br><img loading="lazy" src="${b}" style="max-width:100%; border-radius:12px; margin: 10px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" ><br>`)),g("Gambar berhasil disisipkan!")}else g("Gagal upload gambar.")}catch{g("Gagal koneksi.")}finally{D(),e.value=""}},s.onerror=()=>{g("Gagal membaca file!"),D(),e.value=""}};window.GAS_SECRET_TOKEN=Qt;window.handleImageUpload=Ii;window.handleVideoUpload=ji;window.handleRTEditorImage=Ei;let Va={},Xe="view-catalog";const Ia=e=>{history.pushState({modal:e},"",window.location.href),ke.push(e)},ja=(e,t,a)=>{if(!t){const r=ke.lastIndexOf(e);if(r>-1){ke.splice(r,1);try{history.back()}catch{}}}a()},wt=(e,t=!1)=>{t||history.pushState({view:e},"",window.location.href);const a=m(Xe);if(a){const s=a.querySelector(".scroll-content");s&&(Va[Xe]=s.scrollTop)}Xe==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime(),document.querySelectorAll(".view-section").forEach(s=>{s.classList.add("hidden"),s.classList.remove("flex")});const r=m(e);if(r){r.classList.remove("hidden"),r.classList.add("flex"),e==="view-cart"&&typeof window.renderCart=="function"?window.renderCart():e==="view-checkout"&&typeof window.rChck=="function"?window.rChck():e==="view-payment"&&typeof window.rPay=="function"?window.rPay():e==="view-wishlist"&&typeof window.renderWish=="function"?window.renderWish():e==="view-orders"&&typeof window.renderMyOrders=="function"?window.renderMyOrders():e==="view-faq"&&typeof window.renderStorefrontFAQ=="function"&&window.renderStorefrontFAQ();const s=r.querySelector(".scroll-content");if(s)if(t){const o=Va[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{s.scrollTop=o}))}else s.scrollTo(0,0)}Xe=e},tr=()=>{window.addEventListener("popstate",e=>{if(ke.length){const t=ke.pop();t==="product"&&typeof window.closeProductModal=="function"?window.closeProductModal(!0):t==="category"&&typeof window.closeCategoryModal=="function"?window.closeCategoryModal(!0):t==="brand"&&typeof window.closeBrandModal=="function"?window.closeBrandModal(!0):t==="admin"&&typeof window.closeAdminModal=="function"?window.closeAdminModal(!0):t==="adminOrder"&&typeof window.closeOrderDetailModal=="function"?window.closeOrderDetailModal(!0):t==="receipt"&&typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):t==="docPreview"&&typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):t==="scanner"&&typeof window.closeCameraScanner=="function"?window.closeCameraScanner(!0):t==="confirm"&&typeof window.closeConfirm=="function"?window.closeConfirm(!0):t==="customerOrder"&&typeof window.closeCustomerOrderDetailModal=="function"?window.closeCustomerOrderDetailModal(!0):t==="restock"&&typeof window.closeRestockModal=="function"?window.closeRestockModal(!0):t==="quickprice"&&typeof window.closeQuickPriceModal=="function"?window.closeQuickPriceModal(!0):t==="member"&&typeof window.closeMemberModal=="function"?window.closeMemberModal(!0):t==="prompt"&&typeof window.closePrompt=="function"?window.closePrompt(!0):t==="review"&&typeof window.closeReviewModal=="function"?window.closeReviewModal(!0):t==="quickmenu"&&typeof window.closeQuickMenuModal=="function"?window.closeQuickMenuModal(!0):t==="variantPreview"&&typeof window.closeVariantPreviewModal=="function"?window.closeVariantPreviewModal(!0):t==="terms"&&typeof window.closeTermsModal=="function"?window.closeTermsModal(!0):t==="privacy"&&typeof window.closePrivacyModal=="function"?window.closePrivacyModal(!0):t==="askQuestion"&&typeof window.closeAskQuestionModal=="function"?window.closeAskQuestionModal(!0):t==="adminFAQ"&&typeof window.closeAdminFAQModal=="function"&&window.closeAdminFAQModal(!0)}else{const t=e.state||{},a=t.view||null;if(window.isAdm||window.__localIsAdm)a==="view-admin"?(wt("view-admin",!0),t.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(t.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu()):(history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"&&window.showConfirm("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0));else if(a){let s=a;a==="view-admin"&&(s="view-admin-login"),wt(s,!0)}else wt("view-catalog",!0)}})};window.pushModalHistory=Ia;window.requestCloseModal=ja;window.changeView=wt;window.setupHistoryRouter=tr;try{Object.defineProperty(window,"curViewName",{get:()=>Xe,set:e=>{Xe=e},configurable:!0})}catch{}window.setCat=e=>{pa(e),Ie(1),typeof window.rCat=="function"&&window.rCat()};window.setBrand=e=>{ma(e),Ie(1),typeof window.rCat=="function"&&window.rCat()};const _i=()=>{let e="",t=De==="Semua Produk";e+=`
    <button onclick="setCat('Semua Produk'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-colors">
            <i class="fa-solid fa-layer-group text-base sm:text-lg"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA</span>
        <i class="fa-solid fa-circle-check text-base ${t?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
    </button>`,n.categories.forEach(o=>{let i=De===o.name,l=o.img?`<img loading="lazy" src="${c(o.img)}" alt="${c(o.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Cat'">`:'<i class="fa-solid fa-box text-base sm:text-lg"></i>';e+=`
        <button onclick="setCat('${c(o.name)}'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden border border-slate-200 dark:border-slate-600">
                ${l}
            </div>
            <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 line-clamp-1 ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${c(o.name)}</span>
            <i class="fa-solid fa-circle-check text-base ${i?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
        </button>`});const a=m("modal-category-list");a&&(a.innerHTML=`<div class="flex flex-col gap-2.5 pb-6 w-full">${e}</div>`);const r=m("category-modal"),s=m("category-modal-content");r&&s&&(r.classList.contains("hidden")&&pushModalHistory("category"),L("category-modal"),setTimeout(()=>{r.classList.remove("opacity-0"),s.classList.remove("translate-y-full","sm:translate-y-10")},10))};window.openCategoryModal=_i;window.openBrandModal=()=>{let e="",t=Se==="Semua Merek";e+=`
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-[1.25rem] border transition-all ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA MEREK</span>
    </button>`,n.brands.forEach(o=>{let i=Se===o.name,l=o.img?`<img loading="lazy" src="${c(o.img)}" alt="${c(o.name)}" class="w-full h-full object-contain p-1.5" >`:'<i class="fa-solid fa-tag text-lg sm:text-xl"></i>';e+=`
        <button onclick="setBrand('${c(o.name)}'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-[1.25rem] border transition-all ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-2.5 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600">
                ${l}
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${c(o.name)}</span>
        </button>`});const a=m("modal-brand-grid");a&&(a.innerHTML=e);const r=m("brand-modal"),s=m("brand-modal-content");r&&s&&(r.classList.contains("hidden")&&pushModalHistory("brand"),L("brand-modal"),setTimeout(()=>{r.classList.remove("opacity-0"),s.classList.remove("translate-y-full","sm:translate-y-10")},10))};window.closeCategoryModal=(e=!1)=>{const t=m("category-modal"),a=m("category-modal-content");t&&a&&requestCloseModal("category",e,()=>{t.classList.add("opacity-0"),a.classList.add("translate-y-full","sm:translate-y-10"),setTimeout(()=>$("category-modal"),300)})};window.closeBrandModal=(e=!1)=>{const t=m("brand-modal"),a=m("brand-modal-content");t&&a&&requestCloseModal("brand",e,()=>{t.classList.add("opacity-0"),a.classList.add("translate-y-full","sm:translate-y-10"),setTimeout(()=>$("brand-modal"),300)})};window.openQuickMenuModal=()=>{const e=m("quickmenu-modal"),t=m("quickmenu-modal-content");e&&t&&(e.classList.contains("hidden")&&pushModalHistory("quickmenu"),L("quickmenu-modal"),setTimeout(()=>{e.classList.remove("opacity-0"),t.classList.remove("translate-y-full","sm:translate-y-10")},10))};window.openTermsModal=()=>{const t=n.store.terms||`
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-amber-500">1. Ketentuan Umum</h4>
        <p class="leading-relaxed">Layanan website Toko Putri diperuntukkan bagi pelanggan yang ingin memesan perkakas, alat teknik, dan perlengkapan pertukangan secara online.</p>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-amber-500">2. Pemesanan &amp; Hubungi Admin</h4>
        <p class="leading-relaxed">Setiap pesanan yang dibuat melalui keranjang belanja akan diteruskan secara otomatis ke nomor WhatsApp admin untuk konfirmasi akhir dan pengiriman.</p>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-amber-500">3. Kebijakan Pembayaran</h4>
        <p class="leading-relaxed">Kami mendukung pembayaran Tunai (Cash), COD, Transfer Bank, QRIS, dan sistem Tempo (Kredit) untuk pelanggan dengan limit piutang aktif.</p>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-amber-500">4. Kebijakan Retur &amp; Barang PO</h4>
        <p class="leading-relaxed">Barang Pre-Order (PO) dikirim sesuai estimasi. Khusus produk cat bangunan yang dicampur (tinting) tidak dapat dibatalkan atau diretur.</p>
      </div>
    `;P("terms-modal-content-body",t.replace(/\n/g,"<br>"));const a=m("terms-modal"),r=m("terms-modal-content");a&&r&&(a.classList.contains("hidden")&&pushModalHistory("terms"),L("terms-modal"),setTimeout(()=>{a.classList.remove("opacity-0"),r.classList.remove("translate-y-full","sm:translate-y-10")},10))};window.closeTermsModal=(e=!1)=>{const t=m("terms-modal"),a=m("terms-modal-content");t&&a&&requestCloseModal("terms",e,()=>{t.classList.add("opacity-0"),a.classList.add("translate-y-full","sm:translate-y-10"),setTimeout(()=>$("terms-modal"),300)})};window.openPrivacyModal=()=>{const t=n.store.privacy||`
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-violet-500">1. Data Yang Kami Kumpulkan</h4>
        <p class="leading-relaxed">Kami mengumpulkan data berupa Nama, Nomor WhatsApp, dan Alamat Pengiriman Anda saat membuat pesanan untuk keperluan pengantaran barang.</p>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-violet-500">2. Kerahasiaan Data</h4>
        <p class="leading-relaxed">Toko Putri berkomitmen penuh untuk menjaga kerahasiaan data pribadi pelanggan dan tidak akan membagikannya ke pihak ketiga manapun.</p>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-violet-500">3. Keamanan Data Transaksi</h4>
        <p class="leading-relaxed">Semua file bukti pembayaran yang diunggah diproses melalui server terenkripsi yang aman untuk mencegah kebocoran data sensitif.</p>
      </div>
    `;P("privacy-modal-content-body",t.replace(/\n/g,"<br>"));const a=m("privacy-modal"),r=m("privacy-modal-content");a&&r&&(a.classList.contains("hidden")&&pushModalHistory("privacy"),L("privacy-modal"),setTimeout(()=>{a.classList.remove("opacity-0"),r.classList.remove("translate-y-full","sm:translate-y-10")},10))};window.closePrivacyModal=(e=!1)=>{const t=m("privacy-modal"),a=m("privacy-modal-content");t&&a&&requestCloseModal("privacy",e,()=>{t.classList.add("opacity-0"),a.classList.add("translate-y-full","sm:translate-y-10"),setTimeout(()=>$("privacy-modal"),300)})};window.closeQuickMenuModal=(e=!1)=>{const t=m("quickmenu-modal"),a=m("quickmenu-modal-content");t&&a&&requestCloseModal("quickmenu",e,()=>{t.classList.add("opacity-0"),a.classList.add("translate-y-full","sm:translate-y-10"),setTimeout(()=>$("quickmenu-modal"),300)})};window.openShoppingGuideModal=()=>{const e=m("shopping-guide-modal"),t=m("shopping-guide-modal-content");e&&t&&(e.classList.contains("hidden")&&pushModalHistory("guide"),L("shopping-guide-modal"),setTimeout(()=>{e.classList.remove("opacity-0"),t.classList.remove("translate-y-full","sm:translate-y-10")},10))};window.closeShoppingGuideModal=(e=!1)=>{const t=m("shopping-guide-modal"),a=m("shopping-guide-modal-content");t&&a&&requestCloseModal("guide",e,()=>{t.classList.add("opacity-0"),a.classList.add("translate-y-full","sm:translate-y-10"),setTimeout(()=>$("shopping-guide-modal"),300)})};window.navigateFromQuickMenu=e=>{closeQuickMenuModal(!0);const t=ke.indexOf("quickmenu");t>-1&&ke.splice(t,1),typeof e=="function"?(history.replaceState({view:Xe},"",window.location.href),e()):(history.replaceState({view:e},"",window.location.href),wt(e,!0))};const Ri=e=>{const t=n.products?.find(s=>s.id===e.id);let a=e.price||0;if(e.variantName&&t&&t.variants){const s=t.variants.find(o=>o.name===e.variantName);s&&s.price!=null&&(a=s.price)}if(e.variantName||!t||!t.wholesale||!t.wholesale.length)return a;const r=R.filter(s=>s.id===e.id).reduce((s,o)=>s+(parseFloat(o.qty)||0),0);for(let s of t.wholesale.slice().sort((o,i)=>i.minQty-o.minQty))if(r>=parseFloat(s.minQty))return s.price;return a},Fi=e=>{const t=n.products?.find(a=>a.id===e.id);if(!t)return 0;if(e.variantName&&t.variants){const a=t.variants.find(r=>r.name===e.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(t.hpp)||0},Ni=e=>{if(!e)return 0;const t=n.products?.find(a=>a.id===e.id);if(!t)return parseFloat(e.poin)||0;if(e.variantName&&t.variants){const a=t.variants.find(r=>r.name===e.variantName);if(a&&a.poin!==void 0&&a.poin!==null&&a.poin!==""){const r=parseFloat(a.poin);if(!isNaN(r)&&r>0)return r}}return parseFloat(t.poin)||0},Bi=(e,t,a,r)=>{if(!e||!t||!a||!r)return 0;const s=6371,o=(a-e)*Math.PI/180,i=(r-t)*Math.PI/180,l=Math.sin(o/2)*Math.sin(o/2)+Math.cos(e*Math.PI/180)*Math.cos(a*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2),d=2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l));return s*d},Oi=e=>{const a=e.value.trim().split(",");if(a.length>=2){const r=parseFloat(a[0].trim()),s=parseFloat(a[1].trim());if(!isNaN(r)&&!isNaN(s)){se("set-lat",r),se("set-lng",s),g("Koordinat tersalin!");return}}g("Format salah! Coba: Lat, Lng")};window.getEffP=Ri;window.getEffHpp=Fi;window.getEffPoin=Ni;window.getDist=Bi;window.autoParseCoords=Oi;let la=null,Dt=null;const qi=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}It("Kode "+e+" berhasil disalin!")}catch{It("Gagal menyalin. Kode: "+e)}},It=(e,t,a,r)=>{const s=m("toast");if(!s)return;if(!t){const h=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(h)?t="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(h)?t="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(h)?t="warning":/upload|proses|memuat|loading|sedang/.test(h)?t="loading":t="info"}const o=getComputedStyle(document.documentElement),i=o.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",l=o.getPropertyValue("--color-primary").trim()||"#10b981";o.getPropertyValue("--color-primary-dark").trim();const d={success:{icon:"fa-circle-check",label:"Berhasil",accent:l,iconBg:`rgba(${i},0.12)`,border:`rgba(${i},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:l,iconBg:`rgba(${i},0.12)`,border:`rgba(${i},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:l,iconBg:`rgba(${i},0.12)`,border:`rgba(${i},0.35)`}},p=d[t]||d.info,f=m("toast-icon");f&&(f.className="fa-solid "+p.icon);const b=m("toast-title");b&&(b.textContent=a||p.label,b.style.display="block",b.style.color=p.accent);const u=m("toast-icon-wrap");u&&(u.style.background=p.iconBg,u.style.color=p.accent),U("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let w=m("toast-progress");w||(w=document.createElement("div"),w.id="toast-progress",s.appendChild(w)),w.style.background=p.accent,w.style.transition="none",w.style.width="100%",w.style.opacity="0.85",clearTimeout(la),s.classList.add("toast-show");const y=r||(t==="loading"?8e3:t==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{w.style.transition=`width ${y}ms linear`,w.style.width="0%"})),la=setTimeout(()=>{s.classList.remove("toast-show")},y)},Ui=e=>It(e,"loading","Memproses...",8e3),Hi=()=>{clearTimeout(la);const e=m("toast");e&&e.classList.remove("toast-show")},Vi=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")},Gi=(e,t,a,r="Ya, Hapus",s=!0)=>{U("confirm-title",e),U("confirm-msg",t);const o=m("confirm-yes-btn");o&&(o.innerText=r,s?(o.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 active:scale-95 transition-all text-sm shadow-md shadow-rose-500/30",m("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",m("confirm-icon").className="fa-solid fa-triangle-exclamation"):(o.className="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-sm",m("confirm-icon-box").className="w-16 h-16 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-[var(--color-primary)]/20",m("confirm-icon").className="fa-solid fa-copy")),Dt=a;const i=m("custom-confirm-modal");i&&i.classList.contains("hidden")&&Ia("confirm"),L("custom-confirm-modal"),setTimeout(()=>{m("custom-confirm-modal").classList.remove("opacity-0"),m("custom-confirm-box").classList.remove("scale-95")},10)},ar=(e=!1)=>{ja("confirm",e,()=>{m("custom-confirm-modal").classList.add("opacity-0"),m("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>$("custom-confirm-modal"),300)})},Ki=()=>{if(Dt){const e=Dt;Dt=null,ar(),setTimeout(()=>{e()},150)}},Wi=(e,t,a)=>{let r=document.createElement("div");r.className="fixed inset-0 z-[9999] bg-slate-900/80 flex items-center justify-center p-4 backdrop-blur-sm opacity-0 transition-opacity duration-300",r.innerHTML=`
        <div class="bg-white dark:bg-slate-800 rounded-[2rem] w-full max-w-[320px] p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative transform scale-95 transition-all duration-300 flex flex-col text-center">
            <h3 class="font-bold text-slate-900 dark:text-white text-lg mb-4">${e}</h3>
            <input type="text" id="prompt-input" value="${t}" class="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 mb-6 focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-center font-bold text-xl tracking-wider" autocomplete="off" />
            <div class="flex gap-3">
                <button id="prompt-cancel" class="flex-1 py-3.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 active:scale-95 transition-all text-sm">Batal</button>
                <button id="prompt-ok" class="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-md">Simpan</button>
            </div>
        </div>
    `,document.body.appendChild(r);const s=r.querySelector("div");Ia("prompt"),setTimeout(()=>{r.classList.remove("opacity-0"),s.classList.remove("scale-95")},10);const o=r.querySelector("#prompt-input");o.focus(),o.select(),window.closePrompt=(i=!1)=>{!r||!r.parentNode||ja("prompt",i,()=>{r.classList.add("opacity-0"),s.classList.add("scale-95"),setTimeout(()=>r.remove(),300),window.closePrompt=null})},r.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),r.querySelector("#prompt-ok").onclick=()=>{let i=o.value;window.closePrompt(),a(i)}},Qi=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=qi;window.showToast=It;window.showToastLoading=Ui;window.hideToast=Hi;window.toggleTheme=Vi;window.showConfirm=Gi;window.closeConfirm=ar;window.executeConfirm=Ki;window.customPrompt=Wi;window.checkProPrint=Qi;tr();window.firebase=ue;window.db=k;window.DOMPurify=lr;window.uiPalettes=Ze;window.hexToRgb=As;window.applyUITheme=Ve;window.toggleTheme=br;window.applyBackgroundStyle=Ge;fr();const zi=localStorage.getItem("freshmart_ui_theme")||"emerald";Ve(zi,localStorage.getItem("freshmart_theme_color"));const Ga=()=>{gr();const e=localStorage.getItem("freshmart_bg_style")||"minimalist",t=localStorage.getItem("freshmart_bg_custom_url")||"";Ge(e,t),Da()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ga):Ga();window.onerror=function(e,t,a,r,s){return console.error("Global Error Caught:",e,"at",a,":",r),typeof showToast=="function"&&showToast("Ops, ada kendala sistem."),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Promise Rejection Sentinel:",e.reason)});window.updateSEO=xr;window.injectJSONLD=wr;window.rewardStatusLabel=Bt;window.getYouTubeId=Rt;window.parseVideoUrl=Ft;window.fixDriveVideo=Nt;window.fixDriveVideoPreview=Ms;let Ka=qt;const sr=fe;window.calcTaxDetails=e=>{const t=it.store.ppnEnabled===!0||it.store.ppnEnabled==="true",a=parseFloat(it.store.ppnRate)||11,r=it.store.ppnType||"exclusive";if(!t||e<=0)return{ppnEnabled:!1,ppnRate:0,ppnType:r,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0};if(r==="inclusive"){const s=Math.round(e*100/(100+a)),o=e-s;return{ppnEnabled:!0,ppnRate:a,ppnType:"inclusive",ppnAmount:o,dppAmount:s,grandTotalAdd:0}}else{const s=Math.round(e*a/100);return{ppnEnabled:!0,ppnRate:a,ppnType:"exclusive",ppnAmount:s,dppAmount:Math.max(0,e),grandTotalAdd:s}}};typeof requestIdleCallback<"u"?requestIdleCallback(_a,{timeout:5e3}):setTimeout(_a,3e3);let Wa=null,it=JSON.parse(JSON.stringify(sr));window.updateProBadge=()=>{};let jt=[],Et=[],_t=[],Qa={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},za=null,Ja=null,Ya=null,Xa="Semua Produk",Za="Semua Merek",es="",ts="newest",as="grid",ss=1,rs=12,os="orders",is="",ls=null;window.isAdm=!1;window.isPro=!0;let ns=null,ds=0,cs=[],ps=[],ms=[],us=1,fs=[],bs=null,gs=null,xs=null,ws=[],hs=[],vs=null,ys=null,ks,$s=!1,Ss=null,Ps="all",Ts="today";try{jt=JSON.parse(we("freshmart_cart"))||[],nt(jt)}catch{}try{Et=JSON.parse(we("freshmart_wishlist"))||[],Is(Et)}catch{}try{_t=JSON.parse(we("freshmart_my_orders"))||[],$t(_t)}catch{}history.replaceState({view:"view-catalog"},"","");const Ji=e=>{e&&U("loader-text",e);const t=m("global-loader");t&&(t.style.display="flex")},Yi=()=>{const e=m("global-loader");e&&(e.style.display="none")},Xi=()=>window.sanitizeCart();window.addEventListener("DOMContentLoaded",async()=>{await loadAppData(),syncAppMeta(),attachRealtimeStockSync(),ge.onAuthStateChanged(async e=>{if(e&&e.uid!==da){await ge.signOut();return}if(e){window.isAdm=!0,window.isPro=!0,localStorage.removeItem("isFreshmartPro"),localStorage.removeItem("freshmart_license_code"),window.updateProBadge&&window.updateProBadge();let t=document.getElementById("view-admin-login");t&&!t.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),openAdminMenu(),showToast("Sesi Dipulihkan! Selamat Datang."))}else window.isAdm=!1,window.isPro=!1,window.updateProBadge&&window.updateProBadge(),localStorage.removeItem("isFreshmartPro"),localStorage.removeItem("freshmart_license_code")})});window.el=m;window.show=L;window.hide=$;window.toggleCls=Z;window.setIn=U;window.setH=P;window.setV=se;window.getV=C;window.esc=c;window.fixD=W;window.fCur=x;window.sL=we;window.ssL=te;window.defaultFbC=na;window.fbC=na;window.defApp=sr;window.ADMIN_UID=da;window.sLoad=Ji;window.hLoad=Yi;window.sanitizeCart=Xi;const H=(e,t,a)=>{try{Object.defineProperty(window,e,{get:t,set:a,configurable:!0})}catch{}};H("GAS_UPLOAD_URL",()=>Ka,e=>{Ka=e});H("confirmCb",()=>Wa,e=>{Wa=e});H("appData",()=>it,e=>{it=e});H("cart",()=>jt,e=>{jt=e,nt(e)});H("wishlist",()=>Et,e=>{Et=e,Is(e)});H("myOrders",()=>_t,e=>{_t=e,$t(e)});H("cust",()=>Qa,e=>{Qa=e});H("currentMember",()=>za,e=>{za=e});H("selectedReward",()=>Ja,e=>{Ja=e});H("memberCheckTimer",()=>Ya,e=>{Ya=e});H("aCat",()=>Xa,e=>{Xa=e});H("aBrand",()=>Za,e=>{Za=e});H("sQ",()=>es,e=>{es=e});H("cSort",()=>ts,e=>{ts=e});H("cView",()=>as,e=>{as=e});H("cPage",()=>ss,e=>{ss=e});H("iPP",()=>rs,e=>{rs=e});H("cTab",()=>os,e=>{os=e});H("aSq",()=>is,e=>{is=e});H("eId",()=>ls,e=>{ls=e});H("cProd",()=>ns,e=>{ns=e});H("cVar",()=>ds,e=>{ds=e});H("tVars",()=>cs,e=>{cs=e});H("tWhol",()=>ps,e=>{ps=e});H("tSpec",()=>ms,e=>{ms=e});H("cQty",()=>us,e=>{us=e});H("oMods",()=>fs,e=>{fs=e});H("aOrdLst",()=>bs,e=>{bs=e});H("aCustLst",()=>gs,e=>{gs=e});H("aRevLst",()=>xs,e=>{xs=e});H("gOrds",()=>ws,e=>{ws=e});H("gReviews",()=>hs,e=>{hs=e});H("cVOrd",()=>vs,e=>{vs=e});H("vouch",()=>ys,e=>{ys=e});H("toastT",()=>ks,e=>{ks=e});H("isSaving",()=>$s,e=>{$s=e});H("bannerTmr",()=>Ss,e=>{Ss=e});H("reviewFilterMode",()=>Ps,e=>{Ps=e});H("lastReportPeriod",()=>Ts,e=>{Ts=e});
