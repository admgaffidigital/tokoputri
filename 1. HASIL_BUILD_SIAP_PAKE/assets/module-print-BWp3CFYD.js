const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js","assets/module-pos-SMB4ktR-.js"])))=>i.map(i=>d[i]);
import{f as $e}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const _t="modulepreload",zt=function(e){return"/"+e},rt={},bt=function(t,a,s){let o=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),i=r?.nonce||r?.getAttribute("nonce");o=Promise.allSettled(a.map(d=>{if(d=zt(d),d in rt)return;rt[d]=!0;const c=d.endsWith(".css"),x=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${x}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":_t,c||(f.as="script"),f.crossOrigin="",f.href=d,i&&f.setAttribute("nonce",i),document.head.appendChild(f),c)return new Promise((g,y)=>{f.addEventListener("load",g),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})}))}function n(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return o.then(r=>{for(const i of r||[])i.status==="rejected"&&n(i.reason);return t().catch(n)})},qt={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const Wt=window.FIREBASE_CONFIG||qt;$e.apps.length||$e.initializeApp(Wt);const ee=$e.firestore(),Ke=$e.auth();typeof window<"u"&&(window.firebase=$e,window.db=ee,window.auth=Ke);try{ee.settings({ignoreUndefinedProperties:!0,experimentalAutoDetectLongPolling:!0,merge:!0})}catch{}typeof window<"u"&&(window.addEventListener("online",()=>{try{ee.enableNetwork().catch(()=>{})}catch{}}),window.addEventListener("offline",()=>{try{ee.disableNetwork().catch(()=>{})}catch{}}));let Vt=null;const Ls=()=>{bt(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{Vt=$e.analytics()}catch{}}).catch(()=>{})},te="K2ijSERTT2dg27yYGTEgn6XHSnW2",Gt={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"pill",brandStyle:"logo",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showHeroSlide:!0,heroMascotImg:"/putri_mascot_anim.gif",heroBadgeText:"Siap Melayani",heroWelcomeTag:"SELAMAT DATANG",heroTitle:"",heroSubtitle:"",showRewardCatalog:!0,showScrollTopButton:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],productOrder:[],suppliers:[],purchases:[],expenses:[],stockOpnameHistory:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let p=JSON.parse(JSON.stringify(Gt)),gt=[],xt=[],B=[];try{const e=localStorage.getItem("freshmart_cart");e&&(gt=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(xt=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(B=JSON.parse(e)||[])}catch{}let Yt={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},Jt=null,Qt=null,Zt=null,Xt="Semua Produk",ea="Semua Jenis",ta="Semua Merek",aa="",sa="newest",oa="grid",na=1,ra=12,ia="orders",la="",da=null,ca=null,pa=0,ua=[],ma=[],fa=[],wa=1,ue=[],ba=null,ga=null,xa=null,be=[],ha=[],we=null,ya=null,va=!1,ka="all",Pa="today",Ta=null,Sa=null;const Ds=e=>{Ta=e},Rs=e=>{p=e},Os=e=>{gt=e},Ns=e=>{xt=e},Is=e=>{B=e},Es=e=>{Yt=e},Bs=e=>{Jt=e},Hs=e=>{Qt=e},Ks=e=>{Zt=e},Us=e=>{Xt=e},Fs=e=>{ea=e},js=e=>{ta=e},_s=e=>{aa=e},zs=e=>{sa=e},qs=e=>{oa=e},Ws=e=>{na=e},Vs=e=>{ra=e},Gs=e=>{ia=e},Ys=e=>{la=e},Js=e=>{da=e},Qs=e=>{ca=e},Zs=e=>{pa=e},Xs=e=>{ua=e},eo=e=>{ma=e},to=e=>{fa=e},ao=e=>{wa=e},so=e=>{ue=e},oo=e=>{be=e},no=e=>{ha=e},it=e=>{we=e},ro=e=>{ya=e},io=e=>{va=e},lo=e=>{Sa=e},co=e=>{ka=e},po=e=>{Pa=e},uo=e=>{ba=e},mo=e=>{ga=e},fo=e=>{xa=e};let ht=!1;if(typeof window<"u"){const e=()=>{ht=!0,window.__hasUserInteracted=!0};["pointerdown","touchstart","mousedown","keydown"].forEach(t=>{window.addEventListener(t,e,{capture:!0,once:!0})}),window.__hasUserInteracted=!1}const Xe=()=>typeof navigator<"u"&&navigator.userActivation?navigator.userActivation.hasBeenActive:!!(ht||typeof window<"u"&&window.__hasUserInteracted);typeof window<"u"&&(window.checkUserGesture=Xe);const xe=(e="light")=>{try{const t=window.Capacitor?.Plugins?.Haptics;if(t){e==="light"||e==="selection"?t.impact({style:"LIGHT"}).catch(()=>{}):e==="medium"?t.impact({style:"MEDIUM"}).catch(()=>{}):e==="heavy"?t.impact({style:"HEAVY"}).catch(()=>{}):e==="success"?t.notification({type:"SUCCESS"}).catch(()=>{}):e==="warning"?t.notification({type:"WARNING"}).catch(()=>{}):e==="error"&&t.notification({type:"ERROR"}).catch(()=>{});return}if(typeof navigator<"u"&&typeof navigator.vibrate=="function"){if(!Xe())return;e==="light"||e==="selection"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="heavy"?navigator.vibrate(45):e==="success"?navigator.vibrate([15,30,20]):e==="warning"?navigator.vibrate([30,40,30]):e==="error"&&navigator.vibrate([40,50,40,50,40])}}catch{}};typeof window<"u"&&(window.triggerHaptic=xe);const Aa=e=>{if(e)switch(e){case"product-modal":typeof window.closeProductModal=="function"&&window.closeProductModal();break;case"pos-variant-sheet":typeof window.closePOSVariantSheet=="function"&&window.closePOSVariantSheet();break;case"variant-preview-modal":typeof window.closeVariantPreviewModal=="function"&&window.closeVariantPreviewModal();break;case"custom-confirm-modal":typeof window.closeConfirm=="function"&&window.closeConfirm();break;case"scanner-modal":typeof window.closeCameraScanner=="function"&&window.closeCameraScanner();break;case"modal-tempo-detail":typeof window.closeTempoDetailModal=="function"&&window.closeTempoDetailModal();break;case"modal-tempo-payment":typeof window.closeTempoPaymentModal=="function"&&window.closeTempoPaymentModal();break;case"modal-tempo-penalty":typeof window.closeTempoPenaltyModal=="function"&&window.closeTempoPenaltyModal();break;case"modal-supplier-detail":typeof window.closeSupplierDetailModal=="function"&&window.closeSupplierDetailModal();break;case"modal-supplier-form":typeof window.closeSupplierFormModal=="function"&&window.closeSupplierFormModal();break;case"modal-po-form":typeof window.closePurchaseFormModal=="function"&&window.closePurchaseFormModal();break;case"modal-po-detail":typeof window.closePurchaseDetailModal=="function"&&window.closePurchaseDetailModal();break;case"modal-po-payment":typeof window.closePurchasePaymentModal=="function"&&window.closePurchasePaymentModal();break;case"modal-po-product-picker":typeof window.closePurchasePickerModal=="function"&&window.closePurchasePickerModal();break;case"quick-menu-modal":typeof window.closeQuickMenuModal=="function"&&window.closeQuickMenuModal();break;case"pos-login-modal":typeof window.closePOSLoginModal=="function"&&window.closePOSLoginModal();break;case"admin-order-modal":typeof window.closeOrderDetailModal=="function"&&window.closeOrderDetailModal();break;default:{const t=document.getElementById(e);if(t){const a=t.querySelector('button[onclick*="close"], .fa-xmark')?.closest("button");if(a)a.click();else if(typeof window.closeModalAnim=="function"){const s=t.querySelector('.modal-bottom-sheet, [id$="-box"]')||t.firstElementChild;window.closeModalAnim(t,s)}else t.classList.add("hidden","opacity-0")}}}};let Y=null,De=null,Ee=0,lt=0,Be=0,ie=!1,dt=0;const $a=()=>{if(typeof document>"u")return;document.addEventListener("touchstart",t=>{if(t.touches.length!==1)return;const a=t.touches[0],s=a.target.closest('[id*="modal"], [id*="sheet"]');if(!s||s.classList.contains("hidden")||s.classList.contains("opacity-0")||!(s.classList.contains("items-end")||!!a.target.closest(".modal-bottom-sheet")||s.classList.contains("modal-bottom-sheet")))return;let n=a.target.closest(".modal-bottom-sheet")||a.target.closest('[id$="-box"]');if(n||(n=a.target.closest('[id$="-content"]')),!n)return;const r=n.classList.contains("overflow-y-auto")?n:n.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar"),i=r?r.scrollTop:0,d=n.getBoundingClientRect();!(a.clientY-d.top<=80||a.target.closest(".pull-indicator"))&&i>5||(Y=n,De=s,Ee=a.clientY,lt=a.clientX,Be=Ee,ie=!1,dt=Date.now())},{passive:!0}),document.addEventListener("touchmove",t=>{if(!Y||t.touches.length!==1)return;const a=t.touches[0];Be=a.clientY;const s=Be-Ee,o=Math.abs(a.clientX-lt);if(!ie&&o>Math.abs(s)){Y=null;return}const n=Y.classList.contains("overflow-y-auto")?Y:Y.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar");if(!(n&&n.scrollTop>5&&!ie)){if(s>0){if(ie=!0,t.cancelable&&t.preventDefault(),Y.style.transform=`translateY(${s}px)`,Y.style.transition="none",De){const r=Math.max(.2,1-s/400);De.style.backgroundColor=`rgba(15, 23, 42, ${.8*r})`}}else if(s<0&&ie){const r=s*.2;Y.style.transform=`translateY(${r}px)`,Y.style.transition="none"}}},{passive:!1});const e=()=>{if(!Y)return;const t=Y,a=De,s=Be-Ee,o=Math.max(1,Date.now()-dt),n=s/o;Y=null,De=null,ie&&(s>80||n>.45&&s>30)?(xe("light"),t.style.transition="transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",t.style.transform="translateY(100%)",a&&(a.style.transition="opacity 0.25s ease",a.style.opacity="0"),setTimeout(()=>{t.style.transform="",t.style.transition="",a&&(a.style.backgroundColor="",a.style.opacity=""),Aa(a?a.id:"")},250)):ie&&(t.style.transition="transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)",t.style.transform="",a&&(a.style.transition="background-color 0.28s ease",a.style.backgroundColor=""),setTimeout(()=>{t.style.transition=""},300)),ie=!1};document.addEventListener("touchend",e,{passive:!0}),document.addEventListener("touchcancel",e,{passive:!0})};let ct=0;const Ma=()=>{typeof document>"u"||document.addEventListener("click",e=>{const t=Date.now();if(t-ct<50)return;const a=e.target.closest('button, [role="button"], a[onclick], [id*="bnav-"], .pos-add-btn, .pos-tag-chip, #pos-variant-chips button, .interactive-tap');a&&!a.disabled&&!a.classList.contains("disabled")&&(ct=t,xe("light"))},{passive:!0,capture:!0})};let _=null;const Ca=(e="pop")=>{try{if(typeof window>"u"||!Xe())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;_||(_=new t),_.state==="suspended"&&_.resume().catch(()=>{});const a=_.currentTime;if(e==="pop"){const s=_.createOscillator(),o=_.createGain();s.type="sine",s.frequency.setValueAtTime(340,a),s.frequency.exponentialRampToValueAtTime(560,a+.07),o.gain.setValueAtTime(.14,a),o.gain.exponentialRampToValueAtTime(.001,a+.08),s.connect(o),o.connect(_.destination),s.start(a),s.stop(a+.08)}else if(e==="success"){const s=_.createOscillator(),o=_.createOscillator(),n=_.createGain(),r=_.createGain();s.type="triangle",o.type="triangle",s.frequency.setValueAtTime(523.25,a),o.frequency.setValueAtTime(659.25,a+.09),n.gain.setValueAtTime(.12,a),n.gain.exponentialRampToValueAtTime(.001,a+.22),r.gain.setValueAtTime(.14,a+.09),r.gain.exponentialRampToValueAtTime(.001,a+.32),s.connect(n),n.connect(_.destination),o.connect(r),r.connect(_.destination),s.start(a),s.stop(a+.22),o.start(a+.09),o.stop(a+.32)}else if(e==="beep"){const s=_.createOscillator(),o=_.createGain();s.type="square",s.frequency.setValueAtTime(1040,a),o.gain.setValueAtTime(.08,a),o.gain.exponentialRampToValueAtTime(.001,a+.07),s.connect(o),o.connect(_.destination),s.start(a),s.stop(a+.07)}}catch{}};typeof window<"u"&&(window.playNativeSound=Ca);const Re=()=>{if(typeof document>"u")return;const e=document.getElementById("native-scroll-top-btn");e&&(e.classList.add("opacity-0","translate-y-3"),e.classList.add("hidden"))};typeof window<"u"&&(window.hideFloatingScrollTop=Re);const La=()=>{if(typeof document>"u")return;let e=document.getElementById("native-scroll-top-btn");e||(e=document.createElement("button"),e.id="native-scroll-top-btn",document.body.appendChild(e)),e.setAttribute("aria-label","Kembali ke Atas"),e.setAttribute("title","Kembali ke Atas"),e.className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 hidden opacity-0 translate-y-3 transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900/95 dark:bg-slate-800/95 text-white shadow-xl shadow-black/25 border border-slate-700/80 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_4px_20px_rgba(var(--color-primary-rgb),0.4)] hover:scale-105 active:scale-90 cursor-pointer group",e.innerHTML='<i class="fa-solid fa-arrow-up text-xs md:text-sm transition-transform duration-200 group-hover:-translate-y-0.5"></i>',e._hasClickListener||(e._hasClickListener=!0,e.addEventListener("click",()=>{xe("light");const a=document.querySelector(".view-section:not(.hidden)");if(a){const s=a.querySelector(".scroll-content");s&&s.scrollTop>10&&s.scrollTo({top:0,behavior:"smooth"})}window.scrollTo({top:0,behavior:"smooth"})}));const t=(a,s=null)=>{if(!e)return;if(typeof window<"u"&&window.appData?.store?.showScrollTopButton===!1){Re();return}const o=document.querySelector(".view-section:not(.hidden)");if(!o||o.id!=="view-catalog"&&o.id!=="view-orders"){Re();return}if(s){const r=s.closest(".view-section");if(!r||r.id!=="view-catalog"&&r.id!=="view-orders"){Re();return}}if(document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none), [id*="dialog"]:not(.hidden), .fixed.inset-0:not(.hidden):not(.pointer-events-none):not(#native-theme-ambient)')){Re();return}a>450?(e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0","translate-y-3")})):(e.classList.add("opacity-0","translate-y-3"),setTimeout(()=>{e&&e.classList.contains("opacity-0")&&e.classList.add("hidden")},300))};window.addEventListener("scroll",()=>{t(window.scrollY||document.documentElement.scrollTop)},{passive:!0}),document.addEventListener("scroll",a=>{a.target&&a.target.classList&&a.target.classList.contains("scroll-content")&&t(a.target.scrollTop,a.target)},{passive:!0,capture:!0})},Da=()=>{if(typeof window>"u"||typeof document>"u")return;let e=document.getElementById("native-connectivity-banner");e||(e=document.createElement("div"),e.id="native-connectivity-banner",e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] -translate-y-16 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl",document.body.appendChild(e));let t=null;const a=s=>{clearTimeout(t),xe(s?"success":"warning"),s?(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-emerald-600 text-white border border-emerald-400/40",e.innerHTML='<i class="fa-solid fa-wifi text-xs"></i><span>Kembali Online — Terhubung</span>',t=setTimeout(()=>{e.classList.add("-translate-y-16","opacity-0")},2500)):(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-amber-500 text-slate-950 border border-amber-300/60",e.innerHTML='<i class="fa-solid fa-wifi-slash text-xs"></i><span>Mode Offline — Menggunakan Data Lokal</span>')};window.addEventListener("online",()=>a(!0)),window.addEventListener("offline",()=>a(!1))},wo=()=>{$a(),Ma(),La(),Da()},yt=e=>{let t="";return typeof e=="object"&&e!==null?t=`${e.name||""} ${e.category||""} ${e.subCategory||""}`.toLowerCase():t=String(e||"").toLowerCase(),["paku","baut","sekrup","mur","pipa","pvc","paralon","semen","pasir","bata","mortar","hebel","besi","baja","hollow","seng","atap","kawat","cat","paint","roll","kuas","thinner","amplas","alat","perkakas","tang","obeng","palu","kunci","gembok","meteran","bor","gerinda","paket","box"].some(o=>t.includes(o))?"fa-box-open":"fa-bag-shopping"},Ra=(e,t="",a="")=>{const s=yt(e);return{id:"brand",icon:s,subIcon:s,label:"Produk Resmi",podGradient:"linear-gradient(135deg, rgba(var(--color-primary-rgb),0.12) 0%, rgba(var(--color-primary-rgb),0.20) 100%)",accent:"rgba(var(--color-primary-rgb),0.1)",aura:"rgba(var(--color-primary-rgb),0.08)",shadowColor:"rgba(var(--color-primary-rgb),0.15)"}},Oa=e=>{if(!e||typeof e!="string")return"TP";const a=e.replace(/[^a-zA-Z0-9\s]/g," ").trim().split(/\s+/).filter(n=>n.length>0),s=a.filter(n=>/[a-zA-Z]/.test(n)),o=s.length>0?s:a;return o.length>=2?(o[0][0]+o[1][0]).toUpperCase():o.length===1?(o[0].length>=2?o[0].slice(0,2):o[0]+"P").toUpperCase():"TP"},Na=(e,t={})=>{const a=t.size||"md",s=t.className||"",o=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk"),n=yt(e);return`
    <div class="pos-smart-cover cover-${a} ${s}" title="${l(o)}">
        <!-- Subtle Theme Glow -->
        <div class="cover-surface-glow"></div>

        <!-- Center Icon Pod: Paket Box / Shopping Bag -->
        <div class="cover-center">
            <div class="cover-icon-pod">
                <i class="fa-solid ${n} cover-icon"></i>
            </div>
        </div>

        <!-- Official Store Watermark -->
        ${a!=="thumb"?`
        <div class="cover-watermark">
            <i class="fa-solid fa-store mr-1 text-[7px] opacity-75"></i><span>PUTRI UTAMA TEKNIK</span>
        </div>`:""}
    </div>`},Ia=e=>(typeof e=="object"&&e!==null?e.name:String(e||"Produk"),`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
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
    </svg>`)}`),m=e=>document.getElementById(e),vt=e=>{const t=m(e);t&&t.classList.remove("hidden")},kt=e=>{const t=m(e);t&&t.classList.add("hidden")},Ea=(e,t,a)=>{const s=m(e);s&&s.classList.toggle(t,a)},Q=(e,t)=>{const a=m(e);a&&(a.innerText=t)},Pt=(e,t)=>{const a=m(e);a&&(a.innerHTML=t)},Ba=(e,t)=>{const a=m(e);a&&(a.value=t)},Ha=e=>{const t=m(e);return t?t.value:""},Ue=(e,t)=>{const a=typeof e=="string"?m(e):e,s=typeof t=="string"?m(t):t;a&&(a.classList.remove("hidden"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{a.classList.remove("opacity-0"),s&&s.classList.remove("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95")})}))},ge=(e,t,a)=>{const s=typeof e=="string"?m(e):e,o=typeof t=="string"?m(t):t;if(!s){typeof a=="function"&&a();return}s.classList.add("opacity-0"),o&&o.classList.add("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95"),setTimeout(()=>{s.classList.add("hidden"),typeof a=="function"&&a()},280)};window.openModalAnim=Ue;window.closeModalAnim=ge;const Ka=e=>{try{return localStorage.getItem(e)}catch{return null}},Ua=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},l=e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),A=e=>{const t=Number(e);return isNaN(t)||e===null?"Rp 0":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(Math.abs(t)).replace(/^/,t<0?"-":"")},Fa=(e,t=null)=>{if(typeof e!="string")return e;const a=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);if(!a)return e;const s=a[1];return t==="image/gif"||e.toLowerCase().includes(".gif")||s==="1rkAFxnZDe2eLQ88kan2BeGSg56IkAEJ9"?`https://drive.google.com/uc?export=view&id=${s}`:`https://lh3.googleusercontent.com/d/${s}`},ja=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(t))return t;const a=t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return a?a[1]:null},Tt=e=>{if(typeof e!="string"||!e.trim())return null;const t=e.trim(),a=ja(t);if(a)return{type:"youtube",id:a,embedUrl:`https://www.youtube.com/embed/${a}?autoplay=1&mute=1&muted=1&loop=1&playlist=${a}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const s=t.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(s&&s[1]){const o=s[1];return{type:"gdrive",id:o,streamUrl:`https://drive.google.com/uc?export=download&id=${o}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${o}`,directUrl:`https://drive.google.com/uc?export=download&id=${o}`,embedUrl:`https://drive.google.com/file/d/${o}/preview?autoplay=1`}}return{type:"direct",directUrl:t,embedUrl:t}},bo=e=>{const t=Tt(e);return t?t.embedUrl:e},go=e=>{const t=Tt(e);return t?t.embedUrl:e},xo=(e,t)=>typeof e!="string"||!e?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${t}`:e.includes("googleusercontent.com")&&!e.includes("=")?`${e}=${t}`:e,ho=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",yo=(e,t,a,s)=>{document.title=e||"Toko Putri";const o=(n,r,i=!1)=>{const d=i?"property":"name";let c=document.querySelector(`meta[${d}="${n}"]`);c||(c=document.createElement("meta"),c.setAttribute(d,n),document.head.appendChild(c)),c.setAttribute("content",r)};t&&o("description",t),e&&o("og:title",e,!0),t&&o("og:description",t,!0),a&&o("og:image",a,!0),s&&o("og:url",s,!0)},vo=(e,t)=>{let a=document.getElementById(e);a||(a=document.createElement("script"),a.id=e,a.type="application/ld+json",document.head.appendChild(a)),a.textContent=JSON.stringify(t)},He=e=>{e&&Q("loader-text",e);const t=m("global-loader");t&&(t.style.opacity="1",t.style.display="flex")},Ve=()=>{const e=m("global-loader");e&&(e.style.pointerEvents="none",e.style.transition="opacity 0.25s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250))},X=(e,t,a,s)=>{typeof window.showToast=="function"&&window.showToast(e,t,a,s)},ko=(e,t,a,s)=>{if(typeof window.showConfirm=="function")return window.showConfirm(e,t,a,s)},Pe={};window.loadedScripts=Pe;const Po=(e,t)=>t&&t()?Promise.resolve():(Pe[e]||(Pe[e]=new Promise((a,s)=>{const o=document.createElement("script");o.src=e,o.onload=()=>a(),o.onerror=()=>{delete Pe[e],s(new Error("Gagal memuat: "+e))},document.head.appendChild(o)})),Pe[e]),St=e=>{let t=(e||"").toString().replace(/\D/g,"");return t?(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),t):""},_a=(e,t="")=>{const a=St(e);if(!a){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp tidak valid!");return}const s=t?encodeURIComponent(t):"",o=`https://wa.me/${a}${s?`?text=${s}`:""}`;window.AndroidNativeApp&&typeof window.AndroidNativeApp.openWhatsApp=="function"?window.AndroidNativeApp.openWhatsApp(o):window.open(o,"_blank","noopener,noreferrer")},za=(e,t=null,a=null)=>{try{const s=(typeof t=="string"?document.querySelector(t):t)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!s)return;const o=e.getBoundingClientRect(),n=s.getBoundingClientRect(),r=document.createElement("div");r.className="flying-cart-item",a?r.innerHTML=`<img src="${a}" alt="Product" class="w-full h-full object-cover rounded-full" />`:r.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const i=o.left+o.width/2-20,d=o.top+o.height/2-20,c=n.left+n.width/2-20,x=n.top+n.height/2-20;r.style.cssText=`
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
        `,document.body.appendChild(r),requestAnimationFrame(()=>{const f=c-i,g=x-d;r.style.transform=`translate3d(${f}px, ${g}px, 0) scale(0.25) rotate(18deg)`,r.style.opacity="0.4"}),setTimeout(()=>{r&&r.parentNode&&r.parentNode.removeChild(r),xe("medium");const f=document.getElementById("bottom-nav-cart-badge")||s.querySelector(".cart-count-badge");f&&(f.classList.remove("cart-bounce-pop"),f.offsetWidth,f.classList.add("cart-bounce-pop")),s.classList.remove("cart-bounce-pop"),s.offsetWidth,s.classList.add("cart-bounce-pop"),setTimeout(()=>{f&&f.classList.remove("cart-bounce-pop"),s.classList.remove("cart-bounce-pop")},600)},500)}catch(s){console.error("flyToCart error",s)}};window.normalizeWA=St;window.openWhatsApp=_a;window.sLoad=He;window.hLoad=Ve;window.el=m;window.show=vt;window.hide=kt;window.toggleCls=Ea;window.setIn=Q;window.setH=Pt;window.setV=Ba;window.getV=Ha;window.esc=l;window.fixD=Fa;window.fCur=A;window.sL=Ka;window.ssL=Ua;window.triggerHaptic=xe;window.flyToCartAnimation=za;window.renderProductCoverHtml=Na;window.getProductTheme=Ra;window.getMonogram=Oa;window.getProductCoverSvgDataUri=Ia;const pt={deviceType:"rawbt",deviceName:"Driver RawBT (Printer Thermal Android - Free)",deviceId:"",paperSize:"58mm",directPrint:!0,feedLines:3,autoCut:!0,openCashDrawer:!1,autoPrintOrder:!1,headerText:"",footerText:"Terima kasih atas kunjungan Anda!",showLogo:!0,showPoints:!0,showBarcode:!0,networkIp:"192.168.1.200:9100"},me=e=>{switch(e){case"58mm-compact":case"58mm_30":return 30;case"80mm-compact":case"80mm_42":return 42;case"80mm":return 48;case"58mm":default:return 32}},F=()=>{try{const e=localStorage.getItem("freshmart_printer_config");if(e)return{...pt,...JSON.parse(e)}}catch(e){console.warn("Gagal membaca konfigurasi printer lokal:",e)}return{...pt}},Fe=e=>{try{const a={...F(),...e};return localStorage.setItem("freshmart_printer_config",JSON.stringify(a)),a}catch(t){return console.error("Gagal menyimpan konfigurasi printer:",t),F()}},qa=()=>{const e=F(),t=(n,r)=>{const i=m(n);i&&(i.checked=!!r)},a=(n,r)=>{const i=m(n);i&&(i.value=r||"")};a("printer-device-name-display",e.deviceName),a("printer-paper-size",e.paperSize),a("printer-network-ip",e.networkIp),a("printer-header-custom",e.headerText),a("printer-footer-custom",e.footerText),t("printer-opt-points",e.showPoints),t("printer-opt-barcode",e.showBarcode),t("printer-opt-direct",e.directPrint!==!1),t("printer-opt-autocut",e.autoCut!==!1),t("printer-opt-drawer",e.openCashDrawer),t("printer-opt-autoprint",e.autoPrintOrder),$t(e.deviceType||"rawbt");const s=m("printer-settings-modal"),o=m("printer-settings-modal-box");s&&s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("printerSettings"),Ue(s,o)},At=(e=!1)=>{const t=m("printer-settings-modal"),a=m("printer-settings-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("printerSettings",e,()=>{ge(t,a)}):ge(t,a))},$t=e=>{window._selectedPrinterType=e,document.querySelectorAll(".printer-type-card").forEach(s=>{if(s.getAttribute("data-type")===e){s.classList.add("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),s.classList.remove("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const n=s.querySelector(".printer-check-badge");n&&n.classList.remove("hidden")}else{s.classList.remove("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),s.classList.add("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const n=s.querySelector(".printer-check-badge");n&&n.classList.add("hidden")}});const t=m("rawbt-quick-guide-box");t&&(e==="rawbt"?t.classList.remove("hidden"):t.classList.add("hidden"));const a=m("printer-network-box");a&&(e==="network"?a.classList.remove("hidden"):a.classList.add("hidden"))},Wa=()=>{const e=(n,r="")=>{const i=m(n);return i?i.value:r},t=(n,r=!1)=>{const i=m(n);return i?i.checked:r},a=window._selectedPrinterType||"rawbt",o={deviceType:a,deviceName:e("printer-device-name-display",a==="rawbt"?"Driver RawBT (Printer Thermal Android - Free)":a==="bluetooth"?"Bluetooth POS Printer":"Printer Thermal POS"),paperSize:e("printer-paper-size","58mm"),networkIp:e("printer-network-ip","192.168.1.200:9100"),headerText:e("printer-header-custom",""),footerText:e("printer-footer-custom","Terima kasih atas kunjungan Anda!"),showPoints:t("printer-opt-points",!0),showBarcode:t("printer-opt-barcode",!0),directPrint:t("printer-opt-direct",!0),autoCut:t("printer-opt-autocut",!0),openCashDrawer:t("printer-opt-drawer",!1),autoPrintOrder:t("printer-opt-autoprint",!1)};Fe(o),X("Pengaturan printer berhasil disimpan! ✅"),At()},Va=async()=>{if(!navigator.bluetooth){X("Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.");return}try{X("Mencari printer bluetooth di sekitar...");const e=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["000018f0-0000-1000-8000-00805f9b34fb","e7810a71-73ae-499d-8c15-faa9aef0c3f2","00001101-0000-1000-8000-00805f9b34fb"]});if(e){Fe({deviceType:"bluetooth",deviceName:e.name||"Bluetooth POS Printer",deviceId:e.id});const t=m("printer-device-name-display");t&&(t.value=e.name||"Bluetooth POS Printer"),X(`Printer "${e.name||"Bluetooth POS"}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&X("Koneksi bluetooth dibatalkan atau tidak tersedia.")}},Ga=async()=>{if(!navigator.usb){X("Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.");return}try{X("Mencari printer USB...");const e=await navigator.usb.requestDevice({filters:[]});if(e){const t=(e.productName||"USB Thermal Printer")+" (USB)";Fe({deviceType:"usb",deviceName:t,deviceId:String(e.vendorId)+":"+String(e.productId)});const a=m("printer-device-name-display");a&&(a.value=t),X(`Printer USB "${t}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&X("Koneksi USB dibatalkan atau tidak ditemukan.")}},Ya=()=>{const e=F();if((e.deviceType==="rawbt"||!e.deviceType)&&typeof window.executeRawBTTestPrint=="function"){window.executeRawBTTestPrint();return}const t=e.paperSize==="80mm",a=t?48:32,s=p.store.name||"TOKO PUTRI",o=p.store.wa||"",n=(c,x,f=a)=>{const g=f-c.length-x.length;return c+(g>0?" ".repeat(g):" ")+x},r=new Date().toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let i=`
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${l(s)}</div>
    ${o?`<div style="text-align:center;font-size:11px;margin-bottom:4px;">WA: ${l(o)}</div>`:""}
    <div style="text-align:center;font-weight:bold;font-size:12px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:3px 0;margin:6px 0;">
        *** UJI COBA CETAK STRUK ***
    </div>
    <div style="white-space:pre;font-size:11px;">Tgl   : ${r}</div>
    <div style="white-space:pre;font-size:11px;">Format: Thermal ${t?"80mm (48 Kolom)":"58mm (32 Kolom)"}</div>
    <div style="white-space:pre;font-size:11px;">Koneksi: ${e.deviceType.toUpperCase()}</div>
    <div style="white-space:pre;font-size:11px;">Status : KONEKSI BERHASIL</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:11px;font-weight:bold;">${n("TES ITEM UJI COBA","HARGA",a)}</div>
    <div style="white-space:pre;font-size:10px;">${n("1x Produk Percobaan","Rp 25.000",a)}</div>
    <div style="white-space:pre;font-size:10px;">${n("2x Kertas Thermal Kasir","Rp 15.000",a)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:12px;font-weight:bold;">${n("TOTAL UJI","Rp 40.000",a)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    `;e.showPoints&&(i+=`<div style="white-space:pre;font-size:11px;">${n("Simulasi Poin Member","+10 Poin",a)}</div>`,i+='<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>'),e.showBarcode&&(i+=`<div style="text-align:center;margin:6px 0;">
            <div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*TEST-POS-${Date.now().toString().slice(-6)}*</div>
            <div style="font-size:9px;color:#333;">(BARCODE TEST OK)</div>
        </div><div style="border-bottom:1px dashed #000;margin:6px 0;"></div>`),i+=`
    <div style="text-align:center;font-size:10px;margin-top:6px;line-height:1.3;">
        ${l(e.footerText||"Terima kasih atas kunjungan Anda!")}
    </div>
    <div style="text-align:center;font-size:9px;font-style:italic;margin-top:4px;">
        Printer siap digunakan untuk operasional kasir Toko Putri.
    </div>
    <div style="height:25px;"></div>
    `;let d=m("thermal-print-section");if(d||(d=document.createElement("div"),d.id="thermal-print-section",document.body.appendChild(d)),d.innerHTML=`<div style="width:${t?"80mm":"58mm"};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${i}</div>`,typeof window.sendToRawBT=="function"){const c=d.innerText,x=btoa(unescape(encodeURIComponent(c)));window.sendToRawBT(x,c,i)}else window.print();X("Perintah uji cetak berhasil dikirim! 🖨️")};window.getPrinterConfig=F;window.getPaperCols=me;window.savePrinterConfig=Fe;window.openPrinterSettingsModal=qa;window.closePrinterSettingsModal=At;window.selectPrinterDeviceTypeUI=$t;window.savePrinterSettingsFromModal=Wa;window.scanBluetoothPrinter=Va;window.scanUsbPrinter=Ga;window.executeTestPrint=Ya;let ut={},z="view-catalog",Ae=!1,Oe=null,Ge=["view-catalog"];const je=e=>{history.pushState({modal:e},"",window.location.href),ue.push(e)},_e=(e,t,a)=>{if(!t){const s=ue.lastIndexOf(e);s>-1&&ue.splice(s,1),Ae=!0,Oe&&clearTimeout(Oe),Oe=setTimeout(()=>{Ae=!1},300);try{history.back()}catch{Ae=!1}}a()},V=(e,t=!1)=>{if(!e||e===z)return;t||(history.pushState({view:e},"",window.location.href),e==="view-catalog"?Ge=["view-catalog"]:Ge.push(e));const a=m(z);if(a){const o=a.querySelector(".scroll-content");o&&(ut[z]=o.scrollTop)}if(z==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime(),z==="view-pos-cashier"&&e!=="view-pos-cashier"&&(typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()),z==="view-admin"&&e!=="view-admin"){const o=m("view-admin");o&&o.classList.remove("admin-pos-mode"),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()}const s=m(e);if(s&&(s.classList.remove("hidden"),s.classList.add("flex")),document.querySelectorAll(".view-section").forEach(o=>{o!==s&&(o.classList.add("hidden"),o.classList.remove("flex"))}),typeof window.hideFloatingScrollTop=="function")window.hideFloatingScrollTop();else{const o=document.getElementById("native-scroll-top-btn");o&&(o.classList.add("opacity-0","translate-y-3"),o.classList.add("hidden"))}if(s){e==="view-cart"&&typeof window.renderCart=="function"?window.renderCart():e==="view-checkout"&&typeof window.rChck=="function"?window.rChck():e==="view-payment"&&typeof window.rPay=="function"?window.rPay():e==="view-wishlist"&&typeof window.renderWish=="function"?window.renderWish():e==="view-orders"&&typeof window.renderMyOrders=="function"?window.renderMyOrders():e==="view-faq"&&typeof window.renderStorefrontFAQ=="function"?window.renderStorefrontFAQ():e==="view-pos-cashier"&&bt(()=>import("./module-pos-SMB4ktR-.js").then(n=>n.a),__vite__mapDeps([2,1])).then(n=>{typeof n.renderPOSStorefront=="function"&&n.renderPOSStorefront()}).catch(n=>console.error("[POS] Gagal memuat storefront:",n));const o=s.querySelector(".scroll-content");if(o)if(t){const n=ut[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{o.scrollTop=n}))}else o.scrollTo(0,0)}z=e,Mt(e)},Mt=(e=z)=>{const t=m("bottom-nav-bar");if(!t)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin","view-pos-cashier"].includes(e)){t.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.remove("translate-y-0","opacity-100");return}if(t.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(s=>s.classList.remove("active")),e==="view-catalog"){const s=m("bnav-home");s&&s.classList.add("active")}else if(e==="view-orders"){const s=m("bnav-orders");s&&s.classList.add("active")}else if(e==="view-wishlist"||e==="view-faq"){const s=m("bnav-menu");s&&s.classList.add("active")}},Ja=e=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(e==="home"?"medium":"light"),e==="home")if(z==="view-catalog"){const t=document.querySelector("#view-catalog .scroll-content");t?t.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else V("view-catalog");else e==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():e==="cart"?V("view-cart"):e==="orders"?V("view-orders"):e==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},Ct=()=>{const e=document.querySelector("#view-catalog .scroll-content"),t=m("pull-to-refresh-indicator"),a=m("ptr-icon"),s=m("ptr-text");if(!e||!t)return;let o=0,n=0,r=!1,i=!1;const d=65;e.addEventListener("touchstart",c=>{e.scrollTop<=5&&!i&&(o=c.touches[0].pageY,r=!0)},{passive:!0}),e.addEventListener("touchmove",c=>{if(!r||i)return;n=c.touches[0].pageY;const x=n-o;if(x>15&&e.scrollTop<=5){t.classList.add("visible");const f=Math.min(x/d,1.5);a&&(a.style.transform=`rotate(${f*240}deg)`),s&&(s.innerText=x>=d?"Lepaskan untuk segarkan":"Tarik ke bawah untuk refresh")}else t.classList.remove("visible")},{passive:!0}),e.addEventListener("touchend",async()=>{if(!r||i)return;if(r=!1,n-o>=d&&e.scrollTop<=5){i=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),a&&(a.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",a.style.transform=""),s&&(s.innerText="Menyinkronkan katalog...");try{typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),s&&(s.innerText="Katalog Terkini Disinkron!"),a&&(a.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch{s&&(s.innerText="Gagal sinkron data")}setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>{i=!1,a&&(a.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",a.style.transform=""),s&&(s.innerText="Tarik ke bawah untuk refresh")},300)},600)}else t.classList.remove("visible"),a&&(a.style.transform="")})},Lt=e=>{e==="product"&&typeof window.closeProductModal=="function"?window.closeProductModal(!0):e==="category"&&typeof window.closeCategoryModal=="function"?window.closeCategoryModal(!0):e==="brand"&&typeof window.closeBrandModal=="function"?window.closeBrandModal(!0):e==="admin"&&typeof window.closeAdminModal=="function"?window.closeAdminModal(!0):e==="adminOrder"&&typeof window.closeOrderDetailModal=="function"?window.closeOrderDetailModal(!0):e==="receipt"&&typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):e==="docPreview"&&typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):e==="scanner"&&typeof window.closeCameraScanner=="function"?window.closeCameraScanner(!0):e==="confirm"&&typeof window.closeConfirm=="function"?window.closeConfirm(!0):e==="customerOrder"&&typeof window.closeCustomerOrderDetailModal=="function"?window.closeCustomerOrderDetailModal(!0):e==="restock"&&typeof window.closeRestockModal=="function"?window.closeRestockModal(!0):e==="quickprice"&&typeof window.closeQuickPriceModal=="function"?window.closeQuickPriceModal(!0):e==="member"&&typeof window.closeMemberModal=="function"?window.closeMemberModal(!0):e==="prompt"&&typeof window.closePrompt=="function"?window.closePrompt(!0):e==="review"&&typeof window.closeReviewModal=="function"?window.closeReviewModal(!0):e==="quickmenu"&&typeof window.closeQuickMenuModal=="function"?window.closeQuickMenuModal(!0):e==="variantPreview"&&typeof window.closeVariantPreviewModal=="function"?window.closeVariantPreviewModal(!0):e==="terms"&&typeof window.closeTermsModal=="function"?window.closeTermsModal(!0):e==="privacy"&&typeof window.closePrivacyModal=="function"?window.closePrivacyModal(!0):e==="askQuestion"&&typeof window.closeAskQuestionModal=="function"?window.closeAskQuestionModal(!0):e==="quickVariant"&&typeof window.closeQuickVariantSheet=="function"?window.closeQuickVariantSheet(!0):e==="adminFAQ"&&typeof window.closeAdminFAQModal=="function"?window.closeAdminFAQModal(!0):e==="printerSettings"&&typeof window.closePrinterSettingsModal=="function"?window.closePrinterSettingsModal(!0):e==="exitConfirm"&&typeof window.closeExitConfirmModal=="function"?window.closeExitConfirmModal(!0):e==="appDownload"&&typeof window.closeAppDownloadModal=="function"?window.closeAppDownloadModal(!0):e==="voucher"&&typeof window.closeVoucherModal=="function"?window.closeVoucherModal(!0):e==="guide"&&typeof window.closeShoppingGuideModal=="function"?window.closeShoppingGuideModal(!0):e==="changelog"&&typeof window.closeChangelogModal=="function"?window.closeChangelogModal(!0):e==="guarantee"&&typeof window.closeQualityGuaranteeModal=="function"?window.closeQualityGuaranteeModal(!0):e==="security"&&typeof window.closeSecurityModal=="function"?window.closeSecurityModal(!0):e==="posVariantSheet"&&typeof window.closePOSVariantSheet=="function"?window.closePOSVariantSheet(!0):e==="posLogin"&&typeof window.closePOSLoginModal=="function"?window.closePOSLoginModal(!0):e==="posCartDrawer"&&typeof window.closePOSCartDrawer=="function"?window.closePOSCartDrawer(!0):e==="posPayment"&&typeof window.closePayModal=="function"?window.closePayModal(!0):e==="purchaseForm"&&typeof window.closeCreatePOModal=="function"?window.closeCreatePOModal(!0):e==="purchasePicker"&&typeof window.closePOProductPicker=="function"?window.closePOProductPicker(!0):e==="purchaseDetail"&&typeof window.closePurchaseDetailModal=="function"?window.closePurchaseDetailModal(!0):e==="purchasePayment"&&typeof window.closePurchasePaymentModal=="function"?window.closePurchasePaymentModal(!0):e==="supplierForm"&&typeof window.closeSupplierFormModal=="function"?window.closeSupplierFormModal(!0):e==="supplierDetail"&&typeof window.closeSupplierDetailModal=="function"?window.closeSupplierDetailModal(!0):e==="posHoldPrompt"&&typeof window.closePOSHoldPrompt=="function"?window.closePOSHoldPrompt(!0):e==="posHeldModal"&&typeof window.closePOSHeldModal=="function"?window.closePOSHeldModal(!0):e==="posCameraScanner"&&typeof window.closePOSCameraScanner=="function"?window.closePOSCameraScanner(!0):e==="tempoDetail"&&typeof window.closeTempoDetailModal=="function"?window.closeTempoDetailModal(!0):e==="tempoPayment"&&typeof window.closeTempoPaymentModal=="function"?window.closeTempoPaymentModal(!0):e==="tempoPenalty"&&typeof window.closeTempoPenaltyModal=="function"?window.closeTempoPenaltyModal(!0):e==="expenseForm"&&typeof window.closeExpenseModal=="function"?window.closeExpenseModal(!0):e==="expenseReceipt"&&typeof window.closeExpenseReceiptPreview=="function"&&window.closeExpenseReceiptPreview(!0)},Dt=()=>{const e=m("exit-confirm-modal");e&&(e.classList.contains("hidden")&&je("exitConfirm"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=m("exit-confirm-modal-box");t&&t.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},et=(e=!1)=>{_e("exitConfirm",e,()=>{const t=m("exit-confirm-modal"),a=m("exit-confirm-modal-box");t&&t.classList.add("opacity-0"),a&&a.classList.add("scale-95"),setTimeout(()=>{t&&t.classList.add("hidden")},250)})},Qa=()=>{et(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri! 🙏"),setTimeout(()=>{try{window.close()}catch{}},400))},Za=()=>{const e=document.getElementById("pos-receipt-fallback-modal")||document.getElementById("pos-shift-receipt-modal")||document.getElementById("pos-success-modal")||document.getElementById("pos-recall-confirm-modal")||document.getElementById("pos-closed-success-modal");if(e){e.remove();return}if(ue.length>0){try{window.history.back()}catch{const s=ue.pop();Lt(s)}return}if(z==="view-admin"){const a=m("admin-content-view"),s=m("admin-dashboard-view");if(!!(a&&!a.classList.contains("hidden")||s&&s.classList.contains("hidden")||window.history.state&&window.history.state.tab||typeof window.cTab<"u"&&window.cTab)){if(window.history.state&&window.history.state.tab&&window.history.length>1)try{window.history.back();return}catch{}typeof window.openAdminMenu=="function"&&window.openAdminMenu();try{window.history.replaceState({view:"view-admin"},"",window.location.href)}catch{}return}if(typeof window.showConfirm=="function"){const n=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=n?"Keluar Panel Owner":"Keluar CMS Toko",i=n?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,i,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}return}if(z==="view-pos-cashier"){typeof window.showConfirm=="function"?window.showConfirm("Keluar Mode Kasir","Yakin keluar dari mode POS kasir?",()=>{typeof window.exitPOSMode=="function"?window.exitPOSMode():V("view-catalog")},"Ya, Keluar",!0):V("view-catalog");return}if(z!=="view-catalog"){if(z==="view-payment"){V("view-checkout");return}if(z==="view-checkout"){V("view-cart");return}if(z==="view-cart"){V("view-catalog");return}window.history.length>1?window.history.back():V("view-catalog");return}const t=m("exit-confirm-modal");t&&!t.classList.contains("hidden")?et():Dt()},Xa=()=>{Ct();try{(!history.state||!history.state.view)&&history.replaceState({view:"view-catalog"},"",window.location.href)}catch{}window.addEventListener("popstate",e=>{if(Ae){Ae=!1,Oe&&clearTimeout(Oe);return}if(ue.length>0){const o=ue.pop();Lt(o);return}const t=e.state||{},a=t.view||null;if(window.isAdm||window.__localIsAdm)if(a==="view-admin")V("view-admin",!0),t.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(t.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu();else{const o=m("admin-content-view");if(o&&!o.classList.contains("hidden")){history.pushState({view:"view-admin"},"",window.location.href),V("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}if(history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"){const n=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=n?"Keluar Panel Owner":"Keluar CMS Toko",i=n?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,i,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}}else if(a){let o=a;a==="view-admin"&&(o="view-admin-login"),V(o,!0)}else V("view-catalog",!0)})};window.pushModalHistory=je;window.requestCloseModal=_e;window.changeView=V;window.setupHistoryRouter=Xa;window.onBottomNavClick=Ja;window.updateBottomNav=Mt;window.initPullToRefresh=Ct;window.handleAppBackButton=Za;window.openExitConfirmModal=Dt;window.closeExitConfirmModal=et;window.confirmExitApp=Qa;window.isProgrammaticModalClose=Ae;window.viewHistoryStack=Ge;try{Object.defineProperty(window,"curViewName",{get:()=>z,set:e=>{z=e},configurable:!0})}catch{}let Ye=null,Te=null;const es=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}Z("Kode "+e+" berhasil disalin!")}catch{Z("Gagal menyalin. Kode: "+e)}},Z=(e,t,a,s)=>{const o=m("toast");if(!o)return;if(!t){const u=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(u)?t="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(u)?t="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(u)?t="warning":/upload|proses|memuat|loading|sedang/.test(u)?t="loading":t="info"}typeof window.triggerHaptic=="function"&&window.triggerHaptic(t==="error"?"error":t==="warning"?"warning":t==="success"?"success":"light");const n=getComputedStyle(document.documentElement),r=n.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",i=n.getPropertyValue("--color-primary").trim()||"#10b981";n.getPropertyValue("--color-primary-dark").trim();const d={success:{icon:"fa-circle-check",label:"Berhasil",accent:i,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:i,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:i,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`}},c=d[t]||d.info,x=m("toast-icon");x&&(x.className="fa-solid "+c.icon);const f=m("toast-title");f&&(f.textContent=a||c.label,f.style.display="block",f.style.color=c.accent);const g=m("toast-icon-wrap");g&&(g.style.background=c.iconBg,g.style.color=c.accent),Q("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let y=m("toast-progress");y||(y=document.createElement("div"),y.id="toast-progress",o.appendChild(y)),y.style.background=c.accent,y.style.transition="none",y.style.width="100%",y.style.opacity="0.85",clearTimeout(Ye),o.classList.add("toast-show");const w=s||(t==="loading"?8e3:t==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{y.style.transition=`width ${w}ms linear`,y.style.width="0%"})),Ye=setTimeout(()=>{o.classList.remove("toast-show")},w)},ts=e=>Z(e,"loading","Memproses...",8e3),as=()=>{clearTimeout(Ye);const e=m("toast");e&&e.classList.remove("toast-show")},ss=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")};let pe=null;const os=(e,t,a,s="Ya, Hapus",o=!0)=>{let n=e,r=t,i=a,d=s,c=o;typeof t=="function"&&(i=t,r=e,n=typeof s=="string"&&s!=="Ya, Hapus"?s:"Konfirmasi Tindakan",d=typeof a=="string"?a:"Ya, Lanjutkan",c=!0);let x=null;typeof i!="function"?(x=new Promise(w=>{pe=w}),Te=null):(Te=i,pe=null),Q("confirm-title",n);const f=m("confirm-msg");if(f)if(typeof r=="string"){const w=typeof window.DOMPurify<"u"?window.DOMPurify.sanitize(r,{ADD_ATTR:["class","style"]}):r;f.innerHTML=w}else f.textContent=r||"";const g=m("confirm-yes-btn");g&&(g.innerText=d,c?(g.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 active:scale-95 transition-all text-xs sm:text-sm shadow-md shadow-rose-500/30 cursor-pointer",m("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",m("confirm-icon").className="fa-solid fa-triangle-exclamation"):(g.className="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-2xl hover:opacity-90 active:scale-95 transition-all text-xs sm:text-sm shadow-sm cursor-pointer",m("confirm-icon-box").className="w-16 h-16 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-[var(--color-primary)]/20",m("confirm-icon").className="fa-solid fa-copy"));const y=m("custom-confirm-modal");return y&&y.classList.contains("hidden")&&je("confirm"),vt("custom-confirm-modal"),setTimeout(()=>{m("custom-confirm-modal").classList.remove("opacity-0"),m("custom-confirm-box").classList.remove("scale-95")},10),x},Je=(e=!1)=>{if(pe){const t=pe;pe=null,t(!1)}_e("confirm",e,()=>{m("custom-confirm-modal").classList.add("opacity-0"),m("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>kt("custom-confirm-modal"),300)})},ns=()=>{if(pe){const e=pe;pe=null,Te=null,Je(),setTimeout(()=>{e(!0)},150);return}if(Te){const e=Te;Te=null,Je(),setTimeout(()=>{e()},150)}},rs=(e,t="",a=null)=>{let s=null,o=null;typeof a!="function"&&(o=new Promise(g=>{s=g}));const n=t!=null?String(t):"",r=n.length>50||n.includes(`
`)||/balasan|catatan|alasan|deskripsi|pesan|keterangan/i.test(e),i=n.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),d=r?`<textarea id="prompt-input" rows="3" class="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 custom-scrollbar resize-none leading-relaxed" placeholder="Tuliskan di sini...">${i}</textarea>`:`<input type="text" id="prompt-input" value="${i}" class="w-full px-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-bold focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 text-center" autocomplete="off" />`;let c=document.createElement("div");c.id="custom-prompt-container",c.className="fixed inset-0 z-[10005] bg-slate-900/85 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300",c.onclick=g=>{g.target===c&&window.closePrompt()},c.innerHTML=`
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
    `,document.body.appendChild(c);const x=c.querySelector("div");je("prompt"),setTimeout(()=>{c.classList.remove("opacity-0"),x.classList.remove("scale-95")},10);const f=c.querySelector("#prompt-input");return f&&(f.focus(),f.select(),f.onkeydown=g=>{g.key==="Enter"&&(!r||g.ctrlKey)?(g.preventDefault(),c.querySelector("#prompt-ok")?.click()):g.key==="Escape"&&(g.preventDefault(),window.closePrompt())}),window.closePrompt=(g=!1)=>{if(!(!c||!c.parentNode)){if(s){const y=s;s=null,y(null)}_e("prompt",g,()=>{c.classList.add("opacity-0"),x.classList.add("scale-95"),setTimeout(()=>c.remove(),300),window.closePrompt=null})}},c.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),c.querySelector("#prompt-ok").onclick=()=>{let g=f.value;if(s){const y=s;s=null,window.closePrompt(),y(g)}else window.closePrompt(),typeof a=="function"&&a(g)},o},is=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=es;window.showToast=Z;window.showToastLoading=ts;window.hideToast=as;window.toggleTheme=ss;window.showConfirm=os;window.closeConfirm=Je;window.executeConfirm=ns;window.customPrompt=rs;window.checkProPrint=is;const O=e=>"Rp "+Math.round(Number(e||0)).toLocaleString("id-ID"),qe=e=>Math.round(Number(e||0)).toLocaleString("id-ID"),ls=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(2).replace(/\.?0+$/,"")},U=e=>e?String(e).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"").replace(/[\r\t]/g," ").replace(/[^\x20-\x7E\n]/g," "):"",K=(e,t)=>{if(!e)return[];const a=U(e).replace(/ +/g," ").trim();if(!a)return[];if(a.length<=t)return[a];const s=a.split(" "),o=[];let n="";for(const r of s)if(r)if(r.length>t){n&&(o.push(n),n="");for(let i=0;i<r.length;i+=t){const d=r.substring(i,i+t);d.length===t?o.push(d):n=d}}else(n?n.length+1+r.length:r.length)<=t?n=n?n+" "+r:r:(o.push(n),n=r);return n&&o.push(n),o},ae=(e,t=!1)=>{const a=e?new Date(e):new Date,s=String(a.getDate()).padStart(2,"0"),o=String(a.getMonth()+1).padStart(2,"0"),n=t?a.getFullYear():String(a.getFullYear()).slice(-2),r=String(a.getHours()).padStart(2,"0"),i=String(a.getMinutes()).padStart(2,"0");return`${s}/${o}/${n} ${r}:${i}`},Rt=(e,t,a,s=!1)=>{const o=U(String(e||"")).trimEnd(),n=U(String(t||"")).trim(),r=a-o.length-n.length;if(r>=0)return[o+" ".repeat(r)+n];if(s){const c=Math.max(0,a-n.length-1),x=o.substring(0,c).trimEnd(),f=Math.max(1,a-x.length-n.length);return[x+" ".repeat(f)+n]}const i=K(o,a),d=i[i.length-1]||"";if(d.length+1+n.length<=a){const c=a-d.length-n.length;return i[i.length-1]=d+" ".repeat(c)+n,i}else{const c=Math.max(0,a-n.length);return[...i," ".repeat(c)+n]}};class Me{constructor(t=32){this.cols=Number(t)||32,this.bytes=[],this.plainLines=[]}init(){return this.bytes.push(27,64),this}align(t="left"){const a=t==="center"?1:t==="right"?2:0;return this.bytes.push(27,97,a),this}bold(t=!0){return this.bytes.push(27,69,t?1:0),this}size(t="normal"){return t==="title"?this.bytes.push(29,33,17):t==="tall"||t==="total"?this.bytes.push(29,33,1):t==="wide"?this.bytes.push(29,33,16):this.bytes.push(29,33,0),this}text(t){if(!t)return this;const a=U(t);for(let s=0;s<a.length;s++)this.bytes.push(a.charCodeAt(s));return this}line(t="",a="left"){return this.align(a),this.text(t),this.bytes.push(10),this.plainLines.push(t),this}centered(t=""){return K(t,this.cols).forEach(s=>this.line(s,"center")),this}twoColumn(t="",a="",s=!1,o=!1){return s&&this.bold(!0),Rt(t,a,this.cols,o).forEach(r=>this.line(r,"left")),s&&this.bold(!1),this}itemRow(t){const a=t.variantName?` (${t.variantName}${t.colorCode?" "+t.colorCode:""})`:"",s=(t.name||"Barang")+a+(t.poTime?" [PO]":"");this.bold(!0),K(s,this.cols).forEach(c=>this.line(c,"left")),this.bold(!1);const n=t.effectivePrice||t.price||0,r=t.subtotal!==void 0?t.subtotal:parseFloat(t.qty||1)*n,i=`  ${ls(t.qty)} ${t.unit||"pcs"} x ${qe(n)}`,d=qe(r);return this.twoColumn(i,d,!1,!1),t.discount&&t.discount>0&&this.twoColumn("  (Pot. Diskon)",`-${qe(t.discount)}`,!1,!0),t.poTime&&this.line(`  * Estimasi PO: ${t.poTime}`,"left"),this}separator(t="-"){const a=t.repeat(this.cols);return this.line(a,"left"),this}doubleSeparator(){return this.separator("=")}feed(t=3){this.bytes.push(27,100,Math.max(1,t));for(let a=0;a<t;a++)this.plainLines.push("");return this}cut(){return this.bytes.push(29,86,65,3),this}openDrawer(){return this.bytes.push(27,112,0,25,250),this}toBase64(){const t=new Uint8Array(this.bytes);let a="";const s=t.length,o=8192;for(let n=0;n<s;n+=o){const r=t.subarray(n,n+o);a+=String.fromCharCode.apply(null,r)}return btoa(a)}toPlainText(){return this.plainLines.join(`
`)}}const Ce=(e,t="",a="")=>{const s=/android/i.test(navigator.userAgent||"");if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function")try{return window.AndroidNativeApp.printRawBT(e),Z("Mencetak struk via RawBT... 🖨️"),!0}catch(o){console.warn("[RawBT] AndroidNativeApp error, mencoba intent...",o)}if(s)try{Z("Membuka Printer RawBT... 🖨️");const o=`intent:base64,${e}#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;end;`;return window.location.href=o,setTimeout(()=>{if(!document.hidden)try{window.location.href=`rawbt:base64,${e}`}catch{}},800),!0}catch(o){console.warn("[RawBT] Intent trigger failed:",o)}return Z("Mencetak struk kasir... 🖨️"),tt(a||t),!0},tt=e=>{const t=F(),s=me(t.paperSize)>=40,o=s?"80mm":"58mm";let n=m("thermal-print-section");n||(n=document.createElement("div"),n.id="thermal-print-section",document.body.appendChild(n)),n.className=s?"paper-80mm":"paper-58mm",document.body.classList.remove("paper-58mm","paper-80mm"),document.body.classList.add(s?"paper-80mm":"paper-58mm");let r=document.getElementById("dynamic-print-page-style");r||(r=document.createElement("style"),r.id="dynamic-print-page-style",document.head.appendChild(r)),r.innerHTML=`@media print { @page { margin: 0; size: ${o} auto; } html, body { width: ${o} !important; } }`;const d=typeof e=="string"&&e.includes("<")&&e.includes(">")?e:`<pre style="font-family:'Courier New',Courier,monospace;font-size:11px;margin:0;line-height:1.25;white-space:pre-wrap;word-break:break-word;">${l(e)}</pre>`;n.innerHTML=`
        <div style="width:100%;font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.25;color:#000;background:#fff;padding:0;">
            ${d}
        </div>
    `,setTimeout(()=>{window.print()},100)},ds=()=>{if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.openRawBT=="function"){window.AndroidNativeApp.openRawBT();return}/android/i.test(navigator.userAgent||"")?(window.location.href="intent:#Intent;package=ru.a402d.rawbtprinter;end;",setTimeout(()=>{document.hidden||(window.location.href="https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter")},1200)):window.open("https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter","_blank")},Ot=(e,t=null)=>{const a=t||F(),s=me(a.paperSize),o=s>=40,n=new Me(s);n.init(),a.openCashDrawer&&e.payment?.method==="cash"&&n.openDrawer();const r=U(a.headerText||p.store?.name||"TOKO PUTRI").trim(),i=U(p.store?.address||"").trim(),d=U(p.store?.wa||"").trim(),c=Math.floor(s/2);r.length<=c?(n.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),n.size("normal").bold(!1)):(n.align("center").bold(!0).size("tall"),K(r.toUpperCase(),s).forEach(h=>n.line(h,"center")),n.size("normal").bold(!1)),i&&K(i,s).forEach(h=>n.line(h,"center")),d&&n.line(`WA: ${d}`,"center");const x=e.payment?.taxNpwp||p.store?.taxNpwp;x&&n.line(`NPWP: ${x}`,"center"),n.separator("-");const f=ae(e.dateMs||Date.now(),o),g=`#${e.txId}`;n.twoColumn(`No : ${g}`,f,!1,!0);const y=(e.cashierName||"Kasir").substring(0,o?16:9),w=(e.customer?.name||"Umum").substring(0,o?18:11);if(n.twoColumn(`Ksr: ${y}`,`Plg: ${w}`,!1,!0),e.customer?.phone&&n.line(`HP : ${e.customer.phone}`,"left"),n.separator("-"),(e.items||[]).forEach(h=>{n.itemRow(h)}),n.separator("-"),n.twoColumn("Subtotal",O(e.subtotal)),(e.globalDiscount||0)>0){const h=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";n.twoColumn(h,`- ${O(e.globalDiscount)}`)}if((e.pointDiscount||0)>0&&n.twoColumn(`Diskon Poin (${e.pointsRedeemed||0} Poin)`,`- ${O(e.pointDiscount)}`),e.claimedReward&&e.claimedReward.name&&(n.separator("-"),n.bold(!0).line(`[KLAIM HADIAH: ${U(e.claimedReward.name)}]`,"left").bold(!1),n.twoColumn("Poin Reward Ditukar",`-${e.claimedReward.pointsCost||0} Poin`)),(e.payment?.ppnEnabled||e.payment?.ppnShowZero||e.payment?.ppnRate===0||e.payment?.ppnAmount&&e.payment.ppnAmount>0)&&(p.store?.ppnEnabled||e.payment?.ppnEnabled)){const h=e.payment?.ppnType==="inclusive",b=e.payment?.ppnRate!==void 0?e.payment.ppnRate:p.store?.ppnRate||0,T=e.payment?.ppnAmount||0,$=e.payment?.ppnLabel||`${h?"Inc. PPN":"PPN"} (${b}%)`,v=T>0?`${h?"":"+ "}${O(T)}`:"Rp 0";n.twoColumn($,v)}n.doubleSeparator(),n.bold(!0).size("tall").twoColumn("TOTAL",O(e.total)).size("normal").bold(!1),n.doubleSeparator();const M=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",L=M?"PUTRI PAYLATER":(e.payment?.method||"CASH").toUpperCase();if(n.twoColumn("Metode Bayar",L),e.payment?.method==="cash")n.twoColumn("Bayar Tunai",O(e.payment.paid)),n.bold(!0).twoColumn("Kembalian",O(e.payment.change)).bold(!1);else if(e.payment?.method==="tempo"&&(M&&n.twoColumn("Limit Terpakai",O(e.payment?.paylaterUsed||e.paylaterUsed||e.total-(e.payment?.tempoDp??0))),n.twoColumn("Uang Muka (DP)",O(e.payment?.tempoDp??e.payment?.dp??0)),n.bold(!0).twoColumn(M?"Tagihan PayLater":"Sisa Piutang",O(e.payment.tempoBalance||0)).bold(!1),e.payment.tempoDueDate)){const h=typeof e.payment.tempoDueDate=="number"?new Date(e.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e.payment.tempoDueDate;n.line(`Jatuh Tempo: ${h}`,"left")}a.showPoints&&(e.pointsEarned>0||(e.pointsRedeemed||0)>0)&&(n.separator("-"),e.pointsEarned>0&&n.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),(e.pointsRedeemed||0)>0&&n.twoColumn("Poin Ditukar",`-${e.pointsRedeemed} Poin`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&n.twoColumn("Sisa Saldo Poin",`${e.finalMemberPoints} Poin`)),a.showBarcode&&(n.separator("-"),n.align("center"),n.line(`*POS-${e.txId}*`,"center"),n.line("(SCAN DI KASIR)","center")),n.separator("-");const C=a.footerText||"Terima Kasih Atas Kunjungan Anda!";return K(C,s).forEach(h=>n.line(h,"center")),n.feed(a.feedLines||3),a.autoCut&&n.cut(),{base64:n.toBase64(),plainText:n.toPlainText()}},Nt=(e,t=!1,a=null)=>{const s=a||F(),o=me(s.paperSize),n=o>=40,r=new Me(o);r.init();const i=U(s.headerText||p.store?.name||"TOKO PUTRI").trim(),d=U(p.store?.address||"").trim(),c=U(p.store?.wa||"").trim(),x=Math.floor(o/2);i.length<=x?(r.align("center").bold(!0).size("title").line(i.toUpperCase(),"center"),r.size("normal").bold(!1)):(r.align("center").bold(!0).size("tall"),K(i.toUpperCase(),o).forEach($=>r.line($,"center")),r.size("normal").bold(!1)),d&&K(d,o).forEach($=>r.line($,"center")),c&&r.line(`WA: ${c}`,"center"),r.separator("-");const f=n?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **";r.bold(!0).line(f,"center").bold(!1),r.separator("-");const g=ae(e.startTime,n),y=ae(e.endTime||Date.now(),n);r.twoColumn("Shift ID",`#${e.shiftNo||e.id||"-"}`,!1,!0),r.twoColumn("Kasir",(e.cashierName||"Kasir").substring(0,n?20:12),!1,!0),r.twoColumn("Mulai",g,!1,!0),r.twoColumn("Selesai",y,!1,!0),r.separator("-");const w=parseFloat(e.startingCash)||0,u=parseFloat(e.cashSales)||0,M=parseFloat(e.qrisSales)||0,L=parseFloat(e.bankSales||e.transferSales)||0,C=parseFloat(e.tempoSales)||0,h=parseFloat(e.totalSales)||u+M+L+C,b=e.txCount||0;if(r.bold(!0).line("RINGKASAN PENJUALAN","left").bold(!1),r.twoColumn("Modal Awal Laci",O(w)),r.twoColumn("Penjualan Tunai",O(u)),M>0&&r.twoColumn("Penjualan QRIS",O(M)),L>0&&r.twoColumn("Penjualan Transfer",O(L)),C>0&&r.twoColumn("Penjualan Tempo",O(C)),r.separator("-"),r.twoColumn("Total Transaksi",`${b} Trx`),r.bold(!0).size("tall").twoColumn("TOTAL OMSET",O(h)).size("normal").bold(!1),r.doubleSeparator(),!t){const $=w+u,v=e.actualCash!==void 0?parseFloat(e.actualCash):$,R=v-$,H=R===0?"PAS (0)":R>0?`+${O(R)}`:`-${O(Math.abs(R))}`;r.bold(!0).line("REKONSILIASI KAS FISIK","left").bold(!1),r.twoColumn("Kas Diharapkan",O($)),r.twoColumn("Kas Fisik Aktual",O(v)),r.bold(!0).twoColumn("Selisih Kas",H,!0).bold(!1),e.closingNotes&&K(`Catatan: ${e.closingNotes}`,o).forEach(G=>r.line(G,"left")),r.separator("-"),r.line("Verifikasi & Tanda Tangan:","left"),r.feed(2);const D=Math.floor(o/2),S="( Kasir )",k=n?"( Supervisor/Owner )":"( Supervisor )",P=Math.max(0,Math.floor((D-S.length)/2)),N=Math.max(0,Math.floor((D-k.length)/2)),j=" ".repeat(P)+S+" ".repeat(Math.max(1,D-P-S.length))+" ".repeat(N)+k;r.line(j,"left"),r.separator("-")}const T=s.footerText||"Laporan Kasir Resmi Toko Putri";return K(T,o).forEach($=>r.line($,"center")),r.feed(s.feedLines||3),s.autoCut&&r.cut(),{base64:r.toBase64(),plainText:r.toPlainText()}},It=(e,t=null)=>{const a=t||F(),s=me(a.paperSize),o=s>=40,n=new Me(s);n.init();const r=U(a.headerText||p.store?.name||"TOKO PUTRI").trim(),i=U(p.store?.address||"").trim(),d=U(p.store?.wa||"").trim(),c=Math.floor(s/2);r.length<=c?(n.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),n.size("normal").bold(!1)):(n.align("center").bold(!0).size("tall"),K(r.toUpperCase(),s).forEach(b=>n.line(b,"center")),n.size("normal").bold(!1)),i&&K(i,s).forEach(b=>n.line(b,"center")),d&&n.line(`WA: ${d}`,"center");const x=e.payment?.taxNpwp||p.store?.taxNpwp;x&&n.line(`NPWP: ${x}`,"center"),n.separator("-");const f=ae(e.dateString||e.dateMs||Date.now(),o);n.twoColumn(`Order: #${e.orderId}`,f,!1,!0);const g=(e.customer?.name||"Guest").substring(0,o?18:11),y=e.customer?.deliveryMethod==="delivery"?"Kirim":"Ambil";n.twoColumn(`Plg  : ${g}`,`Tipe: ${y}`,!1,!0),e.customer?.phone&&n.line(`HP   : ${e.customer.phone}`,"left"),e.customer?.note&&K(`Cat  : ${e.customer.note}`,s).forEach(b=>n.line(b,"left")),n.separator("-");const w=Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[];w.length>0?w.forEach(b=>{n.itemRow(b)}):n.line("- Tidak ada rincian barang -","center"),n.separator("-");const u=w.reduce((b,T)=>b+parseFloat(T.qty||1)*(parseFloat(T.effectivePrice||T.price)||0),0),M=e.payment&&e.payment.subtotal!==void 0?e.payment.subtotal:u||e.total||0,L=e.payment&&e.payment.shippingCost!==void 0?e.payment.shippingCost:0,C=e.payment&&e.payment.grandTotal!==void 0?e.payment.grandTotal:e.total||M+L;if(n.twoColumn("Subtotal",O(M)),(e.customer?.deliveryMethod==="delivery"||e.deliveryMethod==="delivery")&&n.twoColumn("Ongkos Kirim",O(L)),e.payment?.productDiscount&&n.twoColumn("Potongan Harga",`- ${O(e.payment.productDiscount)}`),e.payment?.shippingDiscount&&n.twoColumn("Potongan Ongkir",`- ${O(e.payment.shippingDiscount)}`),(e.payment?.ppnEnabled||e.payment?.ppnShowZero||e.payment?.ppnRate===0||e.payment?.ppnAmount&&e.payment.ppnAmount>0)&&(p.store?.ppnEnabled||e.payment?.ppnEnabled)){const b=e.payment?.ppnType==="inclusive",T=e.payment?.ppnRate!==void 0?e.payment.ppnRate:p.store?.ppnRate||0,$=e.payment?.ppnAmount||0,v=e.payment?.ppnLabel||`${b?"Inc. PPN":"PPN"} (${T}%)`,R=$>0?`${b?"":"+ "}${O($)}`:"Rp 0";n.twoColumn(v,R)}return n.doubleSeparator(),n.bold(!0).size("tall").twoColumn("TOTAL",O(C)).size("normal").bold(!1),n.doubleSeparator(),n.twoColumn("Metode Bayar",(e.payment?.method||"Tunai").toUpperCase()),a.showPoints&&(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(n.separator("-"),e.pointsEarned>0&&n.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),e.finalMemberPoints!==void 0&&n.twoColumn("Saldo Poin",`${e.finalMemberPoints} Poin`)),a.showBarcode&&(n.separator("-"),n.align("center"),n.line(`*ORDER-${e.orderId}*`,"center"),n.line("(SCAN DI KASIR)","center")),n.separator("-"),K(a.footerText||"Terima Kasih Atas Kunjungan Anda!",s).forEach(b=>n.line(b,"center")),n.feed(a.feedLines||3),a.autoCut&&n.cut(),{base64:n.toBase64(),plainText:n.toPlainText()}},Et=(e,t=null)=>{const a=t||F(),s=me(a.paperSize),o=s>=40,n=new Me(s);n.init();const r=U(a.headerText||p.store?.name||"TOKO PUTRI").trim(),i=U(p.store?.address||"").trim(),d=U(p.store?.wa||"").trim(),c=Math.floor(s/2);r.length<=c?(n.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),n.size("normal").bold(!1)):(n.align("center").bold(!0).size("tall"),K(r.toUpperCase(),s).forEach(P=>n.line(P,"center")),n.size("normal").bold(!1)),i&&K(i,s).forEach(P=>n.line(P,"center")),d&&n.line(`WA: ${d}`,"center"),n.separator("-");const x=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",f=e.payment?.paymentStatus==="lunas"||parseFloat(e.payment?.tempoBalance||0)<=0,g=o?x?f?"*** NOTA PUTRI PAYLATER (LUNAS) ***":"*** NOTA TAGIHAN PUTRI PAYLATER ***":f?"*** NOTA TEMPO (LUNAS) ***":"*** NOTA TAGIHAN TEMPO (PIUTANG) ***":x?f?"** PAYLATER (LUNAS) **":"** NOTA PUTRI PAYLATER **":f?"** NOTA TEMPO (LUNAS) **":"** NOTA TAGIHAN TEMPO **";n.bold(!0).line(g,"center").bold(!1),n.separator("-");const y=ae(e.dateString||e.timestamp||Date.now(),o);n.twoColumn(`Order: #${e.orderId}`,y,!1,!0);const w=(e.customer?.name||"Pelanggan").substring(0,o?18:11);n.twoColumn(`Plg  : ${w}`,x?"Tipe: PayLater":"Tipe: Tempo",!1,!0),(e.customer?.phone||e.customer?.wa)&&n.line(`HP   : ${e.customer.wa||e.customer.phone}`,"left");let u=parseFloat(e.payment?.tempoBalance)||0,M=e.payment?.tempoPenaltyRate!==void 0?parseFloat(e.payment.tempoPenaltyRate):1,L=e.payment?.tempoPenaltyStopped===!0,C=0,h=e.payment?.tempoDueDate||0,b=0,T=0,$=!1,v=!1;const R=Date.now();h>0&&(R>h?(b=Math.floor((R-h)/(24*60*60*1e3)),b>0&&($=!0)):(T=Math.ceil((h-R)/(24*60*60*1e3)),T<=3&&(v=!0))),L?C=parseFloat(e.payment?.tempoFixedPenalty)||0:$&&(C=M/100*u*b);let H=u+C;const D=e.payment?.installments||[],S=D.reduce((P,N)=>P+(parseFloat(N.amount)||0),0),k=e.payment?.grandTotal||u+S;if(h>0){const P=ae(h,o);let N="";f?N="LUNAS":$?N=`Telat ${b} Hari`:v?N=`H-${T<=0?0:T}`:N=`Sisa ${T} Hari`,n.twoColumn(`J.Tmp: ${P}`,N,!1,!0)}return n.separator("-"),(e.items||[]).forEach(P=>{n.itemRow(P)}),n.separator("-"),n.twoColumn("Total Transaksi",O(k)),D.length>0&&(n.separator("-"),n.bold(!0).line("HISTORI PEMBAYARAN CICILAN:","left").bold(!1),D.forEach((P,N)=>{const j=ae(P.date,o);n.twoColumn(`${N+1}. ${j}`,O(P.amount))}),n.twoColumn("Total Terbayar",O(S),!0)),n.twoColumn("Sisa Pokok",O(u)),C>0&&n.twoColumn(`Denda (${b} Hari)`,`+ ${O(C)}`),n.doubleSeparator(),n.bold(!0).size("tall").twoColumn(x?"TAGIHAN PAYLATER":"SISA TAGIHAN",O(f?0:H)).size("normal").bold(!1),n.doubleSeparator(),!f&&p.banks&&p.banks.length>0&&(n.line("REKENING TRANSFER RESMI:","left"),(p.banks||[]).forEach(P=>{n.line(`${P.bank||P.bankName||"Bank"}: ${P.number||P.bankAccount||"-"}`,"left"),n.line(`a/n ${P.name||P.bankOwner||"-"}`,"left")}),n.separator("-")),a.showBarcode&&(n.separator("-"),n.align("center"),n.line(x?`*PAYLATER-${e.orderId}*`:`*TEMPO-${e.orderId}*`,"center"),n.line(x?"(PUTRI PAYLATER RESMI)":"(NOTA TEMPO RESMI)","center")),n.separator("-"),K(a.footerText||"Terima Kasih Atas Kerja Sama & Kepercayaannya!",s).forEach(P=>n.line(P,"center")),n.feed(a.feedLines||3),a.autoCut&&n.cut(),{base64:n.toBase64(),plainText:n.toPlainText()}},Bt=(e=null)=>{const t=e||F(),a=me(t.paperSize),s=a>=40,o=new Me(a);o.init();const n=U(t.headerText||p.store?.name||"TOKO PUTRI").trim(),r=Math.floor(a/2);n.length<=r?(o.align("center").bold(!0).size("title").line(n.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),K(n.toUpperCase(),a).forEach(g=>o.line(g,"center")),o.size("normal").bold(!1));const i=U(p.store?.wa||"").trim();i&&o.line(`WA: ${i}`,"center"),o.separator("-");const d=s?`*** UJI COBA CETAK STRUK THERMAL ${a} KOLOM ***`:`** UJI CETAK THERMAL ${a} KOLOM **`;o.bold(!0).line(d,"center").bold(!1),o.separator("-"),o.line("MISTAR KALIBRASI TEPI KERTAS:","left");let c="";for(let g=1;g<=a;g++)c+=String(g%10);o.line(c,"left");let x="";for(let g=1;g<=a;g++)g===a||g%10===0?x+="|":g%5===0?x+=":":x+=".";o.line(x,"left"),o.line(`(Pastikan angka ${a%10} paling kanan tercetak utuh)`,"left"),o.separator("-");const f=ae(Date.now(),s);return o.line(`Waktu   : ${f}`,"left"),o.line(`Format  : Thermal ${a} Kolom (${t.paperSize})`,"left"),o.line("Driver  : RAWBT FREE PRINT SERVICE","left"),o.line("Status  : 100% PRESISI & SIAP PAKAI","left"),o.separator("-"),o.bold(!0).twoColumn("ITEM SIMULASI","HARGA").bold(!1),o.itemRow({name:"Kertas Thermal Kasir Roll",qty:2,unit:"roll",price:15e3,subtotal:3e4}),o.itemRow({name:"Semen Portland Komposit 40kg",qty:1,unit:"sak",price:65e3,subtotal:65e3}),o.separator("-"),o.twoColumn("Subtotal",O(95e3)),o.twoColumn("Diskon Uji Coba",`- ${O(5e3)}`),o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL TES",O(9e4)).size("normal").bold(!1),o.doubleSeparator(),o.twoColumn("Bayar Tunai",O(1e5)),o.bold(!0).twoColumn("Kembalian",O(1e4)).bold(!1),t.showPoints&&(o.separator("-"),o.twoColumn("Simulasi Poin Member","+10 Poin")),t.showBarcode&&(o.separator("-"),o.align("center"),o.line(`*TEST-RAWBT-${Date.now().toString().slice(-6)}*`,"center"),o.line("(BARCODE TEST BERHASIL)","center")),o.separator("-"),K(t.footerText||"Terima kasih atas kunjungan Anda!",a).forEach(g=>o.line(g,"center")),K("Hasil cetak telah terkalibrasi presisi.",a).forEach(g=>o.line(g,"center")),o.feed(t.feedLines||3),t.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText()}},cs=e=>{if(!e){Z("Data transaksi kasir tidak ditemukan.","warning");return}const t=F(),a=Ot(e,t);document.getElementById("pos-success-modal")?.remove(),document.getElementById("pos-receipt-fallback-modal")?.remove(),Ce(a.base64,a.plainText)},ps=(e,t=!1)=>{if(!e){Z("Data shift tidak ditemukan.","warning");return}const a=F(),s=Nt(e,t,a);document.getElementById("pos-shift-receipt-modal")?.remove(),Ce(s.base64,s.plainText)},us=async(e=null)=>{const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||we,a=String(t||"").replace(/^#/,"").trim(),s=i=>{if(!i)return!1;const d=String(i.orderId||"").replace(/^#/,"").trim();return a?d===a||d.endsWith(a)||a.endsWith(d):!0};let o=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(o=e),(!o||!o.items||o.items.length===0)&&s(window.currentCustomerOrder)&&(o=window.currentCustomerOrder),(!o||!o.items||o.items.length===0)&&s(window.lastPrintedOrder)&&(o=window.lastPrintedOrder),(!o||!o.items||o.items.length===0)&&(be||[]).length>0){const i=be.find(s);i&&Array.isArray(i.items)&&i.items.length>0&&(o=i)}if((!o||!o.items||o.items.length===0)&&Array.isArray(B)){const i=B.find(s);i&&Array.isArray(i.items)&&i.items.length>0&&(o=i)}if((!o||!o.items||o.items.length===0)&&a)try{const i=typeof ee<"u"&&ee?ee:window.db;if(i){let d=await i.collection("freshmart_orders").doc(a).get();if(!d.exists&&!a.startsWith("ORD-")){const c=await i.collection("freshmart_orders").doc("ORD-"+a).get();c.exists&&(d=c)}if(d&&d.exists&&(o=d.data(),o.orderId=o.orderId||d.id,window.currentCustomerOrder=o,window.lastPrintedOrder=o,Array.isArray(B))){const c=B.findIndex(s);if(c!==-1){B[c].items=o.items||[],B[c].payment=o.payment||{},B[c].customer=o.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(B))}catch{}}}}}catch(i){console.warn("[RawBT] Gagal fetch order detail from Firestore:",i)}if(!o&&Array.isArray(B)&&(o=B.find(s)),!o){Z("Data pesanan tidak ditemukan.","warning");return}window.lastPrintedOrder=o;const n=F(),r=It(o,n);typeof window.closeReceiptPreviewModal=="function"&&window.closeReceiptPreviewModal(),Ce(r.base64,r.plainText)},ms=(e=null)=>{const t=e||we;let s=(window.cachedPiutangOrders||[]).find(r=>String(r.orderId)===String(t))||(be||[]).find(r=>String(r.orderId)===String(t));if(!s&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(t)&&(s=window.lastPrintedOrder),!s){Z("Data nota piutang tidak ditemukan.","warning");return}const o=F(),n=Et(s,o);typeof window.closeReceiptPreviewModal=="function"&&window.closeReceiptPreviewModal(),Ce(n.base64,n.plainText)},fs=()=>{const e=F(),t=Bt(e);Ce(t.base64,t.plainText)};window.cleanLineAscii=U;window.wrapWords=K;window.formatTwoColumn=Rt;window.formatCompactDate=ae;window.EscPosBuilder=Me;window.sendToRawBT=Ce;window.renderThermalDOMAndPrint=tt;window.openRawBTApp=ds;window.buildPOSReceiptPayload=Ot;window.buildShiftReceiptPayload=Nt;window.buildOrderReceiptPayload=It;window.buildTempoReceiptPayload=Et;window.buildTestReceiptPayload=Bt;window.printPOSReceiptDirect=cs;window.printShiftSettlementDirect=ps;window.printCustomerReceiptDirect=us;window.printTempoReceiptDirect=ms;window.executeRawBTTestPrint=fs;const at=async(e=null)=>{e&&typeof it=="function"&&it(e);const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||we,a=String(t||"").replace(/^#/,"").trim(),s=k=>{if(!k)return!1;const P=String(k.orderId||"").replace(/^#/,"").trim();return a?P===a||P.endsWith(a)||a.endsWith(P):!0};let o=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(o=e),(!o||!o.items||o.items.length===0)&&s(window.currentCustomerOrder)&&(o=window.currentCustomerOrder),(!o||!o.items||o.items.length===0)&&s(window.lastPrintedOrder)&&(o=window.lastPrintedOrder),(!o||!o.items||o.items.length===0)&&(be||[]).length>0){const k=be.find(s);k&&Array.isArray(k.items)&&k.items.length>0&&(o=k)}if((!o||!o.items||o.items.length===0)&&Array.isArray(B)){const k=B.find(s);k&&Array.isArray(k.items)&&k.items.length>0&&(o=k)}if((!o||!o.items||o.items.length===0)&&a)try{const k=typeof ee<"u"&&ee?ee:window.db;if(k){let P=await k.collection("freshmart_orders").doc(a).get();if(!P.exists&&!a.startsWith("ORD-")){const N=await k.collection("freshmart_orders").doc("ORD-"+a).get();N.exists&&(P=N)}if(P&&P.exists&&(o=P.data(),o.orderId=o.orderId||P.id,window.currentCustomerOrder=o,window.lastPrintedOrder=o,Array.isArray(B))){const N=B.findIndex(s);if(N!==-1){B[N].items=o.items||[],B[N].payment=o.payment||{},B[N].customer=o.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(B))}catch{}}}}}catch(k){console.warn("[Receipt] Gagal fetch order detail from Firestore:",k)}if(!o&&Array.isArray(B)&&(o=B.find(s)),!o)return;window.lastPrintedOrder=o;const n=typeof F=="function"?F():{paperSize:"58mm",showPoints:!0,showBarcode:!0},r=me(n.paperSize),i=r>=40,d=ae(o.dateString||o.date||Date.now(),i),c=n.headerText||p.store.name||"Toko Putri",x=p.store.wa||"",f=(k,P,N=r)=>{const j=String(k||""),G=String(P||""),W=N-j.length-G.length;return j+(W>0?" ".repeat(W):" ")+G},g=Array.isArray(o.items)?o.items:Array.isArray(o.cart)?o.cart:[],y=g.reduce((k,P)=>k+parseFloat(P.qty||1)*(parseFloat(P.effectivePrice||P.price)||0),0),w=o.payment&&o.payment.subtotal!==void 0?o.payment.subtotal:y||o.total||0,u=o.payment&&o.payment.shippingCost!==void 0?o.payment.shippingCost:0,M=o.payment&&o.payment.grandTotal!==void 0?o.payment.grandTotal:o.total||w+u,L=String(o.payment?.method||o.method||"Tunai").toUpperCase(),C=o.customer?.name||o.customerName||"Guest",h=o.customer?.deliveryMethod==="delivery"||o.deliveryMethod==="delivery";let b=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${l(c)}</div>`;x&&(b+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${l(x)}</div>`);const T=o.payment?.taxNpwp||p.store?.taxNpwp;if(T&&(b+=`<div class="text-center" style="font-size:10px;font-family:monospace;margin-bottom:4px;">NPWP: ${l(T)}</div>`),b+='<div class="border-b border-dashed border-black my-2"></div>',b+=`<div style="white-space:pre;font-family:monospace;">${f(`Order: #${o.orderId}`,d,r)}</div>`,b+=`<div style="white-space:pre;font-family:monospace;">${f(`Plg  : ${l(C).substring(0,i?18:10)}`,`Tipe: ${h?"Kirim":"Ambil"}`,r)}</div>`,(o.customer?.phone||o.customerPhone)&&(b+=`<div style="white-space:pre;font-family:monospace;">HP   : ${l(o.customer?.phone||o.customerPhone)}</div>`),b+='<div class="border-b border-dashed border-black my-2"></div>',o.customer?.note&&(b+=`<div style="white-space:pre-wrap;word-break:break-word;">Cat: ${l(o.customer.note)}</div><div class="border-b border-dashed border-black my-2"></div>`),g.length>0?g.forEach(k=>{let P=k.variantName?` (${l(k.variantName)}${k.colorCode?" "+l(k.colorCode):""})`:"";const N=l(k.name||"Barang")+P+(k.poTime?" [PO]":""),j=k.effectivePrice||k.price||0,G=`  ${parseFloat(k.qty||1)} ${l(k.unit||"pcs")} x ${Math.round(j).toLocaleString("id-ID")}`,W=(parseFloat(k.qty||1)*j).toLocaleString("id-ID");b+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;">${N}</div><div style="white-space:pre;font-family:monospace;font-size:11px;">${f(G,W,r)}</div>`,k.poTime&&(b+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">  * Estimasi PO: ${l(k.poTime)}</div>`)}):b+='<div style="white-space:pre;font-style:italic;color:#64748b;text-align:center;padding:4px 0;">- Tidak ada rincian barang -</div>',b+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-family:monospace;">${f("Subtotal",w.toLocaleString("id-ID"),r)}</div>`,h&&(b+=`<div style="white-space:pre;font-family:monospace;">${f("Ongkir",u.toLocaleString("id-ID"),r)}</div>`),o.payment?.shippingDiscount&&(b+=`<div style="white-space:pre;font-family:monospace;">${f("Pot.Ongkir",`-${o.payment.shippingDiscount.toLocaleString("id-ID")}`,r)}</div>`),o.payment?.productDiscount&&(b+=`<div style="white-space:pre;font-family:monospace;">${f("Pot.Harga",`-${o.payment.productDiscount.toLocaleString("id-ID")}`,r)}</div>`),(o.payment?.ppnEnabled||o.payment?.ppnShowZero||o.payment?.ppnRate===0||o.payment?.ppnAmount&&o.payment.ppnAmount>0)&&(p.store?.ppnEnabled||o.payment?.ppnEnabled)){const k=o.payment?.ppnType==="inclusive",P=o.payment?.ppnRate!==void 0?o.payment.ppnRate:p.store?.ppnRate||0,N=o.payment?.ppnAmount||0,j=o.payment?.ppnLabel||`${k?"Inc. PPN":"PPN"} (${P}%)`,G=N>0?`${k?"":"+"}${N.toLocaleString("id-ID")}`:"0";b+=`<div style="white-space:pre;font-family:monospace;">${f(j,G,r)}</div>`}b+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-family:monospace;font-weight:bold;font-size:12px;">${f("TOTAL","Rp "+M.toLocaleString("id-ID"),r)}</div><div style="white-space:pre;font-family:monospace;">${f("Metode Bayar",L,r)}</div>`,n.showPoints&&(o.pointsEarned>0||o.finalMemberPoints!==void 0)&&(b+='<div class="border-b border-dashed border-black my-2"></div>',o.pointsEarned>0&&(b+=`<div style="white-space:pre;font-family:monospace;">${f("Poin Didapat","+"+o.pointsEarned+" Poin",r)}</div>`),o.finalMemberPoints!==void 0&&o.finalMemberPoints!==null&&(b+=`<div style="white-space:pre;font-family:monospace;font-weight:bold;">${f("Saldo Poin",String(o.finalMemberPoints)+" Poin",r)}</div>`),o.claimedReward&&(b+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;margin-top:2px;">HADIAH: ${l(o.claimedReward.name)}</div>`)),g.some(k=>k&&k.poTime&&k.poTime!=="")&&(b+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),n.showBarcode&&(b+=`<div class="border-b border-dashed border-black my-2"></div><div style="text-align:center;margin:4px 0;"><div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*ORDER-${l(o.orderId)}*</div><div style="font-size:8px;color:#666;">SCAN DI KASIR</div></div>`),b+=`<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${l(n.footerText||"Terima Kasih Atas Kunjungan Anda")}</div><div class="border-b border-dashed border-black my-2"></div><div style="height:15px;"></div>`,Pt("receipt-paper-content",b);const R=m("receipt-paper-content");R&&(R.style.width=i?"340px":"260px");const H=m("receipt-preview-modal-box");H&&(H.classList.remove("max-w-[320px]","max-w-[400px]"),H.classList.add(i?"max-w-[400px]":"max-w-[320px]"));const D=m("receipt-preview-modal"),S=m("receipt-preview-modal-box");D&&D.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),Ue(D,S)},ws=(e=!1)=>{const t=m("receipt-preview-modal"),a=m("receipt-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{ge(t,a)}):ge(t,a))},bs=()=>{const e=we||(window.lastPrintedOrder?window.lastPrintedOrder.orderId:null);if(typeof window.printCustomerReceiptDirect=="function"){window.printCustomerReceiptDirect(e);return}if(!((be||[]).find(s=>s.orderId===we)||(Array.isArray(B)?B.find(s=>s.orderId===we):null)||window.lastPrintedOrder))return;const a=m("receipt-paper-content")?m("receipt-paper-content").innerHTML:"";tt(a)};window.openReceiptPreview=at;window.openCustomerReceiptPreview=(e,t=!1)=>{const a=typeof F=="function"?F():{};if((t||a.directPrint)&&typeof window.printCustomerReceiptDirect=="function"){window.printCustomerReceiptDirect(e);return}at(e)};window.closeReceiptPreviewModal=ws;window.executePrintReceipt=bs;window.checkProPrint=()=>{at()};const q={OWNER:"owner",ADMIN:"admin",CASHIER:"cashier"},gs=[{key:"orders",label:"Pesanan Online",desc:"Proses status pesanan, update resi pengiriman & konfirmasi bayar",group:"operasional",icon:"fa-receipt"},{key:"products",label:"Katalog Produk & Stok",desc:"Tambah/edit produk, atur varian, dan perbarui stok barang",group:"operasional",icon:"fa-box-open"},{key:"suppliers",label:"Supplier & Rekanan",desc:"Kelola master data supplier, kontak kulakan, dan asal produk",group:"operasional",icon:"fa-truck-field"},{key:"purchases",label:"Order Kulakan (PO)",desc:"Buat PO pembelian grosir, terima restock, & kelola hutang rekanan",group:"operasional",icon:"fa-cart-flatbed"},{key:"piutang",label:"Piutang Tempo & Cicilan",desc:"Kelola nota piutang pelanggan, denda keterlambatan, & cicilan",group:"operasional",icon:"fa-clock-rotate-left"},{key:"customers",label:"Database Pelanggan",desc:"Lihat daftar member, atur limit kredit PayLater, & mutasi poin",group:"operasional",icon:"fa-address-book"},{key:"pos",label:"Kasir POS",desc:"Akses antarmuka penjualan kasir toko fisik dan shift kasir",group:"operasional",icon:"fa-cash-register"},{key:"expenses",label:"Biaya Operasional Toko",desc:"Buku kas pengeluaran operasional toko harian & nota kas",group:"operasional",icon:"fa-money-bill-transfer"},{key:"stock_opname",label:"Stock Opname (Audit Fisik)",desc:"Audit stok fisik rak/gudang, rekonsiliasi selisih & terapkan penyesuaian stok",group:"operasional",icon:"fa-clipboard-check"},{key:"categories",label:"Kategori Produk",desc:"Tambah dan susun kategori etalase produk",group:"konten",icon:"fa-tags"},{key:"brands",label:"Merek Produk",desc:"Kelola daftar brand dagang barang",group:"konten",icon:"fa-copyright"},{key:"colors",label:"Database Warna",desc:"Katalog warna produk dan swatch varian",group:"konten",icon:"fa-swatchbook"},{key:"vouchers",label:"Voucher & Promo",desc:"Buat kode voucher diskon dan promo belanja",group:"konten",icon:"fa-ticket-simple"},{key:"banners",label:"Banner Promosi",desc:"Kelola gambar dan video slider beranda toko",group:"konten",icon:"fa-images"},{key:"rewards",label:"Program Hadiah Poin",desc:"Kelola katalog hadiah penukaran poin member",group:"konten",icon:"fa-gift"},{key:"reviews",label:"Ulasan Pelanggan",desc:"Moderasi ulasan dan testimoni produk pembeli",group:"konten",icon:"fa-star"},{key:"faqs",label:"Tanya Jawab / Q&A",desc:"Kelola jawaban pertanyaan umum pembeli",group:"konten",icon:"fa-circle-question"},{key:"changelog",label:"Log Pembaruan Sistem",desc:"Melihat riwayat update sistem toko",group:"konten",icon:"fa-code-branch"},{key:"reports",label:"Pusat Laporan & Keuangan",desc:"Laporan terpadu penjualan, stok, laba rugi, utang piutang, dan perpajakan",group:"sensitif",icon:"fa-chart-pie"},{key:"view_reports",label:"Laporan Finansial & Laba",desc:"Lihat omset, total HPP terjual, margin & laba bersih toko",group:"sensitif",icon:"fa-chart-line"},{key:"tax",label:"Pajak & Keuangan (PPN)",desc:"Laporan PPN, neraca keuangan, dan laba rugi resmi",group:"sensitif",icon:"fa-file-invoice-dollar"},{key:"banks",label:"Rekening Bank & QRIS",desc:"Ubah nomor rekening toko dan QRIS tujuan pembayaran",group:"sensitif",icon:"fa-building-columns"},{key:"settings",label:"Pengaturan Utama Toko",desc:"Konfigurasi nama toko, GPS maps, tarif ongkir, & sistem",group:"sensitif",icon:"fa-gear"},{key:"cashiers",label:"Kelola Staf & Hak Akses",desc:"Daftarkan staf baru, atur jabatan, & ubah batasan hak akses",group:"sensitif",icon:"fa-users-gear"},{key:"backup_sync",label:"Pusat Data & Backup Cloud",desc:"Cadangkan data toko, ekspor database, & sinkronisasi cloud",group:"sensitif",icon:"fa-cloud-arrow-up"}],Qe={[q.CASHIER]:{pos:!0,orders:!1,products:!1,suppliers:!1,purchases:!1,piutang:!1,customers:!1,categories:!1,brands:!1,colors:!1,vouchers:!1,banners:!1,rewards:!1,reviews:!1,faqs:!1,changelog:!1,expenses:!1,stock_opname:!1,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[q.ADMIN]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},manager:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!0,view_reports:!0,tax:!0,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[q.OWNER]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,reports:!0,view_reports:!0,tax:!0,banks:!0,settings:!0,cashiers:!0,backup_sync:!0}};let Se=null;const Le=()=>{if(Se)return Se;try{const e=sessionStorage.getItem("freshmart_staff_profile");if(e)return Se=JSON.parse(e),Se}catch{}return null},xs=e=>{Se=e;try{e?sessionStorage.setItem("freshmart_staff_profile",JSON.stringify(e)):sessionStorage.removeItem("freshmart_staff_profile")}catch{}},hs=()=>{Se=null;try{sessionStorage.removeItem("freshmart_staff_profile")}catch{}},Ne=()=>{const e=Ke.currentUser;if(e&&e.uid===te)return!0;const t=Le();if(t){const s=String(t.role||"").toLowerCase();if(s==="owner"||t.uid===te)return!0;if(s==="cashier"||s==="kasir"||s==="staff")return!1}const a=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");if((window.isAdm||window.__localIsAdm)&&a&&!t)return!0;try{const s=sessionStorage.getItem("pos_cashier_session");if(s){const o=JSON.parse(s),n=String(o.role||"").toLowerCase();if(n==="owner"||o.uid===te)return!0;if(n==="cashier"||n==="kasir"||n==="staff")return!1}}catch{}return!1},ys=()=>{if(Ne())return!0;if(Ht())return!1;const e=Le();return e?.role===q.ADMIN||String(e?.role||"").toLowerCase()==="admin"},Ht=()=>{if(Ne())return!1;const e=Le();if(e){const t=String(e.role||"").toLowerCase();if(t==="owner"||e.uid===te)return!1;if(t==="cashier"||t==="kasir")return!0}try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const a=JSON.parse(t),s=String(a.role||"").toLowerCase();if(s==="owner"||a.uid===te)return!1;if(s==="cashier"||s==="kasir"||s==="staff")return!0}}catch{}return!1},Kt=e=>{if(Ne())return!0;const t=Le();if(t){if(t.isActive===!1)return!1;const a=String(t.role||"").toLowerCase();if(a===q.OWNER||a==="owner")return!0;if(a===q.CASHIER||a==="cashier"||a==="kasir")return e==="pos";if(t.permissions){if(typeof t.permissions[e]<"u")return t.permissions[e]===!0;if(e==="reports"&&(t.permissions.view_reports===!0||t.permissions.tax===!0)||(e==="view_reports"||e==="tax")&&t.permissions.reports===!0)return!0}return(Qe[t.role]||Qe[q.ADMIN])[e]===!0}try{const a=sessionStorage.getItem("pos_cashier_session");if(a){const s=JSON.parse(a),o=String(s.role||"").toLowerCase();if(o===q.OWNER||o==="owner"||s.uid===te)return!0;if(o===q.CASHIER||o==="cashier"||o==="kasir")return e==="pos"}}catch{}return window.isAdm||window.__localIsAdm?["banks","settings","cashiers","backup_sync"].includes(e)?Ke.currentUser?.uid===te:!0:!1},Ze=()=>{if(typeof window<"u"&&(window.curViewName==="view-pos-cashier"||document.getElementById("view-pos-cashier")?.classList.contains("flex")||document.getElementById("pos-payment-modal")?.classList.contains("flex")||document.getElementById("pos-variant-sheet")?.classList.contains("flex")))try{const s=sessionStorage.getItem("pos_cashier_session");if(s){const o=JSON.parse(s),n=String(o.role||"").toLowerCase();return n===q.OWNER||n==="owner"||o.uid===te}}catch{}if(Ne())return!0;const t=Le();if(t){const s=String(t.role||"").toLowerCase();return s===q.OWNER||s==="owner"||t.uid===te?!0:s===q.CASHIER||s==="cashier"||s==="kasir"?!1:Kt("view_reports")}const a=Ke.currentUser;return!!(a&&a.uid===te||window.isAdm||window.__localIsAdm)},vs=e=>{switch(e){case q.OWNER:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-2xs">
                <i class="fa-solid fa-crown text-[9px] text-amber-500"></i>
                <span>Owner</span>
            </span>`;case q.ADMIN:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shadow-2xs">
                <i class="fa-solid fa-shield-halved text-[9px]"></i>
                <span>Admin Toko</span>
            </span>`;case q.CASHIER:default:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                <i class="fa-solid fa-cash-register text-[9px]"></i>
                <span>Kasir POS</span>
            </span>`}};typeof window<"u"&&(window.ROLES=q,window.PERMISSION_DEFINITIONS=gs,window.ROLE_PRESETS=Qe,window.getActiveStaff=Le,window.setActiveStaff=xs,window.clearActiveStaff=hs,window.isOwnerUser=Ne,window.isAdminUser=ys,window.isCashierUser=Ht,window.hasPermission=Kt,window.canViewHpp=Ze,window.getRoleBadgeHtml=vs);let fe="invoice",Ut=!1;const We=e=>{Ut=e},J=(e,t=!1)=>{if(!e)return"-";try{const a=e.toDate?e.toDate():new Date(e);if(isNaN(a.getTime()))return"-";const s={day:"2-digit",month:"short",year:"numeric"};return t&&(s.hour="2-digit",s.minute="2-digit"),a.toLocaleDateString("id-ID",s)}catch{return"-"}},mt=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(2).replace(/\.?0+$/,"")},ce=(e="w-16 h-16")=>p.store?.logo&&(p.store.logo.includes("http")||p.store.logo.includes("data:"))?`<img loading="eager" src="${l(p.store.logo)}" class="${e} object-contain shrink-0">`:`<div class="${e} primary-bg flex items-center justify-center rounded-xl text-white shrink-0"><i class="fa-solid fa-store text-2xl"></i></div>`,ft=({docTitle:e,docNumber:t,docDate:a})=>`
    <div class="flex justify-between items-center border-b-2 border-slate-800 pb-2.5 mb-4 text-xs font-semibold select-none">
        <div class="flex items-center gap-2.5">
            ${ce("w-8 h-8")}
            <div>
                <span class="font-black text-slate-900 uppercase text-xs sm:text-sm tracking-tight">${l(p.store?.name||"TOKO PUTRI")}</span>
                <span class="text-slate-300 mx-1.5">&bull;</span>
                <span class="font-bold text-slate-700 uppercase tracking-wider text-[11px]">${l(e)}</span>
            </div>
        </div>
        <div class="text-right font-mono text-slate-600 text-[11px]">
            ${t?`<span class="font-bold text-slate-900">${l(t)}</span> <span class="text-slate-400 mx-1">&bull;</span>`:""}
            <span>${l(a||"")}</span>
        </div>
    </div>
    `,wt=(e,t,a)=>`
    <div class="a4-page-footer mt-auto pt-2.5 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono select-none">
        <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-700 uppercase">${l(p.store?.name||"TOKO PUTRI")}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-500">${l(a||"Dokumen Resmi")}</span>
        </div>
        <div class="flex items-center gap-1 font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
            <span>Halaman ${e} dari ${t}</span>
        </div>
    </div>
    `,le=({docTitle:e,docNumber:t,docDate:a,kopHtml:s,metaHtml:o,tableHeaderHtml:n,rows:r=[],tableClass:i="w-full text-left border-collapse mb-4 text-xs",summaryHtml:d="",extraBlocksHtml:c="",signaturesHtml:x="",singlePageMax:f=6,itemsFirstPage:g=6,itemsMiddlePage:y=14,itemsLastPage:w=6})=>{const u=r.length;if(u<=f)return[`
        <div class="a4-page" data-page="1" data-total-pages="1">
            <div class="a4-page-body flex-1 flex flex-col">
                ${s}
                ${o||""}
                <table class="${i}">
                    <thead>${n}</thead>
                    <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${r.join("")}</tbody>
                </table>
                ${d||""}
                ${c||""}
                ${x||""}
            </div>
            ${wt(1,1,e)}
        </div>
        `];const M=[],L=[],C=r.slice(0,g);L.push(C);let h=g;for(;h<u;){const T=u-h;if(T<=w)L.push(r.slice(h)),h=u;else{const $=Math.min(y,T);L.push(r.slice(h,h+$)),h+=$}}const b=L.length;return L.forEach((T,$)=>{const v=$+1,R=v===1,H=v===b;let D="";R?D=`
            ${s}
            ${o||""}
            <table class="${i}">
                <thead>${n}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${T.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${v+1}...
            </div>
            `:H?D=`
            ${ft({docTitle:e,docNumber:t,docDate:a})}
            ${T.length>0?`
            <table class="${i}">
                <thead>${n}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${T.join("")}</tbody>
            </table>`:""}
            ${d||""}
            ${c||""}
            ${x||""}
            `:D=`
            ${ft({docTitle:e,docNumber:t,docDate:a})}
            <table class="${i}">
                <thead>${n}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${T.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${v+1}...
            </div>
            `,M.push(`
        <div class="a4-page" data-page="${v}" data-total-pages="${b}">
            <div class="a4-page-body flex-1 flex flex-col">
                ${D}
            </div>
            ${wt(v,b,e)}
        </div>
        `)}),M},ks=(e,t=null)=>{if(fe=e,e==="po"){const y=p.purchases||[],w=y.find(D=>String(D.id)===String(t))||(window.currentActivePoId?y.find(D=>String(D.id)===String(window.currentActivePoId)):y[0]);if(!w){typeof window.showToast=="function"&&window.showToast("Data PO tidak ditemukan!");return}Q("doc-modal-title","Preview Purchase Order (PO)");const u=ce("w-16 h-16"),M=J(w.date||w.createdAt),L=w.poNumber||w.id,C=w.paymentType==="tempo"?`Tempo ${w.tempoDays||14} Hari (Jatuh Tempo: ${J(w.tempoDueDate)})`:w.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai",h=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${u}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${l(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${l(p.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${l(p.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${l(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">PURCHASE ORDER</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${l(L)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${M}</p>
                <p class="text-xs font-bold mt-1 text-[var(--color-primary)]">Status: ${w.status==="ordered"?"DIPESAN":w.status==="received"?"DITERIMA":"SELESAI"}</p>
            </div>
        </div>
        `,b=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Kepada Rekanan / Supplier:</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${l(w.supplierName||"Supplier")}</p>
                ${w.supplierPhone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${l(w.supplierPhone)}</p>`:""}
                ${w.supplierAddress?`<p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${l(w.supplierAddress)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan & Pembayaran:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Termin Pembayaran:</span> <b class="text-slate-900">${C}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tujuan Pengiriman:</span> <b class="text-slate-900">${l(p.store?.name||"Gudang Utama Toko")}</b></p>
                ${w.notes?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${l(w.notes)}</p>`:""}
            </div>
        </div>
        `,T=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Modal (HPP)</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `,$=(w.items||[]).map((D,S)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${S+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${l(D.name)}
                ${D.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${l(D.variantName)}</span>`:""}
                ${D.sku?`<span class="text-slate-400 text-[9.5px] font-mono block mt-0.5">SKU: ${l(D.sku)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${mt(D.qty)} <span class="text-[10px] font-normal text-slate-500">${l(D.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${A(D.unitPrice)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${A(Math.round((parseFloat(D.qty)||0)*(parseFloat(D.unitPrice)||0)))}</td>
        </tr>
        `),v=`
        <div class="flex justify-end mb-6 mt-2">
            <div class="w-80 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk:</span><span class="font-bold text-slate-800">${A(w.subtotal)}</span></div>
                ${w.discount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Potongan Diskon:</span><span>-${A(w.discount)}</span></div>`:""}
                ${w.shippingFee>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim:</span><span>+${A(w.shippingFee)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL ORDER (PO):</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${A(w.total)}</span>
                </div>
            </div>
        </div>
        `,R=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-6 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Dipesan Oleh (Purchasing):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${l(p.store?.name||"Toko Putri")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Diterima &amp; Disetujui Oleh:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${l(w.supplierName||"Rekanan / Supplier")}</span>
            </div>
        </div>
        `,H=le({docTitle:"Purchase Order",docNumber:`#${L}`,docDate:M,kopHtml:h,metaHtml:b,tableHeaderHtml:T,rows:$,summaryHtml:v,signaturesHtml:R,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});de(H);return}if(e==="stock_opname"){const y=p.stockOpnameHistory||[],w=y.find(S=>String(S.id)===String(t)||String(S.soNumber)===String(t))||y[0];if(!w){typeof window.showToast=="function"&&window.showToast("Data Berita Acara Stock Opname tidak ditemukan!");return}Q("doc-modal-title","Preview Berita Acara Stock Opname");const u=ce("w-16 h-16"),M=J(w.date,!0),L=w.soNumber||w.id,C=typeof Ze=="function"?Ze():!1,h=w.items||[],b=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${u}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${l(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${l(p.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${l(p.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${l(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">BERITA ACARA</h2>
                <h3 class="font-bold text-sm tracking-wider text-amber-600 uppercase">STOCK OPNAME FISIK</h3>
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${l(L)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${M}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Auditor: <b class="text-slate-900">${l(w.auditorName||"Staf Auditor")}</b></p>
            </div>
        </div>
        `,T=`
        <div class="grid grid-cols-4 gap-3 mb-5">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Total Diperiksa</span>
                <span class="text-lg font-black text-slate-800 font-mono">${w.totalItemsAudited||0}</span>
                <span class="text-[10px] text-slate-500 block">Item Produk</span>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Item Selisih</span>
                <span class="text-lg font-black ${w.totalWithDiff>0?"text-amber-600":"text-emerald-600"} font-mono">${w.totalWithDiff||0}</span>
                <span class="text-[10px] text-slate-500 block">Disesuaikan</span>
            </div>
            <div class="bg-rose-50 p-3 rounded-xl border border-rose-200 text-center">
                <span class="text-[9px] font-black uppercase text-rose-500 block tracking-wider">Total Kurang (Loss)</span>
                <span class="text-lg font-black text-rose-600 font-mono">−${w.totalLossUnits||0}</span>
                <span class="text-[10px] text-rose-500 block">${C?"−"+A(w.totalLossRp||0):"Pcs"}</span>
            </div>
            <div class="bg-amber-50 p-3 rounded-xl border border-amber-200 text-center">
                <span class="text-[9px] font-black uppercase text-amber-600 block tracking-wider">Total Lebih (Surplus)</span>
                <span class="text-lg font-black text-amber-600 font-mono">+${w.totalSurplusUnits||0}</span>
                <span class="text-[10px] text-amber-600 block">${C?"+"+A(w.totalSurplusRp||0):"Pcs"}</span>
            </div>
        </div>
        `,$=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Hasil Fisik</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Selisih</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Alasan &amp; Keterangan</th>
            ${C?'<th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Dampak HPP</th>':'<th class="py-2.5 px-3 rounded-tr-xl text-right w-16">Satuan</th>'}
        </tr>
        `,v=h.length===0?['<tr><td colspan="7" class="py-8 text-center text-slate-500 italic">Semua stok fisik barang dalam kondisi berimbang (100% Sesuai / Selisih 0).</td></tr>']:h.map((S,k)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${k+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${l(S.productName)}
                ${S.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${l(S.variantName)}</span>`:""}
                ${S.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${l(S.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center font-mono text-slate-600">${S.systemStock} ${l(S.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${S.physicalStock} ${l(S.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-bold font-mono ${S.diff<0?"text-rose-600":"text-amber-600"}">
                ${S.diff<0?`−${Math.abs(S.diff)}`:`+${S.diff}`}
            </td>
            <td class="py-2 px-3 text-[10.5px]">
                <span class="font-bold text-slate-800">${l(S.reason==="salah_hitung"?"Koreksi Kasir":S.reason==="rusak"?"Barang Rusak":S.reason==="hilang"?"Barang Hilang":S.reason==="kadaluarsa"?"Expired":S.reason==="bonus"?"Bonus Supplier":S.reason)}</span>
                ${S.notes?`<span class="text-slate-500 block italic">"${l(S.notes)}"</span>`:""}
            </td>
            ${C?`
                <td class="py-2 px-3 text-right font-mono font-bold ${S.diff<0?"text-rose-600":"text-amber-600"}">
                    ${S.diff<0?"−":"+"}${A(Math.abs(S.diffValueHpp||0))}
                </td>`:`
                <td class="py-2 px-3 text-right text-slate-500">${l(S.unit||"pcs")}</td>
            `}
        </tr>
        `),R=w.notes?`
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs mb-5 text-slate-700">
            <b class="text-slate-900">Catatan Auditor:</b> ${l(w.notes)}
        </div>`:"",H=`
        <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Pemeriksa / Auditor:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${l(w.auditorName||"Petugas Auditor")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Kepala Gudang / Kasir:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">Gudang Toko</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Mengetahui (Owner Toko):</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${l(p.store?.name||"Pimpinan")}</span>
            </div>
        </div>
        `,D=le({docTitle:"Berita Acara Stock Opname",docNumber:`#${L}`,docDate:M,kopHtml:b,metaHtml:T,tableHeaderHtml:$,rows:v,extraBlocksHtml:R,signaturesHtml:H,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});de(D);return}if(e==="stock_opname_worksheet"){Q("doc-modal-title","Preview Lembar Kerja Hitung Fisik (Worksheet)");const y=ce("w-14 h-14"),w=J(new Date),u=p.products||[],M=[];u.forEach(v=>{!v||v.id==null||(v.variants&&v.variants.length>0?v.variants.forEach(R=>{M.push({name:v.name,variantName:R.name,sku:R.sku||v.sku||"",category:v.category||"Umum",unit:v.unit||"pcs",systemStock:parseFloat(R.stock)||0})}):M.push({name:v.name,variantName:"",sku:v.sku||"",category:v.category||"Umum",unit:v.unit||"pcs",systemStock:parseFloat(v.stock)||0}))});const L=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3">
                ${y}
                <div>
                    <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${l(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${l(p.store?.slogan||"Pusat Alat Teknik & Bangunan")}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${l(p.store?.address||"")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-wider text-slate-900 uppercase">LEMBAR KERJA AUDIT</h2>
                <h3 class="font-bold text-xs tracking-widest text-amber-600 uppercase">STOCK OPNAME FISIK RAK</h3>
                <p class="text-xs font-medium text-slate-500 mt-1">Tanggal Cetak: <b>${w}</b></p>
                <p class="text-xs font-medium text-slate-500">Total Item: <b>${M.length} Baris</b></p>
            </div>
        </div>
        `,C=`
        <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[10px] text-slate-600 mb-4 flex items-center justify-between">
            <span><b>Petunjuk:</b> Hitung fisik barang di rak/gudang secara teliti. Tulis angka aktual pada kolom <b>HASIL FISIK</b> dan beri catatan bila ada barang rusak/cacat.</span>
        </div>
        `,h=`
        <tr class="border-b-2 border-slate-800 text-[9.5px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">Cek</th>
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">No</th>
            <th class="py-2 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi Varian</th>
            <th class="py-2 px-2 border-r border-slate-700 w-28">Kategori / Rak</th>
            <th class="py-2 px-2 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2 px-2 text-center w-28 border-r border-slate-700 bg-amber-900/60">HASIL FISIK</th>
            <th class="py-2 px-3 text-left w-36">Kondisi &amp; Catatan</th>
        </tr>
        `,b=M.map((v,R)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200"><span class="inline-block w-3.5 h-3.5 border border-slate-400 rounded-sm"></span></td>
            <td class="py-2 px-2 text-center font-mono text-slate-400 border-r border-slate-200">${R+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 border-r border-slate-200 uppercase">
                ${l(v.name)}
                ${v.variantName?`<span class="bg-slate-100 text-slate-700 px-1 rounded text-[8.5px] border border-slate-300 ml-1 font-semibold">${l(v.variantName)}</span>`:""}
                ${v.sku?`<span class="text-slate-400 font-mono text-[8.5px] block">SKU: ${l(v.sku)}</span>`:""}
            </td>
            <td class="py-2 px-2 text-[10px] text-slate-600 border-r border-slate-200">
                ${l(v.category)}
            </td>
            <td class="py-2 px-2 text-center font-mono font-bold text-slate-600 border-r border-slate-200">
                ${v.systemStock} ${l(v.unit)}
            </td>
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200 bg-amber-50/40">
                <span class="inline-block w-20 h-5 border-b-2 border-slate-400"></span>
            </td>
            <td class="py-2 px-3 text-[10px] text-slate-400">
                <span class="inline-block w-full h-5 border-b border-slate-200"></span>
            </td>
        </tr>
        `),$=le({docTitle:"Lembar Kerja Audit Rak",docNumber:`TOTAL ${M.length} ITEM`,docDate:w,kopHtml:L,metaHtml:C,tableHeaderHtml:h,rows:b,tableClass:"w-full text-left border-collapse mb-4 text-[11px]",signaturesHtml:`
        <div class="grid grid-cols-2 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Staf Penghitung Fisik:</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 uppercase">Nama &amp; Tanda Tangan</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Diverifikasi Oleh:</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 uppercase">Kepala Toko / Owner</span>
            </div>
        </div>
        `,singlePageMax:16,itemsFirstPage:15,itemsMiddlePage:20,itemsLastPage:14});de($);return}if(e==="tempo_invoice"){const y=t||window.cVOrd;let u=(window.cachedPiutangOrders||[]).find(I=>String(I.orderId)===String(y))||(window.gOrds||[]).find(I=>String(I.orderId)===String(y));if(!u&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(y)&&(u=window.lastPrintedOrder),!u){typeof window.showToast=="function"&&window.showToast("Data nota tagihan piutang tidak ditemukan!");return}Q("doc-modal-title","Preview Nota Tagihan Piutang (Tempo)");const M=ce("w-16 h-16"),L=J(u.dateString||u.timestamp),C=parseFloat(u.payment?.tempoBalance)||0,h=u.payment?.tempoPenaltyRate!==void 0?parseFloat(u.payment.tempoPenaltyRate):1,b=u.payment?.tempoPenaltyStopped===!0;let T=0;const $=u.payment?.tempoDueDate||0;let v=0,R=0,H=!1,D=!1;const S=Date.now();$>0&&(S>$?(v=Math.floor((S-$)/(24*60*60*1e3)),v>0&&(H=!0)):(R=Math.ceil(($-S)/(24*60*60*1e3)),R<=3&&(D=!0))),b?T=parseFloat(u.payment?.tempoFixedPenalty)||0:H&&(T=h/100*C*v);const k=C+T,P=u.payment?.installments||[],N=P.reduce((I,re)=>I+(parseFloat(re.amount)||0),0),j=u.payment?.grandTotal||C+N,G=u.payment?.paymentStatus==="lunas"||C<=0,W=!!(u.payment?.isPaylater||u.isPaylater||u.payment?.subMethod==="paylater");let E=W?"PAYLATER BERJALAN":"TEMPO BERJALAN",oe="text-blue-600 bg-blue-50 border-blue-200";G?(E="LUNAS SEPENUHNYA",oe="text-emerald-600 bg-emerald-50 border-emerald-300"):H?(E=`TERLAMBAT ${v} HARI`,oe="text-rose-600 bg-rose-50 border-rose-300"):D&&(E=`JATUH TEMPO H-${R<=0?"0":R}`,oe="text-amber-600 bg-amber-50 border-amber-300");const se=p.banks&&p.banks.length>0?p.banks.map(I=>`<div class="font-mono text-xs"><b class="text-slate-900">${l(I.bank)}:</b> ${l(I.number)} a/n ${l(I.name)}</div>`).join(""):'<div class="text-xs text-slate-500 italic">Hubungi kasir untuk info rekening transfer bank</div>',he=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${M}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${l(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${l(p.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${l(p.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${l(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">${W?"NOTA PUTRI PAYLATER":"NOTA TAGIHAN PIUTANG"}</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${l(u.orderId)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tgl Transaksi: ${L}</p>
                <div class="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${oe}">
                    ${l(E)}
                </div>
            </div>
        </div>
        `,ze=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ditujukan Kepada (Debitur / Pelanggan):</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-0.5">${l(u.customer?.name||"Pelanggan")}</p>
                ${u.customer?.wa||u.customer?.phone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> +${l(u.customer.wa||u.customer.phone)}</p>`:""}
                <p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${l(u.customer?.address||"Alamat di toko / pelanggan tempo")}</p>
                ${u.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${l(u.customer.note)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan Jatuh Tempo:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tanggal Jatuh Tempo:</span> <b class="text-slate-900 font-mono">${J($)}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Sistem Pembayaran:</span> <b class="${W?"text-emerald-700 font-bold":"text-slate-900"} uppercase">${W?"Putri PayLater Member VIP":"Tempo / Bertahap"}</b></p>
                ${H?`<p class="text-xs font-bold text-rose-600 mb-1"><span class="text-slate-500">Status:</span> Lewat ${v} Hari (Denda ${h}%/hari)</p>`:""}
                <p class="text-xs font-semibold text-slate-700"><span class="text-slate-500">Kasir / Admin:</span> <b class="text-slate-900 uppercase">${l(u.cashierName||"Kasir Toko")}</b></p>
            </div>
        </div>
        `,ne=`
        <tr class="border-b-2 border-slate-800 text-[10.5px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Satuan</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `,ye=(u.items||[]).map((I,re)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${re+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${l(I.name)}
                ${I.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${l(I.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${mt(I.qty)} <span class="text-[10px] font-normal text-slate-500">${l(I.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${A(I.effectivePrice||I.price)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${A(I.subtotal||Math.round((parseFloat(I.qty)||0)*(parseFloat(I.effectivePrice||I.price)||0)))}</td>
        </tr>
        `),ve=`
        ${P.length>0?`
        <div class="mb-5">
            <h3 class="text-xs font-black text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-receipt text-[var(--color-primary)]"></i> Histori Pembayaran Cicilan Diterima:
            </h3>
            <table class="w-full text-left border border-slate-200 rounded-xl overflow-hidden text-xs">
                <thead class="bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
                    <tr>
                        <th class="py-2 px-3 w-12 text-center border-b border-slate-200">Ke</th>
                        <th class="py-2 px-3 border-b border-slate-200">Tanggal Bayar</th>
                        <th class="py-2 px-3 border-b border-slate-200">Metode Bayar</th>
                        <th class="py-2 px-3 text-right border-b border-slate-200">Nominal Cicilan</th>
                        <th class="py-2 px-3 border-b border-slate-200">Catatan</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 font-mono">
                    ${P.map((I,re)=>`
                    <tr class="hover:bg-slate-50">
                        <td class="py-1.5 px-3 text-center text-slate-500">${re+1}</td>
                        <td class="py-1.5 px-3 text-slate-700">${J(I.date)}</td>
                        <td class="py-1.5 px-3 uppercase text-slate-600 font-bold">${l(I.method||"Tunai")}</td>
                        <td class="py-1.5 px-3 text-right font-bold text-emerald-600">+ ${A(I.amount)}</td>
                        <td class="py-1.5 px-3 text-slate-500 text-[11px] font-sans">${l(I.note||"-")}</td>
                    </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>`:""}
        `,ke=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran:
                </h4>
                <div class="space-y-1 pt-0.5">${se}</div>
                <p class="text-[9.5px] text-slate-500 pt-1.5 border-t border-slate-200">Konfirmasi bukti transfer ke nomor resmi WhatsApp toko kami.</p>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Awal:</span><span class="font-bold text-slate-800">${A(j)}</span></div>
                ${W?`<div class="flex justify-between text-emerald-600 font-bold"><span>Limit PayLater Terpakai:</span><span>${A(u.payment?.paylaterUsed||j-(u.payment?.tempoDp||u.payment?.dp||0))}</span></div>`:""}
                ${(parseFloat(u.payment?.tempoDp||u.payment?.dp)||0)>0?`<div class="flex justify-between text-slate-600"><span>Uang Muka (DP Dibayar):</span><span class="font-bold">${A(u.payment?.tempoDp||u.payment?.dp||0)}</span></div>`:""}
                ${N>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Masuk:</span><span>-${A(N)}</span></div>`:""}
                <div class="flex justify-between text-slate-700 font-bold"><span>${W?"Sisa Pokok PayLater:":"Sisa Pokok Piutang:"}</span><span>${A(C)}</span></div>
                ${T>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Denda Keterlambatan:</span><span>+${A(T)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>${W?"SISA TAGIHAN PAYLATER:":"SISA WAJIB BAYAR:"}</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${A(G?0:k)}</span>
                </div>
            </div>
        </div>
        `,Ie=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Yang Berhutang (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${l(u.customer?.name||"Pelanggan")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Kasir Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${l(p.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,ot=le({docTitle:W?"Nota Putri PayLater":"Nota Tagihan Piutang",docNumber:`#${u.orderId}`,docDate:L,kopHtml:he,metaHtml:ze,tableHeaderHtml:ne,rows:ye,extraBlocksHtml:ve,summaryHtml:ke,signaturesHtml:Ie,singlePageMax:5,itemsFirstPage:5,itemsMiddlePage:12,itemsLastPage:4});de(ot);return}if(e==="tempo_customer_ledger"){const y=String(t||"").trim(),u=(window.cachedPiutangOrders||[]).filter(E=>{const oe=String(E.customer?.phone||E.customer?.wa||"").replace(/\D/g,""),se=String(E.customer?.name||"").toLowerCase().trim(),he=y.replace(/\D/g,"");return!!(he.length>=8&&oe.includes(he)||se&&y.toLowerCase().includes(se))});if(u.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada nota piutang aktif untuk pelanggan ini.");return}const M=u[0].customer||{},L=M.name||"Pelanggan",C=M.wa||M.phone||"-";Q("doc-modal-title",`Kartu Piutang: ${L}`);const h=ce("w-16 h-16"),b=J(Date.now());let T=0,$=0,v=0,R=0,H=0;const D=u.map((E,oe)=>{const se=parseFloat(E.payment?.tempoBalance)||0,he=E.payment?.tempoPenaltyRate!==void 0?parseFloat(E.payment.tempoPenaltyRate):1,ze=E.payment?.tempoPenaltyStopped===!0;let ne=0;const ye=E.payment?.tempoDueDate||0;let ve=0,ke=!1;const Ie=Date.now();ye>0&&Ie>ye&&(ve=Math.floor((Ie-ye)/(24*60*60*1e3)),ve>0&&(ke=!0)),ze?ne=parseFloat(E.payment?.tempoFixedPenalty)||0:ke&&(ne=he/100*se*ve);const I=(E.payment?.installments||[]).reduce((Ft,jt)=>Ft+(parseFloat(jt.amount)||0),0),re=E.payment?.grandTotal||se+I,nt=se+ne;return T+=re,$+=I,v+=se,R+=ne,H+=nt,`
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="py-2.5 px-3 text-center font-mono text-slate-500">${oe+1}</td>
                <td class="py-2.5 px-3 font-mono font-bold text-slate-800">#${l(E.orderId)}</td>
                <td class="py-2.5 px-3 font-medium text-slate-600">${J(E.dateString||E.timestamp)}</td>
                <td class="py-2.5 px-3 font-mono ${ke?"text-rose-600 font-bold":"text-slate-700"}">${J(ye)} ${ke?`<span class="text-[9.5px] text-rose-500">(+${ve}h)</span>`:""}</td>
                <td class="py-2.5 px-3 text-right font-mono text-slate-600">${A(re)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-600 font-bold">${A(I)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-rose-600">${ne>0?A(ne):"-"}</td>
                <td class="py-2.5 px-3 text-right font-mono font-black text-slate-900">${A(nt)}</td>
            </tr>
            `}),S=p.banks&&p.banks.length>0?p.banks.map(E=>`<div class="font-mono text-xs"><b class="text-slate-900">${l(E.bank)}:</b> ${l(E.number)} a/n ${l(E.name)}</div>`).join(""):'<div class="text-xs text-slate-500 italic">Hubungi kasir untuk info rekening transfer bank</div>',k=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${h}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${l(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${l(p.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${l(p.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${l(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">KARTU PIUTANG PELANGGAN</h2>
                <p class="text-xs font-bold text-slate-600 mt-1">STATEMENT OF ACCOUNT</p>
                <p class="text-xs font-semibold text-slate-500 mt-0.5">Dicetak: ${b}</p>
                <span class="inline-block mt-1.5 px-3 py-0.5 bg-amber-50 text-amber-700 border border-amber-300 rounded-full text-[11px] font-black uppercase tracking-wider">
                    ${u.length} NOTA BELUM LUNAS
                </span>
            </div>
        </div>
        `,P=`
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Informasi Debitur / Pelanggan:</h3>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="text-[11px] text-slate-500">Nama Pelanggan / Badan:</p>
                    <p class="font-bold text-base text-slate-900 uppercase">${l(L)}</p>
                </div>
                <div>
                    <p class="text-[11px] text-slate-500">Nomor WhatsApp / HP:</p>
                    <p class="font-mono font-bold text-base text-emerald-600">+${l(C)}</p>
                </div>
            </div>
        </div>
        `,N=`
        <tr class="border-b-2 border-slate-800 text-[10.5px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">No. Nota</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Tgl Transaksi</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Jatuh Tempo</th>
            <th class="py-2.5 px-3 text-right border-r border-slate-700">Total Transaksi</th>
            <th class="py-2.5 px-3 text-right border-r border-slate-700">Terbayar</th>
            <th class="py-2.5 px-3 text-right border-r border-slate-700">Denda</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Sisa Tagihan</th>
        </tr>
        `,j=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Transfer Resmi Pelunasan:
                </h4>
                <div class="space-y-1 pt-0.5">${S}</div>
                <p class="text-[9.5px] text-slate-500 pt-1.5 border-t border-slate-200">Kartu piutang ini mencatat seluruh tagihan aktif per tanggal cetak.</p>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Keseluruhan:</span><span class="font-bold text-slate-800">${A(T)}</span></div>
                <div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Diterima (-):</span><span>-${A($)}</span></div>
                <div class="flex justify-between text-slate-700 font-bold"><span>Total Sisa Pokok Piutang:</span><span>${A(v)}</span></div>
                ${R>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Total Denda (+):</span><span>+${A(R)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL AKUMULASI PIUTANG:</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${A(H)}</span>
                </div>
            </div>
        </div>
        `,G=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Penerima Tagihan (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${l(L)}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Pemilik Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${l(p.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,W=le({docTitle:"Kartu Piutang Pelanggan",docNumber:"STATEMENT OF ACCOUNT",docDate:b,kopHtml:k,metaHtml:P,tableHeaderHtml:N,rows:D,summaryHtml:j,signaturesHtml:G,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});de(W);return}const a=t||window.cVOrd,s=(window.gOrds||[]).find(y=>String(y.orderId)===String(a))||(window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(a)?window.lastPrintedOrder:null);if(!s){typeof window.showToast=="function"&&window.showToast("Data pesanan tidak ditemukan!");return}Q("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const o=s.dateString?new Date(s.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"",r=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${ce("w-16 h-16")}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${l(p.store?.name||"TOKO PUTRI")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${l(p.store?.slogan||"General Supplier")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${l(p.store?.address||"Alamat fisik toko")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${l(p.store?.wa||"-")}</p>
                ${s.payment?.taxNpwp||p.store?.taxNpwp?`<p class="text-xs font-semibold text-slate-600 mt-0.5"><i class="fa-solid fa-id-card text-blue-500"></i> NPWP Toko: <span class="font-mono">${l(s.payment?.taxNpwp||p.store.taxNpwp)}</span></p>`:""}
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl sm:text-3xl tracking-widest ${e==="invoice"?"text-blue-600":"text-amber-600"} uppercase">${e==="invoice"?s.payment?.method==="tempo"?"PROFORMA INVOICE":"INVOICE":"SURAT JALAN"}</h2>
            <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${l(s.orderId)}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${o}</p>
        </div>
    </div>
    `,i=`
    <div class="grid grid-cols-2 gap-6 mb-5">
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ditagihkan Kepada (Pemesan):</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-0.5">${l(s.customer?.name||"Guest")}${s.customer?.wa?` <span class="text-xs font-mono font-medium text-slate-500">(+${l(s.customer.wa)})</span>`:""}</p>
            <p class="text-xs font-medium text-slate-700 leading-relaxed mb-1">${l(s.customer?.address||"-")}</p>
            ${s.isDropPoint&&s.dropPoint?`
            <div class="mt-2 pt-2 border-t border-rose-200 bg-rose-50/80 p-2.5 rounded-xl border border-dashed text-left">
                <div class="flex items-center gap-1.5 text-rose-700 font-bold text-[11px] uppercase tracking-wider mb-0.5">
                    <i class="fa-solid fa-location-dot"></i> Pengantaran ke Lokasi Berbeda (Drop-Point):
                </div>
                <p class="font-bold text-xs text-slate-900 uppercase">${l(s.dropPoint.name||"-")}${s.dropPoint.wa?` <span class="font-mono text-[11px] font-semibold text-rose-600">(+${l(s.dropPoint.wa)})</span>`:""}</p>
                <p class="text-[11px] font-medium text-slate-700 mt-0.5 leading-relaxed">${l(s.dropPoint.address||"-")}</p>
            </div>
            `:""}
            ${s.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-xl border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky"></i> Catatan: ${l(s.customer.note)}</p>`:""}
        </div>
        
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-center space-y-2.5">
            <div class="flex justify-between items-center border-b border-slate-200 pb-1.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Metode Pengiriman</span>
                <span class="text-xs font-bold text-slate-800 uppercase">${l(s.isDropPoint?"Drop-Point (Lokasi Berbeda)":s.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko")}</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-200 pb-1.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Sistem Pembayaran</span>
                <span class="text-xs font-bold text-slate-800 uppercase">${l(s.payment?.method||"cash")}</span>
            </div>
            <div class="flex justify-between items-center pb-0.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Bayar</span>
                <span class="text-xs font-bold ${s.status==="Selesai"?"text-emerald-600":"text-rose-600"} uppercase">${s.status==="Selesai"?"LUNAS":"BELUM LUNAS"}</span>
            </div>
        </div>
    </div>
    `,d=Array.isArray(s.items)?s.items:Array.isArray(s.cart)?s.cart:[];if(e==="invoice"){const y=`
        <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
            <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Produk &amp; Varian</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Sat.</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total</th>
        </tr>
        `,w=d.map((h,b)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${b+1}</td>
            <td class="py-2.5 px-3 font-bold flex items-center gap-1.5">
                ${l(h.name)} 
                ${h.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${l(h.variantName)}</span>`:""}
                ${h.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${l(h.colorCode)};"></span>`:""}
                ${h.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${l(h.poTime)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${parseFloat(h.qty)} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${l(h.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${A(h.effectivePrice)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${A(h.effectivePrice*parseFloat(h.qty))}</td>
        </tr>
        `);let u="";(s.pointsEarned>0||s.finalMemberPoints!==void 0&&s.finalMemberPoints!==null)&&(u+=`
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 flex items-center gap-4">
                <div class="w-8 h-8 rounded-lg bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
                ${s.pointsEarned>0?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-sm text-amber-700">+${s.pointsEarned}</p></div>`:""}
                ${s.finalMemberPoints!==void 0&&s.finalMemberPoints!==null?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Member</p><p class="font-bold text-sm text-amber-700">${s.finalMemberPoints}</p></div>`:""}
            </div>`),s.claimedReward&&(u+=`
            <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-3 mb-4 flex items-center justify-between gap-4">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                    <div>
                        <p class="text-[9px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${s.claimedReward.pointsCost} Poin)</p>
                        <p class="font-bold text-xs text-violet-800 uppercase">${l(s.claimedReward.name)}</p>
                    </div>
                </div>
                <span class="text-[9.5px] font-bold px-2.5 py-1 rounded-lg bg-violet-600 text-white uppercase tracking-wider">${l(s.claimedReward.status==="ready"?"SERTAKAN PENGIRIMAN":"KLAIM RESMI")}</span>
            </div>`),s.payment?.method==="tempo"&&(u+=`
            <div class="mb-4 border border-pink-200 bg-pink-50 p-3 rounded-xl text-left">
                <h4 class="font-bold text-pink-700 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo:</h4>
                <p class="text-[9.5px] text-pink-600 font-semibold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${s.payment.tempoDueDate?new Date(s.payment.tempoDueDate).toLocaleDateString("id-ID"):"-"}). Keterlambatan dikenakan denda sesuai regulasi toko.</p>
            </div>`);const M=`
        <div class="flex justify-end mb-5">
            <div class="w-1/2 md:w-[45%] space-y-1.5 text-xs font-bold text-slate-700">
                <div class="flex justify-between px-3"><span>Subtotal Produk</span><span class="font-mono">${A(s.payment?.subtotal)}</span></div>
                ${s.payment?.shippingCost?`<div class="flex justify-between px-3"><span>Ongkos Kirim</span><span class="font-mono">${A(s.payment.shippingCost)}</span></div>`:""}
                ${s.payment?.shippingDiscount?`<div class="flex justify-between px-3 text-emerald-600"><span>Diskon Ongkir</span><span class="font-mono">-${A(s.payment.shippingDiscount)}</span></div>`:""}
                ${s.payment?.productDiscount?`<div class="flex justify-between px-3 text-rose-600"><span>Diskon Produk</span><span class="font-mono">-${A(s.payment.productDiscount)}</span></div>`:""}
                ${(()=>{if(!((s.payment?.ppnEnabled||s.payment?.ppnShowZero||s.payment?.ppnRate===0||s.payment?.ppnAmount&&s.payment.ppnAmount>0)&&(p.store?.ppnEnabled||s.payment?.ppnEnabled)))return"";const b=s.payment?.ppnType==="inclusive",T=s.payment?.ppnRate!==void 0?s.payment.ppnRate:p.store?.ppnRate||0,$=s.payment?.ppnAmount||0,v=s.payment?.ppnLabel||`${b?"Termasuk PPN":"PPN"} (${T}%)`,R=(s.payment?.subtotal||0)-(s.payment?.productDiscount||0)+(s.payment?.shippingCost||0)-(s.payment?.shippingDiscount||0),H=s.payment?.dppAmount!==void 0?s.payment.dppAmount:b&&T>0?Math.round(R*100/(100+T)):Math.max(0,R);return`
                    <div class="flex justify-between px-3 text-slate-600"><span>DPP</span><span class="font-mono">${A(H)}</span></div>
                    <div class="flex justify-between px-3 text-amber-600"><span>${v}</span><span class="font-mono">${$>0?(b?"":"+")+A($):"Rp 0"}</span></div>
                    `})()}
                
                <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-2 shadow-xs">
                    <span class="font-bold text-xs uppercase tracking-widest">Grand Total</span>
                    <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${A(s.payment?.grandTotal)}</span>
                </div>
                ${s.payment?.method==="tempo"?`
                <div class="flex justify-between px-3 mt-2 text-emerald-600"><span>Uang Muka (DP)</span><span class="font-mono">${A(s.payment?.tempoDp||0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-2.5 rounded-xl mt-1 border border-rose-200">
                    <span class="font-bold text-xs uppercase tracking-widest">Sisa Tagihan</span>
                    <span class="font-mono text-sm font-bold tracking-tight">${A(s.payment?.tempoBalance||0)}</span>
                </div>
                `:""}
            </div>
        </div>
        `,L=`
        <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Penerima / Klien:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900">${l(s.customer?.name||"Nama Terang & TTD")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Sopir / Pengantar:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900">Nama Terang &amp; TTD</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Hormat Kami:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${l(p.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,C=le({docTitle:s.payment?.method==="tempo"?"Proforma Invoice":"Faktur Invoice",docNumber:`#${s.orderId}`,docDate:o,kopHtml:r,metaHtml:i,tableHeaderHtml:y,rows:w,extraBlocksHtml:u,summaryHtml:M,signaturesHtml:L,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:12,itemsLastPage:5});de(C);return}const c=`
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Nama &amp; Spesifikasi Barang</th>
        <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Satuan</th>
        <th class="py-2.5 px-3 rounded-tr-xl text-center w-24">Ceklis Gudang</th>
    </tr>
    `,x=d.map((y,w)=>`
    <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3 text-center font-mono text-slate-500">${w+1}</td>
        <td class="py-2.5 px-3 font-bold uppercase flex items-center gap-1.5">
            ${l(y.name)} 
            ${y.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${l(y.variantName)}</span>`:""}
            ${y.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${l(y.colorCode)};"></span>`:""}
            ${y.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${l(y.poTime)}</span>`:""}
        </td>
        <td class="py-2.5 px-3 text-center font-bold text-base text-slate-800">${parseFloat(y.qty)}</td>
        <td class="py-2.5 px-3 text-center text-slate-500 font-bold uppercase text-[11px]">${l(y.unit||"pcs")}</td>
        <td class="py-2.5 px-3 text-center"><div class="w-4 h-4 border-2 border-slate-400 mx-auto rounded-sm shadow-inner"></div></td>
    </tr>
    `),f=`
    <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Penerima / Klien:</span>
            <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">${l(s.customer?.name||"Nama Terang & TTD")}</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Sopir / Pengantar:</span>
            <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">Nama Terang &amp; TTD</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Hormat Kami:</span>
            <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900 uppercase">${l(p.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,g=le({docTitle:"Surat Jalan Pengiriman",docNumber:`#${s.orderId}`,docDate:o,kopHtml:r,metaHtml:i,tableHeaderHtml:c,rows:x,signaturesHtml:f,singlePageMax:8,itemsFirstPage:8,itemsMiddlePage:16,itemsLastPage:9});de(g)},Ps=()=>{const e=window.cart||[];if(!e||e.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}fe="sph";const t="SPH-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.floor(1e3+Math.random()*9e3),a=J(new Date),s=J(new Date(Date.now()+14*24*60*60*1e3));Q("doc-modal-title","Surat Penawaran Harga (SPH)");const o=ce("w-16 h-16"),n=typeof window.getEffP=="function"?window.getEffP:u=>u.price||0;let r=0;const i=e.map((u,M)=>{const L=parseFloat(u.qty)||1,C=n(u),h=L*C;return r+=h,`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${M+1}</td>
            <td class="py-2.5 px-3 font-bold">
                ${l(u.name)}
                ${u.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${l(u.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${L} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${l(u.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${A(C)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${A(h)}</td>
        </tr>
        `}),d=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${o}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${l(p.store?.name||"Toko Putri")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${l(p.store?.slogan||"General Supplier & Alat Teknik")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${l(p.store?.address||"Alamat fisik toko")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${l(p.store?.wa||"-")}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl tracking-widest text-emerald-600 uppercase">PENAWARAN HARGA</h2>
            <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${t}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${a}</p>
            <span class="inline-block mt-1 px-2.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-300 rounded text-[10px] font-bold uppercase tracking-wider">
                Berlaku s/d: ${s}
            </span>
        </div>
    </div>
    `,c=`
    <div class="grid grid-cols-2 gap-6 mb-5">
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Ditujukan Kepada:</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-0.5">Kepada Yth. Rekanan / Proyek</p>
            <p class="text-xs font-medium text-slate-600 leading-relaxed">Pelanggan Terhormat / Departemen Pengadaan</p>
            <p class="text-[10px] italic text-slate-400 mt-1.5">* Surat penawaran harga resmi dapat digunakan sebagai referensi RAB proyek &amp; pengajuan anggaran.</p>
        </div>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-center space-y-2">
            <div class="flex justify-between items-center border-b border-slate-200 pb-1.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Masa Berlaku</span>
                <span class="text-xs font-bold text-slate-800">14 Hari Kalender</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-200 pb-1.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Ketersediaan Stok</span>
                <span class="text-xs font-bold text-slate-800">Konfirmasi Saat Pemesanan</span>
            </div>
            <div class="flex justify-between items-center pb-0.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Dokumen</span>
                <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider font-mono">OFFICIAL QUOTATION</span>
            </div>
        </div>
    </div>
    `,x=`
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Barang &amp; Spesifikasi</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
        <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Satuan</th>
        <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total Estimasi</th>
    </tr>
    `,f=`
    <div class="flex justify-end mb-4">
        <div class="w-1/2 md:w-[45%] space-y-1.5 text-xs font-bold text-slate-700">
            <div class="flex justify-between px-3"><span>Subtotal Estimasi</span><span class="font-mono">${A(r)}</span></div>
            <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-1 shadow-xs">
                <span class="font-bold text-xs uppercase tracking-widest">Total Penawaran</span>
                <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${A(r)}</span>
            </div>
        </div>
    </div>
    `,g=`
    <div class="border border-slate-200 bg-slate-50 p-3 rounded-xl text-left mb-4">
        <h4 class="font-bold text-slate-700 text-[10.5px] uppercase tracking-widest mb-1"><i class="fa-solid fa-circle-info mr-1 text-[var(--color-primary)]"></i> Syarat &amp; Ketentuan Penawaran:</h4>
        <ul class="text-[10px] text-slate-600 space-y-0.5 list-disc list-inside">
            <li>Harga penawaran berlaku selama <b>14 hari kalender</b> terhitung sejak tanggal dokumen diterbitkan.</li>
            <li>Ketersediaan dan fluktuasi stok dapat berubah sewaktu-waktu sampai diterbitkannya konfirmasi pesanan (PO) resmi.</li>
            <li>Biaya pengiriman dan penanganan disesuaikan dengan kuantitas dan jarak tempuh lokasi pengiriman.</li>
        </ul>
    </div>
    `,y=`
    <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-4 border-t border-slate-200">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Menyetujui / Klien Proyek:</span>
            <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">Nama Terang &amp; Stempel</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Hormat Kami:</span>
            <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900 uppercase">${l(p.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,w=le({docTitle:"Surat Penawaran Harga",docNumber:`#${t}`,docDate:a,kopHtml:d,metaHtml:c,tableHeaderHtml:x,rows:i,summaryHtml:f,extraBlocksHtml:g,signaturesHtml:y,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:5});de(w)},de=e=>{const t=m("doc-paper-content");if(!t)return;t.innerHTML=e.join("");const a=e.length,s=m("doc-page-count-badge");s&&(s.textContent=`${a} Halaman A4`),Ts(a)},Ts=(e=1)=>{const t=m("doc-preview-modal"),a=m("doc-preview-modal-box");t&&t.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),Ue(t,a),st()},st=()=>{const e=m("doc-paper-scroll-area"),t=m("doc-paper-content"),a=m("doc-paper-wrapper");if(!e||!t||!a)return;const s=794,o=window.innerWidth<640?12:32,n=e.clientWidth-o,r=Math.min(1,Math.max(.2,n/s));t.style.transform=`translateX(-50%) scale(${r})`;const i=t.offsetHeight||t.scrollHeight;a.style.height=i*r+48+"px"};window.addEventListener("resize",()=>{const e=m("doc-preview-modal");e&&!e.classList.contains("hidden")&&st()});const Ss=(e=!1)=>{const t=m("doc-preview-modal"),a=m("doc-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{ge(t,a)}):ge(t,a))},As=()=>{const e=m("doc-paper-content"),t=e?e.innerHTML:"";if(!t){typeof window.showToast=="function"&&window.showToast("Tidak ada dokumen yang dicetak!");return}if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){let n=m("a4-print-section");n||(n=document.createElement("div"),n.id="a4-print-section",document.body.appendChild(n)),n.innerHTML=t,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500);return}const a=window.open("","_blank"),o=`<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>${l(fe==="invoice"?"Faktur Invoice":fe==="po"?"Purchase Order":fe==="sph"?"Penawaran Harga":fe==="stock_opname"?"Berita Acara Stock Opname":"Dokumen Resmi A4")} - Cetak A4 Standar Presisi</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"><\/script>
    <style>
        * {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        @page {
            size: A4 portrait;
            margin: 0;
        }
        html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            font-family: 'Barlow', system-ui, -apple-system, sans-serif;
            color: #0f172a;
        }
        .a4-page {
            width: 210mm !important;
            height: 297mm !important;
            min-height: 297mm !important;
            max-height: 297mm !important;
            margin: 0 auto !important;
            padding: 12mm 15mm 10mm 15mm !important;
            box-sizing: border-box !important;
            page-break-after: always !important;
            break-after: page !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            overflow: hidden !important;
            background: #ffffff !important;
            font-size: 13px !important;
            line-height: 1.45 !important;
        }
        .a4-page:last-child {
            page-break-after: avoid !important;
            break-after: avoid !important;
        }
        .a4-page-footer {
            margin-top: auto;
            padding-top: 8px;
            border-top: 1px solid #cbd5e1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 10px;
            color: #64748b;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }
        @media screen {
            body {
                background: #e2e8f0;
                padding: 24px 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 24px;
            }
            .a4-page {
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15) !important;
                border: 1px solid #cbd5e1 !important;
            }
        }
    </style>
</head>
<body onload="setTimeout(() => { window.print(); }, 650)">
    ${t}
</body>
</html>`;if(!a){let n=document.getElementById("a4-print-fallback-iframe");n||(n=document.createElement("iframe"),n.id="a4-print-fallback-iframe",n.style.position="fixed",n.style.right="0",n.style.bottom="0",n.style.width="0",n.style.height="0",n.style.border="0",n.style.opacity="0",document.body.appendChild(n));const r=n.contentWindow.document;r.open(),r.write(o),r.close(),setTimeout(()=>{try{n.contentWindow.focus(),n.contentWindow.print()}catch(i){console.warn("[DocPrint] Fallback iframe print error:",i)}},650);return}a.document.open(),a.document.write(o),a.document.close()},$s=async e=>{if(!Ut){We(!0),He(e==="image"?"Membuat Gambar HD...":"Menyusun Dokumen PDF A4...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{Ve(),We(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const t=m("doc-paper-content");if(!t)throw new Error("Elemen dokumen tidak ditemukan.");let a=Array.from(t.querySelectorAll(".a4-page"));a.length===0&&(a=[t]);const s=window.cVOrd||Date.now().toString(36).toUpperCase(),o=`${fe.toUpperCase()}_${s}`,n=async r=>{const i=document.createElement("div");i.style.position="fixed",i.style.top="-9999px",i.style.left="-9999px",i.style.width="794px",i.style.height="1123px",i.style.backgroundColor="#ffffff",i.style.overflow="hidden",i.style.zIndex="-9999";const d=r.cloneNode(!0);d.style.margin="0 auto",d.style.boxShadow="none",d.style.border="none",d.style.borderRadius="0",d.style.transform="none",d.style.width="794px",d.style.height="1123px",d.style.minHeight="1123px",d.style.maxHeight="1123px",d.style.overflow="hidden",i.appendChild(d),document.body.appendChild(i);const c=Array.from(d.querySelectorAll("img"));await Promise.all(c.map(f=>f.complete?Promise.resolve():new Promise(g=>{f.addEventListener("load",g,{once:!0}),f.addEventListener("error",g,{once:!0})}))),await new Promise(f=>setTimeout(f,200));const x=await html2canvas(i,{scale:2,useCORS:!0,backgroundColor:"#ffffff",width:794,height:1123,windowWidth:794,windowHeight:1123});return document.body.removeChild(i),x};if(e==="image")if(a.length===1){const i=(await n(a[0])).toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(i,`${o}.png`,"image/png");else{const d=document.createElement("a");d.download=`${o}.png`,d.href=i,d.click()}typeof window.showToast=="function"&&window.showToast("Gambar A4 Presisi Berhasil Disimpan!")}else{for(let r=0;r<a.length;r++){He(`Menyimpan Gambar Halaman ${r+1} dari ${a.length}...`);const d=(await n(a[r])).toDataURL("image/png",1),c=`${o}_Hal_${r+1}.png`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(d,c,"image/png");else{const x=document.createElement("a");x.download=c,x.href=d,x.click()}await new Promise(x=>setTimeout(x,250))}typeof window.showToast=="function"&&window.showToast(`Berhasil menyimpan ${a.length} gambar halaman A4!`)}else{const r=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,i=new r({orientation:"portrait",unit:"mm",format:"a4"});for(let d=0;d<a.length;d++){He(`Menyusun PDF Hal ${d+1} dari ${a.length}...`);const x=(await n(a[d])).toDataURL("image/jpeg",.95);d>0&&i.addPage("a4","portrait"),i.addImage(x,"JPEG",0,0,210,297,void 0,"FAST")}window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"?window.AndroidNativeApp.saveOrShareFile(i.output("datauristring"),`${o}.pdf`,"application/pdf"):i.save(`${o}.pdf`),typeof window.showToast=="function"&&window.showToast(`File PDF Standar A4 (${a.length} Halaman) Berhasil Disimpan!`)}}catch(t){console.error("Export Error: ",t),typeof window.showToast=="function"&&window.showToast(t&&t.message?`Gagal: ${t.message}`:"Gagal memproses dokumen.")}finally{Ve(),We(!1)}}};window.openDocPreview=ks;window.openCartSPHPreview=Ps;window.fitDocPreview=st;window.closeDocPreviewModal=Ss;window.printDocA4=As;window.exportDocFile=$s;export{Ke as $,ue as A,Ue as B,ca as C,pa as D,ja as E,wa as F,ao as G,Zs as H,ge as I,Qs as J,z as K,Ea as L,na as M,ra as N,Ws as O,Xt as P,ta as Q,aa as R,ea as S,sa as T,oa as U,Us as V,Fs as W,js as X,_s as Y,zs as Z,qs as _,p as a,la as a$,je as a0,Tt as a1,go as a2,bo as a3,Wt as a4,Ka as a5,Gt as a6,Ve as a7,Fa as a8,Kt as a9,_a as aA,ha as aB,ka as aC,co as aD,rs as aE,os as aF,no as aG,Ys as aH,F as aI,Ze as aJ,ya as aK,B as aL,Is as aM,Es as aN,V as aO,Xa as aP,yo as aQ,vo as aR,Ls as aS,wo as aT,xe as aU,Ta as aV,Rs as aW,Ns as aX,Zt as aY,Vs as aZ,ia as a_,Le as aa,Ne as ab,q as ac,hs as ad,He as ae,ba as af,uo as ag,ga as ah,mo as ai,xa as aj,fo as ak,Pa as al,te as am,xs as an,bt as ao,po as ap,Gs as aq,be as ar,va as as,io as at,we as au,Po as av,it as aw,ho as ax,oo as ay,St as az,Pt as b,da as b0,ua as b1,ma as b2,fa as b3,so as b4,Sa as b5,Ds as b6,Ks as b7,Js as b8,Xs as b9,eo as ba,to as bb,lo as bc,Qe as bd,gs as be,vs as bf,gt as c,Yt as d,m as e,A as f,Ha as g,kt as h,l as i,ro as j,Bs as k,ee as l,Hs as m,Jt as n,Qt as o,Os as p,Ua as q,_e as r,vt as s,Q as t,Na as u,X as v,xt as w,ko as x,Ba as y,xo as z};
