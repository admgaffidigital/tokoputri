const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js","assets/module-pos-BvrokM-f.js","assets/module-member-CX7oC3EF.js","assets/module-faq-Cvo4miiV.js"])))=>i.map(i=>d[i]);
import{f as je}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const Ua="modulepreload",_a=function(e){return"/"+e},Gt={},sa=function(t,a,s){let o=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),d=r?.nonce||r?.getAttribute("nonce");o=Promise.allSettled(a.map(c=>{if(c=_a(c),c in Gt)return;Gt[c]=!0;const p=c.endsWith(".css"),y=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${y}`))return;const b=document.createElement("link");if(b.rel=p?"stylesheet":Ua,p||(b.as="script"),b.crossOrigin="",b.href=c,d&&b.setAttribute("nonce",d),document.head.appendChild(b),p)return new Promise((w,m)=>{b.addEventListener("load",w),b.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(r){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=r,window.dispatchEvent(d),!d.defaultPrevented)throw r}return o.then(r=>{for(const d of r||[])d.status==="rejected"&&n(d.reason);return t().catch(n)})},za={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const qa=typeof window<"u"&&window.FIREBASE_CONFIG?window.FIREBASE_CONFIG:za;je.apps.length||je.initializeApp(qa);const we=je.firestore(),mt=je.auth();typeof window<"u"&&(window.firebase=je,window.db=we,window.auth=mt);try{we.settings({ignoreUndefinedProperties:!0,experimentalAutoDetectLongPolling:!0,merge:!0})}catch{}typeof window<"u"&&(window.addEventListener("online",()=>{try{we.enableNetwork().catch(()=>{})}catch{}}),window.addEventListener("offline",()=>{try{we.disableNetwork().catch(()=>{})}catch{}}));let Ga=null;const So=()=>{sa(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{Ga=je.analytics()}catch{}}).catch(()=>{})},xe="K2ijSERTT2dg27yYGTEgn6XHSnW2",Va={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"pill",brandStyle:"logo",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showHeroSlide:!0,heroMascotImg:"/putri_mascot_anim.gif",heroBadgeText:"Siap Melayani",heroWelcomeTag:"SELAMAT DATANG",heroTitle:"",heroSubtitle:"",showRewardCatalog:!0,showScrollTopButton:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,paylater:{enabled:!0,minOrder:2e4,maxOrder:1e7,noticeText:"Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.",tenors:{"30d":{enabled:!0,label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:"flat",adminFeeValue:0,serviceFeeType:"flat",serviceFeeValue:0},"2m":{enabled:!0,label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:"flat",adminFeeValue:1500,serviceFeeType:"percent",serviceFeeValue:1.5},"3m":{enabled:!0,label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:"flat",adminFeeValue:2500,serviceFeeType:"percent",serviceFeeValue:2.5}}},terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},subscription:{status:"active",plan:"pro_managed",expiresAt:null,allowGraceDays:7,storeCode:"PUTRI",clientName:"Pemilik Toko",developerContact:"6281234567890",developerName:"Developer / Technical Partner"},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],productOrder:[],suppliers:[],purchases:[],expenses:[],stockOpnameHistory:[],salesReturns:[],vendorReturns:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let u=JSON.parse(JSON.stringify(Va)),oa=[],na=[],_=[];try{const e=localStorage.getItem("freshmart_cart");e&&(oa=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(na=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(_=JSON.parse(e)||[])}catch{}let Wa={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},Ja=null,Ya=null,Qa=null,Za="Semua Produk",Xa="Semua Jenis",es="Semua Merek",ts="",as="newest",ss="grid",os=1,ns=12,rs="orders",is="",ls=null,ds=null,cs=0,ps=[],us=[],ms=[],fs=1,Se=[],bs=null,ws=null,xs=null,Ne=[],gs=[],Le=null,hs=null,ys=!1,vs="all",ks="today",Ps=null,Ts=null;const $o=e=>{Ps=e},Ao=e=>{u=e},Mo=e=>{oa=e},Co=e=>{na=e},Lo=e=>{_=e},Do=e=>{Wa=e},No=e=>{Ja=e},Ro=e=>{Ya=e},Io=e=>{Qa=e},Oo=e=>{Za=e},Eo=e=>{Xa=e},Bo=e=>{es=e},Ho=e=>{ts=e},Fo=e=>{as=e},Ko=e=>{ss=e},jo=e=>{os=e},Uo=e=>{ns=e},_o=e=>{rs=e},zo=e=>{is=e},qo=e=>{ls=e},Go=e=>{ds=e},Vo=e=>{cs=e},Wo=e=>{ps=e},Jo=e=>{us=e},Yo=e=>{ms=e},Qo=e=>{fs=e},Zo=e=>{Se=e},Xo=e=>{Ne=e},en=e=>{gs=e},Vt=e=>{Le=e},tn=e=>{hs=e},an=e=>{ys=e},sn=e=>{Ts=e},on=e=>{vs=e},nn=e=>{ks=e},rn=e=>{bs=e},ln=e=>{ws=e},dn=e=>{xs=e};let ra=!1;if(typeof window<"u"){const e=()=>{ra=!0,window.__hasUserInteracted=!0};["pointerdown","touchstart","mousedown","keydown"].forEach(t=>{window.addEventListener(t,e,{capture:!0,once:!0})}),window.__hasUserInteracted=!1}const Rt=()=>typeof navigator<"u"&&navigator.userActivation?navigator.userActivation.hasBeenActive:!!(ra||typeof window<"u"&&window.__hasUserInteracted);typeof window<"u"&&(window.checkUserGesture=Rt);const Ie=(e="light")=>{try{const t=window.Capacitor?.Plugins?.Haptics;if(t){e==="light"||e==="selection"?t.impact({style:"LIGHT"}).catch(()=>{}):e==="medium"?t.impact({style:"MEDIUM"}).catch(()=>{}):e==="heavy"?t.impact({style:"HEAVY"}).catch(()=>{}):e==="success"?t.notification({type:"SUCCESS"}).catch(()=>{}):e==="warning"?t.notification({type:"WARNING"}).catch(()=>{}):e==="error"&&t.notification({type:"ERROR"}).catch(()=>{});return}if(typeof navigator<"u"&&typeof navigator.vibrate=="function"){if(!Rt())return;e==="light"||e==="selection"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="heavy"?navigator.vibrate(45):e==="success"?navigator.vibrate([15,30,20]):e==="warning"?navigator.vibrate([30,40,30]):e==="error"&&navigator.vibrate([40,50,40,50,40])}}catch{}};typeof window<"u"&&(window.triggerHaptic=Ie);const Ss=e=>{if(e)switch(e){case"product-modal":typeof window.closeProductModal=="function"&&window.closeProductModal();break;case"pos-variant-sheet":typeof window.closePOSVariantSheet=="function"&&window.closePOSVariantSheet();break;case"variant-preview-modal":typeof window.closeVariantPreviewModal=="function"&&window.closeVariantPreviewModal();break;case"custom-confirm-modal":typeof window.closeConfirm=="function"&&window.closeConfirm();break;case"scanner-modal":typeof window.closeCameraScanner=="function"&&window.closeCameraScanner();break;case"modal-tempo-detail":typeof window.closeTempoDetailModal=="function"&&window.closeTempoDetailModal();break;case"modal-tempo-payment":typeof window.closeTempoPaymentModal=="function"&&window.closeTempoPaymentModal();break;case"modal-tempo-penalty":typeof window.closeTempoPenaltyModal=="function"&&window.closeTempoPenaltyModal();break;case"modal-supplier-detail":typeof window.closeSupplierDetailModal=="function"&&window.closeSupplierDetailModal();break;case"modal-supplier-form":typeof window.closeSupplierFormModal=="function"&&window.closeSupplierFormModal();break;case"modal-po-form":typeof window.closePurchaseFormModal=="function"&&window.closePurchaseFormModal();break;case"modal-po-detail":typeof window.closePurchaseDetailModal=="function"&&window.closePurchaseDetailModal();break;case"modal-po-payment":typeof window.closePurchasePaymentModal=="function"&&window.closePurchasePaymentModal();break;case"modal-po-product-picker":typeof window.closePurchasePickerModal=="function"&&window.closePurchasePickerModal();break;case"quick-menu-modal":case"quickmenu-modal":typeof window.closeQuickMenuModal=="function"&&window.closeQuickMenuModal();break;case"category-modal":typeof window.closeCategoryModal=="function"&&window.closeCategoryModal();break;case"brand-modal":typeof window.closeBrandModal=="function"&&window.closeBrandModal();break;case"quick-variant-modal":typeof window.closeQuickVariantSheet=="function"&&window.closeQuickVariantSheet();break;case"shopping-guide-modal":typeof window.closeShoppingGuideModal=="function"&&window.closeShoppingGuideModal();break;case"pos-login-modal":typeof window.closePOSLoginModal=="function"&&window.closePOSLoginModal();break;case"admin-order-modal":typeof window.closeOrderDetailModal=="function"&&window.closeOrderDetailModal();break;case"order-detail-modal":typeof window.closeCustomerOrderDetailModal=="function"&&window.closeCustomerOrderDetailModal();break;case"modal-client-tempo-pay":typeof window.closeClientPaymentModal=="function"&&window.closeClientPaymentModal();break;default:{const t=document.getElementById(e);if(t){const a=t.querySelector('button[onclick*="close"], .fa-xmark')?.closest("button");if(a)a.click();else if(typeof window.closeModalAnim=="function"){const s=t.querySelector('.modal-bottom-sheet, [id$="-box"]')||t.firstElementChild;window.closeModalAnim(t,s)}else t.classList.add("hidden","opacity-0")}}}};let se=null,_e=null,tt=0,Wt=0,at=0,Te=!1,Jt=0;const $s=()=>{if(typeof document>"u")return;document.addEventListener("touchstart",t=>{if(t.touches.length!==1)return;const a=t.touches[0],s=a.target.closest('[id*="modal"], [id*="sheet"]');if(!s||s.classList.contains("hidden")||s.classList.contains("opacity-0")||!(s.classList.contains("items-end")||!!a.target.closest(".modal-bottom-sheet")||s.classList.contains("modal-bottom-sheet")))return;let n=a.target.closest(".modal-bottom-sheet")||a.target.closest('[id$="-box"]');if(n||(n=a.target.closest('[id$="-content"]')),!n||a.target.closest('input, select, textarea, button, a, [role="button"], table, .no-drag'))return;const r=!!a.target.closest(".overflow-y-auto, .overflow-x-auto, .scroll-content, .custom-scrollbar"),d=n.getBoundingClientRect(),c=a.clientY-d.top;(a.target.closest(".pull-indicator")||!r&&c<=55)&&(se=n,_e=s,tt=a.clientY,Wt=a.clientX,at=tt,Te=!1,Jt=Date.now())},{passive:!0}),document.addEventListener("touchmove",t=>{if(!se||t.touches.length!==1)return;const a=t.touches[0];at=a.clientY;const s=at-tt,o=Math.abs(a.clientX-Wt);if(!Te&&o>Math.abs(s)){se=null;return}const n=se.classList.contains("overflow-y-auto")?se:se.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar");if(!(n&&n.scrollTop>5&&!Te)){if(s>0){if(Te=!0,t.cancelable&&t.preventDefault(),se.style.transform=`translateY(${s}px)`,se.style.transition="none",_e){const r=Math.max(.2,1-s/400);_e.style.backgroundColor=`rgba(15, 23, 42, ${.8*r})`}}else if(s<0&&Te){const r=s*.2;se.style.transform=`translateY(${r}px)`,se.style.transition="none"}}},{passive:!1});const e=()=>{if(!se)return;const t=se,a=_e,s=at-tt,o=Math.max(1,Date.now()-Jt),n=s/o;se=null,_e=null,Te&&(s>80||n>.45&&s>30)?(Ie("light"),t.style.transition="transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",t.style.transform="translateY(100%)",a&&(a.style.transition="opacity 0.25s ease",a.style.opacity="0"),setTimeout(()=>{t.style.transform="",t.style.transition="",a&&(a.style.backgroundColor="",a.style.opacity=""),Ss(a?a.id:"")},250)):Te&&(t.style.transition="transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)",t.style.transform="",a&&(a.style.transition="background-color 0.28s ease",a.style.backgroundColor=""),setTimeout(()=>{t.style.transition=""},300)),Te=!1};document.addEventListener("touchend",e,{passive:!0}),document.addEventListener("touchcancel",e,{passive:!0})};let Yt=0;const As=()=>{typeof document>"u"||document.addEventListener("click",e=>{const t=Date.now();if(t-Yt<50)return;const a=e.target.closest('button, [role="button"], a[onclick], [id*="bnav-"], .pos-add-btn, .pos-tag-chip, #pos-variant-chips button, .interactive-tap');a&&!a.disabled&&!a.classList.contains("disabled")&&(Yt=t,Ie("light"))},{passive:!0,capture:!0})};let V=null;const Ms=(e="pop")=>{try{if(typeof window>"u"||!Rt())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;V||(V=new t),V.state==="suspended"&&V.resume().catch(()=>{});const a=V.currentTime;if(e==="pop"){const s=V.createOscillator(),o=V.createGain();s.type="sine",s.frequency.setValueAtTime(340,a),s.frequency.exponentialRampToValueAtTime(560,a+.07),o.gain.setValueAtTime(.14,a),o.gain.exponentialRampToValueAtTime(.001,a+.08),s.connect(o),o.connect(V.destination),s.start(a),s.stop(a+.08)}else if(e==="success"){const s=V.createOscillator(),o=V.createOscillator(),n=V.createGain(),r=V.createGain();s.type="triangle",o.type="triangle",s.frequency.setValueAtTime(523.25,a),o.frequency.setValueAtTime(659.25,a+.09),n.gain.setValueAtTime(.12,a),n.gain.exponentialRampToValueAtTime(.001,a+.22),r.gain.setValueAtTime(.14,a+.09),r.gain.exponentialRampToValueAtTime(.001,a+.32),s.connect(n),n.connect(V.destination),o.connect(r),r.connect(V.destination),s.start(a),s.stop(a+.22),o.start(a+.09),o.stop(a+.32)}else if(e==="beep"){const s=V.createOscillator(),o=V.createGain();s.type="square",s.frequency.setValueAtTime(1040,a),o.gain.setValueAtTime(.08,a),o.gain.exponentialRampToValueAtTime(.001,a+.07),s.connect(o),o.connect(V.destination),s.start(a),s.stop(a+.07)}}catch{}};typeof window<"u"&&(window.playNativeSound=Ms);const ze=()=>{if(typeof document>"u")return;const e=document.getElementById("native-scroll-top-btn");e&&(e.classList.add("opacity-0","translate-y-3"),e.classList.add("hidden"))};typeof window<"u"&&(window.hideFloatingScrollTop=ze);const Cs=()=>{if(typeof document>"u")return;let e=document.getElementById("native-scroll-top-btn");e||(e=document.createElement("button"),e.id="native-scroll-top-btn",document.body.appendChild(e)),e.setAttribute("aria-label","Kembali ke Atas"),e.setAttribute("title","Kembali ke Atas"),e.className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 hidden opacity-0 translate-y-3 transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900/95 dark:bg-slate-800/95 text-white shadow-xl shadow-black/25 border border-slate-700/80 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_4px_20px_rgba(var(--color-primary-rgb),0.4)] hover:scale-105 active:scale-90 cursor-pointer group",e.innerHTML='<i class="fa-solid fa-arrow-up text-xs md:text-sm transition-transform duration-200 group-hover:-translate-y-0.5"></i>',e._hasClickListener||(e._hasClickListener=!0,e.addEventListener("click",()=>{Ie("light");const a=document.querySelector(".view-section:not(.hidden)");if(a){const s=a.querySelector(".scroll-content");s&&s.scrollTop>10&&s.scrollTo({top:0,behavior:"smooth"})}window.scrollTo({top:0,behavior:"smooth"})}));const t=(a,s=null)=>{if(!e)return;if(typeof window<"u"&&window.appData?.store?.showScrollTopButton===!1){ze();return}const o=document.querySelector(".view-section:not(.hidden)");if(!o||o.id!=="view-catalog"&&o.id!=="view-orders"){ze();return}if(s){const r=s.closest(".view-section");if(!r||r.id!=="view-catalog"&&r.id!=="view-orders"){ze();return}}if(document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none), [id*="dialog"]:not(.hidden), .fixed.inset-0:not(.hidden):not(.pointer-events-none):not(#native-theme-ambient)')){ze();return}a>450?(e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0","translate-y-3")})):(e.classList.add("opacity-0","translate-y-3"),setTimeout(()=>{e&&e.classList.contains("opacity-0")&&e.classList.add("hidden")},300))};window.addEventListener("scroll",()=>{t(window.scrollY||document.documentElement.scrollTop)},{passive:!0}),document.addEventListener("scroll",a=>{a.target&&a.target.classList&&a.target.classList.contains("scroll-content")&&t(a.target.scrollTop,a.target)},{passive:!0,capture:!0})},Ls=()=>{if(typeof window>"u"||typeof document>"u")return;let e=document.getElementById("native-connectivity-banner");e||(e=document.createElement("div"),e.id="native-connectivity-banner",e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] -translate-y-16 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl",document.body.appendChild(e));let t=null;const a=s=>{clearTimeout(t),Ie(s?"success":"warning"),s?(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-emerald-600 text-white border border-emerald-400/40",e.innerHTML='<i class="fa-solid fa-wifi text-xs"></i><span>Kembali Online — Terhubung</span>',t=setTimeout(()=>{e.classList.add("-translate-y-16","opacity-0")},2500)):(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-amber-500 text-slate-950 border border-amber-300/60",e.innerHTML='<i class="fa-solid fa-wifi-slash text-xs"></i><span>Mode Offline — Menggunakan Data Lokal</span>')};window.addEventListener("online",()=>a(!0)),window.addEventListener("offline",()=>a(!1))},cn=()=>{$s(),As(),Cs(),Ls()},ia=e=>{let t="";return typeof e=="object"&&e!==null?t=`${e.name||""} ${e.category||""} ${e.subCategory||""}`.toLowerCase():t=String(e||"").toLowerCase(),t.includes("cat")||t.includes("paint")||t.includes("politur")||t.includes("thinner")||t.includes("no drop")||t.includes("kuas")||t.includes("roll")?{icon:"fa-paint-roller",gradient:"linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(244, 63, 94, 0.12) 0%, transparent 70%)",textColor:"#e11d48"}:t.includes("gembok")||t.includes("kunci")||t.includes("grendel")||t.includes("slot")||t.includes("silinder")?{icon:"fa-lock",gradient:"linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(245, 158, 11, 0.12) 0%, transparent 70%)",textColor:"#d97706"}:t.includes("paku")||t.includes("baut")||t.includes("sekrup")||t.includes("mur")||t.includes("kawat")?{icon:"fa-hammer",gradient:"linear-gradient(135deg, #64748b 0%, #334155 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(100, 116, 139, 0.12) 0%, transparent 70%)",textColor:"#475569"}:t.includes("pipa")||t.includes("pvc")||t.includes("paralon")||t.includes("kran")||t.includes("sambungan")||t.includes("fitting")||t.includes("knee")||t.includes("tee")?{icon:"fa-faucet-drip",gradient:"linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(6, 182, 212, 0.12) 0%, transparent 70%)",textColor:"#0891b2"}:t.includes("semen")||t.includes("mortar")||t.includes("pasir")||t.includes("bata")||t.includes("hebel")?{icon:"fa-trowel-bricks",gradient:"linear-gradient(135deg, #ea580c 0%, #9a3412 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(234, 88, 12, 0.12) 0%, transparent 70%)",textColor:"#c2410c"}:t.includes("perkakas")||t.includes("tang")||t.includes("obeng")||t.includes("palu")||t.includes("bor")||t.includes("gerinda")||t.includes("meteran")||t.includes("gergaji")?{icon:"fa-toolbox",gradient:"linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",textColor:"#4f46e5"}:{icon:"fa-box-open",gradient:"linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(var(--color-primary-rgb), 0.12) 0%, transparent 70%)",textColor:"var(--color-primary)"}},Ds=(e,t="",a="")=>{const s=ia(e);return{id:"brand",icon:s.icon,subIcon:s.icon,label:"Produk Resmi",podGradient:s.gradient,accent:"rgba(var(--color-primary-rgb),0.1)",aura:"rgba(var(--color-primary-rgb),0.08)",shadowColor:"rgba(var(--color-primary-rgb),0.15)"}},la=e=>{if(!e||typeof e!="string")return"TP";const a=e.replace(/[^a-zA-Z0-9\s]/g," ").trim().split(/\s+/).filter(n=>n.length>0),s=a.filter(n=>/[a-zA-Z]/.test(n)),o=s.length>0?s:a;return o.length>=2?(o[0][0]+o[1][0]).toUpperCase():o.length===1?(o[0].length>=2?o[0].slice(0,2):o[0]+"P").toUpperCase():"TP"},Ns=(e,t={})=>{const a=t.size||"md",s=t.className||"",o=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk"),n=ia(e),r=la(o);return`
    <div class="pos-smart-cover cover-${a} ${s}" title="${i(o)}">
        <!-- Subtle Theme Glow -->
        <div class="cover-surface-glow" style="background:${n.bgGlow}"></div>

        <!-- Center Content: Icon Pod + Monogram -->
        <div class="cover-center">
            <div class="cover-icon-pod" style="background:${n.gradient}">
                <i class="fa-solid ${n.icon} cover-icon text-white"></i>
            </div>
            ${a==="md"||a==="lg"?`<span class="cover-monogram" style="color:${n.textColor}">${i(r)}</span>`:""}
        </div>

        <!-- Official Store Watermark -->
        ${a!=="thumb"&&a!=="sm"?`
        <div class="cover-watermark">
            <i class="fa-solid fa-store mr-1 text-[7px] opacity-75"></i><span>PUTRI UTAMA TEKNIK</span>
        </div>`:""}
    </div>`},Rs=e=>(typeof e=="object"&&e!==null?e.name:String(e||"Produk"),`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
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
    </svg>`)}`),g=e=>typeof e=="string"?document.getElementById(e):e,da=e=>{const t=g(e);t&&t.classList.remove("hidden")},ca=e=>{const t=g(e);t&&t.classList.add("hidden")},Is=(e,t,a)=>{const s=g(e);s&&s.classList.toggle(t,a)},Q=(e,t)=>{const a=g(e);a&&(a.innerText=t)},pa=(e,t)=>{const a=g(e);a&&(a.innerHTML=t)},Os=(e,t)=>{const a=g(e);a&&(a.value=t)},Es=e=>{const t=g(e);return t?t.value:""},ft=(e,t)=>{const a=typeof e=="string"?g(e):e,s=typeof t=="string"?g(t):t;a&&(a.classList.remove("hidden","pointer-events-none"),s&&s.classList.add("pointer-events-auto"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{a.classList.remove("opacity-0","pointer-events-none"),s&&(s.classList.remove("translate-y-full","sm:translate-y-10","sm:translate-y-8","translate-y-6","sm:translate-y-6","scale-95"),s.classList.add("pointer-events-auto"))})}))},Re=(e,t,a)=>{const s=typeof e=="string"?g(e):e,o=typeof t=="string"?g(t):t;if(!s){typeof a=="function"&&a();return}s.classList.add("opacity-0","pointer-events-none"),o&&(o.classList.add("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95"),o.classList.remove("pointer-events-auto")),setTimeout(()=>{s.classList.add("hidden"),typeof a=="function"&&a()},280)};typeof window<"u"&&(window.openModalAnim=ft,window.closeModalAnim=Re);const Bs=e=>{try{return localStorage.getItem(e)}catch{return null}},Hs=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},i=e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),k=e=>{const t=Number(e);if(isNaN(t)||e===null)return"Rp 0";const s=Math.abs(Math.round(t)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");return`${t<0?"-":""}Rp ${s}`},Fs=(e,t=!1)=>{const a=Number(e);if(isNaN(a)||e===null||a===0)return"Rp 0";const o=Math.abs(Math.round(a)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");return t||a<0?`(Rp ${o})`:`Rp ${o}`},Ks=e=>{if(!e)return new Date;if(e.timestamp&&typeof e.timestamp.toDate=="function")try{const o=e.timestamp.toDate();if(o instanceof Date&&!isNaN(o.getTime()))return o}catch{}if(e.createdAt&&typeof e.createdAt.toDate=="function")try{const o=e.createdAt.toDate();if(o instanceof Date&&!isNaN(o.getTime()))return o}catch{}if(e.timestamp&&typeof e.timestamp=="object"){const o=e.timestamp.seconds??e.timestamp._seconds;if(typeof o=="number"&&!isNaN(o)&&o>0)return new Date(o*1e3)}if(e.createdAt&&typeof e.createdAt=="object"){const o=e.createdAt.seconds??e.createdAt._seconds;if(typeof o=="number"&&!isNaN(o)&&o>0)return new Date(o*1e3)}const t=[e.dateMs,e.timestamp,e.createdAt,e.date];for(const o of t){if(typeof o=="number"&&!isNaN(o)&&o>0)return new Date(o>1e11?o:o*1e3);if(typeof o=="string"&&/^\d{10,13}$/.test(o.trim())){const n=Number(o.trim());return new Date(n>1e11?n:n*1e3)}}const a=[e.dateString,e.date,e.createdAt];for(const o of a)if(typeof o=="string"&&o.trim()&&o!=="[object Object]"){const n=new Date(o);if(!isNaN(n.getTime()))return n;const r=o.replace(/-/g,"/").replace("T"," ").replace(/\..*$/,""),d=new Date(r);if(!isNaN(d.getTime()))return d}const s=e.orderId||(typeof e=="string"?e:"");if(typeof s=="string"&&s.startsWith("ORD-")){const o=s.split("-");if(o.length>=2&&o[1].length>=6){const n=parseInt(o[1],36);if(!isNaN(n)&&n>15e11&&n<25e11)return new Date(n)}}return new Date},js=(e,t=null)=>{if(typeof e!="string")return e;const a=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);if(!a)return e;const s=a[1];return t==="image/gif"||e.toLowerCase().includes(".gif")||s==="1rkAFxnZDe2eLQ88kan2BeGSg56IkAEJ9"?`https://drive.google.com/uc?export=view&id=${s}`:`https://lh3.googleusercontent.com/d/${s}`},Us=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(t))return t;const a=t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return a?a[1]:null},ua=e=>{if(typeof e!="string"||!e.trim())return null;const t=e.trim(),a=Us(t);if(a)return{type:"youtube",id:a,embedUrl:`https://www.youtube.com/embed/${a}?autoplay=1&mute=1&muted=1&loop=1&playlist=${a}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const s=t.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(s&&s[1]){const o=s[1];return{type:"gdrive",id:o,streamUrl:`https://drive.google.com/uc?export=download&id=${o}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${o}`,directUrl:`https://drive.google.com/uc?export=download&id=${o}`,embedUrl:`https://drive.google.com/file/d/${o}/preview?autoplay=1`}}return{type:"direct",directUrl:t,embedUrl:t}},pn=e=>{const t=ua(e);return t?t.embedUrl:e},un=e=>{const t=ua(e);return t?t.embedUrl:e},mn=(e,t)=>typeof e!="string"||!e?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${t}`:e.includes("googleusercontent.com")&&!e.includes("=")?`${e}=${t}`:e,fn=e=>{if(!e||typeof e!="string")return!0;const t=e.trim();return!!(!t||t.includes("placehold.co"))},bn=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",wn=(e,t,a,s)=>{document.title=e||"Toko Putri";const o=(n,r,d=!1)=>{const c=d?"property":"name";let p=document.querySelector(`meta[${c}="${n}"]`);p||(p=document.createElement("meta"),p.setAttribute(c,n),document.head.appendChild(p)),p.setAttribute("content",r)};t&&o("description",t),e&&o("og:title",e,!0),t&&o("og:description",t,!0),a&&o("og:image",a,!0),s&&o("og:url",s,!0)},xn=(e,t)=>{let a=document.getElementById(e);a||(a=document.createElement("script"),a.id=e,a.type="application/ld+json",document.head.appendChild(a)),a.textContent=JSON.stringify(t)},ot=e=>{e&&Q("loader-text",e);const t=g("global-loader");t&&(t.style.opacity="1",t.style.display="flex")},$t=()=>{const e=g("global-loader");e&&(e.style.pointerEvents="none",e.style.transition="opacity 0.25s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250))},be=(e,t,a,s)=>{typeof window.showToast=="function"&&window.showToast(e,t,a,s)},gn=(e,t,a,s)=>{if(typeof window.showConfirm=="function")return window.showConfirm(e,t,a,s)},He={};typeof window<"u"&&(window.loadedScripts=He);const hn=(e,t)=>t&&t()?Promise.resolve():(He[e]||(He[e]=new Promise((a,s)=>{const o=document.createElement("script");o.src=e,o.onload=()=>a(),o.onerror=()=>{delete He[e],s(new Error("Gagal memuat: "+e))},document.head.appendChild(o)})),He[e]),ma=e=>{let t=(e||"").toString().replace(/\D/g,"");return t?(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),t):""},_s=(e,t="")=>{const a=ma(e);if(!a){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp tidak valid!");return}const s=t?encodeURIComponent(t):"",o=`https://wa.me/${a}${s?`?text=${s}`:""}`;window.AndroidNativeApp&&typeof window.AndroidNativeApp.openWhatsApp=="function"?window.AndroidNativeApp.openWhatsApp(o):window.open(o,"_blank","noopener,noreferrer")},zs=(e,t=null,a=null)=>{try{const s=(typeof t=="string"?document.querySelector(t):t)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!s)return;const o=e.getBoundingClientRect(),n=s.getBoundingClientRect(),r=document.createElement("div");r.className="flying-cart-item",a?r.innerHTML=`<img src="${a}" alt="Product" class="w-full h-full object-cover rounded-full" />`:r.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const d=o.left+o.width/2-20,c=o.top+o.height/2-20,p=n.left+n.width/2-20,y=n.top+n.height/2-20;r.style.cssText=`
            position: fixed;
            left: ${d}px;
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
        `,document.body.appendChild(r),requestAnimationFrame(()=>{const b=p-d,w=y-c;r.style.transform=`translate3d(${b}px, ${w}px, 0) scale(0.25) rotate(18deg)`,r.style.opacity="0.4"}),setTimeout(()=>{r&&r.parentNode&&r.parentNode.removeChild(r),Ie("medium");const b=document.getElementById("bottom-nav-cart-badge")||s.querySelector(".cart-count-badge");b&&(b.classList.remove("cart-bounce-pop"),b.offsetWidth,b.classList.add("cart-bounce-pop")),s.classList.remove("cart-bounce-pop"),s.offsetWidth,s.classList.add("cart-bounce-pop"),setTimeout(()=>{b&&b.classList.remove("cart-bounce-pop"),s.classList.remove("cart-bounce-pop")},600)},500)}catch(s){console.error("flyToCart error",s)}},Je=(e={})=>{if(!e||typeof e!="object")return{hasPpn:!1,ppnAmount:0,dppAmount:0,ppnRate:0,ppnType:"exclusive",isInclusive:!1,ppnLabel:"PPN",subtotal:0,shipping:0,shippingDiscount:0,productDiscount:0,pointDiscount:0,paylaterAdminFee:0,paylaterServiceFee:0,grandTotal:0,baseBeforeTax:0};const t=e.payment||{},a=typeof window<"u"&&window.appData?.store?window.appData.store:{},o=(Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[]).reduce((P,$)=>P+parseFloat($.qty||1)*(parseFloat($.effectivePrice||$.price)||0),0),n=t.subtotal!==void 0&&t.subtotal!==null?parseFloat(t.subtotal):e.subtotal!==void 0&&e.subtotal!==null?parseFloat(e.subtotal):o,r=parseFloat(t.shippingCost??e.shippingCost??0)||0,d=parseFloat(t.shippingDiscount??e.shippingDiscount??0)||0,c=parseFloat(t.productDiscount??e.productDiscount??0)||0,p=parseFloat(e.pointDiscount??t.pointDiscount??0)||0,y=parseFloat(t.paylaterAdminFee??0)||0,b=parseFloat(t.paylaterServiceFee??0)||0,w=t.grandTotal!==void 0&&t.grandTotal!==null?parseFloat(t.grandTotal):e.total!==void 0&&e.total!==null?parseFloat(e.total):e.grandTotal!==void 0&&e.grandTotal!==null?parseFloat(e.grandTotal):Math.max(0,n-c-p+r-d+y+b),m=Math.max(0,n-c-p+(r-d)+y+b);let f=t.ppnRate!==void 0&&t.ppnRate!==null&&!isNaN(parseFloat(t.ppnRate))?parseFloat(t.ppnRate):e.ppnRate!==void 0&&e.ppnRate!==null&&!isNaN(parseFloat(e.ppnRate))?parseFloat(e.ppnRate):a.ppnRate!==void 0?parseFloat(a.ppnRate):11;isNaN(f)&&(f=11);let l=t.ppnType||e.ppnType||a.ppnType||"exclusive",A=parseFloat(t.ppnAmount??e.ppnAmount??e.tax??t.tax??0);isNaN(A)&&(A=0),A<=0&&w>m+.5&&(A=Math.round(w-m),l="exclusive",f<=0&&m>0&&(f=Math.round(A/m*100)));const M=a.ppnEnabled===!0||a.ppnEnabled==="true";if(A<=0&&l==="inclusive"&&f>0&&(t.ppnEnabled===!0||M)){const P=Math.round(m*100/(100+f));A=Math.max(0,m-P)}let D=t.dppAmount!==void 0&&t.dppAmount!==null&&!isNaN(parseFloat(t.dppAmount))?parseFloat(t.dppAmount):e.dppAmount!==void 0&&e.dppAmount!==null&&!isNaN(parseFloat(e.dppAmount))?parseFloat(e.dppAmount):null;D===null&&(l==="inclusive"&&f>0?D=Math.round(m*100/(100+f)):D=m);const v=A>0||t.ppnEnabled===!0||e.ppnEnabled===!0||t.ppnShowZero===!0||t.ppnRate!==void 0&&t.ppnRate!==null&&t.ppnRate>0||t.ppnRate===0&&t.ppnEnabled!==!1||M&&t.ppnEnabled!==!1,x=l==="inclusive",S=t.ppnLabel||e.ppnLabel||a.ppnTaxLabel||`${x?"Termasuk PPN":"PPN"} (${f}%)`;return{hasPpn:v,ppnAmount:A,dppAmount:D,ppnRate:f,ppnType:l,isInclusive:x,ppnLabel:S,subtotal:n,shipping:r,shippingDiscount:d,productDiscount:c,pointDiscount:p,paylaterAdminFee:y,paylaterServiceFee:b,grandTotal:w,baseBeforeTax:m}};typeof window<"u"&&(window.normalizeWA=ma,window.openWhatsApp=_s,window.sLoad=ot,window.hLoad=$t,window.el=g,window.show=da,window.hide=ca,window.toggleCls=Is,window.setIn=Q,window.setH=pa,window.setV=Os,window.getV=Es,window.esc=i,window.fixD=js,window.fCur=k,window.fAccounting=Fs,window.parseOrderDate=Ks,window.extractOrderTaxInfo=Je,window.sL=Bs,window.ssL=Hs,window.triggerHaptic=Ie,window.flyToCartAnimation=zs);typeof window<"u"&&(window.renderProductCoverHtml=Ns,window.getProductTheme=Ds,window.getMonogram=la,window.getProductCoverSvgDataUri=Rs);const Qt={deviceType:"rawbt",deviceName:"Driver RawBT (Printer Thermal Android - Free)",deviceId:"",paperSize:"58mm",directPrint:!1,feedLines:3,autoCut:!0,openCashDrawer:!1,autoPrintOrder:!1,headerText:"",storeAddress:"",storePhone:"",footerText:"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.",footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi.",showLogo:!0,showAddress:!0,showPhone:!0,showNpwp:!0,showPoints:!0,showBarcode:!0,networkIp:"192.168.1.200:9100"},ve=e=>{switch(e){case"58mm-compact":case"58mm_30":return 30;case"80mm-compact":case"80mm_42":return 42;case"80mm":return 48;case"58mm":default:return 32}},z=()=>{try{const e=localStorage.getItem("freshmart_printer_config");if(e)return{...Qt,...JSON.parse(e)}}catch(e){console.warn("Gagal membaca konfigurasi printer lokal:",e)}return{...Qt}},Ye=e=>{try{const a={...z(),...e};return localStorage.setItem("freshmart_printer_config",JSON.stringify(a)),a}catch(t){return console.error("Gagal menyimpan konfigurasi printer:",t),z()}},qs=()=>{const e=z(),t=(n,r)=>{const d=g(n);d&&(d.checked=!!r)},a=(n,r)=>{const d=g(n);d&&(d.value=r||"")};a("printer-device-name-display",e.deviceName),a("printer-paper-size",e.paperSize),a("printer-network-ip",e.networkIp),a("printer-header-custom",e.headerText),a("printer-address-custom",e.storeAddress),a("printer-phone-custom",e.storePhone),a("printer-footer-custom",e.footerText),a("printer-policy-custom",e.footerPolicyNote),t("printer-opt-address",e.showAddress!==!1),t("printer-opt-phone",e.showPhone!==!1),t("printer-opt-npwp",e.showNpwp!==!1),t("printer-opt-points",e.showPoints),t("printer-opt-barcode",e.showBarcode),t("printer-opt-direct",e.directPrint===!0),t("printer-opt-autocut",e.autoCut!==!1),t("printer-opt-drawer",e.openCashDrawer),t("printer-opt-autoprint",e.autoPrintOrder),ba(e.deviceType||"rawbt");const s=g("printer-settings-modal"),o=g("printer-settings-modal-box");s&&s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("printerSettings"),ft(s,o)},fa=(e=!1)=>{const t=g("printer-settings-modal"),a=g("printer-settings-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("printerSettings",e,()=>{Re(t,a)}):Re(t,a))},ba=e=>{window._selectedPrinterType=e,document.querySelectorAll(".printer-type-card").forEach(s=>{if(s.getAttribute("data-type")===e){s.classList.add("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),s.classList.remove("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const n=s.querySelector(".printer-check-badge");n&&n.classList.remove("hidden")}else{s.classList.remove("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),s.classList.add("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const n=s.querySelector(".printer-check-badge");n&&n.classList.add("hidden")}});const t=g("rawbt-quick-guide-box");t&&(e==="rawbt"?t.classList.remove("hidden"):t.classList.add("hidden"));const a=g("printer-network-box");a&&(e==="network"?a.classList.remove("hidden"):a.classList.add("hidden"))},Gs=()=>{const e=(n,r="")=>{const d=g(n);return d?d.value:r},t=(n,r=!1)=>{const d=g(n);return d?d.checked:r},a=window._selectedPrinterType||"rawbt",o={deviceType:a,deviceName:e("printer-device-name-display",a==="rawbt"?"Driver RawBT (Printer Thermal Android - Free)":a==="bluetooth"?"Bluetooth POS Printer":"Printer Thermal POS"),paperSize:e("printer-paper-size","58mm"),networkIp:e("printer-network-ip","192.168.1.200:9100"),headerText:e("printer-header-custom",""),storeAddress:e("printer-address-custom",""),storePhone:e("printer-phone-custom",""),footerText:e("printer-footer-custom","Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami."),footerPolicyNote:e("printer-policy-custom","Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi."),showAddress:t("printer-opt-address",!0),showPhone:t("printer-opt-phone",!0),showNpwp:t("printer-opt-npwp",!0),showPoints:t("printer-opt-points",!0),showBarcode:t("printer-opt-barcode",!0),directPrint:t("printer-opt-direct",!1),autoCut:t("printer-opt-autocut",!0),openCashDrawer:t("printer-opt-drawer",!1),autoPrintOrder:t("printer-opt-autoprint",!1)};Ye(o),be("Pengaturan printer berhasil disimpan!"),fa()},Vs=async()=>{if(!navigator.bluetooth){be("Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.");return}try{be("Mencari printer bluetooth di sekitar...");const e=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["000018f0-0000-1000-8000-00805f9b34fb","e7810a71-73ae-499d-8c15-faa9aef0c3f2","00001101-0000-1000-8000-00805f9b34fb"]});if(e){Ye({deviceType:"bluetooth",deviceName:e.name||"Bluetooth POS Printer",deviceId:e.id});const t=g("printer-device-name-display");t&&(t.value=e.name||"Bluetooth POS Printer"),be(`Printer "${e.name||"Bluetooth POS"}" tersambung!`)}}catch(e){e.name!=="NotFoundError"&&be("Koneksi bluetooth dibatalkan atau tidak tersedia.")}},Ws=async()=>{if(!navigator.usb){be("Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.");return}try{be("Mencari printer USB...");const e=await navigator.usb.requestDevice({filters:[]});if(e){const t=(e.productName||"USB Thermal Printer")+" (USB)";Ye({deviceType:"usb",deviceName:t,deviceId:String(e.vendorId)+":"+String(e.productId)});const a=g("printer-device-name-display");a&&(a.value=t),be(`Printer USB "${t}" tersambung!`)}}catch(e){e.name!=="NotFoundError"&&be("Koneksi USB dibatalkan atau tidak ditemukan.")}},Js=()=>{if(typeof window.executeRawBTTestPrint=="function"){window.executeRawBTTestPrint();return}const e=z(),t=e.paperSize==="80mm",a=t?48:32,s=e.headerText||u.store?.name||"TOKO PUTRI",o=e.showAddress!==!1&&(e.storeAddress||u.store?.address)||"",n=e.showPhone!==!1&&(e.storePhone||u.store?.wa)||"",r=e.footerPolicyNote||"",d=t?"68mm":"44mm",c=(w,m,f=a)=>{const l=f-w.length-m.length;return w+(l>0?" ".repeat(l):" ")+m},p=new Date().toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let y=`
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${i(s)}</div>
    ${o?`<div style="text-align:center;font-size:10px;color:#475569;margin-bottom:2px;">${i(o)}</div>`:""}
    ${n?`<div style="text-align:center;font-size:11px;margin-bottom:4px;">Telp/WA: ${i(n)}</div>`:""}
    <div style="text-align:center;font-weight:bold;font-size:12px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:3px 0;margin:6px 0;">
        *** UJI COBA CETAK STRUK ***
    </div>
    <div style="white-space:pre;font-size:11px;">Tgl   : ${p}</div>
    <div style="white-space:pre;font-size:11px;">Format: Thermal ${t?"80mm (48 Kolom)":"58mm (32 Kolom)"}</div>
    <div style="white-space:pre;font-size:11px;">Koneksi: ${e.deviceType.toUpperCase()}</div>
    <div style="white-space:pre;font-size:11px;">Status : KONEKSI BERHASIL</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:11px;font-weight:bold;">${c("TES ITEM UJI COBA","HARGA",a)}</div>
    <div style="white-space:pre;font-size:10px;">${c("1x Produk Percobaan","Rp 25.000",a)}</div>
    <div style="white-space:pre;font-size:10px;">${c("2x Kertas Thermal Kasir","Rp 15.000",a)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:12px;font-weight:bold;">${c("TOTAL UJI","Rp 40.000",a)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    `;e.showPoints&&(y+=`<div style="white-space:pre;font-size:11px;">${c("Simulasi Poin Member","+10 Poin",a)}</div>`,y+='<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>'),e.showBarcode&&(y+=`<div style="text-align:center;margin:6px 0;">
            <div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*TEST-POS-${Date.now().toString().slice(-6)}*</div>
            <div style="font-size:9px;color:#333;">(BARCODE TEST OK)</div>
        </div><div style="border-bottom:1px dashed #000;margin:6px 0;"></div>`),y+=`
    <div style="text-align:center;font-size:10px;margin-top:6px;line-height:1.3;">
        ${i(e.footerText||"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.")}
    </div>
    ${r?`
    <div style="text-align:center;font-size:9px;color:#475569;margin-top:4px;border-top:1px dashed #ccc;padding-top:4px;">
        ${i(r)}
    </div>`:""}
    <div style="text-align:center;font-size:9px;font-style:italic;margin-top:4px;">
        Printer siap digunakan untuk operasional kasir Toko Putri.
    </div>
    <div style="height:25px;"></div>
    `;let b=g("thermal-print-section");if(b||(b=document.createElement("div"),b.id="thermal-print-section",document.body.appendChild(b)),b.innerHTML=`<div style="width:${d};max-width:${d};font-family:'Courier New',Courier,monospace;font-size:${t?"10.5px":"8.8px"};line-height:1.2;color:#000;background:#fff;padding:0 ${t?"2.5mm":"1.5mm"} 4mm ${t?"1mm":"0.5mm"};box-sizing:border-box;">${y}</div>`,typeof window.sendToRawBT=="function"){const w=b.innerText,m=btoa(unescape(encodeURIComponent(w)));window.sendToRawBT(m,w,y)}else window.print();be("Perintah uji cetak berhasil dikirim!")};window.getPrinterConfig=z;window.getPaperCols=ve;window.savePrinterConfig=Ye;window.openPrinterSettingsModal=qs;window.closePrinterSettingsModal=fa;window.selectPrinterDeviceTypeUI=ba;window.savePrinterSettingsFromModal=Gs;window.scanBluetoothPrinter=Vs;window.scanUsbPrinter=Ws;window.executeTestPrint=Js;let Zt={},W="view-catalog",ye=!1,$e=null,Ce=["view-catalog"];const bt=e=>{typeof history<"u"&&typeof window<"u"&&history.pushState({modal:e},"",window.location.href),Se.push(e)},wt=(e,t,a)=>{const s=Se.lastIndexOf(e);if(s>-1&&Se.splice(s,1),!t){ye=!0,$e&&clearTimeout($e),$e=setTimeout(()=>{ye=!1},300);try{typeof history<"u"&&history.back()}catch{ye=!1}}typeof a=="function"&&a()},Z=(e,t=!1)=>{if(!e||e===W)return;if(!t)typeof history<"u"&&typeof window<"u"&&history.pushState({view:e},"",window.location.href),e==="view-catalog"?Ce=["view-catalog"]:Ce.push(e);else{const o=Ce.lastIndexOf(e);o>-1?Ce=Ce.slice(0,o+1):Ce=["view-catalog",e]}const a=g(W);if(a){const o=a.querySelector(".scroll-content");o&&(Zt[W]=o.scrollTop)}if(W==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime(),W==="view-pos-cashier"&&e!=="view-pos-cashier"&&(typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()),W==="view-admin"&&e!=="view-admin"){const o=g("view-admin");o&&o.classList.remove("admin-pos-mode"),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()}const s=g(e);if(s&&(s.classList.remove("hidden"),s.classList.add("flex")),document.querySelectorAll(".view-section").forEach(o=>{o!==s&&(o.classList.add("hidden"),o.classList.remove("flex"))}),typeof window.hideFloatingScrollTop=="function")window.hideFloatingScrollTop();else{const o=document.getElementById("native-scroll-top-btn");o&&(o.classList.add("opacity-0","translate-y-3"),o.classList.add("hidden"))}if(s){e==="view-cart"&&typeof window.renderCart=="function"?window.renderCart():e==="view-checkout"&&typeof window.rChck=="function"?window.rChck():e==="view-payment"&&typeof window.rPay=="function"?window.rPay():e==="view-wishlist"&&typeof window.renderWish=="function"?window.renderWish():e==="view-orders"&&typeof window.renderMyOrders=="function"?window.renderMyOrders():e==="view-faq"&&typeof window.renderStorefrontFAQ=="function"?window.renderStorefrontFAQ():e==="view-pos-cashier"?sa(()=>import("./module-pos-BvrokM-f.js").then(n=>n.Q),__vite__mapDeps([2,3,4,1])).then(n=>{typeof n.renderPOSStorefront=="function"&&n.renderPOSStorefront()}).catch(n=>console.error("[POS] Gagal memuat storefront:",n)):e==="view-admin"&&typeof window.renderSubscriptionNoticeInCMS=="function"&&window.renderSubscriptionNoticeInCMS();const o=s.querySelector(".scroll-content");if(o)if(t){const n=Zt[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{o.scrollTop=n}))}else o.scrollTo(0,0)}W=e,wa(e)},wa=(e=W)=>{const t=g("bottom-nav-bar");if(!t)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin","view-pos-cashier"].includes(e)){t.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.remove("translate-y-0","opacity-100");return}if(t.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(s=>s.classList.remove("active")),e==="view-catalog"){const s=g("bnav-home");s&&s.classList.add("active")}else if(e==="view-orders"){const s=g("bnav-orders");s&&s.classList.add("active")}else if(e==="view-wishlist"||e==="view-faq"){const s=g("bnav-menu");s&&s.classList.add("active")}},Ys=e=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(e==="home"?"medium":"light"),e==="home")if(W==="view-catalog"){const t=document.querySelector("#view-catalog .scroll-content");t?t.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else Z("view-catalog");else e==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():e==="cart"?Z("view-cart"):e==="orders"?Z("view-orders"):e==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},xa=()=>{const e=document.querySelector("#view-catalog .scroll-content"),t=g("pull-to-refresh-indicator"),a=g("ptr-icon"),s=g("ptr-text");if(!e||!t)return;let o=0,n=0,r=!1,d=!1;const c=65;e.addEventListener("touchstart",p=>{e.scrollTop<=5&&!d&&(o=p.touches[0].pageY,r=!0)},{passive:!0}),e.addEventListener("touchmove",p=>{if(!r||d)return;n=p.touches[0].pageY;const y=n-o;if(y>15&&e.scrollTop<=5){t.classList.add("visible");const b=Math.min(y/c,1.5);a&&(a.style.transform=`rotate(${b*240}deg)`),s&&(s.innerText=y>=c?"Lepaskan untuk segarkan":"Tarik ke bawah untuk refresh")}else t.classList.remove("visible")},{passive:!0}),e.addEventListener("touchend",async()=>{if(!r||d)return;if(r=!1,n-o>=c&&e.scrollTop<=5){d=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),a&&(a.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",a.style.transform=""),s&&(s.innerText="Menyinkronkan katalog...");try{typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),s&&(s.innerText="Katalog Terkini Disinkron!"),a&&(a.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch{s&&(s.innerText="Gagal sinkron data")}setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>{d=!1,a&&(a.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",a.style.transform=""),s&&(s.innerText="Tarik ke bawah untuk refresh")},300)},600)}else t.classList.remove("visible"),a&&(a.style.transform="")})},ga={product:["product-modal"],category:["category-modal"],brand:["brand-modal"],admin:["admin-modal"],adminOrder:["admin-order-modal"],receipt:["receipt-preview-modal"],docPreview:["doc-preview-modal"],scanner:["scanner-modal"],confirm:["custom-confirm-modal"],customerOrder:["order-detail-modal","customer-order-detail-modal"],restock:["restock-modal"],quickprice:["quickprice-modal"],member:["member-modal"],prompt:["custom-prompt-container","custom-prompt-modal"],review:["review-modal"],quickmenu:["quickmenu-modal"],variantPreview:["variant-preview-modal"],terms:["terms-modal"],privacy:["privacy-modal"],askQuestion:["modal-ask-question","ask-question-modal"],quickVariant:["quick-variant-modal"],adminFAQ:["modal-admin-faq","admin-faq-modal"],printerSettings:["printer-settings-modal"],exitConfirm:["exit-confirm-modal"],appDownload:["app-download-modal"],voucher:["voucher-modal"],guide:["shopping-guide-modal"],changelog:["changelog-modal"],guarantee:["guarantee-modal","quality-guarantee-modal"],security:["security-modal"],posVariantSheet:["pos-variant-sheet"],posLogin:["pos-login-modal"],posCartDrawer:["pos-mobile-cart-drawer","pos-cart-drawer"],posPayment:["pos-pay-modal","pos-payment-modal"],posOpenShift:["pos-open-shift-modal","modal-pos-open-shift"],posCloseShift:["pos-close-shift-modal","modal-pos-close-shift"],posShiftSummary:["pos-shift-summary-modal","modal-pos-shift-summary"],posCashMovement:["pos-cash-movement-modal","modal-pos-cash-movement"],clientTempoPay:["modal-client-tempo-pay"],clientPaySuccess:["modal-client-pay-success"],tempoConfirmations:["modal-tempo-confirmations"],thermalPreview:["utp-thermal-modal"],htmlPreview:["utp-html-modal"],addStaff:["add-staff-modal","modal-add-staff"],permissions:["permissions-modal","modal-permissions"],editStaff:["edit-staff-modal","modal-edit-staff"],soFinalize:["modal-so-finalize","so-finalize-modal"],soHistory:["modal-so-history-detail","modal-so-history","so-history-modal"],preRestore:["modal-pre-restore-inspector"],heroBanner:["admin-hero-banner-modal","hero-banner-modal"],renewal:["renewal-input-modal"],purchaseForm:["modal-po-form","po-form-modal"],purchasePicker:["modal-po-product-picker","po-product-picker-modal"],purchaseDetail:["modal-po-detail","po-detail-modal"],purchasePayment:["modal-po-payment","po-payment-modal"],supplierForm:["modal-supplier-form","supplier-form-modal"],supplierDetail:["modal-supplier-detail","supplier-detail-modal"],posHoldPrompt:["pos-hold-prompt-modal","pos-hold-prompt"],posHeldModal:["pos-held-list-modal","pos-held-modal"],posCameraScanner:["pos-camera-scanner-modal","pos-camera-scanner"],posReceiptFallback:["pos-receipt-fallback-modal"],posShiftReceipt:["pos-shift-receipt-modal"],posLogoutShift:["pos-logout-shift-modal"],colorFloat:["color-float-modal"],tempoDetail:["modal-tempo-detail","tempo-detail-modal"],tempoPayment:["modal-tempo-payment","tempo-payment-modal"],tempoPenalty:["modal-tempo-penalty","tempo-penalty-modal"],expenseForm:["modal-expense-form","expense-modal"],expenseReceipt:["modal-expense-receipt-preview"],sessionKicked:["session-kicked-modal"],productFifo:["modal-product-fifo","product-fifo-modal"],productBarcodeLabel:["modal-product-barcode-label","product-barcode-label-modal"],materialEstimator:["modal-material-estimator","material-estimator-modal"],salesReturn:["modal-sales-return","sales-return-modal"],vendorReturn:["modal-vendor-return","vendor-return-modal"]},At=e=>{const t=ga[e];if(!t)return!1;const a=Array.isArray(t)?t:[t];for(const s of a){const o=document.getElementById(s);if(o&&!(o.classList.contains("hidden")||o.classList.contains("pointer-events-none"))&&!(o.style.display==="none"||o.style.visibility==="hidden")){try{const n=window.getComputedStyle(o);if(n.display==="none"||n.visibility==="hidden")continue}catch{}return!0}}return!1},Mt=e=>{switch(e){case"product":if(typeof window.closeProductModal=="function")return window.closeProductModal(!0),!0;break;case"category":if(typeof window.closeCategoryModal=="function")return window.closeCategoryModal(!0),!0;break;case"brand":if(typeof window.closeBrandModal=="function")return window.closeBrandModal(!0),!0;break;case"admin":if(typeof window.closeAdminModal=="function")return window.closeAdminModal(!0),!0;break;case"adminOrder":if(typeof window.closeOrderDetailModal=="function")return window.closeOrderDetailModal(!0),!0;break;case"receipt":if(typeof window.closeReceiptPreviewModal=="function")return window.closeReceiptPreviewModal(!0),!0;break;case"docPreview":if(typeof window.closeDocPreviewModal=="function")return window.closeDocPreviewModal(!0),!0;break;case"scanner":if(typeof window.closeCameraScanner=="function")return window.closeCameraScanner(!0),!0;break;case"confirm":if(typeof window.closeConfirm=="function")return window.closeConfirm(!0),!0;break;case"customerOrder":if(typeof window.closeCustomerOrderDetailModal=="function")return window.closeCustomerOrderDetailModal(!0),!0;break;case"restock":if(typeof window.closeRestockModal=="function")return window.closeRestockModal(!0),!0;break;case"quickprice":if(typeof window.closeQuickPriceModal=="function")return window.closeQuickPriceModal(!0),!0;break;case"member":if(typeof window.closeMemberModal=="function")return window.closeMemberModal(!0),!0;break;case"prompt":if(typeof window.closePrompt=="function")return window.closePrompt(!0),!0;break;case"review":if(typeof window.closeReviewModal=="function")return window.closeReviewModal(!0),!0;break;case"quickmenu":if(typeof window.closeQuickMenuModal=="function")return window.closeQuickMenuModal(!0),!0;break;case"variantPreview":if(typeof window.closeVariantPreviewModal=="function")return window.closeVariantPreviewModal(!0),!0;break;case"terms":if(typeof window.closeTermsModal=="function")return window.closeTermsModal(!0),!0;break;case"privacy":if(typeof window.closePrivacyModal=="function")return window.closePrivacyModal(!0),!0;break;case"askQuestion":if(typeof window.closeAskQuestionModal=="function")return window.closeAskQuestionModal(!0),!0;break;case"quickVariant":if(typeof window.closeQuickVariantSheet=="function")return window.closeQuickVariantSheet(!0),!0;break;case"adminFAQ":if(typeof window.closeAdminFAQModal=="function")return window.closeAdminFAQModal(!0),!0;break;case"printerSettings":if(typeof window.closePrinterSettingsModal=="function")return window.closePrinterSettingsModal(!0),!0;break;case"exitConfirm":if(typeof window.closeExitConfirmModal=="function")return window.closeExitConfirmModal(!0),!0;break;case"appDownload":if(typeof window.closeAppDownloadModal=="function")return window.closeAppDownloadModal(!0),!0;break;case"voucher":if(typeof window.closeVoucherModal=="function")return window.closeVoucherModal(!0),!0;break;case"guide":if(typeof window.closeShoppingGuideModal=="function")return window.closeShoppingGuideModal(!0),!0;break;case"changelog":if(typeof window.closeChangelogModal=="function")return window.closeChangelogModal(!0),!0;break;case"guarantee":if(typeof window.closeQualityGuaranteeModal=="function")return window.closeQualityGuaranteeModal(!0),!0;break;case"security":if(typeof window.closeSecurityModal=="function")return window.closeSecurityModal(!0),!0;break;case"posVariantSheet":if(typeof window.closePOSVariantSheet=="function")return window.closePOSVariantSheet(!0),!0;break;case"posLogin":if(typeof window.closePOSLoginModal=="function")return window.closePOSLoginModal(!0),!0;break;case"posCartDrawer":if(typeof window.closePOSCartDrawer=="function")return window.closePOSCartDrawer(!0),!0;break;case"posPayment":if(typeof window.closePayModal=="function")return window.closePayModal(!0),!0;break;case"posOpenShift":if(typeof window.closePOSOpenShiftModal=="function")return window.closePOSOpenShiftModal(!0),!0;break;case"posCloseShift":if(typeof window.closePOSCloseShiftModal=="function")return window.closePOSCloseShiftModal(!0),!0;break;case"posShiftSummary":if(typeof window.closePOSShiftSummaryModal=="function")return window.closePOSShiftSummaryModal(!0),!0;break;case"posCashMovement":if(typeof window.closePOSCashMovementModal=="function")return window.closePOSCashMovementModal(!0),!0;break;case"clientTempoPay":if(typeof window.closeClientTempoPayModal=="function")return window.closeClientTempoPayModal(!0),!0;if(typeof window.closeClientPaymentModal=="function")return window.closeClientPaymentModal(!0),!0;break;case"clientPaySuccess":if(typeof window.closeClientPaymentSuccessModal=="function")return window.closeClientPaymentSuccessModal(!0),!0;break;case"tempoConfirmations":if(typeof window.closeTempoConfirmationsModal=="function")return window.closeTempoConfirmationsModal(!0),!0;break;case"thermalPreview":return typeof window.closeThermalPrintPreview=="function"?(window.closeThermalPrintPreview(!0),!0):typeof window.closeThermalPreviewModal=="function"?(window.closeThermalPreviewModal(!0),!0):(document.getElementById("utp-thermal-modal")?.remove(),!0);case"htmlPreview":return typeof window.closeHtmlPrintPreview=="function"?(window.closeHtmlPrintPreview(!0),!0):typeof window.closeHtmlPreviewModal=="function"?(window.closeHtmlPreviewModal(!0),!0):(document.getElementById("utp-html-modal")?.remove(),!0);case"posReceiptFallback":return typeof window.closePOSReceiptFallbackModal=="function"?(window.closePOSReceiptFallbackModal(!0),!0):(document.getElementById("pos-receipt-fallback-modal")?.remove(),!0);case"posShiftReceipt":return typeof window.closePOSShiftReceiptModal=="function"?(window.closePOSShiftReceiptModal(!0),!0):(document.getElementById("pos-shift-receipt-modal")?.remove(),!0);case"addStaff":if(typeof window.closeAddStaffModal=="function")return window.closeAddStaffModal(!0),!0;break;case"permissions":if(typeof window.closePermissionsModal=="function")return window.closePermissionsModal(!0),!0;break;case"editStaff":if(typeof window.closeEditStaffModal=="function")return window.closeEditStaffModal(!0),!0;break;case"soFinalize":if(typeof window.closeSOFinalizeModal=="function")return window.closeSOFinalizeModal(!0),!0;if(typeof window.closeFinalizeModal=="function")return window.closeFinalizeModal(!0),!0;break;case"soHistory":if(typeof window.closeSOHistoryModal=="function")return window.closeSOHistoryModal(!0),!0;if(typeof window.closeSoHistoryModal=="function")return window.closeSoHistoryModal(!0),!0;break;case"preRestore":if(typeof window.closePreRestoreModal=="function")return window.closePreRestoreModal(!0),!0;break;case"heroBanner":if(typeof window.closeHeroBannerModal=="function")return window.closeHeroBannerModal(!0),!0;break;case"renewal":if(typeof window.closeRenewalModal=="function")return window.closeRenewalModal(!0),!0;break;case"purchaseForm":if(typeof window.closeCreatePOModal=="function")return window.closeCreatePOModal(!0),!0;break;case"purchasePicker":if(typeof window.closePOProductPicker=="function")return window.closePOProductPicker(!0),!0;break;case"purchaseDetail":if(typeof window.closePurchaseDetailModal=="function")return window.closePurchaseDetailModal(!0),!0;break;case"purchasePayment":if(typeof window.closePurchasePaymentModal=="function")return window.closePurchasePaymentModal(!0),!0;break;case"supplierForm":if(typeof window.closeSupplierFormModal=="function")return window.closeSupplierFormModal(!0),!0;break;case"supplierDetail":if(typeof window.closeSupplierDetailModal=="function")return window.closeSupplierDetailModal(!0),!0;break;case"posHoldPrompt":if(typeof window.closePOSHoldPrompt=="function")return window.closePOSHoldPrompt(!0),!0;break;case"posHeldModal":if(typeof window.closePOSHeldModal=="function")return window.closePOSHeldModal(!0),!0;break;case"posCameraScanner":if(typeof window.closePOSCameraScanner=="function")return window.closePOSCameraScanner(!0),!0;break;case"tempoDetail":if(typeof window.closeTempoDetailModal=="function")return window.closeTempoDetailModal(!0),!0;break;case"tempoPayment":if(typeof window.closeTempoPaymentModal=="function")return window.closeTempoPaymentModal(!0),!0;break;case"tempoPenalty":if(typeof window.closeTempoPenaltyModal=="function")return window.closeTempoPenaltyModal(!0),!0;break;case"expenseForm":if(typeof window.closeExpenseModal=="function")return window.closeExpenseModal(!0),!0;break;case"expenseReceipt":if(typeof window.closeExpenseReceiptPreview=="function")return window.closeExpenseReceiptPreview(!0),!0;break;case"colorFloat":return typeof window._closeColorFloatModal=="function"?(window._closeColorFloatModal(!0),!0):(document.getElementById("color-float-modal")?.remove(),!0);case"posLogoutShift":return document.getElementById("pos-logout-shift-modal")?.remove(),!0;case"sessionKicked":return typeof window.closeSessionKickedModal=="function"?(window.closeSessionKickedModal(!0),!0):(document.getElementById("session-kicked-modal")?.remove(),!0);case"productFifo":if(typeof window.closeProductFifoModal=="function")return window.closeProductFifoModal(!0),!0;break;case"productBarcodeLabel":if(typeof window.closeProductBarcodeLabelModal=="function")return window.closeProductBarcodeLabelModal(!0),!0;break;case"materialEstimator":if(typeof window.closeMaterialEstimatorModal=="function")return window.closeMaterialEstimatorModal(!0),!0;break;case"salesReturn":if(typeof window.closeSalesReturnModal=="function")return window.closeSalesReturnModal(!0),!0;break;case"vendorReturn":if(typeof window.closeVendorReturnModal=="function")return window.closeVendorReturnModal(!0),!0;break}const t=ga[e]||[],a=Array.isArray(t)?t:[t];for(const s of a){const o=document.getElementById(s);if(o){if(["utp-thermal-modal","utp-html-modal","pos-receipt-fallback-modal","pos-shift-receipt-modal","pos-hold-prompt-modal","pos-held-list-modal","pos-camera-scanner-modal","color-float-modal","pos-logout-shift-modal","custom-prompt-container"].includes(s))return o.remove(),!0;if(!o.classList.contains("hidden"))return o.classList.add("hidden"),o.style.display="none",!0}}return!1},It=(e=!1)=>{const t=()=>{if(!e&&typeof history<"u"&&history.state&&history.state.modal){ye=!0,$e&&clearTimeout($e),$e=setTimeout(()=>{ye=!1},300);try{history.back()}catch{ye=!1}}},a=[{id:"utp-thermal-modal",close:()=>{typeof window.closeThermalPrintPreview=="function"?window.closeThermalPrintPreview(!0):typeof window.closeThermalPreviewModal=="function"?window.closeThermalPreviewModal(!0):document.getElementById("utp-thermal-modal")?.remove()}},{id:"utp-html-modal",close:()=>{typeof window.closeHtmlPrintPreview=="function"?window.closeHtmlPrintPreview(!0):typeof window.closeHtmlPreviewModal=="function"?window.closeHtmlPreviewModal(!0):document.getElementById("utp-html-modal")?.remove()}},{id:"pos-receipt-fallback-modal",close:()=>{typeof window.closePOSReceiptFallbackModal=="function"?window.closePOSReceiptFallbackModal(!0):document.getElementById("pos-receipt-fallback-modal")?.remove()}},{id:"pos-shift-receipt-modal",close:()=>{typeof window.closePOSShiftReceiptModal=="function"?window.closePOSShiftReceiptModal(!0):document.getElementById("pos-shift-receipt-modal")?.remove()}},{id:"receipt-preview-modal",isOpen:n=>!n.classList.contains("hidden"),close:()=>{typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):document.getElementById("receipt-preview-modal")?.classList.add("hidden")}},{id:"doc-preview-modal",isOpen:n=>!n.classList.contains("hidden"),close:()=>{typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):document.getElementById("doc-preview-modal")?.classList.add("hidden")}},{id:"modal-expense-receipt-preview",isOpen:n=>!n.classList.contains("hidden"),close:()=>{typeof window.closeExpenseReceiptPreview=="function"?window.closeExpenseReceiptPreview(!0):document.getElementById("modal-expense-receipt-preview")?.classList.add("hidden")}}];for(const n of a){const r=document.getElementById(n.id);if(r&&(!n.isOpen||n.isOpen(r))){const d={"utp-thermal-modal":"thermalPreview","utp-html-modal":"htmlPreview","pos-receipt-fallback-modal":"posReceiptFallback","pos-shift-receipt-modal":"posShiftReceipt","receipt-preview-modal":"receipt","doc-preview-modal":"docPreview","modal-expense-receipt-preview":"expenseReceipt"}[n.id];if(d){const c=Se.lastIndexOf(d);c>-1&&Se.splice(c,1)}return n.close(),t(),!0}}const s=["pos-success-modal","pos-recall-confirm-modal","pos-delete-confirm-modal","pos-closed-success-modal","pos-logout-shift-modal","session-kicked-modal"];for(const n of s){const r=document.getElementById(n);if(r)return r.remove(),t(),!0}for(;Se.length>0;){const n=Se.pop();if(At(n))return Mt(n),t(),!0}const o=["salesReturn","vendorReturn","materialEstimator","productBarcodeLabel","productFifo","sessionKicked","exitConfirm","colorFloat","posLogoutShift","posReceiptFallback","posShiftReceipt","clientPaySuccess","clientTempoPay","tempoConfirmations","posVariantSheet","posLogin","posCartDrawer","posPayment","posOpenShift","posCloseShift","posShiftSummary","posCashMovement","thermalPreview","htmlPreview","addStaff","permissions","editStaff","soFinalize","soHistory","preRestore","heroBanner","renewal","purchasePayment","purchaseDetail","purchasePicker","purchaseForm","supplierDetail","supplierForm","posHoldPrompt","posHeldModal","posCameraScanner","tempoPenalty","tempoPayment","tempoDetail","expenseReceipt","expenseForm","customerOrder","restock","quickprice","member","review","voucher","changelog","appDownload","guarantee","security","quickVariant","variantPreview","confirm","prompt","printerSettings","docPreview","receipt","adminFAQ","adminOrder","admin","brand","category","quickmenu","guide","terms","privacy","scanner","askQuestion","product"];for(const n of o)if(At(n))return Mt(n),t(),!0;return!1},ha=()=>{const e=g("exit-confirm-modal");e&&(e.classList.contains("hidden")&&bt("exitConfirm"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=g("exit-confirm-modal-box");t&&t.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Ot=(e=!1)=>{wt("exitConfirm",e,()=>{const t=g("exit-confirm-modal"),a=g("exit-confirm-modal-box");t&&t.classList.add("opacity-0"),a&&a.classList.add("scale-95"),setTimeout(()=>{t&&t.classList.add("hidden")},250)})},Qs=()=>{Ot(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri! 🙏"),setTimeout(()=>{try{window.close()}catch{}},400))},Zs=()=>{if(It(!1))return;if(W==="view-admin"){const t=g("admin-content-view"),a=g("admin-dashboard-view");if(!!(t&&!t.classList.contains("hidden")||a&&a.classList.contains("hidden")||window.history.state&&window.history.state.tab||typeof window.cTab<"u"&&window.cTab)){if(window.history.state&&window.history.state.tab&&window.history.length>1)try{window.history.back();return}catch{}typeof window.openAdminMenu=="function"&&window.openAdminMenu();try{window.history.replaceState({view:"view-admin"},"",window.location.href)}catch{}return}if(typeof window.showConfirm=="function"){const o=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),n=o?"Keluar Panel Owner":"Keluar CMS Toko",r=o?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(n,r,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}return}if(W==="view-pos-cashier"){typeof window.showConfirm=="function"?window.showConfirm("Keluar Mode Kasir","Yakin keluar dari mode POS kasir?",()=>{typeof window.exitPOSMode=="function"?window.exitPOSMode():Z("view-catalog")},"Ya, Keluar",!0):Z("view-catalog");return}if(W!=="view-catalog"){if(W==="view-payment"){window.history.length>1?window.history.back():Z("view-checkout",!0);return}if(W==="view-checkout"){window.history.length>1?window.history.back():Z("view-cart",!0);return}if(W==="view-cart"){window.history.length>1?window.history.back():Z("view-catalog",!0);return}window.history.length>1?window.history.back():Z("view-catalog",!0);return}const e=g("exit-confirm-modal");e&&!e.classList.contains("hidden")?Ot():ha()},Xs=()=>{xa();try{(!history.state||!history.state.view)&&history.replaceState({view:"view-catalog"},"",window.location.href)}catch{}window.addEventListener("popstate",e=>{if(ye){ye=!1,$e&&clearTimeout($e);return}if(It(!0))return;const t=e.state||{},a=t.view||null;if(window.isAdm||window.__localIsAdm)if(a==="view-admin")Z("view-admin",!0),t.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(t.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu();else{const o=g("admin-content-view");if(o&&!o.classList.contains("hidden")){history.pushState({view:"view-admin"},"",window.location.href),Z("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}if(history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"){const n=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=n?"Keluar Panel Owner":"Keluar CMS Toko",d=n?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,d,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}}else if(a){let o=a;a==="view-admin"&&(o="view-admin-login"),Z(o,!0)}else Z("view-catalog",!0)})};if(typeof window<"u"){window.pushModalHistory=bt,window.requestCloseModal=wt,window.changeView=Z,window.setupHistoryRouter=Xs,window.onBottomNavClick=Ys,window.updateBottomNav=wa,window.initPullToRefresh=xa,window.handleAppBackButton=Zs,window.closeTopmostOpenModal=It,window.isModalOpenInDOM=At,window.closeModalByName=Mt,window.openExitConfirmModal=ha,window.closeExitConfirmModal=Ot,window.confirmExitApp=Qs,window.isProgrammaticModalClose=ye,window.viewHistoryStack=Ce;try{Object.defineProperty(window,"curViewName",{get:()=>W,set:e=>{W=e},configurable:!0})}catch{}}let Ct=null,Fe=null;const eo=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}X("Kode "+e+" berhasil disalin!")}catch{X("Gagal menyalin. Kode: "+e)}},X=(e,t,a,s)=>{const o=g("toast");if(!o)return;if(!t){const l=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(l)?t="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(l)?t="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(l)?t="warning":/upload|proses|memuat|loading|sedang/.test(l)?t="loading":t="info"}typeof window.triggerHaptic=="function"&&window.triggerHaptic(t==="error"?"error":t==="warning"?"warning":t==="success"?"success":"light");const n=getComputedStyle(document.documentElement),r=n.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",d=n.getPropertyValue("--color-primary").trim()||"#10b981";n.getPropertyValue("--color-primary-dark").trim();const c={success:{icon:"fa-circle-check",label:"Berhasil",accent:d,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:d,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:d,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`}},p=c[t]||c.info,y=g("toast-icon");y&&(y.className="fa-solid "+p.icon);const b=g("toast-title");b&&(b.textContent=a||p.label,b.style.display="block",b.style.color=p.accent);const w=g("toast-icon-wrap");w&&(w.style.background=p.iconBg,w.style.color=p.accent),Q("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let m=g("toast-progress");m||(m=document.createElement("div"),m.id="toast-progress",o.appendChild(m)),m.style.background=p.accent,m.style.transition="none",m.style.width="100%",m.style.opacity="0.85",clearTimeout(Ct),o.classList.add("toast-show");const f=s||(t==="loading"?8e3:t==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{m.style.transition=`width ${f}ms linear`,m.style.width="0%"})),Ct=setTimeout(()=>{o.classList.remove("toast-show")},f)},to=e=>X(e,"loading","Memproses...",8e3),ao=()=>{clearTimeout(Ct);const e=g("toast");e&&e.classList.remove("toast-show")},so=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")};let Ae=null;const oo=(e,t,a,s=null,o=null)=>{let n=e,r=t,d=a,c=s,p=o;typeof t=="function"&&(d=t,r=e,n=typeof s=="string"?s:"Konfirmasi Tindakan",c=typeof a=="string"?a:null,p===null&&(p=!0));const y=`${n||""} ${typeof r=="string"?r:""}`.toLowerCase(),b=/cetak|print/.test(y),w=/hapus|delete|kosongkan|reset|buang|hilang|batalkan/.test(y);p===null&&(p=w),c||(b?c="Ya, Cetak":p?c="Ya, Hapus":c="Ya, Lanjutkan");let m=null;typeof d!="function"?(m=new Promise(M=>{Ae=M}),Fe=null):(Fe=d,Ae=null),Q("confirm-title",n);const f=g("confirm-msg");if(f)if(typeof r=="string"){const M=typeof window.DOMPurify<"u"?window.DOMPurify.sanitize(r,{ADD_ATTR:["class","style"]}):r;f.innerHTML=M}else f.textContent=r||"";const l=g("confirm-yes-btn");l&&(l.innerText=c,p?(l.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 active:scale-95 transition-all text-xs sm:text-sm shadow-md shadow-rose-500/30 cursor-pointer",g("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",g("confirm-icon").className="fa-solid fa-triangle-exclamation"):(l.className="flex-1 py-3.5 text-white font-bold rounded-2xl hover:opacity-95 active:scale-95 transition-all text-xs sm:text-sm shadow-sm cursor-pointer",l.style.background="var(--color-primary)",l.style.boxShadow="0 4px 14px rgba(var(--color-primary-rgb), 0.35)",g("confirm-icon-box").className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border shadow-2xs",g("confirm-icon-box").style.background="rgba(var(--color-primary-rgb), 0.12)",g("confirm-icon-box").style.color="var(--color-primary)",g("confirm-icon-box").style.borderColor="rgba(var(--color-primary-rgb), 0.25)",g("confirm-icon").className=b?"fa-solid fa-print":"fa-solid fa-circle-check"));const A=g("custom-confirm-modal");return A&&A.classList.contains("hidden")&&bt("confirm"),da("custom-confirm-modal"),setTimeout(()=>{g("custom-confirm-modal").classList.remove("opacity-0"),g("custom-confirm-box").classList.remove("scale-95")},10),m},Lt=(e=!1)=>{if(Ae){const t=Ae;Ae=null,t(!1)}wt("confirm",e,()=>{g("custom-confirm-modal").classList.add("opacity-0"),g("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>ca("custom-confirm-modal"),300)})},no=()=>{if(Ae){const e=Ae;Ae=null,Fe=null,Lt(),setTimeout(()=>{e(!0)},150);return}if(Fe){const e=Fe;Fe=null,Lt(),setTimeout(()=>{e()},150)}},ro=(e,t="",a=null)=>{let s=null,o=null;typeof a!="function"&&(o=new Promise(w=>{s=w}));const n=t!=null?String(t):"",r=n.length>50||n.includes(`
`)||/balasan|catatan|alasan|deskripsi|pesan|keterangan/i.test(e),d=n.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=r?`<textarea id="prompt-input" rows="3" class="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 custom-scrollbar resize-none leading-relaxed" placeholder="Tuliskan di sini...">${d}</textarea>`:`<input type="text" id="prompt-input" value="${d}" class="w-full px-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-bold focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 text-center" autocomplete="off" />`;let p=document.createElement("div");p.id="custom-prompt-container",p.className="fixed inset-0 z-[10005] bg-slate-900/85 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300",p.onclick=w=>{w.target===p&&window.closePrompt()},p.innerHTML=`
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
    `,document.body.appendChild(p);const y=p.querySelector("div");bt("prompt"),setTimeout(()=>{p.classList.remove("opacity-0"),y.classList.remove("scale-95")},10);const b=p.querySelector("#prompt-input");return b&&(b.focus(),b.select(),b.onkeydown=w=>{w.key==="Enter"&&(!r||w.ctrlKey)?(w.preventDefault(),p.querySelector("#prompt-ok")?.click()):w.key==="Escape"&&(w.preventDefault(),window.closePrompt())}),window.closePrompt=(w=!1)=>{if(!(!p||!p.parentNode)){if(s){const m=s;s=null,m(null)}wt("prompt",w,()=>{p.classList.add("opacity-0"),y.classList.add("scale-95"),setTimeout(()=>p.remove(),300),window.closePrompt=null})}},p.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),p.querySelector("#prompt-ok").onclick=()=>{let w=b.value;if(s){const m=s;s=null,window.closePrompt(),m(w)}else window.closePrompt(),typeof a=="function"&&a(w)},o},io=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=eo;window.showToast=X;window.showToastLoading=to;window.hideToast=ao;window.toggleTheme=so;window.showConfirm=oo;window.closeConfirm=Lt;window.executeConfirm=no;window.customPrompt=ro;window.checkProPrint=io;const We="utp-thermal-modal",rt="utp-html-modal";let oe=null,Et=null,Ge=null,Ve=null;const it=()=>{if(document.getElementById("utp-style"))return;const e=document.createElement("style");e.id="utp-style",e.textContent=`
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
    `,document.head.appendChild(e)},ya=()=>{Ve===null&&(Ve=document.body.style.overflow||"",document.body.style.overflow="hidden")},Bt=()=>{Ve!==null&&!document.getElementById(We)&&!document.getElementById(rt)&&(document.body.style.overflow=Ve,Ve=null)},va=(e,t)=>{xt(),Ge=a=>{const s=a.target&&a.target.tagName||"";a.key==="Escape"?(a.preventDefault(),t()):a.key==="Enter"&&!/INPUT|TEXTAREA|SELECT/.test(s)&&(a.preventDefault(),e())},document.addEventListener("keydown",Ge,!0)},xt=()=>{Ge&&document.removeEventListener("keydown",Ge,!0),Ge=null},lo=e=>{const t=e.deviceType||"rawbt",a=/android/i.test(navigator.userAgent||"");return t==="rawbt"?a||window.AndroidNativeApp?"RawBT Android":"Printer Browser":t==="bluetooth"?"Bluetooth":t==="usb"?"USB OTG":t==="network"?"WiFi / LAN":"Printer Sistem"},co=e=>{if(e.html&&/<[a-z][\s\S]*>/i.test(e.html))return`<div class="utp-html-rendered" style="white-space:normal;width:100%;">${e.html}</div>`;let t=Array.isArray(e.previewLines)&&e.previewLines.length?e.previewLines:null;t||(t=String(e.plainText||"").split(`
`).map(s=>({t:s,a:"left",b:!1,s:"normal"})));const a=[...t];for(;a.length>1&&!String(a[a.length-1].t||"").trim();)a.pop();return a.map(s=>{if(s.type==="two-column")return`<div class="utp-row ${s.b?"font-bold":""}"><div class="utp-col-left">${i(s.left)}</div><div class="utp-col-right">${i(s.right)}</div></div>`;if(s.type==="separator")return'<div class="utp-separator"></div>';if(s.type==="double-separator")return'<div class="utp-double-separator"></div>';if(s.isBarcode||s.s==="barcode"||s.type==="barcode")return`
            <div class="utp-barcode-wrap" style="text-align:center;">
                <div class="utp-barcode-bars mx-auto" aria-hidden="true"></div>
                <div class="utp-barcode-code">*${i(s.code||s.t||"")}*</div>
            </div>`;const o=i(String(s.t??""))||"&nbsp;",n=s.a==="center"?"center":s.a==="right"?"right":"left",r=s.b?800:400;return s.s==="title"||s.s==="wide"?`<div class="utp-line utp-title" style="text-align:${n};font-weight:${r}">${o}</div>`:s.s==="tall"||s.s==="total"?`<div class="utp-line utp-tall" style="text-align:${n};font-weight:${r}"><span>${o}</span></div>`:`<div class="utp-line" style="text-align:${n};font-weight:${r}">${o}</div>`}).join("")},ka=()=>{const e=oe;if(!e)return;const t=z(),a=ve(t.paperSize),s=a>=40,o=Array.isArray(e.previewLines)?e.previewLines.length:String(e.plainText||"").split(`
`).length,n=typeof e.rebuild=="function"?`
        <div class="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70" role="group" aria-label="Ukuran kertas">
            <button type="button" id="utp-paper-58" onclick="window.setThermalPreviewPaper('58mm')" class="utp-seg-btn ${s?"text-slate-600 dark:text-slate-300":"is-active"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">58mm</button>
            <button type="button" id="utp-paper-80" onclick="window.setThermalPreviewPaper('80mm')" class="utp-seg-btn ${s?"is-active":"text-slate-600 dark:text-slate-300"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">80mm</button>
        </div>`:"",r=`
    <div id="${We}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-thermal-title" onclick="if(event.target===this) window.closeThermalPrintPreview()">
        <div class="utp-sheet bg-white dark:bg-slate-900 w-full ${s?"sm:max-w-[500px]":"sm:max-w-[440px]"} rounded-t-[2rem] sm:rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col max-h-[94dvh] overflow-hidden">
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
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-scroll text-[var(--color-primary)]"></i>${s?"80mm":"58mm"} · ${a} kolom</span>
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-print text-slate-400"></i>${i(lo(t))}</span>
                    <span class="utp-chip bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-check"></i>${o} baris</span>
                </div>
                ${n}
            </div>

            <div class="utp-canvas flex-1 overflow-auto px-3 py-5 sm:px-5 custom-scrollbar">
                <div class="utp-paper mx-auto" style="width:${a}ch;">
                    ${co(e)}
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
    </div>`;document.getElementById(We)?.remove(),document.body.insertAdjacentHTML("beforeend",r),setTimeout(()=>document.getElementById("utp-thermal-confirm")?.focus({preventScroll:!0}),60)},Pa=e=>!e||typeof e.dispatch!="function"?!1:(it(),oe={...e},ka(),ya(),va(()=>Ta(),()=>gt()),typeof window.pushModalHistory=="function"&&window.pushModalHistory("thermalPreview"),!0),gt=(e=!1)=>{const t=()=>{const a=oe;if(document.getElementById(We)?.remove(),oe=null,xt(),Bt(),a&&typeof a.onCancel=="function")try{a.onCancel()}catch{}};typeof window.requestCloseModal=="function"?window.requestCloseModal("thermalPreview",e,t):t()},Ta=()=>{const e=oe;if(e){if(oe=null,document.getElementById(We)?.remove(),xt(),Bt(),typeof e.onConfirm=="function")try{e.onConfirm()}catch(t){console.warn("[PrintPreview] onConfirm error:",t)}e.dispatch(e.base64,e.plainText,e.html||"")}},po=e=>{if(!(!oe||typeof oe.rebuild!="function")){Ye({paperSize:e});try{const t=oe.rebuild();t&&(oe.base64=t.base64,oe.plainText=t.plainText,oe.previewLines=t.previewLines,oe.html=t.html||"")}catch(t){console.warn("[PrintPreview] Gagal rebuild payload:",t)}ka(),X(`Ukuran kertas diubah ke ${e}`)}},uo=()=>{gt(),typeof window.openPrinterSettingsModal=="function"&&(window.openPrinterSettingsModal(),X("Atur printer, lalu tekan Cetak lagi untuk melihat preview terbaru."))},mo=(e={})=>{if(!e.html)return!1;it(),Et={...e};const t=(e.paper||"a4")==="a4";document.getElementById(rt)?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="${rt}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-html-title" onclick="if(event.target===this) window.closeHtmlPrintPreview()">
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
    </div>`);const a=document.getElementById("utp-html-frame");if(a){const s=a.contentWindow.document;s.open(),s.write(e.html),s.close()}return ya(),va(()=>Sa(),()=>ht()),typeof window.pushModalHistory=="function"&&window.pushModalHistory("htmlPreview"),!0},ht=(e=!1)=>{const t=()=>{document.getElementById(rt)?.remove(),Et=null,xt(),Bt()};typeof window.requestCloseModal=="function"?window.requestCloseModal("htmlPreview",e,t):t()},Sa=()=>{const e=document.getElementById("utp-html-frame");if(!(!e||!Et)){if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){try{const t=e.contentWindow.document,a=Array.from(t.querySelectorAll("style")).map(o=>o.outerHTML).join("");let s=document.getElementById("a4-print-section");s||(s=document.createElement("div"),s.id="a4-print-section",document.body.appendChild(s)),s.innerHTML=a+t.body.innerHTML,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500)}catch(t){console.warn("[PrintPreview] Native print error:",t)}ht();return}try{e.contentWindow.focus(),e.contentWindow.print()}catch(t){console.warn("[PrintPreview] iframe print error:",t),X("Gagal membuka dialog cetak. Coba lagi.","error")}}};typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",it,{once:!0}):it());window.openThermalPrintPreview=Pa;window.closeThermalPrintPreview=gt;window.closeThermalPreviewModal=gt;window.confirmThermalPrint=Ta;window.setThermalPreviewPaper=po;window.openPrinterSettingsFromPreview=uo;window.openHtmlPrintPreview=mo;window.closeHtmlPrintPreview=ht;window.closeHtmlPreviewModal=ht;window.confirmHtmlPrint=Sa;const L=e=>"Rp "+Math.round(Number(e||0)).toLocaleString("id-ID"),nt=e=>Math.round(Number(e||0)).toLocaleString("id-ID"),$a=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(3).replace(/\.?0+$/,"")},H=e=>e?String(e).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"").replace(/[\r\t]/g," ").replace(/[^\x20-\x7E\n]/g," "):"",U=(e,t)=>{if(!e)return[];const a=H(e).replace(/ +/g," ").trim();if(!a)return[];if(a.length<=t)return[a];const s=a.split(" "),o=[];let n="";for(const r of s)if(r)if(r.length>t){n&&(o.push(n),n="");for(let d=0;d<r.length;d+=t){const c=r.substring(d,d+t);c.length===t?o.push(c):n=c}}else(n?n.length+1+r.length:r.length)<=t?n=n?n+" "+r:r:(o.push(n),n=r);return n&&o.push(n),o},ue=(e,t=!1)=>{const a=e?new Date(e):new Date,s=String(a.getDate()).padStart(2,"0"),o=String(a.getMonth()+1).padStart(2,"0"),n=t?a.getFullYear():String(a.getFullYear()).slice(-2),r=String(a.getHours()).padStart(2,"0"),d=String(a.getMinutes()).padStart(2,"0");return`${s}/${o}/${n} ${r}:${d}`},Ht=(e,t,a,s=!1)=>{const o=H(String(e||"")).trimEnd(),n=H(String(t||"")).trim(),r=a-o.length-n.length;if(r>=0)return[o+" ".repeat(r)+n];if(s){const p=Math.max(0,a-n.length-1),y=o.substring(0,p).trimEnd(),b=Math.max(1,a-y.length-n.length);return[y+" ".repeat(b)+n]}const d=U(o,a),c=d[d.length-1]||"";if(c.length+1+n.length<=a){const p=a-c.length-n.length;return d[d.length-1]=c+" ".repeat(p)+n,d}else{const p=Math.max(0,a-n.length);return[...d," ".repeat(p)+n]}},De=e=>e?i(String(e)).replace(/^ +/gm,t=>"&nbsp;".repeat(t.length)):"";class Oe{constructor(t=32){this.cols=Number(t)||32,this.bytes=[],this.plainLines=[],this.previewLines=[],this.items=[],this._bold=!1,this._size="normal"}init(){return this.bytes.push(27,64),this}align(t="left"){const a=t==="center"?1:t==="right"?2:0;return this.bytes.push(27,97,a),this}bold(t=!0){return this.bytes.push(27,69,t?1:0),this._bold=!!t,this}size(t="normal"){return this._size=t||"normal",t==="title"?this.bytes.push(29,33,17):t==="tall"||t==="total"?this.bytes.push(29,33,1):t==="wide"?this.bytes.push(29,33,16):this.bytes.push(29,33,0),this}text(t){if(!t)return this;const a=H(t);for(let s=0;s<a.length;s++)this.bytes.push(a.charCodeAt(s));return this}line(t="",a="left"){this.align(a),this.text(t),this.bytes.push(10),this.plainLines.push(t);const s=H(t);return this.previewLines.push({t:s,a,b:this._bold,s:this._size}),this.items.push({type:"line",text:s,align:a,bold:this._bold,size:this._size}),this}centered(t=""){return U(t,this.cols).forEach(s=>this.line(s,"center")),this}twoColumn(t="",a="",s=!1,o=!1){s&&this.bold(!0);const n=Ht(t,a,this.cols,o);n.forEach(c=>{this.align("left"),this.text(c),this.bytes.push(10),this.plainLines.push(c)});const r=H(String(t||"")),d=H(String(a||""));return this.previewLines.push({type:"two-column",left:r,right:d,t:n[0],a:"left",b:!!s,s:this._size}),this.items.push({type:"two-column",left:r,right:d,bold:!!s,size:this._size}),s&&this.bold(!1),this}itemRow(t){const a=t.variantName?` (${t.variantName}${t.colorCode?" "+t.colorCode:""})`:"",s=(t.name||"Barang")+a+(t.poTime?" [PO]":"");this.bold(!0),U(s,this.cols).forEach(p=>this.line(p,"left")),this.bold(!1);const n=t.effectivePrice||t.price||0,r=t.subtotal!==void 0?t.subtotal:parseFloat(t.qty||1)*n,d=`  ${$a(t.qty)} ${t.unit||"pcs"} x ${nt(n)}`,c=nt(r);return this.twoColumn(d,c,!1,!1),t.discount&&t.discount>0&&this.twoColumn("  (Pot. Diskon)",`-${nt(t.discount)}`,!1,!0),t.poTime&&this.line(`  * Estimasi PO: ${t.poTime}`,"left"),this}separator(t="-"){const a=t.repeat(this.cols);return this.align("left"),this.text(a),this.bytes.push(10),this.plainLines.push(a),this.previewLines.push({type:"separator",t:a,a:"left",b:!1,s:"normal"}),this.items.push({type:"separator",char:t}),this}doubleSeparator(){const t="=".repeat(this.cols);return this.align("left"),this.text(t),this.bytes.push(10),this.plainLines.push(t),this.previewLines.push({type:"double-separator",t,a:"left",b:!1,s:"normal"}),this.items.push({type:"double-separator"}),this}feed(t=3){this.bytes.push(27,100,Math.max(1,t));for(let a=0;a<t;a++)this.plainLines.push(""),this.previewLines.push({t:"",a:"left",b:!1,s:"normal"});return this.items.push({type:"feed",lines:t}),this}cut(){return this.bytes.push(29,86,65,3),this}openDrawer(){return this.bytes.push(27,112,0,25,250),this}barcode(t,a="CODE128",s=45){if(!t)return this;const o=H(String(t)).trim();if(!o)return this;if(this.align("center"),this.bytes.push(29,104,Math.max(30,Math.min(100,s))),this.bytes.push(29,119,2),this.bytes.push(29,72,0),a==="CODE39"){this.bytes.push(29,107,4);for(let n=0;n<o.length;n++)this.bytes.push(o.charCodeAt(n));this.bytes.push(0)}else{const n=[];for(let r=0;r<o.length;r++)n.push(o.charCodeAt(r));this.bytes.push(29,107,73,n.length+2,123,66,...n)}return this.plainLines.push(`[BARCODE: ${o}]`),this.previewLines.push({type:"barcode",code:o,t:o,a:"center",b:!1,s:"barcode",isBarcode:!0}),this.items.push({type:"barcode",code:o}),this}toBase64(){const t=new Uint8Array(this.bytes);let a="";const s=t.length,o=8192;for(let n=0;n<s;n+=o){const r=t.subarray(n,n+o);a+=String.fromCharCode.apply(null,r)}return btoa(a)}toPlainText(){return this.plainLines.join(`
