const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js","assets/module-pos-BA7WV-ab.js"])))=>i.map(i=>d[i]);
import{f as Ne}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const Ca="modulepreload",La=function(e){return"/"+e},Kt={},Xt=function(t,a,o){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");s=Promise.allSettled(a.map(d=>{if(d=La(d),d in Kt)return;Kt[d]=!0;const p=d.endsWith(".css"),x=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${x}`))return;const w=document.createElement("link");if(w.rel=p?"stylesheet":Ca,p||(w.as="script"),w.crossOrigin="",w.href=d,l&&w.setAttribute("nonce",l),document.head.appendChild(w),p)return new Promise((b,u)=>{w.addEventListener("load",b),w.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${d}`)))})}))}function n(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return s.then(r=>{for(const l of r||[])l.status==="rejected"&&n(l.reason);return t().catch(n)})},Da={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const Na=typeof window<"u"&&window.FIREBASE_CONFIG?window.FIREBASE_CONFIG:Da;Ne.apps.length||Ne.initializeApp(Na);const re=Ne.firestore(),tt=Ne.auth();typeof window<"u"&&(window.firebase=Ne,window.db=re,window.auth=tt);try{re.settings({ignoreUndefinedProperties:!0,experimentalAutoDetectLongPolling:!0,merge:!0})}catch{}typeof window<"u"&&(window.addEventListener("online",()=>{try{re.enableNetwork().catch(()=>{})}catch{}}),window.addEventListener("offline",()=>{try{re.disableNetwork().catch(()=>{})}catch{}}));let Ia=null;const Ps=()=>{Xt(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{Ia=Ne.analytics()}catch{}}).catch(()=>{})},ie="K2ijSERTT2dg27yYGTEgn6XHSnW2",Oa={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"pill",brandStyle:"logo",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showHeroSlide:!0,heroMascotImg:"/putri_mascot_anim.gif",heroBadgeText:"Siap Melayani",heroWelcomeTag:"SELAMAT DATANG",heroTitle:"",heroSubtitle:"",showRewardCatalog:!0,showScrollTopButton:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,paylater:{enabled:!0,minOrder:2e4,maxOrder:1e7,noticeText:"Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.",tenors:{"30d":{enabled:!0,label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:"flat",adminFeeValue:0,serviceFeeType:"flat",serviceFeeValue:0},"2m":{enabled:!0,label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:"flat",adminFeeValue:1500,serviceFeeType:"percent",serviceFeeValue:1.5},"3m":{enabled:!0,label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:"flat",adminFeeValue:2500,serviceFeeType:"percent",serviceFeeValue:2.5}}},terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},subscription:{status:"active",plan:"pro_managed",expiresAt:null,allowGraceDays:7,storeCode:"PUTRI",clientName:"Pemilik Toko",developerContact:"6281234567890",developerName:"Developer / Technical Partner"},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],productOrder:[],suppliers:[],purchases:[],expenses:[],stockOpnameHistory:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let f=JSON.parse(JSON.stringify(Oa)),ea=[],ta=[],j=[];try{const e=localStorage.getItem("freshmart_cart");e&&(ea=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(ta=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(j=JSON.parse(e)||[])}catch{}let Ra={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},Ea=null,Ba=null,Ha=null,Fa="Semua Produk",Ua="Semua Jenis",Ka="Semua Merek",ja="",_a="newest",za="grid",qa=1,Ga=12,Va="orders",Wa="",Ja=null,Ya=null,Qa=0,Za=[],Xa=[],eo=[],to=1,ge=[],ao=null,oo=null,so=null,Te=[],no=[],Pe=null,ro=null,io=!1,lo="all",co="today",po=null,mo=null;const Ts=e=>{po=e},Ss=e=>{f=e},As=e=>{ea=e},$s=e=>{ta=e},Ms=e=>{j=e},Cs=e=>{Ra=e},Ls=e=>{Ea=e},Ds=e=>{Ba=e},Ns=e=>{Ha=e},Is=e=>{Fa=e},Os=e=>{Ua=e},Rs=e=>{Ka=e},Es=e=>{ja=e},Bs=e=>{_a=e},Hs=e=>{za=e},Fs=e=>{qa=e},Us=e=>{Ga=e},Ks=e=>{Va=e},js=e=>{Wa=e},_s=e=>{Ja=e},zs=e=>{Ya=e},qs=e=>{Qa=e},Gs=e=>{Za=e},Vs=e=>{Xa=e},Ws=e=>{eo=e},Js=e=>{to=e},Ys=e=>{ge=e},Qs=e=>{Te=e},Zs=e=>{no=e},jt=e=>{Pe=e},Xs=e=>{ro=e},en=e=>{io=e},tn=e=>{mo=e},an=e=>{lo=e},on=e=>{co=e},sn=e=>{ao=e},nn=e=>{oo=e},rn=e=>{so=e};let aa=!1;if(typeof window<"u"){const e=()=>{aa=!0,window.__hasUserInteracted=!0};["pointerdown","touchstart","mousedown","keydown"].forEach(t=>{window.addEventListener(t,e,{capture:!0,once:!0})}),window.__hasUserInteracted=!1}const Mt=()=>typeof navigator<"u"&&navigator.userActivation?navigator.userActivation.hasBeenActive:!!(aa||typeof window<"u"&&window.__hasUserInteracted);typeof window<"u"&&(window.checkUserGesture=Mt);const Ae=(e="light")=>{try{const t=window.Capacitor?.Plugins?.Haptics;if(t){e==="light"||e==="selection"?t.impact({style:"LIGHT"}).catch(()=>{}):e==="medium"?t.impact({style:"MEDIUM"}).catch(()=>{}):e==="heavy"?t.impact({style:"HEAVY"}).catch(()=>{}):e==="success"?t.notification({type:"SUCCESS"}).catch(()=>{}):e==="warning"?t.notification({type:"WARNING"}).catch(()=>{}):e==="error"&&t.notification({type:"ERROR"}).catch(()=>{});return}if(typeof navigator<"u"&&typeof navigator.vibrate=="function"){if(!Mt())return;e==="light"||e==="selection"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="heavy"?navigator.vibrate(45):e==="success"?navigator.vibrate([15,30,20]):e==="warning"?navigator.vibrate([30,40,30]):e==="error"&&navigator.vibrate([40,50,40,50,40])}}catch{}};typeof window<"u"&&(window.triggerHaptic=Ae);const uo=e=>{if(e)switch(e){case"product-modal":typeof window.closeProductModal=="function"&&window.closeProductModal();break;case"pos-variant-sheet":typeof window.closePOSVariantSheet=="function"&&window.closePOSVariantSheet();break;case"variant-preview-modal":typeof window.closeVariantPreviewModal=="function"&&window.closeVariantPreviewModal();break;case"custom-confirm-modal":typeof window.closeConfirm=="function"&&window.closeConfirm();break;case"scanner-modal":typeof window.closeCameraScanner=="function"&&window.closeCameraScanner();break;case"modal-tempo-detail":typeof window.closeTempoDetailModal=="function"&&window.closeTempoDetailModal();break;case"modal-tempo-payment":typeof window.closeTempoPaymentModal=="function"&&window.closeTempoPaymentModal();break;case"modal-tempo-penalty":typeof window.closeTempoPenaltyModal=="function"&&window.closeTempoPenaltyModal();break;case"modal-supplier-detail":typeof window.closeSupplierDetailModal=="function"&&window.closeSupplierDetailModal();break;case"modal-supplier-form":typeof window.closeSupplierFormModal=="function"&&window.closeSupplierFormModal();break;case"modal-po-form":typeof window.closePurchaseFormModal=="function"&&window.closePurchaseFormModal();break;case"modal-po-detail":typeof window.closePurchaseDetailModal=="function"&&window.closePurchaseDetailModal();break;case"modal-po-payment":typeof window.closePurchasePaymentModal=="function"&&window.closePurchasePaymentModal();break;case"modal-po-product-picker":typeof window.closePurchasePickerModal=="function"&&window.closePurchasePickerModal();break;case"quick-menu-modal":case"quickmenu-modal":typeof window.closeQuickMenuModal=="function"&&window.closeQuickMenuModal();break;case"category-modal":typeof window.closeCategoryModal=="function"&&window.closeCategoryModal();break;case"brand-modal":typeof window.closeBrandModal=="function"&&window.closeBrandModal();break;case"quick-variant-modal":typeof window.closeQuickVariantSheet=="function"&&window.closeQuickVariantSheet();break;case"shopping-guide-modal":typeof window.closeShoppingGuideModal=="function"&&window.closeShoppingGuideModal();break;case"pos-login-modal":typeof window.closePOSLoginModal=="function"&&window.closePOSLoginModal();break;case"admin-order-modal":typeof window.closeOrderDetailModal=="function"&&window.closeOrderDetailModal();break;case"order-detail-modal":typeof window.closeCustomerOrderDetailModal=="function"&&window.closeCustomerOrderDetailModal();break;case"modal-client-tempo-pay":typeof window.closeClientPaymentModal=="function"&&window.closeClientPaymentModal();break;default:{const t=document.getElementById(e);if(t){const a=t.querySelector('button[onclick*="close"], .fa-xmark')?.closest("button");if(a)a.click();else if(typeof window.closeModalAnim=="function"){const o=t.querySelector('.modal-bottom-sheet, [id$="-box"]')||t.firstElementChild;window.closeModalAnim(t,o)}else t.classList.add("hidden","opacity-0")}}}};let Z=null,He=null,Ye=0,_t=0,Qe=0,ue=!1,zt=0;const fo=()=>{if(typeof document>"u")return;document.addEventListener("touchstart",t=>{if(t.touches.length!==1)return;const a=t.touches[0],o=a.target.closest('[id*="modal"], [id*="sheet"]');if(!o||o.classList.contains("hidden")||o.classList.contains("opacity-0")||!(o.classList.contains("items-end")||!!a.target.closest(".modal-bottom-sheet")||o.classList.contains("modal-bottom-sheet")))return;let n=a.target.closest(".modal-bottom-sheet")||a.target.closest('[id$="-box"]');if(n||(n=a.target.closest('[id$="-content"]')),!n||a.target.closest('input, select, textarea, button, a, [role="button"], table, .no-drag'))return;const r=!!a.target.closest(".overflow-y-auto, .overflow-x-auto, .scroll-content, .custom-scrollbar"),l=n.getBoundingClientRect(),d=a.clientY-l.top;(a.target.closest(".pull-indicator")||!r&&d<=55)&&(Z=n,He=o,Ye=a.clientY,_t=a.clientX,Qe=Ye,ue=!1,zt=Date.now())},{passive:!0}),document.addEventListener("touchmove",t=>{if(!Z||t.touches.length!==1)return;const a=t.touches[0];Qe=a.clientY;const o=Qe-Ye,s=Math.abs(a.clientX-_t);if(!ue&&s>Math.abs(o)){Z=null;return}const n=Z.classList.contains("overflow-y-auto")?Z:Z.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar");if(!(n&&n.scrollTop>5&&!ue)){if(o>0){if(ue=!0,t.cancelable&&t.preventDefault(),Z.style.transform=`translateY(${o}px)`,Z.style.transition="none",He){const r=Math.max(.2,1-o/400);He.style.backgroundColor=`rgba(15, 23, 42, ${.8*r})`}}else if(o<0&&ue){const r=o*.2;Z.style.transform=`translateY(${r}px)`,Z.style.transition="none"}}},{passive:!1});const e=()=>{if(!Z)return;const t=Z,a=He,o=Qe-Ye,s=Math.max(1,Date.now()-zt),n=o/s;Z=null,He=null,ue&&(o>80||n>.45&&o>30)?(Ae("light"),t.style.transition="transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",t.style.transform="translateY(100%)",a&&(a.style.transition="opacity 0.25s ease",a.style.opacity="0"),setTimeout(()=>{t.style.transform="",t.style.transition="",a&&(a.style.backgroundColor="",a.style.opacity=""),uo(a?a.id:"")},250)):ue&&(t.style.transition="transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)",t.style.transform="",a&&(a.style.transition="background-color 0.28s ease",a.style.backgroundColor=""),setTimeout(()=>{t.style.transition=""},300)),ue=!1};document.addEventListener("touchend",e,{passive:!0}),document.addEventListener("touchcancel",e,{passive:!0})};let qt=0;const wo=()=>{typeof document>"u"||document.addEventListener("click",e=>{const t=Date.now();if(t-qt<50)return;const a=e.target.closest('button, [role="button"], a[onclick], [id*="bnav-"], .pos-add-btn, .pos-tag-chip, #pos-variant-chips button, .interactive-tap');a&&!a.disabled&&!a.classList.contains("disabled")&&(qt=t,Ae("light"))},{passive:!0,capture:!0})};let z=null;const bo=(e="pop")=>{try{if(typeof window>"u"||!Mt())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;z||(z=new t),z.state==="suspended"&&z.resume().catch(()=>{});const a=z.currentTime;if(e==="pop"){const o=z.createOscillator(),s=z.createGain();o.type="sine",o.frequency.setValueAtTime(340,a),o.frequency.exponentialRampToValueAtTime(560,a+.07),s.gain.setValueAtTime(.14,a),s.gain.exponentialRampToValueAtTime(.001,a+.08),o.connect(s),s.connect(z.destination),o.start(a),o.stop(a+.08)}else if(e==="success"){const o=z.createOscillator(),s=z.createOscillator(),n=z.createGain(),r=z.createGain();o.type="triangle",s.type="triangle",o.frequency.setValueAtTime(523.25,a),s.frequency.setValueAtTime(659.25,a+.09),n.gain.setValueAtTime(.12,a),n.gain.exponentialRampToValueAtTime(.001,a+.22),r.gain.setValueAtTime(.14,a+.09),r.gain.exponentialRampToValueAtTime(.001,a+.32),o.connect(n),n.connect(z.destination),s.connect(r),r.connect(z.destination),o.start(a),o.stop(a+.22),s.start(a+.09),s.stop(a+.32)}else if(e==="beep"){const o=z.createOscillator(),s=z.createGain();o.type="square",o.frequency.setValueAtTime(1040,a),s.gain.setValueAtTime(.08,a),s.gain.exponentialRampToValueAtTime(.001,a+.07),o.connect(s),s.connect(z.destination),o.start(a),o.stop(a+.07)}}catch{}};typeof window<"u"&&(window.playNativeSound=bo);const Fe=()=>{if(typeof document>"u")return;const e=document.getElementById("native-scroll-top-btn");e&&(e.classList.add("opacity-0","translate-y-3"),e.classList.add("hidden"))};typeof window<"u"&&(window.hideFloatingScrollTop=Fe);const go=()=>{if(typeof document>"u")return;let e=document.getElementById("native-scroll-top-btn");e||(e=document.createElement("button"),e.id="native-scroll-top-btn",document.body.appendChild(e)),e.setAttribute("aria-label","Kembali ke Atas"),e.setAttribute("title","Kembali ke Atas"),e.className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 hidden opacity-0 translate-y-3 transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900/95 dark:bg-slate-800/95 text-white shadow-xl shadow-black/25 border border-slate-700/80 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_4px_20px_rgba(var(--color-primary-rgb),0.4)] hover:scale-105 active:scale-90 cursor-pointer group",e.innerHTML='<i class="fa-solid fa-arrow-up text-xs md:text-sm transition-transform duration-200 group-hover:-translate-y-0.5"></i>',e._hasClickListener||(e._hasClickListener=!0,e.addEventListener("click",()=>{Ae("light");const a=document.querySelector(".view-section:not(.hidden)");if(a){const o=a.querySelector(".scroll-content");o&&o.scrollTop>10&&o.scrollTo({top:0,behavior:"smooth"})}window.scrollTo({top:0,behavior:"smooth"})}));const t=(a,o=null)=>{if(!e)return;if(typeof window<"u"&&window.appData?.store?.showScrollTopButton===!1){Fe();return}const s=document.querySelector(".view-section:not(.hidden)");if(!s||s.id!=="view-catalog"&&s.id!=="view-orders"){Fe();return}if(o){const r=o.closest(".view-section");if(!r||r.id!=="view-catalog"&&r.id!=="view-orders"){Fe();return}}if(document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none), [id*="dialog"]:not(.hidden), .fixed.inset-0:not(.hidden):not(.pointer-events-none):not(#native-theme-ambient)')){Fe();return}a>450?(e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0","translate-y-3")})):(e.classList.add("opacity-0","translate-y-3"),setTimeout(()=>{e&&e.classList.contains("opacity-0")&&e.classList.add("hidden")},300))};window.addEventListener("scroll",()=>{t(window.scrollY||document.documentElement.scrollTop)},{passive:!0}),document.addEventListener("scroll",a=>{a.target&&a.target.classList&&a.target.classList.contains("scroll-content")&&t(a.target.scrollTop,a.target)},{passive:!0,capture:!0})},xo=()=>{if(typeof window>"u"||typeof document>"u")return;let e=document.getElementById("native-connectivity-banner");e||(e=document.createElement("div"),e.id="native-connectivity-banner",e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] -translate-y-16 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl",document.body.appendChild(e));let t=null;const a=o=>{clearTimeout(t),Ae(o?"success":"warning"),o?(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-emerald-600 text-white border border-emerald-400/40",e.innerHTML='<i class="fa-solid fa-wifi text-xs"></i><span>Kembali Online — Terhubung</span>',t=setTimeout(()=>{e.classList.add("-translate-y-16","opacity-0")},2500)):(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-amber-500 text-slate-950 border border-amber-300/60",e.innerHTML='<i class="fa-solid fa-wifi-slash text-xs"></i><span>Mode Offline — Menggunakan Data Lokal</span>')};window.addEventListener("online",()=>a(!0)),window.addEventListener("offline",()=>a(!1))},ln=()=>{fo(),wo(),go(),xo()},oa=e=>{let t="";return typeof e=="object"&&e!==null?t=`${e.name||""} ${e.category||""} ${e.subCategory||""}`.toLowerCase():t=String(e||"").toLowerCase(),t.includes("cat")||t.includes("paint")||t.includes("politur")||t.includes("thinner")||t.includes("no drop")||t.includes("kuas")||t.includes("roll")?{icon:"fa-paint-roller",gradient:"linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(244, 63, 94, 0.12) 0%, transparent 70%)",textColor:"#e11d48"}:t.includes("gembok")||t.includes("kunci")||t.includes("grendel")||t.includes("slot")||t.includes("silinder")?{icon:"fa-lock",gradient:"linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(245, 158, 11, 0.12) 0%, transparent 70%)",textColor:"#d97706"}:t.includes("paku")||t.includes("baut")||t.includes("sekrup")||t.includes("mur")||t.includes("kawat")?{icon:"fa-hammer",gradient:"linear-gradient(135deg, #64748b 0%, #334155 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(100, 116, 139, 0.12) 0%, transparent 70%)",textColor:"#475569"}:t.includes("pipa")||t.includes("pvc")||t.includes("paralon")||t.includes("kran")||t.includes("sambungan")||t.includes("fitting")||t.includes("knee")||t.includes("tee")?{icon:"fa-faucet-drip",gradient:"linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(6, 182, 212, 0.12) 0%, transparent 70%)",textColor:"#0891b2"}:t.includes("semen")||t.includes("mortar")||t.includes("pasir")||t.includes("bata")||t.includes("hebel")?{icon:"fa-trowel-bricks",gradient:"linear-gradient(135deg, #ea580c 0%, #9a3412 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(234, 88, 12, 0.12) 0%, transparent 70%)",textColor:"#c2410c"}:t.includes("perkakas")||t.includes("tang")||t.includes("obeng")||t.includes("palu")||t.includes("bor")||t.includes("gerinda")||t.includes("meteran")||t.includes("gergaji")?{icon:"fa-toolbox",gradient:"linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",textColor:"#4f46e5"}:{icon:"fa-box-open",gradient:"linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(var(--color-primary-rgb), 0.12) 0%, transparent 70%)",textColor:"var(--color-primary)"}},ho=(e,t="",a="")=>{const o=oa(e);return{id:"brand",icon:o.icon,subIcon:o.icon,label:"Produk Resmi",podGradient:o.gradient,accent:"rgba(var(--color-primary-rgb),0.1)",aura:"rgba(var(--color-primary-rgb),0.08)",shadowColor:"rgba(var(--color-primary-rgb),0.15)"}},sa=e=>{if(!e||typeof e!="string")return"TP";const a=e.replace(/[^a-zA-Z0-9\s]/g," ").trim().split(/\s+/).filter(n=>n.length>0),o=a.filter(n=>/[a-zA-Z]/.test(n)),s=o.length>0?o:a;return s.length>=2?(s[0][0]+s[1][0]).toUpperCase():s.length===1?(s[0].length>=2?s[0].slice(0,2):s[0]+"P").toUpperCase():"TP"},yo=(e,t={})=>{const a=t.size||"md",o=t.className||"",s=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk"),n=oa(e),r=sa(s);return`
    <div class="pos-smart-cover cover-${a} ${o}" title="${i(s)}">
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
    </div>`},vo=e=>(typeof e=="object"&&e!==null?e.name:String(e||"Produk"),`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
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
    </svg>`)}`),g=e=>typeof e=="string"?document.getElementById(e):e,na=e=>{const t=g(e);t&&t.classList.remove("hidden")},ra=e=>{const t=g(e);t&&t.classList.add("hidden")},ko=(e,t,a)=>{const o=g(e);o&&o.classList.toggle(t,a)},oe=(e,t)=>{const a=g(e);a&&(a.innerText=t)},ia=(e,t)=>{const a=g(e);a&&(a.innerHTML=t)},Po=(e,t)=>{const a=g(e);a&&(a.value=t)},To=e=>{const t=g(e);return t?t.value:""},at=(e,t)=>{const a=typeof e=="string"?g(e):e,o=typeof t=="string"?g(t):t;a&&(a.classList.remove("hidden","pointer-events-none"),o&&o.classList.add("pointer-events-auto"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{a.classList.remove("opacity-0","pointer-events-none"),o&&(o.classList.remove("translate-y-full","sm:translate-y-10","sm:translate-y-8","translate-y-6","sm:translate-y-6","scale-95"),o.classList.add("pointer-events-auto"))})}))},Se=(e,t,a)=>{const o=typeof e=="string"?g(e):e,s=typeof t=="string"?g(t):t;if(!o){typeof a=="function"&&a();return}o.classList.add("opacity-0","pointer-events-none"),s&&(s.classList.add("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95"),s.classList.remove("pointer-events-auto")),setTimeout(()=>{o.classList.add("hidden"),typeof a=="function"&&a()},280)};typeof window<"u"&&(window.openModalAnim=at,window.closeModalAnim=Se);const So=e=>{try{return localStorage.getItem(e)}catch{return null}},Ao=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},i=e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),P=e=>{const t=Number(e);return isNaN(t)||e===null?"Rp 0":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(Math.abs(t)).replace(/^/,t<0?"-":"")},$o=e=>{if(!e)return new Date;if(e.timestamp&&typeof e.timestamp.toDate=="function")try{const s=e.timestamp.toDate();if(s instanceof Date&&!isNaN(s.getTime()))return s}catch{}if(e.createdAt&&typeof e.createdAt.toDate=="function")try{const s=e.createdAt.toDate();if(s instanceof Date&&!isNaN(s.getTime()))return s}catch{}if(e.timestamp&&typeof e.timestamp=="object"){const s=e.timestamp.seconds??e.timestamp._seconds;if(typeof s=="number"&&!isNaN(s)&&s>0)return new Date(s*1e3)}if(e.createdAt&&typeof e.createdAt=="object"){const s=e.createdAt.seconds??e.createdAt._seconds;if(typeof s=="number"&&!isNaN(s)&&s>0)return new Date(s*1e3)}const t=[e.dateMs,e.timestamp,e.createdAt,e.date];for(const s of t){if(typeof s=="number"&&!isNaN(s)&&s>0)return new Date(s>1e11?s:s*1e3);if(typeof s=="string"&&/^\d{10,13}$/.test(s.trim())){const n=Number(s.trim());return new Date(n>1e11?n:n*1e3)}}const a=[e.dateString,e.date,e.createdAt];for(const s of a)if(typeof s=="string"&&s.trim()&&s!=="[object Object]"){const n=new Date(s);if(!isNaN(n.getTime()))return n;const r=s.replace(/-/g,"/").replace("T"," ").replace(/\..*$/,""),l=new Date(r);if(!isNaN(l.getTime()))return l}const o=e.orderId||(typeof e=="string"?e:"");if(typeof o=="string"&&o.startsWith("ORD-")){const s=o.split("-");if(s.length>=2&&s[1].length>=6){const n=parseInt(s[1],36);if(!isNaN(n)&&n>15e11&&n<25e11)return new Date(n)}}return new Date},Mo=(e,t=null)=>{if(typeof e!="string")return e;const a=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);if(!a)return e;const o=a[1];return t==="image/gif"||e.toLowerCase().includes(".gif")||o==="1rkAFxnZDe2eLQ88kan2BeGSg56IkAEJ9"?`https://drive.google.com/uc?export=view&id=${o}`:`https://lh3.googleusercontent.com/d/${o}`},Co=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(t))return t;const a=t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return a?a[1]:null},la=e=>{if(typeof e!="string"||!e.trim())return null;const t=e.trim(),a=Co(t);if(a)return{type:"youtube",id:a,embedUrl:`https://www.youtube.com/embed/${a}?autoplay=1&mute=1&muted=1&loop=1&playlist=${a}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const o=t.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(o&&o[1]){const s=o[1];return{type:"gdrive",id:s,streamUrl:`https://drive.google.com/uc?export=download&id=${s}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${s}`,directUrl:`https://drive.google.com/uc?export=download&id=${s}`,embedUrl:`https://drive.google.com/file/d/${s}/preview?autoplay=1`}}return{type:"direct",directUrl:t,embedUrl:t}},dn=e=>{const t=la(e);return t?t.embedUrl:e},cn=e=>{const t=la(e);return t?t.embedUrl:e},pn=(e,t)=>typeof e!="string"||!e?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${t}`:e.includes("googleusercontent.com")&&!e.includes("=")?`${e}=${t}`:e,mn=e=>{if(!e||typeof e!="string")return!0;const t=e.trim();return!!(!t||t.includes("placehold.co"))},un=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",fn=(e,t,a,o)=>{document.title=e||"Toko Putri";const s=(n,r,l=!1)=>{const d=l?"property":"name";let p=document.querySelector(`meta[${d}="${n}"]`);p||(p=document.createElement("meta"),p.setAttribute(d,n),document.head.appendChild(p)),p.setAttribute("content",r)};t&&s("description",t),e&&s("og:title",e,!0),t&&s("og:description",t,!0),a&&s("og:image",a,!0),o&&s("og:url",o,!0)},wn=(e,t)=>{let a=document.getElementById(e);a||(a=document.createElement("script"),a.id=e,a.type="application/ld+json",document.head.appendChild(a)),a.textContent=JSON.stringify(t)},Ze=e=>{e&&oe("loader-text",e);const t=g("global-loader");t&&(t.style.opacity="1",t.style.display="flex")},bt=()=>{const e=g("global-loader");e&&(e.style.pointerEvents="none",e.style.transition="opacity 0.25s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250))},ne=(e,t,a,o)=>{typeof window.showToast=="function"&&window.showToast(e,t,a,o)},bn=(e,t,a,o)=>{if(typeof window.showConfirm=="function")return window.showConfirm(e,t,a,o)},Me={};typeof window<"u"&&(window.loadedScripts=Me);const gn=(e,t)=>t&&t()?Promise.resolve():(Me[e]||(Me[e]=new Promise((a,o)=>{const s=document.createElement("script");s.src=e,s.onload=()=>a(),s.onerror=()=>{delete Me[e],o(new Error("Gagal memuat: "+e))},document.head.appendChild(s)})),Me[e]),da=e=>{let t=(e||"").toString().replace(/\D/g,"");return t?(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),t):""},Lo=(e,t="")=>{const a=da(e);if(!a){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp tidak valid!");return}const o=t?encodeURIComponent(t):"",s=`https://wa.me/${a}${o?`?text=${o}`:""}`;window.AndroidNativeApp&&typeof window.AndroidNativeApp.openWhatsApp=="function"?window.AndroidNativeApp.openWhatsApp(s):window.open(s,"_blank","noopener,noreferrer")},Do=(e,t=null,a=null)=>{try{const o=(typeof t=="string"?document.querySelector(t):t)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!o)return;const s=e.getBoundingClientRect(),n=o.getBoundingClientRect(),r=document.createElement("div");r.className="flying-cart-item",a?r.innerHTML=`<img src="${a}" alt="Product" class="w-full h-full object-cover rounded-full" />`:r.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const l=s.left+s.width/2-20,d=s.top+s.height/2-20,p=n.left+n.width/2-20,x=n.top+n.height/2-20;r.style.cssText=`
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
        `,document.body.appendChild(r),requestAnimationFrame(()=>{const w=p-l,b=x-d;r.style.transform=`translate3d(${w}px, ${b}px, 0) scale(0.25) rotate(18deg)`,r.style.opacity="0.4"}),setTimeout(()=>{r&&r.parentNode&&r.parentNode.removeChild(r),Ae("medium");const w=document.getElementById("bottom-nav-cart-badge")||o.querySelector(".cart-count-badge");w&&(w.classList.remove("cart-bounce-pop"),w.offsetWidth,w.classList.add("cart-bounce-pop")),o.classList.remove("cart-bounce-pop"),o.offsetWidth,o.classList.add("cart-bounce-pop"),setTimeout(()=>{w&&w.classList.remove("cart-bounce-pop"),o.classList.remove("cart-bounce-pop")},600)},500)}catch(o){console.error("flyToCart error",o)}},_e=(e={})=>{if(!e||typeof e!="object")return{hasPpn:!1,ppnAmount:0,dppAmount:0,ppnRate:0,ppnType:"exclusive",isInclusive:!1,ppnLabel:"PPN",subtotal:0,shipping:0,shippingDiscount:0,productDiscount:0,pointDiscount:0,paylaterAdminFee:0,paylaterServiceFee:0,grandTotal:0,baseBeforeTax:0};const t=e.payment||{},a=typeof window<"u"&&window.appData?.store?window.appData.store:{},s=(Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[]).reduce((k,T)=>k+parseFloat(T.qty||1)*(parseFloat(T.effectivePrice||T.price)||0),0),n=t.subtotal!==void 0&&t.subtotal!==null?parseFloat(t.subtotal):e.subtotal!==void 0&&e.subtotal!==null?parseFloat(e.subtotal):s,r=parseFloat(t.shippingCost??e.shippingCost??0)||0,l=parseFloat(t.shippingDiscount??e.shippingDiscount??0)||0,d=parseFloat(t.productDiscount??e.productDiscount??0)||0,p=parseFloat(e.pointDiscount??t.pointDiscount??0)||0,x=parseFloat(t.paylaterAdminFee??0)||0,w=parseFloat(t.paylaterServiceFee??0)||0,b=t.grandTotal!==void 0&&t.grandTotal!==null?parseFloat(t.grandTotal):e.total!==void 0&&e.total!==null?parseFloat(e.total):e.grandTotal!==void 0&&e.grandTotal!==null?parseFloat(e.grandTotal):Math.max(0,n-d-p+r-l+x+w),u=Math.max(0,n-d-p+(r-l)+x+w);let m=t.ppnRate!==void 0&&t.ppnRate!==null&&!isNaN(parseFloat(t.ppnRate))?parseFloat(t.ppnRate):e.ppnRate!==void 0&&e.ppnRate!==null&&!isNaN(parseFloat(e.ppnRate))?parseFloat(e.ppnRate):a.ppnRate!==void 0?parseFloat(a.ppnRate):11;isNaN(m)&&(m=11);let c=t.ppnType||e.ppnType||a.ppnType||"exclusive",M=parseFloat(t.ppnAmount??e.ppnAmount??e.tax??t.tax??0);isNaN(M)&&(M=0),M<=0&&b>u+.5&&(M=Math.round(b-u),c="exclusive",m<=0&&u>0&&(m=Math.round(M/u*100)));const L=a.ppnEnabled===!0||a.ppnEnabled==="true";if(M<=0&&c==="inclusive"&&m>0&&(t.ppnEnabled===!0||L)){const k=Math.round(u*100/(100+m));M=Math.max(0,u-k)}let D=t.dppAmount!==void 0&&t.dppAmount!==null&&!isNaN(parseFloat(t.dppAmount))?parseFloat(t.dppAmount):e.dppAmount!==void 0&&e.dppAmount!==null&&!isNaN(parseFloat(e.dppAmount))?parseFloat(e.dppAmount):null;D===null&&(c==="inclusive"&&m>0?D=Math.round(u*100/(100+m)):D=u);const y=M>0||t.ppnEnabled===!0||e.ppnEnabled===!0||t.ppnShowZero===!0||t.ppnRate!==void 0&&t.ppnRate!==null&&t.ppnRate>0||t.ppnRate===0&&t.ppnEnabled!==!1||L&&t.ppnEnabled!==!1,h=c==="inclusive",v=t.ppnLabel||e.ppnLabel||a.ppnTaxLabel||`${h?"Termasuk PPN":"PPN"} (${m}%)`;return{hasPpn:y,ppnAmount:M,dppAmount:D,ppnRate:m,ppnType:c,isInclusive:h,ppnLabel:v,subtotal:n,shipping:r,shippingDiscount:l,productDiscount:d,pointDiscount:p,paylaterAdminFee:x,paylaterServiceFee:w,grandTotal:b,baseBeforeTax:u}};typeof window<"u"&&(window.normalizeWA=da,window.openWhatsApp=Lo,window.sLoad=Ze,window.hLoad=bt,window.el=g,window.show=na,window.hide=ra,window.toggleCls=ko,window.setIn=oe,window.setH=ia,window.setV=Po,window.getV=To,window.esc=i,window.fixD=Mo,window.fCur=P,window.parseOrderDate=$o,window.extractOrderTaxInfo=_e,window.sL=So,window.ssL=Ao,window.triggerHaptic=Ae,window.flyToCartAnimation=Do);typeof window<"u"&&(window.renderProductCoverHtml=yo,window.getProductTheme=ho,window.getMonogram=sa,window.getProductCoverSvgDataUri=vo);const Gt={deviceType:"rawbt",deviceName:"Driver RawBT (Printer Thermal Android - Free)",deviceId:"",paperSize:"58mm",directPrint:!1,feedLines:3,autoCut:!0,openCashDrawer:!1,autoPrintOrder:!1,headerText:"",storeAddress:"",storePhone:"",footerText:"Terima kasih atas kunjungan Anda!",footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa struk resmi.",showLogo:!0,showAddress:!0,showPhone:!0,showNpwp:!0,showPoints:!0,showBarcode:!0,networkIp:"192.168.1.200:9100"},ce=e=>{switch(e){case"58mm-compact":case"58mm_30":return 30;case"80mm-compact":case"80mm_42":return 42;case"80mm":return 48;case"58mm":default:return 32}},_=()=>{try{const e=localStorage.getItem("freshmart_printer_config");if(e)return{...Gt,...JSON.parse(e)}}catch(e){console.warn("Gagal membaca konfigurasi printer lokal:",e)}return{...Gt}},ze=e=>{try{const a={..._(),...e};return localStorage.setItem("freshmart_printer_config",JSON.stringify(a)),a}catch(t){return console.error("Gagal menyimpan konfigurasi printer:",t),_()}},No=()=>{const e=_(),t=(n,r)=>{const l=g(n);l&&(l.checked=!!r)},a=(n,r)=>{const l=g(n);l&&(l.value=r||"")};a("printer-device-name-display",e.deviceName),a("printer-paper-size",e.paperSize),a("printer-network-ip",e.networkIp),a("printer-header-custom",e.headerText),a("printer-address-custom",e.storeAddress),a("printer-phone-custom",e.storePhone),a("printer-footer-custom",e.footerText),a("printer-policy-custom",e.footerPolicyNote),t("printer-opt-address",e.showAddress!==!1),t("printer-opt-phone",e.showPhone!==!1),t("printer-opt-npwp",e.showNpwp!==!1),t("printer-opt-points",e.showPoints),t("printer-opt-barcode",e.showBarcode),t("printer-opt-direct",e.directPrint===!0),t("printer-opt-autocut",e.autoCut!==!1),t("printer-opt-drawer",e.openCashDrawer),t("printer-opt-autoprint",e.autoPrintOrder),pa(e.deviceType||"rawbt");const o=g("printer-settings-modal"),s=g("printer-settings-modal-box");o&&o.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("printerSettings"),at(o,s)},ca=(e=!1)=>{const t=g("printer-settings-modal"),a=g("printer-settings-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("printerSettings",e,()=>{Se(t,a)}):Se(t,a))},pa=e=>{window._selectedPrinterType=e,document.querySelectorAll(".printer-type-card").forEach(o=>{if(o.getAttribute("data-type")===e){o.classList.add("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),o.classList.remove("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const n=o.querySelector(".printer-check-badge");n&&n.classList.remove("hidden")}else{o.classList.remove("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),o.classList.add("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const n=o.querySelector(".printer-check-badge");n&&n.classList.add("hidden")}});const t=g("rawbt-quick-guide-box");t&&(e==="rawbt"?t.classList.remove("hidden"):t.classList.add("hidden"));const a=g("printer-network-box");a&&(e==="network"?a.classList.remove("hidden"):a.classList.add("hidden"))},Io=()=>{const e=(n,r="")=>{const l=g(n);return l?l.value:r},t=(n,r=!1)=>{const l=g(n);return l?l.checked:r},a=window._selectedPrinterType||"rawbt",s={deviceType:a,deviceName:e("printer-device-name-display",a==="rawbt"?"Driver RawBT (Printer Thermal Android - Free)":a==="bluetooth"?"Bluetooth POS Printer":"Printer Thermal POS"),paperSize:e("printer-paper-size","58mm"),networkIp:e("printer-network-ip","192.168.1.200:9100"),headerText:e("printer-header-custom",""),storeAddress:e("printer-address-custom",""),storePhone:e("printer-phone-custom",""),footerText:e("printer-footer-custom","Terima kasih atas kunjungan Anda!"),footerPolicyNote:e("printer-policy-custom","Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa struk resmi."),showAddress:t("printer-opt-address",!0),showPhone:t("printer-opt-phone",!0),showNpwp:t("printer-opt-npwp",!0),showPoints:t("printer-opt-points",!0),showBarcode:t("printer-opt-barcode",!0),directPrint:t("printer-opt-direct",!1),autoCut:t("printer-opt-autocut",!0),openCashDrawer:t("printer-opt-drawer",!1),autoPrintOrder:t("printer-opt-autoprint",!1)};ze(s),ne("Pengaturan printer berhasil disimpan! ✅"),ca()},Oo=async()=>{if(!navigator.bluetooth){ne("Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.");return}try{ne("Mencari printer bluetooth di sekitar...");const e=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["000018f0-0000-1000-8000-00805f9b34fb","e7810a71-73ae-499d-8c15-faa9aef0c3f2","00001101-0000-1000-8000-00805f9b34fb"]});if(e){ze({deviceType:"bluetooth",deviceName:e.name||"Bluetooth POS Printer",deviceId:e.id});const t=g("printer-device-name-display");t&&(t.value=e.name||"Bluetooth POS Printer"),ne(`Printer "${e.name||"Bluetooth POS"}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&ne("Koneksi bluetooth dibatalkan atau tidak tersedia.")}},Ro=async()=>{if(!navigator.usb){ne("Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.");return}try{ne("Mencari printer USB...");const e=await navigator.usb.requestDevice({filters:[]});if(e){const t=(e.productName||"USB Thermal Printer")+" (USB)";ze({deviceType:"usb",deviceName:t,deviceId:String(e.vendorId)+":"+String(e.productId)});const a=g("printer-device-name-display");a&&(a.value=t),ne(`Printer USB "${t}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&ne("Koneksi USB dibatalkan atau tidak ditemukan.")}},Eo=()=>{if(typeof window.executeRawBTTestPrint=="function"){window.executeRawBTTestPrint();return}const e=_(),t=e.paperSize==="80mm",a=t?48:32,o=e.headerText||f.store?.name||"TOKO PUTRI",s=e.showAddress!==!1&&(e.storeAddress||f.store?.address)||"",n=e.showPhone!==!1&&(e.storePhone||f.store?.wa)||"",r=e.footerPolicyNote||"",l=t?"68mm":"44mm",d=(b,u,m=a)=>{const c=m-b.length-u.length;return b+(c>0?" ".repeat(c):" ")+u},p=new Date().toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let x=`
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${i(o)}</div>
    ${s?`<div style="text-align:center;font-size:10px;color:#475569;margin-bottom:2px;">${i(s)}</div>`:""}
    ${n?`<div style="text-align:center;font-size:11px;margin-bottom:4px;">Telp/WA: ${i(n)}</div>`:""}
    <div style="text-align:center;font-weight:bold;font-size:12px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:3px 0;margin:6px 0;">
        *** UJI COBA CETAK STRUK ***
    </div>
    <div style="white-space:pre;font-size:11px;">Tgl   : ${p}</div>
    <div style="white-space:pre;font-size:11px;">Format: Thermal ${t?"80mm (48 Kolom)":"58mm (32 Kolom)"}</div>
    <div style="white-space:pre;font-size:11px;">Koneksi: ${e.deviceType.toUpperCase()}</div>
    <div style="white-space:pre;font-size:11px;">Status : KONEKSI BERHASIL</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:11px;font-weight:bold;">${d("TES ITEM UJI COBA","HARGA",a)}</div>
    <div style="white-space:pre;font-size:10px;">${d("1x Produk Percobaan","Rp 25.000",a)}</div>
    <div style="white-space:pre;font-size:10px;">${d("2x Kertas Thermal Kasir","Rp 15.000",a)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:12px;font-weight:bold;">${d("TOTAL UJI","Rp 40.000",a)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    `;e.showPoints&&(x+=`<div style="white-space:pre;font-size:11px;">${d("Simulasi Poin Member","+10 Poin",a)}</div>`,x+='<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>'),e.showBarcode&&(x+=`<div style="text-align:center;margin:6px 0;">
            <div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*TEST-POS-${Date.now().toString().slice(-6)}*</div>
            <div style="font-size:9px;color:#333;">(BARCODE TEST OK)</div>
        </div><div style="border-bottom:1px dashed #000;margin:6px 0;"></div>`),x+=`
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
    `;let w=g("thermal-print-section");if(w||(w=document.createElement("div"),w.id="thermal-print-section",document.body.appendChild(w)),w.innerHTML=`<div style="width:${l};max-width:${l};font-family:'Courier New',Courier,monospace;font-size:${t?"10.5px":"8.8px"};line-height:1.2;color:#000;background:#fff;padding:0 ${t?"2.5mm":"1.5mm"} 4mm ${t?"1mm":"0.5mm"};box-sizing:border-box;">${x}</div>`,typeof window.sendToRawBT=="function"){const b=w.innerText,u=btoa(unescape(encodeURIComponent(b)));window.sendToRawBT(u,b,x)}else window.print();ne("Perintah uji cetak berhasil dikirim! 🖨️")};window.getPrinterConfig=_;window.getPaperCols=ce;window.savePrinterConfig=ze;window.openPrinterSettingsModal=No;window.closePrinterSettingsModal=ca;window.selectPrinterDeviceTypeUI=pa;window.savePrinterSettingsFromModal=Io;window.scanBluetoothPrinter=Oo;window.scanUsbPrinter=Ro;window.executeTestPrint=Eo;let Vt={},q="view-catalog",de=!1,xe=null,ve=["view-catalog"];const ot=e=>{typeof history<"u"&&typeof window<"u"&&history.pushState({modal:e},"",window.location.href),ge.push(e)},st=(e,t,a)=>{const o=ge.lastIndexOf(e);if(o>-1&&ge.splice(o,1),!t){de=!0,xe&&clearTimeout(xe),xe=setTimeout(()=>{de=!1},300);try{typeof history<"u"&&history.back()}catch{de=!1}}typeof a=="function"&&a()},Y=(e,t=!1)=>{if(!e||e===q)return;if(!t)typeof history<"u"&&typeof window<"u"&&history.pushState({view:e},"",window.location.href),e==="view-catalog"?ve=["view-catalog"]:ve.push(e);else{const s=ve.lastIndexOf(e);s>-1?ve=ve.slice(0,s+1):ve=["view-catalog",e]}const a=g(q);if(a){const s=a.querySelector(".scroll-content");s&&(Vt[q]=s.scrollTop)}if(q==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime(),q==="view-pos-cashier"&&e!=="view-pos-cashier"&&(typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()),q==="view-admin"&&e!=="view-admin"){const s=g("view-admin");s&&s.classList.remove("admin-pos-mode"),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()}const o=g(e);if(o&&(o.classList.remove("hidden"),o.classList.add("flex")),document.querySelectorAll(".view-section").forEach(s=>{s!==o&&(s.classList.add("hidden"),s.classList.remove("flex"))}),typeof window.hideFloatingScrollTop=="function")window.hideFloatingScrollTop();else{const s=document.getElementById("native-scroll-top-btn");s&&(s.classList.add("opacity-0","translate-y-3"),s.classList.add("hidden"))}if(o){e==="view-cart"&&typeof window.renderCart=="function"?window.renderCart():e==="view-checkout"&&typeof window.rChck=="function"?window.rChck():e==="view-payment"&&typeof window.rPay=="function"?window.rPay():e==="view-wishlist"&&typeof window.renderWish=="function"?window.renderWish():e==="view-orders"&&typeof window.renderMyOrders=="function"?window.renderMyOrders():e==="view-faq"&&typeof window.renderStorefrontFAQ=="function"?window.renderStorefrontFAQ():e==="view-pos-cashier"?Xt(()=>import("./module-pos-BA7WV-ab.js").then(n=>n.h),__vite__mapDeps([2,1])).then(n=>{typeof n.renderPOSStorefront=="function"&&n.renderPOSStorefront()}).catch(n=>console.error("[POS] Gagal memuat storefront:",n)):e==="view-admin"&&typeof window.renderSubscriptionNoticeInCMS=="function"&&window.renderSubscriptionNoticeInCMS();const s=o.querySelector(".scroll-content");if(s)if(t){const n=Vt[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{s.scrollTop=n}))}else s.scrollTo(0,0)}q=e,ma(e)},ma=(e=q)=>{const t=g("bottom-nav-bar");if(!t)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin","view-pos-cashier"].includes(e)){t.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.remove("translate-y-0","opacity-100");return}if(t.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(o=>o.classList.remove("active")),e==="view-catalog"){const o=g("bnav-home");o&&o.classList.add("active")}else if(e==="view-orders"){const o=g("bnav-orders");o&&o.classList.add("active")}else if(e==="view-wishlist"||e==="view-faq"){const o=g("bnav-menu");o&&o.classList.add("active")}},Bo=e=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(e==="home"?"medium":"light"),e==="home")if(q==="view-catalog"){const t=document.querySelector("#view-catalog .scroll-content");t?t.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else Y("view-catalog");else e==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():e==="cart"?Y("view-cart"):e==="orders"?Y("view-orders"):e==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},ua=()=>{const e=document.querySelector("#view-catalog .scroll-content"),t=g("pull-to-refresh-indicator"),a=g("ptr-icon"),o=g("ptr-text");if(!e||!t)return;let s=0,n=0,r=!1,l=!1;const d=65;e.addEventListener("touchstart",p=>{e.scrollTop<=5&&!l&&(s=p.touches[0].pageY,r=!0)},{passive:!0}),e.addEventListener("touchmove",p=>{if(!r||l)return;n=p.touches[0].pageY;const x=n-s;if(x>15&&e.scrollTop<=5){t.classList.add("visible");const w=Math.min(x/d,1.5);a&&(a.style.transform=`rotate(${w*240}deg)`),o&&(o.innerText=x>=d?"Lepaskan untuk segarkan":"Tarik ke bawah untuk refresh")}else t.classList.remove("visible")},{passive:!0}),e.addEventListener("touchend",async()=>{if(!r||l)return;if(r=!1,n-s>=d&&e.scrollTop<=5){l=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),a&&(a.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",a.style.transform=""),o&&(o.innerText="Menyinkronkan katalog...");try{typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),o&&(o.innerText="Katalog Terkini Disinkron!"),a&&(a.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch{o&&(o.innerText="Gagal sinkron data")}setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>{l=!1,a&&(a.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",a.style.transform=""),o&&(o.innerText="Tarik ke bawah untuk refresh")},300)},600)}else t.classList.remove("visible"),a&&(a.style.transform="")})},fa={product:["product-modal"],category:["category-modal"],brand:["brand-modal"],admin:["admin-modal"],adminOrder:["admin-order-modal"],receipt:["receipt-preview-modal"],docPreview:["doc-preview-modal"],scanner:["scanner-modal"],confirm:["custom-confirm-modal"],customerOrder:["order-detail-modal","customer-order-detail-modal"],restock:["restock-modal"],quickprice:["quickprice-modal"],member:["member-modal"],prompt:["custom-prompt-container","custom-prompt-modal"],review:["review-modal"],quickmenu:["quickmenu-modal"],variantPreview:["variant-preview-modal"],terms:["terms-modal"],privacy:["privacy-modal"],askQuestion:["modal-ask-question","ask-question-modal"],quickVariant:["quick-variant-modal"],adminFAQ:["modal-admin-faq","admin-faq-modal"],printerSettings:["printer-settings-modal"],exitConfirm:["exit-confirm-modal"],appDownload:["app-download-modal"],voucher:["voucher-modal"],guide:["shopping-guide-modal"],changelog:["changelog-modal"],guarantee:["guarantee-modal","quality-guarantee-modal"],security:["security-modal"],posVariantSheet:["pos-variant-sheet"],posLogin:["pos-login-modal"],posCartDrawer:["pos-mobile-cart-drawer","pos-cart-drawer"],posPayment:["pos-pay-modal","pos-payment-modal"],posOpenShift:["pos-open-shift-modal","modal-pos-open-shift"],posCloseShift:["pos-close-shift-modal","modal-pos-close-shift"],posShiftSummary:["pos-shift-summary-modal","modal-pos-shift-summary"],clientTempoPay:["modal-client-tempo-pay"],clientPaySuccess:["modal-client-pay-success"],tempoConfirmations:["modal-tempo-confirmations"],thermalPreview:["utp-thermal-modal"],htmlPreview:["utp-html-modal"],addStaff:["add-staff-modal","modal-add-staff"],permissions:["permissions-modal","modal-permissions"],editStaff:["edit-staff-modal","modal-edit-staff"],soFinalize:["modal-so-finalize","so-finalize-modal"],soHistory:["modal-so-history-detail","modal-so-history","so-history-modal"],preRestore:["modal-pre-restore-inspector"],heroBanner:["admin-hero-banner-modal","hero-banner-modal"],renewal:["renewal-input-modal"],purchaseForm:["modal-po-form","po-form-modal"],purchasePicker:["modal-po-product-picker","po-product-picker-modal"],purchaseDetail:["modal-po-detail","po-detail-modal"],purchasePayment:["modal-po-payment","po-payment-modal"],supplierForm:["modal-supplier-form","supplier-form-modal"],supplierDetail:["modal-supplier-detail","supplier-detail-modal"],posHoldPrompt:["pos-hold-prompt-modal","pos-hold-prompt"],posHeldModal:["pos-held-list-modal","pos-held-modal"],posCameraScanner:["pos-camera-scanner-modal","pos-camera-scanner"],posReceiptFallback:["pos-receipt-fallback-modal"],posShiftReceipt:["pos-shift-receipt-modal"],posLogoutShift:["pos-logout-shift-modal"],colorFloat:["color-float-modal"],tempoDetail:["modal-tempo-detail","tempo-detail-modal"],tempoPayment:["modal-tempo-payment","tempo-payment-modal"],tempoPenalty:["modal-tempo-penalty","tempo-penalty-modal"],expenseForm:["modal-expense-form","expense-modal"],expenseReceipt:["modal-expense-receipt-preview"]},gt=e=>{const t=fa[e];if(!t)return!1;const a=Array.isArray(t)?t:[t];for(const o of a){const s=document.getElementById(o);if(s&&!(s.classList.contains("hidden")||s.classList.contains("pointer-events-none"))&&!(s.style.display==="none"||s.style.visibility==="hidden")){try{const n=window.getComputedStyle(s);if(n.display==="none"||n.visibility==="hidden")continue}catch{}return!0}}return!1},xt=e=>{switch(e){case"product":if(typeof window.closeProductModal=="function")return window.closeProductModal(!0),!0;break;case"category":if(typeof window.closeCategoryModal=="function")return window.closeCategoryModal(!0),!0;break;case"brand":if(typeof window.closeBrandModal=="function")return window.closeBrandModal(!0),!0;break;case"admin":if(typeof window.closeAdminModal=="function")return window.closeAdminModal(!0),!0;break;case"adminOrder":if(typeof window.closeOrderDetailModal=="function")return window.closeOrderDetailModal(!0),!0;break;case"receipt":if(typeof window.closeReceiptPreviewModal=="function")return window.closeReceiptPreviewModal(!0),!0;break;case"docPreview":if(typeof window.closeDocPreviewModal=="function")return window.closeDocPreviewModal(!0),!0;break;case"scanner":if(typeof window.closeCameraScanner=="function")return window.closeCameraScanner(!0),!0;break;case"confirm":if(typeof window.closeConfirm=="function")return window.closeConfirm(!0),!0;break;case"customerOrder":if(typeof window.closeCustomerOrderDetailModal=="function")return window.closeCustomerOrderDetailModal(!0),!0;break;case"restock":if(typeof window.closeRestockModal=="function")return window.closeRestockModal(!0),!0;break;case"quickprice":if(typeof window.closeQuickPriceModal=="function")return window.closeQuickPriceModal(!0),!0;break;case"member":if(typeof window.closeMemberModal=="function")return window.closeMemberModal(!0),!0;break;case"prompt":if(typeof window.closePrompt=="function")return window.closePrompt(!0),!0;break;case"review":if(typeof window.closeReviewModal=="function")return window.closeReviewModal(!0),!0;break;case"quickmenu":if(typeof window.closeQuickMenuModal=="function")return window.closeQuickMenuModal(!0),!0;break;case"variantPreview":if(typeof window.closeVariantPreviewModal=="function")return window.closeVariantPreviewModal(!0),!0;break;case"terms":if(typeof window.closeTermsModal=="function")return window.closeTermsModal(!0),!0;break;case"privacy":if(typeof window.closePrivacyModal=="function")return window.closePrivacyModal(!0),!0;break;case"askQuestion":if(typeof window.closeAskQuestionModal=="function")return window.closeAskQuestionModal(!0),!0;break;case"quickVariant":if(typeof window.closeQuickVariantSheet=="function")return window.closeQuickVariantSheet(!0),!0;break;case"adminFAQ":if(typeof window.closeAdminFAQModal=="function")return window.closeAdminFAQModal(!0),!0;break;case"printerSettings":if(typeof window.closePrinterSettingsModal=="function")return window.closePrinterSettingsModal(!0),!0;break;case"exitConfirm":if(typeof window.closeExitConfirmModal=="function")return window.closeExitConfirmModal(!0),!0;break;case"appDownload":if(typeof window.closeAppDownloadModal=="function")return window.closeAppDownloadModal(!0),!0;break;case"voucher":if(typeof window.closeVoucherModal=="function")return window.closeVoucherModal(!0),!0;break;case"guide":if(typeof window.closeShoppingGuideModal=="function")return window.closeShoppingGuideModal(!0),!0;break;case"changelog":if(typeof window.closeChangelogModal=="function")return window.closeChangelogModal(!0),!0;break;case"guarantee":if(typeof window.closeQualityGuaranteeModal=="function")return window.closeQualityGuaranteeModal(!0),!0;break;case"security":if(typeof window.closeSecurityModal=="function")return window.closeSecurityModal(!0),!0;break;case"posVariantSheet":if(typeof window.closePOSVariantSheet=="function")return window.closePOSVariantSheet(!0),!0;break;case"posLogin":if(typeof window.closePOSLoginModal=="function")return window.closePOSLoginModal(!0),!0;break;case"posCartDrawer":if(typeof window.closePOSCartDrawer=="function")return window.closePOSCartDrawer(!0),!0;break;case"posPayment":if(typeof window.closePayModal=="function")return window.closePayModal(!0),!0;break;case"posOpenShift":if(typeof window.closePOSOpenShiftModal=="function")return window.closePOSOpenShiftModal(!0),!0;break;case"posCloseShift":if(typeof window.closePOSCloseShiftModal=="function")return window.closePOSCloseShiftModal(!0),!0;break;case"posShiftSummary":if(typeof window.closePOSShiftSummaryModal=="function")return window.closePOSShiftSummaryModal(!0),!0;break;case"clientTempoPay":if(typeof window.closeClientTempoPayModal=="function")return window.closeClientTempoPayModal(!0),!0;break;case"clientPaySuccess":if(typeof window.closeClientPaymentSuccessModal=="function")return window.closeClientPaymentSuccessModal(!0),!0;break;case"tempoConfirmations":if(typeof window.closeTempoConfirmationsModal=="function")return window.closeTempoConfirmationsModal(!0),!0;break;case"thermalPreview":return typeof window.closeThermalPrintPreview=="function"?(window.closeThermalPrintPreview(!0),!0):typeof window.closeThermalPreviewModal=="function"?(window.closeThermalPreviewModal(!0),!0):(document.getElementById("utp-thermal-modal")?.remove(),!0);case"htmlPreview":return typeof window.closeHtmlPrintPreview=="function"?(window.closeHtmlPrintPreview(!0),!0):typeof window.closeHtmlPreviewModal=="function"?(window.closeHtmlPreviewModal(!0),!0):(document.getElementById("utp-html-modal")?.remove(),!0);case"posReceiptFallback":return typeof window.closePOSReceiptFallbackModal=="function"?(window.closePOSReceiptFallbackModal(!0),!0):(document.getElementById("pos-receipt-fallback-modal")?.remove(),!0);case"posShiftReceipt":return typeof window.closePOSShiftReceiptModal=="function"?(window.closePOSShiftReceiptModal(!0),!0):(document.getElementById("pos-shift-receipt-modal")?.remove(),!0);case"addStaff":if(typeof window.closeAddStaffModal=="function")return window.closeAddStaffModal(!0),!0;break;case"permissions":if(typeof window.closePermissionsModal=="function")return window.closePermissionsModal(!0),!0;break;case"editStaff":if(typeof window.closeEditStaffModal=="function")return window.closeEditStaffModal(!0),!0;break;case"soFinalize":if(typeof window.closeSOFinalizeModal=="function")return window.closeSOFinalizeModal(!0),!0;break;case"soHistory":if(typeof window.closeSOHistoryModal=="function")return window.closeSOHistoryModal(!0),!0;break;case"preRestore":if(typeof window.closePreRestoreModal=="function")return window.closePreRestoreModal(!0),!0;break;case"heroBanner":if(typeof window.closeHeroBannerModal=="function")return window.closeHeroBannerModal(!0),!0;break;case"renewal":if(typeof window.closeRenewalModal=="function")return window.closeRenewalModal(!0),!0;break;case"purchaseForm":if(typeof window.closeCreatePOModal=="function")return window.closeCreatePOModal(!0),!0;break;case"purchasePicker":if(typeof window.closePOProductPicker=="function")return window.closePOProductPicker(!0),!0;break;case"purchaseDetail":if(typeof window.closePurchaseDetailModal=="function")return window.closePurchaseDetailModal(!0),!0;break;case"purchasePayment":if(typeof window.closePurchasePaymentModal=="function")return window.closePurchasePaymentModal(!0),!0;break;case"supplierForm":if(typeof window.closeSupplierFormModal=="function")return window.closeSupplierFormModal(!0),!0;break;case"supplierDetail":if(typeof window.closeSupplierDetailModal=="function")return window.closeSupplierDetailModal(!0),!0;break;case"posHoldPrompt":if(typeof window.closePOSHoldPrompt=="function")return window.closePOSHoldPrompt(!0),!0;break;case"posHeldModal":if(typeof window.closePOSHeldModal=="function")return window.closePOSHeldModal(!0),!0;break;case"posCameraScanner":if(typeof window.closePOSCameraScanner=="function")return window.closePOSCameraScanner(!0),!0;break;case"tempoDetail":if(typeof window.closeTempoDetailModal=="function")return window.closeTempoDetailModal(!0),!0;break;case"tempoPayment":if(typeof window.closeTempoPaymentModal=="function")return window.closeTempoPaymentModal(!0),!0;break;case"tempoPenalty":if(typeof window.closeTempoPenaltyModal=="function")return window.closeTempoPenaltyModal(!0),!0;break;case"expenseForm":if(typeof window.closeExpenseModal=="function")return window.closeExpenseModal(!0),!0;break;case"expenseReceipt":if(typeof window.closeExpenseReceiptPreview=="function")return window.closeExpenseReceiptPreview(!0),!0;break;case"colorFloat":return typeof window._closeColorFloatModal=="function"?(window._closeColorFloatModal(!0),!0):(document.getElementById("color-float-modal")?.remove(),!0);case"posLogoutShift":return document.getElementById("pos-logout-shift-modal")?.remove(),!0}const t=fa[e]||[],a=Array.isArray(t)?t:[t];for(const o of a){const s=document.getElementById(o);if(s){if(["utp-thermal-modal","utp-html-modal","pos-receipt-fallback-modal","pos-shift-receipt-modal","pos-hold-prompt-modal","pos-held-list-modal","pos-camera-scanner-modal","color-float-modal","pos-logout-shift-modal","custom-prompt-container"].includes(o))return s.remove(),!0;if(!s.classList.contains("hidden"))return s.classList.add("hidden"),s.style.display="none",!0}}return!1},Ct=(e=!1)=>{const t=()=>{if(!e&&typeof history<"u"&&history.state&&history.state.modal){de=!0,xe&&clearTimeout(xe),xe=setTimeout(()=>{de=!1},300);try{history.back()}catch{de=!1}}},a=[{id:"utp-thermal-modal",close:()=>{typeof window.closeThermalPrintPreview=="function"?window.closeThermalPrintPreview(!0):typeof window.closeThermalPreviewModal=="function"?window.closeThermalPreviewModal(!0):document.getElementById("utp-thermal-modal")?.remove()}},{id:"utp-html-modal",close:()=>{typeof window.closeHtmlPrintPreview=="function"?window.closeHtmlPrintPreview(!0):typeof window.closeHtmlPreviewModal=="function"?window.closeHtmlPreviewModal(!0):document.getElementById("utp-html-modal")?.remove()}},{id:"pos-receipt-fallback-modal",close:()=>{typeof window.closePOSReceiptFallbackModal=="function"?window.closePOSReceiptFallbackModal(!0):document.getElementById("pos-receipt-fallback-modal")?.remove()}},{id:"pos-shift-receipt-modal",close:()=>{typeof window.closePOSShiftReceiptModal=="function"?window.closePOSShiftReceiptModal(!0):document.getElementById("pos-shift-receipt-modal")?.remove()}},{id:"receipt-preview-modal",isOpen:n=>!n.classList.contains("hidden"),close:()=>{typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):document.getElementById("receipt-preview-modal")?.classList.add("hidden")}},{id:"doc-preview-modal",isOpen:n=>!n.classList.contains("hidden"),close:()=>{typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):document.getElementById("doc-preview-modal")?.classList.add("hidden")}},{id:"modal-expense-receipt-preview",isOpen:n=>!n.classList.contains("hidden"),close:()=>{typeof window.closeExpenseReceiptPreview=="function"?window.closeExpenseReceiptPreview(!0):document.getElementById("modal-expense-receipt-preview")?.classList.add("hidden")}}];for(const n of a){const r=document.getElementById(n.id);if(r&&(!n.isOpen||n.isOpen(r))){const l={"utp-thermal-modal":"thermalPreview","utp-html-modal":"htmlPreview","pos-receipt-fallback-modal":"posReceiptFallback","pos-shift-receipt-modal":"posShiftReceipt","receipt-preview-modal":"receipt","doc-preview-modal":"docPreview","modal-expense-receipt-preview":"expenseReceipt"}[n.id];if(l){const d=ge.lastIndexOf(l);d>-1&&ge.splice(d,1)}return n.close(),t(),!0}}const o=["pos-success-modal","pos-recall-confirm-modal","pos-delete-confirm-modal","pos-closed-success-modal","pos-logout-shift-modal"];for(const n of o){const r=document.getElementById(n);if(r)return r.remove(),t(),!0}for(;ge.length>0;){const n=ge.pop();if(gt(n))return xt(n),t(),!0}const s=["colorFloat","posLogoutShift","posReceiptFallback","posShiftReceipt","clientPaySuccess","clientTempoPay","tempoConfirmations","posVariantSheet","posLogin","posCartDrawer","posPayment","posOpenShift","posCloseShift","posShiftSummary","thermalPreview","htmlPreview","addStaff","permissions","editStaff","soFinalize","soHistory","preRestore","heroBanner","renewal","purchasePayment","purchaseDetail","purchasePicker","purchaseForm","supplierDetail","supplierForm","posHoldPrompt","posHeldModal","posCameraScanner","tempoPenalty","tempoPayment","tempoDetail","expenseReceipt","expenseForm","customerOrder","restock","quickprice","member","review","voucher","changelog","appDownload","guarantee","security","quickVariant","variantPreview","confirm","prompt","printerSettings","docPreview","receipt","adminFAQ","adminOrder","admin","brand","category","quickmenu","guide","terms","privacy","scanner","askQuestion","product"];for(const n of s)if(gt(n))return xt(n),t(),!0;return!1},wa=()=>{const e=g("exit-confirm-modal");e&&(e.classList.contains("hidden")&&ot("exitConfirm"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=g("exit-confirm-modal-box");t&&t.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Lt=(e=!1)=>{st("exitConfirm",e,()=>{const t=g("exit-confirm-modal"),a=g("exit-confirm-modal-box");t&&t.classList.add("opacity-0"),a&&a.classList.add("scale-95"),setTimeout(()=>{t&&t.classList.add("hidden")},250)})},Ho=()=>{Lt(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri! 🙏"),setTimeout(()=>{try{window.close()}catch{}},400))},Fo=()=>{if(Ct(!1))return;if(q==="view-admin"){const t=g("admin-content-view"),a=g("admin-dashboard-view");if(!!(t&&!t.classList.contains("hidden")||a&&a.classList.contains("hidden")||window.history.state&&window.history.state.tab||typeof window.cTab<"u"&&window.cTab)){if(window.history.state&&window.history.state.tab&&window.history.length>1)try{window.history.back();return}catch{}typeof window.openAdminMenu=="function"&&window.openAdminMenu();try{window.history.replaceState({view:"view-admin"},"",window.location.href)}catch{}return}if(typeof window.showConfirm=="function"){const s=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),n=s?"Keluar Panel Owner":"Keluar CMS Toko",r=s?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(n,r,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}return}if(q==="view-pos-cashier"){typeof window.showConfirm=="function"?window.showConfirm("Keluar Mode Kasir","Yakin keluar dari mode POS kasir?",()=>{typeof window.exitPOSMode=="function"?window.exitPOSMode():Y("view-catalog")},"Ya, Keluar",!0):Y("view-catalog");return}if(q!=="view-catalog"){if(q==="view-payment"){window.history.length>1?window.history.back():Y("view-checkout",!0);return}if(q==="view-checkout"){window.history.length>1?window.history.back():Y("view-cart",!0);return}if(q==="view-cart"){window.history.length>1?window.history.back():Y("view-catalog",!0);return}window.history.length>1?window.history.back():Y("view-catalog",!0);return}const e=g("exit-confirm-modal");e&&!e.classList.contains("hidden")?Lt():wa()},Uo=()=>{ua();try{(!history.state||!history.state.view)&&history.replaceState({view:"view-catalog"},"",window.location.href)}catch{}window.addEventListener("popstate",e=>{if(de){de=!1,xe&&clearTimeout(xe);return}if(Ct(!0))return;const t=e.state||{},a=t.view||null;if(window.isAdm||window.__localIsAdm)if(a==="view-admin")Y("view-admin",!0),t.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(t.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu();else{const s=g("admin-content-view");if(s&&!s.classList.contains("hidden")){history.pushState({view:"view-admin"},"",window.location.href),Y("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}if(history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"){const n=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=n?"Keluar Panel Owner":"Keluar CMS Toko",l=n?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,l,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}}else if(a){let s=a;a==="view-admin"&&(s="view-admin-login"),Y(s,!0)}else Y("view-catalog",!0)})};if(typeof window<"u"){window.pushModalHistory=ot,window.requestCloseModal=st,window.changeView=Y,window.setupHistoryRouter=Uo,window.onBottomNavClick=Bo,window.updateBottomNav=ma,window.initPullToRefresh=ua,window.handleAppBackButton=Fo,window.closeTopmostOpenModal=Ct,window.isModalOpenInDOM=gt,window.closeModalByName=xt,window.openExitConfirmModal=wa,window.closeExitConfirmModal=Lt,window.confirmExitApp=Ho,window.isProgrammaticModalClose=de,window.viewHistoryStack=ve;try{Object.defineProperty(window,"curViewName",{get:()=>q,set:e=>{q=e},configurable:!0})}catch{}}let ht=null,Ce=null;const Ko=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}Q("Kode "+e+" berhasil disalin!")}catch{Q("Gagal menyalin. Kode: "+e)}},Q=(e,t,a,o)=>{const s=g("toast");if(!s)return;if(!t){const c=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(c)?t="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(c)?t="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(c)?t="warning":/upload|proses|memuat|loading|sedang/.test(c)?t="loading":t="info"}typeof window.triggerHaptic=="function"&&window.triggerHaptic(t==="error"?"error":t==="warning"?"warning":t==="success"?"success":"light");const n=getComputedStyle(document.documentElement),r=n.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",l=n.getPropertyValue("--color-primary").trim()||"#10b981";n.getPropertyValue("--color-primary-dark").trim();const d={success:{icon:"fa-circle-check",label:"Berhasil",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`}},p=d[t]||d.info,x=g("toast-icon");x&&(x.className="fa-solid "+p.icon);const w=g("toast-title");w&&(w.textContent=a||p.label,w.style.display="block",w.style.color=p.accent);const b=g("toast-icon-wrap");b&&(b.style.background=p.iconBg,b.style.color=p.accent),oe("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let u=g("toast-progress");u||(u=document.createElement("div"),u.id="toast-progress",s.appendChild(u)),u.style.background=p.accent,u.style.transition="none",u.style.width="100%",u.style.opacity="0.85",clearTimeout(ht),s.classList.add("toast-show");const m=o||(t==="loading"?8e3:t==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{u.style.transition=`width ${m}ms linear`,u.style.width="0%"})),ht=setTimeout(()=>{s.classList.remove("toast-show")},m)},jo=e=>Q(e,"loading","Memproses...",8e3),_o=()=>{clearTimeout(ht);const e=g("toast");e&&e.classList.remove("toast-show")},zo=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")};let he=null;const qo=(e,t,a,o="Ya, Hapus",s=!0)=>{let n=e,r=t,l=a,d=o,p=s;typeof t=="function"&&(l=t,r=e,n=typeof o=="string"&&o!=="Ya, Hapus"?o:"Konfirmasi Tindakan",d=typeof a=="string"?a:"Ya, Lanjutkan",p=!0);let x=null;typeof l!="function"?(x=new Promise(m=>{he=m}),Ce=null):(Ce=l,he=null),oe("confirm-title",n);const w=g("confirm-msg");if(w)if(typeof r=="string"){const m=typeof window.DOMPurify<"u"?window.DOMPurify.sanitize(r,{ADD_ATTR:["class","style"]}):r;w.innerHTML=m}else w.textContent=r||"";const b=g("confirm-yes-btn");b&&(b.innerText=d,p?(b.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 active:scale-95 transition-all text-xs sm:text-sm shadow-md shadow-rose-500/30 cursor-pointer",g("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",g("confirm-icon").className="fa-solid fa-triangle-exclamation"):(b.className="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-2xl hover:opacity-90 active:scale-95 transition-all text-xs sm:text-sm shadow-sm cursor-pointer",g("confirm-icon-box").className="w-16 h-16 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-[var(--color-primary)]/20",g("confirm-icon").className="fa-solid fa-copy"));const u=g("custom-confirm-modal");return u&&u.classList.contains("hidden")&&ot("confirm"),na("custom-confirm-modal"),setTimeout(()=>{g("custom-confirm-modal").classList.remove("opacity-0"),g("custom-confirm-box").classList.remove("scale-95")},10),x},yt=(e=!1)=>{if(he){const t=he;he=null,t(!1)}st("confirm",e,()=>{g("custom-confirm-modal").classList.add("opacity-0"),g("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>ra("custom-confirm-modal"),300)})},Go=()=>{if(he){const e=he;he=null,Ce=null,yt(),setTimeout(()=>{e(!0)},150);return}if(Ce){const e=Ce;Ce=null,yt(),setTimeout(()=>{e()},150)}},Vo=(e,t="",a=null)=>{let o=null,s=null;typeof a!="function"&&(s=new Promise(b=>{o=b}));const n=t!=null?String(t):"",r=n.length>50||n.includes(`
`)||/balasan|catatan|alasan|deskripsi|pesan|keterangan/i.test(e),l=n.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),d=r?`<textarea id="prompt-input" rows="3" class="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 custom-scrollbar resize-none leading-relaxed" placeholder="Tuliskan di sini...">${l}</textarea>`:`<input type="text" id="prompt-input" value="${l}" class="w-full px-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-bold focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 text-center" autocomplete="off" />`;let p=document.createElement("div");p.id="custom-prompt-container",p.className="fixed inset-0 z-[10005] bg-slate-900/85 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300",p.onclick=b=>{b.target===p&&window.closePrompt()},p.innerHTML=`
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
    `,document.body.appendChild(p);const x=p.querySelector("div");ot("prompt"),setTimeout(()=>{p.classList.remove("opacity-0"),x.classList.remove("scale-95")},10);const w=p.querySelector("#prompt-input");return w&&(w.focus(),w.select(),w.onkeydown=b=>{b.key==="Enter"&&(!r||b.ctrlKey)?(b.preventDefault(),p.querySelector("#prompt-ok")?.click()):b.key==="Escape"&&(b.preventDefault(),window.closePrompt())}),window.closePrompt=(b=!1)=>{if(!(!p||!p.parentNode)){if(o){const u=o;o=null,u(null)}st("prompt",b,()=>{p.classList.add("opacity-0"),x.classList.add("scale-95"),setTimeout(()=>p.remove(),300),window.closePrompt=null})}},p.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),p.querySelector("#prompt-ok").onclick=()=>{let b=w.value;if(o){const u=o;o=null,window.closePrompt(),u(b)}else window.closePrompt(),typeof a=="function"&&a(b)},s},Wo=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=Ko;window.showToast=Q;window.showToastLoading=jo;window.hideToast=_o;window.toggleTheme=zo;window.showConfirm=qo;window.closeConfirm=yt;window.executeConfirm=Go;window.customPrompt=Vo;window.checkProPrint=Wo;const je="utp-thermal-modal",Xe="utp-html-modal";let X=null,Dt=null,Ue=null,Ke=null;const et=()=>{if(document.getElementById("utp-style"))return;const e=document.createElement("style");e.id="utp-style",e.textContent=`
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
    `,document.head.appendChild(e)},ba=()=>{Ke===null&&(Ke=document.body.style.overflow||"",document.body.style.overflow="hidden")},Nt=()=>{Ke!==null&&!document.getElementById(je)&&!document.getElementById(Xe)&&(document.body.style.overflow=Ke,Ke=null)},ga=(e,t)=>{nt(),Ue=a=>{const o=a.target&&a.target.tagName||"";a.key==="Escape"?(a.preventDefault(),t()):a.key==="Enter"&&!/INPUT|TEXTAREA|SELECT/.test(o)&&(a.preventDefault(),e())},document.addEventListener("keydown",Ue,!0)},nt=()=>{Ue&&document.removeEventListener("keydown",Ue,!0),Ue=null},Jo=e=>{const t=e.deviceType||"rawbt",a=/android/i.test(navigator.userAgent||"");return t==="rawbt"?a||window.AndroidNativeApp?"RawBT Android":"Printer Browser":t==="bluetooth"?"Bluetooth":t==="usb"?"USB OTG":t==="network"?"WiFi / LAN":"Printer Sistem"},Yo=e=>{if(e.html&&/<[a-z][\s\S]*>/i.test(e.html))return`<div class="utp-html-rendered" style="white-space:normal;width:100%;">${e.html}</div>`;let t=Array.isArray(e.previewLines)&&e.previewLines.length?e.previewLines:null;t||(t=String(e.plainText||"").split(`
`).map(o=>({t:o,a:"left",b:!1,s:"normal"})));const a=[...t];for(;a.length>1&&!String(a[a.length-1].t||"").trim();)a.pop();return a.map(o=>{if(o.type==="two-column")return`<div class="utp-row ${o.b?"font-bold":""}"><div class="utp-col-left">${i(o.left)}</div><div class="utp-col-right">${i(o.right)}</div></div>`;if(o.type==="separator")return'<div class="utp-separator"></div>';if(o.type==="double-separator")return'<div class="utp-double-separator"></div>';if(o.isBarcode||o.s==="barcode"||o.type==="barcode")return`
            <div class="utp-barcode-wrap" style="text-align:center;">
                <div class="utp-barcode-bars mx-auto" aria-hidden="true"></div>
                <div class="utp-barcode-code">*${i(o.code||o.t||"")}*</div>
            </div>`;const s=i(String(o.t??""))||"&nbsp;",n=o.a==="center"?"center":o.a==="right"?"right":"left",r=o.b?800:400;return o.s==="title"||o.s==="wide"?`<div class="utp-line utp-title" style="text-align:${n};font-weight:${r}">${s}</div>`:o.s==="tall"||o.s==="total"?`<div class="utp-line utp-tall" style="text-align:${n};font-weight:${r}"><span>${s}</span></div>`:`<div class="utp-line" style="text-align:${n};font-weight:${r}">${s}</div>`}).join("")},xa=()=>{const e=X;if(!e)return;const t=_(),a=ce(t.paperSize),o=a>=40,s=Array.isArray(e.previewLines)?e.previewLines.length:String(e.plainText||"").split(`
`).length,n=typeof e.rebuild=="function"?`
        <div class="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70" role="group" aria-label="Ukuran kertas">
            <button type="button" id="utp-paper-58" onclick="window.setThermalPreviewPaper('58mm')" class="utp-seg-btn ${o?"text-slate-600 dark:text-slate-300":"is-active"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">58mm</button>
            <button type="button" id="utp-paper-80" onclick="window.setThermalPreviewPaper('80mm')" class="utp-seg-btn ${o?"is-active":"text-slate-600 dark:text-slate-300"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">80mm</button>
        </div>`:"",r=`
    <div id="${je}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-thermal-title" onclick="if(event.target===this) window.closeThermalPrintPreview()">
        <div class="utp-sheet bg-white dark:bg-slate-900 w-full ${o?"sm:max-w-[500px]":"sm:max-w-[440px]"} rounded-t-[2rem] sm:rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col max-h-[94dvh] overflow-hidden">
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
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-scroll text-[var(--color-primary)]"></i>${o?"80mm":"58mm"} · ${a} kolom</span>
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-print text-slate-400"></i>${i(Jo(t))}</span>
                    <span class="utp-chip bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-check"></i>${s} baris</span>
                </div>
                ${n}
            </div>

            <div class="utp-canvas flex-1 overflow-auto px-3 py-5 sm:px-5 custom-scrollbar">
                <div class="utp-paper mx-auto" style="width:${a}ch;">
                    ${Yo(e)}
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
    </div>`;document.getElementById(je)?.remove(),document.body.insertAdjacentHTML("beforeend",r),setTimeout(()=>document.getElementById("utp-thermal-confirm")?.focus({preventScroll:!0}),60)},ha=e=>!e||typeof e.dispatch!="function"?!1:(et(),X={...e},xa(),ba(),ga(()=>ya(),()=>rt()),typeof window.pushModalHistory=="function"&&window.pushModalHistory("thermalPreview"),!0),rt=(e=!1)=>{const t=()=>{const a=X;if(document.getElementById(je)?.remove(),X=null,nt(),Nt(),a&&typeof a.onCancel=="function")try{a.onCancel()}catch{}};typeof window.requestCloseModal=="function"?window.requestCloseModal("thermalPreview",e,t):t()},ya=()=>{const e=X;if(e){if(X=null,document.getElementById(je)?.remove(),nt(),Nt(),typeof e.onConfirm=="function")try{e.onConfirm()}catch(t){console.warn("[PrintPreview] onConfirm error:",t)}e.dispatch(e.base64,e.plainText,e.html||"")}},Qo=e=>{if(!(!X||typeof X.rebuild!="function")){ze({paperSize:e});try{const t=X.rebuild();t&&(X.base64=t.base64,X.plainText=t.plainText,X.previewLines=t.previewLines,X.html=t.html||"")}catch(t){console.warn("[PrintPreview] Gagal rebuild payload:",t)}xa(),Q(`Ukuran kertas diubah ke ${e} ✅`)}},Zo=()=>{rt(),typeof window.openPrinterSettingsModal=="function"&&(window.openPrinterSettingsModal(),Q("Atur printer, lalu tekan Cetak lagi untuk melihat preview terbaru."))},Xo=(e={})=>{if(!e.html)return!1;et(),Dt={...e};const t=(e.paper||"a4")==="a4";document.getElementById(Xe)?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="${Xe}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-html-title" onclick="if(event.target===this) window.closeHtmlPrintPreview()">
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
    </div>`);const a=document.getElementById("utp-html-frame");if(a){const o=a.contentWindow.document;o.open(),o.write(e.html),o.close()}return ba(),ga(()=>va(),()=>it()),typeof window.pushModalHistory=="function"&&window.pushModalHistory("htmlPreview"),!0},it=(e=!1)=>{const t=()=>{document.getElementById(Xe)?.remove(),Dt=null,nt(),Nt()};typeof window.requestCloseModal=="function"?window.requestCloseModal("htmlPreview",e,t):t()},va=()=>{const e=document.getElementById("utp-html-frame");if(!(!e||!Dt)){if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){try{const t=e.contentWindow.document,a=Array.from(t.querySelectorAll("style")).map(s=>s.outerHTML).join("");let o=document.getElementById("a4-print-section");o||(o=document.createElement("div"),o.id="a4-print-section",document.body.appendChild(o)),o.innerHTML=a+t.body.innerHTML,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500)}catch(t){console.warn("[PrintPreview] Native print error:",t)}it();return}try{e.contentWindow.focus(),e.contentWindow.print()}catch(t){console.warn("[PrintPreview] iframe print error:",t),Q("Gagal membuka dialog cetak. Coba lagi.","error")}}};typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",et,{once:!0}):et());window.openThermalPrintPreview=ha;window.closeThermalPrintPreview=rt;window.closeThermalPreviewModal=rt;window.confirmThermalPrint=ya;window.setThermalPreviewPaper=Qo;window.openPrinterSettingsFromPreview=Zo;window.openHtmlPrintPreview=Xo;window.closeHtmlPrintPreview=it;window.closeHtmlPreviewModal=it;window.confirmHtmlPrint=va;const $=e=>"Rp "+Math.round(Number(e||0)).toLocaleString("id-ID"),ut=e=>Math.round(Number(e||0)).toLocaleString("id-ID"),es=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(2).replace(/\.?0+$/,"")},R=e=>e?String(e).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"").replace(/[\r\t]/g," ").replace(/[^\x20-\x7E\n]/g," "):"",F=(e,t)=>{if(!e)return[];const a=R(e).replace(/ +/g," ").trim();if(!a)return[];if(a.length<=t)return[a];const o=a.split(" "),s=[];let n="";for(const r of o)if(r)if(r.length>t){n&&(s.push(n),n="");for(let l=0;l<r.length;l+=t){const d=r.substring(l,l+t);d.length===t?s.push(d):n=d}}else(n?n.length+1+r.length:r.length)<=t?n=n?n+" "+r:r:(s.push(n),n=r);return n&&s.push(n),s},le=(e,t=!1)=>{const a=e?new Date(e):new Date,o=String(a.getDate()).padStart(2,"0"),s=String(a.getMonth()+1).padStart(2,"0"),n=t?a.getFullYear():String(a.getFullYear()).slice(-2),r=String(a.getHours()).padStart(2,"0"),l=String(a.getMinutes()).padStart(2,"0");return`${o}/${s}/${n} ${r}:${l}`},ka=(e,t,a,o=!1)=>{const s=R(String(e||"")).trimEnd(),n=R(String(t||"")).trim(),r=a-s.length-n.length;if(r>=0)return[s+" ".repeat(r)+n];if(o){const p=Math.max(0,a-n.length-1),x=s.substring(0,p).trimEnd(),w=Math.max(1,a-x.length-n.length);return[x+" ".repeat(w)+n]}const l=F(s,a),d=l[l.length-1]||"";if(d.length+1+n.length<=a){const p=a-d.length-n.length;return l[l.length-1]=d+" ".repeat(p)+n,l}else{const p=Math.max(0,a-n.length);return[...l," ".repeat(p)+n]}},De=e=>e?i(String(e)).replace(/^ +/gm,t=>"&nbsp;".repeat(t.length)):"";class Ie{constructor(t=32){this.cols=Number(t)||32,this.bytes=[],this.plainLines=[],this.previewLines=[],this.items=[],this._bold=!1,this._size="normal"}init(){return this.bytes.push(27,64),this}align(t="left"){const a=t==="center"?1:t==="right"?2:0;return this.bytes.push(27,97,a),this}bold(t=!0){return this.bytes.push(27,69,t?1:0),this._bold=!!t,this}size(t="normal"){return this._size=t||"normal",t==="title"?this.bytes.push(29,33,17):t==="tall"||t==="total"?this.bytes.push(29,33,1):t==="wide"?this.bytes.push(29,33,16):this.bytes.push(29,33,0),this}text(t){if(!t)return this;const a=R(t);for(let o=0;o<a.length;o++)this.bytes.push(a.charCodeAt(o));return this}line(t="",a="left"){this.align(a),this.text(t),this.bytes.push(10),this.plainLines.push(t);const o=R(t);return this.previewLines.push({t:o,a,b:this._bold,s:this._size}),this.items.push({type:"line",text:o,align:a,bold:this._bold,size:this._size}),this}centered(t=""){return F(t,this.cols).forEach(o=>this.line(o,"center")),this}twoColumn(t="",a="",o=!1,s=!1){o&&this.bold(!0);const n=ka(t,a,this.cols,s);n.forEach(d=>{this.align("left"),this.text(d),this.bytes.push(10),this.plainLines.push(d)});const r=R(String(t||"")),l=R(String(a||""));return this.previewLines.push({type:"two-column",left:r,right:l,t:n[0],a:"left",b:!!o,s:this._size}),this.items.push({type:"two-column",left:r,right:l,bold:!!o,size:this._size}),o&&this.bold(!1),this}itemRow(t){const a=t.variantName?` (${t.variantName}${t.colorCode?" "+t.colorCode:""})`:"",o=(t.name||"Barang")+a+(t.poTime?" [PO]":"");this.bold(!0),F(o,this.cols).forEach(p=>this.line(p,"left")),this.bold(!1);const n=t.effectivePrice||t.price||0,r=t.subtotal!==void 0?t.subtotal:parseFloat(t.qty||1)*n,l=`  ${es(t.qty)} ${t.unit||"pcs"} x ${ut(n)}`,d=ut(r);return this.twoColumn(l,d,!1,!1),t.discount&&t.discount>0&&this.twoColumn("  (Pot. Diskon)",`-${ut(t.discount)}`,!1,!0),t.poTime&&this.line(`  * Estimasi PO: ${t.poTime}`,"left"),this}separator(t="-"){const a=t.repeat(this.cols);return this.align("left"),this.text(a),this.bytes.push(10),this.plainLines.push(a),this.previewLines.push({type:"separator",t:a,a:"left",b:!1,s:"normal"}),this.items.push({type:"separator",char:t}),this}doubleSeparator(){const t="=".repeat(this.cols);return this.align("left"),this.text(t),this.bytes.push(10),this.plainLines.push(t),this.previewLines.push({type:"double-separator",t,a:"left",b:!1,s:"normal"}),this.items.push({type:"double-separator"}),this}feed(t=3){this.bytes.push(27,100,Math.max(1,t));for(let a=0;a<t;a++)this.plainLines.push(""),this.previewLines.push({t:"",a:"left",b:!1,s:"normal"});return this.items.push({type:"feed",lines:t}),this}cut(){return this.bytes.push(29,86,65,3),this}openDrawer(){return this.bytes.push(27,112,0,25,250),this}barcode(t,a="CODE128",o=45){if(!t)return this;const s=R(String(t)).trim();if(!s)return this;if(this.align("center"),this.bytes.push(29,104,Math.max(30,Math.min(100,o))),this.bytes.push(29,119,2),this.bytes.push(29,72,0),a==="CODE39"){this.bytes.push(29,107,4);for(let n=0;n<s.length;n++)this.bytes.push(s.charCodeAt(n));this.bytes.push(0)}else{const n=[];for(let r=0;r<s.length;r++)n.push(s.charCodeAt(r));this.bytes.push(29,107,73,n.length+2,123,66,...n)}return this.plainLines.push(`[BARCODE: ${s}]`),this.previewLines.push({type:"barcode",code:s,t:s,a:"center",b:!1,s:"barcode",isBarcode:!0}),this.items.push({type:"barcode",code:s}),this}toBase64(){const t=new Uint8Array(this.bytes);let a="";const o=t.length,s=8192;for(let n=0;n<o;n+=s){const r=t.subarray(n,n+s);a+=String.fromCharCode.apply(null,r)}return btoa(a)}toPlainText(){return this.plainLines.join(`
