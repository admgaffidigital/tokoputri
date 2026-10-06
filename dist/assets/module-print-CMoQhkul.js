const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js","assets/module-pos-AmH44SCL.js"])))=>i.map(i=>d[i]);
import{f as Le}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const Sa="modulepreload",Aa=function(e){return"/"+e},Bt={},Jt=function(t,s,a){let n=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");n=Promise.allSettled(s.map(c=>{if(c=Aa(c),c in Bt)return;Bt[c]=!0;const d=c.endsWith(".css"),y=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${y}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Sa,d||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),d)return new Promise((b,u)=>{f.addEventListener("load",b),f.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return n.then(r=>{for(const l of r||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},$a={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const Ma=typeof window<"u"&&window.FIREBASE_CONFIG?window.FIREBASE_CONFIG:$a;Le.apps.length||Le.initializeApp(Ma);const re=Le.firestore(),Xe=Le.auth();typeof window<"u"&&(window.firebase=Le,window.db=re,window.auth=Xe);try{re.settings({ignoreUndefinedProperties:!0,experimentalAutoDetectLongPolling:!0,merge:!0})}catch{}typeof window<"u"&&(window.addEventListener("online",()=>{try{re.enableNetwork().catch(()=>{})}catch{}}),window.addEventListener("offline",()=>{try{re.disableNetwork().catch(()=>{})}catch{}}));let Ca=null;const hn=()=>{Jt(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{Ca=Le.analytics()}catch{}}).catch(()=>{})},ie="K2ijSERTT2dg27yYGTEgn6XHSnW2",La={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"pill",brandStyle:"logo",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showHeroSlide:!0,heroMascotImg:"/putri_mascot_anim.gif",heroBadgeText:"Siap Melayani",heroWelcomeTag:"SELAMAT DATANG",heroTitle:"",heroSubtitle:"",showRewardCatalog:!0,showScrollTopButton:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,paylater:{enabled:!0,minOrder:2e4,maxOrder:1e7,noticeText:"Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.",tenors:{"30d":{enabled:!0,label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:"flat",adminFeeValue:0,serviceFeeType:"flat",serviceFeeValue:0},"2m":{enabled:!0,label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:"flat",adminFeeValue:1500,serviceFeeType:"percent",serviceFeeValue:1.5},"3m":{enabled:!0,label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:"flat",adminFeeValue:2500,serviceFeeType:"percent",serviceFeeValue:2.5}}},terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},subscription:{status:"active",plan:"pro_managed",expiresAt:null,allowGraceDays:7,storeCode:"PUTRI",clientName:"Pemilik Toko",developerContact:"6281234567890",developerName:"Developer / Technical Partner"},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],productOrder:[],suppliers:[],purchases:[],expenses:[],stockOpnameHistory:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let p=JSON.parse(JSON.stringify(La)),Yt=[],Qt=[],j=[];try{const e=localStorage.getItem("freshmart_cart");e&&(Yt=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(Qt=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(j=JSON.parse(e)||[])}catch{}let Da={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},Na=null,Ia=null,Ra=null,Oa="Semua Produk",Ea="Semua Jenis",Ba="Semua Merek",Ha="",Fa="newest",Ua="grid",Ka=1,ja=12,_a="orders",za="",qa=null,Ga=null,Wa=0,Va=[],Ja=[],Ya=[],Qa=1,ge=[],Za=null,Xa=null,es=null,ve=[],ts=[],ye=null,as=null,ss=!1,ns="all",os="today",rs=null,is=null;const yn=e=>{rs=e},vn=e=>{p=e},kn=e=>{Yt=e},Pn=e=>{Qt=e},Tn=e=>{j=e},Sn=e=>{Da=e},An=e=>{Na=e},$n=e=>{Ia=e},Mn=e=>{Ra=e},Cn=e=>{Oa=e},Ln=e=>{Ea=e},Dn=e=>{Ba=e},Nn=e=>{Ha=e},In=e=>{Fa=e},Rn=e=>{Ua=e},On=e=>{Ka=e},En=e=>{ja=e},Bn=e=>{_a=e},Hn=e=>{za=e},Fn=e=>{qa=e},Un=e=>{Ga=e},Kn=e=>{Wa=e},jn=e=>{Va=e},_n=e=>{Ja=e},zn=e=>{Ya=e},qn=e=>{Qa=e},Gn=e=>{ge=e},Wn=e=>{ve=e},Vn=e=>{ts=e},Ht=e=>{ye=e},Jn=e=>{as=e},Yn=e=>{ss=e},Qn=e=>{is=e},Zn=e=>{ns=e},Xn=e=>{os=e},eo=e=>{Za=e},to=e=>{Xa=e},ao=e=>{es=e};let Zt=!1;if(typeof window<"u"){const e=()=>{Zt=!0,window.__hasUserInteracted=!0};["pointerdown","touchstart","mousedown","keydown"].forEach(t=>{window.addEventListener(t,e,{capture:!0,once:!0})}),window.__hasUserInteracted=!1}const Pt=()=>typeof navigator<"u"&&navigator.userActivation?navigator.userActivation.hasBeenActive:!!(Zt||typeof window<"u"&&window.__hasUserInteracted);typeof window<"u"&&(window.checkUserGesture=Pt);const Pe=(e="light")=>{try{const t=window.Capacitor?.Plugins?.Haptics;if(t){e==="light"||e==="selection"?t.impact({style:"LIGHT"}).catch(()=>{}):e==="medium"?t.impact({style:"MEDIUM"}).catch(()=>{}):e==="heavy"?t.impact({style:"HEAVY"}).catch(()=>{}):e==="success"?t.notification({type:"SUCCESS"}).catch(()=>{}):e==="warning"?t.notification({type:"WARNING"}).catch(()=>{}):e==="error"&&t.notification({type:"ERROR"}).catch(()=>{});return}if(typeof navigator<"u"&&typeof navigator.vibrate=="function"){if(!Pt())return;e==="light"||e==="selection"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="heavy"?navigator.vibrate(45):e==="success"?navigator.vibrate([15,30,20]):e==="warning"?navigator.vibrate([30,40,30]):e==="error"&&navigator.vibrate([40,50,40,50,40])}}catch{}};typeof window<"u"&&(window.triggerHaptic=Pe);const ls=e=>{if(e)switch(e){case"product-modal":typeof window.closeProductModal=="function"&&window.closeProductModal();break;case"pos-variant-sheet":typeof window.closePOSVariantSheet=="function"&&window.closePOSVariantSheet();break;case"variant-preview-modal":typeof window.closeVariantPreviewModal=="function"&&window.closeVariantPreviewModal();break;case"custom-confirm-modal":typeof window.closeConfirm=="function"&&window.closeConfirm();break;case"scanner-modal":typeof window.closeCameraScanner=="function"&&window.closeCameraScanner();break;case"modal-tempo-detail":typeof window.closeTempoDetailModal=="function"&&window.closeTempoDetailModal();break;case"modal-tempo-payment":typeof window.closeTempoPaymentModal=="function"&&window.closeTempoPaymentModal();break;case"modal-tempo-penalty":typeof window.closeTempoPenaltyModal=="function"&&window.closeTempoPenaltyModal();break;case"modal-supplier-detail":typeof window.closeSupplierDetailModal=="function"&&window.closeSupplierDetailModal();break;case"modal-supplier-form":typeof window.closeSupplierFormModal=="function"&&window.closeSupplierFormModal();break;case"modal-po-form":typeof window.closePurchaseFormModal=="function"&&window.closePurchaseFormModal();break;case"modal-po-detail":typeof window.closePurchaseDetailModal=="function"&&window.closePurchaseDetailModal();break;case"modal-po-payment":typeof window.closePurchasePaymentModal=="function"&&window.closePurchasePaymentModal();break;case"modal-po-product-picker":typeof window.closePurchasePickerModal=="function"&&window.closePurchasePickerModal();break;case"quick-menu-modal":case"quickmenu-modal":typeof window.closeQuickMenuModal=="function"&&window.closeQuickMenuModal();break;case"category-modal":typeof window.closeCategoryModal=="function"&&window.closeCategoryModal();break;case"brand-modal":typeof window.closeBrandModal=="function"&&window.closeBrandModal();break;case"quick-variant-modal":typeof window.closeQuickVariantSheet=="function"&&window.closeQuickVariantSheet();break;case"shopping-guide-modal":typeof window.closeShoppingGuideModal=="function"&&window.closeShoppingGuideModal();break;case"pos-login-modal":typeof window.closePOSLoginModal=="function"&&window.closePOSLoginModal();break;case"admin-order-modal":typeof window.closeOrderDetailModal=="function"&&window.closeOrderDetailModal();break;case"order-detail-modal":typeof window.closeCustomerOrderDetailModal=="function"&&window.closeCustomerOrderDetailModal();break;case"modal-client-tempo-pay":typeof window.closeClientPaymentModal=="function"&&window.closeClientPaymentModal();break;default:{const t=document.getElementById(e);if(t){const s=t.querySelector('button[onclick*="close"], .fa-xmark')?.closest("button");if(s)s.click();else if(typeof window.closeModalAnim=="function"){const a=t.querySelector('.modal-bottom-sheet, [id$="-box"]')||t.firstElementChild;window.closeModalAnim(t,a)}else t.classList.add("hidden","opacity-0")}}}};let Z=null,Ee=null,Ve=0,Ft=0,Je=0,me=!1,Ut=0;const ds=()=>{if(typeof document>"u")return;document.addEventListener("touchstart",t=>{if(t.touches.length!==1)return;const s=t.touches[0],a=s.target.closest('[id*="modal"], [id*="sheet"]');if(!a||a.classList.contains("hidden")||a.classList.contains("opacity-0")||!(a.classList.contains("items-end")||!!s.target.closest(".modal-bottom-sheet")||a.classList.contains("modal-bottom-sheet")))return;let o=s.target.closest(".modal-bottom-sheet")||s.target.closest('[id$="-box"]');if(o||(o=s.target.closest('[id$="-content"]')),!o||s.target.closest('input, select, textarea, button, a, [role="button"], table, .no-drag'))return;const r=!!s.target.closest(".overflow-y-auto, .overflow-x-auto, .scroll-content, .custom-scrollbar"),l=o.getBoundingClientRect(),c=s.clientY-l.top;(s.target.closest(".pull-indicator")||!r&&c<=55)&&(Z=o,Ee=a,Ve=s.clientY,Ft=s.clientX,Je=Ve,me=!1,Ut=Date.now())},{passive:!0}),document.addEventListener("touchmove",t=>{if(!Z||t.touches.length!==1)return;const s=t.touches[0];Je=s.clientY;const a=Je-Ve,n=Math.abs(s.clientX-Ft);if(!me&&n>Math.abs(a)){Z=null;return}const o=Z.classList.contains("overflow-y-auto")?Z:Z.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar");if(!(o&&o.scrollTop>5&&!me)){if(a>0){if(me=!0,t.cancelable&&t.preventDefault(),Z.style.transform=`translateY(${a}px)`,Z.style.transition="none",Ee){const r=Math.max(.2,1-a/400);Ee.style.backgroundColor=`rgba(15, 23, 42, ${.8*r})`}}else if(a<0&&me){const r=a*.2;Z.style.transform=`translateY(${r}px)`,Z.style.transition="none"}}},{passive:!1});const e=()=>{if(!Z)return;const t=Z,s=Ee,a=Je-Ve,n=Math.max(1,Date.now()-Ut),o=a/n;Z=null,Ee=null,me&&(a>80||o>.45&&a>30)?(Pe("light"),t.style.transition="transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",t.style.transform="translateY(100%)",s&&(s.style.transition="opacity 0.25s ease",s.style.opacity="0"),setTimeout(()=>{t.style.transform="",t.style.transition="",s&&(s.style.backgroundColor="",s.style.opacity=""),ls(s?s.id:"")},250)):me&&(t.style.transition="transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)",t.style.transform="",s&&(s.style.transition="background-color 0.28s ease",s.style.backgroundColor=""),setTimeout(()=>{t.style.transition=""},300)),me=!1};document.addEventListener("touchend",e,{passive:!0}),document.addEventListener("touchcancel",e,{passive:!0})};let Kt=0;const cs=()=>{typeof document>"u"||document.addEventListener("click",e=>{const t=Date.now();if(t-Kt<50)return;const s=e.target.closest('button, [role="button"], a[onclick], [id*="bnav-"], .pos-add-btn, .pos-tag-chip, #pos-variant-chips button, .interactive-tap');s&&!s.disabled&&!s.classList.contains("disabled")&&(Kt=t,Pe("light"))},{passive:!0,capture:!0})};let q=null;const ps=(e="pop")=>{try{if(typeof window>"u"||!Pt())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;q||(q=new t),q.state==="suspended"&&q.resume().catch(()=>{});const s=q.currentTime;if(e==="pop"){const a=q.createOscillator(),n=q.createGain();a.type="sine",a.frequency.setValueAtTime(340,s),a.frequency.exponentialRampToValueAtTime(560,s+.07),n.gain.setValueAtTime(.14,s),n.gain.exponentialRampToValueAtTime(.001,s+.08),a.connect(n),n.connect(q.destination),a.start(s),a.stop(s+.08)}else if(e==="success"){const a=q.createOscillator(),n=q.createOscillator(),o=q.createGain(),r=q.createGain();a.type="triangle",n.type="triangle",a.frequency.setValueAtTime(523.25,s),n.frequency.setValueAtTime(659.25,s+.09),o.gain.setValueAtTime(.12,s),o.gain.exponentialRampToValueAtTime(.001,s+.22),r.gain.setValueAtTime(.14,s+.09),r.gain.exponentialRampToValueAtTime(.001,s+.32),a.connect(o),o.connect(q.destination),n.connect(r),r.connect(q.destination),a.start(s),a.stop(s+.22),n.start(s+.09),n.stop(s+.32)}else if(e==="beep"){const a=q.createOscillator(),n=q.createGain();a.type="square",a.frequency.setValueAtTime(1040,s),n.gain.setValueAtTime(.08,s),n.gain.exponentialRampToValueAtTime(.001,s+.07),a.connect(n),n.connect(q.destination),a.start(s),a.stop(s+.07)}}catch{}};typeof window<"u"&&(window.playNativeSound=ps);const Be=()=>{if(typeof document>"u")return;const e=document.getElementById("native-scroll-top-btn");e&&(e.classList.add("opacity-0","translate-y-3"),e.classList.add("hidden"))};typeof window<"u"&&(window.hideFloatingScrollTop=Be);const ms=()=>{if(typeof document>"u")return;let e=document.getElementById("native-scroll-top-btn");e||(e=document.createElement("button"),e.id="native-scroll-top-btn",document.body.appendChild(e)),e.setAttribute("aria-label","Kembali ke Atas"),e.setAttribute("title","Kembali ke Atas"),e.className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 hidden opacity-0 translate-y-3 transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900/95 dark:bg-slate-800/95 text-white shadow-xl shadow-black/25 border border-slate-700/80 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_4px_20px_rgba(var(--color-primary-rgb),0.4)] hover:scale-105 active:scale-90 cursor-pointer group",e.innerHTML='<i class="fa-solid fa-arrow-up text-xs md:text-sm transition-transform duration-200 group-hover:-translate-y-0.5"></i>',e._hasClickListener||(e._hasClickListener=!0,e.addEventListener("click",()=>{Pe("light");const s=document.querySelector(".view-section:not(.hidden)");if(s){const a=s.querySelector(".scroll-content");a&&a.scrollTop>10&&a.scrollTo({top:0,behavior:"smooth"})}window.scrollTo({top:0,behavior:"smooth"})}));const t=(s,a=null)=>{if(!e)return;if(typeof window<"u"&&window.appData?.store?.showScrollTopButton===!1){Be();return}const n=document.querySelector(".view-section:not(.hidden)");if(!n||n.id!=="view-catalog"&&n.id!=="view-orders"){Be();return}if(a){const r=a.closest(".view-section");if(!r||r.id!=="view-catalog"&&r.id!=="view-orders"){Be();return}}if(document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none), [id*="dialog"]:not(.hidden), .fixed.inset-0:not(.hidden):not(.pointer-events-none):not(#native-theme-ambient)')){Be();return}s>450?(e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0","translate-y-3")})):(e.classList.add("opacity-0","translate-y-3"),setTimeout(()=>{e&&e.classList.contains("opacity-0")&&e.classList.add("hidden")},300))};window.addEventListener("scroll",()=>{t(window.scrollY||document.documentElement.scrollTop)},{passive:!0}),document.addEventListener("scroll",s=>{s.target&&s.target.classList&&s.target.classList.contains("scroll-content")&&t(s.target.scrollTop,s.target)},{passive:!0,capture:!0})},us=()=>{if(typeof window>"u"||typeof document>"u")return;let e=document.getElementById("native-connectivity-banner");e||(e=document.createElement("div"),e.id="native-connectivity-banner",e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] -translate-y-16 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl",document.body.appendChild(e));let t=null;const s=a=>{clearTimeout(t),Pe(a?"success":"warning"),a?(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-emerald-600 text-white border border-emerald-400/40",e.innerHTML='<i class="fa-solid fa-wifi text-xs"></i><span>Kembali Online — Terhubung</span>',t=setTimeout(()=>{e.classList.add("-translate-y-16","opacity-0")},2500)):(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-amber-500 text-slate-950 border border-amber-300/60",e.innerHTML='<i class="fa-solid fa-wifi-slash text-xs"></i><span>Mode Offline — Menggunakan Data Lokal</span>')};window.addEventListener("online",()=>s(!0)),window.addEventListener("offline",()=>s(!1))},so=()=>{ds(),cs(),ms(),us()},Xt=e=>{let t="";return typeof e=="object"&&e!==null?t=`${e.name||""} ${e.category||""} ${e.subCategory||""}`.toLowerCase():t=String(e||"").toLowerCase(),t.includes("cat")||t.includes("paint")||t.includes("politur")||t.includes("thinner")||t.includes("no drop")||t.includes("kuas")||t.includes("roll")?{icon:"fa-paint-roller",gradient:"linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(244, 63, 94, 0.12) 0%, transparent 70%)",textColor:"#e11d48"}:t.includes("gembok")||t.includes("kunci")||t.includes("grendel")||t.includes("slot")||t.includes("silinder")?{icon:"fa-lock",gradient:"linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(245, 158, 11, 0.12) 0%, transparent 70%)",textColor:"#d97706"}:t.includes("paku")||t.includes("baut")||t.includes("sekrup")||t.includes("mur")||t.includes("kawat")?{icon:"fa-hammer",gradient:"linear-gradient(135deg, #64748b 0%, #334155 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(100, 116, 139, 0.12) 0%, transparent 70%)",textColor:"#475569"}:t.includes("pipa")||t.includes("pvc")||t.includes("paralon")||t.includes("kran")||t.includes("sambungan")||t.includes("fitting")||t.includes("knee")||t.includes("tee")?{icon:"fa-faucet-drip",gradient:"linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(6, 182, 212, 0.12) 0%, transparent 70%)",textColor:"#0891b2"}:t.includes("semen")||t.includes("mortar")||t.includes("pasir")||t.includes("bata")||t.includes("hebel")?{icon:"fa-trowel-bricks",gradient:"linear-gradient(135deg, #ea580c 0%, #9a3412 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(234, 88, 12, 0.12) 0%, transparent 70%)",textColor:"#c2410c"}:t.includes("perkakas")||t.includes("tang")||t.includes("obeng")||t.includes("palu")||t.includes("bor")||t.includes("gerinda")||t.includes("meteran")||t.includes("gergaji")?{icon:"fa-toolbox",gradient:"linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",textColor:"#4f46e5"}:{icon:"fa-box-open",gradient:"linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(var(--color-primary-rgb), 0.12) 0%, transparent 70%)",textColor:"var(--color-primary)"}},fs=(e,t="",s="")=>{const a=Xt(e);return{id:"brand",icon:a.icon,subIcon:a.icon,label:"Produk Resmi",podGradient:a.gradient,accent:"rgba(var(--color-primary-rgb),0.1)",aura:"rgba(var(--color-primary-rgb),0.08)",shadowColor:"rgba(var(--color-primary-rgb),0.15)"}},ea=e=>{if(!e||typeof e!="string")return"TP";const s=e.replace(/[^a-zA-Z0-9\s]/g," ").trim().split(/\s+/).filter(o=>o.length>0),a=s.filter(o=>/[a-zA-Z]/.test(o)),n=a.length>0?a:s;return n.length>=2?(n[0][0]+n[1][0]).toUpperCase():n.length===1?(n[0].length>=2?n[0].slice(0,2):n[0]+"P").toUpperCase():"TP"},bs=(e,t={})=>{const s=t.size||"md",a=t.className||"",n=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk"),o=Xt(e),r=ea(n);return`
    <div class="pos-smart-cover cover-${s} ${a}" title="${i(n)}">
        <!-- Subtle Theme Glow -->
        <div class="cover-surface-glow" style="background:${o.bgGlow}"></div>

        <!-- Center Content: Icon Pod + Monogram -->
        <div class="cover-center">
            <div class="cover-icon-pod" style="background:${o.gradient}">
                <i class="fa-solid ${o.icon} cover-icon text-white"></i>
            </div>
            ${s==="md"||s==="lg"?`<span class="cover-monogram" style="color:${o.textColor}">${i(r)}</span>`:""}
        </div>

        <!-- Official Store Watermark -->
        ${s!=="thumb"&&s!=="sm"?`
        <div class="cover-watermark">
            <i class="fa-solid fa-store mr-1 text-[7px] opacity-75"></i><span>PUTRI UTAMA TEKNIK</span>
        </div>`:""}
    </div>`},ws=e=>(typeof e=="object"&&e!==null?e.name:String(e||"Produk"),`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
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
    </svg>`)}`),w=e=>typeof e=="string"?document.getElementById(e):e,ta=e=>{const t=w(e);t&&t.classList.remove("hidden")},aa=e=>{const t=w(e);t&&t.classList.add("hidden")},gs=(e,t,s)=>{const a=w(e);a&&a.classList.toggle(t,s)},se=(e,t)=>{const s=w(e);s&&(s.innerText=t)},sa=(e,t)=>{const s=w(e);s&&(s.innerHTML=t)},xs=(e,t)=>{const s=w(e);s&&(s.value=t)},hs=e=>{const t=w(e);return t?t.value:""},et=(e,t)=>{const s=typeof e=="string"?w(e):e,a=typeof t=="string"?w(t):t;s&&(s.classList.remove("hidden","pointer-events-none"),a&&a.classList.add("pointer-events-auto"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.classList.remove("opacity-0","pointer-events-none"),a&&(a.classList.remove("translate-y-full","sm:translate-y-10","sm:translate-y-8","translate-y-6","sm:translate-y-6","scale-95"),a.classList.add("pointer-events-auto"))})}))},ke=(e,t,s)=>{const a=typeof e=="string"?w(e):e,n=typeof t=="string"?w(t):t;if(!a){typeof s=="function"&&s();return}a.classList.add("opacity-0","pointer-events-none"),n&&(n.classList.add("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95"),n.classList.remove("pointer-events-auto")),setTimeout(()=>{a.classList.add("hidden"),typeof s=="function"&&s()},280)};typeof window<"u"&&(window.openModalAnim=et,window.closeModalAnim=ke);const ys=e=>{try{return localStorage.getItem(e)}catch{return null}},vs=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},i=e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),P=e=>{const t=Number(e);return isNaN(t)||e===null?"Rp 0":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(Math.abs(t)).replace(/^/,t<0?"-":"")},ks=e=>{if(!e)return new Date;if(e.timestamp&&typeof e.timestamp.toDate=="function")try{const n=e.timestamp.toDate();if(n instanceof Date&&!isNaN(n.getTime()))return n}catch{}if(e.createdAt&&typeof e.createdAt.toDate=="function")try{const n=e.createdAt.toDate();if(n instanceof Date&&!isNaN(n.getTime()))return n}catch{}if(e.timestamp&&typeof e.timestamp=="object"){const n=e.timestamp.seconds??e.timestamp._seconds;if(typeof n=="number"&&!isNaN(n)&&n>0)return new Date(n*1e3)}if(e.createdAt&&typeof e.createdAt=="object"){const n=e.createdAt.seconds??e.createdAt._seconds;if(typeof n=="number"&&!isNaN(n)&&n>0)return new Date(n*1e3)}const t=[e.dateMs,e.timestamp,e.createdAt,e.date];for(const n of t){if(typeof n=="number"&&!isNaN(n)&&n>0)return new Date(n>1e11?n:n*1e3);if(typeof n=="string"&&/^\d{10,13}$/.test(n.trim())){const o=Number(n.trim());return new Date(o>1e11?o:o*1e3)}}const s=[e.dateString,e.date,e.createdAt];for(const n of s)if(typeof n=="string"&&n.trim()&&n!=="[object Object]"){const o=new Date(n);if(!isNaN(o.getTime()))return o;const r=n.replace(/-/g,"/").replace("T"," ").replace(/\..*$/,""),l=new Date(r);if(!isNaN(l.getTime()))return l}const a=e.orderId||(typeof e=="string"?e:"");if(typeof a=="string"&&a.startsWith("ORD-")){const n=a.split("-");if(n.length>=2&&n[1].length>=6){const o=parseInt(n[1],36);if(!isNaN(o)&&o>15e11&&o<25e11)return new Date(o)}}return new Date},Ps=(e,t=null)=>{if(typeof e!="string")return e;const s=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);if(!s)return e;const a=s[1];return t==="image/gif"||e.toLowerCase().includes(".gif")||a==="1rkAFxnZDe2eLQ88kan2BeGSg56IkAEJ9"?`https://drive.google.com/uc?export=view&id=${a}`:`https://lh3.googleusercontent.com/d/${a}`},Ts=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(t))return t;const s=t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return s?s[1]:null},na=e=>{if(typeof e!="string"||!e.trim())return null;const t=e.trim(),s=Ts(t);if(s)return{type:"youtube",id:s,embedUrl:`https://www.youtube.com/embed/${s}?autoplay=1&mute=1&muted=1&loop=1&playlist=${s}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const a=t.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(a&&a[1]){const n=a[1];return{type:"gdrive",id:n,streamUrl:`https://drive.google.com/uc?export=download&id=${n}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${n}`,directUrl:`https://drive.google.com/uc?export=download&id=${n}`,embedUrl:`https://drive.google.com/file/d/${n}/preview?autoplay=1`}}return{type:"direct",directUrl:t,embedUrl:t}},no=e=>{const t=na(e);return t?t.embedUrl:e},oo=e=>{const t=na(e);return t?t.embedUrl:e},ro=(e,t)=>typeof e!="string"||!e?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${t}`:e.includes("googleusercontent.com")&&!e.includes("=")?`${e}=${t}`:e,io=e=>{if(!e||typeof e!="string")return!0;const t=e.trim();return!!(!t||t.includes("placehold.co"))},lo=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",co=(e,t,s,a)=>{document.title=e||"Toko Putri";const n=(o,r,l=!1)=>{const c=l?"property":"name";let d=document.querySelector(`meta[${c}="${o}"]`);d||(d=document.createElement("meta"),d.setAttribute(c,o),document.head.appendChild(d)),d.setAttribute("content",r)};t&&n("description",t),e&&n("og:title",e,!0),t&&n("og:description",t,!0),s&&n("og:image",s,!0),a&&n("og:url",a,!0)},po=(e,t)=>{let s=document.getElementById(e);s||(s=document.createElement("script"),s.id=e,s.type="application/ld+json",document.head.appendChild(s)),s.textContent=JSON.stringify(t)},Ye=e=>{e&&se("loader-text",e);const t=w("global-loader");t&&(t.style.opacity="1",t.style.display="flex")},mt=()=>{const e=w("global-loader");e&&(e.style.pointerEvents="none",e.style.transition="opacity 0.25s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250))},oe=(e,t,s,a)=>{typeof window.showToast=="function"&&window.showToast(e,t,s,a)},mo=(e,t,s,a)=>{if(typeof window.showConfirm=="function")return window.showConfirm(e,t,s,a)},Se={};typeof window<"u"&&(window.loadedScripts=Se);const uo=(e,t)=>t&&t()?Promise.resolve():(Se[e]||(Se[e]=new Promise((s,a)=>{const n=document.createElement("script");n.src=e,n.onload=()=>s(),n.onerror=()=>{delete Se[e],a(new Error("Gagal memuat: "+e))},document.head.appendChild(n)})),Se[e]),oa=e=>{let t=(e||"").toString().replace(/\D/g,"");return t?(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),t):""},Ss=(e,t="")=>{const s=oa(e);if(!s){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp tidak valid!");return}const a=t?encodeURIComponent(t):"",n=`https://wa.me/${s}${a?`?text=${a}`:""}`;window.AndroidNativeApp&&typeof window.AndroidNativeApp.openWhatsApp=="function"?window.AndroidNativeApp.openWhatsApp(n):window.open(n,"_blank","noopener,noreferrer")},As=(e,t=null,s=null)=>{try{const a=(typeof t=="string"?document.querySelector(t):t)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!a)return;const n=e.getBoundingClientRect(),o=a.getBoundingClientRect(),r=document.createElement("div");r.className="flying-cart-item",s?r.innerHTML=`<img src="${s}" alt="Product" class="w-full h-full object-cover rounded-full" />`:r.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const l=n.left+n.width/2-20,c=n.top+n.height/2-20,d=o.left+o.width/2-20,y=o.top+o.height/2-20;r.style.cssText=`
            position: fixed;
            left: ${l}px;
            top: ${c}px;
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
        `,document.body.appendChild(r),requestAnimationFrame(()=>{const f=d-l,b=y-c;r.style.transform=`translate3d(${f}px, ${b}px, 0) scale(0.25) rotate(18deg)`,r.style.opacity="0.4"}),setTimeout(()=>{r&&r.parentNode&&r.parentNode.removeChild(r),Pe("medium");const f=document.getElementById("bottom-nav-cart-badge")||a.querySelector(".cart-count-badge");f&&(f.classList.remove("cart-bounce-pop"),f.offsetWidth,f.classList.add("cart-bounce-pop")),a.classList.remove("cart-bounce-pop"),a.offsetWidth,a.classList.add("cart-bounce-pop"),setTimeout(()=>{f&&f.classList.remove("cart-bounce-pop"),a.classList.remove("cart-bounce-pop")},600)},500)}catch(a){console.error("flyToCart error",a)}};typeof window<"u"&&(window.normalizeWA=oa,window.openWhatsApp=Ss,window.sLoad=Ye,window.hLoad=mt,window.el=w,window.show=ta,window.hide=aa,window.toggleCls=gs,window.setIn=se,window.setH=sa,window.setV=xs,window.getV=hs,window.esc=i,window.fixD=Ps,window.fCur=P,window.parseOrderDate=ks,window.sL=ys,window.ssL=vs,window.triggerHaptic=Pe,window.flyToCartAnimation=As);typeof window<"u"&&(window.renderProductCoverHtml=bs,window.getProductTheme=fs,window.getMonogram=ea,window.getProductCoverSvgDataUri=ws);const jt={deviceType:"rawbt",deviceName:"Driver RawBT (Printer Thermal Android - Free)",deviceId:"",paperSize:"58mm",directPrint:!1,feedLines:3,autoCut:!0,openCashDrawer:!1,autoPrintOrder:!1,headerText:"",storeAddress:"",storePhone:"",footerText:"Terima kasih atas kunjungan Anda!",footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa struk resmi.",showLogo:!0,showAddress:!0,showPhone:!0,showNpwp:!0,showPoints:!0,showBarcode:!0,networkIp:"192.168.1.200:9100"},de=e=>{switch(e){case"58mm-compact":case"58mm_30":return 30;case"80mm-compact":case"80mm_42":return 42;case"80mm":return 48;case"58mm":default:return 32}},_=()=>{try{const e=localStorage.getItem("freshmart_printer_config");if(e)return{...jt,...JSON.parse(e)}}catch(e){console.warn("Gagal membaca konfigurasi printer lokal:",e)}return{...jt}},je=e=>{try{const s={..._(),...e};return localStorage.setItem("freshmart_printer_config",JSON.stringify(s)),s}catch(t){return console.error("Gagal menyimpan konfigurasi printer:",t),_()}},$s=()=>{const e=_(),t=(o,r)=>{const l=w(o);l&&(l.checked=!!r)},s=(o,r)=>{const l=w(o);l&&(l.value=r||"")};s("printer-device-name-display",e.deviceName),s("printer-paper-size",e.paperSize),s("printer-network-ip",e.networkIp),s("printer-header-custom",e.headerText),s("printer-address-custom",e.storeAddress),s("printer-phone-custom",e.storePhone),s("printer-footer-custom",e.footerText),s("printer-policy-custom",e.footerPolicyNote),t("printer-opt-address",e.showAddress!==!1),t("printer-opt-phone",e.showPhone!==!1),t("printer-opt-npwp",e.showNpwp!==!1),t("printer-opt-points",e.showPoints),t("printer-opt-barcode",e.showBarcode),t("printer-opt-direct",e.directPrint===!0),t("printer-opt-autocut",e.autoCut!==!1),t("printer-opt-drawer",e.openCashDrawer),t("printer-opt-autoprint",e.autoPrintOrder),ia(e.deviceType||"rawbt");const a=w("printer-settings-modal"),n=w("printer-settings-modal-box");a&&a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("printerSettings"),et(a,n)},ra=(e=!1)=>{const t=w("printer-settings-modal"),s=w("printer-settings-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("printerSettings",e,()=>{ke(t,s)}):ke(t,s))},ia=e=>{window._selectedPrinterType=e,document.querySelectorAll(".printer-type-card").forEach(a=>{if(a.getAttribute("data-type")===e){a.classList.add("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),a.classList.remove("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const o=a.querySelector(".printer-check-badge");o&&o.classList.remove("hidden")}else{a.classList.remove("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),a.classList.add("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const o=a.querySelector(".printer-check-badge");o&&o.classList.add("hidden")}});const t=w("rawbt-quick-guide-box");t&&(e==="rawbt"?t.classList.remove("hidden"):t.classList.add("hidden"));const s=w("printer-network-box");s&&(e==="network"?s.classList.remove("hidden"):s.classList.add("hidden"))},Ms=()=>{const e=(o,r="")=>{const l=w(o);return l?l.value:r},t=(o,r=!1)=>{const l=w(o);return l?l.checked:r},s=window._selectedPrinterType||"rawbt",n={deviceType:s,deviceName:e("printer-device-name-display",s==="rawbt"?"Driver RawBT (Printer Thermal Android - Free)":s==="bluetooth"?"Bluetooth POS Printer":"Printer Thermal POS"),paperSize:e("printer-paper-size","58mm"),networkIp:e("printer-network-ip","192.168.1.200:9100"),headerText:e("printer-header-custom",""),storeAddress:e("printer-address-custom",""),storePhone:e("printer-phone-custom",""),footerText:e("printer-footer-custom","Terima kasih atas kunjungan Anda!"),footerPolicyNote:e("printer-policy-custom","Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa struk resmi."),showAddress:t("printer-opt-address",!0),showPhone:t("printer-opt-phone",!0),showNpwp:t("printer-opt-npwp",!0),showPoints:t("printer-opt-points",!0),showBarcode:t("printer-opt-barcode",!0),directPrint:t("printer-opt-direct",!1),autoCut:t("printer-opt-autocut",!0),openCashDrawer:t("printer-opt-drawer",!1),autoPrintOrder:t("printer-opt-autoprint",!1)};je(n),oe("Pengaturan printer berhasil disimpan! ✅"),ra()},Cs=async()=>{if(!navigator.bluetooth){oe("Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.");return}try{oe("Mencari printer bluetooth di sekitar...");const e=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["000018f0-0000-1000-8000-00805f9b34fb","e7810a71-73ae-499d-8c15-faa9aef0c3f2","00001101-0000-1000-8000-00805f9b34fb"]});if(e){je({deviceType:"bluetooth",deviceName:e.name||"Bluetooth POS Printer",deviceId:e.id});const t=w("printer-device-name-display");t&&(t.value=e.name||"Bluetooth POS Printer"),oe(`Printer "${e.name||"Bluetooth POS"}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&oe("Koneksi bluetooth dibatalkan atau tidak tersedia.")}},Ls=async()=>{if(!navigator.usb){oe("Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.");return}try{oe("Mencari printer USB...");const e=await navigator.usb.requestDevice({filters:[]});if(e){const t=(e.productName||"USB Thermal Printer")+" (USB)";je({deviceType:"usb",deviceName:t,deviceId:String(e.vendorId)+":"+String(e.productId)});const s=w("printer-device-name-display");s&&(s.value=t),oe(`Printer USB "${t}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&oe("Koneksi USB dibatalkan atau tidak ditemukan.")}},Ds=()=>{const e=_();if((e.deviceType==="rawbt"||!e.deviceType)&&typeof window.executeRawBTTestPrint=="function"){window.executeRawBTTestPrint();return}const t=e.paperSize==="80mm",s=t?48:32,a=e.headerText||p.store?.name||"TOKO PUTRI",n=e.showAddress!==!1&&(e.storeAddress||p.store?.address)||"",o=e.showPhone!==!1&&(e.storePhone||p.store?.wa)||"",r=e.footerPolicyNote||"",l=(f,b,u=s)=>{const g=u-f.length-b.length;return f+(g>0?" ".repeat(g):" ")+b},c=new Date().toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let d=`
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${i(a)}</div>
    ${n?`<div style="text-align:center;font-size:10px;color:#475569;margin-bottom:2px;">${i(n)}</div>`:""}
    ${o?`<div style="text-align:center;font-size:11px;margin-bottom:4px;">Telp/WA: ${i(o)}</div>`:""}
    <div style="text-align:center;font-weight:bold;font-size:12px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:3px 0;margin:6px 0;">
        *** UJI COBA CETAK STRUK ***
    </div>
    <div style="white-space:pre;font-size:11px;">Tgl   : ${c}</div>
    <div style="white-space:pre;font-size:11px;">Format: Thermal ${t?"80mm (48 Kolom)":"58mm (32 Kolom)"}</div>
    <div style="white-space:pre;font-size:11px;">Koneksi: ${e.deviceType.toUpperCase()}</div>
    <div style="white-space:pre;font-size:11px;">Status : KONEKSI BERHASIL</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:11px;font-weight:bold;">${l("TES ITEM UJI COBA","HARGA",s)}</div>
    <div style="white-space:pre;font-size:10px;">${l("1x Produk Percobaan","Rp 25.000",s)}</div>
    <div style="white-space:pre;font-size:10px;">${l("2x Kertas Thermal Kasir","Rp 15.000",s)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:12px;font-weight:bold;">${l("TOTAL UJI","Rp 40.000",s)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    `;e.showPoints&&(d+=`<div style="white-space:pre;font-size:11px;">${l("Simulasi Poin Member","+10 Poin",s)}</div>`,d+='<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>'),e.showBarcode&&(d+=`<div style="text-align:center;margin:6px 0;">
            <div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*TEST-POS-${Date.now().toString().slice(-6)}*</div>
            <div style="font-size:9px;color:#333;">(BARCODE TEST OK)</div>
        </div><div style="border-bottom:1px dashed #000;margin:6px 0;"></div>`),d+=`
    <div style="text-align:center;font-size:10px;margin-top:6px;line-height:1.3;">
        ${i(e.footerText||"Terima kasih atas kunjungan Anda!")}
    </div>
    ${r?`
    <div style="text-align:center;font-size:9px;color:#475569;margin-top:4px;border-top:1px dashed #ccc;padding-top:4px;">
        ${i(r)}
    </div>`:""}
    <div style="text-align:center;font-size:9px;font-style:italic;margin-top:4px;">
        Printer siap digunakan untuk operasional kasir Toko Putri.
    </div>
    <div style="height:25px;"></div>
    `;let y=w("thermal-print-section");if(y||(y=document.createElement("div"),y.id="thermal-print-section",document.body.appendChild(y)),y.innerHTML=`<div style="width:${t?"80mm":"58mm"};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${d}</div>`,typeof window.sendToRawBT=="function"){const f=y.innerText,b=btoa(unescape(encodeURIComponent(f)));window.sendToRawBT(b,f,d)}else window.print();oe("Perintah uji cetak berhasil dikirim! 🖨️")};window.getPrinterConfig=_;window.getPaperCols=de;window.savePrinterConfig=je;window.openPrinterSettingsModal=$s;window.closePrinterSettingsModal=ra;window.selectPrinterDeviceTypeUI=ia;window.savePrinterSettingsFromModal=Ms;window.scanBluetoothPrinter=Cs;window.scanUsbPrinter=Ls;window.executeTestPrint=Ds;let _t={},G="view-catalog",Me=!1,He=null,ut=["view-catalog"];const tt=e=>{history.pushState({modal:e},"",window.location.href),ge.push(e)},at=(e,t,s)=>{if(!t){const a=ge.lastIndexOf(e);a>-1&&ge.splice(a,1),Me=!0,He&&clearTimeout(He),He=setTimeout(()=>{Me=!1},300);try{history.back()}catch{Me=!1}}s()},Y=(e,t=!1)=>{if(!e||e===G)return;t||(history.pushState({view:e},"",window.location.href),e==="view-catalog"?ut=["view-catalog"]:ut.push(e));const s=w(G);if(s){const n=s.querySelector(".scroll-content");n&&(_t[G]=n.scrollTop)}if(G==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime(),G==="view-pos-cashier"&&e!=="view-pos-cashier"&&(typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()),G==="view-admin"&&e!=="view-admin"){const n=w("view-admin");n&&n.classList.remove("admin-pos-mode"),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()}const a=w(e);if(a&&(a.classList.remove("hidden"),a.classList.add("flex")),document.querySelectorAll(".view-section").forEach(n=>{n!==a&&(n.classList.add("hidden"),n.classList.remove("flex"))}),typeof window.hideFloatingScrollTop=="function")window.hideFloatingScrollTop();else{const n=document.getElementById("native-scroll-top-btn");n&&(n.classList.add("opacity-0","translate-y-3"),n.classList.add("hidden"))}if(a){e==="view-cart"&&typeof window.renderCart=="function"?window.renderCart():e==="view-checkout"&&typeof window.rChck=="function"?window.rChck():e==="view-payment"&&typeof window.rPay=="function"?window.rPay():e==="view-wishlist"&&typeof window.renderWish=="function"?window.renderWish():e==="view-orders"&&typeof window.renderMyOrders=="function"?window.renderMyOrders():e==="view-faq"&&typeof window.renderStorefrontFAQ=="function"?window.renderStorefrontFAQ():e==="view-pos-cashier"?Jt(()=>import("./module-pos-AmH44SCL.js").then(o=>o.h),__vite__mapDeps([2,1])).then(o=>{typeof o.renderPOSStorefront=="function"&&o.renderPOSStorefront()}).catch(o=>console.error("[POS] Gagal memuat storefront:",o)):e==="view-admin"&&typeof window.renderSubscriptionNoticeInCMS=="function"&&window.renderSubscriptionNoticeInCMS();const n=a.querySelector(".scroll-content");if(n)if(t){const o=_t[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{n.scrollTop=o}))}else n.scrollTo(0,0)}G=e,la(e)},la=(e=G)=>{const t=w("bottom-nav-bar");if(!t)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin","view-pos-cashier"].includes(e)){t.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.remove("translate-y-0","opacity-100");return}if(t.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(a=>a.classList.remove("active")),e==="view-catalog"){const a=w("bnav-home");a&&a.classList.add("active")}else if(e==="view-orders"){const a=w("bnav-orders");a&&a.classList.add("active")}else if(e==="view-wishlist"||e==="view-faq"){const a=w("bnav-menu");a&&a.classList.add("active")}},Ns=e=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(e==="home"?"medium":"light"),e==="home")if(G==="view-catalog"){const t=document.querySelector("#view-catalog .scroll-content");t?t.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else Y("view-catalog");else e==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():e==="cart"?Y("view-cart"):e==="orders"?Y("view-orders"):e==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},da=()=>{const e=document.querySelector("#view-catalog .scroll-content"),t=w("pull-to-refresh-indicator"),s=w("ptr-icon"),a=w("ptr-text");if(!e||!t)return;let n=0,o=0,r=!1,l=!1;const c=65;e.addEventListener("touchstart",d=>{e.scrollTop<=5&&!l&&(n=d.touches[0].pageY,r=!0)},{passive:!0}),e.addEventListener("touchmove",d=>{if(!r||l)return;o=d.touches[0].pageY;const y=o-n;if(y>15&&e.scrollTop<=5){t.classList.add("visible");const f=Math.min(y/c,1.5);s&&(s.style.transform=`rotate(${f*240}deg)`),a&&(a.innerText=y>=c?"Lepaskan untuk segarkan":"Tarik ke bawah untuk refresh")}else t.classList.remove("visible")},{passive:!0}),e.addEventListener("touchend",async()=>{if(!r||l)return;if(r=!1,o-n>=c&&e.scrollTop<=5){l=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),s&&(s.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",s.style.transform=""),a&&(a.innerText="Menyinkronkan katalog...");try{typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),a&&(a.innerText="Katalog Terkini Disinkron!"),s&&(s.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch{a&&(a.innerText="Gagal sinkron data")}setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>{l=!1,s&&(s.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",s.style.transform=""),a&&(a.innerText="Tarik ke bawah untuk refresh")},300)},600)}else t.classList.remove("visible"),s&&(s.style.transform="")})},ca=e=>{e==="product"&&typeof window.closeProductModal=="function"?window.closeProductModal(!0):e==="category"&&typeof window.closeCategoryModal=="function"?window.closeCategoryModal(!0):e==="brand"&&typeof window.closeBrandModal=="function"?window.closeBrandModal(!0):e==="admin"&&typeof window.closeAdminModal=="function"?window.closeAdminModal(!0):e==="adminOrder"&&typeof window.closeOrderDetailModal=="function"?window.closeOrderDetailModal(!0):e==="receipt"&&typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):e==="docPreview"&&typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):e==="scanner"&&typeof window.closeCameraScanner=="function"?window.closeCameraScanner(!0):e==="confirm"&&typeof window.closeConfirm=="function"?window.closeConfirm(!0):e==="customerOrder"&&typeof window.closeCustomerOrderDetailModal=="function"?window.closeCustomerOrderDetailModal(!0):e==="restock"&&typeof window.closeRestockModal=="function"?window.closeRestockModal(!0):e==="quickprice"&&typeof window.closeQuickPriceModal=="function"?window.closeQuickPriceModal(!0):e==="member"&&typeof window.closeMemberModal=="function"?window.closeMemberModal(!0):e==="prompt"&&typeof window.closePrompt=="function"?window.closePrompt(!0):e==="review"&&typeof window.closeReviewModal=="function"?window.closeReviewModal(!0):e==="quickmenu"&&typeof window.closeQuickMenuModal=="function"?window.closeQuickMenuModal(!0):e==="variantPreview"&&typeof window.closeVariantPreviewModal=="function"?window.closeVariantPreviewModal(!0):e==="terms"&&typeof window.closeTermsModal=="function"?window.closeTermsModal(!0):e==="privacy"&&typeof window.closePrivacyModal=="function"?window.closePrivacyModal(!0):e==="askQuestion"&&typeof window.closeAskQuestionModal=="function"?window.closeAskQuestionModal(!0):e==="quickVariant"&&typeof window.closeQuickVariantSheet=="function"?window.closeQuickVariantSheet(!0):e==="adminFAQ"&&typeof window.closeAdminFAQModal=="function"?window.closeAdminFAQModal(!0):e==="printerSettings"&&typeof window.closePrinterSettingsModal=="function"?window.closePrinterSettingsModal(!0):e==="exitConfirm"&&typeof window.closeExitConfirmModal=="function"?window.closeExitConfirmModal(!0):e==="appDownload"&&typeof window.closeAppDownloadModal=="function"?window.closeAppDownloadModal(!0):e==="voucher"&&typeof window.closeVoucherModal=="function"?window.closeVoucherModal(!0):e==="guide"&&typeof window.closeShoppingGuideModal=="function"?window.closeShoppingGuideModal(!0):e==="changelog"&&typeof window.closeChangelogModal=="function"?window.closeChangelogModal(!0):e==="guarantee"&&typeof window.closeQualityGuaranteeModal=="function"?window.closeQualityGuaranteeModal(!0):e==="security"&&typeof window.closeSecurityModal=="function"?window.closeSecurityModal(!0):e==="posVariantSheet"&&typeof window.closePOSVariantSheet=="function"?window.closePOSVariantSheet(!0):e==="posLogin"&&typeof window.closePOSLoginModal=="function"?window.closePOSLoginModal(!0):e==="posCartDrawer"&&typeof window.closePOSCartDrawer=="function"?window.closePOSCartDrawer(!0):e==="posPayment"&&typeof window.closePayModal=="function"?window.closePayModal(!0):e==="purchaseForm"&&typeof window.closeCreatePOModal=="function"?window.closeCreatePOModal(!0):e==="purchasePicker"&&typeof window.closePOProductPicker=="function"?window.closePOProductPicker(!0):e==="purchaseDetail"&&typeof window.closePurchaseDetailModal=="function"?window.closePurchaseDetailModal(!0):e==="purchasePayment"&&typeof window.closePurchasePaymentModal=="function"?window.closePurchasePaymentModal(!0):e==="supplierForm"&&typeof window.closeSupplierFormModal=="function"?window.closeSupplierFormModal(!0):e==="supplierDetail"&&typeof window.closeSupplierDetailModal=="function"?window.closeSupplierDetailModal(!0):e==="posHoldPrompt"&&typeof window.closePOSHoldPrompt=="function"?window.closePOSHoldPrompt(!0):e==="posHeldModal"&&typeof window.closePOSHeldModal=="function"?window.closePOSHeldModal(!0):e==="posCameraScanner"&&typeof window.closePOSCameraScanner=="function"?window.closePOSCameraScanner(!0):e==="tempoDetail"&&typeof window.closeTempoDetailModal=="function"?window.closeTempoDetailModal(!0):e==="tempoPayment"&&typeof window.closeTempoPaymentModal=="function"?window.closeTempoPaymentModal(!0):e==="tempoPenalty"&&typeof window.closeTempoPenaltyModal=="function"?window.closeTempoPenaltyModal(!0):e==="expenseForm"&&typeof window.closeExpenseModal=="function"?window.closeExpenseModal(!0):e==="expenseReceipt"&&typeof window.closeExpenseReceiptPreview=="function"&&window.closeExpenseReceiptPreview(!0)},pa=()=>{const e=w("exit-confirm-modal");e&&(e.classList.contains("hidden")&&tt("exitConfirm"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=w("exit-confirm-modal-box");t&&t.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Tt=(e=!1)=>{at("exitConfirm",e,()=>{const t=w("exit-confirm-modal"),s=w("exit-confirm-modal-box");t&&t.classList.add("opacity-0"),s&&s.classList.add("scale-95"),setTimeout(()=>{t&&t.classList.add("hidden")},250)})},Is=()=>{Tt(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri! 🙏"),setTimeout(()=>{try{window.close()}catch{}},400))},Rs=()=>{const e=document.getElementById("pos-receipt-fallback-modal")||document.getElementById("pos-shift-receipt-modal")||document.getElementById("pos-success-modal")||document.getElementById("pos-recall-confirm-modal")||document.getElementById("pos-closed-success-modal");if(e){e.remove();return}if(ge.length>0){try{window.history.back()}catch{const a=ge.pop();ca(a)}return}if(G==="view-admin"){const s=w("admin-content-view"),a=w("admin-dashboard-view");if(!!(s&&!s.classList.contains("hidden")||a&&a.classList.contains("hidden")||window.history.state&&window.history.state.tab||typeof window.cTab<"u"&&window.cTab)){if(window.history.state&&window.history.state.tab&&window.history.length>1)try{window.history.back();return}catch{}typeof window.openAdminMenu=="function"&&window.openAdminMenu();try{window.history.replaceState({view:"view-admin"},"",window.location.href)}catch{}return}if(typeof window.showConfirm=="function"){const o=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=o?"Keluar Panel Owner":"Keluar CMS Toko",l=o?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,l,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}return}if(G==="view-pos-cashier"){typeof window.showConfirm=="function"?window.showConfirm("Keluar Mode Kasir","Yakin keluar dari mode POS kasir?",()=>{typeof window.exitPOSMode=="function"?window.exitPOSMode():Y("view-catalog")},"Ya, Keluar",!0):Y("view-catalog");return}if(G!=="view-catalog"){if(G==="view-payment"){Y("view-checkout");return}if(G==="view-checkout"){Y("view-cart");return}if(G==="view-cart"){Y("view-catalog");return}window.history.length>1?window.history.back():Y("view-catalog");return}const t=w("exit-confirm-modal");t&&!t.classList.contains("hidden")?Tt():pa()},Os=()=>{da();try{(!history.state||!history.state.view)&&history.replaceState({view:"view-catalog"},"",window.location.href)}catch{}window.addEventListener("popstate",e=>{if(Me){Me=!1,He&&clearTimeout(He);return}if(ge.length>0){const n=ge.pop();ca(n);return}const t=e.state||{},s=t.view||null;if(window.isAdm||window.__localIsAdm)if(s==="view-admin")Y("view-admin",!0),t.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(t.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu();else{const n=w("admin-content-view");if(n&&!n.classList.contains("hidden")){history.pushState({view:"view-admin"},"",window.location.href),Y("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}if(history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"){const o=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=o?"Keluar Panel Owner":"Keluar CMS Toko",l=o?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,l,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}}else if(s){let n=s;s==="view-admin"&&(n="view-admin-login"),Y(n,!0)}else Y("view-catalog",!0)})};window.pushModalHistory=tt;window.requestCloseModal=at;window.changeView=Y;window.setupHistoryRouter=Os;window.onBottomNavClick=Ns;window.updateBottomNav=la;window.initPullToRefresh=da;window.handleAppBackButton=Rs;window.openExitConfirmModal=pa;window.closeExitConfirmModal=Tt;window.confirmExitApp=Is;window.isProgrammaticModalClose=Me;window.viewHistoryStack=ut;try{Object.defineProperty(window,"curViewName",{get:()=>G,set:e=>{G=e},configurable:!0})}catch{}let ft=null,Ae=null;const Es=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}Q("Kode "+e+" berhasil disalin!")}catch{Q("Gagal menyalin. Kode: "+e)}},Q=(e,t,s,a)=>{const n=w("toast");if(!n)return;if(!t){const m=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(m)?t="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(m)?t="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(m)?t="warning":/upload|proses|memuat|loading|sedang/.test(m)?t="loading":t="info"}typeof window.triggerHaptic=="function"&&window.triggerHaptic(t==="error"?"error":t==="warning"?"warning":t==="success"?"success":"light");const o=getComputedStyle(document.documentElement),r=o.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",l=o.getPropertyValue("--color-primary").trim()||"#10b981";o.getPropertyValue("--color-primary-dark").trim();const c={success:{icon:"fa-circle-check",label:"Berhasil",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`}},d=c[t]||c.info,y=w("toast-icon");y&&(y.className="fa-solid "+d.icon);const f=w("toast-title");f&&(f.textContent=s||d.label,f.style.display="block",f.style.color=d.accent);const b=w("toast-icon-wrap");b&&(b.style.background=d.iconBg,b.style.color=d.accent),se("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let u=w("toast-progress");u||(u=document.createElement("div"),u.id="toast-progress",n.appendChild(u)),u.style.background=d.accent,u.style.transition="none",u.style.width="100%",u.style.opacity="0.85",clearTimeout(ft),n.classList.add("toast-show");const g=a||(t==="loading"?8e3:t==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{u.style.transition=`width ${g}ms linear`,u.style.width="0%"})),ft=setTimeout(()=>{n.classList.remove("toast-show")},g)},Bs=e=>Q(e,"loading","Memproses...",8e3),Hs=()=>{clearTimeout(ft);const e=w("toast");e&&e.classList.remove("toast-show")},Fs=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")};let we=null;const Us=(e,t,s,a="Ya, Hapus",n=!0)=>{let o=e,r=t,l=s,c=a,d=n;typeof t=="function"&&(l=t,r=e,o=typeof a=="string"&&a!=="Ya, Hapus"?a:"Konfirmasi Tindakan",c=typeof s=="string"?s:"Ya, Lanjutkan",d=!0);let y=null;typeof l!="function"?(y=new Promise(g=>{we=g}),Ae=null):(Ae=l,we=null),se("confirm-title",o);const f=w("confirm-msg");if(f)if(typeof r=="string"){const g=typeof window.DOMPurify<"u"?window.DOMPurify.sanitize(r,{ADD_ATTR:["class","style"]}):r;f.innerHTML=g}else f.textContent=r||"";const b=w("confirm-yes-btn");b&&(b.innerText=c,d?(b.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 active:scale-95 transition-all text-xs sm:text-sm shadow-md shadow-rose-500/30 cursor-pointer",w("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",w("confirm-icon").className="fa-solid fa-triangle-exclamation"):(b.className="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-2xl hover:opacity-90 active:scale-95 transition-all text-xs sm:text-sm shadow-sm cursor-pointer",w("confirm-icon-box").className="w-16 h-16 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-[var(--color-primary)]/20",w("confirm-icon").className="fa-solid fa-copy"));const u=w("custom-confirm-modal");return u&&u.classList.contains("hidden")&&tt("confirm"),ta("custom-confirm-modal"),setTimeout(()=>{w("custom-confirm-modal").classList.remove("opacity-0"),w("custom-confirm-box").classList.remove("scale-95")},10),y},bt=(e=!1)=>{if(we){const t=we;we=null,t(!1)}at("confirm",e,()=>{w("custom-confirm-modal").classList.add("opacity-0"),w("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>aa("custom-confirm-modal"),300)})},Ks=()=>{if(we){const e=we;we=null,Ae=null,bt(),setTimeout(()=>{e(!0)},150);return}if(Ae){const e=Ae;Ae=null,bt(),setTimeout(()=>{e()},150)}},js=(e,t="",s=null)=>{let a=null,n=null;typeof s!="function"&&(n=new Promise(b=>{a=b}));const o=t!=null?String(t):"",r=o.length>50||o.includes(`
`)||/balasan|catatan|alasan|deskripsi|pesan|keterangan/i.test(e),l=o.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=r?`<textarea id="prompt-input" rows="3" class="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 custom-scrollbar resize-none leading-relaxed" placeholder="Tuliskan di sini...">${l}</textarea>`:`<input type="text" id="prompt-input" value="${l}" class="w-full px-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-bold focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 text-center" autocomplete="off" />`;let d=document.createElement("div");d.id="custom-prompt-container",d.className="fixed inset-0 z-[10005] bg-slate-900/85 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300",d.onclick=b=>{b.target===d&&window.closePrompt()},d.innerHTML=`
        <div class="bg-white dark:bg-slate-800 rounded-[2rem] w-full max-w-[380px] sm:max-w-[420px] p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-700 relative transform scale-95 transition-all duration-300 flex flex-col text-center" onclick="event.stopPropagation()">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 border shadow-sm" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb),0.2)">
                <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <h3 class="font-black text-slate-900 dark:text-white text-base sm:text-lg mb-3 tracking-tight leading-snug">${e}</h3>
            ${c}
            <div class="flex gap-3">
                <button id="prompt-cancel" type="button" class="flex-1 py-3.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-600 active:scale-95 transition-all text-xs sm:text-sm cursor-pointer">Batal</button>
                <button id="prompt-ok" type="button" class="flex-1 py-3.5 text-white font-bold rounded-2xl hover:opacity-95 active:scale-95 transition-all text-xs sm:text-sm shadow-md cursor-pointer" style="background: var(--color-primary)">Simpan</button>
            </div>
        </div>
    `,document.body.appendChild(d);const y=d.querySelector("div");tt("prompt"),setTimeout(()=>{d.classList.remove("opacity-0"),y.classList.remove("scale-95")},10);const f=d.querySelector("#prompt-input");return f&&(f.focus(),f.select(),f.onkeydown=b=>{b.key==="Enter"&&(!r||b.ctrlKey)?(b.preventDefault(),d.querySelector("#prompt-ok")?.click()):b.key==="Escape"&&(b.preventDefault(),window.closePrompt())}),window.closePrompt=(b=!1)=>{if(!(!d||!d.parentNode)){if(a){const u=a;a=null,u(null)}at("prompt",b,()=>{d.classList.add("opacity-0"),y.classList.add("scale-95"),setTimeout(()=>d.remove(),300),window.closePrompt=null})}},d.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),d.querySelector("#prompt-ok").onclick=()=>{let b=f.value;if(a){const u=a;a=null,window.closePrompt(),u(b)}else window.closePrompt(),typeof s=="function"&&s(b)},n},_s=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=Es;window.showToast=Q;window.showToastLoading=Bs;window.hideToast=Hs;window.toggleTheme=Fs;window.showConfirm=Us;window.closeConfirm=bt;window.executeConfirm=Ks;window.customPrompt=js;window.checkProPrint=_s;const Ke="utp-thermal-modal",Qe="utp-html-modal";let X=null,St=null,Fe=null,Ue=null;const Ze=()=>{if(document.getElementById("utp-style"))return;const e=document.createElement("style");e.id="utp-style",e.textContent=`
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
        .utp-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            width: 100%;
            line-height: 1.32;
        }
        .utp-col-left {
            text-align: left;
            word-break: break-word;
            flex: 1 1 auto;
        }
        .utp-col-right {
            text-align: right;
            white-space: nowrap;
            flex-shrink: 0;
            margin-left: 6px;
            font-variant-numeric: tabular-nums;
        }
        .utp-separator {
            border-bottom: 1px dashed #000;
            margin: 4px 0;
            width: 100%;
            height: 0;
        }
        .utp-double-separator {
            border-bottom: 3px double #000;
            margin: 4px 0;
            width: 100%;
            height: 0;
        }
        .utp-align-center { text-align: center; }
        .utp-align-right { text-align: right; }
        .utp-align-left { text-align: left; }
        .utp-empty-line { height: 0.65em; }
        .utp-barcode-wrap { display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 4px 0 2px; }
        .utp-barcode-bars {
            width: 80%; max-width: 240px; height: 38px;
            background: repeating-linear-gradient(
                90deg,
                #000 0px, #000 2px,
                transparent 2px, transparent 4px,
                #000 4px, #000 7px,
                transparent 7px, transparent 9px,
                #000 9px, #000 11px,
                transparent 11px, transparent 13px,
                #000 13px, #000 16px,
                transparent 16px, transparent 18px,
                #000 18px, #000 19px,
                transparent 19px, transparent 22px
            );
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
        }
        .utp-barcode-code {
            font-family: 'Courier New', Courier, ui-monospace, monospace;
            font-size: 11px; font-weight: 700; letter-spacing: 2px; margin-top: 3px;
        }
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
    `,document.head.appendChild(e)},ma=()=>{Ue===null&&(Ue=document.body.style.overflow||"",document.body.style.overflow="hidden")},At=()=>{Ue!==null&&!document.getElementById(Ke)&&!document.getElementById(Qe)&&(document.body.style.overflow=Ue,Ue=null)},ua=(e,t)=>{st(),Fe=s=>{const a=s.target&&s.target.tagName||"";s.key==="Escape"?(s.preventDefault(),t()):s.key==="Enter"&&!/INPUT|TEXTAREA|SELECT/.test(a)&&(s.preventDefault(),e())},document.addEventListener("keydown",Fe,!0)},st=()=>{Fe&&document.removeEventListener("keydown",Fe,!0),Fe=null},zs=e=>{const t=e.deviceType||"rawbt",s=/android/i.test(navigator.userAgent||"");return t==="rawbt"?s||window.AndroidNativeApp?"RawBT Android":"Printer Browser":t==="bluetooth"?"Bluetooth":t==="usb"?"USB OTG":t==="network"?"WiFi / LAN":"Printer Sistem"},qs=e=>{if(e.html&&/<[a-z][\s\S]*>/i.test(e.html))return`<div class="utp-html-rendered" style="white-space:normal;width:100%;">${e.html}</div>`;let t=Array.isArray(e.previewLines)&&e.previewLines.length?e.previewLines:null;t||(t=String(e.plainText||"").split(`
