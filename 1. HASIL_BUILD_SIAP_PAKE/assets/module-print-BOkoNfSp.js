const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js","assets/module-pos-Cw_a0TcO.js"])))=>i.map(i=>d[i]);
import{f as Me}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const la="modulepreload",da=function(e){return"/"+e},kt={},Nt=function(t,s,a){let o=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");o=Promise.allSettled(s.map(d=>{if(d=da(d),d in kt)return;kt[d]=!0;const c=d.endsWith(".css"),b=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${b}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":la,c||(f.as="script"),f.crossOrigin="",f.href=d,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((x,y)=>{f.addEventListener("load",x),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})}))}function n(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return o.then(r=>{for(const l of r||[])l.status==="rejected"&&n(l.reason);return t().catch(n)})},ca={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const pa=window.FIREBASE_CONFIG||ca;Me.apps.length||Me.initializeApp(pa);const te=Me.firestore(),qe=Me.auth();typeof window<"u"&&(window.firebase=Me,window.db=te,window.auth=qe);try{te.settings({ignoreUndefinedProperties:!0,experimentalAutoDetectLongPolling:!0,merge:!0})}catch{}typeof window<"u"&&(window.addEventListener("online",()=>{try{te.enableNetwork().catch(()=>{})}catch{}}),window.addEventListener("offline",()=>{try{te.disableNetwork().catch(()=>{})}catch{}}));let ua=null;const eo=()=>{Nt(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{ua=Me.analytics()}catch{}}).catch(()=>{})},ae="K2ijSERTT2dg27yYGTEgn6XHSnW2",ma={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"pill",brandStyle:"logo",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showHeroSlide:!0,heroMascotImg:"/putri_mascot_anim.gif",heroBadgeText:"Siap Melayani",heroWelcomeTag:"SELAMAT DATANG",heroTitle:"",heroSubtitle:"",showRewardCatalog:!0,showScrollTopButton:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],productOrder:[],suppliers:[],purchases:[],expenses:[],stockOpnameHistory:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let p=JSON.parse(JSON.stringify(ma)),Rt=[],Ot=[],B=[];try{const e=localStorage.getItem("freshmart_cart");e&&(Rt=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(Ot=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(B=JSON.parse(e)||[])}catch{}let fa={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},wa=null,ba=null,ga=null,xa="Semua Produk",ha="Semua Jenis",ya="Semua Merek",va="",ka="newest",Pa="grid",Ta=1,Sa=12,Aa="orders",$a="",Ma=null,La=null,Ca=0,Da=[],Ia=[],Na=[],Ra=1,fe=[],Oa=null,Ea=null,Ba=null,ge=[],Ha=[],be=null,Ka=null,Ua=!1,Fa="all",ja="today",_a=null,za=null;const to=e=>{_a=e},ao=e=>{p=e},so=e=>{Rt=e},oo=e=>{Ot=e},no=e=>{B=e},ro=e=>{fa=e},io=e=>{wa=e},lo=e=>{ba=e},co=e=>{ga=e},po=e=>{xa=e},uo=e=>{ha=e},mo=e=>{ya=e},fo=e=>{va=e},wo=e=>{ka=e},bo=e=>{Pa=e},go=e=>{Ta=e},xo=e=>{Sa=e},ho=e=>{Aa=e},yo=e=>{$a=e},vo=e=>{Ma=e},ko=e=>{La=e},Po=e=>{Ca=e},To=e=>{Da=e},So=e=>{Ia=e},Ao=e=>{Na=e},$o=e=>{Ra=e},Mo=e=>{fe=e},Lo=e=>{ge=e},Co=e=>{Ha=e},Pt=e=>{be=e},Do=e=>{Ka=e},Io=e=>{Ua=e},No=e=>{za=e},Ro=e=>{Fa=e},Oo=e=>{ja=e},Eo=e=>{Oa=e},Bo=e=>{Ea=e},Ho=e=>{Ba=e};let Et=!1;if(typeof window<"u"){const e=()=>{Et=!0,window.__hasUserInteracted=!0};["pointerdown","touchstart","mousedown","keydown"].forEach(t=>{window.addEventListener(t,e,{capture:!0,once:!0})}),window.__hasUserInteracted=!1}const pt=()=>typeof navigator<"u"&&navigator.userActivation?navigator.userActivation.hasBeenActive:!!(Et||typeof window<"u"&&window.__hasUserInteracted);typeof window<"u"&&(window.checkUserGesture=pt);const he=(e="light")=>{try{const t=window.Capacitor?.Plugins?.Haptics;if(t){e==="light"||e==="selection"?t.impact({style:"LIGHT"}).catch(()=>{}):e==="medium"?t.impact({style:"MEDIUM"}).catch(()=>{}):e==="heavy"?t.impact({style:"HEAVY"}).catch(()=>{}):e==="success"?t.notification({type:"SUCCESS"}).catch(()=>{}):e==="warning"?t.notification({type:"WARNING"}).catch(()=>{}):e==="error"&&t.notification({type:"ERROR"}).catch(()=>{});return}if(typeof navigator<"u"&&typeof navigator.vibrate=="function"){if(!pt())return;e==="light"||e==="selection"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="heavy"?navigator.vibrate(45):e==="success"?navigator.vibrate([15,30,20]):e==="warning"?navigator.vibrate([30,40,30]):e==="error"&&navigator.vibrate([40,50,40,50,40])}}catch{}};typeof window<"u"&&(window.triggerHaptic=he);const qa=e=>{if(e)switch(e){case"product-modal":typeof window.closeProductModal=="function"&&window.closeProductModal();break;case"pos-variant-sheet":typeof window.closePOSVariantSheet=="function"&&window.closePOSVariantSheet();break;case"variant-preview-modal":typeof window.closeVariantPreviewModal=="function"&&window.closeVariantPreviewModal();break;case"custom-confirm-modal":typeof window.closeConfirm=="function"&&window.closeConfirm();break;case"scanner-modal":typeof window.closeCameraScanner=="function"&&window.closeCameraScanner();break;case"modal-tempo-detail":typeof window.closeTempoDetailModal=="function"&&window.closeTempoDetailModal();break;case"modal-tempo-payment":typeof window.closeTempoPaymentModal=="function"&&window.closeTempoPaymentModal();break;case"modal-tempo-penalty":typeof window.closeTempoPenaltyModal=="function"&&window.closeTempoPenaltyModal();break;case"modal-supplier-detail":typeof window.closeSupplierDetailModal=="function"&&window.closeSupplierDetailModal();break;case"modal-supplier-form":typeof window.closeSupplierFormModal=="function"&&window.closeSupplierFormModal();break;case"modal-po-form":typeof window.closePurchaseFormModal=="function"&&window.closePurchaseFormModal();break;case"modal-po-detail":typeof window.closePurchaseDetailModal=="function"&&window.closePurchaseDetailModal();break;case"modal-po-payment":typeof window.closePurchasePaymentModal=="function"&&window.closePurchasePaymentModal();break;case"modal-po-product-picker":typeof window.closePurchasePickerModal=="function"&&window.closePurchasePickerModal();break;case"quick-menu-modal":typeof window.closeQuickMenuModal=="function"&&window.closeQuickMenuModal();break;case"pos-login-modal":typeof window.closePOSLoginModal=="function"&&window.closePOSLoginModal();break;case"admin-order-modal":typeof window.closeOrderDetailModal=="function"&&window.closeOrderDetailModal();break;default:{const t=document.getElementById(e);if(t){const s=t.querySelector('button[onclick*="close"], .fa-xmark')?.closest("button");if(s)s.click();else if(typeof window.closeModalAnim=="function"){const a=t.querySelector('.modal-bottom-sheet, [id$="-box"]')||t.firstElementChild;window.closeModalAnim(t,a)}else t.classList.add("hidden","opacity-0")}}}};let J=null,Ie=null,Fe=0,Tt=0,je=0,de=!1,St=0;const Wa=()=>{if(typeof document>"u")return;document.addEventListener("touchstart",t=>{if(t.touches.length!==1)return;const s=t.touches[0],a=s.target.closest('[id*="modal"], [id*="sheet"]');if(!a||a.classList.contains("hidden")||a.classList.contains("opacity-0")||!(a.classList.contains("items-end")||!!s.target.closest(".modal-bottom-sheet")||a.classList.contains("modal-bottom-sheet")))return;let n=s.target.closest(".modal-bottom-sheet")||s.target.closest('[id$="-box"]');if(n||(n=s.target.closest('[id$="-content"]')),!n)return;const r=n.classList.contains("overflow-y-auto")?n:n.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar"),l=r?r.scrollTop:0,d=n.getBoundingClientRect();!(s.clientY-d.top<=80||s.target.closest(".pull-indicator"))&&l>5||(J=n,Ie=a,Fe=s.clientY,Tt=s.clientX,je=Fe,de=!1,St=Date.now())},{passive:!0}),document.addEventListener("touchmove",t=>{if(!J||t.touches.length!==1)return;const s=t.touches[0];je=s.clientY;const a=je-Fe,o=Math.abs(s.clientX-Tt);if(!de&&o>Math.abs(a)){J=null;return}const n=J.classList.contains("overflow-y-auto")?J:J.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar");if(!(n&&n.scrollTop>5&&!de)){if(a>0){if(de=!0,t.cancelable&&t.preventDefault(),J.style.transform=`translateY(${a}px)`,J.style.transition="none",Ie){const r=Math.max(.2,1-a/400);Ie.style.backgroundColor=`rgba(15, 23, 42, ${.8*r})`}}else if(a<0&&de){const r=a*.2;J.style.transform=`translateY(${r}px)`,J.style.transition="none"}}},{passive:!1});const e=()=>{if(!J)return;const t=J,s=Ie,a=je-Fe,o=Math.max(1,Date.now()-St),n=a/o;J=null,Ie=null,de&&(a>80||n>.45&&a>30)?(he("light"),t.style.transition="transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",t.style.transform="translateY(100%)",s&&(s.style.transition="opacity 0.25s ease",s.style.opacity="0"),setTimeout(()=>{t.style.transform="",t.style.transition="",s&&(s.style.backgroundColor="",s.style.opacity=""),qa(s?s.id:"")},250)):de&&(t.style.transition="transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)",t.style.transform="",s&&(s.style.transition="background-color 0.28s ease",s.style.backgroundColor=""),setTimeout(()=>{t.style.transition=""},300)),de=!1};document.addEventListener("touchend",e,{passive:!0}),document.addEventListener("touchcancel",e,{passive:!0})};let At=0;const Ga=()=>{typeof document>"u"||document.addEventListener("click",e=>{const t=Date.now();if(t-At<50)return;const s=e.target.closest('button, [role="button"], a[onclick], [id*="bnav-"], .pos-add-btn, .pos-tag-chip, #pos-variant-chips button, .interactive-tap');s&&!s.disabled&&!s.classList.contains("disabled")&&(At=t,he("light"))},{passive:!0,capture:!0})};let _=null;const Va=(e="pop")=>{try{if(typeof window>"u"||!pt())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;_||(_=new t),_.state==="suspended"&&_.resume().catch(()=>{});const s=_.currentTime;if(e==="pop"){const a=_.createOscillator(),o=_.createGain();a.type="sine",a.frequency.setValueAtTime(340,s),a.frequency.exponentialRampToValueAtTime(560,s+.07),o.gain.setValueAtTime(.14,s),o.gain.exponentialRampToValueAtTime(.001,s+.08),a.connect(o),o.connect(_.destination),a.start(s),a.stop(s+.08)}else if(e==="success"){const a=_.createOscillator(),o=_.createOscillator(),n=_.createGain(),r=_.createGain();a.type="triangle",o.type="triangle",a.frequency.setValueAtTime(523.25,s),o.frequency.setValueAtTime(659.25,s+.09),n.gain.setValueAtTime(.12,s),n.gain.exponentialRampToValueAtTime(.001,s+.22),r.gain.setValueAtTime(.14,s+.09),r.gain.exponentialRampToValueAtTime(.001,s+.32),a.connect(n),n.connect(_.destination),o.connect(r),r.connect(_.destination),a.start(s),a.stop(s+.22),o.start(s+.09),o.stop(s+.32)}else if(e==="beep"){const a=_.createOscillator(),o=_.createGain();a.type="square",a.frequency.setValueAtTime(1040,s),o.gain.setValueAtTime(.08,s),o.gain.exponentialRampToValueAtTime(.001,s+.07),a.connect(o),o.connect(_.destination),a.start(s),a.stop(s+.07)}}catch{}};typeof window<"u"&&(window.playNativeSound=Va);const Ne=()=>{if(typeof document>"u")return;const e=document.getElementById("native-scroll-top-btn");e&&(e.classList.add("opacity-0","translate-y-3"),e.classList.add("hidden"))};typeof window<"u"&&(window.hideFloatingScrollTop=Ne);const Ya=()=>{if(typeof document>"u")return;let e=document.getElementById("native-scroll-top-btn");e||(e=document.createElement("button"),e.id="native-scroll-top-btn",document.body.appendChild(e)),e.setAttribute("aria-label","Kembali ke Atas"),e.setAttribute("title","Kembali ke Atas"),e.className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 hidden opacity-0 translate-y-3 transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900/95 dark:bg-slate-800/95 text-white shadow-xl shadow-black/25 border border-slate-700/80 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_4px_20px_rgba(var(--color-primary-rgb),0.4)] hover:scale-105 active:scale-90 cursor-pointer group",e.innerHTML='<i class="fa-solid fa-arrow-up text-xs md:text-sm transition-transform duration-200 group-hover:-translate-y-0.5"></i>',e._hasClickListener||(e._hasClickListener=!0,e.addEventListener("click",()=>{he("light");const s=document.querySelector(".view-section:not(.hidden)");if(s){const a=s.querySelector(".scroll-content");a&&a.scrollTop>10&&a.scrollTo({top:0,behavior:"smooth"})}window.scrollTo({top:0,behavior:"smooth"})}));const t=(s,a=null)=>{if(!e)return;if(typeof window<"u"&&window.appData?.store?.showScrollTopButton===!1){Ne();return}const o=document.querySelector(".view-section:not(.hidden)");if(!o||o.id!=="view-catalog"&&o.id!=="view-orders"){Ne();return}if(a){const r=a.closest(".view-section");if(!r||r.id!=="view-catalog"&&r.id!=="view-orders"){Ne();return}}if(document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none), [id*="dialog"]:not(.hidden), .fixed.inset-0:not(.hidden):not(.pointer-events-none):not(#native-theme-ambient)')){Ne();return}s>450?(e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0","translate-y-3")})):(e.classList.add("opacity-0","translate-y-3"),setTimeout(()=>{e&&e.classList.contains("opacity-0")&&e.classList.add("hidden")},300))};window.addEventListener("scroll",()=>{t(window.scrollY||document.documentElement.scrollTop)},{passive:!0}),document.addEventListener("scroll",s=>{s.target&&s.target.classList&&s.target.classList.contains("scroll-content")&&t(s.target.scrollTop,s.target)},{passive:!0,capture:!0})},Ja=()=>{if(typeof window>"u"||typeof document>"u")return;let e=document.getElementById("native-connectivity-banner");e||(e=document.createElement("div"),e.id="native-connectivity-banner",e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] -translate-y-16 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl",document.body.appendChild(e));let t=null;const s=a=>{clearTimeout(t),he(a?"success":"warning"),a?(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-emerald-600 text-white border border-emerald-400/40",e.innerHTML='<i class="fa-solid fa-wifi text-xs"></i><span>Kembali Online — Terhubung</span>',t=setTimeout(()=>{e.classList.add("-translate-y-16","opacity-0")},2500)):(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-amber-500 text-slate-950 border border-amber-300/60",e.innerHTML='<i class="fa-solid fa-wifi-slash text-xs"></i><span>Mode Offline — Menggunakan Data Lokal</span>')};window.addEventListener("online",()=>s(!0)),window.addEventListener("offline",()=>s(!1))},Ko=()=>{Wa(),Ga(),Ya(),Ja()},Bt=e=>{let t="";return typeof e=="object"&&e!==null?t=`${e.name||""} ${e.category||""} ${e.subCategory||""}`.toLowerCase():t=String(e||"").toLowerCase(),["paku","baut","sekrup","mur","pipa","pvc","paralon","semen","pasir","bata","mortar","hebel","besi","baja","hollow","seng","atap","kawat","cat","paint","roll","kuas","thinner","amplas","alat","perkakas","tang","obeng","palu","kunci","gembok","meteran","bor","gerinda","paket","box"].some(o=>t.includes(o))?"fa-box-open":"fa-bag-shopping"},Qa=(e,t="",s="")=>{const a=Bt(e);return{id:"brand",icon:a,subIcon:a,label:"Produk Resmi",podGradient:"linear-gradient(135deg, rgba(var(--color-primary-rgb),0.12) 0%, rgba(var(--color-primary-rgb),0.20) 100%)",accent:"rgba(var(--color-primary-rgb),0.1)",aura:"rgba(var(--color-primary-rgb),0.08)",shadowColor:"rgba(var(--color-primary-rgb),0.15)"}},Za=e=>{if(!e||typeof e!="string")return"TP";const s=e.replace(/[^a-zA-Z0-9\s]/g," ").trim().split(/\s+/).filter(n=>n.length>0),a=s.filter(n=>/[a-zA-Z]/.test(n)),o=a.length>0?a:s;return o.length>=2?(o[0][0]+o[1][0]).toUpperCase():o.length===1?(o[0].length>=2?o[0].slice(0,2):o[0]+"P").toUpperCase():"TP"},Xa=(e,t={})=>{const s=t.size||"md",a=t.className||"",o=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk"),n=Bt(e);return`
    <div class="pos-smart-cover cover-${s} ${a}" title="${i(o)}">
        <!-- Subtle Theme Glow -->
        <div class="cover-surface-glow"></div>

        <!-- Center Icon Pod: Paket Box / Shopping Bag -->
        <div class="cover-center">
            <div class="cover-icon-pod">
                <i class="fa-solid ${n} cover-icon"></i>
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
    </svg>`)}`),m=e=>document.getElementById(e),Ht=e=>{const t=m(e);t&&t.classList.remove("hidden")},Kt=e=>{const t=m(e);t&&t.classList.add("hidden")},ts=(e,t,s)=>{const a=m(e);a&&a.classList.toggle(t,s)},X=(e,t)=>{const s=m(e);s&&(s.innerText=t)},Ut=(e,t)=>{const s=m(e);s&&(s.innerHTML=t)},as=(e,t)=>{const s=m(e);s&&(s.value=t)},ss=e=>{const t=m(e);return t?t.value:""},We=(e,t)=>{const s=typeof e=="string"?m(e):e,a=typeof t=="string"?m(t):t;s&&(s.classList.remove("hidden"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.classList.remove("opacity-0"),a&&a.classList.remove("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95")})}))},xe=(e,t,s)=>{const a=typeof e=="string"?m(e):e,o=typeof t=="string"?m(t):t;if(!a){typeof s=="function"&&s();return}a.classList.add("opacity-0"),o&&o.classList.add("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95"),setTimeout(()=>{a.classList.add("hidden"),typeof s=="function"&&s()},280)};window.openModalAnim=We;window.closeModalAnim=xe;const os=e=>{try{return localStorage.getItem(e)}catch{return null}},ns=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},i=e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),A=e=>{const t=Number(e);return isNaN(t)||e===null?"Rp 0":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(Math.abs(t)).replace(/^/,t<0?"-":"")},rs=(e,t=null)=>{if(typeof e!="string")return e;const s=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);if(!s)return e;const a=s[1];return t==="image/gif"||e.toLowerCase().includes(".gif")||a==="1rkAFxnZDe2eLQ88kan2BeGSg56IkAEJ9"?`https://drive.google.com/uc?export=view&id=${a}`:`https://lh3.googleusercontent.com/d/${a}`},is=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(t))return t;const s=t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return s?s[1]:null},Ft=e=>{if(typeof e!="string"||!e.trim())return null;const t=e.trim(),s=is(t);if(s)return{type:"youtube",id:s,embedUrl:`https://www.youtube.com/embed/${s}?autoplay=1&mute=1&muted=1&loop=1&playlist=${s}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const a=t.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(a&&a[1]){const o=a[1];return{type:"gdrive",id:o,streamUrl:`https://drive.google.com/uc?export=download&id=${o}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${o}`,directUrl:`https://drive.google.com/uc?export=download&id=${o}`,embedUrl:`https://drive.google.com/file/d/${o}/preview?autoplay=1`}}return{type:"direct",directUrl:t,embedUrl:t}},Uo=e=>{const t=Ft(e);return t?t.embedUrl:e},Fo=e=>{const t=Ft(e);return t?t.embedUrl:e},jo=(e,t)=>typeof e!="string"||!e?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${t}`:e.includes("googleusercontent.com")&&!e.includes("=")?`${e}=${t}`:e,_o=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",zo=(e,t,s,a)=>{document.title=e||"Toko Putri";const o=(n,r,l=!1)=>{const d=l?"property":"name";let c=document.querySelector(`meta[${d}="${n}"]`);c||(c=document.createElement("meta"),c.setAttribute(d,n),document.head.appendChild(c)),c.setAttribute("content",r)};t&&o("description",t),e&&o("og:title",e,!0),t&&o("og:description",t,!0),s&&o("og:image",s,!0),a&&o("og:url",a,!0)},qo=(e,t)=>{let s=document.getElementById(e);s||(s=document.createElement("script"),s.id=e,s.type="application/ld+json",document.head.appendChild(s)),s.textContent=JSON.stringify(t)},_e=e=>{e&&X("loader-text",e);const t=m("global-loader");t&&(t.style.opacity="1",t.style.display="flex")},et=()=>{const e=m("global-loader");e&&(e.style.pointerEvents="none",e.style.transition="opacity 0.25s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250))},ee=(e,t,s,a)=>{typeof window.showToast=="function"&&window.showToast(e,t,s,a)},Wo=(e,t,s,a)=>{if(typeof window.showConfirm=="function")return window.showConfirm(e,t,s,a)},Te={};window.loadedScripts=Te;const Go=(e,t)=>t&&t()?Promise.resolve():(Te[e]||(Te[e]=new Promise((s,a)=>{const o=document.createElement("script");o.src=e,o.onload=()=>s(),o.onerror=()=>{delete Te[e],a(new Error("Gagal memuat: "+e))},document.head.appendChild(o)})),Te[e]),jt=e=>{let t=(e||"").toString().replace(/\D/g,"");return t?(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),t):""},ls=(e,t="")=>{const s=jt(e);if(!s){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp tidak valid!");return}const a=t?encodeURIComponent(t):"",o=`https://wa.me/${s}${a?`?text=${a}`:""}`;window.AndroidNativeApp&&typeof window.AndroidNativeApp.openWhatsApp=="function"?window.AndroidNativeApp.openWhatsApp(o):window.open(o,"_blank","noopener,noreferrer")},ds=(e,t=null,s=null)=>{try{const a=(typeof t=="string"?document.querySelector(t):t)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!a)return;const o=e.getBoundingClientRect(),n=a.getBoundingClientRect(),r=document.createElement("div");r.className="flying-cart-item",s?r.innerHTML=`<img src="${s}" alt="Product" class="w-full h-full object-cover rounded-full" />`:r.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const l=o.left+o.width/2-20,d=o.top+o.height/2-20,c=n.left+n.width/2-20,b=n.top+n.height/2-20;r.style.cssText=`
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
        `,document.body.appendChild(r),requestAnimationFrame(()=>{const f=c-l,x=b-d;r.style.transform=`translate3d(${f}px, ${x}px, 0) scale(0.25) rotate(18deg)`,r.style.opacity="0.4"}),setTimeout(()=>{r&&r.parentNode&&r.parentNode.removeChild(r),he("medium");const f=document.getElementById("bottom-nav-cart-badge")||a.querySelector(".cart-count-badge");f&&(f.classList.remove("cart-bounce-pop"),f.offsetWidth,f.classList.add("cart-bounce-pop")),a.classList.remove("cart-bounce-pop"),a.offsetWidth,a.classList.add("cart-bounce-pop"),setTimeout(()=>{f&&f.classList.remove("cart-bounce-pop"),a.classList.remove("cart-bounce-pop")},600)},500)}catch(a){console.error("flyToCart error",a)}};window.normalizeWA=jt;window.openWhatsApp=ls;window.sLoad=_e;window.hLoad=et;window.el=m;window.show=Ht;window.hide=Kt;window.toggleCls=ts;window.setIn=X;window.setH=Ut;window.setV=as;window.getV=ss;window.esc=i;window.fixD=rs;window.fCur=A;window.sL=os;window.ssL=ns;window.triggerHaptic=he;window.flyToCartAnimation=ds;window.renderProductCoverHtml=Xa;window.getProductTheme=Qa;window.getMonogram=Za;window.getProductCoverSvgDataUri=es;const $t={deviceType:"rawbt",deviceName:"Driver RawBT (Printer Thermal Android - Free)",deviceId:"",paperSize:"58mm",directPrint:!1,feedLines:3,autoCut:!0,openCashDrawer:!1,autoPrintOrder:!1,headerText:"",footerText:"Terima kasih atas kunjungan Anda!",showLogo:!0,showPoints:!0,showBarcode:!0,networkIp:"192.168.1.200:9100"},ne=e=>{switch(e){case"58mm-compact":case"58mm_30":return 30;case"80mm-compact":case"80mm_42":return 42;case"80mm":return 48;case"58mm":default:return 32}},H=()=>{try{const e=localStorage.getItem("freshmart_printer_config");if(e)return{...$t,...JSON.parse(e)}}catch(e){console.warn("Gagal membaca konfigurasi printer lokal:",e)}return{...$t}},He=e=>{try{const s={...H(),...e};return localStorage.setItem("freshmart_printer_config",JSON.stringify(s)),s}catch(t){return console.error("Gagal menyimpan konfigurasi printer:",t),H()}},cs=()=>{const e=H(),t=(n,r)=>{const l=m(n);l&&(l.checked=!!r)},s=(n,r)=>{const l=m(n);l&&(l.value=r||"")};s("printer-device-name-display",e.deviceName),s("printer-paper-size",e.paperSize),s("printer-network-ip",e.networkIp),s("printer-header-custom",e.headerText),s("printer-footer-custom",e.footerText),t("printer-opt-points",e.showPoints),t("printer-opt-barcode",e.showBarcode),t("printer-opt-direct",e.directPrint===!0),t("printer-opt-autocut",e.autoCut!==!1),t("printer-opt-drawer",e.openCashDrawer),t("printer-opt-autoprint",e.autoPrintOrder),zt(e.deviceType||"rawbt");const a=m("printer-settings-modal"),o=m("printer-settings-modal-box");a&&a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("printerSettings"),We(a,o)},_t=(e=!1)=>{const t=m("printer-settings-modal"),s=m("printer-settings-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("printerSettings",e,()=>{xe(t,s)}):xe(t,s))},zt=e=>{window._selectedPrinterType=e,document.querySelectorAll(".printer-type-card").forEach(a=>{if(a.getAttribute("data-type")===e){a.classList.add("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),a.classList.remove("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const n=a.querySelector(".printer-check-badge");n&&n.classList.remove("hidden")}else{a.classList.remove("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),a.classList.add("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const n=a.querySelector(".printer-check-badge");n&&n.classList.add("hidden")}});const t=m("rawbt-quick-guide-box");t&&(e==="rawbt"?t.classList.remove("hidden"):t.classList.add("hidden"));const s=m("printer-network-box");s&&(e==="network"?s.classList.remove("hidden"):s.classList.add("hidden"))},ps=()=>{const e=(n,r="")=>{const l=m(n);return l?l.value:r},t=(n,r=!1)=>{const l=m(n);return l?l.checked:r},s=window._selectedPrinterType||"rawbt",o={deviceType:s,deviceName:e("printer-device-name-display",s==="rawbt"?"Driver RawBT (Printer Thermal Android - Free)":s==="bluetooth"?"Bluetooth POS Printer":"Printer Thermal POS"),paperSize:e("printer-paper-size","58mm"),networkIp:e("printer-network-ip","192.168.1.200:9100"),headerText:e("printer-header-custom",""),footerText:e("printer-footer-custom","Terima kasih atas kunjungan Anda!"),showPoints:t("printer-opt-points",!0),showBarcode:t("printer-opt-barcode",!0),directPrint:t("printer-opt-direct",!1),autoCut:t("printer-opt-autocut",!0),openCashDrawer:t("printer-opt-drawer",!1),autoPrintOrder:t("printer-opt-autoprint",!1)};He(o),ee("Pengaturan printer berhasil disimpan! ✅"),_t()},us=async()=>{if(!navigator.bluetooth){ee("Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.");return}try{ee("Mencari printer bluetooth di sekitar...");const e=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["000018f0-0000-1000-8000-00805f9b34fb","e7810a71-73ae-499d-8c15-faa9aef0c3f2","00001101-0000-1000-8000-00805f9b34fb"]});if(e){He({deviceType:"bluetooth",deviceName:e.name||"Bluetooth POS Printer",deviceId:e.id});const t=m("printer-device-name-display");t&&(t.value=e.name||"Bluetooth POS Printer"),ee(`Printer "${e.name||"Bluetooth POS"}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&ee("Koneksi bluetooth dibatalkan atau tidak tersedia.")}},ms=async()=>{if(!navigator.usb){ee("Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.");return}try{ee("Mencari printer USB...");const e=await navigator.usb.requestDevice({filters:[]});if(e){const t=(e.productName||"USB Thermal Printer")+" (USB)";He({deviceType:"usb",deviceName:t,deviceId:String(e.vendorId)+":"+String(e.productId)});const s=m("printer-device-name-display");s&&(s.value=t),ee(`Printer USB "${t}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&ee("Koneksi USB dibatalkan atau tidak ditemukan.")}},fs=()=>{const e=H();if((e.deviceType==="rawbt"||!e.deviceType)&&typeof window.executeRawBTTestPrint=="function"){window.executeRawBTTestPrint();return}const t=e.paperSize==="80mm",s=t?48:32,a=p.store.name||"TOKO PUTRI",o=p.store.wa||"",n=(c,b,f=s)=>{const x=f-c.length-b.length;return c+(x>0?" ".repeat(x):" ")+b},r=new Date().toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let l=`
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${i(a)}</div>
    ${o?`<div style="text-align:center;font-size:11px;margin-bottom:4px;">WA: ${i(o)}</div>`:""}
    <div style="text-align:center;font-weight:bold;font-size:12px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:3px 0;margin:6px 0;">
        *** UJI COBA CETAK STRUK ***
    </div>
    <div style="white-space:pre;font-size:11px;">Tgl   : ${r}</div>
    <div style="white-space:pre;font-size:11px;">Format: Thermal ${t?"80mm (48 Kolom)":"58mm (32 Kolom)"}</div>
    <div style="white-space:pre;font-size:11px;">Koneksi: ${e.deviceType.toUpperCase()}</div>
    <div style="white-space:pre;font-size:11px;">Status : KONEKSI BERHASIL</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:11px;font-weight:bold;">${n("TES ITEM UJI COBA","HARGA",s)}</div>
    <div style="white-space:pre;font-size:10px;">${n("1x Produk Percobaan","Rp 25.000",s)}</div>
    <div style="white-space:pre;font-size:10px;">${n("2x Kertas Thermal Kasir","Rp 15.000",s)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:12px;font-weight:bold;">${n("TOTAL UJI","Rp 40.000",s)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    `;e.showPoints&&(l+=`<div style="white-space:pre;font-size:11px;">${n("Simulasi Poin Member","+10 Poin",s)}</div>`,l+='<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>'),e.showBarcode&&(l+=`<div style="text-align:center;margin:6px 0;">
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
    `;let d=m("thermal-print-section");if(d||(d=document.createElement("div"),d.id="thermal-print-section",document.body.appendChild(d)),d.innerHTML=`<div style="width:${t?"80mm":"58mm"};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${l}</div>`,typeof window.sendToRawBT=="function"){const c=d.innerText,b=btoa(unescape(encodeURIComponent(c)));window.sendToRawBT(b,c,l)}else window.print();ee("Perintah uji cetak berhasil dikirim! 🖨️")};window.getPrinterConfig=H;window.getPaperCols=ne;window.savePrinterConfig=He;window.openPrinterSettingsModal=cs;window.closePrinterSettingsModal=_t;window.selectPrinterDeviceTypeUI=zt;window.savePrinterSettingsFromModal=ps;window.scanBluetoothPrinter=us;window.scanUsbPrinter=ms;window.executeTestPrint=fs;let Mt={},z="view-catalog",$e=!1,Re=null,tt=["view-catalog"];const Ge=e=>{history.pushState({modal:e},"",window.location.href),fe.push(e)},Ve=(e,t,s)=>{if(!t){const a=fe.lastIndexOf(e);a>-1&&fe.splice(a,1),$e=!0,Re&&clearTimeout(Re),Re=setTimeout(()=>{$e=!1},300);try{history.back()}catch{$e=!1}}s()},G=(e,t=!1)=>{if(!e||e===z)return;t||(history.pushState({view:e},"",window.location.href),e==="view-catalog"?tt=["view-catalog"]:tt.push(e));const s=m(z);if(s){const o=s.querySelector(".scroll-content");o&&(Mt[z]=o.scrollTop)}if(z==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime(),z==="view-pos-cashier"&&e!=="view-pos-cashier"&&(typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()),z==="view-admin"&&e!=="view-admin"){const o=m("view-admin");o&&o.classList.remove("admin-pos-mode"),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()}const a=m(e);if(a&&(a.classList.remove("hidden"),a.classList.add("flex")),document.querySelectorAll(".view-section").forEach(o=>{o!==a&&(o.classList.add("hidden"),o.classList.remove("flex"))}),typeof window.hideFloatingScrollTop=="function")window.hideFloatingScrollTop();else{const o=document.getElementById("native-scroll-top-btn");o&&(o.classList.add("opacity-0","translate-y-3"),o.classList.add("hidden"))}if(a){e==="view-cart"&&typeof window.renderCart=="function"?window.renderCart():e==="view-checkout"&&typeof window.rChck=="function"?window.rChck():e==="view-payment"&&typeof window.rPay=="function"?window.rPay():e==="view-wishlist"&&typeof window.renderWish=="function"?window.renderWish():e==="view-orders"&&typeof window.renderMyOrders=="function"?window.renderMyOrders():e==="view-faq"&&typeof window.renderStorefrontFAQ=="function"?window.renderStorefrontFAQ():e==="view-pos-cashier"&&Nt(()=>import("./module-pos-Cw_a0TcO.js").then(n=>n.b),__vite__mapDeps([2,1])).then(n=>{typeof n.renderPOSStorefront=="function"&&n.renderPOSStorefront()}).catch(n=>console.error("[POS] Gagal memuat storefront:",n));const o=a.querySelector(".scroll-content");if(o)if(t){const n=Mt[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{o.scrollTop=n}))}else o.scrollTo(0,0)}z=e,qt(e)},qt=(e=z)=>{const t=m("bottom-nav-bar");if(!t)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin","view-pos-cashier"].includes(e)){t.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.remove("translate-y-0","opacity-100");return}if(t.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(a=>a.classList.remove("active")),e==="view-catalog"){const a=m("bnav-home");a&&a.classList.add("active")}else if(e==="view-orders"){const a=m("bnav-orders");a&&a.classList.add("active")}else if(e==="view-wishlist"||e==="view-faq"){const a=m("bnav-menu");a&&a.classList.add("active")}},ws=e=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(e==="home"?"medium":"light"),e==="home")if(z==="view-catalog"){const t=document.querySelector("#view-catalog .scroll-content");t?t.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else G("view-catalog");else e==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():e==="cart"?G("view-cart"):e==="orders"?G("view-orders"):e==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},Wt=()=>{const e=document.querySelector("#view-catalog .scroll-content"),t=m("pull-to-refresh-indicator"),s=m("ptr-icon"),a=m("ptr-text");if(!e||!t)return;let o=0,n=0,r=!1,l=!1;const d=65;e.addEventListener("touchstart",c=>{e.scrollTop<=5&&!l&&(o=c.touches[0].pageY,r=!0)},{passive:!0}),e.addEventListener("touchmove",c=>{if(!r||l)return;n=c.touches[0].pageY;const b=n-o;if(b>15&&e.scrollTop<=5){t.classList.add("visible");const f=Math.min(b/d,1.5);s&&(s.style.transform=`rotate(${f*240}deg)`),a&&(a.innerText=b>=d?"Lepaskan untuk segarkan":"Tarik ke bawah untuk refresh")}else t.classList.remove("visible")},{passive:!0}),e.addEventListener("touchend",async()=>{if(!r||l)return;if(r=!1,n-o>=d&&e.scrollTop<=5){l=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),s&&(s.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",s.style.transform=""),a&&(a.innerText="Menyinkronkan katalog...");try{typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),a&&(a.innerText="Katalog Terkini Disinkron!"),s&&(s.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch{a&&(a.innerText="Gagal sinkron data")}setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>{l=!1,s&&(s.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",s.style.transform=""),a&&(a.innerText="Tarik ke bawah untuk refresh")},300)},600)}else t.classList.remove("visible"),s&&(s.style.transform="")})},Gt=e=>{e==="product"&&typeof window.closeProductModal=="function"?window.closeProductModal(!0):e==="category"&&typeof window.closeCategoryModal=="function"?window.closeCategoryModal(!0):e==="brand"&&typeof window.closeBrandModal=="function"?window.closeBrandModal(!0):e==="admin"&&typeof window.closeAdminModal=="function"?window.closeAdminModal(!0):e==="adminOrder"&&typeof window.closeOrderDetailModal=="function"?window.closeOrderDetailModal(!0):e==="receipt"&&typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):e==="docPreview"&&typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):e==="scanner"&&typeof window.closeCameraScanner=="function"?window.closeCameraScanner(!0):e==="confirm"&&typeof window.closeConfirm=="function"?window.closeConfirm(!0):e==="customerOrder"&&typeof window.closeCustomerOrderDetailModal=="function"?window.closeCustomerOrderDetailModal(!0):e==="restock"&&typeof window.closeRestockModal=="function"?window.closeRestockModal(!0):e==="quickprice"&&typeof window.closeQuickPriceModal=="function"?window.closeQuickPriceModal(!0):e==="member"&&typeof window.closeMemberModal=="function"?window.closeMemberModal(!0):e==="prompt"&&typeof window.closePrompt=="function"?window.closePrompt(!0):e==="review"&&typeof window.closeReviewModal=="function"?window.closeReviewModal(!0):e==="quickmenu"&&typeof window.closeQuickMenuModal=="function"?window.closeQuickMenuModal(!0):e==="variantPreview"&&typeof window.closeVariantPreviewModal=="function"?window.closeVariantPreviewModal(!0):e==="terms"&&typeof window.closeTermsModal=="function"?window.closeTermsModal(!0):e==="privacy"&&typeof window.closePrivacyModal=="function"?window.closePrivacyModal(!0):e==="askQuestion"&&typeof window.closeAskQuestionModal=="function"?window.closeAskQuestionModal(!0):e==="quickVariant"&&typeof window.closeQuickVariantSheet=="function"?window.closeQuickVariantSheet(!0):e==="adminFAQ"&&typeof window.closeAdminFAQModal=="function"?window.closeAdminFAQModal(!0):e==="printerSettings"&&typeof window.closePrinterSettingsModal=="function"?window.closePrinterSettingsModal(!0):e==="exitConfirm"&&typeof window.closeExitConfirmModal=="function"?window.closeExitConfirmModal(!0):e==="appDownload"&&typeof window.closeAppDownloadModal=="function"?window.closeAppDownloadModal(!0):e==="voucher"&&typeof window.closeVoucherModal=="function"?window.closeVoucherModal(!0):e==="guide"&&typeof window.closeShoppingGuideModal=="function"?window.closeShoppingGuideModal(!0):e==="changelog"&&typeof window.closeChangelogModal=="function"?window.closeChangelogModal(!0):e==="guarantee"&&typeof window.closeQualityGuaranteeModal=="function"?window.closeQualityGuaranteeModal(!0):e==="security"&&typeof window.closeSecurityModal=="function"?window.closeSecurityModal(!0):e==="posVariantSheet"&&typeof window.closePOSVariantSheet=="function"?window.closePOSVariantSheet(!0):e==="posLogin"&&typeof window.closePOSLoginModal=="function"?window.closePOSLoginModal(!0):e==="posCartDrawer"&&typeof window.closePOSCartDrawer=="function"?window.closePOSCartDrawer(!0):e==="posPayment"&&typeof window.closePayModal=="function"?window.closePayModal(!0):e==="purchaseForm"&&typeof window.closeCreatePOModal=="function"?window.closeCreatePOModal(!0):e==="purchasePicker"&&typeof window.closePOProductPicker=="function"?window.closePOProductPicker(!0):e==="purchaseDetail"&&typeof window.closePurchaseDetailModal=="function"?window.closePurchaseDetailModal(!0):e==="purchasePayment"&&typeof window.closePurchasePaymentModal=="function"?window.closePurchasePaymentModal(!0):e==="supplierForm"&&typeof window.closeSupplierFormModal=="function"?window.closeSupplierFormModal(!0):e==="supplierDetail"&&typeof window.closeSupplierDetailModal=="function"?window.closeSupplierDetailModal(!0):e==="posHoldPrompt"&&typeof window.closePOSHoldPrompt=="function"?window.closePOSHoldPrompt(!0):e==="posHeldModal"&&typeof window.closePOSHeldModal=="function"?window.closePOSHeldModal(!0):e==="posCameraScanner"&&typeof window.closePOSCameraScanner=="function"?window.closePOSCameraScanner(!0):e==="tempoDetail"&&typeof window.closeTempoDetailModal=="function"?window.closeTempoDetailModal(!0):e==="tempoPayment"&&typeof window.closeTempoPaymentModal=="function"?window.closeTempoPaymentModal(!0):e==="tempoPenalty"&&typeof window.closeTempoPenaltyModal=="function"?window.closeTempoPenaltyModal(!0):e==="expenseForm"&&typeof window.closeExpenseModal=="function"?window.closeExpenseModal(!0):e==="expenseReceipt"&&typeof window.closeExpenseReceiptPreview=="function"&&window.closeExpenseReceiptPreview(!0)},Vt=()=>{const e=m("exit-confirm-modal");e&&(e.classList.contains("hidden")&&Ge("exitConfirm"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=m("exit-confirm-modal-box");t&&t.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},ut=(e=!1)=>{Ve("exitConfirm",e,()=>{const t=m("exit-confirm-modal"),s=m("exit-confirm-modal-box");t&&t.classList.add("opacity-0"),s&&s.classList.add("scale-95"),setTimeout(()=>{t&&t.classList.add("hidden")},250)})},bs=()=>{ut(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri! 🙏"),setTimeout(()=>{try{window.close()}catch{}},400))},gs=()=>{const e=document.getElementById("pos-receipt-fallback-modal")||document.getElementById("pos-shift-receipt-modal")||document.getElementById("pos-success-modal")||document.getElementById("pos-recall-confirm-modal")||document.getElementById("pos-closed-success-modal");if(e){e.remove();return}if(fe.length>0){try{window.history.back()}catch{const a=fe.pop();Gt(a)}return}if(z==="view-admin"){const s=m("admin-content-view"),a=m("admin-dashboard-view");if(!!(s&&!s.classList.contains("hidden")||a&&a.classList.contains("hidden")||window.history.state&&window.history.state.tab||typeof window.cTab<"u"&&window.cTab)){if(window.history.state&&window.history.state.tab&&window.history.length>1)try{window.history.back();return}catch{}typeof window.openAdminMenu=="function"&&window.openAdminMenu();try{window.history.replaceState({view:"view-admin"},"",window.location.href)}catch{}return}if(typeof window.showConfirm=="function"){const n=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=n?"Keluar Panel Owner":"Keluar CMS Toko",l=n?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,l,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}return}if(z==="view-pos-cashier"){typeof window.showConfirm=="function"?window.showConfirm("Keluar Mode Kasir","Yakin keluar dari mode POS kasir?",()=>{typeof window.exitPOSMode=="function"?window.exitPOSMode():G("view-catalog")},"Ya, Keluar",!0):G("view-catalog");return}if(z!=="view-catalog"){if(z==="view-payment"){G("view-checkout");return}if(z==="view-checkout"){G("view-cart");return}if(z==="view-cart"){G("view-catalog");return}window.history.length>1?window.history.back():G("view-catalog");return}const t=m("exit-confirm-modal");t&&!t.classList.contains("hidden")?ut():Vt()},xs=()=>{Wt();try{(!history.state||!history.state.view)&&history.replaceState({view:"view-catalog"},"",window.location.href)}catch{}window.addEventListener("popstate",e=>{if($e){$e=!1,Re&&clearTimeout(Re);return}if(fe.length>0){const o=fe.pop();Gt(o);return}const t=e.state||{},s=t.view||null;if(window.isAdm||window.__localIsAdm)if(s==="view-admin")G("view-admin",!0),t.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(t.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu();else{const o=m("admin-content-view");if(o&&!o.classList.contains("hidden")){history.pushState({view:"view-admin"},"",window.location.href),G("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}if(history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"){const n=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=n?"Keluar Panel Owner":"Keluar CMS Toko",l=n?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,l,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}}else if(s){let o=s;s==="view-admin"&&(o="view-admin-login"),G(o,!0)}else G("view-catalog",!0)})};window.pushModalHistory=Ge;window.requestCloseModal=Ve;window.changeView=G;window.setupHistoryRouter=xs;window.onBottomNavClick=ws;window.updateBottomNav=qt;window.initPullToRefresh=Wt;window.handleAppBackButton=gs;window.openExitConfirmModal=Vt;window.closeExitConfirmModal=ut;window.confirmExitApp=bs;window.isProgrammaticModalClose=$e;window.viewHistoryStack=tt;try{Object.defineProperty(window,"curViewName",{get:()=>z,set:e=>{z=e},configurable:!0})}catch{}let at=null,Se=null;const hs=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}V("Kode "+e+" berhasil disalin!")}catch{V("Gagal menyalin. Kode: "+e)}},V=(e,t,s,a)=>{const o=m("toast");if(!o)return;if(!t){const u=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(u)?t="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(u)?t="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(u)?t="warning":/upload|proses|memuat|loading|sedang/.test(u)?t="loading":t="info"}typeof window.triggerHaptic=="function"&&window.triggerHaptic(t==="error"?"error":t==="warning"?"warning":t==="success"?"success":"light");const n=getComputedStyle(document.documentElement),r=n.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",l=n.getPropertyValue("--color-primary").trim()||"#10b981";n.getPropertyValue("--color-primary-dark").trim();const d={success:{icon:"fa-circle-check",label:"Berhasil",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`}},c=d[t]||d.info,b=m("toast-icon");b&&(b.className="fa-solid "+c.icon);const f=m("toast-title");f&&(f.textContent=s||c.label,f.style.display="block",f.style.color=c.accent);const x=m("toast-icon-wrap");x&&(x.style.background=c.iconBg,x.style.color=c.accent),X("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let y=m("toast-progress");y||(y=document.createElement("div"),y.id="toast-progress",o.appendChild(y)),y.style.background=c.accent,y.style.transition="none",y.style.width="100%",y.style.opacity="0.85",clearTimeout(at),o.classList.add("toast-show");const w=a||(t==="loading"?8e3:t==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{y.style.transition=`width ${w}ms linear`,y.style.width="0%"})),at=setTimeout(()=>{o.classList.remove("toast-show")},w)},ys=e=>V(e,"loading","Memproses...",8e3),vs=()=>{clearTimeout(at);const e=m("toast");e&&e.classList.remove("toast-show")},ks=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")};let me=null;const Ps=(e,t,s,a="Ya, Hapus",o=!0)=>{let n=e,r=t,l=s,d=a,c=o;typeof t=="function"&&(l=t,r=e,n=typeof a=="string"&&a!=="Ya, Hapus"?a:"Konfirmasi Tindakan",d=typeof s=="string"?s:"Ya, Lanjutkan",c=!0);let b=null;typeof l!="function"?(b=new Promise(w=>{me=w}),Se=null):(Se=l,me=null),X("confirm-title",n);const f=m("confirm-msg");if(f)if(typeof r=="string"){const w=typeof window.DOMPurify<"u"?window.DOMPurify.sanitize(r,{ADD_ATTR:["class","style"]}):r;f.innerHTML=w}else f.textContent=r||"";const x=m("confirm-yes-btn");x&&(x.innerText=d,c?(x.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 active:scale-95 transition-all text-xs sm:text-sm shadow-md shadow-rose-500/30 cursor-pointer",m("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",m("confirm-icon").className="fa-solid fa-triangle-exclamation"):(x.className="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-2xl hover:opacity-90 active:scale-95 transition-all text-xs sm:text-sm shadow-sm cursor-pointer",m("confirm-icon-box").className="w-16 h-16 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-[var(--color-primary)]/20",m("confirm-icon").className="fa-solid fa-copy"));const y=m("custom-confirm-modal");return y&&y.classList.contains("hidden")&&Ge("confirm"),Ht("custom-confirm-modal"),setTimeout(()=>{m("custom-confirm-modal").classList.remove("opacity-0"),m("custom-confirm-box").classList.remove("scale-95")},10),b},st=(e=!1)=>{if(me){const t=me;me=null,t(!1)}Ve("confirm",e,()=>{m("custom-confirm-modal").classList.add("opacity-0"),m("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>Kt("custom-confirm-modal"),300)})},Ts=()=>{if(me){const e=me;me=null,Se=null,st(),setTimeout(()=>{e(!0)},150);return}if(Se){const e=Se;Se=null,st(),setTimeout(()=>{e()},150)}},Ss=(e,t="",s=null)=>{let a=null,o=null;typeof s!="function"&&(o=new Promise(x=>{a=x}));const n=t!=null?String(t):"",r=n.length>50||n.includes(`
`)||/balasan|catatan|alasan|deskripsi|pesan|keterangan/i.test(e),l=n.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),d=r?`<textarea id="prompt-input" rows="3" class="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 custom-scrollbar resize-none leading-relaxed" placeholder="Tuliskan di sini...">${l}</textarea>`:`<input type="text" id="prompt-input" value="${l}" class="w-full px-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-bold focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 text-center" autocomplete="off" />`;let c=document.createElement("div");c.id="custom-prompt-container",c.className="fixed inset-0 z-[10005] bg-slate-900/85 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300",c.onclick=x=>{x.target===c&&window.closePrompt()},c.innerHTML=`
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
    `,document.body.appendChild(c);const b=c.querySelector("div");Ge("prompt"),setTimeout(()=>{c.classList.remove("opacity-0"),b.classList.remove("scale-95")},10);const f=c.querySelector("#prompt-input");return f&&(f.focus(),f.select(),f.onkeydown=x=>{x.key==="Enter"&&(!r||x.ctrlKey)?(x.preventDefault(),c.querySelector("#prompt-ok")?.click()):x.key==="Escape"&&(x.preventDefault(),window.closePrompt())}),window.closePrompt=(x=!1)=>{if(!(!c||!c.parentNode)){if(a){const y=a;a=null,y(null)}Ve("prompt",x,()=>{c.classList.add("opacity-0"),b.classList.add("scale-95"),setTimeout(()=>c.remove(),300),window.closePrompt=null})}},c.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),c.querySelector("#prompt-ok").onclick=()=>{let x=f.value;if(a){const y=a;a=null,window.closePrompt(),y(x)}else window.closePrompt(),typeof s=="function"&&s(x)},o},As=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=hs;window.showToast=V;window.showToastLoading=ys;window.hideToast=vs;window.toggleTheme=ks;window.showConfirm=Ps;window.closeConfirm=st;window.executeConfirm=Ts;window.customPrompt=Ss;window.checkProPrint=As;const Be="utp-thermal-modal",ze="utp-html-modal";let Z=null,mt=null,Oe=null,Ee=null;const Yt=()=>{if(document.getElementById("utp-style"))return;const e=document.createElement("style");e.id="utp-style",e.textContent=`
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
    `,document.head.appendChild(e)},Jt=()=>{Ee===null&&(Ee=document.body.style.overflow||"",document.body.style.overflow="hidden")},ft=()=>{Ee!==null&&!document.getElementById(Be)&&!document.getElementById(ze)&&(document.body.style.overflow=Ee,Ee=null)},Qt=(e,t)=>{Ye(),Oe=s=>{const a=s.target&&s.target.tagName||"";s.key==="Escape"?(s.preventDefault(),t()):s.key==="Enter"&&!/INPUT|TEXTAREA|SELECT/.test(a)&&(s.preventDefault(),e())},document.addEventListener("keydown",Oe,!0)},Ye=()=>{Oe&&document.removeEventListener("keydown",Oe,!0),Oe=null},$s=e=>{const t=e.deviceType||"rawbt",s=/android/i.test(navigator.userAgent||"");return t==="rawbt"?s||window.AndroidNativeApp?"RawBT Android":"Printer Browser":t==="bluetooth"?"Bluetooth":t==="usb"?"USB OTG":t==="network"?"WiFi / LAN":"Printer Sistem"},Ms=e=>{let t=Array.isArray(e.previewLines)&&e.previewLines.length?e.previewLines:null;if(!t&&e.html&&/<[a-z][\s\S]*>/i.test(e.html))return`<div style="white-space:normal;">${e.html}</div>`;t||(t=String(e.plainText||"").split(`
`).map(a=>({t:a,a:"left",b:!1,s:"normal"})));const s=[...t];for(;s.length>1&&!String(s[s.length-1].t||"").trim();)s.pop();return s.map(a=>{const o=i(String(a.t??""))||"&nbsp;",n=a.a==="center"?"center":a.a==="right"?"right":"left",r=a.b?800:400;return a.s==="title"||a.s==="wide"?`<div class="utp-line utp-title" style="text-align:${n};font-weight:${r}">${o}</div>`:a.s==="tall"||a.s==="total"?`<div class="utp-line utp-tall" style="text-align:${n};font-weight:${r}"><span>${o}</span></div>`:`<div class="utp-line" style="text-align:${n};font-weight:${r}">${o}</div>`}).join("")},Zt=()=>{const e=Z;if(!e)return;const t=H(),s=ne(t.paperSize),a=s>=40,o=Array.isArray(e.previewLines)?e.previewLines.length:String(e.plainText||"").split(`
`).length,n=typeof e.rebuild=="function"?`
        <div class="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70" role="group" aria-label="Ukuran kertas">
            <button type="button" id="utp-paper-58" onclick="window.setThermalPreviewPaper('58mm')" class="utp-seg-btn ${a?"text-slate-600 dark:text-slate-300":"is-active"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">58mm</button>
            <button type="button" id="utp-paper-80" onclick="window.setThermalPreviewPaper('80mm')" class="utp-seg-btn ${a?"is-active":"text-slate-600 dark:text-slate-300"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">80mm</button>
        </div>`:"",r=`
    <div id="${Be}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-thermal-title" onclick="if(event.target===this) window.closeThermalPrintPreview()">
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
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-print text-slate-400"></i>${i($s(t))}</span>
                    <span class="utp-chip bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-check"></i>${o} baris</span>
                </div>
                ${n}
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
    </div>`;document.getElementById(Be)?.remove(),document.body.insertAdjacentHTML("beforeend",r),setTimeout(()=>document.getElementById("utp-thermal-confirm")?.focus({preventScroll:!0}),60)},Xt=e=>!e||typeof e.dispatch!="function"?!1:(Yt(),Z={...e},Zt(),Jt(),Qt(()=>ea(),()=>wt()),!0),wt=()=>{const e=Z;if(document.getElementById(Be)?.remove(),Z=null,Ye(),ft(),e&&typeof e.onCancel=="function")try{e.onCancel()}catch{}},ea=()=>{const e=Z;if(e){if(Z=null,document.getElementById(Be)?.remove(),Ye(),ft(),typeof e.onConfirm=="function")try{e.onConfirm()}catch(t){console.warn("[PrintPreview] onConfirm error:",t)}e.dispatch(e.base64,e.plainText,e.html||"")}},Ls=e=>{if(!(!Z||typeof Z.rebuild!="function")){He({paperSize:e});try{const t=Z.rebuild();t&&(Z.base64=t.base64,Z.plainText=t.plainText,Z.previewLines=t.previewLines)}catch(t){console.warn("[PrintPreview] Gagal rebuild payload:",t)}Zt(),V(`Ukuran kertas diubah ke ${e} ✅`)}},Cs=()=>{wt(),typeof window.openPrinterSettingsModal=="function"&&(window.openPrinterSettingsModal(),V("Atur printer, lalu tekan Cetak lagi untuk melihat preview terbaru."))},Ds=(e={})=>{if(!e.html)return!1;Yt(),mt={...e};const t=(e.paper||"a4")==="a4";document.getElementById(ze)?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="${ze}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-html-title" onclick="if(event.target===this) window.closeHtmlPrintPreview()">
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
    </div>`);const s=document.getElementById("utp-html-frame");if(s){const a=s.contentWindow.document;a.open(),a.write(e.html),a.close()}return Jt(),Qt(()=>ta(),()=>bt()),!0},bt=()=>{document.getElementById(ze)?.remove(),mt=null,Ye(),ft()},ta=()=>{const e=document.getElementById("utp-html-frame");if(!(!e||!mt)){if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){try{const t=e.contentWindow.document,s=Array.from(t.querySelectorAll("style")).map(o=>o.outerHTML).join("");let a=document.getElementById("a4-print-section");a||(a=document.createElement("div"),a.id="a4-print-section",document.body.appendChild(a)),a.innerHTML=s+t.body.innerHTML,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500)}catch(t){console.warn("[PrintPreview] Native print error:",t)}bt();return}try{e.contentWindow.focus(),e.contentWindow.print()}catch(t){console.warn("[PrintPreview] iframe print error:",t),V("Gagal membuka dialog cetak. Coba lagi.","error")}}};window.openThermalPrintPreview=Xt;window.closeThermalPrintPreview=wt;window.confirmThermalPrint=ea;window.setThermalPreviewPaper=Ls;window.openPrinterSettingsFromPreview=Cs;window.openHtmlPrintPreview=Ds;window.closeHtmlPrintPreview=bt;window.confirmHtmlPrint=ta;const N=e=>"Rp "+Math.round(Number(e||0)).toLocaleString("id-ID"),Ze=e=>Math.round(Number(e||0)).toLocaleString("id-ID"),Is=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(2).replace(/\.?0+$/,"")},U=e=>e?String(e).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"").replace(/[\r\t]/g," ").replace(/[^\x20-\x7E\n]/g," "):"",F=(e,t)=>{if(!e)return[];const s=U(e).replace(/ +/g," ").trim();if(!s)return[];if(s.length<=t)return[s];const a=s.split(" "),o=[];let n="";for(const r of a)if(r)if(r.length>t){n&&(o.push(n),n="");for(let l=0;l<r.length;l+=t){const d=r.substring(l,l+t);d.length===t?o.push(d):n=d}}else(n?n.length+1+r.length:r.length)<=t?n=n?n+" "+r:r:(o.push(n),n=r);return n&&o.push(n),o},se=(e,t=!1)=>{const s=e?new Date(e):new Date,a=String(s.getDate()).padStart(2,"0"),o=String(s.getMonth()+1).padStart(2,"0"),n=t?s.getFullYear():String(s.getFullYear()).slice(-2),r=String(s.getHours()).padStart(2,"0"),l=String(s.getMinutes()).padStart(2,"0");return`${a}/${o}/${n} ${r}:${l}`},aa=(e,t,s,a=!1)=>{const o=U(String(e||"")).trimEnd(),n=U(String(t||"")).trim(),r=s-o.length-n.length;if(r>=0)return[o+" ".repeat(r)+n];if(a){const c=Math.max(0,s-n.length-1),b=o.substring(0,c).trimEnd(),f=Math.max(1,s-b.length-n.length);return[b+" ".repeat(f)+n]}const l=F(o,s),d=l[l.length-1]||"";if(d.length+1+n.length<=s){const c=s-d.length-n.length;return l[l.length-1]=d+" ".repeat(c)+n,l}else{const c=Math.max(0,s-n.length);return[...l," ".repeat(c)+n]}};class Le{constructor(t=32){this.cols=Number(t)||32,this.bytes=[],this.plainLines=[],this.previewLines=[],this._bold=!1,this._size="normal"}init(){return this.bytes.push(27,64),this}align(t="left"){const s=t==="center"?1:t==="right"?2:0;return this.bytes.push(27,97,s),this}bold(t=!0){return this.bytes.push(27,69,t?1:0),this._bold=!!t,this}size(t="normal"){return this._size=t||"normal",t==="title"?this.bytes.push(29,33,17):t==="tall"||t==="total"?this.bytes.push(29,33,1):t==="wide"?this.bytes.push(29,33,16):this.bytes.push(29,33,0),this}text(t){if(!t)return this;const s=U(t);for(let a=0;a<s.length;a++)this.bytes.push(s.charCodeAt(a));return this}line(t="",s="left"){return this.align(s),this.text(t),this.bytes.push(10),this.plainLines.push(t),this.previewLines.push({t:U(t),a:s,b:this._bold,s:this._size}),this}centered(t=""){return F(t,this.cols).forEach(a=>this.line(a,"center")),this}twoColumn(t="",s="",a=!1,o=!1){return a&&this.bold(!0),aa(t,s,this.cols,o).forEach(r=>this.line(r,"left")),a&&this.bold(!1),this}itemRow(t){const s=t.variantName?` (${t.variantName}${t.colorCode?" "+t.colorCode:""})`:"",a=(t.name||"Barang")+s+(t.poTime?" [PO]":"");this.bold(!0),F(a,this.cols).forEach(c=>this.line(c,"left")),this.bold(!1);const n=t.effectivePrice||t.price||0,r=t.subtotal!==void 0?t.subtotal:parseFloat(t.qty||1)*n,l=`  ${Is(t.qty)} ${t.unit||"pcs"} x ${Ze(n)}`,d=Ze(r);return this.twoColumn(l,d,!1,!1),t.discount&&t.discount>0&&this.twoColumn("  (Pot. Diskon)",`-${Ze(t.discount)}`,!1,!0),t.poTime&&this.line(`  * Estimasi PO: ${t.poTime}`,"left"),this}separator(t="-"){const s=t.repeat(this.cols);return this.line(s,"left"),this}doubleSeparator(){return this.separator("=")}feed(t=3){this.bytes.push(27,100,Math.max(1,t));for(let s=0;s<t;s++)this.plainLines.push(""),this.previewLines.push({t:"",a:"left",b:!1,s:"normal"});return this}cut(){return this.bytes.push(29,86,65,3),this}openDrawer(){return this.bytes.push(27,112,0,25,250),this}toBase64(){const t=new Uint8Array(this.bytes);let s="";const a=t.length,o=8192;for(let n=0;n<a;n+=o){const r=t.subarray(n,n+o);s+=String.fromCharCode.apply(null,r)}return btoa(s)}toPlainText(){return this.plainLines.join(`
`)}}const Ce=(e,t="",s="",a={})=>{if(!a.skipPreview)return Xt({base64:e,plainText:t,html:s,previewLines:a.previewLines,title:a.title,rebuild:a.rebuild,onConfirm:a.onConfirm,onCancel:a.onCancel,dispatch:(o,n,r)=>Lt(o,n,r)});if(typeof a.onConfirm=="function")try{a.onConfirm()}catch{}return Lt(e,t,s)},Lt=(e,t="",s="")=>{const a=/android/i.test(navigator.userAgent||"");if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function")try{return window.AndroidNativeApp.printRawBT(e),V("Mencetak struk via RawBT... 🖨️"),!0}catch(o){console.warn("[RawBT] AndroidNativeApp error, mencoba intent...",o)}if(a)try{V("Membuka Printer RawBT... 🖨️");const o=`intent:base64,${e}#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;end;`;return window.location.href=o,setTimeout(()=>{if(!document.hidden)try{window.location.href=`rawbt:base64,${e}`}catch{}},800),!0}catch(o){console.warn("[RawBT] Intent trigger failed:",o)}return V("Mencetak struk kasir... 🖨️"),gt(s||t),!0},gt=e=>{const t=H(),a=ne(t.paperSize)>=40,o=a?"80mm":"58mm";let n=m("thermal-print-section");n||(n=document.createElement("div"),n.id="thermal-print-section",document.body.appendChild(n)),n.className=a?"paper-80mm":"paper-58mm",document.body.classList.remove("paper-58mm","paper-80mm"),document.body.classList.add(a?"paper-80mm":"paper-58mm");let r=document.getElementById("dynamic-print-page-style");r||(r=document.createElement("style"),r.id="dynamic-print-page-style",document.head.appendChild(r)),r.innerHTML=`@media print { @page { margin: 0; size: ${o} auto; } html, body { width: ${o} !important; } }`;const d=typeof e=="string"&&e.includes("<")&&e.includes(">")?e:`<pre style="font-family:'Courier New',Courier,monospace;font-size:11px;margin:0;line-height:1.25;white-space:pre-wrap;word-break:break-word;">${i(e)}</pre>`;n.innerHTML=`
        <div style="width:100%;font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.25;color:#000;background:#fff;padding:0;">
            ${d}
        </div>
    `,setTimeout(()=>{window.print()},100)},Ns=()=>{if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.openRawBT=="function"){window.AndroidNativeApp.openRawBT();return}/android/i.test(navigator.userAgent||"")?(window.location.href="intent:#Intent;package=ru.a402d.rawbtprinter;end;",setTimeout(()=>{document.hidden||(window.location.href="https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter")},1200)):window.open("https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter","_blank")},ot=(e,t=null)=>{const s=t||H(),a=ne(s.paperSize),o=a>=40,n=new Le(a);n.init(),s.openCashDrawer&&e.payment?.method==="cash"&&n.openDrawer();const r=U(s.headerText||p.store?.name||"TOKO PUTRI").trim(),l=U(p.store?.address||"").trim(),d=U(p.store?.wa||"").trim(),c=Math.floor(a/2);r.length<=c?(n.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),n.size("normal").bold(!1)):(n.align("center").bold(!0).size("tall"),F(r.toUpperCase(),a).forEach(h=>n.line(h,"center")),n.size("normal").bold(!1)),l&&F(l,a).forEach(h=>n.line(h,"center")),d&&n.line(`WA: ${d}`,"center");const b=e.payment?.taxNpwp||p.store?.taxNpwp;b&&n.line(`NPWP: ${b}`,"center"),n.separator("-");const f=se(e.dateMs||Date.now(),o),x=`#${e.txId}`;n.twoColumn(`No : ${x}`,f,!1,!0);const y=(e.cashierName||"Kasir").substring(0,o?16:9),w=(e.customer?.name||"Umum").substring(0,o?18:11);if(n.twoColumn(`Ksr: ${y}`,`Plg: ${w}`,!1,!0),e.customer?.phone&&n.line(`HP : ${e.customer.phone}`,"left"),n.separator("-"),(e.items||[]).forEach(h=>{n.itemRow(h)}),n.separator("-"),n.twoColumn("Subtotal",N(e.subtotal)),(e.globalDiscount||0)>0){const h=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";n.twoColumn(h,`- ${N(e.globalDiscount)}`)}if((e.pointDiscount||0)>0&&n.twoColumn(`Diskon Poin (${e.pointsRedeemed||0} Poin)`,`- ${N(e.pointDiscount)}`),e.claimedReward&&e.claimedReward.name&&(n.separator("-"),n.bold(!0).line(`[KLAIM HADIAH: ${U(e.claimedReward.name)}]`,"left").bold(!1),n.twoColumn("Poin Reward Ditukar",`-${e.claimedReward.pointsCost||0} Poin`)),(e.payment?.ppnEnabled||e.payment?.ppnShowZero||e.payment?.ppnRate===0||e.payment?.ppnAmount&&e.payment.ppnAmount>0)&&(p.store?.ppnEnabled||e.payment?.ppnEnabled)){const h=e.payment?.ppnType==="inclusive",g=e.payment?.ppnRate!==void 0?e.payment.ppnRate:p.store?.ppnRate||0,T=e.payment?.ppnAmount||0,$=e.payment?.ppnLabel||`${h?"Inc. PPN":"PPN"} (${g}%)`,v=T>0?`${h?"":"+ "}${N(T)}`:"Rp 0";n.twoColumn($,v)}n.doubleSeparator(),n.bold(!0).size("tall").twoColumn("TOTAL",N(e.total)).size("normal").bold(!1),n.doubleSeparator();const M=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",C=M?"PUTRI PAYLATER":(e.payment?.method||"CASH").toUpperCase();if(n.twoColumn("Metode Bayar",C),e.payment?.method==="cash")n.twoColumn("Bayar Tunai",N(e.payment.paid)),n.bold(!0).twoColumn("Kembalian",N(e.payment.change)).bold(!1);else if(e.payment?.method==="tempo"&&(M&&n.twoColumn("Limit Terpakai",N(e.payment?.paylaterUsed||e.paylaterUsed||e.total-(e.payment?.tempoDp??0))),n.twoColumn("Uang Muka (DP)",N(e.payment?.tempoDp??e.payment?.dp??0)),n.bold(!0).twoColumn(M?"Tagihan PayLater":"Sisa Piutang",N(e.payment.tempoBalance||0)).bold(!1),e.payment.tempoDueDate)){const h=typeof e.payment.tempoDueDate=="number"?new Date(e.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e.payment.tempoDueDate;n.line(`Jatuh Tempo: ${h}`,"left")}s.showPoints&&(e.pointsEarned>0||(e.pointsRedeemed||0)>0)&&(n.separator("-"),e.pointsEarned>0&&n.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),(e.pointsRedeemed||0)>0&&n.twoColumn("Poin Ditukar",`-${e.pointsRedeemed} Poin`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&n.twoColumn("Sisa Saldo Poin",`${e.finalMemberPoints} Poin`)),s.showBarcode&&(n.separator("-"),n.align("center"),n.line(`*POS-${e.txId}*`,"center"),n.line("(SCAN DI KASIR)","center")),n.separator("-");const L=s.footerText||"Terima Kasih Atas Kunjungan Anda!";return F(L,a).forEach(h=>n.line(h,"center")),n.feed(s.feedLines||3),s.autoCut&&n.cut(),{base64:n.toBase64(),plainText:n.toPlainText(),previewLines:n.previewLines}},nt=(e,t=!1,s=null)=>{const a=s||H(),o=ne(a.paperSize),n=o>=40,r=new Le(o);r.init();const l=U(a.headerText||p.store?.name||"TOKO PUTRI").trim(),d=U(p.store?.address||"").trim(),c=U(p.store?.wa||"").trim(),b=Math.floor(o/2);l.length<=b?(r.align("center").bold(!0).size("title").line(l.toUpperCase(),"center"),r.size("normal").bold(!1)):(r.align("center").bold(!0).size("tall"),F(l.toUpperCase(),o).forEach($=>r.line($,"center")),r.size("normal").bold(!1)),d&&F(d,o).forEach($=>r.line($,"center")),c&&r.line(`WA: ${c}`,"center"),r.separator("-");const f=n?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **";r.bold(!0).line(f,"center").bold(!1),r.separator("-");const x=se(e.startTime,n),y=se(e.endTime||Date.now(),n);r.twoColumn("Shift ID",`#${e.shiftNo||e.id||"-"}`,!1,!0),r.twoColumn("Kasir",(e.cashierName||"Kasir").substring(0,n?20:12),!1,!0),r.twoColumn("Mulai",x,!1,!0),r.twoColumn("Selesai",y,!1,!0),r.separator("-");const w=parseFloat(e.startingCash)||0,u=parseFloat(e.cashSales)||0,M=parseFloat(e.qrisSales)||0,C=parseFloat(e.bankSales||e.transferSales)||0,L=parseFloat(e.tempoSales)||0,h=parseFloat(e.totalSales)||u+M+C+L,g=e.txCount||0;if(r.bold(!0).line("RINGKASAN PENJUALAN","left").bold(!1),r.twoColumn("Modal Awal Laci",N(w)),r.twoColumn("Penjualan Tunai",N(u)),M>0&&r.twoColumn("Penjualan QRIS",N(M)),C>0&&r.twoColumn("Penjualan Transfer",N(C)),L>0&&r.twoColumn("Penjualan Tempo",N(L)),r.separator("-"),r.twoColumn("Total Transaksi",`${g} Trx`),r.bold(!0).size("tall").twoColumn("TOTAL OMSET",N(h)).size("normal").bold(!1),r.doubleSeparator(),!t){const $=w+u,v=e.actualCash!==void 0?parseFloat(e.actualCash):$,I=v-$,K=I===0?"PAS (0)":I>0?`+${N(I)}`:`-${N(Math.abs(I))}`;r.bold(!0).line("REKONSILIASI KAS FISIK","left").bold(!1),r.twoColumn("Kas Diharapkan",N($)),r.twoColumn("Kas Fisik Aktual",N(v)),r.bold(!0).twoColumn("Selisih Kas",K,!0).bold(!1),e.closingNotes&&F(`Catatan: ${e.closingNotes}`,o).forEach(Y=>r.line(Y,"left")),r.separator("-"),r.line("Verifikasi & Tanda Tangan:","left"),r.feed(2);const D=Math.floor(o/2),S="( Kasir )",k=n?"( Supervisor/Owner )":"( Supervisor )",P=Math.max(0,Math.floor((D-S.length)/2)),R=Math.max(0,Math.floor((D-k.length)/2)),j=" ".repeat(P)+S+" ".repeat(Math.max(1,D-P-S.length))+" ".repeat(R)+k;r.line(j,"left"),r.separator("-")}const T=a.footerText||"Laporan Kasir Resmi Toko Putri";return F(T,o).forEach($=>r.line($,"center")),r.feed(a.feedLines||3),a.autoCut&&r.cut(),{base64:r.toBase64(),plainText:r.toPlainText(),previewLines:r.previewLines}},rt=(e,t=null)=>{const s=t||H(),a=ne(s.paperSize),o=a>=40,n=new Le(a);n.init();const r=U(s.headerText||p.store?.name||"TOKO PUTRI").trim(),l=U(p.store?.address||"").trim(),d=U(p.store?.wa||"").trim(),c=Math.floor(a/2);r.length<=c?(n.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),n.size("normal").bold(!1)):(n.align("center").bold(!0).size("tall"),F(r.toUpperCase(),a).forEach(g=>n.line(g,"center")),n.size("normal").bold(!1)),l&&F(l,a).forEach(g=>n.line(g,"center")),d&&n.line(`WA: ${d}`,"center");const b=e.payment?.taxNpwp||p.store?.taxNpwp;b&&n.line(`NPWP: ${b}`,"center"),n.separator("-");const f=se(e.dateString||e.dateMs||Date.now(),o);n.twoColumn(`Order: #${e.orderId}`,f,!1,!0);const x=(e.customer?.name||"Guest").substring(0,o?18:11),y=e.customer?.deliveryMethod==="delivery"?"Kirim":"Ambil";n.twoColumn(`Plg  : ${x}`,`Tipe: ${y}`,!1,!0),e.customer?.phone&&n.line(`HP   : ${e.customer.phone}`,"left"),e.customer?.note&&F(`Cat  : ${e.customer.note}`,a).forEach(g=>n.line(g,"left")),n.separator("-");const w=Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[];w.length>0?w.forEach(g=>{n.itemRow(g)}):n.line("- Tidak ada rincian barang -","center"),n.separator("-");const u=w.reduce((g,T)=>g+parseFloat(T.qty||1)*(parseFloat(T.effectivePrice||T.price)||0),0),M=e.payment&&e.payment.subtotal!==void 0?e.payment.subtotal:u||e.total||0,C=e.payment&&e.payment.shippingCost!==void 0?e.payment.shippingCost:0,L=e.payment&&e.payment.grandTotal!==void 0?e.payment.grandTotal:e.total||M+C;if(n.twoColumn("Subtotal",N(M)),(e.customer?.deliveryMethod==="delivery"||e.deliveryMethod==="delivery")&&n.twoColumn("Ongkos Kirim",N(C)),e.payment?.productDiscount&&n.twoColumn("Potongan Harga",`- ${N(e.payment.productDiscount)}`),e.payment?.shippingDiscount&&n.twoColumn("Potongan Ongkir",`- ${N(e.payment.shippingDiscount)}`),(e.payment?.ppnEnabled||e.payment?.ppnShowZero||e.payment?.ppnRate===0||e.payment?.ppnAmount&&e.payment.ppnAmount>0)&&(p.store?.ppnEnabled||e.payment?.ppnEnabled)){const g=e.payment?.ppnType==="inclusive",T=e.payment?.ppnRate!==void 0?e.payment.ppnRate:p.store?.ppnRate||0,$=e.payment?.ppnAmount||0,v=e.payment?.ppnLabel||`${g?"Inc. PPN":"PPN"} (${T}%)`,I=$>0?`${g?"":"+ "}${N($)}`:"Rp 0";n.twoColumn(v,I)}return n.doubleSeparator(),n.bold(!0).size("tall").twoColumn("TOTAL",N(L)).size("normal").bold(!1),n.doubleSeparator(),n.twoColumn("Metode Bayar",(e.payment?.method||"Tunai").toUpperCase()),s.showPoints&&(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(n.separator("-"),e.pointsEarned>0&&n.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),e.finalMemberPoints!==void 0&&n.twoColumn("Saldo Poin",`${e.finalMemberPoints} Poin`)),s.showBarcode&&(n.separator("-"),n.align("center"),n.line(`*ORDER-${e.orderId}*`,"center"),n.line("(SCAN DI KASIR)","center")),n.separator("-"),F(s.footerText||"Terima Kasih Atas Kunjungan Anda!",a).forEach(g=>n.line(g,"center")),n.feed(s.feedLines||3),s.autoCut&&n.cut(),{base64:n.toBase64(),plainText:n.toPlainText(),previewLines:n.previewLines}},it=(e,t=null)=>{const s=t||H(),a=ne(s.paperSize),o=a>=40,n=new Le(a);n.init();const r=U(s.headerText||p.store?.name||"TOKO PUTRI").trim(),l=U(p.store?.address||"").trim(),d=U(p.store?.wa||"").trim(),c=Math.floor(a/2);r.length<=c?(n.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),n.size("normal").bold(!1)):(n.align("center").bold(!0).size("tall"),F(r.toUpperCase(),a).forEach(P=>n.line(P,"center")),n.size("normal").bold(!1)),l&&F(l,a).forEach(P=>n.line(P,"center")),d&&n.line(`WA: ${d}`,"center"),n.separator("-");const b=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",f=e.payment?.paymentStatus==="lunas"||parseFloat(e.payment?.tempoBalance||0)<=0,x=o?b?f?"*** NOTA PUTRI PAYLATER (LUNAS) ***":"*** NOTA TAGIHAN PUTRI PAYLATER ***":f?"*** NOTA TEMPO (LUNAS) ***":"*** NOTA TAGIHAN TEMPO (PIUTANG) ***":b?f?"** PAYLATER (LUNAS) **":"** NOTA PUTRI PAYLATER **":f?"** NOTA TEMPO (LUNAS) **":"** NOTA TAGIHAN TEMPO **";n.bold(!0).line(x,"center").bold(!1),n.separator("-");const y=se(e.dateString||e.timestamp||Date.now(),o);n.twoColumn(`Order: #${e.orderId}`,y,!1,!0);const w=(e.customer?.name||"Pelanggan").substring(0,o?18:11);n.twoColumn(`Plg  : ${w}`,b?"Tipe: PayLater":"Tipe: Tempo",!1,!0),(e.customer?.phone||e.customer?.wa)&&n.line(`HP   : ${e.customer.wa||e.customer.phone}`,"left");let u=parseFloat(e.payment?.tempoBalance)||0,M=e.payment?.tempoPenaltyRate!==void 0?parseFloat(e.payment.tempoPenaltyRate):1,C=e.payment?.tempoPenaltyStopped===!0,L=0,h=e.payment?.tempoDueDate||0,g=0,T=0,$=!1,v=!1;const I=Date.now();h>0&&(I>h?(g=Math.floor((I-h)/(24*60*60*1e3)),g>0&&($=!0)):(T=Math.ceil((h-I)/(24*60*60*1e3)),T<=3&&(v=!0))),C?L=parseFloat(e.payment?.tempoFixedPenalty)||0:$&&(L=M/100*u*g);let K=u+L;const D=e.payment?.installments||[],S=D.reduce((P,R)=>P+(parseFloat(R.amount)||0),0),k=e.payment?.grandTotal||u+S;if(h>0){const P=se(h,o);let R="";f?R="LUNAS":$?R=`Telat ${g} Hari`:v?R=`H-${T<=0?0:T}`:R=`Sisa ${T} Hari`,n.twoColumn(`J.Tmp: ${P}`,R,!1,!0)}return n.separator("-"),(e.items||[]).forEach(P=>{n.itemRow(P)}),n.separator("-"),n.twoColumn("Total Transaksi",N(k)),D.length>0&&(n.separator("-"),n.bold(!0).line("HISTORI PEMBAYARAN CICILAN:","left").bold(!1),D.forEach((P,R)=>{const j=se(P.date,o);n.twoColumn(`${R+1}. ${j}`,N(P.amount))}),n.twoColumn("Total Terbayar",N(S),!0)),n.twoColumn("Sisa Pokok",N(u)),L>0&&n.twoColumn(`Denda (${g} Hari)`,`+ ${N(L)}`),n.doubleSeparator(),n.bold(!0).size("tall").twoColumn(b?"TAGIHAN PAYLATER":"SISA TAGIHAN",N(f?0:K)).size("normal").bold(!1),n.doubleSeparator(),!f&&p.banks&&p.banks.length>0&&(n.line("REKENING TRANSFER RESMI:","left"),(p.banks||[]).forEach(P=>{n.line(`${P.bank||P.bankName||"Bank"}: ${P.number||P.bankAccount||"-"}`,"left"),n.line(`a/n ${P.name||P.bankOwner||"-"}`,"left")}),n.separator("-")),s.showBarcode&&(n.separator("-"),n.align("center"),n.line(b?`*PAYLATER-${e.orderId}*`:`*TEMPO-${e.orderId}*`,"center"),n.line(b?"(PUTRI PAYLATER RESMI)":"(NOTA TEMPO RESMI)","center")),n.separator("-"),F(s.footerText||"Terima Kasih Atas Kerja Sama & Kepercayaannya!",a).forEach(P=>n.line(P,"center")),n.feed(s.feedLines||3),s.autoCut&&n.cut(),{base64:n.toBase64(),plainText:n.toPlainText(),previewLines:n.previewLines}},lt=(e=null)=>{const t=e||H(),s=ne(t.paperSize),a=s>=40,o=new Le(s);o.init();const n=U(t.headerText||p.store?.name||"TOKO PUTRI").trim(),r=Math.floor(s/2);n.length<=r?(o.align("center").bold(!0).size("title").line(n.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),F(n.toUpperCase(),s).forEach(x=>o.line(x,"center")),o.size("normal").bold(!1));const l=U(p.store?.wa||"").trim();l&&o.line(`WA: ${l}`,"center"),o.separator("-");const d=a?`*** UJI COBA CETAK STRUK THERMAL ${s} KOLOM ***`:`** UJI CETAK THERMAL ${s} KOLOM **`;o.bold(!0).line(d,"center").bold(!1),o.separator("-"),o.line("MISTAR KALIBRASI TEPI KERTAS:","left");let c="";for(let x=1;x<=s;x++)c+=String(x%10);o.line(c,"left");let b="";for(let x=1;x<=s;x++)x===s||x%10===0?b+="|":x%5===0?b+=":":b+=".";o.line(b,"left"),o.line(`(Pastikan angka ${s%10} paling kanan tercetak utuh)`,"left"),o.separator("-");const f=se(Date.now(),a);return o.line(`Waktu   : ${f}`,"left"),o.line(`Format  : Thermal ${s} Kolom (${t.paperSize})`,"left"),o.line("Driver  : RAWBT FREE PRINT SERVICE","left"),o.line("Status  : 100% PRESISI & SIAP PAKAI","left"),o.separator("-"),o.bold(!0).twoColumn("ITEM SIMULASI","HARGA").bold(!1),o.itemRow({name:"Kertas Thermal Kasir Roll",qty:2,unit:"roll",price:15e3,subtotal:3e4}),o.itemRow({name:"Semen Portland Komposit 40kg",qty:1,unit:"sak",price:65e3,subtotal:65e3}),o.separator("-"),o.twoColumn("Subtotal",N(95e3)),o.twoColumn("Diskon Uji Coba",`- ${N(5e3)}`),o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL TES",N(9e4)).size("normal").bold(!1),o.doubleSeparator(),o.twoColumn("Bayar Tunai",N(1e5)),o.bold(!0).twoColumn("Kembalian",N(1e4)).bold(!1),t.showPoints&&(o.separator("-"),o.twoColumn("Simulasi Poin Member","+10 Poin")),t.showBarcode&&(o.separator("-"),o.align("center"),o.line(`*TEST-RAWBT-${Date.now().toString().slice(-6)}*`,"center"),o.line("(BARCODE TEST BERHASIL)","center")),o.separator("-"),F(t.footerText||"Terima kasih atas kunjungan Anda!",s).forEach(x=>o.line(x,"center")),F("Hasil cetak telah terkalibrasi presisi.",s).forEach(x=>o.line(x,"center")),o.feed(t.feedLines||3),t.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines}},Je=e=>{const t=document.getElementById(e);return!!t&&!t.classList.contains("hidden")},Rs=e=>{if(!e){V("Data transaksi kasir tidak ditemukan.","warning");return}const t=H(),s=ot(e,t),a=Je("pos-receipt-fallback-modal");Ce(s.base64,s.plainText,"",{skipPreview:a,previewLines:s.previewLines,title:`Struk Kasir #${e.txId||""}`,rebuild:()=>ot(e,H()),onConfirm:()=>{document.getElementById("pos-success-modal")?.remove(),document.getElementById("pos-receipt-fallback-modal")?.remove()}})},Os=(e,t=!1)=>{if(!e){V("Data shift tidak ditemukan.","warning");return}const s=H(),a=nt(e,t,s),o=Je("pos-shift-receipt-modal");Ce(a.base64,a.plainText,"",{skipPreview:o,previewLines:a.previewLines,title:`${t?"Ringkasan Shift (X-Report)":"Rekap Tutup Shift (Z-Report)"} #${e.shiftNo||e.id||""}`,rebuild:()=>nt(e,t,H()),onConfirm:()=>document.getElementById("pos-shift-receipt-modal")?.remove()})},Es=async(e=null)=>{const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||be,s=String(t||"").replace(/^#/,"").trim(),a=d=>{if(!d)return!1;const c=String(d.orderId||"").replace(/^#/,"").trim();return s?c===s||c.endsWith(s)||s.endsWith(c):!0};let o=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(o=e),(!o||!o.items||o.items.length===0)&&a(window.currentCustomerOrder)&&(o=window.currentCustomerOrder),(!o||!o.items||o.items.length===0)&&a(window.lastPrintedOrder)&&(o=window.lastPrintedOrder),(!o||!o.items||o.items.length===0)&&(ge||[]).length>0){const d=ge.find(a);d&&Array.isArray(d.items)&&d.items.length>0&&(o=d)}if((!o||!o.items||o.items.length===0)&&Array.isArray(B)){const d=B.find(a);d&&Array.isArray(d.items)&&d.items.length>0&&(o=d)}if((!o||!o.items||o.items.length===0)&&s)try{const d=typeof te<"u"&&te?te:window.db;if(d){let c=await d.collection("freshmart_orders").doc(s).get();if(!c.exists&&!s.startsWith("ORD-")){const b=await d.collection("freshmart_orders").doc("ORD-"+s).get();b.exists&&(c=b)}if(c&&c.exists&&(o=c.data(),o.orderId=o.orderId||c.id,window.currentCustomerOrder=o,window.lastPrintedOrder=o,Array.isArray(B))){const b=B.findIndex(a);if(b!==-1){B[b].items=o.items||[],B[b].payment=o.payment||{},B[b].customer=o.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(B))}catch{}}}}}catch(d){console.warn("[RawBT] Gagal fetch order detail from Firestore:",d)}if(!o&&Array.isArray(B)&&(o=B.find(a)),!o){V("Data pesanan tidak ditemukan.","warning");return}window.lastPrintedOrder=o;const n=H(),r=rt(o,n),l=Je("receipt-preview-modal");Ce(r.base64,r.plainText,"",{skipPreview:l,previewLines:r.previewLines,title:`Struk Pesanan #${o.orderId||""}`,rebuild:()=>rt(o,H()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&l&&window.closeReceiptPreviewModal()}})},Bs=(e=null)=>{const t=e||be;let a=(window.cachedPiutangOrders||[]).find(l=>String(l.orderId)===String(t))||(ge||[]).find(l=>String(l.orderId)===String(t));if(!a&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(t)&&(a=window.lastPrintedOrder),!a){V("Data nota piutang tidak ditemukan.","warning");return}const o=H(),n=it(a,o),r=Je("receipt-preview-modal");Ce(n.base64,n.plainText,"",{skipPreview:r,previewLines:n.previewLines,title:`Nota Tagihan Tempo #${a.orderId||""}`,rebuild:()=>it(a,H()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&r&&window.closeReceiptPreviewModal()}})},Hs=()=>{const e=H(),t=lt(e);Ce(t.base64,t.plainText,"",{previewLines:t.previewLines,title:"Uji Coba Cetak Printer",rebuild:()=>lt(H())})};window.cleanLineAscii=U;window.wrapWords=F;window.formatTwoColumn=aa;window.formatCompactDate=se;window.EscPosBuilder=Le;window.sendToRawBT=Ce;window.renderThermalDOMAndPrint=gt;window.openRawBTApp=Ns;window.buildPOSReceiptPayload=ot;window.buildShiftReceiptPayload=nt;window.buildOrderReceiptPayload=rt;window.buildTempoReceiptPayload=it;window.buildTestReceiptPayload=lt;window.printPOSReceiptDirect=Rs;window.printShiftSettlementDirect=Os;window.printCustomerReceiptDirect=Es;window.printTempoReceiptDirect=Bs;window.executeRawBTTestPrint=Hs;const xt=async(e=null)=>{e&&typeof Pt=="function"&&Pt(e);const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||be,s=String(t||"").replace(/^#/,"").trim(),a=k=>{if(!k)return!1;const P=String(k.orderId||"").replace(/^#/,"").trim();return s?P===s||P.endsWith(s)||s.endsWith(P):!0};let o=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(o=e),(!o||!o.items||o.items.length===0)&&a(window.currentCustomerOrder)&&(o=window.currentCustomerOrder),(!o||!o.items||o.items.length===0)&&a(window.lastPrintedOrder)&&(o=window.lastPrintedOrder),(!o||!o.items||o.items.length===0)&&(ge||[]).length>0){const k=ge.find(a);k&&Array.isArray(k.items)&&k.items.length>0&&(o=k)}if((!o||!o.items||o.items.length===0)&&Array.isArray(B)){const k=B.find(a);k&&Array.isArray(k.items)&&k.items.length>0&&(o=k)}if((!o||!o.items||o.items.length===0)&&s)try{const k=typeof te<"u"&&te?te:window.db;if(k){let P=await k.collection("freshmart_orders").doc(s).get();if(!P.exists&&!s.startsWith("ORD-")){const R=await k.collection("freshmart_orders").doc("ORD-"+s).get();R.exists&&(P=R)}if(P&&P.exists&&(o=P.data(),o.orderId=o.orderId||P.id,window.currentCustomerOrder=o,window.lastPrintedOrder=o,Array.isArray(B))){const R=B.findIndex(a);if(R!==-1){B[R].items=o.items||[],B[R].payment=o.payment||{},B[R].customer=o.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(B))}catch{}}}}}catch(k){console.warn("[Receipt] Gagal fetch order detail from Firestore:",k)}if(!o&&Array.isArray(B)&&(o=B.find(a)),!o)return;window.lastPrintedOrder=o;const n=typeof H=="function"?H():{paperSize:"58mm",showPoints:!0,showBarcode:!0},r=ne(n.paperSize),l=r>=40,d=se(o.dateString||o.date||Date.now(),l),c=n.headerText||p.store.name||"Toko Putri",b=p.store.wa||"",f=(k,P,R=r)=>{const j=String(k||""),Y=String(P||""),W=R-j.length-Y.length;return j+(W>0?" ".repeat(W):" ")+Y},x=Array.isArray(o.items)?o.items:Array.isArray(o.cart)?o.cart:[],y=x.reduce((k,P)=>k+parseFloat(P.qty||1)*(parseFloat(P.effectivePrice||P.price)||0),0),w=o.payment&&o.payment.subtotal!==void 0?o.payment.subtotal:y||o.total||0,u=o.payment&&o.payment.shippingCost!==void 0?o.payment.shippingCost:0,M=o.payment&&o.payment.grandTotal!==void 0?o.payment.grandTotal:o.total||w+u,C=String(o.payment?.method||o.method||"Tunai").toUpperCase(),L=o.customer?.name||o.customerName||"Guest",h=o.customer?.deliveryMethod==="delivery"||o.deliveryMethod==="delivery";let g=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${i(c)}</div>`;b&&(g+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${i(b)}</div>`);const T=o.payment?.taxNpwp||p.store?.taxNpwp;if(T&&(g+=`<div class="text-center" style="font-size:10px;font-family:monospace;margin-bottom:4px;">NPWP: ${i(T)}</div>`),g+='<div class="border-b border-dashed border-black my-2"></div>',g+=`<div style="white-space:pre;font-family:monospace;">${f(`Order: #${o.orderId}`,d,r)}</div>`,g+=`<div style="white-space:pre;font-family:monospace;">${f(`Plg  : ${i(L).substring(0,l?18:10)}`,`Tipe: ${h?"Kirim":"Ambil"}`,r)}</div>`,(o.customer?.phone||o.customerPhone)&&(g+=`<div style="white-space:pre;font-family:monospace;">HP   : ${i(o.customer?.phone||o.customerPhone)}</div>`),g+='<div class="border-b border-dashed border-black my-2"></div>',o.customer?.note&&(g+=`<div style="white-space:pre-wrap;word-break:break-word;">Cat: ${i(o.customer.note)}</div><div class="border-b border-dashed border-black my-2"></div>`),x.length>0?x.forEach(k=>{let P=k.variantName?` (${i(k.variantName)}${k.colorCode?" "+i(k.colorCode):""})`:"";const R=i(k.name||"Barang")+P+(k.poTime?" [PO]":""),j=k.effectivePrice||k.price||0,Y=`  ${parseFloat(k.qty||1)} ${i(k.unit||"pcs")} x ${Math.round(j).toLocaleString("id-ID")}`,W=(parseFloat(k.qty||1)*j).toLocaleString("id-ID");g+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;">${R}</div><div style="white-space:pre;font-family:monospace;font-size:11px;">${f(Y,W,r)}</div>`,k.poTime&&(g+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">  * Estimasi PO: ${i(k.poTime)}</div>`)}):g+='<div style="white-space:pre;font-style:italic;color:#64748b;text-align:center;padding:4px 0;">- Tidak ada rincian barang -</div>',g+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-family:monospace;">${f("Subtotal",w.toLocaleString("id-ID"),r)}</div>`,h&&(g+=`<div style="white-space:pre;font-family:monospace;">${f("Ongkir",u.toLocaleString("id-ID"),r)}</div>`),o.payment?.shippingDiscount&&(g+=`<div style="white-space:pre;font-family:monospace;">${f("Pot.Ongkir",`-${o.payment.shippingDiscount.toLocaleString("id-ID")}`,r)}</div>`),o.payment?.productDiscount&&(g+=`<div style="white-space:pre;font-family:monospace;">${f("Pot.Harga",`-${o.payment.productDiscount.toLocaleString("id-ID")}`,r)}</div>`),(o.payment?.ppnEnabled||o.payment?.ppnShowZero||o.payment?.ppnRate===0||o.payment?.ppnAmount&&o.payment.ppnAmount>0)&&(p.store?.ppnEnabled||o.payment?.ppnEnabled)){const k=o.payment?.ppnType==="inclusive",P=o.payment?.ppnRate!==void 0?o.payment.ppnRate:p.store?.ppnRate||0,R=o.payment?.ppnAmount||0,j=o.payment?.ppnLabel||`${k?"Inc. PPN":"PPN"} (${P}%)`,Y=R>0?`${k?"":"+"}${R.toLocaleString("id-ID")}`:"0";g+=`<div style="white-space:pre;font-family:monospace;">${f(j,Y,r)}</div>`}g+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-family:monospace;font-weight:bold;font-size:12px;">${f("TOTAL","Rp "+M.toLocaleString("id-ID"),r)}</div><div style="white-space:pre;font-family:monospace;">${f("Metode Bayar",C,r)}</div>`,n.showPoints&&(o.pointsEarned>0||o.finalMemberPoints!==void 0)&&(g+='<div class="border-b border-dashed border-black my-2"></div>',o.pointsEarned>0&&(g+=`<div style="white-space:pre;font-family:monospace;">${f("Poin Didapat","+"+o.pointsEarned+" Poin",r)}</div>`),o.finalMemberPoints!==void 0&&o.finalMemberPoints!==null&&(g+=`<div style="white-space:pre;font-family:monospace;font-weight:bold;">${f("Saldo Poin",String(o.finalMemberPoints)+" Poin",r)}</div>`),o.claimedReward&&(g+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;margin-top:2px;">HADIAH: ${i(o.claimedReward.name)}</div>`)),x.some(k=>k&&k.poTime&&k.poTime!=="")&&(g+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),n.showBarcode&&(g+=`<div class="border-b border-dashed border-black my-2"></div><div style="text-align:center;margin:4px 0;"><div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*ORDER-${i(o.orderId)}*</div><div style="font-size:8px;color:#666;">SCAN DI KASIR</div></div>`),g+=`<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${i(n.footerText||"Terima Kasih Atas Kunjungan Anda")}</div><div class="border-b border-dashed border-black my-2"></div><div style="height:15px;"></div>`,Ut("receipt-paper-content",g);const I=m("receipt-paper-content");I&&(I.style.width=l?"340px":"260px");const K=m("receipt-preview-modal-box");K&&(K.classList.remove("max-w-[320px]","max-w-[400px]"),K.classList.add(l?"max-w-[400px]":"max-w-[320px]"));const D=m("receipt-preview-modal"),S=m("receipt-preview-modal-box");D&&D.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),We(D,S)},Ks=(e=!1)=>{const t=m("receipt-preview-modal"),s=m("receipt-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{xe(t,s)}):xe(t,s))},Us=()=>{const e=be||(window.lastPrintedOrder?window.lastPrintedOrder.orderId:null);if(typeof window.printCustomerReceiptDirect=="function"){window.printCustomerReceiptDirect(e);return}if(!((ge||[]).find(a=>a.orderId===be)||(Array.isArray(B)?B.find(a=>a.orderId===be):null)||window.lastPrintedOrder))return;const s=m("receipt-paper-content")?m("receipt-paper-content").innerHTML:"";gt(s)};window.openReceiptPreview=xt;window.openCustomerReceiptPreview=e=>{xt(e)};window.closeReceiptPreviewModal=Ks;window.executePrintReceipt=Us;window.checkProPrint=()=>{xt()};const q={OWNER:"owner",ADMIN:"admin",CASHIER:"cashier"},Fs=[{key:"orders",label:"Pesanan Online",desc:"Proses status pesanan, update resi pengiriman & konfirmasi bayar",group:"operasional",icon:"fa-receipt"},{key:"products",label:"Katalog Produk & Stok",desc:"Tambah/edit produk, atur varian, dan perbarui stok barang",group:"operasional",icon:"fa-box-open"},{key:"suppliers",label:"Supplier & Rekanan",desc:"Kelola master data supplier, kontak kulakan, dan asal produk",group:"operasional",icon:"fa-truck-field"},{key:"purchases",label:"Order Kulakan (PO)",desc:"Buat PO pembelian grosir, terima restock, & kelola hutang rekanan",group:"operasional",icon:"fa-cart-flatbed"},{key:"piutang",label:"Piutang Tempo & Cicilan",desc:"Kelola nota piutang pelanggan, denda keterlambatan, & cicilan",group:"operasional",icon:"fa-clock-rotate-left"},{key:"customers",label:"Database Pelanggan",desc:"Lihat daftar member, atur limit kredit PayLater, & mutasi poin",group:"operasional",icon:"fa-address-book"},{key:"pos",label:"Kasir POS",desc:"Akses antarmuka penjualan kasir toko fisik dan shift kasir",group:"operasional",icon:"fa-cash-register"},{key:"expenses",label:"Biaya Operasional Toko",desc:"Buku kas pengeluaran operasional toko harian & nota kas",group:"operasional",icon:"fa-money-bill-transfer"},{key:"stock_opname",label:"Stock Opname (Audit Fisik)",desc:"Audit stok fisik rak/gudang, rekonsiliasi selisih & terapkan penyesuaian stok",group:"operasional",icon:"fa-clipboard-check"},{key:"categories",label:"Kategori Produk",desc:"Tambah dan susun kategori etalase produk",group:"konten",icon:"fa-tags"},{key:"brands",label:"Merek Produk",desc:"Kelola daftar brand dagang barang",group:"konten",icon:"fa-copyright"},{key:"colors",label:"Database Warna",desc:"Katalog warna produk dan swatch varian",group:"konten",icon:"fa-swatchbook"},{key:"vouchers",label:"Voucher & Promo",desc:"Buat kode voucher diskon dan promo belanja",group:"konten",icon:"fa-ticket-simple"},{key:"banners",label:"Banner Promosi",desc:"Kelola gambar dan video slider beranda toko",group:"konten",icon:"fa-images"},{key:"rewards",label:"Program Hadiah Poin",desc:"Kelola katalog hadiah penukaran poin member",group:"konten",icon:"fa-gift"},{key:"reviews",label:"Ulasan Pelanggan",desc:"Moderasi ulasan dan testimoni produk pembeli",group:"konten",icon:"fa-star"},{key:"faqs",label:"Tanya Jawab / Q&A",desc:"Kelola jawaban pertanyaan umum pembeli",group:"konten",icon:"fa-circle-question"},{key:"changelog",label:"Log Pembaruan Sistem",desc:"Melihat riwayat update sistem toko",group:"konten",icon:"fa-code-branch"},{key:"reports",label:"Pusat Laporan & Keuangan",desc:"Laporan terpadu penjualan, stok, laba rugi, utang piutang, dan perpajakan",group:"sensitif",icon:"fa-chart-pie"},{key:"view_reports",label:"Laporan Finansial & Laba",desc:"Lihat omset, total HPP terjual, margin & laba bersih toko",group:"sensitif",icon:"fa-chart-line"},{key:"tax",label:"Pajak & Keuangan (PPN)",desc:"Laporan PPN, neraca keuangan, dan laba rugi resmi",group:"sensitif",icon:"fa-file-invoice-dollar"},{key:"banks",label:"Rekening Bank & QRIS",desc:"Ubah nomor rekening toko dan QRIS tujuan pembayaran",group:"sensitif",icon:"fa-building-columns"},{key:"settings",label:"Pengaturan Utama Toko",desc:"Konfigurasi nama toko, GPS maps, tarif ongkir, & sistem",group:"sensitif",icon:"fa-gear"},{key:"cashiers",label:"Kelola Staf & Hak Akses",desc:"Daftarkan staf baru, atur jabatan, & ubah batasan hak akses",group:"sensitif",icon:"fa-users-gear"},{key:"backup_sync",label:"Pusat Data & Backup Cloud",desc:"Cadangkan data toko, ekspor database, & sinkronisasi cloud",group:"sensitif",icon:"fa-cloud-arrow-up"}],dt={[q.CASHIER]:{pos:!0,orders:!1,products:!1,suppliers:!1,purchases:!1,piutang:!1,customers:!1,categories:!1,brands:!1,colors:!1,vouchers:!1,banners:!1,rewards:!1,reviews:!1,faqs:!1,changelog:!1,expenses:!1,stock_opname:!1,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[q.ADMIN]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},manager:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!0,view_reports:!0,tax:!0,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[q.OWNER]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,reports:!0,view_reports:!0,tax:!0,banks:!0,settings:!0,cashiers:!0,backup_sync:!0}};let Ae=null;const De=()=>{if(Ae)return Ae;try{const e=sessionStorage.getItem("freshmart_staff_profile");if(e)return Ae=JSON.parse(e),Ae}catch{}return null},js=e=>{Ae=e;try{e?sessionStorage.setItem("freshmart_staff_profile",JSON.stringify(e)):sessionStorage.removeItem("freshmart_staff_profile")}catch{}},_s=()=>{Ae=null;try{sessionStorage.removeItem("freshmart_staff_profile")}catch{}},Ke=()=>{const e=qe.currentUser;if(e&&e.uid===ae)return!0;const t=De();if(t){const a=String(t.role||"").toLowerCase();if(a==="owner"||t.uid===ae)return!0;if(a==="cashier"||a==="kasir"||a==="staff")return!1}const s=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");if((window.isAdm||window.__localIsAdm)&&s&&!t)return!0;try{const a=sessionStorage.getItem("pos_cashier_session");if(a){const o=JSON.parse(a),n=String(o.role||"").toLowerCase();if(n==="owner"||o.uid===ae)return!0;if(n==="cashier"||n==="kasir"||n==="staff")return!1}}catch{}return!1},zs=()=>{if(Ke())return!0;if(sa())return!1;const e=De();return e?.role===q.ADMIN||String(e?.role||"").toLowerCase()==="admin"},sa=()=>{if(Ke())return!1;const e=De();if(e){const t=String(e.role||"").toLowerCase();if(t==="owner"||e.uid===ae)return!1;if(t==="cashier"||t==="kasir")return!0}try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const s=JSON.parse(t),a=String(s.role||"").toLowerCase();if(a==="owner"||s.uid===ae)return!1;if(a==="cashier"||a==="kasir"||a==="staff")return!0}}catch{}return!1},oa=e=>{if(Ke())return!0;const t=De();if(t){if(t.isActive===!1)return!1;const s=String(t.role||"").toLowerCase();if(s===q.OWNER||s==="owner")return!0;if(s===q.CASHIER||s==="cashier"||s==="kasir")return e==="pos";if(t.permissions){if(typeof t.permissions[e]<"u")return t.permissions[e]===!0;if(e==="reports"&&(t.permissions.view_reports===!0||t.permissions.tax===!0)||(e==="view_reports"||e==="tax")&&t.permissions.reports===!0)return!0}return(dt[t.role]||dt[q.ADMIN])[e]===!0}try{const s=sessionStorage.getItem("pos_cashier_session");if(s){const a=JSON.parse(s),o=String(a.role||"").toLowerCase();if(o===q.OWNER||o==="owner"||a.uid===ae)return!0;if(o===q.CASHIER||o==="cashier"||o==="kasir")return e==="pos"}}catch{}return window.isAdm||window.__localIsAdm?["banks","settings","cashiers","backup_sync"].includes(e)?qe.currentUser?.uid===ae:!0:!1},ct=()=>{if(typeof window<"u"&&(window.curViewName==="view-pos-cashier"||document.getElementById("view-pos-cashier")?.classList.contains("flex")||document.getElementById("pos-payment-modal")?.classList.contains("flex")||document.getElementById("pos-variant-sheet")?.classList.contains("flex")))try{const a=sessionStorage.getItem("pos_cashier_session");if(a){const o=JSON.parse(a),n=String(o.role||"").toLowerCase();return n===q.OWNER||n==="owner"||o.uid===ae}}catch{}if(Ke())return!0;const t=De();if(t){const a=String(t.role||"").toLowerCase();return a===q.OWNER||a==="owner"||t.uid===ae?!0:a===q.CASHIER||a==="cashier"||a==="kasir"?!1:oa("view_reports")}const s=qe.currentUser;return!!(s&&s.uid===ae||window.isAdm||window.__localIsAdm)},qs=e=>{switch(e){case q.OWNER:return`
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
            </span>`}};typeof window<"u"&&(window.ROLES=q,window.PERMISSION_DEFINITIONS=Fs,window.ROLE_PRESETS=dt,window.getActiveStaff=De,window.setActiveStaff=js,window.clearActiveStaff=_s,window.isOwnerUser=Ke,window.isAdminUser=zs,window.isCashierUser=sa,window.hasPermission=oa,window.canViewHpp=ct,window.getRoleBadgeHtml=qs);let we="invoice",na=!1;const Xe=e=>{na=e},Q=(e,t=!1)=>{if(!e)return"-";try{const s=e.toDate?e.toDate():new Date(e);if(isNaN(s.getTime()))return"-";const a={day:"2-digit",month:"short",year:"numeric"};return t&&(a.hour="2-digit",a.minute="2-digit"),s.toLocaleDateString("id-ID",a)}catch{return"-"}},Ct=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(2).replace(/\.?0+$/,"")},ue=(e="w-16 h-16")=>p.store?.logo&&(p.store.logo.includes("http")||p.store.logo.includes("data:"))?`<img loading="eager" src="${i(p.store.logo)}" class="${e} object-contain shrink-0">`:`<div class="${e} primary-bg flex items-center justify-center rounded-xl text-white shrink-0"><i class="fa-solid fa-store text-2xl"></i></div>`,Dt=({docTitle:e,docNumber:t,docDate:s})=>`
    <div class="flex justify-between items-center border-b-2 border-slate-800 pb-2.5 mb-4 text-xs font-semibold select-none">
        <div class="flex items-center gap-2.5">
            ${ue("w-8 h-8")}
            <div>
                <span class="font-black text-slate-900 uppercase text-xs sm:text-sm tracking-tight">${i(p.store?.name||"TOKO PUTRI")}</span>
                <span class="text-slate-300 mx-1.5">&bull;</span>
                <span class="font-bold text-slate-700 uppercase tracking-wider text-[11px]">${i(e)}</span>
            </div>
        </div>
        <div class="text-right font-mono text-slate-600 text-[11px]">
            ${t?`<span class="font-bold text-slate-900">${i(t)}</span> <span class="text-slate-400 mx-1">&bull;</span>`:""}
            <span>${i(s||"")}</span>
        </div>
    </div>
    `,It=(e,t,s)=>`
    <div class="a4-page-footer mt-auto pt-2.5 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono select-none">
        <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-700 uppercase">${i(p.store?.name||"TOKO PUTRI")}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-500">${i(s||"Dokumen Resmi")}</span>
        </div>
        <div class="flex items-center gap-1 font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
            <span>Halaman ${e} dari ${t}</span>
        </div>
    </div>
    `,ce=({docTitle:e,docNumber:t,docDate:s,kopHtml:a,metaHtml:o,tableHeaderHtml:n,rows:r=[],tableClass:l="w-full text-left border-collapse mb-4 text-xs",summaryHtml:d="",extraBlocksHtml:c="",signaturesHtml:b="",singlePageMax:f=6,itemsFirstPage:x=6,itemsMiddlePage:y=14,itemsLastPage:w=6})=>{const u=r.length;if(u<=f)return[`
        <div class="a4-page" data-page="1" data-total-pages="1">
            <div class="a4-page-body flex-1 flex flex-col">
                ${a}
                ${o||""}
                <table class="${l}">
                    <thead>${n}</thead>
                    <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${r.join("")}</tbody>
                </table>
                ${d||""}
                ${c||""}
                ${b||""}
            </div>
            ${It(1,1,e)}
        </div>
        `];const M=[],C=[],L=r.slice(0,x);C.push(L);let h=x;for(;h<u;){const T=u-h;if(T<=w)C.push(r.slice(h)),h=u;else{const $=Math.min(y,T);C.push(r.slice(h,h+$)),h+=$}}const g=C.length;return C.forEach((T,$)=>{const v=$+1,I=v===1,K=v===g;let D="";I?D=`
            ${a}
            ${o||""}
            <table class="${l}">
                <thead>${n}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${T.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${v+1}...
            </div>
            `:K?D=`
            ${Dt({docTitle:e,docNumber:t,docDate:s})}
            ${T.length>0?`
            <table class="${l}">
                <thead>${n}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${T.join("")}</tbody>
            </table>`:""}
            ${d||""}
            ${c||""}
            ${b||""}
            `:D=`
            ${Dt({docTitle:e,docNumber:t,docDate:s})}
            <table class="${l}">
                <thead>${n}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${T.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${v+1}...
            </div>
            `,M.push(`
        <div class="a4-page" data-page="${v}" data-total-pages="${g}">
            <div class="a4-page-body flex-1 flex flex-col">
                ${D}
            </div>
            ${It(v,g,e)}
        </div>
        `)}),M},Ws=(e,t=null)=>{if(we=e,e==="po"){const y=p.purchases||[],w=y.find(D=>String(D.id)===String(t))||(window.currentActivePoId?y.find(D=>String(D.id)===String(window.currentActivePoId)):y[0]);if(!w){typeof window.showToast=="function"&&window.showToast("Data PO tidak ditemukan!");return}X("doc-modal-title","Preview Purchase Order (PO)");const u=ue("w-16 h-16"),M=Q(w.date||w.createdAt),C=w.poNumber||w.id,L=w.paymentType==="tempo"?`Tempo ${w.tempoDays||14} Hari (Jatuh Tempo: ${Q(w.tempoDueDate)})`:w.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai",h=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${u}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(p.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(p.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">PURCHASE ORDER</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(C)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${M}</p>
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
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Termin Pembayaran:</span> <b class="text-slate-900">${L}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tujuan Pengiriman:</span> <b class="text-slate-900">${i(p.store?.name||"Gudang Utama Toko")}</b></p>
                ${w.notes?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${i(w.notes)}</p>`:""}
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
                ${i(D.name)}
                ${D.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(D.variantName)}</span>`:""}
                ${D.sku?`<span class="text-slate-400 text-[9.5px] font-mono block mt-0.5">SKU: ${i(D.sku)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${Ct(D.qty)} <span class="text-[10px] font-normal text-slate-500">${i(D.unit||"pcs")}</span></td>
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
        `,I=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-6 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Dipesan Oleh (Purchasing):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Diterima &amp; Disetujui Oleh:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(w.supplierName||"Rekanan / Supplier")}</span>
            </div>
        </div>
        `,K=ce({docTitle:"Purchase Order",docNumber:`#${C}`,docDate:M,kopHtml:h,metaHtml:g,tableHeaderHtml:T,rows:$,summaryHtml:v,signaturesHtml:I,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});pe(K);return}if(e==="stock_opname"){const y=p.stockOpnameHistory||[],w=y.find(S=>String(S.id)===String(t)||String(S.soNumber)===String(t))||y[0];if(!w){typeof window.showToast=="function"&&window.showToast("Data Berita Acara Stock Opname tidak ditemukan!");return}X("doc-modal-title","Preview Berita Acara Stock Opname");const u=ue("w-16 h-16"),M=Q(w.date,!0),C=w.soNumber||w.id,L=typeof ct=="function"?ct():!1,h=w.items||[],g=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${u}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(p.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(p.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">BERITA ACARA</h2>
                <h3 class="font-bold text-sm tracking-wider text-amber-600 uppercase">STOCK OPNAME FISIK</h3>
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${i(C)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${M}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Auditor: <b class="text-slate-900">${i(w.auditorName||"Staf Auditor")}</b></p>
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
                <span class="text-[10px] text-rose-500 block">${L?"−"+A(w.totalLossRp||0):"Pcs"}</span>
            </div>
            <div class="bg-amber-50 p-3 rounded-xl border border-amber-200 text-center">
                <span class="text-[9px] font-black uppercase text-amber-600 block tracking-wider">Total Lebih (Surplus)</span>
                <span class="text-lg font-black text-amber-600 font-mono">+${w.totalSurplusUnits||0}</span>
                <span class="text-[10px] text-amber-600 block">${L?"+"+A(w.totalSurplusRp||0):"Pcs"}</span>
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
            ${L?'<th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Dampak HPP</th>':'<th class="py-2.5 px-3 rounded-tr-xl text-right w-16">Satuan</th>'}
        </tr>
        `,v=h.length===0?['<tr><td colspan="7" class="py-8 text-center text-slate-500 italic">Semua stok fisik barang dalam kondisi berimbang (100% Sesuai / Selisih 0).</td></tr>']:h.map((S,k)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${k+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${i(S.productName)}
                ${S.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${i(S.variantName)}</span>`:""}
                ${S.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(S.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center font-mono text-slate-600">${S.systemStock} ${i(S.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${S.physicalStock} ${i(S.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-bold font-mono ${S.diff<0?"text-rose-600":"text-amber-600"}">
                ${S.diff<0?`−${Math.abs(S.diff)}`:`+${S.diff}`}
            </td>
            <td class="py-2 px-3 text-[10.5px]">
                <span class="font-bold text-slate-800">${i(S.reason==="salah_hitung"?"Koreksi Kasir":S.reason==="rusak"?"Barang Rusak":S.reason==="hilang"?"Barang Hilang":S.reason==="kadaluarsa"?"Expired":S.reason==="bonus"?"Bonus Supplier":S.reason)}</span>
                ${S.notes?`<span class="text-slate-500 block italic">"${i(S.notes)}"</span>`:""}
            </td>
            ${L?`
                <td class="py-2 px-3 text-right font-mono font-bold ${S.diff<0?"text-rose-600":"text-amber-600"}">
                    ${S.diff<0?"−":"+"}${A(Math.abs(S.diffValueHpp||0))}
                </td>`:`
                <td class="py-2 px-3 text-right text-slate-500">${i(S.unit||"pcs")}</td>
            `}
        </tr>
        `),I=w.notes?`
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs mb-5 text-slate-700">
            <b class="text-slate-900">Catatan Auditor:</b> ${i(w.notes)}
        </div>`:"",K=`
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
                <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Pimpinan")}</span>
            </div>
        </div>
        `,D=ce({docTitle:"Berita Acara Stock Opname",docNumber:`#${C}`,docDate:M,kopHtml:g,metaHtml:T,tableHeaderHtml:$,rows:v,extraBlocksHtml:I,signaturesHtml:K,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});pe(D);return}if(e==="stock_opname_worksheet"){X("doc-modal-title","Preview Lembar Kerja Hitung Fisik (Worksheet)");const y=ue("w-14 h-14"),w=Q(new Date),u=p.products||[],M=[];u.forEach(v=>{!v||v.id==null||(v.variants&&v.variants.length>0?v.variants.forEach(I=>{M.push({name:v.name,variantName:I.name,sku:I.sku||v.sku||"",category:v.category||"Umum",unit:v.unit||"pcs",systemStock:parseFloat(I.stock)||0})}):M.push({name:v.name,variantName:"",sku:v.sku||"",category:v.category||"Umum",unit:v.unit||"pcs",systemStock:parseFloat(v.stock)||0}))});const C=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3">
                ${y}
                <div>
                    <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${i(p.store?.slogan||"Pusat Alat Teknik & Bangunan")}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${i(p.store?.address||"")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-wider text-slate-900 uppercase">LEMBAR KERJA AUDIT</h2>
                <h3 class="font-bold text-xs tracking-widest text-amber-600 uppercase">STOCK OPNAME FISIK RAK</h3>
                <p class="text-xs font-medium text-slate-500 mt-1">Tanggal Cetak: <b>${w}</b></p>
                <p class="text-xs font-medium text-slate-500">Total Item: <b>${M.length} Baris</b></p>
            </div>
        </div>
        `,L=`
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
        `,g=M.map((v,I)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200"><span class="inline-block w-3.5 h-3.5 border border-slate-400 rounded-sm"></span></td>
            <td class="py-2 px-2 text-center font-mono text-slate-400 border-r border-slate-200">${I+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 border-r border-slate-200 uppercase">
                ${i(v.name)}
                ${v.variantName?`<span class="bg-slate-100 text-slate-700 px-1 rounded text-[8.5px] border border-slate-300 ml-1 font-semibold">${i(v.variantName)}</span>`:""}
                ${v.sku?`<span class="text-slate-400 font-mono text-[8.5px] block">SKU: ${i(v.sku)}</span>`:""}
            </td>
            <td class="py-2 px-2 text-[10px] text-slate-600 border-r border-slate-200">
                ${i(v.category)}
            </td>
            <td class="py-2 px-2 text-center font-mono font-bold text-slate-600 border-r border-slate-200">
                ${v.systemStock} ${i(v.unit)}
            </td>
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200 bg-amber-50/40">
                <span class="inline-block w-20 h-5 border-b-2 border-slate-400"></span>
            </td>
            <td class="py-2 px-3 text-[10px] text-slate-400">
                <span class="inline-block w-full h-5 border-b border-slate-200"></span>
            </td>
        </tr>
        `),$=ce({docTitle:"Lembar Kerja Audit Rak",docNumber:`TOTAL ${M.length} ITEM`,docDate:w,kopHtml:C,metaHtml:L,tableHeaderHtml:h,rows:g,tableClass:"w-full text-left border-collapse mb-4 text-[11px]",signaturesHtml:`
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
        `,singlePageMax:16,itemsFirstPage:15,itemsMiddlePage:20,itemsLastPage:14});pe($);return}if(e==="tempo_invoice"){const y=t||window.cVOrd;let u=(window.cachedPiutangOrders||[]).find(O=>String(O.orderId)===String(y))||(window.gOrds||[]).find(O=>String(O.orderId)===String(y));if(!u&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(y)&&(u=window.lastPrintedOrder),!u){typeof window.showToast=="function"&&window.showToast("Data nota tagihan piutang tidak ditemukan!");return}X("doc-modal-title","Preview Nota Tagihan Piutang (Tempo)");const M=ue("w-16 h-16"),C=Q(u.dateString||u.timestamp),L=parseFloat(u.payment?.tempoBalance)||0,h=u.payment?.tempoPenaltyRate!==void 0?parseFloat(u.payment.tempoPenaltyRate):1,g=u.payment?.tempoPenaltyStopped===!0;let T=0;const $=u.payment?.tempoDueDate||0;let v=0,I=0,K=!1,D=!1;const S=Date.now();$>0&&(S>$?(v=Math.floor((S-$)/(24*60*60*1e3)),v>0&&(K=!0)):(I=Math.ceil(($-S)/(24*60*60*1e3)),I<=3&&(D=!0))),g?T=parseFloat(u.payment?.tempoFixedPenalty)||0:K&&(T=h/100*L*v);const k=L+T,P=u.payment?.installments||[],R=P.reduce((O,le)=>O+(parseFloat(le.amount)||0),0),j=u.payment?.grandTotal||L+R,Y=u.payment?.paymentStatus==="lunas"||L<=0,W=!!(u.payment?.isPaylater||u.isPaylater||u.payment?.subMethod==="paylater");let E=W?"PAYLATER BERJALAN":"TEMPO BERJALAN",re="text-blue-600 bg-blue-50 border-blue-200";Y?(E="LUNAS SEPENUHNYA",re="text-emerald-600 bg-emerald-50 border-emerald-300"):K?(E=`TERLAMBAT ${v} HARI`,re="text-rose-600 bg-rose-50 border-rose-300"):D&&(E=`JATUH TEMPO H-${I<=0?"0":I}`,re="text-amber-600 bg-amber-50 border-amber-300");const oe=p.banks&&p.banks.length>0?p.banks.map(O=>`<div class="font-mono text-xs"><b class="text-slate-900">${i(O.bank)}:</b> ${i(O.number)} a/n ${i(O.name)}</div>`).join(""):'<div class="text-xs text-slate-500 italic">Hubungi kasir untuk info rekening transfer bank</div>',ye=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${M}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(p.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(p.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">${W?"NOTA PUTRI PAYLATER":"NOTA TAGIHAN PIUTANG"}</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(u.orderId)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tgl Transaksi: ${C}</p>
                <div class="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${re}">
                    ${i(E)}
                </div>
            </div>
        </div>
        `,Qe=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ditujukan Kepada (Debitur / Pelanggan):</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-0.5">${i(u.customer?.name||"Pelanggan")}</p>
                ${u.customer?.wa||u.customer?.phone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> +${i(u.customer.wa||u.customer.phone)}</p>`:""}
                <p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${i(u.customer?.address||"Alamat di toko / pelanggan tempo")}</p>
                ${u.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${i(u.customer.note)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan Jatuh Tempo:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tanggal Jatuh Tempo:</span> <b class="text-slate-900 font-mono">${Q($)}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Sistem Pembayaran:</span> <b class="${W?"text-emerald-700 font-bold":"text-slate-900"} uppercase">${W?"Putri PayLater Member VIP":"Tempo / Bertahap"}</b></p>
                ${K?`<p class="text-xs font-bold text-rose-600 mb-1"><span class="text-slate-500">Status:</span> Lewat ${v} Hari (Denda ${h}%/hari)</p>`:""}
                <p class="text-xs font-semibold text-slate-700"><span class="text-slate-500">Kasir / Admin:</span> <b class="text-slate-900 uppercase">${i(u.cashierName||"Kasir Toko")}</b></p>
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
        `,ve=(u.items||[]).map((O,le)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${le+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(O.name)}
                ${O.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(O.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${Ct(O.qty)} <span class="text-[10px] font-normal text-slate-500">${i(O.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${A(O.effectivePrice||O.price)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${A(O.subtotal||Math.round((parseFloat(O.qty)||0)*(parseFloat(O.effectivePrice||O.price)||0)))}</td>
        </tr>
        `),ke=`
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
                    ${P.map((O,le)=>`
                    <tr class="hover:bg-slate-50">
                        <td class="py-1.5 px-3 text-center text-slate-500">${le+1}</td>
                        <td class="py-1.5 px-3 text-slate-700">${Q(O.date)}</td>
                        <td class="py-1.5 px-3 uppercase text-slate-600 font-bold">${i(O.method||"Tunai")}</td>
                        <td class="py-1.5 px-3 text-right font-bold text-emerald-600">+ ${A(O.amount)}</td>
                        <td class="py-1.5 px-3 text-slate-500 text-[11px] font-sans">${i(O.note||"-")}</td>
                    </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>`:""}
        `,Pe=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran:
                </h4>
                <div class="space-y-1 pt-0.5">${oe}</div>
                <p class="text-[9.5px] text-slate-500 pt-1.5 border-t border-slate-200">Konfirmasi bukti transfer ke nomor resmi WhatsApp toko kami.</p>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Awal:</span><span class="font-bold text-slate-800">${A(j)}</span></div>
                ${W?`<div class="flex justify-between text-emerald-600 font-bold"><span>Limit PayLater Terpakai:</span><span>${A(u.payment?.paylaterUsed||j-(u.payment?.tempoDp||u.payment?.dp||0))}</span></div>`:""}
                ${(parseFloat(u.payment?.tempoDp||u.payment?.dp)||0)>0?`<div class="flex justify-between text-slate-600"><span>Uang Muka (DP Dibayar):</span><span class="font-bold">${A(u.payment?.tempoDp||u.payment?.dp||0)}</span></div>`:""}
                ${R>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Masuk:</span><span>-${A(R)}</span></div>`:""}
                <div class="flex justify-between text-slate-700 font-bold"><span>${W?"Sisa Pokok PayLater:":"Sisa Pokok Piutang:"}</span><span>${A(L)}</span></div>
                ${T>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Denda Keterlambatan:</span><span>+${A(T)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>${W?"SISA TAGIHAN PAYLATER:":"SISA WAJIB BAYAR:"}</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${A(Y?0:k)}</span>
                </div>
            </div>
        </div>
        `,Ue=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Yang Berhutang (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(u.customer?.name||"Pelanggan")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Kasir Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,yt=ce({docTitle:W?"Nota Putri PayLater":"Nota Tagihan Piutang",docNumber:`#${u.orderId}`,docDate:C,kopHtml:ye,metaHtml:Qe,tableHeaderHtml:ie,rows:ve,extraBlocksHtml:ke,summaryHtml:Pe,signaturesHtml:Ue,singlePageMax:5,itemsFirstPage:5,itemsMiddlePage:12,itemsLastPage:4});pe(yt);return}if(e==="tempo_customer_ledger"){const y=String(t||"").trim(),u=(window.cachedPiutangOrders||[]).filter(E=>{const re=String(E.customer?.phone||E.customer?.wa||"").replace(/\D/g,""),oe=String(E.customer?.name||"").toLowerCase().trim(),ye=y.replace(/\D/g,"");return!!(ye.length>=8&&re.includes(ye)||oe&&y.toLowerCase().includes(oe))});if(u.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada nota piutang aktif untuk pelanggan ini.");return}const M=u[0].customer||{},C=M.name||"Pelanggan",L=M.wa||M.phone||"-";X("doc-modal-title",`Kartu Piutang: ${C}`);const h=ue("w-16 h-16"),g=Q(Date.now());let T=0,$=0,v=0,I=0,K=0;const D=u.map((E,re)=>{const oe=parseFloat(E.payment?.tempoBalance)||0,ye=E.payment?.tempoPenaltyRate!==void 0?parseFloat(E.payment.tempoPenaltyRate):1,Qe=E.payment?.tempoPenaltyStopped===!0;let ie=0;const ve=E.payment?.tempoDueDate||0;let ke=0,Pe=!1;const Ue=Date.now();ve>0&&Ue>ve&&(ke=Math.floor((Ue-ve)/(24*60*60*1e3)),ke>0&&(Pe=!0)),Qe?ie=parseFloat(E.payment?.tempoFixedPenalty)||0:Pe&&(ie=ye/100*oe*ke);const O=(E.payment?.installments||[]).reduce((ra,ia)=>ra+(parseFloat(ia.amount)||0),0),le=E.payment?.grandTotal||oe+O,vt=oe+ie;return T+=le,$+=O,v+=oe,I+=ie,K+=vt,`
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="py-2.5 px-3 text-center font-mono text-slate-500">${re+1}</td>
                <td class="py-2.5 px-3 font-mono font-bold text-slate-800">#${i(E.orderId)}</td>
                <td class="py-2.5 px-3 font-medium text-slate-600">${Q(E.dateString||E.timestamp)}</td>
                <td class="py-2.5 px-3 font-mono ${Pe?"text-rose-600 font-bold":"text-slate-700"}">${Q(ve)} ${Pe?`<span class="text-[9.5px] text-rose-500">(+${ke}h)</span>`:""}</td>
                <td class="py-2.5 px-3 text-right font-mono text-slate-600">${A(le)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-600 font-bold">${A(O)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-rose-600">${ie>0?A(ie):"-"}</td>
                <td class="py-2.5 px-3 text-right font-mono font-black text-slate-900">${A(vt)}</td>
            </tr>
            `}),S=p.banks&&p.banks.length>0?p.banks.map(E=>`<div class="font-mono text-xs"><b class="text-slate-900">${i(E.bank)}:</b> ${i(E.number)} a/n ${i(E.name)}</div>`).join(""):'<div class="text-xs text-slate-500 italic">Hubungi kasir untuk info rekening transfer bank</div>',k=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${h}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(p.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(p.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">KARTU PIUTANG PELANGGAN</h2>
                <p class="text-xs font-bold text-slate-600 mt-1">STATEMENT OF ACCOUNT</p>
                <p class="text-xs font-semibold text-slate-500 mt-0.5">Dicetak: ${g}</p>
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
                    <p class="font-bold text-base text-slate-900 uppercase">${i(C)}</p>
                </div>
                <div>
                    <p class="text-[11px] text-slate-500">Nomor WhatsApp / HP:</p>
                    <p class="font-mono font-bold text-base text-emerald-600">+${i(L)}</p>
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
                ${I>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Total Denda (+):</span><span>+${A(I)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL AKUMULASI PIUTANG:</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${A(K)}</span>
                </div>
            </div>
        </div>
        `,Y=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Penerima Tagihan (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(C)}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Pemilik Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,W=ce({docTitle:"Kartu Piutang Pelanggan",docNumber:"STATEMENT OF ACCOUNT",docDate:g,kopHtml:k,metaHtml:P,tableHeaderHtml:R,rows:D,summaryHtml:j,signaturesHtml:Y,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});pe(W);return}const s=t||window.cVOrd,a=(window.gOrds||[]).find(y=>String(y.orderId)===String(s))||(window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(s)?window.lastPrintedOrder:null);if(!a){typeof window.showToast=="function"&&window.showToast("Data pesanan tidak ditemukan!");return}X("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const o=a.dateString?new Date(a.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"",r=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${ue("w-16 h-16")}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(p.store?.slogan||"General Supplier")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(p.store?.address||"Alamat fisik toko")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(p.store?.wa||"-")}</p>
                ${a.payment?.taxNpwp||p.store?.taxNpwp?`<p class="text-xs font-semibold text-slate-600 mt-0.5"><i class="fa-solid fa-id-card text-blue-500"></i> NPWP Toko: <span class="font-mono">${i(a.payment?.taxNpwp||p.store.taxNpwp)}</span></p>`:""}
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl sm:text-3xl tracking-widest ${e==="invoice"?"text-blue-600":"text-amber-600"} uppercase">${e==="invoice"?a.payment?.method==="tempo"?"PROFORMA INVOICE":"INVOICE":"SURAT JALAN"}</h2>
            <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(a.orderId)}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${o}</p>
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
        `,w=d.map((h,g)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${g+1}</td>
            <td class="py-2.5 px-3 font-bold flex items-center gap-1.5">
                ${i(h.name)} 
                ${h.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${i(h.variantName)}</span>`:""}
                ${h.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${i(h.colorCode)};"></span>`:""}
                ${h.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${i(h.poTime)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${parseFloat(h.qty)} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(h.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${A(h.effectivePrice)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${A(h.effectivePrice*parseFloat(h.qty))}</td>
        </tr>
        `);let u="";(a.pointsEarned>0||a.finalMemberPoints!==void 0&&a.finalMemberPoints!==null)&&(u+=`
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 flex items-center gap-4">
                <div class="w-8 h-8 rounded-lg bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
                ${a.pointsEarned>0?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-sm text-amber-700">+${a.pointsEarned}</p></div>`:""}
                ${a.finalMemberPoints!==void 0&&a.finalMemberPoints!==null?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Member</p><p class="font-bold text-sm text-amber-700">${a.finalMemberPoints}</p></div>`:""}
            </div>`),a.claimedReward&&(u+=`
            <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-3 mb-4 flex items-center justify-between gap-4">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                    <div>
                        <p class="text-[9px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${a.claimedReward.pointsCost} Poin)</p>
                        <p class="font-bold text-xs text-violet-800 uppercase">${i(a.claimedReward.name)}</p>
                    </div>
                </div>
                <span class="text-[9.5px] font-bold px-2.5 py-1 rounded-lg bg-violet-600 text-white uppercase tracking-wider">${i(a.claimedReward.status==="ready"?"SERTAKAN PENGIRIMAN":"KLAIM RESMI")}</span>
            </div>`),a.payment?.method==="tempo"&&(u+=`
            <div class="mb-4 border border-pink-200 bg-pink-50 p-3 rounded-xl text-left">
                <h4 class="font-bold text-pink-700 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo:</h4>
                <p class="text-[9.5px] text-pink-600 font-semibold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${a.payment.tempoDueDate?new Date(a.payment.tempoDueDate).toLocaleDateString("id-ID"):"-"}). Keterlambatan dikenakan denda sesuai regulasi toko.</p>
            </div>`);const M=`
        <div class="flex justify-end mb-5">
            <div class="w-1/2 md:w-[45%] space-y-1.5 text-xs font-bold text-slate-700">
                <div class="flex justify-between px-3"><span>Subtotal Produk</span><span class="font-mono">${A(a.payment?.subtotal)}</span></div>
                ${a.payment?.shippingCost?`<div class="flex justify-between px-3"><span>Ongkos Kirim</span><span class="font-mono">${A(a.payment.shippingCost)}</span></div>`:""}
                ${a.payment?.shippingDiscount?`<div class="flex justify-between px-3 text-emerald-600"><span>Diskon Ongkir</span><span class="font-mono">-${A(a.payment.shippingDiscount)}</span></div>`:""}
                ${a.payment?.productDiscount?`<div class="flex justify-between px-3 text-rose-600"><span>Diskon Produk</span><span class="font-mono">-${A(a.payment.productDiscount)}</span></div>`:""}
                ${(()=>{if(!((a.payment?.ppnEnabled||a.payment?.ppnShowZero||a.payment?.ppnRate===0||a.payment?.ppnAmount&&a.payment.ppnAmount>0)&&(p.store?.ppnEnabled||a.payment?.ppnEnabled)))return"";const g=a.payment?.ppnType==="inclusive",T=a.payment?.ppnRate!==void 0?a.payment.ppnRate:p.store?.ppnRate||0,$=a.payment?.ppnAmount||0,v=a.payment?.ppnLabel||`${g?"Termasuk PPN":"PPN"} (${T}%)`,I=(a.payment?.subtotal||0)-(a.payment?.productDiscount||0)+(a.payment?.shippingCost||0)-(a.payment?.shippingDiscount||0),K=a.payment?.dppAmount!==void 0?a.payment.dppAmount:g&&T>0?Math.round(I*100/(100+T)):Math.max(0,I);return`
                    <div class="flex justify-between px-3 text-slate-600"><span>DPP</span><span class="font-mono">${A(K)}</span></div>
                    <div class="flex justify-between px-3 text-amber-600"><span>${v}</span><span class="font-mono">${$>0?(g?"":"+")+A($):"Rp 0"}</span></div>
                    `})()}
                
                <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-2 shadow-xs">
                    <span class="font-bold text-xs uppercase tracking-widest">Grand Total</span>
                    <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${A(a.payment?.grandTotal)}</span>
                </div>
                ${a.payment?.method==="tempo"?`
                <div class="flex justify-between px-3 mt-2 text-emerald-600"><span>Uang Muka (DP)</span><span class="font-mono">${A(a.payment?.tempoDp||0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-2.5 rounded-xl mt-1 border border-rose-200">
                    <span class="font-bold text-xs uppercase tracking-widest">Sisa Tagihan</span>
                    <span class="font-mono text-sm font-bold tracking-tight">${A(a.payment?.tempoBalance||0)}</span>
                </div>
                `:""}
            </div>
        </div>
        `,C=`
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
                <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,L=ce({docTitle:a.payment?.method==="tempo"?"Proforma Invoice":"Faktur Invoice",docNumber:`#${a.orderId}`,docDate:o,kopHtml:r,metaHtml:l,tableHeaderHtml:y,rows:w,extraBlocksHtml:u,summaryHtml:M,signaturesHtml:C,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:12,itemsLastPage:5});pe(L);return}const c=`
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
            <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,x=ce({docTitle:"Surat Jalan Pengiriman",docNumber:`#${a.orderId}`,docDate:o,kopHtml:r,metaHtml:l,tableHeaderHtml:c,rows:b,signaturesHtml:f,singlePageMax:8,itemsFirstPage:8,itemsMiddlePage:16,itemsLastPage:9});pe(x)},Gs=()=>{const e=window.cart||[];if(!e||e.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}we="sph";const t="SPH-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.floor(1e3+Math.random()*9e3),s=Q(new Date),a=Q(new Date(Date.now()+14*24*60*60*1e3));X("doc-modal-title","Surat Penawaran Harga (SPH)");const o=ue("w-16 h-16"),n=typeof window.getEffP=="function"?window.getEffP:u=>u.price||0;let r=0;const l=e.map((u,M)=>{const C=parseFloat(u.qty)||1,L=n(u),h=C*L;return r+=h,`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${M+1}</td>
            <td class="py-2.5 px-3 font-bold">
                ${i(u.name)}
                ${u.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${i(u.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${C} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(u.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${A(L)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${A(h)}</td>
        </tr>
        `}),d=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${o}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(p.store?.slogan||"General Supplier & Alat Teknik")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(p.store?.address||"Alamat fisik toko")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(p.store?.wa||"-")}</p>
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
    `,b=`
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
    `,x=`
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
            <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,w=ce({docTitle:"Surat Penawaran Harga",docNumber:`#${t}`,docDate:s,kopHtml:d,metaHtml:c,tableHeaderHtml:b,rows:l,summaryHtml:f,extraBlocksHtml:x,signaturesHtml:y,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:5});pe(w)},pe=e=>{const t=m("doc-paper-content");if(!t)return;t.innerHTML=e.join("");const s=e.length,a=m("doc-page-count-badge");a&&(a.textContent=`${s} Halaman A4`),Vs(s)},Vs=(e=1)=>{const t=m("doc-preview-modal"),s=m("doc-preview-modal-box");t&&t.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),We(t,s),ht()},ht=()=>{const e=m("doc-paper-scroll-area"),t=m("doc-paper-content"),s=m("doc-paper-wrapper");if(!e||!t||!s)return;const a=794,o=window.innerWidth<640?12:32,n=e.clientWidth-o,r=Math.min(1,Math.max(.2,n/a));t.style.transform=`translateX(-50%) scale(${r})`;const l=t.offsetHeight||t.scrollHeight;s.style.height=l*r+48+"px"};window.addEventListener("resize",()=>{const e=m("doc-preview-modal");e&&!e.classList.contains("hidden")&&ht()});const Ys=(e=!1)=>{const t=m("doc-preview-modal"),s=m("doc-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{xe(t,s)}):xe(t,s))},Js=()=>{const e=m("doc-paper-content"),t=e?e.innerHTML:"";if(!t){typeof window.showToast=="function"&&window.showToast("Tidak ada dokumen yang dicetak!");return}if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){let n=m("a4-print-section");n||(n=document.createElement("div"),n.id="a4-print-section",document.body.appendChild(n)),n.innerHTML=t,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500);return}const s=window.open("","_blank"),o=`<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>${i(we==="invoice"?"Faktur Invoice":we==="po"?"Purchase Order":we==="sph"?"Penawaran Harga":we==="stock_opname"?"Berita Acara Stock Opname":"Dokumen Resmi A4")} - Cetak A4 Standar Presisi</title>
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
</html>`;if(!s){let n=document.getElementById("a4-print-fallback-iframe");n||(n=document.createElement("iframe"),n.id="a4-print-fallback-iframe",n.style.position="fixed",n.style.right="0",n.style.bottom="0",n.style.width="0",n.style.height="0",n.style.border="0",n.style.opacity="0",document.body.appendChild(n));const r=n.contentWindow.document;r.open(),r.write(o),r.close(),setTimeout(()=>{try{n.contentWindow.focus(),n.contentWindow.print()}catch(l){console.warn("[DocPrint] Fallback iframe print error:",l)}},650);return}s.document.open(),s.document.write(o),s.document.close()},Qs=async e=>{if(!na){Xe(!0),_e(e==="image"?"Membuat Gambar HD...":"Menyusun Dokumen PDF A4...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{et(),Xe(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const t=m("doc-paper-content");if(!t)throw new Error("Elemen dokumen tidak ditemukan.");let s=Array.from(t.querySelectorAll(".a4-page"));s.length===0&&(s=[t]);const a=window.cVOrd||Date.now().toString(36).toUpperCase(),o=`${we.toUpperCase()}_${a}`,n=async r=>{const l=document.createElement("div");l.style.position="fixed",l.style.top="-9999px",l.style.left="-9999px",l.style.width="794px",l.style.height="1123px",l.style.backgroundColor="#ffffff",l.style.overflow="hidden",l.style.zIndex="-9999";const d=r.cloneNode(!0);d.style.margin="0 auto",d.style.boxShadow="none",d.style.border="none",d.style.borderRadius="0",d.style.transform="none",d.style.width="794px",d.style.height="1123px",d.style.minHeight="1123px",d.style.maxHeight="1123px",d.style.overflow="hidden",l.appendChild(d),document.body.appendChild(l);const c=Array.from(d.querySelectorAll("img"));await Promise.all(c.map(f=>f.complete?Promise.resolve():new Promise(x=>{f.addEventListener("load",x,{once:!0}),f.addEventListener("error",x,{once:!0})}))),await new Promise(f=>setTimeout(f,200));const b=await html2canvas(l,{scale:2,useCORS:!0,backgroundColor:"#ffffff",width:794,height:1123,windowWidth:794,windowHeight:1123});return document.body.removeChild(l),b};if(e==="image")if(s.length===1){const l=(await n(s[0])).toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(l,`${o}.png`,"image/png");else{const d=document.createElement("a");d.download=`${o}.png`,d.href=l,d.click()}typeof window.showToast=="function"&&window.showToast("Gambar A4 Presisi Berhasil Disimpan!")}else{for(let r=0;r<s.length;r++){_e(`Menyimpan Gambar Halaman ${r+1} dari ${s.length}...`);const d=(await n(s[r])).toDataURL("image/png",1),c=`${o}_Hal_${r+1}.png`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(d,c,"image/png");else{const b=document.createElement("a");b.download=c,b.href=d,b.click()}await new Promise(b=>setTimeout(b,250))}typeof window.showToast=="function"&&window.showToast(`Berhasil menyimpan ${s.length} gambar halaman A4!`)}else{const r=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,l=new r({orientation:"portrait",unit:"mm",format:"a4"});for(let d=0;d<s.length;d++){_e(`Menyusun PDF Hal ${d+1} dari ${s.length}...`);const b=(await n(s[d])).toDataURL("image/jpeg",.95);d>0&&l.addPage("a4","portrait"),l.addImage(b,"JPEG",0,0,210,297,void 0,"FAST")}window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"?window.AndroidNativeApp.saveOrShareFile(l.output("datauristring"),`${o}.pdf`,"application/pdf"):l.save(`${o}.pdf`),typeof window.showToast=="function"&&window.showToast(`File PDF Standar A4 (${s.length} Halaman) Berhasil Disimpan!`)}}catch(t){console.error("Export Error: ",t),typeof window.showToast=="function"&&window.showToast(t&&t.message?`Gagal: ${t.message}`:"Gagal memproses dokumen.")}finally{et(),Xe(!1)}}};window.openDocPreview=Ws;window.openCartSPHPreview=Gs;window.fitDocPreview=ht;window.closeDocPreviewModal=Ys;window.printDocA4=Js;window.exportDocFile=Qs;export{qe as $,fe as A,We as B,La as C,Ca as D,is as E,Ra as F,$o as G,Po as H,xe as I,ko as J,z as K,ts as L,Ta as M,Sa as N,go as O,xa as P,ya as Q,va as R,ha as S,ka as T,Pa as U,po as V,uo as W,mo as X,fo as Y,wo as Z,bo as _,p as a,$a as a$,Ge as a0,Ft as a1,Fo as a2,Uo as a3,pa as a4,os as a5,ma as a6,et as a7,rs as a8,oa as a9,ls as aA,Ha as aB,Fa as aC,Ro as aD,Ss as aE,Ps as aF,Co as aG,yo as aH,H as aI,ct as aJ,Ka as aK,B as aL,no as aM,ro as aN,G as aO,xs as aP,zo as aQ,qo as aR,eo as aS,Ko as aT,he as aU,_a as aV,ao as aW,oo as aX,ga as aY,xo as aZ,Aa as a_,De as aa,Ke as ab,q as ac,_s as ad,_e as ae,Oa as af,Eo as ag,Ea as ah,Bo as ai,Ba as aj,Ho as ak,ja as al,ae as am,js as an,Nt as ao,Oo as ap,ho as aq,ge as ar,Ua as as,Io as at,be as au,Go as av,Pt as aw,_o as ax,Lo as ay,jt as az,Ut as b,Ma as b0,Da as b1,Ia as b2,Na as b3,Mo as b4,za as b5,to as b6,co as b7,vo as b8,To as b9,So as ba,Ao as bb,No as bc,dt as bd,Fs as be,qs as bf,Rt as c,fa as d,m as e,A as f,ss as g,Kt as h,i,Do as j,io as k,te as l,lo as m,wa as n,ba as o,so as p,ns as q,Ve as r,Ht as s,X as t,Xa as u,ee as v,Ot as w,Wo as x,as as y,jo as z};