`)}toHtml(){let t="";for(const a of this.items)if(a.type==="line"){const o=a.align==="center"?"utp-align-center":a.align==="right"?"utp-align-right":"utp-align-left",s=a.bold?"font-bold":"";let n="";a.size==="title"||a.size==="wide"?n="utp-title":(a.size==="tall"||a.size==="total")&&(n="utp-tall"),!a.text||!a.text.trim()?t+='<div class="utp-empty-line">&nbsp;</div>':t+=`<div class="utp-line ${o} ${s} ${n}">${De(a.text)}</div>`}else if(a.type==="two-column"){const o=a.bold?"font-bold":"";let s="";a.size==="title"||a.size==="wide"?s="utp-title":(a.size==="tall"||a.size==="total")&&(s="utp-tall"),t+=`<div class="utp-row ${o} ${s}"><div class="utp-col-left">${De(a.left)}</div><div class="utp-col-right">${De(a.right)}</div></div>`}else if(a.type==="separator")t+='<div class="utp-separator"></div>';else if(a.type==="double-separator")t+='<div class="utp-double-separator"></div>';else if(a.type==="barcode")t+=`
                <div class="utp-barcode-wrap">
                    <div class="utp-barcode-bars" aria-hidden="true"></div>
                    <div class="utp-barcode-code">*${i(a.code)}*</div>
                </div>`;else if(a.type==="feed"){const o=Math.max(1,a.lines||1)*6;t+=`<div style="height:${o}px;"></div>`}return t}}const Oe=(e,t="",a="",o={})=>{if(!o.skipPreview)return ha({base64:e,plainText:t,html:a,previewLines:o.previewLines,title:o.title,rebuild:o.rebuild,onConfirm:o.onConfirm,onCancel:o.onCancel,dispatch:(s,n,r)=>Wt(s,n,r)});if(typeof o.onConfirm=="function")try{o.onConfirm()}catch{}return Wt(e,t,a)},Wt=(e,t="",a="")=>{const o=/android/i.test(navigator.userAgent||"");if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function")try{return window.AndroidNativeApp.printRawBT(e),Q("Mencetak struk via RawBT... 🖨️"),!0}catch(s){console.warn("[RawBT] AndroidNativeApp error, mencoba intent...",s)}if(o)try{Q("Membuka Printer RawBT... 🖨️");const s=`intent:base64,${e}#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;end;`;return window.location.href=s,setTimeout(()=>{if(!document.hidden)try{window.location.href=`rawbt:base64,${e}`}catch{}},800),!0}catch(s){console.warn("[RawBT] Intent trigger failed:",s)}return Q("Mencetak struk kasir... 🖨️"),It(a||t),!0},It=e=>{const t=_(),o=ce(t.paperSize)>=40,s=o?"80mm":"58mm",n=o?"68mm":"44mm",r=o?"10.5px":"8.8px",l=typeof e=="string"&&e.includes("<")&&e.includes(">");let d=e;l||(d=String(e||"").split(`