`).map(a=>({t:a,a:"left",b:!1,s:"normal"})));const s=[...t];for(;s.length>1&&!String(s[s.length-1].t||"").trim();)s.pop();return s.map(a=>{if(a.type==="two-column")return`<div class="utp-row ${a.b?"font-bold":""}"><div class="utp-col-left">${i(a.left)}</div><div class="utp-col-right">${i(a.right)}</div></div>`;if(a.type==="separator")return'<div class="utp-separator"></div>';if(a.type==="double-separator")return'<div class="utp-double-separator"></div>';if(a.isBarcode||a.s==="barcode"||a.type==="barcode")return`
            <div class="utp-barcode-wrap" style="text-align:center;">
                <div class="utp-barcode-bars mx-auto" aria-hidden="true"></div>
                <div class="utp-barcode-code">*${i(a.code||a.t||"")}*</div>
            </div>`;const n=i(String(a.t??""))||"&nbsp;",o=a.a==="center"?"center":a.a==="right"?"right":"left",r=a.b?800:400;return a.s==="title"||a.s==="wide"?`<div class="utp-line utp-title" style="text-align:${o};font-weight:${r}">${n}</div>`:a.s==="tall"||a.s==="total"?`<div class="utp-line utp-tall" style="text-align:${o};font-weight:${r}"><span>${n}</span></div>`:`<div class="utp-line" style="text-align:${o};font-weight:${r}">${n}</div>`}).join("")},fa=()=>{const e=X;if(!e)return;const t=_(),s=de(t.paperSize),a=s>=40,n=Array.isArray(e.previewLines)?e.previewLines.length:String(e.plainText||"").split(`
