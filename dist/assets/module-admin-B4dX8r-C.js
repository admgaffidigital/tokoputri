const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js"])))=>i.map(i=>d[i]);
import{e as x,o as Re,a as n,c as O,s as ar,b as ie,d as Q,f as w,g as V,h as K,i as j,j as u,w as Ce,k as h,l as Ze,m as Le,n as me,p as cs,q as y,r as Z,t as ps,u as Te,v as xr,x as rr,y as us,z as li,A as at,B as ms,C as di,D as et,E as qe,F as st,G as Kt,H as Ne,I as Vt,J as qr,K as gs,L as kr,M as bs,N as fs,O as ci,P as pi,Q as M,R,S as L,T as ut,U as ra,V as lt,W as Wt,X as dt,Y as zt,Z as ui,_ as mi,$ as hs,a0 as de,a1 as xs,a2 as gi,a3 as bi,a4 as ja,a5 as mt,a6 as fi,a7 as Wr,a8 as z,a9 as ks,aa as hi,ab as wr,ac as xi,ad as ki,ae as wi,af as vi,ag as vr,ah as it,ai as je,aj as yi,ak as Si}from"./module-print-DvZTTFpS.js";import{f as ye}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const Pi="modulepreload",Ai=function(t){return"/"+t},zr={},Ti=function(e,a,r){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");s=Promise.allSettled(a.map(d=>{if(d=Ai(d),d in zr)return;zr[d]=!0;const c=d.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":Pi,c||(m.as="script"),m.crossOrigin="",m.href=d,l&&m.setAttribute("nonce",l),document.head.appendChild(m),c)return new Promise((b,f)=>{m.addEventListener("load",b),m.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},$i={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const ws=window.FIREBASE_CONFIG||$i;ye.apps.length||ye.initializeApp(ws);const P=ye.firestore(),$e=ye.auth();typeof window<"u"&&(window.firebase=ye,window.db=P,window.auth=$e);try{P.settings({ignoreUndefinedProperties:!0,experimentalForceLongPolling:!0,merge:!0})}catch{}let Ci=null;const bl=()=>{Ti(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{Ci=ye.analytics()}catch{}}).catch(()=>{})},Mi="K2ijSERTT2dg27yYGTEgn6XHSnW2",Lt={emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#dc2626",600:"#b91c1c",700:"#991b1b",800:"#7f1d1d",900:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#ea580c",600:"#c2410c",700:"#9a3412",800:"#7c2d12",900:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#d97706",600:"#b45309",700:"#92400e",800:"#78350f",900:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#eab308",500:"#d97706",600:"#b45309",700:"#854d0e",800:"#713f12",900:"#3f1d0b"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#65a30d",600:"#4d7c0f",700:"#3f6212",800:"#365314",900:"#1a2e05"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#16a34a",600:"#15803d",700:"#166534",800:"#14532d",900:"#052e16"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#475569",600:"#334155",700:"#1e293b",800:"#0f172a",900:"#020617"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#57534e",600:"#44403c",700:"#292524",800:"#1c1917",900:"#0c0a09"}},Ii=t=>{let e=parseInt(t.replace("#",""),16);return(e>>16&255)+","+(e>>8&255)+","+(e&255)},Qr=(t,e)=>{let a=parseInt(t.slice(1,3),16),r=parseInt(t.slice(3,5),16),s=parseInt(t.slice(5,7),16);return a=Math.max(0,Math.min(255,a+e)),r=Math.max(0,Math.min(255,r+e)),s=Math.max(0,Math.min(255,s+e)),"#"+[a,r,s].map(i=>i.toString(16).padStart(2,"0")).join("")},Di=t=>{if(!t)return;try{document.querySelectorAll('meta[name="theme-color"]').forEach(d=>d.remove())}catch{}const e=document.createElement("meta");e.setAttribute("name","theme-color"),e.setAttribute("content",t),document.head.appendChild(e);try{document.querySelectorAll('meta[name="msapplication-navbutton-color"], meta[name="msapplication-TileColor"]').forEach(d=>d.remove())}catch{}const a=document.createElement("meta");a.setAttribute("name","msapplication-navbutton-color"),a.setAttribute("content",t),document.head.appendChild(a);const r=document.createElement("meta");r.setAttribute("name","msapplication-TileColor"),r.setAttribute("content",t),document.head.appendChild(r);let s=document.querySelector('meta[name="apple-mobile-web-app-capable"]');s||(s=document.createElement("meta"),s.setAttribute("name","apple-mobile-web-app-capable"),document.head.appendChild(s)),s.setAttribute("content","yes");let i=document.querySelector('meta[name="mobile-web-app-capable"]');i||(i=document.createElement("meta"),i.setAttribute("name","mobile-web-app-capable"),document.head.appendChild(i)),i.setAttribute("content","yes");let o=document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');o||(o=document.createElement("meta"),o.setAttribute("name","apple-mobile-web-app-status-bar-style"),document.head.appendChild(o)),o.setAttribute("content","default"),typeof window.updatePwaManifest=="function"&&window.updatePwaManifest(t)},Nt=(t,e)=>{const a=t||localStorage.getItem("freshmart_ui_theme")||"emerald",r=Lt[a]||Lt.emerald;t&&localStorage.setItem("freshmart_ui_theme",a);const s=e||localStorage.getItem("freshmart_theme_color")||r[500];e&&localStorage.setItem("freshmart_theme_color",s);const i=Ii(s),o=Qr(s,-30),l=Qr(s,150);return document.documentElement.style.setProperty("--color-primary",s),document.documentElement.style.setProperty("--color-primary-dark",o),document.documentElement.style.setProperty("--color-primary-light",l),document.documentElement.style.setProperty("--color-primary-rgb",i),Di(s),r},fl=()=>{const t=localStorage.getItem("freshmart_theme"),e=window.matchMedia("(prefers-color-scheme: dark)").matches;(t==="dark"||!t&&e)&&document.documentElement.classList.add("dark")},hl=()=>{const t=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",t?"dark":"light");const e=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");e&&(e.className=t?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")},xl=()=>{const t=document.documentElement.classList.contains("dark"),e=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");e&&(e.className=t?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")},Ot=(t="minimalist",e="")=>{let a=t||localStorage.getItem("freshmart_bg_style")||"minimalist";a==="dual_tone"&&(a="aurora_glow"),a==="geometric_3d"&&(a="tech_grid"),a==="diagonal_skew"&&(a="glass_studio");const r=e??(localStorage.getItem("freshmart_bg_custom_url")||"");t&&localStorage.setItem("freshmart_bg_style",a),e!=null&&localStorage.setItem("freshmart_bg_custom_url",r);const i=(c=>{if(!c||typeof c!="string")return"";const p=c.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);return p?`https://lh3.googleusercontent.com/d/${p[1]}`:c.trim()})(r);document.documentElement.setAttribute("data-bg-style",a),document.body?.setAttribute("data-bg-style",a);const o=document.getElementById("app-container");o&&(o.setAttribute("data-bg-style",a),i?o.setAttribute("data-has-custom-bg","true"):o.removeAttribute("data-has-custom-bg"));const l=document.getElementById("dynamic-bg-container");if(!l)return;if(l.innerHTML="",l.className="pointer-events-none fixed inset-0 z-0 overflow-hidden",i){const c=document.createElement("div");c.className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-35 dark:opacity-25 pointer-events-none transition-all duration-500",c.style.backgroundImage=`url('${i}')`,l.appendChild(c);const p=document.createElement("div");p.className="absolute inset-0 z-0 bg-slate-50/70 dark:bg-[#0b1120]/80 pointer-events-none",l.appendChild(p)}let d="";if(a==="hero_arch"?d=`
            <!-- Hero Arch: Canopy Dome Curve & Radial Ambient Aura -->
            <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[160%] max-w-[1700px] h-96 rounded-b-[100%] bg-gradient-to-b from-[rgba(var(--color-primary-rgb),0.22)] via-[rgba(var(--color-primary-rgb),0.08)] to-transparent pointer-events-none blur-sm"></div>
            <div class="absolute top-24 left-1/2 -translate-x-1/2 w-[120%] max-w-[1400px] h-60 rounded-b-[100%] border-b-2 border-[rgba(var(--color-primary-rgb),0.25)] pointer-events-none"></div>
            <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[rgba(var(--color-primary-rgb),0.18)] blur-3xl pointer-events-none"></div>
        `:a==="aurora_glow"?d=`
            <!-- Aurora Mesh Glow: Dynamic Atmospheric Ambient Orbs -->
            <div class="absolute -top-24 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[rgba(var(--color-primary-rgb),0.28)] via-[rgba(var(--color-primary-rgb),0.12)] to-transparent blur-[80px] pointer-events-none"></div>
            <div class="absolute -top-28 -right-20 w-[460px] h-[460px] rounded-full bg-gradient-to-bl from-[rgba(var(--color-primary-rgb),0.24)] via-[rgba(var(--color-primary-rgb),0.1)] to-transparent blur-[90px] pointer-events-none"></div>
            <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-72 bg-gradient-to-b from-[rgba(var(--color-primary-rgb),0.06)] to-transparent rounded-full blur-[100px] pointer-events-none"></div>
        `:a==="tech_grid"?d=`
            <!-- Tech Grid: Blueprint Dot-Matrix & Precision Architectural Accents -->
            <div class="absolute inset-0 pointer-events-none opacity-40 dark:opacity-30" style="background-image: radial-gradient(rgba(var(--color-primary-rgb), 0.22) 1.5px, transparent 1.5px); background-size: 24px 24px;"></div>
            <div class="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-[rgba(var(--color-primary-rgb),0.18)] via-[rgba(var(--color-primary-rgb),0.05)] to-transparent pointer-events-none"></div>
            <div class="absolute top-20 left-10 w-48 h-48 border border-[rgba(var(--color-primary-rgb),0.15)] rounded-2xl pointer-events-none -rotate-6"></div>
            <div class="absolute top-36 right-12 w-64 h-64 border border-[rgba(var(--color-primary-rgb),0.12)] rounded-3xl pointer-events-none rotate-12"></div>
        `:a==="glass_studio"?d=`
            <!-- Glass Studio: Frosted Depth & Diagonal Light Rays -->
            <div class="absolute -top-36 -right-16 w-[500px] h-[500px] bg-gradient-to-br from-[rgba(var(--color-primary-rgb),0.22)] to-transparent rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute inset-0 pointer-events-none opacity-20 dark:opacity-15" style="background: repeating-linear-gradient(135deg, rgba(var(--color-primary-rgb),0.15), rgba(var(--color-primary-rgb),0.15) 1.5px, transparent 1.5px, transparent 28px);"></div>
            <div class="absolute top-1/4 -left-20 w-80 h-80 bg-[rgba(var(--color-primary-rgb),0.14)] rounded-full blur-3xl pointer-events-none"></div>
        `:d=`
            <!-- Minimalis Clean Studio: Soft top ambient wash -->
            <div class="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[rgba(var(--color-primary-rgb),0.08)] to-transparent pointer-events-none"></div>
        `,d){const c=document.createElement("div");c.className="absolute inset-0 z-0 pointer-events-none",c.innerHTML=d,l.appendChild(c)}};let Jr={},we="view-catalog",Et=!1,Qt=null,sr=["view-catalog"];const da=t=>{history.pushState({modal:t},"",window.location.href),Re.push(t)},gt=(t,e,a)=>{if(!e){const r=Re.lastIndexOf(t);r>-1&&Re.splice(r,1),Et=!0,Qt&&clearTimeout(Qt),Qt=setTimeout(()=>{Et=!1},300);try{history.back()}catch{Et=!1}}a()},We=(t,e=!1)=>{if(!t||t===we)return;e||(history.pushState({view:t},"",window.location.href),t==="view-catalog"?sr=["view-catalog"]:sr.push(t));const a=x(we);if(a){const s=a.querySelector(".scroll-content");s&&(Jr[we]=s.scrollTop)}we==="view-orders"&&t!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime();const r=x(t);if(r&&(r.classList.remove("hidden"),r.classList.add("flex")),document.querySelectorAll(".view-section").forEach(s=>{s!==r&&(s.classList.add("hidden"),s.classList.remove("flex"))}),r){t==="view-cart"&&typeof window.renderCart=="function"?window.renderCart():t==="view-checkout"&&typeof window.rChck=="function"?window.rChck():t==="view-payment"&&typeof window.rPay=="function"?window.rPay():t==="view-wishlist"&&typeof window.renderWish=="function"?window.renderWish():t==="view-orders"&&typeof window.renderMyOrders=="function"?window.renderMyOrders():t==="view-faq"&&typeof window.renderStorefrontFAQ=="function"&&window.renderStorefrontFAQ();const s=r.querySelector(".scroll-content");if(s)if(e){const i=Jr[t]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{s.scrollTop=i}))}else s.scrollTo(0,0)}we=t,vs(t)},vs=(t=we)=>{const e=x("bottom-nav-bar");if(!e)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin"].includes(t)){e.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),e.classList.remove("translate-y-0","opacity-100");return}if(e.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),e.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(r=>r.classList.remove("active")),t==="view-catalog"){const r=x("bnav-home");r&&r.classList.add("active")}else if(t==="view-orders"){const r=x("bnav-orders");r&&r.classList.add("active")}else if(t==="view-wishlist"||t==="view-faq"){const r=x("bnav-menu");r&&r.classList.add("active")}},ji=t=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(t==="home"?"medium":"light"),t==="home")if(we==="view-catalog"){const e=document.querySelector("#view-catalog .scroll-content");e?e.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else We("view-catalog");else t==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():t==="cart"?We("view-cart"):t==="orders"?We("view-orders"):t==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},ys=()=>{const t=document.querySelector("#view-catalog .scroll-content"),e=x("pull-to-refresh-indicator"),a=x("ptr-icon"),r=x("ptr-text");if(!t||!e)return;let s=0,i=0,o=!1,l=!1;const d=65;t.addEventListener("touchstart",c=>{t.scrollTop<=5&&!l&&(s=c.touches[0].pageY,o=!0)},{passive:!0}),t.addEventListener("touchmove",c=>{if(!o||l)return;i=c.touches[0].pageY;const p=i-s;if(p>15&&t.scrollTop<=5){e.classList.add("visible");const m=Math.min(p/d,1.5);a&&(a.style.transform=`rotate(${m*240}deg)`),r&&(r.innerText=p>=d?"Lepaskan untuk segarkan":"Tarik ke bawah untuk refresh")}else e.classList.remove("visible")},{passive:!0}),t.addEventListener("touchend",async()=>{if(!o||l)return;if(o=!1,i-s>=d&&t.scrollTop<=5){l=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),a&&(a.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",a.style.transform=""),r&&(r.innerText="Menyinkronkan katalog...");try{typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),r&&(r.innerText="Katalog Terkini Disinkron!"),a&&(a.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch{r&&(r.innerText="Gagal sinkron data")}setTimeout(()=>{e.classList.remove("visible"),setTimeout(()=>{l=!1,a&&(a.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",a.style.transform=""),r&&(r.innerText="Tarik ke bawah untuk refresh")},300)},600)}else e.classList.remove("visible"),a&&(a.style.transform="")})},Ss=t=>{t==="product"&&typeof window.closeProductModal=="function"?window.closeProductModal(!0):t==="category"&&typeof window.closeCategoryModal=="function"?window.closeCategoryModal(!0):t==="brand"&&typeof window.closeBrandModal=="function"?window.closeBrandModal(!0):t==="admin"&&typeof window.closeAdminModal=="function"?window.closeAdminModal(!0):t==="adminOrder"&&typeof window.closeOrderDetailModal=="function"?window.closeOrderDetailModal(!0):t==="receipt"&&typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):t==="docPreview"&&typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):t==="scanner"&&typeof window.closeCameraScanner=="function"?window.closeCameraScanner(!0):t==="confirm"&&typeof window.closeConfirm=="function"?window.closeConfirm(!0):t==="customerOrder"&&typeof window.closeCustomerOrderDetailModal=="function"?window.closeCustomerOrderDetailModal(!0):t==="restock"&&typeof window.closeRestockModal=="function"?window.closeRestockModal(!0):t==="quickprice"&&typeof window.closeQuickPriceModal=="function"?window.closeQuickPriceModal(!0):t==="member"&&typeof window.closeMemberModal=="function"?window.closeMemberModal(!0):t==="prompt"&&typeof window.closePrompt=="function"?window.closePrompt(!0):t==="review"&&typeof window.closeReviewModal=="function"?window.closeReviewModal(!0):t==="quickmenu"&&typeof window.closeQuickMenuModal=="function"?window.closeQuickMenuModal(!0):t==="variantPreview"&&typeof window.closeVariantPreviewModal=="function"?window.closeVariantPreviewModal(!0):t==="terms"&&typeof window.closeTermsModal=="function"?window.closeTermsModal(!0):t==="privacy"&&typeof window.closePrivacyModal=="function"?window.closePrivacyModal(!0):t==="askQuestion"&&typeof window.closeAskQuestionModal=="function"?window.closeAskQuestionModal(!0):t==="quickVariant"&&typeof window.closeQuickVariantSheet=="function"?window.closeQuickVariantSheet(!0):t==="adminFAQ"&&typeof window.closeAdminFAQModal=="function"?window.closeAdminFAQModal(!0):t==="printerSettings"&&typeof window.closePrinterSettingsModal=="function"?window.closePrinterSettingsModal(!0):t==="exitConfirm"&&typeof window.closeExitConfirmModal=="function"?window.closeExitConfirmModal(!0):t==="appDownload"&&typeof window.closeAppDownloadModal=="function"?window.closeAppDownloadModal(!0):t==="voucher"&&typeof window.closeVoucherModal=="function"?window.closeVoucherModal(!0):t==="guide"&&typeof window.closeShoppingGuideModal=="function"?window.closeShoppingGuideModal(!0):t==="changelog"&&typeof window.closeChangelogModal=="function"?window.closeChangelogModal(!0):t==="guarantee"&&typeof window.closeQualityGuaranteeModal=="function"?window.closeQualityGuaranteeModal(!0):t==="security"&&typeof window.closeSecurityModal=="function"&&window.closeSecurityModal(!0)},Ps=()=>{const t=x("exit-confirm-modal");t&&(t.classList.contains("hidden")&&da("exitConfirm"),t.classList.remove("hidden"),setTimeout(()=>{t.classList.remove("opacity-0");const e=x("exit-confirm-modal-box");e&&e.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},yr=(t=!1)=>{gt("exitConfirm",t,()=>{const e=x("exit-confirm-modal"),a=x("exit-confirm-modal-box");e&&e.classList.add("opacity-0"),a&&a.classList.add("scale-95"),setTimeout(()=>{e&&e.classList.add("hidden")},250)})},Li=()=>{yr(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri! 🙏"),setTimeout(()=>{try{window.close()}catch{}},400))},Ei=()=>{if(Re.length>0){try{window.history.back()}catch{const a=Re.pop();Ss(a)}return}if(we==="view-admin"){const e=x("admin-content-view"),a=x("admin-dashboard-view");if(!!(e&&!e.classList.contains("hidden")||a&&a.classList.contains("hidden")||window.history.state&&window.history.state.tab||typeof window.cTab<"u"&&window.cTab)){if(window.history.state&&window.history.state.tab&&window.history.length>1)try{window.history.back();return}catch{}typeof window.openAdminMenu=="function"&&window.openAdminMenu();try{window.history.replaceState({view:"view-admin"},"",window.location.href)}catch{}return}typeof window.showConfirm=="function"&&window.showConfirm("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0);return}if(we!=="view-catalog"){if(window.history.length>1)window.history.back();else{let e="view-catalog";we==="view-payment"?e="view-checkout":we==="view-checkout"&&(e="view-cart"),We(e)}return}const t=x("exit-confirm-modal");t&&!t.classList.contains("hidden")?yr():Ps()},_i=()=>{ys();try{(!history.state||!history.state.view)&&history.replaceState({view:"view-catalog"},"",window.location.href)}catch{}window.addEventListener("popstate",t=>{if(Et){Et=!1,Qt&&clearTimeout(Qt);return}if(Re.length>0){const s=Re.pop();Ss(s);return}const e=t.state||{},a=e.view||null;if(window.isAdm||window.__localIsAdm)if(a==="view-admin")We("view-admin",!0),e.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(e.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu();else{const s=x("admin-content-view");if(s&&!s.classList.contains("hidden")){history.pushState({view:"view-admin"},"",window.location.href),We("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"&&window.showConfirm("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}else if(a){let s=a;a==="view-admin"&&(s="view-admin-login"),We(s,!0)}else We("view-catalog",!0)})};window.pushModalHistory=da;window.requestCloseModal=gt;window.changeView=We;window.setupHistoryRouter=_i;window.onBottomNavClick=ji;window.updateBottomNav=vs;window.initPullToRefresh=ys;window.handleAppBackButton=Ei;window.openExitConfirmModal=Ps;window.closeExitConfirmModal=yr;window.confirmExitApp=Li;window.isProgrammaticModalClose=Et;window.viewHistoryStack=sr;try{Object.defineProperty(window,"curViewName",{get:()=>we,set:t=>{we=t},configurable:!0})}catch{}const sa=()=>{const t=n.store.useStock===!0||n.store.useStock==="true",e=O.filter(a=>{const r=n.products.find(s=>s&&s.id!=null&&String(s.id)===String(a.id));if(!r||r.isActive==="false"||r.isActive===!1)return!1;if(a.variantName){const s=(r.variants||[]).find(i=>i.name===a.variantName);if(!s||s.isActive===!1||s.isActive==="false"||t&&(parseFloat(s.stock)||0)<=0)return!1}else if(t&&(parseFloat(r.stock)||0)<=0)return!1;return!0});ar(e),ie("freshmart_cart",JSON.stringify(O))},be=()=>{ie("freshmart_cart",JSON.stringify(O));const t=typeof window.getEffP=="function"?window.getEffP:o=>o.price||0,e=parseFloat(O.reduce((o,l)=>o+(parseFloat(l.qty)||0),0).toFixed(2)),a=O.reduce((o,l)=>o+t(l)*(parseFloat(l.qty)||0),0);Q("cart-badge",e.toString()),Q("cart-total-preview",w(a));const r=x("cart-badge");r&&r.classList.toggle("scale-0",e<=0);const s=x("bottom-nav-cart-badge");s&&(s.textContent=e>99?"99+":e.toString(),s.classList.toggle("scale-0",e<=0)),document.querySelectorAll(".desktop-cart-badge").forEach(o=>{o.textContent=e.toString(),o.classList.toggle("hidden",e<=0)});const i=x("floating-cart-container");i&&(e>0?(i.classList.remove("scale-0","pointer-events-none"),i.classList.add("scale-100","pointer-events-auto")):(i.classList.remove("scale-100","pointer-events-auto"),i.classList.add("scale-0","pointer-events-none")))},wt=()=>{const t=x("cart-free-shipping-bar"),e=x("cart-loyalty-points-bar");if(!O.length){V("cart-empty-state"),K("cart-bottom-bar"),K("btn-clear-cart"),K("btn-cart-sph-header"),K("cart-sph-card"),V("spacer-cart"),j("cart-items-container",""),t&&(t.classList.add("hidden"),t.innerHTML=""),e&&(e.classList.add("hidden"),e.innerHTML="");return}K("cart-empty-state"),V("cart-bottom-bar"),V("btn-clear-cart"),V("btn-cart-sph-header"),V("cart-sph-card"),K("spacer-cart");const a=typeof window.getEffP=="function"?window.getEffP:o=>o.price||0;let r=0;j("cart-items-container",O.map((o,l)=>{let d=parseFloat(o.qty)||0,c=a(o),p=c<o.price;r+=c*d;let m=o.colorCode?`<span class="w-3.5 h-3.5 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 shrink-0" style="background-color: ${u(o.colorCode)};"></span>`:"";return`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex gap-4 relative overflow-hidden group min-w-0 hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all duration-300">
            
            <div class="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white border border-slate-100 dark:border-slate-700/50 p-2 flex items-center justify-center overflow-hidden">
                <img loading="lazy" src="${u(o.img)}" alt="${u(o.name)}" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'">
            </div>
            
            <div class="flex-1 flex flex-col min-w-0 relative">
                <button onclick="rmCart(${l})" class="absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/50 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 transition-all active:scale-90 border border-slate-100 dark:border-slate-600 shadow-sm z-10"><i class="fa-solid fa-xmark text-sm"></i></button>
                
                <h4 class="text-[13px] sm:text-sm font-bold text-slate-800 dark:text-white leading-snug line-clamp-2 mb-1.5 pr-10 uppercase tracking-wide">${u(o.name)}</h4>
                
                <div class="flex flex-wrap items-center gap-1.5 mb-2.5">
                    ${p?'<span class="bg-amber-500 text-white px-2.5 py-0.5 rounded-full text-[9px] font-bold shadow-sm flex items-center gap-1 uppercase tracking-wide"><i class="fa-solid fa-layer-group"></i> Grosir</span>':""}
                    ${m}
                    ${o.variantName?`<span class="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[9px] font-bold border border-slate-200 dark:border-slate-600 uppercase tracking-wide">${u(o.variantName)}</span>`:""}
                    ${o.poTime?`<span class="amber-badge px-2 py-0.5 rounded-full text-[9px] font-bold flex items-center uppercase tracking-wide"><i class="fa-solid fa-clock mr-1"></i> PO ${u(o.poTime)}</span>`:""}
                </div>
                
                <div class="flex justify-between items-end mt-auto pt-1">
                    <div>
                        ${p?`<p class="text-[10px] line-through text-slate-400 font-bold mb-0.5">${w(o.price)}</p>`:""}
                        <div class="flex items-baseline gap-1">
                            <p class="text-[var(--color-primary)] font-bold text-base sm:text-lg leading-none tracking-tight">${w(c)}</p>
                            <p class="text-[9px] text-slate-400 font-bold uppercase tracking-widest">/${u(o.unit||"pcs")}</p>
                        </div>
                    </div>
                    
                    <div class="flex bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shrink-0 shadow-sm h-9">
                        <button onclick="updCQty(${l}, -1)" class="w-9 h-full flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-700 font-bold transition-colors active:bg-slate-100"><i class="fa-solid fa-minus text-xs"></i></button>
                        <input type="number" step="0.01" class="w-10 h-full text-center text-xs font-bold bg-transparent text-slate-800 dark:text-white focus:outline-none border-x border-slate-200 dark:border-slate-700" value="${d}" onchange="setCQty(${l}, this.value)">
                        <button onclick="updCQty(${l}, 1)" class="w-9 h-full flex items-center justify-center text-slate-500 hover:text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] dark:text-slate-400 dark:hover:text-[var(--color-primary)] dark:hover:bg-[rgba(var(--color-primary-rgb),0.12)] font-bold transition-colors active:bg-slate-100"><i class="fa-solid fa-plus text-xs"></i></button>
                    </div>
                </div>
            </div>
        </div>`}).join("")),Q("cart-subtotal",w(r));const s=n.store.freeShippingMinSpendEnabled===!0||n.store.freeShippingMinSpendEnabled==="true",i=parseFloat(n.store.freeShippingMinSpendAmount)||0;if(t)if(s&&i>0){t.classList.remove("hidden");const o=Math.min(100,Math.round(r/i*100)),l=Math.max(0,i-r),d=r>=i;t.innerHTML=`
            <div class="p-4 rounded-2xl border transition-all duration-300 ${d?"bg-[var(--color-primary)] text-white border-[var(--color-primary)]/40 shadow-md shadow-[rgba(var(--color-primary-rgb),0.2)]":"bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm text-slate-800 dark:text-slate-100"}">
                <div class="flex items-center justify-between gap-3 mb-2.5">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <span class="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0 ${d?"bg-white/20 text-white":"bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)]"}">
                            <i class="fa-solid ${d?"fa-circle-check text-base":"fa-truck-fast"}"></i>
                        </span>
                        <div class="min-w-0">
                            <p class="text-xs font-bold leading-tight ${d?"text-white":"text-slate-800 dark:text-slate-100"}">
                                ${d?'Hore! Anda berhak mendapatkan <span class="underline decoration-wavy decoration-white/60 font-extrabold">Gratis Ongkir Otomatis</span>':`Belanja <span class="text-[var(--color-primary)] font-extrabold">${w(l)}</span> lagi untuk <b>Gratis Ongkir</b>!`}
                            </p>
                            <p class="text-[10px] ${d?"text-white/85":"text-slate-400 dark:text-slate-500"} mt-0.5">
                                ${d?"Ongkos kirim otomatis dipotong Rp 0 saat checkout.":`Min. belanja ${w(i)} untuk pengiriman ke alamat.`}
                            </p>
                        </div>
                    </div>
                    <span class="text-[11px] font-black shrink-0 px-2.5 py-1 rounded-full ${d?"bg-white text-[var(--color-primary)] shadow-sm":"bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)]"}">
                        ${o}%
                    </span>
                </div>
                <div class="w-full h-2 rounded-full overflow-hidden ${d?"bg-black/20":"bg-slate-100 dark:bg-slate-700/60"}">
                    <div class="h-full rounded-full transition-all duration-500 ${d?"bg-white shadow-sm":"bg-[var(--color-primary)]"}" style="width: ${o}%"></div>
                </div>
            </div>`}else t.classList.add("hidden"),t.innerHTML="";if(e){const o=typeof window.calculateCartPoints=="function"?window.calculateCartPoints(O,n.store):{totalPoints:0,directPoints:0,spendPoints:0,nonPointSpend:0,threshold:1e5,pointsPerThreshold:1,isSpendPointsActive:!1,remainingToNextPoint:0,progressPercent:0},{totalPoints:l,directPoints:d,spendPoints:c,nonPointSpend:p,threshold:m,pointsPerThreshold:b,isSpendPointsActive:f,remainingToNextPoint:g,progressPercent:k}=o;if(l>0||f&&p>0){e.classList.remove("hidden");let S="";d>0&&c>0?S=`+${l} Poin didapat (${d} dari produk, ${c} dari belanja)`:d>0?S=`+${l} Poin didapat dari produk pilihan`:c>0?S=`+${l} Poin didapat dari kelipatan belanja!`:S="Kumpulkan poin belanja member";let A="";f&&g>0&&g<m?A=`Belanja <span class="text-amber-600 dark:text-amber-400 font-extrabold">${w(g)}</span> lagi untuk dapat +${b} poin berikutnya!`:l>0?A="Poin otomatis ditambahkan ke saldo member Anda setelah pesanan dikonfirmasi.":A=`Belanja minimal ${w(m)} untuk produk tanpa poin agar mendapatkan +${b} poin.`,e.innerHTML=`
            <div class="p-4 rounded-2xl border transition-all duration-300 ${l>0?"bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border-amber-200 dark:border-amber-700/60 dark:bg-amber-950/20":"bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm"}">
                <div class="flex items-center justify-between gap-3 mb-2">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <span class="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0 bg-amber-500 text-white shadow-sm shadow-amber-500/20">
                            <i class="fa-solid fa-coins"></i>
                        </span>
                        <div class="min-w-0">
                            <p class="text-xs font-bold leading-tight text-slate-800 dark:text-slate-100">
                                ${S}
                            </p>
                            <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                                ${A}
                            </p>
                        </div>
                    </div>
                    <span class="text-[11px] font-black shrink-0 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                        <i class="fa-solid fa-star text-[10px] mr-1"></i>${l} Poin
                    </span>
                </div>
                ${f&&g>0&&g<m?`
                <div class="w-full h-1.5 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700/60 mt-2">
                    <div class="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-amber-400 to-amber-500" style="width: ${k}%"></div>
                </div>
                `:""}
            </div>`}else e.classList.add("hidden"),e.innerHTML=""}},Bi=(t,e)=>{let a=parseFloat(e);if(isNaN(a)||a<=0)O.splice(t,1);else{if(n.store.useStock===!0||n.store.useStock==="true"){const s=O[t],i=n.products.find(o=>o&&o.id!=null&&String(o.id)===String(s.id));if(i){const o=s.variantName?parseFloat(((i.variants||[]).find(l=>l.name===s.variantName)||{}).stock)||0:parseFloat(i.stock)||0;a>o&&(a=o,typeof window.showToast=="function"&&window.showToast(`Maks stok: ${o}`))}}O[t].qty=parseFloat(a.toFixed(2))}wt(),be()},Ni=(t,e)=>{let a=parseFloat((parseFloat(O[t].qty)+e).toFixed(2));if(a<=0)O.splice(t,1);else{if((n.store.useStock===!0||n.store.useStock==="true")&&e>0){const s=O[t],i=n.products.find(o=>o&&o.id!=null&&String(o.id)===String(s.id));if(i){const o=s.variantName?parseFloat(((i.variants||[]).find(l=>l.name===s.variantName)||{}).stock)||0:parseFloat(i.stock)||0;a>o&&(a=o,typeof window.showToast=="function"&&window.showToast(`Maks stok: ${o}`))}}O[t].qty=a}wt(),be()},Oi=t=>{O.splice(t,1),wt(),be()},Ri=()=>{typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Semua barang akan dihapus. Lanjutkan?",()=>{ar([]),be(),wt(),typeof window.showToast=="function"&&window.showToast("Dibersihkan")}):(ar([]),be(),wt())},Fi=()=>{if(window.isAdm){typeof window.showConfirm=="function"&&window.showConfirm("Akses Ditolak","Anda sedang login sebagai Seller. Silakan logout terlebih dahulu untuk membuat pesanan sebagai pelanggan.",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Logout Sekarang",!1);return}O.length&&typeof window.changeView=="function"&&window.changeView("view-checkout")};window.sanitizeCart=sa;window.updCart=be;window.renderCart=wt;window.setCQty=Bi;window.updCQty=Ni;window.rmCart=Oi;window.clearCart=Ri;window.validateCartToCheckout=Fi;const ia=()=>{const t=x("wishlist-badge");t&&(t.innerText=Ce.length,t.classList.toggle("scale-0",!Ce.length))},Hi=t=>{Ce.splice(t,1),ie("freshmart_wishlist",JSON.stringify(Ce)),ia(),Sr()},Ki=t=>{const e=Ce[t],a=n.products?.find(o=>o.id===e.id);if(!a||a.isActive==="false"||a.isActive===!1)return h(`${e.name} sudah tidak tersedia.`);const r=e.variantName?(a.variants||[]).find(o=>o.name===e.variantName):null;if(n.store?.useStock===!0||n.store?.useStock==="true"){if(e.variantName&&(!r||r.isActive===!1||r.isActive==="false"))return h(`Varian ${e.variantName} sudah tidak tersedia.`);const o=r?parseFloat(r.stock)||0:parseFloat(a.stock)||0,l=O.find(c=>c.id===e.id&&c.variantName===e.variantName),d=l&&parseFloat(l.qty)||0;if(o<=0||d>=o)return h(`Stok ${e.name} tidak mencukupi!`)}const i=O.find(o=>o.id===e.id&&o.variantName===e.variantName);if(i)i.qty=parseFloat((i.qty+1).toFixed(2));else{const o=r&&parseFloat(r.poin)>0?parseFloat(r.poin):parseFloat(a.poin)||0;O.push({id:a.id,name:a.name,variantName:e.variantName||"",price:r?r.price:a.price,img:r?.img||a.img,qty:1,unit:a.unit||"pcs",poTime:a.poTime||"",colorCode:r?.colorCode||"",poin:o})}be(),h("Ke Keranjang!"),typeof window.curViewName<"u"&&window.curViewName==="view-cart"&&wt()},Vi=()=>{Ze("Hapus Favorit","Yakin ingin menghapus semua?",()=>{Ce.length=0,ie("freshmart_wishlist",JSON.stringify(Ce)),ia(),Sr(),h("Dibersihkan")})},Sr=()=>{if(!Ce.length){V("wishlist-empty-state"),K("btn-clear-wishlist"),V("spacer-wishlist"),j("wishlist-items-container","");return}K("wishlist-empty-state"),V("btn-clear-wishlist"),K("spacer-wishlist"),j("wishlist-items-container",Ce.map((t,e)=>{let a=t.colorCode?`<span class="w-3.5 h-3.5 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 shrink-0" style="background-color: ${u(t.colorCode)};"></span>`:"";return`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex gap-4 relative overflow-hidden group min-w-0 hover:shadow-md hover:-translate-y-1 hover:border-rose-300 dark:hover:border-rose-600 transition-all duration-300">
            <div class="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white border border-slate-100 dark:border-slate-700/50 p-2 flex items-center justify-center overflow-hidden">
                <img loading="lazy" src="${u(t.img)}" alt="${u(t.name)}" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'">
            </div>
            
            <div class="flex-1 flex flex-col min-w-0 relative">
                <button onclick="rmWish(${e})" class="absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/50 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 transition-all active:scale-90 border border-slate-100 dark:border-slate-600 shadow-sm z-10"><i class="fa-solid fa-xmark text-sm"></i></button>
                
                <h4 class="text-[13px] sm:text-sm font-bold text-slate-800 dark:text-white leading-snug line-clamp-2 mb-1.5 pr-10 uppercase tracking-wide">${u(t.name)}</h4>
                
                ${t.variantName?`<div class="mb-2 flex items-center gap-1.5">${a}<span class="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full text-[9px] font-bold border border-slate-200 dark:border-slate-600 uppercase tracking-wide">${u(t.variantName)}</span></div>`:""}
                
                <div class="flex justify-between items-end mt-auto pt-1">
                    <p class="text-[var(--color-primary)] font-bold text-base sm:text-lg leading-none tracking-tight">${w(t.price)}</p>
                    <button onclick="moveWish(${e})" class="h-9 px-5 rounded-xl bg-[var(--color-primary)] hover:opacity-90 text-white border border-[var(--color-primary)] text-xs font-bold transition-colors active:scale-95 shadow-glow flex items-center gap-1.5"><i class="fa-solid fa-cart-plus"></i> Beli</button>
                </div>
            </div>
        </div>`}).join(""))};window.updWish=ia;window.rmWish=Hi;window.moveWish=Ki;window.clearWishlist=Vi;window.renderWish=Sr;window.cSlideIdx=0;let Ct=[];const Pr=(t,e=!1)=>{window.cSlideIdx=0;const a=n.products.find(g=>g&&g.id!=null&&String(g.id)===String(t));if(!a)return;const r=a.isActive!=="false"&&a.isActive!==!1,s=n.store.useStock===!0||n.store.useStock==="true";let i=1/0;if(s&&(i=a.variants&&a.variants.length?a.variants.filter(g=>g.isActive!==!1&&g.isActive!=="false").reduce((g,k)=>g+(parseFloat(k.stock)||0),0):parseFloat(a.stock)||0),!r){h("Produk ini sedang tidak tersedia");return}if(s&&i<=0){h("Maaf, stok produk ini sedang kosong");return}const o=x("product-modal"),l=x("product-modal-content"),d=o&&!o.classList.contains("hidden");if(!e&&d&&y&&y.id&&String(y.id)!==String(a.id)&&(Ct.push(y.id),typeof window.pushModalHistory=="function"?window.pushModalHistory("product"):Re.push("product")),li(a),xr(1),a.variants&&a.variants.length>0){const g=a.variants.findIndex(k=>{const S=k.isActive!==!1&&k.isActive!=="false",A=parseFloat(k.stock)||0;return S&&(!s||A>0)});rr(g>=0?g:0)}else rr(0);Le("modal-qty-input",1),Ea();const c=a.desc?a.desc.replace(/<[^>]*>/g,"").substring(0,160):`Beli ${a.name} berkualitas dengan harga terbaik hanya di Toko Putri.`,p=window.location.origin+window.location.pathname+"?p="+a.id;typeof window.updateSEO=="function"&&window.updateSEO(`${a.name} - Toko Putri`,c,me(a.img,"w500-rw"),p);const m=a.variants&&a.variants.length>0?Math.min(...a.variants.map(g=>parseFloat(g.price)||a.price)):a.price,b=i>0?"https://schema.org/InStock":"https://schema.org/OutOfStock",f={"@context":"https://schema.org","@type":"Product",name:a.name,image:[me(a.img,"w500-rw")],description:c,sku:`PROD-${a.id}`,category:a.category||"",brand:{"@type":"Brand",name:a.brand||"Toko Putri"},offers:{"@type":"Offer",url:p,priceCurrency:"IDR",price:m,itemCondition:"https://schema.org/NewCondition",availability:b,priceValidUntil:"2030-12-31"}};a.variants&&a.variants.length>0&&(f.offers=a.variants.map(g=>({"@type":"Offer",name:g.name,priceCurrency:"IDR",price:parseFloat(g.price)||a.price,itemCondition:"https://schema.org/NewCondition",availability:(parseFloat(g.stock)||0)>0?"https://schema.org/InStock":"https://schema.org/OutOfStock"}))),typeof window.injectJSONLD=="function"&&window.injectJSONLD("seo-product",f);try{const g=x("product-modal-ad-container");g&&(n.store.adsEnabled===!0||n.store.adsEnabled==="true"?(g.classList.remove("hidden"),g.innerHTML='<ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-2636322336243340" data-ad-slot="8219064079"></ins>',(window.adsbygoogle=window.adsbygoogle||[]).push({})):(g.classList.add("hidden"),g.innerHTML=""))}catch(g){console.error("Gagal render iklan in-article:",g)}if(typeof window.loadProductReviews=="function"&&window.loadProductReviews(a.id),As(a),o&&l){const g=new URLSearchParams(window.location.search);g.get("p")!==String(a.id)&&(g.set("p",a.id),!e&&!d?(window.history.pushState({modal:"product"},a.name,window.location.pathname+"?"+g.toString()),o.classList.contains("hidden")&&Re.push("product")):window.history.replaceState({modal:"product"},a.name,window.location.pathname+"?"+g.toString())),o.classList.contains("hidden")?(l.scrollTo(0,0),cs(o,l)):l.scrollTo({top:0,behavior:"smooth"})}},La=(t=!1)=>{const e=x("product-modal"),a=x("product-modal-content");if(!e||!a)return;if(t&&Ct.length>0){const s=Ct.pop();Pr(s,!0);return}if(!t&&Ct.length>0){const s=Ct.length;Ct=[];for(let i=0;i<s;i++){const o=Re.lastIndexOf("product");o>-1&&Re.splice(o,1)}}const r=()=>{us(e,a);const s=x("product-modal-video-container");s&&(s.innerHTML="",s.classList.add("hidden"));const i=new URLSearchParams(window.location.search);i.delete("p");let o=window.location.pathname;i.toString()&&(o+="?"+i.toString());const l=window.history.state&&typeof window.history.state=="object"?{...window.history.state}:{};delete l.modal,l.view||(l.view=we||"view-catalog");try{window.history.replaceState(l,"Toko Putri",o)}catch{}typeof window.updateSEO=="function"&&window.updateSEO("Toko Putri","Toko Putri - Solusi grosir dan e-commerce terpercaya untuk alat teknik, perkakas, dan perlengkapan pertukangan berkualitas dengan harga terbaik.",me(n.store.logo,"w300-rw"),window.location.origin+o);const d=document.getElementById("seo-product");d&&d.remove()};typeof window.requestCloseModal=="function"?window.requestCloseModal("product",t,r):r()},Ui=t=>{if(!y||!y.variants||!y.variants[t])return;const e=y.variants[t],a=x("variant-preview-modal"),r=x("variant-preview-content");if(!a||!r)return;let s="";`${u(y.name)}${u(e.name)}`;const i=w(e.price||y.price);e.img?s=`
            <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <img class="w-full h-full object-contain" src="${me(e.img,"w800-rw")}" alt="${u(e.name)}">
                ${e.colorCode?`<div class="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-white shadow-lg" style="background-color: ${u(e.colorCode)};"></div>`:""}
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <h4 class="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase break-words leading-tight">${u(e.name)}</h4>
                <p class="text-[var(--color-primary)] font-extrabold text-lg mt-1 tracking-tight">${i}</p>
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${u(y.name)}</p>
            </div>
        `:e.colorCode?s=`
            <div class="w-full aspect-square rounded-3xl shadow-2xl border-4 border-white/20 flex flex-col items-center justify-center p-6 relative overflow-hidden" style="background-color: ${u(e.colorCode)};">
                <div class="absolute bottom-0 inset-x-0 bg-white dark:bg-slate-900 p-6 flex flex-col items-center justify-center text-center border-t border-slate-200/50 dark:border-slate-800/50">
                    <span class="text-slate-900 dark:text-white font-extrabold text-lg uppercase tracking-wider break-words leading-tight">${u(e.name)}</span>
                    <span class="text-slate-500 dark:text-slate-400 font-mono text-xs font-bold mt-1 uppercase">${u(e.colorCode)}</span>
                    <span class="text-[var(--color-primary)] font-extrabold text-lg mt-1">${i}</span>
                </div>
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${u(y.name)}</p>
            </div>
        `:s=`
            <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <img loading="lazy" decoding="async" class="w-full h-full object-contain" src="${me(y.img||"","w800-rw")}" alt="${u(y.name)}">
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <h4 class="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase break-words leading-tight">${u(e.name)}</h4>
                <p class="text-[var(--color-primary)] font-extrabold text-lg mt-1 tracking-tight">${i}</p>
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${u(y.name)}</p>
            </div>
        `,r.innerHTML=s,a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("variantPreview"),V("variant-preview-modal"),setTimeout(()=>{a.classList.remove("opacity-0"),r.classList.remove("scale-95")},10)},Gi=()=>{if(!y)return;const t=x("variant-preview-modal"),e=x("variant-preview-content");if(!t||!e)return;const a=y.variants&&Z!==null?y.variants[Z]:null,r=a?.img||y.img||"",s=a?`${u(y.name)} - ${u(a.name)}`:u(y.name),i=w(a?.price??y.price);let o=`
        <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
            <img loading="lazy" decoding="async" class="w-full h-full object-contain" src="${me(r,"w800-rw")}" alt="${s}">
            ${a?.colorCode?`<div class="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-white shadow-lg" style="background-color: ${u(a.colorCode)};"></div>`:""}
        </div>
        <div class="mt-5 text-center px-4 w-full">
            <h4 class="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase break-words leading-tight">${u(y.name)}</h4>
            ${a?`<p class="text-slate-300 font-bold text-sm mt-1 uppercase tracking-wide">Varian: ${u(a.name)}</p>`:""}
            <p class="text-[var(--color-primary)] font-extrabold text-lg mt-1 tracking-tight">${i}</p>
        </div>
    `;e.innerHTML=o,t.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("variantPreview"),V("variant-preview-modal"),setTimeout(()=>{t.classList.remove("opacity-0"),e.classList.remove("scale-95")},10)},qi=(t=!1)=>{const e=x("variant-preview-modal"),a=x("variant-preview-content");if(e&&a){const r=()=>{e.classList.add("opacity-0"),a.classList.add("scale-95"),setTimeout(()=>{K("variant-preview-modal"),a.innerHTML=""},300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("variantPreview",t,r):r()}},Wi=t=>{ps(y?.video)&&(window.cSlideIdx+=t,window.cSlideIdx>1&&(window.cSlideIdx=0),window.cSlideIdx<0&&(window.cSlideIdx=1),Ea())},Ea=()=>{if(!y)return;let t=y,e=t.isActive!=="false"&&t.isActive!==!1,a=t.variants?.length>0;const r=(t.name||"").toLowerCase(),s=(t.category||"").toLowerCase(),i=(t.tag||"").toLowerCase(),o=["cat","paint","warna","colour","color","putih","hitam","merah","biru","hijau","kuning","orange","abu","coklat","cream","krem","beige","ivory","mocca","rose","tosca","lavender","salmon","broken white","off white","natural","magnolia","primer","dasar","eksterior","exterior","interior","tembok","duco","gloss","matte","satin","semi gloss"],l=r.includes("cat")&&(r.includes("tembok")||r.includes("interior")||r.includes("eksterior")||r.includes("exterior"))||s.includes("cat")||s.includes("paint")||i.includes("cat")||i.includes("paint"),d=a&&t.variants.some(I=>{const B=(I.name||"").toLowerCase();return o.some(le=>B.includes(le))}),c=l||d,p=x("product-modal-paint-warning");p&&(c?p.classList.remove("hidden"):p.classList.add("hidden"));let m=a&&Z!==null?t.variants[Z]:null,b=m?.unit||t.unit||"Pcs";const f=x("product-modal-img"),g=x("product-modal-video-container"),k=ps(t.video),S=m&&m.img,A=x("slide-prev"),T=x("slide-next"),H=x("slide-dots");if(k&&!S)if(A&&A.classList.remove("hidden"),T&&T.classList.remove("hidden"),H&&(H.classList.remove("hidden"),H.innerHTML=`
                <div class="w-2 h-2 rounded-full ${window.cSlideIdx===0?"bg-[var(--color-primary)] scale-125":"bg-slate-300 dark:bg-slate-600"} transition-all cursor-pointer shadow-sm" onclick="window.cSlideIdx=0; rProdMod()"></div>
                <div class="w-2 h-2 rounded-full ${window.cSlideIdx===1?"bg-[var(--color-primary)] scale-125":"bg-slate-300 dark:bg-slate-600"} transition-all cursor-pointer shadow-sm" onclick="window.cSlideIdx=1; rProdMod()"></div>
            `),window.cSlideIdx===1){f&&(f.style.display="none"),g&&(g.classList.remove("hidden"),g.innerHTML||(g.innerHTML=`<iframe class="w-full h-full pointer-events-none" src="https://www.youtube.com/embed/${k}?autoplay=1&mute=1&loop=1&playlist=${k}&enablejsapi=1&modestbranding=1&controls=0&rel=0&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure"></iframe>`));const I=x("zoom-indicator");I&&I.classList.add("hidden")}else{g&&g.classList.add("hidden"),f&&(f.style.display="block",f.src=me(m?.img||t.img||"","w600-rw"),f.style.opacity=1);const I=x("zoom-indicator");I&&I.classList.remove("hidden")}else{A&&A.classList.add("hidden"),T&&T.classList.add("hidden"),H&&H.classList.add("hidden"),g&&(g.innerHTML="",g.classList.add("hidden")),f&&(f.style.display="block",f.style.opacity=0,setTimeout(()=>{f.src=me(m?.img||t.img||"","w600-rw"),f.style.opacity=1},150));const I=x("zoom-indicator");I&&I.classList.remove("hidden")}if(Q("product-modal-title",t.name),a&&Z===null)j("product-modal-price",'<span class="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Pilih Warna/Varian</span>');else{let I=m?.price??t.price,B=m?.priceNormal??t.priceNormal;const ae=(n.store.ppnEnabled===!0||n.store.ppnEnabled==="true")&&n.store.ppnType==="inclusive"?'<span class="text-[9px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800 uppercase tracking-widest ml-2 align-middle inline-block">Inc. PPN</span>':"";let ne="";if(B&&B>I){let Se=Math.round((B-I)/B*100);ne=`<div class="flex flex-col"><span class="text-[11px] text-rose-500 font-bold line-through mb-0.5 tracking-wide">${w(B)} <span class="bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded ml-1 text-[9px] no-underline tracking-widest border border-rose-200">-${Se}%</span></span><span>${w(I)} ${ae}</span></div>`}else ne=`<span>${w(I)} ${ae}</span>`;j("product-modal-price",ne)}const E=x("product-modal-desc");if(E){E.className="text-[13px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_b]:font-bold [&_strong]:font-bold [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-2 [&_div]:my-1";const I=t.desc||"-";E.innerHTML=typeof DOMPurify<"u"?DOMPurify.sanitize(I,{ALLOWED_TAGS:["p","br","b","strong","i","em","u","s","span","div","h1","h2","h3","h4","ul","ol","li","a","img","table","thead","tbody","tr","th","td","blockquote","code","pre","hr"],ALLOWED_ATTR:["href","src","alt","title","class","style","target","rel","width","height","loading"],FORBID_TAGS:["script","iframe","object","embed","form","input"],FORBID_ATTR:["onclick","oninput","onload","onmouseover","onsubmit","onerror"]}):I}const Y=x("product-modal-spec-table");if(Y)if(t.specTable&&t.specTable.length>0){let I=`
            <div class="mt-5">
                <p class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-3">
                    <i class="fa-solid fa-table-cells-large text-[var(--color-primary)] opacity-80"></i> Spesifikasi Produk
                </p>
                <div class="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <table class="w-full text-[13px] spec-product-table">
                        <tbody>`;t.specTable.forEach((B,le)=>{const ae=le%2===0?"bg-white dark:bg-slate-900":"bg-slate-50/80 dark:bg-slate-800/60";I+=`<tr class="${ae}">
                    <td class="py-2.5 px-4 font-semibold text-slate-600 dark:text-slate-300 w-5/12 border-r border-slate-100 dark:border-slate-700/60 align-top">${u(B.key)}</td>
                    <td class="py-2.5 px-4 text-slate-700 dark:text-slate-200 align-top">${u(B.val)}</td>
                </tr>`}),I+="</tbody></table></div></div>",Y.innerHTML=typeof DOMPurify<"u"?DOMPurify.sanitize(I,{ALLOWED_TAGS:["div","p","i","table","tbody","tr","td","th","thead","br","span"],ALLOWED_ATTR:["class","style"]}):I,Y.style.display=""}else Y.innerHTML="",Y.style.display="none";Q("modal-unit-label",b);let U="";t.sku&&(U+=`<span class="bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap tracking-wider"><i class="fa-solid fa-barcode"></i> ${u(t.sku)}</span>`),t.tag&&(U+=`<span class="accent-badge px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-hashtag"></i> ${u(t.tag)}</span>`),U+='<span class="accent-badge px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-circle-check"></i> Official</span>',t.brand&&(U+=`<span class="bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-tag"></i> ${u(t.brand)}</span>`),t.poTime&&(U+=`<span class="bg-amber-500 text-white px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${u(t.poTime)}</span>`);const G=m&&parseFloat(m.poin)>0?parseFloat(m.poin):parseFloat(t.poin)||0;G>0&&(!a||Z!==null)&&(U+=`<span class="bg-[var(--color-primary)] text-white px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-star"></i> +${G} Poin</span>`);const F=a&&Z!==null?parseFloat(m?m.totalSold:0)||0:a?t.variants.reduce((I,B)=>I+(parseFloat(B.totalSold)||0),0):parseFloat(t.totalSold)||0;F>0&&(U+=`<span class="bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-fire-flame-curved text-orange-400"></i> ${F} Terjual</span>`),j("product-modal-badges",U),j("product-modal-wholesale-container",t.wholesale?.length&&!t.variants?.length?`
        <div class="mb-6 bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-4 border border-amber-200 dark:border-amber-800/50 shadow-inner">
            <p class="text-[10px] font-bold text-amber-600 dark:text-amber-500 mb-3 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-layer-group"></i> Harga Grosir</p>
            <div class="space-y-2">${t.wholesale.slice().sort((I,B)=>I.minQty-B.minQty).map(I=>`
                <div class="flex justify-between items-center text-sm font-bold bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-amber-100 dark:border-slate-700 shadow-sm">
                    <span class="text-slate-600 dark:text-slate-300">≥ ${parseFloat(I.minQty)} <span class="text-[10px] uppercase tracking-wider">${u(b)}</span></span>
                    <span class="text-[var(--color-primary)] font-bold">${w(I.price)}</span>
                </div>`).join("")}
            </div>
        </div>`:"");const q=x("product-modal-admin-info");if(q)if(window.isAdm&&window.curViewName==="view-admin"){const I=n.store.useStock===!0||n.store.useStock==="true",B=t.variants?.length>0,le=m?m.hpp||0:t.hpp||0;m?m.stock!==void 0&&m.stock:t.stock!==void 0&&t.stock;const ae=m?m.price||t.price||0:t.price||0,ne=le>0?Math.round((ae-le)/ae*100):null;let Se="";if(I)if(B)Se=`<div class="col-span-2 space-y-1.5">${(t.variants||[]).map(te=>{const xe=parseFloat(te.stock)||0;return`<div class="flex justify-between items-center text-[11px] font-bold bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-700">
                            <span class="text-slate-500 flex items-center gap-1.5">${te.colorCode?`<span class="w-3 h-3 rounded-full inline-block" style="background:${u(te.colorCode)}"></span>`:""}${u(te.name)}</span>
                            <span class="${xe===0?"text-rose-500":xe<=5?"text-amber-500":"text-emerald-500"} font-bold">${xe} ${u(te.unit||t.unit||"pcs")}</span>
                        </div>`}).join("")}</div>`;else{const te=parseFloat(t.stock)||0;Se=`<div class="flex flex-col gap-1"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Sisa Stok</p><p class="font-bold text-xl ${te===0?"text-rose-500":te<=5?"text-amber-500":"text-blue-500"}">${te} <span class="text-sm font-bold">${u(t.unit||"pcs")}</span></p></div>`}q.innerHTML=`
            <div class="mb-6 bg-[rgba(var(--color-primary-rgb),0.05)] dark:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-2xl p-4 border border-[var(--color-primary)]/20">
                <p class="text-[10px] font-bold text-[var(--color-primary)] mb-3 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-lock"></i> Info Seller</p>
                <div class="grid grid-cols-2 gap-3">
                    <div class="flex flex-col gap-1">
                        <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">HPP / Modal</p>
                        <p class="font-bold text-lg text-amber-500">${w(le)}</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Margin</p>
                        <p class="font-bold text-lg ${ne===null?"text-slate-400":ne>=30?"text-emerald-500":ne>=10?"text-amber-500":"text-rose-500"}">${ne!==null?ne+"%":"—"}</p>
                    </div>
                    ${Se}
                </div>
                <button onclick="closeProductModal(); setTimeout(()=>{ if(window.openAdminTab) openAdminTab('products'); setTimeout(()=> { if(window.oAEd) oAEd('products', ${t.id}); }, 200); }, 400);" class="mt-3 w-full py-2.5 rounded-xl border border-[var(--color-primary)]/30 dark:border-[var(--color-primary)]/40 bg-white dark:bg-slate-800 text-[var(--color-primary)] font-bold text-[11px] uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-all flex items-center justify-center gap-2">
                    <i class="fa-solid fa-pen-to-square"></i> Edit Produk
                </button>
            </div>`}else q.innerHTML="";if(e)if(a&&Z===null?(K("modal-active-controls"),K("modal-inactive-controls")):(a?m.isActive!==!1&&m.isActive!=="false":!0)?(V("modal-active-controls"),K("modal-inactive-controls")):(K("modal-active-controls"),V("modal-inactive-controls")),a){V("product-modal-options-container");let I='<div class="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(95px,1fr))] gap-2 sm:gap-3 w-full">';I+=t.variants.map((B,le)=>{let ae=B.isActive!==!1&&B.isActive!=="false";const ne=n.store.useStock===!0||n.store.useStock==="true",Se=parseFloat(B.stock)||0,te=ne&&Se<=0;let xe=ae&&!te,ft=B.colorCode?`<span class="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 mb-2 shrink-0" style="background-color: ${u(B.colorCode)};"></span>`:"",At="";xe?le===Z?At="bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] text-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:text-[var(--color-primary)] shadow-sm":At="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-[var(--color-primary)]/40 hover:shadow-sm":At="bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 opacity-60 cursor-not-allowed";const Ur=xe&&(B.colorCode||B.img)?`<span onclick="event.stopPropagation(); previewVariant(${le})" class="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/90 dark:bg-slate-700/90 shadow-sm flex items-center justify-center text-slate-500 hover:text-[var(--color-primary)] hover:scale-110 active:scale-90 transition-all border border-slate-200/50 dark:border-slate-600/50" title="Perbesar"><i class="fa-solid fa-magnifying-glass-plus text-[9px]"></i></span>`:"";return`<button ${xe?"":"disabled"} class="relative p-2.5 sm:p-3 rounded-xl text-[10px] sm:text-[11px] font-bold uppercase tracking-wide border-2 transition-all active:scale-95 flex flex-col items-center justify-start text-center h-full ${At}" ${xe?`onclick="selectVariant(${le})"`:""}>
                    ${Ur}
                    ${ft} 
                    <span class="${xe?"":"line-through"} leading-snug break-words w-full ${B.colorCode?"":"my-auto"}">${u(B.name)}</span>
                    ${te&&ae?'<span class="text-[8px] font-bold text-rose-500 normal-case mt-0.5">Stok Habis</span>':""}
                </button>`}).join(""),I+="</div>",j("product-modal-options",I)}else K("product-modal-options-container");else K("modal-active-controls"),V("modal-inactive-controls"),K("product-modal-options-container");_a()},_a=()=>{if(!y)return;if(y.variants?.length>0&&Z===null){Q("btn-modal-price-preview","Rp 0");const d=x("sticky-modal-price");d&&(d.innerText="Pilih Varian");return}let t=(y.variants||[])[Z],a=t?.price??y.price;const r=t?.name||null;let s=0;r?s=parseFloat(O.find(d=>d.id===y.id&&d.variantName===r)?.qty||0):s=O.filter(d=>d.id===y.id).reduce((d,c)=>d+(parseFloat(c.qty)||0),0);let i=Te+s;if(y.wholesale?.length){for(let d of y.wholesale.slice().sort((c,p)=>p.minQty-c.minQty))if(i>=parseFloat(d.minQty)){a=d.price;break}}const o=w(a*Te);Q("btn-modal-price-preview",o);const l=x("sticky-modal-price");l&&(l.innerText=o)},zi=t=>{const e=n.store.useStock===!0||n.store.useStock==="true",a=y?.variants?.[Z],r=a?.name||null,s=e?r?parseFloat(a?.stock)||0:parseFloat(y?.stock)||0:1/0,i=parseFloat(Math.min(s,Math.max(.01,Te+t)).toFixed(2));xr(i),Le("modal-qty-input",Te),_a(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),e&&s!==1/0&&Te>=s&&h(`Maks stok: ${s}`)},Qi=t=>{const e=n.store.useStock===!0||n.store.useStock==="true",a=y?.variants?.[Z],r=a?.name||null,s=e?r?parseFloat(a?.stock)||0:parseFloat(y?.stock)||0:1/0;let i=parseFloat(t);(isNaN(i)||i<=0)&&(i=.01),i=Math.min(s,i);const o=parseFloat(i.toFixed(2));xr(o),Le("modal-qty-input",Te),_a(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Ji=t=>{rr(t),Ea(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Yi=(t=null)=>{if(y.variants?.length>0&&Z===null)return h("Pilih varian / warna terlebih dahulu!");if(n.store.useStock===!0||n.store.useStock==="true"){const d=y.variants?.[Z],c=d?.name||null,p=c?parseFloat(d.stock)||0:parseFloat(y.stock)||0,m=O.find(f=>f.id===y.id&&f.variantName===c),b=m&&parseFloat(m.qty)||0;if(Te+b>p)return h(`Stok tidak cukup! Tersisa: ${p}`)}const a=y.variants?.[Z],r=a?.name||null,s=O.find(d=>d.id===y.id&&d.variantName===r),i=a?.unit||y.unit||"pcs",o=a?.img||y.img;if(s)s.qty=parseFloat((s.qty+Te).toFixed(2)),s.unit=i;else{const d=a&&parseFloat(a.poin)>0?parseFloat(a.poin):parseFloat(y.poin)||0;O.push({id:y.id,name:y.name,variantName:r,price:a?.price??y.price,img:o,qty:Te,unit:i,poTime:y.poTime||"",colorCode:a?.colorCode||"",poin:d})}be(),typeof analytics<"u"&&analytics.logEvent("add_to_cart",{item_id:y.id,item_name:y.name,quantity:Te});const l=t instanceof HTMLElement?t:x("product-modal-img")||t;typeof window.flyToCartAnimation=="function"?window.flyToCartAnimation(l,"#bnav-cart",o):typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),La(),h("Berhasil Masuk Keranjang","success")},Xi=()=>{if(y.variants?.length>0&&Z===null)return h("Pilih varian / warna terlebih dahulu!");if(n.store.useStock===!0||n.store.useStock==="true"){const o=y.variants?.[Z],l=o?.name||null,d=l?parseFloat(o.stock)||0:parseFloat(y.stock)||0,c=O.find(m=>m.id===y.id&&m.variantName===l),p=c&&parseFloat(c.qty)||0;if(Te+p>d)return h(`Stok tidak cukup! Tersisa: ${d}`)}const e=y.variants?.[Z],a=e?.name||null,r=O.find(o=>o.id===y.id&&o.variantName===a),s=e?.unit||y.unit||"pcs",i=e?.img||y.img;if(r)r.qty=parseFloat((r.qty+Te).toFixed(2)),r.unit=s;else{const o=e&&parseFloat(e.poin)>0?parseFloat(e.poin):parseFloat(y.poin)||0;O.push({id:y.id,name:y.name,variantName:a,price:e?.price??y.price,img:i,qty:Te,unit:s,poTime:y.poTime||"",colorCode:e?.colorCode||"",poin:o})}if(be(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success"),La(!0),typeof window.changeView=="function"){try{window.history.replaceState({view:"view-checkout"},"",window.location.pathname)}catch{}window.changeView("view-checkout",!0)}},Zi=()=>{if(!y)return;const t=(n.store.wa||"").replace(/\D/g,"");if(!t)return h("Nomor WhatsApp toko belum diatur admin.");let e=t;e.startsWith("0")?e="62"+e.slice(1):e.startsWith("62")||(e="62"+e);const a=y.variants?.[Z],r=a?.name?` (Varian: ${a.name})`:"",s=a?.price??y.price,i=`Halo ${n.store.name||"Toko Putri"}, saya ingin bertanya tentang produk *${y.name}*${r} seharga ${w(s)}. Apakah produk ini siap kirim?`;typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),typeof window.openWhatsApp=="function"?window.openWhatsApp(e,i):window.open(`https://wa.me/${e}?text=${encodeURIComponent(i)}`,"_blank","noopener,noreferrer")},eo=()=>{if(y.variants?.length>0&&Z===null)return h("Pilih varian / warna terlebih dahulu!");const t=y.variants?.[Z],e=t?.name||null;if(Ce.find(a=>a.id===y.id&&a.variantName===e))return h("Sudah di Favorit!");Ce.push({id:y.id,name:y.name,variantName:e,price:t?.price??y.price,img:t?.img||y.img,colorCode:t?.colorCode||""}),ie("freshmart_wishlist",JSON.stringify(Ce)),typeof window.updWish=="function"&&window.updWish(),La(),h("Masuk Favorit ❤️")},to=()=>{if(!y)return;const t=window.location.origin+window.location.pathname+"?p="+y.id,e=y.name,a=`Cek produk ${y.name} di ${n.store.name} sekarang!`;if(navigator.share)navigator.share({title:e,text:a,url:t}).catch(r=>{console.log("User membatalkan share",r)});else if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).then(()=>h("Link produk berhasil disalin!")).catch(()=>h("Gagal menyalin link."));else{const r=document.createElement("textarea");r.value=t,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),h("Link produk berhasil disalin!")}},As=t=>{const e=x("product-modal-related-container");if(!e)return;if(!t||!n.products||!n.products.length){e.innerHTML="",e.classList.add("hidden");return}const a=String(t.id),r=(t.subCategory||"").trim().toLowerCase(),s=(t.category||"").trim().toLowerCase(),i=(t.brand||"").trim().toLowerCase(),l=n.products.filter(p=>!(!p||p.id==null||String(p.id)===a||p.isActive===!1||p.isActive==="false")).map(p=>{let m=0;const b=(p.subCategory||"").trim().toLowerCase(),f=(p.category||"").trim().toLowerCase(),g=(p.brand||"").trim().toLowerCase();return r&&b&&r===b&&(m+=6),s&&f&&s===f&&(m+=3),i&&g&&i===g&&(m+=2),{item:p,score:m}}).filter(p=>p.score>0);l.sort((p,m)=>m.score-p.score||(m.item.id||0)-(p.item.id||0));const d=l.slice(0,8).map(p=>p.item);if(!d.length){e.innerHTML="",e.classList.add("hidden");return}e.classList.remove("hidden");const c=d.map(p=>{const m=me(p.img,"w300-rw"),b=p.variants&&p.variants.length>0?Math.min(...p.variants.map(g=>parseFloat(g.price)||p.price)):p.price||0;let f=p.subCategory||p.brand||p.category||"";return`
        <div onclick="openProductModal('${u(p.id)}')" class="group cursor-pointer shrink-0 w-[145px] sm:w-[165px] bg-slate-50 dark:bg-slate-900/70 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-2.5 flex flex-col transition-all duration-300 hover:shadow-md hover:border-[var(--color-primary)]/40 hover:-translate-y-1 snap-start">
            <div class="relative aspect-square w-full rounded-xl bg-white overflow-hidden mb-2 border border-slate-100 dark:border-slate-700/50 flex items-center justify-center">
                <img loading="lazy" decoding="async" src="${u(m)}" alt="${u(p.name)}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.onerror=null;this.src='https://placehold.co/300?text=No+Image'">
                ${f?`<span class="absolute top-1.5 left-1.5 bg-slate-900/80 backdrop-blur-xs text-white text-[7.5px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md truncate max-w-[85%] uppercase tracking-wider">${u(f)}</span>`:""}
            </div>
            <h5 class="text-[11px] font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-tight mb-1.5 group-hover:text-[var(--color-primary)] transition-colors uppercase">${u(p.name)}</h5>
            <div class="mt-auto flex items-baseline justify-between pt-1">
                <span class="text-xs font-extrabold text-[var(--color-primary)] tracking-tight">${w(b)}</span>
                <span class="text-[9px] font-bold text-slate-400 group-hover:text-[var(--color-primary)] uppercase transition-colors">Lihat <i class="fa-solid fa-arrow-right text-[8px] ml-0.5"></i></span>
            </div>
        </div>`}).join("");e.innerHTML=`
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
        ${c}
    </div>`};let _e=null,vt=0,Ee=1;const ir=t=>{const e=n.products.find(o=>String(o.id)===String(t));if(!e)return;_e=e,Ee=1;const a=n.store.useStock===!0||n.store.useStock==="true";let r=0;if(e.variants&&e.variants.length>0){const o=e.variants.findIndex(l=>{const d=l.isActive!==!1&&l.isActive!=="false",c=parseFloat(l.stock)||0;return d&&(!a||c>0)});r=o>=0?o:0}vt=r,Ts();const s=x("quick-variant-modal"),i=x("quick-variant-content");s&&i&&(s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("quickVariant"),cs(s,i)),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Ar=(t=!1)=>{const e=x("quick-variant-modal"),a=x("quick-variant-content");if(e&&a){const r=()=>{us(e,a)};typeof window.requestCloseModal=="function"?window.requestCloseModal("quickVariant",t,r):r()}},ao=t=>{!_e||!_e.variants||!_e.variants[t]||(vt=t,Ts(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},ro=t=>{if(!_e)return;const e=n.store.useStock===!0||n.store.useStock==="true",a=_e.variants?.[vt],r=e?parseFloat(a?.stock)||0:1/0;Ee=Math.min(r,Math.max(1,Ee+t));const i=x("quick-variant-qty-input");i&&(i.value=Ee),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Ts=()=>{if(!_e)return;const t=_e,e=t.variants?.[vt],a=n.store.useStock===!0||n.store.useStock==="true",r=x("quick-variant-img");r&&(r.src=me(e?.img||t.img||"","w300-rw")),Q("quick-variant-title",t.name);const s=e?.price??t.price;Q("quick-variant-price",w(s));const i=parseFloat(e?.stock)||0,o=x("quick-variant-stock");o&&(a?(o.innerText=i>0?`Sisa: ${i} ${e?.unit||t.unit||"pcs"}`:"Stok Habis",o.className=`text-[10px] font-bold ${i>0?"text-slate-400 dark:text-slate-500":"text-rose-500"}`):(o.innerText="Tersedia",o.className="text-[10px] font-bold text-emerald-500"));const l=x("quick-variant-selected-name");l&&(l.innerText=e?`Varian: ${e.name}`:"Pilih Varian");const d=x("quick-variant-qty-input");d&&(d.value=Ee);const c=x("quick-variant-options");c&&t.variants&&(c.innerHTML=t.variants.map((f,g)=>{const k=f.isActive!==!1&&f.isActive!=="false",S=parseFloat(f.stock)||0,A=a&&S<=0,T=k&&!A,H=g===vt;let E="";T?H?E="bg-[rgba(var(--color-primary-rgb),0.1)] border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-xs ring-1 ring-[var(--color-primary)]/40":E="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[var(--color-primary)]/40":E="bg-slate-100 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-400 opacity-50 cursor-not-allowed";const Y=f.colorCode?`<span class="w-3.5 h-3.5 rounded-full shrink-0 border border-black/10 shadow-xs" style="background-color: ${u(f.colorCode)}"></span>`:"";return`
                <button ${T?"":"disabled"} onclick="selectQuickVariant(${g})" class="px-3 py-2 rounded-xl text-xs font-bold border transition-all active:scale-95 flex items-center gap-2 cursor-pointer ${E}">
                    ${Y}
                    <span class="${T?"":"line-through"}">${u(f.name)}</span>
                    ${A?'<span class="text-[9px] text-rose-500 font-bold ml-1">Habis</span>':""}
                </button>
            `}).join(""));const p=a&&i<=0,m=x("quick-variant-btn-cart"),b=x("quick-variant-btn-buy");m&&b&&(p?(m.disabled=!0,b.disabled=!0,m.classList.add("opacity-50","cursor-not-allowed"),b.classList.add("opacity-50","cursor-not-allowed")):(m.disabled=!1,b.disabled=!1,m.classList.remove("opacity-50","cursor-not-allowed"),b.classList.remove("opacity-50","cursor-not-allowed")))},so=(t=null)=>{if(!_e)return;const e=_e,a=e.variants?.[vt];if(!a)return h("Pilih varian terlebih dahulu");const r=n.store.useStock===!0||n.store.useStock==="true",s=parseFloat(a.stock)||0,i=a.name,o=O.find(m=>m.id===e.id&&m.variantName===i),l=o&&parseFloat(o.qty)||0;if(r&&Ee+l>s)return h(`Stok tidak cukup! Tersisa: ${s}`);const d=a.unit||e.unit||"pcs",c=a.img||e.img;if(o)o.qty=parseFloat((o.qty+Ee).toFixed(2)),o.unit=d;else{const m=a&&parseFloat(a.poin)>0?parseFloat(a.poin):parseFloat(e.poin)||0;O.push({id:e.id,name:e.name,variantName:i,price:a.price||e.price,img:c,qty:Ee,unit:d,poTime:e.poTime||"",colorCode:a.colorCode||"",poin:m})}be(),typeof analytics<"u"&&analytics.logEvent("add_to_cart",{item_id:e.id,item_name:e.name,quantity:Ee});const p=t instanceof HTMLElement?t:x("quick-variant-img");typeof window.flyToCartAnimation=="function"?window.flyToCartAnimation(p,"#bnav-cart",c):typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),Ar(),h(`"${e.name} (${i})" masuk ke keranjang`,"success")},io=()=>{if(!_e)return;const t=_e,e=t.variants?.[vt];if(!e)return h("Pilih varian terlebih dahulu");const a=n.store.useStock===!0||n.store.useStock==="true",r=parseFloat(e.stock)||0,s=e.name,i=O.find(c=>c.id===t.id&&c.variantName===s),o=i&&parseFloat(i.qty)||0;if(a&&Ee+o>r)return h(`Stok tidak cukup! Tersisa: ${r}`);const l=e.unit||t.unit||"pcs",d=e.img||t.img;if(i)i.qty=parseFloat((i.qty+Ee).toFixed(2)),i.unit=l;else{const c=e&&parseFloat(e.poin)>0?parseFloat(e.poin):parseFloat(t.poin)||0;O.push({id:t.id,name:t.name,variantName:s,price:e.price||t.price,img:d,qty:Ee,unit:l,poTime:t.poTime||"",colorCode:e.colorCode||"",poin:c})}if(be(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy"),Ar(!0),typeof window.changeView=="function"){try{window.history.replaceState({view:"view-checkout"},"",window.location.pathname)}catch{}window.changeView("view-checkout",!0)}};window.openProductModal=Pr;window.closeProductModal=La;window.renderRelatedProducts=As;window.previewVariant=Ui;window.previewProductImage=Gi;window.closeVariantPreviewModal=qi;window.changeSlide=Wi;window.rProdMod=Ea;window.uMPP=_a;window.updateModalQty=zi;window.handleModalQtyChange=Qi;window.selectVariant=Ji;window.confirmAddProductToCart=Yi;window.confirmAddToWishlist=eo;window.shareProduct=to;window.buyNowProduct=Xi;window.chatWAAboutProduct=Zi;window.openQuickVariantSheet=ir;window.closeQuickVariantSheet=Ar;window.selectQuickVariant=ao;window.updateQuickVariantQty=ro;window.quickVariantAddToCart=so;window.quickVariantBuyNow=io;let Yr=null;const Me=()=>{const t=qe!=="Semua Produk"||st!=="Semua Merek"||Kt!==""||Ne!=="Semua Jenis";at("dynamic-banners-container","hidden",t);const e=n.store.showRewardCatalog!==!1&&n.store.showRewardCatalog!=="false"&&(n.rewards||[]).some(d=>d.isActive!=="false"&&d.isActive!==!1);at("reward-catalog-container","hidden",t||!e),at("dynamic-vouchers-container","hidden",t),at("dynamic-categories-container","hidden",t),at("dynamic-brands-container","hidden",t);const a=n.store.showCategories!==!1&&n.store.showCategories!=="false",r=n.store.showBrands!==!1&&n.store.showBrands!=="false";at("sec-categories","hidden",t||!a),at("sec-brands","hidden",t||!r);let s=x("dynamic-active-filter");if(!s){let d=x("product-container");d&&(d.insertAdjacentHTML("beforebegin",'<div id="dynamic-active-filter" class="transition-all w-full"></div>'),s=x("dynamic-active-filter"))}if(s)if(t){let d="Menampilkan",c="",p="fa-filter",m="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30";Kt!==""?(d="Hasil Pencarian",c=`"${Kt}"`,p="fa-magnifying-glass",m="text-rose-500 bg-rose-50 dark:bg-rose-900/30"):qe!=="Semua Produk"?(d="Kategori Pilihan",c=qe+(Ne!=="Semua Jenis"?` • ${Ne}`:""),p="fa-layer-group",m="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30"):st!=="Semua Merek"?(d="Merek Pilihan",c=st,p="fa-tag",m="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30"):Ne!=="Semua Jenis"&&(d="Sub-Kategori",c=Ne,p="fa-shapes",m="text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30");let b="";if(qe!=="Semua Produk"){const f=n.products.filter(S=>S.isActive!==!1&&S.isActive!=="false"&&S.category===qe),g={};f.forEach(S=>{const A=(S.subCategory||"").trim();A&&(g[A]=(g[A]||0)+1)});const k=Object.keys(g).sort().map(S=>({name:S,count:g[S]}));k.length>0&&(b=`
                    <div class="pt-2 border-t border-slate-100 dark:border-slate-700/60">
                        <div class="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1.5 flex items-center gap-1.5">
                            <i class="fa-solid fa-shapes text-[var(--color-primary)]"></i>
                            <span>Pilih Jenis / Sub-Kategori:</span>
                        </div>
                        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar -mx-1 px-1">
                            <button onclick="filterSubCategory('Semua Jenis')" class="shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${Ne==="Semua Jenis"?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}">
                                Semua Jenis
                            </button>
                            ${k.map(S=>`
                                <button onclick="filterSubCategory('${u(S.name).replace(/'/g,"\\'")}')" class="shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${Ne===S.name?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}">
                                    <span>${u(S.name)}</span>
                                    <span class="text-[10px] px-1.5 py-0.2 rounded-full ${Ne===S.name?"bg-white/20 text-white":"bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">${S.count}</span>
                                </button>
                            `).join("")}
                        </div>
                    </div>`)}s.innerHTML=`
            <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 flex flex-col gap-2.5 mb-5 shadow-sm">
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-3 overflow-hidden">
                        <div class="w-10 h-10 rounded-xl ${m} flex items-center justify-center shrink-0"><i class="fa-solid ${p} text-lg"></i></div>
                        <div class="flex flex-col min-w-0 pr-2">
                            <span class="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest">${d}</span>
                            <span class="text-sm font-bold text-slate-800 dark:text-white truncate leading-tight mt-0.5">${u(c)}</span>
                        </div>
                    </div>
                    <button onclick="resetSemuaFilter()" class="shrink-0 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 w-10 h-10 flex items-center justify-center rounded-xl font-bold shadow-sm hover:bg-rose-50 hover:text-rose-500 hover:border-rose-200 transition-all active:scale-95 group"><i class="fa-solid fa-xmark text-lg group-hover:rotate-90 transition-transform duration-300"></i></button>
                </div>
                ${b}
            </div>`,s.classList.remove("hidden")}else s.innerHTML="",s.classList.add("hidden");let i=n.products.filter(d=>{if(d.isActive===!1||d.isActive==="false"||qe!=="Semua Produk"&&d.category!==qe||Ne!=="Semua Jenis"&&d.subCategory!==Ne||st!=="Semua Merek"&&d.brand!==st)return!1;if(!Kt)return!0;let c=Kt.toLowerCase();return(d.name||"").toLowerCase().includes(c)||(d.sku||"").toLowerCase().includes(c)||(d.category||"").toLowerCase().includes(c)||(d.subCategory||"").toLowerCase().includes(c)||(d.brand||"").toLowerCase().includes(c)||d.variants&&d.variants.some(p=>(p.name||"").toLowerCase().includes(c)||(p.sku||"").toLowerCase().includes(c))}).sort((d,c)=>{if(Vt==="cheapest")return(d.price||0)-(c.price||0);if(Vt==="expensive")return(c.price||0)-(d.price||0);if(Vt==="az")return(d.name||"").localeCompare(c.name||"");if(Vt==="za")return(c.name||"").localeCompare(d.name||"");if(Vt==="oldest")return(d.id||0)-(c.id||0);if(n.productOrder&&n.productOrder.length){const p=new Map(n.productOrder.map((k,S)=>[String(k),S])),m=d&&d.id!=null?String(d.id):"",b=c&&c.id!=null?String(c.id):"",f=p.has(m),g=p.has(b);if(f&&g)return p.get(m)-p.get(b);if(f)return-1;if(g)return 1}return(c.id||0)-(d.id||0)});const o=x("product-container");if(!o)return;if(o.className=qr==="grid"?"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8":"flex flex-col gap-3 sm:gap-4",!i.length){o.innerHTML='<div class="col-span-full text-center py-16 sm:py-24 text-slate-500 dark:text-slate-400 font-bold bg-slate-50 dark:bg-slate-800/50 rounded-[1.5rem] border border-slate-200 border-dashed dark:border-slate-700 text-sm sm:text-base flex flex-col items-center justify-center"><div class="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm mb-4"><i class="fa-solid fa-box-open text-3xl sm:text-4xl text-slate-300 dark:text-slate-600"></i></div>Maaf, produk tidak ditemukan.<br><span class="text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 font-normal">Coba gunakan kata kunci pencarian yang berbeda atau hapus filter.</span></div>',K("load-more-container");return}const l=i.slice(0,ms*di);o.innerHTML=l.map(d=>{let c="";const p=n.store.useStock===!0||n.store.useStock==="true";let m="";if(p){const G=d.variants&&d.variants.length?d.variants.filter(F=>F.isActive!==!1&&F.isActive!=="false").reduce((F,q)=>F+(parseFloat(q.stock)||0),0):parseFloat(d.stock)||0;G<=0?c='<div class="absolute inset-0 bg-white/75 dark:bg-slate-900/75 z-20 flex items-center justify-center rounded-2xl"><span class="bg-slate-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-lg uppercase tracking-widest"><i class="fa-solid fa-ban mr-1"></i> HABIS</span></div>':G<=5?m=`<span class="absolute top-2 left-2 z-10 bg-rose-500 text-white text-[8px] font-bold px-2 py-1 rounded-xl shadow uppercase tracking-wider"><i class="fa-solid fa-fire mr-0.5"></i> SISA ${G}</span>`:m=`<span class="absolute top-2 left-2 z-10 bg-slate-800/90 text-white text-[8px] font-bold px-2 py-1 rounded-xl shadow uppercase tracking-wider"><i class="fa-solid fa-box mr-0.5"></i> Stok ${G}</span>`}const b=!c,f=b?"cursor-pointer hover:shadow-md hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40":"cursor-not-allowed",g=b?"cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40":"cursor-not-allowed";let k="",S="";d.priceNormal&&d.priceNormal>d.price&&(k=`<span class="bg-rose-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-tags"></i> -${Math.round((d.priceNormal-d.price)/d.priceNormal*100)}%</span>`,S=`<p class="text-[10px] text-slate-600 dark:text-slate-400 line-through mb-0.5 font-bold">${w(d.priceNormal)}</p>`);let A=d.poTime?`<span class="bg-amber-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${u(d.poTime)}</span>`:"",T="";if(d.variants&&d.variants.length){const G=d.variants.map(F=>parseFloat(F.poin)||0).filter(F=>F>0);if(G.length){const F=[...new Set(G)];T=F.length===1?`<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> +${F[0]} Poin</span>`:'<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> Dapat Poin</span>'}}else parseFloat(d.poin)>0&&(T=`<span class="bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> +${parseFloat(d.poin)} Poin</span>`);const H=d.variants&&d.variants.length?d.variants.reduce((G,F)=>G+(parseFloat(F.totalSold)||0),0):parseFloat(d.totalSold)||0,E=H>0?`<span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-fire-flame-curved text-orange-400"></i> ${H} Terjual</span>`:"";let Y=`<div class="mb-2.5 flex flex-wrap gap-1.5 items-center overflow-hidden shrink-0">
            ${k}
            ${A}
            ${T}
            ${E}
            ${d.subCategory?`<span class="bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-shapes"></i> ${u(d.subCategory)}</span>`:""}
            ${d.tag?`<span class="bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] dark:bg-[var(--color-primary-dark)]/50 dark:text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-hashtag"></i> ${u(d.tag)}</span>`:""}
            <span class="accent-badge px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-circle-check"></i> Official</span>
            ${d.brand?`<span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-tag"></i> ${u(d.brand)}</span>`:""}
            ${d.wholesale?.length&&!d.variants?.length?'<span class="amber-badge px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-layer-group"></i> Grosir</span>':""}
        </div>`,U=`<span class="text-[9px] text-slate-600 dark:text-slate-400 font-bold ml-0.5 mb-0.5 uppercase tracking-wide">/${u(d.unit||"PCS")}</span>`;return qr==="grid"?`
            <a href="?p=${d.id}" class="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-[1.5rem] shadow-soft ${f} transition-all duration-300 flex flex-col group relative overflow-hidden text-left" onclick="event.preventDefault(); openProductModal('${u(d.id)}')">
                ${c}
                <div class="relative aspect-square w-full bg-white flex items-center justify-center shrink-0 border-b border-slate-100 dark:border-slate-700/50">
                      ${m}
                      <img loading="lazy" decoding="async" src="${u(me(d.img,"w300-rw"))}" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${c?"grayscale opacity-50":""}">
                </div>
                <div class="flex-1 flex flex-col p-3 sm:p-4 min-w-0 bg-white dark:bg-slate-800 relative z-10">
                    ${Y}
                    <h4 class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug mb-2 group-hover:text-[var(--color-primary)] transition-colors uppercase">${u(d.name)}</h4>
                    <div class="flex items-end justify-between mt-auto pt-1">
                        <div>
                            ${d.variants&&d.variants.length>0?"":S}
                            <p class="text-[var(--color-primary)] font-bold text-sm sm:text-[15px] leading-none tracking-tight">
                                ${d.variants&&d.variants.length>0?'<span class="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">PILIH VARIAN</span>':w(d.price)}
                            </p>
                            ${d.variants&&d.variants.length>0?"":U}
                        </div>
                        <button type="button" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110 active:scale-90 shadow-sm cursor-pointer z-20" onclick="quickAddOrOpenProduct(event, '${u(d.id)}')" title="Tambah ke Keranjang">
                            <i class="fa-solid fa-plus text-xs sm:text-sm"></i>
                        </button>
                    </div>
                </div>
            </a>`:`
            <a href="?p=${d.id}" class="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-[1.5rem] shadow-soft ${g} transition-all duration-300 flex items-stretch p-2.5 sm:p-3 gap-3 sm:gap-4 group relative overflow-hidden text-left" onclick="event.preventDefault(); openProductModal('${u(d.id)}')">
                ${c}
                <div class="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center p-2 border border-slate-100 dark:border-slate-700/50 overflow-hidden">
                    ${m}
                    <img loading="lazy" decoding="async" src="${u(me(d.img,"w300-rw"))}" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'" class="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 ${c?"grayscale opacity-50":""}">
                </div>
                <div class="flex-1 min-w-0 py-1 flex flex-col justify-center h-full relative z-10 pr-2">
                    ${Y}
                    <h4 class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug mb-1.5 group-hover:text-[var(--color-primary)] transition-colors uppercase">${u(d.name)}</h4>
                    <div class="flex items-end justify-between mt-auto pt-1">
                        <div>
                            ${d.variants&&d.variants.length>0?"":S}
                            <p class="text-[var(--color-primary)] font-bold text-sm sm:text-[15px] leading-none tracking-tight">
                                ${d.variants&&d.variants.length>0?'<span class="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">PILIH VARIAN</span>':w(d.price)}
                            </p>
                            ${d.variants&&d.variants.length>0?"":U}
                        </div>
                        <button type="button" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110 active:scale-90 shadow-sm mr-1 cursor-pointer z-20" onclick="quickAddOrOpenProduct(event, '${u(d.id)}')" title="Tambah ke Keranjang">
                            <i class="fa-solid fa-plus text-xs sm:text-sm"></i>
                        </button>
                    </div>
                </div>
            </a>`}).join(""),l.length<i.length?V("load-more-container"):K("load-more-container")},oo=(t,e)=>{t&&(t.preventDefault(),t.stopPropagation());const a=n.products.find(d=>String(d.id)===String(e));if(!a)return;if(a.variants&&a.variants.length>0){typeof ir=="function"?ir(e):typeof window.openQuickVariantSheet=="function"?window.openQuickVariantSheet(e):Pr(e);return}const r=n.store.useStock===!0||n.store.useStock==="true",s=parseFloat(a.stock)||0;if(r&&s<=0)return h("Stok produk ini sedang kosong");const i=O.find(d=>d.id===a.id&&!d.variantName),o=i&&parseFloat(i.qty)||0;if(r&&o+1>s)return h(`Maksimal stok tercapai: ${s}`);if(i)i.qty=parseFloat((i.qty+1).toFixed(2));else{const d=parseFloat(a.poin)>0?parseFloat(a.poin):0;O.push({id:a.id,name:a.name,variantName:null,price:a.price,img:a.img,qty:1,unit:a.unit||"pcs",poTime:a.poTime||"",colorCode:"",poin:d})}be();const l=t?.currentTarget||t?.target;typeof window.flyToCartAnimation=="function"?window.flyToCartAnimation(l,"#bnav-cart",a.img):typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),h(`+1 ${a.name} Masuk Keranjang`,"success")},no=()=>{const t=x("product-container");if(!t)return;const e=6;let a="";for(let r=0;r<e;r++)a+=`
        <div class="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-[1.5rem] shadow-soft p-3 sm:p-4 flex flex-col space-y-3 overflow-hidden">
            <div class="aspect-square w-full rounded-2xl skeleton-shimmer"></div>
            <div class="h-3 w-16 rounded-full skeleton-shimmer"></div>
            <div class="h-3.5 w-full rounded-md skeleton-shimmer"></div>
            <div class="h-3 w-3/4 rounded-md skeleton-shimmer"></div>
            <div class="mt-auto pt-2 flex items-center justify-between">
                <div class="h-5 w-20 rounded-md skeleton-shimmer"></div>
                <div class="w-7 h-7 rounded-full skeleton-shimmer"></div>
            </div>
        </div>`;t.className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8",t.innerHTML=a},lo=t=>{gs(qe===t&&t!=="Semua Produk"?"Semua Produk":t),kr("Semua Jenis"),et(1),typeof window.rDyn=="function"&&window.rDyn();const e=document.querySelector("#view-catalog .scroll-content");e&&setTimeout(()=>e.scrollTo({top:0,behavior:"smooth"}),10)},co=t=>{kr(Ne===t?"Semua Jenis":t),et(1),Me();const e=document.querySelector("#view-catalog .scroll-content");e&&setTimeout(()=>e.scrollTo({top:0,behavior:"smooth"}),10)},po=t=>{bs(st===t&&t!=="Semua Merek"?"Semua Merek":t),et(1),typeof window.rDyn=="function"&&window.rDyn();const e=document.querySelector("#view-catalog .scroll-content");e&&setTimeout(()=>e.scrollTo({top:0,behavior:"smooth"}),10)},uo=()=>{gs("Semua Produk"),kr("Semua Jenis"),bs("Semua Merek"),fs(""),et(1),typeof window.rDyn=="function"&&window.rDyn()},mo=t=>{clearTimeout(Yr),Yr=setTimeout(()=>{fs(t),et(1),Me()},300)},go=t=>{ci(t),et(1),Me()},bo=t=>{pi(t),et(1),x("btn-view-grid")&&(x("btn-view-grid").className=t==="grid"?"w-8 h-8 rounded-xl flex items-center justify-center text-[var(--color-primary)] bg-white dark:bg-slate-700 shadow-sm transition-all":"w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-all"),x("btn-view-list")&&(x("btn-view-list").className=t==="list"?"w-8 h-8 rounded-xl flex items-center justify-center text-[var(--color-primary)] bg-white dark:bg-slate-700 shadow-sm transition-all":"w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-all"),Me()},fo=()=>{et(ms+1),Me()};window.rCat=Me;window.filterCategory=lo;window.filterSubCategory=co;window.filterBrand=po;window.resetSemuaFilter=uo;window.handleSearch=mo;window.handleSort=go;window.toggleView=bo;window.loadMoreProducts=fo;window.quickAddOrOpenProduct=oo;window.renderCatalogSkeleton=no;const Tr={products:[{key:"name",label:"Nama Produk",type:"text"},{key:"sku",label:"Barcode / SKU (Kosongkan utk Auto)",type:"text"},{key:"price",label:"Harga Jual Promo (Rp)",type:"number"},{key:"priceNormal",label:"Harga Coret / Normal (Rp) - Opsional",type:"number"},{key:"hpp",label:"Harga Modal / HPP (Rp) — Hanya Seller",type:"number"},{key:"poin",label:"Poin Member (per unit terjual, Produk Tanpa Varian)",type:"number"},{key:"stock",label:"Stok Awal (Qty) — Aktif jika Manajemen Stok ON",type:"number"},{key:"unit",label:"Satuan Dasar (Cth: Pcs, Kg)",type:"text"},{key:"poTime",label:"Estimasi Pre-Order (Opsional)",type:"text"},{key:"video",label:"Link Video YouTube (Opsional)",type:"text"},{key:"img",label:"URL Gambar",type:"text"},{key:"category",label:"Kategori",type:"dynamic_select_category"},{key:"subCategory",label:"Jenis / Sub-Kategori (Cth: Cat Tembok, Pipa PVC, Power Tools)",type:"text"},{key:"brand",label:"Merek",type:"dynamic_select_brand"},{key:"tag",label:"Label/Tag",type:"text"},{key:"isActive",label:"Status",type:"select",options:[{val:"true",text:"Tersedia"},{val:"false",text:"Habis"}]},{key:"desc",label:"Deskripsi Lengkap",type:"richtext"},{key:"specTable",label:"Tabel Spesifikasi (Opsional)",type:"spec_table_builder"},{key:"wholesale",label:"Grosir",type:"wholesale_builder"},{key:"variants",label:"Varian",type:"variants_builder"}],colors:[{key:"name",label:"Nama Warna",type:"text"},{key:"hex",label:"Kode Warna (Hex) - Opsional",type:"text"},{key:"catalog",label:"Katalog / Merek (Contoh: No Drop)",type:"text"}],categories:[{key:"name",label:"Kategori",type:"text"},{key:"img",label:"URL Ikon",type:"text"}],brands:[{key:"name",label:"Nama Merek",type:"text"},{key:"img",label:"URL Logo Merek",type:"text"}],banks:[{key:"bankName",label:"Nama Bank",type:"text"},{key:"bankAccount",label:"No. Rekening",type:"text"},{key:"bankOwner",label:"Atas Nama",type:"text"}],customers:[{key:"name",label:"Nama Lengkap",type:"text"},{key:"phone",label:"No. WhatsApp Aktif (Cth: 081234567890)",type:"text"},{key:"points",label:"Poin Member (Penyesuaian Manual)",type:"number"}],rewards:[{key:"name",label:"Nama Hadiah",type:"text"},{key:"img",label:"URL Gambar Hadiah",type:"text"},{key:"pointsCost",label:"Poin yang Dibutuhkan",type:"number"},{key:"stock",label:"Stok Hadiah Tersedia",type:"number"},{key:"isActive",label:"Status",type:"select",options:[{val:"true",text:"Aktif (Bisa Ditukar)"},{val:"false",text:"Nonaktif"}]}],banners:[{key:"title",label:"Judul Banner",type:"text"},{key:"desc",label:"Deskripsi Pendek (Opsional)",type:"textarea"},{key:"type",label:"Tipe Banner",type:"select",options:[{val:"image",text:"🖼 Gambar (Default)"},{val:"video",text:"🎬 Video (Drive / YouTube / MP4)"}]},{key:"img",label:"URL Gambar (jika Tipe = Gambar)",type:"text"},{key:"videoUrl",label:"URL / Link Video (Google Drive, YouTube, atau MP4)",type:"text"},{key:"link",label:"Link Tujuan Klik (Opsional)",type:"text"}],vouchers:[{key:"code",label:"Kode Voucher (Cth: MERDEKA50)",type:"text"},{key:"type",label:"Jenis Diskon",type:"select",options:[{val:"percent",text:"Potongan Persen (%)"},{val:"flat",text:"Potongan Rupiah (Rp)"},{val:"shipping_free",text:"Gratis Ongkir (100%)"},{val:"shipping_flat",text:"Potongan Ongkir (Rp)"}]},{key:"value",label:"Nilai Potongan (Contoh: 50 untuk %, atau 10000 untuk Rp)",type:"number"},{key:"minPurchase",label:"Syarat Minimal Belanja (Rp) - 0 Jika Tidak Ada",type:"number"},{key:"maxDiscount",label:"Maksimal Nominal Potongan (Rp) - Khusus Tipe Persen",type:"number"},{key:"targetProduct",label:"Target Produk Spesifik (Pilih jika berlaku khusus)",type:"dynamic_select_products"},{key:"isShow",label:"Tampilkan di Beranda?",type:"select",options:[{val:"true",text:"Ya, Tampilkan Promo"},{val:"false",text:"Sembunyikan"}]}]};window.aF=Tr;let Jt=null,wa=!1,or=!1;const nr=t=>{or=!!t,typeof window<"u"&&(window.__isLoggingIn=or)},$s=()=>or||typeof window<"u"&&!!window.__isLoggingIn,ho=()=>{if(typeof navigator>"u")return"Perangkat Lain";const t=navigator.userAgent||"",e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t);let a="Perangkat";/iPhone|iPad|iPod/i.test(t)?a="iPhone/iPad":/Android/i.test(t)?a="HP Android":/Windows/i.test(t)?a="Desktop Windows":/Mac/i.test(t)?a="Mac/MacBook":/Linux/i.test(t)?a="Linux PC":a=e?"Smartphone":"Komputer Desktop";let r="Browser";return/Edg/i.test(t)?r="Edge":/Chrome/i.test(t)?r="Chrome":/Safari/i.test(t)?r="Safari":/Firefox/i.test(t)&&(r="Firefox"),`${a} (${r})`},Cs=async(t=null)=>{const e=typeof P<"u"&&P?P:window.db;if(!e)return null;const a=t||localStorage.getItem("freshmart_admin_session_id")||"sess_"+Date.now()+"_"+Math.random().toString(36).substring(2,9),r=ho();try{return localStorage.setItem("freshmart_admin_session_id",a),await e.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").set({sessionId:a,deviceName:r,loginAt:ye.firestore.FieldValue.serverTimestamp(),lastActive:ye.firestore.FieldValue.serverTimestamp()}),wa=!1,a}catch(s){return console.warn("Gagal mengklaim sesi admin aktif:",s),null}},xo=t=>{let e=document.getElementById("session-kicked-modal");e||(e=document.createElement("div"),e.id="session-kicked-modal",e.className="fixed inset-0 z-[150] bg-slate-900/80 flex items-center justify-center p-4 transition-opacity duration-300",document.body.appendChild(e)),e.innerHTML=`
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
                <b class="text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-900/20 px-2.5 py-1 rounded-lg mt-1.5 inline-block">${t}</b>
            </p>
            <p class="text-[11px] text-slate-400 dark:text-slate-500 mb-6 leading-normal bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <i class="fa-solid fa-shield-halved text-amber-500 mr-1"></i>
                Untuk mencegah konflik data dan menjaga keamanan toko, sistem hanya mengizinkan 1 perangkat aktif mengelola CMS pada satu waktu.
            </p>
            <button id="btn-session-kicked-ok" class="btn-primary w-full py-3.5 text-sm !rounded-xl font-bold flex items-center justify-center gap-2 shadow-glow">
                <i class="fa-solid fa-arrow-left"></i> Kembali ke Toko
            </button>
        </div>
    `,e.style.display="flex",e.style.opacity="1";const a=document.getElementById("btn-session-kicked-ok");a&&(a.onclick=()=>{e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250)})},Ba=()=>{if(Jt)return;const t=typeof P<"u"&&P?P:window.db;!t||!localStorage.getItem("freshmart_admin_session_id")||(wa=!1,Jt=t.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").onSnapshot(async a=>{if(!a.exists)return;const r=a.data(),s=r.sessionId,i=localStorage.getItem("freshmart_admin_session_id");if(s&&i&&s!==i){if(wa)return;wa=!0,Na(),localStorage.removeItem("freshmart_admin_session_id");const o=r.deviceName||"Perangkat Lain";try{window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,$e&&typeof $e.signOut=="function"&&await $e.signOut()}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog"),xo(o)}},a=>{console.warn("Admin session guard listener error:",a)}))},Na=()=>{Jt&&(Jt(),Jt=null)},Ms=async()=>{if($s())return!0;const t=typeof P<"u"&&P?P:window.db;if(!t)return!0;const e=localStorage.getItem("freshmart_admin_session_id");if(!e)try{return!(await t.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").get()).exists}catch{return!0}try{const a=await t.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").get();return a.exists?a.data().sessionId===e:!0}catch{return!0}};typeof window<"u"&&(window.claimAdminSession=Cs,window.attachAdminSessionGuard=Ba,window.detachAdminSessionGuard=Na,window.isCurrentSessionActive=Ms,window.setLoggingIn=nr,window.isLoggingIn=$s);const ko=async()=>{const t=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";if(window.isAdm||t){if(!await Ms()&&$e.currentUser){Na(),localStorage.removeItem("freshmart_admin_session_id"),await $e.signOut(),window.isAdm=!1,window.__localIsAdm=!1,h("Sesi Admin telah diambil alih oleh perangkat lain."),Le("login-username",""),Le("login-password",""),typeof window.changeView=="function"&&window.changeView("view-admin-login");return}if(window.__localIsAdm=!0,typeof window.changeView=="function"&&window.changeView("view-admin"),Ba(),$e.currentUser)Aa();else{const a=$e.onAuthStateChanged(()=>{a(),Aa()})}}else Le("login-username",""),Le("login-password",""),typeof window.changeView=="function"&&window.changeView("view-admin-login")},Aa=()=>{Ba();const t=document.querySelector("#view-admin .scroll-content");t&&(t.scrollTop=0),V("admin-dashboard-view"),K("admin-content-view"),K("btn-admin-back"),V("admin-logo-box"),Q("admin-header-title","CMS SELLER"),hs(""),window.cTab="";try{history.state&&history.state.tab&&history.replaceState({view:"view-admin"},"",window.location.href)}catch{}ut&&(ut(),ra(null)),lt&&(lt(),Wt(null)),dt&&(dt(),zt(null)),Is(ui),$r()},$r=()=>{const t=x("admin-menu-tax-btn");if(!t)return;n.store.ppnEnabled===!0||n.store.ppnEnabled==="true"?(t.classList.remove("hidden"),t.classList.add("flex")):(t.classList.add("hidden"),t.classList.remove("flex"))},Oa=()=>{const t=n.store.useStock===!0||n.store.useStock==="true";let e=0,a=0,r=0,s=0,i=0,o=0;return(n.products||[]).forEach(l=>{if(l.variants&&l.variants.length)l.variants.forEach(d=>{const c=d.isActive!==!1&&d.isActive!=="false",p=parseFloat(d.stock)||0;c&&(!t||p>0)?r++:s++,i+=(parseFloat(d.hpp)||0)*p,o+=(parseFloat(d.price)||0)*p});else{const d=l.isActive!==!1&&l.isActive!=="false",c=parseFloat(l.stock)||0;d&&(!t||c>0)?e++:a++,i+=(parseFloat(l.hpp)||0)*c,o+=(parseFloat(l.price)||0)*c}}),{activeProd:e,inactiveProd:a,activeVar:r,inactiveVar:s,assetHpp:i,assetJual:o}},Xr=new Map,wo=2*60*1e3,Is=async(t="month")=>{if(mi(t),document.querySelectorAll(".report-period-btn").forEach(m=>{const b=m.dataset.period===t;m.style.background=b?"var(--color-primary)":"transparent",m.style.color=b?"var(--color-primary-contrast, #fff)":"",m.style.boxShadow=b?"0 2px 8px rgba(var(--color-primary-rgb),0.35)":"none"}),!x("admin-report-container"))return;const a=({totalPenjualan:m,totalHppTerjual:b,totalDiskonProduk:f,orderCount:g,truncated:k})=>{const S=m-b,A=S-f,T={today:"Hari Ini",week:"Minggu Ini",month:"Bulan Ini",all:"Sepanjang Waktu"}[t]||"";j("admin-report-container",`
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Total Penjualan (${T})</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white truncate">${w(m)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">${g} pesanan${k?" (≥3000, dibatasi)":""}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1.5"><i class="fa-solid fa-arrow-trend-up mr-1"></i>Laba Kotor</p>
                    <p class="text-lg sm:text-xl font-bold text-[var(--color-primary)] truncate">${w(S)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Penjualan − HPP Terjual</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-rose-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-tag mr-1"></i>Total HPP Terjual</p>
                    <p class="text-lg sm:text-xl font-bold text-rose-500 truncate">${w(b)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Modal barang yang laku</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-sack-dollar mr-1"></i>Laba Bersih</p>
                    <p class="text-lg sm:text-xl font-bold truncate" style="color:var(--color-primary)">${w(A)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Laba Kotor − Diskon</p>
                </div>
            </div>
        `)},r=Xr.get(t);if(r&&Date.now()-r.timestamp<wo){a(r.data);return}j("admin-report-container",'<div class="text-center py-10"><i class="fa-solid fa-spinner fa-spin text-2xl text-slate-300"></i></div>');let s=null;const i=new Date;if(t==="today")s=new Date(i.getFullYear(),i.getMonth(),i.getDate());else if(t==="week"){const m=i.getDay(),b=m===0?6:m-1;s=new Date(i.getFullYear(),i.getMonth(),i.getDate()-b)}else t==="month"&&(s=new Date(i.getFullYear(),i.getMonth(),1));let o=0,l=0,d=0,c=0,p=!1;try{if(!$e.currentUser){j("admin-report-container",'<div class="text-center py-10 text-slate-400"><i class="fa-solid fa-lock text-2xl mb-3"></i><p class="text-xs font-bold">Login terlebih dahulu untuk melihat laporan.</p></div>');return}let m=P.collection("freshmart_orders");s&&(m=m.where("timestamp",">=",ye.firestore.Timestamp.fromDate(s)));const b=await m.limit(3e3).get();p=b.size>=3e3,b.forEach(g=>{const k=g.data();k.status!=="Dibatalkan"&&(c++,o+=parseFloat(k.payment?.subtotal)||0,d+=parseFloat(k.payment?.productDiscount)||0,(k.items||[]).forEach(S=>{const A=S.hpp!==void 0&&S.hpp!==null?parseFloat(S.hpp):typeof window.getEffHpp=="function"?window.getEffHpp(S):0;l+=(parseFloat(A)||0)*(parseFloat(S.qty)||0)}))});const f={totalPenjualan:o,totalHppTerjual:l,totalDiskonProduk:d,orderCount:c,truncated:p};Xr.set(t,{data:f,timestamp:Date.now()}),a(f)}catch(m){console.error("Gagal memuat laporan penjualan:",m)}},vo=async()=>{const t=M("login-username"),e=M("login-password");if(!t||!e)return h("Email & Password wajib diisi!");nr(!0),R("Verifikasi Login...");try{const a="sess_"+Date.now()+"_"+Math.random().toString(36).substring(2,9);localStorage.setItem("freshmart_admin_session_id",a);const s=(await $e.signInWithEmailAndPassword(t,e)).user||$e.currentUser;if(!s||s.uid!==Mi){const i=s?s.uid:"null";throw await $e.signOut(),localStorage.removeItem("freshmart_admin_session_id"),new Error("UID_MISMATCH: "+i)}await Cs(a),Ba(),window.isAdm=!0,history.replaceState({view:"view-admin"},"",window.location.href),typeof window.changeView=="function"&&window.changeView("view-admin",!0),Aa(),h("Login Berhasil!")}catch(a){if(console.error(a),localStorage.removeItem("freshmart_admin_session_id"),a.message&&a.message.startsWith("UID_MISMATCH:")){const r=a.message.replace("UID_MISMATCH: ","");h("Login Ditolak: UID Anda ("+r+") tidak cocok dengan ADMIN_UID!")}else h("Login Ditolak: Email atau Password salah!")}finally{nr(!1),L()}},Ds=async()=>{R("Keluar...");try{Na(),localStorage.removeItem("freshmart_admin_session_id"),await $e.signOut(),window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,typeof window.updateProBadge=="function"&&window.updateProBadge(),ut&&(ut(),ra(null)),lt&&(lt(),Wt(null)),dt&&(dt(),zt(null)),h("Berhasil Logout"),typeof window.changeView=="function"&&window.changeView("view-catalog")}catch{h("Gagal Logout")}finally{L()}},yo=()=>{Ze("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{Ds()},"Ya, Keluar")};window.checkAdminAccess=ko;window.openAdminMenu=Aa;window.toggleTaxMenuVisibility=$r;window.computeInventoryStats=Oa;window.loadAdminReport=Is;window.processAdminLogin=vo;window.logoutAdmin=Ds;window.confirmLogoutAdmin=yo;const So=async()=>{if(!de||de.length===0)return h("Belum ada data pesanan!");R("Menyiapkan modul Excel...");try{await xs("https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js",()=>typeof XLSX<"u")}catch{L(),h("Gagal memuat modul Excel. Cek koneksi internet Anda.");return}L();let t=[];de.forEach((o,l)=>{let d=o.dateString?new Date(o.dateString).toLocaleString("id-ID"):"-",c=o.customer?.name||"Anonim",p=o.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko";o.isDropPoint&&(p="📍 Lokasi Berbeda");let m=o.status||"-",b=o.items?o.items.reduce((g,k)=>g+(parseFloat(k.qty)||0),0):0,f=o.payment?.grandTotal||0;t.push({No:l+1,"ID Pesanan":o.orderId,Tanggal:d,"Nama Pelanggan":c,"Tipe Pelanggan":o.customerType==="Member"?"⭐ Member":"👤 Pelanggan Umum","No. WhatsApp":o.customer?.wa?`+${o.customer.wa}`:"-","Metode Kirim":p,Status:m,"Total Item":b,"Total Tagihan (Rp)":f})});const e=XLSX.utils.json_to_sheet(t),a=XLSX.utils.book_new();XLSX.utils.book_append_sheet(a,e,"Laporan Pesanan");const r=[{wch:5},{wch:25},{wch:22},{wch:25},{wch:18},{wch:18},{wch:15},{wch:15},{wch:12},{wch:20}];e["!cols"]=r;const i=`Laporan_Pesanan_${new Date().toISOString().split("T")[0]}.xlsx`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"){const o=XLSX.write(a,{bookType:"xlsx",type:"base64"});window.AndroidNativeApp.saveOrShareFile(o,i,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")}else XLSX.writeFile(a,i);h("Laporan Excel (.xlsx) berhasil diunduh!")},Po=()=>{try{const t=new(window.AudioContext||window.webkitAudioContext),e=t.createOscillator(),a=t.createGain();e.connect(a),a.connect(t.destination),e.type="sine",e.frequency.setValueAtTime(800,t.currentTime),a.gain.setValueAtTime(1,t.currentTime),e.frequency.setValueAtTime(600,t.currentTime+.2),e.frequency.setValueAtTime(800,t.currentTime+.6),a.gain.setValueAtTime(1,t.currentTime+.6),e.frequency.setValueAtTime(600,t.currentTime+.8),a.gain.exponentialRampToValueAtTime(1e-5,t.currentTime+1.5),e.start(t.currentTime),e.stop(t.currentTime+1.5)}catch{}},Ao=()=>{j("admin-content",`
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
    `);const t=()=>{ut&&(ut(),ra(null));let e=!0;const a=P.collection("freshmart_orders").orderBy("timestamp","desc").limit(100).onSnapshot(r=>{if(Wr([]),!e){let i=!1;r.docChanges().forEach(o=>{o.type==="added"&&o.doc.data().status==="Baru"&&(i=!0)}),i&&(h("🔔 Pesanan Baru Masuk!"),Po())}if(e=!1,r.empty){j("admin-orders-list",'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-receipt text-5xl mb-4 opacity-30"></i>Belum ada pesanan</div>'),Q("stat-orders",0);return}Q("stat-orders",r.size+(r.size===100?"+":""));const s=[];j("admin-orders-list",r.docs.map(i=>{const o=i.data();s.push(o);let l="text-slate-500 border-slate-200 dark:border-slate-600",d="fa-clock",c="bg-slate-50 dark:bg-slate-700/50",p="text-slate-400";o.status==="Baru"?(l="text-rose-500 border-rose-200 bg-rose-50 dark:bg-rose-900/20 dark:border-rose-800 animate-pulse",d="fa-asterisk",c="bg-rose-500",p="text-white shadow-md shadow-rose-500/30"):o.status==="Diproses"?(l="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30",d="fa-spinner fa-spin",c="primary-bg",p="shadow-sm"):o.status==="Selesai"?(l="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30",d="fa-check-double",c="primary-bg-soft",p="primary-text"):o.status==="Dibatalkan"&&(l="text-slate-400 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",d="fa-xmark",c="bg-slate-100 dark:bg-slate-800",p="text-slate-400");let m="fa-wallet text-slate-400",b=o.payment?.method||"";b==="transfer"?m="fa-building-columns text-[var(--color-primary)]":b==="qris"?m="fa-qrcode text-purple-500":b==="cod"?m="fa-hand-holding-dollar text-[var(--color-primary)]":b==="cashier"&&(m="fa-cash-register text-amber-500");let f=o.items?parseFloat(o.items.reduce((S,A)=>S+(parseFloat(A.qty)||0),0).toFixed(2)):0;const g=o.dateString?new Date(o.dateString).toLocaleDateString("id-ID",{day:"numeric",month:"short"}):"",k=(o.orderId||"").split("-").pop();return`
                <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-primary)] transition-all duration-300" onclick="openOrderDetail('${o.orderId}')">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${c} ${p} flex items-center justify-center shrink-0 transition-colors">
                            <i class="fa-solid fa-receipt text-xl sm:text-2xl"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex justify-between items-start mb-1">
                                <div class="flex items-center gap-2">
                                    <span class="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 tracking-tight">#${k}</span>
                                    <span class="text-[9px] font-bold px-2 py-0.5 rounded border ${l} uppercase tracking-widest flex items-center"><i class="fa-solid ${d} mr-1"></i> ${u(o.status)}</span>
                                </div>
                                <span class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5 whitespace-nowrap"><i class="fa-regular fa-calendar"></i> <span class="hidden sm:inline">${g}</span></span>
                            </div>
                            <div class="flex items-center gap-2 mt-1.5">
                                <p class="text-xs font-bold text-slate-600 dark:text-slate-300 truncate max-w-[120px] sm:max-w-xs"><i class="fa-solid fa-user text-slate-400 mr-1"></i> ${u(o.customer?.name||"Anonim")}</p>
                                <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0"></span>
                                <span class="text-[9px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-xl border border-slate-200 dark:border-slate-700 uppercase tracking-widest shrink-0">${f} Item</span>
                                <span class="text-[9px] font-bold ${o.customerType==="Member"?"text-amber-600 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800":"text-slate-500 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"} px-2 py-0.5 rounded-xl uppercase tracking-widest shrink-0">${o.customerType==="Member"?'<i class="fa-solid fa-star text-amber-500 mr-1"></i>Member':"Umum"}</span>
                                ${o.customer?.lat?'<span class="text-[9px] font-bold text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] px-1.5 py-0.5 rounded-xl border border-[rgba(var(--color-primary-rgb),0.2)] uppercase tracking-widest shrink-0"><i class="fa-solid fa-location-dot"></i> GPS</span>':""}
                                ${o.buktiPayment?'<span class="text-[9px] font-bold text-violet-500 bg-violet-50 dark:bg-violet-900/20 px-1.5 py-0.5 rounded-xl border border-violet-100 dark:border-violet-800 uppercase tracking-widest shrink-0"><i class="fa-solid fa-image"></i></span>':""}
                            </div>
                        </div>
                        <div class="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:primary-bg transition-all shrink-0" style="transition: background-color 0.2s, color 0.2s">
                            <i class="fa-solid fa-chevron-right text-sm"></i>
                        </div>
                    </div>
                    <div class="w-full border-t border-dashed border-slate-200 dark:border-slate-700 my-4"></div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-[var(--color-primary)] text-lg sm:text-xl tracking-tight">${w(o.payment?.grandTotal)}</span>
                            ${o.payment?.ppnAmount?`<span class="text-[8px] font-bold bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800 uppercase tracking-widest">PPN ${o.payment.ppnRate||11}%</span>`:""}
                        </div>
                        <div class="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-700">
                            <i class="fa-solid ${m} text-xs"></i>
                            <span class="text-[9px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">${u(b)}</span>
                        </div>
                    </div>
                </div>`}).join("")),Wr(s)},()=>{j("admin-orders-list",'<div class="text-center text-rose-500 font-bold">Koneksi terputus. Retrying...</div>'),setTimeout(t,5e3)});ra(a)};t()},Cr=t=>{const e=de.find(s=>s.orderId===t);if(!e)return;gi(t);let a=`<div class="relative w-full sm:w-40 mt-1"><select onchange="updateOrderStatus('${e.orderId}', this.value)" class="w-full text-sm font-bold ${e.status==="Baru"?"text-rose-600 bg-rose-50 border-rose-200":e.status==="Diproses"?"text-blue-600 bg-blue-50 border-blue-200":e.status==="Selesai"?"text-emerald-600 bg-emerald-50 border-emerald-200":"text-slate-500 bg-slate-50 border-slate-200"} border px-4 py-2.5 rounded-xl focus:outline-none appearance-none cursor-pointer transition-colors shadow-sm"><option value="Baru" ${e.status==="Baru"?"selected":""} class="text-slate-800">Baru (Pending)</option><option value="Diproses" ${e.status==="Diproses"?"selected":""} class="text-slate-800">Diproses</option><option value="Selesai" ${e.status==="Selesai"?"selected":""} class="text-slate-800">Selesai</option><option value="Dibatalkan" ${e.status==="Dibatalkan"?"selected":""} class="text-slate-800">Dibatalkan</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 ${e.status==="Baru"?"text-rose-400":e.status==="Diproses"?"text-blue-400":e.status==="Selesai"?"text-emerald-400":"text-slate-400"} pointer-events-none text-xs"></i></div>`;j("admin-order-modal-content",`
        <div class="flex flex-col gap-4 text-sm pb-2">
            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row justify-between gap-5 sm:items-center">
                <div class="flex-1">
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-crosshairs text-[var(--color-primary)]"></i> Status</p>
                    ${a}
                </div>
                <div class="text-left sm:text-right flex flex-col justify-center">
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">ID Pesanan</p>
                    <p class="text-sm sm:text-base font-bold text-slate-900 dark:text-white break-all tracking-wide">#${e.orderId}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1.5">${e.dateString?new Date(e.dateString).toLocaleString("id-ID"):""}</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-start">
            <div class="flex flex-col gap-4">

            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 class="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center border border-blue-100 dark:border-blue-800"><i class="fa-solid fa-user"></i></div> Data Pemesan</h4>
                <div class="space-y-4">
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold">Nama</span><span class="font-bold text-slate-900 dark:text-white text-base">${u(e.customer?.name||"-")}</span></div>
                    ${e.customer?.wa?`<div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5"><i class="fa-brands fa-whatsapp text-green-500"></i> WhatsApp</span><a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${u(e.customer.wa)}'); else window.open('https://wa.me/${u(e.customer.wa)}', '_blank', 'noopener,noreferrer');" class="font-bold text-green-600 dark:text-green-400 hover:underline cursor-pointer">+${u(e.customer.wa)}</a></div>`:""}
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold">Tipe Pemesan</span><span class="text-xs font-bold px-2.5 py-1 rounded-lg ${e.customerType==="Member"?"bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-300 dark:border-amber-700":"bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"}">${e.customerType==="Member"?"⭐ Member Resmi":"👤 Pelanggan Umum"}</span></div>
                    ${e.customer?.wa&&e.customerType!=="Member"?`<button type="button" onclick="saveOrderCustomerToDB('${u(e.customer.name||"")}','${u(e.customer.wa)}','${u(e.orderId)}')" class="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-95 text-white shadow-md shadow-amber-500/20 text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all"><i class="fa-solid fa-address-book"></i> + Konfirmasi &amp; Daftarkan Sebagai Member</button>`:""}
                    ${e.customerType==="Member"?'<div class="w-full py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2"><i class="fa-solid fa-circle-check"></i> Terverifikasi — Data Member Terkunci</div>':""}
                    <div class="border-t border-dashed border-slate-200 dark:border-slate-700 pt-4">
                        <span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2 mb-2.5"><i class="fa-solid fa-map-location-dot"></i> Alamat Pemesan (${e.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko"})</span>
                        <div class="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner text-sm">${u(e.customer?.address||"-")}</div>
                        ${e.customer?.lat&&e.customer?.deliveryMethod==="delivery"&&!e.isDropPoint?`<a href="https://www.google.com/maps?q=${u(e.customer.lat)},${u(e.customer.lng)}" target="_blank" class="mt-3 flex items-center justify-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-blue-100 transition-colors"><i class="fa-solid fa-location-dot"></i> Buka Lokasi Pembeli di Google Maps</a>`:""}
                    </div>
                    ${e.isDropPoint&&e.dropPoint?`<div class="border-2 border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.04)] dark:bg-[rgba(var(--color-primary-rgb),0.1)] rounded-xl p-4 mt-2">
                        <p class="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3 flex items-center gap-1.5"><i class="fa-solid fa-location-pin-lock"></i> 📍 DIKIRIM KE LOKASI BERBEDA</p>
                        <div class="space-y-2">
                            <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Nama Penerima</span><span class="font-bold text-slate-900 dark:text-white">${u(e.dropPoint.name||"-")}</span></div>
                            ${e.dropPoint.wa?`<div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs flex items-center gap-1"><i class="fa-brands fa-whatsapp text-green-500"></i> WA Penerima</span><a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${u(e.dropPoint.wa)}'); else window.open('https://wa.me/${u(e.dropPoint.wa)}', '_blank', 'noopener,noreferrer');" class="font-bold text-green-600 dark:text-green-400 hover:underline cursor-pointer">+${u(e.dropPoint.wa)}</a></div>`:""}
                            <div class="border-t border-[var(--color-primary)]/15 pt-2 mt-2">
                                <span class="text-slate-500 dark:text-slate-400 font-bold text-xs block mb-1.5">Alamat Tujuan Pengiriman</span>
                                <div class="bg-white dark:bg-slate-800 p-3 rounded-xl border border-[var(--color-primary)]/20 font-bold text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner text-sm">${u(e.dropPoint.address||"-")}</div>
                                ${e.dropPoint.lat?`<a href="https://www.google.com/maps?q=${u(e.dropPoint.lat)},${u(e.dropPoint.lng)}" target="_blank" class="mt-2 flex items-center justify-center gap-2 bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-[rgba(var(--color-primary-rgb),0.18)] transition-colors"><i class="fa-solid fa-location-dot"></i> Buka Lokasi Tujuan di Google Maps</a>`:""}
                                ${e.dropPoint.wa?`<button type="button" onclick="konfirmasiKeWAPenerima('${e.orderId}')" class="mt-2.5 w-full py-2 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"><i class="fa-brands fa-whatsapp text-sm"></i> Notifikasi Pengiriman ke WA Penerima</button>`:""}
                            </div>
                        </div>
                    </div>`:""}
                    ${e.customer?.note?`<div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800 mt-2"><p class="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-note-sticky"></i> Catatan Pembeli</p><p class="text-sm text-amber-900 dark:text-amber-100 font-bold">${u(e.customer.note)}</p></div>`:""}
                    ${e.buktiPayment?`<div class="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl border border-violet-200 dark:border-violet-800 mt-2"><p class="text-[10px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2.5"><i class="fa-solid fa-image"></i> Bukti Pembayaran</p><a href="${u(e.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border border-violet-200 dark:border-violet-800"><img src="${u(e.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-48 object-cover" onerror="this.style.display='none'" loading="lazy"><div class="bg-violet-100 dark:bg-violet-900/40 py-2 text-center text-[10px] font-bold text-violet-600 dark:text-violet-400"><i class="fa-solid fa-arrow-up-right-from-square mr-1"></i> Tap untuk buka</div></a></div>`:""}
                </div>
            </div>

            </div>

            <div class="flex flex-col gap-4">

            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 class="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl primary-light-icon-box flex items-center justify-center border border-slate-200 dark:border-slate-700"><i class="fa-solid fa-box-open"></i></div> Rincian Item</h4>
                <div class="space-y-3">${e.items.map(s=>`
                    <div class="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
                        <div class="flex items-center gap-3 min-w-0">
                            <div class="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0"><i class="fa-solid fa-tag text-sm"></i></div>
                            <div class="min-w-0">
                                <p class="font-bold text-sm text-slate-900 dark:text-white truncate mb-1" title="${u(s.name)}">${u(s.name)}</p>
                                ${s.variantName||s.poTime?`
                                <div class="flex flex-wrap gap-1 mb-1">
                                    ${s.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg border border-slate-300 dark:border-slate-600 text-[9px] font-bold">${u(s.variantName)}</span>`:""}
                                    ${s.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${u(s.poTime)}</span>`:""}
                                </div>
                                `:""}
                                <p class="text-[11px] text-slate-500 dark:text-slate-400 font-bold">${parseFloat(s.qty)} ${u(s.unit||"pcs")} x ${w(s.effectivePrice)}</p>
                            </div>
                        </div>
                        <div class="font-bold text-sm text-slate-900 dark:text-white ml-3 shrink-0">${w(s.effectivePrice*parseFloat(s.qty))}</div>
                    </div>`).join("")}
                </div>
            </div>

            ${e.claimedReward?`
            <div class="bg-violet-50 dark:bg-violet-900/10 p-5 sm:p-6 rounded-[1.5rem] border border-violet-200 dark:border-violet-800 shadow-sm">
                <h4 class="font-bold text-violet-700 dark:text-violet-400 text-sm border-b border-violet-200 dark:border-violet-800 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl bg-violet-100 dark:bg-violet-900/40 text-violet-500 flex items-center justify-center border border-violet-200 dark:border-violet-800"><i class="fa-solid fa-gift"></i></div> Klaim Hadiah</h4>
                <div class="space-y-3">
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Hadiah</span><span class="font-bold text-violet-700 dark:text-violet-400 text-sm">${u(e.claimedReward.name)}</span></div>
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Poin Ditukar</span><span class="font-bold text-slate-800 dark:text-white text-sm">${e.claimedReward.pointsCost} Poin</span></div>
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Status</span><span class="font-bold text-xs px-2 py-1 rounded-xl ${e.claimedReward.status==="ready"?"bg-emerald-100 text-emerald-600":e.claimedReward.status==="waiting_stock"?"bg-amber-100 text-amber-600":"bg-slate-200 text-slate-600"}">${bi(e.claimedReward)}</span></div>
                    ${e.claimedReward.note?`<div class="bg-white/70 dark:bg-slate-900/40 p-2.5 rounded-xl text-[11px] italic text-violet-600 dark:text-violet-400">"${u(e.claimedReward.note)}"</div>`:""}
                    <div class="border-t border-dashed border-violet-200 dark:border-violet-800 pt-3.5 mt-1 space-y-2.5">
                        <button type="button" onclick="ackRewardClaim('${e.orderId}','ready')" class="w-full py-2.5 rounded-xl primary-bg text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i class="fa-solid fa-check"></i> Stok Ada — Kirim Bersama Pesanan</button>
                        <button type="button" onclick="ackRewardClaim('${e.orderId}','waiting_stock')" class="w-full py-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i class="fa-solid fa-clock"></i> Stok Kosong — Tunda Pengiriman</button>
                    </div>
                </div>
            </div>`:""}

            <div class="bg-slate-900 p-6 sm:p-7 rounded-[1.5rem] text-white shadow-xl shadow-slate-900/20 border border-slate-700/60 relative overflow-hidden group mt-2">
                <div class="absolute -top-10 -right-10 w-32 h-32 primary-blur-orb rounded-full blur-3xl pointer-events-none transition-all duration-700"></div>
                
                <div class="flex justify-between items-center border-b border-slate-700/80 pb-4 mb-4 relative z-10">
                    <h4 class="font-bold text-[11px] uppercase tracking-widest text-slate-300 flex items-center gap-2.5"><i class="fa-solid fa-wallet text-[var(--color-primary)] text-sm"></i> Ringkasan Bayar</h4>
                    <span class="bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] font-bold tracking-widest border border-white/10 uppercase shadow-inner text-white">${u(e.payment?.method||"").toUpperCase()}</span>
                </div>
                
                <div class="space-y-3 font-medium text-sm text-slate-300 relative z-10">
                    <div class="flex justify-between items-center"><span>Subtotal Produk</span><span class="font-bold text-white">${w(e.payment?.subtotal)}</span></div>
                    ${e.customer?.deliveryMethod==="delivery"?`<div class="flex justify-between items-center"><span>Ongkos Kirim</span><span class="font-bold text-white">${w(e.payment?.shippingCost)}</span></div>`:""}
                    ${e.payment?.shippingDiscount?`<div class="flex justify-between items-center text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.15)] px-2 py-1 -mx-2 rounded-xl"><span>Diskon Ongkir</span><span class="font-bold">-${w(e.payment.shippingDiscount)}</span></div>`:""}
                    ${e.payment?.productDiscount?`<div class="flex justify-between items-center text-rose-400 bg-rose-900/20 px-2 py-1 -mx-2 rounded-xl"><span>Diskon Promo</span><span class="font-bold">-${w(e.payment.productDiscount)}</span></div>`:""}
                    ${(()=>{if(!e.payment?.ppnAmount||e.payment.ppnAmount<=0)return"";const s=e.payment.ppnType==="inclusive",i=e.payment.ppnRate||11,o=e.payment.ppnAmount,l=(e.payment.subtotal||0)-(e.payment.productDiscount||0)+(e.payment.shippingCost||0)-(e.payment.shippingDiscount||0),d=e.payment.dppAmount||(s?Math.round(l*100/(100+i)):Math.max(0,l));return`
                        <div class="flex justify-between items-center text-slate-400"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-bold text-white">${w(d)}</span></div>
                        <div class="flex justify-between items-center text-amber-400 bg-amber-900/20 px-2 py-1 -mx-2 rounded-xl"><span>${s?"Termasuk PPN":"PPN"} (${i}%)</span><span class="font-bold">${s?"":"+"}${w(o)}</span></div>
                        `})()}
                </div>
                
                <div class="border-t border-dashed border-slate-600/60 my-5 relative z-10"></div>
                
                <div class="flex justify-between items-end relative z-10">
                    <span class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Tagihan</span>
                    <span class="text-3xl font-bold text-[var(--color-primary)] tracking-tight font-extrabold">${w(e.payment?.grandTotal)}</span>
                </div>
            </div>

            </div>
            </div>
        </div>`);const r=x("admin-order-modal");r&&r.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminOrder"),V("admin-order-modal"),setTimeout(()=>{x("admin-order-modal")&&x("admin-order-modal").classList.remove("opacity-0"),x("admin-order-modal-box")&&x("admin-order-modal-box").classList.remove("scale-95")},10)},To=async(t,e,a=null)=>{const s=(typeof window.normalizeWA=="function"?window.normalizeWA:i=>String(i||"").replace(/\D/g,"").replace(/^0/,"62"))(e);if(!s||s.length<10)return h("Nomor WA tidak valid!");R("Menyimpan...");try{const i=P.collection("freshmart").doc("cms_data").collection("customers").doc(s),o=await i.get();if(o.exists){h(`⚠️ Nomor ini sudah terdaftar atas nama: ${o.data().name}`),L();return}if(await i.set({id:parseInt(s,10),name:t||"-",phone:s,points:0,registeredAt:Date.now()}),a){await P.collection("freshmart_orders").doc(a).update({customerType:"Member"});const l=de.findIndex(d=>d.orderId===a);l!==-1&&(de[l].customerType="Member")}h("✅ Pelanggan berhasil didaftarkan sebagai Member!"),a&&typeof window.openOrderDetail=="function"&&setTimeout(()=>window.openOrderDetail(a),400)}catch(i){console.error("Gagal simpan pelanggan:",i),h("Gagal menyimpan data pelanggan: "+(i.message||""))}finally{L()}},$o=async(t,e)=>{if(e==="waiting_stock"&&typeof window.customPrompt=="function"){window.customPrompt("Catatan untuk pelanggan:","Stok hadiah kosong, akan kami kirim susulan begitu stok tersedia kembali.",async r=>{if(r!==null){R("Menyimpan...");try{await P.collection("freshmart_orders").doc(t).update({"claimedReward.status":e,"claimedReward.note":r||""}),h("Status klaim hadiah diperbarui!");let s=de.findIndex(i=>i.orderId===t);s!==-1&&(de[s].claimedReward||(de[s].claimedReward={}),de[s].claimedReward.status=e,de[s].claimedReward.note=r||""),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(t)}catch(s){h("Gagal update klaim: "+s.message)}finally{L()}}});return}let a="";R("Menyimpan...");try{await P.collection("freshmart_orders").doc(t).update({"claimedReward.status":e,"claimedReward.note":a});const r=de.find(s=>s.orderId===t);r&&(r.claimedReward.status=e,r.claimedReward.note=a,Cr(t)),h("Status hadiah diperbarui!")}catch(r){console.error("Gagal update status hadiah:",r),h("Gagal update status hadiah: "+(r.message||""))}finally{L()}},js=(t=!1)=>{const e=()=>{x("admin-order-modal")&&x("admin-order-modal").classList.add("opacity-0"),x("admin-order-modal-box")&&x("admin-order-modal-box").classList.add("scale-95"),setTimeout(()=>K("admin-order-modal"),300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminOrder",t,e):e()},Co=async(t,e)=>{if(!ja){mt(!0),R("Update...");try{await P.collection("freshmart_orders").doc(t).update({status:e});let a=de.find(r=>r.orderId===t);a&&(a.status=e),Cr(t),h("Status diupdate!")}catch{h("Gagal!")}finally{mt(!1),L()}}},Mo=async t=>{if(!t)return h("ID pesanan tidak valid!");R("Memuat data...");try{const e=await P.collection("freshmart_orders").doc(t).get();if(L(),!e.exists)return h("Data pesanan tidak ditemukan!");const a=e.data(),r=a.customer&&a.customer.wa;if(!r)return h("Nomor WhatsApp pelanggan tidak tersedia!");const s=n&&n.store&&n.store.name?n.store.name:"Toko Putri",i=a.customer&&a.customer.name?a.customer.name:"Pelanggan",o=a.status||"Baru",l=a.payment&&a.payment.grandTotal?w(a.payment.grandTotal):"-",d=a.payment&&a.payment.method?a.payment.method.toUpperCase():"-";let c="";a.isDropPoint&&a.dropPoint&&(c=`
📍 *Alamat Pengantaran (Drop-Point):*
👤 Penerima di Lokasi: *${a.dropPoint.name||"-"}* (+${a.dropPoint.wa||"-"})
🏠 Alamat Tujuan: ${a.dropPoint.address||"-"}
`);const p=`Halo *${i}*! 👋

Terima kasih telah berbelanja di *${s}*. 🛒

*Detail Pesanan Anda:*
📋 ID: *#${t.split("-").pop()}*
💰 Total: *${l}*
💳 Pembayaran: *${d}*
📦 Status: *${o}*
`+c+`
Kami akan segera memproses pesanan Anda. Terima kasih! 🙏`;typeof window.openWhatsApp=="function"?window.openWhatsApp(r,p):window.open(`https://wa.me/${r}?text=${encodeURIComponent(p)}`,"_blank","noopener,noreferrer")}catch{L(),h("Gagal memuat data pesanan!")}},Io=async t=>{if(!t)return h("ID pesanan tidak valid!");R("Memuat data...");try{const e=await P.collection("freshmart_orders").doc(t).get();if(L(),!e.exists)return h("Data pesanan tidak ditemukan!");const a=e.data(),r=a.dropPoint&&a.dropPoint.wa;if(!r)return h("Nomor WhatsApp penerima tujuan tidak tersedia!");const s=n&&n.store&&n.store.name?n.store.name:"Toko Putri",i=a.dropPoint&&a.dropPoint.name?a.dropPoint.name:"Penerima",o=a.customer&&a.customer.name?a.customer.name:"Pemesan",l=a.dropPoint&&a.dropPoint.address?a.dropPoint.address:"-",d=a.status||"Diproses",c=`Halo *${i}*! 👋

Kami dari *${s}* menginformasikan bahwa ada pesanan barang dari *${o}* yang akan dikirimkan ke lokasi Anda:

📋 No. Pesanan: *#${t.split("-").pop()}*
🏠 Alamat Tujuan: ${l}
📦 Status: *${d}*

Mohon konfirmasi atau pastikan ada yang menerima barang di lokasi tujuan saat kurir tiba. Terima kasih! 🙏`;typeof window.openWhatsApp=="function"?window.openWhatsApp(r,c):window.open(`https://wa.me/${r}?text=${encodeURIComponent(c)}`,"_blank","noopener,noreferrer")}catch{L(),h("Gagal memuat data pesanan!")}},Do=t=>{Ze("Hapus Pesanan","Yakin ingin hapus permanen?",async()=>{if(!ja){mt(!0),R("Menghapus...");try{await P.collection("freshmart_orders").doc(t).delete(),h("Terhapus!"),fi===t&&js()}catch{h("Gagal!")}finally{mt(!1),L()}}})};window.exportOrdersToExcel=So;window.rAdmOrd=Ao;window.openOrderDetail=Cr;window.saveOrderCustomerToDB=To;window.ackRewardClaim=$o;window.closeOrderDetailModal=js;window.updateOrderStatus=Co;window.konfirmasiKeWA=Mo;window.konfirmasiKeWAPenerima=Io;window.deleteOrder=Do;const jo=()=>{const t=n.store.name||"Toko Grosir",e=n.store.themeColor||"#10b981",a=(i,o,l=!1)=>{let d=document.querySelector(`meta[${l?"property":"name"}="${i}"]`);d||(d=document.createElement("meta"),l?d.setAttribute("property",i):d.setAttribute("name",i),document.head.appendChild(d)),d.setAttribute("content",o)};a("theme-color",e),a("mobile-web-app-capable","yes"),a("apple-mobile-web-app-capable","yes"),a("apple-mobile-web-app-status-bar-style","black-translucent"),a("apple-mobile-web-app-title",t),a("application-name",t),a("msapplication-TileColor",e),document.title=t,localStorage.setItem("freshmart_theme_color",e),n.store.uiTheme&&n.store.uiTheme!==localStorage.getItem("freshmart_ui_theme")&&(localStorage.setItem("freshmart_ui_theme",n.store.uiTheme),Nt(n.store.uiTheme));const r=n.store.bgStyle||localStorage.getItem("freshmart_bg_style")||"minimalist",s=n.store.bgCustomUrl!==void 0?n.store.bgCustomUrl:localStorage.getItem("freshmart_bg_custom_url")||"";Ot(r,s)},Ls=()=>{j("admin-content",`
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
    `)},Lo=t=>{const e=Lt[t][500],a=document.getElementById("set-ui-theme"),r=document.getElementById("set-theme-color"),s=document.getElementById("set-theme-color-picker");a&&(a.value=t),r&&(r.value=e),s&&(s.value=e),document.querySelectorAll(".preset-color-chip").forEach(l=>{l.classList.remove("ring-4","ring-offset-2","ring-slate-400","dark:ring-slate-500","scale-110"),l.querySelector(".check-icon")?.classList.add("hidden")});const i=document.getElementById(`preset-chip-${t}`);i&&(i.classList.add("ring-4","ring-offset-2","ring-slate-400","dark:ring-slate-500","scale-110"),i.querySelector(".check-icon")?.classList.remove("hidden"));const o=document.getElementById("custom-color-chip");if(o){o.style.background="";const l=o.querySelector("i");l&&(l.style.color="")}Nt(t,e)},Eo=t=>{let e=t;e==="dual_tone"&&(e="aurora_glow"),e==="geometric_3d"&&(e="tech_grid"),e==="diagonal_skew"&&(e="glass_studio");const a=document.getElementById("set-bg-style");a&&(a.value=e);const r=document.getElementById("set-bg-custom-url")?.value||"";document.querySelectorAll(".bg-mockup-card").forEach(i=>{i.classList.remove("active","border-[var(--color-primary)]","shadow-md","ring-2","ring-[var(--color-primary)]/20"),i.classList.add("border-slate-200","dark:border-slate-700/80");const o=i.querySelector(".active-check-badge");o&&o.classList.add("hidden")});const s=document.getElementById(`bg-opt-${e}`);if(s){s.classList.add("active","border-[var(--color-primary)]","shadow-md","ring-2","ring-[var(--color-primary)]/20"),s.classList.remove("border-slate-200","dark:border-slate-700/80");const i=s.querySelector(".active-check-badge");i&&i.classList.remove("hidden")}Ot(e,r)},_o=t=>{let e,a,r,s,i;if(t==="profile"){e="Profil Toko & Tampilan Visual",a="Kelola identitas utama toko, palet warna tema, model layout background, dan informasi legal",r="fa-store",s={line:"bg-[var(--color-primary)]",box:"bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)]"};const l=n.store.uiTheme||"emerald";let d=n.store.bgStyle||localStorage.getItem("freshmart_bg_style")||"minimalist";d==="dual_tone"&&(d="aurora_glow"),d==="geometric_3d"&&(d="tech_grid"),d==="diagonal_skew"&&(d="glass_studio");const c={emerald:"Emerald",teal:"Teal",lime:"Lime",cyan:"Cyan",sky:"Sky",blue:"Blue",indigo:"Indigo",violet:"Violet",purple:"Purple",fuchsia:"Fuchsia",pink:"Pink",rose:"Rose",red:"Red",orange:"Orange",amber:"Amber",yellow:"Yellow",green:"Green",slate:"Slate",stone:"Stone"},p=Object.keys(Lt).map(m=>{const b=Lt[m][500],f=c[m]||m,g=l===m;return`
                <button type="button" id="preset-chip-${m}" onclick="selectPresetTheme('${m}')" 
                        class="preset-color-chip w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 ${g?"ring-4 ring-offset-2 ring-slate-400 dark:ring-slate-500 scale-110":""}" 
                        style="background-color: ${b}; border: 1.5px solid rgba(0,0,0,0.08)" 
                        title="${f}">
                    <i class="check-icon fa-solid fa-check text-white text-[11px] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${g?"":"hidden"}"></i>
                </button>
            `}).join("");i=`
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
                        <input autocomplete='off' id="set-name" value="${u(n.store.name)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Toko Putri">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Slogan Toko</label>
                        <input autocomplete='off' id="set-slogan" value="${u(n.store.slogan)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Belanja Hemat & Segar Setiap Hari">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Logo Toko (Ikon Aplikasi PWA)</label>
                        <div class="flex gap-2">
                            <input autocomplete='off' id="set-logo" value="${u(n.store.logo)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm flex-1 text-xs" placeholder="URL Logo atau klik upload">
                            <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                                <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload
                                <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-logo')">
                            </label>
                        </div>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Email Resmi Toko</label>
                        <input autocomplete='off' id="set-email" value="${u(n.store.email||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="admin@tokoputri.com">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Deskripsi Lengkap Toko</label>
                    <textarea id="set-description" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Deskripsi profil toko yang tampil pada profil pelanggan dan informasi footer...">${u(n.store.description)}</textarea>
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
                <input type="hidden" id="set-theme-color" value="${u(n.store.themeColor||"#10b981")}">
                <div class="flex flex-wrap gap-3 pt-1">
                    ${p}
                    <div class="relative" title="Warna Kustom (Klik untuk pilih warna bebas)">
                        <label for="set-theme-color-picker" class="w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 border-2 border-dashed border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]" id="custom-color-chip">
                            <i class="fa-solid fa-pen text-slate-500 dark:text-slate-400 text-[11px]"></i>
                        </label>
                        <input type="color" id="set-theme-color-picker" value="${u(n.store.themeColor||"#10b981")}" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
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
                        <input autocomplete="off" id="set-bg-custom-url" value="${u(n.store.bgCustomUrl||"")}"
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
                        <input autocomplete='off' id="set-hours" value="${u(n.store.operationalHours||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Senin - Minggu (08:00 - 21:00 WIB)">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Teks Hak Cipta Footer</label>
                        <input autocomplete='off' id="set-credit" value="${u(n.store.footerCredit||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: Toko Putri © 2026. All Rights Reserved.">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Katalog Tukar Hadiah di Beranda</label>
                    <select id="set-show-reward-catalog" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                        <option value="true" ${n.store.showRewardCatalog!==!1?"selected":""}>Ya, Tampilkan Katalog Hadiah</option>
                        <option value="false" ${n.store.showRewardCatalog===!1?"selected":""}>Sembunyikan</option>
                    </select>
                </div>
            </div>
        `}else t==="catalog"?(e="Tampilan Kategori & Merek",a="Kelola tata letak, model navigasi slider, dan visibilitas kategori produk serta brand di beranda",r="fa-palette",s={line:"bg-blue-500",box:"bg-blue-50 dark:bg-blue-900/30 text-blue-500"},i=`
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
                            <option value="grid" ${n.store.categoryStyle==="grid"?"selected":""}>Grid Ikon (Kotak berjejer)</option>
                            <option value="pill" ${n.store.categoryStyle==="pill"?"selected":""}>Pill Horizontal Scroll (Kapsul geser)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Slider Kategori di Beranda</label>
                        <select id="set-show-categories" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${n.store.showCategories!==!1?"selected":""}>Tampilkan Slider Kategori</option>
                            <option value="false" ${n.store.showCategories===!1?"selected":""}>Sembunyikan</option>
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
                            <option value="logo" ${n.store.brandStyle==="logo"||!n.store.brandStyle?"selected":""}>Logo Kotak (Grid Visual)</option>
                            <option value="text" ${n.store.brandStyle==="text"?"selected":""}>Pill Horizontal Scroll (Kapsul teks)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tampilkan Slider Merek di Beranda</label>
                        <select id="set-show-brands" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${n.store.showBrands!==!1?"selected":""}>Tampilkan Slider Merek</option>
                            <option value="false" ${n.store.showBrands===!1?"selected":""}>Sembunyikan</option>
                        </select>
                    </div>
                </div>

                <div class="p-3 bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 rounded-xl text-[11px] text-indigo-700 dark:text-indigo-300 flex items-start gap-2">
                    <i class="fa-solid fa-circle-check text-indigo-500 mt-0.5"></i>
                    <span>Pelanggan dapat mengklik logo brand untuk langsung memfilter etalase hanya menampilkan barang dari merek tersebut.</span>
                </div>
            </div>
        `):t==="shipping"?(e="Pengiriman & Lokasi Toko",a="Atur nomor kontak admin, tarif dasar ongkir per kilometer, promo gratis ongkir, dan titik koordinat GPS toko",r="fa-motorcycle",s={line:"bg-amber-500",box:"bg-amber-50 dark:bg-amber-900/30 text-amber-500"},i=`
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
                        <input autocomplete='off' id="set-wa" value="${u(n.store.wa||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: 08123456789">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Ongkir per Kilometer (Rp)</label>
                        <input autocomplete='off' type="number" id="set-cost" value="${u(n.store.costPerKm||0)}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="Contoh: 2000">
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Alamat Lengkap Toko</label>
                    <textarea id="set-address" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" rows="2" placeholder="Nama jalan, nomor bangunan, RT/RW, kelurahan, kecamatan, kota/kabupaten...">${u(n.store.address||"")}</textarea>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Opsi Kirim ke Alamat (Kurir Toko)</label>
                        <select id="set-delivery-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${n.store.isDeliveryEnabled!==!1?"selected":""}>Aktif (Bisa diantar kurir)</option>
                            <option value="false" ${n.store.isDeliveryEnabled===!1?"selected":""}>Nonaktif (Hanya ambil di toko)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Opsi Ambil di Toko (Self Pickup)</label>
                        <select id="set-pickup-enabled" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="true" ${n.store.isPickupEnabled!==!1?"selected":""}>Aktif (Bisa ambil di kasir)</option>
                            <option value="false" ${n.store.isPickupEnabled===!1?"selected":""}>Nonaktif</option>
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
                            <option value="true" ${n.store.freeShippingMinSpendEnabled===!0||n.store.freeShippingMinSpendEnabled==="true"?"selected":""}>Aktif (Bebas ongkir otomatis)</option>
                            <option value="false" ${n.store.freeShippingMinSpendEnabled!==!0&&n.store.freeShippingMinSpendEnabled!=="true"?"selected":""}>Nonaktif</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Minimal Belanja (Rp)</label>
                        <input autocomplete='off' type="number" id="set-free-shipping-amount" value="${u(n.store.freeShippingMinSpendAmount||0)}" min="0" step="1000" placeholder="Contoh: 1000000" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
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
                            value="${u(n.store.lat&&n.store.lng?`${n.store.lat}, ${n.store.lng}`:"-7.82308507053985, 112.0988374794464")}"
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
                        <input autocomplete='off' id="set-lat" value="${u(n.store.lat||"-7.82308507053985")}" class="admin-input !py-2.5 bg-white dark:bg-slate-900 shadow-sm text-xs font-mono w-full" placeholder="-7.82308507053985" oninput="handleManualCoordChange()">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-600 dark:text-slate-400 mb-1 uppercase tracking-wider">Longitude Toko (Garis Bujur)</label>
                        <input autocomplete='off' id="set-lng" value="${u(n.store.lng||"112.0988374794464")}" class="admin-input !py-2.5 bg-white dark:bg-slate-900 shadow-sm text-xs font-mono w-full" placeholder="112.0988374794464" oninput="handleManualCoordChange()">
                    </div>
                </div>
            </div>
        `):t==="payment"?(e="Metode Pembayaran QRIS",a="Konfigurasi barcode QRIS resmi toko untuk penerimaan pembayaran instan via e-wallet dan m-banking",r="fa-qrcode",s={line:"bg-indigo-500",box:"bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500"},i=`
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
                        <input autocomplete='off' id="set-qris-url" value="${u(n.payment?.qrisUrl||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm flex-1 text-xs" placeholder="URL file gambar QRIS atau klik tombol upload di kanan">
                        <label class="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-4 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold text-xs">
                            <i class="fa-solid fa-cloud-arrow-up mr-1.5"></i> Upload QRIS
                            <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-qris-url')">
                        </label>
                    </div>
                </div>

                <!-- PREVIEW BOX QRIS -->
                ${n.payment?.qrisUrl?`
                    <div class="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl flex flex-col sm:flex-row items-center gap-4 shadow-sm">
                        <div class="p-2 bg-white rounded-xl border border-slate-200 dark:border-slate-600 shadow-inner">
                            <img src="${u(n.payment.qrisUrl)}" alt="Preview QRIS" class="w-28 h-28 object-contain rounded-lg">
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
        `):t==="config"?(e="Sistem & Integrasi Cloud",a="Konfigurasi jembatan endpoint Google Apps Script untuk cloud storage gambar produk, banner promosi, dan media drive",r="fa-laptop-code",s={line:"bg-rose-500",box:"bg-rose-50 dark:bg-rose-900/30 text-rose-500"},i=`
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
                    <input autocomplete='off' id="set-gas-url" value="${u(n.config?.gasUrl||"")}" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full font-mono text-xs" placeholder="https://script.google.com/macros/s/.../exec">
                    <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium">Tempel URL hasil deploy Web App dari Google Apps Script project toko Anda.</p>
                </div>

                <div class="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl space-y-2">
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full ${n.config?.gasUrl?"bg-emerald-500":"bg-amber-500"} animate-pulse"></span>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200">
                            ${n.config?.gasUrl?"Integrasi Cloud Storage Aktif":"Endpoint Belum Dikonfigurasi"}
                        </span>
                    </div>
                    <ul class="text-[11px] text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
                        <li>Semua file gambar produk yang diupload admin akan disimpan aman di Google Drive Anda.</li>
                        <li>Tidak membebani memori hosting lokal dan menjaga loading website tetap ringan.</li>
                        <li>Mendukung konversi otomatis ke link thumbnail instan untuk etalase katalog.</li>
                    </ul>
                </div>
            </div>
        `):t==="operasional"&&(e="Operasional & Perpajakan",a="Konfigurasi pembatasan inventaris stok produk otomatis, skema kalkulasi PPN transaksi, dan program poin loyalitas member",r="fa-sliders",s={line:"bg-violet-500",box:"bg-violet-50 dark:bg-violet-900/30 text-violet-500"},i=`
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
                        <option value="true" ${n.store.useStock===!0?"selected":""}>Aktif — Otomatis tandai HABIS jika stok 0 (Pelanggan tidak bisa checkout)</option>
                        <option value="false" ${n.store.useStock!==!0?"selected":""}>Nonaktif — Stok tak terbatas (Cocok untuk barang pre-order / tanpa pembatasan stok)</option>
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
                            <option value="true" ${n.store.ppnEnabled===!0?"selected":""}>Aktif (Kalkulasi PPN Dihitung)</option>
                            <option value="false" ${n.store.ppnEnabled!==!0?"selected":""}>Nonaktif (Bebas PPN)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tipe Perhitungan</label>
                        <select id="set-ppn-type" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs">
                            <option value="exclusive" ${n.store.ppnType!=="inclusive"?"selected":""}>Eksklusif (Ditambah di checkout)</option>
                            <option value="inclusive" ${n.store.ppnType==="inclusive"?"selected":""}>Inklusif (Sudah termasuk di harga)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tarif PPN (%)</label>
                        <input autocomplete='off' type="number" id="set-ppn-rate" value="${u(n.store.ppnRate||11)}" min="0" max="100" step="0.1" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="11">
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
                            <option value="true" ${n.store.spendPointsEnabled===!0||n.store.spendPointsEnabled==="true"?"selected":""}>Aktif (Poin Dihitung)</option>
                            <option value="false" ${n.store.spendPointsEnabled!==!0&&n.store.spendPointsEnabled!=="true"?"selected":""}>Nonaktif</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Minimal Belanja (Kelipatan Rp)</label>
                        <input autocomplete='off' type="number" id="set-spend-points-threshold" value="${u(n.store.spendPointsThreshold||1e5)}" min="1000" step="1000" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="100000">
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">Perolehan Poin per Kelipatan</label>
                        <input autocomplete='off' type="number" id="set-spend-points-per-threshold" value="${u(n.store.spendPointsPerThreshold||1)}" min="1" step="1" class="admin-input !py-3 bg-white dark:bg-slate-900 shadow-sm w-full text-xs" placeholder="1">
                    </div>
                </div>

                <div class="p-3 bg-white/80 dark:bg-slate-900/80 border border-amber-200/80 dark:border-amber-800/40 rounded-xl text-[11px] text-amber-800 dark:text-amber-200 flex items-start gap-2">
                    <i class="fa-solid fa-circle-info text-amber-500 mt-0.5 shrink-0"></i>
                    <span><b>Sistem Hibrida Cerdas:</b> Produk yang sudah memiliki poin reward langsung akan tetap memberikan poin per item. Untuk produk tanpa poin, nilai total belanjanya akan diakumulasikan dan dihitung poinnya sesuai kelipatan minimal belanja di atas (contoh: Belanja Rp 100.000 = 1 poin, Rp 200.000 = 2 poin).</span>
                </div>
            </div>
        `);let o=`
    <div class="w-full max-w-5xl mx-auto pb-10 text-sm fade-in-scale">
        <div class="mb-5 flex items-center justify-between">
            <button onclick="rAdmSet()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold text-xs shadow-sm transition-all active:scale-95">
                <i class="fa-solid fa-arrow-left"></i> Kembali ke Menu Pengaturan
            </button>
            <button onclick="saveAdminSettings('${t}')" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-bold text-xs shadow-sm transition-all active:scale-95 hover:opacity-95" style="background: var(--color-primary)">
                <i class="fa-solid fa-floppy-disk"></i> Simpan
            </button>
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden mb-6 relative">
            <div class="absolute top-0 left-0 w-full h-1.5 ${s.line}"></div>
            <div class="p-6 sm:p-8 flex-1 mt-2">
                <div class="mb-6 flex items-center gap-3.5 pb-4 border-b border-slate-100 dark:border-slate-700/80">
                    <div class="w-12 h-12 rounded-2xl ${s.box} flex items-center justify-center shrink-0 text-xl shadow-sm"><i class="fa-solid ${r}"></i></div> 
                    <div>
                        <h3 class="font-bold text-slate-800 dark:text-white text-base tracking-wide leading-tight">${e}</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${a||"Konfigurasi pengaturan toko"}</p>
                    </div>
                </div>
                <div class="space-y-5">
                    ${i}
                </div>
            </div>
        </div>

        <button onclick="saveAdminSettings('${t}')" class="btn-primary py-4 text-base shadow-glow w-full !rounded-2xl flex items-center justify-center gap-2 font-bold tracking-wide"><i class="fa-solid fa-floppy-disk"></i> Simpan Perubahan Pengaturan</button>
    </div>
    `;if(j("admin-content",o),t==="profile"){const l=n.store.uiTheme||"",d=n.store.themeColor||"#10b981";(l==="custom"||!Lt?.[l])&&setTimeout(()=>{const p=document.getElementById("custom-color-chip");if(p){p.style.background=d;const m=p.querySelector("i");m&&(m.style.color="#fff")}},50)}},Bo=async t=>{if(!ja){mt(!0),R("Menyimpan...");try{if(t==="profile")n.store.name=M("set-name"),n.store.slogan=M("set-slogan"),n.store.logo=z(M("set-logo")),n.store.description=M("set-description"),n.store.email=M("set-email"),n.store.showRewardCatalog=M("set-show-reward-catalog")==="true",n.store.operationalHours=M("set-hours"),n.store.footerCredit=M("set-credit"),n.store.themeColor=M("set-theme-color"),n.store.uiTheme=M("set-ui-theme"),n.store.bgStyle=M("set-bg-style")||"minimalist",n.store.bgCustomUrl=z(M("set-bg-custom-url")),localStorage.setItem("freshmart_theme_color",n.store.themeColor),localStorage.setItem("freshmart_ui_theme",n.store.uiTheme),localStorage.setItem("freshmart_bg_style",n.store.bgStyle),localStorage.setItem("freshmart_bg_custom_url",n.store.bgCustomUrl||""),Nt(n.store.uiTheme,n.store.themeColor),Ot(n.store.bgStyle,n.store.bgCustomUrl);else if(t==="catalog")n.store.categoryStyle=M("set-category-style"),n.store.brandStyle=M("set-brand-style"),n.store.showCategories=M("set-show-categories")==="true",n.store.showBrands=M("set-show-brands")==="true";else if(t==="shipping"){n.store.wa=M("set-wa").replace(/\D/g,""),n.store.address=M("set-address"),n.store.costPerKm=M("set-cost"),n.store.isDeliveryEnabled=M("set-delivery-enabled")==="true",n.store.isPickupEnabled=M("set-pickup-enabled")==="true",n.store.freeShippingMinSpendEnabled=M("set-free-shipping-enabled")==="true",n.store.freeShippingMinSpendAmount=Math.max(0,parseFloat(M("set-free-shipping-amount"))||0);let a=(M("set-lat")||"").trim(),r=(M("set-lng")||"").trim();const s=(M("set-maps-smart-input")||"").trim();if(s&&typeof window.parseGeoCoordinates=="function"){const i=window.parseGeoCoordinates(s);i&&(a=i.lat,r=i.lng)}(!a||!r)&&(a="-7.82308507053985",r="112.0988374794464"),n.store.lat=a,n.store.lng=r}else t==="payment"?(n.payment||(n.payment={}),n.payment.qrisUrl=z(M("set-qris-url"))):t==="config"?(n.config||(n.config={}),n.config.gasUrl=M("set-gas-url"),h("Pengaturan GAS URL tersimpan.")):t==="operasional"&&(n.store.useStock=M("set-use-stock")==="true",n.store.ppnEnabled=M("set-ppn-enabled")==="true",n.store.ppnType=M("set-ppn-type")||"exclusive",n.store.ppnRate=parseFloat(M("set-ppn-rate"))||11,n.store.spendPointsEnabled=M("set-spend-points-enabled")==="true",n.store.spendPointsThreshold=Math.max(1,parseFloat(M("set-spend-points-threshold"))||1e5),n.store.spendPointsPerThreshold=Math.max(1,parseFloat(M("set-spend-points-per-threshold"))||1),$r());const e={profile:"store",catalog:"store",shipping:"store",operasional:"store",payment:"payment",config:"config"};typeof window.saveApp=="function"&&await window.saveApp([e[t]||"store"]),t==="profile"||t==="config"?(h(t==="config"?"Sistem Diperbarui! Memuat Ulang...":"Warna Berubah! Memuat Ulang..."),setTimeout(()=>location.reload(),1500)):(h("Tersimpan!"),Ls())}catch{h("Gagal menyimpan pengaturan")}finally{mt(!1),L()}}},Mr=t=>{const e=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=e?e(t):null,r=document.getElementById("maps-smart-feedback"),s=document.getElementById("set-lat"),i=document.getElementById("set-lng");a?(s&&(s.value=a.lat),i&&(i.value=a.lng),r&&(r.className="text-[10px] mt-1.5 font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5",r.innerHTML=`<i class="fa-solid fa-circle-check text-xs"></i> <span>Akurat! Koordinat terdeteksi: <b>${a.lat}, ${a.lng}</b></span>`)):t&&t.trim().length>3?r&&(r.className="text-[10px] mt-1.5 font-medium text-amber-600 dark:text-amber-400 flex items-center gap-1.5",r.innerHTML='<i class="fa-solid fa-triangle-exclamation text-xs"></i> <span>Pola belum terbaca. Coba tempel format: <code>-7.823085, 112.098837</code> atau link Google Maps</span>'):r&&(r.className="text-[10px] mt-1.5 font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5",r.innerHTML='<i class="fa-solid fa-circle-info text-blue-500"></i> <span>Tempel tautan Maps atau angka koordinat dari Google Maps</span>')},No=()=>{const t=document.getElementById("set-lat"),e=document.getElementById("set-lng"),a=document.getElementById("set-maps-smart-input");t&&e&&a&&t.value&&e.value&&(a.value=`${t.value.trim()}, ${e.value.trim()}`)},Oo=async()=>{const t=document.getElementById("set-maps-smart-input");if(t){try{if(navigator.clipboard&&navigator.clipboard.readText){const e=await navigator.clipboard.readText();if(e){t.value=e,Mr(e),h("Teks berhasil ditempel dari clipboard!");return}}}catch{}t.focus(),h("Silakan tekan Ctrl+V atau tahan untuk menempel")}},Ro=()=>{const t=document.getElementById("set-lat"),e=document.getElementById("set-lng");let a=t?t.value.trim():"",r=e?e.value.trim():"";if(!a||!r){const s=document.getElementById("set-maps-smart-input");if(s&&s.value&&typeof window.parseGeoCoordinates=="function"){const i=window.parseGeoCoordinates(s.value);i&&(a=i.lat,r=i.lng)}}a&&r?window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${a},${r}`)}`,"_blank"):h("Masukkan koordinat toko terlebih dahulu")},Fo=()=>{if(!navigator.geolocation){h("Browser tidak mendukung sensor GPS");return}h("Sedang mendeteksi lokasi GPS..."),navigator.geolocation.getCurrentPosition(t=>{const e=t.coords.latitude.toString(),a=t.coords.longitude.toString(),r=document.getElementById("set-maps-smart-input");r&&(r.value=`${e}, ${a}`),Mr(`${e}, ${a}`),h("Lokasi GPS berhasil didapatkan!")},()=>{h("Gagal mengambil GPS perangkat. Pastikan izin lokasi aktif.")},{enableHighAccuracy:!0,timeout:15e3})},Ho=()=>{const t=JSON.stringify(n,null,2),e=`backup_tokoputri_${new Date().toISOString().slice(0,10)}.json`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"){const a=btoa(unescape(encodeURIComponent(t)));window.AndroidNativeApp.saveOrShareFile(a,e,"application/json")}else{const a="data:text/json;charset=utf-8,"+encodeURIComponent(t),r=document.createElement("a");r.href=a,r.download=e,document.body.appendChild(r),r.click(),r.remove()}h("Backup berhasil disimpan!")},Ko=t=>{const e=t.target.files[0];if(!e)return;const a=new FileReader;a.onload=async r=>{try{const s=JSON.parse(r.target.result);Object.assign(n,s),typeof window.saveApp=="function"&&await window.saveApp(),h("Data dipulihkan!"),setTimeout(()=>location.reload(),1e3)}catch{h("Gagal memulihkan data!")}},a.readAsText(e)};window.syncAppMeta=jo;window.rAdmSet=Ls;window.selectPresetTheme=Lo;window.selectBgStyle=Eo;window.openSettingForm=_o;window.saveAdminSettings=Bo;window.backupData=Ho;window.restoreData=Ko;window.handleSmartMapsInput=Mr;window.handleManualCoordChange=No;window.pasteFromClipboardToMapsInput=Oo;window.previewStoreOnMaps=Ro;window.detectAdminGPS=Fo;let ce=new Date().getFullYear(),pe=0,ze="menu",Qe=null;const Je=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],Vo=t=>{if(typeof window.getEffHpp=="function")return window.getEffHpp(t);const e=n.products?.find(a=>a&&a.id!=null&&String(a.id)===String(t.id));if(!e)return 0;if(t.variantName&&e.variants){const a=e.variants.find(r=>r.name===t.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(e.hpp)||0},Zr=new Map,Uo=2*60*1e3,Ir=async t=>{const e=Zr.get(t);if(e&&Date.now()-e.timestamp<Uo)return e.data;const a={};for(let r=1;r<=12;r++)a[r]={omset:0,ppn:0,hpp:0,disc:0,orderCount:0};try{const r=new Date(t,0,1),s=new Date(t+1,0,1);(await P.collection("freshmart_orders").where("timestamp",">=",ye.firestore.Timestamp.fromDate(r)).where("timestamp","<",ye.firestore.Timestamp.fromDate(s)).limit(5e3).get()).forEach(l=>{const d=l.data();if(d.status==="Dibatalkan"||!d.timestamp||!d.timestamp.toDate)return;const c=d.timestamp.toDate().getMonth()+1;if(!a[c])return;const p=d.payment?.dppAmount!==void 0&&d.payment?.dppAmount!==null?parseFloat(d.payment.dppAmount):parseFloat(d.payment?.subtotal)||0;a[c].omset+=p,a[c].ppn+=parseFloat(d.payment?.ppnAmount)||0,a[c].disc+=parseFloat(d.payment?.productDiscount)||0,a[c].orderCount++,(d.items||[]).forEach(m=>{const b=m.hpp!==void 0&&m.hpp!==null?parseFloat(m.hpp):Vo(m);a[c].hpp+=(parseFloat(b)||0)*(parseFloat(m.qty)||0)})})}catch(r){console.error("Gagal memuat data pajak:",r),h("Gagal memuat data periode ini!")}return Zr.set(t,{data:a,timestamp:Date.now()}),a},oa=()=>Qe?(pe===0?Object.keys(Qe):[pe]).reduce((e,a)=>{const r=Qe[a];return e.omset+=r.omset,e.ppn+=r.ppn,e.hpp+=r.hpp,e.disc+=r.disc,e.orderCount+=r.orderCount,e},{omset:0,ppn:0,hpp:0,disc:0,orderCount:0}):{omset:0,ppn:0,hpp:0,disc:0,orderCount:0},Dr=()=>{const t=n.taxSettings?.monthlyExpenses||{};return(pe===0?Array.from({length:12},(a,r)=>r+1):[pe]).reduce((a,r)=>a+(parseFloat(t[`${ce}-${r}`])||0),0)},Go=async()=>{j("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),Qe=await Ir(ce),jr()},jr=()=>{const t=Array.from({length:6},(r,s)=>new Date().getFullYear()-4+s),e=[{k:"summary",l:"Ringkasan PPN",i:"fa-receipt"},{k:"income",l:"Laba Rugi",i:"fa-chart-pie"},{k:"balance",l:"Neraca",i:"fa-scale-balanced"},{k:"settings",l:"Pengaturan",i:"fa-gear"}];ze==="menu"&&(ze="summary");const a=`
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
        
        ${ze==="settings"?"":`
        <div class="flex items-center gap-2">
            <select id="tax-year-select" onchange="changeTaxYear(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                ${t.map(r=>`<option value="${r}" ${r===ce?"selected":""}>${r}</option>`).join("")}
            </select>
            <select id="tax-month-select" onchange="changeTaxMonth(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)] cursor-pointer">
                <option value="0" ${pe===0?"selected":""}>Setahun Penuh</option>
                ${Je.map((r,s)=>`<option value="${s+1}" ${pe===s+1?"selected":""}>${r} ${ce}</option>`).join("")}
            </select>
        </div>
        `}
    </div>

    <!-- Sub-Tab Navigation Bar -->
    <div class="flex items-center gap-2 mb-5 overflow-x-auto hide-scrollbar pb-1">
        ${e.map(r=>{const s=ze===r.k;return`
            <button onclick="switchTaxTab('${r.k}')" class="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2 shrink-0 ${s?"primary-bg text-white shadow-glow":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[rgba(var(--color-primary-rgb),0.4)]"}">
                <i class="fa-solid ${r.i} text-xs"></i>
                <span>${r.l}</span>
            </button>`}).join("")}
    </div>
    `;j("admin-content",`
    <div class="max-w-5xl mx-auto pb-10 text-sm fade-in-scale">
        <div class="mb-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-4 flex items-start gap-3 text-xs font-semibold text-amber-800 dark:text-amber-300 shadow-xs">
            <i class="fa-solid fa-circle-info text-amber-500 text-base shrink-0 mt-0.5"></i>
            <span class="leading-relaxed">Halaman ini adalah <b>alat bantu rekap internal</b> Omset, PPN, Laba Rugi, dan Neraca dari data transaksi toko. Bukan pengganti konsultan pajak/akuntan — validasi kembali angkanya sebelum digunakan untuk pelaporan SPT resmi.</span>
        </div>

        ${a}

        <div id="tax-content"></div>
    </div>`),Ra()},qo=t=>{ze=t,jr()},Wo=async t=>{ce=parseInt(t,10),j("tax-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),Qe=await Ir(ce),Ra()},zo=t=>{pe=parseInt(t,10),Ra()},Ra=()=>{ze==="summary"?Es():ze==="income"?Lr():ze==="balance"?Er():ze==="settings"&&_s()},Es=()=>{const t=oa(),e=pe===0?`Tahun ${ce}`:`${Je[pe-1]} ${ce}`,a=t.omset-t.disc,r=Array.from({length:12},(s,i)=>i+1).map(s=>{const i=Qe?Qe[s]:{omset:0,ppn:0,orderCount:0};return`<tr class="${pe===s?"bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.14)] font-bold":"hover:bg-slate-50 dark:hover:bg-slate-700/30"} border-b border-slate-100 dark:border-slate-700/50 last:border-0 transition-colors">
            <td class="py-3 px-4 text-xs font-bold text-slate-700 dark:text-slate-200">${Je[s-1]}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-800 dark:text-white text-right">${w(i.omset)}</td>
            <td class="py-3 px-4 text-xs font-bold text-right" style="color:var(--color-primary)">${w(i.ppn)}</td>
            <td class="py-3 px-4 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">${i.orderCount}</td>
        </tr>`}).join("");j("tax-content",`
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div class="card-modern p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Omset Bruto (${e})</p>
                <p class="text-base sm:text-xl font-bold text-slate-800 dark:text-white truncate">${w(t.omset)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">${t.orderCount} pesanan</p>
            </div>
            <div class="card-modern p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-minus mr-1"></i>Diskon Produk</p>
                <p class="text-base sm:text-xl font-bold text-rose-500 truncate">${w(t.disc)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Potongan diskon</p>
            </div>
            <div class="card-modern p-5 flex flex-col justify-between">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">DPP (Dasar Pengenaan Pajak)</p>
                <p class="text-base sm:text-xl font-bold text-slate-800 dark:text-white truncate">${w(a)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Omset bersih</p>
            </div>
            <div class="card-modern p-5 flex flex-col justify-between border-[rgba(var(--color-primary-rgb),0.4)] relative overflow-hidden" style="background: rgba(var(--color-primary-rgb),0.04)">
                <div class="absolute -right-4 -bottom-4 w-20 h-20 rounded-full blur-xl pointer-events-none" style="background: rgba(var(--color-primary-rgb),0.15)"></div>
                <p class="text-[9px] font-bold uppercase tracking-widest mb-1.5" style="color:var(--color-primary)"><i class="fa-solid fa-file-invoice-dollar mr-1"></i>PPN Keluaran</p>
                <p class="text-base sm:text-xl font-bold truncate" style="color:var(--color-primary)">${w(t.ppn)}</p>
                <p class="text-[10px] font-bold mt-1 opacity-80" style="color:var(--color-primary)">Wajib disetor ke negara</p>
            </div>
        </div>
        <div class="card-modern overflow-hidden">
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-700/70 flex items-center justify-between">
                <h4 class="font-bold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-widest">Rincian Per Bulan — ${ce}</h4>
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
    `)},Lr=()=>{const t=oa(),e=pe===0?`Tahun ${ce}`:`${Je[pe-1]} ${ce}`,a=t.omset-t.disc-t.hpp,r=pe===0?null:`${ce}-${pe}`,s=Dr(),i=a-s,o=n.taxSettings?.taxScheme||"umkm_final";let l,d,c;o==="umkm_final"?(l=.5,d=t.omset,c="PPh Final UMKM (0,5% × Omset)"):o==="badan_normal"?(l=22,d=Math.max(0,i),c="PPh Badan (22% × Laba Bersih)"):(l=parseFloat(n.taxSettings?.customTaxRate)||0,d=Math.max(0,i),c=`PPh Custom (${l}% × Laba Bersih)`);const p=d*(l/100),m=i-p;let b="";if(pe===0)b=Array.from({length:12},(f,g)=>g+1).map(f=>{const g=`${ce}-${f}`,k=(n.taxSettings?.monthlyExpenses||{})[g]||0;return`<div class="flex items-center justify-between gap-2 py-2 border-b border-slate-100 dark:border-slate-700/50 last:border-0">
                <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${Je[f-1]} ${ce}</span>
                <input type="number" min="0" value="${k}" onchange="saveMonthlyExpense('${g}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>`}).join("");else{const f=(n.taxSettings?.monthlyExpenses||{})[r]||0;b=`<div class="flex items-center justify-between gap-2 py-2">
            <span class="text-xs font-bold text-slate-600 dark:text-slate-300">${Je[pe-1]} ${ce}</span>
            <input type="number" min="0" value="${f}" onchange="saveMonthlyExpense('${r}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
        </div>`}j("tax-content",`
        <div class="card-modern p-6 sm:p-8 space-y-4">
            <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
                <div>
                    <h4 class="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm uppercase tracking-widest">Laporan Laba Rugi — ${e}</h4>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Estimasi pendapatan &amp; beban usaha</p>
                </div>
                <button onclick="openTaxDocPreview('income')" class="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-[10px] font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-1.5 active:scale-95">
                    <i class="fa-solid fa-print"></i> Preview &amp; Cetak
                </button>
            </div>
            <div class="space-y-3 text-xs sm:text-sm">
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">Omset Bruto</span><span class="font-bold text-slate-800 dark:text-slate-100">${w(t.omset)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Diskon Produk</span><span class="font-bold text-rose-500">-${w(t.disc)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) HPP (Harga Pokok Penjualan)</span><span class="font-bold text-rose-500">-${w(t.hpp)}</span></div>
                <div class="flex justify-between py-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Kotor</span><span class="font-bold text-emerald-500">${w(a)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Biaya Operasional</span><span class="font-bold text-rose-500">-${w(s)}</span></div>
                <div class="flex justify-between py-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Bersih Sebelum Pajak</span><span class="font-bold" style="color:var(--color-primary)">${w(i)}</span></div>
                <div class="flex justify-between py-1"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Estimasi ${c}</span><span class="font-bold text-rose-500">-${w(p)}</span></div>
                <div class="flex justify-between py-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2"><span class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Laba Bersih Setelah Pajak (Estimasi)</span><span class="font-extrabold text-sm sm:text-base" style="color:var(--color-primary)">${w(m)}</span></div>
            </div>

            <div class="mt-8 pt-5 border-t border-dashed border-slate-200 dark:border-slate-700">
                <h5 class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5"><i class="fa-solid fa-pen" style="color:var(--color-primary)"></i> Input Biaya Operasional (Manual)</h5>
                <p class="text-[10px] font-bold text-slate-400 mb-4">Contoh: sewa tempat, gaji karyawan, listrik, internet, dll. Sistem tidak melacak biaya ini otomatis.</p>
                <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                    ${b}
                </div>
            </div>
        </div>
    `)},Qo=async(t,e)=>{const a=parseFloat(e)||0;n.taxSettings||(n.taxSettings={}),n.taxSettings.monthlyExpenses||(n.taxSettings.monthlyExpenses={}),n.taxSettings.monthlyExpenses[t]=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),Lr()}catch{h("Gagal menyimpan biaya operasional!")}},Er=()=>{const t=Oa(),e=n.taxSettings?.balanceSheet||{kas:0,piutang:0,hutang:0},a=(parseFloat(e.kas)||0)+(parseFloat(e.piutang)||0)+t.assetHpp,r=parseFloat(e.hutang)||0,s=a-r;j("tax-content",`
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
                        <input type="number" min="0" value="${e.kas||0}" onchange="saveBalanceField('kas', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-1">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Piutang Usaha (manual)</span>
                        <input type="number" min="0" value="${e.piutang||0}" onchange="saveBalanceField('piutang', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-2.5 rounded-xl px-3 border border-[rgba(var(--color-primary-rgb),0.3)]" style="background: rgba(var(--color-primary-rgb),0.06)">
                        <span class="text-xs font-bold" style="color:var(--color-primary)">Persediaan Barang (Otomatis)</span>
                        <span class="text-xs font-bold" style="color:var(--color-primary)">${w(t.assetHpp)}</span>
                    </div>
                    <div class="flex justify-between pt-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2">
                        <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-widest">Total Aset</span>
                        <span class="font-bold text-xs sm:text-sm" style="color:var(--color-primary)">${w(a)}</span>
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
                        <input type="number" min="0" value="${e.hutang||0}" onchange="saveBalanceField('hutang', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right font-bold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
                    </div>
                    <div class="flex items-center justify-between gap-2 py-2.5 rounded-xl px-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Modal &amp; Laba Ditahan</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-100">${w(s)}</span>
                    </div>
                    <p class="text-[10px] font-semibold text-slate-400 leading-relaxed px-1">Angka Modal &amp; Laba Ditahan dihitung otomatis (Total Aset − Hutang) agar neraca seimbang.</p>
                    <div class="flex justify-between pt-3 border-t-2 border-slate-800 dark:border-slate-200 mt-2">
                        <span class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-widest">Total Kewajiban + Modal</span>
                        <span class="font-bold text-xs sm:text-sm" style="color:var(--color-primary)">${w(r+s)}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6 text-center">
            <button onclick="openTaxDocPreview('balance')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all inline-flex items-center gap-2 shadow-xs active:scale-95">
                <i class="fa-solid fa-print"></i> Preview &amp; Cetak Neraca
            </button>
        </div>
    `)},Jo=async(t,e)=>{const a=parseFloat(e)||0;n.taxSettings||(n.taxSettings={}),n.taxSettings.balanceSheet||(n.taxSettings.balanceSheet={kas:0,piutang:0,hutang:0,modalDisetor:0}),n.taxSettings.balanceSheet[t]=a;try{typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),Er()}catch{h("Gagal menyimpan data neraca!")}},_s=()=>{const t=n.taxSettings||{};j("tax-content",`
        <div class="card-modern p-6 sm:p-8 max-w-2xl mx-auto space-y-5">
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Badan Usaha / Toko</label>
                <input id="tax-company-name" type="text" value="${u(t.companyName||"")}" placeholder="Cth: Toko Putri" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">NPWP (Nomor Pokok Wajib Pajak)</label>
                <input id="tax-npwp" type="text" value="${u(t.npwp||"")}" placeholder="XX.XXX.XXX.X-XXX.XXX" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <div>
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Skema Perhitungan PPh</label>
                <select id="tax-scheme" onchange="toggleCustomTaxRateInput(this.value)" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer font-bold focus:border-[var(--color-primary)]">
                    <option value="umkm_final" ${t.taxScheme==="umkm_final"?"selected":""}>PPh Final UMKM — 0,5% dari Omset (PP 23/2018)</option>
                    <option value="badan_normal" ${t.taxScheme==="badan_normal"?"selected":""}>PPh Badan Normal — 22% dari Laba Bersih</option>
                    <option value="custom" ${t.taxScheme==="custom"?"selected":""}>Custom (isi tarif sendiri)</option>
                </select>
            </div>
            <div id="tax-custom-rate-wrap" class="${t.taxScheme==="custom"?"":"hidden"}">
                <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tarif Custom (% dari Laba Bersih)</label>
                <input id="tax-custom-rate" type="number" min="0" max="100" step="0.1" value="${t.customTaxRate||.5}" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-[var(--color-primary)]">
            </div>
            <button onclick="saveTaxSettingsPanel()" class="primary-bg py-3.5 text-xs sm:text-sm font-bold shadow-glow rounded-xl flex items-center justify-center gap-2 w-full uppercase tracking-widest text-white active:scale-95 transition-all">
                <i class="fa-solid fa-floppy-disk"></i> Simpan Pengaturan Pajak
            </button>
        </div>
    `)},Yo=t=>{at("tax-custom-rate-wrap","hidden",t!=="custom")},Xo=async()=>{if(!ja){mt(!0),R("Menyimpan...");try{n.taxSettings||(n.taxSettings={}),n.taxSettings.companyName=M("tax-company-name"),n.taxSettings.npwp=M("tax-npwp"),n.taxSettings.taxScheme=M("tax-scheme"),n.taxSettings.customTaxRate=parseFloat(M("tax-custom-rate"))||.5,typeof window.saveApp=="function"&&await window.saveApp(["taxSettings"]),h("Pengaturan pajak tersimpan!")}catch{h("Gagal menyimpan pengaturan pajak!")}finally{mt(!1),L()}}},Zo=t=>{const e=pe===0?`Tahun ${ce}`:`${Je[pe-1]} ${ce}`,a=n.taxSettings||{},r=new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"});let s="";n.store.logo&&(n.store.logo.includes("http")||n.store.logo.includes("data:"))?s=`<img loading="eager" src="${u(n.store.logo)}" class="w-16 h-16 object-contain">`:s='<div class="w-16 h-16 bg-slate-700 text-white flex items-center justify-center rounded-xl"><i class="fa-solid fa-store text-3xl"></i></div>';const o={summary:"LAPORAN PPN & OMSET",income:"LAPORAN LABA RUGI",balance:"NERACA"}[t]||"LAPORAN";let l=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${s}
            <div>
                <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${u(a.companyName||n.store.name)}</h1>
                ${a.npwp?`<p class="text-xs font-bold text-slate-500 mt-1">NPWP: ${u(a.npwp)}</p>`:""}
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${u(n.store.address||"")}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl tracking-widest text-slate-700 uppercase">${o}</h2>
            <p class="text-sm font-bold text-slate-600 mt-2">Periode: ${e}</p>
            <p class="text-xs font-semibold text-slate-400 mt-1">Dicetak: ${r}</p>
        </div>
    </div>
    <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-[11px] font-bold text-amber-700 leading-relaxed">
        <i class="fa-solid fa-triangle-exclamation mr-1"></i> Dokumen ini adalah rekap internal sebagai alat bantu — bukan dokumen resmi DJP. Mohon validasi ke akuntan/konsultan pajak sebelum digunakan untuk pelaporan SPT resmi.
    </div>`,d="";if(t==="summary"){const p=oa(),m=p.omset-p.disc,b=Array.from({length:12},(f,g)=>g+1).map(f=>{const g=Qe?Qe[f]:{omset:0,ppn:0,orderCount:0};return`<tr class="border-b border-slate-200"><td class="py-2.5 px-3 font-bold text-slate-700">${Je[f-1]} ${ce}</td><td class="py-2.5 px-3 text-right font-bold text-slate-700">${w(g.omset)}</td><td class="py-2.5 px-3 text-right font-bold text-slate-900">${w(g.ppn)}</td><td class="py-2.5 px-3 text-right font-bold text-slate-500">${g.orderCount}</td></tr>`}).join("");d=`
        <div class="grid grid-cols-4 gap-4 mb-8">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">Omset Bruto</p><p class="font-bold text-slate-900">${w(p.omset)}</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">Diskon</p><p class="font-bold text-rose-600">${w(p.disc)}</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">DPP</p><p class="font-bold text-slate-900">${w(m)}</p></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4"><p class="text-[9px] font-bold text-amber-600 uppercase mb-1">PPN Keluaran</p><p class="font-bold text-amber-700">${w(p.ppn)}</p></div>
        </div>
        <table class="w-full text-xs"><thead><tr class="bg-slate-100 text-left"><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px]">Bulan</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">Omset</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">PPN Keluaran</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">Pesanan</th></tr></thead><tbody>${b}</tbody></table>`}else if(t==="income"){const p=oa(),m=p.omset-p.disc-p.hpp,b=Dr(),f=m-b,g=a.taxScheme||"umkm_final";let k,S,A;g==="umkm_final"?(k=.5,S=p.omset,A="PPh Final UMKM (0,5% × Omset)"):g==="badan_normal"?(k=22,S=Math.max(0,f),A="PPh Badan (22% × Laba Bersih)"):(k=parseFloat(a.customTaxRate)||0,S=Math.max(0,f),A=`PPh Custom (${k}% × Laba Bersih)`);const T=S*(k/100),H=f-T,E=(Y,U,G,F)=>`<div class="flex justify-between py-2 ${G?"border-t-2 border-slate-800 mt-1 pt-3":"border-b border-slate-100"}"><span class="${G?"font-bold text-slate-900":"font-bold text-slate-600"}">${Y}</span><span class="font-bold ${F||"text-slate-900"}">${U}</span></div>`;d=`<div class="max-w-xl">
            ${E("Omset Bruto",w(p.omset))}
            ${E("(−) Diskon Produk","-"+w(p.disc),!1,"text-rose-600")}
            ${E("(−) HPP","-"+w(p.hpp),!1,"text-rose-600")}
            ${E("Laba Kotor",w(m),!0,"text-emerald-600")}
            ${E("(−) Biaya Operasional","-"+w(b),!1,"text-rose-600")}
            ${E("Laba Bersih Sebelum Pajak",w(f),!0)}
            ${E("(−) Estimasi "+A,"-"+w(T),!1,"text-rose-600")}
            ${E("Laba Bersih Setelah Pajak (Estimasi)",w(H),!0)}
        </div>`}else if(t==="balance"){const p=Oa(),m=a.balanceSheet||{kas:0,piutang:0,hutang:0},b=(parseFloat(m.kas)||0)+(parseFloat(m.piutang)||0)+p.assetHpp,f=parseFloat(m.hutang)||0,g=b-f;d=`
        <div class="grid grid-cols-2 gap-8">
            <div>
                <h3 class="font-bold text-slate-800 uppercase text-xs tracking-widest mb-3 pb-2 border-b-2 border-slate-800">Aset</h3>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Kas &amp; Bank</span><span class="font-bold text-slate-900">${w(m.kas||0)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Piutang Usaha</span><span class="font-bold text-slate-900">${w(m.piutang||0)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Persediaan Barang</span><span class="font-bold text-slate-900">${w(p.assetHpp)}</span></div>
                <div class="flex justify-between py-2.5 border-t-2 border-slate-800 mt-1"><span class="font-bold text-slate-900">Total Aset</span><span class="font-bold text-slate-900">${w(b)}</span></div>
            </div>
            <div>
                <h3 class="font-bold text-slate-800 uppercase text-xs tracking-widest mb-3 pb-2 border-b-2 border-slate-800">Kewajiban &amp; Modal</h3>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Hutang Usaha</span><span class="font-bold text-slate-900">${w(f)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Modal &amp; Laba Ditahan</span><span class="font-bold text-slate-900">${w(g)}</span></div>
                <div class="flex justify-between py-2.5 border-t-2 border-slate-800 mt-1"><span class="font-bold text-slate-900">Total Kewajiban + Modal</span><span class="font-bold text-slate-900">${w(f+g)}</span></div>
            </div>
        </div>`}Q("doc-modal-title","Preview "+o),j("doc-paper-content",l+d);const c=x("doc-preview-modal");c&&c.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),V("doc-preview-modal"),setTimeout(()=>{x("doc-preview-modal")&&x("doc-preview-modal").classList.remove("opacity-0"),x("doc-preview-modal-box")&&x("doc-preview-modal-box").classList.remove("scale-95"),typeof window.fitDocPreview=="function"&&window.fitDocPreview()},10)};window.fetchTaxPeriodData=Ir;window.getTaxPeriodTotals=oa;window.getTaxPeriodExpenses=Dr;window.rTaxPanel=Go;window.rTaxRenderShell=jr;window.switchTaxTab=qo;window.changeTaxYear=Wo;window.changeTaxMonth=zo;window.rTaxSubContent=Ra;window.rTaxSummary=Es;window.rTaxIncome=Lr;window.saveMonthlyExpense=Qo;window.rTaxBalance=Er;window.saveBalanceField=Jo;window.rTaxSettingsPanel=_s;window.toggleCustomTaxRateInput=Yo;window.saveTaxSettingsPanel=Xo;window.openTaxDocPreview=Zo;window.MONTH_NAMES=Je;const en=t=>window.pushModalHistory?.(t);let ct="all",na="",He=[];const ca=t=>{let e=parseFloat(t.payment?.tempoBalance)||0,a=t.payment?.tempoPenaltyRate!==void 0?parseFloat(t.payment.tempoPenaltyRate):1,r=t.payment?.tempoPenaltyStopped===!0,s=0,i=t.payment?.tempoDueDate||0,o=0,l=0,d=!1,c=!1;const p=Date.now();i>0&&(p>i?(o=Math.floor((p-i)/(24*60*60*1e3)),o>0&&(d=!0)):(l=Math.ceil((i-p)/(24*60*60*1e3)),l<=3&&(c=!0))),r?s=parseFloat(t.payment?.tempoFixedPenalty)||0:d&&(s=a/100*e*o);let m=e+s;return{sisa:e,rate:a,isStopped:r,latePenalty:s,dueDate:i,daysLate:o,daysLeft:l,isLate:d,isDueSoon:c,totalAkhir:m,statusCategory:d?"late":c?"due_soon":"active"}};window.editTempoPenalty=(t,e)=>{window.customPrompt("Persentase Denda Baru (% / Hari)",e,async a=>{if(!a)return;let r=parseFloat(a.replace(",","."));if(isNaN(r)||r<0)return h("Persentase tidak valid!");R("Menyimpan...");try{await P.collection("freshmart_orders").doc(t).update({"payment.tempoPenaltyRate":r}),h("Persentase denda berhasil diubah!"),window.rAdmPiutang()}catch(s){h("Gagal mengubah denda: "+s.message)}L()})};window.stopTempoPenalty=(t,e,a)=>{let r="Konfirmasi Denda",s=a?"Lanjutkan perhitungan denda otomatis berjalan?":"Hentikan denda berjalan sekarang? (Nominal denda akan dibekukan di "+w(e)+")";Ze(r,s,async()=>{R("Menyimpan...");try{await P.collection("freshmart_orders").doc(t).update({"payment.tempoPenaltyStopped":!a,"payment.tempoFixedPenalty":a?null:e}),h(a?"Denda dilanjutkan!":"Denda berhasil dibekukan!"),window.rAdmPiutang()}catch(o){h("Gagal mengubah status denda: "+o.message)}L()},a?"Lanjutkan":"Bekukan")};window.payTempoInstallment=t=>{window.customPrompt("Masukkan Nominal Cicilan (Rp)","",async e=>{if(!e)return;let a=parseFloat(e.replace(/[^0-9]/g,""));if(isNaN(a)||a<=0)return h("Nominal cicilan tidak valid!");R("Menyimpan cicilan...");try{const r=await P.collection("freshmart_orders").doc(t).get();if(!r.exists)return L(),h("Pesanan tidak ditemukan");const s=r.data();let i=(s.payment?.tempoBalance||0)-a,o=s.payment?.installments||[];o.push({date:Date.now(),amount:a,note:"Cicilan"});let l={"payment.tempoBalance":Math.max(0,i),"payment.installments":o};i<=0&&(l["payment.paymentStatus"]="lunas",l.status="Selesai"),await P.collection("freshmart_orders").doc(t).update(l),h("Cicilan berhasil ditambahkan!"),window.rAdmPiutang&&window.rAdmPiutang()}catch(r){h("Gagal memproses cicilan: "+r.message)}L()})};window.previewTempoReceipt=async t=>{R("Memuat data struk...");try{const e=await P.collection("freshmart_orders").doc(t).get();if(!e.exists)return L(),h("Pesanan tidak ditemukan");const a=e.data();L();const r=a.dateString?new Date(a.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",s=n.store?.name||"Toko Putri",i=n.store?.wa||"",o=(f,g,k=32)=>{const S=k-f.length-g.length;return f+(S>0?" ".repeat(S):" ")+g};let l=`<div class="text-center font-bold" style="font-size:13px;margin-bottom:2px;">${u(s)}</div>`;i&&(l+=`<div class="text-center" style="margin-bottom:4px;">WA: ${u(i)}</div>`),l+=`<div class="text-center font-bold uppercase my-2" style="font-size:14px;border-bottom:1px solid #000;border-top:1px solid #000;padding:2px 0;">NOTA TEMPO${a.payment?.paymentStatus==="lunas"?" - LUNAS":""}</div>`,l+=`<div style="white-space:pre;">Order: #${a.orderId}</div><div style="white-space:pre;">Tgl  : ${r}</div><div style="white-space:pre;">Plg  : ${u(a.customer?.name||"Guest").substring(0,20)}</div>`,a.payment?.tempoDueDate&&(l+=`<div style="white-space:pre;">J.Tmp: ${new Date(a.payment.tempoDueDate).toLocaleDateString("id-ID")}</div>`),l+='<div class="border-b border-dashed border-black my-2"></div>';let d=0;if((a.items||[]).forEach(f=>{let g=f.variantName?` (${u(f.variantName)}${f.colorCode?" "+u(f.colorCode):""})`:"";const k=(u(f.name)+g+(f.poTime?" [PO]":"")).substring(0,32),S=f.effectivePrice!==void 0?f.effectivePrice:f.price||0,A=`${parseFloat(f.qty)} ${u(f.unit||"pcs")} x ${S.toLocaleString("id-ID")}`,T=(parseFloat(f.qty)*S).toLocaleString("id-ID");l+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${k}</div><div style="white-space:pre;font-size:11px;">${o(A,T)}</div>`,f.poTime&&(l+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${u(f.poTime)}</div>`),d+=parseFloat(f.qty)*S}),l+='<div class="border-b border-dashed border-black my-2"></div>',l+=`<div style="white-space:pre;font-weight:bold;">${o("Subtotal",d.toLocaleString("id-ID"))}</div>`,a.payment?.grandTotal&&a.payment.grandTotal!==d){let f=a.payment.grandTotal-d;f>0?l+=`<div style="white-space:pre;">${o("Ongkir/Biaya",f.toLocaleString("id-ID"))}</div>`:l+=`<div style="white-space:pre;">${o("Diskon",Math.abs(f).toLocaleString("id-ID"))}</div>`}l+=`<div style="white-space:pre;font-weight:bold;margin-top:4px;">${o("TOTAL KREDIT",(a.payment?.grandTotal||d).toLocaleString("id-ID"))}</div>`,l+='<div class="border-b border-black my-2" style="border-width:1px;"></div>';let c=0;a.payment?.installments&&a.payment.installments.length>0&&(l+='<div style="white-space:pre;font-weight:bold;margin-bottom:2px;">HISTORI CICILAN:</div>',a.payment.installments.forEach((f,g)=>{let k=new Date(f.date).toLocaleDateString("id-ID",{day:"2-digit",month:"short"}),S=f.amount.toLocaleString("id-ID");l+=`<div style="white-space:pre;">${o(`${g+1}. ${k}`,S)}</div>`,c+=f.amount}),l+=`<div style="white-space:pre;font-weight:bold;margin-top:2px;">${o("TOTAL DIBAYAR",c.toLocaleString("id-ID"))}</div>`,l+='<div class="border-b border-dashed border-black my-2"></div>');const p=ca(a);l+=`<div style="white-space:pre;font-weight:bold;">${o("SISA POKOK",p.sisa.toLocaleString("id-ID"))}</div>`,p.latePenalty>0&&(l+=`<div style="white-space:pre;">${o("DENDA",Math.round(p.latePenalty).toLocaleString("id-ID"))}</div>`),l+='<div class="border-b border-black my-2" style="border-width:1px;"></div>',l+=`<div style="white-space:pre;font-weight:black;">${o("SISA TAGIHAN",Math.round(p.totalAkhir).toLocaleString("id-ID"))}</div>`,(a.items||[]).some(f=>f.poTime&&f.poTime!=="")&&(l+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa dikenakan biaya tambahan.</div>'),l+='<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;">Terima kasih atas kepercayaannya.</div><div class="border-b border-dashed border-black my-2"></div><div style="height:20px;"></div>',j("receipt-paper-content",l);const b=x("receipt-preview-modal");b&&b.classList.contains("hidden")&&en("receipt"),V("receipt-preview-modal"),setTimeout(()=>{x("receipt-preview-modal")&&x("receipt-preview-modal").classList.remove("opacity-0"),x("receipt-preview-modal-box")&&x("receipt-preview-modal-box").classList.remove("scale-95")},10)}catch(e){L(),h("Gagal memuat struk: "+e.message)}};window.markTempoPaid=async t=>{Ze("Konfirmasi Pelunasan","Tandai seluruh sisa tagihan tempo pesanan ini sebagai LUNAS?",async()=>{try{if(await P.collection("freshmart_orders").doc(t).update({"payment.paymentStatus":"lunas","payment.tempoBalance":0,status:"Selesai"}),h("Tagihan tempo berhasil dilunasi!"),Array.isArray(de)){let e=de.findIndex(a=>a.orderId===t);e!==-1&&(de[e].payment.paymentStatus="lunas",de[e].payment.tempoBalance=0,de[e].status="Selesai")}window.rAdmPiutang()}catch(e){h("Gagal melunasi tagihan: "+e.message)}},"Ya, Lunasi")};window.sendSmartTempoWA=t=>{const e=He.find(m=>m.orderId===t);if(!e)return h("Data pesanan tidak ditemukan!");const a=e.customer?.wa||"",r=ks(a);if(!r)return h("Nomor WhatsApp pelanggan belum valid!");const s=ca(e),i=n.store?.name||"Toko Putri",o=e.customer?.name||"Pelanggan",l=e.dateString?new Date(e.dateString).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}):"-",d=s.dueDate?new Date(s.dueDate).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}):"-";let c="";n.banks&&n.banks.length>0?c=n.banks.map(m=>`• *Bank ${m.bankName}*: ${m.bankAccount} (a.n ${m.bankOwner})`).join(`
`):c="Silakan hubungi admin/kasir untuk konfirmasi nomor rekening transfer.";let p="";if(s.isLate)p=`*PEMBERITAHUAN JATUH TEMPO - ${i.toUpperCase()}*

Yth. Bpk/Ibu *${o}*,
Kami menginformasikan bahwa tagihan pembelian Tempo Anda telah *MELEWATI BATAS JATUH TEMPO* (${s.daysLate} hari keterlambatan).

📋 *Rincian Tagihan:*
• No. Pesanan: #${e.orderId}
• Tgl. Transaksi: ${l}
• Tgl. Jatuh Tempo: ${d}
• Sisa Pokok: ${w(s.sisa)}
`+(s.latePenalty>0?`• Denda (${s.rate}%/hari): ${w(s.latePenalty)}
`:"")+`• *TOTAL HARUS DIBAYAR: ${w(s.totalAkhir)}*

💳 *Pembayaran dapat ditransfer ke rekening resmi kami:*
${c}

Mohon kesediaannya untuk segera melakukan pelunasan dan mengirimkan bukti transfer ke WhatsApp ini. Terima kasih banyak atas kerjasamanya. 🙏`;else if(s.isDueSoon){let m=s.daysLeft<=0?"hari ini":`${s.daysLeft} hari lagi`;p=`*PENGINGAT JATUH TEMPO - ${i.toUpperCase()}*

Halo Bpk/Ibu *${o}*,
Semoga sehat dan sukses selalu. Kami dari *${i}* menginfokan bahwa tagihan pembelian Tempo Anda akan jatuh tempo *${m}* (${d}).

📋 *Rincian Tagihan:*
• No. Pesanan: #${e.orderId}
• Tgl. Transaksi: ${l}
• Tgl. Jatuh Tempo: ${d}
• *Sisa Tagihan: ${w(s.totalAkhir)}*

💳 *Pembayaran dapat ditransfer ke rekening resmi kami:*
${c}

Apabila sudah melakukan pembayaran, mohon abaikan pesan ini atau kirimkan bukti transfer ke nomor ini. Terima kasih atas kepercayaannya berbelanja di ${i}. 🙏`}else p=`*INFORMASI TAGIHAN TEMPO - ${i.toUpperCase()}*

Halo Bpk/Ibu *${o}*,
Berikut informasi rincian tagihan pembelian Tempo Anda di *${i}*:

📋 *Rincian Tagihan:*
• No. Pesanan: #${e.orderId}
• Tgl. Transaksi: ${l}
• Tgl. Jatuh Tempo: ${d} (tersisa ${s.daysLeft} hari)
• *Sisa Pokok: ${w(s.totalAkhir)}*

💳 *Rekening Pembayaran Resmi:*
${c}

Terima kasih telah menjadi pelanggan setia ${i}. 🙏`;typeof window.openWhatsApp=="function"?window.openWhatsApp(r,p):hi(r,p)};window.setTempoFilter=t=>{ct=t,Ns()};window.onTempoSearch=t=>{na=t||"",Bs()};const Bs=()=>{const t=x("tempo-cards-container");if(!t)return;let e=He.filter(a=>{const r=ca(a);if(ct==="late"&&!r.isLate||ct==="due_soon"&&(!r.isDueSoon||r.isLate)||ct==="active"&&(r.isLate||r.isDueSoon))return!1;if(na.trim()){const s=na.trim().toLowerCase(),i=(a.customer?.name||"").toLowerCase(),o=(a.customer?.wa||"").toLowerCase(),l=(a.orderId||"").toLowerCase();if(!i.includes(s)&&!o.includes(s)&&!l.includes(s))return!1}return!0});if(e.length===0){t.innerHTML=`
            <div class="col-span-full bg-white dark:bg-slate-800 p-8 text-center rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-16 h-16 bg-slate-100 dark:bg-slate-700/50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i class="fa-solid fa-filter-circle-xmark text-2xl"></i>
                </div>
                <h4 class="font-bold text-slate-700 dark:text-slate-200 text-sm uppercase tracking-wider">Tidak Ada Data</h4>
                <p class="text-slate-500 dark:text-slate-400 mt-1 text-xs font-medium">Tidak ada tagihan yang cocok dengan filter atau kata kunci pencarian.</p>
            </div>
        `;return}t.innerHTML=e.map(a=>tn(a)).join("")},tn=t=>{const e=ca(t);ks(t.customer?.wa||"");const a=e.dueDate?new Date(e.dueDate).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"}):"-";let r="",s="border-slate-200 dark:border-slate-700";return e.isLate?(s="border-rose-400 dark:border-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.12)]",r=`<div class="absolute -right-7 top-4 bg-rose-600 text-white text-[9px] font-bold uppercase tracking-widest px-8 py-1 rotate-45 shadow-sm">TERLAMBAT ${e.daysLate} HARI</div>`):e.isDueSoon?(s="border-amber-400 dark:border-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.12)]",r=`<div class="absolute -right-7 top-4 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-widest px-8 py-1 rotate-45 shadow-sm">H-${e.daysLeft<=0?"0 (HARI INI)":e.daysLeft}</div>`):r=`<div class="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">Sisa ${e.daysLeft} Hari</div>`,`
    <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border ${s} relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between">
        ${r}
        
        <div>
            <div class="flex justify-between items-start mb-3 pr-12">
                <div class="flex-1 min-w-0">
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pesanan #${t.orderId}</p>
                    <h3 class="font-bold text-slate-800 dark:text-slate-100 mt-1 uppercase text-sm">${u(t.customer?.name||"Anonim")}</h3>
                    <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                        <p class="text-[11px] font-bold text-slate-500 flex items-center gap-1.5">
                            <i class="fa-brands fa-whatsapp text-emerald-500"></i>
                            <a href="javascript:void(0)" onclick="window.sendSmartTempoWA('${t.orderId}')" class="hover:underline text-slate-600 dark:text-slate-300 font-mono">+${u(t.customer?.wa||"-")}</a>
                        </p>
                        <span class="text-[9px] font-bold px-2 py-0.5 rounded-xl uppercase tracking-widest border ${t.customerType==="Member"?"text-amber-600 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800":"text-slate-500 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"}">${t.customerType==="Member"?'<i class="fa-solid fa-star text-amber-400 mr-1"></i>Member':'<i class="fa-solid fa-user mr-1"></i>Umum'}</span>
                    </div>
                </div>
            </div>
            
            <div class="space-y-2 mb-3 bg-slate-50 dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Jatuh Tempo</span>
                    <span class="font-bold font-mono ${e.isLate?"text-rose-600":e.isDueSoon?"text-amber-600":"text-slate-700 dark:text-slate-300"}">${a}</span>
                </div>
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Sisa Pokok</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${w(e.sisa)}</span>
                </div>
                ${e.isLate?`
                <div class="flex justify-between items-center text-xs ${e.isStopped?"text-slate-500":"text-rose-600"}">
                    <span class="font-bold">Denda (${e.rate}%/hari) ${e.isStopped?'<span class="text-[9px] bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded ml-1">STOPPED</span>':""}</span>
                    <span class="font-bold font-mono">+${w(e.latePenalty)}</span>
                </div>`:""}
            </div>
            
            <div class="flex justify-between items-center bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 p-3.5 rounded-xl border border-rose-100 dark:border-rose-900/30 mb-3">
                <span class="text-[10px] font-bold uppercase tracking-widest">Total Tagihan</span>
                <span class="text-sm font-bold font-mono tracking-tight">${w(e.totalAkhir)}</span>
            </div>
            
            <div class="flex gap-2 mb-3">
                <button onclick="editTempoPenalty('${t.orderId}', ${e.rate})" class="flex-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                    <i class="fa-solid fa-percent"></i> Edit Denda
                </button>
                <button onclick="stopTempoPenalty('${t.orderId}', ${e.latePenalty}, ${e.isStopped})" class="flex-1 ${e.isStopped?"bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.15)]":"bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-200"} rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                    <i class="fa-solid ${e.isStopped?"fa-play":"fa-stop"}"></i> ${e.isStopped?"Lanjut Denda":"Stop Denda"}
                </button>
            </div>
            
            ${t.payment?.installments&&t.payment.installments.length>0?`
            <div class="mb-3 space-y-1.5 bg-slate-50 dark:bg-slate-900/30 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex justify-between">
                    <span>Riwayat Cicilan</span>
                    <span>Total: ${w(t.payment.installments.reduce((i,o)=>i+(parseFloat(o.amount)||0),0))}</span>
                </div>
                ${t.payment.installments.map(i=>`
                <div class="flex justify-between items-center text-[10px]">
                    <span class="text-slate-500 dark:text-slate-400 font-mono">${new Date(i.date).toLocaleDateString("id-ID",{day:"2-digit",month:"short"})}</span>
                    <span class="font-bold text-[var(--color-primary)] font-mono">+${w(i.amount)}</span>
                </div>
                `).join("")}
            </div>`:""}
        </div>
        
        <div class="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
            <div class="flex gap-2">
                <button onclick="window.sendSmartTempoWA('${t.orderId}')" class="flex-1 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer shadow-xs active:scale-95" title="Kirim Tagihan Otomatis WhatsApp">
                    <i class="fa-brands fa-whatsapp text-sm"></i> Tagih WA
                </button>
                <button onclick="previewTempoReceipt('${t.orderId}')" class="flex-1 bg-amber-500 hover:bg-amber-600 text-white rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm shadow-amber-500/20 transition-all active:scale-95" title="Cetak Struk Nota Tempo">
                    <i class="fa-solid fa-print"></i> Struk
                </button>
            </div>
            <div class="flex gap-2">
                <button onclick="payTempoInstallment('${t.orderId}')" class="flex-1 bg-white dark:bg-slate-700 border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95">
                    <i class="fa-solid fa-money-bill-wave"></i> Cicil
                </button>
                <button onclick="markTempoPaid('${t.orderId}')" class="flex-1 primary-bg hover:opacity-90 text-white rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm transition-all active:scale-95">
                    <i class="fa-solid fa-check-double"></i> Lunas
                </button>
            </div>
        </div>
    </div>`},Ns=()=>{let t=0,e=0,a=0,r=0,s=0;He.forEach(o=>{const l=ca(o);t+=l.totalAkhir,l.isLate?(e+=l.totalAkhir,a++):l.isDueSoon?r++:s++});let i=`
    <div class="max-w-full pb-12 fade-in-scale text-sm space-y-5">
        
        <!-- HEADER KARTU STATISTIK METRIK PIUTANG -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400">
                    <i class="fa-solid fa-hand-holding-dollar text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Piutang Aktif</p>
                    <p class="text-base font-bold text-slate-900 dark:text-white font-mono mt-0.5">${w(t)}</p>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400">
                    <i class="fa-solid fa-triangle-exclamation text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Piutang Terlambat</p>
                    <p class="text-base font-bold text-rose-600 dark:text-rose-400 font-mono mt-0.5">${w(e)}</p>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                    <i class="fa-solid fa-file-invoice-dollar text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Nota Tempo</p>
                    <p class="text-base font-bold text-slate-900 dark:text-white font-mono mt-0.5">${He.length} Nota</p>
                </div>
            </div>
        </div>

        <!-- SEARCH BAR & FILTER STATUS PILLS -->
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
            <div class="relative">
                <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input type="text" 
                    id="tempo-search-input"
                    value="${u(na)}"
                    placeholder="Cari nama pelanggan, nomor WhatsApp, atau ID pesanan..." 
                    oninput="window.onTempoSearch(this.value)"
                    class="w-full pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${na?`
                <button onclick="window.onTempoSearch(''); el('tempo-search-input').value='';" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    <i class="fa-solid fa-circle-xmark text-sm"></i>
                </button>`:""}
            </div>

            <div class="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-bold uppercase tracking-wider">
                <button onclick="window.setTempoFilter('all')" 
                    class="px-3.5 py-1.5 rounded-xl border transition-all shrink-0 ${ct==="all"?"primary-bg text-white border-transparent shadow-xs":"bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                    Semua (${He.length})
                </button>
                <button onclick="window.setTempoFilter('late')" 
                    class="px-3.5 py-1.5 rounded-xl border transition-all shrink-0 ${ct==="late"?"bg-rose-600 text-white border-rose-600 shadow-xs":"bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/50 hover:bg-rose-100"}">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i> Terlambat (${a})
                </button>
                <button onclick="window.setTempoFilter('due_soon')" 
                    class="px-3.5 py-1.5 rounded-xl border transition-all shrink-0 ${ct==="due_soon"?"bg-amber-500 text-white border-amber-500 shadow-xs":"bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50 hover:bg-amber-100"}">
                    <i class="fa-solid fa-clock mr-1"></i> H-3 Jatuh Tempo (${r})
                </button>
                <button onclick="window.setTempoFilter('active')" 
                    class="px-3.5 py-1.5 rounded-xl border transition-all shrink-0 ${ct==="active"?"bg-emerald-600 text-white border-emerald-600 shadow-xs":"bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50 hover:bg-emerald-100"}">
                    <i class="fa-solid fa-circle-check mr-1"></i> Berjalan (${s})
                </button>
            </div>
        </div>
    `;He.length===0?i+=`
        <div class="bg-white dark:bg-slate-800 p-10 text-center rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="w-20 h-20 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fa-solid fa-check-double text-4xl"></i>
            </div>
            <h3 class="font-bold text-slate-800 dark:text-slate-100 text-base uppercase tracking-widest">Luar Biasa! Semua Tagihan Lunas</h3>
            <p class="text-slate-500 dark:text-slate-400 mt-1.5 text-xs font-medium">Tidak ada piutang tempo yang sedang aktif atau tertunda saat ini.</p>
        </div>`:i+='<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="tempo-cards-container"></div>',i+="</div>",j("admin-content",i),He.length>0&&Bs()};window.rAdmPiutang=async()=>{R("Memuat data piutang..."),He=[];try{(await P.collection("freshmart_orders").where("payment.method","==","tempo").where("payment.paymentStatus","==","hutang").get()).forEach(e=>{He.push(e.data())})}catch(t){L(),h("Gagal memuat piutang: "+t.message);return}L(),He.sort((t,e)=>{let a=t.payment?.tempoDueDate||0,r=e.payment?.tempoDueDate||0;return a-r}),Ns()};const an=t=>{ki(t),Os()},Os=()=>{const t=xi||"all",e=(wr||[]).filter(i=>t==="visible"?i.isVisible!==!1:t==="hidden"?i.isVisible===!1:!0),a=`
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
            ${[{k:"all",l:"Semua"},{k:"visible",l:"Ditampilkan"},{k:"hidden",l:"Disembunyikan"}].map(i=>`
                <button onclick="filterReviews('${i.k}')" class="px-3.5 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${t===i.k?"shadow-sm":"text-slate-500 dark:text-slate-400"}" style="${t===i.k?"background:var(--color-primary);color:#fff":""}">${i.l}</button>
            `).join("")}
        </div>`;if(!e.length){j("admin-content",'<div class="max-w-full pb-10 text-sm fade-in-scale">'+a+'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-comment-slash text-5xl mb-4 opacity-30"></i>Belum ada ulasan</div></div>');return}const r=i=>Array.from({length:5},(o,l)=>`<i class="fa-solid fa-star ${l<Math.round(i)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join(""),s=e.map(i=>{let o="";try{i.createdAt&&i.createdAt.toDate&&(o=i.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))}catch{}const l=i.isVisible===!1;return`
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border shadow-sm ${l?"border-rose-200 bg-rose-50/40 dark:border-rose-900/40 dark:bg-rose-900/10":"border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"} mb-3">
            <div class="flex items-start justify-between gap-3 mb-2">
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate">${u(i.customerName||"Pelanggan")}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">${u(i.productName||"")}${i.variantName?" · "+u(i.variantName):""}</p>
                </div>
                <span class="text-[9px] font-bold text-slate-400 whitespace-nowrap">${o}</span>
            </div>
            <div class="flex text-xs mb-2.5">${r(i.rating)}</div>
            ${i.text?`<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2.5">${u(i.text)}</p>`:""}
            ${i.photoUrl?`<img src="${u(i.photoUrl)}" onclick="window.open('${u(i.photoUrl)}','_blank')" class="w-20 h-20 rounded-xl object-cover border border-slate-200 dark:border-slate-700 cursor-pointer mb-2.5" onerror="this.style.display='none'" loading="lazy">`:""}
            ${i.adminReply?`<div class="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-3 mb-2.5"><p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1"><i class="fa-solid fa-store mr-1"></i>Balasan Anda</p><p class="text-[11px] text-slate-600 dark:text-slate-300">${u(i.adminReply)}</p></div>`:""}
            <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                <button onclick="replyToReview(${i.id})" class="px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-blue-100 transition-all"><i class="fa-solid fa-reply"></i> ${i.adminReply?"Edit Balasan":"Balas"}</button>
                <button onclick="toggleReviewVisibility(${i.id})" class="px-3 py-2 rounded-xl ${l?"primary-bg-soft primary-text hover:brightness-95":"bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100"} text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all"><i class="fa-solid ${l?"fa-eye":"fa-eye-slash"}"></i> ${l?"Tampilkan":"Sembunyikan"}</button>
                <button onclick="deleteReview(${i.id})" class="px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-rose-100 transition-all"><i class="fa-solid fa-trash"></i> Hapus</button>
            </div>
        </div>`}).join("");j("admin-content",'<div class="max-w-full pb-10 text-sm fade-in-scale">'+a+s+"</div>")},rn=async t=>{const e=(wr||[]).find(a=>a&&a.id!=null&&String(a.id)===String(t));e&&typeof window.customPrompt=="function"&&window.customPrompt("Tulis balasan untuk ulasan ini:",e.adminReply||"",async a=>{R("Menyimpan balasan...");try{await P.collection("freshmart").doc("cms_data").collection("reviews").doc(t.toString()).update({adminReply:a}),h("Balasan tersimpan!")}catch{h("Gagal menyimpan balasan!")}finally{L()}})},sn=async t=>{const e=(wr||[]).find(r=>r&&r.id!=null&&String(r.id)===String(t));if(!e)return;const a=e.isVisible===!1;R("Menyimpan...");try{await P.collection("freshmart").doc("cms_data").collection("reviews").doc(t.toString()).update({isVisible:a}),h(a?"Ulasan ditampilkan lagi!":"Ulasan disembunyikan dari halaman produk!")}catch{h("Gagal mengubah status ulasan!")}finally{L()}},on=t=>{Ze("Hapus Ulasan","Ulasan yang dihapus tidak bisa dikembalikan lagi.",async()=>{R("Menghapus...");try{await P.collection("freshmart").doc("cms_data").collection("reviews").doc(t.toString()).delete(),h("Ulasan dihapus!")}catch{h("Gagal menghapus ulasan!")}finally{L()}})};window.filterReviews=an;window.rAdmReviews=Os;window.replyToReview=rn;window.toggleReviewVisibility=sn;window.deleteReview=on;/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function nn(t,e,a){return(e=pn(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Xe(){return Xe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)({}).hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},Xe.apply(null,arguments)}function es(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,r)}return a}function Ve(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?es(Object(a),!0).forEach(function(r){nn(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):es(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}function ln(t,e){if(t==null)return{};var a,r,s=dn(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)===-1&&{}.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}function dn(t,e){if(t==null)return{};var a={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;a[r]=t[r]}return a}function cn(t,e){if(typeof t!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var r=a.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function pn(t){var e=cn(t,"string");return typeof e=="symbol"?e:e+""}function lr(t){"@babel/helpers - typeof";return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lr(t)}var un="1.15.7";function Ye(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var tt=Ye(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),pa=Ye(/Edge/i),ts=Ye(/firefox/i),Yt=Ye(/safari/i)&&!Ye(/chrome/i)&&!Ye(/android/i),_r=Ye(/iP(ad|od|hone)/i),Rs=Ye(/chrome/i)&&Ye(/android/i),Fs={capture:!1,passive:!1};function N(t,e,a){t.addEventListener(e,a,!tt&&Fs)}function _(t,e,a){t.removeEventListener(e,a,!tt&&Fs)}function Ta(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function Hs(t){return t.host&&t!==document&&t.host.nodeType&&t.host!==t?t.host:t.parentNode}function Oe(t,e,a,r){if(t){a=a||document;do{if(e!=null&&(e[0]===">"?t.parentNode===a&&Ta(t,e):Ta(t,e))||r&&t===a)return t;if(t===a)break}while(t=Hs(t))}return null}var as=/\s+/g;function Pe(t,e,a){if(t&&e)if(t.classList)t.classList[a?"add":"remove"](e);else{var r=(" "+t.className+" ").replace(as," ").replace(" "+e+" "," ");t.className=(r+(a?" "+e:"")).replace(as," ")}}function $(t,e,a){var r=t&&t.style;if(r){if(a===void 0)return document.defaultView&&document.defaultView.getComputedStyle?a=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(a=t.currentStyle),e===void 0?a:a[e];!(e in r)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),r[e]=a+(typeof a=="string"?"":"px")}}function _t(t,e){var a="";if(typeof t=="string")a=t;else do{var r=$(t,"transform");r&&r!=="none"&&(a=r+" "+a)}while(!e&&(t=t.parentNode));var s=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return s&&new s(a)}function Ks(t,e,a){if(t){var r=t.getElementsByTagName(e),s=0,i=r.length;if(a)for(;s<i;s++)a(r[s],s);return r}return[]}function Ke(){var t=document.scrollingElement;return t||document.documentElement}function se(t,e,a,r,s){if(!(!t.getBoundingClientRect&&t!==window)){var i,o,l,d,c,p,m;if(t!==window&&t.parentNode&&t!==Ke()?(i=t.getBoundingClientRect(),o=i.top,l=i.left,d=i.bottom,c=i.right,p=i.height,m=i.width):(o=0,l=0,d=window.innerHeight,c=window.innerWidth,p=window.innerHeight,m=window.innerWidth),(e||a)&&t!==window&&(s=s||t.parentNode,!tt))do if(s&&s.getBoundingClientRect&&($(s,"transform")!=="none"||a&&$(s,"position")!=="static")){var b=s.getBoundingClientRect();o-=b.top+parseInt($(s,"border-top-width")),l-=b.left+parseInt($(s,"border-left-width")),d=o+i.height,c=l+i.width;break}while(s=s.parentNode);if(r&&t!==window){var f=_t(s||t),g=f&&f.a,k=f&&f.d;f&&(o/=k,l/=g,m/=g,p/=k,d=o+p,c=l+m)}return{top:o,left:l,bottom:d,right:c,width:m,height:p}}}function rs(t,e,a){for(var r=pt(t,!0),s=se(t)[e];r;){var i=se(r)[a],o=void 0;if(o=s>=i,!o)return r;if(r===Ke())break;r=pt(r,!1)}return!1}function Rt(t,e,a,r){for(var s=0,i=0,o=t.children;i<o.length;){if(o[i].style.display!=="none"&&o[i]!==C.ghost&&(r||o[i]!==C.dragged)&&Oe(o[i],a.draggable,t,!1)){if(s===e)return o[i];s++}i++}return null}function Br(t,e){for(var a=t.lastElementChild;a&&(a===C.ghost||$(a,"display")==="none"||e&&!Ta(a,e));)a=a.previousElementSibling;return a||null}function De(t,e){var a=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==C.clone&&(!e||Ta(t,e))&&a++;return a}function ss(t){var e=0,a=0,r=Ke();if(t)do{var s=_t(t),i=s.a,o=s.d;e+=t.scrollLeft*i,a+=t.scrollTop*o}while(t!==r&&(t=t.parentNode));return[e,a]}function mn(t,e){for(var a in t)if(t.hasOwnProperty(a)){for(var r in e)if(e.hasOwnProperty(r)&&e[r]===t[a][r])return Number(a)}return-1}function pt(t,e){if(!t||!t.getBoundingClientRect)return Ke();var a=t,r=!1;do if(a.clientWidth<a.scrollWidth||a.clientHeight<a.scrollHeight){var s=$(a);if(a.clientWidth<a.scrollWidth&&(s.overflowX=="auto"||s.overflowX=="scroll")||a.clientHeight<a.scrollHeight&&(s.overflowY=="auto"||s.overflowY=="scroll")){if(!a.getBoundingClientRect||a===document.body)return Ke();if(r||e)return a;r=!0}}while(a=a.parentNode);return Ke()}function gn(t,e){if(t&&e)for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a]);return t}function Ga(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var Xt;function Vs(t,e){return function(){if(!Xt){var a=arguments,r=this;a.length===1?t.call(r,a[0]):t.apply(r,a),Xt=setTimeout(function(){Xt=void 0},e)}}}function bn(){clearTimeout(Xt),Xt=void 0}function Us(t,e,a){t.scrollLeft+=e,t.scrollTop+=a}function Gs(t){var e=window.Polymer,a=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):a?a(t).clone(!0)[0]:t.cloneNode(!0)}function qs(t,e,a){var r={};return Array.from(t.children).forEach(function(s){var i,o,l,d;if(!(!Oe(s,e.draggable,t,!1)||s.animated||s===a)){var c=se(s);r.left=Math.min((i=r.left)!==null&&i!==void 0?i:1/0,c.left),r.top=Math.min((o=r.top)!==null&&o!==void 0?o:1/0,c.top),r.right=Math.max((l=r.right)!==null&&l!==void 0?l:-1/0,c.right),r.bottom=Math.max((d=r.bottom)!==null&&d!==void 0?d:-1/0,c.bottom)}}),r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}var ve="Sortable"+new Date().getTime();function fn(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(s){if(!($(s,"display")==="none"||s===C.ghost)){t.push({target:s,rect:se(s)});var i=Ve({},t[t.length-1].rect);if(s.thisAnimationDuration){var o=_t(s,!0);o&&(i.top-=o.f,i.left-=o.e)}s.fromRect=i}})}},addAnimationState:function(r){t.push(r)},removeAnimationState:function(r){t.splice(mn(t,{target:r}),1)},animateAll:function(r){var s=this;if(!this.options.animation){clearTimeout(e),typeof r=="function"&&r();return}var i=!1,o=0;t.forEach(function(l){var d=0,c=l.target,p=c.fromRect,m=se(c),b=c.prevFromRect,f=c.prevToRect,g=l.rect,k=_t(c,!0);k&&(m.top-=k.f,m.left-=k.e),c.toRect=m,c.thisAnimationDuration&&Ga(b,m)&&!Ga(p,m)&&(g.top-m.top)/(g.left-m.left)===(p.top-m.top)/(p.left-m.left)&&(d=xn(g,b,f,s.options)),Ga(m,p)||(c.prevFromRect=p,c.prevToRect=m,d||(d=s.options.animation),s.animate(c,g,m,d)),d&&(i=!0,o=Math.max(o,d),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},d),c.thisAnimationDuration=d)}),clearTimeout(e),i?e=setTimeout(function(){typeof r=="function"&&r()},o):typeof r=="function"&&r(),t=[]},animate:function(r,s,i,o){if(o){$(r,"transition",""),$(r,"transform","");var l=_t(this.el),d=l&&l.a,c=l&&l.d,p=(s.left-i.left)/(d||1),m=(s.top-i.top)/(c||1);r.animatingX=!!p,r.animatingY=!!m,$(r,"transform","translate3d("+p+"px,"+m+"px,0)"),this.forRepaintDummy=hn(r),$(r,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),$(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){$(r,"transition",""),$(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},o)}}}}function hn(t){return t.offsetWidth}function xn(t,e,a,r){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-a.top,2)+Math.pow(e.left-a.left,2))*r.animation}var Tt=[],qa={initializeByDefault:!0},ua={mount:function(e){for(var a in qa)qa.hasOwnProperty(a)&&!(a in e)&&(e[a]=qa[a]);Tt.forEach(function(r){if(r.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),Tt.push(e)},pluginEvent:function(e,a,r){var s=this;this.eventCanceled=!1,r.cancel=function(){s.eventCanceled=!0};var i=e+"Global";Tt.forEach(function(o){a[o.pluginName]&&(a[o.pluginName][i]&&a[o.pluginName][i](Ve({sortable:a},r)),a.options[o.pluginName]&&a[o.pluginName][e]&&a[o.pluginName][e](Ve({sortable:a},r)))})},initializePlugins:function(e,a,r,s){Tt.forEach(function(l){var d=l.pluginName;if(!(!e.options[d]&&!l.initializeByDefault)){var c=new l(e,a,e.options);c.sortable=e,c.options=e.options,e[d]=c,Xe(r,c.defaults)}});for(var i in e.options)if(e.options.hasOwnProperty(i)){var o=this.modifyOption(e,i,e.options[i]);typeof o<"u"&&(e.options[i]=o)}},getEventProperties:function(e,a){var r={};return Tt.forEach(function(s){typeof s.eventProperties=="function"&&Xe(r,s.eventProperties.call(a[s.pluginName],e))}),r},modifyOption:function(e,a,r){var s;return Tt.forEach(function(i){e[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[a]=="function"&&(s=i.optionListeners[a].call(e[i.pluginName],r))}),s}};function kn(t){var e=t.sortable,a=t.rootEl,r=t.name,s=t.targetEl,i=t.cloneEl,o=t.toEl,l=t.fromEl,d=t.oldIndex,c=t.newIndex,p=t.oldDraggableIndex,m=t.newDraggableIndex,b=t.originalEvent,f=t.putSortable,g=t.extraEventProperties;if(e=e||a&&a[ve],!!e){var k,S=e.options,A="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!tt&&!pa?k=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(k=document.createEvent("Event"),k.initEvent(r,!0,!0)),k.to=o||a,k.from=l||a,k.item=s||a,k.clone=i,k.oldIndex=d,k.newIndex=c,k.oldDraggableIndex=p,k.newDraggableIndex=m,k.originalEvent=b,k.pullMode=f?f.lastPutMode:void 0;var T=Ve(Ve({},g),ua.getEventProperties(r,e));for(var H in T)k[H]=T[H];a&&a.dispatchEvent(k),S[A]&&S[A].call(e,k)}}var wn=["evt"],ke=function(e,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=r.evt,i=ln(r,wn);ua.pluginEvent.bind(C)(e,a,Ve({dragEl:v,parentEl:X,ghostEl:D,rootEl:W,nextEl:kt,lastDownEl:va,cloneEl:J,cloneHidden:ot,dragStarted:Ut,putSortable:ue,activeSortable:C.active,originalEvent:s,oldIndex:Dt,oldDraggableIndex:Zt,newIndex:Ae,newDraggableIndex:rt,hideGhostForTarget:Js,unhideGhostForTarget:Ys,cloneNowHidden:function(){ot=!0},cloneNowShown:function(){ot=!1},dispatchSortableEvent:function(l){fe({sortable:a,name:l,originalEvent:s})}},i))};function fe(t){kn(Ve({putSortable:ue,cloneEl:J,targetEl:v,rootEl:W,oldIndex:Dt,oldDraggableIndex:Zt,newIndex:Ae,newDraggableIndex:rt},t))}var v,X,D,W,kt,va,J,ot,Dt,Ae,Zt,rt,ba,ue,Mt=!1,$a=!1,Ca=[],ht,Be,Wa,za,is,os,Ut,$t,ea,ta=!1,fa=!1,ya,ge,Qa=[],dr=!1,Ma=[],Fa=typeof document<"u",ha=_r,ns=pa||tt?"cssFloat":"float",vn=Fa&&!Rs&&!_r&&"draggable"in document.createElement("div"),Ws=function(){if(Fa){if(tt)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),zs=function(e,a){var r=$(e),s=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),i=Rt(e,0,a),o=Rt(e,1,a),l=i&&$(i),d=o&&$(o),c=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+se(i).width,p=d&&parseInt(d.marginLeft)+parseInt(d.marginRight)+se(o).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&l.float&&l.float!=="none"){var m=l.float==="left"?"left":"right";return o&&(d.clear==="both"||d.clear===m)?"vertical":"horizontal"}return i&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||c>=s&&r[ns]==="none"||o&&r[ns]==="none"&&c+p>s)?"vertical":"horizontal"},yn=function(e,a,r){var s=r?e.left:e.top,i=r?e.right:e.bottom,o=r?e.width:e.height,l=r?a.left:a.top,d=r?a.right:a.bottom,c=r?a.width:a.height;return s===l||i===d||s+o/2===l+c/2},Sn=function(e,a){var r;return Ca.some(function(s){var i=s[ve].options.emptyInsertThreshold;if(!(!i||Br(s))){var o=se(s),l=e>=o.left-i&&e<=o.right+i,d=a>=o.top-i&&a<=o.bottom+i;if(l&&d)return r=s}}),r},Qs=function(e){function a(i,o){return function(l,d,c,p){var m=l.options.group.name&&d.options.group.name&&l.options.group.name===d.options.group.name;if(i==null&&(o||m))return!0;if(i==null||i===!1)return!1;if(o&&i==="clone")return i;if(typeof i=="function")return a(i(l,d,c,p),o)(l,d,c,p);var b=(o?l:d).options.group.name;return i===!0||typeof i=="string"&&i===b||i.join&&i.indexOf(b)>-1}}var r={},s=e.group;(!s||lr(s)!="object")&&(s={name:s}),r.name=s.name,r.checkPull=a(s.pull,!0),r.checkPut=a(s.put),r.revertClone=s.revertClone,e.group=r},Js=function(){!Ws&&D&&$(D,"display","none")},Ys=function(){!Ws&&D&&$(D,"display","")};Fa&&!Rs&&document.addEventListener("click",function(t){if($a)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),$a=!1,!1},!0);var xt=function(e){if(v){e=e.touches?e.touches[0]:e;var a=Sn(e.clientX,e.clientY);if(a){var r={};for(var s in e)e.hasOwnProperty(s)&&(r[s]=e[s]);r.target=r.rootEl=a,r.preventDefault=void 0,r.stopPropagation=void 0,a[ve]._onDragOver(r)}}},Pn=function(e){v&&v.parentNode[ve]._isOutsideThisEl(e.target)};function C(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Xe({},e),t[ve]=this;var a={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return zs(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(o,l){o.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:C.supportPointer!==!1&&"PointerEvent"in window&&(!Yt||_r),emptyInsertThreshold:5};ua.initializePlugins(this,t,a);for(var r in a)!(r in e)&&(e[r]=a[r]);Qs(e);for(var s in this)s.charAt(0)==="_"&&typeof this[s]=="function"&&(this[s]=this[s].bind(this));this.nativeDraggable=e.forceFallback?!1:vn,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?N(t,"pointerdown",this._onTapStart):(N(t,"mousedown",this._onTapStart),N(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(N(t,"dragover",this),N(t,"dragenter",this)),Ca.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Xe(this,fn())}C.prototype={constructor:C,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&($t=null)},_getDirection:function(e,a){return typeof this.options.direction=="function"?this.options.direction.call(this,e,a,v):this.options.direction},_onTapStart:function(e){if(e.cancelable){var a=this,r=this.el,s=this.options,i=s.preventOnFilter,o=e.type,l=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,d=(l||e).target,c=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||d,p=s.filter;if(jn(r),!v&&!(/mousedown|pointerdown/.test(o)&&e.button!==0||s.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&Yt&&d&&d.tagName.toUpperCase()==="SELECT")&&(d=Oe(d,s.draggable,r,!1),!(d&&d.animated)&&va!==d)){if(Dt=De(d),Zt=De(d,s.draggable),typeof p=="function"){if(p.call(this,e,d,this)){fe({sortable:a,rootEl:c,name:"filter",targetEl:d,toEl:r,fromEl:r}),ke("filter",a,{evt:e}),i&&e.preventDefault();return}}else if(p&&(p=p.split(",").some(function(m){if(m=Oe(c,m.trim(),r,!1),m)return fe({sortable:a,rootEl:m,name:"filter",targetEl:d,fromEl:r,toEl:r}),ke("filter",a,{evt:e}),!0}),p)){i&&e.preventDefault();return}s.handle&&!Oe(c,s.handle,r,!1)||this._prepareDragStart(e,l,d)}}},_prepareDragStart:function(e,a,r){var s=this,i=s.el,o=s.options,l=i.ownerDocument,d;if(r&&!v&&r.parentNode===i){var c=se(r);if(W=i,v=r,X=v.parentNode,kt=v.nextSibling,va=r,ba=o.group,C.dragged=v,ht={target:v,clientX:(a||e).clientX,clientY:(a||e).clientY},is=ht.clientX-c.left,os=ht.clientY-c.top,this._lastX=(a||e).clientX,this._lastY=(a||e).clientY,v.style["will-change"]="all",d=function(){if(ke("delayEnded",s,{evt:e}),C.eventCanceled){s._onDrop();return}s._disableDelayedDragEvents(),!ts&&s.nativeDraggable&&(v.draggable=!0),s._triggerDragStart(e,a),fe({sortable:s,name:"choose",originalEvent:e}),Pe(v,o.chosenClass,!0)},o.ignore.split(",").forEach(function(p){Ks(v,p.trim(),Ja)}),N(l,"dragover",xt),N(l,"mousemove",xt),N(l,"touchmove",xt),o.supportPointer?(N(l,"pointerup",s._onDrop),!this.nativeDraggable&&N(l,"pointercancel",s._onDrop)):(N(l,"mouseup",s._onDrop),N(l,"touchend",s._onDrop),N(l,"touchcancel",s._onDrop)),ts&&this.nativeDraggable&&(this.options.touchStartThreshold=4,v.draggable=!0),ke("delayStart",this,{evt:e}),o.delay&&(!o.delayOnTouchOnly||a)&&(!this.nativeDraggable||!(pa||tt))){if(C.eventCanceled){this._onDrop();return}o.supportPointer?(N(l,"pointerup",s._disableDelayedDrag),N(l,"pointercancel",s._disableDelayedDrag)):(N(l,"mouseup",s._disableDelayedDrag),N(l,"touchend",s._disableDelayedDrag),N(l,"touchcancel",s._disableDelayedDrag)),N(l,"mousemove",s._delayedDragTouchMoveHandler),N(l,"touchmove",s._delayedDragTouchMoveHandler),o.supportPointer&&N(l,"pointermove",s._delayedDragTouchMoveHandler),s._dragStartTimer=setTimeout(d,o.delay)}else d()}},_delayedDragTouchMoveHandler:function(e){var a=e.touches?e.touches[0]:e;Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){v&&Ja(v),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;_(e,"mouseup",this._disableDelayedDrag),_(e,"touchend",this._disableDelayedDrag),_(e,"touchcancel",this._disableDelayedDrag),_(e,"pointerup",this._disableDelayedDrag),_(e,"pointercancel",this._disableDelayedDrag),_(e,"mousemove",this._delayedDragTouchMoveHandler),_(e,"touchmove",this._delayedDragTouchMoveHandler),_(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,a){a=a||e.pointerType=="touch"&&e,!this.nativeDraggable||a?this.options.supportPointer?N(document,"pointermove",this._onTouchMove):a?N(document,"touchmove",this._onTouchMove):N(document,"mousemove",this._onTouchMove):(N(v,"dragend",this),N(W,"dragstart",this._onDragStart));try{document.selection?Sa(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,a){if(Mt=!1,W&&v){ke("dragStarted",this,{evt:a}),this.nativeDraggable&&N(document,"dragover",Pn);var r=this.options;!e&&Pe(v,r.dragClass,!1),Pe(v,r.ghostClass,!0),C.active=this,e&&this._appendGhost(),fe({sortable:this,name:"start",originalEvent:a})}else this._nulling()},_emulateDragOver:function(){if(Be){this._lastX=Be.clientX,this._lastY=Be.clientY,Js();for(var e=document.elementFromPoint(Be.clientX,Be.clientY),a=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Be.clientX,Be.clientY),e!==a);)a=e;if(v.parentNode[ve]._isOutsideThisEl(e),a)do{if(a[ve]){var r=void 0;if(r=a[ve]._onDragOver({clientX:Be.clientX,clientY:Be.clientY,target:e,rootEl:a}),r&&!this.options.dragoverBubble)break}e=a}while(a=Hs(a));Ys()}},_onTouchMove:function(e){if(ht){var a=this.options,r=a.fallbackTolerance,s=a.fallbackOffset,i=e.touches?e.touches[0]:e,o=D&&_t(D,!0),l=D&&o&&o.a,d=D&&o&&o.d,c=ha&&ge&&ss(ge),p=(i.clientX-ht.clientX+s.x)/(l||1)+(c?c[0]-Qa[0]:0)/(l||1),m=(i.clientY-ht.clientY+s.y)/(d||1)+(c?c[1]-Qa[1]:0)/(d||1);if(!C.active&&!Mt){if(r&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<r)return;this._onDragStart(e,!0)}if(D){o?(o.e+=p-(Wa||0),o.f+=m-(za||0)):o={a:1,b:0,c:0,d:1,e:p,f:m};var b="matrix(".concat(o.a,",").concat(o.b,",").concat(o.c,",").concat(o.d,",").concat(o.e,",").concat(o.f,")");$(D,"webkitTransform",b),$(D,"mozTransform",b),$(D,"msTransform",b),$(D,"transform",b),Wa=p,za=m,Be=i}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!D){var e=this.options.fallbackOnBody?document.body:W,a=se(v,!0,ha,!0,e),r=this.options;if(ha){for(ge=e;$(ge,"position")==="static"&&$(ge,"transform")==="none"&&ge!==document;)ge=ge.parentNode;ge!==document.body&&ge!==document.documentElement?(ge===document&&(ge=Ke()),a.top+=ge.scrollTop,a.left+=ge.scrollLeft):ge=Ke(),Qa=ss(ge)}D=v.cloneNode(!0),Pe(D,r.ghostClass,!1),Pe(D,r.fallbackClass,!0),Pe(D,r.dragClass,!0),$(D,"transition",""),$(D,"transform",""),$(D,"box-sizing","border-box"),$(D,"margin",0),$(D,"top",a.top),$(D,"left",a.left),$(D,"width",a.width),$(D,"height",a.height),$(D,"opacity","0.8"),$(D,"position",ha?"absolute":"fixed"),$(D,"zIndex","100000"),$(D,"pointerEvents","none"),C.ghost=D,e.appendChild(D),$(D,"transform-origin",is/parseInt(D.style.width)*100+"% "+os/parseInt(D.style.height)*100+"%")}},_onDragStart:function(e,a){var r=this,s=e.dataTransfer,i=r.options;if(ke("dragStart",this,{evt:e}),C.eventCanceled){this._onDrop();return}ke("setupClone",this),C.eventCanceled||(J=Gs(v),J.removeAttribute("id"),J.draggable=!1,J.style["will-change"]="",this._hideClone(),Pe(J,this.options.chosenClass,!1),C.clone=J),r.cloneId=Sa(function(){ke("clone",r),!C.eventCanceled&&(r.options.removeCloneOnHide||W.insertBefore(J,v),r._hideClone(),fe({sortable:r,name:"clone"}))}),!a&&Pe(v,i.dragClass,!0),a?($a=!0,r._loopId=setInterval(r._emulateDragOver,50)):(_(document,"mouseup",r._onDrop),_(document,"touchend",r._onDrop),_(document,"touchcancel",r._onDrop),s&&(s.effectAllowed="move",i.setData&&i.setData.call(r,s,v)),N(document,"drop",r),$(v,"transform","translateZ(0)")),Mt=!0,r._dragStartId=Sa(r._dragStarted.bind(r,a,e)),N(document,"selectstart",r),Ut=!0,window.getSelection().removeAllRanges(),Yt&&$(document.body,"user-select","none")},_onDragOver:function(e){var a=this.el,r=e.target,s,i,o,l=this.options,d=l.group,c=C.active,p=ba===d,m=l.sort,b=ue||c,f,g=this,k=!1;if(dr)return;function S(ft,At){ke(ft,g,Ve({evt:e,isOwner:p,axis:f?"vertical":"horizontal",revert:o,dragRect:s,targetRect:i,canSort:m,fromSortable:b,target:r,completed:T,onMove:function(Gr,ni){return xa(W,a,v,s,Gr,se(Gr),e,ni)},changed:H},At))}function A(){S("dragOverAnimationCapture"),g.captureAnimationState(),g!==b&&b.captureAnimationState()}function T(ft){return S("dragOverCompleted",{insertion:ft}),ft&&(p?c._hideClone():c._showClone(g),g!==b&&(Pe(v,ue?ue.options.ghostClass:c.options.ghostClass,!1),Pe(v,l.ghostClass,!0)),ue!==g&&g!==C.active?ue=g:g===C.active&&ue&&(ue=null),b===g&&(g._ignoreWhileAnimating=r),g.animateAll(function(){S("dragOverAnimationComplete"),g._ignoreWhileAnimating=null}),g!==b&&(b.animateAll(),b._ignoreWhileAnimating=null)),(r===v&&!v.animated||r===a&&!r.animated)&&($t=null),!l.dragoverBubble&&!e.rootEl&&r!==document&&(v.parentNode[ve]._isOutsideThisEl(e.target),!ft&&xt(e)),!l.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),k=!0}function H(){Ae=De(v),rt=De(v,l.draggable),fe({sortable:g,name:"change",toEl:a,newIndex:Ae,newDraggableIndex:rt,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),r=Oe(r,l.draggable,a,!0),S("dragOver"),C.eventCanceled)return k;if(v.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||g._ignoreWhileAnimating===r)return T(!1);if($a=!1,c&&!l.disabled&&(p?m||(o=X!==W):ue===this||(this.lastPutMode=ba.checkPull(this,c,v,e))&&d.checkPut(this,c,v,e))){if(f=this._getDirection(e,r)==="vertical",s=se(v),S("dragOverValid"),C.eventCanceled)return k;if(o)return X=W,A(),this._hideClone(),S("revert"),C.eventCanceled||(kt?W.insertBefore(v,kt):W.appendChild(v)),T(!0);var E=Br(a,l.draggable);if(!E||Cn(e,f,this)&&!E.animated){if(E===v)return T(!1);if(E&&a===e.target&&(r=E),r&&(i=se(r)),xa(W,a,v,s,r,i,e,!!r)!==!1)return A(),E&&E.nextSibling?a.insertBefore(v,E.nextSibling):a.appendChild(v),X=a,H(),T(!0)}else if(E&&$n(e,f,this)){var Y=Rt(a,0,l,!0);if(Y===v)return T(!1);if(r=Y,i=se(r),xa(W,a,v,s,r,i,e,!1)!==!1)return A(),a.insertBefore(v,Y),X=a,H(),T(!0)}else if(r.parentNode===a){i=se(r);var U=0,G,F=v.parentNode!==a,q=!yn(v.animated&&v.toRect||s,r.animated&&r.toRect||i,f),I=f?"top":"left",B=rs(r,"top","top")||rs(v,"top","top"),le=B?B.scrollTop:void 0;$t!==r&&(G=i[I],ta=!1,fa=!q&&l.invertSwap||F),U=Mn(e,r,i,f,q?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,fa,$t===r);var ae;if(U!==0){var ne=De(v);do ne-=U,ae=X.children[ne];while(ae&&($(ae,"display")==="none"||ae===D))}if(U===0||ae===r)return T(!1);$t=r,ea=U;var Se=r.nextElementSibling,te=!1;te=U===1;var xe=xa(W,a,v,s,r,i,e,te);if(xe!==!1)return(xe===1||xe===-1)&&(te=xe===1),dr=!0,setTimeout(Tn,30),A(),te&&!Se?a.appendChild(v):r.parentNode.insertBefore(v,te?Se:r),B&&Us(B,0,le-B.scrollTop),X=v.parentNode,G!==void 0&&!fa&&(ya=Math.abs(G-se(r)[I])),H(),T(!0)}if(a.contains(v))return T(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){_(document,"mousemove",this._onTouchMove),_(document,"touchmove",this._onTouchMove),_(document,"pointermove",this._onTouchMove),_(document,"dragover",xt),_(document,"mousemove",xt),_(document,"touchmove",xt)},_offUpEvents:function(){var e=this.el.ownerDocument;_(e,"mouseup",this._onDrop),_(e,"touchend",this._onDrop),_(e,"pointerup",this._onDrop),_(e,"pointercancel",this._onDrop),_(e,"touchcancel",this._onDrop),_(document,"selectstart",this)},_onDrop:function(e){var a=this.el,r=this.options;if(Ae=De(v),rt=De(v,r.draggable),ke("drop",this,{evt:e}),X=v&&v.parentNode,Ae=De(v),rt=De(v,r.draggable),C.eventCanceled){this._nulling();return}Mt=!1,fa=!1,ta=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),cr(this.cloneId),cr(this._dragStartId),this.nativeDraggable&&(_(document,"drop",this),_(a,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Yt&&$(document.body,"user-select",""),$(v,"transform",""),e&&(Ut&&(e.cancelable&&e.preventDefault(),!r.dropBubble&&e.stopPropagation()),D&&D.parentNode&&D.parentNode.removeChild(D),(W===X||ue&&ue.lastPutMode!=="clone")&&J&&J.parentNode&&J.parentNode.removeChild(J),v&&(this.nativeDraggable&&_(v,"dragend",this),Ja(v),v.style["will-change"]="",Ut&&!Mt&&Pe(v,ue?ue.options.ghostClass:this.options.ghostClass,!1),Pe(v,this.options.chosenClass,!1),fe({sortable:this,name:"unchoose",toEl:X,newIndex:null,newDraggableIndex:null,originalEvent:e}),W!==X?(Ae>=0&&(fe({rootEl:X,name:"add",toEl:X,fromEl:W,originalEvent:e}),fe({sortable:this,name:"remove",toEl:X,originalEvent:e}),fe({rootEl:X,name:"sort",toEl:X,fromEl:W,originalEvent:e}),fe({sortable:this,name:"sort",toEl:X,originalEvent:e})),ue&&ue.save()):Ae!==Dt&&Ae>=0&&(fe({sortable:this,name:"update",toEl:X,originalEvent:e}),fe({sortable:this,name:"sort",toEl:X,originalEvent:e})),C.active&&((Ae==null||Ae===-1)&&(Ae=Dt,rt=Zt),fe({sortable:this,name:"end",toEl:X,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){ke("nulling",this),W=v=X=D=kt=J=va=ot=ht=Be=Ut=Ae=rt=Dt=Zt=$t=ea=ue=ba=C.dragged=C.ghost=C.clone=C.active=null;var e=this.el;Ma.forEach(function(a){e.contains(a)&&(a.checked=!0)}),Ma.length=Wa=za=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":v&&(this._onDragOver(e),An(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],a,r=this.el.children,s=0,i=r.length,o=this.options;s<i;s++)a=r[s],Oe(a,o.draggable,this.el,!1)&&e.push(a.getAttribute(o.dataIdAttr)||Dn(a));return e},sort:function(e,a){var r={},s=this.el;this.toArray().forEach(function(i,o){var l=s.children[o];Oe(l,this.options.draggable,s,!1)&&(r[i]=l)},this),a&&this.captureAnimationState(),e.forEach(function(i){r[i]&&(s.removeChild(r[i]),s.appendChild(r[i]))}),a&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,a){return Oe(e,a||this.options.draggable,this.el,!1)},option:function(e,a){var r=this.options;if(a===void 0)return r[e];var s=ua.modifyOption(this,e,a);typeof s<"u"?r[e]=s:r[e]=a,e==="group"&&Qs(r)},destroy:function(){ke("destroy",this);var e=this.el;e[ve]=null,_(e,"mousedown",this._onTapStart),_(e,"touchstart",this._onTapStart),_(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(_(e,"dragover",this),_(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Ca.splice(Ca.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!ot){if(ke("hideClone",this),C.eventCanceled)return;$(J,"display","none"),this.options.removeCloneOnHide&&J.parentNode&&J.parentNode.removeChild(J),ot=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(ot){if(ke("showClone",this),C.eventCanceled)return;v.parentNode==W&&!this.options.group.revertClone?W.insertBefore(J,v):kt?W.insertBefore(J,kt):W.appendChild(J),this.options.group.revertClone&&this.animate(v,J),$(J,"display",""),ot=!1}}};function An(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function xa(t,e,a,r,s,i,o,l){var d,c=t[ve],p=c.options.onMove,m;return window.CustomEvent&&!tt&&!pa?d=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(d=document.createEvent("Event"),d.initEvent("move",!0,!0)),d.to=e,d.from=t,d.dragged=a,d.draggedRect=r,d.related=s||e,d.relatedRect=i||se(e),d.willInsertAfter=l,d.originalEvent=o,t.dispatchEvent(d),p&&(m=p.call(c,d,o)),m}function Ja(t){t.draggable=!1}function Tn(){dr=!1}function $n(t,e,a){var r=se(Rt(a.el,0,a.options,!0)),s=qs(a.el,a.options,D),i=10;return e?t.clientX<s.left-i||t.clientY<r.top&&t.clientX<r.right:t.clientY<s.top-i||t.clientY<r.bottom&&t.clientX<r.left}function Cn(t,e,a){var r=se(Br(a.el,a.options.draggable)),s=qs(a.el,a.options,D),i=10;return e?t.clientX>s.right+i||t.clientY>r.bottom&&t.clientX>r.left:t.clientY>s.bottom+i||t.clientX>r.right&&t.clientY>r.top}function Mn(t,e,a,r,s,i,o,l){var d=r?t.clientY:t.clientX,c=r?a.height:a.width,p=r?a.top:a.left,m=r?a.bottom:a.right,b=!1;if(!o){if(l&&ya<c*s){if(!ta&&(ea===1?d>p+c*i/2:d<m-c*i/2)&&(ta=!0),ta)b=!0;else if(ea===1?d<p+ya:d>m-ya)return-ea}else if(d>p+c*(1-s)/2&&d<m-c*(1-s)/2)return In(e)}return b=b||o,b&&(d<p+c*i/2||d>m-c*i/2)?d>p+c/2?1:-1:0}function In(t){return De(v)<De(t)?1:-1}function Dn(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,a=e.length,r=0;a--;)r+=e.charCodeAt(a);return r.toString(36)}function jn(t){Ma.length=0;for(var e=t.getElementsByTagName("input"),a=e.length;a--;){var r=e[a];r.checked&&Ma.push(r)}}function Sa(t){return setTimeout(t,0)}function cr(t){return clearTimeout(t)}Fa&&N(document,"touchmove",function(t){(C.active||Mt)&&t.cancelable&&t.preventDefault()});C.utils={on:N,off:_,css:$,find:Ks,is:function(e,a){return!!Oe(e,a,e,!1)},extend:gn,throttle:Vs,closest:Oe,toggleClass:Pe,clone:Gs,index:De,nextTick:Sa,cancelNextTick:cr,detectDirection:zs,getChild:Rt,expando:ve};C.get=function(t){return t[ve]};C.mount=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];e[0].constructor===Array&&(e=e[0]),e.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(C.utils=Ve(Ve({},C.utils),r.utils)),ua.mount(r)})};C.create=function(t,e){return new C(t,e)};C.version=un;var re=[],Gt,pr,ur=!1,Ya,Xa,Ia,qt;function Ln(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(a){var r=a.originalEvent;this.sortable.nativeDraggable?N(document,"dragover",this._handleAutoScroll):this.options.supportPointer?N(document,"pointermove",this._handleFallbackAutoScroll):r.touches?N(document,"touchmove",this._handleFallbackAutoScroll):N(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(a){var r=a.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?_(document,"dragover",this._handleAutoScroll):(_(document,"pointermove",this._handleFallbackAutoScroll),_(document,"touchmove",this._handleFallbackAutoScroll),_(document,"mousemove",this._handleFallbackAutoScroll)),ls(),Pa(),bn()},nulling:function(){Ia=pr=Gt=ur=qt=Ya=Xa=null,re.length=0},_handleFallbackAutoScroll:function(a){this._handleAutoScroll(a,!0)},_handleAutoScroll:function(a,r){var s=this,i=(a.touches?a.touches[0]:a).clientX,o=(a.touches?a.touches[0]:a).clientY,l=document.elementFromPoint(i,o);if(Ia=a,r||this.options.forceAutoScrollFallback||pa||tt||Yt){Za(a,this.options,l,r);var d=pt(l,!0);ur&&(!qt||i!==Ya||o!==Xa)&&(qt&&ls(),qt=setInterval(function(){var c=pt(document.elementFromPoint(i,o),!0);c!==d&&(d=c,Pa()),Za(a,s.options,c,r)},10),Ya=i,Xa=o)}else{if(!this.options.bubbleScroll||pt(l,!0)===Ke()){Pa();return}Za(a,this.options,pt(l,!1),!1)}}},Xe(t,{pluginName:"scroll",initializeByDefault:!0})}function Pa(){re.forEach(function(t){clearInterval(t.pid)}),re=[]}function ls(){clearInterval(qt)}var Za=Vs(function(t,e,a,r){if(e.scroll){var s=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,o=e.scrollSensitivity,l=e.scrollSpeed,d=Ke(),c=!1,p;pr!==a&&(pr=a,Pa(),Gt=e.scroll,p=e.scrollFn,Gt===!0&&(Gt=pt(a,!0)));var m=0,b=Gt;do{var f=b,g=se(f),k=g.top,S=g.bottom,A=g.left,T=g.right,H=g.width,E=g.height,Y=void 0,U=void 0,G=f.scrollWidth,F=f.scrollHeight,q=$(f),I=f.scrollLeft,B=f.scrollTop;f===d?(Y=H<G&&(q.overflowX==="auto"||q.overflowX==="scroll"||q.overflowX==="visible"),U=E<F&&(q.overflowY==="auto"||q.overflowY==="scroll"||q.overflowY==="visible")):(Y=H<G&&(q.overflowX==="auto"||q.overflowX==="scroll"),U=E<F&&(q.overflowY==="auto"||q.overflowY==="scroll"));var le=Y&&(Math.abs(T-s)<=o&&I+H<G)-(Math.abs(A-s)<=o&&!!I),ae=U&&(Math.abs(S-i)<=o&&B+E<F)-(Math.abs(k-i)<=o&&!!B);if(!re[m])for(var ne=0;ne<=m;ne++)re[ne]||(re[ne]={});(re[m].vx!=le||re[m].vy!=ae||re[m].el!==f)&&(re[m].el=f,re[m].vx=le,re[m].vy=ae,clearInterval(re[m].pid),(le!=0||ae!=0)&&(c=!0,re[m].pid=setInterval(function(){r&&this.layer===0&&C.active._onTouchMove(Ia);var Se=re[this.layer].vy?re[this.layer].vy*l:0,te=re[this.layer].vx?re[this.layer].vx*l:0;typeof p=="function"&&p.call(C.dragged.parentNode[ve],te,Se,t,Ia,re[this.layer].el)!=="continue"||Us(re[this.layer].el,te,Se)}.bind({layer:m}),24))),m++}while(e.bubbleScroll&&b!==d&&(b=pt(b,!1)));ur=c}},30),Xs=function(e){var a=e.originalEvent,r=e.putSortable,s=e.dragEl,i=e.activeSortable,o=e.dispatchSortableEvent,l=e.hideGhostForTarget,d=e.unhideGhostForTarget;if(a){var c=r||i;l();var p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,m=document.elementFromPoint(p.clientX,p.clientY);d(),c&&!c.el.contains(m)&&(o("spill"),this.onSpill({dragEl:s,putSortable:r}))}};function Nr(){}Nr.prototype={startIndex:null,dragStart:function(e){var a=e.oldDraggableIndex;this.startIndex=a},onSpill:function(e){var a=e.dragEl,r=e.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var s=Rt(this.sortable.el,this.startIndex,this.options);s?this.sortable.el.insertBefore(a,s):this.sortable.el.appendChild(a),this.sortable.animateAll(),r&&r.animateAll()},drop:Xs};Xe(Nr,{pluginName:"revertOnSpill"});function Or(){}Or.prototype={onSpill:function(e){var a=e.dragEl,r=e.putSortable,s=r||this.sortable;s.captureAnimationState(),a.parentNode&&a.parentNode.removeChild(a),s.animateAll()},drop:Xs};Xe(Or,{pluginName:"removeOnSpill"});C.mount(new Ln);C.mount(Or,Nr);typeof window.bannerTmr>"u"&&(window.bannerTmr=null);let er=null;const mr=()=>{document.querySelectorAll("#banner-slider video.banner-video-element").forEach(t=>{t.dataset.init||(t.dataset.init="true",t.muted=!0,t.loop=!0,t.playsInline=!0,t.setAttribute("playsinline",""),t.setAttribute("loop",""),t.setAttribute("autoplay","")),t.dataset.loopAttached||(t.dataset.loopAttached="true",t.addEventListener("ended",()=>{t.currentTime=0,t.play().catch(()=>{})})),t.dataset.userUnmuted==="true"&&(t.muted=!1),t.play().catch(()=>{})})},En=(t,e)=>{const a=x(`banner-slide-${e}`)||t&&t.closest(".banner-slide-item");if(!a)return;const r=a.querySelector("video.banner-video-element");if(r){r.muted?(r.muted=!1,r.volume=1,r.dataset.userUnmuted="true",r.play().catch(()=>{}),t&&(t.innerHTML='<i class="fa-solid fa-volume-high text-xs"></i> <span>Suara On</span>',t.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 primary-bg text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer")):(r.muted=!0,r.dataset.userUnmuted="false",t&&(t.innerHTML='<i class="fa-solid fa-volume-xmark text-xs"></i> <span>Muted</span>',t.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer"));return}const s=a.querySelector("iframe.banner-video-iframe");s&&(s.dataset.muted!=="false"?(s.dataset.muted="false",s.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}',"*"),s.contentWindow?.postMessage('{"event":"command","func":"setVolume","args":[100]}',"*"),t&&(t.innerHTML='<i class="fa-solid fa-volume-high text-xs"></i> <span>Suara On</span>',t.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 primary-bg text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer")):(s.dataset.muted="true",s.contentWindow?.postMessage('{"event":"command","func":"mute","args":""}',"*"),t&&(t.innerHTML='<i class="fa-solid fa-volume-xmark text-xs"></i> <span>Muted</span>',t.className="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer")))},Ft=t=>{const e=x("banner-dots-container");if(!e)return;e.querySelectorAll(".banner-dot-item").forEach((r,s)=>{s===t?r.className="banner-dot-item h-2.5 rounded-full transition-all duration-300 bg-[var(--color-primary)] w-7 shadow-sm":r.className="banner-dot-item w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"})},_n=()=>{er&&clearTimeout(er),er=setTimeout(()=>{const t=x("banner-slider");if(!t)return;const e=t.querySelectorAll(".banner-slide-item");if(!e||!e.length)return;let a=0,r=1/0;e.forEach((s,i)=>{const o=Math.abs(s.offsetLeft-t.scrollLeft);o<r&&(r=o,a=i)}),Ft(a)},100)},Bn=t=>{clearInterval(window.bannerTmr);const e=x("banner-slider");if(!e)return;const a=e.querySelectorAll(".banner-slide-item");a&&a[t]&&(e.scrollTo({left:a[t].offsetLeft-e.offsetLeft,behavior:"smooth"}),Ft(t)),setTimeout(ma,8e3)},Nn=()=>{clearInterval(window.bannerTmr);const t=x("banner-slider");if(!t)return;const e=t.querySelectorAll(".banner-slide-item");if(!e||!e.length)return;let a=0,r=1/0;e.forEach((i,o)=>{const l=Math.abs(i.offsetLeft-t.scrollLeft);l<r&&(r=l,a=o)});const s=(a-1+e.length)%e.length;t.scrollTo({left:e[s].offsetLeft-t.offsetLeft,behavior:"smooth"}),Ft(s),setTimeout(ma,8e3)},On=()=>{clearInterval(window.bannerTmr);const t=x("banner-slider");if(!t)return;const e=t.querySelectorAll(".banner-slide-item");if(!e||!e.length)return;let a=0,r=1/0;e.forEach((i,o)=>{const l=Math.abs(i.offsetLeft-t.scrollLeft);l<r&&(r=l,a=o)});const s=(a+1)%e.length;t.scrollTo({left:e[s].offsetLeft-t.offsetLeft,behavior:"smooth"}),Ft(s),setTimeout(ma,8e3)},ma=()=>{if(clearInterval(window.bannerTmr),!x("banner-slider")||!n.banners||n.banners.length<=1)return;const e=()=>{mr()};e(),mr(),window.bannerTmr=setInterval(()=>{const a=x("banner-slider");if(!a)return clearInterval(window.bannerTmr);const r=a.querySelectorAll(".banner-slide-item");if(!r||r.length<=1){const s=a.scrollWidth-a.clientWidth;a.scrollLeft>=s-10?a.scrollTo({left:0,behavior:"smooth"}):a.scrollBy({left:a.clientWidth,behavior:"smooth"})}else{let s=0,i=1/0;r.forEach((d,c)=>{const p=Math.abs(d.offsetLeft-a.scrollLeft);p<i&&(i=p,s=c)});const o=(s+1)%r.length,l=r[o];a.scrollTo({left:l.offsetLeft-a.offsetLeft,behavior:"smooth"}),Ft(o)}setTimeout(e,400)},8e3)};window.forcePlayBannerVideos=mr;window.toggleBannerVideoSound=En;window.updateBannerDots=Ft;window.onBannerScroll=_n;window.scrollToBanner=Bn;window.scrollBannerPrev=Nn;window.scrollBannerNext=On;window.startBannerAutoSlide=ma;const Zs=[{id:"log-1-9-2",version:"v1.9.2",date:"2026-09-21",title:"Geser & Atur Urutan Produk (Drag & Drop Reorder): Susun Tampilan Produk Sesuka Hati, Kelompokkan per Kategori Otomatis, & Sinkronisasi Urutan ke Storefront Pembeli",category:"feature",badge:"Product Drag & Drop Reorder v1.9.2",items:["Geser Urutan Produk (Drag & Drop): Pemilik toko dapat langsung menahan dan menggeser kartu produk di halaman Admin CMS untuk mengatur urutan tampilan sesuka hati — mendukung sentuhan jari di HP (touch) maupun seret mouse di komputer.","Tombol Panah ▲▼ Geser Cepat: Setiap kartu produk dilengkapi tombol naik/turun untuk menggeser produk satu posisi secara instan tanpa perlu drag jauh, sangat cocok untuk HP layar kecil.","Badge Nomor Urut #1, #2, ... (Klik untuk Pindah Cepat): Nomor urutan produk ditampilkan di setiap kartu. Klik badge untuk langsung memindahkan produk ke nomor urut tertentu dengan cepat.",'Rapikan per Kategori Otomatis (1 Klik): Tombol "Rapikan per Kategori" mengelompokkan produk sejenis (paku dengan paku, semen dengan semen, cat dengan cat) secara otomatis dalam satu klik tanpa perlu geser manual satu-satu.','Menu Urutkan Cepat: Dropdown "Urutkan Cepat" tersedia dengan pilihan: Nama A-Z, Nama Z-A, Harga Termurah, Harga Termahal, dan Reset ke Urutan Terbaru — semuanya tersimpan permanen ke cloud.',"Penyimpanan Otomatis & Sinkronisasi Real-Time: Setiap perubahan urutan langsung tersimpan ke database cloud (Firestore) dan otomatis tersinkron ke semua perangkat tanpa reload.","Urutan Tercermin di Storefront Pembeli: Urutan produk yang diatur seller menjadi tampilan default halaman Beranda dan Katalog pembeli. Pembeli tetap bebas memilih filter sendiri (Termurah, Termahal, A-Z) sesuai keinginan.","Manajemen Urutan Cerdas: Produk baru otomatis masuk posisi #1 (terdepan), produk dihapus otomatis bersih dari daftar urutan, dan produk duplikat otomatis muncul tepat di sebelah produk aslinya."]},{id:"log-1-9-1",version:"v1.9.1",date:"2026-09-20",title:"Sistem Proteksi Member Terkunci (Nama Permanen & Anti Duplikasi), Label Pembeda Member vs Umum di CMS & Piutang Tempo, Serta Penguatan Aturan Keamanan Database Firestore",category:"feature",badge:"Member Locking & Security Rules v1.9.1",items:["Sistem Identitas Member Terkunci (Anti Duplikasi Akun): Data nama member resmi yang tersimpan di database terkunci secara permanen. Pelanggan maupun formulir pemesanan tidak dapat mengganti nama member saat bertransaksi dengan nomor HP yang sama, menjamin keaslian data akun member (hanya Admin toko yang dapat mengubah nama di CMS).","Otomatisasi Nama Terdaftar pada Pesanan: Pesanan baru yang menggunakan nomor HP member secara otomatis disinkronkan ke nama resmi yang terdaftar di database toko, bukan nama acak yang diketik pelanggan saat checkout.",'Pemisahan Cerdas Konfirmasi Member di CMS: Tombol "+ Konfirmasi & Daftarkan Sebagai Member" kini eksklusif hanya muncul untuk Pelanggan Umum. Untuk pelanggan yang sudah terdaftar resmi, sistem langsung menyajikan badge hijau "Member Terdaftar (Terverifikasi)" tanpa tombol konfirmasi berulang.',"Pembeda Visual Label Member vs Umum pada Piutang Tempo: Menambahkan badge status [Member] dan [Umum] pada kartu nota Piutang Tempo dan riwayat pembayaran angsuran, memudahkan kasir/admin memverifikasi hak kelayakan transaksi tempo pelanggan.",'Ekspor Rekap Pesanan Excel Lebih Lengkap: Menambahkan kolom baru "Tipe Pelanggan" (Member Resmi / Pelanggan Umum) dan kolom "No. WhatsApp" pada ekspor berkas Excel (.xlsx) rekap pesanan toko.',"Penguatan Aturan Keamanan Cloud (Firestore Security Rules): Memperketat firestore.rules pada koleksi customers di mana pendaftaran member baru dibatasi khusus hak akses Admin (isAdmin()), sementara hak update saat checkout non-admin dibatasi hanya untuk penambahan saldo poin loyalty dan waktu pesanan terakhir.","Penyempurnaan Banner Informasi Toko: Menghilangkan badge promo dan pemotongan teks deskripsi (line-clamp) pada banner, menampilkan seluruh teks informasi secara utuh, rapi, dan nyaman dibaca."]},{id:"log-1-9-0",version:"v1.9.0",date:"2026-09-20",title:"Drop-Point Delivery: Kirim Pesanan ke Lokasi Berbeda (Proyek, Tukang, Mandor) dengan Kalkulasi Ongkir Presisi Toko-ke-Tujuan",category:"feature",badge:"Drop-Point Delivery v1.9.0",items:["Fitur Kirim ke Lokasi Berbeda (Drop-Point): Pembeli dapat mengorder dari rumah namun menentukan lokasi pengiriman yang berbeda (contoh: ke lokasi proyek, tukang, atau mandor) dengan satu toggle mudah di halaman checkout.","Kalkulasi Ongkir Presisi Toko-ke-Tujuan: Ongkos kirim dihitung akurat berdasarkan jarak dari Toko Putri ke lokasi tujuan (bukan lokasi pembeli), memastikan harga ongkir yang fair dan transparan untuk setiap order drop-point.","Data Penerima di Lokasi: Kurir mendapat informasi lengkap penerima di lokasi: nama penerima (tukang/mandor/PIC), nomor WhatsApp aktif, dan alamat lokasi proyek yang detail.","GPS / Link Maps Lokasi Tujuan: Tombol sematkan GPS otomatis atau input link/koordinat Google Maps untuk lokasi tujuan, memudahkan kurir menavigasi ke lokasi proyek dengan tepat.",'Panel Admin CMS Drop-Point: Halaman detail order di CMS Admin menampilkan badge "📍 Lokasi Berbeda", info lengkap penerima, dan tombol langsung buka Google Maps ke lokasi tujuan proyek.','Konfirmasi Pembayaran Terstruktur: Halaman ringkasan pembayaran menampilkan section khusus "Dikirim ke Lokasi Berbeda" dengan detail nama penerima, WA penerima, dan alamat tujuan yang terpisah dari data pemesan.']},{id:"log-1-8-9",version:"v1.8.9",date:"2026-09-19",title:"Sistem Cerdas Piutang Tempo (Smart Due Status, Filter Kategori, Metrik Statistik, & 1-Klik Tagih WhatsApp Otomatis) & Cetak Surat Penawaran Harga (SPH Proyek A4/PDF)",category:"feature",badge:"Smart Tempo CRM & Project Quotation SPH v1.8.9",items:["Dashboard Metrik Statistik Piutang CMS: Menampilkan kartu ringkasan Total Piutang Aktif, Total Piutang Terlambat, dan Total Nota Tempo secara realtime di dashboard seller.","Filter Cepat Keterlambatan & Pencarian Instan: Tab filter pintar [Semua], [🔴 Terlambat], [🟡 H-3 Segera Jatuh Tempo], dan [🟢 Berjalan] dengan badge counter dinamis, serta kolom pencarian cepat nama pelanggan, nomor WA, atau ID pesanan.","Fitur 1-Klik Tagih WhatsApp Otomatis: Membuat template pesan penagihan profesional dan santun sesuai status tempo (pengingat ramah H-3 atau pemberitahuan jatuh tempo) lengkap dengan rincian nota, sisa pokok, denda, dan nomor rekening resmi toko.",'Cetak Surat Penawaran Harga (SPH Proyek): Menambahkan tombol "Cetak SPH" langsung di keranjang belanja toko dengan format resmi A4/PDF lengkap dengan KOP Toko Putri, masa berlaku penawaran 14 hari, rincian spesifikasi barang/harga, serta kolom tanda tangan/stempel rekanan dan toko.',"Ekspor Dokumen & Kompatibilitas Tinggi: Dokumen penawaran harga dapat langsung dicetak thermal/printer A4 atau disimpan dalam format PDF resolusi tinggi untuk pengajuan anggaran proyek."]},{id:"log-1-8-8",version:"v1.8.8",date:"2026-09-19",title:"Penyempurnaan Navigasi Tombol Back Sistematis: Urutan Mundur Berurutan Halaman (Sequential Unwinding), Eliminasi Lompatan Layar, Proteksi Cascade Modal, & Stack Produk Terkait",category:"enhancement",badge:"Seamless Sequential Navigation v1.8.8",items:["Urutan Mundur Halaman Berurutan (Sequential Unwinding): Navigasi tombol back (tombol panah header, tombol browser, maupun gesture hardware back Android) kini berjalan teratur satu demi satu (Pembayaran -> Pengiriman -> Keranjang -> Beranda) tanpa ada layar yang terlompati atau melompat langsung ke Beranda.","Eliminasi Lompatan & Infinite Loop Back: Menghapus bypass langsung ke Beranda pada handleAppBackButton dan menyelaraskan penanganan popstate browser dengan stack riwayat tampilan aktif.","Proteksi Penutupan Modal Terprogram (Prevent Cascade-Close): Menambahkan flag isProgrammaticModalClose sehingga saat modal ditutup via tombol silang (X) atau backdrop, sistem tidak memicu penutupan beruntun pada modal di bawahnya maupun mereset tampilan halaman.","Penyelarasan Modal Lengkap: Menambahkan dukungan penutupan modal voucher, panduan belanja (guide), changelog, garansi kualitas, dan sertifikasi keamanan ke closeModalByName.","Navigasi Mundur Produk Terkait (Related Products Stack): Memilih produk rekomendasi sejenis kini menyimpan riwayat produk sebelumnya, sehingga saat tombol back ditekan, pengguna kembali ke produk yang dilihat sebelumnya secara berurutan sebelum modal tertutup.","Navigasi Kembali CMS Seller (Admin Tab to Menu Unwinding): Menekan tombol back (panah header maupun tombol back Android) saat berada di dalam tab menu CMS (Produk, Pesanan, Pengaturan, dsb) kini mengembalikan tampilan ke Menu Utama CMS terlebih dahulu secara rapi, tanpa langsung memunculkan dialog konfirmasi keluar seller.","Dialog Konfirmasi Keluar Beranda: Tombol back pada halaman Beranda (saat tidak ada modal terbuka) secara konsisten memunculkan Dialog Konfirmasi Keluar Aplikasi yang rapi dan aman."]},{id:"log-1-8-7",version:"v1.8.7",date:"2026-09-19",title:"Pemisahan Tegas Pelanggan Umum vs Member Resmi: Proteksi Poin Loyalty & Pembayaran Tempo (Wajib Verifikasi Database Admin CMS), Konfirmasi Registrasi Member Sekali Klik, & Dialog Edukasi Pelanggan",category:"feature",badge:"Membership Verification & Tempo Security v1.8.7",items:["Pemisahan Hak Akses Pelanggan Umum & Member Resmi: Nomor HP baru yang dimasukkan saat pemesanan berstatus murni sebagai Pelanggan Umum. Sistem tidak lagi mendaftarkan pelanggan secara otomatis ke database member sebelum dikonfirmasi oleh Admin di CMS.","Proteksi Ketat Pembayaran Cash Tempo: Opsi pembayaran Cash Tempo disembunyikan secara otomatis bagi pelanggan umum dan dilindungi ganda pada validasi transaksi database cloud. Pembayaran tempo eksklusif untuk member yang nomornya telah terdaftar resmi.","Proteksi Akumulasi & Penukaran Poin Loyalty: Fitur perolehan poin belanja dan diskon penukaran poin hanya berlaku untuk member terverifikasi. Pelanggan umum tidak mendapatkan poin sebelum nomor HP disimpan ke database member CMS oleh Admin.","Fitur Konfirmasi Member Cepat di CMS Pesanan Admin: Admin toko dapat langsung mendaftarkan nomor pelanggan umum menjadi Member Resmi dengan satu kali klik (+ Konfirmasi & Daftarkan Sebagai Member) pada panel detail pesanan.","Dialog Edukasi Pelanggan & Bantuan WhatsApp: Saat pelanggan umum mengecek nomor HP di menu kartu member digital atau checkout, sistem menyajikan status ramah dan tombol kontak WhatsApp Admin untuk aktivasi membership resmi."]},{id:"log-1-8-6",version:"v1.8.6",date:"2026-09-19",title:"Perbaikan Kendala Pembuatan Pesanan Member (ReferenceError memberPointsUpdated), Stabilitas Transaksi Checkout, & Sinkronisasi Saldo Poin Pelanggan",category:"bugfix",badge:"Order Processing & Loyalty Fix v1.8.6",items:["Resolusi Kendala Pembuatan Pesanan: Memperbaiki kendala ReferenceError: memberPointsUpdated is not defined pada saat pelanggan menyelesaikan pesanan saat toko tidak mengaktifkan fitur pelacakan stok langsung.","Penyelarasan Variabel Transaksi: Mendeklarasikan dan menyelaraskan variabel memberPointsUpdated secara konsisten di seluruh percabangan transaksi Firestore.","Stabilitas Transaksi Checkout & Poin Member: Menjamin proses checkout, akumulasi poin reward, pemotongan poin hadiah, dan pencatatan pesanan ke database cloud berjalan 100% lancar tanpa hambatan.","Sinkronisasi Total Sistem: Memperbarui kompilasi aset produksi web, paket flashdisk siap pakai, dan sinkronisasi platform native Android."]},{id:"log-1-8-5",version:"v1.8.5",date:"2026-09-18",title:"Pengaturan Perangkat & Printer Kasir POS Universal (58mm/80mm, Bluetooth, USB, RawBT), Dialog Konfirmasi Keluar Aplikasi Native, & Navigasi Kembali WhatsApp Tanpa Reload",category:"feature",badge:"Universal POS & Native App v1.8.5",items:["Pengaturan Perangkat Universal & Printer POS: Menyediakan panel konfigurasi koneksi printer kasir (Bluetooth Thermal ESC/POS, USB OTG, Jaringan LAN/WiFi IP, Android System PrintManager, dan Driver RawBT).","Format Kertas Fleksibel 58mm & 80mm: Mendukung ukuran kertas mini portable 58mm (32 kolom) dan printer kasir meja 80mm (48 kolom) dengan perataan teks struk otomatis.","Fitur Uji Coba Cetak (Test Print): Memungkinkan kasir menguji sambungan printer secara langsung dengan satu klik sebelum mulai melayani pelanggan.","Opsi Kustomisasi Struk Kasir: Pengaturan teks header/footer, cetak barcode pesanan (Code128), saldo poin loyalty member, auto-cut kertas, dan perintah buka laci kasir (cash drawer).","Dialog Konfirmasi Keluar Aplikasi (Exit Dialog): Menutup modal bertingkat saat tombol Hardware Back Android ditekan; jika sudah berada di Beranda tanpa modal terbuka, memunculkan dialog konfirmasi keluar elegan (Lanjut Belanja atau Keluar Aplikasi).","Navigasi Kembali WhatsApp Tanpa Reload (External Intent Interception): Mengarahkan seluruh tautan WhatsApp (wa.me) ke intent aplikasi eksternal di Android sehingga WebView Toko Putri tidak pernah tergantikan. Saat pembeli menekan tombol Back di WhatsApp, aplikasi Toko Putri langsung kembali tampil di layar dengan keranjang dan data transaksi tetap utuh.","Fitur Unduh & Pembaruan Aplikasi Real-Time (Play Store Style): Menambahkan modal unduhan APK resmi bergaya Google Play Store dengan badge Play Protect, verifikasi integritas, QR code untuk pemindaian instan di HP dari komputer desktop/laptop, dan tautan otomatis ke rilis GitHub terbaru."]},{id:"log-1-8-4",version:"v1.8.4",date:"2026-09-18",title:"Antarmuka Kartu Member Digital VIP 3D (Digital Loyalty Pass), Barcode Kasir POS Vektor, Gamifikasi Tingkat Tier (Bronze, Silver, Gold, Platinum), & Ekspor Simpan ke Galeri Ponsel",category:"feature",badge:"Digital Loyalty Card v1.8.4",items:["Kartu Member Digital Interaktif 3D (Apple/Google Wallet Style): Mentransformasi data loyalitas pelanggan menjadi kartu member fisik digital yang mewah, lengkap dengan EMV smart chip keemasan, logo resmi Toko Putri, efek emboss nama pelanggan, nomor virtual kartu PUTRI, dan saldo poin.","Animasi 3D Flip (Bolak-Balik): Pelanggan dapat membalik kartu secara interaktif untuk melihat sisi belakang yang dilengkapi pita magnetik (magnetic stripe) dan barcode kasir.","Barcode Kasir POS Vektor (Code128): Dilengkapi barcode presisi yang digenerate otomatis dari nomor pelanggan, siap discan oleh kasir toko fisik saat berbelanja langsung.","Tingkatan Tier Dinamis (Bronze, Silver, Gold, Platinum VIP): Pengelompokan level pelanggan berdasarkan akumulasi poin belanja dengan indikator progress bar dan daftar hak istimewa eksklusif setiap level.","Simpan Kartu ke Galeri HP: Fitur unduh kartu member resolusi tinggi (PNG HD) langsung ke galeri ponsel atau dibagikan ke WhatsApp dengan satu sentuhan.","Deteksi Checkout & Akses Cepat: Form checkout otomatis menampilkan miniatur kartu member saat nomor pembeli terdeteksi, dan menu Tautan Cepat kini memiliki tombol langsung ke Kartu Member & Poin.","Sinkronisasi Poin Otomatis & Persistensi Kartu: Menyelaraskan aturan keamanan Firestore pelanggan, mengkreditkan poin pesanan secara otomatis ke database cloud, menjaga kartu member tetap aktif secara persisten di HP pelanggan, dan mengaktifkan auto-reconciliation riwayat pesanan."]},{id:"log-1-8-3",version:"v1.8.3",date:"2026-09-18",title:"Aktivasi Fitur Hardware Native: Logo Resmi Toko Putri (Launcher Icon & Splash HD), Izin Kamera Barcode Scanner, Geolokasi GPS Pelanggan, Cetak Printer Termal POS, & Ekspor Simpan Dokumen A4/PDF",category:"feature",badge:"Native Hardware & Icon v1.8.3",items:["Ikon Aplikasi & Splash Screen Resmi Toko Putri: Mengganti seluruh ikon bawaan dengan logo resmi resolusi tinggi Toko Putri (PUTRI UTAMA TEKNIK) di seluruh varian layar (mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi, dan adaptive icon) serta splash screen elegan saat aplikasi dibuka.","Aktivasi Kamera & Pemindai Barcode: Mengaktifkan izin kamera Android dan WebChromeClient onPermissionRequest sehingga scan barcode produk via kamera HP dan ambil foto bukti transfer langsung berfungsi lancar.","Geolokasi & Deteksi GPS Pelanggan: Memasang izin ACCESS_FINE_LOCATION & ACCESS_COARSE_LOCATION beserta onGeolocationPermissionsShowPrompt, sehingga fitur ambil lokasi otomatis di halaman checkout dan pengaturan toko berjalan presisi.","Pencetakan Printer Termal POS & Faktur A4: Menghubungkan fungsi cetak kasir langsung ke Android PrintManager native dan skema printer bluetooth thermal (RawBT), memungkinkan pencetakan struk 58mm/80mm tanpa hambatan.","Simpan & Bagikan Dokumen (PDF/Gambar): Mengintegrasikan native bridge saveOrShareFile untuk menyimpan file invoice, faktur, dan surat jalan ke memori HP atau langsung dibagikan ke WhatsApp pelanggan."]},{id:"log-1-8-2",version:"v1.8.2",date:"2026-09-18",title:"Aplikasi Android Live Cloud Auto-Sync: Pembaruan Website & Desain Otomatis Tersinkronisasi ke HP Tanpa Perlu Install Ulang APK, Optimasi Hardware Back Button, & Paket Intent WhatsApp",category:"feature",badge:"Android Live Cloud Sync v1.8.2",items:["Arsitektur Live Cloud Auto-Sync: Menghubungkan aplikasi Android native secara langsung ke server hosting resmi Toko Putri (https://tokoputri-three.vercel.app). Seluruh pembaruan kode, tata letak antarmuka, dan fitur baru yang di-deploy ke website akan otomatis muncul di HP pelanggan seketika tanpa perlu mendownload atau menginstal ulang file APK.","Penanganan Tombol Kembali Native (Hardware Back Button): Mengintegrasikan OnBackPressedDispatcher pada MainActivity Android, memungkinkan pelanggan menggunakan tombol kembali fisik atau gestur usap layar HP untuk menutup modal atau kembali ke halaman sebelumnya secara mulus tanpa keluar aplikasi secara tiba-tiba.","Visibilitas Intent Eksternal Android 11+: Mendaftarkan skema WhatsApp (whatsapp:// & https://wa.me) serta panggilan telepon (tel:) pada manifest sistem, memastikan tombol kontak penjual dan pesan otomatis WhatsApp dapat langsung meluncurkan aplikasi WhatsApp di HP pelanggan tanpa hambatan keamanan OS.","Kesiapan Hybrid Zero-Maintenance: Menggabungkan kecepatan runtime native dengan fleksibilitas web modern, memberikan pengalaman belanja full-screen setara aplikasi e-commerce papan atas."]},{id:"log-1-8-1",version:"v1.8.1",date:"2026-09-18",title:"Transformasi Super-App Native Android (.APK), Integrasi Capacitor 8 Modern, & Alur Kompilasi Cloud Otomatis GitHub Actions",category:"feature",badge:"Android Native APK Release v1.8.1",items:["Transformasi Aplikasi Native Android: Mengintegrasikan platform Capacitor 8 (@capacitor/android, @capacitor/core, @capacitor/cli) ke dalam fondasi sistem Toko Putri sehingga dapat dipasang langsung pada smartphone Android layaknya aplikasi komersial Play Store.","Kompilasi Otomatis di Cloud (GitHub Actions CI/CD): Membangun alur kerja kompilasi otomatis di server cloud GitHub menggunakan Node.js 22 dan Java OpenJDK 21. Setiap ada pembaruan kode, server GitHub secara otomatis memproses, mengompilasi, dan merilis file TokoPutri.apk siap pasang tanpa membebani komputer.","File Installer TokoPutri.apk Siap Pasang: Menyediakan file installer TokoPutri.apk (~4.8 MB) yang ringan, cepat, dan responsif langsung di folder aplikasi serta paket flashdisk siap salin ke HP.","Integrasi SplashScreen & Desain Adaptif: Aplikasi Android Toko Putri berjalan dengan tampilan layar penuh native, animasi peluncuran elegan, safe-area inset yang pas untuk poni kamera HP kekinian, dan terhubung langsung secara realtime ke database cloud Firebase Firestore."]},{id:"log-1-8-0",version:"v1.8.0",date:"2026-09-18",title:"Sinkronisasi Realtime Katalog Hadiah Multi-Perangkat (Desktop & Mobile), Eliminasi Deadlock Listener, & Integrasi Modal Hadiah Cepat",category:"bugfix",badge:"Multi-Device Reward Sync v1.8.0",items:["Resolusi Deadlock Listener Katalog Hadiah: Menghapus kondisi pengunci pada fungsi renderRewardCatalog() yang sebelumnya memeriksa activeRewards.length > 0 sebelum memasang listener Firestore. Kini listener attachRewardsRealtime() selalu dipasang seketika saat fitur katalog hadiah aktif.","Booting Listener Realtime Hadiah Otomatis: Mendaftarkan dan menjalankan listener attachRewardsRealtime() secara otomatis saat aplikasi dimuat di DOMContentLoaded sejajar dengan sinkronisasi produk dan pengaturan toko, menjamin setiap browser (komputer desktop, laptop, HP, dan tablet pelanggan) langsung terhubung secara live.","Bootstrap Fetch Hadiah pada Kunjungan Pertama: Menyempurnakan fungsi loadAppData() agar secara instan mengambil data sub-koleksi rewards dari database server ketika browser baru membuka website tanpa cache lokal.",'Tombol CTA Cepat "Lihat Semua" di Beranda: Menambahkan tombol aksi cepat di samping judul Katalog Hadiah Poin Pelanggan yang langsung membuka modal daftar reward dan informasi poin belanja pelanggan.',"Penyelarasan Logika Filter Katalog Produk: Memperbaiki toggleCls pada modul katalog agar wadah hadiah hanya disembunyikan saat pengguna memfilter pencarian atau saat program hadiah memang dinonaktifkan oleh pemilik toko.","Sinkronisasi Instan CMS Hadiah: Memastikan penyimpanan atau penghapusan hadiah dari panel CMS admin di HP langsung memperbarui cache lokal localStorage dan menyiarkan pembaruan ke seluruh layar desktop pelanggan secara instan (<200ms) tanpa perlu refresh."]},{id:"log-1-7-9",version:"v1.7.9",date:"2026-09-17",title:"Desain Visual Native Super-App: Miniatur Layar HP 3D di CMS, Preset Background Modern & Ambient Canvas",category:"feature",badge:"Native Super-App Visuals v1.7.9",items:["Miniatur Layar Smartphone 3D di CMS Admin: Mengganti ikon kotak kaku pada menu Pengaturan Toko dengan 5 miniatur live mockup layar HP yang interaktif, lengkap dengan frame bezel, dynamic island, dan visual miniature preview.","Preset Visual Background Modern: Menghadirkan 5 gaya atmosferik (Hero Arch Kanopi Lengkung, Aurora Mesh Glow atmosferik iOS/Fintech, Tech Grid blueprint perkakas/teknik, Glass Studio kedalaman kaca es, dan Minimalis Clean Canvas).","Live Zero-Reload Theme Preview: Memilih model gaya background di panel CMS langsung mengubah latar belakang halaman secara live seketika tanpa reload browser.","Desktop & Tablet Ambient Backdrop Glow: Memberikan aura pencahayaan atmosferik dinamis pada sisi kiri-kanan kanvas monitor komputer dan tablet, menciptakan sensasi aplikasi desktop macOS/iPad melayang yang elegan.","Penyempurnaan Header & Floating Elements: Header toko otomatis beradaptasi dengan model visual latar belakang aktif dengan bayangan glow lembut dan transisi mulus."]},{id:"log-1-7-8",version:"v1.7.8",date:"2026-09-17",title:"Pemeliharaan & Perawatan Sistem: Audit Keamanan, Stabilitas Navigasi Mobile, & Sinkronisasi Distribusi",category:"maintenance",badge:"System Maintenance & Stability v1.7.8",items:["Audit Keamanan & Penyelarasan Dependensi: Memeriksa integritas dependensi npm, menyelaraskan patch keamanan paket, dan mengaudit aturan keamanan Firestore Security Rules untuk proteksi optimal toko dan data pelanggan.","Penguncian Bottom Navigation Bar Mobile: Mengintegrasikan utilitas bnav-hidden dan translate penuh pada bilah navigasi bawah saat di halaman Keranjang & Checkout agar tombol Beranda timbul tidak mengintip atau menghalangi transaksi.","Stabilitas Alur Belanja & Quick Variant: Menyempurnakan transisi penutupan modal produk bebas race-condition dengan History API untuk eksekusi Beli Sekarang (Direct Checkout) yang mulus dan responsif.","Kompilasi & Optimasi Build Produksi: Membangun ulang seluruh bundle produksi Vite (dist/) dengan pemisahan chunk terisolasi, CSS purge, dan performa tinggi.","Sinkronisasi Total Seluruh Berkas Distribusi: Menyelaraskan seluruh paket offline pada folder 1. HASIL_BUILD_SIAP_PAKE dan PAKET_FLASHDISK (File Siap Pakai & Source Code Lengkap) sehingga 100% mutakhir dan siap pakai."]},{id:"log-1-7-7",version:"v1.7.7",date:"2026-09-17",title:"Penyempurnaan UX Modal Produk: Drawer Pilih Varian Cepat (Quick Variant Sheet), Eliminasi Tombol Duplikat & Bilah Bawah Luas",category:"feature",badge:"Smart Variant Shopping v1.7.7",items:['Drawer Khusus "Pilih Varian Cepat" (Quick Variant Bottom Sheet): Menekan tombol + belanja cepat pada produk bervarian kini membuka lembar ringkas (foto, harga dinamis, pilihan varian, kuantitas & tombol beli) tanpa membuka modal deskripsi raksasa.','Smart Auto-Select Varian Pertama: Sistem secara cerdas memilih varian aktif pertama yang memiliki stok secara otomatis, menghapus kebingungan pembeli dan mencegah pesan error "Belum memilih varian".',"Eliminasi Redundansi & Tombol Duplikat: Menghapus kotak Subtotal besar dan tombol ganda di dalam isi modal produk sehingga layout sangat bersih, lega, dan tidak bertumpuk.","Bilah Aksi Bawah Lega & Bebas Sesak: Menghilangkan ikon WhatsApp dari bilah transaksi bawah agar tombol + Keranjang dan Beli Sekarang memiliki ruang yang luas, proporsional, dan nyaman ditekan jempol tanpa teks terpotong.","Tombol Konsultasi WhatsApp Bersih di Area Informasi: Akses tanya penjual via WhatsApp dipindahkan ke area informasi produk dengan tampilan rapi dan tidak mengganggu alur checkout cepat."]},{id:"log-1-7-6",version:"v1.7.6",date:"2026-09-17",title:"Pengalaman Native Mobile App: Haptic Feedback, Animasi Fly-to-Cart, Sticky Action Bar Modal & Pull-to-Refresh",category:"feature",badge:"Native Mobile App Feel v1.7.6",items:["Micro-Haptic Vibration Feedback: Sentuhan getaran taktil mikro 10ms saat menyentuh tab navigasi, tombol Beranda melayang, dan tombol aksi belanja di layar HP untuk sensasi fisik layaknya aplikasi native.","Fly-to-Cart Micro-Animation: Efek animasi visual foto produk melayang melengkung (curved flight) langsung masuk ke ikon keranjang navigasi bawah saat tombol + Keranjang ditekan.","Sticky Bottom Action Bar pada Detail Produk: Bilah belanja cepat menempel di bagian bawah modal detail produk (Subtotal, Qty, + Keranjang, Beli Sekarang & Chat WA) untuk kemudahan transaksi satu tangan.","Tombol Beli Sekarang (Direct Checkout): Pembeli dapat langsung checkout instan hanya dalam satu ketukan tanpa harus membuka keranjang terlebih dahulu.","Quick-Add Cart pada Kartu Katalog: Tombol + pada kartu katalog kini dapat langsung memasukkan produk tanpa varian ke keranjang disertai animasi terbang.","Native Pull-to-Refresh & Skeleton Shimmer: Tarik layar ke bawah dari puncak katalog untuk sinkronisasi data toko secara hening dan tampilan kerangka berkilau saat memuat produk."]},{id:"log-1-7-5",version:"v1.7.5",date:"2026-09-17",title:"Desain Navigasi Bawah Modern: Beranda Timbul Melayang di Tengah (Elevated Center Hub) & Tampilan 100% Aplikasi Mobile",category:"feature",badge:"Mobile App Navigation v1.7.5",items:["Navigasi Bawah Mobile Modern (App-Like Bottom Navigation): Menghadirkan bilah navigasi bawah 5 tab simetris (Kategori, Keranjang, Beranda, Pesanan, Menu) yang intuitif untuk kemudahan pengoperasian satu tangan (Golden Thumb Zone) di layar ponsel.","Tombol Beranda Timbul Melayang di Tengah (Elevated Center Hero Hub): Menempatkan tombol Beranda tepat di tengah dengan lingkaran 52px melayang timbul (offset -top-5) bergradien tema dinamis, ring cutout notch, dan drop-shadow lembut yang elegan.","Solid Background Anti-Tembus & Bordered Cart Badge: Panel navigasi menggunakan latar belakang 100% solid (bg-white dark:bg-[#0b1120]) tanpa efek tembus pandang/blur residual saat menggulir halaman, dilengkapi badge keranjang belanja dengan outline kontras tinggi.","Sinkronisasi Routing & Active State Cerdas: Status tab navigasi otomatis menyala aktif secara akurat mengikuti URL hash/halaman yang sedang dibuka (Beranda, Riwayat Pesanan, Kategori Modal, atau Menu Drawer).","Manajemen Pruning Log Pembaruan di CMS: Administrator toko kini dapat menghapus catatan log pembaruan lama langsung dari panel CMS Admin agar riwayat changelog tetap rapi, ringkas, dan bebas spam seiring berjalannya waktu."]},{id:"log-1-7-2",version:"v1.7.2",date:"2026-09-17",title:"Finalisasi & Audit Debugging Menyeluruh Sistem (Stabilitas Router Modal, Type Safety ID Produk & Akses Dev Lokal)",category:"maintenance",badge:"Final System Audit & Stability v1.7.2",items:["Resolusi Import Router Modal Storefront: Mengimpor fungsi pushModalHistory dan requestCloseModal secara eksplisit pada modul dialog storefront (modals.js) untuk menjamin semua dialog (Tautan Cepat, Kategori, Brand Mitra, Syarat & Ketentuan, Kebijakan Privasi, Panduan Belanja) terbuka dan tertutup dengan mulus tanpa memicu ReferenceError.","Safe String ID Handling pada Katalog & Rekomendasi: Mengenkapsulasi parameter ID produk pada atribut onclick kartu produk dan kartu rekomendasi slider (openProductModal), memastikan kompatibilitas penuh untuk ID numerik maupun string alfa-numerik tanpa risiko syntax error.","Perbaikan Pencocokan Produk Target Voucher: Menyempurnakan pencocokan target produk voucher diskon dengan konversi string bertipe aman (String(item.id) === String(f.targetProduct)).","Penyempurnaan Struk Tempo Admin: Menambahkan deklarasi aman helper pushModalHistory pada modul piutang & struk pembayaran tempo (tempo.js).","Dukungan Host Lokalitas Lingkungan Pengujian: Menambahkan pengenalan host 127.0.0.1 secara setara dengan localhost pada pemeriksaan akses dev admin (checkAdminAccess).","Audit Menyeluruh 200+ Inline Event Handler: Memverifikasi seluruh event handler di index.html dan template JS untuk memastikan 100% fungsi terdaftar resmi di window tanpa ada broken reference."]},{id:"log-1-7-1",version:"v1.7.1",date:"2026-09-17",title:"Penyelarasan Desain Modal CMS Admin & Builder Komponen (Tabel Spesifikasi, Grosir, Varian & Eliminasi Scrollbar Native)",category:"optimization",badge:"Admin Modal & Theme Harmonization v1.7.1",items:['Penyelarasan Builder Tabel Spesifikasi (Spec Table Builder): Mengganti warna hardcoded cyan pada tombol "Tambah Baris Spesifikasi" dan ikon placeholder dengan variabel warna tema aktif toko (--color-primary), sehingga menyatu sempurna dengan seluruh 19 preset tema (termasuk tema emas/olive Toko Putri).',"Eliminasi Scrollbar Native Abu-abu di Modal CMS: Mengintegrasikan utilitas hide-scrollbar pada kontainer formulir Admin Modal (#admin-modal-form), Modal Detail Pesanan (#admin-order-modal-content), Modal Edit Cepat Harga (#qp-body), dan Modal Restock Stok, sehingga scrollbar native yang tebal dan kaku hilang tanpa mengurangi kenyamanan scroll.","Harmonisasi Builder Grosir & Varian Produk: Menyelaraskan kartu grosir, tombol tambah tingkatan grosir, kartu varian, serta dialog database warna ke standar border-radius rounded-2xl dan aksen tema aktif toko tanpa warna kontras yang jomplang (menghapus hardcoded amber, pink, dan violet).","Penyempurnaan Visual Header & Tombol Modal Admin: Menstandarisasi radius modal utama ke rounded-2xl, menambahkan badge ikon tematik di samping judul, menyempurnakan tombol tutup melingkar (cursor-pointer), dan tombol solid simpan data dengan efek shadow-glow dan active scaling.","Optimalisasi Modal Restock & Edit Cepat Harga: Menyelaraskan seluruh dialog popup operasional admin dengan warna aksen dinamis toko dan konsistensi interaksi penuh."]},{id:"log-1-7-0",version:"v1.7.0",date:"2026-09-17",title:"Pengelompokan Produk Sejenis (Sub-Kategori Cerdas) & Rekomendasi Produk Alternatif di Modal Detail",category:"feature",badge:"Smart Sub-Category & Related Products v1.7.0",items:["Sistem Sub-Kategori Cerdas (Smart Sub-Grouping): Mengelompokkan produk berdasarkan jenis yang lebih spesifik dalam kategori yang sama (contoh kategori Cat Bangunan: Cat Tembok, Cat Kayu & Besi, Waterproofing, Kuas & Rol) dengan kompatibilitas penuh tanpa merombak struktur database yang sudah ada.","Bilah Filter Sub-Kategori Interaktif (Dynamic Chip Bar): Menampilkan bilah chip filter horizontal di etalase saat sebuah kategori dipilih, lengkap dengan indikator jumlah produk per jenis dan penanda aktif sesuai tema toko.",'Rekomendasi Produk Sejenis & Alternatif Pilihan di Modal: Menambahkan kartu slider horizontal "Produk Sejenis & Alternatif Pilihan" di dalam modal detail produk menggunakan algoritma pencocokan skor relevansi (jenis produk, kategori, dan brand) untuk memudahkan pembeli membandingkan pilihan dan mendorong cross-selling.',"Autocomplete Datalist di Form Produk Admin: Formulir penambahan/pengeditan produk di CMS Admin kini dilengkapi input cerdas yang otomatis menyarankan jenis/sub-kategori yang sudah pernah ada di toko untuk mencegah typo dan menjaga konsistensi penamaan.","Badge Jenis Produk pada Kartu Katalog: Menampilkan label sub-kategori bernuansa tema toko pada kartu produk di tampilan grid maupun list etalase.","Penyelarasan Desain Modal Detail Produk: Menstandarisasi radius modal (rounded-t-3xl sm:rounded-2xl) dan drag bar minimalis modern, serta memastikan perpindahan antar produk sejenis bergulir mulus ke posisi atas (scroll-to-top)."]},{id:"log-1-6-2",version:"v1.6.2",date:"2026-09-17",title:"Penyempurnaan Modal Syarat & Ketentuan, Kebijakan Privasi, dan Storefront Dialog (Modern Card Layout & Anti-Overlay Vercel Toolbar)",category:"optimization",badge:"Modal Card Layout v1.6.2",items:["Restrukturisasi Visual Modal Syarat & Ketentuan serta Kebijakan Privasi: Mengubah tampilan modal teks polos menjadi format kartu interaktif bertingkat bernomor (Numbered Badges) dengan padding proporsional, border halus, dan kontras tinggi sesuai tema aktif.","Eliminasi Glitch Format HTML Baris Baru: Memperbaiki parser teks di modals.js sehingga konten HTML dan default copy tidak lagi disusupi tag <br> yang menyebabkan spasi melompat/renggang tidak wajar.",'Penyelarasan Desain Modal Bottom Sheet: Menstandarisasi radius modal (rounded-t-3xl sm:rounded-2xl), menghapus drag bar abu-abu usang, mempercantik kotak ikon header dengan aksen tema resmi (w-10 h-10 rounded-2xl), serta melengkapi footer dengan tombol "Tutup" yang ramah mobile.',"Supresi Floating Toolbar Vercel Feedback: Menyuntikkan aturan CSS khusus untuk menyembunyikan widget floating Vercel live feedback/toolbar agar tidak lagi menutupi konten modal dan teks transaksi pelanggan pada layar mobile.","Harmonisasi Modal Tautan Cepat, Kategori, Brand, Panduan Belanja & Q&A: Menyatukan gaya visual seluruh dialog storefront ke standar modern tanpa tampilan jomplang."]},{id:"log-1-6-1",version:"v1.6.1",date:"2026-09-17",title:"Penyelarasan Desain Menyeluruh Storefront & CMS Modal (Visual Theme Consistency & Solid Design)",category:"optimization",badge:"Theme Consistency v1.6.1",items:["Harmonisasi Penuh Storefront & CMS dengan Theme Engine: Menghapus seluruh kelas warna hardcoded (seperti emerald-*, teal-*, pink-*) sehingga seluruh antarmuka toko beradaptasi 100% mulus dengan 19 palet tema warna sistem.","Penyelarasan Banner Progres Gratis Ongkir: Elemen pelacak progres gratis ongkir di keranjang belanja kini menggunakan variabel tema aktif (--color-primary) secara dinamis baik pada progress bar, ikon, teks, maupun badge.","Standarisasi Modal Dialog & Bottom Sheet: Seluruh modal dialog (Ulasan Pelanggan, Poin Hadiah Member, Kupon Promo, Log Pembaruan Sistem, Jaminan Mutu, Keamanan & Privasi, Konfirmasi, Edit Harga Cepat, dan Restock) distandarisasi ke border-radius solid rounded-t-3xl sm:rounded-2xl dengan latar belakang bg-slate-900/80 yang tajam dan konsisten.","Penghapusan Efek Blur Residual: Mengeliminasi sisa-sisa kelas backdrop-blur pada modal dan kontainer kartu storefront untuk memastikan antarmuka 100% solid, tajam, ringan diakses, dan bebas glitch grafis di semua browser.","Penyelarasan Form Tempo VIP & Kartu Customer Support: Formulir pembayaran tempo VIP dan kartu kontak WhatsApp di footer kini menyatu secara harmonis dengan warna aksen tema aktif toko.","Pembaruan Kompilasi & Optimalisasi Bundle Produksi: Memperbarui build produksi Vite v1.6.1 dengan ukuran bundle yang efisien dan sinkronisasi penuh."]},{id:"log-1-6-0",version:"v1.6.0",date:"2026-09-16",title:"Program Poin Belanja Hibrida & Loyalitas Member Cerdas (Hybrid Loyalty Points System)",category:"feature",badge:"Hybrid Loyalty Points",items:["Sistem Poin Belanja Hibrida (Hybrid Points Engine): Menghubungkan poin produk reward langsung dengan poin kelipatan minimal belanja untuk produk non-poin secara otomatis.","Kombinasi Poin Akurat: Produk yang memiliki poin langsung tetap menyumbangkan poin per itemnya, sementara produk tanpa poin diakumulasikan total belanjanya untuk mendapatkan poin kelipatan (misal tiap Rp 100.000 = 1 poin).","Pengaturan Fleksibel di Panel Admin: Administrator toko dapat mengaktifkan/menonaktifkan program poin belanja, menentukan nominal batas belanja (kelipatan Rp), serta jumlah poin yang diperoleh per kelipatan.","Bilah Progres & Notifikasi Gamifikasi di Keranjang: Pembeli dapat melihat langsung kalkulasi perolehan poin dan progres nominal belanja yang dibutuhkan menuju poin berikutnya.","Integrasi Checkout & Sinkronisasi Saldo Member: Total poin hibrida otomatis disimpan ke data pesanan (pointsEarned & pointsBreakdown) dan langsung mengkredit saldo akun member terdaftar saat transaksi selesai."]},{id:"log-1-5-2",version:"v1.5.2",date:"2026-09-16",title:"Penyelarasan & Sinkronisasi Visual Seluruh Form Pengaturan Toko (Harmonious & Unified Settings UI)",category:"optimization",badge:"Unified Settings UI",items:["Sinkronisasi Visual Menyeluruh (Anti-Jomplang): Menyelaraskan tata letak visual seluruh 6 kategori pengaturan toko (Profil, Kategori & Brand, Pengiriman & Lokasi, QRIS Pay, Sistem & API, dan Operasional) dengan standar container kartu modern dan tipografi yang harmonis.","Struktur Kartu Berbasis Badge Ikon: Seluruh blok form kini memiliki header kartu tematik berbingkai rounded-xl lengkap dengan ikon representatif, judul tegas, dan deskripsi fungsi yang jelas.","Tata Letak Kategori & Brand Lebih Lega: Mengelompokkan konfigurasi slider dan gaya tampilan (Grid/Pill/Logo) ke dalam sub-kartu tersendiri dilengkapi kotak tips pengalaman pengguna (UX).","Form Pembayaran QRIS & Integrasi Cloud Dipercantik: Menambahkan kartu preview QRIS terverifikasi serta status koneksi endpoint Google Apps Script (GAS) dengan indikator aktif yang elegan.","Harmonisasi Kontrol Operasional & PPN: Formulir pembatasan stok barang dan skema pajak PPN (Eksklusif/Inklusif) dikemas ke dalam kartu rapi dengan penjelasan skema perhitungan transaksi.","Navigasi Atas & Tombol Simpan Ganda: Menghadirkan tombol kembali berlabel jelas beserta tombol simpan cepat di baris header atas untuk kenyamanan akses di layar desktop maupun mobile."]},{id:"log-1-5-1",version:"v1.5.1",date:"2026-09-16",title:"Input Geolokasi Cerdas Google Maps (Tempel & Simpan Akurat Presisi Tinggi)",category:"feature",badge:"Smart Geolocation",items:["Smart Auto-Extract Google Maps: Admin cukup menempel tautan (link) atau angka koordinat dari Google Maps langsung pada satu kotak input cerdas di Pengaturan Pengiriman & Lokasi.","Presisi Tinggi Desimal Penuh: Sistem otomatis mengekstrak Latitude & Longitude dengan ketepatan presisi penuh (contoh: -7.82308507053985, 112.0988374794464) tanpa terpotong.","Tombol Tempel Otomatis Clipboard: Fitur satu klik untuk membaca clipboard dan menempel koordinat secara instan tanpa perlu ketik manual.",'Verifikasi Titik Pin Google Maps: Tombol "Cek di Maps" untuk membuka koordinat di tab baru Google Maps dan memastikan letak toko 100% akurat.',"Dukungan Tempel Koordinat Pelanggan saat Checkout: Memudahkan pembeli di perangkat laptop/PC menyematkan link/koordinat Maps rumah mereka saat sensor GPS tidak aktif."]},{id:"log-1-5-0",version:"v1.5.0",date:"2026-09-16",title:"Fitur Promo Gratis Ongkir Otomatis Minimal Belanja (Free Shipping Threshold) & Gamifikasi Keranjang",category:"feature",badge:"Free Shipping Promo",items:["Fitur Promo Bebas Ongkir Otomatis: Admin dapat mengaktifkan promo dan menentukan nominal batas minimal belanja (misal Rp 1.000.000) melalui menu Pengaturan > Pengiriman & Lokasi.","Bilah Kemajuan (Progress Bar) Interaktif di Keranjang Belanja: Menampilkan persentase pencapaian serta kalkulasi sisa belanja secara real-time yang memotivasi pelanggan untuk menambah belanja.","Pemberitahuan Selebrasi Pencapaian: Banner ucapan selamat dengan efek visual cerah dan animasi saat subtotal keranjang berhasil mencapai syarat gratis ongkir.","Kalkulasi Otomatis Tanpa Kode Voucher: Ongkos kirim delivery langsung terpotong 100% (Rp 0) di ringkasan pembayaran checkout tanpa mewajibkan pembeli mengklaim kode kupon manual.","Integrasi Penuh Dokumen & Struk: Diskon ongkir tercatat rapi pada database pesanan Firestore, struk thermal kasir, rincian faktur belanja A4, dan histori pesanan pembeli."]},{id:"log-1-4-1",version:"v1.4.1",date:"2026-09-16",title:"Penyempurnaan Tampilan Footer (Clean & Harmonious UI) & Maintenance Perawatan Sistem",category:"optimization",badge:"UI Refinement & Maintenance",items:["Desain ulang layout footer toko agar harmonis dengan tema warna emas/mustard, mengeliminasi kontras warna putih yang menyilaukan pada kartu WhatsApp dengan konsep dark glassmorphism modern.","Penyempurnaan tipografi dan spasi vertikal: menu navigasi bantuan & belanja cepat bebas dari simbol kaku, berganti interaksi hover dot dinamis yang lega.","Pembersihan kalimat redundan pada profil toko serta penyelarasan badge metode pembayaran dan logistik pengiriman 50:50 yang simetris.","Pemeriksaan integritas dependensi npm, audit keamanan dependensi, serta pemeliharaan cache storage multi-proyek.","Pembersihan berkas build usang dan pemeliharaan sinkronisasi penuh pada folder paket distribusi flashdisk & siap pakai."]},{id:"log-1-4-0",version:"v1.4.0",date:"2026-09-16",title:"Fitur Single Active Admin Session (Auto Kick-out Antar Perangkat) & Firestore Security Rules",category:"feature",badge:"Single Session Security",items:["Sistem Single Concurrent Admin Session: membatasi akses CMS Seller hanya dapat aktif di 1 perangkat/browser dalam satu waktu untuk mencegah tabrakan edit data dan kebocoran akses.","Mekanisme Realtime Auto Kick-out: jika admin login dari perangkat baru (misal laptop/desktop), sesi CMS di perangkat lama (misal HP atau browser lain) secara instan ditendang keluar secara aman (<300ms) disertai modal dialog penjelasan nama perangkat yang mengambil alih.","Deteksi perangkat cerdas (Smartphone Android, iPhone, Laptop Windows, Mac, Linux, dll) untuk identifikasi login yang transparan.","Validasi ganda startup sesi (auto-login guard) untuk memastikan sesi lokal yang telah digantikan perangkat lain tidak dapat membuka dashboard tanpa login ulang.","Pembaruan cloud Firestore Security Rules dengan otorisasi sub-koleksi admin_session khusus untuk ADMIN_UID terverifikasi."]},{id:"log-1-3-1",version:"v1.3.1",date:"2026-09-16",title:"Native Realtime Sync Sub-Koleksi Produk, Rekonsiliasi Multi-Browser & Hardening Rules",category:"bugfix",badge:"Realtime Multi-Device",items:["Pemasangan native listener onSnapshot langsung pada sub-koleksi products Firestore sehingga perubahan status produk (aktif/nonaktif/stok) dari admin desktop langsung terdorong seketika (<200ms) ke seluruh HP & browser aktif tanpa reload.","Rekonsiliasi otomatis data produk dari server saat snapshot pertama tiba (initial load), mengeliminasi bug perbedaan tampilan antar browser akibat cache localStorage yang usang.","Penyegaran antarmuka tabel admin reaktif otomatis via deteksi kontainer DOM tanpa terhambat status sesi login.","Pengamanan perbandingan ID produk dengan konversi string eksplisit (id.toString()) pada pencarian indeks array dan event handler onclick.","Optimasi evaluasi kondisi stok pada firestore.rules untuk mencegah type error dan mempercepat validasi transaksi checkout."]},{id:"log-1-3-0",version:"v1.3.0",date:"2026-09-15",title:"Hotfix Realtime Sync Multi-Perangkat, Eliminasi Stale Cache & Granular Sync",category:"bugfix",badge:"Realtime Sync & Hotfix",items:["Perbaikan bug fatal inisialisasi syncAppMeta() dan listener Firestore onSnapshot sehingga perubahan status produk (aktif/nonaktif/stok) di Admin Desktop seketika terupdate live di HP tanpa reload.","Penonaktifan persistentLocalCache IndexedDB yang menyebabkan data produk usang (stale) menolak pembaruan server Firestore.","Optimasi granular sync: penambahan penanganan event product_delete dan pengiriman updatedProductIds pada saveApp() sehingga hemat kuota Firestore hingga 95%.","Penyegaran antarmuka instan pada tombol toggle status aktif/habis produk di tabel admin.","Integrasi konfigurasi Firestore db.settings({ merge: true }) guna mencegah host override warning.","Pembaruan log pembaruan sistem dan sinkronisasi seluruh paket distribusi flashdisk & build siap pakai."]},{id:"log-1-2-0",version:"v1.2.0",date:"2026-09-15",title:"Maintenance Keamanan, Optimasi Bundle (-68%) & Isolasi Cache Multi-Projek",category:"maintenance",badge:"Maintenance & Optimasi",items:["Pembersihan celah keamanan dependensi melalui audit paket npm.","Optimasi Vite Rollup code-splitting: modul admin dan cetak dokumen dipisah ke chunk tersendiri, memangkas ukuran bundle storefront utama dari 509 kB ke 163 kB (turun 68%).","Isolasi cache multi-projek pada localStorage untuk mencegah data toko tertukar saat pengujian di localhost.","Percepatan First Contentful Paint (FCP) dan eliminasi peringatan batas ukuran bundle.","Pembaruan berkas siap pakai dan paket flashdisk installer."]},{id:"log-1-1-0",version:"v1.1.0",date:"2026-09-10",title:"Harmonisasi Warna Token, Desain Vouchers & Kategori Kompak",category:"optimization",badge:"Peningkatan Visual",items:["Harmonisasi variabel CSS token warna tema (primary, primary-dark, primary-light) di seluruh komponen.","Penyesuaian tata letak kartu voucher, kategori, brand mitra, dan reward agar lebih padat dan hemat ruang di layar ponsel.","Penyempurnaan navigasi header desktop agar lebih bersih dan minimalis.","Perbaikan urutan CSS view-section untuk mencegah auto-redirect saat me-refresh halaman."]},{id:"log-1-0-0",version:"v1.0.0",date:"2026-09-01",title:"Peluncuran Sistem Web & POS Kasir Toko Putri Resmi",category:"feature",badge:"Rilis Perdana",items:["Rilis resmi platform e-commerce dan kasir point-of-sales (POS) Toko Putri.","Katalog produk interaktif dengan varian harga, grosir, dan spesifikasi lengkap.","Keranjang belanja instan terhubung otomatis ke WhatsApp Checkout.","Dukungan metode pembayaran QRIS Nasional dan Transfer Bank.","Modul cetak struk kasir thermal 58mm/80mm, invoice A4, dan surat jalan.","PWA (Progressive Web App) dengan dukungan mode offline dan installable di HP/PC."]}],ds=t=>{if(!t)return[0,0,0];const e=String(t).match(/(\d+)\.(\d+)\.(\d+)/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10)]:[0,0,0]},gr=(t,e)=>{const[a,r,s]=ds(t),[i,o,l]=ds(e);return i!==a?i-a:o!==r?o-r:l-s},ga=t=>{const e=t&&Array.isArray(t.changelog)?t.changelog:[],a=new Set(t&&Array.isArray(t.deletedChangelogIds)?t.deletedChangelogIds:[]),r=new Set(e.map(l=>l.id||l.version)),s=Zs.filter(l=>!r.has(l.id)&&!r.has(l.version)&&!a.has(l.id)&&!a.has(l.version));return[...e.filter(l=>!a.has(l.id)&&!a.has(l.version)),...s].sort((l,d)=>{const c=new Date(l.date||"2026-01-01").getTime(),p=new Date(d.date||"2026-01-01").getTime();return p!==c?p-c:gr(l.version,d.version)})},Rr=t=>{const e=Zs[0]?.version||"v1.8.5",a=ga(t);if(!a||a.length===0)return e;let r=a[0].version||e;for(const s of a)s.version&&gr(s.version,r)<0&&(r=s.version);return gr(e,r)<0&&(r=e),r},ei=()=>{const t=document.getElementById("storefront-footer-container");if(!t)return;const e=n.store||{},a=e.name||"Toko Putri",r=e.description||e.slogan||"Selamat datang di toko kami. Melayani pembelian online dan offline dengan kualitas terbaik.",s=e.email||"",i=e.operationalHours||"Buka Setiap Hari (08:00 - 17:00)",o=e.address||"",l=e.wa||"",d=e.footerCredit||"Seluruh hak cipta dilindungi undang-undang.",c=new Date().getFullYear(),p=Rr(n);let m=(l||"").replace(/\D/g,"");m.startsWith("0")?m="62"+m.slice(1):!m.startsWith("62")&&m.length>0&&(m="62"+m);let b='<i class="fa-solid fa-store text-2xl text-[var(--color-primary)]"></i>';e.logo&&(e.logo.includes("http")||e.logo.includes("data:")?b=`<img src="${u(e.logo)}" alt="${u(a)}" class="h-full w-full max-h-10 max-w-10 object-contain" onerror="this.outerHTML='<i class=\\'fa-solid fa-store text-2xl text-[var(--color-primary)]\\'></i>'">`:b=`<i class="fa-solid ${u(e.logo)} text-2xl text-[var(--color-primary)]"></i>`);const f=m?`if(typeof window.openWhatsApp==='function') window.openWhatsApp('${u(m)}'); else window.open('https://wa.me/${u(m)}', '_blank', 'noopener,noreferrer');`:"if(typeof window.showToast==='function') window.showToast('Nomor WhatsApp belum dikonfigurasi admin.');";t.innerHTML=`
    <!-- ================= FOOTER TOKO RESMI (MODERN, CLEAN, HARMONIS DENGAN TEMA) ================= -->
    <footer class="themed-footer relative mt-14 w-full overflow-hidden pb-[calc(6.5rem+env(safe-area-inset-bottom))] sm:pb-[calc(3.5rem+env(safe-area-inset-bottom))]">
      <div class="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-[1240px] pt-10 sm:pt-14 pb-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <!-- Kolom 1: Profil Perusahaan & Brand -->
          <div class="flex flex-col items-start text-left md:col-span-6 lg:col-span-4">
            <div class="mb-4 flex items-center gap-3.5">
              <div class="flex h-13 w-13 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white p-2.5 shadow-md">
                ${b}
              </div>
              <div class="flex flex-col items-start min-w-0">
                <h3 class="text-base sm:text-lg font-black tracking-tight text-white leading-tight break-words max-w-full">${u(a)}</h3>
                <span class="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/15 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-[var(--color-primary)]">
                  <i class="fa-solid fa-circle-check"></i> Verified Official Store
                </span>
              </div>
            </div>

            <p class="mb-4 max-w-md text-xs font-normal leading-relaxed text-white/80">
              ${u(r)}
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
            ${o?`
            <div class="text-xs text-white/80 flex items-start gap-2.5 max-w-md bg-white/5 border border-white/10 rounded-xl p-3">
              <i class="fa-solid fa-location-dot text-[var(--color-primary)] mt-0.5 shrink-0 text-sm"></i>
              <span class="leading-relaxed font-medium">${u(o)}</span>
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
                onclick="${f}"
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
                  <p class="text-[10px] font-medium text-white/70">Versi ${u(p)} • Update Real-Time</p>
                </div>
                <div class="ml-auto text-emerald-400 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                  <i class="fa-solid fa-arrow-down text-xs"></i>
                </div>
              </div>

              <!-- Email & Hours Card (Glass Translucent Selaras) -->
              <div class="rounded-2xl border border-white/10 bg-white/5 p-3.5 space-y-3 text-white shadow-xs">
                <!-- Email (if configured) -->
                ${s?`
                <a href="mailto:${u(s)}" class="flex items-center gap-2.5 text-white/85 hover:text-white transition-colors pb-2.5 border-b border-white/10">
                  <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white">
                    <i class="fa-solid fa-envelope text-xs"></i>
                  </div>
                  <span class="truncate text-xs font-bold tracking-wide">${u(s)}</span>
                </a>`:""}

                <!-- Operating Hours -->
                <div class="flex items-center gap-2.5 text-white/90">
                  <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-[var(--color-primary)]">
                    <i class="fa-solid fa-clock text-xs"></i>
                  </div>
                  <div class="min-w-0 text-left">
                    <p class="truncate text-xs font-bold text-white tracking-wide">${u(i)}</p>
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
            &#169; <span>${c}</span> <span class="font-extrabold text-white">${u(a)}</span>. <span>${u(d)}</span>
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3 text-[10px] font-bold text-white">
            <button type="button" onclick="if(typeof window.openAppDownloadModal==='function') window.openAppDownloadModal();" class="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/20 hover:bg-emerald-500/30 px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider text-emerald-300 hover:text-white transition-all active:scale-95 cursor-pointer shadow-xs" title="Unduh Aplikasi Android Toko Putri (APK)">
              <i class="fa-brands fa-google-play text-emerald-400"></i>
              <span>Unduh APK (${u(p)})</span>
            </button>
            <span class="text-white/20">•</span>
            <button type="button" onclick="if(typeof window.openChangelogModal==='function') window.openChangelogModal();" class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider text-white hover:bg-white/20 transition-all active:scale-95 cursor-pointer shadow-xs" title="Lihat Catatan Pembaruan & Versi">
              <span class="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
              <span>${u(p)}</span> • Changelog
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
    `},Rn=()=>{let t=document.getElementById("guarantee-modal");t||(t=document.createElement("div"),t.id="guarantee-modal",t.className="fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",t.onclick=e=>{e.target===t&&ti()},document.body.appendChild(t)),t.innerHTML=`
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
        </div>`,t.style.opacity="0",t.style.display="flex",requestAnimationFrame(()=>{t.style.transition="opacity 0.25s ease",t.style.opacity="1"}),da("guarantee")},ti=(t=!1)=>{const e=()=>{const a=document.getElementById("guarantee-modal");!a||a.style.display==="none"||(a.style.opacity="0",a.style.transition="opacity 0.25s ease",setTimeout(()=>{a.style.display="none",a.style.opacity="",a.style.transition=""},250))};typeof gt=="function"?gt("guarantee",t,e):e()},Fn=()=>{let t=document.getElementById("security-modal");t||(t=document.createElement("div"),t.id="security-modal",t.className="fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",t.onclick=e=>{e.target===t&&ai()},document.body.appendChild(t)),t.innerHTML=`
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
        </div>`,t.style.opacity="0",t.style.display="flex",requestAnimationFrame(()=>{t.style.transition="opacity 0.25s ease",t.style.opacity="1"}),da("security")},ai=(t=!1)=>{const e=()=>{const a=document.getElementById("security-modal");!a||a.style.display==="none"||(a.style.opacity="0",a.style.transition="opacity 0.25s ease",setTimeout(()=>{a.style.display="none",a.style.opacity="",a.style.transition=""},250))};typeof gt=="function"?gt("security",t,e):e()};window.renderStorefrontFooter=ei;window.openQualityGuaranteeModal=Rn;window.closeQualityGuaranteeModal=ti;window.openSecurityModal=Fn;window.closeSecurityModal=ai;const yt=()=>{if(ei(),Q("dyn-store-name",n.store.name||"Toko Putri"),Q("dyn-store-slogan",n.store.slogan||n.store.tagline||n.store.desc||n.store.description||"Toko Online & Kasir Resmi"),n.store.logo){const o=x("dyn-store-logo-img"),l=x("dyn-store-logo-icon");n.store.logo.includes("http")||n.store.logo.includes("data:")?o&&(o.src=n.store.logo,o.onerror=()=>{o.onerror=null,o.src="https://placehold.co/100?text=Logo"},V("dyn-store-logo-img"),K("dyn-store-logo-icon")):l&&(l.className=`fa-solid ${u(n.store.logo)} text-xl text-[var(--color-primary)]`,V("dyn-store-logo-icon"),K("dyn-store-logo-img"))}let t=n.banners&&n.banners.length?`
    <div class="relative group/banner-wrapper w-full">
        <div id="banner-slider" class="flex overflow-x-auto gap-4 sm:gap-6 pb-4 pt-2 snap-x hide-scrollbar scroll-smooth" ontouchstart="clearInterval(window.bannerTmr)" ontouchend="setTimeout(() => window.startBannerAutoSlide?.(), 8000)" onmouseenter="clearInterval(window.bannerTmr)" onmouseleave="window.startBannerAutoSlide?.()" onscroll="window.onBannerScroll && window.onBannerScroll()">
            ${n.banners.map((o,l)=>{const d=o.type==="video"&&o.videoUrl,c=!d&&o.link?`onclick="window.open('${u(o.link)}', '_self')"`:"";if(d){const p=wi(o.videoUrl)||{type:"direct",directUrl:vr(o.videoUrl),embedUrl:vi(o.videoUrl)};let m="";return p.type==="youtube"?m=`
                <iframe
                    class="banner-video-iframe w-full h-full absolute inset-0 z-0 border-0 pointer-events-none select-none"
                    src="${u(p.embedUrl)}"
                    data-src="${u(p.embedUrl)}"
                    frameborder="0"
                    scrolling="no"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>`:p.type==="gdrive"?m=`
                <iframe
                    class="banner-video-iframe absolute z-0 border-0 pointer-events-none select-none"
                    src="${u(p.embedUrl)}"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    style="width:180%; height:210%; top:-55%; left:-40%; transform:scale(1); object-fit:cover;"
                ></iframe>`:m=`
                <video
                    class="banner-video-element w-full h-full object-cover absolute inset-0 z-0 pointer-events-none select-none"
                    src="${u(p.directUrl)}"
                    autoplay
                    loop
                    muted
                    playsinline
                    webkit-playsinline
                    onended="this.currentTime=0; this.play();"
                ></video>`,`
            <div id="banner-slide-${l}" class="banner-slide-item w-[88vw] sm:w-[520px] aspect-video snap-center shrink-0 rounded-3xl relative overflow-hidden group bg-black shadow-none border border-white/10 flex flex-col select-none">
                ${m}
                <!-- Shield Transparan: Mencegah klik/tap pada video agar video tidak bisa di-klik/di-pause -->
                <div class="absolute inset-0 z-15 bg-transparent pointer-events-auto cursor-default" onclick="event.preventDefault(); event.stopPropagation();"></div>
                <!-- Konten bawah: judul & tombol suara murni transparan tanpa shadow gradient -->
                <div class="absolute bottom-0 left-0 right-0 z-20 bg-transparent px-5 py-4 flex items-end justify-between pointer-events-none">
                    <div class="flex-1 min-w-0 pointer-events-none">
                        ${o.title?`<p class="text-white font-extrabold text-sm sm:text-base line-clamp-2">${u(o.title)}</p>`:""}
                        ${o.desc?`<p class="text-white/90 text-[11px] sm:text-xs font-medium line-clamp-2 mt-0.5">${u(o.desc)}</p>`:""}
                    </div>
                    <div class="ml-3 shrink-0 flex items-center gap-2 pointer-events-auto">
                        <button onclick="event.stopPropagation(); window.toggleBannerVideoSound(this, ${l});" type="button" aria-label="Aktifkan Suara Video" class="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer">
                            <i class="fa-solid fa-volume-xmark text-xs"></i> <span>Aktifkan Suara</span>
                        </button>
                    </div>
                </div>

            </div>`}return`
        <div ${c} class="banner-slide-item w-[88vw] sm:w-[480px] min-h-[190px] sm:min-h-[220px] snap-center shrink-0 rounded-3xl relative overflow-hidden group cursor-pointer bg-[var(--color-primary)] text-white shadow-none hover:-translate-y-1 hover:scale-[1.01] hover:shadow-none transition-all duration-300 border border-white/15 flex flex-col">
            <!-- Dynamic Solid Header Shapes -->
            <div class="absolute -right-10 -top-10 w-40 h-40 border-[16px] border-white/10 rounded-full pointer-events-none group-hover:scale-105 transition-transform duration-500"></div>
            <div class="absolute -left-12 top-10 w-24 h-24 bg-white/10 rounded-full border border-white/10 pointer-events-none transform -rotate-12 group-hover:-translate-x-1 transition-transform duration-500"></div>
            
            <div class="flex flex-1 w-full relative z-10 items-center">
                <div class="w-[62%] sm:w-[65%] p-5 sm:p-6 md:p-7 flex flex-col justify-center z-20">
                    <h2 class="text-[15px] sm:text-lg md:text-xl font-black text-white leading-snug mb-2 drop-shadow-sm tracking-tight">${u(o.title||"Penawaran Spesial")}</h2>
                    <p class="text-[11px] sm:text-xs text-white/95 font-medium leading-relaxed mb-2 break-words">${u(o.desc||"Belanja sekarang dan dapatkan penawaran terbaik.")}</p>
                    ${o.link?'<button class="mt-2 bg-white text-slate-900 text-[9px] sm:text-[10px] uppercase tracking-wider font-extrabold py-2 px-4 rounded-full w-max hover:bg-slate-100 active:scale-95 transition-all shadow-md flex items-center gap-2 group-hover:pr-5">Beli Sekarang <i class="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i></button>':""}
                </div>
                <div class="w-[38%] sm:w-[35%] relative z-10 flex items-center justify-center p-2 sm:p-4 pr-4 sm:pr-6 shrink-0">
                    ${o.img?`<img loading="lazy" src="${u(me(o.img,"w800-rw"))}" alt="${u(o.title||"Promo Banner")}" class="w-full h-full max-h-[140px] sm:max-h-[170px] object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105" onerror="this.style.display='none'">`:`
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
            ${n.banners.map((o,l)=>`
                <button onclick="window.scrollToBanner(${l})" type="button" aria-label="Slide ${l+1}" class="banner-dot-item ${l===0?"h-2.5 rounded-full transition-all duration-300 bg-[var(--color-primary)] w-7 shadow-sm":"w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"}" data-index="${l}"></button>
            `).join("")}
        </div>
        `:""}
    </div>`:"";j("dynamic-banners-container",t),setTimeout(ma,500);const e=(n.vouchers||[]).filter(o=>o.isShow==="true"||o.isShow===!0),a=x("dynamic-vouchers-container");if(e.length>0&&a){a.classList.remove("hidden");let o=`
        <div class="flex items-center justify-between mb-2.5">
            <h3 class="font-bold text-slate-800 dark:text-white text-xs sm:text-sm tracking-tight flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white shadow-2xs">
                    <i class="fa-solid fa-ticket-simple text-xs -rotate-45"></i>
                </div> VOUCHER TOKO
            </h3>
        </div>
        <div class="flex gap-2.5 sm:gap-3 overflow-x-auto hide-scrollbar snap-x pb-3 pt-1">
            ${e.map(l=>{let d=l.type==="shipping_free"?"Gratis Ongkir":l.type==="percent"?`Diskon ${u(String(parseFloat(l.value)||0))}%`:`Diskon ${w(l.value)}`,c=[];l.minPurchase>0&&c.push(`Min. Blj ${w(l.minPurchase)}`),l.maxDiscount>0&&c.push(`Maks. ptg ${w(l.maxDiscount)}`),l.targetProduct&&c.push("Produk Khusus");let p=c.length>0?u(c.join(" • ")):"Tanpa min. belanja";return`
                <div class="w-[220px] sm:w-[245px] shrink-0 snap-start relative group cursor-pointer active:scale-95 transition-all duration-200" onclick="copyVoucher('${u(l.code)}')">
                    <div class="w-full h-[78px] sm:h-[82px] bg-[var(--color-primary)] rounded-xl shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex relative overflow-hidden border border-white/20 text-white">
                        <!-- Left/Right Ticket Punch Holes (Biting into the sides) -->
                        <div class="absolute -top-2 right-[25%] w-3.5 h-3.5 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-b border-white/10 z-20 pointer-events-none transform translate-x-1/2 transition-colors duration-300"></div>
                        <div class="absolute -bottom-2 right-[25%] w-3.5 h-3.5 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-t border-white/10 z-20 pointer-events-none transform translate-x-1/2 transition-colors duration-300"></div>
                        
                        <!-- Main Details (Left Side) -->
                        <div class="flex-1 px-3 py-2 sm:px-3.5 sm:py-2 flex flex-col justify-center relative z-10 min-w-0">
                            <h4 class="font-extrabold text-white text-xs sm:text-[13px] leading-tight mb-0.5 drop-shadow-xs line-clamp-1">${d}</h4>
                            <p class="text-[7.5px] sm:text-[8px] font-medium text-white/90 flex items-center gap-1 mb-1.5 uppercase tracking-wider line-clamp-1"><i class="fa-solid fa-circle-info text-white/70 text-[7px]"></i> ${p}</p>
                            <div class="inline-flex">
                                <span class="bg-black/30 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border border-white/20 flex items-center gap-1 font-mono w-max">
                                    <i class="fa-solid fa-ticket text-amber-300 text-[8px]"></i> ${u(l.code)}
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
        </div>`;a.innerHTML=o}else a&&(a.classList.add("hidden"),a.innerHTML="");const r=[...n.categories||[]];j("dynamic-categories-container",r.map(o=>{const l=qe===o.name,d=decodeURIComponent(encodeURIComponent(o.name).replace(/'/g,"%27"));if(n.store.categoryStyle==="text"||!n.store.categoryStyle)return`<div onclick="filterCategory('${d}')" class="cursor-pointer shrink-0 snap-start group py-0.5"><div class="px-3.5 py-1.5 rounded-xl border transition-all duration-200 flex items-center gap-2 ${l?"bg-[var(--color-primary)] border-transparent text-white shadow-xs":"bg-slate-50 dark:bg-slate-800/90 border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[var(--color-primary)]/50 hover:bg-white dark:hover:bg-slate-800"}"><div class="w-5 h-5 rounded-md flex items-center justify-center ${l?"bg-white/20 text-white":"bg-white dark:bg-slate-700 text-slate-400 group-hover:text-[var(--color-primary)]"} transition-colors"><i class="fa-solid fa-layer-group text-[9px]"></i></div><span class="font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">${u(o.name)}</span></div></div>`;{const c=o.img&&!o.img.includes("10b981")?me(o.img,"w150-rw"):"https://placehold.co/150/f1f5f9/64748b?text=Cat";return`<div onclick="filterCategory('${d}')" class="flex flex-col items-center gap-1.5 cursor-pointer shrink-0 w-[64px] sm:w-[72px] group snap-start py-0.5"><div class="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-1.5 transition-all duration-200 ${l?"bg-[var(--color-primary-light)] border-2 border-[var(--color-primary)] shadow-xs dark:bg-[var(--color-primary-dark)]/20":"border border-slate-200 dark:border-slate-700 shadow-2xs group-hover:border-[var(--color-primary)] group-hover:-translate-y-0.5"} overflow-hidden"><img loading="lazy" src="${u(c)}" alt="${u(o.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/f1f5f9/64748b?text=Cat'" class="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"></div><span class="text-[8.5px] sm:text-[9px] text-center w-full line-clamp-1 leading-tight px-0.5 ${l?"font-bold text-[var(--color-primary)]":"font-semibold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]"} uppercase tracking-wider transition-colors">${u(o.name)}</span></div>`}}).join(""));const s=[...n.brands||[]],i=[{name:"Semua Merek",img:n.store.allBrandsIcon&&!n.store.allBrandsIcon.includes("10b981")?n.store.allBrandsIcon:"https://placehold.co/150/f1f5f9/475569?text=Semua+Merek"},...n.brands||[]];j("dynamic-brands-container",s.map(o=>{const l=st===o.name,d=decodeURIComponent(encodeURIComponent(o.name).replace(/'/g,"%27"));if(n.store.brandStyle==="text")return`<div onclick="filterBrand('${d}')" class="cursor-pointer shrink-0 snap-start group py-0.5"><div class="px-3.5 py-1.5 rounded-xl border transition-all duration-200 flex items-center gap-2 ${l?"bg-[var(--color-primary)] border-transparent text-white shadow-xs":"bg-slate-50 dark:bg-slate-800/90 border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[var(--color-primary)]/50 hover:bg-white dark:hover:bg-slate-800"}"><div class="w-5 h-5 rounded-md flex items-center justify-center ${l?"bg-white/20 text-white":"bg-white dark:bg-slate-700 text-slate-400 group-hover:text-[var(--color-primary)]"} transition-colors"><i class="fa-solid fa-copyright text-[9px]"></i></div><span class="font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">${u(o.name)}</span></div></div>`;{const c=o.img&&!o.img.includes("10b981")?me(o.img,"w150-rw"):"https://placehold.co/150/f1f5f9/64748b?text=Brand";return`<div onclick="filterBrand('${d}')" class="flex flex-col items-center gap-1.5 cursor-pointer shrink-0 w-[64px] sm:w-[72px] group snap-start py-0.5"><div class="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden p-1.5 transition-all duration-200 ${l?"ring-2 ring-[var(--color-primary)] ring-offset-1 ring-offset-slate-50 dark:ring-offset-slate-800 shadow-xs":"border border-slate-200 dark:border-slate-700 shadow-2xs group-hover:border-[var(--color-primary)]/50 group-hover:-translate-y-0.5"}"><img loading="lazy" src="${u(c)}" alt="${u(o.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/f1f5f9/64748b?text=Brand'" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"></div><span class="text-[8.5px] sm:text-[9px] text-center w-full line-clamp-1 leading-tight px-0.5 ${l?"font-bold text-[var(--color-primary)]":"font-semibold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]"} uppercase tracking-wider transition-colors">${u(o.name)}</span></div>`}}).join("")),j("modal-brand-grid",i.map(o=>{const l=st===o.name,d=decodeURIComponent(encodeURIComponent(o.name).replace(/'/g,"%27")),c=o.img&&!o.img.includes("10b981")?me(o.img,"w150-rw"):"https://placehold.co/150/f1f5f9/64748b?text=Brand";return`<button onclick="filterBrand('${d}'); closeBrandModal();" class="flex flex-col items-center gap-3 p-4 rounded-2xl border ${l?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.07)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-sm":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]/40 hover:shadow-sm"} transition-all active:scale-[0.96]"><div class="w-14 h-14 rounded-2xl flex items-center justify-center bg-white border border-slate-100 dark:border-slate-600 shadow-inner overflow-hidden p-1.5"><img loading="lazy" src="${u(c)}" alt="${u(o.name)}" class="w-full h-full object-contain" onerror="this.src='https://placehold.co/150/f1f5f9/64748b?text=Brand'"></div> <span class="text-[10px] sm:text-xs font-bold ${l?"text-[var(--color-primary)]":"text-slate-700 dark:text-slate-300"} text-center leading-tight line-clamp-2 uppercase tracking-widest">${u(o.name)}</span></button>`}).join("")),x("dyn-qris-img")&&n.payment&&(x("dyn-qris-img").src=n.payment.qrisUrl),typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog(),typeof window.applyBackgroundStyle=="function"&&window.applyBackgroundStyle(n.store.bgStyle,n.store.bgCustomUrl),et(1),Me()};window.rDyn=yt;const Ue=(t,e=null)=>{if(!Array.isArray(t))return[];const a=e||n.productOrder||[];if(!a.length)return t.sort((s,i)=>(i.id||0)-(s.id||0));const r=new Map;return a.forEach((s,i)=>r.set(String(s),i)),t.sort((s,i)=>{const o=s&&s.id!=null?String(s.id):"",l=i&&i.id!=null?String(i.id):"",d=r.has(o),c=r.has(l);return d&&c?r.get(o)-r.get(l):d?-1:c?1:(i.id||0)-(s.id||0)})};window.sortProductsByOrder=Ue;const Hn=async()=>{if(document.documentElement.classList.contains("dark")){const g=x("icon-theme");g&&(g.className="fa-solid fa-sun text-sm text-amber-500")}const t=()=>{n.products=n.products||[],n.productOrder=Array.isArray(n.productOrder)?n.productOrder:[],n.categories=n.categories||[],n.brands=n.brands||[],n.vouchers=n.vouchers||[],n.changelog=n.changelog||[],n.rewards=n.rewards||[],n.rewards&&n.rewards.forEach(g=>{g.img&&(g.img=z(g.img))}),n.products.forEach(g=>{g.img&&(g.img=z(g.img)),g.variants&&g.variants.forEach(k=>{k.img&&(k.img=z(k.img))})}),n.banners&&n.banners.forEach(g=>{g.img&&(g.img=z(g.img)),g.videoUrl&&(g.videoUrl=vr(g.videoUrl))}),n.categories&&n.categories.forEach(g=>{g.img&&(g.img=z(g.img),g.img.includes("10b981")&&(g.img="https://placehold.co/150/f1f5f9/64748b?text=Cat"))}),n.brands&&n.brands.forEach(g=>{g.img&&(g.img=z(g.img),g.img.includes("10b981")&&(g.img="https://placehold.co/150/f1f5f9/64748b?text=Brand"))}),n.store.logo&&(n.store.logo=z(n.store.logo)),n.store.allProductsIcon&&(n.store.allProductsIcon=z(n.store.allProductsIcon)),n.store.allBrandsIcon&&(n.store.allBrandsIcon=z(n.store.allBrandsIcon),n.store.allBrandsIcon.includes("10b981")&&(n.store.allBrandsIcon="https://placehold.co/150/f1f5f9/475569?text=Semua+Merek")),n.payment.qrisUrl&&(n.payment.qrisUrl=z(n.payment.qrisUrl)),O.forEach(g=>{g.img&&(g.img=z(g.img))}),Ce.forEach(g=>{g.img&&(g.img=z(g.img))})},e=ws?.projectId||"default",a=it("freshmart_active_project");if(a&&a!==e)try{localStorage.removeItem("freshmart_cms_data"),localStorage.removeItem("freshmart_products"),localStorage.removeItem("freshmart_rewards"),localStorage.removeItem("freshmart_last_update"),localStorage.removeItem("freshmart_cart"),localStorage.removeItem("freshmart_wishlist")}catch{}ie("freshmart_active_project",e);let r=JSON.parse(it("freshmart_cms_data")||"null"),s=JSON.parse(it("freshmart_products")||"null"),i=JSON.parse(it("freshmart_rewards")||"null");parseInt(it("freshmart_last_update")||"0");let o=!1;if(r?(Object.assign(n,je,r),n.store={...je.store,...r.store||{}},n.payment={...je.payment,...r.payment||{}},n.config={...je.config,...r.config||{}},n.config&&n.config.gasUrl&&(window.GAS_UPLOAD_URL=n.config.gasUrl),s&&(n.products=Ue(s)),i&&(n.rewards=i),t(),n.store&&(Nt(n.store.uiTheme,n.store.themeColor),Ot(n.store.bgStyle,n.store.bgCustomUrl)),sa(),be(),ia(),yt(),Me(),Q("stat-products",n.products.filter(g=>g.isActive!=="false"&&g.isActive!==!1).length),setTimeout(()=>{L()},1200),o=!0):R("Memuat Toko..."),!o)try{const g=await P.collection("freshmart").doc("cms_data").get();if(g.exists){const k=g.data(),S=k.lastUpdate||0;ie("freshmart_cms_data",JSON.stringify(k)),Object.assign(n,je,k),n.store={...je.store,...k.store||{}},n.payment={...je.payment,...k.payment||{}},n.config={...je.config,...k.config||{}},n.config&&n.config.gasUrl&&(window.GAS_UPLOAD_URL=n.config.gasUrl);const A=await P.collection("freshmart").doc("cms_data").collection("products").get();n.products=Ue(A.docs.map(T=>T.data())),ie("freshmart_products",JSON.stringify(n.products)),ie("freshmart_last_update",S.toString());try{const T=await P.collection("freshmart").doc("cms_data").collection("rewards").get();n.rewards=T.docs.map(H=>H.data()).sort((H,E)=>(E.id||0)-(H.id||0)),ie("freshmart_rewards",JSON.stringify(n.rewards))}catch(T){console.warn("Initial rewards fetch non-blocking error:",T)}t(),n.store&&(Nt(n.store.uiTheme,n.store.themeColor),Ot(n.store.bgStyle,n.store.bgCustomUrl)),sa(),be(),ia(),yt(),Me(),Q("stat-products",n.products.filter(T=>T.isActive!=="false"&&T.isActive!==!1).length)}}catch{h("Mode Offline (Data Lokal)")}finally{setTimeout(()=>{L()},800)}Q("stat-products",n.products.filter(g=>g.isActive!=="false"&&g.isActive!==!1).length);const l=x("loader-store-name"),d=x("loader-tagline");l&&(l.textContent=(n.store.name||"").toUpperCase()),d&&(d.textContent=n.store.tagline||n.store.desc||n.store.address||"");const c=x("loader-logo-icon"),p=x("loader-logo-img"),m=n.store.logo&&n.store.logo!=="fa-store"?n.store.logo:"";m&&(c&&(c.style.display="none"),p&&(p.src=m,p.style.display="block")),Fr(),window.injectJSONLD("seo-website",{"@context":"https://schema.org","@type":"WebSite",name:"Toko Putri",url:window.location.origin}),window.injectJSONLD("seo-localbusiness",{"@context":"https://schema.org","@type":"HardwareStore",name:"Toko Putri",image:me(n.store.logo,"w300-rw"),description:"Solusi grosir dan e-commerce terpercaya untuk alat teknik, perkakas, dan perlengkapan pertukangan berkualitas.",url:window.location.origin,telephone:n.store.phone||"",address:{"@type":"PostalAddress",streetAddress:n.store.address||"",addressCountry:"ID"}});const f=new URLSearchParams(window.location.search).get("p");if(f&&n.products.find(g=>g.id==parseInt(f))){const g=new URLSearchParams(window.location.search);g.delete("p");let k=window.location.pathname;g.toString()&&(k+="?"+g.toString()),window.history.replaceState({},document.title,k),setTimeout(()=>openProductModal(parseInt(f)),600)}L()},ee=async(t=null,e=null)=>{try{if(Array.isArray(t)){const r={lastUpdate:ye.firestore.FieldValue.increment(1),updateType:e?.updateType||(t.length?"settings_change":"full"),changedKeys:t};e?.updatedProductIds&&Array.isArray(e.updatedProductIds)?r.updatedProductIds=e.updatedProductIds:r.updatedProductIds=ye.firestore.FieldValue.delete(),t.forEach(s=>{s&&(r[s]=n[s])}),await P.collection("freshmart").doc("cms_data").set(r,{merge:!0})}else{const r={...n};delete r.products,delete r.auth,r.lastUpdate=ye.firestore.FieldValue.increment(1),r.updateType="full",await P.collection("freshmart").doc("cms_data").set(r)}n.lastUpdate=(parseInt(it("freshmart_last_update"))||n.lastUpdate||0)+1;const a={...n};delete a.products,delete a.auth,ie("freshmart_cms_data",JSON.stringify(a)),ie("freshmart_last_update",n.lastUpdate.toString()),ie("freshmart_products",JSON.stringify(n.products))}catch{h("Tersimpan secara Lokal")}};let tr=!1,nt=null,br=typeof document<"u"?document.hidden:!1,fr=!1,It=!1;typeof document<"u"&&document.addEventListener("visibilitychange",()=>{if(br=document.hidden,!br&&fr&&nt){fr=!1;const t=nt;nt=null,typeof window._doSyncCmsData=="function"&&window._doSyncCmsData(t)}});const hr=t=>{if(!t)return t;const e={...t};return e.id==null&&(e.id=0),typeof e.id=="string"&&!isNaN(e.id)&&(e.id=Number(e.id)),e.img&&(e.img=z(e.img)),e.variants&&e.variants.forEach(a=>{a.img&&(a.img=z(a.img))}),e},Da=()=>{if(Q("stat-products",n.products.filter(a=>a.isActive!=="false"&&a.isActive!==!1).length),sa(),be(),typeof yt=="function"?yt():typeof window.rDyn=="function"&&window.rDyn(),typeof Me=="function"?Me():typeof window.rCat=="function"&&window.rCat(),document.getElementById("admin-list-container")&&typeof window.rAdmItms=="function"){const a=window.cTab||"products";["products","colors"].includes(a)&&window.rAdmItms(a)}const e=window.cProd;if(e){const a=n.products.find(r=>r.id===e.id);if(a&&(window.cProd=a,typeof window.rProdMod=="function")){const r=document.getElementById("product-modal");r&&!r.classList.contains("hidden")&&!r.classList.contains("opacity-0")&&window.rProdMod()}}},Kn=()=>{if(window.unsubCmsRealtime)return;const t=async e=>{if(!e.exists)return;const a=e.data(),r=a.lastUpdate||0,s=parseInt(it("freshmart_last_update")||"0");if(br){nt=e,fr=!0;return}if(!(r===s&&r>0&&It&&n.products&&n.products.length>0)){tr=!0;try{const i=a.updateType||"full",o=Array.isArray(a.updatedProductIds)?a.updatedProductIds.map(String):[];if(n.store={...je.store,...a.store||{}},a.productOrder&&Array.isArray(a.productOrder)&&(n.productOrder=a.productOrder,n.products&&n.products.length&&Ue(n.products)),a.categories&&(n.categories=a.categories),a.vouchers&&(n.vouchers=a.vouchers),a.banners&&(n.banners=a.banners),a.brands&&(n.brands=a.brands),a.banks&&(n.banks=a.banks),a.faqs&&(n.faqs=a.faqs),n.payment={...je.payment,...a.payment||{}},n.config={...je.config,...a.config||{}},n.taxSettings={...je.taxSettings,...a.taxSettings||{}},n.config&&n.config.gasUrl&&(window.GAS_UPLOAD_URL=n.config.gasUrl),n.banners&&n.banners.forEach(d=>{d.img&&(d.img=z(d.img)),d.videoUrl&&(d.videoUrl=vr(d.videoUrl))}),n.categories&&n.categories.forEach(d=>{d.img&&(d.img=z(d.img),d.img.includes("10b981")&&(d.img="https://placehold.co/150/f1f5f9/64748b?text=Cat"))}),n.brands&&n.brands.forEach(d=>{d.img&&(d.img=z(d.img),d.img.includes("10b981")&&(d.img="https://placehold.co/150/f1f5f9/64748b?text=Brand"))}),i==="product_delete"&&o.length>0)o.forEach(d=>{const c=n.products.findIndex(p=>(p.id!=null?p.id.toString():"")===d);c>-1&&n.products.splice(c,1)}),ie("freshmart_products",JSON.stringify(n.products)),It=!0,Da();else if(!It&&(!n.products||n.products.length===0)){const d=await P.collection("freshmart").doc("cms_data").collection("products").get();n.products=Ue(d.docs.map(c=>hr(c.data()))),ie("freshmart_products",JSON.stringify(n.products)),It=!0,Da()}else It=!0;if(ie("freshmart_cms_data",JSON.stringify(a)),ie("freshmart_last_update",r.toString()),n.store&&(Nt(n.store.uiTheme,n.store.themeColor),Ot(n.store.bgStyle,n.store.bgCustomUrl)),Fr(),Q("stat-products",n.products.filter(d=>d.isActive!=="false"&&d.isActive!==!1).length),typeof yt=="function"?yt():typeof window.rDyn=="function"&&window.rDyn(),typeof Me=="function"?Me():typeof window.rCat=="function"&&window.rCat(),sa(),be(),(window.isAdm||window.__localIsAdm)&&typeof window.rAdmItms=="function"){const d=window.cTab||"products";["categories","vouchers","banners","brands","banks","colors"].includes(d)&&window.rAdmItms(d)}}catch(i){console.error("Gagal sinkron realtime settings:",i)}finally{if(tr=!1,nt){const i=nt;nt=null,t(i)}}}};window._doSyncCmsData=t,window.unsubCmsRealtime=P.collection("freshmart").doc("cms_data").onSnapshot(async e=>{if(tr){nt=e;return}await t(e)},e=>{console.warn("Realtime listener error:",e)})},Vn=()=>{if(window.unsubProductsRealtime)return;let t=!0;window.unsubProductsRealtime=P.collection("freshmart").doc("cms_data").collection("products").onSnapshot(e=>{if(t){t=!1,It=!0,n.products=Ue(e.docs.map(r=>hr(r.data()))),ie("freshmart_products",JSON.stringify(n.products)),Da();return}let a=!1;e.docChanges().forEach(r=>{const s=hr(r.doc.data()),i=r.doc.id;if(r.type==="added"||r.type==="modified"){const o=n.products.findIndex(l=>(l.id!=null?l.id.toString():"")===i);o>-1?n.products[o]=s:(n.products.unshift(s),Ue(n.products)),a=!0}else if(r.type==="removed"){const o=n.products.findIndex(l=>(l.id!=null?l.id.toString():"")===i);o>-1&&(n.products.splice(o,1),a=!0)}}),a&&(ie("freshmart_products",JSON.stringify(n.products)),Da())},e=>{console.warn("Realtime products listener error:",e)})},Un=()=>{if(!window.unsubRewardsRealtime){if(!n.rewards||!n.rewards.length)try{const t=JSON.parse(it("freshmart_rewards")||"null");t&&Array.isArray(t)&&(n.rewards=t,n.rewards.forEach(e=>{e.img&&(e.img=z(e.img))}))}catch{}window.unsubRewardsRealtime=P.collection("freshmart").doc("cms_data").collection("rewards").onSnapshot(t=>{n.rewards=t.docs.map(r=>r.data()).sort((r,s)=>(s.id||0)-(r.id||0)),n.rewards.forEach(r=>{r.img&&(r.img=z(r.img))}),ie("freshmart_rewards",JSON.stringify(n.rewards)),(window.isAdm||window.__localIsAdm)&&window.cTab==="rewards"&&typeof window.rAdmItms=="function"&&window.rAdmItms("rewards"),typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog();const a=document.getElementById("member-modal");a&&a.style.display==="flex"&&currentMember&&typeof window.rMemberModalBody=="function"&&window.rMemberModalBody()},t=>{console.warn("Realtime hadiah gagal:",t)})}},Fr=t=>{try{const e=n.store?.name||"Toko Putri",a=n.store?.logo||"",r=/^(https?:|data:)/i.test(a)?a:"https://placehold.co/192x192?text=Logo",s=document.documentElement.classList.contains("dark")?"#0b1120":"#ffffff",i=t||n.store?.themeColor||localStorage.getItem("freshmart_theme_color")||"#10b981";let o=document.getElementById("dynamic-manifest");o||(o=document.createElement("link"),o.id="dynamic-manifest",o.rel="manifest",document.head.appendChild(o));let l=document.getElementById("dynamic-apple-icon");l||(l=document.createElement("link"),l.id="dynamic-apple-icon",l.rel="apple-touch-icon",document.head.appendChild(l)),l.href=r;let d=document.getElementById("dynamic-favicon");d||(d=document.createElement("link"),d.id="dynamic-favicon",d.rel="icon",document.head.appendChild(d)),d.href=r;const c={id:window.location.origin+"/",name:e,short_name:e,description:n.store?.slogan||e+" - Belanja online lebih mudah",start_url:window.location.origin+"/",scope:window.location.origin+"/",lang:"id",dir:"ltr",display:"standalone",display_override:["standalone","minimal-ui"],orientation:"portrait",categories:["shopping","business"],background_color:s,theme_color:i,icons:[{src:r,sizes:"192x192",type:"image/png",purpose:"any"},{src:r,sizes:"512x512",type:"image/png",purpose:"any"}]};if(o.dataset.blobUrl)try{URL.revokeObjectURL(o.dataset.blobUrl)}catch{}const p=URL.createObjectURL(new Blob([JSON.stringify(c)],{type:"application/manifest+json"}));o.dataset.blobUrl=p,o.href=p}catch(e){console.error("PWA Manifest Update Error: ",e)}};window.loadAppData=Hn;window.saveApp=ee;window.sortProductsByOrder=Ue;window.attachRealtimeStockSync=Kn;window.attachRealtimeProductsSync=Vn;window.attachRewardsRealtime=Un;window.updatePwaManifest=Fr;let ka=null;const Ht=async t=>{if(!t||!t.length)return;let e=n.productOrder&&n.productOrder.length?[...n.productOrder]:(n.products||[]).map(i=>String(i.id));const a=new Set(e);(n.products||[]).forEach(i=>{const o=String(i.id);a.has(o)||(e.push(o),a.add(o))});const r=new Set(t),s=[];e.forEach((i,o)=>{r.has(i)&&s.push(o)}),t.forEach((i,o)=>{o<s.length&&(e[s[o]]=i)}),n.productOrder=e,Ue(n.products);try{await(typeof ee=="function"?ee:window.saveApp||(async()=>{}))(["productOrder"]),h("Urutan produk berhasil disimpan! ✨")}catch(i){console.warn("Gagal simpan urutan produk:",i)}rAdmItms("products")};window.applyNewProductOrder=Ht;window.moveProductOrder=async(t,e)=>{const a=String(t),r=[...n.products||[]],s=(Va||window.aSq||"").toLowerCase(),i=r.filter(p=>{let m=(p.name||p.title||p.bankName||p.code||p.sku||p.phone||"").toLowerCase().includes(s);return!m&&p.variants&&(m=p.variants.some(b=>b.sku&&b.sku.toLowerCase().includes(s))),m}),o=i.findIndex(p=>String(p.id)===a);if(o===-1)return;const l=o+e;if(l<0||l>=i.length)return;const d=i.map(p=>String(p.id)),c=d[o];d[o]=d[l],d[l]=c,await Ht(d)};window.jumpProductOrder=async t=>{const e=String(t),a=[...n.products||[]],r=(Va||window.aSq||"").toLowerCase(),s=a.filter(b=>{let f=(b.name||b.title||b.bankName||b.code||b.sku||b.phone||"").toLowerCase().includes(r);return!f&&b.variants&&(f=b.variants.some(g=>g.sku&&g.sku.toLowerCase().includes(r))),f}),i=s.findIndex(b=>String(b.id)===e);if(i===-1)return;const o=s[i],l=prompt(`Pindahkan "${o.name}" ke nomor urut berapa? (1 - ${s.length}):`,String(i+1));if(!l)return;const d=parseInt(l,10);if(isNaN(d)||d<1||d>s.length)return h(`Nomor urut harus antara 1 sampai ${s.length}`);const c=d-1;if(c===i)return;const p=s.map(b=>String(b.id)),[m]=p.splice(i,1);p.splice(c,0,m),await Ht(p)};window.autoGroupProductsByCategory=async()=>{window.showConfirm?.("Rapikan per Kategori","Susun produk otomatis berdasarkan Kategori dan Jenis (Sub-Kategori) agar produk sejenis (seperti semen, paku, cat) berkelompok rapi?",async()=>{const t=[...n.products||[]];t.sort((a,r)=>{const s=(a.category||"").toLowerCase(),i=(r.category||"").toLowerCase();if(s!==i)return s.localeCompare(i);const o=(a.subCategory||"").toLowerCase(),l=(r.subCategory||"").toLowerCase();return o!==l?o.localeCompare(l):(a.name||"").localeCompare(r.name||"")});const e=t.map(a=>String(a.id));await Ht(e),h("Produk berhasil dirapikan per kategori! 📦")},"Ya, Rapikan",!1)};window.toggleProductOrderMenu=t=>{t&&t.stopPropagation();const e=x("admin-product-order-dropdown");e&&e.classList.toggle("hidden")};window.sortProductsQuick=async t=>{const e=x("admin-product-order-dropdown");e&&e.classList.add("hidden");const a=[...n.products||[]];t==="az"?a.sort((s,i)=>(s.name||"").localeCompare(i.name||"")):t==="za"?a.sort((s,i)=>(i.name||"").localeCompare(s.name||"")):t==="price_low"?a.sort((s,i)=>(parseFloat(s.price)||0)-(parseFloat(i.price)||0)):t==="price_high"?a.sort((s,i)=>(parseFloat(i.price)||0)-(parseFloat(s.price)||0)):t==="reset_newest"&&a.sort((s,i)=>(i.id||0)-(s.id||0));const r=a.map(s=>String(s.id));await Ht(r)};typeof document<"u"&&document.addEventListener("click",t=>{const e=x("admin-product-order-dropdown-wrap"),a=x("admin-product-order-dropdown");e&&a&&!e.contains(t.target)&&a.classList.add("hidden")});const Gn=()=>{const t=x("admin-list-container");if(!t)return;if(ka){try{ka.destroy()}catch{}ka=null}(Ha||window.cTab||"products")==="products"&&(ka=new C(t,{handle:".product-drag-handle",animation:200,ghostClass:"opacity-30",chosenClass:"ring-2",dragClass:"shadow-2xl",forceFallback:!1,onEnd:async a=>{if(a.oldIndex===a.newIndex)return;const s=Array.from(t.querySelectorAll("[data-id]")).map(i=>i.getAttribute("data-id")).filter(Boolean);await Ht(s)}}))};window.rAdmL=t=>{Ka(t),typeof window.setCTab=="function"&&window.setCTab(t),window.cTab=t,j("admin-content",`
        <div class="max-w-5xl mx-auto">
        ${t==="products"?'<div id="admin-product-stats" class="mb-5"></div>':""}
        <div class="mb-6">
            ${t==="colors"?`
        <div class="flex gap-2 mb-4 flex-wrap">
            <button onclick="openImportFromProductsModal()" class="flex items-center gap-2 px-4 py-2 rounded-xl primary-bg-soft border primary-border primary-text font-bold text-[11px] uppercase tracking-widest hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all active:scale-95 shadow-sm"><i class="fa-solid fa-box-archive"></i> Impor dari Semua Produk</button>
        </div>`:""}
            <div class="flex gap-2 items-center mb-4">
                <div class="relative flex-1">
                    <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                    <input autocomplete='off' id="admin-search-input" name='cari_admin_q' placeholder="Cari..." oninput="(window.setASq ? window.setASq(this.value.toLowerCase()) : (window.aSq=this.value.toLowerCase()));rAdmItms('${t}')" class="w-full bg-white dark:bg-slate-800 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-2xl py-3.5 pl-11 pr-12 text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(var(--color-primary-rgb),0.12)] shadow-sm transition-all" ></i>
                    <button onclick="openCameraScanner('admin-search-input')" class="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl transition-all" title="Scan Barcode"><i class="fa-solid fa-qrcode text-sm"></i></button>
                </div>
                <button onclick="oAAdd()" class="h-[46px] px-5 rounded-2xl primary-bg font-bold text-sm flex items-center gap-2 shadow-glow active:scale-95 transition-all shrink-0"><i class="fa-solid fa-plus text-xs"></i> Tambah</button>
            </div>
            ${t==="products"?`
        <div class="flex items-center justify-between gap-2 flex-wrap mb-4 px-1">
            <div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-bold text-[11px]">
                <i class="fa-solid fa-up-down-left-right text-[var(--color-primary)]"></i>
                <span class="hidden sm:inline">Tahan & geser pegangan <i class="fa-solid fa-grip-vertical opacity-60"></i> atau gunakan tombol panah untuk mengatur urutan.</span>
                <span class="sm:hidden">Geser <i class="fa-solid fa-grip-vertical opacity-60"></i> atau panah untuk atur urutan.</span>
            </div>
            <div class="flex items-center gap-2 ml-auto">
                <button onclick="window.autoGroupProductsByCategory()" class="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-[11px] transition-all active:scale-95 shadow-2xs border border-slate-200/80 dark:border-slate-700" title="Otomatis kumpulkan produk sejenis (Paku dengan Paku, Semen dengan Semen)">
                    <i class="fa-solid fa-layer-group text-[var(--color-primary)]"></i> Rapikan per Kategori
                </button>
                <div class="relative inline-block" id="admin-product-order-dropdown-wrap">
                    <button onclick="window.toggleProductOrderMenu(event)" class="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-[11px] transition-all active:scale-95 shadow-2xs border border-slate-200/80 dark:border-slate-700">
                        <i class="fa-solid fa-arrow-down-a-z"></i> Urutkan Cepat <i class="fa-solid fa-chevron-down text-[9px] opacity-60"></i>
                    </button>
                    <div id="admin-product-order-dropdown" class="hidden absolute right-0 mt-1.5 w-52 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl p-1.5 z-40 text-[11px] font-bold">
                        <button onclick="window.sortProductsQuick('az')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/60 flex items-center gap-2 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-arrow-down-a-z text-slate-400"></i> Nama A - Z</button>
                        <button onclick="window.sortProductsQuick('za')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/60 flex items-center gap-2 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-arrow-down-z-a text-slate-400"></i> Nama Z - A</button>
                        <button onclick="window.sortProductsQuick('price_low')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/60 flex items-center gap-2 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-arrow-down-1-9 text-slate-400"></i> Harga Termurah</button>
                        <button onclick="window.sortProductsQuick('price_high')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/60 flex items-center gap-2 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-arrow-down-9-1 text-slate-400"></i> Harga Termahal</button>
                        <div class="h-px bg-slate-100 dark:bg-slate-700 my-1"></div>
                        <button onclick="window.sortProductsQuick('reset_newest')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center gap-2 text-rose-500"><i class="fa-solid fa-rotate-left"></i> Reset ke ID Terbaru</button>
                    </div>
                </div>
            </div>
        </div>`:""}
        </div>
        <div id="admin-list-container" class="space-y-3 pb-12"></div>
        </div>
    `),rAdmItms(t)};window.rAdmItms=t=>{t&&(Ka(t),typeof window.setCTab=="function"&&window.setCTab(t),window.cTab=t);const e=x("admin-list-container"),a=e?e.closest(".scroll-content"):null,r=a?a.scrollTop:0;if(t==="products"&&x("admin-product-stats")){const l=Oa();j("admin-product-stats",`
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
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400">Modal (HPP): <b class="text-slate-700 dark:text-slate-200">${w(l.assetHpp)}</b></p>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">Harga Jual: <b class="text-slate-700 dark:text-slate-200">${w(l.assetJual)}</b></p>
                </div>
            </div>
        `)}let s=[...n[t]||[]];t==="products"?Ue(s):s.sort((l,d)=>(d.id||0)-(l.id||0));const i=(Va||window.aSq||"").toLowerCase();let o=s.filter(l=>{let d=(l.name||l.title||l.bankName||l.code||l.sku||l.phone||"").toLowerCase().includes(i);return t==="products"&&!d&&l.variants&&(d=l.variants.some(c=>c.sku&&c.sku.toLowerCase().includes(i))),d});if(!o.length)return j("admin-list-container",'<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-folder-open text-5xl mb-4 opacity-30"></i>Data kosong</div>');j("admin-list-container",o.map((l,d)=>{let c=t==="products",p=c&&(l.isActive==="false"||l.isActive===!1),m=p?"border-rose-200 bg-rose-50/50 dark:border-rose-900/50 dark:bg-rose-900/10":"border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800",b=p?"text-slate-500 dark:text-slate-400 line-through":"text-slate-800 dark:text-slate-100",f=c?`
            <div class="product-drag-handle flex flex-col items-center justify-center w-7 sm:w-8 -my-2 -ml-1 sm:-ml-2 py-3 cursor-grab active:cursor-grabbing primary-text opacity-25 hover:opacity-90 transition-opacity select-none touch-none group/handle shrink-0" onclick="event.stopPropagation();" title="Tahan & geser untuk mengubah urutan">
                <i class="fa-solid fa-grip-vertical text-base sm:text-lg group-hover/handle:scale-110 transition-transform"></i>
            </div>
            <div class="flex flex-col items-center justify-center shrink-0 gap-1 mr-1 sm:mr-2 select-none" onclick="event.stopPropagation();">
                <button class="w-6 h-6 rounded-lg primary-bg-soft border primary-border primary-text hover:primary-bg hover:text-white text-[10px] flex items-center justify-center transition-all active:scale-90 shadow-sm ${d===0?"opacity-25 pointer-events-none":""}" onclick="window.moveProductOrder('${l.id}', -1)" title="Geser Naik 1 Posisi"><i class="fa-solid fa-chevron-up"></i></button>
                <button class="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md primary-bg-soft border primary-border primary-text hover:primary-bg hover:text-white font-mono tracking-tighter transition-all" onclick="window.jumpProductOrder('${l.id}')" title="Klik untuk lompat ke nomor urut tertentu">#${d+1}</button>
                <button class="w-6 h-6 rounded-lg primary-bg-soft border primary-border primary-text hover:primary-bg hover:text-white text-[10px] flex items-center justify-center transition-all active:scale-90 shadow-sm ${d===o.length-1?"opacity-25 pointer-events-none":""}" onclick="window.moveProductOrder('${l.id}', 1)" title="Geser Turun 1 Posisi"><i class="fa-solid fa-chevron-down"></i></button>
            </div>
        `:"",g=l.img?`<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white border border-slate-100 dark:border-slate-700/60 rounded-2xl p-1.5 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${u(l.img)}" alt="${u(l.name)}" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Img'" class="w-full h-full object-contain ${p?"grayscale opacity-50":""}"></div>`:'<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-2xl flex items-center justify-center text-slate-300 dark:text-slate-600"><i class="fa-solid fa-image text-2xl"></i></div>';const k=window.isAdm||window.__localIsAdm;let S=c?p?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl primary-icon-btn border flex items-center justify-center transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus('${l.id}', true)" title="Aktifkan Stok"><i class="fa-solid fa-check text-xs sm:text-sm"></i></button>`:`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-500 flex items-center justify-center hover:bg-amber-500 hover:text-white dark:bg-amber-900/30 dark:border-amber-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus('${l.id}', false)" title="Nonaktifkan (Habis)"><i class="fa-solid fa-ban text-xs sm:text-sm"></i></button>`:"",A=c?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white dark:bg-blue-900/30 dark:border-blue-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); duplicateProduct('${l.id}')" title="Duplikat Produk"><i class="fa-regular fa-copy text-xs sm:text-sm"></i></button>`:"";const T=n.store.useStock===!0||n.store.useStock==="true";let H=c&&T?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-500 flex items-center justify-center hover:bg-indigo-500 hover:text-white dark:bg-indigo-900/30 dark:border-indigo-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openRestockModal('${l.id}')" title="Restock Produk"><i class="fa-solid fa-boxes-stacked text-xs sm:text-sm"></i></button>`:"",E=c?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl primary-icon-btn border flex items-center justify-center transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openQuickPriceModal('${l.id}')" title="Edit Cepat Harga"><i class="fa-solid fa-tags text-xs sm:text-sm"></i></button>`:"",Y=t==="customers"?`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-300 text-amber-600 flex items-center justify-center hover:bg-amber-500 hover:text-white dark:bg-amber-900/30 dark:border-amber-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); if(typeof window.setCurrentMember==='function') window.setCurrentMember(appData.customers ? appData.customers.find(c=>String(c.id||c.phone)===String('${l.id||l.phone}'))||{name:'${u(l.name)}',phone:'${u(l.phone)}',points:${parseFloat(l.points)||0}} : {name:'${u(l.name)}',phone:'${u(l.phone)}',points:${parseFloat(l.points)||0}}); if(typeof window.openMemberModal==='function') window.openMemberModal();" title="Buka Kartu Member VIP"><i class="fa-solid fa-id-card text-xs sm:text-sm"></i></button>`:"",U=`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-500 hover:text-white dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oAEd('${t}','${l.id}')" title="Edit Data"><i class="fa-solid fa-pen text-xs sm:text-sm"></i></button>`,G=`<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oADel('${t}','${l.id}')" title="Hapus Permanen"><i class="fa-solid fa-trash text-xs sm:text-sm"></i></button>`;return`
        <div data-id="${l.id}" class="product-admin-card p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[1.5rem] border shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-0.5 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all duration-200 ${m}" onclick="oAEd('${t}','${l.id}')">
            <div class="flex items-start sm:items-center gap-2 sm:gap-4 min-w-0 w-full">
                ${f}
                ${g}
                <div class="min-w-0 flex flex-col justify-center py-1">
                    <p class="text-xs sm:text-sm font-bold ${b} line-clamp-2 uppercase tracking-wide leading-snug mb-1.5">${u(l.name||l.title||l.bankName||l.code||"Item")}</p>
                    ${c?`<p class="text-sm sm:text-base font-bold text-[var(--color-primary)] tracking-tight">${w(l.price)}</p>`:""}
                    ${c&&k&&T?`<p class="text-[10px] font-bold mt-1 ${(l.variants&&l.variants.length?l.variants.reduce((F,q)=>F+(parseFloat(q.stock)||0),0):parseFloat(l.stock)||0)===0?"text-rose-500 animate-pulse":"text-blue-500"}"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${l.variants&&l.variants.length?l.variants.reduce((F,q)=>F+(parseFloat(q.stock)||0),0).toFixed(2).replace(/\.?0+$/,""):parseFloat(l.stock)||0}</p>`:""}
                    ${c&&k&&l.hpp?`<p class="text-[10px] font-bold text-amber-500 mt-0.5"><i class="fa-solid fa-coins mr-1"></i>HPP: ${w(l.hpp)}</p>`:""}
                    ${c?(()=>{const F=l.variants&&l.variants.length?l.variants.reduce((q,I)=>q+(parseFloat(I.totalSold)||0),0):parseFloat(l.totalSold)||0;return F>0?`<p class="text-[10px] font-bold text-orange-400 mt-0.5"><i class="fa-solid fa-fire-flame-curved mr-1"></i>Terjual: ${F}</p>`:""})():""}
                    ${t==="colors"?`<div class="flex items-center gap-2 mt-1"><div class="w-4 h-4 rounded-full border border-slate-200 dark:border-slate-600 shadow-sm" style="background-color: ${u(l.hex||"transparent")}"></div><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-swatchbook mr-1"></i>${u(l.catalog||"Tanpa Katalog")}</p></div>`:""}
                    ${t==="customers"?`<p class="text-xs font-bold text-slate-500 dark:text-slate-400"><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i>+${u(l.phone)}</p><p class="text-[11px] font-bold text-[var(--color-primary)] mt-0.5"><i class="fa-solid fa-star mr-1"></i>${parseFloat(l.points)||0} Poin</p>`:""}
                    ${t==="rewards"?`<p class="text-sm font-bold text-violet-500"><i class="fa-solid fa-star mr-1"></i>${parseFloat(l.pointsCost)||0} Poin</p><p class="text-[10px] font-bold text-slate-500 mt-0.5"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${parseFloat(l.stock)||0}</p>`:""}
                </div>
            </div>
            <div class="flex gap-2.5 shrink-0 self-end sm:self-center pt-3 sm:pt-0 border-t border-slate-100 sm:border-0 dark:border-slate-700/50 w-full sm:w-auto justify-end">
                ${S}
                ${H}
                ${E}
                ${A}
                ${Y}
                ${U}
                ${G}
            </div>
        </div>`}).join("")),t==="products"&&Gn(),a&&requestAnimationFrame(()=>{a.scrollTop=r})};function qn(t){if(!t)return"";const e=t.match(/\/d\/([a-zA-Z0-9_-]+)/);return e?`https://drive.google.com/file/d/${e[1]}/preview`:t}const Wn=t=>window.pushModalHistory?.(t);window.oAAdd=()=>{window.oAEd(Ha||window.cTab||"products",null)};window.oAEd=(t,e)=>{Ka(t),typeof window.setCTab=="function"&&window.setCTab(t),window.cTab=t,si(e),typeof window.setEId=="function"&&window.setEId(e),window.eId=e;let a=e!=null&&e!==""?(n[t]||[]).find(c=>c&&c.id!=null&&String(c.id)===String(e)):null;Q("admin-modal-title",e?"Edit Data":"Tambah Data");let r=Tr[t]||[],s="";t==="products"&&(Ua(a&&a.variants?JSON.parse(JSON.stringify(a.variants)):[]),Hr(a&&a.wholesale?JSON.parse(JSON.stringify(a.wholesale)):[]),Kr(a&&a.specTable?JSON.parse(JSON.stringify(a.specTable)):[]));const i=["textarea","richtext","variants_builder","wholesale_builder","spec_table_builder"],o=["img","desc","name","isActive","tag","poTime","video"],l=c=>i.includes(c.type)||o.includes(c.key);r.forEach(c=>{let p=a?c.type==="number"&&a[c.key]!==void 0?a[c.key]:a[c.key]||"":"";const m=l(c)?"lg:col-span-2":"";if(s+=`<div class="flex flex-col gap-1.5 ${m}"><label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">${c.label}</label>`,c.type==="textarea")s+=`<textarea autocomplete='off' id="af-${c.key}" class="admin-input resize-none shadow-sm bg-slate-50 dark:bg-slate-900" rows="3">${u(p)}</textarea>`;else if(c.type==="select")s+=`<div class="relative"><select id="af-${c.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();">`,c.options.forEach(b=>{const f=String(p)===String(b.val);s+=`<option value="${b.val}" ${f?"selected":""} class="font-bold">${b.text}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(c.type==="dynamic_select_category")s+=`<div class="relative"><select id="af-${c.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Pilih Kategori</option>`,n.categories.forEach(b=>{s+=`<option value="${u(b.name)}" ${p===b.name?"selected":""} class="font-bold">${u(b.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(c.type==="dynamic_select_brand")s+=`<div class="relative"><select id="af-${c.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Tanpa Merek</option>`,(n.brands||[]).forEach(b=>{s+=`<option value="${u(b.name)}" ${p===b.name?"selected":""} class="font-bold">${u(b.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(c.type==="dynamic_select_products")s+=`<div class="relative"><select id="af-${c.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold primary-text">-- Semua Produk (Tanpa Batasan) --</option>`,(n.products||[]).forEach(b=>{s+=`<option value="${b.id}" ${p==b.id?"selected":""} class="font-bold">${u(b.name)}</option>`}),s+='</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>';else if(c.type==="variants_builder")s+='<div id="variants-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(c.type==="wholesale_builder")s+='<div id="wholesale-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(c.type==="spec_table_builder")s+='<div id="spec-table-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>';else if(c.key==="subCategory"){const b=[...new Set((n.products||[]).map(f=>(f.subCategory||"").trim()).filter(Boolean))].sort();s+=`<div class="relative flex items-center">
                <input autocomplete='off' type="text" id="af-${c.key}" list="subcategories-datalist" value="${u(p)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 !pr-10" placeholder="Ketik atau pilih jenis produk..." >
                <datalist id="subcategories-datalist">
                    ${b.map(f=>`<option value="${u(f)}"></option>`).join("")}
                </datalist>
                <i class="fa-solid fa-list-check absolute right-3 text-slate-400 pointer-events-none text-xs"></i>
            </div>`}else c.key==="sku"?s+=`<div class="relative flex items-center"><input autocomplete='off' type="${c.type}" id="af-${c.key}" value="${u(p)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 !pr-12" placeholder="Scan atau ketik..." ><button type="button" onclick="openCameraScanner('af-${c.key}')" class="absolute right-2 w-9 h-9 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-[var(--color-primary)] rounded-xl transition-all" title="Scan Barcode via HP"><i class="fa-solid fa-qrcode text-lg"></i></button></div>`:c.key==="img"?s+=`<div class="flex gap-3"><input autocomplete='off' type="text" id="af-${c.key}" value="${u(p)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="URL Gambar" ><label class="primary-bg-soft border primary-border text-[var(--color-primary)] font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-cloud-arrow-up sm:mr-2"></i><span class="hidden sm:inline">Upload</span><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'af-${c.key}')" ></label><label class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'af-${c.key}')" ></label></div>`:c.key==="videoUrl"?s+=`<div class="flex flex-col gap-2">
                <div class="flex gap-3">
                    <input autocomplete='off' type="text" id="af-${c.key}" value="${u(p)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="Paste URL Drive atau upload video di bawah">
                    <label class="primary-bg-soft border primary-border text-[var(--color-primary)] font-bold rounded-xl px-4 flex items-center justify-center cursor-pointer hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all shrink-0 active:scale-95 shadow-sm gap-2" title="Upload Video ke Google Drive">
                        <i class="fa-solid fa-film"></i><span class="hidden sm:inline text-[11px]">Upload Video</span>
                        <input type="file" accept="video/mp4,video/webm,video/quicktime,video/x-msvideo,video/3gpp" class="hidden" onchange="handleVideoUpload(this, 'af-${c.key}')">
                    </label>
                </div>
                <p class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-info text-[var(--color-primary)]"></i><b>Tips Autoplay:</b> Untuk video 100% otomatis play &amp; loop tanpa klik, gunakan link <b>YouTube / Shorts</b> atau <b>Direct MP4</b>. Upload Drive/HP juga didukung.</p>
                ${p?`<div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-black aspect-video w-full max-w-xs"><iframe src="${u(qn(p))}" class="w-full h-full" frameborder="0" allow="autoplay; fullscreen" loading="lazy"></iframe></div>`:""}
            </div>`:c.type==="richtext"?s+=`
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
                        <input type="file" accept="image/*" class="hidden" onchange="handleRTEditorImage(this, 'af-${c.key}-editor')" >
                    </label>
                </div>
                <div id="af-${c.key}-editor" contenteditable="true" class="p-4 min-h-[150px] max-h-[350px] overflow-y-auto outline-none text-sm text-slate-800 dark:text-slate-200 leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_b]:font-bold [&_strong]:font-bold [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-2">
                    ${p}
                </div>
            </div>`:s+=`<input autocomplete='off' type="${c.type}" id="af-${c.key}" value="${u(p)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 transition-all"
    ${c.key==="price"?'min="0" step="1" placeholder="0"':""}
    ${c.key==="priceNormal"?'min="0" step="1" placeholder="0 (kosong = tidak ada coretan)"':""}
    ${c.key==="hpp"?'min="0" step="1" placeholder="0"':""}
    ${c.key==="stock"?'min="0" step="0.01" placeholder="0"':""}
>`;s+="</div>"}),s=`<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 items-start">${s}</div>`,j("admin-modal-form",s),t==="products"&&(window.rVarsB?.(),window.rWholB?.(),window.rSpecB?.());const d=x("admin-modal");d&&d.classList.contains("hidden")&&Wn("admin"),V("admin-modal"),setTimeout(()=>{x("admin-modal").classList.remove("opacity-0"),x("admin-modal-box").classList.remove("scale-95")},10)};window.submitAdminForm=async()=>{if(St)return;oe(!0);const t=Ha||window.cTab||"products";let e={},a=Tr[t]||[];for(let s of a)if(s.type==="variants_builder")e.variants=Ie.filter(i=>i.name.trim()!=="");else if(s.type==="wholesale_builder")e.wholesale=bt.filter(i=>parseFloat(i.minQty)>.01&&i.price>0);else if(s.type==="spec_table_builder")e.specTable=Ge.filter(i=>i.key.trim()!=="");else{let i="";if(s.type==="richtext"){const o=x(`af-${s.key}-editor`);i=o?o.innerHTML:""}else i=M(`af-${s.key}`);if(typeof i=="string"){if(i.startsWith("data:image/")&&i.length>3e5)return oe(!1),h("Gambar Base64 terlalu besar! Upload file.");s.key==="img"&&(i=z(i))}e[s.key]=s.type==="number"?parseFloat(i)||0:i}if(!e.name&&!e.title&&!e.bankName&&!e.code)return oe(!1),h("Judul/Nama/Kode wajib diisi!");if(t==="products"&&!e.sku&&(e.sku="SKU"+Date.now().toString().slice(-6)),t==="customers"){const s=window.normalizeWA?window.normalizeWA(e.phone):(e.phone||"").replace(/\D/g,"").replace(/^0/,"62");if(!s||s.length<10)return oe(!1),h("Nomor WhatsApp tidak valid!");e.phone=s,e.points=parseFloat(e.points)||0,e.id=parseInt(s,10)}let r=null;if(t==="customers")if(n.customers||(n.customers=[]),Fe){r=Fe;let s=n.customers.findIndex(i=>i&&i.id!=null&&String(i.id)===String(Fe));s>-1?n.customers[s]=e:n.customers.unshift(e)}else n.customers.unshift(e);else if(t==="rewards")if(n.rewards||(n.rewards=[]),Fe){let s=n.rewards.findIndex(i=>i&&i.id!=null&&String(i.id)===String(Fe));s>-1?(e.id=n.rewards[s].id,n.rewards[s]=e):e.id=Fe}else e.id=Date.now(),n.rewards.unshift(e);else if(Fe){n[t]||(n[t]=[]);let s=n[t].findIndex(i=>i&&i.id!=null&&String(i.id)===String(Fe));if(s>-1){if(e.id=n[t][s].id,t==="products"){const i=n[t][s];e.totalSold=i.totalSold||0,e.variants&&e.variants.length&&i.variants&&e.variants.forEach(o=>{const l=i.variants.find(d=>d.name===o.name);l&&l.totalSold&&(o.totalSold=l.totalSold)})}n[t][s]=e}else e.id=Fe,n[t].push(e)}else e.id=Date.now(),n[t]||(n[t]=[]),n[t].unshift(e),t==="products"&&(n.productOrder=[e.id.toString(),...(n.productOrder||[]).filter(s=>String(s)!==e.id.toString())]);R("Menyimpan...");try{const s=typeof P<"u"&&P?P:window.db,i=typeof ee=="function"?ee:window.saveApp||(async()=>{});if(!s)throw new Error("Database Firebase belum terhubung");if(t==="products")await s.collection("freshmart").doc("cms_data").collection("products").doc(e.id.toString()).set(e),await i(["productOrder"],{updateType:"product_single",updatedProductIds:[e.id.toString()]});else if(t==="customers"){const o=s.collection("freshmart").doc("cms_data").collection("customers");r!==null&&r!==e.id&&await o.doc(r.toString()).delete().catch(()=>{}),await o.doc(e.phone).set(e,{merge:!0})}else if(t==="rewards"){await s.collection("freshmart").doc("cms_data").collection("rewards").doc(e.id.toString()).set(e);try{localStorage.setItem("freshmart_rewards",JSON.stringify(n.rewards))}catch{}typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog()}else await i([t]);window.closeAdminModal?.(),window.rAdmItms?.(t),h("Tersimpan!")}catch(s){console.error("Gagal simpan admin data:",s),h("Gagal menyimpan: "+(s.message||""))}finally{oe(!1),L()}};window.oADel=async(t,e)=>{window.showConfirm?.("Hapus Data","Data yang dihapus tidak bisa dikembalikan lagi.",async()=>{if(St)return;oe(!0);const a=typeof P<"u"&&P?P:window.db,r=typeof ee=="function"?ee:window.saveApp||(async()=>{}),s=n[t]&&n[t].find(i=>i&&i.id!=null&&String(i.id)===String(e));n[t]=(n[t]||[]).filter(i=>!i||i.id==null||String(i.id)!==String(e)),R("Menghapus...");try{if(!a)throw new Error("Database Firebase belum terhubung");if(t==="products")n.productOrder&&(n.productOrder=n.productOrder.filter(i=>String(i)!==String(e))),await a.collection("freshmart").doc("cms_data").collection("products").doc(e.toString()).delete(),await r(["productOrder"],{updateType:"product_delete",updatedProductIds:[e.toString()]});else if(t==="customers"){const i=s?s.phone:e.toString();await a.collection("freshmart").doc("cms_data").collection("customers").doc(i).delete()}else if(t==="rewards"){await a.collection("freshmart").doc("cms_data").collection("rewards").doc(e.toString()).delete();try{localStorage.setItem("freshmart_rewards",JSON.stringify(n.rewards))}catch{}typeof window.renderRewardCatalog=="function"&&window.renderRewardCatalog()}else await r([t]);window.rAdmItms?.(t),h("Berhasil Dihapus!")}catch(i){h("Gagal menghapus: "+(i.message||""))}finally{oe(!1),L()}})};window.duplicateProduct=async t=>{window.showConfirm?.("Duplikat Produk","Menyalin data produk ini ke item baru?",async()=>{if(St)return;oe(!0);const e=typeof P<"u"&&P?P:window.db,a=typeof ee=="function"?ee:window.saveApp||(async()=>{}),r=n.products.find(o=>o&&o.id!=null&&String(o.id)===String(t));if(!r){oe(!1);return}let s=JSON.parse(JSON.stringify(r));s.id=Date.now()+Math.floor(Math.random()*1e3),s.name=s.name+" COPY",s.sku="",s.totalSold=0,s.variants&&s.variants.length>0&&(s.variants=s.variants.map(o=>(o.sku="",o.totalSold=0,o))),n.products.unshift(s),n.productOrder||(n.productOrder=[]);const i=n.productOrder.findIndex(o=>String(o)===String(t));i>-1?n.productOrder.splice(i+1,0,s.id.toString()):n.productOrder.unshift(s.id.toString()),R("Menyalin...");try{if(!e)throw new Error("Database Firebase belum terhubung");await e.collection("freshmart").doc("cms_data").collection("products").doc(s.id.toString()).set(s),await a(["productOrder"],{updateType:"product_single",updatedProductIds:[s.id.toString()]}),window.rAdmItms?.("products"),h("Produk berhasil disalin!")}catch(o){h("Gagal menyalin: "+(o.message||""))}finally{oe(!1),L()}},"Ya, Salin",!1)};window.rSpecB=()=>{const t=document.getElementById("spec-table-builder-container");if(!t)return;let e="";Ge.length>0?e+=`<div class="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm mb-3">
            <table class="w-full text-sm">
                <thead>
                    <tr class="bg-slate-100 dark:bg-slate-800">
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest w-5/12">Nama Spesifikasi</th>
                        <th class="py-2.5 px-4 text-left text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Nilai / Keterangan</th>
                        <th class="py-2.5 px-2 w-10"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                    ${Ge.map((a,r)=>`
                    <tr class="bg-white dark:bg-slate-900 group">
                        <td class="py-2 px-3"><input autocomplete='off' placeholder="Cth: Berat" class="w-full bg-transparent text-[13px] font-semibold text-slate-700 dark:text-slate-200 focus:outline-none placeholder:text-slate-300" value="${u(a.key)}" oninput="uSpec(${r},'key',this.value)"></td>
                        <td class="py-2 px-3"><input autocomplete='off' placeholder="Cth: 2.5 kg" class="w-full bg-transparent text-[13px] text-slate-600 dark:text-slate-300 focus:outline-none placeholder:text-slate-300" value="${u(a.val)}" oninput="uSpec(${r},'val',this.value)"></td>
                        <td class="py-2 px-2 text-center"><button type="button" onclick="rmSpec(${r})" class="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 text-rose-400 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-60 group-hover:opacity-100 active:scale-95 cursor-pointer" title="Hapus Baris"><i class="fa-solid fa-trash text-[10px]"></i></button></td>
                    </tr>`).join("")}
                </tbody>
            </table>
        </div>`:e+='<div class="text-center py-5 text-slate-400 dark:text-slate-500 text-[12px] font-medium"><i class="fa-solid fa-table-cells-large text-2xl mb-2 block opacity-30 text-[var(--color-primary)]"></i>Belum ada spesifikasi. Klik tombol di bawah untuk menambahkan.</div>',e+='<button type="button" onclick="addSpec()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-plus-circle text-base"></i> Tambah Baris Spesifikasi</button>',t.innerHTML=e};window.addSpec=()=>{Ge.push({key:"",val:""}),Kr(Ge),window.rSpecB()};window.rmSpec=t=>{Ge.splice(t,1),Kr(Ge),window.rSpecB()};window.uSpec=(t,e,a)=>{Ge[t]&&(Ge[t][e]=a)};window.rVarsB=()=>{const t=document.getElementById("af-category"),e=t?/\bcat\b/i.test(t.value):!1;let a=`<div class="space-y-5 mb-5">${Ie.map((r,s)=>{let i=r.isActive!==!1&&r.isActive!=="false";return`
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
                    <input autocomplete='off' placeholder="Cth: Hijau Tosca" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${u(r.name)}" onchange="uVar(${s},'name',this.value)">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Satuan / Unit</label>
                    <input autocomplete='off' placeholder="Cth: Pcs / Liter" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${u(r.unit||"")}" onchange="uVar(${s},'unit',this.value)">
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
                            <input autocomplete='off' id="var-hex-${s}" placeholder="#RRGGBB (opsional)" class="w-full bg-transparent text-sm font-mono font-bold focus:outline-none dark:text-white uppercase" value="${u(r.colorCode||"")}" onchange="uVar(${s},'colorCode',this.value)">
                        </div>
                        ${r.colorCode?`<div class="w-6 h-6 rounded-full border-2 border-white shadow-md shrink-0" style="background:${u(r.colorCode)}"></div>`:""}
                    </div>
                </div>
                ${e?"":`
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gambar Khusus Varian</label>
                    <div class="flex gap-2.5 items-center">
                        ${r.img?`<img src="${u(r.img)}" class="w-11 h-11 rounded-xl object-cover border-2 border-slate-200 dark:border-slate-600 shrink-0 shadow-sm" onerror="this.style.display='none'" loading="lazy">`:""}
                        <input autocomplete='off' id="var-img-${s}" placeholder="URL Gambar Varian" class="admin-input !text-sm flex-1 bg-white dark:bg-slate-800 shadow-sm" value="${u(r.img||"")}" onchange="uVar(${s},'img',fixD(this.value))">
                        <label class="primary-icon-btn border rounded-xl w-11 h-11 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-upload text-sm"></i><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'var-img-${s}')"></label>
                        <label class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rounded-xl w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera text-sm"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'var-img-${s}')"></label>
                    </div>
                </div>
                `}
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">SKU / Barcode</label>
                    <div class="relative h-[48px]">
                        <input autocomplete='off' id="var-sku-${s}" placeholder="Auto (Bisa Kosong)" class="admin-input !text-sm h-full bg-white dark:bg-slate-800 shadow-sm !pr-12" value="${u(r.sku||"")}" onchange="uVar(${s},'sku',this.value)">
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
                    <label class="block text-[11px] font-bold text-[var(--color-primary)] mb-2 uppercase tracking-widest flex items-center gap-1"><i class="fa-solid fa-star"></i> Poin Member (per unit terjual)</label>
                    <input autocomplete='off' placeholder="0" type="number" min="0" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${r.poin||0}" onchange="uVar(${s},'poin',this.value)">
                </div>
            </div>
        </div>`}).join("")}</div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <button type="button" onclick="openColorImportModal()" class="py-3 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm cursor-pointer"><i class="fa-solid fa-swatchbook text-[var(--color-primary)]"></i> Impor dari DB Warna</button>
        <button type="button" onclick="exportAllVariantsToColorDB()" class="py-3 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm cursor-pointer"><i class="fa-solid fa-upload text-[var(--color-primary)]"></i> Ekspor Semua ke DB</button>
        <button type="button" onclick="addVar()" class="py-3 primary-bg font-bold rounded-xl text-xs sm:text-sm border border-[rgba(var(--color-primary-rgb),0.3)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-glow cursor-pointer"><i class="fa-solid fa-plus-circle text-base"></i> Tambah Varian Baru</button>
    </div>`;j("variants-builder-container",a)};window.addVar=()=>{Ie.push({name:"",price:0,priceNormal:0,hpp:0,stock:0,sku:"",img:"",unit:"",colorCode:"",poin:0,isActive:!0}),Ua(Ie),window.rVarsB()};window.rmVar=t=>{Ie.splice(t,1),Ua(Ie),window.rVarsB()};window.uVar=(t,e,a)=>{Ie[t][e]=e==="price"||e==="priceNormal"||e==="hpp"||e==="stock"||e==="poin"?parseFloat(a)||0:e==="img"?z(a):a};window._openColorFloatModal=t=>{_closeColorFloatModal();const e=document.createElement("div");e.id="color-float-modal",e.className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/80 p-4 opacity-0 transition-opacity duration-300",e.onclick=r=>{r.target===e&&_closeColorFloatModal()};const a=document.createElement("div");a.id="color-float-box",a.className="relative w-full max-w-sm scale-95 transform rounded-3xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-800 overflow-y-auto max-h-[90vh]",a.innerHTML=t,e.appendChild(a),document.body.appendChild(e),requestAnimationFrame(()=>{e.classList.remove("opacity-0"),a.classList.remove("scale-95")})};window._closeColorFloatModal=()=>{const t=document.getElementById("color-float-modal");if(!t)return;const e=document.getElementById("color-float-box");t.classList.add("opacity-0"),e&&e.classList.add("scale-95"),setTimeout(()=>{t.parentNode&&t.remove()},300)};window.openColorImportModal=()=>{let t=n.colors||[];if(!t.length){h("Database Warna masih kosong!");return}let e={};t.forEach(r=>{let s=r.catalog||"Tanpa Katalog";e[s]||(e[s]=[]),e[s].push(r)});let a=`<div class="p-6">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2"><i class="fa-solid fa-swatchbook text-[var(--color-primary)]"></i> Pilih Warna</h3>
            <button type="button" onclick="_closeColorFloatModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="space-y-6 max-h-[60vh] overflow-y-auto pr-2">`;for(let r in e)a+=`<div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">${u(r)}</h4>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                ${e[r].map(s=>`
                    <button type="button" onclick="importColorToVariant('${u(s.name)}', '${u(s.hex||"")}')" class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50 hover:-translate-y-0.5 hover:shadow-md transition-all text-left bg-white dark:bg-slate-800 cursor-pointer">
                        <div class="w-8 h-8 rounded-full border-2 border-slate-100 dark:border-slate-600 shadow-sm shrink-0" style="background-color: ${u(s.hex||"transparent")}"></div>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2">${u(s.name)}</span>
                    </button>`).join("")}
            </div>
        </div>`;a+="</div></div>",_openColorFloatModal(a)};window.importColorToVariant=(t,e)=>{Ie.push({name:t,price:0,priceNormal:0,hpp:0,stock:0,sku:"",img:"",unit:"",colorCode:e||"",poin:0,isActive:!0}),Ua(Ie),window.rVarsB(),_closeColorFloatModal(),h("Warna ditambahkan!")};window.exportVariantToColorDB=async t=>{const e=Ie[t];if(!e||!e.name.trim()){h("Nama varian kosong!");return}if((n.colors||[]).find(i=>i.name.toLowerCase()===e.name.trim().toLowerCase())){h(`"${e.name}" sudah ada di Database Warna.`);return}let s=[...new Set((n.colors||[]).map(i=>i.catalog).filter(Boolean))].map(i=>`<option value="${u(i)}">${u(i)}</option>`).join("");_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"><i class="fa-solid fa-database text-[var(--color-primary)]"></i> Simpan ke Database Warna</h3>
            <div class="space-y-4">
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nama Warna</label><input id="exp-name" class="admin-input" value="${u(e.name)}"></div>
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Kode Warna (Hex)</label>
                    <div class="flex gap-3 items-center">
                        <input type="color" id="exp-hex-picker" value="${u(e.colorCode||"#ffffff")}" class="w-10 h-10 rounded-xl cursor-pointer" onchange="document.getElementById('exp-hex').value=this.value">
                        <input id="exp-hex" class="admin-input flex-1" placeholder="#FFFFFF (opsional)" value="${u(e.colorCode||"")}">
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
        </div>`)};window.confirmExportVariantToColorDB=async()=>{const t=(document.getElementById("exp-name")?.value||"").trim(),e=(document.getElementById("exp-hex")?.value||"").trim(),a=(document.getElementById("exp-catalog")?.value||"").trim();if(!t){h("Nama warna wajib diisi!");return}const r={id:Date.now(),name:t,hex:e,catalog:a};n.colors||(n.colors=[]),n.colors.push(r),_closeColorFloatModal(),R("Menyimpan ke Database Warna...");try{await ee(["colors"]),h(`"${t}" berhasil disimpan ke Database Warna! 🎨`)}catch{h("Gagal menyimpan!")}finally{L()}};window.exportAllVariantsToColorDB=async()=>{const t=Ie.filter(r=>r.name.trim());if(!t.length){h("Tidak ada varian untuk diekspor!");return}n.colors||(n.colors=[]);let a=[...new Set(n.colors.map(r=>r.catalog).filter(Boolean))].map(r=>`<option value="${u(r)}">${u(r)}</option>`).join("");_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-upload text-[var(--color-primary)]"></i> Ekspor Semua Varian</h3>
            <p class="text-xs text-slate-500 mb-5">${t.length} varian akan diekspor ke Database Warna. Nama yang sudah ada di database akan dilewati.</p>
            <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek (berlaku untuk semua)</label>
                <input id="expall-catalog" list="expall-catalog-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll">
                <datalist id="expall-catalog-list">${a}</datalist>
            </div>
            <div class="flex gap-3 mt-6">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 text-sm hover:bg-slate-50 transition-all cursor-pointer">Batal</button>
                <button onclick="confirmExportAllVariants()" class="flex-1 py-3 rounded-xl primary-bg text-white font-bold text-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer"><i class="fa-solid fa-upload mr-2"></i>Ekspor</button>
            </div>
        </div>`)};window.confirmExportAllVariants=async()=>{const t=(document.getElementById("expall-catalog")?.value||"").trim(),e=Ie.filter(s=>s.name.trim());n.colors||(n.colors=[]);const a=new Set(n.colors.map(s=>s.name.toLowerCase()));let r=0;if(e.forEach(s=>{a.has(s.name.trim().toLowerCase())||(n.colors.push({id:Date.now()+r,name:s.name.trim(),hex:s.colorCode||"",catalog:t}),a.add(s.name.trim().toLowerCase()),r++)}),_closeColorFloatModal(),!r){h("Semua varian sudah ada di Database Warna!");return}R("Menyimpan...");try{await ee(["colors"]),h(`${r} warna berhasil diekspor ke Database Warna! 🎨`)}catch{h("Gagal menyimpan!")}finally{L()}};window.openImportFromProductsModal=async()=>{const t=[];if((n.products||[]).forEach(i=>{(i.variants||[]).forEach(o=>{o.name&&o.name.trim()&&t.push({varName:o.name.trim(),hex:o.colorCode||"",prodName:i.name||""})})}),!t.length){h("Tidak ada varian produk yang ditemukan!");return}const e=new Set((n.colors||[]).map(i=>i.name.toLowerCase())),a=t.filter(i=>!e.has(i.varName.toLowerCase()));if(!a.length){h("Semua varian produk sudah ada di Database Warna!");return}let s=[...new Set((n.colors||[]).map(i=>i.catalog).filter(Boolean))].map(i=>`<option value="${u(i)}">${u(i)}</option>`).join("");window._pendingImportVariants=a,_openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-box-archive text-[var(--color-primary)]"></i> Impor dari Semua Produk</h3>
            <p class="text-xs text-slate-500 mb-4">${a.length} nama varian baru ditemukan (yang sudah ada di database dilewati).</p>
            <div class="hide-scrollbar max-h-48 overflow-y-auto mb-4 space-y-2">
                ${a.map((i,o)=>`
                    <label class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-[var(--color-primary)] transition-all">
                        <input type="checkbox" id="imp-chk-${o}" checked class="w-4 h-4 rounded accent-[var(--color-primary)]">
                        <div class="w-5 h-5 rounded-full border border-slate-200 dark:border-slate-600 shrink-0" style="background-color:${u(i.hex||"transparent")}"></div>
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">${u(i.varName)}</p>
                            <p class="text-[10px] text-slate-400 truncate">dari: ${u(i.prodName)}</p>
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
        </div>`)};window.confirmImportFromProducts=async()=>{const t=window._pendingImportVariants||[];window._pendingImportVariants=null;const e=(document.getElementById("impprod-catalog")?.value||"").trim();n.colors||(n.colors=[]);const a=new Set(n.colors.map(s=>s.name.toLowerCase()));let r=0;if(t.forEach((s,i)=>{const o=document.getElementById(`imp-chk-${i}`);o&&o.checked&&!a.has(s.varName.toLowerCase())&&(n.colors.push({id:Date.now()+r,name:s.varName,hex:s.hex||"",catalog:e}),a.add(s.varName.toLowerCase()),r++)}),_closeColorFloatModal(),!r){h("Tidak ada warna baru yang ditambahkan!");return}R("Menyimpan...");try{await ee(["colors"]),h(`${r} warna berhasil diimpor ke Database Warna! 🎨`),window.cTab==="colors"&&window.rAdmItms?.("colors")}catch{h("Gagal menyimpan!")}finally{L()}};const zn=t=>window.pushModalHistory?.(t),ri=(t,e,a)=>window.requestCloseModal?.(t,e,a);window.openRestockModal=t=>{const e=n.products.find(i=>i&&i.id!=null&&String(i.id)===String(t));if(!e)return;const a=e.variants&&e.variants.length>0;let r="";a?r=e.variants.map((i,o)=>`
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-3 min-w-0 flex-1">
                    ${i.colorCode?`<span class="w-5 h-5 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${u(i.colorCode)}"></span>`:""}
                    <div class="min-w-0 flex-1">
                        <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${u(i.name)}</p>
                        <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(i.stock)||0}</span></p>
                    </div>
                </div>
                <input type="number" id="restock-var-${o}" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`).join(""):r=`
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div class="min-w-0 flex-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${u(e.name)}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(e.stock)||0}</span></p>
                </div>
                <input type="number" id="restock-main" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`;let s=document.getElementById("restock-modal");s||(s=document.createElement("div"),s.id="restock-modal",s.className="fixed inset-0 z-[110] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=i=>{i.target===s&&closeRestockModal()},document.body.appendChild(s)),s.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-boxes-stacked text-[var(--color-primary)]"></i> Restock Produk</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${u(e.name)}</p>
                </div>
                <button onclick="closeRestockModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="hide-scrollbar p-5 sm:p-6 overflow-y-auto flex-1 space-y-3">
                <p class="text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.3)] p-3 rounded-xl"><i class="fa-solid fa-circle-info text-[var(--color-primary)] mr-1.5"></i> Masukkan jumlah <b>penambahan</b> stok. Stok lama + nilai ini = stok baru.</p>
                ${r}
            </div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processRestock(${t})" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"><i class="fa-solid fa-save"></i> Simpan Restock</button>
            </div>
        </div>`,s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),zn("restock")};window.closeRestockModal=(t=!1)=>{ri("restock",t,()=>{const e=document.getElementById("restock-modal");!e||e.style.display==="none"||(e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250))})};window.processRestock=async t=>{if(St)return;oe(!0);const e=n.products.findIndex(o=>o&&o.id!=null&&String(o.id)===String(t));if(e<0){oe(!1);return}const a=n.products[e],r=a.variants&&a.variants.length>0;let s=JSON.parse(JSON.stringify(a)),i=0;if(r)s.variants=s.variants.map((l,d)=>{const c=parseFloat(document.getElementById("restock-var-"+d)?.value)||0;return c>0&&(l.stock=(parseFloat(l.stock)||0)+c,i+=c,l.stock>0&&(l.isActive===!1||l.isActive==="false")&&(l.isActive=!0)),l}),s.variants.some(l=>(parseFloat(l.stock)||0)>0&&l.isActive!==!1&&l.isActive!=="false")&&(s.isActive===!1||s.isActive==="false")&&(s.isActive="true");else{const o=parseFloat(document.getElementById("restock-main")?.value)||0;o>0&&(s.stock=(parseFloat(s.stock)||0)+o,i+=o,s.stock>0&&(s.isActive===!1||s.isActive==="false")&&(s.isActive="true"))}if(i<=0)return oe(!1),h("Masukkan jumlah restock terlebih dahulu!");R("Menyimpan Restock...");try{const o=typeof P<"u"&&P?P:window.db,l=typeof ee=="function"?ee:window.saveApp||(async()=>{});if(!o)throw new Error("Database Firebase belum terhubung");const d=o.collection("freshmart").doc("cms_data").collection("products").doc(t.toString());let c=0;await o.runTransaction(async p=>{const m=await p.get(d);if(!m.exists)throw new Error("Produk tidak ditemukan di server");const b=JSON.parse(JSON.stringify(m.data()));if(r)a.variants.forEach((g,k)=>{const S=parseFloat(document.getElementById("restock-var-"+k)?.value)||0;if(S<=0)return;const A=(b.variants||[]).findIndex(T=>T.name===g.name);A>-1&&(b.variants[A].stock=(parseFloat(b.variants[A].stock)||0)+S,b.variants[A].stock>0&&(b.variants[A].isActive===!1||b.variants[A].isActive==="false")&&(b.variants[A].isActive=!0))}),b.variants.some(g=>(parseFloat(g.stock)||0)>0&&g.isActive!==!1&&g.isActive!=="false")&&(b.isActive===!1||b.isActive==="false")&&(b.isActive="true"),c=b.variants.reduce((g,k)=>g+(parseFloat(k.stock)||0),0);else{const f=parseFloat(document.getElementById("restock-main")?.value)||0;b.stock=(parseFloat(b.stock)||0)+f,b.stock>0&&(b.isActive===!1||b.isActive==="false")&&(b.isActive="true"),c=b.stock}p.set(d,b),Object.assign(s,b)}),n.products[e]=s,await l([],{updateType:"stock_change",updatedProductIds:[t.toString()]}),closeRestockModal(),window.rAdmItms?.("products"),Q("stat-products",n.products.filter(p=>p.isActive!=="false"&&p.isActive!==!1).length),h(`✅ Restock +${i} berhasil! Total stok: ${c}`)}catch(o){h("Gagal restock: "+(o.message||""))}finally{oe(!1),L()}};window.toggleProductStatus=async(t,e)=>{if(St)return;oe(!0);const a=n.products.findIndex(r=>r.id!=null&&r.id.toString()===t.toString());if(a>-1){n.products[a].isActive=e?"true":"false",R(e?"Mengaktifkan...":"Menonaktifkan...");try{const r=typeof P<"u"&&P?P:window.db,s=typeof ee=="function"?ee:window.saveApp||(async()=>{});if(!r)throw new Error("Database Firebase belum terhubung");await r.collection("freshmart").doc("cms_data").collection("products").doc(t.toString()).update({isActive:e?"true":"false"}),await s([],{updateType:"stock_change",updatedProductIds:[t.toString()]}),Q("stat-products",n.products.filter(i=>i.isActive!=="false"&&i.isActive!==!1).length),window.rAdmItms?.("products"),h(e?"Produk Aktif!":"Stok Dikosongkan!")}catch(r){h("Gagal update status: "+(r.message||""))}finally{oe(!1),L()}}else oe(!1)};window.closeAdminModal=(t=!1)=>{ri("admin",t,()=>{x("admin-modal").classList.add("opacity-0"),x("admin-modal-box").classList.add("scale-95"),setTimeout(()=>K("admin-modal"),300)})};const Qn=t=>window.pushModalHistory?.(t),Jn=(t,e,a)=>window.requestCloseModal?.(t,e,a);let he;window.openCameraScanner=async(t="search-input")=>{const e=x("scanner-modal");e&&e.classList.contains("hidden")&&Qn("scanner"),V("scanner-modal"),setTimeout(()=>{x("scanner-modal").classList.remove("opacity-0")},10);try{await xs("https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js",()=>typeof Html5Qrcode<"u")}catch{h("Gagal memuat modul kamera. Cek koneksi internet Anda."),closeCameraScanner();return}he||(he=new Html5Qrcode("reader"));const a={fps:10,qrbox:{width:250,height:250}};setTimeout(()=>{he&&he.start({facingMode:"environment"},a,r=>{let s=x(t);s&&(s.value=r,t==="search-input"?window.handleSearch?.(r):(s.dispatchEvent(new Event("input",{bubbles:!0})),s.dispatchEvent(new Event("change",{bubbles:!0})))),h("Barcode discan!"),closeCameraScanner()},r=>{}).catch(r=>{h("Akses kamera ditolak/gagal!"),closeCameraScanner()})},100)};window.closeCameraScanner=(t=!1)=>{Jn("scanner",t,()=>{if(x("scanner-modal").classList.add("opacity-0"),he)try{he.getState()===2||he.getState()===3?he.stop().then(()=>{he.clear(),he=null}).catch(e=>{he.clear(),he=null}):(he.clear(),he=null)}catch{he=null}setTimeout(()=>K("scanner-modal"),300)})};const Yn=t=>window.pushModalHistory?.(t),Xn=(t,e,a)=>window.requestCloseModal?.(t,e,a);let la=[];window.openQuickPriceModal=t=>{const e=n.products.find(i=>i&&i.id!=null&&String(i.id)===String(t));if(!e)return;const a=e.variants&&e.variants.length>0;la=!a&&e.wholesale?JSON.parse(JSON.stringify(e.wholesale)):[];let r="";a?r=e.variants.map((i,o)=>`
            <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
                <div class="flex items-center gap-2.5 min-w-0">
                    ${i.colorCode?`<span class="w-4 h-4 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${u(i.colorCode)}"></span>`:""}
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${u(i.name)}</p>
                </div>
                <div class="grid grid-cols-4 gap-2.5">
                    <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP</label><input type="number" id="qp-var-hpp-${o}" value="${i.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Jual</label><input type="number" id="qp-var-price-${o}" value="${i.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Coret</label><input type="number" id="qp-var-normal-${o}" value="${i.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                    <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-var-poin-${o}" value="${i.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                </div>
            </div>`).join(""):r=`
            <div class="grid grid-cols-4 gap-2.5">
                <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP / Modal</label><input type="number" id="qp-hpp" value="${e.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest">Harga Jual</label><input type="number" id="qp-price" value="${e.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Harga Coret</label><input type="number" id="qp-normal" value="${e.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
                <div><label class="block text-[9px] font-bold text-[var(--color-primary)] mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-poin" value="${e.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></div>
            </div>
            <div class="pt-2">
                <div class="flex justify-between items-center mb-2.5">
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Harga Grosir</label>
                    <button type="button" onclick="qpAddWhol()" class="text-[10px] font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] flex items-center gap-1"><i class="fa-solid fa-plus"></i> Tambah</button>
                </div>
                <div id="qp-whol-container" class="space-y-2"></div>
            </div>`;let s=document.getElementById("quickprice-modal");s||(s=document.createElement("div"),s.id="quickprice-modal",s.className="fixed inset-0 z-[110] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=i=>{i.target===s&&closeQuickPriceModal()},document.body.appendChild(s)),s.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-tags text-[var(--color-primary)]"></i> Edit Cepat Harga</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${u(e.name)}</p>
                </div>
                <button onclick="closeQuickPriceModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="hide-scrollbar p-5 sm:p-6 overflow-y-auto flex-1 space-y-3" id="qp-body">${r}</div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processQuickPrice(${t})" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"><i class="fa-solid fa-save"></i> Simpan Harga</button>
            </div>
        </div>`,a||rQpWhol(),s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),Yn("quickprice")};window.rQpWhol=()=>{j("qp-whol-container",la.length?la.map((t,e)=>`
        <div class="flex items-center gap-2">
            <input type="number" min="1" placeholder="Min. Qty" value="${t.minQty||""}" onchange="qpWhol[${e}].minQty=parseFloat(this.value)||0" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <input type="number" min="0" placeholder="Harga/Unit" value="${t.price||""}" onchange="qpWhol[${e}].price=parseFloat(this.value)||0" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1">
            <button type="button" onclick="qpWhol.splice(${e},1); rQpWhol();" class="w-9 h-9 shrink-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all"><i class="fa-solid fa-trash text-xs"></i></button>
        </div>`).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-2">Belum ada tingkat harga grosir.</p>')};window.qpAddWhol=()=>{la.push({minQty:0,price:0}),rQpWhol()};window.closeQuickPriceModal=(t=!1)=>{Xn("quickprice",t,()=>{const e=document.getElementById("quickprice-modal");!e||e.style.display==="none"||(e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250))})};window.processQuickPrice=async t=>{if(St)return;oe(!0);const e=n.products.findIndex(s=>s&&s.id!=null&&String(s.id)===String(t));if(e<0){oe(!1);return}const a=n.products[e],r=a.variants&&a.variants.length>0;R("Menyimpan Harga...");try{const s=typeof P<"u"&&P?P:window.db,i=typeof ee=="function"?ee:window.saveApp||(async()=>{});if(!s)throw new Error("Database Firebase belum terhubung");const o=s.collection("freshmart").doc("cms_data").collection("products").doc(t.toString());let l=null;await s.runTransaction(async d=>{const c=await d.get(o);if(!c.exists)throw new Error("Produk tidak ditemukan di server");const p=JSON.parse(JSON.stringify(c.data()));r?a.variants.forEach((m,b)=>{const f=(p.variants||[]).findIndex(g=>g.name===m.name);f<0||(p.variants[f].hpp=parseFloat(document.getElementById("qp-var-hpp-"+b)?.value)||0,p.variants[f].price=parseFloat(document.getElementById("qp-var-price-"+b)?.value)||0,p.variants[f].priceNormal=parseFloat(document.getElementById("qp-var-normal-"+b)?.value)||0,p.variants[f].poin=parseFloat(document.getElementById("qp-var-poin-"+b)?.value)||0)}):(p.hpp=parseFloat(document.getElementById("qp-hpp")?.value)||0,p.price=parseFloat(document.getElementById("qp-price")?.value)||0,p.priceNormal=parseFloat(document.getElementById("qp-normal")?.value)||0,p.poin=parseFloat(document.getElementById("qp-poin")?.value)||0,p.wholesale=la.filter(m=>parseFloat(m.minQty)>.01&&m.price>0)),d.set(o,p),l=p}),n.products[e]=l,await i([],{updateType:"stock_change",updatedProductIds:[t.toString()]}),closeQuickPriceModal(),window.rAdmItms?.("products"),h("✅ Harga berhasil diperbarui!")}catch(s){h("Gagal simpan harga: "+(s.message||""))}finally{oe(!1),L()}};window.rWholB=()=>{let t=`<div class="space-y-4 mb-4">${bt.map((a,r)=>`
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative group transition-all duration-300 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40">
            <button onclick="rmWhol(${r})" class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md z-10 cursor-pointer"><i class="fa-solid fa-trash text-xs"></i></button>
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
        <button onclick="addWhol()" class="w-full py-3.5 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold rounded-xl text-xs sm:text-sm border-2 border-[rgba(var(--color-primary-rgb),0.25)] dark:border-[rgba(var(--color-primary-rgb),0.35)] border-dashed hover:bg-[rgba(var(--color-primary-rgb),0.12)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs cursor-pointer"><i class="fa-solid fa-tags text-base"></i> Tambah Tingkatan Grosir</button>`;const e=document.getElementById("wholesale-builder-container");e&&(e.innerHTML=t)};window.addWhol=()=>{bt.push({minQty:2,price:0}),Hr(bt),window.rWholB()};window.rmWhol=t=>{bt.splice(t,1),Hr(bt),window.rWholB()};window.uWhol=(t,e,a)=>{bt[t][e]=parseFloat(a)||0};let Ha="products";const Ka=t=>{Ha=t,window.cTab=t};let Va="";const Zn=t=>{Va=t,window.aSq=t};let Fe=null;const si=t=>{Fe=t,window.eId=t};let St=!1;const oe=t=>{St=t};let Ie=[];const Ua=t=>{Ie=t};let bt=[];const Hr=t=>{bt=t};let Ge=[];const Kr=t=>{Ge=t};window.setCTab=Ka;window.setASq=Zn;window.setEId=si;const el=(t,e=!1)=>{const a=document.querySelector("#view-admin .scroll-content");if(a&&(a.scrollTop=0),hs(t),Si(""),!e){const s=history.state;s&&s.view==="view-admin"&&s.tab?history.replaceState({view:"view-admin",tab:t},"",window.location.href):history.pushState({view:"view-admin",tab:t},"",window.location.href)}if(K("admin-dashboard-view"),V("admin-content-view"),V("btn-admin-back"),K("admin-logo-box"),Q("admin-header-title",{orders:"Pesanan",settings:"Toko",products:"Produk",categories:"Kategori",brands:"Merek",banks:"Rekening",banners:"Banner",vouchers:"Voucher",customers:"Database Pelanggan",rewards:"Program Hadiah",reviews:"Ulasan Pelanggan",faqs:"Tanya Jawab / Q&A",tax:"Pajak & Keuangan",piutang:"Piutang Tempo",colors:"Database Warna",changelog:"Log Pembaruan Sistem"}[t]||"CMS"),t!=="orders"&&ut&&(ut(),ra(null)),t!=="customers"&&lt&&(lt(),Wt(null)),t!=="reviews"&&dt&&(dt(),zt(null)),t==="settings")typeof window.rAdmSet=="function"&&window.rAdmSet();else if(t==="orders")typeof window.rAdmOrd=="function"&&window.rAdmOrd();else if(t==="tax")typeof window.rTaxPanel=="function"&&window.rTaxPanel();else if(t==="piutang")typeof window.rAdmPiutang=="function"&&window.rAdmPiutang();else if(t==="customers"){j("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),lt&&(lt(),Wt(null));const s=P.collection("freshmart").doc("cms_data").collection("customers").onSnapshot(i=>{n.customers=i.docs.map(o=>o.data()),typeof window.rAdmL=="function"&&window.rAdmL("customers")},()=>{h("Gagal memuat data pelanggan!"),typeof window.rAdmL=="function"&&window.rAdmL("customers")});Wt(s)}else if(t==="reviews"){j("admin-content",'<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),dt&&(dt(),zt(null));const s=P.collection("freshmart").doc("cms_data").collection("reviews").onSnapshot(i=>{const o=i.docs.map(l=>l.data());o.sort((l,d)=>{const c=l.createdAt&&l.createdAt.toMillis?l.createdAt.toMillis():0;return(d.createdAt&&d.createdAt.toMillis?d.createdAt.toMillis():0)-c}),yi(o),typeof window.rAdmReviews=="function"&&window.rAdmReviews()},()=>{h("Gagal memuat ulasan!")});zt(s)}else t==="faqs"?typeof window.rAdmFAQ=="function"&&window.rAdmFAQ():t==="changelog"?typeof window.rAdmChangelog=="function"&&window.rAdmChangelog():t==="rewards"?(typeof window.attachRewardsRealtime=="function"&&window.attachRewardsRealtime(),typeof window.rAdmL=="function"&&window.rAdmL("rewards")):typeof window.rAdmL=="function"&&window.rAdmL(t)};window.openAdminTab=el;let aa="all";const tl=t=>{if(!t)return"";try{const e=t.split("-");return e.length===3?new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):t}catch{return t}},al=t=>{switch(t){case"feature":return{label:"Fitur Baru",icon:"fa-rocket",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"optimization":return{label:"Optimasi",icon:"fa-bolt-lightning",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"maintenance":return{label:"Maintenance",icon:"fa-wrench",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"bugfix":return{label:"Perbaikan",icon:"fa-bug-slash",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};default:return{label:"Update",icon:"fa-tag",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"}}},rl=()=>{const t=x("changelog-items-container");if(!t)return;const e=ga(n),a=aa==="all"?e:e.filter(s=>s.category===aa);if(a.length===0){t.innerHTML=`
        <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3">
                <i class="fa-solid fa-clipboard-list opacity-60"></i>
            </div>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan pada kategori ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Pilih filter kategori lain di atas</p>
        </div>`;return}let r="";a.forEach((s,i)=>{const o=i===0&&aa==="all",l=al(s.category),d=tl(s.date),c=(s.items||[]).map(p=>`
            <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[11px] mt-1 shrink-0"></i>
                <span>${u(p)}</span>
            </li>
        `).join("");r+=`
        <div class="relative pl-6 sm:pl-8 pb-6 border-l-2 ${o?"border-[var(--color-primary)]":"border-slate-200 dark:border-slate-700"} last:border-l-transparent last:pb-2">
            <!-- Timeline Node Indicator -->
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full ${o?"bg-[var(--color-primary)] ring-4 ring-[rgba(var(--color-primary-rgb),0.2)]":"bg-slate-300 dark:bg-slate-600"} flex items-center justify-center transition-all">
                ${o?'<span class="w-1.5 h-1.5 rounded-full bg-white"></span>':""}
            </div>

            <!-- Card Box -->
            <div class="rounded-2xl border ${o?"border-[var(--color-primary)]/40 bg-[rgba(var(--color-primary-rgb),0.03)] dark:bg-[rgba(var(--color-primary-rgb),0.06)] shadow-sm":"border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40"} p-4 sm:p-5 transition-all">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[11px] font-black tracking-wider uppercase ${o?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-800 text-white dark:bg-slate-700"}">
                            ${u(s.version||"v1.0.0")}
                        </span>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${l.colorClass}">
                            <i class="fa-solid ${l.icon} text-[9px] ${l.iconColor}"></i> ${u(l.label)}
                        </span>
                        ${o?`
                        <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[9px] font-black uppercase tracking-wider">
                            <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span> Versi Terbaru
                        </span>`:""}
                    </div>
                    <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                        <i class="fa-regular fa-calendar text-[10px]"></i> ${u(d)}
                    </span>
                </div>

                <h4 class="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-white leading-snug mb-3">
                    ${u(s.title||"Pembaruan Sistem")}
                </h4>

                <ul class="space-y-2">
                    ${c}
                </ul>
            </div>
        </div>`}),t.innerHTML=r},ii=t=>{aa=t,document.querySelectorAll(".btn-changelog-filter").forEach(e=>{const a=e.getAttribute("data-category"),r=e.querySelector("i");a===t?(e.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent",r&&(r.className=r.className.replace(/text-\[[^\]]+\]/g,"").trim()+" text-white")):(e.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer",r&&a!=="all"?r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-[var(--color-primary)]":r&&a==="all"&&(r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-slate-400"))}),rl()},sl=(t="all")=>{let e=x("changelog-modal");e||(e=document.createElement("div"),e.id="changelog-modal",e.className="fixed inset-0 z-[125] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=s=>{s.target===e&&oi()},e.innerHTML=`
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
        </div>`,document.body.appendChild(e));const a=Rr(n),r=x("changelog-header-ver");r&&(r.textContent=a),aa=t,ii(t),e.style.display!=="flex"&&da("changelog"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const s=x("changelog-modal-box");s&&s.classList.remove("translate-y-full","sm:translate-y-8")})},oi=(t=!1)=>{const e=x("changelog-modal");if(!e||e.style.display==="none")return;const a=()=>{e.classList.add("opacity-0");const r=x("changelog-modal-box");r&&r.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{e.style.display="none"},300)};typeof gt=="function"?gt("changelog",t,a):a()};window.openChangelogModal=sl;window.closeChangelogModal=oi;window.filterChangelog=ii;let Bt=!1,jt=null;const Vr=()=>{const t=new Date,e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${r}`},il=t=>{if(!t)return"";try{const e=t.split("-");return e.length===3?new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):t}catch{return t}},Pt=()=>{const t=x("admin-content");if(!t)return;const e=n.changelog||[],a=ga(n),r=Rr(n),s=(n.deletedChangelogIds||[]).length;let i="";a.length===0?i=`
        <div class="text-center py-12 text-slate-400">
            <i class="fa-solid fa-clipboard-list text-3xl mb-2 opacity-50"></i>
            <p class="text-xs font-bold">Belum ada catatan pembaruan</p>
        </div>`:i=a.map(o=>{const l=e.some(b=>b.id===o.id),d=o.version===r,c=(o.items||[]).map(b=>`
                <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                    <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[10px] mt-1 shrink-0"></i>
                    <span>${u(b)}</span>
                </li>
            `).join("");let p="Update",m="fa-tag";return o.category==="feature"?(p="Fitur Baru",m="fa-rocket"):o.category==="optimization"?(p="Optimasi",m="fa-bolt-lightning"):o.category==="maintenance"?(p="Maintenance",m="fa-wrench"):o.category==="bugfix"&&(p="Perbaikan",m="fa-bug-slash"),`
            <div class="p-4 sm:p-5 rounded-2xl border ${d?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.02)] dark:bg-[rgba(var(--color-primary-rgb),0.05)] shadow-sm":"border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"} space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="px-2.5 py-1 rounded-lg text-xs font-black tracking-wider uppercase ${d?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-800 text-white dark:bg-slate-700"}">
                            ${u(o.version)}
                        </span>
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-slate-200/80 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid ${m} text-[9px] text-[var(--color-primary)]"></i> ${u(p)}
                        </span>
                        ${d?'<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[9px] font-extrabold uppercase"><span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span> Versi Aktif</span>':""}
                        ${l?'<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] text-[9px] font-bold">Kustom Toko</span>':'<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 text-[9px] font-bold">Sistem Bawaan</span>'}
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500">
                            <i class="fa-regular fa-calendar mr-1"></i> ${u(il(o.date))}
                        </span>
                        ${l?`
                        <button onclick="window.editChangelogEntry('${u(o.id)}')" class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs transition-all cursor-pointer" title="Edit Catatan">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button onclick="window.deleteChangelogEntry('${u(o.id)}')" class="w-7 h-7 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center text-xs transition-all cursor-pointer" title="Hapus Catatan">
                            <i class="fa-solid fa-trash"></i>
                        </button>`:`
                        <button onclick="window.deleteChangelogEntry('${u(o.id||o.version)}')" class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-rose-50 dark:bg-slate-800 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 flex items-center justify-center text-xs transition-all cursor-pointer" title="Hapus Log Ini dari Sistem">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>`}
                    </div>
                </div>

                <div>
                    <h4 class="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                        ${u(o.title)}
                    </h4>
                </div>

                <ul class="space-y-1.5 pt-1">
                    ${c}
                </ul>
            </div>`}).join(""),t.innerHTML=`
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
                            ${u(r)}
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
        <div id="changelog-form-box" class="${Bt?"block":"hidden"} p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-[var(--color-primary)]/40 shadow-lg space-y-4">
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
                    <input id="form-log-date" type="date" value="${Vr()}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none" />
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
                ${i}
            </div>
        </div>
    </div>`},ol=(t=null)=>{Bt=t!==null?t:!Bt,Bt||(jt=null),Pt()},nl=t=>{const e=(n.changelog||[]).find(s=>s.id===t);if(!e)return;jt=t,Bt=!0,Pt(),Le("form-log-version",e.version||""),Le("form-log-category",e.category||"feature"),Le("form-log-date",e.date||Vr()),Le("form-log-title",e.title||""),Le("form-log-items",(e.items||[]).join(`
`));const a=x("changelog-form-title");a&&(a.innerHTML=`<i class="fa-solid fa-pen text-[var(--color-primary)]"></i> Edit Catatan Pembaruan (${u(e.version)})`);const r=x("changelog-form-box");r&&r.scrollIntoView({behavior:"smooth"})},ll=async()=>{const t=(M("form-log-version")||"").trim(),e=M("form-log-category")||"feature",a=M("form-log-date")||Vr(),r=(M("form-log-title")||"").trim(),s=(M("form-log-items")||"").trim();if(!t)return h("Nomor versi harus diisi (contoh: v1.2.1)!");if(!r)return h("Judul pembaruan harus diisi!");if(!s)return h("Tuliskan minimal 1 poin rincian perubahan!");const i=s.split(`
`).map(l=>l.replace(/^[-*•]\s*/,"").trim()).filter(l=>l.length>0);if(i.length===0)return h("Rincian perubahan tidak boleh kosong!");R("Menyimpan catatan pembaruan...");const o={id:jt||"log-"+Date.now().toString(36),version:t.startsWith("v")?t:"v"+t,category:e,date:a,title:r,items:i,updatedAt:new Date().toISOString()};if(n.changelog=n.changelog||[],jt){const l=n.changelog.findIndex(d=>d.id===jt);l!==-1?n.changelog[l]=o:n.changelog.unshift(o)}else n.changelog.unshift(o);n.deletedChangelogIds&&Array.isArray(n.deletedChangelogIds)&&(n.deletedChangelogIds=n.deletedChangelogIds.filter(l=>l!==o.id&&l!==o.version));try{await ee(["changelog","deletedChangelogIds"]),h("Catatan pembaruan berhasil dipublikasikan secara real-time!","success"),Bt=!1,jt=null,Pt()}catch(l){h("Gagal menyimpan log pembaruan: "+l.message,"error")}finally{L()}},dl=t=>{const a=ga(n).find(s=>s.id===t||s.version===t);if(!a)return;const r=a.version||a.title||"ini";Ze("Hapus Catatan Log Toko",`Apakah Anda yakin ingin menghapus catatan pembaruan versi "${r}"? Catatan ini tidak akan ditampilkan lagi di etalase toko maupun panel admin.`,async()=>{R("Menghapus catatan...");try{n.changelog=(n.changelog||[]).filter(i=>i.id!==t&&i.version!==t),n.deletedChangelogIds=Array.isArray(n.deletedChangelogIds)?n.deletedChangelogIds:[];const s=a.id||t;n.deletedChangelogIds.includes(s)||n.deletedChangelogIds.push(s),a.version&&!n.deletedChangelogIds.includes(a.version)&&n.deletedChangelogIds.push(a.version),await ee(["changelog","deletedChangelogIds"]),h(`Catatan pembaruan ${r} berhasil dihapus!`,"success"),Pt()}catch(s){h("Gagal menghapus catatan: "+s.message,"error")}finally{L()}},"Konfirmasi Hapus Log")},cl=()=>{const t=ga(n);if(t.length<=5)return h(`Daftar log masih ringkas (${t.length} versi), belum perlu pembersihan.`,"info");const e=t.slice(5),a=e.length;Ze("Pangkas Log Terlama",`Apakah Anda yakin ingin memangkas ${a} catatan log pembaruan terlama dan hanya menyisakan 5 versi terbaru? Tindakan ini merapikan daftar log toko agar tidak menumpuk spam.`,async()=>{R("Memangkas catatan lama...");try{const r=new Set;e.forEach(s=>{s.id&&r.add(s.id),s.version&&r.add(s.version)}),n.changelog=(n.changelog||[]).filter(s=>!r.has(s.id)&&!r.has(s.version)),n.deletedChangelogIds=Array.isArray(n.deletedChangelogIds)?n.deletedChangelogIds:[],r.forEach(s=>{n.deletedChangelogIds.includes(s)||n.deletedChangelogIds.push(s)}),await ee(["changelog","deletedChangelogIds"]),h(`Berhasil membersihkan ${a} log lama! Tersisa 5 versi terbaru.`,"success"),Pt()}catch(r){h("Gagal memangkas log: "+r.message,"error")}finally{L()}},"Pangkas Log Lama")},pl=()=>{if((n.deletedChangelogIds||[]).length===0)return h("Tidak ada log bawaan yang terhapus.","info");Ze("Pulihkan Log Bawaan","Apakah Anda yakin ingin memulihkan kembali seluruh catatan log rilis sistem bawaan toko yang pernah dihapus?",async()=>{R("Memulihkan catatan log...");try{n.deletedChangelogIds=[],await ee(["deletedChangelogIds"]),h("Seluruh log pembaruan bawaan berhasil dipulihkan!","success"),Pt()}catch(e){h("Gagal memulihkan catatan: "+e.message,"error")}finally{L()}},"Ya, Pulihkan Semua")};window.rAdmChangelog=Pt;window.toggleChangelogForm=ol;window.editChangelogEntry=nl;window.saveChangelogEntry=ll;window.deleteChangelogEntry=dl;window.pruneOldChangelogs=cl;window.restoreDefaultChangelogs=pl;export{Mi as A,sa as B,xl as C,ei as D,we as a,We as b,gr as c,P as d,Nt as e,Ot as f,Rr as g,Ii as h,fl as i,Hn as j,jo as k,bl as l,Kn as m,Vn as n,Un as o,da as p,$e as q,gt as r,_i as s,hl as t,Lt as u,$s as v,Ms as w,Na as x,Ba as y,ws as z};