`)}toHtml(){let t="";for(const a of this.items)if(a.type==="line"){const s=a.align==="center"?"utp-align-center":a.align==="right"?"utp-align-right":"utp-align-left",o=a.bold?"font-bold":"";let n="";a.size==="title"||a.size==="wide"?n="utp-title":(a.size==="tall"||a.size==="total")&&(n="utp-tall"),!a.text||!a.text.trim()?t+='<div class="utp-empty-line">&nbsp;</div>':t+=`<div class="utp-line ${s} ${o} ${n}">${De(a.text)}</div>`}else if(a.type==="two-column"){const s=a.bold?"font-bold":"";let o="";a.size==="title"||a.size==="wide"?o="utp-title":(a.size==="tall"||a.size==="total")&&(o="utp-tall"),t+=`<div class="utp-row ${s} ${o}"><div class="utp-col-left">${De(a.left)}</div><div class="utp-col-right">${De(a.right)}</div></div>`}else if(a.type==="separator")t+='<div class="utp-separator"></div>';else if(a.type==="double-separator")t+='<div class="utp-double-separator"></div>';else if(a.type==="barcode")t+=`
                <div class="utp-barcode-wrap">
                    <div class="utp-barcode-bars" aria-hidden="true"></div>
                    <div class="utp-barcode-code">*${i(a.code)}*</div>
                </div>`;else if(a.type==="feed"){const s=Math.max(1,a.lines||1)*6;t+=`<div style="height:${s}px;"></div>`}return t}}const Ee=(e,t="",a="",s={})=>{if(!s.skipPreview)return Pa({base64:e,plainText:t,html:a,previewLines:s.previewLines,title:s.title,rebuild:s.rebuild,onConfirm:s.onConfirm,onCancel:s.onCancel,dispatch:(o,n,r)=>Xt(o,n,r)});if(typeof s.onConfirm=="function")try{s.onConfirm()}catch{}return Xt(e,t,a)},Xt=(e,t="",a="")=>{const s=/android/i.test(navigator.userAgent||"");if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function")try{return window.AndroidNativeApp.printRawBT(e),X("Mencetak struk via RawBT..."),!0}catch(o){console.warn("[RawBT] AndroidNativeApp error, mencoba intent...",o)}if(s)try{X("Membuka Printer RawBT...");const o=`intent:base64,${e}#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;end;`;return window.location.href=o,setTimeout(()=>{if(!document.hidden)try{window.location.href=`rawbt:base64,${e}`}catch{}},800),!0}catch(o){console.warn("[RawBT] Intent trigger failed:",o)}return X("Mencetak struk kasir..."),yt(a||t),!0},yt=e=>{const t=z(),s=ve(t.paperSize)>=40,o=s?"80mm":"58mm",n=s?"68mm":"44mm",r=s?"10.5px":"8.8px",d=typeof e=="string"&&e.includes("<")&&e.includes(">");let c=e;d||(c=String(e||"").split(`
