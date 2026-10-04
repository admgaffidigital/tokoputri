const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js","assets/module-pos-DSMDjxYd.js"])))=>i.map(i=>d[i]);
import{f as Me}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const la="modulepreload",da=function(e){return"/"+e},Pt={},Nt=function(t,s,a){let n=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");n=Promise.allSettled(s.map(d=>{if(d=da(d),d in Pt)return;Pt[d]=!0;const p=d.endsWith(".css"),w=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${w}`))return;const f=document.createElement("link");if(f.rel=p?"stylesheet":la,p||(f.as="script"),f.crossOrigin="",f.href=d,l&&f.setAttribute("nonce",l),document.head.appendChild(f),p)return new Promise((g,h)=>{f.addEventListener("load",g),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return n.then(r=>{for(const l of r||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},ca={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const pa=window.FIREBASE_CONFIG||ca;Me.apps.length||Me.initializeApp(pa);const te=Me.firestore(),Ve=Me.auth();typeof window<"u"&&(window.firebase=Me,window.db=te,window.auth=Ve);try{te.settings({ignoreUndefinedProperties:!0,experimentalAutoDetectLongPolling:!0,merge:!0})}catch{}typeof window<"u"&&(window.addEventListener("online",()=>{try{te.enableNetwork().catch(()=>{})}catch{}}),window.addEventListener("offline",()=>{try{te.disableNetwork().catch(()=>{})}catch{}}));let ma=null;const en=()=>{Nt(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{ma=Me.analytics()}catch{}}).catch(()=>{})},ae="K2ijSERTT2dg27yYGTEgn6XHSnW2",ua={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"pill",brandStyle:"logo",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showHeroSlide:!0,heroMascotImg:"/putri_mascot_anim.gif",heroBadgeText:"Siap Melayani",heroWelcomeTag:"SELAMAT DATANG",heroTitle:"",heroSubtitle:"",showRewardCatalog:!0,showScrollTopButton:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,paylater:{enabled:!0,minOrder:2e4,maxOrder:1e7,noticeText:"Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.",tenors:{"30d":{enabled:!0,label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:"flat",adminFeeValue:0,serviceFeeType:"flat",serviceFeeValue:0},"2m":{enabled:!0,label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:"flat",adminFeeValue:1500,serviceFeeType:"percent",serviceFeeValue:1.5},"3m":{enabled:!0,label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:"flat",adminFeeValue:2500,serviceFeeType:"percent",serviceFeeValue:2.5}}},terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],productOrder:[],suppliers:[],purchases:[],expenses:[],stockOpnameHistory:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let m=JSON.parse(JSON.stringify(ua)),Ot=[],Et=[],H=[];try{const e=localStorage.getItem("freshmart_cart");e&&(Ot=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(Et=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(H=JSON.parse(e)||[])}catch{}let fa={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},wa=null,ba=null,ga=null,xa="Semua Produk",ha="Semua Jenis",ya="Semua Merek",va="",ka="newest",Pa="grid",Ta=1,Sa=12,$a="orders",Aa="",Ma=null,Ca=null,La=0,Da=[],Ia=[],Ra=[],Na=1,fe=[],Oa=null,Ea=null,Ba=null,xe=[],Ha=[],ge=null,Fa=null,Ka=!1,Ua="all",ja="today",_a=null,za=null;const tn=e=>{_a=e},an=e=>{m=e},sn=e=>{Ot=e},nn=e=>{Et=e},on=e=>{H=e},rn=e=>{fa=e},ln=e=>{wa=e},dn=e=>{ba=e},cn=e=>{ga=e},pn=e=>{xa=e},mn=e=>{ha=e},un=e=>{ya=e},fn=e=>{va=e},wn=e=>{ka=e},bn=e=>{Pa=e},gn=e=>{Ta=e},xn=e=>{Sa=e},hn=e=>{$a=e},yn=e=>{Aa=e},vn=e=>{Ma=e},kn=e=>{Ca=e},Pn=e=>{La=e},Tn=e=>{Da=e},Sn=e=>{Ia=e},$n=e=>{Ra=e},An=e=>{Na=e},Mn=e=>{fe=e},Cn=e=>{xe=e},Ln=e=>{Ha=e},Tt=e=>{ge=e},Dn=e=>{Fa=e},In=e=>{Ka=e},Rn=e=>{za=e},Nn=e=>{Ua=e},On=e=>{ja=e},En=e=>{Oa=e},Bn=e=>{Ea=e},Hn=e=>{Ba=e};let Bt=!1;if(typeof window<"u"){const e=()=>{Bt=!0,window.__hasUserInteracted=!0};["pointerdown","touchstart","mousedown","keydown"].forEach(t=>{window.addEventListener(t,e,{capture:!0,once:!0})}),window.__hasUserInteracted=!1}const ut=()=>typeof navigator<"u"&&navigator.userActivation?navigator.userActivation.hasBeenActive:!!(Bt||typeof window<"u"&&window.__hasUserInteracted);typeof window<"u"&&(window.checkUserGesture=ut);const ye=(e="light")=>{try{const t=window.Capacitor?.Plugins?.Haptics;if(t){e==="light"||e==="selection"?t.impact({style:"LIGHT"}).catch(()=>{}):e==="medium"?t.impact({style:"MEDIUM"}).catch(()=>{}):e==="heavy"?t.impact({style:"HEAVY"}).catch(()=>{}):e==="success"?t.notification({type:"SUCCESS"}).catch(()=>{}):e==="warning"?t.notification({type:"WARNING"}).catch(()=>{}):e==="error"&&t.notification({type:"ERROR"}).catch(()=>{});return}if(typeof navigator<"u"&&typeof navigator.vibrate=="function"){if(!ut())return;e==="light"||e==="selection"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="heavy"?navigator.vibrate(45):e==="success"?navigator.vibrate([15,30,20]):e==="warning"?navigator.vibrate([30,40,30]):e==="error"&&navigator.vibrate([40,50,40,50,40])}}catch{}};typeof window<"u"&&(window.triggerHaptic=ye);const qa=e=>{if(e)switch(e){case"product-modal":typeof window.closeProductModal=="function"&&window.closeProductModal();break;case"pos-variant-sheet":typeof window.closePOSVariantSheet=="function"&&window.closePOSVariantSheet();break;case"variant-preview-modal":typeof window.closeVariantPreviewModal=="function"&&window.closeVariantPreviewModal();break;case"custom-confirm-modal":typeof window.closeConfirm=="function"&&window.closeConfirm();break;case"scanner-modal":typeof window.closeCameraScanner=="function"&&window.closeCameraScanner();break;case"modal-tempo-detail":typeof window.closeTempoDetailModal=="function"&&window.closeTempoDetailModal();break;case"modal-tempo-payment":typeof window.closeTempoPaymentModal=="function"&&window.closeTempoPaymentModal();break;case"modal-tempo-penalty":typeof window.closeTempoPenaltyModal=="function"&&window.closeTempoPenaltyModal();break;case"modal-supplier-detail":typeof window.closeSupplierDetailModal=="function"&&window.closeSupplierDetailModal();break;case"modal-supplier-form":typeof window.closeSupplierFormModal=="function"&&window.closeSupplierFormModal();break;case"modal-po-form":typeof window.closePurchaseFormModal=="function"&&window.closePurchaseFormModal();break;case"modal-po-detail":typeof window.closePurchaseDetailModal=="function"&&window.closePurchaseDetailModal();break;case"modal-po-payment":typeof window.closePurchasePaymentModal=="function"&&window.closePurchasePaymentModal();break;case"modal-po-product-picker":typeof window.closePurchasePickerModal=="function"&&window.closePurchasePickerModal();break;case"quick-menu-modal":typeof window.closeQuickMenuModal=="function"&&window.closeQuickMenuModal();break;case"pos-login-modal":typeof window.closePOSLoginModal=="function"&&window.closePOSLoginModal();break;case"admin-order-modal":typeof window.closeOrderDetailModal=="function"&&window.closeOrderDetailModal();break;default:{const t=document.getElementById(e);if(t){const s=t.querySelector('button[onclick*="close"], .fa-xmark')?.closest("button");if(s)s.click();else if(typeof window.closeModalAnim=="function"){const a=t.querySelector('.modal-bottom-sheet, [id$="-box"]')||t.firstElementChild;window.closeModalAnim(t,a)}else t.classList.add("hidden","opacity-0")}}}};let J=null,Re=null,je=0,St=0,_e=0,de=!1,$t=0;const Wa=()=>{if(typeof document>"u")return;document.addEventListener("touchstart",t=>{if(t.touches.length!==1)return;const s=t.touches[0],a=s.target.closest('[id*="modal"], [id*="sheet"]');if(!a||a.classList.contains("hidden")||a.classList.contains("opacity-0")||!(a.classList.contains("items-end")||!!s.target.closest(".modal-bottom-sheet")||a.classList.contains("modal-bottom-sheet")))return;let o=s.target.closest(".modal-bottom-sheet")||s.target.closest('[id$="-box"]');if(o||(o=s.target.closest('[id$="-content"]')),!o)return;const r=o.classList.contains("overflow-y-auto")?o:o.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar"),l=r?r.scrollTop:0,d=o.getBoundingClientRect();!(s.clientY-d.top<=80||s.target.closest(".pull-indicator"))&&l>5||(J=o,Re=a,je=s.clientY,St=s.clientX,_e=je,de=!1,$t=Date.now())},{passive:!0}),document.addEventListener("touchmove",t=>{if(!J||t.touches.length!==1)return;const s=t.touches[0];_e=s.clientY;const a=_e-je,n=Math.abs(s.clientX-St);if(!de&&n>Math.abs(a)){J=null;return}const o=J.classList.contains("overflow-y-auto")?J:J.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar");if(!(o&&o.scrollTop>5&&!de)){if(a>0){if(de=!0,t.cancelable&&t.preventDefault(),J.style.transform=`translateY(${a}px)`,J.style.transition="none",Re){const r=Math.max(.2,1-a/400);Re.style.backgroundColor=`rgba(15, 23, 42, ${.8*r})`}}else if(a<0&&de){const r=a*.2;J.style.transform=`translateY(${r}px)`,J.style.transition="none"}}},{passive:!1});const e=()=>{if(!J)return;const t=J,s=Re,a=_e-je,n=Math.max(1,Date.now()-$t),o=a/n;J=null,Re=null,de&&(a>80||o>.45&&a>30)?(ye("light"),t.style.transition="transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",t.style.transform="translateY(100%)",s&&(s.style.transition="opacity 0.25s ease",s.style.opacity="0"),setTimeout(()=>{t.style.transform="",t.style.transition="",s&&(s.style.backgroundColor="",s.style.opacity=""),qa(s?s.id:"")},250)):de&&(t.style.transition="transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)",t.style.transform="",s&&(s.style.transition="background-color 0.28s ease",s.style.backgroundColor=""),setTimeout(()=>{t.style.transition=""},300)),de=!1};document.addEventListener("touchend",e,{passive:!0}),document.addEventListener("touchcancel",e,{passive:!0})};let At=0;const Va=()=>{typeof document>"u"||document.addEventListener("click",e=>{const t=Date.now();if(t-At<50)return;const s=e.target.closest('button, [role="button"], a[onclick], [id*="bnav-"], .pos-add-btn, .pos-tag-chip, #pos-variant-chips button, .interactive-tap');s&&!s.disabled&&!s.classList.contains("disabled")&&(At=t,ye("light"))},{passive:!0,capture:!0})};let z=null;const Ga=(e="pop")=>{try{if(typeof window>"u"||!ut())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;z||(z=new t),z.state==="suspended"&&z.resume().catch(()=>{});const s=z.currentTime;if(e==="pop"){const a=z.createOscillator(),n=z.createGain();a.type="sine",a.frequency.setValueAtTime(340,s),a.frequency.exponentialRampToValueAtTime(560,s+.07),n.gain.setValueAtTime(.14,s),n.gain.exponentialRampToValueAtTime(.001,s+.08),a.connect(n),n.connect(z.destination),a.start(s),a.stop(s+.08)}else if(e==="success"){const a=z.createOscillator(),n=z.createOscillator(),o=z.createGain(),r=z.createGain();a.type="triangle",n.type="triangle",a.frequency.setValueAtTime(523.25,s),n.frequency.setValueAtTime(659.25,s+.09),o.gain.setValueAtTime(.12,s),o.gain.exponentialRampToValueAtTime(.001,s+.22),r.gain.setValueAtTime(.14,s+.09),r.gain.exponentialRampToValueAtTime(.001,s+.32),a.connect(o),o.connect(z.destination),n.connect(r),r.connect(z.destination),a.start(s),a.stop(s+.22),n.start(s+.09),n.stop(s+.32)}else if(e==="beep"){const a=z.createOscillator(),n=z.createGain();a.type="square",a.frequency.setValueAtTime(1040,s),n.gain.setValueAtTime(.08,s),n.gain.exponentialRampToValueAtTime(.001,s+.07),a.connect(n),n.connect(z.destination),a.start(s),a.stop(s+.07)}}catch{}};typeof window<"u"&&(window.playNativeSound=Ga);const Ne=()=>{if(typeof document>"u")return;const e=document.getElementById("native-scroll-top-btn");e&&(e.classList.add("opacity-0","translate-y-3"),e.classList.add("hidden"))};typeof window<"u"&&(window.hideFloatingScrollTop=Ne);const Ya=()=>{if(typeof document>"u")return;let e=document.getElementById("native-scroll-top-btn");e||(e=document.createElement("button"),e.id="native-scroll-top-btn",document.body.appendChild(e)),e.setAttribute("aria-label","Kembali ke Atas"),e.setAttribute("title","Kembali ke Atas"),e.className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 hidden opacity-0 translate-y-3 transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900/95 dark:bg-slate-800/95 text-white shadow-xl shadow-black/25 border border-slate-700/80 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_4px_20px_rgba(var(--color-primary-rgb),0.4)] hover:scale-105 active:scale-90 cursor-pointer group",e.innerHTML='<i class="fa-solid fa-arrow-up text-xs md:text-sm transition-transform duration-200 group-hover:-translate-y-0.5"></i>',e._hasClickListener||(e._hasClickListener=!0,e.addEventListener("click",()=>{ye("light");const s=document.querySelector(".view-section:not(.hidden)");if(s){const a=s.querySelector(".scroll-content");a&&a.scrollTop>10&&a.scrollTo({top:0,behavior:"smooth"})}window.scrollTo({top:0,behavior:"smooth"})}));const t=(s,a=null)=>{if(!e)return;if(typeof window<"u"&&window.appData?.store?.showScrollTopButton===!1){Ne();return}const n=document.querySelector(".view-section:not(.hidden)");if(!n||n.id!=="view-catalog"&&n.id!=="view-orders"){Ne();return}if(a){const r=a.closest(".view-section");if(!r||r.id!=="view-catalog"&&r.id!=="view-orders"){Ne();return}}if(document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none), [id*="dialog"]:not(.hidden), .fixed.inset-0:not(.hidden):not(.pointer-events-none):not(#native-theme-ambient)')){Ne();return}s>450?(e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0","translate-y-3")})):(e.classList.add("opacity-0","translate-y-3"),setTimeout(()=>{e&&e.classList.contains("opacity-0")&&e.classList.add("hidden")},300))};window.addEventListener("scroll",()=>{t(window.scrollY||document.documentElement.scrollTop)},{passive:!0}),document.addEventListener("scroll",s=>{s.target&&s.target.classList&&s.target.classList.contains("scroll-content")&&t(s.target.scrollTop,s.target)},{passive:!0,capture:!0})},Ja=()=>{if(typeof window>"u"||typeof document>"u")return;let e=document.getElementById("native-connectivity-banner");e||(e=document.createElement("div"),e.id="native-connectivity-banner",e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] -translate-y-16 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl",document.body.appendChild(e));let t=null;const s=a=>{clearTimeout(t),ye(a?"success":"warning"),a?(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-emerald-600 text-white border border-emerald-400/40",e.innerHTML='<i class="fa-solid fa-wifi text-xs"></i><span>Kembali Online — Terhubung</span>',t=setTimeout(()=>{e.classList.add("-translate-y-16","opacity-0")},2500)):(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-amber-500 text-slate-950 border border-amber-300/60",e.innerHTML='<i class="fa-solid fa-wifi-slash text-xs"></i><span>Mode Offline — Menggunakan Data Lokal</span>')};window.addEventListener("online",()=>s(!0)),window.addEventListener("offline",()=>s(!1))},Fn=()=>{Wa(),Va(),Ya(),Ja()},Ht=e=>{let t="";return typeof e=="object"&&e!==null?t=`${e.name||""} ${e.category||""} ${e.subCategory||""}`.toLowerCase():t=String(e||"").toLowerCase(),["paku","baut","sekrup","mur","pipa","pvc","paralon","semen","pasir","bata","mortar","hebel","besi","baja","hollow","seng","atap","kawat","cat","paint","roll","kuas","thinner","amplas","alat","perkakas","tang","obeng","palu","kunci","gembok","meteran","bor","gerinda","paket","box"].some(n=>t.includes(n))?"fa-box-open":"fa-bag-shopping"},Qa=(e,t="",s="")=>{const a=Ht(e);return{id:"brand",icon:a,subIcon:a,label:"Produk Resmi",podGradient:"linear-gradient(135deg, rgba(var(--color-primary-rgb),0.12) 0%, rgba(var(--color-primary-rgb),0.20) 100%)",accent:"rgba(var(--color-primary-rgb),0.1)",aura:"rgba(var(--color-primary-rgb),0.08)",shadowColor:"rgba(var(--color-primary-rgb),0.15)"}},Za=e=>{if(!e||typeof e!="string")return"TP";const s=e.replace(/[^a-zA-Z0-9\s]/g," ").trim().split(/\s+/).filter(o=>o.length>0),a=s.filter(o=>/[a-zA-Z]/.test(o)),n=a.length>0?a:s;return n.length>=2?(n[0][0]+n[1][0]).toUpperCase():n.length===1?(n[0].length>=2?n[0].slice(0,2):n[0]+"P").toUpperCase():"TP"},Xa=(e,t={})=>{const s=t.size||"md",a=t.className||"",n=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk"),o=Ht(e);return`
    <div class="pos-smart-cover cover-${s} ${a}" title="${i(n)}">
        <!-- Subtle Theme Glow -->
        <div class="cover-surface-glow"></div>

        <!-- Center Icon Pod: Paket Box / Shopping Bag -->
        <div class="cover-center">
            <div class="cover-icon-pod">
                <i class="fa-solid ${o} cover-icon"></i>
            </div>
        </div>

        <!-- Official Store Watermark -->
        ${s!=="thumb"?`
        <div class="cover-watermark">
            <i class="fa-solid fa-store mr-1 text-[7px] opacity-75"></i><span>PUTRI UTAMA TEKNIK</span>
        </div>`:""}
    </div>`},es=e=>(typeof e=="object"&&e!==null?e.name:String(e||"Produk"),`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
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
    </svg>`)}`),u=e=>document.getElementById(e),Ft=e=>{const t=u(e);t&&t.classList.remove("hidden")},Kt=e=>{const t=u(e);t&&t.classList.add("hidden")},ts=(e,t,s)=>{const a=u(e);a&&a.classList.toggle(t,s)},X=(e,t)=>{const s=u(e);s&&(s.innerText=t)},Ut=(e,t)=>{const s=u(e);s&&(s.innerHTML=t)},as=(e,t)=>{const s=u(e);s&&(s.value=t)},ss=e=>{const t=u(e);return t?t.value:""},Ge=(e,t)=>{const s=typeof e=="string"?u(e):e,a=typeof t=="string"?u(t):t;s&&(s.classList.remove("hidden"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.classList.remove("opacity-0"),a&&a.classList.remove("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95")})}))},he=(e,t,s)=>{const a=typeof e=="string"?u(e):e,n=typeof t=="string"?u(t):t;if(!a){typeof s=="function"&&s();return}a.classList.add("opacity-0"),n&&n.classList.add("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95"),setTimeout(()=>{a.classList.add("hidden"),typeof s=="function"&&s()},280)};window.openModalAnim=Ge;window.closeModalAnim=he;const ns=e=>{try{return localStorage.getItem(e)}catch{return null}},os=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},i=e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),T=e=>{const t=Number(e);return isNaN(t)||e===null?"Rp 0":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(Math.abs(t)).replace(/^/,t<0?"-":"")},rs=(e,t=null)=>{if(typeof e!="string")return e;const s=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);if(!s)return e;const a=s[1];return t==="image/gif"||e.toLowerCase().includes(".gif")||a==="1rkAFxnZDe2eLQ88kan2BeGSg56IkAEJ9"?`https://drive.google.com/uc?export=view&id=${a}`:`https://lh3.googleusercontent.com/d/${a}`},is=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(t))return t;const s=t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return s?s[1]:null},jt=e=>{if(typeof e!="string"||!e.trim())return null;const t=e.trim(),s=is(t);if(s)return{type:"youtube",id:s,embedUrl:`https://www.youtube.com/embed/${s}?autoplay=1&mute=1&muted=1&loop=1&playlist=${s}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const a=t.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(a&&a[1]){const n=a[1];return{type:"gdrive",id:n,streamUrl:`https://drive.google.com/uc?export=download&id=${n}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${n}`,directUrl:`https://drive.google.com/uc?export=download&id=${n}`,embedUrl:`https://drive.google.com/file/d/${n}/preview?autoplay=1`}}return{type:"direct",directUrl:t,embedUrl:t}},Kn=e=>{const t=jt(e);return t?t.embedUrl:e},Un=e=>{const t=jt(e);return t?t.embedUrl:e},jn=(e,t)=>typeof e!="string"||!e?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${t}`:e.includes("googleusercontent.com")&&!e.includes("=")?`${e}=${t}`:e,_n=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",zn=(e,t,s,a)=>{document.title=e||"Toko Putri";const n=(o,r,l=!1)=>{const d=l?"property":"name";let p=document.querySelector(`meta[${d}="${o}"]`);p||(p=document.createElement("meta"),p.setAttribute(d,o),document.head.appendChild(p)),p.setAttribute("content",r)};t&&n("description",t),e&&n("og:title",e,!0),t&&n("og:description",t,!0),s&&n("og:image",s,!0),a&&n("og:url",a,!0)},qn=(e,t)=>{let s=document.getElementById(e);s||(s=document.createElement("script"),s.id=e,s.type="application/ld+json",document.head.appendChild(s)),s.textContent=JSON.stringify(t)},ze=e=>{e&&X("loader-text",e);const t=u("global-loader");t&&(t.style.opacity="1",t.style.display="flex")},at=()=>{const e=u("global-loader");e&&(e.style.pointerEvents="none",e.style.transition="opacity 0.25s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250))},ee=(e,t,s,a)=>{typeof window.showToast=="function"&&window.showToast(e,t,s,a)},Wn=(e,t,s,a)=>{if(typeof window.showConfirm=="function")return window.showConfirm(e,t,s,a)},Te={};window.loadedScripts=Te;const Vn=(e,t)=>t&&t()?Promise.resolve():(Te[e]||(Te[e]=new Promise((s,a)=>{const n=document.createElement("script");n.src=e,n.onload=()=>s(),n.onerror=()=>{delete Te[e],a(new Error("Gagal memuat: "+e))},document.head.appendChild(n)})),Te[e]),_t=e=>{let t=(e||"").toString().replace(/\D/g,"");return t?(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),t):""},ls=(e,t="")=>{const s=_t(e);if(!s){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp tidak valid!");return}const a=t?encodeURIComponent(t):"",n=`https://wa.me/${s}${a?`?text=${a}`:""}`;window.AndroidNativeApp&&typeof window.AndroidNativeApp.openWhatsApp=="function"?window.AndroidNativeApp.openWhatsApp(n):window.open(n,"_blank","noopener,noreferrer")},ds=(e,t=null,s=null)=>{try{const a=(typeof t=="string"?document.querySelector(t):t)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!a)return;const n=e.getBoundingClientRect(),o=a.getBoundingClientRect(),r=document.createElement("div");r.className="flying-cart-item",s?r.innerHTML=`<img src="${s}" alt="Product" class="w-full h-full object-cover rounded-full" />`:r.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const l=n.left+n.width/2-20,d=n.top+n.height/2-20,p=o.left+o.width/2-20,w=o.top+o.height/2-20;r.style.cssText=`
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
        `,document.body.appendChild(r),requestAnimationFrame(()=>{const f=p-l,g=w-d;r.style.transform=`translate3d(${f}px, ${g}px, 0) scale(0.25) rotate(18deg)`,r.style.opacity="0.4"}),setTimeout(()=>{r&&r.parentNode&&r.parentNode.removeChild(r),ye("medium");const f=document.getElementById("bottom-nav-cart-badge")||a.querySelector(".cart-count-badge");f&&(f.classList.remove("cart-bounce-pop"),f.offsetWidth,f.classList.add("cart-bounce-pop")),a.classList.remove("cart-bounce-pop"),a.offsetWidth,a.classList.add("cart-bounce-pop"),setTimeout(()=>{f&&f.classList.remove("cart-bounce-pop"),a.classList.remove("cart-bounce-pop")},600)},500)}catch(a){console.error("flyToCart error",a)}};window.normalizeWA=_t;window.openWhatsApp=ls;window.sLoad=ze;window.hLoad=at;window.el=u;window.show=Ft;window.hide=Kt;window.toggleCls=ts;window.setIn=X;window.setH=Ut;window.setV=as;window.getV=ss;window.esc=i;window.fixD=rs;window.fCur=T;window.sL=ns;window.ssL=os;window.triggerHaptic=ye;window.flyToCartAnimation=ds;window.renderProductCoverHtml=Xa;window.getProductTheme=Qa;window.getMonogram=Za;window.getProductCoverSvgDataUri=es;const Mt={deviceType:"rawbt",deviceName:"Driver RawBT (Printer Thermal Android - Free)",deviceId:"",paperSize:"58mm",directPrint:!1,feedLines:3,autoCut:!0,openCashDrawer:!1,autoPrintOrder:!1,headerText:"",footerText:"Terima kasih atas kunjungan Anda!",showLogo:!0,showPoints:!0,showBarcode:!0,networkIp:"192.168.1.200:9100"},oe=e=>{switch(e){case"58mm-compact":case"58mm_30":return 30;case"80mm-compact":case"80mm_42":return 42;case"80mm":return 48;case"58mm":default:return 32}},F=()=>{try{const e=localStorage.getItem("freshmart_printer_config");if(e)return{...Mt,...JSON.parse(e)}}catch(e){console.warn("Gagal membaca konfigurasi printer lokal:",e)}return{...Mt}},Fe=e=>{try{const s={...F(),...e};return localStorage.setItem("freshmart_printer_config",JSON.stringify(s)),s}catch(t){return console.error("Gagal menyimpan konfigurasi printer:",t),F()}},cs=()=>{const e=F(),t=(o,r)=>{const l=u(o);l&&(l.checked=!!r)},s=(o,r)=>{const l=u(o);l&&(l.value=r||"")};s("printer-device-name-display",e.deviceName),s("printer-paper-size",e.paperSize),s("printer-network-ip",e.networkIp),s("printer-header-custom",e.headerText),s("printer-footer-custom",e.footerText),t("printer-opt-points",e.showPoints),t("printer-opt-barcode",e.showBarcode),t("printer-opt-direct",e.directPrint===!0),t("printer-opt-autocut",e.autoCut!==!1),t("printer-opt-drawer",e.openCashDrawer),t("printer-opt-autoprint",e.autoPrintOrder),qt(e.deviceType||"rawbt");const a=u("printer-settings-modal"),n=u("printer-settings-modal-box");a&&a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("printerSettings"),Ge(a,n)},zt=(e=!1)=>{const t=u("printer-settings-modal"),s=u("printer-settings-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("printerSettings",e,()=>{he(t,s)}):he(t,s))},qt=e=>{window._selectedPrinterType=e,document.querySelectorAll(".printer-type-card").forEach(a=>{if(a.getAttribute("data-type")===e){a.classList.add("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),a.classList.remove("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const o=a.querySelector(".printer-check-badge");o&&o.classList.remove("hidden")}else{a.classList.remove("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),a.classList.add("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const o=a.querySelector(".printer-check-badge");o&&o.classList.add("hidden")}});const t=u("rawbt-quick-guide-box");t&&(e==="rawbt"?t.classList.remove("hidden"):t.classList.add("hidden"));const s=u("printer-network-box");s&&(e==="network"?s.classList.remove("hidden"):s.classList.add("hidden"))},ps=()=>{const e=(o,r="")=>{const l=u(o);return l?l.value:r},t=(o,r=!1)=>{const l=u(o);return l?l.checked:r},s=window._selectedPrinterType||"rawbt",n={deviceType:s,deviceName:e("printer-device-name-display",s==="rawbt"?"Driver RawBT (Printer Thermal Android - Free)":s==="bluetooth"?"Bluetooth POS Printer":"Printer Thermal POS"),paperSize:e("printer-paper-size","58mm"),networkIp:e("printer-network-ip","192.168.1.200:9100"),headerText:e("printer-header-custom",""),footerText:e("printer-footer-custom","Terima kasih atas kunjungan Anda!"),showPoints:t("printer-opt-points",!0),showBarcode:t("printer-opt-barcode",!0),directPrint:t("printer-opt-direct",!1),autoCut:t("printer-opt-autocut",!0),openCashDrawer:t("printer-opt-drawer",!1),autoPrintOrder:t("printer-opt-autoprint",!1)};Fe(n),ee("Pengaturan printer berhasil disimpan! ✅"),zt()},ms=async()=>{if(!navigator.bluetooth){ee("Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.");return}try{ee("Mencari printer bluetooth di sekitar...");const e=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["000018f0-0000-1000-8000-00805f9b34fb","e7810a71-73ae-499d-8c15-faa9aef0c3f2","00001101-0000-1000-8000-00805f9b34fb"]});if(e){Fe({deviceType:"bluetooth",deviceName:e.name||"Bluetooth POS Printer",deviceId:e.id});const t=u("printer-device-name-display");t&&(t.value=e.name||"Bluetooth POS Printer"),ee(`Printer "${e.name||"Bluetooth POS"}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&ee("Koneksi bluetooth dibatalkan atau tidak tersedia.")}},us=async()=>{if(!navigator.usb){ee("Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.");return}try{ee("Mencari printer USB...");const e=await navigator.usb.requestDevice({filters:[]});if(e){const t=(e.productName||"USB Thermal Printer")+" (USB)";Fe({deviceType:"usb",deviceName:t,deviceId:String(e.vendorId)+":"+String(e.productId)});const s=u("printer-device-name-display");s&&(s.value=t),ee(`Printer USB "${t}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&ee("Koneksi USB dibatalkan atau tidak ditemukan.")}},fs=()=>{const e=F();if((e.deviceType==="rawbt"||!e.deviceType)&&typeof window.executeRawBTTestPrint=="function"){window.executeRawBTTestPrint();return}const t=e.paperSize==="80mm",s=t?48:32,a=m.store.name||"TOKO PUTRI",n=m.store.wa||"",o=(p,w,f=s)=>{const g=f-p.length-w.length;return p+(g>0?" ".repeat(g):" ")+w},r=new Date().toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let l=`
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${i(a)}</div>
    ${n?`<div style="text-align:center;font-size:11px;margin-bottom:4px;">WA: ${i(n)}</div>`:""}
    <div style="text-align:center;font-weight:bold;font-size:12px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:3px 0;margin:6px 0;">
        *** UJI COBA CETAK STRUK ***
    </div>
    <div style="white-space:pre;font-size:11px;">Tgl   : ${r}</div>
    <div style="white-space:pre;font-size:11px;">Format: Thermal ${t?"80mm (48 Kolom)":"58mm (32 Kolom)"}</div>
    <div style="white-space:pre;font-size:11px;">Koneksi: ${e.deviceType.toUpperCase()}</div>
    <div style="white-space:pre;font-size:11px;">Status : KONEKSI BERHASIL</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:11px;font-weight:bold;">${o("TES ITEM UJI COBA","HARGA",s)}</div>
    <div style="white-space:pre;font-size:10px;">${o("1x Produk Percobaan","Rp 25.000",s)}</div>
    <div style="white-space:pre;font-size:10px;">${o("2x Kertas Thermal Kasir","Rp 15.000",s)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:12px;font-weight:bold;">${o("TOTAL UJI","Rp 40.000",s)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    `;e.showPoints&&(l+=`<div style="white-space:pre;font-size:11px;">${o("Simulasi Poin Member","+10 Poin",s)}</div>`,l+='<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>'),e.showBarcode&&(l+=`<div style="text-align:center;margin:6px 0;">
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
    `;let d=u("thermal-print-section");if(d||(d=document.createElement("div"),d.id="thermal-print-section",document.body.appendChild(d)),d.innerHTML=`<div style="width:${t?"80mm":"58mm"};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${l}</div>`,typeof window.sendToRawBT=="function"){const p=d.innerText,w=btoa(unescape(encodeURIComponent(p)));window.sendToRawBT(w,p,l)}else window.print();ee("Perintah uji cetak berhasil dikirim! 🖨️")};window.getPrinterConfig=F;window.getPaperCols=oe;window.savePrinterConfig=Fe;window.openPrinterSettingsModal=cs;window.closePrinterSettingsModal=zt;window.selectPrinterDeviceTypeUI=qt;window.savePrinterSettingsFromModal=ps;window.scanBluetoothPrinter=ms;window.scanUsbPrinter=us;window.executeTestPrint=fs;let Ct={},q="view-catalog",Ae=!1,Oe=null,st=["view-catalog"];const Ye=e=>{history.pushState({modal:e},"",window.location.href),fe.push(e)},Je=(e,t,s)=>{if(!t){const a=fe.lastIndexOf(e);a>-1&&fe.splice(a,1),Ae=!0,Oe&&clearTimeout(Oe),Oe=setTimeout(()=>{Ae=!1},300);try{history.back()}catch{Ae=!1}}s()},V=(e,t=!1)=>{if(!e||e===q)return;t||(history.pushState({view:e},"",window.location.href),e==="view-catalog"?st=["view-catalog"]:st.push(e));const s=u(q);if(s){const n=s.querySelector(".scroll-content");n&&(Ct[q]=n.scrollTop)}if(q==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime(),q==="view-pos-cashier"&&e!=="view-pos-cashier"&&(typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()),q==="view-admin"&&e!=="view-admin"){const n=u("view-admin");n&&n.classList.remove("admin-pos-mode"),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()}const a=u(e);if(a&&(a.classList.remove("hidden"),a.classList.add("flex")),document.querySelectorAll(".view-section").forEach(n=>{n!==a&&(n.classList.add("hidden"),n.classList.remove("flex"))}),typeof window.hideFloatingScrollTop=="function")window.hideFloatingScrollTop();else{const n=document.getElementById("native-scroll-top-btn");n&&(n.classList.add("opacity-0","translate-y-3"),n.classList.add("hidden"))}if(a){e==="view-cart"&&typeof window.renderCart=="function"?window.renderCart():e==="view-checkout"&&typeof window.rChck=="function"?window.rChck():e==="view-payment"&&typeof window.rPay=="function"?window.rPay():e==="view-wishlist"&&typeof window.renderWish=="function"?window.renderWish():e==="view-orders"&&typeof window.renderMyOrders=="function"?window.renderMyOrders():e==="view-faq"&&typeof window.renderStorefrontFAQ=="function"?window.renderStorefrontFAQ():e==="view-pos-cashier"&&Nt(()=>import("./module-pos-DSMDjxYd.js").then(o=>o.b),__vite__mapDeps([2,1])).then(o=>{typeof o.renderPOSStorefront=="function"&&o.renderPOSStorefront()}).catch(o=>console.error("[POS] Gagal memuat storefront:",o));const n=a.querySelector(".scroll-content");if(n)if(t){const o=Ct[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{n.scrollTop=o}))}else n.scrollTo(0,0)}q=e,Wt(e)},Wt=(e=q)=>{const t=u("bottom-nav-bar");if(!t)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin","view-pos-cashier"].includes(e)){t.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.remove("translate-y-0","opacity-100");return}if(t.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(a=>a.classList.remove("active")),e==="view-catalog"){const a=u("bnav-home");a&&a.classList.add("active")}else if(e==="view-orders"){const a=u("bnav-orders");a&&a.classList.add("active")}else if(e==="view-wishlist"||e==="view-faq"){const a=u("bnav-menu");a&&a.classList.add("active")}},ws=e=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(e==="home"?"medium":"light"),e==="home")if(q==="view-catalog"){const t=document.querySelector("#view-catalog .scroll-content");t?t.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else V("view-catalog");else e==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():e==="cart"?V("view-cart"):e==="orders"?V("view-orders"):e==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},Vt=()=>{const e=document.querySelector("#view-catalog .scroll-content"),t=u("pull-to-refresh-indicator"),s=u("ptr-icon"),a=u("ptr-text");if(!e||!t)return;let n=0,o=0,r=!1,l=!1;const d=65;e.addEventListener("touchstart",p=>{e.scrollTop<=5&&!l&&(n=p.touches[0].pageY,r=!0)},{passive:!0}),e.addEventListener("touchmove",p=>{if(!r||l)return;o=p.touches[0].pageY;const w=o-n;if(w>15&&e.scrollTop<=5){t.classList.add("visible");const f=Math.min(w/d,1.5);s&&(s.style.transform=`rotate(${f*240}deg)`),a&&(a.innerText=w>=d?"Lepaskan untuk segarkan":"Tarik ke bawah untuk refresh")}else t.classList.remove("visible")},{passive:!0}),e.addEventListener("touchend",async()=>{if(!r||l)return;if(r=!1,o-n>=d&&e.scrollTop<=5){l=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),s&&(s.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",s.style.transform=""),a&&(a.innerText="Menyinkronkan katalog...");try{typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),a&&(a.innerText="Katalog Terkini Disinkron!"),s&&(s.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch{a&&(a.innerText="Gagal sinkron data")}setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>{l=!1,s&&(s.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",s.style.transform=""),a&&(a.innerText="Tarik ke bawah untuk refresh")},300)},600)}else t.classList.remove("visible"),s&&(s.style.transform="")})},Gt=e=>{e==="product"&&typeof window.closeProductModal=="function"?window.closeProductModal(!0):e==="category"&&typeof window.closeCategoryModal=="function"?window.closeCategoryModal(!0):e==="brand"&&typeof window.closeBrandModal=="function"?window.closeBrandModal(!0):e==="admin"&&typeof window.closeAdminModal=="function"?window.closeAdminModal(!0):e==="adminOrder"&&typeof window.closeOrderDetailModal=="function"?window.closeOrderDetailModal(!0):e==="receipt"&&typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):e==="docPreview"&&typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):e==="scanner"&&typeof window.closeCameraScanner=="function"?window.closeCameraScanner(!0):e==="confirm"&&typeof window.closeConfirm=="function"?window.closeConfirm(!0):e==="customerOrder"&&typeof window.closeCustomerOrderDetailModal=="function"?window.closeCustomerOrderDetailModal(!0):e==="restock"&&typeof window.closeRestockModal=="function"?window.closeRestockModal(!0):e==="quickprice"&&typeof window.closeQuickPriceModal=="function"?window.closeQuickPriceModal(!0):e==="member"&&typeof window.closeMemberModal=="function"?window.closeMemberModal(!0):e==="prompt"&&typeof window.closePrompt=="function"?window.closePrompt(!0):e==="review"&&typeof window.closeReviewModal=="function"?window.closeReviewModal(!0):e==="quickmenu"&&typeof window.closeQuickMenuModal=="function"?window.closeQuickMenuModal(!0):e==="variantPreview"&&typeof window.closeVariantPreviewModal=="function"?window.closeVariantPreviewModal(!0):e==="terms"&&typeof window.closeTermsModal=="function"?window.closeTermsModal(!0):e==="privacy"&&typeof window.closePrivacyModal=="function"?window.closePrivacyModal(!0):e==="askQuestion"&&typeof window.closeAskQuestionModal=="function"?window.closeAskQuestionModal(!0):e==="quickVariant"&&typeof window.closeQuickVariantSheet=="function"?window.closeQuickVariantSheet(!0):e==="adminFAQ"&&typeof window.closeAdminFAQModal=="function"?window.closeAdminFAQModal(!0):e==="printerSettings"&&typeof window.closePrinterSettingsModal=="function"?window.closePrinterSettingsModal(!0):e==="exitConfirm"&&typeof window.closeExitConfirmModal=="function"?window.closeExitConfirmModal(!0):e==="appDownload"&&typeof window.closeAppDownloadModal=="function"?window.closeAppDownloadModal(!0):e==="voucher"&&typeof window.closeVoucherModal=="function"?window.closeVoucherModal(!0):e==="guide"&&typeof window.closeShoppingGuideModal=="function"?window.closeShoppingGuideModal(!0):e==="changelog"&&typeof window.closeChangelogModal=="function"?window.closeChangelogModal(!0):e==="guarantee"&&typeof window.closeQualityGuaranteeModal=="function"?window.closeQualityGuaranteeModal(!0):e==="security"&&typeof window.closeSecurityModal=="function"?window.closeSecurityModal(!0):e==="posVariantSheet"&&typeof window.closePOSVariantSheet=="function"?window.closePOSVariantSheet(!0):e==="posLogin"&&typeof window.closePOSLoginModal=="function"?window.closePOSLoginModal(!0):e==="posCartDrawer"&&typeof window.closePOSCartDrawer=="function"?window.closePOSCartDrawer(!0):e==="posPayment"&&typeof window.closePayModal=="function"?window.closePayModal(!0):e==="purchaseForm"&&typeof window.closeCreatePOModal=="function"?window.closeCreatePOModal(!0):e==="purchasePicker"&&typeof window.closePOProductPicker=="function"?window.closePOProductPicker(!0):e==="purchaseDetail"&&typeof window.closePurchaseDetailModal=="function"?window.closePurchaseDetailModal(!0):e==="purchasePayment"&&typeof window.closePurchasePaymentModal=="function"?window.closePurchasePaymentModal(!0):e==="supplierForm"&&typeof window.closeSupplierFormModal=="function"?window.closeSupplierFormModal(!0):e==="supplierDetail"&&typeof window.closeSupplierDetailModal=="function"?window.closeSupplierDetailModal(!0):e==="posHoldPrompt"&&typeof window.closePOSHoldPrompt=="function"?window.closePOSHoldPrompt(!0):e==="posHeldModal"&&typeof window.closePOSHeldModal=="function"?window.closePOSHeldModal(!0):e==="posCameraScanner"&&typeof window.closePOSCameraScanner=="function"?window.closePOSCameraScanner(!0):e==="tempoDetail"&&typeof window.closeTempoDetailModal=="function"?window.closeTempoDetailModal(!0):e==="tempoPayment"&&typeof window.closeTempoPaymentModal=="function"?window.closeTempoPaymentModal(!0):e==="tempoPenalty"&&typeof window.closeTempoPenaltyModal=="function"?window.closeTempoPenaltyModal(!0):e==="expenseForm"&&typeof window.closeExpenseModal=="function"?window.closeExpenseModal(!0):e==="expenseReceipt"&&typeof window.closeExpenseReceiptPreview=="function"&&window.closeExpenseReceiptPreview(!0)},Yt=()=>{const e=u("exit-confirm-modal");e&&(e.classList.contains("hidden")&&Ye("exitConfirm"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=u("exit-confirm-modal-box");t&&t.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},ft=(e=!1)=>{Je("exitConfirm",e,()=>{const t=u("exit-confirm-modal"),s=u("exit-confirm-modal-box");t&&t.classList.add("opacity-0"),s&&s.classList.add("scale-95"),setTimeout(()=>{t&&t.classList.add("hidden")},250)})},bs=()=>{ft(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri! 🙏"),setTimeout(()=>{try{window.close()}catch{}},400))},gs=()=>{const e=document.getElementById("pos-receipt-fallback-modal")||document.getElementById("pos-shift-receipt-modal")||document.getElementById("pos-success-modal")||document.getElementById("pos-recall-confirm-modal")||document.getElementById("pos-closed-success-modal");if(e){e.remove();return}if(fe.length>0){try{window.history.back()}catch{const a=fe.pop();Gt(a)}return}if(q==="view-admin"){const s=u("admin-content-view"),a=u("admin-dashboard-view");if(!!(s&&!s.classList.contains("hidden")||a&&a.classList.contains("hidden")||window.history.state&&window.history.state.tab||typeof window.cTab<"u"&&window.cTab)){if(window.history.state&&window.history.state.tab&&window.history.length>1)try{window.history.back();return}catch{}typeof window.openAdminMenu=="function"&&window.openAdminMenu();try{window.history.replaceState({view:"view-admin"},"",window.location.href)}catch{}return}if(typeof window.showConfirm=="function"){const o=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=o?"Keluar Panel Owner":"Keluar CMS Toko",l=o?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,l,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}return}if(q==="view-pos-cashier"){typeof window.showConfirm=="function"?window.showConfirm("Keluar Mode Kasir","Yakin keluar dari mode POS kasir?",()=>{typeof window.exitPOSMode=="function"?window.exitPOSMode():V("view-catalog")},"Ya, Keluar",!0):V("view-catalog");return}if(q!=="view-catalog"){if(q==="view-payment"){V("view-checkout");return}if(q==="view-checkout"){V("view-cart");return}if(q==="view-cart"){V("view-catalog");return}window.history.length>1?window.history.back():V("view-catalog");return}const t=u("exit-confirm-modal");t&&!t.classList.contains("hidden")?ft():Yt()},xs=()=>{Vt();try{(!history.state||!history.state.view)&&history.replaceState({view:"view-catalog"},"",window.location.href)}catch{}window.addEventListener("popstate",e=>{if(Ae){Ae=!1,Oe&&clearTimeout(Oe);return}if(fe.length>0){const n=fe.pop();Gt(n);return}const t=e.state||{},s=t.view||null;if(window.isAdm||window.__localIsAdm)if(s==="view-admin")V("view-admin",!0),t.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(t.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu();else{const n=u("admin-content-view");if(n&&!n.classList.contains("hidden")){history.pushState({view:"view-admin"},"",window.location.href),V("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}if(history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"){const o=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=o?"Keluar Panel Owner":"Keluar CMS Toko",l=o?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,l,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}}else if(s){let n=s;s==="view-admin"&&(n="view-admin-login"),V(n,!0)}else V("view-catalog",!0)})};window.pushModalHistory=Ye;window.requestCloseModal=Je;window.changeView=V;window.setupHistoryRouter=xs;window.onBottomNavClick=ws;window.updateBottomNav=Wt;window.initPullToRefresh=Vt;window.handleAppBackButton=gs;window.openExitConfirmModal=Yt;window.closeExitConfirmModal=ft;window.confirmExitApp=bs;window.isProgrammaticModalClose=Ae;window.viewHistoryStack=st;try{Object.defineProperty(window,"curViewName",{get:()=>q,set:e=>{q=e},configurable:!0})}catch{}let nt=null,Se=null;const hs=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}G("Kode "+e+" berhasil disalin!")}catch{G("Gagal menyalin. Kode: "+e)}},G=(e,t,s,a)=>{const n=u("toast");if(!n)return;if(!t){const c=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(c)?t="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(c)?t="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(c)?t="warning":/upload|proses|memuat|loading|sedang/.test(c)?t="loading":t="info"}typeof window.triggerHaptic=="function"&&window.triggerHaptic(t==="error"?"error":t==="warning"?"warning":t==="success"?"success":"light");const o=getComputedStyle(document.documentElement),r=o.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",l=o.getPropertyValue("--color-primary").trim()||"#10b981";o.getPropertyValue("--color-primary-dark").trim();const d={success:{icon:"fa-circle-check",label:"Berhasil",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`}},p=d[t]||d.info,w=u("toast-icon");w&&(w.className="fa-solid "+p.icon);const f=u("toast-title");f&&(f.textContent=s||p.label,f.style.display="block",f.style.color=p.accent);const g=u("toast-icon-wrap");g&&(g.style.background=p.iconBg,g.style.color=p.accent),X("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let h=u("toast-progress");h||(h=document.createElement("div"),h.id="toast-progress",n.appendChild(h)),h.style.background=p.accent,h.style.transition="none",h.style.width="100%",h.style.opacity="0.85",clearTimeout(nt),n.classList.add("toast-show");const b=a||(t==="loading"?8e3:t==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{h.style.transition=`width ${b}ms linear`,h.style.width="0%"})),nt=setTimeout(()=>{n.classList.remove("toast-show")},b)},ys=e=>G(e,"loading","Memproses...",8e3),vs=()=>{clearTimeout(nt);const e=u("toast");e&&e.classList.remove("toast-show")},ks=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")};let ue=null;const Ps=(e,t,s,a="Ya, Hapus",n=!0)=>{let o=e,r=t,l=s,d=a,p=n;typeof t=="function"&&(l=t,r=e,o=typeof a=="string"&&a!=="Ya, Hapus"?a:"Konfirmasi Tindakan",d=typeof s=="string"?s:"Ya, Lanjutkan",p=!0);let w=null;typeof l!="function"?(w=new Promise(b=>{ue=b}),Se=null):(Se=l,ue=null),X("confirm-title",o);const f=u("confirm-msg");if(f)if(typeof r=="string"){const b=typeof window.DOMPurify<"u"?window.DOMPurify.sanitize(r,{ADD_ATTR:["class","style"]}):r;f.innerHTML=b}else f.textContent=r||"";const g=u("confirm-yes-btn");g&&(g.innerText=d,p?(g.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 active:scale-95 transition-all text-xs sm:text-sm shadow-md shadow-rose-500/30 cursor-pointer",u("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",u("confirm-icon").className="fa-solid fa-triangle-exclamation"):(g.className="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-2xl hover:opacity-90 active:scale-95 transition-all text-xs sm:text-sm shadow-sm cursor-pointer",u("confirm-icon-box").className="w-16 h-16 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-[var(--color-primary)]/20",u("confirm-icon").className="fa-solid fa-copy"));const h=u("custom-confirm-modal");return h&&h.classList.contains("hidden")&&Ye("confirm"),Ft("custom-confirm-modal"),setTimeout(()=>{u("custom-confirm-modal").classList.remove("opacity-0"),u("custom-confirm-box").classList.remove("scale-95")},10),w},ot=(e=!1)=>{if(ue){const t=ue;ue=null,t(!1)}Je("confirm",e,()=>{u("custom-confirm-modal").classList.add("opacity-0"),u("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>Kt("custom-confirm-modal"),300)})},Ts=()=>{if(ue){const e=ue;ue=null,Se=null,ot(),setTimeout(()=>{e(!0)},150);return}if(Se){const e=Se;Se=null,ot(),setTimeout(()=>{e()},150)}},Ss=(e,t="",s=null)=>{let a=null,n=null;typeof s!="function"&&(n=new Promise(g=>{a=g}));const o=t!=null?String(t):"",r=o.length>50||o.includes(`
`)||/balasan|catatan|alasan|deskripsi|pesan|keterangan/i.test(e),l=o.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),d=r?`<textarea id="prompt-input" rows="3" class="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 custom-scrollbar resize-none leading-relaxed" placeholder="Tuliskan di sini...">${l}</textarea>`:`<input type="text" id="prompt-input" value="${l}" class="w-full px-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-bold focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 text-center" autocomplete="off" />`;let p=document.createElement("div");p.id="custom-prompt-container",p.className="fixed inset-0 z-[10005] bg-slate-900/85 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300",p.onclick=g=>{g.target===p&&window.closePrompt()},p.innerHTML=`
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
    `,document.body.appendChild(p);const w=p.querySelector("div");Ye("prompt"),setTimeout(()=>{p.classList.remove("opacity-0"),w.classList.remove("scale-95")},10);const f=p.querySelector("#prompt-input");return f&&(f.focus(),f.select(),f.onkeydown=g=>{g.key==="Enter"&&(!r||g.ctrlKey)?(g.preventDefault(),p.querySelector("#prompt-ok")?.click()):g.key==="Escape"&&(g.preventDefault(),window.closePrompt())}),window.closePrompt=(g=!1)=>{if(!(!p||!p.parentNode)){if(a){const h=a;a=null,h(null)}Je("prompt",g,()=>{p.classList.add("opacity-0"),w.classList.add("scale-95"),setTimeout(()=>p.remove(),300),window.closePrompt=null})}},p.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),p.querySelector("#prompt-ok").onclick=()=>{let g=f.value;if(a){const h=a;a=null,window.closePrompt(),h(g)}else window.closePrompt(),typeof s=="function"&&s(g)},n},$s=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=hs;window.showToast=G;window.showToastLoading=ys;window.hideToast=vs;window.toggleTheme=ks;window.showConfirm=Ps;window.closeConfirm=ot;window.executeConfirm=Ts;window.customPrompt=Ss;window.checkProPrint=$s;const He="utp-thermal-modal",qe="utp-html-modal";let Z=null,wt=null,Ee=null,Be=null;const We=()=>{if(document.getElementById("utp-style"))return;const e=document.createElement("style");e.id="utp-style",e.textContent=`
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
    `,document.head.appendChild(e)},Jt=()=>{Be===null&&(Be=document.body.style.overflow||"",document.body.style.overflow="hidden")},bt=()=>{Be!==null&&!document.getElementById(He)&&!document.getElementById(qe)&&(document.body.style.overflow=Be,Be=null)},Qt=(e,t)=>{Qe(),Ee=s=>{const a=s.target&&s.target.tagName||"";s.key==="Escape"?(s.preventDefault(),t()):s.key==="Enter"&&!/INPUT|TEXTAREA|SELECT/.test(a)&&(s.preventDefault(),e())},document.addEventListener("keydown",Ee,!0)},Qe=()=>{Ee&&document.removeEventListener("keydown",Ee,!0),Ee=null},As=e=>{const t=e.deviceType||"rawbt",s=/android/i.test(navigator.userAgent||"");return t==="rawbt"?s||window.AndroidNativeApp?"RawBT Android":"Printer Browser":t==="bluetooth"?"Bluetooth":t==="usb"?"USB OTG":t==="network"?"WiFi / LAN":"Printer Sistem"},Ms=e=>{let t=Array.isArray(e.previewLines)&&e.previewLines.length?e.previewLines:null;if(!t&&e.html&&/<[a-z][\s\S]*>/i.test(e.html))return`<div style="white-space:normal;">${e.html}</div>`;t||(t=String(e.plainText||"").split(`
`).map(a=>({t:a,a:"left",b:!1,s:"normal"})));const s=[...t];for(;s.length>1&&!String(s[s.length-1].t||"").trim();)s.pop();return s.map(a=>{const n=i(String(a.t??""))||"&nbsp;",o=a.a==="center"?"center":a.a==="right"?"right":"left",r=a.b?800:400;return a.s==="title"||a.s==="wide"?`<div class="utp-line utp-title" style="text-align:${o};font-weight:${r}">${n}</div>`:a.s==="tall"||a.s==="total"?`<div class="utp-line utp-tall" style="text-align:${o};font-weight:${r}"><span>${n}</span></div>`:`<div class="utp-line" style="text-align:${o};font-weight:${r}">${n}</div>`}).join("")},Zt=()=>{const e=Z;if(!e)return;const t=F(),s=oe(t.paperSize),a=s>=40,n=Array.isArray(e.previewLines)?e.previewLines.length:String(e.plainText||"").split(`
`).length,o=typeof e.rebuild=="function"?`
        <div class="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70" role="group" aria-label="Ukuran kertas">
            <button type="button" id="utp-paper-58" onclick="window.setThermalPreviewPaper('58mm')" class="utp-seg-btn ${a?"text-slate-600 dark:text-slate-300":"is-active"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">58mm</button>
            <button type="button" id="utp-paper-80" onclick="window.setThermalPreviewPaper('80mm')" class="utp-seg-btn ${a?"is-active":"text-slate-600 dark:text-slate-300"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">80mm</button>
        </div>`:"",r=`
    <div id="${He}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-thermal-title" onclick="if(event.target===this) window.closeThermalPrintPreview()">
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
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-scroll text-[var(--color-primary)]"></i>${a?"80mm":"58mm"} · ${s} kolom</span>
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-print text-slate-400"></i>${i(As(t))}</span>
                    <span class="utp-chip bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-check"></i>${n} baris</span>
                </div>
                ${o}
            </div>

            <div class="utp-canvas flex-1 overflow-auto px-3 py-5 sm:px-5 custom-scrollbar">
                <div class="utp-paper mx-auto" style="width:${s}ch;">
                    ${Ms(e)}
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
    </div>`;document.getElementById(He)?.remove(),document.body.insertAdjacentHTML("beforeend",r),setTimeout(()=>document.getElementById("utp-thermal-confirm")?.focus({preventScroll:!0}),60)},Xt=e=>!e||typeof e.dispatch!="function"?!1:(We(),Z={...e},Zt(),Jt(),Qt(()=>ea(),()=>gt()),!0),gt=()=>{const e=Z;if(document.getElementById(He)?.remove(),Z=null,Qe(),bt(),e&&typeof e.onCancel=="function")try{e.onCancel()}catch{}},ea=()=>{const e=Z;if(e){if(Z=null,document.getElementById(He)?.remove(),Qe(),bt(),typeof e.onConfirm=="function")try{e.onConfirm()}catch(t){console.warn("[PrintPreview] onConfirm error:",t)}e.dispatch(e.base64,e.plainText,e.html||"")}},Cs=e=>{if(!(!Z||typeof Z.rebuild!="function")){Fe({paperSize:e});try{const t=Z.rebuild();t&&(Z.base64=t.base64,Z.plainText=t.plainText,Z.previewLines=t.previewLines)}catch(t){console.warn("[PrintPreview] Gagal rebuild payload:",t)}Zt(),G(`Ukuran kertas diubah ke ${e} ✅`)}},Ls=()=>{gt(),typeof window.openPrinterSettingsModal=="function"&&(window.openPrinterSettingsModal(),G("Atur printer, lalu tekan Cetak lagi untuk melihat preview terbaru."))},Ds=(e={})=>{if(!e.html)return!1;We(),wt={...e};const t=(e.paper||"a4")==="a4";document.getElementById(qe)?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="${qe}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-html-title" onclick="if(event.target===this) window.closeHtmlPrintPreview()">
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
    </div>`);const s=document.getElementById("utp-html-frame");if(s){const a=s.contentWindow.document;a.open(),a.write(e.html),a.close()}return Jt(),Qt(()=>ta(),()=>xt()),!0},xt=()=>{document.getElementById(qe)?.remove(),wt=null,Qe(),bt()},ta=()=>{const e=document.getElementById("utp-html-frame");if(!(!e||!wt)){if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){try{const t=e.contentWindow.document,s=Array.from(t.querySelectorAll("style")).map(n=>n.outerHTML).join("");let a=document.getElementById("a4-print-section");a||(a=document.createElement("div"),a.id="a4-print-section",document.body.appendChild(a)),a.innerHTML=s+t.body.innerHTML,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500)}catch(t){console.warn("[PrintPreview] Native print error:",t)}xt();return}try{e.contentWindow.focus(),e.contentWindow.print()}catch(t){console.warn("[PrintPreview] iframe print error:",t),G("Gagal membuka dialog cetak. Coba lagi.","error")}}};typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",We,{once:!0}):We());window.openThermalPrintPreview=Xt;window.closeThermalPrintPreview=gt;window.confirmThermalPrint=ea;window.setThermalPreviewPaper=Cs;window.openPrinterSettingsFromPreview=Ls;window.openHtmlPrintPreview=Ds;window.closeHtmlPrintPreview=xt;window.confirmHtmlPrint=ta;const $=e=>"Rp "+Math.round(Number(e||0)).toLocaleString("id-ID"),et=e=>Math.round(Number(e||0)).toLocaleString("id-ID"),Is=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(2).replace(/\.?0+$/,"")},K=e=>e?String(e).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"").replace(/[\r\t]/g," ").replace(/[^\x20-\x7E\n]/g," "):"",U=(e,t)=>{if(!e)return[];const s=K(e).replace(/ +/g," ").trim();if(!s)return[];if(s.length<=t)return[s];const a=s.split(" "),n=[];let o="";for(const r of a)if(r)if(r.length>t){o&&(n.push(o),o="");for(let l=0;l<r.length;l+=t){const d=r.substring(l,l+t);d.length===t?n.push(d):o=d}}else(o?o.length+1+r.length:r.length)<=t?o=o?o+" "+r:r:(n.push(o),o=r);return o&&n.push(o),n},se=(e,t=!1)=>{const s=e?new Date(e):new Date,a=String(s.getDate()).padStart(2,"0"),n=String(s.getMonth()+1).padStart(2,"0"),o=t?s.getFullYear():String(s.getFullYear()).slice(-2),r=String(s.getHours()).padStart(2,"0"),l=String(s.getMinutes()).padStart(2,"0");return`${a}/${n}/${o} ${r}:${l}`},aa=(e,t,s,a=!1)=>{const n=K(String(e||"")).trimEnd(),o=K(String(t||"")).trim(),r=s-n.length-o.length;if(r>=0)return[n+" ".repeat(r)+o];if(a){const p=Math.max(0,s-o.length-1),w=n.substring(0,p).trimEnd(),f=Math.max(1,s-w.length-o.length);return[w+" ".repeat(f)+o]}const l=U(n,s),d=l[l.length-1]||"";if(d.length+1+o.length<=s){const p=s-d.length-o.length;return l[l.length-1]=d+" ".repeat(p)+o,l}else{const p=Math.max(0,s-o.length);return[...l," ".repeat(p)+o]}};class Ce{constructor(t=32){this.cols=Number(t)||32,this.bytes=[],this.plainLines=[],this.previewLines=[],this._bold=!1,this._size="normal"}init(){return this.bytes.push(27,64),this}align(t="left"){const s=t==="center"?1:t==="right"?2:0;return this.bytes.push(27,97,s),this}bold(t=!0){return this.bytes.push(27,69,t?1:0),this._bold=!!t,this}size(t="normal"){return this._size=t||"normal",t==="title"?this.bytes.push(29,33,17):t==="tall"||t==="total"?this.bytes.push(29,33,1):t==="wide"?this.bytes.push(29,33,16):this.bytes.push(29,33,0),this}text(t){if(!t)return this;const s=K(t);for(let a=0;a<s.length;a++)this.bytes.push(s.charCodeAt(a));return this}line(t="",s="left"){return this.align(s),this.text(t),this.bytes.push(10),this.plainLines.push(t),this.previewLines.push({t:K(t),a:s,b:this._bold,s:this._size}),this}centered(t=""){return U(t,this.cols).forEach(a=>this.line(a,"center")),this}twoColumn(t="",s="",a=!1,n=!1){return a&&this.bold(!0),aa(t,s,this.cols,n).forEach(r=>this.line(r,"left")),a&&this.bold(!1),this}itemRow(t){const s=t.variantName?` (${t.variantName}${t.colorCode?" "+t.colorCode:""})`:"",a=(t.name||"Barang")+s+(t.poTime?" [PO]":"");this.bold(!0),U(a,this.cols).forEach(p=>this.line(p,"left")),this.bold(!1);const o=t.effectivePrice||t.price||0,r=t.subtotal!==void 0?t.subtotal:parseFloat(t.qty||1)*o,l=`  ${Is(t.qty)} ${t.unit||"pcs"} x ${et(o)}`,d=et(r);return this.twoColumn(l,d,!1,!1),t.discount&&t.discount>0&&this.twoColumn("  (Pot. Diskon)",`-${et(t.discount)}`,!1,!0),t.poTime&&this.line(`  * Estimasi PO: ${t.poTime}`,"left"),this}separator(t="-"){const s=t.repeat(this.cols);return this.line(s,"left"),this}doubleSeparator(){return this.separator("=")}feed(t=3){this.bytes.push(27,100,Math.max(1,t));for(let s=0;s<t;s++)this.plainLines.push(""),this.previewLines.push({t:"",a:"left",b:!1,s:"normal"});return this}cut(){return this.bytes.push(29,86,65,3),this}openDrawer(){return this.bytes.push(27,112,0,25,250),this}toBase64(){const t=new Uint8Array(this.bytes);let s="";const a=t.length,n=8192;for(let o=0;o<a;o+=n){const r=t.subarray(o,o+n);s+=String.fromCharCode.apply(null,r)}return btoa(s)}toPlainText(){return this.plainLines.join(`