`).length,o=typeof e.rebuild=="function"?`
        <div class="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70" role="group" aria-label="Ukuran kertas">
            <button type="button" id="utp-paper-58" onclick="window.setThermalPreviewPaper('58mm')" class="utp-seg-btn ${a?"text-slate-600 dark:text-slate-300":"is-active"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">58mm</button>
            <button type="button" id="utp-paper-80" onclick="window.setThermalPreviewPaper('80mm')" class="utp-seg-btn ${a?"is-active":"text-slate-600 dark:text-slate-300"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">80mm</button>
        </div>`:"",r=`
    <div id="${Ke}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-thermal-title" onclick="if(event.target===this) window.closeThermalPrintPreview()">
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
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-print text-slate-400"></i>${i(zs(t))}</span>
                    <span class="utp-chip bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-check"></i>${n} baris</span>
                </div>
                ${o}
            </div>

            <div class="utp-canvas flex-1 overflow-auto px-3 py-5 sm:px-5 custom-scrollbar">
                <div class="utp-paper mx-auto" style="width:${s}ch;">
                    ${qs(e)}
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
    </div>`;document.getElementById(Ke)?.remove(),document.body.insertAdjacentHTML("beforeend",r),setTimeout(()=>document.getElementById("utp-thermal-confirm")?.focus({preventScroll:!0}),60)},ba=e=>!e||typeof e.dispatch!="function"?!1:(Ze(),X={...e},fa(),ma(),ua(()=>wa(),()=>$t()),!0),$t=()=>{const e=X;if(document.getElementById(Ke)?.remove(),X=null,st(),At(),e&&typeof e.onCancel=="function")try{e.onCancel()}catch{}},wa=()=>{const e=X;if(e){if(X=null,document.getElementById(Ke)?.remove(),st(),At(),typeof e.onConfirm=="function")try{e.onConfirm()}catch(t){console.warn("[PrintPreview] onConfirm error:",t)}e.dispatch(e.base64,e.plainText,e.html||"")}},Gs=e=>{if(!(!X||typeof X.rebuild!="function")){je({paperSize:e});try{const t=X.rebuild();t&&(X.base64=t.base64,X.plainText=t.plainText,X.previewLines=t.previewLines,X.html=t.html||"")}catch(t){console.warn("[PrintPreview] Gagal rebuild payload:",t)}fa(),Q(`Ukuran kertas diubah ke ${e} ✅`)}},Ws=()=>{$t(),typeof window.openPrinterSettingsModal=="function"&&(window.openPrinterSettingsModal(),Q("Atur printer, lalu tekan Cetak lagi untuk melihat preview terbaru."))},Vs=(e={})=>{if(!e.html)return!1;Ze(),St={...e};const t=(e.paper||"a4")==="a4";document.getElementById(Qe)?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="${Qe}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-html-title" onclick="if(event.target===this) window.closeHtmlPrintPreview()">
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
    </div>`);const s=document.getElementById("utp-html-frame");if(s){const a=s.contentWindow.document;a.open(),a.write(e.html),a.close()}return ma(),ua(()=>ga(),()=>Mt()),!0},Mt=()=>{document.getElementById(Qe)?.remove(),St=null,st(),At()},ga=()=>{const e=document.getElementById("utp-html-frame");if(!(!e||!St)){if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){try{const t=e.contentWindow.document,s=Array.from(t.querySelectorAll("style")).map(n=>n.outerHTML).join("");let a=document.getElementById("a4-print-section");a||(a=document.createElement("div"),a.id="a4-print-section",document.body.appendChild(a)),a.innerHTML=s+t.body.innerHTML,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500)}catch(t){console.warn("[PrintPreview] Native print error:",t)}Mt();return}try{e.contentWindow.focus(),e.contentWindow.print()}catch(t){console.warn("[PrintPreview] iframe print error:",t),Q("Gagal membuka dialog cetak. Coba lagi.","error")}}};typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ze,{once:!0}):Ze());window.openThermalPrintPreview=ba;window.closeThermalPrintPreview=$t;window.confirmThermalPrint=wa;window.setThermalPreviewPaper=Gs;window.openPrinterSettingsFromPreview=Ws;window.openHtmlPrintPreview=Vs;window.closeHtmlPrintPreview=Mt;window.confirmHtmlPrint=ga;const $=e=>"Rp "+Math.round(Number(e||0)).toLocaleString("id-ID"),dt=e=>Math.round(Number(e||0)).toLocaleString("id-ID"),Js=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(2).replace(/\.?0+$/,"")},O=e=>e?String(e).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"").replace(/[\r\t]/g," ").replace(/[^\x20-\x7E\n]/g," "):"",U=(e,t)=>{if(!e)return[];const s=O(e).replace(/ +/g," ").trim();if(!s)return[];if(s.length<=t)return[s];const a=s.split(" "),n=[];let o="";for(const r of a)if(r)if(r.length>t){o&&(n.push(o),o="");for(let l=0;l<r.length;l+=t){const c=r.substring(l,l+t);c.length===t?n.push(c):o=c}}else(o?o.length+1+r.length:r.length)<=t?o=o?o+" "+r:r:(n.push(o),o=r);return o&&n.push(o),n},le=(e,t=!1)=>{const s=e?new Date(e):new Date,a=String(s.getDate()).padStart(2,"0"),n=String(s.getMonth()+1).padStart(2,"0"),o=t?s.getFullYear():String(s.getFullYear()).slice(-2),r=String(s.getHours()).padStart(2,"0"),l=String(s.getMinutes()).padStart(2,"0");return`${a}/${n}/${o} ${r}:${l}`},xa=(e,t,s,a=!1)=>{const n=O(String(e||"")).trimEnd(),o=O(String(t||"")).trim(),r=s-n.length-o.length;if(r>=0)return[n+" ".repeat(r)+o];if(a){const d=Math.max(0,s-o.length-1),y=n.substring(0,d).trimEnd(),f=Math.max(1,s-y.length-o.length);return[y+" ".repeat(f)+o]}const l=U(n,s),c=l[l.length-1]||"";if(c.length+1+o.length<=s){const d=s-c.length-o.length;return l[l.length-1]=c+" ".repeat(d)+o,l}else{const d=Math.max(0,s-o.length);return[...l," ".repeat(d)+o]}},Ce=e=>e?i(String(e)).replace(/^ +/gm,t=>"&nbsp;".repeat(t.length)):"";class De{constructor(t=32){this.cols=Number(t)||32,this.bytes=[],this.plainLines=[],this.previewLines=[],this.items=[],this._bold=!1,this._size="normal"}init(){return this.bytes.push(27,64),this}align(t="left"){const s=t==="center"?1:t==="right"?2:0;return this.bytes.push(27,97,s),this}bold(t=!0){return this.bytes.push(27,69,t?1:0),this._bold=!!t,this}size(t="normal"){return this._size=t||"normal",t==="title"?this.bytes.push(29,33,17):t==="tall"||t==="total"?this.bytes.push(29,33,1):t==="wide"?this.bytes.push(29,33,16):this.bytes.push(29,33,0),this}text(t){if(!t)return this;const s=O(t);for(let a=0;a<s.length;a++)this.bytes.push(s.charCodeAt(a));return this}line(t="",s="left"){this.align(s),this.text(t),this.bytes.push(10),this.plainLines.push(t);const a=O(t);return this.previewLines.push({t:a,a:s,b:this._bold,s:this._size}),this.items.push({type:"line",text:a,align:s,bold:this._bold,size:this._size}),this}centered(t=""){return U(t,this.cols).forEach(a=>this.line(a,"center")),this}twoColumn(t="",s="",a=!1,n=!1){a&&this.bold(!0);const o=xa(t,s,this.cols,n);o.forEach(c=>{this.align("left"),this.text(c),this.bytes.push(10),this.plainLines.push(c)});const r=O(String(t||"")),l=O(String(s||""));return this.previewLines.push({type:"two-column",left:r,right:l,t:o[0],a:"left",b:!!a,s:this._size}),this.items.push({type:"two-column",left:r,right:l,bold:!!a,size:this._size}),a&&this.bold(!1),this}itemRow(t){const s=t.variantName?` (${t.variantName}${t.colorCode?" "+t.colorCode:""})`:"",a=(t.name||"Barang")+s+(t.poTime?" [PO]":"");this.bold(!0),U(a,this.cols).forEach(d=>this.line(d,"left")),this.bold(!1);const o=t.effectivePrice||t.price||0,r=t.subtotal!==void 0?t.subtotal:parseFloat(t.qty||1)*o,l=`  ${Js(t.qty)} ${t.unit||"pcs"} x ${dt(o)}`,c=dt(r);return this.twoColumn(l,c,!1,!1),t.discount&&t.discount>0&&this.twoColumn("  (Pot. Diskon)",`-${dt(t.discount)}`,!1,!0),t.poTime&&this.line(`  * Estimasi PO: ${t.poTime}`,"left"),this}separator(t="-"){const s=t.repeat(this.cols);return this.align("left"),this.text(s),this.bytes.push(10),this.plainLines.push(s),this.previewLines.push({type:"separator",t:s,a:"left",b:!1,s:"normal"}),this.items.push({type:"separator",char:t}),this}doubleSeparator(){const t="=".repeat(this.cols);return this.align("left"),this.text(t),this.bytes.push(10),this.plainLines.push(t),this.previewLines.push({type:"double-separator",t,a:"left",b:!1,s:"normal"}),this.items.push({type:"double-separator"}),this}feed(t=3){this.bytes.push(27,100,Math.max(1,t));for(let s=0;s<t;s++)this.plainLines.push(""),this.previewLines.push({t:"",a:"left",b:!1,s:"normal"});return this.items.push({type:"feed",lines:t}),this}cut(){return this.bytes.push(29,86,65,3),this}openDrawer(){return this.bytes.push(27,112,0,25,250),this}barcode(t,s="CODE128",a=45){if(!t)return this;const n=O(String(t)).trim();if(!n)return this;if(this.align("center"),this.bytes.push(29,104,Math.max(30,Math.min(100,a))),this.bytes.push(29,119,2),this.bytes.push(29,72,0),s==="CODE39"){this.bytes.push(29,107,4);for(let o=0;o<n.length;o++)this.bytes.push(n.charCodeAt(o));this.bytes.push(0)}else{const o=[];for(let r=0;r<n.length;r++)o.push(n.charCodeAt(r));this.bytes.push(29,107,73,o.length+2,123,66,...o)}return this.plainLines.push(`[BARCODE: ${n}]`),this.previewLines.push({type:"barcode",code:n,t:n,a:"center",b:!1,s:"barcode",isBarcode:!0}),this.items.push({type:"barcode",code:n}),this}toBase64(){const t=new Uint8Array(this.bytes);let s="";const a=t.length,n=8192;for(let o=0;o<a;o+=n){const r=t.subarray(o,o+n);s+=String.fromCharCode.apply(null,r)}return btoa(s)}toPlainText(){return this.plainLines.join(`
`)}toHtml(){let t="";for(const s of this.items)if(s.type==="line"){const a=s.align==="center"?"utp-align-center":s.align==="right"?"utp-align-right":"utp-align-left",n=s.bold?"font-bold":"";let o="";s.size==="title"||s.size==="wide"?o="utp-title":(s.size==="tall"||s.size==="total")&&(o="utp-tall"),!s.text||!s.text.trim()?t+='<div class="utp-empty-line">&nbsp;</div>':t+=`<div class="utp-line ${a} ${n} ${o}">${Ce(s.text)}</div>`}else if(s.type==="two-column"){const a=s.bold?"font-bold":"";let n="";s.size==="title"||s.size==="wide"?n="utp-title":(s.size==="tall"||s.size==="total")&&(n="utp-tall"),t+=`<div class="utp-row ${a} ${n}"><div class="utp-col-left">${Ce(s.left)}</div><div class="utp-col-right">${Ce(s.right)}</div></div>`}else if(s.type==="separator")t+='<div class="utp-separator"></div>';else if(s.type==="double-separator")t+='<div class="utp-double-separator"></div>';else if(s.type==="barcode")t+=`
                <div class="utp-barcode-wrap">
                    <div class="utp-barcode-bars" aria-hidden="true"></div>
                    <div class="utp-barcode-code">*${i(s.code)}*</div>
                </div>`;else if(s.type==="feed"){const a=Math.max(1,s.lines||1)*6;t+=`<div style="height:${a}px;"></div>`}return t}}const Ne=(e,t="",s="",a={})=>{if(!a.skipPreview)return ba({base64:e,plainText:t,html:s,previewLines:a.previewLines,title:a.title,rebuild:a.rebuild,onConfirm:a.onConfirm,onCancel:a.onCancel,dispatch:(n,o,r)=>zt(n,o,r)});if(typeof a.onConfirm=="function")try{a.onConfirm()}catch{}return zt(e,t,s)},zt=(e,t="",s="")=>{const a=/android/i.test(navigator.userAgent||"");if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function")try{return window.AndroidNativeApp.printRawBT(e),Q("Mencetak struk via RawBT... 🖨️"),!0}catch(n){console.warn("[RawBT] AndroidNativeApp error, mencoba intent...",n)}if(a)try{Q("Membuka Printer RawBT... 🖨️");const n=`intent:base64,${e}#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;end;`;return window.location.href=n,setTimeout(()=>{if(!document.hidden)try{window.location.href=`rawbt:base64,${e}`}catch{}},800),!0}catch(n){console.warn("[RawBT] Intent trigger failed:",n)}return Q("Mencetak struk kasir... 🖨️"),Ct(s||t),!0},Ct=e=>{const t=_(),a=de(t.paperSize)>=40,n=a?"80mm":"58mm",o=a?"72mm":"48mm",r=a?"11px":"9.5px",l=typeof e=="string"&&e.includes("<")&&e.includes(">");let c=e;l||(c=String(e||"").split(`
`).map(y=>{const f=y.trim();if(!f)return'<div class="utp-empty-line">&nbsp;</div>';if(/^[-]{8,}$/.test(f))return'<div class="utp-separator"></div>';if(/^[=]{8,}$/.test(f))return'<div class="utp-double-separator"></div>';if(/^\[BARCODE:\s*(.+)\]$/i.test(f)){const u=f.replace(/^\[BARCODE:\s*/i,"").replace(/\]$/,"").trim();return`
                <div class="utp-barcode-wrap">
                    <div class="utp-barcode-bars" aria-hidden="true"></div>
                    <div class="utp-barcode-code">*${i(u)}*</div>
                </div>`}const b=y.match(/^(\s{0,4}.+?)\s{3,}(.+)$/);return b&&b[1]&&b[2]?`<div class="utp-row"><div class="utp-col-left">${Ce(b[1])}</div><div class="utp-col-right">${Ce(b[2])}</div></div>`:`<div class="utp-line">${Ce(y)}</div>`}).join(""));try{let d=document.getElementById("thermal-print-iframe");d&&d.remove(),d=document.createElement("iframe"),d.id="thermal-print-iframe",d.style.position="fixed",d.style.right="0",d.style.bottom="0",d.style.width="0",d.style.height="0",d.style.border="0",d.style.visibility="hidden",d.style.zIndex="-9999",document.body.appendChild(d);const y=d.contentDocument||d.contentWindow.document;y.open(),y.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Cetak Struk Thermal</title>
  <style>
    @page {
      margin: 0mm;
      size: ${n} auto;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    html, body {
      margin: 0;
      padding: 0;
      width: ${o};
      max-width: ${o};
      background: #fff;
      color: #000;
      font-family: 'Courier New', Courier, monospace;
      font-size: ${r};
      line-height: 1.25;
    }
    .utp-thermal-wrap {
      width: ${o};
      max-width: ${o};
      padding: 1mm 1mm 4mm;
      margin: 0 auto;
    }
    .utp-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      width: 100%;
      margin: 0.5px 0;
      line-height: 1.25;
    }
    .utp-col-left {
      text-align: left;
      word-break: break-word;
      flex: 1 1 auto;
    }
    .utp-col-right {
      text-align: right;
      white-space: nowrap;
      flex-shrink: 0;
      margin-left: 5px;
      font-variant-numeric: tabular-nums;
    }
    .utp-line {
      line-height: 1.25;
      word-break: break-word;
      margin: 0.5px 0;
    }
    .utp-align-center { text-align: center; }
    .utp-align-right { text-align: right; }
    .utp-align-left { text-align: left; }
    .font-bold { font-weight: bold; }
    .utp-title { font-size: 1.22em; font-weight: bold; line-height: 1.15; }
    .utp-tall { font-size: 1.15em; font-weight: bold; }
    .utp-empty-line { height: 0.65em; }
    .utp-separator {
      border-bottom: 1px dashed #000;
      margin: 3px 0;
      width: 100%;
      height: 0;
    }
    .utp-double-separator {
      border-bottom: 3px double #000;
      margin: 3px 0;
      width: 100%;
      height: 0;
    }
    .utp-barcode-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 4px 0 2px;
      text-align: center;
      width: 100%;
    }
    .utp-barcode-bars {
      width: 82%;
      max-width: 220px;
      height: 36px;
      background: repeating-linear-gradient(
        90deg,
        #000 0px, #000 2px,
        transparent 2px, transparent 4px,
        #000 4px, #000 7px,
        transparent 7px, transparent 9px,
        #000 9px, #000 11px,
        transparent 11px, transparent 13px,
        #000 13px, #000 16px,
        transparent 16px, transparent 18px,
        #000 18px, #000 19px,
        transparent 19px, transparent 22px
      );
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
    }
    .utp-barcode-code {
      font-family: 'Courier New', Courier, monospace;
      font-size: 10px;
      font-weight: bold;
      letter-spacing: 2px;
      margin-top: 2px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="utp-thermal-wrap">
    ${c}
  </div>
</body>
</html>`),y.close(),setTimeout(()=>{try{d.contentWindow.focus(),d.contentWindow.print()}catch(f){console.warn("[RawBT] Iframe print gagal, fallback ke direct print:",f),qt(c,n,o)}},120);return}catch(d){console.warn("[RawBT] Gagal membuat isolated print iframe:",d)}qt(c,n,o)},qt=(e,t,s)=>{let a=w("thermal-print-section");a||(a=document.createElement("div"),a.id="thermal-print-section",document.body.appendChild(a));const n=t==="80mm";a.className=n?"paper-80mm":"paper-58mm",document.body.classList.remove("paper-58mm","paper-80mm"),document.body.classList.add(n?"paper-80mm":"paper-58mm");let o=document.getElementById("dynamic-print-page-style");o||(o=document.createElement("style"),o.id="dynamic-print-page-style",document.head.appendChild(o)),o.innerHTML=`@media print { @page { margin: 0; size: ${t} auto; } html, body { width: ${s} !important; } }`,a.innerHTML=`
        <div class="utp-thermal-wrap" style="width:${s};font-family:'Courier New',Courier,monospace;font-size:${n?"11px":"9.5px"};line-height:1.25;color:#000;background:#fff;padding:1mm 1mm;">
            ${e}
        </div>
    `,setTimeout(()=>{window.print()},120)},Ys=()=>{if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.openRawBT=="function"){window.AndroidNativeApp.openRawBT();return}/android/i.test(navigator.userAgent||"")?(window.location.href="intent:#Intent;package=ru.a402d.rawbtprinter;end;",setTimeout(()=>{document.hidden||(window.location.href="https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter")},1200)):window.open("https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter","_blank")},wt=(e,t=null)=>{const s=t||_(),a=de(s.paperSize),n=a>=40,o=new De(a);o.init(),s.openCashDrawer&&e.payment?.method==="cash"&&o.openDrawer();const r=O(s.headerText||p.store?.name||"TOKO PUTRI").trim(),l=O(s.storeAddress!==void 0&&s.storeAddress!==""?s.storeAddress:p.store?.address||"").trim(),c=O(s.storePhone!==void 0&&s.storePhone!==""?s.storePhone:p.store?.wa||"").trim(),d=Math.floor(a/2);r.length<=d?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),U(r.toUpperCase(),a).forEach(k=>o.line(k,"center")),o.size("normal").bold(!1)),s.showAddress!==!1&&l&&U(l,a).forEach(k=>o.line(k,"center")),s.showPhone!==!1&&c&&o.line(`WA: ${c}`,"center");const y=e.payment?.taxNpwp||p.store?.taxNpwp;s.showNpwp!==!1&&y&&o.line(`NPWP: ${y}`,"center"),o.separator("-");const f=le(e.dateMs||Date.now(),n),b=`#${e.txId}`;o.twoColumn(`No : ${b}`,f,!1,!0);const u=O(e.cashierName||"Kasir").trim(),g=!!(e.customer?.isMember||e.customerType==="Member"),m=O(e.customer?.name||"Umum").trim(),N=g?`${m} (Member)`:m,C=`Ksr: ${u}`,I=`Plg: ${N}`;if(C.length+1+I.length<=a?o.twoColumn(C,I,!1,!1):(o.line(C,"left"),o.line(I,"left")),e.customer?.phone&&o.line(`HP : ${e.customer.phone}`,"left"),g&&e.customer?.memberId&&o.line(`ID : ${e.customer.memberId}`,"left"),o.separator("-"),(e.items||[]).forEach(k=>{o.itemRow(k)}),o.separator("-"),o.twoColumn("Subtotal",$(e.subtotal)),(e.globalDiscount||0)>0){const k=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";o.twoColumn(k,`- ${$(e.globalDiscount)}`)}if((e.pointDiscount||0)>0&&o.twoColumn(`Diskon Poin (${e.pointsRedeemed||0} Poin)`,`- ${$(e.pointDiscount)}`),e.claimedReward&&e.claimedReward.name&&(o.separator("-"),o.bold(!0).line(`[KLAIM HADIAH: ${O(e.claimedReward.name)}]`,"left").bold(!1),o.twoColumn("Poin Reward Ditukar",`-${e.claimedReward.pointsCost||0} Poin`)),(e.payment?.ppnEnabled||e.payment?.ppnShowZero||e.payment?.ppnRate===0||e.payment?.ppnAmount&&e.payment.ppnAmount>0)&&(p.store?.ppnEnabled||e.payment?.ppnEnabled)){const k=e.payment?.ppnType==="inclusive",B=e.payment?.ppnRate!==void 0?e.payment.ppnRate:p.store?.ppnRate||0,M=e.payment?.ppnAmount||0,T=e.payment?.ppnLabel||`${k?"Inc. PPN":"PPN"} (${B}%)`,z=M>0?`${k?"":"+ "}${$(M)}`:"Rp 0";o.twoColumn(T,z)}o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL",$(e.total)).size("normal").bold(!1),o.doubleSeparator();const A=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",x=A?"PUTRI PAYLATER":(e.payment?.method||"CASH").toUpperCase();if(o.twoColumn("Metode Bayar",x),e.payment?.method==="cash")o.twoColumn("Bayar Tunai",$(e.payment.paid)),o.bold(!0).twoColumn("Kembalian",$(e.payment.change)).bold(!1);else if(e.payment?.method==="transfer")e.payment?.bank&&o.twoColumn("Bank Penerima",e.payment.bank);else if(e.payment?.method==="qris")o.twoColumn("Kanal QRIS","QRIS Dinamis (Lunas)");else if(e.payment?.method==="tempo"){if(A){if(o.twoColumn("Limit Terpakai",$(e.payment?.paylaterUsed||e.paylaterUsed||e.total-(e.payment?.tempoDp??0))),e.payment?.paylaterMonths){const k=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${k} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${$(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${$(e.payment.paylaterServiceFee)}`)}if(o.twoColumn("Uang Muka (DP)",$(e.payment?.tempoDp??e.payment?.dp??0)),o.bold(!0).twoColumn(A?"Tagihan PayLater":"Sisa Piutang",$(e.payment.tempoBalance||0)).bold(!1),A&&e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${$(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),e.payment.tempoDueDate){const k=typeof e.payment.tempoDueDate=="number"?new Date(e.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e.payment.tempoDueDate;o.line(`Jatuh Tempo: ${k}`,"left")}}s.showPoints&&(e.pointsEarned>0||(e.pointsRedeemed||0)>0)&&(o.separator("-"),e.pointsEarned>0&&o.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),(e.pointsRedeemed||0)>0&&o.twoColumn("Poin Ditukar",`-${e.pointsRedeemed} Poin`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&o.twoColumn("Sisa Saldo Poin",`${e.finalMemberPoints} Poin`)),s.showBarcode&&(o.separator("-"),o.barcode(`POS-${e.txId}`,"CODE128",45),o.line(`*POS-${e.txId}*`,"center"),o.line("(SCAN DI KASIR)","center")),o.separator("-");const S=O(s.footerText||"Terima Kasih Atas Kunjungan Anda!").trim();S&&U(S,a).forEach(k=>o.line(k,"center"));const h=O(s.footerPolicyNote!==void 0?s.footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa struk resmi.").trim();return h&&(o.line("","center"),U(h,a).forEach(k=>o.line(k,"center"))),o.feed(s.feedLines||3),s.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},gt=(e,t=!1,s=null)=>{const a=s||_(),n=de(a.paperSize),o=n>=40,r=new De(n);r.init();const l=O(a.headerText||p.store?.name||"TOKO PUTRI").trim(),c=O(p.store?.address||"").trim(),d=O(p.store?.wa||"").trim(),y=Math.floor(n/2);l.length<=y?(r.align("center").bold(!0).size("title").line(l.toUpperCase(),"center"),r.size("normal").bold(!1)):(r.align("center").bold(!0).size("tall"),U(l.toUpperCase(),n).forEach(S=>r.line(S,"center")),r.size("normal").bold(!1)),c&&U(c,n).forEach(S=>r.line(S,"center")),d&&r.line(`WA: ${d}`,"center"),r.separator("-");const f=o?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **";r.bold(!0).line(f,"center").bold(!1),r.separator("-");const b=le(e.startTime,o),u=le(e.endTime||Date.now(),o);r.twoColumn("Shift ID",`#${e.shiftNo||e.id||"-"}`,!1,!0),r.twoColumn("Kasir",(e.cashierName||"Kasir").substring(0,o?20:12),!1,!0),r.twoColumn("Mulai",b,!1,!0),r.twoColumn("Selesai",u,!1,!0),r.separator("-");const g=parseFloat(e.startingCash)||0,m=parseFloat(e.cashSales)||0,N=parseFloat(e.qrisSales)||0,C=parseFloat(e.bankSales||e.transferSales)||0,I=parseFloat(e.tempoSales)||0,R=parseFloat(e.totalSales)||m+N+C+I,A=e.txCount||0;if(r.bold(!0).line("RINGKASAN PENJUALAN","left").bold(!1),r.twoColumn("Modal Awal Laci",$(g)),r.twoColumn("Penjualan Tunai",$(m)),N>0&&r.twoColumn("Penjualan QRIS",$(N)),C>0&&r.twoColumn("Penjualan Transfer",$(C)),I>0&&r.twoColumn("Penjualan Tempo",$(I)),r.separator("-"),r.twoColumn("Total Transaksi",`${A} Trx`),r.bold(!0).size("tall").twoColumn("TOTAL OMSET",$(R)).size("normal").bold(!1),r.doubleSeparator(),!t){const S=g+m,h=e.actualCash!==void 0?parseFloat(e.actualCash):S,k=h-S,B=k===0?"PAS (0)":k>0?`+${$(k)}`:`-${$(Math.abs(k))}`;r.bold(!0).line("REKONSILIASI KAS FISIK","left").bold(!1),r.twoColumn("Kas Diharapkan",$(S)),r.twoColumn("Kas Fisik Aktual",$(h)),r.bold(!0).twoColumn("Selisih Kas",B,!0).bold(!1),e.closingNotes&&U(`Catatan: ${e.closingNotes}`,n).forEach(D=>r.line(D,"left")),r.separator("-"),r.line("Verifikasi & Tanda Tangan:","left"),r.feed(2);const M=Math.floor(n/2),T="( Kasir )",z=o?"( Supervisor/Owner )":"( Supervisor )",v=Math.max(0,Math.floor((M-T.length)/2)),L=Math.max(0,Math.floor((M-z.length)/2)),K=" ".repeat(v)+T+" ".repeat(Math.max(1,M-v-T.length))+" ".repeat(L)+z;r.line(K,"left"),r.separator("-")}const x=a.footerText||"Laporan Kasir Resmi Toko Putri";return U(x,n).forEach(S=>r.line(S,"center")),r.feed(a.feedLines||3),a.autoCut&&r.cut(),{base64:r.toBase64(),plainText:r.toPlainText(),previewLines:r.previewLines,html:r.toHtml()}},xt=(e,t=null)=>{const s=t||_(),a=de(s.paperSize),n=a>=40,o=new De(a);o.init();const r=O(s.headerText||p.store?.name||"TOKO PUTRI").trim(),l=O(s.storeAddress!==void 0&&s.storeAddress!==""?s.storeAddress:p.store?.address||"").trim(),c=O(s.storePhone!==void 0&&s.storePhone!==""?s.storePhone:p.store?.wa||"").trim(),d=Math.floor(a/2);r.length<=d?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),U(r.toUpperCase(),a).forEach(h=>o.line(h,"center")),o.size("normal").bold(!1)),s.showAddress!==!1&&l&&U(l,a).forEach(h=>o.line(h,"center")),s.showPhone!==!1&&c&&o.line(`WA: ${c}`,"center");const y=e.payment?.taxNpwp||p.store?.taxNpwp;s.showNpwp!==!1&&y&&o.line(`NPWP: ${y}`,"center"),o.separator("-");const f=le(e.dateString||e.dateMs||Date.now(),n);o.twoColumn(`Order: #${e.orderId}`,f,!1,!0);const b=(e.customer?.name||"Guest").substring(0,n?18:11),u=e.customer?.deliveryMethod==="delivery"?"Kirim":"Ambil";o.twoColumn(`Plg  : ${b}`,`Tipe: ${u}`,!1,!0),e.customer?.phone&&o.line(`HP   : ${e.customer.phone}`,"left"),e.customer?.note&&U(`Cat  : ${e.customer.note}`,a).forEach(h=>o.line(h,"left")),o.separator("-");const g=Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[];g.length>0?g.forEach(h=>{o.itemRow(h)}):o.line("- Tidak ada rincian barang -","center"),o.separator("-");const m=g.reduce((h,k)=>h+parseFloat(k.qty||1)*(parseFloat(k.effectivePrice||k.price)||0),0),N=e.payment&&e.payment.subtotal!==void 0?e.payment.subtotal:m||e.total||0,C=e.payment&&e.payment.shippingCost!==void 0?e.payment.shippingCost:0,I=e.payment&&e.payment.grandTotal!==void 0?e.payment.grandTotal:e.total||N+C;if(o.twoColumn("Subtotal",$(N)),(e.customer?.deliveryMethod==="delivery"||e.deliveryMethod==="delivery")&&o.twoColumn("Ongkos Kirim",$(C)),e.payment?.productDiscount&&o.twoColumn("Potongan Harga",`- ${$(e.payment.productDiscount)}`),e.payment?.shippingDiscount&&o.twoColumn("Potongan Ongkir",`- ${$(e.payment.shippingDiscount)}`),(e.payment?.ppnEnabled||e.payment?.ppnShowZero||e.payment?.ppnRate===0||e.payment?.ppnAmount&&e.payment.ppnAmount>0)&&(p.store?.ppnEnabled||e.payment?.ppnEnabled)){const h=e.payment?.ppnType==="inclusive",k=e.payment?.ppnRate!==void 0?e.payment.ppnRate:p.store?.ppnRate||0,B=e.payment?.ppnAmount||0,M=e.payment?.ppnLabel||`${h?"Inc. PPN":"PPN"} (${k}%)`,T=B>0?`${h?"":"+ "}${$(B)}`:"Rp 0";o.twoColumn(M,T)}o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL",$(I)).size("normal").bold(!1),o.doubleSeparator();const A=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater";if(o.twoColumn("Metode Bayar",A?"PUTRI PAYLATER":(e.payment?.method||"Tunai").toUpperCase()),A){if(e.payment?.paylaterMonths){const h=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${h} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${$(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${$(e.payment.paylaterServiceFee)}`),e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${$(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`)}s.showPoints&&(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(o.separator("-"),e.pointsEarned>0&&o.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),e.finalMemberPoints!==void 0&&o.twoColumn("Saldo Poin",`${e.finalMemberPoints} Poin`)),s.showBarcode&&(o.separator("-"),o.barcode(`ORDER-${e.orderId}`,"CODE128",45),o.line(`*ORDER-${e.orderId}*`,"center"),o.line("(SCAN DI KASIR)","center")),o.separator("-");const x=O(s.footerText||"Terima Kasih Atas Kunjungan Anda!").trim();x&&U(x,a).forEach(h=>o.line(h,"center"));const S=O(s.footerPolicyNote!==void 0?s.footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa struk resmi.").trim();return S&&(o.line("","center"),U(S,a).forEach(h=>o.line(h,"center"))),o.feed(s.feedLines||3),s.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},ht=(e,t=null)=>{const s=t||_(),a=de(s.paperSize),n=a>=40,o=new De(a);o.init();const r=O(s.headerText||p.store?.name||"TOKO PUTRI").trim(),l=O(s.storeAddress!==void 0&&s.storeAddress!==""?s.storeAddress:p.store?.address||"").trim(),c=O(s.storePhone!==void 0&&s.storePhone!==""?s.storePhone:p.store?.wa||"").trim(),d=Math.floor(a/2);r.length<=d?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),U(r.toUpperCase(),a).forEach(D=>o.line(D,"center")),o.size("normal").bold(!1)),s.showAddress!==!1&&l&&U(l,a).forEach(D=>o.line(D,"center")),s.showPhone!==!1&&c&&o.line(`WA: ${c}`,"center");const y=e.payment?.taxNpwp||p.store?.taxNpwp;s.showNpwp!==!1&&y&&o.line(`NPWP: ${y}`,"center"),o.separator("-");const f=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",b=e.payment?.paymentStatus==="lunas"||parseFloat(e.payment?.tempoBalance||0)<=0,u=n?f?b?"*** NOTA PUTRI PAYLATER (LUNAS) ***":"*** NOTA TAGIHAN PUTRI PAYLATER ***":b?"*** NOTA TEMPO (LUNAS) ***":"*** NOTA TAGIHAN TEMPO (PIUTANG) ***":f?b?"** PAYLATER (LUNAS) **":"** NOTA PUTRI PAYLATER **":b?"** NOTA TEMPO (LUNAS) **":"** NOTA TAGIHAN TEMPO **";o.bold(!0).line(u,"center").bold(!1),o.separator("-");const g=le(e.dateString||e.timestamp||Date.now(),n);o.twoColumn(`Order: #${e.orderId}`,g,!1,!0);const m=(e.customer?.name||"Pelanggan").substring(0,n?18:11);if(o.twoColumn(`Plg  : ${m}`,f?"Tipe: PayLater":"Tipe: Tempo",!1,!0),f&&e.payment?.paylaterMonths){const D=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${D} (${e.payment.paylaterMonths}x)`,!1,!0)}(e.customer?.phone||e.customer?.wa)&&o.line(`HP   : ${e.customer.wa||e.customer.phone}`,"left");let N=parseFloat(e.payment?.tempoBalance)||0,C=e.payment?.tempoPenaltyRate!==void 0?parseFloat(e.payment.tempoPenaltyRate):1,I=e.payment?.tempoPenaltyStopped===!0,R=0,A=e.payment?.tempoDueDate||0,x=0,S=0,h=!1,k=!1;const B=Date.now();A>0&&(B>A?(x=Math.floor((B-A)/(24*60*60*1e3)),x>0&&(h=!0)):(S=Math.ceil((A-B)/(24*60*60*1e3)),S<=3&&(k=!0))),I?R=parseFloat(e.payment?.tempoFixedPenalty)||0:h&&(R=C/100*N*x);let M=N+R;const T=e.payment?.installments||[],z=T.reduce((D,E)=>D+(parseFloat(E.amount)||0),0),v=e.payment?.grandTotal||N+z;if(A>0){const D=le(A,n);let E="";b?E="LUNAS":h?E=`Telat ${x} Hari`:k?E=`H-${S<=0?0:S}`:E=`Sisa ${S} Hari`,o.twoColumn(`J.Tmp: ${D}`,E,!1,!0)}o.separator("-"),(e.items||[]).forEach(D=>{o.itemRow(D)}),o.separator("-"),o.twoColumn("Total Transaksi",$(v)),f&&(e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${$(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Penanganan",`+ ${$(e.payment.paylaterServiceFee)}`)),T.length>0&&(o.separator("-"),o.bold(!0).line("HISTORI PEMBAYARAN CICILAN:","left").bold(!1),T.forEach((D,E)=>{const H=le(D.date,n);o.twoColumn(`${E+1}. ${H}`,$(D.amount))}),o.twoColumn("Total Terbayar",$(z),!0)),o.twoColumn("Sisa Pokok",$(N)),f&&e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${$(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),R>0&&o.twoColumn(`Denda (${x} Hari)`,`+ ${$(R)}`),o.doubleSeparator(),o.bold(!0).size("tall").twoColumn(f?"TAGIHAN PAYLATER":"SISA TAGIHAN",$(b?0:M)).size("normal").bold(!1),o.doubleSeparator(),!b&&p.banks&&p.banks.length>0&&(o.line("REKENING TRANSFER RESMI:","left"),(p.banks||[]).forEach(D=>{o.line(`${D.bank||D.bankName||"Bank"}: ${D.number||D.bankAccount||"-"}`,"left"),o.line(`a/n ${D.name||D.bankOwner||"-"}`,"left")}),o.separator("-")),s.showBarcode&&(o.separator("-"),o.barcode(f?`PAYLATER-${e.orderId}`:`TEMPO-${e.orderId}`,"CODE128",45),o.line(f?`*PAYLATER-${e.orderId}*`:`*TEMPO-${e.orderId}*`,"center"),o.line(f?"(PUTRI PAYLATER RESMI)":"(NOTA TEMPO RESMI)","center")),o.separator("-");const L=O(s.footerText||"Terima Kasih Atas Kerja Sama & Kepercayaannya!").trim();L&&U(L,a).forEach(D=>o.line(D,"center"));const K=O(s.footerPolicyNote!==void 0?s.footerPolicyNote:"").trim();return K&&(o.line("","center"),U(K,a).forEach(D=>o.line(D,"center"))),o.feed(s.feedLines||3),s.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},yt=(e=null)=>{const t=e||_(),s=de(t.paperSize),a=s>=40,n=new De(s);n.init();const o=O(t.headerText||p.store?.name||"TOKO PUTRI").trim(),r=O(t.storeAddress!==void 0&&t.storeAddress!==""?t.storeAddress:p.store?.address||"").trim(),l=O(t.storePhone!==void 0&&t.storePhone!==""?t.storePhone:p.store?.wa||"").trim(),c=Math.floor(s/2);o.length<=c?(n.align("center").bold(!0).size("title").line(o.toUpperCase(),"center"),n.size("normal").bold(!1)):(n.align("center").bold(!0).size("tall"),U(o.toUpperCase(),s).forEach(u=>n.line(u,"center")),n.size("normal").bold(!1)),t.showAddress!==!1&&r&&U(r,s).forEach(u=>n.line(u,"center")),t.showPhone!==!1&&l&&n.line(`WA: ${l}`,"center"),n.separator("-");const d=a?`*** UJI COBA CETAK STRUK THERMAL ${s} KOLOM ***`:`** UJI CETAK THERMAL ${s} KOLOM **`;n.bold(!0).line(d,"center").bold(!1),n.separator("-"),n.line("MISTAR KALIBRASI TEPI KERTAS:","left");let y="";for(let u=1;u<=s;u++)y+=String(u%10);n.line(y,"left");let f="";for(let u=1;u<=s;u++)u===s||u%10===0?f+="|":u%5===0?f+=":":f+=".";n.line(f,"left"),n.line(`(Pastikan angka ${s%10} paling kanan tercetak utuh)`,"left"),n.separator("-");const b=le(Date.now(),a);if(n.line(`Waktu   : ${b}`,"left"),n.line(`Format  : Thermal ${s} Kolom (${t.paperSize})`,"left"),n.line("Driver  : RAWBT FREE PRINT SERVICE","left"),n.line("Status  : 100% PRESISI & SIAP PAKAI","left"),n.separator("-"),n.bold(!0).twoColumn("ITEM SIMULASI","HARGA").bold(!1),n.itemRow({name:"Kertas Thermal Kasir Roll",qty:2,unit:"roll",price:15e3,subtotal:3e4}),n.itemRow({name:"Semen Portland Komposit 40kg",qty:1,unit:"sak",price:65e3,subtotal:65e3}),n.separator("-"),n.twoColumn("Subtotal",$(95e3)),n.twoColumn("Diskon Uji Coba",`- ${$(5e3)}`),n.doubleSeparator(),n.bold(!0).size("tall").twoColumn("TOTAL TES",$(9e4)).size("normal").bold(!1),n.doubleSeparator(),n.twoColumn("Bayar Tunai",$(1e5)),n.bold(!0).twoColumn("Kembalian",$(1e4)).bold(!1),t.showPoints&&(n.separator("-"),n.twoColumn("Simulasi Poin Member","+10 Poin")),t.showBarcode){n.separator("-");const u=`TEST-${Date.now().toString().slice(-6)}`;n.barcode(u,"CODE128",45),n.line(`*${u}*`,"center"),n.line("(BARCODE TEST BERHASIL)","center")}return n.separator("-"),U(t.footerText||"Terima kasih atas kunjungan Anda!",s).forEach(u=>n.line(u,"center")),t.footerPolicyNote&&(n.line("","center"),U(t.footerPolicyNote,s).forEach(u=>n.line(u,"center"))),U("Hasil cetak telah terkalibrasi presisi.",s).forEach(u=>n.line(u,"center")),n.feed(t.feedLines||3),t.autoCut&&n.cut(),{base64:n.toBase64(),plainText:n.toPlainText(),previewLines:n.previewLines,html:n.toHtml()}},nt=e=>{const t=document.getElementById(e);return!!t&&!t.classList.contains("hidden")},Qs=e=>{if(!e){Q("Data transaksi kasir tidak ditemukan.","warning");return}const t=_(),s=wt(e,t),a=nt("pos-receipt-fallback-modal");Ne(s.base64,s.plainText,s.html,{skipPreview:a,previewLines:s.previewLines,title:`Struk Kasir #${e.txId||""}`,rebuild:()=>wt(e,_()),onConfirm:()=>{document.getElementById("pos-success-modal")?.remove(),document.getElementById("pos-receipt-fallback-modal")?.remove()}})},Zs=(e,t=!1)=>{if(!e){Q("Data shift tidak ditemukan.","warning");return}const s=_(),a=gt(e,t,s),n=nt("pos-shift-receipt-modal");Ne(a.base64,a.plainText,a.html,{skipPreview:n,previewLines:a.previewLines,title:`${t?"Ringkasan Shift (X-Report)":"Rekap Tutup Shift (Z-Report)"} #${e.shiftNo||e.id||""}`,rebuild:()=>gt(e,t,_()),onConfirm:()=>document.getElementById("pos-shift-receipt-modal")?.remove()})},Xs=async(e=null)=>{const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||ye,s=String(t||"").replace(/^#/,"").trim(),a=c=>{if(!c)return!1;const d=String(c.orderId||"").replace(/^#/,"").trim();return s?d===s||d.endsWith(s)||s.endsWith(d):!0};let n=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(n=e),(!n||!n.items||n.items.length===0)&&a(window.currentCustomerOrder)&&(n=window.currentCustomerOrder),(!n||!n.items||n.items.length===0)&&a(window.lastPrintedOrder)&&(n=window.lastPrintedOrder),(!n||!n.items||n.items.length===0)&&(ve||[]).length>0){const c=ve.find(a);c&&Array.isArray(c.items)&&c.items.length>0&&(n=c)}if((!n||!n.items||n.items.length===0)&&Array.isArray(j)){const c=j.find(a);c&&Array.isArray(c.items)&&c.items.length>0&&(n=c)}if((!n||!n.items||n.items.length===0)&&s)try{const c=typeof re<"u"&&re?re:window.db;if(c){let d=await c.collection("freshmart_orders").doc(s).get();if(!d.exists&&!s.startsWith("ORD-")){const y=await c.collection("freshmart_orders").doc("ORD-"+s).get();y.exists&&(d=y)}if(d&&d.exists&&(n=d.data(),n.orderId=n.orderId||d.id,window.currentCustomerOrder=n,window.lastPrintedOrder=n,Array.isArray(j))){const y=j.findIndex(a);if(y!==-1){j[y].items=n.items||[],j[y].payment=n.payment||{},j[y].customer=n.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(j))}catch{}}}}}catch(c){console.warn("[RawBT] Gagal fetch order detail from Firestore:",c)}if(!n&&Array.isArray(j)&&(n=j.find(a)),!n){Q("Data pesanan tidak ditemukan.","warning");return}window.lastPrintedOrder=n;const o=_(),r=xt(n,o),l=nt("receipt-preview-modal");Ne(r.base64,r.plainText,r.html,{skipPreview:l,previewLines:r.previewLines,title:`Struk Pesanan #${n.orderId||""}`,rebuild:()=>xt(n,_()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&l&&window.closeReceiptPreviewModal()}})},en=(e=null)=>{const t=e||ye;let a=(window.cachedPiutangOrders||[]).find(l=>String(l.orderId)===String(t))||(ve||[]).find(l=>String(l.orderId)===String(t));if(!a&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(t)&&(a=window.lastPrintedOrder),!a){if(typeof window.previewTempoReceipt=="function"&&t&&!window.__tempoReceiptFetching){window.__tempoReceiptFetching=!0,Promise.resolve(window.previewTempoReceipt(t)).finally(()=>{window.__tempoReceiptFetching=!1});return}Q("Data nota piutang tidak ditemukan.","warning");return}const n=_(),o=ht(a,n),r=nt("receipt-preview-modal");Ne(o.base64,o.plainText,o.html,{skipPreview:r,previewLines:o.previewLines,title:`Nota Tagihan Tempo #${a.orderId||""}`,rebuild:()=>ht(a,_()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&r&&window.closeReceiptPreviewModal()}})},tn=()=>{const e=_(),t=yt(e);Ne(t.base64,t.plainText,t.html,{previewLines:t.previewLines,title:"Uji Coba Cetak Printer",rebuild:()=>yt(_())})};window.cleanLineAscii=O;window.wrapWords=U;window.formatTwoColumn=xa;window.formatCompactDate=le;window.EscPosBuilder=De;window.sendToRawBT=Ne;window.renderThermalDOMAndPrint=Ct;window.openRawBTApp=Ys;window.buildPOSReceiptPayload=wt;window.buildShiftReceiptPayload=gt;window.buildOrderReceiptPayload=xt;window.buildTempoReceiptPayload=ht;window.buildTestReceiptPayload=yt;window.printPOSReceiptDirect=Qs;window.printShiftSettlementDirect=Zs;window.printCustomerReceiptDirect=Xs;window.printTempoReceiptDirect=en;window.executeRawBTTestPrint=tn;const Lt=async(e=null)=>{if(e&&typeof Ht=="function"&&typeof e=="string"&&Ht(e),typeof window.printCustomerReceiptDirect=="function")return window.printCustomerReceiptDirect(e);const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||ye,s=String(t||"").replace(/^#/,"").trim(),a=v=>{if(!v)return!1;const L=String(v.orderId||"").replace(/^#/,"").trim();return s?L===s||L.endsWith(s)||s.endsWith(L):!0};let n=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(n=e),(!n||!n.items||n.items.length===0)&&a(window.currentCustomerOrder)&&(n=window.currentCustomerOrder),(!n||!n.items||n.items.length===0)&&a(window.lastPrintedOrder)&&(n=window.lastPrintedOrder),(!n||!n.items||n.items.length===0)&&(ve||[]).length>0){const v=ve.find(a);v&&Array.isArray(v.items)&&v.items.length>0&&(n=v)}if((!n||!n.items||n.items.length===0)&&Array.isArray(j)){const v=j.find(a);v&&Array.isArray(v.items)&&v.items.length>0&&(n=v)}if((!n||!n.items||n.items.length===0)&&s)try{const v=typeof re<"u"&&re?re:window.db;if(v){let L=await v.collection("freshmart_orders").doc(s).get();if(!L.exists&&!s.startsWith("ORD-")){const K=await v.collection("freshmart_orders").doc("ORD-"+s).get();K.exists&&(L=K)}if(L&&L.exists&&(n=L.data(),n.orderId=n.orderId||L.id,window.currentCustomerOrder=n,window.lastPrintedOrder=n,Array.isArray(j))){const K=j.findIndex(a);if(K!==-1){j[K].items=n.items||[],j[K].payment=n.payment||{},j[K].customer=n.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(j))}catch{}}}}}catch(v){console.warn("[Receipt] Gagal fetch order detail from Firestore:",v)}if(!n&&Array.isArray(j)&&(n=j.find(a)),!n)return;window.lastPrintedOrder=n;const o=typeof _=="function"?_():{paperSize:"58mm",showPoints:!0,showBarcode:!0},l=de(o.paperSize)>=40,c=le(n.dateString||n.date||Date.now(),l),d=o.headerText||p.store.name||"Toko Putri",y=o.storeAddress!==void 0&&o.storeAddress!==""?o.storeAddress:p.store.address||"",f=o.storePhone!==void 0&&o.storePhone!==""?o.storePhone:p.store.wa||"",b=(v,L)=>`<div class="utp-row"><div class="utp-col-left">${i(v)}</div><div class="utp-col-right">${i(L)}</div></div>`,u=Array.isArray(n.items)?n.items:Array.isArray(n.cart)?n.cart:[],g=u.reduce((v,L)=>v+parseFloat(L.qty||1)*(parseFloat(L.effectivePrice||L.price)||0),0),m=n.payment&&n.payment.subtotal!==void 0?n.payment.subtotal:g||n.total||0,N=n.payment&&n.payment.shippingCost!==void 0?n.payment.shippingCost:0,C=n.payment&&n.payment.grandTotal!==void 0?n.payment.grandTotal:n.total||m+N,I=String(n.payment?.method||n.method||"Tunai").toUpperCase(),R=n.customer?.name||n.customerName||"Guest",A=n.customer?.deliveryMethod==="delivery"||n.deliveryMethod==="delivery";let x=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${i(d)}</div>`;o.showAddress!==!1&&y&&(x+=`<div class="text-center" style="font-size:10px;color:#475569;margin-bottom:2px;">${i(y)}</div>`),o.showPhone!==!1&&f&&(x+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${i(f)}</div>`);const S=n.payment?.taxNpwp||p.store?.taxNpwp;if(o.showNpwp!==!1&&S&&(x+=`<div class="text-center" style="font-size:10px;font-family:monospace;margin-bottom:4px;">NPWP: ${i(S)}</div>`),x+='<div class="utp-separator"></div>',x+=b(`Order: #${n.orderId}`,c),x+=b(`Plg  : ${i(R).substring(0,l?18:10)}`,`Tipe: ${A?"Kirim":"Ambil"}`),(n.customer?.phone||n.customerPhone)&&(x+=`<div class="utp-line">HP   : ${i(n.customer?.phone||n.customerPhone)}</div>`),x+='<div class="utp-separator"></div>',n.customer?.note&&(x+=`<div style="white-space:pre-wrap;word-break:break-word;">Cat: ${i(n.customer.note)}</div><div class="utp-separator"></div>`),u.length>0?u.forEach(v=>{let L=v.variantName?` (${i(v.variantName)}${v.colorCode?" "+i(v.colorCode):""})`:"";const K=i(v.name||"Barang")+L+(v.poTime?" [PO]":""),D=v.effectivePrice||v.price||0,E=`  ${parseFloat(v.qty||1)} ${i(v.unit||"pcs")} x ${Math.round(D).toLocaleString("id-ID")}`,H=(parseFloat(v.qty||1)*D).toLocaleString("id-ID");x+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;">${K}</div>${b(E,H)}`,v.poTime&&(x+=`<div style="font-size:10px;font-style:italic;color:#4b5563;">  * Estimasi PO: ${i(v.poTime)}</div>`)}):x+='<div style="font-style:italic;color:#64748b;text-align:center;padding:4px 0;">- Tidak ada rincian barang -</div>',x+=`<div class="utp-separator"></div>${b("Subtotal",m.toLocaleString("id-ID"))}`,A&&(x+=b("Ongkir",N.toLocaleString("id-ID"))),n.payment?.shippingDiscount&&(x+=b("Pot.Ongkir",`-${n.payment.shippingDiscount.toLocaleString("id-ID")}`)),n.payment?.productDiscount&&(x+=b("Pot.Harga",`-${n.payment.productDiscount.toLocaleString("id-ID")}`)),(n.payment?.ppnEnabled||n.payment?.ppnShowZero||n.payment?.ppnRate===0||n.payment?.ppnAmount&&n.payment.ppnAmount>0)&&(p.store?.ppnEnabled||n.payment?.ppnEnabled)){const v=n.payment?.ppnType==="inclusive",L=n.payment?.ppnRate!==void 0?n.payment.ppnRate:p.store?.ppnRate||0,K=n.payment?.ppnAmount||0,D=n.payment?.ppnLabel||`${v?"Inc. PPN":"PPN"} (${L}%)`,E=K>0?`${v?"":"+"}${K.toLocaleString("id-ID")}`:"0";x+=b(D,E)}if(x+=`<div class="utp-double-separator"></div><div class="font-bold text-[12px]">${b("TOTAL","Rp "+C.toLocaleString("id-ID"))}</div>${b("Metode Bayar",I)}`,n.payment?.method==="tempo"||n.payment?.isPaylater||n.payment?.subMethod==="paylater"){if(!!(n.payment?.isPaylater||n.payment?.subMethod==="paylater")){if(n.payment?.paylaterMonths){const L=n.payment?.paylaterTenor==="2m"?"2 Bulan":n.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari";x+=b("Tenor Cicilan",`${L} (${n.payment.paylaterMonths}x)`)}n.payment?.paylaterMonthlyInstallment&&(x+=`<div class="font-bold">${b("Angsuran/Bln","Rp "+Math.round(n.payment.paylaterMonthlyInstallment).toLocaleString("id-ID"))}</div>`),n.payment?.tempoDp>0&&(x+=b("Uang Muka (DP)","Rp "+Math.round(n.payment.tempoDp).toLocaleString("id-ID"))),x+=`<div class="font-bold">${b("Tagihan PayLater","Rp "+Math.round(n.payment?.tempoBalance||C).toLocaleString("id-ID"))}</div>`}else n.payment?.tempoDp>0&&(x+=b("Uang Muka (DP)","Rp "+Math.round(n.payment.tempoDp).toLocaleString("id-ID"))),x+=`<div class="font-bold">${b("Sisa Piutang","Rp "+Math.round(n.payment?.tempoBalance||C).toLocaleString("id-ID"))}</div>`;if(n.payment?.tempoDueDate){const L=typeof n.payment.tempoDueDate=="number"?new Date(n.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):n.payment.tempoDueDate;x+=b("Jatuh Tempo",L)}}o.showPoints&&(n.pointsEarned>0||n.finalMemberPoints!==void 0)&&(x+='<div class="utp-separator"></div>',n.pointsEarned>0&&(x+=b("Poin Didapat","+"+n.pointsEarned+" Poin")),n.finalMemberPoints!==void 0&&n.finalMemberPoints!==null&&(x+=`<div class="font-bold">${b("Saldo Poin",String(n.finalMemberPoints)+" Poin")}</div>`),n.claimedReward&&(x+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;margin-top:2px;">HADIAH: ${i(n.claimedReward.name)}</div>`)),u.some(v=>v&&v.poTime&&v.poTime!=="")&&(x+='<div class="utp-separator"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),o.showBarcode&&(x+=`<div class="utp-separator"></div>
        <div style="text-align:center;margin:6px 0 3px;">
            <div style="width:75%;max-width:200px;height:32px;margin:0 auto;background:repeating-linear-gradient(90deg,#000 0px,#000 2px,transparent 2px,transparent 4px,#000 4px,#000 7px,transparent 7px,transparent 9px,#000 9px,#000 11px,transparent 11px,transparent 13px,#000 13px,#000 16px,transparent 16px,transparent 18px,#000 18px,#000 19px,transparent 19px,transparent 22px);border-top:1px solid #000;border-bottom:1px solid #000;"></div>
            <div style="font-family:monospace;letter-spacing:2px;font-size:10.5px;font-weight:bold;margin-top:3px;">*ORDER-${i(n.orderId)}*</div>
            <div style="font-size:8px;color:#666;">SCAN DI KASIR</div>
        </div>`),x+=`<div class="utp-separator"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${i(o.footerText||"Terima Kasih Atas Kunjungan Anda")}</div>`,o.footerPolicyNote&&(x+=`<div class="text-center my-1" style="font-size:9px;line-height:1.25;color:#475569;">${i(o.footerPolicyNote)}</div>`),x+='<div class="utp-separator"></div><div style="height:15px;"></div>',sa("receipt-paper-content",x);const B=w("receipt-paper-content");B&&(B.style.width=l?"340px":"260px");const M=w("receipt-preview-modal-box");M&&(M.classList.remove("max-w-[320px]","max-w-[400px]"),M.classList.add(l?"max-w-[400px]":"max-w-[320px]"));const T=w("receipt-preview-modal"),z=w("receipt-preview-modal-box");T&&T.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),et(T,z)},an=(e=!1)=>{const t=w("receipt-preview-modal"),s=w("receipt-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{ke(t,s)}):ke(t,s))},sn=()=>{const e=ye||(window.lastPrintedOrder?window.lastPrintedOrder.orderId:null);if(typeof window.printCustomerReceiptDirect=="function"){window.printCustomerReceiptDirect(e);return}if(!((ve||[]).find(a=>a.orderId===ye)||(Array.isArray(j)?j.find(a=>a.orderId===ye):null)||window.lastPrintedOrder))return;const s=w("receipt-paper-content")?w("receipt-paper-content").innerHTML:"";Ct(s)};window.openReceiptPreview=Lt;window.openCustomerReceiptPreview=e=>{Lt(e)};window.closeReceiptPreviewModal=an;window.executePrintReceipt=sn;window.checkProPrint=()=>{Lt()};const V={OWNER:"owner",ADMIN:"admin",CASHIER:"cashier"},nn=[{key:"orders",label:"Pesanan Online",desc:"Proses status pesanan, update resi pengiriman & konfirmasi bayar",group:"operasional",icon:"fa-receipt"},{key:"products",label:"Katalog Produk & Stok",desc:"Tambah/edit produk, atur varian, dan perbarui stok barang",group:"operasional",icon:"fa-box-open"},{key:"suppliers",label:"Supplier & Rekanan",desc:"Kelola master data supplier, kontak kulakan, dan asal produk",group:"operasional",icon:"fa-truck-field"},{key:"purchases",label:"Order Kulakan (PO)",desc:"Buat PO pembelian grosir, terima restock, & kelola hutang rekanan",group:"operasional",icon:"fa-cart-flatbed"},{key:"piutang",label:"Piutang Tempo & Cicilan",desc:"Kelola nota piutang pelanggan, denda keterlambatan, & cicilan",group:"operasional",icon:"fa-clock-rotate-left"},{key:"customers",label:"Database Pelanggan",desc:"Lihat daftar member, atur limit kredit PayLater, & mutasi poin",group:"operasional",icon:"fa-address-book"},{key:"pos",label:"Kasir POS",desc:"Akses antarmuka penjualan kasir toko fisik dan shift kasir",group:"operasional",icon:"fa-cash-register"},{key:"expenses",label:"Biaya Operasional Toko",desc:"Buku kas pengeluaran operasional toko harian & nota kas",group:"operasional",icon:"fa-money-bill-transfer"},{key:"stock_opname",label:"Stock Opname (Audit Fisik)",desc:"Audit stok fisik rak/gudang, rekonsiliasi selisih & terapkan penyesuaian stok",group:"operasional",icon:"fa-clipboard-check"},{key:"categories",label:"Kategori Produk",desc:"Tambah dan susun kategori etalase produk",group:"konten",icon:"fa-tags"},{key:"brands",label:"Merek Produk",desc:"Kelola daftar brand dagang barang",group:"konten",icon:"fa-copyright"},{key:"colors",label:"Database Warna",desc:"Katalog warna produk dan swatch varian",group:"konten",icon:"fa-swatchbook"},{key:"vouchers",label:"Voucher & Promo",desc:"Buat kode voucher diskon dan promo belanja",group:"konten",icon:"fa-ticket-simple"},{key:"banners",label:"Banner Promosi",desc:"Kelola gambar dan video slider beranda toko",group:"konten",icon:"fa-images"},{key:"rewards",label:"Program Hadiah Poin",desc:"Kelola katalog hadiah penukaran poin member",group:"konten",icon:"fa-gift"},{key:"reviews",label:"Ulasan Pelanggan",desc:"Moderasi ulasan dan testimoni produk pembeli",group:"konten",icon:"fa-star"},{key:"faqs",label:"Tanya Jawab / Q&A",desc:"Kelola jawaban pertanyaan umum pembeli",group:"konten",icon:"fa-circle-question"},{key:"changelog",label:"Log Pembaruan Sistem",desc:"Melihat riwayat update sistem toko",group:"konten",icon:"fa-code-branch"},{key:"reports",label:"Pusat Laporan & Keuangan",desc:"Laporan terpadu penjualan, stok, laba rugi, utang piutang, dan perpajakan",group:"sensitif",icon:"fa-chart-pie"},{key:"view_reports",label:"Laporan Finansial & Laba",desc:"Lihat omset, total HPP terjual, margin & laba bersih toko",group:"sensitif",icon:"fa-chart-line"},{key:"tax",label:"Pajak & Keuangan (PPN)",desc:"Laporan PPN, neraca keuangan, dan laba rugi resmi",group:"sensitif",icon:"fa-file-invoice-dollar"},{key:"banks",label:"Rekening Bank & QRIS",desc:"Ubah nomor rekening toko dan QRIS tujuan pembayaran",group:"sensitif",icon:"fa-building-columns"},{key:"settings",label:"Pengaturan Utama Toko",desc:"Konfigurasi nama toko, GPS maps, tarif ongkir, & sistem",group:"sensitif",icon:"fa-gear"},{key:"cashiers",label:"Kelola Staf & Hak Akses",desc:"Daftarkan staf baru, atur jabatan, & ubah batasan hak akses",group:"sensitif",icon:"fa-users-gear"},{key:"backup_sync",label:"Pusat Data & Backup Cloud",desc:"Cadangkan data toko, ekspor database, & sinkronisasi cloud",group:"sensitif",icon:"fa-cloud-arrow-up"}],vt={[V.CASHIER]:{pos:!0,orders:!1,products:!1,suppliers:!1,purchases:!1,piutang:!1,customers:!1,categories:!1,brands:!1,colors:!1,vouchers:!1,banners:!1,rewards:!1,reviews:!1,faqs:!1,changelog:!1,expenses:!1,stock_opname:!1,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[V.ADMIN]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},manager:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!0,view_reports:!0,tax:!0,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[V.OWNER]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,reports:!0,view_reports:!0,tax:!0,banks:!0,settings:!0,cashiers:!0,backup_sync:!0}};let $e=null;const Ie=()=>{if($e)return $e;try{const e=sessionStorage.getItem("freshmart_staff_profile");if(e)return $e=JSON.parse(e),$e}catch{}return null},on=e=>{$e=e;try{e?sessionStorage.setItem("freshmart_staff_profile",JSON.stringify(e)):sessionStorage.removeItem("freshmart_staff_profile")}catch{}},rn=()=>{$e=null;try{sessionStorage.removeItem("freshmart_staff_profile")}catch{}},_e=()=>{const e=Xe.currentUser;if(e&&e.uid===ie)return!0;const t=Ie();if(t){const a=String(t.role||"").toLowerCase();if(a==="owner"||t.uid===ie)return!0;if(a==="cashier"||a==="kasir"||a==="staff")return!1}const s=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");if((window.isAdm||window.__localIsAdm)&&s&&!t)return!0;try{const a=sessionStorage.getItem("pos_cashier_session");if(a){const n=JSON.parse(a),o=String(n.role||"").toLowerCase();if(o==="owner"||n.uid===ie)return!0;if(o==="cashier"||o==="kasir"||o==="staff")return!1}}catch{}return!1},ln=()=>{if(_e())return!0;if(ha())return!1;const e=Ie();return e?.role===V.ADMIN||String(e?.role||"").toLowerCase()==="admin"},ha=()=>{if(_e())return!1;const e=Ie();if(e){const t=String(e.role||"").toLowerCase();if(t==="owner"||e.uid===ie)return!1;if(t==="cashier"||t==="kasir")return!0}try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const s=JSON.parse(t),a=String(s.role||"").toLowerCase();if(a==="owner"||s.uid===ie)return!1;if(a==="cashier"||a==="kasir"||a==="staff")return!0}}catch{}return!1},ya=e=>{if(_e())return!0;const t=Ie();if(t){if(t.isActive===!1)return!1;const s=String(t.role||"").toLowerCase();if(s===V.OWNER||s==="owner")return!0;if(s===V.CASHIER||s==="cashier"||s==="kasir")return e==="pos";if(t.permissions){if(typeof t.permissions[e]<"u")return t.permissions[e]===!0;if(e==="reports"&&(t.permissions.view_reports===!0||t.permissions.tax===!0)||(e==="view_reports"||e==="tax")&&t.permissions.reports===!0)return!0}return(vt[t.role]||vt[V.ADMIN])[e]===!0}try{const s=sessionStorage.getItem("pos_cashier_session");if(s){const a=JSON.parse(s),n=String(a.role||"").toLowerCase();if(n===V.OWNER||n==="owner"||a.uid===ie)return!0;if(n===V.CASHIER||n==="cashier"||n==="kasir")return e==="pos"}}catch{}return window.isAdm||window.__localIsAdm?["banks","settings","cashiers","backup_sync"].includes(e)?Xe.currentUser?.uid===ie:!0:!1},kt=()=>{if(typeof window<"u"&&(window.curViewName==="view-pos-cashier"||document.getElementById("view-pos-cashier")?.classList.contains("flex")||document.getElementById("pos-payment-modal")?.classList.contains("flex")||document.getElementById("pos-variant-sheet")?.classList.contains("flex")))try{const a=sessionStorage.getItem("pos_cashier_session");if(a){const n=JSON.parse(a),o=String(n.role||"").toLowerCase();return o===V.OWNER||o==="owner"||n.uid===ie}}catch{}if(_e())return!0;const t=Ie();if(t){const a=String(t.role||"").toLowerCase();return a===V.OWNER||a==="owner"||t.uid===ie?!0:a===V.CASHIER||a==="cashier"||a==="kasir"?!1:ya("view_reports")}const s=Xe.currentUser;return!!(s&&s.uid===ie||window.isAdm||window.__localIsAdm)},dn=e=>{switch(e){case V.OWNER:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-2xs">
                <i class="fa-solid fa-crown text-[9px] text-amber-500"></i>
                <span>Owner</span>
            </span>`;case V.ADMIN:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shadow-2xs">
                <i class="fa-solid fa-shield-halved text-[9px]"></i>
                <span>Admin Toko</span>
            </span>`;case V.CASHIER:default:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                <i class="fa-solid fa-cash-register text-[9px]"></i>
                <span>Kasir POS</span>
            </span>`}};typeof window<"u"&&(window.ROLES=V,window.PERMISSION_DEFINITIONS=nn,window.ROLE_PRESETS=vt,window.getActiveStaff=Ie,window.setActiveStaff=on,window.clearActiveStaff=rn,window.isOwnerUser=_e,window.isAdminUser=ln,window.isCashierUser=ha,window.hasPermission=ya,window.canViewHpp=kt,window.getRoleBadgeHtml=dn);let he="invoice",va=!1;const ct=e=>{va=e},W=(e,t=!1)=>{if(!e)return"-";try{const s=e.toDate?e.toDate():new Date(e);if(isNaN(s.getTime()))return"-";const a={day:"2-digit",month:"short",year:"numeric"};return t&&(a.hour="2-digit",a.minute="2-digit"),s.toLocaleDateString("id-ID",a)}catch{return"-"}},Gt=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(2).replace(/\.?0+$/,"")},be=(e="w-16 h-16")=>p.store?.logo&&(p.store.logo.includes("http")||p.store.logo.includes("data:"))?`<img loading="eager" src="${i(p.store.logo)}" class="${e} object-contain shrink-0">`:`<div class="${e} primary-bg flex items-center justify-center rounded-xl text-white shrink-0"><i class="fa-solid fa-store text-2xl"></i></div>`,pt=(e="font-mono text-xs")=>{const s=(Array.isArray(p.banks)?p.banks:[]).filter(a=>a&&(a.bankName||a.bank||a.bankAccount||a.number||a.account));if(s.length>0)return s.map(a=>{const n=a.bankName||a.bank||"BANK",o=a.bankAccount||a.number||a.account||"-",r=a.bankOwner||a.name||a.owner||p.store?.name||"Toko Putri";return`
            <div class="${e} flex items-center justify-between gap-2 border-b border-slate-200/60 pb-1.5 last:border-b-0 last:pb-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="font-bold text-slate-900 uppercase">${i(n)}:</span>
                    <span class="font-bold text-blue-700 tracking-wide font-mono select-all">${i(o)}</span>
                </div>
                <div class="text-[10.5px] text-slate-500 font-sans truncate max-w-[140px] text-right" title="${i(r)}">
                    a.n <span class="font-semibold text-slate-700">${i(r)}</span>
                </div>
            </div>`}).join("");if(p.store?.bankName&&(p.store?.bankAccount||p.store?.bankNumber)){const a=p.store.bankName,n=p.store.bankAccount||p.store.bankNumber,o=p.store.bankOwner||p.store.name||"Toko Putri";return`
        <div class="${e} flex items-center justify-between gap-2">
            <div class="flex items-center gap-1.5 flex-wrap">
                <span class="font-bold text-slate-900 uppercase">${i(a)}:</span>
                <span class="font-bold text-blue-700 tracking-wide font-mono select-all">${i(n)}</span>
            </div>
            <div class="text-[10.5px] text-slate-500 font-sans truncate max-w-[140px] text-right">
                a.n <span class="font-semibold text-slate-700">${i(o)}</span>
            </div>
        </div>`}return`
    <div class="text-[11px] text-slate-600 bg-slate-100 p-2 rounded-lg border border-slate-200">
        <p class="font-semibold text-slate-800"><i class="fa-solid fa-building-columns text-blue-600 mr-1"></i> Rekening Resmi Toko:</p>
        <p class="mt-0.5">Konfirmasi transfer via WhatsApp Resmi: <b class="font-mono text-emerald-600">${i(p.store?.wa||p.store?.phone||"-")}</b></p>
    </div>`},Wt=({docTitle:e,docNumber:t,docDate:s})=>`
    <div class="flex justify-between items-center border-b-2 border-slate-800 pb-2.5 mb-4 text-xs font-semibold select-none">
        <div class="flex items-center gap-2.5">
            ${be("w-8 h-8")}
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
    `,Vt=(e,t,s)=>`
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
    `,ue=({docTitle:e,docNumber:t,docDate:s,kopHtml:a,metaHtml:n,tableHeaderHtml:o,rows:r=[],tableClass:l="w-full text-left border-collapse mb-4 text-xs",summaryHtml:c="",extraBlocksHtml:d="",signaturesHtml:y="",singlePageMax:f=6,itemsFirstPage:b=6,itemsMiddlePage:u=14,itemsLastPage:g=6})=>{const m=r.length;if(m<=f)return[`
        <div class="a4-page" data-page="1" data-total-pages="1">
            <div class="a4-page-body flex-1 flex flex-col">
                ${a}
                ${n||""}
                <table class="${l}">
                    <thead>${o}</thead>
                    <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${r.join("")}</tbody>
                </table>
                ${c||""}
                ${d||""}
                ${y||""}
            </div>
            ${Vt(1,1,e)}
        </div>
        `];const N=[],C=[],I=r.slice(0,b);C.push(I);let R=b;for(;R<m;){const x=m-R;if(x<=g)C.push(r.slice(R)),R=m;else{const S=Math.min(u,x);C.push(r.slice(R,R+S)),R+=S}}const A=C.length;return C.forEach((x,S)=>{const h=S+1,k=h===1,B=h===A;let M="";k?M=`
            ${a}
            ${n||""}
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${x.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${h+1}...
            </div>
            `:B?M=`
            ${Wt({docTitle:e,docNumber:t,docDate:s})}
            ${x.length>0?`
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${x.join("")}</tbody>
            </table>`:""}
            ${c||""}
            ${d||""}
            ${y||""}
            `:M=`
            ${Wt({docTitle:e,docNumber:t,docDate:s})}
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${x.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${h+1}...
            </div>
            `,N.push(`
        <div class="a4-page" data-page="${h}" data-total-pages="${A}">
            <div class="a4-page-body flex-1 flex flex-col">
                ${M}
            </div>
            ${Vt(h,A,e)}
        </div>
        `)}),N},cn=(e,t=null)=>{if(he=e,e==="po"){const u=p.purchases||[],g=u.find(M=>String(M.id)===String(t))||(window.currentActivePoId?u.find(M=>String(M.id)===String(window.currentActivePoId)):u[0]);if(!g){typeof window.showToast=="function"&&window.showToast("Data PO tidak ditemukan!");return}se("doc-modal-title","Preview Purchase Order (PO)");const m=be("w-16 h-16"),N=W(g.date||g.createdAt),C=g.poNumber||g.id,I=g.paymentType==="tempo"?`Tempo ${g.tempoDays||14} Hari (Jatuh Tempo: ${W(g.tempoDueDate)})`:g.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai",R=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${m}
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
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${N}</p>
                <p class="text-xs font-bold mt-1 text-[var(--color-primary)]">Status: ${g.status==="ordered"?"DIPESAN":g.status==="received"?"DITERIMA":"SELESAI"}</p>
            </div>
        </div>
        `,A=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Kepada Rekanan / Supplier:</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${i(g.supplierName||"Supplier")}</p>
                ${g.supplierPhone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(g.supplierPhone)}</p>`:""}
                ${g.supplierAddress?`<p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${i(g.supplierAddress)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan & Pembayaran:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Termin Pembayaran:</span> <b class="text-slate-900">${I}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tujuan Pengiriman:</span> <b class="text-slate-900">${i(p.store?.name||"Gudang Utama Toko")}</b></p>
                ${g.notes?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${i(g.notes)}</p>`:""}
            </div>
        </div>
        `,x=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Modal (HPP)</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `,S=(g.items||[]).map((M,T)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${T+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(M.name)}
                ${M.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(M.variantName)}</span>`:""}
                ${M.sku?`<span class="text-slate-400 text-[9.5px] font-mono block mt-0.5">SKU: ${i(M.sku)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${Gt(M.qty)} <span class="text-[10px] font-normal text-slate-500">${i(M.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${P(M.unitPrice)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${P(Math.round((parseFloat(M.qty)||0)*(parseFloat(M.unitPrice)||0)))}</td>
        </tr>
        `),h=`
        <div class="flex justify-end mb-6 mt-2">
            <div class="w-80 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk:</span><span class="font-bold text-slate-800">${P(g.subtotal)}</span></div>
                ${g.discount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Potongan Diskon:</span><span>-${P(g.discount)}</span></div>`:""}
                ${g.shippingFee>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim:</span><span>+${P(g.shippingFee)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL ORDER (PO):</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${P(g.total)}</span>
                </div>
            </div>
        </div>
        `,k=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-6 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Dipesan Oleh (Purchasing):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Diterima &amp; Disetujui Oleh:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(g.supplierName||"Rekanan / Supplier")}</span>
            </div>
        </div>
        `,B=ue({docTitle:"Purchase Order",docNumber:`#${C}`,docDate:N,kopHtml:R,metaHtml:A,tableHeaderHtml:x,rows:S,summaryHtml:h,signaturesHtml:k,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});fe(B);return}if(e==="stock_opname"){const u=p.stockOpnameHistory||[],g=u.find(T=>String(T.id)===String(t)||String(T.soNumber)===String(t))||u[0];if(!g){typeof window.showToast=="function"&&window.showToast("Data Berita Acara Stock Opname tidak ditemukan!");return}se("doc-modal-title","Preview Berita Acara Stock Opname");const m=be("w-16 h-16"),N=W(g.date,!0),C=g.soNumber||g.id,I=typeof kt=="function"?kt():!1,R=g.items||[],A=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${m}
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
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${N}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Auditor: <b class="text-slate-900">${i(g.auditorName||"Staf Auditor")}</b></p>
            </div>
        </div>
        `,x=`
        <div class="grid grid-cols-4 gap-3 mb-5">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Total Diperiksa</span>
                <span class="text-lg font-black text-slate-800 font-mono">${g.totalItemsAudited||0}</span>
                <span class="text-[10px] text-slate-500 block">Item Produk</span>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Item Selisih</span>
                <span class="text-lg font-black ${g.totalWithDiff>0?"text-amber-600":"text-emerald-600"} font-mono">${g.totalWithDiff||0}</span>
                <span class="text-[10px] text-slate-500 block">Disesuaikan</span>
            </div>
            <div class="bg-rose-50 p-3 rounded-xl border border-rose-200 text-center">
                <span class="text-[9px] font-black uppercase text-rose-500 block tracking-wider">Total Kurang (Loss)</span>
                <span class="text-lg font-black text-rose-600 font-mono">−${g.totalLossUnits||0}</span>
                <span class="text-[10px] text-rose-500 block">${I?"−"+P(g.totalLossRp||0):"Pcs"}</span>
            </div>
            <div class="bg-amber-50 p-3 rounded-xl border border-amber-200 text-center">
                <span class="text-[9px] font-black uppercase text-amber-600 block tracking-wider">Total Lebih (Surplus)</span>
                <span class="text-lg font-black text-amber-600 font-mono">+${g.totalSurplusUnits||0}</span>
                <span class="text-[10px] text-amber-600 block">${I?"+"+P(g.totalSurplusRp||0):"Pcs"}</span>
            </div>
        </div>
        `,S=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Hasil Fisik</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Selisih</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Alasan &amp; Keterangan</th>
            ${I?'<th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Dampak HPP</th>':'<th class="py-2.5 px-3 rounded-tr-xl text-right w-16">Satuan</th>'}
        </tr>
        `,h=R.length===0?['<tr><td colspan="7" class="py-8 text-center text-slate-500 italic">Semua stok fisik barang dalam kondisi berimbang (100% Sesuai / Selisih 0).</td></tr>']:R.map((T,z)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${z+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${i(T.productName)}
                ${T.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${i(T.variantName)}</span>`:""}
                ${T.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(T.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center font-mono text-slate-600">${T.systemStock} ${i(T.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${T.physicalStock} ${i(T.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-bold font-mono ${T.diff<0?"text-rose-600":"text-amber-600"}">
                ${T.diff<0?`−${Math.abs(T.diff)}`:`+${T.diff}`}
            </td>
            <td class="py-2 px-3 text-[10.5px]">
                <span class="font-bold text-slate-800">${i(T.reason==="salah_hitung"?"Koreksi Kasir":T.reason==="rusak"?"Barang Rusak":T.reason==="hilang"?"Barang Hilang":T.reason==="kadaluarsa"?"Expired":T.reason==="bonus"?"Bonus Supplier":T.reason)}</span>
                ${T.notes?`<span class="text-slate-500 block italic">"${i(T.notes)}"</span>`:""}
            </td>
            ${I?`
                <td class="py-2 px-3 text-right font-mono font-bold ${T.diff<0?"text-rose-600":"text-amber-600"}">
                    ${T.diff<0?"−":"+"}${P(Math.abs(T.diffValueHpp||0))}
                </td>`:`
                <td class="py-2 px-3 text-right text-slate-500">${i(T.unit||"pcs")}</td>
            `}
        </tr>
        `),k=g.notes?`
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs mb-5 text-slate-700">
            <b class="text-slate-900">Catatan Auditor:</b> ${i(g.notes)}
        </div>`:"",B=`
        <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Pemeriksa / Auditor:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(g.auditorName||"Petugas Auditor")}</span>
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
        `,M=ue({docTitle:"Berita Acara Stock Opname",docNumber:`#${C}`,docDate:N,kopHtml:A,metaHtml:x,tableHeaderHtml:S,rows:h,extraBlocksHtml:k,signaturesHtml:B,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});fe(M);return}if(e==="stock_opname_worksheet"){se("doc-modal-title","Preview Lembar Kerja Hitung Fisik (Worksheet)");const u=be("w-14 h-14"),g=W(new Date),m=p.products||[],N=[];m.forEach(h=>{!h||h.id==null||(h.variants&&h.variants.length>0?h.variants.forEach(k=>{N.push({name:h.name,variantName:k.name,sku:k.sku||h.sku||"",category:h.category||"Umum",unit:h.unit||"pcs",systemStock:parseFloat(k.stock)||0})}):N.push({name:h.name,variantName:"",sku:h.sku||"",category:h.category||"Umum",unit:h.unit||"pcs",systemStock:parseFloat(h.stock)||0}))});const C=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3">
                ${u}
                <div>
                    <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${i(p.store?.slogan||"Pusat Alat Teknik & Bangunan")}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${i(p.store?.address||"")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-wider text-slate-900 uppercase">LEMBAR KERJA AUDIT</h2>
                <h3 class="font-bold text-xs tracking-widest text-amber-600 uppercase">STOCK OPNAME FISIK RAK</h3>
                <p class="text-xs font-medium text-slate-500 mt-1">Tanggal Cetak: <b>${g}</b></p>
                <p class="text-xs font-medium text-slate-500">Total Item: <b>${N.length} Baris</b></p>
            </div>
        </div>
        `,I=`
        <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[10px] text-slate-600 mb-4 flex items-center justify-between">
            <span><b>Petunjuk:</b> Hitung fisik barang di rak/gudang secara teliti. Tulis angka aktual pada kolom <b>HASIL FISIK</b> dan beri catatan bila ada barang rusak/cacat.</span>
        </div>
        `,R=`
        <tr class="border-b-2 border-slate-800 text-[9.5px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">Cek</th>
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">No</th>
            <th class="py-2 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi Varian</th>
            <th class="py-2 px-2 border-r border-slate-700 w-28">Kategori / Rak</th>
            <th class="py-2 px-2 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2 px-2 text-center w-28 border-r border-slate-700 bg-amber-900/60">HASIL FISIK</th>
            <th class="py-2 px-3 text-left w-36">Kondisi &amp; Catatan</th>
        </tr>
        `,A=N.map((h,k)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200"><span class="inline-block w-3.5 h-3.5 border border-slate-400 rounded-sm"></span></td>
            <td class="py-2 px-2 text-center font-mono text-slate-400 border-r border-slate-200">${k+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 border-r border-slate-200 uppercase">
                ${i(h.name)}
                ${h.variantName?`<span class="bg-slate-100 text-slate-700 px-1 rounded text-[8.5px] border border-slate-300 ml-1 font-semibold">${i(h.variantName)}</span>`:""}
                ${h.sku?`<span class="text-slate-400 font-mono text-[8.5px] block">SKU: ${i(h.sku)}</span>`:""}
            </td>
            <td class="py-2 px-2 text-[10px] text-slate-600 border-r border-slate-200">
                ${i(h.category)}
            </td>
            <td class="py-2 px-2 text-center font-mono font-bold text-slate-600 border-r border-slate-200">
                ${h.systemStock} ${i(h.unit)}
            </td>
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200 bg-amber-50/40">
                <span class="inline-block w-20 h-5 border-b-2 border-slate-400"></span>
            </td>
            <td class="py-2 px-3 text-[10px] text-slate-400">
                <span class="inline-block w-full h-5 border-b border-slate-200"></span>
            </td>
        </tr>
        `),S=ue({docTitle:"Lembar Kerja Audit Rak",docNumber:`TOTAL ${N.length} ITEM`,docDate:g,kopHtml:C,metaHtml:I,tableHeaderHtml:R,rows:A,tableClass:"w-full text-left border-collapse mb-4 text-[11px]",signaturesHtml:`
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
        `,singlePageMax:16,itemsFirstPage:15,itemsMiddlePage:20,itemsLastPage:14});fe(S);return}if(e==="tempo_invoice"){const u=t||window.cVOrd;let m=(window.cachedPiutangOrders||[]).find(F=>String(F.orderId)===String(u))||(window.gOrds||[]).find(F=>String(F.orderId)===String(u));if(!m&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(u)&&(m=window.lastPrintedOrder),!m){typeof window.showToast=="function"&&window.showToast("Data nota tagihan piutang tidak ditemukan!");return}se("doc-modal-title","Preview Nota Tagihan Piutang (Tempo)");const N=be("w-16 h-16"),C=W(m.dateString||m.timestamp),I=parseFloat(m.payment?.tempoBalance)||0,R=m.payment?.tempoPenaltyRate!==void 0?parseFloat(m.payment.tempoPenaltyRate):1,A=m.payment?.tempoPenaltyStopped===!0;let x=0;const S=m.payment?.tempoDueDate||0;let h=0,k=0,B=!1,M=!1;const T=Date.now();S>0&&(T>S?(h=Math.floor((T-S)/(24*60*60*1e3)),h>0&&(B=!0)):(k=Math.ceil((S-T)/(24*60*60*1e3)),k<=3&&(M=!0))),A?x=parseFloat(m.payment?.tempoFixedPenalty)||0:B&&(x=R/100*I*h);const z=I+x,v=m.payment?.installments||[],L=v.reduce((F,pe)=>F+(parseFloat(pe.amount)||0),0),K=m.payment?.grandTotal||I+L,D=m.payment?.paymentStatus==="lunas"||I<=0,E=!!(m.payment?.isPaylater||m.isPaylater||m.payment?.subMethod==="paylater");let H=E?"PAYLATER BERJALAN":"TEMPO BERJALAN",ee="text-blue-600 bg-blue-50 border-blue-200";D?(H="LUNAS SEPENUHNYA",ee="text-emerald-600 bg-emerald-50 border-emerald-300"):B?(H=`TERLAMBAT ${h} HARI`,ee="text-rose-600 bg-rose-50 border-rose-300"):M&&(H=`JATUH TEMPO H-${k<=0?"0":k}`,ee="text-amber-600 bg-amber-50 border-amber-300");const te=pt("font-mono text-xs"),ae=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${N}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(p.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(p.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">${E?"NOTA PUTRI PAYLATER":"NOTA TAGIHAN PIUTANG"}</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(m.orderId)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tgl Transaksi: ${C}</p>
                <div class="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${ee}">
                    ${i(H)}
                </div>
            </div>
        </div>
        `,ot=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ditujukan Kepada (Debitur / Pelanggan):</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-0.5">${i(m.customer?.name||"Pelanggan")}</p>
                ${m.customer?.wa||m.customer?.phone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> +${i(m.customer.wa||m.customer.phone)}</p>`:""}
                <p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${i(m.customer?.address||"Alamat di toko / pelanggan tempo")}</p>
                ${m.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${i(m.customer.note)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan Jatuh Tempo:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tanggal Jatuh Tempo:</span> <b class="text-slate-900 font-mono">${W(S)}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Sistem Pembayaran:</span> <b class="${E?"text-emerald-700 font-bold":"text-slate-900"} uppercase">${E?"Putri PayLater Member VIP":"Tempo / Bertahap"}</b></p>
                ${E?`<p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tenor Cicilan:</span> <b class="text-emerald-800 font-bold uppercase">${m.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":m.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)"}</b></p>`:""}
                ${B?`<p class="text-xs font-bold text-rose-600 mb-1"><span class="text-slate-500">Status:</span> Lewat ${h} Hari (Denda ${R}%/hari)</p>`:""}
                <p class="text-xs font-semibold text-slate-700"><span class="text-slate-500">Kasir / Admin:</span> <b class="text-slate-900 uppercase">${i(m.cashierName||"Kasir Toko")}</b></p>
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
        `,Te=(m.items||[]).map((F,pe)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${pe+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(F.name)}
                ${F.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(F.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${Gt(F.qty)} <span class="text-[10px] font-normal text-slate-500">${i(F.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${P(F.effectivePrice||F.price)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${P(F.subtotal||Math.round((parseFloat(F.qty)||0)*(parseFloat(F.effectivePrice||F.price)||0)))}</td>
        </tr>
        `);let xe="",ne=0,Re="-",rt=1;if(E&&Array.isArray(m.payment?.paylaterSchedule)&&m.payment.paylaterSchedule.length>0){let F=0,pe=!1;const ka=m.payment.paylaterSchedule.map((J,Pa)=>{const Nt=J.installmentIndex||J.installmentNo||J.installmentNumber||J.month||Pa+1,It=parseFloat(J.pokok||J.principal)||0,Rt=parseFloat((J.adminFee||0)+(J.serviceFee||0))||0,lt=parseFloat(J.total||J.totalMonthly||J.totalInstallment)||It+Rt;F+=lt;const Ot=F,Ge=J.dueDate||0,Et=J.dueDateFormatted||J.dueDateStr||(Ge?W(Ge):"-");let We="";if(L>=Ot)We='<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-300">✓ LUNAS</span>';else if(pe)We='<span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200">BULAN DEPAN</span>';else{pe=!0,rt=Nt;const Ta=Math.max(0,Ot-L);ne=Math.min(Ta,lt),Re=Et,We=Ge&&T>Ge?'<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 border border-rose-300">⚠️ JATUH TEMPO</span>':'<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">★ WAJIB BULAN INI</span>'}return`
                <tr class="hover:bg-slate-50">
                    <td class="py-2 px-3 text-center text-slate-800 font-bold">Bulan Ke-${Nt}</td>
                    <td class="py-2 px-3 font-mono font-medium text-slate-700 text-center">${Et}</td>
                    <td class="py-2 px-3 text-right text-slate-600 font-mono">${P(It)}</td>
                    <td class="py-2 px-3 text-right text-slate-500 font-mono">${P(Rt)}</td>
                    <td class="py-2 px-3 text-right font-black font-mono text-slate-900">${P(lt)}</td>
                    <td class="py-2 px-3 text-center">${We}</td>
                </tr>`}).join("");xe=`
            <div class="mb-5">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                        <i class="fa-solid fa-calendar-check text-emerald-600"></i> Tabel Rencana Angsuran Bulanan (${m.payment?.paylaterMonths||1}x Tenor):
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
                        ${ka}
                    </tbody>
                </table>
            </div>`}const Oe=`
        ${xe}
        ${v.length>0?`
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
                    ${v.map((F,pe)=>`
                    <tr class="hover:bg-slate-50">
                        <td class="py-1.5 px-3 text-center text-slate-500">${pe+1}</td>
                        <td class="py-1.5 px-3 text-slate-700">${W(F.date)}</td>
                        <td class="py-1.5 px-3 uppercase text-slate-600 font-bold">${i(F.method||"Tunai")}</td>
                        <td class="py-1.5 px-3 text-right font-bold text-emerald-600">+ ${P(F.amount)}</td>
                        <td class="py-1.5 px-3 text-slate-500 text-[11px] font-sans">${i(F.note||"-")}</td>
                    </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>`:""}
        `,ze=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran Toko Putri:
                </h4>
                <div class="space-y-1.5 pt-0.5">${te}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi bukti transfer: <b>${i(p.store?.wa||p.store?.phone||"-")}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Harap mencantumkan Nomor Nota (#${i(m.orderId)}) pada berita transfer.</p>
                </div>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Awal:</span><span class="font-bold text-slate-800">${P(K)}</span></div>
                ${E?`<div class="flex justify-between text-emerald-600 font-bold"><span>Limit PayLater Terpakai:</span><span>${P(m.payment?.paylaterUsed||K-(m.payment?.tempoDp||m.payment?.dp||0))}</span></div>`:""}
                ${E&&m.payment?.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater:</span><span class="font-bold">+${P(m.payment.paylaterAdminFee)}</span></div>`:""}
                ${E&&m.payment?.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan:</span><span class="font-bold">+${P(m.payment.paylaterServiceFee)}</span></div>`:""}
                ${(parseFloat(m.payment?.tempoDp||m.payment?.dp)||0)>0?`<div class="flex justify-between text-slate-600"><span>Uang Muka (DP Dibayar):</span><span class="font-bold">${P(m.payment?.tempoDp||m.payment?.dp||0)}</span></div>`:""}
                ${L>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Masuk:</span><span>-${P(L)}</span></div>`:""}
                
                ${E&&ne>0&&ne<I?`
                <!-- KOTAK HIGHLIGHT ANGSURAN BULAN INI -->
                <div class="p-2.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 space-y-0.5">
                    <div class="flex justify-between items-center text-[9.5px] font-black uppercase tracking-wider text-amber-800">
                        <span>Angsuran Bulan Ini (Termin Ke-${rt}):</span>
                        <span class="font-mono text-[9px] bg-amber-200/80 px-1.5 py-0.5 rounded">Jatuh Tempo: ${Re}</span>
                    </div>
                    <div class="flex justify-between items-center text-sm font-black font-mono pt-0.5">
                        <span>Wajib Dibayar Sekarang:</span>
                        <span class="text-amber-900 text-base font-black">${P(ne)}</span>
                    </div>
                </div>
                <div class="flex justify-between text-slate-500 text-[11px]">
                    <span>Sisa Termin Bulan Berikutnya:</span>
                    <span class="font-mono font-bold">${P(Math.max(0,I-ne))}</span>
                </div>
                `:""}

                <div class="flex justify-between text-slate-700 font-bold"><span>${E?"Total Sisa Pokok (Semua Tenor):":"Sisa Pokok Piutang:"}</span><span>${P(I)}</span></div>
                ${x>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Denda Keterlambatan:</span><span>+${P(x)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>${E?"TOTAL PELUNASAN PENUH:":"SISA WAJIB BAYAR:"}</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${P(D?0:z)}</span>
                </div>
            </div>
        </div>
        `,qe=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Yang Berhutang (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(m.customer?.name||"Pelanggan")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Kasir Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,it=ue({docTitle:E?"Nota Putri PayLater":"Nota Tagihan Piutang",docNumber:`#${m.orderId}`,docDate:C,kopHtml:ae,metaHtml:ot,tableHeaderHtml:ce,rows:Te,extraBlocksHtml:Oe,summaryHtml:ze,signaturesHtml:qe,singlePageMax:5,itemsFirstPage:5,itemsMiddlePage:12,itemsLastPage:4});fe(it);return}if(e==="tempo_customer_ledger"){const u=String(t||"").trim(),m=(window.cachedPiutangOrders||[]).filter(H=>{const ee=String(H.customer?.phone||H.customer?.wa||"").replace(/\D/g,""),te=String(H.customer?.name||"").toLowerCase().trim(),ae=u.replace(/\D/g,"");return!!(ae.length>=8&&ee.includes(ae)||te&&u.toLowerCase().includes(te))});if(m.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada nota piutang aktif untuk pelanggan ini.");return}const N=m[0].customer||{},C=N.name||"Pelanggan",I=N.wa||N.phone||"-";se("doc-modal-title",`Kartu Piutang: ${C}`);const R=be("w-16 h-16"),A=W(Date.now());let x=0,S=0,h=0,k=0,B=0;const M=m.map((H,ee)=>{const te=parseFloat(H.payment?.tempoBalance)||0,ae=H.payment?.tempoPenaltyRate!==void 0?parseFloat(H.payment.tempoPenaltyRate):1,ot=H.payment?.tempoPenaltyStopped===!0;let ce=0;const Te=H.payment?.tempoDueDate||0;let xe=0,ne=!1;const Re=Date.now();Te>0&&Re>Te&&(xe=Math.floor((Re-Te)/(24*60*60*1e3)),xe>0&&(ne=!0)),ot?ce=parseFloat(H.payment?.tempoFixedPenalty)||0:ne&&(ce=ae/100*te*xe);const Oe=(H.payment?.installments||[]).reduce((it,F)=>it+(parseFloat(F.amount)||0),0),ze=H.payment?.grandTotal||te+Oe,qe=te+ce;return x+=ze,S+=Oe,h+=te,k+=ce,B+=qe,`
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="py-2.5 px-3 text-center font-mono text-slate-500">${ee+1}</td>
                <td class="py-2.5 px-3 font-mono font-bold text-slate-800">#${i(H.orderId)}</td>
                <td class="py-2.5 px-3 font-medium text-slate-600">${W(H.dateString||H.timestamp)}</td>
                <td class="py-2.5 px-3 font-mono ${ne?"text-rose-600 font-bold":"text-slate-700"}">${W(Te)} ${ne?`<span class="text-[9.5px] text-rose-500">(+${xe}h)</span>`:""}</td>
                <td class="py-2.5 px-3 text-right font-mono text-slate-600">${P(ze)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-600 font-bold">${P(Oe)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-rose-600">${ce>0?P(ce):"-"}</td>
                <td class="py-2.5 px-3 text-right font-mono font-black text-slate-900">${P(qe)}</td>
            </tr>
            `}),T=pt("font-mono text-xs"),z=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${R}
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
                <p class="text-xs font-semibold text-slate-500 mt-0.5">Dicetak: ${A}</p>
                <span class="inline-block mt-1.5 px-3 py-0.5 bg-amber-50 text-amber-700 border border-amber-300 rounded-full text-[11px] font-black uppercase tracking-wider">
                    ${m.length} NOTA BELUM LUNAS
                </span>
            </div>
        </div>
        `,v=`
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Informasi Debitur / Pelanggan:</h3>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="text-[11px] text-slate-500">Nama Pelanggan / Badan:</p>
                    <p class="font-bold text-base text-slate-900 uppercase">${i(C)}</p>
                </div>
                <div>
                    <p class="text-[11px] text-slate-500">Nomor WhatsApp / HP:</p>
                    <p class="font-mono font-bold text-base text-emerald-600">+${i(I)}</p>
                </div>
            </div>
        </div>
        `,L=`
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
        `,K=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Transfer Resmi Pelunasan:
                </h4>
                <div class="space-y-1 pt-0.5">${T}</div>
                <p class="text-[9.5px] text-slate-500 pt-1.5 border-t border-slate-200">Kartu piutang ini mencatat seluruh tagihan aktif per tanggal cetak.</p>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Keseluruhan:</span><span class="font-bold text-slate-800">${P(x)}</span></div>
                <div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Diterima (-):</span><span>-${P(S)}</span></div>
                <div class="flex justify-between text-slate-700 font-bold"><span>Total Sisa Pokok Piutang:</span><span>${P(h)}</span></div>
                ${k>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Total Denda (+):</span><span>+${P(k)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL AKUMULASI PIUTANG:</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${P(B)}</span>
                </div>
            </div>
        </div>
        `,D=`
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
        `,E=ue({docTitle:"Kartu Piutang Pelanggan",docNumber:"STATEMENT OF ACCOUNT",docDate:A,kopHtml:z,metaHtml:v,tableHeaderHtml:L,rows:M,summaryHtml:K,signaturesHtml:D,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});fe(E);return}const s=t||window.cVOrd,a=(window.gOrds||[]).find(u=>String(u.orderId)===String(s))||(window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(s)?window.lastPrintedOrder:null);if(!a){typeof window.showToast=="function"&&window.showToast("Data pesanan tidak ditemukan!");return}se("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const n=a.dateString?new Date(a.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"",r=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${be("w-16 h-16")}
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
    `,c=Array.isArray(a.items)?a.items:Array.isArray(a.cart)?a.cart:[];if(e==="invoice"){const u=`
        <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
            <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Produk &amp; Varian</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Sat.</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total</th>
        </tr>
        `,g=c.map((A,x)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${x+1}</td>
            <td class="py-2.5 px-3 font-bold flex items-center gap-1.5">
                ${i(A.name)} 
                ${A.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${i(A.variantName)}</span>`:""}
                ${A.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${i(A.colorCode)};"></span>`:""}
                ${A.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${i(A.poTime)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${parseFloat(A.qty)} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(A.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${P(A.effectivePrice)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${P(A.effectivePrice*parseFloat(A.qty))}</td>
        </tr>
        `);let m="";if((a.pointsEarned>0||a.finalMemberPoints!==void 0&&a.finalMemberPoints!==null)&&(m+=`
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 flex items-center gap-4">
                <div class="w-8 h-8 rounded-lg bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
                ${a.pointsEarned>0?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-sm text-amber-700">+${a.pointsEarned}</p></div>`:""}
                ${a.finalMemberPoints!==void 0&&a.finalMemberPoints!==null?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Member</p><p class="font-bold text-sm text-amber-700">${a.finalMemberPoints}</p></div>`:""}
            </div>`),a.claimedReward&&(m+=`
            <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-3 mb-4 flex items-center justify-between gap-4">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                    <div>
                        <p class="text-[9px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${a.claimedReward.pointsCost} Poin)</p>
                        <p class="font-bold text-xs text-violet-800 uppercase">${i(a.claimedReward.name)}</p>
                    </div>
                </div>
                <span class="text-[9.5px] font-bold px-2.5 py-1 rounded-lg bg-violet-600 text-white uppercase tracking-wider">${i(a.claimedReward.status==="ready"?"SERTAKAN PENGIRIMAN":"KLAIM RESMI")}</span>
            </div>`),a.payment?.method==="tempo")if(!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater")){const x=a.payment?.paylaterMonths||1,S=a.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":a.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)",h=Array.isArray(a.payment?.paylaterSchedule)&&a.payment.paylaterSchedule.length>0;let k="";if(h){Math.max(0,parseFloat(a.payment?.tempoBalance)||0);const M=(a.payment?.installments||[]).reduce((v,L)=>v+(parseFloat(L.amount)||0),0);let T=0,z=!1;k=`
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
                                ${a.payment.paylaterSchedule.map((v,L)=>{const K=v.installmentIndex||v.installmentNo||v.installmentNumber||v.month||L+1,D=parseFloat(v.pokok||v.principal)||0,E=parseFloat((v.adminFee||0)+(v.serviceFee||0))||0,H=parseFloat(v.total||v.totalMonthly||v.totalInstallment)||D+E;T+=H;const ee=v.dueDate||0,te=v.dueDateFormatted||v.dueDateStr||(ee?W(ee):"-");let ae="";return M>=T?ae='<span class="px-1.5 py-0.2 rounded text-[8px] font-bold uppercase bg-emerald-100 text-emerald-700 border border-emerald-300">✓ LUNAS</span>':z?ae='<span class="px-1.5 py-0.2 rounded text-[8px] font-medium uppercase bg-slate-100 text-slate-500">MENDATANG</span>':(z=!0,ae='<span class="px-1.5 py-0.2 rounded text-[8px] font-black uppercase bg-amber-100 text-amber-800 border border-amber-300">★ BULAN INI</span>'),`
                                    <tr>
                                        <td class="py-1 px-2 font-bold text-slate-800 text-center font-sans">Bulan Ke-${K}</td>
                                        <td class="py-1 px-2 text-slate-600 text-center">${te}</td>
                                        <td class="py-1 px-2 text-right text-slate-600">${P(D)}</td>
                                        <td class="py-1 px-2 text-right text-slate-500">${P(E)}</td>
                                        <td class="py-1 px-2 font-black text-right text-emerald-800">${P(H)}</td>
                                        <td class="py-1 px-2 text-center font-sans">${ae}</td>
                                    </tr>`}).join("")}
                            </tbody>
                        </table>
                    </div>`}m+=`
                <div class="mb-4 border border-emerald-200 bg-emerald-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-emerald-800 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-handshake text-emerald-600 mr-1"></i> Putri PayLater (${S}):</h4>
                    <p class="text-[9.5px] text-emerald-700 font-semibold leading-relaxed">
                        Sistem pembayaran cicilan resmi Toko Putri tanpa biaya tersembunyi. Jatuh Tempo Pertama: ${a.payment.tempoDueDate?W(a.payment.tempoDueDate):"-"}.
                        ${a.payment.paylaterMonthlyInstallment?` Angsuran: <b>${P(a.payment.paylaterMonthlyInstallment)} / bulan</b> (${x}x).`:""}
                    </p>
                    ${k}
                </div>`}else m+=`
                <div class="mb-4 border border-pink-200 bg-pink-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-pink-700 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo:</h4>
                    <p class="text-[9.5px] text-pink-600 font-semibold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${a.payment.tempoDueDate?W(a.payment.tempoDueDate):"-"}). Keterlambatan dikenakan denda sesuai regulasi toko.</p>
                </div>`;const C=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran Toko Putri:
                </h4>
                <div class="space-y-1.5 pt-0.5">${pt("font-mono text-xs")}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi pembayaran via WhatsApp: <b>${i(p.store?.wa||p.store?.phone||"-")}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Terima kasih atas transaksi Anda di ${i(p.store?.name||"Toko Putri")}.</p>
                </div>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk</span><span class="font-mono">${P(a.payment?.subtotal)}</span></div>
                ${a.payment?.shippingCost?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim</span><span class="font-mono">${P(a.payment.shippingCost)}</span></div>`:""}
                ${a.payment?.shippingDiscount?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Ongkir</span><span class="font-mono">-${P(a.payment.shippingDiscount)}</span></div>`:""}
                ${a.payment?.productDiscount?`<div class="flex justify-between text-rose-600 font-bold"><span>Diskon Produk</span><span class="font-mono">-${P(a.payment.productDiscount)}</span></div>`:""}
                ${a.payment?.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater</span><span class="font-mono">+${P(a.payment.paylaterAdminFee)}</span></div>`:""}
                ${a.payment?.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan</span><span class="font-mono">+${P(a.payment.paylaterServiceFee)}</span></div>`:""}
                ${(()=>{if(!((a.payment?.ppnEnabled||a.payment?.ppnShowZero||a.payment?.ppnRate===0||a.payment?.ppnAmount&&a.payment.ppnAmount>0)&&(p.store?.ppnEnabled||a.payment?.ppnEnabled)))return"";const x=a.payment?.ppnType==="inclusive",S=a.payment?.ppnRate!==void 0?a.payment.ppnRate:p.store?.ppnRate||0,h=a.payment?.ppnAmount||0,k=a.payment?.ppnLabel||`${x?"Termasuk PPN":"PPN"} (${S}%)`,B=(a.payment?.subtotal||0)-(a.payment?.productDiscount||0)+(a.payment?.shippingCost||0)-(a.payment?.shippingDiscount||0),M=a.payment?.dppAmount!==void 0?a.payment.dppAmount:x&&S>0?Math.round(B*100/(100+S)):Math.max(0,B);return`
                    <div class="flex justify-between text-slate-600"><span>DPP</span><span class="font-mono">${P(M)}</span></div>
                    <div class="flex justify-between text-amber-600 font-bold"><span>${k}</span><span class="font-mono">${h>0?(x?"":"+")+P(h):"Rp 0"}</span></div>
                    `})()}
                
                <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-2 shadow-xs">
                    <span class="font-bold text-xs uppercase tracking-widest">Grand Total</span>
                    <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${P(a.payment?.grandTotal)}</span>
                </div>
                ${a.payment?.method==="tempo"?`
                <div class="flex justify-between text-emerald-600 font-bold"><span>${a.payment?.isPaylater||a.payment?.subMethod==="paylater"?"Limit Terpakai / DP":"Uang Muka (DP)"}</span><span class="font-mono">${P(a.payment?.tempoDp||0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-2.5 rounded-xl mt-1 border border-rose-200">
                    <span class="font-bold text-xs uppercase tracking-widest">${a.payment?.isPaylater||a.payment?.subMethod==="paylater"?"Sisa Tagihan PayLater":"Sisa Tagihan"}</span>
                    <span class="font-mono text-sm font-black tracking-tight">${P(a.payment?.tempoBalance||0)}</span>
                </div>
                ${(a.payment?.isPaylater||a.payment?.subMethod==="paylater")&&a.payment?.paylaterMonthlyInstallment?`
                <div class="flex justify-between text-[11px] text-emerald-700 font-bold">
                    <span>Angsuran per Bulan (${a.payment?.paylaterMonths||1}x)</span>
                    <span class="font-mono font-black">${P(a.payment.paylaterMonthlyInstallment)}/bln</span>
                </div>
                `:""}
                `:""}
            </div>
        </div>
        `,I=`
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
        `,R=ue({docTitle:a.payment?.method==="tempo"?"Proforma Invoice":"Faktur Invoice",docNumber:`#${a.orderId}`,docDate:n,kopHtml:r,metaHtml:l,tableHeaderHtml:u,rows:g,extraBlocksHtml:m,summaryHtml:C,signaturesHtml:I,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:12,itemsLastPage:5});fe(R);return}const d=`
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Nama &amp; Spesifikasi Barang</th>
        <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Satuan</th>
        <th class="py-2.5 px-3 rounded-tr-xl text-center w-24">Ceklis Gudang</th>
    </tr>
    `,y=c.map((u,g)=>`
    <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3 text-center font-mono text-slate-500">${g+1}</td>
        <td class="py-2.5 px-3 font-bold uppercase flex items-center gap-1.5">
            ${i(u.name)} 
            ${u.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${i(u.variantName)}</span>`:""}
            ${u.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${i(u.colorCode)};"></span>`:""}
            ${u.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${i(u.poTime)}</span>`:""}
        </td>
        <td class="py-2.5 px-3 text-center font-bold text-base text-slate-800">${parseFloat(u.qty)}</td>
        <td class="py-2.5 px-3 text-center text-slate-500 font-bold uppercase text-[11px]">${i(u.unit||"pcs")}</td>
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
    `,b=ue({docTitle:"Surat Jalan Pengiriman",docNumber:`#${a.orderId}`,docDate:n,kopHtml:r,metaHtml:l,tableHeaderHtml:d,rows:y,signaturesHtml:f,singlePageMax:8,itemsFirstPage:8,itemsMiddlePage:16,itemsLastPage:9});fe(b)},pn=()=>{const e=window.cart||[];if(!e||e.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}he="sph";const t="SPH-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.floor(1e3+Math.random()*9e3),s=W(new Date),a=W(new Date(Date.now()+14*24*60*60*1e3));se("doc-modal-title","Surat Penawaran Harga (SPH)");const n=be("w-16 h-16"),o=typeof window.getEffP=="function"?window.getEffP:m=>m.price||0;let r=0;const l=e.map((m,N)=>{const C=parseFloat(m.qty)||1,I=o(m),R=C*I;return r+=R,`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${N+1}</td>
            <td class="py-2.5 px-3 font-bold">
                ${i(m.name)}
                ${m.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${i(m.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${C} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(m.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${P(I)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${P(R)}</td>
        </tr>
        `}),c=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${n}
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
    `,d=`
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
    `,y=`
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
            <div class="flex justify-between px-3"><span>Subtotal Estimasi</span><span class="font-mono">${P(r)}</span></div>
            <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-1 shadow-xs">
                <span class="font-bold text-xs uppercase tracking-widest">Total Penawaran</span>
                <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${P(r)}</span>
            </div>
        </div>
    </div>
    `,b=`
    <div class="border border-slate-200 bg-slate-50 p-3 rounded-xl text-left mb-4">
        <h4 class="font-bold text-slate-700 text-[10.5px] uppercase tracking-widest mb-1"><i class="fa-solid fa-circle-info mr-1 text-[var(--color-primary)]"></i> Syarat &amp; Ketentuan Penawaran:</h4>
        <ul class="text-[10px] text-slate-600 space-y-0.5 list-disc list-inside">
            <li>Harga penawaran berlaku selama <b>14 hari kalender</b> terhitung sejak tanggal dokumen diterbitkan.</li>
            <li>Ketersediaan dan fluktuasi stok dapat berubah sewaktu-waktu sampai diterbitkannya konfirmasi pesanan (PO) resmi.</li>
            <li>Biaya pengiriman dan penanganan disesuaikan dengan kuantitas dan jarak tempuh lokasi pengiriman.</li>
        </ul>
    </div>
    `,u=`
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
    `,g=ue({docTitle:"Surat Penawaran Harga",docNumber:`#${t}`,docDate:s,kopHtml:c,metaHtml:d,tableHeaderHtml:y,rows:l,summaryHtml:f,extraBlocksHtml:b,signaturesHtml:u,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:5});fe(g)},fe=e=>{const t=w("doc-paper-content");if(!t)return;t.innerHTML=e.join("");const s=e.length,a=w("doc-page-count-badge");a&&(a.textContent=`${s} Halaman A4`),mn(s)},mn=(e=1)=>{const t=w("doc-preview-modal"),s=w("doc-preview-modal-box");t&&t.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),et(t,s),Dt()},Dt=()=>{const e=w("doc-paper-scroll-area"),t=w("doc-paper-content"),s=w("doc-paper-wrapper");if(!e||!t||!s)return;const a=794,n=window.innerWidth<640?12:32,o=e.clientWidth-n,r=Math.min(1,Math.max(.2,o/a));t.style.transform=`translateX(-50%) scale(${r})`;const l=t.offsetHeight||t.scrollHeight;s.style.height=l*r+48+"px"};window.addEventListener("resize",()=>{const e=w("doc-preview-modal");e&&!e.classList.contains("hidden")&&Dt()});const un=(e=!1)=>{const t=w("doc-preview-modal"),s=w("doc-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{ke(t,s)}):ke(t,s))},fn=()=>{const e=w("doc-paper-content"),t=e?e.innerHTML:"";if(!t){typeof window.showToast=="function"&&window.showToast("Tidak ada dokumen yang dicetak!");return}if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){let o=w("a4-print-section");o||(o=document.createElement("div"),o.id="a4-print-section",document.body.appendChild(o)),o.innerHTML=t,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500);return}const s=window.open("","_blank"),n=`<!DOCTYPE html>
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
</html>`;if(!s){let o=document.getElementById("a4-print-fallback-iframe");o||(o=document.createElement("iframe"),o.id="a4-print-fallback-iframe",o.style.position="fixed",o.style.right="0",o.style.bottom="0",o.style.width="0",o.style.height="0",o.style.border="0",o.style.opacity="0",document.body.appendChild(o));const r=o.contentWindow.document;r.open(),r.write(n),r.close(),setTimeout(()=>{try{o.contentWindow.focus(),o.contentWindow.print()}catch(l){console.warn("[DocPrint] Fallback iframe print error:",l)}},650);return}s.document.open(),s.document.write(n),s.document.close()},bn=async e=>{if(!va){ct(!0),Ye(e==="image"?"Membuat Gambar HD...":"Menyusun Dokumen PDF A4...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{mt(),ct(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const t=w("doc-paper-content");if(!t)throw new Error("Elemen dokumen tidak ditemukan.");let s=Array.from(t.querySelectorAll(".a4-page"));s.length===0&&(s=[t]);const a=window.cVOrd||Date.now().toString(36).toUpperCase(),n=`${he.toUpperCase()}_${a}`,o=async r=>{const l=document.createElement("div");l.style.position="fixed",l.style.top="-9999px",l.style.left="-9999px",l.style.width="794px",l.style.height="1123px",l.style.backgroundColor="#ffffff",l.style.overflow="hidden",l.style.zIndex="-9999";const c=r.cloneNode(!0);c.style.margin="0 auto",c.style.boxShadow="none",c.style.border="none",c.style.borderRadius="0",c.style.transform="none",c.style.width="794px",c.style.height="1123px",c.style.minHeight="1123px",c.style.maxHeight="1123px",c.style.overflow="hidden",l.appendChild(c),document.body.appendChild(l);const d=Array.from(c.querySelectorAll("img"));await Promise.all(d.map(f=>f.complete?Promise.resolve():new Promise(b=>{f.addEventListener("load",b,{once:!0}),f.addEventListener("error",b,{once:!0})}))),await new Promise(f=>setTimeout(f,200));const y=await html2canvas(l,{scale:2,useCORS:!0,backgroundColor:"#ffffff",width:794,height:1123,windowWidth:794,windowHeight:1123});return document.body.removeChild(l),y};if(e==="image")if(s.length===1){const l=(await o(s[0])).toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(l,`${n}.png`,"image/png");else{const c=document.createElement("a");c.download=`${n}.png`,c.href=l,c.click()}typeof window.showToast=="function"&&window.showToast("Gambar A4 Presisi Berhasil Disimpan!")}else{for(let r=0;r<s.length;r++){Ye(`Menyimpan Gambar Halaman ${r+1} dari ${s.length}...`);const c=(await o(s[r])).toDataURL("image/png",1),d=`${n}_Hal_${r+1}.png`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(c,d,"image/png");else{const y=document.createElement("a");y.download=d,y.href=c,y.click()}await new Promise(y=>setTimeout(y,250))}typeof window.showToast=="function"&&window.showToast(`Berhasil menyimpan ${s.length} gambar halaman A4!`)}else{const r=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,l=new r({orientation:"portrait",unit:"mm",format:"a4"});for(let c=0;c<s.length;c++){Ye(`Menyusun PDF Hal ${c+1} dari ${s.length}...`);const y=(await o(s[c])).toDataURL("image/jpeg",.95);c>0&&l.addPage("a4","portrait"),l.addImage(y,"JPEG",0,0,210,297,void 0,"FAST")}window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"?window.AndroidNativeApp.saveOrShareFile(l.output("datauristring"),`${n}.pdf`,"application/pdf"):l.save(`${n}.pdf`),typeof window.showToast=="function"&&window.showToast(`File PDF Standar A4 (${s.length} Halaman) Berhasil Disimpan!`)}}catch(t){console.error("Export Error: ",t),typeof window.showToast=="function"&&window.showToast(t&&t.message?`Gagal: ${t.message}`:"Gagal memproses dokumen.")}finally{mt(),ct(!1)}}};window.openDocPreview=cn;window.openCartSPHPreview=pn;window.fitDocPreview=Dt;window.closeDocPreviewModal=un;window.printDocA4=fn;window.exportDocFile=bn;export{Fa as $,ks as A,kn as B,vs as C,se as D,io as E,bs as F,Qt as G,mo as H,xs as I,ro as J,ge as K,Ga as L,Wa as M,Ts as N,Qa as O,qn as P,Kn as Q,Un as R,G as S,gs as T,Ka as U,ja as V,On as W,Oa as X,Ba as Y,Ha as Z,Ea as _,p as a,En as a$,Ua as a0,Cn as a1,Ln as a2,Dn as a3,Nn as a4,In as a5,Rn as a6,tt as a7,na as a8,oo as a9,lo as aA,Wn as aB,oa as aC,Ss as aD,ts as aE,ns as aF,Zn as aG,js as aH,Us as aI,Vn as aJ,Hn as aK,_ as aL,kt as aM,as as aN,Tn as aO,Sn as aP,Y as aQ,Os as aR,co as aS,po as aT,hn as aU,so as aV,Pe as aW,rs as aX,vn as aY,Pn as aZ,Ra as a_,no as aa,Ma as ab,ys as ac,La as ad,ya as ae,Ie as af,_e as ag,V as ah,rn as ai,Za as aj,eo as ak,Xa as al,to as am,es as an,ao,os as ap,ie as aq,on as ar,Jt as as,Xn as at,Bn as au,ss as av,Yn as aw,ye as ax,uo as ay,Ht as az,sa as b,_a as b0,za as b1,qa as b2,Va as b3,Ja as b4,Ya as b5,Gn as b6,is as b7,yn as b8,Mn as b9,Fn as ba,jn as bb,_n as bc,zn as bd,Qn as be,vt as bf,nn as bg,dn as bh,Yt as c,Da as d,w as e,P as f,hs as g,aa as h,i,Jn as j,oe as k,Ye as l,Ps as m,mt as n,et as o,Na as p,re as q,at as r,ta as s,ke as t,j as u,ve as v,An as w,$n as x,Ia as y,Xe as z};
