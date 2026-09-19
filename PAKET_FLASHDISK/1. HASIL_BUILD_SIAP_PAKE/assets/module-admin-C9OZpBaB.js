const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js"])))=>i.map(i=>d[i]);
import{e as f,o as be,a as i,c as C,s as Ba,b as V,d as N,f as k,g as B,h as L,i as A,j as c,w as se,k as g,l as $e,m as de,n as z,p as yt,q as w,r as F,t as St,u as ae,v as Ua,x as Da,y as Pt,z as ls,A as Te,B as $t,C as ds,D as Ae,E as we,F as Me,G as ea,H as ue,I as aa,J as ut,K as At,L as qa,M as Tt,N as Mt,O as cs,P as ps,Q as P,R as j,S as T,T as De,U as na,V as je,W as ta,X as Le,Y as sa,Z as ms,_ as us,$ as Ct,a0 as Q,a1 as It,a2 as bs,a3 as gs,a4 as va,a5 as Ee,a6 as fs,a7 as bt,a8 as E,a9 as jt,aa as xs,ab as Ga,ac as hs,ad as ks,ae as ws,af as vs,ag as Wa,ah as Ce,ai as le,aj as ys,ak as Ss}from"./module-print-CcovgEhv.js";import{f as ee}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const Ps="modulepreload",$s=function(e){return"/"+e},gt={},As=function(a,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=n?.nonce||n?.getAttribute("nonce");s=Promise.allSettled(t.map(d=>{if(d=$s(d),d in gt)return;gt[d]=!0;const p=d.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const u=document.createElement("link");if(u.rel=p?"stylesheet":Ps,p||(u.as="script"),u.crossOrigin="",u.href=d,l&&u.setAttribute("nonce",l),document.head.appendChild(u),p)return new Promise((x,h)=>{u.addEventListener("load",x),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(n){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n}return s.then(n=>{for(const l of n||[])l.status==="rejected"&&o(l.reason);return a().catch(o)})},Ts={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const Lt=window.FIREBASE_CONFIG||Ts;ee.apps.length||ee.initializeApp(Lt);const S=ee.firestore(),te=ee.auth();typeof window<"u"&&(window.firebase=ee,window.db=S,window.auth=te);try{S.settings({ignoreUndefinedProperties:!0,experimentalForceLongPolling:!0,merge:!0})}catch{}let Ms=null;const Fi=()=>{As(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{Ms=ee.analytics()}catch{}}).catch(()=>{})},Cs="K2ijSERTT2dg27yYGTEgn6XHSnW2",We={emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#dc2626",600:"#b91c1c",700:"#991b1b",800:"#7f1d1d",900:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#ea580c",600:"#c2410c",700:"#9a3412",800:"#7c2d12",900:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#d97706",600:"#b45309",700:"#92400e",800:"#78350f",900:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#eab308",500:"#d97706",600:"#b45309",700:"#854d0e",800:"#713f12",900:"#3f1d0b"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#65a30d",600:"#4d7c0f",700:"#3f6212",800:"#365314",900:"#1a2e05"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#16a34a",600:"#15803d",700:"#166534",800:"#14532d",900:"#052e16"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#475569",600:"#334155",700:"#1e293b",800:"#0f172a",900:"#020617"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#57534e",600:"#44403c",700:"#292524",800:"#1c1917",900:"#0c0a09"}},Is=e=>{let a=parseInt(e.replace("#",""),16);return(a>>16&255)+","+(a>>8&255)+","+(a&255)},ft=(e,a)=>{let t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return t=Math.max(0,Math.min(255,t+a)),r=Math.max(0,Math.min(255,r+a)),s=Math.max(0,Math.min(255,s+a)),"#"+[t,r,s].map(o=>o.toString(16).padStart(2,"0")).join("")},js=e=>{if(!e)return;try{document.querySelectorAll('meta[name="theme-color"]').forEach(d=>d.remove())}catch{}const a=document.createElement("meta");a.setAttribute("name","theme-color"),a.setAttribute("content",e),document.head.appendChild(a);try{document.querySelectorAll('meta[name="msapplication-navbutton-color"], meta[name="msapplication-TileColor"]').forEach(d=>d.remove())}catch{}const t=document.createElement("meta");t.setAttribute("name","msapplication-navbutton-color"),t.setAttribute("content",e),document.head.appendChild(t);const r=document.createElement("meta");r.setAttribute("name","msapplication-TileColor"),r.setAttribute("content",e),document.head.appendChild(r);let s=document.querySelector('meta[name="apple-mobile-web-app-capable"]');s||(s=document.createElement("meta"),s.setAttribute("name","apple-mobile-web-app-capable"),document.head.appendChild(s)),s.setAttribute("content","yes");let o=document.querySelector('meta[name="mobile-web-app-capable"]');o||(o=document.createElement("meta"),o.setAttribute("name","mobile-web-app-capable"),document.head.appendChild(o)),o.setAttribute("content","yes");let n=document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');n||(n=document.createElement("meta"),n.setAttribute("name","apple-mobile-web-app-status-bar-style"),document.head.appendChild(n)),n.setAttribute("content","default"),typeof window.updatePwaManifest=="function"&&window.updatePwaManifest(e)},Je=(e,a)=>{const t=e||localStorage.getItem("freshmart_ui_theme")||"emerald",r=We[t]||We.emerald;e&&localStorage.setItem("freshmart_ui_theme",t);const s=a||localStorage.getItem("freshmart_theme_color")||r[500];a&&localStorage.setItem("freshmart_theme_color",s);const o=Is(s),n=ft(s,-30),l=ft(s,150);return document.documentElement.style.setProperty("--color-primary",s),document.documentElement.style.setProperty("--color-primary-dark",n),document.documentElement.style.setProperty("--color-primary-light",l),document.documentElement.style.setProperty("--color-primary-rgb",o),js(s),r},Oi=()=>{const e=localStorage.getItem("freshmart_theme"),a=window.matchMedia("(prefers-color-scheme: dark)").matches;(e==="dark"||!e&&a)&&document.documentElement.classList.add("dark")},Hi=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const a=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");a&&(a.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")},Ki=()=>{const e=document.documentElement.classList.contains("dark"),a=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");a&&(a.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")},Ye=(e="minimalist",a="")=>{let t=e||localStorage.getItem("freshmart_bg_style")||"minimalist";t==="dual_tone"&&(t="aurora_glow"),t==="geometric_3d"&&(t="tech_grid"),t==="diagonal_skew"&&(t="glass_studio");const r=a??(localStorage.getItem("freshmart_bg_custom_url")||"");e&&localStorage.setItem("freshmart_bg_style",t),a!=null&&localStorage.setItem("freshmart_bg_custom_url",r);const o=(p=>{if(!p||typeof p!="string")return"";const m=p.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);return m?`https://lh3.googleusercontent.com/d/${m[1]}`:p.trim()})(r);document.documentElement.setAttribute("data-bg-style",t),document.body?.setAttribute("data-bg-style",t);const n=document.getElementById("app-container");n&&(n.setAttribute("data-bg-style",t),o?n.setAttribute("data-has-custom-bg","true"):n.removeAttribute("data-has-custom-bg"));const l=document.getElementById("dynamic-bg-container");if(!l)return;if(l.innerHTML="",l.className="pointer-events-none fixed inset-0 z-0 overflow-hidden",o){const p=document.createElement("div");p.className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-35 dark:opacity-25 pointer-events-none transition-all duration-500",p.style.backgroundImage=`url('${o}')`,l.appendChild(p);const m=document.createElement("div");m.className="absolute inset-0 z-0 bg-slate-50/70 dark:bg-[#0b1120]/80 pointer-events-none",l.appendChild(m)}let d="";if(t==="hero_arch"?d=`
            <!-- Hero Arch: Canopy Dome Curve & Radial Ambient Aura -->
            <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[160%] max-w-[1700px] h-96 rounded-b-[100%] bg-gradient-to-b from-[rgba(var(--color-primary-rgb),0.22)] via-[rgba(var(--color-primary-rgb),0.08)] to-transparent pointer-events-none blur-sm"></div>
            <div class="absolute top-24 left-1/2 -translate-x-1/2 w-[120%] max-w-[1400px] h-60 rounded-b-[100%] border-b-2 border-[rgba(var(--color-primary-rgb),0.25)] pointer-events-none"></div>
            <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[rgba(var(--color-primary-rgb),0.18)] blur-3xl pointer-events-none"></div>
        `:t==="aurora_glow"?d=`
            <!-- Aurora Mesh Glow: Dynamic Atmospheric Ambient Orbs -->
            <div class="absolute -top-24 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[rgba(var(--color-primary-rgb),0.28)] via-[rgba(var(--color-primary-rgb),0.12)] to-transparent blur-[80px] pointer-events-none"></div>
            <div class="absolute -top-28 -right-20 w-[460px] h-[460px] rounded-full bg-gradient-to-bl from-[rgba(var(--color-primary-rgb),0.24)] via-[rgba(var(--color-primary-rgb),0.1)] to-transparent blur-[90px] pointer-events-none"></div>
            <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-72 bg-gradient-to-b from-[rgba(var(--color-primary-rgb),0.06)] to-transparent rounded-full blur-[100px] pointer-events-none"></div>
        `:t==="tech_grid"?d=`
            <!-- Tech Grid: Blueprint Dot-Matrix & Precision Architectural Accents -->
            <div class="absolute inset-0 pointer-events-none opacity-40 dark:opacity-30" style="background-image: radial-gradient(rgba(var(--color-primary-rgb), 0.22) 1.5px, transparent 1.5px); background-size: 24px 24px;"></div>
            <div class="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-[rgba(var(--color-primary-rgb),0.18)] via-[rgba(var(--color-primary-rgb),0.05)] to-transparent pointer-events-none"></div>
            <div class="absolute top-20 left-10 w-48 h-48 border border-[rgba(var(--color-primary-rgb),0.15)] rounded-2xl pointer-events-none -rotate-6"></div>
            <div class="absolute top-36 right-12 w-64 h-64 border border-[rgba(var(--color-primary-rgb),0.12)] rounded-3xl pointer-events-none rotate-12"></div>
        `:t==="glass_studio"?d=`
            <!-- Glass Studio: Frosted Depth & Diagonal Light Rays -->
            <div class="absolute -top-36 -right-16 w-[500px] h-[500px] bg-gradient-to-br from-[rgba(var(--color-primary-rgb),0.22)] to-transparent rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute inset-0 pointer-events-none opacity-20 dark:opacity-15" style="background: repeating-linear-gradient(135deg, rgba(var(--color-primary-rgb),0.15), rgba(var(--color-primary-rgb),0.15) 1.5px, transparent 1.5px, transparent 28px);"></div>
            <div class="absolute top-1/4 -left-20 w-80 h-80 bg-[rgba(var(--color-primary-rgb),0.14)] rounded-full blur-3xl pointer-events-none"></div>
        `:d=`
            <!-- Minimalis Clean Studio: Soft top ambient wash -->
            <div class="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[rgba(var(--color-primary-rgb),0.08)] to-transparent pointer-events-none"></div>
        `,d){const p=document.createElement("div");p.className="absolute inset-0 z-0 pointer-events-none",p.innerHTML=d,l.appendChild(p)}};let xt={},Z="view-catalog",ze=!1,ra=null,Ea=["view-catalog"];const ua=e=>{history.pushState({modal:e},"",window.location.href),be.push(e)},Ne=(e,a,t)=>{if(!a){const r=be.lastIndexOf(e);r>-1&&be.splice(r,1),ze=!0,ra&&clearTimeout(ra),ra=setTimeout(()=>{ze=!1},300);try{history.back()}catch{ze=!1}}t()},ve=(e,a=!1)=>{if(!e||e===Z)return;a||(history.pushState({view:e},"",window.location.href),e==="view-catalog"?Ea=["view-catalog"]:Ea.push(e));const t=f(Z);if(t){const s=t.querySelector(".scroll-content");s&&(xt[Z]=s.scrollTop)}Z==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime();const r=f(e);if(r&&(r.classList.remove("hidden"),r.classList.add("flex")),document.querySelectorAll(".view-section").forEach(s=>{s!==r&&(s.classList.add("hidden"),s.classList.remove("flex"))}),r){e==="view-cart"&&typeof window.renderCart=="function"?window.renderCart():e==="view-checkout"&&typeof window.rChck=="function"?window.rChck():e==="view-payment"&&typeof window.rPay=="function"?window.rPay():e==="view-wishlist"&&typeof window.renderWish=="function"?window.renderWish():e==="view-orders"&&typeof window.renderMyOrders=="function"?window.renderMyOrders():e==="view-faq"&&typeof window.renderStorefrontFAQ=="function"&&window.renderStorefrontFAQ();const s=r.querySelector(".scroll-content");if(s)if(a){const o=xt[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{s.scrollTop=o}))}else s.scrollTo(0,0)}Z=e,Bt(e)},Bt=(e=Z)=>{const a=f("bottom-nav-bar");if(!a)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin"].includes(e)){a.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),a.classList.remove("translate-y-0","opacity-100");return}if(a.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),a.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(r=>r.classList.remove("active")),e==="view-catalog"){const r=f("bnav-home");r&&r.classList.add("active")}else if(e==="view-orders"){const r=f("bnav-orders");r&&r.classList.add("active")}else if(e==="view-wishlist"||e==="view-faq"){const r=f("bnav-menu");r&&r.classList.add("active")}},Ls=e=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(e==="home"?"medium":"light"),e==="home")if(Z==="view-catalog"){const a=document.querySelector("#view-catalog .scroll-content");a?a.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else ve("view-catalog");else e==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():e==="cart"?ve("view-cart"):e==="orders"?ve("view-orders"):e==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},Dt=()=>{const e=document.querySelector("#view-catalog .scroll-content"),a=f("pull-to-refresh-indicator"),t=f("ptr-icon"),r=f("ptr-text");if(!e||!a)return;let s=0,o=0,n=!1,l=!1;const d=65;e.addEventListener("touchstart",p=>{e.scrollTop<=5&&!l&&(s=p.touches[0].pageY,n=!0)},{passive:!0}),e.addEventListener("touchmove",p=>{if(!n||l)return;o=p.touches[0].pageY;const m=o-s;if(m>15&&e.scrollTop<=5){a.classList.add("visible");const u=Math.min(m/d,1.5);t&&(t.style.transform=`rotate(${u*240}deg)`),r&&(r.innerText=m>=d?"Lepaskan untuk segarkan":"Tarik ke bawah untuk refresh")}else a.classList.remove("visible")},{passive:!0}),e.addEventListener("touchend",async()=>{if(!n||l)return;if(n=!1,o-s>=d&&e.scrollTop<=5){l=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),t&&(t.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",t.style.transform=""),r&&(r.innerText="Menyinkronkan katalog...");try{typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),r&&(r.innerText="Katalog Terkini Disinkron!"),t&&(t.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch{r&&(r.innerText="Gagal sinkron data")}setTimeout(()=>{a.classList.remove("visible"),setTimeout(()=>{l=!1,t&&(t.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",t.style.transform=""),r&&(r.innerText="Tarik ke bawah untuk refresh")},300)},600)}else a.classList.remove("visible"),t&&(t.style.transform="")})},Et=e=>{e==="product"&&typeof window.closeProductModal=="function"?window.closeProductModal(!0):e==="category"&&typeof window.closeCategoryModal=="function"?window.closeCategoryModal(!0):e==="brand"&&typeof window.closeBrandModal=="function"?window.closeBrandModal(!0):e==="admin"&&typeof window.closeAdminModal=="function"?window.closeAdminModal(!0):e==="adminOrder"&&typeof window.closeOrderDetailModal=="function"?window.closeOrderDetailModal(!0):e==="receipt"&&typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):e==="docPreview"&&typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):e==="scanner"&&typeof window.closeCameraScanner=="function"?window.closeCameraScanner(!0):e==="confirm"&&typeof window.closeConfirm=="function"?window.closeConfirm(!0):e==="customerOrder"&&typeof window.closeCustomerOrderDetailModal=="function"?window.closeCustomerOrderDetailModal(!0):e==="restock"&&typeof window.closeRestockModal=="function"?window.closeRestockModal(!0):e==="quickprice"&&typeof window.closeQuickPriceModal=="function"?window.closeQuickPriceModal(!0):e==="member"&&typeof window.closeMemberModal=="function"?window.closeMemberModal(!0):e==="prompt"&&typeof window.closePrompt=="function"?window.closePrompt(!0):e==="review"&&typeof window.closeReviewModal=="function"?window.closeReviewModal(!0):e==="quickmenu"&&typeof window.closeQuickMenuModal=="function"?window.closeQuickMenuModal(!0):e==="variantPreview"&&typeof window.closeVariantPreviewModal=="function"?window.closeVariantPreviewModal(!0):e==="terms"&&typeof window.closeTermsModal=="function"?window.closeTermsModal(!0):e==="privacy"&&typeof window.closePrivacyModal=="function"?window.closePrivacyModal(!0):e==="askQuestion"&&typeof window.closeAskQuestionModal=="function"?window.closeAskQuestionModal(!0):e==="quickVariant"&&typeof window.closeQuickVariantSheet=="function"?window.closeQuickVariantSheet(!0):e==="adminFAQ"&&typeof window.closeAdminFAQModal=="function"?window.closeAdminFAQModal(!0):e==="printerSettings"&&typeof window.closePrinterSettingsModal=="function"?window.closePrinterSettingsModal(!0):e==="exitConfirm"&&typeof window.closeExitConfirmModal=="function"?window.closeExitConfirmModal(!0):e==="appDownload"&&typeof window.closeAppDownloadModal=="function"?window.closeAppDownloadModal(!0):e==="voucher"&&typeof window.closeVoucherModal=="function"?window.closeVoucherModal(!0):e==="guide"&&typeof window.closeShoppingGuideModal=="function"?window.closeShoppingGuideModal(!0):e==="changelog"&&typeof window.closeChangelogModal=="function"?window.closeChangelogModal(!0):e==="guarantee"&&typeof window.closeQualityGuaranteeModal=="function"?window.closeQualityGuaranteeModal(!0):e==="security"&&typeof window.closeSecurityModal=="function"&&window.closeSecurityModal(!0)},Nt=()=>{const e=f("exit-confirm-modal");e&&(e.classList.contains("hidden")&&ua("exitConfirm"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const a=f("exit-confirm-modal-box");a&&a.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},za=(e=!1)=>{Ne("exitConfirm",e,()=>{const a=f("exit-confirm-modal"),t=f("exit-confirm-modal-box");a&&a.classList.add("opacity-0"),t&&t.classList.add("scale-95"),setTimeout(()=>{a&&a.classList.add("hidden")},250)})},Bs=()=>{za(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri! 🙏"),setTimeout(()=>{try{window.close()}catch{}},400))},Ds=()=>{if(be.length>0){try{window.history.back()}catch{const t=be.pop();Et(t)}return}if(Z==="view-admin"){const a=f("admin-content-view"),t=f("admin-dashboard-view");if(!!(a&&!a.classList.contains("hidden")||t&&t.classList.contains("hidden")||window.history.state&&window.history.state.tab||typeof window.cTab<"u"&&window.cTab)){if(window.history.state&&window.history.state.tab&&window.history.length>1)try{window.history.back();return}catch{}typeof window.openAdminMenu=="function"&&window.openAdminMenu();try{window.history.replaceState({view:"view-admin"},"",window.location.href)}catch{}return}typeof window.showConfirm=="function"&&window.showConfirm("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0);return}if(Z!=="view-catalog"){if(window.history.length>1)window.history.back();else{let a="view-catalog";Z==="view-payment"?a="view-checkout":Z==="view-checkout"&&(a="view-cart"),ve(a)}return}const e=f("exit-confirm-modal");e&&!e.classList.contains("hidden")?za():Nt()},Es=()=>{Dt();try{(!history.state||!history.state.view)&&history.replaceState({view:"view-catalog"},"",window.location.href)}catch{}window.addEventListener("popstate",e=>{if(ze){ze=!1,ra&&clearTimeout(ra);return}if(be.length>0){const s=be.pop();Et(s);return}const a=e.state||{},t=a.view||null;if(window.isAdm||window.__localIsAdm)if(t==="view-admin")ve("view-admin",!0),a.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(a.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu();else{const s=f("admin-content-view");if(s&&!s.classList.contains("hidden")){history.pushState({view:"view-admin"},"",window.location.href),ve("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"&&window.showConfirm("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}else if(t){let s=t;t==="view-admin"&&(s="view-admin-login"),ve(s,!0)}else ve("view-catalog",!0)})};window.pushModalHistory=ua;window.requestCloseModal=Ne;window.changeView=ve;window.setupHistoryRouter=Es;window.onBottomNavClick=Ls;window.updateBottomNav=Bt;window.initPullToRefresh=Dt;window.handleAppBackButton=Ds;window.openExitConfirmModal=Nt;window.closeExitConfirmModal=za;window.confirmExitApp=Bs;window.isProgrammaticModalClose=ze;window.viewHistoryStack=Ea;try{Object.defineProperty(window,"curViewName",{get:()=>Z,set:e=>{Z=e},configurable:!0})}catch{}const la=()=>{const e=i.store.useStock===!0||i.store.useStock==="true",a=C.filter(t=>{const r=i.products.find(s=>s&&s.id!=null&&String(s.id)===String(t.id));if(!r||r.isActive==="false"||r.isActive===!1)return!1;if(t.variantName){const s=(r.variants||[]).find(o=>o.name===t.variantName);if(!s||s.isActive===!1||s.isActive==="false"||e&&(parseFloat(s.stock)||0)<=0)return!1}else if(e&&(parseFloat(r.stock)||0)<=0)return!1;return!0});Ba(a),V("freshmart_cart",JSON.stringify(C))},J=()=>{V("freshmart_cart",JSON.stringify(C));const e=typeof window.getEffP=="function"?window.getEffP:n=>n.price||0,a=parseFloat(C.reduce((n,l)=>n+(parseFloat(l.qty)||0),0).toFixed(2)),t=C.reduce((n,l)=>n+e(l)*(parseFloat(l.qty)||0),0);N("cart-badge",a.toString()),N("cart-total-preview",k(t));const r=f("cart-badge");r&&r.classList.toggle("scale-0",a<=0);const s=f("bottom-nav-cart-badge");s&&(s.textContent=a>99?"99+":a.toString(),s.classList.toggle("scale-0",a<=0)),document.querySelectorAll(".desktop-cart-badge").forEach(n=>{n.textContent=a.toString(),n.classList.toggle("hidden",a<=0)});const o=f("floating-cart-container");o&&(a>0?(o.classList.remove("scale-0","pointer-events-none"),o.classList.add("scale-100","pointer-events-auto")):(o.classList.remove("scale-100","pointer-events-auto"),o.classList.add("scale-0","pointer-events-none")))},Fe=()=>{const e=f("cart-free-shipping-bar"),a=f("cart-loyalty-points-bar");if(!C.length){B("cart-empty-state"),L("cart-bottom-bar"),L("btn-clear-cart"),L("btn-cart-sph-header"),L("cart-sph-card"),B("spacer-cart"),A("cart-items-container",""),e&&(e.classList.add("hidden"),e.innerHTML=""),a&&(a.classList.add("hidden"),a.innerHTML="");return}L("cart-empty-state"),B("cart-bottom-bar"),B("btn-clear-cart"),B("btn-cart-sph-header"),B("cart-sph-card"),L("spacer-cart");const t=typeof window.getEffP=="function"?window.getEffP:n=>n.price||0;let r=0;A("cart-items-container",C.map((n,l)=>{let d=parseFloat(n.qty)||0,p=t(n),m=p<n.price;r+=p*d;let u=n.colorCode?`<span class="w-3.5 h-3.5 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 shrink-0" style="background-color: ${c(n.colorCode)};"></span>`:"";return`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex gap-4 relative overflow-hidden group min-w-0 hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all duration-300">
            
            <div class="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white border border-slate-100 dark:border-slate-700/50 p-2 flex items-center justify-center overflow-hidden">
                <img loading="lazy" src="${c(n.img)}" alt="${c(n.name)}" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'">
            </div>
            
            <div class="flex-1 flex flex-col min-w-0 relative">
                <button onclick="rmCart(${l})" class="absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/50 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 transition-all active:scale-90 border border-slate-100 dark:border-slate-600 shadow-sm z-10"><i class="fa-solid fa-xmark text-sm"></i></button>
                
                <h4 class="text-[13px] sm:text-sm font-bold text-slate-800 dark:text-white leading-snug line-clamp-2 mb-1.5 pr-10 uppercase tracking-wide">${c(n.name)}</h4>
                
                <div class="flex flex-wrap items-center gap-1.5 mb-2.5">
                    ${m?'<span class="bg-amber-500 text-white px-2.5 py-0.5 rounded-full text-[9px] font-bold shadow-sm flex items-center gap-1 uppercase tracking-wide"><i class="fa-solid fa-layer-group"></i> Grosir</span>':""}
                    ${u}
                    ${n.variantName?`<span class="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[9px] font-bold border border-slate-200 dark:border-slate-600 uppercase tracking-wide">${c(n.variantName)}</span>`:""}
                    ${n.poTime?`<span class="amber-badge px-2 py-0.5 rounded-full text-[9px] font-bold flex items-center uppercase tracking-wide"><i class="fa-solid fa-clock mr-1"></i> PO ${c(n.poTime)}</span>`:""}
                </div>
                
                <div class="flex justify-between items-end mt-auto pt-1">
                    <div>
                        ${m?`<p class="text-[10px] line-through text-slate-400 font-bold mb-0.5">${k(n.price)}</p>`:""}
                        <div class="flex items-baseline gap-1">
                            <p class="text-[var(--color-primary)] font-bold text-base sm:text-lg leading-none tracking-tight">${k(p)}</p>
                            <p class="text-[9px] text-slate-400 font-bold uppercase tracking-widest">/${c(n.unit||"pcs")}</p>
                        </div>
                    </div>
                    
                    <div class="flex bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shrink-0 shadow-sm h-9">
                        <button onclick="updCQty(${l}, -1)" class="w-9 h-full flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-700 font-bold transition-colors active:bg-slate-100"><i class="fa-solid fa-minus text-xs"></i></button>
                        <input type="number" step="0.01" class="w-10 h-full text-center text-xs font-bold bg-transparent text-slate-800 dark:text-white focus:outline-none border-x border-slate-200 dark:border-slate-700" value="${d}" onchange="setCQty(${l}, this.value)">
                        <button onclick="updCQty(${l}, 1)" class="w-9 h-full flex items-center justify-center text-slate-500 hover:text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] dark:text-slate-400 dark:hover:text-[var(--color-primary)] dark:hover:bg-[rgba(var(--color-primary-rgb),0.12)] font-bold transition-colors active:bg-slate-100"><i class="fa-solid fa-plus text-xs"></i></button>
                    </div>
                </div>
            </div>
        </div>`}).join("")),N("cart-subtotal",k(r));const s=i.store.freeShippingMinSpendEnabled===!0||i.store.freeShippingMinSpendEnabled==="true",o=parseFloat(i.store.freeShippingMinSpendAmount)||0;if(e)if(s&&o>0){e.classList.remove("hidden");const n=Math.min(100,Math.round(r/o*100)),l=Math.max(0,o-r),d=r>=o;e.innerHTML=`
            <div class="p-4 rounded-2xl border transition-all duration-300 ${d?"bg-[var(--color-primary)] text-white border-[var(--color-primary)]/40 shadow-md shadow-[rgba(var(--color-primary-rgb),0.2)]":"bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm text-slate-800 dark:text-slate-100"}">
                <div class="flex items-center justify-between gap-3 mb-2.5">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <span class="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0 ${d?"bg-white/20 text-white":"bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)]"}">
                            <i class="fa-solid ${d?"fa-circle-check text-base":"fa-truck-fast"}"></i>
                        </span>
                        <div class="min-w-0">
                            <p class="text-xs font-bold leading-tight ${d?"text-white":"text-slate-800 dark:text-slate-100"}">
                                ${d?'Hore! Anda berhak mendapatkan <span class="underline decoration-wavy decoration-white/60 font-extrabold">Gratis Ongkir Otomatis</span>':`Belanja <span class="text-[var(--color-primary)] font-extrabold">${k(l)}</span> lagi untuk <b>Gratis Ongkir</b>!`}
                            </p>
                            <p class="text-[10px] ${d?"text-white/85":"text-slate-400 dark:text-slate-500"} mt-0.5">
                                ${d?"Ongkos kirim otomatis dipotong Rp 0 saat checkout.":`Min. belanja ${k(o)} untuk pengiriman ke alamat.`}
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
            </div>`}else e.classList.add("hidden"),e.innerHTML="";if(a){const n=typeof window.calculateCartPoints=="function"?window.calculateCartPoints(C,i.store):{totalPoints:0,directPoints:0,spendPoints:0,nonPointSpend:0,threshold:1e5,pointsPerThreshold:1,isSpendPointsActive:!1,remainingToNextPoint:0,progressPercent:0},{totalPoints:l,directPoints:d,spendPoints:p,nonPointSpend:m,threshold:u,pointsPerThreshold:x,isSpendPointsActive:h,remainingToNextPoint:b,progressPercent:v}=n;if(l>0||h&&m>0){a.classList.remove("hidden");let y="";d>0&&p>0?y=`+${l} Poin didapat (${d} dari produk, ${p} dari belanja)`:d>0?y=`+${l} Poin didapat dari produk pilihan`:p>0?y=`+${l} Poin didapat dari kelipatan belanja!`:y="Kumpulkan poin belanja member";let $="";h&&b>0&&b<u?$=`Belanja <span class="text-amber-600 dark:text-amber-400 font-extrabold">${k(b)}</span> lagi untuk dapat +${x} poin berikutnya!`:l>0?$="Poin otomatis ditambahkan ke saldo member Anda setelah pesanan dikonfirmasi.":$=`Belanja minimal ${k(u)} untuk produk tanpa poin agar mendapatkan +${x} poin.`,a.innerHTML=`
            <div class="p-4 rounded-2xl border transition-all duration-300 ${l>0?"bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border-amber-200 dark:border-amber-700/60 dark:bg-amber-950/20":"bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm"}">
                <div class="flex items-center justify-between gap-3 mb-2">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <span class="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0 bg-amber-500 text-white shadow-sm shadow-amber-500/20">
                            <i class="fa-solid fa-coins"></i>
                        </span>
                        <div class="min-w-0">
                            <p class="text-xs font-bold leading-tight text-slate-800 dark:text-slate-100">
                                ${y}
                            </p>
                            <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                                ${$}
                            </p>
                        </div>
                    </div>
                    <span class="text-[11px] font-black shrink-0 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                        <i class="fa-solid fa-star text-[10px] mr-1"></i>${l} Poin
                    </span>
                </div>
                ${h&&b>0&&b<u?`
                <div class="w-full h-1.5 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700/60 mt-2">
                    <div class="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-amber-400 to-amber-500" style="width: ${v}%"></div>
                </div>
                `:""}
            </div>`}else a.classList.add("hidden"),a.innerHTML=""}},Ns=(e,a)=>{let t=parseFloat(a);if(isNaN(t)||t<=0)C.splice(e,1);else{if(i.store.useStock===!0||i.store.useStock==="true"){const s=C[e],o=i.products.find(n=>n&&n.id!=null&&String(n.id)===String(s.id));if(o){const n=s.variantName?parseFloat(((o.variants||[]).find(l=>l.name===s.variantName)||{}).stock)||0:parseFloat(o.stock)||0;t>n&&(t=n,typeof window.showToast=="function"&&window.showToast(`Maks stok: ${n}`))}}C[e].qty=parseFloat(t.toFixed(2))}Fe(),J()},Rs=(e,a)=>{let t=parseFloat((parseFloat(C[e].qty)+a).toFixed(2));if(t<=0)C.splice(e,1);else{if((i.store.useStock===!0||i.store.useStock==="true")&&a>0){const s=C[e],o=i.products.find(n=>n&&n.id!=null&&String(n.id)===String(s.id));if(o){const n=s.variantName?parseFloat(((o.variants||[]).find(l=>l.name===s.variantName)||{}).stock)||0:parseFloat(o.stock)||0;t>n&&(t=n,typeof window.showToast=="function"&&window.showToast(`Maks stok: ${n}`))}}C[e].qty=t}Fe(),J()},_s=e=>{C.splice(e,1),Fe(),J()},Fs=()=>{typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Semua barang akan dihapus. Lanjutkan?",()=>{Ba([]),J(),Fe(),typeof window.showToast=="function"&&window.showToast("Dibersihkan")}):(Ba([]),J(),Fe())},Os=()=>{if(window.isAdm){typeof window.showConfirm=="function"&&window.showConfirm("Akses Ditolak","Anda sedang login sebagai Seller. Silakan logout terlebih dahulu untuk membuat pesanan sebagai pelanggan.",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Logout Sekarang",!1);return}C.length&&typeof window.changeView=="function"&&window.changeView("view-checkout")};window.sanitizeCart=la;window.updCart=J;window.renderCart=Fe;window.setCQty=Ns;window.updCQty=Rs;window.rmCart=_s;window.clearCart=Fs;window.validateCartToCheckout=Os;const da=()=>{const e=f("wishlist-badge");e&&(e.innerText=se.length,e.classList.toggle("scale-0",!se.length))},Hs=e=>{se.splice(e,1),V("freshmart_wishlist",JSON.stringify(se)),da(),Qa()},Ks=e=>{const a=se[e],t=i.products?.find(n=>n.id===a.id);if(!t||t.isActive==="false"||t.isActive===!1)return g(`${a.name} sudah tidak tersedia.`);const r=a.variantName?(t.variants||[]).find(n=>n.name===a.variantName):null;if(i.store?.useStock===!0||i.store?.useStock==="true"){if(a.variantName&&(!r||r.isActive===!1||r.isActive==="false"))return g(`Varian ${a.variantName} sudah tidak tersedia.`);const n=r?parseFloat(r.stock)||0:parseFloat(t.stock)||0,l=C.find(p=>p.id===a.id&&p.variantName===a.variantName),d=l&&parseFloat(l.qty)||0;if(n<=0||d>=n)return g(`Stok ${a.name} tidak mencukupi!`)}const o=C.find(n=>n.id===a.id&&n.variantName===a.variantName);if(o)o.qty=parseFloat((o.qty+1).toFixed(2));else{const n=r&&parseFloat(r.poin)>0?parseFloat(r.poin):parseFloat(t.poin)||0;C.push({id:t.id,name:t.name,variantName:a.variantName||"",price:r?r.price:t.price,img:r?.img||t.img,qty:1,unit:t.unit||"pcs",poTime:t.poTime||"",colorCode:r?.colorCode||"",poin:n})}J(),g("Ke Keranjang!"),typeof window.curViewName<"u"&&window.curViewName==="view-cart"&&Fe()},Vs=()=>{$e("Hapus Favorit","Yakin ingin menghapus semua?",()=>{se.length=0,V("freshmart_wishlist",JSON.stringify(se)),da(),Qa(),g("Dibersihkan")})},Qa=()=>{if(!se.length){B("wishlist-empty-state"),L("btn-clear-wishlist"),B("spacer-wishlist"),A("wishlist-items-container","");return}L("wishlist-empty-state"),B("btn-clear-wishlist"),L("spacer-wishlist"),A("wishlist-items-container",se.map((e,a)=>{let t=e.colorCode?`<span class="w-3.5 h-3.5 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 shrink-0" style="background-color: ${c(e.colorCode)};"></span>`:"";return`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex gap-4 relative overflow-hidden group min-w-0 hover:shadow-md hover:-translate-y-1 hover:border-rose-300 dark:hover:border-rose-600 transition-all duration-300">
            <div class="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white border border-slate-100 dark:border-slate-700/50 p-2 flex items-center justify-center overflow-hidden">
                <img loading="lazy" src="${c(e.img)}" alt="${c(e.name)}" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'">
            </div>
            
            <div class="flex-1 flex flex-col min-w-0 relative">
                <button onclick="rmWish(${a})" class="absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/50 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 transition-all active:scale-90 border border-slate-100 dark:border-slate-600 shadow-sm z-10"><i class="fa-solid fa-xmark text-sm"></i></button>
                
                <h4 class="text-[13px] sm:text-sm font-bold text-slate-800 dark:text-white leading-snug line-clamp-2 mb-1.5 pr-10 uppercase tracking-wide">${c(e.name)}</h4>
                
                ${e.variantName?`<div class="mb-2 flex items-center gap-1.5">${t}<span class="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full text-[9px] font-bold border border-slate-200 dark:border-slate-600 uppercase tracking-wide">${c(e.variantName)}</span></div>`:""}
                
                <div class="flex justify-between items-end mt-auto pt-1">
                    <p class="text-[var(--color-primary)] font-bold text-base sm:text-lg leading-none tracking-tight">${k(e.price)}</p>
                    <button onclick="moveWish(${a})" class="h-9 px-5 rounded-xl bg-[var(--color-primary)] hover:opacity-90 text-white border border-[var(--color-primary)] text-xs font-bold transition-colors active:scale-95 shadow-glow flex items-center gap-1.5"><i class="fa-solid fa-cart-plus"></i> Beli</button>
                </div>
            </div>
        </div>`}).join(""))};window.updWish=da;window.rmWish=Hs;window.moveWish=Ks;window.clearWishlist=Vs;window.renderWish=Qa;window.cSlideIdx=0;let Ue=[];const Ja=(e,a=!1)=>{window.cSlideIdx=0;const t=i.products.find(b=>b&&b.id!=null&&String(b.id)===String(e));if(!t)return;const r=t.isActive!=="false"&&t.isActive!==!1,s=i.store.useStock===!0||i.store.useStock==="true";let o=1/0;if(s&&(o=t.variants&&t.variants.length?t.variants.filter(b=>b.isActive!==!1&&b.isActive!=="false").reduce((b,v)=>b+(parseFloat(v.stock)||0),0):parseFloat(t.stock)||0),!r){g("Produk ini sedang tidak tersedia");return}if(s&&o<=0){g("Maaf, stok produk ini sedang kosong");return}const n=f("product-modal"),l=f("product-modal-content"),d=n&&!n.classList.contains("hidden");if(!a&&d&&w&&w.id&&String(w.id)!==String(t.id)&&(Ue.push(w.id),typeof window.pushModalHistory=="function"?window.pushModalHistory("product"):be.push("product")),ls(t),Ua(1),t.variants&&t.variants.length>0){const b=t.variants.findIndex(v=>{const y=v.isActive!==!1&&v.isActive!=="false",$=parseFloat(v.stock)||0;return y&&(!s||$>0)});Da(b>=0?b:0)}else Da(0);de("modal-qty-input",1),Sa();const p=t.desc?t.desc.replace(/<[^>]*>/g,"").substring(0,160):`Beli ${t.name} berkualitas dengan harga terbaik hanya di Toko Putri.`,m=window.location.origin+window.location.pathname+"?p="+t.id;typeof window.updateSEO=="function"&&window.updateSEO(`${t.name} - Toko Putri`,p,z(t.img,"w500-rw"),m);const u=t.variants&&t.variants.length>0?Math.min(...t.variants.map(b=>parseFloat(b.price)||t.price)):t.price,x=o>0?"https://schema.org/InStock":"https://schema.org/OutOfStock",h={"@context":"https://schema.org","@type":"Product",name:t.name,image:[z(t.img,"w500-rw")],description:p,sku:`PROD-${t.id}`,category:t.category||"",brand:{"@type":"Brand",name:t.brand||"Toko Putri"},offers:{"@type":"Offer",url:m,priceCurrency:"IDR",price:u,itemCondition:"https://schema.org/NewCondition",availability:x,priceValidUntil:"2030-12-31"}};t.variants&&t.variants.length>0&&(h.offers=t.variants.map(b=>({"@type":"Offer",name:b.name,priceCurrency:"IDR",price:parseFloat(b.price)||t.price,itemCondition:"https://schema.org/NewCondition",availability:(parseFloat(b.stock)||0)>0?"https://schema.org/InStock":"https://schema.org/OutOfStock"}))),typeof window.injectJSONLD=="function"&&window.injectJSONLD("seo-product",h);try{const b=f("product-modal-ad-container");b&&(i.store.adsEnabled===!0||i.store.adsEnabled==="true"?(b.classList.remove("hidden"),b.innerHTML='<ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-2636322336243340" data-ad-slot="8219064079"></ins>',(window.adsbygoogle=window.adsbygoogle||[]).push({})):(b.classList.add("hidden"),b.innerHTML=""))}catch(b){console.error("Gagal render iklan in-article:",b)}if(typeof window.loadProductReviews=="function"&&window.loadProductReviews(t.id),Rt(t),n&&l){const b=new URLSearchParams(window.location.search);b.get("p")!==String(t.id)&&(b.set("p",t.id),!a&&!d?(window.history.pushState({modal:"product"},t.name,window.location.pathname+"?"+b.toString()),n.classList.contains("hidden")&&be.push("product")):window.history.replaceState({modal:"product"},t.name,window.location.pathname+"?"+b.toString())),n.classList.contains("hidden")?(l.scrollTo(0,0),yt(n,l)):l.scrollTo({top:0,behavior:"smooth"})}},ya=(e=!1)=>{const a=f("product-modal"),t=f("product-modal-content");if(!a||!t)return;if(e&&Ue.length>0){const s=Ue.pop();Ja(s,!0);return}if(!e&&Ue.length>0){const s=Ue.length;Ue=[];for(let o=0;o<s;o++){const n=be.lastIndexOf("product");n>-1&&be.splice(n,1)}}const r=()=>{Pt(a,t);const s=f("product-modal-video-container");s&&(s.innerHTML="",s.classList.add("hidden"));const o=new URLSearchParams(window.location.search);o.delete("p");let n=window.location.pathname;o.toString()&&(n+="?"+o.toString());const l=window.history.state&&typeof window.history.state=="object"?{...window.history.state}:{};delete l.modal,l.view||(l.view=Z||"view-catalog");try{window.history.replaceState(l,"Toko Putri",n)}catch{}typeof window.updateSEO=="function"&&window.updateSEO("Toko Putri","Toko Putri - Solusi grosir dan e-commerce terpercaya untuk alat teknik, perkakas, dan perlengkapan pertukangan berkualitas dengan harga terbaik.",z(i.store.logo,"w300-rw"),window.location.origin+n);const d=document.getElementById("seo-product");d&&d.remove()};typeof window.requestCloseModal=="function"?window.requestCloseModal("product",e,r):r()},Us=e=>{if(!w||!w.variants||!w.variants[e])return;const a=w.variants[e],t=f("variant-preview-modal"),r=f("variant-preview-content");if(!t||!r)return;let s="";`${c(w.name)}${c(a.name)}`;const o=k(a.price||w.price);a.img?s=`
            <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <img class="w-full h-full object-contain" src="${z(a.img,"w800-rw")}" alt="${c(a.name)}">
                ${a.colorCode?`<div class="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-white shadow-lg" style="background-color: ${c(a.colorCode)};"></div>`:""}
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <h4 class="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase break-words leading-tight">${c(a.name)}</h4>
                <p class="text-[var(--color-primary)] font-extrabold text-lg mt-1 tracking-tight">${o}</p>
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${c(w.name)}</p>
            </div>
        `:a.colorCode?s=`
            <div class="w-full aspect-square rounded-3xl shadow-2xl border-4 border-white/20 flex flex-col items-center justify-center p-6 relative overflow-hidden" style="background-color: ${c(a.colorCode)};">
                <div class="absolute bottom-0 inset-x-0 bg-white dark:bg-slate-900 p-6 flex flex-col items-center justify-center text-center border-t border-slate-200/50 dark:border-slate-800/50">
                    <span class="text-slate-900 dark:text-white font-extrabold text-lg uppercase tracking-wider break-words leading-tight">${c(a.name)}</span>
                    <span class="text-slate-500 dark:text-slate-400 font-mono text-xs font-bold mt-1 uppercase">${c(a.colorCode)}</span>
                    <span class="text-[var(--color-primary)] font-extrabold text-lg mt-1">${o}</span>
                </div>
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${c(w.name)}</p>
            </div>
        `:s=`
            <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <img loading="lazy" decoding="async" class="w-full h-full object-contain" src="${z(w.img||"","w800-rw")}" alt="${c(w.name)}">
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <h4 class="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase break-words leading-tight">${c(a.name)}</h4>
                <p class="text-[var(--color-primary)] font-extrabold text-lg mt-1 tracking-tight">${o}</p>
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${c(w.name)}</p>
            </div>
        `,r.innerHTML=s,t.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("variantPreview"),B("variant-preview-modal"),setTimeout(()=>{t.classList.remove("opacity-0"),r.classList.remove("scale-95")},10)},qs=()=>{if(!w)return;const e=f("variant-preview-modal"),a=f("variant-preview-content");if(!e||!a)return;const t=w.variants&&F!==null?w.variants[F]:null,r=t?.img||w.img||"",s=t?`${c(w.name)} - ${c(t.name)}`:c(w.name),o=k(t?.price??w.price);let n=`
        <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
            <img loading="lazy" decoding="async" class="w-full h-full object-contain" src="${z(r,"w800-rw")}" alt="${s}">
            ${t?.colorCode?`<div class="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-white shadow-lg" style="background-color: ${c(t.colorCode)};"></div>`:""}
        </div>
        <div class="mt-5 text-center px-4 w-full">
            <h4 class="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase break-words leading-tight">${c(w.name)}</h4>
            ${t?`<p class="text-slate-300 font-bold text-sm mt-1 uppercase tracking-wide">Varian: ${c(t.name)}</p>`:""}
            <p class="text-[var(--color-primary)] font-extrabold text-lg mt-1 tracking-tight">${o}</p>
        </div>
    `;a.innerHTML=n,e.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("variantPreview"),B("variant-preview-modal"),setTimeout(()=>{e.classList.remove("opacity-0"),a.classList.remove("scale-95")},10)},Gs=(e=!1)=>{const a=f("variant-preview-modal"),t=f("variant-preview-content");if(a&&t){const r=()=>{a.classList.add("opacity-0"),t.classList.add("scale-95"),setTimeout(()=>{L("variant-preview-modal"),t.innerHTML=""},300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("variantPreview",e,r):r()}},Ws=e=>{St(w?.video)&&(window.cSlideIdx+=e,window.cSlideIdx>1&&(window.cSlideIdx=0),window.cSlideIdx<0&&(window.cSlideIdx=1),Sa())},Sa=()=>{if(!w)return;let e=w,a=e.isActive!=="false"&&e.isActive!==!1,t=e.variants?.length>0;const r=(e.name||"").toLowerCase(),s=(e.category||"").toLowerCase(),o=(e.tag||"").toLowerCase(),n=["cat","paint","warna","colour","color","putih","hitam","merah","biru","hijau","kuning","orange","abu","coklat","cream","krem","beige","ivory","mocca","rose","tosca","lavender","salmon","broken white","off white","natural","magnolia","primer","dasar","eksterior","exterior","interior","tembok","duco","gloss","matte","satin","semi gloss"],l=r.includes("cat")&&(r.includes("tembok")||r.includes("interior")||r.includes("eksterior")||r.includes("exterior"))||s.includes("cat")||s.includes("paint")||o.includes("cat")||o.includes("paint"),d=t&&e.variants.some(M=>{const D=(M.name||"").toLowerCase();return n.some(oe=>D.includes(oe))}),p=l||d,m=f("product-modal-paint-warning");m&&(p?m.classList.remove("hidden"):m.classList.add("hidden"));let u=t&&F!==null?e.variants[F]:null,x=u?.unit||e.unit||"Pcs";const h=f("product-modal-img"),b=f("product-modal-video-container"),v=St(e.video),y=u&&u.img,$=f("slide-prev"),I=f("slide-next"),O=f("slide-dots");if(v&&!y)if($&&$.classList.remove("hidden"),I&&I.classList.remove("hidden"),O&&(O.classList.remove("hidden"),O.innerHTML=`
                <div class="w-2 h-2 rounded-full ${window.cSlideIdx===0?"bg-[var(--color-primary)] scale-125":"bg-slate-300 dark:bg-slate-600"} transition-all cursor-pointer shadow-sm" onclick="window.cSlideIdx=0; rProdMod()"></div>
                <div class="w-2 h-2 rounded-full ${window.cSlideIdx===1?"bg-[var(--color-primary)] scale-125":"bg-slate-300 dark:bg-slate-600"} transition-all cursor-pointer shadow-sm" onclick="window.cSlideIdx=1; rProdMod()"></div>
            `),window.cSlideIdx===1){h&&(h.style.display="none"),b&&(b.classList.remove("hidden"),b.innerHTML||(b.innerHTML=`<iframe class="w-full h-full pointer-events-none" src="https://www.youtube.com/embed/${v}?autoplay=1&mute=1&loop=1&playlist=${v}&enablejsapi=1&modestbranding=1&controls=0&rel=0&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure"></iframe>`));const M=f("zoom-indicator");M&&M.classList.add("hidden")}else{b&&b.classList.add("hidden"),h&&(h.style.display="block",h.src=z(u?.img||e.img||"","w600-rw"),h.style.opacity=1);const M=f("zoom-indicator");M&&M.classList.remove("hidden")}else{$&&$.classList.add("hidden"),I&&I.classList.add("hidden"),O&&O.classList.add("hidden"),b&&(b.innerHTML="",b.classList.add("hidden")),h&&(h.style.display="block",h.style.opacity=0,setTimeout(()=>{h.src=z(u?.img||e.img||"","w600-rw"),h.style.opacity=1},150));const M=f("zoom-indicator");M&&M.classList.remove("hidden")}if(N("product-modal-title",e.name),t&&F===null)A("product-modal-price",'<span class="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Pilih Warna/Varian</span>');else{let M=u?.price??e.price,D=u?.priceNormal??e.priceNormal;const ge=(i.store.ppnEnabled===!0||i.store.ppnEnabled==="true")&&i.store.ppnType==="inclusive"?'<span class="text-[9px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800 uppercase tracking-widest ml-2 align-middle inline-block">Inc. PPN</span>':"";let me="";if(D&&D>M){let _e=Math.round((D-M)/D*100);me=`<div class="flex flex-col"><span class="text-[11px] text-rose-500 font-bold line-through mb-0.5 tracking-wide">${k(D)} <span class="bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded ml-1 text-[9px] no-underline tracking-widest border border-rose-200">-${_e}%</span></span><span>${k(M)} ${ge}</span></div>`}else me=`<span>${k(M)} ${ge}</span>`;A("product-modal-price",me)}const R=f("product-modal-desc");if(R){R.className="text-[13px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_b]:font-bold [&_strong]:font-bold [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-2 [&_div]:my-1";const M=e.desc||"-";R.innerHTML=typeof DOMPurify<"u"?DOMPurify.sanitize(M,{ALLOWED_TAGS:["p","br","b","strong","i","em","u","s","span","div","h1","h2","h3","h4","ul","ol","li","a","img","table","thead","tbody","tr","th","td","blockquote","code","pre","hr"],ALLOWED_ATTR:["href","src","alt","title","class","style","target","rel","width","height","loading"],FORBID_TAGS:["script","iframe","object","embed","form","input"],FORBID_ATTR:["onclick","oninput","onload","onmouseover","onsubmit","onerror"]}):M}const X=f("product-modal-spec-table");if(X)if(e.specTable&&e.specTable.length>0){let M=`
            <div class="mt-5">
                <p class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-3">
                    <i class="fa-solid fa-table-cells-large text-[var(--color-primary)] opacity-80"></i> Spesifikasi Produk
                </p>
                <div class="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <table class="w-full text-[13px] spec-product-table">
                        <tbody>`;e.specTable.forEach((D,oe)=>{const ge=oe%2===0?"bg-white dark:bg-slate-900":"bg-slate-50/80 dark:bg-slate-800/60";M+=`<tr class="${ge}">
                    <td class="py-2.5 px-4 font-semibold text-slate-600 dark:text-slate-300 w-5/12 border-r border-slate-100 dark:border-slate-700/60 align-top">${c(D.key)}</td>
                    <td class="py-2.5 px-4 text-slate-700 dark:text-slate-200 align-top">${c(D.val)}</td>
                </tr>`}),M+="</tbody></table></div></div>",X.innerHTML=typeof DOMPurify<"u"?DOMPurify.sanitize(M,{ALLOWED_TAGS:["div","p","i","table","tbody","tr","td","th","thead","br","span"],ALLOWED_ATTR:["class","style"]}):M,X.style.display=""}else X.innerHTML="",X.style.display="none";N("modal-unit-label",x);let H="";e.sku&&(H+=`<span class="bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap tracking-wider"><i class="fa-solid fa-barcode"></i> ${c(e.sku)}</span>`),e.tag&&(H+=`<span class="accent-badge px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-hashtag"></i> ${c(e.tag)}</span>`),H+='<span class="accent-badge px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-circle-check"></i> Official</span>',e.brand&&(H+=`<span class="bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-tag"></i> ${c(e.brand)}</span>`),e.poTime&&(H+=`<span class="bg-amber-500 text-white px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${c(e.poTime)}</span>`);const _=u&&parseFloat(u.poin)>0?parseFloat(u.poin):parseFloat(e.poin)||0;_>0&&(!t||F!==null)&&(H+=`<span class="bg-[var(--color-primary)] text-white px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-star"></i> +${_} Poin</span>`);const K=t&&F!==null?parseFloat(u?u.totalSold:0)||0:t?e.variants.reduce((M,D)=>M+(parseFloat(D.totalSold)||0),0):parseFloat(e.totalSold)||0;K>0&&(H+=`<span class="bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-fire-flame-curved text-orange-400"></i> ${K} Terjual</span>`),A("product-modal-badges",H),A("product-modal-wholesale-container",e.wholesale?.length&&!e.variants?.length?`
        <div class="mb-6 bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-4 border border-amber-200 dark:border-amber-800/50 shadow-inner">
            <p class="text-[10px] font-bold text-amber-600 dark:text-amber-500 mb-3 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-layer-group"></i> Harga Grosir</p>
            <div class="space-y-2">${e.wholesale.slice().sort((M,D)=>M.minQty-D.minQty).map(M=>`
                <div class="flex justify-between items-center text-sm font-bold bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-amber-100 dark:border-slate-700 shadow-sm">
                    <span class="text-slate-600 dark:text-slate-300">≥ ${parseFloat(M.minQty)} <span class="text-[10px] uppercase tracking-wider">${c(x)}</span></span>
                    <span class="text-[var(--color-primary)] font-bold">${k(M.price)}</span>
                </div>`).join("")}
            </div>
        </div>`:"");const Ze=f("product-modal-admin-info");if(Ze)if(window.isAdm&&window.curViewName==="view-admin"){const M=i.store.useStock===!0||i.store.useStock==="true",D=e.variants?.length>0,oe=u?u.hpp||0:e.hpp||0;u?u.stock!==void 0&&u.stock:e.stock!==void 0&&e.stock;const ge=u?u.price||e.price||0:e.price||0,me=oe>0?Math.round((ge-oe)/ge*100):null;let _e="";if(M)if(D)_e=`<div class="col-span-2 space-y-1.5">${(e.variants||[]).map(ne=>{const ke=parseFloat(ne.stock)||0;return`<div class="flex justify-between items-center text-[11px] font-bold bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-700">
                            <span class="text-slate-500 flex items-center gap-1.5">${ne.colorCode?`<span class="w-3 h-3 rounded-full inline-block" style="background:${c(ne.colorCode)}"></span>`:""}${c(ne.name)}</span>
                            <span class="${ke===0?"text-rose-500":ke<=5?"text-amber-500":"text-emerald-500"} font-bold">${ke} ${c(ne.unit||e.unit||"pcs")}</span>
                        </div>`}).join("")}</div>`;else{const ne=parseFloat(e.stock)||0;_e=`<div class="flex flex-col gap-1"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Sisa Stok</p><p class="font-bold text-xl ${ne===0?"text-rose-500":ne<=5?"text-amber-500":"text-blue-500"}">${ne} <span class="text-sm font-bold">${c(e.unit||"pcs")}</span></p></div>`}Ze.innerHTML=`
            <div class="mb-6 bg-[rgba(var(--color-primary-rgb),0.05)] dark:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-2xl p-4 border border-[var(--color-primary)]/20">
                <p class="text-[10px] font-bold text-[var(--color-primary)] mb-3 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-lock"></i> Info Seller</p>
                <div class="grid grid-cols-2 gap-3">
                    <div class="flex flex-col gap-1">
                        <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">HPP / Modal</p>
                        <p class="font-bold text-lg text-amber-500">${k(oe)}</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Margin</p>
                        <p class="font-bold text-lg ${me===null?"text-slate-400":me>=30?"text-emerald-500":me>=10?"text-amber-500":"text-rose-500"}">${me!==null?me+"%":"—"}</p>
                    </div>
                    ${_e}
                </div>
                <button onclick="closeProductModal(); setTimeout(()=>{ if(window.openAdminTab) openAdminTab('products'); setTimeout(()=> { if(window.oAEd) oAEd('products', ${e.id}); }, 200); }, 400);" class="mt-3 w-full py-2.5 rounded-xl border border-[var(--color-primary)]/30 dark:border-[var(--color-primary)]/40 bg-white dark:bg-slate-800 text-[var(--color-primary)] font-bold text-[11px] uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-all flex items-center justify-center gap-2">
                    <i class="fa-solid fa-pen-to-square"></i> Edit Produk
                </button>
            </div>`}else Ze.innerHTML="";if(a)if(t&&F===null?(L("modal-active-controls"),L("modal-inactive-controls")):(t?u.isActive!==!1&&u.isActive!=="false":!0)?(B("modal-active-controls"),L("modal-inactive-controls")):(L("modal-active-controls"),B("modal-inactive-controls")),t){B("product-modal-options-container");let M='<div class="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(95px,1fr))] gap-2 sm:gap-3 w-full">';M+=e.variants.map((D,oe)=>{let ge=D.isActive!==!1&&D.isActive!=="false";const me=i.store.useStock===!0||i.store.useStock==="true",_e=parseFloat(D.stock)||0,ne=me&&_e<=0;let ke=ge&&!ne,os=D.colorCode?`<span class="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 mb-2 shrink-0" style="background-color: ${c(D.colorCode)};"></span>`:"",xa="";ke?oe===F?xa="bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] text-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:text-[var(--color-primary)] shadow-sm":xa="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-[var(--color-primary)]/40 hover:shadow-sm":xa="bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 opacity-60 cursor-not-allowed";const ns=ke&&(D.colorCode||D.img)?`<span onclick="event.stopPropagation(); previewVariant(${oe})" class="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/90 dark:bg-slate-700/90 shadow-sm flex items-center justify-center text-slate-500 hover:text-[var(--color-primary)] hover:scale-110 active:scale-90 transition-all border border-slate-200/50 dark:border-slate-600/50" title="Perbesar"><i class="fa-solid fa-magnifying-glass-plus text-[9px]"></i></span>`:"";return`<button ${ke?"":"disabled"} class="relative p-2.5 sm:p-3 rounded-xl text-[10px] sm:text-[11px] font-bold uppercase tracking-wide border-2 transition-all active:scale-95 flex flex-col items-center justify-start text-center h-full ${xa}" ${ke?`onclick="selectVariant(${oe})"`:""}>
                    ${ns}
                    ${os} 
                    <span class="${ke?"":"line-through"} leading-snug break-words w-full ${D.colorCode?"":"my-auto"}">${c(D.name)}</span>
                    ${ne&&ge?'<span class="text-[8px] font-bold text-rose-500 normal-case mt-0.5">Stok Habis</span>':""}
                </button>`}).join(""),M+="</div>",A("product-modal-options",M)}else L("product-modal-options-container");else L("modal-active-controls"),B("modal-inactive-controls"),L("product-modal-options-container");Pa()},Pa=()=>{if(!w)return;if(w.variants?.length>0&&F===null){N("btn-modal-price-preview","Rp 0");const d=f("sticky-modal-price");d&&(d.innerText="Pilih Varian");return}let e=(w.variants||[])[F],t=e?.price??w.price;const r=e?.name||null;let s=0;r?s=parseFloat(C.find(d=>d.id===w.id&&d.variantName===r)?.qty||0):s=C.filter(d=>d.id===w.id).reduce((d,p)=>d+(parseFloat(p.qty)||0),0);let o=ae+s;if(w.wholesale?.length){for(let d of w.wholesale.slice().sort((p,m)=>m.minQty-p.minQty))if(o>=parseFloat(d.minQty)){t=d.price;break}}const n=k(t*ae);N("btn-modal-price-preview",n);const l=f("sticky-modal-price");l&&(l.innerText=n)},zs=e=>{const a=i.store.useStock===!0||i.store.useStock==="true",t=w?.variants?.[F],r=t?.name||null,s=a?r?parseFloat(t?.stock)||0:parseFloat(w?.stock)||0:1/0,o=parseFloat(Math.min(s,Math.max(.01,ae+e)).toFixed(2));Ua(o),de("modal-qty-input",ae),Pa(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),a&&s!==1/0&&ae>=s&&g(`Maks stok: ${s}`)},Qs=e=>{const a=i.store.useStock===!0||i.store.useStock==="true",t=w?.variants?.[F],r=t?.name||null,s=a?r?parseFloat(t?.stock)||0:parseFloat(w?.stock)||0:1/0;let o=parseFloat(e);(isNaN(o)||o<=0)&&(o=.01),o=Math.min(s,o);const n=parseFloat(o.toFixed(2));Ua(n),de("modal-qty-input",ae),Pa(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Js=e=>{Da(e),Sa(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Ys=(e=null)=>{if(w.variants?.length>0&&F===null)return g("Pilih varian / warna terlebih dahulu!");if(i.store.useStock===!0||i.store.useStock==="true"){const d=w.variants?.[F],p=d?.name||null,m=p?parseFloat(d.stock)||0:parseFloat(w.stock)||0,u=C.find(h=>h.id===w.id&&h.variantName===p),x=u&&parseFloat(u.qty)||0;if(ae+x>m)return g(`Stok tidak cukup! Tersisa: ${m}`)}const t=w.variants?.[F],r=t?.name||null,s=C.find(d=>d.id===w.id&&d.variantName===r),o=t?.unit||w.unit||"pcs",n=t?.img||w.img;if(s)s.qty=parseFloat((s.qty+ae).toFixed(2)),s.unit=o;else{const d=t&&parseFloat(t.poin)>0?parseFloat(t.poin):parseFloat(w.poin)||0;C.push({id:w.id,name:w.name,variantName:r,price:t?.price??w.price,img:n,qty:ae,unit:o,poTime:w.poTime||"",colorCode:t?.colorCode||"",poin:d})}J(),typeof analytics<"u"&&analytics.logEvent("add_to_cart",{item_id:w.id,item_name:w.name,quantity:ae});const l=e instanceof HTMLElement?e:f("product-modal-img")||e;typeof window.flyToCartAnimation=="function"?window.flyToCartAnimation(l,"#bnav-cart",n):typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),ya(),g("Berhasil Masuk Keranjang","success")},Xs=()=>{if(w.variants?.length>0&&F===null)return g("Pilih varian / warna terlebih dahulu!");if(i.store.useStock===!0||i.store.useStock==="true"){const n=w.variants?.[F],l=n?.name||null,d=l?parseFloat(n.stock)||0:parseFloat(w.stock)||0,p=C.find(u=>u.id===w.id&&u.variantName===l),m=p&&parseFloat(p.qty)||0;if(ae+m>d)return g(`Stok tidak cukup! Tersisa: ${d}`)}const a=w.variants?.[F],t=a?.name||null,r=C.find(n=>n.id===w.id&&n.variantName===t),s=a?.unit||w.unit||"pcs",o=a?.img||w.img;if(r)r.qty=parseFloat((r.qty+ae).toFixed(2)),r.unit=s;else{const n=a&&parseFloat(a.poin)>0?parseFloat(a.poin):parseFloat(w.poin)||0;C.push({id:w.id,name:w.name,variantName:t,price:a?.price??w.price,img:o,qty:ae,unit:s,poTime:w.poTime||"",colorCode:a?.colorCode||"",poin:n})}if(J(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success"),ya(!0),typeof window.changeView=="function"){try{window.history.replaceState({view:"view-checkout"},"",window.location.pathname)}catch{}window.changeView("view-checkout",!0)}},Zs=()=>{if(!w)return;const e=(i.store.wa||"").replace(/\D/g,"");if(!e)return g("Nomor WhatsApp toko belum diatur admin.");let a=e;a.startsWith("0")?a="62"+a.slice(1):a.startsWith("62")||(a="62"+a);const t=w.variants?.[F],r=t?.name?` (Varian: ${t.name})`:"",s=t?.price??w.price,o=`Halo ${i.store.name||"Toko Putri"}, saya ingin bertanya tentang produk *${w.name}*${r} seharga ${k(s)}. Apakah produk ini siap kirim?`;typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),typeof window.openWhatsApp=="function"?window.openWhatsApp(a,o):window.open(`https://wa.me/${a}?text=${encodeURIComponent(o)}`,"_blank","noopener,noreferrer")},er=()=>{if(w.variants?.length>0&&F===null)return g("Pilih varian / warna terlebih dahulu!");const e=w.variants?.[F],a=e?.name||null;if(se.find(t=>t.id===w.id&&t.variantName===a))return g("Sudah di Favorit!");se.push({id:w.id,name:w.name,variantName:a,price:e?.price??w.price,img:e?.img||w.img,colorCode:e?.colorCode||""}),V("freshmart_wishlist",JSON.stringify(se)),typeof window.updWish=="function"&&window.updWish(),ya(),g("Masuk Favorit ❤️")},ar=()=>{if(!w)return;const e=window.location.origin+window.location.pathname+"?p="+w.id,a=w.name,t=`Cek produk ${w.name} di ${i.store.name} sekarang!`;if(navigator.share)navigator.share({title:a,text:t,url:e}).catch(r=>{console.log("User membatalkan share",r)});else if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(e).then(()=>g("Link produk berhasil disalin!")).catch(()=>g("Gagal menyalin link."));else{const r=document.createElement("textarea");r.value=e,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),g("Link produk berhasil disalin!")}},Rt=e=>{const a=f("product-modal-related-container");if(!a)return;if(!e||!i.products||!i.products.length){a.innerHTML="",a.classList.add("hidden");return}const t=String(e.id),r=(e.subCategory||"").trim().toLowerCase(),s=(e.category||"").trim().toLowerCase(),o=(e.brand||"").trim().toLowerCase(),l=i.products.filter(m=>!(!m||m.id==null||String(m.id)===t||m.isActive===!1||m.isActive==="false")).map(m=>{let u=0;const x=(m.subCategory||"").trim().toLowerCase(),h=(m.category||"").trim().toLowerCase(),b=(m.brand||"").trim().toLowerCase();return r&&x&&r===x&&(u+=6),s&&h&&s===h&&(u+=3),o&&b&&o===b&&(u+=2),{item:m,score:u}}).filter(m=>m.score>0);l.sort((m,u)=>u.score-m.score||(u.item.id||0)-(m.item.id||0));const d=l.slice(0,8).map(m=>m.item);if(!d.length){a.innerHTML="",a.classList.add("hidden");return}a.classList.remove("hidden");const p=d.map(m=>{const u=z(m.img,"w300-rw"),x=m.variants&&m.variants.length>0?Math.min(...m.variants.map(b=>parseFloat(b.price)||m.price)):m.price||0;let h=m.subCategory||m.brand||m.category||"";return`
        <div onclick="openProductModal('${c(m.id)}')" class="group cursor-pointer shrink-0 w-[145px] sm:w-[165px] bg-slate-50 dark:bg-slate-900/70 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-2.5 flex flex-col transition-all duration-300 hover:shadow-md hover:border-[var(--color-primary)]/40 hover:-translate-y-1 snap-start">
            <div class="relative aspect-square w-full rounded-xl bg-white overflow-hidden mb-2 border border-slate-100 dark:border-slate-700/50 flex items-center justify-center">
                <img loading="lazy" decoding="async" src="${c(u)}" alt="${c(m.name)}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.onerror=null;this.src='https://placehold.co/300?text=No+Image'">
                ${h?`<span class="absolute top-1.5 left-1.5 bg-slate-900/80 backdrop-blur-xs text-white text-[7.5px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md truncate max-w-[85%] uppercase tracking-wider">${c(h)}</span>`:""}
            </div>
            <h5 class="text-[11px] font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-tight mb-1.5 group-hover:text-[var(--color-primary)] transition-colors uppercase">${c(m.name)}</h5>
            <div class="mt-auto flex items-baseline justify-between pt-1">
                <span class="text-xs font-extrabold text-[var(--color-primary)] tracking-tight">${k(x)}</span>
                <span class="text-[9px] font-bold text-slate-400 group-hover:text-[var(--color-primary)] uppercase transition-colors">Lihat <i class="fa-solid fa-arrow-right text-[8px] ml-0.5"></i></span>
            </div>
        </div>`}).join("");a.innerHTML=`
    <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] flex items-center justify-center shrink-0">
                <i class="fa-solid fa-shapes text-sm"></i>
            </div>
            <div>
                <h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-white leading-tight">Produk Sejenis & Alternatif Pilihan</h4>
                <p class="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Pilihan rekomendasi dengan spesifikasi sejenis</p>
            </div>
        </div>
        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">${d.length} Pilihan</span>
    </div>
    <div class="flex gap-2.5 overflow-x-auto pb-2 pt-1 hide-scrollbar -mx-1 px-1 snap-x snap-mandatory">
        ${p}
    </div>`};let pe=null,Oe=0,ce=1;const Na=e=>{const a=i.products.find(n=>String(n.id)===String(e));if(!a)return;pe=a,ce=1;const t=i.store.useStock===!0||i.store.useStock==="true";let r=0;if(a.variants&&a.variants.length>0){const n=a.variants.findIndex(l=>{const d=l.isActive!==!1&&l.isActive!=="false",p=parseFloat(l.stock)||0;return d&&(!t||p>0)});r=n>=0?n:0}Oe=r,_t();const s=f("quick-variant-modal"),o=f("quick-variant-content");s&&o&&(s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("quickVariant"),yt(s,o)),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Ya=(e=!1)=>{const a=f("quick-variant-modal"),t=f("quick-variant-content");if(a&&t){const r=()=>{Pt(a,t)};typeof window.requestCloseModal=="function"?window.requestCloseModal("quickVariant",e,r):r()}},tr=e=>{!pe||!pe.variants||!pe.variants[e]||(Oe=e,_t(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},sr=e=>{if(!pe)return;const a=i.store.useStock===!0||i.store.useStock==="true",t=pe.variants?.[Oe],r=a?parseFloat(t?.stock)||0:1/0;ce=Math.min(r,Math.max(1,ce+e));const o=f("quick-variant-qty-input");o&&(o.value=ce),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},_t=()=>{if(!pe)return;const e=pe,a=e.variants?.[Oe],t=i.store.useStock===!0||i.store.useStock==="true",r=f("quick-variant-img");r&&(r.src=z(a?.img||e.img||"","w300-rw")),N("quick-variant-title",e.name);const s=a?.price??e.price;N("quick-variant-price",k(s));const o=parseFloat(a?.stock)||0,n=f("quick-variant-stock");n&&(t?(n.innerText=o>0?`Sisa: ${o} ${a?.unit||e.unit||"pcs"}`:"Stok Habis",n.className=`text-[10px] font-bold ${o>0?"text-slate-400 dark:text-slate-500":"text-rose-500"}`):(n.innerText="Tersedia",n.className="text-[10px] font-bold text-emerald-500"));const l=f("quick-variant-selected-name");l&&(l.innerText=a?`Varian: ${a.name}`:"Pilih Varian");const d=f("quick-variant-qty-input");d&&(d.value=ce);const p=f("quick-variant-options");p&&e.variants&&(p.innerHTML=e.variants.map((h,b)=>{const v=h.isActive!==!1&&h.isActive!=="false",y=parseFloat(h.stock)||0,$=t&&y<=0,I=v&&!$,O=b===Oe;let R="";I?O?R="bg-[rgba(var(--color-primary-rgb),0.1)] border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-xs ring-1 ring-[var(--color-primary)]/40":R="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[var(--color-primary)]/40":R="bg-slate-100 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-400 opacity-50 cursor-not-allowed";const X=h.colorCode?`<span class="w-3.5 h-3.5 rounded-full shrink-0 border border-black/10 shadow-xs" style="background-color: ${c(h.colorCode)}"></span>`:"";return`
                <button ${I?"":"disabled"} onclick="selectQuickVariant(${b})" class="px-3 py-2 rounded-xl text-xs font-bold border transition-all active:scale-95 flex items-center gap-2 cursor-pointer ${R}">
                    ${X}
                    <span class="${I?"":"line-through"}">${c(h.name)}</span>
                    ${$?'<span class="text-[9px] text-rose-500 font-bold ml-1">Habis</span>':""}
                </button>
            `}).join(""));const m=t&&o<=0,u=f("quick-variant-btn-cart"),x=f("quick-variant-btn-buy");u&&x&&(m?(u.disabled=!0,x.disabled=!0,u.classList.add("opacity-50","cursor-not-allowed"),x.classList.add("opacity-50","cursor-not-allowed")):(u.disabled=!1,x.disabled=!1,u.classList.remove("opacity-50","cursor-not-allowed"),x.classList.remove("opacity-50","cursor-not-allowed")))},rr=(e=null)=>{if(!pe)return;const a=pe,t=a.variants?.[Oe];if(!t)return g("Pilih varian terlebih dahulu");const r=i.store.useStock===!0||i.store.useStock==="true",s=parseFloat(t.stock)||0,o=t.name,n=C.find(u=>u.id===a.id&&u.variantName===o),l=n&&parseFloat(n.qty)||0;if(r&&ce+l>s)return g(`Stok tidak cukup! Tersisa: ${s}`);const d=t.unit||a.unit||"pcs",p=t.img||a.img;if(n)n.qty=parseFloat((n.qty+ce).toFixed(2)),n.unit=d;else{const u=t&&parseFloat(t.poin)>0?parseFloat(t.poin):parseFloat(a.poin)||0;C.push({id:a.id,name:a.name,variantName:o,price:t.price||a.price,img:p,qty:ce,unit:d,poTime:a.poTime||"",colorCode:t.colorCode||"",poin:u})}J(),typeof analytics<"u"&&analytics.logEvent("add_to_cart",{item_id:a.id,item_name:a.name,quantity:ce});const m=e instanceof HTMLElement?e:f("quick-variant-img");typeof window.flyToCartAnimation=="function"?window.flyToCartAnimation(m,"#bnav-cart",p):typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),Ya(),g(`"${a.name} (${o})" masuk ke keranjang`,"success")},ir=()=>{if(!pe)return;const e=pe,a=e.variants?.[Oe];if(!a)return g("Pilih varian terlebih dahulu");const t=i.store.useStock===!0||i.store.useStock==="true",r=parseFloat(a.stock)||0,s=a.name,o=C.find(p=>p.id===e.id&&p.variantName===s),n=o&&parseFloat(o.qty)||0;if(t&&ce+n>r)return g(`Stok tidak cukup! Tersisa: ${r}`);const l=a.unit||e.unit||"pcs",d=a.img||e.img;if(o)o.qty=parseFloat((o.qty+ce).toFixed(2)),o.unit=l;else{const p=a&&parseFloat(a.poin)>0?parseFloat(a.poin):parseFloat(e.poin)||0;C.push({id:e.id,name:e.name,variantName:s,price:a.price||e.price,img:d,qty:ce,unit:l,poTime:e.poTime||"",colorCode:a.colorCode||"",poin:p})}if(J(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy"),Ya(!0),typeof window.changeView=="function"){try{window.history.replaceState({view:"view-checkout"},"",window.location.pathname)}catch{}window.changeView("view-checkout",!0)}};window.openProductModal=Ja;window.closeProductModal=ya;window.renderRelatedProducts=Rt;window.previewVariant=Us;window.previewProductImage=qs;window.closeVariantPreviewModal=Gs;window.changeSlide=Ws;window.rProdMod=Sa;window.uMPP=Pa;window.updateModalQty=zs;window.handleModalQtyChange=Qs;window.selectVariant=Js;window.confirmAddProductToCart=Ys;window.confirmAddToWishlist=er;window.shareProduct=ar;window.buyNowProduct=Xs;window.chatWAAboutProduct=Zs;window.openQuickVariantSheet=Na;window.closeQuickVariantSheet=Ya;window.selectQuickVariant=tr;window.updateQuickVariantQty=sr;window.quickVariantAddToCart=rr;window.quickVariantBuyNow=ir;let ht=null;const re=()=>{const e=we!=="Semua Produk"||Me!=="Semua Merek"||ea!==""||ue!=="Semua Jenis";Te("dynamic-banners-container","hidden",e);const a=i.store.showRewardCatalog!==!1&&i.store.showRewardCatalog!=="false"&&(i.rewards||[]).some(d=>d.isActive!=="false"&&d.isActive!==!1);Te("reward-catalog-container","hidden",e||!a),Te("dynamic-vouchers-container","hidden",e),Te("dynamic-categories-container","hidden",e),Te("dynamic-brands-container","hidden",e);const t=i.store.showCategories!==!1&&i.store.showCategories!=="false",r=i.store.showBrands!==!1&&i.store.showBrands!=="false";Te("sec-categories","hidden",e||!t),Te("sec-brands","hidden",e||!r);let s=f("dynamic-active-filter");if(!s){let d=f("product-container");d&&(d.insertAdjacentHTML("beforebegin",'<div id="dynamic-active-filter" class="transition-all w-full"></div>'),s=f("dynamic-active-filter"))}if(s)if(e){let d="Menampilkan",p="",m="fa-filter",u="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30";ea!==""?(d="Hasil Pencarian",p=`"${ea}"`,m="fa-magnifying-glass",u="text-rose-500 bg-rose-50 dark:bg-rose-900/30"):we!=="Semua Produk"?(d="Kategori Pilihan",p=we+(ue!=="Semua Jenis"?` • ${ue}`:""),m="fa-layer-group",u="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30"):Me!=="Semua Merek"?(d="Merek Pilihan",p=Me,m="fa-tag",u="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30"):ue!=="Semua Jenis"&&(d="Sub-Kategori",p=ue,m="fa-shapes",u="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30");let x="";if(we!=="Semua Produk"){const h=i.products.filter(y=>y.isActive!==!1&&y.isActive!=="false"&&y.category===we),b={};h.forEach(y=>{const $=(y.subCategory||"").trim();$&&(b[$]=(b[$]||0)+1)});const v=Object.keys(b).sort().map(y=>({name:y,count:b[y]}));v.length>0&&(x=`
                    <div class="pt-2 border-t border-slate-100 dark:border-slate-700/60">
                        <div class="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1.5 flex items-center gap-1.5">
                            <i class="fa-solid fa-shapes text-[var(--color-primary)]"></i>
                            <span>Pilih Jenis / Sub-Kategori:</span>
                        </div>
                        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar -mx-1 px-1">
                            <button onclick="filterSubCategory('Semua Jenis')" class="shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${ue==="Semua Jenis"?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}">
                                Semua Jenis
                            </button>
                            ${v.map(y=>`
                                <button onclick="filterSubCategory('${c(y.name).replace(/'/g,"\\'")}')" class="shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${ue===y.name?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}">
                                    <span>${c(y.name)}</span>
                                    <span class="text-[10px] px-1.5 py-0.2 rounded-full ${ue===y.name?"bg-white/20 text-white":"bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">${y.count}</span>
                                </button>
                            `).join("")}
                        </div>
                    </div>`)}s.innerHTML=`
            <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 flex flex-col gap-2.5 mb-5 shadow-sm">
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-3 overflow-hidden">
                        <div class="w-10 h-10 rounded-xl ${u} flex items-center justify-center shrink-0"><i class="fa-solid ${m} text-lg"></i></div>
                        <div class="flex flex-col min-w-0 pr-2">
                            <span class="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest">${d}</span>
                            <span class="text-sm font-bold text-slate-800 dark:text-white truncate leading-tight mt-0.5">${c(p)}</span>
                        </div>
                    </div>
                    <button onclick="resetSemuaFilter()" class="shrink-0 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 w-10 h-10 flex items-center justify-center rounded-xl font-bold shadow-sm hover:bg-rose-50 hover:text-rose-500 hover:border-rose-200 transition-all active:scale-95 group"><i class="fa-solid fa-xmark text-lg group-hover:rotate-90 transition-transform duration-300"></i></button>
                </div>
                ${x}
            </div>`,s.classList.remove("hidden")}else s.innerHTML="",s.classList.add("hidden");let o=i.products.filter(d=>{if(d.isActive===!1||d.isActive==="false"||we!=="Semua Produk"&&d.category!==we||ue!=="Semua Jenis"&&d.subCategory!==ue||Me!=="Semua Merek"&&d.brand!==Me)return!1;if(!ea)return!0;let p=ea.toLowerCase();return(d.name||"").toLowerCase().includes(p)||(d.sku||"").toLowerCase().includes(p)||(d.category||"").toLowerCase().includes(p)||(d.subCategory||"").toLowerCase().includes(p)||(d.brand||"").toLowerCase().includes(p)||d.variants&&d.variants.some(m=>(m.name||"").toLowerCase().includes(p)||(m.sku||"").toLowerCase().includes(p))}).sort((d,p)=>aa==="cheapest"?(d.price||0)-(p.price||0):aa==="expensive"?(p.price||0)-(d.price||0):aa==="az"?(d.name||"").localeCompare(d.name||""):aa==="za"?(p.name||"").localeCompare(d.name||""):aa==="oldest"?(d.id||0)-(p.id||0):(p.id||0)-(d.id||0));const n=f("product-container");if(!n)return;if(n.className=ut==="grid"?"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8":"flex flex-col gap-3 sm:gap-4",!o.length){n.innerHTML='<div class="col-span-full text-center py-16 sm:py-24 text-slate-500 dark:text-slate-400 font-bold bg-slate-50 dark:bg-slate-800/50 rounded-[1.5rem] border border-slate-200 border-dashed dark:border-slate-700 text-sm sm:text-base flex flex-col items-center justify-center"><div class="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm mb-4"><i class="fa-solid fa-box-open text-3xl sm:text-4xl text-slate-300 dark:text-slate-600"></i></div>Maaf, produk tidak ditemukan.<br><span class="text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 font-normal">Coba gunakan kata kunci pencarian yang berbeda atau hapus filter.</span></div>',L("load-more-container");return}const l=o.slice(0,$t*ds);n.innerHTML=l.map(d=>{let p="";const m=i.store.useStock===!0||i.store.useStock==="true";let u="";if(m){const _=d.variants&&d.variants.length?d.variants.filter(K=>K.isActive!==!1&&K.isActive!=="false").reduce((K,Ze)=>K+(parseFloat(Ze.stock)||0),0):parseFloat(d.stock)||0;_<=0?p='<div class="absolute inset-0 bg-white/75 dark:bg-slate-900/75 z-20 flex items-center justify-center rounded-2xl"><span class="bg-slate-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-lg uppercase tracking-widest"><i class="fa-solid fa-ban mr-1"></i> HABIS</span></div>':_<=5?u=`<span class="absolute top-2 left-2 z-10 bg-rose-500 text-white text-[8px] font-bold px-2 py-1 rounded-xl shadow uppercase tracking-wider"><i class="fa-solid fa-fire mr-0.5"></i> SISA ${_}</span>`:u=`<span class="absolute top-2 left-2 z-10 bg-slate-800/90 text-white text-[8px] font-bold px-2 py-1 rounded-xl shadow uppercase tracking-wider"><i class="fa-solid fa-box mr-0.5"></i> Stok ${_}</span>`}const x=!p,h=x?"cursor-pointer hover:shadow-md hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40":"cursor-not-allowed",b=x?"cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40":"cursor-not-allowed";let v="",y="";d.priceNormal&&d.priceNormal>d.price&&(v=`<span class="bg-rose-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-tags"></i> -${Math.round((d.priceNormal-d.price)/d.priceNormal*100)}%</span>`,y=`<p class="text-[10px] text-slate-600 dark:text-slate-400 line-through mb-0.5 font-bold">${k(d.priceNormal)}</p>`);let $=d.poTime?`<span class="bg-amber-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${c(d.poTime)}</span>`:"",I="";if(d.variants&&d.variants.length){const _=d.variants.map(K=>parseFloat(K.poin)||0).filter(K=>K>0);if(_.length){const K=[...new Set(_)];I=K.length===1?`<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> +${K[0]} Poin</span>`:'<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> Dapat Poin</span>'}}else parseFloat(d.poin)>0&&(I=`<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> +${parseFloat(d.poin)} Poin</span>`);const O=d.variants&&d.variants.length?d.variants.reduce((_,K)=>_+(parseFloat(K.totalSold)||0),0):parseFloat(d.totalSold)||0,R=O>0?`<span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-fire-flame-curved text-orange-400"></i> ${O} Terjual</span>`:"";let X=`<div class="mb-2.5 flex flex-wrap gap-1.5 items-center overflow-hidden shrink-0">
            ${v}
            ${$}
            ${I}
            ${R}
            ${d.subCategory?`<span class="bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-shapes"></i> ${c(d.subCategory)}</span>`:""}
            ${d.tag?`<span class="bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] dark:bg-[var(--color-primary-dark)]/50 dark:text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-hashtag"></i> ${c(d.tag)}</span>`:""}
            <span class="accent-badge px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-circle-check"></i> Official</span>
            ${d.brand?`<span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-tag"></i> ${c(d.brand)}</span>`:""}
            ${d.wholesale?.length&&!d.variants?.length?'<span class="amber-badge px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-layer-group"></i> Grosir</span>':""}
        </div>`,H=`<span class="text-[9px] text-slate-600 dark:text-slate-400 font-bold ml-0.5 mb-0.5 uppercase tracking-wide">/${c(d.unit||"PCS")}</span>`;return ut==="grid"?`
            <a href="?p=${d.id}" class="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-[1.5rem] shadow-soft ${h} transition-all duration-300 flex flex-col group relative overflow-hidden text-left" onclick="event.preventDefault(); openProductModal('${c(d.id)}')">
                ${p}
                <div class="relative aspect-square w-full bg-white flex items-center justify-center shrink-0 border-b border-slate-100 dark:border-slate-700/50">
                      ${u}
                      <img loading="lazy" decoding="async" src="${c(z(d.img,"w300-rw"))}" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${p?"grayscale opacity-50":""}">
                </div>
                <div class="flex-1 flex flex-col p-3 sm:p-4 min-w-0 bg-white dark:bg-slate-800 relative z-10">
                    ${X}
                    <h4 class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug mb-2 group-hover:text-[var(--color-primary)] transition-colors uppercase">${c(d.name)}</h4>
                    <div class="flex items-end justify-between mt-auto pt-1">
                        <div>
                            ${d.variants&&d.variants.length>0?"":y}
                            <p class="text-[var(--color-primary)] font-bold text-sm sm:text-[15px] leading-none tracking-tight">
                                ${d.variants&&d.variants.length>0?'<span class="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">PILIH VARIAN</span>':k(d.price)}
                            </p>
                            ${d.variants&&d.variants.length>0?"":H}
                        </div>
                        <button type="button" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110 active:scale-90 shadow-sm cursor-pointer z-20" onclick="quickAddOrOpenProduct(event, '${c(d.id)}')" title="Tambah ke Keranjang">
                            <i class="fa-solid fa-plus text-xs sm:text-sm"></i>
                        </button>
                    </div>
                </div>
            </a>`:`
            <a href="?p=${d.id}" class="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-[1.5rem] shadow-soft ${b} transition-all duration-300 flex items-stretch p-2.5 sm:p-3 gap-3 sm:gap-4 group relative overflow-hidden text-left" onclick="event.preventDefault(); openProductModal('${c(d.id)}')">
                ${p}
                <div class="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center p-2 border border-slate-100 dark:border-slate-700/50 overflow-hidden">
                    ${u}
                    <img loading="lazy" decoding="async" src="${c(z(d.img,"w300-rw"))}" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'" class="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 ${p?"grayscale opacity-50":""}">
                </div>
                <div class="flex-1 min-w-0 py-1 flex flex-col justify-center h-full relative z-10 pr-2">
                    ${X}
                    <h4 class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug mb-1.5 group-hover:text-[var(--color-primary)] transition-colors uppercase">${c(d.name)}</h4>
                    <div class="flex items-end justify-between mt-auto pt-1">
                        <div>
                            ${d.variants&&d.variants.length>0?"":y}
                            <p class="text-[var(--color-primary)] font-bold text-sm sm:text-[15px] leading-none tracking-tight">
                                ${d.variants&&d.variants.length>0?'<span class="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">PILIH VARIAN</span>':k(d.price)}
                            </p>
                            ${d.variants&&d.variants.length>0?"":H}
                        </div>
                        <button type="button" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110 active:scale-90 shadow-sm mr-1 cursor-pointer z-20" onclick="quickAddOrOpenProduct(event, '${c(d.id)}')" title="Tambah ke Keranjang">
                            <i class="fa-solid fa-plus text-xs sm:text-sm"></i>
                        </button>
                    </div>
                </div>
            </a>`}).join(""),l.length<o.length?B("load-more-container"):L("load-more-container")},or=(e,a)=>{e&&(e.preventDefault(),e.stopPropagation());const t=i.products.find(d=>String(d.id)===String(a));if(!t)return;if(t.variants&&t.variants.length>0){typeof Na=="function"?Na(a):typeof window.openQuickVariantSheet=="function"?window.openQuickVariantSheet(a):Ja(a);return}const r=i.store.useStock===!0||i.store.useStock==="true",s=parseFloat(t.stock)||0;if(r&&s<=0)return g("Stok produk ini sedang kosong");const o=C.find(d=>d.id===t.id&&!d.variantName),n=o&&parseFloat(o.qty)||0;if(r&&n+1>s)return g(`Maksimal stok tercapai: ${s}`);if(o)o.qty=parseFloat((o.qty+1).toFixed(2));else{const d=parseFloat(t.poin)>0?parseFloat(t.poin):0;C.push({id:t.id,name:t.name,variantName:null,price:t.price,img:t.img,qty:1,unit:t.unit||"pcs",poTime:t.poTime||"",colorCode:"",poin:d})}J();const l=e?.currentTarget||e?.target;typeof window.flyToCartAnimation=="function"?window.flyToCartAnimation(l,"#bnav-cart",t.img):typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),g(`+1 ${t.name} Masuk Keranjang`,"success")},nr=()=>{const e=f("product-container");if(!e)return;const a=6;let t="";for(let r=0;r<a;r++)t+=`
        <div class="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-[1.5rem] shadow-soft p-3 sm:p-4 flex flex-col space-y-3 overflow-hidden">
            <div class="aspect-square w-full rounded-2xl skeleton-shimmer"></div>
            <div class="h-3 w-16 rounded-full skeleton-shimmer"></div>
            <div class="h-3.5 w-full rounded-md skeleton-shimmer"></div>
            <div class="h-3 w-3/4 rounded-md skeleton-shimmer"></div>
            <div class="mt-auto pt-2 flex items-center justify-between">
                <div class="h-5 w-20 rounded-md skeleton-shimmer"></div>
                <div class="w-7 h-7 rounded-full skeleton-shimmer"></div>
            </div>
        </div>`;e.className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8",e.innerHTML=t},lr=e=>{At(we===e&&e!=="Semua Produk"?"Semua Produk":e),qa("Semua Jenis"),Ae(1),typeof window.rDyn=="function"&&window.rDyn();const a=document.querySelector("#view-catalog .scroll-content");a&&setTimeout(()=>a.scrollTo({top:0,behavior:"smooth"}),10)},dr=e=>{qa(ue===e?"Semua Jenis":e),Ae(1),re();const a=document.querySelector("#view-catalog .scroll-content");a&&setTimeout(()=>a.scrollTo({top:0,behavior:"smooth"}),10)},cr=e=>{Tt(Me===e&&e!=="Semua Merek"?"Semua Merek":e),Ae(1),typeof window.rDyn=="function"&&window.rDyn();const a=document.querySelector("#view-catalog .scroll-content");a&&setTimeout(()=>a.scrollTo({top:0,behavior:"smooth"}),10)},pr=()=>{At("Semua Produk"),qa("Semua Jenis"),Tt("Semua Merek"),Mt(""),Ae(1),typeof window.rDyn=="function"&&window.rDyn()},mr=e=>{clearTimeout(ht),ht=setTimeout(()=>{Mt(e),Ae(1),re()},300)},ur=e=>{cs(e),Ae(1),re()},br=e=>{ps(e),Ae(1),f("btn-view-grid")&&(f("btn-view-grid").className=e==="grid"?"w-8 h-8 rounded-xl flex items-center justify-center text-[var(--color-primary)] bg-white dark:bg-slate-700 shadow-sm transition-all":"w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-all"),f("btn-view-list")&&(f("btn-view-list").className=e==="list"?"w-8 h-8 rounded-xl flex items-center justify-center text-[var(--color-primary)] bg-white dark:bg-slate-700 shadow-sm transition-all":"w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-all"),re()},gr=()=>{Ae($t+1),re()};window.rCat=re;window.filterCategory=lr;window.filterSubCategory=dr;window.filterBrand=cr;window.resetSemuaFilter=pr;window.handleSearch=mr;window.handleSort=ur;window.toggleView=br;window.loadMoreProducts=gr;window.quickAddOrOpenProduct=or;window.renderCatalogSkeleton=nr;const Xa={products:[{key:"name",label:"Nama Produk",type:"text"},{key:"sku",label:"Barcode / SKU (Kosongkan utk Auto)",type:"text"},{key:"price",label:"Harga Jual Promo (Rp)",type:"number"},{key:"priceNormal",label:"Harga Coret / Normal (Rp) - Opsional",type:"number"},{key:"hpp",label:"Harga Modal / HPP (Rp) — Hanya Seller",type:"number"},{key:"poin",label:"Poin Member (per unit terjual, Produk Tanpa Varian)",type:"number"},{key:"stock",label:"Stok Awal (Qty) — Aktif jika Manajemen Stok ON",type:"number"},{key:"unit",label:"Satuan Dasar (Cth: Pcs, Kg)",type:"text"},{key:"poTime",label:"Estimasi Pre-Order (Opsional)",type:"text"},{key:"video",label:"Link Video YouTube (Opsional)",type:"text"},{key:"img",label:"URL Gambar",type:"text"},{key:"category",label:"Kategori",type:"dynamic_select_category"},{key:"subCategory",label:"Jenis / Sub-Kategori (Cth: Cat Tembok, Pipa PVC, Power Tools)",type:"text"},{key:"brand",label:"Merek",type:"dynamic_select_brand"},{key:"tag",label:"Label/Tag",type:"text"},{key:"isActive",label:"Status",type:"select",options:[{val:"true",text:"Tersedia"},{val:"false",text:"Habis"}]},{key:"desc",label:"Deskripsi Lengkap",type:"richtext"},{key:"specTable",label:"Tabel Spesifikasi (Opsional)",type:"spec_table_builder"},{key:"wholesale",label:"Grosir",type:"wholesale_builder"},{key:"variants",label:"Varian",type:"variants_builder"}],colors:[{key:"name",label:"Nama Warna",type:"text"},{key:"hex",label:"Kode Warna (Hex) - Opsional",type:"text"},{key:"catalog",label:"Katalog / Merek (Contoh: No Drop)",type:"text"}],categories:[{key:"name",label:"Kategori",type:"text"},{key:"img",label:"URL Ikon",type:"text"}],brands:[{key:"name",label:"Nama Merek",type:"text"},{key:"img",label:"URL Logo Merek",type:"text"}],banks:[{key:"bankName",label:"Nama Bank",type:"text"},{key:"bankAccount",label:"No. Rekening",type:"text"},{key:"bankOwner",label:"Atas Nama",type:"text"}],customers:[{key:"name",label:"Nama Lengkap",type:"text"},{key:"phone",label:"No. WhatsApp Aktif (Cth: 081234567890)",type:"text"},{key:"points",label:"Poin Member (Penyesuaian Manual)",type:"number"}],rewards:[{key:"name",label:"Nama Hadiah",type:"text"},{key:"img",label:"URL Gambar Hadiah",type:"text"},{key:"pointsCost",label:"Poin yang Dibutuhkan",type:"number"},{key:"stock",label:"Stok Hadiah Tersedia",type:"number"},{key:"isActive",label:"Status",type:"select",options:[{val:"true",text:"Aktif (Bisa Ditukar)"},{val:"false",text:"Nonaktif"}]}],banners:[{key:"title",label:"Judul Banner",type:"text"},{key:"desc",label:"Deskripsi Pendek (Opsional)",type:"textarea"},{key:"type",label:"Tipe Banner",type:"select",options:[{val:"image",text:"🖼 Gambar (Default)"},{val:"video",text:"🎬 Video (Drive / YouTube / MP4)"}]},{key:"img",label:"URL Gambar (jika Tipe = Gambar)",type:"text"},{key:"videoUrl",label:"URL / Link Video (Google Drive, YouTube, atau MP4)",type:"text"},{key:"link",label:"Link Tujuan Klik (Opsional)",type:"text"}],vouchers:[{key:"code",label:"Kode Voucher (Cth: MERDEKA50)",type:"text"},{key:"type",label:"Jenis Diskon",type:"select",options:[{val:"percent",text:"Potongan Persen (%)"},{val:"flat",text:"Potongan Rupiah (Rp)"},{val:"shipping_free",text:"Gratis Ongkir (100%)"},{val:"shipping_flat",text:"Potongan Ongkir (Rp)"}]},{key:"value",label:"Nilai Potongan (Contoh: 50 untuk %, atau 10000 untuk Rp)",type:"number"},{key:"minPurchase",label:"Syarat Minimal Belanja (Rp) - 0 Jika Tidak Ada",type:"number"},{key:"maxDiscount",label:"Maksimal Nominal Potongan (Rp) - Khusus Tipe Persen",type:"number"},{key:"targetProduct",label:"Target Produk Spesifik (Pilih jika berlaku khusus)",type:"dynamic_select_products"},{key:"isShow",label:"Tampilkan di Beranda?",type:"select",options:[{val:"true",text:"Ya, Tampilkan Promo"},{val:"false",text:"Sembunyikan"}]}]};window.aF=Xa;let ia=null,ha=!1,Ra=!1;const _a=e=>{Ra=!!e,typeof window<"u"&&(window.__isLoggingIn=Ra)},Ft=()=>Ra||typeof window<"u"&&!!window.__isLoggingIn,fr=()=>{if(typeof navigator>"u")return"Perangkat Lain";const e=navigator.userAgent||"",a=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e);let t="Perangkat";/iPhone|iPad|iPod/i.test(e)?t="iPhone/iPad":/Android/i.test(e)?t="HP Android":/Windows/i.test(e)?t="Desktop Windows":/Mac/i.test(e)?t="Mac/MacBook":/Linux/i.test(e)?t="Linux PC":t=a?"Smartphone":"Komputer Desktop";let r="Browser";return/Edg/i.test(e)?r="Edge":/Chrome/i.test(e)?r="Chrome":/Safari/i.test(e)?r="Safari":/Firefox/i.test(e)&&(r="Firefox"),`${t} (${r})`},Ot=async(e=null)=>{const a=typeof S<"u"&&S?S:window.db;if(!a)return null;const t=e||localStorage.getItem("freshmart_admin_session_id")||"sess_"+Date.now()+"_"+Math.random().toString(36).substring(2,9),r=fr();try{return localStorage.setItem("freshmart_admin_session_id",t),await a.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").set({sessionId:t,deviceName:r,loginAt:ee.firestore.FieldValue.serverTimestamp(),lastActive:ee.firestore.FieldValue.serverTimestamp()}),ha=!1,t}catch(s){return console.warn("Gagal mengklaim sesi admin aktif:",s),null}},xr=e=>{let a=document.getElementById("session-kicked-modal");a||(a=document.createElement("div"),a.id="session-kicked-modal",a.className="fixed inset-0 z-[150] bg-slate-900/80 flex items-center justify-center p-4 transition-opacity duration-300",document.body.appendChild(a)),a.innerHTML=`
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
    `,a.style.display="flex",a.style.opacity="1";const t=document.getElementById("btn-session-kicked-ok");t&&(t.onclick=()=>{a.style.opacity="0",setTimeout(()=>{a.style.display="none"},250)})},$a=()=>{if(ia)return;const e=typeof S<"u"&&S?S:window.db;!e||!localStorage.getItem("freshmart_admin_session_id")||(ha=!1,ia=e.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").onSnapshot(async t=>{if(!t.exists)return;const r=t.data(),s=r.sessionId,o=localStorage.getItem("freshmart_admin_session_id");if(s&&o&&s!==o){if(ha)return;ha=!0,Aa(),localStorage.removeItem("freshmart_admin_session_id");const n=r.deviceName||"Perangkat Lain";try{window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,te&&typeof te.signOut=="function"&&await te.signOut()}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog"),xr(n)}},t=>{console.warn("Admin session guard listener error:",t)}))},Aa=()=>{ia&&(ia(),ia=null)},Ht=async()=>{if(Ft())return!0;const e=typeof S<"u"&&S?S:window.db;if(!e)return!0;const a=localStorage.getItem("freshmart_admin_session_id");if(!a)try{return!(await e.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").get()).exists}catch{return!0}try{const t=await e.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").get();return t.exists?t.data().sessionId===a:!0}catch{return!0}};typeof window<"u"&&(window.claimAdminSession=Ot,window.attachAdminSessionGuard=$a,window.detachAdminSessionGuard=Aa,window.isCurrentSessionActive=Ht,window.setLoggingIn=_a,window.isLoggingIn=Ft);const hr=async()=>{const e=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";if(window.isAdm||e){if(!await Ht()&&te.currentUser){Aa(),localStorage.removeItem("freshmart_admin_session_id"),await te.signOut(),window.isAdm=!1,window.__localIsAdm=!1,g("Sesi Admin telah diambil alih oleh perangkat lain."),de("login-username",""),de("login-password",""),typeof window.changeView=="function"&&window.changeView("view-admin-login");return}if(window.__localIsAdm=!0,typeof window.changeView=="function"&&window.changeView("view-admin"),$a(),te.currentUser)ka();else{const t=te.onAuthStateChanged(()=>{t(),ka()})}}else de("login-username",""),de("login-password",""),typeof window.changeView=="function"&&window.changeView("view-admin-login")},ka=()=>{$a();const e=document.querySelector("#view-admin .scroll-content");e&&(e.scrollTop=0),B("admin-dashboard-view"),L("admin-content-view"),L("btn-admin-back"),B("admin-logo-box"),N("admin-header-title","CMS SELLER"),Ct(""),window.cTab="";try{history.state&&history.state.tab&&history.replaceState({view:"view-admin"},"",window.location.href)}catch{}De&&(De(),na(null)),je&&(je(),ta(null)),Le&&(Le(),sa(null)),Kt(ms),Za()},Za=()=>{const e=f("admin-menu-tax-btn");if(!e)return;i.store.ppnEnabled===!0||i.store.ppnEnabled==="true"?(e.classList.remove("hidden"),e.classList.add("flex")):(e.classList.add("hidden"),e.classList.remove("flex"))},Ta=()=>{const e=i.store.useStock===!0||i.store.useStock==="true";let a=0,t=0,r=0,s=0,o=0,n=0;return(i.products||[]).forEach(l=>{if(l.variants&&l.variants.length)l.variants.forEach(d=>{const p=d.isActive!==!1&&d.isActive!=="false",m=parseFloat(d.stock)||0;p&&(!e||m>0)?r++:s++,o+=(parseFloat(d.hpp)||0)*m,n+=(parseFloat(d.price)||0)*m});else{const d=l.isActive!==!1&&l.isActive!=="false",p=parseFloat(l.stock)||0;d&&(!e||p>0)?a++:t++,o+=(parseFloat(l.hpp)||0)*p,n+=(parseFloat(l.price)||0)*p}}),{activeProd:a,inactiveProd:t,activeVar:r,inactiveVar:s,assetHpp:o,assetJual:n}},kt=new Map,kr=2*60*1e3,Kt=async(e="month")=>{if(us(e),document.querySelectorAll(".report-period-btn").forEach(u=>{const x=u.dataset.period===e;u.style.background=x?"var(--color-primary)":"transparent",u.style.color=x?"var(--color-primary-contrast, #fff)":"",u.style.boxShadow=x?"0 2px 8px rgba(var(--color-primary-rgb),0.35)":"none"}),!f("admin-report-container"))return;const t=({totalPenjualan:u,totalHppTerjual:x,totalDiskonProduk:h,orderCount:b,truncated:v})=>{const y=u-x,$=y-h,I={today:"Hari Ini",week:"Minggu Ini",month:"Bulan Ini",all:"Sepanjang Waktu"}[e]||"";A("admin-report-container",`
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Total Penjualan (${I})</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white truncate">${k(u)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">${b} pesanan${v?" (≥3000, dibatasi)":""}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1.5"><i class="fa-solid fa-arrow-trend-up mr-1"></i>Laba Kotor</p>
                    <p class="text-lg sm:text-xl font-bold text-[var(--color-primary)] truncate">${k(y)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Penjualan − HPP Terjual</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-rose-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-tag mr-1"></i>Total HPP Terjual</p>
                    <p class="text-lg sm:text-xl font-bold text-rose-500 truncate">${k(x)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Modal barang yang laku</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-sack-dollar mr-1"></i>Laba Bersih</p>
                    <p class="text-lg sm:text-xl font-bold truncate" style="color:var(--color-primary)">${k($)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Laba Kotor − Diskon</p>
                </div>
            </div>
        `)},r=kt.get(e);if(r&&Date.now()-r.timestamp<kr){t(r.data);return}A("admin-report-container",'<div class="text-center py-10"><i class="fa-solid fa-spinner fa-spin text-2xl text-slate-300"></i></div>');let s=null;const o=new Date;if(e==="today")s=new Date(o.getFullYear(),o.getMonth(),o.getDate());else if(e==="week"){const u=o.getDay(),x=u===0?6:u-1;s=new Date(o.getFullYear(),o.getMonth(),o.getDate()-x)}else e==="month"&&(s=new Date(o.getFullYear(),o.getMonth(),1));let n=0,l=0,d=0,p=0,m=!1;try{if(!te.currentUser){A("admin-report-container",'<div class="text-center py-10 text-slate-400"><i class="fa-solid fa-lock text-2xl mb-3"></i><p class="text-xs font-bold">Login terlebih dahulu untuk melihat laporan.</p></div>');return}let u=S.collection("freshmart_orders");s&&(u=u.where("timestamp",">=",ee.firestore.Timestamp.fromDate(s)));const x=await u.limit(3e3).get();m=x.size>=3e3,x.forEach(b=>{const v=b.data();v.status!=="Dibatalkan"&&(p++,n+=parseFloat(v.payment?.subtotal)||0,d+=parseFloat(v.payment?.productDiscount)||0,(v.items||[]).forEach(y=>{const $=y.hpp!==void 0&&y.hpp!==null?parseFloat(y.hpp):typeof window.getEffHpp=="function"?window.getEffHpp(y):0;l+=(parseFloat($)||0)*(parseFloat(y.qty)||0)}))});const h={totalPenjualan:n,totalHppTerjual:l,totalDiskonProduk:d,orderCount:p,truncated:m};kt.set(e,{data:h,timestamp:Date.now()}),t(h)}catch(u){console.error("Gagal memuat laporan penjualan:",u)}},wr=async()=>{const e=P("login-username"),a=P("login-password");if(!e||!a)return g("Email & Password wajib diisi!");_a(!0),j("Verifikasi Login...");try{const t="sess_"+Date.now()+"_"+Math.random().toString(36).substring(2,9);localStorage.setItem("freshmart_admin_session_id",t);const s=(await te.signInWithEmailAndPassword(e,a)).user||te.currentUser;if(!s||s.uid!==Cs){const o=s?s.uid:"null";throw await te.signOut(),localStorage.removeItem("freshmart_admin_session_id"),new Error("UID_MISMATCH: "+o)}await Ot(t),$a(),window.isAdm=!0,history.replaceState({view:"view-admin"},"",window.location.href),typeof window.changeView=="function"&&window.changeView("view-admin",!0),ka(),g("Login Berhasil!")}catch(t){if(console.error(t),localStorage.removeItem("freshmart_admin_session_id"),t.message&&t.message.startsWith("UID_MISMATCH:")){const r=t.message.replace("UID_MISMATCH: ","");g("Login Ditolak: UID Anda ("+r+") tidak cocok dengan ADMIN_UID!")}else g("Login Ditolak: Email atau Password salah!")}finally{_a(!1),T()}},Vt=async()=>{j("Keluar...");try{Aa(),localStorage.removeItem("freshmart_admin_session_id"),await te.signOut(),window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,typeof window.updateProBadge=="function"&&window.updateProBadge(),De&&(De(),na(null)),je&&(je(),ta(null)),Le&&(Le(),sa(null)),g("Berhasil Logout"),typeof window.changeView=="function"&&window.changeView("view-catalog")}catch{g("Gagal Logout")}finally{T()}},vr=()=>{$e("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{Vt()},"Ya, Keluar")};window.checkAdminAccess=hr;window.openAdminMenu=ka;window.toggleTaxMenuVisibility=Za;window.computeInventoryStats=Ta;window.loadAdminReport=Kt;window.processAdminLogin=wr;window.logoutAdmin=Vt;window.confirmLogoutAdmin=vr;const yr=async()=>{if(!Q||Q.length===0)return g("Belum ada data pesanan!");j("Menyiapkan modul Excel...");try{await It("https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js",()=>typeof XLSX<"u")}catch{T(),g("Gagal memuat modul Excel. Cek koneksi internet Anda.");return}T();let e=[];Q.forEach((n,l)=>{let d=n.dateString?new Date(n.dateString).toLocaleString("id-ID"):"-",p=n.customer?.name||"Anonim",m=n.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko";n.isDropPoint&&(m="📍 Lokasi Berbeda");let u=n.status||"-",x=n.items?n.items.reduce((b,v)=>b+(parseFloat(v.qty)||0),0):0,h=n.payment?.grandTotal||0;e.push({No:l+1,"ID Pesanan":n.orderId,Tanggal:d,"Nama Pelanggan":p,"Metode Kirim":m,Status:u,"Total Item":x,"Total Tagihan (Rp)":h})});const a=XLSX.utils.json_to_sheet(e),t=XLSX.utils.book_new();XLSX.utils.book_append_sheet(t,a,"Laporan Pesanan");const r=[{wch:5},{wch:25},{wch:22},{wch:25},{wch:15},{wch:15},{wch:12},{wch:20}];a["!cols"]=r;const o=`Laporan_Pesanan_${new Date().toISOString().split("T")[0]}.xlsx`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"){const n=XLSX.write(t,{bookType:"xlsx",type:"base64"});window.AndroidNativeApp.saveOrShareFile(n,o,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")}else XLSX.writeFile(t,o);g("Laporan Excel (.xlsx) berhasil diunduh!")},Sr=()=>{try{const e=new(window.AudioContext||window.webkitAudioContext),a=e.createOscillator(),t=e.createGain();a.connect(t),t.connect(e.destination),a.type="sine",a.frequency.setValueAtTime(800,e.currentTime),t.gain.setValueAtTime(1,e.currentTime),a.frequency.setValueAtTime(600,e.currentTime+.2),a.frequency.setValueAtTime(800,e.currentTime+.6),t.gain.setValueAtTime(1,e.currentTime+.6),a.frequency.setValueAtTime(600,e.currentTime+.8),t.gain.exponentialRampToValueAtTime(1e-5,e.currentTime+1.5),a.start(e.currentTime),a.stop(e.currentTime+1.5)}catch{}},Pr=()=>{A("admin-content",`
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
    `);const e=()=>{De&&(De(),na(null));let a=!0;const t=S.collection("freshmart_orders").orderBy("timestamp","desc").limit(100).onSnapshot(r=>{if(bt([]),!a){let o=!1;r.docChanges().forEach(n=>{n.type==="added"&&n.doc.data().status==="Baru"&&(o=!0)}),o&&(g("🔔 Pesanan Baru Masuk!"),Sr())}if(a=!1,r.empty){A("admin-orders-list",'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-receipt text-5xl mb-4 opacity-30"></i>Belum ada pesanan</div>'),N("stat-orders",0);return}N("stat-orders",r.size+(r.size===100?"+":""));const s=[];A("admin-orders-list",r.docs.map(o=>{const n=o.data();s.push(n);let l="text-slate-500 border-slate-200 dark:border-slate-600",d="fa-clock",p="bg-slate-50 dark:bg-slate-700/50",m="text-slate-400";n.status==="Baru"?(l="text-rose-500 border-rose-200 bg-rose-50 dark:bg-rose-900/20 dark:border-rose-800 animate-pulse",d="fa-asterisk",p="bg-rose-500",m="text-white shadow-md shadow-rose-500/30"):n.status==="Diproses"?(l="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30",d="fa-spinner fa-spin",p="primary-bg",m="shadow-sm"):n.status==="Selesai"?(l="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30",d="fa-check-double",p="primary-bg-soft",m="primary-text"):n.status==="Dibatalkan"&&(l="text-slate-400 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",d="fa-xmark",p="bg-slate-100 dark:bg-slate-800",m="text-slate-400");let u="fa-wallet text-slate-400",x=n.payment?.method||"";x==="transfer"?u="fa-building-columns text-[var(--color-primary)]":x==="qris"?u="fa-qrcode text-purple-500":x==="cod"?u="fa-hand-holding-dollar text-[var(--color-primary)]":x==="cashier"&&(u="fa-cash-register text-amber-500");let h=n.items?parseFloat(n.items.reduce((y,$)=>y+(parseFloat($.qty)||0),0).toFixed(2)):0;const b=n.dateString?new Date(n.dateString).toLocaleDateString("id-ID",{day:"numeric",month:"short"}):"",v=(n.orderId||"").split("-").pop();return`
                <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-primary)] transition-all duration-300" onclick="openOrderDetail('${n.orderId}')">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${p} ${m} flex items-center justify-center shrink-0 transition-colors">
                            <i class="fa-solid fa-receipt text-xl sm:text-2xl"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex justify-between items-start mb-1">
                                <div class="flex items-center gap-2">
                                    <span class="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 tracking-tight">#${v}</span>
                                    <span class="text-[9px] font-bold px-2 py-0.5 rounded border ${l} uppercase tracking-widest flex items-center"><i class="fa-solid ${d} mr-1"></i> ${c(n.status)}</span>
                                </div>
                                <span class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5 whitespace-nowrap"><i class="fa-regular fa-calendar"></i> <span class="hidden sm:inline">${b}</span></span>
                            </div>
                            <div class="flex items-center gap-2 mt-1.5">
                                <p class="text-xs font-bold text-slate-600 dark:text-slate-300 truncate max-w-[120px] sm:max-w-xs"><i class="fa-solid fa-user text-slate-400 mr-1"></i> ${c(n.customer?.name||"Anonim")}</p>
                                <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0"></span>
                                <span class="text-[9px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-xl border border-slate-200 dark:border-slate-700 uppercase tracking-widest shrink-0">${h} Item</span>
                                <span class="text-[9px] font-bold ${n.customerType==="Member"?"text-amber-600 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800":"text-slate-500 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"} px-2 py-0.5 rounded-xl uppercase tracking-widest shrink-0">${n.customerType==="Member"?'<i class="fa-solid fa-star text-amber-500 mr-1"></i>Member':"Umum"}</span>
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
                            <span class="font-bold text-[var(--color-primary)] text-lg sm:text-xl tracking-tight">${k(n.payment?.grandTotal)}</span>
                            ${n.payment?.ppnAmount?`<span class="text-[8px] font-bold bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800 uppercase tracking-widest">PPN ${n.payment.ppnRate||11}%</span>`:""}
                        </div>
                        <div class="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-700">
                            <i class="fa-solid ${u} text-xs"></i>
                            <span class="text-[9px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">${c(x)}</span>
                        </div>
                    </div>
                </div>`}).join("")),bt(s)},()=>{A("admin-orders-list",'<div class="text-center text-rose-500 font-bold">Koneksi terputus. Retrying...</div>'),setTimeout(e,5e3)});na(t)};e()},et=e=>{const a=Q.find(s=>s.orderId===e);if(!a)return;bs(e);let t=`<div class="relative w-full sm:w-40 mt-1"><select onchange="updateOrderStatus('${a.orderId}', this.value)" class="w-full text-sm font-bold ${a.status==="Baru"?"text-rose-600 bg-rose-50 border-rose-200":a.status==="Diproses"?"text-blue-600 bg-blue-50 border-blue-200":a.status==="Selesai"?"text-emerald-600 bg-emerald-50 border-emerald-200":"text-slate-500 bg-slate-50 border-slate-200"} border px-4 py-2.5 rounded-xl focus:outline-none appearance-none cursor-pointer transition-colors shadow-sm"><option value="Baru" ${a.status==="Baru"?"selected":""} class="text-slate-800">Baru (Pending)</option><option value="Diproses" ${a.status==="Diproses"?"selected":""} class="text-slate-800">Diproses</option><option value="Selesai" ${a.status==="Selesai"?"selected":""} class="text-slate-800">Selesai</option><option value="Dibatalkan" ${a.status==="Dibatalkan"?"selected":""} class="text-slate-800">Dibatalkan</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 ${a.status==="Baru"?"text-rose-400":a.status==="Diproses"?"text-blue-400":a.status==="Selesai"?"text-emerald-400":"text-slate-400"} pointer-events-none text-xs"></i></div>`;A("admin-order-modal-content",`
        <div class="flex flex-col gap-4 text-sm pb-2">
            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row justify-between gap-5 sm:items-center">
                <div class="flex-1">
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-crosshairs text-[var(--color-primary)]"></i> Status</p>
                    ${t}
                </div>
                <div class="text-left sm:text-right flex flex-col justify-center">
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">ID Pesanan</p>
                    <p class="text-sm sm:text-base font-bold text-slate-900 dark:text-white break-all tracking-wide">#${a.orderId}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1.5">${a.dateString?new Date(a.dateString).toLocaleString("id-ID"):""}</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-start">
            <div class="flex flex-col gap-4">

            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 class="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center border border-blue-100 dark:border-blue-800"><i class="fa-solid fa-user"></i></div> Data Pemesan</h4>
                <div class="space-y-4">
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold">Nama</span><span class="font-bold text-slate-900 dark:text-white text-base">${c(a.customer?.name||"-")}</span></div>
                    ${a.customer?.wa?`<div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5"><i class="fa-brands fa-whatsapp text-green-500"></i> WhatsApp</span><a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${c(a.customer.wa)}'); else window.open('https://wa.me/${c(a.customer.wa)}', '_blank', 'noopener,noreferrer');" class="font-bold text-green-600 dark:text-green-400 hover:underline cursor-pointer">+${c(a.customer.wa)}</a></div>`:""}
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold">Tipe Pemesan</span><span class="text-xs font-bold px-2.5 py-1 rounded-lg ${a.customerType==="Member"?"bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-300 dark:border-amber-700":"bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"}">${a.customerType==="Member"?"⭐ Member Resmi":"👤 Pelanggan Umum"}</span></div>
                    ${a.customer?.wa?`<button type="button" onclick="saveOrderCustomerToDB('${c(a.customer.name||"")}','${c(a.customer.wa)}')" class="w-full py-2.5 rounded-xl ${a.customerType==="Member"?"bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400":"bg-amber-500 hover:bg-amber-600 text-white shadow-md shadow-amber-500/20"} text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95"><i class="fa-solid fa-address-book"></i> ${a.customerType==="Member"?"Perbarui Data Member di Database":"+ Konfirmasi & Daftarkan Sebagai Member"}</button>`:""}
                    <div class="border-t border-dashed border-slate-200 dark:border-slate-700 pt-4">
                        <span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2 mb-2.5"><i class="fa-solid fa-map-location-dot"></i> Alamat Pemesan (${a.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko"})</span>
                        <div class="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner text-sm">${c(a.customer?.address||"-")}</div>
                        ${a.customer?.lat&&a.customer?.deliveryMethod==="delivery"&&!a.isDropPoint?`<a href="https://www.google.com/maps?q=${c(a.customer.lat)},${c(a.customer.lng)}" target="_blank" class="mt-3 flex items-center justify-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-blue-100 transition-colors"><i class="fa-solid fa-location-dot"></i> Buka Lokasi Pembeli di Google Maps</a>`:""}
                    </div>
                    ${a.isDropPoint&&a.dropPoint?`<div class="border-2 border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.04)] dark:bg-[rgba(var(--color-primary-rgb),0.1)] rounded-xl p-4 mt-2">
                        <p class="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3 flex items-center gap-1.5"><i class="fa-solid fa-location-pin-lock"></i> 📍 DIKIRIM KE LOKASI BERBEDA</p>
                        <div class="space-y-2">
                            <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Nama Penerima</span><span class="font-bold text-slate-900 dark:text-white">${c(a.dropPoint.name||"-")}</span></div>
                            ${a.dropPoint.wa?`<div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs flex items-center gap-1"><i class="fa-brands fa-whatsapp text-green-500"></i> WA Penerima</span><a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${c(a.dropPoint.wa)}'); else window.open('https://wa.me/${c(a.dropPoint.wa)}', '_blank', 'noopener,noreferrer');" class="font-bold text-green-600 dark:text-green-400 hover:underline cursor-pointer">+${c(a.dropPoint.wa)}</a></div>`:""}
                            <div class="border-t border-[var(--color-primary)]/15 pt-2 mt-2">
                                <span class="text-slate-500 dark:text-slate-400 font-bold text-xs block mb-1.5">Alamat Tujuan Pengiriman</span>
                                <div class="bg-white dark:bg-slate-800 p-3 rounded-xl border border-[var(--color-primary)]/20 font-bold text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner text-sm">${c(a.dropPoint.address||"-")}</div>
                                ${a.dropPoint.lat?`<a href="https://www.google.com/maps?q=${c(a.dropPoint.lat)},${c(a.dropPoint.lng)}" target="_blank" class="mt-2 flex items-center justify-center gap-2 bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-[rgba(var(--color-primary-rgb),0.18)] transition-colors"><i class="fa-solid fa-location-dot"></i> Buka Lokasi Tujuan di Google Maps</a>`:""}
                                ${a.dropPoint.wa?`<button type="button" onclick="konfirmasiKeWAPenerima('${a.orderId}')" class="mt-2.5 w-full py-2 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"><i class="fa-brands fa-whatsapp text-sm"></i> Notifikasi Pengiriman ke WA Penerima</button>`:""}
                            </div>
                        </div>
                    </div>`:""}
                    ${a.customer?.note?`<div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800 mt-2"><p class="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-note-sticky"></i> Catatan Pembeli</p><p class="text-sm text-amber-900 dark:text-amber-100 font-bold">${c(a.customer.note)}</p></div>`:""}
                    ${a.buktiPayment?`<div class="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl border border-violet-200 dark:border-violet-800 mt-2"><p class="text-[10px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2.5"><i class="fa-solid fa-image"></i> Bukti Pembayaran</p><a href="${c(a.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border border-violet-200 dark:border-violet-800"><img src="${c(a.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-48 object-cover" onerror="this.style.display='none'" loading="lazy"><div class="bg-violet-100 dark:bg-violet-900/40 py-2 text-center text-[10px] font-bold text-violet-600 dark:text-violet-400"><i class="fa-solid fa-arrow-up-right-from-square mr-1"></i> Tap untuk buka</div></a></div>`:""}
                </div>
            </div>

            </div>

            <div class="flex flex-col gap-4">

            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 class="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl primary-light-icon-box flex items-center justify-center border border-slate-200 dark:border-slate-700"><i class="fa-solid fa-box-open"></i></div> Rincian Item</h4>
                <div class="space-y-3">${a.items.map(s=>`
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
                                <p class="text-[11px] text-slate-500 dark:text-slate-400 font-bold">${parseFloat(s.qty)} ${c(s.unit||"pcs")} x ${k(s.effectivePrice)}</p>
                            </div>
                        </div>
                        <div class="font-bold text-sm text-slate-900 dark:text-white ml-3 shrink-0">${k(s.effectivePrice*parseFloat(s.qty))}</div>
                    </div>`).join("")}
                </div>
            </div>

            ${a.claimedReward?`
            <div class="bg-violet-50 dark:bg-violet-900/10 p-5 sm:p-6 rounded-[1.5rem] border border-violet-200 dark:border-violet-800 shadow-sm">
                <h4 class="font-bold text-violet-700 dark:text-violet-400 text-sm border-b border-violet-200 dark:border-violet-800 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl bg-violet-100 dark:bg-violet-900/40 text-violet-500 flex items-center justify-center border border-violet-200 dark:border-violet-800"><i class="fa-solid fa-gift"></i></div> Klaim Hadiah</h4>
                <div class="space-y-3">
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Hadiah</span><span class="font-bold text-violet-700 dark:text-violet-400 text-sm">${c(a.claimedReward.name)}</span></div>
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Poin Ditukar</span><span class="font-bold text-slate-800 dark:text-white text-sm">${a.claimedReward.pointsCost} Poin</span></div>
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Status</span><span class="font-bold text-xs px-2 py-1 rounded-xl ${a.claimedReward.status==="ready"?"bg-emerald-100 text-emerald-600":a.claimedReward.status==="waiting_stock"?"bg-amber-100 text-amber-600":"bg-slate-200 text-slate-600"}">${gs(a.claimedReward)}</span></div>
                    ${a.claimedReward.note?`<div class="bg-white/70 dark:bg-slate-900/40 p-2.5 rounded-xl text-[11px] italic text-violet-600 dark:text-violet-400">"${c(a.claimedReward.note)}"</div>`:""}
                    <div class="border-t border-dashed border-violet-200 dark:border-violet-800 pt-3.5 mt-1 space-y-2.5">
                        <button type="button" onclick="ackRewardClaim('${a.orderId}','ready')" class="w-full py-2.5 rounded-xl primary-bg text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i class="fa-solid fa-check"></i> Stok Ada — Kirim Bersama Pesanan</button>
                        <button type="button" onclick="ackRewardClaim('${a.orderId}','waiting_stock')" class="w-full py-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i class="fa-solid fa-clock"></i> Stok Kosong — Tunda Pengiriman</button>
                    </div>
                </div>
            </div>`:""}

            <div class="bg-slate-900 p-6 sm:p-7 rounded-[1.5rem] text-white shadow-xl shadow-slate-900/20 border border-slate-700/60 relative overflow-hidden group mt-2">
                <div class="absolute -top-10 -right-10 w-32 h-32 primary-blur-orb rounded-full blur-3xl pointer-events-none transition-all duration-700"></div>
                
                <div class="flex justify-between items-center border-b border-slate-700/80 pb-4 mb-4 relative z-10">
                    <h4 class="font-bold text-[11px] uppercase tracking-widest text-slate-300 flex items-center gap-2.5"><i class="fa-solid fa-wallet text-[var(--color-primary)] text-sm"></i> Ringkasan Bayar</h4>
                    <span class="bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] font-bold tracking-widest border border-white/10 uppercase shadow-inner text-white">${c(a.payment?.method||"").toUpperCase()}</span>
                </div>
                
                <div class="space-y-3 font-medium text-sm text-slate-300 relative z-10">
                    <div class="flex justify-between items-center"><span>Subtotal Produk</span><span class="font-bold text-white">${k(a.payment?.subtotal)}</span></div>
                    ${a.customer?.deliveryMethod==="delivery"?`<div class="flex justify-between items-center"><span>Ongkos Kirim</span><span class="font-bold text-white">${k(a.payment?.shippingCost)}</span></div>`:""}
                    ${a.payment?.shippingDiscount?`<div class="flex justify-between items-center text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.15)] px-2 py-1 -mx-2 rounded-xl"><span>Diskon Ongkir</span><span class="font-bold">-${k(a.payment.shippingDiscount)}</span></div>`:""}
                    ${a.payment?.productDiscount?`<div class="flex justify-between items-center text-rose-400 bg-rose-900/20 px-2 py-1 -mx-2 rounded-xl"><span>Diskon Promo</span><span class="font-bold">-${k(a.payment.productDiscount)}</span></div>`:""}
                    ${(()=>{if(!a.payment?.ppnAmount||a.payment.ppnAmount<=0)return"";const s=a.payment.ppnType==="inclusive",o=a.payment.ppnRate||11,n=a.payment.ppnAmount,l=(a.payment.subtotal||0)-(a.payment.productDiscount||0)+(a.payment.shippingCost||0)-(a.payment.shippingDiscount||0),d=a.payment.dppAmount||(s?Math.round(l*100/(100+o)):Math.max(0,l));return`
                        <div class="flex justify-between items-center text-slate-400"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-bold text-white">${k(d)}</span></div>
                        <div class="flex justify-between items-center text-amber-400 bg-amber-900/20 px-2 py-1 -mx-2 rounded-xl"><span>${s?"Termasuk PPN":"PPN"} (${o}%)</span><span class="font-bold">${s?"":"+"}${k(n)}</span></div>
                        `})()}
                </div>
                
                <div class="border-t border-dashed border-slate-600/60 my-5 relative z-10"></div>
                
                <div class="flex justify-between items-end relative z-10">
                    <span class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Tagihan</span>
                    <span class="text-3xl font-bold text-[var(--color-primary)] tracking-tight font-extrabold">${k(a.payment?.grandTotal)}</span>
                </div>
            </div>

            </div>
            </div>
        </div>`);const r=f("admin-order-modal");r&&r.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminOrder"),B("admin-order-modal"),setTimeout(()=>{f("admin-order-modal")&&f("admin-order-modal").classList.remove("opacity-0"),f("admin-order-modal-box")&&f("admin-order-modal-box").classList.remove("scale-95")},10)},$r=async(e,a)=>{const r=(typeof window.normalizeWA=="function"?window.normalizeWA:s=>String(s||"").replace(/\D/g,"").replace(/^0/,"62"))(a);if(!r||r.length<10)return g("Nomor WA tidak valid!");j("Menyimpan...");try{const s=S.collection("freshmart").doc("cms_data").collection("customers").doc(r),o=await s.get();o.exists?(await s.set({name:e||o.data().name},{merge:!0}),g("Data pelanggan sudah ada, nama diperbarui.")):(await s.set({id:parseInt(r,10),name:e||"-",phone:r,points:0}),g("✅ Pelanggan baru disimpan ke database!"))}catch(s){console.error("Gagal simpan pelanggan:",s),g("Gagal menyimpan data pelanggan: "+(s.message||""))}finally{T()}},Ar=async(e,a)=>{if(a==="waiting_stock"&&typeof window.customPrompt=="function"){window.customPrompt("Catatan untuk pelanggan:","Stok hadiah kosong, akan kami kirim susulan begitu stok tersedia kembali.",async r=>{if(r!==null){j("Menyimpan...");try{await S.collection("freshmart_orders").doc(e).update({"claimedReward.status":a,"claimedReward.note":r||""}),g("Status klaim hadiah diperbarui!");let s=Q.findIndex(o=>o.orderId===e);s!==-1&&(Q[s].claimedReward||(Q[s].claimedReward={}),Q[s].claimedReward.status=a,Q[s].claimedReward.note=r||""),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(s){g("Gagal update klaim: "+s.message)}finally{T()}}});return}let t="";j("Menyimpan...");try{await S.collection("freshmart_orders").doc(e).update({"claimedReward.status":a,"claimedReward.note":t});const r=Q.find(s=>s.orderId===e);r&&(r.claimedReward.status=a,r.claimedReward.note=t,et(e)),g("Status hadiah diperbarui!")}catch(r){console.error("Gagal update status hadiah:",r),g("Gagal update status hadiah: "+(r.message||""))}finally{T()}},Ut=(e=!1)=>{const a=()=>{f("admin-order-modal")&&f("admin-order-modal").classList.add("opacity-0"),f("admin-order-modal-box")&&f("admin-order-modal-box").classList.add("scale-95"),setTimeout(()=>L("admin-order-modal"),300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminOrder",e,a):a()},Tr=async(e,a)=>{if(!va){Ee(!0),j("Update...");try{await S.collection("freshmart_orders").doc(e).update({status:a});let t=Q.find(r=>r.orderId===e);t&&(t.status=a),et(e),g("Status diupdate!")}catch{g("Gagal!")}finally{Ee(!1),T()}}},Mr=async e=>{if(!e)return g("ID pesanan tidak valid!");j("Memuat data...");try{const a=await S.collection("freshmart_orders").doc(e).get();if(T(),!a.exists)return g("Data pesanan tidak ditemukan!");const t=a.data(),r=t.customer&&t.customer.wa;if(!r)return g("Nomor WhatsApp pelanggan tidak tersedia!");const s=i&&i.store&&i.store.name?i.store.name:"Toko Putri",o=t.customer&&t.customer.name?t.customer.name:"Pelanggan",n=t.status||"Baru",l=t.payment&&t.payment.grandTotal?k(t.payment.grandTotal):"-",d=t.payment&&t.payment.method?t.payment.method.toUpperCase():"-";let p="";t.isDropPoint&&t.dropPoint&&(p=`
📍 *Alamat Pengantaran (Drop-Point):*
👤 Penerima di Lokasi: *${t.dropPoint.name||"-"}* (+${t.dropPoint.wa||"-"})
🏠 Alamat Tujuan: ${t.dropPoint.address||"-"}
`);const m=`Halo *${o}*! 👋

Terima kasih telah berbelanja di *${s}*. 🛒

*Detail Pesanan Anda:*
📋 ID: *#${e.split("-").pop()}*
💰 Total: *${l}*
💳 Pembayaran: *${d}*
📦 Status: *${n}*
`+p+`
Kami akan segera memproses pesanan Anda. Terima kasih! 🙏`;typeof window.openWhatsApp=="function"?window.openWhatsApp(r,m):window.open(`https://wa.me/${r}?text=${encodeURIComponent(m)}`,"_blank","noopener,noreferrer")}catch{T(),g("Gagal memuat data pesanan!")}},Cr=async e=>{if(!e)return g("ID pesanan tidak valid!");j("Memuat data...");try{const a=await S.collection("freshmart_orders").doc(e).get();if(T(),!a.exists)return g("Data pesanan tidak ditemukan!");const t=a.data(),r=t.dropPoint&&t.dropPoint.wa;if(!r)return g("Nomor WhatsApp penerima tujuan tidak tersedia!");const s=i&&i.store&&i.store.name?i.store.name:"Toko Putri",o=t.dropPoint&&t.dropPoint.name?t.dropPoint.name:"Penerima",n=t.customer&&t.customer.name?t.customer.name:"Pemesan",l=t.dropPoint&&t.dropPoint.address?t.dropPoint.address:"-",d=t.status||"Diproses",p=`Halo *${o}*! 👋

Kami dari *${s}* menginformasikan bahwa ada pesanan barang dari *${n}* yang akan dikirimkan ke lokasi Anda:

📋 No. Pesanan: *#${e.split("-").pop()}*
🏠 Alamat Tujuan: ${l}
📦 Status: *${d}*

Mohon konfirmasi atau pastikan ada yang menerima barang di lokasi tujuan saat kurir tiba. Terima kasih! 🙏`;typeof window.openWhatsApp=="function"?window.openWhatsApp(r,p):window.open(`https://wa.me/${r}?text=${encodeURIComponent(p)}`,"_blank","noopener,noreferrer")}catch{T(),g("Gagal memuat data pesanan!")}},Ir=e=>{$e("Hapus Pesanan","Yakin ingin hapus permanen?",async()=>{if(!va){Ee(!0),j("Menghapus...");try{await S.collection("freshmart_orders").doc(e).delete(),g("Terhapus!"),fs===e&&Ut()}catch{g("Gagal!")}finally{Ee(!1),T()}}})};window.exportOrdersToExcel=yr;window.rAdmOrd=Pr;window.openOrderDetail=et;window.saveOrderCustomerToDB=$r;window.ackRewardClaim=Ar;window.closeOrderDetailModal=Ut;window.updateOrderStatus=Tr;window.konfirmasiKeWA=Mr;window.konfirmasiKeWAPenerima=Cr;window.deleteOrder=Ir;const jr=()=>{const e=i.store.name||"Toko Grosir",a=i.store.themeColor||"#10b981",t=(o,n,l=!1)=>{let d=document.querySelector(`meta[${l?"property":"name"}="${o}"]`);d||(d=document.createElement("meta"),l?d.setAttribute("property",o):d.setAttribute("name",o),document.head.appendChild(d)),d.setAttribute("content",n)};t("theme-color",a),t("mobile-web-app-capable","yes"),t("apple-mobile-web-app-capable","yes"),t("apple-mobile-web-app-status-bar-style","black-translucent"),t("apple-mobile-web-app-title",e),t("application-name",e),t("msapplication-TileColor",a),document.title=e,localStorage.setItem("freshmart_theme_color",a),i.store.uiTheme&&i.store.uiTheme!==localStorage.getItem("freshmart_ui_theme")&&(localStorage.setItem("freshmart_ui_theme",i.store.uiTheme),Je(i.store.uiTheme));const r=i.store.bgStyle||localStorage.getItem("freshmart_bg_style")||"minimalist",s=i.store.bgCustomUrl!==void 0?i.store.bgCustomUrl:localStorage.getItem("freshmart_bg_custom_url")||"";Ye(r,s)},qt=()=>{A("admin-content",`
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

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-5 mb-6">
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
            <button onclick="openPrinterSettingsModal()" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-print text-xl"></i></div>
                <div class="z-10">
                    <span class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-[10px] block">Printer & POS</span>
                    <span class="text-[9px] text-slate-400 block mt-0.5 font-medium">Bluetooth & Struk</span>
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
    `)},Lr=e=>{const a=We[e][500],t=document.getElementById("set-ui-theme"),r=document.getElementById("set-theme-color"),s=document.getElementById("set-theme-color-picker");t&&(t.value=e),r&&(r.value=a),s&&(s.value=a),document.querySelectorAll(".preset-color-chip").forEach(l=>{l.classList.remove("ring-4","ring-offset-2","ring-slate-400","dark:ring-slate-500","scale-110"),l.querySelector(".check-icon")?.classList.add("hidden")});const o=document.getElementById(`preset-chip-${e}`);o&&(o.classList.add("ring-4","ring-offset-2","ring-slate-400","dark:ring-slate-500","scale-110"),o.querySelector(".check-icon")?.classList.remove("hidden"));const n=document.getElementById("custom-color-chip");if(n){n.style.background="";const l=n.querySelector("i");l&&(l.style.color="")}Je(e,a)},Br=e=>{let a=e;a==="dual_tone"&&(a="aurora_glow"),a==="geometric_3d"&&(a="tech_grid"),a==="diagonal_skew"&&(a="glass_studio");const t=document.getElementById("set-bg-style");t&&(t.value=a);const r=document.getElementById("set-bg-custom-url")?.value||"";document.querySelectorAll(".bg-mockup-card").forEach(o=>{o.classList.remove("active","border-[var(--color-primary)]","shadow-md","ring-2","ring-[var(--color-primary)]/20"),o.classList.add("border-slate-200","dark:border-slate-700/80");const n=o.querySelector(".active-check-badge");n&&n.classList.add("hidden")});const s=document.getElementById(`bg-opt-${a}`);if(s){s.classList.add("active","border-[var(--color-primary)]","shadow-md","ring-2","ring-[var(--color-primary)]/20"),s.classList.remove("border-slate-200","dark:border-slate-700/80");const o=s.querySelector(".active-check-badge");o&&o.classList.remove("hidden")}Ye(a,r)},Dr=e=>{let a,t,r,s,o;if(e==="profile"){a="Profil Toko & Tampilan Visual",t="Kelola identitas utama toko, palet warna tema, model layout background, dan informasi legal",r="fa-store",s={line:"bg-[var(--color-primary)]",box:"bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)]"};const l=i.store.uiTheme||"emerald";let d=i.store.bgStyle||localStorage.getItem("freshmart_bg_style")||"minimalist";d==="dual_tone"&&(d="aurora_glow"),d==="geometric_3d"&&(d="tech_grid"),d==="diagonal_skew"&&(d="glass_studio");const p={emerald:"Emerald",teal:"Teal",lime:"Lime",cyan:"Cyan",sky:"Sky",blue:"Blue",indigo:"Indigo",violet:"Violet",purple:"Purple",fuchsia:"Fuchsia",pink:"Pink",rose:"Rose",red:"Red",orange:"Orange",amber:"Amber",yellow:"Yellow",green:"Green",slate:"Slate",stone:"Stone"},m=Object.keys(We).map(u=>{const x=We[u][500],h=p[u]||u,b=l===u;return`
                <button type="button" id="preset-chip-${u}" onclick="selectPresetTheme('${u}')" 
                        class="preset-color-chip w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 ${b?"ring-4 ring-offset-2 ring-slate-400 dark:ring-slate-500 scale-110":""}" 
                        style="background-color: ${x}; border: 1.5px solid rgba(0,0,0,0.08)" 
                        title="${h}">
                    <i class="check-icon fa-solid fa-check text-white text-[11px] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${b?"":"hidden"}"></i>
                </button>
            `}).join("");o=`
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
                        <input autocomplete='off' id="set-name" value="${c(i.store.name)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Toko Putri">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Slogan Toko</label>
                        <input autocomplete='off' id="set-slogan" value="${c(i.store.slogan)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Belanja Hemat & Segar Setiap Hari">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Logo Toko (Ikon Aplikasi PWA)</label>
                        <div class="flex gap-2">
                            <input autocomplete='off' id="set-logo" value="${c(i.store.logo)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm flex-1 text-xs" placeholder="URL Logo atau klik upload">
                            <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                                <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload
                                <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-logo')">
                            </label>
                        </div>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Email Resmi Toko</label>
                        <input autocomplete='off' id="set-email" value="${c(i.store.email||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="admin@tokoputri.com">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Deskripsi Lengkap Toko</label>
                    <textarea id="set-description" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Deskripsi profil toko yang tampil pada profil pelanggan dan informasi footer...">${c(i.store.description)}</textarea>
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

                <input type="hidden" id="set-ui-theme" value="${l}">
                <input type="hidden" id="set-theme-color" value="${c(i.store.themeColor||"#10b981")}">
                <div class="flex flex-wrap gap-3 pt-1">
                    ${m}
                    <div class="relative" title="Warna Kustom (Klik untuk pilih warna bebas)">
                        <label for="set-theme-color-picker" class="w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 border-2 border-dashed border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]" id="custom-color-chip">
                            <i class="fa-solid fa-pen text-slate-500 dark:text-slate-400 text-[11px]"></i>
                        </label>
                        <input type="color" id="set-theme-color-picker" value="${c(i.store.themeColor||"#10b981")}" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
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
                
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
                    <!-- 1. Hero Arch -->
                    <button type="button" onclick="selectBgStyle('hero_arch')" id="bg-opt-hero_arch"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${d==="hero_arch"?"active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <span class="active-check-badge ${d==="hero_arch"?"":"hidden"} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <div class="mini-phone-frame">
                            <div class="mini-phone-screen mini-preview-arch">
                                <div class="mini-phone-notch"></div>
                                <div class="mini-preview-header"></div>
                                <div class="mini-dummy-content">
                                    <div class="mini-dummy-bar w-3/4"></div>
                                    <div class="mini-dummy-grid">
                                        <div class="mini-dummy-card"></div>
                                        <div class="mini-dummy-card"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="inline-block px-1.5 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] text-[8px] font-bold mb-1 tracking-wider uppercase">Super-App</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Hero Arch</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Kanopi dome lengkung</span>
                        </div>
                    </button>

                    <!-- 2. Aurora Glow -->
                    <button type="button" onclick="selectBgStyle('aurora_glow')" id="bg-opt-aurora_glow"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${d==="aurora_glow"?"active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <span class="active-check-badge ${d==="aurora_glow"?"":"hidden"} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <div class="mini-phone-frame">
                            <div class="mini-phone-screen mini-preview-aurora">
                                <div class="mini-phone-notch"></div>
                                <div class="mini-preview-header">
                                    <div class="mini-aura-orb -top-2 -left-2"></div>
                                    <div class="mini-aura-orb -top-2 -right-2"></div>
                                </div>
                                <div class="mini-dummy-content">
                                    <div class="mini-dummy-bar w-3/4"></div>
                                    <div class="mini-dummy-grid">
                                        <div class="mini-dummy-card"></div>
                                        <div class="mini-dummy-card"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="inline-block px-1.5 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[8px] font-bold mb-1 tracking-wider uppercase">Modern iOS</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Aurora Glow</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Mesh aura dinamis</span>
                        </div>
                    </button>

                    <!-- 3. Tech Grid -->
                    <button type="button" onclick="selectBgStyle('tech_grid')" id="bg-opt-tech_grid"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${d==="tech_grid"?"active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <span class="active-check-badge ${d==="tech_grid"?"":"hidden"} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <div class="mini-phone-frame">
                            <div class="mini-phone-screen mini-preview-tech">
                                <div class="mini-phone-notch"></div>
                                <div class="mini-preview-header"></div>
                                <div class="mini-dummy-content">
                                    <div class="mini-dummy-bar w-3/4"></div>
                                    <div class="mini-dummy-grid">
                                        <div class="mini-dummy-card"></div>
                                        <div class="mini-dummy-card"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="inline-block px-1.5 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[8px] font-bold mb-1 tracking-wider uppercase">Pro Teknik</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Tech Grid</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Dot-matrix blueprint</span>
                        </div>
                    </button>

                    <!-- 4. Glass Studio -->
                    <button type="button" onclick="selectBgStyle('glass_studio')" id="bg-opt-glass_studio"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${d==="glass_studio"?"active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <span class="active-check-badge ${d==="glass_studio"?"":"hidden"} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <div class="mini-phone-frame">
                            <div class="mini-phone-screen mini-preview-glass">
                                <div class="mini-phone-notch"></div>
                                <div class="mini-preview-header"></div>
                                <div class="mini-dummy-content">
                                    <div class="mini-dummy-bar w-3/4"></div>
                                    <div class="mini-dummy-grid">
                                        <div class="mini-dummy-card"></div>
                                        <div class="mini-dummy-card"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="inline-block px-1.5 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[8px] font-bold mb-1 tracking-wider uppercase">Frosted Lux</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Glass Studio</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Kedalaman bias kaca</span>
                        </div>
                    </button>

                    <!-- 5. Minimalis -->
                    <button type="button" onclick="selectBgStyle('minimalist')" id="bg-opt-minimalist"
                            class="bg-mockup-card flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer col-span-2 sm:col-span-1 ${d==="minimalist"?"active border-[var(--color-primary)] bg-white dark:bg-slate-800 shadow-md ring-2 ring-[var(--color-primary)]/20":"border-slate-200 dark:border-slate-700/80 bg-white/60 dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-600"}">
                        <span class="active-check-badge ${d==="minimalist"?"":"hidden"} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full primary-bg text-white text-[10px] flex items-center justify-center shadow-md z-20">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        <div class="mini-phone-frame">
                            <div class="mini-phone-screen mini-preview-minimal">
                                <div class="mini-phone-notch"></div>
                                <div class="mini-preview-header"></div>
                                <div class="mini-dummy-content">
                                    <div class="mini-dummy-bar w-3/4"></div>
                                    <div class="mini-dummy-grid">
                                        <div class="mini-dummy-card"></div>
                                        <div class="mini-dummy-card"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="inline-block px-1.5 py-0.5 rounded-md bg-slate-500/10 text-slate-600 dark:text-slate-400 text-[8px] font-bold mb-1 tracking-wider uppercase">Studio Clean</div>
                            <span class="block text-xs font-bold text-slate-800 dark:text-slate-100 mb-0.5">Minimalis</span>
                            <span class="block text-[9px] text-slate-500 dark:text-slate-400 leading-tight">Polos bersih elegan</span>
                        </div>
                    </button>
                </div>

                <!-- Gambar / Wallpaper Background Kustom (Opsional) -->
                <div class="pt-3 border-t border-slate-200 dark:border-slate-700/80">
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <i class="fa-solid fa-image" style="color:var(--color-primary)"></i> Gambar / Wallpaper Background Kustom (Opsional)
                    </label>
                    <div class="flex gap-2">
                        <input autocomplete="off" id="set-bg-custom-url" value="${c(i.store.bgCustomUrl||"")}"
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
                        <input autocomplete='off' id="set-hours" value="${c(i.store.operationalHours||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Senin - Minggu (08:00 - 21:00 WIB)">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Teks Hak Cipta Footer</label>
                        <input autocomplete='off' id="set-credit" value="${c(i.store.footerCredit||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Toko Putri © 2026. All Rights Reserved.">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Katalog Tukar Hadiah di Beranda</label>
                    <select id="set-show-reward-catalog" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                        <option value="true" ${i.store.showRewardCatalog!==!1?"selected":""}>Ya, Tampilkan Katalog Hadiah</option>
                        <option value="false" ${i.store.showRewardCatalog===!1?"selected":""}>Sembunyikan</option>
                    </select>
                </div>
            </div>
        `}else e==="catalog"?(a="Tampilan Kategori & Merek",t="Kelola tata letak, model navigasi slider, dan visibilitas kategori produk serta brand di beranda",r="fa-palette",s={line:"bg-blue-500",box:"bg-blue-50 dark:bg-blue-900/30 text-blue-500"},o=`
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
                            <option value="grid" ${i.store.categoryStyle==="grid"?"selected":""}>Grid Ikon (Kotak berjejer)</option>
                            <option value="pill" ${i.store.categoryStyle==="pill"?"selected":""}>Pill Horizontal Scroll (Kapsul geser)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Slider Kategori di Beranda</label>
                        <select id="set-show-categories" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${i.store.showCategories!==!1?"selected":""}>Tampilkan Slider Kategori</option>
                            <option value="false" ${i.store.showCategories===!1?"selected":""}>Sembunyikan</option>
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
                            <option value="logo" ${i.store.brandStyle==="logo"||!i.store.brandStyle?"selected":""}>Logo Kotak (Grid Visual)</option>
                            <option value="text" ${i.store.brandStyle==="text"?"selected":""}>Pill Horizontal Scroll (Kapsul teks)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Slider Merek di Beranda</label>
                        <select id="set-show-brands" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${i.store.showBrands!==!1?"selected":""}>Tampilkan Slider Merek</option>
                            <option value="false" ${i.store.showBrands===!1?"selected":""}>Sembunyikan</option>
                        </select>
                    </div>
                </div>

                <div class="p-3 bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 rounded-xl text-[11px] text-indigo-700 dark:text-indigo-300 flex items-start gap-2">
                    <i class="fa-solid fa-circle-check text-indigo-500 mt-0.5"></i>
                    <span>Pelanggan dapat mengklik logo brand untuk langsung memfilter etalase hanya menampilkan barang dari merek tersebut.</span>
                </div>
            </div>
        `):e==="shipping"?(a="Pengiriman & Lokasi Toko",t="Atur nomor kontak admin, tarif dasar ongkir per kilometer, promo gratis ongkir, dan titik koordinat GPS toko",r="fa-motorcycle",s={line:"bg-amber-500",box:"bg-amber-50 dark:bg-amber-900/30 text-amber-500"},o=`
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
                        <input autocomplete='off' id="set-wa" value="${c(i.store.wa||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: 08123456789">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Ongkir per Kilometer (Rp)</label>
                        <input autocomplete='off' type="number" id="set-cost" value="${c(i.store.costPerKm||0)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: 2000">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Alamat Lengkap Toko</label>
                    <textarea id="set-address" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Nama jalan, nomor bangunan, RT/RW, kelurahan, kecamatan, kota/kabupaten...">${c(i.store.address||"")}</textarea>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Opsi Kirim ke Alamat (Kurir Toko)</label>
                        <select id="set-delivery-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${i.store.isDeliveryEnabled!==!1?"selected":""}>Aktif (Bisa diantar kurir)</option>
                            <option value="false" ${i.store.isDeliveryEnabled===!1?"selected":""}>Nonaktif (Hanya ambil di toko)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Opsi Ambil di Toko (Self Pickup)</label>
                        <select id="set-pickup-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${i.store.isPickupEnabled!==!1?"selected":""}>Aktif (Bisa ambil di kasir)</option>
                            <option value="false" ${i.store.isPickupEnabled===!1?"selected":""}>Nonaktif</option>
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
                            <option value="true" ${i.store.freeShippingMinSpendEnabled===!0||i.store.freeShippingMinSpendEnabled==="true"?"selected":""}>Aktif (Bebas ongkir otomatis)</option>
                            <option value="false" ${i.store.freeShippingMinSpendEnabled!==!0&&i.store.freeShippingMinSpendEnabled!=="true"?"selected":""}>Nonaktif</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Minimal Belanja (Rp)</label>
                        <input autocomplete='off' type="number" id="set-free-shipping-amount" value="${c(i.store.freeShippingMinSpendAmount||0)}" min="0" step="1000" placeholder="Contoh: 1000000" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
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
                            value="${c(i.store.lat&&i.store.lng?`${i.store.lat}, ${i.store.lng}`:"-7.82308507053985, 112.0988374794464")}"
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
                        <input autocomplete='off' id="set-lat" value="${c(i.store.lat||"-7.82308507053985")}" class="admin-input !py-2.5 bg-white dark:bg-slate-900 shadow-sm text-xs font-mono w-full" placeholder="-7.82308507053985" oninput="handleManualCoordChange()">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Longitude Toko (Garis Bujur)</label>
                        <input autocomplete='off' id="set-lng" value="${c(i.store.lng||"112.0988374794464")}" class="admin-input !py-2.5 bg-white dark:bg-slate-900 shadow-sm text-xs font-mono w-full" placeholder="112.0988374794464" oninput="handleManualCoordChange()">
                    </div>
                </div>
            </div>
        `):e==="payment"?(a="Metode Pembayaran QRIS",t="Konfigurasi barcode QRIS resmi toko untuk penerimaan pembayaran instan via e-wallet dan m-banking",r="fa-qrcode",s={line:"bg-indigo-500",box:"bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500"},o=`
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
                        <input autocomplete='off' id="set-qris-url" value="${c(i.payment?.qrisUrl||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm flex-1 text-xs" placeholder="URL file gambar QRIS atau klik tombol upload di kanan">
                        <label class="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                            <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload QRIS
                            <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-qris-url')">
                        </label>
                    </div>
                </div>

                <!-- PREVIEW BOX QRIS -->
                ${i.payment?.qrisUrl?`
                    <div class="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl flex flex-col sm:flex-row items-center gap-4 shadow-sm">
                        <div class="p-2 bg-white rounded-xl border border-slate-200 dark:border-slate-600 shadow-inner">
                            <img src="${c(i.payment.qrisUrl)}" alt="Preview QRIS" class="w-28 h-28 object-contain rounded-lg">
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
        `):e==="config"?(a="Sistem & Integrasi Cloud",t="Konfigurasi jembatan endpoint Google Apps Script untuk cloud storage gambar produk, banner promosi, dan media drive",r="fa-laptop-code",s={line:"bg-rose-500",box:"bg-rose-50 dark:bg-rose-900/30 text-rose-500"},o=`
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
                    <input autocomplete='off' id="set-gas-url" value="${c(i.config?.gasUrl||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full font-mono text-xs" placeholder="https://script.google.com/macros/s/.../exec">
                    <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium">Tempel URL hasil deploy Web App dari Google Apps Script project toko Anda.</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl space-y-2">
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full ${i.config?.gasUrl?"bg-emerald-500":"bg-amber-500"} animate-pulse"></span>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200">
                            ${i.config?.gasUrl?"Integrasi Cloud Storage Aktif":"Endpoint Belum Dikonfigurasi"}
                        </span>
                    </div>
                    <ul class="text-[11px] text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
                        <li>Semua file gambar produk yang diupload admin akan disimpan aman di Google Drive Anda.</li>
                        <li>Tidak membebani memori hosting lokal dan menjaga loading website tetap ringan.</li>
                        <li>Mendukung konversi otomatis ke link thumbnail instan untuk etalase katalog.</li>
                    </ul>
                </div>
            </div>
        `):e==="operasional"&&(a="Operasional & Perpajakan",t="Konfigurasi pembatasan inventaris stok produk otomatis, skema kalkulasi PPN transaksi, dan program poin loyalitas member",r="fa-sliders",s={line:"bg-violet-500",box:"bg-violet-50 dark:bg-violet-900/30 text-violet-500"},o=`
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
                        <option value="true" ${i.store.useStock===!0?"selected":""}>Aktif — Otomatis tandai HABIS jika stok 0 (Pelanggan tidak bisa checkout)</option>
                        <option value="false" ${i.store.useStock!==!0?"selected":""}>Nonaktif — Stok tak terbatas (Cocok untuk barang pre-order / tanpa pembatasan stok)</option>
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
                            <option value="true" ${i.store.ppnEnabled===!0?"selected":""}>Aktif (Kalkulasi PPN Dihitung)</option>
                            <option value="false" ${i.store.ppnEnabled!==!0?"selected":""}>Nonaktif (Bebas PPN)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tipe Perhitungan</label>
                        <select id="set-ppn-type" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="exclusive" ${i.store.ppnType!=="inclusive"?"selected":""}>Eksklusif (Ditambah di checkout)</option>
                            <option value="inclusive" ${i.store.ppnType==="inclusive"?"selected":""}>Inklusif (Sudah termasuk di harga)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tarif PPN (%)</label>
                        <input autocomplete='off' type="number" id="set-ppn-rate" value="${c(i.store.ppnRate||11)}" min="0" max="100" step="0.1" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="11">
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
                            <option value="true" ${i.store.spendPointsEnabled===!0||i.store.spendPointsEnabled==="true"?"selected":""}>Aktif (Poin Dihitung)</option>
                            <option value="false" ${i.store.spendPointsEnabled!==!0&&i.store.spendPointsEnabled!=="true"?"selected":""}>Nonaktif</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Minimal Belanja (Kelipatan Rp)</label>
                        <input autocomplete='off' type="number" id="set-spend-points-threshold" value="${c(i.store.spendPointsThreshold||1e5)}" min="1000" step="1000" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="100000">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Perolehan Poin per Kelipatan</label>
                        <input autocomplete='off' type="number" id="set-spend-points-per-threshold" value="${c(i.store.spendPointsPerThreshold||1)}" min="1" step="1" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="1">
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
                    <div class="w-12 h-12 rounded-2xl ${s.box} flex items-center justify-center shrink-0 text-xl shadow-sm"><i class="fa-solid ${r}"></i></div> 
                    <div>
                        <h3 class="font-bold text-slate-800 dark:text-white text-base tracking-wide leading-tight">${a}</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${t||"Konfigurasi pengaturan toko"}</p>
                    </div>
                </div>
                <div class="space-y-5">
                    ${o}
                </div>
            </div>
        </div>

        <button onclick="saveAdminSettings('${e}')" class="btn-primary py-4 text-base shadow-glow w-full !rounded-2xl flex items-center justify-center gap-2 font-bold tracking-wide"><i class="fa-solid fa-floppy-disk"></i> Simpan Perubahan Pengaturan</button>
    </div>
    `;if(A("admin-content",n),e==="profile"){const l=i.store.uiTheme||"",d=i.store.themeColor||"#10b981";(l==="custom"||!We?.[l])&&setTimeout(()=>{const m=document.getElementById("custom-color-chip");if(m){m.style.background=d;const u=m.querySelector("i");u&&(u.style.color="#fff")}},50)}},Er=async e=>{if(!va){Ee(!0),j("Menyimpan...");try{if(e==="profile")i.store.name=P("set-name"),i.store.slogan=P("set-slogan"),i.store.logo=E(P("set-logo")),i.store.description=P("set-description"),i.store.email=P("set-email"),i.store.showRewardCatalog=P("set-show-reward-catalog")==="true",i.store.operationalHours=P("set-hours"),i.store.footerCredit=P("set-credit"),i.store.themeColor=P("set-theme-color"),i.store.uiTheme=P("set-ui-theme"),i.store.bgStyle=P("set-bg-style")||"minimalist",i.store.bgCustomUrl=E(P("set-bg-custom-url")),localStorage.setItem("freshmart_theme_color",i.store.themeColor),localStorage.setItem("freshmart_ui_theme",i.store.uiTheme),localStorage.setItem("freshmart_bg_style",i.store.bgStyle),localStorage.setItem("freshmart_bg_custom_url",i.store.bgCustomUrl||""),Je(i.store.uiTheme,i.store.themeColor),Ye(i.store.bgStyle,i.store.bgCustomUrl);else if(e==="catalog")i.store.categoryStyle=P("set-category-style"),i.store.brandStyle=P("set-brand-style"),i.store.showCategories=P("set-show-categories")==="true",i.store.showBrands=P("set-show-brands")==="true";else if(e==="shipping"){i.store.wa=P("set-wa").replace(/\D/g,""),i.store.address=P("set-address"),i.store.costPerKm=P("set-cost"),i.store.isDeliveryEnabled=P("set-delivery-enabled")==="true",i.store.isPickupEnabled=P("set-pickup-enabled")==="true",i.store.freeShippingMinSpendEnabled=P("set-free-shipping-enabled")==="true",i.store.freeShippingMinSpendAmount=Math.max(0,parseFloat(P("set-free-shipping-amount"))||0);let t=(P("set-lat")||"").trim(),r=(P("set-lng")||"").trim();const s=(P("set-maps-smart-input")||"").trim();if(s&&typeof window.parseGeoCoordinates=="function"){const o=window.parseGeoCoordinates(s);o&&(t=o.lat,r=o.lng)}(!t||!r)&&(t="-7.82308507053985",r="112.0988374794464"),i.store.lat=t,i.store.lng=r}else e==="payment"?(i.payment||(i.payment={}),i.payment.qrisUrl=E(P("set-qris-url"))):e==="config"?(i.config||(i.config={}),i.config.gasUrl=P("set-gas-url"),g("Pengaturan GAS URL tersimpan.")):e==="operasional"&&(i.store.useStock=P("set-use-stock")==="true",i.store.ppnEnabled=P("set-ppn-enabled")==="true",i.store.ppnType=P("set-ppn-type")||"exclusive",i.store.ppnRate=parseFloat(P("set-ppn-rate"))||11,i.store.spendPointsEnabled=P("set-spend-points-enabled")==="true",i.store.spendPointsThreshold=Math.max(1,parseFloat(P("set-spend-points-threshold"))||1e5),i.store.spendPointsPerThreshold=Math.max(1,parseFloat(P("set-spend-points-per-threshold"))||1),Za());const a={profile:"store",catalog:"store",shipping:"store",operasional:"store",payment:"payment",config:"config"};typeof window.saveApp=="function"&&await window.saveApp([a[e]||"store"]),e==="profile"||e==="config"?(g(e==="config"?"Sistem Diperbarui! Memuat Ulang...":"Warna Berubah! Memuat Ulang..."),setTimeout(()=>location.reload(),1500)):(g("Tersimpan!"),qt())}catch{g("Gagal menyimpan pengaturan")}finally{Ee(!1),T()}}},at=e=>{const a=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,t=a?a(e):null,r=document.getElementById("maps-smart-feedback"),s=document.getElementById("set-lat"),o=document.getElementById("set-lng");t?(s&&(s.value=t.lat),o&&(o.value=t.lng),r&&(r.className="text-[10px] mt-1.5 font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5",r.innerHTML=`<i class="fa-solid fa-circle-check text-xs"></i> <span>Akurat! Koordinat terdeteksi: <b>${t.lat}, ${t.lng}</b></span>`)):e&&e.trim().length>3?r&&(r.className="text-[10px] mt-1.5 font-medium text-amber-600 dark:text-amber-400 flex items-center gap-1.5",r.innerHTML='<i class="fa-solid fa-triangle-exclamation text-xs"></i> <span>Pola belum terbaca. Coba tempel format: <code>-7.823085, 112.098837</code> atau link Google Maps</span>'):r&&(r.className="text-[10px] mt-1.5 font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5",r.innerHTML='<i class="fa-solid fa-circle-info text-blue-500"></i> <span>Tempel tautan Maps atau angka koordinat dari Google Maps</span>')},Nr=()=>{const e=document.getElementById("set-lat"),a=document.getElementById("set-lng"),t=document.getElementById("set-maps-smart-input");e&&a&&t&&e.value&&a.value&&(t.value=`${e.value.trim()}, ${a.value.trim()}`)},Rr=async()=>{const e=document.getElementById("set-maps-smart-input");if(e){try{if(navigator.clipboard&&navigator.clipboard.readText){const a=await navigator.clipboard.readText();if(a){e.value=a,at(a),g("Teks berhasil ditempel dari clipboard!");return}}}catch{}e.focus(),g("Silakan tekan Ctrl+V atau tahan untuk menempel")}},_r=()=>{const e=document.getElementById("set-lat"),a=document.getElementById("set-lng");let t=e?e.value.trim():"",r=a?a.value.trim():"";if(!t||!r){const s=document.getElementById("set-maps-smart-input");if(s&&s.value&&typeof window.parseGeoCoordinates=="function"){const o=window.parseGeoCoordinates(s.value);o&&(t=o.lat,r=o.lng)}}t&&r?window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${t},${r}`)}`,"_blank"):g("Masukkan koordinat toko terlebih dahulu")},Fr=()=>{if(!navigator.geolocation){g("Browser tidak mendukung sensor GPS");return}g("Sedang mendeteksi lokasi GPS..."),navigator.geolocation.getCurrentPosition(e=>{const a=e.coords.latitude.toString(),t=e.coords.longitude.toString(),r=document.getElementById("set-maps-smart-input");r&&(r.value=`${a}, ${t}`),at(`${a}, ${t}`),g("Lokasi GPS berhasil didapatkan!")},()=>{g("Gagal mengambil GPS perangkat. Pastikan izin lokasi aktif.")},{enableHighAccuracy:!0,timeout:15e3})},Or=()=>{const e=JSON.stringify(i,null,2),a=`backup_tokoputri_${new Date().toISOString().slice(0,10)}.json`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"){const t=btoa(unescape(encodeURIComponent(e)));window.AndroidNativeApp.saveOrShareFile(t,a,"application/json")}else{const t="data:text/json;charset=utf-8,"+encodeURIComponent(e),r=document.createElement("a");r.href=t,r.download=a,document.body.appendChild(r),r.click(),r.remove()}g("Backup berhasil disimpan!")},Hr=e=>{const a=e.target.files[0];if(!a)return;const t=new FileReader;t.onload=async r=>{try{const s=JSON.parse(r.target.result);Object.assign(i,s),typeof window.saveApp=="function"&&await window.saveApp(),g("Data dipulihkan!"),setTimeout(()=>location.reload(),1e3)}catch{g("Gagal memulihkan data!")}},t.readAsText(a)};window.syncAppMeta=jr;window.rAdmSet=qt;window.selectPresetTheme=Lr;window.selectBgStyle=Br;window.openSettingForm=Dr;window.saveAdminSettings=Er;window.backupData=Or;window.restoreData=Hr;window.handleSmartMapsInput=at;window.handleManualCoordChange=Nr;window.pasteFromClipboardToMapsInput=Rr;window.previewStoreOnMaps=_r;window.detectAdminGPS=Fr;let G=new Date().getFullYear(),W=0,ye="menu",Se=null;const Pe=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],Kr=e=>{if(typeof window.getEffHpp=="function")return window.getEffHpp(e);const a=i.products?.find(t=>t&&t.id!=null&&String(t.id)===String(e.id));if(!a)return 0;if(e.variantName&&a.variants){const t=a.variants.find(r=>r.name===e.variantName);if(t&&t.hpp!=null)return parseFloat(t.hpp)||0}return parseFloat(a.hpp)||0},wt=new Map,Vr=2*60*1e3,tt=async e=>{const a=wt.get(e);if(a&&Date.now()-a.timestamp<Vr)return a.data;const t={};for(let r=1;r<=12;r++)t[r]={omset:0,ppn:0,hpp:0,disc:0,orderCount:0};try{const r=new Date(e,0,1),s=new Date(e+1,0,1);(await S.collection("freshmart_orders").where("timestamp",">=",ee.firestore.Timestamp.fromDate(r)).where("timestamp","<",ee.firestore.Timestamp.fromDate(s)).limit(5e3).get()).forEach(l=>{const d=l.data();if(d.status==="Dibatalkan"||!d.timestamp||!d.timestamp.toDate)return;const p=d.timestamp.toDate().getMonth()+1;if(!t[p])return;const m=d.payment?.dppAmount!==void 0&&d.payment?.dppAmount!==null?parseFloat(d.payment.dppAmount):parseFloat(d.payment?.subtotal)||0;t[p].omset+=m,t[p].ppn+=parseFloat(d.payment?.ppnAmount)||0,t[p].disc+=parseFloat(d.payment?.productDiscount)||0,t[p].orderCount++,(d.items||[]).forEach(u=>{const x=u.hpp!==void 0&&u.hpp!==null?parseFloat(u.hpp):Kr(u);t[p].hpp+=(parseFloat(x)||0)*(parseFloat(u.qty)||0)})})}catch(r){console.error("Gagal memuat data pajak:",r),g("Gagal memuat data periode ini!")}return wt.set(e,{data:t,timestamp:Date.now()}),t},ca=()=>Se?(W===0?Object.keys(Se):[W]).reduce((a,t)=>{const r=Se[t];return a.omset+=r.omset,a.ppn+=r.ppn,a.hpp+=r.hpp,a.disc+=r.disc,a.orderCount+=r.orderCount,a},{omset:0,ppn:0,hpp:0,disc:0,orderCount:0}):{omset:0,ppn:0,hpp:0,disc:0,orderCount:0},st=()=>{const e=i.taxSettings?.monthlyExpenses||{};return(W===0?Array.from({length:12},(t,r)=>r+1):[W]).reduce((t,r)=>t+(parseFloat(e[`${G}-${r}`])||0),0)},Ur=async()=>{A("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),Se=await tt(G),rt()},rt=()=>{const e=Array.from({length:6},(r,s)=>new Date().getFullYear()-4+s),a=[{k:"summary",l:"Ringkasan PPN",i:"fa-receipt"},{k:"income",l:"Laba Rugi",i:"fa-chart-pie"},{k:"balance",l:"Neraca",i:"fa-scale-balanced"},{k:"settings",l:"Pengaturan",i:"fa-gear"}];ye==="menu"&&(ye="summary");const t=`
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
        
        ${ye==="settings"?"":`
        <div class="flex items-center gap-2">
            <select id="tax-year-select" onchange="changeTaxYear(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                ${e.map(r=>`<option value="${r}" ${r===G?"selected":""}>${r}</option>`).join("")}
            </select>
            <select id="tax-month-select" onchange="changeTaxMonth(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                <option value="0" ${W===0?"selected":""}>Setahun Penuh</option>
                ${Pe.map((r,s)=>`<option value="${s+1}" ${W===s+1?"selected":""}>${r} ${G}</option>`).join("")}
            </select>
        </div>
        `}
    </div>

    <!-- Sub-Tab Navigation Bar -->
    <div class="flex items-center gap-2 mb-5 overflow-x-auto hide-scrollbar pb-1">
        ${a.map(r=>{const s=ye===r.k;return`
            <button onclick="switchTaxTab('${r.k}')" class="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2 shrink-0 ${s?"primary-bg text-white shadow-glow":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[rgba(var(--color-primary-rgb),0.4)]"}">
                <i class="fa-solid ${r.i} text-xs"></i>
                <span>${r.l}</span>
            </button>`}).join("")}
    </div>
    `;A("admin-content",`
    <div class="max-w-5xl mx-auto pb-10 text-sm fade-in-scale">
        <div class="mb-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-4 flex items-start gap-3 text-xs font-semibold text-amber-800 dark:text-amber-300 shadow-xs">
            <i class="fa-solid fa-circle-info text-amber-500 text-base shrink-0 mt-0.5"></i>
            <span class="leading-relaxed">Halaman ini adalah <b>alat bantu rekap internal</b> Omset, PPN, Laba Rugi, dan Neraca dari data transaksi toko. Bukan pengganti konsultan pajak/akuntan — validasi kembali angkanya sebelum digunakan untuk pelaporan SPT resmi.</span>
        </div>

        ${t}

        <div id="tax-content"></div>
    </div>`),Ma()},qr=e=>{ye=e,rt()},Gr=async e=>{G=parseInt(e,10),A("tax-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),Se=await tt(G),Ma()},Wr=e=>{W=parseInt(e,10),Ma()},Ma=()=>{ye==="summary"?Gt():ye==="income"?it():ye==="balance"?ot():ye==="settings"&&Wt()},Gt=()=>{const e=ca(),a=W===0?`Tahun ${G}`:`${Pe[W-1]} ${G}`,t=e.omset-e.disc,r=Array.from({length:12},(s,o)=>o+1).map(s=>{const o=Se?Se[s]:{omset:0,ppn:0,orderCount:0};return`<tr class="${W===s?"bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.14)] font-bold":"hover:bg-slate-50 dark:hover:bg-slate-700/30"} border-b border-slate-100 dark:border-slate-700/50 last:border-0 transition-colors">
            <td class="py-3 px-4 text-xs font-bold text-slate-700 dark:text-slate-200">${Pe[s-1]}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-800 dark:text-white text-right">${k(o.omset)}</td>
            <td class="py-3 px-4 text-xs font-bold text-right" style="color:var(--color-primary)">${k(o.ppn)}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">${o.orderCount}</td>
        </tr>`}).join("");A("tax-content",`
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div class="card-modern p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Omset Bruto (${a})</p>
                <p class="text-base sm:text-xl font-bold text-slate-800 dark:text-white truncate">${k(e.omset)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">${e.orderCount} pesanan</p>
            </div>
            <div class="card-modern p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-minus mr-1"></i>Diskon Produk</p>
                <p class="text-base sm:text-xl font-bold text-rose-500 truncate">${k(e.disc)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Potongan diskon</p>
            </div>
            <div class="card-modern p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">DPP (Dasar Pengenaan Pajak)</p>
                <p class="text-base sm:text-xl font-bold text-slate-800 dark:text-white truncate">${k(t)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Omset bersih</p>
            </div>
            <div class="card-modern p-5 flex flex-col justify-between border-[rgba(var(--color-primary-rgb),0.4)] relative overflow-hidden" style="background: rgba(var(--color-primary-rgb),0.04)">
                <div class="absolute -right-4 -bottom-4 w-20 h-20 rounded-full blur-xl pointer-events-none" style="background: rgba(var(--color-primary-rgb),0.15)"></div>
                <p class="text-[9px] font-bold uppercase tracking-widest mb-1.5" style="color:var(--color-primary)"><i class="fa-solid fa-file-invoice-dollar mr-1"></i>PPN Keluaran</p>
                <p class="text-base sm:text-xl font-bold truncate" style="color:var(--color-primary)">${k(e.ppn)}</p>
                <p class="text-[10px] font-bold mt-1 opacity-80" style="color:var(--color-primary)">Wajib disetor ke negara</p>
            </div>
        </div>
        <div class="card-modern overflow-hidden">
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-700/70 flex items-center justify-between">
                <h4 class="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-widest">Rincian Per Bulan — ${G}</h4>
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
    `)},it=()=>{const e=ca(),a=W===0?`Tahun ${G}`:`${Pe[W-1]} ${G}`,t=e.omset-e.disc-e.hpp,r=W===0?null:`${G}-${W}`,s=st(),o=t-s,n=i.taxSettings?.taxScheme||"umkm_final";let l,d,p;n==="umkm_final"?(l=.5,d=e.omset,p="PPh Final UMKM (0,5% × Omset)"):n==="badan_normal"?(l=22,d=Math.max(0,o),p="PPh Badan (22% × Laba Bersih)"):(l=parseFloat(i.taxSettings?.customTaxRate)||0,d=Math.max(0,o),p=`PPh Custom (${l}% × Laba Bersih)`);const m=d*(l/100),u=o-m;let x="";if(W===0)x=Array.from({length:12},(h,b)=>b+1).map(h=>{const b=`${G}-${h}`,v=(i.taxSettings?.monthlyExpenses||{})[b]||0;return`<div class="flex items-center justify-between gap-2 py-2 border-b border-slate-100 dark:border-slate-700/50 last:border-0">
                <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${Pe[h-1]} ${G}</span>
                <input type="number" min="0" value="${v}" onchange="saveMonthlyExpense('${b}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>`}).join("");else{const h=(i.taxSettings?.monthlyExpenses||{})[r]||0;x=`<div class="flex items-center justify-between gap-2 py-2">
            <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${Pe[W-1]} ${G}</span>
            <input type="number" min="0" value="${h}" onchange="saveMonthlyExpense('${r}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
        </div>`}A("tax-content",`
        <div class="card-modern p-6 sm:p-8 space-y-4">
            <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
                <div>
                    <h4 class="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm uppercase tracking-widest">Laporan Laba Rugi — ${a}</h4>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Estimasi pendapatan &amp; beban usaha</p>
                </div>
                <button onclick="openTaxDocPreview('income')" class="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-[10px] font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 active:scale-95">
                    <i class="fa-solid fa-print"></i> Preview &amp; Cetak
                </button>
            </div>
            <div class="space-y-3 text-xs sm:text-sm">
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">Omset Bruto</span><span class="font-bold text-slate-800 dark:text-slate-100">${k(e.omset)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Diskon Produk</span><span class="font-bold text-rose-500">-${k(e.disc)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) HPP (Harga Pokok Penjualan)</span><span class="font-bold text-rose-500">-${k(e.hpp)}</span></div>
                <div class="flex justify-between py-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Kotor</span><span class="font-bold text-emerald-500">${k(t)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Biaya Operasional</span><span class="font-bold text-rose-500">-${k(s)}</span></div>
                <div class="flex justify-between py-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Bersih Sebelum Pajak</span><span class="font-bold" style="color:var(--color-primary)">${k(o)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Estimasi ${p}</span><span class="font-bold text-rose-500">-${k(m)}</span></div>
                <div class="flex justify-between py-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2"><span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Laba Bersih Setelah Pajak (Estimasi)</span><span class="font-extrabold text-sm sm:text-base" style="color:var(--color-primary)">${k(u)}</span></div>
            </div>

            <div class="mt-8 pt-5 border-t border-dashed border-slate-200 dark:border-slate-700">
                <h5 class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5"><i class="fa-solid fa-pen" style="color:var(--color-primary)"></i> Input Biaya Operasional (Manual)</h5>
                <p class="text-[10px] font-bold text-slate-400 mb-4">Contoh: sewa tempat, gaji karyawan, listrik, internet, dll. Sistem tidak melacak biaya ini otomatis.</p>
                <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                    ${x}
                </div>
            </div>
        </div>
    `)},zr=async(e,a)=>{const t=parseFloat(a)||0;i.taxSettings||(i.taxSettings={}),i.taxSettings.monthlyExpenses||(i.taxSettings.monthlyExpenses={}),i.taxSettings.monthlyExpenses[e]=t;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),it()}catch{g("Gagal menyimpan biaya operasional!")}},ot=()=>{const e=Ta(),a=i.taxSettings?.balanceSheet||{kas:0,piutang:0,hutang:0},t=(parseFloat(a.kas)||0)+(parseFloat(a.piutang)||0)+e.assetHpp,r=parseFloat(a.hutang)||0,s=t-r;A("tax-content",`
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
                        <input type="number" min="0" value="${a.kas||0}" onchange="saveBalanceField('kas', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-1">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Piutang Usaha (manual)</span>
                        <input type="number" min="0" value="${a.piutang||0}" onchange="saveBalanceField('piutang', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-2.5 rounded-xl px-3 border border-[rgba(var(--color-primary-rgb),0.3)]" style="background: rgba(var(--color-primary-rgb),0.06)">
                        <span class="text-xs font-bold" style="color:var(--color-primary)">Persediaan Barang (Otomatis)</span>
                        <span class="text-xs font-bold" style="color:var(--color-primary)">${k(e.assetHpp)}</span>
                    </div>
                    <div class="flex justify-between pt-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2">
                        <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-widest">Total Aset</span>
                        <span class="font-bold text-xs sm:text-sm" style="color:var(--color-primary)">${k(t)}</span>
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
                        <input type="number" min="0" value="${a.hutang||0}" onchange="saveBalanceField('hutang', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-2.5 rounded-xl px-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Modal &amp; Laba Ditahan</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-100">${k(s)}</span>
                    </div>
                    <p class="text-[10px] font-semibold text-slate-400 leading-relaxed px-1">Angka Modal &amp; Laba Ditahan dihitung otomatis (Total Aset − Hutang) agar neraca seimbang.</p>
                    <div class="flex justify-between pt-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2">
                        <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-widest">Total Kewajiban + Modal</span>
                        <span class="font-bold text-xs sm:text-sm" style="color:var(--color-primary)">${k(r+s)}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6 text-center">
            <button onclick="openTaxDocPreview('balance')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all inline-flex items-center gap-2 shadow-xs active:scale-95">
                <i class="fa-solid fa-print"></i> Preview &amp; Cetak Neraca
            </button>
        </div>
    `)},Qr=async(e,a)=>{const t=parseFloat(a)||0;i.taxSettings||(i.taxSettings={}),i.taxSettings.balanceSheet||(i.taxSettings.balanceSheet={kas:0,piutang:0,hutang:0,modalDisetor:0}),i.taxSettings.balanceSheet[e]=t;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),ot()}catch{g("Gagal menyimpan data neraca!")}},Wt=()=>{const e=i.taxSettings||{};A("tax-content",`
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
    `)},Jr=e=>{Te("tax-custom-rate-wrap","hidden",e!=="custom")},Yr=async()=>{if(!va){Ee(!0),j("Menyimpan...");try{i.taxSettings||(i.taxSettings={}),i.taxSettings.companyName=P("tax-company-name"),i.taxSettings.npwp=P("tax-npwp"),i.taxSettings.taxScheme=P("tax-scheme"),i.taxSettings.customTaxRate=parseFloat(P("tax-custom-rate"))||.5,typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),g("Pengaturan pajak tersimpan!")}catch{g("Gagal menyimpan pengaturan pajak!")}finally{Ee(!1),T()}}},Xr=e=>{const a=W===0?`Tahun ${G}`:`${Pe[W-1]} ${G}`,t=i.taxSettings||{},r=new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"});let s="";i.store.logo&&(i.store.logo.includes("http")||i.store.logo.includes("data:"))?s=`<img loading="eager" src="${c(i.store.logo)}" class="w-16 h-16 object-contain">`:s='<div class="w-16 h-16 bg-slate-700 text-white flex items-center justify-center rounded-xl"><i class="fa-solid fa-store text-3xl"></i></div>';const n={summary:"LAPORAN PPN & OMSET",income:"LAPORAN LABA RUGI",balance:"NERACA"}[e]||"LAPORAN";let l=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${s}
            <div>
                <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${c(t.companyName||i.store.name)}</h1>
                ${t.npwp?`<p class="text-xs font-bold text-slate-500 mt-1">NPWP: ${c(t.npwp)}</p>`:""}
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${c(i.store.address||"")}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl tracking-widest text-slate-700 uppercase">${n}</h2>
            <p class="text-sm font-bold text-slate-600 mt-2">Periode: ${a}</p>
            <p class="text-xs font-semibold text-slate-400 mt-1">Dicetak: ${r}</p>
        </div>
    </div>
    <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-[11px] font-bold text-amber-700 leading-relaxed">
        <i class="fa-solid fa-triangle-exclamation mr-1"></i> Dokumen ini adalah rekap internal sebagai alat bantu — bukan dokumen resmi DJP. Mohon validasi ke akuntan/konsultan pajak sebelum digunakan untuk pelaporan SPT resmi.
    </div>`,d="";if(e==="summary"){const m=ca(),u=m.omset-m.disc,x=Array.from({length:12},(h,b)=>b+1).map(h=>{const b=Se?Se[h]:{omset:0,ppn:0,orderCount:0};return`<tr class="border-b border-slate-200"><td class="py-2.5 px-3 font-bold text-slate-700">${Pe[h-1]} ${G}</td><td class="py-2.5 px-3 text-right font-bold text-slate-700">${k(b.omset)}</td><td class="py-2.5 px-3 text-right font-bold text-slate-900">${k(b.ppn)}</td><td class="py-2.5 px-3 text-right font-bold text-slate-500">${b.orderCount}</td></tr>`}).join("");d=`
        <div class="grid grid-cols-4 gap-4 mb-8">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">Omset Bruto</p><p class="font-bold text-slate-900">${k(m.omset)}</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">Diskon</p><p class="font-bold text-rose-600">${k(m.disc)}</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">DPP</p><p class="font-bold text-slate-900">${k(u)}</p></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4"><p class="text-[9px] font-bold text-amber-600 uppercase mb-1">PPN Keluaran</p><p class="font-bold text-amber-700">${k(m.ppn)}</p></div>
        </div>
        <table class="w-full text-xs"><thead><tr class="bg-slate-100 text-left"><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px]">Bulan</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">Omset</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">PPN Keluaran</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">Pesanan</th></tr></thead><tbody>${x}</tbody></table>`}else if(e==="income"){const m=ca(),u=m.omset-m.disc-m.hpp,x=st(),h=u-x,b=t.taxScheme||"umkm_final";let v,y,$;b==="umkm_final"?(v=.5,y=m.omset,$="PPh Final UMKM (0,5% × Omset)"):b==="badan_normal"?(v=22,y=Math.max(0,h),$="PPh Badan (22% × Laba Bersih)"):(v=parseFloat(t.customTaxRate)||0,y=Math.max(0,h),$=`PPh Custom (${v}% × Laba Bersih)`);const I=y*(v/100),O=h-I,R=(X,H,_,K)=>`<div class="flex justify-between py-2 ${_?"border-t-2 border-slate-800 mt-1 pt-3":"border-b border-slate-100"}"><span class="${_?"font-bold text-slate-900":"font-bold text-slate-600"}">${X}</span><span class="font-bold ${K||"text-slate-900"}">${H}</span></div>`;d=`<div class="max-w-xl">
            ${R("Omset Bruto",k(m.omset))}
            ${R("(−) Diskon Produk","-"+k(m.disc),!1,"text-rose-600")}
            ${R("(−) HPP","-"+k(m.hpp),!1,"text-rose-600")}
            ${R("Laba Kotor",k(u),!0,"text-emerald-600")}
            ${R("(−) Biaya Operasional","-"+k(x),!1,"text-rose-600")}
            ${R("Laba Bersih Sebelum Pajak",k(h),!0)}
            ${R("(−) Estimasi "+$,"-"+k(I),!1,"text-rose-600")}
            ${R("Laba Bersih Setelah Pajak (Estimasi)",k(O),!0)}
        </div>`}else if(e==="balance"){const m=Ta(),u=t.balanceSheet||{kas:0,piutang:0,hutang:0},x=(parseFloat(u.kas)||0)+(parseFloat(u.piutang)||0)+m.assetHpp,h=parseFloat(u.hutang)||0,b=x-h;d=`
        <div class="grid grid-cols-2 gap-8">
            <div>
                <h3 class="font-bold text-slate-800 uppercase text-xs tracking-widest mb-3 pb-2 border-b-2 border-slate-800">Aset</h3>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Kas &amp; Bank</span><span class="font-bold text-slate-900">${k(u.kas||0)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Piutang Usaha</span><span class="font-bold text-slate-900">${k(u.piutang||0)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Persediaan Barang</span><span class="font-bold text-slate-900">${k(m.assetHpp)}</span></div>
                <div class="flex justify-between py-2.5 border-t-2 border-slate-800 mt-1"><span class="font-bold text-slate-900">Total Aset</span><span class="font-bold text-slate-900">${k(x)}</span></div>
            </div>
            <div>
                <h3 class="font-bold text-slate-800 uppercase text-xs tracking-widest mb-3 pb-2 border-b-2 border-slate-800">Kewajiban &amp; Modal</h3>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Hutang Usaha</span><span class="font-bold text-slate-900">${k(h)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Modal &amp; Laba Ditahan</span><span class="font-bold text-slate-900">${k(b)}</span></div>
                <div class="flex justify-between py-2.5 border-t-2 border-slate-800 mt-1"><span class="font-bold text-slate-900">Total Kewajiban + Modal</span><span class="font-bold text-slate-900">${k(h+b)}</span></div>
            </div>
        </div>`}N("doc-modal-title","Preview "+n),A("doc-paper-content",l+d);const p=f("doc-preview-modal");p&&p.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),B("doc-preview-modal"),setTimeout(()=>{f("doc-preview-modal")&&f("doc-preview-modal").classList.remove("opacity-0"),f("doc-preview-modal-box")&&f("doc-preview-modal-box").classList.remove("scale-95"),typeof window.fitDocPreview=="function"&&window.fitDocPreview()},10)};window.fetchTaxPeriodData=tt;window.getTaxPeriodTotals=ca;window.getTaxPeriodExpenses=st;window.rTaxPanel=Ur;window.rTaxRenderShell=rt;window.switchTaxTab=qr;window.changeTaxYear=Gr;window.changeTaxMonth=Wr;window.rTaxSubContent=Ma;window.rTaxSummary=Gt;window.rTaxIncome=it;window.saveMonthlyExpense=zr;window.rTaxBalance=ot;window.saveBalanceField=Qr;window.rTaxSettingsPanel=Wt;window.toggleCustomTaxRateInput=Jr;window.saveTaxSettingsPanel=Yr;window.openTaxDocPreview=Xr;window.MONTH_NAMES=Pe;const Zr=e=>window.pushModalHistory?.(e);let Be="all",pa="",xe=[];const ba=e=>{let a=parseFloat(e.payment?.tempoBalance)||0,t=e.payment?.tempoPenaltyRate!==void 0?parseFloat(e.payment.tempoPenaltyRate):1,r=e.payment?.tempoPenaltyStopped===!0,s=0,o=e.payment?.tempoDueDate||0,n=0,l=0,d=!1,p=!1;const m=Date.now();o>0&&(m>o?(n=Math.floor((m-o)/(24*60*60*1e3)),n>0&&(d=!0)):(l=Math.ceil((o-m)/(24*60*60*1e3)),l<=3&&(p=!0))),r?s=parseFloat(e.payment?.tempoFixedPenalty)||0:d&&(s=t/100*a*n);let u=a+s;return{sisa:a,rate:t,isStopped:r,latePenalty:s,dueDate:o,daysLate:n,daysLeft:l,isLate:d,isDueSoon:p,totalAkhir:u,statusCategory:d?"late":p?"due_soon":"active"}};window.editTempoPenalty=(e,a)=>{window.customPrompt("Persentase Denda Baru (% / Hari)",a,async t=>{if(!t)return;let r=parseFloat(t.replace(",","."));if(isNaN(r)||r<0)return g("Persentase tidak valid!");j("Menyimpan...");try{await S.collection("freshmart_orders").doc(e).update({"payment.tempoPenaltyRate":r}),g("Persentase denda berhasil diubah!"),window.rAdmPiutang()}catch(s){g("Gagal mengubah denda: "+s.message)}T()})};window.stopTempoPenalty=(e,a,t)=>{let r="Konfirmasi Denda",s=t?"Lanjutkan perhitungan denda otomatis berjalan?":"Hentikan denda berjalan sekarang? (Nominal denda akan dibekukan di "+k(a)+")";$e(r,s,async()=>{j("Menyimpan...");try{await S.collection("freshmart_orders").doc(e).update({"payment.tempoPenaltyStopped":!t,"payment.tempoFixedPenalty":t?null:a}),g(t?"Denda dilanjutkan!":"Denda berhasil dibekukan!"),window.rAdmPiutang()}catch(n){g("Gagal mengubah status denda: "+n.message)}T()},t?"Lanjutkan":"Bekukan")};window.payTempoInstallment=e=>{window.customPrompt("Masukkan Nominal Cicilan (Rp)","",async a=>{if(!a)return;let t=parseFloat(a.replace(/[^0-9]/g,""));if(isNaN(t)||t<=0)return g("Nominal cicilan tidak valid!");j("Menyimpan cicilan...");try{const r=await S.collection("freshmart_orders").doc(e).get();if(!r.exists)return T(),g("Pesanan tidak ditemukan");const s=r.data();let o=(s.payment?.tempoBalance||0)-t,n=s.payment?.installments||[];n.push({date:Date.now(),amount:t,note:"Cicilan"});let l={"payment.tempoBalance":Math.max(0,o),"payment.installments":n};o<=0&&(l["payment.paymentStatus"]="lunas",l.status="Selesai"),await S.collection("freshmart_orders").doc(e).update(l),g("Cicilan berhasil ditambahkan!"),window.rAdmPiutang&&window.rAdmPiutang()}catch(r){g("Gagal memproses cicilan: "+r.message)}T()})};window.previewTempoReceipt=async e=>{j("Memuat data struk...");try{const a=await S.collection("freshmart_orders").doc(e).get();if(!a.exists)return T(),g("Pesanan tidak ditemukan");const t=a.data();T();const r=t.dateString?new Date(t.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",s=i.store?.name||"Toko Putri",o=i.store?.wa||"",n=(h,b,v=32)=>{const y=v-h.length-b.length;return h+(y>0?" ".repeat(y):" ")+b};let l=`<div class="text-center font-bold" style="font-size:13px;margin-bottom:2px;">${c(s)}</div>`;o&&(l+=`<div class="text-center" style="margin-bottom:4px;">WA: ${c(o)}</div>`),l+=`<div class="text-center font-bold uppercase my-2" style="font-size:14px;border-bottom:1px solid #000;border-top:1px solid #000;padding:2px 0;">NOTA TEMPO${t.payment?.paymentStatus==="lunas"?" - LUNAS":""}</div>`,l+=`<div style="white-space:pre;">Order: #${t.orderId}</div><div style="white-space:pre;">Tgl  : ${r}</div><div style="white-space:pre;">Plg  : ${c(t.customer?.name||"Guest").substring(0,20)}</div>`,t.payment?.tempoDueDate&&(l+=`<div style="white-space:pre;">J.Tmp: ${new Date(t.payment.tempoDueDate).toLocaleDateString("id-ID")}</div>`),l+='<div class="border-b border-dashed border-black my-2"></div>';let d=0;if((t.items||[]).forEach(h=>{let b=h.variantName?` (${c(h.variantName)}${h.colorCode?" "+c(h.colorCode):""})`:"";const v=(c(h.name)+b+(h.poTime?" [PO]":"")).substring(0,32),y=h.effectivePrice!==void 0?h.effectivePrice:h.price||0,$=`${parseFloat(h.qty)} ${c(h.unit||"pcs")} x ${y.toLocaleString("id-ID")}`,I=(parseFloat(h.qty)*y).toLocaleString("id-ID");l+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${v}</div><div style="white-space:pre;font-size:11px;">${n($,I)}</div>`,h.poTime&&(l+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${c(h.poTime)}</div>`),d+=parseFloat(h.qty)*y}),l+='<div class="border-b border-dashed border-black my-2"></div>',l+=`<div style="white-space:pre;font-weight:bold;">${n("Subtotal",d.toLocaleString("id-ID"))}</div>`,t.payment?.grandTotal&&t.payment.grandTotal!==d){let h=t.payment.grandTotal-d;h>0?l+=`<div style="white-space:pre;">${n("Ongkir/Biaya",h.toLocaleString("id-ID"))}</div>`:l+=`<div style="white-space:pre;">${n("Diskon",Math.abs(h).toLocaleString("id-ID"))}</div>`}l+=`<div style="white-space:pre;font-weight:bold;margin-top:4px;">${n("TOTAL KREDIT",(t.payment?.grandTotal||d).toLocaleString("id-ID"))}</div>`,l+='<div class="border-b border-black my-2" style="border-width:1px;"></div>';let p=0;t.payment?.installments&&t.payment.installments.length>0&&(l+='<div style="white-space:pre;font-weight:bold;margin-bottom:2px;">HISTORI CICILAN:</div>',t.payment.installments.forEach((h,b)=>{let v=new Date(h.date).toLocaleDateString("id-ID",{day:"2-digit",month:"short"}),y=h.amount.toLocaleString("id-ID");l+=`<div style="white-space:pre;">${n(`${b+1}. ${v}`,y)}</div>`,p+=h.amount}),l+=`<div style="white-space:pre;font-weight:bold;margin-top:2px;">${n("TOTAL DIBAYAR",p.toLocaleString("id-ID"))}</div>`,l+='<div class="border-b border-dashed border-black my-2"></div>');const m=ba(t);l+=`<div style="white-space:pre;font-weight:bold;">${n("SISA POKOK",m.sisa.toLocaleString("id-ID"))}</div>`,m.latePenalty>0&&(l+=`<div style="white-space:pre;">${n("DENDA",Math.round(m.latePenalty).toLocaleString("id-ID"))}</div>`),l+='<div class="border-b border-black my-2" style="border-width:1px;"></div>',l+=`<div style="white-space:pre;font-weight:black;">${n("SISA TAGIHAN",Math.round(m.totalAkhir).toLocaleString("id-ID"))}</div>`,(t.items||[]).some(h=>h.poTime&&h.poTime!=="")&&(l+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa dikenakan biaya tambahan.</div>'),l+='<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;">Terima kasih atas kepercayaannya.</div><div class="border-b border-dashed border-black my-2"></div><div style="height:20px;"></div>',A("receipt-paper-content",l);const x=f("receipt-preview-modal");x&&x.classList.contains("hidden")&&Zr("receipt"),B("receipt-preview-modal"),setTimeout(()=>{f("receipt-preview-modal")&&f("receipt-preview-modal").classList.remove("opacity-0"),f("receipt-preview-modal-box")&&f("receipt-preview-modal-box").classList.remove("scale-95")},10)}catch(a){T(),g("Gagal memuat struk: "+a.message)}};window.markTempoPaid=async e=>{$e("Konfirmasi Pelunasan","Tandai seluruh sisa tagihan tempo pesanan ini sebagai LUNAS?",async()=>{try{if(await S.collection("freshmart_orders").doc(e).update({"payment.paymentStatus":"lunas","payment.tempoBalance":0,status:"Selesai"}),g("Tagihan tempo berhasil dilunasi!"),Array.isArray(Q)){let a=Q.findIndex(t=>t.orderId===e);a!==-1&&(Q[a].payment.paymentStatus="lunas",Q[a].payment.tempoBalance=0,Q[a].status="Selesai")}window.rAdmPiutang()}catch(a){g("Gagal melunasi tagihan: "+a.message)}},"Ya, Lunasi")};window.sendSmartTempoWA=e=>{const a=xe.find(u=>u.orderId===e);if(!a)return g("Data pesanan tidak ditemukan!");const t=a.customer?.wa||"",r=jt(t);if(!r)return g("Nomor WhatsApp pelanggan belum valid!");const s=ba(a),o=i.store?.name||"Toko Putri",n=a.customer?.name||"Pelanggan",l=a.dateString?new Date(a.dateString).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}):"-",d=s.dueDate?new Date(s.dueDate).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}):"-";let p="";i.banks&&i.banks.length>0?p=i.banks.map(u=>`• *Bank ${u.bankName}*: ${u.bankAccount} (a.n ${u.bankOwner})`).join(`
`):p="Silakan hubungi admin/kasir untuk konfirmasi nomor rekening transfer.";let m="";if(s.isLate)m=`*PEMBERITAHUAN JATUH TEMPO - ${o.toUpperCase()}*

Yth. Bpk/Ibu *${n}*,
Kami menginformasikan bahwa tagihan pembelian Tempo Anda telah *MELEWATI BATAS JATUH TEMPO* (${s.daysLate} hari keterlambatan).

📋 *Rincian Tagihan:*
• No. Pesanan: #${a.orderId}
• Tgl. Transaksi: ${l}
• Tgl. Jatuh Tempo: ${d}
• Sisa Pokok: ${k(s.sisa)}
`+(s.latePenalty>0?`• Denda (${s.rate}%/hari): ${k(s.latePenalty)}
`:"")+`• *TOTAL HARUS DIBAYAR: ${k(s.totalAkhir)}*

💳 *Pembayaran dapat ditransfer ke rekening resmi kami:*
${p}

Mohon kesediaannya untuk segera melakukan pelunasan dan mengirimkan bukti transfer ke WhatsApp ini. Terima kasih banyak atas kerjasamanya. 🙏`;else if(s.isDueSoon){let u=s.daysLeft<=0?"hari ini":`${s.daysLeft} hari lagi`;m=`*PENGINGAT JATUH TEMPO - ${o.toUpperCase()}*

Halo Bpk/Ibu *${n}*,
Semoga sehat dan sukses selalu. Kami dari *${o}* menginfokan bahwa tagihan pembelian Tempo Anda akan jatuh tempo *${u}* (${d}).

📋 *Rincian Tagihan:*
• No. Pesanan: #${a.orderId}
• Tgl. Transaksi: ${l}
• Tgl. Jatuh Tempo: ${d}
• *Sisa Tagihan: ${k(s.totalAkhir)}*

💳 *Pembayaran dapat ditransfer ke rekening resmi kami:*
${p}

Apabila sudah melakukan pembayaran, mohon abaikan pesan ini atau kirimkan bukti transfer ke nomor ini. Terima kasih atas kepercayaannya berbelanja di ${o}. 🙏`}else m=`*INFORMASI TAGIHAN TEMPO - ${o.toUpperCase()}*

Halo Bpk/Ibu *${n}*,
Berikut informasi rincian tagihan pembelian Tempo Anda di *${o}*:

📋 *Rincian Tagihan:*
• No. Pesanan: #${a.orderId}
• Tgl. Transaksi: ${l}
• Tgl. Jatuh Tempo: ${d} (tersisa ${s.daysLeft} hari)
• *Sisa Pokok: ${k(s.totalAkhir)}*

💳 *Rekening Pembayaran Resmi:*
${p}

Terima kasih telah menjadi pelanggan setia ${o}. 🙏`;typeof window.openWhatsApp=="function"?window.openWhatsApp(r,m):xs(r,m)};window.setTempoFilter=e=>{Be=e,Qt()};window.onTempoSearch=e=>{pa=e||"",zt()};const zt=()=>{const e=f("tempo-cards-container");if(!e)return;let a=xe.filter(t=>{const r=ba(t);if(Be==="late"&&!r.isLate||Be==="due_soon"&&(!r.isDueSoon||r.isLate)||Be==="active"&&(r.isLate||r.isDueSoon))return!1;if(pa.trim()){const s=pa.trim().toLowerCase(),o=(t.customer?.name||"").toLowerCase(),n=(t.customer?.wa||"").toLowerCase(),l=(t.orderId||"").toLowerCase();if(!o.includes(s)&&!n.includes(s)&&!l.includes(s))return!1}return!0});if(a.length===0){e.innerHTML=`
            <div class="col-span-full bg-white dark:bg-slate-800 p-8 text-center rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-16 h-16 bg-slate-100 dark:bg-slate-700/50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i class="fa-solid fa-filter-circle-xmark text-2xl"></i>
                </div>
                <h4 class="font-bold text-slate-700 dark:text-slate-200 text-sm uppercase tracking-wider">Tidak Ada Data</h4>
                <p class="text-slate-500 dark:text-slate-400 mt-1 text-xs font-medium">Tidak ada tagihan yang cocok dengan filter atau kata kunci pencarian.</p>
            </div>
        `;return}e.innerHTML=a.map(t=>ei(t)).join("")},ei=e=>{const a=ba(e);jt(e.customer?.wa||"");const t=a.dueDate?new Date(a.dueDate).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"}):"-";let r="",s="border-slate-200 dark:border-slate-700";return a.isLate?(s="border-rose-400 dark:border-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.12)]",r=`<div class="absolute -right-7 top-4 bg-rose-600 text-white text-[9px] font-bold uppercase tracking-widest px-8 py-1 rotate-45 shadow-sm">TERLAMBAT ${a.daysLate} HARI</div>`):a.isDueSoon?(s="border-amber-400 dark:border-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.12)]",r=`<div class="absolute -right-7 top-4 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-widest px-8 py-1 rotate-45 shadow-sm">H-${a.daysLeft<=0?"0 (HARI INI)":a.daysLeft}</div>`):r=`<div class="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">Sisa ${a.daysLeft} Hari</div>`,`
    <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border ${s} relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between">
        ${r}
        
        <div>
            <div class="flex justify-between items-start mb-3 pr-12">
                <div>
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pesanan #${e.orderId}</p>
                    <h3 class="font-bold text-slate-800 dark:text-slate-100 mt-1 uppercase text-sm">${c(e.customer?.name||"Anonim")}</h3>
                    <p class="text-[11px] font-bold text-slate-500 flex items-center gap-1.5 mt-0.5">
                        <i class="fa-brands fa-whatsapp text-emerald-500"></i>
                        <a href="javascript:void(0)" onclick="window.sendSmartTempoWA('${e.orderId}')" class="hover:underline text-slate-600 dark:text-slate-300 font-mono">+${c(e.customer?.wa||"-")}</a>
                    </p>
                </div>
            </div>
            
            <div class="space-y-2 mb-3 bg-slate-50 dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Jatuh Tempo</span>
                    <span class="font-bold font-mono ${a.isLate?"text-rose-600":a.isDueSoon?"text-amber-600":"text-slate-700 dark:text-slate-300"}">${t}</span>
                </div>
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Sisa Pokok</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${k(a.sisa)}</span>
                </div>
                ${a.isLate?`
                <div class="flex justify-between items-center text-xs ${a.isStopped?"text-slate-500":"text-rose-600"}">
                    <span class="font-bold">Denda (${a.rate}%/hari) ${a.isStopped?'<span class="text-[9px] bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded ml-1">STOPPED</span>':""}</span>
                    <span class="font-bold font-mono">+${k(a.latePenalty)}</span>
                </div>`:""}
            </div>
            
            <div class="flex justify-between items-center bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 p-3.5 rounded-xl border border-rose-100 dark:border-rose-900/30 mb-3">
                <span class="text-[10px] font-bold uppercase tracking-widest">Total Tagihan</span>
                <span class="text-sm font-bold font-mono tracking-tight">${k(a.totalAkhir)}</span>
            </div>
            
            <div class="flex gap-2 mb-3">
                <button onclick="editTempoPenalty('${e.orderId}', ${a.rate})" class="flex-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                    <i class="fa-solid fa-percent"></i> Edit Denda
                </button>
                <button onclick="stopTempoPenalty('${e.orderId}', ${a.latePenalty}, ${a.isStopped})" class="flex-1 ${a.isStopped?"bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.15)]":"bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-200"} rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                    <i class="fa-solid ${a.isStopped?"fa-play":"fa-stop"}"></i> ${a.isStopped?"Lanjut Denda":"Stop Denda"}
                </button>
            </div>
            
            ${e.payment?.installments&&e.payment.installments.length>0?`
            <div class="mb-3 space-y-1.5 bg-slate-50 dark:bg-slate-900/30 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex justify-between">
                    <span>Riwayat Cicilan</span>
                    <span>Total: ${k(e.payment.installments.reduce((o,n)=>o+(parseFloat(n.amount)||0),0))}</span>
                </div>
                ${e.payment.installments.map(o=>`
                <div class="flex justify-between items-center text-[10px]">
                    <span class="text-slate-500 dark:text-slate-400 font-mono">${new Date(o.date).toLocaleDateString("id-ID",{day:"2-digit",month:"short"})}</span>
                    <span class="font-bold text-[var(--color-primary)] font-mono">+${k(o.amount)}</span>
                </div>
                `).join("")}
            </div>`:""}
        </div>
        
        <div class="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
            <div class="flex gap-2">
                <button onclick="window.sendSmartTempoWA('${e.orderId}')" class="flex-1 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer shadow-xs active:scale-95" title="Kirim Tagihan Otomatis WhatsApp">
                    <i class="fa-brands fa-whatsapp text-sm"></i> Tagih WA
                </button>
                <button onclick="previewTempoReceipt('${e.orderId}')" class="flex-1 bg-amber-500 hover:bg-amber-600 text-white rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm shadow-amber-500/20 transition-all active:scale-95" title="Cetak Struk Nota Tempo">
                    <i class="fa-solid fa-print"></i> Struk
                </button>
            </div>
            <div class="flex gap-2">
                <button onclick="payTempoInstallment('${e.orderId}')" class="flex-1 bg-white dark:bg-slate-700 border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95">
                    <i class="fa-solid fa-money-bill-wave"></i> Cicil
                </button>
                <button onclick="markTempoPaid('${e.orderId}')" class="flex-1 primary-bg hover:opacity-90 text-white rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm transition-all active:scale-95">
                    <i class="fa-solid fa-check-double"></i> Lunas
                </button>
            </div>
        </div>
    </div>`},Qt=()=>{let e=0,a=0,t=0,r=0,s=0;xe.forEach(n=>{const l=ba(n);e+=l.totalAkhir,l.isLate?(a+=l.totalAkhir,t++):l.isDueSoon?r++:s++});let o=`
    <div class="max-w-full pb-12 fade-in-scale text-sm space-y-5">
        
        <!-- HEADER KARTU STATISTIK METRIK PIUTANG -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400">
                    <i class="fa-solid fa-hand-holding-dollar text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Piutang Aktif</p>
                    <p class="text-base font-bold text-slate-900 dark:text-white font-mono mt-0.5">${k(e)}</p>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400">
                    <i class="fa-solid fa-triangle-exclamation text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Piutang Terlambat</p>
                    <p class="text-base font-bold text-rose-600 dark:text-rose-400 font-mono mt-0.5">${k(a)}</p>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                    <i class="fa-solid fa-file-invoice-dollar text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Nota Tempo</p>
                    <p class="text-base font-bold text-slate-900 dark:text-white font-mono mt-0.5">${xe.length} Nota</p>
                </div>
            </div>
        </div>

        <!-- SEARCH BAR & FILTER STATUS PILLS -->
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
            <div class="relative">
                <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input type="text" 
                    id="tempo-search-input"
                    value="${c(pa)}"
                    placeholder="Cari nama pelanggan, nomor WhatsApp, atau ID pesanan..." 
                    oninput="window.onTempoSearch(this.value)"
                    class="w-full pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${pa?`
                <button onclick="window.onTempoSearch(''); el('tempo-search-input').value='';" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    <i class="fa-solid fa-circle-xmark text-sm"></i>
                </button>`:""}
            </div>

            <div class="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-bold uppercase tracking-wider">
                <button onclick="window.setTempoFilter('all')" 
                    class="px-3.5 py-1.5 rounded-xl border transition-all shrink-0 ${Be==="all"?"primary-bg text-white border-transparent shadow-xs":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                    Semua (${xe.length})
                </button>
                <button onclick="window.setTempoFilter('late')" 
                    class="px-3.5 py-1.5 rounded-xl border transition-all shrink-0 ${Be==="late"?"bg-rose-600 text-white border-rose-600 shadow-xs":"bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/50 hover:bg-rose-100"}">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i> Terlambat (${t})
                </button>
                <button onclick="window.setTempoFilter('due_soon')" 
                    class="px-3.5 py-1.5 rounded-xl border transition-all shrink-0 ${Be==="due_soon"?"bg-amber-500 text-white border-amber-500 shadow-xs":"bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50 hover:bg-amber-100"}">
                    <i class="fa-solid fa-clock mr-1"></i> H-3 Jatuh Tempo (${r})
                </button>
                <button onclick="window.setTempoFilter('active')" 
                    class="px-3.5 py-1.5 rounded-xl border transition-all shrink-0 ${Be==="active"?"bg-emerald-600 text-white border-emerald-600 shadow-xs":"bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50 hover:bg-emerald-100"}">
                    <i class="fa-solid fa-circle-check mr-1"></i> Berjalan (${s})
                </button>
            </div>
        </div>
    `;xe.length===0?o+=`
        <div class="bg-white dark:bg-slate-800 p-10 text-center rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="w-20 h-20 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fa-solid fa-check-double text-4xl"></i>
            </div>
            <h3 class="font-bold text-slate-800 dark:text-slate-100 text-base uppercase tracking-widest">Luar Biasa! Semua Tagihan Lunas</h3>
            <p class="text-slate-500 dark:text-slate-400 mt-1.5 text-xs font-medium">Tidak ada piutang tempo yang sedang aktif atau tertunda saat ini.</p>
        </div>`:o+='<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="tempo-cards-container"></div>',o+="</div>",A("admin-content",o),xe.length>0&&zt()};window.rAdmPiutang=async()=>{j("Memuat data piutang..."),xe=[];try{(await S.collection("freshmart_orders").where("payment.method","==","tempo").where("payment.paymentStatus","==","hutang").get()).forEach(a=>{xe.push(a.data())})}catch(e){T(),g("Gagal memuat piutang: "+e.message);return}T(),xe.sort((e,a)=>{let t=e.payment?.tempoDueDate||0,r=a.payment?.tempoDueDate||0;return t-r}),Qt()};const ai=e=>{ks(e),Jt()},Jt=()=>{const e=hs||"all",a=(Ga||[]).filter(o=>e==="visible"?o.isVisible!==!1:e==="hidden"?o.isVisible===!1:!0),t=`
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
            ${[{k:"all",l:"Semua"},{k:"visible",l:"Ditampilkan"},{k:"hidden",l:"Disembunyikan"}].map(o=>`
                <button onclick="filterReviews('${o.k}')" class="px-3.5 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${e===o.k?"shadow-sm":"text-slate-500 dark:text-slate-400"}" style="${e===o.k?"background:var(--color-primary);color:#fff":""}">${o.l}</button>
            `).join("")}
        </div>`;if(!a.length){A("admin-content",'<div class="max-w-full pb-10 text-sm fade-in-scale">'+t+'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-comment-slash text-5xl mb-4 opacity-30"></i>Belum ada ulasan</div></div>');return}const r=o=>Array.from({length:5},(n,l)=>`<i class="fa-solid fa-star ${l<Math.round(o)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join(""),s=a.map(o=>{let n="";try{o.createdAt&&o.createdAt.toDate&&(n=o.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))}catch{}const l=o.isVisible===!1;return`
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border shadow-sm ${l?"border-rose-200 bg-rose-50/40 dark:border-rose-900/40 dark:bg-rose-900/10":"border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"} mb-3">
            <div class="flex items-start justify-between gap-3 mb-2">
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate">${c(o.customerName||"Pelanggan")}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">${c(o.productName||"")}${o.variantName?" · "+c(o.variantName):""}</p>
                </div>
                <span class="text-[9px] font-bold text-slate-400 whitespace-nowrap">${n}</span>
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
        </div>`}).join("");A("admin-content",'<div class="max-w-full pb-10 text-sm fade-in-scale">'+t+s+"</div>")},ti=async e=>{const a=(Ga||[]).find(t=>t&&t.id!=null&&String(t.id)===String(e));a&&typeof window.customPrompt=="function"&&window.customPrompt("Tulis balasan untuk ulasan ini:",a.adminReply||"",async t=>{j("Menyimpan balasan...");try{await S.collection("freshmart").doc("cms_data").collection("reviews").doc(e.toString()).update({adminReply:t}),g("Balasan tersimpan!")}catch{g("Gagal menyimpan balasan!")}finally{T()}})},si=async e=>{const a=(Ga||[]).find(r=>r&&r.id!=null&&String(r.id)===String(e));if(!a)return;const t=a.isVisible===!1;j("Menyimpan...");try{await S.collection("freshmart").doc("cms_data").collection("reviews").doc(e.toString()).update({isVisible:t}),g(t?"Ulasan ditampilkan lagi!":"Ulasan disembunyikan dari halaman produk!")}catch{g("Gagal mengubah status ulasan!")}finally{T()}},ri=e=>{$e("Hapus Ulasan","Ulasan yang dihapus tidak bisa dikembalikan lagi.",async()=>{j("Menghapus...");try{await S.collection("freshmart").doc("cms_data").collection("reviews").doc(e.toString()).delete(),g("Ulasan dihapus!")}catch{g("Gagal menghapus ulasan!")}finally{T()}})};window.filterReviews=ai;window.rAdmReviews=Jt;window.replyToReview=ti;window.toggleReviewVisibility=si;window.deleteReview=ri;window.rAdmL=e=>{Ca(e),typeof window.setCTab=="function"&&window.setCTab(e),window.cTab=e,A("admin-content",`
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
    `),rAdmItms(e)};window.rAdmItms=e=>{e&&(Ca(e),typeof window.setCTab=="function"&&window.setCTab(e),window.cTab=e);const a=f("admin-list-container"),t=a?a.closest(".scroll-content"):null,r=t?t.scrollTop:0;if(e==="products"&&f("admin-product-stats")){const l=Ta();A("admin-product-stats",`
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
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400">Modal (HPP): <b class="text-slate-700 dark:text-slate-200">${k(l.assetHpp)}</b></p>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">Harga Jual: <b class="text-slate-700 dark:text-slate-200">${k(l.assetJual)}</b></p>
                </div>
            </div>
        `)}let s=[...i[e]||[]];s.sort((l,d)=>(d.id||0)-(l.id||0));const o=(ts||window.aSq||"").toLowerCase();let n=s.filter(l=>{let d=(l.name||l.title||l.bankName||l.code||l.sku||l.phone||"").toLowerCase().includes(o);return e==="products"&&!d&&l.variants&&(d=l.variants.some(p=>p.sku&&p.sku.toLowerCase().includes(o))),d});if(!n.length)return A("admin-list-container",'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-folder-open text-5xl mb-4 opacity-30"></i>Data kosong</div>');A("admin-list-container",n.map(l=>{let d=e==="products",p=d&&(l.isActive==="false"||l.isActive===!1),m=p?"border-rose-200 bg-rose-50/50 dark:border-rose-900/50 dark:bg-rose-900/10":"border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800",u=p?"text-slate-500 dark:text-slate-400 line-through":"text-slate-800 dark:text-slate-100",x=l.img?`<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white border border-slate-100 dark:border-slate-700/60 rounded-2xl p-1.5 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${c(l.img)}" alt="${c(l.name)}" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Img'" class="w-full h-full object-contain ${p?"grayscale opacity-50":""}"></div>`:'<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-2xl flex items-center justify-center text-slate-300 dark:text-slate-600"><i class="fa-solid fa-image text-2xl"></i></div>';const h=window.isAdm||window.__localIsAdm;let b=d?p?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl primary-icon-btn border flex items-center justify-center transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus('${l.id}', true)" title="Aktifkan Stok"><i class="fa-solid fa-check text-xs sm:text-sm"></i></button>`:`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-500 flex items-center justify-center hover:bg-amber-500 hover:text-white dark:bg-amber-900/30 dark:border-amber-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus('${l.id}', false)" title="Nonaktifkan (Habis)"><i class="fa-solid fa-ban text-xs sm:text-sm"></i></button>`:"",v=d?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white dark:bg-blue-900/30 dark:border-blue-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); duplicateProduct('${l.id}')" title="Duplikat Produk"><i class="fa-regular fa-copy text-xs sm:text-sm"></i></button>`:"";const y=i.store.useStock===!0||i.store.useStock==="true";let $=d&&y?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-500 flex items-center justify-center hover:bg-indigo-500 hover:text-white dark:bg-indigo-900/30 dark:border-indigo-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openRestockModal('${l.id}')" title="Restock Produk"><i class="fa-solid fa-boxes-stacked text-xs sm:text-sm"></i></button>`:"",I=d?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl primary-icon-btn border flex items-center justify-center transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openQuickPriceModal('${l.id}')" title="Edit Cepat Harga"><i class="fa-solid fa-tags text-xs sm:text-sm"></i></button>`:"",O=e==="customers"?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-300 text-amber-600 flex items-center justify-center hover:bg-amber-500 hover:text-white dark:bg-amber-900/30 dark:border-amber-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); if(typeof window.setCurrentMember==='function') window.setCurrentMember(appData.customers ? appData.customers.find(c=>String(c.id||c.phone)===String('${l.id||l.phone}'))||{name:'${c(l.name)}',phone:'${c(l.phone)}',points:${parseFloat(l.points)||0}} : {name:'${c(l.name)}',phone:'${c(l.phone)}',points:${parseFloat(l.points)||0}}); if(typeof window.openMemberModal==='function') window.openMemberModal();" title="Buka Kartu Member VIP"><i class="fa-solid fa-id-card text-xs sm:text-sm"></i></button>`:"",R=`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-500 hover:text-white dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oAEd('${e}','${l.id}')" title="Edit Data"><i class="fa-solid fa-pen text-xs sm:text-sm"></i></button>`,X=`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oADel('${e}','${l.id}')" title="Hapus Permanen"><i class="fa-solid fa-trash text-xs sm:text-sm"></i></button>`;return`
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[1.5rem] border shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all duration-300 ${m}" onclick="oAEd('${e}','${l.id}')">
            <div class="flex items-start sm:items-center gap-4 min-w-0 w-full">
                ${x}
                <div class="min-w-0 flex flex-col justify-center py-1">
                    <p class="text-xs sm:text-sm font-bold ${u} line-clamp-2 uppercase tracking-wide leading-snug mb-1.5">${c(l.name||l.title||l.bankName||l.code||"Item")}</p>
                    ${d?`<p class="text-sm sm:text-base font-bold text-[var(--color-primary)] tracking-tight">${k(l.price)}</p>`:""}
                    ${d&&h&&y?`<p class="text-[10px] font-bold mt-1 ${(l.variants&&l.variants.length?l.variants.reduce((H,_)=>H+(parseFloat(_.stock)||0),0):parseFloat(l.stock)||0)===0?"text-rose-500 animate-pulse":"text-blue-500"}"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${l.variants&&l.variants.length?l.variants.reduce((H,_)=>H+(parseFloat(_.stock)||0),0).toFixed(2).replace(/\.?0+$/,""):parseFloat(l.stock)||0}</p>`:""}
                    ${d&&h&&l.hpp?`<p class="text-[10px] font-bold text-amber-500 mt-0.5"><i class="fa-solid fa-coins mr-1"></i>HPP: ${k(l.hpp)}</p>`:""}
                    ${d?(()=>{const H=l.variants&&l.variants.length?l.variants.reduce((_,K)=>_+(parseFloat(K.totalSold)||0),0):parseFloat(l.totalSold)||0;return H>0?`<p class="text-[10px] font-bold text-orange-400 mt-0.5"><i class="fa-solid fa-fire-flame-curved mr-1"></i>Terjual: ${H}</p>`:""})():""}
                    ${e==="colors"?`<div class="flex items-center gap-2 mt-1"><div class="w-4 h-4 rounded-full border border-slate-200 dark:border-slate-600 shadow-sm" style="background-color: ${c(l.hex||"transparent")}"></div><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-swatchbook mr-1"></i>${c(l.catalog||"Tanpa Katalog")}</p></div>`:""}
                    ${e==="customers"?`<p class="text-xs font-bold text-slate-500 dark:text-slate-400"><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i>+${c(l.phone)}</p><p class="text-[11px] font-bold text-[var(--color-primary)] mt-0.5"><i class="fa-solid fa-star mr-1"></i>${parseFloat(l.points)||0} Poin</p>`:""}
                    ${e==="rewards"?`<p class="text-sm font-bold text-violet-500"><i class="fa-solid fa-star mr-1"></i>${parseFloat(l.pointsCost)||0} Poin</p><p class="text-[10px] font-bold text-slate-500 mt-0.5"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${parseFloat(l.stock)||0}</p>`:""}
                </div>
            </div>
            <div class="flex gap-2.5 shrink-0 self-end sm:self-center pt-3 sm:pt-0 border-t border-slate-100 sm:border-0 dark:border-slate-700/50 w-full sm:w-auto justify-end">
                ${b}
                ${$}
                ${I}
                ${v}
                ${O}
                ${R}
                ${X}
            </div>
        </div>`}).join("")),t&&requestAnimationFrame(()=>{t.scrollTop=r})};typeof window.bannerTmr>"u"&&(window.bannerTmr=null);let ja=null;const Fa=()=>{document.querySelectorAll("#banner-slider video.banner-video-element").forEach(e=>{e.dataset.init||(e.dataset.init="true",e.muted=!0,e.loop=!0,e.playsInline=!0,e.setAttribute("playsinline",""),e.setAttribute("loop",""),e.setAttribute("autoplay","")),e.dataset.loopAttached||(e.dataset.loopAttached="true",e.addEventListener("ended",()=>{e.currentTime=0,e.play().catch(()=>{})})),e.dataset.userUnmuted==="true"&&(e.muted=!1),e.play().catch(()=>{})})},ii=(e,a)=>{const t=f(`banner-slide-${a}`)||e&&e.closest(".banner-slide-item");if(!t)return;const r=t.querySelector("video.banner-video-element");if(r){r.muted?(r.muted=!1,r.volume=1,r.dataset.userUnmuted="true",r.play().catch(()=>{}),e&&(e.innerHTML='<i class="fa-solid fa-volume-high text-xs"></i> <span>Suara On</span>',e.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 primary-bg text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer")):(r.muted=!0,r.dataset.userUnmuted="false",e&&(e.innerHTML='<i class="fa-solid fa-volume-xmark text-xs"></i> <span>Muted</span>',e.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer"));return}const s=t.querySelector("iframe.banner-video-iframe");s&&(s.dataset.muted!=="false"?(s.dataset.muted="false",s.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}',"*"),s.contentWindow?.postMessage('{"event":"command","func":"setVolume","args":[100]}',"*"),e&&(e.innerHTML='<i class="fa-solid fa-volume-high text-xs"></i> <span>Suara On</span>',e.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 primary-bg text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer")):(s.dataset.muted="true",s.contentWindow?.postMessage('{"event":"command","func":"mute","args":""}',"*"),e&&(e.innerHTML='<i class="fa-solid fa-volume-xmark text-xs"></i> <span>Muted</span>',e.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer")))},Xe=e=>{const a=f("banner-dots-container");if(!a)return;a.querySelectorAll(".banner-dot-item").forEach((r,s)=>{s===e?r.className="banner-dot-item h-2.5 rounded-full transition-all duration-300 bg-[var(--color-primary)] w-7 shadow-sm":r.className="banner-dot-item w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"})},oi=()=>{ja&&clearTimeout(ja),ja=setTimeout(()=>{const e=f("banner-slider");if(!e)return;const a=e.querySelectorAll(".banner-slide-item");if(!a||!a.length)return;let t=0,r=1/0;a.forEach((s,o)=>{const n=Math.abs(s.offsetLeft-e.scrollLeft);n<r&&(r=n,t=o)}),Xe(t)},100)},ni=e=>{clearInterval(window.bannerTmr);const a=f("banner-slider");if(!a)return;const t=a.querySelectorAll(".banner-slide-item");t&&t[e]&&(a.scrollTo({left:t[e].offsetLeft-a.offsetLeft,behavior:"smooth"}),Xe(e)),setTimeout(ga,8e3)},li=()=>{clearInterval(window.bannerTmr);const e=f("banner-slider");if(!e)return;const a=e.querySelectorAll(".banner-slide-item");if(!a||!a.length)return;let t=0,r=1/0;a.forEach((o,n)=>{const l=Math.abs(o.offsetLeft-e.scrollLeft);l<r&&(r=l,t=n)});const s=(t-1+a.length)%a.length;e.scrollTo({left:a[s].offsetLeft-e.offsetLeft,behavior:"smooth"}),Xe(s),setTimeout(ga,8e3)},di=()=>{clearInterval(window.bannerTmr);const e=f("banner-slider");if(!e)return;const a=e.querySelectorAll(".banner-slide-item");if(!a||!a.length)return;let t=0,r=1/0;a.forEach((o,n)=>{const l=Math.abs(o.offsetLeft-e.scrollLeft);l<r&&(r=l,t=n)});const s=(t+1)%a.length;e.scrollTo({left:a[s].offsetLeft-e.offsetLeft,behavior:"smooth"}),Xe(s),setTimeout(ga,8e3)},ga=()=>{if(clearInterval(window.bannerTmr),!f("banner-slider")||!i.banners||i.banners.length<=1)return;const a=()=>{Fa()};a(),Fa(),window.bannerTmr=setInterval(()=>{const t=f("banner-slider");if(!t)return clearInterval(window.bannerTmr);const r=t.querySelectorAll(".banner-slide-item");if(!r||r.length<=1){const s=t.scrollWidth-t.clientWidth;t.scrollLeft>=s-10?t.scrollTo({left:0,behavior:"smooth"}):t.scrollBy({left:t.clientWidth,behavior:"smooth"})}else{let s=0,o=1/0;r.forEach((d,p)=>{const m=Math.abs(d.offsetLeft-t.scrollLeft);m<o&&(o=m,s=p)});const n=(s+1)%r.length,l=r[n];t.scrollTo({left:l.offsetLeft-t.offsetLeft,behavior:"smooth"}),Xe(n)}setTimeout(a,400)},8e3)};window.forcePlayBannerVideos=Fa;window.toggleBannerVideoSound=ii;window.updateBannerDots=Xe;window.onBannerScroll=oi;window.scrollToBanner=ni;window.scrollBannerPrev=li;window.scrollBannerNext=di;window.startBannerAutoSlide=ga;const Yt=[{id:"log-1-9-0",version:"v1.9.0",date:"2026-09-20",title:"Drop-Point Delivery: Kirim Pesanan ke Lokasi Berbeda (Proyek, Tukang, Mandor) dengan Kalkulasi Ongkir Presisi Toko-ke-Tujuan",category:"feature",badge:"Drop-Point Delivery v1.9.0",items:["Fitur Kirim ke Lokasi Berbeda (Drop-Point): Pembeli dapat mengorder dari rumah namun menentukan lokasi pengiriman yang berbeda (contoh: ke lokasi proyek, tukang, atau mandor) dengan satu toggle mudah di halaman checkout.","Kalkulasi Ongkir Presisi Toko-ke-Tujuan: Ongkos kirim dihitung akurat berdasarkan jarak dari Toko Putri ke lokasi tujuan (bukan lokasi pembeli), memastikan harga ongkir yang fair dan transparan untuk setiap order drop-point.","Data Penerima di Lokasi: Kurir mendapat informasi lengkap penerima di lokasi: nama penerima (tukang/mandor/PIC), nomor WhatsApp aktif, dan alamat lokasi proyek yang detail.","GPS / Link Maps Lokasi Tujuan: Tombol sematkan GPS otomatis atau input link/koordinat Google Maps untuk lokasi tujuan, memudahkan kurir menavigasi ke lokasi proyek dengan tepat.",'Panel Admin CMS Drop-Point: Halaman detail order di CMS Admin menampilkan badge "📍 Lokasi Berbeda", info lengkap penerima, dan tombol langsung buka Google Maps ke lokasi tujuan proyek.','Konfirmasi Pembayaran Terstruktur: Halaman ringkasan pembayaran menampilkan section khusus "Dikirim ke Lokasi Berbeda" dengan detail nama penerima, WA penerima, dan alamat tujuan yang terpisah dari data pemesan.']},{id:"log-1-8-9",version:"v1.8.9",date:"2026-09-19",title:"Sistem Cerdas Piutang Tempo (Smart Due Status, Filter Kategori, Metrik Statistik, & 1-Klik Tagih WhatsApp Otomatis) & Cetak Surat Penawaran Harga (SPH Proyek A4/PDF)",category:"feature",badge:"Smart Tempo CRM & Project Quotation SPH v1.8.9",items:["Dashboard Metrik Statistik Piutang CMS: Menampilkan kartu ringkasan Total Piutang Aktif, Total Piutang Terlambat, dan Total Nota Tempo secara realtime di dashboard seller.","Filter Cepat Keterlambatan & Pencarian Instan: Tab filter pintar [Semua], [🔴 Terlambat], [🟡 H-3 Segera Jatuh Tempo], dan [🟢 Berjalan] dengan badge counter dinamis, serta kolom pencarian cepat nama pelanggan, nomor WA, atau ID pesanan.","Fitur 1-Klik Tagih WhatsApp Otomatis: Membuat template pesan penagihan profesional dan santun sesuai status tempo (pengingat ramah H-3 atau pemberitahuan jatuh tempo) lengkap dengan rincian nota, sisa pokok, denda, dan nomor rekening resmi toko.",'Cetak Surat Penawaran Harga (SPH Proyek): Menambahkan tombol "Cetak SPH" langsung di keranjang belanja toko dengan format resmi A4/PDF lengkap dengan KOP Toko Putri, masa berlaku penawaran 14 hari, rincian spesifikasi barang/harga, serta kolom tanda tangan/stempel rekanan dan toko.',"Ekspor Dokumen & Kompatibilitas Tinggi: Dokumen penawaran harga dapat langsung dicetak thermal/printer A4 atau disimpan dalam format PDF resolusi tinggi untuk pengajuan anggaran proyek."]},{id:"log-1-8-8",version:"v1.8.8",date:"2026-09-19",title:"Penyempurnaan Navigasi Tombol Back Sistematis: Urutan Mundur Berurutan Halaman (Sequential Unwinding), Eliminasi Lompatan Layar, Proteksi Cascade Modal, & Stack Produk Terkait",category:"enhancement",badge:"Seamless Sequential Navigation v1.8.8",items:["Urutan Mundur Halaman Berurutan (Sequential Unwinding): Navigasi tombol back (tombol panah header, tombol browser, maupun gesture hardware back Android) kini berjalan teratur satu demi satu (Pembayaran -> Pengiriman -> Keranjang -> Beranda) tanpa ada layar yang terlompati atau melompat langsung ke Beranda.","Eliminasi Lompatan & Infinite Loop Back: Menghapus bypass langsung ke Beranda pada handleAppBackButton dan menyelaraskan penanganan popstate browser dengan stack riwayat tampilan aktif.","Proteksi Penutupan Modal Terprogram (Prevent Cascade-Close): Menambahkan flag isProgrammaticModalClose sehingga saat modal ditutup via tombol silang (X) atau backdrop, sistem tidak memicu penutupan beruntun pada modal di bawahnya maupun mereset tampilan halaman.","Penyelarasan Modal Lengkap: Menambahkan dukungan penutupan modal voucher, panduan belanja (guide), changelog, garansi kualitas, dan sertifikasi keamanan ke closeModalByName.","Navigasi Mundur Produk Terkait (Related Products Stack): Memilih produk rekomendasi sejenis kini menyimpan riwayat produk sebelumnya, sehingga saat tombol back ditekan, pengguna kembali ke produk yang dilihat sebelumnya secara berurutan sebelum modal tertutup.","Navigasi Kembali CMS Seller (Admin Tab to Menu Unwinding): Menekan tombol back (panah header maupun tombol back Android) saat berada di dalam tab menu CMS (Produk, Pesanan, Pengaturan, dsb) kini mengembalikan tampilan ke Menu Utama CMS terlebih dahulu secara rapi, tanpa langsung memunculkan dialog konfirmasi keluar seller.","Dialog Konfirmasi Keluar Beranda: Tombol back pada halaman Beranda (saat tidak ada modal terbuka) secara konsisten memunculkan Dialog Konfirmasi Keluar Aplikasi yang rapi dan aman."]},{id:"log-1-8-7",version:"v1.8.7",date:"2026-09-19",title:"Pemisahan Tegas Pelanggan Umum vs Member Resmi: Proteksi Poin Loyalty & Pembayaran Tempo (Wajib Verifikasi Database Admin CMS), Konfirmasi Registrasi Member Sekali Klik, & Dialog Edukasi Pelanggan",category:"feature",badge:"Membership Verification & Tempo Security v1.8.7",items:["Pemisahan Hak Akses Pelanggan Umum & Member Resmi: Nomor HP baru yang dimasukkan saat pemesanan berstatus murni sebagai Pelanggan Umum. Sistem tidak lagi mendaftarkan pelanggan secara otomatis ke database member sebelum dikonfirmasi oleh Admin di CMS.","Proteksi Ketat Pembayaran Cash Tempo: Opsi pembayaran Cash Tempo disembunyikan secara otomatis bagi pelanggan umum dan dilindungi ganda pada validasi transaksi database cloud. Pembayaran tempo eksklusif untuk member yang nomornya telah terdaftar resmi.","Proteksi Akumulasi & Penukaran Poin Loyalty: Fitur perolehan poin belanja dan diskon penukaran poin hanya berlaku untuk member terverifikasi. Pelanggan umum tidak mendapatkan poin sebelum nomor HP disimpan ke database member CMS oleh Admin.","Fitur Konfirmasi Member Cepat di CMS Pesanan Admin: Admin toko dapat langsung mendaftarkan nomor pelanggan umum menjadi Member Resmi dengan satu kali klik (+ Konfirmasi & Daftarkan Sebagai Member) pada panel detail pesanan.","Dialog Edukasi Pelanggan & Bantuan WhatsApp: Saat pelanggan umum mengecek nomor HP di menu kartu member digital atau checkout, sistem menyajikan status ramah dan tombol kontak WhatsApp Admin untuk aktivasi membership resmi."]},{id:"log-1-8-6",version:"v1.8.6",date:"2026-09-19",title:"Perbaikan Kendala Pembuatan Pesanan Member (ReferenceError memberPointsUpdated), Stabilitas Transaksi Checkout, & Sinkronisasi Saldo Poin Pelanggan",category:"bugfix",badge:"Order Processing & Loyalty Fix v1.8.6",items:["Resolusi Kendala Pembuatan Pesanan: Memperbaiki kendala ReferenceError: memberPointsUpdated is not defined pada saat pelanggan menyelesaikan pesanan saat toko tidak mengaktifkan fitur pelacakan stok langsung.","Penyelarasan Variabel Transaksi: Mendeklarasikan dan menyelaraskan variabel memberPointsUpdated secara konsisten di seluruh percabangan transaksi Firestore.","Stabilitas Transaksi Checkout & Poin Member: Menjamin proses checkout, akumulasi poin reward, pemotongan poin hadiah, dan pencatatan pesanan ke database cloud berjalan 100% lancar tanpa hambatan.","Sinkronisasi Total Sistem: Memperbarui kompilasi aset produksi web, paket flashdisk siap pakai, dan sinkronisasi platform native Android."]},{id:"log-1-8-5",version:"v1.8.5",date:"2026-09-18",title:"Pengaturan Perangkat & Printer Kasir POS Universal (58mm/80mm, Bluetooth, USB, RawBT), Dialog Konfirmasi Keluar Aplikasi Native, & Navigasi Kembali WhatsApp Tanpa Reload",category:"feature",badge:"Universal POS & Native App v1.8.5",items:["Pengaturan Perangkat Universal & Printer POS: Menyediakan panel konfigurasi koneksi printer kasir (Bluetooth Thermal ESC/POS, USB OTG, Jaringan LAN/WiFi IP, Android System PrintManager, dan Driver RawBT).","Format Kertas Fleksibel 58mm & 80mm: Mendukung ukuran kertas mini portable 58mm (32 kolom) dan printer kasir meja 80mm (48 kolom) dengan perataan teks struk otomatis.","Fitur Uji Coba Cetak (Test Print): Memungkinkan kasir menguji sambungan printer secara langsung dengan satu klik sebelum mulai melayani pelanggan.","Opsi Kustomisasi Struk Kasir: Pengaturan teks header/footer, cetak barcode pesanan (Code128), saldo poin loyalty member, auto-cut kertas, dan perintah buka laci kasir (cash drawer).","Dialog Konfirmasi Keluar Aplikasi (Exit Dialog): Menutup modal bertingkat saat tombol Hardware Back Android ditekan; jika sudah berada di Beranda tanpa modal terbuka, memunculkan dialog konfirmasi keluar elegan (Lanjut Belanja atau Keluar Aplikasi).","Navigasi Kembali WhatsApp Tanpa Reload (External Intent Interception): Mengarahkan seluruh tautan WhatsApp (wa.me) ke intent aplikasi eksternal di Android sehingga WebView Toko Putri tidak pernah tergantikan. Saat pembeli menekan tombol Back di WhatsApp, aplikasi Toko Putri langsung kembali tampil di layar dengan keranjang dan data transaksi tetap utuh.","Fitur Unduh & Pembaruan Aplikasi Real-Time (Play Store Style): Menambahkan modal unduhan APK resmi bergaya Google Play Store dengan badge Play Protect, verifikasi integritas, QR code untuk pemindaian instan di HP dari komputer desktop/laptop, dan tautan otomatis ke rilis GitHub terbaru."]},{id:"log-1-8-4",version:"v1.8.4",date:"2026-09-18",title:"Antarmuka Kartu Member Digital VIP 3D (Digital Loyalty Pass), Barcode Kasir POS Vektor, Gamifikasi Tingkat Tier (Bronze, Silver, Gold, Platinum), & Ekspor Simpan ke Galeri Ponsel",category:"feature",badge:"Digital Loyalty Card v1.8.4",items:["Kartu Member Digital Interaktif 3D (Apple/Google Wallet Style): Mentransformasi data loyalitas pelanggan menjadi kartu member fisik digital yang mewah, lengkap dengan EMV smart chip keemasan, logo resmi Toko Putri, efek emboss nama pelanggan, nomor virtual kartu PUTRI, dan saldo poin.","Animasi 3D Flip (Bolak-Balik): Pelanggan dapat membalik kartu secara interaktif untuk melihat sisi belakang yang dilengkapi pita magnetik (magnetic stripe) dan barcode kasir.","Barcode Kasir POS Vektor (Code128): Dilengkapi barcode presisi yang digenerate otomatis dari nomor pelanggan, siap discan oleh kasir toko fisik saat berbelanja langsung.","Tingkatan Tier Dinamis (Bronze, Silver, Gold, Platinum VIP): Pengelompokan level pelanggan berdasarkan akumulasi poin belanja dengan indikator progress bar dan daftar hak istimewa eksklusif setiap level.","Simpan Kartu ke Galeri HP: Fitur unduh kartu member resolusi tinggi (PNG HD) langsung ke galeri ponsel atau dibagikan ke WhatsApp dengan satu sentuhan.","Deteksi Checkout & Akses Cepat: Form checkout otomatis menampilkan miniatur kartu member saat nomor pembeli terdeteksi, dan menu Tautan Cepat kini memiliki tombol langsung ke Kartu Member & Poin.","Sinkronisasi Poin Otomatis & Persistensi Kartu: Menyelaraskan aturan keamanan Firestore pelanggan, mengkreditkan poin pesanan secara otomatis ke database cloud, menjaga kartu member tetap aktif secara persisten di HP pelanggan, dan mengaktifkan auto-reconciliation riwayat pesanan."]},{id:"log-1-8-3",version:"v1.8.3",date:"2026-09-18",title:"Aktivasi Fitur Hardware Native: Logo Resmi Toko Putri (Launcher Icon & Splash HD), Izin Kamera Barcode Scanner, Geolokasi GPS Pelanggan, Cetak Printer Termal POS, & Ekspor Simpan Dokumen A4/PDF",category:"feature",badge:"Native Hardware & Icon v1.8.3",items:["Ikon Aplikasi & Splash Screen Resmi Toko Putri: Mengganti seluruh ikon bawaan dengan logo resmi resolusi tinggi Toko Putri (PUTRI UTAMA TEKNIK) di seluruh varian layar (mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi, dan adaptive icon) serta splash screen elegan saat aplikasi dibuka.","Aktivasi Kamera & Pemindai Barcode: Mengaktifkan izin kamera Android dan WebChromeClient onPermissionRequest sehingga scan barcode produk via kamera HP dan ambil foto bukti transfer langsung berfungsi lancar.","Geolokasi & Deteksi GPS Pelanggan: Memasang izin ACCESS_FINE_LOCATION & ACCESS_COARSE_LOCATION beserta onGeolocationPermissionsShowPrompt, sehingga fitur ambil lokasi otomatis di halaman checkout dan pengaturan toko berjalan presisi.","Pencetakan Printer Termal POS & Faktur A4: Menghubungkan fungsi cetak kasir langsung ke Android PrintManager native dan skema printer bluetooth thermal (RawBT), memungkinkan pencetakan struk 58mm/80mm tanpa hambatan.","Simpan & Bagikan Dokumen (PDF/Gambar): Mengintegrasikan native bridge saveOrShareFile untuk menyimpan file invoice, faktur, dan surat jalan ke memori HP atau langsung dibagikan ke WhatsApp pelanggan."]},{id:"log-1-8-2",version:"v1.8.2",date:"2026-09-18",title:"Aplikasi Android Live Cloud Auto-Sync: Pembaruan Website & Desain Otomatis Tersinkronisasi ke HP Tanpa Perlu Install Ulang APK, Optimasi Hardware Back Button, & Paket Intent WhatsApp",category:"feature",badge:"Android Live Cloud Sync v1.8.2",items:["Arsitektur Live Cloud Auto-Sync: Menghubungkan aplikasi Android native secara langsung ke server hosting resmi Toko Putri (https://tokoputri-three.vercel.app). Seluruh pembaruan kode, tata letak antarmuka, dan fitur baru yang di-deploy ke website akan otomatis muncul di HP pelanggan seketika tanpa perlu mendownload atau menginstal ulang file APK.","Penanganan Tombol Kembali Native (Hardware Back Button): Mengintegrasikan OnBackPressedDispatcher pada MainActivity Android, memungkinkan pelanggan menggunakan tombol kembali fisik atau gestur usap layar HP untuk menutup modal atau kembali ke halaman sebelumnya secara mulus tanpa keluar aplikasi secara tiba-tiba.","Visibilitas Intent Eksternal Android 11+: Mendaftarkan skema WhatsApp (whatsapp:// & https://wa.me) serta panggilan telepon (tel:) pada manifest sistem, memastikan tombol kontak penjual dan pesan otomatis WhatsApp dapat langsung meluncurkan aplikasi WhatsApp di HP pelanggan tanpa hambatan keamanan OS.","Kesiapan Hybrid Zero-Maintenance: Menggabungkan kecepatan runtime native dengan fleksibilitas web modern, memberikan pengalaman belanja full-screen setara aplikasi e-commerce papan atas."]},{id:"log-1-8-1",version:"v1.8.1",date:"2026-09-18",title:"Transformasi Super-App Native Android (.APK), Integrasi Capacitor 8 Modern, & Alur Kompilasi Cloud Otomatis GitHub Actions",category:"feature",badge:"Android Native APK Release v1.8.1",items:["Transformasi Aplikasi Native Android: Mengintegrasikan platform Capacitor 8 (@capacitor/android, @capacitor/core, @capacitor/cli) ke dalam fondasi sistem Toko Putri sehingga dapat dipasang langsung pada smartphone Android layaknya aplikasi komersial Play Store.","Kompilasi Otomatis di Cloud (GitHub Actions CI/CD): Membangun alur kerja kompilasi otomatis di server cloud GitHub menggunakan Node.js 22 dan Java OpenJDK 21. Setiap ada pembaruan kode, server GitHub secara otomatis memproses, mengompilasi, dan merilis file TokoPutri.apk siap pasang tanpa membebani komputer.","File Installer TokoPutri.apk Siap Pasang: Menyediakan file installer TokoPutri.apk (~4.8 MB) yang ringan, cepat, dan responsif langsung di folder aplikasi serta paket flashdisk siap salin ke HP.","Integrasi SplashScreen & Desain Adaptif: Aplikasi Android Toko Putri berjalan dengan tampilan layar penuh native, animasi peluncuran elegan, safe-area inset yang pas untuk poni kamera HP kekinian, dan terhubung langsung secara realtime ke database cloud Firebase Firestore."]},{id:"log-1-8-0",version:"v1.8.0",date:"2026-09-18",title:"Sinkronisasi Realtime Katalog Hadiah Multi-Perangkat (Desktop & Mobile), Eliminasi Deadlock Listener, & Integrasi Modal Hadiah Cepat",category:"bugfix",badge:"Multi-Device Reward Sync v1.8.0",items:["Resolusi Deadlock Listener Katalog Hadiah: Menghapus kondisi pengunci pada fungsi renderRewardCatalog() yang sebelumnya memeriksa activeRewards.length > 0 sebelum memasang listener Firestore. Kini listener attachRewardsRealtime() selalu dipasang seketika saat fitur katalog hadiah aktif.","Booting Listener Realtime Hadiah Otomatis: Mendaftarkan dan menjalankan listener attachRewardsRealtime() secara otomatis saat aplikasi dimuat di DOMContentLoaded sejajar dengan sinkronisasi produk dan pengaturan toko, menjamin setiap browser (komputer desktop, laptop, HP, dan tablet pelanggan) langsung terhubung secara live.","Bootstrap Fetch Hadiah pada Kunjungan Pertama: Menyempurnakan fungsi loadAppData() agar secara instan mengambil data sub-koleksi rewards dari database server ketika browser baru membuka website tanpa cache lokal.",'Tombol CTA Cepat "Lihat Semua" di Beranda: Menambahkan tombol aksi cepat di samping judul Katalog Hadiah Poin Pelanggan yang langsung membuka modal daftar reward dan informasi poin belanja pelanggan.',"Penyelarasan Logika Filter Katalog Produk: Memperbaiki toggleCls pada modul katalog agar wadah hadiah hanya disembunyikan saat pengguna memfilter pencarian atau saat program hadiah memang dinonaktifkan oleh pemilik toko.","Sinkronisasi Instan CMS Hadiah: Memastikan penyimpanan atau penghapusan hadiah dari panel CMS admin di HP langsung memperbarui cache lokal localStorage dan menyiarkan pembaruan ke seluruh layar desktop pelanggan secara instan (<200ms) tanpa perlu refresh."]},{id:"log-1-7-9",version:"v1.7.9",date:"2026-09-17",title:"Desain Visual Native Super-App: Miniatur Layar HP 3D di CMS, Preset Background Modern & Ambient Canvas",category:"feature",badge:"Native Super-App Visuals v1.7.9",items:["Miniatur Layar Smartphone 3D di CMS Admin: Mengganti ikon kotak kaku pada menu Pengaturan Toko dengan 5 miniatur live mockup layar HP yang interaktif, lengkap dengan frame bezel, dynamic island, dan visual miniature preview.","Preset Visual Background Modern: Menghadirkan 5 gaya atmosferik (Hero Arch Kanopi Lengkung, Aurora Mesh Glow atmosferik iOS/Fintech, Tech Grid blueprint perkakas/teknik, Glass Studio kedalaman kaca es, dan Minimalis Clean Canvas).","Live Zero-Reload Theme Preview: Memilih model gaya background di panel CMS langsung mengubah latar belakang halaman secara live seketika tanpa reload browser.","Desktop & Tablet Ambient Backdrop Glow: Memberikan aura pencahayaan atmosferik dinamis pada sisi kiri-kanan kanvas monitor komputer dan tablet, menciptakan sensasi aplikasi desktop macOS/iPad melayang yang elegan.","Penyempurnaan Header & Floating Elements: Header toko otomatis beradaptasi dengan model visual latar belakang aktif dengan bayangan glow lembut dan transisi mulus."]},{id:"log-1-7-8",version:"v1.7.8",date:"2026-09-17",title:"Pemeliharaan & Perawatan Sistem: Audit Keamanan, Stabilitas Navigasi Mobile, & Sinkronisasi Distribusi",category:"maintenance",badge:"System Maintenance & Stability v1.7.8",items:["Audit Keamanan & Penyelarasan Dependensi: Memeriksa integritas dependensi npm, menyelaraskan patch keamanan paket, dan mengaudit aturan keamanan Firestore Security Rules untuk proteksi optimal toko dan data pelanggan.","Penguncian Bottom Navigation Bar Mobile: Mengintegrasikan utilitas bnav-hidden dan translate penuh pada bilah navigasi bawah saat di halaman Keranjang & Checkout agar tombol Beranda timbul tidak mengintip atau menghalangi transaksi.","Stabilitas Alur Belanja & Quick Variant: Menyempurnakan transisi penutupan modal produk bebas race-condition dengan History API untuk eksekusi Beli Sekarang (Direct Checkout) yang mulus dan responsif.","Kompilasi & Optimasi Build Produksi: Membangun ulang seluruh bundle produksi Vite (dist/) dengan pemisahan chunk terisolasi, CSS purge, dan performa tinggi.","Sinkronisasi Total Seluruh Berkas Distribusi: Menyelaraskan seluruh paket offline pada folder 1. HASIL_BUILD_SIAP_PAKE dan PAKET_FLASHDISK (File Siap Pakai & Source Code Lengkap) sehingga 100% mutakhir dan siap pakai."]},{id:"log-1-7-7",version:"v1.7.7",date:"2026-09-17",title:"Penyempurnaan UX Modal Produk: Drawer Pilih Varian Cepat (Quick Variant Sheet), Eliminasi Tombol Duplikat & Bilah Bawah Luas",category:"feature",badge:"Smart Variant Shopping v1.7.7",items:['Drawer Khusus "Pilih Varian Cepat" (Quick Variant Bottom Sheet): Menekan tombol + belanja cepat pada produk bervarian kini membuka lembar ringkas (foto, harga dinamis, pilihan varian, kuantitas & tombol beli) tanpa membuka modal deskripsi raksasa.','Smart Auto-Select Varian Pertama: Sistem secara cerdas memilih varian aktif pertama yang memiliki stok secara otomatis, menghapus kebingungan pembeli dan mencegah pesan error "Belum memilih varian".',"Eliminasi Redundansi & Tombol Duplikat: Menghapus kotak Subtotal besar dan tombol ganda di dalam isi modal produk sehingga layout sangat bersih, lega, dan tidak bertumpuk.","Bilah Aksi Bawah Lega & Bebas Sesak: Menghilangkan ikon WhatsApp dari bilah transaksi bawah agar tombol + Keranjang dan Beli Sekarang memiliki ruang yang luas, proporsional, dan nyaman ditekan jempol tanpa teks terpotong.","Tombol Konsultasi WhatsApp Bersih di Area Informasi: Akses tanya penjual via WhatsApp dipindahkan ke area informasi produk dengan tampilan rapi dan tidak mengganggu alur checkout cepat."]},{id:"log-1-7-6",version:"v1.7.6",date:"2026-09-17",title:"Pengalaman Native Mobile App: Haptic Feedback, Animasi Fly-to-Cart, Sticky Action Bar Modal & Pull-to-Refresh",category:"feature",badge:"Native Mobile App Feel v1.7.6",items:["Micro-Haptic Vibration Feedback: Sentuhan getaran taktil mikro 10ms saat menyentuh tab navigasi, tombol Beranda melayang, dan tombol aksi belanja di layar HP untuk sensasi fisik layaknya aplikasi native.","Fly-to-Cart Micro-Animation: Efek animasi visual foto produk melayang melengkung (curved flight) langsung masuk ke ikon keranjang navigasi bawah saat tombol + Keranjang ditekan.","Sticky Bottom Action Bar pada Detail Produk: Bilah belanja cepat menempel di bagian bawah modal detail produk (Subtotal, Qty, + Keranjang, Beli Sekarang & Chat WA) untuk kemudahan transaksi satu tangan.","Tombol Beli Sekarang (Direct Checkout): Pembeli dapat langsung checkout instan hanya dalam satu ketukan tanpa harus membuka keranjang terlebih dahulu.","Quick-Add Cart pada Kartu Katalog: Tombol + pada kartu katalog kini dapat langsung memasukkan produk tanpa varian ke keranjang disertai animasi terbang.","Native Pull-to-Refresh & Skeleton Shimmer: Tarik layar ke bawah dari puncak katalog untuk sinkronisasi data toko secara hening dan tampilan kerangka berkilau saat memuat produk."]},{id:"log-1-7-5",version:"v1.7.5",date:"2026-09-17",title:"Desain Navigasi Bawah Modern: Beranda Timbul Melayang di Tengah (Elevated Center Hub) & Tampilan 100% Aplikasi Mobile",category:"feature",badge:"Mobile App Navigation v1.7.5",items:["Navigasi Bawah Mobile Modern (App-Like Bottom Navigation): Menghadirkan bilah navigasi bawah 5 tab simetris (Kategori, Keranjang, Beranda, Pesanan, Menu) yang intuitif untuk kemudahan pengoperasian satu tangan (Golden Thumb Zone) di layar ponsel.","Tombol Beranda Timbul Melayang di Tengah (Elevated Center Hero Hub): Menempatkan tombol Beranda tepat di tengah dengan lingkaran 52px melayang timbul (offset -top-5) bergradien tema dinamis, ring cutout notch, dan drop-shadow lembut yang elegan.","Solid Background Anti-Tembus & Bordered Cart Badge: Panel navigasi menggunakan latar belakang 100% solid (bg-white dark:bg-[#0b1120]) tanpa efek tembus pandang/blur residual saat menggulir halaman, dilengkapi badge keranjang belanja dengan outline kontras tinggi.","Sinkronisasi Routing & Active State Cerdas: Status tab navigasi otomatis menyala aktif secara akurat mengikuti URL hash/halaman yang sedang dibuka (Beranda, Riwayat Pesanan, Kategori Modal, atau Menu Drawer).","Manajemen Pruning Log Pembaruan di CMS: Administrator toko kini dapat menghapus catatan log pembaruan lama langsung dari panel CMS Admin agar riwayat changelog tetap rapi, ringkas, dan bebas spam seiring berjalannya waktu."]},{id:"log-1-7-2",version:"v1.7.2",date:"2026-09-17",title:"Finalisasi & Audit Debugging Menyeluruh Sistem (Stabilitas Router Modal, Type Safety ID Produk & Akses Dev Lokal)",category:"maintenance",badge:"Final System Audit & Stability v1.7.2",items:["Resolusi Import Router Modal Storefront: Mengimpor fungsi pushModalHistory dan requestCloseModal secara eksplisit pada modul dialog storefront (modals.js) untuk menjamin semua dialog (Tautan Cepat, Kategori, Brand Mitra, Syarat & Ketentuan, Kebijakan Privasi, Panduan Belanja) terbuka dan tertutup dengan mulus tanpa memicu ReferenceError.","Safe String ID Handling pada Katalog & Rekomendasi: Mengenkapsulasi parameter ID produk pada atribut onclick kartu produk dan kartu rekomendasi slider (openProductModal), memastikan kompatibilitas penuh untuk ID numerik maupun string alfa-numerik tanpa risiko syntax error.","Perbaikan Pencocokan Produk Target Voucher: Menyempurnakan pencocokan target produk voucher diskon dengan konversi string bertipe aman (String(item.id) === String(f.targetProduct)).","Penyempurnaan Struk Tempo Admin: Menambahkan deklarasi aman helper pushModalHistory pada modul piutang & struk pembayaran tempo (tempo.js).","Dukungan Host Lokalitas Lingkungan Pengujian: Menambahkan pengenalan host 127.0.0.1 secara setara dengan localhost pada pemeriksaan akses dev admin (checkAdminAccess).","Audit Menyeluruh 200+ Inline Event Handler: Memverifikasi seluruh event handler di index.html dan template JS untuk memastikan 100% fungsi terdaftar resmi di window tanpa ada broken reference."]},{id:"log-1-7-1",version:"v1.7.1",date:"2026-09-17",title:"Penyelarasan Desain Modal CMS Admin & Builder Komponen (Tabel Spesifikasi, Grosir, Varian & Eliminasi Scrollbar Native)",category:"optimization",badge:"Admin Modal & Theme Harmonization v1.7.1",items:['Penyelarasan Builder Tabel Spesifikasi (Spec Table Builder): Mengganti warna hardcoded cyan pada tombol "Tambah Baris Spesifikasi" dan ikon placeholder dengan variabel warna tema aktif toko (--color-primary), sehingga menyatu sempurna dengan seluruh 19 preset tema (termasuk tema emas/olive Toko Putri).',"Eliminasi Scrollbar Native Abu-abu di Modal CMS: Mengintegrasikan utilitas hide-scrollbar pada kontainer formulir Admin Modal (#admin-modal-form), Modal Detail Pesanan (#admin-order-modal-content), Modal Edit Cepat Harga (#qp-body), dan Modal Restock Stok, sehingga scrollbar native yang tebal dan kaku hilang tanpa mengurangi kenyamanan scroll.","Harmonisasi Builder Grosir & Varian Produk: Menyelaraskan kartu grosir, tombol tambah tingkatan grosir, kartu varian, serta dialog database warna ke standar border-radius rounded-2xl dan aksen tema aktif toko tanpa warna kontras yang jomplang (menghapus hardcoded amber, pink, dan violet).","Penyempurnaan Visual Header & Tombol Modal Admin: Menstandarisasi radius modal utama ke rounded-2xl, menambahkan badge ikon tematik di samping judul, menyempurnakan tombol tutup melingkar (cursor-pointer), dan tombol solid simpan data dengan efek shadow-glow dan active scaling.","Optimalisasi Modal Restock & Edit Cepat Harga: Menyelaraskan seluruh dialog popup operasional admin dengan warna aksen dinamis toko dan konsistensi interaksi penuh."]},{id:"log-1-7-0",version:"v1.7.0",date:"2026-09-17",title:"Pengelompokan Produk Sejenis (Sub-Kategori Cerdas) & Rekomendasi Produk Alternatif di Modal Detail",category:"feature",badge:"Smart Sub-Category & Related Products v1.7.0",items:["Sistem Sub-Kategori Cerdas (Smart Sub-Grouping): Mengelompokkan produk berdasarkan jenis yang lebih spesifik dalam kategori yang sama (contoh kategori Cat Bangunan: Cat Tembok, Cat Kayu & Besi, Waterproofing, Kuas & Rol) dengan kompatibilitas penuh tanpa merombak struktur database yang sudah ada.","Bilah Filter Sub-Kategori Interaktif (Dynamic Chip Bar): Menampilkan bilah chip filter horizontal di etalase saat sebuah kategori dipilih, lengkap dengan indikator jumlah produk per jenis dan penanda aktif sesuai tema toko.",'Rekomendasi Produk Sejenis & Alternatif Pilihan di Modal: Menambahkan kartu slider horizontal "Produk Sejenis & Alternatif Pilihan" di dalam modal detail produk menggunakan algoritma pencocokan skor relevansi (jenis produk, kategori, dan brand) untuk memudahkan pembeli membandingkan pilihan dan mendorong cross-selling.',"Autocomplete Datalist di Form Produk Admin: Formulir penambahan/pengeditan produk di CMS Admin kini dilengkapi input cerdas yang otomatis menyarankan jenis/sub-kategori yang sudah pernah ada di toko untuk mencegah typo dan menjaga konsistensi penamaan.","Badge Jenis Produk pada Kartu Katalog: Menampilkan label sub-kategori bernuansa tema toko pada kartu produk di tampilan grid maupun list etalase.","Penyelarasan Desain Modal Detail Produk: Menstandarisasi radius modal (rounded-t-3xl sm:rounded-2xl) dan drag bar minimalis modern, serta memastikan perpindahan antar produk sejenis bergulir mulus ke posisi atas (scroll-to-top)."]},{id:"log-1-6-2",version:"v1.6.2",date:"2026-09-17",title:"Penyempurnaan Modal Syarat & Ketentuan, Kebijakan Privasi, dan Storefront Dialog (Modern Card Layout & Anti-Overlay Vercel Toolbar)",category:"optimization",badge:"Modal Card Layout v1.6.2",items:["Restrukturisasi Visual Modal Syarat & Ketentuan serta Kebijakan Privasi: Mengubah tampilan modal teks polos menjadi format kartu interaktif bertingkat bernomor (Numbered Badges) dengan padding proporsional, border halus, dan kontras tinggi sesuai tema aktif.","Eliminasi Glitch Format HTML Baris Baru: Memperbaiki parser teks di modals.js sehingga konten HTML dan default copy tidak lagi disusupi tag <br> yang menyebabkan spasi melompat/renggang tidak wajar.",'Penyelarasan Desain Modal Bottom Sheet: Menstandarisasi radius modal (rounded-t-3xl sm:rounded-2xl), menghapus drag bar abu-abu usang, mempercantik kotak ikon header dengan aksen tema resmi (w-10 h-10 rounded-2xl), serta melengkapi footer dengan tombol "Tutup" yang ramah mobile.',"Supresi Floating Toolbar Vercel Feedback: Menyuntikkan aturan CSS khusus untuk menyembunyikan widget floating Vercel live feedback/toolbar agar tidak lagi menutupi konten modal dan teks transaksi pelanggan pada layar mobile.","Harmonisasi Modal Tautan Cepat, Kategori, Brand, Panduan Belanja & Q&A: Menyatukan gaya visual seluruh dialog storefront ke standar modern tanpa tampilan jomplang."]},{id:"log-1-6-1",version:"v1.6.1",date:"2026-09-17",title:"Penyelarasan Desain Menyeluruh Storefront & CMS Modal (Visual Theme Consistency & Solid Design)",category:"optimization",badge:"Theme Consistency v1.6.1",items:["Harmonisasi Penuh Storefront & CMS dengan Theme Engine: Menghapus seluruh kelas warna hardcoded (seperti emerald-*, teal-*, pink-*) sehingga seluruh antarmuka toko beradaptasi 100% mulus dengan 19 palet tema warna sistem.","Penyelarasan Banner Progres Gratis Ongkir: Elemen pelacak progres gratis ongkir di keranjang belanja kini menggunakan variabel tema aktif (--color-primary) secara dinamis baik pada progress bar, ikon, teks, maupun badge.","Standarisasi Modal Dialog & Bottom Sheet: Seluruh modal dialog (Ulasan Pelanggan, Poin Hadiah Member, Kupon Promo, Log Pembaruan Sistem, Jaminan Mutu, Keamanan & Privasi, Konfirmasi, Edit Harga Cepat, dan Restock) distandarisasi ke border-radius solid rounded-t-3xl sm:rounded-2xl dengan latar belakang bg-slate-900/80 yang tajam dan konsisten.","Penghapusan Efek Blur Residual: Mengeliminasi sisa-sisa kelas backdrop-blur pada modal dan kontainer kartu storefront untuk memastikan antarmuka 100% solid, tajam, ringan diakses, dan bebas glitch grafis di semua browser.","Penyelarasan Form Tempo VIP & Kartu Customer Support: Formulir pembayaran tempo VIP dan kartu kontak WhatsApp di footer kini menyatu secara harmonis dengan warna aksen tema aktif toko.","Pembaruan Kompilasi & Optimalisasi Bundle Produksi: Memperbarui build produksi Vite v1.6.1 dengan ukuran bundle yang efisien dan sinkronisasi penuh."]},{id:"log-1-6-0",version:"v1.6.0",date:"2026-09-16",title:"Program Poin Belanja Hibrida & Loyalitas Member Cerdas (Hybrid Loyalty Points System)",category:"feature",badge:"Hybrid Loyalty Points",items:["Sistem Poin Belanja Hibrida (Hybrid Points Engine): Menghubungkan poin produk reward langsung dengan poin kelipatan minimal belanja untuk produk non-poin secara otomatis.","Kombinasi Poin Akurat: Produk yang memiliki poin langsung tetap menyumbangkan poin per itemnya, sementara produk tanpa poin diakumulasikan total belanjanya untuk mendapatkan poin kelipatan (misal tiap Rp 100.000 = 1 poin).","Pengaturan Fleksibel di Panel Admin: Administrator toko dapat mengaktifkan/menonaktifkan program poin belanja, menentukan nominal batas belanja (kelipatan Rp), serta jumlah poin yang diperoleh per kelipatan.","Bilah Progres & Notifikasi Gamifikasi di Keranjang: Pembeli dapat melihat langsung kalkulasi perolehan poin dan progres nominal belanja yang dibutuhkan menuju poin berikutnya.","Integrasi Checkout & Sinkronisasi Saldo Member: Total poin hibrida otomatis disimpan ke data pesanan (pointsEarned & pointsBreakdown) dan langsung mengkredit saldo akun member terdaftar saat transaksi selesai."]},{id:"log-1-5-2",version:"v1.5.2",date:"2026-09-16",title:"Penyelarasan & Sinkronisasi Visual Seluruh Form Pengaturan Toko (Harmonious & Unified Settings UI)",category:"optimization",badge:"Unified Settings UI",items:["Sinkronisasi Visual Menyeluruh (Anti-Jomplang): Menyelaraskan tata letak visual seluruh 6 kategori pengaturan toko (Profil, Kategori & Brand, Pengiriman & Lokasi, QRIS Pay, Sistem & API, dan Operasional) dengan standar container kartu modern dan tipografi yang harmonis.","Struktur Kartu Berbasis Badge Ikon: Seluruh blok form kini memiliki header kartu tematik berbingkai rounded-xl lengkap dengan ikon representatif, judul tegas, dan deskripsi fungsi yang jelas.","Tata Letak Kategori & Brand Lebih Lega: Mengelompokkan konfigurasi slider dan gaya tampilan (Grid/Pill/Logo) ke dalam sub-kartu tersendiri dilengkapi kotak tips pengalaman pengguna (UX).","Form Pembayaran QRIS & Integrasi Cloud Dipercantik: Menambahkan kartu preview QRIS terverifikasi serta status koneksi endpoint Google Apps Script (GAS) dengan indikator aktif yang elegan.","Harmonisasi Kontrol Operasional & PPN: Formulir pembatasan stok barang dan skema pajak PPN (Eksklusif/Inklusif) dikemas ke dalam kartu rapi dengan penjelasan skema perhitungan transaksi.","Navigasi Atas & Tombol Simpan Ganda: Menghadirkan tombol kembali berlabel jelas beserta tombol simpan cepat di baris header atas untuk kenyamanan akses di layar desktop maupun mobile."]},{id:"log-1-5-1",version:"v1.5.1",date:"2026-09-16",title:"Input Geolokasi Cerdas Google Maps (Tempel & Simpan Akurat Presisi Tinggi)",category:"feature",badge:"Smart Geolocation",items:["Smart Auto-Extract Google Maps: Admin cukup menempel tautan (link) atau angka koordinat dari Google Maps langsung pada satu kotak input cerdas di Pengaturan Pengiriman & Lokasi.","Presisi Tinggi Desimal Penuh: Sistem otomatis mengekstrak Latitude & Longitude dengan ketepatan presisi penuh (contoh: -7.82308507053985, 112.0988374794464) tanpa terpotong.","Tombol Tempel Otomatis Clipboard: Fitur satu klik untuk membaca clipboard dan menempel koordinat secara instan tanpa perlu ketik manual.",'Verifikasi Titik Pin Google Maps: Tombol "Cek di Maps" untuk membuka koordinat di tab baru Google Maps dan memastikan letak toko 100% akurat.',"Dukungan Tempel Koordinat Pelanggan saat Checkout: Memudahkan pembeli di perangkat laptop/PC menyematkan link/koordinat Maps rumah mereka saat sensor GPS tidak aktif."]},{id:"log-1-5-0",version:"v1.5.0",date:"2026-09-16",title:"Fitur Promo Gratis Ongkir Otomatis Minimal Belanja (Free Shipping Threshold) & Gamifikasi Keranjang",category:"feature",badge:"Free Shipping Promo",items:["Fitur Promo Bebas Ongkir Otomatis: Admin dapat mengaktifkan promo dan menentukan nominal batas minimal belanja (misal Rp 1.000.000) melalui menu Pengaturan > Pengiriman & Lokasi.","Bilah Kemajuan (Progress Bar) Interaktif di Keranjang Belanja: Menampilkan persentase pencapaian serta kalkulasi sisa belanja secara real-time yang memotivasi pelanggan untuk menambah belanja.","Pemberitahuan Selebrasi Pencapaian: Banner ucapan selamat dengan efek visual cerah dan animasi saat subtotal keranjang berhasil mencapai syarat gratis ongkir.","Kalkulasi Otomatis Tanpa Kode Voucher: Ongkos kirim delivery langsung terpotong 100% (Rp 0) di ringkasan pembayaran checkout tanpa mewajibkan pembeli mengklaim kode kupon manual.","Integrasi Penuh Dokumen & Struk: Diskon ongkir tercatat rapi pada database pesanan Firestore, struk thermal kasir, rincian faktur belanja A4, dan histori pesanan pembeli."]},{id:"log-1-4-1",version:"v1.4.1",date:"2026-09-16",title:"Penyempurnaan Tampilan Footer (Clean & Harmonious UI) & Maintenance Perawatan Sistem",category:"optimization",badge:"UI Refinement & Maintenance",items:["Desain ulang layout footer toko agar harmonis dengan tema warna emas/mustard, mengeliminasi kontras warna putih yang menyilaukan pada kartu WhatsApp dengan konsep dark glassmorphism modern.","Penyempurnaan tipografi dan spasi vertikal: menu navigasi bantuan & belanja cepat bebas dari simbol kaku, berganti interaksi hover dot dinamis yang lega.","Pembersihan kalimat redundan pada profil toko serta penyelarasan badge metode pembayaran dan logistik pengiriman 50:50 yang simetris.","Pemeriksaan integritas dependensi npm, audit keamanan dependensi, serta pemeliharaan cache storage multi-proyek.","Pembersihan berkas build usang dan pemeliharaan sinkronisasi penuh pada folder paket distribusi flashdisk & siap pakai."]},{id:"log-1-4-0",version:"v1.4.0",date:"2026-09-16",title:"Fitur Single Active Admin Session (Auto Kick-out Antar Perangkat) & Firestore Security Rules",category:"feature",badge:"Single Session Security",items:["Sistem Single Concurrent Admin Session: membatasi akses CMS Seller hanya dapat aktif di 1 perangkat/browser dalam satu waktu untuk mencegah tabrakan edit data dan kebocoran akses.","Mekanisme Realtime Auto Kick-out: jika admin login dari perangkat baru (misal laptop/desktop), sesi CMS di perangkat lama (misal HP atau browser lain) secara instan ditendang keluar secara aman (<300ms) disertai modal dialog penjelasan nama perangkat yang mengambil alih.","Deteksi perangkat cerdas (Smartphone Android, iPhone, Laptop Windows, Mac, Linux, dll) untuk identifikasi login yang transparan.","Validasi ganda startup sesi (auto-login guard) untuk memastikan sesi lokal yang telah digantikan perangkat lain tidak dapat membuka dashboard tanpa login ulang.","Pembaruan cloud Firestore Security Rules dengan otorisasi sub-koleksi admin_session khusus untuk ADMIN_UID terverifikasi."]},{id:"log-1-3-1",version:"v1.3.1",date:"2026-09-16",title:"Native Realtime Sync Sub-Koleksi Produk, Rekonsiliasi Multi-Browser & Hardening Rules",category:"bugfix",badge:"Realtime Multi-Device",items:["Pemasangan native listener onSnapshot langsung pada sub-koleksi products Firestore sehingga perubahan status produk (aktif/nonaktif/stok) dari admin desktop langsung terdorong seketika (<200ms) ke seluruh HP & browser aktif tanpa reload.","Rekonsiliasi otomatis data produk dari server saat snapshot pertama tiba (initial load), mengeliminasi bug perbedaan tampilan antar browser akibat cache localStorage yang usang.","Penyegaran antarmuka tabel admin reaktif otomatis via deteksi kontainer DOM tanpa terhambat status sesi login.","Pengamanan perbandingan ID produk dengan konversi string eksplisit (id.toString()) pada pencarian indeks array dan event handler onclick.","Optimasi evaluasi kondisi stok pada firestore.rules untuk mencegah type error dan mempercepat validasi transaksi checkout."]},{id:"log-1-3-0",version:"v1.3.0",date:"2026-09-15",title:"Hotfix Realtime Sync Multi-Perangkat, Eliminasi Stale Cache & Granular Sync",category:"bugfix",badge:"Realtime Sync & Hotfix",items:["Perbaikan bug fatal inisialisasi syncAppMeta() dan listener Firestore onSnapshot sehingga perubahan status produk (aktif/nonaktif/stok) di Admin Desktop seketika terupdate live di HP tanpa reload.","Penonaktifan persistentLocalCache IndexedDB yang menyebabkan data produk usang (stale) menolak pembaruan server Firestore.","Optimasi granular sync: penambahan penanganan event product_delete dan pengiriman updatedProductIds pada saveApp() sehingga hemat kuota Firestore hingga 95%.","Penyegaran antarmuka instan pada tombol toggle status aktif/habis produk di tabel admin.","Integrasi konfigurasi Firestore db.settings({ merge: true }) guna mencegah host override warning.","Pembaruan log pembaruan sistem dan sinkronisasi seluruh paket distribusi flashdisk & build siap pakai."]},{id:"log-1-2-0",version:"v1.2.0",date:"2026-09-15",title:"Maintenance Keamanan, Optimasi Bundle (-68%) & Isolasi Cache Multi-Projek",category:"maintenance",badge:"Maintenance & Optimasi",items:["Pembersihan celah keamanan dependensi melalui audit paket npm.","Optimasi Vite Rollup code-splitting: modul admin dan cetak dokumen dipisah ke chunk tersendiri, memangkas ukuran bundle storefront utama dari 509 kB ke 163 kB (turun 68%).","Isolasi cache multi-projek pada localStorage untuk mencegah data toko tertukar saat pengujian di localhost.","Percepatan First Contentful Paint (FCP) dan eliminasi peringatan batas ukuran bundle.","Pembaruan berkas siap pakai dan paket flashdisk installer."]},{id:"log-1-1-0",version:"v1.1.0",date:"2026-09-10",title:"Harmonisasi Warna Token, Desain Vouchers & Kategori Kompak",category:"optimization",badge:"Peningkatan Visual",items:["Harmonisasi variabel CSS token warna tema (primary, primary-dark, primary-light) di seluruh komponen.","Penyesuaian tata letak kartu voucher, kategori, brand mitra, dan reward agar lebih padat dan hemat ruang di layar ponsel.","Penyempurnaan navigasi header desktop agar lebih bersih dan minimalis.","Perbaikan urutan CSS view-section untuk mencegah auto-redirect saat me-refresh halaman."]},{id:"log-1-0-0",version:"v1.0.0",date:"2026-09-01",title:"Peluncuran Sistem Web & POS Kasir Toko Putri Resmi",category:"feature",badge:"Rilis Perdana",items:["Rilis resmi platform e-commerce dan kasir point-of-sales (POS) Toko Putri.","Katalog produk interaktif dengan varian harga, grosir, dan spesifikasi lengkap.","Keranjang belanja instan terhubung otomatis ke WhatsApp Checkout.","Dukungan metode pembayaran QRIS Nasional dan Transfer Bank.","Modul cetak struk kasir thermal 58mm/80mm, invoice A4, dan surat jalan.","PWA (Progressive Web App) dengan dukungan mode offline dan installable di HP/PC."]}],vt=e=>{if(!e)return[0,0,0];const a=String(e).match(/(\d+)\.(\d+)\.(\d+)/);return a?[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)]:[0,0,0]},Oa=(e,a)=>{const[t,r,s]=vt(e),[o,n,l]=vt(a);return o!==t?o-t:n!==r?n-r:l-s},fa=e=>{const a=e&&Array.isArray(e.changelog)?e.changelog:[],t=new Set(e&&Array.isArray(e.deletedChangelogIds)?e.deletedChangelogIds:[]),r=new Set(a.map(l=>l.id||l.version)),s=Yt.filter(l=>!r.has(l.id)&&!r.has(l.version)&&!t.has(l.id)&&!t.has(l.version));return[...a.filter(l=>!t.has(l.id)&&!t.has(l.version)),...s].sort((l,d)=>{const p=new Date(l.date||"2026-01-01").getTime(),m=new Date(d.date||"2026-01-01").getTime();return m!==p?m-p:Oa(l.version,d.version)})},nt=e=>{const a=Yt[0]?.version||"v1.8.5",t=fa(e);if(!t||t.length===0)return a;let r=t[0].version||a;for(const s of t)s.version&&Oa(s.version,r)<0&&(r=s.version);return Oa(a,r)<0&&(r=a),r},Xt=()=>{const e=document.getElementById("storefront-footer-container");if(!e)return;const a=i.store||{},t=a.name||"Toko Putri",r=a.description||a.slogan||"Selamat datang di toko kami. Melayani pembelian online dan offline dengan kualitas terbaik.",s=a.email||"",o=a.operationalHours||"Buka Setiap Hari (08:00 - 17:00)",n=a.address||"",l=a.wa||"",d=a.footerCredit||"Seluruh hak cipta dilindungi undang-undang.",p=new Date().getFullYear(),m=nt(i);let u=(l||"").replace(/\D/g,"");u.startsWith("0")?u="62"+u.slice(1):!u.startsWith("62")&&u.length>0&&(u="62"+u);let x='<i class="fa-solid fa-store text-2xl text-[var(--color-primary)]"></i>';a.logo&&(a.logo.includes("http")||a.logo.includes("data:")?x=`<img src="${c(a.logo)}" alt="${c(t)}" class="h-full w-full max-h-10 max-w-10 object-contain" onerror="this.outerHTML='<i class=\\'fa-solid fa-store text-2xl text-[var(--color-primary)]\\'></i>'">`:x=`<i class="fa-solid ${c(a.logo)} text-2xl text-[var(--color-primary)]"></i>`);const h=u?`if(typeof window.openWhatsApp==='function') window.openWhatsApp('${c(u)}'); else window.open('https://wa.me/${c(u)}', '_blank', 'noopener,noreferrer');`:"if(typeof window.showToast==='function') window.showToast('Nomor WhatsApp belum dikonfigurasi admin.');";e.innerHTML=`
    <!-- ================= FOOTER TOKO RESMI (MODERN, CLEAN, HARMONIS DENGAN TEMA) ================= -->
    <footer class="themed-footer relative mt-14 w-full overflow-hidden pb-[calc(6.5rem+env(safe-area-inset-bottom))] sm:pb-[calc(3.5rem+env(safe-area-inset-bottom))]">
      <div class="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-[1240px] pt-10 sm:pt-14 pb-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <!-- Kolom 1: Profil Perusahaan & Brand -->
          <div class="flex flex-col items-start text-left md:col-span-6 lg:col-span-4">
            <div class="mb-4 flex items-center gap-3.5">
              <div class="flex h-13 w-13 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white p-2.5 shadow-md">
                ${x}
              </div>
              <div class="flex flex-col items-start min-w-0">
                <h3 class="text-base sm:text-lg font-black tracking-tight text-white leading-tight break-words max-w-full">${c(t)}</h3>
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

              <!-- Download App Card (Google Play Store Styled) -->
              <div
                class="group flex cursor-pointer items-center gap-3.5 rounded-2xl border border-emerald-400/40 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-transparent hover:bg-emerald-500/25 p-3.5 transition-all duration-200 shadow-sm hover:border-emerald-400 hover:shadow-md"
                onclick="if(typeof window.openAppDownloadModal==='function') window.openAppDownloadModal();"
              >
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#01875f] text-white text-xl shadow-md shadow-emerald-500/30 group-hover:scale-105 transition-transform">
                  <i class="fa-brands fa-google-play"></i>
                </div>
                <div class="min-w-0 text-left">
                  <div class="flex items-center gap-1.5">
                    <span class="px-1.5 py-0.2 rounded text-[8px] font-black uppercase bg-[#01875f] text-white">APK RESMI</span>
                    <p class="text-[9px] font-extrabold uppercase tracking-widest text-emerald-300">Android Release</p>
                  </div>
                  <p class="truncate text-xs font-black text-white group-hover:text-emerald-200 transition-colors">Unduh Aplikasi Android</p>
                  <p class="text-[10px] font-medium text-white/70">Versi ${c(m)} • Update Real-Time</p>
                </div>
                <div class="ml-auto text-emerald-400 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                  <i class="fa-solid fa-arrow-down text-xs"></i>
                </div>
              </div>

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
                    <p class="truncate text-xs font-bold text-white tracking-wide">${c(o)}</p>
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
            &#169; <span>${p}</span> <span class="font-extrabold text-white">${c(t)}</span>. <span>${c(d)}</span>
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3 text-[10px] font-bold text-white">
            <button type="button" onclick="if(typeof window.openAppDownloadModal==='function') window.openAppDownloadModal();" class="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/20 hover:bg-emerald-500/30 px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider text-emerald-300 hover:text-white transition-all active:scale-95 cursor-pointer shadow-xs" title="Unduh Aplikasi Android Toko Putri (APK)">
              <i class="fa-brands fa-google-play text-emerald-400"></i>
              <span>Unduh APK (${c(m)})</span>
            </button>
            <span class="text-white/20">•</span>
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
    `},ci=()=>{let e=document.getElementById("guarantee-modal");e||(e=document.createElement("div"),e.id="guarantee-modal",e.className="fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=a=>{a.target===e&&Zt()},document.body.appendChild(e)),e.innerHTML=`
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
        </div>`,e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"}),ua("guarantee")},Zt=(e=!1)=>{const a=()=>{const t=document.getElementById("guarantee-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250))};typeof Ne=="function"?Ne("guarantee",e,a):a()},pi=()=>{let e=document.getElementById("security-modal");e||(e=document.createElement("div"),e.id="security-modal",e.className="fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=a=>{a.target===e&&es()},document.body.appendChild(e)),e.innerHTML=`
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
        </div>`,e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"}),ua("security")},es=(e=!1)=>{const a=()=>{const t=document.getElementById("security-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250))};typeof Ne=="function"?Ne("security",e,a):a()};window.renderStorefrontFooter=Xt;window.openQualityGuaranteeModal=ci;window.closeQualityGuaranteeModal=Zt;window.openSecurityModal=pi;window.closeSecurityModal=es;const He=()=>{if(Xt(),N("dyn-store-name",i.store.name||"Toko Putri"),N("dyn-store-slogan",i.store.slogan||i.store.tagline||i.store.desc||i.store.description||"Toko Online & Kasir Resmi"),i.store.logo){const n=f("dyn-store-logo-img"),l=f("dyn-store-logo-icon");i.store.logo.includes("http")||i.store.logo.includes("data:")?n&&(n.src=i.store.logo,n.onerror=()=>{n.onerror=null,n.src="https://placehold.co/100?text=Logo"},B("dyn-store-logo-img"),L("dyn-store-logo-icon")):l&&(l.className=`fa-solid ${c(i.store.logo)} text-xl text-[var(--color-primary)]`,B("dyn-store-logo-icon"),L("dyn-store-logo-img"))}let e=i.banners&&i.banners.length?`
    <div class="relative group/banner-wrapper w-full">
        <div id="banner-slider" class="flex overflow-x-auto gap-4 sm:gap-6 pb-4 pt-2 snap-x hide-scrollbar scroll-smooth" ontouchstart="clearInterval(window.bannerTmr)" ontouchend="setTimeout(() => window.startBannerAutoSlide?.(), 8000)" onmouseenter="clearInterval(window.bannerTmr)" onmouseleave="window.startBannerAutoSlide?.()" onscroll="window.onBannerScroll && window.onBannerScroll()">
            ${i.banners.map((n,l)=>{const d=n.type==="video"&&n.videoUrl,p=!d&&n.link?`onclick="window.open('${c(n.link)}', '_self')"`:"";if(d){const m=ws(n.videoUrl)||{type:"direct",directUrl:Wa(n.videoUrl),embedUrl:vs(n.videoUrl)};let u="";return m.type==="youtube"?u=`
                <iframe
                    class="banner-video-iframe w-full h-full absolute inset-0 z-0 border-0 pointer-events-none select-none"
                    src="${c(m.embedUrl)}"
                    data-src="${c(m.embedUrl)}"
                    frameborder="0"
                    scrolling="no"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>`:m.type==="gdrive"?u=`
                <iframe
                    class="banner-video-iframe absolute z-0 border-0 pointer-events-none select-none"
                    src="${c(m.embedUrl)}"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    style="width:180%; height:210%; top:-55%; left:-40%; transform:scale(1); object-fit:cover;"
                ></iframe>`:u=`
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
            <div id="banner-slide-${l}" class="banner-slide-item w-[88vw] sm:w-[520px] aspect-video snap-center shrink-0 rounded-3xl relative overflow-hidden group bg-black shadow-none border border-white/10 flex flex-col select-none">
                ${u}
                <!-- Shield Transparan: Mencegah klik/tap pada video agar video tidak bisa di-klik/di-pause -->
                <div class="absolute inset-0 z-15 bg-transparent pointer-events-auto cursor-default" onclick="event.preventDefault(); event.stopPropagation();"></div>
                <!-- Konten bawah: judul & tombol suara murni transparan tanpa shadow gradient -->
                <div class="absolute bottom-0 left-0 right-0 z-20 bg-transparent px-5 py-4 flex items-end justify-between pointer-events-none">
                    <div class="flex-1 min-w-0 pointer-events-none">
                        ${n.title?`<p class="text-white font-extrabold text-sm sm:text-base line-clamp-1">${c(n.title)}</p>`:""}
                        ${n.desc?`<p class="text-white/80 text-[10px] sm:text-xs font-medium line-clamp-1 mt-0.5">${c(n.desc)}</p>`:""}
                    </div>
                    <div class="ml-3 shrink-0 flex items-center gap-2 pointer-events-auto">
                        <button onclick="event.stopPropagation(); window.toggleBannerVideoSound(this, ${l});" type="button" aria-label="Aktifkan Suara Video" class="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer">
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
                    ${n.img?`<img loading="lazy" src="${c(z(n.img,"w800-rw"))}" alt="${c(n.title||"Promo Banner")}" class="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105" onerror="this.style.display='none'">`:`
                    <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300">
                        <i class="fa-solid fa-gift text-4xl sm:text-5xl text-white"></i>
                    </div>`}
                </div>
            </div>
        </div>`}).join("")}
        </div>
        ${i.banners.length>1?`
        <!-- Navigation Arrows (Desktop) -->
        <button onclick="window.scrollBannerPrev()" type="button" aria-label="Banner Sebelumnya" class="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white items-center justify-center border border-slate-700 transition-all opacity-0 group-hover/banner-wrapper:opacity-100 shadow-xl active:scale-95">
            <i class="fa-solid fa-chevron-left text-sm"></i>
        </button>
        <button onclick="window.scrollBannerNext()" type="button" aria-label="Banner Selanjutnya" class="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white items-center justify-center border border-slate-700 transition-all opacity-0 group-hover/banner-wrapper:opacity-100 shadow-xl active:scale-95">
            <i class="fa-solid fa-chevron-right text-sm"></i>
        </button>

        <!-- Dots Indicator Navigation -->
        <div id="banner-dots-container" class="flex items-center justify-center gap-1.5 mt-2">
            ${i.banners.map((n,l)=>`
                <button onclick="window.scrollToBanner(${l})" type="button" aria-label="Slide ${l+1}" class="banner-dot-item ${l===0?"h-2.5 rounded-full transition-all duration-300 bg-[var(--color-primary)] w-7 shadow-sm":"w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"}" data-index="${l}"></button>
            `).join("")}
        </div>
        `:""}
    </div>`:"";A("dynamic-banners-container",e),setTimeout(ga,500);const a=(i.vouchers||[]).filter(n=>n.isShow==="true"||n.isShow===!0),t=f("dynamic-vouchers-container");if(a.length>0&&t){t.classList.remove("hidden");let n=`
        <div class="flex items-center justify-between mb-2.5">
            <h3 class="font-bold text-slate-800 dark:text-white text-xs sm:text-sm tracking-tight flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white shadow-2xs">
                    <i class="fa-solid fa-ticket-simple text-xs -rotate-45"></i>
                </div> VOUCHER TOKO
            </h3>
        </div>
        <div class="flex gap-2.5 sm:gap-3 overflow-x-auto hide-scrollbar snap-x pb-3 pt-1">
            ${a.map(l=>{let d=l.type==="shipping_free"?"Gratis Ongkir":l.type==="percent"?`Diskon ${c(String(parseFloat(l.value)||0))}%`:`Diskon ${k(l.value)}`,p=[];l.minPurchase>0&&p.push(`Min. Blj ${k(l.minPurchase)}`),l.maxDiscount>0&&p.push(`Maks. ptg ${k(l.maxDiscount)}`),l.targetProduct&&p.push("Produk Khusus");let m=p.length>0?c(p.join(" • ")):"Tanpa min. belanja";return`
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
        </div>`;t.innerHTML=n}else t&&(t.classList.add("hidden"),t.innerHTML="");const r=[...i.categories||[]];A("dynamic-categories-container",r.map(n=>{const l=we===n.name,d=decodeURIComponent(encodeURIComponent(n.name).replace(/'/g,"%27"));if(i.store.categoryStyle==="text"||!i.store.categoryStyle)return`<div onclick="filterCategory('${d}')" class="cursor-pointer shrink-0 snap-start group py-0.5"><div class="px-3.5 py-1.5 rounded-xl border transition-all duration-200 flex items-center gap-2 ${l?"bg-[var(--color-primary)] border-transparent text-white shadow-xs":"bg-slate-50 dark:bg-slate-800/90 border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[var(--color-primary)]/50 hover:bg-white dark:hover:bg-slate-800"}"><div class="w-5 h-5 rounded-md flex items-center justify-center ${l?"bg-white/20 text-white":"bg-white dark:bg-slate-700 text-slate-400 group-hover:text-[var(--color-primary)]"} transition-colors"><i class="fa-solid fa-layer-group text-[9px]"></i></div><span class="font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">${c(n.name)}</span></div></div>`;{const p=n.img&&!n.img.includes("10b981")?z(n.img,"w150-rw"):"https://placehold.co/150/f1f5f9/64748b?text=Cat";return`<div onclick="filterCategory('${d}')" class="flex flex-col items-center gap-1.5 cursor-pointer shrink-0 w-[64px] sm:w-[72px] group snap-start py-0.5"><div class="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-1.5 transition-all duration-200 ${l?"bg-[var(--color-primary-light)] border-2 border-[var(--color-primary)] shadow-xs dark:bg-[var(--color-primary-dark)]/20":"border border-slate-200 dark:border-slate-700 shadow-2xs group-hover:border-[var(--color-primary)] group-hover:-translate-y-0.5"} overflow-hidden"><img loading="lazy" src="${c(p)}" alt="${c(n.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/f1f5f9/64748b?text=Cat'" class="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"></div><span class="text-[8.5px] sm:text-[9px] text-center w-full line-clamp-1 leading-tight px-0.5 ${l?"font-bold text-[var(--color-primary)]":"font-semibold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]"} uppercase tracking-wider transition-colors">${c(n.name)}</span></div>`}}).join(""));const s=[...i.brands||[]],o=[{name:"Semua Merek",img:i.store.allBrandsIcon&&!i.store.allBrandsIcon.includes("10b981")?i.store.allBrandsIcon:"https://placehold.co/150/f1f5f9/475569?text=Semua+Merek"},...i.brands||[]];A("dynamic-brands-container",s.map(n=>{const l=Me===n.name,d=decodeURIComponent(encodeURIComponent(n.name).replace(/'/g,"%27"));if(i.store.brandStyle==="text")return`<div onclick="filterBrand('${d}')" class="cursor-pointer shrink-0 snap-start group py-0.5"><div class="px-3.5 py-1.5 rounded-xl border transition-all duration-200 flex items-center gap-2 ${l?"bg-[var(--color-primary)] border-transparent text-white shadow-xs":"bg-slate-50 dark:bg-slate-800/90 border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[var(--color-primary)]/50 hover:bg-white dark:hover:bg-slate-800"}"><div class="w-5 h-5 rounded-md flex items-center justify-center ${l?"bg-white/20 text-white":"bg-white dark:bg-slate-700 text-slate-400 group-hover:text-[var(--color-primary)]"} transition-colors"><i class="fa-solid fa-copyright text-[9px]"></i></div><span class="font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">${c(n.name)}</span></div></div>`;{const p=n.img&&!n.img.includes("10b981")?z(n.img,"w150-rw"):"https://placehold.co/150/f1f5f9/64748b?text=Brand";return`<div onclick="filterBrand('${d}')" class="flex flex-col items-center gap-1.5 cursor-pointer shrink-0 w-[64px] sm:w-[72px] group snap-start py-0.5"><div class="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden p-1.5 transition-all duration-200 ${l?"ring-2 ring-[var(--color-primary)] ring-offset-1 ring-offset-slate-50 dark:ring-offset-slate-800 shadow-xs":"border border-slate-200 dark:border-slate-700 shadow-2xs group-hover:border-[var(--color-primary)]/50 group-hover:-translate-y-0.5"}"><img loading="lazy" src="${c(p)}" alt="${c(n.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/f1f5f9/64748b?text=Brand'" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"></div><span class="text-[8.5px] sm:text-[9px] text-center w-full line-clamp-1 leading-tight px-0.5 ${l?"font-bold text-[var(--color-primary)]":"font-semibold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]"} uppercase tracking-wider transition-colors">${c(n.name)}</span></div>`}}).join("")),A("modal-brand-grid",o.map(n=>{const l=Me===n.name,d=decodeURIComponent(encodeURIComponent(n.name).replace(/'/g,"%27")),p=n.img&&!n.img.includes("10b981")?z(n.img,"w150-rw"):"https://placehold.co/150/f1f5f9/64748b?text=Brand";return`<button onclick="filterBrand('${d}'); closeBrandModal();" class="flex flex-col items-center gap-3 p-4 rounded-2xl border ${l?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.07)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-sm":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]/40 hover:shadow-sm"} transition-all active:scale-[0.96]"><div class="w-14 h-14 rounded-2xl flex items-center justify-center bg-white border border-slate-100 dark:border-slate-600 shadow-inner overflow-hidden p-1.5"><img loading="lazy" src="${c(p)}" alt="${c(n.name)}" class="w-full h-full object-contain" onerror="this.src='https://placehold.co/150/f1f5f9/64748b?text=Brand'"></div> <span class="text-[10px] sm:text-xs font-bold ${l?"text-[var(--color-primary)]":"text-slate-700 dark:text-slate-300"} text-center leading-tight line-clamp-2 uppercase tracking-widest">${c(n.name)}</span></button>`}).join("")),f("dyn-qris-img")&&i.payment&&(f("dyn-qris-img").src=i.payment.qrisUrl),typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog(),typeof window.applyBackgroundStyle=="function"&&window.applyBackgroundStyle(i.store.bgStyle,i.store.bgCustomUrl),Ae(1),re()};window.rDyn=He;const mi=async()=>{if(document.documentElement.classList.contains("dark")){const b=f("icon-theme");b&&(b.className="fa-solid fa-sun text-sm text-amber-500")}const e=()=>{i.products=i.products||[],i.categories=i.categories||[],i.brands=i.brands||[],i.vouchers=i.vouchers||[],i.changelog=i.changelog||[],i.rewards=i.rewards||[],i.rewards&&i.rewards.forEach(b=>{b.img&&(b.img=E(b.img))}),i.products.forEach(b=>{b.img&&(b.img=E(b.img)),b.variants&&b.variants.forEach(v=>{v.img&&(v.img=E(v.img))})}),i.banners&&i.banners.forEach(b=>{b.img&&(b.img=E(b.img)),b.videoUrl&&(b.videoUrl=Wa(b.videoUrl))}),i.categories&&i.categories.forEach(b=>{b.img&&(b.img=E(b.img),b.img.includes("10b981")&&(b.img="https://placehold.co/150/f1f5f9/64748b?text=Cat"))}),i.brands&&i.brands.forEach(b=>{b.img&&(b.img=E(b.img),b.img.includes("10b981")&&(b.img="https://placehold.co/150/f1f5f9/64748b?text=Brand"))}),i.store.logo&&(i.store.logo=E(i.store.logo)),i.store.allProductsIcon&&(i.store.allProductsIcon=E(i.store.allProductsIcon)),i.store.allBrandsIcon&&(i.store.allBrandsIcon=E(i.store.allBrandsIcon),i.store.allBrandsIcon.includes("10b981")&&(i.store.allBrandsIcon="https://placehold.co/150/f1f5f9/475569?text=Semua+Merek")),i.payment.qrisUrl&&(i.payment.qrisUrl=E(i.payment.qrisUrl)),C.forEach(b=>{b.img&&(b.img=E(b.img))}),se.forEach(b=>{b.img&&(b.img=E(b.img))})},a=Lt?.projectId||"default",t=Ce("freshmart_active_project");if(t&&t!==a)try{localStorage.removeItem("freshmart_cms_data"),localStorage.removeItem("freshmart_products"),localStorage.removeItem("freshmart_rewards"),localStorage.removeItem("freshmart_last_update"),localStorage.removeItem("freshmart_cart"),localStorage.removeItem("freshmart_wishlist")}catch{}V("freshmart_active_project",a);let r=JSON.parse(Ce("freshmart_cms_data")||"null"),s=JSON.parse(Ce("freshmart_products")||"null"),o=JSON.parse(Ce("freshmart_rewards")||"null");parseInt(Ce("freshmart_last_update")||"0");let n=!1;if(r?(Object.assign(i,le,r),i.store={...le.store,...r.store||{}},i.payment={...le.payment,...r.payment||{}},i.config={...le.config,...r.config||{}},i.config&&i.config.gasUrl&&(window.GAS_UPLOAD_URL=i.config.gasUrl),s&&(i.products=s),o&&(i.rewards=o),e(),i.store&&(Je(i.store.uiTheme,i.store.themeColor),Ye(i.store.bgStyle,i.store.bgCustomUrl)),la(),J(),da(),He(),re(),N("stat-products",i.products.filter(b=>b.isActive!=="false"&&b.isActive!==!1).length),setTimeout(()=>{T()},1200),n=!0):j("Memuat Toko..."),!n)try{const b=await S.collection("freshmart").doc("cms_data").get();if(b.exists){const v=b.data(),y=v.lastUpdate||0;V("freshmart_cms_data",JSON.stringify(v)),Object.assign(i,le,v),i.store={...le.store,...v.store||{}},i.payment={...le.payment,...v.payment||{}},i.config={...le.config,...v.config||{}},i.config&&i.config.gasUrl&&(window.GAS_UPLOAD_URL=i.config.gasUrl);const $=await S.collection("freshmart").doc("cms_data").collection("products").get();i.products=$.docs.map(I=>I.data()).sort((I,O)=>(O.id||0)-(I.id||0)),V("freshmart_products",JSON.stringify(i.products)),V("freshmart_last_update",y.toString());try{const I=await S.collection("freshmart").doc("cms_data").collection("rewards").get();i.rewards=I.docs.map(O=>O.data()).sort((O,R)=>(R.id||0)-(O.id||0)),V("freshmart_rewards",JSON.stringify(i.rewards))}catch(I){console.warn("Initial rewards fetch non-blocking error:",I)}e(),i.store&&(Je(i.store.uiTheme,i.store.themeColor),Ye(i.store.bgStyle,i.store.bgCustomUrl)),la(),J(),da(),He(),re(),N("stat-products",i.products.filter(I=>I.isActive!=="false"&&I.isActive!==!1).length)}}catch{g("Mode Offline (Data Lokal)")}finally{setTimeout(()=>{T()},800)}N("stat-products",i.products.filter(b=>b.isActive!=="false"&&b.isActive!==!1).length);const l=f("loader-store-name"),d=f("loader-tagline");l&&(l.textContent=(i.store.name||"").toUpperCase()),d&&(d.textContent=i.store.tagline||i.store.desc||i.store.address||"");const p=f("loader-logo-icon"),m=f("loader-logo-img"),u=i.store.logo&&i.store.logo!=="fa-store"?i.store.logo:"";u&&(p&&(p.style.display="none"),m&&(m.src=u,m.style.display="block")),lt(),window.injectJSONLD("seo-website",{"@context":"https://schema.org","@type":"WebSite",name:"Toko Putri",url:window.location.origin}),window.injectJSONLD("seo-localbusiness",{"@context":"https://schema.org","@type":"HardwareStore",name:"Toko Putri",image:z(i.store.logo,"w300-rw"),description:"Solusi grosir dan e-commerce terpercaya untuk alat teknik, perkakas, dan perlengkapan pertukangan berkualitas.",url:window.location.origin,telephone:i.store.phone||"",address:{"@type":"PostalAddress",streetAddress:i.store.address||"",addressCountry:"ID"}});const h=new URLSearchParams(window.location.search).get("p");if(h&&i.products.find(b=>b.id==parseInt(h))){const b=new URLSearchParams(window.location.search);b.delete("p");let v=window.location.pathname;b.toString()&&(v+="?"+b.toString()),window.history.replaceState({},document.title,v),setTimeout(()=>openProductModal(parseInt(h)),600)}T()},q=async(e=null,a=null)=>{try{if(Array.isArray(e)){const r={lastUpdate:ee.firestore.FieldValue.increment(1),updateType:a?.updateType||(e.length?"settings_change":"full"),changedKeys:e};a?.updatedProductIds&&Array.isArray(a.updatedProductIds)?r.updatedProductIds=a.updatedProductIds:r.updatedProductIds=ee.firestore.FieldValue.delete(),e.forEach(s=>{s&&(r[s]=i[s])}),await S.collection("freshmart").doc("cms_data").set(r,{merge:!0})}else{const r={...i};delete r.products,delete r.auth,r.lastUpdate=ee.firestore.FieldValue.increment(1),r.updateType="full",await S.collection("freshmart").doc("cms_data").set(r)}i.lastUpdate=(parseInt(Ce("freshmart_last_update"))||i.lastUpdate||0)+1;const t={...i};delete t.products,delete t.auth,V("freshmart_cms_data",JSON.stringify(t)),V("freshmart_last_update",i.lastUpdate.toString()),V("freshmart_products",JSON.stringify(i.products))}catch{g("Tersimpan secara Lokal")}};let La=!1,Ie=null,Ha=typeof document<"u"?document.hidden:!1,Ka=!1,qe=!1;typeof document<"u"&&document.addEventListener("visibilitychange",()=>{if(Ha=document.hidden,!Ha&&Ka&&Ie){Ka=!1;const e=Ie;Ie=null,typeof window._doSyncCmsData=="function"&&window._doSyncCmsData(e)}});const Va=e=>{if(!e)return e;const a={...e};return a.id==null&&(a.id=0),typeof a.id=="string"&&!isNaN(a.id)&&(a.id=Number(a.id)),a.img&&(a.img=E(a.img)),a.variants&&a.variants.forEach(t=>{t.img&&(t.img=E(t.img))}),a},wa=()=>{if(N("stat-products",i.products.filter(t=>t.isActive!=="false"&&t.isActive!==!1).length),la(),J(),typeof He=="function"?He():typeof window.rDyn=="function"&&window.rDyn(),typeof re=="function"?re():typeof window.rCat=="function"&&window.rCat(),document.getElementById("admin-list-container")&&typeof window.rAdmItms=="function"){const t=window.cTab||"products";["products","colors"].includes(t)&&window.rAdmItms(t)}const a=window.cProd;if(a){const t=i.products.find(r=>r.id===a.id);if(t&&(window.cProd=t,typeof window.rProdMod=="function")){const r=document.getElementById("product-modal");r&&!r.classList.contains("hidden")&&!r.classList.contains("opacity-0")&&window.rProdMod()}}},ui=()=>{if(window.unsubCmsRealtime)return;const e=async a=>{if(!a.exists)return;const t=a.data(),r=t.lastUpdate||0,s=parseInt(Ce("freshmart_last_update")||"0");if(Ha){Ie=a,Ka=!0;return}if(!(r===s&&r>0&&qe&&i.products&&i.products.length>0)){La=!0;try{const o=t.updateType||"full",n=Array.isArray(t.updatedProductIds)?t.updatedProductIds.map(String):[];if(i.store={...le.store,...t.store||{}},t.categories&&(i.categories=t.categories),t.vouchers&&(i.vouchers=t.vouchers),t.banners&&(i.banners=t.banners),t.brands&&(i.brands=t.brands),t.banks&&(i.banks=t.banks),t.faqs&&(i.faqs=t.faqs),i.payment={...le.payment,...t.payment||{}},i.config={...le.config,...t.config||{}},i.taxSettings={...le.taxSettings,...t.taxSettings||{}},i.config&&i.config.gasUrl&&(window.GAS_UPLOAD_URL=i.config.gasUrl),i.banners&&i.banners.forEach(d=>{d.img&&(d.img=E(d.img)),d.videoUrl&&(d.videoUrl=Wa(d.videoUrl))}),i.categories&&i.categories.forEach(d=>{d.img&&(d.img=E(d.img),d.img.includes("10b981")&&(d.img="https://placehold.co/150/f1f5f9/64748b?text=Cat"))}),i.brands&&i.brands.forEach(d=>{d.img&&(d.img=E(d.img),d.img.includes("10b981")&&(d.img="https://placehold.co/150/f1f5f9/64748b?text=Brand"))}),o==="product_delete"&&n.length>0)n.forEach(d=>{const p=i.products.findIndex(m=>(m.id!=null?m.id.toString():"")===d);p>-1&&i.products.splice(p,1)}),V("freshmart_products",JSON.stringify(i.products)),qe=!0,wa();else if(!qe&&(!i.products||i.products.length===0)){const d=await S.collection("freshmart").doc("cms_data").collection("products").get();i.products=d.docs.map(p=>Va(p.data())).sort((p,m)=>(m.id||0)-(p.id||0)),V("freshmart_products",JSON.stringify(i.products)),qe=!0,wa()}else qe=!0;if(V("freshmart_cms_data",JSON.stringify(t)),V("freshmart_last_update",r.toString()),i.store&&(Je(i.store.uiTheme,i.store.themeColor),Ye(i.store.bgStyle,i.store.bgCustomUrl)),lt(),N("stat-products",i.products.filter(d=>d.isActive!=="false"&&d.isActive!==!1).length),typeof He=="function"?He():typeof window.rDyn=="function"&&window.rDyn(),typeof re=="function"?re():typeof window.rCat=="function"&&window.rCat(),la(),J(),(window.isAdm||window.__localIsAdm)&&typeof window.rAdmItms=="function"){const d=window.cTab||"products";["categories","vouchers","banners","brands","banks","colors"].includes(d)&&window.rAdmItms(d)}}catch(o){console.error("Gagal sinkron realtime settings:",o)}finally{if(La=!1,Ie){const o=Ie;Ie=null,e(o)}}}};window._doSyncCmsData=e,window.unsubCmsRealtime=S.collection("freshmart").doc("cms_data").onSnapshot(async a=>{if(La){Ie=a;return}await e(a)},a=>{console.warn("Realtime listener error:",a)})},bi=()=>{if(window.unsubProductsRealtime)return;let e=!0;window.unsubProductsRealtime=S.collection("freshmart").doc("cms_data").collection("products").onSnapshot(a=>{if(e){e=!1,qe=!0,i.products=a.docs.map(r=>Va(r.data())).sort((r,s)=>(s.id||0)-(r.id||0)),V("freshmart_products",JSON.stringify(i.products)),wa();return}let t=!1;a.docChanges().forEach(r=>{const s=Va(r.doc.data()),o=r.doc.id;if(r.type==="added"||r.type==="modified"){const n=i.products.findIndex(l=>(l.id!=null?l.id.toString():"")===o);n>-1?i.products[n]=s:(i.products.unshift(s),i.products.sort((l,d)=>(d.id||0)-(l.id||0))),t=!0}else if(r.type==="removed"){const n=i.products.findIndex(l=>(l.id!=null?l.id.toString():"")===o);n>-1&&(i.products.splice(n,1),t=!0)}}),t&&(V("freshmart_products",JSON.stringify(i.products)),wa())},a=>{console.warn("Realtime products listener error:",a)})},gi=()=>{if(!window.unsubRewardsRealtime){if(!i.rewards||!i.rewards.length)try{const e=JSON.parse(Ce("freshmart_rewards")||"null");e&&Array.isArray(e)&&(i.rewards=e,i.rewards.forEach(a=>{a.img&&(a.img=E(a.img))}))}catch{}window.unsubRewardsRealtime=S.collection("freshmart").doc("cms_data").collection("rewards").onSnapshot(e=>{i.rewards=e.docs.map(r=>r.data()).sort((r,s)=>(s.id||0)-(r.id||0)),i.rewards.forEach(r=>{r.img&&(r.img=E(r.img))}),V("freshmart_rewards",JSON.stringify(i.rewards)),(window.isAdm||window.__localIsAdm)&&window.cTab==="rewards"&&typeof window.rAdmItms=="function"&&window.rAdmItms("rewards"),typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog();const t=document.getElementById("member-modal");t&&t.style.display==="flex"&&currentMember&&typeof window.rMemberModalBody=="function"&&window.rMemberModalBody()},e=>{console.warn("Realtime hadiah gagal:",e)})}},lt=e=>{try{const a=i.store?.name||"Toko Putri",t=i.store?.logo||"",r=/^(https?:|data:)/i.test(t)?t:"https://placehold.co/192x192?text=Logo",s=document.documentElement.classList.contains("dark")?"#0b1120":"#ffffff",o=e||i.store?.themeColor||localStorage.getItem("freshmart_theme_color")||"#10b981";let n=document.getElementById("dynamic-manifest");n||(n=document.createElement("link"),n.id="dynamic-manifest",n.rel="manifest",document.head.appendChild(n));let l=document.getElementById("dynamic-apple-icon");l||(l=document.createElement("link"),l.id="dynamic-apple-icon",l.rel="apple-touch-icon",document.head.appendChild(l)),l.href=r;let d=document.getElementById("dynamic-favicon");d||(d=document.createElement("link"),d.id="dynamic-favicon",d.rel="icon",document.head.appendChild(d)),d.href=r;const p={id:window.location.origin+"/",name:a,short_name:a,description:i.store?.slogan||a+" - Belanja online lebih mudah",start_url:window.location.origin+"/",scope:window.location.origin+"/",lang:"id",dir:"ltr",display:"standalone",display_override:["standalone","minimal-ui"],orientation:"portrait",categories:["shopping","business"],background_color:s,theme_color:o,icons:[{src:r,sizes:"192x192",type:"image/png",purpose:"any"},{src:r,sizes:"512x512",type:"image/png",purpose:"any"}]};if(n.dataset.blobUrl)try{URL.revokeObjectURL(n.dataset.blobUrl)}catch{}const m=URL.createObjectURL(new Blob([JSON.stringify(p)],{type:"application/manifest+json"}));n.dataset.blobUrl=m,n.href=m}catch(a){console.error("PWA Manifest Update Error: ",a)}};window.loadAppData=mi;window.saveApp=q;window.attachRealtimeStockSync=ui;window.attachRealtimeProductsSync=bi;window.attachRewardsRealtime=gi;window.updatePwaManifest=lt;function fi(e){if(!e)return"";const a=e.match(/\/d\/([a-zA-Z0-9_-]+)/);return a?`https://drive.google.com/file/d/${a[1]}/preview`:e}const xi=e=>window.pushModalHistory?.(e);window.oAAdd=()=>{window.oAEd(dt||window.cTab||"products",null)};window.oAEd=(e,a)=>{Ca(e),typeof window.setCTab=="function"&&window.setCTab(e),window.cTab=e,ss(a),typeof window.setEId=="function"&&window.setEId(a),window.eId=a;let t=a!=null&&a!==""?(i[e]||[]).find(p=>p&&p.id!=null&&String(p.id)===String(a)):null;N("admin-modal-title",a?"Edit Data":"Tambah Data");let r=Xa[e]||[],s="";e==="products"&&(Ia(t&&t.variants?JSON.parse(JSON.stringify(t.variants)):[]),ct(t&&t.wholesale?JSON.parse(JSON.stringify(t.wholesale)):[]),pt(t&&t.specTable?JSON.parse(JSON.stringify(t.specTable)):[]));const o=["textarea","richtext","variants_builder","wholesale_builder","spec_table_builder"],n=["img","desc","name","isActive","tag","poTime","video"],l=p=>o.includes(p.type)||n.includes(p.key);r.forEach(p=>{let m=t?p.type==="number"&&t[p.key]!==void 0?t[p.key]:t[p.key]||"":"";const u=l(p)?"lg:col-span-2":"";if(s+=`<div class="flex flex-col gap-1.5 ${u}"><label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">${p.label}</label>`,p.type==="textarea")s+=`<textarea autocomplete='off' id="af-${p.key}" class="admin-input resize-none shadow-sm bg-slate-50 dark:bg-slate-900" rows="3">${c(m)}</textarea>`;else if(p.type==="select")s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();">`,p.options.forEach(x=>{const h=String(m)===String(x.val);s+=`<option value="${x.val}" ${h?"selected":""} class="font-bold">${x.text}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(p.type==="dynamic_select_category")s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Pilih Kategori</option>`,i.categories.forEach(x=>{s+=`<option value="${c(x.name)}" ${m===x.name?"selected":""} class="font-bold">${c(x.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(p.type==="dynamic_select_brand")s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Tanpa Merek</option>`,(i.brands||[]).forEach(x=>{s+=`<option value="${c(x.name)}" ${m===x.name?"selected":""} class="font-bold">${c(x.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(p.type==="dynamic_select_products")s+=`<div class="relative"><select id="af-${p.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold primary-text">-- Semua Produk (Tanpa Batasan) --</option>`,(i.products||[]).forEach(x=>{s+=`<option value="${x.id}" ${m==x.id?"selected":""} class="font-bold">${c(x.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(p.type==="variants_builder")s+='<div id="variants-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(p.type==="wholesale_builder")s+='<div id="wholesale-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(p.type==="spec_table_builder")s+='<div id="spec-table-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(p.key==="subCategory"){const x=[...new Set((i.products||[]).map(h=>(h.subCategory||"").trim()).filter(Boolean))].sort();s+=`<div class="relative flex items-center">
                <input autocomplete='off' type="text" id="af-${p.key}" list="subcategories-datalist" value="${c(m)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 !pr-10" placeholder="Ketik atau pilih jenis produk..." >
                <datalist id="subcategories-datalist">
                    ${x.map(h=>`<option value="${c(h)}"></option>`).join("")}
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
                ${m?`<div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-black aspect-video w-full max-w-xs"><iframe src="${c(fi(m))}" class="w-full h-full" frameborder="0" allow="autoplay; fullscreen" loading="lazy"></iframe></div>`:""}
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
>`;s+="</div>"}),s=`<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 items-start">${s}</div>`,A("admin-modal-form",s),e==="products"&&(window.rVarsB?.(),window.rWholB?.(),window.rSpecB?.());const d=f("admin-modal");d&&d.classList.contains("hidden")&&xi("admin"),B("admin-modal"),setTimeout(()=>{f("admin-modal").classList.remove("opacity-0"),f("admin-modal-box").classList.remove("scale-95")},10)};window.submitAdminForm=async()=>{if(Ke)return;U(!0);const e=dt||window.cTab||"products";let a={},t=Xa[e]||[];for(let s of t)if(s.type==="variants_builder")a.variants=ie.filter(o=>o.name.trim()!=="");else if(s.type==="wholesale_builder")a.wholesale=Re.filter(o=>parseFloat(o.minQty)>.01&&o.price>0);else if(s.type==="spec_table_builder")a.specTable=he.filter(o=>o.key.trim()!=="");else{let o="";if(s.type==="richtext"){const n=f(`af-${s.key}-editor`);o=n?n.innerHTML:""}else o=P(`af-${s.key}`);if(typeof o=="string"){if(o.startsWith("data:image/")&&o.length>3e5)return U(!1),g("Gambar Base64 terlalu besar! Upload file.");s.key==="img"&&(o=E(o))}a[s.key]=s.type==="number"?parseFloat(o)||0:o}if(!a.name&&!a.title&&!a.bankName&&!a.code)return U(!1),g("Judul/Nama/Kode wajib diisi!");if(e==="products"&&!a.sku&&(a.sku="SKU"+Date.now().toString().slice(-6)),e==="customers"){const s=window.normalizeWA?window.normalizeWA(a.phone):(a.phone||"").replace(/\D/g,"").replace(/^0/,"62");if(!s||s.length<10)return U(!1),g("Nomor WhatsApp tidak valid!");a.phone=s,a.points=parseFloat(a.points)||0,a.id=parseInt(s,10)}let r=null;if(e==="customers")if(i.customers||(i.customers=[]),fe){r=fe;let s=i.customers.findIndex(o=>o&&o.id!=null&&String(o.id)===String(fe));s>-1?i.customers[s]=a:i.customers.unshift(a)}else i.customers.unshift(a);else if(e==="rewards")if(i.rewards||(i.rewards=[]),fe){let s=i.rewards.findIndex(o=>o&&o.id!=null&&String(o.id)===String(fe));s>-1?(a.id=i.rewards[s].id,i.rewards[s]=a):a.id=fe}else a.id=Date.now(),i.rewards.unshift(a);else if(fe){i[e]||(i[e]=[]);let s=i[e].findIndex(o=>o&&o.id!=null&&String(o.id)===String(fe));if(s>-1){if(a.id=i[e][s].id,e==="products"){const o=i[e][s];a.totalSold=o.totalSold||0,a.variants&&a.variants.length&&o.variants&&a.variants.forEach(n=>{const l=o.variants.find(d=>d.name===n.name);l&&l.totalSold&&(n.totalSold=l.totalSold)})}i[e][s]=a}else a.id=fe,i[e].push(a)}else a.id=Date.now(),i[e]||(i[e]=[]),i[e].unshift(a);j("Menyimpan...");try{const s=typeof S<"u"&&S?S:window.db,o=typeof q=="function"?q:window.saveApp||(async()=>{});if(!s)throw new Error("Database Firebase belum terhubung");if(e==="products")await s.collection("freshmart").doc("cms_data").collection("products").doc(a.id.toString()).set(a),await o([],{updateType:"product_single",updatedProductIds:[a.id.toString()]});else if(e==="customers"){const n=s.collection("freshmart").doc("cms_data").collection("customers");r!==null&&r!==a.id&&await n.doc(r.toString()).delete().catch(()=>{}),await n.doc(a.phone).set(a,{merge:!0})}else if(e==="rewards"){await s.collection("freshmart").doc("cms_data").collection("rewards").doc(a.id.toString()).set(a);try{localStorage.setItem("freshmart_rewards",JSON.stringify(i.rewards))}catch{}typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog()}else await o([e]);window.closeAdminModal?.(),window.rAdmItms?.(e),g("Tersimpan!")}catch(s){console.error("Gagal simpan admin data:",s),g("Gagal menyimpan: "+(s.message||""))}finally{U(!1),T()}};window.oADel=async(e,a)=>{window.showConfirm?.("Hapus Data","Data yang dihapus tidak bisa dikembalikan lagi.",async()=>{if(Ke)return;U(!0);const t=typeof S<"u"&&S?S:window.db,r=typeof q=="function"?q:window.saveApp||(async()=>{}),s=i[e]&&i[e].find(o=>o&&o.id!=null&&String(o.id)===String(a));i[e]=(i[e]||[]).filter(o=>!o||o.id==null||String(o.id)!==String(a)),j("Menghapus...");try{if(!t)throw new Error("Database Firebase belum terhubung");if(e==="products")await t.collection("freshmart").doc("cms_data").collection("products").doc(a.toString()).delete(),await r([],{updateType:"product_delete",updatedProductIds:[a.toString()]});else if(e==="customers"){const o=s?s.phone:a.toString();await t.collection("freshmart").doc("cms_data").collection("customers").doc(o).delete()}else if(e==="rewards"){await t.collection("freshmart").doc("cms_data").collection("rewards").doc(a.toString()).delete();try{localStorage.setItem("freshmart_rewards",JSON.stringify(i.rewards))}catch{}typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog()}else await r([e]);window.rAdmItms?.(e),g("Berhasil Dihapus!")}catch(o){g("Gagal menghapus: "+(o.message||""))}finally{U(!1),T()}})};window.duplicateProduct=async e=>{window.showConfirm?.("Duplikat Produk","Menyalin data produk ini ke item baru?",async()=>{if(Ke)return;U(!0);const a=typeof S<"u"&&S?S:window.db,t=typeof q=="function"?q:window.saveApp||(async()=>{}),r=i.products.find(o=>o&&o.id!=null&&String(o.id)===String(e));if(!r){U(!1);return}let s=JSON.parse(JSON.stringify(r));s.id=Date.now()+Math.floor(Math.random()*1e3),s.name=s.name+" COPY",s.sku="",s.totalSold=0,s.variants&&s.variants.length>0&&(s.variants=s.variants.map(o=>(o.sku="",o.totalSold=0,o))),i.products.unshift(s),j("Menyalin...");try{if(!a)throw new Error("Database Firebase belum terhubung");await a.collection("freshmart").doc("cms_data").collection("products").doc(s.id.toString()).set(s),await t([],{updateType:"product_single",updatedProductIds:[s.id.toString()]}),window.rAdmItms?.("products"),g("Produk berhasil disalin!")}catch(o){g("Gagal menyalin: "+(o.message||""))}finally{U(!1),T()}},"Ya, Salin",!1)};window.rSpecB=()=>{const e=document.getElementById("spec-table-builder-container");if(!e)return;let a="";he.length>0?a+=`<div class="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm mb-3">
            <table class="w-full text-sm">
                <thead>
                    <tr class="bg-slate-100 dark:bg-slate-800">
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest w-5/12">Nama Spesifikasi</th>
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Nilai / Keterangan</th>
                        <th class="py-2.5 px-2 w-10"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                    ${he.map((t,r)=>`
                    <tr class="bg-white dark:bg-slate-900 group">
                        <td class="py-2 px-3"><input autocomplete='off' placeholder="Cth: Berat" class="w-full bg-transparent text-[13px] font-semibold text-slate-700 dark:text-slate-200 focus:outline-none placeholder:text-slate-300" value="${c(t.key)}" oninput="uSpec(${r},'key',this.value)"></td>
                        <td class="py-2 px-3"><input autocomplete='off' placeholder="Cth: 2.5 kg" class="w-full bg-transparent text-[13px] text-slate-600 dark:text-slate-300 focus:outline-none placeholder:text-slate-300" value="${c(t.val)}" oninput="uSpec(${r},'val',this.value)"></td>
                        <td class="py-2 px-2 text-center"><button type="button" onclick="rmSpec(${r})" class="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 text-rose-400 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-60 group-hover:opacity-100 active:scale-95 cursor-pointer" title="Hapus Baris"><i class="fa-solid fa-trash text-[10px]"></i></button></td>
                    </tr>`).join("")}
                </tbody>
            </table>
        </div>`:a+='<div class="text-center py-5 text-slate-400 dark:text-slate-500 text-[12px] font-medium"><i class="fa-solid fa-table-cells-large text-2xl mb-2 block opacity-30 text-[var(--color-primary)]"></i>Belum ada spesifikasi. Klik tombol di bawah untuk menambahkan.</div>',a+='<button type="button" onclick="addSpec()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-plus-circle text-base"></i> Tambah Baris Spesifikasi</button>',e.innerHTML=a};window.addSpec=()=>{he.push({key:"",val:""}),pt(he),window.rSpecB()};window.rmSpec=e=>{he.splice(e,1),pt(he),window.rSpecB()};window.uSpec=(e,a,t)=>{he[e]&&(he[e][a]=t)};window.rVarsB=()=>{const e=document.getElementById("af-category"),a=e?/\bcat\b/i.test(e.value):!1;let t=`<div class="space-y-5 mb-5">${ie.map((r,s)=>{let o=r.isActive!==!1&&r.isActive!=="false";return`
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative transition-all duration-300 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 hover:shadow-md">
            <div class="flex items-center justify-between mb-5 pb-4 border-b border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-xl primary-bg text-[11px] font-bold flex items-center justify-center shadow-sm">${s+1}</div>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest">${r.name||"Varian Baru"}</span>
                </div>
                <div class="flex items-center gap-2">
                    <button type="button" onclick="exportVariantToColorDB(${s})" class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/40 hover:bg-[rgba(var(--color-primary-rgb),0.08)] transition-all flex items-center justify-center shadow-sm active:scale-95 cursor-pointer" title="Simpan ke Database Warna"><i class="fa-solid fa-database text-xs"></i></button>
                    <button type="button" onclick="rmVar(${s})" class="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center shadow-sm active:scale-95 cursor-pointer" title="Hapus Varian"><i class="fa-solid fa-trash text-xs"></i></button>
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
                ${a?"":`
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
                    <button type="button" onclick="tVars[${s}].isActive = ${!o}; rVarsB();" class="w-full py-3.5 px-4 rounded-xl text-[13px] font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2.5 border-2 active:scale-95 ${o?"primary-bg border-[var(--color-primary-dark)] shadow-md":"bg-slate-100 text-rose-500 border-rose-200 hover:bg-rose-50 dark:bg-slate-800 dark:border-rose-800"}">
                        ${o?'<i class="fa-solid fa-circle-check text-base"></i> STOK TERSEDIA':'<i class="fa-solid fa-ban text-base"></i> STOK HABIS'}
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
                    <label class="block text-[11px] font-bold text-[var(--color-primary)] mb-2 uppercase tracking-widest flex items-center gap-1"><i class="fa-solid fa-star"></i> Poin Member (per unit terjual)</label>
                    <input autocomplete='off' placeholder="0" type="number" min="0" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.poin||0}" onchange="uVar(${s},'poin',this.value)">
                </div>
            </div>
        </div>`}).join("")}</div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <button type="button" onclick="openColorImportModal()" class="py-3 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm cursor-pointer"><i class="fa-solid fa-swatchbook text-[var(--color-primary)]"></i> Impor dari DB Warna</button>
        <button type="button" onclick="exportAllVariantsToColorDB()" class="py-3 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm cursor-pointer"><i class="fa-solid fa-upload text-[var(--color-primary)]"></i> Ekspor Semua ke DB</button>
        <button type="button" onclick="addVar()" class="py-3 primary-bg font-bold rounded-xl text-xs sm:text-sm border border-[rgba(var(--color-primary-rgb),0.3)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-glow cursor-pointer"><i class="fa-solid fa-plus-circle text-base"></i> Tambah Varian Baru</button>
    </div>`;A("variants-builder-container",t)};window.addVar=()=>{ie.push({name:"",price:0,priceNormal:0,hpp:0,stock:0,sku:"",img:"",unit:"",colorCode:"",poin:0,isActive:!0}),Ia(ie),window.rVarsB()};window.rmVar=e=>{ie.splice(e,1),Ia(ie),window.rVarsB()};window.uVar=(e,a,t)=>{ie[e][a]=a==="price"||a==="priceNormal"||a==="hpp"||a==="stock"||a==="poin"?parseFloat(t)||0:a==="img"?E(t):t};window._openColorFloatModal=e=>{_closeColorFloatModal();const a=document.createElement("div");a.id="color-float-modal",a.className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/80 p-4 opacity-0 transition-opacity duration-300",a.onclick=r=>{r.target===a&&_closeColorFloatModal()};const t=document.createElement("div");t.id="color-float-box",t.className="relative w-full max-w-sm scale-95 transform rounded-3xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-800 overflow-y-auto max-h-[90vh]",t.innerHTML=e,a.appendChild(t),document.body.appendChild(a),requestAnimationFrame(()=>{a.classList.remove("opacity-0"),t.classList.remove("scale-95")})};window._closeColorFloatModal=()=>{const e=document.getElementById("color-float-modal");if(!e)return;const a=document.getElementById("color-float-box");e.classList.add("opacity-0"),a&&a.classList.add("scale-95"),setTimeout(()=>{e.parentNode&&e.remove()},300)};window.openColorImportModal=()=>{let e=i.colors||[];if(!e.length){g("Database Warna masih kosong!");return}let a={};e.forEach(r=>{let s=r.catalog||"Tanpa Katalog";a[s]||(a[s]=[]),a[s].push(r)});let t=`<div class="p-6">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2"><i class="fa-solid fa-swatchbook text-[var(--color-primary)]"></i> Pilih Warna</h3>
            <button type="button" onclick="_closeColorFloatModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="space-y-6 max-h-[60vh] overflow-y-auto pr-2">`;for(let r in a)t+=`<div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">${c(r)}</h4>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                ${a[r].map(s=>`
                    <button type="button" onclick="importColorToVariant('${c(s.name)}', '${c(s.hex||"")}')" class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50 hover:-translate-y-0.5 hover:shadow-md transition-all text-left bg-white dark:bg-slate-800 cursor-pointer">
                        <div class="w-8 h-8 rounded-full border-2 border-slate-100 dark:border-slate-600 shadow-sm shrink-0" style="background-color: ${c(s.hex||"transparent")}"></div>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2">${c(s.name)}</span>
                    </button>`).join("")}
            </div>
        </div>`;t+="</div></div>",_openColorFloatModal(t)};window.importColorToVariant=(e,a)=>{ie.push({name:e,price:0,priceNormal:0,hpp:0,stock:0,sku:"",img:"",unit:"",colorCode:a||"",poin:0,isActive:!0}),Ia(ie),window.rVarsB(),_closeColorFloatModal(),g("Warna ditambahkan!")};window.exportVariantToColorDB=async e=>{const a=ie[e];if(!a||!a.name.trim()){g("Nama varian kosong!");return}if((i.colors||[]).find(o=>o.name.toLowerCase()===a.name.trim().toLowerCase())){g(`"${a.name}" sudah ada di Database Warna.`);return}let s=[...new Set((i.colors||[]).map(o=>o.catalog).filter(Boolean))].map(o=>`<option value="${c(o)}">${c(o)}</option>`).join("");_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"><i class="fa-solid fa-database text-[var(--color-primary)]"></i> Simpan ke Database Warna</h3>
            <div class="space-y-4">
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nama Warna</label><input id="exp-name" class="admin-input" value="${c(a.name)}"></div>
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Kode Warna (Hex)</label>
                    <div class="flex gap-3 items-center">
                        <input type="color" id="exp-hex-picker" value="${c(a.colorCode||"#ffffff")}" class="w-10 h-10 rounded-xl cursor-pointer" onchange="document.getElementById('exp-hex').value=this.value">
                        <input id="exp-hex" class="admin-input flex-1" placeholder="#FFFFFF (opsional)" value="${c(a.colorCode||"")}">
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
        </div>`)};window.confirmExportVariantToColorDB=async()=>{const e=(document.getElementById("exp-name")?.value||"").trim(),a=(document.getElementById("exp-hex")?.value||"").trim(),t=(document.getElementById("exp-catalog")?.value||"").trim();if(!e){g("Nama warna wajib diisi!");return}const r={id:Date.now(),name:e,hex:a,catalog:t};i.colors||(i.colors=[]),i.colors.push(r),_closeColorFloatModal(),j("Menyimpan ke Database Warna...");try{await q(["colors"]),g(`"${e}" berhasil disimpan ke Database Warna! 🎨`)}catch{g("Gagal menyimpan!")}finally{T()}};window.exportAllVariantsToColorDB=async()=>{const e=ie.filter(r=>r.name.trim());if(!e.length){g("Tidak ada varian untuk diekspor!");return}i.colors||(i.colors=[]);let t=[...new Set(i.colors.map(r=>r.catalog).filter(Boolean))].map(r=>`<option value="${c(r)}">${c(r)}</option>`).join("");_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-upload text-[var(--color-primary)]"></i> Ekspor Semua Varian</h3>
            <p class="text-xs text-slate-500 mb-5">${e.length} varian akan diekspor ke Database Warna. Nama yang sudah ada di database akan dilewati.</p>
            <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek (berlaku untuk semua)</label>
                <input id="expall-catalog" list="expall-catalog-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll">
                <datalist id="expall-catalog-list">${t}</datalist>
            </div>
            <div class="flex gap-3 mt-6">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 text-sm hover:bg-slate-50 transition-all cursor-pointer">Batal</button>
                <button onclick="confirmExportAllVariants()" class="flex-1 py-3 rounded-xl primary-bg text-white font-bold text-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer"><i class="fa-solid fa-upload mr-2"></i>Ekspor</button>
            </div>
        </div>`)};window.confirmExportAllVariants=async()=>{const e=(document.getElementById("expall-catalog")?.value||"").trim(),a=ie.filter(s=>s.name.trim());i.colors||(i.colors=[]);const t=new Set(i.colors.map(s=>s.name.toLowerCase()));let r=0;if(a.forEach(s=>{t.has(s.name.trim().toLowerCase())||(i.colors.push({id:Date.now()+r,name:s.name.trim(),hex:s.colorCode||"",catalog:e}),t.add(s.name.trim().toLowerCase()),r++)}),_closeColorFloatModal(),!r){g("Semua varian sudah ada di Database Warna!");return}j("Menyimpan...");try{await q(["colors"]),g(`${r} warna berhasil diekspor ke Database Warna! 🎨`)}catch{g("Gagal menyimpan!")}finally{T()}};window.openImportFromProductsModal=async()=>{const e=[];if((i.products||[]).forEach(o=>{(o.variants||[]).forEach(n=>{n.name&&n.name.trim()&&e.push({varName:n.name.trim(),hex:n.colorCode||"",prodName:o.name||""})})}),!e.length){g("Tidak ada varian produk yang ditemukan!");return}const a=new Set((i.colors||[]).map(o=>o.name.toLowerCase())),t=e.filter(o=>!a.has(o.varName.toLowerCase()));if(!t.length){g("Semua varian produk sudah ada di Database Warna!");return}let s=[...new Set((i.colors||[]).map(o=>o.catalog).filter(Boolean))].map(o=>`<option value="${c(o)}">${c(o)}</option>`).join("");window._pendingImportVariants=t,_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-box-archive text-[var(--color-primary)]"></i> Impor dari Semua Produk</h3>
            <p class="text-xs text-slate-500 mb-4">${t.length} nama varian baru ditemukan (yang sudah ada di database dilewati).</p>
            <div class="hide-scrollbar max-h-48 overflow-y-auto mb-4 space-y-2">
                ${t.map((o,n)=>`
                    <label class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-[var(--color-primary)] transition-all">
                        <input type="checkbox" id="imp-chk-${n}" checked class="w-4 h-4 rounded accent-[var(--color-primary)]">
                        <div class="w-5 h-5 rounded-full border border-slate-200 dark:border-slate-600 shrink-0" style="background-color:${c(o.hex||"transparent")}"></div>
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">${c(o.varName)}</p>
                            <p class="text-[10px] text-slate-400 truncate">dari: ${c(o.prodName)}</p>
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
        </div>`)};window.confirmImportFromProducts=async()=>{const e=window._pendingImportVariants||[];window._pendingImportVariants=null;const a=(document.getElementById("impprod-catalog")?.value||"").trim();i.colors||(i.colors=[]);const t=new Set(i.colors.map(s=>s.name.toLowerCase()));let r=0;if(e.forEach((s,o)=>{const n=document.getElementById(`imp-chk-${o}`);n&&n.checked&&!t.has(s.varName.toLowerCase())&&(i.colors.push({id:Date.now()+r,name:s.varName,hex:s.hex||"",catalog:a}),t.add(s.varName.toLowerCase()),r++)}),_closeColorFloatModal(),!r){g("Tidak ada warna baru yang ditambahkan!");return}j("Menyimpan...");try{await q(["colors"]),g(`${r} warna berhasil diimpor ke Database Warna! 🎨`),window.cTab==="colors"&&window.rAdmItms?.("colors")}catch{g("Gagal menyimpan!")}finally{T()}};const hi=e=>window.pushModalHistory?.(e),as=(e,a,t)=>window.requestCloseModal?.(e,a,t);window.openRestockModal=e=>{const a=i.products.find(o=>o&&o.id!=null&&String(o.id)===String(e));if(!a)return;const t=a.variants&&a.variants.length>0;let r="";t?r=a.variants.map((o,n)=>`
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-3 min-w-0 flex-1">
                    ${o.colorCode?`<span class="w-5 h-5 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${c(o.colorCode)}"></span>`:""}
                    <div class="min-w-0 flex-1">
                        <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${c(o.name)}</p>
                        <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(o.stock)||0}</span></p>
                    </div>
                </div>
                <input type="number" id="restock-var-${n}" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`).join(""):r=`
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div class="min-w-0 flex-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${c(a.name)}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(a.stock)||0}</span></p>
                </div>
                <input type="number" id="restock-main" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`;let s=document.getElementById("restock-modal");s||(s=document.createElement("div"),s.id="restock-modal",s.className="fixed inset-0 z-[110] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=o=>{o.target===s&&closeRestockModal()},document.body.appendChild(s)),s.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-boxes-stacked text-[var(--color-primary)]"></i> Restock Produk</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${c(a.name)}</p>
                </div>
                <button onclick="closeRestockModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="hide-scrollbar p-5 sm:p-6 overflow-y-auto flex-1 space-y-3">
                <p class="text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.3)] p-3 rounded-xl"><i class="fa-solid fa-circle-info text-[var(--color-primary)] mr-1.5"></i> Masukkan jumlah <b>penambahan</b> stok. Stok lama + nilai ini = stok baru.</p>
                ${r}
            </div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processRestock(${e})" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"><i class="fa-solid fa-save"></i> Simpan Restock</button>
            </div>
        </div>`,s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),hi("restock")};window.closeRestockModal=(e=!1)=>{as("restock",e,()=>{const a=document.getElementById("restock-modal");!a||a.style.display==="none"||(a.style.opacity="0",a.style.transition="opacity 0.25s ease",setTimeout(()=>{a.style.display="none",a.style.opacity="",a.style.transition=""},250))})};window.processRestock=async e=>{if(Ke)return;U(!0);const a=i.products.findIndex(n=>n&&n.id!=null&&String(n.id)===String(e));if(a<0){U(!1);return}const t=i.products[a],r=t.variants&&t.variants.length>0;let s=JSON.parse(JSON.stringify(t)),o=0;if(r)s.variants=s.variants.map((l,d)=>{const p=parseFloat(document.getElementById("restock-var-"+d)?.value)||0;return p>0&&(l.stock=(parseFloat(l.stock)||0)+p,o+=p,l.stock>0&&(l.isActive===!1||l.isActive==="false")&&(l.isActive=!0)),l}),s.variants.some(l=>(parseFloat(l.stock)||0)>0&&l.isActive!==!1&&l.isActive!=="false")&&(s.isActive===!1||s.isActive==="false")&&(s.isActive="true");else{const n=parseFloat(document.getElementById("restock-main")?.value)||0;n>0&&(s.stock=(parseFloat(s.stock)||0)+n,o+=n,s.stock>0&&(s.isActive===!1||s.isActive==="false")&&(s.isActive="true"))}if(o<=0)return U(!1),g("Masukkan jumlah restock terlebih dahulu!");j("Menyimpan Restock...");try{const n=typeof S<"u"&&S?S:window.db,l=typeof q=="function"?q:window.saveApp||(async()=>{});if(!n)throw new Error("Database Firebase belum terhubung");const d=n.collection("freshmart").doc("cms_data").collection("products").doc(e.toString());let p=0;await n.runTransaction(async m=>{const u=await m.get(d);if(!u.exists)throw new Error("Produk tidak ditemukan di server");const x=JSON.parse(JSON.stringify(u.data()));if(r)t.variants.forEach((b,v)=>{const y=parseFloat(document.getElementById("restock-var-"+v)?.value)||0;if(y<=0)return;const $=(x.variants||[]).findIndex(I=>I.name===b.name);$>-1&&(x.variants[$].stock=(parseFloat(x.variants[$].stock)||0)+y,x.variants[$].stock>0&&(x.variants[$].isActive===!1||x.variants[$].isActive==="false")&&(x.variants[$].isActive=!0))}),x.variants.some(b=>(parseFloat(b.stock)||0)>0&&b.isActive!==!1&&b.isActive!=="false")&&(x.isActive===!1||x.isActive==="false")&&(x.isActive="true"),p=x.variants.reduce((b,v)=>b+(parseFloat(v.stock)||0),0);else{const h=parseFloat(document.getElementById("restock-main")?.value)||0;x.stock=(parseFloat(x.stock)||0)+h,x.stock>0&&(x.isActive===!1||x.isActive==="false")&&(x.isActive="true"),p=x.stock}m.set(d,x),Object.assign(s,x)}),i.products[a]=s,await l([],{updateType:"stock_change",updatedProductIds:[e.toString()]}),closeRestockModal(),window.rAdmItms?.("products"),N("stat-products",i.products.filter(m=>m.isActive!=="false"&&m.isActive!==!1).length),g(`✅ Restock +${o} berhasil! Total stok: ${p}`)}catch(n){g("Gagal restock: "+(n.message||""))}finally{U(!1),T()}};window.toggleProductStatus=async(e,a)=>{if(Ke)return;U(!0);const t=i.products.findIndex(r=>r.id!=null&&r.id.toString()===e.toString());if(t>-1){i.products[t].isActive=a?"true":"false",j(a?"Mengaktifkan...":"Menonaktifkan...");try{const r=typeof S<"u"&&S?S:window.db,s=typeof q=="function"?q:window.saveApp||(async()=>{});if(!r)throw new Error("Database Firebase belum terhubung");await r.collection("freshmart").doc("cms_data").collection("products").doc(e.toString()).update({isActive:a?"true":"false"}),await s([],{updateType:"stock_change",updatedProductIds:[e.toString()]}),N("stat-products",i.products.filter(o=>o.isActive!=="false"&&o.isActive!==!1).length),window.rAdmItms?.("products"),g(a?"Produk Aktif!":"Stok Dikosongkan!")}catch(r){g("Gagal update status: "+(r.message||""))}finally{U(!1),T()}}else U(!1)};window.closeAdminModal=(e=!1)=>{as("admin",e,()=>{f("admin-modal").classList.add("opacity-0"),f("admin-modal-box").classList.add("scale-95"),setTimeout(()=>L("admin-modal"),300)})};const ki=e=>window.pushModalHistory?.(e),wi=(e,a,t)=>window.requestCloseModal?.(e,a,t);let Y;window.openCameraScanner=async(e="search-input")=>{const a=f("scanner-modal");a&&a.classList.contains("hidden")&&ki("scanner"),B("scanner-modal"),setTimeout(()=>{f("scanner-modal").classList.remove("opacity-0")},10);try{await It("https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js",()=>typeof Html5Qrcode<"u")}catch{g("Gagal memuat modul kamera. Cek koneksi internet Anda."),closeCameraScanner();return}Y||(Y=new Html5Qrcode("reader"));const t={fps:10,qrbox:{width:250,height:250}};setTimeout(()=>{Y&&Y.start({facingMode:"environment"},t,r=>{let s=f(e);s&&(s.value=r,e==="search-input"?window.handleSearch?.(r):(s.dispatchEvent(new Event("input",{bubbles:!0})),s.dispatchEvent(new Event("change",{bubbles:!0})))),g("Barcode discan!"),closeCameraScanner()},r=>{}).catch(r=>{g("Akses kamera ditolak/gagal!"),closeCameraScanner()})},100)};window.closeCameraScanner=(e=!1)=>{wi("scanner",e,()=>{if(f("scanner-modal").classList.add("opacity-0"),Y)try{Y.getState()===2||Y.getState()===3?Y.stop().then(()=>{Y.clear(),Y=null}).catch(a=>{Y.clear(),Y=null}):(Y.clear(),Y=null)}catch{Y=null}setTimeout(()=>L("scanner-modal"),300)})};const vi=e=>window.pushModalHistory?.(e),yi=(e,a,t)=>window.requestCloseModal?.(e,a,t);let ma=[];window.openQuickPriceModal=e=>{const a=i.products.find(o=>o&&o.id!=null&&String(o.id)===String(e));if(!a)return;const t=a.variants&&a.variants.length>0;ma=!t&&a.wholesale?JSON.parse(JSON.stringify(a.wholesale)):[];let r="";t?r=a.variants.map((o,n)=>`
            <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
                <div class="flex items-center gap-2.5 min-w-0">
                    ${o.colorCode?`<span class="w-4 h-4 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${c(o.colorCode)}"></span>`:""}
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${c(o.name)}</p>
                </div>
                <div class="grid grid-cols-4 gap-2.5">
                    <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP</label><input type="number" id="qp-var-hpp-${n}" value="${o.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Jual</label><input type="number" id="qp-var-price-${n}" value="${o.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Coret</label><input type="number" id="qp-var-normal-${n}" value="${o.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-var-poin-${n}" value="${o.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                </div>
            </div>`).join(""):r=`
            <div class="grid grid-cols-4 gap-2.5">
                <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP / Modal</label><input type="number" id="qp-hpp" value="${a.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Harga Jual</label><input type="number" id="qp-price" value="${a.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Harga Coret</label><input type="number" id="qp-normal" value="${a.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-poin" value="${a.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
            </div>
            <div class="pt-2">
                <div class="flex justify-between items-center mb-2.5">
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Harga Grosir</label>
                    <button type="button" onclick="qpAddWhol()" class="text-[10px] font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] flex items-center gap-1"><i class="fa-solid fa-plus"></i> Tambah</button>
                </div>
                <div id="qp-whol-container" class="space-y-2"></div>
            </div>`;let s=document.getElementById("quickprice-modal");s||(s=document.createElement("div"),s.id="quickprice-modal",s.className="fixed inset-0 z-[110] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=o=>{o.target===s&&closeQuickPriceModal()},document.body.appendChild(s)),s.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-tags text-[var(--color-primary)]"></i> Edit Cepat Harga</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${c(a.name)}</p>
                </div>
                <button onclick="closeQuickPriceModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="hide-scrollbar p-5 sm:p-6 overflow-y-auto flex-1 space-y-3" id="qp-body">${r}</div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processQuickPrice(${e})" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"><i class="fa-solid fa-save"></i> Simpan Harga</button>
            </div>
        </div>`,t||rQpWhol(),s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),vi("quickprice")};window.rQpWhol=()=>{A("qp-whol-container",ma.length?ma.map((e,a)=>`
        <div class="flex items-center gap-2">
            <input type="number" min="1" placeholder="Min. Qty" value="${e.minQty||""}" onchange="qpWhol[${a}].minQty=parseFloat(this.value)||0" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <input type="number" min="0" placeholder="Harga/Unit" value="${e.price||""}" onchange="qpWhol[${a}].price=parseFloat(this.value)||0" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <button type="button" onclick="qpWhol.splice(${a},1); rQpWhol();" class="w-9 h-9 shrink-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all"><i class="fa-solid fa-trash text-xs"></i></button>
        </div>`).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-2">Belum ada tingkat harga grosir.</p>')};window.qpAddWhol=()=>{ma.push({minQty:0,price:0}),rQpWhol()};window.closeQuickPriceModal=(e=!1)=>{yi("quickprice",e,()=>{const a=document.getElementById("quickprice-modal");!a||a.style.display==="none"||(a.style.opacity="0",a.style.transition="opacity 0.25s ease",setTimeout(()=>{a.style.display="none",a.style.opacity="",a.style.transition=""},250))})};window.processQuickPrice=async e=>{if(Ke)return;U(!0);const a=i.products.findIndex(s=>s&&s.id!=null&&String(s.id)===String(e));if(a<0){U(!1);return}const t=i.products[a],r=t.variants&&t.variants.length>0;j("Menyimpan Harga...");try{const s=typeof S<"u"&&S?S:window.db,o=typeof q=="function"?q:window.saveApp||(async()=>{});if(!s)throw new Error("Database Firebase belum terhubung");const n=s.collection("freshmart").doc("cms_data").collection("products").doc(e.toString());let l=null;await s.runTransaction(async d=>{const p=await d.get(n);if(!p.exists)throw new Error("Produk tidak ditemukan di server");const m=JSON.parse(JSON.stringify(p.data()));r?t.variants.forEach((u,x)=>{const h=(m.variants||[]).findIndex(b=>b.name===u.name);h<0||(m.variants[h].hpp=parseFloat(document.getElementById("qp-var-hpp-"+x)?.value)||0,m.variants[h].price=parseFloat(document.getElementById("qp-var-price-"+x)?.value)||0,m.variants[h].priceNormal=parseFloat(document.getElementById("qp-var-normal-"+x)?.value)||0,m.variants[h].poin=parseFloat(document.getElementById("qp-var-poin-"+x)?.value)||0)}):(m.hpp=parseFloat(document.getElementById("qp-hpp")?.value)||0,m.price=parseFloat(document.getElementById("qp-price")?.value)||0,m.priceNormal=parseFloat(document.getElementById("qp-normal")?.value)||0,m.poin=parseFloat(document.getElementById("qp-poin")?.value)||0,m.wholesale=ma.filter(u=>parseFloat(u.minQty)>.01&&u.price>0)),d.set(n,m),l=m}),i.products[a]=l,await o([],{updateType:"stock_change",updatedProductIds:[e.toString()]}),closeQuickPriceModal(),window.rAdmItms?.("products"),g("✅ Harga berhasil diperbarui!")}catch(s){g("Gagal simpan harga: "+(s.message||""))}finally{U(!1),T()}};window.rWholB=()=>{let e=`<div class="space-y-4 mb-4">${Re.map((t,r)=>`
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative group transition-all duration-300 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40">
            <button onclick="rmWhol(${r})" class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md z-10 cursor-pointer"><i class="fa-solid fa-trash text-xs"></i></button>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Minimal Pembelian (Qty)</label>
                    <input autocomplete='off' type="number" step="0.01" placeholder="Cth: 12" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${t.minQty}" onchange="uWhol(${r},'minQty',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Satuan Spesial (Rp)</label>
                    <input autocomplete='off' type="number" placeholder="Cth: 15000" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${t.price}" onchange="uWhol(${r},'price',this.value)">
                </div>
            </div>
        </div>`).join("")}</div>
        <button onclick="addWhol()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-tags text-base"></i> Tambah Tingkatan Grosir</button>`;const a=document.getElementById("wholesale-builder-container");a&&(a.innerHTML=e)};window.addWhol=()=>{Re.push({minQty:2,price:0}),ct(Re),window.rWholB()};window.rmWhol=e=>{Re.splice(e,1),ct(Re),window.rWholB()};window.uWhol=(e,a,t)=>{Re[e][a]=parseFloat(t)||0};let dt="products";const Ca=e=>{dt=e,window.cTab=e};let ts="";const Si=e=>{ts=e,window.aSq=e};let fe=null;const ss=e=>{fe=e,window.eId=e};let Ke=!1;const U=e=>{Ke=e};let ie=[];const Ia=e=>{ie=e};let Re=[];const ct=e=>{Re=e};let he=[];const pt=e=>{he=e};window.setCTab=Ca;window.setASq=Si;window.setEId=ss;const Pi=(e,a=!1)=>{const t=document.querySelector("#view-admin .scroll-content");if(t&&(t.scrollTop=0),Ct(e),Ss(""),!a){const s=history.state;s&&s.view==="view-admin"&&s.tab?history.replaceState({view:"view-admin",tab:e},"",window.location.href):history.pushState({view:"view-admin",tab:e},"",window.location.href)}if(L("admin-dashboard-view"),B("admin-content-view"),B("btn-admin-back"),L("admin-logo-box"),N("admin-header-title",{orders:"Pesanan",settings:"Toko",products:"Produk",categories:"Kategori",brands:"Merek",banks:"Rekening",banners:"Banner",vouchers:"Voucher",customers:"Database Pelanggan",rewards:"Program Hadiah",reviews:"Ulasan Pelanggan",faqs:"Tanya Jawab / Q&A",tax:"Pajak & Keuangan",piutang:"Piutang Tempo",colors:"Database Warna",changelog:"Log Pembaruan Sistem"}[e]||"CMS"),e!=="orders"&&De&&(De(),na(null)),e!=="customers"&&je&&(je(),ta(null)),e!=="reviews"&&Le&&(Le(),sa(null)),e==="settings")typeof window.rAdmSet=="function"&&window.rAdmSet();else if(e==="orders")typeof window.rAdmOrd=="function"&&window.rAdmOrd();else if(e==="tax")typeof window.rTaxPanel=="function"&&window.rTaxPanel();else if(e==="piutang")typeof window.rAdmPiutang=="function"&&window.rAdmPiutang();else if(e==="customers"){A("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),je&&(je(),ta(null));const s=S.collection("freshmart").doc("cms_data").collection("customers").onSnapshot(o=>{i.customers=o.docs.map(n=>n.data()),typeof window.rAdmL=="function"&&window.rAdmL("customers")},()=>{g("Gagal memuat data pelanggan!"),typeof window.rAdmL=="function"&&window.rAdmL("customers")});ta(s)}else if(e==="reviews"){A("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),Le&&(Le(),sa(null));const s=S.collection("freshmart").doc("cms_data").collection("reviews").onSnapshot(o=>{const n=o.docs.map(l=>l.data());n.sort((l,d)=>{const p=l.createdAt&&l.createdAt.toMillis?l.createdAt.toMillis():0;return(d.createdAt&&d.createdAt.toMillis?d.createdAt.toMillis():0)-p}),ys(n),typeof window.rAdmReviews=="function"&&window.rAdmReviews()},()=>{g("Gagal memuat ulasan!")});sa(s)}else e==="faqs"?typeof window.rAdmFAQ=="function"&&window.rAdmFAQ():e==="changelog"?typeof window.rAdmChangelog=="function"&&window.rAdmChangelog():e==="rewards"?(typeof window.attachRewardsRealtime=="function"&&window.attachRewardsRealtime(),typeof window.rAdmL=="function"&&window.rAdmL("rewards")):typeof window.rAdmL=="function"&&window.rAdmL(e)};window.openAdminTab=Pi;let oa="all";const $i=e=>{if(!e)return"";try{const a=e.split("-");return a.length===3?new Date(parseInt(a[0]),parseInt(a[1])-1,parseInt(a[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e}catch{return e}},Ai=e=>{switch(e){case"feature":return{label:"Fitur Baru",icon:"fa-rocket",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"optimization":return{label:"Optimasi",icon:"fa-bolt-lightning",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"maintenance":return{label:"Maintenance",icon:"fa-wrench",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"bugfix":return{label:"Perbaikan",icon:"fa-bug-slash",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};default:return{label:"Update",icon:"fa-tag",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"}}},Ti=()=>{const e=f("changelog-items-container");if(!e)return;const a=fa(i),t=oa==="all"?a:a.filter(s=>s.category===oa);if(t.length===0){e.innerHTML=`
        <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3">
                <i class="fa-solid fa-clipboard-list opacity-60"></i>
            </div>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan pada kategori ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Pilih filter kategori lain di atas</p>
        </div>`;return}let r="";t.forEach((s,o)=>{const n=o===0&&oa==="all",l=Ai(s.category),d=$i(s.date),p=(s.items||[]).map(m=>`
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
        </div>`}),e.innerHTML=r},rs=e=>{oa=e,document.querySelectorAll(".btn-changelog-filter").forEach(a=>{const t=a.getAttribute("data-category"),r=a.querySelector("i");t===e?(a.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent",r&&(r.className=r.className.replace(/text-\[[^\]]+\]/g,"").trim()+" text-white")):(a.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer",r&&t!=="all"?r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-[var(--color-primary)]":r&&t==="all"&&(r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-slate-400"))}),Ti()},Mi=(e="all")=>{let a=f("changelog-modal");a||(a=document.createElement("div"),a.id="changelog-modal",a.className="fixed inset-0 z-[125] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",a.onclick=s=>{s.target===a&&is()},a.innerHTML=`
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
        </div>`,document.body.appendChild(a));const t=nt(i),r=f("changelog-header-ver");r&&(r.textContent=t),oa=e,rs(e),a.style.display!=="flex"&&ua("changelog"),a.style.display="flex",a.offsetWidth,requestAnimationFrame(()=>{a.classList.remove("opacity-0");const s=f("changelog-modal-box");s&&s.classList.remove("translate-y-full","sm:translate-y-8")})},is=(e=!1)=>{const a=f("changelog-modal");if(!a||a.style.display==="none")return;const t=()=>{a.classList.add("opacity-0");const r=f("changelog-modal-box");r&&r.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{a.style.display="none"},300)};typeof Ne=="function"?Ne("changelog",e,t):t()};window.openChangelogModal=Mi;window.closeChangelogModal=is;window.filterChangelog=rs;let Qe=!1,Ge=null;const mt=()=>{const e=new Date,a=e.getFullYear(),t=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${a}-${t}-${r}`},Ci=e=>{if(!e)return"";try{const a=e.split("-");return a.length===3?new Date(parseInt(a[0]),parseInt(a[1])-1,parseInt(a[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e}catch{return e}},Ve=()=>{const e=f("admin-content");if(!e)return;const a=i.changelog||[],t=fa(i),r=nt(i),s=(i.deletedChangelogIds||[]).length;let o="";t.length===0?o=`
        <div class="text-center py-12 text-slate-400">
            <i class="fa-solid fa-clipboard-list text-3xl mb-2 opacity-50"></i>
            <p class="text-xs font-bold">Belum ada catatan pembaruan</p>
        </div>`:o=t.map(n=>{const l=a.some(x=>x.id===n.id),d=n.version===r,p=(n.items||[]).map(x=>`
                <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                    <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[10px] mt-1 shrink-0"></i>
                    <span>${c(x)}</span>
                </li>
            `).join("");let m="Update",u="fa-tag";return n.category==="feature"?(m="Fitur Baru",u="fa-rocket"):n.category==="optimization"?(m="Optimasi",u="fa-bolt-lightning"):n.category==="maintenance"?(m="Maintenance",u="fa-wrench"):n.category==="bugfix"&&(m="Perbaikan",u="fa-bug-slash"),`
            <div class="p-4 sm:p-5 rounded-2xl border ${d?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.02)] dark:bg-[rgba(var(--color-primary-rgb),0.05)] shadow-sm":"border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"} space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="px-2.5 py-1 rounded-lg text-xs font-black tracking-wider uppercase ${d?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-800 text-white dark:bg-slate-700"}">
                            ${c(n.version)}
                        </span>
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-slate-200/80 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid ${u} text-[9px] text-[var(--color-primary)]"></i> ${c(m)}
                        </span>
                        ${d?'<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[9px] font-extrabold uppercase"><span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span> Versi Aktif</span>':""}
                        ${l?'<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] text-[9px] font-bold">Kustom Toko</span>':'<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 text-[9px] font-bold">Sistem Bawaan</span>'}
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500">
                            <i class="fa-regular fa-calendar mr-1"></i> ${c(Ci(n.date))}
                        </span>
                        ${l?`
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
        <div id="changelog-form-box" class="${Qe?"block":"hidden"} p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-[var(--color-primary)]/40 shadow-lg space-y-4">
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
                    <input id="form-log-date" type="date" value="${mt()}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none" />
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
                    Riwayat Rilis &amp; Log Perubahan (${t.length} Versi)
                </h4>
                <div class="flex items-center gap-2">
                    ${s>0?`
                    <button onclick="window.restoreDefaultChangelogs()" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
                        <i class="fa-solid fa-rotate-left text-slate-400"></i> Pulihkan Log (${s})
                    </button>`:""}
                    ${t.length>5?`
                    <button onclick="window.pruneOldChangelogs()" class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/60 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer" title="Bersihkan riwayat log terlama agar tidak menumpuk">
                        <i class="fa-solid fa-broom"></i> Pangkas Log Lama
                    </button>`:""}
                </div>
            </div>
            <div class="space-y-3">
                ${o}
            </div>
        </div>
    </div>`},Ii=(e=null)=>{Qe=e!==null?e:!Qe,Qe||(Ge=null),Ve()},ji=e=>{const a=(i.changelog||[]).find(s=>s.id===e);if(!a)return;Ge=e,Qe=!0,Ve(),de("form-log-version",a.version||""),de("form-log-category",a.category||"feature"),de("form-log-date",a.date||mt()),de("form-log-title",a.title||""),de("form-log-items",(a.items||[]).join(`
`));const t=f("changelog-form-title");t&&(t.innerHTML=`<i class="fa-solid fa-pen text-[var(--color-primary)]"></i> Edit Catatan Pembaruan (${c(a.version)})`);const r=f("changelog-form-box");r&&r.scrollIntoView({behavior:"smooth"})},Li=async()=>{const e=(P("form-log-version")||"").trim(),a=P("form-log-category")||"feature",t=P("form-log-date")||mt(),r=(P("form-log-title")||"").trim(),s=(P("form-log-items")||"").trim();if(!e)return g("Nomor versi harus diisi (contoh: v1.2.1)!");if(!r)return g("Judul pembaruan harus diisi!");if(!s)return g("Tuliskan minimal 1 poin rincian perubahan!");const o=s.split(`
`).map(l=>l.replace(/^[-*•]\s*/,"").trim()).filter(l=>l.length>0);if(o.length===0)return g("Rincian perubahan tidak boleh kosong!");j("Menyimpan catatan pembaruan...");const n={id:Ge||"log-"+Date.now().toString(36),version:e.startsWith("v")?e:"v"+e,category:a,date:t,title:r,items:o,updatedAt:new Date().toISOString()};if(i.changelog=i.changelog||[],Ge){const l=i.changelog.findIndex(d=>d.id===Ge);l!==-1?i.changelog[l]=n:i.changelog.unshift(n)}else i.changelog.unshift(n);i.deletedChangelogIds&&Array.isArray(i.deletedChangelogIds)&&(i.deletedChangelogIds=i.deletedChangelogIds.filter(l=>l!==n.id&&l!==n.version));try{await q(["changelog","deletedChangelogIds"]),g("Catatan pembaruan berhasil dipublikasikan secara real-time!","success"),Qe=!1,Ge=null,Ve()}catch(l){g("Gagal menyimpan log pembaruan: "+l.message,"error")}finally{T()}},Bi=e=>{const t=fa(i).find(s=>s.id===e||s.version===e);if(!t)return;const r=t.version||t.title||"ini";$e("Hapus Catatan Log Toko",`Apakah Anda yakin ingin menghapus catatan pembaruan versi "${r}"? Catatan ini tidak akan ditampilkan lagi di etalase toko maupun panel admin.`,async()=>{j("Menghapus catatan...");try{i.changelog=(i.changelog||[]).filter(o=>o.id!==e&&o.version!==e),i.deletedChangelogIds=Array.isArray(i.deletedChangelogIds)?i.deletedChangelogIds:[];const s=t.id||e;i.deletedChangelogIds.includes(s)||i.deletedChangelogIds.push(s),t.version&&!i.deletedChangelogIds.includes(t.version)&&i.deletedChangelogIds.push(t.version),await q(["changelog","deletedChangelogIds"]),g(`Catatan pembaruan ${r} berhasil dihapus!`,"success"),Ve()}catch(s){g("Gagal menghapus catatan: "+s.message,"error")}finally{T()}},"Konfirmasi Hapus Log")},Di=()=>{const e=fa(i);if(e.length<=5)return g(`Daftar log masih ringkas (${e.length} versi), belum perlu pembersihan.`,"info");const a=e.slice(5),t=a.length;$e("Pangkas Log Terlama",`Apakah Anda yakin ingin memangkas ${t} catatan log pembaruan terlama dan hanya menyisakan 5 versi terbaru? Tindakan ini merapikan daftar log toko agar tidak menumpuk spam.`,async()=>{j("Memangkas catatan lama...");try{const r=new Set;a.forEach(s=>{s.id&&r.add(s.id),s.version&&r.add(s.version)}),i.changelog=(i.changelog||[]).filter(s=>!r.has(s.id)&&!r.has(s.version)),i.deletedChangelogIds=Array.isArray(i.deletedChangelogIds)?i.deletedChangelogIds:[],r.forEach(s=>{i.deletedChangelogIds.includes(s)||i.deletedChangelogIds.push(s)}),await q(["changelog","deletedChangelogIds"]),g(`Berhasil membersihkan ${t} log lama! Tersisa 5 versi terbaru.`,"success"),Ve()}catch(r){g("Gagal memangkas log: "+r.message,"error")}finally{T()}},"Pangkas Log Lama")},Ei=()=>{if((i.deletedChangelogIds||[]).length===0)return g("Tidak ada log bawaan yang terhapus.","info");$e("Pulihkan Log Bawaan","Apakah Anda yakin ingin memulihkan kembali seluruh catatan log rilis sistem bawaan toko yang pernah dihapus?",async()=>{j("Memulihkan catatan log...");try{i.deletedChangelogIds=[],await q(["deletedChangelogIds"]),g("Seluruh log pembaruan bawaan berhasil dipulihkan!","success"),Ve()}catch(a){g("Gagal memulihkan catatan: "+a.message,"error")}finally{T()}},"Ya, Pulihkan Semua")};window.rAdmChangelog=Ve;window.toggleChangelogForm=Ii;window.editChangelogEntry=ji;window.saveChangelogEntry=Li;window.deleteChangelogEntry=Bi;window.pruneOldChangelogs=Di;window.restoreDefaultChangelogs=Ei;export{Cs as A,la as B,Ki as C,Xt as D,Z as a,ve as b,Oa as c,S as d,Je as e,Ye as f,nt as g,Is as h,Oi as i,mi as j,jr as k,Fi as l,ui as m,bi as n,gi as o,ua as p,te as q,Ne as r,Es as s,Hi as t,We as u,Ft as v,Ht as w,Aa as x,$a as y,Lt as z};