`)}}const Le=(e,t="",s="",a={})=>{if(!a.skipPreview)return Xt({base64:e,plainText:t,html:s,previewLines:a.previewLines,title:a.title,rebuild:a.rebuild,onConfirm:a.onConfirm,onCancel:a.onCancel,dispatch:(n,o,r)=>Lt(n,o,r)});if(typeof a.onConfirm=="function")try{a.onConfirm()}catch{}return Lt(e,t,s)},Lt=(e,t="",s="")=>{const a=/android/i.test(navigator.userAgent||"");if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function")try{return window.AndroidNativeApp.printRawBT(e),G("Mencetak struk via RawBT... 🖨️"),!0}catch(n){console.warn("[RawBT] AndroidNativeApp error, mencoba intent...",n)}if(a)try{G("Membuka Printer RawBT... 🖨️");const n=`intent:base64,${e}#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;end;`;return window.location.href=n,setTimeout(()=>{if(!document.hidden)try{window.location.href=`rawbt:base64,${e}`}catch{}},800),!0}catch(n){console.warn("[RawBT] Intent trigger failed:",n)}return G("Mencetak struk kasir... 🖨️"),ht(s||t),!0},ht=e=>{const t=F(),a=oe(t.paperSize)>=40,n=a?"80mm":"58mm";let o=u("thermal-print-section");o||(o=document.createElement("div"),o.id="thermal-print-section",document.body.appendChild(o)),o.className=a?"paper-80mm":"paper-58mm",document.body.classList.remove("paper-58mm","paper-80mm"),document.body.classList.add(a?"paper-80mm":"paper-58mm");let r=document.getElementById("dynamic-print-page-style");r||(r=document.createElement("style"),r.id="dynamic-print-page-style",document.head.appendChild(r)),r.innerHTML=`@media print { @page { margin: 0; size: ${n} auto; } html, body { width: ${n} !important; } }`;const d=typeof e=="string"&&e.includes("<")&&e.includes(">")?e:`<pre style="font-family:'Courier New',Courier,monospace;font-size:11px;margin:0;line-height:1.25;white-space:pre-wrap;word-break:break-word;">${i(e)}</pre>`;o.innerHTML=`
        <div style="width:100%;font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.25;color:#000;background:#fff;padding:0;">
            ${d}
        </div>
    `,setTimeout(()=>{window.print()},100)},Rs=()=>{if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.openRawBT=="function"){window.AndroidNativeApp.openRawBT();return}/android/i.test(navigator.userAgent||"")?(window.location.href="intent:#Intent;package=ru.a402d.rawbtprinter;end;",setTimeout(()=>{document.hidden||(window.location.href="https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter")},1200)):window.open("https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter","_blank")},rt=(e,t=null)=>{const s=t||F(),a=oe(s.paperSize),n=a>=40,o=new Ce(a);o.init(),s.openCashDrawer&&e.payment?.method==="cash"&&o.openDrawer();const r=K(s.headerText||m.store?.name||"TOKO PUTRI").trim(),l=K(m.store?.address||"").trim(),d=K(m.store?.wa||"").trim(),p=Math.floor(a/2);r.length<=p?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),U(r.toUpperCase(),a).forEach(x=>o.line(x,"center")),o.size("normal").bold(!1)),l&&U(l,a).forEach(x=>o.line(x,"center")),d&&o.line(`WA: ${d}`,"center");const w=e.payment?.taxNpwp||m.store?.taxNpwp;w&&o.line(`NPWP: ${w}`,"center"),o.separator("-");const f=se(e.dateMs||Date.now(),n),g=`#${e.txId}`;o.twoColumn(`No : ${g}`,f,!1,!0);const h=(e.cashierName||"Kasir").substring(0,n?16:9),b=(e.customer?.name||"Umum").substring(0,n?18:11);if(o.twoColumn(`Ksr: ${h}`,`Plg: ${b}`,!1,!0),e.customer?.phone&&o.line(`HP : ${e.customer.phone}`,"left"),o.separator("-"),(e.items||[]).forEach(x=>{o.itemRow(x)}),o.separator("-"),o.twoColumn("Subtotal",$(e.subtotal)),(e.globalDiscount||0)>0){const x=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";o.twoColumn(x,`- ${$(e.globalDiscount)}`)}if((e.pointDiscount||0)>0&&o.twoColumn(`Diskon Poin (${e.pointsRedeemed||0} Poin)`,`- ${$(e.pointDiscount)}`),e.claimedReward&&e.claimedReward.name&&(o.separator("-"),o.bold(!0).line(`[KLAIM HADIAH: ${K(e.claimedReward.name)}]`,"left").bold(!1),o.twoColumn("Poin Reward Ditukar",`-${e.claimedReward.pointsCost||0} Poin`)),(e.payment?.ppnEnabled||e.payment?.ppnShowZero||e.payment?.ppnRate===0||e.payment?.ppnAmount&&e.payment.ppnAmount>0)&&(m.store?.ppnEnabled||e.payment?.ppnEnabled)){const x=e.payment?.ppnType==="inclusive",y=e.payment?.ppnRate!==void 0?e.payment.ppnRate:m.store?.ppnRate||0,v=e.payment?.ppnAmount||0,A=e.payment?.ppnLabel||`${x?"Inc. PPN":"PPN"} (${y}%)`,k=v>0?`${x?"":"+ "}${$(v)}`:"Rp 0";o.twoColumn(A,k)}o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL",$(e.total)).size("normal").bold(!1),o.doubleSeparator();const C=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",D=C?"PUTRI PAYLATER":(e.payment?.method||"CASH").toUpperCase();if(o.twoColumn("Metode Bayar",D),e.payment?.method==="cash")o.twoColumn("Bayar Tunai",$(e.payment.paid)),o.bold(!0).twoColumn("Kembalian",$(e.payment.change)).bold(!1);else if(e.payment?.method==="tempo"){if(C){if(o.twoColumn("Limit Terpakai",$(e.payment?.paylaterUsed||e.paylaterUsed||e.total-(e.payment?.tempoDp??0))),e.payment?.paylaterMonths){const x=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${x} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${$(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${$(e.payment.paylaterServiceFee)}`)}if(o.twoColumn("Uang Muka (DP)",$(e.payment?.tempoDp??e.payment?.dp??0)),o.bold(!0).twoColumn(C?"Tagihan PayLater":"Sisa Piutang",$(e.payment.tempoBalance||0)).bold(!1),C&&e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${$(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),e.payment.tempoDueDate){const x=typeof e.payment.tempoDueDate=="number"?new Date(e.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e.payment.tempoDueDate;o.line(`Jatuh Tempo: ${x}`,"left")}}s.showPoints&&(e.pointsEarned>0||(e.pointsRedeemed||0)>0)&&(o.separator("-"),e.pointsEarned>0&&o.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),(e.pointsRedeemed||0)>0&&o.twoColumn("Poin Ditukar",`-${e.pointsRedeemed} Poin`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&o.twoColumn("Sisa Saldo Poin",`${e.finalMemberPoints} Poin`)),s.showBarcode&&(o.separator("-"),o.align("center"),o.line(`*POS-${e.txId}*`,"center"),o.line("(SCAN DI KASIR)","center")),o.separator("-");const L=s.footerText||"Terima Kasih Atas Kunjungan Anda!";return U(L,a).forEach(x=>o.line(x,"center")),o.feed(s.feedLines||3),s.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines}},it=(e,t=!1,s=null)=>{const a=s||F(),n=oe(a.paperSize),o=n>=40,r=new Ce(n);r.init();const l=K(a.headerText||m.store?.name||"TOKO PUTRI").trim(),d=K(m.store?.address||"").trim(),p=K(m.store?.wa||"").trim(),w=Math.floor(n/2);l.length<=w?(r.align("center").bold(!0).size("title").line(l.toUpperCase(),"center"),r.size("normal").bold(!1)):(r.align("center").bold(!0).size("tall"),U(l.toUpperCase(),n).forEach(A=>r.line(A,"center")),r.size("normal").bold(!1)),d&&U(d,n).forEach(A=>r.line(A,"center")),p&&r.line(`WA: ${p}`,"center"),r.separator("-");const f=o?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **";r.bold(!0).line(f,"center").bold(!1),r.separator("-");const g=se(e.startTime,o),h=se(e.endTime||Date.now(),o);r.twoColumn("Shift ID",`#${e.shiftNo||e.id||"-"}`,!1,!0),r.twoColumn("Kasir",(e.cashierName||"Kasir").substring(0,o?20:12),!1,!0),r.twoColumn("Mulai",g,!1,!0),r.twoColumn("Selesai",h,!1,!0),r.separator("-");const b=parseFloat(e.startingCash)||0,c=parseFloat(e.cashSales)||0,C=parseFloat(e.qrisSales)||0,D=parseFloat(e.bankSales||e.transferSales)||0,L=parseFloat(e.tempoSales)||0,x=parseFloat(e.totalSales)||c+C+D+L,y=e.txCount||0;if(r.bold(!0).line("RINGKASAN PENJUALAN","left").bold(!1),r.twoColumn("Modal Awal Laci",$(b)),r.twoColumn("Penjualan Tunai",$(c)),C>0&&r.twoColumn("Penjualan QRIS",$(C)),D>0&&r.twoColumn("Penjualan Transfer",$(D)),L>0&&r.twoColumn("Penjualan Tempo",$(L)),r.separator("-"),r.twoColumn("Total Transaksi",`${y} Trx`),r.bold(!0).size("tall").twoColumn("TOTAL OMSET",$(x)).size("normal").bold(!1),r.doubleSeparator(),!t){const A=b+c,k=e.actualCash!==void 0?parseFloat(e.actualCash):A,R=k-A,E=R===0?"PAS (0)":R>0?`+${$(R)}`:`-${$(Math.abs(R))}`;r.bold(!0).line("REKONSILIASI KAS FISIK","left").bold(!1),r.twoColumn("Kas Diharapkan",$(A)),r.twoColumn("Kas Fisik Aktual",$(k)),r.bold(!0).twoColumn("Selisih Kas",E,!0).bold(!1),e.closingNotes&&U(`Catatan: ${e.closingNotes}`,n).forEach(Y=>r.line(Y,"left")),r.separator("-"),r.line("Verifikasi & Tanda Tangan:","left"),r.feed(2);const I=Math.floor(n/2),M="( Kasir )",P=o?"( Supervisor/Owner )":"( Supervisor )",S=Math.max(0,Math.floor((I-M.length)/2)),O=Math.max(0,Math.floor((I-P.length)/2)),_=" ".repeat(S)+M+" ".repeat(Math.max(1,I-S-M.length))+" ".repeat(O)+P;r.line(_,"left"),r.separator("-")}const v=a.footerText||"Laporan Kasir Resmi Toko Putri";return U(v,n).forEach(A=>r.line(A,"center")),r.feed(a.feedLines||3),a.autoCut&&r.cut(),{base64:r.toBase64(),plainText:r.toPlainText(),previewLines:r.previewLines}},lt=(e,t=null)=>{const s=t||F(),a=oe(s.paperSize),n=a>=40,o=new Ce(a);o.init();const r=K(s.headerText||m.store?.name||"TOKO PUTRI").trim(),l=K(m.store?.address||"").trim(),d=K(m.store?.wa||"").trim(),p=Math.floor(a/2);r.length<=p?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),U(r.toUpperCase(),a).forEach(v=>o.line(v,"center")),o.size("normal").bold(!1)),l&&U(l,a).forEach(v=>o.line(v,"center")),d&&o.line(`WA: ${d}`,"center");const w=e.payment?.taxNpwp||m.store?.taxNpwp;w&&o.line(`NPWP: ${w}`,"center"),o.separator("-");const f=se(e.dateString||e.dateMs||Date.now(),n);o.twoColumn(`Order: #${e.orderId}`,f,!1,!0);const g=(e.customer?.name||"Guest").substring(0,n?18:11),h=e.customer?.deliveryMethod==="delivery"?"Kirim":"Ambil";o.twoColumn(`Plg  : ${g}`,`Tipe: ${h}`,!1,!0),e.customer?.phone&&o.line(`HP   : ${e.customer.phone}`,"left"),e.customer?.note&&U(`Cat  : ${e.customer.note}`,a).forEach(v=>o.line(v,"left")),o.separator("-");const b=Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[];b.length>0?b.forEach(v=>{o.itemRow(v)}):o.line("- Tidak ada rincian barang -","center"),o.separator("-");const c=b.reduce((v,A)=>v+parseFloat(A.qty||1)*(parseFloat(A.effectivePrice||A.price)||0),0),C=e.payment&&e.payment.subtotal!==void 0?e.payment.subtotal:c||e.total||0,D=e.payment&&e.payment.shippingCost!==void 0?e.payment.shippingCost:0,L=e.payment&&e.payment.grandTotal!==void 0?e.payment.grandTotal:e.total||C+D;if(o.twoColumn("Subtotal",$(C)),(e.customer?.deliveryMethod==="delivery"||e.deliveryMethod==="delivery")&&o.twoColumn("Ongkos Kirim",$(D)),e.payment?.productDiscount&&o.twoColumn("Potongan Harga",`- ${$(e.payment.productDiscount)}`),e.payment?.shippingDiscount&&o.twoColumn("Potongan Ongkir",`- ${$(e.payment.shippingDiscount)}`),(e.payment?.ppnEnabled||e.payment?.ppnShowZero||e.payment?.ppnRate===0||e.payment?.ppnAmount&&e.payment.ppnAmount>0)&&(m.store?.ppnEnabled||e.payment?.ppnEnabled)){const v=e.payment?.ppnType==="inclusive",A=e.payment?.ppnRate!==void 0?e.payment.ppnRate:m.store?.ppnRate||0,k=e.payment?.ppnAmount||0,R=e.payment?.ppnLabel||`${v?"Inc. PPN":"PPN"} (${A}%)`,E=k>0?`${v?"":"+ "}${$(k)}`:"Rp 0";o.twoColumn(R,E)}o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL",$(L)).size("normal").bold(!1),o.doubleSeparator();const y=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater";if(o.twoColumn("Metode Bayar",y?"PUTRI PAYLATER":(e.payment?.method||"Tunai").toUpperCase()),y){if(e.payment?.paylaterMonths){const v=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${v} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${$(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${$(e.payment.paylaterServiceFee)}`),e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${$(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`)}return s.showPoints&&(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(o.separator("-"),e.pointsEarned>0&&o.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),e.finalMemberPoints!==void 0&&o.twoColumn("Saldo Poin",`${e.finalMemberPoints} Poin`)),s.showBarcode&&(o.separator("-"),o.align("center"),o.line(`*ORDER-${e.orderId}*`,"center"),o.line("(SCAN DI KASIR)","center")),o.separator("-"),U(s.footerText||"Terima Kasih Atas Kunjungan Anda!",a).forEach(v=>o.line(v,"center")),o.feed(s.feedLines||3),s.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines}},dt=(e,t=null)=>{const s=t||F(),a=oe(s.paperSize),n=a>=40,o=new Ce(a);o.init();const r=K(s.headerText||m.store?.name||"TOKO PUTRI").trim(),l=K(m.store?.address||"").trim(),d=K(m.store?.wa||"").trim(),p=Math.floor(a/2);r.length<=p?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),U(r.toUpperCase(),a).forEach(S=>o.line(S,"center")),o.size("normal").bold(!1)),l&&U(l,a).forEach(S=>o.line(S,"center")),d&&o.line(`WA: ${d}`,"center"),o.separator("-");const w=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",f=e.payment?.paymentStatus==="lunas"||parseFloat(e.payment?.tempoBalance||0)<=0,g=n?w?f?"*** NOTA PUTRI PAYLATER (LUNAS) ***":"*** NOTA TAGIHAN PUTRI PAYLATER ***":f?"*** NOTA TEMPO (LUNAS) ***":"*** NOTA TAGIHAN TEMPO (PIUTANG) ***":w?f?"** PAYLATER (LUNAS) **":"** NOTA PUTRI PAYLATER **":f?"** NOTA TEMPO (LUNAS) **":"** NOTA TAGIHAN TEMPO **";o.bold(!0).line(g,"center").bold(!1),o.separator("-");const h=se(e.dateString||e.timestamp||Date.now(),n);o.twoColumn(`Order: #${e.orderId}`,h,!1,!0);const b=(e.customer?.name||"Pelanggan").substring(0,n?18:11);if(o.twoColumn(`Plg  : ${b}`,w?"Tipe: PayLater":"Tipe: Tempo",!1,!0),w&&e.payment?.paylaterMonths){const S=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${S} (${e.payment.paylaterMonths}x)`,!1,!0)}(e.customer?.phone||e.customer?.wa)&&o.line(`HP   : ${e.customer.wa||e.customer.phone}`,"left");let c=parseFloat(e.payment?.tempoBalance)||0,C=e.payment?.tempoPenaltyRate!==void 0?parseFloat(e.payment.tempoPenaltyRate):1,D=e.payment?.tempoPenaltyStopped===!0,L=0,x=e.payment?.tempoDueDate||0,y=0,v=0,A=!1,k=!1;const R=Date.now();x>0&&(R>x?(y=Math.floor((R-x)/(24*60*60*1e3)),y>0&&(A=!0)):(v=Math.ceil((x-R)/(24*60*60*1e3)),v<=3&&(k=!0))),D?L=parseFloat(e.payment?.tempoFixedPenalty)||0:A&&(L=C/100*c*y);let E=c+L;const I=e.payment?.installments||[],M=I.reduce((S,O)=>S+(parseFloat(O.amount)||0),0),P=e.payment?.grandTotal||c+M;if(x>0){const S=se(x,n);let O="";f?O="LUNAS":A?O=`Telat ${y} Hari`:k?O=`H-${v<=0?0:v}`:O=`Sisa ${v} Hari`,o.twoColumn(`J.Tmp: ${S}`,O,!1,!0)}return o.separator("-"),(e.items||[]).forEach(S=>{o.itemRow(S)}),o.separator("-"),o.twoColumn("Total Transaksi",$(P)),w&&(e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${$(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Penanganan",`+ ${$(e.payment.paylaterServiceFee)}`)),I.length>0&&(o.separator("-"),o.bold(!0).line("HISTORI PEMBAYARAN CICILAN:","left").bold(!1),I.forEach((S,O)=>{const _=se(S.date,n);o.twoColumn(`${O+1}. ${_}`,$(S.amount))}),o.twoColumn("Total Terbayar",$(M),!0)),o.twoColumn("Sisa Pokok",$(c)),w&&e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${$(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),L>0&&o.twoColumn(`Denda (${y} Hari)`,`+ ${$(L)}`),o.doubleSeparator(),o.bold(!0).size("tall").twoColumn(w?"TAGIHAN PAYLATER":"SISA TAGIHAN",$(f?0:E)).size("normal").bold(!1),o.doubleSeparator(),!f&&m.banks&&m.banks.length>0&&(o.line("REKENING TRANSFER RESMI:","left"),(m.banks||[]).forEach(S=>{o.line(`${S.bank||S.bankName||"Bank"}: ${S.number||S.bankAccount||"-"}`,"left"),o.line(`a/n ${S.name||S.bankOwner||"-"}`,"left")}),o.separator("-")),s.showBarcode&&(o.separator("-"),o.align("center"),o.line(w?`*PAYLATER-${e.orderId}*`:`*TEMPO-${e.orderId}*`,"center"),o.line(w?"(PUTRI PAYLATER RESMI)":"(NOTA TEMPO RESMI)","center")),o.separator("-"),U(s.footerText||"Terima Kasih Atas Kerja Sama & Kepercayaannya!",a).forEach(S=>o.line(S,"center")),o.feed(s.feedLines||3),s.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines}},ct=(e=null)=>{const t=e||F(),s=oe(t.paperSize),a=s>=40,n=new Ce(s);n.init();const o=K(t.headerText||m.store?.name||"TOKO PUTRI").trim(),r=Math.floor(s/2);o.length<=r?(n.align("center").bold(!0).size("title").line(o.toUpperCase(),"center"),n.size("normal").bold(!1)):(n.align("center").bold(!0).size("tall"),U(o.toUpperCase(),s).forEach(g=>n.line(g,"center")),n.size("normal").bold(!1));const l=K(m.store?.wa||"").trim();l&&n.line(`WA: ${l}`,"center"),n.separator("-");const d=a?`*** UJI COBA CETAK STRUK THERMAL ${s} KOLOM ***`:`** UJI CETAK THERMAL ${s} KOLOM **`;n.bold(!0).line(d,"center").bold(!1),n.separator("-"),n.line("MISTAR KALIBRASI TEPI KERTAS:","left");let p="";for(let g=1;g<=s;g++)p+=String(g%10);n.line(p,"left");let w="";for(let g=1;g<=s;g++)g===s||g%10===0?w+="|":g%5===0?w+=":":w+=".";n.line(w,"left"),n.line(`(Pastikan angka ${s%10} paling kanan tercetak utuh)`,"left"),n.separator("-");const f=se(Date.now(),a);return n.line(`Waktu   : ${f}`,"left"),n.line(`Format  : Thermal ${s} Kolom (${t.paperSize})`,"left"),n.line("Driver  : RAWBT FREE PRINT SERVICE","left"),n.line("Status  : 100% PRESISI & SIAP PAKAI","left"),n.separator("-"),n.bold(!0).twoColumn("ITEM SIMULASI","HARGA").bold(!1),n.itemRow({name:"Kertas Thermal Kasir Roll",qty:2,unit:"roll",price:15e3,subtotal:3e4}),n.itemRow({name:"Semen Portland Komposit 40kg",qty:1,unit:"sak",price:65e3,subtotal:65e3}),n.separator("-"),n.twoColumn("Subtotal",$(95e3)),n.twoColumn("Diskon Uji Coba",`- ${$(5e3)}`),n.doubleSeparator(),n.bold(!0).size("tall").twoColumn("TOTAL TES",$(9e4)).size("normal").bold(!1),n.doubleSeparator(),n.twoColumn("Bayar Tunai",$(1e5)),n.bold(!0).twoColumn("Kembalian",$(1e4)).bold(!1),t.showPoints&&(n.separator("-"),n.twoColumn("Simulasi Poin Member","+10 Poin")),t.showBarcode&&(n.separator("-"),n.align("center"),n.line(`*TEST-RAWBT-${Date.now().toString().slice(-6)}*`,"center"),n.line("(BARCODE TEST BERHASIL)","center")),n.separator("-"),U(t.footerText||"Terima kasih atas kunjungan Anda!",s).forEach(g=>n.line(g,"center")),U("Hasil cetak telah terkalibrasi presisi.",s).forEach(g=>n.line(g,"center")),n.feed(t.feedLines||3),t.autoCut&&n.cut(),{base64:n.toBase64(),plainText:n.toPlainText(),previewLines:n.previewLines}},Ze=e=>{const t=document.getElementById(e);return!!t&&!t.classList.contains("hidden")},Ns=e=>{if(!e){G("Data transaksi kasir tidak ditemukan.","warning");return}const t=F(),s=rt(e,t),a=Ze("pos-receipt-fallback-modal");Le(s.base64,s.plainText,"",{skipPreview:a,previewLines:s.previewLines,title:`Struk Kasir #${e.txId||""}`,rebuild:()=>rt(e,F()),onConfirm:()=>{document.getElementById("pos-success-modal")?.remove(),document.getElementById("pos-receipt-fallback-modal")?.remove()}})},Os=(e,t=!1)=>{if(!e){G("Data shift tidak ditemukan.","warning");return}const s=F(),a=it(e,t,s),n=Ze("pos-shift-receipt-modal");Le(a.base64,a.plainText,"",{skipPreview:n,previewLines:a.previewLines,title:`${t?"Ringkasan Shift (X-Report)":"Rekap Tutup Shift (Z-Report)"} #${e.shiftNo||e.id||""}`,rebuild:()=>it(e,t,F()),onConfirm:()=>document.getElementById("pos-shift-receipt-modal")?.remove()})},Es=async(e=null)=>{const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||ge,s=String(t||"").replace(/^#/,"").trim(),a=d=>{if(!d)return!1;const p=String(d.orderId||"").replace(/^#/,"").trim();return s?p===s||p.endsWith(s)||s.endsWith(p):!0};let n=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(n=e),(!n||!n.items||n.items.length===0)&&a(window.currentCustomerOrder)&&(n=window.currentCustomerOrder),(!n||!n.items||n.items.length===0)&&a(window.lastPrintedOrder)&&(n=window.lastPrintedOrder),(!n||!n.items||n.items.length===0)&&(xe||[]).length>0){const d=xe.find(a);d&&Array.isArray(d.items)&&d.items.length>0&&(n=d)}if((!n||!n.items||n.items.length===0)&&Array.isArray(H)){const d=H.find(a);d&&Array.isArray(d.items)&&d.items.length>0&&(n=d)}if((!n||!n.items||n.items.length===0)&&s)try{const d=typeof te<"u"&&te?te:window.db;if(d){let p=await d.collection("freshmart_orders").doc(s).get();if(!p.exists&&!s.startsWith("ORD-")){const w=await d.collection("freshmart_orders").doc("ORD-"+s).get();w.exists&&(p=w)}if(p&&p.exists&&(n=p.data(),n.orderId=n.orderId||p.id,window.currentCustomerOrder=n,window.lastPrintedOrder=n,Array.isArray(H))){const w=H.findIndex(a);if(w!==-1){H[w].items=n.items||[],H[w].payment=n.payment||{},H[w].customer=n.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(H))}catch{}}}}}catch(d){console.warn("[RawBT] Gagal fetch order detail from Firestore:",d)}if(!n&&Array.isArray(H)&&(n=H.find(a)),!n){G("Data pesanan tidak ditemukan.","warning");return}window.lastPrintedOrder=n;const o=F(),r=lt(n,o),l=Ze("receipt-preview-modal");Le(r.base64,r.plainText,"",{skipPreview:l,previewLines:r.previewLines,title:`Struk Pesanan #${n.orderId||""}`,rebuild:()=>lt(n,F()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&l&&window.closeReceiptPreviewModal()}})},Bs=(e=null)=>{const t=e||ge;let a=(window.cachedPiutangOrders||[]).find(l=>String(l.orderId)===String(t))||(xe||[]).find(l=>String(l.orderId)===String(t));if(!a&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(t)&&(a=window.lastPrintedOrder),!a){if(typeof window.previewTempoReceipt=="function"&&t&&!window.__tempoReceiptFetching){window.__tempoReceiptFetching=!0,Promise.resolve(window.previewTempoReceipt(t)).finally(()=>{window.__tempoReceiptFetching=!1});return}G("Data nota piutang tidak ditemukan.","warning");return}const n=F(),o=dt(a,n),r=Ze("receipt-preview-modal");Le(o.base64,o.plainText,"",{skipPreview:r,previewLines:o.previewLines,title:`Nota Tagihan Tempo #${a.orderId||""}`,rebuild:()=>dt(a,F()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&r&&window.closeReceiptPreviewModal()}})},Hs=()=>{const e=F(),t=ct(e);Le(t.base64,t.plainText,"",{previewLines:t.previewLines,title:"Uji Coba Cetak Printer",rebuild:()=>ct(F())})};window.cleanLineAscii=K;window.wrapWords=U;window.formatTwoColumn=aa;window.formatCompactDate=se;window.EscPosBuilder=Ce;window.sendToRawBT=Le;window.renderThermalDOMAndPrint=ht;window.openRawBTApp=Rs;window.buildPOSReceiptPayload=rt;window.buildShiftReceiptPayload=it;window.buildOrderReceiptPayload=lt;window.buildTempoReceiptPayload=dt;window.buildTestReceiptPayload=ct;window.printPOSReceiptDirect=Ns;window.printShiftSettlementDirect=Os;window.printCustomerReceiptDirect=Es;window.printTempoReceiptDirect=Bs;window.executeRawBTTestPrint=Hs;const yt=async(e=null)=>{if(e&&typeof Tt=="function"&&typeof e=="string"&&Tt(e),typeof window.printCustomerReceiptDirect=="function")return window.printCustomerReceiptDirect(e);const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||ge,s=String(t||"").replace(/^#/,"").trim(),a=P=>{if(!P)return!1;const S=String(P.orderId||"").replace(/^#/,"").trim();return s?S===s||S.endsWith(s)||s.endsWith(S):!0};let n=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(n=e),(!n||!n.items||n.items.length===0)&&a(window.currentCustomerOrder)&&(n=window.currentCustomerOrder),(!n||!n.items||n.items.length===0)&&a(window.lastPrintedOrder)&&(n=window.lastPrintedOrder),(!n||!n.items||n.items.length===0)&&(xe||[]).length>0){const P=xe.find(a);P&&Array.isArray(P.items)&&P.items.length>0&&(n=P)}if((!n||!n.items||n.items.length===0)&&Array.isArray(H)){const P=H.find(a);P&&Array.isArray(P.items)&&P.items.length>0&&(n=P)}if((!n||!n.items||n.items.length===0)&&s)try{const P=typeof te<"u"&&te?te:window.db;if(P){let S=await P.collection("freshmart_orders").doc(s).get();if(!S.exists&&!s.startsWith("ORD-")){const O=await P.collection("freshmart_orders").doc("ORD-"+s).get();O.exists&&(S=O)}if(S&&S.exists&&(n=S.data(),n.orderId=n.orderId||S.id,window.currentCustomerOrder=n,window.lastPrintedOrder=n,Array.isArray(H))){const O=H.findIndex(a);if(O!==-1){H[O].items=n.items||[],H[O].payment=n.payment||{},H[O].customer=n.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(H))}catch{}}}}}catch(P){console.warn("[Receipt] Gagal fetch order detail from Firestore:",P)}if(!n&&Array.isArray(H)&&(n=H.find(a)),!n)return;window.lastPrintedOrder=n;const o=typeof F=="function"?F():{paperSize:"58mm",showPoints:!0,showBarcode:!0},r=oe(o.paperSize),l=r>=40,d=se(n.dateString||n.date||Date.now(),l),p=o.headerText||m.store.name||"Toko Putri",w=m.store.wa||"",f=(P,S,O=r)=>{const _=String(P||""),Y=String(S||""),j=O-_.length-Y.length;return _+(j>0?" ".repeat(j):" ")+Y},g=Array.isArray(n.items)?n.items:Array.isArray(n.cart)?n.cart:[],h=g.reduce((P,S)=>P+parseFloat(S.qty||1)*(parseFloat(S.effectivePrice||S.price)||0),0),b=n.payment&&n.payment.subtotal!==void 0?n.payment.subtotal:h||n.total||0,c=n.payment&&n.payment.shippingCost!==void 0?n.payment.shippingCost:0,C=n.payment&&n.payment.grandTotal!==void 0?n.payment.grandTotal:n.total||b+c,D=String(n.payment?.method||n.method||"Tunai").toUpperCase(),L=n.customer?.name||n.customerName||"Guest",x=n.customer?.deliveryMethod==="delivery"||n.deliveryMethod==="delivery";let y=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${i(p)}</div>`;w&&(y+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${i(w)}</div>`);const v=n.payment?.taxNpwp||m.store?.taxNpwp;if(v&&(y+=`<div class="text-center" style="font-size:10px;font-family:monospace;margin-bottom:4px;">NPWP: ${i(v)}</div>`),y+='<div class="border-b border-dashed border-black my-2"></div>',y+=`<div style="white-space:pre;font-family:monospace;">${f(`Order: #${n.orderId}`,d,r)}</div>`,y+=`<div style="white-space:pre;font-family:monospace;">${f(`Plg  : ${i(L).substring(0,l?18:10)}`,`Tipe: ${x?"Kirim":"Ambil"}`,r)}</div>`,(n.customer?.phone||n.customerPhone)&&(y+=`<div style="white-space:pre;font-family:monospace;">HP   : ${i(n.customer?.phone||n.customerPhone)}</div>`),y+='<div class="border-b border-dashed border-black my-2"></div>',n.customer?.note&&(y+=`<div style="white-space:pre-wrap;word-break:break-word;">Cat: ${i(n.customer.note)}</div><div class="border-b border-dashed border-black my-2"></div>`),g.length>0?g.forEach(P=>{let S=P.variantName?` (${i(P.variantName)}${P.colorCode?" "+i(P.colorCode):""})`:"";const O=i(P.name||"Barang")+S+(P.poTime?" [PO]":""),_=P.effectivePrice||P.price||0,Y=`  ${parseFloat(P.qty||1)} ${i(P.unit||"pcs")} x ${Math.round(_).toLocaleString("id-ID")}`,j=(parseFloat(P.qty||1)*_).toLocaleString("id-ID");y+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;">${O}</div><div style="white-space:pre;font-family:monospace;font-size:11px;">${f(Y,j,r)}</div>`,P.poTime&&(y+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">  * Estimasi PO: ${i(P.poTime)}</div>`)}):y+='<div style="white-space:pre;font-style:italic;color:#64748b;text-align:center;padding:4px 0;">- Tidak ada rincian barang -</div>',y+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-family:monospace;">${f("Subtotal",b.toLocaleString("id-ID"),r)}</div>`,x&&(y+=`<div style="white-space:pre;font-family:monospace;">${f("Ongkir",c.toLocaleString("id-ID"),r)}</div>`),n.payment?.shippingDiscount&&(y+=`<div style="white-space:pre;font-family:monospace;">${f("Pot.Ongkir",`-${n.payment.shippingDiscount.toLocaleString("id-ID")}`,r)}</div>`),n.payment?.productDiscount&&(y+=`<div style="white-space:pre;font-family:monospace;">${f("Pot.Harga",`-${n.payment.productDiscount.toLocaleString("id-ID")}`,r)}</div>`),(n.payment?.ppnEnabled||n.payment?.ppnShowZero||n.payment?.ppnRate===0||n.payment?.ppnAmount&&n.payment.ppnAmount>0)&&(m.store?.ppnEnabled||n.payment?.ppnEnabled)){const P=n.payment?.ppnType==="inclusive",S=n.payment?.ppnRate!==void 0?n.payment.ppnRate:m.store?.ppnRate||0,O=n.payment?.ppnAmount||0,_=n.payment?.ppnLabel||`${P?"Inc. PPN":"PPN"} (${S}%)`,Y=O>0?`${P?"":"+"}${O.toLocaleString("id-ID")}`:"0";y+=`<div style="white-space:pre;font-family:monospace;">${f(_,Y,r)}</div>`}y+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-family:monospace;font-weight:bold;font-size:12px;">${f("TOTAL","Rp "+C.toLocaleString("id-ID"),r)}</div><div style="white-space:pre;font-family:monospace;">${f("Metode Bayar",D,r)}</div>`,o.showPoints&&(n.pointsEarned>0||n.finalMemberPoints!==void 0)&&(y+='<div class="border-b border-dashed border-black my-2"></div>',n.pointsEarned>0&&(y+=`<div style="white-space:pre;font-family:monospace;">${f("Poin Didapat","+"+n.pointsEarned+" Poin",r)}</div>`),n.finalMemberPoints!==void 0&&n.finalMemberPoints!==null&&(y+=`<div style="white-space:pre;font-family:monospace;font-weight:bold;">${f("Saldo Poin",String(n.finalMemberPoints)+" Poin",r)}</div>`),n.claimedReward&&(y+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;margin-top:2px;">HADIAH: ${i(n.claimedReward.name)}</div>`)),g.some(P=>P&&P.poTime&&P.poTime!=="")&&(y+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),o.showBarcode&&(y+=`<div class="border-b border-dashed border-black my-2"></div><div style="text-align:center;margin:4px 0;"><div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*ORDER-${i(n.orderId)}*</div><div style="font-size:8px;color:#666;">SCAN DI KASIR</div></div>`),y+=`<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${i(o.footerText||"Terima Kasih Atas Kunjungan Anda")}</div><div class="border-b border-dashed border-black my-2"></div><div style="height:15px;"></div>`,Ut("receipt-paper-content",y);const R=u("receipt-paper-content");R&&(R.style.width=l?"340px":"260px");const E=u("receipt-preview-modal-box");E&&(E.classList.remove("max-w-[320px]","max-w-[400px]"),E.classList.add(l?"max-w-[400px]":"max-w-[320px]"));const I=u("receipt-preview-modal"),M=u("receipt-preview-modal-box");I&&I.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),Ge(I,M)},Fs=(e=!1)=>{const t=u("receipt-preview-modal"),s=u("receipt-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{he(t,s)}):he(t,s))},Ks=()=>{const e=ge||(window.lastPrintedOrder?window.lastPrintedOrder.orderId:null);if(typeof window.printCustomerReceiptDirect=="function"){window.printCustomerReceiptDirect(e);return}if(!((xe||[]).find(a=>a.orderId===ge)||(Array.isArray(H)?H.find(a=>a.orderId===ge):null)||window.lastPrintedOrder))return;const s=u("receipt-paper-content")?u("receipt-paper-content").innerHTML:"";ht(s)};window.openReceiptPreview=yt;window.openCustomerReceiptPreview=e=>{yt(e)};window.closeReceiptPreviewModal=Fs;window.executePrintReceipt=Ks;window.checkProPrint=()=>{yt()};const W={OWNER:"owner",ADMIN:"admin",CASHIER:"cashier"},Us=[{key:"orders",label:"Pesanan Online",desc:"Proses status pesanan, update resi pengiriman & konfirmasi bayar",group:"operasional",icon:"fa-receipt"},{key:"products",label:"Katalog Produk & Stok",desc:"Tambah/edit produk, atur varian, dan perbarui stok barang",group:"operasional",icon:"fa-box-open"},{key:"suppliers",label:"Supplier & Rekanan",desc:"Kelola master data supplier, kontak kulakan, dan asal produk",group:"operasional",icon:"fa-truck-field"},{key:"purchases",label:"Order Kulakan (PO)",desc:"Buat PO pembelian grosir, terima restock, & kelola hutang rekanan",group:"operasional",icon:"fa-cart-flatbed"},{key:"piutang",label:"Piutang Tempo & Cicilan",desc:"Kelola nota piutang pelanggan, denda keterlambatan, & cicilan",group:"operasional",icon:"fa-clock-rotate-left"},{key:"customers",label:"Database Pelanggan",desc:"Lihat daftar member, atur limit kredit PayLater, & mutasi poin",group:"operasional",icon:"fa-address-book"},{key:"pos",label:"Kasir POS",desc:"Akses antarmuka penjualan kasir toko fisik dan shift kasir",group:"operasional",icon:"fa-cash-register"},{key:"expenses",label:"Biaya Operasional Toko",desc:"Buku kas pengeluaran operasional toko harian & nota kas",group:"operasional",icon:"fa-money-bill-transfer"},{key:"stock_opname",label:"Stock Opname (Audit Fisik)",desc:"Audit stok fisik rak/gudang, rekonsiliasi selisih & terapkan penyesuaian stok",group:"operasional",icon:"fa-clipboard-check"},{key:"categories",label:"Kategori Produk",desc:"Tambah dan susun kategori etalase produk",group:"konten",icon:"fa-tags"},{key:"brands",label:"Merek Produk",desc:"Kelola daftar brand dagang barang",group:"konten",icon:"fa-copyright"},{key:"colors",label:"Database Warna",desc:"Katalog warna produk dan swatch varian",group:"konten",icon:"fa-swatchbook"},{key:"vouchers",label:"Voucher & Promo",desc:"Buat kode voucher diskon dan promo belanja",group:"konten",icon:"fa-ticket-simple"},{key:"banners",label:"Banner Promosi",desc:"Kelola gambar dan video slider beranda toko",group:"konten",icon:"fa-images"},{key:"rewards",label:"Program Hadiah Poin",desc:"Kelola katalog hadiah penukaran poin member",group:"konten",icon:"fa-gift"},{key:"reviews",label:"Ulasan Pelanggan",desc:"Moderasi ulasan dan testimoni produk pembeli",group:"konten",icon:"fa-star"},{key:"faqs",label:"Tanya Jawab / Q&A",desc:"Kelola jawaban pertanyaan umum pembeli",group:"konten",icon:"fa-circle-question"},{key:"changelog",label:"Log Pembaruan Sistem",desc:"Melihat riwayat update sistem toko",group:"konten",icon:"fa-code-branch"},{key:"reports",label:"Pusat Laporan & Keuangan",desc:"Laporan terpadu penjualan, stok, laba rugi, utang piutang, dan perpajakan",group:"sensitif",icon:"fa-chart-pie"},{key:"view_reports",label:"Laporan Finansial & Laba",desc:"Lihat omset, total HPP terjual, margin & laba bersih toko",group:"sensitif",icon:"fa-chart-line"},{key:"tax",label:"Pajak & Keuangan (PPN)",desc:"Laporan PPN, neraca keuangan, dan laba rugi resmi",group:"sensitif",icon:"fa-file-invoice-dollar"},{key:"banks",label:"Rekening Bank & QRIS",desc:"Ubah nomor rekening toko dan QRIS tujuan pembayaran",group:"sensitif",icon:"fa-building-columns"},{key:"settings",label:"Pengaturan Utama Toko",desc:"Konfigurasi nama toko, GPS maps, tarif ongkir, & sistem",group:"sensitif",icon:"fa-gear"},{key:"cashiers",label:"Kelola Staf & Hak Akses",desc:"Daftarkan staf baru, atur jabatan, & ubah batasan hak akses",group:"sensitif",icon:"fa-users-gear"},{key:"backup_sync",label:"Pusat Data & Backup Cloud",desc:"Cadangkan data toko, ekspor database, & sinkronisasi cloud",group:"sensitif",icon:"fa-cloud-arrow-up"}],pt={[W.CASHIER]:{pos:!0,orders:!1,products:!1,suppliers:!1,purchases:!1,piutang:!1,customers:!1,categories:!1,brands:!1,colors:!1,vouchers:!1,banners:!1,rewards:!1,reviews:!1,faqs:!1,changelog:!1,expenses:!1,stock_opname:!1,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[W.ADMIN]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},manager:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!0,view_reports:!0,tax:!0,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[W.OWNER]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,reports:!0,view_reports:!0,tax:!0,banks:!0,settings:!0,cashiers:!0,backup_sync:!0}};let $e=null;const De=()=>{if($e)return $e;try{const e=sessionStorage.getItem("freshmart_staff_profile");if(e)return $e=JSON.parse(e),$e}catch{}return null},js=e=>{$e=e;try{e?sessionStorage.setItem("freshmart_staff_profile",JSON.stringify(e)):sessionStorage.removeItem("freshmart_staff_profile")}catch{}},_s=()=>{$e=null;try{sessionStorage.removeItem("freshmart_staff_profile")}catch{}},Ke=()=>{const e=Ve.currentUser;if(e&&e.uid===ae)return!0;const t=De();if(t){const a=String(t.role||"").toLowerCase();if(a==="owner"||t.uid===ae)return!0;if(a==="cashier"||a==="kasir"||a==="staff")return!1}const s=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");if((window.isAdm||window.__localIsAdm)&&s&&!t)return!0;try{const a=sessionStorage.getItem("pos_cashier_session");if(a){const n=JSON.parse(a),o=String(n.role||"").toLowerCase();if(o==="owner"||n.uid===ae)return!0;if(o==="cashier"||o==="kasir"||o==="staff")return!1}}catch{}return!1},zs=()=>{if(Ke())return!0;if(sa())return!1;const e=De();return e?.role===W.ADMIN||String(e?.role||"").toLowerCase()==="admin"},sa=()=>{if(Ke())return!1;const e=De();if(e){const t=String(e.role||"").toLowerCase();if(t==="owner"||e.uid===ae)return!1;if(t==="cashier"||t==="kasir")return!0}try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const s=JSON.parse(t),a=String(s.role||"").toLowerCase();if(a==="owner"||s.uid===ae)return!1;if(a==="cashier"||a==="kasir"||a==="staff")return!0}}catch{}return!1},na=e=>{if(Ke())return!0;const t=De();if(t){if(t.isActive===!1)return!1;const s=String(t.role||"").toLowerCase();if(s===W.OWNER||s==="owner")return!0;if(s===W.CASHIER||s==="cashier"||s==="kasir")return e==="pos";if(t.permissions){if(typeof t.permissions[e]<"u")return t.permissions[e]===!0;if(e==="reports"&&(t.permissions.view_reports===!0||t.permissions.tax===!0)||(e==="view_reports"||e==="tax")&&t.permissions.reports===!0)return!0}return(pt[t.role]||pt[W.ADMIN])[e]===!0}try{const s=sessionStorage.getItem("pos_cashier_session");if(s){const a=JSON.parse(s),n=String(a.role||"").toLowerCase();if(n===W.OWNER||n==="owner"||a.uid===ae)return!0;if(n===W.CASHIER||n==="cashier"||n==="kasir")return e==="pos"}}catch{}return window.isAdm||window.__localIsAdm?["banks","settings","cashiers","backup_sync"].includes(e)?Ve.currentUser?.uid===ae:!0:!1},mt=()=>{if(typeof window<"u"&&(window.curViewName==="view-pos-cashier"||document.getElementById("view-pos-cashier")?.classList.contains("flex")||document.getElementById("pos-payment-modal")?.classList.contains("flex")||document.getElementById("pos-variant-sheet")?.classList.contains("flex")))try{const a=sessionStorage.getItem("pos_cashier_session");if(a){const n=JSON.parse(a),o=String(n.role||"").toLowerCase();return o===W.OWNER||o==="owner"||n.uid===ae}}catch{}if(Ke())return!0;const t=De();if(t){const a=String(t.role||"").toLowerCase();return a===W.OWNER||a==="owner"||t.uid===ae?!0:a===W.CASHIER||a==="cashier"||a==="kasir"?!1:na("view_reports")}const s=Ve.currentUser;return!!(s&&s.uid===ae||window.isAdm||window.__localIsAdm)},qs=e=>{switch(e){case W.OWNER:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-2xs">
                <i class="fa-solid fa-crown text-[9px] text-amber-500"></i>
                <span>Owner</span>
            </span>`;case W.ADMIN:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shadow-2xs">
                <i class="fa-solid fa-shield-halved text-[9px]"></i>
                <span>Admin Toko</span>
            </span>`;case W.CASHIER:default:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                <i class="fa-solid fa-cash-register text-[9px]"></i>
                <span>Kasir POS</span>
            </span>`}};typeof window<"u"&&(window.ROLES=W,window.PERMISSION_DEFINITIONS=Us,window.ROLE_PRESETS=pt,window.getActiveStaff=De,window.setActiveStaff=js,window.clearActiveStaff=_s,window.isOwnerUser=Ke,window.isAdminUser=zs,window.isCashierUser=sa,window.hasPermission=na,window.canViewHpp=mt,window.getRoleBadgeHtml=qs);let be="invoice",oa=!1;const tt=e=>{oa=e},Q=(e,t=!1)=>{if(!e)return"-";try{const s=e.toDate?e.toDate():new Date(e);if(isNaN(s.getTime()))return"-";const a={day:"2-digit",month:"short",year:"numeric"};return t&&(a.hour="2-digit",a.minute="2-digit"),s.toLocaleDateString("id-ID",a)}catch{return"-"}},Dt=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(2).replace(/\.?0+$/,"")},me=(e="w-16 h-16")=>m.store?.logo&&(m.store.logo.includes("http")||m.store.logo.includes("data:"))?`<img loading="eager" src="${i(m.store.logo)}" class="${e} object-contain shrink-0">`:`<div class="${e} primary-bg flex items-center justify-center rounded-xl text-white shrink-0"><i class="fa-solid fa-store text-2xl"></i></div>`,It=({docTitle:e,docNumber:t,docDate:s})=>`
    <div class="flex justify-between items-center border-b-2 border-slate-800 pb-2.5 mb-4 text-xs font-semibold select-none">
        <div class="flex items-center gap-2.5">
            ${me("w-8 h-8")}
            <div>
                <span class="font-black text-slate-900 uppercase text-xs sm:text-sm tracking-tight">${i(m.store?.name||"TOKO PUTRI")}</span>
                <span class="text-slate-300 mx-1.5">&bull;</span>
                <span class="font-bold text-slate-700 uppercase tracking-wider text-[11px]">${i(e)}</span>
            </div>
        </div>
        <div class="text-right font-mono text-slate-600 text-[11px]">
            ${t?`<span class="font-bold text-slate-900">${i(t)}</span> <span class="text-slate-400 mx-1">&bull;</span>`:""}
            <span>${i(s||"")}</span>
        </div>
    </div>
    `,Rt=(e,t,s)=>`
    <div class="a4-page-footer mt-auto pt-2.5 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono select-none">
        <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-700 uppercase">${i(m.store?.name||"TOKO PUTRI")}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-500">${i(s||"Dokumen Resmi")}</span>
        </div>
        <div class="flex items-center gap-1 font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
            <span>Halaman ${e} dari ${t}</span>
        </div>
    </div>
    `,ce=({docTitle:e,docNumber:t,docDate:s,kopHtml:a,metaHtml:n,tableHeaderHtml:o,rows:r=[],tableClass:l="w-full text-left border-collapse mb-4 text-xs",summaryHtml:d="",extraBlocksHtml:p="",signaturesHtml:w="",singlePageMax:f=6,itemsFirstPage:g=6,itemsMiddlePage:h=14,itemsLastPage:b=6})=>{const c=r.length;if(c<=f)return[`
        <div class="a4-page" data-page="1" data-total-pages="1">
            <div class="a4-page-body flex-1 flex flex-col">
                ${a}
                ${n||""}
                <table class="${l}">
                    <thead>${o}</thead>
                    <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${r.join("")}</tbody>
                </table>
                ${d||""}
                ${p||""}
                ${w||""}
            </div>
            ${Rt(1,1,e)}
        </div>
        `];const C=[],D=[],L=r.slice(0,g);D.push(L);let x=g;for(;x<c;){const v=c-x;if(v<=b)D.push(r.slice(x)),x=c;else{const A=Math.min(h,v);D.push(r.slice(x,x+A)),x+=A}}const y=D.length;return D.forEach((v,A)=>{const k=A+1,R=k===1,E=k===y;let I="";R?I=`
            ${a}
            ${n||""}
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${v.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${k+1}...
            </div>
            `:E?I=`
            ${It({docTitle:e,docNumber:t,docDate:s})}
            ${v.length>0?`
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${v.join("")}</tbody>
            </table>`:""}
            ${d||""}
            ${p||""}
            ${w||""}
            `:I=`
            ${It({docTitle:e,docNumber:t,docDate:s})}
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${v.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${k+1}...
            </div>
            `,C.push(`
        <div class="a4-page" data-page="${k}" data-total-pages="${y}">
            <div class="a4-page-body flex-1 flex flex-col">
                ${I}
            </div>
            ${Rt(k,y,e)}
        </div>
        `)}),C},Ws=(e,t=null)=>{if(be=e,e==="po"){const h=m.purchases||[],b=h.find(I=>String(I.id)===String(t))||(window.currentActivePoId?h.find(I=>String(I.id)===String(window.currentActivePoId)):h[0]);if(!b){typeof window.showToast=="function"&&window.showToast("Data PO tidak ditemukan!");return}X("doc-modal-title","Preview Purchase Order (PO)");const c=me("w-16 h-16"),C=Q(b.date||b.createdAt),D=b.poNumber||b.id,L=b.paymentType==="tempo"?`Tempo ${b.tempoDays||14} Hari (Jatuh Tempo: ${Q(b.tempoDueDate)})`:b.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai",x=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${c}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(m.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(m.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(m.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(m.store?.wa||m.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">PURCHASE ORDER</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(D)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${C}</p>
                <p class="text-xs font-bold mt-1 text-[var(--color-primary)]">Status: ${b.status==="ordered"?"DIPESAN":b.status==="received"?"DITERIMA":"SELESAI"}</p>
            </div>
        </div>
        `,y=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Kepada Rekanan / Supplier:</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${i(b.supplierName||"Supplier")}</p>
                ${b.supplierPhone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(b.supplierPhone)}</p>`:""}
                ${b.supplierAddress?`<p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${i(b.supplierAddress)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan & Pembayaran:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Termin Pembayaran:</span> <b class="text-slate-900">${L}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tujuan Pengiriman:</span> <b class="text-slate-900">${i(m.store?.name||"Gudang Utama Toko")}</b></p>
                ${b.notes?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${i(b.notes)}</p>`:""}
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
        `,A=(b.items||[]).map((I,M)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${M+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(I.name)}
                ${I.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(I.variantName)}</span>`:""}
                ${I.sku?`<span class="text-slate-400 text-[9.5px] font-mono block mt-0.5">SKU: ${i(I.sku)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${Dt(I.qty)} <span class="text-[10px] font-normal text-slate-500">${i(I.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${T(I.unitPrice)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${T(Math.round((parseFloat(I.qty)||0)*(parseFloat(I.unitPrice)||0)))}</td>
        </tr>
        `),k=`
        <div class="flex justify-end mb-6 mt-2">
            <div class="w-80 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk:</span><span class="font-bold text-slate-800">${T(b.subtotal)}</span></div>
                ${b.discount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Potongan Diskon:</span><span>-${T(b.discount)}</span></div>`:""}
                ${b.shippingFee>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim:</span><span>+${T(b.shippingFee)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL ORDER (PO):</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${T(b.total)}</span>
                </div>
            </div>
        </div>
        `,R=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-6 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Dipesan Oleh (Purchasing):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(m.store?.name||"Toko Putri")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Diterima &amp; Disetujui Oleh:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(b.supplierName||"Rekanan / Supplier")}</span>
            </div>
        </div>
        `,E=ce({docTitle:"Purchase Order",docNumber:`#${D}`,docDate:C,kopHtml:x,metaHtml:y,tableHeaderHtml:v,rows:A,summaryHtml:k,signaturesHtml:R,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});pe(E);return}if(e==="stock_opname"){const h=m.stockOpnameHistory||[],b=h.find(M=>String(M.id)===String(t)||String(M.soNumber)===String(t))||h[0];if(!b){typeof window.showToast=="function"&&window.showToast("Data Berita Acara Stock Opname tidak ditemukan!");return}X("doc-modal-title","Preview Berita Acara Stock Opname");const c=me("w-16 h-16"),C=Q(b.date,!0),D=b.soNumber||b.id,L=typeof mt=="function"?mt():!1,x=b.items||[],y=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${c}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(m.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(m.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(m.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(m.store?.wa||m.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">BERITA ACARA</h2>
                <h3 class="font-bold text-sm tracking-wider text-amber-600 uppercase">STOCK OPNAME FISIK</h3>
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${i(D)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${C}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Auditor: <b class="text-slate-900">${i(b.auditorName||"Staf Auditor")}</b></p>
            </div>
        </div>
        `,v=`
        <div class="grid grid-cols-4 gap-3 mb-5">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Total Diperiksa</span>
                <span class="text-lg font-black text-slate-800 font-mono">${b.totalItemsAudited||0}</span>
                <span class="text-[10px] text-slate-500 block">Item Produk</span>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Item Selisih</span>
                <span class="text-lg font-black ${b.totalWithDiff>0?"text-amber-600":"text-emerald-600"} font-mono">${b.totalWithDiff||0}</span>
                <span class="text-[10px] text-slate-500 block">Disesuaikan</span>
            </div>
            <div class="bg-rose-50 p-3 rounded-xl border border-rose-200 text-center">
                <span class="text-[9px] font-black uppercase text-rose-500 block tracking-wider">Total Kurang (Loss)</span>
                <span class="text-lg font-black text-rose-600 font-mono">−${b.totalLossUnits||0}</span>
                <span class="text-[10px] text-rose-500 block">${L?"−"+T(b.totalLossRp||0):"Pcs"}</span>
            </div>
            <div class="bg-amber-50 p-3 rounded-xl border border-amber-200 text-center">
                <span class="text-[9px] font-black uppercase text-amber-600 block tracking-wider">Total Lebih (Surplus)</span>
                <span class="text-lg font-black text-amber-600 font-mono">+${b.totalSurplusUnits||0}</span>
                <span class="text-[10px] text-amber-600 block">${L?"+"+T(b.totalSurplusRp||0):"Pcs"}</span>
            </div>
        </div>
        `,A=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Hasil Fisik</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Selisih</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Alasan &amp; Keterangan</th>
            ${L?'<th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Dampak HPP</th>':'<th class="py-2.5 px-3 rounded-tr-xl text-right w-16">Satuan</th>'}
        </tr>
        `,k=x.length===0?['<tr><td colspan="7" class="py-8 text-center text-slate-500 italic">Semua stok fisik barang dalam kondisi berimbang (100% Sesuai / Selisih 0).</td></tr>']:x.map((M,P)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${P+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${i(M.productName)}
                ${M.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${i(M.variantName)}</span>`:""}
                ${M.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(M.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center font-mono text-slate-600">${M.systemStock} ${i(M.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${M.physicalStock} ${i(M.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-bold font-mono ${M.diff<0?"text-rose-600":"text-amber-600"}">
                ${M.diff<0?`−${Math.abs(M.diff)}`:`+${M.diff}`}
            </td>
            <td class="py-2 px-3 text-[10.5px]">
                <span class="font-bold text-slate-800">${i(M.reason==="salah_hitung"?"Koreksi Kasir":M.reason==="rusak"?"Barang Rusak":M.reason==="hilang"?"Barang Hilang":M.reason==="kadaluarsa"?"Expired":M.reason==="bonus"?"Bonus Supplier":M.reason)}</span>
                ${M.notes?`<span class="text-slate-500 block italic">"${i(M.notes)}"</span>`:""}
            </td>
            ${L?`
                <td class="py-2 px-3 text-right font-mono font-bold ${M.diff<0?"text-rose-600":"text-amber-600"}">
                    ${M.diff<0?"−":"+"}${T(Math.abs(M.diffValueHpp||0))}
                </td>`:`
                <td class="py-2 px-3 text-right text-slate-500">${i(M.unit||"pcs")}</td>
            `}
        </tr>
        `),R=b.notes?`
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs mb-5 text-slate-700">
            <b class="text-slate-900">Catatan Auditor:</b> ${i(b.notes)}
        </div>`:"",E=`
        <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Pemeriksa / Auditor:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(b.auditorName||"Petugas Auditor")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Kepala Gudang / Kasir:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">Gudang Toko</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Mengetahui (Owner Toko):</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(m.store?.name||"Pimpinan")}</span>
            </div>
        </div>
        `,I=ce({docTitle:"Berita Acara Stock Opname",docNumber:`#${D}`,docDate:C,kopHtml:y,metaHtml:v,tableHeaderHtml:A,rows:k,extraBlocksHtml:R,signaturesHtml:E,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});pe(I);return}if(e==="stock_opname_worksheet"){X("doc-modal-title","Preview Lembar Kerja Hitung Fisik (Worksheet)");const h=me("w-14 h-14"),b=Q(new Date),c=m.products||[],C=[];c.forEach(k=>{!k||k.id==null||(k.variants&&k.variants.length>0?k.variants.forEach(R=>{C.push({name:k.name,variantName:R.name,sku:R.sku||k.sku||"",category:k.category||"Umum",unit:k.unit||"pcs",systemStock:parseFloat(R.stock)||0})}):C.push({name:k.name,variantName:"",sku:k.sku||"",category:k.category||"Umum",unit:k.unit||"pcs",systemStock:parseFloat(k.stock)||0}))});const D=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3">
                ${h}
                <div>
                    <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${i(m.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${i(m.store?.slogan||"Pusat Alat Teknik & Bangunan")}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${i(m.store?.address||"")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-wider text-slate-900 uppercase">LEMBAR KERJA AUDIT</h2>
                <h3 class="font-bold text-xs tracking-widest text-amber-600 uppercase">STOCK OPNAME FISIK RAK</h3>
                <p class="text-xs font-medium text-slate-500 mt-1">Tanggal Cetak: <b>${b}</b></p>
                <p class="text-xs font-medium text-slate-500">Total Item: <b>${C.length} Baris</b></p>
            </div>
        </div>
        `,L=`
        <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[10px] text-slate-600 mb-4 flex items-center justify-between">
            <span><b>Petunjuk:</b> Hitung fisik barang di rak/gudang secara teliti. Tulis angka aktual pada kolom <b>HASIL FISIK</b> dan beri catatan bila ada barang rusak/cacat.</span>
        </div>
        `,x=`
        <tr class="border-b-2 border-slate-800 text-[9.5px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">Cek</th>
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">No</th>
            <th class="py-2 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi Varian</th>
            <th class="py-2 px-2 border-r border-slate-700 w-28">Kategori / Rak</th>
            <th class="py-2 px-2 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2 px-2 text-center w-28 border-r border-slate-700 bg-amber-900/60">HASIL FISIK</th>
            <th class="py-2 px-3 text-left w-36">Kondisi &amp; Catatan</th>
        </tr>
        `,y=C.map((k,R)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200"><span class="inline-block w-3.5 h-3.5 border border-slate-400 rounded-sm"></span></td>
            <td class="py-2 px-2 text-center font-mono text-slate-400 border-r border-slate-200">${R+1}</td>
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
        `),A=ce({docTitle:"Lembar Kerja Audit Rak",docNumber:`TOTAL ${C.length} ITEM`,docDate:b,kopHtml:D,metaHtml:L,tableHeaderHtml:x,rows:y,tableClass:"w-full text-left border-collapse mb-4 text-[11px]",signaturesHtml:`
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
        `,singlePageMax:16,itemsFirstPage:15,itemsMiddlePage:20,itemsLastPage:14});pe(A);return}if(e==="tempo_invoice"){const h=t||window.cVOrd;let c=(window.cachedPiutangOrders||[]).find(N=>String(N.orderId)===String(h))||(window.gOrds||[]).find(N=>String(N.orderId)===String(h));if(!c&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(h)&&(c=window.lastPrintedOrder),!c){typeof window.showToast=="function"&&window.showToast("Data nota tagihan piutang tidak ditemukan!");return}X("doc-modal-title","Preview Nota Tagihan Piutang (Tempo)");const C=me("w-16 h-16"),D=Q(c.dateString||c.timestamp),L=parseFloat(c.payment?.tempoBalance)||0,x=c.payment?.tempoPenaltyRate!==void 0?parseFloat(c.payment.tempoPenaltyRate):1,y=c.payment?.tempoPenaltyStopped===!0;let v=0;const A=c.payment?.tempoDueDate||0;let k=0,R=0,E=!1,I=!1;const M=Date.now();A>0&&(M>A?(k=Math.floor((M-A)/(24*60*60*1e3)),k>0&&(E=!0)):(R=Math.ceil((A-M)/(24*60*60*1e3)),R<=3&&(I=!0))),y?v=parseFloat(c.payment?.tempoFixedPenalty)||0:E&&(v=x/100*L*k);const P=L+v,S=c.payment?.installments||[],O=S.reduce((N,le)=>N+(parseFloat(le.amount)||0),0),_=c.payment?.grandTotal||L+O,Y=c.payment?.paymentStatus==="lunas"||L<=0,j=!!(c.payment?.isPaylater||c.isPaylater||c.payment?.subMethod==="paylater");let B=j?"PAYLATER BERJALAN":"TEMPO BERJALAN",re="text-blue-600 bg-blue-50 border-blue-200";Y?(B="LUNAS SEPENUHNYA",re="text-emerald-600 bg-emerald-50 border-emerald-300"):E?(B=`TERLAMBAT ${k} HARI`,re="text-rose-600 bg-rose-50 border-rose-300"):I&&(B=`JATUH TEMPO H-${R<=0?"0":R}`,re="text-amber-600 bg-amber-50 border-amber-300");const ne=m.banks&&m.banks.length>0?m.banks.map(N=>`<div class="font-mono text-xs"><b class="text-slate-900">${i(N.bank)}:</b> ${i(N.number)} a/n ${i(N.name)}</div>`).join(""):'<div class="text-xs text-slate-500 italic">Hubungi kasir untuk info rekening transfer bank</div>',ve=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${C}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(m.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(m.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(m.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(m.store?.wa||m.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">${j?"NOTA PUTRI PAYLATER":"NOTA TAGIHAN PIUTANG"}</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(c.orderId)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tgl Transaksi: ${D}</p>
                <div class="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${re}">
                    ${i(B)}
                </div>
            </div>
        </div>
        `,Xe=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ditujukan Kepada (Debitur / Pelanggan):</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-0.5">${i(c.customer?.name||"Pelanggan")}</p>
                ${c.customer?.wa||c.customer?.phone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> +${i(c.customer.wa||c.customer.phone)}</p>`:""}
                <p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${i(c.customer?.address||"Alamat di toko / pelanggan tempo")}</p>
                ${c.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${i(c.customer.note)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan Jatuh Tempo:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tanggal Jatuh Tempo:</span> <b class="text-slate-900 font-mono">${Q(A)}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Sistem Pembayaran:</span> <b class="${j?"text-emerald-700 font-bold":"text-slate-900"} uppercase">${j?"Putri PayLater Member VIP":"Tempo / Bertahap"}</b></p>
                ${j?`<p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tenor Cicilan:</span> <b class="text-emerald-800 font-bold uppercase">${c.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":c.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)"}</b></p>`:""}
                ${E?`<p class="text-xs font-bold text-rose-600 mb-1"><span class="text-slate-500">Status:</span> Lewat ${k} Hari (Denda ${x}%/hari)</p>`:""}
                <p class="text-xs font-semibold text-slate-700"><span class="text-slate-500">Kasir / Admin:</span> <b class="text-slate-900 uppercase">${i(c.cashierName||"Kasir Toko")}</b></p>
            </div>
        </div>
        `,ie=`
        <tr class="border-b-2 border-slate-800 text-[10.5px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Satuan</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `,ke=(c.items||[]).map((N,le)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${le+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(N.name)}
                ${N.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(N.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${Dt(N.qty)} <span class="text-[10px] font-normal text-slate-500">${i(N.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${T(N.effectivePrice||N.price)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${T(N.subtotal||Math.round((parseFloat(N.qty)||0)*(parseFloat(N.effectivePrice||N.price)||0)))}</td>
        </tr>
        `);let we="";j&&Array.isArray(c.payment?.paylaterSchedule)&&c.payment.paylaterSchedule.length>0&&(we=`
            <div class="mb-5">
                <h3 class="text-xs font-black text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <i class="fa-solid fa-calendar-check text-emerald-600"></i> Rencana Jadwal Angsuran Cicilan (${c.payment?.paylaterMonths||1}x):
                </h3>
                <table class="w-full text-left border border-slate-200 rounded-xl overflow-hidden text-xs">
                    <thead class="bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
                        <tr>
                            <th class="py-2 px-3 w-14 text-center border-b border-slate-200">Cicilan</th>
                            <th class="py-2 px-3 border-b border-slate-200">Termin</th>
                            <th class="py-2 px-3 text-right border-b border-slate-200">Pokok</th>
                            <th class="py-2 px-3 text-right border-b border-slate-200">Biaya Admin + Layanan</th>
                            <th class="py-2 px-3 text-right border-b border-slate-200">Total Angsuran</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 font-mono">
                        ${c.payment.paylaterSchedule.map(N=>`
                        <tr class="hover:bg-slate-50">
                            <td class="py-1.5 px-3 text-center text-slate-700 font-bold">Ke-${N.month}</td>
                            <td class="py-1.5 px-3 text-slate-700 font-sans font-medium">Bulan Ke-${N.month}</td>
                            <td class="py-1.5 px-3 text-right text-slate-600">${T(N.principal)}</td>
                            <td class="py-1.5 px-3 text-right text-slate-500">${T((N.adminFee||0)+(N.serviceFee||0))}</td>
                            <td class="py-1.5 px-3 text-right font-black text-emerald-700">${T(N.totalInstallment)}</td>
                        </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>`);const Pe=`
        ${we}
        ${S.length>0?`
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
                    ${S.map((N,le)=>`
                    <tr class="hover:bg-slate-50">
                        <td class="py-1.5 px-3 text-center text-slate-500">${le+1}</td>
                        <td class="py-1.5 px-3 text-slate-700">${Q(N.date)}</td>
                        <td class="py-1.5 px-3 uppercase text-slate-600 font-bold">${i(N.method||"Tunai")}</td>
                        <td class="py-1.5 px-3 text-right font-bold text-emerald-600">+ ${T(N.amount)}</td>
                        <td class="py-1.5 px-3 text-slate-500 text-[11px] font-sans">${i(N.note||"-")}</td>
                    </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>`:""}
        `,Ue=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran:
                </h4>
                <div class="space-y-1 pt-0.5">${ne}</div>
                <p class="text-[9.5px] text-slate-500 pt-1.5 border-t border-slate-200">Konfirmasi bukti transfer ke nomor resmi WhatsApp toko kami.</p>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Awal:</span><span class="font-bold text-slate-800">${T(_)}</span></div>
                ${j?`<div class="flex justify-between text-emerald-600 font-bold"><span>Limit PayLater Terpakai:</span><span>${T(c.payment?.paylaterUsed||_-(c.payment?.tempoDp||c.payment?.dp||0))}</span></div>`:""}
                ${j&&c.payment?.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater:</span><span class="font-bold">+${T(c.payment.paylaterAdminFee)}</span></div>`:""}
                ${j&&c.payment?.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan:</span><span class="font-bold">+${T(c.payment.paylaterServiceFee)}</span></div>`:""}
                ${(parseFloat(c.payment?.tempoDp||c.payment?.dp)||0)>0?`<div class="flex justify-between text-slate-600"><span>Uang Muka (DP Dibayar):</span><span class="font-bold">${T(c.payment?.tempoDp||c.payment?.dp||0)}</span></div>`:""}
                ${O>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Masuk:</span><span>-${T(O)}</span></div>`:""}
                <div class="flex justify-between text-slate-700 font-bold"><span>${j?"Sisa Pokok PayLater:":"Sisa Pokok Piutang:"}</span><span>${T(L)}</span></div>
                ${j&&c.payment?.paylaterMonthlyInstallment?`<div class="flex justify-between text-emerald-700 font-black"><span>Angsuran per Bulan (${c.payment?.paylaterMonths||1}x):</span><span>${T(c.payment.paylaterMonthlyInstallment)}/bln</span></div>`:""}
                ${v>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Denda Keterlambatan:</span><span>+${T(v)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>${j?"SISA TAGIHAN PAYLATER:":"SISA WAJIB BAYAR:"}</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${T(Y?0:P)}</span>
                </div>
            </div>
        </div>
        `,kt=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Yang Berhutang (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(c.customer?.name||"Pelanggan")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Kasir Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(m.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,Ie=ce({docTitle:j?"Nota Putri PayLater":"Nota Tagihan Piutang",docNumber:`#${c.orderId}`,docDate:D,kopHtml:ve,metaHtml:Xe,tableHeaderHtml:ie,rows:ke,extraBlocksHtml:Pe,summaryHtml:Ue,signaturesHtml:kt,singlePageMax:5,itemsFirstPage:5,itemsMiddlePage:12,itemsLastPage:4});pe(Ie);return}if(e==="tempo_customer_ledger"){const h=String(t||"").trim(),c=(window.cachedPiutangOrders||[]).filter(B=>{const re=String(B.customer?.phone||B.customer?.wa||"").replace(/\D/g,""),ne=String(B.customer?.name||"").toLowerCase().trim(),ve=h.replace(/\D/g,"");return!!(ve.length>=8&&re.includes(ve)||ne&&h.toLowerCase().includes(ne))});if(c.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada nota piutang aktif untuk pelanggan ini.");return}const C=c[0].customer||{},D=C.name||"Pelanggan",L=C.wa||C.phone||"-";X("doc-modal-title",`Kartu Piutang: ${D}`);const x=me("w-16 h-16"),y=Q(Date.now());let v=0,A=0,k=0,R=0,E=0;const I=c.map((B,re)=>{const ne=parseFloat(B.payment?.tempoBalance)||0,ve=B.payment?.tempoPenaltyRate!==void 0?parseFloat(B.payment.tempoPenaltyRate):1,Xe=B.payment?.tempoPenaltyStopped===!0;let ie=0;const ke=B.payment?.tempoDueDate||0;let we=0,Pe=!1;const Ue=Date.now();ke>0&&Ue>ke&&(we=Math.floor((Ue-ke)/(24*60*60*1e3)),we>0&&(Pe=!0)),Xe?ie=parseFloat(B.payment?.tempoFixedPenalty)||0:Pe&&(ie=ve/100*ne*we);const Ie=(B.payment?.installments||[]).reduce((ra,ia)=>ra+(parseFloat(ia.amount)||0),0),N=B.payment?.grandTotal||ne+Ie,le=ne+ie;return v+=N,A+=Ie,k+=ne,R+=ie,E+=le,`
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="py-2.5 px-3 text-center font-mono text-slate-500">${re+1}</td>
                <td class="py-2.5 px-3 font-mono font-bold text-slate-800">#${i(B.orderId)}</td>
                <td class="py-2.5 px-3 font-medium text-slate-600">${Q(B.dateString||B.timestamp)}</td>
                <td class="py-2.5 px-3 font-mono ${Pe?"text-rose-600 font-bold":"text-slate-700"}">${Q(ke)} ${Pe?`<span class="text-[9.5px] text-rose-500">(+${we}h)</span>`:""}</td>
                <td class="py-2.5 px-3 text-right font-mono text-slate-600">${T(N)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-600 font-bold">${T(Ie)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-rose-600">${ie>0?T(ie):"-"}</td>
                <td class="py-2.5 px-3 text-right font-mono font-black text-slate-900">${T(le)}</td>
            </tr>
            `}),M=m.banks&&m.banks.length>0?m.banks.map(B=>`<div class="font-mono text-xs"><b class="text-slate-900">${i(B.bank)}:</b> ${i(B.number)} a/n ${i(B.name)}</div>`).join(""):'<div class="text-xs text-slate-500 italic">Hubungi kasir untuk info rekening transfer bank</div>',P=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${x}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(m.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(m.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(m.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(m.store?.wa||m.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">KARTU PIUTANG PELANGGAN</h2>
                <p class="text-xs font-bold text-slate-600 mt-1">STATEMENT OF ACCOUNT</p>
                <p class="text-xs font-semibold text-slate-500 mt-0.5">Dicetak: ${y}</p>
                <span class="inline-block mt-1.5 px-3 py-0.5 bg-amber-50 text-amber-700 border border-amber-300 rounded-full text-[11px] font-black uppercase tracking-wider">
                    ${c.length} NOTA BELUM LUNAS
                </span>
            </div>
        </div>
        `,S=`
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Informasi Debitur / Pelanggan:</h3>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="text-[11px] text-slate-500">Nama Pelanggan / Badan:</p>
                    <p class="font-bold text-base text-slate-900 uppercase">${i(D)}</p>
                </div>
                <div>
                    <p class="text-[11px] text-slate-500">Nomor WhatsApp / HP:</p>
                    <p class="font-mono font-bold text-base text-emerald-600">+${i(L)}</p>
                </div>
            </div>
        </div>
        `,O=`
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
                <div class="space-y-1 pt-0.5">${M}</div>
                <p class="text-[9.5px] text-slate-500 pt-1.5 border-t border-slate-200">Kartu piutang ini mencatat seluruh tagihan aktif per tanggal cetak.</p>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Keseluruhan:</span><span class="font-bold text-slate-800">${T(v)}</span></div>
                <div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Diterima (-):</span><span>-${T(A)}</span></div>
                <div class="flex justify-between text-slate-700 font-bold"><span>Total Sisa Pokok Piutang:</span><span>${T(k)}</span></div>
                ${R>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Total Denda (+):</span><span>+${T(R)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL AKUMULASI PIUTANG:</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${T(E)}</span>
                </div>
            </div>
        </div>
        `,Y=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Penerima Tagihan (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(D)}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Pemilik Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(m.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,j=ce({docTitle:"Kartu Piutang Pelanggan",docNumber:"STATEMENT OF ACCOUNT",docDate:y,kopHtml:P,metaHtml:S,tableHeaderHtml:O,rows:I,summaryHtml:_,signaturesHtml:Y,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});pe(j);return}const s=t||window.cVOrd,a=(window.gOrds||[]).find(h=>String(h.orderId)===String(s))||(window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(s)?window.lastPrintedOrder:null);if(!a){typeof window.showToast=="function"&&window.showToast("Data pesanan tidak ditemukan!");return}X("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const n=a.dateString?new Date(a.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"",r=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${me("w-16 h-16")}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(m.store?.name||"TOKO PUTRI")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(m.store?.slogan||"General Supplier")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(m.store?.address||"Alamat fisik toko")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(m.store?.wa||"-")}</p>
                ${a.payment?.taxNpwp||m.store?.taxNpwp?`<p class="text-xs font-semibold text-slate-600 mt-0.5"><i class="fa-solid fa-id-card text-blue-500"></i> NPWP Toko: <span class="font-mono">${i(a.payment?.taxNpwp||m.store.taxNpwp)}</span></p>`:""}
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl sm:text-3xl tracking-widest ${e==="invoice"?"text-blue-600":"text-amber-600"} uppercase">${e==="invoice"?a.payment?.method==="tempo"?"PROFORMA INVOICE":"INVOICE":"SURAT JALAN"}</h2>
            <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(a.orderId)}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${n}</p>
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
    `,d=Array.isArray(a.items)?a.items:Array.isArray(a.cart)?a.cart:[];if(e==="invoice"){const h=`
        <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
            <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Produk &amp; Varian</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Sat.</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total</th>
        </tr>
        `,b=d.map((x,y)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${y+1}</td>
            <td class="py-2.5 px-3 font-bold flex items-center gap-1.5">
                ${i(x.name)} 
                ${x.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${i(x.variantName)}</span>`:""}
                ${x.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${i(x.colorCode)};"></span>`:""}
                ${x.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${i(x.poTime)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${parseFloat(x.qty)} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(x.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${T(x.effectivePrice)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${T(x.effectivePrice*parseFloat(x.qty))}</td>
        </tr>
        `);let c="";if((a.pointsEarned>0||a.finalMemberPoints!==void 0&&a.finalMemberPoints!==null)&&(c+=`
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 flex items-center gap-4">
                <div class="w-8 h-8 rounded-lg bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
                ${a.pointsEarned>0?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-sm text-amber-700">+${a.pointsEarned}</p></div>`:""}
                ${a.finalMemberPoints!==void 0&&a.finalMemberPoints!==null?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Member</p><p class="font-bold text-sm text-amber-700">${a.finalMemberPoints}</p></div>`:""}
            </div>`),a.claimedReward&&(c+=`
            <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-3 mb-4 flex items-center justify-between gap-4">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                    <div>
                        <p class="text-[9px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${a.claimedReward.pointsCost} Poin)</p>
                        <p class="font-bold text-xs text-violet-800 uppercase">${i(a.claimedReward.name)}</p>
                    </div>
                </div>
                <span class="text-[9.5px] font-bold px-2.5 py-1 rounded-lg bg-violet-600 text-white uppercase tracking-wider">${i(a.claimedReward.status==="ready"?"SERTAKAN PENGIRIMAN":"KLAIM RESMI")}</span>
            </div>`),a.payment?.method==="tempo")if(!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater")){const y=a.payment?.paylaterMonths||1,v=a.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":a.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)";c+=`
                <div class="mb-4 border border-emerald-200 bg-emerald-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-emerald-800 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-handshake text-emerald-600 mr-1"></i> Putri PayLater (${v}):</h4>
                    <p class="text-[9.5px] text-emerald-700 font-semibold leading-relaxed">
                        Sistem pembayaran cicilan resmi Toko Putri tanpa biaya tersembunyi. Jatuh Tempo: ${a.payment.tempoDueDate?new Date(a.payment.tempoDueDate).toLocaleDateString("id-ID"):"-"}.
                        ${a.payment.paylaterMonthlyInstallment?` Angsuran: <b>${T(a.payment.paylaterMonthlyInstallment)} / bulan</b> (${y}x).`:""}
                    </p>
                </div>`}else c+=`
                <div class="mb-4 border border-pink-200 bg-pink-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-pink-700 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo:</h4>
                    <p class="text-[9.5px] text-pink-600 font-semibold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${a.payment.tempoDueDate?new Date(a.payment.tempoDueDate).toLocaleDateString("id-ID"):"-"}). Keterlambatan dikenakan denda sesuai regulasi toko.</p>
                </div>`;const C=`
        <div class="flex justify-end mb-5">
            <div class="w-1/2 md:w-[45%] space-y-1.5 text-xs font-bold text-slate-700">
                <div class="flex justify-between px-3"><span>Subtotal Produk</span><span class="font-mono">${T(a.payment?.subtotal)}</span></div>
                ${a.payment?.shippingCost?`<div class="flex justify-between px-3"><span>Ongkos Kirim</span><span class="font-mono">${T(a.payment.shippingCost)}</span></div>`:""}
                ${a.payment?.shippingDiscount?`<div class="flex justify-between px-3 text-emerald-600"><span>Diskon Ongkir</span><span class="font-mono">-${T(a.payment.shippingDiscount)}</span></div>`:""}
                ${a.payment?.productDiscount?`<div class="flex justify-between px-3 text-rose-600"><span>Diskon Produk</span><span class="font-mono">-${T(a.payment.productDiscount)}</span></div>`:""}
                ${a.payment?.paylaterAdminFee>0?`<div class="flex justify-between px-3 text-slate-600"><span>Biaya Admin PayLater</span><span class="font-mono">+${T(a.payment.paylaterAdminFee)}</span></div>`:""}
                ${a.payment?.paylaterServiceFee>0?`<div class="flex justify-between px-3 text-slate-600"><span>Biaya Penanganan / Layanan</span><span class="font-mono">+${T(a.payment.paylaterServiceFee)}</span></div>`:""}
                ${(()=>{if(!((a.payment?.ppnEnabled||a.payment?.ppnShowZero||a.payment?.ppnRate===0||a.payment?.ppnAmount&&a.payment.ppnAmount>0)&&(m.store?.ppnEnabled||a.payment?.ppnEnabled)))return"";const y=a.payment?.ppnType==="inclusive",v=a.payment?.ppnRate!==void 0?a.payment.ppnRate:m.store?.ppnRate||0,A=a.payment?.ppnAmount||0,k=a.payment?.ppnLabel||`${y?"Termasuk PPN":"PPN"} (${v}%)`,R=(a.payment?.subtotal||0)-(a.payment?.productDiscount||0)+(a.payment?.shippingCost||0)-(a.payment?.shippingDiscount||0),E=a.payment?.dppAmount!==void 0?a.payment.dppAmount:y&&v>0?Math.round(R*100/(100+v)):Math.max(0,R);return`
                    <div class="flex justify-between px-3 text-slate-600"><span>DPP</span><span class="font-mono">${T(E)}</span></div>
                    <div class="flex justify-between px-3 text-amber-600"><span>${k}</span><span class="font-mono">${A>0?(y?"":"+")+T(A):"Rp 0"}</span></div>
                    `})()}
                
                <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-2 shadow-xs">
                    <span class="font-bold text-xs uppercase tracking-widest">Grand Total</span>
                    <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${T(a.payment?.grandTotal)}</span>
                </div>
                ${a.payment?.method==="tempo"?`
                <div class="flex justify-between px-3 mt-2 text-emerald-600"><span>${a.payment?.isPaylater||a.payment?.subMethod==="paylater"?"Limit Terpakai / DP":"Uang Muka (DP)"}</span><span class="font-mono">${T(a.payment?.tempoDp||0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-2.5 rounded-xl mt-1 border border-rose-200">
                    <span class="font-bold text-xs uppercase tracking-widest">${a.payment?.isPaylater||a.payment?.subMethod==="paylater"?"Tagihan PayLater":"Sisa Tagihan"}</span>
                    <span class="font-mono text-sm font-bold tracking-tight">${T(a.payment?.tempoBalance||0)}</span>
                </div>
                ${(a.payment?.isPaylater||a.payment?.subMethod==="paylater")&&a.payment?.paylaterMonthlyInstallment?`
                <div class="flex justify-between px-3 mt-1 text-[11px] text-emerald-700 font-bold">
                    <span>Angsuran per Bulan (${a.payment?.paylaterMonths||1}x)</span>
                    <span class="font-mono">${T(a.payment.paylaterMonthlyInstallment)}/bln</span>
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
                <span class="font-bold text-slate-900 uppercase">${i(m.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,L=ce({docTitle:a.payment?.method==="tempo"?"Proforma Invoice":"Faktur Invoice",docNumber:`#${a.orderId}`,docDate:n,kopHtml:r,metaHtml:l,tableHeaderHtml:h,rows:b,extraBlocksHtml:c,summaryHtml:C,signaturesHtml:D,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:12,itemsLastPage:5});pe(L);return}const p=`
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Nama &amp; Spesifikasi Barang</th>
        <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Satuan</th>
        <th class="py-2.5 px-3 rounded-tr-xl text-center w-24">Ceklis Gudang</th>
    </tr>
    `,w=d.map((h,b)=>`
    <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3 text-center font-mono text-slate-500">${b+1}</td>
        <td class="py-2.5 px-3 font-bold uppercase flex items-center gap-1.5">
            ${i(h.name)} 
            ${h.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${i(h.variantName)}</span>`:""}
            ${h.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${i(h.colorCode)};"></span>`:""}
            ${h.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${i(h.poTime)}</span>`:""}
        </td>
        <td class="py-2.5 px-3 text-center font-bold text-base text-slate-800">${parseFloat(h.qty)}</td>
        <td class="py-2.5 px-3 text-center text-slate-500 font-bold uppercase text-[11px]">${i(h.unit||"pcs")}</td>
        <td class="py-2.5 px-3 text-center"><div class="w-4 h-4 border-2 border-slate-400 mx-auto rounded-sm shadow-inner"></div></td>
    </tr>
    `),f=`
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
            <span class="font-bold text-slate-900 uppercase">${i(m.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,g=ce({docTitle:"Surat Jalan Pengiriman",docNumber:`#${a.orderId}`,docDate:n,kopHtml:r,metaHtml:l,tableHeaderHtml:p,rows:w,signaturesHtml:f,singlePageMax:8,itemsFirstPage:8,itemsMiddlePage:16,itemsLastPage:9});pe(g)},Vs=()=>{const e=window.cart||[];if(!e||e.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}be="sph";const t="SPH-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.floor(1e3+Math.random()*9e3),s=Q(new Date),a=Q(new Date(Date.now()+14*24*60*60*1e3));X("doc-modal-title","Surat Penawaran Harga (SPH)");const n=me("w-16 h-16"),o=typeof window.getEffP=="function"?window.getEffP:c=>c.price||0;let r=0;const l=e.map((c,C)=>{const D=parseFloat(c.qty)||1,L=o(c),x=D*L;return r+=x,`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${C+1}</td>
            <td class="py-2.5 px-3 font-bold">
                ${i(c.name)}
                ${c.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${i(c.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${D} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(c.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${T(L)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${T(x)}</td>
        </tr>
        `}),d=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${n}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(m.store?.name||"Toko Putri")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(m.store?.slogan||"General Supplier & Alat Teknik")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(m.store?.address||"Alamat fisik toko")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(m.store?.wa||"-")}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl tracking-widest text-emerald-600 uppercase">PENAWARAN HARGA</h2>
            <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${t}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${s}</p>
            <span class="inline-block mt-1 px-2.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-300 rounded text-[10px] font-bold uppercase tracking-wider">
                Berlaku s/d: ${a}
            </span>
        </div>
    </div>
    `,p=`
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
    `,w=`
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
            <div class="flex justify-between px-3"><span>Subtotal Estimasi</span><span class="font-mono">${T(r)}</span></div>
            <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-1 shadow-xs">
                <span class="font-bold text-xs uppercase tracking-widest">Total Penawaran</span>
                <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${T(r)}</span>
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
    `,h=`
    <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-4 border-t border-slate-200">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Menyetujui / Klien Proyek:</span>
            <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">Nama Terang &amp; Stempel</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Hormat Kami:</span>
            <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900 uppercase">${i(m.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,b=ce({docTitle:"Surat Penawaran Harga",docNumber:`#${t}`,docDate:s,kopHtml:d,metaHtml:p,tableHeaderHtml:w,rows:l,summaryHtml:f,extraBlocksHtml:g,signaturesHtml:h,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:5});pe(b)},pe=e=>{const t=u("doc-paper-content");if(!t)return;t.innerHTML=e.join("");const s=e.length,a=u("doc-page-count-badge");a&&(a.textContent=`${s} Halaman A4`),Gs(s)},Gs=(e=1)=>{const t=u("doc-preview-modal"),s=u("doc-preview-modal-box");t&&t.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),Ge(t,s),vt()},vt=()=>{const e=u("doc-paper-scroll-area"),t=u("doc-paper-content"),s=u("doc-paper-wrapper");if(!e||!t||!s)return;const a=794,n=window.innerWidth<640?12:32,o=e.clientWidth-n,r=Math.min(1,Math.max(.2,o/a));t.style.transform=`translateX(-50%) scale(${r})`;const l=t.offsetHeight||t.scrollHeight;s.style.height=l*r+48+"px"};window.addEventListener("resize",()=>{const e=u("doc-preview-modal");e&&!e.classList.contains("hidden")&&vt()});const Ys=(e=!1)=>{const t=u("doc-preview-modal"),s=u("doc-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{he(t,s)}):he(t,s))},Js=()=>{const e=u("doc-paper-content"),t=e?e.innerHTML:"";if(!t){typeof window.showToast=="function"&&window.showToast("Tidak ada dokumen yang dicetak!");return}if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){let o=u("a4-print-section");o||(o=document.createElement("div"),o.id="a4-print-section",document.body.appendChild(o)),o.innerHTML=t,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500);return}const s=window.open("","_blank"),n=`<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>${i(be==="invoice"?"Faktur Invoice":be==="po"?"Purchase Order":be==="sph"?"Penawaran Harga":be==="stock_opname"?"Berita Acara Stock Opname":"Dokumen Resmi A4")} - Cetak A4 Standar Presisi</title>
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
</html>`;if(!s){let o=document.getElementById("a4-print-fallback-iframe");o||(o=document.createElement("iframe"),o.id="a4-print-fallback-iframe",o.style.position="fixed",o.style.right="0",o.style.bottom="0",o.style.width="0",o.style.height="0",o.style.border="0",o.style.opacity="0",document.body.appendChild(o));const r=o.contentWindow.document;r.open(),r.write(n),r.close(),setTimeout(()=>{try{o.contentWindow.focus(),o.contentWindow.print()}catch(l){console.warn("[DocPrint] Fallback iframe print error:",l)}},650);return}s.document.open(),s.document.write(n),s.document.close()},Qs=async e=>{if(!oa){tt(!0),ze(e==="image"?"Membuat Gambar HD...":"Menyusun Dokumen PDF A4...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{at(),tt(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const t=u("doc-paper-content");if(!t)throw new Error("Elemen dokumen tidak ditemukan.");let s=Array.from(t.querySelectorAll(".a4-page"));s.length===0&&(s=[t]);const a=window.cVOrd||Date.now().toString(36).toUpperCase(),n=`${be.toUpperCase()}_${a}`,o=async r=>{const l=document.createElement("div");l.style.position="fixed",l.style.top="-9999px",l.style.left="-9999px",l.style.width="794px",l.style.height="1123px",l.style.backgroundColor="#ffffff",l.style.overflow="hidden",l.style.zIndex="-9999";const d=r.cloneNode(!0);d.style.margin="0 auto",d.style.boxShadow="none",d.style.border="none",d.style.borderRadius="0",d.style.transform="none",d.style.width="794px",d.style.height="1123px",d.style.minHeight="1123px",d.style.maxHeight="1123px",d.style.overflow="hidden",l.appendChild(d),document.body.appendChild(l);const p=Array.from(d.querySelectorAll("img"));await Promise.all(p.map(f=>f.complete?Promise.resolve():new Promise(g=>{f.addEventListener("load",g,{once:!0}),f.addEventListener("error",g,{once:!0})}))),await new Promise(f=>setTimeout(f,200));const w=await html2canvas(l,{scale:2,useCORS:!0,backgroundColor:"#ffffff",width:794,height:1123,windowWidth:794,windowHeight:1123});return document.body.removeChild(l),w};if(e==="image")if(s.length===1){const l=(await o(s[0])).toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(l,`${n}.png`,"image/png");else{const d=document.createElement("a");d.download=`${n}.png`,d.href=l,d.click()}typeof window.showToast=="function"&&window.showToast("Gambar A4 Presisi Berhasil Disimpan!")}else{for(let r=0;r<s.length;r++){ze(`Menyimpan Gambar Halaman ${r+1} dari ${s.length}...`);const d=(await o(s[r])).toDataURL("image/png",1),p=`${n}_Hal_${r+1}.png`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(d,p,"image/png");else{const w=document.createElement("a");w.download=p,w.href=d,w.click()}await new Promise(w=>setTimeout(w,250))}typeof window.showToast=="function"&&window.showToast(`Berhasil menyimpan ${s.length} gambar halaman A4!`)}else{const r=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,l=new r({orientation:"portrait",unit:"mm",format:"a4"});for(let d=0;d<s.length;d++){ze(`Menyusun PDF Hal ${d+1} dari ${s.length}...`);const w=(await o(s[d])).toDataURL("image/jpeg",.95);d>0&&l.addPage("a4","portrait"),l.addImage(w,"JPEG",0,0,210,297,void 0,"FAST")}window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"?window.AndroidNativeApp.saveOrShareFile(l.output("datauristring"),`${n}.pdf`,"application/pdf"):l.save(`${n}.pdf`),typeof window.showToast=="function"&&window.showToast(`File PDF Standar A4 (${s.length} Halaman) Berhasil Disimpan!`)}}catch(t){console.error("Export Error: ",t),typeof window.showToast=="function"&&window.showToast(t&&t.message?`Gagal: ${t.message}`:"Gagal memproses dokumen.")}finally{at(),tt(!1)}}};window.openDocPreview=Ws;window.openCartSPHPreview=Vs;window.fitDocPreview=vt;window.closeDocPreviewModal=Ys;window.printDocA4=Js;window.exportDocFile=Qs;export{Ve as $,fe as A,Ge as B,Ca as C,La as D,is as E,Na as F,An as G,Pn as H,he as I,kn as J,q as K,ts as L,Ta as M,Sa as N,gn as O,xa as P,ya as Q,va as R,ha as S,ka as T,Pa as U,pn as V,mn as W,un as X,fn as Y,wn as Z,bn as _,m as a,Aa as a$,Ye as a0,jt as a1,Un as a2,Kn as a3,pa as a4,ns as a5,ua as a6,at as a7,rs as a8,na as a9,ls as aA,Ha as aB,Ua as aC,Nn as aD,Ss as aE,Ps as aF,Ln as aG,yn as aH,F as aI,mt as aJ,Fa as aK,H as aL,on as aM,rn as aN,V as aO,xs as aP,zn as aQ,qn as aR,en as aS,Fn as aT,ye as aU,_a as aV,an as aW,nn as aX,ga as aY,xn as aZ,$a as a_,De as aa,Ke as ab,W as ac,_s as ad,ze as ae,Oa as af,En as ag,Ea as ah,Bn as ai,Ba as aj,Hn as ak,ja as al,ae as am,js as an,Nt as ao,On as ap,hn as aq,xe as ar,Ka as as,In as at,ge as au,Vn as av,Tt as aw,_n as ax,Cn as ay,_t as az,Ut as b,Ma as b0,Da as b1,Ia as b2,Ra as b3,Mn as b4,za as b5,tn as b6,cn as b7,vn as b8,Tn as b9,Sn as ba,$n as bb,Rn as bc,pt as bd,Us as be,qs as bf,Ot as c,fa as d,u as e,T as f,ss as g,Kt as h,i,Dn as j,ln as k,te as l,dn as m,wa as n,ba as o,sn as p,os as q,Je as r,Ft as s,X as t,Xa as u,ee as v,Et as w,Wn as x,as as y,jn as z};
