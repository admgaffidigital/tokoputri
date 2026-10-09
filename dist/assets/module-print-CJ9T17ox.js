const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js","assets/module-pos-B5yxhcYf.js","assets/module-member-BCRdJEpX.js","assets/module-faq-DikKv8aZ.js"])))=>i.map(i=>d[i]);
import{f as Xe}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const ds="modulepreload",cs=function(e){return"/"+e},la={},va=function(t,a,s){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");n=Promise.allSettled(a.map(c=>{if(c=cs(c),c in la)return;la[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":ds,d||(m.as="script"),m.crossOrigin="",m.href=c,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((b,g)=>{m.addEventListener("load",b),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return n.then(r=>{for(const l of r||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},ps={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const us=typeof window<"u"&&window.FIREBASE_CONFIG?window.FIREBASE_CONFIG:ps;Xe.apps.length||Xe.initializeApp(us);const $e=Xe.firestore(),$t=Xe.auth();typeof window<"u"&&(window.firebase=Xe,window.db=$e,window.auth=$t);try{$e.settings({ignoreUndefinedProperties:!0,experimentalAutoDetectLongPolling:!0,merge:!0})}catch{}typeof window<"u"&&(window.addEventListener("online",()=>{try{$e.enableNetwork().catch(()=>{})}catch{}}),window.addEventListener("offline",()=>{try{$e.disableNetwork().catch(()=>{})}catch{}}));let ms=null;const Go=()=>{va(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{ms=Xe.analytics()}catch{}}).catch(()=>{})},Ae="K2ijSERTT2dg27yYGTEgn6XHSnW2",fs={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"pill",brandStyle:"logo",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showHeroSlide:!0,heroMascotImg:"/putri_mascot_anim.gif",heroBadgeText:"Siap Melayani",heroWelcomeTag:"SELAMAT DATANG",heroTitle:"",heroSubtitle:"",showRewardCatalog:!0,showScrollTopButton:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,paylater:{enabled:!0,minOrder:2e4,maxOrder:1e7,noticeText:"Cicilan transparan tanpa biaya tersembunyi. Tagihan jatuh tempo setiap bulan.",tenors:{"30d":{enabled:!0,label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:"flat",adminFeeValue:0,serviceFeeType:"flat",serviceFeeValue:0},"2m":{enabled:!0,label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:"flat",adminFeeValue:1500,serviceFeeType:"percent",serviceFeeValue:1.5},"3m":{enabled:!0,label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:"flat",adminFeeValue:2500,serviceFeeType:"percent",serviceFeeValue:2.5}}},terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},subscription:{status:"active",plan:"pro_managed",expiresAt:null,allowGraceDays:7,storeCode:"PUTRI",clientName:"Pemilik Toko",developerContact:"6281234567890",developerName:"Developer / Technical Partner"},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],productOrder:[],suppliers:[],purchases:[],expenses:[],stockOpnameHistory:[],salesReturns:[],vendorReturns:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let p=JSON.parse(JSON.stringify(fs)),ka=[],Pa=[],Y=[];try{const e=localStorage.getItem("freshmart_cart");e&&(ka=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(Pa=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(Y=JSON.parse(e)||[])}catch{}let bs={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},ws=null,xs=null,gs=null,hs="Semua Produk",ys="Semua Jenis",vs="Semua Merek",ks="",Ps="newest",Ts="grid",Ss=1,$s=12,As="orders",Ms="",Cs=null,Ls=null,Ds=0,Ns=[],Rs=[],Os=[],Is=1,Ee=[],Es=null,Bs=null,Hs=null,qe=[],Fs=[],_e=null,Ks=null,Us=!1,js="all",_s="today",zs=null,qs=null;const Wo=e=>{zs=e},Vo=e=>{p=e},Jo=e=>{ka=e},Yo=e=>{Pa=e},Qo=e=>{Y=e},Zo=e=>{bs=e},Xo=e=>{ws=e},en=e=>{xs=e},tn=e=>{gs=e},an=e=>{hs=e},sn=e=>{ys=e},on=e=>{vs=e},nn=e=>{ks=e},rn=e=>{Ps=e},ln=e=>{Ts=e},dn=e=>{Ss=e},cn=e=>{$s=e},pn=e=>{As=e},un=e=>{Ms=e},mn=e=>{Cs=e},fn=e=>{Ls=e},bn=e=>{Ds=e},wn=e=>{Ns=e},xn=e=>{Rs=e},gn=e=>{Os=e},hn=e=>{Is=e},yn=e=>{Ee=e},vn=e=>{qe=e},kn=e=>{Fs=e},da=e=>{_e=e},Pn=e=>{Ks=e},Tn=e=>{Us=e},Sn=e=>{qs=e},$n=e=>{js=e},An=e=>{_s=e},Mn=e=>{Es=e},Cn=e=>{Bs=e},Ln=e=>{Hs=e};let Ta=!1;if(typeof window<"u"){const e=()=>{Ta=!0,window.__hasUserInteracted=!0};["pointerdown","touchstart","mousedown","keydown"].forEach(t=>{window.addEventListener(t,e,{capture:!0,once:!0})}),window.__hasUserInteracted=!1}const Gt=()=>typeof navigator<"u"&&navigator.userActivation?navigator.userActivation.hasBeenActive:!!(Ta||typeof window<"u"&&window.__hasUserInteracted);typeof window<"u"&&(window.checkUserGesture=Gt);const We=(e="light")=>{try{const t=window.Capacitor?.Plugins?.Haptics;if(t){e==="light"||e==="selection"?t.impact({style:"LIGHT"}).catch(()=>{}):e==="medium"?t.impact({style:"MEDIUM"}).catch(()=>{}):e==="heavy"?t.impact({style:"HEAVY"}).catch(()=>{}):e==="success"?t.notification({type:"SUCCESS"}).catch(()=>{}):e==="warning"?t.notification({type:"WARNING"}).catch(()=>{}):e==="error"&&t.notification({type:"ERROR"}).catch(()=>{});return}if(typeof navigator<"u"&&typeof navigator.vibrate=="function"){if(!Gt())return;e==="light"||e==="selection"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="heavy"?navigator.vibrate(45):e==="success"?navigator.vibrate([15,30,20]):e==="warning"?navigator.vibrate([30,40,30]):e==="error"&&navigator.vibrate([40,50,40,50,40])}}catch{}};typeof window<"u"&&(window.triggerHaptic=We);const Gs=e=>{if(e)switch(e){case"product-modal":typeof window.closeProductModal=="function"&&window.closeProductModal();break;case"pos-variant-sheet":typeof window.closePOSVariantSheet=="function"&&window.closePOSVariantSheet();break;case"variant-preview-modal":typeof window.closeVariantPreviewModal=="function"&&window.closeVariantPreviewModal();break;case"custom-confirm-modal":typeof window.closeConfirm=="function"&&window.closeConfirm();break;case"scanner-modal":typeof window.closeCameraScanner=="function"&&window.closeCameraScanner();break;case"modal-tempo-detail":typeof window.closeTempoDetailModal=="function"&&window.closeTempoDetailModal();break;case"modal-tempo-payment":typeof window.closeTempoPaymentModal=="function"&&window.closeTempoPaymentModal();break;case"modal-tempo-penalty":typeof window.closeTempoPenaltyModal=="function"&&window.closeTempoPenaltyModal();break;case"modal-supplier-detail":typeof window.closeSupplierDetailModal=="function"&&window.closeSupplierDetailModal();break;case"modal-supplier-form":typeof window.closeSupplierFormModal=="function"&&window.closeSupplierFormModal();break;case"modal-po-form":typeof window.closePurchaseFormModal=="function"&&window.closePurchaseFormModal();break;case"modal-po-detail":typeof window.closePurchaseDetailModal=="function"&&window.closePurchaseDetailModal();break;case"modal-po-payment":typeof window.closePurchasePaymentModal=="function"&&window.closePurchasePaymentModal();break;case"modal-po-product-picker":typeof window.closePurchasePickerModal=="function"&&window.closePurchasePickerModal();break;case"quick-menu-modal":case"quickmenu-modal":typeof window.closeQuickMenuModal=="function"&&window.closeQuickMenuModal();break;case"category-modal":typeof window.closeCategoryModal=="function"&&window.closeCategoryModal();break;case"brand-modal":typeof window.closeBrandModal=="function"&&window.closeBrandModal();break;case"quick-variant-modal":typeof window.closeQuickVariantSheet=="function"&&window.closeQuickVariantSheet();break;case"shopping-guide-modal":typeof window.closeShoppingGuideModal=="function"&&window.closeShoppingGuideModal();break;case"pos-login-modal":typeof window.closePOSLoginModal=="function"&&window.closePOSLoginModal();break;case"admin-order-modal":typeof window.closeOrderDetailModal=="function"&&window.closeOrderDetailModal();break;case"order-detail-modal":typeof window.closeCustomerOrderDetailModal=="function"&&window.closeCustomerOrderDetailModal();break;case"modal-client-tempo-pay":typeof window.closeClientPaymentModal=="function"&&window.closeClientPaymentModal();break;default:{const t=document.getElementById(e);if(t){const a=t.querySelector('button[onclick*="close"], .fa-xmark')?.closest("button");if(a)a.click();else if(typeof window.closeModalAnim=="function"){const s=t.querySelector('.modal-bottom-sheet, [id$="-box"]')||t.firstElementChild;window.closeModalAnim(t,s)}else t.classList.add("hidden","opacity-0")}}}};let me=null,tt=null,ft=0,ca=0,bt=0,Ie=!1,pa=0;const Ws=()=>{if(typeof document>"u")return;document.addEventListener("touchstart",t=>{if(t.touches.length!==1)return;const a=t.touches[0],s=a.target.closest('[id*="modal"], [id*="sheet"]');if(!s||s.classList.contains("hidden")||s.classList.contains("opacity-0")||!(s.classList.contains("items-end")||!!a.target.closest(".modal-bottom-sheet")||s.classList.contains("modal-bottom-sheet")))return;let o=a.target.closest(".modal-bottom-sheet")||a.target.closest('[id$="-box"]');if(o||(o=a.target.closest('[id$="-content"]')),!o||a.target.closest('input, select, textarea, button, a, [role="button"], table, .no-drag'))return;const r=!!a.target.closest(".overflow-y-auto, .overflow-x-auto, .scroll-content, .custom-scrollbar"),l=o.getBoundingClientRect(),c=a.clientY-l.top;(a.target.closest(".pull-indicator")||!r&&c<=55)&&(me=o,tt=s,ft=a.clientY,ca=a.clientX,bt=ft,Ie=!1,pa=Date.now())},{passive:!0}),document.addEventListener("touchmove",t=>{if(!me||t.touches.length!==1)return;const a=t.touches[0];bt=a.clientY;const s=bt-ft,n=Math.abs(a.clientX-ca);if(!Ie&&n>Math.abs(s)){me=null;return}const o=me.classList.contains("overflow-y-auto")?me:me.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar");if(!(o&&o.scrollTop>5&&!Ie)){if(s>0){if(Ie=!0,t.cancelable&&t.preventDefault(),me.style.transform=`translateY(${s}px)`,me.style.transition="none",tt){const r=Math.max(.2,1-s/400);tt.style.backgroundColor=`rgba(15, 23, 42, ${.8*r})`}}else if(s<0&&Ie){const r=s*.2;me.style.transform=`translateY(${r}px)`,me.style.transition="none"}}},{passive:!1});const e=()=>{if(!me)return;const t=me,a=tt,s=bt-ft,n=Math.max(1,Date.now()-pa),o=s/n;me=null,tt=null,Ie&&(s>80||o>.45&&s>30)?(We("light"),t.style.transition="transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",t.style.transform="translateY(100%)",a&&(a.style.transition="opacity 0.25s ease",a.style.opacity="0"),setTimeout(()=>{t.style.transform="",t.style.transition="",a&&(a.style.backgroundColor="",a.style.opacity=""),Gs(a?a.id:"")},250)):Ie&&(t.style.transition="transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)",t.style.transform="",a&&(a.style.transition="background-color 0.28s ease",a.style.backgroundColor=""),setTimeout(()=>{t.style.transition=""},300)),Ie=!1};document.addEventListener("touchend",e,{passive:!0}),document.addEventListener("touchcancel",e,{passive:!0})};let ua=0;const Vs=()=>{typeof document>"u"||document.addEventListener("click",e=>{const t=Date.now();if(t-ua<50)return;const a=e.target.closest('button, [role="button"], a[onclick], [id*="bnav-"], .pos-add-btn, .pos-tag-chip, #pos-variant-chips button, .interactive-tap');a&&!a.disabled&&!a.classList.contains("disabled")&&(ua=t,We("light"))},{passive:!0,capture:!0})};let ae=null;const Js=(e="pop")=>{try{if(typeof window>"u"||!Gt())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;ae||(ae=new t),ae.state==="suspended"&&ae.resume().catch(()=>{});const a=ae.currentTime;if(e==="pop"){const s=ae.createOscillator(),n=ae.createGain();s.type="sine",s.frequency.setValueAtTime(340,a),s.frequency.exponentialRampToValueAtTime(560,a+.07),n.gain.setValueAtTime(.14,a),n.gain.exponentialRampToValueAtTime(.001,a+.08),s.connect(n),n.connect(ae.destination),s.start(a),s.stop(a+.08)}else if(e==="success"){const s=ae.createOscillator(),n=ae.createOscillator(),o=ae.createGain(),r=ae.createGain();s.type="triangle",n.type="triangle",s.frequency.setValueAtTime(523.25,a),n.frequency.setValueAtTime(659.25,a+.09),o.gain.setValueAtTime(.12,a),o.gain.exponentialRampToValueAtTime(.001,a+.22),r.gain.setValueAtTime(.14,a+.09),r.gain.exponentialRampToValueAtTime(.001,a+.32),s.connect(o),o.connect(ae.destination),n.connect(r),r.connect(ae.destination),s.start(a),s.stop(a+.22),n.start(a+.09),n.stop(a+.32)}else if(e==="beep"){const s=ae.createOscillator(),n=ae.createGain();s.type="square",s.frequency.setValueAtTime(1040,a),n.gain.setValueAtTime(.08,a),n.gain.exponentialRampToValueAtTime(.001,a+.07),s.connect(n),n.connect(ae.destination),s.start(a),s.stop(a+.07)}}catch{}};typeof window<"u"&&(window.playNativeSound=Js);const at=()=>{if(typeof document>"u")return;const e=document.getElementById("native-scroll-top-btn");e&&(e.classList.add("opacity-0","translate-y-3"),e.classList.add("hidden"))};typeof window<"u"&&(window.hideFloatingScrollTop=at);const Ys=()=>{if(typeof document>"u")return;let e=document.getElementById("native-scroll-top-btn");e||(e=document.createElement("button"),e.id="native-scroll-top-btn",document.body.appendChild(e)),e.setAttribute("aria-label","Kembali ke Atas"),e.setAttribute("title","Kembali ke Atas"),e.className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 hidden opacity-0 translate-y-3 transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900/95 dark:bg-slate-800/95 text-white shadow-xl shadow-black/25 border border-slate-700/80 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_4px_20px_rgba(var(--color-primary-rgb),0.4)] hover:scale-105 active:scale-90 cursor-pointer group",e.innerHTML='<i class="fa-solid fa-arrow-up text-xs md:text-sm transition-transform duration-200 group-hover:-translate-y-0.5"></i>',e._hasClickListener||(e._hasClickListener=!0,e.addEventListener("click",()=>{We("light");const a=document.querySelector(".view-section:not(.hidden)");if(a){const s=a.querySelector(".scroll-content");s&&s.scrollTop>10&&s.scrollTo({top:0,behavior:"smooth"})}window.scrollTo({top:0,behavior:"smooth"})}));const t=(a,s=null)=>{if(!e)return;if(typeof window<"u"&&window.appData?.store?.showScrollTopButton===!1){at();return}const n=document.querySelector(".view-section:not(.hidden)");if(!n||n.id!=="view-catalog"&&n.id!=="view-orders"){at();return}if(s){const r=s.closest(".view-section");if(!r||r.id!=="view-catalog"&&r.id!=="view-orders"){at();return}}if(document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none), [id*="dialog"]:not(.hidden), .fixed.inset-0:not(.hidden):not(.pointer-events-none):not(#native-theme-ambient)')){at();return}a>450?(e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0","translate-y-3")})):(e.classList.add("opacity-0","translate-y-3"),setTimeout(()=>{e&&e.classList.contains("opacity-0")&&e.classList.add("hidden")},300))};window.addEventListener("scroll",()=>{t(window.scrollY||document.documentElement.scrollTop)},{passive:!0}),document.addEventListener("scroll",a=>{a.target&&a.target.classList&&a.target.classList.contains("scroll-content")&&t(a.target.scrollTop,a.target)},{passive:!0,capture:!0})},Qs=()=>{if(typeof window>"u"||typeof document>"u")return;let e=document.getElementById("native-connectivity-banner");e||(e=document.createElement("div"),e.id="native-connectivity-banner",e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] -translate-y-16 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl",document.body.appendChild(e));let t=null;const a=s=>{clearTimeout(t),We(s?"success":"warning"),s?(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-emerald-600 text-white border border-emerald-400/40",e.innerHTML='<i class="fa-solid fa-wifi text-xs"></i><span>Kembali Online — Terhubung</span>',t=setTimeout(()=>{e.classList.add("-translate-y-16","opacity-0")},2500)):(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl bg-amber-500 text-slate-950 border border-amber-300/60",e.innerHTML='<i class="fa-solid fa-wifi-slash text-xs"></i><span>Mode Offline — Menggunakan Data Lokal</span>')};window.addEventListener("online",()=>a(!0)),window.addEventListener("offline",()=>a(!1))},Dn=()=>{Ws(),Vs(),Ys(),Qs()},Sa=e=>{let t="";return typeof e=="object"&&e!==null?t=`${e.name||""} ${e.category||""} ${e.subCategory||""}`.toLowerCase():t=String(e||"").toLowerCase(),t.includes("cat")||t.includes("paint")||t.includes("politur")||t.includes("thinner")||t.includes("no drop")||t.includes("kuas")||t.includes("roll")?{icon:"fa-paint-roller",gradient:"linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(244, 63, 94, 0.12) 0%, transparent 70%)",textColor:"#e11d48"}:t.includes("gembok")||t.includes("kunci")||t.includes("grendel")||t.includes("slot")||t.includes("silinder")?{icon:"fa-lock",gradient:"linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(245, 158, 11, 0.12) 0%, transparent 70%)",textColor:"#d97706"}:t.includes("paku")||t.includes("baut")||t.includes("sekrup")||t.includes("mur")||t.includes("kawat")?{icon:"fa-hammer",gradient:"linear-gradient(135deg, #64748b 0%, #334155 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(100, 116, 139, 0.12) 0%, transparent 70%)",textColor:"#475569"}:t.includes("pipa")||t.includes("pvc")||t.includes("paralon")||t.includes("kran")||t.includes("sambungan")||t.includes("fitting")||t.includes("knee")||t.includes("tee")?{icon:"fa-faucet-drip",gradient:"linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(6, 182, 212, 0.12) 0%, transparent 70%)",textColor:"#0891b2"}:t.includes("semen")||t.includes("mortar")||t.includes("pasir")||t.includes("bata")||t.includes("hebel")?{icon:"fa-trowel-bricks",gradient:"linear-gradient(135deg, #ea580c 0%, #9a3412 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(234, 88, 12, 0.12) 0%, transparent 70%)",textColor:"#c2410c"}:t.includes("perkakas")||t.includes("tang")||t.includes("obeng")||t.includes("palu")||t.includes("bor")||t.includes("gerinda")||t.includes("meteran")||t.includes("gergaji")?{icon:"fa-toolbox",gradient:"linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",textColor:"#4f46e5"}:{icon:"fa-box-open",gradient:"linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",bgGlow:"radial-gradient(ellipse at 50% 45%, rgba(var(--color-primary-rgb), 0.12) 0%, transparent 70%)",textColor:"var(--color-primary)"}},Zs=(e,t="",a="")=>{const s=Sa(e);return{id:"brand",icon:s.icon,subIcon:s.icon,label:"Produk Resmi",podGradient:s.gradient,accent:"rgba(var(--color-primary-rgb),0.1)",aura:"rgba(var(--color-primary-rgb),0.08)",shadowColor:"rgba(var(--color-primary-rgb),0.15)"}},$a=e=>{if(!e||typeof e!="string")return"TP";const a=e.replace(/[^a-zA-Z0-9\s]/g," ").trim().split(/\s+/).filter(o=>o.length>0),s=a.filter(o=>/[a-zA-Z]/.test(o)),n=s.length>0?s:a;return n.length>=2?(n[0][0]+n[1][0]).toUpperCase():n.length===1?(n[0].length>=2?n[0].slice(0,2):n[0]+"P").toUpperCase():"TP"},Xs=(e,t={})=>{const a=t.size||"md",s=t.className||"",n=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk"),o=Sa(e),r=$a(n);return`
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
    </div>`},eo=e=>(typeof e=="object"&&e!==null?e.name:String(e||"Produk"),`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
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
    </svg>`)}`),w=e=>typeof e=="string"?document.getElementById(e):e,Aa=e=>{const t=w(e);t&&t.classList.remove("hidden")},Ma=e=>{const t=w(e);t&&t.classList.add("hidden")},to=(e,t,a)=>{const s=w(e);s&&s.classList.toggle(t,a)},ie=(e,t)=>{const a=w(e);a&&(a.innerText=t)},Ca=(e,t)=>{const a=w(e);a&&(a.innerHTML=t)},ao=(e,t)=>{const a=w(e);a&&(a.value=t)},so=e=>{const t=w(e);return t?t.value:""},At=(e,t)=>{const a=typeof e=="string"?w(e):e,s=typeof t=="string"?w(t):t;a&&(a.classList.remove("hidden","pointer-events-none"),s&&s.classList.add("pointer-events-auto"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{a.classList.remove("opacity-0","pointer-events-none"),s&&(s.classList.remove("translate-y-full","sm:translate-y-10","sm:translate-y-8","translate-y-6","sm:translate-y-6","scale-95"),s.classList.add("pointer-events-auto"))})}))},Ge=(e,t,a)=>{const s=typeof e=="string"?w(e):e,n=typeof t=="string"?w(t):t;if(!s){typeof a=="function"&&a();return}s.classList.add("opacity-0","pointer-events-none"),n&&(n.classList.add("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95"),n.classList.remove("pointer-events-auto")),setTimeout(()=>{s.classList.add("hidden"),typeof a=="function"&&a()},280)};typeof window<"u"&&(window.openModalAnim=At,window.closeModalAnim=Ge);const oo=e=>{try{return localStorage.getItem(e)}catch{return null}},no=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},i=e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),k=e=>{const t=Number(e);if(isNaN(t)||e===null)return"Rp 0";const s=Math.abs(Math.round(t)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");return`${t<0?"-":""}Rp ${s}`},ro=(e,t=!1)=>{const a=Number(e);if(isNaN(a)||e===null||a===0)return"Rp 0";const n=Math.abs(Math.round(a)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");return t||a<0?`(Rp ${n})`:`Rp ${n}`},io=e=>{if(!e)return new Date;if(e.timestamp&&typeof e.timestamp.toDate=="function")try{const n=e.timestamp.toDate();if(n instanceof Date&&!isNaN(n.getTime()))return n}catch{}if(e.createdAt&&typeof e.createdAt.toDate=="function")try{const n=e.createdAt.toDate();if(n instanceof Date&&!isNaN(n.getTime()))return n}catch{}if(e.timestamp&&typeof e.timestamp=="object"){const n=e.timestamp.seconds??e.timestamp._seconds;if(typeof n=="number"&&!isNaN(n)&&n>0)return new Date(n*1e3)}if(e.createdAt&&typeof e.createdAt=="object"){const n=e.createdAt.seconds??e.createdAt._seconds;if(typeof n=="number"&&!isNaN(n)&&n>0)return new Date(n*1e3)}const t=[e.dateMs,e.timestamp,e.createdAt,e.date];for(const n of t){if(typeof n=="number"&&!isNaN(n)&&n>0)return new Date(n>1e11?n:n*1e3);if(typeof n=="string"&&/^\d{10,13}$/.test(n.trim())){const o=Number(n.trim());return new Date(o>1e11?o:o*1e3)}}const a=[e.dateString,e.date,e.createdAt];for(const n of a)if(typeof n=="string"&&n.trim()&&n!=="[object Object]"){const o=new Date(n);if(!isNaN(o.getTime()))return o;const r=n.replace(/-/g,"/").replace("T"," ").replace(/\..*$/,""),l=new Date(r);if(!isNaN(l.getTime()))return l}const s=e.orderId||(typeof e=="string"?e:"");if(typeof s=="string"&&s.startsWith("ORD-")){const n=s.split("-");if(n.length>=2&&n[1].length>=6){const o=parseInt(n[1],36);if(!isNaN(o)&&o>15e11&&o<25e11)return new Date(o)}}return new Date},lo=(e,t=null)=>{if(typeof e!="string")return e;const a=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);if(!a)return e;const s=a[1];return t==="image/gif"||e.toLowerCase().includes(".gif")||s==="1rkAFxnZDe2eLQ88kan2BeGSg56IkAEJ9"?`https://drive.google.com/uc?export=view&id=${s}`:`https://lh3.googleusercontent.com/d/${s}`},co=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(t))return t;const a=t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return a?a[1]:null},La=e=>{if(typeof e!="string"||!e.trim())return null;const t=e.trim(),a=co(t);if(a)return{type:"youtube",id:a,embedUrl:`https://www.youtube.com/embed/${a}?autoplay=1&mute=1&muted=1&loop=1&playlist=${a}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const s=t.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(s&&s[1]){const n=s[1];return{type:"gdrive",id:n,streamUrl:`https://drive.google.com/uc?export=download&id=${n}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${n}`,directUrl:`https://drive.google.com/uc?export=download&id=${n}`,embedUrl:`https://drive.google.com/file/d/${n}/preview?autoplay=1`}}return{type:"direct",directUrl:t,embedUrl:t}},Nn=e=>{const t=La(e);return t?t.embedUrl:e},Rn=e=>{const t=La(e);return t?t.embedUrl:e},On=(e,t)=>typeof e!="string"||!e?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${t}`:e.includes("googleusercontent.com")&&!e.includes("=")?`${e}=${t}`:e,In=e=>{if(!e||typeof e!="string")return!0;const t=e.trim();return!!(!t||t.includes("placehold.co"))},En=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",Bn=(e,t,a,s)=>{document.title=e||"Toko Putri";const n=(o,r,l=!1)=>{const c=l?"property":"name";let d=document.querySelector(`meta[${c}="${o}"]`);d||(d=document.createElement("meta"),d.setAttribute(c,o),document.head.appendChild(d)),d.setAttribute("content",r)};t&&n("description",t),e&&n("og:title",e,!0),t&&n("og:description",t,!0),a&&n("og:image",a,!0),s&&n("og:url",s,!0)},Hn=(e,t)=>{let a=document.getElementById(e);a||(a=document.createElement("script"),a.id=e,a.type="application/ld+json",document.head.appendChild(a)),a.textContent=JSON.stringify(t)},xt=e=>{e&&ie("loader-text",e);const t=w("global-loader");t&&(t.style.opacity="1",t.style.display="flex")},Ht=()=>{const e=w("global-loader");e&&(e.style.pointerEvents="none",e.style.transition="opacity 0.25s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250))},Se=(e,t,a,s)=>{typeof window.showToast=="function"&&window.showToast(e,t,a,s)},Fn=(e,t,a,s)=>{if(typeof window.showConfirm=="function")return window.showConfirm(e,t,a,s)},Je={};typeof window<"u"&&(window.loadedScripts=Je);const Kn=(e,t)=>t&&t()?Promise.resolve():(Je[e]||(Je[e]=new Promise((a,s)=>{const n=document.createElement("script");n.src=e,n.onload=()=>a(),n.onerror=()=>{delete Je[e],s(new Error("Gagal memuat: "+e))},document.head.appendChild(n)})),Je[e]),Da=e=>{let t=(e||"").toString().replace(/\D/g,"");return t?(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),t):""},po=(e,t="")=>{const a=Da(e);if(!a){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp tidak valid!");return}const s=t?encodeURIComponent(t):"",n=`https://wa.me/${a}${s?`?text=${s}`:""}`;window.AndroidNativeApp&&typeof window.AndroidNativeApp.openWhatsApp=="function"?window.AndroidNativeApp.openWhatsApp(n):window.open(n,"_blank","noopener,noreferrer")},uo=(e,t=null,a=null)=>{try{const s=(typeof t=="string"?document.querySelector(t):t)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!s)return;const n=e.getBoundingClientRect(),o=s.getBoundingClientRect(),r=document.createElement("div");r.className="flying-cart-item",a?r.innerHTML=`<img src="${a}" alt="Product" class="w-full h-full object-cover rounded-full" />`:r.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const l=n.left+n.width/2-20,c=n.top+n.height/2-20,d=o.left+o.width/2-20,f=o.top+o.height/2-20;r.style.cssText=`
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
        `,document.body.appendChild(r),requestAnimationFrame(()=>{const m=d-l,b=f-c;r.style.transform=`translate3d(${m}px, ${b}px, 0) scale(0.25) rotate(18deg)`,r.style.opacity="0.4"}),setTimeout(()=>{r&&r.parentNode&&r.parentNode.removeChild(r),We("medium");const m=document.getElementById("bottom-nav-cart-badge")||s.querySelector(".cart-count-badge");m&&(m.classList.remove("cart-bounce-pop"),m.offsetWidth,m.classList.add("cart-bounce-pop")),s.classList.remove("cart-bounce-pop"),s.offsetWidth,s.classList.add("cart-bounce-pop"),setTimeout(()=>{m&&m.classList.remove("cart-bounce-pop"),s.classList.remove("cart-bounce-pop")},600)},500)}catch(s){console.error("flyToCart error",s)}},it=(e={})=>{if(!e||typeof e!="object")return{hasPpn:!1,ppnAmount:0,dppAmount:0,ppnRate:0,ppnType:"exclusive",isInclusive:!1,ppnLabel:"PPN",subtotal:0,shipping:0,shippingDiscount:0,productDiscount:0,pointDiscount:0,paylaterAdminFee:0,paylaterServiceFee:0,grandTotal:0,baseBeforeTax:0};const t=e.payment||{},a=typeof window<"u"&&window.appData?.store?window.appData.store:{},n=(Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[]).reduce((W,P)=>W+parseFloat(P.qty||1)*(parseFloat(P.effectivePrice||P.price)||0),0),o=t.subtotal!==void 0&&t.subtotal!==null?parseFloat(t.subtotal):e.subtotal!==void 0&&e.subtotal!==null?parseFloat(e.subtotal):n,r=parseFloat(t.shippingCost??e.shippingCost??0)||0,l=parseFloat(t.shippingDiscount??e.shippingDiscount??0)||0,c=parseFloat(t.productDiscount??e.productDiscount??0)||0,d=parseFloat(e.pointDiscount??t.pointDiscount??0)||0,f=parseFloat(t.paylaterAdminFee??0)||0,m=parseFloat(t.paylaterServiceFee??0)||0,b=t.grandTotal!==void 0&&t.grandTotal!==null?parseFloat(t.grandTotal):e.total!==void 0&&e.total!==null?parseFloat(e.total):e.grandTotal!==void 0&&e.grandTotal!==null?parseFloat(e.grandTotal):Math.max(0,o-c-d+r-l+f+m),g=Math.max(0,o-c-d+(r-l)+f+m);let S=t.ppnRate!==void 0&&t.ppnRate!==null&&!isNaN(parseFloat(t.ppnRate))?parseFloat(t.ppnRate):e.ppnRate!==void 0&&e.ppnRate!==null&&!isNaN(parseFloat(e.ppnRate))?parseFloat(e.ppnRate):a.ppnRate!==void 0?parseFloat(a.ppnRate):11;isNaN(S)&&(S=11);let x=t.ppnType||e.ppnType||a.ppnType||"exclusive",N=parseFloat(t.ppnAmount??e.ppnAmount??e.tax??t.tax??0);isNaN(N)&&(N=0),N<=0&&b>g+.5&&(N=Math.round(b-g),x="exclusive",S<=0&&g>0&&(S=Math.round(N/g*100)));const I=a.ppnEnabled===!0||a.ppnEnabled==="true";if(N<=0&&x==="inclusive"&&S>0&&(t.ppnEnabled===!0||I)){const W=Math.round(g*100/(100+S));N=Math.max(0,g-W)}let U=t.dppAmount!==void 0&&t.dppAmount!==null&&!isNaN(parseFloat(t.dppAmount))?parseFloat(t.dppAmount):e.dppAmount!==void 0&&e.dppAmount!==null&&!isNaN(parseFloat(e.dppAmount))?parseFloat(e.dppAmount):null;U===null&&(x==="inclusive"&&S>0?U=Math.round(g*100/(100+S)):U=g);const H=N>0||t.ppnEnabled===!0||e.ppnEnabled===!0||t.ppnShowZero===!0||t.ppnRate!==void 0&&t.ppnRate!==null&&t.ppnRate>0||t.ppnRate===0&&t.ppnEnabled!==!1||I&&t.ppnEnabled!==!1,T=x==="inclusive",R=t.ppnLabel||e.ppnLabel||a.ppnTaxLabel||`${T?"Termasuk PPN":"PPN"} (${S}%)`;return{hasPpn:H,ppnAmount:N,dppAmount:U,ppnRate:S,ppnType:x,isInclusive:T,ppnLabel:R,subtotal:o,shipping:r,shippingDiscount:l,productDiscount:c,pointDiscount:d,paylaterAdminFee:f,paylaterServiceFee:m,grandTotal:b,baseBeforeTax:g}};typeof window<"u"&&(window.normalizeWA=Da,window.openWhatsApp=po,window.sLoad=xt,window.hLoad=Ht,window.el=w,window.show=Aa,window.hide=Ma,window.toggleCls=to,window.setIn=ie,window.setH=Ca,window.setV=ao,window.getV=so,window.esc=i,window.fixD=lo,window.fCur=k,window.fAccounting=ro,window.parseOrderDate=io,window.extractOrderTaxInfo=it,window.sL=oo,window.ssL=no,window.triggerHaptic=We,window.flyToCartAnimation=uo);typeof window<"u"&&(window.renderProductCoverHtml=Xs,window.getProductTheme=Zs,window.getMonogram=$a,window.getProductCoverSvgDataUri=eo);const ma={deviceType:"rawbt",deviceName:"Driver RawBT (Printer Thermal Android - Free)",deviceId:"",paperSize:"58mm",directPrint:!1,feedLines:3,autoCut:!0,openCashDrawer:!1,autoPrintOrder:!1,headerText:"",storeAddress:"",storePhone:"",footerText:"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.",footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi.",showLogo:!0,showAddress:!0,showPhone:!0,showNpwp:!0,showPoints:!0,showBarcode:!0,networkIp:"192.168.1.200:9100"},Me=e=>{switch(e){case"58mm-compact":case"58mm_30":return 30;case"80mm-compact":case"80mm_42":return 42;case"80mm":return 48;case"58mm":default:return 32}},q=()=>{try{const e=localStorage.getItem("freshmart_printer_config");if(e)return{...ma,...JSON.parse(e)}}catch(e){console.warn("Gagal membaca konfigurasi printer lokal:",e)}return{...ma}},lt=e=>{try{const a={...q(),...e};return localStorage.setItem("freshmart_printer_config",JSON.stringify(a)),a}catch(t){return console.error("Gagal menyimpan konfigurasi printer:",t),q()}},mo=()=>{const e=q(),t=(o,r)=>{const l=w(o);l&&(l.checked=!!r)},a=(o,r)=>{const l=w(o);l&&(l.value=r||"")};a("printer-device-name-display",e.deviceName),a("printer-paper-size",e.paperSize),a("printer-network-ip",e.networkIp),a("printer-header-custom",e.headerText),a("printer-address-custom",e.storeAddress),a("printer-phone-custom",e.storePhone),a("printer-footer-custom",e.footerText),a("printer-policy-custom",e.footerPolicyNote),t("printer-opt-address",e.showAddress!==!1),t("printer-opt-phone",e.showPhone!==!1),t("printer-opt-npwp",e.showNpwp!==!1),t("printer-opt-points",e.showPoints),t("printer-opt-barcode",e.showBarcode),t("printer-opt-direct",e.directPrint===!0),t("printer-opt-autocut",e.autoCut!==!1),t("printer-opt-drawer",e.openCashDrawer),t("printer-opt-autoprint",e.autoPrintOrder),Ra(e.deviceType||"rawbt");const s=w("printer-settings-modal"),n=w("printer-settings-modal-box");s&&s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("printerSettings"),At(s,n)},Na=(e=!1)=>{const t=w("printer-settings-modal"),a=w("printer-settings-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("printerSettings",e,()=>{Ge(t,a)}):Ge(t,a))},Ra=e=>{window._selectedPrinterType=e,document.querySelectorAll(".printer-type-card").forEach(s=>{if(s.getAttribute("data-type")===e){s.classList.add("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),s.classList.remove("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const o=s.querySelector(".printer-check-badge");o&&o.classList.remove("hidden")}else{s.classList.remove("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),s.classList.add("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const o=s.querySelector(".printer-check-badge");o&&o.classList.add("hidden")}});const t=w("rawbt-quick-guide-box");t&&(e==="rawbt"?t.classList.remove("hidden"):t.classList.add("hidden"));const a=w("printer-network-box");a&&(e==="network"?a.classList.remove("hidden"):a.classList.add("hidden"))},fo=()=>{const e=(o,r="")=>{const l=w(o);return l?l.value:r},t=(o,r=!1)=>{const l=w(o);return l?l.checked:r},a=window._selectedPrinterType||"rawbt",n={deviceType:a,deviceName:e("printer-device-name-display",a==="rawbt"?"Driver RawBT (Printer Thermal Android - Free)":a==="bluetooth"?"Bluetooth POS Printer":"Printer Thermal POS"),paperSize:e("printer-paper-size","58mm"),networkIp:e("printer-network-ip","192.168.1.200:9100"),headerText:e("printer-header-custom",""),storeAddress:e("printer-address-custom",""),storePhone:e("printer-phone-custom",""),footerText:e("printer-footer-custom","Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami."),footerPolicyNote:e("printer-policy-custom","Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi."),showAddress:t("printer-opt-address",!0),showPhone:t("printer-opt-phone",!0),showNpwp:t("printer-opt-npwp",!0),showPoints:t("printer-opt-points",!0),showBarcode:t("printer-opt-barcode",!0),directPrint:t("printer-opt-direct",!1),autoCut:t("printer-opt-autocut",!0),openCashDrawer:t("printer-opt-drawer",!1),autoPrintOrder:t("printer-opt-autoprint",!1)};lt(n),Se("Pengaturan printer berhasil disimpan!"),Na()},bo=async()=>{if(!navigator.bluetooth){Se("Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.");return}try{Se("Mencari printer bluetooth di sekitar...");const e=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["000018f0-0000-1000-8000-00805f9b34fb","e7810a71-73ae-499d-8c15-faa9aef0c3f2","00001101-0000-1000-8000-00805f9b34fb"]});if(e){lt({deviceType:"bluetooth",deviceName:e.name||"Bluetooth POS Printer",deviceId:e.id});const t=w("printer-device-name-display");t&&(t.value=e.name||"Bluetooth POS Printer"),Se(`Printer "${e.name||"Bluetooth POS"}" tersambung!`)}}catch(e){e.name!=="NotFoundError"&&Se("Koneksi bluetooth dibatalkan atau tidak tersedia.")}},wo=async()=>{if(!navigator.usb){Se("Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.");return}try{Se("Mencari printer USB...");const e=await navigator.usb.requestDevice({filters:[]});if(e){const t=(e.productName||"USB Thermal Printer")+" (USB)";lt({deviceType:"usb",deviceName:t,deviceId:String(e.vendorId)+":"+String(e.productId)});const a=w("printer-device-name-display");a&&(a.value=t),Se(`Printer USB "${t}" tersambung!`)}}catch(e){e.name!=="NotFoundError"&&Se("Koneksi USB dibatalkan atau tidak ditemukan.")}},xo=()=>{if(typeof window.executeRawBTTestPrint=="function"){window.executeRawBTTestPrint();return}const e=q(),t=e.paperSize==="80mm",a=t?48:32,s=e.headerText||p.store?.name||"TOKO PUTRI",n=e.showAddress!==!1&&(e.storeAddress||p.store?.address)||"",o=e.showPhone!==!1&&(e.storePhone||p.store?.wa)||"",r=e.footerPolicyNote||"",l=t?"68mm":"44mm",c=(b,g,S=a)=>{const x=S-b.length-g.length;return b+(x>0?" ".repeat(x):" ")+g},d=new Date().toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let f=`
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${i(s)}</div>
    ${n?`<div style="text-align:center;font-size:10px;color:#475569;margin-bottom:2px;">${i(n)}</div>`:""}
    ${o?`<div style="text-align:center;font-size:11px;margin-bottom:4px;">Telp/WA: ${i(o)}</div>`:""}
    <div style="text-align:center;font-weight:bold;font-size:12px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:3px 0;margin:6px 0;">
        *** UJI COBA CETAK STRUK ***
    </div>
    <div style="white-space:pre;font-size:11px;">Tgl   : ${d}</div>
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
    `;e.showPoints&&(f+=`<div style="white-space:pre;font-size:11px;">${c("Simulasi Poin Member","+10 Poin",a)}</div>`,f+='<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>'),e.showBarcode&&(f+=`<div style="text-align:center;margin:6px 0;">
            <div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*TEST-POS-${Date.now().toString().slice(-6)}*</div>
            <div style="font-size:9px;color:#333;">(BARCODE TEST OK)</div>
        </div><div style="border-bottom:1px dashed #000;margin:6px 0;"></div>`),f+=`
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
    `;let m=w("thermal-print-section");if(m||(m=document.createElement("div"),m.id="thermal-print-section",document.body.appendChild(m)),m.innerHTML=`<div style="width:${l};max-width:${l};font-family:'Courier New',Courier,monospace;font-size:${t?"10.5px":"8.8px"};line-height:1.2;color:#000;background:#fff;padding:0 ${t?"2.5mm":"1.5mm"} 4mm ${t?"1mm":"0.5mm"};box-sizing:border-box;">${f}</div>`,typeof window.sendToRawBT=="function"){const b=m.innerText,g=btoa(unescape(encodeURIComponent(b)));window.sendToRawBT(g,b,f)}else window.print();Se("Perintah uji cetak berhasil dikirim!")};window.getPrinterConfig=q;window.getPaperCols=Me;window.savePrinterConfig=lt;window.openPrinterSettingsModal=mo;window.closePrinterSettingsModal=Na;window.selectPrinterDeviceTypeUI=Ra;window.savePrinterSettingsFromModal=fo;window.scanBluetoothPrinter=bo;window.scanUsbPrinter=wo;window.executeTestPrint=xo;let fa={},se="view-catalog",Ne=!1,Be=null,je=["view-catalog"];const Mt=e=>{typeof history<"u"&&typeof window<"u"&&history.pushState({modal:e},"",window.location.href),Ee.push(e)},Ct=(e,t,a)=>{const s=Ee.lastIndexOf(e);if(s>-1&&Ee.splice(s,1),!t){Ne=!0,Be&&clearTimeout(Be),Be=setTimeout(()=>{Ne=!1},300);try{typeof history<"u"&&history.back()}catch{Ne=!1}}typeof a=="function"&&a()},le=(e,t=!1)=>{if(!e||e===se)return;if(!t)typeof history<"u"&&typeof window<"u"&&history.pushState({view:e},"",window.location.href),e==="view-catalog"?je=["view-catalog"]:je.push(e);else{const n=je.lastIndexOf(e);n>-1?je=je.slice(0,n+1):je=["view-catalog",e]}const a=w(se);if(a){const n=a.querySelector(".scroll-content");n&&(fa[se]=n.scrollTop)}if(se==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime(),se==="view-pos-cashier"&&e!=="view-pos-cashier"&&(typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()),se==="view-admin"&&e!=="view-admin"){const n=w("view-admin");n&&n.classList.remove("admin-pos-mode"),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()}const s=w(e);if(s&&(s.classList.remove("hidden"),s.classList.add("flex")),document.querySelectorAll(".view-section").forEach(n=>{n!==s&&(n.classList.add("hidden"),n.classList.remove("flex"))}),typeof window.hideFloatingScrollTop=="function")window.hideFloatingScrollTop();else{const n=document.getElementById("native-scroll-top-btn");n&&(n.classList.add("opacity-0","translate-y-3"),n.classList.add("hidden"))}if(s){e==="view-cart"&&typeof window.renderCart=="function"?window.renderCart():e==="view-checkout"&&typeof window.rChck=="function"?window.rChck():e==="view-payment"&&typeof window.rPay=="function"?window.rPay():e==="view-wishlist"&&typeof window.renderWish=="function"?window.renderWish():e==="view-orders"&&typeof window.renderMyOrders=="function"?window.renderMyOrders():e==="view-faq"&&typeof window.renderStorefrontFAQ=="function"?window.renderStorefrontFAQ():e==="view-pos-cashier"?va(()=>import("./module-pos-B5yxhcYf.js").then(o=>o.R),__vite__mapDeps([2,3,4,1])).then(o=>{typeof o.renderPOSStorefront=="function"&&o.renderPOSStorefront()}).catch(o=>console.error("[POS] Gagal memuat storefront:",o)):e==="view-admin"&&typeof window.renderSubscriptionNoticeInCMS=="function"&&window.renderSubscriptionNoticeInCMS();const n=s.querySelector(".scroll-content");if(n)if(t){const o=fa[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{n.scrollTop=o}))}else n.scrollTo(0,0)}se=e,Oa(e)},Oa=(e=se)=>{const t=w("bottom-nav-bar");if(!t)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin","view-pos-cashier"].includes(e)){t.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.remove("translate-y-0","opacity-100");return}if(t.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(s=>s.classList.remove("active")),e==="view-catalog"){const s=w("bnav-home");s&&s.classList.add("active")}else if(e==="view-orders"){const s=w("bnav-orders");s&&s.classList.add("active")}else if(e==="view-wishlist"||e==="view-faq"){const s=w("bnav-menu");s&&s.classList.add("active")}},go=e=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(e==="home"?"medium":"light"),e==="home")if(se==="view-catalog"){const t=document.querySelector("#view-catalog .scroll-content");t?t.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else le("view-catalog");else e==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():e==="cart"?le("view-cart"):e==="orders"?le("view-orders"):e==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},Ia=()=>{const e=document.querySelector("#view-catalog .scroll-content"),t=w("pull-to-refresh-indicator"),a=w("ptr-icon"),s=w("ptr-text");if(!e||!t)return;let n=0,o=0,r=!1,l=!1;const c=65;e.addEventListener("touchstart",d=>{e.scrollTop<=5&&!l&&(n=d.touches[0].pageY,r=!0)},{passive:!0}),e.addEventListener("touchmove",d=>{if(!r||l)return;o=d.touches[0].pageY;const f=o-n;if(f>15&&e.scrollTop<=5){t.classList.add("visible");const m=Math.min(f/c,1.5);a&&(a.style.transform=`rotate(${m*240}deg)`),s&&(s.innerText=f>=c?"Lepaskan untuk segarkan":"Tarik ke bawah untuk refresh")}else t.classList.remove("visible")},{passive:!0}),e.addEventListener("touchend",async()=>{if(!r||l)return;if(r=!1,o-n>=c&&e.scrollTop<=5){l=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),a&&(a.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",a.style.transform=""),s&&(s.innerText="Menyinkronkan katalog...");try{typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),s&&(s.innerText="Katalog Terkini Disinkron!"),a&&(a.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch{s&&(s.innerText="Gagal sinkron data")}setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>{l=!1,a&&(a.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",a.style.transform=""),s&&(s.innerText="Tarik ke bawah untuk refresh")},300)},600)}else t.classList.remove("visible"),a&&(a.style.transform="")})},Ea={product:["product-modal"],category:["category-modal"],brand:["brand-modal"],admin:["admin-modal"],adminOrder:["admin-order-modal"],receipt:["receipt-preview-modal"],docPreview:["doc-preview-modal"],scanner:["scanner-modal"],confirm:["custom-confirm-modal"],customerOrder:["order-detail-modal","customer-order-detail-modal"],restock:["restock-modal"],quickprice:["quickprice-modal"],member:["member-modal"],prompt:["custom-prompt-container","custom-prompt-modal"],review:["review-modal"],quickmenu:["quickmenu-modal"],variantPreview:["variant-preview-modal"],terms:["terms-modal"],privacy:["privacy-modal"],askQuestion:["modal-ask-question","ask-question-modal"],quickVariant:["quick-variant-modal"],adminFAQ:["modal-admin-faq","admin-faq-modal"],printerSettings:["printer-settings-modal"],exitConfirm:["exit-confirm-modal"],appDownload:["app-download-modal"],voucher:["voucher-modal"],guide:["shopping-guide-modal"],changelog:["changelog-modal"],guarantee:["guarantee-modal","quality-guarantee-modal"],security:["security-modal"],posVariantSheet:["pos-variant-sheet"],posLogin:["pos-login-modal"],posCartDrawer:["pos-mobile-cart-drawer","pos-cart-drawer"],posPayment:["pos-pay-modal","pos-payment-modal"],posOpenShift:["pos-open-shift-modal","modal-pos-open-shift"],posCloseShift:["pos-close-shift-modal","modal-pos-close-shift"],posShiftSummary:["pos-shift-summary-modal","modal-pos-shift-summary"],posCashMovement:["pos-cash-movement-modal","modal-pos-cash-movement"],clientTempoPay:["modal-client-tempo-pay"],clientPaySuccess:["modal-client-pay-success"],tempoConfirmations:["modal-tempo-confirmations"],thermalPreview:["utp-thermal-modal"],htmlPreview:["utp-html-modal"],addStaff:["add-staff-modal","modal-add-staff"],permissions:["permissions-modal","modal-permissions"],editStaff:["edit-staff-modal","modal-edit-staff"],soFinalize:["modal-so-finalize","so-finalize-modal"],soHistory:["modal-so-history-detail","modal-so-history","so-history-modal"],preRestore:["modal-pre-restore-inspector"],heroBanner:["admin-hero-banner-modal","hero-banner-modal"],renewal:["renewal-input-modal"],purchaseForm:["modal-po-form","po-form-modal"],purchasePicker:["modal-po-product-picker","po-product-picker-modal"],purchaseDetail:["modal-po-detail","po-detail-modal"],purchasePayment:["modal-po-payment","po-payment-modal"],supplierForm:["modal-supplier-form","supplier-form-modal"],supplierDetail:["modal-supplier-detail","supplier-detail-modal"],posHoldPrompt:["pos-hold-prompt-modal","pos-hold-prompt"],posHeldModal:["pos-held-list-modal","pos-held-modal"],posCameraScanner:["pos-camera-scanner-modal","pos-camera-scanner"],posReceiptFallback:["pos-receipt-fallback-modal"],posShiftReceipt:["pos-shift-receipt-modal"],posLogoutShift:["pos-logout-shift-modal"],colorFloat:["color-float-modal"],tempoDetail:["modal-tempo-detail","tempo-detail-modal"],tempoPayment:["modal-tempo-payment","tempo-payment-modal"],tempoPenalty:["modal-tempo-penalty","tempo-penalty-modal"],expenseForm:["modal-expense-form","expense-modal"],expenseReceipt:["modal-expense-receipt-preview"],sessionKicked:["session-kicked-modal"],productFifo:["modal-product-fifo","product-fifo-modal"],productBarcodeLabel:["modal-product-barcode-label","product-barcode-label-modal"],materialEstimator:["modal-material-estimator","material-estimator-modal"],salesReturn:["modal-sales-return","sales-return-modal"],vendorReturn:["modal-vendor-return","vendor-return-modal"],deliveryOrder:["modal-delivery-order","delivery-order-modal"],deliverySignature:["modal-delivery-signature","delivery-signature-modal"]},Ft=e=>{const t=Ea[e];if(!t)return!1;const a=Array.isArray(t)?t:[t];for(const s of a){const n=document.getElementById(s);if(n&&!(n.classList.contains("hidden")||n.classList.contains("pointer-events-none"))&&!(n.style.display==="none"||n.style.visibility==="hidden")){try{const o=window.getComputedStyle(n);if(o.display==="none"||o.visibility==="hidden")continue}catch{}return!0}}return!1},Kt=e=>{switch(e){case"product":if(typeof window.closeProductModal=="function")return window.closeProductModal(!0),!0;break;case"category":if(typeof window.closeCategoryModal=="function")return window.closeCategoryModal(!0),!0;break;case"brand":if(typeof window.closeBrandModal=="function")return window.closeBrandModal(!0),!0;break;case"admin":if(typeof window.closeAdminModal=="function")return window.closeAdminModal(!0),!0;break;case"adminOrder":if(typeof window.closeOrderDetailModal=="function")return window.closeOrderDetailModal(!0),!0;break;case"receipt":if(typeof window.closeReceiptPreviewModal=="function")return window.closeReceiptPreviewModal(!0),!0;break;case"docPreview":if(typeof window.closeDocPreviewModal=="function")return window.closeDocPreviewModal(!0),!0;break;case"scanner":if(typeof window.closeCameraScanner=="function")return window.closeCameraScanner(!0),!0;break;case"confirm":if(typeof window.closeConfirm=="function")return window.closeConfirm(!0),!0;break;case"customerOrder":if(typeof window.closeCustomerOrderDetailModal=="function")return window.closeCustomerOrderDetailModal(!0),!0;break;case"restock":if(typeof window.closeRestockModal=="function")return window.closeRestockModal(!0),!0;break;case"quickprice":if(typeof window.closeQuickPriceModal=="function")return window.closeQuickPriceModal(!0),!0;break;case"member":if(typeof window.closeMemberModal=="function")return window.closeMemberModal(!0),!0;break;case"prompt":if(typeof window.closePrompt=="function")return window.closePrompt(!0),!0;break;case"review":if(typeof window.closeReviewModal=="function")return window.closeReviewModal(!0),!0;break;case"quickmenu":if(typeof window.closeQuickMenuModal=="function")return window.closeQuickMenuModal(!0),!0;break;case"variantPreview":if(typeof window.closeVariantPreviewModal=="function")return window.closeVariantPreviewModal(!0),!0;break;case"terms":if(typeof window.closeTermsModal=="function")return window.closeTermsModal(!0),!0;break;case"privacy":if(typeof window.closePrivacyModal=="function")return window.closePrivacyModal(!0),!0;break;case"askQuestion":if(typeof window.closeAskQuestionModal=="function")return window.closeAskQuestionModal(!0),!0;break;case"quickVariant":if(typeof window.closeQuickVariantSheet=="function")return window.closeQuickVariantSheet(!0),!0;break;case"adminFAQ":if(typeof window.closeAdminFAQModal=="function")return window.closeAdminFAQModal(!0),!0;break;case"printerSettings":if(typeof window.closePrinterSettingsModal=="function")return window.closePrinterSettingsModal(!0),!0;break;case"exitConfirm":if(typeof window.closeExitConfirmModal=="function")return window.closeExitConfirmModal(!0),!0;break;case"appDownload":if(typeof window.closeAppDownloadModal=="function")return window.closeAppDownloadModal(!0),!0;break;case"voucher":if(typeof window.closeVoucherModal=="function")return window.closeVoucherModal(!0),!0;break;case"guide":if(typeof window.closeShoppingGuideModal=="function")return window.closeShoppingGuideModal(!0),!0;break;case"changelog":if(typeof window.closeChangelogModal=="function")return window.closeChangelogModal(!0),!0;break;case"guarantee":if(typeof window.closeQualityGuaranteeModal=="function")return window.closeQualityGuaranteeModal(!0),!0;break;case"security":if(typeof window.closeSecurityModal=="function")return window.closeSecurityModal(!0),!0;break;case"posVariantSheet":if(typeof window.closePOSVariantSheet=="function")return window.closePOSVariantSheet(!0),!0;break;case"posLogin":if(typeof window.closePOSLoginModal=="function")return window.closePOSLoginModal(!0),!0;break;case"posCartDrawer":if(typeof window.closePOSCartDrawer=="function")return window.closePOSCartDrawer(!0),!0;break;case"posPayment":if(typeof window.closePayModal=="function")return window.closePayModal(!0),!0;break;case"posOpenShift":if(typeof window.closePOSOpenShiftModal=="function")return window.closePOSOpenShiftModal(!0),!0;break;case"posCloseShift":if(typeof window.closePOSCloseShiftModal=="function")return window.closePOSCloseShiftModal(!0),!0;break;case"posShiftSummary":if(typeof window.closePOSShiftSummaryModal=="function")return window.closePOSShiftSummaryModal(!0),!0;break;case"posCashMovement":if(typeof window.closePOSCashMovementModal=="function")return window.closePOSCashMovementModal(!0),!0;break;case"clientTempoPay":if(typeof window.closeClientTempoPayModal=="function")return window.closeClientTempoPayModal(!0),!0;if(typeof window.closeClientPaymentModal=="function")return window.closeClientPaymentModal(!0),!0;break;case"clientPaySuccess":if(typeof window.closeClientPaymentSuccessModal=="function")return window.closeClientPaymentSuccessModal(!0),!0;break;case"tempoConfirmations":if(typeof window.closeTempoConfirmationsModal=="function")return window.closeTempoConfirmationsModal(!0),!0;break;case"thermalPreview":return typeof window.closeThermalPrintPreview=="function"?(window.closeThermalPrintPreview(!0),!0):typeof window.closeThermalPreviewModal=="function"?(window.closeThermalPreviewModal(!0),!0):(document.getElementById("utp-thermal-modal")?.remove(),!0);case"htmlPreview":return typeof window.closeHtmlPrintPreview=="function"?(window.closeHtmlPrintPreview(!0),!0):typeof window.closeHtmlPreviewModal=="function"?(window.closeHtmlPreviewModal(!0),!0):(document.getElementById("utp-html-modal")?.remove(),!0);case"posReceiptFallback":return typeof window.closePOSReceiptFallbackModal=="function"?(window.closePOSReceiptFallbackModal(!0),!0):(document.getElementById("pos-receipt-fallback-modal")?.remove(),!0);case"posShiftReceipt":return typeof window.closePOSShiftReceiptModal=="function"?(window.closePOSShiftReceiptModal(!0),!0):(document.getElementById("pos-shift-receipt-modal")?.remove(),!0);case"addStaff":if(typeof window.closeAddStaffModal=="function")return window.closeAddStaffModal(!0),!0;break;case"permissions":if(typeof window.closePermissionsModal=="function")return window.closePermissionsModal(!0),!0;break;case"editStaff":if(typeof window.closeEditStaffModal=="function")return window.closeEditStaffModal(!0),!0;break;case"soFinalize":if(typeof window.closeSOFinalizeModal=="function")return window.closeSOFinalizeModal(!0),!0;if(typeof window.closeFinalizeModal=="function")return window.closeFinalizeModal(!0),!0;break;case"soHistory":if(typeof window.closeSOHistoryModal=="function")return window.closeSOHistoryModal(!0),!0;if(typeof window.closeSoHistoryModal=="function")return window.closeSoHistoryModal(!0),!0;break;case"preRestore":if(typeof window.closePreRestoreModal=="function")return window.closePreRestoreModal(!0),!0;break;case"heroBanner":if(typeof window.closeHeroBannerModal=="function")return window.closeHeroBannerModal(!0),!0;break;case"renewal":if(typeof window.closeRenewalModal=="function")return window.closeRenewalModal(!0),!0;break;case"purchaseForm":if(typeof window.closeCreatePOModal=="function")return window.closeCreatePOModal(!0),!0;break;case"purchasePicker":if(typeof window.closePOProductPicker=="function")return window.closePOProductPicker(!0),!0;break;case"purchaseDetail":if(typeof window.closePurchaseDetailModal=="function")return window.closePurchaseDetailModal(!0),!0;break;case"purchasePayment":if(typeof window.closePurchasePaymentModal=="function")return window.closePurchasePaymentModal(!0),!0;break;case"supplierForm":if(typeof window.closeSupplierFormModal=="function")return window.closeSupplierFormModal(!0),!0;break;case"supplierDetail":if(typeof window.closeSupplierDetailModal=="function")return window.closeSupplierDetailModal(!0),!0;break;case"posHoldPrompt":if(typeof window.closePOSHoldPrompt=="function")return window.closePOSHoldPrompt(!0),!0;break;case"posHeldModal":if(typeof window.closePOSHeldModal=="function")return window.closePOSHeldModal(!0),!0;break;case"posCameraScanner":if(typeof window.closePOSCameraScanner=="function")return window.closePOSCameraScanner(!0),!0;break;case"tempoDetail":if(typeof window.closeTempoDetailModal=="function")return window.closeTempoDetailModal(!0),!0;break;case"tempoPayment":if(typeof window.closeTempoPaymentModal=="function")return window.closeTempoPaymentModal(!0),!0;break;case"tempoPenalty":if(typeof window.closeTempoPenaltyModal=="function")return window.closeTempoPenaltyModal(!0),!0;break;case"expenseForm":if(typeof window.closeExpenseModal=="function")return window.closeExpenseModal(!0),!0;break;case"expenseReceipt":if(typeof window.closeExpenseReceiptPreview=="function")return window.closeExpenseReceiptPreview(!0),!0;break;case"colorFloat":return typeof window._closeColorFloatModal=="function"?(window._closeColorFloatModal(!0),!0):(document.getElementById("color-float-modal")?.remove(),!0);case"posLogoutShift":return document.getElementById("pos-logout-shift-modal")?.remove(),!0;case"sessionKicked":return typeof window.closeSessionKickedModal=="function"?(window.closeSessionKickedModal(!0),!0):(document.getElementById("session-kicked-modal")?.remove(),!0);case"productFifo":if(typeof window.closeProductFifoModal=="function")return window.closeProductFifoModal(!0),!0;break;case"productBarcodeLabel":if(typeof window.closeProductBarcodeLabelModal=="function")return window.closeProductBarcodeLabelModal(!0),!0;break;case"materialEstimator":if(typeof window.closeMaterialEstimatorModal=="function")return window.closeMaterialEstimatorModal(!0),!0;break;case"salesReturn":if(typeof window.closeSalesReturnModal=="function")return window.closeSalesReturnModal(!0),!0;break;case"vendorReturn":if(typeof window.closeVendorReturnModal=="function")return window.closeVendorReturnModal(!0),!0;break;case"deliveryOrder":if(typeof window.closeDeliveryModal=="function")return window.closeDeliveryModal(!0),!0;break;case"deliverySignature":if(typeof window.closeDeliverySignatureModal=="function")return window.closeDeliverySignatureModal(!0),!0;break}const t=Ea[e]||[],a=Array.isArray(t)?t:[t];for(const s of a){const n=document.getElementById(s);if(n){if(["utp-thermal-modal","utp-html-modal","pos-receipt-fallback-modal","pos-shift-receipt-modal","pos-hold-prompt-modal","pos-held-list-modal","pos-camera-scanner-modal","color-float-modal","pos-logout-shift-modal","custom-prompt-container"].includes(s))return n.remove(),!0;if(!n.classList.contains("hidden"))return n.classList.add("hidden"),n.style.display="none",!0}}return!1},Wt=(e=!1)=>{const t=()=>{if(!e&&typeof history<"u"&&history.state&&history.state.modal){Ne=!0,Be&&clearTimeout(Be),Be=setTimeout(()=>{Ne=!1},300);try{history.back()}catch{Ne=!1}}},a=[{id:"utp-thermal-modal",close:()=>{typeof window.closeThermalPrintPreview=="function"?window.closeThermalPrintPreview(!0):typeof window.closeThermalPreviewModal=="function"?window.closeThermalPreviewModal(!0):document.getElementById("utp-thermal-modal")?.remove()}},{id:"utp-html-modal",close:()=>{typeof window.closeHtmlPrintPreview=="function"?window.closeHtmlPrintPreview(!0):typeof window.closeHtmlPreviewModal=="function"?window.closeHtmlPreviewModal(!0):document.getElementById("utp-html-modal")?.remove()}},{id:"pos-receipt-fallback-modal",close:()=>{typeof window.closePOSReceiptFallbackModal=="function"?window.closePOSReceiptFallbackModal(!0):document.getElementById("pos-receipt-fallback-modal")?.remove()}},{id:"pos-shift-receipt-modal",close:()=>{typeof window.closePOSShiftReceiptModal=="function"?window.closePOSShiftReceiptModal(!0):document.getElementById("pos-shift-receipt-modal")?.remove()}},{id:"receipt-preview-modal",isOpen:o=>!o.classList.contains("hidden"),close:()=>{typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):document.getElementById("receipt-preview-modal")?.classList.add("hidden")}},{id:"doc-preview-modal",isOpen:o=>!o.classList.contains("hidden"),close:()=>{typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):document.getElementById("doc-preview-modal")?.classList.add("hidden")}},{id:"modal-expense-receipt-preview",isOpen:o=>!o.classList.contains("hidden"),close:()=>{typeof window.closeExpenseReceiptPreview=="function"?window.closeExpenseReceiptPreview(!0):document.getElementById("modal-expense-receipt-preview")?.classList.add("hidden")}}];for(const o of a){const r=document.getElementById(o.id);if(r&&(!o.isOpen||o.isOpen(r))){const l={"utp-thermal-modal":"thermalPreview","utp-html-modal":"htmlPreview","pos-receipt-fallback-modal":"posReceiptFallback","pos-shift-receipt-modal":"posShiftReceipt","receipt-preview-modal":"receipt","doc-preview-modal":"docPreview","modal-expense-receipt-preview":"expenseReceipt"}[o.id];if(l){const c=Ee.lastIndexOf(l);c>-1&&Ee.splice(c,1)}return o.close(),t(),!0}}const s=["pos-success-modal","pos-recall-confirm-modal","pos-delete-confirm-modal","pos-closed-success-modal","pos-logout-shift-modal","session-kicked-modal"];for(const o of s){const r=document.getElementById(o);if(r)return r.remove(),t(),!0}for(;Ee.length>0;){const o=Ee.pop();if(Ft(o))return Kt(o),t(),!0}const n=["deliveryOrder","deliverySignature","salesReturn","vendorReturn","materialEstimator","productBarcodeLabel","productFifo","sessionKicked","exitConfirm","colorFloat","posLogoutShift","posReceiptFallback","posShiftReceipt","clientPaySuccess","clientTempoPay","tempoConfirmations","posVariantSheet","posLogin","posCartDrawer","posPayment","posOpenShift","posCloseShift","posShiftSummary","posCashMovement","thermalPreview","htmlPreview","addStaff","permissions","editStaff","soFinalize","soHistory","preRestore","heroBanner","renewal","purchasePayment","purchaseDetail","purchasePicker","purchaseForm","supplierDetail","supplierForm","posHoldPrompt","posHeldModal","posCameraScanner","tempoPenalty","tempoPayment","tempoDetail","expenseReceipt","expenseForm","customerOrder","restock","quickprice","member","review","voucher","changelog","appDownload","guarantee","security","quickVariant","variantPreview","confirm","prompt","printerSettings","docPreview","receipt","adminFAQ","adminOrder","admin","brand","category","quickmenu","guide","terms","privacy","scanner","askQuestion","product"];for(const o of n)if(Ft(o))return Kt(o),t(),!0;return!1},Ba=()=>{const e=w("exit-confirm-modal");e&&(e.classList.contains("hidden")&&Mt("exitConfirm"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=w("exit-confirm-modal-box");t&&t.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Vt=(e=!1)=>{Ct("exitConfirm",e,()=>{const t=w("exit-confirm-modal"),a=w("exit-confirm-modal-box");t&&t.classList.add("opacity-0"),a&&a.classList.add("scale-95"),setTimeout(()=>{t&&t.classList.add("hidden")},250)})},ho=()=>{Vt(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri! 🙏"),setTimeout(()=>{try{window.close()}catch{}},400))},yo=()=>{if(Wt(!1))return;if(se==="view-admin"){const t=w("admin-content-view"),a=w("admin-dashboard-view");if(!!(t&&!t.classList.contains("hidden")||a&&a.classList.contains("hidden")||window.history.state&&window.history.state.tab||typeof window.cTab<"u"&&window.cTab)){if(window.history.state&&window.history.state.tab&&window.history.length>1)try{window.history.back();return}catch{}typeof window.openAdminMenu=="function"&&window.openAdminMenu();try{window.history.replaceState({view:"view-admin"},"",window.location.href)}catch{}return}if(typeof window.showConfirm=="function"){const n=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),o=n?"Keluar Panel Owner":"Keluar CMS Toko",r=n?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(o,r,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}return}if(se==="view-pos-cashier"){typeof window.showConfirm=="function"?window.showConfirm("Keluar Mode Kasir","Yakin keluar dari mode POS kasir?",()=>{typeof window.exitPOSMode=="function"?window.exitPOSMode():le("view-catalog")},"Ya, Keluar",!0):le("view-catalog");return}if(se!=="view-catalog"){if(se==="view-payment"){window.history.length>1?window.history.back():le("view-checkout",!0);return}if(se==="view-checkout"){window.history.length>1?window.history.back():le("view-cart",!0);return}if(se==="view-cart"){window.history.length>1?window.history.back():le("view-catalog",!0);return}window.history.length>1?window.history.back():le("view-catalog",!0);return}const e=w("exit-confirm-modal");e&&!e.classList.contains("hidden")?Vt():Ba()},vo=()=>{Ia();try{(!history.state||!history.state.view)&&history.replaceState({view:"view-catalog"},"",window.location.href)}catch{}window.addEventListener("popstate",e=>{if(Ne){Ne=!1,Be&&clearTimeout(Be);return}if(Wt(!0))return;const t=e.state||{},a=t.view||null;if(window.isAdm||window.__localIsAdm)if(a==="view-admin")le("view-admin",!0),t.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(t.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu();else{const n=w("admin-content-view");if(n&&!n.classList.contains("hidden")){history.pushState({view:"view-admin"},"",window.location.href),le("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}if(history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"){const o=typeof window.isOwnerUser=="function"&&window.isOwnerUser(),r=o?"Keluar Panel Owner":"Keluar CMS Toko",l=o?"Apakah Anda yakin ingin keluar dari panel kontrol Owner Toko?":"Apakah Anda yakin ingin keluar dari halaman admin?";window.showConfirm(r,l,()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}}else if(a){let n=a;a==="view-admin"&&(n="view-admin-login"),le(n,!0)}else le("view-catalog",!0)})};if(typeof window<"u"){window.pushModalHistory=Mt,window.requestCloseModal=Ct,window.changeView=le,window.setupHistoryRouter=vo,window.onBottomNavClick=go,window.updateBottomNav=Oa,window.initPullToRefresh=Ia,window.handleAppBackButton=yo,window.closeTopmostOpenModal=Wt,window.isModalOpenInDOM=Ft,window.closeModalByName=Kt,window.openExitConfirmModal=Ba,window.closeExitConfirmModal=Vt,window.confirmExitApp=ho,window.isProgrammaticModalClose=Ne,window.viewHistoryStack=je;try{Object.defineProperty(window,"curViewName",{get:()=>se,set:e=>{se=e},configurable:!0})}catch{}}let Ut=null,Ye=null;const ko=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}ne("Kode "+e+" berhasil disalin!")}catch{ne("Gagal menyalin. Kode: "+e)}},ne=(e,t,a,s)=>{const n=w("toast");if(!n)return;if(!t){const x=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(x)?t="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(x)?t="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(x)?t="warning":/upload|proses|memuat|loading|sedang/.test(x)?t="loading":t="info"}typeof window.triggerHaptic=="function"&&window.triggerHaptic(t==="error"?"error":t==="warning"?"warning":t==="success"?"success":"light");const o=getComputedStyle(document.documentElement),r=o.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",l=o.getPropertyValue("--color-primary").trim()||"#10b981";o.getPropertyValue("--color-primary-dark").trim();const c={success:{icon:"fa-circle-check",label:"Berhasil",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:l,iconBg:`rgba(${r},0.12)`,border:`rgba(${r},0.35)`}},d=c[t]||c.info,f=w("toast-icon");f&&(f.className="fa-solid "+d.icon);const m=w("toast-title");m&&(m.textContent=a||d.label,m.style.display="block",m.style.color=d.accent);const b=w("toast-icon-wrap");b&&(b.style.background=d.iconBg,b.style.color=d.accent),ie("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let g=w("toast-progress");g||(g=document.createElement("div"),g.id="toast-progress",n.appendChild(g)),g.style.background=d.accent,g.style.transition="none",g.style.width="100%",g.style.opacity="0.85",clearTimeout(Ut),n.classList.add("toast-show");const S=s||(t==="loading"?8e3:t==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{g.style.transition=`width ${S}ms linear`,g.style.width="0%"})),Ut=setTimeout(()=>{n.classList.remove("toast-show")},S)},Po=e=>ne(e,"loading","Memproses...",8e3),To=()=>{clearTimeout(Ut);const e=w("toast");e&&e.classList.remove("toast-show")},So=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")};let He=null;const $o=(e,t,a,s=null,n=null)=>{let o=e,r=t,l=a,c=s,d=n;typeof t=="function"&&(l=t,r=e,o=typeof s=="string"?s:"Konfirmasi Tindakan",c=typeof a=="string"?a:null,d===null&&(d=!0));const f=`${o||""} ${typeof r=="string"?r:""}`.toLowerCase(),m=/cetak|print/.test(f),b=/hapus|delete|kosongkan|reset|buang|hilang|batalkan/.test(f);d===null&&(d=b),c||(m?c="Ya, Cetak":d?c="Ya, Hapus":c="Ya, Lanjutkan");let g=null;typeof l!="function"?(g=new Promise(I=>{He=I}),Ye=null):(Ye=l,He=null),ie("confirm-title",o);const S=w("confirm-msg");if(S)if(typeof r=="string"){const I=typeof window.DOMPurify<"u"?window.DOMPurify.sanitize(r,{ADD_ATTR:["class","style"]}):r;S.innerHTML=I}else S.textContent=r||"";const x=w("confirm-yes-btn");x&&(x.innerText=c,d?(x.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-2xl hover:bg-rose-700 active:scale-95 transition-all text-xs sm:text-sm shadow-md shadow-rose-500/30 cursor-pointer",w("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",w("confirm-icon").className="fa-solid fa-triangle-exclamation"):(x.className="flex-1 py-3.5 text-white font-bold rounded-2xl hover:opacity-95 active:scale-95 transition-all text-xs sm:text-sm shadow-sm cursor-pointer",x.style.background="var(--color-primary)",x.style.boxShadow="0 4px 14px rgba(var(--color-primary-rgb), 0.35)",w("confirm-icon-box").className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border shadow-2xs",w("confirm-icon-box").style.background="rgba(var(--color-primary-rgb), 0.12)",w("confirm-icon-box").style.color="var(--color-primary)",w("confirm-icon-box").style.borderColor="rgba(var(--color-primary-rgb), 0.25)",w("confirm-icon").className=m?"fa-solid fa-print":"fa-solid fa-circle-check"));const N=w("custom-confirm-modal");return N&&N.classList.contains("hidden")&&Mt("confirm"),Aa("custom-confirm-modal"),setTimeout(()=>{w("custom-confirm-modal").classList.remove("opacity-0"),w("custom-confirm-box").classList.remove("scale-95")},10),g},jt=(e=!1)=>{if(He){const t=He;He=null,t(!1)}Ct("confirm",e,()=>{w("custom-confirm-modal").classList.add("opacity-0"),w("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>Ma("custom-confirm-modal"),300)})},Ao=()=>{if(He){const e=He;He=null,Ye=null,jt(),setTimeout(()=>{e(!0)},150);return}if(Ye){const e=Ye;Ye=null,jt(),setTimeout(()=>{e()},150)}},Mo=(e,t="",a=null)=>{let s=null,n=null;typeof a!="function"&&(n=new Promise(b=>{s=b}));const o=t!=null?String(t):"",r=o.length>50||o.includes(`
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
    `,document.body.appendChild(d);const f=d.querySelector("div");Mt("prompt"),setTimeout(()=>{d.classList.remove("opacity-0"),f.classList.remove("scale-95")},10);const m=d.querySelector("#prompt-input");return m&&(m.focus(),m.select(),m.onkeydown=b=>{b.key==="Enter"&&(!r||b.ctrlKey)?(b.preventDefault(),d.querySelector("#prompt-ok")?.click()):b.key==="Escape"&&(b.preventDefault(),window.closePrompt())}),window.closePrompt=(b=!1)=>{if(!(!d||!d.parentNode)){if(s){const g=s;s=null,g(null)}Ct("prompt",b,()=>{d.classList.add("opacity-0"),f.classList.add("scale-95"),setTimeout(()=>d.remove(),300),window.closePrompt=null})}},d.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),d.querySelector("#prompt-ok").onclick=()=>{let b=m.value;if(s){const g=s;s=null,window.closePrompt(),g(b)}else window.closePrompt(),typeof a=="function"&&a(b)},n},Co=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=ko;window.showToast=ne;window.showToastLoading=Po;window.hideToast=To;window.toggleTheme=So;window.showConfirm=$o;window.closeConfirm=jt;window.executeConfirm=Ao;window.customPrompt=Mo;window.checkProPrint=Co;const rt="utp-thermal-modal",gt="utp-html-modal";let fe=null,Jt=null,ot=null,nt=null;const ht=()=>{if(document.getElementById("utp-style"))return;const e=document.createElement("style");e.id="utp-style",e.textContent=`
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
    `,document.head.appendChild(e)},Ha=()=>{nt===null&&(nt=document.body.style.overflow||"",document.body.style.overflow="hidden")},Yt=()=>{nt!==null&&!document.getElementById(rt)&&!document.getElementById(gt)&&(document.body.style.overflow=nt,nt=null)},Fa=(e,t)=>{Lt(),ot=a=>{const s=a.target&&a.target.tagName||"";a.key==="Escape"?(a.preventDefault(),t()):a.key==="Enter"&&!/INPUT|TEXTAREA|SELECT/.test(s)&&(a.preventDefault(),e())},document.addEventListener("keydown",ot,!0)},Lt=()=>{ot&&document.removeEventListener("keydown",ot,!0),ot=null},Lo=e=>{const t=e.deviceType||"rawbt",a=/android/i.test(navigator.userAgent||"");return t==="rawbt"?a||window.AndroidNativeApp?"RawBT Android":"Printer Browser":t==="bluetooth"?"Bluetooth":t==="usb"?"USB OTG":t==="network"?"WiFi / LAN":"Printer Sistem"},Do=e=>{if(e.html&&/<[a-z][\s\S]*>/i.test(e.html))return`<div class="utp-html-rendered" style="white-space:normal;width:100%;">${e.html}</div>`;let t=Array.isArray(e.previewLines)&&e.previewLines.length?e.previewLines:null;t||(t=String(e.plainText||"").split(`
`).map(s=>({t:s,a:"left",b:!1,s:"normal"})));const a=[...t];for(;a.length>1&&!String(a[a.length-1].t||"").trim();)a.pop();return a.map(s=>{if(s.type==="two-column")return`<div class="utp-row ${s.b?"font-bold":""}"><div class="utp-col-left">${i(s.left)}</div><div class="utp-col-right">${i(s.right)}</div></div>`;if(s.type==="separator")return'<div class="utp-separator"></div>';if(s.type==="double-separator")return'<div class="utp-double-separator"></div>';if(s.isBarcode||s.s==="barcode"||s.type==="barcode")return`
            <div class="utp-barcode-wrap" style="text-align:center;">
                <div class="utp-barcode-bars mx-auto" aria-hidden="true"></div>
                <div class="utp-barcode-code">*${i(s.code||s.t||"")}*</div>
            </div>`;const n=i(String(s.t??""))||"&nbsp;",o=s.a==="center"?"center":s.a==="right"?"right":"left",r=s.b?800:400;return s.s==="title"||s.s==="wide"?`<div class="utp-line utp-title" style="text-align:${o};font-weight:${r}">${n}</div>`:s.s==="tall"||s.s==="total"?`<div class="utp-line utp-tall" style="text-align:${o};font-weight:${r}"><span>${n}</span></div>`:`<div class="utp-line" style="text-align:${o};font-weight:${r}">${n}</div>`}).join("")},Ka=()=>{const e=fe;if(!e)return;const t=q(),a=Me(t.paperSize),s=a>=40,n=Array.isArray(e.previewLines)?e.previewLines.length:String(e.plainText||"").split(`
`).length,o=typeof e.rebuild=="function"?`
        <div class="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70" role="group" aria-label="Ukuran kertas">
            <button type="button" id="utp-paper-58" onclick="window.setThermalPreviewPaper('58mm')" class="utp-seg-btn ${s?"text-slate-600 dark:text-slate-300":"is-active"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">58mm</button>
            <button type="button" id="utp-paper-80" onclick="window.setThermalPreviewPaper('80mm')" class="utp-seg-btn ${s?"is-active":"text-slate-600 dark:text-slate-300"} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">80mm</button>
        </div>`:"",r=`
    <div id="${rt}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-thermal-title" onclick="if(event.target===this) window.closeThermalPrintPreview()">
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
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-print text-slate-400"></i>${i(Lo(t))}</span>
                    <span class="utp-chip bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-check"></i>${n} baris</span>
                </div>
                ${o}
            </div>

            <div class="utp-canvas flex-1 overflow-auto px-3 py-5 sm:px-5 custom-scrollbar">
                <div class="utp-paper mx-auto" style="width:${a}ch;">
                    ${Do(e)}
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
    </div>`;document.getElementById(rt)?.remove(),document.body.insertAdjacentHTML("beforeend",r),setTimeout(()=>document.getElementById("utp-thermal-confirm")?.focus({preventScroll:!0}),60)},Ua=e=>!e||typeof e.dispatch!="function"?!1:(ht(),fe={...e},Ka(),Ha(),Fa(()=>ja(),()=>Dt()),typeof window.pushModalHistory=="function"&&window.pushModalHistory("thermalPreview"),!0),Dt=(e=!1)=>{const t=()=>{const a=fe;if(document.getElementById(rt)?.remove(),fe=null,Lt(),Yt(),a&&typeof a.onCancel=="function")try{a.onCancel()}catch{}};typeof window.requestCloseModal=="function"?window.requestCloseModal("thermalPreview",e,t):t()},ja=()=>{const e=fe;if(e){if(fe=null,document.getElementById(rt)?.remove(),Lt(),Yt(),typeof e.onConfirm=="function")try{e.onConfirm()}catch(t){console.warn("[PrintPreview] onConfirm error:",t)}e.dispatch(e.base64,e.plainText,e.html||"")}},No=e=>{if(!(!fe||typeof fe.rebuild!="function")){lt({paperSize:e});try{const t=fe.rebuild();t&&(fe.base64=t.base64,fe.plainText=t.plainText,fe.previewLines=t.previewLines,fe.html=t.html||"")}catch(t){console.warn("[PrintPreview] Gagal rebuild payload:",t)}Ka(),ne(`Ukuran kertas diubah ke ${e}`)}},Ro=()=>{Dt(),typeof window.openPrinterSettingsModal=="function"&&(window.openPrinterSettingsModal(),ne("Atur printer, lalu tekan Cetak lagi untuk melihat preview terbaru."))},Oo=(e={})=>{if(!e.html)return!1;ht(),Jt={...e};const t=(e.paper||"a4")==="a4";document.getElementById(gt)?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="${gt}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-html-title" onclick="if(event.target===this) window.closeHtmlPrintPreview()">
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
    </div>`);const a=document.getElementById("utp-html-frame");if(a){const s=a.contentWindow.document;s.open(),s.write(e.html),s.close()}return Ha(),Fa(()=>_a(),()=>Nt()),typeof window.pushModalHistory=="function"&&window.pushModalHistory("htmlPreview"),!0},Nt=(e=!1)=>{const t=()=>{document.getElementById(gt)?.remove(),Jt=null,Lt(),Yt()};typeof window.requestCloseModal=="function"?window.requestCloseModal("htmlPreview",e,t):t()},_a=()=>{const e=document.getElementById("utp-html-frame");if(!(!e||!Jt)){if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){try{const t=e.contentWindow.document,a=Array.from(t.querySelectorAll("style")).map(n=>n.outerHTML).join("");let s=document.getElementById("a4-print-section");s||(s=document.createElement("div"),s.id="a4-print-section",document.body.appendChild(s)),s.innerHTML=a+t.body.innerHTML,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500)}catch(t){console.warn("[PrintPreview] Native print error:",t)}Nt();return}try{e.contentWindow.focus(),e.contentWindow.print()}catch(t){console.warn("[PrintPreview] iframe print error:",t),ne("Gagal membuka dialog cetak. Coba lagi.","error")}}};typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ht,{once:!0}):ht());window.openThermalPrintPreview=Ua;window.closeThermalPrintPreview=Dt;window.closeThermalPreviewModal=Dt;window.confirmThermalPrint=ja;window.setThermalPreviewPaper=No;window.openPrinterSettingsFromPreview=Ro;window.openHtmlPrintPreview=Oo;window.closeHtmlPrintPreview=Nt;window.closeHtmlPreviewModal=Nt;window.confirmHtmlPrint=_a;const M=e=>"Rp "+Math.round(Number(e||0)).toLocaleString("id-ID"),Ze=e=>Math.round(Number(e||0)).toLocaleString("id-ID"),Qt=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(3).replace(/\.?0+$/,"")},E=e=>e?String(e).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"").replace(/[\r\t]/g," ").replace(/[^\x20-\x7E\n]/g," "):"",K=(e,t)=>{if(!e)return[];const a=E(e).replace(/ +/g," ").trim();if(!a)return[];if(a.length<=t)return[a];const s=a.split(" "),n=[];let o="";for(const r of s)if(r)if(r.length>t){o&&(n.push(o),o="");for(let l=0;l<r.length;l+=t){const c=r.substring(l,l+t);c.length===t?n.push(c):o=c}}else(o?o.length+1+r.length:r.length)<=t?o=o?o+" "+r:r:(n.push(o),o=r);return o&&n.push(o),n},ge=(e,t=!1)=>{const a=e?new Date(e):new Date,s=String(a.getDate()).padStart(2,"0"),n=String(a.getMonth()+1).padStart(2,"0"),o=t?a.getFullYear():String(a.getFullYear()).slice(-2),r=String(a.getHours()).padStart(2,"0"),l=String(a.getMinutes()).padStart(2,"0");return`${s}/${n}/${o} ${r}:${l}`},Zt=(e,t,a,s=!1)=>{const n=E(String(e||"")).trimEnd(),o=E(String(t||"")).trim(),r=a-n.length-o.length;if(r>=0)return[n+" ".repeat(r)+o];if(s){const d=Math.max(0,a-o.length-1),f=n.substring(0,d).trimEnd(),m=Math.max(1,a-f.length-o.length);return[f+" ".repeat(m)+o]}const l=K(n,a),c=l[l.length-1]||"";if(c.length+1+o.length<=a){const d=a-c.length-o.length;return l[l.length-1]=c+" ".repeat(d)+o,l}else{const d=Math.max(0,a-o.length);return[...l," ".repeat(d)+o]}},ze=e=>e?i(String(e)).replace(/^ +/gm,t=>"&nbsp;".repeat(t.length)):"";class Fe{constructor(t=32){this.cols=Number(t)||32,this.bytes=[],this.plainLines=[],this.previewLines=[],this.items=[],this._bold=!1,this._size="normal"}init(){return this.bytes.push(27,64),this}align(t="left"){const a=t==="center"?1:t==="right"?2:0;return this.bytes.push(27,97,a),this}bold(t=!0){return this.bytes.push(27,69,t?1:0),this._bold=!!t,this}size(t="normal"){return this._size=t||"normal",t==="title"?this.bytes.push(29,33,17):t==="tall"||t==="total"?this.bytes.push(29,33,1):t==="wide"?this.bytes.push(29,33,16):this.bytes.push(29,33,0),this}text(t){if(!t)return this;const a=E(t);for(let s=0;s<a.length;s++)this.bytes.push(a.charCodeAt(s));return this}line(t="",a="left"){this.align(a),this.text(t),this.bytes.push(10),this.plainLines.push(t);const s=E(t);return this.previewLines.push({t:s,a,b:this._bold,s:this._size}),this.items.push({type:"line",text:s,align:a,bold:this._bold,size:this._size}),this}centered(t=""){return K(t,this.cols).forEach(s=>this.line(s,"center")),this}twoColumn(t="",a="",s=!1,n=!1){s&&this.bold(!0);const o=Zt(t,a,this.cols,n);o.forEach(c=>{this.align("left"),this.text(c),this.bytes.push(10),this.plainLines.push(c)});const r=E(String(t||"")),l=E(String(a||""));return this.previewLines.push({type:"two-column",left:r,right:l,t:o[0],a:"left",b:!!s,s:this._size}),this.items.push({type:"two-column",left:r,right:l,bold:!!s,size:this._size}),s&&this.bold(!1),this}itemRow(t){const a=t.variantName?` (${t.variantName}${t.colorCode?" "+t.colorCode:""})`:"",s=(t.name||"Barang")+a+(t.poTime?" [PO]":"");this.bold(!0),K(s,this.cols).forEach(d=>this.line(d,"left")),this.bold(!1);const o=t.effectivePrice||t.price||0,r=t.subtotal!==void 0?t.subtotal:parseFloat(t.qty||1)*o,l=`  ${Qt(t.qty)} ${t.unit||"pcs"} x ${Ze(o)}`,c=Ze(r);return this.twoColumn(l,c,!1,!1),t.discount&&t.discount>0&&this.twoColumn("  (Pot. Diskon)",`-${Ze(t.discount)}`,!1,!0),t.poTime&&this.line(`  * Estimasi PO: ${t.poTime}`,"left"),this}separator(t="-"){const a=t.repeat(this.cols);return this.align("left"),this.text(a),this.bytes.push(10),this.plainLines.push(a),this.previewLines.push({type:"separator",t:a,a:"left",b:!1,s:"normal"}),this.items.push({type:"separator",char:t}),this}doubleSeparator(){const t="=".repeat(this.cols);return this.align("left"),this.text(t),this.bytes.push(10),this.plainLines.push(t),this.previewLines.push({type:"double-separator",t,a:"left",b:!1,s:"normal"}),this.items.push({type:"double-separator"}),this}feed(t=3){this.bytes.push(27,100,Math.max(1,t));for(let a=0;a<t;a++)this.plainLines.push(""),this.previewLines.push({t:"",a:"left",b:!1,s:"normal"});return this.items.push({type:"feed",lines:t}),this}cut(){return this.bytes.push(29,86,65,3),this}openDrawer(){return this.bytes.push(27,112,0,25,250),this}barcode(t,a="CODE128",s=45){if(!t)return this;const n=E(String(t)).trim();if(!n)return this;if(this.align("center"),this.bytes.push(29,104,Math.max(30,Math.min(100,s))),this.bytes.push(29,119,2),this.bytes.push(29,72,0),a==="CODE39"){this.bytes.push(29,107,4);for(let o=0;o<n.length;o++)this.bytes.push(n.charCodeAt(o));this.bytes.push(0)}else{const o=[];for(let r=0;r<n.length;r++)o.push(n.charCodeAt(r));this.bytes.push(29,107,73,o.length+2,123,66,...o)}return this.plainLines.push(`[BARCODE: ${n}]`),this.previewLines.push({type:"barcode",code:n,t:n,a:"center",b:!1,s:"barcode",isBarcode:!0}),this.items.push({type:"barcode",code:n}),this}toBase64(){const t=new Uint8Array(this.bytes);let a="";const s=t.length,n=8192;for(let o=0;o<s;o+=n){const r=t.subarray(o,o+n);a+=String.fromCharCode.apply(null,r)}return btoa(a)}toPlainText(){return this.plainLines.join(`
`)}toHtml(){let t="";for(const a of this.items)if(a.type==="line"){const s=a.align==="center"?"utp-align-center":a.align==="right"?"utp-align-right":"utp-align-left",n=a.bold?"font-bold":"";let o="";a.size==="title"||a.size==="wide"?o="utp-title":(a.size==="tall"||a.size==="total")&&(o="utp-tall"),!a.text||!a.text.trim()?t+='<div class="utp-empty-line">&nbsp;</div>':t+=`<div class="utp-line ${s} ${n} ${o}">${ze(a.text)}</div>`}else if(a.type==="two-column"){const s=a.bold?"font-bold":"";let n="";a.size==="title"||a.size==="wide"?n="utp-title":(a.size==="tall"||a.size==="total")&&(n="utp-tall"),t+=`<div class="utp-row ${s} ${n}"><div class="utp-col-left">${ze(a.left)}</div><div class="utp-col-right">${ze(a.right)}</div></div>`}else if(a.type==="separator")t+='<div class="utp-separator"></div>';else if(a.type==="double-separator")t+='<div class="utp-double-separator"></div>';else if(a.type==="barcode")t+=`
                <div class="utp-barcode-wrap">
                    <div class="utp-barcode-bars" aria-hidden="true"></div>
                    <div class="utp-barcode-code">*${i(a.code)}*</div>
                </div>`;else if(a.type==="feed"){const s=Math.max(1,a.lines||1)*6;t+=`<div style="height:${s}px;"></div>`}return t}}const Ke=(e,t="",a="",s={})=>{if(!s.skipPreview)return Ua({base64:e,plainText:t,html:a,previewLines:s.previewLines,title:s.title,rebuild:s.rebuild,onConfirm:s.onConfirm,onCancel:s.onCancel,dispatch:(n,o,r)=>ba(n,o,r)});if(typeof s.onConfirm=="function")try{s.onConfirm()}catch{}return ba(e,t,a)},ba=(e,t="",a="")=>{const s=/android/i.test(navigator.userAgent||"");if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function")try{return window.AndroidNativeApp.printRawBT(e),ne("Mencetak struk via RawBT..."),!0}catch(n){console.warn("[RawBT] AndroidNativeApp error, mencoba intent...",n)}if(s)try{ne("Membuka Printer RawBT...");const n=`intent:base64,${e}#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;end;`;return window.location.href=n,setTimeout(()=>{if(!document.hidden)try{window.location.href=`rawbt:base64,${e}`}catch{}},800),!0}catch(n){console.warn("[RawBT] Intent trigger failed:",n)}return ne("Mencetak struk kasir..."),Rt(a||t),!0},Rt=e=>{const t=q(),s=Me(t.paperSize)>=40,n=s?"80mm":"58mm",o=s?"68mm":"44mm",r=s?"10.5px":"8.8px",l=typeof e=="string"&&e.includes("<")&&e.includes(">");let c=e;l||(c=String(e||"").split(`
`).map(f=>{const m=f.trim();if(!m)return'<div class="utp-empty-line">&nbsp;</div>';if(/^[-]{8,}$/.test(m))return'<div class="utp-separator"></div>';if(/^[=]{8,}$/.test(m))return'<div class="utp-double-separator"></div>';if(/^\[BARCODE:\s*(.+)\]$/i.test(m)){const g=m.replace(/^\[BARCODE:\s*/i,"").replace(/\]$/,"").trim();return`
                <div class="utp-barcode-wrap">
                    <div class="utp-barcode-bars" aria-hidden="true"></div>
                    <div class="utp-barcode-code">*${i(g)}*</div>
                </div>`}const b=f.match(/^(\s{0,4}.+?)\s{3,}(.+)$/);return b&&b[1]&&b[2]?`<div class="utp-row"><div class="utp-col-left">${ze(b[1])}</div><div class="utp-col-right">${ze(b[2])}</div></div>`:`<div class="utp-line">${ze(f)}</div>`}).join(""));try{let d=document.getElementById("thermal-print-iframe");d&&d.remove(),d=document.createElement("iframe"),d.id="thermal-print-iframe",d.style.position="fixed",d.style.right="0",d.style.bottom="0",d.style.width="0",d.style.height="0",d.style.border="0",d.style.visibility="hidden",d.style.zIndex="-9999",document.body.appendChild(d);const f=d.contentDocument||d.contentWindow.document;f.open(),f.write(`<!DOCTYPE html>
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
    ${c}
  </div>
</body>
</html>`),f.close(),setTimeout(()=>{try{d.contentWindow.focus(),d.contentWindow.print()}catch(m){console.warn("[RawBT] Iframe print gagal, fallback ke direct print:",m),wa(c,n,o)}},120);return}catch(d){console.warn("[RawBT] Gagal membuat isolated print iframe:",d)}wa(c,n,o)},wa=(e,t,a)=>{let s=w("thermal-print-section");s||(s=document.createElement("div"),s.id="thermal-print-section",document.body.appendChild(s));const n=t==="80mm";s.className=n?"paper-80mm":"paper-58mm",document.body.classList.remove("paper-58mm","paper-80mm"),document.body.classList.add(n?"paper-80mm":"paper-58mm");let o=document.getElementById("dynamic-print-page-style");o||(o=document.createElement("style"),o.id="dynamic-print-page-style",document.head.appendChild(o)),o.innerHTML=`@media print { @page { margin: 0 !important; size: ${t} auto; } html, body { width: ${a} !important; margin: 0 !important; } }`,s.innerHTML=`
        <div class="utp-thermal-wrap" style="width:${a};max-width:${a};font-family:'Courier New',Courier,monospace;font-size:${n?"10.5px":"8.8px"};line-height:1.25;color:#000;background:#fff;padding:0 ${n?"2.5mm":"1.5mm"} 4mm ${n?"1mm":"0.5mm"};margin:0;box-sizing:border-box;">
            ${e}
        </div>
    `,setTimeout(()=>{window.print()},120)},za=()=>{if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.openRawBT=="function"){window.AndroidNativeApp.openRawBT();return}/android/i.test(navigator.userAgent||"")?(window.location.href="intent:#Intent;package=ru.a402d.rawbtprinter;end;",setTimeout(()=>{document.hidden||(window.location.href="https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter")},1200)):window.open("https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter","_blank")},yt=(e,t=null)=>{const a=t||q(),s=Me(a.paperSize),n=s>=40,o=new Fe(s);o.init(),a.openCashDrawer&&e.payment?.method==="cash"&&o.openDrawer();const r=E(a.headerText||p.store?.name||"TOKO PUTRI").trim(),l=E(a.storeAddress!==void 0&&a.storeAddress!==""?a.storeAddress:p.store?.address||"").trim(),c=E(a.storePhone!==void 0&&a.storePhone!==""?a.storePhone:p.store?.wa||"").trim(),d=Math.floor(s/2);r.length<=d?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),K(r.toUpperCase(),s).forEach(P=>o.line(P,"center")),o.size("normal").bold(!1)),a.showAddress!==!1&&l&&K(l,s).forEach(P=>o.line(P,"center")),a.showPhone!==!1&&c&&o.line(`WA: ${c}`,"center");const f=e.payment?.taxNpwp||p.store?.taxNpwp;a.showNpwp!==!1&&f&&o.line(`NPWP: ${f}`,"center"),o.separator("-");const m=ge(e.dateMs||Date.now(),n),b=`#${e.txId}`;o.twoColumn(`No : ${b}`,m,!1,!0);const g=E(e.cashierName||"Kasir").trim(),S=!!(e.customer?.isMember||e.customerType==="Member"),x=E(e.customer?.name||"Umum").trim(),N=S?`${x} (Member)`:x,I=`Ksr: ${g}`,U=`Plg: ${N}`;if(I.length+1+U.length<=s?o.twoColumn(I,U,!1,!1):(o.line(I,"left"),o.line(U,"left")),e.customer?.phone&&o.line(`HP : ${e.customer.phone}`,"left"),S&&e.customer?.memberId&&o.line(`ID : ${e.customer.memberId}`,"left"),o.separator("-"),(e.items||[]).forEach(P=>{o.itemRow(P)}),o.separator("-"),o.twoColumn("Subtotal",M(e.subtotal)),(e.globalDiscount||0)>0){const P=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";o.twoColumn(P,`- ${M(e.globalDiscount)}`)}(e.pointDiscount||0)>0&&o.twoColumn(`Diskon Poin (${e.pointsRedeemed||0} Poin)`,`- ${M(e.pointDiscount)}`),e.claimedReward&&e.claimedReward.name&&(o.separator("-"),o.bold(!0).line(`[KLAIM HADIAH: ${E(e.claimedReward.name)}]`,"left").bold(!1),o.twoColumn("Poin Reward Ditukar",`-${e.claimedReward.pointsCost||0} Poin`));const D=it(e);if(D.hasPpn){const P=D.ppnAmount>0?`${D.isInclusive?"":"+ "}${M(D.ppnAmount)}`:"Rp 0";o.twoColumn(D.ppnLabel,P)}o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL",M(e.total)).size("normal").bold(!1),o.doubleSeparator();const H=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",T=H?"PUTRI PAYLATER":(e.payment?.method||"CASH").toUpperCase();if(o.twoColumn("Metode Bayar",T),e.payment?.method==="cash")o.twoColumn("Bayar Tunai",M(e.payment.paid)),o.bold(!0).twoColumn("Kembalian",M(e.payment.change)).bold(!1);else if(e.payment?.method==="transfer")e.payment?.bank&&o.twoColumn("Bank Penerima",e.payment.bank);else if(e.payment?.method==="qris")o.twoColumn("Kanal QRIS","QRIS Dinamis (Lunas)");else if(e.payment?.method==="tempo"){if(H){if(o.twoColumn("Limit Terpakai",M(e.payment?.paylaterUsed||e.paylaterUsed||e.total-(e.payment?.tempoDp??0))),e.payment?.paylaterMonths){const P=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${P} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${M(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${M(e.payment.paylaterServiceFee)}`)}if(o.twoColumn("Uang Muka (DP)",M(e.payment?.tempoDp??e.payment?.dp??0)),o.bold(!0).twoColumn(H?"Tagihan PayLater":"Sisa Piutang",M(e.payment.tempoBalance||0)).bold(!1),H&&e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${M(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),e.payment.tempoDueDate){const P=typeof e.payment.tempoDueDate=="number"?new Date(e.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e.payment.tempoDueDate;o.line(`Jatuh Tempo: ${P}`,"left")}}a.showPoints&&(e.pointsEarned>0||(e.pointsRedeemed||0)>0)&&(o.separator("-"),e.pointsEarned>0&&o.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),(e.pointsRedeemed||0)>0&&o.twoColumn("Poin Ditukar",`-${e.pointsRedeemed} Poin`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&o.twoColumn("Sisa Saldo Poin",`${e.finalMemberPoints} Poin`)),a.showBarcode&&(o.separator("-"),o.barcode(`POS-${e.txId}`,"CODE128",45),o.line(`*POS-${e.txId}*`,"center"),o.line("(SCAN DI KASIR)","center")),o.separator("-");const R=E(a.footerText||"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.").trim();R&&K(R,s).forEach(P=>o.line(P,"center"));const W=E(a.footerPolicyNote!==void 0?a.footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi.").trim();return W&&(o.line("","center"),K(W,s).forEach(P=>o.line(P,"center"))),o.feed(a.feedLines||3),a.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},vt=(e,t=!1,a=null)=>{const s=a||q(),n=Me(s.paperSize),o=n>=40,r=new Fe(n);r.init();const l=E(s.headerText||p.store?.name||"TOKO PUTRI").trim(),c=E(p.store?.address||"").trim(),d=E(p.store?.wa||"").trim(),f=Math.floor(n/2);l.length<=f?(r.align("center").bold(!0).size("title").line(l.toUpperCase(),"center"),r.size("normal").bold(!1)):(r.align("center").bold(!0).size("tall"),K(l.toUpperCase(),n).forEach(h=>r.line(h,"center")),r.size("normal").bold(!1)),c&&K(c,n).forEach(h=>r.line(h,"center")),d&&r.line(`WA: ${d}`,"center"),r.separator("-");const m=o?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **";r.bold(!0).line(m,"center").bold(!1),r.separator("-");const b=ge(e.startTime,o),g=ge(e.endTime||Date.now(),o);r.twoColumn("Shift ID",`#${e.shiftNo||e.id||"-"}`,!1,!0),r.twoColumn("Kasir",(e.cashierName||"Kasir").substring(0,o?20:12),!1,!0),r.twoColumn("Mulai",b,!1,!0),r.twoColumn("Selesai",g,!1,!0),r.separator("-");const S=parseFloat(e.startingCash)||0,x=parseFloat(e.cashSales)||0,N=parseFloat(e.qrisSales)||0,I=parseFloat(e.bankSales||e.transferSales)||0,U=parseFloat(e.tempoSales)||0,D=parseFloat(e.cashIn)||0,H=parseFloat(e.cashOut)||0,T=parseFloat(e.totalSales)||x+N+I+U,R=e.txCount||0;r.bold(!0).line("RINGKASAN PENJUALAN","left").bold(!1),r.twoColumn("Modal Awal Laci",M(S)),r.twoColumn("Penjualan Tunai",M(x)),N>0&&r.twoColumn("Penjualan QRIS",M(N)),I>0&&r.twoColumn("Penjualan Transfer",M(I)),U>0&&r.twoColumn("Penjualan Tempo",M(U)),D>0&&r.twoColumn("Kas Masuk (In)",`+${M(D)}`),H>0&&r.twoColumn("Kas Keluar (Out)",`-${M(H)}`),r.separator("-"),r.twoColumn("Total Transaksi",`${R} Trx`),r.bold(!0).size("tall").twoColumn("TOTAL OMSET",M(T)).size("normal").bold(!1),r.doubleSeparator();const W=Math.max(0,S+x+D-H);if(t)r.bold(!0).line("STATUS KAS LACI SAAT INI","left").bold(!1),r.twoColumn("Uang Kas Seharusnya",M(W)),r.separator("-");else{const h=e.actualCash!==void 0?parseFloat(e.actualCash):W,u=h-W,F=u===0?"PAS (0)":u>0?`+${M(u)}`:`-${M(Math.abs(u))}`;r.bold(!0).line("REKONSILIASI KAS FISIK","left").bold(!1),r.twoColumn("Kas Diharapkan",M(W)),r.twoColumn("Kas Fisik Aktual",M(h)),r.bold(!0).twoColumn("Selisih Kas",F,!0).bold(!1),e.closingNotes&&K(`Catatan: ${e.closingNotes}`,n).forEach(L=>r.line(L,"left")),r.separator("-"),r.line("Verifikasi & Tanda Tangan:","left"),r.feed(2);const v=Math.floor(n/2),C="( Kasir )",B=o?"( Supervisor/Owner )":"( Supervisor )",$=Math.max(0,Math.floor((v-C.length)/2)),A=Math.max(0,Math.floor((v-B.length)/2)),O=" ".repeat($)+C+" ".repeat(Math.max(1,v-$-C.length))+" ".repeat(A)+B;r.line(O,"left"),r.separator("-")}const P=s.footerText||"Laporan Kasir Resmi Toko Putri";return K(P,n).forEach(h=>r.line(h,"center")),r.feed(s.feedLines||3),s.autoCut&&r.cut(),{base64:r.toBase64(),plainText:r.toPlainText(),previewLines:r.previewLines,html:r.toHtml()}},kt=(e,t=null)=>{const a=t||q(),s=Me(a.paperSize),n=s>=40,o=new Fe(s);o.init();const r=E(a.headerText||p.store?.name||"TOKO PUTRI").trim(),l=E(a.storeAddress!==void 0&&a.storeAddress!==""?a.storeAddress:p.store?.address||"").trim(),c=E(a.storePhone!==void 0&&a.storePhone!==""?a.storePhone:p.store?.wa||"").trim(),d=Math.floor(s/2);r.length<=d?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),K(r.toUpperCase(),s).forEach(R=>o.line(R,"center")),o.size("normal").bold(!1)),a.showAddress!==!1&&l&&K(l,s).forEach(R=>o.line(R,"center")),a.showPhone!==!1&&c&&o.line(`WA: ${c}`,"center");const f=e.payment?.taxNpwp||p.store?.taxNpwp;a.showNpwp!==!1&&f&&o.line(`NPWP: ${f}`,"center"),o.separator("-");const m=ge(e.dateString||e.dateMs||Date.now(),n);o.twoColumn(`Order: #${e.orderId}`,m,!1,!0);const b=(e.customer?.name||"Guest").substring(0,n?18:11),g=e.customer?.deliveryMethod==="delivery"?"Kirim":"Ambil";o.twoColumn(`Plg  : ${b}`,`Tipe: ${g}`,!1,!0),e.customer?.phone&&o.line(`HP   : ${e.customer.phone}`,"left"),e.customer?.note&&K(`Cat  : ${e.customer.note}`,s).forEach(R=>o.line(R,"left")),o.separator("-");const S=Array.isArray(e.items)?e.items:Array.isArray(e.cart)?e.cart:[];S.length>0?S.forEach(R=>{o.itemRow(R)}):o.line("- Tidak ada rincian barang -","center"),o.separator("-");const x=it(e),N=x.subtotal,I=x.shipping,U=x.grandTotal;if(o.twoColumn("Subtotal",M(N)),(e.customer?.deliveryMethod==="delivery"||e.deliveryMethod==="delivery")&&o.twoColumn("Ongkos Kirim",M(I)),x.productDiscount&&o.twoColumn("Potongan Harga",`- ${M(x.productDiscount)}`),x.shippingDiscount&&o.twoColumn("Potongan Ongkir",`- ${M(x.shippingDiscount)}`),x.pointDiscount>0&&o.twoColumn("Potongan Poin",`- ${M(x.pointDiscount)}`),x.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${M(x.paylaterAdminFee)}`),x.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${M(x.paylaterServiceFee)}`),x.hasPpn){const R=x.ppnAmount>0?`${x.isInclusive?"":"+ "}${M(x.ppnAmount)}`:"Rp 0";o.twoColumn(x.ppnLabel,R)}o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL",M(U)).size("normal").bold(!1),o.doubleSeparator();const D=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater";if(o.twoColumn("Metode Bayar",D?"PUTRI PAYLATER":(e.payment?.method||"Tunai").toUpperCase()),D){if(e.payment?.paylaterMonths){const R=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${R} (${e.payment.paylaterMonths}x)`)}e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${M(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Layanan",`+ ${M(e.payment.paylaterServiceFee)}`),e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${M(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`)}a.showPoints&&(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(o.separator("-"),e.pointsEarned>0&&o.twoColumn("Poin Didapat",`+${e.pointsEarned} Poin`,!0),e.finalMemberPoints!==void 0&&o.twoColumn("Saldo Poin",`${e.finalMemberPoints} Poin`)),a.showBarcode&&(o.separator("-"),o.barcode(`ORDER-${e.orderId}`,"CODE128",45),o.line(`*ORDER-${e.orderId}*`,"center"),o.line("(SCAN DI KASIR)","center")),o.separator("-");const H=E(a.footerText||"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.").trim();H&&K(H,s).forEach(R=>o.line(R,"center"));const T=E(a.footerPolicyNote!==void 0?a.footerPolicyNote:"Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi.").trim();return T&&(o.line("","center"),K(T,s).forEach(R=>o.line(R,"center"))),o.feed(a.feedLines||3),a.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},Pt=(e,t=null)=>{const a=t||q(),s=Me(a.paperSize),n=s>=40,o=new Fe(s);o.init();const r=E(a.headerText||p.store?.name||"TOKO PUTRI").trim(),l=E(a.storeAddress!==void 0&&a.storeAddress!==""?a.storeAddress:p.store?.address||"").trim(),c=E(a.storePhone!==void 0&&a.storePhone!==""?a.storePhone:p.store?.wa||"").trim(),d=Math.floor(s/2);r.length<=d?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),K(r.toUpperCase(),s).forEach(A=>o.line(A,"center")),o.size("normal").bold(!1)),a.showAddress!==!1&&l&&K(l,s).forEach(A=>o.line(A,"center")),a.showPhone!==!1&&c&&o.line(`WA: ${c}`,"center");const f=e.payment?.taxNpwp||p.store?.taxNpwp;a.showNpwp!==!1&&f&&o.line(`NPWP: ${f}`,"center"),o.separator("-");const m=e.payment?.isPaylater||e.isPaylater||e.payment?.subMethod==="paylater",b=e.payment?.paymentStatus==="lunas"||parseFloat(e.payment?.tempoBalance||0)<=0,g=n?m?b?"*** NOTA PUTRI PAYLATER (LUNAS) ***":"*** NOTA TAGIHAN PUTRI PAYLATER ***":b?"*** NOTA TEMPO (LUNAS) ***":"*** NOTA TAGIHAN TEMPO (PIUTANG) ***":m?b?"** PAYLATER (LUNAS) **":"** NOTA PUTRI PAYLATER **":b?"** NOTA TEMPO (LUNAS) **":"** NOTA TAGIHAN TEMPO **";o.bold(!0).line(g,"center").bold(!1),o.separator("-");const S=ge(e.dateString||e.timestamp||Date.now(),n);o.twoColumn(`Order: #${e.orderId}`,S,!1,!0);const x=(e.customer?.name||"Pelanggan").substring(0,n?18:11);if(o.twoColumn(`Plg  : ${x}`,m?"Tipe: PayLater":"Tipe: Tempo",!1,!0),m&&e.payment?.paylaterMonths){const A=e.payment.paylaterTenor==="2m"?"2 Bulan":e.payment.paylaterTenor==="3m"?"3 Bulan":"30 Hari";o.twoColumn("Tenor Cicilan",`${A} (${e.payment.paylaterMonths}x)`,!1,!0)}(e.customer?.phone||e.customer?.wa)&&o.line(`HP   : ${e.customer.wa||e.customer.phone}`,"left");let N=parseFloat(e.payment?.tempoBalance)||0,I=e.payment?.tempoPenaltyRate!==void 0?parseFloat(e.payment.tempoPenaltyRate):1,U=e.payment?.tempoPenaltyStopped===!0,D=0,H=e.payment?.tempoDueDate||0,T=0,R=0,W=!1,P=!1;const h=Date.now();H>0&&(h>H?(T=Math.floor((h-H)/(24*60*60*1e3)),T>0&&(W=!0)):(R=Math.ceil((H-h)/(24*60*60*1e3)),R<=3&&(P=!0))),U?D=parseFloat(e.payment?.tempoFixedPenalty)||0:W&&(D=I/100*N*T);let u=N+D;const F=e.payment?.installments||[],v=F.reduce((A,O)=>A+(parseFloat(O.amount)||0),0),C=e.payment?.grandTotal||N+v;if(H>0){const A=ge(H,n);let O="";b?O="LUNAS":W?O=`Telat ${T} Hari`:P?O=`H-${R<=0?0:R}`:O=`Sisa ${R} Hari`,o.twoColumn(`J.Tmp: ${A}`,O,!1,!0)}o.separator("-"),(e.items||[]).forEach(A=>{o.itemRow(A)}),o.separator("-"),o.twoColumn("Total Transaksi",M(C)),m&&(e.payment?.paylaterAdminFee>0&&o.twoColumn("Biaya Admin",`+ ${M(e.payment.paylaterAdminFee)}`),e.payment?.paylaterServiceFee>0&&o.twoColumn("Biaya Penanganan",`+ ${M(e.payment.paylaterServiceFee)}`)),F.length>0&&(o.separator("-"),o.bold(!0).line("HISTORI PEMBAYARAN CICILAN:","left").bold(!1),F.forEach((A,O)=>{const L=ge(A.date,n);o.twoColumn(`${O+1}. ${L}`,M(A.amount))}),o.twoColumn("Total Terbayar",M(v),!0)),o.twoColumn("Sisa Pokok",M(N)),m&&e.payment?.paylaterMonthlyInstallment&&o.twoColumn("Angsuran/Bln",`${M(e.payment.paylaterMonthlyInstallment)} (${e.payment.paylaterMonths||1}x)`),D>0&&o.twoColumn(`Denda (${T} Hari)`,`+ ${M(D)}`),o.doubleSeparator(),o.bold(!0).size("tall").twoColumn(m?"TAGIHAN PAYLATER":"SISA TAGIHAN",M(b?0:u)).size("normal").bold(!1),o.doubleSeparator(),!b&&p.banks&&p.banks.length>0&&(o.line("REKENING TRANSFER RESMI:","left"),(p.banks||[]).forEach(A=>{o.line(`${A.bank||A.bankName||"Bank"}: ${A.number||A.bankAccount||"-"}`,"left"),o.line(`a/n ${A.name||A.bankOwner||"-"}`,"left")}),o.separator("-")),a.showBarcode&&(o.separator("-"),o.barcode(m?`PAYLATER-${e.orderId}`:`TEMPO-${e.orderId}`,"CODE128",45),o.line(m?`*PAYLATER-${e.orderId}*`:`*TEMPO-${e.orderId}*`,"center"),o.line(m?"(PUTRI PAYLATER RESMI)":"(NOTA TEMPO RESMI)","center")),o.separator("-");const B=E(a.footerText||"Terima kasih atas kerja sama dan kepercayaan Anda.").trim();B&&K(B,s).forEach(A=>o.line(A,"center"));const $=E(a.footerPolicyNote!==void 0?a.footerPolicyNote:"").trim();return $&&(o.line("","center"),K($,s).forEach(A=>o.line(A,"center"))),o.feed(a.feedLines||3),a.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},Tt=(e=null)=>{const t=e||q(),a=Me(t.paperSize),s=a>=40,n=new Fe(a);n.init();const o=E(t.headerText||p.store?.name||"TOKO PUTRI").trim(),r=E(t.storeAddress!==void 0&&t.storeAddress!==""?t.storeAddress:p.store?.address||"").trim(),l=E(t.storePhone!==void 0&&t.storePhone!==""?t.storePhone:p.store?.wa||"").trim(),c=Math.floor(a/2);o.length<=c?(n.align("center").bold(!0).size("title").line(o.toUpperCase(),"center"),n.size("normal").bold(!1)):(n.align("center").bold(!0).size("tall"),K(o.toUpperCase(),a).forEach(g=>n.line(g,"center")),n.size("normal").bold(!1)),t.showAddress!==!1&&r&&K(r,a).forEach(g=>n.line(g,"center")),t.showPhone!==!1&&l&&n.line(`WA: ${l}`,"center"),n.separator("-");const d=s?`*** UJI COBA CETAK STRUK THERMAL ${a} KOLOM ***`:`** UJI CETAK THERMAL ${a} KOLOM **`;n.bold(!0).line(d,"center").bold(!1),n.separator("-"),n.line("MISTAR KALIBRASI TEPI KERTAS:","left");let f="";for(let g=1;g<=a;g++)f+=String(g%10);n.line(f,"left");let m="";for(let g=1;g<=a;g++)g===a||g%10===0?m+="|":g%5===0?m+=":":m+=".";n.line(m,"left"),n.line(`(Pastikan angka ${a%10} paling kanan tercetak utuh)`,"left"),n.separator("-");const b=ge(Date.now(),s);if(n.line(`Waktu   : ${b}`,"left"),n.line(`Format  : Thermal ${a} Kolom (${t.paperSize})`,"left"),n.line("Driver  : RAWBT FREE PRINT SERVICE","left"),n.line("Status  : 100% PRESISI & SIAP PAKAI","left"),n.separator("-"),n.bold(!0).twoColumn("ITEM SIMULASI","HARGA").bold(!1),n.itemRow({name:"Kertas Thermal Kasir Roll",qty:2,unit:"roll",price:15e3,subtotal:3e4}),n.itemRow({name:"Semen Portland Komposit 40kg",qty:1,unit:"sak",price:65e3,subtotal:65e3}),n.separator("-"),n.twoColumn("Subtotal",M(95e3)),n.twoColumn("Diskon Uji Coba",`- ${M(5e3)}`),n.doubleSeparator(),n.bold(!0).size("tall").twoColumn("TOTAL TES",M(9e4)).size("normal").bold(!1),n.doubleSeparator(),n.twoColumn("Bayar Tunai",M(1e5)),n.bold(!0).twoColumn("Kembalian",M(1e4)).bold(!1),t.showPoints&&(n.separator("-"),n.twoColumn("Simulasi Poin Member","+10 Poin")),t.showBarcode){n.separator("-");const g=`TEST-${Date.now().toString().slice(-6)}`;n.barcode(g,"CODE128",45),n.line(`*${g}*`,"center"),n.line("(BARCODE TEST BERHASIL)","center")}return n.separator("-"),K(t.footerText||"Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.",a).forEach(g=>n.line(g,"center")),t.footerPolicyNote&&(n.line("","center"),K(t.footerPolicyNote,a).forEach(g=>n.line(g,"center"))),K("Hasil cetak telah terkalibrasi presisi.",a).forEach(g=>n.line(g,"center")),n.feed(t.feedLines||3),t.autoCut&&n.cut(),{base64:n.toBase64(),plainText:n.toPlainText(),previewLines:n.previewLines,html:n.toHtml()}},dt=e=>{const t=document.getElementById(e);return!!t&&!t.classList.contains("hidden")},qa=e=>{if(!e){ne("Data transaksi kasir tidak ditemukan.","warning");return}const t=q(),a=yt(e,t),s=dt("pos-receipt-fallback-modal");Ke(a.base64,a.plainText,a.html,{skipPreview:s,previewLines:a.previewLines,title:`Struk Kasir #${e.txId||""}`,rebuild:()=>yt(e,q()),onConfirm:()=>{document.getElementById("pos-success-modal")?.remove(),document.getElementById("pos-receipt-fallback-modal")?.remove()}})},Ga=(e,t=!1)=>{if(!e){ne("Data shift tidak ditemukan.","warning");return}const a=q(),s=vt(e,t,a),n=dt("pos-shift-receipt-modal");Ke(s.base64,s.plainText,s.html,{skipPreview:n,previewLines:s.previewLines,title:`${t?"Ringkasan Shift (X-Report)":"Rekap Tutup Shift (Z-Report)"} #${e.shiftNo||e.id||""}`,rebuild:()=>vt(e,t,q()),onConfirm:()=>document.getElementById("pos-shift-receipt-modal")?.remove()})},Wa=async(e=null)=>{const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||_e,a=String(t||"").replace(/^#/,"").trim(),s=c=>{if(!c)return!1;const d=String(c.orderId||"").replace(/^#/,"").trim();return a?d===a||d.endsWith(a)||a.endsWith(d):!0};let n=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(n=e),(!n||!n.items||n.items.length===0)&&s(window.currentCustomerOrder)&&(n=window.currentCustomerOrder),(!n||!n.items||n.items.length===0)&&s(window.lastPrintedOrder)&&(n=window.lastPrintedOrder),(!n||!n.items||n.items.length===0)&&(qe||[]).length>0){const c=qe.find(s);c&&Array.isArray(c.items)&&c.items.length>0&&(n=c)}if((!n||!n.items||n.items.length===0)&&Array.isArray(Y)){const c=Y.find(s);c&&Array.isArray(c.items)&&c.items.length>0&&(n=c)}if((!n||!n.items||n.items.length===0)&&a)try{const c=typeof $e<"u"&&$e?$e:window.db;if(c){let d=await c.collection("freshmart_orders").doc(a).get();if(!d.exists&&!a.startsWith("ORD-")){const f=await c.collection("freshmart_orders").doc("ORD-"+a).get();f.exists&&(d=f)}if(d&&d.exists&&(n=d.data(),n.orderId=n.orderId||d.id,window.currentCustomerOrder=n,window.lastPrintedOrder=n,Array.isArray(Y))){const f=Y.findIndex(s);if(f!==-1){Y[f].items=n.items||[],Y[f].payment=n.payment||{},Y[f].customer=n.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(Y))}catch{}}}}}catch(c){console.warn("[RawBT] Gagal fetch order detail from Firestore:",c)}if(!n&&Array.isArray(Y)&&(n=Y.find(s)),!n){ne("Data pesanan tidak ditemukan.","warning");return}window.lastPrintedOrder=n;const o=q(),r=kt(n,o),l=dt("receipt-preview-modal");Ke(r.base64,r.plainText,r.html,{skipPreview:l,previewLines:r.previewLines,title:`Struk Pesanan #${n.orderId||""}`,rebuild:()=>kt(n,q()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&l&&window.closeReceiptPreviewModal()}})},Va=(e=null)=>{const t=e||_e;let s=(window.cachedPiutangOrders||[]).find(l=>String(l.orderId)===String(t))||(qe||[]).find(l=>String(l.orderId)===String(t));if(!s&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(t)&&(s=window.lastPrintedOrder),!s){if(typeof window.previewTempoReceipt=="function"&&t&&!window.__tempoReceiptFetching){window.__tempoReceiptFetching=!0,Promise.resolve(window.previewTempoReceipt(t)).finally(()=>{window.__tempoReceiptFetching=!1});return}ne("Data nota piutang tidak ditemukan.","warning");return}const n=q(),o=Pt(s,n),r=dt("receipt-preview-modal");Ke(o.base64,o.plainText,o.html,{skipPreview:r,previewLines:o.previewLines,title:`Nota Tagihan Tempo #${s.orderId||""}`,rebuild:()=>Pt(s,q()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&r&&window.closeReceiptPreviewModal()}})},Ja=()=>{const e=q(),t=Tt(e);Ke(t.base64,t.plainText,t.html,{previewLines:t.previewLines,title:"Uji Coba Cetak Printer",rebuild:()=>Tt(q())})},St=(e,t=null)=>{const a=t||q(),s=Me(a.paperSize),n=s>=40,o=new Fe(s);o.init();const r=E(a.headerText||p.store?.name||"TOKO PUTRI").trim(),l=E(a.storeAddress!==void 0&&a.storeAddress!==""?a.storeAddress:p.store?.address||"").trim(),c=E(a.storePhone!==void 0&&a.storePhone!==""?a.storePhone:p.store?.wa||"").trim(),d=Math.floor(s/2);r.length<=d?(o.align("center").bold(!0).size("title").line(r.toUpperCase(),"center"),o.size("normal").bold(!1)):(o.align("center").bold(!0).size("tall"),K(r.toUpperCase(),s).forEach(x=>o.line(x,"center")),o.size("normal").bold(!1)),a.showAddress!==!1&&l&&K(l,s).forEach(x=>o.line(x,"center")),a.showPhone!==!1&&c&&o.line(`WA: ${c}`,"center");const f=p.store?.taxNpwp;a.showNpwp!==!1&&f&&o.line(`NPWP: ${f}`,"center"),o.separator("-");const m=n?"*** NOTA RETUR PENJUALAN (RMA) ***":"** NOTA RETUR PENJUALAN **";o.bold(!0).line(m,"center").bold(!1),o.separator("-");const b=ge(e.createdAt||Date.now(),n);o.twoColumn(`No Retur: #${e.id}`,b,!1,!0),o.twoColumn(`No Nota : #${e.orderId||"-"}`,`Ksr: ${(e.cashierName||"Kasir").substring(0,n?14:8)}`,!1,!0);const g=(e.customerName||"Pelanggan Umum").substring(0,n?22:14);o.twoColumn(`Plg     : ${g}`,"Status: Selesai",!1,!0),e.customerPhone&&o.line(`HP      : ${e.customerPhone}`,"left"),o.separator("-"),(e.items||[]).forEach(x=>{const N=x.variantName?` (${x.variantName})`:"",I=(x.name||"Barang")+N;o.bold(!0),K(I,s).forEach(T=>o.line(T,"left")),o.bold(!1);const U=`  ${Qt(x.qty)} ${x.unit||"pcs"} x ${Ze(x.soldPrice)}`,D=Ze(x.subtotalRefund);o.twoColumn(U,D,!1,!1),x.reason&&o.line(`  * Alasan: ${x.reason}`,"left");const H=x.condition==="bad"?"Cacat/Rusak (Karantina)":"Kondisi Baik (Rak Toko)";o.line(`  * ${H}`,"left")}),o.doubleSeparator(),o.bold(!0).size("tall").twoColumn("TOTAL RETUR",M(e.totalRefund)).size("normal").bold(!1),o.doubleSeparator();let S="REFUND TUNAI";return e.refundMethod==="credit"?S="SALDO KREDIT TOKO":e.refundMethod==="exchange"?S="TUKAR BARANG LAIN":e.refundMethod&&(S=String(e.refundMethod).toUpperCase()),o.twoColumn("Kompensasi",S),e.notes&&(o.separator("-"),K(`Catatan: ${e.notes}`,s).forEach(x=>o.line(x,"left"))),a.showBarcode&&(o.separator("-"),o.barcode(`RMA-${e.id}`,"CODE128",45),o.line(`*RMA-${e.id}*`,"center"),o.line("(BUKTI RETUR RESMI)","center")),o.separator("-"),o.line("Barang retur telah diverifikasi oleh toko.","center"),o.line("Terima kasih atas kerja samanya.","center"),o.feed(a.feedLines||3),a.autoCut&&o.cut(),{base64:o.toBase64(),plainText:o.toPlainText(),previewLines:o.previewLines,html:o.toHtml()}},Ya=(e=null)=>{const t=p.salesReturns||[];let a=null;if(typeof e=="object"&&e!==null?a=e:e&&(a=t.find(r=>String(r.id)===String(e))),!a){ne("Data nota retur tidak ditemukan.","warning");return}const s=q(),n=St(a,s),o=dt("receipt-preview-modal");Ke(n.base64,n.plainText,n.html,{skipPreview:o,previewLines:n.previewLines,title:`Nota Retur Penjualan #${a.id}`,rebuild:()=>St(a,q()),onConfirm:()=>{typeof window.closeReceiptPreviewModal=="function"&&o&&window.closeReceiptPreviewModal()}})};window.cleanLineAscii=E;window.wrapWords=K;window.formatTwoColumn=Zt;window.formatCompactDate=ge;window.EscPosBuilder=Fe;window.sendToRawBT=Ke;window.renderThermalDOMAndPrint=Rt;window.openRawBTApp=za;window.buildPOSReceiptPayload=yt;window.buildShiftReceiptPayload=vt;window.buildOrderReceiptPayload=kt;window.buildTempoReceiptPayload=Pt;window.buildTestReceiptPayload=Tt;window.buildSalesReturnReceiptPayload=St;window.printPOSReceiptDirect=qa;window.printShiftSettlementDirect=Ga;window.printCustomerReceiptDirect=Wa;window.printTempoReceiptDirect=Va;window.printSalesReturnReceiptDirect=Ya;window.executeRawBTTestPrint=Ja;const Un=Object.freeze(Object.defineProperty({__proto__:null,EscPosBuilder:Fe,buildOrderReceiptPayload:kt,buildPOSReceiptPayload:yt,buildSalesReturnReceiptPayload:St,buildShiftReceiptPayload:vt,buildTempoReceiptPayload:Pt,buildTestReceiptPayload:Tt,cleanLineAscii:E,escReceipt:ze,executeRawBTTestPrint:Ja,fRp:M,fRpNum:Ze,formatCompactDate:ge,formatQty:Qt,formatTwoColumn:Zt,openRawBTApp:za,printCustomerReceiptDirect:Wa,printPOSReceiptDirect:qa,printSalesReturnReceiptDirect:Ya,printShiftSettlementDirect:Ga,printTempoReceiptDirect:Va,renderThermalDOMAndPrint:Rt,sendToRawBT:Ke,wrapWords:K},Symbol.toStringTag,{value:"Module"})),Xt=async(e=null)=>{if(e&&typeof da=="function"&&typeof e=="string"&&da(e),typeof window.printCustomerReceiptDirect=="function")return window.printCustomerReceiptDirect(e);const t=(typeof e=="string"?e:e&&e.orderId?e.orderId:null)||_e,a=String(t||"").replace(/^#/,"").trim(),s=v=>{if(!v)return!1;const C=String(v.orderId||"").replace(/^#/,"").trim();return a?C===a||C.endsWith(a)||a.endsWith(C):!0};let n=null;if(typeof e=="object"&&e!==null&&Array.isArray(e.items)&&e.items.length>0&&(n=e),(!n||!n.items||n.items.length===0)&&s(window.currentCustomerOrder)&&(n=window.currentCustomerOrder),(!n||!n.items||n.items.length===0)&&s(window.lastPrintedOrder)&&(n=window.lastPrintedOrder),(!n||!n.items||n.items.length===0)&&(qe||[]).length>0){const v=qe.find(s);v&&Array.isArray(v.items)&&v.items.length>0&&(n=v)}if((!n||!n.items||n.items.length===0)&&Array.isArray(Y)){const v=Y.find(s);v&&Array.isArray(v.items)&&v.items.length>0&&(n=v)}if((!n||!n.items||n.items.length===0)&&a)try{const v=typeof $e<"u"&&$e?$e:window.db;if(v){let C=await v.collection("freshmart_orders").doc(a).get();if(!C.exists&&!a.startsWith("ORD-")){const B=await v.collection("freshmart_orders").doc("ORD-"+a).get();B.exists&&(C=B)}if(C&&C.exists&&(n=C.data(),n.orderId=n.orderId||C.id,window.currentCustomerOrder=n,window.lastPrintedOrder=n,Array.isArray(Y))){const B=Y.findIndex(s);if(B!==-1){Y[B].items=n.items||[],Y[B].payment=n.payment||{},Y[B].customer=n.customer||{};try{localStorage.setItem("freshmart_my_orders",JSON.stringify(Y))}catch{}}}}}catch(v){console.warn("[Receipt] Gagal fetch order detail from Firestore:",v)}if(!n&&Array.isArray(Y)&&(n=Y.find(s)),!n)return;window.lastPrintedOrder=n;const o=typeof q=="function"?q():{paperSize:"58mm",showPoints:!0,showBarcode:!0},l=Me(o.paperSize)>=40,c=ge(n.dateString||n.date||Date.now(),l),d=o.headerText||p.store.name||"Toko Putri",f=o.storeAddress!==void 0&&o.storeAddress!==""?o.storeAddress:p.store.address||"",m=o.storePhone!==void 0&&o.storePhone!==""?o.storePhone:p.store.wa||"",b=(v,C)=>`<div class="utp-row"><div class="utp-col-left">${i(v)}</div><div class="utp-col-right">${i(C)}</div></div>`,g=Array.isArray(n.items)?n.items:Array.isArray(n.cart)?n.cart:[],S=it(n),x=S.subtotal,N=S.shipping,I=S.grandTotal,U=String(n.payment?.method||n.method||"Tunai").toUpperCase(),D=n.customer?.name||n.customerName||"Guest",H=n.customer?.deliveryMethod==="delivery"||n.deliveryMethod==="delivery";let T=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${i(d)}</div>`;o.showAddress!==!1&&f&&(T+=`<div class="text-center" style="font-size:10px;color:#475569;margin-bottom:2px;">${i(f)}</div>`),o.showPhone!==!1&&m&&(T+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${i(m)}</div>`);const R=n.payment?.taxNpwp||p.store?.taxNpwp;if(o.showNpwp!==!1&&R&&(T+=`<div class="text-center" style="font-size:10px;font-family:monospace;margin-bottom:4px;">NPWP: ${i(R)}</div>`),T+='<div class="utp-separator"></div>',T+=b(`Order: #${n.orderId}`,c),T+=b(`Plg  : ${i(D).substring(0,l?18:10)}`,`Tipe: ${H?"Kirim":"Ambil"}`),(n.customer?.phone||n.customerPhone)&&(T+=`<div class="utp-line">HP   : ${i(n.customer?.phone||n.customerPhone)}</div>`),T+='<div class="utp-separator"></div>',n.customer?.note&&(T+=`<div style="white-space:pre-wrap;word-break:break-word;">Cat: ${i(n.customer.note)}</div><div class="utp-separator"></div>`),g.length>0?g.forEach(v=>{let C=v.variantName?` (${i(v.variantName)}${v.colorCode?" "+i(v.colorCode):""})`:"";const B=i(v.name||"Barang")+C+(v.poTime?" [PO]":""),$=v.effectivePrice||v.price||0,A=`  ${parseFloat(v.qty||1)} ${i(v.unit||"pcs")} x ${Math.round($).toLocaleString("id-ID")}`,O=(parseFloat(v.qty||1)*$).toLocaleString("id-ID");T+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;">${B}</div>${b(A,O)}`,v.poTime&&(T+=`<div style="font-size:10px;font-style:italic;color:#4b5563;">  * Estimasi PO: ${i(v.poTime)}</div>`)}):T+='<div style="font-style:italic;color:#64748b;text-align:center;padding:4px 0;">- Tidak ada rincian barang -</div>',T+=`<div class="utp-separator"></div>${b("Subtotal",x.toLocaleString("id-ID"))}`,H&&(T+=b("Ongkir",N.toLocaleString("id-ID"))),S.shippingDiscount&&(T+=b("Pot.Ongkir",`-${S.shippingDiscount.toLocaleString("id-ID")}`)),S.productDiscount&&(T+=b("Pot.Harga",`-${S.productDiscount.toLocaleString("id-ID")}`)),S.pointDiscount>0&&(T+=b("Pot.Poin",`-${S.pointDiscount.toLocaleString("id-ID")}`)),S.paylaterAdminFee>0&&(T+=b("Biaya Admin",`+${S.paylaterAdminFee.toLocaleString("id-ID")}`)),S.paylaterServiceFee>0&&(T+=b("Biaya Layanan",`+${S.paylaterServiceFee.toLocaleString("id-ID")}`)),S.hasPpn){const v=S.ppnAmount>0?`${S.isInclusive?"":"+"}${S.ppnAmount.toLocaleString("id-ID")}`:"0";T+=b(S.ppnLabel,v)}if(T+=`<div class="utp-double-separator"></div><div class="font-bold text-[12px]">${b("TOTAL","Rp "+I.toLocaleString("id-ID"))}</div>${b("Metode Bayar",U)}`,n.payment?.method==="tempo"||n.payment?.isPaylater||n.payment?.subMethod==="paylater"){if(!!(n.payment?.isPaylater||n.payment?.subMethod==="paylater")){if(n.payment?.paylaterMonths){const C=n.payment?.paylaterTenor==="2m"?"2 Bulan":n.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari";T+=b("Tenor Cicilan",`${C} (${n.payment.paylaterMonths}x)`)}n.payment?.paylaterMonthlyInstallment&&(T+=`<div class="font-bold">${b("Angsuran/Bln","Rp "+Math.round(n.payment.paylaterMonthlyInstallment).toLocaleString("id-ID"))}</div>`),n.payment?.tempoDp>0&&(T+=b("Uang Muka (DP)","Rp "+Math.round(n.payment.tempoDp).toLocaleString("id-ID"))),T+=`<div class="font-bold">${b("Tagihan PayLater","Rp "+Math.round(n.payment?.tempoBalance||I).toLocaleString("id-ID"))}</div>`}else n.payment?.tempoDp>0&&(T+=b("Uang Muka (DP)","Rp "+Math.round(n.payment.tempoDp).toLocaleString("id-ID"))),T+=`<div class="font-bold">${b("Sisa Piutang","Rp "+Math.round(n.payment?.tempoBalance||I).toLocaleString("id-ID"))}</div>`;if(n.payment?.tempoDueDate){const C=typeof n.payment.tempoDueDate=="number"?new Date(n.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):n.payment.tempoDueDate;T+=b("Jatuh Tempo",C)}}o.showPoints&&(n.pointsEarned>0||n.finalMemberPoints!==void 0)&&(T+='<div class="utp-separator"></div>',n.pointsEarned>0&&(T+=b("Poin Didapat","+"+n.pointsEarned+" Poin")),n.finalMemberPoints!==void 0&&n.finalMemberPoints!==null&&(T+=`<div class="font-bold">${b("Saldo Poin",String(n.finalMemberPoints)+" Poin")}</div>`),n.claimedReward&&(T+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;margin-top:2px;">HADIAH: ${i(n.claimedReward.name)}</div>`)),g.some(v=>v&&v.poTime&&v.poTime!=="")&&(T+='<div class="utp-separator"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),o.showBarcode&&(T+=`<div class="utp-separator"></div>
        <div style="text-align:center;margin:6px 0 3px;">
            <div style="width:75%;max-width:200px;height:32px;margin:0 auto;background:repeating-linear-gradient(90deg,#000 0px,#000 2px,transparent 2px,transparent 4px,#000 4px,#000 7px,transparent 7px,transparent 9px,#000 9px,#000 11px,transparent 11px,transparent 13px,#000 13px,#000 16px,transparent 16px,transparent 18px,#000 18px,#000 19px,transparent 19px,transparent 22px);border-top:1px solid #000;border-bottom:1px solid #000;"></div>
            <div style="font-family:monospace;letter-spacing:2px;font-size:10.5px;font-weight:bold;margin-top:3px;">*ORDER-${i(n.orderId)}*</div>
            <div style="font-size:8px;color:#666;">SCAN DI KASIR</div>
        </div>`),T+=`<div class="utp-separator"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${i(o.footerText||"Terima Kasih Atas Kunjungan Anda")}</div>`,o.footerPolicyNote&&(T+=`<div class="text-center my-1" style="font-size:9px;line-height:1.25;color:#475569;">${i(o.footerPolicyNote)}</div>`),T+='<div class="utp-separator"></div><div style="height:15px;"></div>',Ca("receipt-paper-content",T);const P=w("receipt-paper-content");P&&(P.style.width=l?"340px":"260px");const h=w("receipt-preview-modal-box");h&&(h.classList.remove("max-w-[320px]","max-w-[400px]"),h.classList.add(l?"max-w-[400px]":"max-w-[320px]"));const u=w("receipt-preview-modal"),F=w("receipt-preview-modal-box");u&&u.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),At(u,F)},Io=(e=!1)=>{const t=w("receipt-preview-modal"),a=w("receipt-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{Ge(t,a)}):Ge(t,a))},Eo=()=>{const e=_e||(window.lastPrintedOrder?window.lastPrintedOrder.orderId:null);if(typeof window.printCustomerReceiptDirect=="function"){window.printCustomerReceiptDirect(e);return}if(!((qe||[]).find(s=>s.orderId===_e)||(Array.isArray(Y)?Y.find(s=>s.orderId===_e):null)||window.lastPrintedOrder))return;const a=w("receipt-paper-content")?w("receipt-paper-content").innerHTML:"";Rt(a)};window.openReceiptPreview=Xt;window.openCustomerReceiptPreview=e=>{Xt(e)};window.closeReceiptPreviewModal=Io;window.executePrintReceipt=Eo;window.checkProPrint=()=>{Xt()};const oe={OWNER:"owner",ADMIN:"admin",CASHIER:"cashier"},Bo=[{key:"orders",label:"Pesanan Online",desc:"Proses status pesanan, update resi pengiriman & konfirmasi bayar",group:"operasional",icon:"fa-receipt"},{key:"products",label:"Katalog Produk & Stok",desc:"Tambah/edit produk, atur varian, dan perbarui stok barang",group:"operasional",icon:"fa-box-open"},{key:"suppliers",label:"Supplier & Rekanan",desc:"Kelola master data supplier, kontak kulakan, dan asal produk",group:"operasional",icon:"fa-truck-field"},{key:"purchases",label:"Order Kulakan (PO)",desc:"Buat PO pembelian grosir, terima restock, & kelola hutang rekanan",group:"operasional",icon:"fa-cart-flatbed"},{key:"piutang",label:"Piutang Tempo & Cicilan",desc:"Kelola nota piutang pelanggan, denda keterlambatan, & cicilan",group:"operasional",icon:"fa-clock-rotate-left"},{key:"customers",label:"Database Pelanggan",desc:"Lihat daftar member, atur limit kredit PayLater, & mutasi poin",group:"operasional",icon:"fa-address-book"},{key:"pos",label:"Kasir POS",desc:"Akses antarmuka penjualan kasir toko fisik dan shift kasir",group:"operasional",icon:"fa-cash-register"},{key:"expenses",label:"Biaya Operasional Toko",desc:"Buku kas pengeluaran operasional toko harian & nota kas",group:"operasional",icon:"fa-money-bill-transfer"},{key:"stock_opname",label:"Stock Opname (Audit Fisik)",desc:"Audit stok fisik rak/gudang, rekonsiliasi selisih & terapkan penyesuaian stok",group:"operasional",icon:"fa-clipboard-check"},{key:"returns",label:"Retur Barang & RMA",desc:"Kelola retur penjualan pelanggan, klaim cacat supplier & stok karantina",group:"operasional",icon:"fa-right-left"},{key:"categories",label:"Kategori Produk",desc:"Tambah dan susun kategori etalase produk",group:"konten",icon:"fa-tags"},{key:"brands",label:"Merek Produk",desc:"Kelola daftar brand dagang barang",group:"konten",icon:"fa-copyright"},{key:"colors",label:"Database Warna",desc:"Katalog warna produk dan swatch varian",group:"konten",icon:"fa-swatchbook"},{key:"vouchers",label:"Voucher & Promo",desc:"Buat kode voucher diskon dan promo belanja",group:"konten",icon:"fa-ticket-simple"},{key:"banners",label:"Banner Promosi",desc:"Kelola gambar dan video slider beranda toko",group:"konten",icon:"fa-images"},{key:"rewards",label:"Program Hadiah Poin",desc:"Kelola katalog hadiah penukaran poin member",group:"konten",icon:"fa-gift"},{key:"reviews",label:"Ulasan Pelanggan",desc:"Moderasi ulasan dan testimoni produk pembeli",group:"konten",icon:"fa-star"},{key:"faqs",label:"Tanya Jawab / Q&A",desc:"Kelola jawaban pertanyaan umum pembeli",group:"konten",icon:"fa-circle-question"},{key:"changelog",label:"Log Pembaruan Sistem",desc:"Melihat riwayat update sistem toko",group:"konten",icon:"fa-code-branch"},{key:"reports",label:"Pusat Laporan & Keuangan",desc:"Laporan terpadu penjualan, stok, laba rugi, utang piutang, dan perpajakan",group:"sensitif",icon:"fa-chart-pie"},{key:"view_reports",label:"Laporan Finansial & Laba",desc:"Lihat omset, total HPP terjual, margin & laba bersih toko",group:"sensitif",icon:"fa-chart-line"},{key:"tax",label:"Pajak & Keuangan (PPN)",desc:"Laporan PPN, neraca keuangan, dan laba rugi resmi",group:"sensitif",icon:"fa-file-invoice-dollar"},{key:"banks",label:"Rekening Bank & QRIS",desc:"Ubah nomor rekening toko dan QRIS tujuan pembayaran",group:"sensitif",icon:"fa-building-columns"},{key:"settings",label:"Pengaturan Utama Toko",desc:"Konfigurasi nama toko, GPS maps, tarif ongkir, & sistem",group:"sensitif",icon:"fa-gear"},{key:"cashiers",label:"Kelola Staf & Hak Akses",desc:"Daftarkan staf baru, atur jabatan, & ubah batasan hak akses",group:"sensitif",icon:"fa-users-gear"},{key:"backup_sync",label:"Pusat Data & Backup Cloud",desc:"Cadangkan data toko, ekspor database, & sinkronisasi cloud",group:"sensitif",icon:"fa-cloud-arrow-up"}],_t={[oe.CASHIER]:{pos:!0,returns:!0,orders:!1,products:!1,suppliers:!1,purchases:!1,piutang:!1,customers:!1,categories:!1,brands:!1,colors:!1,vouchers:!1,banners:!1,rewards:!1,reviews:!1,faqs:!1,changelog:!1,expenses:!1,stock_opname:!1,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[oe.ADMIN]:{pos:!0,returns:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!1,view_reports:!1,tax:!1,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},manager:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,stock_opname:!0,reports:!0,view_reports:!0,tax:!0,banks:!1,settings:!1,cashiers:!1,backup_sync:!1},[oe.OWNER]:{pos:!0,orders:!0,products:!0,suppliers:!0,purchases:!0,piutang:!0,customers:!0,categories:!0,brands:!0,colors:!0,vouchers:!0,banners:!0,rewards:!0,reviews:!0,faqs:!0,changelog:!0,expenses:!0,reports:!0,view_reports:!0,tax:!0,banks:!0,settings:!0,cashiers:!0,backup_sync:!0}};let Qe=null;const et=()=>{if(Qe)return Qe;try{const e=sessionStorage.getItem("freshmart_staff_profile");if(e)return Qe=JSON.parse(e),Qe}catch{}return null},Ho=e=>{Qe=e;try{e?sessionStorage.setItem("freshmart_staff_profile",JSON.stringify(e)):sessionStorage.removeItem("freshmart_staff_profile")}catch{}},Fo=()=>{Qe=null;try{sessionStorage.removeItem("freshmart_staff_profile")}catch{}},ct=()=>{const e=$t.currentUser;if(e&&e.uid===Ae)return!0;const t=et();if(t){const s=String(t.role||"").toLowerCase();if(s==="owner"||t.uid===Ae)return!0;if(s==="cashier"||s==="kasir"||s==="staff")return!1}const a=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");if((window.isAdm||window.__localIsAdm)&&a&&!t)return!0;try{const s=sessionStorage.getItem("pos_cashier_session");if(s){const n=JSON.parse(s),o=String(n.role||"").toLowerCase();if(o==="owner"||n.uid===Ae)return!0;if(o==="cashier"||o==="kasir"||o==="staff")return!1}}catch{}return!1},Ko=()=>{if(ct())return!0;if(Qa())return!1;const e=et();return e?.role===oe.ADMIN||String(e?.role||"").toLowerCase()==="admin"},Qa=()=>{if(ct())return!1;const e=et();if(e){const t=String(e.role||"").toLowerCase();if(t==="owner"||e.uid===Ae)return!1;if(t==="cashier"||t==="kasir")return!0}try{const t=sessionStorage.getItem("pos_cashier_session");if(t){const a=JSON.parse(t),s=String(a.role||"").toLowerCase();if(s==="owner"||a.uid===Ae)return!1;if(s==="cashier"||s==="kasir"||s==="staff")return!0}}catch{}return!1},Za=e=>{if(ct())return!0;const t=et();if(t){if(t.isActive===!1)return!1;const a=String(t.role||"").toLowerCase();if(a===oe.OWNER||a==="owner")return!0;if(a===oe.CASHIER||a==="cashier"||a==="kasir")return e==="pos";if(t.permissions){if(typeof t.permissions[e]<"u")return t.permissions[e]===!0;if(e==="reports"&&(t.permissions.view_reports===!0||t.permissions.tax===!0)||(e==="view_reports"||e==="tax")&&t.permissions.reports===!0)return!0}return(_t[t.role]||_t[oe.ADMIN])[e]===!0}try{const a=sessionStorage.getItem("pos_cashier_session");if(a){const s=JSON.parse(a),n=String(s.role||"").toLowerCase();if(n===oe.OWNER||n==="owner"||s.uid===Ae)return!0;if(n===oe.CASHIER||n==="cashier"||n==="kasir")return e==="pos"}}catch{}return window.isAdm||window.__localIsAdm?["banks","settings","cashiers","backup_sync"].includes(e)?$t.currentUser?.uid===Ae:!0:!1},zt=()=>{if(typeof window<"u"&&(window.curViewName==="view-pos-cashier"||document.getElementById("view-pos-cashier")?.classList.contains("flex")||document.getElementById("pos-payment-modal")?.classList.contains("flex")||document.getElementById("pos-variant-sheet")?.classList.contains("flex")))try{const s=sessionStorage.getItem("pos_cashier_session");if(s){const n=JSON.parse(s),o=String(n.role||"").toLowerCase();return o===oe.OWNER||o==="owner"||n.uid===Ae}}catch{}if(ct())return!0;const t=et();if(t){const s=String(t.role||"").toLowerCase();return s===oe.OWNER||s==="owner"||t.uid===Ae?!0:s===oe.CASHIER||s==="cashier"||s==="kasir"?!1:Za("view_reports")}const a=$t.currentUser;return!!(a&&a.uid===Ae||window.isAdm||window.__localIsAdm)},Uo=e=>{switch(e){case oe.OWNER:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-2xs">
                <i class="fa-solid fa-crown text-[9px] text-amber-500"></i>
                <span>Owner</span>
            </span>`;case oe.ADMIN:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shadow-2xs">
                <i class="fa-solid fa-shield-halved text-[9px]"></i>
                <span>Admin Toko</span>
            </span>`;case oe.CASHIER:default:return`
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
                <i class="fa-solid fa-cash-register text-[9px]"></i>
                <span>Kasir POS</span>
            </span>`}};typeof window<"u"&&(window.ROLES=oe,window.PERMISSION_DEFINITIONS=Bo,window.ROLE_PRESETS=_t,window.getActiveStaff=et,window.setActiveStaff=Ho,window.clearActiveStaff=Fo,window.isOwnerUser=ct,window.isAdminUser=Ko,window.isCashierUser=Qa,window.hasPermission=Za,window.canViewHpp=zt,window.getRoleBadgeHtml=Uo);const Xa=["212222","222122","222221","121223","121322","131222","122213","122312","132212","221213","221312","231212","112232","122132","122231","113222","123122","123221","223211","221132","221231","213212","223112","312131","311222","321122","321221","312212","322112","322211","212123","212321","232121","111323","131123","131321","112313","132113","132311","211313","231113","231311","112133","112331","132131","113123","113321","133121","313121","211331","231131","213113","213311","213131","311123","311321","331121","312113","312311","332111","314111","221411","431111","111224","111422","121124","121421","141122","141221","112214","112412","122114","122411","142112","142211","241211","221114","413111","241112","134111","111242","121142","121241","114212","124112","124211","411212","421112","421211","212141","214121","412121","111143","111341","131141","114113","114311","411113","411311","113141","114131","311141","411131","211412","211214","211232","2331112"],xa=104,ga=105,es=106,ea=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(!t)return null;const a=[xa];let s=xa,n=1;for(let l=0;l<t.length;l++){const c=t.charCodeAt(l);if(c<32||c>126)continue;const d=c-32;a.push(d),s+=d*n,n++}if(a.length<=1)return null;const o=s%103;a.push(o),a.push(es);let r="";return a.forEach(l=>{const c=Xa[l];if(!c)return;let d=!0;for(let f of c){const m=parseInt(f,10);r+=(d?"1":"0").repeat(m),d=!d}}),{text:t,subtype:"B",values:a,modules:r,moduleCount:r.length}},ta=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(!t||!/^\d+$/.test(t)||t.length%2!==0||t.length<2)return null;const a=[ga];let s=ga,n=1;for(let l=0;l<t.length;l+=2){const c=t.slice(l,l+2),d=parseInt(c,10);a.push(d),s+=d*n,n++}const o=s%103;a.push(o),a.push(es);let r="";return a.forEach(l=>{const c=Xa[l];if(!c)return;let d=!0;for(let f of c){const m=parseInt(f,10);r+=(d?"1":"0").repeat(m),d=!d}}),{text:t,subtype:"C",values:a,modules:r,moduleCount:r.length}},ts=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(!t)return null;if(/^\d+$/.test(t)&&t.length%2===0&&t.length>=2){const a=ta(t);if(a)return a}return ea(t)},qt=(e,t={})=>{const a=t.mode==="B"?ea(e):t.mode==="C"?ta(e):ts(e);if(!a)return'<div class="p-2 text-center text-xs text-rose-500 font-bold bg-rose-50 border border-rose-200 rounded-lg">Kode barcode tidak valid</div>';const s=t.height||58,n=t.moduleWidth||1.4,o=t.quietZone!==void 0?t.quietZone:Math.max(16,Math.round(n*12)),l=a.moduleCount*n+o*2;let c="",d=!1,f=0;for(let D=0;D<a.modules.length;D++){const H=a.modules[D]==="1";if(H&&!d)d=!0,f=D;else if(!H&&d){d=!1;const T=(D-f)*n,R=o+f*n;c+=`<rect x="${R.toFixed(2)}" y="0" width="${T.toFixed(2)}" height="${s}" fill="#000000" />`}}if(d){const D=(a.modules.length-f)*n,H=o+f*n;c+=`<rect x="${H.toFixed(2)}" y="0" width="${D.toFixed(2)}" height="${s}" fill="#000000" />`}const m=t.showText!==!1,b=t.customText||a.text,g=t.fontSize||10,S=m?g+4:0,x=s+S;let N="";if(m){const D=s+g+1;N=`<text x="${(l/2).toFixed(2)}" y="${D.toFixed(2)}" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="${g}" font-weight="700" fill="#000000" letter-spacing="1">${b}</text>`}const I=t.className||"w-full h-auto",U=`<rect x="0" y="0" width="${l.toFixed(2)}" height="${x.toFixed(2)}" fill="#ffffff" />`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${l.toFixed(2)} ${x.toFixed(2)}" class="${I}" shape-rendering="crispEdges" style="display:block;margin:0 auto;max-width:100%;height:auto;background-color:#ffffff;">${U}${c}${N}</svg>`};typeof window<"u"&&(window.encodeCode128B=ea,window.encodeCode128C=ta,window.encodeCode128Auto=ts,window.generateCode128Svg=qt);let xe="invoice",as=!1;const Bt=e=>{as=e},Z=(e,t=!1)=>{if(!e)return"-";try{const a=e.toDate?e.toDate():new Date(e);if(isNaN(a.getTime()))return"-";const s={day:"2-digit",month:"short",year:"numeric"};return t&&(s.hour="2-digit",s.minute="2-digit"),a.toLocaleDateString("id-ID",s)}catch{return"-"}},wt=e=>{const t=parseFloat(e);return isNaN(t)?"0":Number.isInteger(t)?String(t):t.toFixed(3).replace(/\.?0+$/,"")},ke=(e="w-16 h-16")=>p.store?.logo&&(p.store.logo.includes("http")||p.store.logo.includes("data:"))?`<img loading="eager" src="${i(p.store.logo)}" class="${e} object-contain shrink-0">`:`<div class="${e} primary-bg flex items-center justify-center rounded-xl text-white shrink-0"><i class="fa-solid fa-store text-2xl"></i></div>`,st=(e="font-mono text-xs")=>{const a=(Array.isArray(p.banks)?p.banks:[]).filter(s=>s&&(s.bankName||s.bank||s.bankAccount||s.number||s.account));if(a.length>0)return a.map(s=>{const n=s.bankName||s.bank||"BANK",o=s.bankAccount||s.number||s.account||"-",r=s.bankOwner||s.name||s.owner||p.store?.name||"Toko Putri";return`
            <div class="${e} flex items-center justify-between gap-2 border-b border-slate-200/60 pb-1.5 last:border-b-0 last:pb-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="font-bold text-slate-900 uppercase">${i(n)}:</span>
                    <span class="font-bold text-blue-700 tracking-wide font-mono select-all">${i(o)}</span>
                </div>
                <div class="text-[10.5px] text-slate-500 font-sans truncate max-w-[140px] text-right" title="${i(r)}">
                    a.n <span class="font-semibold text-slate-700">${i(r)}</span>
                </div>
            </div>`}).join("");if(p.store?.bankName&&(p.store?.bankAccount||p.store?.bankNumber)){const s=p.store.bankName,n=p.store.bankAccount||p.store.bankNumber,o=p.store.bankOwner||p.store.name||"Toko Putri";return`
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
        <p class="mt-0.5">Konfirmasi transfer via WhatsApp Resmi: <b class="font-mono text-emerald-600">${i(p.store?.wa||p.store?.phone||"-")}</b></p>
    </div>`},ha=({docTitle:e,docNumber:t,docDate:a})=>`
    <div class="flex justify-between items-center border-b-2 border-slate-800 pb-2.5 mb-4 text-xs font-semibold select-none">
        <div class="flex items-center gap-2.5">
            ${ke("w-8 h-8")}
            <div>
                <span class="font-black text-slate-900 uppercase text-xs sm:text-sm tracking-tight">${i(p.store?.name||"TOKO PUTRI")}</span>
                <span class="text-slate-300 mx-1.5">&bull;</span>
                <span class="font-bold text-slate-700 uppercase tracking-wider text-[11px]">${i(e)}</span>
            </div>
        </div>
        <div class="text-right font-mono text-slate-600 text-[11px]">
            ${t?`<span class="font-bold text-slate-900">${i(t)}</span> <span class="text-slate-400 mx-1">&bull;</span>`:""}
            <span>${i(a||"")}</span>
        </div>
    </div>
    `,ya=(e,t,a)=>`
    <div class="a4-page-footer mt-auto pt-2.5 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono select-none">
        <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-700 uppercase">${i(p.store?.name||"TOKO PUTRI")}</span>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-500">${i(a||"Dokumen Resmi")}</span>
        </div>
        <div class="flex items-center gap-1 font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
            <span>Halaman ${e} dari ${t}</span>
        </div>
    </div>
    `,ye=({docTitle:e,docNumber:t,docDate:a,kopHtml:s,metaHtml:n,tableHeaderHtml:o,rows:r=[],tableClass:l="w-full text-left border-collapse mb-4 text-xs",summaryHtml:c="",extraBlocksHtml:d="",signaturesHtml:f="",singlePageMax:m=6,itemsFirstPage:b=6,itemsMiddlePage:g=14,itemsLastPage:S=6})=>{const x=r.length;if(x<=m)return[`
        <div class="a4-page" data-page="1" data-total-pages="1">
            <div class="a4-page-body flex-1 flex flex-col">
                ${s}
                ${n||""}
                <table class="${l}">
                    <thead>${o}</thead>
                    <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${r.join("")}</tbody>
                </table>
                ${c||""}
                ${d||""}
                ${f||""}
            </div>
            ${ya(1,1,e)}
        </div>
        `];const N=[],I=[],U=r.slice(0,b);I.push(U);let D=b;for(;D<x;){const T=x-D;if(T<=S)I.push(r.slice(D)),D=x;else{const R=Math.min(g,T);I.push(r.slice(D,D+R)),D+=R}}const H=I.length;return I.forEach((T,R)=>{const W=R+1,P=W===1,h=W===H;let u="";P?u=`
            ${s}
            ${n||""}
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${T.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${W+1}...
            </div>
            `:h?u=`
            ${ha({docTitle:e,docNumber:t,docDate:a})}
            ${T.length>0?`
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${T.join("")}</tbody>
            </table>`:""}
            ${c||""}
            ${d||""}
            ${f||""}
            `:u=`
            ${ha({docTitle:e,docNumber:t,docDate:a})}
            <table class="${l}">
                <thead>${o}</thead>
                <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">${T.join("")}</tbody>
            </table>
            <div class="mt-auto text-right text-[10px] text-slate-400 italic font-mono mb-1.5 select-none">
                * Rincian barang berlanjut ke Halaman ${W+1}...
            </div>
            `,N.push(`
        <div class="a4-page" data-page="${W}" data-total-pages="${H}">
            <div class="a4-page-body flex-1 flex flex-col">
                ${u}
            </div>
            ${ya(W,H,e)}
        </div>
        `)}),N},aa=(e,t=null)=>{if(xe=e,e==="po"){const P=p.purchases||[],h=P.find(j=>String(j.id)===String(t))||(window.currentActivePoId?P.find(j=>String(j.id)===String(window.currentActivePoId)):P[0]);if(!h){typeof window.showToast=="function"&&window.showToast("Data PO tidak ditemukan!");return}ie("doc-modal-title","Preview Purchase Order (PO)");const u=ke("w-16 h-16"),F=Z(h.date||h.createdAt),v=h.poNumber||h.id,C=h.paymentType==="tempo"?`Tempo ${h.tempoDays||14} Hari (Jatuh Tempo: ${Z(h.tempoDueDate)})`:h.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai",B=`
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
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(v)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${F}</p>
                <p class="text-xs font-bold mt-1 text-[var(--color-primary)]">Status: ${h.status==="ordered"?"DIPESAN":h.status==="received"?"DITERIMA":"SELESAI"}</p>
            </div>
        </div>
        `,$=`
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Kepada Rekanan / Supplier:</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${i(h.supplierName||"Supplier")}</p>
                ${h.supplierPhone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(h.supplierPhone)}</p>`:""}
                ${h.supplierAddress?`<p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${i(h.supplierAddress)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1.5">Ketentuan & Pembayaran:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Termin Pembayaran:</span> <b class="text-slate-900">${C}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tujuan Pengiriman:</span> <b class="text-slate-900">${i(p.store?.name||"Gudang Utama Toko")}</b></p>
                ${h.notes?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1.5"><i class="fa-solid fa-note-sticky mr-1"></i> ${i(h.notes)}</p>`:""}
            </div>
        </div>
        `,A=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Modal (HPP)</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `,O=(h.items||[]).map((j,y)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${y+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(j.name)}
                ${j.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(j.variantName)}</span>`:""}
                ${j.sku?`<span class="text-slate-400 text-[9.5px] font-mono block mt-0.5">SKU: ${i(j.sku)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${wt(j.qty)} <span class="text-[10px] font-normal text-slate-500">${i(j.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${k(j.unitPrice)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${k(Math.round((parseFloat(j.qty)||0)*(parseFloat(j.unitPrice)||0)))}</td>
        </tr>
        `),L=`
        <div class="flex justify-end mb-6 mt-2">
            <div class="w-80 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk:</span><span class="font-bold text-slate-800">${k(h.subtotal)}</span></div>
                ${h.discount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Potongan Diskon:</span><span>-${k(h.discount)}</span></div>`:""}
                ${h.shippingFee>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim:</span><span>+${k(h.shippingFee)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL ORDER (PO):</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${k(h.total)}</span>
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
                <span class="font-bold text-slate-900 uppercase">${i(h.supplierName||"Rekanan / Supplier")}</span>
            </div>
        </div>
        `,ee=ye({docTitle:"Purchase Order",docNumber:`#${v}`,docDate:F,kopHtml:B,metaHtml:$,tableHeaderHtml:A,rows:O,summaryHtml:L,signaturesHtml:z,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});ve(ee);return}if(e==="stock_opname"){const P=p.stockOpnameHistory||[],h=P.find(y=>String(y.id)===String(t)||String(y.soNumber)===String(t))||P[0];if(!h){typeof window.showToast=="function"&&window.showToast("Data Berita Acara Stock Opname tidak ditemukan!");return}ie("doc-modal-title","Preview Berita Acara Stock Opname");const u=ke("w-16 h-16"),F=Z(h.date,!0),v=h.soNumber||h.id,C=typeof zt=="function"?zt():!1,B=h.items||[],$=`
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
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${i(v)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${F}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Auditor: <b class="text-slate-900">${i(h.auditorName||"Staf Auditor")}</b></p>
            </div>
        </div>
        `,A=`
        <div class="grid grid-cols-4 gap-3 mb-5">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Total Diperiksa</span>
                <span class="text-lg font-black text-slate-800 font-mono">${h.totalItemsAudited||0}</span>
                <span class="text-[10px] text-slate-500 block">Item Produk</span>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Item Selisih</span>
                <span class="text-lg font-black ${h.totalWithDiff>0?"text-amber-600":"text-emerald-600"} font-mono">${h.totalWithDiff||0}</span>
                <span class="text-[10px] text-slate-500 block">Disesuaikan</span>
            </div>
            <div class="bg-rose-50 p-3 rounded-xl border border-rose-200 text-center">
                <span class="text-[9px] font-black uppercase text-rose-500 block tracking-wider">Total Kurang (Loss)</span>
                <span class="text-lg font-black text-rose-600 font-mono">−${h.totalLossUnits||0}</span>
                <span class="text-[10px] text-rose-500 block">${C?"−"+k(h.totalLossRp||0):"Pcs"}</span>
            </div>
            <div class="bg-amber-50 p-3 rounded-xl border border-amber-200 text-center">
                <span class="text-[9px] font-black uppercase text-amber-600 block tracking-wider">Total Lebih (Surplus)</span>
                <span class="text-lg font-black text-amber-600 font-mono">+${h.totalSurplusUnits||0}</span>
                <span class="text-[10px] text-amber-600 block">${C?"+"+k(h.totalSurplusRp||0):"Pcs"}</span>
            </div>
        </div>
        `,O=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Hasil Fisik</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Selisih</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Alasan &amp; Keterangan</th>
            ${C?'<th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Dampak HPP</th>':'<th class="py-2.5 px-3 rounded-tr-xl text-right w-16">Satuan</th>'}
        </tr>
        `,L=B.length===0?['<tr><td colspan="7" class="py-8 text-center text-slate-500 italic">Semua stok fisik barang dalam kondisi berimbang (100% Sesuai / Selisih 0).</td></tr>']:B.map((y,te)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${te+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${i(y.productName)}
                ${y.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${i(y.variantName)}</span>`:""}
                ${y.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(y.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center font-mono text-slate-600">${y.systemStock} ${i(y.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${y.physicalStock} ${i(y.unit||"pcs")}</td>
            <td class="py-2 px-3 text-center font-bold font-mono ${y.diff<0?"text-rose-600":"text-amber-600"}">
                ${y.diff<0?`−${Math.abs(y.diff)}`:`+${y.diff}`}
            </td>
            <td class="py-2 px-3 text-[10.5px]">
                <span class="font-bold text-slate-800">${i(y.reason==="salah_hitung"?"Koreksi Kasir":y.reason==="rusak"?"Barang Rusak":y.reason==="hilang"?"Barang Hilang":y.reason==="kadaluarsa"?"Expired":y.reason==="bonus"?"Bonus Supplier":y.reason)}</span>
                ${y.notes?`<span class="text-slate-500 block italic">"${i(y.notes)}"</span>`:""}
            </td>
            ${C?`
                <td class="py-2 px-3 text-right font-mono font-bold ${y.diff<0?"text-rose-600":"text-amber-600"}">
                    ${y.diff<0?"−":"+"}${k(Math.abs(y.diffValueHpp||0))}
                </td>`:`
                <td class="py-2 px-3 text-right text-slate-500">${i(y.unit||"pcs")}</td>
            `}
        </tr>
        `),z=h.notes?`
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs mb-5 text-slate-700">
            <b class="text-slate-900">Catatan Auditor:</b> ${i(h.notes)}
        </div>`:"",ee=`
        <div class="grid grid-cols-3 gap-6 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Pemeriksa / Auditor:</span>
                <div class="w-36 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(h.auditorName||"Petugas Auditor")}</span>
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
        `,j=ye({docTitle:"Berita Acara Stock Opname",docNumber:`#${v}`,docDate:F,kopHtml:$,metaHtml:A,tableHeaderHtml:O,rows:L,extraBlocksHtml:z,signaturesHtml:ee,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});ve(j);return}if(e==="stock_opname_worksheet"){ie("doc-modal-title","Preview Lembar Kerja Hitung Fisik (Worksheet)");const P=ke("w-14 h-14"),h=Z(new Date),u=p.products||[],F=[];u.forEach(L=>{!L||L.id==null||(L.variants&&L.variants.length>0?L.variants.forEach(z=>{F.push({name:L.name,variantName:z.name,sku:z.sku||L.sku||"",category:L.category||"Umum",unit:L.unit||"pcs",systemStock:parseFloat(z.stock)||0})}):F.push({name:L.name,variantName:"",sku:L.sku||"",category:L.category||"Umum",unit:L.unit||"pcs",systemStock:parseFloat(L.stock)||0}))});const v=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3">
                ${P}
                <div>
                    <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${i(p.store?.slogan||"Pusat Alat Teknik & Bangunan")}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${i(p.store?.address||"")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-black text-xl tracking-wider text-slate-900 uppercase">LEMBAR KERJA AUDIT</h2>
                <h3 class="font-bold text-xs tracking-widest text-amber-600 uppercase">STOCK OPNAME FISIK RAK</h3>
                <p class="text-xs font-medium text-slate-500 mt-1">Tanggal Cetak: <b>${h}</b></p>
                <p class="text-xs font-medium text-slate-500">Total Item: <b>${F.length} Baris</b></p>
            </div>
        </div>
        `,C=`
        <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[10px] text-slate-600 mb-4 flex items-center justify-between">
            <span><b>Petunjuk:</b> Hitung fisik barang di rak/gudang secara teliti. Tulis angka aktual pada kolom <b>HASIL FISIK</b> dan beri catatan bila ada barang rusak/cacat.</span>
        </div>
        `,B=`
        <tr class="border-b-2 border-slate-800 text-[9.5px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">Cek</th>
            <th class="py-2 px-2 text-center w-8 border-r border-slate-700">No</th>
            <th class="py-2 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi Varian</th>
            <th class="py-2 px-2 border-r border-slate-700 w-28">Kategori / Rak</th>
            <th class="py-2 px-2 text-center w-20 border-r border-slate-700">Stok Sistem</th>
            <th class="py-2 px-2 text-center w-28 border-r border-slate-700 bg-amber-900/60">HASIL FISIK</th>
            <th class="py-2 px-3 text-left w-36">Kondisi &amp; Catatan</th>
        </tr>
        `,$=F.map((L,z)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200"><span class="inline-block w-3.5 h-3.5 border border-slate-400 rounded-sm"></span></td>
            <td class="py-2 px-2 text-center font-mono text-slate-400 border-r border-slate-200">${z+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 border-r border-slate-200 uppercase">
                ${i(L.name)}
                ${L.variantName?`<span class="bg-slate-100 text-slate-700 px-1 rounded text-[8.5px] border border-slate-300 ml-1 font-semibold">${i(L.variantName)}</span>`:""}
                ${L.sku?`<span class="text-slate-400 font-mono text-[8.5px] block">SKU: ${i(L.sku)}</span>`:""}
            </td>
            <td class="py-2 px-2 text-[10px] text-slate-600 border-r border-slate-200">
                ${i(L.category)}
            </td>
            <td class="py-2 px-2 text-center font-mono font-bold text-slate-600 border-r border-slate-200">
                ${L.systemStock} ${i(L.unit)}
            </td>
            <td class="py-2 px-2 text-center font-mono border-r border-slate-200 bg-amber-50/40">
                <span class="inline-block w-20 h-5 border-b-2 border-slate-400"></span>
            </td>
            <td class="py-2 px-3 text-[10px] text-slate-400">
                <span class="inline-block w-full h-5 border-b border-slate-200"></span>
            </td>
        </tr>
        `),O=ye({docTitle:"Lembar Kerja Audit Rak",docNumber:`TOTAL ${F.length} ITEM`,docDate:h,kopHtml:v,metaHtml:C,tableHeaderHtml:B,rows:$,tableClass:"w-full text-left border-collapse mb-4 text-[11px]",signaturesHtml:`
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
        `,singlePageMax:16,itemsFirstPage:15,itemsMiddlePage:20,itemsLastPage:14});ve(O);return}if(e==="tempo_invoice"){const P=t||window.cVOrd;let u=(window.cachedPiutangOrders||[]).find(_=>String(_.orderId)===String(P))||(window.gOrds||[]).find(_=>String(_.orderId)===String(P));if(!u&&window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(P)&&(u=window.lastPrintedOrder),!u){typeof window.showToast=="function"&&window.showToast("Data nota tagihan piutang tidak ditemukan!");return}ie("doc-modal-title","Preview Nota Tagihan Piutang (Tempo)");const F=ke("w-16 h-16"),v=Z(u.dateString||u.timestamp),C=parseFloat(u.payment?.tempoBalance)||0,B=u.payment?.tempoPenaltyRate!==void 0?parseFloat(u.payment.tempoPenaltyRate):1,$=u.payment?.tempoPenaltyStopped===!0;let A=0;const O=u.payment?.tempoDueDate||0;let L=0,z=0,ee=!1,j=!1;const y=Date.now();O>0&&(y>O?(L=Math.floor((y-O)/(24*60*60*1e3)),L>0&&(ee=!0)):(z=Math.ceil((O-y)/(24*60*60*1e3)),z<=3&&(j=!0))),$?A=parseFloat(u.payment?.tempoFixedPenalty)||0:ee&&(A=B/100*C*L);const te=C+A,J=u.payment?.installments||[],de=J.reduce((_,he)=>_+(parseFloat(he.amount)||0),0),V=u.payment?.grandTotal||C+de,Ce=u.payment?.paymentStatus==="lunas"||C<=0,Q=!!(u.payment?.isPaylater||u.isPaylater||u.payment?.subMethod==="paylater");let G=Q?"PAYLATER BERJALAN":"TEMPO BERJALAN",re="text-blue-600 bg-blue-50 border-blue-200";Ce?(G="LUNAS SEPENUHNYA",re="text-emerald-600 bg-emerald-50 border-emerald-300"):ee?(G=`TERLAMBAT ${L} HARI`,re="text-rose-600 bg-rose-50 border-rose-300"):j&&(G=`JATUH TEMPO H-${z<=0?"0":z}`,re="text-amber-600 bg-amber-50 border-amber-300");const ce=st("font-mono text-xs"),pe=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${F}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(p.store?.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(p.store?.address||"Alamat fisik toko")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(p.store?.wa||p.store?.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-2xl tracking-widest text-slate-900 uppercase">${Q?"NOTA PUTRI PAYLATER":"NOTA TAGIHAN PIUTANG"}</h2>
                <p class="text-sm font-bold text-slate-600 mt-1.5 font-mono">#${i(u.orderId)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tgl Transaksi: ${v}</p>
                <div class="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${re}">
                    ${i(G)}
                </div>
            </div>
        </div>
        `,Le=`
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
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tanggal Jatuh Tempo:</span> <b class="text-slate-900 font-mono">${Z(O)}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Sistem Pembayaran:</span> <b class="${Q?"text-emerald-700 font-bold":"text-slate-900"} uppercase">${Q?"Putri PayLater Member VIP":"Tempo / Bertahap"}</b></p>
                ${Q?`<p class="text-xs font-semibold text-slate-700 mb-1"><span class="text-slate-500">Tenor Cicilan:</span> <b class="text-emerald-800 font-bold uppercase">${u.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":u.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)"}</b></p>`:""}
                ${ee?`<p class="text-xs font-bold text-rose-600 mb-1"><span class="text-slate-500">Status:</span> Lewat ${L} Hari (Denda ${B}%/hari)</p>`:""}
                <p class="text-xs font-semibold text-slate-700"><span class="text-slate-500">Kasir / Admin:</span> <b class="text-slate-900 uppercase">${i(u.cashierName||"Kasir Toko")}</b></p>
            </div>
        </div>
        `,Pe=`
        <tr class="border-b-2 border-slate-800 text-[10.5px] font-bold text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
            <th class="py-2.5 px-3 text-right w-32 border-r border-slate-700">Harga Satuan</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-32">Subtotal</th>
        </tr>
        `,be=(u.items||[]).map((_,he)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${he+1}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900 uppercase">
                ${i(_.name)}
                ${_.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5 font-semibold">Varian: ${i(_.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-sm text-slate-800">${wt(_.qty)} <span class="text-[10px] font-normal text-slate-500">${i(_.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono text-slate-600">${k(_.effectivePrice||_.price)}</td>
            <td class="py-2.5 px-3 text-right font-bold font-mono text-slate-900">${k(_.subtotal||Math.round((parseFloat(_.qty)||0)*(parseFloat(_.effectivePrice||_.price)||0)))}</td>
        </tr>
        `);let De="",we=0,ue="-",Re=1;if(Q&&Array.isArray(u.payment?.paylaterSchedule)&&u.payment.paylaterSchedule.length>0){let _=0,he=!1;const Ve=u.payment.paylaterSchedule.map((X,It)=>{const sa=X.installmentIndex||X.installmentNo||X.installmentNumber||X.month||It+1,oa=parseFloat(X.pokok||X.principal)||0,na=parseFloat((X.adminFee||0)+(X.serviceFee||0))||0,Et=parseFloat(X.total||X.totalMonthly||X.totalInstallment)||oa+na;_+=Et;const ra=_,ut=X.dueDate||0,ia=X.dueDateFormatted||X.dueDateStr||(ut?Z(ut):"-");let mt="";if(de>=ra)mt='<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-300">LUNAS</span>';else if(he)mt='<span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200">BULAN DEPAN</span>';else{he=!0,Re=sa;const ls=Math.max(0,ra-de);we=Math.min(ls,Et),ue=ia,mt=ut&&y>ut?'<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 border border-rose-300">JATUH TEMPO</span>':'<span class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">WAJIB BULAN INI</span>'}return`
                <tr class="hover:bg-slate-50">
                    <td class="py-2 px-3 text-center text-slate-800 font-bold">Bulan Ke-${sa}</td>
                    <td class="py-2 px-3 font-mono font-medium text-slate-700 text-center">${ia}</td>
                    <td class="py-2 px-3 text-right text-slate-600 font-mono">${k(oa)}</td>
                    <td class="py-2 px-3 text-right text-slate-500 font-mono">${k(na)}</td>
                    <td class="py-2 px-3 text-right font-black font-mono text-slate-900">${k(Et)}</td>
                    <td class="py-2 px-3 text-center">${mt}</td>
                </tr>`}).join("");De=`
            <div class="mb-5">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                        <i class="fa-solid fa-calendar-check text-emerald-600"></i> Tabel Rencana Angsuran Bulanan (${u.payment?.paylaterMonths||1}x Tenor):
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
                        ${Ve}
                    </tbody>
                </table>
            </div>`}const Te=`
        ${De}
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
                    ${J.map((_,he)=>`
                    <tr class="hover:bg-slate-50">
                        <td class="py-1.5 px-3 text-center text-slate-500">${he+1}</td>
                        <td class="py-1.5 px-3 text-slate-700">${Z(_.date)}</td>
                        <td class="py-1.5 px-3 uppercase text-slate-600 font-bold">${i(_.method||"Tunai")}</td>
                        <td class="py-1.5 px-3 text-right font-bold text-emerald-600">+ ${k(_.amount)}</td>
                        <td class="py-1.5 px-3 text-slate-500 text-[11px] font-sans">${i(_.note||"-")}</td>
                    </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>`:""}
        `,Ue=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran Toko Putri:
                </h4>
                <div class="space-y-1.5 pt-0.5">${ce}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi bukti transfer: <b>${i(p.store?.wa||p.store?.phone||"-")}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Harap mencantumkan Nomor Nota (#${i(u.orderId)}) pada berita transfer.</p>
                </div>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Awal:</span><span class="font-bold text-slate-800">${k(V)}</span></div>
                ${Q?`<div class="flex justify-between text-emerald-600 font-bold"><span>Limit PayLater Terpakai:</span><span>${k(u.payment?.paylaterUsed||V-(u.payment?.tempoDp||u.payment?.dp||0))}</span></div>`:""}
                ${Q&&u.payment?.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater:</span><span class="font-bold">+${k(u.payment.paylaterAdminFee)}</span></div>`:""}
                ${Q&&u.payment?.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan:</span><span class="font-bold">+${k(u.payment.paylaterServiceFee)}</span></div>`:""}
                ${(parseFloat(u.payment?.tempoDp||u.payment?.dp)||0)>0?`<div class="flex justify-between text-slate-600"><span>Uang Muka (DP Dibayar):</span><span class="font-bold">${k(u.payment?.tempoDp||u.payment?.dp||0)}</span></div>`:""}
                ${de>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Masuk:</span><span>-${k(de)}</span></div>`:""}
                
                ${Q&&we>0&&we<C?`
                <!-- KOTAK HIGHLIGHT ANGSURAN BULAN INI -->
                <div class="p-2.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 space-y-0.5">
                    <div class="flex justify-between items-center text-[9.5px] font-black uppercase tracking-wider text-amber-800">
                        <span>Angsuran Bulan Ini (Termin Ke-${Re}):</span>
                        <span class="font-mono text-[9px] bg-amber-200/80 px-1.5 py-0.5 rounded">Jatuh Tempo: ${ue}</span>
                    </div>
                    <div class="flex justify-between items-center text-sm font-black font-mono pt-0.5">
                        <span>Wajib Dibayar Sekarang:</span>
                        <span class="text-amber-900 text-base font-black">${k(we)}</span>
                    </div>
                </div>
                <div class="flex justify-between text-slate-500 text-[11px]">
                    <span>Sisa Termin Bulan Berikutnya:</span>
                    <span class="font-mono font-bold">${k(Math.max(0,C-we))}</span>
                </div>
                `:""}

                <div class="flex justify-between text-slate-700 font-bold"><span>${Q?"Total Sisa Pokok (Semua Tenor):":"Sisa Pokok Piutang:"}</span><span>${k(C)}</span></div>
                ${A>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Denda Keterlambatan:</span><span>+${k(A)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>${Q?"TOTAL PELUNASAN PENUH:":"SISA WAJIB BAYAR:"}</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${k(Ce?0:te)}</span>
                </div>
            </div>
        </div>
        `,Oe=`
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
        `,pt=ye({docTitle:Q?"Nota Putri PayLater":"Nota Tagihan Piutang",docNumber:`#${u.orderId}`,docDate:v,kopHtml:pe,metaHtml:Le,tableHeaderHtml:Pe,rows:be,extraBlocksHtml:Te,summaryHtml:Ue,signaturesHtml:Oe,singlePageMax:5,itemsFirstPage:5,itemsMiddlePage:12,itemsLastPage:4});ve(pt);return}if(e==="tempo_customer_ledger"){const P=String(t||"").trim(),u=(window.cachedPiutangOrders||[]).filter(G=>{const re=String(G.customer?.phone||G.customer?.wa||"").replace(/\D/g,""),ce=String(G.customer?.name||"").toLowerCase().trim(),pe=P.replace(/\D/g,"");return!!(pe.length>=8&&re.includes(pe)||ce&&P.toLowerCase().includes(ce))});if(u.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada nota piutang aktif untuk pelanggan ini.");return}const F=u[0].customer||{},v=F.name||"Pelanggan",C=F.wa||F.phone||"-";ie("doc-modal-title",`Kartu Piutang: ${v}`);const B=ke("w-16 h-16"),$=Z(Date.now());let A=0,O=0,L=0,z=0,ee=0;const j=u.map((G,re)=>{const ce=parseFloat(G.payment?.tempoBalance)||0,pe=G.payment?.tempoPenaltyRate!==void 0?parseFloat(G.payment.tempoPenaltyRate):1,Le=G.payment?.tempoPenaltyStopped===!0;let Pe=0;const be=G.payment?.tempoDueDate||0;let De=0,we=!1;const ue=Date.now();be>0&&ue>be&&(De=Math.floor((ue-be)/(24*60*60*1e3)),De>0&&(we=!0)),Le?Pe=parseFloat(G.payment?.tempoFixedPenalty)||0:we&&(Pe=pe/100*ce*De);const Te=(G.payment?.installments||[]).reduce((pt,_)=>pt+(parseFloat(_.amount)||0),0),Ue=G.payment?.grandTotal||ce+Te,Oe=ce+Pe;return A+=Ue,O+=Te,L+=ce,z+=Pe,ee+=Oe,`
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="py-2.5 px-3 text-center font-mono text-slate-500">${re+1}</td>
                <td class="py-2.5 px-3 font-mono font-bold text-slate-800">#${i(G.orderId)}</td>
                <td class="py-2.5 px-3 font-medium text-slate-600">${Z(G.dateString||G.timestamp)}</td>
                <td class="py-2.5 px-3 font-mono ${we?"text-rose-600 font-bold":"text-slate-700"}">${Z(be)} ${we?`<span class="text-[9.5px] text-rose-500">(+${De}h)</span>`:""}</td>
                <td class="py-2.5 px-3 text-right font-mono text-slate-600">${k(Ue)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-600 font-bold">${k(Te)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-rose-600">${Pe>0?k(Pe):"-"}</td>
                <td class="py-2.5 px-3 text-right font-mono font-black text-slate-900">${k(Oe)}</td>
            </tr>
            `}),y=st("font-mono text-xs"),te=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${B}
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
                <p class="text-xs font-semibold text-slate-500 mt-0.5">Dicetak: ${$}</p>
                <span class="inline-block mt-1.5 px-3 py-0.5 bg-amber-50 text-amber-700 border border-amber-300 rounded-full text-[11px] font-black uppercase tracking-wider">
                    ${u.length} NOTA BELUM LUNAS
                </span>
            </div>
        </div>
        `,J=`
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Informasi Debitur / Pelanggan:</h3>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="text-[11px] text-slate-500">Nama Pelanggan / Badan:</p>
                    <p class="font-bold text-base text-slate-900 uppercase">${i(v)}</p>
                </div>
                <div>
                    <p class="text-[11px] text-slate-500">Nomor WhatsApp / HP:</p>
                    <p class="font-mono font-bold text-base text-emerald-600">+${i(C)}</p>
                </div>
            </div>
        </div>
        `,de=`
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
                <div class="space-y-1 pt-0.5">${y}</div>
                <p class="text-[9.5px] text-slate-500 pt-1.5 border-t border-slate-200">Kartu piutang ini mencatat seluruh tagihan aktif per tanggal cetak.</p>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between text-slate-600"><span>Total Transaksi Keseluruhan:</span><span class="font-bold text-slate-800">${k(A)}</span></div>
                <div class="flex justify-between text-emerald-600 font-bold"><span>Total Pembayaran Diterima (-):</span><span>-${k(O)}</span></div>
                <div class="flex justify-between text-slate-700 font-bold"><span>Total Sisa Pokok Piutang:</span><span>${k(L)}</span></div>
                ${z>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Total Denda (+):</span><span>+${k(z)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 mt-1.5 font-bold text-sm text-slate-900">
                    <span>TOTAL AKUMULASI PIUTANG:</span>
                    <span class="text-[var(--color-primary)] font-black text-base">${k(ee)}</span>
                </div>
            </div>
        </div>
        `,Ce=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Penerima Tagihan (Debitur):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(v)}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9.5px]">Bagian Keuangan / Pemilik Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,Q=ye({docTitle:"Kartu Piutang Pelanggan",docNumber:"STATEMENT OF ACCOUNT",docDate:$,kopHtml:te,metaHtml:J,tableHeaderHtml:de,rows:j,summaryHtml:V,signaturesHtml:Ce,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});ve(Q);return}if(e==="tempo_recap"){const P=window.cachedPiutangOrders&&window.cachedPiutangOrders.length>0?window.cachedPiutangOrders:(window.gOrds||[]).filter(V=>V.payment?.method==="tempo"&&(parseFloat(V.payment?.tempoBalance)>0||V.payment?.status!=="paid"&&V.payment?.status!=="completed"));if(!P||P.length===0){typeof window.showToast=="function"&&window.showToast("Tidak ada nota piutang aktif untuk direkap.");return}ie("doc-modal-title","Rekap Buku Piutang Toko A4");const h=ke("w-16 h-16"),u=Z(Date.now(),!0),F=`AR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${Math.floor(1e3+Math.random()*9e3)}`;let v=0,C=0,B=0,$=0,A=0;const O=new Set,L=P.map((V,Ce)=>{const Q=V.customer||{},G=Q.name||"Pelanggan",re=Q.wa||Q.phone||"-",ce=`${G}_${re}`;O.add(ce);const pe=Z(V.dateString||V.createdAt),Le=V.payment?.tempoDueDate||0,Pe=Z(Le),be=parseFloat(V.payment?.tempoBalance)||0,De=V.payment?.tempoPenaltyRate!==void 0?parseFloat(V.payment.tempoPenaltyRate):1,we=V.payment?.tempoPenaltyStopped===!0;let ue=0,Re=0,Te=!1,Ue=!1;const Oe=Date.now();if(Le>0)if(Oe>Le)Re=Math.floor((Oe-Le)/(24*60*60*1e3)),Re>0&&(Te=!0);else{const X=Math.ceil((Le-Oe)/864e5);X<=3&&X>=0&&(Ue=!0)}we?ue=parseFloat(V.payment?.tempoFixedPenalty)||0:Te&&(ue=De/100*be*Re);const _=(V.payment?.installments||[]).reduce((X,It)=>X+(parseFloat(It.amount)||0),0);V.payment?.grandTotal||be+_;const he=be+ue;v+=be,C+=ue,B+=he;let Ve="";return Te?($++,Ve=`<span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-rose-100 text-rose-700 border border-rose-200">Telat ${Re} Hari</span>`):Ue?Ve='<span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200">H-3 Tempo</span>':(A++,Ve='<span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">Lancar</span>'),`
            <tr class="border-b border-slate-200 text-[10px] hover:bg-slate-50 transition-colors">
                <td class="py-2 px-2 text-center text-slate-500 font-bold border-r border-slate-200">${Ce+1}</td>
                <td class="py-2 px-2.5 border-r border-slate-200">
                    <p class="font-bold text-slate-900 leading-tight">${i(G)}</p>
                    <p class="text-[9px] text-slate-500 font-mono"><i class="fa-brands fa-whatsapp text-emerald-600"></i> ${i(re)}</p>
                </td>
                <td class="py-2 px-2 border-r border-slate-200 font-mono">
                    <p class="font-bold text-slate-800">#${i(V.orderId||V.id)}</p>
                    <p class="text-[9px] text-slate-500">${pe}</p>
                </td>
                <td class="py-2 px-2 text-center border-r border-slate-200 font-mono">
                    <span class="font-bold ${Te?"text-rose-600":"text-slate-700"}">${Pe}</span>
                </td>
                <td class="py-2 px-2 text-right border-r border-slate-200 font-mono font-bold text-slate-800">${k(be)}</td>
                <td class="py-2 px-2 text-right border-r border-slate-200 font-mono ${ue>0?"text-rose-600 font-bold":"text-slate-400"}">
                    ${ue>0?`+${k(ue)}`:"Rp 0"}
                </td>
                <td class="py-2 px-2 text-right border-r border-slate-200 font-mono font-black text-slate-900 bg-slate-50/80">${k(he)}</td>
                <td class="py-2 px-2 text-center">${Ve}</td>
            </tr>`}),z=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
            <div class="flex items-center gap-3.5">
                ${h}
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
                <p class="text-xs font-bold text-slate-600 font-mono mt-1">#${i(F)}</p>
                <p class="text-[10px] text-slate-500 mt-0.5">Waktu Cetak: ${u}</p>
            </div>
        </div>
        `,ee=st("font-mono text-[10px]"),j=`
        <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                <h3 class="text-[9px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-1">Ringkasan Portofolio Debitur:</h3>
                <div class="grid grid-cols-2 gap-2 text-[10px] pt-1">
                    <div>
                        <span class="text-slate-500">Total Debitur:</span>
                        <b class="text-slate-900 block font-mono text-xs">${O.size} Orang</b>
                    </div>
                    <div>
                        <span class="text-slate-500">Total Nota Aktif:</span>
                        <b class="text-slate-900 block font-mono text-xs">${P.length} Transaksi</b>
                    </div>
                    <div>
                        <span class="text-rose-600 font-medium">Nota Terlambat:</span>
                        <b class="text-rose-700 block font-mono text-xs">${$} Nota</b>
                    </div>
                    <div>
                        <span class="text-emerald-600 font-medium">Nota Lancar:</span>
                        <b class="text-emerald-700 block font-mono text-xs">${A} Nota</b>
                    </div>
                </div>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                <h3 class="text-[9px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-1 flex items-center gap-1">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Penerimaan Pelunasan Toko:
                </h3>
                <div class="space-y-0.5 pt-0.5">${ee}</div>
            </div>
        </div>
        `,y=`
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
        `,te=`
        <div class="grid grid-cols-2 gap-4 mb-4 items-start">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[10px] space-y-1">
                <p class="font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-1">Ketentuan Rekap Piutang Toko:</p>
                <p class="text-slate-600 leading-snug">1. Dokumen ini sah sebagai bukti buku pembukuan piutang berjalan Toko Putri.</p>
                <p class="text-slate-600 leading-snug">2. Seluruh nominal sisa pokok dan denda mengikat hingga tanggal cetak dokumen.</p>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1.5">
                <div class="flex justify-between text-slate-600 text-[11px]">
                    <span>Total Sisa Pokok Piutang:</span>
                    <span class="font-bold text-slate-800 font-mono">${k(v)}</span>
                </div>
                ${C>0?`
                <div class="flex justify-between text-rose-600 text-[11px] font-bold">
                    <span>Total Akumulasi Denda (+):</span>
                    <span class="font-mono">+${k(C)}</span>
                </div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-1.5 mt-1 font-bold text-slate-900">
                    <span class="text-xs uppercase tracking-wider">TOTAL TAGIHAN BERJALAN:</span>
                    <span class="text-[var(--color-primary)] font-black text-sm font-mono">${k(B)}</span>
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
        `,de=ye({docTitle:"Rekap Buku Piutang Toko",docNumber:F,docDate:u,kopHtml:z,metaHtml:j,tableHeaderHtml:y,rows:L,summaryHtml:te,signaturesHtml:J,singlePageMax:7,itemsFirstPage:7,itemsMiddlePage:15,itemsLastPage:7});ve(de);return}if(e==="sales_return"){const P=typeof t=="object"&&t!==null?t.returnId:t,h=p.salesReturns||[],u=h.find(y=>String(y.id)===String(P))||h[0];if(!u){typeof window.showToast=="function"&&window.showToast("Data retur penjualan tidak ditemukan!");return}ie("doc-modal-title","Preview Nota Retur Penjualan (A4)");const F=ke("w-16 h-16"),v=Z(u.createdAt,!0),C=u.refundMethod==="cash"?"Pengembalian Tunai (Cash Refund)":u.refundMethod==="credit"?"Saldo Kredit Toko (Store Credit)":u.refundMethod==="exchange"?"Tukar Barang (Exchange)":"Lainnya",B=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${F}
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
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${i(u.id)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${v}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Rujukan Nota: <b class="font-mono text-slate-900">#${i(u.orderId||"-")}</b></p>
            </div>
        </div>
        `,$=`
        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Identitas Pelanggan / Konsumen</span>
                <p class="font-bold text-slate-900 text-sm">${i(u.customerName||"Pelanggan Umum")}</p>
                ${u.customerPhone?`<p class="text-slate-600 font-mono text-[11px]"><i class="fa-brands fa-whatsapp text-emerald-600"></i> ${i(u.customerPhone)}</p>`:""}
                <p class="text-slate-500 text-[11px]">Saluran Transaksi: <span class="font-semibold text-slate-700">${u.source==="pos"?"Kasir POS":"Website Online"}</span></p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Penyelesaian Finansial</span>
                <p class="font-bold text-slate-900 text-sm">${i(C)}</p>
                <p class="text-slate-500 text-[11px]">Petugas Pelaksana: <span class="font-semibold text-slate-700">${i(u.cashierName||"Kasir Toko")}</span></p>
                <p class="text-slate-500 text-[11px]">Status Retur: <span class="font-bold text-emerald-600 uppercase">SELESAI (COMPLETED)</span></p>
            </div>
        </div>
        `,A=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-28 border-r border-slate-700">Kondisi &amp; Alokasi</th>
            <th class="py-2.5 px-3 text-center w-16 border-r border-slate-700">Qty Retur</th>
            <th class="py-2.5 px-3 text-right w-24 border-r border-slate-700">Harga Jual</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Subtotal Retur</th>
            <th class="py-2.5 px-3 rounded-tr-xl w-36">Alasan Pengembalian</th>
        </tr>
        `,O=u.items||[],L=O.map((y,te)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${te+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${i(y.name)}
                ${y.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${i(y.variantName)}</span>`:""}
                ${y.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(y.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center text-[10.5px]">
                ${y.condition==="good"?'<span class="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 block text-[9.5px]">Baik (Restok Rak)</span>':'<span class="font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 block text-[9.5px]">Rusak (Karantina)</span>'}
            </td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${wt(y.qty)}</td>
            <td class="py-2 px-3 text-right font-mono text-slate-600">${k(y.soldPrice||0)}</td>
            <td class="py-2 px-3 text-right font-mono font-bold text-slate-900">${k(y.subtotalRefund||y.qty*y.soldPrice||0)}</td>
            <td class="py-2 px-3 text-[10.5px] text-slate-600">
                ${i(y.reason||"-")}
            </td>
        </tr>
        `),z=`
        <div class="grid grid-cols-2 gap-4 mb-4 items-start">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[10px] space-y-1">
                <p class="font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-1">Ketentuan Retur Resmi Toko:</p>
                <p class="text-slate-600 leading-snug">1. Barang retur telah diverifikasi fisik dan dicocokkan dengan struk pembelian asli.</p>
                <p class="text-slate-600 leading-snug">2. Kompensasi diberikan sesuai metode yang disepakati dan tidak dapat dibatalkan.</p>
                ${u.notes?`<p class="mt-2 text-slate-700 font-semibold border-t border-slate-200 pt-1">Catatan: "${i(u.notes)}"</p>`:""}
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div class="flex justify-between items-center text-slate-600">
                    <span>Total Item Diretur:</span>
                    <span class="font-mono font-bold text-slate-800">${O.reduce((y,te)=>y+(parseFloat(te.qty)||0),0)} Unit</span>
                </div>
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 font-bold text-slate-900">
                    <span class="uppercase tracking-wider">TOTAL NILAI RETUR:</span>
                    <span class="text-rose-600 font-black text-base font-mono">${k(u.totalRefund||0)}</span>
                </div>
            </div>
        </div>
        `,ee=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Konsumen / Pembeli:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(u.customerName||"Konsumen")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Kasir / Petugas Toko:</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(u.cashierName||p.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,j=ye({docTitle:"Nota Retur Penjualan",docNumber:`#${u.id}`,docDate:v,kopHtml:B,metaHtml:$,tableHeaderHtml:A,rows:L,summaryHtml:z,signaturesHtml:ee,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});ve(j);return}if(e==="vendor_return"){const P=typeof t=="object"&&t!==null?t.returnId:t,h=p.vendorReturns||[],u=h.find(y=>String(y.id)===String(P))||h[0];if(!u){typeof window.showToast=="function"&&window.showToast("Data retur supplier tidak ditemukan!");return}ie("doc-modal-title","Preview Surat Pengembalian Barang ke Supplier (A4)");const F=ke("w-16 h-16"),v=Z(u.createdAt,!0),C=u.settlementMethod==="ap_deduction"?"Potong Hutang PO (AP Deduction)":u.settlementMethod==="cash_refund"?"Pengembalian Dana Kas / Transfer":"Lainnya",B=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
            <div class="flex items-center gap-4">
                ${F}
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
                <p class="text-sm font-bold text-slate-700 mt-1 font-mono">#${i(u.id)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${v}</p>
                <p class="text-xs font-bold text-slate-600 mt-0.5">Rujukan PO: <b class="font-mono text-slate-900">#${i(u.poId||"Non-PO")}</b></p>
            </div>
        </div>
        `,$=`
        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Ditujukan Kepada Rekanan Supplier</span>
                <p class="font-bold text-slate-900 text-sm uppercase">${i(u.supplierName||"Pemasok Toko")}</p>
                <p class="text-slate-500 text-[11px]">Rujukan Kulakan PO: <span class="font-mono font-bold text-slate-800">${i(u.poId||"-")}</span></p>
                <p class="text-slate-500 text-[11px]">Status Dokumen: <span class="font-bold text-amber-600 uppercase">TERBIT / DISERAHKAN</span></p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                <span class="text-[9px] font-black uppercase text-slate-400 block tracking-wider">Penyelesaian Finansial Supplier</span>
                <p class="font-bold text-slate-900 text-sm">${i(C)}</p>
                <p class="text-slate-500 text-[11px]">Estimasi Nilai Klaim HPP: <span class="font-mono font-bold text-amber-600">${k(u.totalClaim||0)}</span></p>
                ${u.notes?`<p class="text-slate-600 text-[10.5px] italic mt-1">Catatan: "${i(u.notes)}"</p>`:""}
            </div>
        </div>
        `,A=`
        <tr class="border-b-2 border-slate-800 text-[10px] font-black text-white uppercase tracking-wider bg-slate-900">
            <th class="py-2.5 px-3 rounded-tl-xl text-center w-10 border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Nama Barang &amp; Spesifikasi</th>
            <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Asal Lokasi</th>
            <th class="py-2.5 px-3 text-center w-16 border-r border-slate-700">Qty Retur</th>
            <th class="py-2.5 px-3 text-right w-24 border-r border-slate-700">Harga Beli/HPP</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Total Klaim</th>
            <th class="py-2.5 px-3 rounded-tr-xl w-36">Alasan Klaim Cacat</th>
        </tr>
        `,O=u.items||[],L=O.map((y,te)=>`
        <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 text-center font-mono text-slate-500">${te+1}</td>
            <td class="py-2 px-3 font-bold text-slate-900 uppercase">
                ${i(y.name)}
                ${y.variantName?`<span class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] border border-slate-300 ml-1 font-semibold">${i(y.variantName)}</span>`:""}
                ${y.sku?`<span class="text-slate-400 font-mono text-[9px] block">SKU: ${i(y.sku)}</span>`:""}
            </td>
            <td class="py-2 px-3 text-center text-[10px] font-semibold text-slate-600">
                ${y.fromLocation==="warehouse"?"Gudang":y.fromLocation==="quarantine"?"Karantina":"Rak Toko"}
            </td>
            <td class="py-2 px-3 text-center font-mono font-bold text-slate-900">${wt(y.qty)}</td>
            <td class="py-2 px-3 text-right font-mono text-slate-600">${k(y.buyPrice||0)}</td>
            <td class="py-2 px-3 text-right font-mono font-bold text-amber-600">${k(y.subtotalClaim||y.qty*y.buyPrice||0)}</td>
            <td class="py-2 px-3 text-[10.5px] text-slate-600">
                ${i(y.reason||"Barang Cacat Pabrik")}
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
                    <span class="font-mono font-bold text-slate-800">${O.reduce((y,te)=>y+(parseFloat(te.qty)||0),0)} Unit</span>
                </div>
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2 font-bold text-slate-900">
                    <span class="uppercase tracking-wider">TOTAL NILAI KLAIM HPP:</span>
                    <span class="text-amber-600 font-black text-base font-mono">${k(u.totalClaim||0)}</span>
                </div>
            </div>
        </div>
        `,ee=`
        <div class="grid grid-cols-2 gap-8 text-center text-xs mt-auto pt-5 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Pengirim (Purchasing Toko):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Penerima (Supir / Supplier):</span>
                <div class="w-44 border-b-2 border-slate-800 mb-1.5"></div>
                <span class="font-bold text-slate-900 uppercase">${i(u.supplierName||"Pemasok / Distributor")}</span>
            </div>
        </div>
        `,j=ye({docTitle:"Surat Pengembalian Barang Supplier",docNumber:`#${u.id}`,docDate:v,kopHtml:B,metaHtml:$,tableHeaderHtml:A,rows:L,summaryHtml:z,signaturesHtml:ee,singlePageMax:7,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:6});ve(j);return}const a=t||window.cVOrd,s=(window.gOrds||[]).find(P=>String(P.orderId)===String(a))||(window.lastPrintedOrder&&String(window.lastPrintedOrder.orderId)===String(a)?window.lastPrintedOrder:null);if(!s){typeof window.showToast=="function"&&window.showToast("Data pesanan tidak ditemukan!");return}ie("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const n=s.dateString?new Date(s.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"",o=ke("w-16 h-16"),r=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-5 mb-5">
        <div class="flex items-center gap-4">
            ${o}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${i(p.store?.slogan||"General Supplier")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${i(p.store?.address||"Alamat fisik toko")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(p.store?.wa||"-")}</p>
                ${s.payment?.taxNpwp||p.store?.taxNpwp?`<p class="text-xs font-semibold text-slate-600 mt-0.5"><i class="fa-solid fa-id-card text-blue-500"></i> NPWP Toko: <span class="font-mono">${i(s.payment?.taxNpwp||p.store.taxNpwp)}</span></p>`:""}
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
    `,c=Array.isArray(s.items)?s.items:Array.isArray(s.cart)?s.cart:[];if(e==="invoice"){const P=`
        <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
            <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
            <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Produk &amp; Varian</th>
            <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
            <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Sat.</th>
            <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total</th>
        </tr>
        `,h=c.map(($,A)=>`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${A+1}</td>
            <td class="py-2.5 px-3 font-bold flex items-center gap-1.5">
                ${i($.name)} 
                ${$.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${i($.variantName)}</span>`:""}
                ${$.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${i($.colorCode)};"></span>`:""}
                ${$.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${i($.poTime)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${parseFloat($.qty)} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i($.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${k($.effectivePrice)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${k($.effectivePrice*parseFloat($.qty))}</td>
        </tr>
        `);let u="";if((s.pointsEarned>0||s.finalMemberPoints!==void 0&&s.finalMemberPoints!==null)&&(u+=`
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
                        <p class="font-bold text-xs text-violet-800 uppercase">${i(s.claimedReward.name)}</p>
                    </div>
                </div>
                <span class="text-[9.5px] font-bold px-2.5 py-1 rounded-lg bg-violet-600 text-white uppercase tracking-wider">${i(s.claimedReward.status==="ready"?"SERTAKAN PENGIRIMAN":"KLAIM RESMI")}</span>
            </div>`),s.payment?.method==="tempo")if(!!(s.payment?.isPaylater||s.isPaylater||s.payment?.subMethod==="paylater")){const A=s.payment?.paylaterMonths||1,O=s.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":s.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)",L=Array.isArray(s.payment?.paylaterSchedule)&&s.payment.paylaterSchedule.length>0;let z="";if(L){Math.max(0,parseFloat(s.payment?.tempoBalance)||0);const j=(s.payment?.installments||[]).reduce((J,de)=>J+(parseFloat(de.amount)||0),0);let y=0,te=!1;z=`
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
                                ${s.payment.paylaterSchedule.map((J,de)=>{const V=J.installmentIndex||J.installmentNo||J.installmentNumber||J.month||de+1,Ce=parseFloat(J.pokok||J.principal)||0,Q=parseFloat((J.adminFee||0)+(J.serviceFee||0))||0,G=parseFloat(J.total||J.totalMonthly||J.totalInstallment)||Ce+Q;y+=G;const re=J.dueDate||0,ce=J.dueDateFormatted||J.dueDateStr||(re?Z(re):"-");let pe="";return j>=y?pe='<span class="px-1.5 py-0.2 rounded text-[8px] font-bold uppercase bg-emerald-100 text-emerald-700 border border-emerald-300">LUNAS</span>':te?pe='<span class="px-1.5 py-0.2 rounded text-[8px] font-medium uppercase bg-slate-100 text-slate-500">MENDATANG</span>':(te=!0,pe='<span class="px-1.5 py-0.2 rounded text-[8px] font-black uppercase bg-amber-100 text-amber-800 border border-amber-300">BULAN INI</span>'),`
                                    <tr>
                                        <td class="py-1 px-2 font-bold text-slate-800 text-center font-sans">Bulan Ke-${V}</td>
                                        <td class="py-1 px-2 text-slate-600 text-center">${ce}</td>
                                        <td class="py-1 px-2 text-right text-slate-600">${k(Ce)}</td>
                                        <td class="py-1 px-2 text-right text-slate-500">${k(Q)}</td>
                                        <td class="py-1 px-2 font-black text-right text-emerald-800">${k(G)}</td>
                                        <td class="py-1 px-2 text-center font-sans">${pe}</td>
                                    </tr>`}).join("")}
                            </tbody>
                        </table>
                    </div>`}u+=`
                <div class="mb-4 border border-emerald-200 bg-emerald-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-emerald-800 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-handshake text-emerald-600 mr-1"></i> Putri PayLater (${O}):</h4>
                    <p class="text-[9.5px] text-emerald-700 font-semibold leading-relaxed">
                        Sistem pembayaran cicilan resmi Toko Putri tanpa biaya tersembunyi. Jatuh Tempo Pertama: ${s.payment.tempoDueDate?Z(s.payment.tempoDueDate):"-"}.
                        ${s.payment.paylaterMonthlyInstallment?` Angsuran: <b>${k(s.payment.paylaterMonthlyInstallment)} / bulan</b> (${A}x).`:""}
                    </p>
                    ${z}
                </div>`}else u+=`
                <div class="mb-4 border border-pink-200 bg-pink-50 p-3 rounded-xl text-left">
                    <h4 class="font-bold text-pink-700 text-[10px] uppercase tracking-widest mb-0.5"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo:</h4>
                    <p class="text-[9.5px] text-pink-600 font-semibold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${s.payment.tempoDueDate?Z(s.payment.tempoDueDate):"-"}). Keterlambatan dikenakan denda sesuai regulasi toko.</p>
                </div>`;const v=`
        <div class="grid grid-cols-2 gap-6 mb-5 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <h4 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-[var(--color-primary)]"></i> Rekening Resmi Pembayaran Toko Putri:
                </h4>
                <div class="space-y-1.5 pt-0.5">${st("font-mono text-xs")}</div>
                <div class="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                    <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> Konfirmasi pembayaran via WhatsApp: <b>${i(p.store?.wa||p.store?.phone||"-")}</b></p>
                    <p class="text-[9px] text-slate-400 italic">Terima kasih atas transaksi Anda di ${i(p.store?.name||"Toko Putri")}.</p>
                </div>
            </div>

            ${(()=>{const $=it(s);return`
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                    <div class="flex justify-between text-slate-600"><span>Subtotal Produk</span><span class="font-mono">${k($.subtotal)}</span></div>
                    ${$.shipping>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim</span><span class="font-mono">${k($.shipping)}</span></div>`:""}
                    ${$.shippingDiscount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Ongkir</span><span class="font-mono">-${k($.shippingDiscount)}</span></div>`:""}
                    ${$.productDiscount>0?`<div class="flex justify-between text-rose-600 font-bold"><span>Diskon Produk</span><span class="font-mono">-${k($.productDiscount)}</span></div>`:""}
                    ${$.pointDiscount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Poin Reward</span><span class="font-mono">-${k($.pointDiscount)}</span></div>`:""}
                    ${$.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Admin PayLater</span><span class="font-mono">+${k($.paylaterAdminFee)}</span></div>`:""}
                    ${$.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600"><span>Biaya Penanganan / Layanan</span><span class="font-mono">+${k($.paylaterServiceFee)}</span></div>`:""}
                    ${$.hasPpn?`
                    <div class="flex justify-between text-slate-600"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-mono">${k($.dppAmount)}</span></div>
                    <div class="flex justify-between text-amber-600 font-bold"><span>${$.ppnLabel}</span><span class="font-mono">${$.ppnAmount>0?($.isInclusive?"":"+")+k($.ppnAmount):"Rp 0"}</span></div>
                    `:""}
                    
                    <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-2 shadow-xs">
                        <span class="font-bold text-xs uppercase tracking-widest">Grand Total</span>
                        <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${k($.grandTotal)}</span>
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
        `,C=`
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
                <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</span>
            </div>
        </div>
        `,B=ye({docTitle:s.payment?.method==="tempo"?"Proforma Invoice":"Faktur Invoice",docNumber:`#${s.orderId}`,docDate:n,kopHtml:r,metaHtml:l,tableHeaderHtml:P,rows:h,extraBlocksHtml:u,summaryHtml:v,signaturesHtml:C,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:12,itemsLastPage:5});ve(B);return}const d=s.delivery||{},f=d.doNumber||"DO-"+String(new Date().getFullYear()).slice(-2)+String(new Date().getMonth()+1).padStart(2,"0")+"-"+String(s.orderId).replace(/[^a-zA-Z0-9]/g,"").slice(-5).toUpperCase(),m=typeof qt=="function"?qt(f,{height:34,showText:!0,fontSize:9,className:"w-44 h-auto"}):"",b=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-4 mb-4">
        <div class="flex items-center gap-4">
            ${o}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${i(p.store?.name||"TOKO PUTRI")}</h1>
                <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">${i(p.store?.slogan||"Bahan Bangunan & Alat Teknik")}</p>
                <p class="text-[11px] font-medium text-slate-500 mt-0.5 leading-snug">${i(p.store?.address||"Alamat fisik toko")}</p>
                <p class="text-[11px] font-medium text-slate-500"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${i(p.store?.wa||"-")}</p>
                ${s.payment?.taxNpwp||p.store?.taxNpwp?`<p class="text-[10px] font-semibold text-slate-600 mt-0.5"><i class="fa-solid fa-id-card text-blue-500"></i> NPWP: <span class="font-mono">${i(s.payment?.taxNpwp||p.store.taxNpwp)}</span></p>`:""}
            </div>
        </div>
        <div class="text-right flex flex-col items-end">
            <h2 class="font-black text-2xl tracking-widest text-amber-600 uppercase">SURAT JALAN</h2>
            <p class="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider mt-0.5">Delivery Order (DO)</p>
            <div class="mt-1.5 p-1 rounded-lg border border-slate-200/90 bg-white">
                ${m}
            </div>
            <p class="text-[10.5px] font-semibold text-slate-500 mt-1">Tanggal: ${n}</p>
        </div>
    </div>
    `,g=d.recipientName||s.isDropPoint&&s.dropPoint?.name||s.customer?.name||"-",S=d.recipientPhone||s.isDropPoint&&s.dropPoint?.wa||s.customer?.wa||"-",x=d.destinationAddress||s.isDropPoint&&s.dropPoint?.address||s.customer?.address||"-",N=d.unloadNotes||s.customer?.note||"",I=`
    <div class="grid grid-cols-2 gap-4 mb-4 text-xs">
        <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div>
                <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 border-b border-slate-200 pb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-map-location-dot text-rose-500"></i> Tujuan Pengiriman Proyek / Drop Point
                </h3>
                <p class="font-bold text-sm text-slate-900 uppercase">${i(g)} ${S!=="-"?`<span class="text-xs font-mono font-medium text-slate-500">(+${i(S)})</span>`:""}</p>
                <p class="text-xs text-slate-700 leading-relaxed mt-1">${i(x)}</p>
            </div>
            ${N?`
            <div class="mt-2 pt-1.5 border-t border-dashed border-amber-300 text-[10.5px] text-amber-800 font-semibold bg-amber-50/80 p-2 rounded-lg">
                <i class="fa-solid fa-note-sticky text-amber-600 mr-1"></i> Catatan Bongkar: ${i(N)}
            </div>`:""}
        </div>

        <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1.5">
            <h3 class="text-[9.5px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 border-b border-slate-200 pb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-truck text-[var(--color-primary)]"></i> Armada &amp; Pengemudi Toko
            </h3>
            <div class="flex justify-between items-center text-xs">
                <span class="text-slate-500 font-medium">No. Ref Pesanan:</span>
                <span class="font-bold font-mono text-slate-800">#${i(s.orderId)}</span>
            </div>
            <div class="flex justify-between items-center text-xs">
                <span class="text-slate-500 font-medium">Armada Angkut:</span>
                <span class="font-bold text-slate-800">${i(d.fleetName||"Mobil Pick-up L300")}</span>
            </div>
            <div class="flex justify-between items-center text-xs">
                <span class="text-slate-500 font-medium">Plat Nomor:</span>
                <span class="font-mono font-bold text-slate-800 uppercase">${i(d.plateNumber||"-")}</span>
            </div>
            <div class="flex justify-between items-center text-xs">
                <span class="text-slate-500 font-medium">Sopir / Helper:</span>
                <span class="font-bold text-slate-800">${i(d.driverName||"Petugas Toko")}${d.helperName?` / ${i(d.helperName)}`:""}</span>
            </div>
        </div>
    </div>
    `,U=`
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Nama &amp; Spesifikasi Barang</th>
        <th class="py-2.5 px-3 text-center w-24 border-r border-slate-700">Kuantitas</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Satuan</th>
        <th class="py-2.5 px-2.5 text-center w-20 border-r border-slate-700">Cek Gudang</th>
        <th class="py-2.5 px-2.5 rounded-tr-xl text-center w-20">Cek Proyek</th>
    </tr>
    `,D=c.map((P,h)=>`
    <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-3 text-center font-mono text-slate-500">${h+1}</td>
        <td class="py-2.5 px-3 font-bold uppercase flex items-center gap-1.5">
            ${i(P.name)} 
            ${P.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${i(P.variantName)}</span>`:""}
            ${P.colorCode?`<span class="inline-block w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" style="background-color: ${i(P.colorCode)};"></span>`:""}
            ${P.poTime?`<span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${i(P.poTime)}</span>`:""}
        </td>
        <td class="py-2.5 px-3 text-center font-bold text-base text-slate-800">${parseFloat(P.qty)}</td>
        <td class="py-2.5 px-3 text-center text-slate-500 font-bold uppercase text-[11px]">${i(P.unit||"pcs")}</td>
        <td class="py-2.5 px-2 text-center"><div class="w-4 h-4 border-2 border-slate-400 mx-auto rounded-sm shadow-inner"></div></td>
        <td class="py-2.5 px-2 text-center"><div class="w-4 h-4 border-2 border-slate-400 mx-auto rounded-sm shadow-inner"></div></td>
    </tr>
    `),T=d.signature&&d.signature.signatureDataUrl?`
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-1 uppercase tracking-widest text-[9px]">Penerima / Mandor:</span>
            <div class="h-14 flex items-center justify-center">
                <img src="${d.signature.signatureDataUrl}" alt="TTD Mandor" class="h-12 w-auto object-contain">
            </div>
            <div class="w-32 border-b-2 border-slate-800 mb-1"></div>
            <span class="font-bold text-slate-900">${i(d.signature.signerName||g)}</span>
            <span class="text-[8px] font-mono text-emerald-600 uppercase font-bold">Terverifikasi Digital</span>
        </div>
    `:`
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Penerima / Mandor:</span>
            <div class="w-32 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">${i(g)}</span>
        </div>
    `,R=`
    <div class="grid grid-cols-4 gap-4 text-center text-xs mt-auto pt-4 border-t border-slate-200">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Petugas Gudang:</span>
            <div class="w-32 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">Nama &amp; TTD</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Sopir / Pengantar:</span>
            <div class="w-32 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900">${i(d.driverName||"Nama & TTD")}</span>
        </div>
        ${T}
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-14 uppercase tracking-widest text-[9px]">Hormat Kami:</span>
            <div class="w-32 border-b-2 border-slate-800 mb-1.5"></div>
            <span class="font-bold text-slate-900 uppercase">${i(p.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `,W=ye({docTitle:"Surat Jalan Pengiriman",docNumber:`#${f}`,docDate:n,kopHtml:b,metaHtml:I,tableHeaderHtml:U,rows:D,signaturesHtml:R,singlePageMax:7,itemsFirstPage:7,itemsMiddlePage:14,itemsLastPage:6});ve(W)},ss=()=>{const e=window.cart||[];if(!e||e.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}xe="sph";const t="SPH-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.floor(1e3+Math.random()*9e3),a=Z(new Date),s=Z(new Date(Date.now()+14*24*60*60*1e3));ie("doc-modal-title","Surat Penawaran Harga (SPH)");const n=ke("w-16 h-16"),o=typeof window.getEffP=="function"?window.getEffP:x=>x.price||0;let r=0;const l=e.map((x,N)=>{const I=parseFloat(x.qty)||1,U=o(x),D=I*U;return r+=D,`
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2.5 px-3 text-center font-mono text-slate-500">${N+1}</td>
            <td class="py-2.5 px-3 font-bold">
                ${i(x.name)}
                ${x.variantName?`<span class="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${i(x.variantName)}</span>`:""}
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-slate-700">${I} <span class="text-[9.5px] font-bold text-slate-400 uppercase">${i(x.unit||"pcs")}</span></td>
            <td class="py-2.5 px-3 text-right font-mono font-medium">${k(U)}</td>
            <td class="py-2.5 px-3 text-right font-mono font-bold">${k(D)}</td>
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
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${a}</p>
            <span class="inline-block mt-1 px-2.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-300 rounded text-[10px] font-bold uppercase tracking-wider">
                Berlaku s/d: ${s}
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
    `,f=`
    <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-[10.5px]">
        <th class="py-2.5 px-3 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
        <th class="py-2.5 px-3 border-r border-slate-700">Deskripsi Barang &amp; Spesifikasi</th>
        <th class="py-2.5 px-3 text-center w-20 border-r border-slate-700">Qty</th>
        <th class="py-2.5 px-3 text-right w-28 border-r border-slate-700">Harga Satuan</th>
        <th class="py-2.5 px-3 rounded-tr-xl text-right w-28">Total Estimasi</th>
    </tr>
    `,m=`
    <div class="flex justify-end mb-4">
        <div class="w-1/2 md:w-[45%] space-y-1.5 text-xs font-bold text-slate-700">
            <div class="flex justify-between px-3"><span>Subtotal Estimasi</span><span class="font-mono">${k(r)}</span></div>
            <div class="flex justify-between items-center bg-slate-800 text-white p-3 rounded-xl mt-1 shadow-xs">
                <span class="font-bold text-xs uppercase tracking-widest">Total Penawaran</span>
                <span class="font-mono text-base text-emerald-400 font-bold tracking-tight">${k(r)}</span>
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
    `,S=ye({docTitle:"Surat Penawaran Harga",docNumber:`#${t}`,docDate:a,kopHtml:c,metaHtml:d,tableHeaderHtml:f,rows:l,summaryHtml:m,extraBlocksHtml:b,signaturesHtml:g,singlePageMax:6,itemsFirstPage:6,itemsMiddlePage:14,itemsLastPage:5});ve(S)},ve=e=>{const t=w("doc-paper-content");if(!t)return;t.innerHTML=e.join("");const a=e.length,s=w("doc-page-count-badge");s&&(s.textContent=`${a} Halaman A4`),jo(a)},jo=(e=1)=>{const t=w("doc-preview-modal"),a=w("doc-preview-modal-box");t&&t.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),At(t,a),Ot()},Ot=()=>{const e=w("doc-paper-scroll-area"),t=w("doc-paper-content"),a=w("doc-paper-wrapper");if(!e||!t||!a)return;const s=794,n=window.innerWidth<640?12:32,o=e.clientWidth-n,r=Math.min(1,Math.max(.2,o/s));t.style.transform=`translateX(-50%) scale(${r})`;const l=t.offsetHeight||t.scrollHeight;a.style.height=l*r+48+"px"};window.addEventListener("resize",()=>{const e=w("doc-preview-modal");e&&!e.classList.contains("hidden")&&Ot()});const os=(e=!1)=>{const t=w("doc-preview-modal"),a=w("doc-preview-modal-box");t&&(typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{Ge(t,a)}):Ge(t,a))},ns=()=>{const e=w("doc-paper-content"),t=e?e.innerHTML:"";if(!t){typeof window.showToast=="function"&&window.showToast("Tidak ada dokumen yang dicetak!");return}if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){let o=w("a4-print-section");o||(o=document.createElement("div"),o.id="a4-print-section",document.body.appendChild(o)),o.innerHTML=t,document.body.classList.add("printing-a4"),window.AndroidNativeApp.print(),setTimeout(()=>document.body.classList.remove("printing-a4"),2500);return}const a=window.open("","_blank"),n=`<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>${i(xe==="invoice"?"Faktur Invoice":xe==="po"?"Purchase Order":xe==="sph"?"Penawaran Harga":xe==="stock_opname"?"Berita Acara Stock Opname":xe==="tempo_recap"?"Rekap Buku Piutang Toko":xe==="tempo_customer_ledger"?"Kartu Piutang Pelanggan":xe==="sales_return"?"Nota Retur Penjualan":xe==="vendor_return"?"Surat Pengembalian Barang":"Dokumen Resmi A4")} - Cetak A4 Standar Presisi</title>
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
</html>`;if(!a){let o=document.getElementById("a4-print-fallback-iframe");o||(o=document.createElement("iframe"),o.id="a4-print-fallback-iframe",o.style.position="fixed",o.style.right="0",o.style.bottom="0",o.style.width="0",o.style.height="0",o.style.border="0",o.style.opacity="0",document.body.appendChild(o));const r=o.contentWindow.document;r.open(),r.write(n),r.close(),setTimeout(()=>{try{o.contentWindow.focus(),o.contentWindow.print()}catch(l){console.warn("[DocPrint] Fallback iframe print error:",l)}},650);return}a.document.open(),a.document.write(n),a.document.close()},rs=async e=>{if(!as){Bt(!0),xt(e==="image"?"Membuat Gambar HD...":"Menyusun Dokumen PDF A4...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{Ht(),Bt(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const t=w("doc-paper-content");if(!t)throw new Error("Elemen dokumen tidak ditemukan.");let a=Array.from(t.querySelectorAll(".a4-page"));a.length===0&&(a=[t]);const s=window.cVOrd||Date.now().toString(36).toUpperCase(),n=`${xe.toUpperCase()}_${s}`,o=async r=>{const l=document.createElement("div");l.style.position="fixed",l.style.top="-9999px",l.style.left="-9999px",l.style.width="794px",l.style.height="1123px",l.style.backgroundColor="#ffffff",l.style.overflow="hidden",l.style.zIndex="-9999";const c=r.cloneNode(!0);c.style.margin="0 auto",c.style.boxShadow="none",c.style.border="none",c.style.borderRadius="0",c.style.transform="none",c.style.width="794px",c.style.height="1123px",c.style.minHeight="1123px",c.style.maxHeight="1123px",c.style.overflow="hidden",l.appendChild(c),document.body.appendChild(l);const d=Array.from(c.querySelectorAll("img"));await Promise.all(d.map(m=>m.complete?Promise.resolve():new Promise(b=>{m.addEventListener("load",b,{once:!0}),m.addEventListener("error",b,{once:!0})}))),await new Promise(m=>setTimeout(m,200));const f=await html2canvas(l,{scale:2,useCORS:!0,backgroundColor:"#ffffff",width:794,height:1123,windowWidth:794,windowHeight:1123});return document.body.removeChild(l),f};if(e==="image")if(a.length===1){const l=(await o(a[0])).toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(l,`${n}.png`,"image/png");else{const c=document.createElement("a");c.download=`${n}.png`,c.href=l,c.click()}typeof window.showToast=="function"&&window.showToast("Gambar A4 Presisi Berhasil Disimpan!")}else{for(let r=0;r<a.length;r++){xt(`Menyimpan Gambar Halaman ${r+1} dari ${a.length}...`);const c=(await o(a[r])).toDataURL("image/png",1),d=`${n}_Hal_${r+1}.png`;if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(c,d,"image/png");else{const f=document.createElement("a");f.download=d,f.href=c,f.click()}await new Promise(f=>setTimeout(f,250))}typeof window.showToast=="function"&&window.showToast(`Berhasil menyimpan ${a.length} gambar halaman A4!`)}else{const r=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,l=new r({orientation:"portrait",unit:"mm",format:"a4"});for(let c=0;c<a.length;c++){xt(`Menyusun PDF Hal ${c+1} dari ${a.length}...`);const f=(await o(a[c])).toDataURL("image/jpeg",.95);c>0&&l.addPage("a4","portrait"),l.addImage(f,"JPEG",0,0,210,297,void 0,"FAST")}window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"?window.AndroidNativeApp.saveOrShareFile(l.output("datauristring"),`${n}.pdf`,"application/pdf"):l.save(`${n}.pdf`),typeof window.showToast=="function"&&window.showToast(`File PDF Standar A4 (${a.length} Halaman) Berhasil Disimpan!`)}}catch(t){console.error("Export Error: ",t),typeof window.showToast=="function"&&window.showToast(t&&t.message?`Gagal: ${t.message}`:"Gagal memproses dokumen.")}finally{Ht(),Bt(!1)}}},is=()=>aa("tempo_recap");window.openDocPreview=aa;window.openCartSPHPreview=ss;window.openTempoRecapDocPreview=is;window.fitDocPreview=Ot;window.closeDocPreviewModal=os;window.printDocA4=ns;window.exportDocFile=rs;const jn=Object.freeze(Object.defineProperty({__proto__:null,closeDocPreviewModal:os,get currentDocType(){return xe},exportDocFile:rs,fitDocPreview:Ot,getStoreBankListHtml:st,openCartSPHPreview:ss,openDocPreview:aa,openTempoRecapDocPreview:is,printDocA4:ns},Symbol.toStringTag,{value:"Module"}));export{vn as $,io as A,Za as B,et as C,ct as D,Fo as E,ao as F,Fn as G,Es as H,Mn as I,Bs as J,Cn as K,Hs as L,Ln as M,_s as N,Ae as O,Ho as P,An as Q,oe as R,pn as S,Us as T,Tn as U,_e as V,Kn as W,da as X,it as Y,En as Z,va as _,p as a,Vo as a$,ie as a0,ro as a1,to as a2,Da as a3,po as a4,Fs as a5,js as a6,$n as a7,Xs as a8,In as a9,Ps as aA,Ts as aB,an as aC,sn as aD,on as aE,nn as aF,rn as aG,ln as aH,La as aI,Rn as aJ,Nn as aK,us as aL,oo as aM,fs as aN,q as aO,zt as aP,Ks as aQ,Qo as aR,Zo as aS,le as aT,vo as aU,Bn as aV,Hn as aW,Go as aX,Dn as aY,We as aZ,zs as a_,Mo as aa,$o as ab,qt as ac,kn as ad,un as ae,Mt as af,Jo as ag,no as ah,Pa as ai,On as aj,Ee as ak,Ls as al,Ds as am,co as an,Is as ao,hn as ap,bn as aq,fn as ar,se as as,Ss as at,$s as au,dn as av,hs as aw,vs as ax,ks as ay,ys as az,Ca as b,Yo as b0,gs as b1,cn as b2,As as b3,Ms as b4,Cs as b5,Ns as b6,Rs as b7,Os as b8,yn as b9,qs as ba,Wo as bb,tn as bc,mn as bd,wn as be,xn as bf,gn as bg,Sn as bh,_t as bi,Bo as bj,Uo as bk,Un as bl,jn as bm,ka as c,bs as d,w as e,k as f,so as g,Ma as h,i,Pn as j,Se as k,xt as l,lo as m,Ht as n,At as o,ws as p,$e as q,Ct as r,Aa as s,Y as t,qe as u,Ge as v,Xo as w,en as x,xs as y,$t as z};