`).map(x=>{const w=x.trim();if(!w)return'<div class="utp-empty-line">&nbsp;</div>';if(/^[-]{8,}$/.test(w))return'<div class="utp-separator"></div>';if(/^[=]{8,}$/.test(w))return'<div class="utp-double-separator"></div>';if(/^\[BARCODE:\s*(.+)\]$/i.test(w)){const u=w.replace(/^\[BARCODE:\s*/i,"").replace(/\]$/,"").trim();return`
                <div class="utp-barcode-wrap">
                    <div class="utp-barcode-bars" aria-hidden="true"></div>
                    <div class="utp-barcode-code">*${i(u)}*</div>
                </div>`}const b=x.match(/^(\s{0,4}.+?)\s{3,}(.+)$/);return b&&b[1]&&b[2]?`<div class="utp-row"><div class="utp-col-left">${De(b[1])}</div><div class="utp-col-right">${De(b[2])}</div></div>`:`<div class="utp-line">${De(x)}</div>`}).join(""));try{let p=document.getElementById("thermal-print-iframe");p&&p.remove(),p=document.createElement("iframe"),p.id="thermal-print-iframe",p.style.position="fixed",p.style.right="0",p.style.bottom="0",p.style.width="0",p.style.height="0",p.style.border="0",p.style.visibility="hidden",p.style.zIndex="-9999",document.body.appendChild(p);const x=p.contentDocument||p.contentWindow.document;x.open(),x.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Cetak Struk Thermal</title>
  <style>
    @page {
      margin: 0mm !important;
      size: ${s} auto;
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
      padding: 0 ${o?"2.5mm":"1.5mm"} 4mm ${o?"1mm":"0.5mm"} !important;
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
      padding-right: ${o?"2.5mm":"1.5mm"} !important;
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
      max-width: ${o?"220px":"150px"} !important;
      height: ${o?"36px":"30px"} !important;
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
    ${d}
  </div>
</body>
</html>`),x.close(),setTimeout(()=>{try{p.contentWindow.focus(),p.contentWindow.print()}catch(w){console.warn("[RawBT] Iframe print gagal, fallback ke direct print:",w),Jt(d,s,n)}},120);return}catch(p){console.warn("[RawBT] Gagal membuat isolated print iframe:",p)}Jt(d,s,n)},Jt=(e,t,a)=>{let o=g("thermal-print-section");o||(o=document.createElement("div"),o.id="thermal-print-section",document.body.appendChild(o));const s=t==="80mm";o.className=s?"paper-80mm":"paper-58mm",document.body.classList.remove("paper-58mm","paper-80mm"),document.body.classList.add(s?"paper-80mm":"paper-58mm");let n=document.getElementById("dynamic-print-page-style");n||(n=document.createElement("style"),n.id="dynamic-print-page-style",document.head.appendChild(n)),n.innerHTML=`@media print { @page { margin: 0 !important; size: ${t} auto; } html, body { width: ${a} !important; margin: 0 !important; } }`,o.innerHTML=`
        <div class="utp-thermal-wrap" style="width:${a};max-width:${a};font-family:'Courier New',Courier,monospace;font-size:${s?"10.5px":"8.8px"};line-height:1.25;color:#000;background:#fff;padding:0 ${s?"2.5mm":"1.5mm"} 4mm ${s?"1mm":"0.5mm"};margin:0;box-sizing:border-box;">
            ${e}
        </div>
    `,setTimeout(()=>{window.print()},120)},ts=()=>{if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.openRawBT=="function"){window.AndroidNativeApp.openRawBT();return}/android/i.test(navigator.userAgent||"")?(window.location.href="intent:#Intent;package=ru.a402d.rawbtprinter;end;",setTimeout(()=>{document.hidden||(window.location.href="https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter")},1200)):window.open("https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter","_blank")},vt=(e,t=null)=>{const a=t||_(),o=ce(a.paperSize),s=o>=40,n=new Ie(o);n.init(),a.openCashDrawer&&e.payment?.method==="cash"&&n.openDrawer();const r=R(a.headerText||f.store?.name||"TOKO PUTRI").trim(),l=R(a.storeAddress!==void 0&&a.storeAddress!==""?a.storeAddress:f.store?.address||"").trim(),d=R(a.storePhone!==void 0&&a.storePhone!==""?a.storePhone:f.store?.wa||"").trim(),p=Math.floor(o/2);r.length<=p?(n.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),n.size("normal").bold(!1)):(n.align("center").bold(!0).size("tall"),F(r.toUpperCase(),o).forEach(T=>n.line(T,"center")),n.size("normal").bold(!1)),a.showAddress!==!1&&l&&F(l,o).forEach(T=>n.line(T,"center")),a.showPhone!==!1&&d&&n.line(`WA: ${d}`,"center");const x=e.payment?.taxNpwp||f.store?.taxNpwp;a.showNpwp!==!1&&x&&n.line(`NPWP: ${x}`,"center"),n.separator("-");const w=le(e.dateMs||Date.now(),s),b=`#${e.txId}`;n.twoColumn(`No : ${b}`,w,!1,!0);const u=R(e.cashierName||"Kasir").trim(),m=!!(e.customer?.isMember||e.customerType==="Member"),c=R(e.customer?.name||"Umum").trim(),M=m?`${c} (Member)`:c,L=`Ksr: ${u}`,D=`Plg: ${M}`;if(L.length+1+D.length<=o?n.twoColumn(L,D,!1,!1):(n.line(L,"left"),n.line(D,"left")),e.customer?.phone&&n.line(`HP : ${e.customer.phone}`,"left"),m&&e.customer?.memberId&&n.line(`ID : ${e.customer.memberId}`,"left"),n.separator("-"),(e.items||[]).forEach(T=>{n.itemRow(T)}),n.separator("-"),n.twoColumn("Subtotal",$(e.subtotal)),(e.globalDiscount||0)>0){const T=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";n.twoColumn(T,`- ${$(e.globalDiscount)}`)}(e.pointDiscount||0)>0&&n.twoColumn(`Diskon Poin (${e.pointsRedeemed||0} Poin)`,`- ${$(e.pointDiscount)}`),e.claimedReward&&e.claimedReward.name&&(n.separator("-"),n.bold(!0).line(`[KLAIM HADIAH: ${R(e.claimedReward.name)}]`,"left").bold(!1),n.twoColumn("Poin Reward Ditukar",`-${e.claimedReward.pointsCost||0} Poin`));const N=_e(e);if(N.hasPpn){const T=N.ppnAmount>0?`${N.isInclusive?"":"+ "}${$(N.ppnAmount)}`:"Rp 0";n.twoColumn(N.ppnLabel,T)}n.doubleSeparator(),n.bold(!0).size("tall").twoColumn("TOTAL",$(e.total)).size("normal").bold(!1),n.doubleSeparator();const y=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",h=y?"PUTRI PAYLATER":(e.payment?.method||"CASH").toUpperCase();if(n.twoColumn("Metode Bayar",h),e.payment?.method==="cash")n.twoColumn("Bayar Tunai",$(e.payment.paid)),n.bold(!0).twoColumn("Kembalian",$(e.payment.change)).bold(!1);else if(e.payment?.method==="transfer")e.payment?.bank&&n.twoColumn("Bank Penerima",e.payment.bank);else if(e.payment?.method==="qris")n.twoColumn("Kanal QRIS","QRIS Dinamis (Lunas)");else if(e.payment?.method==="tempo"){if(y){if(n.twoColumn("Limit Terpakai",$(e.payment?.paylaterUsed||e.paylaterUsed||e.total-(e.payment?.tempoDp??0))),e.payment?.paylaterMonths){const T=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";n.twoColumn("Tenor Cicilan",`${T} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&n.twoColumn("Biaya Admin",`+ ${$(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&n.twoColumn("Biaya Layanan",`+ ${$(e.payment.paylaterServiceFee)}`)}if(n.twoColumn("Uang Muka (DP)",$(e.payment?.tempoDp??e.payment?.dp??0)),n.bold(!0).twoColumn(y?"Tagihan PayLater":"Sisa Piutang",$(e.payment.tempoBalance||0)).bold(!1),y&&e.payment?.paylaterMonthlyInstallment&&n.twoColumn("Angsuran/Bln",`${$(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),e.payment.tempoDueDate){const T=typeof e.payment.tempoDueDate=="number"?new Date(e.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e.payment.tempoDueDate;n.line(`Jatuh Tempo: ${T}`,"left")}}a.showPoints&&(e.pointsEarned>0||(e.pointsRedeemed||0)>0)&&(n.separator("-"),e.pointsEarned>0&&n.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),(e.pointsRedeemed||0)>0&&n.twoColumn("Poin Ditukar",`-${e.pointsRedeemed} Poin`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&n.twoColumn("Sisa Saldo Poin",`${e.finalMemberPoints} Poin`)),a.showBarcode&&(n.separator("-"),n.barcode(`POS-${e.txId}`,"CODE128",45),n.line(`*POS-${e.txId}*`,"center"),n.line("(SCAN DI KASIR)","center")),n.separator("-");const v=R(a.footerText||"Terima Kasih Atas Kunjungan Anda!").trim();v&&F(v,o).forEach(T=>n.line(T,"center"));const k=R(a.footerPolicyNote!==void 0?a.footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa struk resmi.").trim();return k&&(n.line("","center"),F(k,o).forEach(T=>n.line(T,"center"))),n.feed(a.feedLines||3),a.autoCut&&n.cut(),{base64:n.toBase64(),plainText:n.toPlainText(),previewLines:n.previewLines,html:n.toHtml()}},kt=(e,t=!1,a=null)=>{const o=a||_(),s=ce(o.paperSize),n=s>=40,r=new Ie(s);r.init();const l=R(o.headerText||f.store?.name||"TOKO PUTRI").trim(),d=R(f.store?.address||"").trim(),p=R(f.store?.wa||"").trim(),x=Math.floor(s/2);l.length<=x?(r.align("center").bold(!0).size("title").line(l.toUpperCase(),"center"),r.size("normal").bold(!1)):(r.align("center").bold(!0).size("tall"),F(l.toUpperCase(),s).forEach(v=>r.line(v,"center")),r.size("normal").bold(!1)),d&&F(d,s).forEach(v=>r.line(v,"center")),p&&r.line(`WA: ${p}`,"center"),r.separator("-");const w=n?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **";r.bold(!0).line(w,"center").bold(!1),r.separator("-");const b=le(e.startTime,n),u=le(e.endTime||Date.now(),n);r.twoColumn("Shift ID",`#${e.shiftNo||e.id||"-"}`,!1,!0),r.twoColumn("Kasir",(e.cashierName||"Kasir").substring(0,n?20:12),!1,!0),r.twoColumn("Mulai",b,!1,!0),r.twoColumn("Selesai",u,!1,!0),r.separator("-");const m=parseFloat(e.startingCash)||0,c=parseFloat(e.cashSales)||0,M=parseFloat(e.qrisSales)||0,L=parseFloat(e.bankSales||e.transferSales)||0,D=parseFloat(e.tempoSales)||0,N=parseFloat(e.totalSales)||c+M+L+D,y=e.txCount||0;if(r.bold(!0).line("RINGKASAN PENJUALAN","left").bold(!1),r.twoColumn("Modal Awal Laci",$(m)),r.twoColumn("Penjualan Tunai",$(c)),M>0&&r.twoColumn("Penjualan QRIS",$(M)),L>0&&r.twoColumn("Penjualan Transfer",$(L)),D>0&&r.twoColumn("Penjualan Tempo",$(D)),r.separator("-"),r.twoColumn("Total Transaksi",`${y} Trx`),r.bold(!0).size("tall").twoColumn("TOTAL OMSET",$(N)).size("normal").bold(!1),r.doubleSeparator(),!t){const v=m+c,k=e.actualCash!==void 0?parseFloat(e.actualCash):v,T=k-v,K=T===0?"PAS (0)":T>0?`+${$(T)}`:`-${$(Math.abs(T))}`;r.bold(!0).line("REKONSILIASI KAS FISIK","left").bold(!1),r.twoColumn("Kas Diharapkan",$(v)),r.twoColumn("Kas Fisik Aktual",$(k)),r.bold(!0).twoColumn("Selisih Kas",K,!0).bold(!1),e.closingNotes&&F(`Catatan: ${e.closingNotes}`,s).forEach(O=>r.line(O,"left")),r.separator("-"),r.line("Verifikasi & Tanda Tangan:","left"),r.feed(2);const I=Math.floor(s/2),A="( Kasir )",S=n?"( Supervisor/Owner )":"( Supervisor )",C=Math.max(0,Math.floor((I-A.length)/2)),H=Math.max(0,Math.floor((I-S.length)/2)),W=" ".repeat(C)+A+" ".repeat(Math.max(1,I-C-A.length))+" ".repeat(H)+S;r.line(W,"left"),r.separator("-")}const h=o.footerText||"Laporan Kasir Resmi Toko Putri";return F(h,s).forEach(v=>r.line(v,"center")),r.feed(o.feedLines||3),o.autoCut&&r.cut(),{base64:r.toBase64(),plainText:r.toPlainText(),previewLines:r.previewLines,html:r.toHtml()}},Pt=(e,t=null)=>{const a=t||_(),o=ce(a.paperSize),s=o>=40,n=new Ie(o);n.init();const r=R(a.headerText||f.store?.name||"TOKO PUTRI").trim(),l=R(a.storeAddress!==void 0&&a.storeAddress!==""?a.storeAddress:f.store?.address||"").trim(),d=R(a.storePhone!==void 0&&a.storePhone!==""?a.storePhone:f.store?.wa||"").trim(),p=Math.floor(o/2);r.length<=p?(n.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),n.size("normal").bold(!1)):(n.align("center").bold(!0).size("tall"),F(r.toUpperCase(),o).forEach(v=>n.line(v,"center")),n.size("normal").bold(!1)),a.showAddress!==!1&&l&&F(l,o).forEach(v=>n.line(v,"center")),a.showPhone!==!1&&d&&n.line(`WA: ${d}`,"center");const x=e.payment?.taxNpwp||f.store?.taxNpwp;a.showNpwp!==!1&&x&&n.line(`NPWP: ${x}`,"center"),n.separator("-");const w=le(e.dateString||e.dateMs||Date.now(),s);n.twoColumn(`Order: #${e.orderId}`,w,!1,!0);const b=(e.customer?.name||"Guest").substring(0,s?18:11),u=e.customer?.deliveryMethod==="delivery"?"Kirim":"Ambil";n.twoColumn(`Plg  : ${b}`,`Tipe: ${u}`,!1,!0),e.customer?.phone&&n.line(`HP   : ${e.customer.phone}`,"left"),e.customer?.note&&F(`Cat  : ${e.customer.note}`,o).forEach(v=>n.line(v,"left")),n.separator("-");const m=Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[];m.length>0?m.forEach(v=>{n.itemRow(v)}):n.line("- Tidak ada rincian barang -","center"),n.separator("-");const c=_e(e),M=c.subtotal,L=c.shipping,D=c.grandTotal;if(n.twoColumn("Subtotal",$(M)),(e.customer?.deliveryMethod==="delivery"||e.deliveryMethod==="delivery")&&n.twoColumn("Ongkos Kirim",$(L)),c.productDiscount&&n.twoColumn("Potongan Harga",`- ${$(c.productDiscount)}`),c.shippingDiscount&&n.twoColumn("Potongan Ongkir",`- ${$(c.shippingDiscount)}`),c.pointDiscount>0&&n.twoColumn("Potongan Poin",`- ${$(c.pointDiscount)}`),c.paylaterAdminFee>0&&n.twoColumn("Biaya Admin",`+ ${$(c.paylaterAdminFee)}`),c.paylaterServiceFee>0&&n.twoColumn("Biaya Layanan",`+ ${$(c.paylaterServiceFee)}`),c.hasPpn){const v=c.ppnAmount>0?`${c.isInclusive?"":"+ "}${$(c.ppnAmount)}`:"Rp 0";n.twoColumn(c.ppnLabel,v)}n.doubleSeparator(),n.bold(!0).size("tall").twoColumn("TOTAL",$(D)).size("normal").bold(!1),n.doubleSeparator();const N=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater";if(n.twoColumn("Metode Bayar",N?"PUTRI PAYLATER":(e.payment?.method||"Tunai").toUpperCase()),N){if(e.payment?.paylaterMonths){const v=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";n.twoColumn("Tenor Cicilan",`${v} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&n.twoColumn("Biaya Admin",`+ ${$(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&n.twoColumn("Biaya Layanan",`+ ${$(e.payment.paylaterServiceFee)}`),e.payment?.paylaterMonthlyInstallment&&n.twoColumn("Angsuran/Bln",`${$(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`)}a.showPoints&&(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(n.separator("-"),e.pointsEarned>0&&n.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),e.finalMemberPoints!==void 0&&n.twoColumn("Saldo Poin",`${e.finalMemberPoints} Poin`)),a.showBarcode&&(n.separator("-"),n.barcode(`ORDER-${e.orderId}`,"CODE128",45),n.line(`*ORDER-${e.orderId}*`,"center"),n.line("(SCAN DI KASIR)","center")),n.separator("-");const y=R(a.footerText||"Terima Kasih Atas Kunjungan Anda!").trim();y&&F(y,o).forEach(v=>n.line(v,"center"));const h=R(a.footerPolicyNote!==void 0?a.footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa struk resmi.").trim();return h&&(n.line("","center"),F(h,o).forEach(v=>n.line(v,"center"))),n.feed(a.feedLines||3),a.autoCut&&n.cut(),{base64:n.toBase64(),plainText:n.toPlainText(),previewLines:n.previewLines,html:n.toHtml()}},Tt=(e,t=null)=>{const a=t||_(),o=ce(a.paperSize),s=o>=40,n=new Ie(o);n.init();const r=R(a.headerText||f.store?.name||"TOKO PUTRI").trim(),l=R(a.storeAddress!==void 0&&a.storeAddress!==""?a.storeAddress:f.store?.address||"").trim(),d=R(a.storePhone!==void 0&&a.storePhone!==""?a.storePhone:f.store?.wa||"").trim(),p=Math.floor(o/2);r.length<=p?(n.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),n.size("normal").bold(!1)):(n.align("center").bold(!0).size("tall"),F(r.toUpperCase(),o).forEach(O=>n.line(O,"center")),n.size("normal").bold(!1)),a.showAddress!==!1&&l&&F(l,o).forEach(O=>n.line(O,"center")),a.showPhone!==!1&&d&&n.line(`WA: ${d}`,"center");const x=e.payment?.taxNpwp||f.store?.taxNpwp;a.showNpwp!==!1&&x&&n.line(`NPWP: ${x}`,"center"),n.separator("-");const w=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",b=e.payment?.paymentStatus==="lunas"||parseFloat(e.payment?.tempoBalance||0)<=0,u=s?w?b?"*** NOTA PUTRI PAYLATER (LUNAS) ***":"*** NOTA TAGIHAN PUTRI PAYLATER ***":b?"*** NOTA TEMPO (LUNAS) ***":"*** NOTA TAGIHAN TEMPO (PIUTANG) ***":w?b?"** PAYLATER (LUNAS) **":"** NOTA PUTRI PAYLATER **":b?"** NOTA TEMPO (LUNAS) **":"** NOTA TAGIHAN TEMPO **";n.bold(!0).line(u,"center").bold(!1),n.separator("-");const m=le(e.dateString||e.timestamp||Date.now(),s);n.twoColumn(`Order: #${e.orderId}`,m,!1,!0);const c=(e.customer?.name||"Pelanggan").substring(0,s?18:11);if(n.twoColumn(`Plg  : ${c}`,w?"Tipe: PayLater":"Tipe: Tempo",!1,!0),w&&e.payment?.paylaterMonths){const O=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";n.twoColumn("Tenor Cicilan",`${O} (${e.payment.paylaterMonths}x)`,!1,!0)}(e.customer?.phone||e.customer?.wa)&&n.line(`HP   : ${e.customer.wa||e.customer.phone}`,"left");let M=parseFloat(e.payment?.tempoBalance)||0,L=e.payment?.tempoPenaltyRate!==void 0?parseFloat(e.payment.tempoPenaltyRate):1,D=e.payment?.tempoPenaltyStopped===!0,N=0,y=e.payment?.tempoDueDate||0,h=0,v=0,k=!1,T=!1;const K=Date.now();y>0&&(K>y?(h=Math.floor((K-y)/(24*60*60*1e3)),h>0&&(k=!0)):(v=Math.ceil((y-K)/(24*60*60*1e3)),v<=3&&(T=!0))),D?N=parseFloat(e.payment?.tempoFixedPenalty)||0:k&&(N=L/100*M*h);let I=M+N;const A=e.payment?.installments||[],S=A.reduce((O,E)=>O+(parseFloat(E.amount)||0),0),C=e.payment?.grandTotal||M+S;if(y>0){const O=le(y,s);let E="";b?E="LUNAS":k?E=`Telat ${h} Hari`:T?E=`H-${v<=0?0:v}`:E=`Sisa ${v} Hari`,n.twoColumn(`J.Tmp: ${O}`,E,!1,!0)}n.separator("-"),(e.items||[]).forEach(O=>{n.itemRow(O)}),n.separator("-"),n.twoColumn("Total Transaksi",$(C)),w&&(e.payment?.paylaterAdminFee>0&&n.twoColumn("Biaya Admin",`+ ${$(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&n.twoColumn("Biaya Penanganan",`+ ${$(e.payment.paylaterServiceFee)}`)),A.length>0&&(n.separator("-"),n.bold(!0).line("HISTORI PEMBAYARAN CICILAN:","left").bold(!1),A.forEach((O,E)=>{const U=le(O.date,s);n.twoColumn(`${E+1}. ${U}`,$(O.amount))}),n.twoColumn("Total Terbayar",$(S),!0)),n.twoColumn("Sisa Pokok",$(M)),w&&e.payment?.paylaterMonthlyInstallment&&n.twoColumn("Angsuran/Bln",`${$(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),N>0&&n.twoColumn(`Denda (${h} Hari)`,`+ ${$(N)}`),n.doubleSeparator(),n.bold(!0).size("tall").twoColumn(w?"TAGIHAN PAYLATER":"SISA TAGIHAN",$(b?0:I)).size("normal").bold(!1),n.doubleSeparator(),!b&&f.banks&&f.banks.length>0&&(n.line("REKENING TRANSFER RESMI:","left"),(f.banks||[]).forEach(O=>{n.line(`${O.bank||O.bankName||"Bank"}: ${O.number||O.bankAccount||"-"}`,"left"),n.line(`a/n ${O.name||O.bankOwner||"-"}`,"left")}),n.separator("-")),a.showBarcode&&(n.separator("-"),n.barcode(w?`PAYLATER-${e.orderId}`:`TEMPO-${e.orderId}`,"CODE128",45),n.line(w?`*PAYLATER-${e.orderId}*`:`*TEMPO-${e.orderId}*`,"center"),n.line(w?"(PUTRI PAYLATER RESMI)":"(NOTA TEMPO RESMI)","center")),n.separator("-");const H=R(a.footerText||"Terima Kasih Atas Kerja Sama & Kepercayaannya!").trim();H&&F(H,o).forEach(O=>n.line(O,"center"));const W=R(a.footerPolicyNote!==void 0?a.footerPolicyNote:"").trim();return W&&(n.line("","center"),F(W,o).forEach(O=>n.line(O,"center"))),n.feed(a.feedLines||3),a.autoCut&&n.cut(),{base64:n.toBase64(),plainText:n.toPlainText(),previewLines:n.previewLines,html:n.toHtml()}},St=(e=null)=>{const t=e||_(),a=ce(t.paperSize),o=a>=40,s=new Ie(a);s.init();const n=R(t.headerText||f.store?.name||"TOKO PUTRI").trim(),r=R(t.storeAddress!==void 0&&t.storeAddress!==""?t.storeAddress:f.store?.address||"").trim(),l=R(t.storePhone!==void 0&&t.storePhone!==""?t.storePhone:f.store?.wa||"").trim(),d=Math.floor(a/2);n.length<=d?(s.align("center").bold(!0).size("title").line(n.toUpperCase(),"center"),s.size("normal").bold(!1)):(s.align("center").bold(!0).size("tall"),F(n.toUpperCase(),a).forEach(u=>s.line(u,"center")),s.size("normal").bold(!1)),t.showAddress!==!1&&r&&F(r,a).forEach(u=>s.line(u,"center")),t.showPhone!==!1&&l&&s.line(`WA: ${l}`,"center"),s.separator("-");const p=o?`*** UJI COBA CETAK STRUK THERMAL ${a} KOLOM ***`:`** UJI CETAK THERMAL ${a} KOLOM **`;s.bold(!0).line(p,"center").bold(!1),s.separator("-"),s.line("MISTAR KALIBRASI TEPI KERTAS:","left");let x="";for(let u=1;u<=a;u++)x+=String(u%10);s.line(x,"left");let w="";for(let u=1;u<=a;u++)u===a||u%10===0?w+="|":u%5===0?w+=":":w+=".";s.line(w,"left"),s.line(`(Pastikan angka ${a%10} paling kanan tercetak utuh)`,"left"),s.separator("-");const b=le(Date.now(),o);if(s.line(`Waktu   : ${b}`,"left"),s.line(`Format  : Thermal ${a} Kolom (${t.paperSize})`,"left"),s.line("Driver  : RAWBT FREE PRINT SERVICE","left"),s.line("Status  : 100% PRESISI & SIAP PAKAI","left"),s.separator("-"),s.bold(!0).twoColumn("ITEM SIMULASI","HARGA").bold(!1),s.itemRow({name:"Kertas Thermal Kasir Roll",qty:2,unit:"roll",price:15e3,subtotal:3e4}),s.itemRow({name:"Semen Portland Komposit 40kg",qty:1,unit:"sak",price:65e3,subtotal:65e3}),s.separator("-"),s.twoColumn("Subtotal",$(95e3)),s.twoColumn("Diskon Uji Coba",`- ${$(5e3)}`),s.doubleSeparator(),s.bold(!0).size("tall").twoColumn("TOTAL TES",$(9e4)).size("normal").bold(!1),s.doubleSeparator(),s.twoColumn("Bayar Tunai",$(1e5)),s.bold(!0).twoColumn("Kembalian",$(1e4)).bold(!1),t.showPoints&&(s.separator("-"),s.twoColumn("Simulasi Poin Member","+10 Poin")),t.showBarcode){s.separator("-");const u=`TEST-${Date.now().toString().slice(-6)}`;s.barcode(u,"CODE128",45),s.line(`*${u}*`,"center"),s.line("(BARCODE TEST BERHASIL)","center")}return s.separator("-"),F(t.footerText||"Terima kasih atas kunjungan Anda!",a).forEach(u=>s.line(u,"center")),t.footerPolicyNote&&(s.line("","center"),F(t.footerPolicyNote,a).forEach(u=>s.line(u,"center"))),F("Hasil cetak telah terkalibrasi presisi.",a).forEach(u=>s.line(u,"center")),s.feed(t.feedLines||3),t.autoCut&&s.cut(),{base64:s.toBase64(),plainText:s.toPlainText(),previewLines:s.previewLines,html:s.toHtml()}},lt=e=>{const t=document.getElementById(e);return!!t&&!t.classList.contains("hidden")},as=e=>{if(!e){Q("Data transaksi kasir tidak ditemukan.","warning");return}const t=_(),a=vt(e,t),o=lt("pos-receipt-fallback-modal");Oe(a.base64,a.plainText,a.html,{skipPreview:o,previewLines:a.previewLines,title:`Struk Kasir #${e.txId||""}`,rebuild:()=>vt(e,_()),onConfirm:()=>{document.getElementById("pos-success-modal")?.remove(),document.getElementById("pos-receipt-fallback-modal")?.remove()}})},os=(e,t=!1)=>{if(!e){Q("Data shift tidak ditemukan.","warning");return}const a=_(),o=kt(e,t,a),s=lt("pos-shift-receipt-modal");Oe(o.base64,o.plainText,o.html,{skipPreview:s,previewLines:o.previewLines,title:`${t?"Ringkasan Shift (X-Report)":"Rekap Tutup Shift (Z-Report)"} #${e.shiftNo||e.id||""}`,rebuild:()=>kt(e,t,_()),onConfirm:()=>document.getElementById("pos-shift-receipt-modal")?.remove()})},ss=async(e=null)=>{const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||Pe,a=String(t||"").replace(/^#/,"").trim(),o=d=>{if(!d)return!1;const p=String(d.orderId||"").replace(/^#/,"").trim();return a?p===a||p.endsWith(a)||a.endsWith(p):!0};let s=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(s=e),(!s||!s.items||s.items.length===0)&&o(window.currentCustomerOrder)&&(s=window.currentCustomerOrder),(!s||!s.items||s.items.length===0)&&o(window.lastPrintedOrder)&&(s=window.lastPrintedOrder),(!s||!s.items||s.items.length===0)&&(Te||[]).length>0){const d=Te.find(o);d&&Array.isArray(d.items)&&d.items.length>0&&(s=d)}if((!s||!s.items||s.items.length===0)&&Array.isArray(j)){const d=j.find(o);d&&Array.isArray(d.items)&&d.items.length>0&&(s=d)}if((!s||!s.items||s.items.length===0)&&a)try{const d=typeof re<"u"&&re?re:window.db;if(d){let p=await d.collection("freshmart_orders").doc(a).get();if(!p.exists&&!a.startsWith("ORD-")){const x=await d.collection("freshmart_orders").doc("ORD-"+a).get();x.exists&&(p=x)}if(p&&p.exists&&(s=p.data(),s.orderId=s.orderId||p.id,window.currentCustomerOrder=s,window.lastPrintedOrder=s,Array.isArray(j))){const x=j.findIndex(o);if(x!==-1){j[x].items=s.items||[],j[x].payment=s.payment||{},j[x].customer=s.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(j))}catch{}}}}}catch(d){console.warn("[RawBT] Gagal fetch order detail from Firestore:",d)}if(!s&&Array.isArray(j)&&(s=j.find(o)),!s){Q("Data pesanan tidak ditemukan.","warning");return}window.lastPrintedOrder=s;const n=_(),r=Pt(s,n),l=lt("receipt-preview-modal");Oe(r.base64,r.plainText,r.html,{skipPreview:l,previewLines:r.previewLines,title:`Struk Pesanan #${s.orderId||""}`,rebuild:()=>Pt(s,_()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&l&&window.closeReceiptPreviewModal()}})},ns=(e=null)=>{const t=e||Pe;let o=(window.cachedPiutangOrders||[]).find(l=>String(l.orderId)===String(t))||(Te||[]).find(l=>String(l.orderId)===String(t));if(!o&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(t)&&(o=window.lastPrintedOrder),!o){if(typeof window.previewTempoReceipt=="function"&&t&&!window.__tempoReceiptFetching){window.__tempoReceiptFetching=!0,Promise.resolve(window.previewTempoReceipt(t)).finally(()=>{window.__tempoReceiptFetching=!1});return}Q("Data nota piutang tidak ditemukan.","warning");return}const s=_(),n=Tt(o,s),r=lt("receipt-preview-modal");Oe(n.base64,n.plainText,n.html,{skipPreview:r,previewLines:n.previewLines,title:`Nota Tagihan Tempo #${o.orderId||""}`,rebuild:()=>Tt(o,_()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&r&&window.closeReceiptPreviewModal()}})},rs=()=>{const e=_(),t=St(e);Oe(t.base64,t.plainText,t.html,{previewLines:t.previewLines,title:"Uji Coba Cetak Printer",rebuild:()=>St(_())})};window.cleanLineAscii=R;window.wrapWords=F;window.formatTwoColumn=ka;window.formatCompactDate=le;window.EscPosBuilder=Ie;window.sendToRawBT=Oe;window.renderThermalDOMAndPrint=It;window.openRawBTApp=ts;window.buildPOSReceiptPayload=vt;window.buildShiftReceiptPayload=kt;window.buildOrderReceiptPayload=Pt;window.buildTempoReceiptPayload=Tt;window.buildTestReceiptPayload=St;window.printPOSReceiptDirect=as;window.printShiftSettlementDirect=os;window.printCustomerReceiptDirect=ss;window.printTempoReceiptDirect=ns;window.executeRawBTTestPrint=rs;const Ot=async(e=null)=>{if(e&&typeof jt=="function"&&typeof e=="string"&&jt(e),typeof window.printCustomerReceiptDirect=="function")return window.printCustomerReceiptDirect(e);const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||Pe,a=String(t||"").replace(/^#/,"").trim(),o=S=>{if(!S)return!1;const C=String(S.orderId||"").replace(/^#/,"").trim();return a?C===a||C.endsWith(a)||a.endsWith(C):!0};let s=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(s=e),(!s||!s.items||s.items.length===0)&&o(window.currentCustomerOrder)&&(s=window.currentCustomerOrder),(!s||!s.items||s.items.length===0)&&o(window.lastPrintedOrder)&&(s=window.lastPrintedOrder),(!s||!s.items||s.items.length===0)&&(Te||[]).length>0){const S=Te.find(o);S&&Array.isArray(S.items)&&S.items.length>0&&(s=S)}if((!s||!s.items||s.items.length===0)&&Array.isArray(j)){const S=j.find(o);S&&Array.isArray(S.items)&&S.items.length>0&&(s=S)}if((!s||!s.items||s.items.length===0)&&a)try{const S=typeof re<"u"&&re?re:window.db;if(S){let C=await S.collection("freshmart_orders").doc(a).get();if(!C.exists&&!a.startsWith("ORD-")){const H=await S.collection("freshmart_orders").doc("ORD-"+a).get();H.exists&&(C=H)}if(C&&C.exists&&(s=C.data(),s.orderId=s.orderId||C.id,window.currentCustomerOrder=s,window.lastPrintedOrder=s,Array.isArray(j))){const H=j.findIndex(o);if(H!==-1){j[H].items=s.items||[],j[H].payment=s.payment||{},j[H].customer=s.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(j))}catch{}}}}}catch(S){console.warn("[Receipt] Gagal fetch order detail from Firestore:",S)}if(!s&&Array.isArray(j)&&(s=j.find(o)),!s)return;window.lastPrintedOrder=s;const n=typeof _=="function"?_():{paperSize:"58mm",showPoints:!0,showBarcode:!0},l=ce(n.paperSize)>=40,d=le(s.dateString||s.date||Date.now(),l),p=n.headerText||f.store.name||"Toko Putri",x=n.storeAddress!==void 0&&n.storeAddress!==""?n.storeAddress:f.store.address||"",w=n.storePhone!==void 0&&n.storePhone!==""?n.storePhone:f.store.wa||"",b=(S,C)=>`<div class="utp-row"><div class="utp-col-left">${i(S)}</div><div class="utp-col-right">${i(C)}</div></div>`,u=Array.isArray(s.items)?s.items:Array.isArray(s.cart)?s.cart:[],m=_e(s),c=m.subtotal,M=m.shipping,L=m.grandTotal,D=String(s.payment?.method||s.method||"Tunai").toUpperCase(),N=s.customer?.name||s.customerName||"Guest",y=s.customer?.deliveryMethod==="delivery"||s.deliveryMethod==="delivery";let h=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${i(p)}</div>`;n.showAddress!==!1&&x&&(h+=`<div class="text-center" style="font-size:10px;color:#475569;margin-bottom:2px;">${i(x)}</div>`),n.showPhone!==!1&&w&&(h+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${i(w)}</div>`);const v=s.payment?.taxNpwp||f.store?.taxNpwp;if(n.showNpwp!==!1&&v&&(h+=`<div class="text-center" style="font-size:10px;font-family:monospace;margin-bottom:4px;">NPWP: ${i(v)}</div>`),h+='<div class="utp-separator"></div>',h+=b(`Order: #${s.orderId}`,d),h+=b(`Plg  : ${i(N).substring(0,l?18:10)}`,`Tipe: ${y?"Kirim":"Ambil"}`),(s.customer?.phone||s.customerPhone)&&(h+=`<div class="utp-line">HP   : ${i(s.customer?.phone||s.customerPhone)}</div>`),h+='<div class="utp-separator"></div>',s.customer?.note&&(h+=`<div style="white-space:pre-wrap;word-break:break-word;">Cat: ${i(s.customer.note)}</div><div class="utp-separator"></div>`),u.length>0?u.forEach(S=>{let C=S.variantName?` (${i(S.variantName)}${S.colorCode?" "+i(S.colorCode):""})`:"";const H=i(S.name||"Barang")+C+(S.poTime?" [PO]":""),W=S.effectivePrice||S.price||0,O=`  ${parseFloat(S.qty||1)} ${i(S.unit||"pcs")} x ${Math.round(W).toLocaleString("id-ID")}`,E=(parseFloat(S.qty||1)*W).toLocaleString("id-ID");h+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;">${H}</div>${b(O,E)}`,S.poTime&&(h+=`<div style="font-size:10px;font-style:italic;color:#4b5563;">  * Estimasi PO: ${i(S.poTime)}</div>`)}):h+='<div style="font-style:italic;color:#64748b;text-align:center;padding:4px 0;">- Tidak ada rincian barang -</div>',h+=`<div class="utp-separator"></div>${b("Subtotal",c.toLocaleString("id-ID"))}`,y&&(h+=b("Ongkir",M.toLocaleString("id-ID"))),m.shippingDiscount&&(h+=b("Pot.Ongkir",`-${m.shippingDiscount.toLocaleString("id-ID")}`)),m.productDiscount&&(h+=b("Pot.Harga",`-${m.productDiscount.toLocaleString("id-ID")}`)),m.pointDiscount>0&&(h+=b("Pot.Poin",`-${m.pointDiscount.toLocaleString("id-ID")}`)),m.paylaterAdminFee>0&&(h+=b("Biaya Admin",`+${m.paylaterAdminFee.toLocaleString("id-ID")}`)),m.paylaterServiceFee>0&&(h+=b("Biaya Layanan",`+${m.paylaterServiceFee.toLocaleString("id-ID")}`)),m.hasPpn){const S=m.ppnAmount>0?`${m.isInclusive?"":"+"}${m.ppnAmount.toLocaleString("id-ID")}`:"0";h+=b(m.ppnLabel,S)}if(h+=`<div class="utp-double-separator"></div><div class="font-bold text-[12px]">${b("TOTAL","Rp "+L.toLocaleString("id-ID"))}</div>${b("Metode Bayar",D)}`,s.payment?.method==="tempo"||s.payment?.isPaylater||s.payment?.subMethod==="paylater"){if(!!(s.payment?.isPaylater||s.payment?.subMethod==="paylater")){if(s.payment?.paylaterMonths){const C=s.payment?.paylaterTenor==="2m"?"2 Bulan":s.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari";h+=b("Tenor Cicilan",`${C} (${s.payment.paylaterMonths}x)`)}s.payment?.paylaterMonthlyInstallment&&(h+=`<div class="font-bold">${b("Angsuran/Bln","Rp "+Math.round(s.payment.paylaterMonthlyInstallment).toLocaleString("id-ID"))}</div>`),s.payment?.tempoDp>0&&(h+=b("Uang Muka (DP)","Rp "+Math.round(s.payment.tempoDp).toLocaleString("id-ID"))),h+=`<div class="font-bold">${b("Tagihan PayLater","Rp "+Math.round(s.payment?.tempoBalance||L).toLocaleString("id-ID"))}</div>`}else s.payment?.tempoDp>0&&(h+=b("Uang Muka (DP)","Rp "+Math.round(s.payment.tempoDp).toLocaleString("id-ID"))),h+=`<div class="font-bold">${b("Sisa Piutang","Rp "+Math.round(s.payment?.tempoBalance||L).toLocaleString("id-ID"))}</div>`;if(s.payment?.tempoDueDate){const C=typeof s.payment.tempoDueDate=="number"?new Date(s.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):s.payment.tempoDueDate;h+=b("Jatuh Tempo",C)}}n.showPoints&&(s.pointsEarned>0||s.finalMemberPoints!==void 0)&&(h+='<div class="utp-separator"></div>',s.pointsEarned>0&&(h+=b("Poin Didapat","+"+s.pointsEarned+" Poin")),s.finalMemberPoints!==void 0&&s.finalMemberPoints!==null&&(h+=`<div class="font-bold">${b("Saldo Poin",String(s.finalMemberPoints)+" Poin")}</div>`),s.claimedReward&&(h+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;margin-top:2px;">HADIAH: ${i(s.claimedReward.name)}</div>`)),u.some(S=>S&&S.poTime&&S.poTime!=="")&&(h+='<div class="utp-separator"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),n.showBarcode&&(h+=`<div class="utp-separator"></div>
        <div style="text-align:center;margin:6px 0 3px;">
            <div style="width:75%;max-width:200px;height:32px;margin:0 auto;background:repeating-linear-gradient(90deg,#000 0px,#000 2px,transparent 2px,transparent 4px,#000 4px,#000 7px,transparent 7px,transparent 9px,#000 9px,#000 11px,transparent 11px,transparent 13px,#000 13px,#000 16px,transparent 16px,transparent 18px,#000 18px,#000 19px,transparent 19px,transparent 22px);border-top:1px solid #000;border-bottom:1px solid #000;"></div>
            <div style="font-family:monospace;letter-spacing:2px;font-size:10.5px;font-weight:bold;margin-top:3px;">*ORDER-${i(s.orderId)}*</div>
            <div style="font-size:8px;color:#666;">SCAN DI KASIR</div>
        </div>`),h+=`<div class="utp-separator"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${i(n.footerText||"Terima Kasih Atas Kunjungan Anda")}</div>`,n.footerPolicyNote&&(h+=`<div class="text-center my-1" style="font-size:9px;line-height:1.25;color:#475569;">${i(n.footerPolicyNote)}</div>`),h+='<div class="utp-separator"></div><div style="height:15px;"></div>',ia("receipt-paper-content",h);const T=g("receipt-paper-content");T&&(T.style.width=l?"340px":"260px");const K=g("receipt-preview-modal-box");K&&(K.classList.remove("max-w-[320px]","max-w-[400px]"),K.classList.add(l?"max-w-[400px]":"max-w-[320px]"));const I=g("receipt-preview-modal"),A=g("receipt-preview-modal-box");I&&I.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),at(I,A)},is=(e=!1)=>{const t=g("receipt-preview-modal"),a=g("receipt-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{Se(t,a)}):Se(t,a))},ls=()=>{const e=Pe||(window.lastPrintedOrder?window.lastPrintedOrder.orderId:null);if(typeof window.printCustomerReceiptDirect=="function"){window.printCustomerReceiptDirect(e);return}if(!((Te||[]).find(o=>o.orderId===Pe)||(Array.isArray(j)?j.find(o=>o.orderId===Pe):null)||window.lastPrintedOrder))return;const a=g("receipt-paper-content")?g("receipt-paper-content").innerHTML:"";It(a)};window.openReceiptPreview=Ot;window.openCustomerReceiptPreview=e=>{Ot(e)};window.closeReceiptPreviewModal=is;window.executePrintReceipt=ls;window.checkProPrint=()=>{Ot()};const V={OWNER:"owner",ADMIN:"admin",CASHIER:"cashier"},ds=[{key:"orders",label:"Pesanan Online",desc:"Proses status pesanan, update resi pengiriman & konfirmasi bayar",group:"operasional",icon:"fa-receipt"},{key:"products",label:"Katalog Produk & Stok",desc:"Tambah/edit produk, atur varian, dan perbarui stok barang",group:"operasional",icon:"fa-box-open"},{key:"suppliers",label:"Supplier & Rekanan",desc:"Kelola master data supplier, kontak kulakan, dan asal produk",group:"operasional",icon:"fa-truck-field"},{key:"purchases",label:"Order Kulakan (PO)",desc:"Buat PO pembelian grosir, terima restock, & kelola hutang rekanan",group:"operasional",icon:"fa-cart-flatbed"},{key:"piutang",label:"Piutang Tempo & Cicilan",desc:"Kelola nota piutang pelanggan, denda keterlambatan, & cicilan",group:"operasional",icon:"fa-clock-rotate-left"},{key:"customers",label:"Database Pelanggan",desc:"Lihat daftar member, atur limit kredit PayLater, & mutasi poin",group:"operasional",icon:"fa-address-book"},{key:"pos",label:"Kasir POS",desc:"Akses antarmuka penjualan kasir toko fisik dan shift kasir",group:"operasional",icon:"fa-cash-register"},{key:"expenses",label:"Biaya Operasional Toko",desc:"Buku kas pengeluaran operasional toko harian & nota kas",group:"operasional",icon:"fa-money-bill-transfer"},{key:"stock_opname",label:"Stock Opname (Audit Fisik)",desc:"Audit stok fisik rak/gudang, rekonsiliasi selisih & terapkan penyesuaian stok",group:"operasional",icon:"fa-clipboard-check"},{key:"categories",label:"Kategori Produk",desc:"Tambah dan susun kategori etalase produk",group:"konten",icon:"fa-tags"},{key:"brands",label:"Merek Produk",desc:"Kelola daftar brand dagang barang",group:"konten",icon:"fa-copyright"},{key:"colors",label:"Database Warna",desc:"Katalog warna produk dan swatch varian",group:"konten",icon:"fa-swatchbook"},{key:"vouchers",label:"Voucher & Promo",desc:"Buat kode voucher diskon dan promo belanja",group:"konten",icon:"fa-ticket-simple"},{key:"banners",label:"Banner Promosi",desc:"Kelola gambar dan video slider beranda toko",group:"konten",icon:"fa-images"},{key:"rewards",label:"Program Hadiah Poin",desc:"Kelola katalog hadiah penukaran poin member",group:"konten",icon:"fa-gift"},{key:"reviews",label:"Ulasan Pelanggan",desc:"Moderasi ulasan dan testimoni produk pembeli",group:"konten",icon:"fa-star"},{key:"faqs",label:"Tanya Jawab / Q&A",desc:"Kelola jawaban pertanyaan umum pembeli",group:"konten",icon:"fa-circle-question"},{key:"changelog",label:"Log Pembaruan Sistem",desc:"Melihat riwayat update sistem toko",group:"konten",icon:"fa-code-branch"},{key:"reports",label:"Pusat Laporan & Keuangan",desc:"Laporan terpadu penjualan, stok, laba rugi, utang piutang, dan perpajakan",group:"sensitif",icon:"fa-chart-pie"},{key:"view_reports",label:"Laporan Finansial & Laba",desc:"Lihat omset, total HPP terjual, margin & laba bersih toko",group:"sensitif",icon:"fa-chart-line"},{key:"tax",label:"Pajak & Keuangan (PPN)",desc:"Laporan PPN, neraca keuangan, dan laba rugi resmi",group:"sensitif",icon:"fa-file-invoice-dollar"},{key:"banks",label:"Rekening Bank & QRIS",desc:"Ubah nomor rekening toko dan QRIS tujuan pembayaran",group:"sensitif",icon:"fa-building-columns"},{key:"settings",label:"Pengaturan Utama Toko",desc:"Konfigurasi nama toko, GPS maps, tarif ongkir, & sistem",group:"sensitif",icon:"fa-gear"},{key:"cashiers",label:"Kelola Staf & Hak Akses",desc:"Daftarkan staf baru, atur jabatan, & ubah batasan hak akses",group:"sensitif",icon:"fa-users-gear"},{key:"backup_sync",label:"Pusat Data & Backup Cloud",desc:"Cadangkan data toko, ekspor database, & sinkronisasi cloud",group:"sensitif",icon:"fa-cloud-arrow-up"}],At={[V.CASHIER]:{pos:!0,orders:!1,products:!1,suppliers:!1,purchases:!1,piutang:!1,customers:!1,categories:!1,brands:!1,colors:!1,vouchers:!1,banners:!1,rewards:!1,reviews:!1,faqs:!1,changelog:!1,expenses:!1,stock_opname:!1,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[V.ADMIN]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},manager:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!0,view_reports:!0,tax:!0,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[V.OWNER]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,reports:!0,view_reports:!0,tax:!0,banks:!0,settings:!0,cashiers:!0,backup_sync:!0}};let Le=null;const Re=()=>{if(Le)return Le;try{const e=sessionStorage.getItem("freshmart_staff_profile");if(e)return Le=JSON.parse(e),Le}catch{}return null},cs=e=>{Le=e;try{e?sessionStorage.setItem("freshmart_staff_profile",JSON.stringify(e)):sessionStorage.removeItem("freshmart_staff_profile")}catch{}},ps=()=>{Le=null;try{sessionStorage.removeItem("freshmart_staff_profile")}catch{}},qe=()=>{const e=tt.currentUser;if(e&&e.uid===ie)return!0;const t=Re();if(t){const o=String(t.role||"").toLowerCase();if(o==="owner"||t.uid===ie)return!0;if(o==="cashier"||o==="kasir"||o==="staff")return!1}const a=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");if((window.isAdm||window.__localIsAdm)&&a&&!t)return!0;try{const o=sessionStorage.getItem("pos_cashier_session");if(o){const s=JSON.parse(o),n=String(s.role||"").toLowerCase();if(n==="owner"||s.uid===ie)return!0;if(n==="cashier"||n==="kasir"||n==="staff")return!1}}catch{}return!1},ms=()=>{if(qe())return!0;if(Pa())return!1;const e=Re();return e?.role===V.ADMIN||String(e?.role||"").toLowerCase()==="admin"},Pa=()=>{if(qe())return!1;const e=Re();if(e){const t=String(e.role||"").toLowerCase();if(t==="owner"||e.uid===ie)return!1;if(t==="cashier"||t==="kasir")return!0}try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const a=JSON.parse(t),o=String(a.role||"").toLowerCase();if(o==="owner"||a.uid===ie)return!1;if(o==="cashier"||o==="kasir"||o==="staff")return!0}}catch{}return!1},Ta=e=>{if(qe())return!0;const t=Re();if(t){if(t.isActive===!1)return!1;const a=String(t.role||"").toLowerCase();if(a===V.OWNER||a==="owner")return!0;if(a===V.CASHIER||a==="cashier"||a==="kasir")return e==="pos";if(t.permissions){if(typeof t.permissions[e]<"u")return t.permissions[e]===!0;if(e==="reports"&&(t.permissions.view_reports===!0||t.permissions.tax===!0)||(e==="view_reports"||e==="tax")&&t.permissions.reports===!0)return!0}return(At[t.role]||At[V.ADMIN])[e]===!0}try{const a=sessionStorage.getItem("pos_cashier_session");if(a){const o=JSON.parse(a),s=String(o.role||"").toLowerCase();if(s===V.OWNER||s==="owner"||o.uid===ie)return!0;if(s===V.CASHIER||s==="cashier"||s==="kasir")return e==="pos"}}catch{}return window.isAdm||window.__localIsAdm?["banks","settings","cashiers","backup_sync"].includes(e)?tt.currentUser?.uid===ie:!0:!1},$t=()=>{if(typeof window<"u"&&(window.curViewName==="view-pos-cashier"||document.getElementById("view-pos-cashier")?.classList.contains("flex")||document.getElementById("pos-payment-modal")?.classList.contains("flex")||document.getElementById("pos-variant-sheet")?.classList.contains("flex")))try{const o=sessionStorage.getItem("pos_cashier_session");if(o){const s=JSON.parse(o),n=String(s.role||"").toLowerCase();return n===V.OWNER||n==="owner"||s.uid===ie}}catch{}if(qe())return!0;const t=Re();if(t){const o=String(t.role||"").toLowerCase();return o===V.OWNER||o==="owner"||t.uid===ie?!0:o===V.CASHIER||o==="cashier"||o==="kasir"?!1:Ta("view_reports")}const a=tt.currentUser;return!!(a&&a.uid===ie||window.isAdm||window.__localIsAdm)},us=e=>{switch(e){case V.OWNER:return`
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
            </span>`}};typeof window<"u"&&(window.ROLES=V,window.PERMISSION_DEFINITIONS=ds,window.ROLE_PRESETS=At,window.getActiveStaff=Re,window.setActiveStaff=cs,window.clearActiveStaff=ps,window.isOwnerUser=qe,window.isAdminUser=ms,window.isCashierUser=Pa,window.hasPermission=Ta,window.canViewHpp=$t,window.getRoleBadgeHtml=us);let ke="invoice",Sa=!1;const ft=e=>{Sa=e},G=(e,t=!1)=>{if(!e)return"-";try{const a=e.toDate?e.toDate():new Date(e);if(isNaN(a.getTime()))return"-";const o={day:"2-digit",month:"short",year:"numeric"};return t&&(o.hour="2-digit",o.minute="2-digit"),a.toLocaleDateString("id-ID",o)}catch{return"-"}},Yt=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(2).replace(/\.?0+$/,"")},be=(e="w-16 h-16")=>f.store?.logo&&(f.store.logo.includes("http")||f.store.logo.includes("data:"))?`<img loading="eager" src="${i(f.store.logo)}" class="${e} object-contain shrink-0">`:`<div class="${e} primary-bg flex items-center justify-center rounded-xl text-white shrink-0"><i class="fa-solid fa-store text-2xl"></i></div>`,wt=(e="font-mono text-xs")=>{const a=(Array.isArray(f.banks)?f.banks:[]).filter(o=>o&&(o.bankName||o.bank||o.bankAccount||o.number||o.account));if(a.length>0)return a.map(o=>{const s=o.bankName||o.bank||"BANK",n=o.bankAccount||o.number||o.account||"-",r=o.bankOwner||o.name||o.owner||f.store?.name||"Toko Putri";return`
            <div class="${e} flex items-center justify-between gap-2 border-b border-slate-200/60 pb-1.5 last:border-b-0 last:pb-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="font-bold text-slate-900 uppercase">${i(s)}:</span>
                    <span class="font-bold text-blue-700 tracking-wide font-mono select-all">${i(n)}</span>
                </div>
                <div class="text-[10.5px] text-slate-500 font-sans truncate max-w-[140px] text-right" title="${i(r)}">
                    a.n <span class="font-semibold text-slate-700">${i(r)}</span>
                </div>
            </div>`}).join("");if(f.store?.bankName&&(f.store?.bankAccount||f.store?.bankNumber)){const o=f.store.bankName,s=f.store.bankAccount||f.store.bankNumber,n=f.store.bankOwner||f.store.name||"Toko Putri";return`
        <div class="${e} flex items-center justify-between gap-2">
            <div class="flex items-center gap-1.5 flex-wrap">
                <span class="font-bold text-slate-900 uppercase">${i(o)}:</span>
                <span class="font-bold text-blue-700 tracking-wide font-mono select-all">${i(s)}</span>
            </div>
            <div class="text-[10.5px] text-slate-500 font-sans truncate max-w-[140px] text-right">
                a.n <span class="font-semibold text-slate-700">${i(n)}</span>
            </div>
        </div>`}return`
    <div class="text-[11px] text-slate-600 bg-slate-100 p-2 rounded-lg border border-slate-200">
        <p class="font-semibold text-slate-800"><i class="fa-solid fa-building-columns text-blue-600 mr-1"></i> Rekening Resmi Toko:</p>
        <p class="mt-0.5">Konfirmasi transfer via WhatsApp Resmi: <b class="font-mono text-emerald-600">${i(f.store?.wa||f.store?.phone||"-")}</b></p>
    </div>`},Qt=({docTitle:e,docNumber:t,docDate:a})=>`
    <div class="flex justify-between items-center border-b-2 border-slate-800 pb-2.5 mb-4 text-xs font-semibold select-none">
        <div class="flex items-center gap-2.5">
            ${be("w-8 h-8")}
            <div>
                <span class="font-black text-slate-900 uppercase text-xs sm:text-sm tracking-tight">${i(f.store?.name||"TOKO PUTRI")}</span>
                <span class="text-slate-300 mx-1.5">&bull;</span>
                <span class="font-bold text-slate-700 uppercase tracking-wider text-[11px]">${i(e)}</span>
            </div>
        </div>
        <div class="text-right font-mono text-slate-600 text-[11px]">
            ${t?`<span class="font-bold text-slate-900">${i(t)}</span> <span class="text-slate-400 mx-1">&bull;</span>`:""}
            <span>${i(a||"")}</span>
        </div>
    </div>
    `,Zt=(e,t,a)=>`
    <div class="a4-page-footer mt-auto pt-2.5 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono select-none">
        <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-700 uppercase">${i(f.store?.name||"TOKO PUTRI")}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-500">${i(a||"Dokumen Resmi")}</span>
        </div>
        <div class="flex items-center gap-1 font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
            <span>Halaman ${e} dari ${t}</span>
        </div>
    </div>
    `,fe=({docTitle:e,docNumber:t,docDate:a,kopHtml:o,metaHtml:s,tableHeaderHtml:n,rows:r=[],tableClass:l="w-full text-left border-collapse mb-4 text-xs",summaryHtml:d="",extraBlocksHtml:p="",signaturesHtml:x="",singlePageMax:w=6,itemsFirstPage:b=6,itemsMiddlePage:u=14,itemsLastPage:m=6})=>{const c=r.length;if(c<=w)return[`
        <div class="a4-page" data-page="1" data-total-pages="1">
            <div class="a4-page-body flex-1 flex flex-col">
                ${o}
                ${s||""}
                <table class="${l}">
                    <thead>${n}</thead>
                    <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${r.join("")}</tbody>
                </table>
                ${d||""}
                ${p||""}
                ${x||""}
            </div>
            ${Zt(1,1,e)}
        </div>
        `];const M=[],L=[],D=r.slice(0,b);L.push(D);let N=b;for(;N<c;){const h=c-N;if(h<=m)L.push(r.slice(N)),N=c;else{const v=Math.min(u,h);L.push(r.slice(N,N+v)),N+=v}}const y=L.length;return L.forEach((h,v)=>{const k=v+1,T=k===1,K=k===y;let I="";T?I=`
            ${o}
            ${s||""}
            <table class="${l}">
                <thead>${n}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${h.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${k+1}...
            </div>
            `:K?I=`
            ${Qt({docTitle:e,docNumber:t,docDate:a})}
            ${h.length>0?`
            <table class="${l}">
                <thead>${n}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${h.join("")}</tbody>
            </table>`:""}
            ${d||""}
            ${p||""}
            ${x||""}
            `:I=`
            ${Qt({docTitle:e,docNumber:t,docDate:a})}
            <table class="${l}">
                <thead>${n}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${h.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${k+1}...
            </div>
            `,M.push(`
        <div class="a4-page" data-page="${k}" data-total-pages="${y}">
            <div class="a4-page-body flex-1 flex flex-col">
                ${I}
            </div>
            ${Zt(k,y,e)}
        </div>
        `)}),M},fs=(e,t=null)=>{if(ke=e,e==="po"){const u=f.purchases||[],m=u.find(I=>String(I.id)===String(t))||(window.currentActivePoId?u.find(I=>String(I.id)===String(window.currentActivePoId)):u[0]);if(!m){typeof window.showToast=="function"&&window.showToast("Data PO tidak ditemukan!");return}oe("doc-modal-title","Preview Purchase Order (PO)");const c=be("w-16 h-16"),M=G(m.date||m.createdAt),L=m.poNumber||m.id,D=m.paymentType==="tempo"?`Tempo ${m.tempoDays||14} Hari (Jatuh Tempo: ${G(m.tempoDueDate)})`:m.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai",N=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${c}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(f.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(f.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(f.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(f.store?.wa||f.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">PURCHASE ORDER</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(L)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${M}</p>
                <p class="text-xs font-bold mt-1 text-[var(--color-primary)]">Status: ${m.status==="ordered"?"DIPESAN":m.status==="received"?"DITERIMA":"SELESAI"}</p>
            </div>
        </div>
        `,y=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Kepada Rekanan / Supplier:</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${i(m.supplierName||"Supplier")}</p>
                ${m.supplierPhone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(m.supplierPhone)}</p>`:""}
                ${m.supplierAddress?`<p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${i(m.supplierAddress)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan & Pembayaran:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Termin Pembayaran:</span> <b class="text-slate-900">${D}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tujuan Pengiriman:</span> <b class="text-slate-900">${i(f.store?.name||"Gudang Utama Toko")}</b></p>
                ${m.notes?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${i(m.notes)}</p>`:""}
            </div>
        </div>
        `,h=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Modal (HPP)</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `,v=(m.items||[]).map((I,A)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${A+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(I.name)}
                ${I.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(I.variantName)}</span>`:""}
                ${I.sku?`<span class="text-slate-400 text-[9.5px] font-mono block mt-0.5">SKU: ${i(I.sku)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${Yt(I.qty)} <span class="text-[10px] font-normal text-slate-500">${i(I.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${P(I.unitPrice)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${P(Math.round((parseFloat(I.qty)||0)*(parseFloat(I.unitPrice)||0)))}</td>
        </tr>
        `),k=`
        <div class="flex justify-end mb-6 mt-2">
            <div class="w-80 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk:</span><span class="font-bold text-slate-800">${P(m.subtotal)}</span></div>
                ${m.discount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Potongan Diskon:</span><span>-${P(m.discount)}</span></div>`:""}
                ${m.shippingFee>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim:</span><span>+${P(m.shippingFee)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL ORDER (PO):</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${P(m.total)}</span>
                </div>
            </div>
        </div>
        `,T=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-6 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Dipesan Oleh (Purchasing):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(f.store?.name||"Toko Putri")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Diterima &amp; Disetujui Oleh:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(m.supplierName||"Rekanan / Supplier")}</span>
            </div>
        </div>
        `,K=fe({docTitle:"Purchase Order",docNumber:`#${L}`,docDate:M,kopHtml:N,metaHtml:y,tableHeaderHtml:h,rows:v,summaryHtml:k,signaturesHtml:T,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});we(K);return}if(e==="stock_opname"){const u=f.stockOpnameHistory||[],m=u.find(A=>String(A.id)===String(t)||String(A.soNumber)===String(t))||u[0];if(!m){typeof window.showToast=="function"&&window.showToast("Data Berita Acara Stock Opname tidak ditemukan!");return}oe("doc-modal-title","Preview Berita Acara Stock Opname");const c=be("w-16 h-16"),M=G(m.date,!0),L=m.soNumber||m.id,D=typeof $t=="function"?$t():!1,N=m.items||[],y=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${c}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(f.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(f.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(f.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(f.store?.wa||f.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">BERITA ACARA</h2>
                <h3 class="font-bold text-sm tracking-wider text-amber-600 uppercase">STOCK OPNAME FISIK</h3>
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${i(L)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${M}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Auditor: <b class="text-slate-900">${i(m.auditorName||"Staf Auditor")}</b></p>
            </div>
        </div>
        `,h=`
        <div class="grid grid-cols-4 gap-3 mb-5">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Total Diperiksa</span>
                <span class="text-lg font-black text-slate-800 font-mono">${m.totalItemsAudited||0}</span>
                <span class="text-[10px] text-slate-500 block">Item Produk</span>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Item Selisih</span>
                <span class="text-lg font-black ${m.totalWithDiff>0?"text-amber-600":"text-emerald-600"} font-mono">${m.totalWithDiff||0}</span>
                <span class="text-[10px] text-slate-500 block">Disesuaikan</span>
            </div>
            <div class="bg-rose-50 p-3 rounded-xl border border-rose-200 text-center">
                <span class="text-[9px] font-black uppercase text-rose-500 block tracking-wider">Total Kurang (Loss)</span>
                <span class="text-lg font-black text-rose-600 font-mono">−${m.totalLossUnits||0}</span>
                <span class="text-[10px] text-rose-500 block">${D?"−"+P(m.totalLossRp||0):"Pcs"}</span>
            </div>
            <div class="bg-amber-50 p-3 rounded-xl border border-amber-200 text-center">
                <span class="text-[9px] font-black uppercase text-amber-600 block tracking-wider">Total Lebih (Surplus)</span>
                <span class="text-lg font-black text-amber-600 font-mono">+${m.totalSurplusUnits||0}</span>
                <span class="text-[10px] text-amber-600 block">${D?"+"+P(m.totalSurplusRp||0):"Pcs"}</span>
            </div>
        </div>
        `,v=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Hasil Fisik</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Selisih</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Alasan &amp; Keterangan</th>
            ${D?'<th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Dampak HPP</th>':'<th class="py-2.5 px-3 rounded-tr-xl text-right w-16">Satuan</th>'}
        </tr>
        `,k=N.length===0?['<tr><td colspan="7" class="py-8 text-center text-slate-500 italic">Semua stok fisik barang dalam kondisi berimbang (100% Sesuai / Selisih 0).</td></tr>']:N.map((A,S)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${S+1}</td>
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
                    ${A.diff<0?"−":"+"}${P(Math.abs(A.diffValueHpp||0))}
                </td>`:`
                <td class="py-2 px-3 text-right text-slate-500">${i(A.unit||"pcs")}</td>
            `}
        </tr>
        `),T=m.notes?`
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs mb-5 text-slate-700">
            <b class="text-slate-900">Catatan Auditor:</b> ${i(m.notes)}
        </div>`:"",K=`
        <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Pemeriksa / Auditor:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(m.auditorName||"Petugas Auditor")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Kepala Gudang / Kasir:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">Gudang Toko</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Mengetahui (Owner Toko):</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(f.store?.name||"Pimpinan")}</span>
            </div>
        </div>
        `,I=fe({docTitle:"Berita Acara Stock Opname",docNumber:`#${L}`,docDate:M,kopHtml:y,metaHtml:h,tableHeaderHtml:v,rows:k,extraBlocksHtml:T,signaturesHtml:K,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});we(I);return}if(e==="stock_opname_worksheet"){oe("doc-modal-title","Preview Lembar Kerja Hitung Fisik (Worksheet)");const u=be("w-14 h-14"),m=G(new Date),c=f.products||[],M=[];c.forEach(k=>{!k||k.id==null||(k.variants&&k.variants.length>0?k.variants.forEach(T=>{M.push({name:k.name,variantName:T.name,sku:T.sku||k.sku||"",category:k.category||"Umum",unit:k.unit||"pcs",systemStock:parseFloat(T.stock)||0})}):M.push({name:k.name,variantName:"",sku:k.sku||"",category:k.category||"Umum",unit:k.unit||"pcs",systemStock:parseFloat(k.stock)||0}))});const L=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3">
                ${u}
                <div>
                    <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${i(f.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${i(f.store?.slogan||"Pusat Alat Teknik & Bangunan")}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${i(f.store?.address||"")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-wider text-slate-900 uppercase">LEMBAR KERJA AUDIT</h2>
                <h3 class="font-bold text-xs tracking-widest text-amber-600 uppercase">STOCK OPNAME FISIK RAK</h3>
                <p class="text-xs font-medium text-slate-500 mt-1">Tanggal Cetak: <b>${m}</b></p>
                <p class="text-xs font-medium text-slate-500">Total Item: <b>${M.length} Baris</b></p>
            </div>
        </div>
        `,D=`
        <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[10px] text-slate-600 mb-4 flex items-center justify-between">
            <span><b>Petunjuk:</b> Hitung fisik barang di rak/gudang secara teliti. Tulis angka aktual pada kolom <b>HASIL FISIK</b> dan beri catatan bila ada barang rusak/cacat.</span>
        </div>
        `,N=`
        <tr class="border-b-2 border-slate-800 text-[9.5px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">Cek</th>
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">No</th>
            <th class="py-2 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi Varian</th>
            <th class="py-2 px-2 border-r border-slate-700 w-28">Kategori / Rak</th>
            <th class="py-2 px-2 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2 px-2 text-center w-28 border-r border-slate-700 bg-amber-900/60">HASIL FISIK</th>
            <th class="py-2 px-3 text-left w-36">Kondisi &amp; Catatan</th>
        </tr>
        `,y=M.map((k,T)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200"><span class="inline-block w-3.5 h-3.5 border border-slate-400 rounded-sm"></span></td>
            <td class="py-2 px-2 text-center font-mono text-slate-400 border-r border-slate-200">${T+1}</td>
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
        `),v=fe({docTitle:"Lembar Kerja Audit Rak",docNumber:`TOTAL ${M.length} ITEM`,docDate:m,kopHtml:L,metaHtml:D,tableHeaderHtml:N,rows:y,tableClass:"w-full text-left border-collapse mb-4 text-[11px]",signaturesHtml:`
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
        `,singlePageMax:16,itemsFirstPage:15,itemsMiddlePage:20,itemsLastPage:14});we(v);return}if(e==="tempo_invoice"){const u=t||window.cVOrd;let c=(window.cachedPiutangOrders||[]).find(B=>String(B.orderId)===String(u))||(window.gOrds||[]).find(B=>String(B.orderId)===String(u));if(!c&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(u)&&(c=window.lastPrintedOrder),!c){typeof window.showToast=="function"&&window.showToast("Data nota tagihan piutang tidak ditemukan!");return}oe("doc-modal-title","Preview Nota Tagihan Piutang (Tempo)");const M=be("w-16 h-16"),L=G(c.dateString||c.timestamp),D=parseFloat(c.payment?.tempoBalance)||0,N=c.payment?.tempoPenaltyRate!==void 0?parseFloat(c.payment.tempoPenaltyRate):1,y=c.payment?.tempoPenaltyStopped===!0;let h=0;const v=c.payment?.tempoDueDate||0;let k=0,T=0,K=!1,I=!1;const A=Date.now();v>0&&(A>v?(k=Math.floor((A-v)/(24*60*60*1e3)),k>0&&(K=!0)):(T=Math.ceil((v-A)/(24*60*60*1e3)),T<=3&&(I=!0))),y?h=parseFloat(c.payment?.tempoFixedPenalty)||0:K&&(h=N/100*D*k);const S=D+h,C=c.payment?.installments||[],H=C.reduce((B,me)=>B+(parseFloat(me.amount)||0),0),W=c.payment?.grandTotal||D+H,O=c.payment?.paymentStatus==="lunas"||D<=0,E=!!(c.payment?.isPaylater||c.isPaylater||c.payment?.subMethod==="paylater");let U=E?"PAYLATER BERJALAN":"TEMPO BERJALAN",ee="text-blue-600 bg-blue-50 border-blue-200";O?(U="LUNAS SEPENUHNYA",ee="text-emerald-600 bg-emerald-50 border-emerald-300"):K?(U=`TERLAMBAT ${k} HARI`,ee="text-rose-600 bg-rose-50 border-rose-300"):I&&(U=`JATUH TEMPO H-${T<=0?"0":T}`,ee="text-amber-600 bg-amber-50 border-amber-300");const te=wt("font-mono text-xs"),ae=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${M}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(f.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(f.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(f.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(f.store?.wa||f.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">${E?"NOTA PUTRI PAYLATER":"NOTA TAGIHAN PIUTANG"}</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(c.orderId)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tgl Transaksi: ${L}</p>
                <div class="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${ee}">
                    ${i(U)}
                </div>
            </div>
        </div>
        `,dt=`
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
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tanggal Jatuh Tempo:</span> <b class="text-slate-900 font-mono">${G(v)}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Sistem Pembayaran:</span> <b class="${E?"text-emerald-700 font-bold":"text-slate-900"} uppercase">${E?"Putri PayLater Member VIP":"Tempo / Bertahap"}</b></p>
                ${E?`<p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tenor Cicilan:</span> <b class="text-emerald-800 font-bold uppercase">${c.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":c.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)"}</b></p>`:""}
                ${K?`<p class="text-xs font-bold text-rose-600 mb-1"><span class="text-slate-500">Status:</span> Lewat ${k} Hari (Denda ${N}%/hari)</p>`:""}
                <p class="text-xs font-semibold text-slate-700"><span class="text-slate-500">Kasir / Admin:</span> <b class="text-slate-900 uppercase">${i(c.cashierName||"Kasir Toko")}</b></p>
            </div>
        </div>
        `,pe=`
        <tr class="border-b-2 border-slate-800 text-[10.5px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Satuan</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `,$e=(c.items||[]).map((B,me)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${me+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(B.name)}
                ${B.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(B.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${Yt(B.qty)} <span class="text-[10px] font-normal text-slate-500">${i(B.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${P(B.effectivePrice||B.price)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${P(B.subtotal||Math.round((parseFloat(B.qty)||0)*(parseFloat(B.effectivePrice||B.price)||0)))}</td>
        </tr>
        `);let ye="",se=0,Ee="-",ct=1;if(E&&Array.isArray(c.payment?.paylaterSchedule)&&c.payment.paylaterSchedule.length>0){let B=0,me=!1;const Aa=c.payment.paylaterSchedule.map((J,$a)=>{const Et=J.installmentIndex||J.installmentNo||J.installmentNumber||J.month||$a+1,Bt=parseFloat(J.pokok||J.principal)||0,Ht=parseFloat((J.adminFee||0)+(J.serviceFee||0))||0,mt=parseFloat(J.total||J.totalMonthly||J.totalInstallment)||Bt+Ht;B+=mt;const Ft=B,We=J.dueDate||0,Ut=J.dueDateFormatted||J.dueDateStr||(We?G(We):"-");let Je="";if(H>=Ft)Je='<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-300">✓ LUNAS</span>';else if(me)Je='<span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200">BULAN DEPAN</span>';else{me=!0,ct=Et;const Ma=Math.max(0,Ft-H);se=Math.min(Ma,mt),Ee=Ut,Je=We&&A>We?'<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 border border-rose-300">⚠️ JATUH TEMPO</span>':'<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">★ WAJIB BULAN INI</span>'}return`
                <tr class="hover:bg-slate-50">
                    <td class="py-2 px-3 text-center text-slate-800 font-bold">Bulan Ke-${Et}</td>
                    <td class="py-2 px-3 font-mono font-medium text-slate-700 text-center">${Ut}</td>
                    <td class="py-2 px-3 text-right text-slate-600 font-mono">${P(Bt)}</td>
                    <td class="py-2 px-3 text-right text-slate-500 font-mono">${P(Ht)}</td>
                    <td class="py-2 px-3 text-right font-black font-mono text-slate-900">${P(mt)}</td>
                    <td class="py-2 px-3 text-center">${Je}</td>
                </tr>`}).join("");ye=`
            <div class="mb-5">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                        <i class="fa-solid fa-calendar-check text-emerald-600"></i> Tabel Rencana Angsuran Bulanan (${c.payment?.paylaterMonths||1}x Tenor):
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
                        ${Aa}
                    </tbody>
                </table>
            </div>`}const Be=`
        ${ye}
        ${C.length>0?`
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
                    ${C.map((B,me)=>`
                    <tr class="hover:bg-slate-50">
                        <td class="py-1.5 px-3 text-center text-slate-500">${me+1}</td>
                        <td class="py-1.5 px-3 text-slate-700">${G(B.date)}</td>
                        <td class="py-1.5 px-3 uppercase text-slate-600 font-bold">${i(B.method||"Tunai")}</td>
                        <td class="py-1.5 px-3 text-right font-bold text-emerald-600">+ ${P(B.amount)}</td>
                        <td class="py-1.5 px-3 text-slate-500 text-[11px] font-sans">${i(B.note||"-")}</td>
                    </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>`:""}
        `,Ge=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran Toko Putri:
                </h4>
                <div class="space-y-1.5 pt-0.5">${te}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi bukti transfer: <b>${i(f.store?.wa||f.store?.phone||"-")}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Harap mencantumkan Nomor Nota (#${i(c.orderId)}) pada berita transfer.</p>
                </div>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Awal:</span><span class="font-bold text-slate-800">${P(W)}</span></div>
                ${E?`<div class="flex justify-between text-emerald-600 font-bold"><span>Limit PayLater Terpakai:</span><span>${P(c.payment?.paylaterUsed||W-(c.payment?.tempoDp||c.payment?.dp||0))}</span></div>`:""}
                ${E&&c.payment?.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater:</span><span class="font-bold">+${P(c.payment.paylaterAdminFee)}</span></div>`:""}
                ${E&&c.payment?.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan:</span><span class="font-bold">+${P(c.payment.paylaterServiceFee)}</span></div>`:""}
                ${(parseFloat(c.payment?.tempoDp||c.payment?.dp)||0)>0?`<div class="flex justify-between text-slate-600"><span>Uang Muka (DP Dibayar):</span><span class="font-bold">${P(c.payment?.tempoDp||c.payment?.dp||0)}</span></div>`:""}
                ${H>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Masuk:</span><span>-${P(H)}</span></div>`:""}
                
                ${E&&se>0&&se<D?`
                <!-- KOTAK HIGHLIGHT ANGSURAN BULAN INI -->
                <div class="p-2.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 space-y-0.5">
                    <div class="flex justify-between items-center text-[9.5px] font-black uppercase tracking-wider text-amber-800">
                        <span>Angsuran Bulan Ini (Termin Ke-${ct}):</span>
                        <span class="font-mono text-[9px] bg-amber-200/80 px-1.5 py-0.5 rounded">Jatuh Tempo: ${Ee}</span>
                    </div>
                    <div class="flex justify-between items-center text-sm font-black font-mono pt-0.5">
                        <span>Wajib Dibayar Sekarang:</span>
                        <span class="text-amber-900 text-base font-black">${P(se)}</span>
                    </div>
                </div>
                <div class="flex justify-between text-slate-500 text-[11px]">
                    <span>Sisa Termin Bulan Berikutnya:</span>
                    <span class="font-mono font-bold">${P(Math.max(0,D-se))}</span>
                </div>
                `:""}

                <div class="flex justify-between text-slate-700 font-bold"><span>${E?"Total Sisa Pokok (Semua Tenor):":"Sisa Pokok Piutang:"}</span><span>${P(D)}</span></div>
                ${h>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Denda Keterlambatan:</span><span>+${P(h)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>${E?"TOTAL PELUNASAN PENUH:":"SISA WAJIB BAYAR:"}</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${P(O?0:S)}</span>
                </div>
            </div>
        </div>
        `,Ve=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Yang Berhutang (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(c.customer?.name||"Pelanggan")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Kasir Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(f.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,pt=fe({docTitle:E?"Nota Putri PayLater":"Nota Tagihan Piutang",docNumber:`#${c.orderId}`,docDate:L,kopHtml:ae,metaHtml:dt,tableHeaderHtml:pe,rows:$e,extraBlocksHtml:Be,summaryHtml:Ge,signaturesHtml:Ve,singlePageMax:5,itemsFirstPage:5,itemsMiddlePage:12,itemsLastPage:4});we(pt);return}if(e==="tempo_customer_ledger"){const u=String(t||"").trim(),c=(window.cachedPiutangOrders||[]).filter(U=>{const ee=String(U.customer?.phone||U.customer?.wa||"").replace(/\D/g,""),te=String(U.customer?.name||"").toLowerCase().trim(),ae=u.replace(/\D/g,"");return!!(ae.length>=8&&ee.includes(ae)||te&&u.toLowerCase().includes(te))});if(c.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada nota piutang aktif untuk pelanggan ini.");return}const M=c[0].customer||{},L=M.name||"Pelanggan",D=M.wa||M.phone||"-";oe("doc-modal-title",`Kartu Piutang: ${L}`);const N=be("w-16 h-16"),y=G(Date.now());let h=0,v=0,k=0,T=0,K=0;const I=c.map((U,ee)=>{const te=parseFloat(U.payment?.tempoBalance)||0,ae=U.payment?.tempoPenaltyRate!==void 0?parseFloat(U.payment.tempoPenaltyRate):1,dt=U.payment?.tempoPenaltyStopped===!0;let pe=0;const $e=U.payment?.tempoDueDate||0;let ye=0,se=!1;const Ee=Date.now();$e>0&&Ee>$e&&(ye=Math.floor((Ee-$e)/(24*60*60*1e3)),ye>0&&(se=!0)),dt?pe=parseFloat(U.payment?.tempoFixedPenalty)||0:se&&(pe=ae/100*te*ye);const Be=(U.payment?.installments||[]).reduce((pt,B)=>pt+(parseFloat(B.amount)||0),0),Ge=U.payment?.grandTotal||te+Be,Ve=te+pe;return h+=Ge,v+=Be,k+=te,T+=pe,K+=Ve,`
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="py-2.5 px-3 text-center font-mono text-slate-500">${ee+1}</td>
                <td class="py-2.5 px-3 font-mono font-bold text-slate-800">#${i(U.orderId)}</td>
                <td class="py-2.5 px-3 font-medium text-slate-600">${G(U.dateString||U.timestamp)}</td>
                <td class="py-2.5 px-3 font-mono ${se?"text-rose-600 font-bold":"text-slate-700"}">${G($e)} ${se?`<span class="text-[9.5px] text-rose-500">(+${ye}h)</span>`:""}</td>
                <td class="py-2.5 px-3 text-right font-mono text-slate-600">${P(Ge)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-600 font-bold">${P(Be)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-rose-600">${pe>0?P(pe):"-"}</td>
                <td class="py-2.5 px-3 text-right font-mono font-black text-slate-900">${P(Ve)}</td>
            </tr>
            `}),A=wt("font-mono text-xs"),S=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${N}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(f.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(f.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(f.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(f.store?.wa||f.store?.phone||"-")}</p>
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
        `,C=`
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Informasi Debitur / Pelanggan:</h3>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="text-[11px] text-slate-500">Nama Pelanggan / Badan:</p>
                    <p class="font-bold text-base text-slate-900 uppercase">${i(L)}</p>
                </div>
                <div>
                    <p class="text-[11px] text-slate-500">Nomor WhatsApp / HP:</p>
                    <p class="font-mono font-bold text-base text-emerald-600">+${i(D)}</p>
                </div>
            </div>
        </div>
        `,H=`
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
        `,W=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Transfer Resmi Pelunasan:
                </h4>
                <div class="space-y-1 pt-0.5">${A}</div>
                <p class="text-[9.5px] text-slate-500 pt-1.5 border-t border-slate-200">Kartu piutang ini mencatat seluruh tagihan aktif per tanggal cetak.</p>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Keseluruhan:</span><span class="font-bold text-slate-800">${P(h)}</span></div>
                <div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Diterima (-):</span><span>-${P(v)}</span></div>
                <div class="flex justify-between text-slate-700 font-bold"><span>Total Sisa Pokok Piutang:</span><span>${P(k)}</span></div>
                ${T>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Total Denda (+):</span><span>+${P(T)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL AKUMULASI PIUTANG:</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${P(K)}</span>
                </div>
            </div>
        </div>
        `,O=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Penerima Tagihan (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(L)}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Pemilik Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(f.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,E=fe({docTitle:"Kartu Piutang Pelanggan",docNumber:"STATEMENT OF ACCOUNT",docDate:y,kopHtml:S,metaHtml:C,tableHeaderHtml:H,rows:I,summaryHtml:W,signaturesHtml:O,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});we(E);return}const a=t||window.cVOrd,o=(window.gOrds||[]).find(u=>String(u.orderId)===String(a))||(window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(a)?window.lastPrintedOrder:null);if(!o){typeof window.showToast=="function"&&window.showToast("Data pesanan tidak ditemukan!");return}oe("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const s=o.dateString?new Date(o.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"",r=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${be("w-16 h-16")}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(f.store?.name||"TOKO PUTRI")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(f.store?.slogan||"General Supplier")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(f.store?.address||"Alamat fisik toko")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(f.store?.wa||"-")}</p>
                ${o.payment?.taxNpwp||f.store?.taxNpwp?`<p class="text-xs font-semibold text-slate-600 mt-0.5"><i class="fa-solid fa-id-card text-blue-500"></i> NPWP Toko: <span class="font-mono">${i(o.payment?.taxNpwp||f.store.taxNpwp)}</span></p>`:""}
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl sm:text-3xl tracking-widest ${e==="invoice"?"text-blue-600":"text-amber-600"} uppercase">${e==="invoice"?o.payment?.method==="tempo"?"PROFORMA INVOICE":"INVOICE":"SURAT JALAN"}</h2>
            <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(o.orderId)}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${s}</p>
        </div>
    </div>
    `,l=`
    <div class="grid grid-cols-2 gap-6 mb-5">
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ditagihkan Kepada (Pemesan):</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-0.5">${i(o.customer?.name||"Guest")}${o.customer?.wa?` <span class="text-xs font-mono font-medium text-slate-500">(+${i(o.customer.wa)})</span>`:""}</p>
            <p class="text-xs font-medium text-slate-700 leading-relaxed mb-1">${i(o.customer?.address||"-")}</p>
            ${o.isDropPoint&&o.dropPoint?`
            <div class="mt-2 pt-2 border-t border-rose-200 bg-rose-50/80 p-2.5 rounded-xl border border-dashed text-left">
                <div class="flex items-center gap-1.5 text-rose-700 font-bold text-[11px] uppercase tracking-wider mb-0.5">
                    <i class="fa-solid fa-location-dot"></i> Pengantaran ke Lokasi Berbeda (Drop-Point):
                </div>
                <p class="font-bold text-xs text-slate-900 uppercase">${i(o.dropPoint.name||"-")}${o.dropPoint.wa?` <span class="font-mono text-[11px] font-semibold text-rose-600">(+${i(o.dropPoint.wa)})</span>`:""}</p>
                <p class="text-[11px] font-medium text-slate-700 mt-0.5 leading-relaxed">${i(o.dropPoint.address||"-")}</p>
            </div>
            `:""}
            ${o.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-xl border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky"></i> Catatan: ${i(o.customer.note)}</p>`:""}
        </div>
        
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-center space-y-2.5">
            <div class="flex justify-between items-center border-b border-slate-200 pb-1.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Metode Pengiriman</span>
                <span class="text-xs font-bold text-slate-800 uppercase">${i(o.isDropPoint?"Drop-Point (Lokasi Berbeda)":o.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko")}</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-200 pb-1.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Sistem Pembayaran</span>
                <span class="text-xs font-bold text-slate-800 uppercase">${i(o.payment?.method||"cash")}</span>
            </div>
            <div class="flex justify-between items-center pb-0.5">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Bayar</span>
                <span class="text-xs font-bold ${o.status==="Selesai"?"text-emerald-600":"text-rose-600"} uppercase">${o.status==="Selesai"?"LUNAS":"BELUM LUNAS"}</span>
            </div>
        </div>
    </div>
    `,d=Array.isArray(o.items)?o.items:Array.isArray(o.cart)?o.cart:[];if(e==="invoice"){const u=`
        <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
            <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Produk &amp; Varian</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Sat.</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total</th>
        </tr>
        `,m=d.map((y,h)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${h+1}</td>
            <td class="py-2.5 px-3 font-bold flex items-center gap-1.5">
                ${i(y.name)} 
                ${y.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${i(y.variantName)}</span>`:""}
                ${y.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${i(y.colorCode)};"></span>`:""}
                ${y.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${i(y.poTime)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${parseFloat(y.qty)} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(y.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${P(y.effectivePrice)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${P(y.effectivePrice*parseFloat(y.qty))}</td>
        </tr>
        `);let c="";if((o.pointsEarned>0||o.finalMemberPoints!==void 0&&o.finalMemberPoints!==null)&&(c+=`
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 flex items-center gap-4">
                <div class="w-8 h-8 rounded-lg bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
                ${o.pointsEarned>0?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-sm text-amber-700">+${o.pointsEarned}</p></div>`:""}
                ${o.finalMemberPoints!==void 0&&o.finalMemberPoints!==null?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Member</p><p class="font-bold text-sm text-amber-700">${o.finalMemberPoints}</p></div>`:""}
            </div>`),o.claimedReward&&(c+=`
            <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-3 mb-4 flex items-center justify-between gap-4">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                    <div>
                        <p class="text-[9px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${o.claimedReward.pointsCost} Poin)</p>
                        <p class="font-bold text-xs text-violet-800 uppercase">${i(o.claimedReward.name)}</p>
                    </div>
                </div>
                <span class="text-[9.5px] font-bold px-2.5 py-1 rounded-lg bg-violet-600 text-white uppercase tracking-wider">${i(o.claimedReward.status==="ready"?"SERTAKAN PENGIRIMAN":"KLAIM RESMI")}</span>
            </div>`),o.payment?.method==="tempo")if(!!(o.payment?.isPaylater||o.isPaylater||o.payment?.subMethod==="paylater")){const h=o.payment?.paylaterMonths||1,v=o.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":o.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)",k=Array.isArray(o.payment?.paylaterSchedule)&&o.payment.paylaterSchedule.length>0;let T="";if(k){Math.max(0,parseFloat(o.payment?.tempoBalance)||0);const I=(o.payment?.installments||[]).reduce((C,H)=>C+(parseFloat(H.amount)||0),0);let A=0,S=!1;T=`
                    <div class="mt-2.5 pt-2 border-t border-emerald-300/60">
                        <div class="flex items-center justify-between mb-1.5">
                            <p class="text-[9.5px] font-black uppercase tracking-wider text-emerald-900 flex items-center gap-1">
                                <i class="fa-solid fa-calendar-check text-emerald-700"></i> Jadwal Angsuran Bulanan (${o.payment?.paylaterMonths||1}x Tenor):
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
                                ${o.payment.paylaterSchedule.map((C,H)=>{const W=C.installmentIndex||C.installmentNo||C.installmentNumber||C.month||H+1,O=parseFloat(C.pokok||C.principal)||0,E=parseFloat((C.adminFee||0)+(C.serviceFee||0))||0,U=parseFloat(C.total||C.totalMonthly||C.totalInstallment)||O+E;A+=U;const ee=C.dueDate||0,te=C.dueDateFormatted||C.dueDateStr||(ee?G(ee):"-");let ae="";return I>=A?ae='<span class="px-1.5 py-0.2 rounded text-[8px] font-bold uppercase bg-emerald-100 text-emerald-700 border border-emerald-300">✓ LUNAS</span>':S?ae='<span class="px-1.5 py-0.2 rounded text-[8px] font-medium uppercase bg-slate-100 text-slate-500">MENDATANG</span>':(S=!0,ae='<span class="px-1.5 py-0.2 rounded text-[8px] font-black uppercase bg-amber-100 text-amber-800 border border-amber-300">★ BULAN INI</span>'),`
                                    <tr>
                                        <td class="py-1 px-2 font-bold text-slate-800 text-center font-sans">Bulan Ke-${W}</td>
                                        <td class="py-1 px-2 text-slate-600 text-center">${te}</td>
                                        <td class="py-1 px-2 text-right text-slate-600">${P(O)}</td>
                                        <td class="py-1 px-2 text-right text-slate-500">${P(E)}</td>
                                        <td class="py-1 px-2 font-black text-right text-emerald-800">${P(U)}</td>
                                        <td class="py-1 px-2 text-center font-sans">${ae}</td>
                                    </tr>`}).join("")}
                            </tbody>
                        </table>
                    </div>`}c+=`
                <div class="mb-4 border border-emerald-200 bg-emerald-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-emerald-800 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-handshake text-emerald-600 mr-1"></i> Putri PayLater (${v}):</h4>
                    <p class="text-[9.5px] text-emerald-700 font-semibold leading-relaxed">
                        Sistem pembayaran cicilan resmi Toko Putri tanpa biaya tersembunyi. Jatuh Tempo Pertama: ${o.payment.tempoDueDate?G(o.payment.tempoDueDate):"-"}.
                        ${o.payment.paylaterMonthlyInstallment?` Angsuran: <b>${P(o.payment.paylaterMonthlyInstallment)} / bulan</b> (${h}x).`:""}
                    </p>
                    ${T}
                </div>`}else c+=`
                <div class="mb-4 border border-pink-200 bg-pink-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-pink-700 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo:</h4>
                    <p class="text-[9.5px] text-pink-600 font-semibold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${o.payment.tempoDueDate?G(o.payment.tempoDueDate):"-"}). Keterlambatan dikenakan denda sesuai regulasi toko.</p>
                </div>`;const L=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran Toko Putri:
                </h4>
                <div class="space-y-1.5 pt-0.5">${wt("font-mono text-xs")}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi pembayaran via WhatsApp: <b>${i(f.store?.wa||f.store?.phone||"-")}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Terima kasih atas transaksi Anda di ${i(f.store?.name||"Toko Putri")}.</p>
                </div>
            </div>

            ${(()=>{const y=_e(o);return`
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                    <div class="flex justify-between text-slate-600"><span>Subtotal Produk</span><span class="font-mono">${P(y.subtotal)}</span></div>
                    ${y.shipping>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim</span><span class="font-mono">${P(y.shipping)}</span></div>`:""}
                    ${y.shippingDiscount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Ongkir</span><span class="font-mono">-${P(y.shippingDiscount)}</span></div>`:""}
                    ${y.productDiscount>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Diskon Produk</span><span class="font-mono">-${P(y.productDiscount)}</span></div>`:""}
                    ${y.pointDiscount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Poin Reward</span><span class="font-mono">-${P(y.pointDiscount)}</span></div>`:""}
                    ${y.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater</span><span class="font-mono">+${P(y.paylaterAdminFee)}</span></div>`:""}
                    ${y.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan</span><span class="font-mono">+${P(y.paylaterServiceFee)}</span></div>`:""}
                    ${y.hasPpn?`
                    <div class="flex justify-between text-slate-600"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-mono">${P(y.dppAmount)}</span></div>
                    <div class="flex justify-between text-amber-600 font-bold"><span>${y.ppnLabel}</span><span class="font-mono">${y.ppnAmount>0?(y.isInclusive?"":"+")+P(y.ppnAmount):"Rp 0"}</span></div>
                    `:""}
                    
                    <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-2 shadow-xs">
                        <span class="font-bold text-xs uppercase tracking-widest">Grand Total</span>
                        <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${P(y.grandTotal)}</span>
                    </div>
                `})()}
                ${o.payment?.method==="tempo"?`
                <div class="flex justify-between text-emerald-600 font-bold"><span>${o.payment?.isPaylater||o.payment?.subMethod==="paylater"?"Limit Terpakai / DP":"Uang Muka (DP)"}</span><span class="font-mono">${P(o.payment?.tempoDp||0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-2.5 rounded-xl mt-1 border border-rose-200">
                    <span class="font-bold text-xs uppercase tracking-widest">${o.payment?.isPaylater||o.payment?.subMethod==="paylater"?"Sisa Tagihan PayLater":"Sisa Tagihan"}</span>
                    <span class="font-mono text-sm font-black tracking-tight">${P(o.payment?.tempoBalance||0)}</span>
                </div>
                ${(o.payment?.isPaylater||o.payment?.subMethod==="paylater")&&o.payment?.paylaterMonthlyInstallment?`
                <div class="flex justify-between text-[11px] text-emerald-700 font-bold">
                    <span>Angsuran per Bulan (${o.payment?.paylaterMonths||1}x)</span>
                    <span class="font-mono font-black">${P(o.payment.paylaterMonthlyInstallment)}/bln</span>
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
                <span class="font-bold text-slate-900">${i(o.customer?.name||"Nama Terang & TTD")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Sopir / Pengantar:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900">Nama Terang &amp; TTD</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Hormat Kami:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(f.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,N=fe({docTitle:o.payment?.method==="tempo"?"Proforma Invoice":"Faktur Invoice",docNumber:`#${o.orderId}`,docDate:s,kopHtml:r,metaHtml:l,tableHeaderHtml:u,rows:m,extraBlocksHtml:c,summaryHtml:L,signaturesHtml:D,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:12,itemsLastPage:5});we(N);return}const p=`
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Nama &amp; Spesifikasi Barang</th>
        <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Satuan</th>
        <th class="py-2.5 px-3 rounded-tr-xl text-center w-24">Ceklis Gudang</th>
    </tr>
    `,x=d.map((u,m)=>`
    <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3 text-center font-mono text-slate-500">${m+1}</td>
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
    `),w=`
    <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Penerima / Klien:</span>
            <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">${i(o.customer?.name||"Nama Terang & TTD")}</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Sopir / Pengantar:</span>
            <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">Nama Terang &amp; TTD</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Hormat Kami:</span>
            <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900 uppercase">${i(f.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,b=fe({docTitle:"Surat Jalan Pengiriman",docNumber:`#${o.orderId}`,docDate:s,kopHtml:r,metaHtml:l,tableHeaderHtml:p,rows:x,signaturesHtml:w,singlePageMax:8,itemsFirstPage:8,itemsMiddlePage:16,itemsLastPage:9});we(b)},ws=()=>{const e=window.cart||[];if(!e||e.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}ke="sph";const t="SPH-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.floor(1e3+Math.random()*9e3),a=G(new Date),o=G(new Date(Date.now()+14*24*60*60*1e3));oe("doc-modal-title","Surat Penawaran Harga (SPH)");const s=be("w-16 h-16"),n=typeof window.getEffP=="function"?window.getEffP:c=>c.price||0;let r=0;const l=e.map((c,M)=>{const L=parseFloat(c.qty)||1,D=n(c),N=L*D;return r+=N,`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${M+1}</td>
            <td class="py-2.5 px-3 font-bold">
                ${i(c.name)}
                ${c.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${i(c.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${L} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(c.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${P(D)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${P(N)}</td>
        </tr>
        `}),d=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${s}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(f.store?.name||"Toko Putri")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(f.store?.slogan||"General Supplier & Alat Teknik")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(f.store?.address||"Alamat fisik toko")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(f.store?.wa||"-")}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl tracking-widest text-emerald-600 uppercase">PENAWARAN HARGA</h2>
            <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${t}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${a}</p>
            <span class="inline-block mt-1 px-2.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-300 rounded text-[10px] font-bold uppercase tracking-wider">
                Berlaku s/d: ${o}
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
    `,x=`
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Barang &amp; Spesifikasi</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
        <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Satuan</th>
        <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total Estimasi</th>
    </tr>
    `,w=`
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
            <span class="font-bold text-slate-900 uppercase">${i(f.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,m=fe({docTitle:"Surat Penawaran Harga",docNumber:`#${t}`,docDate:a,kopHtml:d,metaHtml:p,tableHeaderHtml:x,rows:l,summaryHtml:w,extraBlocksHtml:b,signaturesHtml:u,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:5});we(m)},we=e=>{const t=g("doc-paper-content");if(!t)return;t.innerHTML=e.join("");const a=e.length,o=g("doc-page-count-badge");o&&(o.textContent=`${a} Halaman A4`),bs(a)},bs=(e=1)=>{const t=g("doc-preview-modal"),a=g("doc-preview-modal-box");t&&t.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),at(t,a),Rt()},Rt=()=>{const e=g("doc-paper-scroll-area"),t=g("doc-paper-content"),a=g("doc-paper-wrapper");if(!e||!t||!a)return;const o=794,s=window.innerWidth<640?12:32,n=e.clientWidth-s,r=Math.min(1,Math.max(.2,n/o));t.style.transform=`translateX(-50%) scale(${r})`;const l=t.offsetHeight||t.scrollHeight;a.style.height=l*r+48+"px"};window.addEventListener("resize",()=>{const e=g("doc-preview-modal");e&&!e.classList.contains("hidden")&&Rt()});const gs=(e=!1)=>{const t=g("doc-preview-modal"),a=g("doc-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{Se(t,a)}):Se(t,a))},xs=()=>{const e=g("doc-paper-content"),t=e?e.innerHTML:"";if(!t){typeof window.showToast=="function"&&window.showToast("Tidak ada dokumen yang dicetak!");return}if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){let n=g("a4-print-section");n||(n=document.createElement("div"),n.id="a4-print-section",document.body.appendChild(n)),n.innerHTML=t,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500);return}const a=window.open("","_blank"),s=`<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>${i(ke==="invoice"?"Faktur Invoice":ke==="po"?"Purchase Order":ke==="sph"?"Penawaran Harga":ke==="stock_opname"?"Berita Acara Stock Opname":"Dokumen Resmi A4")} - Cetak A4 Standar Presisi</title>
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
</html>`;if(!a){let n=document.getElementById("a4-print-fallback-iframe");n||(n=document.createElement("iframe"),n.id="a4-print-fallback-iframe",n.style.position="fixed",n.style.right="0",n.style.bottom="0",n.style.width="0",n.style.height="0",n.style.border="0",n.style.opacity="0",document.body.appendChild(n));const r=n.contentWindow.document;r.open(),r.write(s),r.close(),setTimeout(()=>{try{n.contentWindow.focus(),n.contentWindow.print()}catch(l){console.warn("[DocPrint] Fallback iframe print error:",l)}},650);return}a.document.open(),a.document.write(s),a.document.close()},hs=async e=>{if(!Sa){ft(!0),Ze(e==="image"?"Membuat Gambar HD...":"Menyusun Dokumen PDF A4...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{bt(),ft(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const t=g("doc-paper-content");if(!t)throw new Error("Elemen dokumen tidak ditemukan.");let a=Array.from(t.querySelectorAll(".a4-page"));a.length===0&&(a=[t]);const o=window.cVOrd||Date.now().toString(36).toUpperCase(),s=`${ke.toUpperCase()}_${o}`,n=async r=>{const l=document.createElement("div");l.style.position="fixed",l.style.top="-9999px",l.style.left="-9999px",l.style.width="794px",l.style.height="1123px",l.style.backgroundColor="#ffffff",l.style.overflow="hidden",l.style.zIndex="-9999";const d=r.cloneNode(!0);d.style.margin="0 auto",d.style.boxShadow="none",d.style.border="none",d.style.borderRadius="0",d.style.transform="none",d.style.width="794px",d.style.height="1123px",d.style.minHeight="1123px",d.style.maxHeight="1123px",d.style.overflow="hidden",l.appendChild(d),document.body.appendChild(l);const p=Array.from(d.querySelectorAll("img"));await Promise.all(p.map(w=>w.complete?Promise.resolve():new Promise(b=>{w.addEventListener("load",b,{once:!0}),w.addEventListener("error",b,{once:!0})}))),await new Promise(w=>setTimeout(w,200));const x=await html2canvas(l,{scale:2,useCORS:!0,backgroundColor:"#ffffff",width:794,height:1123,windowWidth:794,windowHeight:1123});return document.body.removeChild(l),x};if(e==="image")if(a.length===1){const l=(await n(a[0])).toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(l,`${s}.png`,"image/png");else{const d=document.createElement("a");d.download=`${s}.png`,d.href=l,d.click()}typeof window.showToast=="function"&&window.showToast("Gambar A4 Presisi Berhasil Disimpan!")}else{for(let r=0;r<a.length;r++){Ze(`Menyimpan Gambar Halaman ${r+1} dari ${a.length}...`);const d=(await n(a[r])).toDataURL("image/png",1),p=`${s}_Hal_${r+1}.png`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(d,p,"image/png");else{const x=document.createElement("a");x.download=p,x.href=d,x.click()}await new Promise(x=>setTimeout(x,250))}typeof window.showToast=="function"&&window.showToast(`Berhasil menyimpan ${a.length} gambar halaman A4!`)}else{const r=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,l=new r({orientation:"portrait",unit:"mm",format:"a4"});for(let d=0;d<a.length;d++){Ze(`Menyusun PDF Hal ${d+1} dari ${a.length}...`);const x=(await n(a[d])).toDataURL("image/jpeg",.95);d>0&&l.addPage("a4","portrait"),l.addImage(x,"JPEG",0,0,210,297,void 0,"FAST")}window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"?window.AndroidNativeApp.saveOrShareFile(l.output("datauristring"),`${s}.pdf`,"application/pdf"):l.save(`${s}.pdf`),typeof window.showToast=="function"&&window.showToast(`File PDF Standar A4 (${a.length} Halaman) Berhasil Disimpan!`)}}catch(t){console.error("Export Error: ",t),typeof window.showToast=="function"&&window.showToast(t&&t.message?`Gagal: ${t.message}`:"Gagal memproses dokumen.")}finally{bt(),ft(!1)}}};window.openDocPreview=fs;window.openCartSPHPreview=ws;window.fitDocPreview=Rt;window.closeDocPreviewModal=gs;window.printDocA4=xs;window.exportDocFile=hs;export{_a as $,$o as A,As as B,Ao as C,oe as D,mn as E,yo as F,ta as G,bn as H,Po as I,pn as J,ge as K,Ya as L,Qa as M,Co as N,to as O,Js as P,qs as Q,zs as R,q as S,ko as T,qa as U,Ga as V,Fs as W,Fa as X,Ka as Y,ja as Z,Ua as _,f as a,Ha as a$,za as a0,Is as a1,Os as a2,Rs as a3,Es as a4,Bs as a5,Hs as a6,ot as a7,la as a8,cn as a9,_e as aA,un as aB,Qs as aC,da as aD,Lo as aE,no as aF,lo as aG,an as aH,Vo as aI,qo as aJ,Zs as aK,js as aL,_ as aM,$t as aN,ro as aO,Ms as aP,Cs as aQ,Y as aR,Uo as aS,fn as aT,wn as aU,Ps as aV,ln as aW,Ae as aX,po as aY,Ss as aZ,$s as a_,dn as aa,Na as ab,So as ac,Oa as ad,Ta as ae,Re as af,qe as ag,V as ah,ps as ai,ao as aj,sn as ak,oo as al,nn as am,so as an,rn as ao,co as ap,ie as aq,cs as ar,Xt as as,on as at,Ks as au,io as av,en as aw,Pe as ax,gn as ay,jt as az,ia as b,Us as b0,Va as b1,Wa as b2,Ja as b3,Za as b4,Xa as b5,eo as b6,Ys as b7,mo as b8,Ts as b9,Ns as ba,_s as bb,Gs as bc,Vs as bd,Ws as be,tn as bf,At as bg,ds as bh,us as bi,ea as c,Ra as d,g as e,P as f,To as g,ra as h,i,Xs as j,ne as k,Ze as l,Mo as m,bt as n,at as o,Ea as p,re as q,st as r,na as s,j as t,Te as u,Se as v,Ls as w,Ds as x,Ba as y,tt as z};
