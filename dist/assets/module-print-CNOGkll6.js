const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js","assets/module-pos-DKUGDiv0.js","assets/module-member-BzzNBRBu.js","assets/module-faq-C7VlsM4e.js"])))=>i.map(i=>d[i]);
import{f as st}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const ms="modulepreload",fs=function(e){return"/"+e},ua={},Sa=function(t,s,n){let a=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");a=Promise.allSettled(s.map(d=>{if(d=fs(d),d in ua)return;ua[d]=!0;const c=d.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":ms,c||(f.as="script"),f.crossOrigin="",f.href=d,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((b,g)=>{f.addEventListener("load",b),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return a.then(r=>{for(const l of r||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},bs={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const ws=typeof window<"u"&&window.FIREBASE_CONFIG?window.FIREBASE_CONFIG:bs;st.apps.length||st.initializeApp(ws);const Ne=st.firestore(),Dt=st.auth();typeof window<"u"&&(window.firebase=st,window.db=Ne,window.auth=Dt);try{Ne.settings({ignoreUndefinedProperties:!0,experimentalForceLongPolling:!0,merge:!0})}catch{}typeof window<"u"&&(window.addEventListener("online",()=>{try{Ne.enableNetwork().catch(()=>{})}catch{}}),window.addEventListener("offline",()=>{try{Ne.disableNetwork().catch(()=>{})}catch{}}));let xs=null;const tn=()=>{Sa(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{xs=st.analytics()}catch{}}).catch(()=>{})},Oe="K2ijSERTT2dg27yYGTEgn6XHSnW2",gs={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"pill",brandStyle:"logo",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showHeroSlide:!0,heroMascotImg:"/putri_mascot_anim.gif",heroBadgeText:"Siap Melayani",heroWelcomeTag:"SELAMAT DATANG",heroTitle:"",heroSubtitle:"",showRewardCatalog:!0,showScrollTopButton:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,paylater:{enabled:!0,minOrder:2e4,maxOrder:1e7,noticeText:"Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.",tenors:{"30d":{enabled:!0,label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:"flat",adminFeeValue:0,serviceFeeType:"flat",serviceFeeValue:0},"2m":{enabled:!0,label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:"flat",adminFeeValue:1500,serviceFeeType:"percent",serviceFeeValue:1.5},"3m":{enabled:!0,label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:"flat",adminFeeValue:2500,serviceFeeType:"percent",serviceFeeValue:2.5}}},terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},subscription:{status:"active",plan:"pro_managed",expiresAt:null,allowGraceDays:7,storeCode:"PUTRI",clientName:"Pemilik Toko",developerContact:"6281234567890",developerName:"Developer / Technical Partner"},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],productOrder:[],suppliers:[],purchases:[],expenses:[],stockOpnameHistory:[],salesReturns:[],vendorReturns:[],flashSales:[],custom_master_presets:[],employees:[],attendances:[],salaryAdvances:[],payrollRuns:[],ownerEmployee:null,hrSettings:{workDaysPerMonth:26,overtimeRatePerHour:2e4,latePenaltyPerMinute:1e3,dailyMealRate:25e3,lossDeductionScheme:"flexible"},taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let p=JSON.parse(JSON.stringify(gs)),$a=[],Aa=[],ee=[];try{const e=localStorage.getItem("freshmart_cart");e&&($a=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(Aa=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(ee=JSON.parse(e)||[])}catch{}let hs={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},ys=null,vs=null,ks=null,Ps="Semua Produk",Ts="Semua Jenis",Ss="Semua Merek",$s="",As="newest",Ms="grid",Cs=1,Ls=12,Ds="orders",Rs="",Ns=null,Os=null,Is=0,Es=[],Bs=[],Hs=[],Fs=1,le=[],Ks=null,Us=null,js=null,Ge=[],_s=[],qe=null,zs=null,qs=!1,Ws="all",Gs="today",Vs=null,Js=null;const an=e=>{Vs=e},sn=e=>{p=e},on=e=>{$a=e},nn=e=>{Aa=e},rn=e=>{ee=e},ln=e=>{hs=e},dn=e=>{ys=e},cn=e=>{vs=e},pn=e=>{ks=e},un=e=>{Ps=e},mn=e=>{Ts=e},fn=e=>{Ss=e},bn=e=>{$s=e},wn=e=>{As=e},xn=e=>{Ms=e},gn=e=>{Cs=e},hn=e=>{Ls=e},yn=e=>{Ds=e},vn=e=>{Rs=e},kn=e=>{Ns=e},Pn=e=>{Os=e},Tn=e=>{Is=e},Sn=e=>{Es=e},$n=e=>{Bs=e},An=e=>{Hs=e},Mn=e=>{Fs=e},Cn=e=>{le=e},Ln=e=>{Ge=e},Dn=e=>{_s=e},ma=e=>{qe=e},Rn=e=>{zs=e},Nn=e=>{qs=e},On=e=>{Js=e},In=e=>{Ws=e},En=e=>{Gs=e},Bn=e=>{Ks=e},Hn=e=>{Us=e},Fn=e=>{js=e};let Ma=!1;if(typeof window<"u"){const e=()=>{Ma=!0,window.__hasUserInteracted=!0};["pointerdown","touchstart","mousedown","keydown"].forEach(t=>{window.addEventListener(t,e,{capture:!0,once:!0})}),window.__hasUserInteracted=!1}const Yt=()=>typeof navigator<"u"&&navigator.userActivation?navigator.userActivation.hasBeenActive:!!(Ma||typeof window<"u"&&window.__hasUserInteracted);typeof window<"u"&&(window.checkUserGesture=Yt);const Je=(e="light")=>{try{const t=window.Capacitor?.Plugins?.Haptics;if(t){e==="light"||e==="selection"?t.impact({style:"LIGHT"}).catch(()=>{}):e==="medium"?t.impact({style:"MEDIUM"}).catch(()=>{}):e==="heavy"?t.impact({style:"HEAVY"}).catch(()=>{}):e==="success"?t.notification({type:"SUCCESS"}).catch(()=>{}):e==="warning"?t.notification({type:"WARNING"}).catch(()=>{}):e==="error"&&t.notification({type:"ERROR"}).catch(()=>{});return}if(typeof navigator<"u"&&typeof navigator.vibrate=="function"){if(!Yt())return;e==="light"||e==="selection"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="heavy"?navigator.vibrate(45):e==="success"?navigator.vibrate([15,30,20]):e==="warning"?navigator.vibrate([30,40,30]):e==="error"&&navigator.vibrate([40,50,40,50,40])}}catch{}};typeof window<"u"&&(window.triggerHaptic=Je);const Ys=e=>{if(e)switch(e){case"product-modal":typeof window.closeProductModal=="function"&&window.closeProductModal();break;case"pos-variant-sheet":typeof window.closePOSVariantSheet=="function"&&window.closePOSVariantSheet();break;case"variant-preview-modal":typeof window.closeVariantPreviewModal=="function"&&window.closeVariantPreviewModal();break;case"custom-confirm-modal":typeof window.closeConfirm=="function"&&window.closeConfirm();break;case"scanner-modal":typeof window.closeCameraScanner=="function"&&window.closeCameraScanner();break;case"modal-tempo-detail":typeof window.closeTempoDetailModal=="function"&&window.closeTempoDetailModal();break;case"modal-tempo-payment":typeof window.closeTempoPaymentModal=="function"&&window.closeTempoPaymentModal();break;case"modal-tempo-penalty":typeof window.closeTempoPenaltyModal=="function"&&window.closeTempoPenaltyModal();break;case"modal-supplier-detail":typeof window.closeSupplierDetailModal=="function"&&window.closeSupplierDetailModal();break;case"modal-supplier-form":typeof window.closeSupplierFormModal=="function"&&window.closeSupplierFormModal();break;case"modal-po-form":typeof window.closePurchaseFormModal=="function"&&window.closePurchaseFormModal();break;case"modal-po-detail":typeof window.closePurchaseDetailModal=="function"&&window.closePurchaseDetailModal();break;case"modal-po-payment":typeof window.closePurchasePaymentModal=="function"&&window.closePurchasePaymentModal();break;case"modal-po-product-picker":typeof window.closePurchasePickerModal=="function"&&window.closePurchasePickerModal();break;case"quick-menu-modal":case"quickmenu-modal":typeof window.closeQuickMenuModal=="function"&&window.closeQuickMenuModal();break;case"category-modal":typeof window.closeCategoryModal=="function"&&window.closeCategoryModal();break;case"brand-modal":typeof window.closeBrandModal=="function"&&window.closeBrandModal();break;case"quick-variant-modal":typeof window.closeQuickVariantSheet=="function"&&window.closeQuickVariantSheet();break;case"shopping-guide-modal":typeof window.closeShoppingGuideModal=="function"&&window.closeShoppingGuideModal();break;case"pos-login-modal":typeof window.closePOSLoginModal=="function"&&window.closePOSLoginModal();break;case"admin-order-modal":typeof window.closeOrderDetailModal=="function"&&window.closeOrderDetailModal();break;case"order-detail-modal":typeof window.closeCustomerOrderDetailModal=="function"&&window.closeCustomerOrderDetailModal();break;case"modal-client-tempo-pay":typeof window.closeClientPaymentModal=="function"&&window.closeClientPaymentModal();break;case"admin-modal":typeof window.closeAdminModal=="function"&&window.closeAdminModal();break;case"printer-settings-modal":typeof window.closePrinterSettingsModal=="function"&&window.closePrinterSettingsModal();break;case"modal-ask-question":typeof window.closeAskQuestionModal=="function"&&window.closeAskQuestionModal();break;case"modal-admin-faq":typeof window.closeAdminFAQModal=="function"&&window.closeAdminFAQModal();break;case"member-modal":typeof window.closeMemberModal=="function"&&window.closeMemberModal();break;case"modal-flash-sale-form":typeof window.closeFlashSaleModal=="function"&&window.closeFlashSaleModal();break;case"modal-pricelist-export":typeof window.closePriceListExportModal=="function"&&window.closePriceListExportModal();break;case"modal-owner-hr":typeof window.closeOwnerHrModal=="function"&&window.closeOwnerHrModal();break;case"modal-salary-advance-form":typeof window.closeSalaryAdvanceFormModal=="function"&&window.closeSalaryAdvanceFormModal();break;case"modal-salary-advance-detail":typeof window.closeAdvanceDetailModal=="function"&&window.closeAdvanceDetailModal();break;case"modal-payroll-item-form":typeof window.closePayrollItemModal=="function"&&window.closePayrollItemModal();break;case"modal-payslip-preview":typeof window.closePayslipPreviewModal=="function"&&window.closePayslipPreviewModal();break;default:{const t=document.getElementById(e);if(t){const s=t.querySelector('button[onclick*="close"], .fa-xmark')?.closest("button");if(s)s.click();else if(typeof window.closeModalAnim=="function"){const n=t.querySelector('.modal-bottom-sheet, [id$="-box"]')||t.firstElementChild;window.closeModalAnim(t,n)}else t.classList.add("hidden","opacity-0")}}}};let he=null,nt=null,gt=0,fa=0,ht=0,Fe=!1,ba=0;const Qs=()=>{if(typeof document>"u")return;document.addEventListener("touchstart",t=>{if(t.touches.length!==1)return;const s=t.touches[0],n=s.target.closest('[id*="modal"], [id*="sheet"]');if(!n||n.classList.contains("hidden")||n.classList.contains("opacity-0")||!(n.classList.contains("items-end")||!!s.target.closest(".modal-bottom-sheet")||n.classList.contains("modal-bottom-sheet")))return;let o=s.target.closest(".modal-bottom-sheet")||s.target.closest('[id$="-box"]');if(o||(o=s.target.closest('[id$="-content"]')),!o||s.target.closest('input, select, textarea, button, a, [role="button"], table, .no-drag'))return;const r=!!s.target.closest(".overflow-y-auto, .overflow-x-auto, .scroll-content, .custom-scrollbar"),l=o.getBoundingClientRect(),d=s.clientY-l.top;(s.target.closest(".pull-indicator")||!r&&d<=55)&&(he=o,nt=n,gt=s.clientY,fa=s.clientX,ht=gt,Fe=!1,ba=Date.now())},{passive:!0}),document.addEventListener("touchmove",t=>{if(!he||t.touches.length!==1)return;const s=t.touches[0];ht=s.clientY;const n=ht-gt,a=Math.abs(s.clientX-fa);if(!Fe&&a>Math.abs(n)){he=null;return}const o=he.classList.contains("overflow-y-auto")?he:he.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar");if(!(o&&o.scrollTop>5&&!Fe)){if(n>0){if(Fe=!0,t.cancelable&&t.preventDefault(),he.style.transform=`translateY(${n}px)`,he.style.transition="none",nt){const r=Math.max(.2,1-n/400);nt.style.backgroundColor=`rgba(15, 23, 42, ${.8*r})`}}else if(n<0&&Fe){const r=n*.2;he.style.transform=`translateY(${r}px)`,he.style.transition="none"}}},{passive:!1});const e=()=>{if(!he)return;const t=he,s=nt,n=ht-gt,a=Math.max(1,Date.now()-ba),o=n/a;he=null,nt=null,Fe&&(n>80||o>.45&&n>30)?(Je("light"),t.style.transition="transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",t.style.transform="translateY(100%)",s&&(s.style.transition="opacity 0.25s ease",s.style.opacity="0"),setTimeout(()=>{t.style.transform="",t.style.transition="",s&&(s.style.backgroundColor="",s.style.opacity=""),Ys(s?s.id:"")},250)):Fe&&(t.style.transition="transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)",t.style.transform="",s&&(s.style.transition="background-color 0.28s ease",s.style.backgroundColor=""),setTimeout(()=>{t.style.transition=""},300)),Fe=!1};document.addEventListener("touchend",e,{passive:!0}),document.addEventListener("touchcancel",e,{passive:!0})};let wa=0;const Zs=()=>{typeof document>"u"||document.addEventListener("click",e=>{const t=Date.now();if(t-wa<50)return;const s=e.target.closest('button, [role="button"], a[onclick], [id*="bnav-"], .pos-add-btn, .pos-tag-chip, #pos-variant-chips button, .interactive-tap');s&&!s.disabled&&!s.classList.contains("disabled")&&(wa=t,Je("light"))},{passive:!0,capture:!0})};let ue=null;const Xs=(e="pop")=>{try{if(typeof window>"u"||!Yt())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;ue||(ue=new t),ue.state==="suspended"&&ue.resume().catch(()=>{});const s=ue.currentTime;if(e==="pop"){const n=ue.createOscillator(),a=ue.createGain();n.type="sine",n.frequency.setValueAtTime(340,s),n.frequency.exponentialRampToValueAtTime(560,s+.07),a.gain.setValueAtTime(.14,s),a.gain.exponentialRampToValueAtTime(.001,s+.08),n.connect(a),a.connect(ue.destination),n.start(s),n.stop(s+.08)}else if(e==="success"){const n=ue.createOscillator(),a=ue.createOscillator(),o=ue.createGain(),r=ue.createGain();n.type="triangle",a.type="triangle",n.frequency.setValueAtTime(523.25,s),a.frequency.setValueAtTime(659.25,s+.09),o.gain.setValueAtTime(.12,s),o.gain.exponentialRampToValueAtTime(.001,s+.22),r.gain.setValueAtTime(.14,s+.09),r.gain.exponentialRampToValueAtTime(.001,s+.32),n.connect(o),o.connect(ue.destination),a.connect(r),r.connect(ue.destination),n.start(s),n.stop(s+.22),a.start(s+.09),a.stop(s+.32)}else if(e==="beep"){const n=ue.createOscillator(),a=ue.createGain();n.type="square",n.frequency.setValueAtTime(1040,s),a.gain.setValueAtTime(.08,s),a.gain.exponentialRampToValueAtTime(.001,s+.07),n.connect(a),a.connect(ue.destination),n.start(s),n.stop(s+.07)}}catch{}};typeof window<"u"&&(window.playNativeSound=Xs);const rt=()=>{if(typeof document>"u")return;const e=document.getElementById("native-scroll-top-btn");e&&(e.classList.add("opacity-0","translate-y-3"),e.classList.add("hidden"))};typeof window<"u"&&(window.hideFloatingScrollTop=rt);const eo=()=>{if(typeof document>"u")return;let e=document.getElementById("native-scroll-top-btn");e||(e=document.createElement("button"),e.id="native-scroll-top-btn",document.body.appendChild(e)),e.setAttribute("aria-label","Kembali ke Atas"),e.setAttribute("title","Kembali ke Atas"),e.className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 hidden opacity-0 translate-y-3 transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900/95 dark:bg-slate-800/95 text-white shadow-xl shadow-black/25 border border-slate-700/80 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_4px_20px_rgba(var(--color-primary-rgb),0.4)] hover:scale-105 active:scale-90 cursor-pointer group",e.innerHTML='<i class="fa-solid fa-arrow-up text-xs md:text-sm transition-transform duration-200 group-hover:-translate-y-0.5"></i>',e._hasClickListener||(e._hasClickListener=!0,e.addEventListener("click",()=>{Je("light");const s=document.querySelector(".view-section:not(.hidden)");if(s){const n=s.querySelector(".scroll-content");n&&n.scrollTop>10&&n.scrollTo({top:0,behavior:"smooth"})}window.scrollTo({top:0,behavior:"smooth"})}));const t=(s,n=null)=>{if(!e)return;if(typeof window<"u"&&window.appData?.store?.showScrollTopButton===!1){rt();return}const a=document.querySelector(".view-section:not(.hidden)");if(!a||a.id!=="view-catalog"&&a.id!=="view-orders"){rt();return}if(n){const r=n.closest(".view-section");if(!r||r.id!=="view-catalog"&&r.id!=="view-orders"){rt();return}}if(document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none), [id*="dialog"]:not(.hidden), .fixed.inset-0:not(.hidden):not(.pointer-events-none):not(#native-theme-ambient)')){rt();return}s>450?(e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0","translate-y-3")})):(e.classList.add("opacity-0","translate-y-3"),setTimeout(()=>{e&&e.classList.contains("opacity-0")&&e.classList.add("hidden")},300))};window.addEventListener("scroll",()=>{t(window.scrollY||document.documentElement.scrollTop)},{passive:!0}),document.addEventListener("scroll",s=>{s.target&&s.target.classList&&s.target.classList.contains("scroll-content")&&t(s.target.scrollTop,s.target)},{passive:!0,capture:!0})},to=()=>{if(typeof window>"u"||typeof document>"u")return;let e=document.getElementById("native-connectivity-banner");e||(e=document.createElement("div"),e.id="native-connectivity-banner",e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] -translate-y-16 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl",document.body.appendChild(e));let t=null;const s=n=>{clearTimeout(t),Je(n?"success":"warning"),n?(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-emerald-600 text-white border border-emerald-400/40",e.innerHTML='<i class="fa-solid fa-wifi text-xs"></i><span>Kembali Online — Terhubung</span>',t=setTimeout(()=>{e.classList.add("-translate-y-16","opacity-0")},2500)):(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-amber-500 text-slate-950 border border-amber-300/60",e.innerHTML='<i class="fa-solid fa-wifi-slash text-xs"></i><span>Mode Offline — Menggunakan Data Lokal</span>')};window.addEventListener("online",()=>s(!0)),window.addEventListener("offline",()=>s(!1))};let Ee=null,et=null;const Ca=async(e="pos_cashier")=>{try{return typeof navigator>"u"||!("wakeLock"in navigator)?!1:(Ee&&!Ee.released||(Ee=await navigator.wakeLock.request("screen"),et=e,Ee.addEventListener("release",()=>{Ee=null})),!0)}catch{return!1}},ao=async(e=null)=>{try{if(e&&et&&e!==et)return!1;if(Ee&&typeof Ee.release=="function")return await Ee.release(),Ee=null,et=null,!0}catch{}return!1};typeof document<"u"&&document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&et&&Ca(et).catch(()=>{})});const so=(e=!1)=>{try{const t=window.Capacitor?.Plugins?.StatusBar;if(!t)return;if(typeof t.setStyle=="function"&&t.setStyle({style:e?"DARK":"LIGHT"}).catch(()=>{}),typeof t.setBackgroundColor=="function"){const n=getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim()||"#10b981";t.setBackgroundColor({color:e?"#0f172a":n}).catch(()=>{})}}catch{}},oo=()=>{if(typeof window>"u")return;typeof document<"u"&&document.addEventListener("visibilitychange",()=>{document.hidden||typeof window.posSyncOfflineTransactions=="function"&&navigator.onLine&&window.posSyncOfflineTransactions(!0)});const e=window.Capacitor?.Plugins?.App;e&&typeof e.addListener=="function"&&e.addListener("appStateChange",t=>{t&&t.isActive&&typeof window.posSyncOfflineTransactions=="function"&&navigator.onLine&&window.posSyncOfflineTransactions(!0)})};typeof window<"u"&&(window.requestScreenWakeLock=Ca,window.releaseScreenWakeLock=ao,window.syncCapacitorStatusBar=so);const Kn=()=>{Qs(),Zs(),eo(),to(),oo()},La=e=>{let t="";return typeof e=="object"&&e!==null?t=`${e.name||""} ${e.category||""} ${e.subCategory||""}`.toLowerCase():t=String(e||"").toLowerCase(),t.includes("cat")||t.includes("paint")||t.includes("politur")||t.includes("thinner")||t.includes("no drop")||t.includes("kuas")||t.includes("roll")?{icon:"fa-paint-roller",gradient:"linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",bgGlow:"none",textColor:"#e11d48"}:t.includes("gembok")||t.includes("kunci")||t.includes("grendel")||t.includes("slot")||t.includes("silinder")?{icon:"fa-lock",gradient:"linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",bgGlow:"none",textColor:"#d97706"}:t.includes("paku")||t.includes("baut")||t.includes("sekrup")||t.includes("mur")||t.includes("kawat")?{icon:"fa-hammer",gradient:"linear-gradient(135deg, #64748b 0%, #334155 100%)",bgGlow:"none",textColor:"#475569"}:t.includes("pipa")||t.includes("pvc")||t.includes("paralon")||t.includes("kran")||t.includes("sambungan")||t.includes("fitting")||t.includes("knee")||t.includes("tee")?{icon:"fa-faucet-drip",gradient:"linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)",bgGlow:"none",textColor:"#0891b2"}:t.includes("semen")||t.includes("mortar")||t.includes("pasir")||t.includes("bata")||t.includes("hebel")?{icon:"fa-trowel-bricks",gradient:"linear-gradient(135deg, #ea580c 0%, #9a3412 100%)",bgGlow:"none",textColor:"#c2410c"}:t.includes("perkakas")||t.includes("tang")||t.includes("obeng")||t.includes("palu")||t.includes("bor")||t.includes("gerinda")||t.includes("meteran")||t.includes("gergaji")?{icon:"fa-toolbox",gradient:"linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",bgGlow:"none",textColor:"#4f46e5"}:{icon:"fa-box-open",gradient:"linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",bgGlow:"none",textColor:"var(--color-primary)"}},no=(e,t="",s="")=>{const n=La(e);return{id:"brand",icon:n.icon,subIcon:n.icon,label:"Produk Resmi",podGradient:n.gradient,accent:"rgba(var(--color-primary-rgb),0.1)",aura:"rgba(var(--color-primary-rgb),0.08)",shadowColor:"rgba(var(--color-primary-rgb),0.15)"}},Da=e=>{if(!e||typeof e!="string")return"TP";const s=e.replace(/[^a-zA-Z0-9\s]/g," ").trim().split(/\s+/).filter(o=>o.length>0),n=s.filter(o=>/[a-zA-Z]/.test(o)),a=n.length>0?n:s;return a.length>=2?(a[0][0]+a[1][0]).toUpperCase():a.length===1?(a[0].length>=2?a[0].slice(0,2):a[0]+"P").toUpperCase():"TP"},ro=(e,t={})=>{const s=t.size||"md",n=t.className||"",a=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk"),o=La(e),r=Da(a);return`
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
    </div>`},io=e=>(typeof e=="object"&&e!==null?e.name:String(e||"Produk"),`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
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
    </svg>`)}`),x=e=>typeof e=="string"?document.getElementById(e):e,Ra=e=>{const t=x(e);t&&t.classList.remove("hidden")},Na=e=>{const t=x(e);t&&t.classList.add("hidden")},lo=(e,t,s)=>{const n=x(e);n&&n.classList.toggle(t,s)},fe=(e,t)=>{const s=x(e);s&&(s.innerText=t)},Oa=(e,t)=>{const s=x(e);s&&(s.innerHTML=t)},co=(e,t)=>{const s=x(e);s&&(s.value=t)},po=e=>{const t=x(e);return t?t.value:""},Rt=(e,t)=>{const s=typeof e=="string"?x(e):e,n=typeof t=="string"?x(t):t;s&&(s.classList.remove("hidden","pointer-events-none"),n&&n.classList.add("pointer-events-auto"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.classList.remove("opacity-0","pointer-events-none"),n&&(n.classList.remove("translate-y-full","sm:translate-y-10","sm:translate-y-8","translate-y-6","sm:translate-y-6","scale-95"),n.classList.add("pointer-events-auto"))})}))},Ve=(e,t,s)=>{const n=typeof e=="string"?x(e):e,a=typeof t=="string"?x(t):t;if(!n){typeof s=="function"&&s();return}n.classList.add("opacity-0","pointer-events-none"),a&&(a.classList.add("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95"),a.classList.remove("pointer-events-auto")),setTimeout(()=>{n.classList.add("hidden"),typeof s=="function"&&s()},280)};typeof window<"u"&&(window.openModalAnim=Rt,window.closeModalAnim=Ve);const uo=e=>{try{return localStorage.getItem(e)}catch{return null}},mo=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},i=e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),P=e=>{const t=Number(e);if(isNaN(t)||e===null)return"Rp 0";const n=Math.abs(Math.round(t)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");return`${t<0?"-":""}Rp ${n}`},fo=(e,t=!1)=>{const s=Number(e);if(isNaN(s)||e===null||s===0)return"Rp 0";const a=Math.abs(Math.round(s)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");return t||s<0?`(Rp ${a})`:`Rp ${a}`},bo=e=>{if(!e)return new Date;if(e.timestamp&&typeof e.timestamp.toDate=="function")try{const a=e.timestamp.toDate();if(a instanceof Date&&!isNaN(a.getTime()))return a}catch{}if(e.createdAt&&typeof e.createdAt.toDate=="function")try{const a=e.createdAt.toDate();if(a instanceof Date&&!isNaN(a.getTime()))return a}catch{}if(e.timestamp&&typeof e.timestamp=="object"){const a=e.timestamp.seconds??e.timestamp._seconds;if(typeof a=="number"&&!isNaN(a)&&a>0)return new Date(a*1e3)}if(e.createdAt&&typeof e.createdAt=="object"){const a=e.createdAt.seconds??e.createdAt._seconds;if(typeof a=="number"&&!isNaN(a)&&a>0)return new Date(a*1e3)}const t=[e.dateMs,e.timestamp,e.createdAt,e.date];for(const a of t){if(typeof a=="number"&&!isNaN(a)&&a>0)return new Date(a>1e11?a:a*1e3);if(typeof a=="string"&&/^\d{10,13}$/.test(a.trim())){const o=Number(a.trim());return new Date(o>1e11?o:o*1e3)}}const s=[e.dateString,e.date,e.createdAt];for(const a of s)if(typeof a=="string"&&a.trim()&&a!=="[object Object]"){const o=new Date(a);if(!isNaN(o.getTime()))return o;const r=a.replace(/-/g,"/").replace("T"," ").replace(/\..*$/,""),l=new Date(r);if(!isNaN(l.getTime()))return l}const n=e.orderId||(typeof e=="string"?e:"");if(typeof n=="string"&&n.startsWith("ORD-")){const a=n.split("-");if(a.length>=2&&a[1].length>=6){const o=parseInt(a[1],36);if(!isNaN(o)&&o>15e11&&o<25e11)return new Date(o)}}return new Date},wo=(e,t=null)=>{if(typeof e!="string")return e;const s=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);if(!s)return e;const n=s[1];return t==="image/gif"||e.toLowerCase().includes(".gif")||n==="1rkAFxnZDe2eLQ88kan2BeGSg56IkAEJ9"?`https://drive.google.com/uc?export=view&id=${n}`:`https://lh3.googleusercontent.com/d/${n}`},xo=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(t))return t;const s=t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return s?s[1]:null},Ia=e=>{if(typeof e!="string"||!e.trim())return null;const t=e.trim(),s=xo(t);if(s)return{type:"youtube",id:s,embedUrl:`https://www.youtube.com/embed/${s}?autoplay=1&mute=1&muted=1&loop=1&playlist=${s}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const n=t.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(n&&n[1]){const a=n[1];return{type:"gdrive",id:a,streamUrl:`https://drive.google.com/uc?export=download&id=${a}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${a}`,directUrl:`https://drive.google.com/uc?export=download&id=${a}`,embedUrl:`https://drive.google.com/file/d/${a}/preview?autoplay=1`}}return{type:"direct",directUrl:t,embedUrl:t}},Un=e=>{const t=Ia(e);return t?t.embedUrl:e},jn=e=>{const t=Ia(e);return t?t.embedUrl:e},_n=(e,t)=>typeof e!="string"||!e?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${t}`:e.includes("googleusercontent.com")&&!e.includes("=")?`${e}=${t}`:e,zn=e=>{if(!e||typeof e!="string")return!0;const t=e.trim();return!!(!t||t.includes("placehold.co"))},qn=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",Wn=(e,t,s,n)=>{document.title=e||"Toko Putri";const a=(o,r,l=!1)=>{const d=l?"property":"name";let c=document.querySelector(`meta[${d}="${o}"]`);c||(c=document.createElement("meta"),c.setAttribute(d,o),document.head.appendChild(c)),c.setAttribute("content",r)};t&&a("description",t),e&&a("og:title",e,!0),t&&a("og:description",t,!0),s&&a("og:image",s,!0),n&&a("og:url",n,!0)},Gn=(e,t)=>{let s=document.getElementById(e);s||(s=document.createElement("script"),s.id=e,s.type="application/ld+json",document.head.appendChild(s)),s.textContent=JSON.stringify(t)},vt=e=>{e&&fe("loader-text",e);const t=x("global-loader");t&&(t.style.opacity="1",t.style.display="flex")},jt=()=>{const e=x("global-loader");e&&(e.style.pointerEvents="none",e.style.transition="opacity 0.25s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250))},Re=(...e)=>{if(typeof window.showToast=="function")return window.showToast(...e)},Vn=(...e)=>{if(typeof window.showConfirm=="function")return window.showConfirm(...e)},Qe={};typeof window<"u"&&(window.loadedScripts=Qe);const Jn=(e,t)=>t&&t()?Promise.resolve():(Qe[e]||(Qe[e]=new Promise((s,n)=>{const a=document.createElement("script");a.src=e,a.onload=()=>s(),a.onerror=()=>{delete Qe[e],n(new Error("Gagal memuat: "+e))},document.head.appendChild(a)})),Qe[e]),Ea=e=>{let t=(e||"").toString().replace(/\D/g,"");return t?(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),t):""},go=(e,t="")=>{const s=Ea(e);if(!s){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp tidak valid!");return}const n=t?encodeURIComponent(t):"",a=`https://wa.me/${s}${n?`?text=${n}`:""}`;window.AndroidNativeApp&&typeof window.AndroidNativeApp.openWhatsApp=="function"?window.AndroidNativeApp.openWhatsApp(a):window.open(a,"_blank","noopener,noreferrer")},ho=(e,t=null,s=null)=>{try{const n=(typeof t=="string"?document.querySelector(t):t)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!n)return;const a=e.getBoundingClientRect(),o=n.getBoundingClientRect(),r=document.createElement("div");r.className="flying-cart-item",s?r.innerHTML=`<img src="${s}" alt="Product" class="w-full h-full object-cover rounded-full" />`:r.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const l=a.left+a.width/2-20,d=a.top+a.height/2-20,c=o.left+o.width/2-20,u=o.top+o.height/2-20;r.style.cssText=`
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
        `,document.body.appendChild(r),requestAnimationFrame(()=>{const f=c-l,b=u-d;r.style.transform=`translate3d(${f}px, ${b}px, 0) scale(0.25) rotate(18deg)`,r.style.opacity="0.4"}),setTimeout(()=>{r&&r.parentNode&&r.parentNode.removeChild(r),Je("medium");const f=document.getElementById("bottom-nav-cart-badge")||n.querySelector(".cart-count-badge");f&&(f.classList.remove("cart-bounce-pop"),f.offsetWidth,f.classList.add("cart-bounce-pop")),n.classList.remove("cart-bounce-pop"),n.offsetWidth,n.classList.add("cart-bounce-pop"),setTimeout(()=>{f&&f.classList.remove("cart-bounce-pop"),n.classList.remove("cart-bounce-pop")},600)},500)}catch(n){console.error("flyToCart error",n)}},pt=(e={})=>{if(!e||typeof e!="object")return{hasPpn:!1,ppnAmount:0,dppAmount:0,ppnRate:0,ppnType:"exclusive",isInclusive:!1,ppnLabel:"PPN",subtotal:0,shipping:0,shippingDiscount:0,productDiscount:0,pointDiscount:0,paylaterAdminFee:0,paylaterServiceFee:0,grandTotal:0,baseBeforeTax:0};const t=e.payment||{},s=typeof window<"u"&&window.appData?.store?window.appData.store:{},a=(Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[]).reduce((Q,F)=>Q+parseFloat(F.qty||1)*(parseFloat(F.effectivePrice||F.price)||0),0),o=t.subtotal!==void 0&&t.subtotal!==null?parseFloat(t.subtotal):e.subtotal!==void 0&&e.subtotal!==null?parseFloat(e.subtotal):a,r=parseFloat(t.shippingCost??e.shippingCost??0)||0,l=parseFloat(t.shippingDiscount??e.shippingDiscount??0)||0,d=parseFloat(t.productDiscount??e.productDiscount??0)||0,c=parseFloat(e.pointDiscount??t.pointDiscount??0)||0,u=parseFloat(t.paylaterAdminFee??0)||0,f=parseFloat(t.paylaterServiceFee??0)||0,b=t.grandTotal!==void 0&&t.grandTotal!==null?parseFloat(t.grandTotal):e.total!==void 0&&e.total!==null?parseFloat(e.total):e.grandTotal!==void 0&&e.grandTotal!==null?parseFloat(e.grandTotal):Math.max(0,o-d-c+r-l+u+f),g=Math.max(0,o-d-c+(r-l)+u+f);let T=t.ppnRate!==void 0&&t.ppnRate!==null&&!isNaN(parseFloat(t.ppnRate))?parseFloat(t.ppnRate):e.ppnRate!==void 0&&e.ppnRate!==null&&!isNaN(parseFloat(e.ppnRate))?parseFloat(e.ppnRate):s.ppnRate!==void 0?parseFloat(s.ppnRate):11;isNaN(T)&&(T=11);let w=t.ppnType||e.ppnType||s.ppnType||"exclusive",N=parseFloat(t.ppnAmount??e.ppnAmount??e.tax??t.tax??0);isNaN(N)&&(N=0),N<=0&&b>g+.5&&(N=Math.round(b-g),w="exclusive",T<=0&&g>0&&(T=Math.round(N/g*100)));const I=s.ppnEnabled===!0||s.ppnEnabled==="true";if(N<=0&&w==="inclusive"&&T>0&&(t.ppnEnabled===!0||I)){const Q=Math.round(g*100/(100+T));N=Math.max(0,g-Q)}let q=t.dppAmount!==void 0&&t.dppAmount!==null&&!isNaN(parseFloat(t.dppAmount))?parseFloat(t.dppAmount):e.dppAmount!==void 0&&e.dppAmount!==null&&!isNaN(parseFloat(e.dppAmount))?parseFloat(e.dppAmount):null;q===null&&(w==="inclusive"&&T>0?q=Math.round(g*100/(100+T)):q=g);const H=N>0||t.ppnEnabled===!0||e.ppnEnabled===!0||t.ppnShowZero===!0||t.ppnRate!==void 0&&t.ppnRate!==null&&t.ppnRate>0||t.ppnRate===0&&t.ppnEnabled!==!1||I&&t.ppnEnabled!==!1,S=w==="inclusive",E=t.ppnLabel||e.ppnLabel||s.ppnTaxLabel||`${S?"Termasuk PPN":"PPN"} (${T}%)`;return{hasPpn:H,ppnAmount:N,dppAmount:q,ppnRate:T,ppnType:w,isInclusive:S,ppnLabel:E,subtotal:o,shipping:r,shippingDiscount:l,productDiscount:d,pointDiscount:c,paylaterAdminFee:u,paylaterServiceFee:f,grandTotal:b,baseBeforeTax:g}};typeof window<"u"&&(window.normalizeWA=Ea,window.openWhatsApp=go,window.sLoad=vt,window.hLoad=jt,window.el=x,window.show=Ra,window.hide=Na,window.toggleCls=lo,window.setIn=fe,window.setH=Oa,window.setV=co,window.getV=po,window.esc=i,window.fixD=wo,window.fCur=P,window.fAccounting=fo,window.parseOrderDate=bo,window.extractOrderTaxInfo=pt,window.sL=uo,window.ssL=mo,window.triggerHaptic=Je,window.flyToCartAnimation=ho);typeof window<"u"&&(window.renderProductCoverHtml=ro,window.getProductTheme=no,window.getMonogram=Da,window.getProductCoverSvgDataUri=io);const xa={deviceType:"rawbt",deviceName:"Driver RawBT (Printer Thermal Android - Free)",deviceId:"",paperSize:"58mm",directPrint:!1,feedLines:3,autoCut:!0,openCashDrawer:!1,autoPrintOrder:!1,headerText:"",storeAddress:"",storePhone:"",footerText:"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.",footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi.",showLogo:!0,showAddress:!0,showPhone:!0,showNpwp:!0,showPoints:!0,showBarcode:!0,networkIp:"192.168.1.200:9100"},Ie=e=>{switch(e){case"58mm-compact":case"58mm_30":return 30;case"80mm-compact":case"80mm_42":return 42;case"80mm":return 48;case"58mm":default:return 32}},Y=()=>{try{const e=localStorage.getItem("freshmart_printer_config");if(e)return{...xa,...JSON.parse(e)}}catch(e){console.warn("Gagal membaca konfigurasi printer lokal:",e)}return{...xa}},ut=e=>{try{const s={...Y(),...e};return localStorage.setItem("freshmart_printer_config",JSON.stringify(s)),s}catch(t){return console.error("Gagal menyimpan konfigurasi printer:",t),Y()}},yo=()=>{const e=Y(),t=(o,r)=>{const l=x(o);l&&(l.checked=!!r)},s=(o,r)=>{const l=x(o);l&&(l.value=r||"")};s("printer-device-name-display",e.deviceName),s("printer-paper-size",e.paperSize),s("printer-network-ip",e.networkIp),s("printer-header-custom",e.headerText),s("printer-address-custom",e.storeAddress),s("printer-phone-custom",e.storePhone),s("printer-footer-custom",e.footerText),s("printer-policy-custom",e.footerPolicyNote),t("printer-opt-address",e.showAddress!==!1),t("printer-opt-phone",e.showPhone!==!1),t("printer-opt-npwp",e.showNpwp!==!1),t("printer-opt-points",e.showPoints),t("printer-opt-barcode",e.showBarcode),t("printer-opt-direct",e.directPrint===!0),t("printer-opt-autocut",e.autoCut!==!1),t("printer-opt-drawer",e.openCashDrawer),t("printer-opt-autoprint",e.autoPrintOrder),Ha(e.deviceType||"rawbt");const n=x("printer-settings-modal"),a=x("printer-settings-modal-box");n&&n.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("printerSettings"),Rt(n,a)},Ba=(e=!1)=>{const t=x("printer-settings-modal"),s=x("printer-settings-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("printerSettings",e,()=>{Ve(t,s)}):Ve(t,s))},Ha=e=>{window._selectedPrinterType=e,document.querySelectorAll(".printer-type-card").forEach(n=>{if(n.getAttribute("data-type")===e){n.classList.add("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),n.classList.remove("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const o=n.querySelector(".printer-check-badge");o&&o.classList.remove("hidden")}else{n.classList.remove("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),n.classList.add("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const o=n.querySelector(".printer-check-badge");o&&o.classList.add("hidden")}});const t=x("rawbt-quick-guide-box");t&&(e==="rawbt"?t.classList.remove("hidden"):t.classList.add("hidden"));const s=x("printer-network-box");s&&(e==="network"?s.classList.remove("hidden"):s.classList.add("hidden"))},vo=()=>{const e=(o,r="")=>{const l=x(o);return l?l.value:r},t=(o,r=!1)=>{const l=x(o);return l?l.checked:r},s=window._selectedPrinterType||"rawbt",a={deviceType:s,deviceName:e("printer-device-name-display",s==="rawbt"?"Driver RawBT (Printer Thermal Android - Free)":s==="bluetooth"?"Bluetooth POS Printer":"Printer Thermal POS"),paperSize:e("printer-paper-size","58mm"),networkIp:e("printer-network-ip","192.168.1.200:9100"),headerText:e("printer-header-custom",""),storeAddress:e("printer-address-custom",""),storePhone:e("printer-phone-custom",""),footerText:e("printer-footer-custom","Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami."),footerPolicyNote:e("printer-policy-custom","Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi."),showAddress:t("printer-opt-address",!0),showPhone:t("printer-opt-phone",!0),showNpwp:t("printer-opt-npwp",!0),showPoints:t("printer-opt-points",!0),showBarcode:t("printer-opt-barcode",!0),directPrint:t("printer-opt-direct",!1),autoCut:t("printer-opt-autocut",!0),openCashDrawer:t("printer-opt-drawer",!1),autoPrintOrder:t("printer-opt-autoprint",!1)};ut(a),Re("Pengaturan printer berhasil disimpan!"),Ba()},ko=async()=>{if(!navigator.bluetooth){Re("Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.");return}try{Re("Mencari printer bluetooth di sekitar...");const e=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["000018f0-0000-1000-8000-00805f9b34fb","e7810a71-73ae-499d-8c15-faa9aef0c3f2","00001101-0000-1000-8000-00805f9b34fb"]});if(e){ut({deviceType:"bluetooth",deviceName:e.name||"Bluetooth POS Printer",deviceId:e.id});const t=x("printer-device-name-display");t&&(t.value=e.name||"Bluetooth POS Printer"),Re(`Printer "${e.name||"Bluetooth POS"}" tersambung!`)}}catch(e){e.name!=="NotFoundError"&&Re("Koneksi bluetooth dibatalkan atau tidak tersedia.")}},Po=async()=>{if(!navigator.usb){Re("Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.");return}try{Re("Mencari printer USB...");const e=await navigator.usb.requestDevice({filters:[]});if(e){const t=(e.productName||"USB Thermal Printer")+" (USB)";ut({deviceType:"usb",deviceName:t,deviceId:String(e.vendorId)+":"+String(e.productId)});const s=x("printer-device-name-display");s&&(s.value=t),Re(`Printer USB "${t}" tersambung!`)}}catch(e){e.name!=="NotFoundError"&&Re("Koneksi USB dibatalkan atau tidak ditemukan.")}},To=()=>{if(typeof window.executeRawBTTestPrint=="function"){window.executeRawBTTestPrint();return}const e=Y(),t=e.paperSize==="80mm",s=t?48:32,n=e.headerText||p.store?.name||"TOKO PUTRI",a=e.showAddress!==!1&&(e.storeAddress||p.store?.address)||"",o=e.showPhone!==!1&&(e.storePhone||p.store?.wa)||"",r=e.footerPolicyNote||"",l=t?"68mm":"44mm",d=(b,g,T=s)=>{const w=T-b.length-g.length;return b+(w>0?" ".repeat(w):" ")+g},c=new Date().toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let u=`
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${i(n)}</div>
    ${a?`<div style="text-align:center;font-size:10px;color:#475569;margin-bottom:2px;">${i(a)}</div>`:""}
    ${o?`<div style="text-align:center;font-size:11px;margin-bottom:4px;">Telp/WA: ${i(o)}</div>`:""}
    <div style="text-align:center;font-weight:bold;font-size:12px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:3px 0;margin:6px 0;">
        *** UJI COBA CETAK STRUK ***
    </div>
    <div style="white-space:pre;font-size:11px;">Tgl   : ${c}</div>
    <div style="white-space:pre;font-size:11px;">Format: Thermal ${t?"80mm (48 Kolom)":"58mm (32 Kolom)"}</div>
    <div style="white-space:pre;font-size:11px;">Koneksi: ${e.deviceType.toUpperCase()}</div>
    <div style="white-space:pre;font-size:11px;">Status : KONEKSI BERHASIL</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:11px;font-weight:bold;">${d("TES ITEM UJI COBA","HARGA",s)}</div>
    <div style="white-space:pre;font-size:10px;">${d("1x Produk Percobaan","Rp 25.000",s)}</div>
    <div style="white-space:pre;font-size:10px;">${d("2x Kertas Thermal Kasir","Rp 15.000",s)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:12px;font-weight:bold;">${d("TOTAL UJI","Rp 40.000",s)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    `;e.showPoints&&(u+=`<div style="white-space:pre;font-size:11px;">${d("Simulasi Poin Member","+10 Poin",s)}</div>`,u+='<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>'),e.showBarcode&&(u+=`<div style="text-align:center;margin:6px 0;">
            <div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*TEST-POS-${Date.now().toString().slice(-6)}*</div>
            <div style="font-size:9px;color:#333;">(BARCODE TEST OK)</div>
        </div><div style="border-bottom:1px dashed #000;margin:6px 0;"></div>`),u+=`
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
    `;let f=x("thermal-print-section");if(f||(f=document.createElement("div"),f.id="thermal-print-section",document.body.appendChild(f)),f.innerHTML=`<div style="width:${l};max-width:${l};font-family:'Courier New',Courier,monospace;font-size:${t?"10.5px":"8.8px"};line-height:1.2;color:#000;background:#fff;padding:0 ${t?"2.5mm":"1.5mm"} 4mm ${t?"1mm":"0.5mm"};box-sizing:border-box;">${u}</div>`,typeof window.sendToRawBT=="function"){const b=f.innerText,g=btoa(unescape(encodeURIComponent(b)));window.sendToRawBT(g,b,u)}else window.print();Re("Perintah uji cetak berhasil dikirim!")};window.getPrinterConfig=Y;window.getPaperCols=Ie;window.savePrinterConfig=ut;window.openPrinterSettingsModal=yo;window.closePrinterSettingsModal=Ba;window.selectPrinterDeviceTypeUI=Ha;window.savePrinterSettingsFromModal=vo;window.scanBluetoothPrinter=ko;window.scanUsbPrinter=Po;window.executeTestPrint=To;let ga={},se="view-catalog",Be=!1,Ke=null,Le=["view-catalog"];const Nt=e=>{if(!(le.length>0&&le[le.length-1]===e)){if(typeof history<"u"&&typeof window<"u"){if(history.state&&history.state.modal===e){le.includes(e)||le.push(e);return}history.pushState({modal:e},"",window.location.href)}le.push(e)}},So=(e,t)=>{const s=le.lastIndexOf(e);if(s>-1?le[s]=t:le.includes(t)||le.push(t),typeof history<"u"&&typeof window<"u")try{history.replaceState({modal:t},"",window.location.href)}catch{}},Ot=(e,t,s)=>{const n=le.lastIndexOf(e);if(n>-1&&le.splice(n,1),!t){Be=!0,Ke&&clearTimeout(Ke),Ke=setTimeout(()=>{Be=!1},300);try{typeof history<"u"&&history.back()}catch{Be=!1}}typeof s=="function"&&s()},De=(e,t=!1)=>{if(!e||e===se)return;if(!t)typeof history<"u"&&typeof window<"u"&&history.pushState({view:e},"",window.location.href),e==="view-catalog"?Le=["view-catalog"]:Le.push(e);else{const a=Le.lastIndexOf(e);a>-1?Le=Le.slice(0,a+1):Le=["view-catalog",e]}const s=x(se);if(s){const a=s.querySelector(".scroll-content");a&&(ga[se]=a.scrollTop)}if(se==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime(),se==="view-pos-cashier"&&e!=="view-pos-cashier"&&(typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),typeof window.releaseScreenWakeLock=="function"&&window.releaseScreenWakeLock("pos_cashier")),se==="view-admin"&&e!=="view-admin"){const a=x("view-admin");a&&a.classList.remove("admin-pos-mode"),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()}if(se==="view-admin-login"&&e!=="view-admin-login"){const a=x("login-username"),o=x("login-password");a&&(a.value=""),o&&(o.value="")}e==="view-pos-cashier"&&typeof window.requestScreenWakeLock=="function"&&window.requestScreenWakeLock("pos_cashier");const n=x(e);if(n){const r=e==="view-pos-cashier"||e==="view-admin-login"?"view-transition-scale":!!t?"view-transition-backward":"view-transition-forward";n.classList.remove("hidden","view-transition-forward","view-transition-backward","view-transition-scale","fade-in"),n.classList.add("flex",r);const l=()=>{n.classList.remove("view-transition-forward","view-transition-backward","view-transition-scale"),n.removeEventListener("animationend",l)};n.addEventListener("animationend",l,{once:!0}),setTimeout(l,260)}if(document.querySelectorAll(".view-section").forEach(a=>{a!==n&&(a.classList.add("hidden"),a.classList.remove("flex","view-transition-forward","view-transition-backward","view-transition-scale"))}),typeof window.hideFloatingScrollTop=="function")window.hideFloatingScrollTop();else{const a=document.getElementById("native-scroll-top-btn");a&&(a.classList.add("opacity-0","translate-y-3"),a.classList.add("hidden"))}if(n){if(e==="view-cart"&&typeof window.renderCart=="function")window.renderCart();else if(e==="view-checkout"&&typeof window.rChck=="function")window.rChck();else if(e==="view-payment"&&typeof window.rPay=="function")window.rPay();else if(e==="view-wishlist"&&typeof window.renderWish=="function")window.renderWish();else if(e==="view-orders"&&typeof window.renderMyOrders=="function")window.renderMyOrders();else if(e==="view-faq"&&typeof window.renderStorefrontFAQ=="function")window.renderStorefrontFAQ();else if(e==="view-pos-cashier")Sa(()=>import("./module-pos-DKUGDiv0.js").then(o=>o.Y),__vite__mapDeps([2,3,4,1])).then(o=>{typeof o.renderPOSStorefront=="function"&&o.renderPOSStorefront()}).catch(o=>console.error("[POS] Gagal memuat storefront:",o));else if(e==="view-admin")typeof window.renderSubscriptionNoticeInCMS=="function"&&window.renderSubscriptionNoticeInCMS(),typeof kt=="function"&&kt();else if(e==="view-admin-login"){const o=x("login-username"),r=x("login-password");o&&document.activeElement!==o&&(o.value=""),r&&document.activeElement!==r&&(r.value="")}const a=n.querySelector(".scroll-content");if(a)if(t){const o=ga[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{a.scrollTop=o}))}else a.scrollTo(0,0)}se=e,Fa(e)},Fa=(e=se)=>{const t=x("bottom-nav-bar");if(!t)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin","view-pos-cashier"].includes(e)){t.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.remove("translate-y-0","opacity-100");return}if(t.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(n=>n.classList.remove("active")),e==="view-catalog"){const n=x("bnav-home");n&&n.classList.add("active")}else if(e==="view-orders"){const n=x("bnav-orders");n&&n.classList.add("active")}else if(e==="view-wishlist"||e==="view-faq"){const n=x("bnav-menu");n&&n.classList.add("active")}},$o=e=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(e==="home"?"medium":"light"),e==="home")if(se==="view-catalog"){const t=document.querySelector("#view-catalog .scroll-content");t?t.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else De("view-catalog");else e==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():e==="cart"?De("view-cart"):e==="orders"?De("view-orders"):e==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},kt=()=>{const e=x("pull-to-refresh-indicator"),t=x("ptr-icon"),s=x("ptr-text");if(!e)return;let n=!1;const a=65,o=async(u="catalog")=>{if(n)return;n=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),e.classList.add("visible"),t&&(t.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",t.style.transform="");const f=document.getElementById("admin-refresh-icon");f&&f.classList.add("fa-spin"),s&&(s.innerText=u==="admin"?"Menyinkronkan data CMS...":u==="orders"?"Menyinkronkan riwayat pesanan...":"Menyinkronkan katalog...");try{if(typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),u==="admin"){const b=x("admin-content-view"),g=b&&!b.classList.contains("hidden"),T=window.cTab;g&&T?typeof window.openAdminTab=="function"&&window.openAdminTab(T,!0):(typeof window.renderSubscriptionNoticeInCMS=="function"&&window.renderSubscriptionNoticeInCMS(),typeof window.openAdminMenu=="function"&&window.openAdminMenu()),typeof window.rDyn=="function"&&window.rDyn(),s&&(s.innerText="Data CMS Berhasil Disinkron!")}else u==="orders"?(typeof window.renderMyOrders=="function"&&window.renderMyOrders(),s&&(s.innerText="Riwayat Pesanan Diperbarui!")):(typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),s&&(s.innerText="Katalog Terkini Disinkron!"));t&&(t.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch(b){console.error("[PullToRefresh] Error refreshing data:",b),s&&(s.innerText="Gagal sinkron data"),t&&(t.className="fa-solid fa-circle-exclamation text-rose-500")}finally{f&&f.classList.remove("fa-spin")}setTimeout(()=>{e.classList.remove("visible"),setTimeout(()=>{n=!1,t&&(t.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",t.style.transform=""),s&&(s.innerText="Tarik ke bawah untuk refresh")},300)},600)},r=(u,f)=>{if(!u||u.__hasPtrAttached)return;u.__hasPtrAttached=!0;let b=0,g=0,T=!1;u.addEventListener("touchstart",w=>{le&&le.length>0||u.scrollTop<=5&&!n&&(b=w.touches[0].pageY,T=!0)},{passive:!0}),u.addEventListener("touchmove",w=>{if(!T||n)return;g=w.touches[0].pageY;const N=g-b;if(N>15&&u.scrollTop<=5){e.classList.add("visible");const I=Math.min(N/a,1.5);t&&(t.style.transform=`rotate(${I*240}deg)`),s&&(s.innerText=N>=a?"Lepaskan untuk segarkan":f==="admin"?"Tarik ke bawah untuk refresh CMS":"Tarik ke bawah untuk refresh")}else N<=15&&e.classList.remove("visible")},{passive:!0}),u.addEventListener("touchend",async()=>{if(!T||n)return;T=!1,g-b>=a&&u.scrollTop<=5?await o(f):(e.classList.remove("visible"),t&&(t.style.transform=""))})},l=document.querySelector("#view-catalog .scroll-content");l&&r(l,"catalog");const d=document.querySelector("#view-admin .scroll-content");d&&r(d,"admin");const c=document.querySelector("#view-orders .scroll-content");c&&r(c,"orders"),window.triggerAdminPullToRefresh=()=>o("admin"),window.triggerStorefrontPullToRefresh=()=>o("catalog"),window.executePullToRefresh=o},Ka={product:["product-modal"],category:["category-modal"],brand:["brand-modal"],admin:["admin-modal"],adminOrder:["admin-order-modal"],receipt:["receipt-preview-modal"],docPreview:["doc-preview-modal"],scanner:["scanner-modal"],confirm:["custom-confirm-modal"],customerOrder:["order-detail-modal","customer-order-detail-modal"],restock:["restock-modal"],quickprice:["quickprice-modal"],member:["member-modal"],prompt:["custom-prompt-container","custom-prompt-modal"],review:["review-modal"],quickmenu:["quickmenu-modal"],variantPreview:["variant-preview-modal"],terms:["terms-modal"],privacy:["privacy-modal"],askQuestion:["modal-ask-question","ask-question-modal"],quickVariant:["quick-variant-modal"],adminFAQ:["modal-admin-faq","admin-faq-modal"],printerSettings:["printer-settings-modal"],exitConfirm:["exit-confirm-modal"],appDownload:["app-download-modal"],voucher:["voucher-modal"],guide:["shopping-guide-modal"],changelog:["changelog-modal"],guarantee:["guarantee-modal","quality-guarantee-modal"],security:["security-modal"],posVariantSheet:["pos-variant-sheet"],posLogin:["pos-login-modal"],posCartDrawer:["pos-mobile-cart-drawer","pos-cart-drawer"],posPayment:["pos-pay-modal","pos-payment-modal"],posOpenShift:["pos-open-shift-modal","modal-pos-open-shift"],posCloseShift:["pos-close-shift-modal","modal-pos-close-shift"],posShiftSummary:["pos-shift-summary-modal","modal-pos-shift-summary"],posCashMovement:["pos-cash-movement-modal","modal-pos-cash-movement"],clientTempoPay:["modal-client-tempo-pay"],clientPaySuccess:["modal-client-pay-success"],tempoConfirmations:["modal-tempo-confirmations"],thermalPreview:["utp-thermal-modal"],htmlPreview:["utp-html-modal"],addStaff:["add-staff-modal","modal-add-staff"],permissions:["permissions-modal","modal-permissions"],editStaff:["edit-staff-modal","modal-edit-staff"],soFinalize:["modal-so-finalize","so-finalize-modal"],soHistory:["modal-so-history-detail","modal-so-history","so-history-modal"],preRestore:["modal-pre-restore-inspector"],heroBanner:["admin-hero-banner-modal","hero-banner-modal"],renewal:["renewal-input-modal"],purchaseForm:["modal-po-form","po-form-modal"],purchasePicker:["modal-po-product-picker","po-product-picker-modal"],purchaseDetail:["modal-po-detail","po-detail-modal"],purchasePayment:["modal-po-payment","po-payment-modal"],supplierForm:["modal-supplier-form","supplier-form-modal"],supplierDetail:["modal-supplier-detail","supplier-detail-modal"],posHoldPrompt:["pos-hold-prompt-modal","pos-hold-prompt"],posHeldModal:["pos-held-list-modal","pos-held-modal"],posCameraScanner:["pos-camera-scanner-modal","pos-camera-scanner"],posReceiptFallback:["pos-receipt-fallback-modal"],posShiftReceipt:["pos-shift-receipt-modal"],posLogoutShift:["pos-logout-shift-modal"],colorFloat:["color-float-modal"],tempoDetail:["modal-tempo-detail","tempo-detail-modal"],tempoPayment:["modal-tempo-payment","tempo-payment-modal"],tempoPenalty:["modal-tempo-penalty","tempo-penalty-modal"],expenseForm:["modal-expense-form","expense-modal"],expenseReceipt:["modal-expense-receipt-preview"],sessionKicked:["session-kicked-modal"],productFifo:["modal-product-fifo","product-fifo-modal"],productBarcodeLabel:["modal-product-barcode-label","product-barcode-label-modal"],materialEstimator:["modal-material-estimator","material-estimator-modal"],salesReturn:["modal-sales-return","sales-return-modal"],vendorReturn:["modal-vendor-return","vendor-return-modal"],deliveryOrder:["modal-delivery-order","delivery-order-modal"],deliverySignature:["modal-delivery-signature","delivery-signature-modal"],flashSaleForm:["modal-flash-sale-form","flash-sale-form-modal"],factoryReset:["modal-factory-reset","factory-reset-modal"],priceListExport:["modal-pricelist-export","pricelist-export-modal"],ownerHr:["modal-owner-hr","owner-hr-modal"],advanceForm:["modal-salary-advance-form","salary-advance-modal"],advanceDetail:["modal-salary-advance-detail"],payrollItemForm:["modal-payroll-item-form","payroll-item-modal"],payslipPreview:["modal-payslip-preview","payslip-preview-modal"]},_t=e=>{const t=Ka[e];if(!t)return!1;const s=Array.isArray(t)?t:[t];for(const n of s){const a=document.getElementById(n);if(a&&!(a.classList.contains("hidden")||a.classList.contains("pointer-events-none"))&&!(a.style.display==="none"||a.style.visibility==="hidden")){try{const o=window.getComputedStyle(a);if(o.display==="none"||o.visibility==="hidden")continue}catch{}return!0}}return!1},zt=e=>{switch(e){case"product":if(typeof window.closeProductModal=="function")return window.closeProductModal(!0),!0;break;case"category":if(typeof window.closeCategoryModal=="function")return window.closeCategoryModal(!0),!0;break;case"brand":if(typeof window.closeBrandModal=="function")return window.closeBrandModal(!0),!0;break;case"admin":if(typeof window.closeAdminModal=="function")return window.closeAdminModal(!0),!0;break;case"adminOrder":if(typeof window.closeOrderDetailModal=="function")return window.closeOrderDetailModal(!0),!0;break;case"receipt":if(typeof window.closeReceiptPreviewModal=="function")return window.closeReceiptPreviewModal(!0),!0;break;case"docPreview":if(typeof window.closeDocPreviewModal=="function")return window.closeDocPreviewModal(!0),!0;break;case"scanner":if(typeof window.closeCameraScanner=="function")return window.closeCameraScanner(!0),!0;break;case"confirm":if(typeof window.closeConfirm=="function")return window.closeConfirm(!0),!0;break;case"customerOrder":if(typeof window.closeCustomerOrderDetailModal=="function")return window.closeCustomerOrderDetailModal(!0),!0;break;case"restock":if(typeof window.closeRestockModal=="function")return window.closeRestockModal(!0),!0;break;case"quickprice":if(typeof window.closeQuickPriceModal=="function")return window.closeQuickPriceModal(!0),!0;break;case"member":if(typeof window.closeMemberModal=="function")return window.closeMemberModal(!0),!0;break;case"prompt":if(typeof window.closePrompt=="function")return window.closePrompt(!0),!0;break;case"review":if(typeof window.closeReviewModal=="function")return window.closeReviewModal(!0),!0;break;case"quickmenu":if(typeof window.closeQuickMenuModal=="function")return window.closeQuickMenuModal(!0),!0;break;case"variantPreview":if(typeof window.closeVariantPreviewModal=="function")return window.closeVariantPreviewModal(!0),!0;break;case"terms":if(typeof window.closeTermsModal=="function")return window.closeTermsModal(!0),!0;break;case"privacy":if(typeof window.closePrivacyModal=="function")return window.closePrivacyModal(!0),!0;break;case"askQuestion":if(typeof window.closeAskQuestionModal=="function")return window.closeAskQuestionModal(!0),!0;break;case"quickVariant":if(typeof window.closeQuickVariantSheet=="function")return window.closeQuickVariantSheet(!0),!0;break;case"adminFAQ":if(typeof window.closeAdminFAQModal=="function")return window.closeAdminFAQModal(!0),!0;break;case"printerSettings":if(typeof window.closePrinterSettingsModal=="function")return window.closePrinterSettingsModal(!0),!0;break;case"exitConfirm":if(typeof window.closeExitConfirmModal=="function")return window.closeExitConfirmModal(!0),!0;break;case"appDownload":if(typeof window.closeAppDownloadModal=="function")return window.closeAppDownloadModal(!0),!0;break;case"voucher":if(typeof window.closeVoucherModal=="function")return window.closeVoucherModal(!0),!0;break;case"guide":if(typeof window.closeShoppingGuideModal=="function")return window.closeShoppingGuideModal(!0),!0;break;case"changelog":if(typeof window.closeChangelogModal=="function")return window.closeChangelogModal(!0),!0;break;case"guarantee":if(typeof window.closeQualityGuaranteeModal=="function")return window.closeQualityGuaranteeModal(!0),!0;break;case"security":if(typeof window.closeSecurityModal=="function")return window.closeSecurityModal(!0),!0;break;case"posVariantSheet":if(typeof window.closePOSVariantSheet=="function")return window.closePOSVariantSheet(!0),!0;break;case"posLogin":if(typeof window.closePOSLoginModal=="function")return window.closePOSLoginModal(!0),!0;break;case"posCartDrawer":if(typeof window.closePOSCartDrawer=="function")return window.closePOSCartDrawer(!0),!0;break;case"posPayment":if(typeof window.closePayModal=="function")return window.closePayModal(!0),!0;break;case"posOpenShift":if(typeof window.closePOSOpenShiftModal=="function")return window.closePOSOpenShiftModal(!0),!0;break;case"posCloseShift":if(typeof window.closePOSCloseShiftModal=="function")return window.closePOSCloseShiftModal(!0),!0;break;case"posShiftSummary":if(typeof window.closePOSShiftSummaryModal=="function")return window.closePOSShiftSummaryModal(!0),!0;break;case"posCashMovement":if(typeof window.closePOSCashMovementModal=="function")return window.closePOSCashMovementModal(!0),!0;break;case"clientTempoPay":if(typeof window.closeClientTempoPayModal=="function")return window.closeClientTempoPayModal(!0),!0;if(typeof window.closeClientPaymentModal=="function")return window.closeClientPaymentModal(!0),!0;break;case"clientPaySuccess":if(typeof window.closeClientPaymentSuccessModal=="function")return window.closeClientPaymentSuccessModal(!0),!0;break;case"tempoConfirmations":if(typeof window.closeTempoConfirmationsModal=="function")return window.closeTempoConfirmationsModal(!0),!0;break;case"thermalPreview":return typeof window.closeThermalPrintPreview=="function"?(window.closeThermalPrintPreview(!0),!0):typeof window.closeThermalPreviewModal=="function"?(window.closeThermalPreviewModal(!0),!0):(document.getElementById("utp-thermal-modal")?.remove(),!0);case"htmlPreview":return typeof window.closeHtmlPrintPreview=="function"?(window.closeHtmlPrintPreview(!0),!0):typeof window.closeHtmlPreviewModal=="function"?(window.closeHtmlPreviewModal(!0),!0):(document.getElementById("utp-html-modal")?.remove(),!0);case"posReceiptFallback":return typeof window.closePOSReceiptFallbackModal=="function"?(window.closePOSReceiptFallbackModal(!0),!0):(document.getElementById("pos-receipt-fallback-modal")?.remove(),!0);case"posShiftReceipt":return typeof window.closePOSShiftReceiptModal=="function"?(window.closePOSShiftReceiptModal(!0),!0):(document.getElementById("pos-shift-receipt-modal")?.remove(),!0);case"addStaff":if(typeof window.closeAddStaffModal=="function")return window.closeAddStaffModal(!0),!0;break;case"permissions":if(typeof window.closePermissionsModal=="function")return window.closePermissionsModal(!0),!0;break;case"editStaff":if(typeof window.closeEditStaffModal=="function")return window.closeEditStaffModal(!0),!0;break;case"ownerHr":if(typeof window.closeOwnerHrModal=="function")return window.closeOwnerHrModal(!0),!0;break;case"advanceForm":if(typeof window.closeSalaryAdvanceFormModal=="function")return window.closeSalaryAdvanceFormModal(!0),!0;break;case"advanceDetail":if(typeof window.closeAdvanceDetailModal=="function")return window.closeAdvanceDetailModal(!0),!0;break;case"payrollItemForm":if(typeof window.closePayrollItemModal=="function")return window.closePayrollItemModal(!0),!0;break;case"payslipPreview":if(typeof window.closePayslipPreviewModal=="function")return window.closePayslipPreviewModal(!0),!0;break;case"soFinalize":if(typeof window.closeSOFinalizeModal=="function")return window.closeSOFinalizeModal(!0),!0;if(typeof window.closeFinalizeModal=="function")return window.closeFinalizeModal(!0),!0;break;case"soHistory":if(typeof window.closeSOHistoryModal=="function")return window.closeSOHistoryModal(!0),!0;if(typeof window.closeSoHistoryModal=="function")return window.closeSoHistoryModal(!0),!0;break;case"preRestore":if(typeof window.closePreRestoreModal=="function")return window.closePreRestoreModal(!0),!0;break;case"heroBanner":if(typeof window.closeHeroBannerModal=="function")return window.closeHeroBannerModal(!0),!0;break;case"renewal":if(typeof window.closeRenewalModal=="function")return window.closeRenewalModal(!0),!0;break;case"purchaseForm":if(typeof window.closeCreatePOModal=="function")return window.closeCreatePOModal(!0),!0;break;case"purchasePicker":if(typeof window.closePOProductPicker=="function")return window.closePOProductPicker(!0),!0;break;case"purchaseDetail":if(typeof window.closePurchaseDetailModal=="function")return window.closePurchaseDetailModal(!0),!0;break;case"purchasePayment":if(typeof window.closePurchasePaymentModal=="function")return window.closePurchasePaymentModal(!0),!0;break;case"supplierForm":if(typeof window.closeSupplierFormModal=="function")return window.closeSupplierFormModal(!0),!0;break;case"supplierDetail":if(typeof window.closeSupplierDetailModal=="function")return window.closeSupplierDetailModal(!0),!0;break;case"posHoldPrompt":if(typeof window.closePOSHoldPrompt=="function")return window.closePOSHoldPrompt(!0),!0;break;case"posHeldModal":if(typeof window.closePOSHeldModal=="function")return window.closePOSHeldModal(!0),!0;break;case"posCameraScanner":if(typeof window.closePOSCameraScanner=="function")return window.closePOSCameraScanner(!0),!0;break;case"tempoDetail":if(typeof window.closeTempoDetailModal=="function")return window.closeTempoDetailModal(!0),!0;break;case"tempoPayment":if(typeof window.closeTempoPaymentModal=="function")return window.closeTempoPaymentModal(!0),!0;break;case"tempoPenalty":if(typeof window.closeTempoPenaltyModal=="function")return window.closeTempoPenaltyModal(!0),!0;break;case"expenseForm":if(typeof window.closeExpenseModal=="function")return window.closeExpenseModal(!0),!0;break;case"expenseReceipt":if(typeof window.closeExpenseReceiptPreview=="function")return window.closeExpenseReceiptPreview(!0),!0;break;case"colorFloat":return typeof window._closeColorFloatModal=="function"?(window._closeColorFloatModal(!0),!0):(document.getElementById("color-float-modal")?.remove(),!0);case"posLogoutShift":return document.getElementById("pos-logout-shift-modal")?.remove(),!0;case"sessionKicked":return typeof window.closeSessionKickedModal=="function"?(window.closeSessionKickedModal(!0),!0):(document.getElementById("session-kicked-modal")?.remove(),!0);case"productFifo":if(typeof window.closeProductFifoModal=="function")return window.closeProductFifoModal(!0),!0;break;case"productBarcodeLabel":if(typeof window.closeProductBarcodeLabelModal=="function")return window.closeProductBarcodeLabelModal(!0),!0;break;case"materialEstimator":if(typeof window.closeMaterialEstimatorModal=="function")return window.closeMaterialEstimatorModal(!0),!0;break;case"salesReturn":if(typeof window.closeSalesReturnModal=="function")return window.closeSalesReturnModal(!0),!0;break;case"vendorReturn":if(typeof window.closeVendorReturnModal=="function")return window.closeVendorReturnModal(!0),!0;break;case"deliveryOrder":if(typeof window.closeDeliveryModal=="function")return window.closeDeliveryModal(!0),!0;break;case"deliverySignature":if(typeof window.closeDeliverySignatureModal=="function")return window.closeDeliverySignatureModal(!0),!0;break;case"flashSaleForm":if(typeof window.closeFlashSaleModal=="function")return window.closeFlashSaleModal(!0),!0;break;case"factoryReset":if(typeof window.closeFactoryResetModal=="function")return window.closeFactoryResetModal(!0),!0;break;case"priceListExport":if(typeof window.closePriceListExportModal=="function")return window.closePriceListExportModal(!0),!0;break}const t=Ka[e]||[],s=Array.isArray(t)?t:[t];for(const n of s){const a=document.getElementById(n);if(a){if(["utp-thermal-modal","utp-html-modal","pos-receipt-fallback-modal","pos-shift-receipt-modal","pos-hold-prompt-modal","pos-held-list-modal","pos-camera-scanner-modal","color-float-modal","pos-logout-shift-modal","custom-prompt-container"].includes(n))return a.remove(),!0;if(!a.classList.contains("hidden"))return a.classList.add("hidden"),a.style.display="none",!0}}return!1},Qt=(e=!1)=>{const t=()=>{if(!e&&typeof history<"u"&&history.state&&history.state.modal){Be=!0,Ke&&clearTimeout(Ke),Ke=setTimeout(()=>{Be=!1},300);try{history.back()}catch{Be=!1}}},s=[{id:"utp-thermal-modal",close:()=>{typeof window.closeThermalPrintPreview=="function"?window.closeThermalPrintPreview(!0):typeof window.closeThermalPreviewModal=="function"?window.closeThermalPreviewModal(!0):document.getElementById("utp-thermal-modal")?.remove()}},{id:"utp-html-modal",close:()=>{typeof window.closeHtmlPrintPreview=="function"?window.closeHtmlPrintPreview(!0):typeof window.closeHtmlPreviewModal=="function"?window.closeHtmlPreviewModal(!0):document.getElementById("utp-html-modal")?.remove()}},{id:"pos-receipt-fallback-modal",close:()=>{typeof window.closePOSReceiptFallbackModal=="function"?window.closePOSReceiptFallbackModal(!0):document.getElementById("pos-receipt-fallback-modal")?.remove()}},{id:"pos-shift-receipt-modal",close:()=>{typeof window.closePOSShiftReceiptModal=="function"?window.closePOSShiftReceiptModal(!0):document.getElementById("pos-shift-receipt-modal")?.remove()}},{id:"receipt-preview-modal",isOpen:o=>!o.classList.contains("hidden"),close:()=>{typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):document.getElementById("receipt-preview-modal")?.classList.add("hidden")}},{id:"doc-preview-modal",isOpen:o=>!o.classList.contains("hidden"),close:()=>{typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):document.getElementById("doc-preview-modal")?.classList.add("hidden")}},{id:"modal-expense-receipt-preview",isOpen:o=>!o.classList.contains("hidden"),close:()=>{typeof window.closeExpenseReceiptPreview=="function"?window.closeExpenseReceiptPreview(!0):document.getElementById("modal-expense-receipt-preview")?.classList.add("hidden")}}];for(const o of s){const r=document.getElementById(o.id);if(r&&(!o.isOpen||o.isOpen(r))){const l={"utp-thermal-modal":"thermalPreview","utp-html-modal":"htmlPreview","pos-receipt-fallback-modal":"posReceiptFallback","pos-shift-receipt-modal":"posShiftReceipt","receipt-preview-modal":"receipt","doc-preview-modal":"docPreview","modal-expense-receipt-preview":"expenseReceipt"}[o.id];if(l){const d=le.lastIndexOf(l);d>-1&&le.splice(d,1)}return o.close(),t(),!0}}const n=["pos-success-modal","pos-recall-confirm-modal","pos-delete-confirm-modal","pos-closed-success-modal","pos-logout-shift-modal","session-kicked-modal"];for(const o of n){const r=document.getElementById(o);if(r)return r.remove(),t(),!0}for(;le.length>0;){const o=le.pop();if(_t(o))return zt(o),t(),!0}const a=["variantPreview","quickVariant","product","priceListExport","factoryReset","flashSaleForm","deliverySignature","deliveryOrder","salesReturn","vendorReturn","materialEstimator","productBarcodeLabel","productFifo","sessionKicked","exitConfirm","colorFloat","posLogoutShift","posReceiptFallback","posShiftReceipt","clientPaySuccess","clientTempoPay","tempoConfirmations","posVariantSheet","posLogin","posCartDrawer","posPayment","posOpenShift","posCloseShift","posShiftSummary","posCashMovement","thermalPreview","htmlPreview","addStaff","permissions","editStaff","ownerHr","advanceForm","advanceDetail","payrollItemForm","payslipPreview","soFinalize","soHistory","preRestore","heroBanner","renewal","purchasePayment","purchaseDetail","purchasePicker","purchaseForm","supplierDetail","supplierForm","posHoldPrompt","posHeldModal","posCameraScanner","tempoPenalty","tempoPayment","tempoDetail","expenseReceipt","expenseForm","customerOrder","restock","quickprice","member","review","voucher","changelog","appDownload","guarantee","security","confirm","prompt","printerSettings","docPreview","receipt","adminFAQ","adminOrder","admin","brand","category","quickmenu","guide","terms","privacy","scanner","askQuestion"];for(const o of a)if(_t(o))return zt(o),t(),!0;return!1},Ua=()=>{const e=x("exit-confirm-modal");e&&(e.classList.contains("hidden")&&Nt("exitConfirm"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=x("exit-confirm-modal-box");t&&t.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Zt=(e=!1)=>{Ot("exitConfirm",e,()=>{const t=x("exit-confirm-modal"),s=x("exit-confirm-modal-box");t&&t.classList.add("opacity-0"),s&&s.classList.add("scale-95"),setTimeout(()=>{t&&t.classList.add("hidden")},250)})},Ao=()=>{Zt(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri!"),setTimeout(()=>{try{window.close()}catch{}},400))},Mo=()=>{if(Qt(!1))return;if(se==="view-admin"){const t=x("admin-content-view"),s=x("admin-dashboard-view");if(!!(t&&!t.classList.contains("hidden")||s&&s.classList.contains("hidden")||window.history.state&&window.history.state.tab||typeof window.cTab<"u"&&window.cTab)){if(window.history.state&&window.history.state.tab&&window.history.length>1)try{window.history.back();return}catch{}typeof window.openAdminMenu=="function"&&window.openAdminMenu();try{window.history.replaceState({view:"view-admin"},"",window.location.href)}catch{}return}if(typeof window.showConfirm=="function"){const a=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),o=a?"Keluar Panel Owner":"Keluar CMS Toko",r=a?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(o,r,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}return}if(se==="view-pos-cashier"){typeof window.showConfirm=="function"?window.showConfirm("Keluar Mode Kasir","Yakin keluar dari mode POS kasir?",()=>{typeof window.exitPOSMode=="function"?window.exitPOSMode():De("view-catalog")},"Ya, Keluar",!0):De("view-catalog");return}if(se!=="view-catalog"){let t="view-catalog";if(se==="view-payment")t="view-checkout";else if(se==="view-checkout")t="view-cart";else if(se==="view-cart")t="view-catalog";else if(se==="view-orders"||se==="view-wishlist"||se==="view-faq"||se==="view-admin-login")t="view-catalog";else if(Array.isArray(Le)&&Le.length>1){const s=Le[Le.length-2];s&&s!==se&&(t=s)}De(t,!0);try{typeof history<"u"&&window.history.length>1&&window.history.state&&window.history.state.view&&window.history.replaceState({view:t},"",window.location.href)}catch{}return}const e=x("exit-confirm-modal");e&&!e.classList.contains("hidden")?Zt():Ua()},Co=()=>{kt();try{(!history.state||!history.state.view)&&history.replaceState({view:"view-catalog"},"",window.location.href)}catch{}window.addEventListener("popstate",e=>{if(Be){Be=!1,Ke&&clearTimeout(Ke);return}if(Qt(!0))return;const t=e.state||{},s=t.view||null;if(window.isAdm||window.__localIsAdm)if(s==="view-admin")De("view-admin",!0),t.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(t.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu();else{const a=x("admin-content-view");if(a&&!a.classList.contains("hidden")){history.pushState({view:"view-admin"},"",window.location.href),De("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}if(history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"){const o=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=o?"Keluar Panel Owner":"Keluar CMS Toko",l=o?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,l,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}}else if(s){let a=s;s==="view-admin"&&(a="view-admin-login"),De(a,!0)}else De("view-catalog",!0)})};if(typeof window<"u"){window.pushModalHistory=Nt,window.replaceModalHistory=So,window.requestCloseModal=Ot,window.changeView=De,window.setupHistoryRouter=Co,window.onBottomNavClick=$o,window.updateBottomNav=Fa,window.initPullToRefresh=kt,window.triggerAdminPullToRefresh=window.triggerAdminPullToRefresh,window.triggerStorefrontPullToRefresh=window.triggerStorefrontPullToRefresh,window.executePullToRefresh=window.executePullToRefresh,window.handleAppBackButton=Mo,window.closeTopmostOpenModal=Qt,window.isModalOpenInDOM=_t,window.closeModalByName=zt,window.openExitConfirmModal=Ua,window.closeExitConfirmModal=Zt,window.confirmExitApp=Ao,window.isProgrammaticModalClose=Be,window.viewHistoryStack=Le;try{Object.defineProperty(window,"curViewName",{get:()=>se,set:e=>{se=e},configurable:!0})}catch{}}let qt=null,Ze=null;const Lo=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}we("Kode "+e+" berhasil disalin!")}catch{we("Gagal menyalin. Kode: "+e)}},we=(e,t,s,n)=>{const a=x("toast");if(!a)return;if(!t){const w=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(w)?t="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(w)?t="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(w)?t="warning":/upload|proses|memuat|loading|sedang/.test(w)?t="loading":t="info"}typeof window.triggerHaptic=="function"&&window.triggerHaptic(t==="error"?"error":t==="warning"?"warning":t==="success"?"success":"light");const o=getComputedStyle(document.documentElement),r=o.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",l=o.getPropertyValue("--color-primary").trim()||"#10b981";o.getPropertyValue("--color-primary-dark").trim();const d={success:{icon:"fa-circle-check",label:"Berhasil",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`}},c=d[t]||d.info,u=x("toast-icon");u&&(u.className="fa-solid "+c.icon);const f=x("toast-title");f&&(f.textContent=s||c.label,f.style.display="block",f.style.color=c.accent);const b=x("toast-icon-wrap");b&&(b.style.background=c.iconBg,b.style.color=c.accent),fe("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let g=x("toast-progress");g||(g=document.createElement("div"),g.id="toast-progress",a.appendChild(g)),g.style.background=c.accent,g.style.transition="none",g.style.width="100%",g.style.opacity="0.85",clearTimeout(qt),a.classList.add("toast-show");const T=n||(t==="loading"?8e3:t==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{g.style.transition=`width ${T}ms linear`,g.style.width="0%"})),qt=setTimeout(()=>{a.classList.remove("toast-show")},T)},Do=e=>we(e,"loading","Memproses...",8e3),Ro=()=>{clearTimeout(qt);const e=x("toast");e&&e.classList.remove("toast-show")},No=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")};let Ue=null;const Oo=(e,t,s,n=null,a=null)=>{let o=e,r=t,l=s,d=n,c=a;typeof t=="function"&&(l=t,r=e,o=typeof n=="string"?n:"Konfirmasi Tindakan",d=typeof s=="string"?s:null,c===null&&(c=!0));const u=`${o||""} ${typeof r=="string"?r:""}`.toLowerCase(),f=/cetak|print/.test(u),b=/hapus|delete|kosongkan|reset|buang|hilang|batalkan/.test(u);c===null&&(c=b),d||(f?d="Ya, Cetak":c?d="Ya, Hapus":d="Ya, Lanjutkan");let g=null;typeof l!="function"?(g=new Promise(I=>{Ue=I}),Ze=null):(Ze=l,Ue=null),fe("confirm-title",o);const T=x("confirm-msg");if(T)if(typeof r=="string"){const I=typeof window.DOMPurify<"u"?window.DOMPurify.sanitize(r,{ADD_ATTR:["class","style"]}):r;T.innerHTML=I}else T.textContent=r||"";const w=x("confirm-yes-btn");w&&(w.innerText=d,c?(w.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 active:scale-95 transition-all text-xs sm:text-sm shadow-md shadow-rose-500/30 cursor-pointer",x("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",x("confirm-icon").className="fa-solid fa-triangle-exclamation"):(w.className="flex-1 py-3.5 text-white font-bold rounded-2xl hover:opacity-95 active:scale-95 transition-all text-xs sm:text-sm shadow-sm cursor-pointer",w.style.background="var(--color-primary)",w.style.boxShadow="0 4px 14px rgba(var(--color-primary-rgb), 0.35)",x("confirm-icon-box").className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border shadow-2xs",x("confirm-icon-box").style.background="rgba(var(--color-primary-rgb), 0.12)",x("confirm-icon-box").style.color="var(--color-primary)",x("confirm-icon-box").style.borderColor="rgba(var(--color-primary-rgb), 0.25)",x("confirm-icon").className=f?"fa-solid fa-print":"fa-solid fa-circle-check"));const N=x("custom-confirm-modal");return N&&N.classList.contains("hidden")&&Nt("confirm"),Ra("custom-confirm-modal"),setTimeout(()=>{x("custom-confirm-modal").classList.remove("opacity-0"),x("custom-confirm-box").classList.remove("scale-95")},10),g},Wt=(e=!1)=>{if(Ue){const t=Ue;Ue=null,t(!1)}Ot("confirm",e,()=>{x("custom-confirm-modal").classList.add("opacity-0"),x("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>Na("custom-confirm-modal"),300)})},Io=()=>{if(Ue){const e=Ue;Ue=null,Ze=null,Wt(),setTimeout(()=>{e(!0)},150);return}if(Ze){const e=Ze;Ze=null,Wt(),setTimeout(()=>{e()},150)}},Eo=(e,t="",s=null)=>{let n=null,a=null;typeof s!="function"&&(a=new Promise(b=>{n=b}));const o=t!=null?String(t):"",r=o.length>50||o.includes(`
`)||/balasan|catatan|alasan|deskripsi|pesan|keterangan/i.test(e),l=o.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),d=r?`<textarea id="prompt-input" rows="3" class="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 custom-scrollbar resize-none leading-relaxed" placeholder="Tuliskan di sini...">${l}</textarea>`:`<input type="text" id="prompt-input" value="${l}" class="w-full px-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-bold focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder:text-slate-400 mb-6 text-center" autocomplete="off" />`;let c=document.createElement("div");c.id="custom-prompt-container",c.className="fixed inset-0 z-[10005] bg-slate-900/85 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300",c.onclick=b=>{b.target===c&&window.closePrompt()},c.innerHTML=`
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
    `,document.body.appendChild(c);const u=c.querySelector("div");Nt("prompt"),setTimeout(()=>{c.classList.remove("opacity-0"),u.classList.remove("scale-95")},10);const f=c.querySelector("#prompt-input");return f&&(f.focus(),f.select(),f.onkeydown=b=>{b.key==="Enter"&&(!r||b.ctrlKey)?(b.preventDefault(),c.querySelector("#prompt-ok")?.click()):b.key==="Escape"&&(b.preventDefault(),window.closePrompt())}),window.closePrompt=(b=!1)=>{if(!(!c||!c.parentNode)){if(n){const g=n;n=null,g(null)}Ot("prompt",b,()=>{c.classList.add("opacity-0"),u.classList.add("scale-95"),setTimeout(()=>c.remove(),300),window.closePrompt=null})}},c.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),c.querySelector("#prompt-ok").onclick=()=>{let b=f.value;if(n){const g=n;n=null,window.closePrompt(),g(b)}else window.closePrompt(),typeof s=="function"&&s(b)},a},Bo=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=Lo;window.showToast=we;window.showToastLoading=Do;window.hideToast=Ro;window.toggleTheme=No;window.showConfirm=Oo;window.closeConfirm=Wt;window.executeConfirm=Io;window.customPrompt=Eo;window.checkProPrint=Bo;const ct="utp-thermal-modal",Pt="utp-html-modal";let ve=null,Xt=null,lt=null,dt=null;const Tt=()=>{if(document.getElementById("utp-style"))return;const e=document.createElement("style");e.id="utp-style",e.textContent=`
        @keyframes utpSheetIn { from { transform: translateY(28px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .utp-sheet { animation: utpSheetIn .2s cubic-bezier(.2,.8,.2,1); }
        .utp-canvas {
            background-color: #f1f5f9;
            background-image: none;
        }
        .dark .utp-canvas { background-color: #0f172a; background-image: none; }
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
    `,document.head.appendChild(e)},ja=()=>{dt===null&&(dt=document.body.style.overflow||"",document.body.style.overflow="hidden")},ea=()=>{dt!==null&&!document.getElementById(ct)&&!document.getElementById(Pt)&&(document.body.style.overflow=dt,dt=null)},_a=(e,t)=>{It(),lt=s=>{const n=s.target&&s.target.tagName||"";s.key==="Escape"?(s.preventDefault(),t()):s.key==="Enter"&&!/INPUT|TEXTAREA|SELECT/.test(n)&&(s.preventDefault(),e())},document.addEventListener("keydown",lt,!0)},It=()=>{lt&&document.removeEventListener("keydown",lt,!0),lt=null},Ho=e=>{const t=e.deviceType||"rawbt",s=/android/i.test(navigator.userAgent||"");return t==="rawbt"?s||window.AndroidNativeApp?"RawBT Android":"Printer Browser":t==="bluetooth"?"Bluetooth":t==="usb"?"USB OTG":t==="network"?"WiFi / LAN":"Printer Sistem"},Fo=e=>{if(e.html&&/<[a-z][\s\S]*>/i.test(e.html))return`<div class="utp-html-rendered" style="white-space:normal;width:100%;">${e.html}</div>`;let t=Array.isArray(e.previewLines)&&e.previewLines.length?e.previewLines:null;t||(t=String(e.plainText||"").split(`
`).map(n=>({t:n,a:"left",b:!1,s:"normal"})));const s=[...t];for(;s.length>1&&!String(s[s.length-1].t||"").trim();)s.pop();return s.map(n=>{if(n.type==="two-column")return`<div class="utp-row ${n.b?"font-bold":""}"><div class="utp-col-left">${i(n.left)}</div><div class="utp-col-right">${i(n.right)}</div></div>`;if(n.type==="separator")return'<div class="utp-separator"></div>';if(n.type==="double-separator")return'<div class="utp-double-separator"></div>';if(n.isBarcode||n.s==="barcode"||n.type==="barcode")return`
            <div class="utp-barcode-wrap" style="text-align:center;">
                <div class="utp-barcode-bars mx-auto" aria-hidden="true"></div>
                <div class="utp-barcode-code">*${i(n.code||n.t||"")}*</div>
            </div>`;const a=i(String(n.t??""))||"&nbsp;",o=n.a==="center"?"center":n.a==="right"?"right":"left",r=n.b?800:400;return n.s==="title"||n.s==="wide"?`<div class="utp-line utp-title" style="text-align:${o};font-weight:${r}">${a}</div>`:n.s==="tall"||n.s==="total"?`<div class="utp-line utp-tall" style="text-align:${o};font-weight:${r}"><span>${a}</span></div>`:`<div class="utp-line" style="text-align:${o};font-weight:${r}">${a}</div>`}).join("")},za=()=>{const e=ve;if(!e)return;const t=Y(),s=Ie(t.paperSize),n=s>=40,a=Array.isArray(e.previewLines)?e.previewLines.length:String(e.plainText||"").split(`
`).length,o=typeof e.rebuild=="function"?`
        <div class="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70" role="group" aria-label="Ukuran kertas">
            <button type="button" id="utp-paper-58" onclick="window.setThermalPreviewPaper('58mm')" class="utp-seg-btn ${n?"text-slate-600 dark:text-slate-300":"is-active"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">58mm</button>
            <button type="button" id="utp-paper-80" onclick="window.setThermalPreviewPaper('80mm')" class="utp-seg-btn ${n?"is-active":"text-slate-600 dark:text-slate-300"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">80mm</button>
        </div>`:"",r=`
    <div id="${ct}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-thermal-title" onclick="if(event.target===this) window.closeThermalPrintPreview()">
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
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-print text-slate-400"></i>${i(Ho(t))}</span>
                    <span class="utp-chip bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-check"></i>${a} baris</span>
                </div>
                ${o}
            </div>

            <div class="utp-canvas flex-1 overflow-auto px-3 py-5 sm:px-5 custom-scrollbar">
                <div class="utp-paper mx-auto" style="width:${s}ch;">
                    ${Fo(e)}
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
    </div>`;document.getElementById(ct)?.remove(),document.body.insertAdjacentHTML("beforeend",r),setTimeout(()=>document.getElementById("utp-thermal-confirm")?.focus({preventScroll:!0}),60)},qa=e=>!e||typeof e.dispatch!="function"?!1:(Tt(),ve={...e},za(),ja(),_a(()=>Wa(),()=>Et()),typeof window.pushModalHistory=="function"&&window.pushModalHistory("thermalPreview"),!0),Et=(e=!1)=>{const t=()=>{const s=ve;if(document.getElementById(ct)?.remove(),ve=null,It(),ea(),s&&typeof s.onCancel=="function")try{s.onCancel()}catch{}};typeof window.requestCloseModal=="function"?window.requestCloseModal("thermalPreview",e,t):t()},Wa=()=>{const e=ve;if(e){if(ve=null,document.getElementById(ct)?.remove(),It(),ea(),typeof e.onConfirm=="function")try{e.onConfirm()}catch(t){console.warn("[PrintPreview] onConfirm error:",t)}e.dispatch(e.base64,e.plainText,e.html||"")}},Ko=e=>{if(!(!ve||typeof ve.rebuild!="function")){ut({paperSize:e});try{const t=ve.rebuild();t&&(ve.base64=t.base64,ve.plainText=t.plainText,ve.previewLines=t.previewLines,ve.html=t.html||"")}catch(t){console.warn("[PrintPreview] Gagal rebuild payload:",t)}za(),we(`Ukuran kertas diubah ke ${e}`)}},Uo=()=>{Et(),typeof window.openPrinterSettingsModal=="function"&&(window.openPrinterSettingsModal(),we("Atur printer, lalu tekan Cetak lagi untuk melihat preview terbaru."))},jo=(e={})=>{if(!e.html)return!1;Tt(),Xt={...e};const t=(e.paper||"a4")==="a4";document.getElementById(Pt)?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="${Pt}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-html-title" onclick="if(event.target===this) window.closeHtmlPrintPreview()">
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
    </div>`);const s=document.getElementById("utp-html-frame");if(s){const n=s.contentWindow.document;n.open(),n.write(e.html),n.close()}return ja(),_a(()=>Ga(),()=>Bt()),typeof window.pushModalHistory=="function"&&window.pushModalHistory("htmlPreview"),!0},Bt=(e=!1)=>{const t=()=>{document.getElementById(Pt)?.remove(),Xt=null,It(),ea()};typeof window.requestCloseModal=="function"?window.requestCloseModal("htmlPreview",e,t):t()},Ga=()=>{const e=document.getElementById("utp-html-frame");if(!(!e||!Xt)){if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){try{const t=e.contentWindow.document,s=Array.from(t.querySelectorAll("style")).map(a=>a.outerHTML).join("");let n=document.getElementById("a4-print-section");n||(n=document.createElement("div"),n.id="a4-print-section",document.body.appendChild(n)),n.innerHTML=s+t.body.innerHTML,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500)}catch(t){console.warn("[PrintPreview] Native print error:",t)}Bt();return}try{e.contentWindow.focus(),e.contentWindow.print()}catch(t){console.warn("[PrintPreview] iframe print error:",t),we("Gagal membuka dialog cetak. Coba lagi.","error")}}};typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Tt,{once:!0}):Tt());window.openThermalPrintPreview=qa;window.closeThermalPrintPreview=Et;window.closeThermalPreviewModal=Et;window.confirmThermalPrint=Wa;window.setThermalPreviewPaper=Ko;window.openPrinterSettingsFromPreview=Uo;window.openHtmlPrintPreview=jo;window.closeHtmlPrintPreview=Bt;window.closeHtmlPreviewModal=Bt;window.confirmHtmlPrint=Ga;const M=e=>"Rp "+Math.round(Number(e||0)).toLocaleString("id-ID"),tt=e=>Math.round(Number(e||0)).toLocaleString("id-ID"),ta=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(3).replace(/\.?0+$/,"")},B=e=>e?String(e).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"").replace(/[\r\t]/g," ").replace(/[^\x20-\x7E\n]/g," "):"",_=(e,t)=>{if(!e)return[];const s=B(e).replace(/ +/g," ").trim();if(!s)return[];if(s.length<=t)return[s];const n=s.split(" "),a=[];let o="";for(const r of n)if(r)if(r.length>t){o&&(a.push(o),o="");for(let l=0;l<r.length;l+=t){const d=r.substring(l,l+t);d.length===t?a.push(d):o=d}}else(o?o.length+1+r.length:r.length)<=t?o=o?o+" "+r:r:(a.push(o),o=r);return o&&a.push(o),a},$e=(e,t=!1)=>{const s=e?new Date(e):new Date,n=String(s.getDate()).padStart(2,"0"),a=String(s.getMonth()+1).padStart(2,"0"),o=t?s.getFullYear():String(s.getFullYear()).slice(-2),r=String(s.getHours()).padStart(2,"0"),l=String(s.getMinutes()).padStart(2,"0");return`${n}/${a}/${o} ${r}:${l}`},aa=(e,t,s,n=!1)=>{const a=B(String(e||"")).trimEnd(),o=B(String(t||"")).trim(),r=s-a.length-o.length;if(r>=0)return[a+" ".repeat(r)+o];if(n){const c=Math.max(0,s-o.length-1),u=a.substring(0,c).trimEnd(),f=Math.max(1,s-u.length-o.length);return[u+" ".repeat(f)+o]}const l=_(a,s),d=l[l.length-1]||"";if(d.length+1+o.length<=s){const c=s-d.length-o.length;return l[l.length-1]=d+" ".repeat(c)+o,l}else{const c=Math.max(0,s-o.length);return[...l," ".repeat(c)+o]}},We=e=>e?i(String(e)).replace(/^ +/gm,t=>"&nbsp;".repeat(t.length)):"";class je{constructor(t=32){this.cols=Number(t)||32,this.bytes=[],this.plainLines=[],this.previewLines=[],this.items=[],this._bold=!1,this._size="normal"}init(){return this.bytes.push(27,64),this}align(t="left"){const s=t==="center"?1:t==="right"?2:0;return this.bytes.push(27,97,s),this}bold(t=!0){return this.bytes.push(27,69,t?1:0),this._bold=!!t,this}size(t="normal"){return this._size=t||"normal",t==="title"?this.bytes.push(29,33,17):t==="tall"||t==="total"?this.bytes.push(29,33,1):t==="wide"?this.bytes.push(29,33,16):this.bytes.push(29,33,0),this}text(t){if(!t)return this;const s=B(t);for(let n=0;n<s.length;n++)this.bytes.push(s.charCodeAt(n));return this}line(t="",s="left"){this.align(s),this.text(t),this.bytes.push(10),this.plainLines.push(t);const n=B(t);return this.previewLines.push({t:n,a:s,b:this._bold,s:this._size}),this.items.push({type:"line",text:n,align:s,bold:this._bold,size:this._size}),this}centered(t=""){return _(t,this.cols).forEach(n=>this.line(n,"center")),this}twoColumn(t="",s="",n=!1,a=!1){n&&this.bold(!0);const o=aa(t,s,this.cols,a);o.forEach(d=>{this.align("left"),this.text(d),this.bytes.push(10),this.plainLines.push(d)});const r=B(String(t||"")),l=B(String(s||""));return this.previewLines.push({type:"two-column",left:r,right:l,t:o[0],a:"left",b:!!n,s:this._size}),this.items.push({type:"two-column",left:r,right:l,bold:!!n,size:this._size}),n&&this.bold(!1),this}itemRow(t){const s=t.variantName?` (${t.variantName}${t.colorCode?" "+t.colorCode:""})`:"",n=(t.name||"Barang")+s+(t.poTime?" [PO]":"");this.bold(!0),_(n,this.cols).forEach(c=>this.line(c,"left")),this.bold(!1);const o=t.effectivePrice||t.price||0,r=t.subtotal!==void 0?t.subtotal:parseFloat(t.qty||1)*o,l=`  ${ta(t.qty)} ${t.unit||"pcs"} x ${tt(o)}`,d=tt(r);return this.twoColumn(l,d,!1,!1),t.discount&&t.discount>0&&this.twoColumn("  (Pot. Diskon)",`-${tt(t.discount)}`,!1,!0),t.poTime&&this.line(`  * Estimasi PO: ${t.poTime}`,"left"),this}separator(t="-"){const s=t.repeat(this.cols);return this.align("left"),this.text(s),this.bytes.push(10),this.plainLines.push(s),this.previewLines.push({type:"separator",t:s,a:"left",b:!1,s:"normal"}),this.items.push({type:"separator",char:t}),this}doubleSeparator(){const t="=".repeat(this.cols);return this.align("left"),this.text(t),this.bytes.push(10),this.plainLines.push(t),this.previewLines.push({type:"double-separator",t,a:"left",b:!1,s:"normal"}),this.items.push({type:"double-separator"}),this}feed(t=3){this.bytes.push(27,100,Math.max(1,t));for(let s=0;s<t;s++)this.plainLines.push(""),this.previewLines.push({t:"",a:"left",b:!1,s:"normal"});return this.items.push({type:"feed",lines:t}),this}cut(){return this.bytes.push(29,86,65,3),this}openDrawer(){return this.bytes.push(27,112,0,25,250),this}barcode(t,s="CODE128",n=45){if(!t)return this;const a=B(String(t)).trim();if(!a)return this;if(this.align("center"),this.bytes.push(29,104,Math.max(30,Math.min(100,n))),this.bytes.push(29,119,2),this.bytes.push(29,72,0),s==="CODE39"){this.bytes.push(29,107,4);for(let o=0;o<a.length;o++)this.bytes.push(a.charCodeAt(o));this.bytes.push(0)}else{const o=[];for(let r=0;r<a.length;r++)o.push(a.charCodeAt(r));this.bytes.push(29,107,73,o.length+2,123,66,...o)}return this.plainLines.push(`[BARCODE: ${a}]`),this.previewLines.push({type:"barcode",code:a,t:a,a:"center",b:!1,s:"barcode",isBarcode:!0}),this.items.push({type:"barcode",code:a}),this}toBase64(){const t=new Uint8Array(this.bytes);let s="";const n=t.length,a=8192;for(let o=0;o<n;o+=a){const r=t.subarray(o,o+a);s+=String.fromCharCode.apply(null,r)}return btoa(s)}toPlainText(){return this.plainLines.join(`
`)}toHtml(){let t="";for(const s of this.items)if(s.type==="line"){const n=s.align==="center"?"utp-align-center":s.align==="right"?"utp-align-right":"utp-align-left",a=s.bold?"font-bold":"";let o="";s.size==="title"||s.size==="wide"?o="utp-title":(s.size==="tall"||s.size==="total")&&(o="utp-tall"),!s.text||!s.text.trim()?t+='<div class="utp-empty-line">&nbsp;</div>':t+=`<div class="utp-line ${n} ${a} ${o}">${We(s.text)}</div>`}else if(s.type==="two-column"){const n=s.bold?"font-bold":"";let a="";s.size==="title"||s.size==="wide"?a="utp-title":(s.size==="tall"||s.size==="total")&&(a="utp-tall"),t+=`<div class="utp-row ${n} ${a}"><div class="utp-col-left">${We(s.left)}</div><div class="utp-col-right">${We(s.right)}</div></div>`}else if(s.type==="separator")t+='<div class="utp-separator"></div>';else if(s.type==="double-separator")t+='<div class="utp-double-separator"></div>';else if(s.type==="barcode")t+=`
                <div class="utp-barcode-wrap">
                    <div class="utp-barcode-bars" aria-hidden="true"></div>
                    <div class="utp-barcode-code">*${i(s.code)}*</div>
                </div>`;else if(s.type==="feed"){const n=Math.max(1,s.lines||1)*6;t+=`<div style="height:${n}px;"></div>`}return t}}const _e=(e,t="",s="",n={})=>{if(!n.skipPreview)return qa({base64:e,plainText:t,html:s,previewLines:n.previewLines,title:n.title,rebuild:n.rebuild,onConfirm:n.onConfirm,onCancel:n.onCancel,dispatch:(a,o,r)=>ha(a,o,r)});if(typeof n.onConfirm=="function")try{n.onConfirm()}catch{}return ha(e,t,s)},ha=(e,t="",s="")=>{const n=/android/i.test(navigator.userAgent||"");if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function")try{return window.AndroidNativeApp.printRawBT(e),we("Mencetak struk via RawBT..."),!0}catch(a){console.warn("[RawBT] AndroidNativeApp error, mencoba intent...",a)}if(n)try{we("Membuka Printer RawBT...");const a=`intent:base64,${e}#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;end;`;return window.location.href=a,setTimeout(()=>{if(!document.hidden)try{window.location.href=`rawbt:base64,${e}`}catch{}},800),!0}catch(a){console.warn("[RawBT] Intent trigger failed:",a)}return we("Mencetak struk kasir..."),Ht(s||t),!0},Ht=e=>{const t=Y(),n=Ie(t.paperSize)>=40,a=n?"80mm":"58mm",o=n?"68mm":"44mm",r=n?"10.5px":"8.8px",l=typeof e=="string"&&e.includes("<")&&e.includes(">");let d=e;l||(d=String(e||"").split(`
`).map(u=>{const f=u.trim();if(!f)return'<div class="utp-empty-line">&nbsp;</div>';if(/^[-]{8,}$/.test(f))return'<div class="utp-separator"></div>';if(/^[=]{8,}$/.test(f))return'<div class="utp-double-separator"></div>';if(/^\[BARCODE:\s*(.+)\]$/i.test(f)){const g=f.replace(/^\[BARCODE:\s*/i,"").replace(/\]$/,"").trim();return`
                <div class="utp-barcode-wrap">
                    <div class="utp-barcode-bars" aria-hidden="true"></div>
                    <div class="utp-barcode-code">*${i(g)}*</div>
                </div>`}const b=u.match(/^(\s{0,4}.+?)\s{3,}(.+)$/);return b&&b[1]&&b[2]?`<div class="utp-row"><div class="utp-col-left">${We(b[1])}</div><div class="utp-col-right">${We(b[2])}</div></div>`:`<div class="utp-line">${We(u)}</div>`}).join(""));try{let c=document.getElementById("thermal-print-iframe");c&&c.remove(),c=document.createElement("iframe"),c.id="thermal-print-iframe",c.style.position="fixed",c.style.right="0",c.style.bottom="0",c.style.width="0",c.style.height="0",c.style.border="0",c.style.visibility="hidden",c.style.zIndex="-9999",document.body.appendChild(c);const u=c.contentDocument||c.contentWindow.document;u.open(),u.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Cetak Struk Thermal</title>
  <style>
    @page {
      margin: 0mm !important;
      size: ${a} auto;
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
      padding: 0 ${n?"2.5mm":"1.5mm"} 4mm ${n?"1mm":"0.5mm"} !important;
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
      padding-right: ${n?"2.5mm":"1.5mm"} !important;
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
      max-width: ${n?"220px":"150px"} !important;
      height: ${n?"36px":"30px"} !important;
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
</html>`),u.close(),setTimeout(()=>{try{c.contentWindow.focus(),c.contentWindow.print()}catch(f){console.warn("[RawBT] Iframe print gagal, fallback ke direct print:",f),ya(d,a,o)}},120);return}catch(c){console.warn("[RawBT] Gagal membuat isolated print iframe:",c)}ya(d,a,o)},ya=(e,t,s)=>{let n=x("thermal-print-section");n||(n=document.createElement("div"),n.id="thermal-print-section",document.body.appendChild(n));const a=t==="80mm";n.className=a?"paper-80mm":"paper-58mm",document.body.classList.remove("paper-58mm","paper-80mm"),document.body.classList.add(a?"paper-80mm":"paper-58mm");let o=document.getElementById("dynamic-print-page-style");o||(o=document.createElement("style"),o.id="dynamic-print-page-style",document.head.appendChild(o)),o.innerHTML=`@media print { @page { margin: 0 !important; size: ${t} auto; } html, body { width: ${s} !important; margin: 0 !important; } }`,n.innerHTML=`
        <div class="utp-thermal-wrap" style="width:${s};max-width:${s};font-family:'Courier New',Courier,monospace;font-size:${a?"10.5px":"8.8px"};line-height:1.25;color:#000;background:#fff;padding:0 ${a?"2.5mm":"1.5mm"} 4mm ${a?"1mm":"0.5mm"};margin:0;box-sizing:border-box;">
            ${e}
        </div>
    `,setTimeout(()=>{window.print()},120)},Va=()=>{if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.openRawBT=="function"){window.AndroidNativeApp.openRawBT();return}/android/i.test(navigator.userAgent||"")?(window.location.href="intent:#Intent;package=ru.a402d.rawbtprinter;end;",setTimeout(()=>{document.hidden||(window.location.href="https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter")},1200)):window.open("https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter","_blank")},St=(e,t=null)=>{const s=t||Y(),n=Ie(s.paperSize),a=n>=40,o=new je(n);o.init(),s.openCashDrawer&&e.payment?.method==="cash"&&o.openDrawer();const r=B(s.headerText||p.store?.name||"TOKO PUTRI").trim(),l=B(s.storeAddress!==void 0&&s.storeAddress!==""?s.storeAddress:p.store?.address||"").trim(),d=B(s.storePhone!==void 0&&s.storePhone!==""?s.storePhone:p.store?.wa||"").trim(),c=Math.floor(n/2);r.length<=c?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),_(r.toUpperCase(),n).forEach(F=>o.line(F,"center")),o.size("normal").bold(!1)),s.showAddress!==!1&&l&&_(l,n).forEach(F=>o.line(F,"center")),s.showPhone!==!1&&d&&o.line(`WA: ${d}`,"center");const u=e.payment?.taxNpwp||p.store?.taxNpwp;s.showNpwp!==!1&&u&&o.line(`NPWP: ${u}`,"center"),o.separator("-");const f=$e(e.dateMs||Date.now(),a),b=`#${e.txId}`;o.twoColumn(`No : ${b}`,f,!1,!0);const g=B(e.cashierName||"Kasir").trim(),T=!!(e.customer?.isMember||e.customerType==="Member"),w=B(e.customer?.name||"Umum").trim(),N=T?`${w} (Member)`:w,I=`Ksr: ${g}`,q=`Plg: ${N}`;if(I.length+1+q.length<=n?o.twoColumn(I,q,!1,!1):(o.line(I,"left"),o.line(q,"left")),e.customer?.phone&&o.line(`HP : ${e.customer.phone}`,"left"),T&&e.customer?.memberId&&o.line(`ID : ${e.customer.memberId}`,"left"),o.separator("-"),(e.items||[]).forEach(F=>{o.itemRow(F)}),o.separator("-"),o.twoColumn("Subtotal",M(e.subtotal)),(e.globalDiscount||0)>0){const F=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";o.twoColumn(F,`- ${M(e.globalDiscount)}`)}(e.pointDiscount||0)>0&&o.twoColumn(`Diskon Poin (${e.pointsRedeemed||0} Poin)`,`- ${M(e.pointDiscount)}`),e.claimedReward&&e.claimedReward.name&&(o.separator("-"),o.bold(!0).line(`[KLAIM HADIAH: ${B(e.claimedReward.name)}]`,"left").bold(!1),o.twoColumn("Poin Reward Ditukar",`-${e.claimedReward.pointsCost||0} Poin`));const R=pt(e);if(R.hasPpn){const F=R.ppnAmount>0?`${R.isInclusive?"":"+ "}${M(R.ppnAmount)}`:"Rp 0";o.twoColumn(R.ppnLabel,F)}o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL",M(e.total)).size("normal").bold(!1),o.doubleSeparator();const H=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",S=H?"PUTRI PAYLATER":(e.payment?.method||"CASH").toUpperCase();if(o.twoColumn("Metode Bayar",S),e.payment?.method==="cash")o.twoColumn("Bayar Tunai",M(e.payment.paid)),o.bold(!0).twoColumn("Kembalian",M(e.payment.change)).bold(!1);else if(e.payment?.method==="transfer")e.payment?.bank&&o.twoColumn("Bank Penerima",e.payment.bank);else if(e.payment?.method==="qris")o.twoColumn("Kanal QRIS","QRIS Dinamis (Lunas)");else if(e.payment?.method==="tempo"){if(H){if(o.twoColumn("Limit Terpakai",M(e.payment?.paylaterUsed||e.paylaterUsed||e.total-(e.payment?.tempoDp??0))),e.payment?.paylaterMonths){const F=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${F} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${M(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${M(e.payment.paylaterServiceFee)}`)}if(o.twoColumn("Uang Muka (DP)",M(e.payment?.tempoDp??e.payment?.dp??0)),o.bold(!0).twoColumn(H?"Tagihan PayLater":"Sisa Piutang",M(e.payment.tempoBalance||0)).bold(!1),H&&e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${M(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),e.payment.tempoDueDate){const F=typeof e.payment.tempoDueDate=="number"?new Date(e.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e.payment.tempoDueDate;o.line(`Jatuh Tempo: ${F}`,"left")}}s.showPoints&&(e.pointsEarned>0||(e.pointsRedeemed||0)>0)&&(o.separator("-"),e.pointsEarned>0&&o.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),(e.pointsRedeemed||0)>0&&o.twoColumn("Poin Ditukar",`-${e.pointsRedeemed} Poin`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&o.twoColumn("Sisa Saldo Poin",`${e.finalMemberPoints} Poin`)),s.showBarcode&&(o.separator("-"),o.barcode(`POS-${e.txId}`,"CODE128",45),o.line(`*POS-${e.txId}*`,"center"),o.line("(SCAN DI KASIR)","center")),o.separator("-");const E=B(s.footerText||"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.").trim();E&&_(E,n).forEach(F=>o.line(F,"center"));const Q=B(s.footerPolicyNote!==void 0?s.footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi.").trim();return Q&&(o.line("","center"),_(Q,n).forEach(F=>o.line(F,"center"))),o.feed(s.feedLines||3),s.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},$t=(e,t=!1,s=null)=>{const n=s||Y(),a=Ie(n.paperSize),o=a>=40,r=new je(a);r.init();const l=B(n.headerText||p.store?.name||"TOKO PUTRI").trim(),d=B(p.store?.address||"").trim(),c=B(p.store?.wa||"").trim(),u=Math.floor(a/2);l.length<=u?(r.align("center").bold(!0).size("title").line(l.toUpperCase(),"center"),r.size("normal").bold(!1)):(r.align("center").bold(!0).size("tall"),_(l.toUpperCase(),a).forEach($=>r.line($,"center")),r.size("normal").bold(!1)),d&&_(d,a).forEach($=>r.line($,"center")),c&&r.line(`WA: ${c}`,"center"),r.separator("-");const f=o?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **";r.bold(!0).line(f,"center").bold(!1),r.separator("-");const b=$e(e.startTime,o),g=$e(e.endTime||Date.now(),o);r.twoColumn("Shift ID",`#${e.shiftNo||e.id||"-"}`,!1,!0),r.twoColumn("Kasir",(e.cashierName||"Kasir").substring(0,o?20:12),!1,!0),r.twoColumn("Mulai",b,!1,!0),r.twoColumn("Selesai",g,!1,!0),r.separator("-");const T=parseFloat(e.startingCash)||0,w=parseFloat(e.cashSales)||0,N=parseFloat(e.qrisSales)||0,I=parseFloat(e.bankSales||e.transferSales)||0,q=parseFloat(e.tempoSales)||0,R=parseFloat(e.cashIn)||0,H=parseFloat(e.cashOut)||0,S=parseFloat(e.totalSales)||w+N+I+q,E=e.txCount||0;r.bold(!0).line("RINGKASAN PENJUALAN","left").bold(!1),r.twoColumn("Modal Awal Laci",M(T)),r.twoColumn("Penjualan Tunai",M(w)),N>0&&r.twoColumn("Penjualan QRIS",M(N)),I>0&&r.twoColumn("Penjualan Transfer",M(I)),q>0&&r.twoColumn("Penjualan Tempo",M(q)),R>0&&r.twoColumn("Kas Masuk (In)",`+${M(R)}`),H>0&&r.twoColumn("Kas Keluar (Out)",`-${M(H)}`),r.separator("-"),r.twoColumn("Total Transaksi",`${E} Trx`),r.bold(!0).size("tall").twoColumn("TOTAL OMSET",M(S)).size("normal").bold(!1),r.doubleSeparator();const Q=Math.max(0,T+w+R-H);if(t)r.bold(!0).line("STATUS KAS LACI SAAT INI","left").bold(!1),r.twoColumn("Uang Kas Seharusnya",M(Q)),r.separator("-");else{const $=e.actualCash!==void 0?parseFloat(e.actualCash):Q,y=$-Q,m=y===0?"PAS (0)":y>0?`+${M(y)}`:`-${M(Math.abs(y))}`;r.bold(!0).line("REKONSILIASI KAS FISIK","left").bold(!1),r.twoColumn("Kas Diharapkan",M(Q)),r.twoColumn("Kas Fisik Aktual",M($)),r.bold(!0).twoColumn("Selisih Kas",m,!0).bold(!1),e.closingNotes&&_(`Catatan: ${e.closingNotes}`,a).forEach(U=>r.line(U,"left")),r.separator("-"),r.line("Verifikasi & Tanda Tangan:","left"),r.feed(2);const k=Math.floor(a/2),A="( Kasir )",L=o?"( Supervisor/Owner )":"( Supervisor )",K=Math.max(0,Math.floor((k-A.length)/2)),h=Math.max(0,Math.floor((k-L.length)/2)),O=" ".repeat(K)+A+" ".repeat(Math.max(1,k-K-A.length))+" ".repeat(h)+L;r.line(O,"left"),r.separator("-")}const F=n.footerText||"Laporan Kasir Resmi Toko Putri";return _(F,a).forEach($=>r.line($,"center")),r.feed(n.feedLines||3),n.autoCut&&r.cut(),{base64:r.toBase64(),plainText:r.toPlainText(),previewLines:r.previewLines,html:r.toHtml()}},At=(e,t=null)=>{const s=t||Y(),n=Ie(s.paperSize),a=n>=40,o=new je(n);o.init();const r=B(s.headerText||p.store?.name||"TOKO PUTRI").trim(),l=B(s.storeAddress!==void 0&&s.storeAddress!==""?s.storeAddress:p.store?.address||"").trim(),d=B(s.storePhone!==void 0&&s.storePhone!==""?s.storePhone:p.store?.wa||"").trim(),c=Math.floor(n/2);r.length<=c?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),_(r.toUpperCase(),n).forEach(E=>o.line(E,"center")),o.size("normal").bold(!1)),s.showAddress!==!1&&l&&_(l,n).forEach(E=>o.line(E,"center")),s.showPhone!==!1&&d&&o.line(`WA: ${d}`,"center");const u=e.payment?.taxNpwp||p.store?.taxNpwp;s.showNpwp!==!1&&u&&o.line(`NPWP: ${u}`,"center"),o.separator("-");const f=$e(e.dateString||e.dateMs||Date.now(),a);o.twoColumn(`Order: #${e.orderId}`,f,!1,!0);const b=(e.customer?.name||"Guest").substring(0,a?18:11),g=e.customer?.deliveryMethod==="delivery"?"Kirim":"Ambil";o.twoColumn(`Plg  : ${b}`,`Tipe: ${g}`,!1,!0),e.customer?.phone&&o.line(`HP   : ${e.customer.phone}`,"left"),e.customer?.note&&_(`Cat  : ${e.customer.note}`,n).forEach(E=>o.line(E,"left")),o.separator("-");const T=Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[];T.length>0?T.forEach(E=>{o.itemRow(E)}):o.line("- Tidak ada rincian barang -","center"),o.separator("-");const w=pt(e),N=w.subtotal,I=w.shipping,q=w.grandTotal;if(o.twoColumn("Subtotal",M(N)),(e.customer?.deliveryMethod==="delivery"||e.deliveryMethod==="delivery")&&o.twoColumn("Ongkos Kirim",M(I)),w.productDiscount&&o.twoColumn("Potongan Harga",`- ${M(w.productDiscount)}`),w.shippingDiscount&&o.twoColumn("Potongan Ongkir",`- ${M(w.shippingDiscount)}`),w.pointDiscount>0&&o.twoColumn("Potongan Poin",`- ${M(w.pointDiscount)}`),w.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${M(w.paylaterAdminFee)}`),w.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${M(w.paylaterServiceFee)}`),w.hasPpn){const E=w.ppnAmount>0?`${w.isInclusive?"":"+ "}${M(w.ppnAmount)}`:"Rp 0";o.twoColumn(w.ppnLabel,E)}o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL",M(q)).size("normal").bold(!1),o.doubleSeparator();const R=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater";if(o.twoColumn("Metode Bayar",R?"PUTRI PAYLATER":(e.payment?.method||"Tunai").toUpperCase()),R){if(e.payment?.paylaterMonths){const E=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${E} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${M(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${M(e.payment.paylaterServiceFee)}`),e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${M(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`)}s.showPoints&&(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(o.separator("-"),e.pointsEarned>0&&o.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),e.finalMemberPoints!==void 0&&o.twoColumn("Saldo Poin",`${e.finalMemberPoints} Poin`)),s.showBarcode&&(o.separator("-"),o.barcode(`ORDER-${e.orderId}`,"CODE128",45),o.line(`*ORDER-${e.orderId}*`,"center"),o.line("(SCAN DI KASIR)","center")),o.separator("-");const H=B(s.footerText||"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.").trim();H&&_(H,n).forEach(E=>o.line(E,"center"));const S=B(s.footerPolicyNote!==void 0?s.footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi.").trim();return S&&(o.line("","center"),_(S,n).forEach(E=>o.line(E,"center"))),o.feed(s.feedLines||3),s.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},Mt=(e,t=null)=>{const s=t||Y(),n=Ie(s.paperSize),a=n>=40,o=new je(n);o.init();const r=B(s.headerText||p.store?.name||"TOKO PUTRI").trim(),l=B(s.storeAddress!==void 0&&s.storeAddress!==""?s.storeAddress:p.store?.address||"").trim(),d=B(s.storePhone!==void 0&&s.storePhone!==""?s.storePhone:p.store?.wa||"").trim(),c=Math.floor(n/2);r.length<=c?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),_(r.toUpperCase(),n).forEach(h=>o.line(h,"center")),o.size("normal").bold(!1)),s.showAddress!==!1&&l&&_(l,n).forEach(h=>o.line(h,"center")),s.showPhone!==!1&&d&&o.line(`WA: ${d}`,"center");const u=e.payment?.taxNpwp||p.store?.taxNpwp;s.showNpwp!==!1&&u&&o.line(`NPWP: ${u}`,"center"),o.separator("-");const f=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",b=e.payment?.paymentStatus==="lunas"||parseFloat(e.payment?.tempoBalance||0)<=0,g=a?f?b?"*** NOTA PUTRI PAYLATER (LUNAS) ***":"*** NOTA TAGIHAN PUTRI PAYLATER ***":b?"*** NOTA TEMPO (LUNAS) ***":"*** NOTA TAGIHAN TEMPO (PIUTANG) ***":f?b?"** PAYLATER (LUNAS) **":"** NOTA PUTRI PAYLATER **":b?"** NOTA TEMPO (LUNAS) **":"** NOTA TAGIHAN TEMPO **";o.bold(!0).line(g,"center").bold(!1),o.separator("-");const T=$e(e.dateString||e.timestamp||Date.now(),a);o.twoColumn(`Order: #${e.orderId}`,T,!1,!0);const w=(e.customer?.name||"Pelanggan").substring(0,a?18:11);if(o.twoColumn(`Plg  : ${w}`,f?"Tipe: PayLater":"Tipe: Tempo",!1,!0),f&&e.payment?.paylaterMonths){const h=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${h} (${e.payment.paylaterMonths}x)`,!1,!0)}(e.customer?.phone||e.customer?.wa)&&o.line(`HP   : ${e.customer.wa||e.customer.phone}`,"left");let N=parseFloat(e.payment?.tempoBalance)||0,I=e.payment?.tempoPenaltyRate!==void 0?parseFloat(e.payment.tempoPenaltyRate):1,q=e.payment?.tempoPenaltyStopped===!0,R=0,H=e.payment?.tempoDueDate||0,S=0,E=0,Q=!1,F=!1;const $=Date.now();H>0&&($>H?(S=Math.floor(($-H)/(24*60*60*1e3)),S>0&&(Q=!0)):(E=Math.ceil((H-$)/(24*60*60*1e3)),E<=3&&(F=!0))),q?R=parseFloat(e.payment?.tempoFixedPenalty)||0:Q&&(R=I/100*N*S);let y=N+R;const m=e.payment?.installments||[],k=m.reduce((h,O)=>h+(parseFloat(O.amount)||0),0),A=e.payment?.grandTotal||N+k;if(H>0){const h=$e(H,a);let O="";b?O="LUNAS":Q?O=`Telat ${S} Hari`:F?O=`H-${E<=0?0:E}`:O=`Sisa ${E} Hari`,o.twoColumn(`J.Tmp: ${h}`,O,!1,!0)}o.separator("-"),(e.items||[]).forEach(h=>{o.itemRow(h)}),o.separator("-"),o.twoColumn("Total Transaksi",M(A)),f&&(e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${M(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Penanganan",`+ ${M(e.payment.paylaterServiceFee)}`)),m.length>0&&(o.separator("-"),o.bold(!0).line("HISTORI PEMBAYARAN CICILAN:","left").bold(!1),m.forEach((h,O)=>{const U=$e(h.date,a);o.twoColumn(`${O+1}. ${U}`,M(h.amount))}),o.twoColumn("Total Terbayar",M(k),!0)),o.twoColumn("Sisa Pokok",M(N)),f&&e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${M(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),R>0&&o.twoColumn(`Denda (${S} Hari)`,`+ ${M(R)}`),o.doubleSeparator(),o.bold(!0).size("tall").twoColumn(f?"TAGIHAN PAYLATER":"SISA TAGIHAN",M(b?0:y)).size("normal").bold(!1),o.doubleSeparator(),!b&&p.banks&&p.banks.length>0&&(o.line("REKENING TRANSFER RESMI:","left"),(p.banks||[]).forEach(h=>{o.line(`${h.bank||h.bankName||"Bank"}: ${h.number||h.bankAccount||"-"}`,"left"),o.line(`a/n ${h.name||h.bankOwner||"-"}`,"left")}),o.separator("-")),s.showBarcode&&(o.separator("-"),o.barcode(f?`PAYLATER-${e.orderId}`:`TEMPO-${e.orderId}`,"CODE128",45),o.line(f?`*PAYLATER-${e.orderId}*`:`*TEMPO-${e.orderId}*`,"center"),o.line(f?"(PUTRI PAYLATER RESMI)":"(NOTA TEMPO RESMI)","center")),o.separator("-");const L=B(s.footerText||"Terima kasih atas kerja sama dan kepercayaan Anda.").trim();L&&_(L,n).forEach(h=>o.line(h,"center"));const K=B(s.footerPolicyNote!==void 0?s.footerPolicyNote:"").trim();return K&&(o.line("","center"),_(K,n).forEach(h=>o.line(h,"center"))),o.feed(s.feedLines||3),s.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},Ct=(e=null)=>{const t=e||Y(),s=Ie(t.paperSize),n=s>=40,a=new je(s);a.init();const o=B(t.headerText||p.store?.name||"TOKO PUTRI").trim(),r=B(t.storeAddress!==void 0&&t.storeAddress!==""?t.storeAddress:p.store?.address||"").trim(),l=B(t.storePhone!==void 0&&t.storePhone!==""?t.storePhone:p.store?.wa||"").trim(),d=Math.floor(s/2);o.length<=d?(a.align("center").bold(!0).size("title").line(o.toUpperCase(),"center"),a.size("normal").bold(!1)):(a.align("center").bold(!0).size("tall"),_(o.toUpperCase(),s).forEach(g=>a.line(g,"center")),a.size("normal").bold(!1)),t.showAddress!==!1&&r&&_(r,s).forEach(g=>a.line(g,"center")),t.showPhone!==!1&&l&&a.line(`WA: ${l}`,"center"),a.separator("-");const c=n?`*** UJI COBA CETAK STRUK THERMAL ${s} KOLOM ***`:`** UJI CETAK THERMAL ${s} KOLOM **`;a.bold(!0).line(c,"center").bold(!1),a.separator("-"),a.line("MISTAR KALIBRASI TEPI KERTAS:","left");let u="";for(let g=1;g<=s;g++)u+=String(g%10);a.line(u,"left");let f="";for(let g=1;g<=s;g++)g===s||g%10===0?f+="|":g%5===0?f+=":":f+=".";a.line(f,"left"),a.line(`(Pastikan angka ${s%10} paling kanan tercetak utuh)`,"left"),a.separator("-");const b=$e(Date.now(),n);if(a.line(`Waktu   : ${b}`,"left"),a.line(`Format  : Thermal ${s} Kolom (${t.paperSize})`,"left"),a.line("Driver  : RAWBT FREE PRINT SERVICE","left"),a.line("Status  : 100% PRESISI & SIAP PAKAI","left"),a.separator("-"),a.bold(!0).twoColumn("ITEM SIMULASI","HARGA").bold(!1),a.itemRow({name:"Kertas Thermal Kasir Roll",qty:2,unit:"roll",price:15e3,subtotal:3e4}),a.itemRow({name:"Semen Portland Komposit 40kg",qty:1,unit:"sak",price:65e3,subtotal:65e3}),a.separator("-"),a.twoColumn("Subtotal",M(95e3)),a.twoColumn("Diskon Uji Coba",`- ${M(5e3)}`),a.doubleSeparator(),a.bold(!0).size("tall").twoColumn("TOTAL TES",M(9e4)).size("normal").bold(!1),a.doubleSeparator(),a.twoColumn("Bayar Tunai",M(1e5)),a.bold(!0).twoColumn("Kembalian",M(1e4)).bold(!1),t.showPoints&&(a.separator("-"),a.twoColumn("Simulasi Poin Member","+10 Poin")),t.showBarcode){a.separator("-");const g=`TEST-${Date.now().toString().slice(-6)}`;a.barcode(g,"CODE128",45),a.line(`*${g}*`,"center"),a.line("(BARCODE TEST BERHASIL)","center")}return a.separator("-"),_(t.footerText||"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.",s).forEach(g=>a.line(g,"center")),t.footerPolicyNote&&(a.line("","center"),_(t.footerPolicyNote,s).forEach(g=>a.line(g,"center"))),_("Hasil cetak telah terkalibrasi presisi.",s).forEach(g=>a.line(g,"center")),a.feed(t.feedLines||3),t.autoCut&&a.cut(),{base64:a.toBase64(),plainText:a.toPlainText(),previewLines:a.previewLines,html:a.toHtml()}},mt=e=>{const t=document.getElementById(e);return!!t&&!t.classList.contains("hidden")},Ja=e=>{if(!e){we("Data transaksi kasir tidak ditemukan.","warning");return}const t=Y(),s=St(e,t),n=mt("pos-receipt-fallback-modal");_e(s.base64,s.plainText,s.html,{skipPreview:n,previewLines:s.previewLines,title:`Struk Kasir #${e.txId||""}`,rebuild:()=>St(e,Y()),onConfirm:()=>{document.getElementById("pos-success-modal")?.remove(),document.getElementById("pos-receipt-fallback-modal")?.remove()}})},Ya=(e,t=!1)=>{if(!e){we("Data shift tidak ditemukan.","warning");return}const s=Y(),n=$t(e,t,s),a=mt("pos-shift-receipt-modal");_e(n.base64,n.plainText,n.html,{skipPreview:a,previewLines:n.previewLines,title:`${t?"Ringkasan Shift (X-Report)":"Rekap Tutup Shift (Z-Report)"} #${e.shiftNo||e.id||""}`,rebuild:()=>$t(e,t,Y()),onConfirm:()=>document.getElementById("pos-shift-receipt-modal")?.remove()})},Qa=async(e=null)=>{const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||qe,s=String(t||"").replace(/^#/,"").trim(),n=d=>{if(!d)return!1;const c=String(d.orderId||"").replace(/^#/,"").trim();return s?c===s||c.endsWith(s)||s.endsWith(c):!0};let a=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(a=e),(!a||!a.items||a.items.length===0)&&n(window.currentCustomerOrder)&&(a=window.currentCustomerOrder),(!a||!a.items||a.items.length===0)&&n(window.lastPrintedOrder)&&(a=window.lastPrintedOrder),(!a||!a.items||a.items.length===0)&&(Ge||[]).length>0){const d=Ge.find(n);d&&Array.isArray(d.items)&&d.items.length>0&&(a=d)}if((!a||!a.items||a.items.length===0)&&Array.isArray(ee)){const d=ee.find(n);d&&Array.isArray(d.items)&&d.items.length>0&&(a=d)}if((!a||!a.items||a.items.length===0)&&s)try{const d=typeof Ne<"u"&&Ne?Ne:window.db;if(d){let c=await d.collection("freshmart_orders").doc(s).get();if(!c.exists&&!s.startsWith("ORD-")){const u=await d.collection("freshmart_orders").doc("ORD-"+s).get();u.exists&&(c=u)}if(c&&c.exists&&(a=c.data(),a.orderId=a.orderId||c.id,window.currentCustomerOrder=a,window.lastPrintedOrder=a,Array.isArray(ee))){const u=ee.findIndex(n);if(u!==-1){ee[u].items=a.items||[],ee[u].payment=a.payment||{},ee[u].customer=a.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(ee))}catch{}}}}}catch(d){console.warn("[RawBT] Gagal fetch order detail from Firestore:",d)}if(!a&&Array.isArray(ee)&&(a=ee.find(n)),!a){we("Data pesanan tidak ditemukan.","warning");return}window.lastPrintedOrder=a;const o=Y(),r=At(a,o),l=mt("receipt-preview-modal");_e(r.base64,r.plainText,r.html,{skipPreview:l,previewLines:r.previewLines,title:`Struk Pesanan #${a.orderId||""}`,rebuild:()=>At(a,Y()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&l&&window.closeReceiptPreviewModal()}})},Za=(e=null)=>{const t=e||qe;let n=(window.cachedPiutangOrders||[]).find(l=>String(l.orderId)===String(t))||(Ge||[]).find(l=>String(l.orderId)===String(t));if(!n&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(t)&&(n=window.lastPrintedOrder),!n){if(typeof window.previewTempoReceipt=="function"&&t&&!window.__tempoReceiptFetching){window.__tempoReceiptFetching=!0,Promise.resolve(window.previewTempoReceipt(t)).finally(()=>{window.__tempoReceiptFetching=!1});return}we("Data nota piutang tidak ditemukan.","warning");return}const a=Y(),o=Mt(n,a),r=mt("receipt-preview-modal");_e(o.base64,o.plainText,o.html,{skipPreview:r,previewLines:o.previewLines,title:`Nota Tagihan Tempo #${n.orderId||""}`,rebuild:()=>Mt(n,Y()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&r&&window.closeReceiptPreviewModal()}})},Xa=()=>{const e=Y(),t=Ct(e);_e(t.base64,t.plainText,t.html,{previewLines:t.previewLines,title:"Uji Coba Cetak Printer",rebuild:()=>Ct(Y())})},Lt=(e,t=null)=>{const s=t||Y(),n=Ie(s.paperSize),a=n>=40,o=new je(n);o.init();const r=B(s.headerText||p.store?.name||"TOKO PUTRI").trim(),l=B(s.storeAddress!==void 0&&s.storeAddress!==""?s.storeAddress:p.store?.address||"").trim(),d=B(s.storePhone!==void 0&&s.storePhone!==""?s.storePhone:p.store?.wa||"").trim(),c=Math.floor(n/2);r.length<=c?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),_(r.toUpperCase(),n).forEach(w=>o.line(w,"center")),o.size("normal").bold(!1)),s.showAddress!==!1&&l&&_(l,n).forEach(w=>o.line(w,"center")),s.showPhone!==!1&&d&&o.line(`WA: ${d}`,"center");const u=p.store?.taxNpwp;s.showNpwp!==!1&&u&&o.line(`NPWP: ${u}`,"center"),o.separator("-");const f=a?"*** NOTA RETUR PENJUALAN (RMA) ***":"** NOTA RETUR PENJUALAN **";o.bold(!0).line(f,"center").bold(!1),o.separator("-");const b=$e(e.createdAt||Date.now(),a);o.twoColumn(`No Retur: #${e.id}`,b,!1,!0),o.twoColumn(`No Nota : #${e.orderId||"-"}`,`Ksr: ${(e.cashierName||"Kasir").substring(0,a?14:8)}`,!1,!0);const g=(e.customerName||"Pelanggan Umum").substring(0,a?22:14);o.twoColumn(`Plg     : ${g}`,"Status: Selesai",!1,!0),e.customerPhone&&o.line(`HP      : ${e.customerPhone}`,"left"),o.separator("-"),(e.items||[]).forEach(w=>{const N=w.variantName?` (${w.variantName})`:"",I=(w.name||"Barang")+N;o.bold(!0),_(I,n).forEach(S=>o.line(S,"left")),o.bold(!1);const q=`  ${ta(w.qty)} ${w.unit||"pcs"} x ${tt(w.soldPrice)}`,R=tt(w.subtotalRefund);o.twoColumn(q,R,!1,!1),w.reason&&o.line(`  * Alasan: ${w.reason}`,"left");const H=w.condition==="bad"?"Cacat/Rusak (Karantina)":"Kondisi Baik (Rak Toko)";o.line(`  * ${H}`,"left")}),o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL RETUR",M(e.totalRefund)).size("normal").bold(!1),o.doubleSeparator();let T="REFUND TUNAI";return e.refundMethod==="credit"?T="SALDO KREDIT TOKO":e.refundMethod==="exchange"?T="TUKAR BARANG LAIN":e.refundMethod&&(T=String(e.refundMethod).toUpperCase()),o.twoColumn("Kompensasi",T),e.notes&&(o.separator("-"),_(`Catatan: ${e.notes}`,n).forEach(w=>o.line(w,"left"))),s.showBarcode&&(o.separator("-"),o.barcode(`RMA-${e.id}`,"CODE128",45),o.line(`*RMA-${e.id}*`,"center"),o.line("(BUKTI RETUR RESMI)","center")),o.separator("-"),o.line("Barang retur telah diverifikasi oleh toko.","center"),o.line("Terima kasih atas kerja samanya.","center"),o.feed(s.feedLines||3),s.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},es=(e=null)=>{const t=p.salesReturns||[];let s=null;if(typeof e=="object"&&e!==null?s=e:e&&(s=t.find(r=>String(r.id)===String(e))),!s){we("Data nota retur tidak ditemukan.","warning");return}const n=Y(),a=Lt(s,n),o=mt("receipt-preview-modal");_e(a.base64,a.plainText,a.html,{skipPreview:o,previewLines:a.previewLines,title:`Nota Retur Penjualan #${s.id}`,rebuild:()=>Lt(s,Y()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&o&&window.closeReceiptPreviewModal()}})};window.cleanLineAscii=B;window.wrapWords=_;window.formatTwoColumn=aa;window.formatCompactDate=$e;window.EscPosBuilder=je;window.sendToRawBT=_e;window.renderThermalDOMAndPrint=Ht;window.openRawBTApp=Va;window.buildPOSReceiptPayload=St;window.buildShiftReceiptPayload=$t;window.buildOrderReceiptPayload=At;window.buildTempoReceiptPayload=Mt;window.buildTestReceiptPayload=Ct;window.buildSalesReturnReceiptPayload=Lt;window.printPOSReceiptDirect=Ja;window.printShiftSettlementDirect=Ya;window.printCustomerReceiptDirect=Qa;window.printTempoReceiptDirect=Za;window.printSalesReturnReceiptDirect=es;window.executeRawBTTestPrint=Xa;const Yn=Object.freeze(Object.defineProperty({__proto__:null,EscPosBuilder:je,buildOrderReceiptPayload:At,buildPOSReceiptPayload:St,buildSalesReturnReceiptPayload:Lt,buildShiftReceiptPayload:$t,buildTempoReceiptPayload:Mt,buildTestReceiptPayload:Ct,cleanLineAscii:B,escReceipt:We,executeRawBTTestPrint:Xa,fRp:M,fRpNum:tt,formatCompactDate:$e,formatQty:ta,formatTwoColumn:aa,openRawBTApp:Va,printCustomerReceiptDirect:Qa,printPOSReceiptDirect:Ja,printSalesReturnReceiptDirect:es,printShiftSettlementDirect:Ya,printTempoReceiptDirect:Za,renderThermalDOMAndPrint:Ht,sendToRawBT:_e,wrapWords:_},Symbol.toStringTag,{value:"Module"})),sa=async(e=null)=>{if(e&&typeof ma=="function"&&typeof e=="string"&&ma(e),typeof window.printCustomerReceiptDirect=="function")return window.printCustomerReceiptDirect(e);const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||qe,s=String(t||"").replace(/^#/,"").trim(),n=k=>{if(!k)return!1;const A=String(k.orderId||"").replace(/^#/,"").trim();return s?A===s||A.endsWith(s)||s.endsWith(A):!0};let a=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(a=e),(!a||!a.items||a.items.length===0)&&n(window.currentCustomerOrder)&&(a=window.currentCustomerOrder),(!a||!a.items||a.items.length===0)&&n(window.lastPrintedOrder)&&(a=window.lastPrintedOrder),(!a||!a.items||a.items.length===0)&&(Ge||[]).length>0){const k=Ge.find(n);k&&Array.isArray(k.items)&&k.items.length>0&&(a=k)}if((!a||!a.items||a.items.length===0)&&Array.isArray(ee)){const k=ee.find(n);k&&Array.isArray(k.items)&&k.items.length>0&&(a=k)}if((!a||!a.items||a.items.length===0)&&s)try{const k=typeof Ne<"u"&&Ne?Ne:window.db;if(k){let A=await k.collection("freshmart_orders").doc(s).get();if(!A.exists&&!s.startsWith("ORD-")){const L=await k.collection("freshmart_orders").doc("ORD-"+s).get();L.exists&&(A=L)}if(A&&A.exists&&(a=A.data(),a.orderId=a.orderId||A.id,window.currentCustomerOrder=a,window.lastPrintedOrder=a,Array.isArray(ee))){const L=ee.findIndex(n);if(L!==-1){ee[L].items=a.items||[],ee[L].payment=a.payment||{},ee[L].customer=a.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(ee))}catch{}}}}}catch(k){console.warn("[Receipt] Gagal fetch order detail from Firestore:",k)}if(!a&&Array.isArray(ee)&&(a=ee.find(n)),!a)return;window.lastPrintedOrder=a;const o=typeof Y=="function"?Y():{paperSize:"58mm",showPoints:!0,showBarcode:!0},l=Ie(o.paperSize)>=40,d=$e(a.dateString||a.date||Date.now(),l),c=o.headerText||p.store.name||"Toko Putri",u=o.storeAddress!==void 0&&o.storeAddress!==""?o.storeAddress:p.store.address||"",f=o.storePhone!==void 0&&o.storePhone!==""?o.storePhone:p.store.wa||"",b=(k,A)=>`<div class="utp-row"><div class="utp-col-left">${i(k)}</div><div class="utp-col-right">${i(A)}</div></div>`,g=Array.isArray(a.items)?a.items:Array.isArray(a.cart)?a.cart:[],T=pt(a),w=T.subtotal,N=T.shipping,I=T.grandTotal,q=String(a.payment?.method||a.method||"Tunai").toUpperCase(),R=a.customer?.name||a.customerName||"Guest",H=a.customer?.deliveryMethod==="delivery"||a.deliveryMethod==="delivery";let S=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${i(c)}</div>`;o.showAddress!==!1&&u&&(S+=`<div class="text-center" style="font-size:10px;color:#475569;margin-bottom:2px;">${i(u)}</div>`),o.showPhone!==!1&&f&&(S+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${i(f)}</div>`);const E=a.payment?.taxNpwp||p.store?.taxNpwp;if(o.showNpwp!==!1&&E&&(S+=`<div class="text-center" style="font-size:10px;font-family:monospace;margin-bottom:4px;">NPWP: ${i(E)}</div>`),S+='<div class="utp-separator"></div>',S+=b(`Order: #${a.orderId}`,d),S+=b(`Plg  : ${i(R).substring(0,l?18:10)}`,`Tipe: ${H?"Kirim":"Ambil"}`),(a.customer?.phone||a.customerPhone)&&(S+=`<div class="utp-line">HP   : ${i(a.customer?.phone||a.customerPhone)}</div>`),S+='<div class="utp-separator"></div>',a.customer?.note&&(S+=`<div style="white-space:pre-wrap;word-break:break-word;">Cat: ${i(a.customer.note)}</div><div class="utp-separator"></div>`),g.length>0?g.forEach(k=>{let A=k.variantName?` (${i(k.variantName)}${k.colorCode?" "+i(k.colorCode):""})`:"";const L=i(k.name||"Barang")+A+(k.poTime?" [PO]":""),K=k.effectivePrice||k.price||0,h=`  ${parseFloat(k.qty||1)} ${i(k.unit||"pcs")} x ${Math.round(K).toLocaleString("id-ID")}`,O=(parseFloat(k.qty||1)*K).toLocaleString("id-ID");S+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;">${L}</div>${b(h,O)}`,k.poTime&&(S+=`<div style="font-size:10px;font-style:italic;color:#4b5563;">  * Estimasi PO: ${i(k.poTime)}</div>`)}):S+='<div style="font-style:italic;color:#64748b;text-align:center;padding:4px 0;">- Tidak ada rincian barang -</div>',S+=`<div class="utp-separator"></div>${b("Subtotal",w.toLocaleString("id-ID"))}`,H&&(S+=b("Ongkir",N.toLocaleString("id-ID"))),T.shippingDiscount&&(S+=b("Pot.Ongkir",`-${T.shippingDiscount.toLocaleString("id-ID")}`)),T.productDiscount&&(S+=b("Pot.Harga",`-${T.productDiscount.toLocaleString("id-ID")}`)),T.pointDiscount>0&&(S+=b("Pot.Poin",`-${T.pointDiscount.toLocaleString("id-ID")}`)),T.paylaterAdminFee>0&&(S+=b("Biaya Admin",`+${T.paylaterAdminFee.toLocaleString("id-ID")}`)),T.paylaterServiceFee>0&&(S+=b("Biaya Layanan",`+${T.paylaterServiceFee.toLocaleString("id-ID")}`)),T.hasPpn){const k=T.ppnAmount>0?`${T.isInclusive?"":"+"}${T.ppnAmount.toLocaleString("id-ID")}`:"0";S+=b(T.ppnLabel,k)}if(S+=`<div class="utp-double-separator"></div><div class="font-bold text-[12px]">${b("TOTAL","Rp "+I.toLocaleString("id-ID"))}</div>${b("Metode Bayar",q)}`,a.payment?.method==="tempo"||a.payment?.isPaylater||a.payment?.subMethod==="paylater"){if(!!(a.payment?.isPaylater||a.payment?.subMethod==="paylater")){if(a.payment?.paylaterMonths){const A=a.payment?.paylaterTenor==="2m"?"2 Bulan":a.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari";S+=b("Tenor Cicilan",`${A} (${a.payment.paylaterMonths}x)`)}a.payment?.paylaterMonthlyInstallment&&(S+=`<div class="font-bold">${b("Angsuran/Bln","Rp "+Math.round(a.payment.paylaterMonthlyInstallment).toLocaleString("id-ID"))}</div>`),a.payment?.tempoDp>0&&(S+=b("Uang Muka (DP)","Rp "+Math.round(a.payment.tempoDp).toLocaleString("id-ID"))),S+=`<div class="font-bold">${b("Tagihan PayLater","Rp "+Math.round(a.payment?.tempoBalance||I).toLocaleString("id-ID"))}</div>`}else a.payment?.tempoDp>0&&(S+=b("Uang Muka (DP)","Rp "+Math.round(a.payment.tempoDp).toLocaleString("id-ID"))),S+=`<div class="font-bold">${b("Sisa Piutang","Rp "+Math.round(a.payment?.tempoBalance||I).toLocaleString("id-ID"))}</div>`;if(a.payment?.tempoDueDate){const A=typeof a.payment.tempoDueDate=="number"?new Date(a.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):a.payment.tempoDueDate;S+=b("Jatuh Tempo",A)}}o.showPoints&&(a.pointsEarned>0||a.finalMemberPoints!==void 0)&&(S+='<div class="utp-separator"></div>',a.pointsEarned>0&&(S+=b("Poin Didapat","+"+a.pointsEarned+" Poin")),a.finalMemberPoints!==void 0&&a.finalMemberPoints!==null&&(S+=`<div class="font-bold">${b("Saldo Poin",String(a.finalMemberPoints)+" Poin")}</div>`),a.claimedReward&&(S+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;margin-top:2px;">HADIAH: ${i(a.claimedReward.name)}</div>`)),g.some(k=>k&&k.poTime&&k.poTime!=="")&&(S+='<div class="utp-separator"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),o.showBarcode&&(S+=`<div class="utp-separator"></div>
        <div style="text-align:center;margin:6px 0 3px;">
            <div style="width:75%;max-width:200px;height:32px;margin:0 auto;background:repeating-linear-gradient(90deg,#000 0px,#000 2px,transparent 2px,transparent 4px,#000 4px,#000 7px,transparent 7px,transparent 9px,#000 9px,#000 11px,transparent 11px,transparent 13px,#000 13px,#000 16px,transparent 16px,transparent 18px,#000 18px,#000 19px,transparent 19px,transparent 22px);border-top:1px solid #000;border-bottom:1px solid #000;"></div>
            <div style="font-family:monospace;letter-spacing:2px;font-size:10.5px;font-weight:bold;margin-top:3px;">*ORDER-${i(a.orderId)}*</div>
            <div style="font-size:8px;color:#666;">SCAN DI KASIR</div>
        </div>`),S+=`<div class="utp-separator"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${i(o.footerText||"Terima Kasih Atas Kunjungan Anda")}</div>`,o.footerPolicyNote&&(S+=`<div class="text-center my-1" style="font-size:9px;line-height:1.25;color:#475569;">${i(o.footerPolicyNote)}</div>`),S+='<div class="utp-separator"></div><div style="height:15px;"></div>',Oa("receipt-paper-content",S);const F=x("receipt-paper-content");F&&(F.style.width=l?"340px":"260px");const $=x("receipt-preview-modal-box");$&&($.classList.remove("max-w-[320px]","max-w-[400px]"),$.classList.add(l?"max-w-[400px]":"max-w-[320px]"));const y=x("receipt-preview-modal"),m=x("receipt-preview-modal-box");y&&y.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),Rt(y,m)},_o=(e=!1)=>{const t=x("receipt-preview-modal"),s=x("receipt-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{Ve(t,s)}):Ve(t,s))},zo=()=>{const e=qe||(window.lastPrintedOrder?window.lastPrintedOrder.orderId:null);if(typeof window.printCustomerReceiptDirect=="function"){window.printCustomerReceiptDirect(e);return}if(!((Ge||[]).find(n=>n.orderId===qe)||(Array.isArray(ee)?ee.find(n=>n.orderId===qe):null)||window.lastPrintedOrder))return;const s=x("receipt-paper-content")?x("receipt-paper-content").innerHTML:"";Ht(s)};window.openReceiptPreview=sa;window.openCustomerReceiptPreview=e=>{sa(e)};window.closeReceiptPreviewModal=_o;window.executePrintReceipt=zo;window.checkProPrint=()=>{sa()};const ce={OWNER:"owner",ADMIN:"admin",CASHIER:"cashier",STAFF:"staff"},qo=[{key:"owner",label:"Owner / Direktur Utama",defaultRole:"owner"},{key:"head_store",label:"Kepala Toko / Manager",defaultRole:"admin"},{key:"admin_ops",label:"Admin Operasional & Inventori",defaultRole:"admin"},{key:"cashier_head",label:"Kasir Utama",defaultRole:"cashier"},{key:"cashier",label:"Kasir POS",defaultRole:"cashier"},{key:"warehouse_head",label:"Kepala Gudang & Logistik",defaultRole:"staff"},{key:"warehouse_staff",label:"Staf Gudang & Penataan Rak",defaultRole:"staff"},{key:"driver",label:"Driver / Kurir Pengiriman",defaultRole:"staff"},{key:"store_helper",label:"Helper / Pramuniaga Toko",defaultRole:"staff"}],Wo=[{key:"orders",label:"Pesanan Online",desc:"Proses status pesanan, update resi pengiriman & konfirmasi bayar",group:"operasional",icon:"fa-receipt"},{key:"products",label:"Katalog Produk & Stok",desc:"Tambah/edit produk, atur varian, dan perbarui stok barang",group:"operasional",icon:"fa-box-open"},{key:"suppliers",label:"Supplier & Rekanan",desc:"Kelola master data supplier, kontak kulakan, dan asal produk",group:"operasional",icon:"fa-truck-field"},{key:"purchases",label:"Order Kulakan (PO)",desc:"Buat PO pembelian grosir, terima restock, & kelola hutang rekanan",group:"operasional",icon:"fa-cart-flatbed"},{key:"piutang",label:"Piutang Tempo & Cicilan",desc:"Kelola nota piutang pelanggan, denda keterlambatan, & cicilan",group:"operasional",icon:"fa-clock-rotate-left"},{key:"customers",label:"Database Pelanggan",desc:"Lihat daftar member, atur limit kredit PayLater, & mutasi poin",group:"operasional",icon:"fa-address-book"},{key:"pos",label:"Kasir POS",desc:"Akses antarmuka penjualan kasir toko fisik dan shift kasir",group:"operasional",icon:"fa-cash-register"},{key:"expenses",label:"Biaya Operasional Toko",desc:"Buku kas pengeluaran operasional toko harian & nota kas",group:"operasional",icon:"fa-money-bill-transfer"},{key:"stock_opname",label:"Stock Opname (Audit Fisik)",desc:"Audit stok fisik rak/gudang, rekonsiliasi selisih & terapkan penyesuaian stok",group:"operasional",icon:"fa-clipboard-check"},{key:"returns",label:"Retur Barang & RMA",desc:"Kelola retur penjualan pelanggan, klaim cacat supplier & stok karantina",group:"operasional",icon:"fa-right-left"},{key:"categories",label:"Kategori Produk",desc:"Tambah dan susun kategori etalase produk",group:"konten",icon:"fa-tags"},{key:"brands",label:"Merek Produk",desc:"Kelola daftar brand dagang barang",group:"konten",icon:"fa-copyright"},{key:"colors",label:"Database Produk Bersama",desc:"Pustaka master produk, multi-varian & swatch warna siap impor",group:"konten",icon:"fa-boxes-stacked"},{key:"vouchers",label:"Voucher & Promo",desc:"Buat kode voucher diskon dan promo belanja",group:"konten",icon:"fa-ticket-simple"},{key:"banners",label:"Banner Promosi",desc:"Kelola gambar dan video slider beranda toko",group:"konten",icon:"fa-images"},{key:"rewards",label:"Program Hadiah Poin",desc:"Kelola katalog hadiah penukaran poin member",group:"konten",icon:"fa-gift"},{key:"reviews",label:"Ulasan Pelanggan",desc:"Moderasi ulasan dan testimoni produk pembeli",group:"konten",icon:"fa-star"},{key:"faqs",label:"Tanya Jawab / Q&A",desc:"Kelola jawaban pertanyaan umum pembeli",group:"konten",icon:"fa-circle-question"},{key:"changelog",label:"Log Pembaruan Sistem",desc:"Melihat riwayat update sistem toko",group:"konten",icon:"fa-code-branch"},{key:"reports",label:"Pusat Laporan & Keuangan",desc:"Laporan terpadu penjualan, stok, laba rugi, utang piutang, dan perpajakan",group:"sensitif",icon:"fa-chart-pie"},{key:"view_reports",label:"Laporan Finansial & Laba",desc:"Lihat omset, total HPP terjual, margin & laba bersih toko",group:"sensitif",icon:"fa-chart-line"},{key:"tax",label:"Pajak & Keuangan (PPN)",desc:"Laporan PPN, neraca keuangan, dan laba rugi resmi",group:"sensitif",icon:"fa-file-invoice-dollar"},{key:"banks",label:"Rekening Bank & QRIS",desc:"Ubah nomor rekening toko dan QRIS tujuan pembayaran",group:"sensitif",icon:"fa-building-columns"},{key:"settings",label:"Pengaturan Utama Toko",desc:"Konfigurasi nama toko, GPS maps, tarif ongkir, & sistem",group:"sensitif",icon:"fa-gear"},{key:"cashiers",label:"Kelola Staf & Hak Akses",desc:"Daftarkan staf baru, atur jabatan, & ubah batasan hak akses",group:"sensitif",icon:"fa-users-gear"},{key:"backup_sync",label:"Pusat Data & Backup Cloud",desc:"Cadangkan data toko, ekspor database, & sinkronisasi cloud",group:"sensitif",icon:"fa-cloud-arrow-up"}],Gt={[ce.CASHIER]:{pos:!0,returns:!0,orders:!1,products:!1,suppliers:!1,purchases:!1,piutang:!1,customers:!1,categories:!1,brands:!1,colors:!1,vouchers:!1,banners:!1,rewards:!1,reviews:!1,faqs:!1,changelog:!1,expenses:!1,stock_opname:!1,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[ce.ADMIN]:{pos:!0,returns:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},manager:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!0,view_reports:!0,tax:!0,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[ce.STAFF]:{pos:!1,returns:!1,orders:!1,products:!1,suppliers:!1,purchases:!1,piutang:!1,customers:!1,categories:!1,brands:!1,colors:!1,vouchers:!1,banners:!1,rewards:!1,reviews:!1,faqs:!1,changelog:!1,expenses:!1,stock_opname:!0,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[ce.OWNER]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,reports:!0,view_reports:!0,tax:!0,banks:!0,settings:!0,cashiers:!0,backup_sync:!0}};let Xe=null;const ot=()=>{if(Xe)return Xe;try{const e=sessionStorage.getItem("freshmart_staff_profile");if(e)return Xe=JSON.parse(e),Xe}catch{}return null},Go=e=>{Xe=e;try{e?sessionStorage.setItem("freshmart_staff_profile",JSON.stringify(e)):sessionStorage.removeItem("freshmart_staff_profile")}catch{}},Vo=()=>{Xe=null;try{sessionStorage.removeItem("freshmart_staff_profile")}catch{}},ft=()=>{const e=Dt.currentUser;if(e&&e.uid===Oe)return!0;const t=ot();if(t){const n=String(t.role||"").toLowerCase();if(n==="owner"||t.uid===Oe)return!0;if(n==="cashier"||n==="kasir"||n==="staff")return!1}const s=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");if((window.isAdm||window.__localIsAdm)&&s&&!t)return!0;try{const n=sessionStorage.getItem("pos_cashier_session");if(n){const a=JSON.parse(n),o=String(a.role||"").toLowerCase();if(o==="owner"||a.uid===Oe)return!0;if(o==="cashier"||o==="kasir"||o==="staff")return!1}}catch{}return!1},Jo=()=>{if(ft())return!0;if(ts())return!1;const e=ot();return e?.role===ce.ADMIN||String(e?.role||"").toLowerCase()==="admin"},ts=()=>{if(ft())return!1;const e=ot();if(e){const t=String(e.role||"").toLowerCase();if(t==="owner"||e.uid===Oe)return!1;if(t==="cashier"||t==="kasir")return!0}try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const s=JSON.parse(t),n=String(s.role||"").toLowerCase();if(n==="owner"||s.uid===Oe)return!1;if(n==="cashier"||n==="kasir"||n==="staff")return!0}}catch{}return!1},as=e=>{if(ft())return!0;const t=ot();if(t){if(t.isActive===!1)return!1;const s=String(t.role||"").toLowerCase();if(s===ce.OWNER||s==="owner")return!0;if(s===ce.CASHIER||s==="cashier"||s==="kasir")return e==="pos";if(t.permissions){if(typeof t.permissions[e]<"u")return t.permissions[e]===!0;if(e==="reports"&&(t.permissions.view_reports===!0||t.permissions.tax===!0)||(e==="view_reports"||e==="tax")&&t.permissions.reports===!0)return!0}return(Gt[t.role]||Gt[ce.ADMIN])[e]===!0}try{const s=sessionStorage.getItem("pos_cashier_session");if(s){const n=JSON.parse(s),a=String(n.role||"").toLowerCase();if(a===ce.OWNER||a==="owner"||n.uid===Oe)return!0;if(a===ce.CASHIER||a==="cashier"||a==="kasir")return e==="pos"}}catch{}return window.isAdm||window.__localIsAdm?["banks","settings","cashiers","backup_sync"].includes(e)?Dt.currentUser?.uid===Oe:!0:!1},Vt=()=>{if(typeof window<"u"&&(window.curViewName==="view-pos-cashier"||document.getElementById("view-pos-cashier")?.classList.contains("flex")||document.getElementById("pos-payment-modal")?.classList.contains("flex")||document.getElementById("pos-variant-sheet")?.classList.contains("flex")))try{const n=sessionStorage.getItem("pos_cashier_session");if(n){const a=JSON.parse(n),o=String(a.role||"").toLowerCase();return o===ce.OWNER||o==="owner"||a.uid===Oe}}catch{}if(ft())return!0;const t=ot();if(t){const n=String(t.role||"").toLowerCase();return n===ce.OWNER||n==="owner"||t.uid===Oe?!0:n===ce.CASHIER||n==="cashier"||n==="kasir"?!1:as("view_reports")}const s=Dt.currentUser;return!!(s&&s.uid===Oe||window.isAdm||window.__localIsAdm)},Yo=e=>{switch(e){case ce.OWNER:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-2xs">
                <i class="fa-solid fa-crown text-[9px] text-amber-500"></i>
                <span>Owner</span>
            </span>`;case ce.ADMIN:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shadow-2xs">
                <i class="fa-solid fa-shield-halved text-[9px]"></i>
                <span>Admin Toko</span>
            </span>`;case ce.STAFF:case"staff":return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 shadow-2xs">
                <i class="fa-solid fa-user-gear text-[9px]"></i>
                <span>Staf / Gudang</span>
            </span>`;case ce.CASHIER:default:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                <i class="fa-solid fa-cash-register text-[9px]"></i>
                <span>Kasir POS</span>
            </span>`}};typeof window<"u"&&(window.ROLES=ce,window.STANDARD_POSITIONS=qo,window.PERMISSION_DEFINITIONS=Wo,window.ROLE_PRESETS=Gt,window.getActiveStaff=ot,window.setActiveStaff=Go,window.clearActiveStaff=Vo,window.isOwnerUser=ft,window.isAdminUser=Jo,window.isCashierUser=ts,window.hasPermission=as,window.canViewHpp=Vt,window.getRoleBadgeHtml=Yo);const ss=["212222","222122","222221","121223","121322","131222","122213","122312","132212","221213","221312","231212","112232","122132","122231","113222","123122","123221","223211","221132","221231","213212","223112","312131","311222","321122","321221","312212","322112","322211","212123","212321","232121","111323","131123","131321","112313","132113","132311","211313","231113","231311","112133","112331","132131","113123","113321","133121","313121","211331","231131","213113","213311","213131","311123","311321","331121","312113","312311","332111","314111","221411","431111","111224","111422","121124","121421","141122","141221","112214","112412","122114","122411","142112","142211","241211","221114","413111","241112","134111","111242","121142","121241","114212","124112","124211","411212","421112","421211","212141","214121","412121","111143","111341","131141","114113","114311","411113","411311","113141","114131","311141","411131","211412","211214","211232","2331112"],va=104,ka=105,os=106,oa=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(!t)return null;const s=[va];let n=va,a=1;for(let l=0;l<t.length;l++){const d=t.charCodeAt(l);if(d<32||d>126)continue;const c=d-32;s.push(c),n+=c*a,a++}if(s.length<=1)return null;const o=n%103;s.push(o),s.push(os);let r="";return s.forEach(l=>{const d=ss[l];if(!d)return;let c=!0;for(let u of d){const f=parseInt(u,10);r+=(c?"1":"0").repeat(f),c=!c}}),{text:t,subtype:"B",values:s,modules:r,moduleCount:r.length}},na=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(!t||!/^\d+$/.test(t)||t.length%2!==0||t.length<2)return null;const s=[ka];let n=ka,a=1;for(let l=0;l<t.length;l+=2){const d=t.slice(l,l+2),c=parseInt(d,10);s.push(c),n+=c*a,a++}const o=n%103;s.push(o),s.push(os);let r="";return s.forEach(l=>{const d=ss[l];if(!d)return;let c=!0;for(let u of d){const f=parseInt(u,10);r+=(c?"1":"0").repeat(f),c=!c}}),{text:t,subtype:"C",values:s,modules:r,moduleCount:r.length}},ns=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(!t)return null;if(/^\d+$/.test(t)&&t.length%2===0&&t.length>=2){const s=na(t);if(s)return s}return oa(t)},Jt=(e,t={})=>{const s=t.mode==="B"?oa(e):t.mode==="C"?na(e):ns(e);if(!s)return'<div class="p-2 text-center text-xs text-rose-500 font-bold bg-rose-50 border border-rose-200 rounded-lg">Kode barcode tidak valid</div>';const n=t.height||58,a=t.moduleWidth||1.4,o=t.quietZone!==void 0?t.quietZone:Math.max(16,Math.round(a*12)),l=s.moduleCount*a+o*2;let d="",c=!1,u=0;for(let R=0;R<s.modules.length;R++){const H=s.modules[R]==="1";if(H&&!c)c=!0,u=R;else if(!H&&c){c=!1;const S=(R-u)*a,E=o+u*a;d+=`<rect x="${E.toFixed(2)}" y="0" width="${S.toFixed(2)}" height="${n}" fill="#000000" />`}}if(c){const R=(s.modules.length-u)*a,H=o+u*a;d+=`<rect x="${H.toFixed(2)}" y="0" width="${R.toFixed(2)}" height="${n}" fill="#000000" />`}const f=t.showText!==!1,b=t.customText||s.text,g=t.fontSize||10,T=f?g+4:0,w=n+T;let N="";if(f){const R=n+g+1;N=`<text x="${(l/2).toFixed(2)}" y="${R.toFixed(2)}" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="${g}" font-weight="700" fill="#000000" letter-spacing="1">${b}</text>`}const I=t.className||"w-full h-auto",q=`<rect x="0" y="0" width="${l.toFixed(2)}" height="${w.toFixed(2)}" fill="#ffffff" />`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${l.toFixed(2)} ${w.toFixed(2)}" class="${I}" shape-rendering="crispEdges" style="display:block;margin:0 auto;max-width:100%;height:auto;background-color:#ffffff;">${q}${d}${N}</svg>`};typeof window<"u"&&(window.encodeCode128B=oa,window.encodeCode128C=na,window.encodeCode128Auto=ns,window.generateCode128Svg=Jt);let ye="invoice",rs=!1;const Ut=e=>{rs=e},ae=(e,t=!1)=>{if(!e)return"-";try{const s=e.toDate?e.toDate():new Date(e);if(isNaN(s.getTime()))return"-";const n={day:"2-digit",month:"short",year:"numeric"};return t&&(n.hour="2-digit",n.minute="2-digit"),s.toLocaleDateString("id-ID",n)}catch{return"-"}},yt=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(3).replace(/\.?0+$/,"")},Se=(e="w-16 h-16")=>p.store?.logo&&(p.store.logo.includes("http")||p.store.logo.includes("data:"))?`<img loading="eager" src="${i(p.store.logo)}" class="${e} object-contain shrink-0">`:`<div class="${e} primary-bg flex items-center justify-center rounded-xl text-white shrink-0"><i class="fa-solid fa-store text-2xl"></i></div>`,it=(e="font-mono text-xs")=>{const s=(Array.isArray(p.banks)?p.banks:[]).filter(n=>n&&(n.bankName||n.bank||n.bankAccount||n.number||n.account));if(s.length>0)return s.map(n=>{const a=n.bankName||n.bank||"BANK",o=n.bankAccount||n.number||n.account||"-",r=n.bankOwner||n.name||n.owner||p.store?.name||"Toko Putri";return`
            <div class="${e} flex items-center justify-between gap-2 border-b border-slate-200/60 pb-1.5 last:border-b-0 last:pb-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="font-bold text-slate-900 uppercase">${i(a)}:</span>
                    <span class="font-bold text-blue-700 tracking-wide font-mono select-all">${i(o)}</span>
                </div>
                <div class="text-[10.5px] text-slate-500 font-sans truncate max-w-[140px] text-right" title="${i(r)}">
                    a.n <span class="font-semibold text-slate-700">${i(r)}</span>
                </div>
            </div>`}).join("");if(p.store?.bankName&&(p.store?.bankAccount||p.store?.bankNumber)){const n=p.store.bankName,a=p.store.bankAccount||p.store.bankNumber,o=p.store.bankOwner||p.store.name||"Toko Putri";return`
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
        <p class="mt-0.5">Konfirmasi transfer via WhatsApp Resmi: <b class="font-mono text-emerald-600">${i(p.store?.wa||p.store?.phone||"-")}</b></p>
    </div>`},Pa=({docTitle:e,docNumber:t,docDate:s})=>`
    <div class="flex justify-between items-center border-b-2 border-slate-800 pb-2.5 mb-4 text-xs font-semibold select-none">
        <div class="flex items-center gap-2.5">
            ${Se("w-8 h-8")}
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
    `,Ta=(e,t,s)=>`
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
    `,Pe=({docTitle:e,docNumber:t,docDate:s,kopHtml:n,metaHtml:a,tableHeaderHtml:o,rows:r=[],tableClass:l="w-full text-left border-collapse mb-4 text-xs",summaryHtml:d="",extraBlocksHtml:c="",signaturesHtml:u="",singlePageMax:f=6,itemsFirstPage:b=6,itemsMiddlePage:g=14,itemsLastPage:T=6})=>{const w=r.length;if(w<=f)return[`
        <div class="a4-page" data-page="1" data-total-pages="1">
            <div class="a4-page-body flex-1 flex flex-col">
                ${n}
                ${a||""}
                <table class="${l}">
                    <thead>${o}</thead>
                    <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${r.join("")}</tbody>
                </table>
                ${d||""}
                ${c||""}
                ${u||""}
            </div>
            ${Ta(1,1,e)}
        </div>
        `];const N=[],I=[],q=r.slice(0,b);I.push(q);let R=b;for(;R<w;){const S=w-R;if(S<=T)I.push(r.slice(R)),R=w;else{const E=Math.min(g,S);I.push(r.slice(R,R+E)),R+=E}}const H=I.length;return I.forEach((S,E)=>{const Q=E+1,F=Q===1,$=Q===H;let y="";F?y=`
            ${n}
            ${a||""}
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${S.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${Q+1}...
            </div>
            `:$?y=`
            ${Pa({docTitle:e,docNumber:t,docDate:s})}
            ${S.length>0?`
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${S.join("")}</tbody>
            </table>`:""}
            ${d||""}
            ${c||""}
            ${u||""}
            `:y=`
            ${Pa({docTitle:e,docNumber:t,docDate:s})}
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${S.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${Q+1}...
            </div>
            `,N.push(`
        <div class="a4-page" data-page="${Q}" data-total-pages="${H}">
            <div class="a4-page-body flex-1 flex flex-col">
                ${y}
            </div>
            ${Ta(Q,H,e)}
        </div>
        `)}),N},ra=(e,t=null,s={})=>{if(ye=e,e==="pricelist"){const $=typeof t=="object"&&t!==null?t:s||{},y=$.category||"",m=($.search||"").toLowerCase().trim(),k=$.includeVariants!==!1,A=$.includeWholesale!==!1,L=$.includeStock!==!1,K=$.includeInactive===!0;let h=(p.products||[]).filter(C=>{if(!K&&(C.isActive===!1||C.isActive==="false")||y&&y!=="all"&&(C.category||"").toLowerCase()!==y.toLowerCase())return!1;if(m){const oe=(C.name||"").toLowerCase().includes(m),te=(C.sku||C.barcode||"").toLowerCase().includes(m),me=(C.category||"").toLowerCase().includes(m),xe=(C.brand||"").toLowerCase().includes(m);if(!oe&&!te&&!me&&!xe)return!1}return!0});if(h.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada produk yang sesuai filter untuk dicetak!");return}h.sort((C,oe)=>{const te=(C.category||"Lainnya").toLowerCase(),me=(oe.category||"Lainnya").toLowerCase();return te!==me?te.localeCompare(me):(C.name||"").localeCompare(oe.name||"")}),fe("doc-modal-title","Katalog & Daftar Harga Resmi A4");const O=!y||y==="all"?"Semua Kategori Produk":y;fe("doc-modal-subtitle",`Katalog Resmi Proyek • ${h.length} Produk (${O}) • Kertas A4`);const U=Se("w-16 h-16"),D=ae(Date.now(),!0),z=`PL-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${Math.floor(1e3+Math.random()*9e3)}`,ne=ae(new Date(Date.now()+14*24*60*60*1e3)),j=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-4">
                ${U}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${i(p.store?.slogan||"Pusat Bahan Bangunan & Alat Teknik")}</p>
                    <p class="text-[11px] font-medium text-slate-500 mt-0.5 leading-snug">${i(p.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-[11px] font-medium text-slate-500"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">DAFTAR HARGA</h2>
                <p class="text-[11px] font-extrabold text-[var(--color-primary)] uppercase tracking-wider mt-0.5">Katalog Resmi Proyek</p>
                <p class="text-xs font-bold text-slate-700 mt-1 font-mono">#${i(z)}</p>
                <p class="text-[10.5px] font-semibold text-slate-500 mt-0.5">Tanggal: ${D}</p>
            </div>
        </div>
        `,v=`
        <div class="grid grid-cols-3 gap-3 mb-4 text-xs">
            <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Kategori Filter:</span>
                <span class="font-bold text-slate-800 text-xs truncate block">${i(O)}</span>
            </div>
            <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Total Katalog:</span>
                <span class="font-bold text-slate-800 text-xs font-mono block">${h.length} Item Produk</span>
            </div>
            <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Masa Berlaku Estimasi:</span>
                <span class="font-bold text-emerald-700 text-xs block">s/d ${ne}</span>
            </div>
        </div>
        `,re=`
        <tr class="bg-slate-900 text-white font-bold uppercase tracking-wider text-[10px]">
            <th class="py-2.5 px-2.5 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-2 text-center w-16 border-r border-slate-700">Satuan</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Eceran</th>
            ${A?'<th class="py-2.5 px-2.5 text-left w-36 border-r border-slate-700">Harga Grosir / Proyek</th>':""}
            ${L?'<th class="py-2.5 px-2 rounded-tr-xl text-center w-20">Ketersediaan</th>':""}
        </tr>
        `;let J="";const pe=[];let G=1;h.forEach(C=>{const oe=(C.category||"Lainnya").toUpperCase();(!y||y==="all")&&oe!==J&&(J=oe,pe.push(`
                <tr class="bg-slate-100 border-y border-slate-300">
                    <td colspan="${4+(A?1:0)+(L?1:0)}" class="py-1 px-3 font-black text-slate-800 text-[10px] uppercase tracking-wider">
                        <i class="fa-solid fa-folder-open text-[var(--color-primary)] mr-1"></i> ${i(oe)}
                    </td>
                </tr>
                `));const te=C.unit||"pcs",me=Array.isArray(C.variants)&&C.variants.length>0,xe=Array.isArray(C.multiUnits)&&C.multiUnits.length>0,ge=parseFloat(C.stock)||0;let ke="";k&&me&&(ke=`
                <div class="mt-1 flex flex-wrap gap-1">
                    ${C.variants.map(X=>`
                        <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[8.5px] font-medium bg-slate-50 border border-slate-200 text-slate-700">
                            ${X.colorCode?`<span class="w-2 h-2 rounded-full border border-slate-300 shrink-0" style="background-color: ${i(X.colorCode)};"></span>`:""}
                            <span>${i(X.name)}</span>
                            ${X.price?`<b class="text-slate-900 font-mono">${P(X.price)}</b>`:""}
                        </span>
                    `).join("")}
                </div>
                `);let be="";k&&xe&&(be=`
                <div class="mt-0.5 text-[8.5px] text-slate-500 font-mono">
                    Satuan Lain: ${C.multiUnits.map(X=>`${i(X.name)} (1 ${i(X.name)} = ${X.multiplier} ${i(te)} @ ${P(X.price)})`).join(" • ")}
                </div>
                `);let de="";A&&(Array.isArray(C.wholesale)&&C.wholesale.length>0?de=`
                    <div class="space-y-0.5 text-[9px] font-mono leading-tight">
                        ${C.wholesale.map(X=>`
                            <div class="flex justify-between items-center gap-1">
                                <span class="text-slate-500">≥${X.min} ${i(te)}:</span>
                                <span class="font-bold text-emerald-700">${P(X.price)}</span>
                            </div>
                        `).join("")}
                    </div>
                    `:C.wholesalePrice&&C.wholesalePrice<C.price?de=`
                    <div class="text-[9px] font-mono leading-tight">
                        <span class="text-slate-500">≥${C.wholesaleMin||10} ${i(te)}:</span>
                        <span class="font-bold text-emerald-700">${P(C.wholesalePrice)}</span>
                    </div>
                    `:de='<span class="text-slate-400 italic text-[9px]">Sesuai Kuantitas</span>');let Me="";L&&(Me=ge>0?'<span class="inline-block px-1.5 py-0.5 rounded text-[8.5px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">Ready</span>':'<span class="inline-block px-1.5 py-0.5 rounded text-[8.5px] font-bold bg-amber-50 text-amber-700 border border-amber-200">Inden</span>'),pe.push(`
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="py-2 px-2.5 text-center font-mono text-slate-500 font-bold border-r border-slate-200 text-[10px]">${G}</td>
                <td class="py-2 px-3 border-r border-slate-200">
                    <div class="flex items-center gap-1.5 flex-wrap">
                        <span class="font-bold text-slate-900 text-xs uppercase">${i(C.name)}</span>
                        ${C.brand?`<span class="px-1.5 py-0.2 rounded text-[8px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">${i(C.brand)}</span>`:""}
                    </div>
                    ${C.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(C.sku)}</span>`:""}
                    ${ke}
                    ${be}
                </td>
                <td class="py-2 px-2 text-center text-slate-700 font-semibold border-r border-slate-200 uppercase text-[11px]">${i(te)}</td>
                <td class="py-2 px-3 text-right font-mono font-bold text-slate-900 border-r border-slate-200 text-xs">${P(C.price)}</td>
                ${A?`<td class="py-2 px-2.5 border-r border-slate-200">${de}</td>`:""}
                ${L?`<td class="py-2 px-2 text-center">${Me}</td>`:""}
            </tr>
            `),G++});const Ae=`
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
                    <p class="text-[11px] font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</p>
                    <p class="text-[10px] text-slate-600">${i(p.store?.address||"-")}</p>
                    <p class="text-[10.5px] font-mono font-bold text-emerald-700 mt-1"><i class="fa-brands fa-whatsapp"></i> ${i(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
        </div>
        `,Z=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-4 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Dibuat &amp; Diverifikasi:</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 uppercase">Bagian Penjualan &amp; Logistik</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Mengetahui:</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Pimpinan Toko")}</span>
            </div>
        </div>
        `,V=Pe({docTitle:"Katalog & Daftar Harga Resmi",docNumber:`#${z}`,docDate:D,kopHtml:j,metaHtml:v,tableHeaderHtml:re,rows:pe,extraBlocksHtml:Ae,signaturesHtml:Z,singlePageMax:9,itemsFirstPage:8,itemsMiddlePage:14,itemsLastPage:7});Te(V);return}if(e==="po"){const $=p.purchases||[],y=$.find(j=>String(j.id)===String(t))||(window.currentActivePoId?$.find(j=>String(j.id)===String(window.currentActivePoId)):$[0]);if(!y){typeof window.showToast=="function"&&window.showToast("Data PO tidak ditemukan!");return}fe("doc-modal-title","Preview Purchase Order (PO)");const m=Se("w-16 h-16"),k=ae(y.date||y.createdAt),A=y.poNumber||y.id,L=y.paymentType==="tempo"?`Tempo ${y.tempoDays||14} Hari (Jatuh Tempo: ${ae(y.tempoDueDate)})`:y.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai",K=`
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
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(A)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${k}</p>
                <p class="text-xs font-bold mt-1 text-[var(--color-primary)]">Status: ${y.status==="ordered"?"DIPESAN":y.status==="received"?"DITERIMA":"SELESAI"}</p>
            </div>
        </div>
        `,h=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Kepada Rekanan / Supplier:</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${i(y.supplierName||"Supplier")}</p>
                ${y.supplierPhone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(y.supplierPhone)}</p>`:""}
                ${y.supplierAddress?`<p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${i(y.supplierAddress)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan & Pembayaran:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Termin Pembayaran:</span> <b class="text-slate-900">${L}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tujuan Pengiriman:</span> <b class="text-slate-900">${i(p.store?.name||"Gudang Utama Toko")}</b></p>
                ${y.notes?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${i(y.notes)}</p>`:""}
            </div>
        </div>
        `,O=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Modal (HPP)</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `,U=(y.items||[]).map((j,v)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${v+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(j.name)}
                ${j.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(j.variantName)}</span>`:""}
                ${j.sku?`<span class="text-slate-400 text-[9.5px] font-mono block mt-0.5">SKU: ${i(j.sku)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${yt(j.qty)} <span class="text-[10px] font-normal text-slate-500">${i(j.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${P(j.unitPrice)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${P(Math.round((parseFloat(j.qty)||0)*(parseFloat(j.unitPrice)||0)))}</td>
        </tr>
        `),D=`
        <div class="flex justify-end mb-6 mt-2">
            <div class="w-80 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk:</span><span class="font-bold text-slate-800">${P(y.subtotal)}</span></div>
                ${y.discount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Potongan Diskon:</span><span>-${P(y.discount)}</span></div>`:""}
                ${y.shippingFee>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim:</span><span>+${P(y.shippingFee)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL ORDER (PO):</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${P(y.total)}</span>
                </div>
            </div>
        </div>
        `,z=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-6 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Dipesan Oleh (Purchasing):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Diterima &amp; Disetujui Oleh:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(y.supplierName||"Rekanan / Supplier")}</span>
            </div>
        </div>
        `,ne=Pe({docTitle:"Purchase Order",docNumber:`#${A}`,docDate:k,kopHtml:K,metaHtml:h,tableHeaderHtml:O,rows:U,summaryHtml:D,signaturesHtml:z,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});Te(ne);return}if(e==="stock_opname"){const $=p.stockOpnameHistory||[],y=$.find(v=>String(v.id)===String(t)||String(v.soNumber)===String(t))||$[0];if(!y){typeof window.showToast=="function"&&window.showToast("Data Berita Acara Stock Opname tidak ditemukan!");return}fe("doc-modal-title","Preview Berita Acara Stock Opname");const m=Se("w-16 h-16"),k=ae(y.date,!0),A=y.soNumber||y.id,L=typeof Vt=="function"?Vt():!1,K=y.items||[],h=`
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
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${i(A)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${k}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Auditor: <b class="text-slate-900">${i(y.auditorName||"Staf Auditor")}</b></p>
            </div>
        </div>
        `,O=`
        <div class="grid grid-cols-4 gap-3 mb-5">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Total Diperiksa</span>
                <span class="text-lg font-black text-slate-800 font-mono">${y.totalItemsAudited||0}</span>
                <span class="text-[10px] text-slate-500 block">Item Produk</span>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Item Selisih</span>
                <span class="text-lg font-black ${y.totalWithDiff>0?"text-amber-600":"text-emerald-600"} font-mono">${y.totalWithDiff||0}</span>
                <span class="text-[10px] text-slate-500 block">Disesuaikan</span>
            </div>
            <div class="bg-rose-50 p-3 rounded-xl border border-rose-200 text-center">
                <span class="text-[9px] font-black uppercase text-rose-500 block tracking-wider">Total Kurang (Loss)</span>
                <span class="text-lg font-black text-rose-600 font-mono">−${y.totalLossUnits||0}</span>
                <span class="text-[10px] text-rose-500 block">${L?"−"+P(y.totalLossRp||0):"Pcs"}</span>
            </div>
            <div class="bg-amber-50 p-3 rounded-xl border border-amber-200 text-center">
                <span class="text-[9px] font-black uppercase text-amber-600 block tracking-wider">Total Lebih (Surplus)</span>
                <span class="text-lg font-black text-amber-600 font-mono">+${y.totalSurplusUnits||0}</span>
                <span class="text-[10px] text-amber-600 block">${L?"+"+P(y.totalSurplusRp||0):"Pcs"}</span>
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
            ${L?'<th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Dampak HPP</th>':'<th class="py-2.5 px-3 rounded-tr-xl text-right w-16">Satuan</th>'}
        </tr>
        `,D=K.length===0?['<tr><td colspan="7" class="py-8 text-center text-slate-500 italic">Semua stok fisik barang dalam kondisi berimbang (100% Sesuai / Selisih 0).</td></tr>']:K.map((v,re)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${re+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${i(v.productName)}
                ${v.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${i(v.variantName)}</span>`:""}
                ${v.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(v.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center font-mono text-slate-600">${v.systemStock} ${i(v.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${v.physicalStock} ${i(v.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-bold font-mono ${v.diff<0?"text-rose-600":"text-amber-600"}">
                ${v.diff<0?`−${Math.abs(v.diff)}`:`+${v.diff}`}
            </td>
            <td class="py-2 px-3 text-[10.5px]">
                <span class="font-bold text-slate-800">${i(v.reason==="salah_hitung"?"Koreksi Kasir":v.reason==="rusak"?"Barang Rusak":v.reason==="hilang"?"Barang Hilang":v.reason==="kadaluarsa"?"Expired":v.reason==="bonus"?"Bonus Supplier":v.reason)}</span>
                ${v.notes?`<span class="text-slate-500 block italic">"${i(v.notes)}"</span>`:""}
            </td>
            ${L?`
                <td class="py-2 px-3 text-right font-mono font-bold ${v.diff<0?"text-rose-600":"text-amber-600"}">
                    ${v.diff<0?"−":"+"}${P(Math.abs(v.diffValueHpp||0))}
                </td>`:`
                <td class="py-2 px-3 text-right text-slate-500">${i(v.unit||"pcs")}</td>
            `}
        </tr>
        `),z=y.notes?`
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs mb-5 text-slate-700">
            <b class="text-slate-900">Catatan Auditor:</b> ${i(y.notes)}
        </div>`:"",ne=`
        <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Pemeriksa / Auditor:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(y.auditorName||"Petugas Auditor")}</span>
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
        `,j=Pe({docTitle:"Berita Acara Stock Opname",docNumber:`#${A}`,docDate:k,kopHtml:h,metaHtml:O,tableHeaderHtml:U,rows:D,extraBlocksHtml:z,signaturesHtml:ne,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});Te(j);return}if(e==="stock_opname_worksheet"){fe("doc-modal-title","Preview Lembar Kerja Hitung Fisik (Worksheet)");const $=Se("w-14 h-14"),y=ae(new Date),m=p.products||[],k=[];m.forEach(D=>{!D||D.id==null||(D.variants&&D.variants.length>0?D.variants.forEach(z=>{k.push({name:D.name,variantName:z.name,sku:z.sku||D.sku||"",category:D.category||"Umum",unit:D.unit||"pcs",systemStock:parseFloat(z.stock)||0})}):k.push({name:D.name,variantName:"",sku:D.sku||"",category:D.category||"Umum",unit:D.unit||"pcs",systemStock:parseFloat(D.stock)||0}))});const A=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3">
                ${$}
                <div>
                    <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${i(p.store?.slogan||"Pusat Alat Teknik & Bangunan")}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${i(p.store?.address||"")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-wider text-slate-900 uppercase">LEMBAR KERJA AUDIT</h2>
                <h3 class="font-bold text-xs tracking-widest text-amber-600 uppercase">STOCK OPNAME FISIK RAK</h3>
                <p class="text-xs font-medium text-slate-500 mt-1">Tanggal Cetak: <b>${y}</b></p>
                <p class="text-xs font-medium text-slate-500">Total Item: <b>${k.length} Baris</b></p>
            </div>
        </div>
        `,L=`
        <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[10px] text-slate-600 mb-4 flex items-center justify-between">
            <span><b>Petunjuk:</b> Hitung fisik barang di rak/gudang secara teliti. Tulis angka aktual pada kolom <b>HASIL FISIK</b> dan beri catatan bila ada barang rusak/cacat.</span>
        </div>
        `,K=`
        <tr class="border-b-2 border-slate-800 text-[9.5px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">Cek</th>
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">No</th>
            <th class="py-2 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi Varian</th>
            <th class="py-2 px-2 border-r border-slate-700 w-28">Kategori / Rak</th>
            <th class="py-2 px-2 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2 px-2 text-center w-28 border-r border-slate-700 bg-amber-900/60">HASIL FISIK</th>
            <th class="py-2 px-3 text-left w-36">Kondisi &amp; Catatan</th>
        </tr>
        `,h=k.map((D,z)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200"><span class="inline-block w-3.5 h-3.5 border border-slate-400 rounded-sm"></span></td>
            <td class="py-2 px-2 text-center font-mono text-slate-400 border-r border-slate-200">${z+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 border-r border-slate-200 uppercase">
                ${i(D.name)}
                ${D.variantName?`<span class="bg-slate-100 text-slate-700 px-1 rounded text-[8.5px] border border-slate-300 ml-1 font-semibold">${i(D.variantName)}</span>`:""}
                ${D.sku?`<span class="text-slate-400 font-mono text-[8.5px] block">SKU: ${i(D.sku)}</span>`:""}
            </td>
            <td class="py-2 px-2 text-[10px] text-slate-600 border-r border-slate-200">
                ${i(D.category)}
            </td>
            <td class="py-2 px-2 text-center font-mono font-bold text-slate-600 border-r border-slate-200">
                ${D.systemStock} ${i(D.unit)}
            </td>
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200 bg-amber-50/40">
                <span class="inline-block w-20 h-5 border-b-2 border-slate-400"></span>
            </td>
            <td class="py-2 px-3 text-[10px] text-slate-400">
                <span class="inline-block w-full h-5 border-b border-slate-200"></span>
            </td>
        </tr>
        `),U=Pe({docTitle:"Lembar Kerja Audit Rak",docNumber:`TOTAL ${k.length} ITEM`,docDate:y,kopHtml:A,metaHtml:L,tableHeaderHtml:K,rows:h,tableClass:"w-full text-left border-collapse mb-4 text-[11px]",signaturesHtml:`
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
        `,singlePageMax:16,itemsFirstPage:15,itemsMiddlePage:20,itemsLastPage:14});Te(U);return}if(e==="tempo_invoice"){const $=t||window.cVOrd;let m=(window.cachedPiutangOrders||[]).find(W=>String(W.orderId)===String($))||(window.gOrds||[]).find(W=>String(W.orderId)===String($));if(!m&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String($)&&(m=window.lastPrintedOrder),!m){typeof window.showToast=="function"&&window.showToast("Data nota tagihan piutang tidak ditemukan!");return}fe("doc-modal-title","Preview Nota Tagihan Piutang (Tempo)");const k=Se("w-16 h-16"),A=ae(m.dateString||m.timestamp),L=parseFloat(m.payment?.tempoBalance)||0,K=m.payment?.tempoPenaltyRate!==void 0?parseFloat(m.payment.tempoPenaltyRate):1,h=m.payment?.tempoPenaltyStopped===!0;let O=0;const U=m.payment?.tempoDueDate||0;let D=0,z=0,ne=!1,j=!1;const v=Date.now();U>0&&(v>U?(D=Math.floor((v-U)/(24*60*60*1e3)),D>0&&(ne=!0)):(z=Math.ceil((U-v)/(24*60*60*1e3)),z<=3&&(j=!0))),h?O=parseFloat(m.payment?.tempoFixedPenalty)||0:ne&&(O=K/100*L*D);const re=L+O,J=m.payment?.installments||[],pe=J.reduce((W,Ce)=>W+(parseFloat(Ce.amount)||0),0),G=m.payment?.grandTotal||L+pe,Ae=m.payment?.paymentStatus==="lunas"||L<=0,Z=!!(m.payment?.isPaylater||m.isPaylater||m.payment?.subMethod==="paylater");let V=Z?"PAYLATER BERJALAN":"TEMPO BERJALAN",C="text-blue-600 bg-blue-50 border-blue-200";Ae?(V="LUNAS SEPENUHNYA",C="text-emerald-600 bg-emerald-50 border-emerald-300"):ne?(V=`TERLAMBAT ${D} HARI`,C="text-rose-600 bg-rose-50 border-rose-300"):j&&(V=`JATUH TEMPO H-${z<=0?"0":z}`,C="text-amber-600 bg-amber-50 border-amber-300");const oe=it("font-mono text-xs"),te=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${k}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(p.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(p.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">${Z?"NOTA PUTRI PAYLATER":"NOTA TAGIHAN PIUTANG"}</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(m.orderId)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tgl Transaksi: ${A}</p>
                <div class="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${C}">
                    ${i(V)}
                </div>
            </div>
        </div>
        `,me=`
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
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tanggal Jatuh Tempo:</span> <b class="text-slate-900 font-mono">${ae(U)}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Sistem Pembayaran:</span> <b class="${Z?"text-emerald-700 font-bold":"text-slate-900"} uppercase">${Z?"Putri PayLater Member VIP":"Tempo / Bertahap"}</b></p>
                ${Z?`<p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tenor Cicilan:</span> <b class="text-emerald-800 font-bold uppercase">${m.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":m.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)"}</b></p>`:""}
                ${ne?`<p class="text-xs font-bold text-rose-600 mb-1"><span class="text-slate-500">Status:</span> Lewat ${D} Hari (Denda ${K}%/hari)</p>`:""}
                <p class="text-xs font-semibold text-slate-700"><span class="text-slate-500">Kasir / Admin:</span> <b class="text-slate-900 uppercase">${i(m.cashierName||"Kasir Toko")}</b></p>
            </div>
        </div>
        `,xe=`
        <tr class="border-b-2 border-slate-800 text-[10.5px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Satuan</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `,ge=(m.items||[]).map((W,Ce)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${Ce+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(W.name)}
                ${W.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(W.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${yt(W.qty)} <span class="text-[10px] font-normal text-slate-500">${i(W.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${P(W.effectivePrice||W.price)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${P(W.subtotal||Math.round((parseFloat(W.qty)||0)*(parseFloat(W.effectivePrice||W.price)||0)))}</td>
        </tr>
        `);let ke="",be=0,de="-",Me=1;if(Z&&Array.isArray(m.payment?.paylaterSchedule)&&m.payment.paylaterSchedule.length>0){let W=0,Ce=!1;const Ye=m.payment.paylaterSchedule.map((ie,Ft)=>{const ia=ie.installmentIndex||ie.installmentNo||ie.installmentNumber||ie.month||Ft+1,la=parseFloat(ie.pokok||ie.principal)||0,da=parseFloat((ie.adminFee||0)+(ie.serviceFee||0))||0,Kt=parseFloat(ie.total||ie.totalMonthly||ie.totalInstallment)||la+da;W+=Kt;const ca=W,wt=ie.dueDate||0,pa=ie.dueDateFormatted||ie.dueDateStr||(wt?ae(wt):"-");let xt="";if(pe>=ca)xt='<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-300">LUNAS</span>';else if(Ce)xt='<span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200">BULAN DEPAN</span>';else{Ce=!0,Me=ia;const us=Math.max(0,ca-pe);be=Math.min(us,Kt),de=pa,xt=wt&&v>wt?'<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 border border-rose-300">JATUH TEMPO</span>':'<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">WAJIB BULAN INI</span>'}return`
                <tr class="hover:bg-slate-50">
                    <td class="py-2 px-3 text-center text-slate-800 font-bold">Bulan Ke-${ia}</td>
                    <td class="py-2 px-3 font-mono font-medium text-slate-700 text-center">${pa}</td>
                    <td class="py-2 px-3 text-right text-slate-600 font-mono">${P(la)}</td>
                    <td class="py-2 px-3 text-right text-slate-500 font-mono">${P(da)}</td>
                    <td class="py-2 px-3 text-right font-black font-mono text-slate-900">${P(Kt)}</td>
                    <td class="py-2 px-3 text-center">${xt}</td>
                </tr>`}).join("");ke=`
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
                        ${Ye}
                    </tbody>
                </table>
            </div>`}const X=`
        ${ke}
        ${J.length>0?`
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
                    ${J.map((W,Ce)=>`
                    <tr class="hover:bg-slate-50">
                        <td class="py-1.5 px-3 text-center text-slate-500">${Ce+1}</td>
                        <td class="py-1.5 px-3 text-slate-700">${ae(W.date)}</td>
                        <td class="py-1.5 px-3 uppercase text-slate-600 font-bold">${i(W.method||"Tunai")}</td>
                        <td class="py-1.5 px-3 text-right font-bold text-emerald-600">+ ${P(W.amount)}</td>
                        <td class="py-1.5 px-3 text-slate-500 text-[11px] font-sans">${i(W.note||"-")}</td>
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
                <div class="space-y-1.5 pt-0.5">${oe}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi bukti transfer: <b>${i(p.store?.wa||p.store?.phone||"-")}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Harap mencantumkan Nomor Nota (#${i(m.orderId)}) pada berita transfer.</p>
                </div>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Awal:</span><span class="font-bold text-slate-800">${P(G)}</span></div>
                ${Z?`<div class="flex justify-between text-emerald-600 font-bold"><span>Limit PayLater Terpakai:</span><span>${P(m.payment?.paylaterUsed||G-(m.payment?.tempoDp||m.payment?.dp||0))}</span></div>`:""}
                ${Z&&m.payment?.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater:</span><span class="font-bold">+${P(m.payment.paylaterAdminFee)}</span></div>`:""}
                ${Z&&m.payment?.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan:</span><span class="font-bold">+${P(m.payment.paylaterServiceFee)}</span></div>`:""}
                ${(parseFloat(m.payment?.tempoDp||m.payment?.dp)||0)>0?`<div class="flex justify-between text-slate-600"><span>Uang Muka (DP Dibayar):</span><span class="font-bold">${P(m.payment?.tempoDp||m.payment?.dp||0)}</span></div>`:""}
                ${pe>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Masuk:</span><span>-${P(pe)}</span></div>`:""}
                
                ${Z&&be>0&&be<L?`
                <!-- KOTAK HIGHLIGHT ANGSURAN BULAN INI -->
                <div class="p-2.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 space-y-0.5">
                    <div class="flex justify-between items-center text-[9.5px] font-black uppercase tracking-wider text-amber-800">
                        <span>Angsuran Bulan Ini (Termin Ke-${Me}):</span>
                        <span class="font-mono text-[9px] bg-amber-200/80 px-1.5 py-0.5 rounded">Jatuh Tempo: ${de}</span>
                    </div>
                    <div class="flex justify-between items-center text-sm font-black font-mono pt-0.5">
                        <span>Wajib Dibayar Sekarang:</span>
                        <span class="text-amber-900 text-base font-black">${P(be)}</span>
                    </div>
                </div>
                <div class="flex justify-between text-slate-500 text-[11px]">
                    <span>Sisa Termin Bulan Berikutnya:</span>
                    <span class="font-mono font-bold">${P(Math.max(0,L-be))}</span>
                </div>
                `:""}

                <div class="flex justify-between text-slate-700 font-bold"><span>${Z?"Total Sisa Pokok (Semua Tenor):":"Sisa Pokok Piutang:"}</span><span>${P(L)}</span></div>
                ${O>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Denda Keterlambatan:</span><span>+${P(O)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>${Z?"TOTAL PELUNASAN PENUH:":"SISA WAJIB BAYAR:"}</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${P(Ae?0:re)}</span>
                </div>
            </div>
        </div>
        `,He=`
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
        `,bt=Pe({docTitle:Z?"Nota Putri PayLater":"Nota Tagihan Piutang",docNumber:`#${m.orderId}`,docDate:A,kopHtml:te,metaHtml:me,tableHeaderHtml:xe,rows:ge,extraBlocksHtml:X,summaryHtml:ze,signaturesHtml:He,singlePageMax:5,itemsFirstPage:5,itemsMiddlePage:12,itemsLastPage:4});Te(bt);return}if(e==="tempo_customer_ledger"){const $=String(t||"").trim(),m=(window.cachedPiutangOrders||[]).filter(V=>{const C=String(V.customer?.phone||V.customer?.wa||"").replace(/\D/g,""),oe=String(V.customer?.name||"").toLowerCase().trim(),te=$.replace(/\D/g,"");return!!(te.length>=8&&C.includes(te)||oe&&$.toLowerCase().includes(oe))});if(m.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada nota piutang aktif untuk pelanggan ini.");return}const k=m[0].customer||{},A=k.name||"Pelanggan",L=k.wa||k.phone||"-";fe("doc-modal-title",`Kartu Piutang: ${A}`);const K=Se("w-16 h-16"),h=ae(Date.now());let O=0,U=0,D=0,z=0,ne=0;const j=m.map((V,C)=>{const oe=parseFloat(V.payment?.tempoBalance)||0,te=V.payment?.tempoPenaltyRate!==void 0?parseFloat(V.payment.tempoPenaltyRate):1,me=V.payment?.tempoPenaltyStopped===!0;let xe=0;const ge=V.payment?.tempoDueDate||0;let ke=0,be=!1;const de=Date.now();ge>0&&de>ge&&(ke=Math.floor((de-ge)/(24*60*60*1e3)),ke>0&&(be=!0)),me?xe=parseFloat(V.payment?.tempoFixedPenalty)||0:be&&(xe=te/100*oe*ke);const X=(V.payment?.installments||[]).reduce((bt,W)=>bt+(parseFloat(W.amount)||0),0),ze=V.payment?.grandTotal||oe+X,He=oe+xe;return O+=ze,U+=X,D+=oe,z+=xe,ne+=He,`
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="py-2.5 px-3 text-center font-mono text-slate-500">${C+1}</td>
                <td class="py-2.5 px-3 font-mono font-bold text-slate-800">#${i(V.orderId)}</td>
                <td class="py-2.5 px-3 font-medium text-slate-600">${ae(V.dateString||V.timestamp)}</td>
                <td class="py-2.5 px-3 font-mono ${be?"text-rose-600 font-bold":"text-slate-700"}">${ae(ge)} ${be?`<span class="text-[9.5px] text-rose-500">(+${ke}h)</span>`:""}</td>
                <td class="py-2.5 px-3 text-right font-mono text-slate-600">${P(ze)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-600 font-bold">${P(X)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-rose-600">${xe>0?P(xe):"-"}</td>
                <td class="py-2.5 px-3 text-right font-mono font-black text-slate-900">${P(He)}</td>
            </tr>
            `}),v=it("font-mono text-xs"),re=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${K}
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
                <p class="text-xs font-semibold text-slate-500 mt-0.5">Dicetak: ${h}</p>
                <span class="inline-block mt-1.5 px-3 py-0.5 bg-amber-50 text-amber-700 border border-amber-300 rounded-full text-[11px] font-black uppercase tracking-wider">
                    ${m.length} NOTA BELUM LUNAS
                </span>
            </div>
        </div>
        `,J=`
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Informasi Debitur / Pelanggan:</h3>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="text-[11px] text-slate-500">Nama Pelanggan / Badan:</p>
                    <p class="font-bold text-base text-slate-900 uppercase">${i(A)}</p>
                </div>
                <div>
                    <p class="text-[11px] text-slate-500">Nomor WhatsApp / HP:</p>
                    <p class="font-mono font-bold text-base text-emerald-600">+${i(L)}</p>
                </div>
            </div>
        </div>
        `,pe=`
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
        `,G=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Transfer Resmi Pelunasan:
                </h4>
                <div class="space-y-1 pt-0.5">${v}</div>
                <p class="text-[9.5px] text-slate-500 pt-1.5 border-t border-slate-200">Kartu piutang ini mencatat seluruh tagihan aktif per tanggal cetak.</p>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Keseluruhan:</span><span class="font-bold text-slate-800">${P(O)}</span></div>
                <div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Diterima (-):</span><span>-${P(U)}</span></div>
                <div class="flex justify-between text-slate-700 font-bold"><span>Total Sisa Pokok Piutang:</span><span>${P(D)}</span></div>
                ${z>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Total Denda (+):</span><span>+${P(z)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL AKUMULASI PIUTANG:</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${P(ne)}</span>
                </div>
            </div>
        </div>
        `,Ae=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Penerima Tagihan (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(A)}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Pemilik Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,Z=Pe({docTitle:"Kartu Piutang Pelanggan",docNumber:"STATEMENT OF ACCOUNT",docDate:h,kopHtml:re,metaHtml:J,tableHeaderHtml:pe,rows:j,summaryHtml:G,signaturesHtml:Ae,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});Te(Z);return}if(e==="tempo_recap"){const $=window.cachedPiutangOrders&&window.cachedPiutangOrders.length>0?window.cachedPiutangOrders:(window.gOrds||[]).filter(G=>G.payment?.method==="tempo"&&(parseFloat(G.payment?.tempoBalance)>0||G.payment?.status!=="paid"&&G.payment?.status!=="completed"));if(!$||$.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada nota piutang aktif untuk direkap.");return}fe("doc-modal-title","Rekap Buku Piutang Toko A4");const y=Se("w-16 h-16"),m=ae(Date.now(),!0),k=`AR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${Math.floor(1e3+Math.random()*9e3)}`;let A=0,L=0,K=0,h=0,O=0;const U=new Set,D=$.map((G,Ae)=>{const Z=G.customer||{},V=Z.name||"Pelanggan",C=Z.wa||Z.phone||"-",oe=`${V}_${C}`;U.add(oe);const te=ae(G.dateString||G.createdAt),me=G.payment?.tempoDueDate||0,xe=ae(me),ge=parseFloat(G.payment?.tempoBalance)||0,ke=G.payment?.tempoPenaltyRate!==void 0?parseFloat(G.payment.tempoPenaltyRate):1,be=G.payment?.tempoPenaltyStopped===!0;let de=0,Me=0,X=!1,ze=!1;const He=Date.now();if(me>0)if(He>me)Me=Math.floor((He-me)/(24*60*60*1e3)),Me>0&&(X=!0);else{const ie=Math.ceil((me-He)/864e5);ie<=3&&ie>=0&&(ze=!0)}be?de=parseFloat(G.payment?.tempoFixedPenalty)||0:X&&(de=ke/100*ge*Me);const W=(G.payment?.installments||[]).reduce((ie,Ft)=>ie+(parseFloat(Ft.amount)||0),0);G.payment?.grandTotal||ge+W;const Ce=ge+de;A+=ge,L+=de,K+=Ce;let Ye="";return X?(h++,Ye=`<span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-rose-100 text-rose-700 border border-rose-200">Telat ${Me} Hari</span>`):ze?Ye='<span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200">H-3 Tempo</span>':(O++,Ye='<span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">Lancar</span>'),`
            <tr class="border-b border-slate-200 text-[10px] hover:bg-slate-50 transition-colors">
                <td class="py-2 px-2 text-center text-slate-500 font-bold border-r border-slate-200">${Ae+1}</td>
                <td class="py-2 px-2.5 border-r border-slate-200">
                    <p class="font-bold text-slate-900 leading-tight">${i(V)}</p>
                    <p class="text-[9px] text-slate-500 font-mono"><i class="fa-brands fa-whatsapp text-emerald-600"></i> ${i(C)}</p>
                </td>
                <td class="py-2 px-2 border-r border-slate-200 font-mono">
                    <p class="font-bold text-slate-800">#${i(G.orderId||G.id)}</p>
                    <p class="text-[9px] text-slate-500">${te}</p>
                </td>
                <td class="py-2 px-2 text-center border-r border-slate-200 font-mono">
                    <span class="font-bold ${X?"text-rose-600":"text-slate-700"}">${xe}</span>
                </td>
                <td class="py-2 px-2 text-right border-r border-slate-200 font-mono font-bold text-slate-800">${P(ge)}</td>
                <td class="py-2 px-2 text-right border-r border-slate-200 font-mono ${de>0?"text-rose-600 font-bold":"text-slate-400"}">
                    ${de>0?`+${P(de)}`:"Rp 0"}
                </td>
                <td class="py-2 px-2 text-right border-r border-slate-200 font-mono font-black text-slate-900 bg-slate-50/80">${P(Ce)}</td>
                <td class="py-2 px-2 text-center">${Ye}</td>
            </tr>`}),z=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3.5">
                ${y}
                <div>
                    <h1 class="font-black text-xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-[11px] font-bold text-slate-500 uppercase tracking-widest">${i(p.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-[10px] text-slate-500 max-w-sm leading-snug mt-0.5">${i(p.store?.address||"Alamat Toko")}</p>
                    <p class="text-[10px] text-slate-500"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-widest text-slate-900 uppercase">REKAP BUKU PIUTANG</h2>
                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">ACCOUNTS RECEIVABLE MASTER LEDGER</p>
                <p class="text-xs font-bold text-slate-600 font-mono mt-1">#${i(k)}</p>
                <p class="text-[10px] text-slate-500 mt-0.5">Waktu Cetak: ${m}</p>
            </div>
        </div>
        `,ne=it("font-mono text-[10px]"),j=`
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
                        <b class="text-rose-700 block font-mono text-xs">${h} Nota</b>
                    </div>
                    <div>
                        <span class="text-emerald-600 font-medium">Nota Lancar:</span>
                        <b class="text-emerald-700 block font-mono text-xs">${O} Nota</b>
                    </div>
                </div>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                <h3 class="text-[9px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-1 flex items-center gap-1">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Penerimaan Pelunasan Toko:
                </h3>
                <div class="space-y-0.5 pt-0.5">${ne}</div>
            </div>
        </div>
        `,v=`
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
        `,re=`
        <div class="grid grid-cols-2 gap-4 mb-4 items-start">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[10px] space-y-1">
                <p class="font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-1">Ketentuan Rekap Piutang Toko:</p>
                <p class="text-slate-600 leading-snug">1. Dokumen ini sah sebagai bukti buku pembukuan piutang berjalan Toko Putri.</p>
                <p class="text-slate-600 leading-snug">2. Seluruh nominal sisa pokok dan denda mengikat hingga tanggal cetak dokumen.</p>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1.5">
                <div class="flex justify-between text-slate-600 text-[11px]">
                    <span>Total Sisa Pokok Piutang:</span>
                    <span class="font-bold text-slate-800 font-mono">${P(A)}</span>
                </div>
                ${L>0?`
                <div class="flex justify-between text-rose-600 text-[11px] font-bold">
                    <span>Total Akumulasi Denda (+):</span>
                    <span class="font-mono">+${P(L)}</span>
                </div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-1.5 mt-1 font-bold text-slate-900">
                    <span class="text-xs uppercase tracking-wider">TOTAL TAGIHAN BERJALAN:</span>
                    <span class="text-[var(--color-primary)] font-black text-sm font-mono">${P(K)}</span>
                </div>
            </div>
        </div>
        `,J=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-4 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Petugas Penagihan / Kasir:</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 text-[11px] uppercase">( ........................................ )</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-12 uppercase tracking-widest text-[9px]">Pemilik Toko (Owner):</span>
                <div class="w-40 border-b-2 border-slate-800 mb-1"></div>
                <span class="font-bold text-slate-900 text-[11px] uppercase">${i(p.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,pe=Pe({docTitle:"Rekap Buku Piutang Toko",docNumber:k,docDate:m,kopHtml:z,metaHtml:j,tableHeaderHtml:v,rows:D,summaryHtml:re,signaturesHtml:J,singlePageMax:7,itemsFirstPage:7,itemsMiddlePage:15,itemsLastPage:7});Te(pe);return}if(e==="sales_return"){const $=typeof t=="object"&&t!==null?t.returnId:t,y=p.salesReturns||[],m=y.find(v=>String(v.id)===String($))||y[0];if(!m){typeof window.showToast=="function"&&window.showToast("Data retur penjualan tidak ditemukan!");return}fe("doc-modal-title","Preview Nota Retur Penjualan (A4)");const k=Se("w-16 h-16"),A=ae(m.createdAt,!0),L=m.refundMethod==="cash"?"Pengembalian Tunai (Cash Refund)":m.refundMethod==="credit"?"Saldo Kredit Toko (Store Credit)":m.refundMethod==="exchange"?"Tukar Barang (Exchange)":"Lainnya",K=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${k}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(p.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(p.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">NOTA RETUR</h2>
                <h3 class="font-bold text-sm tracking-wider text-indigo-600 uppercase">PENJUALAN KONSUMEN</h3>
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${i(m.id)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${A}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Rujukan Nota: <b class="font-mono text-slate-900">#${i(m.orderId||"-")}</b></p>
            </div>
        </div>
        `,h=`
        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Identitas Pelanggan / Konsumen</span>
                <p class="font-bold text-slate-900 text-sm">${i(m.customerName||"Pelanggan Umum")}</p>
                ${m.customerPhone?`<p class="text-slate-600 font-mono text-[11px]"><i class="fa-brands fa-whatsapp text-emerald-600"></i> ${i(m.customerPhone)}</p>`:""}
                <p class="text-slate-500 text-[11px]">Saluran Transaksi: <span class="font-semibold text-slate-700">${m.source==="pos"?"Kasir POS":"Website Online"}</span></p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Penyelesaian Finansial</span>
                <p class="font-bold text-slate-900 text-sm">${i(L)}</p>
                <p class="text-slate-500 text-[11px]">Petugas Pelaksana: <span class="font-semibold text-slate-700">${i(m.cashierName||"Kasir Toko")}</span></p>
                <p class="text-slate-500 text-[11px]">Status Retur: <span class="font-bold text-emerald-600 uppercase">SELESAI (COMPLETED)</span></p>
            </div>
        </div>
        `,O=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-28 border-r border-slate-700">Kondisi &amp; Alokasi</th>
            <th class="py-2.5 px-3 text-center w-16 border-r border-slate-700">Qty Retur</th>
            <th class="py-2.5 px-3 text-right w-24 border-r border-slate-700">Harga Jual</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Subtotal Retur</th>
            <th class="py-2.5 px-3 rounded-tr-xl w-36">Alasan Pengembalian</th>
        </tr>
        `,U=m.items||[],D=U.map((v,re)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${re+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${i(v.name)}
                ${v.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${i(v.variantName)}</span>`:""}
                ${v.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(v.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center text-[10.5px]">
                ${v.condition==="good"?'<span class="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 block text-[9.5px]">Baik (Restok Rak)</span>':'<span class="font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 block text-[9.5px]">Rusak (Karantina)</span>'}
            </td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${yt(v.qty)}</td>
            <td class="py-2 px-3 text-right font-mono text-slate-600">${P(v.soldPrice||0)}</td>
            <td class="py-2 px-3 text-right font-mono font-bold text-slate-900">${P(v.subtotalRefund||v.qty*v.soldPrice||0)}</td>
            <td class="py-2 px-3 text-[10.5px] text-slate-600">
                ${i(v.reason||"-")}
            </td>
        </tr>
        `),z=`
        <div class="grid grid-cols-2 gap-4 mb-4 items-start">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[10px] space-y-1">
                <p class="font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-1">Ketentuan Retur Resmi Toko:</p>
                <p class="text-slate-600 leading-snug">1. Barang retur telah diverifikasi fisik dan dicocokkan dengan struk pembelian asli.</p>
                <p class="text-slate-600 leading-snug">2. Kompensasi diberikan sesuai metode yang disepakati dan tidak dapat dibatalkan.</p>
                ${m.notes?`<p class="mt-2 text-slate-700 font-semibold border-t border-slate-200 pt-1">Catatan: "${i(m.notes)}"</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between items-center text-slate-600">
                    <span>Total Item Diretur:</span>
                    <span class="font-mono font-bold text-slate-800">${U.reduce((v,re)=>v+(parseFloat(re.qty)||0),0)} Unit</span>
                </div>
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 font-bold text-slate-900">
                    <span class="uppercase tracking-wider">TOTAL NILAI RETUR:</span>
                    <span class="text-rose-600 font-black text-base font-mono">${P(m.totalRefund||0)}</span>
                </div>
            </div>
        </div>
        `,ne=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Konsumen / Pembeli:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(m.customerName||"Konsumen")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Kasir / Petugas Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(m.cashierName||p.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,j=Pe({docTitle:"Nota Retur Penjualan",docNumber:`#${m.id}`,docDate:A,kopHtml:K,metaHtml:h,tableHeaderHtml:O,rows:D,summaryHtml:z,signaturesHtml:ne,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});Te(j);return}if(e==="vendor_return"){const $=typeof t=="object"&&t!==null?t.returnId:t,y=p.vendorReturns||[],m=y.find(v=>String(v.id)===String($))||y[0];if(!m){typeof window.showToast=="function"&&window.showToast("Data retur supplier tidak ditemukan!");return}fe("doc-modal-title","Preview Surat Pengembalian Barang ke Supplier (A4)");const k=Se("w-16 h-16"),A=ae(m.createdAt,!0),L=m.settlementMethod==="ap_deduction"?"Potong Hutang PO (AP Deduction)":m.settlementMethod==="cash_refund"?"Pengembalian Dana Kas / Transfer":"Lainnya",K=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${k}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(p.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(p.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-2xl tracking-widest text-slate-900 uppercase">SURAT PENGEMBALIAN</h2>
                <h3 class="font-bold text-sm tracking-wider text-amber-600 uppercase">BARANG KE PEMASOK (VENDOR RETURN)</h3>
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${i(m.id)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${A}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Rujukan PO: <b class="font-mono text-slate-900">#${i(m.poId||"Non-PO")}</b></p>
            </div>
        </div>
        `,h=`
        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Ditujukan Kepada Rekanan Supplier</span>
                <p class="font-bold text-slate-900 text-sm uppercase">${i(m.supplierName||"Pemasok Toko")}</p>
                <p class="text-slate-500 text-[11px]">Rujukan Kulakan PO: <span class="font-mono font-bold text-slate-800">${i(m.poId||"-")}</span></p>
                <p class="text-slate-500 text-[11px]">Status Dokumen: <span class="font-bold text-amber-600 uppercase">TERBIT / DISERAHKAN</span></p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Penyelesaian Finansial Supplier</span>
                <p class="font-bold text-slate-900 text-sm">${i(L)}</p>
                <p class="text-slate-500 text-[11px]">Estimasi Nilai Klaim HPP: <span class="font-mono font-bold text-amber-600">${P(m.totalClaim||0)}</span></p>
                ${m.notes?`<p class="text-slate-600 text-[10.5px] italic mt-1">Catatan: "${i(m.notes)}"</p>`:""}
            </div>
        </div>
        `,O=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Asal Lokasi</th>
            <th class="py-2.5 px-3 text-center w-16 border-r border-slate-700">Qty Retur</th>
            <th class="py-2.5 px-3 text-right w-24 border-r border-slate-700">Harga Beli/HPP</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Total Klaim</th>
            <th class="py-2.5 px-3 rounded-tr-xl w-36">Alasan Klaim Cacat</th>
        </tr>
        `,U=m.items||[],D=U.map((v,re)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${re+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${i(v.name)}
                ${v.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${i(v.variantName)}</span>`:""}
                ${v.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(v.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center text-[10px] font-semibold text-slate-600">
                ${v.fromLocation==="warehouse"?"Gudang":v.fromLocation==="quarantine"?"Karantina":"Rak Toko"}
            </td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${yt(v.qty)}</td>
            <td class="py-2 px-3 text-right font-mono text-slate-600">${P(v.buyPrice||0)}</td>
            <td class="py-2 px-3 text-right font-mono font-bold text-amber-600">${P(v.subtotalClaim||v.qty*v.buyPrice||0)}</td>
            <td class="py-2 px-3 text-[10.5px] text-slate-600">
                ${i(v.reason||"Barang Cacat Pabrik")}
            </td>
        </tr>
        `),z=`
        <div class="grid grid-cols-2 gap-4 mb-4 items-start">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[10px] space-y-1">
                <p class="font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-1">Ketentuan Pengembalian Barang:</p>
                <p class="text-slate-600 leading-snug">1. Barang fisik diserahkan kepada pihak ekspedisi / perwakilan resmi supplier.</p>
                <p class="text-slate-600 leading-snug">2. Nilai klaim memotong saldo hutang PO atau diganti dana/barang baru.</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between items-center text-slate-600">
                    <span>Total Kuantitas Barang:</span>
                    <span class="font-mono font-bold text-slate-800">${U.reduce((v,re)=>v+(parseFloat(re.qty)||0),0)} Unit</span>
                </div>
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 font-bold text-slate-900">
                    <span class="uppercase tracking-wider">TOTAL NILAI KLAIM HPP:</span>
                    <span class="text-amber-600 font-black text-base font-mono">${P(m.totalClaim||0)}</span>
                </div>
            </div>
        </div>
        `,ne=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Pengirim (Purchasing Toko):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Penerima (Supir / Supplier):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(m.supplierName||"Pemasok / Distributor")}</span>
            </div>
        </div>
        `,j=Pe({docTitle:"Surat Pengembalian Barang Supplier",docNumber:`#${m.id}`,docDate:A,kopHtml:K,metaHtml:h,tableHeaderHtml:O,rows:D,summaryHtml:z,signaturesHtml:ne,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});Te(j);return}const n=t||window.cVOrd,a=(window.gOrds||[]).find($=>String($.orderId)===String(n))||(window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(n)?window.lastPrintedOrder:null);if(!a){typeof window.showToast=="function"&&window.showToast("Data pesanan tidak ditemukan!");return}fe("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const o=a.dateString?new Date(a.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"",r=Se("w-16 h-16"),l=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${r}
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
    `,d=`
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
    `,c=Array.isArray(a.items)?a.items:Array.isArray(a.cart)?a.cart:[];if(e==="invoice"){const $=`
        <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
            <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Produk &amp; Varian</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Sat.</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total</th>
        </tr>
        `,y=c.map((h,O)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${O+1}</td>
            <td class="py-2.5 px-3 font-bold flex items-center gap-1.5">
                ${i(h.name)} 
                ${h.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${i(h.variantName)}</span>`:""}
                ${h.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${i(h.colorCode)};"></span>`:""}
                ${h.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${i(h.poTime)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${parseFloat(h.qty)} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(h.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${P(h.effectivePrice)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${P(h.effectivePrice*parseFloat(h.qty))}</td>
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
            </div>`),a.payment?.method==="tempo")if(!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater")){const O=a.payment?.paylaterMonths||1,U=a.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":a.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)",D=Array.isArray(a.payment?.paylaterSchedule)&&a.payment.paylaterSchedule.length>0;let z="";if(D){Math.max(0,parseFloat(a.payment?.tempoBalance)||0);const j=(a.payment?.installments||[]).reduce((J,pe)=>J+(parseFloat(pe.amount)||0),0);let v=0,re=!1;z=`
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
                                ${a.payment.paylaterSchedule.map((J,pe)=>{const G=J.installmentIndex||J.installmentNo||J.installmentNumber||J.month||pe+1,Ae=parseFloat(J.pokok||J.principal)||0,Z=parseFloat((J.adminFee||0)+(J.serviceFee||0))||0,V=parseFloat(J.total||J.totalMonthly||J.totalInstallment)||Ae+Z;v+=V;const C=J.dueDate||0,oe=J.dueDateFormatted||J.dueDateStr||(C?ae(C):"-");let te="";return j>=v?te='<span class="px-1.5 py-0.2 rounded text-[8px] font-bold uppercase bg-emerald-100 text-emerald-700 border border-emerald-300">LUNAS</span>':re?te='<span class="px-1.5 py-0.2 rounded text-[8px] font-medium uppercase bg-slate-100 text-slate-500">MENDATANG</span>':(re=!0,te='<span class="px-1.5 py-0.2 rounded text-[8px] font-black uppercase bg-amber-100 text-amber-800 border border-amber-300">BULAN INI</span>'),`
                                    <tr>
                                        <td class="py-1 px-2 font-bold text-slate-800 text-center font-sans">Bulan Ke-${G}</td>
                                        <td class="py-1 px-2 text-slate-600 text-center">${oe}</td>
                                        <td class="py-1 px-2 text-right text-slate-600">${P(Ae)}</td>
                                        <td class="py-1 px-2 text-right text-slate-500">${P(Z)}</td>
                                        <td class="py-1 px-2 font-black text-right text-emerald-800">${P(V)}</td>
                                        <td class="py-1 px-2 text-center font-sans">${te}</td>
                                    </tr>`}).join("")}
                            </tbody>
                        </table>
                    </div>`}m+=`
                <div class="mb-4 border border-emerald-200 bg-emerald-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-emerald-800 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-handshake text-emerald-600 mr-1"></i> Putri PayLater (${U}):</h4>
                    <p class="text-[9.5px] text-emerald-700 font-semibold leading-relaxed">
                        Sistem pembayaran cicilan resmi Toko Putri tanpa biaya tersembunyi. Jatuh Tempo Pertama: ${a.payment.tempoDueDate?ae(a.payment.tempoDueDate):"-"}.
                        ${a.payment.paylaterMonthlyInstallment?` Angsuran: <b>${P(a.payment.paylaterMonthlyInstallment)} / bulan</b> (${O}x).`:""}
                    </p>
                    ${z}
                </div>`}else m+=`
                <div class="mb-4 border border-pink-200 bg-pink-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-pink-700 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo:</h4>
                    <p class="text-[9.5px] text-pink-600 font-semibold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${a.payment.tempoDueDate?ae(a.payment.tempoDueDate):"-"}). Keterlambatan dikenakan denda sesuai regulasi toko.</p>
                </div>`;const A=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran Toko Putri:
                </h4>
                <div class="space-y-1.5 pt-0.5">${it("font-mono text-xs")}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi pembayaran via WhatsApp: <b>${i(p.store?.wa||p.store?.phone||"-")}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Terima kasih atas transaksi Anda di ${i(p.store?.name||"Toko Putri")}.</p>
                </div>
            </div>

            ${(()=>{const h=pt(a);return`
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                    <div class="flex justify-between text-slate-600"><span>Subtotal Produk</span><span class="font-mono">${P(h.subtotal)}</span></div>
                    ${h.shipping>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim</span><span class="font-mono">${P(h.shipping)}</span></div>`:""}
                    ${h.shippingDiscount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Ongkir</span><span class="font-mono">-${P(h.shippingDiscount)}</span></div>`:""}
                    ${h.productDiscount>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Diskon Produk</span><span class="font-mono">-${P(h.productDiscount)}</span></div>`:""}
                    ${h.pointDiscount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Poin Reward</span><span class="font-mono">-${P(h.pointDiscount)}</span></div>`:""}
                    ${h.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater</span><span class="font-mono">+${P(h.paylaterAdminFee)}</span></div>`:""}
                    ${h.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan</span><span class="font-mono">+${P(h.paylaterServiceFee)}</span></div>`:""}
                    ${h.hasPpn?`
                    <div class="flex justify-between text-slate-600"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-mono">${P(h.dppAmount)}</span></div>
                    <div class="flex justify-between text-amber-600 font-bold"><span>${h.ppnLabel}</span><span class="font-mono">${h.ppnAmount>0?(h.isInclusive?"":"+")+P(h.ppnAmount):"Rp 0"}</span></div>
                    `:""}
                    
                    <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-2 shadow-xs">
                        <span class="font-bold text-xs uppercase tracking-widest">Grand Total</span>
                        <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${P(h.grandTotal)}</span>
                    </div>
                `})()}
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
        `,L=`
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
        `,K=Pe({docTitle:a.payment?.method==="tempo"?"Proforma Invoice":"Faktur Invoice",docNumber:`#${a.orderId}`,docDate:o,kopHtml:l,metaHtml:d,tableHeaderHtml:$,rows:y,extraBlocksHtml:m,summaryHtml:A,signaturesHtml:L,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:12,itemsLastPage:5});Te(K);return}const u=a.delivery||{},f=u.doNumber||"DO-"+String(new Date().getFullYear()).slice(-2)+String(new Date().getMonth()+1).padStart(2,"0")+"-"+String(a.orderId).replace(/[^a-zA-Z0-9]/g,"").slice(-5).toUpperCase(),b=typeof Jt=="function"?Jt(f,{height:34,showText:!0,fontSize:9,className:"w-44 h-auto"}):"",g=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
        <div class="flex items-center gap-4">
            ${r}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${i(p.store?.slogan||"Bahan Bangunan & Alat Teknik")}</p>
                <p class="text-[11px] font-medium text-slate-500 mt-0.5 leading-snug">${i(p.store?.address||"Alamat fisik toko")}</p>
                <p class="text-[11px] font-medium text-slate-500"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(p.store?.wa||"-")}</p>
                ${a.payment?.taxNpwp||p.store?.taxNpwp?`<p class="text-[10px] font-semibold text-slate-600 mt-0.5"><i class="fa-solid fa-id-card text-blue-500"></i> NPWP: <span class="font-mono">${i(a.payment?.taxNpwp||p.store.taxNpwp)}</span></p>`:""}
            </div>
        </div>
        <div class="text-right flex flex-col items-end">
            <h2 class="font-black text-2xl tracking-widest text-amber-600 uppercase">SURAT JALAN</h2>
            <p class="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider mt-0.5">Delivery Order (DO)</p>
            <div class="mt-1.5 p-1 rounded-lg border border-slate-200/90 bg-white">
                ${b}
            </div>
            <p class="text-[10.5px] font-semibold text-slate-500 mt-1">Tanggal: ${o}</p>
        </div>
    </div>
    `,T=u.recipientName||a.isDropPoint&&a.dropPoint?.name||a.customer?.name||"-",w=u.recipientPhone||a.isDropPoint&&a.dropPoint?.wa||a.customer?.wa||"-",N=u.destinationAddress||a.isDropPoint&&a.dropPoint?.address||a.customer?.address||"-",I=u.unloadNotes||a.customer?.note||"",q=`
    <div class="grid grid-cols-2 gap-4 mb-4 text-xs">
        <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div>
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 border-b border-slate-200 pb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-map-location-dot text-rose-500"></i> Tujuan Pengiriman Proyek / Drop Point
                </h3>
                <p class="font-bold text-sm text-slate-900 uppercase">${i(T)} ${w!=="-"?`<span class="text-xs font-mono font-medium text-slate-500">(+${i(w)})</span>`:""}</p>
                <p class="text-xs text-slate-700 leading-relaxed mt-1">${i(N)}</p>
            </div>
            ${I?`
            <div class="mt-2 pt-1.5 border-t border-dashed border-amber-300 text-[10.5px] text-amber-800 font-semibold bg-amber-50/80 p-2 rounded-lg">
                <i class="fa-solid fa-note-sticky text-amber-600 mr-1"></i> Catatan Bongkar: ${i(I)}
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
                <span class="font-bold text-slate-800">${i(u.fleetName||"Mobil Pick-up L300")}</span>
            </div>
            <div class="flex justify-between items-center text-xs">
                <span class="text-slate-500 font-medium">Plat Nomor:</span>
                <span class="font-mono font-bold text-slate-800 uppercase">${i(u.plateNumber||"-")}</span>
            </div>
            <div class="flex justify-between items-center text-xs">
                <span class="text-slate-500 font-medium">Sopir / Helper:</span>
                <span class="font-bold text-slate-800">${i(u.driverName||"Petugas Toko")}${u.helperName?` / ${i(u.helperName)}`:""}</span>
            </div>
        </div>
    </div>
    `,R=`
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Nama &amp; Spesifikasi Barang</th>
        <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Satuan</th>
        <th class="py-2.5 px-2.5 text-center w-20 border-r border-slate-700">Cek Gudang</th>
        <th class="py-2.5 px-2.5 rounded-tr-xl text-center w-20">Cek Proyek</th>
    </tr>
    `,H=c.map(($,y)=>`
    <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3 text-center font-mono text-slate-500">${y+1}</td>
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
    `),E=u.signature&&u.signature.signatureDataUrl?`
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-1 uppercase tracking-widest text-[9px]">Penerima / Mandor:</span>
            <div class="h-14 flex items-center justify-center">
                <img src="${u.signature.signatureDataUrl}" alt="TTD Mandor" class="h-12 w-auto object-contain">
            </div>
            <div class="w-32 border-b-2 border-slate-800 mb-1"></div>
            <span class="font-bold text-slate-900">${i(u.signature.signerName||T)}</span>
            <span class="text-[8px] font-mono text-emerald-600 uppercase font-bold">Terverifikasi Digital</span>
        </div>
    `:`
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Penerima / Mandor:</span>
            <div class="w-32 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">${i(T)}</span>
        </div>
    `,Q=`
    <div class="grid grid-cols-4 gap-4 text-center text-xs mt-auto pt-4 border-t border-slate-200">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Petugas Gudang:</span>
            <div class="w-32 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">Nama &amp; TTD</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Sopir / Pengantar:</span>
            <div class="w-32 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">${i(u.driverName||"Nama & TTD")}</span>
        </div>
        ${E}
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Hormat Kami:</span>
            <div class="w-32 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,F=Pe({docTitle:"Surat Jalan Pengiriman",docNumber:`#${f}`,docDate:o,kopHtml:g,metaHtml:q,tableHeaderHtml:R,rows:H,signaturesHtml:Q,singlePageMax:7,itemsFirstPage:7,itemsMiddlePage:14,itemsLastPage:6});Te(F)},is=()=>{const e=window.cart||[];if(!e||e.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}ye="sph";const t="SPH-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.floor(1e3+Math.random()*9e3),s=ae(new Date),n=ae(new Date(Date.now()+14*24*60*60*1e3));fe("doc-modal-title","Surat Penawaran Harga (SPH)");const a=Se("w-16 h-16"),o=typeof window.getEffP=="function"?window.getEffP:w=>w.price||0;let r=0;const l=e.map((w,N)=>{const I=parseFloat(w.qty)||1,q=o(w),R=I*q;return r+=R,`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${N+1}</td>
            <td class="py-2.5 px-3 font-bold">
                ${i(w.name)}
                ${w.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${i(w.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${I} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(w.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${P(q)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${P(R)}</td>
        </tr>
        `}),d=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${a}
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
                Berlaku s/d: ${n}
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
    `,u=`
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
    `,g=`
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
    `,T=Pe({docTitle:"Surat Penawaran Harga",docNumber:`#${t}`,docDate:s,kopHtml:d,metaHtml:c,tableHeaderHtml:u,rows:l,summaryHtml:f,extraBlocksHtml:b,signaturesHtml:g,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:5});Te(T)},Te=e=>{const t=x("doc-paper-content");if(!t)return;t.innerHTML=e.join("");const s=e.length,n=x("doc-page-count-badge");n&&(n.textContent=`${s} Halaman A4`),Qo(s)},Qo=(e=1)=>{const t=x("doc-preview-modal"),s=x("doc-preview-modal-box");t&&(t.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),Rt(t,s),t.classList.remove("hidden"),at(),setTimeout(()=>{at()},60),setTimeout(()=>{at()},200))},at=()=>{const e=x("doc-paper-scroll-area"),t=x("doc-paper-content"),s=x("doc-paper-wrapper");if(!e||!t||!s)return;const n=794,a=window.innerWidth<640?12:32,o=e.clientWidth-a,r=Math.min(1,Math.max(.2,o/n));t.style.transform=`translateX(-50%) scale(${r})`;const l=t.offsetHeight||t.scrollHeight;s.style.height=l*r+48+"px"};window.addEventListener("resize",()=>{const e=x("doc-preview-modal");e&&!e.classList.contains("hidden")&&at()});const ls=(e=!1)=>{const t=x("doc-preview-modal"),s=x("doc-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{Ve(t,s)}):Ve(t,s))},ds=()=>{const e=x("doc-paper-content"),t=e?e.innerHTML:"";if(!t){typeof window.showToast=="function"&&window.showToast("Tidak ada dokumen yang dicetak!");return}if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){let o=x("a4-print-section");o||(o=document.createElement("div"),o.id="a4-print-section",document.body.appendChild(o)),o.innerHTML=t,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500);return}const s=window.open("","_blank"),a=`<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>${i(ye==="pricelist"?"Katalog & Daftar Harga Resmi":ye==="invoice"?"Faktur Invoice":ye==="po"?"Purchase Order":ye==="sph"?"Penawaran Harga":ye==="stock_opname"?"Berita Acara Stock Opname":ye==="tempo_recap"?"Rekap Buku Piutang Toko":ye==="tempo_customer_ledger"?"Kartu Piutang Pelanggan":ye==="sales_return"?"Nota Retur Penjualan":ye==="vendor_return"?"Surat Pengembalian Barang":"Dokumen Resmi A4")} - Cetak A4 Standar Presisi</title>
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
</html>`;if(!s){let o=document.getElementById("a4-print-fallback-iframe");o||(o=document.createElement("iframe"),o.id="a4-print-fallback-iframe",o.style.position="fixed",o.style.right="0",o.style.bottom="0",o.style.width="0",o.style.height="0",o.style.border="0",o.style.opacity="0",document.body.appendChild(o));const r=o.contentWindow.document;r.open(),r.write(a),r.close(),setTimeout(()=>{try{o.contentWindow.focus(),o.contentWindow.print()}catch(l){console.warn("[DocPrint] Fallback iframe print error:",l)}},650);return}s.document.open(),s.document.write(a),s.document.close()},cs=async e=>{if(!rs){Ut(!0),vt(e==="image"?"Membuat Gambar HD...":"Menyusun Dokumen PDF A4...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{jt(),Ut(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const t=x("doc-paper-content");if(!t)throw new Error("Elemen dokumen tidak ditemukan.");let s=Array.from(t.querySelectorAll(".a4-page"));s.length===0&&(s=[t]);const n=window.cVOrd||Date.now().toString(36).toUpperCase(),a=`${ye.toUpperCase()}_${n}`,o=async r=>{const l=document.createElement("div");l.style.position="fixed",l.style.top="-9999px",l.style.left="-9999px",l.style.width="794px",l.style.height="1123px",l.style.backgroundColor="#ffffff",l.style.overflow="hidden",l.style.zIndex="-9999";const d=r.cloneNode(!0);d.style.margin="0 auto",d.style.boxShadow="none",d.style.border="none",d.style.borderRadius="0",d.style.transform="none",d.style.width="794px",d.style.height="1123px",d.style.minHeight="1123px",d.style.maxHeight="1123px",d.style.overflow="hidden",l.appendChild(d),document.body.appendChild(l);const c=Array.from(d.querySelectorAll("img"));await Promise.all(c.map(f=>f.complete?Promise.resolve():new Promise(b=>{f.addEventListener("load",b,{once:!0}),f.addEventListener("error",b,{once:!0})}))),await new Promise(f=>setTimeout(f,200));const u=await html2canvas(l,{scale:2,useCORS:!0,backgroundColor:"#ffffff",width:794,height:1123,windowWidth:794,windowHeight:1123});return document.body.removeChild(l),u};if(e==="image")if(s.length===1){const l=(await o(s[0])).toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(l,`${a}.png`,"image/png");else{const d=document.createElement("a");d.download=`${a}.png`,d.href=l,d.click()}typeof window.showToast=="function"&&window.showToast("Gambar A4 Presisi Berhasil Disimpan!")}else{for(let r=0;r<s.length;r++){vt(`Menyimpan Gambar Halaman ${r+1} dari ${s.length}...`);const d=(await o(s[r])).toDataURL("image/png",1),c=`${a}_Hal_${r+1}.png`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(d,c,"image/png");else{const u=document.createElement("a");u.download=c,u.href=d,u.click()}await new Promise(u=>setTimeout(u,250))}typeof window.showToast=="function"&&window.showToast(`Berhasil menyimpan ${s.length} gambar halaman A4!`)}else{const r=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,l=new r({orientation:"portrait",unit:"mm",format:"a4"});for(let d=0;d<s.length;d++){vt(`Menyusun PDF Hal ${d+1} dari ${s.length}...`);const u=(await o(s[d])).toDataURL("image/jpeg",.95);d>0&&l.addPage("a4","portrait"),l.addImage(u,"JPEG",0,0,210,297,void 0,"FAST")}window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"?window.AndroidNativeApp.saveOrShareFile(l.output("datauristring"),`${a}.pdf`,"application/pdf"):l.save(`${a}.pdf`),typeof window.showToast=="function"&&window.showToast(`File PDF Standar A4 (${s.length} Halaman) Berhasil Disimpan!`)}}catch(t){console.error("Export Error: ",t),typeof window.showToast=="function"&&window.showToast(t&&t.message?`Gagal: ${t.message}`:"Gagal memproses dokumen.")}finally{jt(),Ut(!1)}}},ps=()=>ra("tempo_recap");window.openDocPreview=ra;window.openCartSPHPreview=is;window.openTempoRecapDocPreview=ps;window.fitDocPreview=at;window.closeDocPreviewModal=ls;window.printDocA4=ds;window.exportDocFile=cs;const Qn=Object.freeze(Object.defineProperty({__proto__:null,closeDocPreviewModal:ls,get currentDocType(){return ye},exportDocFile:cs,fitDocPreview:at,getStoreBankListHtml:it,openCartSPHPreview:is,openDocPreview:ra,openTempoRecapDocPreview:ps,printDocA4:ds},Symbol.toStringTag,{value:"Module"}));export{qn as $,Dt as A,bo as B,as as C,ot as D,ft as E,Vo as F,co as G,Vn as H,Gs as I,Oe as J,Go as K,Ks as L,Bn as M,Us as N,Hn as O,js as P,Fn as Q,ce as R,En as S,yn as T,qs as U,Nn as V,qe as W,Jn as X,ma as Y,pt as Z,Sa as _,p as a,Vs as a$,Ln as a0,fe as a1,gs as a2,fo as a3,lo as a4,Ea as a5,go as a6,_s as a7,Ws as a8,In as a9,gn as aA,fn as aB,Ms as aC,$s as aD,Ts as aE,As as aF,mn as aG,bn as aH,wn as aI,xn as aJ,Ia as aK,jn as aL,Un as aM,ws as aN,uo as aO,Y as aP,Vt as aQ,zs as aR,rn as aS,ln as aT,De as aU,Co as aV,Wn as aW,Gn as aX,tn as aY,Kn as aZ,Je as a_,ro as aa,zn as ab,Eo as ac,Oo as ad,So as ae,le as af,Dn as ag,vn as ah,Nt as ai,on as aj,mo as ak,Aa as al,_n as am,Os as an,Is as ao,xo as ap,Fs as aq,Mn as ar,Tn as as,Pn as at,se as au,Ps as av,Ss as aw,Cs as ax,Ls as ay,un as az,Oa as b,sn as b0,nn as b1,ks as b2,hn as b3,Ds as b4,Rs as b5,Ns as b6,Es as b7,Bs as b8,Hs as b9,Cn as ba,Js as bb,an as bc,pn as bd,kn as be,Sn as bf,$n as bg,An as bh,On as bi,Gt as bj,qo as bk,Wo as bl,Yo as bm,Yn as bn,Qn as bo,$a as c,hs as d,x as e,P as f,po as g,Na as h,i,Rn as j,Re as k,vt as l,wo as m,jt as n,Rt as o,ys as p,Ne as q,Ot as r,Ra as s,ee as t,Ge as u,Ve as v,dn as w,cn as x,vs as y,Jt as z};
