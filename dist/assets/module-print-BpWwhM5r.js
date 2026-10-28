const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vendor-firebase-analytics-Jm19L5g2.js","./vendor-firebase-core-D2OF5R23.js","./module-pos-BTl17EoF.js","./module-member-CAQAJI4a.js","./module-faq-BOdOcpfz.js"])))=>i.map(i=>d[i]);
import{f as Le}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const Es="modulepreload",Bs=function(e,t){return new URL(e,t).href},Ta={},jt=function(t,s,n){let a=Promise.resolve();if(s&&s.length>0){const r=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),p=l?.nonce||l?.getAttribute("nonce");a=Promise.allSettled(s.map(d=>{if(d=Bs(d,n),d in Ta)return;Ta[d]=!0;const m=d.endsWith(".css"),u=m?'[rel="stylesheet"]':"";if(!!n)for(let v=r.length-1;v>=0;v--){const b=r[v];if(b.href===d&&(!m||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${u}`))return;const h=document.createElement("link");if(h.rel=m?"stylesheet":Es,m||(h.as="script"),h.crossOrigin="",h.href=d,p&&h.setAttribute("nonce",p),document.head.appendChild(h),m)return new Promise((v,b)=>{h.addEventListener("load",v),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return a.then(r=>{for(const l of r||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},Hs={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const Fs=typeof window<"u"&&window.FIREBASE_CONFIG?window.FIREBASE_CONFIG:Hs;Le.apps.length||Le.initializeApp(Fs);const de=Le.firestore(),st=Le.auth();typeof window<"u"&&(window.firebase=Le,window.db=de,window.auth=st);try{de.settings({ignoreUndefinedProperties:!0,experimentalForceLongPolling:!0,merge:!0})}catch{}typeof window<"u"&&(window.addEventListener("online",()=>{try{de.enableNetwork().catch(()=>{})}catch{}}),window.addEventListener("offline",()=>{try{de.disableNetwork().catch(()=>{})}catch{}}));let Ks=null;const Qn=()=>{jt(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1]),import.meta.url).then(()=>{try{Ks=Le.analytics()}catch{}}).catch(()=>{})},Be="K2ijSERTT2dg27yYGTEgn6XHSnW2",js={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"pill",brandStyle:"logo",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showHeroSlide:!0,heroMascotImg:"/putri_mascot_anim.gif",heroBadgeText:"Siap Melayani",heroWelcomeTag:"SELAMAT DATANG",heroTitle:"",heroSubtitle:"",showRewardCatalog:!0,showScrollTopButton:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,paylater:{enabled:!0,minOrder:2e4,maxOrder:1e7,noticeText:"Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.",tenors:{"30d":{enabled:!0,label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:"flat",adminFeeValue:0,serviceFeeType:"flat",serviceFeeValue:0},"2m":{enabled:!0,label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:"flat",adminFeeValue:1500,serviceFeeType:"percent",serviceFeeValue:1.5},"3m":{enabled:!0,label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:"flat",adminFeeValue:2500,serviceFeeType:"percent",serviceFeeValue:2.5}}},terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},subscription:{status:"active",plan:"pro_managed",expiresAt:null,allowGraceDays:7,storeCode:"PUTRI",clientName:"Pemilik Toko",developerContact:"6281234567890",developerName:"Developer / Technical Partner"},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],productOrder:[],suppliers:[],purchases:[],expenses:[],stockOpnameHistory:[],salesReturns:[],vendorReturns:[],flashSales:[],custom_master_presets:[],employees:[],attendances:[],salaryAdvances:[],payrollRuns:[],ownerEmployee:null,hrSettings:{workDaysPerMonth:26,overtimeRatePerHour:2e4,latePenaltyPerMinute:1e3,dailyMealRate:25e3,lossDeductionScheme:"flexible"},taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let c=JSON.parse(JSON.stringify(js)),Ha=[],Fa=[],ae=[];try{const e=localStorage.getItem("freshmart_cart");e&&(Ha=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(Fa=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(ae=JSON.parse(e)||[])}catch{}let _s={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},Us=null,zs=null,Ws=null,qs="Semua Produk",Gs="Semua Jenis",Vs="Semua Merek",Js="",Ys="newest",Qs="grid",Zs=1,Xs=12,eo="orders",to="",ao=null,so=null,oo=0,no=[],ro=[],io=[],lo=1,pe=[],co=null,po=null,mo=null,tt=[],uo=[],Xe=null,fo=null,bo=!1,xo="all",wo="today",go=null,ho=null;const Zn=e=>{go=e},Xn=e=>{c=e},er=e=>{Ha=e},tr=e=>{Fa=e},ar=e=>{ae=e},sr=e=>{_s=e},or=e=>{Us=e},nr=e=>{zs=e},rr=e=>{Ws=e},ir=e=>{qs=e},lr=e=>{Gs=e},dr=e=>{Vs=e},cr=e=>{Js=e},pr=e=>{Ys=e},mr=e=>{Qs=e},ur=e=>{Zs=e},fr=e=>{Xs=e},br=e=>{eo=e},xr=e=>{to=e},wr=e=>{ao=e},gr=e=>{so=e},hr=e=>{oo=e},yr=e=>{no=e},vr=e=>{ro=e},kr=e=>{io=e},Pr=e=>{lo=e},Ar=e=>{pe=e},Tr=e=>{tt=e},Sr=e=>{uo=e},Sa=e=>{Xe=e},$r=e=>{fo=e},Mr=e=>{bo=e},Dr=e=>{ho=e},Cr=e=>{xo=e},Lr=e=>{wo=e},Rr=e=>{co=e},Ir=e=>{po=e},Nr=e=>{mo=e};let Ka=!1;if(typeof window<"u"){const e=()=>{Ka=!0,window.__hasUserInteracted=!0};["pointerdown","touchstart","mousedown","keydown"].forEach(t=>{window.addEventListener(t,e,{capture:!0,once:!0})}),window.__hasUserInteracted=!1}const la=()=>typeof navigator<"u"&&navigator.userActivation?navigator.userActivation.hasBeenActive:!!(Ka||typeof window<"u"&&window.__hasUserInteracted);typeof window<"u"&&(window.checkUserGesture=la);const ot=(e="light")=>{try{const t=window.Capacitor?.Plugins?.Haptics;if(t){e==="light"||e==="selection"?t.impact({style:"LIGHT"}).catch(()=>{}):e==="medium"?t.impact({style:"MEDIUM"}).catch(()=>{}):e==="heavy"?t.impact({style:"HEAVY"}).catch(()=>{}):e==="success"?t.notification({type:"SUCCESS"}).catch(()=>{}):e==="warning"?t.notification({type:"WARNING"}).catch(()=>{}):e==="error"&&t.notification({type:"ERROR"}).catch(()=>{});return}if(typeof navigator<"u"&&typeof navigator.vibrate=="function"){if(!la())return;e==="light"||e==="selection"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="heavy"?navigator.vibrate(45):e==="success"?navigator.vibrate([15,30,20]):e==="warning"?navigator.vibrate([30,40,30]):e==="error"&&navigator.vibrate([40,50,40,50,40])}}catch{}};typeof window<"u"&&(window.triggerHaptic=ot);const yo=e=>{if(e)switch(e){case"product-modal":typeof window.closeProductModal=="function"&&window.closeProductModal();break;case"pos-variant-sheet":typeof window.closePOSVariantSheet=="function"&&window.closePOSVariantSheet();break;case"variant-preview-modal":typeof window.closeVariantPreviewModal=="function"&&window.closeVariantPreviewModal();break;case"custom-confirm-modal":typeof window.closeConfirm=="function"&&window.closeConfirm();break;case"scanner-modal":typeof window.closeCameraScanner=="function"&&window.closeCameraScanner();break;case"modal-tempo-detail":typeof window.closeTempoDetailModal=="function"&&window.closeTempoDetailModal();break;case"modal-tempo-payment":typeof window.closeTempoPaymentModal=="function"&&window.closeTempoPaymentModal();break;case"modal-tempo-penalty":typeof window.closeTempoPenaltyModal=="function"&&window.closeTempoPenaltyModal();break;case"modal-supplier-detail":typeof window.closeSupplierDetailModal=="function"&&window.closeSupplierDetailModal();break;case"modal-supplier-form":typeof window.closeSupplierFormModal=="function"&&window.closeSupplierFormModal();break;case"modal-po-form":typeof window.closePurchaseFormModal=="function"&&window.closePurchaseFormModal();break;case"modal-po-detail":typeof window.closePurchaseDetailModal=="function"&&window.closePurchaseDetailModal();break;case"modal-po-payment":typeof window.closePurchasePaymentModal=="function"&&window.closePurchasePaymentModal();break;case"modal-po-product-picker":typeof window.closePurchasePickerModal=="function"&&window.closePurchasePickerModal();break;case"quick-menu-modal":case"quickmenu-modal":typeof window.closeQuickMenuModal=="function"&&window.closeQuickMenuModal();break;case"category-modal":typeof window.closeCategoryModal=="function"&&window.closeCategoryModal();break;case"brand-modal":typeof window.closeBrandModal=="function"&&window.closeBrandModal();break;case"quick-variant-modal":typeof window.closeQuickVariantSheet=="function"&&window.closeQuickVariantSheet();break;case"shopping-guide-modal":typeof window.closeShoppingGuideModal=="function"&&window.closeShoppingGuideModal();break;case"pos-login-modal":typeof window.closePOSLoginModal=="function"&&window.closePOSLoginModal();break;case"admin-order-modal":typeof window.closeOrderDetailModal=="function"&&window.closeOrderDetailModal();break;case"order-detail-modal":typeof window.closeCustomerOrderDetailModal=="function"&&window.closeCustomerOrderDetailModal();break;case"modal-client-tempo-pay":typeof window.closeClientPaymentModal=="function"&&window.closeClientPaymentModal();break;case"admin-modal":typeof window.closeAdminModal=="function"&&window.closeAdminModal();break;case"printer-settings-modal":typeof window.closePrinterSettingsModal=="function"&&window.closePrinterSettingsModal();break;case"modal-ask-question":typeof window.closeAskQuestionModal=="function"&&window.closeAskQuestionModal();break;case"modal-admin-faq":typeof window.closeAdminFAQModal=="function"&&window.closeAdminFAQModal();break;case"member-modal":typeof window.closeMemberModal=="function"&&window.closeMemberModal();break;case"modal-flash-sale-form":typeof window.closeFlashSaleModal=="function"&&window.closeFlashSaleModal();break;case"modal-pricelist-export":typeof window.closePriceListExportModal=="function"&&window.closePriceListExportModal();break;case"modal-owner-hr":typeof window.closeOwnerHrModal=="function"&&window.closeOwnerHrModal();break;case"modal-salary-advance-form":typeof window.closeSalaryAdvanceFormModal=="function"&&window.closeSalaryAdvanceFormModal();break;case"modal-salary-advance-detail":typeof window.closeAdvanceDetailModal=="function"&&window.closeAdvanceDetailModal();break;case"modal-payroll-item-form":typeof window.closePayrollItemModal=="function"&&window.closePayrollItemModal();break;case"modal-payslip-preview":typeof window.closePayslipPreviewModal=="function"&&window.closePayslipPreviewModal();break;case"modal-attendance-rekap":typeof window.closeMonthlyAttendanceRecapModal=="function"&&window.closeMonthlyAttendanceRecapModal();break;default:{const t=document.getElementById(e);if(t){const s=t.querySelector('button[onclick*="close"], .fa-xmark')?.closest("button");if(s)s.click();else if(typeof window.closeModalAnim=="function"){const n=t.querySelector('.modal-bottom-sheet, [id$="-box"]')||t.firstElementChild;window.closeModalAnim(t,n)}else t.classList.add("hidden","opacity-0")}}}};let Pe=null,ft=null,Mt=0,$a=0,Dt=0,ze=!1,Ma=0;const vo=()=>{if(typeof document>"u")return;document.addEventListener("touchstart",t=>{if(t.touches.length!==1)return;const s=t.touches[0],n=s.target.closest('[id*="modal"], [id*="sheet"]');if(!n||n.classList.contains("hidden")||n.classList.contains("opacity-0")||!(n.classList.contains("items-end")||!!s.target.closest(".modal-bottom-sheet")||n.classList.contains("modal-bottom-sheet")))return;let o=s.target.closest(".modal-bottom-sheet")||s.target.closest('[id$="-box"]');if(o||(o=s.target.closest('[id$="-content"]')),!o||s.target.closest('input, select, textarea, button, a, [role="button"], table, .no-drag'))return;const r=!!s.target.closest(".overflow-y-auto, .overflow-x-auto, .scroll-content, .custom-scrollbar"),l=o.getBoundingClientRect(),p=s.clientY-l.top;(s.target.closest(".pull-indicator")||!r&&p<=55)&&(Pe=o,ft=n,Mt=s.clientY,$a=s.clientX,Dt=Mt,ze=!1,Ma=Date.now())},{passive:!0}),document.addEventListener("touchmove",t=>{if(!Pe||t.touches.length!==1)return;const s=t.touches[0];Dt=s.clientY;const n=Dt-Mt,a=Math.abs(s.clientX-$a);if(!ze&&a>Math.abs(n)){Pe=null;return}const o=Pe.classList.contains("overflow-y-auto")?Pe:Pe.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar");if(!(o&&o.scrollTop>5&&!ze)){if(n>0){if(ze=!0,t.cancelable&&t.preventDefault(),Pe.style.transform=`translateY(${n}px)`,Pe.style.transition="none",ft){const r=Math.max(.2,1-n/400);ft.style.backgroundColor=`rgba(15, 23, 42, ${.8*r})`}}else if(n<0&&ze){const r=n*.2;Pe.style.transform=`translateY(${r}px)`,Pe.style.transition="none"}}},{passive:!1});const e=()=>{if(!Pe)return;const t=Pe,s=ft,n=Dt-Mt,a=Math.max(1,Date.now()-Ma),o=n/a;Pe=null,ft=null,ze&&(n>80||o>.45&&n>30)?(ot("light"),t.style.transition="transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",t.style.transform="translateY(100%)",s&&(s.style.transition="opacity 0.25s ease",s.style.opacity="0"),setTimeout(()=>{t.style.transform="",t.style.transition="",s&&(s.style.backgroundColor="",s.style.opacity=""),yo(s?s.id:"")},250)):ze&&(t.style.transition="transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)",t.style.transform="",s&&(s.style.transition="background-color 0.28s ease",s.style.backgroundColor=""),setTimeout(()=>{t.style.transition=""},300)),ze=!1};document.addEventListener("touchend",e,{passive:!0}),document.addEventListener("touchcancel",e,{passive:!0})};let Da=0;const ko=()=>{typeof document>"u"||document.addEventListener("click",e=>{const t=Date.now();if(t-Da<50)return;const s=e.target.closest('button, [role="button"], a[onclick], [id*="bnav-"], .pos-add-btn, .pos-tag-chip, #pos-variant-chips button, .interactive-tap');s&&!s.disabled&&!s.classList.contains("disabled")&&(Da=t,ot("light"))},{passive:!0,capture:!0})};let be=null;const Po=(e="pop")=>{try{if(typeof window>"u"||!la())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;be||(be=new t),be.state==="suspended"&&be.resume().catch(()=>{});const s=be.currentTime;if(e==="pop"){const n=be.createOscillator(),a=be.createGain();n.type="sine",n.frequency.setValueAtTime(340,s),n.frequency.exponentialRampToValueAtTime(560,s+.07),a.gain.setValueAtTime(.14,s),a.gain.exponentialRampToValueAtTime(.001,s+.08),n.connect(a),a.connect(be.destination),n.start(s),n.stop(s+.08)}else if(e==="success"){const n=be.createOscillator(),a=be.createOscillator(),o=be.createGain(),r=be.createGain();n.type="triangle",a.type="triangle",n.frequency.setValueAtTime(523.25,s),a.frequency.setValueAtTime(659.25,s+.09),o.gain.setValueAtTime(.12,s),o.gain.exponentialRampToValueAtTime(.001,s+.22),r.gain.setValueAtTime(.14,s+.09),r.gain.exponentialRampToValueAtTime(.001,s+.32),n.connect(o),o.connect(be.destination),a.connect(r),r.connect(be.destination),n.start(s),n.stop(s+.22),a.start(s+.09),a.stop(s+.32)}else if(e==="beep"){const n=be.createOscillator(),a=be.createGain();n.type="square",n.frequency.setValueAtTime(1040,s),a.gain.setValueAtTime(.08,s),a.gain.exponentialRampToValueAtTime(.001,s+.07),n.connect(a),a.connect(be.destination),n.start(s),n.stop(s+.07)}}catch{}};typeof window<"u"&&(window.playNativeSound=Po);const bt=()=>{if(typeof document>"u")return;const e=document.getElementById("native-scroll-top-btn");e&&(e.classList.add("opacity-0","translate-y-3"),e.classList.add("hidden"))};typeof window<"u"&&(window.hideFloatingScrollTop=bt);const Ao=()=>{if(typeof document>"u")return;let e=document.getElementById("native-scroll-top-btn");e||(e=document.createElement("button"),e.id="native-scroll-top-btn",document.body.appendChild(e)),e.setAttribute("aria-label","Kembali ke Atas"),e.setAttribute("title","Kembali ke Atas"),e.className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 hidden opacity-0 translate-y-3 transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900/95 dark:bg-slate-800/95 text-white shadow-xl shadow-black/25 border border-slate-700/80 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_4px_20px_rgba(var(--color-primary-rgb),0.4)] hover:scale-105 active:scale-90 cursor-pointer group",e.innerHTML='<i class="fa-solid fa-arrow-up text-xs md:text-sm transition-transform duration-200 group-hover:-translate-y-0.5"></i>',e._hasClickListener||(e._hasClickListener=!0,e.addEventListener("click",()=>{ot("light");const s=document.querySelector(".view-section:not(.hidden)");if(s){const n=s.querySelector(".scroll-content");n&&n.scrollTop>10&&n.scrollTo({top:0,behavior:"smooth"})}window.scrollTo({top:0,behavior:"smooth"})}));const t=(s,n=null)=>{if(!e)return;if(typeof window<"u"&&window.appData?.store?.showScrollTopButton===!1){bt();return}const a=document.querySelector(".view-section:not(.hidden)");if(!a||a.id!=="view-catalog"&&a.id!=="view-orders"){bt();return}if(n){const r=n.closest(".view-section");if(!r||r.id!=="view-catalog"&&r.id!=="view-orders"){bt();return}}if(document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none), [id*="dialog"]:not(.hidden), .fixed.inset-0:not(.hidden):not(.pointer-events-none):not(#native-theme-ambient)')){bt();return}s>450?(e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0","translate-y-3")})):(e.classList.add("opacity-0","translate-y-3"),setTimeout(()=>{e&&e.classList.contains("opacity-0")&&e.classList.add("hidden")},300))};window.addEventListener("scroll",()=>{t(window.scrollY||document.documentElement.scrollTop)},{passive:!0}),document.addEventListener("scroll",s=>{s.target&&s.target.classList&&s.target.classList.contains("scroll-content")&&t(s.target.scrollTop,s.target)},{passive:!0,capture:!0})},To=()=>{if(typeof window>"u"||typeof document>"u")return;let e=document.getElementById("native-connectivity-banner");e||(e=document.createElement("div"),e.id="native-connectivity-banner",e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] -translate-y-16 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl",document.body.appendChild(e));let t=null;const s=n=>{clearTimeout(t),ot(n?"success":"warning"),n?(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-emerald-600 text-white border border-emerald-400/40",e.innerHTML='<i class="fa-solid fa-wifi text-xs"></i><span>Kembali Online — Terhubung</span>',t=setTimeout(()=>{e.classList.add("-translate-y-16","opacity-0")},2500)):(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-amber-500 text-slate-950 border border-amber-300/60",e.innerHTML='<i class="fa-solid fa-wifi-slash text-xs"></i><span>Mode Offline — Menggunakan Data Lokal</span>')};window.addEventListener("online",()=>s(!0)),window.addEventListener("offline",()=>s(!1))};let Ke=null,ct=null;const ja=async(e="pos_cashier")=>{try{return typeof navigator>"u"||!("wakeLock"in navigator)?!1:(Ke&&!Ke.released||(Ke=await navigator.wakeLock.request("screen"),ct=e,Ke.addEventListener("release",()=>{Ke=null})),!0)}catch{return!1}},So=async(e=null)=>{try{if(e&&ct&&e!==ct)return!1;if(Ke&&typeof Ke.release=="function")return await Ke.release(),Ke=null,ct=null,!0}catch{}return!1};typeof document<"u"&&document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&ct&&ja(ct).catch(()=>{})});const $o=(e=!1)=>{try{const t=window.Capacitor?.Plugins?.StatusBar;if(!t)return;if(typeof t.setStyle=="function"&&t.setStyle({style:e?"DARK":"LIGHT"}).catch(()=>{}),typeof t.setBackgroundColor=="function"){const n=getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim()||"#10b981";t.setBackgroundColor({color:e?"#0f172a":n}).catch(()=>{})}}catch{}},Mo=()=>{if(typeof window>"u")return;typeof document<"u"&&document.addEventListener("visibilitychange",()=>{document.hidden||typeof window.posSyncOfflineTransactions=="function"&&navigator.onLine&&window.posSyncOfflineTransactions(!0)});const e=window.Capacitor?.Plugins?.App;e&&typeof e.addListener=="function"&&e.addListener("appStateChange",t=>{t&&t.isActive&&typeof window.posSyncOfflineTransactions=="function"&&navigator.onLine&&window.posSyncOfflineTransactions(!0)})};typeof window<"u"&&(window.requestScreenWakeLock=ja,window.releaseScreenWakeLock=So,window.syncCapacitorStatusBar=$o);const Or=()=>{vo(),ko(),Ao(),To(),Mo()},_a=e=>{let t="";return typeof e=="object"&&e!==null?t=`${e.name||""} ${e.category||""} ${e.subCategory||""}`.toLowerCase():t=String(e||"").toLowerCase(),t.includes("cat")||t.includes("paint")||t.includes("politur")||t.includes("thinner")||t.includes("no drop")||t.includes("kuas")||t.includes("roll")?{icon:"fa-paint-roller",gradient:"linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",bgGlow:"none",textColor:"#e11d48"}:t.includes("gembok")||t.includes("kunci")||t.includes("grendel")||t.includes("slot")||t.includes("silinder")?{icon:"fa-lock",gradient:"linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",bgGlow:"none",textColor:"#d97706"}:t.includes("paku")||t.includes("baut")||t.includes("sekrup")||t.includes("mur")||t.includes("kawat")?{icon:"fa-hammer",gradient:"linear-gradient(135deg, #64748b 0%, #334155 100%)",bgGlow:"none",textColor:"#475569"}:t.includes("pipa")||t.includes("pvc")||t.includes("paralon")||t.includes("kran")||t.includes("sambungan")||t.includes("fitting")||t.includes("knee")||t.includes("tee")?{icon:"fa-faucet-drip",gradient:"linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)",bgGlow:"none",textColor:"#0891b2"}:t.includes("semen")||t.includes("mortar")||t.includes("pasir")||t.includes("bata")||t.includes("hebel")?{icon:"fa-trowel-bricks",gradient:"linear-gradient(135deg, #ea580c 0%, #9a3412 100%)",bgGlow:"none",textColor:"#c2410c"}:t.includes("perkakas")||t.includes("tang")||t.includes("obeng")||t.includes("palu")||t.includes("bor")||t.includes("gerinda")||t.includes("meteran")||t.includes("gergaji")?{icon:"fa-toolbox",gradient:"linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",bgGlow:"none",textColor:"#4f46e5"}:{icon:"fa-box-open",gradient:"linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",bgGlow:"none",textColor:"var(--color-primary)"}},Do=(e,t="",s="")=>{const n=_a(e);return{id:"brand",icon:n.icon,subIcon:n.icon,label:"Produk Resmi",podGradient:n.gradient,accent:"rgba(var(--color-primary-rgb),0.1)",aura:"rgba(var(--color-primary-rgb),0.08)",shadowColor:"rgba(var(--color-primary-rgb),0.15)"}},Ua=e=>{if(!e||typeof e!="string")return"TP";const s=e.replace(/[^a-zA-Z0-9\s]/g," ").trim().split(/\s+/).filter(o=>o.length>0),n=s.filter(o=>/[a-zA-Z]/.test(o)),a=n.length>0?n:s;return a.length>=2?(a[0][0]+a[1][0]).toUpperCase():a.length===1?(a[0].length>=2?a[0].slice(0,2):a[0]+"P").toUpperCase():"TP"},Co=(e,t={})=>{const s=t.size||"md",n=t.className||"",a=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk"),o=_a(e),r=Ua(a);return`
    <div class="pos-smart-cover cover-${s} ${n}" title="${i(a)}">
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
    </div>`},Lo=e=>(typeof e=="object"&&e!==null?e.name:String(e||"Produk"),`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
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
    </svg>`)}`),f=e=>typeof e=="string"?document.getElementById(e):e,za=e=>{const t=f(e);t&&t.classList.remove("hidden")},Wa=e=>{const t=f(e);t&&t.classList.add("hidden")},Ro=(e,t,s)=>{const n=f(e);n&&n.classList.toggle(t,s)},ue=(e,t)=>{const s=f(e);s&&(s.innerText=t)},qa=(e,t)=>{const s=f(e);s&&(s.innerHTML=t)},Io=(e,t)=>{const s=f(e);s&&(s.value=t)},No=e=>{const t=f(e);return t?t.value:""},_t=(e,t)=>{const s=typeof e=="string"?f(e):e,n=typeof t=="string"?f(t):t;s&&(s.classList.remove("hidden","pointer-events-none"),n&&n.classList.add("pointer-events-auto"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.classList.remove("opacity-0","pointer-events-none"),n&&(n.classList.remove("translate-y-full","sm:translate-y-10","sm:translate-y-8","translate-y-6","sm:translate-y-6","scale-95"),n.classList.add("pointer-events-auto"))})}))},at=(e,t,s)=>{const n=typeof e=="string"?f(e):e,a=typeof t=="string"?f(t):t;if(!n){typeof s=="function"&&s();return}n.classList.add("opacity-0","pointer-events-none"),a&&(a.classList.add("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95"),a.classList.remove("pointer-events-auto")),setTimeout(()=>{n.classList.add("hidden"),typeof s=="function"&&s()},280)};typeof window<"u"&&(window.openModalAnim=_t,window.closeModalAnim=at);const Oo=e=>{try{return localStorage.getItem(e)}catch{return null}},Eo=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},i=e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),y=e=>{const t=Number(e);if(isNaN(t)||e===null)return"Rp 0";const n=Math.abs(Math.round(t)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");return`${t<0?"-":""}Rp ${n}`},Bo=(e,t=!1)=>{const s=Number(e);if(isNaN(s)||e===null||s===0)return"Rp 0";const a=Math.abs(Math.round(s)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");return t||s<0?`(Rp ${a})`:`Rp ${a}`},Ho=e=>{if(!e)return new Date;if(e.timestamp&&typeof e.timestamp.toDate=="function")try{const a=e.timestamp.toDate();if(a instanceof Date&&!isNaN(a.getTime()))return a}catch{}if(e.createdAt&&typeof e.createdAt.toDate=="function")try{const a=e.createdAt.toDate();if(a instanceof Date&&!isNaN(a.getTime()))return a}catch{}if(e.timestamp&&typeof e.timestamp=="object"){const a=e.timestamp.seconds??e.timestamp._seconds;if(typeof a=="number"&&!isNaN(a)&&a>0)return new Date(a*1e3)}if(e.createdAt&&typeof e.createdAt=="object"){const a=e.createdAt.seconds??e.createdAt._seconds;if(typeof a=="number"&&!isNaN(a)&&a>0)return new Date(a*1e3)}const t=[e.dateMs,e.timestamp,e.createdAt,e.date];for(const a of t){if(typeof a=="number"&&!isNaN(a)&&a>0)return new Date(a>1e11?a:a*1e3);if(typeof a=="string"&&/^\d{10,13}$/.test(a.trim())){const o=Number(a.trim());return new Date(o>1e11?o:o*1e3)}}const s=[e.dateString,e.date,e.createdAt];for(const a of s)if(typeof a=="string"&&a.trim()&&a!=="[object Object]"){const o=new Date(a);if(!isNaN(o.getTime()))return o;const r=a.replace(/-/g,"/").replace("T"," ").replace(/\..*$/,""),l=new Date(r);if(!isNaN(l.getTime()))return l}const n=e.orderId||(typeof e=="string"?e:"");if(typeof n=="string"&&n.startsWith("ORD-")){const a=n.split("-");if(a.length>=2&&a[1].length>=6){const o=parseInt(a[1],36);if(!isNaN(o)&&o>15e11&&o<25e11)return new Date(o)}}return new Date},Fo=(e,t=null)=>{if(typeof e!="string")return e;const s=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);if(!s)return e;const n=s[1];return t==="image/gif"||e.toLowerCase().includes(".gif")||n==="1rkAFxnZDe2eLQ88kan2BeGSg56IkAEJ9"?`https://drive.google.com/uc?export=view&id=${n}`:`https://lh3.googleusercontent.com/d/${n}`},Ko=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(t))return t;const s=t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return s?s[1]:null},Ga=e=>{if(typeof e!="string"||!e.trim())return null;const t=e.trim(),s=Ko(t);if(s)return{type:"youtube",id:s,embedUrl:`https://www.youtube.com/embed/${s}?autoplay=1&mute=1&muted=1&loop=1&playlist=${s}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const n=t.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(n&&n[1]){const a=n[1];return{type:"gdrive",id:a,streamUrl:`https://drive.google.com/uc?export=download&id=${a}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${a}`,directUrl:`https://drive.google.com/uc?export=download&id=${a}`,embedUrl:`https://drive.google.com/file/d/${a}/preview?autoplay=1`}}return{type:"direct",directUrl:t,embedUrl:t}},Er=e=>{const t=Ga(e);return t?t.embedUrl:e},Br=e=>{const t=Ga(e);return t?t.embedUrl:e},Hr=(e,t)=>typeof e!="string"||!e?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${t}`:e.includes("googleusercontent.com")&&!e.includes("=")?`${e}=${t}`:e,Fr=e=>{if(!e||typeof e!="string")return!0;const t=e.trim();return!!(!t||t.includes("placehold.co"))},Kr=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",jr=(e,t,s,n)=>{document.title=e||"Toko Putri";const a=(o,r,l=!1)=>{const p=l?"property":"name";let d=document.querySelector(`meta[${p}="${o}"]`);d||(d=document.createElement("meta"),d.setAttribute(p,o),document.head.appendChild(d)),d.setAttribute("content",r)};t&&a("description",t),e&&a("og:title",e,!0),t&&a("og:description",t,!0),s&&a("og:image",s,!0),n&&a("og:url",n,!0)},_r=(e,t)=>{let s=document.getElementById(e);s||(s=document.createElement("script"),s.id=e,s.type="application/ld+json",document.head.appendChild(s)),s.textContent=JSON.stringify(t)},je=e=>{e&&ue("loader-text",e);const t=f("global-loader");t&&(t.style.opacity="1",t.style.display="flex")},Ve=()=>{const e=f("global-loader");e&&(e.style.pointerEvents="none",e.style.transition="opacity 0.25s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250))},re=(...e)=>{if(typeof window.showToast=="function")return window.showToast(...e)},jo=(...e)=>{if(typeof window.showConfirm=="function")return window.showConfirm(...e)},it={};typeof window<"u"&&(window.loadedScripts=it);const Ur=(e,t)=>t&&t()?Promise.resolve():(it[e]||(it[e]=new Promise((s,n)=>{const a=document.createElement("script");a.src=e,a.onload=()=>s(),a.onerror=()=>{delete it[e],n(new Error("Gagal memuat: "+e))},document.head.appendChild(a)})),it[e]),Va=e=>{let t=(e||"").toString().replace(/\D/g,"");return t?(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),t):""},_o=(e,t="")=>{const s=Va(e);if(!s){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp tidak valid!");return}const n=t?encodeURIComponent(t):"",a=`https://wa.me/${s}${n?`?text=${n}`:""}`;window.AndroidNativeApp&&typeof window.AndroidNativeApp.openWhatsApp=="function"?window.AndroidNativeApp.openWhatsApp(a):window.open(a,"_blank","noopener,noreferrer")},Uo=(e,t=null,s=null)=>{try{const n=(typeof t=="string"?document.querySelector(t):t)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!n)return;const a=e.getBoundingClientRect(),o=n.getBoundingClientRect(),r=document.createElement("div");r.className="flying-cart-item",s?r.innerHTML=`<img src="${s}" alt="Product" class="w-full h-full object-cover rounded-full" />`:r.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const l=a.left+a.width/2-20,p=a.top+a.height/2-20,d=o.left+o.width/2-20,m=o.top+o.height/2-20;r.style.cssText=`
            position: fixed;
            left: ${l}px;
            top: ${p}px;
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
        `,document.body.appendChild(r),requestAnimationFrame(()=>{const u=d-l,x=m-p;r.style.transform=`translate3d(${u}px, ${x}px, 0) scale(0.25) rotate(18deg)`,r.style.opacity="0.4"}),setTimeout(()=>{r&&r.parentNode&&r.parentNode.removeChild(r),ot("medium");const u=document.getElementById("bottom-nav-cart-badge")||n.querySelector(".cart-count-badge");u&&(u.classList.remove("cart-bounce-pop"),u.offsetWidth,u.classList.add("cart-bounce-pop")),n.classList.remove("cart-bounce-pop"),n.offsetWidth,n.classList.add("cart-bounce-pop"),setTimeout(()=>{u&&u.classList.remove("cart-bounce-pop"),n.classList.remove("cart-bounce-pop")},600)},500)}catch(n){console.error("flyToCart error",n)}},yt=(e={})=>{if(!e||typeof e!="object")return{hasPpn:!1,ppnAmount:0,dppAmount:0,ppnRate:0,ppnType:"exclusive",isInclusive:!1,ppnLabel:"PPN",subtotal:0,shipping:0,shippingDiscount:0,productDiscount:0,pointDiscount:0,paylaterAdminFee:0,paylaterServiceFee:0,grandTotal:0,baseBeforeTax:0};const t=e.payment||{},s=typeof window<"u"&&window.appData?.store?window.appData.store:{},a=(Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[]).reduce((G,K)=>G+parseFloat(K.qty||1)*(parseFloat(K.effectivePrice||K.price)||0),0),o=t.subtotal!==void 0&&t.subtotal!==null?parseFloat(t.subtotal):e.subtotal!==void 0&&e.subtotal!==null?parseFloat(e.subtotal):a,r=parseFloat(t.shippingCost??e.shippingCost??0)||0,l=parseFloat(t.shippingDiscount??e.shippingDiscount??0)||0,p=parseFloat(t.productDiscount??e.productDiscount??0)||0,d=parseFloat(e.pointDiscount??t.pointDiscount??0)||0,m=parseFloat(t.paylaterAdminFee??0)||0,u=parseFloat(t.paylaterServiceFee??0)||0,x=t.grandTotal!==void 0&&t.grandTotal!==null?parseFloat(t.grandTotal):e.total!==void 0&&e.total!==null?parseFloat(e.total):e.grandTotal!==void 0&&e.grandTotal!==null?parseFloat(e.grandTotal):Math.max(0,o-p-d+r-l+m+u),h=Math.max(0,o-p-d+(r-l)+m+u);let v=t.ppnRate!==void 0&&t.ppnRate!==null&&!isNaN(parseFloat(t.ppnRate))?parseFloat(t.ppnRate):e.ppnRate!==void 0&&e.ppnRate!==null&&!isNaN(parseFloat(e.ppnRate))?parseFloat(e.ppnRate):s.ppnRate!==void 0?parseFloat(s.ppnRate):11;isNaN(v)&&(v=11);let b=t.ppnType||e.ppnType||s.ppnType||"exclusive",S=parseFloat(t.ppnAmount??e.ppnAmount??e.tax??t.tax??0);isNaN(S)&&(S=0),S<=0&&x>h+.5&&(S=Math.round(x-h),b="exclusive",v<=0&&h>0&&(v=Math.round(S/h*100)));const L=s.ppnEnabled===!0||s.ppnEnabled==="true";if(S<=0&&b==="inclusive"&&v>0&&(t.ppnEnabled===!0||L)){const G=Math.round(h*100/(100+v));S=Math.max(0,h-G)}let H=t.dppAmount!==void 0&&t.dppAmount!==null&&!isNaN(parseFloat(t.dppAmount))?parseFloat(t.dppAmount):e.dppAmount!==void 0&&e.dppAmount!==null&&!isNaN(parseFloat(e.dppAmount))?parseFloat(e.dppAmount):null;H===null&&(b==="inclusive"&&v>0?H=Math.round(h*100/(100+v)):H=h);const O=S>0||t.ppnEnabled===!0||e.ppnEnabled===!0||t.ppnShowZero===!0||t.ppnRate!==void 0&&t.ppnRate!==null&&t.ppnRate>0||t.ppnRate===0&&t.ppnEnabled!==!1||L&&t.ppnEnabled!==!1,A=b==="inclusive",E=t.ppnLabel||e.ppnLabel||s.ppnTaxLabel||`${A?"Termasuk PPN":"PPN"} (${v}%)`;return{hasPpn:O,ppnAmount:S,dppAmount:H,ppnRate:v,ppnType:b,isInclusive:A,ppnLabel:E,subtotal:o,shipping:r,shippingDiscount:l,productDiscount:p,pointDiscount:d,paylaterAdminFee:m,paylaterServiceFee:u,grandTotal:x,baseBeforeTax:h}};typeof window<"u"&&(window.normalizeWA=Va,window.openWhatsApp=_o,window.sLoad=je,window.hLoad=Ve,window.el=f,window.show=za,window.hide=Wa,window.toggleCls=Ro,window.setIn=ue,window.setH=qa,window.setV=Io,window.getV=No,window.esc=i,window.fixD=Fo,window.fCur=y,window.fAccounting=Bo,window.parseOrderDate=Ho,window.extractOrderTaxInfo=yt,window.sL=Oo,window.ssL=Eo,window.triggerHaptic=ot,window.flyToCartAnimation=Uo);typeof window<"u"&&(window.renderProductCoverHtml=Co,window.getProductTheme=Do,window.getMonogram=Ua,window.getProductCoverSvgDataUri=Lo);const Ca={deviceType:"rawbt",deviceName:"Driver RawBT (Printer Thermal Android - Free)",deviceId:"",paperSize:"58mm",directPrint:!1,feedLines:3,autoCut:!0,openCashDrawer:!1,autoPrintOrder:!1,headerText:"",storeAddress:"",storePhone:"",footerText:"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.",footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi.",showLogo:!0,showAddress:!0,showPhone:!0,showNpwp:!0,showPoints:!0,showBarcode:!0,networkIp:"192.168.1.200:9100"},He=e=>{switch(e){case"58mm-compact":case"58mm_30":return 30;case"80mm-compact":case"80mm_42":return 42;case"80mm":return 48;case"58mm":default:return 32}},Z=()=>{try{const e=localStorage.getItem("freshmart_printer_config");if(e)return{...Ca,...JSON.parse(e)}}catch(e){console.warn("Gagal membaca konfigurasi printer lokal:",e)}return{...Ca}},vt=e=>{try{const s={...Z(),...e};return localStorage.setItem("freshmart_printer_config",JSON.stringify(s)),s}catch(t){return console.error("Gagal menyimpan konfigurasi printer:",t),Z()}},zo=()=>{const e=Z(),t=(o,r)=>{const l=f(o);l&&(l.checked=!!r)},s=(o,r)=>{const l=f(o);l&&(l.value=r||"")};s("printer-device-name-display",e.deviceName),s("printer-paper-size",e.paperSize),s("printer-network-ip",e.networkIp),s("printer-header-custom",e.headerText),s("printer-address-custom",e.storeAddress),s("printer-phone-custom",e.storePhone),s("printer-footer-custom",e.footerText),s("printer-policy-custom",e.footerPolicyNote),t("printer-opt-address",e.showAddress!==!1),t("printer-opt-phone",e.showPhone!==!1),t("printer-opt-npwp",e.showNpwp!==!1),t("printer-opt-points",e.showPoints),t("printer-opt-barcode",e.showBarcode),t("printer-opt-direct",e.directPrint===!0),t("printer-opt-autocut",e.autoCut!==!1),t("printer-opt-drawer",e.openCashDrawer),t("printer-opt-autoprint",e.autoPrintOrder),Ya(e.deviceType||"rawbt");const n=f("printer-settings-modal"),a=f("printer-settings-modal-box");n&&n.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("printerSettings"),_t(n,a)},Ja=(e=!1)=>{const t=f("printer-settings-modal"),s=f("printer-settings-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("printerSettings",e,()=>{at(t,s)}):at(t,s))},Ya=e=>{window._selectedPrinterType=e,document.querySelectorAll(".printer-type-card").forEach(n=>{const a=n.getAttribute("data-type"),o=n.querySelector(".printer-check-badge");a===e?(n.classList.add("printer-card-active"),o&&o.classList.remove("hidden")):(n.classList.remove("printer-card-active"),o&&o.classList.add("hidden"))});const t=f("rawbt-quick-guide-box");t&&(e==="rawbt"?t.classList.remove("hidden"):t.classList.add("hidden"));const s=f("printer-network-box");s&&(e==="network"?s.classList.remove("hidden"):s.classList.add("hidden"))},Wo=()=>{const e=(o,r="")=>{const l=f(o);return l?l.value:r},t=(o,r=!1)=>{const l=f(o);return l?l.checked:r},s=window._selectedPrinterType||"rawbt",a={deviceType:s,deviceName:e("printer-device-name-display",s==="rawbt"?"Driver RawBT (Printer Thermal Android - Free)":s==="bluetooth"?"Bluetooth POS Printer":"Printer Thermal POS"),paperSize:e("printer-paper-size","58mm"),networkIp:e("printer-network-ip","192.168.1.200:9100"),headerText:e("printer-header-custom",""),storeAddress:e("printer-address-custom",""),storePhone:e("printer-phone-custom",""),footerText:e("printer-footer-custom","Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami."),footerPolicyNote:e("printer-policy-custom","Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi."),showAddress:t("printer-opt-address",!0),showPhone:t("printer-opt-phone",!0),showNpwp:t("printer-opt-npwp",!0),showPoints:t("printer-opt-points",!0),showBarcode:t("printer-opt-barcode",!0),directPrint:t("printer-opt-direct",!1),autoCut:t("printer-opt-autocut",!0),openCashDrawer:t("printer-opt-drawer",!1),autoPrintOrder:t("printer-opt-autoprint",!1)};vt(a),re("Pengaturan printer berhasil disimpan!"),Ja()},qo=async()=>{if(!navigator.bluetooth){re("Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.");return}try{re("Mencari printer bluetooth di sekitar...");const e=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["000018f0-0000-1000-8000-00805f9b34fb","e7810a71-73ae-499d-8c15-faa9aef0c3f2","00001101-0000-1000-8000-00805f9b34fb"]});if(e){vt({deviceType:"bluetooth",deviceName:e.name||"Bluetooth POS Printer",deviceId:e.id});const t=f("printer-device-name-display");t&&(t.value=e.name||"Bluetooth POS Printer"),re(`Printer "${e.name||"Bluetooth POS"}" tersambung!`)}}catch(e){e.name!=="NotFoundError"&&re("Koneksi bluetooth dibatalkan atau tidak tersedia.")}},Go=async()=>{if(!navigator.usb){re("Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.");return}try{re("Mencari printer USB...");const e=await navigator.usb.requestDevice({filters:[]});if(e){const t=(e.productName||"USB Thermal Printer")+" (USB)";vt({deviceType:"usb",deviceName:t,deviceId:String(e.vendorId)+":"+String(e.productId)});const s=f("printer-device-name-display");s&&(s.value=t),re(`Printer USB "${t}" tersambung!`)}}catch(e){e.name!=="NotFoundError"&&re("Koneksi USB dibatalkan atau tidak ditemukan.")}},Vo=()=>{if(typeof window.executeRawBTTestPrint=="function"){window.executeRawBTTestPrint();return}const e=Z(),t=e.paperSize==="80mm",s=t?48:32,n=e.headerText||c.store?.name||"TOKO PUTRI",a=e.showAddress!==!1&&(e.storeAddress||c.store?.address)||"",o=e.showPhone!==!1&&(e.storePhone||c.store?.wa)||"",r=e.footerPolicyNote||"",l=t?"68mm":"44mm",p=(x,h,v=s)=>{const b=v-x.length-h.length;return x+(b>0?" ".repeat(b):" ")+h},d=new Date().toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let m=`
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${i(n)}</div>
    ${a?`<div style="text-align:center;font-size:10px;color:#475569;margin-bottom:2px;">${i(a)}</div>`:""}
    ${o?`<div style="text-align:center;font-size:11px;margin-bottom:4px;">Telp/WA: ${i(o)}</div>`:""}
    <div style="text-align:center;font-weight:bold;font-size:12px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:3px 0;margin:6px 0;">
        *** UJI COBA CETAK STRUK ***
    </div>
    <div style="white-space:pre;font-size:11px;">Tgl   : ${d}</div>
    <div style="white-space:pre;font-size:11px;">Format: Thermal ${t?"80mm (48 Kolom)":"58mm (32 Kolom)"}</div>
    <div style="white-space:pre;font-size:11px;">Koneksi: ${e.deviceType.toUpperCase()}</div>
    <div style="white-space:pre;font-size:11px;">Status : KONEKSI BERHASIL</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:11px;font-weight:bold;">${p("TES ITEM UJI COBA","HARGA",s)}</div>
    <div style="white-space:pre;font-size:10px;">${p("1x Produk Percobaan","Rp 25.000",s)}</div>
    <div style="white-space:pre;font-size:10px;">${p("2x Kertas Thermal Kasir","Rp 15.000",s)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:12px;font-weight:bold;">${p("TOTAL UJI","Rp 40.000",s)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    `;e.showPoints&&(m+=`<div style="white-space:pre;font-size:11px;">${p("Simulasi Poin Member","+10 Poin",s)}</div>`,m+='<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>'),e.showBarcode&&(m+=`<div style="text-align:center;margin:6px 0;">
            <div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*TEST-POS-${Date.now().toString().slice(-6)}*</div>
            <div style="font-size:9px;color:#333;">(BARCODE TEST OK)</div>
        </div><div style="border-bottom:1px dashed #000;margin:6px 0;"></div>`),m+=`
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
    `;let u=f("thermal-print-section");if(u||(u=document.createElement("div"),u.id="thermal-print-section",document.body.appendChild(u)),u.innerHTML=`<div style="width:${l};max-width:${l};font-family:'Courier New',Courier,monospace;font-size:${t?"10.5px":"8.8px"};line-height:1.2;color:#000;background:#fff;padding:0 ${t?"2.5mm":"1.5mm"} 4mm ${t?"1mm":"0.5mm"};box-sizing:border-box;">${m}</div>`,typeof window.sendToRawBT=="function"){const x=u.innerText,h=btoa(unescape(encodeURIComponent(x)));window.sendToRawBT(h,x,m)}else window.print();re("Perintah uji cetak berhasil dikirim!")};window.getPrinterConfig=Z;window.getPaperCols=He;window.savePrinterConfig=vt;window.openPrinterSettingsModal=zo;window.closePrinterSettingsModal=Ja;window.selectPrinterDeviceTypeUI=Ya;window.savePrinterSettingsFromModal=Wo;window.scanBluetoothPrinter=qo;window.scanUsbPrinter=Go;window.executeTestPrint=Vo;let La={},ne="view-catalog",_e=!1,We=null,Oe=["view-catalog"];const Ut=e=>{if(!(pe.length>0&&pe[pe.length-1]===e)){if(typeof history<"u"&&typeof window<"u"){if(history.state&&history.state.modal===e){pe.includes(e)||pe.push(e);return}history.pushState({modal:e},"",window.location.href)}pe.push(e)}},Jo=(e,t)=>{const s=pe.lastIndexOf(e);if(s>-1?pe[s]=t:pe.includes(t)||pe.push(t),typeof history<"u"&&typeof window<"u")try{history.replaceState({modal:t},"",window.location.href)}catch{}},zt=(e,t,s)=>{const n=pe.lastIndexOf(e);if(n>-1&&pe.splice(n,1),!t){_e=!0,We&&clearTimeout(We),We=setTimeout(()=>{_e=!1},300);try{typeof history<"u"&&history.back()}catch{_e=!1}}typeof s=="function"&&s()},Ee=(e,t=!1)=>{if(!e||e===ne)return;if(!t)typeof history<"u"&&typeof window<"u"&&history.pushState({view:e},"",window.location.href),e==="view-catalog"?Oe=["view-catalog"]:Oe.push(e);else{const a=Oe.lastIndexOf(e);a>-1?Oe=Oe.slice(0,a+1):Oe=["view-catalog",e]}const s=f(ne);if(s){const a=s.querySelector(".scroll-content");a&&(La[ne]=a.scrollTop)}if(ne==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime(),ne==="view-pos-cashier"&&e!=="view-pos-cashier"&&(typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),typeof window.releaseScreenWakeLock=="function"&&window.releaseScreenWakeLock("pos_cashier")),ne==="view-admin"&&e!=="view-admin"){const a=f("view-admin");a&&a.classList.remove("admin-pos-mode"),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()}if(ne==="view-admin-login"&&e!=="view-admin-login"){const a=f("login-username"),o=f("login-password");a&&(a.value=""),o&&(o.value="")}e==="view-pos-cashier"&&typeof window.requestScreenWakeLock=="function"&&window.requestScreenWakeLock("pos_cashier");const n=f(e);if(n){const r=e==="view-pos-cashier"||e==="view-admin-login"?"view-transition-scale":!!t?"view-transition-backward":"view-transition-forward";n.classList.remove("hidden","view-transition-forward","view-transition-backward","view-transition-scale","fade-in"),n.classList.add("flex",r);const l=()=>{n.classList.remove("view-transition-forward","view-transition-backward","view-transition-scale"),n.removeEventListener("animationend",l)};n.addEventListener("animationend",l,{once:!0}),setTimeout(l,260)}if(document.querySelectorAll(".view-section").forEach(a=>{a!==n&&(a.classList.add("hidden"),a.classList.remove("flex","view-transition-forward","view-transition-backward","view-transition-scale"))}),typeof window.hideFloatingScrollTop=="function")window.hideFloatingScrollTop();else{const a=document.getElementById("native-scroll-top-btn");a&&(a.classList.add("opacity-0","translate-y-3"),a.classList.add("hidden"))}if(n){if(e==="view-cart"&&typeof window.renderCart=="function")window.renderCart();else if(e==="view-checkout"&&typeof window.rChck=="function")window.rChck();else if(e==="view-payment"&&typeof window.rPay=="function")window.rPay();else if(e==="view-wishlist"&&typeof window.renderWish=="function")window.renderWish();else if(e==="view-orders"&&typeof window.renderMyOrders=="function")window.renderMyOrders();else if(e==="view-faq"&&typeof window.renderStorefrontFAQ=="function")window.renderStorefrontFAQ();else if(e==="view-pos-cashier")jt(()=>import("./module-pos-BTl17EoF.js").then(o=>o.Y),__vite__mapDeps([2,3,4,1]),import.meta.url).then(o=>{typeof o.renderPOSStorefront=="function"&&o.renderPOSStorefront()}).catch(o=>console.error("[POS] Gagal memuat storefront:",o));else if(e==="view-admin")typeof window.renderSubscriptionNoticeInCMS=="function"&&window.renderSubscriptionNoticeInCMS(),typeof Lt=="function"&&Lt();else if(e==="view-admin-login"){const o=f("login-username"),r=f("login-password");o&&document.activeElement!==o&&(o.value=""),r&&document.activeElement!==r&&(r.value="")}const a=n.querySelector(".scroll-content");if(a)if(t){const o=La[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{a.scrollTop=o}))}else a.scrollTo(0,0)}ne=e,Qa(e)},Qa=(e=ne)=>{const t=f("bottom-nav-bar");if(!t)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin","view-pos-cashier"].includes(e)){t.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.remove("translate-y-0","opacity-100");return}if(t.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(n=>n.classList.remove("active")),e==="view-catalog"){const n=f("bnav-home");n&&n.classList.add("active")}else if(e==="view-orders"){const n=f("bnav-orders");n&&n.classList.add("active")}else if(e==="view-wishlist"||e==="view-faq"){const n=f("bnav-menu");n&&n.classList.add("active")}},Yo=e=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(e==="home"?"medium":"light"),e==="home")if(ne==="view-catalog"){const t=document.querySelector("#view-catalog .scroll-content");t?t.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else Ee("view-catalog");else e==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():e==="cart"?Ee("view-cart"):e==="orders"?Ee("view-orders"):e==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},Lt=()=>{const e=f("pull-to-refresh-indicator"),t=f("ptr-icon"),s=f("ptr-text");if(!e)return;let n=!1;const a=65,o=async(m="catalog")=>{if(n)return;n=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),e.classList.add("visible"),t&&(t.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",t.style.transform="");const u=document.getElementById("admin-refresh-icon");u&&u.classList.add("fa-spin"),s&&(s.innerText=m==="admin"?"Menyinkronkan data CMS...":m==="orders"?"Menyinkronkan riwayat pesanan...":"Menyinkronkan katalog...");try{if(typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),m==="admin"){const x=f("admin-content-view"),h=x&&!x.classList.contains("hidden"),v=window.cTab;h&&v?typeof window.openAdminTab=="function"&&window.openAdminTab(v,!0):(typeof window.renderSubscriptionNoticeInCMS=="function"&&window.renderSubscriptionNoticeInCMS(),typeof window.openAdminMenu=="function"&&window.openAdminMenu()),typeof window.rDyn=="function"&&window.rDyn(),s&&(s.innerText="Data CMS Berhasil Disinkron!")}else m==="orders"?(typeof window.renderMyOrders=="function"&&window.renderMyOrders(),s&&(s.innerText="Riwayat Pesanan Diperbarui!")):(typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),s&&(s.innerText="Katalog Terkini Disinkron!"));t&&(t.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch(x){console.error("[PullToRefresh] Error refreshing data:",x),s&&(s.innerText="Gagal sinkron data"),t&&(t.className="fa-solid fa-circle-exclamation text-rose-500")}finally{u&&u.classList.remove("fa-spin")}setTimeout(()=>{e.classList.remove("visible"),setTimeout(()=>{n=!1,t&&(t.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",t.style.transform=""),s&&(s.innerText="Tarik ke bawah untuk refresh")},300)},600)},r=(m,u)=>{if(!m||m.__hasPtrAttached)return;m.__hasPtrAttached=!0;let x=0,h=0,v=!1;m.addEventListener("touchstart",b=>{pe&&pe.length>0||m.scrollTop<=5&&!n&&(x=b.touches[0].pageY,v=!0)},{passive:!0}),m.addEventListener("touchmove",b=>{if(!v||n)return;h=b.touches[0].pageY;const S=h-x;if(S>15&&m.scrollTop<=5){e.classList.add("visible");const L=Math.min(S/a,1.5);t&&(t.style.transform=`rotate(${L*240}deg)`),s&&(s.innerText=S>=a?"Lepaskan untuk segarkan":u==="admin"?"Tarik ke bawah untuk refresh CMS":"Tarik ke bawah untuk refresh")}else S<=15&&e.classList.remove("visible")},{passive:!0}),m.addEventListener("touchend",async()=>{if(!v||n)return;v=!1,h-x>=a&&m.scrollTop<=5?await o(u):(e.classList.remove("visible"),t&&(t.style.transform=""))})},l=document.querySelector("#view-catalog .scroll-content");l&&r(l,"catalog");const p=document.querySelector("#view-admin .scroll-content");p&&r(p,"admin");const d=document.querySelector("#view-orders .scroll-content");d&&r(d,"orders"),window.triggerAdminPullToRefresh=()=>o("admin"),window.triggerStorefrontPullToRefresh=()=>o("catalog"),window.executePullToRefresh=o},Za={product:["product-modal"],category:["category-modal"],brand:["brand-modal"],admin:["admin-modal"],adminOrder:["admin-order-modal"],receipt:["receipt-preview-modal"],docPreview:["doc-preview-modal"],scanner:["scanner-modal"],confirm:["custom-confirm-modal"],customerOrder:["order-detail-modal","customer-order-detail-modal"],restock:["restock-modal"],quickprice:["quickprice-modal"],member:["member-modal"],prompt:["custom-prompt-container","custom-prompt-modal"],review:["review-modal"],quickmenu:["quickmenu-modal"],variantPreview:["variant-preview-modal"],terms:["terms-modal"],privacy:["privacy-modal"],askQuestion:["modal-ask-question","ask-question-modal"],quickVariant:["quick-variant-modal"],adminFAQ:["modal-admin-faq","admin-faq-modal"],printerSettings:["printer-settings-modal"],exitConfirm:["exit-confirm-modal"],appDownload:["app-download-modal"],voucher:["voucher-modal"],guide:["shopping-guide-modal"],changelog:["changelog-modal"],guarantee:["guarantee-modal","quality-guarantee-modal"],security:["security-modal"],posVariantSheet:["pos-variant-sheet"],posLogin:["pos-login-modal"],posCartDrawer:["pos-mobile-cart-drawer","pos-cart-drawer"],posPayment:["pos-pay-modal","pos-payment-modal"],posOpenShift:["pos-open-shift-modal","modal-pos-open-shift"],posCloseShift:["pos-close-shift-modal","modal-pos-close-shift"],posShiftSummary:["pos-shift-summary-modal","modal-pos-shift-summary"],posCashMovement:["pos-cash-movement-modal","modal-pos-cash-movement"],clientTempoPay:["modal-client-tempo-pay"],clientPaySuccess:["modal-client-pay-success"],tempoConfirmations:["modal-tempo-confirmations"],thermalPreview:["utp-thermal-modal"],htmlPreview:["utp-html-modal"],addStaff:["add-staff-modal","modal-add-staff"],permissions:["permissions-modal","modal-permissions"],editStaff:["edit-staff-modal","modal-edit-staff"],soFinalize:["modal-so-finalize","so-finalize-modal"],soHistory:["modal-so-history-detail","modal-so-history","so-history-modal"],preRestore:["modal-pre-restore-inspector"],heroBanner:["admin-hero-banner-modal","hero-banner-modal"],renewal:["renewal-input-modal"],purchaseForm:["modal-po-form","po-form-modal"],purchasePicker:["modal-po-product-picker","po-product-picker-modal"],purchaseDetail:["modal-po-detail","po-detail-modal"],purchasePayment:["modal-po-payment","po-payment-modal"],supplierForm:["modal-supplier-form","supplier-form-modal"],supplierDetail:["modal-supplier-detail","supplier-detail-modal"],posHoldPrompt:["pos-hold-prompt-modal","pos-hold-prompt"],posHeldModal:["pos-held-list-modal","pos-held-modal"],posCameraScanner:["pos-camera-scanner-modal","pos-camera-scanner"],posReceiptFallback:["pos-receipt-fallback-modal"],posShiftReceipt:["pos-shift-receipt-modal"],posLogoutShift:["pos-logout-shift-modal"],colorFloat:["color-float-modal"],tempoDetail:["modal-tempo-detail","tempo-detail-modal"],tempoPayment:["modal-tempo-payment","tempo-payment-modal"],tempoPenalty:["modal-tempo-penalty","tempo-penalty-modal"],expenseForm:["modal-expense-form","expense-modal"],expenseReceipt:["modal-expense-receipt-preview"],sessionKicked:["session-kicked-modal"],productFifo:["modal-product-fifo","product-fifo-modal"],productBarcodeLabel:["modal-product-barcode-label","product-barcode-label-modal"],salesReturn:["modal-sales-return","sales-return-modal"],vendorReturn:["modal-vendor-return","vendor-return-modal"],deliveryOrder:["modal-delivery-order","delivery-order-modal"],deliverySignature:["modal-delivery-signature","delivery-signature-modal"],flashSaleForm:["modal-flash-sale-form","flash-sale-form-modal"],factoryReset:["modal-factory-reset","factory-reset-modal"],priceListExport:["modal-pricelist-export","pricelist-export-modal"],ownerHr:["modal-owner-hr","owner-hr-modal"],advanceForm:["modal-salary-advance-form","salary-advance-modal"],advanceDetail:["modal-salary-advance-detail"],payrollItemForm:["modal-payroll-item-form","payroll-item-modal"],payslipPreview:["modal-payslip-preview","payslip-preview-modal"],attendanceRecap:["modal-attendance-rekap","attendance-rekap-modal"]},ta=e=>{const t=Za[e];if(!t)return!1;const s=Array.isArray(t)?t:[t];for(const n of s){const a=document.getElementById(n);if(a&&!(a.classList.contains("hidden")||a.classList.contains("pointer-events-none"))&&!(a.style.display==="none"||a.style.visibility==="hidden")){try{const o=window.getComputedStyle(a);if(o.display==="none"||o.visibility==="hidden")continue}catch{}return!0}}return!1},aa=e=>{switch(e){case"product":if(typeof window.closeProductModal=="function")return window.closeProductModal(!0),!0;break;case"category":if(typeof window.closeCategoryModal=="function")return window.closeCategoryModal(!0),!0;break;case"brand":if(typeof window.closeBrandModal=="function")return window.closeBrandModal(!0),!0;break;case"admin":if(typeof window.closeAdminModal=="function")return window.closeAdminModal(!0),!0;break;case"adminOrder":if(typeof window.closeOrderDetailModal=="function")return window.closeOrderDetailModal(!0),!0;break;case"receipt":if(typeof window.closeReceiptPreviewModal=="function")return window.closeReceiptPreviewModal(!0),!0;break;case"docPreview":if(typeof window.closeDocPreviewModal=="function")return window.closeDocPreviewModal(!0),!0;break;case"scanner":if(typeof window.closeCameraScanner=="function")return window.closeCameraScanner(!0),!0;break;case"confirm":if(typeof window.closeConfirm=="function")return window.closeConfirm(!0),!0;break;case"customerOrder":if(typeof window.closeCustomerOrderDetailModal=="function")return window.closeCustomerOrderDetailModal(!0),!0;break;case"restock":if(typeof window.closeRestockModal=="function")return window.closeRestockModal(!0),!0;break;case"quickprice":if(typeof window.closeQuickPriceModal=="function")return window.closeQuickPriceModal(!0),!0;break;case"member":if(typeof window.closeMemberModal=="function")return window.closeMemberModal(!0),!0;break;case"prompt":if(typeof window.closePrompt=="function")return window.closePrompt(!0),!0;break;case"review":if(typeof window.closeReviewModal=="function")return window.closeReviewModal(!0),!0;break;case"quickmenu":if(typeof window.closeQuickMenuModal=="function")return window.closeQuickMenuModal(!0),!0;break;case"variantPreview":if(typeof window.closeVariantPreviewModal=="function")return window.closeVariantPreviewModal(!0),!0;break;case"terms":if(typeof window.closeTermsModal=="function")return window.closeTermsModal(!0),!0;break;case"privacy":if(typeof window.closePrivacyModal=="function")return window.closePrivacyModal(!0),!0;break;case"askQuestion":if(typeof window.closeAskQuestionModal=="function")return window.closeAskQuestionModal(!0),!0;break;case"quickVariant":if(typeof window.closeQuickVariantSheet=="function")return window.closeQuickVariantSheet(!0),!0;break;case"adminFAQ":if(typeof window.closeAdminFAQModal=="function")return window.closeAdminFAQModal(!0),!0;break;case"printerSettings":if(typeof window.closePrinterSettingsModal=="function")return window.closePrinterSettingsModal(!0),!0;break;case"exitConfirm":if(typeof window.closeExitConfirmModal=="function")return window.closeExitConfirmModal(!0),!0;break;case"appDownload":if(typeof window.closeAppDownloadModal=="function")return window.closeAppDownloadModal(!0),!0;break;case"voucher":if(typeof window.closeVoucherModal=="function")return window.closeVoucherModal(!0),!0;break;case"guide":if(typeof window.closeShoppingGuideModal=="function")return window.closeShoppingGuideModal(!0),!0;break;case"changelog":if(typeof window.closeChangelogModal=="function")return window.closeChangelogModal(!0),!0;break;case"guarantee":if(typeof window.closeQualityGuaranteeModal=="function")return window.closeQualityGuaranteeModal(!0),!0;break;case"security":if(typeof window.closeSecurityModal=="function")return window.closeSecurityModal(!0),!0;break;case"posVariantSheet":if(typeof window.closePOSVariantSheet=="function")return window.closePOSVariantSheet(!0),!0;break;case"posLogin":if(typeof window.closePOSLoginModal=="function")return window.closePOSLoginModal(!0),!0;break;case"posCartDrawer":if(typeof window.closePOSCartDrawer=="function")return window.closePOSCartDrawer(!0),!0;break;case"posPayment":if(typeof window.closePayModal=="function")return window.closePayModal(!0),!0;break;case"posOpenShift":if(typeof window.closePOSOpenShiftModal=="function")return window.closePOSOpenShiftModal(!0),!0;break;case"posCloseShift":if(typeof window.closePOSCloseShiftModal=="function")return window.closePOSCloseShiftModal(!0),!0;break;case"posShiftSummary":if(typeof window.closePOSShiftSummaryModal=="function")return window.closePOSShiftSummaryModal(!0),!0;break;case"posCashMovement":if(typeof window.closePOSCashMovementModal=="function")return window.closePOSCashMovementModal(!0),!0;break;case"clientTempoPay":if(typeof window.closeClientTempoPayModal=="function")return window.closeClientTempoPayModal(!0),!0;if(typeof window.closeClientPaymentModal=="function")return window.closeClientPaymentModal(!0),!0;break;case"clientPaySuccess":if(typeof window.closeClientPaymentSuccessModal=="function")return window.closeClientPaymentSuccessModal(!0),!0;break;case"tempoConfirmations":if(typeof window.closeTempoConfirmationsModal=="function")return window.closeTempoConfirmationsModal(!0),!0;break;case"thermalPreview":return typeof window.closeThermalPrintPreview=="function"?(window.closeThermalPrintPreview(!0),!0):typeof window.closeThermalPreviewModal=="function"?(window.closeThermalPreviewModal(!0),!0):(document.getElementById("utp-thermal-modal")?.remove(),!0);case"htmlPreview":return typeof window.closeHtmlPrintPreview=="function"?(window.closeHtmlPrintPreview(!0),!0):typeof window.closeHtmlPreviewModal=="function"?(window.closeHtmlPreviewModal(!0),!0):(document.getElementById("utp-html-modal")?.remove(),!0);case"posReceiptFallback":return typeof window.closePOSReceiptFallbackModal=="function"?(window.closePOSReceiptFallbackModal(!0),!0):(document.getElementById("pos-receipt-fallback-modal")?.remove(),!0);case"posShiftReceipt":return typeof window.closePOSShiftReceiptModal=="function"?(window.closePOSShiftReceiptModal(!0),!0):(document.getElementById("pos-shift-receipt-modal")?.remove(),!0);case"addStaff":if(typeof window.closeAddStaffModal=="function")return window.closeAddStaffModal(!0),!0;break;case"permissions":if(typeof window.closePermissionsModal=="function")return window.closePermissionsModal(!0),!0;break;case"editStaff":if(typeof window.closeEditStaffModal=="function")return window.closeEditStaffModal(!0),!0;break;case"ownerHr":if(typeof window.closeOwnerHrModal=="function")return window.closeOwnerHrModal(!0),!0;break;case"advanceForm":if(typeof window.closeSalaryAdvanceFormModal=="function")return window.closeSalaryAdvanceFormModal(!0),!0;break;case"advanceDetail":if(typeof window.closeAdvanceDetailModal=="function")return window.closeAdvanceDetailModal(!0),!0;break;case"payrollItemForm":if(typeof window.closePayrollItemModal=="function")return window.closePayrollItemModal(!0),!0;break;case"payslipPreview":if(typeof window.closePayslipPreviewModal=="function")return window.closePayslipPreviewModal(!0),!0;break;case"soFinalize":if(typeof window.closeSOFinalizeModal=="function")return window.closeSOFinalizeModal(!0),!0;if(typeof window.closeFinalizeModal=="function")return window.closeFinalizeModal(!0),!0;break;case"soHistory":if(typeof window.closeSOHistoryModal=="function")return window.closeSOHistoryModal(!0),!0;if(typeof window.closeSoHistoryModal=="function")return window.closeSoHistoryModal(!0),!0;break;case"preRestore":if(typeof window.closePreRestoreModal=="function")return window.closePreRestoreModal(!0),!0;break;case"heroBanner":if(typeof window.closeHeroBannerModal=="function")return window.closeHeroBannerModal(!0),!0;break;case"renewal":if(typeof window.closeRenewalModal=="function")return window.closeRenewalModal(!0),!0;break;case"purchaseForm":if(typeof window.closeCreatePOModal=="function")return window.closeCreatePOModal(!0),!0;break;case"purchasePicker":if(typeof window.closePOProductPicker=="function")return window.closePOProductPicker(!0),!0;break;case"purchaseDetail":if(typeof window.closePurchaseDetailModal=="function")return window.closePurchaseDetailModal(!0),!0;break;case"purchasePayment":if(typeof window.closePurchasePaymentModal=="function")return window.closePurchasePaymentModal(!0),!0;break;case"supplierForm":if(typeof window.closeSupplierFormModal=="function")return window.closeSupplierFormModal(!0),!0;break;case"supplierDetail":if(typeof window.closeSupplierDetailModal=="function")return window.closeSupplierDetailModal(!0),!0;break;case"posHoldPrompt":if(typeof window.closePOSHoldPrompt=="function")return window.closePOSHoldPrompt(!0),!0;break;case"posHeldModal":if(typeof window.closePOSHeldModal=="function")return window.closePOSHeldModal(!0),!0;break;case"posCameraScanner":if(typeof window.closePOSCameraScanner=="function")return window.closePOSCameraScanner(!0),!0;break;case"tempoDetail":if(typeof window.closeTempoDetailModal=="function")return window.closeTempoDetailModal(!0),!0;break;case"tempoPayment":if(typeof window.closeTempoPaymentModal=="function")return window.closeTempoPaymentModal(!0),!0;break;case"tempoPenalty":if(typeof window.closeTempoPenaltyModal=="function")return window.closeTempoPenaltyModal(!0),!0;break;case"expenseForm":if(typeof window.closeExpenseModal=="function")return window.closeExpenseModal(!0),!0;break;case"expenseReceipt":if(typeof window.closeExpenseReceiptPreview=="function")return window.closeExpenseReceiptPreview(!0),!0;break;case"colorFloat":return typeof window._closeColorFloatModal=="function"?(window._closeColorFloatModal(!0),!0):(document.getElementById("color-float-modal")?.remove(),!0);case"posLogoutShift":return document.getElementById("pos-logout-shift-modal")?.remove(),!0;case"sessionKicked":return typeof window.closeSessionKickedModal=="function"?(window.closeSessionKickedModal(!0),!0):(document.getElementById("session-kicked-modal")?.remove(),!0);case"productFifo":if(typeof window.closeProductFifoModal=="function")return window.closeProductFifoModal(!0),!0;break;case"productBarcodeLabel":if(typeof window.closeProductBarcodeLabelModal=="function")return window.closeProductBarcodeLabelModal(!0),!0;break;case"salesReturn":if(typeof window.closeSalesReturnModal=="function")return window.closeSalesReturnModal(!0),!0;break;case"vendorReturn":if(typeof window.closeVendorReturnModal=="function")return window.closeVendorReturnModal(!0),!0;break;case"deliveryOrder":if(typeof window.closeDeliveryModal=="function")return window.closeDeliveryModal(!0),!0;break;case"deliverySignature":if(typeof window.closeDeliverySignatureModal=="function")return window.closeDeliverySignatureModal(!0),!0;break;case"flashSaleForm":if(typeof window.closeFlashSaleModal=="function")return window.closeFlashSaleModal(!0),!0;break;case"factoryReset":if(typeof window.closeFactoryResetModal=="function")return window.closeFactoryResetModal(!0),!0;break;case"priceListExport":if(typeof window.closePriceListExportModal=="function")return window.closePriceListExportModal(!0),!0;break;case"attendanceRecap":if(typeof window.closeMonthlyAttendanceRecapModal=="function")return window.closeMonthlyAttendanceRecapModal(!0),!0;break}const t=Za[e]||[],s=Array.isArray(t)?t:[t];for(const n of s){const a=document.getElementById(n);if(a){if(["utp-thermal-modal","utp-html-modal","pos-receipt-fallback-modal","pos-shift-receipt-modal","pos-hold-prompt-modal","pos-held-list-modal","pos-camera-scanner-modal","color-float-modal","pos-logout-shift-modal","custom-prompt-container"].includes(n))return a.remove(),!0;if(!a.classList.contains("hidden"))return a.classList.add("hidden"),a.style.display="none",!0}}return!1},da=(e=!1)=>{const t=()=>{if(!e&&typeof history<"u"&&history.state&&history.state.modal){_e=!0,We&&clearTimeout(We),We=setTimeout(()=>{_e=!1},300);try{history.back()}catch{_e=!1}}},s=[{id:"utp-thermal-modal",close:()=>{typeof window.closeThermalPrintPreview=="function"?window.closeThermalPrintPreview(!0):typeof window.closeThermalPreviewModal=="function"?window.closeThermalPreviewModal(!0):document.getElementById("utp-thermal-modal")?.remove()}},{id:"utp-html-modal",close:()=>{typeof window.closeHtmlPrintPreview=="function"?window.closeHtmlPrintPreview(!0):typeof window.closeHtmlPreviewModal=="function"?window.closeHtmlPreviewModal(!0):document.getElementById("utp-html-modal")?.remove()}},{id:"pos-receipt-fallback-modal",close:()=>{typeof window.closePOSReceiptFallbackModal=="function"?window.closePOSReceiptFallbackModal(!0):document.getElementById("pos-receipt-fallback-modal")?.remove()}},{id:"pos-shift-receipt-modal",close:()=>{typeof window.closePOSShiftReceiptModal=="function"?window.closePOSShiftReceiptModal(!0):document.getElementById("pos-shift-receipt-modal")?.remove()}},{id:"receipt-preview-modal",isOpen:o=>!o.classList.contains("hidden"),close:()=>{typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):document.getElementById("receipt-preview-modal")?.classList.add("hidden")}},{id:"doc-preview-modal",isOpen:o=>!o.classList.contains("hidden"),close:()=>{typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):document.getElementById("doc-preview-modal")?.classList.add("hidden")}},{id:"modal-expense-receipt-preview",isOpen:o=>!o.classList.contains("hidden"),close:()=>{typeof window.closeExpenseReceiptPreview=="function"?window.closeExpenseReceiptPreview(!0):document.getElementById("modal-expense-receipt-preview")?.classList.add("hidden")}}];for(const o of s){const r=document.getElementById(o.id);if(r&&(!o.isOpen||o.isOpen(r))){const l={"utp-thermal-modal":"thermalPreview","utp-html-modal":"htmlPreview","pos-receipt-fallback-modal":"posReceiptFallback","pos-shift-receipt-modal":"posShiftReceipt","receipt-preview-modal":"receipt","doc-preview-modal":"docPreview","modal-expense-receipt-preview":"expenseReceipt"}[o.id];if(l){const p=pe.lastIndexOf(l);p>-1&&pe.splice(p,1)}return o.close(),t(),!0}}const n=["pos-success-modal","pos-recall-confirm-modal","pos-delete-confirm-modal","pos-closed-success-modal","pos-logout-shift-modal","session-kicked-modal"];for(const o of n){const r=document.getElementById(o);if(r)return r.remove(),t(),!0}for(;pe.length>0;){const o=pe.pop();if(ta(o))return aa(o),t(),!0}const a=["variantPreview","quickVariant","product","attendanceRecap","priceListExport","factoryReset","flashSaleForm","deliverySignature","deliveryOrder","salesReturn","vendorReturn","productBarcodeLabel","productFifo","sessionKicked","exitConfirm","colorFloat","posLogoutShift","posReceiptFallback","posShiftReceipt","clientPaySuccess","clientTempoPay","tempoConfirmations","posVariantSheet","posLogin","posCartDrawer","posPayment","posOpenShift","posCloseShift","posShiftSummary","posCashMovement","thermalPreview","htmlPreview","addStaff","permissions","editStaff","ownerHr","advanceForm","advanceDetail","payrollItemForm","payslipPreview","soFinalize","soHistory","preRestore","heroBanner","renewal","purchasePayment","purchaseDetail","purchasePicker","purchaseForm","supplierDetail","supplierForm","posHoldPrompt","posHeldModal","posCameraScanner","tempoPenalty","tempoPayment","tempoDetail","expenseReceipt","expenseForm","customerOrder","restock","quickprice","member","review","voucher","changelog","appDownload","guarantee","security","confirm","prompt","printerSettings","docPreview","receipt","adminFAQ","adminOrder","admin","brand","category","quickmenu","guide","terms","privacy","scanner","askQuestion"];for(const o of a)if(ta(o))return aa(o),t(),!0;return!1},Xa=()=>{const e=f("exit-confirm-modal");e&&(e.classList.contains("hidden")&&Ut("exitConfirm"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=f("exit-confirm-modal-box");t&&t.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},ca=(e=!1)=>{zt("exitConfirm",e,()=>{const t=f("exit-confirm-modal"),s=f("exit-confirm-modal-box");t&&t.classList.add("opacity-0"),s&&s.classList.add("scale-95"),setTimeout(()=>{t&&t.classList.add("hidden")},250)})},Qo=()=>{ca(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri!"),setTimeout(()=>{try{window.close()}catch{}},400))},Zo=()=>{if(da(!1))return;if(ne==="view-admin"){const t=f("admin-content-view"),s=f("admin-dashboard-view");if(!!(t&&!t.classList.contains("hidden")||s&&s.classList.contains("hidden")||window.history.state&&window.history.state.tab||typeof window.cTab<"u"&&window.cTab)){if(window.history.state&&window.history.state.tab&&window.history.length>1)try{window.history.back();return}catch{}typeof window.openAdminMenu=="function"&&window.openAdminMenu();try{window.history.replaceState({view:"view-admin"},"",window.location.href)}catch{}return}if(typeof window.showConfirm=="function"){const a=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),o=a?"Keluar Panel Owner":"Keluar CMS Toko",r=a?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(o,r,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}return}if(ne==="view-pos-cashier"){typeof window.showConfirm=="function"?window.showConfirm("Keluar Mode Kasir","Yakin keluar dari mode POS kasir?",()=>{typeof window.exitPOSMode=="function"?window.exitPOSMode():Ee("view-catalog")},"Ya, Keluar",!0):Ee("view-catalog");return}if(ne!=="view-catalog"){let t="view-catalog";if(ne==="view-payment")t="view-checkout";else if(ne==="view-checkout")t="view-cart";else if(ne==="view-cart")t="view-catalog";else if(ne==="view-orders"||ne==="view-wishlist"||ne==="view-faq"||ne==="view-admin-login")t="view-catalog";else if(Array.isArray(Oe)&&Oe.length>1){const s=Oe[Oe.length-2];s&&s!==ne&&(t=s)}Ee(t,!0);try{typeof history<"u"&&window.history.length>1&&window.history.state&&window.history.state.view&&window.history.replaceState({view:t},"",window.location.href)}catch{}return}const e=f("exit-confirm-modal");e&&!e.classList.contains("hidden")?ca():Xa()},Xo=()=>{Lt();try{(!history.state||!history.state.view)&&history.replaceState({view:"view-catalog"},"",window.location.href)}catch{}window.addEventListener("popstate",e=>{if(_e){_e=!1,We&&clearTimeout(We);return}if(da(!0))return;const t=e.state||{},s=t.view||null;if(window.isAdm||window.__localIsAdm)if(s==="view-admin")Ee("view-admin",!0),t.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(t.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu();else{const a=f("admin-content-view");if(a&&!a.classList.contains("hidden")){history.pushState({view:"view-admin"},"",window.location.href),Ee("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}if(history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"){const o=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=o?"Keluar Panel Owner":"Keluar CMS Toko",l=o?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,l,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}}else if(s){let a=s;s==="view-admin"&&(a="view-admin-login"),Ee(a,!0)}else Ee("view-catalog",!0)})};if(typeof window<"u"){window.pushModalHistory=Ut,window.replaceModalHistory=Jo,window.requestCloseModal=zt,window.changeView=Ee,window.setupHistoryRouter=Xo,window.onBottomNavClick=Yo,window.updateBottomNav=Qa,window.initPullToRefresh=Lt,window.triggerAdminPullToRefresh=window.triggerAdminPullToRefresh,window.triggerStorefrontPullToRefresh=window.triggerStorefrontPullToRefresh,window.executePullToRefresh=window.executePullToRefresh,window.handleAppBackButton=Zo,window.closeTopmostOpenModal=da,window.isModalOpenInDOM=ta,window.closeModalByName=aa,window.openExitConfirmModal=Xa,window.closeExitConfirmModal=ca,window.confirmExitApp=Qo,window.isProgrammaticModalClose=_e,window.viewHistoryStack=Oe;try{Object.defineProperty(window,"curViewName",{get:()=>ne,set:e=>{ne=e},configurable:!0})}catch{}}let sa=null,lt=null;const en=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}ge("Kode "+e+" berhasil disalin!")}catch{ge("Gagal menyalin. Kode: "+e)}},ge=(e,t,s,n)=>{const a=f("toast");if(!a)return;if(!t){const b=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(b)?t="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(b)?t="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(b)?t="warning":/upload|proses|memuat|loading|sedang/.test(b)?t="loading":t="info"}typeof window.triggerHaptic=="function"&&window.triggerHaptic(t==="error"?"error":t==="warning"?"warning":t==="success"?"success":"light");const o=getComputedStyle(document.documentElement),r=o.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",l=o.getPropertyValue("--color-primary").trim()||"#10b981";o.getPropertyValue("--color-primary-dark").trim();const p={success:{icon:"fa-circle-check",label:"Berhasil",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`}},d=p[t]||p.info,m=f("toast-icon");m&&(m.className="fa-solid "+d.icon);const u=f("toast-title");u&&(u.textContent=s||d.label,u.style.display="block",u.style.color=d.accent);const x=f("toast-icon-wrap");x&&(x.style.background=d.iconBg,x.style.color=d.accent),ue("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let h=f("toast-progress");h||(h=document.createElement("div"),h.id="toast-progress",a.appendChild(h)),h.style.background=d.accent,h.style.transition="none",h.style.width="100%",h.style.opacity="0.85",clearTimeout(sa),a.classList.add("toast-show");const v=n||(t==="loading"?8e3:t==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{h.style.transition=`width ${v}ms linear`,h.style.width="0%"})),sa=setTimeout(()=>{a.classList.remove("toast-show")},v)},tn=e=>ge(e,"loading","Memproses...",8e3),an=()=>{clearTimeout(sa);const e=f("toast");e&&e.classList.remove("toast-show")},sn=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")};let qe=null;const on=(e,t,s,n=null,a=null)=>{let o=e,r=t,l=s,p=n,d=a;typeof t=="function"&&(l=t,r=e,o=typeof n=="string"?n:"Konfirmasi Tindakan",p=typeof s=="string"?s:null,d===null&&(d=!0));const m=`${o||""} ${typeof r=="string"?r:""}`.toLowerCase(),u=/cetak|print/.test(m),x=/hapus|delete|kosongkan|reset|buang|hilang|batalkan/.test(m);d===null&&(d=x),p||(u?p="Ya, Cetak":d?p="Ya, Hapus":p="Ya, Lanjutkan");let h=null;typeof l!="function"?(h=new Promise(L=>{qe=L}),lt=null):(lt=l,qe=null),ue("confirm-title",o);const v=f("confirm-msg");if(v)if(typeof r=="string"){const L=typeof window.DOMPurify<"u"?window.DOMPurify.sanitize(r,{ADD_ATTR:["class","style"]}):r;v.innerHTML=L}else v.textContent=r||"";const b=f("confirm-yes-btn");b&&(b.innerText=p,d?(b.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 active:scale-95 transition-all text-xs sm:text-sm shadow-md shadow-rose-500/30 cursor-pointer",f("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",f("confirm-icon").className="fa-solid fa-triangle-exclamation"):(b.className="flex-1 py-3.5 text-white font-bold rounded-2xl hover:opacity-95 active:scale-95 transition-all text-xs sm:text-sm shadow-sm cursor-pointer",b.style.background="var(--color-primary)",b.style.boxShadow="0 4px 14px rgba(var(--color-primary-rgb), 0.35)",f("confirm-icon-box").className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border shadow-2xs",f("confirm-icon-box").style.background="rgba(var(--color-primary-rgb), 0.12)",f("confirm-icon-box").style.color="var(--color-primary)",f("confirm-icon-box").style.borderColor="rgba(var(--color-primary-rgb), 0.25)",f("confirm-icon").className=u?"fa-solid fa-print":"fa-solid fa-circle-check"));const S=f("custom-confirm-modal");return S&&S.classList.contains("hidden")&&Ut("confirm"),za("custom-confirm-modal"),setTimeout(()=>{f("custom-confirm-modal").classList.remove("opacity-0"),f("custom-confirm-box").classList.remove("scale-95")},10),h},oa=(e=!1)=>{if(qe){const t=qe;qe=null,t(!1)}zt("confirm",e,()=>{f("custom-confirm-modal").classList.add("opacity-0"),f("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>Wa("custom-confirm-modal"),300)})},nn=()=>{if(qe){const e=qe;qe=null,lt=null,oa(),setTimeout(()=>{e(!0)},150);return}if(lt){const e=lt;lt=null,oa(),setTimeout(()=>{e()},150)}},rn=(e,t="",s=null)=>{let n=null,a=null;typeof s!="function"&&(a=new Promise(x=>{n=x}));const o=t!=null?String(t):"",r=o.length>50||o.includes(`
`)||/balasan|catatan|alasan|deskripsi|pesan|keterangan/i.test(e),l=o.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),p=r?`<textarea id="prompt-input" rows="3" class="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 custom-scrollbar resize-none leading-relaxed" placeholder="Tuliskan di sini...">${l}</textarea>`:`<input type="text" id="prompt-input" value="${l}" class="w-full px-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-bold focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 text-center" autocomplete="off" />`;let d=document.createElement("div");d.id="custom-prompt-container",d.className="fixed inset-0 z-[10005] bg-slate-900/85 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300",d.onclick=x=>{x.target===d&&window.closePrompt()},d.innerHTML=`
        <div class="bg-white dark:bg-slate-800 rounded-[2rem] w-full max-w-[380px] sm:max-w-[420px] p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-700 relative transform scale-95 transition-all duration-300 flex flex-col text-center" onclick="event.stopPropagation()">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 border shadow-sm" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb),0.2)">
                <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <h3 class="font-black text-slate-900 dark:text-white text-base sm:text-lg mb-3 tracking-tight leading-snug">${e}</h3>
            ${p}
            <div class="flex gap-3">
                <button id="prompt-cancel" type="button" class="flex-1 py-3.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-600 active:scale-95 transition-all text-xs sm:text-sm cursor-pointer">Batal</button>
                <button id="prompt-ok" type="button" class="flex-1 py-3.5 text-white font-bold rounded-2xl hover:opacity-95 active:scale-95 transition-all text-xs sm:text-sm shadow-md cursor-pointer" style="background: var(--color-primary)">Simpan</button>
            </div>
        </div>
    `,document.body.appendChild(d);const m=d.querySelector("div");Ut("prompt"),setTimeout(()=>{d.classList.remove("opacity-0"),m.classList.remove("scale-95")},10);const u=d.querySelector("#prompt-input");return u&&(u.focus(),u.select(),u.onkeydown=x=>{x.key==="Enter"&&(!r||x.ctrlKey)?(x.preventDefault(),d.querySelector("#prompt-ok")?.click()):x.key==="Escape"&&(x.preventDefault(),window.closePrompt())}),window.closePrompt=(x=!1)=>{if(!(!d||!d.parentNode)){if(n){const h=n;n=null,h(null)}zt("prompt",x,()=>{d.classList.add("opacity-0"),m.classList.add("scale-95"),setTimeout(()=>d.remove(),300),window.closePrompt=null})}},d.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),d.querySelector("#prompt-ok").onclick=()=>{let x=u.value;if(n){const h=n;n=null,window.closePrompt(),h(x)}else window.closePrompt(),typeof s=="function"&&s(x)},a},ln=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=en;window.showToast=ge;window.showToastLoading=tn;window.hideToast=an;window.toggleTheme=sn;window.showConfirm=on;window.closeConfirm=oa;window.executeConfirm=nn;window.customPrompt=rn;window.checkProPrint=ln;const ht="utp-thermal-modal",Rt="utp-html-modal";let $e=null,pa=null,wt=null,gt=null;const It=()=>{if(document.getElementById("utp-style"))return;const e=document.createElement("style");e.id="utp-style",e.textContent=`
        @keyframes utpSheetIn { from { transform: translateY(28px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .utp-sheet { animation: utpSheetIn .2s cubic-bezier(.2,.8,.2,1); }
        .utp-canvas {
            background-color: #f1f5f9;
            background-image: none;
        }
        .dark .utp-canvas { background-color: #0f172a; background-image: none; }
        .utp-paper {
            position: relative; background: #fff; color: #000000;
            font-family: 'Consolas', 'Courier New', Courier, ui-monospace, monospace;
            font-size: 12px; font-weight: 700; line-height: 1.32; padding: 16px 14px 18px;
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
        .utp-line { white-space: pre; overflow: hidden; min-height: 1.32em; font-weight: 700; color: #000000; }
        .utp-line.utp-title { font-size: 1.85em; font-weight: 900; line-height: 1.15; letter-spacing: 0.5px; }
        .utp-line.utp-tall { height: 2.64em; font-weight: 900; }
        .utp-line.utp-tall > span { display: block; transform: scaleY(2); transform-origin: top center; }
        .utp-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            width: 100%;
            line-height: 1.32;
            font-weight: 700;
            color: #000000;
        }
        .utp-col-left {
            text-align: left;
            word-break: break-word;
            flex: 1 1 auto;
            font-weight: 700;
            color: #000000;
        }
        .utp-col-right {
            text-align: right;
            white-space: nowrap;
            flex-shrink: 0;
            margin-left: 6px;
            font-variant-numeric: tabular-nums;
            font-weight: 800;
            color: #000000;
        }
        .utp-separator {
            border-bottom: 1.5px dashed #000000;
            margin: 4px 0;
            width: 100%;
            height: 0;
        }
        .utp-double-separator {
            border-bottom: 3px double #000000;
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
    `,document.head.appendChild(e)},es=()=>{gt===null&&(gt=document.body.style.overflow||"",document.body.style.overflow="hidden")},ma=()=>{gt!==null&&!document.getElementById(ht)&&!document.getElementById(Rt)&&(document.body.style.overflow=gt,gt=null)},ts=(e,t)=>{Wt(),wt=s=>{const n=s.target&&s.target.tagName||"";s.key==="Escape"?(s.preventDefault(),t()):s.key==="Enter"&&!/INPUT|TEXTAREA|SELECT/.test(n)&&(s.preventDefault(),e())},document.addEventListener("keydown",wt,!0)},Wt=()=>{wt&&document.removeEventListener("keydown",wt,!0),wt=null},dn=e=>{const t=e.deviceType||"rawbt",s=/android/i.test(navigator.userAgent||"");return t==="rawbt"?s||window.AndroidNativeApp?"RawBT Android":"Printer Browser":t==="bluetooth"?"Bluetooth":t==="usb"?"USB OTG":t==="network"?"WiFi / LAN":"Printer Sistem"},cn=e=>{if(e.html&&/<[a-z][\s\S]*>/i.test(e.html))return`<div class="utp-html-rendered" style="white-space:normal;width:100%;">${e.html}</div>`;let t=Array.isArray(e.previewLines)&&e.previewLines.length?e.previewLines:null;t||(t=String(e.plainText||"").split(`
`).map(n=>({t:n,a:"left",b:!1,s:"normal"})));const s=[...t];for(;s.length>1&&!String(s[s.length-1].t||"").trim();)s.pop();return s.map(n=>{if(n.type==="two-column")return`<div class="utp-row ${n.b?"font-bold":""}"><div class="utp-col-left">${i(n.left)}</div><div class="utp-col-right">${i(n.right)}</div></div>`;if(n.type==="separator")return'<div class="utp-separator"></div>';if(n.type==="double-separator")return'<div class="utp-double-separator"></div>';if(n.isBarcode||n.s==="barcode"||n.type==="barcode")return`
            <div class="utp-barcode-wrap" style="text-align:center;">
                <div class="utp-barcode-bars mx-auto" aria-hidden="true"></div>
                <div class="utp-barcode-code">*${i(n.code||n.t||"")}*</div>
            </div>`;const a=i(String(n.t??""))||"&nbsp;",o=n.a==="center"?"center":n.a==="right"?"right":"left",r=n.b?800:400;return n.s==="title"||n.s==="wide"?`<div class="utp-line utp-title" style="text-align:${o};font-weight:${r}">${a}</div>`:n.s==="tall"||n.s==="total"?`<div class="utp-line utp-tall" style="text-align:${o};font-weight:${r}"><span>${a}</span></div>`:`<div class="utp-line" style="text-align:${o};font-weight:${r}">${a}</div>`}).join("")},as=()=>{const e=$e;if(!e)return;const t=Z(),s=He(t.paperSize),n=s>=40,a=Array.isArray(e.previewLines)?e.previewLines.length:String(e.plainText||"").split(`
`).length,o=typeof e.rebuild=="function"?`
        <div class="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70" role="group" aria-label="Ukuran kertas">
            <button type="button" id="utp-paper-58" onclick="window.setThermalPreviewPaper('58mm')" class="utp-seg-btn ${n?"text-slate-600 dark:text-slate-300":"is-active"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">58mm</button>
            <button type="button" id="utp-paper-80" onclick="window.setThermalPreviewPaper('80mm')" class="utp-seg-btn ${n?"is-active":"text-slate-600 dark:text-slate-300"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">80mm</button>
        </div>`:"",r=`
    <div id="${ht}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-thermal-title" onclick="if(event.target===this) window.closeThermalPrintPreview()">
        <div class="utp-sheet bg-white dark:bg-slate-900 w-full ${n?"sm:max-w-[500px]":"sm:max-w-[440px]"} rounded-t-[2rem] sm:rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col max-h-[94dvh] overflow-hidden">
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
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-scroll text-[var(--color-primary)]"></i>${n?"80mm":"58mm"} · ${s} kolom</span>
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-print text-slate-400"></i>${i(dn(t))}</span>
                    <span class="utp-chip bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-check"></i>${a} baris</span>
                </div>
                ${o}
            </div>

            <div class="utp-canvas flex-1 overflow-auto px-3 py-5 sm:px-5 custom-scrollbar">
                <div class="utp-paper mx-auto" style="width:${s}ch;">
                    ${cn(e)}
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
    </div>`;document.getElementById(ht)?.remove(),document.body.insertAdjacentHTML("beforeend",r),setTimeout(()=>document.getElementById("utp-thermal-confirm")?.focus({preventScroll:!0}),60)},ss=e=>!e||typeof e.dispatch!="function"?!1:(It(),$e={...e},as(),es(),ts(()=>os(),()=>qt()),typeof window.pushModalHistory=="function"&&window.pushModalHistory("thermalPreview"),!0),qt=(e=!1)=>{const t=()=>{const s=$e;if(document.getElementById(ht)?.remove(),$e=null,Wt(),ma(),s&&typeof s.onCancel=="function")try{s.onCancel()}catch{}};typeof window.requestCloseModal=="function"?window.requestCloseModal("thermalPreview",e,t):t()},os=()=>{const e=$e;if(e){if($e=null,document.getElementById(ht)?.remove(),Wt(),ma(),typeof e.onConfirm=="function")try{e.onConfirm()}catch(t){console.warn("[PrintPreview] onConfirm error:",t)}e.dispatch(e.base64,e.plainText,e.html||"")}},pn=e=>{if(!(!$e||typeof $e.rebuild!="function")){vt({paperSize:e});try{const t=$e.rebuild();t&&($e.base64=t.base64,$e.plainText=t.plainText,$e.previewLines=t.previewLines,$e.html=t.html||"")}catch(t){console.warn("[PrintPreview] Gagal rebuild payload:",t)}as(),ge(`Ukuran kertas diubah ke ${e}`)}},mn=()=>{qt(),typeof window.openPrinterSettingsModal=="function"&&(window.openPrinterSettingsModal(),ge("Atur printer, lalu tekan Cetak lagi untuk melihat preview terbaru."))},un=(e={})=>{if(!e.html)return!1;It(),pa={...e};const t=(e.paper||"a4")==="a4";document.getElementById(Rt)?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="${Rt}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-html-title" onclick="if(event.target===this) window.closeHtmlPrintPreview()">
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
    </div>`);const s=document.getElementById("utp-html-frame");if(s){const n=s.contentWindow.document;n.open(),n.write(e.html),n.close()}return es(),ts(()=>ns(),()=>Gt()),typeof window.pushModalHistory=="function"&&window.pushModalHistory("htmlPreview"),!0},Gt=(e=!1)=>{const t=()=>{document.getElementById(Rt)?.remove(),pa=null,Wt(),ma()};typeof window.requestCloseModal=="function"?window.requestCloseModal("htmlPreview",e,t):t()},ns=()=>{const e=document.getElementById("utp-html-frame");if(!(!e||!pa)){if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){try{const t=e.contentWindow.document,s=Array.from(t.querySelectorAll("style")).map(a=>a.outerHTML).join("");let n=document.getElementById("a4-print-section");n||(n=document.createElement("div"),n.id="a4-print-section",document.body.appendChild(n)),n.innerHTML=s+t.body.innerHTML,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500)}catch(t){console.warn("[PrintPreview] Native print error:",t)}Gt();return}try{e.contentWindow.focus(),e.contentWindow.print()}catch(t){console.warn("[PrintPreview] iframe print error:",t),ge("Gagal membuka dialog cetak. Coba lagi.","error")}}};typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",It,{once:!0}):It());window.openThermalPrintPreview=ss;window.closeThermalPrintPreview=qt;window.closeThermalPreviewModal=qt;window.confirmThermalPrint=os;window.setThermalPreviewPaper=pn;window.openPrinterSettingsFromPreview=mn;window.openHtmlPrintPreview=un;window.closeHtmlPrintPreview=Gt;window.closeHtmlPreviewModal=Gt;window.confirmHtmlPrint=ns;const C=e=>"Rp "+Math.round(Number(e||0)).toLocaleString("id-ID"),pt=e=>Math.round(Number(e||0)).toLocaleString("id-ID"),ua=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(3).replace(/\.?0+$/,"")},F=e=>e?String(e).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"").replace(/[\r\t]/g," ").replace(/[^\x20-\x7E\n]/g," "):"",q=(e,t)=>{if(!e)return[];const s=F(e).replace(/ +/g," ").trim();if(!s)return[];if(s.length<=t)return[s];const n=s.split(" "),a=[];let o="";for(const r of n)if(r)if(r.length>t){o&&(a.push(o),o="");for(let l=0;l<r.length;l+=t){const p=r.substring(l,l+t);p.length===t?a.push(p):o=p}}else(o?o.length+1+r.length:r.length)<=t?o=o?o+" "+r:r:(a.push(o),o=r);return o&&a.push(o),a},Ce=(e,t=!1)=>{const s=e?new Date(e):new Date,n=String(s.getDate()).padStart(2,"0"),a=String(s.getMonth()+1).padStart(2,"0"),o=t?s.getFullYear():String(s.getFullYear()).slice(-2),r=String(s.getHours()).padStart(2,"0"),l=String(s.getMinutes()).padStart(2,"0");return`${n}/${a}/${o} ${r}:${l}`},fa=(e,t,s,n=!1)=>{const a=F(String(e||"")).trimEnd(),o=F(String(t||"")).trim(),r=s-a.length-o.length;if(r>=0)return[a+" ".repeat(r)+o];if(n){const d=Math.max(0,s-o.length-1),m=a.substring(0,d).trimEnd(),u=Math.max(1,s-m.length-o.length);return[m+" ".repeat(u)+o]}const l=q(a,s),p=l[l.length-1]||"";if(p.length+1+o.length<=s){const d=s-p.length-o.length;return l[l.length-1]=p+" ".repeat(d)+o,l}else{const d=Math.max(0,s-o.length);return[...l," ".repeat(d)+o]}},et=e=>e?i(String(e)).replace(/^ +/gm,t=>"&nbsp;".repeat(t.length)):"";class Ye{constructor(t=32){this.cols=Number(t)||32,this.bytes=[],this.plainLines=[],this.previewLines=[],this.items=[],this._bold=!1,this._size="normal"}init(){return this.bytes.push(27,64),this}align(t="left"){const s=t==="center"?1:t==="right"?2:0;return this.bytes.push(27,97,s),this}bold(t=!0){return this.bytes.push(27,69,t?1:0),this._bold=!!t,this}size(t="normal"){return this._size=t||"normal",t==="title"?this.bytes.push(29,33,17):t==="tall"||t==="total"?this.bytes.push(29,33,1):t==="wide"?this.bytes.push(29,33,16):this.bytes.push(29,33,0),this}text(t){if(!t)return this;const s=F(t);for(let n=0;n<s.length;n++)this.bytes.push(s.charCodeAt(n));return this}line(t="",s="left"){this.align(s),this.text(t),this.bytes.push(10),this.plainLines.push(t);const n=F(t);return this.previewLines.push({t:n,a:s,b:this._bold,s:this._size}),this.items.push({type:"line",text:n,align:s,bold:this._bold,size:this._size}),this}centered(t=""){return q(t,this.cols).forEach(n=>this.line(n,"center")),this}twoColumn(t="",s="",n=!1,a=!1){n&&this.bold(!0);const o=fa(t,s,this.cols,a);o.forEach(p=>{this.align("left"),this.text(p),this.bytes.push(10),this.plainLines.push(p)});const r=F(String(t||"")),l=F(String(s||""));return this.previewLines.push({type:"two-column",left:r,right:l,t:o[0],a:"left",b:!!n,s:this._size}),this.items.push({type:"two-column",left:r,right:l,bold:!!n,size:this._size}),n&&this.bold(!1),this}itemRow(t){const s=t.variantName?` (${t.variantName}${t.colorCode?" "+t.colorCode:""})`:"",n=(t.name||"Barang")+s+(t.poTime?" [PO]":"");this.bold(!0),q(n,this.cols).forEach(d=>this.line(d,"left")),this.bold(!1);const o=t.effectivePrice||t.price||0,r=t.subtotal!==void 0?t.subtotal:parseFloat(t.qty||1)*o,l=`  ${ua(t.qty)} ${t.unit||"pcs"} x ${pt(o)}`,p=pt(r);return this.twoColumn(l,p,!1,!1),t.discount&&t.discount>0&&this.twoColumn("  (Pot. Diskon)",`-${pt(t.discount)}`,!1,!0),t.poTime&&this.line(`  * Estimasi PO: ${t.poTime}`,"left"),this}separator(t="-"){const s=t.repeat(this.cols);return this.align("left"),this.text(s),this.bytes.push(10),this.plainLines.push(s),this.previewLines.push({type:"separator",t:s,a:"left",b:!1,s:"normal"}),this.items.push({type:"separator",char:t}),this}doubleSeparator(){const t="=".repeat(this.cols);return this.align("left"),this.text(t),this.bytes.push(10),this.plainLines.push(t),this.previewLines.push({type:"double-separator",t,a:"left",b:!1,s:"normal"}),this.items.push({type:"double-separator"}),this}feed(t=3){this.bytes.push(27,100,Math.max(1,t));for(let s=0;s<t;s++)this.plainLines.push(""),this.previewLines.push({t:"",a:"left",b:!1,s:"normal"});return this.items.push({type:"feed",lines:t}),this}cut(){return this.bytes.push(29,86,65,3),this}openDrawer(){return this.bytes.push(27,112,0,25,250),this}barcode(t,s="CODE128",n=45){if(!t)return this;const a=F(String(t)).trim();if(!a)return this;if(this.align("center"),this.bytes.push(29,104,Math.max(30,Math.min(100,n))),this.bytes.push(29,119,2),this.bytes.push(29,72,0),s==="CODE39"){this.bytes.push(29,107,4);for(let o=0;o<a.length;o++)this.bytes.push(a.charCodeAt(o));this.bytes.push(0)}else{const o=[];for(let r=0;r<a.length;r++)o.push(a.charCodeAt(r));this.bytes.push(29,107,73,o.length+2,123,66,...o)}return this.plainLines.push(`[BARCODE: ${a}]`),this.previewLines.push({type:"barcode",code:a,t:a,a:"center",b:!1,s:"barcode",isBarcode:!0}),this.items.push({type:"barcode",code:a}),this}toBase64(){const t=new Uint8Array(this.bytes);let s="";const n=t.length,a=8192;for(let o=0;o<n;o+=a){const r=t.subarray(o,o+a);s+=String.fromCharCode.apply(null,r)}return btoa(s)}toPlainText(){return this.plainLines.join(`
`)}toHtml(){let t="";for(const s of this.items)if(s.type==="line"){const n=s.align==="center"?"utp-align-center":s.align==="right"?"utp-align-right":"utp-align-left",a=s.bold?"font-bold":"";let o="";s.size==="title"||s.size==="wide"?o="utp-title":(s.size==="tall"||s.size==="total")&&(o="utp-tall"),!s.text||!s.text.trim()?t+='<div class="utp-empty-line">&nbsp;</div>':t+=`<div class="utp-line ${n} ${a} ${o}">${et(s.text)}</div>`}else if(s.type==="two-column"){const n=s.bold?"font-bold":"";let a="";s.size==="title"||s.size==="wide"?a="utp-title":(s.size==="tall"||s.size==="total")&&(a="utp-tall"),t+=`<div class="utp-row ${n} ${a}"><div class="utp-col-left">${et(s.left)}</div><div class="utp-col-right">${et(s.right)}</div></div>`}else if(s.type==="separator")t+='<div class="utp-separator"></div>';else if(s.type==="double-separator")t+='<div class="utp-double-separator"></div>';else if(s.type==="barcode")t+=`
                <div class="utp-barcode-wrap">
                    <div class="utp-barcode-bars" aria-hidden="true"></div>
                    <div class="utp-barcode-code">*${i(s.code)}*</div>
                </div>`;else if(s.type==="feed"){const n=Math.max(1,s.lines||1)*6;t+=`<div style="height:${n}px;"></div>`}return t}}const Qe=(e,t="",s="",n={})=>{if(!n.skipPreview)return ss({base64:e,plainText:t,html:s,previewLines:n.previewLines,title:n.title,rebuild:n.rebuild,onConfirm:n.onConfirm,onCancel:n.onCancel,dispatch:(a,o,r)=>Ra(a,o,r)});if(typeof n.onConfirm=="function")try{n.onConfirm()}catch{}return Ra(e,t,s)},Ra=(e,t="",s="")=>{const n=/android/i.test(navigator.userAgent||"");if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function")try{return window.AndroidNativeApp.printRawBT(e),ge("Mencetak struk via RawBT..."),!0}catch(a){console.warn("[RawBT] AndroidNativeApp error, mencoba intent...",a)}if(n)try{ge("Membuka Printer RawBT...");const a=`intent:base64,${e}#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;end;`;return window.location.href=a,setTimeout(()=>{if(!document.hidden)try{window.location.href=`rawbt:base64,${e}`}catch{}},800),!0}catch(a){console.warn("[RawBT] Intent trigger failed:",a)}return ge("Mencetak struk kasir..."),Vt(s||t),!0},Vt=e=>{const t=Z(),n=He(t.paperSize)>=40,a=n?"80mm":"58mm",o=n?"72mm":"48mm",r=n?"11.5px":"10px",l=typeof e=="string"&&e.includes("<")&&e.includes(">");let p=e;l||(p=String(e||"").split(`
`).map(m=>{const u=m.trim();if(!u)return'<div class="utp-empty-line">&nbsp;</div>';if(/^[-]{8,}$/.test(u))return'<div class="utp-separator"></div>';if(/^[=]{8,}$/.test(u))return'<div class="utp-double-separator"></div>';if(/^\[BARCODE:\s*(.+)\]$/i.test(u)){const h=u.replace(/^\[BARCODE:\s*/i,"").replace(/\]$/,"").trim();return`
                <div class="utp-barcode-wrap">
                    <div class="utp-barcode-bars" aria-hidden="true"></div>
                    <div class="utp-barcode-code">*${i(h)}*</div>
                </div>`}const x=m.match(/^(\s{0,4}.+?)\s{3,}(.+)$/);return x&&x[1]&&x[2]?`<div class="utp-row"><div class="utp-col-left">${et(x[1])}</div><div class="utp-col-right">${et(x[2])}</div></div>`:`<div class="utp-line">${et(m)}</div>`}).join(""));try{let d=document.getElementById("thermal-print-iframe");d&&d.remove(),d=document.createElement("iframe"),d.id="thermal-print-iframe",d.style.position="fixed",d.style.right="0",d.style.bottom="0",d.style.width="0",d.style.height="0",d.style.border="0",d.style.visibility="hidden",d.style.zIndex="-9999",document.body.appendChild(d);const m=d.contentDocument||d.contentWindow.document;m.open(),m.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Cetak Struk Thermal</title>
  <style>
    @page {
      margin: 0mm !important;
      size: auto;
    }
    * {
      box-sizing: border-box !important;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    html, body {
      margin: 0 auto !important;
      padding: 0 !important;
      width: 100% !important;
      background: #ffffff;
      color: #000000;
      font-family: 'Consolas', 'Courier New', Courier, monospace;
      font-size: ${r};
      font-weight: 700;
      line-height: 1.28;
      overflow: hidden;
      -webkit-font-smoothing: antialiased;
      text-rendering: geometricPrecision;
      -webkit-text-stroke: 0.15px #000000;
    }
    .utp-thermal-wrap {
      width: ${o} !important;
      max-width: ${o} !important;
      box-sizing: border-box !important;
      padding: 0 ${n?"2mm":"1mm"} 4mm ${n?"2mm":"1mm"} !important;
      margin: 0 auto !important;
    }
    .utp-row {
      display: flex !important;
      justify-content: space-between !important;
      align-items: baseline !important;
      width: 100% !important;
      margin: 0.5px 0 !important;
      line-height: 1.28 !important;
      box-sizing: border-box !important;
      font-weight: 700 !important;
      color: #000000 !important;
    }
    .utp-col-left {
      text-align: left !important;
      word-break: break-word !important;
      flex: 1 1 auto !important;
      min-width: 0 !important;
      font-weight: 700 !important;
      color: #000000 !important;
    }
    .utp-col-right {
      text-align: right !important;
      white-space: nowrap !important;
      flex-shrink: 0 !important;
      margin-left: 4px !important;
      padding-right: ${n?"1.5mm":"1mm"} !important;
      font-variant-numeric: tabular-nums !important;
      font-weight: 800 !important;
      color: #000000 !important;
    }
    .utp-line {
      line-height: 1.28 !important;
      word-break: break-word !important;
      margin: 0.5px 0 !important;
      font-weight: 700 !important;
      color: #000000 !important;
    }
    .utp-align-center { text-align: center !important; }
    .utp-align-right { text-align: right !important; }
    .utp-align-left { text-align: left !important; }
    .font-bold { 
      font-weight: 900 !important; 
      -webkit-text-stroke: 0.25px #000000;
    }
    .utp-title { 
      font-size: 1.35em !important; 
      font-weight: 900 !important; 
      line-height: 1.15 !important; 
      letter-spacing: 0.5px !important;
      -webkit-text-stroke: 0.35px #000000;
    }
    .utp-tall { 
      font-size: 1.18em !important; 
      font-weight: 900 !important; 
      -webkit-text-stroke: 0.3px #000000;
    }
    .utp-empty-line { height: 0.6em !important; }
    .utp-separator {
      border-bottom: 1.5px dashed #000000 !important;
      margin: 3px 0 !important;
      width: 100% !important;
      height: 0 !important;
    }
    .utp-double-separator {
      border-bottom: 3px double #000000 !important;
      margin: 3px 0 !important;
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
      width: 85% !important;
      max-width: ${n?"230px":"160px"} !important;
      height: ${n?"38px":"32px"} !important;
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
      font-family: 'Consolas', 'Courier New', Courier, monospace !important;
      font-size: 10px !important;
      font-weight: 800 !important;
      letter-spacing: 2px !important;
      margin-top: 2px !important;
      text-align: center !important;
    }
  </style>
</head>
<body>
  <div class="utp-thermal-wrap">
    ${p}
  </div>
</body>
</html>`),m.close(),setTimeout(()=>{try{d.contentWindow.focus(),d.contentWindow.print()}catch(u){console.warn("[RawBT] Iframe print gagal, fallback ke direct print:",u),Ia(p,a,o)}},120);return}catch(d){console.warn("[RawBT] Gagal membuat isolated print iframe:",d)}Ia(p,a,o)},Ia=(e,t,s)=>{let n=f("thermal-print-section");n||(n=document.createElement("div"),n.id="thermal-print-section",document.body.appendChild(n));const a=t==="80mm";n.className=a?"paper-80mm":"paper-58mm",document.body.classList.remove("paper-58mm","paper-80mm"),document.body.classList.add(a?"paper-80mm":"paper-58mm");let o=document.getElementById("dynamic-print-page-style");o||(o=document.createElement("style"),o.id="dynamic-print-page-style",document.head.appendChild(o)),o.innerHTML="@media print { @page { margin: 0 !important; size: auto; } html, body { width: 100% !important; margin: 0 !important; } }",n.innerHTML=`
        <div class="utp-thermal-wrap" style="width:${s};max-width:${s};font-family:'Consolas','Courier New',Courier,monospace;font-size:${a?"11.5px":"10px"};font-weight:700;line-height:1.28;color:#000;background:#fff;padding:0 ${a?"2mm":"1mm"} 4mm ${a?"2mm":"1mm"};margin:0 auto;box-sizing:border-box;">
            ${e}
        </div>
    `,setTimeout(()=>{window.print()},120)},rs=()=>{if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.openRawBT=="function"){window.AndroidNativeApp.openRawBT();return}/android/i.test(navigator.userAgent||"")?(window.location.href="intent:#Intent;package=ru.a402d.rawbtprinter;end;",setTimeout(()=>{document.hidden||(window.location.href="https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter")},1200)):window.open("https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter","_blank")},Nt=(e,t=null)=>{const s=t||Z(),n=He(s.paperSize),a=n>=40,o=new Ye(n);o.init(),s.openCashDrawer&&e.payment?.method==="cash"&&o.openDrawer();const r=F(s.headerText||c.store?.name||"TOKO PUTRI").trim(),l=F(s.storeAddress!==void 0&&s.storeAddress!==""?s.storeAddress:c.store?.address||"").trim(),p=F(s.storePhone!==void 0&&s.storePhone!==""?s.storePhone:c.store?.wa||"").trim(),d=Math.floor(n/2);r.length<=d?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),q(r.toUpperCase(),n).forEach(K=>o.line(K,"center")),o.size("normal").bold(!1)),s.showAddress!==!1&&l&&q(l,n).forEach(K=>o.line(K,"center")),s.showPhone!==!1&&p&&o.line(`WA: ${p}`,"center");const m=e.payment?.taxNpwp||c.store?.taxNpwp;s.showNpwp!==!1&&m&&o.line(`NPWP: ${m}`,"center"),o.separator("-");const u=Ce(e.dateMs||Date.now(),a),x=`#${e.txId}`;o.twoColumn(`No : ${x}`,u,!1,!0);const h=F(e.cashierName||"Kasir").trim(),v=!!(e.customer?.isMember||e.customerType==="Member"),b=F(e.customer?.name||"Umum").trim(),S=v?`${b} (Member)`:b,L=`Ksr: ${h}`,H=`Plg: ${S}`;if(L.length+1+H.length<=n?o.twoColumn(L,H,!1,!1):(o.line(L,"left"),o.line(H,"left")),e.customer?.phone&&o.line(`HP : ${e.customer.phone}`,"left"),v&&e.customer?.memberId&&o.line(`ID : ${e.customer.memberId}`,"left"),o.separator("-"),(e.items||[]).forEach(K=>{o.itemRow(K)}),o.separator("-"),o.twoColumn("Subtotal",C(e.subtotal)),(e.globalDiscount||0)>0){const K=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";o.twoColumn(K,`- ${C(e.globalDiscount)}`)}(e.pointDiscount||0)>0&&o.twoColumn(`Diskon Poin (${e.pointsRedeemed||0} Poin)`,`- ${C(e.pointDiscount)}`),e.claimedReward&&e.claimedReward.name&&(o.separator("-"),o.bold(!0).line(`[KLAIM HADIAH: ${F(e.claimedReward.name)}]`,"left").bold(!1),o.twoColumn("Poin Reward Ditukar",`-${e.claimedReward.pointsCost||0} Poin`));const M=yt(e);if(M.hasPpn){const K=M.ppnAmount>0?`${M.isInclusive?"":"+ "}${C(M.ppnAmount)}`:"Rp 0";o.twoColumn(M.ppnLabel,K)}o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL",C(e.total)).size("normal").bold(!1),o.doubleSeparator();const O=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",A=O?"PUTRI PAYLATER":(e.payment?.method||"CASH").toUpperCase();if(o.twoColumn("Metode Bayar",A),e.payment?.method==="cash")o.twoColumn("Bayar Tunai",C(e.payment.paid)),o.bold(!0).twoColumn("Kembalian",C(e.payment.change)).bold(!1);else if(e.payment?.method==="transfer")e.payment?.bank&&o.twoColumn("Bank Penerima",e.payment.bank);else if(e.payment?.method==="qris")o.twoColumn("Kanal QRIS","QRIS Dinamis (Lunas)");else if(e.payment?.method==="tempo"){if(O){if(o.twoColumn("Limit Terpakai",C(e.payment?.paylaterUsed||e.paylaterUsed||e.total-(e.payment?.tempoDp??0))),e.payment?.paylaterMonths){const K=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${K} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${C(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${C(e.payment.paylaterServiceFee)}`)}if(o.twoColumn("Uang Muka (DP)",C(e.payment?.tempoDp??e.payment?.dp??0)),o.bold(!0).twoColumn(O?"Tagihan PayLater":"Sisa Piutang",C(e.payment.tempoBalance||0)).bold(!1),O&&e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${C(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),e.payment.tempoDueDate){const K=typeof e.payment.tempoDueDate=="number"?new Date(e.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e.payment.tempoDueDate;o.line(`Jatuh Tempo: ${K}`,"left")}}s.showPoints&&(e.pointsEarned>0||(e.pointsRedeemed||0)>0)&&(o.separator("-"),e.pointsEarned>0&&o.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),(e.pointsRedeemed||0)>0&&o.twoColumn("Poin Ditukar",`-${e.pointsRedeemed} Poin`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&o.twoColumn("Sisa Saldo Poin",`${e.finalMemberPoints} Poin`)),s.showBarcode&&(o.separator("-"),o.barcode(`POS-${e.txId}`,"CODE128",45),o.line(`*POS-${e.txId}*`,"center"),o.line("(SCAN DI KASIR)","center")),o.separator("-");const E=F(s.footerText||"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.").trim();E&&q(E,n).forEach(K=>o.line(K,"center"));const G=F(s.footerPolicyNote!==void 0?s.footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi.").trim();return G&&(o.line("","center"),q(G,n).forEach(K=>o.line(K,"center"))),o.feed(s.feedLines||3),s.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},Ot=(e,t=!1,s=null)=>{const n=s||Z(),a=He(n.paperSize),o=a>=40,r=new Ye(a);r.init();const l=F(n.headerText||c.store?.name||"TOKO PUTRI").trim(),p=F(c.store?.address||"").trim(),d=F(c.store?.wa||"").trim(),m=Math.floor(a/2);l.length<=m?(r.align("center").bold(!0).size("title").line(l.toUpperCase(),"center"),r.size("normal").bold(!1)):(r.align("center").bold(!0).size("tall"),q(l.toUpperCase(),a).forEach($=>r.line($,"center")),r.size("normal").bold(!1)),p&&q(p,a).forEach($=>r.line($,"center")),d&&r.line(`WA: ${d}`,"center"),r.separator("-");const u=o?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **";r.bold(!0).line(u,"center").bold(!1),r.separator("-");const x=Ce(e.startTime,o),h=Ce(e.endTime||Date.now(),o);r.twoColumn("Shift ID",`#${e.shiftNo||e.id||"-"}`,!1,!0),r.twoColumn("Kasir",(e.cashierName||"Kasir").substring(0,o?20:12),!1,!0),r.twoColumn("Mulai",x,!1,!0),r.twoColumn("Selesai",h,!1,!0),r.separator("-");const v=parseFloat(e.startingCash)||0,b=parseFloat(e.cashSales)||0,S=parseFloat(e.qrisSales)||0,L=parseFloat(e.bankSales||e.transferSales)||0,H=parseFloat(e.tempoSales)||0,M=parseFloat(e.cashIn)||0,O=parseFloat(e.cashOut)||0,A=parseFloat(e.totalSales)||b+S+L+H,E=e.txCount||0;r.bold(!0).line("RINGKASAN PENJUALAN","left").bold(!1),r.twoColumn("Modal Awal Laci",C(v)),r.twoColumn("Penjualan Tunai",C(b)),S>0&&r.twoColumn("Penjualan QRIS",C(S)),L>0&&r.twoColumn("Penjualan Transfer",C(L)),H>0&&r.twoColumn("Penjualan Tempo",C(H)),M>0&&r.twoColumn("Kas Masuk (In)",`+${C(M)}`),O>0&&r.twoColumn("Kas Keluar (Out)",`-${C(O)}`),r.separator("-"),r.twoColumn("Total Transaksi",`${E} Trx`),r.bold(!0).size("tall").twoColumn("TOTAL OMSET",C(A)).size("normal").bold(!1),r.doubleSeparator();const G=Math.max(0,v+b+M-O);if(t)r.bold(!0).line("STATUS KAS LACI SAAT INI","left").bold(!1),r.twoColumn("Uang Kas Seharusnya",C(G)),r.separator("-");else{const $=e.actualCash!==void 0?parseFloat(e.actualCash):G,g=$-G,w=g===0?"PAS (0)":g>0?`+${C(g)}`:`-${C(Math.abs(g))}`;r.bold(!0).line("REKONSILIASI KAS FISIK","left").bold(!1),r.twoColumn("Kas Diharapkan",C(G)),r.twoColumn("Kas Fisik Aktual",C($)),r.bold(!0).twoColumn("Selisih Kas",w,!0).bold(!1),e.closingNotes&&q(`Catatan: ${e.closingNotes}`,a).forEach(U=>r.line(U,"left")),r.separator("-"),r.line("Verifikasi & Tanda Tangan:","left"),r.feed(2);const T=Math.floor(a/2),D="( Kasir )",R=o?"( Supervisor/Owner )":"( Supervisor )",_=Math.max(0,Math.floor((T-D.length)/2)),k=Math.max(0,Math.floor((T-R.length)/2)),B=" ".repeat(_)+D+" ".repeat(Math.max(1,T-_-D.length))+" ".repeat(k)+R;r.line(B,"left"),r.separator("-")}const K=n.footerText||"Laporan Kasir Resmi Toko Putri";return q(K,a).forEach($=>r.line($,"center")),r.feed(n.feedLines||3),n.autoCut&&r.cut(),{base64:r.toBase64(),plainText:r.toPlainText(),previewLines:r.previewLines,html:r.toHtml()}},Et=(e,t=null)=>{const s=t||Z(),n=He(s.paperSize),a=n>=40,o=new Ye(n);o.init();const r=F(s.headerText||c.store?.name||"TOKO PUTRI").trim(),l=F(s.storeAddress!==void 0&&s.storeAddress!==""?s.storeAddress:c.store?.address||"").trim(),p=F(s.storePhone!==void 0&&s.storePhone!==""?s.storePhone:c.store?.wa||"").trim(),d=Math.floor(n/2);r.length<=d?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),q(r.toUpperCase(),n).forEach(E=>o.line(E,"center")),o.size("normal").bold(!1)),s.showAddress!==!1&&l&&q(l,n).forEach(E=>o.line(E,"center")),s.showPhone!==!1&&p&&o.line(`WA: ${p}`,"center");const m=e.payment?.taxNpwp||c.store?.taxNpwp;s.showNpwp!==!1&&m&&o.line(`NPWP: ${m}`,"center"),o.separator("-");const u=Ce(e.dateString||e.dateMs||Date.now(),a);o.twoColumn(`Order: #${e.orderId}`,u,!1,!0);const x=(e.customer?.name||"Guest").substring(0,a?18:11),h=e.customer?.deliveryMethod==="delivery"?"Kirim":"Ambil";o.twoColumn(`Plg  : ${x}`,`Tipe: ${h}`,!1,!0),e.customer?.phone&&o.line(`HP   : ${e.customer.phone}`,"left"),e.customer?.note&&q(`Cat  : ${e.customer.note}`,n).forEach(E=>o.line(E,"left")),o.separator("-");const v=Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[];v.length>0?v.forEach(E=>{o.itemRow(E)}):o.line("- Tidak ada rincian barang -","center"),o.separator("-");const b=yt(e),S=b.subtotal,L=b.shipping,H=b.grandTotal;if(o.twoColumn("Subtotal",C(S)),(e.customer?.deliveryMethod==="delivery"||e.deliveryMethod==="delivery")&&o.twoColumn("Ongkos Kirim",C(L)),b.productDiscount&&o.twoColumn("Potongan Harga",`- ${C(b.productDiscount)}`),b.shippingDiscount&&o.twoColumn("Potongan Ongkir",`- ${C(b.shippingDiscount)}`),b.pointDiscount>0&&o.twoColumn("Potongan Poin",`- ${C(b.pointDiscount)}`),b.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${C(b.paylaterAdminFee)}`),b.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${C(b.paylaterServiceFee)}`),b.hasPpn){const E=b.ppnAmount>0?`${b.isInclusive?"":"+ "}${C(b.ppnAmount)}`:"Rp 0";o.twoColumn(b.ppnLabel,E)}o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL",C(H)).size("normal").bold(!1),o.doubleSeparator();const M=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater";if(o.twoColumn("Metode Bayar",M?"PUTRI PAYLATER":(e.payment?.method||"Tunai").toUpperCase()),M){if(e.payment?.paylaterMonths){const E=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${E} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${C(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${C(e.payment.paylaterServiceFee)}`),e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${C(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`)}s.showPoints&&(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(o.separator("-"),e.pointsEarned>0&&o.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),e.finalMemberPoints!==void 0&&o.twoColumn("Saldo Poin",`${e.finalMemberPoints} Poin`)),s.showBarcode&&(o.separator("-"),o.barcode(`ORDER-${e.orderId}`,"CODE128",45),o.line(`*ORDER-${e.orderId}*`,"center"),o.line("(SCAN DI KASIR)","center")),o.separator("-");const O=F(s.footerText||"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.").trim();O&&q(O,n).forEach(E=>o.line(E,"center"));const A=F(s.footerPolicyNote!==void 0?s.footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi.").trim();return A&&(o.line("","center"),q(A,n).forEach(E=>o.line(E,"center"))),o.feed(s.feedLines||3),s.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},Bt=(e,t=null)=>{const s=t||Z(),n=He(s.paperSize),a=n>=40,o=new Ye(n);o.init();const r=F(s.headerText||c.store?.name||"TOKO PUTRI").trim(),l=F(s.storeAddress!==void 0&&s.storeAddress!==""?s.storeAddress:c.store?.address||"").trim(),p=F(s.storePhone!==void 0&&s.storePhone!==""?s.storePhone:c.store?.wa||"").trim(),d=Math.floor(n/2);r.length<=d?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),q(r.toUpperCase(),n).forEach(k=>o.line(k,"center")),o.size("normal").bold(!1)),s.showAddress!==!1&&l&&q(l,n).forEach(k=>o.line(k,"center")),s.showPhone!==!1&&p&&o.line(`WA: ${p}`,"center");const m=e.payment?.taxNpwp||c.store?.taxNpwp;s.showNpwp!==!1&&m&&o.line(`NPWP: ${m}`,"center"),o.separator("-");const u=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",x=e.payment?.paymentStatus==="lunas"||parseFloat(e.payment?.tempoBalance||0)<=0,h=a?u?x?"*** NOTA PUTRI PAYLATER (LUNAS) ***":"*** NOTA TAGIHAN PUTRI PAYLATER ***":x?"*** NOTA TEMPO (LUNAS) ***":"*** NOTA TAGIHAN TEMPO (PIUTANG) ***":u?x?"** PAYLATER (LUNAS) **":"** NOTA PUTRI PAYLATER **":x?"** NOTA TEMPO (LUNAS) **":"** NOTA TAGIHAN TEMPO **";o.bold(!0).line(h,"center").bold(!1),o.separator("-");const v=Ce(e.dateString||e.timestamp||Date.now(),a);o.twoColumn(`Order: #${e.orderId}`,v,!1,!0);const b=(e.customer?.name||"Pelanggan").substring(0,a?18:11);if(o.twoColumn(`Plg  : ${b}`,u?"Tipe: PayLater":"Tipe: Tempo",!1,!0),u&&e.payment?.paylaterMonths){const k=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${k} (${e.payment.paylaterMonths}x)`,!1,!0)}(e.customer?.phone||e.customer?.wa)&&o.line(`HP   : ${e.customer.wa||e.customer.phone}`,"left");let S=parseFloat(e.payment?.tempoBalance)||0,L=e.payment?.tempoPenaltyRate!==void 0?parseFloat(e.payment.tempoPenaltyRate):1,H=e.payment?.tempoPenaltyStopped===!0,M=0,O=e.payment?.tempoDueDate||0,A=0,E=0,G=!1,K=!1;const $=Date.now();O>0&&($>O?(A=Math.floor(($-O)/(24*60*60*1e3)),A>0&&(G=!0)):(E=Math.ceil((O-$)/(24*60*60*1e3)),E<=3&&(K=!0))),H?M=parseFloat(e.payment?.tempoFixedPenalty)||0:G&&(M=L/100*S*A);let g=S+M;const w=e.payment?.installments||[],T=w.reduce((k,B)=>k+(parseFloat(B.amount)||0),0),D=e.payment?.grandTotal||S+T;if(O>0){const k=Ce(O,a);let B="";x?B="LUNAS":G?B=`Telat ${A} Hari`:K?B=`H-${E<=0?0:E}`:B=`Sisa ${E} Hari`,o.twoColumn(`J.Tmp: ${k}`,B,!1,!0)}o.separator("-"),(e.items||[]).forEach(k=>{o.itemRow(k)}),o.separator("-"),o.twoColumn("Total Transaksi",C(D)),u&&(e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${C(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Penanganan",`+ ${C(e.payment.paylaterServiceFee)}`)),w.length>0&&(o.separator("-"),o.bold(!0).line("HISTORI PEMBAYARAN CICILAN:","left").bold(!1),w.forEach((k,B)=>{const U=Ce(k.date,a);o.twoColumn(`${B+1}. ${U}`,C(k.amount))}),o.twoColumn("Total Terbayar",C(T),!0)),o.twoColumn("Sisa Pokok",C(S)),u&&e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${C(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),M>0&&o.twoColumn(`Denda (${A} Hari)`,`+ ${C(M)}`),o.doubleSeparator(),o.bold(!0).size("tall").twoColumn(u?"TAGIHAN PAYLATER":"SISA TAGIHAN",C(x?0:g)).size("normal").bold(!1),o.doubleSeparator(),!x&&c.banks&&c.banks.length>0&&(o.line("REKENING TRANSFER RESMI:","left"),(c.banks||[]).forEach(k=>{o.line(`${k.bank||k.bankName||"Bank"}: ${k.number||k.bankAccount||"-"}`,"left"),o.line(`a/n ${k.name||k.bankOwner||"-"}`,"left")}),o.separator("-")),s.showBarcode&&(o.separator("-"),o.barcode(u?`PAYLATER-${e.orderId}`:`TEMPO-${e.orderId}`,"CODE128",45),o.line(u?`*PAYLATER-${e.orderId}*`:`*TEMPO-${e.orderId}*`,"center"),o.line(u?"(PUTRI PAYLATER RESMI)":"(NOTA TEMPO RESMI)","center")),o.separator("-");const R=F(s.footerText||"Terima kasih atas kerja sama dan kepercayaan Anda.").trim();R&&q(R,n).forEach(k=>o.line(k,"center"));const _=F(s.footerPolicyNote!==void 0?s.footerPolicyNote:"").trim();return _&&(o.line("","center"),q(_,n).forEach(k=>o.line(k,"center"))),o.feed(s.feedLines||3),s.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},Ht=(e=null)=>{const t=e||Z(),s=He(t.paperSize),n=s>=40,a=new Ye(s);a.init();const o=F(t.headerText||c.store?.name||"TOKO PUTRI").trim(),r=F(t.storeAddress!==void 0&&t.storeAddress!==""?t.storeAddress:c.store?.address||"").trim(),l=F(t.storePhone!==void 0&&t.storePhone!==""?t.storePhone:c.store?.wa||"").trim(),p=Math.floor(s/2);o.length<=p?(a.align("center").bold(!0).size("title").line(o.toUpperCase(),"center"),a.size("normal").bold(!1)):(a.align("center").bold(!0).size("tall"),q(o.toUpperCase(),s).forEach(h=>a.line(h,"center")),a.size("normal").bold(!1)),t.showAddress!==!1&&r&&q(r,s).forEach(h=>a.line(h,"center")),t.showPhone!==!1&&l&&a.line(`WA: ${l}`,"center"),a.separator("-");const d=n?`*** UJI COBA CETAK STRUK THERMAL ${s} KOLOM ***`:`** UJI CETAK THERMAL ${s} KOLOM **`;a.bold(!0).line(d,"center").bold(!1),a.separator("-"),a.line("MISTAR KALIBRASI TEPI KERTAS:","left");let m="";for(let h=1;h<=s;h++)m+=String(h%10);a.line(m,"left");let u="";for(let h=1;h<=s;h++)h===s||h%10===0?u+="|":h%5===0?u+=":":u+=".";a.line(u,"left"),a.line(`(Pastikan angka ${s%10} paling kanan tercetak utuh)`,"left"),a.separator("-");const x=Ce(Date.now(),n);if(a.line(`Waktu   : ${x}`,"left"),a.line(`Format  : Thermal ${s} Kolom (${t.paperSize})`,"left"),a.line("Driver  : RAWBT FREE PRINT SERVICE","left"),a.line("Status  : 100% PRESISI & SIAP PAKAI","left"),a.separator("-"),a.bold(!0).twoColumn("ITEM SIMULASI","HARGA").bold(!1),a.itemRow({name:"Kertas Thermal Kasir Roll",qty:2,unit:"roll",price:15e3,subtotal:3e4}),a.itemRow({name:"Semen Portland Komposit 40kg",qty:1,unit:"sak",price:65e3,subtotal:65e3}),a.separator("-"),a.twoColumn("Subtotal",C(95e3)),a.twoColumn("Diskon Uji Coba",`- ${C(5e3)}`),a.doubleSeparator(),a.bold(!0).size("tall").twoColumn("TOTAL TES",C(9e4)).size("normal").bold(!1),a.doubleSeparator(),a.twoColumn("Bayar Tunai",C(1e5)),a.bold(!0).twoColumn("Kembalian",C(1e4)).bold(!1),t.showPoints&&(a.separator("-"),a.twoColumn("Simulasi Poin Member","+10 Poin")),t.showBarcode){a.separator("-");const h=`TEST-${Date.now().toString().slice(-6)}`;a.barcode(h,"CODE128",45),a.line(`*${h}*`,"center"),a.line("(BARCODE TEST BERHASIL)","center")}return a.separator("-"),q(t.footerText||"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.",s).forEach(h=>a.line(h,"center")),t.footerPolicyNote&&(a.line("","center"),q(t.footerPolicyNote,s).forEach(h=>a.line(h,"center"))),q("Hasil cetak telah terkalibrasi presisi.",s).forEach(h=>a.line(h,"center")),a.feed(t.feedLines||3),t.autoCut&&a.cut(),{base64:a.toBase64(),plainText:a.toPlainText(),previewLines:a.previewLines,html:a.toHtml()}},kt=e=>{const t=document.getElementById(e);return!!t&&!t.classList.contains("hidden")},is=e=>{if(!e){ge("Data transaksi kasir tidak ditemukan.","warning");return}const t=Z(),s=Nt(e,t),n=kt("pos-receipt-fallback-modal");Qe(s.base64,s.plainText,s.html,{skipPreview:n,previewLines:s.previewLines,title:`Struk Kasir #${e.txId||""}`,rebuild:()=>Nt(e,Z()),onConfirm:()=>{document.getElementById("pos-success-modal")?.remove(),document.getElementById("pos-receipt-fallback-modal")?.remove()}})},ls=(e,t=!1)=>{if(!e){ge("Data shift tidak ditemukan.","warning");return}const s=Z(),n=Ot(e,t,s),a=kt("pos-shift-receipt-modal");Qe(n.base64,n.plainText,n.html,{skipPreview:a,previewLines:n.previewLines,title:`${t?"Ringkasan Shift (X-Report)":"Rekap Tutup Shift (Z-Report)"} #${e.shiftNo||e.id||""}`,rebuild:()=>Ot(e,t,Z()),onConfirm:()=>document.getElementById("pos-shift-receipt-modal")?.remove()})},ds=async(e=null)=>{const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||Xe,s=String(t||"").replace(/^#/,"").trim(),n=p=>{if(!p)return!1;const d=String(p.orderId||"").replace(/^#/,"").trim();return s?d===s||d.endsWith(s)||s.endsWith(d):!0};let a=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(a=e),(!a||!a.items||a.items.length===0)&&n(window.currentCustomerOrder)&&(a=window.currentCustomerOrder),(!a||!a.items||a.items.length===0)&&n(window.lastPrintedOrder)&&(a=window.lastPrintedOrder),(!a||!a.items||a.items.length===0)&&(tt||[]).length>0){const p=tt.find(n);p&&Array.isArray(p.items)&&p.items.length>0&&(a=p)}if((!a||!a.items||a.items.length===0)&&Array.isArray(ae)){const p=ae.find(n);p&&Array.isArray(p.items)&&p.items.length>0&&(a=p)}if((!a||!a.items||a.items.length===0)&&s)try{const p=typeof de<"u"&&de?de:window.db;if(p){let d=await p.collection("freshmart_orders").doc(s).get();if(!d.exists&&!s.startsWith("ORD-")){const m=await p.collection("freshmart_orders").doc("ORD-"+s).get();m.exists&&(d=m)}if(d&&d.exists&&(a=d.data(),a.orderId=a.orderId||d.id,window.currentCustomerOrder=a,window.lastPrintedOrder=a,Array.isArray(ae))){const m=ae.findIndex(n);if(m!==-1){ae[m].items=a.items||[],ae[m].payment=a.payment||{},ae[m].customer=a.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(ae))}catch{}}}}}catch(p){console.warn("[RawBT] Gagal fetch order detail from Firestore:",p)}if(!a&&Array.isArray(ae)&&(a=ae.find(n)),!a){ge("Data pesanan tidak ditemukan.","warning");return}window.lastPrintedOrder=a;const o=Z(),r=Et(a,o),l=kt("receipt-preview-modal");Qe(r.base64,r.plainText,r.html,{skipPreview:l,previewLines:r.previewLines,title:`Struk Pesanan #${a.orderId||""}`,rebuild:()=>Et(a,Z()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&l&&window.closeReceiptPreviewModal()}})},cs=(e=null)=>{const t=e||Xe;let n=(window.cachedPiutangOrders||[]).find(l=>String(l.orderId)===String(t))||(tt||[]).find(l=>String(l.orderId)===String(t));if(!n&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(t)&&(n=window.lastPrintedOrder),!n){if(typeof window.previewTempoReceipt=="function"&&t&&!window.__tempoReceiptFetching){window.__tempoReceiptFetching=!0,Promise.resolve(window.previewTempoReceipt(t)).finally(()=>{window.__tempoReceiptFetching=!1});return}ge("Data nota piutang tidak ditemukan.","warning");return}const a=Z(),o=Bt(n,a),r=kt("receipt-preview-modal");Qe(o.base64,o.plainText,o.html,{skipPreview:r,previewLines:o.previewLines,title:`Nota Tagihan Tempo #${n.orderId||""}`,rebuild:()=>Bt(n,Z()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&r&&window.closeReceiptPreviewModal()}})},ps=()=>{const e=Z(),t=Ht(e);Qe(t.base64,t.plainText,t.html,{previewLines:t.previewLines,title:"Uji Coba Cetak Printer",rebuild:()=>Ht(Z())})},Ft=(e,t=null)=>{const s=t||Z(),n=He(s.paperSize),a=n>=40,o=new Ye(n);o.init();const r=F(s.headerText||c.store?.name||"TOKO PUTRI").trim(),l=F(s.storeAddress!==void 0&&s.storeAddress!==""?s.storeAddress:c.store?.address||"").trim(),p=F(s.storePhone!==void 0&&s.storePhone!==""?s.storePhone:c.store?.wa||"").trim(),d=Math.floor(n/2);r.length<=d?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),q(r.toUpperCase(),n).forEach(b=>o.line(b,"center")),o.size("normal").bold(!1)),s.showAddress!==!1&&l&&q(l,n).forEach(b=>o.line(b,"center")),s.showPhone!==!1&&p&&o.line(`WA: ${p}`,"center");const m=c.store?.taxNpwp;s.showNpwp!==!1&&m&&o.line(`NPWP: ${m}`,"center"),o.separator("-");const u=a?"*** NOTA RETUR PENJUALAN (RMA) ***":"** NOTA RETUR PENJUALAN **";o.bold(!0).line(u,"center").bold(!1),o.separator("-");const x=Ce(e.createdAt||Date.now(),a);o.twoColumn(`No Retur: #${e.id}`,x,!1,!0),o.twoColumn(`No Nota : #${e.orderId||"-"}`,`Ksr: ${(e.cashierName||"Kasir").substring(0,a?14:8)}`,!1,!0);const h=(e.customerName||"Pelanggan Umum").substring(0,a?22:14);o.twoColumn(`Plg     : ${h}`,"Status: Selesai",!1,!0),e.customerPhone&&o.line(`HP      : ${e.customerPhone}`,"left"),o.separator("-"),(e.items||[]).forEach(b=>{const S=b.variantName?` (${b.variantName})`:"",L=(b.name||"Barang")+S;o.bold(!0),q(L,n).forEach(A=>o.line(A,"left")),o.bold(!1);const H=`  ${ua(b.qty)} ${b.unit||"pcs"} x ${pt(b.soldPrice)}`,M=pt(b.subtotalRefund);o.twoColumn(H,M,!1,!1),b.reason&&o.line(`  * Alasan: ${b.reason}`,"left");const O=b.condition==="bad"?"Cacat/Rusak (Karantina)":"Kondisi Baik (Rak Toko)";o.line(`  * ${O}`,"left")}),o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL RETUR",C(e.totalRefund)).size("normal").bold(!1),o.doubleSeparator();let v="REFUND TUNAI";return e.refundMethod==="credit"?v="SALDO KREDIT TOKO":e.refundMethod==="exchange"?v="TUKAR BARANG LAIN":e.refundMethod&&(v=String(e.refundMethod).toUpperCase()),o.twoColumn("Kompensasi",v),e.notes&&(o.separator("-"),q(`Catatan: ${e.notes}`,n).forEach(b=>o.line(b,"left"))),s.showBarcode&&(o.separator("-"),o.barcode(`RMA-${e.id}`,"CODE128",45),o.line(`*RMA-${e.id}*`,"center"),o.line("(BUKTI RETUR RESMI)","center")),o.separator("-"),o.line("Barang retur telah diverifikasi oleh toko.","center"),o.line("Terima kasih atas kerja samanya.","center"),o.feed(s.feedLines||3),s.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},ms=(e=null)=>{const t=c.salesReturns||[];let s=null;if(typeof e=="object"&&e!==null?s=e:e&&(s=t.find(r=>String(r.id)===String(e))),!s){ge("Data nota retur tidak ditemukan.","warning");return}const n=Z(),a=Ft(s,n),o=kt("receipt-preview-modal");Qe(a.base64,a.plainText,a.html,{skipPreview:o,previewLines:a.previewLines,title:`Nota Retur Penjualan #${s.id}`,rebuild:()=>Ft(s,Z()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&o&&window.closeReceiptPreviewModal()}})};window.cleanLineAscii=F;window.wrapWords=q;window.formatTwoColumn=fa;window.formatCompactDate=Ce;window.EscPosBuilder=Ye;window.sendToRawBT=Qe;window.renderThermalDOMAndPrint=Vt;window.openRawBTApp=rs;window.buildPOSReceiptPayload=Nt;window.buildShiftReceiptPayload=Ot;window.buildOrderReceiptPayload=Et;window.buildTempoReceiptPayload=Bt;window.buildTestReceiptPayload=Ht;window.buildSalesReturnReceiptPayload=Ft;window.printPOSReceiptDirect=is;window.printShiftSettlementDirect=ls;window.printCustomerReceiptDirect=ds;window.printTempoReceiptDirect=cs;window.printSalesReturnReceiptDirect=ms;window.executeRawBTTestPrint=ps;const zr=Object.freeze(Object.defineProperty({__proto__:null,EscPosBuilder:Ye,buildOrderReceiptPayload:Et,buildPOSReceiptPayload:Nt,buildSalesReturnReceiptPayload:Ft,buildShiftReceiptPayload:Ot,buildTempoReceiptPayload:Bt,buildTestReceiptPayload:Ht,cleanLineAscii:F,escReceipt:et,executeRawBTTestPrint:ps,fRp:C,fRpNum:pt,formatCompactDate:Ce,formatQty:ua,formatTwoColumn:fa,openRawBTApp:rs,printCustomerReceiptDirect:ds,printPOSReceiptDirect:is,printSalesReturnReceiptDirect:ms,printShiftSettlementDirect:ls,printTempoReceiptDirect:cs,renderThermalDOMAndPrint:Vt,sendToRawBT:Qe,wrapWords:q},Symbol.toStringTag,{value:"Module"})),ba=async(e=null)=>{if(e&&typeof Sa=="function"&&typeof e=="string"&&Sa(e),typeof window.printCustomerReceiptDirect=="function")return window.printCustomerReceiptDirect(e);const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||Xe,s=String(t||"").replace(/^#/,"").trim(),n=T=>{if(!T)return!1;const D=String(T.orderId||"").replace(/^#/,"").trim();return s?D===s||D.endsWith(s)||s.endsWith(D):!0};let a=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(a=e),(!a||!a.items||a.items.length===0)&&n(window.currentCustomerOrder)&&(a=window.currentCustomerOrder),(!a||!a.items||a.items.length===0)&&n(window.lastPrintedOrder)&&(a=window.lastPrintedOrder),(!a||!a.items||a.items.length===0)&&(tt||[]).length>0){const T=tt.find(n);T&&Array.isArray(T.items)&&T.items.length>0&&(a=T)}if((!a||!a.items||a.items.length===0)&&Array.isArray(ae)){const T=ae.find(n);T&&Array.isArray(T.items)&&T.items.length>0&&(a=T)}if((!a||!a.items||a.items.length===0)&&s)try{const T=typeof de<"u"&&de?de:window.db;if(T){let D=await T.collection("freshmart_orders").doc(s).get();if(!D.exists&&!s.startsWith("ORD-")){const R=await T.collection("freshmart_orders").doc("ORD-"+s).get();R.exists&&(D=R)}if(D&&D.exists&&(a=D.data(),a.orderId=a.orderId||D.id,window.currentCustomerOrder=a,window.lastPrintedOrder=a,Array.isArray(ae))){const R=ae.findIndex(n);if(R!==-1){ae[R].items=a.items||[],ae[R].payment=a.payment||{},ae[R].customer=a.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(ae))}catch{}}}}}catch(T){console.warn("[Receipt] Gagal fetch order detail from Firestore:",T)}if(!a&&Array.isArray(ae)&&(a=ae.find(n)),!a)return;window.lastPrintedOrder=a;const o=typeof Z=="function"?Z():{paperSize:"58mm",showPoints:!0,showBarcode:!0},l=He(o.paperSize)>=40,p=Ce(a.dateString||a.date||Date.now(),l),d=o.headerText||c.store.name||"Toko Putri",m=o.storeAddress!==void 0&&o.storeAddress!==""?o.storeAddress:c.store.address||"",u=o.storePhone!==void 0&&o.storePhone!==""?o.storePhone:c.store.wa||"",x=(T,D)=>`<div class="utp-row"><div class="utp-col-left">${i(T)}</div><div class="utp-col-right">${i(D)}</div></div>`,h=Array.isArray(a.items)?a.items:Array.isArray(a.cart)?a.cart:[],v=yt(a),b=v.subtotal,S=v.shipping,L=v.grandTotal,H=String(a.payment?.method||a.method||"Tunai").toUpperCase(),M=a.customer?.name||a.customerName||"Guest",O=a.customer?.deliveryMethod==="delivery"||a.deliveryMethod==="delivery";let A=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${i(d)}</div>`;o.showAddress!==!1&&m&&(A+=`<div class="text-center" style="font-size:10px;color:#475569;margin-bottom:2px;">${i(m)}</div>`),o.showPhone!==!1&&u&&(A+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${i(u)}</div>`);const E=a.payment?.taxNpwp||c.store?.taxNpwp;if(o.showNpwp!==!1&&E&&(A+=`<div class="text-center" style="font-size:10px;font-family:monospace;margin-bottom:4px;">NPWP: ${i(E)}</div>`),A+='<div class="utp-separator"></div>',A+=x(`Order: #${a.orderId}`,p),A+=x(`Plg  : ${i(M).substring(0,l?18:10)}`,`Tipe: ${O?"Kirim":"Ambil"}`),(a.customer?.phone||a.customerPhone)&&(A+=`<div class="utp-line">HP   : ${i(a.customer?.phone||a.customerPhone)}</div>`),A+='<div class="utp-separator"></div>',a.customer?.note&&(A+=`<div style="white-space:pre-wrap;word-break:break-word;">Cat: ${i(a.customer.note)}</div><div class="utp-separator"></div>`),h.length>0?h.forEach(T=>{let D=T.variantName?` (${i(T.variantName)}${T.colorCode?" "+i(T.colorCode):""})`:"";const R=i(T.name||"Barang")+D+(T.poTime?" [PO]":""),_=T.effectivePrice||T.price||0,k=`  ${parseFloat(T.qty||1)} ${i(T.unit||"pcs")} x ${Math.round(_).toLocaleString("id-ID")}`,B=(parseFloat(T.qty||1)*_).toLocaleString("id-ID");A+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;">${R}</div>${x(k,B)}`,T.poTime&&(A+=`<div style="font-size:10px;font-style:italic;color:#4b5563;">  * Estimasi PO: ${i(T.poTime)}</div>`)}):A+='<div style="font-style:italic;color:#64748b;text-align:center;padding:4px 0;">- Tidak ada rincian barang -</div>',A+=`<div class="utp-separator"></div>${x("Subtotal",b.toLocaleString("id-ID"))}`,O&&(A+=x("Ongkir",S.toLocaleString("id-ID"))),v.shippingDiscount&&(A+=x("Pot.Ongkir",`-${v.shippingDiscount.toLocaleString("id-ID")}`)),v.productDiscount&&(A+=x("Pot.Harga",`-${v.productDiscount.toLocaleString("id-ID")}`)),v.pointDiscount>0&&(A+=x("Pot.Poin",`-${v.pointDiscount.toLocaleString("id-ID")}`)),v.paylaterAdminFee>0&&(A+=x("Biaya Admin",`+${v.paylaterAdminFee.toLocaleString("id-ID")}`)),v.paylaterServiceFee>0&&(A+=x("Biaya Layanan",`+${v.paylaterServiceFee.toLocaleString("id-ID")}`)),v.hasPpn){const T=v.ppnAmount>0?`${v.isInclusive?"":"+"}${v.ppnAmount.toLocaleString("id-ID")}`:"0";A+=x(v.ppnLabel,T)}if(A+=`<div class="utp-double-separator"></div><div class="font-bold text-[12px]">${x("TOTAL","Rp "+L.toLocaleString("id-ID"))}</div>${x("Metode Bayar",H)}`,a.payment?.method==="tempo"||a.payment?.isPaylater||a.payment?.subMethod==="paylater"){if(!!(a.payment?.isPaylater||a.payment?.subMethod==="paylater")){if(a.payment?.paylaterMonths){const D=a.payment?.paylaterTenor==="2m"?"2 Bulan":a.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari";A+=x("Tenor Cicilan",`${D} (${a.payment.paylaterMonths}x)`)}a.payment?.paylaterMonthlyInstallment&&(A+=`<div class="font-bold">${x("Angsuran/Bln","Rp "+Math.round(a.payment.paylaterMonthlyInstallment).toLocaleString("id-ID"))}</div>`),a.payment?.tempoDp>0&&(A+=x("Uang Muka (DP)","Rp "+Math.round(a.payment.tempoDp).toLocaleString("id-ID"))),A+=`<div class="font-bold">${x("Tagihan PayLater","Rp "+Math.round(a.payment?.tempoBalance||L).toLocaleString("id-ID"))}</div>`}else a.payment?.tempoDp>0&&(A+=x("Uang Muka (DP)","Rp "+Math.round(a.payment.tempoDp).toLocaleString("id-ID"))),A+=`<div class="font-bold">${x("Sisa Piutang","Rp "+Math.round(a.payment?.tempoBalance||L).toLocaleString("id-ID"))}</div>`;if(a.payment?.tempoDueDate){const D=typeof a.payment.tempoDueDate=="number"?new Date(a.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):a.payment.tempoDueDate;A+=x("Jatuh Tempo",D)}}o.showPoints&&(a.pointsEarned>0||a.finalMemberPoints!==void 0)&&(A+='<div class="utp-separator"></div>',a.pointsEarned>0&&(A+=x("Poin Didapat","+"+a.pointsEarned+" Poin")),a.finalMemberPoints!==void 0&&a.finalMemberPoints!==null&&(A+=`<div class="font-bold">${x("Saldo Poin",String(a.finalMemberPoints)+" Poin")}</div>`),a.claimedReward&&(A+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;margin-top:2px;">HADIAH: ${i(a.claimedReward.name)}</div>`)),h.some(T=>T&&T.poTime&&T.poTime!=="")&&(A+='<div class="utp-separator"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),o.showBarcode&&(A+=`<div class="utp-separator"></div>
        <div style="text-align:center;margin:6px 0 3px;">
            <div style="width:75%;max-width:200px;height:32px;margin:0 auto;background:repeating-linear-gradient(90deg,#000 0px,#000 2px,transparent 2px,transparent 4px,#000 4px,#000 7px,transparent 7px,transparent 9px,#000 9px,#000 11px,transparent 11px,transparent 13px,#000 13px,#000 16px,transparent 16px,transparent 18px,#000 18px,#000 19px,transparent 19px,transparent 22px);border-top:1px solid #000;border-bottom:1px solid #000;"></div>
            <div style="font-family:monospace;letter-spacing:2px;font-size:10.5px;font-weight:bold;margin-top:3px;">*ORDER-${i(a.orderId)}*</div>
            <div style="font-size:8px;color:#666;">SCAN DI KASIR</div>
        </div>`),A+=`<div class="utp-separator"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${i(o.footerText||"Terima Kasih Atas Kunjungan Anda")}</div>`,o.footerPolicyNote&&(A+=`<div class="text-center my-1" style="font-size:9px;line-height:1.25;color:#475569;">${i(o.footerPolicyNote)}</div>`),A+='<div class="utp-separator"></div><div style="height:15px;"></div>',qa("receipt-paper-content",A);const K=f("receipt-paper-content");K&&(K.style.width=l?"340px":"260px");const $=f("receipt-preview-modal-box");$&&($.classList.remove("max-w-[320px]","max-w-[400px]"),$.classList.add(l?"max-w-[400px]":"max-w-[320px]"));const g=f("receipt-preview-modal"),w=f("receipt-preview-modal-box");g&&g.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),_t(g,w)},fn=(e=!1)=>{const t=f("receipt-preview-modal"),s=f("receipt-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{at(t,s)}):at(t,s))},bn=()=>{const e=Xe||(window.lastPrintedOrder?window.lastPrintedOrder.orderId:null);if(typeof window.printCustomerReceiptDirect=="function"){window.printCustomerReceiptDirect(e);return}if(!((tt||[]).find(n=>n.orderId===Xe)||(Array.isArray(ae)?ae.find(n=>n.orderId===Xe):null)||window.lastPrintedOrder))return;const s=f("receipt-paper-content")?f("receipt-paper-content").innerHTML:"";Vt(s)};window.openReceiptPreview=ba;window.openCustomerReceiptPreview=e=>{ba(e)};window.closeReceiptPreviewModal=fn;window.executePrintReceipt=bn;window.checkProPrint=()=>{ba()};const se={OWNER:"owner",ADMIN:"admin",CASHIER:"cashier",STAFF:"staff"},xn=[{key:"owner",label:"Owner / Direktur Utama",defaultRole:"owner"},{key:"head_store",label:"Kepala Toko / Manager",defaultRole:"admin"},{key:"admin_ops",label:"Admin Operasional & Inventori",defaultRole:"admin"},{key:"cashier_head",label:"Kasir Utama",defaultRole:"cashier"},{key:"cashier",label:"Kasir POS",defaultRole:"cashier"},{key:"warehouse_head",label:"Kepala Gudang & Logistik",defaultRole:"staff"},{key:"warehouse_staff",label:"Staf Gudang & Penataan Rak",defaultRole:"staff"},{key:"driver",label:"Driver / Kurir Pengiriman",defaultRole:"staff"},{key:"store_helper",label:"Helper / Pramuniaga Toko",defaultRole:"staff"}],wn=[{key:"orders",label:"Pesanan Online",desc:"Proses status pesanan, update resi pengiriman & konfirmasi bayar",group:"operasional",icon:"fa-receipt"},{key:"products",label:"Katalog Produk & Stok",desc:"Tambah/edit produk, atur varian, dan perbarui stok barang",group:"operasional",icon:"fa-box-open"},{key:"suppliers",label:"Supplier & Rekanan",desc:"Kelola master data supplier, kontak kulakan, dan asal produk",group:"operasional",icon:"fa-truck-field"},{key:"purchases",label:"Order Kulakan (PO)",desc:"Buat PO pembelian grosir, terima restock, & kelola hutang rekanan",group:"operasional",icon:"fa-cart-flatbed"},{key:"piutang",label:"Piutang Tempo & Cicilan",desc:"Kelola nota piutang pelanggan, denda keterlambatan, & cicilan",group:"operasional",icon:"fa-clock-rotate-left"},{key:"customers",label:"Database Pelanggan",desc:"Lihat daftar member, atur limit kredit PayLater, & mutasi poin",group:"operasional",icon:"fa-address-book"},{key:"pos",label:"Kasir POS",desc:"Akses antarmuka penjualan kasir toko fisik dan shift kasir",group:"operasional",icon:"fa-cash-register"},{key:"expenses",label:"Biaya Operasional Toko",desc:"Buku kas pengeluaran operasional toko harian & nota kas",group:"operasional",icon:"fa-money-bill-transfer"},{key:"stock_opname",label:"Stock Opname (Audit Fisik)",desc:"Audit stok fisik rak/gudang, rekonsiliasi selisih & terapkan penyesuaian stok",group:"operasional",icon:"fa-clipboard-check"},{key:"returns",label:"Retur Barang & RMA",desc:"Kelola retur penjualan pelanggan, klaim cacat supplier & stok karantina",group:"operasional",icon:"fa-right-left"},{key:"categories",label:"Kategori Produk",desc:"Tambah dan susun kategori etalase produk",group:"konten",icon:"fa-tags"},{key:"brands",label:"Merek Produk",desc:"Kelola daftar brand dagang barang",group:"konten",icon:"fa-copyright"},{key:"colors",label:"Database Produk Bersama",desc:"Pustaka master produk, multi-varian & swatch warna siap impor",group:"konten",icon:"fa-boxes-stacked"},{key:"vouchers",label:"Voucher & Promo",desc:"Buat kode voucher diskon dan promo belanja",group:"konten",icon:"fa-ticket-simple"},{key:"banners",label:"Banner Promosi",desc:"Kelola gambar dan video slider beranda toko",group:"konten",icon:"fa-images"},{key:"rewards",label:"Program Hadiah Poin",desc:"Kelola katalog hadiah penukaran poin member",group:"konten",icon:"fa-gift"},{key:"reviews",label:"Ulasan Pelanggan",desc:"Moderasi ulasan dan testimoni produk pembeli",group:"konten",icon:"fa-star"},{key:"faqs",label:"Tanya Jawab / Q&A",desc:"Kelola jawaban pertanyaan umum pembeli",group:"konten",icon:"fa-circle-question"},{key:"changelog",label:"Log Pembaruan Sistem",desc:"Melihat riwayat update sistem toko",group:"konten",icon:"fa-code-branch"},{key:"reports",label:"Pusat Laporan & Keuangan",desc:"Laporan terpadu penjualan, stok, laba rugi, utang piutang, dan perpajakan",group:"sensitif",icon:"fa-chart-pie"},{key:"view_reports",label:"Laporan Finansial & Laba",desc:"Lihat omset, total HPP terjual, margin & laba bersih toko",group:"sensitif",icon:"fa-chart-line"},{key:"tax",label:"Pajak & Keuangan (PPN)",desc:"Laporan PPN, neraca keuangan, dan laba rugi resmi",group:"sensitif",icon:"fa-file-invoice-dollar"},{key:"banks",label:"Rekening Bank & QRIS",desc:"Ubah nomor rekening toko dan QRIS tujuan pembayaran",group:"sensitif",icon:"fa-building-columns"},{key:"settings",label:"Pengaturan Utama Toko",desc:"Konfigurasi nama toko, GPS maps, tarif ongkir, & sistem",group:"sensitif",icon:"fa-gear"},{key:"cashiers",label:"Kelola Staf & Hak Akses",desc:"Daftarkan staf baru, atur jabatan, & ubah batasan hak akses",group:"sensitif",icon:"fa-users-gear"},{key:"backup_sync",label:"Pusat Data & Backup Cloud",desc:"Cadangkan data toko, ekspor database, & sinkronisasi cloud",group:"sensitif",icon:"fa-cloud-arrow-up"}],na={[se.CASHIER]:{pos:!0,returns:!0,orders:!1,products:!1,suppliers:!1,purchases:!1,piutang:!1,customers:!1,categories:!1,brands:!1,colors:!1,vouchers:!1,banners:!1,rewards:!1,reviews:!1,faqs:!1,changelog:!1,expenses:!1,stock_opname:!1,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[se.ADMIN]:{pos:!0,returns:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},manager:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!0,view_reports:!0,tax:!0,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[se.STAFF]:{pos:!1,returns:!1,orders:!1,products:!1,suppliers:!1,purchases:!1,piutang:!1,customers:!1,categories:!1,brands:!1,colors:!1,vouchers:!1,banners:!1,rewards:!1,reviews:!1,faqs:!1,changelog:!1,expenses:!1,stock_opname:!0,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[se.OWNER]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,reports:!0,view_reports:!0,tax:!0,banks:!0,settings:!0,cashiers:!0,backup_sync:!0}};let dt=null;const ut=()=>{if(dt)return dt;try{const e=sessionStorage.getItem("freshmart_staff_profile");if(e)return dt=JSON.parse(e),dt}catch{}return null},gn=e=>{dt=e;try{e?sessionStorage.setItem("freshmart_staff_profile",JSON.stringify(e)):sessionStorage.removeItem("freshmart_staff_profile")}catch{}},hn=()=>{dt=null;try{sessionStorage.removeItem("freshmart_staff_profile")}catch{}},Pt=()=>{const e=st.currentUser;if(e&&e.uid===Be)return!0;const t=ut();if(t){const n=String(t.role||"").toLowerCase();if(n==="owner"||t.uid===Be)return!0;if(n==="cashier"||n==="kasir"||n==="staff")return!1}const s=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");if((window.isAdm||window.__localIsAdm)&&s&&!t)return!0;try{const n=sessionStorage.getItem("pos_cashier_session");if(n){const a=JSON.parse(n),o=String(a.role||"").toLowerCase();if(o==="owner"||a.uid===Be)return!0;if(o==="cashier"||o==="kasir"||o==="staff")return!1}}catch{}return!1},yn=()=>{if(Pt())return!0;if(us())return!1;const e=ut();return e?.role===se.ADMIN||String(e?.role||"").toLowerCase()==="admin"},us=()=>{if(Pt())return!1;const e=ut();if(e){const t=String(e.role||"").toLowerCase();if(t==="owner"||e.uid===Be)return!1;if(t==="cashier"||t==="kasir")return!0}try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const s=JSON.parse(t),n=String(s.role||"").toLowerCase();if(n==="owner"||s.uid===Be)return!1;if(n==="cashier"||n==="kasir"||n==="staff")return!0}}catch{}return!1},fs=e=>{if(Pt())return!0;const t=ut();if(t){if(t.isActive===!1)return!1;const s=String(t.role||"").toLowerCase();if(s===se.OWNER||s==="owner")return!0;if(s===se.CASHIER||s==="cashier"||s==="kasir")return e==="pos";if(t.permissions){if(typeof t.permissions[e]<"u")return t.permissions[e]===!0;if(e==="reports"&&(t.permissions.view_reports===!0||t.permissions.tax===!0)||(e==="view_reports"||e==="tax")&&t.permissions.reports===!0)return!0}return(na[t.role]||na[se.ADMIN])[e]===!0}try{const s=sessionStorage.getItem("pos_cashier_session");if(s){const n=JSON.parse(s),a=String(n.role||"").toLowerCase();if(a===se.OWNER||a==="owner"||n.uid===Be)return!0;if(a===se.CASHIER||a==="cashier"||a==="kasir")return e==="pos"}}catch{}return window.isAdm||window.__localIsAdm?["banks","settings","cashiers","backup_sync"].includes(e)?st.currentUser?.uid===Be:!0:!1},ra=()=>{if(typeof window<"u"&&(window.curViewName==="view-pos-cashier"||document.getElementById("view-pos-cashier")?.classList.contains("flex")||document.getElementById("pos-payment-modal")?.classList.contains("flex")||document.getElementById("pos-variant-sheet")?.classList.contains("flex")))try{const n=sessionStorage.getItem("pos_cashier_session");if(n){const a=JSON.parse(n),o=String(a.role||"").toLowerCase();return o===se.OWNER||o==="owner"||a.uid===Be}}catch{}if(Pt())return!0;const t=ut();if(t){const n=String(t.role||"").toLowerCase();return n===se.OWNER||n==="owner"||t.uid===Be?!0:n===se.CASHIER||n==="cashier"||n==="kasir"?!1:fs("view_reports")}const s=st.currentUser;return!!(s&&s.uid===Be||window.isAdm||window.__localIsAdm)},vn=e=>{switch(e){case se.OWNER:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-2xs">
                <i class="fa-solid fa-crown text-[9px] text-amber-500"></i>
                <span>Owner</span>
            </span>`;case se.ADMIN:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shadow-2xs">
                <i class="fa-solid fa-shield-halved text-[9px]"></i>
                <span>Admin Toko</span>
            </span>`;case se.STAFF:case"staff":return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 shadow-2xs">
                <i class="fa-solid fa-user-gear text-[9px]"></i>
                <span>Staf / Gudang</span>
            </span>`;case se.CASHIER:default:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                <i class="fa-solid fa-cash-register text-[9px]"></i>
                <span>Kasir POS</span>
            </span>`}};typeof window<"u"&&(window.ROLES=se,window.STANDARD_POSITIONS=xn,window.PERMISSION_DEFINITIONS=wn,window.ROLE_PRESETS=na,window.getActiveStaff=ut,window.setActiveStaff=gn,window.clearActiveStaff=hn,window.isOwnerUser=Pt,window.isAdminUser=yn,window.isCashierUser=us,window.hasPermission=fs,window.canViewHpp=ra,window.getRoleBadgeHtml=vn);const bs=["212222","222122","222221","121223","121322","131222","122213","122312","132212","221213","221312","231212","112232","122132","122231","113222","123122","123221","223211","221132","221231","213212","223112","312131","311222","321122","321221","312212","322112","322211","212123","212321","232121","111323","131123","131321","112313","132113","132311","211313","231113","231311","112133","112331","132131","113123","113321","133121","313121","211331","231131","213113","213311","213131","311123","311321","331121","312113","312311","332111","314111","221411","431111","111224","111422","121124","121421","141122","141221","112214","112412","122114","122411","142112","142211","241211","221114","413111","241112","134111","111242","121142","121241","114212","124112","124211","411212","421112","421211","212141","214121","412121","111143","111341","131141","114113","114311","411113","411311","113141","114131","311141","411131","211412","211214","211232","2331112"],Na=104,Oa=105,xs=106,xa=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(!t)return null;const s=[Na];let n=Na,a=1;for(let l=0;l<t.length;l++){const p=t.charCodeAt(l);if(p<32||p>126)continue;const d=p-32;s.push(d),n+=d*a,a++}if(s.length<=1)return null;const o=n%103;s.push(o),s.push(xs);let r="";return s.forEach(l=>{const p=bs[l];if(!p)return;let d=!0;for(let m of p){const u=parseInt(m,10);r+=(d?"1":"0").repeat(u),d=!d}}),{text:t,subtype:"B",values:s,modules:r,moduleCount:r.length}},wa=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(!t||!/^\d+$/.test(t)||t.length%2!==0||t.length<2)return null;const s=[Oa];let n=Oa,a=1;for(let l=0;l<t.length;l+=2){const p=t.slice(l,l+2),d=parseInt(p,10);s.push(d),n+=d*a,a++}const o=n%103;s.push(o),s.push(xs);let r="";return s.forEach(l=>{const p=bs[l];if(!p)return;let d=!0;for(let m of p){const u=parseInt(m,10);r+=(d?"1":"0").repeat(u),d=!d}}),{text:t,subtype:"C",values:s,modules:r,moduleCount:r.length}},ws=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(!t)return null;if(/^\d+$/.test(t)&&t.length%2===0&&t.length>=2){const s=wa(t);if(s)return s}return xa(t)},ia=(e,t={})=>{const s=t.mode==="B"?xa(e):t.mode==="C"?wa(e):ws(e);if(!s)return'<div class="p-2 text-center text-xs text-rose-500 font-bold bg-rose-50 border border-rose-200 rounded-lg">Kode barcode tidak valid</div>';const n=t.height||58,a=t.moduleWidth||1.4,o=t.quietZone!==void 0?t.quietZone:Math.max(16,Math.round(a*12)),l=s.moduleCount*a+o*2;let p="",d=!1,m=0;for(let M=0;M<s.modules.length;M++){const O=s.modules[M]==="1";if(O&&!d)d=!0,m=M;else if(!O&&d){d=!1;const A=(M-m)*a,E=o+m*a;p+=`<rect x="${E.toFixed(2)}" y="0" width="${A.toFixed(2)}" height="${n}" fill="#000000" />`}}if(d){const M=(s.modules.length-m)*a,O=o+m*a;p+=`<rect x="${O.toFixed(2)}" y="0" width="${M.toFixed(2)}" height="${n}" fill="#000000" />`}const u=t.showText!==!1,x=t.customText||s.text,h=t.fontSize||10,v=u?h+4:0,b=n+v;let S="";if(u){const M=n+h+1;S=`<text x="${(l/2).toFixed(2)}" y="${M.toFixed(2)}" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="${h}" font-weight="700" fill="#000000" letter-spacing="1">${x}</text>`}const L=t.className||"w-full h-auto",H=`<rect x="0" y="0" width="${l.toFixed(2)}" height="${b.toFixed(2)}" fill="#ffffff" />`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${l.toFixed(2)} ${b.toFixed(2)}" class="${L}" shape-rendering="crispEdges" style="display:block;margin:0 auto;max-width:100%;height:auto;background-color:#ffffff;">${H}${p}${S}</svg>`};typeof window<"u"&&(window.encodeCode128B=xa,window.encodeCode128C=wa,window.encodeCode128Auto=ws,window.generateCode128Svg=ia);const kn=[{key:"permanent",label:"Karyawan Tetap",badgeColor:"emerald"},{key:"contract",label:"Kontrak (PKWT)",badgeColor:"blue"},{key:"probation",label:"Masa Percobaan (3 Bulan)",badgeColor:"amber"},{key:"daily",label:"Staf Harian Lepas",badgeColor:"purple"}],Pn=[{key:"bca",label:"BCA (Bank Central Asia)"},{key:"bri",label:"BRI (Bank Rakyat Indonesia)"},{key:"mandiri",label:"Bank Mandiri"},{key:"bni",label:"BNI (Bank Negara Indonesia)"},{key:"bsi",label:"BSI (Bank Syariah Indonesia)"},{key:"jatim",label:"Bank Jatim"},{key:"cash",label:"Tunai Kas Laci Toko (Cash)"},{key:"other",label:"Bank Lainnya / E-Wallet"}],An=e=>{if(!e)return"-";const[t,s]=e.split("-"),n=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],a=parseInt(s,10)-1;return`${n[a]||s} ${t}`},Tn=(e=[],t="EMP")=>{if(!Array.isArray(e)||e.length===0)return`${t}-001`;let s=0;const n=new RegExp(`^${t}-(\\d+)`,"i");e.forEach(o=>{const l=String(o?.employeeId||o?.nik||"").trim().match(n);if(l&&l[1]){const p=parseInt(l[1],10);!isNaN(p)&&p>s&&(s=p)}});const a=s+1;return`${t}-${String(a).padStart(3,"0")}`},gs=e=>e&&e.ownerEmployee&&typeof e.ownerEmployee=="object"?{employeeId:"OWN-001",role:se.OWNER,position:"Owner / Direktur Utama",baseSalary:1e7,dailyAllowance:0,employmentStatus:"permanent",bankName:"BCA / Rekening Toko",bankAccount:"-",bankHolder:"Pemilik Toko",isActive:!0,...e.ownerEmployee}:{employeeId:"OWN-001",name:e?.store?.name?`Pemilik ${e.store.name}`:"Pemilik Toko",email:e?.subscription?.clientEmail||"owner@tokoputri.com",phone:e?.store?.wa||"",role:se.OWNER,position:"Owner / Direktur Utama",baseSalary:1e7,dailyAllowance:0,employmentStatus:"permanent",bankName:"BCA / Rekening Toko",bankAccount:"-",bankHolder:"Pemilik Toko",hireDate:"2024-01-01",isActive:!0,notes:"Gaji resmi direksi / pemilik toko terpisah dari laba usaha toko."},hs=(e={},t=0)=>{const s=e.role===se.OWNER||e.role==="owner",n=s?"OWN":"EMP",a=(e.employeeId||e.nik||`${n}-${String(t+1).padStart(3,"0")}`).trim();let o=e.position||"";return o||(s?o="Owner / Direktur Utama":e.role===se.ADMIN?o="Admin Operasional Toko":e.role===se.CASHIER?o="Kasir POS":o="Staf Operasional / Gudang"),{uid:e.uid||e.id||`emp_${Date.now()}_${t}`,employeeId:a,name:String(e.name||"Karyawan").trim(),email:String(e.email||"").trim(),phone:String(e.phone||"").trim(),role:e.role||se.CASHIER,position:o,employmentStatus:e.employmentStatus||"permanent",hireDate:e.hireDate||new Date().toISOString().split("T")[0],baseSalary:Math.max(0,parseFloat(e.baseSalary)||0),dailyAllowance:Math.max(0,parseFloat(e.dailyAllowance)||0),bankName:e.bankName||"cash",bankAccount:String(e.bankAccount||"").trim(),bankHolder:String(e.bankHolder||e.name||"").trim(),nikKtp:String(e.nikKtp||"").trim(),npwp:String(e.npwp||"").trim(),isActive:e.isActive!==!1,notes:String(e.notes||"").trim()}},Sn=(e=[],t={})=>{const s=Array.isArray(t?.employees)?t.employees:[],n=new Map;return s.forEach(a=>{a.uid&&n.set(a.uid,a),a.email&&n.set(a.email.toLowerCase(),a),a.employeeId&&n.set(a.employeeId,a)}),e.map((a,o)=>{const r=n.get(a.uid)||n.get(a.email?.toLowerCase())||{};return hs({...r,...a,uid:a.uid,email:a.email,name:a.name||r.name,role:a.role||r.role,isActive:a.isActive!==!1},o)})},nt=(e="mengubah data staf")=>{try{if(typeof window<"u"&&window.auth&&window.ADMIN_UID){const t=window.auth.currentUser;return t?t.uid!==window.ADMIN_UID?(typeof window.showToast=="function"&&window.showToast(`Akses Ditolak: Hanya Akun Pemilik Utama (Owner) yang berwenang ${e}. Akun staf tidak memiliki izin modifikasi database staf.`,"error"),!1):!0:(typeof window.showToast=="function"&&window.showToast(`Sesi Belum Terotentikasi: Harap login resmi menggunakan Akun Pemilik Toko (Email Owner) di form login CMS untuk ${e}.`,"warning"),!1)}}catch{}return!0};typeof window<"u"&&(window.EMPLOYMENT_STATUSES=kn,window.SALARY_PAYMENT_METHODS=Pn,window.generateEmployeeId=Tn,window.getOwnerEmployeeProfile=gs,window.normalizeEmployeeProfile=hs,window.mergeStaffWithHrProfiles=Sn,window.verifyOwnerAuthority=nt);const Kt=async()=>{try{if(typeof window<"u"&&typeof window.saveApp=="function")return await window.saveApp();const e=await jt(()=>import("./module-pos-BTl17EoF.js").then(t=>t.W),__vite__mapDeps([2,3,4,1]),import.meta.url);if(typeof e?.saveApp=="function")return await e.saveApp()}catch{}};let Fe="active",Me=[];const ys=(e=[])=>{const t=new Date().getFullYear(),s=`KSB-${t}`;let n=0;const a=new RegExp(`^KSB-${t}-(\\d+)`,"i");e.forEach(r=>{const p=String(r?.advanceId||r?.id||"").trim().match(a);if(p&&p[1]){const d=parseInt(p[1],10);!isNaN(d)&&d>n&&(n=d)}});const o=n+1;return`${s}-${String(o).padStart(3,"0")}`},Jt=()=>{const e=Array.isArray(c.employees)?[...c.employees]:[],t=gs(c);return e.some(n=>n.employeeId==="OWN-001"||n.role==="owner")||e.unshift(t),e.filter(n=>n.isActive!==!1)},vs=async()=>{try{let e=[];try{const t=await de.collection("freshmart").doc("cms_data").collection("salary_advances").orderBy("createdAt","desc").get();t&&!t.empty&&(e=t.docs.map(s=>({id:s.id,...s.data()})))}catch{}if(!e||e.length===0){let t=Array.isArray(c.salaryAdvances)?c.salaryAdvances:[];if(t.length===0)try{t=JSON.parse(localStorage.getItem("freshmart_salary_advances")||"[]"),Array.isArray(t)&&t.length>0&&(c.salaryAdvances=t)}catch{}e=t}return Me=e,c.salaryAdvances=e,e}catch(e){return console.error("[HR Advances] Gagal memuat data kasbon:",e),Me=Array.isArray(c.salaryAdvances)?c.salaryAdvances:[],Me}},At=async e=>{if(!e)return;e.innerHTML=`
    <div class="text-center py-16">
        <i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i>
        <p class="text-xs text-slate-400 mt-2">Memuat buku kasbon karyawan...</p>
    </div>`,await vs();const t=Me,s=t.filter(l=>l.status==="active"&&(parseFloat(l.remainingAmount)||0)>0),n=s.reduce((l,p)=>l+(parseFloat(p.remainingAmount)||0),0),a=new Set(s.map(l=>l.employeeId||l.employeeName)).size,o=s.reduce((l,p)=>l+Math.min(parseFloat(p.monthlyInstallment)||0,parseFloat(p.remainingAmount)||0),0);let r=t;Fe==="active"?r=t.filter(l=>l.status==="active"&&(parseFloat(l.remainingAmount)||0)>0):Fe==="paid"&&(r=t.filter(l=>l.status==="paid"||(parseFloat(l.remainingAmount)||0)<=0)),e.innerHTML=`
    <div class="space-y-4">
        <!-- Bento Summary Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Total Kasbon Aktif</span>
                <p class="text-base sm:text-lg font-black text-rose-600 dark:text-rose-400">${y(n)}</p>
                <span class="text-[10px] text-slate-400 mt-0.5 block">Sisa piutang staf toko</span>
            </div>
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Karyawan Meminjam</span>
                <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white">${a} <span class="text-xs font-medium text-slate-400">Orang</span></p>
                <span class="text-[10px] text-slate-400 mt-0.5 block">Kasbon belum lunas</span>
            </div>
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Potongan Payroll Bln Ini</span>
                <p class="text-base sm:text-lg font-black text-[var(--color-primary)]">${y(o)}</p>
                <span class="text-[10px] text-slate-400 mt-0.5 block">Otomatis dipotong gaji</span>
            </div>
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Total Pengajuan</span>
                <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white">${t.length} <span class="text-xs font-medium text-slate-400">Riwayat</span></p>
                <span class="text-[10px] text-slate-400 mt-0.5 block">Sepanjang masa toko</span>
            </div>
        </div>

        <!-- Action Bar & Filter -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
                <button onclick="window.filterAdvanceStatus('active')" 
                    class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0 flex items-center gap-1.5 ${Fe==="active"?"text-white shadow-xs":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}"
                    style="${Fe==="active"?"background: var(--color-primary); color: #fff;":""}">
                    <i class="fa-solid fa-clock-rotate-left text-[10px]"></i>
                    <span>Kasbon Aktif (${s.length})</span>
                </button>
                <button onclick="window.filterAdvanceStatus('paid')" 
                    class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0 flex items-center gap-1.5 ${Fe==="paid"?"text-white shadow-xs":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}"
                    style="${Fe==="paid"?"background: var(--color-primary); color: #fff;":""}">
                    <i class="fa-solid fa-circle-check text-[10px] text-emerald-500"></i>
                    <span>Sudah Lunas</span>
                </button>
                <button onclick="window.filterAdvanceStatus('all')" 
                    class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs shrink-0 flex items-center gap-1.5 ${Fe==="all"?"text-white shadow-xs":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"}"
                    style="${Fe==="all"?"background: var(--color-primary); color: #fff;":""}">
                    <i class="fa-solid fa-list text-[10px]"></i>
                    <span>Semua Catatan (${t.length})</span>
                </button>
            </div>

            <button onclick="window.openSalaryAdvanceFormModal()"
                class="px-4 py-2.5 rounded-2xl text-white text-xs font-black shadow-md active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 self-start sm:self-auto hover:opacity-95"
                style="background: var(--color-primary);">
                <i class="fa-solid fa-hand-holding-dollar text-xs"></i>
                <span>+ Ajukan Kasbon Baru</span>
            </button>
        </div>

        <!-- List Kasbon Cards -->
        <div id="salary-advances-list" class="space-y-3">
            ${Mn(r)}
        </div>
    </div>`},$n=e=>{Fe=e;const t=f("cashier-panel-advances");t&&At(t)},Mn=e=>!e||e.length===0?`
        <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600 bg-white dark:bg-slate-800/60 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 text-center">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3 text-slate-400">
                <i class="fa-solid fa-receipt"></i>
            </div>
            <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Tidak ada catatan kasbon pada filter ini</p>
            <p class="text-xs mt-1 text-slate-400">Klik "+ Ajukan Kasbon Baru" untuk mencatat pinjaman staf toko</p>
        </div>`:e.map(t=>{const s=Math.max(0,parseFloat(t.remainingAmount)||0),n=Math.max(1,parseFloat(t.amount)||1),a=Math.max(0,n-s),o=Math.min(100,Math.round(a/n*100)),r=s<=0||t.status==="paid",l=t.disbursementSource==="bank"?"Transfer Bank":t.disbursementSource==="owner"?"Dana Owner":"Kas Toko (Tunai)",p=t.requestDate||"-";return`
        <div class="p-4 sm:p-5 bg-white dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-start gap-3.5 min-w-0 flex-1">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-base shrink-0 shadow-2xs font-black ${r?"bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/40 text-rose-600 border border-rose-200 dark:border-rose-800"}">
                    <i class="fa-solid ${r?"fa-circle-check":"fa-hand-holding-dollar"}"></i>
                </div>
                <div class="min-w-0 flex-1 space-y-1.5">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="text-sm font-black text-slate-900 dark:text-white leading-tight sm:whitespace-nowrap">${i(t.employeeName||"Karyawan")}</span>
                        <span class="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 shrink-0">
                            ${i(t.employeeId||"EMP")}
                        </span>
                        <span class="font-mono text-[10px] text-slate-400 shrink-0">#${i(t.advanceId||t.id)}</span>
                        <span class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full shrink-0 ${r?"bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200":"bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200"}">
                            <span class="w-1.5 h-1.5 rounded-full ${r?"bg-emerald-500":"bg-amber-500 animate-pulse"}"></span>
                            ${r?"Lunas":"Belum Lunas"}
                        </span>
                    </div>

                    <div class="flex items-center text-xs text-slate-600 dark:text-slate-300 flex-wrap gap-x-2 gap-y-0.5">
                        <span class="font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">${i(t.position||"Staf Toko")}</span>
                        <span class="inline-flex items-center whitespace-nowrap">
                            <span class="text-slate-300 dark:text-slate-600 mr-2">•</span>
                            <span>Pinjaman: <strong class="text-slate-900 dark:text-white">${y(t.amount)}</strong></span>
                        </span>
                        <span class="inline-flex items-center whitespace-nowrap">
                            <span class="text-slate-300 dark:text-slate-600 mr-2">•</span>
                            <span>Sisa: <strong class="${r?"text-emerald-600 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">${y(s)}</strong></span>
                        </span>
                        <span class="inline-flex items-center whitespace-nowrap">
                            <span class="text-slate-300 dark:text-slate-600 mr-2">•</span>
                            <span>Potongan: <strong class="text-[var(--color-primary)] font-bold">${y(t.monthlyInstallment)}/bln</strong></span>
                        </span>
                    </div>

                    <!-- Progress Bar Cicilan -->
                    <div class="pt-1 max-w-md">
                        <div class="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                            <span>Terbayar: ${y(a)}</span>
                            <span class="font-bold text-slate-600 dark:text-slate-300">${o}% Lunas</span>
                        </div>
                        <div class="w-full bg-slate-100 dark:bg-slate-700/80 rounded-full h-1.5 overflow-hidden">
                            <div class="h-full rounded-full transition-all duration-500 ${r?"bg-emerald-500":""}" style="width: ${o}%; ${r?"":"background: var(--color-primary)"}"></div>
                        </div>
                    </div>

                    <div class="flex items-center text-[11px] text-slate-400 dark:text-slate-500 flex-wrap gap-x-2 gap-y-0.5 pt-0.5">
                        <span class="flex items-center gap-1 whitespace-nowrap"><i class="fa-solid fa-calendar-day text-[10px]"></i> Tgl: ${i(p)}</span>
                        <span class="inline-flex items-center whitespace-nowrap">
                            <span class="text-slate-300 dark:text-slate-600 mr-2">•</span>
                            <span class="flex items-center gap-1"><i class="fa-solid fa-wallet text-[10px]"></i> Sumber: ${i(l)}</span>
                        </span>
                        ${t.reason?`
                        <span class="inline-flex items-center whitespace-nowrap">
                            <span class="text-slate-300 dark:text-slate-600 mr-2">•</span>
                            <span class="italic text-slate-500 truncate max-w-xs">"${i(t.reason)}"</span>
                        </span>`:""}
                    </div>
                </div>
            </div>

            <!-- Tombol Aksi -->
            <div class="flex items-center gap-2 shrink-0 self-end sm:self-center border-t sm:border-t-0 pt-2.5 sm:pt-0 border-slate-100 dark:border-slate-700/60 w-full sm:w-auto justify-end">
                <button onclick="window.openAdvanceDetailModal('${i(t.advanceId||t.id)}')"
                    class="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5">
                    <i class="fa-solid fa-file-invoice text-[10px]" style="color: var(--color-primary)"></i>
                    <span>Riwayat &amp; Rincian</span>
                </button>
                ${r?"":`
                <button onclick="window.promptManualRepayment('${i(t.advanceId||t.id)}', ${s})"
                    class="px-3.5 py-2 rounded-xl text-xs font-black text-white transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-money-bill-transfer text-[10px]"></i>
                    <span>Bayar Kasbon</span>
                </button>`}
                <button onclick="window.deleteSalaryAdvance('${i(t.advanceId||t.id)}', '${i(t.employeeName||"Karyawan")}')"
                    title="Hapus Catatan Kasbon"
                    class="w-9 h-9 rounded-xl flex items-center justify-center text-xs bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 border border-slate-200 dark:border-slate-600 transition-all active:scale-95 cursor-pointer shrink-0">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`}).join(""),Dn=()=>{if(!nt("mencatat kasbon karyawan"))return;const e=Jt();if(e.length===0){re("Belum ada staf terdaftar di toko. Tambahkan staf terlebih dahulu.","warning");return}const t=new Date().toISOString().split("T")[0],s=ys(Me),n=f("modal-salary-advance-form");n&&n.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-salary-advance-form" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeSalaryAdvanceFormModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-lg flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="salary-advance-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-800/90">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-2xs text-white"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-hand-holding-dollar"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <span>Form Pengajuan Kasbon Karyawan</span>
                            <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${i(s)}</span>
                        </h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Pencatatan pinjaman operasional staf toko</p>
                    </div>
                </div>
                <button onclick="window.closeSalaryAdvanceFormModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Modal Body (Scrollable) -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Pilih Karyawan Peminjam <span class="text-rose-500">*</span></label>
                    <select id="adv-employee-select" onchange="window.onAdvanceEmployeeChange()"
                        class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                        ${e.map(a=>`
                            <option value="${i(a.uid||a.employeeId)}" data-empid="${i(a.employeeId)}" data-name="${i(a.name)}" data-role="${i(a.role)}" data-position="${i(a.position)}" data-salary="${a.baseSalary||0}">
                                ${i(a.name)} — ${i(a.position)} (${i(a.employeeId)}) [Gaji: ${y(a.baseSalary||0)}]
                            </option>
                        `).join("")}
                    </select>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Tanggal Pencairan <span class="text-rose-500">*</span></label>
                        <input id="adv-request-date" type="date" value="${t}"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nominal Kasbon (Rp) <span class="text-rose-500">*</span></label>
                        <input id="adv-amount" type="number" min="10000" step="50000" placeholder="Contoh: 500000"
                            oninput="window.calculateAdvanceInstallment()"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 font-black focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Skema Tenor Potongan Gaji</label>
                        <select id="adv-tenor-select" onchange="window.calculateAdvanceInstallment()"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <option value="1">1 Bulan (Lunas Sekali Potong)</option>
                            <option value="2">2 Bulan (Cicilan 2x)</option>
                            <option value="3">3 Bulan (Cicilan 3x)</option>
                            <option value="4">4 Bulan (Cicilan 4x)</option>
                            <option value="6">6 Bulan (Cicilan 6x)</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Potongan Tiap Bulan (Rp)</label>
                        <input id="adv-installment" type="number" min="0" step="10000"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-slate-50 dark:bg-slate-800 text-[var(--color-primary)] font-black focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Sumber Dana Pencairan</label>
                        <select id="adv-disbursement-source"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                            <option value="cash">Kas Laci Toko (Tunai)</option>
                            <option value="bank">Transfer Rekening Bank Toko</option>
                            <option value="owner">Dana Pribadi / Talangan Owner</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Keperluan / Alasan Pinjaman</label>
                        <input id="adv-reason" type="text" placeholder="Contoh: Kebutuhan darurat / biaya keluarga"
                            class="w-full min-h-[44px] text-[16px] sm:text-sm border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.25)] shadow-inner">
                    </div>
                </div>

                <!-- Opsi Integrasi Buku Kas Toko -->
                <div class="p-3.5 rounded-2xl border" style="background: rgba(var(--color-primary-rgb), 0.05); border-color: rgba(var(--color-primary-rgb), 0.2)">
                    <label class="flex items-start gap-2.5 cursor-pointer">
                        <input id="adv-sync-expense" type="checkbox" checked class="mt-0.5 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]/30">
                        <div class="text-xs">
                            <span class="font-black text-slate-900 dark:text-white">Catat Otomatis ke Buku Kas Pengeluaran Toko (expenses.js)</span>
                            <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                                Dana kasbon yang dicairkan langsung memotong saldo kas toko dan masuk ke laporan beban kas operasional kategori "Kasbon &amp; Pinjaman Karyawan".
                            </p>
                        </div>
                    </label>
                </div>

                <div id="adv-form-error" class="hidden text-xs text-rose-600 font-semibold p-3 bg-rose-50 dark:bg-rose-950/40 rounded-2xl border border-rose-200 dark:border-rose-900/50"></div>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeSalaryAdvanceFormModal()"
                    class="flex-1 min-h-[48px] py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.saveSalaryAdvance()" id="save-adv-btn"
                    class="flex-[2] min-h-[48px] py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan &amp; Cairkan Kasbon
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("advanceForm"),setTimeout(()=>{const a=f("salary-advance-modal-box");a&&a.classList.remove("scale-95");const o=f("adv-amount");o&&o.focus()},10)},ks=(e=!1)=>{const t=()=>{const s=f("modal-salary-advance-form");s&&(s.style.opacity="0",setTimeout(()=>s.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("advanceForm",e,t):t()},Ps=()=>{const e=parseFloat(f("adv-amount")?.value)||0,t=parseInt(f("adv-tenor-select")?.value,10)||1,s=f("adv-installment");s&&e>0&&(s.value=Math.ceil(e/t))},Cn=()=>{Ps()},Ln=async()=>{if(!nt("mencatat kasbon karyawan"))return;const e=f("adv-employee-select"),t=e?.options[e.selectedIndex];if(!t){re("Pilih karyawan terlebih dahulu","warning");return}const s=e.value,n=t.getAttribute("data-empid")||"EMP-001",a=t.getAttribute("data-name")||"Karyawan",o=t.getAttribute("data-role")||"staff",r=t.getAttribute("data-position")||"Staf Toko",l=f("adv-request-date")?.value||new Date().toISOString().split("T")[0],p=Math.max(0,parseFloat(f("adv-amount")?.value)||0),d=parseInt(f("adv-tenor-select")?.value,10)||1,m=Math.max(0,parseFloat(f("adv-installment")?.value)||Math.ceil(p/d)),u=f("adv-disbursement-source")?.value||"cash",x=f("adv-reason")?.value?.trim()||"Kasbon Operasional Karyawan",h=f("adv-sync-expense")?.checked!==!1,v=f("adv-form-error"),b=f("save-adv-btn");if(p<1e4){v&&(v.textContent="Nominal kasbon minimal Rp 10.000.",v.classList.remove("hidden"));return}b&&(b.disabled=!0,b.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'),je("Mencatat kasbon karyawan...");try{const S=ys(Me);let L=null;if(h){L="exp_adv_"+Date.now();const O={id:L,date:l,category:"kasbon",amount:p,desc:`Pencairan Kasbon: ${a} (${n}) - ${x}`,source:u,recipient:a,receiptUrl:"",advanceId:S,createdAt:new Date().toISOString()};Array.isArray(c.expenses)||(c.expenses=[]),c.expenses.unshift(O);try{await Kt()}catch{}}const H={advanceId:S,employeeUid:s,employeeId:n,employeeName:a,employeeRole:o,position:r,requestDate:l,amount:p,monthlyInstallment:m,totalTenorMonths:d,remainingAmount:p,reason:x,status:"active",disbursementSource:u,expenseId:L,repayments:[],createdAt:Le.firestore.FieldValue.serverTimestamp(),createdBy:st.currentUser?.uid||"owner"};try{await de.collection("freshmart").doc("cms_data").collection("salary_advances").doc(S).set(H)}catch{}Array.isArray(c.salaryAdvances)||(c.salaryAdvances=[]),c.salaryAdvances.unshift({id:S,...H}),Me=c.salaryAdvances;try{localStorage.setItem("freshmart_salary_advances",JSON.stringify(c.salaryAdvances)),await Kt()}catch{}ks(),re(`Kasbon ${y(p)} untuk ${a} berhasil dicatat!`,"success");const M=f("cashier-panel-advances");M&&At(M)}catch(S){console.error("[HR Advances] Gagal menyimpan kasbon:",S),v&&(v.textContent="Gagal menyimpan kasbon: "+(S.message||"Kesalahan sistem"),v.classList.remove("hidden")),b&&(b.disabled=!1,b.innerHTML='<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan &amp; Cairkan Kasbon')}finally{Ve()}},Rn=e=>{const t=Me.find(d=>(d.advanceId||d.id)===e);if(!t){re("Data kasbon tidak ditemukan","warning");return}const s=Math.max(0,parseFloat(t.remainingAmount)||0),n=Math.max(1,parseFloat(t.amount)||1),a=Math.max(0,n-s),o=Math.min(100,Math.round(a/n*100)),r=s<=0||t.status==="paid",l=Array.isArray(t.repayments)?t.repayments:[],p=f("modal-salary-advance-detail");p&&p.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-salary-advance-detail" class="fixed inset-0 z-[9990] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/75"
        onclick="if(event.target===this) window.closeAdvanceDetailModal()">
        <div class="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl w-full max-w-lg flex flex-col max-h-[92vh] sm:max-h-[90vh] overflow-hidden scale-95 transition-transform duration-300 border border-slate-200 dark:border-slate-800" id="salary-advance-detail-modal-box">
            <!-- Mobile Drag Handle -->
            <div class="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 shrink-0"></div>
            <!-- Header -->
            <div class="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-800/90">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-2xs ${r?"bg-emerald-500 text-white":"text-white"}"
                        style="${r?"":"background: var(--color-primary)"}">
                        <i class="fa-solid fa-file-invoice"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <span>Detail Kasbon: ${i(t.employeeName)}</span>
                            <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${i(t.advanceId||t.id)}</span>
                        </h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">${i(t.position)} • ID: ${i(t.employeeId)}</p>
                    </div>
                </div>
                <button onclick="window.closeAdvanceDetailModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90 cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Body -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- Status & Saldo Bento Card -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-2.5">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-slate-500">Status Pelunasan:</span>
                        <span class="inline-flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-full ${r?"bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300":"bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"}">
                            <span class="w-2 h-2 rounded-full ${r?"bg-emerald-500":"bg-rose-500 animate-pulse"}"></span>
                            ${r?"Lunas Sepenuhnya":"Masih Berjalan (Belum Lunas)"}
                        </span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                        <div>
                            <span class="text-[10px] font-bold uppercase text-slate-400 block">Total Pinjaman</span>
                            <span class="text-sm font-black text-slate-800 dark:text-white">${y(t.amount)}</span>
                        </div>
                        <div>
                            <span class="text-[10px] font-bold uppercase text-slate-400 block">Sisa Pinjaman</span>
                            <span class="text-sm font-black ${r?"text-emerald-600":"text-rose-600"}">${y(s)}</span>
                        </div>
                    </div>
                    <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden mt-2">
                        <div class="h-full rounded-full transition-all duration-500 ${r?"bg-emerald-500":""}" style="width: ${o}%; ${r?"":"background: var(--color-primary)"}"></div>
                    </div>
                    <div class="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
                        <span>Potongan: <strong>${y(t.monthlyInstallment)} / bln</strong></span>
                        <span>Tenor: <strong>${t.totalTenorMonths||1} Bulan</strong></span>
                    </div>
                </div>

                <!-- Riwayat Pembayaran / Pemotongan -->
                <div>
                    <h4 class="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5 mb-2">
                        <i class="fa-solid fa-clock-rotate-left" style="color: var(--color-primary)"></i> Riwayat Angsuran &amp; Pemotongan
                    </h4>
                    ${l.length===0?`
                        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center text-xs text-slate-400">
                            Belum ada riwayat pemotongan gaji atau pembayaran angsuran untuk kasbon ini.
                        </div>
                    `:`
                        <div class="space-y-2">
                            ${l.map((d,m)=>`
                            <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                                <div>
                                    <span class="font-bold text-slate-800 dark:text-white block">Angsuran #${m+1}: ${y(d.amount)}</span>
                                    <span class="text-[10px] text-slate-400">${i(d.date||"-")} • ${i(d.notes||"Potongan Payroll")}</span>
                                </div>
                                <span class="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">-${y(d.amount)}</span>
                            </div>`).join("")}
                        </div>
                    `}
                </div>
            </div>

            <!-- Footer -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-end shrink-0 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button onclick="window.closeAdvanceDetailModal()"
                    class="min-h-[44px] px-6 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Tutup
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("advanceDetail"),setTimeout(()=>{const d=f("salary-advance-detail-modal-box");d&&d.classList.remove("scale-95")},10)},In=(e=!1)=>{const t=()=>{const s=f("modal-salary-advance-detail");s&&(s.style.opacity="0",setTimeout(()=>s.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("advanceDetail",e,t):t()},Nn=(e,t)=>{if(!nt("mencatat pembayaran kasbon"))return;const s=Me.find(o=>(o.advanceId||o.id)===e);if(!s)return;const n=prompt(`Masukkan nominal pembayaran angsuran kasbon untuk "${s.employeeName}":
(Sisa pinjaman saat ini: ${y(t)})`,t);if(n===null)return;const a=Math.max(0,parseFloat(n.replace(/[^0-9]/g,""))||0);if(a<=0){re("Nominal pembayaran tidak valid","warning");return}As(e,a,"Pembayaran manual / tunai staf")},As=async(e,t,s="Potongan gaji payroll")=>{const n=Me.find(d=>(d.advanceId||d.id)===e);if(!n)return!1;const a=Math.max(0,parseFloat(n.remainingAmount)||0),o=Math.min(a,t),r=Math.max(0,a-o),l=r<=0,p={date:new Date().toISOString().split("T")[0],amount:o,remainingAfter:r,notes:s,recordedAt:new Date().toISOString()};je("Memperbarui catatan kasbon...");try{const d={remainingAmount:r,status:l?"paid":"active",repayments:Le.firestore.FieldValue.arrayUnion(p),updatedAt:Le.firestore.FieldValue.serverTimestamp()};try{await de.collection("freshmart").doc("cms_data").collection("salary_advances").doc(e).update(d)}catch{}n.remainingAmount=r,n.status=l?"paid":"active",Array.isArray(n.repayments)||(n.repayments=[]),n.repayments.push(p);try{localStorage.setItem("freshmart_salary_advances",JSON.stringify(c.salaryAdvances)),await Kt()}catch{}re(`Pembayaran kasbon ${y(o)} berhasil dicatat! Sisa: ${y(r)}`,"success");const m=f("cashier-panel-advances");return m&&At(m),!0}catch(d){return console.error("[HR Advances] Gagal mencatat pembayaran:",d),re("Gagal mencatat pembayaran: "+d.message,"error"),!1}finally{Ve()}},On=(e,t)=>{nt("menghapus data kasbon")&&jo("Hapus Catatan Kasbon",`Yakin hapus data kasbon "${t}" (#${e})? Tindakan ini tidak dapat dibatalkan.`,async()=>{je("Menghapus catatan kasbon...");try{try{await de.collection("freshmart").doc("cms_data").collection("salary_advances").doc(e).delete()}catch(n){console.warn("[HR Advances] Cloud delete terkendala hak akses/offline:",n)}Me=Me.filter(n=>(n.advanceId||n.id)!==e),c.salaryAdvances=Me;try{localStorage.setItem("freshmart_salary_advances",JSON.stringify(c.salaryAdvances)),await Kt()}catch{}re(`Catatan kasbon "${t}" berhasil dihapus`,"success");const s=f("cashier-panel-advances");s&&At(s)}catch(s){console.error("[HR Advances] Gagal menghapus kasbon:",s),re("Gagal menghapus: "+s.message,"error")}finally{Ve()}},"Ya, Hapus",!0)};typeof window<"u"&&(window.loadSalaryAdvances=vs,window.renderSalaryAdvancesView=At,window.filterAdvanceStatus=$n,window.openSalaryAdvanceFormModal=Dn,window.closeSalaryAdvanceFormModal=ks,window.calculateAdvanceInstallment=Ps,window.onAdvanceEmployeeChange=Cn,window.saveSalaryAdvance=Ln,window.openAdvanceDetailModal=Rn,window.closeAdvanceDetailModal=In,window.promptManualRepayment=Nn,window.recordAdvanceRepayment=As,window.deleteSalaryAdvance=On);let ke=new Date().toISOString().split("T")[0],Ge=[];const Ts=async()=>{try{if(typeof window<"u"&&typeof window.saveApp=="function")return await window.saveApp();const e=await jt(()=>import("./module-pos-BTl17EoF.js").then(t=>t.W),__vite__mapDeps([2,3,4,1]),import.meta.url);if(typeof e?.saveApp=="function")return await e.saveApp()}catch{}},ga=[{key:"present",label:"Hadir",badgeClass:"bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200",icon:"fa-check"},{key:"late",label:"Terlambat",badgeClass:"bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-200",icon:"fa-clock"},{key:"permit",label:"Izin",badgeClass:"bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-200",icon:"fa-envelope-open-text"},{key:"sick",label:"Sakit",badgeClass:"bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-200",icon:"fa-notes-medical"},{key:"alpha",label:"Alpha",badgeClass:"bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-200",icon:"fa-xmark"}],Yt=(e,t)=>`ATT-${e}-${t.replace(/[^a-zA-Z0-9]/g,"")}`,Ss=async(e=ke)=>{ke=e;try{let t=[],s=!1;try{const n=await de.collection("freshmart").doc("cms_data").collection("attendances").where("date","==",e).get();n&&!n.empty&&(t=n.docs.map(a=>({id:a.id,...a.data()})),s=!0)}catch{}if(!s||t.length===0){let n=Array.isArray(c.attendances)?c.attendances:[];if(n.length===0)try{n=JSON.parse(localStorage.getItem("freshmart_attendances")||"[]"),Array.isArray(n)&&n.length>0&&(c.attendances=n)}catch{}const a=n.filter(o=>o.date===e);a.length>0&&(t=a)}return Ge=t,t}catch(t){return console.error("[HR Attendance] Gagal memuat absensi tanggal:",e,t),Ge=(Array.isArray(c.attendances)?c.attendances:[]).filter(n=>n.date===e),Ge}},Qt=async e=>{if(!e)return;e.innerHTML=`
    <div class="text-center py-16">
        <i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i>
        <p class="text-xs text-slate-400 mt-2">Memuat lembar presensi tim...</p>
    </div>`,await Ss(ke);const t=Jt(),s=new Map;Ge.forEach(d=>{s.set(d.employeeId||d.employeeUid,d)});let n=0,a=0,o=0,r=0,l=0;t.forEach(d=>{const m=s.get(d.employeeId)||s.get(d.uid),u=m?m.status:"unrecorded";u==="present"?(n++,l+=parseFloat(m.allowanceEarned)||parseFloat(d.dailyAllowance)||0):u==="late"?(a++,l+=parseFloat(m.allowanceEarned)||parseFloat(d.dailyAllowance)||0):u==="permit"||u==="sick"?o++:u==="alpha"&&r++});const p=ke===new Date().toISOString().split("T")[0];e.innerHTML=`
    <div class="space-y-4">
        <!-- Date Selector & Quick Controls -->
        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <i class="fa-solid fa-calendar-day" style="color: var(--color-primary)"></i>
                    <span>Tanggal Presensi:</span>
                </span>
                <button onclick="window.navigateAttendanceDate(-1)" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer border border-slate-200/80 dark:border-slate-700" title="Hari Sebelumnya">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <input id="att-date-picker" type="date" value="${ke}" onchange="window.onAttendanceDateChanged(this.value)"
                    class="h-9 border border-slate-200 dark:border-slate-700 rounded-xl px-3 text-xs font-bold bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                <button onclick="window.navigateAttendanceDate(1)" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer border border-slate-200/80 dark:border-slate-700" title="Hari Berikutnya">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
                ${p?"":`
                <button onclick="window.onAttendanceDateChanged('${new Date().toISOString().split("T")[0]}')"
                    class="h-9 px-3.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 transition-all active:scale-95 cursor-pointer">
                    Hari Ini
                </button>`}
            </div>

            <div class="flex items-center gap-2">
                <button onclick="window.openMonthlyAttendanceRecapModal('${ke.slice(0,7)}')"
                    class="h-9 px-3.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600 shadow-2xs hover:bg-slate-50 dark:hover:bg-slate-600 transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
                    title="Rekapitulasi Presensi & Kedisiplinan Tim">
                    <i class="fa-solid fa-chart-pie" style="color: var(--color-primary)"></i>
                    <span>Rekap Bulanan</span>
                </button>
                <button onclick="window.bulkMarkAllPresent()"
                    class="h-9 px-4 rounded-xl text-xs font-black text-white shadow-xs active:scale-95 transition-all cursor-pointer flex items-center gap-2 hover:opacity-95"
                    style="background: var(--color-primary)">
                    <i class="fa-solid fa-bolt text-xs"></i>
                    <span>Hadirkan Semua Staf</span>
                </button>
            </div>
        </div>

        <!-- Bento Ringkasan Kehadiran Hari Ini (Theme Harmonized) -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
            <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Hadir Tepat Waktu</span>
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                        <i class="fa-solid fa-user-check"></i>
                    </div>
                </div>
                <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${n} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Staf</span></p>
                <p class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">Presensi terpenuhi</p>
            </div>
            <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Terlambat</span>
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 border border-amber-200 dark:border-amber-800/60 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400">
                        <i class="fa-solid fa-user-clock"></i>
                    </div>
                </div>
                <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${a} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Staf</span></p>
                <p class="text-[10px] font-bold text-amber-600 dark:text-amber-400 mt-0.5">Jam masuk lewat batas</p>
            </div>
            <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Izin / Sakit</span>
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 border border-blue-200 dark:border-blue-800/60 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                        <i class="fa-solid fa-calendar-minus"></i>
                    </div>
                </div>
                <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${o} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Staf</span></p>
                <p class="text-[10px] font-bold text-blue-600 dark:text-blue-400 mt-0.5">Tercatat izin resmi</p>
            </div>
            <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Alpha / Belum Tercatat</span>
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 border border-rose-200 dark:border-rose-800/60 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400">
                        <i class="fa-solid fa-user-xmark"></i>
                    </div>
                </div>
                <p class="text-2xl font-black text-slate-800 dark:text-white tracking-tight">${r+(t.length-n-a-o-r)} <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">Staf</span></p>
                <p class="text-[10px] font-bold text-rose-500 mt-0.5">Uang makan Rp 0</p>
            </div>
        </div>

        <!-- Daftar Kehadiran Staf -->
        <div class="space-y-2.5">
            ${t.map(d=>{const m=s.get(d.employeeId)||s.get(d.uid),u=m?m.status:"present",x=!!m,h=m?.clockIn||"08:00",v=m?.clockOut||"17:00";m?.notes;const b=parseFloat(d.dailyAllowance)||0;x?parseFloat(m?.allowanceEarned):b>0;const S=(d.name||"ST").trim().split(/\s+/).slice(0,2).map(M=>M[0]).join("").toUpperCase(),L=d.role==="owner"||d.employeeId==="OWN-001";return`
                <div class="p-4 bg-white dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all flex flex-col xl:flex-row xl:items-center justify-between gap-3.5">
                    <div class="flex items-center gap-3.5 min-w-0 flex-1">
                        <div class="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-xs shrink-0 shadow-2xs border ${L?"border-amber-300 dark:border-amber-600/60 bg-amber-50/80 dark:bg-amber-950/40 text-amber-500":"border-[rgba(var(--color-primary-rgb),0.25)] bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)]"}">
                            ${L?'<i class="fa-solid fa-crown text-amber-500 text-sm"></i>':S}
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-tight sm:whitespace-nowrap">${i(d.name)}</span>
                                <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 whitespace-nowrap shrink-0">
                                    ${i(d.employeeId)}
                                </span>
                                ${x?`
                                    <span class="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 whitespace-nowrap shrink-0">
                                        <i class="fa-solid fa-circle-check"></i> Tersimpan
                                    </span>
                                `:`
                                    <span class="text-[9px] font-bold text-amber-500 flex items-center gap-1 whitespace-nowrap shrink-0">
                                        <i class="fa-solid fa-clock"></i> Belum Disimpan
                                    </span>
                                `}
                            </div>
                            <div class="flex items-center text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap gap-x-2 gap-y-0.5">
                                <span class="font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">${i(d.position)}</span>
                                <span class="inline-flex items-center whitespace-nowrap">
                                    <span class="text-slate-300 dark:text-slate-600 mr-2">•</span>
                                    <span>Uang Makan: <strong class="text-emerald-600 dark:text-emerald-400 font-bold">${y(b)}</strong></span>
                                </span>
                                ${m?.source==="pos_shift"?`
                                <span class="inline-flex items-center text-[10px] text-blue-500 font-bold whitespace-nowrap">
                                    <span class="text-slate-300 dark:text-slate-600 mr-2">•</span>
                                    <i class="fa-solid fa-cash-register mr-1"></i>Otomatis Buka Shift
                                </span>`:""}
                            </div>
                        </div>
                    </div>

                    <!-- Status Selector Buttons & Jam Kerja -->
                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                        <!-- Status Chips -->
                        <div class="grid grid-cols-5 gap-1 p-1 bg-slate-100 dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
                            ${ga.map(M=>{const O=u===M.key;let A="bg-slate-800 text-white";return M.key==="present"?A="bg-emerald-600 text-white shadow-2xs font-black":M.key==="late"?A="bg-amber-500 text-white shadow-2xs font-black":M.key==="permit"?A="bg-blue-600 text-white shadow-2xs font-black":M.key==="sick"?A="bg-purple-600 text-white shadow-2xs font-black":M.key==="alpha"&&(A="bg-rose-600 text-white shadow-2xs font-black"),`
                                <button type="button" onclick="window.setQuickAttendanceStatus('${i(d.employeeId)}', '${M.key}')"
                                    id="btn-att-status-${i(d.employeeId)}-${M.key}"
                                    data-status="${M.key}"
                                    data-selected="${O?"true":"false"}"
                                    class="att-status-btn-${i(d.employeeId)} px-2.5 py-1.5 rounded-xl text-[10px] font-bold transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 ${O?A:"text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-800/60"}">
                                    <i class="fa-solid ${M.icon} text-[9px]"></i>
                                    <span>${M.label}</span>
                                </button>
                            `}).join("")}
                        </div>

                        <!-- Jam Masuk & Keluar -->
                        <div class="flex items-center gap-1 text-xs">
                            <input id="att-in-${i(d.employeeId)}" type="time" value="${h}" title="Jam Masuk"
                                class="w-[96px] sm:w-[104px] min-w-[96px] h-9 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono font-bold text-center text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                            <span class="text-slate-400 font-bold">-</span>
                            <input id="att-out-${i(d.employeeId)}" type="time" value="${v}" title="Jam Pulang"
                                class="w-[96px] sm:w-[104px] min-w-[96px] h-9 px-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono font-bold text-center text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>

                        <!-- Tombol Simpan Row -->
                        <button onclick="window.saveSingleAttendance('${i(d.employeeId)}', '${i(d.uid||d.employeeId)}', '${i(d.name)}', '${i(d.position)}', '${i(d.role)}', ${b})"
                            id="btn-save-att-${i(d.employeeId)}"
                            class="h-9 px-4 rounded-xl text-xs font-black text-white transition-all active:scale-95 cursor-pointer shadow-xs flex items-center justify-center gap-1.5 hover:opacity-95"
                            style="background: var(--color-primary)">
                            <i class="fa-solid fa-floppy-disk text-[10px]"></i>
                            <span>Simpan</span>
                        </button>
                    </div>
                </div>`}).join("")}
        </div>
    </div>`},En=e=>{const t=new Date(ke);t.setDate(t.getDate()+e),ke=t.toISOString().split("T")[0];const s=f("cashier-panel-attendance");s&&Qt(s)},Bn=e=>{ke=e;const t=f("cashier-panel-attendance");t&&Qt(t)},Hn=(e,t)=>{document.querySelectorAll(`.att-status-btn-${e}`).forEach(n=>{n.className=`att-status-btn-${e} px-2.5 py-1.5 rounded-xl text-[10px] font-bold transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-800/60`,n.setAttribute("data-selected","false")});const s=f(`btn-att-status-${e}-${t}`);if(s){let n="bg-slate-800 text-white";t==="present"?n="bg-emerald-600 text-white shadow-2xs font-black":t==="late"?n="bg-amber-500 text-white shadow-2xs font-black":t==="permit"?n="bg-blue-600 text-white shadow-2xs font-black":t==="sick"?n="bg-purple-600 text-white shadow-2xs font-black":t==="alpha"&&(n="bg-rose-600 text-white shadow-2xs font-black"),s.className=`att-status-btn-${e} px-2.5 py-1.5 rounded-xl text-[10px] font-black transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1 ${n}`,s.setAttribute("data-selected","true"),s.setAttribute("data-selected-status",t)}},Fn=async(e,t,s,n,a,o)=>{if(!nt("mencatat absensi karyawan"))return;let r="present";ga.forEach(b=>{const S=f(`btn-att-status-${e}-${b.key}`);S&&(S.getAttribute("data-selected")==="true"||S.getAttribute("data-selected-status")===b.key||S.classList.contains("bg-emerald-600")||S.classList.contains("bg-amber-500")||S.classList.contains("bg-blue-600")||S.classList.contains("bg-purple-600")||S.classList.contains("bg-rose-600")||S.classList.contains("bg-white")||S.classList.contains("dark:bg-slate-800"))&&(r=b.key)});const l=f(`att-in-${e}`)?.value||"08:00",p=f(`att-out-${e}`)?.value||"17:00",d=r==="present"||r==="late"?o:0,m=Yt(ke,e),u={attendanceId:m,date:ke,employeeUid:t,employeeId:e,employeeName:s,position:n,role:a,status:r,clockIn:l,clockOut:p,allowanceEarned:d,notes:"",source:"manual",updatedAt:Le.firestore.FieldValue.serverTimestamp(),recordedBy:st.currentUser?.uid||"owner"},x=f(`btn-save-att-${e}`);x&&(x.disabled=!0,x.innerHTML='<i class="fa-solid fa-spinner fa-spin text-[10px]"></i>');const h=Ge.findIndex(b=>b.attendanceId===m);h>-1?Ge[h]={id:m,...u}:Ge.push({id:m,...u}),Array.isArray(c.attendances)||(c.attendances=[]);const v=c.attendances.findIndex(b=>b.attendanceId===m);v>-1?c.attendances[v]={id:m,...u}:c.attendances.push({id:m,...u});try{localStorage.setItem("freshmart_attendances",JSON.stringify(c.attendances))}catch{}try{await de.collection("freshmart").doc("cms_data").collection("attendances").doc(m).set(u,{merge:!0})}catch(b){console.warn("[HR Attendance] Cloud sync terkendala hak akses/offline, presensi tetap tersimpan di lokal:",b)}try{await Ts()}catch{}re(`Presensi ${s} (${r.toUpperCase()}) tersimpan!`,"success"),x&&(x.disabled=!1,x.innerHTML='<i class="fa-solid fa-check text-[10px]"></i><span>Tersimpan</span>')},Kn=async()=>{if(!nt("mencatat presensi massal"))return;const e=Jt();if(e.length!==0){je("Mencatat kehadiran seluruh staf...");try{const t=[];for(const n of e){const a=n.employeeId||"EMP-001",o=Yt(ke,a),r=parseFloat(n.dailyAllowance)||0,l={attendanceId:o,date:ke,employeeUid:n.uid||a,employeeId:a,employeeName:n.name||"Karyawan",position:n.position||"Staf Toko",role:n.role||"staff",status:"present",clockIn:"08:00",clockOut:"17:00",allowanceEarned:r,notes:"Hadir massal 1-klik",source:"bulk",updatedAt:Le.firestore.FieldValue.serverTimestamp(),recordedBy:st.currentUser?.uid||"owner"};t.push({id:o,...l})}Ge=t,Array.isArray(c.attendances)||(c.attendances=[]),t.forEach(n=>{const a=c.attendances.findIndex(o=>o.attendanceId===n.attendanceId);a>-1?c.attendances[a]=n:c.attendances.push(n)});try{localStorage.setItem("freshmart_attendances",JSON.stringify(c.attendances))}catch{}try{const n=de.batch();for(const a of t){const o=de.collection("freshmart").doc("cms_data").collection("attendances").doc(a.attendanceId);n.set(o,a,{merge:!0})}await n.commit()}catch(n){console.warn("[HR Attendance] Cloud batch presensi massal terkendala hak akses/offline, tetap tersimpan lokal:",n)}try{await Ts()}catch{}re(`Presensi seluruh ${e.length} staf berhasil dicatat sebagai HADIR!`,"success");const s=f("cashier-panel-attendance");s&&Qt(s)}catch(t){console.error("[HR Attendance] Gagal presensi massal:",t),re("Gagal presensi massal: "+t.message,"error")}finally{Ve()}}},jn=async(e,t)=>{try{if(!e)return;const s=new Date().toISOString().split("T")[0],n=e.employeeId||"EMP-001",a=Yt(s,n);if(Array.isArray(c.attendances)||(c.attendances=[]),c.attendances.some(u=>u.attendanceId===a))return;const r=String(t?.getHours?t.getHours():new Date().getHours()).padStart(2,"0"),l=String(t?.getMinutes?t.getMinutes():new Date().getMinutes()).padStart(2,"0"),p=`${r}:${l}`,d=parseFloat(e.dailyAllowance)||2e4,m={attendanceId:a,date:s,employeeUid:e.uid||n,employeeId:n,employeeName:e.name||"Kasir POS",position:e.position||"Kasir POS",role:e.role||"cashier",status:"present",clockIn:p,clockOut:"17:00",allowanceEarned:d,notes:"Absensi otomatis dari Buka Shift Kasir",source:"pos_shift",createdAt:Le.firestore.FieldValue.serverTimestamp()};c.attendances.push({id:a,...m});try{localStorage.setItem("freshmart_attendances",JSON.stringify(c.attendances))}catch{}try{const u=de.collection("freshmart").doc("cms_data").collection("attendances").doc(a);(await u.get()).exists||await u.set(m)}catch{}console.log("[HR Attendance] Presensi kasir tercatat otomatis dari shift:",n,p)}catch(s){console.warn("[HR Attendance] Gagal auto-record shift attendance:",s.message)}},$s=(e=[],t,s)=>{const n=e.filter(m=>{const u=m.date&&m.date.startsWith(t),x=s?m.employeeId===s||m.employeeUid===s:!0;return u&&x});let a=0,o=0,r=0,l=0,p=0,d=0;return n.forEach(m=>{m.status==="present"?(a++,d+=parseFloat(m.allowanceEarned)||0):m.status==="late"?(o++,d+=parseFloat(m.allowanceEarned)||0):m.status==="permit"?r++:m.status==="sick"?l++:m.status==="alpha"&&p++}),{totalRecords:n.length,presentDays:a,lateDays:o,permitDays:r,sickDays:l,alphaDays:p,totalAllowance:d}},Je=(e=new Date().toISOString().slice(0,7))=>{const t=Array.isArray(c.attendances)?c.attendances:[],s=Jt(),n=An(e);let a=0,o=0,r=0,l=0,p=0,d=0;const m=s.map(v=>{const b=v.employeeId||v.uid,S=$s(t,e,b),L=S.presentDays||0,H=S.lateDays||0,M=S.permitDays||0,O=S.sickDays||0,A=S.alphaDays||0,E=L+H,G=S.totalRecords||E+M+O+A,K=S.totalAllowance||0,$=G>0?Math.min(100,Math.round((L+H*.9)/G*1e3)/10):0;return a+=K,o+=L,r+=H,l+=M,p+=O,d+=A,{employeeId:b,employeeUid:v.uid||"",name:v.name||"Karyawan",position:v.position||"Staf Toko",role:v.role||"staff",dailyAllowanceRate:parseFloat(v.dailyAllowance)||0,presentDays:L,lateDays:H,permitDays:M,sickDays:O,alphaDays:A,totalWorkDays:E,totalLoggedDays:G,attendanceRate:$,totalAllowance:K}}),u=o+r,x=u+l+p+d,h=x>0?Math.min(100,Math.round((o+r*.9)/x*1e3)/10):0;return{period:e,periodLabel:n,items:m,totalMembers:s.length,totalPresentDays:o,totalLateDays:r,totalPermitDays:l,totalSickDays:p,totalAlphaDays:d,totalWorkDays:u,totalTeamAllowance:a,avgAttendanceRate:h}},Ms=async(e=new Date().toISOString().slice(0,7))=>{try{let t=Array.isArray(c.attendances)?c.attendances:[];if(t.length===0)try{t=JSON.parse(localStorage.getItem("freshmart_attendances")||"[]"),Array.isArray(t)&&t.length>0&&(c.attendances=t)}catch{}try{const s=`${e}-01`,n=`${e}-31`,a=await de.collection("freshmart").doc("cms_data").collection("attendances").where("date",">=",s).where("date","<=",n).get();if(a&&!a.empty){const o=a.docs.map(r=>({id:r.id,...r.data()}));Array.isArray(c.attendances)||(c.attendances=[]),o.forEach(r=>{const l=r.attendanceId||r.id,p=c.attendances.findIndex(d=>(d.attendanceId||d.id)===l);p>=0?c.attendances[p]={...c.attendances[p],...r}:c.attendances.push(r)});try{localStorage.setItem("freshmart_attendances",JSON.stringify(c.attendances))}catch{}}}catch(s){console.warn("[HR Attendance] Fallback offline untuk rekap bulan:",e,s.message)}return Je(e)}catch(t){return console.error("[HR Attendance] Gagal memuat absensi bulanan:",t),Je(e)}},_n=async(e=(ke||new Date().toISOString().split("T")[0]).slice(0,7))=>{let t=f("modal-attendance-rekap");t&&t.remove(),je(),await Ms(e),Ve();const s=Je(e),n=c.store||{name:"TOKO PUTRI UTAMA TEKNIK"};t=document.createElement("div"),t.id="modal-attendance-rekap",t.className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 transition-opacity duration-200",t.style.opacity="0",t.innerHTML=`
    <div id="attendance-rekap-modal-box" class="modal-bottom-sheet w-full sm:max-w-4xl bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[88vh] overflow-hidden transform transition-all duration-200 scale-95">
        
        <!-- Pull Indicator (Mobile Native Bottom Sheet) -->
        <div class="pull-indicator w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mx-auto mt-2.5 mb-1 sm:hidden shrink-0"></div>

        <!-- Modal Header (Solid Clean & Anti-Truncate) -->
        <div class="px-4 sm:px-6 py-3 sm:py-3.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 shrink-0">
            <div class="flex items-center justify-between gap-2.5">
                <div class="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xs"
                        style="background: var(--color-primary)">
                        <i class="fa-solid fa-clipboard-user text-sm sm:text-base"></i>
                    </div>
                    <div class="min-w-0 flex-1">
                        <h3 class="font-black text-sm sm:text-base text-slate-900 dark:text-white leading-tight truncate">
                            Rekapitulasi Presensi Tim
                        </h3>
                        <p class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            ${i(n.name||"Toko Putri")} • <strong class="text-slate-700 dark:text-slate-200">${i(s.periodLabel)}</strong>
                        </p>
                    </div>
                </div>

                <!-- Responsive Period Pickers & Close Button (Compact Top Pill, Zero Vertical Waste) -->
                <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <!-- Desktop Period Picker -->
                    <div class="hidden sm:flex items-center gap-1.5 bg-white dark:bg-slate-800 py-1 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
                        <i class="fa-solid fa-calendar-days text-[var(--color-primary)] text-xs"></i>
                        <input type="month" id="att-rekap-period-picker-desktop" value="${e}"
                            onchange="window.openMonthlyAttendanceRecapModal(this.value)"
                            class="bg-transparent text-xs font-black text-slate-800 dark:text-white border-0 focus:outline-none cursor-pointer">
                    </div>
                    <!-- Mobile Period Picker -->
                    <div class="sm:hidden flex items-center gap-1 bg-white dark:bg-slate-800 py-1 px-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
                        <i class="fa-solid fa-calendar-days text-[var(--color-primary)] text-[10px]"></i>
                        <input type="month" id="att-rekap-period-picker" value="${e}"
                            onchange="window.openMonthlyAttendanceRecapModal(this.value)"
                            class="bg-transparent text-[11px] font-black text-slate-800 dark:text-white border-0 focus:outline-none cursor-pointer max-w-[108px]">
                    </div>
                    <button onclick="window.closeMonthlyAttendanceRecapModal()" 
                        class="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 hover:text-slate-800 dark:hover:text-white text-base flex items-center justify-center transition-all cursor-pointer shrink-0"
                        title="Tutup">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Modal Body -->
        <div class="p-3.5 sm:p-5 overflow-y-auto space-y-3 sm:space-y-4 flex-1 custom-scrollbar text-xs">
            
            <!-- 4 Bento KPI Kehadiran Bulanan (Compact Native App Bento Layout) -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
                <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-0.5">
                        <span class="text-[9.5px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Rata-Rata Disiplin</span>
                        <div class="w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-[var(--color-primary)]">
                            <i class="fa-solid fa-chart-line text-[10px]"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">${s.avgAttendanceRate}%</p>
                    <p class="text-[9px] font-semibold text-slate-400 truncate">Tingkat kehadiran tim</p>
                </div>

                <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-0.5">
                        <span class="text-[9.5px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Hari Hadir</span>
                        <div class="w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-[var(--color-primary)]">
                            <i class="fa-solid fa-user-check text-[10px]"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">${s.totalWorkDays} <span class="text-xs font-semibold text-slate-400">Hari</span></p>
                    <p class="text-[9px] font-semibold text-slate-400 truncate">${s.totalPresentDays} Tepat, ${s.totalLateDays} Terlambat</p>
                </div>

                <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-0.5">
                        <span class="text-[9.5px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Izin, Sakit &amp; Alpha</span>
                        <div class="w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-[var(--color-primary)]">
                            <i class="fa-solid fa-user-clock text-[10px]"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">${s.totalPermitDays+s.totalSickDays+s.totalAlphaDays} <span class="text-xs font-semibold text-slate-400">Hari</span></p>
                    <p class="text-[9px] font-semibold text-slate-400 truncate">${s.totalPermitDays} Iz, ${s.totalSickDays} Sk, ${s.totalAlphaDays} Al</p>
                </div>

                <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-0.5">
                        <span class="text-[9.5px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Hak Uang Makan</span>
                        <div class="w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-[var(--color-primary)]">
                            <i class="fa-solid fa-hand-holding-dollar text-[10px]"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono tracking-tight">${y(s.totalTeamAllowance)}</p>
                    <p class="text-[9px] font-semibold text-slate-400 truncate">Siap ditarik ke Payroll</p>
                </div>
            </div>

            <!-- Realtime Search Bar Staf -->
            <div class="flex items-center justify-between gap-2">
                <div class="relative flex-1 min-w-0">
                    <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
                    <input type="text" id="att-rekap-search" placeholder="Cari nama / jabatan..."
                        oninput="window.filterAttendanceRecapTable(this.value)"
                        class="w-full h-10 min-h-[40px] pl-8 pr-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <span class="h-10 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-bold text-slate-500 dark:text-slate-400 shrink-0 whitespace-nowrap flex items-center">
                    Total: <strong class="text-slate-800 dark:text-slate-200 ml-1">${s.totalMembers} Staf</strong>
                </span>
            </div>

            <!-- Matriks Tabel Presensi Karyawan -->
            <div class="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-2xs bg-white dark:bg-slate-800/60">
                <div class="overflow-x-auto custom-scrollbar">
                    <table class="w-full text-left text-xs whitespace-nowrap">
                        <thead class="bg-slate-50 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 font-black uppercase text-[10px] tracking-wider border-b border-slate-200 dark:border-slate-700">
                            <tr>
                                <th class="py-2.5 px-3 text-center w-10">No</th>
                                <th class="py-2.5 px-3">Karyawan</th>
                                <th class="py-2.5 px-2 text-center">Hadir</th>
                                <th class="py-2.5 px-2 text-center">Terlambat</th>
                                <th class="py-2.5 px-2 text-center">Izin</th>
                                <th class="py-2.5 px-2 text-center">Sakit</th>
                                <th class="py-2.5 px-2 text-center">Alpha</th>
                                <th class="py-2.5 px-3 text-center">Total Masuk</th>
                                <th class="py-2.5 px-3 text-center">% Disiplin</th>
                                <th class="py-2.5 px-3 text-right">Hak Tunjangan</th>
                            </tr>
                        </thead>
                        <tbody id="att-rekap-tbody" class="divide-y divide-slate-100 dark:divide-slate-700/60">
                            ${s.items.map((a,o)=>{const r=a.attendanceRate>=95?"bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300":a.attendanceRate>=80?"bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300":"bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300",l=a.role==="owner"||a.employeeId==="OWN-001",p=i((a.name||"K").split(" ").map(m=>m[0]).slice(0,2).join("").toUpperCase()),d=l?'<i class="fa-solid fa-crown text-amber-500 text-[10px]"></i>':p;return`
                                <tr class="att-rekap-row hover:bg-slate-50/70 dark:hover:bg-slate-700/40 transition-colors" data-name="${i(a.name.toLowerCase())}" data-pos="${i(a.position.toLowerCase())}">
                                    <td class="py-2.5 px-3 text-center font-mono text-slate-400">${o+1}</td>
                                    <td class="py-2.5 px-3">
                                        <div class="flex items-center gap-2.5">
                                            <div class="w-7 h-7 rounded-xl flex items-center justify-center font-black text-[10px] shrink-0 border ${l?"border-amber-300 dark:border-amber-600/60 bg-amber-50/80 dark:bg-amber-950/40 text-amber-500":"border-[rgba(var(--color-primary-rgb),0.25)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)]"}">
                                                ${d}
                                            </div>
                                            <div class="min-w-0">
                                                <div class="font-black text-slate-800 dark:text-white truncate">${i(a.name)}</div>
                                                <div class="text-[10px] text-slate-400 flex items-center gap-1.5 whitespace-nowrap">
                                                    <span class="font-mono">${i(a.employeeId)}</span>
                                                    <span class="text-slate-300 dark:text-slate-600">•</span>
                                                    <span class="truncate">${i(a.position)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-2 text-center font-mono font-bold text-slate-800 dark:text-slate-100">${a.presentDays}</td>
                                    <td class="py-2.5 px-2 text-center font-mono font-bold ${a.lateDays>0?"text-amber-600 dark:text-amber-400":"text-slate-400"}">${a.lateDays}</td>
                                    <td class="py-2.5 px-2 text-center font-mono text-slate-500">${a.permitDays}</td>
                                    <td class="py-2.5 px-2 text-center font-mono text-slate-500">${a.sickDays}</td>
                                    <td class="py-2.5 px-2 text-center font-mono font-bold ${a.alphaDays>0?"text-rose-600 dark:text-rose-400":"text-slate-400"}">${a.alphaDays}</td>
                                    <td class="py-2.5 px-3 text-center font-mono font-black text-slate-800 dark:text-white">${a.totalWorkDays} Hari</td>
                                    <td class="py-2.5 px-3 text-center">
                                        <span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-black border ${r}">
                                            ${a.attendanceRate}%
                                        </span>
                                    </td>
                                    <td class="py-2.5 px-3 text-right font-mono font-black text-slate-900 dark:text-white">${y(a.totalAllowance)}</td>
                                </tr>`}).join("")}
                        </tbody>
                        <tfoot class="bg-slate-50 dark:bg-slate-800/90 font-black text-slate-800 dark:text-white border-t-2 border-slate-200 dark:border-slate-700">
                            <tr>
                                <td colspan="2" class="py-2.5 px-3 text-right font-black">TOTAL TIM (${s.totalMembers} Staf):</td>
                                <td class="py-2.5 px-2 text-center font-mono font-black">${s.totalPresentDays}</td>
                                <td class="py-2.5 px-2 text-center font-mono font-black ${s.totalLateDays>0?"text-amber-600 dark:text-amber-400":""}">${s.totalLateDays}</td>
                                <td class="py-2.5 px-2 text-center font-mono font-black">${s.totalPermitDays}</td>
                                <td class="py-2.5 px-2 text-center font-mono font-black">${s.totalSickDays}</td>
                                <td class="py-2.5 px-2 text-center font-mono font-black ${s.totalAlphaDays>0?"text-rose-600 dark:text-rose-400":""}">${s.totalAlphaDays}</td>
                                <td class="py-2.5 px-3 text-center font-mono font-black">${s.totalWorkDays} Hari</td>
                                <td class="py-2.5 px-3 text-center">
                                    <span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-black border ${s.avgAttendanceRate>=90?"bg-emerald-100 text-emerald-800 border-emerald-300":"bg-amber-100 text-amber-800 border-amber-300"}">
                                        ${s.avgAttendanceRate}%
                                    </span>
                                </td>
                                <td class="py-2.5 px-3 text-right font-mono font-black text-slate-900 dark:text-white">${y(s.totalTeamAllowance)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

        <!-- Modal Footer (Single Clean Responsive Action Bar) -->
        <div class="p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 shrink-0 bg-white dark:bg-slate-900 pb-[max(0.875rem,env(safe-area-inset-bottom))]">
            <button onclick="window.closeMonthlyAttendanceRecapModal()" 
                class="min-h-[44px] px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer shrink-0">
                Tutup
            </button>
            <button onclick="window.exportMonthlyAttendanceCSV('${e}')"
                class="flex-1 min-h-[44px] px-3 sm:px-4 rounded-xl text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95 cursor-pointer shadow-2xs flex items-center justify-center gap-1.5 whitespace-nowrap">
                <i class="fa-solid fa-file-excel text-emerald-600 text-xs"></i>
                <span>Ekspor CSV</span>
            </button>
            <button onclick="window.openDocPreview ? window.openDocPreview('attendance_recap', '${e}') : window.printMonthlyAttendanceA4('${e}')"
                class="btn-native-action flex-1 min-h-[44px] px-3.5 sm:px-5 rounded-xl text-white font-black text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap"
                style="background: var(--color-primary);">
                <i class="fa-solid fa-file-invoice text-xs"></i>
                <span class="hidden sm:inline">Pratinjau &amp; Cetak A4</span>
                <span class="sm:hidden">Preview A4</span>
            </button>
        </div>
    </div>`,document.body.appendChild(t),typeof window.pushModalHistory=="function"&&window.pushModalHistory("attendanceRecap"),setTimeout(()=>{t.style.opacity="1";const a=f("attendance-rekap-modal-box");a&&a.classList.remove("scale-95")},10)},Un=(e=!1)=>{const t=()=>{const s=f("modal-attendance-rekap");s&&(s.style.opacity="0",setTimeout(()=>s.remove(),200))};typeof window.requestCloseModal=="function"?window.requestCloseModal("attendanceRecap",e,t):t()},zn=(e="")=>{const t=(e||"").toLowerCase().trim();document.querySelectorAll(".att-rekap-row").forEach(n=>{const a=n.getAttribute("data-name")||"",o=n.getAttribute("data-pos")||"";!t||a.includes(t)||o.includes(t)?n.classList.remove("hidden"):n.classList.add("hidden")})},Wn=(e=new Date().toISOString().slice(0,7))=>{const t=Je(e),s=c.store?.name||"TOKO PUTRI UTAMA TEKNIK",n=["No","ID Karyawan","Nama Karyawan","Jabatan","Role","Hadir (Hari)","Terlambat (Hari)","Izin (Hari)","Sakit (Hari)","Alpha (Hari)","Total Masuk (Hari)","Disiplin Kehadiran (%)","Total Uang Makan / Tunjangan (Rp)"],a=t.items.map((m,u)=>[u+1,`"${m.employeeId}"`,`"${(m.name||"").replace(/"/g,'""')}"`,`"${(m.position||"").replace(/"/g,'""')}"`,`"${m.role}"`,m.presentDays,m.lateDays,m.permitDays,m.sickDays,m.alphaDays,m.totalWorkDays,`"${m.attendanceRate}%"`,m.totalAllowance]);a.push(["",'"TOTAL"',`"${t.totalMembers} Staf"`,'""','""',t.totalPresentDays,t.totalLateDays,t.totalPermitDays,t.totalSickDays,t.totalAlphaDays,t.totalWorkDays,`"${t.avgAttendanceRate}%"`,t.totalTeamAllowance]);const o="\uFEFF"+['"REKAPITULASI PRESENSI & KEDISIPLINAN KARYAWAN"',`"Toko: ${s.replace(/"/g,'""')}"`,`"Periode: ${t.periodLabel}"`,`"Tanggal Ekspor: ${new Date().toLocaleDateString("id-ID")}"`,"",n.join(","),...a.map(m=>m.join(","))].join(`\r
`),r=new Blob([o],{type:"text/csv;charset=utf-8;"}),l=URL.createObjectURL(r),p=document.createElement("a");p.href=l;const d=s.replace(/[^a-zA-Z0-9]/g,"_");p.download=`Rekap_Presensi_${d}_${e}.csv`,document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(l),re(`Rekap presensi periode ${t.periodLabel} berhasil diekspor ke CSV!`,"success")},qn=(e=new Date().toISOString().slice(0,7))=>{if(typeof window<"u"&&typeof window.openDocPreview=="function"){window.openDocPreview("attendance_recap",e);return}const t=Je(e),s=c.store||{name:"TOKO PUTRI UTAMA TEKNIK"},n=new Date().toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"}),a=`<!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <title>Rekap Presensi - ${i(t.periodLabel)} - ${i(s.name||"Toko Putri")}</title>
        <style>
            @page {
                size: A4 landscape;
                margin: 12mm 15mm;
            }
            * { box-sizing: border-box; }
            body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
                margin: 0;
                padding: 20px;
                color: #0f172a;
                background: #fff;
                font-size: 11px;
                line-height: 1.4;
            }
            .kop {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                border-bottom: 2px solid #0f172a;
                padding-bottom: 12px;
                margin-bottom: 16px;
            }
            .kop-title {
                font-size: 18px;
                font-weight: 900;
                letter-spacing: 0.5px;
                text-transform: uppercase;
                color: #0f172a;
            }
            .kop-sub {
                font-size: 11px;
                color: #475569;
                margin-top: 2px;
            }
            .doc-badge {
                display: inline-block;
                padding: 4px 12px;
                border: 1.5px solid #0f172a;
                font-weight: 900;
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1px;
                border-radius: 6px;
                margin-bottom: 4px;
            }
            .kpi-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 12px;
                margin-bottom: 16px;
            }
            .kpi-card {
                border: 1px solid #cbd5e1;
                border-radius: 8px;
                padding: 10px 14px;
                background: #f8fafc;
            }
            .kpi-label {
                font-size: 9.5px;
                font-weight: 800;
                text-transform: uppercase;
                color: #64748b;
            }
            .kpi-val {
                font-size: 16px;
                font-weight: 900;
                margin-top: 2px;
                color: #0f172a;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 20px;
            }
            th {
                background: #f1f5f9;
                border: 1px solid #cbd5e1;
                padding: 8px 10px;
                font-size: 10px;
                font-weight: 800;
                text-transform: uppercase;
                text-align: center;
            }
            td {
                border: 1px solid #cbd5e1;
                padding: 7px 10px;
                font-size: 10.5px;
            }
            .text-left { text-align: left; }
            .text-center { text-align: center; }
            .text-right { text-align: right; }
            .font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
            .badge-rate {
                display: inline-block;
                padding: 2px 8px;
                border-radius: 12px;
                font-weight: 800;
                font-size: 10px;
            }
            .rate-green { background: #dcfce7; color: #166534; }
            .rate-amber { background: #fef3c7; color: #92400e; }
            .rate-rose { background: #ffe4e6; color: #9f1239; }
            .sign-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 60px;
                text-align: center;
                margin-top: 30px;
                page-break-inside: avoid;
            }
            .sign-line {
                border-bottom: 1px solid #94a3b8;
                width: 60%;
                margin: 50px auto 6px auto;
            }
            @media print {
                body { padding: 0; }
                .no-print { display: none; }
            }
        </style>
    </head>
    <body onload="window.print();">
        <div class="kop">
            <div>
                <div class="kop-title">${i(s.name||"TOKO PUTRI UTAMA TEKNIK")}</div>
                <div class="kop-sub">${i(s.address||"Pusat Bahan Bangunan & Alat Teknik")}</div>
                <div class="kop-sub">WhatsApp: ${i(s.phone||s.wa||"-")}</div>
            </div>
            <div style="text-align: right;">
                <div class="doc-badge">REKAPITULASI PRESENSI KARYAWAN</div>
                <div style="font-size: 11px; color: #475569;">Periode: <strong>${i(t.periodLabel)}</strong></div>
                <div style="font-size: 10px; color: #64748b; margin-top: 2px;">Dicetak: ${n}</div>
            </div>
        </div>

        <div class="kpi-grid">
            <div class="kpi-card">
                <div class="kpi-label">Rata-Rata Disiplin Kehadiran</div>
                <div class="kpi-val" style="color: #059669;">${t.avgAttendanceRate}%</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-label">Total Hari Masuk Tim</div>
                <div class="kpi-val">${t.totalWorkDays} Hari Kerja</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-label">Total Izin / Sakit / Alpha</div>
                <div class="kpi-val" style="color: #475569;">${t.totalPermitDays} / ${t.totalSickDays} / ${t.totalAlphaDays}</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-label">Akumulasi Uang Makan / Tunjangan</div>
                <div class="kpi-val font-mono" style="color: #059669;">${y(t.totalTeamAllowance)}</div>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th style="width: 35px;">No</th>
                    <th class="text-left">Karyawan</th>
                    <th class="text-left">Jabatan</th>
                    <th>Hadir</th>
                    <th>Terlambat</th>
                    <th>Izin</th>
                    <th>Sakit</th>
                    <th>Alpha</th>
                    <th>Total Masuk</th>
                    <th>% Kehadiran</th>
                    <th class="text-right">Hak Tunjangan (Rp)</th>
                </tr>
            </thead>
            <tbody>
                ${t.items.map((r,l)=>{const p=r.attendanceRate>=95?"rate-green":r.attendanceRate>=80?"rate-amber":"rate-rose";return`
                    <tr>
                        <td class="text-center font-mono">${l+1}</td>
                        <td class="text-left font-bold">
                            ${i(r.name)}
                            <span style="font-size: 9.5px; color: #64748b; font-weight: normal; margin-left: 4px;">(${i(r.employeeId)})</span>
                        </td>
                        <td class="text-left text-slate-600">${i(r.position)}</td>
                        <td class="text-center font-bold" style="color: #16a34a;">${r.presentDays}</td>
                        <td class="text-center font-bold" style="color: #d97706;">${r.lateDays}</td>
                        <td class="text-center text-slate-600">${r.permitDays}</td>
                        <td class="text-center text-slate-600">${r.sickDays}</td>
                        <td class="text-center font-bold" style="color: #e11d48;">${r.alphaDays}</td>
                        <td class="text-center font-bold font-mono">${r.totalWorkDays} Hari</td>
                        <td class="text-center">
                            <span class="badge-rate ${p}">${r.attendanceRate}%</span>
                        </td>
                        <td class="text-right font-bold font-mono">${y(r.totalAllowance)}</td>
                    </tr>`}).join("")}
                <tr style="background: #f8fafc; font-weight: 900; border-top: 2px solid #94a3b8;">
                    <td colspan="3" class="text-right" style="padding: 10px;">TOTAL TIM (${t.totalMembers} Staf):</td>
                    <td class="text-center font-mono" style="color: #16a34a;">${t.totalPresentDays}</td>
                    <td class="text-center font-mono" style="color: #d97706;">${t.totalLateDays}</td>
                    <td class="text-center font-mono">${t.totalPermitDays}</td>
                    <td class="text-center font-mono">${t.totalSickDays}</td>
                    <td class="text-center font-mono" style="color: #e11d48;">${t.totalAlphaDays}</td>
                    <td class="text-center font-mono">${t.totalWorkDays} Hari</td>
                    <td class="text-center">
                        <span class="badge-rate ${t.avgAttendanceRate>=95?"rate-green":"rate-amber"}">${t.avgAttendanceRate}%</span>
                    </td>
                    <td class="text-right font-mono" style="color: #059669;">${y(t.totalTeamAllowance)}</td>
                </tr>
            </tbody>
        </table>

        <div class="sign-grid">
            <div>
                <div>Dibuat oleh (Pengelola HR / Kasir Kepala):</div>
                <div class="sign-line"></div>
                <div style="font-weight: 800;">Staf Administrasi & HR</div>
                <div style="font-size: 10.5px; color: #64748b;">${i(s.name||"Toko Putri")}</div>
            </div>
            <div>
                <div>Mengetahui & Disetujui oleh:</div>
                <div class="sign-line"></div>
                <div style="font-weight: 800;">Direksi / Pemilik Toko</div>
                <div style="font-size: 10.5px; color: #64748b;">${i(s.name||"Toko Putri")}</div>
            </div>
        </div>
    </body>
    </html>`,o=window.open("","_blank");o&&(o.document.write(a),o.document.close())};typeof window<"u"&&(window.ATTENDANCE_STATUSES=ga,window.generateAttendanceId=Yt,window.loadAttendancesForDate=Ss,window.loadAttendancesForMonth=Ms,window.renderAttendanceView=Qt,window.navigateAttendanceDate=En,window.onAttendanceDateChanged=Bn,window.setQuickAttendanceStatus=Hn,window.saveSingleAttendance=Fn,window.bulkMarkAllPresent=Kn,window.autoRecordCashierShiftAttendance=jn,window.calculateMonthlyAttendanceSummary=$s,window.calculateMonthlyTeamAttendanceRecap=Je,window.openMonthlyAttendanceRecapModal=_n,window.closeMonthlyAttendanceRecapModal=Un,window.filterAttendanceRecapTable=zn,window.exportMonthlyAttendanceCSV=Wn,window.printMonthlyAttendanceA4=qn);let ve="invoice",Ds=!1;const ea=e=>{Ds=e},te=(e,t=!1)=>{if(!e)return"-";try{const s=e.toDate?e.toDate():new Date(e);if(isNaN(s.getTime()))return"-";const n={day:"2-digit",month:"short",year:"numeric"};return t&&(n.hour="2-digit",n.minute="2-digit"),s.toLocaleDateString("id-ID",n)}catch{return"-"}},Ct=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(3).replace(/\.?0+$/,"")},Se=(e="w-16 h-16")=>c.store?.logo&&(c.store.logo.includes("http")||c.store.logo.includes("data:"))?`<img loading="eager" src="${i(c.store.logo)}" class="${e} object-contain shrink-0">`:`<div class="${e} primary-bg flex items-center justify-center rounded-xl text-white shrink-0"><i class="fa-solid fa-store text-2xl"></i></div>`,xt=(e="font-mono text-xs")=>{const s=(Array.isArray(c.banks)?c.banks:[]).filter(n=>n&&(n.bankName||n.bank||n.bankAccount||n.number||n.account));if(s.length>0)return s.map(n=>{const a=n.bankName||n.bank||"BANK",o=n.bankAccount||n.number||n.account||"-",r=n.bankOwner||n.name||n.owner||c.store?.name||"Toko Putri";return`
            <div class="${e} flex items-center justify-between gap-2 border-b border-slate-200/60 pb-1.5 last:border-b-0 last:pb-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="font-bold text-slate-900 uppercase">${i(a)}:</span>
                    <span class="font-bold text-blue-700 tracking-wide font-mono select-all">${i(o)}</span>
                </div>
                <div class="text-[10.5px] text-slate-500 font-sans truncate max-w-[140px] text-right" title="${i(r)}">
                    a.n <span class="font-semibold text-slate-700">${i(r)}</span>
                </div>
            </div>`}).join("");if(c.store?.bankName&&(c.store?.bankAccount||c.store?.bankNumber)){const n=c.store.bankName,a=c.store.bankAccount||c.store.bankNumber,o=c.store.bankOwner||c.store.name||"Toko Putri";return`
        <div class="${e} flex items-center justify-between gap-2">
            <div class="flex items-center gap-1.5 flex-wrap">
                <span class="font-bold text-slate-900 uppercase">${i(n)}:</span>
                <span class="font-bold text-blue-700 tracking-wide font-mono select-all">${i(a)}</span>
            </div>
            <div class="text-[10.5px] text-slate-500 font-sans truncate max-w-[140px] text-right">
                a.n <span class="font-semibold text-slate-700">${i(o)}</span>
            </div>
        </div>`}return`
    <div class="text-[11px] text-slate-600 bg-slate-100 p-2 rounded-lg border border-slate-200">
        <p class="font-semibold text-slate-800"><i class="fa-solid fa-building-columns text-blue-600 mr-1"></i> Rekening Resmi Toko:</p>
        <p class="mt-0.5">Konfirmasi transfer via WhatsApp Resmi: <b class="font-mono text-emerald-600">${i(c.store?.wa||c.store?.phone||"-")}</b></p>
    </div>`},Ea=({docTitle:e,docNumber:t,docDate:s})=>`
    <div class="flex justify-between items-center border-b-2 border-slate-800 pb-2.5 mb-4 text-xs font-semibold select-none">
        <div class="flex items-center gap-2.5">
            ${Se("w-8 h-8")}
            <div>
                <span class="font-black text-slate-900 uppercase text-xs sm:text-sm tracking-tight">${i(c.store?.name||"TOKO PUTRI")}</span>
                <span class="text-slate-300 mx-1.5">&bull;</span>
                <span class="font-bold text-slate-700 uppercase tracking-wider text-[11px]">${i(e)}</span>
            </div>
        </div>
        <div class="text-right font-mono text-slate-600 text-[11px]">
            ${t?`<span class="font-bold text-slate-900">${i(t)}</span> <span class="text-slate-400 mx-1">&bull;</span>`:""}
            <span>${i(s||"")}</span>
        </div>
    </div>
    `,Ba=(e,t,s)=>`
    <div class="a4-page-footer mt-auto pt-2.5 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono select-none">
        <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-700 uppercase">${i(c.store?.name||"TOKO PUTRI")}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-500">${i(s||"Dokumen Resmi")}</span>
        </div>
        <div class="flex items-center gap-1 font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
            <span>Halaman ${e} dari ${t}</span>
        </div>
    </div>
    `,Ae=({docTitle:e,docNumber:t,docDate:s,kopHtml:n,metaHtml:a,tableHeaderHtml:o,rows:r=[],tableClass:l="w-full text-left border-collapse mb-4 text-xs",summaryHtml:p="",extraBlocksHtml:d="",signaturesHtml:m="",singlePageMax:u=6,itemsFirstPage:x=6,itemsMiddlePage:h=14,itemsLastPage:v=6})=>{const b=r.length;if(b<=u)return[`
        <div class="a4-page" data-page="1" data-total-pages="1">
            <div class="a4-page-body flex-1 flex flex-col">
                ${n}
                ${a||""}
                <table class="${l}">
                    <thead>${o}</thead>
                    <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${r.join("")}</tbody>
                </table>
                ${p||""}
                ${d||""}
                ${m||""}
            </div>
            ${Ba(1,1,e)}
        </div>
        `];const S=[],L=[],H=r.slice(0,x);L.push(H);let M=x;for(;M<b;){const A=b-M;if(A<=v)L.push(r.slice(M)),M=b;else{const E=Math.min(h,A);L.push(r.slice(M,M+E)),M+=E}}const O=L.length;return L.forEach((A,E)=>{const G=E+1,K=G===1,$=G===O;let g="";K?g=`
            ${n}
            ${a||""}
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${A.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${G+1}...
            </div>
            `:$?g=`
            ${Ea({docTitle:e,docNumber:t,docDate:s})}
            ${A.length>0?`
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${A.join("")}</tbody>
            </table>`:""}
            ${p||""}
            ${d||""}
            ${m||""}
            `:g=`
            ${Ea({docTitle:e,docNumber:t,docDate:s})}
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${A.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${G+1}...
            </div>
            `,S.push(`
        <div class="a4-page" data-page="${G}" data-total-pages="${O}">
            <div class="a4-page-body flex-1 flex flex-col">
                ${g}
            </div>
            ${Ba(G,O,e)}
        </div>
        `)}),S},ha=(e,t=null,s={})=>{if(ve=e,e==="pricelist"){const $=typeof t=="object"&&t!==null?t:s||{},g=$.category||"",w=($.search||"").toLowerCase().trim(),T=$.includeVariants!==!1,D=$.includeWholesale!==!1,R=$.includeStock!==!1,_=$.includeInactive===!0;let k=(c.products||[]).filter(I=>{if(!_&&(I.isActive===!1||I.isActive==="false")||g&&g!=="all"&&(I.category||"").toLowerCase()!==g.toLowerCase())return!1;if(w){const ie=(I.name||"").toLowerCase().includes(w),oe=(I.sku||I.barcode||"").toLowerCase().includes(w),xe=(I.category||"").toLowerCase().includes(w),he=(I.brand||"").toLowerCase().includes(w);if(!ie&&!oe&&!xe&&!he)return!1}return!0});if(k.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada produk yang sesuai filter untuk dicetak!");return}k.sort((I,ie)=>{const oe=(I.category||"Lainnya").toLowerCase(),xe=(ie.category||"Lainnya").toLowerCase();return oe!==xe?oe.localeCompare(xe):(I.name||"").localeCompare(ie.name||"")}),ue("doc-modal-title","Katalog & Daftar Harga Resmi A4");const B=!g||g==="all"?"Semua Kategori Produk":g;ue("doc-modal-subtitle",`Katalog Resmi Proyek • ${k.length} Produk (${B}) • Kertas A4`);const U=Se("w-16 h-16"),N=te(Date.now(),!0),W=`PL-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${Math.floor(1e3+Math.random()*9e3)}`,j=te(new Date(Date.now()+14*24*60*60*1e3)),z=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-4">
                ${U}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(c.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${i(c.store?.slogan||"Pusat Bahan Bangunan & Alat Teknik")}</p>
                    <p class="text-[11px] font-medium text-slate-500 mt-0.5 leading-snug">${i(c.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-[11px] font-medium text-slate-500"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(c.store?.wa||c.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">DAFTAR HARGA</h2>
                <p class="text-[11px] font-extrabold text-[var(--color-primary)] uppercase tracking-wider mt-0.5">Katalog Resmi Proyek</p>
                <p class="text-xs font-bold text-slate-700 mt-1 font-mono">#${i(W)}</p>
                <p class="text-[10.5px] font-semibold text-slate-500 mt-0.5">Tanggal: ${N}</p>
            </div>
        </div>
        `,P=`
        <div class="grid grid-cols-3 gap-3 mb-4 text-xs">
            <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Kategori Filter:</span>
                <span class="font-bold text-slate-800 text-xs truncate block">${i(B)}</span>
            </div>
            <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Total Katalog:</span>
                <span class="font-bold text-slate-800 text-xs font-mono block">${k.length} Item Produk</span>
            </div>
            <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Masa Berlaku Estimasi:</span>
                <span class="font-bold text-emerald-700 text-xs block">s/d ${j}</span>
            </div>
        </div>
        `,le=`
        <tr class="bg-slate-900 text-white font-bold uppercase tracking-wider text-[10px]">
            <th class="py-2.5 px-2.5 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-2 text-center w-16 border-r border-slate-700">Satuan</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Eceran</th>
            ${D?'<th class="py-2.5 px-2.5 text-left w-36 border-r border-slate-700">Harga Grosir / Proyek</th>':""}
            ${R?'<th class="py-2.5 px-2 rounded-tr-xl text-center w-20">Ketersediaan</th>':""}
        </tr>
        `;let Q="";const fe=[];let J=1;k.forEach(I=>{const ie=(I.category||"Lainnya").toUpperCase();(!g||g==="all")&&ie!==Q&&(Q=ie,fe.push(`
                <tr class="bg-slate-100 border-y border-slate-300">
                    <td colspan="${4+(D?1:0)+(R?1:0)}" class="py-1 px-3 font-black text-slate-800 text-[10px] uppercase tracking-wider">
                        <i class="fa-solid fa-folder-open text-[var(--color-primary)] mr-1"></i> ${i(ie)}
                    </td>
                </tr>
                `));const oe=I.unit||"pcs",xe=Array.isArray(I.variants)&&I.variants.length>0,he=Array.isArray(I.multiUnits)&&I.multiUnits.length>0,ye=parseFloat(I.stock)||0;let De="";T&&xe&&(De=`
                <div class="mt-1 flex flex-wrap gap-1">
                    ${I.variants.map(ee=>`
                        <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[8.5px] font-medium bg-slate-50 border border-slate-200 text-slate-700">
                            ${ee.colorCode?`<span class="w-2 h-2 rounded-full border border-slate-300 shrink-0" style="background-color: ${i(ee.colorCode)};"></span>`:""}
                            <span>${i(ee.name)}</span>
                            ${ee.price?`<b class="text-slate-900 font-mono">${y(ee.price)}</b>`:""}
                        </span>
                    `).join("")}
                </div>
                `);let we="";T&&he&&(we=`
                <div class="mt-0.5 text-[8.5px] text-slate-500 font-mono">
                    Satuan Lain: ${I.multiUnits.map(ee=>`${i(ee.name)} (1 ${i(ee.name)} = ${ee.multiplier} ${i(oe)} @ ${y(ee.price)})`).join(" • ")}
                </div>
                `);let me="";D&&(Array.isArray(I.wholesale)&&I.wholesale.length>0?me=`
                    <div class="space-y-0.5 text-[9px] font-mono leading-tight">
                        ${I.wholesale.map(ee=>`
                            <div class="flex justify-between items-center gap-1">
                                <span class="text-slate-500">≥${ee.min} ${i(oe)}:</span>
                                <span class="font-bold text-emerald-700">${y(ee.price)}</span>
                            </div>
                        `).join("")}
                    </div>
                    `:I.wholesalePrice&&I.wholesalePrice<I.price?me=`
                    <div class="text-[9px] font-mono leading-tight">
                        <span class="text-slate-500">≥${I.wholesaleMin||10} ${i(oe)}:</span>
                        <span class="font-bold text-emerald-700">${y(I.wholesalePrice)}</span>
                    </div>
                    `:me='<span class="text-slate-400 italic text-[9px]">Sesuai Kuantitas</span>');let Ie="";R&&(Ie=ye>0?'<span class="inline-block px-1.5 py-0.5 rounded text-[8.5px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">Ready</span>':'<span class="inline-block px-1.5 py-0.5 rounded text-[8.5px] font-bold bg-amber-50 text-amber-700 border border-amber-200">Inden</span>'),fe.push(`
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="py-2 px-2.5 text-center font-mono text-slate-500 font-bold border-r border-slate-200 text-[10px]">${J}</td>
                <td class="py-2 px-3 border-r border-slate-200">
                    <div class="flex items-center gap-1.5 flex-wrap">
                        <span class="font-bold text-slate-900 text-xs uppercase">${i(I.name)}</span>
                        ${I.brand?`<span class="px-1.5 py-0.5 rounded text-[8px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">${i(I.brand)}</span>`:""}
                    </div>
                    ${I.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(I.sku)}</span>`:""}
                    ${De}
                    ${we}
                </td>
                <td class="py-2 px-2 text-center text-slate-700 font-semibold border-r border-slate-200 uppercase text-[11px]">${i(oe)}</td>
                <td class="py-2 px-3 text-right font-mono font-bold text-slate-900 border-r border-slate-200 text-xs">${y(I.price)}</td>
                ${D?`<td class="py-2 px-2.5 border-r border-slate-200">${me}</td>`:""}
                ${R?`<td class="py-2 px-2 text-center">${Ie}</td>`:""}
            </tr>
            `),J++});const Re=`
        <div class="grid grid-cols-2 gap-4 mb-4 text-xs">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 text-[10px] uppercase tracking-wider mb-1"><i class="fa-solid fa-circle-info text-[var(--color-primary)] mr-1"></i> Ketentuan &amp; Pemesanan Proyek:</h4>
                <ul class="text-[9.5px] text-slate-600 space-y-0.5 list-disc list-inside">
                    <li>Harga sewaktu-waktu dapat berubah mengikuti fluktuasi harga pabrik &amp; distributor.</li>
                    <li>Pengadaan kuantitas besar / borongan proyek berhak mengajukan Surat Penawaran Harga (SPH) resmi.</li>
                    <li>Layanan kirim armada toko (Pick-up / Truk) siap antar langsung ke lokasi proyek.</li>
                </ul>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 flex flex-col justify-between">
                <div>
                    <h4 class="font-bold text-slate-800 text-[10px] uppercase tracking-wider mb-1"><i class="fa-brands fa-whatsapp text-emerald-600 mr-1"></i> Kontak Sales &amp; Konsultasi Proyek:</h4>
                    <p class="text-[11px] font-bold text-slate-900 uppercase">${i(c.store?.name||"Toko Putri")}</p>
                    <p class="text-[10px] text-slate-600">${i(c.store?.address||"-")}</p>
                    <p class="text-[10.5px] font-mono font-bold text-emerald-700 mt-1"><i class="fa-brands fa-whatsapp"></i> ${i(c.store?.wa||c.store?.phone||"-")}</p>
                </div>
            </div>
        </div>
        `,X=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-4 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Dibuat &amp; Diverifikasi:</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 uppercase">Bagian Penjualan &amp; Logistik</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Mengetahui:</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 uppercase">${i(c.store?.name||"Pimpinan Toko")}</span>
            </div>
        </div>
        `,Y=Ae({docTitle:"Katalog & Daftar Harga Resmi",docNumber:`#${W}`,docDate:N,kopHtml:z,metaHtml:P,tableHeaderHtml:le,rows:fe,extraBlocksHtml:Re,signaturesHtml:X,singlePageMax:9,itemsFirstPage:8,itemsMiddlePage:14,itemsLastPage:7});Te(Y);return}if(e==="po"){const $=c.purchases||[],g=$.find(z=>String(z.id)===String(t))||(window.currentActivePoId?$.find(z=>String(z.id)===String(window.currentActivePoId)):$[0]);if(!g){typeof window.showToast=="function"&&window.showToast("Data PO tidak ditemukan!");return}ue("doc-modal-title","Preview Purchase Order (PO)");const w=Se("w-16 h-16"),T=te(g.date||g.createdAt),D=g.poNumber||g.id,R=g.paymentType==="tempo"?`Tempo ${g.tempoDays||14} Hari (Jatuh Tempo: ${te(g.tempoDueDate)})`:g.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai",_=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${w}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(c.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(c.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(c.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(c.store?.wa||c.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">PURCHASE ORDER</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(D)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${T}</p>
                <p class="text-xs font-bold mt-1 text-[var(--color-primary)]">Status: ${g.status==="ordered"?"DIPESAN":g.status==="received"?"DITERIMA":"SELESAI"}</p>
            </div>
        </div>
        `,k=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Kepada Rekanan / Supplier:</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${i(g.supplierName||"Supplier")}</p>
                ${g.supplierPhone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(g.supplierPhone)}</p>`:""}
                ${g.supplierAddress?`<p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${i(g.supplierAddress)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan & Pembayaran:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Termin Pembayaran:</span> <b class="text-slate-900">${R}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tujuan Pengiriman:</span> <b class="text-slate-900">${i(c.store?.name||"Gudang Utama Toko")}</b></p>
                ${g.notes?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${i(g.notes)}</p>`:""}
            </div>
        </div>
        `,B=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Modal (HPP)</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `,U=(g.items||[]).map((z,P)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${P+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(z.name)}
                ${z.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(z.variantName)}</span>`:""}
                ${z.sku?`<span class="text-slate-400 text-[9.5px] font-mono block mt-0.5">SKU: ${i(z.sku)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${Ct(z.qty)} <span class="text-[10px] font-normal text-slate-500">${i(z.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${y(z.unitPrice)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${y(Math.round((parseFloat(z.qty)||0)*(parseFloat(z.unitPrice)||0)))}</td>
        </tr>
        `),N=`
        <div class="flex justify-end mb-6 mt-2">
            <div class="w-80 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk:</span><span class="font-bold text-slate-800">${y(g.subtotal)}</span></div>
                ${g.discount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Potongan Diskon:</span><span>-${y(g.discount)}</span></div>`:""}
                ${g.shippingFee>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim:</span><span>+${y(g.shippingFee)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL ORDER (PO):</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${y(g.total)}</span>
                </div>
            </div>
        </div>
        `,W=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-6 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Dipesan Oleh (Purchasing):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(c.store?.name||"Toko Putri")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Diterima &amp; Disetujui Oleh:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(g.supplierName||"Rekanan / Supplier")}</span>
            </div>
        </div>
        `,j=Ae({docTitle:"Purchase Order",docNumber:`#${D}`,docDate:T,kopHtml:_,metaHtml:k,tableHeaderHtml:B,rows:U,summaryHtml:N,signaturesHtml:W,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});Te(j);return}if(e==="stock_opname"){const $=c.stockOpnameHistory||[],g=$.find(P=>String(P.id)===String(t)||String(P.soNumber)===String(t))||$[0];if(!g){typeof window.showToast=="function"&&window.showToast("Data Berita Acara Stock Opname tidak ditemukan!");return}ue("doc-modal-title","Preview Berita Acara Stock Opname");const w=Se("w-16 h-16"),T=te(g.date,!0),D=g.soNumber||g.id,R=typeof ra=="function"?ra():!1,_=g.items||[],k=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${w}
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
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${i(D)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${T}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Auditor: <b class="text-slate-900">${i(g.auditorName||"Staf Auditor")}</b></p>
            </div>
        </div>
        `,B=`
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
                <span class="text-[10px] text-rose-500 block">${R?"−"+y(g.totalLossRp||0):"Pcs"}</span>
            </div>
            <div class="bg-amber-50 p-3 rounded-xl border border-amber-200 text-center">
                <span class="text-[9px] font-black uppercase text-amber-600 block tracking-wider">Total Lebih (Surplus)</span>
                <span class="text-lg font-black text-amber-600 font-mono">+${g.totalSurplusUnits||0}</span>
                <span class="text-[10px] text-amber-600 block">${R?"+"+y(g.totalSurplusRp||0):"Pcs"}</span>
            </div>
        </div>
        `,U=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Hasil Fisik</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Selisih</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Alasan &amp; Keterangan</th>
            ${R?'<th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Dampak HPP</th>':'<th class="py-2.5 px-3 rounded-tr-xl text-right w-16">Satuan</th>'}
        </tr>
        `,N=_.length===0?['<tr><td colspan="7" class="py-8 text-center text-slate-500 italic">Semua stok fisik barang dalam kondisi berimbang (100% Sesuai / Selisih 0).</td></tr>']:_.map((P,le)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${le+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${i(P.productName)}
                ${P.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${i(P.variantName)}</span>`:""}
                ${P.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(P.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center font-mono text-slate-600">${P.systemStock} ${i(P.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${P.physicalStock} ${i(P.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-bold font-mono ${P.diff<0?"text-rose-600":"text-amber-600"}">
                ${P.diff<0?`−${Math.abs(P.diff)}`:`+${P.diff}`}
            </td>
            <td class="py-2 px-3 text-[10.5px]">
                <span class="font-bold text-slate-800">${i(P.reason==="salah_hitung"?"Koreksi Kasir":P.reason==="rusak"?"Barang Rusak":P.reason==="hilang"?"Barang Hilang":P.reason==="kadaluarsa"?"Expired":P.reason==="bonus"?"Bonus Supplier":P.reason)}</span>
                ${P.notes?`<span class="text-slate-500 block italic">"${i(P.notes)}"</span>`:""}
            </td>
            ${R?`
                <td class="py-2 px-3 text-right font-mono font-bold ${P.diff<0?"text-rose-600":"text-amber-600"}">
                    ${P.diff<0?"−":"+"}${y(Math.abs(P.diffValueHpp||0))}
                </td>`:`
                <td class="py-2 px-3 text-right text-slate-500">${i(P.unit||"pcs")}</td>
            `}
        </tr>
        `),W=g.notes?`
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs mb-5 text-slate-700">
            <b class="text-slate-900">Catatan Auditor:</b> ${i(g.notes)}
        </div>`:"",j=`
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
                <span class="font-bold text-slate-900 uppercase">${i(c.store?.name||"Pimpinan")}</span>
            </div>
        </div>
        `,z=Ae({docTitle:"Berita Acara Stock Opname",docNumber:`#${D}`,docDate:T,kopHtml:k,metaHtml:B,tableHeaderHtml:U,rows:N,extraBlocksHtml:W,signaturesHtml:j,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});Te(z);return}if(e==="stock_opname_worksheet"){ue("doc-modal-title","Preview Lembar Kerja Hitung Fisik (Worksheet)");const $=Se("w-14 h-14"),g=te(new Date),w=c.products||[],T=[];w.forEach(N=>{!N||N.id==null||(N.variants&&N.variants.length>0?N.variants.forEach(W=>{T.push({name:N.name,variantName:W.name,sku:W.sku||N.sku||"",category:N.category||"Umum",unit:N.unit||"pcs",systemStock:parseFloat(W.stock)||0})}):T.push({name:N.name,variantName:"",sku:N.sku||"",category:N.category||"Umum",unit:N.unit||"pcs",systemStock:parseFloat(N.stock)||0}))});const D=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3">
                ${$}
                <div>
                    <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${i(c.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${i(c.store?.slogan||"Pusat Alat Teknik & Bangunan")}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${i(c.store?.address||"")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-wider text-slate-900 uppercase">LEMBAR KERJA AUDIT</h2>
                <h3 class="font-bold text-xs tracking-widest text-amber-600 uppercase">STOCK OPNAME FISIK RAK</h3>
                <p class="text-xs font-medium text-slate-500 mt-1">Tanggal Cetak: <b>${g}</b></p>
                <p class="text-xs font-medium text-slate-500">Total Item: <b>${T.length} Baris</b></p>
            </div>
        </div>
        `,R=`
        <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[10px] text-slate-600 mb-4 flex items-center justify-between">
            <span><b>Petunjuk:</b> Hitung fisik barang di rak/gudang secara teliti. Tulis angka aktual pada kolom <b>HASIL FISIK</b> dan beri catatan bila ada barang rusak/cacat.</span>
        </div>
        `,_=`
        <tr class="border-b-2 border-slate-800 text-[9.5px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">Cek</th>
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">No</th>
            <th class="py-2 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi Varian</th>
            <th class="py-2 px-2 border-r border-slate-700 w-28">Kategori / Rak</th>
            <th class="py-2 px-2 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2 px-2 text-center w-28 border-r border-slate-700 bg-amber-900/60">HASIL FISIK</th>
            <th class="py-2 px-3 text-left w-36">Kondisi &amp; Catatan</th>
        </tr>
        `,k=T.map((N,W)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200"><span class="inline-block w-3.5 h-3.5 border border-slate-400 rounded-sm"></span></td>
            <td class="py-2 px-2 text-center font-mono text-slate-400 border-r border-slate-200">${W+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 border-r border-slate-200 uppercase">
                ${i(N.name)}
                ${N.variantName?`<span class="bg-slate-100 text-slate-700 px-1 rounded text-[8.5px] border border-slate-300 ml-1 font-semibold">${i(N.variantName)}</span>`:""}
                ${N.sku?`<span class="text-slate-400 font-mono text-[8.5px] block">SKU: ${i(N.sku)}</span>`:""}
            </td>
            <td class="py-2 px-2 text-[10px] text-slate-600 border-r border-slate-200">
                ${i(N.category)}
            </td>
            <td class="py-2 px-2 text-center font-mono font-bold text-slate-600 border-r border-slate-200">
                ${N.systemStock} ${i(N.unit)}
            </td>
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200 bg-amber-50/40">
                <span class="inline-block w-20 h-5 border-b-2 border-slate-400"></span>
            </td>
            <td class="py-2 px-3 text-[10px] text-slate-400">
                <span class="inline-block w-full h-5 border-b border-slate-200"></span>
            </td>
        </tr>
        `),U=Ae({docTitle:"Lembar Kerja Audit Rak",docNumber:`TOTAL ${T.length} ITEM`,docDate:g,kopHtml:D,metaHtml:R,tableHeaderHtml:_,rows:k,tableClass:"w-full text-left border-collapse mb-4 text-[11px]",signaturesHtml:`
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
        `,singlePageMax:16,itemsFirstPage:15,itemsMiddlePage:20,itemsLastPage:14});Te(U);return}if(e==="tempo_invoice"){const $=t||window.cVOrd;let w=(window.cachedPiutangOrders||[]).find(V=>String(V.orderId)===String($))||(window.gOrds||[]).find(V=>String(V.orderId)===String($));if(!w&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String($)&&(w=window.lastPrintedOrder),!w){typeof window.showToast=="function"&&window.showToast("Data nota tagihan piutang tidak ditemukan!");return}ue("doc-modal-title","Preview Nota Tagihan Piutang (Tempo)");const T=Se("w-16 h-16"),D=te(w.dateString||w.timestamp),R=parseFloat(w.payment?.tempoBalance)||0,_=w.payment?.tempoPenaltyRate!==void 0?parseFloat(w.payment.tempoPenaltyRate):1,k=w.payment?.tempoPenaltyStopped===!0;let B=0;const U=w.payment?.tempoDueDate||0;let N=0,W=0,j=!1,z=!1;const P=Date.now();U>0&&(P>U?(N=Math.floor((P-U)/(24*60*60*1e3)),N>0&&(j=!0)):(W=Math.ceil((U-P)/(24*60*60*1e3)),W<=3&&(z=!0))),k?B=parseFloat(w.payment?.tempoFixedPenalty)||0:j&&(B=_/100*R*N);const le=R+B,Q=w.payment?.installments||[],fe=Q.reduce((V,Ne)=>V+(parseFloat(Ne.amount)||0),0),J=w.payment?.grandTotal||R+fe,Re=w.payment?.paymentStatus==="lunas"||R<=0,X=!!(w.payment?.isPaylater||w.isPaylater||w.payment?.subMethod==="paylater");let Y=X?"PAYLATER BERJALAN":"TEMPO BERJALAN",I="text-blue-600 bg-blue-50 border-blue-200";Re?(Y="LUNAS SEPENUHNYA",I="text-emerald-600 bg-emerald-50 border-emerald-300"):j?(Y=`TERLAMBAT ${N} HARI`,I="text-rose-600 bg-rose-50 border-rose-300"):z&&(Y=`JATUH TEMPO H-${W<=0?"0":W}`,I="text-amber-600 bg-amber-50 border-amber-300");const ie=xt("font-mono text-xs"),oe=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${T}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(c.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(c.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(c.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(c.store?.wa||c.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">${X?"NOTA PUTRI PAYLATER":"NOTA TAGIHAN PIUTANG"}</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(w.orderId)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tgl Transaksi: ${D}</p>
                <div class="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${I}">
                    ${i(Y)}
                </div>
            </div>
        </div>
        `,xe=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ditujukan Kepada (Debitur / Pelanggan):</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-0.5">${i(w.customer?.name||"Pelanggan")}</p>
                ${w.customer?.wa||w.customer?.phone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> +${i(w.customer.wa||w.customer.phone)}</p>`:""}
                <p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${i(w.customer?.address||"Alamat di toko / pelanggan tempo")}</p>
                ${w.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${i(w.customer.note)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan Jatuh Tempo:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tanggal Jatuh Tempo:</span> <b class="text-slate-900 font-mono">${te(U)}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Sistem Pembayaran:</span> <b class="${X?"text-emerald-700 font-bold":"text-slate-900"} uppercase">${X?"Putri PayLater Member VIP":"Tempo / Bertahap"}</b></p>
                ${X?`<p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tenor Cicilan:</span> <b class="text-emerald-800 font-bold uppercase">${w.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":w.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)"}</b></p>`:""}
                ${j?`<p class="text-xs font-bold text-rose-600 mb-1"><span class="text-slate-500">Status:</span> Lewat ${N} Hari (Denda ${_}%/hari)</p>`:""}
                <p class="text-xs font-semibold text-slate-700"><span class="text-slate-500">Kasir / Admin:</span> <b class="text-slate-900 uppercase">${i(w.cashierName||"Kasir Toko")}</b></p>
            </div>
        </div>
        `,he=`
        <tr class="border-b-2 border-slate-800 text-[10.5px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Satuan</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `,ye=(w.items||[]).map((V,Ne)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${Ne+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(V.name)}
                ${V.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(V.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${Ct(V.qty)} <span class="text-[10px] font-normal text-slate-500">${i(V.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${y(V.effectivePrice||V.price)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${y(V.subtotal||Math.round((parseFloat(V.qty)||0)*(parseFloat(V.effectivePrice||V.price)||0)))}</td>
        </tr>
        `);let De="",we=0,me="-",Ie=1;if(X&&Array.isArray(w.payment?.paylaterSchedule)&&w.payment.paylaterSchedule.length>0){let V=0,Ne=!1;const rt=w.payment.paylaterSchedule.map((ce,Zt)=>{const ya=ce.installmentIndex||ce.installmentNo||ce.installmentNumber||ce.month||Zt+1,va=parseFloat(ce.pokok||ce.principal)||0,ka=parseFloat((ce.adminFee||0)+(ce.serviceFee||0))||0,Xt=parseFloat(ce.total||ce.totalMonthly||ce.totalInstallment)||va+ka;V+=Xt;const Pa=V,St=ce.dueDate||0,Aa=ce.dueDateFormatted||ce.dueDateStr||(St?te(St):"-");let $t="";if(fe>=Pa)$t='<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-300">LUNAS</span>';else if(Ne)$t='<span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200">BULAN DEPAN</span>';else{Ne=!0,Ie=ya;const Os=Math.max(0,Pa-fe);we=Math.min(Os,Xt),me=Aa,$t=St&&P>St?'<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 border border-rose-300">JATUH TEMPO</span>':'<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">WAJIB BULAN INI</span>'}return`
                <tr class="hover:bg-slate-50">
                    <td class="py-2 px-3 text-center text-slate-800 font-bold">Bulan Ke-${ya}</td>
                    <td class="py-2 px-3 font-mono font-medium text-slate-700 text-center">${Aa}</td>
                    <td class="py-2 px-3 text-right text-slate-600 font-mono">${y(va)}</td>
                    <td class="py-2 px-3 text-right text-slate-500 font-mono">${y(ka)}</td>
                    <td class="py-2 px-3 text-right font-black font-mono text-slate-900">${y(Xt)}</td>
                    <td class="py-2 px-3 text-center">${$t}</td>
                </tr>`}).join("");De=`
            <div class="mb-5">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                        <i class="fa-solid fa-calendar-check text-emerald-600"></i> Tabel Rencana Angsuran Bulanan (${w.payment?.paylaterMonths||1}x Tenor):
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
                        ${rt}
                    </tbody>
                </table>
            </div>`}const ee=`
        ${De}
        ${Q.length>0?`
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
                    ${Q.map((V,Ne)=>`
                    <tr class="hover:bg-slate-50">
                        <td class="py-1.5 px-3 text-center text-slate-500">${Ne+1}</td>
                        <td class="py-1.5 px-3 text-slate-700">${te(V.date)}</td>
                        <td class="py-1.5 px-3 uppercase text-slate-600 font-bold">${i(V.method||"Tunai")}</td>
                        <td class="py-1.5 px-3 text-right font-bold text-emerald-600">+ ${y(V.amount)}</td>
                        <td class="py-1.5 px-3 text-slate-500 text-[11px] font-sans">${i(V.note||"-")}</td>
                    </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>`:""}
        `,Ze=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran Toko Putri:
                </h4>
                <div class="space-y-1.5 pt-0.5">${ie}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi bukti transfer: <b>${i(c.store?.wa||c.store?.phone||"-")}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Harap mencantumkan Nomor Nota (#${i(w.orderId)}) pada berita transfer.</p>
                </div>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Awal:</span><span class="font-bold text-slate-800">${y(J)}</span></div>
                ${X?`<div class="flex justify-between text-emerald-600 font-bold"><span>Limit PayLater Terpakai:</span><span>${y(w.payment?.paylaterUsed||J-(w.payment?.tempoDp||w.payment?.dp||0))}</span></div>`:""}
                ${X&&w.payment?.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater:</span><span class="font-bold">+${y(w.payment.paylaterAdminFee)}</span></div>`:""}
                ${X&&w.payment?.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan:</span><span class="font-bold">+${y(w.payment.paylaterServiceFee)}</span></div>`:""}
                ${(parseFloat(w.payment?.tempoDp||w.payment?.dp)||0)>0?`<div class="flex justify-between text-slate-600"><span>Uang Muka (DP Dibayar):</span><span class="font-bold">${y(w.payment?.tempoDp||w.payment?.dp||0)}</span></div>`:""}
                ${fe>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Masuk:</span><span>-${y(fe)}</span></div>`:""}
                
                ${X&&we>0&&we<R?`
                <!-- KOTAK HIGHLIGHT ANGSURAN BULAN INI -->
                <div class="p-2.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 space-y-0.5">
                    <div class="flex justify-between items-center text-[9.5px] font-black uppercase tracking-wider text-amber-800">
                        <span>Angsuran Bulan Ini (Termin Ke-${Ie}):</span>
                        <span class="font-mono text-[9px] bg-amber-200/80 px-1.5 py-0.5 rounded">Jatuh Tempo: ${me}</span>
                    </div>
                    <div class="flex justify-between items-center text-sm font-black font-mono pt-0.5">
                        <span>Wajib Dibayar Sekarang:</span>
                        <span class="text-amber-900 text-base font-black">${y(we)}</span>
                    </div>
                </div>
                <div class="flex justify-between text-slate-500 text-[11px]">
                    <span>Sisa Termin Bulan Berikutnya:</span>
                    <span class="font-mono font-bold">${y(Math.max(0,R-we))}</span>
                </div>
                `:""}

                <div class="flex justify-between text-slate-700 font-bold"><span>${X?"Total Sisa Pokok (Semua Tenor):":"Sisa Pokok Piutang:"}</span><span>${y(R)}</span></div>
                ${B>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Denda Keterlambatan:</span><span>+${y(B)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>${X?"TOTAL PELUNASAN PENUH:":"SISA WAJIB BAYAR:"}</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${y(Re?0:le)}</span>
                </div>
            </div>
        </div>
        `,Ue=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Yang Berhutang (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(w.customer?.name||"Pelanggan")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Kasir Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(c.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,Tt=Ae({docTitle:X?"Nota Putri PayLater":"Nota Tagihan Piutang",docNumber:`#${w.orderId}`,docDate:D,kopHtml:oe,metaHtml:xe,tableHeaderHtml:he,rows:ye,extraBlocksHtml:ee,summaryHtml:Ze,signaturesHtml:Ue,singlePageMax:5,itemsFirstPage:5,itemsMiddlePage:12,itemsLastPage:4});Te(Tt);return}if(e==="tempo_customer_ledger"){const $=String(t||"").trim(),w=(window.cachedPiutangOrders||[]).filter(Y=>{const I=String(Y.customer?.phone||Y.customer?.wa||"").replace(/\D/g,""),ie=String(Y.customer?.name||"").toLowerCase().trim(),oe=$.replace(/\D/g,"");return!!(oe.length>=8&&I.includes(oe)||ie&&$.toLowerCase().includes(ie))});if(w.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada nota piutang aktif untuk pelanggan ini.");return}const T=w[0].customer||{},D=T.name||"Pelanggan",R=T.wa||T.phone||"-";ue("doc-modal-title",`Kartu Piutang: ${D}`);const _=Se("w-16 h-16"),k=te(Date.now());let B=0,U=0,N=0,W=0,j=0;const z=w.map((Y,I)=>{const ie=parseFloat(Y.payment?.tempoBalance)||0,oe=Y.payment?.tempoPenaltyRate!==void 0?parseFloat(Y.payment.tempoPenaltyRate):1,xe=Y.payment?.tempoPenaltyStopped===!0;let he=0;const ye=Y.payment?.tempoDueDate||0;let De=0,we=!1;const me=Date.now();ye>0&&me>ye&&(De=Math.floor((me-ye)/(24*60*60*1e3)),De>0&&(we=!0)),xe?he=parseFloat(Y.payment?.tempoFixedPenalty)||0:we&&(he=oe/100*ie*De);const ee=(Y.payment?.installments||[]).reduce((Tt,V)=>Tt+(parseFloat(V.amount)||0),0),Ze=Y.payment?.grandTotal||ie+ee,Ue=ie+he;return B+=Ze,U+=ee,N+=ie,W+=he,j+=Ue,`
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="py-2.5 px-3 text-center font-mono text-slate-500">${I+1}</td>
                <td class="py-2.5 px-3 font-mono font-bold text-slate-800">#${i(Y.orderId)}</td>
                <td class="py-2.5 px-3 font-medium text-slate-600">${te(Y.dateString||Y.timestamp)}</td>
                <td class="py-2.5 px-3 font-mono ${we?"text-rose-600 font-bold":"text-slate-700"}">${te(ye)} ${we?`<span class="text-[9.5px] text-rose-500">(+${De}h)</span>`:""}</td>
                <td class="py-2.5 px-3 text-right font-mono text-slate-600">${y(Ze)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-600 font-bold">${y(ee)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-rose-600">${he>0?y(he):"-"}</td>
                <td class="py-2.5 px-3 text-right font-mono font-black text-slate-900">${y(Ue)}</td>
            </tr>
            `}),P=xt("font-mono text-xs"),le=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${_}
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
                <p class="text-xs font-semibold text-slate-500 mt-0.5">Dicetak: ${k}</p>
                <span class="inline-block mt-1.5 px-3 py-0.5 bg-amber-50 text-amber-700 border border-amber-300 rounded-full text-[11px] font-black uppercase tracking-wider">
                    ${w.length} NOTA BELUM LUNAS
                </span>
            </div>
        </div>
        `,Q=`
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Informasi Debitur / Pelanggan:</h3>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="text-[11px] text-slate-500">Nama Pelanggan / Badan:</p>
                    <p class="font-bold text-base text-slate-900 uppercase">${i(D)}</p>
                </div>
                <div>
                    <p class="text-[11px] text-slate-500">Nomor WhatsApp / HP:</p>
                    <p class="font-mono font-bold text-base text-emerald-600">+${i(R)}</p>
                </div>
            </div>
        </div>
        `,fe=`
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
        `,J=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Transfer Resmi Pelunasan:
                </h4>
                <div class="space-y-1 pt-0.5">${P}</div>
                <p class="text-[9.5px] text-slate-500 pt-1.5 border-t border-slate-200">Kartu piutang ini mencatat seluruh tagihan aktif per tanggal cetak.</p>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Keseluruhan:</span><span class="font-bold text-slate-800">${y(B)}</span></div>
                <div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Diterima (-):</span><span>-${y(U)}</span></div>
                <div class="flex justify-between text-slate-700 font-bold"><span>Total Sisa Pokok Piutang:</span><span>${y(N)}</span></div>
                ${W>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Total Denda (+):</span><span>+${y(W)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL AKUMULASI PIUTANG:</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${y(j)}</span>
                </div>
            </div>
        </div>
        `,Re=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Penerima Tagihan (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(D)}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Pemilik Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(c.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,X=Ae({docTitle:"Kartu Piutang Pelanggan",docNumber:"STATEMENT OF ACCOUNT",docDate:k,kopHtml:le,metaHtml:Q,tableHeaderHtml:fe,rows:z,summaryHtml:J,signaturesHtml:Re,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});Te(X);return}if(e==="tempo_recap"){const $=window.cachedPiutangOrders&&window.cachedPiutangOrders.length>0?window.cachedPiutangOrders:(window.gOrds||[]).filter(J=>J.payment?.method==="tempo"&&(parseFloat(J.payment?.tempoBalance)>0||J.payment?.status!=="paid"&&J.payment?.status!=="completed"));if(!$||$.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada nota piutang aktif untuk direkap.");return}ue("doc-modal-title","Rekap Buku Piutang Toko A4");const g=Se("w-16 h-16"),w=te(Date.now(),!0),T=`AR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${Math.floor(1e3+Math.random()*9e3)}`;let D=0,R=0,_=0,k=0,B=0;const U=new Set,N=$.map((J,Re)=>{const X=J.customer||{},Y=X.name||"Pelanggan",I=X.wa||X.phone||"-",ie=`${Y}_${I}`;U.add(ie);const oe=te(J.dateString||J.createdAt),xe=J.payment?.tempoDueDate||0,he=te(xe),ye=parseFloat(J.payment?.tempoBalance)||0,De=J.payment?.tempoPenaltyRate!==void 0?parseFloat(J.payment.tempoPenaltyRate):1,we=J.payment?.tempoPenaltyStopped===!0;let me=0,Ie=0,ee=!1,Ze=!1;const Ue=Date.now();if(xe>0)if(Ue>xe)Ie=Math.floor((Ue-xe)/(24*60*60*1e3)),Ie>0&&(ee=!0);else{const ce=Math.ceil((xe-Ue)/864e5);ce<=3&&ce>=0&&(Ze=!0)}we?me=parseFloat(J.payment?.tempoFixedPenalty)||0:ee&&(me=De/100*ye*Ie);const V=(J.payment?.installments||[]).reduce((ce,Zt)=>ce+(parseFloat(Zt.amount)||0),0);J.payment?.grandTotal||ye+V;const Ne=ye+me;D+=ye,R+=me,_+=Ne;let rt="";return ee?(k++,rt=`<span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-rose-100 text-rose-700 border border-rose-200">Telat ${Ie} Hari</span>`):Ze?rt='<span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200">H-3 Tempo</span>':(B++,rt='<span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">Lancar</span>'),`
            <tr class="border-b border-slate-200 text-[10px] hover:bg-slate-50 transition-colors">
                <td class="py-2 px-2 text-center text-slate-500 font-bold border-r border-slate-200">${Re+1}</td>
                <td class="py-2 px-2.5 border-r border-slate-200">
                    <p class="font-bold text-slate-900 leading-tight">${i(Y)}</p>
                    <p class="text-[9px] text-slate-500 font-mono"><i class="fa-brands fa-whatsapp text-emerald-600"></i> ${i(I)}</p>
                </td>
                <td class="py-2 px-2 border-r border-slate-200 font-mono">
                    <p class="font-bold text-slate-800">#${i(J.orderId||J.id)}</p>
                    <p class="text-[9px] text-slate-500">${oe}</p>
                </td>
                <td class="py-2 px-2 text-center border-r border-slate-200 font-mono">
                    <span class="font-bold ${ee?"text-rose-600":"text-slate-700"}">${he}</span>
                </td>
                <td class="py-2 px-2 text-right border-r border-slate-200 font-mono font-bold text-slate-800">${y(ye)}</td>
                <td class="py-2 px-2 text-right border-r border-slate-200 font-mono ${me>0?"text-rose-600 font-bold":"text-slate-400"}">
                    ${me>0?`+${y(me)}`:"Rp 0"}
                </td>
                <td class="py-2 px-2 text-right border-r border-slate-200 font-mono font-black text-slate-900 bg-slate-50/80">${y(Ne)}</td>
                <td class="py-2 px-2 text-center">${rt}</td>
            </tr>`}),W=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3.5">
                ${g}
                <div>
                    <h1 class="font-black text-xl tracking-tight text-slate-900 uppercase">${i(c.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-[11px] font-bold text-slate-500 uppercase tracking-widest">${i(c.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-[10px] text-slate-500 max-w-sm leading-snug mt-0.5">${i(c.store?.address||"Alamat Toko")}</p>
                    <p class="text-[10px] text-slate-500"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(c.store?.wa||c.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-widest text-slate-900 uppercase">REKAP BUKU PIUTANG</h2>
                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">ACCOUNTS RECEIVABLE MASTER LEDGER</p>
                <p class="text-xs font-bold text-slate-600 font-mono mt-1">#${i(T)}</p>
                <p class="text-[10px] text-slate-500 mt-0.5">Waktu Cetak: ${w}</p>
            </div>
        </div>
        `,j=xt("font-mono text-[10px]"),z=`
        <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                <h3 class="text-[9px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-1">Ringkasan Portofolio Debitur:</h3>
                <div class="grid grid-cols-2 gap-2 text-[10px] pt-1">
                    <div>
                        <span class="text-slate-500">Total Debitur:</span>
                        <b class="text-slate-900 block font-mono text-xs">${U.size} Orang</b>
                    </div>
                    <div>
                        <span class="text-slate-500">Total Nota Aktif:</span>
                        <b class="text-slate-900 block font-mono text-xs">${$.length} Transaksi</b>
                    </div>
                    <div>
                        <span class="text-rose-600 font-medium">Nota Terlambat:</span>
                        <b class="text-rose-700 block font-mono text-xs">${k} Nota</b>
                    </div>
                    <div>
                        <span class="text-emerald-600 font-medium">Nota Lancar:</span>
                        <b class="text-emerald-700 block font-mono text-xs">${B} Nota</b>
                    </div>
                </div>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                <h3 class="text-[9px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-1 flex items-center gap-1">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Penerimaan Pelunasan Toko:
                </h3>
                <div class="space-y-0.5 pt-0.5">${j}</div>
            </div>
        </div>
        `,P=`
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
        `,le=`
        <div class="grid grid-cols-2 gap-4 mb-4 items-start">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[10px] space-y-1">
                <p class="font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-1">Ketentuan Rekap Piutang Toko:</p>
                <p class="text-slate-600 leading-snug">1. Dokumen ini sah sebagai bukti buku pembukuan piutang berjalan Toko Putri.</p>
                <p class="text-slate-600 leading-snug">2. Seluruh nominal sisa pokok dan denda mengikat hingga tanggal cetak dokumen.</p>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1.5">
                <div class="flex justify-between text-slate-600 text-[11px]">
                    <span>Total Sisa Pokok Piutang:</span>
                    <span class="font-bold text-slate-800 font-mono">${y(D)}</span>
                </div>
                ${R>0?`
                <div class="flex justify-between text-rose-600 text-[11px] font-bold">
                    <span>Total Akumulasi Denda (+):</span>
                    <span class="font-mono">+${y(R)}</span>
                </div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-1.5 mt-1 font-bold text-slate-900">
                    <span class="text-xs uppercase tracking-wider">TOTAL TAGIHAN BERJALAN:</span>
                    <span class="text-[var(--color-primary)] font-black text-sm font-mono">${y(_)}</span>
                </div>
            </div>
        </div>
        `,Q=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-4 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Petugas Penagihan / Kasir:</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 text-[11px] uppercase">( ........................................ )</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Pemilik Toko (Owner):</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 text-[11px] uppercase">${i(c.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,fe=Ae({docTitle:"Rekap Buku Piutang Toko",docNumber:T,docDate:w,kopHtml:W,metaHtml:z,tableHeaderHtml:P,rows:N,summaryHtml:le,signaturesHtml:Q,singlePageMax:7,itemsFirstPage:7,itemsMiddlePage:15,itemsLastPage:7});Te(fe);return}if(e==="sales_return"){const $=typeof t=="object"&&t!==null?t.returnId:t,g=c.salesReturns||[],w=g.find(P=>String(P.id)===String($))||g[0];if(!w){typeof window.showToast=="function"&&window.showToast("Data retur penjualan tidak ditemukan!");return}ue("doc-modal-title","Preview Nota Retur Penjualan (A4)");const T=Se("w-16 h-16"),D=te(w.createdAt,!0),R=w.refundMethod==="cash"?"Pengembalian Tunai (Cash Refund)":w.refundMethod==="credit"?"Saldo Kredit Toko (Store Credit)":w.refundMethod==="exchange"?"Tukar Barang (Exchange)":"Lainnya",_=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${T}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(c.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(c.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(c.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(c.store?.wa||c.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">NOTA RETUR</h2>
                <h3 class="font-bold text-sm tracking-wider text-indigo-600 uppercase">PENJUALAN KONSUMEN</h3>
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${i(w.id)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${D}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Rujukan Nota: <b class="font-mono text-slate-900">#${i(w.orderId||"-")}</b></p>
            </div>
        </div>
        `,k=`
        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Identitas Pelanggan / Konsumen</span>
                <p class="font-bold text-slate-900 text-sm">${i(w.customerName||"Pelanggan Umum")}</p>
                ${w.customerPhone?`<p class="text-slate-600 font-mono text-[11px]"><i class="fa-brands fa-whatsapp text-emerald-600"></i> ${i(w.customerPhone)}</p>`:""}
                <p class="text-slate-500 text-[11px]">Saluran Transaksi: <span class="font-semibold text-slate-700">${w.source==="pos"?"Kasir POS":"Website Online"}</span></p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Penyelesaian Finansial</span>
                <p class="font-bold text-slate-900 text-sm">${i(R)}</p>
                <p class="text-slate-500 text-[11px]">Petugas Pelaksana: <span class="font-semibold text-slate-700">${i(w.cashierName||"Kasir Toko")}</span></p>
                <p class="text-slate-500 text-[11px]">Status Retur: <span class="font-bold text-emerald-600 uppercase">SELESAI (COMPLETED)</span></p>
            </div>
        </div>
        `,B=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-28 border-r border-slate-700">Kondisi &amp; Alokasi</th>
            <th class="py-2.5 px-3 text-center w-16 border-r border-slate-700">Qty Retur</th>
            <th class="py-2.5 px-3 text-right w-24 border-r border-slate-700">Harga Jual</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Subtotal Retur</th>
            <th class="py-2.5 px-3 rounded-tr-xl w-36">Alasan Pengembalian</th>
        </tr>
        `,U=w.items||[],N=U.map((P,le)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${le+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${i(P.name)}
                ${P.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${i(P.variantName)}</span>`:""}
                ${P.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(P.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center text-[10.5px]">
                ${P.condition==="good"?'<span class="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 block text-[9.5px]">Baik (Restok Rak)</span>':'<span class="font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 block text-[9.5px]">Rusak (Karantina)</span>'}
            </td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${Ct(P.qty)}</td>
            <td class="py-2 px-3 text-right font-mono text-slate-600">${y(P.soldPrice||0)}</td>
            <td class="py-2 px-3 text-right font-mono font-bold text-slate-900">${y(P.subtotalRefund||P.qty*P.soldPrice||0)}</td>
            <td class="py-2 px-3 text-[10.5px] text-slate-600">
                ${i(P.reason||"-")}
            </td>
        </tr>
        `),W=`
        <div class="grid grid-cols-2 gap-4 mb-4 items-start">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[10px] space-y-1">
                <p class="font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-1">Ketentuan Retur Resmi Toko:</p>
                <p class="text-slate-600 leading-snug">1. Barang retur telah diverifikasi fisik dan dicocokkan dengan struk pembelian asli.</p>
                <p class="text-slate-600 leading-snug">2. Kompensasi diberikan sesuai metode yang disepakati dan tidak dapat dibatalkan.</p>
                ${w.notes?`<p class="mt-2 text-slate-700 font-semibold border-t border-slate-200 pt-1">Catatan: "${i(w.notes)}"</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between items-center text-slate-600">
                    <span>Total Item Diretur:</span>
                    <span class="font-mono font-bold text-slate-800">${U.reduce((P,le)=>P+(parseFloat(le.qty)||0),0)} Unit</span>
                </div>
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 font-bold text-slate-900">
                    <span class="uppercase tracking-wider">TOTAL NILAI RETUR:</span>
                    <span class="text-rose-600 font-black text-base font-mono">${y(w.totalRefund||0)}</span>
                </div>
            </div>
        </div>
        `,j=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Konsumen / Pembeli:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(w.customerName||"Konsumen")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Kasir / Petugas Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(w.cashierName||c.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,z=Ae({docTitle:"Nota Retur Penjualan",docNumber:`#${w.id}`,docDate:D,kopHtml:_,metaHtml:k,tableHeaderHtml:B,rows:N,summaryHtml:W,signaturesHtml:j,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});Te(z);return}if(e==="vendor_return"){const $=typeof t=="object"&&t!==null?t.returnId:t,g=c.vendorReturns||[],w=g.find(P=>String(P.id)===String($))||g[0];if(!w){typeof window.showToast=="function"&&window.showToast("Data retur supplier tidak ditemukan!");return}ue("doc-modal-title","Preview Surat Pengembalian Barang ke Supplier (A4)");const T=Se("w-16 h-16"),D=te(w.createdAt,!0),R=w.settlementMethod==="ap_deduction"?"Potong Hutang PO (AP Deduction)":w.settlementMethod==="cash_refund"?"Pengembalian Dana Kas / Transfer":"Lainnya",_=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${T}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(c.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(c.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(c.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(c.store?.wa||c.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">SURAT PENGEMBALIAN</h2>
                <h3 class="font-bold text-sm tracking-wider text-amber-600 uppercase">BARANG KE PEMASOK (VENDOR RETURN)</h3>
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${i(w.id)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${D}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Rujukan PO: <b class="font-mono text-slate-900">#${i(w.poId||"Non-PO")}</b></p>
            </div>
        </div>
        `,k=`
        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Ditujukan Kepada Rekanan Supplier</span>
                <p class="font-bold text-slate-900 text-sm uppercase">${i(w.supplierName||"Pemasok Toko")}</p>
                <p class="text-slate-500 text-[11px]">Rujukan Kulakan PO: <span class="font-mono font-bold text-slate-800">${i(w.poId||"-")}</span></p>
                <p class="text-slate-500 text-[11px]">Status Dokumen: <span class="font-bold text-amber-600 uppercase">TERBIT / DISERAHKAN</span></p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Penyelesaian Finansial Supplier</span>
                <p class="font-bold text-slate-900 text-sm">${i(R)}</p>
                <p class="text-slate-500 text-[11px]">Estimasi Nilai Klaim HPP: <span class="font-mono font-bold text-amber-600">${y(w.totalClaim||0)}</span></p>
                ${w.notes?`<p class="text-slate-600 text-[10.5px] italic mt-1">Catatan: "${i(w.notes)}"</p>`:""}
            </div>
        </div>
        `,B=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Asal Lokasi</th>
            <th class="py-2.5 px-3 text-center w-16 border-r border-slate-700">Qty Retur</th>
            <th class="py-2.5 px-3 text-right w-24 border-r border-slate-700">Harga Beli/HPP</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Total Klaim</th>
            <th class="py-2.5 px-3 rounded-tr-xl w-36">Alasan Klaim Cacat</th>
        </tr>
        `,U=w.items||[],N=U.map((P,le)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${le+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${i(P.name)}
                ${P.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${i(P.variantName)}</span>`:""}
                ${P.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(P.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center text-[10px] font-semibold text-slate-600">
                ${P.fromLocation==="warehouse"?"Gudang":P.fromLocation==="quarantine"?"Karantina":"Rak Toko"}
            </td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${Ct(P.qty)}</td>
            <td class="py-2 px-3 text-right font-mono text-slate-600">${y(P.buyPrice||0)}</td>
            <td class="py-2 px-3 text-right font-mono font-bold text-amber-600">${y(P.subtotalClaim||P.qty*P.buyPrice||0)}</td>
            <td class="py-2 px-3 text-[10.5px] text-slate-600">
                ${i(P.reason||"Barang Cacat Pabrik")}
            </td>
        </tr>
        `),W=`
        <div class="grid grid-cols-2 gap-4 mb-4 items-start">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[10px] space-y-1">
                <p class="font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-1">Ketentuan Pengembalian Barang:</p>
                <p class="text-slate-600 leading-snug">1. Barang fisik diserahkan kepada pihak ekspedisi / perwakilan resmi supplier.</p>
                <p class="text-slate-600 leading-snug">2. Nilai klaim memotong saldo hutang PO atau diganti dana/barang baru.</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between items-center text-slate-600">
                    <span>Total Kuantitas Barang:</span>
                    <span class="font-mono font-bold text-slate-800">${U.reduce((P,le)=>P+(parseFloat(le.qty)||0),0)} Unit</span>
                </div>
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 font-bold text-slate-900">
                    <span class="uppercase tracking-wider">TOTAL NILAI KLAIM HPP:</span>
                    <span class="text-amber-600 font-black text-base font-mono">${y(w.totalClaim||0)}</span>
                </div>
            </div>
        </div>
        `,j=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Pengirim (Purchasing Toko):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(c.store?.name||"Toko Putri")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Penerima (Supir / Supplier):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(w.supplierName||"Pemasok / Distributor")}</span>
            </div>
        </div>
        `,z=Ae({docTitle:"Surat Pengembalian Barang Supplier",docNumber:`#${w.id}`,docDate:D,kopHtml:_,metaHtml:k,tableHeaderHtml:B,rows:N,summaryHtml:W,signaturesHtml:j,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});Te(z);return}if(e==="attendance_recap"){const $=typeof t=="string"&&t?t:t&&t.yearMonth||s&&s.yearMonth||new Date().toISOString().slice(0,7);let g=null;if(typeof Je=="function"?g=Je($):typeof window.calculateMonthlyTeamAttendanceRecap=="function"&&(g=window.calculateMonthlyTeamAttendanceRecap($)),!g||!Array.isArray(g.items)||g.items.length===0){typeof window.showToast=="function"&&window.showToast("Data presensi tim belum tersedia!");return}ue("doc-modal-title","Pratinjau Rekapitulasi Presensi Tim"),ue("doc-modal-subtitle",`Rekapitulasi Presensi & Kedisiplinan Staf • Periode ${i(g.periodLabel)} • Kertas A4`);const w=Se("w-16 h-16"),T=te(Date.now(),!0),D=`ATT-${$.replace(/-/g,"")}`,R=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${w}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(c.store?.name||"TOKO PUTRI UTAMA TEKNIK")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(c.store?.slogan||"Pusat Bahan Bangunan & Alat Teknik")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(c.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(c.store?.wa||c.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl sm:text-2xl tracking-widest text-slate-900 uppercase">REKAPITULASI PRESENSI</h2>
                <h3 class="font-bold text-xs tracking-wider text-[var(--color-primary)] uppercase">Kedisiplinan &amp; Uang Makan Tim</h3>
                <p class="text-xs font-bold text-slate-700 mt-1 font-mono">#${i(D)}</p>
                <p class="text-[11px] font-semibold text-slate-500 mt-0.5">Periode: <b class="text-slate-800">${i(g.periodLabel)}</b></p>
                <p class="text-[10px] text-slate-400 mt-0.5">Dicetak: ${T}</p>
            </div>
        </div>
        `,_=`
        <div class="grid grid-cols-4 gap-3 mb-5">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Rata-Rata Disiplin</span>
                <span class="text-lg font-black text-slate-900 font-mono">${g.avgAttendanceRate}%</span>
                <span class="text-[10px] text-slate-500 block">Tingkat Kehadiran Tim</span>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Total Hari Hadir</span>
                <span class="text-lg font-black text-slate-900 font-mono">${g.totalWorkDays} Hari</span>
                <span class="text-[10px] text-slate-500 block">${g.totalPresentDays} Tepat, ${g.totalLateDays} Terlambat</span>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Izin, Sakit &amp; Alpha</span>
                <span class="text-lg font-black text-slate-900 font-mono">${g.totalPermitDays+g.totalSickDays+g.totalAlphaDays} Hari</span>
                <span class="text-[10px] text-slate-500 block">${g.totalPermitDays} Iz • ${g.totalSickDays} Sk • ${g.totalAlphaDays} Al</span>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Akumulasi Uang Makan</span>
                <span class="text-lg font-black text-slate-900 font-mono">${y(g.totalTeamAllowance)}</span>
                <span class="text-[10px] text-slate-500 block">Hak Kompensasi Tim</span>
            </div>
        </div>
        `,k=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-2 rounded-tl-xl text-center w-8 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Karyawan &amp; Jabatan</th>
            <th class="py-2.5 px-2 text-center w-12 border-r border-slate-700">Hadir</th>
            <th class="py-2.5 px-2 text-center w-14 border-r border-slate-700">Terlambat</th>
            <th class="py-2.5 px-2 text-center w-10 border-r border-slate-700">Izin</th>
            <th class="py-2.5 px-2 text-center w-10 border-r border-slate-700">Sakit</th>
            <th class="py-2.5 px-2 text-center w-10 border-r border-slate-700">Alpha</th>
            <th class="py-2.5 px-2 text-center w-16 border-r border-slate-700">Total Masuk</th>
            <th class="py-2.5 px-2 text-center w-16 border-r border-slate-700">% Disiplin</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-24">Hak Tunjangan</th>
        </tr>
        `,B=g.items.map((j,z)=>{const P=j.attendanceRate>=95?"bg-emerald-100 text-emerald-800 border-emerald-300":j.attendanceRate>=80?"bg-amber-100 text-amber-800 border-amber-300":"bg-rose-100 text-rose-800 border-rose-300";return`
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="py-2 px-2 text-center font-mono text-slate-400 text-[10px]">${z+1}</td>
                <td class="py-2 px-3">
                    <div class="font-bold text-slate-900 text-xs">${i(j.name)}</div>
                    <div class="text-[9.5px] text-slate-500 font-mono flex items-center gap-1.5">
                        <span>${i(j.employeeId)}</span>
                        <span>•</span>
                        <span class="font-sans">${i(j.position)}</span>
                    </div>
                </td>
                <td class="py-2 px-2 text-center font-mono font-bold text-slate-800">${j.presentDays}</td>
                <td class="py-2 px-2 text-center font-mono font-bold ${j.lateDays>0?"text-amber-600":"text-slate-400"}">${j.lateDays}</td>
                <td class="py-2 px-2 text-center font-mono text-slate-500">${j.permitDays}</td>
                <td class="py-2 px-2 text-center font-mono text-slate-500">${j.sickDays}</td>
                <td class="py-2 px-2 text-center font-mono font-bold ${j.alphaDays>0?"text-rose-600":"text-slate-400"}">${j.alphaDays}</td>
                <td class="py-2 px-2 text-center font-mono font-bold text-slate-900">${j.totalWorkDays} Hari</td>
                <td class="py-2 px-2 text-center">
                    <span class="inline-block px-1.5 py-0.5 rounded text-[9.5px] font-black border ${P}">
                        ${j.attendanceRate}%
                    </span>
                </td>
                <td class="py-2 px-3 text-right font-mono font-bold text-slate-900">${y(j.totalAllowance)}</td>
            </tr>
            `}),U=`
        <div class="border-t-2 border-slate-800 bg-slate-50 p-3 rounded-xl mb-4 text-xs font-bold text-slate-800 flex justify-between items-center">
            <div class="flex items-center gap-2">
                <span class="uppercase tracking-wider text-[11px] font-black">TOTAL TIM (${g.totalMembers} Staf):</span>
                <span class="text-slate-500 font-mono text-[11px]">${g.totalWorkDays} Hari Kerja Total</span>
            </div>
            <div class="flex items-center gap-6 font-mono">
                <span class="text-slate-600">Rata-rata Disiplin: <b class="text-slate-900">${g.avgAttendanceRate}%</b></span>
                <span>Total Tunjangan: <b class="text-emerald-700 text-sm font-black">${y(g.totalTeamAllowance)}</b></span>
            </div>
        </div>
        `,N=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-4 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Dibuat oleh (Pengelola HR / Kasir Kepala):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 uppercase">Staf Administrasi &amp; HR</span>
                <span class="text-[9.5px] text-slate-500">${i(c.store?.name||"Toko Putri")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Mengetahui &amp; Disetujui oleh:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 uppercase">Direksi / Pemilik Toko</span>
                <span class="text-[9.5px] text-slate-500">${i(c.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,W=Ae({docTitle:"Rekapitulasi Presensi & Kedisiplinan Tim",docNumber:`#${D}`,docDate:T,kopHtml:R,metaHtml:_,tableHeaderHtml:k,rows:B,summaryHtml:U,signaturesHtml:N,singlePageMax:9,itemsFirstPage:8,itemsMiddlePage:14,itemsLastPage:7});Te(W);return}const n=t||window.cVOrd,a=(window.gOrds||[]).find($=>String($.orderId)===String(n))||(window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(n)?window.lastPrintedOrder:null);if(!a){typeof window.showToast=="function"&&window.showToast("Data pesanan tidak ditemukan!");return}ue("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const o=a.dateString?new Date(a.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"",r=Se("w-16 h-16"),l=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${r}
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
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${o}</p>
        </div>
    </div>
    `,p=`
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
    `,d=Array.isArray(a.items)?a.items:Array.isArray(a.cart)?a.cart:[];if(e==="invoice"){const $=`
        <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
            <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Produk &amp; Varian</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Sat.</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total</th>
        </tr>
        `,g=d.map((k,B)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${B+1}</td>
            <td class="py-2.5 px-3 font-bold flex items-center gap-1.5">
                ${i(k.name)} 
                ${k.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${i(k.variantName)}</span>`:""}
                ${k.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${i(k.colorCode)};"></span>`:""}
                ${k.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${i(k.poTime)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${parseFloat(k.qty)} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(k.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${y(k.effectivePrice)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${y(k.effectivePrice*parseFloat(k.qty))}</td>
        </tr>
        `);let w="";if((a.pointsEarned>0||a.finalMemberPoints!==void 0&&a.finalMemberPoints!==null)&&(w+=`
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 flex items-center gap-4">
                <div class="w-8 h-8 rounded-lg bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
                ${a.pointsEarned>0?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-sm text-amber-700">+${a.pointsEarned}</p></div>`:""}
                ${a.finalMemberPoints!==void 0&&a.finalMemberPoints!==null?`<div><p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Member</p><p class="font-bold text-sm text-amber-700">${a.finalMemberPoints}</p></div>`:""}
            </div>`),a.claimedReward&&(w+=`
            <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-3 mb-4 flex items-center justify-between gap-4">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                    <div>
                        <p class="text-[9px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${a.claimedReward.pointsCost} Poin)</p>
                        <p class="font-bold text-xs text-violet-800 uppercase">${i(a.claimedReward.name)}</p>
                    </div>
                </div>
                <span class="text-[9.5px] font-bold px-2.5 py-1 rounded-lg bg-violet-600 text-white uppercase tracking-wider">${i(a.claimedReward.status==="ready"?"SERTAKAN PENGIRIMAN":"KLAIM RESMI")}</span>
            </div>`),a.payment?.method==="tempo")if(!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater")){const B=a.payment?.paylaterMonths||1,U=a.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":a.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)",N=Array.isArray(a.payment?.paylaterSchedule)&&a.payment.paylaterSchedule.length>0;let W="";if(N){Math.max(0,parseFloat(a.payment?.tempoBalance)||0);const z=(a.payment?.installments||[]).reduce((Q,fe)=>Q+(parseFloat(fe.amount)||0),0);let P=0,le=!1;W=`
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
                                ${a.payment.paylaterSchedule.map((Q,fe)=>{const J=Q.installmentIndex||Q.installmentNo||Q.installmentNumber||Q.month||fe+1,Re=parseFloat(Q.pokok||Q.principal)||0,X=parseFloat((Q.adminFee||0)+(Q.serviceFee||0))||0,Y=parseFloat(Q.total||Q.totalMonthly||Q.totalInstallment)||Re+X;P+=Y;const I=Q.dueDate||0,ie=Q.dueDateFormatted||Q.dueDateStr||(I?te(I):"-");let oe="";return z>=P?oe='<span class="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase bg-emerald-100 text-emerald-700 border border-emerald-300">LUNAS</span>':le?oe='<span class="px-1.5 py-0.5 rounded text-[8px] font-medium uppercase bg-slate-100 text-slate-500">MENDATANG</span>':(le=!0,oe='<span class="px-1.5 py-0.5 rounded text-[8px] font-black uppercase bg-amber-100 text-amber-800 border border-amber-300">BULAN INI</span>'),`
                                    <tr>
                                        <td class="py-1 px-2 font-bold text-slate-800 text-center font-sans">Bulan Ke-${J}</td>
                                        <td class="py-1 px-2 text-slate-600 text-center">${ie}</td>
                                        <td class="py-1 px-2 text-right text-slate-600">${y(Re)}</td>
                                        <td class="py-1 px-2 text-right text-slate-500">${y(X)}</td>
                                        <td class="py-1 px-2 font-black text-right text-emerald-800">${y(Y)}</td>
                                        <td class="py-1 px-2 text-center font-sans">${oe}</td>
                                    </tr>`}).join("")}
                            </tbody>
                        </table>
                    </div>`}w+=`
                <div class="mb-4 border border-emerald-200 bg-emerald-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-emerald-800 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-handshake text-emerald-600 mr-1"></i> Putri PayLater (${U}):</h4>
                    <p class="text-[9.5px] text-emerald-700 font-semibold leading-relaxed">
                        Sistem pembayaran cicilan resmi Toko Putri tanpa biaya tersembunyi. Jatuh Tempo Pertama: ${a.payment.tempoDueDate?te(a.payment.tempoDueDate):"-"}.
                        ${a.payment.paylaterMonthlyInstallment?` Angsuran: <b>${y(a.payment.paylaterMonthlyInstallment)} / bulan</b> (${B}x).`:""}
                    </p>
                    ${W}
                </div>`}else w+=`
                <div class="mb-4 border border-pink-200 bg-pink-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-pink-700 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo:</h4>
                    <p class="text-[9.5px] text-pink-600 font-semibold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${a.payment.tempoDueDate?te(a.payment.tempoDueDate):"-"}). Keterlambatan dikenakan denda sesuai regulasi toko.</p>
                </div>`;const D=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran Toko Putri:
                </h4>
                <div class="space-y-1.5 pt-0.5">${xt("font-mono text-xs")}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi pembayaran via WhatsApp: <b>${i(c.store?.wa||c.store?.phone||"-")}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Terima kasih atas transaksi Anda di ${i(c.store?.name||"Toko Putri")}.</p>
                </div>
            </div>

            ${(()=>{const k=yt(a);return`
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                    <div class="flex justify-between text-slate-600"><span>Subtotal Produk</span><span class="font-mono">${y(k.subtotal)}</span></div>
                    ${k.shipping>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim</span><span class="font-mono">${y(k.shipping)}</span></div>`:""}
                    ${k.shippingDiscount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Ongkir</span><span class="font-mono">-${y(k.shippingDiscount)}</span></div>`:""}
                    ${k.productDiscount>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Diskon Produk</span><span class="font-mono">-${y(k.productDiscount)}</span></div>`:""}
                    ${k.pointDiscount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Poin Reward</span><span class="font-mono">-${y(k.pointDiscount)}</span></div>`:""}
                    ${k.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater</span><span class="font-mono">+${y(k.paylaterAdminFee)}</span></div>`:""}
                    ${k.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan</span><span class="font-mono">+${y(k.paylaterServiceFee)}</span></div>`:""}
                    ${k.hasPpn?`
                    <div class="flex justify-between text-slate-600"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-mono">${y(k.dppAmount)}</span></div>
                    <div class="flex justify-between text-amber-600 font-bold"><span>${k.ppnLabel}</span><span class="font-mono">${k.ppnAmount>0?(k.isInclusive?"":"+")+y(k.ppnAmount):"Rp 0"}</span></div>
                    `:""}
                    
                    <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-2 shadow-xs">
                        <span class="font-bold text-xs uppercase tracking-widest">Grand Total</span>
                        <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${y(k.grandTotal)}</span>
                    </div>
                `})()}
                ${a.payment?.method==="tempo"?`
                <div class="flex justify-between text-emerald-600 font-bold"><span>${a.payment?.isPaylater||a.payment?.subMethod==="paylater"?"Limit Terpakai / DP":"Uang Muka (DP)"}</span><span class="font-mono">${y(a.payment?.tempoDp||0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-2.5 rounded-xl mt-1 border border-rose-200">
                    <span class="font-bold text-xs uppercase tracking-widest">${a.payment?.isPaylater||a.payment?.subMethod==="paylater"?"Sisa Tagihan PayLater":"Sisa Tagihan"}</span>
                    <span class="font-mono text-sm font-black tracking-tight">${y(a.payment?.tempoBalance||0)}</span>
                </div>
                ${(a.payment?.isPaylater||a.payment?.subMethod==="paylater")&&a.payment?.paylaterMonthlyInstallment?`
                <div class="flex justify-between text-[11px] text-emerald-700 font-bold">
                    <span>Angsuran per Bulan (${a.payment?.paylaterMonths||1}x)</span>
                    <span class="font-mono font-black">${y(a.payment.paylaterMonthlyInstallment)}/bln</span>
                </div>
                `:""}
                `:""}
            </div>
        </div>
        `,R=`
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
        `,_=Ae({docTitle:a.payment?.method==="tempo"?"Proforma Invoice":"Faktur Invoice",docNumber:`#${a.orderId}`,docDate:o,kopHtml:l,metaHtml:p,tableHeaderHtml:$,rows:g,extraBlocksHtml:w,summaryHtml:D,signaturesHtml:R,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:12,itemsLastPage:5});Te(_);return}const m=a.delivery||{},u=m.doNumber||"DO-"+String(new Date().getFullYear()).slice(-2)+String(new Date().getMonth()+1).padStart(2,"0")+"-"+String(a.orderId).replace(/[^a-zA-Z0-9]/g,"").slice(-5).toUpperCase(),x=typeof ia=="function"?ia(u,{height:34,showText:!0,fontSize:9,className:"w-44 h-auto"}):"",h=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
        <div class="flex items-center gap-4">
            ${r}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(c.store?.name||"TOKO PUTRI")}</h1>
                <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${i(c.store?.slogan||"Bahan Bangunan & Alat Teknik")}</p>
                <p class="text-[11px] font-medium text-slate-500 mt-0.5 leading-snug">${i(c.store?.address||"Alamat fisik toko")}</p>
                <p class="text-[11px] font-medium text-slate-500"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(c.store?.wa||"-")}</p>
                ${a.payment?.taxNpwp||c.store?.taxNpwp?`<p class="text-[10px] font-semibold text-slate-600 mt-0.5"><i class="fa-solid fa-id-card text-blue-500"></i> NPWP: <span class="font-mono">${i(a.payment?.taxNpwp||c.store.taxNpwp)}</span></p>`:""}
            </div>
        </div>
        <div class="text-right flex flex-col items-end">
            <h2 class="font-black text-2xl tracking-widest text-amber-600 uppercase">SURAT JALAN</h2>
            <p class="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider mt-0.5">Delivery Order (DO)</p>
            <div class="mt-1.5 p-1 rounded-lg border border-slate-200/90 bg-white">
                ${x}
            </div>
            <p class="text-[10.5px] font-semibold text-slate-500 mt-1">Tanggal: ${o}</p>
        </div>
    </div>
    `,v=m.recipientName||a.isDropPoint&&a.dropPoint?.name||a.customer?.name||"-",b=m.recipientPhone||a.isDropPoint&&a.dropPoint?.wa||a.customer?.wa||"-",S=m.destinationAddress||a.isDropPoint&&a.dropPoint?.address||a.customer?.address||"-",L=m.unloadNotes||a.customer?.note||"",H=`
    <div class="grid grid-cols-2 gap-4 mb-4 text-xs">
        <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div>
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 border-b border-slate-200 pb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-map-location-dot text-rose-500"></i> Tujuan Pengiriman Proyek / Drop Point
                </h3>
                <p class="font-bold text-sm text-slate-900 uppercase">${i(v)} ${b!=="-"?`<span class="text-xs font-mono font-medium text-slate-500">(+${i(b)})</span>`:""}</p>
                <p class="text-xs text-slate-700 leading-relaxed mt-1">${i(S)}</p>
            </div>
            ${L?`
            <div class="mt-2 pt-1.5 border-t border-dashed border-amber-300 text-[10.5px] text-amber-800 font-semibold bg-amber-50/80 p-2 rounded-lg">
                <i class="fa-solid fa-note-sticky text-amber-600 mr-1"></i> Catatan Bongkar: ${i(L)}
            </div>`:""}
        </div>

        <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1.5">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 border-b border-slate-200 pb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-truck text-[var(--color-primary)]"></i> Armada &amp; Pengemudi Toko
            </h3>
            <div class="flex justify-between items-center text-xs">
                <span class="text-slate-500 font-medium">No. Ref Pesanan:</span>
                <span class="font-bold font-mono text-slate-800">#${i(a.orderId)}</span>
            </div>
            <div class="flex justify-between items-center text-xs">
                <span class="text-slate-500 font-medium">Armada Angkut:</span>
                <span class="font-bold text-slate-800">${i(m.fleetName||"Mobil Pick-up L300")}</span>
            </div>
            <div class="flex justify-between items-center text-xs">
                <span class="text-slate-500 font-medium">Plat Nomor:</span>
                <span class="font-mono font-bold text-slate-800 uppercase">${i(m.plateNumber||"-")}</span>
            </div>
            <div class="flex justify-between items-center text-xs">
                <span class="text-slate-500 font-medium">Sopir / Helper:</span>
                <span class="font-bold text-slate-800">${i(m.driverName||"Petugas Toko")}${m.helperName?` / ${i(m.helperName)}`:""}</span>
            </div>
        </div>
    </div>
    `,M=`
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Nama &amp; Spesifikasi Barang</th>
        <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Satuan</th>
        <th class="py-2.5 px-2.5 text-center w-20 border-r border-slate-700">Cek Gudang</th>
        <th class="py-2.5 px-2.5 rounded-tr-xl text-center w-20">Cek Proyek</th>
    </tr>
    `,O=d.map(($,g)=>`
    <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3 text-center font-mono text-slate-500">${g+1}</td>
        <td class="py-2.5 px-3 font-bold uppercase flex items-center gap-1.5">
            ${i($.name)} 
            ${$.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${i($.variantName)}</span>`:""}
            ${$.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${i($.colorCode)};"></span>`:""}
            ${$.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${i($.poTime)}</span>`:""}
        </td>
        <td class="py-2.5 px-3 text-center font-bold text-base text-slate-800">${parseFloat($.qty)}</td>
        <td class="py-2.5 px-3 text-center text-slate-500 font-bold uppercase text-[11px]">${i($.unit||"pcs")}</td>
        <td class="py-2.5 px-2 text-center"><div class="w-4 h-4 border-2 border-slate-400 mx-auto rounded-sm shadow-inner"></div></td>
        <td class="py-2.5 px-2 text-center"><div class="w-4 h-4 border-2 border-slate-400 mx-auto rounded-sm shadow-inner"></div></td>
    </tr>
    `),E=m.signature&&m.signature.signatureDataUrl?`
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-1 uppercase tracking-widest text-[9px]">Penerima / Mandor:</span>
            <div class="h-14 flex items-center justify-center">
                <img src="${m.signature.signatureDataUrl}" alt="TTD Mandor" class="h-12 w-auto object-contain">
            </div>
            <div class="w-32 border-b-2 border-slate-800 mb-1"></div>
            <span class="font-bold text-slate-900">${i(m.signature.signerName||v)}</span>
            <span class="text-[8px] font-mono text-emerald-600 uppercase font-bold">Terverifikasi Digital</span>
        </div>
    `:`
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Penerima / Mandor:</span>
            <div class="w-32 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">${i(v)}</span>
        </div>
    `,G=`
    <div class="grid grid-cols-4 gap-4 text-center text-xs mt-auto pt-4 border-t border-slate-200">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Petugas Gudang:</span>
            <div class="w-32 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">Nama &amp; TTD</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Sopir / Pengantar:</span>
            <div class="w-32 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">${i(m.driverName||"Nama & TTD")}</span>
        </div>
        ${E}
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Hormat Kami:</span>
            <div class="w-32 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900 uppercase">${i(c.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,K=Ae({docTitle:"Surat Jalan Pengiriman",docNumber:`#${u}`,docDate:o,kopHtml:h,metaHtml:H,tableHeaderHtml:M,rows:O,signaturesHtml:G,singlePageMax:7,itemsFirstPage:7,itemsMiddlePage:14,itemsLastPage:6});Te(K)},Cs=()=>{const e=window.cart||[];if(!e||e.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}ve="sph";const t="SPH-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.floor(1e3+Math.random()*9e3),s=te(new Date),n=te(new Date(Date.now()+14*24*60*60*1e3));ue("doc-modal-title","Surat Penawaran Harga (SPH)");const a=Se("w-16 h-16"),o=typeof window.getEffP=="function"?window.getEffP:b=>b.price||0;let r=0;const l=e.map((b,S)=>{const L=parseFloat(b.qty)||1,H=o(b),M=L*H;return r+=M,`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${S+1}</td>
            <td class="py-2.5 px-3 font-bold">
                ${i(b.name)}
                ${b.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${i(b.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${L} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(b.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${y(H)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${y(M)}</td>
        </tr>
        `}),p=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${a}
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
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${s}</p>
            <span class="inline-block mt-1 px-2.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-300 rounded text-[10px] font-bold uppercase tracking-wider">
                Berlaku s/d: ${n}
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
    `,m=`
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
            <div class="flex justify-between px-3"><span>Subtotal Estimasi</span><span class="font-mono">${y(r)}</span></div>
            <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-1 shadow-xs">
                <span class="font-bold text-xs uppercase tracking-widest">Total Penawaran</span>
                <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${y(r)}</span>
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
            <span class="font-bold text-slate-900 uppercase">${i(c.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,v=Ae({docTitle:"Surat Penawaran Harga",docNumber:`#${t}`,docDate:s,kopHtml:p,metaHtml:d,tableHeaderHtml:m,rows:l,summaryHtml:u,extraBlocksHtml:x,signaturesHtml:h,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:5});Te(v)},Te=e=>{const t=f("doc-paper-content");if(!t)return;t.innerHTML=e.join("");const s=e.length,n=f("doc-page-count-badge");n&&(n.textContent=`${s} Halaman A4`),Gn(s)},Gn=(e=1)=>{const t=f("doc-preview-modal"),s=f("doc-preview-modal-box");t&&(t.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),_t(t,s),t.classList.remove("hidden"),mt(),setTimeout(()=>{mt()},60),setTimeout(()=>{mt()},200))},mt=()=>{const e=f("doc-paper-scroll-area"),t=f("doc-paper-content"),s=f("doc-paper-wrapper");if(!e||!t||!s)return;const n=794,a=window.innerWidth<640?12:32,o=e.clientWidth-a,r=Math.min(1,Math.max(.2,o/n));t.style.transform=`translateX(-50%) scale(${r})`;const l=t.offsetHeight||t.scrollHeight;s.style.height=l*r+48+"px"};window.addEventListener("resize",()=>{const e=f("doc-preview-modal");e&&!e.classList.contains("hidden")&&mt()});const Ls=(e=!1)=>{const t=f("doc-preview-modal"),s=f("doc-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{at(t,s)}):at(t,s))},Rs=()=>{const e=f("doc-paper-content"),t=e?e.innerHTML:"";if(!t){typeof window.showToast=="function"&&window.showToast("Tidak ada dokumen yang dicetak!");return}if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){let o=f("a4-print-section");o||(o=document.createElement("div"),o.id="a4-print-section",document.body.appendChild(o)),o.innerHTML=t,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500);return}const s=window.open("","_blank"),a=`<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>${i(ve==="pricelist"?"Katalog & Daftar Harga Resmi":ve==="invoice"?"Faktur Invoice":ve==="po"?"Purchase Order":ve==="sph"?"Penawaran Harga":ve==="stock_opname"?"Berita Acara Stock Opname":ve==="tempo_recap"?"Rekap Buku Piutang Toko":ve==="tempo_customer_ledger"?"Kartu Piutang Pelanggan":ve==="sales_return"?"Nota Retur Penjualan":ve==="vendor_return"?"Surat Pengembalian Barang":ve==="attendance_recap"?"Rekap Presensi & Kedisiplinan Tim":"Dokumen Resmi A4")} - Cetak A4 Standar Presisi</title>
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
            color: #000000 !important;
            -webkit-font-smoothing: antialiased !important;
            text-rendering: geometricPrecision !important;
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
            color: #000000 !important;
        }
        .a4-page:last-child {
            page-break-after: avoid !important;
            break-after: avoid !important;
        }
        .a4-page th, .a4-page td {
            color: #000000 !important;
        }
        .a4-page .font-bold, .a4-page .font-black, .a4-page b, .a4-page strong {
            font-weight: 800 !important;
            color: #000000 !important;
        }
        .a4-page-footer {
            margin-top: auto;
            padding-top: 8px;
            border-top: 1px solid #94a3b8;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 10px;
            font-weight: 600;
            color: #334155 !important;
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
</html>`;if(!s){let o=document.getElementById("a4-print-fallback-iframe");o||(o=document.createElement("iframe"),o.id="a4-print-fallback-iframe",o.style.position="fixed",o.style.right="0",o.style.bottom="0",o.style.width="0",o.style.height="0",o.style.border="0",o.style.opacity="0",document.body.appendChild(o));const r=o.contentWindow.document;r.open(),r.write(a),r.close(),setTimeout(()=>{try{o.contentWindow.focus(),o.contentWindow.print()}catch(l){console.warn("[DocPrint] Fallback iframe print error:",l)}},650);return}s.document.open(),s.document.write(a),s.document.close()},Is=async e=>{if(!Ds){ea(!0),je(e==="image"?"Membuat Gambar HD...":"Menyusun Dokumen PDF A4...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{Ve(),ea(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const t=f("doc-paper-content");if(!t)throw new Error("Elemen dokumen tidak ditemukan.");let s=Array.from(t.querySelectorAll(".a4-page"));s.length===0&&(s=[t]);const n=window.cVOrd||Date.now().toString(36).toUpperCase(),a=`${ve.toUpperCase()}_${n}`,o=async r=>{const l=document.createElement("div");l.style.position="fixed",l.style.top="-9999px",l.style.left="-9999px",l.style.width="794px",l.style.height="1123px",l.style.backgroundColor="#ffffff",l.style.overflow="hidden",l.style.zIndex="-9999";const p=r.cloneNode(!0);p.style.margin="0 auto",p.style.boxShadow="none",p.style.border="none",p.style.borderRadius="0",p.style.transform="none",p.style.width="794px",p.style.height="1123px",p.style.minHeight="1123px",p.style.maxHeight="1123px",p.style.overflow="hidden",l.appendChild(p),document.body.appendChild(l);const d=Array.from(p.querySelectorAll("img"));await Promise.all(d.map(u=>u.complete?Promise.resolve():new Promise(x=>{u.addEventListener("load",x,{once:!0}),u.addEventListener("error",x,{once:!0})}))),await new Promise(u=>setTimeout(u,200));const m=await html2canvas(l,{scale:2,useCORS:!0,backgroundColor:"#ffffff",width:794,height:1123,windowWidth:794,windowHeight:1123});return document.body.removeChild(l),m};if(e==="image")if(s.length===1){const l=(await o(s[0])).toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(l,`${a}.png`,"image/png");else{const p=document.createElement("a");p.download=`${a}.png`,p.href=l,p.click()}typeof window.showToast=="function"&&window.showToast("Gambar A4 Presisi Berhasil Disimpan!")}else{for(let r=0;r<s.length;r++){je(`Menyimpan Gambar Halaman ${r+1} dari ${s.length}...`);const p=(await o(s[r])).toDataURL("image/png",1),d=`${a}_Hal_${r+1}.png`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(p,d,"image/png");else{const m=document.createElement("a");m.download=d,m.href=p,m.click()}await new Promise(m=>setTimeout(m,250))}typeof window.showToast=="function"&&window.showToast(`Berhasil menyimpan ${s.length} gambar halaman A4!`)}else{const r=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,l=new r({orientation:"portrait",unit:"mm",format:"a4"});for(let p=0;p<s.length;p++){je(`Menyusun PDF Hal ${p+1} dari ${s.length}...`);const m=(await o(s[p])).toDataURL("image/jpeg",.95);p>0&&l.addPage("a4","portrait"),l.addImage(m,"JPEG",0,0,210,297,void 0,"FAST")}window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"?window.AndroidNativeApp.saveOrShareFile(l.output("datauristring"),`${a}.pdf`,"application/pdf"):l.save(`${a}.pdf`),typeof window.showToast=="function"&&window.showToast(`File PDF Standar A4 (${s.length} Halaman) Berhasil Disimpan!`)}}catch(t){console.error("Export Error: ",t),typeof window.showToast=="function"&&window.showToast(t&&t.message?`Gagal: ${t.message}`:"Gagal memproses dokumen.")}finally{Ve(),ea(!1)}}},Ns=()=>ha("tempo_recap");window.openDocPreview=ha;window.openCartSPHPreview=Cs;window.openTempoRecapDocPreview=Ns;window.fitDocPreview=mt;window.closeDocPreviewModal=Ls;window.printDocA4=Rs;window.exportDocFile=Is;const Wr=Object.freeze(Object.defineProperty({__proto__:null,closeDocPreviewModal:Ls,get currentDocType(){return ve},exportDocFile:Is,fitDocPreview:mt,getStoreBankListHtml:xt,openCartSPHPreview:Cs,openDocPreview:ha,openTempoRecapDocPreview:Ns,printDocA4:Rs},Symbol.toStringTag,{value:"Module"}));export{Kr as $,st as A,Ho as B,fs as C,ut as D,Pt as E,hn as F,Io as G,jo as H,wo as I,Be as J,gn as K,co as L,Rr as M,po as N,Ir as O,mo as P,Nr as Q,se as R,Lr as S,br as T,bo as U,Mr as V,Xe as W,Ur as X,Sa as Y,yt as Z,jt as _,c as a,go as a$,Tr as a0,ue as a1,js as a2,Bo as a3,Ro as a4,Va as a5,_o as a6,uo as a7,xo as a8,Cr as a9,ir as aA,lr as aB,ur as aC,dr as aD,Js as aE,Ys as aF,Qs as aG,cr as aH,pr as aI,mr as aJ,Ga as aK,Br as aL,Er as aM,Oo as aN,Fs as aO,Z as aP,ra as aQ,fo as aR,ar as aS,sr as aT,Ee as aU,Xo as aV,jr as aW,_r as aX,Qn as aY,Or as aZ,ot as a_,Co as aa,Fr as ab,rn as ac,on as ad,Jo as ae,pe as af,Sr as ag,xr as ah,Ut as ai,er as aj,Eo as ak,Fa as al,Hr as am,so as an,oo as ao,Ko as ap,lo as aq,Pr as ar,hr as as,gr as at,ne as au,qs as av,Vs as aw,Zs as ax,Xs as ay,Gs as az,qa as b,Xn as b0,tr as b1,Ws as b2,fr as b3,eo as b4,to as b5,ao as b6,no as b7,ro as b8,io as b9,Ar as ba,ho as bb,Zn as bc,rr as bd,wr as be,yr as bf,vr as bg,kr as bh,Dr as bi,Jt as bj,$s as bk,nt as bl,As as bm,na as bn,xn as bo,hs as bp,Tn as bq,kn as br,Pn as bs,gs as bt,wn as bu,Qt as bv,At as bw,vn as bx,zr as by,Wr as bz,Ha as c,_s as d,f as e,y as f,No as g,Wa as h,i,$r as j,re as k,je as l,Fo as m,Ve as n,_t as o,Us as p,de as q,zt as r,za as s,ae as t,tt as u,at as v,or as w,nr as x,zs as y,ia as z};