`).map(y=>{const b=y.trim();if(!b)return'<div class="utp-empty-line">&nbsp;</div>';if(/^[-]{8,}$/.test(b))return'<div class="utp-separator"></div>';if(/^[=]{8,}$/.test(b))return'<div class="utp-double-separator"></div>';if(/^\[BARCODE:\s*(.+)\]$/i.test(b)){const m=b.replace(/^\[BARCODE:\s*/i,"").replace(/\]$/,"").trim();return`
                <div class="utp-barcode-wrap">
                    <div class="utp-barcode-bars" aria-hidden="true"></div>
                    <div class="utp-barcode-code">*${i(m)}*</div>
                </div>`}const w=y.match(/^(\s{0,4}.+?)\s{3,}(.+)$/);return w&&w[1]&&w[2]?`<div class="utp-row"><div class="utp-col-left">${De(w[1])}</div><div class="utp-col-right">${De(w[2])}</div></div>`:`<div class="utp-line">${De(y)}</div>`}).join(""));try{let p=document.getElementById("thermal-print-iframe");p&&p.remove(),p=document.createElement("iframe"),p.id="thermal-print-iframe",p.style.position="fixed",p.style.right="0",p.style.bottom="0",p.style.width="0",p.style.height="0",p.style.border="0",p.style.visibility="hidden",p.style.zIndex="-9999",document.body.appendChild(p);const y=p.contentDocument||p.contentWindow.document;y.open(),y.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Cetak Struk Thermal</title>
  <style>
    @page {
      margin: 0mm !important;
      size: ${o} auto;
    }
    * {
      box-sizing: border-box !important;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      width: ${n} !important;
      max-width: ${n} !important;
      background: #fff;
      color: #000;
      font-family: 'Courier New', Courier, monospace;
      font-size: ${r};
      line-height: 1.25;
      overflow: hidden;
    }
    .utp-thermal-wrap {
      width: ${n} !important;
      max-width: ${n} !important;
      box-sizing: border-box !important;
      padding: 0 ${s?"2.5mm":"1.5mm"} 4mm ${s?"1mm":"0.5mm"} !important;
      margin: 0 !important;
    }
    .utp-row {
      display: flex !important;
      justify-content: space-between !important;
      align-items: baseline !important;
      width: 100% !important;
      margin: 0.5px 0 !important;
      line-height: 1.25 !important;
      box-sizing: border-box !important;
    }
    .utp-col-left {
      text-align: left !important;
      word-break: break-word !important;
      flex: 1 1 auto !important;
      min-width: 0 !important;
    }
    .utp-col-right {
      text-align: right !important;
      white-space: nowrap !important;
      flex-shrink: 0 !important;
      margin-left: 5px !important;
      padding-right: ${s?"2.5mm":"1.5mm"} !important;
      font-variant-numeric: tabular-nums !important;
    }
    .utp-line {
      line-height: 1.25 !important;
      word-break: break-word !important;
      margin: 0.5px 0 !important;
    }
    .utp-align-center { text-align: center !important; }
    .utp-align-right { text-align: right !important; }
    .utp-align-left { text-align: left !important; }
    .font-bold { font-weight: bold !important; }
    .utp-title { font-size: 1.2em !important; font-weight: bold !important; line-height: 1.15 !important; }
    .utp-tall { font-size: 1.12em !important; font-weight: bold !important; }
    .utp-empty-line { height: 0.6em !important; }
    .utp-separator {
      border-bottom: 1px dashed #000 !important;
      margin: 2.5px 0 !important;
      width: 100% !important;
      height: 0 !important;
    }
    .utp-double-separator {
      border-bottom: 3px double #000 !important;
      margin: 2.5px 0 !important;
      width: 100% !important;
      height: 0 !important;
    }
    .utp-barcode-wrap {
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
      margin: 4px 0 2px !important;
      text-align: center !important;
      width: 100% !important;
    }
    .utp-barcode-bars {
      width: 82% !important;
      max-width: ${s?"220px":"150px"} !important;
      height: ${s?"36px":"30px"} !important;
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
      ) !important;
      border-top: 1px solid #000 !important;
      border-bottom: 1px solid #000 !important;
    }
    .utp-barcode-code {
      font-family: 'Courier New', Courier, monospace !important;
      font-size: 9.5px !important;
      font-weight: bold !important;
      letter-spacing: 2px !important;
      margin-top: 2px !important;
      text-align: center !important;
    }
  </style>
</head>
<body>
  <div class="utp-thermal-wrap">
    ${c}
  </div>
</body>
</html>`),y.close(),setTimeout(()=>{try{p.contentWindow.focus(),p.contentWindow.print()}catch(b){console.warn("[RawBT] Iframe print gagal, fallback ke direct print:",b),ea(c,o,n)}},120);return}catch(p){console.warn("[RawBT] Gagal membuat isolated print iframe:",p)}ea(c,o,n)},ea=(e,t,a)=>{let s=g("thermal-print-section");s||(s=document.createElement("div"),s.id="thermal-print-section",document.body.appendChild(s));const o=t==="80mm";s.className=o?"paper-80mm":"paper-58mm",document.body.classList.remove("paper-58mm","paper-80mm"),document.body.classList.add(o?"paper-80mm":"paper-58mm");let n=document.getElementById("dynamic-print-page-style");n||(n=document.createElement("style"),n.id="dynamic-print-page-style",document.head.appendChild(n)),n.innerHTML=`@media print { @page { margin: 0 !important; size: ${t} auto; } html, body { width: ${a} !important; margin: 0 !important; } }`,s.innerHTML=`
        <div class="utp-thermal-wrap" style="width:${a};max-width:${a};font-family:'Courier New',Courier,monospace;font-size:${o?"10.5px":"8.8px"};line-height:1.25;color:#000;background:#fff;padding:0 ${o?"2.5mm":"1.5mm"} 4mm ${o?"1mm":"0.5mm"};margin:0;box-sizing:border-box;">
            ${e}
        </div>
    `,setTimeout(()=>{window.print()},120)},Aa=()=>{if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.openRawBT=="function"){window.AndroidNativeApp.openRawBT();return}/android/i.test(navigator.userAgent||"")?(window.location.href="intent:#Intent;package=ru.a402d.rawbtprinter;end;",setTimeout(()=>{document.hidden||(window.location.href="https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter")},1200)):window.open("https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter","_blank")},lt=(e,t=null)=>{const a=t||z(),s=ve(a.paperSize),o=s>=40,n=new Oe(s);n.init(),a.openCashDrawer&&e.payment?.method==="cash"&&n.openDrawer();const r=H(a.headerText||u.store?.name||"TOKO PUTRI").trim(),d=H(a.storeAddress!==void 0&&a.storeAddress!==""?a.storeAddress:u.store?.address||"").trim(),c=H(a.storePhone!==void 0&&a.storePhone!==""?a.storePhone:u.store?.wa||"").trim(),p=Math.floor(s/2);r.length<=p?(n.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),n.size("normal").bold(!1)):(n.align("center").bold(!0).size("tall"),U(r.toUpperCase(),s).forEach($=>n.line($,"center")),n.size("normal").bold(!1)),a.showAddress!==!1&&d&&U(d,s).forEach($=>n.line($,"center")),a.showPhone!==!1&&c&&n.line(`WA: ${c}`,"center");const y=e.payment?.taxNpwp||u.store?.taxNpwp;a.showNpwp!==!1&&y&&n.line(`NPWP: ${y}`,"center"),n.separator("-");const b=ue(e.dateMs||Date.now(),o),w=`#${e.txId}`;n.twoColumn(`No : ${w}`,b,!1,!0);const m=H(e.cashierName||"Kasir").trim(),f=!!(e.customer?.isMember||e.customerType==="Member"),l=H(e.customer?.name||"Umum").trim(),A=f?`${l} (Member)`:l,M=`Ksr: ${m}`,D=`Plg: ${A}`;if(M.length+1+D.length<=s?n.twoColumn(M,D,!1,!1):(n.line(M,"left"),n.line(D,"left")),e.customer?.phone&&n.line(`HP : ${e.customer.phone}`,"left"),f&&e.customer?.memberId&&n.line(`ID : ${e.customer.memberId}`,"left"),n.separator("-"),(e.items||[]).forEach($=>{n.itemRow($)}),n.separator("-"),n.twoColumn("Subtotal",L(e.subtotal)),(e.globalDiscount||0)>0){const $=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";n.twoColumn($,`- ${L(e.globalDiscount)}`)}(e.pointDiscount||0)>0&&n.twoColumn(`Diskon Poin (${e.pointsRedeemed||0} Poin)`,`- ${L(e.pointDiscount)}`),e.claimedReward&&e.claimedReward.name&&(n.separator("-"),n.bold(!0).line(`[KLAIM HADIAH: ${H(e.claimedReward.name)}]`,"left").bold(!1),n.twoColumn("Poin Reward Ditukar",`-${e.claimedReward.pointsCost||0} Poin`));const C=Je(e);if(C.hasPpn){const $=C.ppnAmount>0?`${C.isInclusive?"":"+ "}${L(C.ppnAmount)}`:"Rp 0";n.twoColumn(C.ppnLabel,$)}n.doubleSeparator(),n.bold(!0).size("tall").twoColumn("TOTAL",L(e.total)).size("normal").bold(!1),n.doubleSeparator();const v=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",x=v?"PUTRI PAYLATER":(e.payment?.method||"CASH").toUpperCase();if(n.twoColumn("Metode Bayar",x),e.payment?.method==="cash")n.twoColumn("Bayar Tunai",L(e.payment.paid)),n.bold(!0).twoColumn("Kembalian",L(e.payment.change)).bold(!1);else if(e.payment?.method==="transfer")e.payment?.bank&&n.twoColumn("Bank Penerima",e.payment.bank);else if(e.payment?.method==="qris")n.twoColumn("Kanal QRIS","QRIS Dinamis (Lunas)");else if(e.payment?.method==="tempo"){if(v){if(n.twoColumn("Limit Terpakai",L(e.payment?.paylaterUsed||e.paylaterUsed||e.total-(e.payment?.tempoDp??0))),e.payment?.paylaterMonths){const $=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";n.twoColumn("Tenor Cicilan",`${$} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&n.twoColumn("Biaya Admin",`+ ${L(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&n.twoColumn("Biaya Layanan",`+ ${L(e.payment.paylaterServiceFee)}`)}if(n.twoColumn("Uang Muka (DP)",L(e.payment?.tempoDp??e.payment?.dp??0)),n.bold(!0).twoColumn(v?"Tagihan PayLater":"Sisa Piutang",L(e.payment.tempoBalance||0)).bold(!1),v&&e.payment?.paylaterMonthlyInstallment&&n.twoColumn("Angsuran/Bln",`${L(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),e.payment.tempoDueDate){const $=typeof e.payment.tempoDueDate=="number"?new Date(e.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e.payment.tempoDueDate;n.line(`Jatuh Tempo: ${$}`,"left")}}a.showPoints&&(e.pointsEarned>0||(e.pointsRedeemed||0)>0)&&(n.separator("-"),e.pointsEarned>0&&n.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),(e.pointsRedeemed||0)>0&&n.twoColumn("Poin Ditukar",`-${e.pointsRedeemed} Poin`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&n.twoColumn("Sisa Saldo Poin",`${e.finalMemberPoints} Poin`)),a.showBarcode&&(n.separator("-"),n.barcode(`POS-${e.txId}`,"CODE128",45),n.line(`*POS-${e.txId}*`,"center"),n.line("(SCAN DI KASIR)","center")),n.separator("-");const S=H(a.footerText||"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.").trim();S&&U(S,s).forEach($=>n.line($,"center"));const P=H(a.footerPolicyNote!==void 0?a.footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi.").trim();return P&&(n.line("","center"),U(P,s).forEach($=>n.line($,"center"))),n.feed(a.feedLines||3),a.autoCut&&n.cut(),{base64:n.toBase64(),plainText:n.toPlainText(),previewLines:n.previewLines,html:n.toHtml()}},dt=(e,t=!1,a=null)=>{const s=a||z(),o=ve(s.paperSize),n=o>=40,r=new Oe(o);r.init();const d=H(s.headerText||u.store?.name||"TOKO PUTRI").trim(),c=H(u.store?.address||"").trim(),p=H(u.store?.wa||"").trim(),y=Math.floor(o/2);d.length<=y?(r.align("center").bold(!0).size("title").line(d.toUpperCase(),"center"),r.size("normal").bold(!1)):(r.align("center").bold(!0).size("tall"),U(d.toUpperCase(),o).forEach(O=>r.line(O,"center")),r.size("normal").bold(!1)),c&&U(c,o).forEach(O=>r.line(O,"center")),p&&r.line(`WA: ${p}`,"center"),r.separator("-");const b=n?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **";r.bold(!0).line(b,"center").bold(!1),r.separator("-");const w=ue(e.startTime,n),m=ue(e.endTime||Date.now(),n);r.twoColumn("Shift ID",`#${e.shiftNo||e.id||"-"}`,!1,!0),r.twoColumn("Kasir",(e.cashierName||"Kasir").substring(0,n?20:12),!1,!0),r.twoColumn("Mulai",w,!1,!0),r.twoColumn("Selesai",m,!1,!0),r.separator("-");const f=parseFloat(e.startingCash)||0,l=parseFloat(e.cashSales)||0,A=parseFloat(e.qrisSales)||0,M=parseFloat(e.bankSales||e.transferSales)||0,D=parseFloat(e.tempoSales)||0,C=parseFloat(e.cashIn)||0,v=parseFloat(e.cashOut)||0,x=parseFloat(e.totalSales)||l+A+M+D,S=e.txCount||0;r.bold(!0).line("RINGKASAN PENJUALAN","left").bold(!1),r.twoColumn("Modal Awal Laci",L(f)),r.twoColumn("Penjualan Tunai",L(l)),A>0&&r.twoColumn("Penjualan QRIS",L(A)),M>0&&r.twoColumn("Penjualan Transfer",L(M)),D>0&&r.twoColumn("Penjualan Tempo",L(D)),C>0&&r.twoColumn("Kas Masuk (In)",`+${L(C)}`),v>0&&r.twoColumn("Kas Keluar (Out)",`-${L(v)}`),r.separator("-"),r.twoColumn("Total Transaksi",`${S} Trx`),r.bold(!0).size("tall").twoColumn("TOTAL OMSET",L(x)).size("normal").bold(!1),r.doubleSeparator();const P=Math.max(0,f+l+C-v);if(t)r.bold(!0).line("STATUS KAS LACI SAAT INI","left").bold(!1),r.twoColumn("Uang Kas Seharusnya",L(P)),r.separator("-");else{const O=e.actualCash!==void 0?parseFloat(e.actualCash):P,R=O-P,h=R===0?"PAS (0)":R>0?`+${L(R)}`:`-${L(Math.abs(R))}`;r.bold(!0).line("REKONSILIASI KAS FISIK","left").bold(!1),r.twoColumn("Kas Diharapkan",L(P)),r.twoColumn("Kas Fisik Aktual",L(O)),r.bold(!0).twoColumn("Selisih Kas",h,!0).bold(!1),e.closingNotes&&U(`Catatan: ${e.closingNotes}`,o).forEach(F=>r.line(F,"left")),r.separator("-"),r.line("Verifikasi & Tanda Tangan:","left"),r.feed(2);const T=Math.floor(o/2),N="( Kasir )",K=n?"( Supervisor/Owner )":"( Supervisor )",B=Math.max(0,Math.floor((T-N.length)/2)),I=Math.max(0,Math.floor((T-K.length)/2)),E=" ".repeat(B)+N+" ".repeat(Math.max(1,T-B-N.length))+" ".repeat(I)+K;r.line(E,"left"),r.separator("-")}const $=s.footerText||"Laporan Kasir Resmi Toko Putri";return U($,o).forEach(O=>r.line(O,"center")),r.feed(s.feedLines||3),s.autoCut&&r.cut(),{base64:r.toBase64(),plainText:r.toPlainText(),previewLines:r.previewLines,html:r.toHtml()}},ct=(e,t=null)=>{const a=t||z(),s=ve(a.paperSize),o=s>=40,n=new Oe(s);n.init();const r=H(a.headerText||u.store?.name||"TOKO PUTRI").trim(),d=H(a.storeAddress!==void 0&&a.storeAddress!==""?a.storeAddress:u.store?.address||"").trim(),c=H(a.storePhone!==void 0&&a.storePhone!==""?a.storePhone:u.store?.wa||"").trim(),p=Math.floor(s/2);r.length<=p?(n.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),n.size("normal").bold(!1)):(n.align("center").bold(!0).size("tall"),U(r.toUpperCase(),s).forEach(S=>n.line(S,"center")),n.size("normal").bold(!1)),a.showAddress!==!1&&d&&U(d,s).forEach(S=>n.line(S,"center")),a.showPhone!==!1&&c&&n.line(`WA: ${c}`,"center");const y=e.payment?.taxNpwp||u.store?.taxNpwp;a.showNpwp!==!1&&y&&n.line(`NPWP: ${y}`,"center"),n.separator("-");const b=ue(e.dateString||e.dateMs||Date.now(),o);n.twoColumn(`Order: #${e.orderId}`,b,!1,!0);const w=(e.customer?.name||"Guest").substring(0,o?18:11),m=e.customer?.deliveryMethod==="delivery"?"Kirim":"Ambil";n.twoColumn(`Plg  : ${w}`,`Tipe: ${m}`,!1,!0),e.customer?.phone&&n.line(`HP   : ${e.customer.phone}`,"left"),e.customer?.note&&U(`Cat  : ${e.customer.note}`,s).forEach(S=>n.line(S,"left")),n.separator("-");const f=Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[];f.length>0?f.forEach(S=>{n.itemRow(S)}):n.line("- Tidak ada rincian barang -","center"),n.separator("-");const l=Je(e),A=l.subtotal,M=l.shipping,D=l.grandTotal;if(n.twoColumn("Subtotal",L(A)),(e.customer?.deliveryMethod==="delivery"||e.deliveryMethod==="delivery")&&n.twoColumn("Ongkos Kirim",L(M)),l.productDiscount&&n.twoColumn("Potongan Harga",`- ${L(l.productDiscount)}`),l.shippingDiscount&&n.twoColumn("Potongan Ongkir",`- ${L(l.shippingDiscount)}`),l.pointDiscount>0&&n.twoColumn("Potongan Poin",`- ${L(l.pointDiscount)}`),l.paylaterAdminFee>0&&n.twoColumn("Biaya Admin",`+ ${L(l.paylaterAdminFee)}`),l.paylaterServiceFee>0&&n.twoColumn("Biaya Layanan",`+ ${L(l.paylaterServiceFee)}`),l.hasPpn){const S=l.ppnAmount>0?`${l.isInclusive?"":"+ "}${L(l.ppnAmount)}`:"Rp 0";n.twoColumn(l.ppnLabel,S)}n.doubleSeparator(),n.bold(!0).size("tall").twoColumn("TOTAL",L(D)).size("normal").bold(!1),n.doubleSeparator();const C=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater";if(n.twoColumn("Metode Bayar",C?"PUTRI PAYLATER":(e.payment?.method||"Tunai").toUpperCase()),C){if(e.payment?.paylaterMonths){const S=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";n.twoColumn("Tenor Cicilan",`${S} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&n.twoColumn("Biaya Admin",`+ ${L(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&n.twoColumn("Biaya Layanan",`+ ${L(e.payment.paylaterServiceFee)}`),e.payment?.paylaterMonthlyInstallment&&n.twoColumn("Angsuran/Bln",`${L(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`)}a.showPoints&&(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(n.separator("-"),e.pointsEarned>0&&n.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),e.finalMemberPoints!==void 0&&n.twoColumn("Saldo Poin",`${e.finalMemberPoints} Poin`)),a.showBarcode&&(n.separator("-"),n.barcode(`ORDER-${e.orderId}`,"CODE128",45),n.line(`*ORDER-${e.orderId}*`,"center"),n.line("(SCAN DI KASIR)","center")),n.separator("-");const v=H(a.footerText||"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.").trim();v&&U(v,s).forEach(S=>n.line(S,"center"));const x=H(a.footerPolicyNote!==void 0?a.footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi.").trim();return x&&(n.line("","center"),U(x,s).forEach(S=>n.line(S,"center"))),n.feed(a.feedLines||3),a.autoCut&&n.cut(),{base64:n.toBase64(),plainText:n.toPlainText(),previewLines:n.previewLines,html:n.toHtml()}},pt=(e,t=null)=>{const a=t||z(),s=ve(a.paperSize),o=s>=40,n=new Oe(s);n.init();const r=H(a.headerText||u.store?.name||"TOKO PUTRI").trim(),d=H(a.storeAddress!==void 0&&a.storeAddress!==""?a.storeAddress:u.store?.address||"").trim(),c=H(a.storePhone!==void 0&&a.storePhone!==""?a.storePhone:u.store?.wa||"").trim(),p=Math.floor(s/2);r.length<=p?(n.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),n.size("normal").bold(!1)):(n.align("center").bold(!0).size("tall"),U(r.toUpperCase(),s).forEach(I=>n.line(I,"center")),n.size("normal").bold(!1)),a.showAddress!==!1&&d&&U(d,s).forEach(I=>n.line(I,"center")),a.showPhone!==!1&&c&&n.line(`WA: ${c}`,"center");const y=e.payment?.taxNpwp||u.store?.taxNpwp;a.showNpwp!==!1&&y&&n.line(`NPWP: ${y}`,"center"),n.separator("-");const b=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",w=e.payment?.paymentStatus==="lunas"||parseFloat(e.payment?.tempoBalance||0)<=0,m=o?b?w?"*** NOTA PUTRI PAYLATER (LUNAS) ***":"*** NOTA TAGIHAN PUTRI PAYLATER ***":w?"*** NOTA TEMPO (LUNAS) ***":"*** NOTA TAGIHAN TEMPO (PIUTANG) ***":b?w?"** PAYLATER (LUNAS) **":"** NOTA PUTRI PAYLATER **":w?"** NOTA TEMPO (LUNAS) **":"** NOTA TAGIHAN TEMPO **";n.bold(!0).line(m,"center").bold(!1),n.separator("-");const f=ue(e.dateString||e.timestamp||Date.now(),o);n.twoColumn(`Order: #${e.orderId}`,f,!1,!0);const l=(e.customer?.name||"Pelanggan").substring(0,o?18:11);if(n.twoColumn(`Plg  : ${l}`,b?"Tipe: PayLater":"Tipe: Tempo",!1,!0),b&&e.payment?.paylaterMonths){const I=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";n.twoColumn("Tenor Cicilan",`${I} (${e.payment.paylaterMonths}x)`,!1,!0)}(e.customer?.phone||e.customer?.wa)&&n.line(`HP   : ${e.customer.wa||e.customer.phone}`,"left");let A=parseFloat(e.payment?.tempoBalance)||0,M=e.payment?.tempoPenaltyRate!==void 0?parseFloat(e.payment.tempoPenaltyRate):1,D=e.payment?.tempoPenaltyStopped===!0,C=0,v=e.payment?.tempoDueDate||0,x=0,S=0,P=!1,$=!1;const O=Date.now();v>0&&(O>v?(x=Math.floor((O-v)/(24*60*60*1e3)),x>0&&(P=!0)):(S=Math.ceil((v-O)/(24*60*60*1e3)),S<=3&&($=!0))),D?C=parseFloat(e.payment?.tempoFixedPenalty)||0:P&&(C=M/100*A*x);let R=A+C;const h=e.payment?.installments||[],T=h.reduce((I,E)=>I+(parseFloat(E.amount)||0),0),N=e.payment?.grandTotal||A+T;if(v>0){const I=ue(v,o);let E="";w?E="LUNAS":P?E=`Telat ${x} Hari`:$?E=`H-${S<=0?0:S}`:E=`Sisa ${S} Hari`,n.twoColumn(`J.Tmp: ${I}`,E,!1,!0)}n.separator("-"),(e.items||[]).forEach(I=>{n.itemRow(I)}),n.separator("-"),n.twoColumn("Total Transaksi",L(N)),b&&(e.payment?.paylaterAdminFee>0&&n.twoColumn("Biaya Admin",`+ ${L(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&n.twoColumn("Biaya Penanganan",`+ ${L(e.payment.paylaterServiceFee)}`)),h.length>0&&(n.separator("-"),n.bold(!0).line("HISTORI PEMBAYARAN CICILAN:","left").bold(!1),h.forEach((I,E)=>{const F=ue(I.date,o);n.twoColumn(`${E+1}. ${F}`,L(I.amount))}),n.twoColumn("Total Terbayar",L(T),!0)),n.twoColumn("Sisa Pokok",L(A)),b&&e.payment?.paylaterMonthlyInstallment&&n.twoColumn("Angsuran/Bln",`${L(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),C>0&&n.twoColumn(`Denda (${x} Hari)`,`+ ${L(C)}`),n.doubleSeparator(),n.bold(!0).size("tall").twoColumn(b?"TAGIHAN PAYLATER":"SISA TAGIHAN",L(w?0:R)).size("normal").bold(!1),n.doubleSeparator(),!w&&u.banks&&u.banks.length>0&&(n.line("REKENING TRANSFER RESMI:","left"),(u.banks||[]).forEach(I=>{n.line(`${I.bank||I.bankName||"Bank"}: ${I.number||I.bankAccount||"-"}`,"left"),n.line(`a/n ${I.name||I.bankOwner||"-"}`,"left")}),n.separator("-")),a.showBarcode&&(n.separator("-"),n.barcode(b?`PAYLATER-${e.orderId}`:`TEMPO-${e.orderId}`,"CODE128",45),n.line(b?`*PAYLATER-${e.orderId}*`:`*TEMPO-${e.orderId}*`,"center"),n.line(b?"(PUTRI PAYLATER RESMI)":"(NOTA TEMPO RESMI)","center")),n.separator("-");const K=H(a.footerText||"Terima kasih atas kerja sama dan kepercayaan Anda.").trim();K&&U(K,s).forEach(I=>n.line(I,"center"));const B=H(a.footerPolicyNote!==void 0?a.footerPolicyNote:"").trim();return B&&(n.line("","center"),U(B,s).forEach(I=>n.line(I,"center"))),n.feed(a.feedLines||3),a.autoCut&&n.cut(),{base64:n.toBase64(),plainText:n.toPlainText(),previewLines:n.previewLines,html:n.toHtml()}},ut=(e=null)=>{const t=e||z(),a=ve(t.paperSize),s=a>=40,o=new Oe(a);o.init();const n=H(t.headerText||u.store?.name||"TOKO PUTRI").trim(),r=H(t.storeAddress!==void 0&&t.storeAddress!==""?t.storeAddress:u.store?.address||"").trim(),d=H(t.storePhone!==void 0&&t.storePhone!==""?t.storePhone:u.store?.wa||"").trim(),c=Math.floor(a/2);n.length<=c?(o.align("center").bold(!0).size("title").line(n.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),U(n.toUpperCase(),a).forEach(m=>o.line(m,"center")),o.size("normal").bold(!1)),t.showAddress!==!1&&r&&U(r,a).forEach(m=>o.line(m,"center")),t.showPhone!==!1&&d&&o.line(`WA: ${d}`,"center"),o.separator("-");const p=s?`*** UJI COBA CETAK STRUK THERMAL ${a} KOLOM ***`:`** UJI CETAK THERMAL ${a} KOLOM **`;o.bold(!0).line(p,"center").bold(!1),o.separator("-"),o.line("MISTAR KALIBRASI TEPI KERTAS:","left");let y="";for(let m=1;m<=a;m++)y+=String(m%10);o.line(y,"left");let b="";for(let m=1;m<=a;m++)m===a||m%10===0?b+="|":m%5===0?b+=":":b+=".";o.line(b,"left"),o.line(`(Pastikan angka ${a%10} paling kanan tercetak utuh)`,"left"),o.separator("-");const w=ue(Date.now(),s);if(o.line(`Waktu   : ${w}`,"left"),o.line(`Format  : Thermal ${a} Kolom (${t.paperSize})`,"left"),o.line("Driver  : RAWBT FREE PRINT SERVICE","left"),o.line("Status  : 100% PRESISI & SIAP PAKAI","left"),o.separator("-"),o.bold(!0).twoColumn("ITEM SIMULASI","HARGA").bold(!1),o.itemRow({name:"Kertas Thermal Kasir Roll",qty:2,unit:"roll",price:15e3,subtotal:3e4}),o.itemRow({name:"Semen Portland Komposit 40kg",qty:1,unit:"sak",price:65e3,subtotal:65e3}),o.separator("-"),o.twoColumn("Subtotal",L(95e3)),o.twoColumn("Diskon Uji Coba",`- ${L(5e3)}`),o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL TES",L(9e4)).size("normal").bold(!1),o.doubleSeparator(),o.twoColumn("Bayar Tunai",L(1e5)),o.bold(!0).twoColumn("Kembalian",L(1e4)).bold(!1),t.showPoints&&(o.separator("-"),o.twoColumn("Simulasi Poin Member","+10 Poin")),t.showBarcode){o.separator("-");const m=`TEST-${Date.now().toString().slice(-6)}`;o.barcode(m,"CODE128",45),o.line(`*${m}*`,"center"),o.line("(BARCODE TEST BERHASIL)","center")}return o.separator("-"),U(t.footerText||"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.",a).forEach(m=>o.line(m,"center")),t.footerPolicyNote&&(o.line("","center"),U(t.footerPolicyNote,a).forEach(m=>o.line(m,"center"))),U("Hasil cetak telah terkalibrasi presisi.",a).forEach(m=>o.line(m,"center")),o.feed(t.feedLines||3),t.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},vt=e=>{const t=document.getElementById(e);return!!t&&!t.classList.contains("hidden")},Ma=e=>{if(!e){X("Data transaksi kasir tidak ditemukan.","warning");return}const t=z(),a=lt(e,t),s=vt("pos-receipt-fallback-modal");Ee(a.base64,a.plainText,a.html,{skipPreview:s,previewLines:a.previewLines,title:`Struk Kasir #${e.txId||""}`,rebuild:()=>lt(e,z()),onConfirm:()=>{document.getElementById("pos-success-modal")?.remove(),document.getElementById("pos-receipt-fallback-modal")?.remove()}})},Ca=(e,t=!1)=>{if(!e){X("Data shift tidak ditemukan.","warning");return}const a=z(),s=dt(e,t,a),o=vt("pos-shift-receipt-modal");Ee(s.base64,s.plainText,s.html,{skipPreview:o,previewLines:s.previewLines,title:`${t?"Ringkasan Shift (X-Report)":"Rekap Tutup Shift (Z-Report)"} #${e.shiftNo||e.id||""}`,rebuild:()=>dt(e,t,z()),onConfirm:()=>document.getElementById("pos-shift-receipt-modal")?.remove()})},La=async(e=null)=>{const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||Le,a=String(t||"").replace(/^#/,"").trim(),s=c=>{if(!c)return!1;const p=String(c.orderId||"").replace(/^#/,"").trim();return a?p===a||p.endsWith(a)||a.endsWith(p):!0};let o=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(o=e),(!o||!o.items||o.items.length===0)&&s(window.currentCustomerOrder)&&(o=window.currentCustomerOrder),(!o||!o.items||o.items.length===0)&&s(window.lastPrintedOrder)&&(o=window.lastPrintedOrder),(!o||!o.items||o.items.length===0)&&(Ne||[]).length>0){const c=Ne.find(s);c&&Array.isArray(c.items)&&c.items.length>0&&(o=c)}if((!o||!o.items||o.items.length===0)&&Array.isArray(_)){const c=_.find(s);c&&Array.isArray(c.items)&&c.items.length>0&&(o=c)}if((!o||!o.items||o.items.length===0)&&a)try{const c=typeof we<"u"&&we?we:window.db;if(c){let p=await c.collection("freshmart_orders").doc(a).get();if(!p.exists&&!a.startsWith("ORD-")){const y=await c.collection("freshmart_orders").doc("ORD-"+a).get();y.exists&&(p=y)}if(p&&p.exists&&(o=p.data(),o.orderId=o.orderId||p.id,window.currentCustomerOrder=o,window.lastPrintedOrder=o,Array.isArray(_))){const y=_.findIndex(s);if(y!==-1){_[y].items=o.items||[],_[y].payment=o.payment||{},_[y].customer=o.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(_))}catch{}}}}}catch(c){console.warn("[RawBT] Gagal fetch order detail from Firestore:",c)}if(!o&&Array.isArray(_)&&(o=_.find(s)),!o){X("Data pesanan tidak ditemukan.","warning");return}window.lastPrintedOrder=o;const n=z(),r=ct(o,n),d=vt("receipt-preview-modal");Ee(r.base64,r.plainText,r.html,{skipPreview:d,previewLines:r.previewLines,title:`Struk Pesanan #${o.orderId||""}`,rebuild:()=>ct(o,z()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&d&&window.closeReceiptPreviewModal()}})},Da=(e=null)=>{const t=e||Le;let s=(window.cachedPiutangOrders||[]).find(d=>String(d.orderId)===String(t))||(Ne||[]).find(d=>String(d.orderId)===String(t));if(!s&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(t)&&(s=window.lastPrintedOrder),!s){if(typeof window.previewTempoReceipt=="function"&&t&&!window.__tempoReceiptFetching){window.__tempoReceiptFetching=!0,Promise.resolve(window.previewTempoReceipt(t)).finally(()=>{window.__tempoReceiptFetching=!1});return}X("Data nota piutang tidak ditemukan.","warning");return}const o=z(),n=pt(s,o),r=vt("receipt-preview-modal");Ee(n.base64,n.plainText,n.html,{skipPreview:r,previewLines:n.previewLines,title:`Nota Tagihan Tempo #${s.orderId||""}`,rebuild:()=>pt(s,z()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&r&&window.closeReceiptPreviewModal()}})},Na=()=>{const e=z(),t=ut(e);Ee(t.base64,t.plainText,t.html,{previewLines:t.previewLines,title:"Uji Coba Cetak Printer",rebuild:()=>ut(z())})};window.cleanLineAscii=H;window.wrapWords=U;window.formatTwoColumn=Ht;window.formatCompactDate=ue;window.EscPosBuilder=Oe;window.sendToRawBT=Ee;window.renderThermalDOMAndPrint=yt;window.openRawBTApp=Aa;window.buildPOSReceiptPayload=lt;window.buildShiftReceiptPayload=dt;window.buildOrderReceiptPayload=ct;window.buildTempoReceiptPayload=pt;window.buildTestReceiptPayload=ut;window.printPOSReceiptDirect=Ma;window.printShiftSettlementDirect=Ca;window.printCustomerReceiptDirect=La;window.printTempoReceiptDirect=Da;window.executeRawBTTestPrint=Na;const yn=Object.freeze(Object.defineProperty({__proto__:null,EscPosBuilder:Oe,buildOrderReceiptPayload:ct,buildPOSReceiptPayload:lt,buildShiftReceiptPayload:dt,buildTempoReceiptPayload:pt,buildTestReceiptPayload:ut,cleanLineAscii:H,escReceipt:De,executeRawBTTestPrint:Na,fRp:L,fRpNum:nt,formatCompactDate:ue,formatQty:$a,formatTwoColumn:Ht,openRawBTApp:Aa,printCustomerReceiptDirect:La,printPOSReceiptDirect:Ma,printShiftSettlementDirect:Ca,printTempoReceiptDirect:Da,renderThermalDOMAndPrint:yt,sendToRawBT:Ee,wrapWords:U},Symbol.toStringTag,{value:"Module"})),Ft=async(e=null)=>{if(e&&typeof Vt=="function"&&typeof e=="string"&&Vt(e),typeof window.printCustomerReceiptDirect=="function")return window.printCustomerReceiptDirect(e);const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||Le,a=String(t||"").replace(/^#/,"").trim(),s=T=>{if(!T)return!1;const N=String(T.orderId||"").replace(/^#/,"").trim();return a?N===a||N.endsWith(a)||a.endsWith(N):!0};let o=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(o=e),(!o||!o.items||o.items.length===0)&&s(window.currentCustomerOrder)&&(o=window.currentCustomerOrder),(!o||!o.items||o.items.length===0)&&s(window.lastPrintedOrder)&&(o=window.lastPrintedOrder),(!o||!o.items||o.items.length===0)&&(Ne||[]).length>0){const T=Ne.find(s);T&&Array.isArray(T.items)&&T.items.length>0&&(o=T)}if((!o||!o.items||o.items.length===0)&&Array.isArray(_)){const T=_.find(s);T&&Array.isArray(T.items)&&T.items.length>0&&(o=T)}if((!o||!o.items||o.items.length===0)&&a)try{const T=typeof we<"u"&&we?we:window.db;if(T){let N=await T.collection("freshmart_orders").doc(a).get();if(!N.exists&&!a.startsWith("ORD-")){const K=await T.collection("freshmart_orders").doc("ORD-"+a).get();K.exists&&(N=K)}if(N&&N.exists&&(o=N.data(),o.orderId=o.orderId||N.id,window.currentCustomerOrder=o,window.lastPrintedOrder=o,Array.isArray(_))){const K=_.findIndex(s);if(K!==-1){_[K].items=o.items||[],_[K].payment=o.payment||{},_[K].customer=o.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(_))}catch{}}}}}catch(T){console.warn("[Receipt] Gagal fetch order detail from Firestore:",T)}if(!o&&Array.isArray(_)&&(o=_.find(s)),!o)return;window.lastPrintedOrder=o;const n=typeof z=="function"?z():{paperSize:"58mm",showPoints:!0,showBarcode:!0},d=ve(n.paperSize)>=40,c=ue(o.dateString||o.date||Date.now(),d),p=n.headerText||u.store.name||"Toko Putri",y=n.storeAddress!==void 0&&n.storeAddress!==""?n.storeAddress:u.store.address||"",b=n.storePhone!==void 0&&n.storePhone!==""?n.storePhone:u.store.wa||"",w=(T,N)=>`<div class="utp-row"><div class="utp-col-left">${i(T)}</div><div class="utp-col-right">${i(N)}</div></div>`,m=Array.isArray(o.items)?o.items:Array.isArray(o.cart)?o.cart:[],f=Je(o),l=f.subtotal,A=f.shipping,M=f.grandTotal,D=String(o.payment?.method||o.method||"Tunai").toUpperCase(),C=o.customer?.name||o.customerName||"Guest",v=o.customer?.deliveryMethod==="delivery"||o.deliveryMethod==="delivery";let x=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${i(p)}</div>`;n.showAddress!==!1&&y&&(x+=`<div class="text-center" style="font-size:10px;color:#475569;margin-bottom:2px;">${i(y)}</div>`),n.showPhone!==!1&&b&&(x+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${i(b)}</div>`);const S=o.payment?.taxNpwp||u.store?.taxNpwp;if(n.showNpwp!==!1&&S&&(x+=`<div class="text-center" style="font-size:10px;font-family:monospace;margin-bottom:4px;">NPWP: ${i(S)}</div>`),x+='<div class="utp-separator"></div>',x+=w(`Order: #${o.orderId}`,c),x+=w(`Plg  : ${i(C).substring(0,d?18:10)}`,`Tipe: ${v?"Kirim":"Ambil"}`),(o.customer?.phone||o.customerPhone)&&(x+=`<div class="utp-line">HP   : ${i(o.customer?.phone||o.customerPhone)}</div>`),x+='<div class="utp-separator"></div>',o.customer?.note&&(x+=`<div style="white-space:pre-wrap;word-break:break-word;">Cat: ${i(o.customer.note)}</div><div class="utp-separator"></div>`),m.length>0?m.forEach(T=>{let N=T.variantName?` (${i(T.variantName)}${T.colorCode?" "+i(T.colorCode):""})`:"";const K=i(T.name||"Barang")+N+(T.poTime?" [PO]":""),B=T.effectivePrice||T.price||0,I=`  ${parseFloat(T.qty||1)} ${i(T.unit||"pcs")} x ${Math.round(B).toLocaleString("id-ID")}`,E=(parseFloat(T.qty||1)*B).toLocaleString("id-ID");x+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;">${K}</div>${w(I,E)}`,T.poTime&&(x+=`<div style="font-size:10px;font-style:italic;color:#4b5563;">  * Estimasi PO: ${i(T.poTime)}</div>`)}):x+='<div style="font-style:italic;color:#64748b;text-align:center;padding:4px 0;">- Tidak ada rincian barang -</div>',x+=`<div class="utp-separator"></div>${w("Subtotal",l.toLocaleString("id-ID"))}`,v&&(x+=w("Ongkir",A.toLocaleString("id-ID"))),f.shippingDiscount&&(x+=w("Pot.Ongkir",`-${f.shippingDiscount.toLocaleString("id-ID")}`)),f.productDiscount&&(x+=w("Pot.Harga",`-${f.productDiscount.toLocaleString("id-ID")}`)),f.pointDiscount>0&&(x+=w("Pot.Poin",`-${f.pointDiscount.toLocaleString("id-ID")}`)),f.paylaterAdminFee>0&&(x+=w("Biaya Admin",`+${f.paylaterAdminFee.toLocaleString("id-ID")}`)),f.paylaterServiceFee>0&&(x+=w("Biaya Layanan",`+${f.paylaterServiceFee.toLocaleString("id-ID")}`)),f.hasPpn){const T=f.ppnAmount>0?`${f.isInclusive?"":"+"}${f.ppnAmount.toLocaleString("id-ID")}`:"0";x+=w(f.ppnLabel,T)}if(x+=`<div class="utp-double-separator"></div><div class="font-bold text-[12px]">${w("TOTAL","Rp "+M.toLocaleString("id-ID"))}</div>${w("Metode Bayar",D)}`,o.payment?.method==="tempo"||o.payment?.isPaylater||o.payment?.subMethod==="paylater"){if(!!(o.payment?.isPaylater||o.payment?.subMethod==="paylater")){if(o.payment?.paylaterMonths){const N=o.payment?.paylaterTenor==="2m"?"2 Bulan":o.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari";x+=w("Tenor Cicilan",`${N} (${o.payment.paylaterMonths}x)`)}o.payment?.paylaterMonthlyInstallment&&(x+=`<div class="font-bold">${w("Angsuran/Bln","Rp "+Math.round(o.payment.paylaterMonthlyInstallment).toLocaleString("id-ID"))}</div>`),o.payment?.tempoDp>0&&(x+=w("Uang Muka (DP)","Rp "+Math.round(o.payment.tempoDp).toLocaleString("id-ID"))),x+=`<div class="font-bold">${w("Tagihan PayLater","Rp "+Math.round(o.payment?.tempoBalance||M).toLocaleString("id-ID"))}</div>`}else o.payment?.tempoDp>0&&(x+=w("Uang Muka (DP)","Rp "+Math.round(o.payment.tempoDp).toLocaleString("id-ID"))),x+=`<div class="font-bold">${w("Sisa Piutang","Rp "+Math.round(o.payment?.tempoBalance||M).toLocaleString("id-ID"))}</div>`;if(o.payment?.tempoDueDate){const N=typeof o.payment.tempoDueDate=="number"?new Date(o.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):o.payment.tempoDueDate;x+=w("Jatuh Tempo",N)}}n.showPoints&&(o.pointsEarned>0||o.finalMemberPoints!==void 0)&&(x+='<div class="utp-separator"></div>',o.pointsEarned>0&&(x+=w("Poin Didapat","+"+o.pointsEarned+" Poin")),o.finalMemberPoints!==void 0&&o.finalMemberPoints!==null&&(x+=`<div class="font-bold">${w("Saldo Poin",String(o.finalMemberPoints)+" Poin")}</div>`),o.claimedReward&&(x+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;margin-top:2px;">HADIAH: ${i(o.claimedReward.name)}</div>`)),m.some(T=>T&&T.poTime&&T.poTime!=="")&&(x+='<div class="utp-separator"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),n.showBarcode&&(x+=`<div class="utp-separator"></div>
        <div style="text-align:center;margin:6px 0 3px;">
            <div style="width:75%;max-width:200px;height:32px;margin:0 auto;background:repeating-linear-gradient(90deg,#000 0px,#000 2px,transparent 2px,transparent 4px,#000 4px,#000 7px,transparent 7px,transparent 9px,#000 9px,#000 11px,transparent 11px,transparent 13px,#000 13px,#000 16px,transparent 16px,transparent 18px,#000 18px,#000 19px,transparent 19px,transparent 22px);border-top:1px solid #000;border-bottom:1px solid #000;"></div>
            <div style="font-family:monospace;letter-spacing:2px;font-size:10.5px;font-weight:bold;margin-top:3px;">*ORDER-${i(o.orderId)}*</div>
            <div style="font-size:8px;color:#666;">SCAN DI KASIR</div>
        </div>`),x+=`<div class="utp-separator"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${i(n.footerText||"Terima Kasih Atas Kunjungan Anda")}</div>`,n.footerPolicyNote&&(x+=`<div class="text-center my-1" style="font-size:9px;line-height:1.25;color:#475569;">${i(n.footerPolicyNote)}</div>`),x+='<div class="utp-separator"></div><div style="height:15px;"></div>',pa("receipt-paper-content",x);const $=g("receipt-paper-content");$&&($.style.width=d?"340px":"260px");const O=g("receipt-preview-modal-box");O&&(O.classList.remove("max-w-[320px]","max-w-[400px]"),O.classList.add(d?"max-w-[400px]":"max-w-[320px]"));const R=g("receipt-preview-modal"),h=g("receipt-preview-modal-box");R&&R.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),ft(R,h)},fo=(e=!1)=>{const t=g("receipt-preview-modal"),a=g("receipt-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{Re(t,a)}):Re(t,a))},bo=()=>{const e=Le||(window.lastPrintedOrder?window.lastPrintedOrder.orderId:null);if(typeof window.printCustomerReceiptDirect=="function"){window.printCustomerReceiptDirect(e);return}if(!((Ne||[]).find(s=>s.orderId===Le)||(Array.isArray(_)?_.find(s=>s.orderId===Le):null)||window.lastPrintedOrder))return;const a=g("receipt-paper-content")?g("receipt-paper-content").innerHTML:"";yt(a)};window.openReceiptPreview=Ft;window.openCustomerReceiptPreview=e=>{Ft(e)};window.closeReceiptPreviewModal=fo;window.executePrintReceipt=bo;window.checkProPrint=()=>{Ft()};const J={OWNER:"owner",ADMIN:"admin",CASHIER:"cashier"},wo=[{key:"orders",label:"Pesanan Online",desc:"Proses status pesanan, update resi pengiriman & konfirmasi bayar",group:"operasional",icon:"fa-receipt"},{key:"products",label:"Katalog Produk & Stok",desc:"Tambah/edit produk, atur varian, dan perbarui stok barang",group:"operasional",icon:"fa-box-open"},{key:"suppliers",label:"Supplier & Rekanan",desc:"Kelola master data supplier, kontak kulakan, dan asal produk",group:"operasional",icon:"fa-truck-field"},{key:"purchases",label:"Order Kulakan (PO)",desc:"Buat PO pembelian grosir, terima restock, & kelola hutang rekanan",group:"operasional",icon:"fa-cart-flatbed"},{key:"piutang",label:"Piutang Tempo & Cicilan",desc:"Kelola nota piutang pelanggan, denda keterlambatan, & cicilan",group:"operasional",icon:"fa-clock-rotate-left"},{key:"customers",label:"Database Pelanggan",desc:"Lihat daftar member, atur limit kredit PayLater, & mutasi poin",group:"operasional",icon:"fa-address-book"},{key:"pos",label:"Kasir POS",desc:"Akses antarmuka penjualan kasir toko fisik dan shift kasir",group:"operasional",icon:"fa-cash-register"},{key:"expenses",label:"Biaya Operasional Toko",desc:"Buku kas pengeluaran operasional toko harian & nota kas",group:"operasional",icon:"fa-money-bill-transfer"},{key:"stock_opname",label:"Stock Opname (Audit Fisik)",desc:"Audit stok fisik rak/gudang, rekonsiliasi selisih & terapkan penyesuaian stok",group:"operasional",icon:"fa-clipboard-check"},{key:"returns",label:"Retur Barang & RMA",desc:"Kelola retur penjualan pelanggan, klaim cacat supplier & stok karantina",group:"operasional",icon:"fa-right-left"},{key:"categories",label:"Kategori Produk",desc:"Tambah dan susun kategori etalase produk",group:"konten",icon:"fa-tags"},{key:"brands",label:"Merek Produk",desc:"Kelola daftar brand dagang barang",group:"konten",icon:"fa-copyright"},{key:"colors",label:"Database Warna",desc:"Katalog warna produk dan swatch varian",group:"konten",icon:"fa-swatchbook"},{key:"vouchers",label:"Voucher & Promo",desc:"Buat kode voucher diskon dan promo belanja",group:"konten",icon:"fa-ticket-simple"},{key:"banners",label:"Banner Promosi",desc:"Kelola gambar dan video slider beranda toko",group:"konten",icon:"fa-images"},{key:"rewards",label:"Program Hadiah Poin",desc:"Kelola katalog hadiah penukaran poin member",group:"konten",icon:"fa-gift"},{key:"reviews",label:"Ulasan Pelanggan",desc:"Moderasi ulasan dan testimoni produk pembeli",group:"konten",icon:"fa-star"},{key:"faqs",label:"Tanya Jawab / Q&A",desc:"Kelola jawaban pertanyaan umum pembeli",group:"konten",icon:"fa-circle-question"},{key:"changelog",label:"Log Pembaruan Sistem",desc:"Melihat riwayat update sistem toko",group:"konten",icon:"fa-code-branch"},{key:"reports",label:"Pusat Laporan & Keuangan",desc:"Laporan terpadu penjualan, stok, laba rugi, utang piutang, dan perpajakan",group:"sensitif",icon:"fa-chart-pie"},{key:"view_reports",label:"Laporan Finansial & Laba",desc:"Lihat omset, total HPP terjual, margin & laba bersih toko",group:"sensitif",icon:"fa-chart-line"},{key:"tax",label:"Pajak & Keuangan (PPN)",desc:"Laporan PPN, neraca keuangan, dan laba rugi resmi",group:"sensitif",icon:"fa-file-invoice-dollar"},{key:"banks",label:"Rekening Bank & QRIS",desc:"Ubah nomor rekening toko dan QRIS tujuan pembayaran",group:"sensitif",icon:"fa-building-columns"},{key:"settings",label:"Pengaturan Utama Toko",desc:"Konfigurasi nama toko, GPS maps, tarif ongkir, & sistem",group:"sensitif",icon:"fa-gear"},{key:"cashiers",label:"Kelola Staf & Hak Akses",desc:"Daftarkan staf baru, atur jabatan, & ubah batasan hak akses",group:"sensitif",icon:"fa-users-gear"},{key:"backup_sync",label:"Pusat Data & Backup Cloud",desc:"Cadangkan data toko, ekspor database, & sinkronisasi cloud",group:"sensitif",icon:"fa-cloud-arrow-up"}],Dt={[J.CASHIER]:{pos:!0,returns:!0,orders:!1,products:!1,suppliers:!1,purchases:!1,piutang:!1,customers:!1,categories:!1,brands:!1,colors:!1,vouchers:!1,banners:!1,rewards:!1,reviews:!1,faqs:!1,changelog:!1,expenses:!1,stock_opname:!1,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[J.ADMIN]:{pos:!0,returns:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},manager:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!0,view_reports:!0,tax:!0,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[J.OWNER]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,reports:!0,view_reports:!0,tax:!0,banks:!0,settings:!0,cashiers:!0,backup_sync:!0}};let Ke=null;const Ue=()=>{if(Ke)return Ke;try{const e=sessionStorage.getItem("freshmart_staff_profile");if(e)return Ke=JSON.parse(e),Ke}catch{}return null},xo=e=>{Ke=e;try{e?sessionStorage.setItem("freshmart_staff_profile",JSON.stringify(e)):sessionStorage.removeItem("freshmart_staff_profile")}catch{}},go=()=>{Ke=null;try{sessionStorage.removeItem("freshmart_staff_profile")}catch{}},Qe=()=>{const e=mt.currentUser;if(e&&e.uid===xe)return!0;const t=Ue();if(t){const s=String(t.role||"").toLowerCase();if(s==="owner"||t.uid===xe)return!0;if(s==="cashier"||s==="kasir"||s==="staff")return!1}const a=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");if((window.isAdm||window.__localIsAdm)&&a&&!t)return!0;try{const s=sessionStorage.getItem("pos_cashier_session");if(s){const o=JSON.parse(s),n=String(o.role||"").toLowerCase();if(n==="owner"||o.uid===xe)return!0;if(n==="cashier"||n==="kasir"||n==="staff")return!1}}catch{}return!1},ho=()=>{if(Qe())return!0;if(Ra())return!1;const e=Ue();return e?.role===J.ADMIN||String(e?.role||"").toLowerCase()==="admin"},Ra=()=>{if(Qe())return!1;const e=Ue();if(e){const t=String(e.role||"").toLowerCase();if(t==="owner"||e.uid===xe)return!1;if(t==="cashier"||t==="kasir")return!0}try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const a=JSON.parse(t),s=String(a.role||"").toLowerCase();if(s==="owner"||a.uid===xe)return!1;if(s==="cashier"||s==="kasir"||s==="staff")return!0}}catch{}return!1},Ia=e=>{if(Qe())return!0;const t=Ue();if(t){if(t.isActive===!1)return!1;const a=String(t.role||"").toLowerCase();if(a===J.OWNER||a==="owner")return!0;if(a===J.CASHIER||a==="cashier"||a==="kasir")return e==="pos";if(t.permissions){if(typeof t.permissions[e]<"u")return t.permissions[e]===!0;if(e==="reports"&&(t.permissions.view_reports===!0||t.permissions.tax===!0)||(e==="view_reports"||e==="tax")&&t.permissions.reports===!0)return!0}return(Dt[t.role]||Dt[J.ADMIN])[e]===!0}try{const a=sessionStorage.getItem("pos_cashier_session");if(a){const s=JSON.parse(a),o=String(s.role||"").toLowerCase();if(o===J.OWNER||o==="owner"||s.uid===xe)return!0;if(o===J.CASHIER||o==="cashier"||o==="kasir")return e==="pos"}}catch{}return window.isAdm||window.__localIsAdm?["banks","settings","cashiers","backup_sync"].includes(e)?mt.currentUser?.uid===xe:!0:!1},Nt=()=>{if(typeof window<"u"&&(window.curViewName==="view-pos-cashier"||document.getElementById("view-pos-cashier")?.classList.contains("flex")||document.getElementById("pos-payment-modal")?.classList.contains("flex")||document.getElementById("pos-variant-sheet")?.classList.contains("flex")))try{const s=sessionStorage.getItem("pos_cashier_session");if(s){const o=JSON.parse(s),n=String(o.role||"").toLowerCase();return n===J.OWNER||n==="owner"||o.uid===xe}}catch{}if(Qe())return!0;const t=Ue();if(t){const s=String(t.role||"").toLowerCase();return s===J.OWNER||s==="owner"||t.uid===xe?!0:s===J.CASHIER||s==="cashier"||s==="kasir"?!1:Ia("view_reports")}const a=mt.currentUser;return!!(a&&a.uid===xe||window.isAdm||window.__localIsAdm)},yo=e=>{switch(e){case J.OWNER:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-2xs">
                <i class="fa-solid fa-crown text-[9px] text-amber-500"></i>
                <span>Owner</span>
            </span>`;case J.ADMIN:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shadow-2xs">
                <i class="fa-solid fa-shield-halved text-[9px]"></i>
                <span>Admin Toko</span>
            </span>`;case J.CASHIER:default:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                <i class="fa-solid fa-cash-register text-[9px]"></i>
                <span>Kasir POS</span>
            </span>`}};typeof window<"u"&&(window.ROLES=J,window.PERMISSION_DEFINITIONS=wo,window.ROLE_PRESETS=Dt,window.getActiveStaff=Ue,window.setActiveStaff=xo,window.clearActiveStaff=go,window.isOwnerUser=Qe,window.isAdminUser=ho,window.isCashierUser=Ra,window.hasPermission=Ia,window.canViewHpp=Nt,window.getRoleBadgeHtml=yo);let ie="invoice",Oa=!1;const St=e=>{Oa=e},q=(e,t=!1)=>{if(!e)return"-";try{const a=e.toDate?e.toDate():new Date(e);if(isNaN(a.getTime()))return"-";const s={day:"2-digit",month:"short",year:"numeric"};return t&&(s.hour="2-digit",s.minute="2-digit"),a.toLocaleDateString("id-ID",s)}catch{return"-"}},st=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(3).replace(/\.?0+$/,"")},pe=(e="w-16 h-16")=>u.store?.logo&&(u.store.logo.includes("http")||u.store.logo.includes("data:"))?`<img loading="eager" src="${i(u.store.logo)}" class="${e} object-contain shrink-0">`:`<div class="${e} primary-bg flex items-center justify-center rounded-xl text-white shrink-0"><i class="fa-solid fa-store text-2xl"></i></div>`,qe=(e="font-mono text-xs")=>{const a=(Array.isArray(u.banks)?u.banks:[]).filter(s=>s&&(s.bankName||s.bank||s.bankAccount||s.number||s.account));if(a.length>0)return a.map(s=>{const o=s.bankName||s.bank||"BANK",n=s.bankAccount||s.number||s.account||"-",r=s.bankOwner||s.name||s.owner||u.store?.name||"Toko Putri";return`
            <div class="${e} flex items-center justify-between gap-2 border-b border-slate-200/60 pb-1.5 last:border-b-0 last:pb-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="font-bold text-slate-900 uppercase">${i(o)}:</span>
                    <span class="font-bold text-blue-700 tracking-wide font-mono select-all">${i(n)}</span>
                </div>
                <div class="text-[10.5px] text-slate-500 font-sans truncate max-w-[140px] text-right" title="${i(r)}">
                    a.n <span class="font-semibold text-slate-700">${i(r)}</span>
                </div>
            </div>`}).join("");if(u.store?.bankName&&(u.store?.bankAccount||u.store?.bankNumber)){const s=u.store.bankName,o=u.store.bankAccount||u.store.bankNumber,n=u.store.bankOwner||u.store.name||"Toko Putri";return`
        <div class="${e} flex items-center justify-between gap-2">
            <div class="flex items-center gap-1.5 flex-wrap">
                <span class="font-bold text-slate-900 uppercase">${i(s)}:</span>
                <span class="font-bold text-blue-700 tracking-wide font-mono select-all">${i(o)}</span>
            </div>
            <div class="text-[10.5px] text-slate-500 font-sans truncate max-w-[140px] text-right">
                a.n <span class="font-semibold text-slate-700">${i(n)}</span>
            </div>
        </div>`}return`
    <div class="text-[11px] text-slate-600 bg-slate-100 p-2 rounded-lg border border-slate-200">
        <p class="font-semibold text-slate-800"><i class="fa-solid fa-building-columns text-blue-600 mr-1"></i> Rekening Resmi Toko:</p>
        <p class="mt-0.5">Konfirmasi transfer via WhatsApp Resmi: <b class="font-mono text-emerald-600">${i(u.store?.wa||u.store?.phone||"-")}</b></p>
    </div>`},ta=({docTitle:e,docNumber:t,docDate:a})=>`
    <div class="flex justify-between items-center border-b-2 border-slate-800 pb-2.5 mb-4 text-xs font-semibold select-none">
        <div class="flex items-center gap-2.5">
            ${pe("w-8 h-8")}
            <div>
                <span class="font-black text-slate-900 uppercase text-xs sm:text-sm tracking-tight">${i(u.store?.name||"TOKO PUTRI")}</span>
                <span class="text-slate-300 mx-1.5">&bull;</span>
                <span class="font-bold text-slate-700 uppercase tracking-wider text-[11px]">${i(e)}</span>
            </div>
        </div>
        <div class="text-right font-mono text-slate-600 text-[11px]">
            ${t?`<span class="font-bold text-slate-900">${i(t)}</span> <span class="text-slate-400 mx-1">&bull;</span>`:""}
            <span>${i(a||"")}</span>
        </div>
    </div>
    `,aa=(e,t,a)=>`
    <div class="a4-page-footer mt-auto pt-2.5 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono select-none">
        <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-700 uppercase">${i(u.store?.name||"TOKO PUTRI")}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-500">${i(a||"Dokumen Resmi")}</span>
        </div>
        <div class="flex items-center gap-1 font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
            <span>Halaman ${e} dari ${t}</span>
        </div>
    </div>
    `,de=({docTitle:e,docNumber:t,docDate:a,kopHtml:s,metaHtml:o,tableHeaderHtml:n,rows:r=[],tableClass:d="w-full text-left border-collapse mb-4 text-xs",summaryHtml:c="",extraBlocksHtml:p="",signaturesHtml:y="",singlePageMax:b=6,itemsFirstPage:w=6,itemsMiddlePage:m=14,itemsLastPage:f=6})=>{const l=r.length;if(l<=b)return[`
        <div class="a4-page" data-page="1" data-total-pages="1">
            <div class="a4-page-body flex-1 flex flex-col">
                ${s}
                ${o||""}
                <table class="${d}">
                    <thead>${n}</thead>
                    <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${r.join("")}</tbody>
                </table>
                ${c||""}
                ${p||""}
                ${y||""}
            </div>
            ${aa(1,1,e)}
        </div>
        `];const A=[],M=[],D=r.slice(0,w);M.push(D);let C=w;for(;C<l;){const x=l-C;if(x<=f)M.push(r.slice(C)),C=l;else{const S=Math.min(m,x);M.push(r.slice(C,C+S)),C+=S}}const v=M.length;return M.forEach((x,S)=>{const P=S+1,$=P===1,O=P===v;let R="";$?R=`
            ${s}
            ${o||""}
            <table class="${d}">
                <thead>${n}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${x.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${P+1}...
            </div>
            `:O?R=`
            ${ta({docTitle:e,docNumber:t,docDate:a})}
            ${x.length>0?`
            <table class="${d}">
                <thead>${n}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${x.join("")}</tbody>
            </table>`:""}
            ${c||""}
            ${p||""}
            ${y||""}
            `:R=`
            ${ta({docTitle:e,docNumber:t,docDate:a})}
            <table class="${d}">
                <thead>${n}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${x.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${P+1}...
            </div>
            `,A.push(`
        <div class="a4-page" data-page="${P}" data-total-pages="${v}">
            <div class="a4-page-body flex-1 flex flex-col">
                ${R}
            </div>
            ${aa(P,v,e)}
        </div>
        `)}),A},Kt=(e,t=null)=>{if(ie=e,e==="po"){const m=u.purchases||[],f=m.find(R=>String(R.id)===String(t))||(window.currentActivePoId?m.find(R=>String(R.id)===String(window.currentActivePoId)):m[0]);if(!f){typeof window.showToast=="function"&&window.showToast("Data PO tidak ditemukan!");return}Q("doc-modal-title","Preview Purchase Order (PO)");const l=pe("w-16 h-16"),A=q(f.date||f.createdAt),M=f.poNumber||f.id,D=f.paymentType==="tempo"?`Tempo ${f.tempoDays||14} Hari (Jatuh Tempo: ${q(f.tempoDueDate)})`:f.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai",C=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${l}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(u.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(u.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(u.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(u.store?.wa||u.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">PURCHASE ORDER</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(M)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${A}</p>
                <p class="text-xs font-bold mt-1 text-[var(--color-primary)]">Status: ${f.status==="ordered"?"DIPESAN":f.status==="received"?"DITERIMA":"SELESAI"}</p>
            </div>
        </div>
        `,v=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Kepada Rekanan / Supplier:</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${i(f.supplierName||"Supplier")}</p>
                ${f.supplierPhone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(f.supplierPhone)}</p>`:""}
                ${f.supplierAddress?`<p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${i(f.supplierAddress)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan & Pembayaran:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Termin Pembayaran:</span> <b class="text-slate-900">${D}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tujuan Pengiriman:</span> <b class="text-slate-900">${i(u.store?.name||"Gudang Utama Toko")}</b></p>
                ${f.notes?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${i(f.notes)}</p>`:""}
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
        `,S=(f.items||[]).map((R,h)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${h+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(R.name)}
                ${R.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(R.variantName)}</span>`:""}
                ${R.sku?`<span class="text-slate-400 text-[9.5px] font-mono block mt-0.5">SKU: ${i(R.sku)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${st(R.qty)} <span class="text-[10px] font-normal text-slate-500">${i(R.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${k(R.unitPrice)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${k(Math.round((parseFloat(R.qty)||0)*(parseFloat(R.unitPrice)||0)))}</td>
        </tr>
        `),P=`
        <div class="flex justify-end mb-6 mt-2">
            <div class="w-80 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk:</span><span class="font-bold text-slate-800">${k(f.subtotal)}</span></div>
                ${f.discount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Potongan Diskon:</span><span>-${k(f.discount)}</span></div>`:""}
                ${f.shippingFee>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim:</span><span>+${k(f.shippingFee)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL ORDER (PO):</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${k(f.total)}</span>
                </div>
            </div>
        </div>
        `,$=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-6 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Dipesan Oleh (Purchasing):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(u.store?.name||"Toko Putri")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Diterima &amp; Disetujui Oleh:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(f.supplierName||"Rekanan / Supplier")}</span>
            </div>
        </div>
        `,O=de({docTitle:"Purchase Order",docNumber:`#${M}`,docDate:A,kopHtml:C,metaHtml:v,tableHeaderHtml:x,rows:S,summaryHtml:P,signaturesHtml:$,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});ce(O);return}if(e==="stock_opname"){const m=u.stockOpnameHistory||[],f=m.find(h=>String(h.id)===String(t)||String(h.soNumber)===String(t))||m[0];if(!f){typeof window.showToast=="function"&&window.showToast("Data Berita Acara Stock Opname tidak ditemukan!");return}Q("doc-modal-title","Preview Berita Acara Stock Opname");const l=pe("w-16 h-16"),A=q(f.date,!0),M=f.soNumber||f.id,D=typeof Nt=="function"?Nt():!1,C=f.items||[],v=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${l}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(u.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(u.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(u.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(u.store?.wa||u.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">BERITA ACARA</h2>
                <h3 class="font-bold text-sm tracking-wider text-amber-600 uppercase">STOCK OPNAME FISIK</h3>
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${i(M)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${A}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Auditor: <b class="text-slate-900">${i(f.auditorName||"Staf Auditor")}</b></p>
            </div>
        </div>
        `,x=`
        <div class="grid grid-cols-4 gap-3 mb-5">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Total Diperiksa</span>
                <span class="text-lg font-black text-slate-800 font-mono">${f.totalItemsAudited||0}</span>
                <span class="text-[10px] text-slate-500 block">Item Produk</span>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Item Selisih</span>
                <span class="text-lg font-black ${f.totalWithDiff>0?"text-amber-600":"text-emerald-600"} font-mono">${f.totalWithDiff||0}</span>
                <span class="text-[10px] text-slate-500 block">Disesuaikan</span>
            </div>
            <div class="bg-rose-50 p-3 rounded-xl border border-rose-200 text-center">
                <span class="text-[9px] font-black uppercase text-rose-500 block tracking-wider">Total Kurang (Loss)</span>
                <span class="text-lg font-black text-rose-600 font-mono">−${f.totalLossUnits||0}</span>
                <span class="text-[10px] text-rose-500 block">${D?"−"+k(f.totalLossRp||0):"Pcs"}</span>
            </div>
            <div class="bg-amber-50 p-3 rounded-xl border border-amber-200 text-center">
                <span class="text-[9px] font-black uppercase text-amber-600 block tracking-wider">Total Lebih (Surplus)</span>
                <span class="text-lg font-black text-amber-600 font-mono">+${f.totalSurplusUnits||0}</span>
                <span class="text-[10px] text-amber-600 block">${D?"+"+k(f.totalSurplusRp||0):"Pcs"}</span>
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
            ${D?'<th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Dampak HPP</th>':'<th class="py-2.5 px-3 rounded-tr-xl text-right w-16">Satuan</th>'}
        </tr>
        `,P=C.length===0?['<tr><td colspan="7" class="py-8 text-center text-slate-500 italic">Semua stok fisik barang dalam kondisi berimbang (100% Sesuai / Selisih 0).</td></tr>']:C.map((h,T)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${T+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${i(h.productName)}
                ${h.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${i(h.variantName)}</span>`:""}
                ${h.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(h.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center font-mono text-slate-600">${h.systemStock} ${i(h.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${h.physicalStock} ${i(h.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-bold font-mono ${h.diff<0?"text-rose-600":"text-amber-600"}">
                ${h.diff<0?`−${Math.abs(h.diff)}`:`+${h.diff}`}
            </td>
            <td class="py-2 px-3 text-[10.5px]">
                <span class="font-bold text-slate-800">${i(h.reason==="salah_hitung"?"Koreksi Kasir":h.reason==="rusak"?"Barang Rusak":h.reason==="hilang"?"Barang Hilang":h.reason==="kadaluarsa"?"Expired":h.reason==="bonus"?"Bonus Supplier":h.reason)}</span>
                ${h.notes?`<span class="text-slate-500 block italic">"${i(h.notes)}"</span>`:""}
            </td>
            ${D?`
                <td class="py-2 px-3 text-right font-mono font-bold ${h.diff<0?"text-rose-600":"text-amber-600"}">
                    ${h.diff<0?"−":"+"}${k(Math.abs(h.diffValueHpp||0))}
                </td>`:`
                <td class="py-2 px-3 text-right text-slate-500">${i(h.unit||"pcs")}</td>
            `}
        </tr>
        `),$=f.notes?`
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs mb-5 text-slate-700">
            <b class="text-slate-900">Catatan Auditor:</b> ${i(f.notes)}
        </div>`:"",O=`
        <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Pemeriksa / Auditor:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(f.auditorName||"Petugas Auditor")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Kepala Gudang / Kasir:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">Gudang Toko</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Mengetahui (Owner Toko):</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(u.store?.name||"Pimpinan")}</span>
            </div>
        </div>
        `,R=de({docTitle:"Berita Acara Stock Opname",docNumber:`#${M}`,docDate:A,kopHtml:v,metaHtml:x,tableHeaderHtml:S,rows:P,extraBlocksHtml:$,signaturesHtml:O,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});ce(R);return}if(e==="stock_opname_worksheet"){Q("doc-modal-title","Preview Lembar Kerja Hitung Fisik (Worksheet)");const m=pe("w-14 h-14"),f=q(new Date),l=u.products||[],A=[];l.forEach(P=>{!P||P.id==null||(P.variants&&P.variants.length>0?P.variants.forEach($=>{A.push({name:P.name,variantName:$.name,sku:$.sku||P.sku||"",category:P.category||"Umum",unit:P.unit||"pcs",systemStock:parseFloat($.stock)||0})}):A.push({name:P.name,variantName:"",sku:P.sku||"",category:P.category||"Umum",unit:P.unit||"pcs",systemStock:parseFloat(P.stock)||0}))});const M=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3">
                ${m}
                <div>
                    <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${i(u.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${i(u.store?.slogan||"Pusat Alat Teknik & Bangunan")}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${i(u.store?.address||"")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-wider text-slate-900 uppercase">LEMBAR KERJA AUDIT</h2>
                <h3 class="font-bold text-xs tracking-widest text-amber-600 uppercase">STOCK OPNAME FISIK RAK</h3>
                <p class="text-xs font-medium text-slate-500 mt-1">Tanggal Cetak: <b>${f}</b></p>
                <p class="text-xs font-medium text-slate-500">Total Item: <b>${A.length} Baris</b></p>
            </div>
        </div>
        `,D=`
        <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[10px] text-slate-600 mb-4 flex items-center justify-between">
            <span><b>Petunjuk:</b> Hitung fisik barang di rak/gudang secara teliti. Tulis angka aktual pada kolom <b>HASIL FISIK</b> dan beri catatan bila ada barang rusak/cacat.</span>
        </div>
        `,C=`
        <tr class="border-b-2 border-slate-800 text-[9.5px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">Cek</th>
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">No</th>
            <th class="py-2 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi Varian</th>
            <th class="py-2 px-2 border-r border-slate-700 w-28">Kategori / Rak</th>
            <th class="py-2 px-2 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2 px-2 text-center w-28 border-r border-slate-700 bg-amber-900/60">HASIL FISIK</th>
            <th class="py-2 px-3 text-left w-36">Kondisi &amp; Catatan</th>
        </tr>
        `,v=A.map((P,$)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200"><span class="inline-block w-3.5 h-3.5 border border-slate-400 rounded-sm"></span></td>
            <td class="py-2 px-2 text-center font-mono text-slate-400 border-r border-slate-200">${$+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 border-r border-slate-200 uppercase">
                ${i(P.name)}
                ${P.variantName?`<span class="bg-slate-100 text-slate-700 px-1 rounded text-[8.5px] border border-slate-300 ml-1 font-semibold">${i(P.variantName)}</span>`:""}
                ${P.sku?`<span class="text-slate-400 font-mono text-[8.5px] block">SKU: ${i(P.sku)}</span>`:""}
            </td>
            <td class="py-2 px-2 text-[10px] text-slate-600 border-r border-slate-200">
                ${i(P.category)}
            </td>
            <td class="py-2 px-2 text-center font-mono font-bold text-slate-600 border-r border-slate-200">
                ${P.systemStock} ${i(P.unit)}
            </td>
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200 bg-amber-50/40">
                <span class="inline-block w-20 h-5 border-b-2 border-slate-400"></span>
            </td>
            <td class="py-2 px-3 text-[10px] text-slate-400">
                <span class="inline-block w-full h-5 border-b border-slate-200"></span>
            </td>
        </tr>
        `),S=de({docTitle:"Lembar Kerja Audit Rak",docNumber:`TOTAL ${A.length} ITEM`,docDate:f,kopHtml:M,metaHtml:D,tableHeaderHtml:C,rows:v,tableClass:"w-full text-left border-collapse mb-4 text-[11px]",signaturesHtml:`
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
        `,singlePageMax:16,itemsFirstPage:15,itemsMiddlePage:20,itemsLastPage:14});ce(S);return}if(e==="tempo_invoice"){const m=t||window.cVOrd;let l=(window.cachedPiutangOrders||[]).find(j=>String(j.orderId)===String(m))||(window.gOrds||[]).find(j=>String(j.orderId)===String(m));if(!l&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(m)&&(l=window.lastPrintedOrder),!l){typeof window.showToast=="function"&&window.showToast("Data nota tagihan piutang tidak ditemukan!");return}Q("doc-modal-title","Preview Nota Tagihan Piutang (Tempo)");const A=pe("w-16 h-16"),M=q(l.dateString||l.timestamp),D=parseFloat(l.payment?.tempoBalance)||0,C=l.payment?.tempoPenaltyRate!==void 0?parseFloat(l.payment.tempoPenaltyRate):1,v=l.payment?.tempoPenaltyStopped===!0;let x=0;const S=l.payment?.tempoDueDate||0;let P=0,$=0,O=!1,R=!1;const h=Date.now();S>0&&(h>S?(P=Math.floor((h-S)/(24*60*60*1e3)),P>0&&(O=!0)):($=Math.ceil((S-h)/(24*60*60*1e3)),$<=3&&(R=!0))),v?x=parseFloat(l.payment?.tempoFixedPenalty)||0:O&&(x=C/100*D*P);const T=D+x,N=l.payment?.installments||[],K=N.reduce((j,le)=>j+(parseFloat(le.amount)||0),0),B=l.payment?.grandTotal||D+K,I=l.payment?.paymentStatus==="lunas"||D<=0,E=!!(l.payment?.isPaylater||l.isPaylater||l.payment?.subMethod==="paylater");let F=E?"PAYLATER BERJALAN":"TEMPO BERJALAN",Y="text-blue-600 bg-blue-50 border-blue-200";I?(F="LUNAS SEPENUHNYA",Y="text-emerald-600 bg-emerald-50 border-emerald-300"):O?(F=`TERLAMBAT ${P} HARI`,Y="text-rose-600 bg-rose-50 border-rose-300"):R&&(F=`JATUH TEMPO H-${$<=0?"0":$}`,Y="text-amber-600 bg-amber-50 border-amber-300");const ee=qe("font-mono text-xs"),te=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${A}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(u.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(u.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(u.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(u.store?.wa||u.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">${E?"NOTA PUTRI PAYLATER":"NOTA TAGIHAN PIUTANG"}</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(l.orderId)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tgl Transaksi: ${M}</p>
                <div class="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${Y}">
                    ${i(F)}
                </div>
            </div>
        </div>
        `,ge=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ditujukan Kepada (Debitur / Pelanggan):</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-0.5">${i(l.customer?.name||"Pelanggan")}</p>
                ${l.customer?.wa||l.customer?.phone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> +${i(l.customer.wa||l.customer.phone)}</p>`:""}
                <p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${i(l.customer?.address||"Alamat di toko / pelanggan tempo")}</p>
                ${l.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${i(l.customer.note)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan Jatuh Tempo:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tanggal Jatuh Tempo:</span> <b class="text-slate-900 font-mono">${q(S)}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Sistem Pembayaran:</span> <b class="${E?"text-emerald-700 font-bold":"text-slate-900"} uppercase">${E?"Putri PayLater Member VIP":"Tempo / Bertahap"}</b></p>
                ${E?`<p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tenor Cicilan:</span> <b class="text-emerald-800 font-bold uppercase">${l.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":l.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)"}</b></p>`:""}
                ${O?`<p class="text-xs font-bold text-rose-600 mb-1"><span class="text-slate-500">Status:</span> Lewat ${P} Hari (Denda ${C}%/hari)</p>`:""}
                <p class="text-xs font-semibold text-slate-700"><span class="text-slate-500">Kasir / Admin:</span> <b class="text-slate-900 uppercase">${i(l.cashierName||"Kasir Toko")}</b></p>
            </div>
        </div>
        `,me=`
        <tr class="border-b-2 border-slate-800 text-[10.5px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Satuan</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `,ne=(l.items||[]).map((j,le)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${le+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(j.name)}
                ${j.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(j.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${st(j.qty)} <span class="text-[10px] font-normal text-slate-500">${i(j.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${k(j.effectivePrice||j.price)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${k(j.subtotal||Math.round((parseFloat(j.qty)||0)*(parseFloat(j.effectivePrice||j.price)||0)))}</td>
        </tr>
        `);let he="",re=0,ae="-",ke=1;if(E&&Array.isArray(l.payment?.paylaterSchedule)&&l.payment.paylaterSchedule.length>0){let j=0,le=!1;const Be=l.payment.paylaterSchedule.map((G,Pt)=>{const jt=G.installmentIndex||G.installmentNo||G.installmentNumber||G.month||Pt+1,Ut=parseFloat(G.pokok||G.principal)||0,_t=parseFloat((G.adminFee||0)+(G.serviceFee||0))||0,Tt=parseFloat(G.total||G.totalMonthly||G.totalInstallment)||Ut+_t;j+=Tt;const zt=j,Xe=G.dueDate||0,qt=G.dueDateFormatted||G.dueDateStr||(Xe?q(Xe):"-");let et="";if(K>=zt)et='<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-300">LUNAS</span>';else if(le)et='<span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200">BULAN DEPAN</span>';else{le=!0,ke=jt;const ja=Math.max(0,zt-K);re=Math.min(ja,Tt),ae=qt,et=Xe&&h>Xe?'<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 border border-rose-300">JATUH TEMPO</span>':'<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">WAJIB BULAN INI</span>'}return`
                <tr class="hover:bg-slate-50">
                    <td class="py-2 px-3 text-center text-slate-800 font-bold">Bulan Ke-${jt}</td>
                    <td class="py-2 px-3 font-mono font-medium text-slate-700 text-center">${qt}</td>
                    <td class="py-2 px-3 text-right text-slate-600 font-mono">${k(Ut)}</td>
                    <td class="py-2 px-3 text-right text-slate-500 font-mono">${k(_t)}</td>
                    <td class="py-2 px-3 text-right font-black font-mono text-slate-900">${k(Tt)}</td>
                    <td class="py-2 px-3 text-center">${et}</td>
                </tr>`}).join("");he=`
            <div class="mb-5">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                        <i class="fa-solid fa-calendar-check text-emerald-600"></i> Tabel Rencana Angsuran Bulanan (${l.payment?.paylaterMonths||1}x Tenor):
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
                        ${Be}
                    </tbody>
                </table>
            </div>`}const fe=`
        ${he}
        ${N.length>0?`
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
                    ${N.map((j,le)=>`
                    <tr class="hover:bg-slate-50">
                        <td class="py-1.5 px-3 text-center text-slate-500">${le+1}</td>
                        <td class="py-1.5 px-3 text-slate-700">${q(j.date)}</td>
                        <td class="py-1.5 px-3 uppercase text-slate-600 font-bold">${i(j.method||"Tunai")}</td>
                        <td class="py-1.5 px-3 text-right font-bold text-emerald-600">+ ${k(j.amount)}</td>
                        <td class="py-1.5 px-3 text-slate-500 text-[11px] font-sans">${i(j.note||"-")}</td>
                    </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>`:""}
        `,Me=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran Toko Putri:
                </h4>
                <div class="space-y-1.5 pt-0.5">${ee}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi bukti transfer: <b>${i(u.store?.wa||u.store?.phone||"-")}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Harap mencantumkan Nomor Nota (#${i(l.orderId)}) pada berita transfer.</p>
                </div>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Awal:</span><span class="font-bold text-slate-800">${k(B)}</span></div>
                ${E?`<div class="flex justify-between text-emerald-600 font-bold"><span>Limit PayLater Terpakai:</span><span>${k(l.payment?.paylaterUsed||B-(l.payment?.tempoDp||l.payment?.dp||0))}</span></div>`:""}
                ${E&&l.payment?.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater:</span><span class="font-bold">+${k(l.payment.paylaterAdminFee)}</span></div>`:""}
                ${E&&l.payment?.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan:</span><span class="font-bold">+${k(l.payment.paylaterServiceFee)}</span></div>`:""}
                ${(parseFloat(l.payment?.tempoDp||l.payment?.dp)||0)>0?`<div class="flex justify-between text-slate-600"><span>Uang Muka (DP Dibayar):</span><span class="font-bold">${k(l.payment?.tempoDp||l.payment?.dp||0)}</span></div>`:""}
                ${K>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Masuk:</span><span>-${k(K)}</span></div>`:""}
                
                ${E&&re>0&&re<D?`
                <!-- KOTAK HIGHLIGHT ANGSURAN BULAN INI -->
                <div class="p-2.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 space-y-0.5">
                    <div class="flex justify-between items-center text-[9.5px] font-black uppercase tracking-wider text-amber-800">
                        <span>Angsuran Bulan Ini (Termin Ke-${ke}):</span>
                        <span class="font-mono text-[9px] bg-amber-200/80 px-1.5 py-0.5 rounded">Jatuh Tempo: ${ae}</span>
                    </div>
                    <div class="flex justify-between items-center text-sm font-black font-mono pt-0.5">
                        <span>Wajib Dibayar Sekarang:</span>
                        <span class="text-amber-900 text-base font-black">${k(re)}</span>
                    </div>
                </div>
                <div class="flex justify-between text-slate-500 text-[11px]">
                    <span>Sisa Termin Bulan Berikutnya:</span>
                    <span class="font-mono font-bold">${k(Math.max(0,D-re))}</span>
                </div>
                `:""}

                <div class="flex justify-between text-slate-700 font-bold"><span>${E?"Total Sisa Pokok (Semua Tenor):":"Sisa Pokok Piutang:"}</span><span>${k(D)}</span></div>
                ${x>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Denda Keterlambatan:</span><span>+${k(x)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>${E?"TOTAL PELUNASAN PENUH:":"SISA WAJIB BAYAR:"}</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${k(I?0:T)}</span>
                </div>
            </div>
        </div>
        `,Pe=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Yang Berhutang (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(l.customer?.name||"Pelanggan")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Kasir Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(u.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,Ze=de({docTitle:E?"Nota Putri PayLater":"Nota Tagihan Piutang",docNumber:`#${l.orderId}`,docDate:M,kopHtml:te,metaHtml:ge,tableHeaderHtml:me,rows:ne,extraBlocksHtml:fe,summaryHtml:Me,signaturesHtml:Pe,singlePageMax:5,itemsFirstPage:5,itemsMiddlePage:12,itemsLastPage:4});ce(Ze);return}if(e==="tempo_customer_ledger"){const m=String(t||"").trim(),l=(window.cachedPiutangOrders||[]).filter(F=>{const Y=String(F.customer?.phone||F.customer?.wa||"").replace(/\D/g,""),ee=String(F.customer?.name||"").toLowerCase().trim(),te=m.replace(/\D/g,"");return!!(te.length>=8&&Y.includes(te)||ee&&m.toLowerCase().includes(ee))});if(l.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada nota piutang aktif untuk pelanggan ini.");return}const A=l[0].customer||{},M=A.name||"Pelanggan",D=A.wa||A.phone||"-";Q("doc-modal-title",`Kartu Piutang: ${M}`);const C=pe("w-16 h-16"),v=q(Date.now());let x=0,S=0,P=0,$=0,O=0;const R=l.map((F,Y)=>{const ee=parseFloat(F.payment?.tempoBalance)||0,te=F.payment?.tempoPenaltyRate!==void 0?parseFloat(F.payment.tempoPenaltyRate):1,ge=F.payment?.tempoPenaltyStopped===!0;let me=0;const ne=F.payment?.tempoDueDate||0;let he=0,re=!1;const ae=Date.now();ne>0&&ae>ne&&(he=Math.floor((ae-ne)/(24*60*60*1e3)),he>0&&(re=!0)),ge?me=parseFloat(F.payment?.tempoFixedPenalty)||0:re&&(me=te/100*ee*he);const fe=(F.payment?.installments||[]).reduce((Ze,j)=>Ze+(parseFloat(j.amount)||0),0),Me=F.payment?.grandTotal||ee+fe,Pe=ee+me;return x+=Me,S+=fe,P+=ee,$+=me,O+=Pe,`
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="py-2.5 px-3 text-center font-mono text-slate-500">${Y+1}</td>
                <td class="py-2.5 px-3 font-mono font-bold text-slate-800">#${i(F.orderId)}</td>
                <td class="py-2.5 px-3 font-medium text-slate-600">${q(F.dateString||F.timestamp)}</td>
                <td class="py-2.5 px-3 font-mono ${re?"text-rose-600 font-bold":"text-slate-700"}">${q(ne)} ${re?`<span class="text-[9.5px] text-rose-500">(+${he}h)</span>`:""}</td>
                <td class="py-2.5 px-3 text-right font-mono text-slate-600">${k(Me)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-600 font-bold">${k(fe)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-rose-600">${me>0?k(me):"-"}</td>
                <td class="py-2.5 px-3 text-right font-mono font-black text-slate-900">${k(Pe)}</td>
            </tr>
            `}),h=qe("font-mono text-xs"),T=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${C}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(u.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(u.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(u.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(u.store?.wa||u.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">KARTU PIUTANG PELANGGAN</h2>
                <p class="text-xs font-bold text-slate-600 mt-1">STATEMENT OF ACCOUNT</p>
                <p class="text-xs font-semibold text-slate-500 mt-0.5">Dicetak: ${v}</p>
                <span class="inline-block mt-1.5 px-3 py-0.5 bg-amber-50 text-amber-700 border border-amber-300 rounded-full text-[11px] font-black uppercase tracking-wider">
                    ${l.length} NOTA BELUM LUNAS
                </span>
            </div>
        </div>
        `,N=`
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Informasi Debitur / Pelanggan:</h3>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="text-[11px] text-slate-500">Nama Pelanggan / Badan:</p>
                    <p class="font-bold text-base text-slate-900 uppercase">${i(M)}</p>
                </div>
                <div>
                    <p class="text-[11px] text-slate-500">Nomor WhatsApp / HP:</p>
                    <p class="font-mono font-bold text-base text-emerald-600">+${i(D)}</p>
                </div>
            </div>
        </div>
        `,K=`
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
        `,B=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Transfer Resmi Pelunasan:
                </h4>
                <div class="space-y-1 pt-0.5">${h}</div>
                <p class="text-[9.5px] text-slate-500 pt-1.5 border-t border-slate-200">Kartu piutang ini mencatat seluruh tagihan aktif per tanggal cetak.</p>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Keseluruhan:</span><span class="font-bold text-slate-800">${k(x)}</span></div>
                <div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Diterima (-):</span><span>-${k(S)}</span></div>
                <div class="flex justify-between text-slate-700 font-bold"><span>Total Sisa Pokok Piutang:</span><span>${k(P)}</span></div>
                ${$>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Total Denda (+):</span><span>+${k($)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL AKUMULASI PIUTANG:</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${k(O)}</span>
                </div>
            </div>
        </div>
        `,I=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Penerima Tagihan (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(M)}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Pemilik Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(u.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,E=de({docTitle:"Kartu Piutang Pelanggan",docNumber:"STATEMENT OF ACCOUNT",docDate:v,kopHtml:T,metaHtml:N,tableHeaderHtml:K,rows:R,summaryHtml:B,signaturesHtml:I,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});ce(E);return}if(e==="tempo_recap"){const m=window.cachedPiutangOrders&&window.cachedPiutangOrders.length>0?window.cachedPiutangOrders:(window.gOrds||[]).filter(B=>B.payment?.method==="tempo"&&(parseFloat(B.payment?.tempoBalance)>0||B.payment?.status!=="paid"&&B.payment?.status!=="completed"));if(!m||m.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada nota piutang aktif untuk direkap.");return}Q("doc-modal-title","Rekap Buku Piutang Toko A4");const f=pe("w-16 h-16"),l=q(Date.now(),!0),A=`AR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${Math.floor(1e3+Math.random()*9e3)}`;let M=0,D=0,C=0,v=0,x=0;const S=new Set,P=m.map((B,I)=>{const E=B.customer||{},F=E.name||"Pelanggan",Y=E.wa||E.phone||"-",ee=`${F}_${Y}`;S.add(ee);const te=q(B.dateString||B.createdAt),ge=B.payment?.tempoDueDate||0,me=q(ge),ne=parseFloat(B.payment?.tempoBalance)||0,he=B.payment?.tempoPenaltyRate!==void 0?parseFloat(B.payment.tempoPenaltyRate):1,re=B.payment?.tempoPenaltyStopped===!0;let ae=0,ke=0,fe=!1,Me=!1;const Pe=Date.now();if(ge>0)if(Pe>ge)ke=Math.floor((Pe-ge)/(24*60*60*1e3)),ke>0&&(fe=!0);else{const G=Math.ceil((ge-Pe)/864e5);G<=3&&G>=0&&(Me=!0)}re?ae=parseFloat(B.payment?.tempoFixedPenalty)||0:fe&&(ae=he/100*ne*ke);const j=(B.payment?.installments||[]).reduce((G,Pt)=>G+(parseFloat(Pt.amount)||0),0);B.payment?.grandTotal||ne+j;const le=ne+ae;M+=ne,D+=ae,C+=le;let Be="";return fe?(v++,Be=`<span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-rose-100 text-rose-700 border border-rose-200">Telat ${ke} Hari</span>`):Me?Be='<span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200">H-3 Tempo</span>':(x++,Be='<span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">Lancar</span>'),`
            <tr class="border-b border-slate-200 text-[10px] hover:bg-slate-50 transition-colors">
                <td class="py-2 px-2 text-center text-slate-500 font-bold border-r border-slate-200">${I+1}</td>
                <td class="py-2 px-2.5 border-r border-slate-200">
                    <p class="font-bold text-slate-900 leading-tight">${i(F)}</p>
                    <p class="text-[9px] text-slate-500 font-mono"><i class="fa-brands fa-whatsapp text-emerald-600"></i> ${i(Y)}</p>
                </td>
                <td class="py-2 px-2 border-r border-slate-200 font-mono">
                    <p class="font-bold text-slate-800">#${i(B.orderId||B.id)}</p>
                    <p class="text-[9px] text-slate-500">${te}</p>
                </td>
                <td class="py-2 px-2 text-center border-r border-slate-200 font-mono">
                    <span class="font-bold ${fe?"text-rose-600":"text-slate-700"}">${me}</span>
                </td>
                <td class="py-2 px-2 text-right border-r border-slate-200 font-mono font-bold text-slate-800">${k(ne)}</td>
                <td class="py-2 px-2 text-right border-r border-slate-200 font-mono ${ae>0?"text-rose-600 font-bold":"text-slate-400"}">
                    ${ae>0?`+${k(ae)}`:"Rp 0"}
                </td>
                <td class="py-2 px-2 text-right border-r border-slate-200 font-mono font-black text-slate-900 bg-slate-50/80">${k(le)}</td>
                <td class="py-2 px-2 text-center">${Be}</td>
            </tr>`}),$=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3.5">
                ${f}
                <div>
                    <h1 class="font-black text-xl tracking-tight text-slate-900 uppercase">${i(u.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-[11px] font-bold text-slate-500 uppercase tracking-widest">${i(u.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-[10px] text-slate-500 max-w-sm leading-snug mt-0.5">${i(u.store?.address||"Alamat Toko")}</p>
                    <p class="text-[10px] text-slate-500"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(u.store?.wa||u.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-widest text-slate-900 uppercase">REKAP BUKU PIUTANG</h2>
                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">ACCOUNTS RECEIVABLE MASTER LEDGER</p>
                <p class="text-xs font-bold text-slate-600 font-mono mt-1">#${i(A)}</p>
                <p class="text-[10px] text-slate-500 mt-0.5">Waktu Cetak: ${l}</p>
            </div>
        </div>
        `,O=qe("font-mono text-[10px]"),R=`
        <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                <h3 class="text-[9px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-1">Ringkasan Portofolio Debitur:</h3>
                <div class="grid grid-cols-2 gap-2 text-[10px] pt-1">
                    <div>
                        <span class="text-slate-500">Total Debitur:</span>
                        <b class="text-slate-900 block font-mono text-xs">${S.size} Orang</b>
                    </div>
                    <div>
                        <span class="text-slate-500">Total Nota Aktif:</span>
                        <b class="text-slate-900 block font-mono text-xs">${m.length} Transaksi</b>
                    </div>
                    <div>
                        <span class="text-rose-600 font-medium">Nota Terlambat:</span>
                        <b class="text-rose-700 block font-mono text-xs">${v} Nota</b>
                    </div>
                    <div>
                        <span class="text-emerald-600 font-medium">Nota Lancar:</span>
                        <b class="text-emerald-700 block font-mono text-xs">${x} Nota</b>
                    </div>
                </div>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                <h3 class="text-[9px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-1 flex items-center gap-1">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Penerimaan Pelunasan Toko:
                </h3>
                <div class="space-y-0.5 pt-0.5">${O}</div>
            </div>
        </div>
        `,h=`
        <tr class="border-b-2 border-slate-800 text-[9.5px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">No</th>
            <th class="py-2 px-2.5 border-r border-slate-700">Debitur / Pelanggan</th>
            <th class="py-2 px-2 w-28 border-r border-slate-700">Nota &amp; Tgl</th>
            <th class="py-2 px-2 text-center w-24 border-r border-slate-700">Jatuh Tempo</th>
            <th class="py-2 px-2 text-right w-24 border-r border-slate-700">Sisa Pokok</th>
            <th class="py-2 px-2 text-right w-20 border-r border-slate-700">Denda</th>
            <th class="py-2 px-2 text-right w-28 border-r border-slate-700">Total Tagihan</th>
            <th class="py-2 px-2 text-center w-24">Status Aging</th>
        </tr>
        `,T=`
        <div class="grid grid-cols-2 gap-4 mb-4 items-start">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[10px] space-y-1">
                <p class="font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-1">Ketentuan Rekap Piutang Toko:</p>
                <p class="text-slate-600 leading-snug">1. Dokumen ini sah sebagai bukti buku pembukuan piutang berjalan Toko Putri.</p>
                <p class="text-slate-600 leading-snug">2. Seluruh nominal sisa pokok dan denda mengikat hingga tanggal cetak dokumen.</p>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1.5">
                <div class="flex justify-between text-slate-600 text-[11px]">
                    <span>Total Sisa Pokok Piutang:</span>
                    <span class="font-bold text-slate-800 font-mono">${k(M)}</span>
                </div>
                ${D>0?`
                <div class="flex justify-between text-rose-600 text-[11px] font-bold">
                    <span>Total Akumulasi Denda (+):</span>
                    <span class="font-mono">+${k(D)}</span>
                </div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-1.5 mt-1 font-bold text-slate-900">
                    <span class="text-xs uppercase tracking-wider">TOTAL TAGIHAN BERJALAN:</span>
                    <span class="text-[var(--color-primary)] font-black text-sm font-mono">${k(C)}</span>
                </div>
            </div>
        </div>
        `,N=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-4 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Petugas Penagihan / Kasir:</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 text-[11px] uppercase">( ........................................ )</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Pemilik Toko (Owner):</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 text-[11px] uppercase">${i(u.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,K=de({docTitle:"Rekap Buku Piutang Toko",docNumber:A,docDate:l,kopHtml:$,metaHtml:R,tableHeaderHtml:h,rows:P,summaryHtml:T,signaturesHtml:N,singlePageMax:7,itemsFirstPage:7,itemsMiddlePage:15,itemsLastPage:7});ce(K);return}if(e==="sales_return"){const m=typeof t=="object"&&t!==null?t.returnId:t,f=u.salesReturns||[],l=f.find(h=>String(h.id)===String(m))||f[0];if(!l){typeof window.showToast=="function"&&window.showToast("Data retur penjualan tidak ditemukan!");return}Q("doc-modal-title","Preview Nota Retur Penjualan (A4)");const A=pe("w-16 h-16"),M=q(l.createdAt,!0),D=l.refundMethod==="cash"?"Pengembalian Tunai (Cash Refund)":l.refundMethod==="credit"?"Saldo Kredit Toko (Store Credit)":l.refundMethod==="exchange"?"Tukar Barang (Exchange)":"Lainnya",C=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${A}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(u.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(u.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(u.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(u.store?.wa||u.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">NOTA RETUR</h2>
                <h3 class="font-bold text-sm tracking-wider text-indigo-600 uppercase">PENJUALAN KONSUMEN</h3>
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${i(l.id)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${M}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Rujukan Nota: <b class="font-mono text-slate-900">#${i(l.orderId||"-")}</b></p>
            </div>
        </div>
        `,v=`
        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Identitas Pelanggan / Konsumen</span>
                <p class="font-bold text-slate-900 text-sm">${i(l.customerName||"Pelanggan Umum")}</p>
                ${l.customerPhone?`<p class="text-slate-600 font-mono text-[11px]"><i class="fa-brands fa-whatsapp text-emerald-600"></i> ${i(l.customerPhone)}</p>`:""}
                <p class="text-slate-500 text-[11px]">Saluran Transaksi: <span class="font-semibold text-slate-700">${l.source==="pos"?"Kasir POS":"Website Online"}</span></p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Penyelesaian Finansial</span>
                <p class="font-bold text-slate-900 text-sm">${i(D)}</p>
                <p class="text-slate-500 text-[11px]">Petugas Pelaksana: <span class="font-semibold text-slate-700">${i(l.cashierName||"Kasir Toko")}</span></p>
                <p class="text-slate-500 text-[11px]">Status Retur: <span class="font-bold text-emerald-600 uppercase">SELESAI (COMPLETED)</span></p>
            </div>
        </div>
        `,x=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-28 border-r border-slate-700">Kondisi &amp; Alokasi</th>
            <th class="py-2.5 px-3 text-center w-16 border-r border-slate-700">Qty Retur</th>
            <th class="py-2.5 px-3 text-right w-24 border-r border-slate-700">Harga Jual</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Subtotal Retur</th>
            <th class="py-2.5 px-3 rounded-tr-xl w-36">Alasan Pengembalian</th>
        </tr>
        `,S=l.items||[],P=S.map((h,T)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${T+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${i(h.name)}
                ${h.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${i(h.variantName)}</span>`:""}
                ${h.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(h.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center text-[10.5px]">
                ${h.condition==="good"?'<span class="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 block text-[9.5px]">Baik (Restok Rak)</span>':'<span class="font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 block text-[9.5px]">Rusak (Karantina)</span>'}
            </td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${st(h.qty)}</td>
            <td class="py-2 px-3 text-right font-mono text-slate-600">${k(h.soldPrice||0)}</td>
            <td class="py-2 px-3 text-right font-mono font-bold text-slate-900">${k(h.subtotalRefund||h.qty*h.soldPrice||0)}</td>
            <td class="py-2 px-3 text-[10.5px] text-slate-600">
                ${i(h.reason||"-")}
            </td>
        </tr>
        `),$=`
        <div class="grid grid-cols-2 gap-4 mb-4 items-start">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[10px] space-y-1">
                <p class="font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-1">Ketentuan Retur Resmi Toko:</p>
                <p class="text-slate-600 leading-snug">1. Barang retur telah diverifikasi fisik dan dicocokkan dengan struk pembelian asli.</p>
                <p class="text-slate-600 leading-snug">2. Kompensasi diberikan sesuai metode yang disepakati dan tidak dapat dibatalkan.</p>
                ${l.notes?`<p class="mt-2 text-slate-700 font-semibold border-t border-slate-200 pt-1">Catatan: "${i(l.notes)}"</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between items-center text-slate-600">
                    <span>Total Item Diretur:</span>
                    <span class="font-mono font-bold text-slate-800">${S.reduce((h,T)=>h+(parseFloat(T.qty)||0),0)} Unit</span>
                </div>
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 font-bold text-slate-900">
                    <span class="uppercase tracking-wider">TOTAL NILAI RETUR:</span>
                    <span class="text-rose-600 font-black text-base font-mono">${k(l.totalRefund||0)}</span>
                </div>
            </div>
        </div>
        `,O=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Konsumen / Pembeli:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(l.customerName||"Konsumen")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Kasir / Petugas Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(l.cashierName||u.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,R=de({docTitle:"Nota Retur Penjualan",docNumber:`#${l.id}`,docDate:M,kopHtml:C,metaHtml:v,tableHeaderHtml:x,rows:P,summaryHtml:$,signaturesHtml:O,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});ce(R);return}if(e==="vendor_return"){const m=typeof t=="object"&&t!==null?t.returnId:t,f=u.vendorReturns||[],l=f.find(h=>String(h.id)===String(m))||f[0];if(!l){typeof window.showToast=="function"&&window.showToast("Data retur supplier tidak ditemukan!");return}Q("doc-modal-title","Preview Surat Pengembalian Barang ke Supplier (A4)");const A=pe("w-16 h-16"),M=q(l.createdAt,!0),D=l.settlementMethod==="ap_deduction"?"Potong Hutang PO (AP Deduction)":l.settlementMethod==="cash_refund"?"Pengembalian Dana Kas / Transfer":"Lainnya",C=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${A}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(u.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(u.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(u.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(u.store?.wa||u.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">SURAT PENGEMBALIAN</h2>
                <h3 class="font-bold text-sm tracking-wider text-amber-600 uppercase">BARANG KE PEMASOK (VENDOR RETURN)</h3>
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${i(l.id)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${M}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Rujukan PO: <b class="font-mono text-slate-900">#${i(l.poId||"Non-PO")}</b></p>
            </div>
        </div>
        `,v=`
        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Ditujukan Kepada Rekanan Supplier</span>
                <p class="font-bold text-slate-900 text-sm uppercase">${i(l.supplierName||"Pemasok Toko")}</p>
                <p class="text-slate-500 text-[11px]">Rujukan Kulakan PO: <span class="font-mono font-bold text-slate-800">${i(l.poId||"-")}</span></p>
                <p class="text-slate-500 text-[11px]">Status Dokumen: <span class="font-bold text-amber-600 uppercase">TERBIT / DISERAHKAN</span></p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Penyelesaian Finansial Supplier</span>
                <p class="font-bold text-slate-900 text-sm">${i(D)}</p>
                <p class="text-slate-500 text-[11px]">Estimasi Nilai Klaim HPP: <span class="font-mono font-bold text-amber-600">${k(l.totalClaim||0)}</span></p>
                ${l.notes?`<p class="text-slate-600 text-[10.5px] italic mt-1">Catatan: "${i(l.notes)}"</p>`:""}
            </div>
        </div>
        `,x=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Asal Lokasi</th>
            <th class="py-2.5 px-3 text-center w-16 border-r border-slate-700">Qty Retur</th>
            <th class="py-2.5 px-3 text-right w-24 border-r border-slate-700">Harga Beli/HPP</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Total Klaim</th>
            <th class="py-2.5 px-3 rounded-tr-xl w-36">Alasan Klaim Cacat</th>
        </tr>
        `,S=l.items||[],P=S.map((h,T)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${T+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${i(h.name)}
                ${h.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${i(h.variantName)}</span>`:""}
                ${h.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(h.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center text-[10px] font-semibold text-slate-600">
                ${h.fromLocation==="warehouse"?"Gudang":h.fromLocation==="quarantine"?"Karantina":"Rak Toko"}
            </td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${st(h.qty)}</td>
            <td class="py-2 px-3 text-right font-mono text-slate-600">${k(h.buyPrice||0)}</td>
            <td class="py-2 px-3 text-right font-mono font-bold text-amber-600">${k(h.subtotalClaim||h.qty*h.buyPrice||0)}</td>
            <td class="py-2 px-3 text-[10.5px] text-slate-600">
                ${i(h.reason||"Barang Cacat Pabrik")}
            </td>
        </tr>
        `),$=`
        <div class="grid grid-cols-2 gap-4 mb-4 items-start">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[10px] space-y-1">
                <p class="font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-1">Ketentuan Pengembalian Barang:</p>
                <p class="text-slate-600 leading-snug">1. Barang fisik diserahkan kepada pihak ekspedisi / perwakilan resmi supplier.</p>
                <p class="text-slate-600 leading-snug">2. Nilai klaim memotong saldo hutang PO atau diganti dana/barang baru.</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between items-center text-slate-600">
                    <span>Total Kuantitas Barang:</span>
                    <span class="font-mono font-bold text-slate-800">${S.reduce((h,T)=>h+(parseFloat(T.qty)||0),0)} Unit</span>
                </div>
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 font-bold text-slate-900">
                    <span class="uppercase tracking-wider">TOTAL NILAI KLAIM HPP:</span>
                    <span class="text-amber-600 font-black text-base font-mono">${k(l.totalClaim||0)}</span>
                </div>
            </div>
        </div>
        `,O=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Pengirim (Purchasing Toko):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(u.store?.name||"Toko Putri")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Penerima (Supir / Supplier):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(l.supplierName||"Pemasok / Distributor")}</span>
            </div>
        </div>
        `,R=de({docTitle:"Surat Pengembalian Barang Supplier",docNumber:`#${l.id}`,docDate:M,kopHtml:C,metaHtml:v,tableHeaderHtml:x,rows:P,summaryHtml:$,signaturesHtml:O,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});ce(R);return}const a=t||window.cVOrd,s=(window.gOrds||[]).find(m=>String(m.orderId)===String(a))||(window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(a)?window.lastPrintedOrder:null);if(!s){typeof window.showToast=="function"&&window.showToast("Data pesanan tidak ditemukan!");return}Q("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const o=s.dateString?new Date(s.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"",r=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${pe("w-16 h-16")}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(u.store?.name||"TOKO PUTRI")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(u.store?.slogan||"General Supplier")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(u.store?.address||"Alamat fisik toko")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(u.store?.wa||"-")}</p>
                ${s.payment?.taxNpwp||u.store?.taxNpwp?`<p class="text-xs font-semibold text-slate-600 mt-0.5"><i class="fa-solid fa-id-card text-blue-500"></i> NPWP Toko: <span class="font-mono">${i(s.payment?.taxNpwp||u.store.taxNpwp)}</span></p>`:""}
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl sm:text-3xl tracking-widest ${e==="invoice"?"text-blue-600":"text-amber-600"} uppercase">${e==="invoice"?s.payment?.method==="tempo"?"PROFORMA INVOICE":"INVOICE":"SURAT JALAN"}</h2>
            <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(s.orderId)}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${o}</p>
        </div>
    </div>
    `,d=`
    <div class="grid grid-cols-2 gap-6 mb-5">
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ditagihkan Kepada (Pemesan):</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-0.5">${i(s.customer?.name||"Guest")}${s.customer?.wa?` <span class="text-xs font-mono font-medium text-slate-500">(+${i(s.customer.wa)})</span>`:""}</p>
            <p class="text-xs font-medium text-slate-700 leading-relaxed mb-1">${i(s.customer?.address||"-")}</p>
            ${s.isDropPoint&&s.dropPoint?`
            <div class="mt-2 pt-2 border-t border-rose-200 bg-rose-50/80 p-2.5 rounded-xl border border-dashed text-left">
                <div class="flex items-center gap-1.5 text-rose-700 font-bold text-[11px] uppercase tracking-wider mb-0.5">
                    <i class="fa-solid fa-location-dot"></i> Pengantaran ke Lokasi Berbeda (Drop-Point):
                </div>
                <p class="font-bold text-xs text-slate-900 uppercase">${i(s.dropPoint.name||"-")}${s.dropPoint.wa?` <span class="font-mono text-[11px] font-semibold text-rose-600">(+${i(s.dropPoint.wa)})</span>`:""}</p>
                <p class="text-[11px] font-medium text-slate-700 mt-0.5 leading-relaxed">${i(s.dropPoint.address||"-")}</p>
            </div>
            `:""}
            ${s.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-xl border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky"></i> Catatan: ${i(s.customer.note)}</p>`:""}
        </div>
        
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-center space-y-2.5">
            <div class="flex justify-between items-center border-b border-slate-200 pb-1.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Metode Pengiriman</span>
                <span class="text-xs font-bold text-slate-800 uppercase">${i(s.isDropPoint?"Drop-Point (Lokasi Berbeda)":s.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko")}</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-200 pb-1.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Sistem Pembayaran</span>
                <span class="text-xs font-bold text-slate-800 uppercase">${i(s.payment?.method||"cash")}</span>
            </div>
            <div class="flex justify-between items-center pb-0.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Bayar</span>
                <span class="text-xs font-bold ${s.status==="Selesai"?"text-emerald-600":"text-rose-600"} uppercase">${s.status==="Selesai"?"LUNAS":"BELUM LUNAS"}</span>
            </div>
        </div>
    </div>
    `,c=Array.isArray(s.items)?s.items:Array.isArray(s.cart)?s.cart:[];if(e==="invoice"){const m=`
        <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
            <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Produk &amp; Varian</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Sat.</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total</th>
        </tr>
        `,f=c.map((v,x)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${x+1}</td>
            <td class="py-2.5 px-3 font-bold flex items-center gap-1.5">
                ${i(v.name)} 
                ${v.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${i(v.variantName)}</span>`:""}
                ${v.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${i(v.colorCode)};"></span>`:""}
                ${v.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${i(v.poTime)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${parseFloat(v.qty)} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(v.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${k(v.effectivePrice)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${k(v.effectivePrice*parseFloat(v.qty))}</td>
        </tr>
        `);let l="";if((s.pointsEarned>0||s.finalMemberPoints!==void 0&&s.finalMemberPoints!==null)&&(l+=`
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 flex items-center gap-4">
                <div class="w-8 h-8 rounded-lg bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
                ${s.pointsEarned>0?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-sm text-amber-700">+${s.pointsEarned}</p></div>`:""}
                ${s.finalMemberPoints!==void 0&&s.finalMemberPoints!==null?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Member</p><p class="font-bold text-sm text-amber-700">${s.finalMemberPoints}</p></div>`:""}
            </div>`),s.claimedReward&&(l+=`
            <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-3 mb-4 flex items-center justify-between gap-4">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                    <div>
                        <p class="text-[9px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${s.claimedReward.pointsCost} Poin)</p>
                        <p class="font-bold text-xs text-violet-800 uppercase">${i(s.claimedReward.name)}</p>
                    </div>
                </div>
                <span class="text-[9.5px] font-bold px-2.5 py-1 rounded-lg bg-violet-600 text-white uppercase tracking-wider">${i(s.claimedReward.status==="ready"?"SERTAKAN PENGIRIMAN":"KLAIM RESMI")}</span>
            </div>`),s.payment?.method==="tempo")if(!!(s.payment?.isPaylater||s.isPaylater||s.payment?.subMethod==="paylater")){const x=s.payment?.paylaterMonths||1,S=s.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":s.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)",P=Array.isArray(s.payment?.paylaterSchedule)&&s.payment.paylaterSchedule.length>0;let $="";if(P){Math.max(0,parseFloat(s.payment?.tempoBalance)||0);const R=(s.payment?.installments||[]).reduce((N,K)=>N+(parseFloat(K.amount)||0),0);let h=0,T=!1;$=`
                    <div class="mt-2.5 pt-2 border-t border-emerald-300/60">
                        <div class="flex items-center justify-between mb-1.5">
                            <p class="text-[9.5px] font-black uppercase tracking-wider text-emerald-900 flex items-center gap-1">
                                <i class="fa-solid fa-calendar-check text-emerald-700"></i> Jadwal Angsuran Bulanan (${s.payment?.paylaterMonths||1}x Tenor):
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
                                ${s.payment.paylaterSchedule.map((N,K)=>{const B=N.installmentIndex||N.installmentNo||N.installmentNumber||N.month||K+1,I=parseFloat(N.pokok||N.principal)||0,E=parseFloat((N.adminFee||0)+(N.serviceFee||0))||0,F=parseFloat(N.total||N.totalMonthly||N.totalInstallment)||I+E;h+=F;const Y=N.dueDate||0,ee=N.dueDateFormatted||N.dueDateStr||(Y?q(Y):"-");let te="";return R>=h?te='<span class="px-1.5 py-0.2 rounded text-[8px] font-bold uppercase bg-emerald-100 text-emerald-700 border border-emerald-300">LUNAS</span>':T?te='<span class="px-1.5 py-0.2 rounded text-[8px] font-medium uppercase bg-slate-100 text-slate-500">MENDATANG</span>':(T=!0,te='<span class="px-1.5 py-0.2 rounded text-[8px] font-black uppercase bg-amber-100 text-amber-800 border border-amber-300">BULAN INI</span>'),`
                                    <tr>
                                        <td class="py-1 px-2 font-bold text-slate-800 text-center font-sans">Bulan Ke-${B}</td>
                                        <td class="py-1 px-2 text-slate-600 text-center">${ee}</td>
                                        <td class="py-1 px-2 text-right text-slate-600">${k(I)}</td>
                                        <td class="py-1 px-2 text-right text-slate-500">${k(E)}</td>
                                        <td class="py-1 px-2 font-black text-right text-emerald-800">${k(F)}</td>
                                        <td class="py-1 px-2 text-center font-sans">${te}</td>
                                    </tr>`}).join("")}
                            </tbody>
                        </table>
                    </div>`}l+=`
                <div class="mb-4 border border-emerald-200 bg-emerald-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-emerald-800 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-handshake text-emerald-600 mr-1"></i> Putri PayLater (${S}):</h4>
                    <p class="text-[9.5px] text-emerald-700 font-semibold leading-relaxed">
                        Sistem pembayaran cicilan resmi Toko Putri tanpa biaya tersembunyi. Jatuh Tempo Pertama: ${s.payment.tempoDueDate?q(s.payment.tempoDueDate):"-"}.
                        ${s.payment.paylaterMonthlyInstallment?` Angsuran: <b>${k(s.payment.paylaterMonthlyInstallment)} / bulan</b> (${x}x).`:""}
                    </p>
                    ${$}
                </div>`}else l+=`
                <div class="mb-4 border border-pink-200 bg-pink-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-pink-700 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo:</h4>
                    <p class="text-[9.5px] text-pink-600 font-semibold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${s.payment.tempoDueDate?q(s.payment.tempoDueDate):"-"}). Keterlambatan dikenakan denda sesuai regulasi toko.</p>
                </div>`;const M=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran Toko Putri:
                </h4>
                <div class="space-y-1.5 pt-0.5">${qe("font-mono text-xs")}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi pembayaran via WhatsApp: <b>${i(u.store?.wa||u.store?.phone||"-")}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Terima kasih atas transaksi Anda di ${i(u.store?.name||"Toko Putri")}.</p>
                </div>
            </div>

            ${(()=>{const v=Je(s);return`
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                    <div class="flex justify-between text-slate-600"><span>Subtotal Produk</span><span class="font-mono">${k(v.subtotal)}</span></div>
                    ${v.shipping>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim</span><span class="font-mono">${k(v.shipping)}</span></div>`:""}
                    ${v.shippingDiscount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Ongkir</span><span class="font-mono">-${k(v.shippingDiscount)}</span></div>`:""}
                    ${v.productDiscount>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Diskon Produk</span><span class="font-mono">-${k(v.productDiscount)}</span></div>`:""}
                    ${v.pointDiscount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Poin Reward</span><span class="font-mono">-${k(v.pointDiscount)}</span></div>`:""}
                    ${v.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater</span><span class="font-mono">+${k(v.paylaterAdminFee)}</span></div>`:""}
                    ${v.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan</span><span class="font-mono">+${k(v.paylaterServiceFee)}</span></div>`:""}
                    ${v.hasPpn?`
                    <div class="flex justify-between text-slate-600"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-mono">${k(v.dppAmount)}</span></div>
                    <div class="flex justify-between text-amber-600 font-bold"><span>${v.ppnLabel}</span><span class="font-mono">${v.ppnAmount>0?(v.isInclusive?"":"+")+k(v.ppnAmount):"Rp 0"}</span></div>
                    `:""}
                    
                    <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-2 shadow-xs">
                        <span class="font-bold text-xs uppercase tracking-widest">Grand Total</span>
                        <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${k(v.grandTotal)}</span>
                    </div>
                `})()}
                ${s.payment?.method==="tempo"?`
                <div class="flex justify-between text-emerald-600 font-bold"><span>${s.payment?.isPaylater||s.payment?.subMethod==="paylater"?"Limit Terpakai / DP":"Uang Muka (DP)"}</span><span class="font-mono">${k(s.payment?.tempoDp||0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-2.5 rounded-xl mt-1 border border-rose-200">
                    <span class="font-bold text-xs uppercase tracking-widest">${s.payment?.isPaylater||s.payment?.subMethod==="paylater"?"Sisa Tagihan PayLater":"Sisa Tagihan"}</span>
                    <span class="font-mono text-sm font-black tracking-tight">${k(s.payment?.tempoBalance||0)}</span>
                </div>
                ${(s.payment?.isPaylater||s.payment?.subMethod==="paylater")&&s.payment?.paylaterMonthlyInstallment?`
                <div class="flex justify-between text-[11px] text-emerald-700 font-bold">
                    <span>Angsuran per Bulan (${s.payment?.paylaterMonths||1}x)</span>
                    <span class="font-mono font-black">${k(s.payment.paylaterMonthlyInstallment)}/bln</span>
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
                <span class="font-bold text-slate-900">${i(s.customer?.name||"Nama Terang & TTD")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Sopir / Pengantar:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900">Nama Terang &amp; TTD</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Hormat Kami:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(u.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,C=de({docTitle:s.payment?.method==="tempo"?"Proforma Invoice":"Faktur Invoice",docNumber:`#${s.orderId}`,docDate:o,kopHtml:r,metaHtml:d,tableHeaderHtml:m,rows:f,extraBlocksHtml:l,summaryHtml:M,signaturesHtml:D,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:12,itemsLastPage:5});ce(C);return}const p=`
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Nama &amp; Spesifikasi Barang</th>
        <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Satuan</th>
        <th class="py-2.5 px-3 rounded-tr-xl text-center w-24">Ceklis Gudang</th>
    </tr>
    `,y=c.map((m,f)=>`
    <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3 text-center font-mono text-slate-500">${f+1}</td>
        <td class="py-2.5 px-3 font-bold uppercase flex items-center gap-1.5">
            ${i(m.name)} 
            ${m.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${i(m.variantName)}</span>`:""}
            ${m.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${i(m.colorCode)};"></span>`:""}
            ${m.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${i(m.poTime)}</span>`:""}
        </td>
        <td class="py-2.5 px-3 text-center font-bold text-base text-slate-800">${parseFloat(m.qty)}</td>
        <td class="py-2.5 px-3 text-center text-slate-500 font-bold uppercase text-[11px]">${i(m.unit||"pcs")}</td>
        <td class="py-2.5 px-3 text-center"><div class="w-4 h-4 border-2 border-slate-400 mx-auto rounded-sm shadow-inner"></div></td>
    </tr>
    `),b=`
    <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Penerima / Klien:</span>
            <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">${i(s.customer?.name||"Nama Terang & TTD")}</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Sopir / Pengantar:</span>
            <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">Nama Terang &amp; TTD</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Hormat Kami:</span>
            <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900 uppercase">${i(u.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,w=de({docTitle:"Surat Jalan Pengiriman",docNumber:`#${s.orderId}`,docDate:o,kopHtml:r,metaHtml:d,tableHeaderHtml:p,rows:y,signaturesHtml:b,singlePageMax:8,itemsFirstPage:8,itemsMiddlePage:16,itemsLastPage:9});ce(w)},Ea=()=>{const e=window.cart||[];if(!e||e.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}ie="sph";const t="SPH-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.floor(1e3+Math.random()*9e3),a=q(new Date),s=q(new Date(Date.now()+14*24*60*60*1e3));Q("doc-modal-title","Surat Penawaran Harga (SPH)");const o=pe("w-16 h-16"),n=typeof window.getEffP=="function"?window.getEffP:l=>l.price||0;let r=0;const d=e.map((l,A)=>{const M=parseFloat(l.qty)||1,D=n(l),C=M*D;return r+=C,`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${A+1}</td>
            <td class="py-2.5 px-3 font-bold">
                ${i(l.name)}
                ${l.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${i(l.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${M} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(l.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${k(D)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${k(C)}</td>
        </tr>
        `}),c=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${o}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(u.store?.name||"Toko Putri")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(u.store?.slogan||"General Supplier & Alat Teknik")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(u.store?.address||"Alamat fisik toko")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(u.store?.wa||"-")}</p>
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
    `,y=`
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Barang &amp; Spesifikasi</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
        <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Satuan</th>
        <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total Estimasi</th>
    </tr>
    `,b=`
    <div class="flex justify-end mb-4">
        <div class="w-1/2 md:w-[45%] space-y-1.5 text-xs font-bold text-slate-700">
            <div class="flex justify-between px-3"><span>Subtotal Estimasi</span><span class="font-mono">${k(r)}</span></div>
            <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-1 shadow-xs">
                <span class="font-bold text-xs uppercase tracking-widest">Total Penawaran</span>
                <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${k(r)}</span>
            </div>
        </div>
    </div>
    `,w=`
    <div class="border border-slate-200 bg-slate-50 p-3 rounded-xl text-left mb-4">
        <h4 class="font-bold text-slate-700 text-[10.5px] uppercase tracking-widest mb-1"><i class="fa-solid fa-circle-info mr-1 text-[var(--color-primary)]"></i> Syarat &amp; Ketentuan Penawaran:</h4>
        <ul class="text-[10px] text-slate-600 space-y-0.5 list-disc list-inside">
            <li>Harga penawaran berlaku selama <b>14 hari kalender</b> terhitung sejak tanggal dokumen diterbitkan.</li>
            <li>Ketersediaan dan fluktuasi stok dapat berubah sewaktu-waktu sampai diterbitkannya konfirmasi pesanan (PO) resmi.</li>
            <li>Biaya pengiriman dan penanganan disesuaikan dengan kuantitas dan jarak tempuh lokasi pengiriman.</li>
        </ul>
    </div>
    `,m=`
    <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-4 border-t border-slate-200">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Menyetujui / Klien Proyek:</span>
            <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">Nama Terang &amp; Stempel</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Hormat Kami:</span>
            <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900 uppercase">${i(u.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,f=de({docTitle:"Surat Penawaran Harga",docNumber:`#${t}`,docDate:a,kopHtml:c,metaHtml:p,tableHeaderHtml:y,rows:d,summaryHtml:b,extraBlocksHtml:w,signaturesHtml:m,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:5});ce(f)},ce=e=>{const t=g("doc-paper-content");if(!t)return;t.innerHTML=e.join("");const a=e.length,s=g("doc-page-count-badge");s&&(s.textContent=`${a} Halaman A4`),vo(a)},vo=(e=1)=>{const t=g("doc-preview-modal"),a=g("doc-preview-modal-box");t&&t.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),ft(t,a),kt()},kt=()=>{const e=g("doc-paper-scroll-area"),t=g("doc-paper-content"),a=g("doc-paper-wrapper");if(!e||!t||!a)return;const s=794,o=window.innerWidth<640?12:32,n=e.clientWidth-o,r=Math.min(1,Math.max(.2,n/s));t.style.transform=`translateX(-50%) scale(${r})`;const d=t.offsetHeight||t.scrollHeight;a.style.height=d*r+48+"px"};window.addEventListener("resize",()=>{const e=g("doc-preview-modal");e&&!e.classList.contains("hidden")&&kt()});const Ba=(e=!1)=>{const t=g("doc-preview-modal"),a=g("doc-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{Re(t,a)}):Re(t,a))},Ha=()=>{const e=g("doc-paper-content"),t=e?e.innerHTML:"";if(!t){typeof window.showToast=="function"&&window.showToast("Tidak ada dokumen yang dicetak!");return}if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){let n=g("a4-print-section");n||(n=document.createElement("div"),n.id="a4-print-section",document.body.appendChild(n)),n.innerHTML=t,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500);return}const a=window.open("","_blank"),o=`<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>${i(ie==="invoice"?"Faktur Invoice":ie==="po"?"Purchase Order":ie==="sph"?"Penawaran Harga":ie==="stock_opname"?"Berita Acara Stock Opname":ie==="tempo_recap"?"Rekap Buku Piutang Toko":ie==="tempo_customer_ledger"?"Kartu Piutang Pelanggan":ie==="sales_return"?"Nota Retur Penjualan":ie==="vendor_return"?"Surat Pengembalian Barang":"Dokumen Resmi A4")} - Cetak A4 Standar Presisi</title>
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
</html>`;if(!a){let n=document.getElementById("a4-print-fallback-iframe");n||(n=document.createElement("iframe"),n.id="a4-print-fallback-iframe",n.style.position="fixed",n.style.right="0",n.style.bottom="0",n.style.width="0",n.style.height="0",n.style.border="0",n.style.opacity="0",document.body.appendChild(n));const r=n.contentWindow.document;r.open(),r.write(o),r.close(),setTimeout(()=>{try{n.contentWindow.focus(),n.contentWindow.print()}catch(d){console.warn("[DocPrint] Fallback iframe print error:",d)}},650);return}a.document.open(),a.document.write(o),a.document.close()},Fa=async e=>{if(!Oa){St(!0),ot(e==="image"?"Membuat Gambar HD...":"Menyusun Dokumen PDF A4...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{$t(),St(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const t=g("doc-paper-content");if(!t)throw new Error("Elemen dokumen tidak ditemukan.");let a=Array.from(t.querySelectorAll(".a4-page"));a.length===0&&(a=[t]);const s=window.cVOrd||Date.now().toString(36).toUpperCase(),o=`${ie.toUpperCase()}_${s}`,n=async r=>{const d=document.createElement("div");d.style.position="fixed",d.style.top="-9999px",d.style.left="-9999px",d.style.width="794px",d.style.height="1123px",d.style.backgroundColor="#ffffff",d.style.overflow="hidden",d.style.zIndex="-9999";const c=r.cloneNode(!0);c.style.margin="0 auto",c.style.boxShadow="none",c.style.border="none",c.style.borderRadius="0",c.style.transform="none",c.style.width="794px",c.style.height="1123px",c.style.minHeight="1123px",c.style.maxHeight="1123px",c.style.overflow="hidden",d.appendChild(c),document.body.appendChild(d);const p=Array.from(c.querySelectorAll("img"));await Promise.all(p.map(b=>b.complete?Promise.resolve():new Promise(w=>{b.addEventListener("load",w,{once:!0}),b.addEventListener("error",w,{once:!0})}))),await new Promise(b=>setTimeout(b,200));const y=await html2canvas(d,{scale:2,useCORS:!0,backgroundColor:"#ffffff",width:794,height:1123,windowWidth:794,windowHeight:1123});return document.body.removeChild(d),y};if(e==="image")if(a.length===1){const d=(await n(a[0])).toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(d,`${o}.png`,"image/png");else{const c=document.createElement("a");c.download=`${o}.png`,c.href=d,c.click()}typeof window.showToast=="function"&&window.showToast("Gambar A4 Presisi Berhasil Disimpan!")}else{for(let r=0;r<a.length;r++){ot(`Menyimpan Gambar Halaman ${r+1} dari ${a.length}...`);const c=(await n(a[r])).toDataURL("image/png",1),p=`${o}_Hal_${r+1}.png`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(c,p,"image/png");else{const y=document.createElement("a");y.download=p,y.href=c,y.click()}await new Promise(y=>setTimeout(y,250))}typeof window.showToast=="function"&&window.showToast(`Berhasil menyimpan ${a.length} gambar halaman A4!`)}else{const r=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,d=new r({orientation:"portrait",unit:"mm",format:"a4"});for(let c=0;c<a.length;c++){ot(`Menyusun PDF Hal ${c+1} dari ${a.length}...`);const y=(await n(a[c])).toDataURL("image/jpeg",.95);c>0&&d.addPage("a4","portrait"),d.addImage(y,"JPEG",0,0,210,297,void 0,"FAST")}window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"?window.AndroidNativeApp.saveOrShareFile(d.output("datauristring"),`${o}.pdf`,"application/pdf"):d.save(`${o}.pdf`),typeof window.showToast=="function"&&window.showToast(`File PDF Standar A4 (${a.length} Halaman) Berhasil Disimpan!`)}}catch(t){console.error("Export Error: ",t),typeof window.showToast=="function"&&window.showToast(t&&t.message?`Gagal: ${t.message}`:"Gagal memproses dokumen.")}finally{$t(),St(!1)}}},Ka=()=>Kt("tempo_recap");window.openDocPreview=Kt;window.openCartSPHPreview=Ea;window.openTempoRecapDocPreview=Ka;window.fitDocPreview=kt;window.closeDocPreviewModal=Ba;window.printDocA4=Ha;window.exportDocFile=Fa;const vn=Object.freeze(Object.defineProperty({__proto__:null,closeDocPreviewModal:Ba,get currentDocType(){return ie},exportDocFile:Fa,fitDocPreview:kt,getStoreBankListHtml:qe,openCartSPHPreview:Ea,openDocPreview:Kt,openTempoRecapDocPreview:Ka,printDocA4:Ha},Symbol.toStringTag,{value:"Module"}));export{Xo as $,Ks as A,Ia as B,Ue as C,Qe as D,go as E,Os as F,gn as G,bs as H,rn as I,ws as J,ln as K,xs as L,dn as M,ks as N,xe as O,xo as P,nn as Q,J as R,_o as S,ys as T,an as U,Le as V,hn as W,Vt as X,Je as Y,bn as Z,sa as _,u as a,Co as a$,Q as a0,Fs as a1,Is as a2,ma as a3,_s as a4,gs as a5,vs as a6,on as a7,Ns as a8,fn as a9,ss as aA,Oo as aB,Eo as aC,Bo as aD,Ho as aE,Fo as aF,Ko as aG,ua as aH,un as aI,pn as aJ,qa as aK,Bs as aL,Va as aM,z as aN,Nt as aO,hs as aP,Lo as aQ,Do as aR,Z as aS,Xs as aT,wn as aU,xn as aV,So as aW,cn as aX,Ie as aY,Ps as aZ,Ao as a_,ro as aa,oo as ab,en as ac,zo as ad,bt as ae,Mo as af,Hs as ag,na as ah,mn as ai,Se as aj,ds as ak,cs as al,Us as am,fs as an,Qo as ao,Vo as ap,Go as aq,W as ar,os as as,ns as at,jo as au,Za as av,es as aw,ts as ax,Xa as ay,as as az,pa as b,Qa as b0,Uo as b1,rs as b2,is as b3,ls as b4,ps as b5,us as b6,ms as b7,Zo as b8,Ts as b9,$o as ba,Io as bb,qo as bc,Wo as bd,Jo as be,Yo as bf,sn as bg,Dt as bh,wo as bi,yo as bj,yn as bk,vn as bl,oa as c,Wa as d,g as e,k as f,Es as g,ca as h,i,tn as j,be as k,ot as l,js as m,$t as n,ft as o,Ja as p,we as q,wt as r,da as s,_ as t,Ne as u,Re as v,No as w,Ro as x,Ya as y,mt as z};
