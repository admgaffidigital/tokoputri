const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js","assets/module-pos-DAYthKjy.js"])))=>i.map(i=>d[i]);
import{f as we}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const Tt="modulepreload",St=function(e){return"/"+e},qe={},Ze=function(a,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),i=r?.nonce||r?.getAttribute("nonce");s=Promise.allSettled(t.map(d=>{if(d=St(d),d in qe)return;qe[d]=!0;const l=d.endsWith(".css"),m=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":Tt,l||(f.as="script"),f.crossOrigin="",f.href=d,i&&f.setAttribute("nonce",i),document.head.appendChild(f),l)return new Promise((u,h)=>{f.addEventListener("load",u),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return s.then(r=>{for(const i of r||[])i.status==="rejected"&&o(i.reason);return a().catch(o)})},At={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const $t=window.FIREBASE_CONFIG||At;we.apps.length||we.initializeApp($t);const Z=we.firestore(),Te=we.auth();typeof window<"u"&&(window.firebase=we,window.db=Z,window.auth=Te);try{Z.settings({ignoreUndefinedProperties:!0,experimentalAutoDetectLongPolling:!0,merge:!0})}catch{}typeof window<"u"&&(window.addEventListener("online",()=>{try{Z.enableNetwork().catch(()=>{})}catch{}}),window.addEventListener("offline",()=>{try{Z.disableNetwork().catch(()=>{})}catch{}}));let Ct=null;const cs=()=>{Ze(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{Ct=we.analytics()}catch{}}).catch(()=>{})},X="K2ijSERTT2dg27yYGTEgn6XHSnW2",Mt={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"pill",brandStyle:"logo",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showHeroSlide:!0,heroMascotImg:"/putri_mascot_anim.gif",heroBadgeText:"Siap Melayani",heroWelcomeTag:"SELAMAT DATANG",heroTitle:"",heroSubtitle:"",showRewardCatalog:!0,showScrollTopButton:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],productOrder:[],suppliers:[],purchases:[],expenses:[],stockOpnameHistory:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let p=JSON.parse(JSON.stringify(Mt)),Xe=[],et=[],L=[];try{const e=localStorage.getItem("freshmart_cart");e&&(Xe=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(et=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(L=JSON.parse(e)||[])}catch{}let Dt={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},Lt=null,Rt=null,It=null,Nt="Semua Produk",Ot="Semua Jenis",Et="Semua Merek",Bt="",Ht="newest",Kt="grid",Ut=1,jt=12,Ft="orders",_t="",zt=null,qt=null,Wt=0,Gt=[],Vt=[],Yt=[],Jt=1,oe=[],Qt=null,Zt=null,Xt=null,le=[],ea=[],ie=null,ta=null,aa=!1,sa="all",oa="today",na=null,ra=null;const ps=e=>{na=e},us=e=>{p=e},fs=e=>{Xe=e},ms=e=>{et=e},ws=e=>{L=e},bs=e=>{Dt=e},gs=e=>{Lt=e},xs=e=>{Rt=e},hs=e=>{It=e},ys=e=>{Nt=e},vs=e=>{Ot=e},ks=e=>{Et=e},Ps=e=>{Bt=e},Ts=e=>{Ht=e},Ss=e=>{Kt=e},As=e=>{Ut=e},$s=e=>{jt=e},Cs=e=>{Ft=e},Ms=e=>{_t=e},Ds=e=>{zt=e},Ls=e=>{qt=e},Rs=e=>{Wt=e},Is=e=>{Gt=e},Ns=e=>{Vt=e},Os=e=>{Yt=e},Es=e=>{Jt=e},Bs=e=>{oe=e},Hs=e=>{le=e},Ks=e=>{ea=e},We=e=>{ie=e},Us=e=>{ta=e},js=e=>{aa=e},Fs=e=>{ra=e},_s=e=>{sa=e},zs=e=>{oa=e},qs=e=>{Qt=e},Ws=e=>{Zt=e},Gs=e=>{Xt=e};let tt=!1;if(typeof window<"u"){const e=()=>{tt=!0,window.__hasUserInteracted=!0};["pointerdown","touchstart","mousedown","keydown"].forEach(a=>{window.addEventListener(a,e,{capture:!0,once:!0})}),window.__hasUserInteracted=!1}const Ee=()=>typeof navigator<"u"&&navigator.userActivation?navigator.userActivation.hasBeenActive:!!(tt||typeof window<"u"&&window.__hasUserInteracted);typeof window<"u"&&(window.checkUserGesture=Ee);const ce=(e="light")=>{try{const a=window.Capacitor?.Plugins?.Haptics;if(a){e==="light"||e==="selection"?a.impact({style:"LIGHT"}).catch(()=>{}):e==="medium"?a.impact({style:"MEDIUM"}).catch(()=>{}):e==="heavy"?a.impact({style:"HEAVY"}).catch(()=>{}):e==="success"?a.notification({type:"SUCCESS"}).catch(()=>{}):e==="warning"?a.notification({type:"WARNING"}).catch(()=>{}):e==="error"&&a.notification({type:"ERROR"}).catch(()=>{});return}if(typeof navigator<"u"&&typeof navigator.vibrate=="function"){if(!Ee())return;e==="light"||e==="selection"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="heavy"?navigator.vibrate(45):e==="success"?navigator.vibrate([15,30,20]):e==="warning"?navigator.vibrate([30,40,30]):e==="error"&&navigator.vibrate([40,50,40,50,40])}}catch{}};typeof window<"u"&&(window.triggerHaptic=ce);const ia=e=>{if(e)switch(e){case"product-modal":typeof window.closeProductModal=="function"&&window.closeProductModal();break;case"pos-variant-sheet":typeof window.closePOSVariantSheet=="function"&&window.closePOSVariantSheet();break;case"variant-preview-modal":typeof window.closeVariantPreviewModal=="function"&&window.closeVariantPreviewModal();break;case"custom-confirm-modal":typeof window.closeConfirm=="function"&&window.closeConfirm();break;case"scanner-modal":typeof window.closeCameraScanner=="function"&&window.closeCameraScanner();break;case"modal-tempo-detail":typeof window.closeTempoDetailModal=="function"&&window.closeTempoDetailModal();break;case"modal-tempo-payment":typeof window.closeTempoPaymentModal=="function"&&window.closeTempoPaymentModal();break;case"modal-tempo-penalty":typeof window.closeTempoPenaltyModal=="function"&&window.closeTempoPenaltyModal();break;case"modal-supplier-detail":typeof window.closeSupplierDetailModal=="function"&&window.closeSupplierDetailModal();break;case"modal-supplier-form":typeof window.closeSupplierFormModal=="function"&&window.closeSupplierFormModal();break;case"modal-po-form":typeof window.closePurchaseFormModal=="function"&&window.closePurchaseFormModal();break;case"modal-po-detail":typeof window.closePurchaseDetailModal=="function"&&window.closePurchaseDetailModal();break;case"modal-po-payment":typeof window.closePurchasePaymentModal=="function"&&window.closePurchasePaymentModal();break;case"modal-po-product-picker":typeof window.closePurchasePickerModal=="function"&&window.closePurchasePickerModal();break;case"quick-menu-modal":typeof window.closeQuickMenuModal=="function"&&window.closeQuickMenuModal();break;case"pos-login-modal":typeof window.closePOSLoginModal=="function"&&window.closePOSLoginModal();break;case"admin-order-modal":typeof window.closeOrderDetailModal=="function"&&window.closeOrderDetailModal();break;default:{const a=document.getElementById(e);if(a){const t=a.querySelector('button[onclick*="close"], .fa-xmark')?.closest("button");if(t)t.click();else if(typeof window.closeModalAnim=="function"){const n=a.querySelector('.modal-bottom-sheet, [id$="-box"]')||a.firstElementChild;window.closeModalAnim(a,n)}else a.classList.add("hidden","opacity-0")}}}};let V=null,he=null,ke=0,Ge=0,Pe=0,ae=!1,Ve=0;const la=()=>{if(typeof document>"u")return;document.addEventListener("touchstart",a=>{if(a.touches.length!==1)return;const t=a.touches[0],n=t.target.closest('[id*="modal"], [id*="sheet"]');if(!n||n.classList.contains("hidden")||n.classList.contains("opacity-0")||!(n.classList.contains("items-end")||!!t.target.closest(".modal-bottom-sheet")||n.classList.contains("modal-bottom-sheet")))return;let o=t.target.closest(".modal-bottom-sheet")||t.target.closest('[id$="-box"]');if(o||(o=t.target.closest('[id$="-content"]')),!o)return;const r=o.classList.contains("overflow-y-auto")?o:o.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar"),i=r?r.scrollTop:0,d=o.getBoundingClientRect();!(t.clientY-d.top<=80||t.target.closest(".pull-indicator"))&&i>5||(V=o,he=n,ke=t.clientY,Ge=t.clientX,Pe=ke,ae=!1,Ve=Date.now())},{passive:!0}),document.addEventListener("touchmove",a=>{if(!V||a.touches.length!==1)return;const t=a.touches[0];Pe=t.clientY;const n=Pe-ke,s=Math.abs(t.clientX-Ge);if(!ae&&s>Math.abs(n)){V=null;return}const o=V.classList.contains("overflow-y-auto")?V:V.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar");if(!(o&&o.scrollTop>5&&!ae)){if(n>0){if(ae=!0,a.cancelable&&a.preventDefault(),V.style.transform=`translateY(${n}px)`,V.style.transition="none",he){const r=Math.max(.2,1-n/400);he.style.backgroundColor=`rgba(15, 23, 42, ${.8*r})`}}else if(n<0&&ae){const r=n*.2;V.style.transform=`translateY(${r}px)`,V.style.transition="none"}}},{passive:!1});const e=()=>{if(!V)return;const a=V,t=he,n=Pe-ke,s=Math.max(1,Date.now()-Ve),o=n/s;V=null,he=null,ae&&(n>80||o>.45&&n>30)?(ce("light"),a.style.transition="transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",a.style.transform="translateY(100%)",t&&(t.style.transition="opacity 0.25s ease",t.style.opacity="0"),setTimeout(()=>{a.style.transform="",a.style.transition="",t&&(t.style.backgroundColor="",t.style.opacity=""),ia(t?t.id:"")},250)):ae&&(a.style.transition="transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)",a.style.transform="",t&&(t.style.transition="background-color 0.28s ease",t.style.backgroundColor=""),setTimeout(()=>{a.style.transition=""},300)),ae=!1};document.addEventListener("touchend",e,{passive:!0}),document.addEventListener("touchcancel",e,{passive:!0})};let Ye=0;const da=()=>{typeof document>"u"||document.addEventListener("click",e=>{const a=Date.now();if(a-Ye<50)return;const t=e.target.closest('button, [role="button"], a[onclick], [id*="bnav-"], .pos-add-btn, .pos-tag-chip, #pos-variant-chips button, .interactive-tap');t&&!t.disabled&&!t.classList.contains("disabled")&&(Ye=a,ce("light"))},{passive:!0,capture:!0})};let j=null;const ca=(e="pop")=>{try{if(typeof window>"u"||!Ee())return;const a=window.AudioContext||window.webkitAudioContext;if(!a)return;j||(j=new a),j.state==="suspended"&&j.resume().catch(()=>{});const t=j.currentTime;if(e==="pop"){const n=j.createOscillator(),s=j.createGain();n.type="sine",n.frequency.setValueAtTime(340,t),n.frequency.exponentialRampToValueAtTime(560,t+.07),s.gain.setValueAtTime(.14,t),s.gain.exponentialRampToValueAtTime(.001,t+.08),n.connect(s),s.connect(j.destination),n.start(t),n.stop(t+.08)}else if(e==="success"){const n=j.createOscillator(),s=j.createOscillator(),o=j.createGain(),r=j.createGain();n.type="triangle",s.type="triangle",n.frequency.setValueAtTime(523.25,t),s.frequency.setValueAtTime(659.25,t+.09),o.gain.setValueAtTime(.12,t),o.gain.exponentialRampToValueAtTime(.001,t+.22),r.gain.setValueAtTime(.14,t+.09),r.gain.exponentialRampToValueAtTime(.001,t+.32),n.connect(o),o.connect(j.destination),s.connect(r),r.connect(j.destination),n.start(t),n.stop(t+.22),s.start(t+.09),s.stop(t+.32)}else if(e==="beep"){const n=j.createOscillator(),s=j.createGain();n.type="square",n.frequency.setValueAtTime(1040,t),s.gain.setValueAtTime(.08,t),s.gain.exponentialRampToValueAtTime(.001,t+.07),n.connect(s),s.connect(j.destination),n.start(t),n.stop(t+.07)}}catch{}};typeof window<"u"&&(window.playNativeSound=ca);const ye=()=>{if(typeof document>"u")return;const e=document.getElementById("native-scroll-top-btn");e&&(e.classList.add("opacity-0","translate-y-3"),e.classList.add("hidden"))};typeof window<"u"&&(window.hideFloatingScrollTop=ye);const pa=()=>{if(typeof document>"u")return;let e=document.getElementById("native-scroll-top-btn");e||(e=document.createElement("button"),e.id="native-scroll-top-btn",document.body.appendChild(e)),e.setAttribute("aria-label","Kembali ke Atas"),e.setAttribute("title","Kembali ke Atas"),e.className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 hidden opacity-0 translate-y-3 transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900/95 dark:bg-slate-800/95 text-white shadow-xl shadow-black/25 border border-slate-700/80 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_4px_20px_rgba(var(--color-primary-rgb),0.4)] hover:scale-105 active:scale-90 cursor-pointer group",e.innerHTML='<i class="fa-solid fa-arrow-up text-xs md:text-sm transition-transform duration-200 group-hover:-translate-y-0.5"></i>',e._hasClickListener||(e._hasClickListener=!0,e.addEventListener("click",()=>{ce("light");const t=document.querySelector(".view-section:not(.hidden)");if(t){const n=t.querySelector(".scroll-content");n&&n.scrollTop>10&&n.scrollTo({top:0,behavior:"smooth"})}window.scrollTo({top:0,behavior:"smooth"})}));const a=(t,n=null)=>{if(!e)return;if(typeof window<"u"&&window.appData?.store?.showScrollTopButton===!1){ye();return}const s=document.querySelector(".view-section:not(.hidden)");if(!s||s.id!=="view-catalog"&&s.id!=="view-orders"){ye();return}if(n){const r=n.closest(".view-section");if(!r||r.id!=="view-catalog"&&r.id!=="view-orders"){ye();return}}if(document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none), [id*="dialog"]:not(.hidden), .fixed.inset-0:not(.hidden):not(.pointer-events-none):not(#native-theme-ambient)')){ye();return}t>450?(e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0","translate-y-3")})):(e.classList.add("opacity-0","translate-y-3"),setTimeout(()=>{e&&e.classList.contains("opacity-0")&&e.classList.add("hidden")},300))};window.addEventListener("scroll",()=>{a(window.scrollY||document.documentElement.scrollTop)},{passive:!0}),document.addEventListener("scroll",t=>{t.target&&t.target.classList&&t.target.classList.contains("scroll-content")&&a(t.target.scrollTop,t.target)},{passive:!0,capture:!0})},ua=()=>{if(typeof window>"u"||typeof document>"u")return;let e=document.getElementById("native-connectivity-banner");e||(e=document.createElement("div"),e.id="native-connectivity-banner",e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] -translate-y-16 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl",document.body.appendChild(e));let a=null;const t=n=>{clearTimeout(a),ce(n?"success":"warning"),n?(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-emerald-600 text-white border border-emerald-400/40",e.innerHTML='<i class="fa-solid fa-wifi text-xs"></i><span>Kembali Online — Terhubung</span>',a=setTimeout(()=>{e.classList.add("-translate-y-16","opacity-0")},2500)):(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-amber-500 text-slate-950 border border-amber-300/60",e.innerHTML='<i class="fa-solid fa-wifi-slash text-xs"></i><span>Mode Offline — Menggunakan Data Lokal</span>')};window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1))},Vs=()=>{la(),da(),pa(),ua()},at=e=>{let a="";return typeof e=="object"&&e!==null?a=`${e.name||""} ${e.category||""} ${e.subCategory||""}`.toLowerCase():a=String(e||"").toLowerCase(),["paku","baut","sekrup","mur","pipa","pvc","paralon","semen","pasir","bata","mortar","hebel","besi","baja","hollow","seng","atap","kawat","cat","paint","roll","kuas","thinner","amplas","alat","perkakas","tang","obeng","palu","kunci","gembok","meteran","bor","gerinda","paket","box"].some(s=>a.includes(s))?"fa-box-open":"fa-bag-shopping"},fa=(e,a="",t="")=>{const n=at(e);return{id:"brand",icon:n,subIcon:n,label:"Produk Resmi",podGradient:"linear-gradient(135deg, rgba(var(--color-primary-rgb),0.12) 0%, rgba(var(--color-primary-rgb),0.20) 100%)",accent:"rgba(var(--color-primary-rgb),0.1)",aura:"rgba(var(--color-primary-rgb),0.08)",shadowColor:"rgba(var(--color-primary-rgb),0.15)"}},ma=e=>{if(!e||typeof e!="string")return"TP";const t=e.replace(/[^a-zA-Z0-9\s]/g," ").trim().split(/\s+/).filter(o=>o.length>0),n=t.filter(o=>/[a-zA-Z]/.test(o)),s=n.length>0?n:t;return s.length>=2?(s[0][0]+s[1][0]).toUpperCase():s.length===1?(s[0].length>=2?s[0].slice(0,2):s[0]+"P").toUpperCase():"TP"},wa=(e,a={})=>{const t=a.size||"md",n=a.className||"",s=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk"),o=at(e);return`
    <div class="pos-smart-cover cover-${t} ${n}" title="${c(s)}">
        <!-- Subtle Theme Glow -->
        <div class="cover-surface-glow"></div>

        <!-- Center Icon Pod: Paket Box / Shopping Bag -->
        <div class="cover-center">
            <div class="cover-icon-pod">
                <i class="fa-solid ${o} cover-icon"></i>
            </div>
        </div>

        <!-- Official Store Watermark -->
        ${t!=="thumb"?`
        <div class="cover-watermark">
            <i class="fa-solid fa-store mr-1 text-[7px] opacity-75"></i><span>PUTRI UTAMA TEKNIK</span>
        </div>`:""}
    </div>`},ba=e=>(typeof e=="object"&&e!==null?e.name:String(e||"Produk"),`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
        <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#faf8f5"/>
                <stop offset="100%" stop-color="#eee8dc"/>
            </linearGradient>
            <radialGradient id="aura" cx="50%" cy="48%" r="40%">
                <stop offset="0%" stop-color="#c59b27" stop-opacity="0.12"/>
                <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
            </radialGradient>
        </defs>
        <rect width="300" height="300" fill="url(#bg)"/>
        <circle cx="150" cy="135" r="85" fill="url(#aura)"/>
        <rect x="105" y="90" width="90" height="90" rx="24" fill="#ffffff" stroke="#c59b27" stroke-width="2" stroke-opacity="0.4"/>
        <text x="150" y="272" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="8.5" fill="#94a3b8" text-anchor="middle" letter-spacing="2">PUTRI UTAMA TEKNIK</text>
    </svg>`)}`),b=e=>document.getElementById(e),st=e=>{const a=b(e);a&&a.classList.remove("hidden")},ot=e=>{const a=b(e);a&&a.classList.add("hidden")},ga=(e,a,t)=>{const n=b(e);n&&n.classList.toggle(a,t)},Y=(e,a)=>{const t=b(e);t&&(t.innerText=a)},te=(e,a)=>{const t=b(e);t&&(t.innerHTML=a)},xa=(e,a)=>{const t=b(e);t&&(t.value=a)},ha=e=>{const a=b(e);return a?a.value:""},Se=(e,a)=>{const t=typeof e=="string"?b(e):e,n=typeof a=="string"?b(a):a;t&&(t.classList.remove("hidden"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.classList.remove("opacity-0"),n&&n.classList.remove("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95")})}))},de=(e,a,t)=>{const n=typeof e=="string"?b(e):e,s=typeof a=="string"?b(a):a;if(!n){typeof t=="function"&&t();return}n.classList.add("opacity-0"),s&&s.classList.add("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95"),setTimeout(()=>{n.classList.add("hidden"),typeof t=="function"&&t()},280)};window.openModalAnim=Se;window.closeModalAnim=de;const ya=e=>{try{return localStorage.getItem(e)}catch{return null}},va=(e,a)=>{try{localStorage.setItem(e,a)}catch{}},c=e=>e==null?"":e.toString().replace(/[&<>'"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[a]),k=e=>{const a=Number(e);return isNaN(a)||e===null?"Rp 0":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(Math.abs(a)).replace(/^/,a<0?"-":"")},ka=(e,a=null)=>{if(typeof e!="string")return e;const t=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);if(!t)return e;const n=t[1];return a==="image/gif"||e.toLowerCase().includes(".gif")||n==="1rkAFxnZDe2eLQ88kan2BeGSg56IkAEJ9"?`https://drive.google.com/uc?export=view&id=${n}`:`https://lh3.googleusercontent.com/d/${n}`},Pa=e=>{if(!e||typeof e!="string")return null;const a=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(a))return a;const t=a.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return t?t[1]:null},nt=e=>{if(typeof e!="string"||!e.trim())return null;const a=e.trim(),t=Pa(a);if(t)return{type:"youtube",id:t,embedUrl:`https://www.youtube.com/embed/${t}?autoplay=1&mute=1&muted=1&loop=1&playlist=${t}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const n=a.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(n&&n[1]){const s=n[1];return{type:"gdrive",id:s,streamUrl:`https://drive.google.com/uc?export=download&id=${s}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${s}`,directUrl:`https://drive.google.com/uc?export=download&id=${s}`,embedUrl:`https://drive.google.com/file/d/${s}/preview?autoplay=1`}}return{type:"direct",directUrl:a,embedUrl:a}},Ys=e=>{const a=nt(e);return a?a.embedUrl:e},Js=e=>{const a=nt(e);return a?a.embedUrl:e},Qs=(e,a)=>typeof e!="string"||!e?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${a}`:e.includes("googleusercontent.com")&&!e.includes("=")?`${e}=${a}`:e,Zs=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",Xs=(e,a,t,n)=>{document.title=e||"Toko Putri";const s=(o,r,i=!1)=>{const d=i?"property":"name";let l=document.querySelector(`meta[${d}="${o}"]`);l||(l=document.createElement("meta"),l.setAttribute(d,o),document.head.appendChild(l)),l.setAttribute("content",r)};a&&s("description",a),e&&s("og:title",e,!0),a&&s("og:description",a,!0),t&&s("og:image",t,!0),n&&s("og:url",n,!0)},eo=(e,a)=>{let t=document.getElementById(e);t||(t=document.createElement("script"),t.id=e,t.type="application/ld+json",document.head.appendChild(t)),t.textContent=JSON.stringify(a)},rt=e=>{e&&Y("loader-text",e);const a=b("global-loader");a&&(a.style.opacity="1",a.style.display="flex")},De=()=>{const e=b("global-loader");e&&(e.style.pointerEvents="none",e.style.transition="opacity 0.25s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250))},Q=(e,a,t,n)=>{typeof window.showToast=="function"&&window.showToast(e,a,t,n)},to=(e,a,t,n)=>{if(typeof window.showConfirm=="function")return window.showConfirm(e,a,t,n)},pe={};window.loadedScripts=pe;const ao=(e,a)=>a&&a()?Promise.resolve():(pe[e]||(pe[e]=new Promise((t,n)=>{const s=document.createElement("script");s.src=e,s.onload=()=>t(),s.onerror=()=>{delete pe[e],n(new Error("Gagal memuat: "+e))},document.head.appendChild(s)})),pe[e]),it=e=>{let a=(e||"").toString().replace(/\D/g,"");return a?(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),a):""},Ta=(e,a="")=>{const t=it(e);if(!t){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp tidak valid!");return}const n=a?encodeURIComponent(a):"",s=`https://wa.me/${t}${n?`?text=${n}`:""}`;window.AndroidNativeApp&&typeof window.AndroidNativeApp.openWhatsApp=="function"?window.AndroidNativeApp.openWhatsApp(s):window.open(s,"_blank","noopener,noreferrer")},Sa=(e,a=null,t=null)=>{try{const n=(typeof a=="string"?document.querySelector(a):a)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!n)return;const s=e.getBoundingClientRect(),o=n.getBoundingClientRect(),r=document.createElement("div");r.className="flying-cart-item",t?r.innerHTML=`<img src="${t}" alt="Product" class="w-full h-full object-cover rounded-full" />`:r.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const i=s.left+s.width/2-20,d=s.top+s.height/2-20,l=o.left+o.width/2-20,m=o.top+o.height/2-20;r.style.cssText=`
            position: fixed;
            left: ${i}px;
            top: ${d}px;
            width: 42px;
            height: 42px;
            border-radius: 9999px;
            z-index: 99999;
            pointer-events: none;
            box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.25);
            border: 2px solid white;
            transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.5s ease-in, scale 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 1;
        `,document.body.appendChild(r),requestAnimationFrame(()=>{const f=l-i,u=m-d;r.style.transform=`translate3d(${f}px, ${u}px, 0) scale(0.25) rotate(18deg)`,r.style.opacity="0.4"}),setTimeout(()=>{r&&r.parentNode&&r.parentNode.removeChild(r),ce("medium");const f=document.getElementById("bottom-nav-cart-badge")||n.querySelector(".cart-count-badge");f&&(f.classList.remove("cart-bounce-pop"),f.offsetWidth,f.classList.add("cart-bounce-pop")),n.classList.remove("cart-bounce-pop"),n.offsetWidth,n.classList.add("cart-bounce-pop"),setTimeout(()=>{f&&f.classList.remove("cart-bounce-pop"),n.classList.remove("cart-bounce-pop")},600)},500)}catch(n){console.error("flyToCart error",n)}};window.normalizeWA=it;window.openWhatsApp=Ta;window.sLoad=rt;window.hLoad=De;window.el=b;window.show=st;window.hide=ot;window.toggleCls=ga;window.setIn=Y;window.setH=te;window.setV=xa;window.getV=ha;window.esc=c;window.fixD=ka;window.fCur=k;window.sL=ya;window.ssL=va;window.triggerHaptic=ce;window.flyToCartAnimation=Sa;window.renderProductCoverHtml=wa;window.getProductTheme=fa;window.getMonogram=ma;window.getProductCoverSvgDataUri=ba;const Je={deviceType:"rawbt",deviceName:"Driver RawBT (Printer Thermal Android - Free)",deviceId:"",paperSize:"58mm",directPrint:!0,feedLines:3,autoCut:!0,openCashDrawer:!1,autoPrintOrder:!1,headerText:"",footerText:"Terima kasih atas kunjungan Anda!",showLogo:!0,showPoints:!0,showBarcode:!0,networkIp:"192.168.1.200:9100"},ne=e=>{switch(e){case"58mm-compact":case"58mm_30":return 30;case"80mm-compact":case"80mm_42":return 42;case"80mm":return 48;case"58mm":default:return 32}},H=()=>{try{const e=localStorage.getItem("freshmart_printer_config");if(e)return{...Je,...JSON.parse(e)}}catch(e){console.warn("Gagal membaca konfigurasi printer lokal:",e)}return{...Je}},Ae=e=>{try{const t={...H(),...e};return localStorage.setItem("freshmart_printer_config",JSON.stringify(t)),t}catch(a){return console.error("Gagal menyimpan konfigurasi printer:",a),H()}},Aa=()=>{const e=H(),a=(o,r)=>{const i=b(o);i&&(i.checked=!!r)},t=(o,r)=>{const i=b(o);i&&(i.value=r||"")};t("printer-device-name-display",e.deviceName),t("printer-paper-size",e.paperSize),t("printer-network-ip",e.networkIp),t("printer-header-custom",e.headerText),t("printer-footer-custom",e.footerText),a("printer-opt-points",e.showPoints),a("printer-opt-barcode",e.showBarcode),a("printer-opt-direct",e.directPrint!==!1),a("printer-opt-autocut",e.autoCut!==!1),a("printer-opt-drawer",e.openCashDrawer),a("printer-opt-autoprint",e.autoPrintOrder),dt(e.deviceType||"rawbt");const n=b("printer-settings-modal"),s=b("printer-settings-modal-box");n&&n.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("printerSettings"),Se(n,s)},lt=(e=!1)=>{const a=b("printer-settings-modal"),t=b("printer-settings-modal-box");a&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("printerSettings",e,()=>{de(a,t)}):de(a,t))},dt=e=>{window._selectedPrinterType=e,document.querySelectorAll(".printer-type-card").forEach(n=>{if(n.getAttribute("data-type")===e){n.classList.add("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),n.classList.remove("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const o=n.querySelector(".printer-check-badge");o&&o.classList.remove("hidden")}else{n.classList.remove("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),n.classList.add("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const o=n.querySelector(".printer-check-badge");o&&o.classList.add("hidden")}});const a=b("rawbt-quick-guide-box");a&&(e==="rawbt"?a.classList.remove("hidden"):a.classList.add("hidden"));const t=b("printer-network-box");t&&(e==="network"?t.classList.remove("hidden"):t.classList.add("hidden"))},$a=()=>{const e=(o,r="")=>{const i=b(o);return i?i.value:r},a=(o,r=!1)=>{const i=b(o);return i?i.checked:r},t=window._selectedPrinterType||"rawbt",s={deviceType:t,deviceName:e("printer-device-name-display",t==="rawbt"?"Driver RawBT (Printer Thermal Android - Free)":t==="bluetooth"?"Bluetooth POS Printer":"Printer Thermal POS"),paperSize:e("printer-paper-size","58mm"),networkIp:e("printer-network-ip","192.168.1.200:9100"),headerText:e("printer-header-custom",""),footerText:e("printer-footer-custom","Terima kasih atas kunjungan Anda!"),showPoints:a("printer-opt-points",!0),showBarcode:a("printer-opt-barcode",!0),directPrint:a("printer-opt-direct",!0),autoCut:a("printer-opt-autocut",!0),openCashDrawer:a("printer-opt-drawer",!1),autoPrintOrder:a("printer-opt-autoprint",!1)};Ae(s),Q("Pengaturan printer berhasil disimpan! ✅"),lt()},Ca=async()=>{if(!navigator.bluetooth){Q("Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.");return}try{Q("Mencari printer bluetooth di sekitar...");const e=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["000018f0-0000-1000-8000-00805f9b34fb","e7810a71-73ae-499d-8c15-faa9aef0c3f2","00001101-0000-1000-8000-00805f9b34fb"]});if(e){Ae({deviceType:"bluetooth",deviceName:e.name||"Bluetooth POS Printer",deviceId:e.id});const a=b("printer-device-name-display");a&&(a.value=e.name||"Bluetooth POS Printer"),Q(`Printer "${e.name||"Bluetooth POS"}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&Q("Koneksi bluetooth dibatalkan atau tidak tersedia.")}},Ma=async()=>{if(!navigator.usb){Q("Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.");return}try{Q("Mencari printer USB...");const e=await navigator.usb.requestDevice({filters:[]});if(e){const a=(e.productName||"USB Thermal Printer")+" (USB)";Ae({deviceType:"usb",deviceName:a,deviceId:String(e.vendorId)+":"+String(e.productId)});const t=b("printer-device-name-display");t&&(t.value=a),Q(`Printer USB "${a}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&Q("Koneksi USB dibatalkan atau tidak ditemukan.")}},Da=()=>{const e=H();if((e.deviceType==="rawbt"||!e.deviceType)&&typeof window.executeRawBTTestPrint=="function"){window.executeRawBTTestPrint();return}const a=e.paperSize==="80mm",t=a?48:32,n=p.store.name||"TOKO PUTRI",s=p.store.wa||"",o=(l,m,f=t)=>{const u=f-l.length-m.length;return l+(u>0?" ".repeat(u):" ")+m},r=new Date().toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let i=`
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${c(n)}</div>
    ${s?`<div style="text-align:center;font-size:11px;margin-bottom:4px;">WA: ${c(s)}</div>`:""}
    <div style="text-align:center;font-weight:bold;font-size:12px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:3px 0;margin:6px 0;">
        *** UJI COBA CETAK STRUK ***
    </div>
    <div style="white-space:pre;font-size:11px;">Tgl   : ${r}</div>
    <div style="white-space:pre;font-size:11px;">Format: Thermal ${a?"80mm (48 Kolom)":"58mm (32 Kolom)"}</div>
    <div style="white-space:pre;font-size:11px;">Koneksi: ${e.deviceType.toUpperCase()}</div>
    <div style="white-space:pre;font-size:11px;">Status : KONEKSI BERHASIL</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:11px;font-weight:bold;">${o("TES ITEM UJI COBA","HARGA",t)}</div>
    <div style="white-space:pre;font-size:10px;">${o("1x Produk Percobaan","Rp 25.000",t)}</div>
    <div style="white-space:pre;font-size:10px;">${o("2x Kertas Thermal Kasir","Rp 15.000",t)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:12px;font-weight:bold;">${o("TOTAL UJI","Rp 40.000",t)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    `;e.showPoints&&(i+=`<div style="white-space:pre;font-size:11px;">${o("Simulasi Poin Member","+10 Poin",t)}</div>`,i+='<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>'),e.showBarcode&&(i+=`<div style="text-align:center;margin:6px 0;">
            <div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*TEST-POS-${Date.now().toString().slice(-6)}*</div>
            <div style="font-size:9px;color:#333;">(BARCODE TEST OK)</div>
        </div><div style="border-bottom:1px dashed #000;margin:6px 0;"></div>`),i+=`
    <div style="text-align:center;font-size:10px;margin-top:6px;line-height:1.3;">
        ${c(e.footerText||"Terima kasih atas kunjungan Anda!")}
    </div>
    <div style="text-align:center;font-size:9px;font-style:italic;margin-top:4px;">
        Printer siap digunakan untuk operasional kasir Toko Putri.
    </div>
    <div style="height:25px;"></div>
    `;let d=b("thermal-print-section");if(d||(d=document.createElement("div"),d.id="thermal-print-section",document.body.appendChild(d)),d.innerHTML=`<div style="width:${a?"80mm":"58mm"};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${i}</div>`,typeof window.sendToRawBT=="function"){const l=d.innerText,m=btoa(unescape(encodeURIComponent(l)));window.sendToRawBT(m,l,i)}else window.print();Q("Perintah uji cetak berhasil dikirim! 🖨️")};window.getPrinterConfig=H;window.getPaperCols=ne;window.savePrinterConfig=Ae;window.openPrinterSettingsModal=Aa;window.closePrinterSettingsModal=lt;window.selectPrinterDeviceTypeUI=dt;window.savePrinterSettingsFromModal=$a;window.scanBluetoothPrinter=Ca;window.scanUsbPrinter=Ma;window.executeTestPrint=Da;let Qe={},F="view-catalog",me=!1,ve=null,Le=["view-catalog"];const $e=e=>{history.pushState({modal:e},"",window.location.href),oe.push(e)},Ce=(e,a,t)=>{if(!a){const n=oe.lastIndexOf(e);n>-1&&oe.splice(n,1),me=!0,ve&&clearTimeout(ve),ve=setTimeout(()=>{me=!1},300);try{history.back()}catch{me=!1}}t()},q=(e,a=!1)=>{if(!e||e===F)return;a||(history.pushState({view:e},"",window.location.href),e==="view-catalog"?Le=["view-catalog"]:Le.push(e));const t=b(F);if(t){const s=t.querySelector(".scroll-content");s&&(Qe[F]=s.scrollTop)}if(F==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime(),F==="view-pos-cashier"&&e!=="view-pos-cashier"&&(typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()),F==="view-admin"&&e!=="view-admin"){const s=b("view-admin");s&&s.classList.remove("admin-pos-mode"),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()}const n=b(e);if(n&&(n.classList.remove("hidden"),n.classList.add("flex")),document.querySelectorAll(".view-section").forEach(s=>{s!==n&&(s.classList.add("hidden"),s.classList.remove("flex"))}),typeof window.hideFloatingScrollTop=="function")window.hideFloatingScrollTop();else{const s=document.getElementById("native-scroll-top-btn");s&&(s.classList.add("opacity-0","translate-y-3"),s.classList.add("hidden"))}if(n){e==="view-cart"&&typeof window.renderCart=="function"?window.renderCart():e==="view-checkout"&&typeof window.rChck=="function"?window.rChck():e==="view-payment"&&typeof window.rPay=="function"?window.rPay():e==="view-wishlist"&&typeof window.renderWish=="function"?window.renderWish():e==="view-orders"&&typeof window.renderMyOrders=="function"?window.renderMyOrders():e==="view-faq"&&typeof window.renderStorefrontFAQ=="function"?window.renderStorefrontFAQ():e==="view-pos-cashier"&&Ze(()=>import("./module-pos-DAYthKjy.js").then(o=>o.a),__vite__mapDeps([2,1])).then(o=>{typeof o.renderPOSStorefront=="function"&&o.renderPOSStorefront()}).catch(o=>console.error("[POS] Gagal memuat storefront:",o));const s=n.querySelector(".scroll-content");if(s)if(a){const o=Qe[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{s.scrollTop=o}))}else s.scrollTo(0,0)}F=e,ct(e)},ct=(e=F)=>{const a=b("bottom-nav-bar");if(!a)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin","view-pos-cashier"].includes(e)){a.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),a.classList.remove("translate-y-0","opacity-100");return}if(a.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),a.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(n=>n.classList.remove("active")),e==="view-catalog"){const n=b("bnav-home");n&&n.classList.add("active")}else if(e==="view-orders"){const n=b("bnav-orders");n&&n.classList.add("active")}else if(e==="view-wishlist"||e==="view-faq"){const n=b("bnav-menu");n&&n.classList.add("active")}},La=e=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(e==="home"?"medium":"light"),e==="home")if(F==="view-catalog"){const a=document.querySelector("#view-catalog .scroll-content");a?a.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else q("view-catalog");else e==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():e==="cart"?q("view-cart"):e==="orders"?q("view-orders"):e==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},pt=()=>{const e=document.querySelector("#view-catalog .scroll-content"),a=b("pull-to-refresh-indicator"),t=b("ptr-icon"),n=b("ptr-text");if(!e||!a)return;let s=0,o=0,r=!1,i=!1;const d=65;e.addEventListener("touchstart",l=>{e.scrollTop<=5&&!i&&(s=l.touches[0].pageY,r=!0)},{passive:!0}),e.addEventListener("touchmove",l=>{if(!r||i)return;o=l.touches[0].pageY;const m=o-s;if(m>15&&e.scrollTop<=5){a.classList.add("visible");const f=Math.min(m/d,1.5);t&&(t.style.transform=`rotate(${f*240}deg)`),n&&(n.innerText=m>=d?"Lepaskan untuk segarkan":"Tarik ke bawah untuk refresh")}else a.classList.remove("visible")},{passive:!0}),e.addEventListener("touchend",async()=>{if(!r||i)return;if(r=!1,o-s>=d&&e.scrollTop<=5){i=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),t&&(t.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",t.style.transform=""),n&&(n.innerText="Menyinkronkan katalog...");try{typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),n&&(n.innerText="Katalog Terkini Disinkron!"),t&&(t.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch{n&&(n.innerText="Gagal sinkron data")}setTimeout(()=>{a.classList.remove("visible"),setTimeout(()=>{i=!1,t&&(t.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",t.style.transform=""),n&&(n.innerText="Tarik ke bawah untuk refresh")},300)},600)}else a.classList.remove("visible"),t&&(t.style.transform="")})},ut=e=>{e==="product"&&typeof window.closeProductModal=="function"?window.closeProductModal(!0):e==="category"&&typeof window.closeCategoryModal=="function"?window.closeCategoryModal(!0):e==="brand"&&typeof window.closeBrandModal=="function"?window.closeBrandModal(!0):e==="admin"&&typeof window.closeAdminModal=="function"?window.closeAdminModal(!0):e==="adminOrder"&&typeof window.closeOrderDetailModal=="function"?window.closeOrderDetailModal(!0):e==="receipt"&&typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):e==="docPreview"&&typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):e==="scanner"&&typeof window.closeCameraScanner=="function"?window.closeCameraScanner(!0):e==="confirm"&&typeof window.closeConfirm=="function"?window.closeConfirm(!0):e==="customerOrder"&&typeof window.closeCustomerOrderDetailModal=="function"?window.closeCustomerOrderDetailModal(!0):e==="restock"&&typeof window.closeRestockModal=="function"?window.closeRestockModal(!0):e==="quickprice"&&typeof window.closeQuickPriceModal=="function"?window.closeQuickPriceModal(!0):e==="member"&&typeof window.closeMemberModal=="function"?window.closeMemberModal(!0):e==="prompt"&&typeof window.closePrompt=="function"?window.closePrompt(!0):e==="review"&&typeof window.closeReviewModal=="function"?window.closeReviewModal(!0):e==="quickmenu"&&typeof window.closeQuickMenuModal=="function"?window.closeQuickMenuModal(!0):e==="variantPreview"&&typeof window.closeVariantPreviewModal=="function"?window.closeVariantPreviewModal(!0):e==="terms"&&typeof window.closeTermsModal=="function"?window.closeTermsModal(!0):e==="privacy"&&typeof window.closePrivacyModal=="function"?window.closePrivacyModal(!0):e==="askQuestion"&&typeof window.closeAskQuestionModal=="function"?window.closeAskQuestionModal(!0):e==="quickVariant"&&typeof window.closeQuickVariantSheet=="function"?window.closeQuickVariantSheet(!0):e==="adminFAQ"&&typeof window.closeAdminFAQModal=="function"?window.closeAdminFAQModal(!0):e==="printerSettings"&&typeof window.closePrinterSettingsModal=="function"?window.closePrinterSettingsModal(!0):e==="exitConfirm"&&typeof window.closeExitConfirmModal=="function"?window.closeExitConfirmModal(!0):e==="appDownload"&&typeof window.closeAppDownloadModal=="function"?window.closeAppDownloadModal(!0):e==="voucher"&&typeof window.closeVoucherModal=="function"?window.closeVoucherModal(!0):e==="guide"&&typeof window.closeShoppingGuideModal=="function"?window.closeShoppingGuideModal(!0):e==="changelog"&&typeof window.closeChangelogModal=="function"?window.closeChangelogModal(!0):e==="guarantee"&&typeof window.closeQualityGuaranteeModal=="function"?window.closeQualityGuaranteeModal(!0):e==="security"&&typeof window.closeSecurityModal=="function"?window.closeSecurityModal(!0):e==="posVariantSheet"&&typeof window.closePOSVariantSheet=="function"?window.closePOSVariantSheet(!0):e==="posLogin"&&typeof window.closePOSLoginModal=="function"?window.closePOSLoginModal(!0):e==="posCartDrawer"&&typeof window.closePOSCartDrawer=="function"?window.closePOSCartDrawer(!0):e==="posPayment"&&typeof window.closePayModal=="function"?window.closePayModal(!0):e==="purchaseForm"&&typeof window.closeCreatePOModal=="function"?window.closeCreatePOModal(!0):e==="purchasePicker"&&typeof window.closePOProductPicker=="function"?window.closePOProductPicker(!0):e==="purchaseDetail"&&typeof window.closePurchaseDetailModal=="function"?window.closePurchaseDetailModal(!0):e==="purchasePayment"&&typeof window.closePurchasePaymentModal=="function"?window.closePurchasePaymentModal(!0):e==="supplierForm"&&typeof window.closeSupplierFormModal=="function"?window.closeSupplierFormModal(!0):e==="supplierDetail"&&typeof window.closeSupplierDetailModal=="function"?window.closeSupplierDetailModal(!0):e==="posHoldPrompt"&&typeof window.closePOSHoldPrompt=="function"?window.closePOSHoldPrompt(!0):e==="posHeldModal"&&typeof window.closePOSHeldModal=="function"?window.closePOSHeldModal(!0):e==="posCameraScanner"&&typeof window.closePOSCameraScanner=="function"?window.closePOSCameraScanner(!0):e==="tempoDetail"&&typeof window.closeTempoDetailModal=="function"?window.closeTempoDetailModal(!0):e==="tempoPayment"&&typeof window.closeTempoPaymentModal=="function"?window.closeTempoPaymentModal(!0):e==="tempoPenalty"&&typeof window.closeTempoPenaltyModal=="function"?window.closeTempoPenaltyModal(!0):e==="expenseForm"&&typeof window.closeExpenseModal=="function"?window.closeExpenseModal(!0):e==="expenseReceipt"&&typeof window.closeExpenseReceiptPreview=="function"&&window.closeExpenseReceiptPreview(!0)},ft=()=>{const e=b("exit-confirm-modal");e&&(e.classList.contains("hidden")&&$e("exitConfirm"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const a=b("exit-confirm-modal-box");a&&a.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Be=(e=!1)=>{Ce("exitConfirm",e,()=>{const a=b("exit-confirm-modal"),t=b("exit-confirm-modal-box");a&&a.classList.add("opacity-0"),t&&t.classList.add("scale-95"),setTimeout(()=>{a&&a.classList.add("hidden")},250)})},Ra=()=>{Be(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri! 🙏"),setTimeout(()=>{try{window.close()}catch{}},400))},Ia=()=>{const e=document.getElementById("pos-receipt-fallback-modal")||document.getElementById("pos-shift-receipt-modal")||document.getElementById("pos-success-modal")||document.getElementById("pos-recall-confirm-modal")||document.getElementById("pos-closed-success-modal");if(e){e.remove();return}if(oe.length>0){try{window.history.back()}catch{const n=oe.pop();ut(n)}return}if(F==="view-admin"){const t=b("admin-content-view"),n=b("admin-dashboard-view");if(!!(t&&!t.classList.contains("hidden")||n&&n.classList.contains("hidden")||window.history.state&&window.history.state.tab||typeof window.cTab<"u"&&window.cTab)){if(window.history.state&&window.history.state.tab&&window.history.length>1)try{window.history.back();return}catch{}typeof window.openAdminMenu=="function"&&window.openAdminMenu();try{window.history.replaceState({view:"view-admin"},"",window.location.href)}catch{}return}typeof window.showConfirm=="function"&&window.showConfirm("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0);return}if(F==="view-pos-cashier"){typeof window.showConfirm=="function"?window.showConfirm("Keluar Mode Kasir","Yakin keluar dari mode POS kasir?",()=>{typeof window.exitPOSMode=="function"?window.exitPOSMode():q("view-catalog")},"Ya, Keluar",!0):q("view-catalog");return}if(F!=="view-catalog"){if(F==="view-payment"){q("view-checkout");return}if(F==="view-checkout"){q("view-cart");return}if(F==="view-cart"){q("view-catalog");return}window.history.length>1?window.history.back():q("view-catalog");return}const a=b("exit-confirm-modal");a&&!a.classList.contains("hidden")?Be():ft()},Na=()=>{pt();try{(!history.state||!history.state.view)&&history.replaceState({view:"view-catalog"},"",window.location.href)}catch{}window.addEventListener("popstate",e=>{if(me){me=!1,ve&&clearTimeout(ve);return}if(oe.length>0){const s=oe.pop();ut(s);return}const a=e.state||{},t=a.view||null;if(window.isAdm||window.__localIsAdm)if(t==="view-admin")q("view-admin",!0),a.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(a.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu();else{const s=b("admin-content-view");if(s&&!s.classList.contains("hidden")){history.pushState({view:"view-admin"},"",window.location.href),q("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"&&window.showConfirm("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}else if(t){let s=t;t==="view-admin"&&(s="view-admin-login"),q(s,!0)}else q("view-catalog",!0)})};window.pushModalHistory=$e;window.requestCloseModal=Ce;window.changeView=q;window.setupHistoryRouter=Na;window.onBottomNavClick=La;window.updateBottomNav=ct;window.initPullToRefresh=pt;window.handleAppBackButton=Ia;window.openExitConfirmModal=ft;window.closeExitConfirmModal=Be;window.confirmExitApp=Ra;window.isProgrammaticModalClose=me;window.viewHistoryStack=Le;try{Object.defineProperty(window,"curViewName",{get:()=>F,set:e=>{F=e},configurable:!0})}catch{}let Re=null,ue=null;const Oa=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const a=document.createElement("textarea");a.value=e,a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)}J("Kode "+e+" berhasil disalin!")}catch{J("Gagal menyalin. Kode: "+e)}},J=(e,a,t,n)=>{const s=b("toast");if(!s)return;if(!a){const T=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(T)?a="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(T)?a="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(T)?a="warning":/upload|proses|memuat|loading|sedang/.test(T)?a="loading":a="info"}typeof window.triggerHaptic=="function"&&window.triggerHaptic(a==="error"?"error":a==="warning"?"warning":a==="success"?"success":"light");const o=getComputedStyle(document.documentElement),r=o.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",i=o.getPropertyValue("--color-primary").trim()||"#10b981";o.getPropertyValue("--color-primary-dark").trim();const d={success:{icon:"fa-circle-check",label:"Berhasil",accent:i,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:i,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:i,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`}},l=d[a]||d.info,m=b("toast-icon");m&&(m.className="fa-solid "+l.icon);const f=b("toast-title");f&&(f.textContent=t||l.label,f.style.display="block",f.style.color=l.accent);const u=b("toast-icon-wrap");u&&(u.style.background=l.iconBg,u.style.color=l.accent),Y("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let h=b("toast-progress");h||(h=document.createElement("div"),h.id="toast-progress",s.appendChild(h)),h.style.background=l.accent,h.style.transition="none",h.style.width="100%",h.style.opacity="0.85",clearTimeout(Re),s.classList.add("toast-show");const w=n||(a==="loading"?8e3:a==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{h.style.transition=`width ${w}ms linear`,h.style.width="0%"})),Re=setTimeout(()=>{s.classList.remove("toast-show")},w)},Ea=e=>J(e,"loading","Memproses...",8e3),Ba=()=>{clearTimeout(Re);const e=b("toast");e&&e.classList.remove("toast-show")},Ha=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const a=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");a&&(a.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")};let se=null;const Ka=(e,a,t,n="Ya, Hapus",s=!0)=>{let o=e,r=a,i=t,d=n,l=s;typeof a=="function"&&(i=a,r=e,o=typeof n=="string"&&n!=="Ya, Hapus"?n:"Konfirmasi Tindakan",d=typeof t=="string"?t:"Ya, Lanjutkan",l=!0);let m=null;typeof i!="function"?(m=new Promise(w=>{se=w}),ue=null):(ue=i,se=null),Y("confirm-title",o);const f=b("confirm-msg");if(f)if(typeof r=="string"){const w=typeof window.DOMPurify<"u"?window.DOMPurify.sanitize(r,{ADD_ATTR:["class","style"]}):r;f.innerHTML=w}else f.textContent=r||"";const u=b("confirm-yes-btn");u&&(u.innerText=d,l?(u.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 active:scale-95 transition-all text-xs sm:text-sm shadow-md shadow-rose-500/30 cursor-pointer",b("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",b("confirm-icon").className="fa-solid fa-triangle-exclamation"):(u.className="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-2xl hover:opacity-90 active:scale-95 transition-all text-xs sm:text-sm shadow-sm cursor-pointer",b("confirm-icon-box").className="w-16 h-16 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-[var(--color-primary)]/20",b("confirm-icon").className="fa-solid fa-copy"));const h=b("custom-confirm-modal");return h&&h.classList.contains("hidden")&&$e("confirm"),st("custom-confirm-modal"),setTimeout(()=>{b("custom-confirm-modal").classList.remove("opacity-0"),b("custom-confirm-box").classList.remove("scale-95")},10),m},Ie=(e=!1)=>{if(se){const a=se;se=null,a(!1)}Ce("confirm",e,()=>{b("custom-confirm-modal").classList.add("opacity-0"),b("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>ot("custom-confirm-modal"),300)})},Ua=()=>{if(se){const e=se;se=null,ue=null,Ie(),setTimeout(()=>{e(!0)},150);return}if(ue){const e=ue;ue=null,Ie(),setTimeout(()=>{e()},150)}},ja=(e,a="",t=null)=>{let n=null,s=null;typeof t!="function"&&(s=new Promise(u=>{n=u}));const o=a!=null?String(a):"",r=o.length>50||o.includes(`
`)||/balasan|catatan|alasan|deskripsi|pesan|keterangan/i.test(e),i=o.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),d=r?`<textarea id="prompt-input" rows="3" class="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 custom-scrollbar resize-none leading-relaxed" placeholder="Tuliskan di sini...">${i}</textarea>`:`<input type="text" id="prompt-input" value="${i}" class="w-full px-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-bold focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 text-center" autocomplete="off" />`;let l=document.createElement("div");l.id="custom-prompt-container",l.className="fixed inset-0 z-[10005] bg-slate-900/85 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300",l.onclick=u=>{u.target===l&&window.closePrompt()},l.innerHTML=`
        <div class="bg-white dark:bg-slate-800 rounded-[2rem] w-full max-w-[380px] sm:max-w-[420px] p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-700 relative transform scale-95 transition-all duration-300 flex flex-col text-center" onclick="event.stopPropagation()">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 border shadow-sm" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb),0.2)">
                <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <h3 class="font-black text-slate-900 dark:text-white text-base sm:text-lg mb-3 tracking-tight leading-snug">${e}</h3>
            ${d}
            <div class="flex gap-3">
                <button id="prompt-cancel" type="button" class="flex-1 py-3.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-600 active:scale-95 transition-all text-xs sm:text-sm cursor-pointer">Batal</button>
                <button id="prompt-ok" type="button" class="flex-1 py-3.5 text-white font-bold rounded-2xl hover:opacity-95 active:scale-95 transition-all text-xs sm:text-sm shadow-md cursor-pointer" style="background: var(--color-primary)">Simpan</button>
            </div>
        </div>
    `,document.body.appendChild(l);const m=l.querySelector("div");$e("prompt"),setTimeout(()=>{l.classList.remove("opacity-0"),m.classList.remove("scale-95")},10);const f=l.querySelector("#prompt-input");return f&&(f.focus(),f.select(),f.onkeydown=u=>{u.key==="Enter"&&(!r||u.ctrlKey)?(u.preventDefault(),l.querySelector("#prompt-ok")?.click()):u.key==="Escape"&&(u.preventDefault(),window.closePrompt())}),window.closePrompt=(u=!1)=>{if(!(!l||!l.parentNode)){if(n){const h=n;n=null,h(null)}Ce("prompt",u,()=>{l.classList.add("opacity-0"),m.classList.add("scale-95"),setTimeout(()=>l.remove(),300),window.closePrompt=null})}},l.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),l.querySelector("#prompt-ok").onclick=()=>{let u=f.value;if(n){const h=n;n=null,window.closePrompt(),h(u)}else window.closePrompt(),typeof t=="function"&&t(u)},s},Fa=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=Oa;window.showToast=J;window.showToastLoading=Ea;window.hideToast=Ba;window.toggleTheme=Ha;window.showConfirm=Ka;window.closeConfirm=Ie;window.executeConfirm=Ua;window.customPrompt=ja;window.checkProPrint=Fa;const S=e=>"Rp "+Math.round(Number(e||0)).toLocaleString("id-ID"),Me=e=>Math.round(Number(e||0)).toLocaleString("id-ID"),_a=e=>{const a=parseFloat(e);return isNaN(a)?"0":Number.isInteger(a)?String(a):a.toFixed(2).replace(/\.?0+$/,"")},B=e=>e?String(e).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"").replace(/[\r\t]/g," ").replace(/[^\x20-\x7E\n]/g," "):"",O=(e,a)=>{if(!e)return[];const t=B(e).replace(/ +/g," ").trim();if(!t)return[];if(t.length<=a)return[t];const n=t.split(" "),s=[];let o="";for(const r of n)if(r)if(r.length>a){o&&(s.push(o),o="");for(let i=0;i<r.length;i+=a){const d=r.substring(i,i+a);d.length===a?s.push(d):o=d}}else(o?o.length+1+r.length:r.length)<=a?o=o?o+" "+r:r:(s.push(o),o=r);return o&&s.push(o),s},ee=(e,a=!1)=>{const t=e?new Date(e):new Date,n=String(t.getDate()).padStart(2,"0"),s=String(t.getMonth()+1).padStart(2,"0"),o=a?t.getFullYear():String(t.getFullYear()).slice(-2),r=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0");return`${n}/${s}/${o} ${r}:${i}`},mt=(e,a,t,n=!1)=>{const s=B(String(e||"")).trimEnd(),o=B(String(a||"")).trim(),r=t-s.length-o.length;if(r>=0)return[s+" ".repeat(r)+o];if(n){const l=Math.max(0,t-o.length-1),m=s.substring(0,l).trimEnd(),f=Math.max(1,t-m.length-o.length);return[m+" ".repeat(f)+o]}const i=O(s,t),d=i[i.length-1]||"";if(d.length+1+o.length<=t){const l=t-d.length-o.length;return i[i.length-1]=d+" ".repeat(l)+o,i}else{const l=Math.max(0,t-o.length);return[...i," ".repeat(l)+o]}};class be{constructor(a=32){this.cols=Number(a)||32,this.bytes=[],this.plainLines=[]}init(){return this.bytes.push(27,64),this}align(a="left"){const t=a==="center"?1:a==="right"?2:0;return this.bytes.push(27,97,t),this}bold(a=!0){return this.bytes.push(27,69,a?1:0),this}size(a="normal"){return a==="title"?this.bytes.push(29,33,17):a==="tall"||a==="total"?this.bytes.push(29,33,1):a==="wide"?this.bytes.push(29,33,16):this.bytes.push(29,33,0),this}text(a){if(!a)return this;const t=B(a);for(let n=0;n<t.length;n++)this.bytes.push(t.charCodeAt(n));return this}line(a="",t="left"){return this.align(t),this.text(a),this.bytes.push(10),this.plainLines.push(a),this}centered(a=""){return O(a,this.cols).forEach(n=>this.line(n,"center")),this}twoColumn(a="",t="",n=!1,s=!1){return n&&this.bold(!0),mt(a,t,this.cols,s).forEach(r=>this.line(r,"left")),n&&this.bold(!1),this}itemRow(a){const t=a.variantName?` (${a.variantName}${a.colorCode?" "+a.colorCode:""})`:"",n=(a.name||"Barang")+t+(a.poTime?" [PO]":"");this.bold(!0),O(n,this.cols).forEach(l=>this.line(l,"left")),this.bold(!1);const o=a.effectivePrice||a.price||0,r=a.subtotal!==void 0?a.subtotal:parseFloat(a.qty||1)*o,i=`  ${_a(a.qty)} ${a.unit||"pcs"} x ${Me(o)}`,d=Me(r);return this.twoColumn(i,d,!1,!1),a.discount&&a.discount>0&&this.twoColumn("  (Pot. Diskon)",`-${Me(a.discount)}`,!1,!0),a.poTime&&this.line(`  * Estimasi PO: ${a.poTime}`,"left"),this}separator(a="-"){const t=a.repeat(this.cols);return this.line(t,"left"),this}doubleSeparator(){return this.separator("=")}feed(a=3){this.bytes.push(27,100,Math.max(1,a));for(let t=0;t<a;t++)this.plainLines.push("");return this}cut(){return this.bytes.push(29,86,65,3),this}openDrawer(){return this.bytes.push(27,112,0,25,250),this}toBase64(){const a=new Uint8Array(this.bytes);let t="";const n=a.length,s=8192;for(let o=0;o<n;o+=s){const r=a.subarray(o,o+s);t+=String.fromCharCode.apply(null,r)}return btoa(t)}toPlainText(){return this.plainLines.join(`
`)}}const ge=(e,a="",t="")=>{const n=/android/i.test(navigator.userAgent||"");if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function")try{return window.AndroidNativeApp.printRawBT(e),J("Mencetak struk via RawBT... 🖨️"),!0}catch(s){console.warn("[RawBT] AndroidNativeApp error, mencoba intent...",s)}if(n)try{J("Membuka Printer RawBT... 🖨️");const s=`intent:base64,${e}#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;end;`;return window.location.href=s,setTimeout(()=>{if(!document.hidden)try{window.location.href=`rawbt:base64,${e}`}catch{}},800),!0}catch(s){console.warn("[RawBT] Intent trigger failed:",s)}return J("Mencetak struk kasir... 🖨️"),He(t||a),!0},He=e=>{const a=H(),n=ne(a.paperSize)>=40,s=n?"80mm":"58mm";let o=b("thermal-print-section");o||(o=document.createElement("div"),o.id="thermal-print-section",document.body.appendChild(o)),o.className=n?"paper-80mm":"paper-58mm",document.body.classList.remove("paper-58mm","paper-80mm"),document.body.classList.add(n?"paper-80mm":"paper-58mm");let r=document.getElementById("dynamic-print-page-style");r||(r=document.createElement("style"),r.id="dynamic-print-page-style",document.head.appendChild(r)),r.innerHTML=`@media print { @page { margin: 0; size: ${s} auto; } html, body { width: ${s} !important; } }`;const d=typeof e=="string"&&e.includes("<")&&e.includes(">")?e:`<pre style="font-family:'Courier New',Courier,monospace;font-size:11px;margin:0;line-height:1.25;white-space:pre-wrap;word-break:break-word;">${c(e)}</pre>`;o.innerHTML=`
        <div style="width:100%;font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.25;color:#000;background:#fff;padding:0;">
            ${d}
        </div>
    `,setTimeout(()=>{window.print()},100)},za=()=>{if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.openRawBT=="function"){window.AndroidNativeApp.openRawBT();return}/android/i.test(navigator.userAgent||"")?(window.location.href="intent:#Intent;package=ru.a402d.rawbtprinter;end;",setTimeout(()=>{document.hidden||(window.location.href="https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter")},1200)):window.open("https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter","_blank")},wt=(e,a=null)=>{const t=a||H(),n=ne(t.paperSize),s=n>=40,o=new be(n);o.init(),t.openCashDrawer&&e.payment?.method==="cash"&&o.openDrawer();const r=B(t.headerText||p.store?.name||"TOKO PUTRI").trim(),i=B(p.store?.address||"").trim(),d=B(p.store?.wa||"").trim(),l=Math.floor(n/2);r.length<=l?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),O(r.toUpperCase(),n).forEach($=>o.line($,"center")),o.size("normal").bold(!1)),i&&O(i,n).forEach($=>o.line($,"center")),d&&o.line(`WA: ${d}`,"center");const m=e.payment?.taxNpwp||p.store?.taxNpwp;m&&o.line(`NPWP: ${m}`,"center"),o.separator("-");const f=ee(e.dateMs||Date.now(),s),u=`#${e.txId}`;o.twoColumn(`No : ${u}`,f,!1,!0);const h=(e.cashierName||"Kasir").substring(0,s?16:9),w=(e.customer?.name||"Umum").substring(0,s?18:11);if(o.twoColumn(`Ksr: ${h}`,`Plg: ${w}`,!1,!0),e.customer?.phone&&o.line(`HP : ${e.customer.phone}`,"left"),o.separator("-"),(e.items||[]).forEach($=>{o.itemRow($)}),o.separator("-"),o.twoColumn("Subtotal",S(e.subtotal)),(e.globalDiscount||0)>0){const $=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";o.twoColumn($,`- ${S(e.globalDiscount)}`)}if((e.pointDiscount||0)>0&&o.twoColumn(`Diskon Poin (${e.pointsRedeemed||0} Poin)`,`- ${S(e.pointDiscount)}`),e.claimedReward&&e.claimedReward.name&&(o.separator("-"),o.bold(!0).line(`[KLAIM HADIAH: ${B(e.claimedReward.name)}]`,"left").bold(!1),o.twoColumn("Poin Reward Ditukar",`-${e.claimedReward.pointsCost||0} Poin`)),(e.payment?.ppnEnabled||e.payment?.ppnShowZero||e.payment?.ppnRate===0||e.payment?.ppnAmount&&e.payment.ppnAmount>0)&&(p.store?.ppnEnabled||e.payment?.ppnEnabled)){const $=e.payment?.ppnType==="inclusive",x=e.payment?.ppnRate!==void 0?e.payment.ppnRate:p.store?.ppnRate||0,D=e.payment?.ppnAmount||0,M=e.payment?.ppnLabel||`${$?"Inc. PPN":"PPN"} (${x}%)`,v=D>0?`${$?"":"+ "}${S(D)}`:"Rp 0";o.twoColumn(M,v)}o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL",S(e.total)).size("normal").bold(!1),o.doubleSeparator();const R=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",N=R?"PUTRI PAYLATER":(e.payment?.method||"CASH").toUpperCase();if(o.twoColumn("Metode Bayar",N),e.payment?.method==="cash")o.twoColumn("Bayar Tunai",S(e.payment.paid)),o.bold(!0).twoColumn("Kembalian",S(e.payment.change)).bold(!1);else if(e.payment?.method==="tempo"&&(R&&o.twoColumn("Limit Terpakai",S(e.payment?.paylaterUsed||e.paylaterUsed||e.total-(e.payment?.tempoDp??0))),o.twoColumn("Uang Muka (DP)",S(e.payment?.tempoDp??e.payment?.dp??0)),o.bold(!0).twoColumn(R?"Tagihan PayLater":"Sisa Piutang",S(e.payment.tempoBalance||0)).bold(!1),e.payment.tempoDueDate)){const $=typeof e.payment.tempoDueDate=="number"?new Date(e.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e.payment.tempoDueDate;o.line(`Jatuh Tempo: ${$}`,"left")}t.showPoints&&(e.pointsEarned>0||(e.pointsRedeemed||0)>0)&&(o.separator("-"),e.pointsEarned>0&&o.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),(e.pointsRedeemed||0)>0&&o.twoColumn("Poin Ditukar",`-${e.pointsRedeemed} Poin`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&o.twoColumn("Sisa Saldo Poin",`${e.finalMemberPoints} Poin`)),t.showBarcode&&(o.separator("-"),o.align("center"),o.line(`*POS-${e.txId}*`,"center"),o.line("(SCAN DI KASIR)","center")),o.separator("-");const C=t.footerText||"Terima Kasih Atas Kunjungan Anda!";return O(C,n).forEach($=>o.line($,"center")),o.feed(t.feedLines||3),t.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText()}},bt=(e,a=!1,t=null)=>{const n=t||H(),s=ne(n.paperSize),o=s>=40,r=new be(s);r.init();const i=B(n.headerText||p.store?.name||"TOKO PUTRI").trim(),d=B(p.store?.address||"").trim(),l=B(p.store?.wa||"").trim(),m=Math.floor(s/2);i.length<=m?(r.align("center").bold(!0).size("title").line(i.toUpperCase(),"center"),r.size("normal").bold(!1)):(r.align("center").bold(!0).size("tall"),O(i.toUpperCase(),s).forEach(M=>r.line(M,"center")),r.size("normal").bold(!1)),d&&O(d,s).forEach(M=>r.line(M,"center")),l&&r.line(`WA: ${l}`,"center"),r.separator("-");const f=o?a?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":a?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **";r.bold(!0).line(f,"center").bold(!1),r.separator("-");const u=ee(e.startTime,o),h=ee(e.endTime||Date.now(),o);r.twoColumn("Shift ID",`#${e.shiftNo||e.id||"-"}`,!1,!0),r.twoColumn("Kasir",(e.cashierName||"Kasir").substring(0,o?20:12),!1,!0),r.twoColumn("Mulai",u,!1,!0),r.twoColumn("Selesai",h,!1,!0),r.separator("-");const w=parseFloat(e.startingCash)||0,T=parseFloat(e.cashSales)||0,R=parseFloat(e.qrisSales)||0,N=parseFloat(e.bankSales||e.transferSales)||0,C=parseFloat(e.tempoSales)||0,$=parseFloat(e.totalSales)||T+R+N+C,x=e.txCount||0;if(r.bold(!0).line("RINGKASAN PENJUALAN","left").bold(!1),r.twoColumn("Modal Awal Laci",S(w)),r.twoColumn("Penjualan Tunai",S(T)),R>0&&r.twoColumn("Penjualan QRIS",S(R)),N>0&&r.twoColumn("Penjualan Transfer",S(N)),C>0&&r.twoColumn("Penjualan Tempo",S(C)),r.separator("-"),r.twoColumn("Total Transaksi",`${x} Trx`),r.bold(!0).size("tall").twoColumn("TOTAL OMSET",S($)).size("normal").bold(!1),r.doubleSeparator(),!a){const M=w+T,v=e.actualCash!==void 0?parseFloat(e.actualCash):M,I=v-M,E=I===0?"PAS (0)":I>0?`+${S(I)}`:`-${S(Math.abs(I))}`;r.bold(!0).line("REKONSILIASI KAS FISIK","left").bold(!1),r.twoColumn("Kas Diharapkan",S(M)),r.twoColumn("Kas Fisik Aktual",S(v)),r.bold(!0).twoColumn("Selisih Kas",E,!0).bold(!1),e.closingNotes&&O(`Catatan: ${e.closingNotes}`,s).forEach(G=>r.line(G,"left")),r.separator("-"),r.line("Verifikasi & Tanda Tangan:","left"),r.feed(2);const K=Math.floor(s/2),W="( Kasir )",g=o?"( Supervisor/Owner )":"( Supervisor )",y=Math.max(0,Math.floor((K-W.length)/2)),A=Math.max(0,Math.floor((K-g.length)/2)),U=" ".repeat(y)+W+" ".repeat(Math.max(1,K-y-W.length))+" ".repeat(A)+g;r.line(U,"left"),r.separator("-")}const D=n.footerText||"Laporan Kasir Resmi Toko Putri";return O(D,s).forEach(M=>r.line(M,"center")),r.feed(n.feedLines||3),n.autoCut&&r.cut(),{base64:r.toBase64(),plainText:r.toPlainText()}},gt=(e,a=null)=>{const t=a||H(),n=ne(t.paperSize),s=n>=40,o=new be(n);o.init();const r=B(t.headerText||p.store?.name||"TOKO PUTRI").trim(),i=B(p.store?.address||"").trim(),d=B(p.store?.wa||"").trim(),l=Math.floor(n/2);r.length<=l?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),O(r.toUpperCase(),n).forEach(x=>o.line(x,"center")),o.size("normal").bold(!1)),i&&O(i,n).forEach(x=>o.line(x,"center")),d&&o.line(`WA: ${d}`,"center");const m=e.payment?.taxNpwp||p.store?.taxNpwp;m&&o.line(`NPWP: ${m}`,"center"),o.separator("-");const f=ee(e.dateString||e.dateMs||Date.now(),s);o.twoColumn(`Order: #${e.orderId}`,f,!1,!0);const u=(e.customer?.name||"Guest").substring(0,s?18:11),h=e.customer?.deliveryMethod==="delivery"?"Kirim":"Ambil";o.twoColumn(`Plg  : ${u}`,`Tipe: ${h}`,!1,!0),e.customer?.phone&&o.line(`HP   : ${e.customer.phone}`,"left"),e.customer?.note&&O(`Cat  : ${e.customer.note}`,n).forEach(x=>o.line(x,"left")),o.separator("-");const w=Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[];w.length>0?w.forEach(x=>{o.itemRow(x)}):o.line("- Tidak ada rincian barang -","center"),o.separator("-");const T=w.reduce((x,D)=>x+parseFloat(D.qty||1)*(parseFloat(D.effectivePrice||D.price)||0),0),R=e.payment&&e.payment.subtotal!==void 0?e.payment.subtotal:T||e.total||0,N=e.payment&&e.payment.shippingCost!==void 0?e.payment.shippingCost:0,C=e.payment&&e.payment.grandTotal!==void 0?e.payment.grandTotal:e.total||R+N;if(o.twoColumn("Subtotal",S(R)),(e.customer?.deliveryMethod==="delivery"||e.deliveryMethod==="delivery")&&o.twoColumn("Ongkos Kirim",S(N)),e.payment?.productDiscount&&o.twoColumn("Potongan Harga",`- ${S(e.payment.productDiscount)}`),e.payment?.shippingDiscount&&o.twoColumn("Potongan Ongkir",`- ${S(e.payment.shippingDiscount)}`),(e.payment?.ppnEnabled||e.payment?.ppnShowZero||e.payment?.ppnRate===0||e.payment?.ppnAmount&&e.payment.ppnAmount>0)&&(p.store?.ppnEnabled||e.payment?.ppnEnabled)){const x=e.payment?.ppnType==="inclusive",D=e.payment?.ppnRate!==void 0?e.payment.ppnRate:p.store?.ppnRate||0,M=e.payment?.ppnAmount||0,v=e.payment?.ppnLabel||`${x?"Inc. PPN":"PPN"} (${D}%)`,I=M>0?`${x?"":"+ "}${S(M)}`:"Rp 0";o.twoColumn(v,I)}return o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL",S(C)).size("normal").bold(!1),o.doubleSeparator(),o.twoColumn("Metode Bayar",(e.payment?.method||"Tunai").toUpperCase()),t.showPoints&&(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(o.separator("-"),e.pointsEarned>0&&o.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),e.finalMemberPoints!==void 0&&o.twoColumn("Saldo Poin",`${e.finalMemberPoints} Poin`)),t.showBarcode&&(o.separator("-"),o.align("center"),o.line(`*ORDER-${e.orderId}*`,"center"),o.line("(SCAN DI KASIR)","center")),o.separator("-"),O(t.footerText||"Terima Kasih Atas Kunjungan Anda!",n).forEach(x=>o.line(x,"center")),o.feed(t.feedLines||3),t.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText()}},xt=(e,a=null)=>{const t=a||H(),n=ne(t.paperSize),s=n>=40,o=new be(n);o.init();const r=B(t.headerText||p.store?.name||"TOKO PUTRI").trim(),i=B(p.store?.address||"").trim(),d=B(p.store?.wa||"").trim(),l=Math.floor(n/2);r.length<=l?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),O(r.toUpperCase(),n).forEach(y=>o.line(y,"center")),o.size("normal").bold(!1)),i&&O(i,n).forEach(y=>o.line(y,"center")),d&&o.line(`WA: ${d}`,"center"),o.separator("-");const m=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",f=e.payment?.paymentStatus==="lunas"||parseFloat(e.payment?.tempoBalance||0)<=0,u=s?m?f?"*** NOTA PUTRI PAYLATER (LUNAS) ***":"*** NOTA TAGIHAN PUTRI PAYLATER ***":f?"*** NOTA TEMPO (LUNAS) ***":"*** NOTA TAGIHAN TEMPO (PIUTANG) ***":m?f?"** PAYLATER (LUNAS) **":"** NOTA PUTRI PAYLATER **":f?"** NOTA TEMPO (LUNAS) **":"** NOTA TAGIHAN TEMPO **";o.bold(!0).line(u,"center").bold(!1),o.separator("-");const h=ee(e.dateString||e.timestamp||Date.now(),s);o.twoColumn(`Order: #${e.orderId}`,h,!1,!0);const w=(e.customer?.name||"Pelanggan").substring(0,s?18:11);o.twoColumn(`Plg  : ${w}`,m?"Tipe: PayLater":"Tipe: Tempo",!1,!0),(e.customer?.phone||e.customer?.wa)&&o.line(`HP   : ${e.customer.wa||e.customer.phone}`,"left");let T=parseFloat(e.payment?.tempoBalance)||0,R=e.payment?.tempoPenaltyRate!==void 0?parseFloat(e.payment.tempoPenaltyRate):1,N=e.payment?.tempoPenaltyStopped===!0,C=0,$=e.payment?.tempoDueDate||0,x=0,D=0,M=!1,v=!1;const I=Date.now();$>0&&(I>$?(x=Math.floor((I-$)/(24*60*60*1e3)),x>0&&(M=!0)):(D=Math.ceil(($-I)/(24*60*60*1e3)),D<=3&&(v=!0))),N?C=parseFloat(e.payment?.tempoFixedPenalty)||0:M&&(C=R/100*T*x);let E=T+C;const K=e.payment?.installments||[],W=K.reduce((y,A)=>y+(parseFloat(A.amount)||0),0),g=e.payment?.grandTotal||T+W;if($>0){const y=ee($,s);let A="";f?A="LUNAS":M?A=`Telat ${x} Hari`:v?A=`H-${D<=0?0:D}`:A=`Sisa ${D} Hari`,o.twoColumn(`J.Tmp: ${y}`,A,!1,!0)}return o.separator("-"),(e.items||[]).forEach(y=>{o.itemRow(y)}),o.separator("-"),o.twoColumn("Total Transaksi",S(g)),K.length>0&&(o.separator("-"),o.bold(!0).line("HISTORI PEMBAYARAN CICILAN:","left").bold(!1),K.forEach((y,A)=>{const U=ee(y.date,s);o.twoColumn(`${A+1}. ${U}`,S(y.amount))}),o.twoColumn("Total Terbayar",S(W),!0)),o.twoColumn("Sisa Pokok",S(T)),C>0&&o.twoColumn(`Denda (${x} Hari)`,`+ ${S(C)}`),o.doubleSeparator(),o.bold(!0).size("tall").twoColumn(m?"TAGIHAN PAYLATER":"SISA TAGIHAN",S(f?0:E)).size("normal").bold(!1),o.doubleSeparator(),!f&&p.banks&&p.banks.length>0&&(o.line("REKENING TRANSFER RESMI:","left"),(p.banks||[]).forEach(y=>{o.line(`${y.bank||y.bankName||"Bank"}: ${y.number||y.bankAccount||"-"}`,"left"),o.line(`a/n ${y.name||y.bankOwner||"-"}`,"left")}),o.separator("-")),t.showBarcode&&(o.separator("-"),o.align("center"),o.line(m?`*PAYLATER-${e.orderId}*`:`*TEMPO-${e.orderId}*`,"center"),o.line(m?"(PUTRI PAYLATER RESMI)":"(NOTA TEMPO RESMI)","center")),o.separator("-"),O(t.footerText||"Terima Kasih Atas Kerja Sama & Kepercayaannya!",n).forEach(y=>o.line(y,"center")),o.feed(t.feedLines||3),t.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText()}},ht=(e=null)=>{const a=e||H(),t=ne(a.paperSize),n=t>=40,s=new be(t);s.init();const o=B(a.headerText||p.store?.name||"TOKO PUTRI").trim(),r=Math.floor(t/2);o.length<=r?(s.align("center").bold(!0).size("title").line(o.toUpperCase(),"center"),s.size("normal").bold(!1)):(s.align("center").bold(!0).size("tall"),O(o.toUpperCase(),t).forEach(u=>s.line(u,"center")),s.size("normal").bold(!1));const i=B(p.store?.wa||"").trim();i&&s.line(`WA: ${i}`,"center"),s.separator("-");const d=n?`*** UJI COBA CETAK STRUK THERMAL ${t} KOLOM ***`:`** UJI CETAK THERMAL ${t} KOLOM **`;s.bold(!0).line(d,"center").bold(!1),s.separator("-"),s.line("MISTAR KALIBRASI TEPI KERTAS:","left");let l="";for(let u=1;u<=t;u++)l+=String(u%10);s.line(l,"left");let m="";for(let u=1;u<=t;u++)u===t||u%10===0?m+="|":u%5===0?m+=":":m+=".";s.line(m,"left"),s.line(`(Pastikan angka ${t%10} paling kanan tercetak utuh)`,"left"),s.separator("-");const f=ee(Date.now(),n);return s.line(`Waktu   : ${f}`,"left"),s.line(`Format  : Thermal ${t} Kolom (${a.paperSize})`,"left"),s.line("Driver  : RAWBT FREE PRINT SERVICE","left"),s.line("Status  : 100% PRESISI & SIAP PAKAI","left"),s.separator("-"),s.bold(!0).twoColumn("ITEM SIMULASI","HARGA").bold(!1),s.itemRow({name:"Kertas Thermal Kasir Roll",qty:2,unit:"roll",price:15e3,subtotal:3e4}),s.itemRow({name:"Semen Portland Komposit 40kg",qty:1,unit:"sak",price:65e3,subtotal:65e3}),s.separator("-"),s.twoColumn("Subtotal",S(95e3)),s.twoColumn("Diskon Uji Coba",`- ${S(5e3)}`),s.doubleSeparator(),s.bold(!0).size("tall").twoColumn("TOTAL TES",S(9e4)).size("normal").bold(!1),s.doubleSeparator(),s.twoColumn("Bayar Tunai",S(1e5)),s.bold(!0).twoColumn("Kembalian",S(1e4)).bold(!1),a.showPoints&&(s.separator("-"),s.twoColumn("Simulasi Poin Member","+10 Poin")),a.showBarcode&&(s.separator("-"),s.align("center"),s.line(`*TEST-RAWBT-${Date.now().toString().slice(-6)}*`,"center"),s.line("(BARCODE TEST BERHASIL)","center")),s.separator("-"),O(a.footerText||"Terima kasih atas kunjungan Anda!",t).forEach(u=>s.line(u,"center")),O("Hasil cetak telah terkalibrasi presisi.",t).forEach(u=>s.line(u,"center")),s.feed(a.feedLines||3),a.autoCut&&s.cut(),{base64:s.toBase64(),plainText:s.toPlainText()}},qa=e=>{if(!e){J("Data transaksi kasir tidak ditemukan.","warning");return}const a=H(),t=wt(e,a);document.getElementById("pos-success-modal")?.remove(),document.getElementById("pos-receipt-fallback-modal")?.remove(),ge(t.base64,t.plainText)},Wa=(e,a=!1)=>{if(!e){J("Data shift tidak ditemukan.","warning");return}const t=H(),n=bt(e,a,t);document.getElementById("pos-shift-receipt-modal")?.remove(),ge(n.base64,n.plainText)},Ga=async(e=null)=>{const a=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||ie,t=String(a||"").replace(/^#/,"").trim(),n=i=>{if(!i)return!1;const d=String(i.orderId||"").replace(/^#/,"").trim();return t?d===t||d.endsWith(t)||t.endsWith(d):!0};let s=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(s=e),(!s||!s.items||s.items.length===0)&&n(window.currentCustomerOrder)&&(s=window.currentCustomerOrder),(!s||!s.items||s.items.length===0)&&n(window.lastPrintedOrder)&&(s=window.lastPrintedOrder),(!s||!s.items||s.items.length===0)&&(le||[]).length>0){const i=le.find(n);i&&Array.isArray(i.items)&&i.items.length>0&&(s=i)}if((!s||!s.items||s.items.length===0)&&Array.isArray(L)){const i=L.find(n);i&&Array.isArray(i.items)&&i.items.length>0&&(s=i)}if((!s||!s.items||s.items.length===0)&&t)try{const i=typeof Z<"u"&&Z?Z:window.db;if(i){let d=await i.collection("freshmart_orders").doc(t).get();if(!d.exists&&!t.startsWith("ORD-")){const l=await i.collection("freshmart_orders").doc("ORD-"+t).get();l.exists&&(d=l)}if(d&&d.exists&&(s=d.data(),s.orderId=s.orderId||d.id,window.currentCustomerOrder=s,window.lastPrintedOrder=s,Array.isArray(L))){const l=L.findIndex(n);if(l!==-1){L[l].items=s.items||[],L[l].payment=s.payment||{},L[l].customer=s.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(L))}catch{}}}}}catch(i){console.warn("[RawBT] Gagal fetch order detail from Firestore:",i)}if(!s&&Array.isArray(L)&&(s=L.find(n)),!s){J("Data pesanan tidak ditemukan.","warning");return}window.lastPrintedOrder=s;const o=H(),r=gt(s,o);typeof window.closeReceiptPreviewModal=="function"&&window.closeReceiptPreviewModal(),ge(r.base64,r.plainText)},Va=(e=null)=>{const a=e||ie;let n=(window.cachedPiutangOrders||[]).find(r=>String(r.orderId)===String(a))||(le||[]).find(r=>String(r.orderId)===String(a));if(!n&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(a)&&(n=window.lastPrintedOrder),!n){J("Data nota piutang tidak ditemukan.","warning");return}const s=H(),o=xt(n,s);typeof window.closeReceiptPreviewModal=="function"&&window.closeReceiptPreviewModal(),ge(o.base64,o.plainText)},Ya=()=>{const e=H(),a=ht(e);ge(a.base64,a.plainText)};window.cleanLineAscii=B;window.wrapWords=O;window.formatTwoColumn=mt;window.formatCompactDate=ee;window.EscPosBuilder=be;window.sendToRawBT=ge;window.renderThermalDOMAndPrint=He;window.openRawBTApp=za;window.buildPOSReceiptPayload=wt;window.buildShiftReceiptPayload=bt;window.buildOrderReceiptPayload=gt;window.buildTempoReceiptPayload=xt;window.buildTestReceiptPayload=ht;window.printPOSReceiptDirect=qa;window.printShiftSettlementDirect=Wa;window.printCustomerReceiptDirect=Ga;window.printTempoReceiptDirect=Va;window.executeRawBTTestPrint=Ya;const Ke=async(e=null)=>{e&&typeof We=="function"&&We(e);const a=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||ie,t=String(a||"").replace(/^#/,"").trim(),n=g=>{if(!g)return!1;const y=String(g.orderId||"").replace(/^#/,"").trim();return t?y===t||y.endsWith(t)||t.endsWith(y):!0};let s=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(s=e),(!s||!s.items||s.items.length===0)&&n(window.currentCustomerOrder)&&(s=window.currentCustomerOrder),(!s||!s.items||s.items.length===0)&&n(window.lastPrintedOrder)&&(s=window.lastPrintedOrder),(!s||!s.items||s.items.length===0)&&(le||[]).length>0){const g=le.find(n);g&&Array.isArray(g.items)&&g.items.length>0&&(s=g)}if((!s||!s.items||s.items.length===0)&&Array.isArray(L)){const g=L.find(n);g&&Array.isArray(g.items)&&g.items.length>0&&(s=g)}if((!s||!s.items||s.items.length===0)&&t)try{const g=typeof Z<"u"&&Z?Z:window.db;if(g){let y=await g.collection("freshmart_orders").doc(t).get();if(!y.exists&&!t.startsWith("ORD-")){const A=await g.collection("freshmart_orders").doc("ORD-"+t).get();A.exists&&(y=A)}if(y&&y.exists&&(s=y.data(),s.orderId=s.orderId||y.id,window.currentCustomerOrder=s,window.lastPrintedOrder=s,Array.isArray(L))){const A=L.findIndex(n);if(A!==-1){L[A].items=s.items||[],L[A].payment=s.payment||{},L[A].customer=s.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(L))}catch{}}}}}catch(g){console.warn("[Receipt] Gagal fetch order detail from Firestore:",g)}if(!s&&Array.isArray(L)&&(s=L.find(n)),!s)return;window.lastPrintedOrder=s;const o=typeof H=="function"?H():{paperSize:"58mm",showPoints:!0,showBarcode:!0},r=ne(o.paperSize),i=r>=40,d=ee(s.dateString||s.date||Date.now(),i),l=o.headerText||p.store.name||"Toko Putri",m=p.store.wa||"",f=(g,y,A=r)=>{const U=String(g||""),G=String(y||""),P=A-U.length-G.length;return U+(P>0?" ".repeat(P):" ")+G},u=Array.isArray(s.items)?s.items:Array.isArray(s.cart)?s.cart:[],h=u.reduce((g,y)=>g+parseFloat(y.qty||1)*(parseFloat(y.effectivePrice||y.price)||0),0),w=s.payment&&s.payment.subtotal!==void 0?s.payment.subtotal:h||s.total||0,T=s.payment&&s.payment.shippingCost!==void 0?s.payment.shippingCost:0,R=s.payment&&s.payment.grandTotal!==void 0?s.payment.grandTotal:s.total||w+T,N=String(s.payment?.method||s.method||"Tunai").toUpperCase(),C=s.customer?.name||s.customerName||"Guest",$=s.customer?.deliveryMethod==="delivery"||s.deliveryMethod==="delivery";let x=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${c(l)}</div>`;m&&(x+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${c(m)}</div>`);const D=s.payment?.taxNpwp||p.store?.taxNpwp;if(D&&(x+=`<div class="text-center" style="font-size:10px;font-family:monospace;margin-bottom:4px;">NPWP: ${c(D)}</div>`),x+='<div class="border-b border-dashed border-black my-2"></div>',x+=`<div style="white-space:pre;font-family:monospace;">${f(`Order: #${s.orderId}`,d,r)}</div>`,x+=`<div style="white-space:pre;font-family:monospace;">${f(`Plg  : ${c(C).substring(0,i?18:10)}`,`Tipe: ${$?"Kirim":"Ambil"}`,r)}</div>`,(s.customer?.phone||s.customerPhone)&&(x+=`<div style="white-space:pre;font-family:monospace;">HP   : ${c(s.customer?.phone||s.customerPhone)}</div>`),x+='<div class="border-b border-dashed border-black my-2"></div>',s.customer?.note&&(x+=`<div style="white-space:pre-wrap;word-break:break-word;">Cat: ${c(s.customer.note)}</div><div class="border-b border-dashed border-black my-2"></div>`),u.length>0?u.forEach(g=>{let y=g.variantName?` (${c(g.variantName)}${g.colorCode?" "+c(g.colorCode):""})`:"";const A=c(g.name||"Barang")+y+(g.poTime?" [PO]":""),U=g.effectivePrice||g.price||0,G=`  ${parseFloat(g.qty||1)} ${c(g.unit||"pcs")} x ${Math.round(U).toLocaleString("id-ID")}`,P=(parseFloat(g.qty||1)*U).toLocaleString("id-ID");x+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;">${A}</div><div style="white-space:pre;font-family:monospace;font-size:11px;">${f(G,P,r)}</div>`,g.poTime&&(x+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">  * Estimasi PO: ${c(g.poTime)}</div>`)}):x+='<div style="white-space:pre;font-style:italic;color:#64748b;text-align:center;padding:4px 0;">- Tidak ada rincian barang -</div>',x+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-family:monospace;">${f("Subtotal",w.toLocaleString("id-ID"),r)}</div>`,$&&(x+=`<div style="white-space:pre;font-family:monospace;">${f("Ongkir",T.toLocaleString("id-ID"),r)}</div>`),s.payment?.shippingDiscount&&(x+=`<div style="white-space:pre;font-family:monospace;">${f("Pot.Ongkir",`-${s.payment.shippingDiscount.toLocaleString("id-ID")}`,r)}</div>`),s.payment?.productDiscount&&(x+=`<div style="white-space:pre;font-family:monospace;">${f("Pot.Harga",`-${s.payment.productDiscount.toLocaleString("id-ID")}`,r)}</div>`),(s.payment?.ppnEnabled||s.payment?.ppnShowZero||s.payment?.ppnRate===0||s.payment?.ppnAmount&&s.payment.ppnAmount>0)&&(p.store?.ppnEnabled||s.payment?.ppnEnabled)){const g=s.payment?.ppnType==="inclusive",y=s.payment?.ppnRate!==void 0?s.payment.ppnRate:p.store?.ppnRate||0,A=s.payment?.ppnAmount||0,U=s.payment?.ppnLabel||`${g?"Inc. PPN":"PPN"} (${y}%)`,G=A>0?`${g?"":"+"}${A.toLocaleString("id-ID")}`:"0";x+=`<div style="white-space:pre;font-family:monospace;">${f(U,G,r)}</div>`}x+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-family:monospace;font-weight:bold;font-size:12px;">${f("TOTAL","Rp "+R.toLocaleString("id-ID"),r)}</div><div style="white-space:pre;font-family:monospace;">${f("Metode Bayar",N,r)}</div>`,o.showPoints&&(s.pointsEarned>0||s.finalMemberPoints!==void 0)&&(x+='<div class="border-b border-dashed border-black my-2"></div>',s.pointsEarned>0&&(x+=`<div style="white-space:pre;font-family:monospace;">${f("Poin Didapat","+"+s.pointsEarned+" Poin",r)}</div>`),s.finalMemberPoints!==void 0&&s.finalMemberPoints!==null&&(x+=`<div style="white-space:pre;font-family:monospace;font-weight:bold;">${f("Saldo Poin",String(s.finalMemberPoints)+" Poin",r)}</div>`),s.claimedReward&&(x+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;margin-top:2px;">HADIAH: ${c(s.claimedReward.name)}</div>`)),u.some(g=>g&&g.poTime&&g.poTime!=="")&&(x+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),o.showBarcode&&(x+=`<div class="border-b border-dashed border-black my-2"></div><div style="text-align:center;margin:4px 0;"><div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*ORDER-${c(s.orderId)}*</div><div style="font-size:8px;color:#666;">SCAN DI KASIR</div></div>`),x+=`<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${c(o.footerText||"Terima Kasih Atas Kunjungan Anda")}</div><div class="border-b border-dashed border-black my-2"></div><div style="height:15px;"></div>`,te("receipt-paper-content",x);const I=b("receipt-paper-content");I&&(I.style.width=i?"340px":"260px");const E=b("receipt-preview-modal-box");E&&(E.classList.remove("max-w-[320px]","max-w-[400px]"),E.classList.add(i?"max-w-[400px]":"max-w-[320px]"));const K=b("receipt-preview-modal"),W=b("receipt-preview-modal-box");K&&K.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),Se(K,W)},Ja=(e=!1)=>{const a=b("receipt-preview-modal"),t=b("receipt-preview-modal-box");a&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{de(a,t)}):de(a,t))},Qa=()=>{const e=ie||(window.lastPrintedOrder?window.lastPrintedOrder.orderId:null);if(typeof window.printCustomerReceiptDirect=="function"){window.printCustomerReceiptDirect(e);return}if(!((le||[]).find(n=>n.orderId===ie)||(Array.isArray(L)?L.find(n=>n.orderId===ie):null)||window.lastPrintedOrder))return;const t=b("receipt-paper-content")?b("receipt-paper-content").innerHTML:"";He(t)};window.openReceiptPreview=Ke;window.openCustomerReceiptPreview=(e,a=!1)=>{const t=typeof H=="function"?H():{};if((a||t.directPrint)&&typeof window.printCustomerReceiptDirect=="function"){window.printCustomerReceiptDirect(e);return}Ke(e)};window.closeReceiptPreviewModal=Ja;window.executePrintReceipt=Qa;window.checkProPrint=()=>{Ke()};const z={OWNER:"owner",ADMIN:"admin",CASHIER:"cashier"},Za=[{key:"orders",label:"Pesanan Online",desc:"Proses status pesanan, update resi pengiriman & konfirmasi bayar",group:"operasional",icon:"fa-receipt"},{key:"products",label:"Katalog Produk & Stok",desc:"Tambah/edit produk, atur varian, dan perbarui stok barang",group:"operasional",icon:"fa-box-open"},{key:"suppliers",label:"Supplier & Rekanan",desc:"Kelola master data supplier, kontak kulakan, dan asal produk",group:"operasional",icon:"fa-truck-field"},{key:"purchases",label:"Order Kulakan (PO)",desc:"Buat PO pembelian grosir, terima restock, & kelola hutang rekanan",group:"operasional",icon:"fa-cart-flatbed"},{key:"piutang",label:"Piutang Tempo & Cicilan",desc:"Kelola nota piutang pelanggan, denda keterlambatan, & cicilan",group:"operasional",icon:"fa-clock-rotate-left"},{key:"customers",label:"Database Pelanggan",desc:"Lihat daftar member, atur limit kredit PayLater, & mutasi poin",group:"operasional",icon:"fa-address-book"},{key:"pos",label:"Kasir POS",desc:"Akses antarmuka penjualan kasir toko fisik dan shift kasir",group:"operasional",icon:"fa-cash-register"},{key:"expenses",label:"Biaya Operasional Toko",desc:"Buku kas pengeluaran operasional toko harian & nota kas",group:"operasional",icon:"fa-money-bill-transfer"},{key:"stock_opname",label:"Stock Opname (Audit Fisik)",desc:"Audit stok fisik rak/gudang, rekonsiliasi selisih & terapkan penyesuaian stok",group:"operasional",icon:"fa-clipboard-check"},{key:"categories",label:"Kategori Produk",desc:"Tambah dan susun kategori etalase produk",group:"konten",icon:"fa-tags"},{key:"brands",label:"Merek Produk",desc:"Kelola daftar brand dagang barang",group:"konten",icon:"fa-copyright"},{key:"colors",label:"Database Warna",desc:"Katalog warna produk dan swatch varian",group:"konten",icon:"fa-swatchbook"},{key:"vouchers",label:"Voucher & Promo",desc:"Buat kode voucher diskon dan promo belanja",group:"konten",icon:"fa-ticket-simple"},{key:"banners",label:"Banner Promosi",desc:"Kelola gambar dan video slider beranda toko",group:"konten",icon:"fa-images"},{key:"rewards",label:"Program Hadiah Poin",desc:"Kelola katalog hadiah penukaran poin member",group:"konten",icon:"fa-gift"},{key:"reviews",label:"Ulasan Pelanggan",desc:"Moderasi ulasan dan testimoni produk pembeli",group:"konten",icon:"fa-star"},{key:"faqs",label:"Tanya Jawab / Q&A",desc:"Kelola jawaban pertanyaan umum pembeli",group:"konten",icon:"fa-circle-question"},{key:"changelog",label:"Log Pembaruan Sistem",desc:"Melihat riwayat update sistem toko",group:"konten",icon:"fa-code-branch"},{key:"reports",label:"Pusat Laporan & Keuangan",desc:"Laporan terpadu penjualan, stok, laba rugi, utang piutang, dan perpajakan",group:"sensitif",icon:"fa-chart-pie"},{key:"view_reports",label:"Laporan Finansial & Laba",desc:"Lihat omset, total HPP terjual, margin & laba bersih toko",group:"sensitif",icon:"fa-chart-line"},{key:"tax",label:"Pajak & Keuangan (PPN)",desc:"Laporan PPN, neraca keuangan, dan laba rugi resmi",group:"sensitif",icon:"fa-file-invoice-dollar"},{key:"banks",label:"Rekening Bank & QRIS",desc:"Ubah nomor rekening toko dan QRIS tujuan pembayaran",group:"sensitif",icon:"fa-building-columns"},{key:"settings",label:"Pengaturan Utama Toko",desc:"Konfigurasi nama toko, GPS maps, tarif ongkir, & sistem",group:"sensitif",icon:"fa-gear"},{key:"cashiers",label:"Kelola Staf & Hak Akses",desc:"Daftarkan staf baru, atur jabatan, & ubah batasan hak akses",group:"sensitif",icon:"fa-users-gear"},{key:"backup_sync",label:"Pusat Data & Backup Cloud",desc:"Cadangkan data toko, ekspor database, & sinkronisasi cloud",group:"sensitif",icon:"fa-cloud-arrow-up"}],Ne={[z.CASHIER]:{pos:!0,orders:!1,products:!1,suppliers:!1,purchases:!1,piutang:!1,customers:!1,categories:!1,brands:!1,colors:!1,vouchers:!1,banners:!1,rewards:!1,reviews:!1,faqs:!1,changelog:!1,expenses:!1,stock_opname:!1,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[z.ADMIN]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},manager:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!0,view_reports:!0,tax:!0,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[z.OWNER]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,reports:!0,view_reports:!0,tax:!0,banks:!0,settings:!0,cashiers:!0,backup_sync:!0}};let fe=null;const xe=()=>{if(fe)return fe;try{const e=sessionStorage.getItem("freshmart_staff_profile");if(e)return fe=JSON.parse(e),fe}catch{}return null},Xa=e=>{fe=e;try{e?sessionStorage.setItem("freshmart_staff_profile",JSON.stringify(e)):sessionStorage.removeItem("freshmart_staff_profile")}catch{}},es=()=>{fe=null;try{sessionStorage.removeItem("freshmart_staff_profile")}catch{}},Ue=()=>{try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const n=JSON.parse(t),s=String(n.role||"").toLowerCase();if(s==="cashier"||s==="kasir"||s==="staff")return!1;if(s==="owner"||n.uid===X)return!0}}catch{}const e=xe();if(e){const t=String(e.role||"").toLowerCase();if(t==="cashier"||t==="kasir"||t==="staff")return!1;if(t==="owner"||e.uid===X)return!0}const a=Te.currentUser;return!!(a&&a.uid===X)},ts=()=>{if(yt())return!1;if(Ue())return!0;const e=xe();return e?.role===z.ADMIN||String(e?.role||"").toLowerCase()==="admin"},yt=()=>{try{const a=sessionStorage.getItem("pos_cashier_session");if(a){const t=JSON.parse(a),n=String(t.role||"").toLowerCase();if(n==="owner"||t.uid===X)return!1;if(n==="cashier"||n==="kasir"||n==="staff")return!0}}catch{}const e=xe();if(e){const a=String(e.role||"").toLowerCase();if(a==="owner"||e.uid===X)return!1;if(a==="cashier"||a==="kasir")return!0}return!1},vt=e=>{try{const s=sessionStorage.getItem("pos_cashier_session");if(s){const o=JSON.parse(s),r=String(o.role||"").toLowerCase();if(r===z.OWNER||r==="owner"||o.uid===X)return!0;if(r===z.CASHIER||r==="cashier"||r==="kasir")return e==="pos"}}catch{}if(Ue())return!0;const a=xe();if(!a)return window.isAdm||window.__localIsAdm?["banks","settings","cashiers","backup_sync"].includes(e)?Te.currentUser?.uid===X:!0:!1;if(a.isActive===!1)return!1;const t=String(a.role||"").toLowerCase();if(t===z.CASHIER||t==="cashier"||t==="kasir")return e==="pos";if(a.permissions){if(typeof a.permissions[e]<"u")return a.permissions[e]===!0;if(e==="reports"&&(a.permissions.view_reports===!0||a.permissions.tax===!0)||(e==="view_reports"||e==="tax")&&a.permissions.reports===!0)return!0}return(Ne[a.role]||Ne[z.ADMIN])[e]===!0},Oe=()=>{try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const n=JSON.parse(t),s=String(n.role||"").toLowerCase();return s===z.OWNER||s==="owner"||n.uid===X?!0:(s===z.CASHIER||s==="cashier"||s==="kasir"||s==="staff",!1)}}catch{}const e=xe();if(e){const t=String(e.role||"").toLowerCase();return t===z.OWNER||t==="owner"||e.uid===X?!0:t===z.CASHIER||t==="cashier"||t==="kasir"?!1:vt("view_reports")}const a=Te.currentUser;return!!(a&&a.uid===X||window.isAdm||window.__localIsAdm)},as=e=>{switch(e){case z.OWNER:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-2xs">
                <i class="fa-solid fa-crown text-[9px] text-amber-500"></i>
                <span>Owner</span>
            </span>`;case z.ADMIN:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shadow-2xs">
                <i class="fa-solid fa-shield-halved text-[9px]"></i>
                <span>Admin Toko</span>
            </span>`;case z.CASHIER:default:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                <i class="fa-solid fa-cash-register text-[9px]"></i>
                <span>Kasir POS</span>
            </span>`}};typeof window<"u"&&(window.ROLES=z,window.PERMISSION_DEFINITIONS=Za,window.ROLE_PRESETS=Ne,window.getActiveStaff=xe,window.setActiveStaff=Xa,window.clearActiveStaff=es,window.isOwnerUser=Ue,window.isAdminUser=ts,window.isCashierUser=yt,window.hasPermission=vt,window.canViewHpp=Oe,window.getRoleBadgeHtml=as);let je="invoice";const ss=(e,a=null)=>{if(je=e,e==="po"){const i=p.purchases||[],d=i.find(w=>String(w.id)===String(a))||(window.currentActivePoId?i.find(w=>String(w.id)===String(window.currentActivePoId)):i[0]);if(!d){typeof window.showToast=="function"&&window.showToast("Data PO tidak ditemukan!");return}Y("doc-modal-title","Preview Purchase Order (PO)");let l="";p.store.logo&&(p.store.logo.includes("http")||p.store.logo.includes("data:"))?l=`<img loading="eager" src="${c(p.store.logo)}" class="w-16 h-16 object-contain">`:l='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';const m=w=>{if(!w)return"-";try{return(w.toDate?w.toDate():new Date(w)).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})}catch{return"-"}},f=w=>{const T=parseFloat(w);return isNaN(T)?"0":Number.isInteger(T)?String(T):T.toFixed(2).replace(/\.?0+$/,"")},u=d.paymentType==="tempo"?`Tempo ${d.tempoDays||14} Hari (Jatuh Tempo: ${m(d.tempoDueDate)})`:d.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai";let h=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
            <div class="flex items-center gap-4">
                ${l}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${c(p.store.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${c(p.store.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${c(p.store.address||"Alamat fisik toko belum diatur.")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${c(p.store.wa||p.store.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-3xl tracking-widest text-slate-900 uppercase">PURCHASE ORDER</h2>
                <p class="text-sm font-bold text-slate-600 mt-2 font-mono">#${c(d.poNumber||d.id)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${m(d.date||d.createdAt)}</p>
                <p class="text-xs font-bold mt-1 text-[var(--color-primary)]">Status: ${d.status==="ordered"?"DIPESAN":d.status==="received"?"DITERIMA":"SELESAI"}</p>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-8 mb-8">
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Kepada Rekanan / Supplier:</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${c(d.supplierName||"Supplier")}</p>
                ${d.supplierPhone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${c(d.supplierPhone)}</p>`:""}
                ${d.supplierAddress?`<p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${c(d.supplierAddress)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ketentuan & Pembayaran:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1.5"><span class="text-slate-500">Termin Pembayaran:</span> <b class="text-slate-900">${u}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1.5"><span class="text-slate-500">Tujuan Pengiriman:</span> <b class="text-slate-900">${c(p.store.name||"Gudang Utama Toko")}</b></p>
                ${d.notes?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-2"><i class="fa-solid fa-note-sticky mr-1"></i> ${c(d.notes)}</p>`:""}
            </div>
        </div>

        <table class="w-full text-left border-collapse mb-8">
            <thead>
                <tr class="border-b-2 border-slate-800 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-900 text-white">
                    <th class="py-3 px-4 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
                    <th class="py-3 px-4 border-r border-slate-700">Nama Barang & Spesifikasi</th>
                    <th class="py-3 px-4 text-center w-28 border-r border-slate-700">Kuantitas</th>
                    <th class="py-3 px-4 text-right w-36 border-r border-slate-700">Harga Modal (HPP)</th>
                    <th class="py-3 px-4 rounded-tr-xl text-right w-36">Subtotal</th>
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">
                ${(d.items||[]).map((w,T)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-3 px-4 text-center font-mono text-slate-500">${T+1}</td>
                    <td class="py-3 px-4 font-bold text-slate-900 uppercase">
                        ${c(w.name)}
                        ${w.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5">Varian: ${c(w.variantName)}</span>`:""}
                        ${w.sku?`<span class="text-slate-400 text-[10px] font-mono block mt-0.5">SKU: ${c(w.sku)}</span>`:""}
                    </td>
                    <td class="py-3 px-4 text-center font-bold text-base text-slate-800">${f(w.qty)} <span class="text-xs font-normal text-slate-500">${c(w.unit||"pcs")}</span></td>
                    <td class="py-3 px-4 text-right font-mono text-slate-600">${k(w.unitPrice)}</td>
                    <td class="py-3 px-4 text-right font-bold font-mono text-slate-900">${k(Math.round((parseFloat(w.qty)||0)*(parseFloat(w.unitPrice)||0)))}</td>
                </tr>
                `).join("")}
            </tbody>
        </table>

        <div class="flex justify-end mb-8">
            <div class="w-80 bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs space-y-2.5">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk:</span><span class="font-bold text-slate-800">${k(d.subtotal)}</span></div>
                ${d.discount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Potongan Diskon:</span><span>-${k(d.discount)}</span></div>`:""}
                ${d.shippingFee>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim:</span><span>+${k(d.shippingFee)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2.5 mt-2 font-bold text-base text-slate-900">
                    <span>TOTAL ORDER (PO):</span>
                    <span class="text-[var(--color-primary)] font-black">${k(d.total)}</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-8 text-center text-sm mt-auto pt-8 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Dipesan Oleh (Purchasing):</span>
                <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
                <span class="font-bold text-slate-900 uppercase">${c(p.store.name||"Toko Putri")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Diterima &amp; Disetujui Oleh:</span>
                <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
                <span class="font-bold text-slate-900 uppercase">${c(d.supplierName||"Rekanan / Supplier")}</span>
            </div>
        </div>
        `;te("doc-paper-content",h),re();return}if(e==="stock_opname"){const i=p.stockOpnameHistory||[],d=i.find(w=>String(w.id)===String(a)||String(w.soNumber)===String(a))||i[0];if(!d){typeof window.showToast=="function"&&window.showToast("Data Berita Acara Stock Opname tidak ditemukan!");return}Y("doc-modal-title","Preview Berita Acara Stock Opname");let l="";p.store?.logo&&(p.store.logo.includes("http")||p.store.logo.includes("data:"))?l=`<img loading="eager" src="${c(p.store.logo)}" class="w-16 h-16 object-contain">`:l='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';const m=w=>{if(!w)return"-";try{return(w.toDate?w.toDate():new Date(w)).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return"-"}},f=typeof Oe=="function"?Oe():!1,u=d.items||[];let h=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${l}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${c(p.store.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${c(p.store.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${c(p.store.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${c(p.store.wa||p.store.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">BERITA ACARA</h2>
                <h3 class="font-bold text-base tracking-wider text-amber-600 uppercase">STOCK OPNAME</h3>
                <p class="text-sm font-bold text-slate-700 mt-1.5 font-mono">#${c(d.soNumber||d.id)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${m(d.date)}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Auditor: <b class="text-slate-900">${c(d.auditorName||"Staf Auditor")}</b></p>
            </div>
        </div>

        <div class="grid grid-cols-4 gap-3 mb-6">
            <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Total Diperiksa</span>
                <span class="text-lg font-black text-slate-800 font-mono">${d.totalItemsAudited||0}</span>
                <span class="text-[10px] text-slate-500 block">Item Produk</span>
            </div>
            <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Item Selisih</span>
                <span class="text-lg font-black ${d.totalWithDiff>0?"text-amber-600":"text-emerald-600"} font-mono">${d.totalWithDiff||0}</span>
                <span class="text-[10px] text-slate-500 block">Disesuaikan</span>
            </div>
            <div class="bg-rose-50 p-3.5 rounded-xl border border-rose-200 text-center">
                <span class="text-[9px] font-black uppercase text-rose-500 block tracking-wider">Total Kurang (Loss)</span>
                <span class="text-lg font-black text-rose-600 font-mono">−${d.totalLossUnits||0}</span>
                <span class="text-[10px] text-rose-500 block">${f?"−"+k(d.totalLossRp||0):"Pcs"}</span>
            </div>
            <div class="bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-center">
                <span class="text-[9px] font-black uppercase text-amber-600 block tracking-wider">Total Lebih (Surplus)</span>
                <span class="text-lg font-black text-amber-600 font-mono">+${d.totalSurplusUnits||0}</span>
                <span class="text-[10px] text-amber-600 block">${f?"+"+k(d.totalSurplusRp||0):"Pcs"}</span>
            </div>
        </div>

        <table class="w-full text-left border-collapse mb-6">
            <thead>
                <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
                    <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
                    <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
                    <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Stok Sistem</th>
                    <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Hasil Fisik</th>
                    <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Selisih</th>
                    <th class="py-2.5 px-3 border-r border-slate-700">Alasan &amp; Keterangan</th>
                    ${f?'<th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Dampak HPP</th>':'<th class="py-2.5 px-3 rounded-tr-xl text-right w-16">Satuan</th>'}
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200 text-xs">
                ${u.length===0?`
                    <tr>
                        <td colspan="7" class="py-8 text-center text-slate-500 italic">
                            Semua stok fisik barang dalam kondisi berimbang (100% Sesuai / Selisih 0).
                        </td>
                    </tr>
                `:u.map((w,T)=>`
                    <tr class="hover:bg-slate-50">
                        <td class="py-2 px-3 text-center font-mono text-slate-500">${T+1}</td>
                        <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                            ${c(w.productName)}
                            ${w.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${c(w.variantName)}</span>`:""}
                            ${w.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${c(w.sku)}</span>`:""}
                        </td>
                        <td class="py-2 px-3 text-center font-mono text-slate-600">${w.systemStock} ${c(w.unit||"pcs")}</td>
                        <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${w.physicalStock} ${c(w.unit||"pcs")}</td>
                        <td class="py-2 px-3 text-center font-bold font-mono ${w.diff<0?"text-rose-600":"text-amber-600"}">
                            ${w.diff<0?`−${Math.abs(w.diff)}`:`+${w.diff}`}
                        </td>
                        <td class="py-2 px-3 text-[10.5px]">
                            <span class="font-bold text-slate-800">${c(w.reason==="salah_hitung"?"Koreksi Kasir":w.reason==="rusak"?"Barang Rusak":w.reason==="hilang"?"Barang Hilang":w.reason==="kadaluarsa"?"Expired":w.reason==="bonus"?"Bonus Supplier":w.reason)}</span>
                            ${w.notes?`<span class="text-slate-500 block italic">"${c(w.notes)}"</span>`:""}
                        </td>
                        ${f?`
                            <td class="py-2 px-3 text-right font-mono font-bold ${w.diff<0?"text-rose-600":"text-amber-600"}">
                                ${w.diff<0?"−":"+"}${k(Math.abs(w.diffValueHpp||0))}
                            </td>`:`
                            <td class="py-2 px-3 text-right text-slate-500">${c(w.unit||"pcs")}</td>
                        `}
                    </tr>
                `).join("")}
            </tbody>
        </table>

        ${d.notes?`
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs mb-6 text-slate-700">
                <b class="text-slate-900">Catatan Auditor:</b> ${c(d.notes)}
            </div>`:""}

        <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-6 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-16 uppercase tracking-widest text-[9px]">Pemeriksa / Auditor:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${c(d.auditorName||"Petugas Auditor")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-16 uppercase tracking-widest text-[9px]">Kepala Gudang / Kasir:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">Gudang Toko</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-16 uppercase tracking-widest text-[9px]">Mengetahui (Owner Toko):</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${c(p.store.name||"Pimpinan")}</span>
            </div>
        </div>
        `;te("doc-paper-content",h),re();return}if(e==="stock_opname_worksheet"){Y("doc-modal-title","Preview Lembar Kerja Hitung Fisik (Worksheet)");let i="";p.store?.logo&&(p.store.logo.includes("http")||p.store.logo.includes("data:"))?i=`<img loading="eager" src="${c(p.store.logo)}" class="w-14 h-14 object-contain">`:i='<div class="w-14 h-14 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-2xl"></i></div>';const d=new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}),l=p.products||[],m=[];l.forEach(u=>{!u||u.id==null||(u.variants&&u.variants.length>0?u.variants.forEach(h=>{m.push({name:u.name,variantName:h.name,sku:h.sku||u.sku||"",barcode:h.barcode||u.barcode||"",category:u.category||"Umum",brand:u.brand||"-",unit:u.unit||"pcs",systemStock:parseFloat(h.stock)||0})}):m.push({name:u.name,variantName:"",sku:u.sku||"",barcode:u.barcode||"",category:u.category||"Umum",brand:u.brand||"-",unit:u.unit||"pcs",systemStock:parseFloat(u.stock)||0}))});let f=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3">
                ${i}
                <div>
                    <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${c(p.store.name||"TOKO PUTRI")}</h1>
                    <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${c(p.store.slogan||"Pusat Alat Teknik & Bangunan")}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${c(p.store.address||"")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-wider text-slate-900 uppercase">LEMBAR KERJA AUDIT</h2>
                <h3 class="font-bold text-xs tracking-widest text-amber-600 uppercase">STOCK OPNAME FISIK RAK</h3>
                <p class="text-xs font-medium text-slate-500 mt-1">Tanggal Cetak: <b>${d}</b></p>
                <p class="text-xs font-medium text-slate-500">Total Item: <b>${m.length} Baris</b></p>
            </div>
        </div>

        <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[10px] text-slate-600 mb-4 flex items-center justify-between">
            <span><b>Petunjuk:</b> Hitung fisik barang di rak/gudang secara teliti. Tulis angka aktual pada kolom <b>HASIL FISIK</b> dan beri catatan bila ada barang rusak/cacat.</span>
            <span class="font-mono text-slate-400">Hal. 1</span>
        </div>

        <table class="w-full text-left border-collapse mb-6">
            <thead>
                <tr class="border-b-2 border-slate-800 text-[9.5px] font-black text-white uppercase tracking-wider bg-slate-900">
                    <th class="py-2 px-2 text-center w-8 border-r border-slate-700">Cek</th>
                    <th class="py-2 px-2 text-center w-8 border-r border-slate-700">No</th>
                    <th class="py-2 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi Varian</th>
                    <th class="py-2 px-2 border-r border-slate-700 w-28">Kategori / Rak</th>
                    <th class="py-2 px-2 text-center w-20 border-r border-slate-700">Stok Sistem</th>
                    <th class="py-2 px-2 text-center w-28 border-r border-slate-700 bg-amber-900/60">HASIL FISIK</th>
                    <th class="py-2 px-3 text-left w-36">Kondisi &amp; Catatan</th>
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200 text-[11px]">
                ${m.map((u,h)=>`
                    <tr class="hover:bg-slate-50">
                        <td class="py-2 px-2 text-center font-mono border-r border-slate-200"><span class="inline-block w-3.5 h-3.5 border border-slate-400 rounded-sm"></span></td>
                        <td class="py-2 px-2 text-center font-mono text-slate-400 border-r border-slate-200">${h+1}</td>
                        <td class="py-2 px-3 font-bold text-slate-900 border-r border-slate-200 uppercase">
                            ${c(u.name)}
                            ${u.variantName?`<span class="bg-slate-100 text-slate-700 px-1 rounded text-[8.5px] border border-slate-300 ml-1 font-semibold">${c(u.variantName)}</span>`:""}
                            ${u.sku?`<span class="text-slate-400 font-mono text-[8.5px] block">SKU: ${c(u.sku)}</span>`:""}
                        </td>
                        <td class="py-2 px-2 text-[10px] text-slate-600 border-r border-slate-200">
                            ${c(u.category)}
                        </td>
                        <td class="py-2 px-2 text-center font-mono font-bold text-slate-600 border-r border-slate-200">
                            ${u.systemStock} ${c(u.unit)}
                        </td>
                        <td class="py-2 px-2 text-center font-mono border-r border-slate-200 bg-amber-50/40">
                            <span class="inline-block w-20 h-6 border-b-2 border-slate-400"></span>
                        </td>
                        <td class="py-2 px-3 text-[10px] text-slate-400">
                            <span class="inline-block w-full h-6 border-b border-slate-200"></span>
                        </td>
                    </tr>
                `).join("")}
            </tbody>
        </table>

        <div class="grid grid-cols-2 gap-6 text-center text-xs mt-auto pt-6 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Staf Penghitung Fisik:</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 uppercase">Nama &amp; Tanda Tangan</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Diverifikasi Oleh:</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 uppercase">Kepala Toko / Owner</span>
            </div>
        </div>
        `;te("doc-paper-content",f),re();return}if(e==="tempo_invoice"){const i=a||cVOrd;let l=(window.cachedPiutangOrders||[]).find(P=>String(P.orderId)===String(i))||(gOrds||[]).find(P=>String(P.orderId)===String(i));if(!l&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(i)&&(l=window.lastPrintedOrder),!l){typeof window.showToast=="function"&&window.showToast("Data nota tagihan piutang tidak ditemukan!");return}Y("doc-modal-title","Preview Nota Tagihan Piutang (Tempo)");let m="";p.store?.logo&&(p.store.logo.includes("http")||p.store.logo.includes("data:"))?m=`<img loading="eager" src="${c(p.store.logo)}" class="w-16 h-16 object-contain">`:m='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';const f=P=>{if(!P)return"-";try{return(P.toDate?P.toDate():new Date(P)).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"})}catch{return"-"}},u=P=>{const _=parseFloat(P);return isNaN(_)?"0":Number.isInteger(_)?String(_):_.toFixed(2).replace(/\.?0+$/,"")};let h=parseFloat(l.payment?.tempoBalance)||0,w=l.payment?.tempoPenaltyRate!==void 0?parseFloat(l.payment.tempoPenaltyRate):1,T=l.payment?.tempoPenaltyStopped===!0,R=0,N=l.payment?.tempoDueDate||0,C=0,$=0,x=!1,D=!1;const M=Date.now();N>0&&(M>N?(C=Math.floor((M-N)/(24*60*60*1e3)),C>0&&(x=!0)):($=Math.ceil((N-M)/(24*60*60*1e3)),$<=3&&(D=!0))),T?R=parseFloat(l.payment?.tempoFixedPenalty)||0:x&&(R=w/100*h*C);let v=h+R;const I=l.payment?.installments||[],E=I.reduce((P,_)=>P+(parseFloat(_.amount)||0),0),K=l.payment?.grandTotal||h+E,W=l.payment?.paymentStatus==="lunas"||h<=0,g=!!(l.payment?.isPaylater||l.isPaylater||l.payment?.subMethod==="paylater");let y=g?"PAYLATER BERJALAN":"TEMPO BERJALAN",A="text-blue-600 bg-blue-50 border-blue-200";W?(y="LUNAS SEPENUHNYA",A="text-emerald-600 bg-emerald-50 border-emerald-300"):x?(y=`TERLAMBAT ${C} HARI`,A="text-rose-600 bg-rose-50 border-rose-300"):D&&(y=`JATUH TEMPO H-${$<=0?"0":$}`,A="text-amber-600 bg-amber-50 border-amber-300");const U=p.banks&&p.banks.length>0?p.banks.map(P=>`<div class="font-mono text-xs"><b class="text-slate-900">${c(P.bank)}:</b> ${c(P.number)} a/n ${c(P.name)}</div>`).join(""):'<div class="text-xs text-slate-500 italic">Hubungi kasir untuk info rekening transfer bank</div>';let G=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
            <div class="flex items-center gap-4">
                ${m}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${c(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${c(p.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${c(p.store?.address||"Alamat fisik toko belum diatur.")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${c(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl sm:text-3xl tracking-widest text-slate-900 uppercase">${g?"NOTA PUTRI PAYLATER":"NOTA TAGIHAN PIUTANG"}</h2>
                <p class="text-sm font-bold text-slate-600 mt-2 font-mono">#${c(l.orderId)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tgl Transaksi: ${f(l.dateString||l.timestamp)}</p>
                <div class="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${A}">
                    ${c(y)}
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-8 mb-8">
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ditujukan Kepada (Debitur / Pelanggan):</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${c(l.customer?.name||"Pelanggan")}</p>
                ${l.customer?.wa||l.customer?.phone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> +${c(l.customer.wa||l.customer.phone)}</p>`:""}
                <p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${c(l.customer?.address||"Alamat di toko / pelanggan tempo")}</p>
                ${l.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-2"><i class="fa-solid fa-note-sticky mr-1"></i> ${c(l.customer.note)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ketentuan Jatuh Tempo:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1.5"><span class="text-slate-500">Tanggal Jatuh Tempo:</span> <b class="text-slate-900 font-mono">${f(N)}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1.5"><span class="text-slate-500">Sistem Pembayaran:</span> <b class="${g?"text-emerald-700 font-bold":"text-slate-900"} uppercase">${g?"Putri PayLater Member VIP":"Tempo / Bertahap"}</b></p>
                ${x?`<p class="text-xs font-bold text-rose-600 mb-1.5"><span class="text-slate-500">Status Keterlambatan:</span> Lewat ${C} Hari (Denda ${w}%/hari)</p>`:""}
                <p class="text-xs font-semibold text-slate-700"><span class="text-slate-500">Kasir / Admin:</span> <b class="text-slate-900 uppercase">${c(l.cashierName||"Kasir Toko")}</b></p>
            </div>
        </div>

        <table class="w-full text-left border-collapse mb-8">
            <thead>
                <tr class="border-b-2 border-slate-800 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-900 text-white">
                    <th class="py-3 px-4 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
                    <th class="py-3 px-4 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
                    <th class="py-3 px-4 text-center w-28 border-r border-slate-700">Kuantitas</th>
                    <th class="py-3 px-4 text-right w-36 border-r border-slate-700">Harga Satuan</th>
                    <th class="py-3 px-4 rounded-tr-xl text-right w-36">Subtotal</th>
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">
                ${(l.items||[]).map((P,_)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-3 px-4 text-center font-mono text-slate-500">${_+1}</td>
                    <td class="py-3 px-4 font-bold text-slate-900 uppercase">
                        ${c(P.name)}
                        ${P.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5">Varian: ${c(P.variantName)}</span>`:""}
                    </td>
                    <td class="py-3 px-4 text-center font-bold text-base text-slate-800">${u(P.qty)} <span class="text-xs font-normal text-slate-500">${c(P.unit||"pcs")}</span></td>
                    <td class="py-3 px-4 text-right font-mono text-slate-600">${k(P.effectivePrice||P.price)}</td>
                    <td class="py-3 px-4 text-right font-bold font-mono text-slate-900">${k(P.subtotal||Math.round((parseFloat(P.qty)||0)*(parseFloat(P.effectivePrice||P.price)||0)))}</td>
                </tr>
                `).join("")}
            </tbody>
        </table>

        <!-- HISTORI CICILAN JIKA ADA -->
        ${I.length>0?`
        <div class="mb-8">
            <h3 class="text-xs font-black text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <i class="fa-solid fa-receipt text-[var(--color-primary)]"></i> Histori Pembayaran Cicilan yang Telah Diterima:
            </h3>
            <table class="w-full text-left border border-slate-200 rounded-xl overflow-hidden text-xs">
                <thead class="bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
                    <tr>
                        <th class="py-2.5 px-3 w-12 text-center border-b border-slate-200">Ke</th>
                        <th class="py-2.5 px-3 border-b border-slate-200">Tanggal Bayar</th>
                        <th class="py-2.5 px-3 border-b border-slate-200">Metode Bayar</th>
                        <th class="py-2.5 px-3 text-right border-b border-slate-200">Nominal Cicilan</th>
                        <th class="py-2.5 px-3 border-b border-slate-200">Catatan</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 font-mono">
                    ${I.map((P,_)=>`
                    <tr class="hover:bg-slate-50">
                        <td class="py-2 px-3 text-center text-slate-500">${_+1}</td>
                        <td class="py-2 px-3 text-slate-700">${f(P.date)}</td>
                        <td class="py-2 px-3 uppercase text-slate-600 font-bold">${c(P.method||"Tunai")}</td>
                        <td class="py-2 px-3 text-right font-bold text-emerald-600">+ ${k(P.amount)}</td>
                        <td class="py-2 px-3 text-slate-500 text-[11px] font-sans">${c(P.note||"-")}</td>
                    </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>`:""}

        <div class="grid grid-cols-2 gap-8 mb-8 items-start">
            <!-- Info Rekening Transfer -->
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran:
                </h4>
                <div class="space-y-1.5 pt-1">${U}</div>
                <p class="text-[10px] text-slate-500 pt-2 border-t border-slate-200">Mohon kirimkan konfirmasi bukti transfer via WhatsApp ke nomor resmi toko kami.</p>
            </div>

            <!-- Ringkasan Finansial Tagihan -->
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs space-y-2.5">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Awal:</span><span class="font-bold text-slate-800">${k(K)}</span></div>
                ${g?`<div class="flex justify-between text-emerald-600 font-bold"><span>Limit PayLater Terpakai:</span><span>${k(l.payment?.paylaterUsed||K-(l.payment?.tempoDp||l.payment?.dp||0))}</span></div>`:""}
                ${(parseFloat(l.payment?.tempoDp||l.payment?.dp)||0)>0?`<div class="flex justify-between text-slate-600"><span>Uang Muka (DP Dibayar):</span><span class="font-bold">${k(l.payment?.tempoDp||l.payment?.dp||0)}</span></div>`:""}
                ${E>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Total Telah Dibayar (Cicilan):</span><span>-${k(E)}</span></div>`:""}
                <div class="flex justify-between text-slate-700 font-bold"><span>${g?"Sisa Pokok PayLater:":"Sisa Pokok Piutang:"}</span><span>${k(h)}</span></div>
                ${R>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Denda Keterlambatan (${C} Hari):</span><span>+${k(R)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2.5 mt-2 font-bold text-base text-slate-900">
                    <span>${g?"SISA TAGIHAN PAYLATER:":"SISA TAGIHAN WAJIB BAYAR:"}</span>
                    <span class="text-[var(--color-primary)] font-black text-lg">${k(W?0:v)}</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-8 text-center text-sm mt-auto pt-8 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Yang Berhutang (Debitur / Pelanggan):</span>
                <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
                <span class="font-bold text-slate-900 uppercase">${c(l.customer?.name||"Pelanggan")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Bagian Keuangan / Kasir Toko:</span>
                <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
                <span class="font-bold text-slate-900 uppercase">${c(p.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `;te("doc-paper-content",G),re();return}if(e==="tempo_customer_ledger"){const i=String(a||"").trim(),l=(window.cachedPiutangOrders||[]).filter(v=>{const I=String(v.customer?.phone||v.customer?.wa||"").replace(/\D/g,""),E=String(v.customer?.name||"").toLowerCase().trim(),K=i.replace(/\D/g,"");return!!(K.length>=8&&I.includes(K)||E&&i.toLowerCase().includes(E))});if(l.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada nota piutang aktif untuk pelanggan ini.");return}const m=l[0].customer||{},f=m.name||"Pelanggan",u=m.wa||m.phone||"-";Y("doc-modal-title",`Kartu Piutang: ${f}`);let h="";p.store?.logo&&(p.store.logo.includes("http")||p.store.logo.includes("data:"))?h=`<img loading="eager" src="${c(p.store.logo)}" class="w-16 h-16 object-contain">`:h='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';const w=v=>{if(!v)return"-";try{return(v.toDate?v.toDate():new Date(v)).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})}catch{return"-"}};let T=0,R=0,N=0,C=0,$=0;const x=l.map((v,I)=>{const E=parseFloat(v.payment?.tempoBalance)||0,K=v.payment?.tempoPenaltyRate!==void 0?parseFloat(v.payment.tempoPenaltyRate):1,W=v.payment?.tempoPenaltyStopped===!0;let g=0;const y=v.payment?.tempoDueDate||0;let A=0,U=!1;const G=Date.now();y>0&&G>y&&(A=Math.floor((G-y)/(24*60*60*1e3)),A>0&&(U=!0)),W?g=parseFloat(v.payment?.tempoFixedPenalty)||0:U&&(g=K/100*E*A);const _=(v.payment?.installments||[]).reduce((kt,Pt)=>kt+(parseFloat(Pt.amount)||0),0),_e=v.payment?.grandTotal||E+_,ze=E+g;return T+=_e,R+=_,N+=E,C+=g,$+=ze,{idx:I+1,orderId:v.orderId,dateStr:w(v.dateString||v.timestamp),dueStr:w(y),totalAwal:_e,paid:_,sisa:E,latePenalty:g,totalAkhir:ze,isLate:U,daysLate:A}}),D=p.banks&&p.banks.length>0?p.banks.map(v=>`<div class="font-mono text-xs"><b class="text-slate-900">${c(v.bank)}:</b> ${c(v.number)} a/n ${c(v.name)}</div>`).join(""):'<div class="text-xs text-slate-500 italic">Hubungi kasir untuk info rekening transfer bank</div>';let M=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
            <div class="flex items-center gap-4">
                ${h}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${c(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${c(p.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${c(p.store?.address||"Alamat fisik toko belum diatur.")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${c(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl sm:text-3xl tracking-widest text-slate-900 uppercase">KARTU PIUTANG PELANGGAN</h2>
                <p class="text-sm font-bold text-slate-600 mt-2">STATEMENT OF ACCOUNT</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Dicetak: ${w(Date.now())}</p>
                <span class="inline-block mt-2 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-300 rounded-full text-xs font-black uppercase tracking-wider">
                    ${l.length} NOTA BELUM LUNAS
                </span>
            </div>
        </div>

        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 mb-8">
            <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Informasi Debitur / Pelanggan:</h3>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="text-xs text-slate-500">Nama Pelanggan / Badan:</p>
                    <p class="font-bold text-lg text-slate-900 uppercase">${c(f)}</p>
                </div>
                <div>
                    <p class="text-xs text-slate-500">Nomor WhatsApp / HP:</p>
                    <p class="font-mono font-bold text-base text-emerald-600">+${c(u)}</p>
                </div>
            </div>
        </div>

        <table class="w-full text-left border-collapse mb-8">
            <thead>
                <tr class="border-b-2 border-slate-800 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-900 text-white">
                    <th class="py-3 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
                    <th class="py-3 px-3 border-r border-slate-700">No. Nota</th>
                    <th class="py-3 px-3 border-r border-slate-700">Tgl Transaksi</th>
                    <th class="py-3 px-3 border-r border-slate-700">Jatuh Tempo</th>
                    <th class="py-3 px-3 text-right border-r border-slate-700">Total Transaksi</th>
                    <th class="py-3 px-3 text-right border-r border-slate-700">Terbayar</th>
                    <th class="py-3 px-3 text-right border-r border-slate-700">Denda</th>
                    <th class="py-3 px-3 rounded-tr-xl text-right w-36">Sisa Tagihan</th>
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200 text-xs">
                ${x.map(v=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-3 px-3 text-center font-mono text-slate-500">${v.idx}</td>
                    <td class="py-3 px-3 font-mono font-bold text-slate-800">#${c(v.orderId)}</td>
                    <td class="py-3 px-3 font-medium text-slate-600">${v.dateStr}</td>
                    <td class="py-3 px-3 font-mono ${v.isLate?"text-rose-600 font-bold":"text-slate-700"}">${v.dueStr} ${v.isLate?`<span class="text-[10px] text-rose-500">(+${v.daysLate}h)</span>`:""}</td>
                    <td class="py-3 px-3 text-right font-mono text-slate-600">${k(v.totalAwal)}</td>
                    <td class="py-3 px-3 text-right font-mono text-emerald-600 font-bold">${k(v.paid)}</td>
                    <td class="py-3 px-3 text-right font-mono text-rose-600">${v.latePenalty>0?k(v.latePenalty):"-"}</td>
                    <td class="py-3 px-3 text-right font-mono font-black text-slate-900">${k(v.totalAkhir)}</td>
                </tr>
                `).join("")}
            </tbody>
        </table>

        <div class="grid grid-cols-2 gap-8 mb-8 items-start">
            <!-- Rekening Pembayaran -->
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Transfer Resmi Pelunasan:
                </h4>
                <div class="space-y-1.5 pt-1">${D}</div>
                <p class="text-[10px] text-slate-500 pt-2 border-t border-slate-200">Kartu piutang ini mencatat seluruh tagihan aktif per tanggal cetak.</p>
            </div>

            <!-- Rekapitulasi Total Piutang Akumulasi -->
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs space-y-2.5">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Keseluruhan:</span><span class="font-bold text-slate-800">${k(T)}</span></div>
                <div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Diterima (-):</span><span>-${k(R)}</span></div>
                <div class="flex justify-between text-slate-700 font-bold"><span>Total Sisa Pokok Piutang:</span><span>${k(N)}</span></div>
                ${C>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Total Denda Keterlambatan (+):</span><span>+${k(C)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2.5 mt-2 font-bold text-base text-slate-900">
                    <span>TOTAL AKUMULASI PIUTANG:</span>
                    <span class="text-[var(--color-primary)] font-black text-lg">${k($)}</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-8 text-center text-sm mt-auto pt-8 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Penerima Tagihan (Debitur):</span>
                <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
                <span class="font-bold text-slate-900 uppercase">${c(f)}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Bagian Keuangan / Pemilik Toko:</span>
                <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
                <span class="font-bold text-slate-900 uppercase">${c(p.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `;te("doc-paper-content",M),re();return}const t=gOrds.find(i=>i.orderId===cVOrd);if(!t)return;Y("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const n=t.dateString?new Date(t.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"";let s="";p.store.logo&&(p.store.logo.includes("http")||p.store.logo.includes("data:"))?s=`<img loading="eager" src="${c(p.store.logo)}" class="w-16 h-16 object-contain">`:s='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';let o=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${s}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${c(p.store.name)}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${c(p.store.slogan||"General Supplier")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${c(p.store.address||"Alamat fisik toko belum diatur.")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${c(p.store.wa||"-")}</p>
                ${t.payment?.taxNpwp||p.store?.taxNpwp?`<p class="text-xs font-semibold text-slate-600 mt-0.5"><i class="fa-solid fa-id-card text-blue-500"></i> NPWP Toko: <span class="font-mono">${c(t.payment?.taxNpwp||p.store.taxNpwp)}</span></p>`:""}
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-3xl tracking-widest ${e==="invoice"?"text-blue-600":"text-amber-600"} uppercase">${e==="invoice"?t.payment?.method==="tempo"?"PROFORMA INVOICE":"INVOICE":"SURAT JALAN"}</h2>
            <p class="text-sm font-bold text-slate-600 mt-2 font-mono">#${t.orderId}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${n}</p>
        </div>
    </div>

    <div class="grid grid-cols-2 gap-8 mb-8">
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ditagihkan Kepada (Pemesan):</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-1">${c(t.customer?.name||"Guest")}${t.customer?.wa?` <span class="text-xs font-mono font-medium text-slate-500">(+${c(t.customer.wa)})</span>`:""}</p>
            <p class="text-sm font-medium text-slate-700 leading-relaxed mb-2">${c(t.customer?.address||"-")}</p>
            ${t.isDropPoint&&t.dropPoint?`
            <div class="mt-3 pt-3 border-t border-rose-200 bg-rose-50/80 p-3 rounded-xl border border-dashed text-left">
                <div class="flex items-center gap-1.5 text-rose-700 font-bold text-xs uppercase tracking-wider mb-1">
                    <i class="fa-solid fa-location-dot"></i> Pengantaran ke Lokasi Berbeda (Drop-Point):
                </div>
                <p class="font-bold text-sm text-slate-900 uppercase">${c(t.dropPoint.name||"-")}${t.dropPoint.wa?` <span class="font-mono text-xs font-semibold text-rose-600">(+${c(t.dropPoint.wa)})</span>`:""}</p>
                <p class="text-xs font-medium text-slate-700 mt-0.5 leading-relaxed">${c(t.dropPoint.address||"-")}</p>
            </div>
            `:""}
            ${t.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200 mt-2"><i class="fa-solid fa-note-sticky"></i> Catatan: ${c(t.customer.note)}</p>`:""}
        </div>
        
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-center space-y-3">
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Metode Pengiriman</span>
                <span class="text-sm font-bold text-slate-800 uppercase">${c(t.isDropPoint?"Drop-Point (Lokasi Berbeda)":t.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko")}</span>
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
    `;if(e==="invoice"?o+=`
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
                ${(Array.isArray(t.items)?t.items:Array.isArray(t.cart)?t.cart:[]).map((i,d)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${d+1}</td>
                    <td class="py-4 px-4 font-bold flex items-center gap-2">
                        ${c(i.name)} 
                        ${i.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${c(i.variantName)}</span> ${i.colorCode?`<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${c(i.colorCode)};"></span>`:""}`:""}
                        ${i.poTime?`<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${c(i.poTime)}</span>`:""}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-slate-700">${parseFloat(i.qty)} <span class="text-[10px] font-bold text-slate-400 uppercase">${c(i.unit||"pcs")}</span></td>
                    <td class="py-4 px-4 text-right font-mono font-medium">${k(i.effectivePrice)}</td>
                    <td class="py-4 px-4 text-right font-mono font-bold">${k(i.effectivePrice*parseFloat(i.qty))}</td>
                </tr>`).join("")}
            </tbody>
        </table>

        <div class="flex justify-end mb-10">
            <div class="w-1/2 md:w-[45%] space-y-3 text-sm font-bold text-slate-700">
                <div class="flex justify-between px-4"><span>Subtotal Produk</span><span class="font-mono">${k(t.payment?.subtotal)}</span></div>
                ${t.payment?.shippingCost?`<div class="flex justify-between px-4"><span>Ongkos Kirim</span><span class="font-mono">${k(t.payment.shippingCost)}</span></div>`:""}
                ${t.payment?.shippingDiscount?`<div class="flex justify-between px-4 text-emerald-600"><span>Diskon Ongkir</span><span class="font-mono">-${k(t.payment.shippingDiscount)}</span></div>`:""}
                ${t.payment?.productDiscount?`<div class="flex justify-between px-4 text-rose-600"><span>Diskon Produk</span><span class="font-mono">-${k(t.payment.productDiscount)}</span></div>`:""}
                ${(()=>{if(!((t.payment?.ppnEnabled||t.payment?.ppnShowZero||t.payment?.ppnRate===0||t.payment?.ppnAmount&&t.payment.ppnAmount>0)&&(p.store?.ppnEnabled||t.payment?.ppnEnabled)))return"";const d=t.payment?.ppnType==="inclusive",l=t.payment?.ppnRate!==void 0?t.payment.ppnRate:p.store?.ppnRate||0,m=t.payment?.ppnAmount||0,f=t.payment?.ppnLabel||`${d?"Termasuk PPN":"PPN"} (${l}%)`,u=(t.payment?.subtotal||0)-(t.payment?.productDiscount||0)+(t.payment?.shippingCost||0)-(t.payment?.shippingDiscount||0),h=t.payment?.dppAmount!==void 0?t.payment.dppAmount:d&&l>0?Math.round(u*100/(100+l)):Math.max(0,u);return`
                    <div class="flex justify-between px-4 text-slate-600"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-mono">${k(h)}</span></div>
                    <div class="flex justify-between px-4 text-amber-600"><span>${f}</span><span class="font-mono">${m>0?(d?"":"+")+k(m):"Rp 0"}</span></div>
                    `})()}
                
                <div class="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl mt-4 shadow-md">
                    <span class="font-bold text-base uppercase tracking-widest">Grand Total</span>
                    <span class="font-mono text-xl text-emerald-400 font-bold tracking-tight">${k(t.payment?.grandTotal)}</span>
                </div>
                ${t.payment?.method==="tempo"?`
                <div class="flex justify-between px-4 mt-4 text-emerald-600"><span>Uang Muka (DP)</span><span class="font-mono">${k(t.payment?.tempoDp||0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-4 rounded-xl mt-2 border border-rose-200">
                    <span class="font-bold text-base uppercase tracking-widest">Sisa Tagihan</span>
                    <span class="font-mono text-xl font-bold tracking-tight">${k(t.payment?.tempoBalance||0)}</span>
                </div>
                `:""}
            </div>
        </div>`:o+=`
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
                ${(Array.isArray(t.items)?t.items:Array.isArray(t.cart)?t.cart:[]).map((i,d)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${d+1}</td>
                    <td class="py-4 px-4 font-bold uppercase flex items-center gap-2">
                        ${c(i.name)} 
                        ${i.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${c(i.variantName)}</span> ${i.colorCode?`<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${c(i.colorCode)};"></span>`:""}`:""}
                        ${i.poTime?`<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${c(i.poTime)}</span>`:""}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-lg text-slate-800">${parseFloat(i.qty)}</td>
                    <td class="py-4 px-4 text-center text-slate-500 font-bold uppercase text-xs">${c(i.unit||"pcs")}</td>
                    <td class="py-4 px-4 text-center"><div class="w-5 h-5 border-2 border-slate-300 mx-auto rounded shadow-inner"></div></td>
                </tr>`).join("")}
            </tbody>
        </table>
        `,(t.pointsEarned>0||t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null)&&(o+=`
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5 flex items-center gap-6">
            <div class="w-10 h-10 rounded-xl bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
            ${t.pointsEarned>0?`<div><p class="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-lg text-amber-700">+${t.pointsEarned}</p></div>`:""}
            ${t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null?`<div><p class="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Terkumpul</p><p class="font-bold text-lg text-amber-700">${t.finalMemberPoints}</p></div>`:""}
        </div>`),t.claimedReward){const i=t.claimedReward.status==="ready"?"SERTAKAN BERSAMA PENGIRIMAN INI":t.claimedReward.status==="waiting_stock"?"STOK KOSONG — KIRIM SUSULAN":"MENUNGGU KONFIRMASI GUDANG";o+=`
        <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-5 mb-8 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                <div>
                    <p class="text-[10px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${t.claimedReward.pointsCost} Poin)</p>
                    <p class="font-bold text-base text-violet-800 uppercase">${c(t.claimedReward.name)}</p>
                    ${t.claimedReward.note?`<p class="text-xs italic text-violet-600 mt-1">"${c(t.claimedReward.note)}"</p>`:""}
                </div>
            </div>
            <span class="text-[10px] font-bold px-3 py-2 rounded-xl bg-violet-600 text-white uppercase tracking-widest text-center shrink-0">${i}</span>
        </div>`}t.payment?.method==="tempo"&&(o+=`
        <div class="mt-6 mb-8 border border-pink-200 bg-pink-50 p-4 rounded-xl text-left">
            <h4 class="font-bold text-pink-700 text-xs uppercase tracking-widest mb-1"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo</h4>
            <p class="text-[10px] text-pink-600 font-bold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${t.payment.tempoDueDate?new Date(t.payment.tempoDueDate).toLocaleDateString("id-ID"):"-"}). Keterlambatan pembayaran akan dikenakan denda sebesar 1% dari sisa tagihan untuk setiap harinya.</p>
        </div>`),(Array.isArray(t.items)?t.items:Array.isArray(t.cart)?t.cart:[]).some(i=>i&&i.poTime&&i.poTime!=="")&&(o+=`
        <div class="mt-6 mb-8 border border-amber-200 bg-amber-50 p-4 rounded-xl text-left flex gap-3 items-start">
            <i class="fa-solid fa-clock text-amber-500 mt-0.5 animate-pulse"></i>
            <div>
                <h4 class="font-bold text-amber-700 text-xs uppercase tracking-widest mb-1">Informasi Produk Pre-Order (PO)</h4>
                <p class="text-[10px] text-amber-600 font-bold leading-relaxed">Pesanan ini mengandung produk Pre-Order (PO). Khusus untuk produk berlabel PO akan dikirimkan menyusul tanpa dikenakan biaya tambahan.</p>
            </div>
        </div>`),o+=`
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
            <span class="font-bold text-slate-900 uppercase">${c(p.store.name)}</span>
        </div>
    </div>
    `,te("doc-paper-content",o),re()},os=()=>{if(!cart||cart.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}je="sph";const e="SPH-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.floor(1e3+Math.random()*9e3),a=new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}),t=new Date(Date.now()+14*24*60*60*1e3).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"});Y("doc-modal-title","Surat Penawaran Harga (SPH)");let n="";p.store?.logo&&(p.store.logo.includes("http")||p.store.logo.includes("data:"))?n=`<img loading="eager" src="${c(p.store.logo)}" class="w-16 h-16 object-contain">`:n='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';const s=typeof window.getEffP=="function"?window.getEffP:i=>i.price||0;let o=0,r=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${n}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${c(p.store?.name||"Toko Putri")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${c(p.store?.slogan||"General Supplier & Alat Teknik")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${c(p.store?.address||"Alamat fisik toko belum diatur.")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${c(p.store?.wa||"-")}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl md:text-3xl tracking-widest text-emerald-600 uppercase">PENAWARAN HARGA</h2>
            <p class="text-sm font-bold text-slate-600 mt-2 font-mono">#${e}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${a}</p>
            <span class="inline-block mt-2 px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-300 rounded text-[10px] font-bold uppercase tracking-wider">
                Berlaku s/d: ${t}
            </span>
        </div>
    </div>

    <div class="grid grid-cols-2 gap-8 mb-8">
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ditujukan Kepada:</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-1">Kepada Yth. Rekanan / Proyek</p>
            <p class="text-xs font-medium text-slate-600 leading-relaxed">Pelanggan Terhormat / Departemen Pengadaan</p>
            <p class="text-xs italic text-slate-400 mt-2">* Surat penawaran harga resmi dapat digunakan sebagai referensi RAB proyek & pengajuan anggaran kantor.</p>
        </div>
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-center space-y-3">
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Masa Berlaku</span>
                <span class="text-sm font-bold text-slate-800">14 Hari Kalender</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Ketersediaan Stok</span>
                <span class="text-sm font-bold text-slate-800">Konfirmasi Saat Pemesanan</span>
            </div>
            <div class="flex justify-between items-center pb-1">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Dokumen</span>
                <span class="text-sm font-bold text-emerald-600 uppercase tracking-wider font-mono">OFFICIAL QUOTATION</span>
            </div>
        </div>
    </div>

    <table class="w-full text-left text-sm text-slate-900 border-collapse mb-6">
        <thead>
            <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-xs">
                <th class="py-3 px-4 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
                <th class="py-3 px-4 border-r border-slate-700">Deskripsi Barang & Spesifikasi</th>
                <th class="py-3 px-4 text-center w-24 border-r border-slate-700">Qty</th>
                <th class="py-3 px-4 text-right w-32 border-r border-slate-700">Harga Satuan</th>
                <th class="py-3 px-4 rounded-tr-xl text-right w-32">Total Estimasi</th>
            </tr>
        </thead>
        <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">
            ${cart.map((i,d)=>{let l=parseFloat(i.qty)||1,m=s(i),f=l*m;return o+=f,`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-3.5 px-4 text-center font-mono text-slate-500">${d+1}</td>
                    <td class="py-3.5 px-4 font-bold">
                        ${c(i.name)}
                        ${i.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${c(i.variantName)}</span>`:""}
                    </td>
                    <td class="py-3.5 px-4 text-center font-bold text-slate-700">${l} <span class="text-[10px] font-bold text-slate-400 uppercase">${c(i.unit||"pcs")}</span></td>
                    <td class="py-3.5 px-4 text-right font-mono font-medium">${k(m)}</td>
                    <td class="py-3.5 px-4 text-right font-mono font-bold">${k(f)}</td>
                </tr>`}).join("")}
        </tbody>
    </table>

    <div class="flex justify-end mb-8">
        <div class="w-1/2 md:w-[45%] space-y-2 text-sm font-bold text-slate-700">
            <div class="flex justify-between px-4"><span>Subtotal Estimasi</span><span class="font-mono">${k(o)}</span></div>
            <div class="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl mt-2 shadow-md">
                <span class="font-bold text-base uppercase tracking-widest">Total Penawaran</span>
                <span class="font-mono text-xl text-emerald-400 font-bold tracking-tight">${k(o)}</span>
            </div>
        </div>
    </div>

    <div class="border border-slate-200 bg-slate-50 p-4 rounded-xl text-left mb-8">
        <h4 class="font-bold text-slate-700 text-xs uppercase tracking-widest mb-1"><i class="fa-solid fa-circle-info mr-1 text-[var(--color-primary)]"></i> Syarat & Ketentuan Penawaran:</h4>
        <ul class="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
            <li>Harga penawaran berlaku selama <b>14 hari kalender</b> terhitung sejak tanggal dokumen diterbitkan.</li>
            <li>Ketersediaan dan fluktuasi stok dapat berubah sewaktu-waktu sampai diterbitkannya konfirmasi pesanan (PO) resmi.</li>
            <li>Biaya pengiriman dan penanganan disesuaikan dengan kuantitas dan jarak tempuh lokasi pengiriman.</li>
        </ul>
    </div>

    <div class="grid grid-cols-2 gap-8 text-center text-sm mt-auto pt-4">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Menyetujui / Klien Proyek</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900">Nama Terang & Stempel Perusahaan</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Hormat Kami,</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900 uppercase">${c(p.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `;te("doc-paper-content",r),re()},re=()=>{const e=b("doc-preview-modal"),a=b("doc-preview-modal-box");e&&e.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),Se(e,a),Fe()},Fe=()=>{const e=b("doc-paper-scroll-area"),a=b("doc-paper-content"),t=b("doc-paper-wrapper");if(!e||!a||!t)return;const n=794,o=e.clientWidth-16,r=Math.min(1,o/n);a.style.transform=`translateX(-50%) scale(${r})`,t.style.height=a.offsetHeight*r+"px"};window.addEventListener("resize",()=>{const e=b("doc-preview-modal");e&&!e.classList.contains("hidden")&&Fe()});const ns=(e=!1)=>{const a=b("doc-preview-modal"),t=b("doc-preview-modal-box");a&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{de(a,t)}):de(a,t))},rs=()=>{const e=b("doc-paper-content")?b("doc-paper-content").innerHTML:"";if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){let t=b("thermal-print-section");t||(t=document.createElement("div"),t.id="thermal-print-section",document.body.appendChild(t)),t.innerHTML=e,window.AndroidNativeApp.print();return}const a=window.open("","_blank");if(!a){let t=document.getElementById("a4-print-fallback-iframe");t||(t=document.createElement("iframe"),t.id="a4-print-fallback-iframe",t.style.position="fixed",t.style.right="0",t.style.bottom="0",t.style.width="0",t.style.height="0",t.style.border="0",t.style.opacity="0",document.body.appendChild(t));const n=t.contentWindow.document;n.open(),n.write(`<!DOCTYPE html><html><head><title>Cetak Dokumen A4</title>
        <style>@page{size:A4 portrait;margin:10mm}body{font-family:'Barlow',system-ui,sans-serif;background:#fff;margin:0;padding:16px;color:#0f172a;-webkit-print-color-adjust:exact;print-color-adjust:exact}.w-full{width:100%}</style>
        </head><body><div style="max-width:794px;margin:0 auto">${e}</div></body></html>`),n.close(),setTimeout(()=>{try{t.contentWindow.focus(),t.contentWindow.print()}catch(s){console.warn("[DocPrint] Fallback iframe print error:",s)}},500);return}a.document.write(`
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
    `),a.document.close()},is=async e=>{if(!isSaving){setIsSaving(!0),rt(e==="image"?"Membuat Gambar HD...":"Menyusun PDF...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{De(),setIsSaving(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const a=b("doc-paper-content");if(!a)throw new Error("Elemen dokumen tidak ditemukan.");const t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.left="-9999px",t.style.width=a.offsetWidth+"px",t.style.height="max-content",t.style.backgroundColor="#ffffff",t.style.overflow="visible";const n=a.cloneNode(!0);n.id="doc-clone-printing",n.style.margin="0 auto",n.style.boxShadow="none",n.classList.remove("absolute","top-0","left-1/2"),n.style.position="static",n.style.left="auto",n.style.top="auto",n.style.transform="none",n.style.height="max-content",n.style.maxHeight="none",n.style.overflow="visible",n.classList.add("h-max"),t.appendChild(n),document.body.appendChild(t);const s=Array.from(n.querySelectorAll("img"));if(await Promise.all(s.map(l=>l.complete?Promise.resolve():new Promise(m=>{l.addEventListener("load",m,{once:!0}),l.addEventListener("error",m,{once:!0})}))),await new Promise(l=>setTimeout(l,300)),t.offsetWidth===0||t.offsetHeight===0)throw new Error("Dokumen belum sepenuhnya ter-render. Coba lagi.");const o={scale:2,useCORS:!0,backgroundColor:"#ffffff",width:t.offsetWidth,height:t.offsetHeight,windowWidth:t.offsetWidth,windowHeight:t.offsetHeight},r=await html2canvas(t,o);if(document.body.removeChild(t),!r||r.width===0||r.height===0)throw new Error("Gagal menangkap gambar dokumen (canvas kosong).");const i=cVOrd||Date.now().toString(36).toUpperCase(),d=`${je.toUpperCase()}_${i}`;if(e==="image"){const l=r.toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(l,`${d}.png`,"image/png");else{const m=document.createElement("a");m.download=`${d}.png`,m.href=l,m.click()}typeof window.showToast=="function"&&window.showToast("Gambar Berhasil Disimpan!")}else{const l=r.toDataURL("image/jpeg",1);if(!l||!l.startsWith("data:image/jpeg;base64,"))throw new Error("Data gambar hasil export tidak valid.");const m=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,f=210,u=r.height*f/r.width;if(!isFinite(u)||u<=0)throw new Error("Ukuran halaman PDF tidak valid.");const h=new m({orientation:"p",unit:"mm",format:[f,u]});h.addImage(l,"JPEG",0,0,f,u),window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"?window.AndroidNativeApp.saveOrShareFile(h.output("datauristring"),`${d}.pdf`,"application/pdf"):h.save(`${d}.pdf`),typeof window.showToast=="function"&&window.showToast("File PDF Berhasil Disimpan!")}}catch(a){console.error("Export Error: ",a),typeof window.showToast=="function"&&window.showToast(a&&a.message?`Gagal: ${a.message}`:"Gagal memproses dokumen.");const t=document.getElementById("doc-clone-printing");t&&t.parentElement&&document.body.removeChild(t.parentElement)}finally{De(),setIsSaving(!1)}}};window.openDocPreview=ss;window.openCartSPHPreview=os;window.fitDocPreview=Fe;window.closeDocPreviewModal=ns;window.printDocA4=rs;window.exportDocFile=is;export{Te as $,oe as A,Se as B,qt as C,Wt as D,Pa as E,Jt as F,Es as G,Rs as H,de as I,Ls as J,F as K,ga as L,Ut as M,jt as N,As as O,Nt as P,Et as Q,Bt as R,Ot as S,Ht as T,Kt as U,ys as V,vs as W,ks as X,Ps as Y,Ts as Z,Ss as _,p as a,_t as a$,$e as a0,nt as a1,Js as a2,Ys as a3,$t as a4,ya as a5,Mt as a6,De as a7,ka as a8,vt as a9,Ta as aA,ea as aB,sa as aC,_s as aD,ja as aE,Ka as aF,Ks as aG,Ms as aH,H as aI,Oe as aJ,ta as aK,L as aL,ws as aM,bs as aN,q as aO,Na as aP,Xs as aQ,eo as aR,cs as aS,Vs as aT,ce as aU,na as aV,us as aW,ms as aX,It as aY,$s as aZ,Ft as a_,xe as aa,Ue as ab,z as ac,es as ad,rt as ae,Qt as af,qs as ag,Zt as ah,Ws as ai,Xt as aj,Gs as ak,oa as al,X as am,Xa as an,Ze as ao,zs as ap,Cs as aq,le as ar,aa as as,js as at,ie as au,ao as av,We as aw,Zs as ax,Hs as ay,it as az,te as b,zt as b0,Gt as b1,Vt as b2,Yt as b3,Bs as b4,ra as b5,ps as b6,hs as b7,Ds as b8,Is as b9,Ns as ba,Os as bb,Fs as bc,Ne as bd,Za as be,as as bf,Xe as c,Dt as d,b as e,k as f,ha as g,ot as h,c as i,Us as j,gs as k,Z as l,xs as m,Lt as n,Rt as o,fs as p,va as q,Ce as r,st as s,Y as t,wa as u,Q as v,et as w,to as x,xa as y,Qs as z};
