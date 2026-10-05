const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js","assets/module-pos-B4HQUvB6.js"])))=>i.map(i=>d[i]);
import{f as Le}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const ka="modulepreload",Pa=function(e){return"/"+e},Et={},Vt=function(t,n,a){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");s=Promise.allSettled(n.map(d=>{if(d=Pa(d),d in Et)return;Et[d]=!0;const m=d.endsWith(".css"),b=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${b}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":ka,m||(u.as="script"),u.crossOrigin="",u.href=d,l&&u.setAttribute("nonce",l),document.head.appendChild(u),m)return new Promise((h,y)=>{u.addEventListener("load",h),u.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return s.then(r=>{for(const l of r||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},Ta={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const Sa=window.FIREBASE_CONFIG||Ta;Le.apps.length||Le.initializeApp(Sa);const re=Le.firestore(),Ze=Le.auth();typeof window<"u"&&(window.firebase=Le,window.db=re,window.auth=Ze);try{re.settings({ignoreUndefinedProperties:!0,experimentalAutoDetectLongPolling:!0,merge:!0})}catch{}typeof window<"u"&&(window.addEventListener("online",()=>{try{re.enableNetwork().catch(()=>{})}catch{}}),window.addEventListener("offline",()=>{try{re.disableNetwork().catch(()=>{})}catch{}}));let Aa=null;const gn=()=>{Vt(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{Aa=Le.analytics()}catch{}}).catch(()=>{})},ie="K2ijSERTT2dg27yYGTEgn6XHSnW2",$a={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"pill",brandStyle:"logo",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showHeroSlide:!0,heroMascotImg:"/putri_mascot_anim.gif",heroBadgeText:"Siap Melayani",heroWelcomeTag:"SELAMAT DATANG",heroTitle:"",heroSubtitle:"",showRewardCatalog:!0,showScrollTopButton:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,paylater:{enabled:!0,minOrder:2e4,maxOrder:1e7,noticeText:"Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.",tenors:{"30d":{enabled:!0,label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:"flat",adminFeeValue:0,serviceFeeType:"flat",serviceFeeValue:0},"2m":{enabled:!0,label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:"flat",adminFeeValue:1500,serviceFeeType:"percent",serviceFeeValue:1.5},"3m":{enabled:!0,label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:"flat",adminFeeValue:2500,serviceFeeType:"percent",serviceFeeValue:2.5}}},terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},subscription:{status:"active",plan:"pro_managed",expiresAt:null,allowGraceDays:7,storeCode:"PUTRI",clientName:"Pemilik Toko",developerContact:"6281234567890",developerName:"Developer / Technical Partner"},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],productOrder:[],suppliers:[],purchases:[],expenses:[],stockOpnameHistory:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let c=JSON.parse(JSON.stringify($a)),Gt=[],Jt=[],B=[];try{const e=localStorage.getItem("freshmart_cart");e&&(Gt=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(Jt=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(B=JSON.parse(e)||[])}catch{}let Ma={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},La=null,Ca=null,Da=null,Na="Semua Produk",Ia="Semua Jenis",Ra="Semua Merek",Oa="",Ea="newest",Ba="grid",Ha=1,Fa=12,Ua="orders",Ka="",ja=null,_a=null,za=0,qa=[],Wa=[],Va=[],Ga=1,ge=[],Ja=null,Ya=null,Qa=null,ve=[],Za=[],ye=null,Xa=null,es=!1,ts="all",as="today",ss=null,ns=null;const xn=e=>{ss=e},hn=e=>{c=e},yn=e=>{Gt=e},vn=e=>{Jt=e},kn=e=>{B=e},Pn=e=>{Ma=e},Tn=e=>{La=e},Sn=e=>{Ca=e},An=e=>{Da=e},$n=e=>{Na=e},Mn=e=>{Ia=e},Ln=e=>{Ra=e},Cn=e=>{Oa=e},Dn=e=>{Ea=e},Nn=e=>{Ba=e},In=e=>{Ha=e},Rn=e=>{Fa=e},On=e=>{Ua=e},En=e=>{Ka=e},Bn=e=>{ja=e},Hn=e=>{_a=e},Fn=e=>{za=e},Un=e=>{qa=e},Kn=e=>{Wa=e},jn=e=>{Va=e},_n=e=>{Ga=e},zn=e=>{ge=e},qn=e=>{ve=e},Wn=e=>{Za=e},Bt=e=>{ye=e},Vn=e=>{Xa=e},Gn=e=>{es=e},Jn=e=>{ns=e},Yn=e=>{ts=e},Qn=e=>{as=e},Zn=e=>{Ja=e},Xn=e=>{Ya=e},eo=e=>{Qa=e};let Yt=!1;if(typeof window<"u"){const e=()=>{Yt=!0,window.__hasUserInteracted=!0};["pointerdown","touchstart","mousedown","keydown"].forEach(t=>{window.addEventListener(t,e,{capture:!0,once:!0})}),window.__hasUserInteracted=!1}const kt=()=>typeof navigator<"u"&&navigator.userActivation?navigator.userActivation.hasBeenActive:!!(Yt||typeof window<"u"&&window.__hasUserInteracted);typeof window<"u"&&(window.checkUserGesture=kt);const Pe=(e="light")=>{try{const t=window.Capacitor?.Plugins?.Haptics;if(t){e==="light"||e==="selection"?t.impact({style:"LIGHT"}).catch(()=>{}):e==="medium"?t.impact({style:"MEDIUM"}).catch(()=>{}):e==="heavy"?t.impact({style:"HEAVY"}).catch(()=>{}):e==="success"?t.notification({type:"SUCCESS"}).catch(()=>{}):e==="warning"?t.notification({type:"WARNING"}).catch(()=>{}):e==="error"&&t.notification({type:"ERROR"}).catch(()=>{});return}if(typeof navigator<"u"&&typeof navigator.vibrate=="function"){if(!kt())return;e==="light"||e==="selection"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="heavy"?navigator.vibrate(45):e==="success"?navigator.vibrate([15,30,20]):e==="warning"?navigator.vibrate([30,40,30]):e==="error"&&navigator.vibrate([40,50,40,50,40])}}catch{}};typeof window<"u"&&(window.triggerHaptic=Pe);const os=e=>{if(e)switch(e){case"product-modal":typeof window.closeProductModal=="function"&&window.closeProductModal();break;case"pos-variant-sheet":typeof window.closePOSVariantSheet=="function"&&window.closePOSVariantSheet();break;case"variant-preview-modal":typeof window.closeVariantPreviewModal=="function"&&window.closeVariantPreviewModal();break;case"custom-confirm-modal":typeof window.closeConfirm=="function"&&window.closeConfirm();break;case"scanner-modal":typeof window.closeCameraScanner=="function"&&window.closeCameraScanner();break;case"modal-tempo-detail":typeof window.closeTempoDetailModal=="function"&&window.closeTempoDetailModal();break;case"modal-tempo-payment":typeof window.closeTempoPaymentModal=="function"&&window.closeTempoPaymentModal();break;case"modal-tempo-penalty":typeof window.closeTempoPenaltyModal=="function"&&window.closeTempoPenaltyModal();break;case"modal-supplier-detail":typeof window.closeSupplierDetailModal=="function"&&window.closeSupplierDetailModal();break;case"modal-supplier-form":typeof window.closeSupplierFormModal=="function"&&window.closeSupplierFormModal();break;case"modal-po-form":typeof window.closePurchaseFormModal=="function"&&window.closePurchaseFormModal();break;case"modal-po-detail":typeof window.closePurchaseDetailModal=="function"&&window.closePurchaseDetailModal();break;case"modal-po-payment":typeof window.closePurchasePaymentModal=="function"&&window.closePurchasePaymentModal();break;case"modal-po-product-picker":typeof window.closePurchasePickerModal=="function"&&window.closePurchasePickerModal();break;case"quick-menu-modal":case"quickmenu-modal":typeof window.closeQuickMenuModal=="function"&&window.closeQuickMenuModal();break;case"category-modal":typeof window.closeCategoryModal=="function"&&window.closeCategoryModal();break;case"brand-modal":typeof window.closeBrandModal=="function"&&window.closeBrandModal();break;case"quick-variant-modal":typeof window.closeQuickVariantSheet=="function"&&window.closeQuickVariantSheet();break;case"shopping-guide-modal":typeof window.closeShoppingGuideModal=="function"&&window.closeShoppingGuideModal();break;case"pos-login-modal":typeof window.closePOSLoginModal=="function"&&window.closePOSLoginModal();break;case"admin-order-modal":typeof window.closeOrderDetailModal=="function"&&window.closeOrderDetailModal();break;case"order-detail-modal":typeof window.closeCustomerOrderDetailModal=="function"&&window.closeCustomerOrderDetailModal();break;case"modal-client-tempo-pay":typeof window.closeClientPaymentModal=="function"&&window.closeClientPaymentModal();break;default:{const t=document.getElementById(e);if(t){const n=t.querySelector('button[onclick*="close"], .fa-xmark')?.closest("button");if(n)n.click();else if(typeof window.closeModalAnim=="function"){const a=t.querySelector('.modal-bottom-sheet, [id$="-box"]')||t.firstElementChild;window.closeModalAnim(t,a)}else t.classList.add("hidden","opacity-0")}}}};let Z=null,Oe=null,Ve=0,Ht=0,Ge=0,me=!1,Ft=0;const rs=()=>{if(typeof document>"u")return;document.addEventListener("touchstart",t=>{if(t.touches.length!==1)return;const n=t.touches[0],a=n.target.closest('[id*="modal"], [id*="sheet"]');if(!a||a.classList.contains("hidden")||a.classList.contains("opacity-0")||!(a.classList.contains("items-end")||!!n.target.closest(".modal-bottom-sheet")||a.classList.contains("modal-bottom-sheet")))return;let o=n.target.closest(".modal-bottom-sheet")||n.target.closest('[id$="-box"]');if(o||(o=n.target.closest('[id$="-content"]')),!o||n.target.closest('input, select, textarea, button, a, [role="button"], table, .no-drag'))return;const r=!!n.target.closest(".overflow-y-auto, .overflow-x-auto, .scroll-content, .custom-scrollbar"),l=o.getBoundingClientRect(),d=n.clientY-l.top;(n.target.closest(".pull-indicator")||!r&&d<=55)&&(Z=o,Oe=a,Ve=n.clientY,Ht=n.clientX,Ge=Ve,me=!1,Ft=Date.now())},{passive:!0}),document.addEventListener("touchmove",t=>{if(!Z||t.touches.length!==1)return;const n=t.touches[0];Ge=n.clientY;const a=Ge-Ve,s=Math.abs(n.clientX-Ht);if(!me&&s>Math.abs(a)){Z=null;return}const o=Z.classList.contains("overflow-y-auto")?Z:Z.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar");if(!(o&&o.scrollTop>5&&!me)){if(a>0){if(me=!0,t.cancelable&&t.preventDefault(),Z.style.transform=`translateY(${a}px)`,Z.style.transition="none",Oe){const r=Math.max(.2,1-a/400);Oe.style.backgroundColor=`rgba(15, 23, 42, ${.8*r})`}}else if(a<0&&me){const r=a*.2;Z.style.transform=`translateY(${r}px)`,Z.style.transition="none"}}},{passive:!1});const e=()=>{if(!Z)return;const t=Z,n=Oe,a=Ge-Ve,s=Math.max(1,Date.now()-Ft),o=a/s;Z=null,Oe=null,me&&(a>80||o>.45&&a>30)?(Pe("light"),t.style.transition="transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",t.style.transform="translateY(100%)",n&&(n.style.transition="opacity 0.25s ease",n.style.opacity="0"),setTimeout(()=>{t.style.transform="",t.style.transition="",n&&(n.style.backgroundColor="",n.style.opacity=""),os(n?n.id:"")},250)):me&&(t.style.transition="transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)",t.style.transform="",n&&(n.style.transition="background-color 0.28s ease",n.style.backgroundColor=""),setTimeout(()=>{t.style.transition=""},300)),me=!1};document.addEventListener("touchend",e,{passive:!0}),document.addEventListener("touchcancel",e,{passive:!0})};let Ut=0;const is=()=>{typeof document>"u"||document.addEventListener("click",e=>{const t=Date.now();if(t-Ut<50)return;const n=e.target.closest('button, [role="button"], a[onclick], [id*="bnav-"], .pos-add-btn, .pos-tag-chip, #pos-variant-chips button, .interactive-tap');n&&!n.disabled&&!n.classList.contains("disabled")&&(Ut=t,Pe("light"))},{passive:!0,capture:!0})};let z=null;const ls=(e="pop")=>{try{if(typeof window>"u"||!kt())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;z||(z=new t),z.state==="suspended"&&z.resume().catch(()=>{});const n=z.currentTime;if(e==="pop"){const a=z.createOscillator(),s=z.createGain();a.type="sine",a.frequency.setValueAtTime(340,n),a.frequency.exponentialRampToValueAtTime(560,n+.07),s.gain.setValueAtTime(.14,n),s.gain.exponentialRampToValueAtTime(.001,n+.08),a.connect(s),s.connect(z.destination),a.start(n),a.stop(n+.08)}else if(e==="success"){const a=z.createOscillator(),s=z.createOscillator(),o=z.createGain(),r=z.createGain();a.type="triangle",s.type="triangle",a.frequency.setValueAtTime(523.25,n),s.frequency.setValueAtTime(659.25,n+.09),o.gain.setValueAtTime(.12,n),o.gain.exponentialRampToValueAtTime(.001,n+.22),r.gain.setValueAtTime(.14,n+.09),r.gain.exponentialRampToValueAtTime(.001,n+.32),a.connect(o),o.connect(z.destination),s.connect(r),r.connect(z.destination),a.start(n),a.stop(n+.22),s.start(n+.09),s.stop(n+.32)}else if(e==="beep"){const a=z.createOscillator(),s=z.createGain();a.type="square",a.frequency.setValueAtTime(1040,n),s.gain.setValueAtTime(.08,n),s.gain.exponentialRampToValueAtTime(.001,n+.07),a.connect(s),s.connect(z.destination),a.start(n),a.stop(n+.07)}}catch{}};typeof window<"u"&&(window.playNativeSound=ls);const Ee=()=>{if(typeof document>"u")return;const e=document.getElementById("native-scroll-top-btn");e&&(e.classList.add("opacity-0","translate-y-3"),e.classList.add("hidden"))};typeof window<"u"&&(window.hideFloatingScrollTop=Ee);const ds=()=>{if(typeof document>"u")return;let e=document.getElementById("native-scroll-top-btn");e||(e=document.createElement("button"),e.id="native-scroll-top-btn",document.body.appendChild(e)),e.setAttribute("aria-label","Kembali ke Atas"),e.setAttribute("title","Kembali ke Atas"),e.className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 hidden opacity-0 translate-y-3 transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900/95 dark:bg-slate-800/95 text-white shadow-xl shadow-black/25 border border-slate-700/80 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_4px_20px_rgba(var(--color-primary-rgb),0.4)] hover:scale-105 active:scale-90 cursor-pointer group",e.innerHTML='<i class="fa-solid fa-arrow-up text-xs md:text-sm transition-transform duration-200 group-hover:-translate-y-0.5"></i>',e._hasClickListener||(e._hasClickListener=!0,e.addEventListener("click",()=>{Pe("light");const n=document.querySelector(".view-section:not(.hidden)");if(n){const a=n.querySelector(".scroll-content");a&&a.scrollTop>10&&a.scrollTo({top:0,behavior:"smooth"})}window.scrollTo({top:0,behavior:"smooth"})}));const t=(n,a=null)=>{if(!e)return;if(typeof window<"u"&&window.appData?.store?.showScrollTopButton===!1){Ee();return}const s=document.querySelector(".view-section:not(.hidden)");if(!s||s.id!=="view-catalog"&&s.id!=="view-orders"){Ee();return}if(a){const r=a.closest(".view-section");if(!r||r.id!=="view-catalog"&&r.id!=="view-orders"){Ee();return}}if(document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none), [id*="dialog"]:not(.hidden), .fixed.inset-0:not(.hidden):not(.pointer-events-none):not(#native-theme-ambient)')){Ee();return}n>450?(e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0","translate-y-3")})):(e.classList.add("opacity-0","translate-y-3"),setTimeout(()=>{e&&e.classList.contains("opacity-0")&&e.classList.add("hidden")},300))};window.addEventListener("scroll",()=>{t(window.scrollY||document.documentElement.scrollTop)},{passive:!0}),document.addEventListener("scroll",n=>{n.target&&n.target.classList&&n.target.classList.contains("scroll-content")&&t(n.target.scrollTop,n.target)},{passive:!0,capture:!0})},cs=()=>{if(typeof window>"u"||typeof document>"u")return;let e=document.getElementById("native-connectivity-banner");e||(e=document.createElement("div"),e.id="native-connectivity-banner",e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] -translate-y-16 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl",document.body.appendChild(e));let t=null;const n=a=>{clearTimeout(t),Pe(a?"success":"warning"),a?(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-emerald-600 text-white border border-emerald-400/40",e.innerHTML='<i class="fa-solid fa-wifi text-xs"></i><span>Kembali Online — Terhubung</span>',t=setTimeout(()=>{e.classList.add("-translate-y-16","opacity-0")},2500)):(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-amber-500 text-slate-950 border border-amber-300/60",e.innerHTML='<i class="fa-solid fa-wifi-slash text-xs"></i><span>Mode Offline — Menggunakan Data Lokal</span>')};window.addEventListener("online",()=>n(!0)),window.addEventListener("offline",()=>n(!1))},to=()=>{rs(),is(),ds(),cs()},Qt=e=>{let t="";return typeof e=="object"&&e!==null?t=`${e.name||""} ${e.category||""} ${e.subCategory||""}`.toLowerCase():t=String(e||"").toLowerCase(),["paku","baut","sekrup","mur","pipa","pvc","paralon","semen","pasir","bata","mortar","hebel","besi","baja","hollow","seng","atap","kawat","cat","paint","roll","kuas","thinner","amplas","alat","perkakas","tang","obeng","palu","kunci","gembok","meteran","bor","gerinda","paket","box"].some(s=>t.includes(s))?"fa-box-open":"fa-bag-shopping"},ps=(e,t="",n="")=>{const a=Qt(e);return{id:"brand",icon:a,subIcon:a,label:"Produk Resmi",podGradient:"linear-gradient(135deg, rgba(var(--color-primary-rgb),0.12) 0%, rgba(var(--color-primary-rgb),0.20) 100%)",accent:"rgba(var(--color-primary-rgb),0.1)",aura:"rgba(var(--color-primary-rgb),0.08)",shadowColor:"rgba(var(--color-primary-rgb),0.15)"}},ms=e=>{if(!e||typeof e!="string")return"TP";const n=e.replace(/[^a-zA-Z0-9\s]/g," ").trim().split(/\s+/).filter(o=>o.length>0),a=n.filter(o=>/[a-zA-Z]/.test(o)),s=a.length>0?a:n;return s.length>=2?(s[0][0]+s[1][0]).toUpperCase():s.length===1?(s[0].length>=2?s[0].slice(0,2):s[0]+"P").toUpperCase():"TP"},us=(e,t={})=>{const n=t.size||"md",a=t.className||"",s=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk"),o=Qt(e);return`
    <div class="pos-smart-cover cover-${n} ${a}" title="${i(s)}">
        <!-- Subtle Theme Glow -->
        <div class="cover-surface-glow"></div>

        <!-- Center Icon Pod: Paket Box / Shopping Bag -->
        <div class="cover-center">
            <div class="cover-icon-pod">
                <i class="fa-solid ${o} cover-icon"></i>
            </div>
        </div>

        <!-- Official Store Watermark -->
        ${n!=="thumb"?`
        <div class="cover-watermark">
            <i class="fa-solid fa-store mr-1 text-[7px] opacity-75"></i><span>PUTRI UTAMA TEKNIK</span>
        </div>`:""}
    </div>`},fs=e=>(typeof e=="object"&&e!==null?e.name:String(e||"Produk"),`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
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
    </svg>`)}`),f=e=>typeof e=="string"?document.getElementById(e):e,Zt=e=>{const t=f(e);t&&t.classList.remove("hidden")},Xt=e=>{const t=f(e);t&&t.classList.add("hidden")},bs=(e,t,n)=>{const a=f(e);a&&a.classList.toggle(t,n)},se=(e,t)=>{const n=f(e);n&&(n.innerText=t)},ea=(e,t)=>{const n=f(e);n&&(n.innerHTML=t)},ws=(e,t)=>{const n=f(e);n&&(n.value=t)},gs=e=>{const t=f(e);return t?t.value:""},Xe=(e,t)=>{const n=typeof e=="string"?f(e):e,a=typeof t=="string"?f(t):t;n&&(n.classList.remove("hidden","pointer-events-none"),a&&a.classList.add("pointer-events-auto"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{n.classList.remove("opacity-0","pointer-events-none"),a&&(a.classList.remove("translate-y-full","sm:translate-y-10","sm:translate-y-8","translate-y-6","sm:translate-y-6","scale-95"),a.classList.add("pointer-events-auto"))})}))},ke=(e,t,n)=>{const a=typeof e=="string"?f(e):e,s=typeof t=="string"?f(t):t;if(!a){typeof n=="function"&&n();return}a.classList.add("opacity-0","pointer-events-none"),s&&(s.classList.add("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95"),s.classList.remove("pointer-events-auto")),setTimeout(()=>{a.classList.add("hidden"),typeof n=="function"&&n()},280)};window.openModalAnim=Xe;window.closeModalAnim=ke;const xs=e=>{try{return localStorage.getItem(e)}catch{return null}},hs=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},i=e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),T=e=>{const t=Number(e);return isNaN(t)||e===null?"Rp 0":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(Math.abs(t)).replace(/^/,t<0?"-":"")},ys=e=>{if(!e)return new Date;if(e.timestamp&&typeof e.timestamp.toDate=="function")try{const s=e.timestamp.toDate();if(s instanceof Date&&!isNaN(s.getTime()))return s}catch{}if(e.createdAt&&typeof e.createdAt.toDate=="function")try{const s=e.createdAt.toDate();if(s instanceof Date&&!isNaN(s.getTime()))return s}catch{}if(e.timestamp&&typeof e.timestamp=="object"){const s=e.timestamp.seconds??e.timestamp._seconds;if(typeof s=="number"&&!isNaN(s)&&s>0)return new Date(s*1e3)}if(e.createdAt&&typeof e.createdAt=="object"){const s=e.createdAt.seconds??e.createdAt._seconds;if(typeof s=="number"&&!isNaN(s)&&s>0)return new Date(s*1e3)}const t=[e.dateMs,e.timestamp,e.createdAt,e.date];for(const s of t){if(typeof s=="number"&&!isNaN(s)&&s>0)return new Date(s>1e11?s:s*1e3);if(typeof s=="string"&&/^\d{10,13}$/.test(s.trim())){const o=Number(s.trim());return new Date(o>1e11?o:o*1e3)}}const n=[e.dateString,e.date,e.createdAt];for(const s of n)if(typeof s=="string"&&s.trim()&&s!=="[object Object]"){const o=new Date(s);if(!isNaN(o.getTime()))return o;const r=s.replace(/-/g,"/").replace("T"," ").replace(/\..*$/,""),l=new Date(r);if(!isNaN(l.getTime()))return l}const a=e.orderId||(typeof e=="string"?e:"");if(typeof a=="string"&&a.startsWith("ORD-")){const s=a.split("-");if(s.length>=2&&s[1].length>=6){const o=parseInt(s[1],36);if(!isNaN(o)&&o>15e11&&o<25e11)return new Date(o)}}return new Date},vs=(e,t=null)=>{if(typeof e!="string")return e;const n=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);if(!n)return e;const a=n[1];return t==="image/gif"||e.toLowerCase().includes(".gif")||a==="1rkAFxnZDe2eLQ88kan2BeGSg56IkAEJ9"?`https://drive.google.com/uc?export=view&id=${a}`:`https://lh3.googleusercontent.com/d/${a}`},ks=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(t))return t;const n=t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return n?n[1]:null},ta=e=>{if(typeof e!="string"||!e.trim())return null;const t=e.trim(),n=ks(t);if(n)return{type:"youtube",id:n,embedUrl:`https://www.youtube.com/embed/${n}?autoplay=1&mute=1&muted=1&loop=1&playlist=${n}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const a=t.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(a&&a[1]){const s=a[1];return{type:"gdrive",id:s,streamUrl:`https://drive.google.com/uc?export=download&id=${s}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${s}`,directUrl:`https://drive.google.com/uc?export=download&id=${s}`,embedUrl:`https://drive.google.com/file/d/${s}/preview?autoplay=1`}}return{type:"direct",directUrl:t,embedUrl:t}},ao=e=>{const t=ta(e);return t?t.embedUrl:e},so=e=>{const t=ta(e);return t?t.embedUrl:e},no=(e,t)=>typeof e!="string"||!e?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${t}`:e.includes("googleusercontent.com")&&!e.includes("=")?`${e}=${t}`:e,oo=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",ro=(e,t,n,a)=>{document.title=e||"Toko Putri";const s=(o,r,l=!1)=>{const d=l?"property":"name";let m=document.querySelector(`meta[${d}="${o}"]`);m||(m=document.createElement("meta"),m.setAttribute(d,o),document.head.appendChild(m)),m.setAttribute("content",r)};t&&s("description",t),e&&s("og:title",e,!0),t&&s("og:description",t,!0),n&&s("og:image",n,!0),a&&s("og:url",a,!0)},io=(e,t)=>{let n=document.getElementById(e);n||(n=document.createElement("script"),n.id=e,n.type="application/ld+json",document.head.appendChild(n)),n.textContent=JSON.stringify(t)},Je=e=>{e&&se("loader-text",e);const t=f("global-loader");t&&(t.style.opacity="1",t.style.display="flex")},pt=()=>{const e=f("global-loader");e&&(e.style.pointerEvents="none",e.style.transition="opacity 0.25s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250))},oe=(e,t,n,a)=>{typeof window.showToast=="function"&&window.showToast(e,t,n,a)},lo=(e,t,n,a)=>{if(typeof window.showConfirm=="function")return window.showConfirm(e,t,n,a)},Se={};window.loadedScripts=Se;const co=(e,t)=>t&&t()?Promise.resolve():(Se[e]||(Se[e]=new Promise((n,a)=>{const s=document.createElement("script");s.src=e,s.onload=()=>n(),s.onerror=()=>{delete Se[e],a(new Error("Gagal memuat: "+e))},document.head.appendChild(s)})),Se[e]),aa=e=>{let t=(e||"").toString().replace(/\D/g,"");return t?(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),t):""},Ps=(e,t="")=>{const n=aa(e);if(!n){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp tidak valid!");return}const a=t?encodeURIComponent(t):"",s=`https://wa.me/${n}${a?`?text=${a}`:""}`;window.AndroidNativeApp&&typeof window.AndroidNativeApp.openWhatsApp=="function"?window.AndroidNativeApp.openWhatsApp(s):window.open(s,"_blank","noopener,noreferrer")},Ts=(e,t=null,n=null)=>{try{const a=(typeof t=="string"?document.querySelector(t):t)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!a)return;const s=e.getBoundingClientRect(),o=a.getBoundingClientRect(),r=document.createElement("div");r.className="flying-cart-item",n?r.innerHTML=`<img src="${n}" alt="Product" class="w-full h-full object-cover rounded-full" />`:r.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const l=s.left+s.width/2-20,d=s.top+s.height/2-20,m=o.left+o.width/2-20,b=o.top+o.height/2-20;r.style.cssText=`
            position: fixed;
            left: ${l}px;
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
        `,document.body.appendChild(r),requestAnimationFrame(()=>{const u=m-l,h=b-d;r.style.transform=`translate3d(${u}px, ${h}px, 0) scale(0.25) rotate(18deg)`,r.style.opacity="0.4"}),setTimeout(()=>{r&&r.parentNode&&r.parentNode.removeChild(r),Pe("medium");const u=document.getElementById("bottom-nav-cart-badge")||a.querySelector(".cart-count-badge");u&&(u.classList.remove("cart-bounce-pop"),u.offsetWidth,u.classList.add("cart-bounce-pop")),a.classList.remove("cart-bounce-pop"),a.offsetWidth,a.classList.add("cart-bounce-pop"),setTimeout(()=>{u&&u.classList.remove("cart-bounce-pop"),a.classList.remove("cart-bounce-pop")},600)},500)}catch(a){console.error("flyToCart error",a)}};window.normalizeWA=aa;window.openWhatsApp=Ps;window.sLoad=Je;window.hLoad=pt;window.el=f;window.show=Zt;window.hide=Xt;window.toggleCls=bs;window.setIn=se;window.setH=ea;window.setV=ws;window.getV=gs;window.esc=i;window.fixD=vs;window.fCur=T;window.parseOrderDate=ys;window.sL=xs;window.ssL=hs;window.triggerHaptic=Pe;window.flyToCartAnimation=Ts;window.renderProductCoverHtml=us;window.getProductTheme=ps;window.getMonogram=ms;window.getProductCoverSvgDataUri=fs;const Kt={deviceType:"rawbt",deviceName:"Driver RawBT (Printer Thermal Android - Free)",deviceId:"",paperSize:"58mm",directPrint:!1,feedLines:3,autoCut:!0,openCashDrawer:!1,autoPrintOrder:!1,headerText:"",footerText:"Terima kasih atas kunjungan Anda!",showLogo:!0,showPoints:!0,showBarcode:!0,networkIp:"192.168.1.200:9100"},de=e=>{switch(e){case"58mm-compact":case"58mm_30":return 30;case"80mm-compact":case"80mm_42":return 42;case"80mm":return 48;case"58mm":default:return 32}},H=()=>{try{const e=localStorage.getItem("freshmart_printer_config");if(e)return{...Kt,...JSON.parse(e)}}catch(e){console.warn("Gagal membaca konfigurasi printer lokal:",e)}return{...Kt}},Ke=e=>{try{const n={...H(),...e};return localStorage.setItem("freshmart_printer_config",JSON.stringify(n)),n}catch(t){return console.error("Gagal menyimpan konfigurasi printer:",t),H()}},Ss=()=>{const e=H(),t=(o,r)=>{const l=f(o);l&&(l.checked=!!r)},n=(o,r)=>{const l=f(o);l&&(l.value=r||"")};n("printer-device-name-display",e.deviceName),n("printer-paper-size",e.paperSize),n("printer-network-ip",e.networkIp),n("printer-header-custom",e.headerText),n("printer-footer-custom",e.footerText),t("printer-opt-points",e.showPoints),t("printer-opt-barcode",e.showBarcode),t("printer-opt-direct",e.directPrint===!0),t("printer-opt-autocut",e.autoCut!==!1),t("printer-opt-drawer",e.openCashDrawer),t("printer-opt-autoprint",e.autoPrintOrder),na(e.deviceType||"rawbt");const a=f("printer-settings-modal"),s=f("printer-settings-modal-box");a&&a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("printerSettings"),Xe(a,s)},sa=(e=!1)=>{const t=f("printer-settings-modal"),n=f("printer-settings-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("printerSettings",e,()=>{ke(t,n)}):ke(t,n))},na=e=>{window._selectedPrinterType=e,document.querySelectorAll(".printer-type-card").forEach(a=>{if(a.getAttribute("data-type")===e){a.classList.add("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),a.classList.remove("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const o=a.querySelector(".printer-check-badge");o&&o.classList.remove("hidden")}else{a.classList.remove("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),a.classList.add("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const o=a.querySelector(".printer-check-badge");o&&o.classList.add("hidden")}});const t=f("rawbt-quick-guide-box");t&&(e==="rawbt"?t.classList.remove("hidden"):t.classList.add("hidden"));const n=f("printer-network-box");n&&(e==="network"?n.classList.remove("hidden"):n.classList.add("hidden"))},As=()=>{const e=(o,r="")=>{const l=f(o);return l?l.value:r},t=(o,r=!1)=>{const l=f(o);return l?l.checked:r},n=window._selectedPrinterType||"rawbt",s={deviceType:n,deviceName:e("printer-device-name-display",n==="rawbt"?"Driver RawBT (Printer Thermal Android - Free)":n==="bluetooth"?"Bluetooth POS Printer":"Printer Thermal POS"),paperSize:e("printer-paper-size","58mm"),networkIp:e("printer-network-ip","192.168.1.200:9100"),headerText:e("printer-header-custom",""),footerText:e("printer-footer-custom","Terima kasih atas kunjungan Anda!"),showPoints:t("printer-opt-points",!0),showBarcode:t("printer-opt-barcode",!0),directPrint:t("printer-opt-direct",!1),autoCut:t("printer-opt-autocut",!0),openCashDrawer:t("printer-opt-drawer",!1),autoPrintOrder:t("printer-opt-autoprint",!1)};Ke(s),oe("Pengaturan printer berhasil disimpan! ✅"),sa()},$s=async()=>{if(!navigator.bluetooth){oe("Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.");return}try{oe("Mencari printer bluetooth di sekitar...");const e=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["000018f0-0000-1000-8000-00805f9b34fb","e7810a71-73ae-499d-8c15-faa9aef0c3f2","00001101-0000-1000-8000-00805f9b34fb"]});if(e){Ke({deviceType:"bluetooth",deviceName:e.name||"Bluetooth POS Printer",deviceId:e.id});const t=f("printer-device-name-display");t&&(t.value=e.name||"Bluetooth POS Printer"),oe(`Printer "${e.name||"Bluetooth POS"}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&oe("Koneksi bluetooth dibatalkan atau tidak tersedia.")}},Ms=async()=>{if(!navigator.usb){oe("Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.");return}try{oe("Mencari printer USB...");const e=await navigator.usb.requestDevice({filters:[]});if(e){const t=(e.productName||"USB Thermal Printer")+" (USB)";Ke({deviceType:"usb",deviceName:t,deviceId:String(e.vendorId)+":"+String(e.productId)});const n=f("printer-device-name-display");n&&(n.value=t),oe(`Printer USB "${t}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&oe("Koneksi USB dibatalkan atau tidak ditemukan.")}},Ls=()=>{const e=H();if((e.deviceType==="rawbt"||!e.deviceType)&&typeof window.executeRawBTTestPrint=="function"){window.executeRawBTTestPrint();return}const t=e.paperSize==="80mm",n=t?48:32,a=c.store.name||"TOKO PUTRI",s=c.store.wa||"",o=(m,b,u=n)=>{const h=u-m.length-b.length;return m+(h>0?" ".repeat(h):" ")+b},r=new Date().toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let l=`
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${i(a)}</div>
    ${s?`<div style="text-align:center;font-size:11px;margin-bottom:4px;">WA: ${i(s)}</div>`:""}
    <div style="text-align:center;font-weight:bold;font-size:12px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:3px 0;margin:6px 0;">
        *** UJI COBA CETAK STRUK ***
    </div>
    <div style="white-space:pre;font-size:11px;">Tgl   : ${r}</div>
    <div style="white-space:pre;font-size:11px;">Format: Thermal ${t?"80mm (48 Kolom)":"58mm (32 Kolom)"}</div>
    <div style="white-space:pre;font-size:11px;">Koneksi: ${e.deviceType.toUpperCase()}</div>
    <div style="white-space:pre;font-size:11px;">Status : KONEKSI BERHASIL</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:11px;font-weight:bold;">${o("TES ITEM UJI COBA","HARGA",n)}</div>
    <div style="white-space:pre;font-size:10px;">${o("1x Produk Percobaan","Rp 25.000",n)}</div>
    <div style="white-space:pre;font-size:10px;">${o("2x Kertas Thermal Kasir","Rp 15.000",n)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:12px;font-weight:bold;">${o("TOTAL UJI","Rp 40.000",n)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    `;e.showPoints&&(l+=`<div style="white-space:pre;font-size:11px;">${o("Simulasi Poin Member","+10 Poin",n)}</div>`,l+='<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>'),e.showBarcode&&(l+=`<div style="text-align:center;margin:6px 0;">
            <div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*TEST-POS-${Date.now().toString().slice(-6)}*</div>
            <div style="font-size:9px;color:#333;">(BARCODE TEST OK)</div>
        </div><div style="border-bottom:1px dashed #000;margin:6px 0;"></div>`),l+=`
    <div style="text-align:center;font-size:10px;margin-top:6px;line-height:1.3;">
        ${i(e.footerText||"Terima kasih atas kunjungan Anda!")}
    </div>
    <div style="text-align:center;font-size:9px;font-style:italic;margin-top:4px;">
        Printer siap digunakan untuk operasional kasir Toko Putri.
    </div>
    <div style="height:25px;"></div>
    `;let d=f("thermal-print-section");if(d||(d=document.createElement("div"),d.id="thermal-print-section",document.body.appendChild(d)),d.innerHTML=`<div style="width:${t?"80mm":"58mm"};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${l}</div>`,typeof window.sendToRawBT=="function"){const m=d.innerText,b=btoa(unescape(encodeURIComponent(m)));window.sendToRawBT(b,m,l)}else window.print();oe("Perintah uji cetak berhasil dikirim! 🖨️")};window.getPrinterConfig=H;window.getPaperCols=de;window.savePrinterConfig=Ke;window.openPrinterSettingsModal=Ss;window.closePrinterSettingsModal=sa;window.selectPrinterDeviceTypeUI=na;window.savePrinterSettingsFromModal=As;window.scanBluetoothPrinter=$s;window.scanUsbPrinter=Ms;window.executeTestPrint=Ls;let jt={},q="view-catalog",Me=!1,Be=null,mt=["view-catalog"];const et=e=>{history.pushState({modal:e},"",window.location.href),ge.push(e)},tt=(e,t,n)=>{if(!t){const a=ge.lastIndexOf(e);a>-1&&ge.splice(a,1),Me=!0,Be&&clearTimeout(Be),Be=setTimeout(()=>{Me=!1},300);try{history.back()}catch{Me=!1}}n()},Y=(e,t=!1)=>{if(!e||e===q)return;t||(history.pushState({view:e},"",window.location.href),e==="view-catalog"?mt=["view-catalog"]:mt.push(e));const n=f(q);if(n){const s=n.querySelector(".scroll-content");s&&(jt[q]=s.scrollTop)}if(q==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime(),q==="view-pos-cashier"&&e!=="view-pos-cashier"&&(typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()),q==="view-admin"&&e!=="view-admin"){const s=f("view-admin");s&&s.classList.remove("admin-pos-mode"),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()}const a=f(e);if(a&&(a.classList.remove("hidden"),a.classList.add("flex")),document.querySelectorAll(".view-section").forEach(s=>{s!==a&&(s.classList.add("hidden"),s.classList.remove("flex"))}),typeof window.hideFloatingScrollTop=="function")window.hideFloatingScrollTop();else{const s=document.getElementById("native-scroll-top-btn");s&&(s.classList.add("opacity-0","translate-y-3"),s.classList.add("hidden"))}if(a){e==="view-cart"&&typeof window.renderCart=="function"?window.renderCart():e==="view-checkout"&&typeof window.rChck=="function"?window.rChck():e==="view-payment"&&typeof window.rPay=="function"?window.rPay():e==="view-wishlist"&&typeof window.renderWish=="function"?window.renderWish():e==="view-orders"&&typeof window.renderMyOrders=="function"?window.renderMyOrders():e==="view-faq"&&typeof window.renderStorefrontFAQ=="function"?window.renderStorefrontFAQ():e==="view-pos-cashier"?Vt(()=>import("./module-pos-B4HQUvB6.js").then(o=>o.h),__vite__mapDeps([2,1])).then(o=>{typeof o.renderPOSStorefront=="function"&&o.renderPOSStorefront()}).catch(o=>console.error("[POS] Gagal memuat storefront:",o)):e==="view-admin"&&typeof window.renderSubscriptionNoticeInCMS=="function"&&window.renderSubscriptionNoticeInCMS();const s=a.querySelector(".scroll-content");if(s)if(t){const o=jt[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{s.scrollTop=o}))}else s.scrollTo(0,0)}q=e,oa(e)},oa=(e=q)=>{const t=f("bottom-nav-bar");if(!t)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin","view-pos-cashier"].includes(e)){t.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.remove("translate-y-0","opacity-100");return}if(t.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(a=>a.classList.remove("active")),e==="view-catalog"){const a=f("bnav-home");a&&a.classList.add("active")}else if(e==="view-orders"){const a=f("bnav-orders");a&&a.classList.add("active")}else if(e==="view-wishlist"||e==="view-faq"){const a=f("bnav-menu");a&&a.classList.add("active")}},Cs=e=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(e==="home"?"medium":"light"),e==="home")if(q==="view-catalog"){const t=document.querySelector("#view-catalog .scroll-content");t?t.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else Y("view-catalog");else e==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():e==="cart"?Y("view-cart"):e==="orders"?Y("view-orders"):e==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},ra=()=>{const e=document.querySelector("#view-catalog .scroll-content"),t=f("pull-to-refresh-indicator"),n=f("ptr-icon"),a=f("ptr-text");if(!e||!t)return;let s=0,o=0,r=!1,l=!1;const d=65;e.addEventListener("touchstart",m=>{e.scrollTop<=5&&!l&&(s=m.touches[0].pageY,r=!0)},{passive:!0}),e.addEventListener("touchmove",m=>{if(!r||l)return;o=m.touches[0].pageY;const b=o-s;if(b>15&&e.scrollTop<=5){t.classList.add("visible");const u=Math.min(b/d,1.5);n&&(n.style.transform=`rotate(${u*240}deg)`),a&&(a.innerText=b>=d?"Lepaskan untuk segarkan":"Tarik ke bawah untuk refresh")}else t.classList.remove("visible")},{passive:!0}),e.addEventListener("touchend",async()=>{if(!r||l)return;if(r=!1,o-s>=d&&e.scrollTop<=5){l=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),n&&(n.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",n.style.transform=""),a&&(a.innerText="Menyinkronkan katalog...");try{typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),a&&(a.innerText="Katalog Terkini Disinkron!"),n&&(n.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch{a&&(a.innerText="Gagal sinkron data")}setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>{l=!1,n&&(n.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",n.style.transform=""),a&&(a.innerText="Tarik ke bawah untuk refresh")},300)},600)}else t.classList.remove("visible"),n&&(n.style.transform="")})},ia=e=>{e==="product"&&typeof window.closeProductModal=="function"?window.closeProductModal(!0):e==="category"&&typeof window.closeCategoryModal=="function"?window.closeCategoryModal(!0):e==="brand"&&typeof window.closeBrandModal=="function"?window.closeBrandModal(!0):e==="admin"&&typeof window.closeAdminModal=="function"?window.closeAdminModal(!0):e==="adminOrder"&&typeof window.closeOrderDetailModal=="function"?window.closeOrderDetailModal(!0):e==="receipt"&&typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):e==="docPreview"&&typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):e==="scanner"&&typeof window.closeCameraScanner=="function"?window.closeCameraScanner(!0):e==="confirm"&&typeof window.closeConfirm=="function"?window.closeConfirm(!0):e==="customerOrder"&&typeof window.closeCustomerOrderDetailModal=="function"?window.closeCustomerOrderDetailModal(!0):e==="restock"&&typeof window.closeRestockModal=="function"?window.closeRestockModal(!0):e==="quickprice"&&typeof window.closeQuickPriceModal=="function"?window.closeQuickPriceModal(!0):e==="member"&&typeof window.closeMemberModal=="function"?window.closeMemberModal(!0):e==="prompt"&&typeof window.closePrompt=="function"?window.closePrompt(!0):e==="review"&&typeof window.closeReviewModal=="function"?window.closeReviewModal(!0):e==="quickmenu"&&typeof window.closeQuickMenuModal=="function"?window.closeQuickMenuModal(!0):e==="variantPreview"&&typeof window.closeVariantPreviewModal=="function"?window.closeVariantPreviewModal(!0):e==="terms"&&typeof window.closeTermsModal=="function"?window.closeTermsModal(!0):e==="privacy"&&typeof window.closePrivacyModal=="function"?window.closePrivacyModal(!0):e==="askQuestion"&&typeof window.closeAskQuestionModal=="function"?window.closeAskQuestionModal(!0):e==="quickVariant"&&typeof window.closeQuickVariantSheet=="function"?window.closeQuickVariantSheet(!0):e==="adminFAQ"&&typeof window.closeAdminFAQModal=="function"?window.closeAdminFAQModal(!0):e==="printerSettings"&&typeof window.closePrinterSettingsModal=="function"?window.closePrinterSettingsModal(!0):e==="exitConfirm"&&typeof window.closeExitConfirmModal=="function"?window.closeExitConfirmModal(!0):e==="appDownload"&&typeof window.closeAppDownloadModal=="function"?window.closeAppDownloadModal(!0):e==="voucher"&&typeof window.closeVoucherModal=="function"?window.closeVoucherModal(!0):e==="guide"&&typeof window.closeShoppingGuideModal=="function"?window.closeShoppingGuideModal(!0):e==="changelog"&&typeof window.closeChangelogModal=="function"?window.closeChangelogModal(!0):e==="guarantee"&&typeof window.closeQualityGuaranteeModal=="function"?window.closeQualityGuaranteeModal(!0):e==="security"&&typeof window.closeSecurityModal=="function"?window.closeSecurityModal(!0):e==="posVariantSheet"&&typeof window.closePOSVariantSheet=="function"?window.closePOSVariantSheet(!0):e==="posLogin"&&typeof window.closePOSLoginModal=="function"?window.closePOSLoginModal(!0):e==="posCartDrawer"&&typeof window.closePOSCartDrawer=="function"?window.closePOSCartDrawer(!0):e==="posPayment"&&typeof window.closePayModal=="function"?window.closePayModal(!0):e==="purchaseForm"&&typeof window.closeCreatePOModal=="function"?window.closeCreatePOModal(!0):e==="purchasePicker"&&typeof window.closePOProductPicker=="function"?window.closePOProductPicker(!0):e==="purchaseDetail"&&typeof window.closePurchaseDetailModal=="function"?window.closePurchaseDetailModal(!0):e==="purchasePayment"&&typeof window.closePurchasePaymentModal=="function"?window.closePurchasePaymentModal(!0):e==="supplierForm"&&typeof window.closeSupplierFormModal=="function"?window.closeSupplierFormModal(!0):e==="supplierDetail"&&typeof window.closeSupplierDetailModal=="function"?window.closeSupplierDetailModal(!0):e==="posHoldPrompt"&&typeof window.closePOSHoldPrompt=="function"?window.closePOSHoldPrompt(!0):e==="posHeldModal"&&typeof window.closePOSHeldModal=="function"?window.closePOSHeldModal(!0):e==="posCameraScanner"&&typeof window.closePOSCameraScanner=="function"?window.closePOSCameraScanner(!0):e==="tempoDetail"&&typeof window.closeTempoDetailModal=="function"?window.closeTempoDetailModal(!0):e==="tempoPayment"&&typeof window.closeTempoPaymentModal=="function"?window.closeTempoPaymentModal(!0):e==="tempoPenalty"&&typeof window.closeTempoPenaltyModal=="function"?window.closeTempoPenaltyModal(!0):e==="expenseForm"&&typeof window.closeExpenseModal=="function"?window.closeExpenseModal(!0):e==="expenseReceipt"&&typeof window.closeExpenseReceiptPreview=="function"&&window.closeExpenseReceiptPreview(!0)},la=()=>{const e=f("exit-confirm-modal");e&&(e.classList.contains("hidden")&&et("exitConfirm"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=f("exit-confirm-modal-box");t&&t.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Pt=(e=!1)=>{tt("exitConfirm",e,()=>{const t=f("exit-confirm-modal"),n=f("exit-confirm-modal-box");t&&t.classList.add("opacity-0"),n&&n.classList.add("scale-95"),setTimeout(()=>{t&&t.classList.add("hidden")},250)})},Ds=()=>{Pt(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri! 🙏"),setTimeout(()=>{try{window.close()}catch{}},400))},Ns=()=>{const e=document.getElementById("pos-receipt-fallback-modal")||document.getElementById("pos-shift-receipt-modal")||document.getElementById("pos-success-modal")||document.getElementById("pos-recall-confirm-modal")||document.getElementById("pos-closed-success-modal");if(e){e.remove();return}if(ge.length>0){try{window.history.back()}catch{const a=ge.pop();ia(a)}return}if(q==="view-admin"){const n=f("admin-content-view"),a=f("admin-dashboard-view");if(!!(n&&!n.classList.contains("hidden")||a&&a.classList.contains("hidden")||window.history.state&&window.history.state.tab||typeof window.cTab<"u"&&window.cTab)){if(window.history.state&&window.history.state.tab&&window.history.length>1)try{window.history.back();return}catch{}typeof window.openAdminMenu=="function"&&window.openAdminMenu();try{window.history.replaceState({view:"view-admin"},"",window.location.href)}catch{}return}if(typeof window.showConfirm=="function"){const o=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=o?"Keluar Panel Owner":"Keluar CMS Toko",l=o?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,l,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}return}if(q==="view-pos-cashier"){typeof window.showConfirm=="function"?window.showConfirm("Keluar Mode Kasir","Yakin keluar dari mode POS kasir?",()=>{typeof window.exitPOSMode=="function"?window.exitPOSMode():Y("view-catalog")},"Ya, Keluar",!0):Y("view-catalog");return}if(q!=="view-catalog"){if(q==="view-payment"){Y("view-checkout");return}if(q==="view-checkout"){Y("view-cart");return}if(q==="view-cart"){Y("view-catalog");return}window.history.length>1?window.history.back():Y("view-catalog");return}const t=f("exit-confirm-modal");t&&!t.classList.contains("hidden")?Pt():la()},Is=()=>{ra();try{(!history.state||!history.state.view)&&history.replaceState({view:"view-catalog"},"",window.location.href)}catch{}window.addEventListener("popstate",e=>{if(Me){Me=!1,Be&&clearTimeout(Be);return}if(ge.length>0){const s=ge.pop();ia(s);return}const t=e.state||{},n=t.view||null;if(window.isAdm||window.__localIsAdm)if(n==="view-admin")Y("view-admin",!0),t.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(t.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu();else{const s=f("admin-content-view");if(s&&!s.classList.contains("hidden")){history.pushState({view:"view-admin"},"",window.location.href),Y("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}if(history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"){const o=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=o?"Keluar Panel Owner":"Keluar CMS Toko",l=o?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,l,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}}else if(n){let s=n;n==="view-admin"&&(s="view-admin-login"),Y(s,!0)}else Y("view-catalog",!0)})};window.pushModalHistory=et;window.requestCloseModal=tt;window.changeView=Y;window.setupHistoryRouter=Is;window.onBottomNavClick=Cs;window.updateBottomNav=oa;window.initPullToRefresh=ra;window.handleAppBackButton=Ns;window.openExitConfirmModal=la;window.closeExitConfirmModal=Pt;window.confirmExitApp=Ds;window.isProgrammaticModalClose=Me;window.viewHistoryStack=mt;try{Object.defineProperty(window,"curViewName",{get:()=>q,set:e=>{q=e},configurable:!0})}catch{}let ut=null,Ae=null;const Rs=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}Q("Kode "+e+" berhasil disalin!")}catch{Q("Gagal menyalin. Kode: "+e)}},Q=(e,t,n,a)=>{const s=f("toast");if(!s)return;if(!t){const p=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(p)?t="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(p)?t="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(p)?t="warning":/upload|proses|memuat|loading|sedang/.test(p)?t="loading":t="info"}typeof window.triggerHaptic=="function"&&window.triggerHaptic(t==="error"?"error":t==="warning"?"warning":t==="success"?"success":"light");const o=getComputedStyle(document.documentElement),r=o.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",l=o.getPropertyValue("--color-primary").trim()||"#10b981";o.getPropertyValue("--color-primary-dark").trim();const d={success:{icon:"fa-circle-check",label:"Berhasil",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`}},m=d[t]||d.info,b=f("toast-icon");b&&(b.className="fa-solid "+m.icon);const u=f("toast-title");u&&(u.textContent=n||m.label,u.style.display="block",u.style.color=m.accent);const h=f("toast-icon-wrap");h&&(h.style.background=m.iconBg,h.style.color=m.accent),se("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let y=f("toast-progress");y||(y=document.createElement("div"),y.id="toast-progress",s.appendChild(y)),y.style.background=m.accent,y.style.transition="none",y.style.width="100%",y.style.opacity="0.85",clearTimeout(ut),s.classList.add("toast-show");const w=a||(t==="loading"?8e3:t==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{y.style.transition=`width ${w}ms linear`,y.style.width="0%"})),ut=setTimeout(()=>{s.classList.remove("toast-show")},w)},Os=e=>Q(e,"loading","Memproses...",8e3),Es=()=>{clearTimeout(ut);const e=f("toast");e&&e.classList.remove("toast-show")},Bs=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")};let we=null;const Hs=(e,t,n,a="Ya, Hapus",s=!0)=>{let o=e,r=t,l=n,d=a,m=s;typeof t=="function"&&(l=t,r=e,o=typeof a=="string"&&a!=="Ya, Hapus"?a:"Konfirmasi Tindakan",d=typeof n=="string"?n:"Ya, Lanjutkan",m=!0);let b=null;typeof l!="function"?(b=new Promise(w=>{we=w}),Ae=null):(Ae=l,we=null),se("confirm-title",o);const u=f("confirm-msg");if(u)if(typeof r=="string"){const w=typeof window.DOMPurify<"u"?window.DOMPurify.sanitize(r,{ADD_ATTR:["class","style"]}):r;u.innerHTML=w}else u.textContent=r||"";const h=f("confirm-yes-btn");h&&(h.innerText=d,m?(h.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 active:scale-95 transition-all text-xs sm:text-sm shadow-md shadow-rose-500/30 cursor-pointer",f("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",f("confirm-icon").className="fa-solid fa-triangle-exclamation"):(h.className="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-2xl hover:opacity-90 active:scale-95 transition-all text-xs sm:text-sm shadow-sm cursor-pointer",f("confirm-icon-box").className="w-16 h-16 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-[var(--color-primary)]/20",f("confirm-icon").className="fa-solid fa-copy"));const y=f("custom-confirm-modal");return y&&y.classList.contains("hidden")&&et("confirm"),Zt("custom-confirm-modal"),setTimeout(()=>{f("custom-confirm-modal").classList.remove("opacity-0"),f("custom-confirm-box").classList.remove("scale-95")},10),b},ft=(e=!1)=>{if(we){const t=we;we=null,t(!1)}tt("confirm",e,()=>{f("custom-confirm-modal").classList.add("opacity-0"),f("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>Xt("custom-confirm-modal"),300)})},Fs=()=>{if(we){const e=we;we=null,Ae=null,ft(),setTimeout(()=>{e(!0)},150);return}if(Ae){const e=Ae;Ae=null,ft(),setTimeout(()=>{e()},150)}},Us=(e,t="",n=null)=>{let a=null,s=null;typeof n!="function"&&(s=new Promise(h=>{a=h}));const o=t!=null?String(t):"",r=o.length>50||o.includes(`
`)||/balasan|catatan|alasan|deskripsi|pesan|keterangan/i.test(e),l=o.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),d=r?`<textarea id="prompt-input" rows="3" class="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 custom-scrollbar resize-none leading-relaxed" placeholder="Tuliskan di sini...">${l}</textarea>`:`<input type="text" id="prompt-input" value="${l}" class="w-full px-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-bold focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 text-center" autocomplete="off" />`;let m=document.createElement("div");m.id="custom-prompt-container",m.className="fixed inset-0 z-[10005] bg-slate-900/85 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300",m.onclick=h=>{h.target===m&&window.closePrompt()},m.innerHTML=`
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
    `,document.body.appendChild(m);const b=m.querySelector("div");et("prompt"),setTimeout(()=>{m.classList.remove("opacity-0"),b.classList.remove("scale-95")},10);const u=m.querySelector("#prompt-input");return u&&(u.focus(),u.select(),u.onkeydown=h=>{h.key==="Enter"&&(!r||h.ctrlKey)?(h.preventDefault(),m.querySelector("#prompt-ok")?.click()):h.key==="Escape"&&(h.preventDefault(),window.closePrompt())}),window.closePrompt=(h=!1)=>{if(!(!m||!m.parentNode)){if(a){const y=a;a=null,y(null)}tt("prompt",h,()=>{m.classList.add("opacity-0"),b.classList.add("scale-95"),setTimeout(()=>m.remove(),300),window.closePrompt=null})}},m.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),m.querySelector("#prompt-ok").onclick=()=>{let h=u.value;if(a){const y=a;a=null,window.closePrompt(),y(h)}else window.closePrompt(),typeof n=="function"&&n(h)},s},Ks=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=Rs;window.showToast=Q;window.showToastLoading=Os;window.hideToast=Es;window.toggleTheme=Bs;window.showConfirm=Hs;window.closeConfirm=ft;window.executeConfirm=Fs;window.customPrompt=Us;window.checkProPrint=Ks;const Ue="utp-thermal-modal",Ye="utp-html-modal";let X=null,Tt=null,He=null,Fe=null;const Qe=()=>{if(document.getElementById("utp-style"))return;const e=document.createElement("style");e.id="utp-style",e.textContent=`
        @keyframes utpSheetIn { from { transform: translateY(28px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .utp-sheet { animation: utpSheetIn .2s cubic-bezier(.2,.8,.2,1); }
        .utp-canvas {
            background-color: #e9edf2;
            background-image: radial-gradient(rgba(15,23,42,.07) 1px, transparent 1px);
            background-size: 14px 14px;
        }
        .dark .utp-canvas { background-color: #060b16; background-image: radial-gradient(rgba(148,163,184,.08) 1px, transparent 1px); }
        .utp-paper {
            position: relative; background: #fff; color: #0b0b0b;
            font-family: 'Courier New', Courier, ui-monospace, monospace;
            font-size: 12px; line-height: 1.32; padding: 16px 12px 18px;
            box-shadow: 0 1px 2px rgba(15,23,42,.08), 0 14px 32px -12px rgba(15,23,42,.35);
            margin-bottom: 14px; box-sizing: content-box;
        }
        .utp-paper::after {
            content: ""; position: absolute; left: 0; right: 0; bottom: -10px; height: 10px;
            background:
                linear-gradient(45deg, transparent 33.33%, #fff 33.33%, #fff 66.66%, transparent 66.66%),
                linear-gradient(-45deg, transparent 33.33%, #fff 33.33%, #fff 66.66%, transparent 66.66%);
            background-size: 14px 28px; background-position: 0 -14px;
        }
        .utp-line { white-space: pre; overflow: hidden; min-height: 1.32em; }
        .utp-line.utp-title { font-size: 2em; line-height: 1.12; }
        .utp-line.utp-tall { height: 2.64em; }
        .utp-line.utp-tall > span { display: block; transform: scaleY(2); transform-origin: top center; }
        .utp-chip {
            display: inline-flex; align-items: center; gap: 5px; white-space: nowrap;
            padding: 4px 9px; border-radius: 999px; font-size: 10.5px; font-weight: 700;
        }
        .utp-seg-btn { transition: all .15s ease; }
        .utp-seg-btn.is-active {
            background: var(--color-primary, #c59b27); color: #fff;
            box-shadow: 0 2px 8px rgba(var(--color-primary-rgb, 197,155,39), .35);
        }
        .utp-btn-primary {
            background: linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);
            box-shadow: 0 6px 16px -4px rgba(var(--color-primary-rgb,197,155,39), .5);
        }
        .utp-html-frame { width: 100%; border: 0; background: #fff; border-radius: 6px; box-shadow: 0 14px 32px -12px rgba(15,23,42,.35); }
    `,document.head.appendChild(e)},da=()=>{Fe===null&&(Fe=document.body.style.overflow||"",document.body.style.overflow="hidden")},St=()=>{Fe!==null&&!document.getElementById(Ue)&&!document.getElementById(Ye)&&(document.body.style.overflow=Fe,Fe=null)},ca=(e,t)=>{at(),He=n=>{const a=n.target&&n.target.tagName||"";n.key==="Escape"?(n.preventDefault(),t()):n.key==="Enter"&&!/INPUT|TEXTAREA|SELECT/.test(a)&&(n.preventDefault(),e())},document.addEventListener("keydown",He,!0)},at=()=>{He&&document.removeEventListener("keydown",He,!0),He=null},js=e=>{const t=e.deviceType||"rawbt",n=/android/i.test(navigator.userAgent||"");return t==="rawbt"?n||window.AndroidNativeApp?"RawBT Android":"Printer Browser":t==="bluetooth"?"Bluetooth":t==="usb"?"USB OTG":t==="network"?"WiFi / LAN":"Printer Sistem"},_s=e=>{let t=Array.isArray(e.previewLines)&&e.previewLines.length?e.previewLines:null;if(!t&&e.html&&/<[a-z][\s\S]*>/i.test(e.html))return`<div style="white-space:normal;">${e.html}</div>`;t||(t=String(e.plainText||"").split(`
`).map(a=>({t:a,a:"left",b:!1,s:"normal"})));const n=[...t];for(;n.length>1&&!String(n[n.length-1].t||"").trim();)n.pop();return n.map(a=>{const s=i(String(a.t??""))||"&nbsp;",o=a.a==="center"?"center":a.a==="right"?"right":"left",r=a.b?800:400;return a.s==="title"||a.s==="wide"?`<div class="utp-line utp-title" style="text-align:${o};font-weight:${r}">${s}</div>`:a.s==="tall"||a.s==="total"?`<div class="utp-line utp-tall" style="text-align:${o};font-weight:${r}"><span>${s}</span></div>`:`<div class="utp-line" style="text-align:${o};font-weight:${r}">${s}</div>`}).join("")},pa=()=>{const e=X;if(!e)return;const t=H(),n=de(t.paperSize),a=n>=40,s=Array.isArray(e.previewLines)?e.previewLines.length:String(e.plainText||"").split(`
`).length,o=typeof e.rebuild=="function"?`
        <div class="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70" role="group" aria-label="Ukuran kertas">
            <button type="button" id="utp-paper-58" onclick="window.setThermalPreviewPaper('58mm')" class="utp-seg-btn ${a?"text-slate-600 dark:text-slate-300":"is-active"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">58mm</button>
            <button type="button" id="utp-paper-80" onclick="window.setThermalPreviewPaper('80mm')" class="utp-seg-btn ${a?"is-active":"text-slate-600 dark:text-slate-300"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">80mm</button>
        </div>`:"",r=`
    <div id="${Ue}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-thermal-title" onclick="if(event.target===this) window.closeThermalPrintPreview()">
        <div class="utp-sheet bg-white dark:bg-slate-900 w-full ${a?"sm:max-w-[500px]":"sm:max-w-[440px]"} rounded-t-[2rem] sm:rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col max-h-[94dvh] overflow-hidden">
            <div class="sm:hidden flex justify-center pt-2.5"><span class="w-10 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span></div>

            <div class="px-4 sm:px-5 pt-3 sm:pt-4 pb-3 flex items-start gap-3 border-b border-slate-100 dark:border-slate-800">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-white shrink-0 utp-btn-primary"><i class="fa-solid fa-eye"></i></div>
                <div class="flex-1 min-w-0">
                    <h2 id="utp-thermal-title" class="font-black text-[15px] text-slate-900 dark:text-white leading-tight">Preview Sebelum Cetak</h2>
                    <p class="text-[11.5px] text-slate-500 dark:text-slate-400 truncate mt-0.5">${i(e.title||"Struk Thermal")}</p>
                </div>
                <button type="button" id="utp-thermal-close" onclick="window.closeThermalPrintPreview()" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center cursor-pointer transition-colors shrink-0" aria-label="Tutup preview"><i class="fa-solid fa-xmark"></i></button>
            </div>

            <div class="px-4 sm:px-5 py-2.5 flex items-center justify-between gap-2 flex-wrap border-b border-slate-100 dark:border-slate-800">
                <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-scroll text-[var(--color-primary)]"></i>${a?"80mm":"58mm"} · ${n} kolom</span>
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-print text-slate-400"></i>${i(js(t))}</span>
                    <span class="utp-chip bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-check"></i>${s} baris</span>
                </div>
                ${o}
            </div>

            <div class="utp-canvas flex-1 overflow-auto px-3 py-5 sm:px-5 custom-scrollbar">
                <div class="utp-paper mx-auto" style="width:${n}ch;">
                    ${_s(e)}
                </div>
            </div>

            <div class="px-4 sm:px-5 pt-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900" style="padding-bottom:max(14px, env(safe-area-inset-bottom));">
                <p class="text-[11px] text-slate-500 dark:text-slate-400 mb-2.5 flex items-start gap-1.5"><i class="fa-solid fa-circle-info text-[var(--color-primary)] mt-0.5"></i><span>Periksa kembali isi struk di atas. Tekan <b class="text-slate-700 dark:text-slate-200">Cetak Sekarang</b> untuk mengirim ke printer.</span></p>
                <div class="flex gap-2">
                    <button type="button" id="utp-thermal-cancel" onclick="window.closeThermalPrintPreview()" class="px-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold text-xs cursor-pointer active:scale-95 transition-all">Batal</button>
                    <button type="button" id="utp-thermal-settings" onclick="window.openPrinterSettingsFromPreview()" class="w-12 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center cursor-pointer active:scale-95 transition-all" title="Pengaturan Printer" aria-label="Pengaturan Printer"><i class="fa-solid fa-gear"></i></button>
                    <button type="button" id="utp-thermal-confirm" onclick="window.confirmThermalPrint()" class="utp-btn-primary flex-1 py-3.5 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all hover:brightness-105"><i class="fa-solid fa-print"></i> Cetak Sekarang</button>
                </div>
            </div>
        </div>
    </div>`;document.getElementById(Ue)?.remove(),document.body.insertAdjacentHTML("beforeend",r),setTimeout(()=>document.getElementById("utp-thermal-confirm")?.focus({preventScroll:!0}),60)},ma=e=>!e||typeof e.dispatch!="function"?!1:(Qe(),X={...e},pa(),da(),ca(()=>ua(),()=>At()),!0),At=()=>{const e=X;if(document.getElementById(Ue)?.remove(),X=null,at(),St(),e&&typeof e.onCancel=="function")try{e.onCancel()}catch{}},ua=()=>{const e=X;if(e){if(X=null,document.getElementById(Ue)?.remove(),at(),St(),typeof e.onConfirm=="function")try{e.onConfirm()}catch(t){console.warn("[PrintPreview] onConfirm error:",t)}e.dispatch(e.base64,e.plainText,e.html||"")}},zs=e=>{if(!(!X||typeof X.rebuild!="function")){Ke({paperSize:e});try{const t=X.rebuild();t&&(X.base64=t.base64,X.plainText=t.plainText,X.previewLines=t.previewLines)}catch(t){console.warn("[PrintPreview] Gagal rebuild payload:",t)}pa(),Q(`Ukuran kertas diubah ke ${e} ✅`)}},qs=()=>{At(),typeof window.openPrinterSettingsModal=="function"&&(window.openPrinterSettingsModal(),Q("Atur printer, lalu tekan Cetak lagi untuk melihat preview terbaru."))},Ws=(e={})=>{if(!e.html)return!1;Qe(),Tt={...e};const t=(e.paper||"a4")==="a4";document.getElementById(Ye)?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="${Ye}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-html-title" onclick="if(event.target===this) window.closeHtmlPrintPreview()">
        <div class="utp-sheet bg-white dark:bg-slate-900 w-full ${t?"sm:max-w-[880px]":"sm:max-w-[680px]"} rounded-t-[2rem] sm:rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col h-[94dvh] sm:h-[90dvh] overflow-hidden">
            <div class="sm:hidden flex justify-center pt-2.5"><span class="w-10 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span></div>
            <div class="px-4 sm:px-5 pt-3 sm:pt-4 pb-3 flex items-start gap-3 border-b border-slate-100 dark:border-slate-800">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-white shrink-0 utp-btn-primary"><i class="fa-solid fa-file-lines"></i></div>
                <div class="flex-1 min-w-0">
                    <h2 id="utp-html-title" class="font-black text-[15px] text-slate-900 dark:text-white leading-tight">Preview Dokumen Sebelum Cetak</h2>
                    <p class="text-[11.5px] text-slate-500 dark:text-slate-400 truncate mt-0.5">${i(e.title||"Dokumen")}</p>
                </div>
                <button type="button" id="utp-html-close" onclick="window.closeHtmlPrintPreview()" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center cursor-pointer transition-colors shrink-0" aria-label="Tutup preview"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="utp-canvas flex-1 overflow-hidden p-3 sm:p-5 flex">
                <iframe id="utp-html-frame" class="utp-html-frame flex-1 h-full" title="Preview dokumen"></iframe>
            </div>
            <div class="px-4 sm:px-5 pt-3 border-t border-slate-100 dark:border-slate-800" style="padding-bottom:max(14px, env(safe-area-inset-bottom));">
                <p class="text-[11px] text-slate-500 dark:text-slate-400 mb-2.5 flex items-start gap-1.5"><i class="fa-solid fa-circle-info text-[var(--color-primary)] mt-0.5"></i><span>Pastikan isi dokumen sudah benar sebelum dicetak.</span></p>
                <div class="flex gap-2">
                    <button type="button" id="utp-html-cancel" onclick="window.closeHtmlPrintPreview()" class="px-5 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold text-xs cursor-pointer active:scale-95 transition-all">Batal</button>
                    <button type="button" id="utp-html-confirm" onclick="window.confirmHtmlPrint()" class="utp-btn-primary flex-1 py-3.5 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all hover:brightness-105"><i class="fa-solid fa-print"></i> Cetak Sekarang</button>
                </div>
            </div>
        </div>
    </div>`);const n=document.getElementById("utp-html-frame");if(n){const a=n.contentWindow.document;a.open(),a.write(e.html),a.close()}return da(),ca(()=>fa(),()=>$t()),!0},$t=()=>{document.getElementById(Ye)?.remove(),Tt=null,at(),St()},fa=()=>{const e=document.getElementById("utp-html-frame");if(!(!e||!Tt)){if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){try{const t=e.contentWindow.document,n=Array.from(t.querySelectorAll("style")).map(s=>s.outerHTML).join("");let a=document.getElementById("a4-print-section");a||(a=document.createElement("div"),a.id="a4-print-section",document.body.appendChild(a)),a.innerHTML=n+t.body.innerHTML,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500)}catch(t){console.warn("[PrintPreview] Native print error:",t)}$t();return}try{e.contentWindow.focus(),e.contentWindow.print()}catch(t){console.warn("[PrintPreview] iframe print error:",t),Q("Gagal membuka dialog cetak. Coba lagi.","error")}}};typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Qe,{once:!0}):Qe());window.openThermalPrintPreview=ma;window.closeThermalPrintPreview=At;window.confirmThermalPrint=ua;window.setThermalPreviewPaper=zs;window.openPrinterSettingsFromPreview=qs;window.openHtmlPrintPreview=Ws;window.closeHtmlPrintPreview=$t;window.confirmHtmlPrint=fa;const M=e=>"Rp "+Math.round(Number(e||0)).toLocaleString("id-ID"),lt=e=>Math.round(Number(e||0)).toLocaleString("id-ID"),Vs=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(2).replace(/\.?0+$/,"")},K=e=>e?String(e).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"").replace(/[\r\t]/g," ").replace(/[^\x20-\x7E\n]/g," "):"",j=(e,t)=>{if(!e)return[];const n=K(e).replace(/ +/g," ").trim();if(!n)return[];if(n.length<=t)return[n];const a=n.split(" "),s=[];let o="";for(const r of a)if(r)if(r.length>t){o&&(s.push(o),o="");for(let l=0;l<r.length;l+=t){const d=r.substring(l,l+t);d.length===t?s.push(d):o=d}}else(o?o.length+1+r.length:r.length)<=t?o=o?o+" "+r:r:(s.push(o),o=r);return o&&s.push(o),s},le=(e,t=!1)=>{const n=e?new Date(e):new Date,a=String(n.getDate()).padStart(2,"0"),s=String(n.getMonth()+1).padStart(2,"0"),o=t?n.getFullYear():String(n.getFullYear()).slice(-2),r=String(n.getHours()).padStart(2,"0"),l=String(n.getMinutes()).padStart(2,"0");return`${a}/${s}/${o} ${r}:${l}`},ba=(e,t,n,a=!1)=>{const s=K(String(e||"")).trimEnd(),o=K(String(t||"")).trim(),r=n-s.length-o.length;if(r>=0)return[s+" ".repeat(r)+o];if(a){const m=Math.max(0,n-o.length-1),b=s.substring(0,m).trimEnd(),u=Math.max(1,n-b.length-o.length);return[b+" ".repeat(u)+o]}const l=j(s,n),d=l[l.length-1]||"";if(d.length+1+o.length<=n){const m=n-d.length-o.length;return l[l.length-1]=d+" ".repeat(m)+o,l}else{const m=Math.max(0,n-o.length);return[...l," ".repeat(m)+o]}};class Ce{constructor(t=32){this.cols=Number(t)||32,this.bytes=[],this.plainLines=[],this.previewLines=[],this._bold=!1,this._size="normal"}init(){return this.bytes.push(27,64),this}align(t="left"){const n=t==="center"?1:t==="right"?2:0;return this.bytes.push(27,97,n),this}bold(t=!0){return this.bytes.push(27,69,t?1:0),this._bold=!!t,this}size(t="normal"){return this._size=t||"normal",t==="title"?this.bytes.push(29,33,17):t==="tall"||t==="total"?this.bytes.push(29,33,1):t==="wide"?this.bytes.push(29,33,16):this.bytes.push(29,33,0),this}text(t){if(!t)return this;const n=K(t);for(let a=0;a<n.length;a++)this.bytes.push(n.charCodeAt(a));return this}line(t="",n="left"){return this.align(n),this.text(t),this.bytes.push(10),this.plainLines.push(t),this.previewLines.push({t:K(t),a:n,b:this._bold,s:this._size}),this}centered(t=""){return j(t,this.cols).forEach(a=>this.line(a,"center")),this}twoColumn(t="",n="",a=!1,s=!1){return a&&this.bold(!0),ba(t,n,this.cols,s).forEach(r=>this.line(r,"left")),a&&this.bold(!1),this}itemRow(t){const n=t.variantName?` (${t.variantName}${t.colorCode?" "+t.colorCode:""})`:"",a=(t.name||"Barang")+n+(t.poTime?" [PO]":"");this.bold(!0),j(a,this.cols).forEach(m=>this.line(m,"left")),this.bold(!1);const o=t.effectivePrice||t.price||0,r=t.subtotal!==void 0?t.subtotal:parseFloat(t.qty||1)*o,l=`  ${Vs(t.qty)} ${t.unit||"pcs"} x ${lt(o)}`,d=lt(r);return this.twoColumn(l,d,!1,!1),t.discount&&t.discount>0&&this.twoColumn("  (Pot. Diskon)",`-${lt(t.discount)}`,!1,!0),t.poTime&&this.line(`  * Estimasi PO: ${t.poTime}`,"left"),this}separator(t="-"){const n=t.repeat(this.cols);return this.line(n,"left"),this}doubleSeparator(){return this.separator("=")}feed(t=3){this.bytes.push(27,100,Math.max(1,t));for(let n=0;n<t;n++)this.plainLines.push(""),this.previewLines.push({t:"",a:"left",b:!1,s:"normal"});return this}cut(){return this.bytes.push(29,86,65,3),this}openDrawer(){return this.bytes.push(27,112,0,25,250),this}toBase64(){const t=new Uint8Array(this.bytes);let n="";const a=t.length,s=8192;for(let o=0;o<a;o+=s){const r=t.subarray(o,o+s);n+=String.fromCharCode.apply(null,r)}return btoa(n)}toPlainText(){return this.plainLines.join(`
`)}}const De=(e,t="",n="",a={})=>{if(!a.skipPreview)return ma({base64:e,plainText:t,html:n,previewLines:a.previewLines,title:a.title,rebuild:a.rebuild,onConfirm:a.onConfirm,onCancel:a.onCancel,dispatch:(s,o,r)=>_t(s,o,r)});if(typeof a.onConfirm=="function")try{a.onConfirm()}catch{}return _t(e,t,n)},_t=(e,t="",n="")=>{const a=/android/i.test(navigator.userAgent||"");if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function")try{return window.AndroidNativeApp.printRawBT(e),Q("Mencetak struk via RawBT... 🖨️"),!0}catch(s){console.warn("[RawBT] AndroidNativeApp error, mencoba intent...",s)}if(a)try{Q("Membuka Printer RawBT... 🖨️");const s=`intent:base64,${e}#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;end;`;return window.location.href=s,setTimeout(()=>{if(!document.hidden)try{window.location.href=`rawbt:base64,${e}`}catch{}},800),!0}catch(s){console.warn("[RawBT] Intent trigger failed:",s)}return Q("Mencetak struk kasir... 🖨️"),Mt(n||t),!0},Mt=e=>{const t=H(),a=de(t.paperSize)>=40,s=a?"80mm":"58mm";let o=f("thermal-print-section");o||(o=document.createElement("div"),o.id="thermal-print-section",document.body.appendChild(o)),o.className=a?"paper-80mm":"paper-58mm",document.body.classList.remove("paper-58mm","paper-80mm"),document.body.classList.add(a?"paper-80mm":"paper-58mm");let r=document.getElementById("dynamic-print-page-style");r||(r=document.createElement("style"),r.id="dynamic-print-page-style",document.head.appendChild(r)),r.innerHTML=`@media print { @page { margin: 0; size: ${s} auto; } html, body { width: ${s} !important; } }`;const d=typeof e=="string"&&e.includes("<")&&e.includes(">")?e:`<pre style="font-family:'Courier New',Courier,monospace;font-size:11px;margin:0;line-height:1.25;white-space:pre-wrap;word-break:break-word;">${i(e)}</pre>`;o.innerHTML=`
        <div style="width:100%;font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.25;color:#000;background:#fff;padding:0;">
            ${d}
        </div>
    `,setTimeout(()=>{window.print()},100)},Gs=()=>{if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.openRawBT=="function"){window.AndroidNativeApp.openRawBT();return}/android/i.test(navigator.userAgent||"")?(window.location.href="intent:#Intent;package=ru.a402d.rawbtprinter;end;",setTimeout(()=>{document.hidden||(window.location.href="https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter")},1200)):window.open("https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter","_blank")},bt=(e,t=null)=>{const n=t||H(),a=de(n.paperSize),s=a>=40,o=new Ce(a);o.init(),n.openCashDrawer&&e.payment?.method==="cash"&&o.openDrawer();const r=K(n.headerText||c.store?.name||"TOKO PUTRI").trim(),l=K(c.store?.address||"").trim(),d=K(c.store?.wa||"").trim(),m=Math.floor(a/2);r.length<=m?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),j(r.toUpperCase(),a).forEach(S=>o.line(S,"center")),o.size("normal").bold(!1)),l&&j(l,a).forEach(S=>o.line(S,"center")),d&&o.line(`WA: ${d}`,"center");const b=e.payment?.taxNpwp||c.store?.taxNpwp;b&&o.line(`NPWP: ${b}`,"center"),o.separator("-");const u=le(e.dateMs||Date.now(),s),h=`#${e.txId}`;o.twoColumn(`No : ${h}`,u,!1,!0);const y=(e.cashierName||"Kasir").substring(0,s?16:9),w=(e.customer?.name||"Umum").substring(0,s?18:11);if(o.twoColumn(`Ksr: ${y}`,`Plg: ${w}`,!1,!0),e.customer?.phone&&o.line(`HP : ${e.customer.phone}`,"left"),o.separator("-"),(e.items||[]).forEach(S=>{o.itemRow(S)}),o.separator("-"),o.twoColumn("Subtotal",M(e.subtotal)),(e.globalDiscount||0)>0){const S=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";o.twoColumn(S,`- ${M(e.globalDiscount)}`)}if((e.pointDiscount||0)>0&&o.twoColumn(`Diskon Poin (${e.pointsRedeemed||0} Poin)`,`- ${M(e.pointDiscount)}`),e.claimedReward&&e.claimedReward.name&&(o.separator("-"),o.bold(!0).line(`[KLAIM HADIAH: ${K(e.claimedReward.name)}]`,"left").bold(!1),o.twoColumn("Poin Reward Ditukar",`-${e.claimedReward.pointsCost||0} Poin`)),(e.payment?.ppnEnabled||e.payment?.ppnShowZero||e.payment?.ppnRate===0||e.payment?.ppnAmount&&e.payment.ppnAmount>0)&&(c.store?.ppnEnabled||e.payment?.ppnEnabled)){const S=e.payment?.ppnType==="inclusive",g=e.payment?.ppnRate!==void 0?e.payment.ppnRate:c.store?.ppnRate||0,v=e.payment?.ppnAmount||0,$=e.payment?.ppnLabel||`${S?"Inc. PPN":"PPN"} (${g}%)`,k=v>0?`${S?"":"+ "}${M(v)}`:"Rp 0";o.twoColumn($,k)}o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL",M(e.total)).size("normal").bold(!1),o.doubleSeparator();const C=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",I=C?"PUTRI PAYLATER":(e.payment?.method||"CASH").toUpperCase();if(o.twoColumn("Metode Bayar",I),e.payment?.method==="cash")o.twoColumn("Bayar Tunai",M(e.payment.paid)),o.bold(!0).twoColumn("Kembalian",M(e.payment.change)).bold(!1);else if(e.payment?.method==="tempo"){if(C){if(o.twoColumn("Limit Terpakai",M(e.payment?.paylaterUsed||e.paylaterUsed||e.total-(e.payment?.tempoDp??0))),e.payment?.paylaterMonths){const S=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${S} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${M(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${M(e.payment.paylaterServiceFee)}`)}if(o.twoColumn("Uang Muka (DP)",M(e.payment?.tempoDp??e.payment?.dp??0)),o.bold(!0).twoColumn(C?"Tagihan PayLater":"Sisa Piutang",M(e.payment.tempoBalance||0)).bold(!1),C&&e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${M(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),e.payment.tempoDueDate){const S=typeof e.payment.tempoDueDate=="number"?new Date(e.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e.payment.tempoDueDate;o.line(`Jatuh Tempo: ${S}`,"left")}}n.showPoints&&(e.pointsEarned>0||(e.pointsRedeemed||0)>0)&&(o.separator("-"),e.pointsEarned>0&&o.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),(e.pointsRedeemed||0)>0&&o.twoColumn("Poin Ditukar",`-${e.pointsRedeemed} Poin`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&o.twoColumn("Sisa Saldo Poin",`${e.finalMemberPoints} Poin`)),n.showBarcode&&(o.separator("-"),o.align("center"),o.line(`*POS-${e.txId}*`,"center"),o.line("(SCAN DI KASIR)","center")),o.separator("-");const D=n.footerText||"Terima Kasih Atas Kunjungan Anda!";return j(D,a).forEach(S=>o.line(S,"center")),o.feed(n.feedLines||3),n.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines}},wt=(e,t=!1,n=null)=>{const a=n||H(),s=de(a.paperSize),o=s>=40,r=new Ce(s);r.init();const l=K(a.headerText||c.store?.name||"TOKO PUTRI").trim(),d=K(c.store?.address||"").trim(),m=K(c.store?.wa||"").trim(),b=Math.floor(s/2);l.length<=b?(r.align("center").bold(!0).size("title").line(l.toUpperCase(),"center"),r.size("normal").bold(!1)):(r.align("center").bold(!0).size("tall"),j(l.toUpperCase(),s).forEach($=>r.line($,"center")),r.size("normal").bold(!1)),d&&j(d,s).forEach($=>r.line($,"center")),m&&r.line(`WA: ${m}`,"center"),r.separator("-");const u=o?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **";r.bold(!0).line(u,"center").bold(!1),r.separator("-");const h=le(e.startTime,o),y=le(e.endTime||Date.now(),o);r.twoColumn("Shift ID",`#${e.shiftNo||e.id||"-"}`,!1,!0),r.twoColumn("Kasir",(e.cashierName||"Kasir").substring(0,o?20:12),!1,!0),r.twoColumn("Mulai",h,!1,!0),r.twoColumn("Selesai",y,!1,!0),r.separator("-");const w=parseFloat(e.startingCash)||0,p=parseFloat(e.cashSales)||0,C=parseFloat(e.qrisSales)||0,I=parseFloat(e.bankSales||e.transferSales)||0,D=parseFloat(e.tempoSales)||0,S=parseFloat(e.totalSales)||p+C+I+D,g=e.txCount||0;if(r.bold(!0).line("RINGKASAN PENJUALAN","left").bold(!1),r.twoColumn("Modal Awal Laci",M(w)),r.twoColumn("Penjualan Tunai",M(p)),C>0&&r.twoColumn("Penjualan QRIS",M(C)),I>0&&r.twoColumn("Penjualan Transfer",M(I)),D>0&&r.twoColumn("Penjualan Tempo",M(D)),r.separator("-"),r.twoColumn("Total Transaksi",`${g} Trx`),r.bold(!0).size("tall").twoColumn("TOTAL OMSET",M(S)).size("normal").bold(!1),r.doubleSeparator(),!t){const $=w+p,k=e.actualCash!==void 0?parseFloat(e.actualCash):$,N=k-$,O=N===0?"PAS (0)":N>0?`+${M(N)}`:`-${M(Math.abs(N))}`;r.bold(!0).line("REKONSILIASI KAS FISIK","left").bold(!1),r.twoColumn("Kas Diharapkan",M($)),r.twoColumn("Kas Fisik Aktual",M(k)),r.bold(!0).twoColumn("Selisih Kas",O,!0).bold(!1),e.closingNotes&&j(`Catatan: ${e.closingNotes}`,s).forEach(W=>r.line(W,"left")),r.separator("-"),r.line("Verifikasi & Tanda Tangan:","left"),r.feed(2);const L=Math.floor(s/2),A="( Kasir )",P=o?"( Supervisor/Owner )":"( Supervisor )",x=Math.max(0,Math.floor((L-A.length)/2)),R=Math.max(0,Math.floor((L-P.length)/2)),_=" ".repeat(x)+A+" ".repeat(Math.max(1,L-x-A.length))+" ".repeat(R)+P;r.line(_,"left"),r.separator("-")}const v=a.footerText||"Laporan Kasir Resmi Toko Putri";return j(v,s).forEach($=>r.line($,"center")),r.feed(a.feedLines||3),a.autoCut&&r.cut(),{base64:r.toBase64(),plainText:r.toPlainText(),previewLines:r.previewLines}},gt=(e,t=null)=>{const n=t||H(),a=de(n.paperSize),s=a>=40,o=new Ce(a);o.init();const r=K(n.headerText||c.store?.name||"TOKO PUTRI").trim(),l=K(c.store?.address||"").trim(),d=K(c.store?.wa||"").trim(),m=Math.floor(a/2);r.length<=m?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),j(r.toUpperCase(),a).forEach(v=>o.line(v,"center")),o.size("normal").bold(!1)),l&&j(l,a).forEach(v=>o.line(v,"center")),d&&o.line(`WA: ${d}`,"center");const b=e.payment?.taxNpwp||c.store?.taxNpwp;b&&o.line(`NPWP: ${b}`,"center"),o.separator("-");const u=le(e.dateString||e.dateMs||Date.now(),s);o.twoColumn(`Order: #${e.orderId}`,u,!1,!0);const h=(e.customer?.name||"Guest").substring(0,s?18:11),y=e.customer?.deliveryMethod==="delivery"?"Kirim":"Ambil";o.twoColumn(`Plg  : ${h}`,`Tipe: ${y}`,!1,!0),e.customer?.phone&&o.line(`HP   : ${e.customer.phone}`,"left"),e.customer?.note&&j(`Cat  : ${e.customer.note}`,a).forEach(v=>o.line(v,"left")),o.separator("-");const w=Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[];w.length>0?w.forEach(v=>{o.itemRow(v)}):o.line("- Tidak ada rincian barang -","center"),o.separator("-");const p=w.reduce((v,$)=>v+parseFloat($.qty||1)*(parseFloat($.effectivePrice||$.price)||0),0),C=e.payment&&e.payment.subtotal!==void 0?e.payment.subtotal:p||e.total||0,I=e.payment&&e.payment.shippingCost!==void 0?e.payment.shippingCost:0,D=e.payment&&e.payment.grandTotal!==void 0?e.payment.grandTotal:e.total||C+I;if(o.twoColumn("Subtotal",M(C)),(e.customer?.deliveryMethod==="delivery"||e.deliveryMethod==="delivery")&&o.twoColumn("Ongkos Kirim",M(I)),e.payment?.productDiscount&&o.twoColumn("Potongan Harga",`- ${M(e.payment.productDiscount)}`),e.payment?.shippingDiscount&&o.twoColumn("Potongan Ongkir",`- ${M(e.payment.shippingDiscount)}`),(e.payment?.ppnEnabled||e.payment?.ppnShowZero||e.payment?.ppnRate===0||e.payment?.ppnAmount&&e.payment.ppnAmount>0)&&(c.store?.ppnEnabled||e.payment?.ppnEnabled)){const v=e.payment?.ppnType==="inclusive",$=e.payment?.ppnRate!==void 0?e.payment.ppnRate:c.store?.ppnRate||0,k=e.payment?.ppnAmount||0,N=e.payment?.ppnLabel||`${v?"Inc. PPN":"PPN"} (${$}%)`,O=k>0?`${v?"":"+ "}${M(k)}`:"Rp 0";o.twoColumn(N,O)}o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL",M(D)).size("normal").bold(!1),o.doubleSeparator();const g=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater";if(o.twoColumn("Metode Bayar",g?"PUTRI PAYLATER":(e.payment?.method||"Tunai").toUpperCase()),g){if(e.payment?.paylaterMonths){const v=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${v} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${M(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${M(e.payment.paylaterServiceFee)}`),e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${M(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`)}return n.showPoints&&(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(o.separator("-"),e.pointsEarned>0&&o.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),e.finalMemberPoints!==void 0&&o.twoColumn("Saldo Poin",`${e.finalMemberPoints} Poin`)),n.showBarcode&&(o.separator("-"),o.align("center"),o.line(`*ORDER-${e.orderId}*`,"center"),o.line("(SCAN DI KASIR)","center")),o.separator("-"),j(n.footerText||"Terima Kasih Atas Kunjungan Anda!",a).forEach(v=>o.line(v,"center")),o.feed(n.feedLines||3),n.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines}},xt=(e,t=null)=>{const n=t||H(),a=de(n.paperSize),s=a>=40,o=new Ce(a);o.init();const r=K(n.headerText||c.store?.name||"TOKO PUTRI").trim(),l=K(c.store?.address||"").trim(),d=K(c.store?.wa||"").trim(),m=Math.floor(a/2);r.length<=m?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),j(r.toUpperCase(),a).forEach(x=>o.line(x,"center")),o.size("normal").bold(!1)),l&&j(l,a).forEach(x=>o.line(x,"center")),d&&o.line(`WA: ${d}`,"center"),o.separator("-");const b=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",u=e.payment?.paymentStatus==="lunas"||parseFloat(e.payment?.tempoBalance||0)<=0,h=s?b?u?"*** NOTA PUTRI PAYLATER (LUNAS) ***":"*** NOTA TAGIHAN PUTRI PAYLATER ***":u?"*** NOTA TEMPO (LUNAS) ***":"*** NOTA TAGIHAN TEMPO (PIUTANG) ***":b?u?"** PAYLATER (LUNAS) **":"** NOTA PUTRI PAYLATER **":u?"** NOTA TEMPO (LUNAS) **":"** NOTA TAGIHAN TEMPO **";o.bold(!0).line(h,"center").bold(!1),o.separator("-");const y=le(e.dateString||e.timestamp||Date.now(),s);o.twoColumn(`Order: #${e.orderId}`,y,!1,!0);const w=(e.customer?.name||"Pelanggan").substring(0,s?18:11);if(o.twoColumn(`Plg  : ${w}`,b?"Tipe: PayLater":"Tipe: Tempo",!1,!0),b&&e.payment?.paylaterMonths){const x=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${x} (${e.payment.paylaterMonths}x)`,!1,!0)}(e.customer?.phone||e.customer?.wa)&&o.line(`HP   : ${e.customer.wa||e.customer.phone}`,"left");let p=parseFloat(e.payment?.tempoBalance)||0,C=e.payment?.tempoPenaltyRate!==void 0?parseFloat(e.payment.tempoPenaltyRate):1,I=e.payment?.tempoPenaltyStopped===!0,D=0,S=e.payment?.tempoDueDate||0,g=0,v=0,$=!1,k=!1;const N=Date.now();S>0&&(N>S?(g=Math.floor((N-S)/(24*60*60*1e3)),g>0&&($=!0)):(v=Math.ceil((S-N)/(24*60*60*1e3)),v<=3&&(k=!0))),I?D=parseFloat(e.payment?.tempoFixedPenalty)||0:$&&(D=C/100*p*g);let O=p+D;const L=e.payment?.installments||[],A=L.reduce((x,R)=>x+(parseFloat(R.amount)||0),0),P=e.payment?.grandTotal||p+A;if(S>0){const x=le(S,s);let R="";u?R="LUNAS":$?R=`Telat ${g} Hari`:k?R=`H-${v<=0?0:v}`:R=`Sisa ${v} Hari`,o.twoColumn(`J.Tmp: ${x}`,R,!1,!0)}return o.separator("-"),(e.items||[]).forEach(x=>{o.itemRow(x)}),o.separator("-"),o.twoColumn("Total Transaksi",M(P)),b&&(e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${M(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Penanganan",`+ ${M(e.payment.paylaterServiceFee)}`)),L.length>0&&(o.separator("-"),o.bold(!0).line("HISTORI PEMBAYARAN CICILAN:","left").bold(!1),L.forEach((x,R)=>{const _=le(x.date,s);o.twoColumn(`${R+1}. ${_}`,M(x.amount))}),o.twoColumn("Total Terbayar",M(A),!0)),o.twoColumn("Sisa Pokok",M(p)),b&&e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${M(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),D>0&&o.twoColumn(`Denda (${g} Hari)`,`+ ${M(D)}`),o.doubleSeparator(),o.bold(!0).size("tall").twoColumn(b?"TAGIHAN PAYLATER":"SISA TAGIHAN",M(u?0:O)).size("normal").bold(!1),o.doubleSeparator(),!u&&c.banks&&c.banks.length>0&&(o.line("REKENING TRANSFER RESMI:","left"),(c.banks||[]).forEach(x=>{o.line(`${x.bank||x.bankName||"Bank"}: ${x.number||x.bankAccount||"-"}`,"left"),o.line(`a/n ${x.name||x.bankOwner||"-"}`,"left")}),o.separator("-")),n.showBarcode&&(o.separator("-"),o.align("center"),o.line(b?`*PAYLATER-${e.orderId}*`:`*TEMPO-${e.orderId}*`,"center"),o.line(b?"(PUTRI PAYLATER RESMI)":"(NOTA TEMPO RESMI)","center")),o.separator("-"),j(n.footerText||"Terima Kasih Atas Kerja Sama & Kepercayaannya!",a).forEach(x=>o.line(x,"center")),o.feed(n.feedLines||3),n.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines}},ht=(e=null)=>{const t=e||H(),n=de(t.paperSize),a=n>=40,s=new Ce(n);s.init();const o=K(t.headerText||c.store?.name||"TOKO PUTRI").trim(),r=Math.floor(n/2);o.length<=r?(s.align("center").bold(!0).size("title").line(o.toUpperCase(),"center"),s.size("normal").bold(!1)):(s.align("center").bold(!0).size("tall"),j(o.toUpperCase(),n).forEach(h=>s.line(h,"center")),s.size("normal").bold(!1));const l=K(c.store?.wa||"").trim();l&&s.line(`WA: ${l}`,"center"),s.separator("-");const d=a?`*** UJI COBA CETAK STRUK THERMAL ${n} KOLOM ***`:`** UJI CETAK THERMAL ${n} KOLOM **`;s.bold(!0).line(d,"center").bold(!1),s.separator("-"),s.line("MISTAR KALIBRASI TEPI KERTAS:","left");let m="";for(let h=1;h<=n;h++)m+=String(h%10);s.line(m,"left");let b="";for(let h=1;h<=n;h++)h===n||h%10===0?b+="|":h%5===0?b+=":":b+=".";s.line(b,"left"),s.line(`(Pastikan angka ${n%10} paling kanan tercetak utuh)`,"left"),s.separator("-");const u=le(Date.now(),a);return s.line(`Waktu   : ${u}`,"left"),s.line(`Format  : Thermal ${n} Kolom (${t.paperSize})`,"left"),s.line("Driver  : RAWBT FREE PRINT SERVICE","left"),s.line("Status  : 100% PRESISI & SIAP PAKAI","left"),s.separator("-"),s.bold(!0).twoColumn("ITEM SIMULASI","HARGA").bold(!1),s.itemRow({name:"Kertas Thermal Kasir Roll",qty:2,unit:"roll",price:15e3,subtotal:3e4}),s.itemRow({name:"Semen Portland Komposit 40kg",qty:1,unit:"sak",price:65e3,subtotal:65e3}),s.separator("-"),s.twoColumn("Subtotal",M(95e3)),s.twoColumn("Diskon Uji Coba",`- ${M(5e3)}`),s.doubleSeparator(),s.bold(!0).size("tall").twoColumn("TOTAL TES",M(9e4)).size("normal").bold(!1),s.doubleSeparator(),s.twoColumn("Bayar Tunai",M(1e5)),s.bold(!0).twoColumn("Kembalian",M(1e4)).bold(!1),t.showPoints&&(s.separator("-"),s.twoColumn("Simulasi Poin Member","+10 Poin")),t.showBarcode&&(s.separator("-"),s.align("center"),s.line(`*TEST-RAWBT-${Date.now().toString().slice(-6)}*`,"center"),s.line("(BARCODE TEST BERHASIL)","center")),s.separator("-"),j(t.footerText||"Terima kasih atas kunjungan Anda!",n).forEach(h=>s.line(h,"center")),j("Hasil cetak telah terkalibrasi presisi.",n).forEach(h=>s.line(h,"center")),s.feed(t.feedLines||3),t.autoCut&&s.cut(),{base64:s.toBase64(),plainText:s.toPlainText(),previewLines:s.previewLines}},st=e=>{const t=document.getElementById(e);return!!t&&!t.classList.contains("hidden")},Js=e=>{if(!e){Q("Data transaksi kasir tidak ditemukan.","warning");return}const t=H(),n=bt(e,t),a=st("pos-receipt-fallback-modal");De(n.base64,n.plainText,"",{skipPreview:a,previewLines:n.previewLines,title:`Struk Kasir #${e.txId||""}`,rebuild:()=>bt(e,H()),onConfirm:()=>{document.getElementById("pos-success-modal")?.remove(),document.getElementById("pos-receipt-fallback-modal")?.remove()}})},Ys=(e,t=!1)=>{if(!e){Q("Data shift tidak ditemukan.","warning");return}const n=H(),a=wt(e,t,n),s=st("pos-shift-receipt-modal");De(a.base64,a.plainText,"",{skipPreview:s,previewLines:a.previewLines,title:`${t?"Ringkasan Shift (X-Report)":"Rekap Tutup Shift (Z-Report)"} #${e.shiftNo||e.id||""}`,rebuild:()=>wt(e,t,H()),onConfirm:()=>document.getElementById("pos-shift-receipt-modal")?.remove()})},Qs=async(e=null)=>{const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||ye,n=String(t||"").replace(/^#/,"").trim(),a=d=>{if(!d)return!1;const m=String(d.orderId||"").replace(/^#/,"").trim();return n?m===n||m.endsWith(n)||n.endsWith(m):!0};let s=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(s=e),(!s||!s.items||s.items.length===0)&&a(window.currentCustomerOrder)&&(s=window.currentCustomerOrder),(!s||!s.items||s.items.length===0)&&a(window.lastPrintedOrder)&&(s=window.lastPrintedOrder),(!s||!s.items||s.items.length===0)&&(ve||[]).length>0){const d=ve.find(a);d&&Array.isArray(d.items)&&d.items.length>0&&(s=d)}if((!s||!s.items||s.items.length===0)&&Array.isArray(B)){const d=B.find(a);d&&Array.isArray(d.items)&&d.items.length>0&&(s=d)}if((!s||!s.items||s.items.length===0)&&n)try{const d=typeof re<"u"&&re?re:window.db;if(d){let m=await d.collection("freshmart_orders").doc(n).get();if(!m.exists&&!n.startsWith("ORD-")){const b=await d.collection("freshmart_orders").doc("ORD-"+n).get();b.exists&&(m=b)}if(m&&m.exists&&(s=m.data(),s.orderId=s.orderId||m.id,window.currentCustomerOrder=s,window.lastPrintedOrder=s,Array.isArray(B))){const b=B.findIndex(a);if(b!==-1){B[b].items=s.items||[],B[b].payment=s.payment||{},B[b].customer=s.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(B))}catch{}}}}}catch(d){console.warn("[RawBT] Gagal fetch order detail from Firestore:",d)}if(!s&&Array.isArray(B)&&(s=B.find(a)),!s){Q("Data pesanan tidak ditemukan.","warning");return}window.lastPrintedOrder=s;const o=H(),r=gt(s,o),l=st("receipt-preview-modal");De(r.base64,r.plainText,"",{skipPreview:l,previewLines:r.previewLines,title:`Struk Pesanan #${s.orderId||""}`,rebuild:()=>gt(s,H()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&l&&window.closeReceiptPreviewModal()}})},Zs=(e=null)=>{const t=e||ye;let a=(window.cachedPiutangOrders||[]).find(l=>String(l.orderId)===String(t))||(ve||[]).find(l=>String(l.orderId)===String(t));if(!a&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(t)&&(a=window.lastPrintedOrder),!a){if(typeof window.previewTempoReceipt=="function"&&t&&!window.__tempoReceiptFetching){window.__tempoReceiptFetching=!0,Promise.resolve(window.previewTempoReceipt(t)).finally(()=>{window.__tempoReceiptFetching=!1});return}Q("Data nota piutang tidak ditemukan.","warning");return}const s=H(),o=xt(a,s),r=st("receipt-preview-modal");De(o.base64,o.plainText,"",{skipPreview:r,previewLines:o.previewLines,title:`Nota Tagihan Tempo #${a.orderId||""}`,rebuild:()=>xt(a,H()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&r&&window.closeReceiptPreviewModal()}})},Xs=()=>{const e=H(),t=ht(e);De(t.base64,t.plainText,"",{previewLines:t.previewLines,title:"Uji Coba Cetak Printer",rebuild:()=>ht(H())})};window.cleanLineAscii=K;window.wrapWords=j;window.formatTwoColumn=ba;window.formatCompactDate=le;window.EscPosBuilder=Ce;window.sendToRawBT=De;window.renderThermalDOMAndPrint=Mt;window.openRawBTApp=Gs;window.buildPOSReceiptPayload=bt;window.buildShiftReceiptPayload=wt;window.buildOrderReceiptPayload=gt;window.buildTempoReceiptPayload=xt;window.buildTestReceiptPayload=ht;window.printPOSReceiptDirect=Js;window.printShiftSettlementDirect=Ys;window.printCustomerReceiptDirect=Qs;window.printTempoReceiptDirect=Zs;window.executeRawBTTestPrint=Xs;const Lt=async(e=null)=>{if(e&&typeof Bt=="function"&&typeof e=="string"&&Bt(e),typeof window.printCustomerReceiptDirect=="function")return window.printCustomerReceiptDirect(e);const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||ye,n=String(t||"").replace(/^#/,"").trim(),a=P=>{if(!P)return!1;const x=String(P.orderId||"").replace(/^#/,"").trim();return n?x===n||x.endsWith(n)||n.endsWith(x):!0};let s=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(s=e),(!s||!s.items||s.items.length===0)&&a(window.currentCustomerOrder)&&(s=window.currentCustomerOrder),(!s||!s.items||s.items.length===0)&&a(window.lastPrintedOrder)&&(s=window.lastPrintedOrder),(!s||!s.items||s.items.length===0)&&(ve||[]).length>0){const P=ve.find(a);P&&Array.isArray(P.items)&&P.items.length>0&&(s=P)}if((!s||!s.items||s.items.length===0)&&Array.isArray(B)){const P=B.find(a);P&&Array.isArray(P.items)&&P.items.length>0&&(s=P)}if((!s||!s.items||s.items.length===0)&&n)try{const P=typeof re<"u"&&re?re:window.db;if(P){let x=await P.collection("freshmart_orders").doc(n).get();if(!x.exists&&!n.startsWith("ORD-")){const R=await P.collection("freshmart_orders").doc("ORD-"+n).get();R.exists&&(x=R)}if(x&&x.exists&&(s=x.data(),s.orderId=s.orderId||x.id,window.currentCustomerOrder=s,window.lastPrintedOrder=s,Array.isArray(B))){const R=B.findIndex(a);if(R!==-1){B[R].items=s.items||[],B[R].payment=s.payment||{},B[R].customer=s.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(B))}catch{}}}}}catch(P){console.warn("[Receipt] Gagal fetch order detail from Firestore:",P)}if(!s&&Array.isArray(B)&&(s=B.find(a)),!s)return;window.lastPrintedOrder=s;const o=typeof H=="function"?H():{paperSize:"58mm",showPoints:!0,showBarcode:!0},r=de(o.paperSize),l=r>=40,d=le(s.dateString||s.date||Date.now(),l),m=o.headerText||c.store.name||"Toko Putri",b=c.store.wa||"",u=(P,x,R=r)=>{const _=String(P||""),W=String(x||""),F=R-_.length-W.length;return _+(F>0?" ".repeat(F):" ")+W},h=Array.isArray(s.items)?s.items:Array.isArray(s.cart)?s.cart:[],y=h.reduce((P,x)=>P+parseFloat(x.qty||1)*(parseFloat(x.effectivePrice||x.price)||0),0),w=s.payment&&s.payment.subtotal!==void 0?s.payment.subtotal:y||s.total||0,p=s.payment&&s.payment.shippingCost!==void 0?s.payment.shippingCost:0,C=s.payment&&s.payment.grandTotal!==void 0?s.payment.grandTotal:s.total||w+p,I=String(s.payment?.method||s.method||"Tunai").toUpperCase(),D=s.customer?.name||s.customerName||"Guest",S=s.customer?.deliveryMethod==="delivery"||s.deliveryMethod==="delivery";let g=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${i(m)}</div>`;b&&(g+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${i(b)}</div>`);const v=s.payment?.taxNpwp||c.store?.taxNpwp;if(v&&(g+=`<div class="text-center" style="font-size:10px;font-family:monospace;margin-bottom:4px;">NPWP: ${i(v)}</div>`),g+='<div class="border-b border-dashed border-black my-2"></div>',g+=`<div style="white-space:pre;font-family:monospace;">${u(`Order: #${s.orderId}`,d,r)}</div>`,g+=`<div style="white-space:pre;font-family:monospace;">${u(`Plg  : ${i(D).substring(0,l?18:10)}`,`Tipe: ${S?"Kirim":"Ambil"}`,r)}</div>`,(s.customer?.phone||s.customerPhone)&&(g+=`<div style="white-space:pre;font-family:monospace;">HP   : ${i(s.customer?.phone||s.customerPhone)}</div>`),g+='<div class="border-b border-dashed border-black my-2"></div>',s.customer?.note&&(g+=`<div style="white-space:pre-wrap;word-break:break-word;">Cat: ${i(s.customer.note)}</div><div class="border-b border-dashed border-black my-2"></div>`),h.length>0?h.forEach(P=>{let x=P.variantName?` (${i(P.variantName)}${P.colorCode?" "+i(P.colorCode):""})`:"";const R=i(P.name||"Barang")+x+(P.poTime?" [PO]":""),_=P.effectivePrice||P.price||0,W=`  ${parseFloat(P.qty||1)} ${i(P.unit||"pcs")} x ${Math.round(_).toLocaleString("id-ID")}`,F=(parseFloat(P.qty||1)*_).toLocaleString("id-ID");g+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;">${R}</div><div style="white-space:pre;font-family:monospace;font-size:11px;">${u(W,F,r)}</div>`,P.poTime&&(g+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">  * Estimasi PO: ${i(P.poTime)}</div>`)}):g+='<div style="white-space:pre;font-style:italic;color:#64748b;text-align:center;padding:4px 0;">- Tidak ada rincian barang -</div>',g+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-family:monospace;">${u("Subtotal",w.toLocaleString("id-ID"),r)}</div>`,S&&(g+=`<div style="white-space:pre;font-family:monospace;">${u("Ongkir",p.toLocaleString("id-ID"),r)}</div>`),s.payment?.shippingDiscount&&(g+=`<div style="white-space:pre;font-family:monospace;">${u("Pot.Ongkir",`-${s.payment.shippingDiscount.toLocaleString("id-ID")}`,r)}</div>`),s.payment?.productDiscount&&(g+=`<div style="white-space:pre;font-family:monospace;">${u("Pot.Harga",`-${s.payment.productDiscount.toLocaleString("id-ID")}`,r)}</div>`),(s.payment?.ppnEnabled||s.payment?.ppnShowZero||s.payment?.ppnRate===0||s.payment?.ppnAmount&&s.payment.ppnAmount>0)&&(c.store?.ppnEnabled||s.payment?.ppnEnabled)){const P=s.payment?.ppnType==="inclusive",x=s.payment?.ppnRate!==void 0?s.payment.ppnRate:c.store?.ppnRate||0,R=s.payment?.ppnAmount||0,_=s.payment?.ppnLabel||`${P?"Inc. PPN":"PPN"} (${x}%)`,W=R>0?`${P?"":"+"}${R.toLocaleString("id-ID")}`:"0";g+=`<div style="white-space:pre;font-family:monospace;">${u(_,W,r)}</div>`}if(g+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-family:monospace;font-weight:bold;font-size:12px;">${u("TOTAL","Rp "+C.toLocaleString("id-ID"),r)}</div><div style="white-space:pre;font-family:monospace;">${u("Metode Bayar",I,r)}</div>`,s.payment?.method==="tempo"||s.payment?.isPaylater||s.payment?.subMethod==="paylater"){if(!!(s.payment?.isPaylater||s.payment?.subMethod==="paylater")){if(s.payment?.paylaterMonths){const x=s.payment.paylaterTenor==="2m"?"2 Bulan":s.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";g+=`<div style="white-space:pre;font-family:monospace;">${u("Tenor Cicilan",`${x} (${s.payment.paylaterMonths}x)`,r)}</div>`}s.payment?.paylaterMonthlyInstallment&&(g+=`<div style="white-space:pre;font-family:monospace;font-weight:bold;">${u("Angsuran/Bln","Rp "+Math.round(s.payment.paylaterMonthlyInstallment).toLocaleString("id-ID"),r)}</div>`),s.payment?.tempoDp>0&&(g+=`<div style="white-space:pre;font-family:monospace;">${u("Uang Muka (DP)","Rp "+Math.round(s.payment.tempoDp).toLocaleString("id-ID"),r)}</div>`),g+=`<div style="white-space:pre;font-family:monospace;font-weight:bold;">${u("Tagihan PayLater","Rp "+Math.round(s.payment?.tempoBalance||C).toLocaleString("id-ID"),r)}</div>`}else s.payment?.tempoDp>0&&(g+=`<div style="white-space:pre;font-family:monospace;">${u("Uang Muka (DP)","Rp "+Math.round(s.payment.tempoDp).toLocaleString("id-ID"),r)}</div>`),g+=`<div style="white-space:pre;font-family:monospace;font-weight:bold;">${u("Sisa Piutang","Rp "+Math.round(s.payment?.tempoBalance||C).toLocaleString("id-ID"),r)}</div>`;if(s.payment?.tempoDueDate){const x=typeof s.payment.tempoDueDate=="number"?new Date(s.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):s.payment.tempoDueDate;g+=`<div style="white-space:pre;font-family:monospace;">${u("Jatuh Tempo",x,r)}</div>`}}o.showPoints&&(s.pointsEarned>0||s.finalMemberPoints!==void 0)&&(g+='<div class="border-b border-dashed border-black my-2"></div>',s.pointsEarned>0&&(g+=`<div style="white-space:pre;font-family:monospace;">${u("Poin Didapat","+"+s.pointsEarned+" Poin",r)}</div>`),s.finalMemberPoints!==void 0&&s.finalMemberPoints!==null&&(g+=`<div style="white-space:pre;font-family:monospace;font-weight:bold;">${u("Saldo Poin",String(s.finalMemberPoints)+" Poin",r)}</div>`),s.claimedReward&&(g+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;margin-top:2px;">HADIAH: ${i(s.claimedReward.name)}</div>`)),h.some(P=>P&&P.poTime&&P.poTime!=="")&&(g+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),o.showBarcode&&(g+=`<div class="border-b border-dashed border-black my-2"></div><div style="text-align:center;margin:4px 0;"><div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*ORDER-${i(s.orderId)}*</div><div style="font-size:8px;color:#666;">SCAN DI KASIR</div></div>`),g+=`<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${i(o.footerText||"Terima Kasih Atas Kunjungan Anda")}</div><div class="border-b border-dashed border-black my-2"></div><div style="height:15px;"></div>`,ea("receipt-paper-content",g);const N=f("receipt-paper-content");N&&(N.style.width=l?"340px":"260px");const O=f("receipt-preview-modal-box");O&&(O.classList.remove("max-w-[320px]","max-w-[400px]"),O.classList.add(l?"max-w-[400px]":"max-w-[320px]"));const L=f("receipt-preview-modal"),A=f("receipt-preview-modal-box");L&&L.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),Xe(L,A)},en=(e=!1)=>{const t=f("receipt-preview-modal"),n=f("receipt-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{ke(t,n)}):ke(t,n))},tn=()=>{const e=ye||(window.lastPrintedOrder?window.lastPrintedOrder.orderId:null);if(typeof window.printCustomerReceiptDirect=="function"){window.printCustomerReceiptDirect(e);return}if(!((ve||[]).find(a=>a.orderId===ye)||(Array.isArray(B)?B.find(a=>a.orderId===ye):null)||window.lastPrintedOrder))return;const n=f("receipt-paper-content")?f("receipt-paper-content").innerHTML:"";Mt(n)};window.openReceiptPreview=Lt;window.openCustomerReceiptPreview=e=>{Lt(e)};window.closeReceiptPreviewModal=en;window.executePrintReceipt=tn;window.checkProPrint=()=>{Lt()};const G={OWNER:"owner",ADMIN:"admin",CASHIER:"cashier"},an=[{key:"orders",label:"Pesanan Online",desc:"Proses status pesanan, update resi pengiriman & konfirmasi bayar",group:"operasional",icon:"fa-receipt"},{key:"products",label:"Katalog Produk & Stok",desc:"Tambah/edit produk, atur varian, dan perbarui stok barang",group:"operasional",icon:"fa-box-open"},{key:"suppliers",label:"Supplier & Rekanan",desc:"Kelola master data supplier, kontak kulakan, dan asal produk",group:"operasional",icon:"fa-truck-field"},{key:"purchases",label:"Order Kulakan (PO)",desc:"Buat PO pembelian grosir, terima restock, & kelola hutang rekanan",group:"operasional",icon:"fa-cart-flatbed"},{key:"piutang",label:"Piutang Tempo & Cicilan",desc:"Kelola nota piutang pelanggan, denda keterlambatan, & cicilan",group:"operasional",icon:"fa-clock-rotate-left"},{key:"customers",label:"Database Pelanggan",desc:"Lihat daftar member, atur limit kredit PayLater, & mutasi poin",group:"operasional",icon:"fa-address-book"},{key:"pos",label:"Kasir POS",desc:"Akses antarmuka penjualan kasir toko fisik dan shift kasir",group:"operasional",icon:"fa-cash-register"},{key:"expenses",label:"Biaya Operasional Toko",desc:"Buku kas pengeluaran operasional toko harian & nota kas",group:"operasional",icon:"fa-money-bill-transfer"},{key:"stock_opname",label:"Stock Opname (Audit Fisik)",desc:"Audit stok fisik rak/gudang, rekonsiliasi selisih & terapkan penyesuaian stok",group:"operasional",icon:"fa-clipboard-check"},{key:"categories",label:"Kategori Produk",desc:"Tambah dan susun kategori etalase produk",group:"konten",icon:"fa-tags"},{key:"brands",label:"Merek Produk",desc:"Kelola daftar brand dagang barang",group:"konten",icon:"fa-copyright"},{key:"colors",label:"Database Warna",desc:"Katalog warna produk dan swatch varian",group:"konten",icon:"fa-swatchbook"},{key:"vouchers",label:"Voucher & Promo",desc:"Buat kode voucher diskon dan promo belanja",group:"konten",icon:"fa-ticket-simple"},{key:"banners",label:"Banner Promosi",desc:"Kelola gambar dan video slider beranda toko",group:"konten",icon:"fa-images"},{key:"rewards",label:"Program Hadiah Poin",desc:"Kelola katalog hadiah penukaran poin member",group:"konten",icon:"fa-gift"},{key:"reviews",label:"Ulasan Pelanggan",desc:"Moderasi ulasan dan testimoni produk pembeli",group:"konten",icon:"fa-star"},{key:"faqs",label:"Tanya Jawab / Q&A",desc:"Kelola jawaban pertanyaan umum pembeli",group:"konten",icon:"fa-circle-question"},{key:"changelog",label:"Log Pembaruan Sistem",desc:"Melihat riwayat update sistem toko",group:"konten",icon:"fa-code-branch"},{key:"reports",label:"Pusat Laporan & Keuangan",desc:"Laporan terpadu penjualan, stok, laba rugi, utang piutang, dan perpajakan",group:"sensitif",icon:"fa-chart-pie"},{key:"view_reports",label:"Laporan Finansial & Laba",desc:"Lihat omset, total HPP terjual, margin & laba bersih toko",group:"sensitif",icon:"fa-chart-line"},{key:"tax",label:"Pajak & Keuangan (PPN)",desc:"Laporan PPN, neraca keuangan, dan laba rugi resmi",group:"sensitif",icon:"fa-file-invoice-dollar"},{key:"banks",label:"Rekening Bank & QRIS",desc:"Ubah nomor rekening toko dan QRIS tujuan pembayaran",group:"sensitif",icon:"fa-building-columns"},{key:"settings",label:"Pengaturan Utama Toko",desc:"Konfigurasi nama toko, GPS maps, tarif ongkir, & sistem",group:"sensitif",icon:"fa-gear"},{key:"cashiers",label:"Kelola Staf & Hak Akses",desc:"Daftarkan staf baru, atur jabatan, & ubah batasan hak akses",group:"sensitif",icon:"fa-users-gear"},{key:"backup_sync",label:"Pusat Data & Backup Cloud",desc:"Cadangkan data toko, ekspor database, & sinkronisasi cloud",group:"sensitif",icon:"fa-cloud-arrow-up"}],yt={[G.CASHIER]:{pos:!0,orders:!1,products:!1,suppliers:!1,purchases:!1,piutang:!1,customers:!1,categories:!1,brands:!1,colors:!1,vouchers:!1,banners:!1,rewards:!1,reviews:!1,faqs:!1,changelog:!1,expenses:!1,stock_opname:!1,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[G.ADMIN]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},manager:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!0,view_reports:!0,tax:!0,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[G.OWNER]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,reports:!0,view_reports:!0,tax:!0,banks:!0,settings:!0,cashiers:!0,backup_sync:!0}};let $e=null;const Ne=()=>{if($e)return $e;try{const e=sessionStorage.getItem("freshmart_staff_profile");if(e)return $e=JSON.parse(e),$e}catch{}return null},sn=e=>{$e=e;try{e?sessionStorage.setItem("freshmart_staff_profile",JSON.stringify(e)):sessionStorage.removeItem("freshmart_staff_profile")}catch{}},nn=()=>{$e=null;try{sessionStorage.removeItem("freshmart_staff_profile")}catch{}},je=()=>{const e=Ze.currentUser;if(e&&e.uid===ie)return!0;const t=Ne();if(t){const a=String(t.role||"").toLowerCase();if(a==="owner"||t.uid===ie)return!0;if(a==="cashier"||a==="kasir"||a==="staff")return!1}const n=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");if((window.isAdm||window.__localIsAdm)&&n&&!t)return!0;try{const a=sessionStorage.getItem("pos_cashier_session");if(a){const s=JSON.parse(a),o=String(s.role||"").toLowerCase();if(o==="owner"||s.uid===ie)return!0;if(o==="cashier"||o==="kasir"||o==="staff")return!1}}catch{}return!1},on=()=>{if(je())return!0;if(wa())return!1;const e=Ne();return e?.role===G.ADMIN||String(e?.role||"").toLowerCase()==="admin"},wa=()=>{if(je())return!1;const e=Ne();if(e){const t=String(e.role||"").toLowerCase();if(t==="owner"||e.uid===ie)return!1;if(t==="cashier"||t==="kasir")return!0}try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const n=JSON.parse(t),a=String(n.role||"").toLowerCase();if(a==="owner"||n.uid===ie)return!1;if(a==="cashier"||a==="kasir"||a==="staff")return!0}}catch{}return!1},ga=e=>{if(je())return!0;const t=Ne();if(t){if(t.isActive===!1)return!1;const n=String(t.role||"").toLowerCase();if(n===G.OWNER||n==="owner")return!0;if(n===G.CASHIER||n==="cashier"||n==="kasir")return e==="pos";if(t.permissions){if(typeof t.permissions[e]<"u")return t.permissions[e]===!0;if(e==="reports"&&(t.permissions.view_reports===!0||t.permissions.tax===!0)||(e==="view_reports"||e==="tax")&&t.permissions.reports===!0)return!0}return(yt[t.role]||yt[G.ADMIN])[e]===!0}try{const n=sessionStorage.getItem("pos_cashier_session");if(n){const a=JSON.parse(n),s=String(a.role||"").toLowerCase();if(s===G.OWNER||s==="owner"||a.uid===ie)return!0;if(s===G.CASHIER||s==="cashier"||s==="kasir")return e==="pos"}}catch{}return window.isAdm||window.__localIsAdm?["banks","settings","cashiers","backup_sync"].includes(e)?Ze.currentUser?.uid===ie:!0:!1},vt=()=>{if(typeof window<"u"&&(window.curViewName==="view-pos-cashier"||document.getElementById("view-pos-cashier")?.classList.contains("flex")||document.getElementById("pos-payment-modal")?.classList.contains("flex")||document.getElementById("pos-variant-sheet")?.classList.contains("flex")))try{const a=sessionStorage.getItem("pos_cashier_session");if(a){const s=JSON.parse(a),o=String(s.role||"").toLowerCase();return o===G.OWNER||o==="owner"||s.uid===ie}}catch{}if(je())return!0;const t=Ne();if(t){const a=String(t.role||"").toLowerCase();return a===G.OWNER||a==="owner"||t.uid===ie?!0:a===G.CASHIER||a==="cashier"||a==="kasir"?!1:ga("view_reports")}const n=Ze.currentUser;return!!(n&&n.uid===ie||window.isAdm||window.__localIsAdm)},rn=e=>{switch(e){case G.OWNER:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-2xs">
                <i class="fa-solid fa-crown text-[9px] text-amber-500"></i>
                <span>Owner</span>
            </span>`;case G.ADMIN:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shadow-2xs">
                <i class="fa-solid fa-shield-halved text-[9px]"></i>
                <span>Admin Toko</span>
            </span>`;case G.CASHIER:default:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                <i class="fa-solid fa-cash-register text-[9px]"></i>
                <span>Kasir POS</span>
            </span>`}};typeof window<"u"&&(window.ROLES=G,window.PERMISSION_DEFINITIONS=an,window.ROLE_PRESETS=yt,window.getActiveStaff=Ne,window.setActiveStaff=sn,window.clearActiveStaff=nn,window.isOwnerUser=je,window.isAdminUser=on,window.isCashierUser=wa,window.hasPermission=ga,window.canViewHpp=vt,window.getRoleBadgeHtml=rn);let he="invoice",xa=!1;const dt=e=>{xa=e},V=(e,t=!1)=>{if(!e)return"-";try{const n=e.toDate?e.toDate():new Date(e);if(isNaN(n.getTime()))return"-";const a={day:"2-digit",month:"short",year:"numeric"};return t&&(a.hour="2-digit",a.minute="2-digit"),n.toLocaleDateString("id-ID",a)}catch{return"-"}},zt=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(2).replace(/\.?0+$/,"")},be=(e="w-16 h-16")=>c.store?.logo&&(c.store.logo.includes("http")||c.store.logo.includes("data:"))?`<img loading="eager" src="${i(c.store.logo)}" class="${e} object-contain shrink-0">`:`<div class="${e} primary-bg flex items-center justify-center rounded-xl text-white shrink-0"><i class="fa-solid fa-store text-2xl"></i></div>`,ct=(e="font-mono text-xs")=>{const n=(Array.isArray(c.banks)?c.banks:[]).filter(a=>a&&(a.bankName||a.bank||a.bankAccount||a.number||a.account));if(n.length>0)return n.map(a=>{const s=a.bankName||a.bank||"BANK",o=a.bankAccount||a.number||a.account||"-",r=a.bankOwner||a.name||a.owner||c.store?.name||"Toko Putri";return`
            <div class="${e} flex items-center justify-between gap-2 border-b border-slate-200/60 pb-1.5 last:border-b-0 last:pb-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="font-bold text-slate-900 uppercase">${i(s)}:</span>
                    <span class="font-bold text-blue-700 tracking-wide font-mono select-all">${i(o)}</span>
                </div>
                <div class="text-[10.5px] text-slate-500 font-sans truncate max-w-[140px] text-right" title="${i(r)}">
                    a.n <span class="font-semibold text-slate-700">${i(r)}</span>
                </div>
            </div>`}).join("");if(c.store?.bankName&&(c.store?.bankAccount||c.store?.bankNumber)){const a=c.store.bankName,s=c.store.bankAccount||c.store.bankNumber,o=c.store.bankOwner||c.store.name||"Toko Putri";return`
        <div class="${e} flex items-center justify-between gap-2">
            <div class="flex items-center gap-1.5 flex-wrap">
                <span class="font-bold text-slate-900 uppercase">${i(a)}:</span>
                <span class="font-bold text-blue-700 tracking-wide font-mono select-all">${i(s)}</span>
            </div>
            <div class="text-[10.5px] text-slate-500 font-sans truncate max-w-[140px] text-right">
                a.n <span class="font-semibold text-slate-700">${i(o)}</span>
            </div>
        </div>`}return`
    <div class="text-[11px] text-slate-600 bg-slate-100 p-2 rounded-lg border border-slate-200">
        <p class="font-semibold text-slate-800"><i class="fa-solid fa-building-columns text-blue-600 mr-1"></i> Rekening Resmi Toko:</p>
        <p class="mt-0.5">Konfirmasi transfer via WhatsApp Resmi: <b class="font-mono text-emerald-600">${i(c.store?.wa||c.store?.phone||"-")}</b></p>
    </div>`},qt=({docTitle:e,docNumber:t,docDate:n})=>`
    <div class="flex justify-between items-center border-b-2 border-slate-800 pb-2.5 mb-4 text-xs font-semibold select-none">
        <div class="flex items-center gap-2.5">
            ${be("w-8 h-8")}
            <div>
                <span class="font-black text-slate-900 uppercase text-xs sm:text-sm tracking-tight">${i(c.store?.name||"TOKO PUTRI")}</span>
                <span class="text-slate-300 mx-1.5">&bull;</span>
                <span class="font-bold text-slate-700 uppercase tracking-wider text-[11px]">${i(e)}</span>
            </div>
        </div>
        <div class="text-right font-mono text-slate-600 text-[11px]">
            ${t?`<span class="font-bold text-slate-900">${i(t)}</span> <span class="text-slate-400 mx-1">&bull;</span>`:""}
            <span>${i(n||"")}</span>
        </div>
    </div>
    `,Wt=(e,t,n)=>`
    <div class="a4-page-footer mt-auto pt-2.5 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono select-none">
        <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-700 uppercase">${i(c.store?.name||"TOKO PUTRI")}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-500">${i(n||"Dokumen Resmi")}</span>
        </div>
        <div class="flex items-center gap-1 font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
            <span>Halaman ${e} dari ${t}</span>
        </div>
    </div>
    `,ue=({docTitle:e,docNumber:t,docDate:n,kopHtml:a,metaHtml:s,tableHeaderHtml:o,rows:r=[],tableClass:l="w-full text-left border-collapse mb-4 text-xs",summaryHtml:d="",extraBlocksHtml:m="",signaturesHtml:b="",singlePageMax:u=6,itemsFirstPage:h=6,itemsMiddlePage:y=14,itemsLastPage:w=6})=>{const p=r.length;if(p<=u)return[`
        <div class="a4-page" data-page="1" data-total-pages="1">
            <div class="a4-page-body flex-1 flex flex-col">
                ${a}
                ${s||""}
                <table class="${l}">
                    <thead>${o}</thead>
                    <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${r.join("")}</tbody>
                </table>
                ${d||""}
                ${m||""}
                ${b||""}
            </div>
            ${Wt(1,1,e)}
        </div>
        `];const C=[],I=[],D=r.slice(0,h);I.push(D);let S=h;for(;S<p;){const v=p-S;if(v<=w)I.push(r.slice(S)),S=p;else{const $=Math.min(y,v);I.push(r.slice(S,S+$)),S+=$}}const g=I.length;return I.forEach((v,$)=>{const k=$+1,N=k===1,O=k===g;let L="";N?L=`
            ${a}
            ${s||""}
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${v.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${k+1}...
            </div>
            `:O?L=`
            ${qt({docTitle:e,docNumber:t,docDate:n})}
            ${v.length>0?`
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${v.join("")}</tbody>
            </table>`:""}
            ${d||""}
            ${m||""}
            ${b||""}
            `:L=`
            ${qt({docTitle:e,docNumber:t,docDate:n})}
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${v.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${k+1}...
            </div>
            `,C.push(`
        <div class="a4-page" data-page="${k}" data-total-pages="${g}">
            <div class="a4-page-body flex-1 flex flex-col">
                ${L}
            </div>
            ${Wt(k,g,e)}
        </div>
        `)}),C},ln=(e,t=null)=>{if(he=e,e==="po"){const y=c.purchases||[],w=y.find(L=>String(L.id)===String(t))||(window.currentActivePoId?y.find(L=>String(L.id)===String(window.currentActivePoId)):y[0]);if(!w){typeof window.showToast=="function"&&window.showToast("Data PO tidak ditemukan!");return}se("doc-modal-title","Preview Purchase Order (PO)");const p=be("w-16 h-16"),C=V(w.date||w.createdAt),I=w.poNumber||w.id,D=w.paymentType==="tempo"?`Tempo ${w.tempoDays||14} Hari (Jatuh Tempo: ${V(w.tempoDueDate)})`:w.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai",S=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${p}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(c.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(c.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(c.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(c.store?.wa||c.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">PURCHASE ORDER</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(I)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${C}</p>
                <p class="text-xs font-bold mt-1 text-[var(--color-primary)]">Status: ${w.status==="ordered"?"DIPESAN":w.status==="received"?"DITERIMA":"SELESAI"}</p>
            </div>
        </div>
        `,g=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Kepada Rekanan / Supplier:</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${i(w.supplierName||"Supplier")}</p>
                ${w.supplierPhone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(w.supplierPhone)}</p>`:""}
                ${w.supplierAddress?`<p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${i(w.supplierAddress)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan & Pembayaran:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Termin Pembayaran:</span> <b class="text-slate-900">${D}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tujuan Pengiriman:</span> <b class="text-slate-900">${i(c.store?.name||"Gudang Utama Toko")}</b></p>
                ${w.notes?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${i(w.notes)}</p>`:""}
            </div>
        </div>
        `,v=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Modal (HPP)</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `,$=(w.items||[]).map((L,A)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${A+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(L.name)}
                ${L.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(L.variantName)}</span>`:""}
                ${L.sku?`<span class="text-slate-400 text-[9.5px] font-mono block mt-0.5">SKU: ${i(L.sku)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${zt(L.qty)} <span class="text-[10px] font-normal text-slate-500">${i(L.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${T(L.unitPrice)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${T(Math.round((parseFloat(L.qty)||0)*(parseFloat(L.unitPrice)||0)))}</td>
        </tr>
        `),k=`
        <div class="flex justify-end mb-6 mt-2">
            <div class="w-80 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk:</span><span class="font-bold text-slate-800">${T(w.subtotal)}</span></div>
                ${w.discount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Potongan Diskon:</span><span>-${T(w.discount)}</span></div>`:""}
                ${w.shippingFee>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim:</span><span>+${T(w.shippingFee)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL ORDER (PO):</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${T(w.total)}</span>
                </div>
            </div>
        </div>
        `,N=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-6 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Dipesan Oleh (Purchasing):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(c.store?.name||"Toko Putri")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Diterima &amp; Disetujui Oleh:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(w.supplierName||"Rekanan / Supplier")}</span>
            </div>
        </div>
        `,O=ue({docTitle:"Purchase Order",docNumber:`#${I}`,docDate:C,kopHtml:S,metaHtml:g,tableHeaderHtml:v,rows:$,summaryHtml:k,signaturesHtml:N,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});fe(O);return}if(e==="stock_opname"){const y=c.stockOpnameHistory||[],w=y.find(A=>String(A.id)===String(t)||String(A.soNumber)===String(t))||y[0];if(!w){typeof window.showToast=="function"&&window.showToast("Data Berita Acara Stock Opname tidak ditemukan!");return}se("doc-modal-title","Preview Berita Acara Stock Opname");const p=be("w-16 h-16"),C=V(w.date,!0),I=w.soNumber||w.id,D=typeof vt=="function"?vt():!1,S=w.items||[],g=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${p}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(c.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(c.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(c.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(c.store?.wa||c.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">BERITA ACARA</h2>
                <h3 class="font-bold text-sm tracking-wider text-amber-600 uppercase">STOCK OPNAME FISIK</h3>
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${i(I)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${C}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Auditor: <b class="text-slate-900">${i(w.auditorName||"Staf Auditor")}</b></p>
            </div>
        </div>
        `,v=`
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
                <span class="text-[10px] text-rose-500 block">${D?"−"+T(w.totalLossRp||0):"Pcs"}</span>
            </div>
            <div class="bg-amber-50 p-3 rounded-xl border border-amber-200 text-center">
                <span class="text-[9px] font-black uppercase text-amber-600 block tracking-wider">Total Lebih (Surplus)</span>
                <span class="text-lg font-black text-amber-600 font-mono">+${w.totalSurplusUnits||0}</span>
                <span class="text-[10px] text-amber-600 block">${D?"+"+T(w.totalSurplusRp||0):"Pcs"}</span>
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
            ${D?'<th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Dampak HPP</th>':'<th class="py-2.5 px-3 rounded-tr-xl text-right w-16">Satuan</th>'}
        </tr>
        `,k=S.length===0?['<tr><td colspan="7" class="py-8 text-center text-slate-500 italic">Semua stok fisik barang dalam kondisi berimbang (100% Sesuai / Selisih 0).</td></tr>']:S.map((A,P)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${P+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${i(A.productName)}
                ${A.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${i(A.variantName)}</span>`:""}
                ${A.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(A.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center font-mono text-slate-600">${A.systemStock} ${i(A.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${A.physicalStock} ${i(A.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-bold font-mono ${A.diff<0?"text-rose-600":"text-amber-600"}">
                ${A.diff<0?`−${Math.abs(A.diff)}`:`+${A.diff}`}
            </td>
            <td class="py-2 px-3 text-[10.5px]">
                <span class="font-bold text-slate-800">${i(A.reason==="salah_hitung"?"Koreksi Kasir":A.reason==="rusak"?"Barang Rusak":A.reason==="hilang"?"Barang Hilang":A.reason==="kadaluarsa"?"Expired":A.reason==="bonus"?"Bonus Supplier":A.reason)}</span>
                ${A.notes?`<span class="text-slate-500 block italic">"${i(A.notes)}"</span>`:""}
            </td>
            ${D?`
                <td class="py-2 px-3 text-right font-mono font-bold ${A.diff<0?"text-rose-600":"text-amber-600"}">
                    ${A.diff<0?"−":"+"}${T(Math.abs(A.diffValueHpp||0))}
                </td>`:`
                <td class="py-2 px-3 text-right text-slate-500">${i(A.unit||"pcs")}</td>
            `}
        </tr>
        `),N=w.notes?`
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs mb-5 text-slate-700">
            <b class="text-slate-900">Catatan Auditor:</b> ${i(w.notes)}
        </div>`:"",O=`
        <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Pemeriksa / Auditor:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(w.auditorName||"Petugas Auditor")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Kepala Gudang / Kasir:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">Gudang Toko</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Mengetahui (Owner Toko):</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(c.store?.name||"Pimpinan")}</span>
            </div>
        </div>
        `,L=ue({docTitle:"Berita Acara Stock Opname",docNumber:`#${I}`,docDate:C,kopHtml:g,metaHtml:v,tableHeaderHtml:$,rows:k,extraBlocksHtml:N,signaturesHtml:O,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});fe(L);return}if(e==="stock_opname_worksheet"){se("doc-modal-title","Preview Lembar Kerja Hitung Fisik (Worksheet)");const y=be("w-14 h-14"),w=V(new Date),p=c.products||[],C=[];p.forEach(k=>{!k||k.id==null||(k.variants&&k.variants.length>0?k.variants.forEach(N=>{C.push({name:k.name,variantName:N.name,sku:N.sku||k.sku||"",category:k.category||"Umum",unit:k.unit||"pcs",systemStock:parseFloat(N.stock)||0})}):C.push({name:k.name,variantName:"",sku:k.sku||"",category:k.category||"Umum",unit:k.unit||"pcs",systemStock:parseFloat(k.stock)||0}))});const I=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3">
                ${y}
                <div>
                    <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${i(c.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${i(c.store?.slogan||"Pusat Alat Teknik & Bangunan")}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${i(c.store?.address||"")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-wider text-slate-900 uppercase">LEMBAR KERJA AUDIT</h2>
                <h3 class="font-bold text-xs tracking-widest text-amber-600 uppercase">STOCK OPNAME FISIK RAK</h3>
                <p class="text-xs font-medium text-slate-500 mt-1">Tanggal Cetak: <b>${w}</b></p>
                <p class="text-xs font-medium text-slate-500">Total Item: <b>${C.length} Baris</b></p>
            </div>
        </div>
        `,D=`
        <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[10px] text-slate-600 mb-4 flex items-center justify-between">
            <span><b>Petunjuk:</b> Hitung fisik barang di rak/gudang secara teliti. Tulis angka aktual pada kolom <b>HASIL FISIK</b> dan beri catatan bila ada barang rusak/cacat.</span>
        </div>
        `,S=`
        <tr class="border-b-2 border-slate-800 text-[9.5px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">Cek</th>
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">No</th>
            <th class="py-2 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi Varian</th>
            <th class="py-2 px-2 border-r border-slate-700 w-28">Kategori / Rak</th>
            <th class="py-2 px-2 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2 px-2 text-center w-28 border-r border-slate-700 bg-amber-900/60">HASIL FISIK</th>
            <th class="py-2 px-3 text-left w-36">Kondisi &amp; Catatan</th>
        </tr>
        `,g=C.map((k,N)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200"><span class="inline-block w-3.5 h-3.5 border border-slate-400 rounded-sm"></span></td>
            <td class="py-2 px-2 text-center font-mono text-slate-400 border-r border-slate-200">${N+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 border-r border-slate-200 uppercase">
                ${i(k.name)}
                ${k.variantName?`<span class="bg-slate-100 text-slate-700 px-1 rounded text-[8.5px] border border-slate-300 ml-1 font-semibold">${i(k.variantName)}</span>`:""}
                ${k.sku?`<span class="text-slate-400 font-mono text-[8.5px] block">SKU: ${i(k.sku)}</span>`:""}
            </td>
            <td class="py-2 px-2 text-[10px] text-slate-600 border-r border-slate-200">
                ${i(k.category)}
            </td>
            <td class="py-2 px-2 text-center font-mono font-bold text-slate-600 border-r border-slate-200">
                ${k.systemStock} ${i(k.unit)}
            </td>
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200 bg-amber-50/40">
                <span class="inline-block w-20 h-5 border-b-2 border-slate-400"></span>
            </td>
            <td class="py-2 px-3 text-[10px] text-slate-400">
                <span class="inline-block w-full h-5 border-b border-slate-200"></span>
            </td>
        </tr>
        `),$=ue({docTitle:"Lembar Kerja Audit Rak",docNumber:`TOTAL ${C.length} ITEM`,docDate:w,kopHtml:I,metaHtml:D,tableHeaderHtml:S,rows:g,tableClass:"w-full text-left border-collapse mb-4 text-[11px]",signaturesHtml:`
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
        `,singlePageMax:16,itemsFirstPage:15,itemsMiddlePage:20,itemsLastPage:14});fe($);return}if(e==="tempo_invoice"){const y=t||window.cVOrd;let p=(window.cachedPiutangOrders||[]).find(E=>String(E.orderId)===String(y))||(window.gOrds||[]).find(E=>String(E.orderId)===String(y));if(!p&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(y)&&(p=window.lastPrintedOrder),!p){typeof window.showToast=="function"&&window.showToast("Data nota tagihan piutang tidak ditemukan!");return}se("doc-modal-title","Preview Nota Tagihan Piutang (Tempo)");const C=be("w-16 h-16"),I=V(p.dateString||p.timestamp),D=parseFloat(p.payment?.tempoBalance)||0,S=p.payment?.tempoPenaltyRate!==void 0?parseFloat(p.payment.tempoPenaltyRate):1,g=p.payment?.tempoPenaltyStopped===!0;let v=0;const $=p.payment?.tempoDueDate||0;let k=0,N=0,O=!1,L=!1;const A=Date.now();$>0&&(A>$?(k=Math.floor((A-$)/(24*60*60*1e3)),k>0&&(O=!0)):(N=Math.ceil(($-A)/(24*60*60*1e3)),N<=3&&(L=!0))),g?v=parseFloat(p.payment?.tempoFixedPenalty)||0:O&&(v=S/100*D*k);const P=D+v,x=p.payment?.installments||[],R=x.reduce((E,pe)=>E+(parseFloat(pe.amount)||0),0),_=p.payment?.grandTotal||D+R,W=p.payment?.paymentStatus==="lunas"||D<=0,F=!!(p.payment?.isPaylater||p.isPaylater||p.payment?.subMethod==="paylater");let U=F?"PAYLATER BERJALAN":"TEMPO BERJALAN",ee="text-blue-600 bg-blue-50 border-blue-200";W?(U="LUNAS SEPENUHNYA",ee="text-emerald-600 bg-emerald-50 border-emerald-300"):O?(U=`TERLAMBAT ${k} HARI`,ee="text-rose-600 bg-rose-50 border-rose-300"):L&&(U=`JATUH TEMPO H-${N<=0?"0":N}`,ee="text-amber-600 bg-amber-50 border-amber-300");const te=ct("font-mono text-xs"),ae=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${C}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(c.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(c.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(c.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(c.store?.wa||c.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">${F?"NOTA PUTRI PAYLATER":"NOTA TAGIHAN PIUTANG"}</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(p.orderId)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tgl Transaksi: ${I}</p>
                <div class="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${ee}">
                    ${i(U)}
                </div>
            </div>
        </div>
        `,nt=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ditujukan Kepada (Debitur / Pelanggan):</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-0.5">${i(p.customer?.name||"Pelanggan")}</p>
                ${p.customer?.wa||p.customer?.phone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> +${i(p.customer.wa||p.customer.phone)}</p>`:""}
                <p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${i(p.customer?.address||"Alamat di toko / pelanggan tempo")}</p>
                ${p.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${i(p.customer.note)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan Jatuh Tempo:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tanggal Jatuh Tempo:</span> <b class="text-slate-900 font-mono">${V($)}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Sistem Pembayaran:</span> <b class="${F?"text-emerald-700 font-bold":"text-slate-900"} uppercase">${F?"Putri PayLater Member VIP":"Tempo / Bertahap"}</b></p>
                ${F?`<p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tenor Cicilan:</span> <b class="text-emerald-800 font-bold uppercase">${p.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":p.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)"}</b></p>`:""}
                ${O?`<p class="text-xs font-bold text-rose-600 mb-1"><span class="text-slate-500">Status:</span> Lewat ${k} Hari (Denda ${S}%/hari)</p>`:""}
                <p class="text-xs font-semibold text-slate-700"><span class="text-slate-500">Kasir / Admin:</span> <b class="text-slate-900 uppercase">${i(p.cashierName||"Kasir Toko")}</b></p>
            </div>
        </div>
        `,ce=`
        <tr class="border-b-2 border-slate-800 text-[10.5px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Satuan</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `,Te=(p.items||[]).map((E,pe)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${pe+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(E.name)}
                ${E.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(E.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${zt(E.qty)} <span class="text-[10px] font-normal text-slate-500">${i(E.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${T(E.effectivePrice||E.price)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${T(E.subtotal||Math.round((parseFloat(E.qty)||0)*(parseFloat(E.effectivePrice||E.price)||0)))}</td>
        </tr>
        `);let xe="",ne=0,Ie="-",ot=1;if(F&&Array.isArray(p.payment?.paylaterSchedule)&&p.payment.paylaterSchedule.length>0){let E=0,pe=!1;const ha=p.payment.paylaterSchedule.map((J,ya)=>{const Dt=J.installmentIndex||J.installmentNo||J.installmentNumber||J.month||ya+1,Nt=parseFloat(J.pokok||J.principal)||0,It=parseFloat((J.adminFee||0)+(J.serviceFee||0))||0,it=parseFloat(J.total||J.totalMonthly||J.totalInstallment)||Nt+It;E+=it;const Rt=E,qe=J.dueDate||0,Ot=J.dueDateFormatted||J.dueDateStr||(qe?V(qe):"-");let We="";if(R>=Rt)We='<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-300">✓ LUNAS</span>';else if(pe)We='<span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200">BULAN DEPAN</span>';else{pe=!0,ot=Dt;const va=Math.max(0,Rt-R);ne=Math.min(va,it),Ie=Ot,We=qe&&A>qe?'<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 border border-rose-300">⚠️ JATUH TEMPO</span>':'<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">★ WAJIB BULAN INI</span>'}return`
                <tr class="hover:bg-slate-50">
                    <td class="py-2 px-3 text-center text-slate-800 font-bold">Bulan Ke-${Dt}</td>
                    <td class="py-2 px-3 font-mono font-medium text-slate-700 text-center">${Ot}</td>
                    <td class="py-2 px-3 text-right text-slate-600 font-mono">${T(Nt)}</td>
                    <td class="py-2 px-3 text-right text-slate-500 font-mono">${T(It)}</td>
                    <td class="py-2 px-3 text-right font-black font-mono text-slate-900">${T(it)}</td>
                    <td class="py-2 px-3 text-center">${We}</td>
                </tr>`}).join("");xe=`
            <div class="mb-5">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                        <i class="fa-solid fa-calendar-check text-emerald-600"></i> Tabel Rencana Angsuran Bulanan (${p.payment?.paylaterMonths||1}x Tenor):
                    </h3>
                    <span class="text-[10px] text-slate-500 font-medium italic">* Rincian transparan bulan ini &amp; bulan berikutnya</span>
                </div>
                <table class="w-full text-left border border-slate-200 rounded-xl overflow-hidden text-xs">
                    <thead class="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
                        <tr>
                            <th class="py-2.5 px-3 w-24 text-center border-b border-slate-200">Termin</th>
                            <th class="py-2.5 px-3 text-center border-b border-slate-200">Jatuh Tempo</th>
                            <th class="py-2.5 px-3 text-right border-b border-slate-200">Pokok</th>
                            <th class="py-2.5 px-3 text-right border-b border-slate-200">Biaya Layanan</th>
                            <th class="py-2.5 px-3 text-right border-b border-slate-200">Total Angsuran</th>
                            <th class="py-2.5 px-3 text-center w-36 border-b border-slate-200">Status Termin</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 font-mono">
                        ${ha}
                    </tbody>
                </table>
            </div>`}const Re=`
        ${xe}
        ${x.length>0?`
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
                    ${x.map((E,pe)=>`
                    <tr class="hover:bg-slate-50">
                        <td class="py-1.5 px-3 text-center text-slate-500">${pe+1}</td>
                        <td class="py-1.5 px-3 text-slate-700">${V(E.date)}</td>
                        <td class="py-1.5 px-3 uppercase text-slate-600 font-bold">${i(E.method||"Tunai")}</td>
                        <td class="py-1.5 px-3 text-right font-bold text-emerald-600">+ ${T(E.amount)}</td>
                        <td class="py-1.5 px-3 text-slate-500 text-[11px] font-sans">${i(E.note||"-")}</td>
                    </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>`:""}
        `,_e=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran Toko Putri:
                </h4>
                <div class="space-y-1.5 pt-0.5">${te}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi bukti transfer: <b>${i(c.store?.wa||c.store?.phone||"-")}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Harap mencantumkan Nomor Nota (#${i(p.orderId)}) pada berita transfer.</p>
                </div>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Awal:</span><span class="font-bold text-slate-800">${T(_)}</span></div>
                ${F?`<div class="flex justify-between text-emerald-600 font-bold"><span>Limit PayLater Terpakai:</span><span>${T(p.payment?.paylaterUsed||_-(p.payment?.tempoDp||p.payment?.dp||0))}</span></div>`:""}
                ${F&&p.payment?.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater:</span><span class="font-bold">+${T(p.payment.paylaterAdminFee)}</span></div>`:""}
                ${F&&p.payment?.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan:</span><span class="font-bold">+${T(p.payment.paylaterServiceFee)}</span></div>`:""}
                ${(parseFloat(p.payment?.tempoDp||p.payment?.dp)||0)>0?`<div class="flex justify-between text-slate-600"><span>Uang Muka (DP Dibayar):</span><span class="font-bold">${T(p.payment?.tempoDp||p.payment?.dp||0)}</span></div>`:""}
                ${R>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Masuk:</span><span>-${T(R)}</span></div>`:""}
                
                ${F&&ne>0&&ne<D?`
                <!-- KOTAK HIGHLIGHT ANGSURAN BULAN INI -->
                <div class="p-2.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 space-y-0.5">
                    <div class="flex justify-between items-center text-[9.5px] font-black uppercase tracking-wider text-amber-800">
                        <span>Angsuran Bulan Ini (Termin Ke-${ot}):</span>
                        <span class="font-mono text-[9px] bg-amber-200/80 px-1.5 py-0.5 rounded">Jatuh Tempo: ${Ie}</span>
                    </div>
                    <div class="flex justify-between items-center text-sm font-black font-mono pt-0.5">
                        <span>Wajib Dibayar Sekarang:</span>
                        <span class="text-amber-900 text-base font-black">${T(ne)}</span>
                    </div>
                </div>
                <div class="flex justify-between text-slate-500 text-[11px]">
                    <span>Sisa Termin Bulan Berikutnya:</span>
                    <span class="font-mono font-bold">${T(Math.max(0,D-ne))}</span>
                </div>
                `:""}

                <div class="flex justify-between text-slate-700 font-bold"><span>${F?"Total Sisa Pokok (Semua Tenor):":"Sisa Pokok Piutang:"}</span><span>${T(D)}</span></div>
                ${v>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Denda Keterlambatan:</span><span>+${T(v)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>${F?"TOTAL PELUNASAN PENUH:":"SISA WAJIB BAYAR:"}</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${T(W?0:P)}</span>
                </div>
            </div>
        </div>
        `,ze=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Yang Berhutang (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(p.customer?.name||"Pelanggan")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Kasir Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(c.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,rt=ue({docTitle:F?"Nota Putri PayLater":"Nota Tagihan Piutang",docNumber:`#${p.orderId}`,docDate:I,kopHtml:ae,metaHtml:nt,tableHeaderHtml:ce,rows:Te,extraBlocksHtml:Re,summaryHtml:_e,signaturesHtml:ze,singlePageMax:5,itemsFirstPage:5,itemsMiddlePage:12,itemsLastPage:4});fe(rt);return}if(e==="tempo_customer_ledger"){const y=String(t||"").trim(),p=(window.cachedPiutangOrders||[]).filter(U=>{const ee=String(U.customer?.phone||U.customer?.wa||"").replace(/\D/g,""),te=String(U.customer?.name||"").toLowerCase().trim(),ae=y.replace(/\D/g,"");return!!(ae.length>=8&&ee.includes(ae)||te&&y.toLowerCase().includes(te))});if(p.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada nota piutang aktif untuk pelanggan ini.");return}const C=p[0].customer||{},I=C.name||"Pelanggan",D=C.wa||C.phone||"-";se("doc-modal-title",`Kartu Piutang: ${I}`);const S=be("w-16 h-16"),g=V(Date.now());let v=0,$=0,k=0,N=0,O=0;const L=p.map((U,ee)=>{const te=parseFloat(U.payment?.tempoBalance)||0,ae=U.payment?.tempoPenaltyRate!==void 0?parseFloat(U.payment.tempoPenaltyRate):1,nt=U.payment?.tempoPenaltyStopped===!0;let ce=0;const Te=U.payment?.tempoDueDate||0;let xe=0,ne=!1;const Ie=Date.now();Te>0&&Ie>Te&&(xe=Math.floor((Ie-Te)/(24*60*60*1e3)),xe>0&&(ne=!0)),nt?ce=parseFloat(U.payment?.tempoFixedPenalty)||0:ne&&(ce=ae/100*te*xe);const Re=(U.payment?.installments||[]).reduce((rt,E)=>rt+(parseFloat(E.amount)||0),0),_e=U.payment?.grandTotal||te+Re,ze=te+ce;return v+=_e,$+=Re,k+=te,N+=ce,O+=ze,`
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="py-2.5 px-3 text-center font-mono text-slate-500">${ee+1}</td>
                <td class="py-2.5 px-3 font-mono font-bold text-slate-800">#${i(U.orderId)}</td>
                <td class="py-2.5 px-3 font-medium text-slate-600">${V(U.dateString||U.timestamp)}</td>
                <td class="py-2.5 px-3 font-mono ${ne?"text-rose-600 font-bold":"text-slate-700"}">${V(Te)} ${ne?`<span class="text-[9.5px] text-rose-500">(+${xe}h)</span>`:""}</td>
                <td class="py-2.5 px-3 text-right font-mono text-slate-600">${T(_e)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-600 font-bold">${T(Re)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-rose-600">${ce>0?T(ce):"-"}</td>
                <td class="py-2.5 px-3 text-right font-mono font-black text-slate-900">${T(ze)}</td>
            </tr>
            `}),A=ct("font-mono text-xs"),P=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${S}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(c.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(c.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(c.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(c.store?.wa||c.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">KARTU PIUTANG PELANGGAN</h2>
                <p class="text-xs font-bold text-slate-600 mt-1">STATEMENT OF ACCOUNT</p>
                <p class="text-xs font-semibold text-slate-500 mt-0.5">Dicetak: ${g}</p>
                <span class="inline-block mt-1.5 px-3 py-0.5 bg-amber-50 text-amber-700 border border-amber-300 rounded-full text-[11px] font-black uppercase tracking-wider">
                    ${p.length} NOTA BELUM LUNAS
                </span>
            </div>
        </div>
        `,x=`
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Informasi Debitur / Pelanggan:</h3>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="text-[11px] text-slate-500">Nama Pelanggan / Badan:</p>
                    <p class="font-bold text-base text-slate-900 uppercase">${i(I)}</p>
                </div>
                <div>
                    <p class="text-[11px] text-slate-500">Nomor WhatsApp / HP:</p>
                    <p class="font-mono font-bold text-base text-emerald-600">+${i(D)}</p>
                </div>
            </div>
        </div>
        `,R=`
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
        `,_=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Transfer Resmi Pelunasan:
                </h4>
                <div class="space-y-1 pt-0.5">${A}</div>
                <p class="text-[9.5px] text-slate-500 pt-1.5 border-t border-slate-200">Kartu piutang ini mencatat seluruh tagihan aktif per tanggal cetak.</p>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Keseluruhan:</span><span class="font-bold text-slate-800">${T(v)}</span></div>
                <div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Diterima (-):</span><span>-${T($)}</span></div>
                <div class="flex justify-between text-slate-700 font-bold"><span>Total Sisa Pokok Piutang:</span><span>${T(k)}</span></div>
                ${N>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Total Denda (+):</span><span>+${T(N)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL AKUMULASI PIUTANG:</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${T(O)}</span>
                </div>
            </div>
        </div>
        `,W=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Penerima Tagihan (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(I)}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Pemilik Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(c.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,F=ue({docTitle:"Kartu Piutang Pelanggan",docNumber:"STATEMENT OF ACCOUNT",docDate:g,kopHtml:P,metaHtml:x,tableHeaderHtml:R,rows:L,summaryHtml:_,signaturesHtml:W,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});fe(F);return}const n=t||window.cVOrd,a=(window.gOrds||[]).find(y=>String(y.orderId)===String(n))||(window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(n)?window.lastPrintedOrder:null);if(!a){typeof window.showToast=="function"&&window.showToast("Data pesanan tidak ditemukan!");return}se("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const s=a.dateString?new Date(a.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"",r=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${be("w-16 h-16")}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(c.store?.name||"TOKO PUTRI")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(c.store?.slogan||"General Supplier")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(c.store?.address||"Alamat fisik toko")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(c.store?.wa||"-")}</p>
                ${a.payment?.taxNpwp||c.store?.taxNpwp?`<p class="text-xs font-semibold text-slate-600 mt-0.5"><i class="fa-solid fa-id-card text-blue-500"></i> NPWP Toko: <span class="font-mono">${i(a.payment?.taxNpwp||c.store.taxNpwp)}</span></p>`:""}
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl sm:text-3xl tracking-widest ${e==="invoice"?"text-blue-600":"text-amber-600"} uppercase">${e==="invoice"?a.payment?.method==="tempo"?"PROFORMA INVOICE":"INVOICE":"SURAT JALAN"}</h2>
            <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(a.orderId)}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${s}</p>
        </div>
    </div>
    `,l=`
    <div class="grid grid-cols-2 gap-6 mb-5">
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ditagihkan Kepada (Pemesan):</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-0.5">${i(a.customer?.name||"Guest")}${a.customer?.wa?` <span class="text-xs font-mono font-medium text-slate-500">(+${i(a.customer.wa)})</span>`:""}</p>
            <p class="text-xs font-medium text-slate-700 leading-relaxed mb-1">${i(a.customer?.address||"-")}</p>
            ${a.isDropPoint&&a.dropPoint?`
            <div class="mt-2 pt-2 border-t border-rose-200 bg-rose-50/80 p-2.5 rounded-xl border border-dashed text-left">
                <div class="flex items-center gap-1.5 text-rose-700 font-bold text-[11px] uppercase tracking-wider mb-0.5">
                    <i class="fa-solid fa-location-dot"></i> Pengantaran ke Lokasi Berbeda (Drop-Point):
                </div>
                <p class="font-bold text-xs text-slate-900 uppercase">${i(a.dropPoint.name||"-")}${a.dropPoint.wa?` <span class="font-mono text-[11px] font-semibold text-rose-600">(+${i(a.dropPoint.wa)})</span>`:""}</p>
                <p class="text-[11px] font-medium text-slate-700 mt-0.5 leading-relaxed">${i(a.dropPoint.address||"-")}</p>
            </div>
            `:""}
            ${a.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-xl border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky"></i> Catatan: ${i(a.customer.note)}</p>`:""}
        </div>
        
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-center space-y-2.5">
            <div class="flex justify-between items-center border-b border-slate-200 pb-1.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Metode Pengiriman</span>
                <span class="text-xs font-bold text-slate-800 uppercase">${i(a.isDropPoint?"Drop-Point (Lokasi Berbeda)":a.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko")}</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-200 pb-1.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Sistem Pembayaran</span>
                <span class="text-xs font-bold text-slate-800 uppercase">${i(a.payment?.method||"cash")}</span>
            </div>
            <div class="flex justify-between items-center pb-0.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Bayar</span>
                <span class="text-xs font-bold ${a.status==="Selesai"?"text-emerald-600":"text-rose-600"} uppercase">${a.status==="Selesai"?"LUNAS":"BELUM LUNAS"}</span>
            </div>
        </div>
    </div>
    `,d=Array.isArray(a.items)?a.items:Array.isArray(a.cart)?a.cart:[];if(e==="invoice"){const y=`
        <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
            <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Produk &amp; Varian</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Sat.</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total</th>
        </tr>
        `,w=d.map((g,v)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${v+1}</td>
            <td class="py-2.5 px-3 font-bold flex items-center gap-1.5">
                ${i(g.name)} 
                ${g.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${i(g.variantName)}</span>`:""}
                ${g.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${i(g.colorCode)};"></span>`:""}
                ${g.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${i(g.poTime)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${parseFloat(g.qty)} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(g.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${T(g.effectivePrice)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${T(g.effectivePrice*parseFloat(g.qty))}</td>
        </tr>
        `);let p="";if((a.pointsEarned>0||a.finalMemberPoints!==void 0&&a.finalMemberPoints!==null)&&(p+=`
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 flex items-center gap-4">
                <div class="w-8 h-8 rounded-lg bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
                ${a.pointsEarned>0?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-sm text-amber-700">+${a.pointsEarned}</p></div>`:""}
                ${a.finalMemberPoints!==void 0&&a.finalMemberPoints!==null?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Member</p><p class="font-bold text-sm text-amber-700">${a.finalMemberPoints}</p></div>`:""}
            </div>`),a.claimedReward&&(p+=`
            <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-3 mb-4 flex items-center justify-between gap-4">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                    <div>
                        <p class="text-[9px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${a.claimedReward.pointsCost} Poin)</p>
                        <p class="font-bold text-xs text-violet-800 uppercase">${i(a.claimedReward.name)}</p>
                    </div>
                </div>
                <span class="text-[9.5px] font-bold px-2.5 py-1 rounded-lg bg-violet-600 text-white uppercase tracking-wider">${i(a.claimedReward.status==="ready"?"SERTAKAN PENGIRIMAN":"KLAIM RESMI")}</span>
            </div>`),a.payment?.method==="tempo")if(!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater")){const v=a.payment?.paylaterMonths||1,$=a.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":a.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)",k=Array.isArray(a.payment?.paylaterSchedule)&&a.payment.paylaterSchedule.length>0;let N="";if(k){Math.max(0,parseFloat(a.payment?.tempoBalance)||0);const L=(a.payment?.installments||[]).reduce((x,R)=>x+(parseFloat(R.amount)||0),0);let A=0,P=!1;N=`
                    <div class="mt-2.5 pt-2 border-t border-emerald-300/60">
                        <div class="flex items-center justify-between mb-1.5">
                            <p class="text-[9.5px] font-black uppercase tracking-wider text-emerald-900 flex items-center gap-1">
                                <i class="fa-solid fa-calendar-check text-emerald-700"></i> Jadwal Angsuran Bulanan (${a.payment?.paylaterMonths||1}x Tenor):
                            </p>
                            <span class="text-[8.5px] text-emerald-700 font-semibold italic">* Bulan berjalan vs bulan berikutnya</span>
                        </div>
                        <table class="w-full text-left text-[9.5px] border border-emerald-300 rounded-lg overflow-hidden bg-white">
                            <thead class="bg-emerald-100 text-emerald-900 font-black uppercase tracking-wider text-[8.5px]">
                                <tr>
                                    <th class="py-1 px-2 border-b border-emerald-300 text-center w-20">Termin</th>
                                    <th class="py-1 px-2 border-b border-emerald-300 text-center">Jatuh Tempo</th>
                                    <th class="py-1 px-2 border-b border-emerald-300 text-right">Pokok</th>
                                    <th class="py-1 px-2 border-b border-emerald-300 text-right">Layanan</th>
                                    <th class="py-1 px-2 border-b border-emerald-300 text-right">Total Angsuran</th>
                                    <th class="py-1 px-2 border-b border-emerald-300 text-center w-28">Status</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-emerald-200 font-mono">
                                ${a.payment.paylaterSchedule.map((x,R)=>{const _=x.installmentIndex||x.installmentNo||x.installmentNumber||x.month||R+1,W=parseFloat(x.pokok||x.principal)||0,F=parseFloat((x.adminFee||0)+(x.serviceFee||0))||0,U=parseFloat(x.total||x.totalMonthly||x.totalInstallment)||W+F;A+=U;const ee=x.dueDate||0,te=x.dueDateFormatted||x.dueDateStr||(ee?V(ee):"-");let ae="";return L>=A?ae='<span class="px-1.5 py-0.2 rounded text-[8px] font-bold uppercase bg-emerald-100 text-emerald-700 border border-emerald-300">✓ LUNAS</span>':P?ae='<span class="px-1.5 py-0.2 rounded text-[8px] font-medium uppercase bg-slate-100 text-slate-500">MENDATANG</span>':(P=!0,ae='<span class="px-1.5 py-0.2 rounded text-[8px] font-black uppercase bg-amber-100 text-amber-800 border border-amber-300">★ BULAN INI</span>'),`
                                    <tr>
                                        <td class="py-1 px-2 font-bold text-slate-800 text-center font-sans">Bulan Ke-${_}</td>
                                        <td class="py-1 px-2 text-slate-600 text-center">${te}</td>
                                        <td class="py-1 px-2 text-right text-slate-600">${T(W)}</td>
                                        <td class="py-1 px-2 text-right text-slate-500">${T(F)}</td>
                                        <td class="py-1 px-2 font-black text-right text-emerald-800">${T(U)}</td>
                                        <td class="py-1 px-2 text-center font-sans">${ae}</td>
                                    </tr>`}).join("")}
                            </tbody>
                        </table>
                    </div>`}p+=`
                <div class="mb-4 border border-emerald-200 bg-emerald-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-emerald-800 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-handshake text-emerald-600 mr-1"></i> Putri PayLater (${$}):</h4>
                    <p class="text-[9.5px] text-emerald-700 font-semibold leading-relaxed">
                        Sistem pembayaran cicilan resmi Toko Putri tanpa biaya tersembunyi. Jatuh Tempo Pertama: ${a.payment.tempoDueDate?V(a.payment.tempoDueDate):"-"}.
                        ${a.payment.paylaterMonthlyInstallment?` Angsuran: <b>${T(a.payment.paylaterMonthlyInstallment)} / bulan</b> (${v}x).`:""}
                    </p>
                    ${N}
                </div>`}else p+=`
                <div class="mb-4 border border-pink-200 bg-pink-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-pink-700 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo:</h4>
                    <p class="text-[9.5px] text-pink-600 font-semibold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${a.payment.tempoDueDate?V(a.payment.tempoDueDate):"-"}). Keterlambatan dikenakan denda sesuai regulasi toko.</p>
                </div>`;const I=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran Toko Putri:
                </h4>
                <div class="space-y-1.5 pt-0.5">${ct("font-mono text-xs")}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi pembayaran via WhatsApp: <b>${i(c.store?.wa||c.store?.phone||"-")}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Terima kasih atas transaksi Anda di ${i(c.store?.name||"Toko Putri")}.</p>
                </div>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk</span><span class="font-mono">${T(a.payment?.subtotal)}</span></div>
                ${a.payment?.shippingCost?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim</span><span class="font-mono">${T(a.payment.shippingCost)}</span></div>`:""}
                ${a.payment?.shippingDiscount?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Ongkir</span><span class="font-mono">-${T(a.payment.shippingDiscount)}</span></div>`:""}
                ${a.payment?.productDiscount?`<div class="flex justify-between text-rose-600 font-bold"><span>Diskon Produk</span><span class="font-mono">-${T(a.payment.productDiscount)}</span></div>`:""}
                ${a.payment?.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater</span><span class="font-mono">+${T(a.payment.paylaterAdminFee)}</span></div>`:""}
                ${a.payment?.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan</span><span class="font-mono">+${T(a.payment.paylaterServiceFee)}</span></div>`:""}
                ${(()=>{if(!((a.payment?.ppnEnabled||a.payment?.ppnShowZero||a.payment?.ppnRate===0||a.payment?.ppnAmount&&a.payment.ppnAmount>0)&&(c.store?.ppnEnabled||a.payment?.ppnEnabled)))return"";const v=a.payment?.ppnType==="inclusive",$=a.payment?.ppnRate!==void 0?a.payment.ppnRate:c.store?.ppnRate||0,k=a.payment?.ppnAmount||0,N=a.payment?.ppnLabel||`${v?"Termasuk PPN":"PPN"} (${$}%)`,O=(a.payment?.subtotal||0)-(a.payment?.productDiscount||0)+(a.payment?.shippingCost||0)-(a.payment?.shippingDiscount||0),L=a.payment?.dppAmount!==void 0?a.payment.dppAmount:v&&$>0?Math.round(O*100/(100+$)):Math.max(0,O);return`
                    <div class="flex justify-between text-slate-600"><span>DPP</span><span class="font-mono">${T(L)}</span></div>
                    <div class="flex justify-between text-amber-600 font-bold"><span>${N}</span><span class="font-mono">${k>0?(v?"":"+")+T(k):"Rp 0"}</span></div>
                    `})()}
                
                <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-2 shadow-xs">
                    <span class="font-bold text-xs uppercase tracking-widest">Grand Total</span>
                    <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${T(a.payment?.grandTotal)}</span>
                </div>
                ${a.payment?.method==="tempo"?`
                <div class="flex justify-between text-emerald-600 font-bold"><span>${a.payment?.isPaylater||a.payment?.subMethod==="paylater"?"Limit Terpakai / DP":"Uang Muka (DP)"}</span><span class="font-mono">${T(a.payment?.tempoDp||0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-2.5 rounded-xl mt-1 border border-rose-200">
                    <span class="font-bold text-xs uppercase tracking-widest">${a.payment?.isPaylater||a.payment?.subMethod==="paylater"?"Sisa Tagihan PayLater":"Sisa Tagihan"}</span>
                    <span class="font-mono text-sm font-black tracking-tight">${T(a.payment?.tempoBalance||0)}</span>
                </div>
                ${(a.payment?.isPaylater||a.payment?.subMethod==="paylater")&&a.payment?.paylaterMonthlyInstallment?`
                <div class="flex justify-between text-[11px] text-emerald-700 font-bold">
                    <span>Angsuran per Bulan (${a.payment?.paylaterMonths||1}x)</span>
                    <span class="font-mono font-black">${T(a.payment.paylaterMonthlyInstallment)}/bln</span>
                </div>
                `:""}
                `:""}
            </div>
        </div>
        `,D=`
        <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Penerima / Klien:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900">${i(a.customer?.name||"Nama Terang & TTD")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Sopir / Pengantar:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900">Nama Terang &amp; TTD</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Hormat Kami:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(c.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,S=ue({docTitle:a.payment?.method==="tempo"?"Proforma Invoice":"Faktur Invoice",docNumber:`#${a.orderId}`,docDate:s,kopHtml:r,metaHtml:l,tableHeaderHtml:y,rows:w,extraBlocksHtml:p,summaryHtml:I,signaturesHtml:D,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:12,itemsLastPage:5});fe(S);return}const m=`
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Nama &amp; Spesifikasi Barang</th>
        <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Satuan</th>
        <th class="py-2.5 px-3 rounded-tr-xl text-center w-24">Ceklis Gudang</th>
    </tr>
    `,b=d.map((y,w)=>`
    <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3 text-center font-mono text-slate-500">${w+1}</td>
        <td class="py-2.5 px-3 font-bold uppercase flex items-center gap-1.5">
            ${i(y.name)} 
            ${y.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${i(y.variantName)}</span>`:""}
            ${y.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${i(y.colorCode)};"></span>`:""}
            ${y.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${i(y.poTime)}</span>`:""}
        </td>
        <td class="py-2.5 px-3 text-center font-bold text-base text-slate-800">${parseFloat(y.qty)}</td>
        <td class="py-2.5 px-3 text-center text-slate-500 font-bold uppercase text-[11px]">${i(y.unit||"pcs")}</td>
        <td class="py-2.5 px-3 text-center"><div class="w-4 h-4 border-2 border-slate-400 mx-auto rounded-sm shadow-inner"></div></td>
    </tr>
    `),u=`
    <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Penerima / Klien:</span>
            <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">${i(a.customer?.name||"Nama Terang & TTD")}</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Sopir / Pengantar:</span>
            <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">Nama Terang &amp; TTD</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Hormat Kami:</span>
            <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900 uppercase">${i(c.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,h=ue({docTitle:"Surat Jalan Pengiriman",docNumber:`#${a.orderId}`,docDate:s,kopHtml:r,metaHtml:l,tableHeaderHtml:m,rows:b,signaturesHtml:u,singlePageMax:8,itemsFirstPage:8,itemsMiddlePage:16,itemsLastPage:9});fe(h)},dn=()=>{const e=window.cart||[];if(!e||e.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}he="sph";const t="SPH-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.floor(1e3+Math.random()*9e3),n=V(new Date),a=V(new Date(Date.now()+14*24*60*60*1e3));se("doc-modal-title","Surat Penawaran Harga (SPH)");const s=be("w-16 h-16"),o=typeof window.getEffP=="function"?window.getEffP:p=>p.price||0;let r=0;const l=e.map((p,C)=>{const I=parseFloat(p.qty)||1,D=o(p),S=I*D;return r+=S,`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${C+1}</td>
            <td class="py-2.5 px-3 font-bold">
                ${i(p.name)}
                ${p.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${i(p.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${I} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(p.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${T(D)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${T(S)}</td>
        </tr>
        `}),d=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${s}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(c.store?.name||"Toko Putri")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(c.store?.slogan||"General Supplier & Alat Teknik")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(c.store?.address||"Alamat fisik toko")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(c.store?.wa||"-")}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl tracking-widest text-emerald-600 uppercase">PENAWARAN HARGA</h2>
            <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${t}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${n}</p>
            <span class="inline-block mt-1 px-2.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-300 rounded text-[10px] font-bold uppercase tracking-wider">
                Berlaku s/d: ${a}
            </span>
        </div>
    </div>
    `,m=`
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
    `,b=`
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Barang &amp; Spesifikasi</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
        <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Satuan</th>
        <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total Estimasi</th>
    </tr>
    `,u=`
    <div class="flex justify-end mb-4">
        <div class="w-1/2 md:w-[45%] space-y-1.5 text-xs font-bold text-slate-700">
            <div class="flex justify-between px-3"><span>Subtotal Estimasi</span><span class="font-mono">${T(r)}</span></div>
            <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-1 shadow-xs">
                <span class="font-bold text-xs uppercase tracking-widest">Total Penawaran</span>
                <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${T(r)}</span>
            </div>
        </div>
    </div>
    `,h=`
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
            <span class="font-bold text-slate-900 uppercase">${i(c.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,w=ue({docTitle:"Surat Penawaran Harga",docNumber:`#${t}`,docDate:n,kopHtml:d,metaHtml:m,tableHeaderHtml:b,rows:l,summaryHtml:u,extraBlocksHtml:h,signaturesHtml:y,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:5});fe(w)},fe=e=>{const t=f("doc-paper-content");if(!t)return;t.innerHTML=e.join("");const n=e.length,a=f("doc-page-count-badge");a&&(a.textContent=`${n} Halaman A4`),cn(n)},cn=(e=1)=>{const t=f("doc-preview-modal"),n=f("doc-preview-modal-box");t&&t.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),Xe(t,n),Ct()},Ct=()=>{const e=f("doc-paper-scroll-area"),t=f("doc-paper-content"),n=f("doc-paper-wrapper");if(!e||!t||!n)return;const a=794,s=window.innerWidth<640?12:32,o=e.clientWidth-s,r=Math.min(1,Math.max(.2,o/a));t.style.transform=`translateX(-50%) scale(${r})`;const l=t.offsetHeight||t.scrollHeight;n.style.height=l*r+48+"px"};window.addEventListener("resize",()=>{const e=f("doc-preview-modal");e&&!e.classList.contains("hidden")&&Ct()});const pn=(e=!1)=>{const t=f("doc-preview-modal"),n=f("doc-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{ke(t,n)}):ke(t,n))},mn=()=>{const e=f("doc-paper-content"),t=e?e.innerHTML:"";if(!t){typeof window.showToast=="function"&&window.showToast("Tidak ada dokumen yang dicetak!");return}if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){let o=f("a4-print-section");o||(o=document.createElement("div"),o.id="a4-print-section",document.body.appendChild(o)),o.innerHTML=t,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500);return}const n=window.open("","_blank"),s=`<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>${i(he==="invoice"?"Faktur Invoice":he==="po"?"Purchase Order":he==="sph"?"Penawaran Harga":he==="stock_opname"?"Berita Acara Stock Opname":"Dokumen Resmi A4")} - Cetak A4 Standar Presisi</title>
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
</html>`;if(!n){let o=document.getElementById("a4-print-fallback-iframe");o||(o=document.createElement("iframe"),o.id="a4-print-fallback-iframe",o.style.position="fixed",o.style.right="0",o.style.bottom="0",o.style.width="0",o.style.height="0",o.style.border="0",o.style.opacity="0",document.body.appendChild(o));const r=o.contentWindow.document;r.open(),r.write(s),r.close(),setTimeout(()=>{try{o.contentWindow.focus(),o.contentWindow.print()}catch(l){console.warn("[DocPrint] Fallback iframe print error:",l)}},650);return}n.document.open(),n.document.write(s),n.document.close()},un=async e=>{if(!xa){dt(!0),Je(e==="image"?"Membuat Gambar HD...":"Menyusun Dokumen PDF A4...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{pt(),dt(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const t=f("doc-paper-content");if(!t)throw new Error("Elemen dokumen tidak ditemukan.");let n=Array.from(t.querySelectorAll(".a4-page"));n.length===0&&(n=[t]);const a=window.cVOrd||Date.now().toString(36).toUpperCase(),s=`${he.toUpperCase()}_${a}`,o=async r=>{const l=document.createElement("div");l.style.position="fixed",l.style.top="-9999px",l.style.left="-9999px",l.style.width="794px",l.style.height="1123px",l.style.backgroundColor="#ffffff",l.style.overflow="hidden",l.style.zIndex="-9999";const d=r.cloneNode(!0);d.style.margin="0 auto",d.style.boxShadow="none",d.style.border="none",d.style.borderRadius="0",d.style.transform="none",d.style.width="794px",d.style.height="1123px",d.style.minHeight="1123px",d.style.maxHeight="1123px",d.style.overflow="hidden",l.appendChild(d),document.body.appendChild(l);const m=Array.from(d.querySelectorAll("img"));await Promise.all(m.map(u=>u.complete?Promise.resolve():new Promise(h=>{u.addEventListener("load",h,{once:!0}),u.addEventListener("error",h,{once:!0})}))),await new Promise(u=>setTimeout(u,200));const b=await html2canvas(l,{scale:2,useCORS:!0,backgroundColor:"#ffffff",width:794,height:1123,windowWidth:794,windowHeight:1123});return document.body.removeChild(l),b};if(e==="image")if(n.length===1){const l=(await o(n[0])).toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(l,`${s}.png`,"image/png");else{const d=document.createElement("a");d.download=`${s}.png`,d.href=l,d.click()}typeof window.showToast=="function"&&window.showToast("Gambar A4 Presisi Berhasil Disimpan!")}else{for(let r=0;r<n.length;r++){Je(`Menyimpan Gambar Halaman ${r+1} dari ${n.length}...`);const d=(await o(n[r])).toDataURL("image/png",1),m=`${s}_Hal_${r+1}.png`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(d,m,"image/png");else{const b=document.createElement("a");b.download=m,b.href=d,b.click()}await new Promise(b=>setTimeout(b,250))}typeof window.showToast=="function"&&window.showToast(`Berhasil menyimpan ${n.length} gambar halaman A4!`)}else{const r=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,l=new r({orientation:"portrait",unit:"mm",format:"a4"});for(let d=0;d<n.length;d++){Je(`Menyusun PDF Hal ${d+1} dari ${n.length}...`);const b=(await o(n[d])).toDataURL("image/jpeg",.95);d>0&&l.addPage("a4","portrait"),l.addImage(b,"JPEG",0,0,210,297,void 0,"FAST")}window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"?window.AndroidNativeApp.saveOrShareFile(l.output("datauristring"),`${s}.pdf`,"application/pdf"):l.save(`${s}.pdf`),typeof window.showToast=="function"&&window.showToast(`File PDF Standar A4 (${n.length} Halaman) Berhasil Disimpan!`)}}catch(t){console.error("Export Error: ",t),typeof window.showToast=="function"&&window.showToast(t&&t.message?`Gagal: ${t.message}`:"Gagal memproses dokumen.")}finally{pt(),dt(!1)}}};window.openDocPreview=ln;window.openCartSPHPreview=dn;window.fitDocPreview=Ct;window.closeDocPreviewModal=pn;window.printDocA4=mn;window.exportDocFile=un;export{Ba as $,ys as A,yn as B,hs as C,se as D,us as E,Jt as F,lo as G,ws as H,no as I,ge as J,_a as K,za as L,ks as M,Ga as N,_n as O,Fn as P,Hn as Q,q as R,bs as S,Ha as T,Fa as U,In as V,Na as W,Ra as X,Oa as Y,Ia as Z,Ea as _,c as a,Ua as a$,$n as a0,Mn as a1,Ln as a2,Cn as a3,Dn as a4,Nn as a5,et as a6,ta as a7,so as a8,ao as a9,qn as aA,aa as aB,Ps as aC,Za as aD,ts as aE,Yn as aF,Us as aG,Hs as aH,Wn as aI,En as aJ,H as aK,vt as aL,Xa as aM,kn as aN,Pn as aO,Y as aP,Is as aQ,ro as aR,io as aS,gn as aT,to as aU,Pe as aV,ss as aW,hn as aX,vn as aY,Da as aZ,Rn as a_,Sa as aa,xs as ab,$a as ac,ga as ad,Ne as ae,je as af,G as ag,nn as ah,Ja as ai,Zn as aj,Ya as ak,Xn as al,Qa as am,eo as an,as as ao,ie as ap,sn as aq,Vt as ar,Qn as as,On as at,es as au,Gn as av,ye as aw,co as ax,Bt as ay,oo as az,ea as b,Ka as b0,ja as b1,qa as b2,Wa as b3,Va as b4,zn as b5,ns as b6,xn as b7,An as b8,Bn as b9,Un as ba,Kn as bb,jn as bc,Jn as bd,yt as be,an as bf,rn as bg,Gt as c,Ma as d,f as e,T as f,gs as g,Xt as h,i,Vn as j,oe as k,Je as l,vs as m,pt as n,Xe as o,La as p,re as q,tt as r,Zt as s,ke as t,B as u,ve as v,Tn as w,Sn as x,Ca as y,Ze as z};
