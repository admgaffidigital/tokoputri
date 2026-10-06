const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js","assets/module-pos-C-r0Icpo.js"])))=>i.map(i=>d[i]);
import{f as Le}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const Aa="modulepreload",$a=function(e){return"/"+e},Ht={},Yt=function(t,a,s){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");n=Promise.allSettled(a.map(d=>{if(d=$a(d),d in Ht)return;Ht[d]=!0;const p=d.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${g}`))return;const b=document.createElement("link");if(b.rel=p?"stylesheet":Aa,p||(b.as="script"),b.crossOrigin="",b.href=d,l&&b.setAttribute("nonce",l),document.head.appendChild(b),p)return new Promise((w,m)=>{b.addEventListener("load",w),b.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return n.then(r=>{for(const l of r||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},Ma={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const Ca=typeof window<"u"&&window.FIREBASE_CONFIG?window.FIREBASE_CONFIG:Ma;Le.apps.length||Le.initializeApp(Ca);const re=Le.firestore(),et=Le.auth();typeof window<"u"&&(window.firebase=Le,window.db=re,window.auth=et);try{re.settings({ignoreUndefinedProperties:!0,experimentalAutoDetectLongPolling:!0,merge:!0})}catch{}typeof window<"u"&&(window.addEventListener("online",()=>{try{re.enableNetwork().catch(()=>{})}catch{}}),window.addEventListener("offline",()=>{try{re.disableNetwork().catch(()=>{})}catch{}}));let La=null;const yn=()=>{Yt(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{La=Le.analytics()}catch{}}).catch(()=>{})},ie="K2ijSERTT2dg27yYGTEgn6XHSnW2",Da={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"pill",brandStyle:"logo",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showHeroSlide:!0,heroMascotImg:"/putri_mascot_anim.gif",heroBadgeText:"Siap Melayani",heroWelcomeTag:"SELAMAT DATANG",heroTitle:"",heroSubtitle:"",showRewardCatalog:!0,showScrollTopButton:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,paylater:{enabled:!0,minOrder:2e4,maxOrder:1e7,noticeText:"Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.",tenors:{"30d":{enabled:!0,label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:"flat",adminFeeValue:0,serviceFeeType:"flat",serviceFeeValue:0},"2m":{enabled:!0,label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:"flat",adminFeeValue:1500,serviceFeeType:"percent",serviceFeeValue:1.5},"3m":{enabled:!0,label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:"flat",adminFeeValue:2500,serviceFeeType:"percent",serviceFeeValue:2.5}}},terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},subscription:{status:"active",plan:"pro_managed",expiresAt:null,allowGraceDays:7,storeCode:"PUTRI",clientName:"Pemilik Toko",developerContact:"6281234567890",developerName:"Developer / Technical Partner"},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],productOrder:[],suppliers:[],purchases:[],expenses:[],stockOpnameHistory:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let f=JSON.parse(JSON.stringify(Da)),Qt=[],Zt=[],K=[];try{const e=localStorage.getItem("freshmart_cart");e&&(Qt=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(Zt=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(K=JSON.parse(e)||[])}catch{}let Na={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},Ia=null,Ra=null,Oa=null,Ea="Semua Produk",Ba="Semua Jenis",Ha="Semua Merek",Fa="",Ua="newest",ja="grid",Ka=1,_a=12,za="orders",qa="",Ga=null,Wa=null,Va=0,Ja=[],Ya=[],Qa=[],Za=1,xe=[],Xa=null,es=null,ts=null,ve=[],as=[],ye=null,ss=null,ns=!1,os="all",rs="today",is=null,ls=null;const vn=e=>{is=e},kn=e=>{f=e},Pn=e=>{Qt=e},Tn=e=>{Zt=e},Sn=e=>{K=e},An=e=>{Na=e},$n=e=>{Ia=e},Mn=e=>{Ra=e},Cn=e=>{Oa=e},Ln=e=>{Ea=e},Dn=e=>{Ba=e},Nn=e=>{Ha=e},In=e=>{Fa=e},Rn=e=>{Ua=e},On=e=>{ja=e},En=e=>{Ka=e},Bn=e=>{_a=e},Hn=e=>{za=e},Fn=e=>{qa=e},Un=e=>{Ga=e},jn=e=>{Wa=e},Kn=e=>{Va=e},_n=e=>{Ja=e},zn=e=>{Ya=e},qn=e=>{Qa=e},Gn=e=>{Za=e},Wn=e=>{xe=e},Vn=e=>{ve=e},Jn=e=>{as=e},Ft=e=>{ye=e},Yn=e=>{ss=e},Qn=e=>{ns=e},Zn=e=>{ls=e},Xn=e=>{os=e},eo=e=>{rs=e},to=e=>{Xa=e},ao=e=>{es=e},so=e=>{ts=e};let Xt=!1;if(typeof window<"u"){const e=()=>{Xt=!0,window.__hasUserInteracted=!0};["pointerdown","touchstart","mousedown","keydown"].forEach(t=>{window.addEventListener(t,e,{capture:!0,once:!0})}),window.__hasUserInteracted=!1}const Tt=()=>typeof navigator<"u"&&navigator.userActivation?navigator.userActivation.hasBeenActive:!!(Xt||typeof window<"u"&&window.__hasUserInteracted);typeof window<"u"&&(window.checkUserGesture=Tt);const Pe=(e="light")=>{try{const t=window.Capacitor?.Plugins?.Haptics;if(t){e==="light"||e==="selection"?t.impact({style:"LIGHT"}).catch(()=>{}):e==="medium"?t.impact({style:"MEDIUM"}).catch(()=>{}):e==="heavy"?t.impact({style:"HEAVY"}).catch(()=>{}):e==="success"?t.notification({type:"SUCCESS"}).catch(()=>{}):e==="warning"?t.notification({type:"WARNING"}).catch(()=>{}):e==="error"&&t.notification({type:"ERROR"}).catch(()=>{});return}if(typeof navigator<"u"&&typeof navigator.vibrate=="function"){if(!Tt())return;e==="light"||e==="selection"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="heavy"?navigator.vibrate(45):e==="success"?navigator.vibrate([15,30,20]):e==="warning"?navigator.vibrate([30,40,30]):e==="error"&&navigator.vibrate([40,50,40,50,40])}}catch{}};typeof window<"u"&&(window.triggerHaptic=Pe);const ds=e=>{if(e)switch(e){case"product-modal":typeof window.closeProductModal=="function"&&window.closeProductModal();break;case"pos-variant-sheet":typeof window.closePOSVariantSheet=="function"&&window.closePOSVariantSheet();break;case"variant-preview-modal":typeof window.closeVariantPreviewModal=="function"&&window.closeVariantPreviewModal();break;case"custom-confirm-modal":typeof window.closeConfirm=="function"&&window.closeConfirm();break;case"scanner-modal":typeof window.closeCameraScanner=="function"&&window.closeCameraScanner();break;case"modal-tempo-detail":typeof window.closeTempoDetailModal=="function"&&window.closeTempoDetailModal();break;case"modal-tempo-payment":typeof window.closeTempoPaymentModal=="function"&&window.closeTempoPaymentModal();break;case"modal-tempo-penalty":typeof window.closeTempoPenaltyModal=="function"&&window.closeTempoPenaltyModal();break;case"modal-supplier-detail":typeof window.closeSupplierDetailModal=="function"&&window.closeSupplierDetailModal();break;case"modal-supplier-form":typeof window.closeSupplierFormModal=="function"&&window.closeSupplierFormModal();break;case"modal-po-form":typeof window.closePurchaseFormModal=="function"&&window.closePurchaseFormModal();break;case"modal-po-detail":typeof window.closePurchaseDetailModal=="function"&&window.closePurchaseDetailModal();break;case"modal-po-payment":typeof window.closePurchasePaymentModal=="function"&&window.closePurchasePaymentModal();break;case"modal-po-product-picker":typeof window.closePurchasePickerModal=="function"&&window.closePurchasePickerModal();break;case"quick-menu-modal":case"quickmenu-modal":typeof window.closeQuickMenuModal=="function"&&window.closeQuickMenuModal();break;case"category-modal":typeof window.closeCategoryModal=="function"&&window.closeCategoryModal();break;case"brand-modal":typeof window.closeBrandModal=="function"&&window.closeBrandModal();break;case"quick-variant-modal":typeof window.closeQuickVariantSheet=="function"&&window.closeQuickVariantSheet();break;case"shopping-guide-modal":typeof window.closeShoppingGuideModal=="function"&&window.closeShoppingGuideModal();break;case"pos-login-modal":typeof window.closePOSLoginModal=="function"&&window.closePOSLoginModal();break;case"admin-order-modal":typeof window.closeOrderDetailModal=="function"&&window.closeOrderDetailModal();break;case"order-detail-modal":typeof window.closeCustomerOrderDetailModal=="function"&&window.closeCustomerOrderDetailModal();break;case"modal-client-tempo-pay":typeof window.closeClientPaymentModal=="function"&&window.closeClientPaymentModal();break;default:{const t=document.getElementById(e);if(t){const a=t.querySelector('button[onclick*="close"], .fa-xmark')?.closest("button");if(a)a.click();else if(typeof window.closeModalAnim=="function"){const s=t.querySelector('.modal-bottom-sheet, [id$="-box"]')||t.firstElementChild;window.closeModalAnim(t,s)}else t.classList.add("hidden","opacity-0")}}}};let Z=null,Ee=null,Je=0,Ut=0,Ye=0,ue=!1,jt=0;const cs=()=>{if(typeof document>"u")return;document.addEventListener("touchstart",t=>{if(t.touches.length!==1)return;const a=t.touches[0],s=a.target.closest('[id*="modal"], [id*="sheet"]');if(!s||s.classList.contains("hidden")||s.classList.contains("opacity-0")||!(s.classList.contains("items-end")||!!a.target.closest(".modal-bottom-sheet")||s.classList.contains("modal-bottom-sheet")))return;let o=a.target.closest(".modal-bottom-sheet")||a.target.closest('[id$="-box"]');if(o||(o=a.target.closest('[id$="-content"]')),!o||a.target.closest('input, select, textarea, button, a, [role="button"], table, .no-drag'))return;const r=!!a.target.closest(".overflow-y-auto, .overflow-x-auto, .scroll-content, .custom-scrollbar"),l=o.getBoundingClientRect(),d=a.clientY-l.top;(a.target.closest(".pull-indicator")||!r&&d<=55)&&(Z=o,Ee=s,Je=a.clientY,Ut=a.clientX,Ye=Je,ue=!1,jt=Date.now())},{passive:!0}),document.addEventListener("touchmove",t=>{if(!Z||t.touches.length!==1)return;const a=t.touches[0];Ye=a.clientY;const s=Ye-Je,n=Math.abs(a.clientX-Ut);if(!ue&&n>Math.abs(s)){Z=null;return}const o=Z.classList.contains("overflow-y-auto")?Z:Z.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar");if(!(o&&o.scrollTop>5&&!ue)){if(s>0){if(ue=!0,t.cancelable&&t.preventDefault(),Z.style.transform=`translateY(${s}px)`,Z.style.transition="none",Ee){const r=Math.max(.2,1-s/400);Ee.style.backgroundColor=`rgba(15, 23, 42, ${.8*r})`}}else if(s<0&&ue){const r=s*.2;Z.style.transform=`translateY(${r}px)`,Z.style.transition="none"}}},{passive:!1});const e=()=>{if(!Z)return;const t=Z,a=Ee,s=Ye-Je,n=Math.max(1,Date.now()-jt),o=s/n;Z=null,Ee=null,ue&&(s>80||o>.45&&s>30)?(Pe("light"),t.style.transition="transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",t.style.transform="translateY(100%)",a&&(a.style.transition="opacity 0.25s ease",a.style.opacity="0"),setTimeout(()=>{t.style.transform="",t.style.transition="",a&&(a.style.backgroundColor="",a.style.opacity=""),ds(a?a.id:"")},250)):ue&&(t.style.transition="transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)",t.style.transform="",a&&(a.style.transition="background-color 0.28s ease",a.style.backgroundColor=""),setTimeout(()=>{t.style.transition=""},300)),ue=!1};document.addEventListener("touchend",e,{passive:!0}),document.addEventListener("touchcancel",e,{passive:!0})};let Kt=0;const ps=()=>{typeof document>"u"||document.addEventListener("click",e=>{const t=Date.now();if(t-Kt<50)return;const a=e.target.closest('button, [role="button"], a[onclick], [id*="bnav-"], .pos-add-btn, .pos-tag-chip, #pos-variant-chips button, .interactive-tap');a&&!a.disabled&&!a.classList.contains("disabled")&&(Kt=t,Pe("light"))},{passive:!0,capture:!0})};let z=null;const us=(e="pop")=>{try{if(typeof window>"u"||!Tt())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;z||(z=new t),z.state==="suspended"&&z.resume().catch(()=>{});const a=z.currentTime;if(e==="pop"){const s=z.createOscillator(),n=z.createGain();s.type="sine",s.frequency.setValueAtTime(340,a),s.frequency.exponentialRampToValueAtTime(560,a+.07),n.gain.setValueAtTime(.14,a),n.gain.exponentialRampToValueAtTime(.001,a+.08),s.connect(n),n.connect(z.destination),s.start(a),s.stop(a+.08)}else if(e==="success"){const s=z.createOscillator(),n=z.createOscillator(),o=z.createGain(),r=z.createGain();s.type="triangle",n.type="triangle",s.frequency.setValueAtTime(523.25,a),n.frequency.setValueAtTime(659.25,a+.09),o.gain.setValueAtTime(.12,a),o.gain.exponentialRampToValueAtTime(.001,a+.22),r.gain.setValueAtTime(.14,a+.09),r.gain.exponentialRampToValueAtTime(.001,a+.32),s.connect(o),o.connect(z.destination),n.connect(r),r.connect(z.destination),s.start(a),s.stop(a+.22),n.start(a+.09),n.stop(a+.32)}else if(e==="beep"){const s=z.createOscillator(),n=z.createGain();s.type="square",s.frequency.setValueAtTime(1040,a),n.gain.setValueAtTime(.08,a),n.gain.exponentialRampToValueAtTime(.001,a+.07),s.connect(n),n.connect(z.destination),s.start(a),s.stop(a+.07)}}catch{}};typeof window<"u"&&(window.playNativeSound=us);const Be=()=>{if(typeof document>"u")return;const e=document.getElementById("native-scroll-top-btn");e&&(e.classList.add("opacity-0","translate-y-3"),e.classList.add("hidden"))};typeof window<"u"&&(window.hideFloatingScrollTop=Be);const ms=()=>{if(typeof document>"u")return;let e=document.getElementById("native-scroll-top-btn");e||(e=document.createElement("button"),e.id="native-scroll-top-btn",document.body.appendChild(e)),e.setAttribute("aria-label","Kembali ke Atas"),e.setAttribute("title","Kembali ke Atas"),e.className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 hidden opacity-0 translate-y-3 transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900/95 dark:bg-slate-800/95 text-white shadow-xl shadow-black/25 border border-slate-700/80 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_4px_20px_rgba(var(--color-primary-rgb),0.4)] hover:scale-105 active:scale-90 cursor-pointer group",e.innerHTML='<i class="fa-solid fa-arrow-up text-xs md:text-sm transition-transform duration-200 group-hover:-translate-y-0.5"></i>',e._hasClickListener||(e._hasClickListener=!0,e.addEventListener("click",()=>{Pe("light");const a=document.querySelector(".view-section:not(.hidden)");if(a){const s=a.querySelector(".scroll-content");s&&s.scrollTop>10&&s.scrollTo({top:0,behavior:"smooth"})}window.scrollTo({top:0,behavior:"smooth"})}));const t=(a,s=null)=>{if(!e)return;if(typeof window<"u"&&window.appData?.store?.showScrollTopButton===!1){Be();return}const n=document.querySelector(".view-section:not(.hidden)");if(!n||n.id!=="view-catalog"&&n.id!=="view-orders"){Be();return}if(s){const r=s.closest(".view-section");if(!r||r.id!=="view-catalog"&&r.id!=="view-orders"){Be();return}}if(document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none), [id*="dialog"]:not(.hidden), .fixed.inset-0:not(.hidden):not(.pointer-events-none):not(#native-theme-ambient)')){Be();return}a>450?(e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0","translate-y-3")})):(e.classList.add("opacity-0","translate-y-3"),setTimeout(()=>{e&&e.classList.contains("opacity-0")&&e.classList.add("hidden")},300))};window.addEventListener("scroll",()=>{t(window.scrollY||document.documentElement.scrollTop)},{passive:!0}),document.addEventListener("scroll",a=>{a.target&&a.target.classList&&a.target.classList.contains("scroll-content")&&t(a.target.scrollTop,a.target)},{passive:!0,capture:!0})},fs=()=>{if(typeof window>"u"||typeof document>"u")return;let e=document.getElementById("native-connectivity-banner");e||(e=document.createElement("div"),e.id="native-connectivity-banner",e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] -translate-y-16 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl",document.body.appendChild(e));let t=null;const a=s=>{clearTimeout(t),Pe(s?"success":"warning"),s?(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-emerald-600 text-white border border-emerald-400/40",e.innerHTML='<i class="fa-solid fa-wifi text-xs"></i><span>Kembali Online — Terhubung</span>',t=setTimeout(()=>{e.classList.add("-translate-y-16","opacity-0")},2500)):(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-amber-500 text-slate-950 border border-amber-300/60",e.innerHTML='<i class="fa-solid fa-wifi-slash text-xs"></i><span>Mode Offline — Menggunakan Data Lokal</span>')};window.addEventListener("online",()=>a(!0)),window.addEventListener("offline",()=>a(!1))},no=()=>{cs(),ps(),ms(),fs()},ea=e=>{let t="";return typeof e=="object"&&e!==null?t=`${e.name||""} ${e.category||""} ${e.subCategory||""}`.toLowerCase():t=String(e||"").toLowerCase(),t.includes("cat")||t.includes("paint")||t.includes("politur")||t.includes("thinner")||t.includes("no drop")||t.includes("kuas")||t.includes("roll")?{icon:"fa-paint-roller",gradient:"linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(244, 63, 94, 0.12) 0%, transparent 70%)",textColor:"#e11d48"}:t.includes("gembok")||t.includes("kunci")||t.includes("grendel")||t.includes("slot")||t.includes("silinder")?{icon:"fa-lock",gradient:"linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(245, 158, 11, 0.12) 0%, transparent 70%)",textColor:"#d97706"}:t.includes("paku")||t.includes("baut")||t.includes("sekrup")||t.includes("mur")||t.includes("kawat")?{icon:"fa-hammer",gradient:"linear-gradient(135deg, #64748b 0%, #334155 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(100, 116, 139, 0.12) 0%, transparent 70%)",textColor:"#475569"}:t.includes("pipa")||t.includes("pvc")||t.includes("paralon")||t.includes("kran")||t.includes("sambungan")||t.includes("fitting")||t.includes("knee")||t.includes("tee")?{icon:"fa-faucet-drip",gradient:"linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(6, 182, 212, 0.12) 0%, transparent 70%)",textColor:"#0891b2"}:t.includes("semen")||t.includes("mortar")||t.includes("pasir")||t.includes("bata")||t.includes("hebel")?{icon:"fa-trowel-bricks",gradient:"linear-gradient(135deg, #ea580c 0%, #9a3412 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(234, 88, 12, 0.12) 0%, transparent 70%)",textColor:"#c2410c"}:t.includes("perkakas")||t.includes("tang")||t.includes("obeng")||t.includes("palu")||t.includes("bor")||t.includes("gerinda")||t.includes("meteran")||t.includes("gergaji")?{icon:"fa-toolbox",gradient:"linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",textColor:"#4f46e5"}:{icon:"fa-box-open",gradient:"linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(var(--color-primary-rgb), 0.12) 0%, transparent 70%)",textColor:"var(--color-primary)"}},bs=(e,t="",a="")=>{const s=ea(e);return{id:"brand",icon:s.icon,subIcon:s.icon,label:"Produk Resmi",podGradient:s.gradient,accent:"rgba(var(--color-primary-rgb),0.1)",aura:"rgba(var(--color-primary-rgb),0.08)",shadowColor:"rgba(var(--color-primary-rgb),0.15)"}},ta=e=>{if(!e||typeof e!="string")return"TP";const a=e.replace(/[^a-zA-Z0-9\s]/g," ").trim().split(/\s+/).filter(o=>o.length>0),s=a.filter(o=>/[a-zA-Z]/.test(o)),n=s.length>0?s:a;return n.length>=2?(n[0][0]+n[1][0]).toUpperCase():n.length===1?(n[0].length>=2?n[0].slice(0,2):n[0]+"P").toUpperCase():"TP"},ws=(e,t={})=>{const a=t.size||"md",s=t.className||"",n=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk"),o=ea(e),r=ta(n);return`
    <div class="pos-smart-cover cover-${a} ${s}" title="${i(n)}">
        <!-- Subtle Theme Glow -->
        <div class="cover-surface-glow" style="background:${o.bgGlow}"></div>

        <!-- Center Content: Icon Pod + Monogram -->
        <div class="cover-center">
            <div class="cover-icon-pod" style="background:${o.gradient}">
                <i class="fa-solid ${o.icon} cover-icon text-white"></i>
            </div>
            ${a==="md"||a==="lg"?`<span class="cover-monogram" style="color:${o.textColor}">${i(r)}</span>`:""}
        </div>

        <!-- Official Store Watermark -->
        ${a!=="thumb"&&a!=="sm"?`
        <div class="cover-watermark">
            <i class="fa-solid fa-store mr-1 text-[7px] opacity-75"></i><span>PUTRI UTAMA TEKNIK</span>
        </div>`:""}
    </div>`},xs=e=>(typeof e=="object"&&e!==null?e.name:String(e||"Produk"),`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
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
    </svg>`)}`),x=e=>typeof e=="string"?document.getElementById(e):e,aa=e=>{const t=x(e);t&&t.classList.remove("hidden")},sa=e=>{const t=x(e);t&&t.classList.add("hidden")},gs=(e,t,a)=>{const s=x(e);s&&s.classList.toggle(t,a)},se=(e,t)=>{const a=x(e);a&&(a.innerText=t)},na=(e,t)=>{const a=x(e);a&&(a.innerHTML=t)},hs=(e,t)=>{const a=x(e);a&&(a.value=t)},ys=e=>{const t=x(e);return t?t.value:""},tt=(e,t)=>{const a=typeof e=="string"?x(e):e,s=typeof t=="string"?x(t):t;a&&(a.classList.remove("hidden","pointer-events-none"),s&&s.classList.add("pointer-events-auto"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{a.classList.remove("opacity-0","pointer-events-none"),s&&(s.classList.remove("translate-y-full","sm:translate-y-10","sm:translate-y-8","translate-y-6","sm:translate-y-6","scale-95"),s.classList.add("pointer-events-auto"))})}))},ke=(e,t,a)=>{const s=typeof e=="string"?x(e):e,n=typeof t=="string"?x(t):t;if(!s){typeof a=="function"&&a();return}s.classList.add("opacity-0","pointer-events-none"),n&&(n.classList.add("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95"),n.classList.remove("pointer-events-auto")),setTimeout(()=>{s.classList.add("hidden"),typeof a=="function"&&a()},280)};typeof window<"u"&&(window.openModalAnim=tt,window.closeModalAnim=ke);const vs=e=>{try{return localStorage.getItem(e)}catch{return null}},ks=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},i=e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),P=e=>{const t=Number(e);return isNaN(t)||e===null?"Rp 0":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(Math.abs(t)).replace(/^/,t<0?"-":"")},Ps=e=>{if(!e)return new Date;if(e.timestamp&&typeof e.timestamp.toDate=="function")try{const n=e.timestamp.toDate();if(n instanceof Date&&!isNaN(n.getTime()))return n}catch{}if(e.createdAt&&typeof e.createdAt.toDate=="function")try{const n=e.createdAt.toDate();if(n instanceof Date&&!isNaN(n.getTime()))return n}catch{}if(e.timestamp&&typeof e.timestamp=="object"){const n=e.timestamp.seconds??e.timestamp._seconds;if(typeof n=="number"&&!isNaN(n)&&n>0)return new Date(n*1e3)}if(e.createdAt&&typeof e.createdAt=="object"){const n=e.createdAt.seconds??e.createdAt._seconds;if(typeof n=="number"&&!isNaN(n)&&n>0)return new Date(n*1e3)}const t=[e.dateMs,e.timestamp,e.createdAt,e.date];for(const n of t){if(typeof n=="number"&&!isNaN(n)&&n>0)return new Date(n>1e11?n:n*1e3);if(typeof n=="string"&&/^\d{10,13}$/.test(n.trim())){const o=Number(n.trim());return new Date(o>1e11?o:o*1e3)}}const a=[e.dateString,e.date,e.createdAt];for(const n of a)if(typeof n=="string"&&n.trim()&&n!=="[object Object]"){const o=new Date(n);if(!isNaN(o.getTime()))return o;const r=n.replace(/-/g,"/").replace("T"," ").replace(/\..*$/,""),l=new Date(r);if(!isNaN(l.getTime()))return l}const s=e.orderId||(typeof e=="string"?e:"");if(typeof s=="string"&&s.startsWith("ORD-")){const n=s.split("-");if(n.length>=2&&n[1].length>=6){const o=parseInt(n[1],36);if(!isNaN(o)&&o>15e11&&o<25e11)return new Date(o)}}return new Date},Ts=(e,t=null)=>{if(typeof e!="string")return e;const a=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);if(!a)return e;const s=a[1];return t==="image/gif"||e.toLowerCase().includes(".gif")||s==="1rkAFxnZDe2eLQ88kan2BeGSg56IkAEJ9"?`https://drive.google.com/uc?export=view&id=${s}`:`https://lh3.googleusercontent.com/d/${s}`},Ss=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(t))return t;const a=t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return a?a[1]:null},oa=e=>{if(typeof e!="string"||!e.trim())return null;const t=e.trim(),a=Ss(t);if(a)return{type:"youtube",id:a,embedUrl:`https://www.youtube.com/embed/${a}?autoplay=1&mute=1&muted=1&loop=1&playlist=${a}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const s=t.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(s&&s[1]){const n=s[1];return{type:"gdrive",id:n,streamUrl:`https://drive.google.com/uc?export=download&id=${n}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${n}`,directUrl:`https://drive.google.com/uc?export=download&id=${n}`,embedUrl:`https://drive.google.com/file/d/${n}/preview?autoplay=1`}}return{type:"direct",directUrl:t,embedUrl:t}},oo=e=>{const t=oa(e);return t?t.embedUrl:e},ro=e=>{const t=oa(e);return t?t.embedUrl:e},io=(e,t)=>typeof e!="string"||!e?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${t}`:e.includes("googleusercontent.com")&&!e.includes("=")?`${e}=${t}`:e,lo=e=>{if(!e||typeof e!="string")return!0;const t=e.trim();return!!(!t||t.includes("placehold.co"))},co=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",po=(e,t,a,s)=>{document.title=e||"Toko Putri";const n=(o,r,l=!1)=>{const d=l?"property":"name";let p=document.querySelector(`meta[${d}="${o}"]`);p||(p=document.createElement("meta"),p.setAttribute(d,o),document.head.appendChild(p)),p.setAttribute("content",r)};t&&n("description",t),e&&n("og:title",e,!0),t&&n("og:description",t,!0),a&&n("og:image",a,!0),s&&n("og:url",s,!0)},uo=(e,t)=>{let a=document.getElementById(e);a||(a=document.createElement("script"),a.id=e,a.type="application/ld+json",document.head.appendChild(a)),a.textContent=JSON.stringify(t)},Qe=e=>{e&&se("loader-text",e);const t=x("global-loader");t&&(t.style.opacity="1",t.style.display="flex")},mt=()=>{const e=x("global-loader");e&&(e.style.pointerEvents="none",e.style.transition="opacity 0.25s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250))},oe=(e,t,a,s)=>{typeof window.showToast=="function"&&window.showToast(e,t,a,s)},mo=(e,t,a,s)=>{if(typeof window.showConfirm=="function")return window.showConfirm(e,t,a,s)},Se={};typeof window<"u"&&(window.loadedScripts=Se);const fo=(e,t)=>t&&t()?Promise.resolve():(Se[e]||(Se[e]=new Promise((a,s)=>{const n=document.createElement("script");n.src=e,n.onload=()=>a(),n.onerror=()=>{delete Se[e],s(new Error("Gagal memuat: "+e))},document.head.appendChild(n)})),Se[e]),ra=e=>{let t=(e||"").toString().replace(/\D/g,"");return t?(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),t):""},As=(e,t="")=>{const a=ra(e);if(!a){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp tidak valid!");return}const s=t?encodeURIComponent(t):"",n=`https://wa.me/${a}${s?`?text=${s}`:""}`;window.AndroidNativeApp&&typeof window.AndroidNativeApp.openWhatsApp=="function"?window.AndroidNativeApp.openWhatsApp(n):window.open(n,"_blank","noopener,noreferrer")},$s=(e,t=null,a=null)=>{try{const s=(typeof t=="string"?document.querySelector(t):t)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!s)return;const n=e.getBoundingClientRect(),o=s.getBoundingClientRect(),r=document.createElement("div");r.className="flying-cart-item",a?r.innerHTML=`<img src="${a}" alt="Product" class="w-full h-full object-cover rounded-full" />`:r.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const l=n.left+n.width/2-20,d=n.top+n.height/2-20,p=o.left+o.width/2-20,g=o.top+o.height/2-20;r.style.cssText=`
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
        `,document.body.appendChild(r),requestAnimationFrame(()=>{const b=p-l,w=g-d;r.style.transform=`translate3d(${b}px, ${w}px, 0) scale(0.25) rotate(18deg)`,r.style.opacity="0.4"}),setTimeout(()=>{r&&r.parentNode&&r.parentNode.removeChild(r),Pe("medium");const b=document.getElementById("bottom-nav-cart-badge")||s.querySelector(".cart-count-badge");b&&(b.classList.remove("cart-bounce-pop"),b.offsetWidth,b.classList.add("cart-bounce-pop")),s.classList.remove("cart-bounce-pop"),s.offsetWidth,s.classList.add("cart-bounce-pop"),setTimeout(()=>{b&&b.classList.remove("cart-bounce-pop"),s.classList.remove("cart-bounce-pop")},600)},500)}catch(s){console.error("flyToCart error",s)}},Ke=(e={})=>{if(!e||typeof e!="object")return{hasPpn:!1,ppnAmount:0,dppAmount:0,ppnRate:0,ppnType:"exclusive",isInclusive:!1,ppnLabel:"PPN",subtotal:0,shipping:0,shippingDiscount:0,productDiscount:0,pointDiscount:0,paylaterAdminFee:0,paylaterServiceFee:0,grandTotal:0,baseBeforeTax:0};const t=e.payment||{},a=typeof window<"u"&&window.appData?.store?window.appData.store:{},n=(Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[]).reduce((k,T)=>k+parseFloat(T.qty||1)*(parseFloat(T.effectivePrice||T.price)||0),0),o=t.subtotal!==void 0&&t.subtotal!==null?parseFloat(t.subtotal):e.subtotal!==void 0&&e.subtotal!==null?parseFloat(e.subtotal):n,r=parseFloat(t.shippingCost??e.shippingCost??0)||0,l=parseFloat(t.shippingDiscount??e.shippingDiscount??0)||0,d=parseFloat(t.productDiscount??e.productDiscount??0)||0,p=parseFloat(e.pointDiscount??t.pointDiscount??0)||0,g=parseFloat(t.paylaterAdminFee??0)||0,b=parseFloat(t.paylaterServiceFee??0)||0,w=t.grandTotal!==void 0&&t.grandTotal!==null?parseFloat(t.grandTotal):e.total!==void 0&&e.total!==null?parseFloat(e.total):e.grandTotal!==void 0&&e.grandTotal!==null?parseFloat(e.grandTotal):Math.max(0,o-d-p+r-l+g+b),m=Math.max(0,o-d-p+(r-l)+g+b);let u=t.ppnRate!==void 0&&t.ppnRate!==null&&!isNaN(parseFloat(t.ppnRate))?parseFloat(t.ppnRate):e.ppnRate!==void 0&&e.ppnRate!==null&&!isNaN(parseFloat(e.ppnRate))?parseFloat(e.ppnRate):a.ppnRate!==void 0?parseFloat(a.ppnRate):11;isNaN(u)&&(u=11);let c=t.ppnType||e.ppnType||a.ppnType||"exclusive",M=parseFloat(t.ppnAmount??e.ppnAmount??e.tax??t.tax??0);isNaN(M)&&(M=0),M<=0&&w>m+.5&&(M=Math.round(w-m),c="exclusive",u<=0&&m>0&&(u=Math.round(M/m*100)));const L=a.ppnEnabled===!0||a.ppnEnabled==="true";if(M<=0&&c==="inclusive"&&u>0&&(t.ppnEnabled===!0||L)){const k=Math.round(m*100/(100+u));M=Math.max(0,m-k)}let D=t.dppAmount!==void 0&&t.dppAmount!==null&&!isNaN(parseFloat(t.dppAmount))?parseFloat(t.dppAmount):e.dppAmount!==void 0&&e.dppAmount!==null&&!isNaN(parseFloat(e.dppAmount))?parseFloat(e.dppAmount):null;D===null&&(c==="inclusive"&&u>0?D=Math.round(m*100/(100+u)):D=m);const y=M>0||t.ppnEnabled===!0||e.ppnEnabled===!0||t.ppnShowZero===!0||t.ppnRate!==void 0&&t.ppnRate!==null&&t.ppnRate>0||t.ppnRate===0&&t.ppnEnabled!==!1||L&&t.ppnEnabled!==!1,h=c==="inclusive",v=t.ppnLabel||e.ppnLabel||a.ppnTaxLabel||`${h?"Termasuk PPN":"PPN"} (${u}%)`;return{hasPpn:y,ppnAmount:M,dppAmount:D,ppnRate:u,ppnType:c,isInclusive:h,ppnLabel:v,subtotal:o,shipping:r,shippingDiscount:l,productDiscount:d,pointDiscount:p,paylaterAdminFee:g,paylaterServiceFee:b,grandTotal:w,baseBeforeTax:m}};typeof window<"u"&&(window.normalizeWA=ra,window.openWhatsApp=As,window.sLoad=Qe,window.hLoad=mt,window.el=x,window.show=aa,window.hide=sa,window.toggleCls=gs,window.setIn=se,window.setH=na,window.setV=hs,window.getV=ys,window.esc=i,window.fixD=Ts,window.fCur=P,window.parseOrderDate=Ps,window.extractOrderTaxInfo=Ke,window.sL=vs,window.ssL=ks,window.triggerHaptic=Pe,window.flyToCartAnimation=$s);typeof window<"u"&&(window.renderProductCoverHtml=ws,window.getProductTheme=bs,window.getMonogram=ta,window.getProductCoverSvgDataUri=xs);const _t={deviceType:"rawbt",deviceName:"Driver RawBT (Printer Thermal Android - Free)",deviceId:"",paperSize:"58mm",directPrint:!1,feedLines:3,autoCut:!0,openCashDrawer:!1,autoPrintOrder:!1,headerText:"",storeAddress:"",storePhone:"",footerText:"Terima kasih atas kunjungan Anda!",footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa struk resmi.",showLogo:!0,showAddress:!0,showPhone:!0,showNpwp:!0,showPoints:!0,showBarcode:!0,networkIp:"192.168.1.200:9100"},de=e=>{switch(e){case"58mm-compact":case"58mm_30":return 30;case"80mm-compact":case"80mm_42":return 42;case"80mm":return 48;case"58mm":default:return 32}},_=()=>{try{const e=localStorage.getItem("freshmart_printer_config");if(e)return{..._t,...JSON.parse(e)}}catch(e){console.warn("Gagal membaca konfigurasi printer lokal:",e)}return{..._t}},_e=e=>{try{const a={..._(),...e};return localStorage.setItem("freshmart_printer_config",JSON.stringify(a)),a}catch(t){return console.error("Gagal menyimpan konfigurasi printer:",t),_()}},Ms=()=>{const e=_(),t=(o,r)=>{const l=x(o);l&&(l.checked=!!r)},a=(o,r)=>{const l=x(o);l&&(l.value=r||"")};a("printer-device-name-display",e.deviceName),a("printer-paper-size",e.paperSize),a("printer-network-ip",e.networkIp),a("printer-header-custom",e.headerText),a("printer-address-custom",e.storeAddress),a("printer-phone-custom",e.storePhone),a("printer-footer-custom",e.footerText),a("printer-policy-custom",e.footerPolicyNote),t("printer-opt-address",e.showAddress!==!1),t("printer-opt-phone",e.showPhone!==!1),t("printer-opt-npwp",e.showNpwp!==!1),t("printer-opt-points",e.showPoints),t("printer-opt-barcode",e.showBarcode),t("printer-opt-direct",e.directPrint===!0),t("printer-opt-autocut",e.autoCut!==!1),t("printer-opt-drawer",e.openCashDrawer),t("printer-opt-autoprint",e.autoPrintOrder),la(e.deviceType||"rawbt");const s=x("printer-settings-modal"),n=x("printer-settings-modal-box");s&&s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("printerSettings"),tt(s,n)},ia=(e=!1)=>{const t=x("printer-settings-modal"),a=x("printer-settings-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("printerSettings",e,()=>{ke(t,a)}):ke(t,a))},la=e=>{window._selectedPrinterType=e,document.querySelectorAll(".printer-type-card").forEach(s=>{if(s.getAttribute("data-type")===e){s.classList.add("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),s.classList.remove("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const o=s.querySelector(".printer-check-badge");o&&o.classList.remove("hidden")}else{s.classList.remove("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),s.classList.add("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const o=s.querySelector(".printer-check-badge");o&&o.classList.add("hidden")}});const t=x("rawbt-quick-guide-box");t&&(e==="rawbt"?t.classList.remove("hidden"):t.classList.add("hidden"));const a=x("printer-network-box");a&&(e==="network"?a.classList.remove("hidden"):a.classList.add("hidden"))},Cs=()=>{const e=(o,r="")=>{const l=x(o);return l?l.value:r},t=(o,r=!1)=>{const l=x(o);return l?l.checked:r},a=window._selectedPrinterType||"rawbt",n={deviceType:a,deviceName:e("printer-device-name-display",a==="rawbt"?"Driver RawBT (Printer Thermal Android - Free)":a==="bluetooth"?"Bluetooth POS Printer":"Printer Thermal POS"),paperSize:e("printer-paper-size","58mm"),networkIp:e("printer-network-ip","192.168.1.200:9100"),headerText:e("printer-header-custom",""),storeAddress:e("printer-address-custom",""),storePhone:e("printer-phone-custom",""),footerText:e("printer-footer-custom","Terima kasih atas kunjungan Anda!"),footerPolicyNote:e("printer-policy-custom","Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa struk resmi."),showAddress:t("printer-opt-address",!0),showPhone:t("printer-opt-phone",!0),showNpwp:t("printer-opt-npwp",!0),showPoints:t("printer-opt-points",!0),showBarcode:t("printer-opt-barcode",!0),directPrint:t("printer-opt-direct",!1),autoCut:t("printer-opt-autocut",!0),openCashDrawer:t("printer-opt-drawer",!1),autoPrintOrder:t("printer-opt-autoprint",!1)};_e(n),oe("Pengaturan printer berhasil disimpan! ✅"),ia()},Ls=async()=>{if(!navigator.bluetooth){oe("Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.");return}try{oe("Mencari printer bluetooth di sekitar...");const e=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["000018f0-0000-1000-8000-00805f9b34fb","e7810a71-73ae-499d-8c15-faa9aef0c3f2","00001101-0000-1000-8000-00805f9b34fb"]});if(e){_e({deviceType:"bluetooth",deviceName:e.name||"Bluetooth POS Printer",deviceId:e.id});const t=x("printer-device-name-display");t&&(t.value=e.name||"Bluetooth POS Printer"),oe(`Printer "${e.name||"Bluetooth POS"}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&oe("Koneksi bluetooth dibatalkan atau tidak tersedia.")}},Ds=async()=>{if(!navigator.usb){oe("Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.");return}try{oe("Mencari printer USB...");const e=await navigator.usb.requestDevice({filters:[]});if(e){const t=(e.productName||"USB Thermal Printer")+" (USB)";_e({deviceType:"usb",deviceName:t,deviceId:String(e.vendorId)+":"+String(e.productId)});const a=x("printer-device-name-display");a&&(a.value=t),oe(`Printer USB "${t}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&oe("Koneksi USB dibatalkan atau tidak ditemukan.")}},Ns=()=>{if(typeof window.executeRawBTTestPrint=="function"){window.executeRawBTTestPrint();return}const e=_(),t=e.paperSize==="80mm",a=t?48:32,s=e.headerText||f.store?.name||"TOKO PUTRI",n=e.showAddress!==!1&&(e.storeAddress||f.store?.address)||"",o=e.showPhone!==!1&&(e.storePhone||f.store?.wa)||"",r=e.footerPolicyNote||"",l=t?"68mm":"44mm",d=(w,m,u=a)=>{const c=u-w.length-m.length;return w+(c>0?" ".repeat(c):" ")+m},p=new Date().toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let g=`
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${i(s)}</div>
    ${n?`<div style="text-align:center;font-size:10px;color:#475569;margin-bottom:2px;">${i(n)}</div>`:""}
    ${o?`<div style="text-align:center;font-size:11px;margin-bottom:4px;">Telp/WA: ${i(o)}</div>`:""}
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
    `;e.showPoints&&(g+=`<div style="white-space:pre;font-size:11px;">${d("Simulasi Poin Member","+10 Poin",a)}</div>`,g+='<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>'),e.showBarcode&&(g+=`<div style="text-align:center;margin:6px 0;">
            <div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*TEST-POS-${Date.now().toString().slice(-6)}*</div>
            <div style="font-size:9px;color:#333;">(BARCODE TEST OK)</div>
        </div><div style="border-bottom:1px dashed #000;margin:6px 0;"></div>`),g+=`
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
    `;let b=x("thermal-print-section");if(b||(b=document.createElement("div"),b.id="thermal-print-section",document.body.appendChild(b)),b.innerHTML=`<div style="width:${l};max-width:${l};font-family:'Courier New',Courier,monospace;font-size:${t?"10.5px":"8.8px"};line-height:1.2;color:#000;background:#fff;padding:0 ${t?"2.5mm":"1.5mm"} 4mm ${t?"1mm":"0.5mm"};box-sizing:border-box;">${g}</div>`,typeof window.sendToRawBT=="function"){const w=b.innerText,m=btoa(unescape(encodeURIComponent(w)));window.sendToRawBT(m,w,g)}else window.print();oe("Perintah uji cetak berhasil dikirim! 🖨️")};window.getPrinterConfig=_;window.getPaperCols=de;window.savePrinterConfig=_e;window.openPrinterSettingsModal=Ms;window.closePrinterSettingsModal=ia;window.selectPrinterDeviceTypeUI=la;window.savePrinterSettingsFromModal=Cs;window.scanBluetoothPrinter=Ls;window.scanUsbPrinter=Ds;window.executeTestPrint=Ns;let zt={},q="view-catalog",Me=!1,He=null,ft=["view-catalog"];const at=e=>{history.pushState({modal:e},"",window.location.href),xe.push(e)},st=(e,t,a)=>{if(!t){const s=xe.lastIndexOf(e);s>-1&&xe.splice(s,1),Me=!0,He&&clearTimeout(He),He=setTimeout(()=>{Me=!1},300);try{history.back()}catch{Me=!1}}a()},Y=(e,t=!1)=>{if(!e||e===q)return;t||(history.pushState({view:e},"",window.location.href),e==="view-catalog"?ft=["view-catalog"]:ft.push(e));const a=x(q);if(a){const n=a.querySelector(".scroll-content");n&&(zt[q]=n.scrollTop)}if(q==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime(),q==="view-pos-cashier"&&e!=="view-pos-cashier"&&(typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()),q==="view-admin"&&e!=="view-admin"){const n=x("view-admin");n&&n.classList.remove("admin-pos-mode"),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()}const s=x(e);if(s&&(s.classList.remove("hidden"),s.classList.add("flex")),document.querySelectorAll(".view-section").forEach(n=>{n!==s&&(n.classList.add("hidden"),n.classList.remove("flex"))}),typeof window.hideFloatingScrollTop=="function")window.hideFloatingScrollTop();else{const n=document.getElementById("native-scroll-top-btn");n&&(n.classList.add("opacity-0","translate-y-3"),n.classList.add("hidden"))}if(s){e==="view-cart"&&typeof window.renderCart=="function"?window.renderCart():e==="view-checkout"&&typeof window.rChck=="function"?window.rChck():e==="view-payment"&&typeof window.rPay=="function"?window.rPay():e==="view-wishlist"&&typeof window.renderWish=="function"?window.renderWish():e==="view-orders"&&typeof window.renderMyOrders=="function"?window.renderMyOrders():e==="view-faq"&&typeof window.renderStorefrontFAQ=="function"?window.renderStorefrontFAQ():e==="view-pos-cashier"?Yt(()=>import("./module-pos-C-r0Icpo.js").then(o=>o.h),__vite__mapDeps([2,1])).then(o=>{typeof o.renderPOSStorefront=="function"&&o.renderPOSStorefront()}).catch(o=>console.error("[POS] Gagal memuat storefront:",o)):e==="view-admin"&&typeof window.renderSubscriptionNoticeInCMS=="function"&&window.renderSubscriptionNoticeInCMS();const n=s.querySelector(".scroll-content");if(n)if(t){const o=zt[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{n.scrollTop=o}))}else n.scrollTo(0,0)}q=e,da(e)},da=(e=q)=>{const t=x("bottom-nav-bar");if(!t)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin","view-pos-cashier"].includes(e)){t.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.remove("translate-y-0","opacity-100");return}if(t.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(s=>s.classList.remove("active")),e==="view-catalog"){const s=x("bnav-home");s&&s.classList.add("active")}else if(e==="view-orders"){const s=x("bnav-orders");s&&s.classList.add("active")}else if(e==="view-wishlist"||e==="view-faq"){const s=x("bnav-menu");s&&s.classList.add("active")}},Is=e=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(e==="home"?"medium":"light"),e==="home")if(q==="view-catalog"){const t=document.querySelector("#view-catalog .scroll-content");t?t.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else Y("view-catalog");else e==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():e==="cart"?Y("view-cart"):e==="orders"?Y("view-orders"):e==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},ca=()=>{const e=document.querySelector("#view-catalog .scroll-content"),t=x("pull-to-refresh-indicator"),a=x("ptr-icon"),s=x("ptr-text");if(!e||!t)return;let n=0,o=0,r=!1,l=!1;const d=65;e.addEventListener("touchstart",p=>{e.scrollTop<=5&&!l&&(n=p.touches[0].pageY,r=!0)},{passive:!0}),e.addEventListener("touchmove",p=>{if(!r||l)return;o=p.touches[0].pageY;const g=o-n;if(g>15&&e.scrollTop<=5){t.classList.add("visible");const b=Math.min(g/d,1.5);a&&(a.style.transform=`rotate(${b*240}deg)`),s&&(s.innerText=g>=d?"Lepaskan untuk segarkan":"Tarik ke bawah untuk refresh")}else t.classList.remove("visible")},{passive:!0}),e.addEventListener("touchend",async()=>{if(!r||l)return;if(r=!1,o-n>=d&&e.scrollTop<=5){l=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),a&&(a.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",a.style.transform=""),s&&(s.innerText="Menyinkronkan katalog...");try{typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),s&&(s.innerText="Katalog Terkini Disinkron!"),a&&(a.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch{s&&(s.innerText="Gagal sinkron data")}setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>{l=!1,a&&(a.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",a.style.transform=""),s&&(s.innerText="Tarik ke bawah untuk refresh")},300)},600)}else t.classList.remove("visible"),a&&(a.style.transform="")})},pa=e=>{e==="product"&&typeof window.closeProductModal=="function"?window.closeProductModal(!0):e==="category"&&typeof window.closeCategoryModal=="function"?window.closeCategoryModal(!0):e==="brand"&&typeof window.closeBrandModal=="function"?window.closeBrandModal(!0):e==="admin"&&typeof window.closeAdminModal=="function"?window.closeAdminModal(!0):e==="adminOrder"&&typeof window.closeOrderDetailModal=="function"?window.closeOrderDetailModal(!0):e==="receipt"&&typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):e==="docPreview"&&typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):e==="scanner"&&typeof window.closeCameraScanner=="function"?window.closeCameraScanner(!0):e==="confirm"&&typeof window.closeConfirm=="function"?window.closeConfirm(!0):e==="customerOrder"&&typeof window.closeCustomerOrderDetailModal=="function"?window.closeCustomerOrderDetailModal(!0):e==="restock"&&typeof window.closeRestockModal=="function"?window.closeRestockModal(!0):e==="quickprice"&&typeof window.closeQuickPriceModal=="function"?window.closeQuickPriceModal(!0):e==="member"&&typeof window.closeMemberModal=="function"?window.closeMemberModal(!0):e==="prompt"&&typeof window.closePrompt=="function"?window.closePrompt(!0):e==="review"&&typeof window.closeReviewModal=="function"?window.closeReviewModal(!0):e==="quickmenu"&&typeof window.closeQuickMenuModal=="function"?window.closeQuickMenuModal(!0):e==="variantPreview"&&typeof window.closeVariantPreviewModal=="function"?window.closeVariantPreviewModal(!0):e==="terms"&&typeof window.closeTermsModal=="function"?window.closeTermsModal(!0):e==="privacy"&&typeof window.closePrivacyModal=="function"?window.closePrivacyModal(!0):e==="askQuestion"&&typeof window.closeAskQuestionModal=="function"?window.closeAskQuestionModal(!0):e==="quickVariant"&&typeof window.closeQuickVariantSheet=="function"?window.closeQuickVariantSheet(!0):e==="adminFAQ"&&typeof window.closeAdminFAQModal=="function"?window.closeAdminFAQModal(!0):e==="printerSettings"&&typeof window.closePrinterSettingsModal=="function"?window.closePrinterSettingsModal(!0):e==="exitConfirm"&&typeof window.closeExitConfirmModal=="function"?window.closeExitConfirmModal(!0):e==="appDownload"&&typeof window.closeAppDownloadModal=="function"?window.closeAppDownloadModal(!0):e==="voucher"&&typeof window.closeVoucherModal=="function"?window.closeVoucherModal(!0):e==="guide"&&typeof window.closeShoppingGuideModal=="function"?window.closeShoppingGuideModal(!0):e==="changelog"&&typeof window.closeChangelogModal=="function"?window.closeChangelogModal(!0):e==="guarantee"&&typeof window.closeQualityGuaranteeModal=="function"?window.closeQualityGuaranteeModal(!0):e==="security"&&typeof window.closeSecurityModal=="function"?window.closeSecurityModal(!0):e==="posVariantSheet"&&typeof window.closePOSVariantSheet=="function"?window.closePOSVariantSheet(!0):e==="posLogin"&&typeof window.closePOSLoginModal=="function"?window.closePOSLoginModal(!0):e==="posCartDrawer"&&typeof window.closePOSCartDrawer=="function"?window.closePOSCartDrawer(!0):e==="posPayment"&&typeof window.closePayModal=="function"?window.closePayModal(!0):e==="purchaseForm"&&typeof window.closeCreatePOModal=="function"?window.closeCreatePOModal(!0):e==="purchasePicker"&&typeof window.closePOProductPicker=="function"?window.closePOProductPicker(!0):e==="purchaseDetail"&&typeof window.closePurchaseDetailModal=="function"?window.closePurchaseDetailModal(!0):e==="purchasePayment"&&typeof window.closePurchasePaymentModal=="function"?window.closePurchasePaymentModal(!0):e==="supplierForm"&&typeof window.closeSupplierFormModal=="function"?window.closeSupplierFormModal(!0):e==="supplierDetail"&&typeof window.closeSupplierDetailModal=="function"?window.closeSupplierDetailModal(!0):e==="posHoldPrompt"&&typeof window.closePOSHoldPrompt=="function"?window.closePOSHoldPrompt(!0):e==="posHeldModal"&&typeof window.closePOSHeldModal=="function"?window.closePOSHeldModal(!0):e==="posCameraScanner"&&typeof window.closePOSCameraScanner=="function"?window.closePOSCameraScanner(!0):e==="tempoDetail"&&typeof window.closeTempoDetailModal=="function"?window.closeTempoDetailModal(!0):e==="tempoPayment"&&typeof window.closeTempoPaymentModal=="function"?window.closeTempoPaymentModal(!0):e==="tempoPenalty"&&typeof window.closeTempoPenaltyModal=="function"?window.closeTempoPenaltyModal(!0):e==="expenseForm"&&typeof window.closeExpenseModal=="function"?window.closeExpenseModal(!0):e==="expenseReceipt"&&typeof window.closeExpenseReceiptPreview=="function"&&window.closeExpenseReceiptPreview(!0)},ua=()=>{const e=x("exit-confirm-modal");e&&(e.classList.contains("hidden")&&at("exitConfirm"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=x("exit-confirm-modal-box");t&&t.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},St=(e=!1)=>{st("exitConfirm",e,()=>{const t=x("exit-confirm-modal"),a=x("exit-confirm-modal-box");t&&t.classList.add("opacity-0"),a&&a.classList.add("scale-95"),setTimeout(()=>{t&&t.classList.add("hidden")},250)})},Rs=()=>{St(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri! 🙏"),setTimeout(()=>{try{window.close()}catch{}},400))},Os=()=>{const e=document.getElementById("pos-receipt-fallback-modal")||document.getElementById("pos-shift-receipt-modal")||document.getElementById("pos-success-modal")||document.getElementById("pos-recall-confirm-modal")||document.getElementById("pos-closed-success-modal");if(e){e.remove();return}if(xe.length>0){try{window.history.back()}catch{const s=xe.pop();pa(s)}return}if(q==="view-admin"){const a=x("admin-content-view"),s=x("admin-dashboard-view");if(!!(a&&!a.classList.contains("hidden")||s&&s.classList.contains("hidden")||window.history.state&&window.history.state.tab||typeof window.cTab<"u"&&window.cTab)){if(window.history.state&&window.history.state.tab&&window.history.length>1)try{window.history.back();return}catch{}typeof window.openAdminMenu=="function"&&window.openAdminMenu();try{window.history.replaceState({view:"view-admin"},"",window.location.href)}catch{}return}if(typeof window.showConfirm=="function"){const o=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=o?"Keluar Panel Owner":"Keluar CMS Toko",l=o?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,l,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}return}if(q==="view-pos-cashier"){typeof window.showConfirm=="function"?window.showConfirm("Keluar Mode Kasir","Yakin keluar dari mode POS kasir?",()=>{typeof window.exitPOSMode=="function"?window.exitPOSMode():Y("view-catalog")},"Ya, Keluar",!0):Y("view-catalog");return}if(q!=="view-catalog"){if(q==="view-payment"){Y("view-checkout");return}if(q==="view-checkout"){Y("view-cart");return}if(q==="view-cart"){Y("view-catalog");return}window.history.length>1?window.history.back():Y("view-catalog");return}const t=x("exit-confirm-modal");t&&!t.classList.contains("hidden")?St():ua()},Es=()=>{ca();try{(!history.state||!history.state.view)&&history.replaceState({view:"view-catalog"},"",window.location.href)}catch{}window.addEventListener("popstate",e=>{if(Me){Me=!1,He&&clearTimeout(He);return}if(xe.length>0){const n=xe.pop();pa(n);return}const t=e.state||{},a=t.view||null;if(window.isAdm||window.__localIsAdm)if(a==="view-admin")Y("view-admin",!0),t.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(t.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu();else{const n=x("admin-content-view");if(n&&!n.classList.contains("hidden")){history.pushState({view:"view-admin"},"",window.location.href),Y("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}if(history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"){const o=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=o?"Keluar Panel Owner":"Keluar CMS Toko",l=o?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,l,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}}else if(a){let n=a;a==="view-admin"&&(n="view-admin-login"),Y(n,!0)}else Y("view-catalog",!0)})};window.pushModalHistory=at;window.requestCloseModal=st;window.changeView=Y;window.setupHistoryRouter=Es;window.onBottomNavClick=Is;window.updateBottomNav=da;window.initPullToRefresh=ca;window.handleAppBackButton=Os;window.openExitConfirmModal=ua;window.closeExitConfirmModal=St;window.confirmExitApp=Rs;window.isProgrammaticModalClose=Me;window.viewHistoryStack=ft;try{Object.defineProperty(window,"curViewName",{get:()=>q,set:e=>{q=e},configurable:!0})}catch{}let bt=null,Ae=null;const Bs=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}Q("Kode "+e+" berhasil disalin!")}catch{Q("Gagal menyalin. Kode: "+e)}},Q=(e,t,a,s)=>{const n=x("toast");if(!n)return;if(!t){const c=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(c)?t="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(c)?t="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(c)?t="warning":/upload|proses|memuat|loading|sedang/.test(c)?t="loading":t="info"}typeof window.triggerHaptic=="function"&&window.triggerHaptic(t==="error"?"error":t==="warning"?"warning":t==="success"?"success":"light");const o=getComputedStyle(document.documentElement),r=o.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",l=o.getPropertyValue("--color-primary").trim()||"#10b981";o.getPropertyValue("--color-primary-dark").trim();const d={success:{icon:"fa-circle-check",label:"Berhasil",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`}},p=d[t]||d.info,g=x("toast-icon");g&&(g.className="fa-solid "+p.icon);const b=x("toast-title");b&&(b.textContent=a||p.label,b.style.display="block",b.style.color=p.accent);const w=x("toast-icon-wrap");w&&(w.style.background=p.iconBg,w.style.color=p.accent),se("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let m=x("toast-progress");m||(m=document.createElement("div"),m.id="toast-progress",n.appendChild(m)),m.style.background=p.accent,m.style.transition="none",m.style.width="100%",m.style.opacity="0.85",clearTimeout(bt),n.classList.add("toast-show");const u=s||(t==="loading"?8e3:t==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{m.style.transition=`width ${u}ms linear`,m.style.width="0%"})),bt=setTimeout(()=>{n.classList.remove("toast-show")},u)},Hs=e=>Q(e,"loading","Memproses...",8e3),Fs=()=>{clearTimeout(bt);const e=x("toast");e&&e.classList.remove("toast-show")},Us=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")};let we=null;const js=(e,t,a,s="Ya, Hapus",n=!0)=>{let o=e,r=t,l=a,d=s,p=n;typeof t=="function"&&(l=t,r=e,o=typeof s=="string"&&s!=="Ya, Hapus"?s:"Konfirmasi Tindakan",d=typeof a=="string"?a:"Ya, Lanjutkan",p=!0);let g=null;typeof l!="function"?(g=new Promise(u=>{we=u}),Ae=null):(Ae=l,we=null),se("confirm-title",o);const b=x("confirm-msg");if(b)if(typeof r=="string"){const u=typeof window.DOMPurify<"u"?window.DOMPurify.sanitize(r,{ADD_ATTR:["class","style"]}):r;b.innerHTML=u}else b.textContent=r||"";const w=x("confirm-yes-btn");w&&(w.innerText=d,p?(w.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 active:scale-95 transition-all text-xs sm:text-sm shadow-md shadow-rose-500/30 cursor-pointer",x("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",x("confirm-icon").className="fa-solid fa-triangle-exclamation"):(w.className="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-2xl hover:opacity-90 active:scale-95 transition-all text-xs sm:text-sm shadow-sm cursor-pointer",x("confirm-icon-box").className="w-16 h-16 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-[var(--color-primary)]/20",x("confirm-icon").className="fa-solid fa-copy"));const m=x("custom-confirm-modal");return m&&m.classList.contains("hidden")&&at("confirm"),aa("custom-confirm-modal"),setTimeout(()=>{x("custom-confirm-modal").classList.remove("opacity-0"),x("custom-confirm-box").classList.remove("scale-95")},10),g},wt=(e=!1)=>{if(we){const t=we;we=null,t(!1)}st("confirm",e,()=>{x("custom-confirm-modal").classList.add("opacity-0"),x("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>sa("custom-confirm-modal"),300)})},Ks=()=>{if(we){const e=we;we=null,Ae=null,wt(),setTimeout(()=>{e(!0)},150);return}if(Ae){const e=Ae;Ae=null,wt(),setTimeout(()=>{e()},150)}},_s=(e,t="",a=null)=>{let s=null,n=null;typeof a!="function"&&(n=new Promise(w=>{s=w}));const o=t!=null?String(t):"",r=o.length>50||o.includes(`
`)||/balasan|catatan|alasan|deskripsi|pesan|keterangan/i.test(e),l=o.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),d=r?`<textarea id="prompt-input" rows="3" class="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 custom-scrollbar resize-none leading-relaxed" placeholder="Tuliskan di sini...">${l}</textarea>`:`<input type="text" id="prompt-input" value="${l}" class="w-full px-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-bold focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 text-center" autocomplete="off" />`;let p=document.createElement("div");p.id="custom-prompt-container",p.className="fixed inset-0 z-[10005] bg-slate-900/85 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300",p.onclick=w=>{w.target===p&&window.closePrompt()},p.innerHTML=`
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
    `,document.body.appendChild(p);const g=p.querySelector("div");at("prompt"),setTimeout(()=>{p.classList.remove("opacity-0"),g.classList.remove("scale-95")},10);const b=p.querySelector("#prompt-input");return b&&(b.focus(),b.select(),b.onkeydown=w=>{w.key==="Enter"&&(!r||w.ctrlKey)?(w.preventDefault(),p.querySelector("#prompt-ok")?.click()):w.key==="Escape"&&(w.preventDefault(),window.closePrompt())}),window.closePrompt=(w=!1)=>{if(!(!p||!p.parentNode)){if(s){const m=s;s=null,m(null)}st("prompt",w,()=>{p.classList.add("opacity-0"),g.classList.add("scale-95"),setTimeout(()=>p.remove(),300),window.closePrompt=null})}},p.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),p.querySelector("#prompt-ok").onclick=()=>{let w=b.value;if(s){const m=s;s=null,window.closePrompt(),m(w)}else window.closePrompt(),typeof a=="function"&&a(w)},n},zs=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=Bs;window.showToast=Q;window.showToastLoading=Hs;window.hideToast=Fs;window.toggleTheme=Us;window.showConfirm=js;window.closeConfirm=wt;window.executeConfirm=Ks;window.customPrompt=_s;window.checkProPrint=zs;const je="utp-thermal-modal",Ze="utp-html-modal";let X=null,At=null,Fe=null,Ue=null;const Xe=()=>{if(document.getElementById("utp-style"))return;const e=document.createElement("style");e.id="utp-style",e.textContent=`
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
    `,document.head.appendChild(e)},ma=()=>{Ue===null&&(Ue=document.body.style.overflow||"",document.body.style.overflow="hidden")},$t=()=>{Ue!==null&&!document.getElementById(je)&&!document.getElementById(Ze)&&(document.body.style.overflow=Ue,Ue=null)},fa=(e,t)=>{nt(),Fe=a=>{const s=a.target&&a.target.tagName||"";a.key==="Escape"?(a.preventDefault(),t()):a.key==="Enter"&&!/INPUT|TEXTAREA|SELECT/.test(s)&&(a.preventDefault(),e())},document.addEventListener("keydown",Fe,!0)},nt=()=>{Fe&&document.removeEventListener("keydown",Fe,!0),Fe=null},qs=e=>{const t=e.deviceType||"rawbt",a=/android/i.test(navigator.userAgent||"");return t==="rawbt"?a||window.AndroidNativeApp?"RawBT Android":"Printer Browser":t==="bluetooth"?"Bluetooth":t==="usb"?"USB OTG":t==="network"?"WiFi / LAN":"Printer Sistem"},Gs=e=>{if(e.html&&/<[a-z][\s\S]*>/i.test(e.html))return`<div class="utp-html-rendered" style="white-space:normal;width:100%;">${e.html}</div>`;let t=Array.isArray(e.previewLines)&&e.previewLines.length?e.previewLines:null;t||(t=String(e.plainText||"").split(`
`).map(s=>({t:s,a:"left",b:!1,s:"normal"})));const a=[...t];for(;a.length>1&&!String(a[a.length-1].t||"").trim();)a.pop();return a.map(s=>{if(s.type==="two-column")return`<div class="utp-row ${s.b?"font-bold":""}"><div class="utp-col-left">${i(s.left)}</div><div class="utp-col-right">${i(s.right)}</div></div>`;if(s.type==="separator")return'<div class="utp-separator"></div>';if(s.type==="double-separator")return'<div class="utp-double-separator"></div>';if(s.isBarcode||s.s==="barcode"||s.type==="barcode")return`
            <div class="utp-barcode-wrap" style="text-align:center;">
                <div class="utp-barcode-bars mx-auto" aria-hidden="true"></div>
                <div class="utp-barcode-code">*${i(s.code||s.t||"")}*</div>
            </div>`;const n=i(String(s.t??""))||"&nbsp;",o=s.a==="center"?"center":s.a==="right"?"right":"left",r=s.b?800:400;return s.s==="title"||s.s==="wide"?`<div class="utp-line utp-title" style="text-align:${o};font-weight:${r}">${n}</div>`:s.s==="tall"||s.s==="total"?`<div class="utp-line utp-tall" style="text-align:${o};font-weight:${r}"><span>${n}</span></div>`:`<div class="utp-line" style="text-align:${o};font-weight:${r}">${n}</div>`}).join("")},ba=()=>{const e=X;if(!e)return;const t=_(),a=de(t.paperSize),s=a>=40,n=Array.isArray(e.previewLines)?e.previewLines.length:String(e.plainText||"").split(`
`).length,o=typeof e.rebuild=="function"?`
        <div class="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70" role="group" aria-label="Ukuran kertas">
            <button type="button" id="utp-paper-58" onclick="window.setThermalPreviewPaper('58mm')" class="utp-seg-btn ${s?"text-slate-600 dark:text-slate-300":"is-active"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">58mm</button>
            <button type="button" id="utp-paper-80" onclick="window.setThermalPreviewPaper('80mm')" class="utp-seg-btn ${s?"is-active":"text-slate-600 dark:text-slate-300"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">80mm</button>
        </div>`:"",r=`
    <div id="${je}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-thermal-title" onclick="if(event.target===this) window.closeThermalPrintPreview()">
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
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-print text-slate-400"></i>${i(qs(t))}</span>
                    <span class="utp-chip bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-check"></i>${n} baris</span>
                </div>
                ${o}
            </div>

            <div class="utp-canvas flex-1 overflow-auto px-3 py-5 sm:px-5 custom-scrollbar">
                <div class="utp-paper mx-auto" style="width:${a}ch;">
                    ${Gs(e)}
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
    </div>`;document.getElementById(je)?.remove(),document.body.insertAdjacentHTML("beforeend",r),setTimeout(()=>document.getElementById("utp-thermal-confirm")?.focus({preventScroll:!0}),60)},wa=e=>!e||typeof e.dispatch!="function"?!1:(Xe(),X={...e},ba(),ma(),fa(()=>xa(),()=>Mt()),!0),Mt=()=>{const e=X;if(document.getElementById(je)?.remove(),X=null,nt(),$t(),e&&typeof e.onCancel=="function")try{e.onCancel()}catch{}},xa=()=>{const e=X;if(e){if(X=null,document.getElementById(je)?.remove(),nt(),$t(),typeof e.onConfirm=="function")try{e.onConfirm()}catch(t){console.warn("[PrintPreview] onConfirm error:",t)}e.dispatch(e.base64,e.plainText,e.html||"")}},Ws=e=>{if(!(!X||typeof X.rebuild!="function")){_e({paperSize:e});try{const t=X.rebuild();t&&(X.base64=t.base64,X.plainText=t.plainText,X.previewLines=t.previewLines,X.html=t.html||"")}catch(t){console.warn("[PrintPreview] Gagal rebuild payload:",t)}ba(),Q(`Ukuran kertas diubah ke ${e} ✅`)}},Vs=()=>{Mt(),typeof window.openPrinterSettingsModal=="function"&&(window.openPrinterSettingsModal(),Q("Atur printer, lalu tekan Cetak lagi untuk melihat preview terbaru."))},Js=(e={})=>{if(!e.html)return!1;Xe(),At={...e};const t=(e.paper||"a4")==="a4";document.getElementById(Ze)?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="${Ze}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-html-title" onclick="if(event.target===this) window.closeHtmlPrintPreview()">
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
    </div>`);const a=document.getElementById("utp-html-frame");if(a){const s=a.contentWindow.document;s.open(),s.write(e.html),s.close()}return ma(),fa(()=>ga(),()=>Ct()),!0},Ct=()=>{document.getElementById(Ze)?.remove(),At=null,nt(),$t()},ga=()=>{const e=document.getElementById("utp-html-frame");if(!(!e||!At)){if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){try{const t=e.contentWindow.document,a=Array.from(t.querySelectorAll("style")).map(n=>n.outerHTML).join("");let s=document.getElementById("a4-print-section");s||(s=document.createElement("div"),s.id="a4-print-section",document.body.appendChild(s)),s.innerHTML=a+t.body.innerHTML,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500)}catch(t){console.warn("[PrintPreview] Native print error:",t)}Ct();return}try{e.contentWindow.focus(),e.contentWindow.print()}catch(t){console.warn("[PrintPreview] iframe print error:",t),Q("Gagal membuka dialog cetak. Coba lagi.","error")}}};typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Xe,{once:!0}):Xe());window.openThermalPrintPreview=wa;window.closeThermalPrintPreview=Mt;window.confirmThermalPrint=xa;window.setThermalPreviewPaper=Ws;window.openPrinterSettingsFromPreview=Vs;window.openHtmlPrintPreview=Js;window.closeHtmlPrintPreview=Ct;window.confirmHtmlPrint=ga;const $=e=>"Rp "+Math.round(Number(e||0)).toLocaleString("id-ID"),ct=e=>Math.round(Number(e||0)).toLocaleString("id-ID"),Ys=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(2).replace(/\.?0+$/,"")},O=e=>e?String(e).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"").replace(/[\r\t]/g," ").replace(/[^\x20-\x7E\n]/g," "):"",F=(e,t)=>{if(!e)return[];const a=O(e).replace(/ +/g," ").trim();if(!a)return[];if(a.length<=t)return[a];const s=a.split(" "),n=[];let o="";for(const r of s)if(r)if(r.length>t){o&&(n.push(o),o="");for(let l=0;l<r.length;l+=t){const d=r.substring(l,l+t);d.length===t?n.push(d):o=d}}else(o?o.length+1+r.length:r.length)<=t?o=o?o+" "+r:r:(n.push(o),o=r);return o&&n.push(o),n},le=(e,t=!1)=>{const a=e?new Date(e):new Date,s=String(a.getDate()).padStart(2,"0"),n=String(a.getMonth()+1).padStart(2,"0"),o=t?a.getFullYear():String(a.getFullYear()).slice(-2),r=String(a.getHours()).padStart(2,"0"),l=String(a.getMinutes()).padStart(2,"0");return`${s}/${n}/${o} ${r}:${l}`},ha=(e,t,a,s=!1)=>{const n=O(String(e||"")).trimEnd(),o=O(String(t||"")).trim(),r=a-n.length-o.length;if(r>=0)return[n+" ".repeat(r)+o];if(s){const p=Math.max(0,a-o.length-1),g=n.substring(0,p).trimEnd(),b=Math.max(1,a-g.length-o.length);return[g+" ".repeat(b)+o]}const l=F(n,a),d=l[l.length-1]||"";if(d.length+1+o.length<=a){const p=a-d.length-o.length;return l[l.length-1]=d+" ".repeat(p)+o,l}else{const p=Math.max(0,a-o.length);return[...l," ".repeat(p)+o]}},Ce=e=>e?i(String(e)).replace(/^ +/gm,t=>"&nbsp;".repeat(t.length)):"";class De{constructor(t=32){this.cols=Number(t)||32,this.bytes=[],this.plainLines=[],this.previewLines=[],this.items=[],this._bold=!1,this._size="normal"}init(){return this.bytes.push(27,64),this}align(t="left"){const a=t==="center"?1:t==="right"?2:0;return this.bytes.push(27,97,a),this}bold(t=!0){return this.bytes.push(27,69,t?1:0),this._bold=!!t,this}size(t="normal"){return this._size=t||"normal",t==="title"?this.bytes.push(29,33,17):t==="tall"||t==="total"?this.bytes.push(29,33,1):t==="wide"?this.bytes.push(29,33,16):this.bytes.push(29,33,0),this}text(t){if(!t)return this;const a=O(t);for(let s=0;s<a.length;s++)this.bytes.push(a.charCodeAt(s));return this}line(t="",a="left"){this.align(a),this.text(t),this.bytes.push(10),this.plainLines.push(t);const s=O(t);return this.previewLines.push({t:s,a,b:this._bold,s:this._size}),this.items.push({type:"line",text:s,align:a,bold:this._bold,size:this._size}),this}centered(t=""){return F(t,this.cols).forEach(s=>this.line(s,"center")),this}twoColumn(t="",a="",s=!1,n=!1){s&&this.bold(!0);const o=ha(t,a,this.cols,n);o.forEach(d=>{this.align("left"),this.text(d),this.bytes.push(10),this.plainLines.push(d)});const r=O(String(t||"")),l=O(String(a||""));return this.previewLines.push({type:"two-column",left:r,right:l,t:o[0],a:"left",b:!!s,s:this._size}),this.items.push({type:"two-column",left:r,right:l,bold:!!s,size:this._size}),s&&this.bold(!1),this}itemRow(t){const a=t.variantName?` (${t.variantName}${t.colorCode?" "+t.colorCode:""})`:"",s=(t.name||"Barang")+a+(t.poTime?" [PO]":"");this.bold(!0),F(s,this.cols).forEach(p=>this.line(p,"left")),this.bold(!1);const o=t.effectivePrice||t.price||0,r=t.subtotal!==void 0?t.subtotal:parseFloat(t.qty||1)*o,l=`  ${Ys(t.qty)} ${t.unit||"pcs"} x ${ct(o)}`,d=ct(r);return this.twoColumn(l,d,!1,!1),t.discount&&t.discount>0&&this.twoColumn("  (Pot. Diskon)",`-${ct(t.discount)}`,!1,!0),t.poTime&&this.line(`  * Estimasi PO: ${t.poTime}`,"left"),this}separator(t="-"){const a=t.repeat(this.cols);return this.align("left"),this.text(a),this.bytes.push(10),this.plainLines.push(a),this.previewLines.push({type:"separator",t:a,a:"left",b:!1,s:"normal"}),this.items.push({type:"separator",char:t}),this}doubleSeparator(){const t="=".repeat(this.cols);return this.align("left"),this.text(t),this.bytes.push(10),this.plainLines.push(t),this.previewLines.push({type:"double-separator",t,a:"left",b:!1,s:"normal"}),this.items.push({type:"double-separator"}),this}feed(t=3){this.bytes.push(27,100,Math.max(1,t));for(let a=0;a<t;a++)this.plainLines.push(""),this.previewLines.push({t:"",a:"left",b:!1,s:"normal"});return this.items.push({type:"feed",lines:t}),this}cut(){return this.bytes.push(29,86,65,3),this}openDrawer(){return this.bytes.push(27,112,0,25,250),this}barcode(t,a="CODE128",s=45){if(!t)return this;const n=O(String(t)).trim();if(!n)return this;if(this.align("center"),this.bytes.push(29,104,Math.max(30,Math.min(100,s))),this.bytes.push(29,119,2),this.bytes.push(29,72,0),a==="CODE39"){this.bytes.push(29,107,4);for(let o=0;o<n.length;o++)this.bytes.push(n.charCodeAt(o));this.bytes.push(0)}else{const o=[];for(let r=0;r<n.length;r++)o.push(n.charCodeAt(r));this.bytes.push(29,107,73,o.length+2,123,66,...o)}return this.plainLines.push(`[BARCODE: ${n}]`),this.previewLines.push({type:"barcode",code:n,t:n,a:"center",b:!1,s:"barcode",isBarcode:!0}),this.items.push({type:"barcode",code:n}),this}toBase64(){const t=new Uint8Array(this.bytes);let a="";const s=t.length,n=8192;for(let o=0;o<s;o+=n){const r=t.subarray(o,o+n);a+=String.fromCharCode.apply(null,r)}return btoa(a)}toPlainText(){return this.plainLines.join(`
`)}toHtml(){let t="";for(const a of this.items)if(a.type==="line"){const s=a.align==="center"?"utp-align-center":a.align==="right"?"utp-align-right":"utp-align-left",n=a.bold?"font-bold":"";let o="";a.size==="title"||a.size==="wide"?o="utp-title":(a.size==="tall"||a.size==="total")&&(o="utp-tall"),!a.text||!a.text.trim()?t+='<div class="utp-empty-line">&nbsp;</div>':t+=`<div class="utp-line ${s} ${n} ${o}">${Ce(a.text)}</div>`}else if(a.type==="two-column"){const s=a.bold?"font-bold":"";let n="";a.size==="title"||a.size==="wide"?n="utp-title":(a.size==="tall"||a.size==="total")&&(n="utp-tall"),t+=`<div class="utp-row ${s} ${n}"><div class="utp-col-left">${Ce(a.left)}</div><div class="utp-col-right">${Ce(a.right)}</div></div>`}else if(a.type==="separator")t+='<div class="utp-separator"></div>';else if(a.type==="double-separator")t+='<div class="utp-double-separator"></div>';else if(a.type==="barcode")t+=`
                <div class="utp-barcode-wrap">
                    <div class="utp-barcode-bars" aria-hidden="true"></div>
                    <div class="utp-barcode-code">*${i(a.code)}*</div>
                </div>`;else if(a.type==="feed"){const s=Math.max(1,a.lines||1)*6;t+=`<div style="height:${s}px;"></div>`}return t}}const Ne=(e,t="",a="",s={})=>{if(!s.skipPreview)return wa({base64:e,plainText:t,html:a,previewLines:s.previewLines,title:s.title,rebuild:s.rebuild,onConfirm:s.onConfirm,onCancel:s.onCancel,dispatch:(n,o,r)=>qt(n,o,r)});if(typeof s.onConfirm=="function")try{s.onConfirm()}catch{}return qt(e,t,a)},qt=(e,t="",a="")=>{const s=/android/i.test(navigator.userAgent||"");if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function")try{return window.AndroidNativeApp.printRawBT(e),Q("Mencetak struk via RawBT... 🖨️"),!0}catch(n){console.warn("[RawBT] AndroidNativeApp error, mencoba intent...",n)}if(s)try{Q("Membuka Printer RawBT... 🖨️");const n=`intent:base64,${e}#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;end;`;return window.location.href=n,setTimeout(()=>{if(!document.hidden)try{window.location.href=`rawbt:base64,${e}`}catch{}},800),!0}catch(n){console.warn("[RawBT] Intent trigger failed:",n)}return Q("Mencetak struk kasir... 🖨️"),Lt(a||t),!0},Lt=e=>{const t=_(),s=de(t.paperSize)>=40,n=s?"80mm":"58mm",o=s?"68mm":"44mm",r=s?"10.5px":"8.8px",l=typeof e=="string"&&e.includes("<")&&e.includes(">");let d=e;l||(d=String(e||"").split(`
`).map(g=>{const b=g.trim();if(!b)return'<div class="utp-empty-line">&nbsp;</div>';if(/^[-]{8,}$/.test(b))return'<div class="utp-separator"></div>';if(/^[=]{8,}$/.test(b))return'<div class="utp-double-separator"></div>';if(/^\[BARCODE:\s*(.+)\]$/i.test(b)){const m=b.replace(/^\[BARCODE:\s*/i,"").replace(/\]$/,"").trim();return`
                <div class="utp-barcode-wrap">
                    <div class="utp-barcode-bars" aria-hidden="true"></div>
                    <div class="utp-barcode-code">*${i(m)}*</div>
                </div>`}const w=g.match(/^(\s{0,4}.+?)\s{3,}(.+)$/);return w&&w[1]&&w[2]?`<div class="utp-row"><div class="utp-col-left">${Ce(w[1])}</div><div class="utp-col-right">${Ce(w[2])}</div></div>`:`<div class="utp-line">${Ce(g)}</div>`}).join(""));try{let p=document.getElementById("thermal-print-iframe");p&&p.remove(),p=document.createElement("iframe"),p.id="thermal-print-iframe",p.style.position="fixed",p.style.right="0",p.style.bottom="0",p.style.width="0",p.style.height="0",p.style.border="0",p.style.visibility="hidden",p.style.zIndex="-9999",document.body.appendChild(p);const g=p.contentDocument||p.contentWindow.document;g.open(),g.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Cetak Struk Thermal</title>
  <style>
    @page {
      margin: 0mm !important;
      size: ${n} auto;
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
      width: ${o} !important;
      max-width: ${o} !important;
      background: #fff;
      color: #000;
      font-family: 'Courier New', Courier, monospace;
      font-size: ${r};
      line-height: 1.25;
      overflow: hidden;
    }
    .utp-thermal-wrap {
      width: ${o} !important;
      max-width: ${o} !important;
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
    ${d}
  </div>
</body>
</html>`),g.close(),setTimeout(()=>{try{p.contentWindow.focus(),p.contentWindow.print()}catch(b){console.warn("[RawBT] Iframe print gagal, fallback ke direct print:",b),Gt(d,n,o)}},120);return}catch(p){console.warn("[RawBT] Gagal membuat isolated print iframe:",p)}Gt(d,n,o)},Gt=(e,t,a)=>{let s=x("thermal-print-section");s||(s=document.createElement("div"),s.id="thermal-print-section",document.body.appendChild(s));const n=t==="80mm";s.className=n?"paper-80mm":"paper-58mm",document.body.classList.remove("paper-58mm","paper-80mm"),document.body.classList.add(n?"paper-80mm":"paper-58mm");let o=document.getElementById("dynamic-print-page-style");o||(o=document.createElement("style"),o.id="dynamic-print-page-style",document.head.appendChild(o)),o.innerHTML=`@media print { @page { margin: 0 !important; size: ${t} auto; } html, body { width: ${a} !important; margin: 0 !important; } }`,s.innerHTML=`
        <div class="utp-thermal-wrap" style="width:${a};max-width:${a};font-family:'Courier New',Courier,monospace;font-size:${n?"10.5px":"8.8px"};line-height:1.25;color:#000;background:#fff;padding:0 ${n?"2.5mm":"1.5mm"} 4mm ${n?"1mm":"0.5mm"};margin:0;box-sizing:border-box;">
            ${e}
        </div>
    `,setTimeout(()=>{window.print()},120)},Qs=()=>{if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.openRawBT=="function"){window.AndroidNativeApp.openRawBT();return}/android/i.test(navigator.userAgent||"")?(window.location.href="intent:#Intent;package=ru.a402d.rawbtprinter;end;",setTimeout(()=>{document.hidden||(window.location.href="https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter")},1200)):window.open("https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter","_blank")},xt=(e,t=null)=>{const a=t||_(),s=de(a.paperSize),n=s>=40,o=new De(s);o.init(),a.openCashDrawer&&e.payment?.method==="cash"&&o.openDrawer();const r=O(a.headerText||f.store?.name||"TOKO PUTRI").trim(),l=O(a.storeAddress!==void 0&&a.storeAddress!==""?a.storeAddress:f.store?.address||"").trim(),d=O(a.storePhone!==void 0&&a.storePhone!==""?a.storePhone:f.store?.wa||"").trim(),p=Math.floor(s/2);r.length<=p?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),F(r.toUpperCase(),s).forEach(T=>o.line(T,"center")),o.size("normal").bold(!1)),a.showAddress!==!1&&l&&F(l,s).forEach(T=>o.line(T,"center")),a.showPhone!==!1&&d&&o.line(`WA: ${d}`,"center");const g=e.payment?.taxNpwp||f.store?.taxNpwp;a.showNpwp!==!1&&g&&o.line(`NPWP: ${g}`,"center"),o.separator("-");const b=le(e.dateMs||Date.now(),n),w=`#${e.txId}`;o.twoColumn(`No : ${w}`,b,!1,!0);const m=O(e.cashierName||"Kasir").trim(),u=!!(e.customer?.isMember||e.customerType==="Member"),c=O(e.customer?.name||"Umum").trim(),M=u?`${c} (Member)`:c,L=`Ksr: ${m}`,D=`Plg: ${M}`;if(L.length+1+D.length<=s?o.twoColumn(L,D,!1,!1):(o.line(L,"left"),o.line(D,"left")),e.customer?.phone&&o.line(`HP : ${e.customer.phone}`,"left"),u&&e.customer?.memberId&&o.line(`ID : ${e.customer.memberId}`,"left"),o.separator("-"),(e.items||[]).forEach(T=>{o.itemRow(T)}),o.separator("-"),o.twoColumn("Subtotal",$(e.subtotal)),(e.globalDiscount||0)>0){const T=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";o.twoColumn(T,`- ${$(e.globalDiscount)}`)}(e.pointDiscount||0)>0&&o.twoColumn(`Diskon Poin (${e.pointsRedeemed||0} Poin)`,`- ${$(e.pointDiscount)}`),e.claimedReward&&e.claimedReward.name&&(o.separator("-"),o.bold(!0).line(`[KLAIM HADIAH: ${O(e.claimedReward.name)}]`,"left").bold(!1),o.twoColumn("Poin Reward Ditukar",`-${e.claimedReward.pointsCost||0} Poin`));const N=Ke(e);if(N.hasPpn){const T=N.ppnAmount>0?`${N.isInclusive?"":"+ "}${$(N.ppnAmount)}`:"Rp 0";o.twoColumn(N.ppnLabel,T)}o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL",$(e.total)).size("normal").bold(!1),o.doubleSeparator();const y=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",h=y?"PUTRI PAYLATER":(e.payment?.method||"CASH").toUpperCase();if(o.twoColumn("Metode Bayar",h),e.payment?.method==="cash")o.twoColumn("Bayar Tunai",$(e.payment.paid)),o.bold(!0).twoColumn("Kembalian",$(e.payment.change)).bold(!1);else if(e.payment?.method==="transfer")e.payment?.bank&&o.twoColumn("Bank Penerima",e.payment.bank);else if(e.payment?.method==="qris")o.twoColumn("Kanal QRIS","QRIS Dinamis (Lunas)");else if(e.payment?.method==="tempo"){if(y){if(o.twoColumn("Limit Terpakai",$(e.payment?.paylaterUsed||e.paylaterUsed||e.total-(e.payment?.tempoDp??0))),e.payment?.paylaterMonths){const T=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${T} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${$(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${$(e.payment.paylaterServiceFee)}`)}if(o.twoColumn("Uang Muka (DP)",$(e.payment?.tempoDp??e.payment?.dp??0)),o.bold(!0).twoColumn(y?"Tagihan PayLater":"Sisa Piutang",$(e.payment.tempoBalance||0)).bold(!1),y&&e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${$(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),e.payment.tempoDueDate){const T=typeof e.payment.tempoDueDate=="number"?new Date(e.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e.payment.tempoDueDate;o.line(`Jatuh Tempo: ${T}`,"left")}}a.showPoints&&(e.pointsEarned>0||(e.pointsRedeemed||0)>0)&&(o.separator("-"),e.pointsEarned>0&&o.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),(e.pointsRedeemed||0)>0&&o.twoColumn("Poin Ditukar",`-${e.pointsRedeemed} Poin`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&o.twoColumn("Sisa Saldo Poin",`${e.finalMemberPoints} Poin`)),a.showBarcode&&(o.separator("-"),o.barcode(`POS-${e.txId}`,"CODE128",45),o.line(`*POS-${e.txId}*`,"center"),o.line("(SCAN DI KASIR)","center")),o.separator("-");const v=O(a.footerText||"Terima Kasih Atas Kunjungan Anda!").trim();v&&F(v,s).forEach(T=>o.line(T,"center"));const k=O(a.footerPolicyNote!==void 0?a.footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa struk resmi.").trim();return k&&(o.line("","center"),F(k,s).forEach(T=>o.line(T,"center"))),o.feed(a.feedLines||3),a.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},gt=(e,t=!1,a=null)=>{const s=a||_(),n=de(s.paperSize),o=n>=40,r=new De(n);r.init();const l=O(s.headerText||f.store?.name||"TOKO PUTRI").trim(),d=O(f.store?.address||"").trim(),p=O(f.store?.wa||"").trim(),g=Math.floor(n/2);l.length<=g?(r.align("center").bold(!0).size("title").line(l.toUpperCase(),"center"),r.size("normal").bold(!1)):(r.align("center").bold(!0).size("tall"),F(l.toUpperCase(),n).forEach(v=>r.line(v,"center")),r.size("normal").bold(!1)),d&&F(d,n).forEach(v=>r.line(v,"center")),p&&r.line(`WA: ${p}`,"center"),r.separator("-");const b=o?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **";r.bold(!0).line(b,"center").bold(!1),r.separator("-");const w=le(e.startTime,o),m=le(e.endTime||Date.now(),o);r.twoColumn("Shift ID",`#${e.shiftNo||e.id||"-"}`,!1,!0),r.twoColumn("Kasir",(e.cashierName||"Kasir").substring(0,o?20:12),!1,!0),r.twoColumn("Mulai",w,!1,!0),r.twoColumn("Selesai",m,!1,!0),r.separator("-");const u=parseFloat(e.startingCash)||0,c=parseFloat(e.cashSales)||0,M=parseFloat(e.qrisSales)||0,L=parseFloat(e.bankSales||e.transferSales)||0,D=parseFloat(e.tempoSales)||0,N=parseFloat(e.totalSales)||c+M+L+D,y=e.txCount||0;if(r.bold(!0).line("RINGKASAN PENJUALAN","left").bold(!1),r.twoColumn("Modal Awal Laci",$(u)),r.twoColumn("Penjualan Tunai",$(c)),M>0&&r.twoColumn("Penjualan QRIS",$(M)),L>0&&r.twoColumn("Penjualan Transfer",$(L)),D>0&&r.twoColumn("Penjualan Tempo",$(D)),r.separator("-"),r.twoColumn("Total Transaksi",`${y} Trx`),r.bold(!0).size("tall").twoColumn("TOTAL OMSET",$(N)).size("normal").bold(!1),r.doubleSeparator(),!t){const v=u+c,k=e.actualCash!==void 0?parseFloat(e.actualCash):v,T=k-v,j=T===0?"PAS (0)":T>0?`+${$(T)}`:`-${$(Math.abs(T))}`;r.bold(!0).line("REKONSILIASI KAS FISIK","left").bold(!1),r.twoColumn("Kas Diharapkan",$(v)),r.twoColumn("Kas Fisik Aktual",$(k)),r.bold(!0).twoColumn("Selisih Kas",j,!0).bold(!1),e.closingNotes&&F(`Catatan: ${e.closingNotes}`,n).forEach(R=>r.line(R,"left")),r.separator("-"),r.line("Verifikasi & Tanda Tangan:","left"),r.feed(2);const I=Math.floor(n/2),A="( Kasir )",S=o?"( Supervisor/Owner )":"( Supervisor )",C=Math.max(0,Math.floor((I-A.length)/2)),H=Math.max(0,Math.floor((I-S.length)/2)),V=" ".repeat(C)+A+" ".repeat(Math.max(1,I-C-A.length))+" ".repeat(H)+S;r.line(V,"left"),r.separator("-")}const h=s.footerText||"Laporan Kasir Resmi Toko Putri";return F(h,n).forEach(v=>r.line(v,"center")),r.feed(s.feedLines||3),s.autoCut&&r.cut(),{base64:r.toBase64(),plainText:r.toPlainText(),previewLines:r.previewLines,html:r.toHtml()}},ht=(e,t=null)=>{const a=t||_(),s=de(a.paperSize),n=s>=40,o=new De(s);o.init();const r=O(a.headerText||f.store?.name||"TOKO PUTRI").trim(),l=O(a.storeAddress!==void 0&&a.storeAddress!==""?a.storeAddress:f.store?.address||"").trim(),d=O(a.storePhone!==void 0&&a.storePhone!==""?a.storePhone:f.store?.wa||"").trim(),p=Math.floor(s/2);r.length<=p?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),F(r.toUpperCase(),s).forEach(v=>o.line(v,"center")),o.size("normal").bold(!1)),a.showAddress!==!1&&l&&F(l,s).forEach(v=>o.line(v,"center")),a.showPhone!==!1&&d&&o.line(`WA: ${d}`,"center");const g=e.payment?.taxNpwp||f.store?.taxNpwp;a.showNpwp!==!1&&g&&o.line(`NPWP: ${g}`,"center"),o.separator("-");const b=le(e.dateString||e.dateMs||Date.now(),n);o.twoColumn(`Order: #${e.orderId}`,b,!1,!0);const w=(e.customer?.name||"Guest").substring(0,n?18:11),m=e.customer?.deliveryMethod==="delivery"?"Kirim":"Ambil";o.twoColumn(`Plg  : ${w}`,`Tipe: ${m}`,!1,!0),e.customer?.phone&&o.line(`HP   : ${e.customer.phone}`,"left"),e.customer?.note&&F(`Cat  : ${e.customer.note}`,s).forEach(v=>o.line(v,"left")),o.separator("-");const u=Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[];u.length>0?u.forEach(v=>{o.itemRow(v)}):o.line("- Tidak ada rincian barang -","center"),o.separator("-");const c=Ke(e),M=c.subtotal,L=c.shipping,D=c.grandTotal;if(o.twoColumn("Subtotal",$(M)),(e.customer?.deliveryMethod==="delivery"||e.deliveryMethod==="delivery")&&o.twoColumn("Ongkos Kirim",$(L)),c.productDiscount&&o.twoColumn("Potongan Harga",`- ${$(c.productDiscount)}`),c.shippingDiscount&&o.twoColumn("Potongan Ongkir",`- ${$(c.shippingDiscount)}`),c.pointDiscount>0&&o.twoColumn("Potongan Poin",`- ${$(c.pointDiscount)}`),c.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${$(c.paylaterAdminFee)}`),c.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${$(c.paylaterServiceFee)}`),c.hasPpn){const v=c.ppnAmount>0?`${c.isInclusive?"":"+ "}${$(c.ppnAmount)}`:"Rp 0";o.twoColumn(c.ppnLabel,v)}o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL",$(D)).size("normal").bold(!1),o.doubleSeparator();const N=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater";if(o.twoColumn("Metode Bayar",N?"PUTRI PAYLATER":(e.payment?.method||"Tunai").toUpperCase()),N){if(e.payment?.paylaterMonths){const v=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${v} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${$(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${$(e.payment.paylaterServiceFee)}`),e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${$(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`)}a.showPoints&&(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(o.separator("-"),e.pointsEarned>0&&o.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),e.finalMemberPoints!==void 0&&o.twoColumn("Saldo Poin",`${e.finalMemberPoints} Poin`)),a.showBarcode&&(o.separator("-"),o.barcode(`ORDER-${e.orderId}`,"CODE128",45),o.line(`*ORDER-${e.orderId}*`,"center"),o.line("(SCAN DI KASIR)","center")),o.separator("-");const y=O(a.footerText||"Terima Kasih Atas Kunjungan Anda!").trim();y&&F(y,s).forEach(v=>o.line(v,"center"));const h=O(a.footerPolicyNote!==void 0?a.footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa struk resmi.").trim();return h&&(o.line("","center"),F(h,s).forEach(v=>o.line(v,"center"))),o.feed(a.feedLines||3),a.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},yt=(e,t=null)=>{const a=t||_(),s=de(a.paperSize),n=s>=40,o=new De(s);o.init();const r=O(a.headerText||f.store?.name||"TOKO PUTRI").trim(),l=O(a.storeAddress!==void 0&&a.storeAddress!==""?a.storeAddress:f.store?.address||"").trim(),d=O(a.storePhone!==void 0&&a.storePhone!==""?a.storePhone:f.store?.wa||"").trim(),p=Math.floor(s/2);r.length<=p?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),F(r.toUpperCase(),s).forEach(R=>o.line(R,"center")),o.size("normal").bold(!1)),a.showAddress!==!1&&l&&F(l,s).forEach(R=>o.line(R,"center")),a.showPhone!==!1&&d&&o.line(`WA: ${d}`,"center");const g=e.payment?.taxNpwp||f.store?.taxNpwp;a.showNpwp!==!1&&g&&o.line(`NPWP: ${g}`,"center"),o.separator("-");const b=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",w=e.payment?.paymentStatus==="lunas"||parseFloat(e.payment?.tempoBalance||0)<=0,m=n?b?w?"*** NOTA PUTRI PAYLATER (LUNAS) ***":"*** NOTA TAGIHAN PUTRI PAYLATER ***":w?"*** NOTA TEMPO (LUNAS) ***":"*** NOTA TAGIHAN TEMPO (PIUTANG) ***":b?w?"** PAYLATER (LUNAS) **":"** NOTA PUTRI PAYLATER **":w?"** NOTA TEMPO (LUNAS) **":"** NOTA TAGIHAN TEMPO **";o.bold(!0).line(m,"center").bold(!1),o.separator("-");const u=le(e.dateString||e.timestamp||Date.now(),n);o.twoColumn(`Order: #${e.orderId}`,u,!1,!0);const c=(e.customer?.name||"Pelanggan").substring(0,n?18:11);if(o.twoColumn(`Plg  : ${c}`,b?"Tipe: PayLater":"Tipe: Tempo",!1,!0),b&&e.payment?.paylaterMonths){const R=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${R} (${e.payment.paylaterMonths}x)`,!1,!0)}(e.customer?.phone||e.customer?.wa)&&o.line(`HP   : ${e.customer.wa||e.customer.phone}`,"left");let M=parseFloat(e.payment?.tempoBalance)||0,L=e.payment?.tempoPenaltyRate!==void 0?parseFloat(e.payment.tempoPenaltyRate):1,D=e.payment?.tempoPenaltyStopped===!0,N=0,y=e.payment?.tempoDueDate||0,h=0,v=0,k=!1,T=!1;const j=Date.now();y>0&&(j>y?(h=Math.floor((j-y)/(24*60*60*1e3)),h>0&&(k=!0)):(v=Math.ceil((y-j)/(24*60*60*1e3)),v<=3&&(T=!0))),D?N=parseFloat(e.payment?.tempoFixedPenalty)||0:k&&(N=L/100*M*h);let I=M+N;const A=e.payment?.installments||[],S=A.reduce((R,E)=>R+(parseFloat(E.amount)||0),0),C=e.payment?.grandTotal||M+S;if(y>0){const R=le(y,n);let E="";w?E="LUNAS":k?E=`Telat ${h} Hari`:T?E=`H-${v<=0?0:v}`:E=`Sisa ${v} Hari`,o.twoColumn(`J.Tmp: ${R}`,E,!1,!0)}o.separator("-"),(e.items||[]).forEach(R=>{o.itemRow(R)}),o.separator("-"),o.twoColumn("Total Transaksi",$(C)),b&&(e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${$(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Penanganan",`+ ${$(e.payment.paylaterServiceFee)}`)),A.length>0&&(o.separator("-"),o.bold(!0).line("HISTORI PEMBAYARAN CICILAN:","left").bold(!1),A.forEach((R,E)=>{const U=le(R.date,n);o.twoColumn(`${E+1}. ${U}`,$(R.amount))}),o.twoColumn("Total Terbayar",$(S),!0)),o.twoColumn("Sisa Pokok",$(M)),b&&e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${$(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),N>0&&o.twoColumn(`Denda (${h} Hari)`,`+ ${$(N)}`),o.doubleSeparator(),o.bold(!0).size("tall").twoColumn(b?"TAGIHAN PAYLATER":"SISA TAGIHAN",$(w?0:I)).size("normal").bold(!1),o.doubleSeparator(),!w&&f.banks&&f.banks.length>0&&(o.line("REKENING TRANSFER RESMI:","left"),(f.banks||[]).forEach(R=>{o.line(`${R.bank||R.bankName||"Bank"}: ${R.number||R.bankAccount||"-"}`,"left"),o.line(`a/n ${R.name||R.bankOwner||"-"}`,"left")}),o.separator("-")),a.showBarcode&&(o.separator("-"),o.barcode(b?`PAYLATER-${e.orderId}`:`TEMPO-${e.orderId}`,"CODE128",45),o.line(b?`*PAYLATER-${e.orderId}*`:`*TEMPO-${e.orderId}*`,"center"),o.line(b?"(PUTRI PAYLATER RESMI)":"(NOTA TEMPO RESMI)","center")),o.separator("-");const H=O(a.footerText||"Terima Kasih Atas Kerja Sama & Kepercayaannya!").trim();H&&F(H,s).forEach(R=>o.line(R,"center"));const V=O(a.footerPolicyNote!==void 0?a.footerPolicyNote:"").trim();return V&&(o.line("","center"),F(V,s).forEach(R=>o.line(R,"center"))),o.feed(a.feedLines||3),a.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},vt=(e=null)=>{const t=e||_(),a=de(t.paperSize),s=a>=40,n=new De(a);n.init();const o=O(t.headerText||f.store?.name||"TOKO PUTRI").trim(),r=O(t.storeAddress!==void 0&&t.storeAddress!==""?t.storeAddress:f.store?.address||"").trim(),l=O(t.storePhone!==void 0&&t.storePhone!==""?t.storePhone:f.store?.wa||"").trim(),d=Math.floor(a/2);o.length<=d?(n.align("center").bold(!0).size("title").line(o.toUpperCase(),"center"),n.size("normal").bold(!1)):(n.align("center").bold(!0).size("tall"),F(o.toUpperCase(),a).forEach(m=>n.line(m,"center")),n.size("normal").bold(!1)),t.showAddress!==!1&&r&&F(r,a).forEach(m=>n.line(m,"center")),t.showPhone!==!1&&l&&n.line(`WA: ${l}`,"center"),n.separator("-");const p=s?`*** UJI COBA CETAK STRUK THERMAL ${a} KOLOM ***`:`** UJI CETAK THERMAL ${a} KOLOM **`;n.bold(!0).line(p,"center").bold(!1),n.separator("-"),n.line("MISTAR KALIBRASI TEPI KERTAS:","left");let g="";for(let m=1;m<=a;m++)g+=String(m%10);n.line(g,"left");let b="";for(let m=1;m<=a;m++)m===a||m%10===0?b+="|":m%5===0?b+=":":b+=".";n.line(b,"left"),n.line(`(Pastikan angka ${a%10} paling kanan tercetak utuh)`,"left"),n.separator("-");const w=le(Date.now(),s);if(n.line(`Waktu   : ${w}`,"left"),n.line(`Format  : Thermal ${a} Kolom (${t.paperSize})`,"left"),n.line("Driver  : RAWBT FREE PRINT SERVICE","left"),n.line("Status  : 100% PRESISI & SIAP PAKAI","left"),n.separator("-"),n.bold(!0).twoColumn("ITEM SIMULASI","HARGA").bold(!1),n.itemRow({name:"Kertas Thermal Kasir Roll",qty:2,unit:"roll",price:15e3,subtotal:3e4}),n.itemRow({name:"Semen Portland Komposit 40kg",qty:1,unit:"sak",price:65e3,subtotal:65e3}),n.separator("-"),n.twoColumn("Subtotal",$(95e3)),n.twoColumn("Diskon Uji Coba",`- ${$(5e3)}`),n.doubleSeparator(),n.bold(!0).size("tall").twoColumn("TOTAL TES",$(9e4)).size("normal").bold(!1),n.doubleSeparator(),n.twoColumn("Bayar Tunai",$(1e5)),n.bold(!0).twoColumn("Kembalian",$(1e4)).bold(!1),t.showPoints&&(n.separator("-"),n.twoColumn("Simulasi Poin Member","+10 Poin")),t.showBarcode){n.separator("-");const m=`TEST-${Date.now().toString().slice(-6)}`;n.barcode(m,"CODE128",45),n.line(`*${m}*`,"center"),n.line("(BARCODE TEST BERHASIL)","center")}return n.separator("-"),F(t.footerText||"Terima kasih atas kunjungan Anda!",a).forEach(m=>n.line(m,"center")),t.footerPolicyNote&&(n.line("","center"),F(t.footerPolicyNote,a).forEach(m=>n.line(m,"center"))),F("Hasil cetak telah terkalibrasi presisi.",a).forEach(m=>n.line(m,"center")),n.feed(t.feedLines||3),t.autoCut&&n.cut(),{base64:n.toBase64(),plainText:n.toPlainText(),previewLines:n.previewLines,html:n.toHtml()}},ot=e=>{const t=document.getElementById(e);return!!t&&!t.classList.contains("hidden")},Zs=e=>{if(!e){Q("Data transaksi kasir tidak ditemukan.","warning");return}const t=_(),a=xt(e,t),s=ot("pos-receipt-fallback-modal");Ne(a.base64,a.plainText,a.html,{skipPreview:s,previewLines:a.previewLines,title:`Struk Kasir #${e.txId||""}`,rebuild:()=>xt(e,_()),onConfirm:()=>{document.getElementById("pos-success-modal")?.remove(),document.getElementById("pos-receipt-fallback-modal")?.remove()}})},Xs=(e,t=!1)=>{if(!e){Q("Data shift tidak ditemukan.","warning");return}const a=_(),s=gt(e,t,a),n=ot("pos-shift-receipt-modal");Ne(s.base64,s.plainText,s.html,{skipPreview:n,previewLines:s.previewLines,title:`${t?"Ringkasan Shift (X-Report)":"Rekap Tutup Shift (Z-Report)"} #${e.shiftNo||e.id||""}`,rebuild:()=>gt(e,t,_()),onConfirm:()=>document.getElementById("pos-shift-receipt-modal")?.remove()})},en=async(e=null)=>{const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||ye,a=String(t||"").replace(/^#/,"").trim(),s=d=>{if(!d)return!1;const p=String(d.orderId||"").replace(/^#/,"").trim();return a?p===a||p.endsWith(a)||a.endsWith(p):!0};let n=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(n=e),(!n||!n.items||n.items.length===0)&&s(window.currentCustomerOrder)&&(n=window.currentCustomerOrder),(!n||!n.items||n.items.length===0)&&s(window.lastPrintedOrder)&&(n=window.lastPrintedOrder),(!n||!n.items||n.items.length===0)&&(ve||[]).length>0){const d=ve.find(s);d&&Array.isArray(d.items)&&d.items.length>0&&(n=d)}if((!n||!n.items||n.items.length===0)&&Array.isArray(K)){const d=K.find(s);d&&Array.isArray(d.items)&&d.items.length>0&&(n=d)}if((!n||!n.items||n.items.length===0)&&a)try{const d=typeof re<"u"&&re?re:window.db;if(d){let p=await d.collection("freshmart_orders").doc(a).get();if(!p.exists&&!a.startsWith("ORD-")){const g=await d.collection("freshmart_orders").doc("ORD-"+a).get();g.exists&&(p=g)}if(p&&p.exists&&(n=p.data(),n.orderId=n.orderId||p.id,window.currentCustomerOrder=n,window.lastPrintedOrder=n,Array.isArray(K))){const g=K.findIndex(s);if(g!==-1){K[g].items=n.items||[],K[g].payment=n.payment||{},K[g].customer=n.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(K))}catch{}}}}}catch(d){console.warn("[RawBT] Gagal fetch order detail from Firestore:",d)}if(!n&&Array.isArray(K)&&(n=K.find(s)),!n){Q("Data pesanan tidak ditemukan.","warning");return}window.lastPrintedOrder=n;const o=_(),r=ht(n,o),l=ot("receipt-preview-modal");Ne(r.base64,r.plainText,r.html,{skipPreview:l,previewLines:r.previewLines,title:`Struk Pesanan #${n.orderId||""}`,rebuild:()=>ht(n,_()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&l&&window.closeReceiptPreviewModal()}})},tn=(e=null)=>{const t=e||ye;let s=(window.cachedPiutangOrders||[]).find(l=>String(l.orderId)===String(t))||(ve||[]).find(l=>String(l.orderId)===String(t));if(!s&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(t)&&(s=window.lastPrintedOrder),!s){if(typeof window.previewTempoReceipt=="function"&&t&&!window.__tempoReceiptFetching){window.__tempoReceiptFetching=!0,Promise.resolve(window.previewTempoReceipt(t)).finally(()=>{window.__tempoReceiptFetching=!1});return}Q("Data nota piutang tidak ditemukan.","warning");return}const n=_(),o=yt(s,n),r=ot("receipt-preview-modal");Ne(o.base64,o.plainText,o.html,{skipPreview:r,previewLines:o.previewLines,title:`Nota Tagihan Tempo #${s.orderId||""}`,rebuild:()=>yt(s,_()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&r&&window.closeReceiptPreviewModal()}})},an=()=>{const e=_(),t=vt(e);Ne(t.base64,t.plainText,t.html,{previewLines:t.previewLines,title:"Uji Coba Cetak Printer",rebuild:()=>vt(_())})};window.cleanLineAscii=O;window.wrapWords=F;window.formatTwoColumn=ha;window.formatCompactDate=le;window.EscPosBuilder=De;window.sendToRawBT=Ne;window.renderThermalDOMAndPrint=Lt;window.openRawBTApp=Qs;window.buildPOSReceiptPayload=xt;window.buildShiftReceiptPayload=gt;window.buildOrderReceiptPayload=ht;window.buildTempoReceiptPayload=yt;window.buildTestReceiptPayload=vt;window.printPOSReceiptDirect=Zs;window.printShiftSettlementDirect=Xs;window.printCustomerReceiptDirect=en;window.printTempoReceiptDirect=tn;window.executeRawBTTestPrint=an;const Dt=async(e=null)=>{if(e&&typeof Ft=="function"&&typeof e=="string"&&Ft(e),typeof window.printCustomerReceiptDirect=="function")return window.printCustomerReceiptDirect(e);const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||ye,a=String(t||"").replace(/^#/,"").trim(),s=S=>{if(!S)return!1;const C=String(S.orderId||"").replace(/^#/,"").trim();return a?C===a||C.endsWith(a)||a.endsWith(C):!0};let n=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(n=e),(!n||!n.items||n.items.length===0)&&s(window.currentCustomerOrder)&&(n=window.currentCustomerOrder),(!n||!n.items||n.items.length===0)&&s(window.lastPrintedOrder)&&(n=window.lastPrintedOrder),(!n||!n.items||n.items.length===0)&&(ve||[]).length>0){const S=ve.find(s);S&&Array.isArray(S.items)&&S.items.length>0&&(n=S)}if((!n||!n.items||n.items.length===0)&&Array.isArray(K)){const S=K.find(s);S&&Array.isArray(S.items)&&S.items.length>0&&(n=S)}if((!n||!n.items||n.items.length===0)&&a)try{const S=typeof re<"u"&&re?re:window.db;if(S){let C=await S.collection("freshmart_orders").doc(a).get();if(!C.exists&&!a.startsWith("ORD-")){const H=await S.collection("freshmart_orders").doc("ORD-"+a).get();H.exists&&(C=H)}if(C&&C.exists&&(n=C.data(),n.orderId=n.orderId||C.id,window.currentCustomerOrder=n,window.lastPrintedOrder=n,Array.isArray(K))){const H=K.findIndex(s);if(H!==-1){K[H].items=n.items||[],K[H].payment=n.payment||{},K[H].customer=n.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(K))}catch{}}}}}catch(S){console.warn("[Receipt] Gagal fetch order detail from Firestore:",S)}if(!n&&Array.isArray(K)&&(n=K.find(s)),!n)return;window.lastPrintedOrder=n;const o=typeof _=="function"?_():{paperSize:"58mm",showPoints:!0,showBarcode:!0},l=de(o.paperSize)>=40,d=le(n.dateString||n.date||Date.now(),l),p=o.headerText||f.store.name||"Toko Putri",g=o.storeAddress!==void 0&&o.storeAddress!==""?o.storeAddress:f.store.address||"",b=o.storePhone!==void 0&&o.storePhone!==""?o.storePhone:f.store.wa||"",w=(S,C)=>`<div class="utp-row"><div class="utp-col-left">${i(S)}</div><div class="utp-col-right">${i(C)}</div></div>`,m=Array.isArray(n.items)?n.items:Array.isArray(n.cart)?n.cart:[],u=Ke(n),c=u.subtotal,M=u.shipping,L=u.grandTotal,D=String(n.payment?.method||n.method||"Tunai").toUpperCase(),N=n.customer?.name||n.customerName||"Guest",y=n.customer?.deliveryMethod==="delivery"||n.deliveryMethod==="delivery";let h=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${i(p)}</div>`;o.showAddress!==!1&&g&&(h+=`<div class="text-center" style="font-size:10px;color:#475569;margin-bottom:2px;">${i(g)}</div>`),o.showPhone!==!1&&b&&(h+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${i(b)}</div>`);const v=n.payment?.taxNpwp||f.store?.taxNpwp;if(o.showNpwp!==!1&&v&&(h+=`<div class="text-center" style="font-size:10px;font-family:monospace;margin-bottom:4px;">NPWP: ${i(v)}</div>`),h+='<div class="utp-separator"></div>',h+=w(`Order: #${n.orderId}`,d),h+=w(`Plg  : ${i(N).substring(0,l?18:10)}`,`Tipe: ${y?"Kirim":"Ambil"}`),(n.customer?.phone||n.customerPhone)&&(h+=`<div class="utp-line">HP   : ${i(n.customer?.phone||n.customerPhone)}</div>`),h+='<div class="utp-separator"></div>',n.customer?.note&&(h+=`<div style="white-space:pre-wrap;word-break:break-word;">Cat: ${i(n.customer.note)}</div><div class="utp-separator"></div>`),m.length>0?m.forEach(S=>{let C=S.variantName?` (${i(S.variantName)}${S.colorCode?" "+i(S.colorCode):""})`:"";const H=i(S.name||"Barang")+C+(S.poTime?" [PO]":""),V=S.effectivePrice||S.price||0,R=`  ${parseFloat(S.qty||1)} ${i(S.unit||"pcs")} x ${Math.round(V).toLocaleString("id-ID")}`,E=(parseFloat(S.qty||1)*V).toLocaleString("id-ID");h+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;">${H}</div>${w(R,E)}`,S.poTime&&(h+=`<div style="font-size:10px;font-style:italic;color:#4b5563;">  * Estimasi PO: ${i(S.poTime)}</div>`)}):h+='<div style="font-style:italic;color:#64748b;text-align:center;padding:4px 0;">- Tidak ada rincian barang -</div>',h+=`<div class="utp-separator"></div>${w("Subtotal",c.toLocaleString("id-ID"))}`,y&&(h+=w("Ongkir",M.toLocaleString("id-ID"))),u.shippingDiscount&&(h+=w("Pot.Ongkir",`-${u.shippingDiscount.toLocaleString("id-ID")}`)),u.productDiscount&&(h+=w("Pot.Harga",`-${u.productDiscount.toLocaleString("id-ID")}`)),u.pointDiscount>0&&(h+=w("Pot.Poin",`-${u.pointDiscount.toLocaleString("id-ID")}`)),u.paylaterAdminFee>0&&(h+=w("Biaya Admin",`+${u.paylaterAdminFee.toLocaleString("id-ID")}`)),u.paylaterServiceFee>0&&(h+=w("Biaya Layanan",`+${u.paylaterServiceFee.toLocaleString("id-ID")}`)),u.hasPpn){const S=u.ppnAmount>0?`${u.isInclusive?"":"+"}${u.ppnAmount.toLocaleString("id-ID")}`:"0";h+=w(u.ppnLabel,S)}if(h+=`<div class="utp-double-separator"></div><div class="font-bold text-[12px]">${w("TOTAL","Rp "+L.toLocaleString("id-ID"))}</div>${w("Metode Bayar",D)}`,n.payment?.method==="tempo"||n.payment?.isPaylater||n.payment?.subMethod==="paylater"){if(!!(n.payment?.isPaylater||n.payment?.subMethod==="paylater")){if(n.payment?.paylaterMonths){const C=n.payment?.paylaterTenor==="2m"?"2 Bulan":n.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari";h+=w("Tenor Cicilan",`${C} (${n.payment.paylaterMonths}x)`)}n.payment?.paylaterMonthlyInstallment&&(h+=`<div class="font-bold">${w("Angsuran/Bln","Rp "+Math.round(n.payment.paylaterMonthlyInstallment).toLocaleString("id-ID"))}</div>`),n.payment?.tempoDp>0&&(h+=w("Uang Muka (DP)","Rp "+Math.round(n.payment.tempoDp).toLocaleString("id-ID"))),h+=`<div class="font-bold">${w("Tagihan PayLater","Rp "+Math.round(n.payment?.tempoBalance||L).toLocaleString("id-ID"))}</div>`}else n.payment?.tempoDp>0&&(h+=w("Uang Muka (DP)","Rp "+Math.round(n.payment.tempoDp).toLocaleString("id-ID"))),h+=`<div class="font-bold">${w("Sisa Piutang","Rp "+Math.round(n.payment?.tempoBalance||L).toLocaleString("id-ID"))}</div>`;if(n.payment?.tempoDueDate){const C=typeof n.payment.tempoDueDate=="number"?new Date(n.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):n.payment.tempoDueDate;h+=w("Jatuh Tempo",C)}}o.showPoints&&(n.pointsEarned>0||n.finalMemberPoints!==void 0)&&(h+='<div class="utp-separator"></div>',n.pointsEarned>0&&(h+=w("Poin Didapat","+"+n.pointsEarned+" Poin")),n.finalMemberPoints!==void 0&&n.finalMemberPoints!==null&&(h+=`<div class="font-bold">${w("Saldo Poin",String(n.finalMemberPoints)+" Poin")}</div>`),n.claimedReward&&(h+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;margin-top:2px;">HADIAH: ${i(n.claimedReward.name)}</div>`)),m.some(S=>S&&S.poTime&&S.poTime!=="")&&(h+='<div class="utp-separator"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),o.showBarcode&&(h+=`<div class="utp-separator"></div>
        <div style="text-align:center;margin:6px 0 3px;">
            <div style="width:75%;max-width:200px;height:32px;margin:0 auto;background:repeating-linear-gradient(90deg,#000 0px,#000 2px,transparent 2px,transparent 4px,#000 4px,#000 7px,transparent 7px,transparent 9px,#000 9px,#000 11px,transparent 11px,transparent 13px,#000 13px,#000 16px,transparent 16px,transparent 18px,#000 18px,#000 19px,transparent 19px,transparent 22px);border-top:1px solid #000;border-bottom:1px solid #000;"></div>
            <div style="font-family:monospace;letter-spacing:2px;font-size:10.5px;font-weight:bold;margin-top:3px;">*ORDER-${i(n.orderId)}*</div>
            <div style="font-size:8px;color:#666;">SCAN DI KASIR</div>
        </div>`),h+=`<div class="utp-separator"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${i(o.footerText||"Terima Kasih Atas Kunjungan Anda")}</div>`,o.footerPolicyNote&&(h+=`<div class="text-center my-1" style="font-size:9px;line-height:1.25;color:#475569;">${i(o.footerPolicyNote)}</div>`),h+='<div class="utp-separator"></div><div style="height:15px;"></div>',na("receipt-paper-content",h);const T=x("receipt-paper-content");T&&(T.style.width=l?"340px":"260px");const j=x("receipt-preview-modal-box");j&&(j.classList.remove("max-w-[320px]","max-w-[400px]"),j.classList.add(l?"max-w-[400px]":"max-w-[320px]"));const I=x("receipt-preview-modal"),A=x("receipt-preview-modal-box");I&&I.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),tt(I,A)},sn=(e=!1)=>{const t=x("receipt-preview-modal"),a=x("receipt-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{ke(t,a)}):ke(t,a))},nn=()=>{const e=ye||(window.lastPrintedOrder?window.lastPrintedOrder.orderId:null);if(typeof window.printCustomerReceiptDirect=="function"){window.printCustomerReceiptDirect(e);return}if(!((ve||[]).find(s=>s.orderId===ye)||(Array.isArray(K)?K.find(s=>s.orderId===ye):null)||window.lastPrintedOrder))return;const a=x("receipt-paper-content")?x("receipt-paper-content").innerHTML:"";Lt(a)};window.openReceiptPreview=Dt;window.openCustomerReceiptPreview=e=>{Dt(e)};window.closeReceiptPreviewModal=sn;window.executePrintReceipt=nn;window.checkProPrint=()=>{Dt()};const W={OWNER:"owner",ADMIN:"admin",CASHIER:"cashier"},on=[{key:"orders",label:"Pesanan Online",desc:"Proses status pesanan, update resi pengiriman & konfirmasi bayar",group:"operasional",icon:"fa-receipt"},{key:"products",label:"Katalog Produk & Stok",desc:"Tambah/edit produk, atur varian, dan perbarui stok barang",group:"operasional",icon:"fa-box-open"},{key:"suppliers",label:"Supplier & Rekanan",desc:"Kelola master data supplier, kontak kulakan, dan asal produk",group:"operasional",icon:"fa-truck-field"},{key:"purchases",label:"Order Kulakan (PO)",desc:"Buat PO pembelian grosir, terima restock, & kelola hutang rekanan",group:"operasional",icon:"fa-cart-flatbed"},{key:"piutang",label:"Piutang Tempo & Cicilan",desc:"Kelola nota piutang pelanggan, denda keterlambatan, & cicilan",group:"operasional",icon:"fa-clock-rotate-left"},{key:"customers",label:"Database Pelanggan",desc:"Lihat daftar member, atur limit kredit PayLater, & mutasi poin",group:"operasional",icon:"fa-address-book"},{key:"pos",label:"Kasir POS",desc:"Akses antarmuka penjualan kasir toko fisik dan shift kasir",group:"operasional",icon:"fa-cash-register"},{key:"expenses",label:"Biaya Operasional Toko",desc:"Buku kas pengeluaran operasional toko harian & nota kas",group:"operasional",icon:"fa-money-bill-transfer"},{key:"stock_opname",label:"Stock Opname (Audit Fisik)",desc:"Audit stok fisik rak/gudang, rekonsiliasi selisih & terapkan penyesuaian stok",group:"operasional",icon:"fa-clipboard-check"},{key:"categories",label:"Kategori Produk",desc:"Tambah dan susun kategori etalase produk",group:"konten",icon:"fa-tags"},{key:"brands",label:"Merek Produk",desc:"Kelola daftar brand dagang barang",group:"konten",icon:"fa-copyright"},{key:"colors",label:"Database Warna",desc:"Katalog warna produk dan swatch varian",group:"konten",icon:"fa-swatchbook"},{key:"vouchers",label:"Voucher & Promo",desc:"Buat kode voucher diskon dan promo belanja",group:"konten",icon:"fa-ticket-simple"},{key:"banners",label:"Banner Promosi",desc:"Kelola gambar dan video slider beranda toko",group:"konten",icon:"fa-images"},{key:"rewards",label:"Program Hadiah Poin",desc:"Kelola katalog hadiah penukaran poin member",group:"konten",icon:"fa-gift"},{key:"reviews",label:"Ulasan Pelanggan",desc:"Moderasi ulasan dan testimoni produk pembeli",group:"konten",icon:"fa-star"},{key:"faqs",label:"Tanya Jawab / Q&A",desc:"Kelola jawaban pertanyaan umum pembeli",group:"konten",icon:"fa-circle-question"},{key:"changelog",label:"Log Pembaruan Sistem",desc:"Melihat riwayat update sistem toko",group:"konten",icon:"fa-code-branch"},{key:"reports",label:"Pusat Laporan & Keuangan",desc:"Laporan terpadu penjualan, stok, laba rugi, utang piutang, dan perpajakan",group:"sensitif",icon:"fa-chart-pie"},{key:"view_reports",label:"Laporan Finansial & Laba",desc:"Lihat omset, total HPP terjual, margin & laba bersih toko",group:"sensitif",icon:"fa-chart-line"},{key:"tax",label:"Pajak & Keuangan (PPN)",desc:"Laporan PPN, neraca keuangan, dan laba rugi resmi",group:"sensitif",icon:"fa-file-invoice-dollar"},{key:"banks",label:"Rekening Bank & QRIS",desc:"Ubah nomor rekening toko dan QRIS tujuan pembayaran",group:"sensitif",icon:"fa-building-columns"},{key:"settings",label:"Pengaturan Utama Toko",desc:"Konfigurasi nama toko, GPS maps, tarif ongkir, & sistem",group:"sensitif",icon:"fa-gear"},{key:"cashiers",label:"Kelola Staf & Hak Akses",desc:"Daftarkan staf baru, atur jabatan, & ubah batasan hak akses",group:"sensitif",icon:"fa-users-gear"},{key:"backup_sync",label:"Pusat Data & Backup Cloud",desc:"Cadangkan data toko, ekspor database, & sinkronisasi cloud",group:"sensitif",icon:"fa-cloud-arrow-up"}],kt={[W.CASHIER]:{pos:!0,orders:!1,products:!1,suppliers:!1,purchases:!1,piutang:!1,customers:!1,categories:!1,brands:!1,colors:!1,vouchers:!1,banners:!1,rewards:!1,reviews:!1,faqs:!1,changelog:!1,expenses:!1,stock_opname:!1,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[W.ADMIN]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},manager:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!0,view_reports:!0,tax:!0,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[W.OWNER]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,reports:!0,view_reports:!0,tax:!0,banks:!0,settings:!0,cashiers:!0,backup_sync:!0}};let $e=null;const Ie=()=>{if($e)return $e;try{const e=sessionStorage.getItem("freshmart_staff_profile");if(e)return $e=JSON.parse(e),$e}catch{}return null},rn=e=>{$e=e;try{e?sessionStorage.setItem("freshmart_staff_profile",JSON.stringify(e)):sessionStorage.removeItem("freshmart_staff_profile")}catch{}},ln=()=>{$e=null;try{sessionStorage.removeItem("freshmart_staff_profile")}catch{}},ze=()=>{const e=et.currentUser;if(e&&e.uid===ie)return!0;const t=Ie();if(t){const s=String(t.role||"").toLowerCase();if(s==="owner"||t.uid===ie)return!0;if(s==="cashier"||s==="kasir"||s==="staff")return!1}const a=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");if((window.isAdm||window.__localIsAdm)&&a&&!t)return!0;try{const s=sessionStorage.getItem("pos_cashier_session");if(s){const n=JSON.parse(s),o=String(n.role||"").toLowerCase();if(o==="owner"||n.uid===ie)return!0;if(o==="cashier"||o==="kasir"||o==="staff")return!1}}catch{}return!1},dn=()=>{if(ze())return!0;if(ya())return!1;const e=Ie();return e?.role===W.ADMIN||String(e?.role||"").toLowerCase()==="admin"},ya=()=>{if(ze())return!1;const e=Ie();if(e){const t=String(e.role||"").toLowerCase();if(t==="owner"||e.uid===ie)return!1;if(t==="cashier"||t==="kasir")return!0}try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const a=JSON.parse(t),s=String(a.role||"").toLowerCase();if(s==="owner"||a.uid===ie)return!1;if(s==="cashier"||s==="kasir"||s==="staff")return!0}}catch{}return!1},va=e=>{if(ze())return!0;const t=Ie();if(t){if(t.isActive===!1)return!1;const a=String(t.role||"").toLowerCase();if(a===W.OWNER||a==="owner")return!0;if(a===W.CASHIER||a==="cashier"||a==="kasir")return e==="pos";if(t.permissions){if(typeof t.permissions[e]<"u")return t.permissions[e]===!0;if(e==="reports"&&(t.permissions.view_reports===!0||t.permissions.tax===!0)||(e==="view_reports"||e==="tax")&&t.permissions.reports===!0)return!0}return(kt[t.role]||kt[W.ADMIN])[e]===!0}try{const a=sessionStorage.getItem("pos_cashier_session");if(a){const s=JSON.parse(a),n=String(s.role||"").toLowerCase();if(n===W.OWNER||n==="owner"||s.uid===ie)return!0;if(n===W.CASHIER||n==="cashier"||n==="kasir")return e==="pos"}}catch{}return window.isAdm||window.__localIsAdm?["banks","settings","cashiers","backup_sync"].includes(e)?et.currentUser?.uid===ie:!0:!1},Pt=()=>{if(typeof window<"u"&&(window.curViewName==="view-pos-cashier"||document.getElementById("view-pos-cashier")?.classList.contains("flex")||document.getElementById("pos-payment-modal")?.classList.contains("flex")||document.getElementById("pos-variant-sheet")?.classList.contains("flex")))try{const s=sessionStorage.getItem("pos_cashier_session");if(s){const n=JSON.parse(s),o=String(n.role||"").toLowerCase();return o===W.OWNER||o==="owner"||n.uid===ie}}catch{}if(ze())return!0;const t=Ie();if(t){const s=String(t.role||"").toLowerCase();return s===W.OWNER||s==="owner"||t.uid===ie?!0:s===W.CASHIER||s==="cashier"||s==="kasir"?!1:va("view_reports")}const a=et.currentUser;return!!(a&&a.uid===ie||window.isAdm||window.__localIsAdm)},cn=e=>{switch(e){case W.OWNER:return`
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
            </span>`}};typeof window<"u"&&(window.ROLES=W,window.PERMISSION_DEFINITIONS=on,window.ROLE_PRESETS=kt,window.getActiveStaff=Ie,window.setActiveStaff=rn,window.clearActiveStaff=ln,window.isOwnerUser=ze,window.isAdminUser=dn,window.isCashierUser=ya,window.hasPermission=va,window.canViewHpp=Pt,window.getRoleBadgeHtml=cn);let he="invoice",ka=!1;const pt=e=>{ka=e},G=(e,t=!1)=>{if(!e)return"-";try{const a=e.toDate?e.toDate():new Date(e);if(isNaN(a.getTime()))return"-";const s={day:"2-digit",month:"short",year:"numeric"};return t&&(s.hour="2-digit",s.minute="2-digit"),a.toLocaleDateString("id-ID",s)}catch{return"-"}},Wt=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(2).replace(/\.?0+$/,"")},be=(e="w-16 h-16")=>f.store?.logo&&(f.store.logo.includes("http")||f.store.logo.includes("data:"))?`<img loading="eager" src="${i(f.store.logo)}" class="${e} object-contain shrink-0">`:`<div class="${e} primary-bg flex items-center justify-center rounded-xl text-white shrink-0"><i class="fa-solid fa-store text-2xl"></i></div>`,ut=(e="font-mono text-xs")=>{const a=(Array.isArray(f.banks)?f.banks:[]).filter(s=>s&&(s.bankName||s.bank||s.bankAccount||s.number||s.account));if(a.length>0)return a.map(s=>{const n=s.bankName||s.bank||"BANK",o=s.bankAccount||s.number||s.account||"-",r=s.bankOwner||s.name||s.owner||f.store?.name||"Toko Putri";return`
            <div class="${e} flex items-center justify-between gap-2 border-b border-slate-200/60 pb-1.5 last:border-b-0 last:pb-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="font-bold text-slate-900 uppercase">${i(n)}:</span>
                    <span class="font-bold text-blue-700 tracking-wide font-mono select-all">${i(o)}</span>
                </div>
                <div class="text-[10.5px] text-slate-500 font-sans truncate max-w-[140px] text-right" title="${i(r)}">
                    a.n <span class="font-semibold text-slate-700">${i(r)}</span>
                </div>
            </div>`}).join("");if(f.store?.bankName&&(f.store?.bankAccount||f.store?.bankNumber)){const s=f.store.bankName,n=f.store.bankAccount||f.store.bankNumber,o=f.store.bankOwner||f.store.name||"Toko Putri";return`
        <div class="${e} flex items-center justify-between gap-2">
            <div class="flex items-center gap-1.5 flex-wrap">
                <span class="font-bold text-slate-900 uppercase">${i(s)}:</span>
                <span class="font-bold text-blue-700 tracking-wide font-mono select-all">${i(n)}</span>
            </div>
            <div class="text-[10.5px] text-slate-500 font-sans truncate max-w-[140px] text-right">
                a.n <span class="font-semibold text-slate-700">${i(o)}</span>
            </div>
        </div>`}return`
    <div class="text-[11px] text-slate-600 bg-slate-100 p-2 rounded-lg border border-slate-200">
        <p class="font-semibold text-slate-800"><i class="fa-solid fa-building-columns text-blue-600 mr-1"></i> Rekening Resmi Toko:</p>
        <p class="mt-0.5">Konfirmasi transfer via WhatsApp Resmi: <b class="font-mono text-emerald-600">${i(f.store?.wa||f.store?.phone||"-")}</b></p>
    </div>`},Vt=({docTitle:e,docNumber:t,docDate:a})=>`
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
    `,Jt=(e,t,a)=>`
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
    `,me=({docTitle:e,docNumber:t,docDate:a,kopHtml:s,metaHtml:n,tableHeaderHtml:o,rows:r=[],tableClass:l="w-full text-left border-collapse mb-4 text-xs",summaryHtml:d="",extraBlocksHtml:p="",signaturesHtml:g="",singlePageMax:b=6,itemsFirstPage:w=6,itemsMiddlePage:m=14,itemsLastPage:u=6})=>{const c=r.length;if(c<=b)return[`
        <div class="a4-page" data-page="1" data-total-pages="1">
            <div class="a4-page-body flex-1 flex flex-col">
                ${s}
                ${n||""}
                <table class="${l}">
                    <thead>${o}</thead>
                    <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${r.join("")}</tbody>
                </table>
                ${d||""}
                ${p||""}
                ${g||""}
            </div>
            ${Jt(1,1,e)}
        </div>
        `];const M=[],L=[],D=r.slice(0,w);L.push(D);let N=w;for(;N<c;){const h=c-N;if(h<=u)L.push(r.slice(N)),N=c;else{const v=Math.min(m,h);L.push(r.slice(N,N+v)),N+=v}}const y=L.length;return L.forEach((h,v)=>{const k=v+1,T=k===1,j=k===y;let I="";T?I=`
            ${s}
            ${n||""}
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${h.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${k+1}...
            </div>
            `:j?I=`
            ${Vt({docTitle:e,docNumber:t,docDate:a})}
            ${h.length>0?`
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${h.join("")}</tbody>
            </table>`:""}
            ${d||""}
            ${p||""}
            ${g||""}
            `:I=`
            ${Vt({docTitle:e,docNumber:t,docDate:a})}
            <table class="${l}">
                <thead>${o}</thead>
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
            ${Jt(k,y,e)}
        </div>
        `)}),M},pn=(e,t=null)=>{if(he=e,e==="po"){const m=f.purchases||[],u=m.find(I=>String(I.id)===String(t))||(window.currentActivePoId?m.find(I=>String(I.id)===String(window.currentActivePoId)):m[0]);if(!u){typeof window.showToast=="function"&&window.showToast("Data PO tidak ditemukan!");return}se("doc-modal-title","Preview Purchase Order (PO)");const c=be("w-16 h-16"),M=G(u.date||u.createdAt),L=u.poNumber||u.id,D=u.paymentType==="tempo"?`Tempo ${u.tempoDays||14} Hari (Jatuh Tempo: ${G(u.tempoDueDate)})`:u.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai",N=`
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
                <p class="text-xs font-bold mt-1 text-[var(--color-primary)]">Status: ${u.status==="ordered"?"DIPESAN":u.status==="received"?"DITERIMA":"SELESAI"}</p>
            </div>
        </div>
        `,y=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Kepada Rekanan / Supplier:</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${i(u.supplierName||"Supplier")}</p>
                ${u.supplierPhone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(u.supplierPhone)}</p>`:""}
                ${u.supplierAddress?`<p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${i(u.supplierAddress)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan & Pembayaran:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Termin Pembayaran:</span> <b class="text-slate-900">${D}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tujuan Pengiriman:</span> <b class="text-slate-900">${i(f.store?.name||"Gudang Utama Toko")}</b></p>
                ${u.notes?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${i(u.notes)}</p>`:""}
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
        `,v=(u.items||[]).map((I,A)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${A+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(I.name)}
                ${I.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(I.variantName)}</span>`:""}
                ${I.sku?`<span class="text-slate-400 text-[9.5px] font-mono block mt-0.5">SKU: ${i(I.sku)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${Wt(I.qty)} <span class="text-[10px] font-normal text-slate-500">${i(I.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${P(I.unitPrice)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${P(Math.round((parseFloat(I.qty)||0)*(parseFloat(I.unitPrice)||0)))}</td>
        </tr>
        `),k=`
        <div class="flex justify-end mb-6 mt-2">
            <div class="w-80 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk:</span><span class="font-bold text-slate-800">${P(u.subtotal)}</span></div>
                ${u.discount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Potongan Diskon:</span><span>-${P(u.discount)}</span></div>`:""}
                ${u.shippingFee>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim:</span><span>+${P(u.shippingFee)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL ORDER (PO):</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${P(u.total)}</span>
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
                <span class="font-bold text-slate-900 uppercase">${i(u.supplierName||"Rekanan / Supplier")}</span>
            </div>
        </div>
        `,j=me({docTitle:"Purchase Order",docNumber:`#${L}`,docDate:M,kopHtml:N,metaHtml:y,tableHeaderHtml:h,rows:v,summaryHtml:k,signaturesHtml:T,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});fe(j);return}if(e==="stock_opname"){const m=f.stockOpnameHistory||[],u=m.find(A=>String(A.id)===String(t)||String(A.soNumber)===String(t))||m[0];if(!u){typeof window.showToast=="function"&&window.showToast("Data Berita Acara Stock Opname tidak ditemukan!");return}se("doc-modal-title","Preview Berita Acara Stock Opname");const c=be("w-16 h-16"),M=G(u.date,!0),L=u.soNumber||u.id,D=typeof Pt=="function"?Pt():!1,N=u.items||[],y=`
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
                <p class="text-xs font-bold text-slate-600 mt-0.5">Auditor: <b class="text-slate-900">${i(u.auditorName||"Staf Auditor")}</b></p>
            </div>
        </div>
        `,h=`
        <div class="grid grid-cols-4 gap-3 mb-5">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Total Diperiksa</span>
                <span class="text-lg font-black text-slate-800 font-mono">${u.totalItemsAudited||0}</span>
                <span class="text-[10px] text-slate-500 block">Item Produk</span>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Item Selisih</span>
                <span class="text-lg font-black ${u.totalWithDiff>0?"text-amber-600":"text-emerald-600"} font-mono">${u.totalWithDiff||0}</span>
                <span class="text-[10px] text-slate-500 block">Disesuaikan</span>
            </div>
            <div class="bg-rose-50 p-3 rounded-xl border border-rose-200 text-center">
                <span class="text-[9px] font-black uppercase text-rose-500 block tracking-wider">Total Kurang (Loss)</span>
                <span class="text-lg font-black text-rose-600 font-mono">−${u.totalLossUnits||0}</span>
                <span class="text-[10px] text-rose-500 block">${D?"−"+P(u.totalLossRp||0):"Pcs"}</span>
            </div>
            <div class="bg-amber-50 p-3 rounded-xl border border-amber-200 text-center">
                <span class="text-[9px] font-black uppercase text-amber-600 block tracking-wider">Total Lebih (Surplus)</span>
                <span class="text-lg font-black text-amber-600 font-mono">+${u.totalSurplusUnits||0}</span>
                <span class="text-[10px] text-amber-600 block">${D?"+"+P(u.totalSurplusRp||0):"Pcs"}</span>
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
        `),T=u.notes?`
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs mb-5 text-slate-700">
            <b class="text-slate-900">Catatan Auditor:</b> ${i(u.notes)}
        </div>`:"",j=`
        <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Pemeriksa / Auditor:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(u.auditorName||"Petugas Auditor")}</span>
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
        `,I=me({docTitle:"Berita Acara Stock Opname",docNumber:`#${L}`,docDate:M,kopHtml:y,metaHtml:h,tableHeaderHtml:v,rows:k,extraBlocksHtml:T,signaturesHtml:j,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});fe(I);return}if(e==="stock_opname_worksheet"){se("doc-modal-title","Preview Lembar Kerja Hitung Fisik (Worksheet)");const m=be("w-14 h-14"),u=G(new Date),c=f.products||[],M=[];c.forEach(k=>{!k||k.id==null||(k.variants&&k.variants.length>0?k.variants.forEach(T=>{M.push({name:k.name,variantName:T.name,sku:T.sku||k.sku||"",category:k.category||"Umum",unit:k.unit||"pcs",systemStock:parseFloat(T.stock)||0})}):M.push({name:k.name,variantName:"",sku:k.sku||"",category:k.category||"Umum",unit:k.unit||"pcs",systemStock:parseFloat(k.stock)||0}))});const L=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3">
                ${m}
                <div>
                    <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${i(f.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${i(f.store?.slogan||"Pusat Alat Teknik & Bangunan")}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${i(f.store?.address||"")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-wider text-slate-900 uppercase">LEMBAR KERJA AUDIT</h2>
                <h3 class="font-bold text-xs tracking-widest text-amber-600 uppercase">STOCK OPNAME FISIK RAK</h3>
                <p class="text-xs font-medium text-slate-500 mt-1">Tanggal Cetak: <b>${u}</b></p>
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
        `),v=me({docTitle:"Lembar Kerja Audit Rak",docNumber:`TOTAL ${M.length} ITEM`,docDate:u,kopHtml:L,metaHtml:D,tableHeaderHtml:N,rows:y,tableClass:"w-full text-left border-collapse mb-4 text-[11px]",signaturesHtml:`
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
        `,singlePageMax:16,itemsFirstPage:15,itemsMiddlePage:20,itemsLastPage:14});fe(v);return}if(e==="tempo_invoice"){const m=t||window.cVOrd;let c=(window.cachedPiutangOrders||[]).find(B=>String(B.orderId)===String(m))||(window.gOrds||[]).find(B=>String(B.orderId)===String(m));if(!c&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(m)&&(c=window.lastPrintedOrder),!c){typeof window.showToast=="function"&&window.showToast("Data nota tagihan piutang tidak ditemukan!");return}se("doc-modal-title","Preview Nota Tagihan Piutang (Tempo)");const M=be("w-16 h-16"),L=G(c.dateString||c.timestamp),D=parseFloat(c.payment?.tempoBalance)||0,N=c.payment?.tempoPenaltyRate!==void 0?parseFloat(c.payment.tempoPenaltyRate):1,y=c.payment?.tempoPenaltyStopped===!0;let h=0;const v=c.payment?.tempoDueDate||0;let k=0,T=0,j=!1,I=!1;const A=Date.now();v>0&&(A>v?(k=Math.floor((A-v)/(24*60*60*1e3)),k>0&&(j=!0)):(T=Math.ceil((v-A)/(24*60*60*1e3)),T<=3&&(I=!0))),y?h=parseFloat(c.payment?.tempoFixedPenalty)||0:j&&(h=N/100*D*k);const S=D+h,C=c.payment?.installments||[],H=C.reduce((B,pe)=>B+(parseFloat(pe.amount)||0),0),V=c.payment?.grandTotal||D+H,R=c.payment?.paymentStatus==="lunas"||D<=0,E=!!(c.payment?.isPaylater||c.isPaylater||c.payment?.subMethod==="paylater");let U=E?"PAYLATER BERJALAN":"TEMPO BERJALAN",ee="text-blue-600 bg-blue-50 border-blue-200";R?(U="LUNAS SEPENUHNYA",ee="text-emerald-600 bg-emerald-50 border-emerald-300"):j?(U=`TERLAMBAT ${k} HARI`,ee="text-rose-600 bg-rose-50 border-rose-300"):I&&(U=`JATUH TEMPO H-${T<=0?"0":T}`,ee="text-amber-600 bg-amber-50 border-amber-300");const te=ut("font-mono text-xs"),ae=`
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
        `,rt=`
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
                ${j?`<p class="text-xs font-bold text-rose-600 mb-1"><span class="text-slate-500">Status:</span> Lewat ${k} Hari (Denda ${N}%/hari)</p>`:""}
                <p class="text-xs font-semibold text-slate-700"><span class="text-slate-500">Kasir / Admin:</span> <b class="text-slate-900 uppercase">${i(c.cashierName||"Kasir Toko")}</b></p>
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
        `,Te=(c.items||[]).map((B,pe)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${pe+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(B.name)}
                ${B.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(B.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${Wt(B.qty)} <span class="text-[10px] font-normal text-slate-500">${i(B.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${P(B.effectivePrice||B.price)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${P(B.subtotal||Math.round((parseFloat(B.qty)||0)*(parseFloat(B.effectivePrice||B.price)||0)))}</td>
        </tr>
        `);let ge="",ne=0,Re="-",it=1;if(E&&Array.isArray(c.payment?.paylaterSchedule)&&c.payment.paylaterSchedule.length>0){let B=0,pe=!1;const Pa=c.payment.paylaterSchedule.map((J,Ta)=>{const It=J.installmentIndex||J.installmentNo||J.installmentNumber||J.month||Ta+1,Rt=parseFloat(J.pokok||J.principal)||0,Ot=parseFloat((J.adminFee||0)+(J.serviceFee||0))||0,dt=parseFloat(J.total||J.totalMonthly||J.totalInstallment)||Rt+Ot;B+=dt;const Et=B,We=J.dueDate||0,Bt=J.dueDateFormatted||J.dueDateStr||(We?G(We):"-");let Ve="";if(H>=Et)Ve='<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-300">✓ LUNAS</span>';else if(pe)Ve='<span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200">BULAN DEPAN</span>';else{pe=!0,it=It;const Sa=Math.max(0,Et-H);ne=Math.min(Sa,dt),Re=Bt,Ve=We&&A>We?'<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 border border-rose-300">⚠️ JATUH TEMPO</span>':'<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">★ WAJIB BULAN INI</span>'}return`
                <tr class="hover:bg-slate-50">
                    <td class="py-2 px-3 text-center text-slate-800 font-bold">Bulan Ke-${It}</td>
                    <td class="py-2 px-3 font-mono font-medium text-slate-700 text-center">${Bt}</td>
                    <td class="py-2 px-3 text-right text-slate-600 font-mono">${P(Rt)}</td>
                    <td class="py-2 px-3 text-right text-slate-500 font-mono">${P(Ot)}</td>
                    <td class="py-2 px-3 text-right font-black font-mono text-slate-900">${P(dt)}</td>
                    <td class="py-2 px-3 text-center">${Ve}</td>
                </tr>`}).join("");ge=`
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
                        ${Pa}
                    </tbody>
                </table>
            </div>`}const Oe=`
        ${ge}
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
                    ${C.map((B,pe)=>`
                    <tr class="hover:bg-slate-50">
                        <td class="py-1.5 px-3 text-center text-slate-500">${pe+1}</td>
                        <td class="py-1.5 px-3 text-slate-700">${G(B.date)}</td>
                        <td class="py-1.5 px-3 uppercase text-slate-600 font-bold">${i(B.method||"Tunai")}</td>
                        <td class="py-1.5 px-3 text-right font-bold text-emerald-600">+ ${P(B.amount)}</td>
                        <td class="py-1.5 px-3 text-slate-500 text-[11px] font-sans">${i(B.note||"-")}</td>
                    </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>`:""}
        `,qe=`
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
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Awal:</span><span class="font-bold text-slate-800">${P(V)}</span></div>
                ${E?`<div class="flex justify-between text-emerald-600 font-bold"><span>Limit PayLater Terpakai:</span><span>${P(c.payment?.paylaterUsed||V-(c.payment?.tempoDp||c.payment?.dp||0))}</span></div>`:""}
                ${E&&c.payment?.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater:</span><span class="font-bold">+${P(c.payment.paylaterAdminFee)}</span></div>`:""}
                ${E&&c.payment?.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan:</span><span class="font-bold">+${P(c.payment.paylaterServiceFee)}</span></div>`:""}
                ${(parseFloat(c.payment?.tempoDp||c.payment?.dp)||0)>0?`<div class="flex justify-between text-slate-600"><span>Uang Muka (DP Dibayar):</span><span class="font-bold">${P(c.payment?.tempoDp||c.payment?.dp||0)}</span></div>`:""}
                ${H>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Masuk:</span><span>-${P(H)}</span></div>`:""}
                
                ${E&&ne>0&&ne<D?`
                <!-- KOTAK HIGHLIGHT ANGSURAN BULAN INI -->
                <div class="p-2.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 space-y-0.5">
                    <div class="flex justify-between items-center text-[9.5px] font-black uppercase tracking-wider text-amber-800">
                        <span>Angsuran Bulan Ini (Termin Ke-${it}):</span>
                        <span class="font-mono text-[9px] bg-amber-200/80 px-1.5 py-0.5 rounded">Jatuh Tempo: ${Re}</span>
                    </div>
                    <div class="flex justify-between items-center text-sm font-black font-mono pt-0.5">
                        <span>Wajib Dibayar Sekarang:</span>
                        <span class="text-amber-900 text-base font-black">${P(ne)}</span>
                    </div>
                </div>
                <div class="flex justify-between text-slate-500 text-[11px]">
                    <span>Sisa Termin Bulan Berikutnya:</span>
                    <span class="font-mono font-bold">${P(Math.max(0,D-ne))}</span>
                </div>
                `:""}

                <div class="flex justify-between text-slate-700 font-bold"><span>${E?"Total Sisa Pokok (Semua Tenor):":"Sisa Pokok Piutang:"}</span><span>${P(D)}</span></div>
                ${h>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Denda Keterlambatan:</span><span>+${P(h)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>${E?"TOTAL PELUNASAN PENUH:":"SISA WAJIB BAYAR:"}</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${P(R?0:S)}</span>
                </div>
            </div>
        </div>
        `,Ge=`
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
        `,lt=me({docTitle:E?"Nota Putri PayLater":"Nota Tagihan Piutang",docNumber:`#${c.orderId}`,docDate:L,kopHtml:ae,metaHtml:rt,tableHeaderHtml:ce,rows:Te,extraBlocksHtml:Oe,summaryHtml:qe,signaturesHtml:Ge,singlePageMax:5,itemsFirstPage:5,itemsMiddlePage:12,itemsLastPage:4});fe(lt);return}if(e==="tempo_customer_ledger"){const m=String(t||"").trim(),c=(window.cachedPiutangOrders||[]).filter(U=>{const ee=String(U.customer?.phone||U.customer?.wa||"").replace(/\D/g,""),te=String(U.customer?.name||"").toLowerCase().trim(),ae=m.replace(/\D/g,"");return!!(ae.length>=8&&ee.includes(ae)||te&&m.toLowerCase().includes(te))});if(c.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada nota piutang aktif untuk pelanggan ini.");return}const M=c[0].customer||{},L=M.name||"Pelanggan",D=M.wa||M.phone||"-";se("doc-modal-title",`Kartu Piutang: ${L}`);const N=be("w-16 h-16"),y=G(Date.now());let h=0,v=0,k=0,T=0,j=0;const I=c.map((U,ee)=>{const te=parseFloat(U.payment?.tempoBalance)||0,ae=U.payment?.tempoPenaltyRate!==void 0?parseFloat(U.payment.tempoPenaltyRate):1,rt=U.payment?.tempoPenaltyStopped===!0;let ce=0;const Te=U.payment?.tempoDueDate||0;let ge=0,ne=!1;const Re=Date.now();Te>0&&Re>Te&&(ge=Math.floor((Re-Te)/(24*60*60*1e3)),ge>0&&(ne=!0)),rt?ce=parseFloat(U.payment?.tempoFixedPenalty)||0:ne&&(ce=ae/100*te*ge);const Oe=(U.payment?.installments||[]).reduce((lt,B)=>lt+(parseFloat(B.amount)||0),0),qe=U.payment?.grandTotal||te+Oe,Ge=te+ce;return h+=qe,v+=Oe,k+=te,T+=ce,j+=Ge,`
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="py-2.5 px-3 text-center font-mono text-slate-500">${ee+1}</td>
                <td class="py-2.5 px-3 font-mono font-bold text-slate-800">#${i(U.orderId)}</td>
                <td class="py-2.5 px-3 font-medium text-slate-600">${G(U.dateString||U.timestamp)}</td>
                <td class="py-2.5 px-3 font-mono ${ne?"text-rose-600 font-bold":"text-slate-700"}">${G(Te)} ${ne?`<span class="text-[9.5px] text-rose-500">(+${ge}h)</span>`:""}</td>
                <td class="py-2.5 px-3 text-right font-mono text-slate-600">${P(qe)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-600 font-bold">${P(Oe)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-rose-600">${ce>0?P(ce):"-"}</td>
                <td class="py-2.5 px-3 text-right font-mono font-black text-slate-900">${P(Ge)}</td>
            </tr>
            `}),A=ut("font-mono text-xs"),S=`
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
        `,V=`
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
                    <span class="text-[var(--color-primary)] font-black text-base">${P(j)}</span>
                </div>
            </div>
        </div>
        `,R=`
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
        `,E=me({docTitle:"Kartu Piutang Pelanggan",docNumber:"STATEMENT OF ACCOUNT",docDate:y,kopHtml:S,metaHtml:C,tableHeaderHtml:H,rows:I,summaryHtml:V,signaturesHtml:R,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});fe(E);return}const a=t||window.cVOrd,s=(window.gOrds||[]).find(m=>String(m.orderId)===String(a))||(window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(a)?window.lastPrintedOrder:null);if(!s){typeof window.showToast=="function"&&window.showToast("Data pesanan tidak ditemukan!");return}se("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const n=s.dateString?new Date(s.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"",r=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${be("w-16 h-16")}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(f.store?.name||"TOKO PUTRI")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(f.store?.slogan||"General Supplier")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(f.store?.address||"Alamat fisik toko")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(f.store?.wa||"-")}</p>
                ${s.payment?.taxNpwp||f.store?.taxNpwp?`<p class="text-xs font-semibold text-slate-600 mt-0.5"><i class="fa-solid fa-id-card text-blue-500"></i> NPWP Toko: <span class="font-mono">${i(s.payment?.taxNpwp||f.store.taxNpwp)}</span></p>`:""}
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl sm:text-3xl tracking-widest ${e==="invoice"?"text-blue-600":"text-amber-600"} uppercase">${e==="invoice"?s.payment?.method==="tempo"?"PROFORMA INVOICE":"INVOICE":"SURAT JALAN"}</h2>
            <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(s.orderId)}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${n}</p>
        </div>
    </div>
    `,l=`
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
    `,d=Array.isArray(s.items)?s.items:Array.isArray(s.cart)?s.cart:[];if(e==="invoice"){const m=`
        <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
            <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Produk &amp; Varian</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Sat.</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total</th>
        </tr>
        `,u=d.map((y,h)=>`
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
        `);let c="";if((s.pointsEarned>0||s.finalMemberPoints!==void 0&&s.finalMemberPoints!==null)&&(c+=`
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 flex items-center gap-4">
                <div class="w-8 h-8 rounded-lg bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
                ${s.pointsEarned>0?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-sm text-amber-700">+${s.pointsEarned}</p></div>`:""}
                ${s.finalMemberPoints!==void 0&&s.finalMemberPoints!==null?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Member</p><p class="font-bold text-sm text-amber-700">${s.finalMemberPoints}</p></div>`:""}
            </div>`),s.claimedReward&&(c+=`
            <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-3 mb-4 flex items-center justify-between gap-4">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                    <div>
                        <p class="text-[9px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${s.claimedReward.pointsCost} Poin)</p>
                        <p class="font-bold text-xs text-violet-800 uppercase">${i(s.claimedReward.name)}</p>
                    </div>
                </div>
                <span class="text-[9.5px] font-bold px-2.5 py-1 rounded-lg bg-violet-600 text-white uppercase tracking-wider">${i(s.claimedReward.status==="ready"?"SERTAKAN PENGIRIMAN":"KLAIM RESMI")}</span>
            </div>`),s.payment?.method==="tempo")if(!!(s.payment?.isPaylater||s.isPaylater||s.payment?.subMethod==="paylater")){const h=s.payment?.paylaterMonths||1,v=s.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":s.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)",k=Array.isArray(s.payment?.paylaterSchedule)&&s.payment.paylaterSchedule.length>0;let T="";if(k){Math.max(0,parseFloat(s.payment?.tempoBalance)||0);const I=(s.payment?.installments||[]).reduce((C,H)=>C+(parseFloat(H.amount)||0),0);let A=0,S=!1;T=`
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
                                ${s.payment.paylaterSchedule.map((C,H)=>{const V=C.installmentIndex||C.installmentNo||C.installmentNumber||C.month||H+1,R=parseFloat(C.pokok||C.principal)||0,E=parseFloat((C.adminFee||0)+(C.serviceFee||0))||0,U=parseFloat(C.total||C.totalMonthly||C.totalInstallment)||R+E;A+=U;const ee=C.dueDate||0,te=C.dueDateFormatted||C.dueDateStr||(ee?G(ee):"-");let ae="";return I>=A?ae='<span class="px-1.5 py-0.2 rounded text-[8px] font-bold uppercase bg-emerald-100 text-emerald-700 border border-emerald-300">✓ LUNAS</span>':S?ae='<span class="px-1.5 py-0.2 rounded text-[8px] font-medium uppercase bg-slate-100 text-slate-500">MENDATANG</span>':(S=!0,ae='<span class="px-1.5 py-0.2 rounded text-[8px] font-black uppercase bg-amber-100 text-amber-800 border border-amber-300">★ BULAN INI</span>'),`
                                    <tr>
                                        <td class="py-1 px-2 font-bold text-slate-800 text-center font-sans">Bulan Ke-${V}</td>
                                        <td class="py-1 px-2 text-slate-600 text-center">${te}</td>
                                        <td class="py-1 px-2 text-right text-slate-600">${P(R)}</td>
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
                        Sistem pembayaran cicilan resmi Toko Putri tanpa biaya tersembunyi. Jatuh Tempo Pertama: ${s.payment.tempoDueDate?G(s.payment.tempoDueDate):"-"}.
                        ${s.payment.paylaterMonthlyInstallment?` Angsuran: <b>${P(s.payment.paylaterMonthlyInstallment)} / bulan</b> (${h}x).`:""}
                    </p>
                    ${T}
                </div>`}else c+=`
                <div class="mb-4 border border-pink-200 bg-pink-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-pink-700 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo:</h4>
                    <p class="text-[9.5px] text-pink-600 font-semibold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${s.payment.tempoDueDate?G(s.payment.tempoDueDate):"-"}). Keterlambatan dikenakan denda sesuai regulasi toko.</p>
                </div>`;const L=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran Toko Putri:
                </h4>
                <div class="space-y-1.5 pt-0.5">${ut("font-mono text-xs")}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi pembayaran via WhatsApp: <b>${i(f.store?.wa||f.store?.phone||"-")}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Terima kasih atas transaksi Anda di ${i(f.store?.name||"Toko Putri")}.</p>
                </div>
            </div>

            ${(()=>{const y=Ke(s);return`
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
                ${s.payment?.method==="tempo"?`
                <div class="flex justify-between text-emerald-600 font-bold"><span>${s.payment?.isPaylater||s.payment?.subMethod==="paylater"?"Limit Terpakai / DP":"Uang Muka (DP)"}</span><span class="font-mono">${P(s.payment?.tempoDp||0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-2.5 rounded-xl mt-1 border border-rose-200">
                    <span class="font-bold text-xs uppercase tracking-widest">${s.payment?.isPaylater||s.payment?.subMethod==="paylater"?"Sisa Tagihan PayLater":"Sisa Tagihan"}</span>
                    <span class="font-mono text-sm font-black tracking-tight">${P(s.payment?.tempoBalance||0)}</span>
                </div>
                ${(s.payment?.isPaylater||s.payment?.subMethod==="paylater")&&s.payment?.paylaterMonthlyInstallment?`
                <div class="flex justify-between text-[11px] text-emerald-700 font-bold">
                    <span>Angsuran per Bulan (${s.payment?.paylaterMonths||1}x)</span>
                    <span class="font-mono font-black">${P(s.payment.paylaterMonthlyInstallment)}/bln</span>
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
                <span class="font-bold text-slate-900 uppercase">${i(f.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,N=me({docTitle:s.payment?.method==="tempo"?"Proforma Invoice":"Faktur Invoice",docNumber:`#${s.orderId}`,docDate:n,kopHtml:r,metaHtml:l,tableHeaderHtml:m,rows:u,extraBlocksHtml:c,summaryHtml:L,signaturesHtml:D,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:12,itemsLastPage:5});fe(N);return}const p=`
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Nama &amp; Spesifikasi Barang</th>
        <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Satuan</th>
        <th class="py-2.5 px-3 rounded-tr-xl text-center w-24">Ceklis Gudang</th>
    </tr>
    `,g=d.map((m,u)=>`
    <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3 text-center font-mono text-slate-500">${u+1}</td>
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
            <span class="font-bold text-slate-900 uppercase">${i(f.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,w=me({docTitle:"Surat Jalan Pengiriman",docNumber:`#${s.orderId}`,docDate:n,kopHtml:r,metaHtml:l,tableHeaderHtml:p,rows:g,signaturesHtml:b,singlePageMax:8,itemsFirstPage:8,itemsMiddlePage:16,itemsLastPage:9});fe(w)},un=()=>{const e=window.cart||[];if(!e||e.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}he="sph";const t="SPH-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.floor(1e3+Math.random()*9e3),a=G(new Date),s=G(new Date(Date.now()+14*24*60*60*1e3));se("doc-modal-title","Surat Penawaran Harga (SPH)");const n=be("w-16 h-16"),o=typeof window.getEffP=="function"?window.getEffP:c=>c.price||0;let r=0;const l=e.map((c,M)=>{const L=parseFloat(c.qty)||1,D=o(c),N=L*D;return r+=N,`
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
            ${n}
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
    `,g=`
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
            <div class="flex justify-between px-3"><span>Subtotal Estimasi</span><span class="font-mono">${P(r)}</span></div>
            <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-1 shadow-xs">
                <span class="font-bold text-xs uppercase tracking-widest">Total Penawaran</span>
                <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${P(r)}</span>
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
            <span class="font-bold text-slate-900 uppercase">${i(f.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,u=me({docTitle:"Surat Penawaran Harga",docNumber:`#${t}`,docDate:a,kopHtml:d,metaHtml:p,tableHeaderHtml:g,rows:l,summaryHtml:b,extraBlocksHtml:w,signaturesHtml:m,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:5});fe(u)},fe=e=>{const t=x("doc-paper-content");if(!t)return;t.innerHTML=e.join("");const a=e.length,s=x("doc-page-count-badge");s&&(s.textContent=`${a} Halaman A4`),mn(a)},mn=(e=1)=>{const t=x("doc-preview-modal"),a=x("doc-preview-modal-box");t&&t.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),tt(t,a),Nt()},Nt=()=>{const e=x("doc-paper-scroll-area"),t=x("doc-paper-content"),a=x("doc-paper-wrapper");if(!e||!t||!a)return;const s=794,n=window.innerWidth<640?12:32,o=e.clientWidth-n,r=Math.min(1,Math.max(.2,o/s));t.style.transform=`translateX(-50%) scale(${r})`;const l=t.offsetHeight||t.scrollHeight;a.style.height=l*r+48+"px"};window.addEventListener("resize",()=>{const e=x("doc-preview-modal");e&&!e.classList.contains("hidden")&&Nt()});const fn=(e=!1)=>{const t=x("doc-preview-modal"),a=x("doc-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{ke(t,a)}):ke(t,a))},bn=()=>{const e=x("doc-paper-content"),t=e?e.innerHTML:"";if(!t){typeof window.showToast=="function"&&window.showToast("Tidak ada dokumen yang dicetak!");return}if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){let o=x("a4-print-section");o||(o=document.createElement("div"),o.id="a4-print-section",document.body.appendChild(o)),o.innerHTML=t,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500);return}const a=window.open("","_blank"),n=`<!DOCTYPE html>
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
</html>`;if(!a){let o=document.getElementById("a4-print-fallback-iframe");o||(o=document.createElement("iframe"),o.id="a4-print-fallback-iframe",o.style.position="fixed",o.style.right="0",o.style.bottom="0",o.style.width="0",o.style.height="0",o.style.border="0",o.style.opacity="0",document.body.appendChild(o));const r=o.contentWindow.document;r.open(),r.write(n),r.close(),setTimeout(()=>{try{o.contentWindow.focus(),o.contentWindow.print()}catch(l){console.warn("[DocPrint] Fallback iframe print error:",l)}},650);return}a.document.open(),a.document.write(n),a.document.close()},wn=async e=>{if(!ka){pt(!0),Qe(e==="image"?"Membuat Gambar HD...":"Menyusun Dokumen PDF A4...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{mt(),pt(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const t=x("doc-paper-content");if(!t)throw new Error("Elemen dokumen tidak ditemukan.");let a=Array.from(t.querySelectorAll(".a4-page"));a.length===0&&(a=[t]);const s=window.cVOrd||Date.now().toString(36).toUpperCase(),n=`${he.toUpperCase()}_${s}`,o=async r=>{const l=document.createElement("div");l.style.position="fixed",l.style.top="-9999px",l.style.left="-9999px",l.style.width="794px",l.style.height="1123px",l.style.backgroundColor="#ffffff",l.style.overflow="hidden",l.style.zIndex="-9999";const d=r.cloneNode(!0);d.style.margin="0 auto",d.style.boxShadow="none",d.style.border="none",d.style.borderRadius="0",d.style.transform="none",d.style.width="794px",d.style.height="1123px",d.style.minHeight="1123px",d.style.maxHeight="1123px",d.style.overflow="hidden",l.appendChild(d),document.body.appendChild(l);const p=Array.from(d.querySelectorAll("img"));await Promise.all(p.map(b=>b.complete?Promise.resolve():new Promise(w=>{b.addEventListener("load",w,{once:!0}),b.addEventListener("error",w,{once:!0})}))),await new Promise(b=>setTimeout(b,200));const g=await html2canvas(l,{scale:2,useCORS:!0,backgroundColor:"#ffffff",width:794,height:1123,windowWidth:794,windowHeight:1123});return document.body.removeChild(l),g};if(e==="image")if(a.length===1){const l=(await o(a[0])).toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(l,`${n}.png`,"image/png");else{const d=document.createElement("a");d.download=`${n}.png`,d.href=l,d.click()}typeof window.showToast=="function"&&window.showToast("Gambar A4 Presisi Berhasil Disimpan!")}else{for(let r=0;r<a.length;r++){Qe(`Menyimpan Gambar Halaman ${r+1} dari ${a.length}...`);const d=(await o(a[r])).toDataURL("image/png",1),p=`${n}_Hal_${r+1}.png`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(d,p,"image/png");else{const g=document.createElement("a");g.download=p,g.href=d,g.click()}await new Promise(g=>setTimeout(g,250))}typeof window.showToast=="function"&&window.showToast(`Berhasil menyimpan ${a.length} gambar halaman A4!`)}else{const r=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,l=new r({orientation:"portrait",unit:"mm",format:"a4"});for(let d=0;d<a.length;d++){Qe(`Menyusun PDF Hal ${d+1} dari ${a.length}...`);const g=(await o(a[d])).toDataURL("image/jpeg",.95);d>0&&l.addPage("a4","portrait"),l.addImage(g,"JPEG",0,0,210,297,void 0,"FAST")}window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"?window.AndroidNativeApp.saveOrShareFile(l.output("datauristring"),`${n}.pdf`,"application/pdf"):l.save(`${n}.pdf`),typeof window.showToast=="function"&&window.showToast(`File PDF Standar A4 (${a.length} Halaman) Berhasil Disimpan!`)}}catch(t){console.error("Export Error: ",t),typeof window.showToast=="function"&&window.showToast(t&&t.message?`Gagal: ${t.message}`:"Gagal memproses dokumen.")}finally{mt(),pt(!1)}}};window.openDocPreview=pn;window.openCartSPHPreview=un;window.fitDocPreview=Nt;window.closeDocPreviewModal=fn;window.printDocA4=bn;window.exportDocFile=wn;export{Ua as $,Ps as A,Pn as B,ks as C,se as D,lo as E,ws as F,Zt as G,mo as H,hs as I,io as J,xe as K,Wa as L,Va as M,Ss as N,Za as O,Gn as P,Kn as Q,jn as R,q as S,gs as T,Ka as U,_a as V,En as W,Ea as X,Ha as Y,Fa as Z,Ba as _,f as a,Oa as a$,ja as a0,Ln as a1,Dn as a2,Nn as a3,In as a4,Rn as a5,On as a6,at as a7,oa as a8,ro as a9,Ke as aA,co as aB,Vn as aC,ra as aD,As as aE,as as aF,os as aG,Xn as aH,_s as aI,js as aJ,Jn as aK,Fn as aL,_ as aM,Pt as aN,ss as aO,Sn as aP,An as aQ,Y as aR,Es as aS,po as aT,uo as aU,yn as aV,no as aW,Pe as aX,is as aY,kn as aZ,Tn as a_,oo as aa,Ca as ab,vs as ac,Da as ad,va as ae,Ie as af,ze as ag,W as ah,ln as ai,Xa as aj,to as ak,es as al,ao as am,ts as an,so as ao,rs as ap,ie as aq,rn as ar,Yt as as,eo as at,Hn as au,ns as av,Qn as aw,ye as ax,fo as ay,Ft as az,na as b,Bn as b0,za as b1,qa as b2,Ga as b3,Ja as b4,Ya as b5,Qa as b6,Wn as b7,ls as b8,vn as b9,Cn as ba,Un as bb,_n as bc,zn as bd,qn as be,Zn as bf,kt as bg,on as bh,cn as bi,Qt as c,Na as d,x as e,P as f,ys as g,sa as h,i,Yn as j,oe as k,Qe as l,Ts as m,mt as n,tt as o,Ia as p,re as q,st as r,aa as s,ke as t,K as u,ve as v,$n as w,Mn as x,Ra as y,et as z};
