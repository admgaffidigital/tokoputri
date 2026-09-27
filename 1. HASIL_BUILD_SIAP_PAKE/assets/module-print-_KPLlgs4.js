const ce={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"text",brandStyle:"image",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showRewardCatalog:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],productOrder:[],suppliers:[],purchases:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let m=JSON.parse(JSON.stringify(ce)),E=[],ae=[],C=[];try{const e=localStorage.getItem("freshmart_cart");e&&(E=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(ae=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(C=JSON.parse(e)||[])}catch{}let pe={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},me=null,ue=null,fe=null,be="Semua Produk",we="Semua Jenis",ge="Semua Merek",xe="",he="newest",ve="grid",ye=1,ke=12,Pe="orders",Te="",$e=null,Se=null,Ae=0,De=[],Le=[],Ce=[],Me=1,Ie=[],Ne=null,Ee=null,Re=null,K=[],Oe=[],M=null,Be=null,se=!1,je="all",Ue="today",He=null,Ke=null;const yt=e=>{He=e},kt=e=>{m=e},Pt=e=>{E=e},Tt=e=>{ae=e},$t=e=>{C=e},St=e=>{pe=e},At=e=>{me=e},Dt=e=>{ue=e},Lt=e=>{fe=e},Ct=e=>{be=e},Mt=e=>{we=e},It=e=>{ge=e},Nt=e=>{xe=e},Et=e=>{he=e},Rt=e=>{ve=e},Ot=e=>{ye=e},Bt=e=>{ke=e},jt=e=>{Pe=e},Ut=e=>{Te=e},Ht=e=>{$e=e},Kt=e=>{Se=e},zt=e=>{Ae=e},Ft=e=>{De=e},qt=e=>{Le=e},Gt=e=>{Ce=e},Vt=e=>{Me=e},Wt=e=>{Ie=e},_t=e=>{K=e},Jt=e=>{Oe=e},Q=e=>{M=e},Yt=e=>{Be=e},q=e=>{se=e},Qt=e=>{Ke=e},Xt=e=>{je=e},Zt=e=>{Ue=e},ea=e=>{Ne=e},ta=e=>{Ee=e},aa=e=>{Re=e};let oe=!1;if(typeof window<"u"){const e=()=>{oe=!0,window.__hasUserInteracted=!0};["pointerdown","touchstart","mousedown","keydown"].forEach(a=>{window.addEventListener(a,e,{capture:!0,once:!0})}),window.__hasUserInteracted=!1}const V=()=>typeof navigator<"u"&&navigator.userActivation?navigator.userActivation.hasBeenActive:!!(oe||typeof window<"u"&&window.__hasUserInteracted);typeof window<"u"&&(window.checkUserGesture=V);const D=(e="light")=>{try{const a=window.Capacitor?.Plugins?.Haptics;if(a){e==="light"||e==="selection"?a.impact({style:"LIGHT"}).catch(()=>{}):e==="medium"?a.impact({style:"MEDIUM"}).catch(()=>{}):e==="heavy"?a.impact({style:"HEAVY"}).catch(()=>{}):e==="success"?a.notification({type:"SUCCESS"}).catch(()=>{}):e==="warning"?a.notification({type:"WARNING"}).catch(()=>{}):e==="error"&&a.notification({type:"ERROR"}).catch(()=>{});return}if(typeof navigator<"u"&&typeof navigator.vibrate=="function"){if(!V())return;e==="light"||e==="selection"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="heavy"?navigator.vibrate(45):e==="success"?navigator.vibrate([15,30,20]):e==="warning"?navigator.vibrate([30,40,30]):e==="error"&&navigator.vibrate([40,50,40,50,40])}}catch{}};typeof window<"u"&&(window.triggerHaptic=D);const ze=e=>{if(e)switch(e){case"product-modal":typeof window.closeProductModal=="function"&&window.closeProductModal();break;case"pos-variant-sheet":typeof window.closePOSVariantSheet=="function"&&window.closePOSVariantSheet();break;case"variant-preview-modal":typeof window.closeVariantPreviewModal=="function"&&window.closeVariantPreviewModal();break;case"custom-confirm-modal":typeof window.closeConfirm=="function"&&window.closeConfirm();break;case"scanner-modal":typeof window.closeCameraScanner=="function"&&window.closeCameraScanner();break;case"modal-tempo-detail":typeof window.closeTempoDetailModal=="function"&&window.closeTempoDetailModal();break;case"modal-tempo-payment":typeof window.closeTempoPaymentModal=="function"&&window.closeTempoPaymentModal();break;case"modal-tempo-penalty":typeof window.closeTempoPenaltyModal=="function"&&window.closeTempoPenaltyModal();break;case"modal-supplier-detail":typeof window.closeSupplierDetailModal=="function"&&window.closeSupplierDetailModal();break;case"modal-supplier-form":typeof window.closeSupplierFormModal=="function"&&window.closeSupplierFormModal();break;case"modal-po-form":typeof window.closePurchaseFormModal=="function"&&window.closePurchaseFormModal();break;case"modal-po-detail":typeof window.closePurchaseDetailModal=="function"&&window.closePurchaseDetailModal();break;case"modal-po-payment":typeof window.closePurchasePaymentModal=="function"&&window.closePurchasePaymentModal();break;case"modal-po-product-picker":typeof window.closePurchasePickerModal=="function"&&window.closePurchasePickerModal();break;case"quick-menu-modal":typeof window.closeQuickMenuModal=="function"&&window.closeQuickMenuModal();break;case"pos-login-modal":typeof window.closePOSLoginModal=="function"&&window.closePOSLoginModal();break;default:{const a=document.getElementById(e);if(a){const t=a.querySelector('button[onclick*="close"], .fa-xmark')?.closest("button");if(t)t.click();else if(typeof window.closeModalAnim=="function"){const s=a.querySelector('.modal-bottom-sheet, [id$="-box"], [id$="-content"]')||a.firstElementChild;window.closeModalAnim(a,s)}else a.classList.add("hidden","opacity-0")}}}};let y=null,N=null,U=0,X=0,H=0,$=!1,Z=0;const Fe=()=>{if(typeof document>"u")return;document.addEventListener("touchstart",a=>{if(a.touches.length!==1)return;const t=a.touches[0],s=t.target.closest('.modal-bottom-sheet, [id$="-box"], [id$="-content"]');if(!s)return;const o=s.closest('[id*="modal"], [id*="sheet"]');if(!o||o.classList.contains("hidden")||o.classList.contains("opacity-0"))return;const n=s.classList.contains("overflow-y-auto")?s:s.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar"),c=n?n.scrollTop:0,b=s.getBoundingClientRect();!(t.clientY-b.top<=80||t.target.closest(".pull-indicator"))&&c>5||(y=s,N=o,U=t.clientY,X=t.clientX,H=U,$=!1,Z=Date.now())},{passive:!0}),document.addEventListener("touchmove",a=>{if(!y||a.touches.length!==1)return;const t=a.touches[0];H=t.clientY;const s=H-U,o=Math.abs(t.clientX-X);if(!$&&o>Math.abs(s)){y=null;return}const n=y.classList.contains("overflow-y-auto")?y:y.querySelector(".overflow-y-auto, .scroll-content, .custom-scrollbar");if(!(n&&n.scrollTop>5&&!$)){if(s>0){if($=!0,a.cancelable&&a.preventDefault(),y.style.transform=`translateY(${s}px)`,y.style.transition="none",N){const c=Math.max(.2,1-s/400);N.style.backgroundColor=`rgba(15, 23, 42, ${.8*c})`}}else if(s<0&&$){const c=s*.2;y.style.transform=`translateY(${c}px)`,y.style.transition="none"}}},{passive:!1});const e=()=>{if(!y)return;const a=y,t=N,s=H-U,o=Math.max(1,Date.now()-Z),n=s/o;y=null,N=null,$&&(s>80||n>.45&&s>30)?(D("light"),a.style.transition="transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",a.style.transform="translateY(100%)",t&&(t.style.transition="opacity 0.25s ease",t.style.opacity="0"),setTimeout(()=>{a.style.transform="",a.style.transition="",t&&(t.style.backgroundColor="",t.style.opacity=""),ze(t?t.id:"")},250)):$&&(a.style.transition="transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)",a.style.transform="",t&&(t.style.transition="background-color 0.28s ease",t.style.backgroundColor=""),setTimeout(()=>{a.style.transition=""},300)),$=!1};document.addEventListener("touchend",e,{passive:!0}),document.addEventListener("touchcancel",e,{passive:!0})};let ee=0;const qe=()=>{typeof document>"u"||document.addEventListener("click",e=>{const a=Date.now();if(a-ee<50)return;const t=e.target.closest('button, [role="button"], a[onclick], [id*="bnav-"], .pos-add-btn, .pos-tag-chip, #pos-variant-chips button, .interactive-tap');t&&!t.disabled&&!t.classList.contains("disabled")&&(ee=a,D("light"))},{passive:!0,capture:!0})};let h=null;const Ge=(e="pop")=>{try{if(typeof window>"u"||!V())return;const a=window.AudioContext||window.webkitAudioContext;if(!a)return;h||(h=new a),h.state==="suspended"&&h.resume().catch(()=>{});const t=h.currentTime;if(e==="pop"){const s=h.createOscillator(),o=h.createGain();s.type="sine",s.frequency.setValueAtTime(340,t),s.frequency.exponentialRampToValueAtTime(560,t+.07),o.gain.setValueAtTime(.14,t),o.gain.exponentialRampToValueAtTime(.001,t+.08),s.connect(o),o.connect(h.destination),s.start(t),s.stop(t+.08)}else if(e==="success"){const s=h.createOscillator(),o=h.createOscillator(),n=h.createGain(),c=h.createGain();s.type="triangle",o.type="triangle",s.frequency.setValueAtTime(523.25,t),o.frequency.setValueAtTime(659.25,t+.09),n.gain.setValueAtTime(.12,t),n.gain.exponentialRampToValueAtTime(.001,t+.22),c.gain.setValueAtTime(.14,t+.09),c.gain.exponentialRampToValueAtTime(.001,t+.32),s.connect(n),n.connect(h.destination),o.connect(c),c.connect(h.destination),s.start(t),s.stop(t+.22),o.start(t+.09),o.stop(t+.32)}else if(e==="beep"){const s=h.createOscillator(),o=h.createGain();s.type="square",s.frequency.setValueAtTime(1040,t),o.gain.setValueAtTime(.08,t),o.gain.exponentialRampToValueAtTime(.001,t+.07),s.connect(o),o.connect(h.destination),s.start(t),s.stop(t+.07)}}catch{}};typeof window<"u"&&(window.playNativeSound=Ge);const Ve=()=>{if(typeof document>"u")return;let e=document.getElementById("native-scroll-top-btn");e||(e=document.createElement("button"),e.id="native-scroll-top-btn",e.setAttribute("aria-label","Kembali ke Atas"),e.className="fixed bottom-20 right-4 z-40 hidden opacity-0 translate-y-3 transition-all duration-300 flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-900/85 dark:bg-slate-800/90 text-white text-xs font-semibold shadow-xl backdrop-blur-md border border-white/10 active:scale-95 cursor-pointer",e.innerHTML='<i class="fa-solid fa-arrow-up text-[10px]"></i><span>Ke Atas</span>',document.body.appendChild(e),e.addEventListener("click",()=>{D("light");const t=document.querySelector("#view-catalog .scroll-content, #view-orders .scroll-content");t&&t.scrollTop>50&&t.scrollTo({top:0,behavior:"smooth"}),window.scrollTo({top:0,behavior:"smooth"})}));const a=t=>{e&&(t>350?(e.classList.remove("hidden"),requestAnimationFrame(()=>{e.classList.remove("opacity-0","translate-y-3")})):(e.classList.add("opacity-0","translate-y-3"),setTimeout(()=>{e&&e.classList.contains("opacity-0")&&e.classList.add("hidden")},300)))};window.addEventListener("scroll",()=>{a(window.scrollY||document.documentElement.scrollTop)},{passive:!0}),document.addEventListener("scroll",t=>{t.target&&t.target.classList&&t.target.classList.contains("scroll-content")&&a(t.target.scrollTop)},{passive:!0,capture:!0})},We=()=>{if(typeof window>"u"||typeof document>"u")return;let e=document.getElementById("native-connectivity-banner");e||(e=document.createElement("div"),e.id="native-connectivity-banner",e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] -translate-y-16 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl backdrop-blur-md",document.body.appendChild(e));let a=null;const t=s=>{clearTimeout(a),D(s?"success":"warning"),s?(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl backdrop-blur-md bg-emerald-600/90 text-white border border-emerald-400/30",e.innerHTML='<i class="fa-solid fa-wifi text-xs"></i><span>Kembali Online — Terhubung</span>',a=setTimeout(()=>{e.classList.add("-translate-y-16","opacity-0")},2500)):(e.className="fixed top-2 left-1/2 -translate-x-1/2 z-[100000] translate-y-0 opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-xl backdrop-blur-md bg-amber-500/95 text-slate-950 border border-amber-300/40",e.innerHTML='<i class="fa-solid fa-wifi-slash text-xs"></i><span>Mode Offline — Menggunakan Data Lokal</span>')};window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1))},sa=()=>{Fe(),qe(),Ve(),We()},_e=[{id:"paint",keywords:["cat","paint","politur","thinner","kuas","roll","vernis","woodstain","pewarna","bocor","waterproof","pelapis","nodrop","no drop","aquaproof","avian","dulux","jotun"],icon:"fa-paint-roller",subIcon:"fa-fill-drip",label:"Cat & Pelapis",bg:"linear-gradient(135deg, #6366f1 0%, #4338ca 50%, #312e81 100%)",accent:"#c7d2fe",badgeBg:"rgba(99, 102, 241, 0.35)"},{id:"tools",keywords:["paku","baut","sekrup","mur","nail","screw","bolt","alat","perkakas","tang","obeng","palu","gergaji","kunci pas","meteran","waterpass","tool","amplas","mata bor","bor","gerinda"],icon:"fa-screwdriver-wrench",subIcon:"fa-hammer",label:"Paku & Perkakas",bg:"linear-gradient(135deg, #334155 0%, #1e293b 50%, #0f172a 100%)",accent:"#cbd5e1",badgeBg:"rgba(148, 163, 184, 0.25)"},{id:"plumbing",keywords:["pipa","pvc","paralon","sambungan","knee","tee","socket","faucet","kran","sanitair","water","air","selang","talang","toren","drat","rucika","onda","saringan","afur","siphon"],icon:"fa-faucet-drip",subIcon:"fa-droplet",label:"Pipa & Sanitair",bg:"linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #1e3a8a 100%)",accent:"#bae6fd",badgeBg:"rgba(56, 189, 248, 0.3)"},{id:"building",keywords:["semen","mortar","pasir","bata","hebel","plester","acian","beton","cor","batu","keramik","granit","nat","semen putih","gypsum","tiga roda","gresik","holcim","dynamix"],icon:"fa-trowel-bricks",subIcon:"fa-cubes",label:"Bahan Bangunan",bg:"linear-gradient(135deg, #78716c 0%, #57534e 50%, #292524 100%)",accent:"#e7e5e4",badgeBg:"rgba(168, 162, 158, 0.3)"},{id:"electric",keywords:["listrik","kabel","lampu","saklar","stop kontak","steker","fitting","mcb","led","bohlam","elektronik","kawat","electric","isolasi","broco","panasonic","philips","kabel supreme"],icon:"fa-bolt",subIcon:"fa-lightbulb",label:"Kelistrikan",bg:"linear-gradient(135deg, #d97706 0%, #b45309 50%, #7c2d12 100%)",accent:"#fef08a",badgeBg:"rgba(245, 158, 11, 0.35)"},{id:"wood",keywords:["kayu","papan","triplek","plywood","kasau","reng","bambu","balok","rotan","mdf","multiplek","lis","profil"],icon:"fa-tree",subIcon:"fa-ruler-combined",label:"Kayu & Papan",bg:"linear-gradient(135deg, #059669 0%, #047857 50%, #064e3b 100%)",accent:"#a7f3d0",badgeBg:"rgba(16, 185, 129, 0.3)"},{id:"lock",keywords:["kunci","gembok","handle","engsel","slot","hak angin","tarikan","door","lock","silinder","dekson","solid","paloma"],icon:"fa-lock",subIcon:"fa-key",label:"Kunci & Engsel",bg:"linear-gradient(135deg, #ca8a04 0%, #a16207 50%, #713f12 100%)",accent:"#fef08a",badgeBg:"rgba(234, 179, 8, 0.35)"},{id:"roof",keywords:["besi","baja","hollow","seng","atap","galvalum","spandek","wiremesh","plat","pipa besi","asbes","genteng","nok","alderon"],icon:"fa-shield-halved",subIcon:"fa-bars",label:"Besi & Atap",bg:"linear-gradient(135deg, #0891b2 0%, #0e7490 50%, #164e63 100%)",accent:"#a5f3fc",badgeBg:"rgba(6, 182, 212, 0.3)"},{id:"adhesive",keywords:["lem","silikon","sealant","perekat","lakban","solasi","tape","glue","fox","alteco","dextone","sika"],icon:"fa-spray-can",subIcon:"fa-vial",label:"Lem & Perekat",bg:"linear-gradient(135deg, #e11d48 0%, #be123c 50%, #881337 100%)",accent:"#fecdd3",badgeBg:"rgba(244, 63, 94, 0.35)"}],Je={id:"default",icon:"fa-box-open",subIcon:"fa-cube",label:"Produk Toko",bg:"linear-gradient(135deg, #a16207 0%, #854d0e 50%, #422006 100%)",accent:"#fde047",badgeBg:"rgba(234, 179, 8, 0.35)"},W=(e,a="",t="")=>{let s="",o="",n="";typeof e=="object"&&e!==null?(s=String(e.name||""),o=String(e.category||e.subCategory||""),n=String(e.brand||"")):(s=String(e||""),o=String(a||""),n=String(t||""));const c=`${s} ${o} ${n}`.toLowerCase();for(const b of _e)for(const r of b.keywords)if(c.includes(r))return b;return Je},_=e=>{if(!e||typeof e!="string")return"TP";const t=e.replace(/[^a-zA-Z0-9\s]/g," ").trim().split(/\s+/).filter(n=>n.length>0),s=t.filter(n=>/[a-zA-Z]/.test(n)),o=s.length>0?s:t;if(o.length>=2)return(o[0][0]+o[1][0]).toUpperCase();if(o.length===1){const n=o[0];return(n.length>=2?n.slice(0,2):n+"P").toUpperCase()}return"TP"},Ye=(e,a={})=>{const t=a.size||"md",s=a.showBadge!==void 0?a.showBadge:t==="lg"||t==="md",o=a.className||"",n=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk"),c=typeof e=="object"&&e!==null&&(e.category||e.subCategory)||"",b=typeof e=="object"&&e!==null&&e.brand||"",r=W(e,c,b),d=_(n),p=l(c||r.label);return`
    <div class="pos-smart-cover cover-${t} ${o}" style="background: ${r.bg};" title="${l(n)}">
        <!-- Ambient Radial Glow -->
        <div class="cover-glow" style="background: radial-gradient(circle, ${r.accent}33 0%, transparent 70%);"></div>
        <!-- Decorative Geometric Rings -->
        <div class="cover-ring cover-ring-1"></div>
        <div class="cover-ring cover-ring-2"></div>
        
        <!-- Central Icon & Monogram -->
        <div class="cover-center">
            <div class="cover-icon-circle" style="border-color: ${r.accent}4d; box-shadow: 0 4px 14px rgba(0,0,0,0.3);">
                <i class="fa-solid ${r.icon}" style="color: ${r.accent};"></i>
            </div>
            <div class="cover-monogram">
                ${d}
            </div>
        </div>
        
        <!-- Category Pill & Store Watermark (untuk ukuran md & lg) -->
        ${s?`
        <div class="cover-pill" style="border-color: ${r.accent}33; background: ${r.badgeBg};">
            <i class="fa-solid ${r.subIcon||r.icon} text-[7px]" style="color: ${r.accent};"></i>
            <span>${p}</span>
        </div>`:""}

        ${t==="lg"||t==="md"?`
        <div class="cover-watermark">PUTRI UTAMA TEKNIK</div>`:""}
    </div>`},Qe=e=>{const a=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk");W(e);const s=`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
        <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#475569"/>
                <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
        </defs>
        <rect width="300" height="300" fill="url(#bg)"/>
        <circle cx="150" cy="130" r="45" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <text x="150" y="210" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="34" fill="#ffffff" text-anchor="middle" letter-spacing="3">${_(a)}</text>
        <text x="150" y="270" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="10" fill="rgba(255,255,255,0.5)" text-anchor="middle" letter-spacing="2">PUTRI UTAMA TEKNIK</text>
    </svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`},i=e=>document.getElementById(e),I=e=>{const a=i(e);a&&a.classList.remove("hidden")},A=e=>{const a=i(e);a&&a.classList.add("hidden")},Xe=(e,a,t)=>{const s=i(e);s&&s.classList.toggle(a,t)},R=(e,a)=>{const t=i(e);t&&(t.innerText=a)},O=(e,a)=>{const t=i(e);t&&(t.innerHTML=a)},Ze=(e,a)=>{const t=i(e);t&&(t.value=a)},et=e=>{const a=i(e);return a?a.value:""},tt=(e,a)=>{const t=typeof e=="string"?i(e):e,s=typeof a=="string"?i(a):a;t&&(t.classList.remove("hidden"),t.offsetWidth,requestAnimationFrame(()=>{t.classList.remove("opacity-0"),s&&s.classList.remove("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95")}))},at=(e,a,t)=>{const s=typeof e=="string"?i(e):e,o=typeof a=="string"?i(a):a;if(!s){typeof t=="function"&&t();return}s.classList.add("opacity-0"),o&&o.classList.add("translate-y-full","sm:translate-y-10","sm:translate-y-8"),setTimeout(()=>{s.classList.add("hidden"),typeof t=="function"&&t()},280)};window.openModalAnim=tt;window.closeModalAnim=at;const st=e=>{try{return localStorage.getItem(e)}catch{return null}},ot=(e,a)=>{try{localStorage.setItem(e,a)}catch{}},l=e=>e==null?"":e.toString().replace(/[&<>'"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[a]),g=e=>{const a=Number(e);return isNaN(a)||e===null?"Rp 0":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(Math.abs(a)).replace(/^/,a<0?"-":"")},nt=e=>{if(typeof e!="string")return e;const a=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);return a?`https://lh3.googleusercontent.com/d/${a[1]}`:e},it=e=>{if(!e||typeof e!="string")return null;const a=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(a))return a;const t=a.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return t?t[1]:null},ne=e=>{if(typeof e!="string"||!e.trim())return null;const a=e.trim(),t=it(a);if(t)return{type:"youtube",id:t,embedUrl:`https://www.youtube.com/embed/${t}?autoplay=1&mute=1&muted=1&loop=1&playlist=${t}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const s=a.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(s&&s[1]){const o=s[1];return{type:"gdrive",id:o,streamUrl:`https://drive.google.com/uc?export=download&id=${o}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${o}`,directUrl:`https://drive.google.com/uc?export=download&id=${o}`,embedUrl:`https://drive.google.com/file/d/${o}/preview?autoplay=1`}}return{type:"direct",directUrl:a,embedUrl:a}},oa=e=>{const a=ne(e);return a?a.embedUrl:e},na=e=>{const a=ne(e);return a?a.embedUrl:e},ia=(e,a)=>typeof e!="string"||!e?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${a}`:e.includes("googleusercontent.com")&&!e.includes("=")?`${e}=${a}`:e,ra=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",da=(e,a,t,s)=>{document.title=e||"Toko Putri";const o=(n,c,b=!1)=>{const r=b?"property":"name";let d=document.querySelector(`meta[${r}="${n}"]`);d||(d=document.createElement("meta"),d.setAttribute(r,n),document.head.appendChild(d)),d.setAttribute("content",c)};a&&o("description",a),e&&o("og:title",e,!0),a&&o("og:description",a,!0),t&&o("og:image",t,!0),s&&o("og:url",s,!0)},la=(e,a)=>{let t=document.getElementById(e);t||(t=document.createElement("script"),t.id=e,t.type="application/ld+json",document.head.appendChild(t)),t.textContent=JSON.stringify(a)},ie=e=>{e&&R("loader-text",e);const a=i("global-loader");a&&(a.style.opacity="1",a.style.display="flex")},G=()=>{const e=i("global-loader");e&&(e.style.pointerEvents="none",e.style.transition="opacity 0.25s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250))},k=(e,a,t,s)=>{typeof window.showToast=="function"&&window.showToast(e,a,t,s)},ca=(e,a,t,s)=>{if(typeof window.showConfirm=="function")return window.showConfirm(e,a,t,s)},L={};window.loadedScripts=L;const pa=(e,a)=>a&&a()?Promise.resolve():(L[e]||(L[e]=new Promise((t,s)=>{const o=document.createElement("script");o.src=e,o.onload=()=>t(),o.onerror=()=>{delete L[e],s(new Error("Gagal memuat: "+e))},document.head.appendChild(o)})),L[e]),re=e=>{let a=(e||"").toString().replace(/\D/g,"");return a?(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),a):""},rt=(e,a="")=>{const t=re(e);if(!t){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp tidak valid!");return}const s=a?encodeURIComponent(a):"",o=`https://wa.me/${t}${s?`?text=${s}`:""}`;window.AndroidNativeApp&&typeof window.AndroidNativeApp.openWhatsApp=="function"?window.AndroidNativeApp.openWhatsApp(o):window.open(o,"_blank","noopener,noreferrer")},dt=(e,a=null,t=null)=>{try{const s=(typeof a=="string"?document.querySelector(a):a)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!s)return;const o=e.getBoundingClientRect(),n=s.getBoundingClientRect(),c=document.createElement("div");c.className="flying-cart-item",t?c.innerHTML=`<img src="${t}" alt="Product" class="w-full h-full object-cover rounded-full" />`:c.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const b=o.left+o.width/2-20,r=o.top+o.height/2-20,d=n.left+n.width/2-20,p=n.top+n.height/2-20;c.style.cssText=`
            position: fixed;
            left: ${b}px;
            top: ${r}px;
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
        `,document.body.appendChild(c),requestAnimationFrame(()=>{const w=d-b,x=p-r;c.style.transform=`translate3d(${w}px, ${x}px, 0) scale(0.25) rotate(18deg)`,c.style.opacity="0.4"}),setTimeout(()=>{c&&c.parentNode&&c.parentNode.removeChild(c),D("medium");const w=document.getElementById("bottom-nav-cart-badge")||s.querySelector(".cart-count-badge");w&&(w.classList.remove("cart-bounce-pop"),w.offsetWidth,w.classList.add("cart-bounce-pop")),s.classList.remove("cart-bounce-pop"),s.offsetWidth,s.classList.add("cart-bounce-pop"),setTimeout(()=>{w&&w.classList.remove("cart-bounce-pop"),s.classList.remove("cart-bounce-pop")},600)},500)}catch(s){console.error("flyToCart error",s)}};window.normalizeWA=re;window.openWhatsApp=rt;window.sLoad=ie;window.hLoad=G;window.el=i;window.show=I;window.hide=A;window.toggleCls=Xe;window.setIn=R;window.setH=O;window.setV=Ze;window.getV=et;window.esc=l;window.fixD=nt;window.fCur=g;window.sL=st;window.ssL=ot;window.triggerHaptic=D;window.flyToCartAnimation=dt;window.renderProductCoverHtml=Ye;window.getProductTheme=W;window.getMonogram=_;window.getProductCoverSvgDataUri=Qe;const te={deviceType:"bluetooth",deviceName:"Printer Thermal POS (Default)",deviceId:"",paperSize:"58mm",feedLines:2,autoCut:!1,openCashDrawer:!1,autoPrintOrder:!1,headerText:"",footerText:"Terima kasih atas kunjungan Anda!",showLogo:!0,showPoints:!0,showBarcode:!0,networkIp:"192.168.1.200:9100"},T=()=>{try{const e=localStorage.getItem("freshmart_printer_config");if(e)return{...te,...JSON.parse(e)}}catch(e){console.warn("Gagal membaca konfigurasi printer lokal:",e)}return{...te}},z=e=>{try{const t={...T(),...e};return localStorage.setItem("freshmart_printer_config",JSON.stringify(t)),t}catch(a){return console.error("Gagal menyimpan konfigurasi printer:",a),T()}},lt=()=>{const e=T(),a=(o,n)=>{const c=i(o);c&&(c.checked=!!n)},t=(o,n)=>{const c=i(o);c&&(c.value=n||"")};t("printer-device-name-display",e.deviceName),t("printer-paper-size",e.paperSize),t("printer-network-ip",e.networkIp),t("printer-header-custom",e.headerText),t("printer-footer-custom",e.footerText),a("printer-opt-points",e.showPoints),a("printer-opt-barcode",e.showBarcode),a("printer-opt-autocut",e.autoCut),a("printer-opt-drawer",e.openCashDrawer),a("printer-opt-autoprint",e.autoPrintOrder),le(e.deviceType);const s=i("printer-settings-modal");s&&s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("printerSettings"),I("printer-settings-modal"),setTimeout(()=>{i("printer-settings-modal")&&i("printer-settings-modal").classList.remove("opacity-0"),i("printer-settings-modal-box")&&i("printer-settings-modal-box").classList.remove("scale-95")},10)},de=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("printerSettings",e,()=>{i("printer-settings-modal")&&i("printer-settings-modal").classList.add("opacity-0"),i("printer-settings-modal-box")&&i("printer-settings-modal-box").classList.add("scale-95"),setTimeout(()=>A("printer-settings-modal"),300)}):(i("printer-settings-modal")&&i("printer-settings-modal").classList.add("opacity-0"),i("printer-settings-modal-box")&&i("printer-settings-modal-box").classList.add("scale-95"),setTimeout(()=>A("printer-settings-modal"),300))},le=e=>{window._selectedPrinterType=e,document.querySelectorAll(".printer-type-card").forEach(t=>{if(t.getAttribute("data-type")===e){t.classList.add("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),t.classList.remove("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const o=t.querySelector(".printer-check-badge");o&&o.classList.remove("hidden")}else{t.classList.remove("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),t.classList.add("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const o=t.querySelector(".printer-check-badge");o&&o.classList.add("hidden")}});const a=i("printer-network-box");a&&(e==="network"?a.classList.remove("hidden"):a.classList.add("hidden"))},ct=()=>{const e=(s,o="")=>{const n=i(s);return n?n.value:o},a=(s,o=!1)=>{const n=i(s);return n?n.checked:o},t={deviceType:window._selectedPrinterType||"bluetooth",paperSize:e("printer-paper-size","58mm"),networkIp:e("printer-network-ip","192.168.1.200:9100"),headerText:e("printer-header-custom",""),footerText:e("printer-footer-custom","Terima kasih atas kunjungan Anda!"),showPoints:a("printer-opt-points",!0),showBarcode:a("printer-opt-barcode",!0),autoCut:a("printer-opt-autocut",!1),openCashDrawer:a("printer-opt-drawer",!1),autoPrintOrder:a("printer-opt-autoprint",!1)};z(t),k("Pengaturan printer berhasil disimpan! ✅"),de()},pt=async()=>{if(!navigator.bluetooth){k("Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.");return}try{k("Mencari printer bluetooth di sekitar...");const e=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["000018f0-0000-1000-8000-00805f9b34fb","e7810a71-73ae-499d-8c15-faa9aef0c3f2","00001101-0000-1000-8000-00805f9b34fb"]});if(e){z({deviceType:"bluetooth",deviceName:e.name||"Bluetooth POS Printer",deviceId:e.id});const a=i("printer-device-name-display");a&&(a.value=e.name||"Bluetooth POS Printer"),k(`Printer "${e.name||"Bluetooth POS"}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&k("Koneksi bluetooth dibatalkan atau tidak tersedia.")}},mt=async()=>{if(!navigator.usb){k("Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.");return}try{k("Mencari printer USB...");const e=await navigator.usb.requestDevice({filters:[]});if(e){const a=(e.productName||"USB Thermal Printer")+" (USB)";z({deviceType:"usb",deviceName:a,deviceId:String(e.vendorId)+":"+String(e.productId)});const t=i("printer-device-name-display");t&&(t.value=a),k(`Printer USB "${a}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&k("Koneksi USB dibatalkan atau tidak ditemukan.")}},ut=()=>{const e=T(),a=e.paperSize==="80mm",t=a?48:32,s=m.store.name||"TOKO PUTRI",o=m.store.wa||"",n=(d,p,w=t)=>{const x=w-d.length-p.length;return d+(x>0?" ".repeat(x):" ")+p},c=new Date().toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let b=`
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${l(s)}</div>
    ${o?`<div style="text-align:center;font-size:11px;margin-bottom:4px;">WA: ${l(o)}</div>`:""}
    <div style="text-align:center;font-weight:bold;font-size:12px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:3px 0;margin:6px 0;">
        *** UJI COBA CETAK STRUK ***
    </div>
    <div style="white-space:pre;font-size:11px;">Tgl   : ${c}</div>
    <div style="white-space:pre;font-size:11px;">Format: Thermal ${a?"80mm (48 Kolom)":"58mm (32 Kolom)"}</div>
    <div style="white-space:pre;font-size:11px;">Koneksi: ${e.deviceType.toUpperCase()}</div>
    <div style="white-space:pre;font-size:11px;">Status : KONEKSI BERHASIL</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:11px;font-weight:bold;">${n("TES ITEM UJI COBA","HARGA",t)}</div>
    <div style="white-space:pre;font-size:10px;">${n("1x Produk Percobaan","Rp 25.000",t)}</div>
    <div style="white-space:pre;font-size:10px;">${n("2x Kertas Thermal Kasir","Rp 15.000",t)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:12px;font-weight:bold;">${n("TOTAL UJI","Rp 40.000",t)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    `;e.showPoints&&(b+=`<div style="white-space:pre;font-size:11px;">${n("Simulasi Poin Member","+10 Poin",t)}</div>`,b+='<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>'),e.showBarcode&&(b+=`<div style="text-align:center;margin:6px 0;">
            <div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*TEST-POS-${Date.now().toString().slice(-6)}*</div>
            <div style="font-size:9px;color:#333;">(BARCODE TEST OK)</div>
        </div><div style="border-bottom:1px dashed #000;margin:6px 0;"></div>`),b+=`
    <div style="text-align:center;font-size:10px;margin-top:6px;line-height:1.3;">
        ${l(e.footerText||"Terima kasih atas kunjungan Anda!")}
    </div>
    <div style="text-align:center;font-size:9px;font-style:italic;margin-top:4px;">
        Printer siap digunakan untuk operasional kasir Toko Putri.
    </div>
    <div style="height:25px;"></div>
    `;let r=i("thermal-print-section");if(r||(r=document.createElement("div"),r.id="thermal-print-section",document.body.appendChild(r)),r.innerHTML=`<div style="width:${a?"80mm":"58mm"};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${b}</div>`,e.deviceType==="rawbt"&&window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function"){const d=r.innerText,p=btoa(unescape(encodeURIComponent(d)));window.AndroidNativeApp.printRawBT(p)}else window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():window.print();k("Perintah uji cetak berhasil dikirim! 🖨️")};window.getPrinterConfig=T;window.savePrinterConfig=z;window.openPrinterSettingsModal=lt;window.closePrinterSettingsModal=de;window.selectPrinterDeviceTypeUI=le;window.savePrinterSettingsFromModal=ct;window.scanBluetoothPrinter=pt;window.scanUsbPrinter=mt;window.executeTestPrint=ut;const J=(e=null)=>{e&&typeof Q=="function"&&Q(e);const a=e||M;let t=(K||[]).find(u=>u.orderId===a);if(!t&&Array.isArray(C)&&(t=C.find(u=>u.orderId===a)),!t&&window.lastPrintedOrder&&window.lastPrintedOrder.orderId===a&&(t=window.lastPrintedOrder),!t)return;window.lastPrintedOrder=t;const s=typeof T=="function"?T():{paperSize:"58mm",showPoints:!0,showBarcode:!0},o=s.paperSize==="80mm",n=o?48:32,c=t.dateString?new Date(t.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",b=s.headerText||m.store.name||"Toko Putri",r=m.store.wa||"",d=(u,f,v=n)=>{const S=v-u.length-f.length;return u+(S>0?" ".repeat(S):" ")+f};let p=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${l(b)}</div>`;if(r&&(p+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${l(r)}</div>`),p+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">Order: #${t.orderId}</div><div style="white-space:pre;">Tgl  : ${c}</div><div style="white-space:pre;">Plg  : ${l(t.customer?.name||"Guest").substring(0,n-10)}</div><div style="white-space:pre;">Tipe : ${t.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko"}</div><div class="border-b border-dashed border-black my-2"></div>`,t.customer?.note&&(p+=`<div style="white-space:pre-wrap;word-break:break-all;">Cat: ${l(t.customer.note)}</div><div class="border-b border-dashed border-black my-2"></div>`),t.items.forEach(u=>{let f=u.variantName?` (${l(u.variantName)}${u.colorCode?" "+l(u.colorCode):""})`:"";const v=(l(u.name)+f+(u.poTime?" [PO]":"")).substring(0,n),S=`${parseFloat(u.qty)} ${l(u.unit||"pcs")} x ${u.effectivePrice.toLocaleString("id-ID")}`,F=(parseFloat(u.qty)*u.effectivePrice).toLocaleString("id-ID");p+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${v}</div><div style="white-space:pre;font-size:11px;">${d(S,F,n)}</div>`,u.poTime&&(p+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${l(u.poTime)}</div>`)}),p+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">${d("Subtotal",(t.payment?.subtotal||0).toLocaleString("id-ID"),n)}</div>`,t.customer?.deliveryMethod==="delivery"&&(p+=`<div style="white-space:pre;">${d("Ongkir",(t.payment?.shippingCost||0).toLocaleString("id-ID"),n)}</div>`),t.payment?.shippingDiscount&&(p+=`<div style="white-space:pre;">${d("Pot.Ongkir",`-${t.payment.shippingDiscount.toLocaleString("id-ID")}`,n)}</div>`),t.payment?.productDiscount&&(p+=`<div style="white-space:pre;">${d("Pot.Harga",`-${t.payment.productDiscount.toLocaleString("id-ID")}`,n)}</div>`),t.payment?.ppnAmount&&t.payment.ppnAmount>0){const u=t.payment.ppnType==="inclusive",f=t.payment.ppnRate||11,v=t.payment.ppnAmount||0,S=(t.payment.subtotal||0)-(t.payment.productDiscount||0)+(t.payment.shippingCost||0)-(t.payment.shippingDiscount||0),F=t.payment.dppAmount||(u?Math.round(S*100/(100+f)):Math.max(0,S));p+=`<div style="white-space:pre;">${d("DPP",F.toLocaleString("id-ID"),n)}</div>`,p+=`<div style="white-space:pre;">${d(`${u?"Inc. PPN":"PPN"} (${f}%)`,(u?"":"+")+v.toLocaleString("id-ID"),n)}</div>`}p+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-weight:bold;font-size:12px;">${d("TOTAL","Rp "+(t.payment?.grandTotal||0).toLocaleString("id-ID"),n)}</div><div style="white-space:pre;">${d("Bayar:",String(t.payment?.method||"").toUpperCase(),n)}</div>`,s.showPoints&&(t.pointsEarned>0||t.finalMemberPoints!==void 0)&&(p+='<div class="border-b border-dashed border-black my-2"></div>',t.pointsEarned>0&&(p+=`<div style="white-space:pre;">${d("Poin Didapat:","+"+t.pointsEarned,n)}</div>`),t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null&&(p+=`<div style="white-space:pre;font-weight:bold;">${d("Saldo Poin:",String(t.finalMemberPoints),n)}</div>`),t.claimedReward&&(p+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;margin-top:2px;">HADIAH: ${l(t.claimedReward.name)}</div><div style="white-space:pre;font-size:10px;">(${t.claimedReward.status==="ready"?"Kirim bersama pesanan":t.claimedReward.status==="waiting_stock"?"Stok kosong-ditunda":"Menunggu konfirmasi"})</div>`)),t.items.some(u=>u.poTime&&u.poTime!=="")&&(p+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),s.showBarcode&&(p+=`<div class="border-b border-dashed border-black my-2"></div><div style="text-align:center;margin:4px 0;"><div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*ORDER-${l(t.orderId)}*</div><div style="font-size:8px;color:#666;">SCAN DI KASIR</div></div>`),p+=`<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${l(s.footerText||"Terima Kasih Atas Kunjungan Anda")}</div><div class="border-b border-dashed border-black my-2"></div><div style="height:15px;"></div>`,O("receipt-paper-content",p);const x=i("receipt-paper-content");x&&(x.style.width=o?"330px":"260px");const P=i("receipt-preview-modal-box");P&&(P.classList.remove("max-w-[320px]","max-w-[390px]"),P.classList.add(o?"max-w-[390px]":"max-w-[320px]"));const j=i("receipt-preview-modal");j&&j.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),I("receipt-preview-modal"),setTimeout(()=>{i("receipt-preview-modal")&&i("receipt-preview-modal").classList.remove("opacity-0"),i("receipt-preview-modal-box")&&i("receipt-preview-modal-box").classList.remove("scale-95")},10)},ft=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{i("receipt-preview-modal")&&i("receipt-preview-modal").classList.add("opacity-0"),i("receipt-preview-modal-box")&&i("receipt-preview-modal-box").classList.add("scale-95"),setTimeout(()=>A("receipt-preview-modal"),300)}):(i("receipt-preview-modal")&&i("receipt-preview-modal").classList.add("opacity-0"),i("receipt-preview-modal-box")&&i("receipt-preview-modal-box").classList.add("scale-95"),setTimeout(()=>A("receipt-preview-modal"),300))},bt=()=>{if(!((K||[]).find(n=>n.orderId===M)||(Array.isArray(C)?C.find(n=>n.orderId===M):null)||window.lastPrintedOrder))return;const a=i("receipt-paper-content")?i("receipt-paper-content").innerHTML:"";let t=i("thermal-print-section");t||(t=document.createElement("div"),t.id="thermal-print-section",document.body.appendChild(t));const s=typeof T=="function"?T():{paperSize:"58mm",deviceType:"system"},o=s.paperSize==="80mm";if(t.innerHTML=`<div style="width:${o?"80mm":"58mm"};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${a}</div>`,s.deviceType==="rawbt"&&window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function"){const n=t.innerText,c=btoa(unescape(encodeURIComponent(n)));window.AndroidNativeApp.printRawBT(c)}else window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():window.print()};window.openReceiptPreview=J;window.openCustomerReceiptPreview=J;window.closeReceiptPreviewModal=ft;window.executePrintReceipt=bt;window.checkProPrint=()=>{J()};let Y="invoice";const wt=(e,a=null)=>{if(Y=e,e==="po"){const r=m.purchases||[],d=r.find(f=>String(f.id)===String(a))||(window.currentActivePoId?r.find(f=>String(f.id)===String(window.currentActivePoId)):r[0]);if(!d){typeof window.showToast=="function"&&window.showToast("Data PO tidak ditemukan!");return}R("doc-modal-title","Preview Purchase Order (PO)");let p="";m.store.logo&&(m.store.logo.includes("http")||m.store.logo.includes("data:"))?p=`<img loading="eager" src="${l(m.store.logo)}" class="w-16 h-16 object-contain">`:p='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';const w=f=>{if(!f)return"-";try{return(f.toDate?f.toDate():new Date(f)).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})}catch{return"-"}},x=f=>{const v=parseFloat(f);return isNaN(v)?"0":Number.isInteger(v)?String(v):v.toFixed(2).replace(/\.?0+$/,"")},P=d.paymentType==="tempo"?`Tempo ${d.tempoDays||14} Hari (Jatuh Tempo: ${w(d.tempoDueDate)})`:d.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai";let j=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
            <div class="flex items-center gap-4">
                ${p}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${l(m.store.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${l(m.store.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${l(m.store.address||"Alamat fisik toko belum diatur.")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${l(m.store.wa||m.store.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-3xl tracking-widest text-slate-900 uppercase">PURCHASE ORDER</h2>
                <p class="text-sm font-bold text-slate-600 mt-2 font-mono">#${l(d.poNumber||d.id)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${w(d.date||d.createdAt)}</p>
                <p class="text-xs font-bold mt-1 text-[var(--color-primary)]">Status: ${d.status==="ordered"?"DIPESAN":d.status==="received"?"DITERIMA":"SELESAI"}</p>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-8 mb-8">
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Kepada Rekanan / Supplier:</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${l(d.supplierName||"Supplier")}</p>
                ${d.supplierPhone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${l(d.supplierPhone)}</p>`:""}
                ${d.supplierAddress?`<p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${l(d.supplierAddress)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ketentuan & Pembayaran:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1.5"><span class="text-slate-500">Termin Pembayaran:</span> <b class="text-slate-900">${P}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1.5"><span class="text-slate-500">Tujuan Pengiriman:</span> <b class="text-slate-900">${l(m.store.name||"Gudang Utama Toko")}</b></p>
                ${d.notes?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-2"><i class="fa-solid fa-note-sticky mr-1"></i> ${l(d.notes)}</p>`:""}
            </div>
        </div>

        <table class="w-full text-left border-collapse mb-8">
            <thead>
                <tr class="border-b-2 border-slate-800 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-900 text-white">
                    <th class="py-3 px-4 rounded-tl-xl text-center w-12 border-r border-slate-700">No</th>
                    <th class="py-3 px-4 border-r border-slate-700">Nama Barang & Spesifikasi</th>
                    <th class="py-3 px-4 text-center w-28 border-r border-slate-700">Kuantitas</th>
                    <th class="py-3 px-4 text-right w-36 border-r border-slate-700">Harga Modal (HPP)</th>
                    <th class="py-3 px-4 rounded-tr-xl text-right w-36">Subtotal</th>
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">
                ${(d.items||[]).map((f,v)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-3 px-4 text-center font-mono text-slate-500">${v+1}</td>
                    <td class="py-3 px-4 font-bold text-slate-900 uppercase">
                        ${l(f.name)}
                        ${f.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5">Varian: ${l(f.variantName)}</span>`:""}
                        ${f.sku?`<span class="text-slate-400 text-[10px] font-mono block mt-0.5">SKU: ${l(f.sku)}</span>`:""}
                    </td>
                    <td class="py-3 px-4 text-center font-bold text-base text-slate-800">${x(f.qty)} <span class="text-xs font-normal text-slate-500">${l(f.unit||"pcs")}</span></td>
                    <td class="py-3 px-4 text-right font-mono text-slate-600">${g(f.unitPrice)}</td>
                    <td class="py-3 px-4 text-right font-bold font-mono text-slate-900">${g(Math.round((parseFloat(f.qty)||0)*(parseFloat(f.unitPrice)||0)))}</td>
                </tr>
                `).join("")}
            </tbody>
        </table>

        <div class="flex justify-end mb-8">
            <div class="w-80 bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs space-y-2.5">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk:</span><span class="font-bold text-slate-800">${g(d.subtotal)}</span></div>
                ${d.discount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Potongan Diskon:</span><span>-${g(d.discount)}</span></div>`:""}
                ${d.shippingFee>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim:</span><span>+${g(d.shippingFee)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2.5 mt-2 font-bold text-base text-slate-900">
                    <span>TOTAL ORDER (PO):</span>
                    <span class="text-[var(--color-primary)] font-black">${g(d.total)}</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-8 text-center text-sm mt-auto pt-8 border-t border-slate-200">
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Dipesan Oleh (Purchasing):</span>
                <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
                <span class="font-bold text-slate-900 uppercase">${l(m.store.name||"Toko Putri")}</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Diterima &amp; Disetujui Oleh:</span>
                <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
                <span class="font-bold text-slate-900 uppercase">${l(d.supplierName||"Rekanan / Supplier")}</span>
            </div>
        </div>
        `;O("doc-paper-content",j);const u=i("doc-preview-modal");u&&u.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),I("doc-preview-modal"),setTimeout(()=>{i("doc-preview-modal")&&i("doc-preview-modal").classList.remove("opacity-0"),i("doc-preview-modal-box")&&i("doc-preview-modal-box").classList.remove("scale-95"),B()},10);return}const t=K.find(r=>r.orderId===M);if(!t)return;R("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const s=t.dateString?new Date(t.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"";let o="";m.store.logo&&(m.store.logo.includes("http")||m.store.logo.includes("data:"))?o=`<img loading="eager" src="${l(m.store.logo)}" class="w-16 h-16 object-contain">`:o='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';let n=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${o}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${l(m.store.name)}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${l(m.store.slogan||"General Supplier")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${l(m.store.address||"Alamat fisik toko belum diatur.")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${l(m.store.wa||"-")}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-3xl tracking-widest ${e==="invoice"?"text-blue-600":"text-amber-600"} uppercase">${e==="invoice"?t.payment?.method==="tempo"?"PROFORMA INVOICE":"INVOICE":"SURAT JALAN"}</h2>
            <p class="text-sm font-bold text-slate-600 mt-2 font-mono">#${t.orderId}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${s}</p>
        </div>
    </div>

    <div class="grid grid-cols-2 gap-8 mb-8">
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ditagihkan Kepada (Pemesan):</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-1">${l(t.customer?.name||"Guest")}${t.customer?.wa?` <span class="text-xs font-mono font-medium text-slate-500">(+${l(t.customer.wa)})</span>`:""}</p>
            <p class="text-sm font-medium text-slate-700 leading-relaxed mb-2">${l(t.customer?.address||"-")}</p>
            ${t.isDropPoint&&t.dropPoint?`
            <div class="mt-3 pt-3 border-t border-rose-200 bg-rose-50/80 p-3 rounded-xl border border-dashed text-left">
                <div class="flex items-center gap-1.5 text-rose-700 font-bold text-xs uppercase tracking-wider mb-1">
                    <i class="fa-solid fa-location-dot"></i> Pengantaran ke Lokasi Berbeda (Drop-Point):
                </div>
                <p class="font-bold text-sm text-slate-900 uppercase">${l(t.dropPoint.name||"-")}${t.dropPoint.wa?` <span class="font-mono text-xs font-semibold text-rose-600">(+${l(t.dropPoint.wa)})</span>`:""}</p>
                <p class="text-xs font-medium text-slate-700 mt-0.5 leading-relaxed">${l(t.dropPoint.address||"-")}</p>
            </div>
            `:""}
            ${t.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200 mt-2"><i class="fa-solid fa-note-sticky"></i> Catatan: ${l(t.customer.note)}</p>`:""}
        </div>
        
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-center space-y-3">
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Metode Pengiriman</span>
                <span class="text-sm font-bold text-slate-800 uppercase">${l(t.isDropPoint?"Drop-Point (Lokasi Berbeda)":t.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko")}</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Sistem Pembayaran</span>
                <span class="text-sm font-bold text-slate-800 uppercase">${l(t.payment?.method||"cash")}</span>
            </div>
            <div class="flex justify-between items-center pb-1">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Bayar</span>
                <span class="text-sm font-bold ${t.status==="Selesai"?"text-emerald-600":"text-rose-600"} uppercase">${t.status==="Selesai"?"LUNAS":"BELUM LUNAS"}</span>
            </div>
        </div>
    </div>
    `;if(e==="invoice"?n+=`
        <table class="w-full text-left text-sm text-slate-900 border-collapse mb-6">
            <thead>
                <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-xs">
                    <th class="py-3 px-4 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
                    <th class="py-3 px-4 border-r border-slate-700">Deskripsi Produk & Varian</th>
                    <th class="py-3 px-4 text-center w-24 border-r border-slate-700">Qty</th>
                    <th class="py-3 px-4 text-right w-32 border-r border-slate-700">Harga Sat.</th>
                    <th class="py-3 px-4 rounded-tr-xl text-right w-32">Total</th>
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">
                ${t.items.map((r,d)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${d+1}</td>
                    <td class="py-4 px-4 font-bold flex items-center gap-2">
                        ${l(r.name)} 
                        ${r.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${l(r.variantName)}</span> ${r.colorCode?`<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${l(r.colorCode)};"></span>`:""}`:""}
                        ${r.poTime?`<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${l(r.poTime)}</span>`:""}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-slate-700">${parseFloat(r.qty)} <span class="text-[10px] font-bold text-slate-400 uppercase">${l(r.unit||"pcs")}</span></td>
                    <td class="py-4 px-4 text-right font-mono font-medium">${g(r.effectivePrice)}</td>
                    <td class="py-4 px-4 text-right font-mono font-bold">${g(r.effectivePrice*parseFloat(r.qty))}</td>
                </tr>`).join("")}
            </tbody>
        </table>

        <div class="flex justify-end mb-10">
            <div class="w-1/2 md:w-[45%] space-y-3 text-sm font-bold text-slate-700">
                <div class="flex justify-between px-4"><span>Subtotal Produk</span><span class="font-mono">${g(t.payment?.subtotal)}</span></div>
                ${t.payment?.shippingCost?`<div class="flex justify-between px-4"><span>Ongkos Kirim</span><span class="font-mono">${g(t.payment.shippingCost)}</span></div>`:""}
                ${t.payment?.shippingDiscount?`<div class="flex justify-between px-4 text-emerald-600"><span>Diskon Ongkir</span><span class="font-mono">-${g(t.payment.shippingDiscount)}</span></div>`:""}
                ${t.payment?.productDiscount?`<div class="flex justify-between px-4 text-rose-600"><span>Diskon Produk</span><span class="font-mono">-${g(t.payment.productDiscount)}</span></div>`:""}
                ${(()=>{if(!t.payment?.ppnAmount||t.payment.ppnAmount<=0)return"";const r=t.payment.ppnType==="inclusive",d=t.payment.ppnRate||11,p=t.payment.ppnAmount,w=(t.payment.subtotal||0)-(t.payment.productDiscount||0)+(t.payment.shippingCost||0)-(t.payment.shippingDiscount||0),x=t.payment.dppAmount||(r?Math.round(w*100/(100+d)):Math.max(0,w));return`
                    <div class="flex justify-between px-4 text-slate-600"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-mono">${g(x)}</span></div>
                    <div class="flex justify-between px-4 text-amber-600"><span>${r?"Termasuk PPN":"PPN"} (${d}%)</span><span class="font-mono">${r?"":"+"}${g(p)}</span></div>
                    `})()}
                
                <div class="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl mt-4 shadow-md">
                    <span class="font-bold text-base uppercase tracking-widest">Grand Total</span>
                    <span class="font-mono text-xl text-emerald-400 font-bold tracking-tight">${g(t.payment?.grandTotal)}</span>
                </div>
                ${t.payment?.method==="tempo"?`
                <div class="flex justify-between px-4 mt-4 text-emerald-600"><span>Uang Muka (DP)</span><span class="font-mono">${g(t.payment?.tempoDp||0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-4 rounded-xl mt-2 border border-rose-200">
                    <span class="font-bold text-base uppercase tracking-widest">Sisa Tagihan</span>
                    <span class="font-mono text-xl font-bold tracking-tight">${g(t.payment?.tempoBalance||0)}</span>
                </div>
                `:""}
            </div>
        </div>`:n+=`
        <table class="w-full text-left text-sm text-slate-900 border-collapse mb-10">
            <thead>
                <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-xs">
                    <th class="py-3 px-4 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
                    <th class="py-3 px-4 border-r border-slate-700">Nama & Spesifikasi Barang</th>
                    <th class="py-3 px-4 text-center w-28 border-r border-slate-700">Kuantitas</th>
                    <th class="py-3 px-4 text-center w-24 border-r border-slate-700">Satuan</th>
                    <th class="py-3 px-4 rounded-tr-xl text-center w-24">Ceklis Gudang</th>
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">
                ${t.items.map((r,d)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${d+1}</td>
                    <td class="py-4 px-4 font-bold uppercase flex items-center gap-2">
                        ${l(r.name)} 
                        ${r.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${l(r.variantName)}</span> ${r.colorCode?`<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${l(r.colorCode)};"></span>`:""}`:""}
                        ${r.poTime?`<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${l(r.poTime)}</span>`:""}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-lg text-slate-800">${parseFloat(r.qty)}</td>
                    <td class="py-4 px-4 text-center text-slate-500 font-bold uppercase text-xs">${l(r.unit||"pcs")}</td>
                    <td class="py-4 px-4 text-center"><div class="w-5 h-5 border-2 border-slate-300 mx-auto rounded shadow-inner"></div></td>
                </tr>`).join("")}
            </tbody>
        </table>
        `,(t.pointsEarned>0||t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null)&&(n+=`
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5 flex items-center gap-6">
            <div class="w-10 h-10 rounded-xl bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
            ${t.pointsEarned>0?`<div><p class="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-lg text-amber-700">+${t.pointsEarned}</p></div>`:""}
            ${t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null?`<div><p class="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Terkumpul</p><p class="font-bold text-lg text-amber-700">${t.finalMemberPoints}</p></div>`:""}
        </div>`),t.claimedReward){const r=t.claimedReward.status==="ready"?"SERTAKAN BERSAMA PENGIRIMAN INI":t.claimedReward.status==="waiting_stock"?"STOK KOSONG — KIRIM SUSULAN":"MENUNGGU KONFIRMASI GUDANG";n+=`
        <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-5 mb-8 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                <div>
                    <p class="text-[10px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${t.claimedReward.pointsCost} Poin)</p>
                    <p class="font-bold text-base text-violet-800 uppercase">${l(t.claimedReward.name)}</p>
                    ${t.claimedReward.note?`<p class="text-xs italic text-violet-600 mt-1">"${l(t.claimedReward.note)}"</p>`:""}
                </div>
            </div>
            <span class="text-[10px] font-bold px-3 py-2 rounded-xl bg-violet-600 text-white uppercase tracking-widest text-center shrink-0">${r}</span>
        </div>`}t.payment?.method==="tempo"&&(n+=`
        <div class="mt-6 mb-8 border border-pink-200 bg-pink-50 p-4 rounded-xl text-left">
            <h4 class="font-bold text-pink-700 text-xs uppercase tracking-widest mb-1"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo</h4>
            <p class="text-[10px] text-pink-600 font-bold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${t.payment.tempoDueDate?new Date(t.payment.tempoDueDate).toLocaleDateString("id-ID"):"-"}). Keterlambatan pembayaran akan dikenakan denda sebesar 1% dari sisa tagihan untuk setiap harinya.</p>
        </div>`),t.items.some(r=>r.poTime&&r.poTime!=="")&&(n+=`
        <div class="mt-6 mb-8 border border-amber-200 bg-amber-50 p-4 rounded-xl text-left flex gap-3 items-start">
            <i class="fa-solid fa-clock text-amber-500 mt-0.5 animate-pulse"></i>
            <div>
                <h4 class="font-bold text-amber-700 text-xs uppercase tracking-widest mb-1">Informasi Produk Pre-Order (PO)</h4>
                <p class="text-[10px] text-amber-600 font-bold leading-relaxed">Pesanan ini mengandung produk Pre-Order (PO). Khusus untuk produk berlabel PO akan dikirimkan menyusul tanpa dikenakan biaya tambahan.</p>
            </div>
        </div>`),n+=`
    <div class="grid grid-cols-3 gap-8 text-center text-sm mt-auto pt-8">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Penerima / Klien</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900">${l(t.customer?.name||"Nama Terang & TTD")}</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Sopir / Pengantar</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900">Nama Terang & TTD</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Hormat Kami,</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900 uppercase">${l(m.store.name)}</span>
        </div>
    </div>
    `,O("doc-paper-content",n);const b=i("doc-preview-modal");b&&b.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),I("doc-preview-modal"),setTimeout(()=>{i("doc-preview-modal")&&i("doc-preview-modal").classList.remove("opacity-0"),i("doc-preview-modal-box")&&i("doc-preview-modal-box").classList.remove("scale-95"),B()},10)},gt=()=>{if(!E||E.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}Y="sph";const e="SPH-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.floor(1e3+Math.random()*9e3),a=new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}),t=new Date(Date.now()+14*24*60*60*1e3).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"});R("doc-modal-title","Surat Penawaran Harga (SPH)");let s="";m.store?.logo&&(m.store.logo.includes("http")||m.store.logo.includes("data:"))?s=`<img loading="eager" src="${l(m.store.logo)}" class="w-16 h-16 object-contain">`:s='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';const o=typeof window.getEffP=="function"?window.getEffP:r=>r.price||0;let n=0,c=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${s}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${l(m.store?.name||"Toko Putri")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${l(m.store?.slogan||"General Supplier & Alat Teknik")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${l(m.store?.address||"Alamat fisik toko belum diatur.")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${l(m.store?.wa||"-")}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl md:text-3xl tracking-widest text-emerald-600 uppercase">PENAWARAN HARGA</h2>
            <p class="text-sm font-bold text-slate-600 mt-2 font-mono">#${e}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${a}</p>
            <span class="inline-block mt-2 px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-300 rounded text-[10px] font-bold uppercase tracking-wider">
                Berlaku s/d: ${t}
            </span>
        </div>
    </div>

    <div class="grid grid-cols-2 gap-8 mb-8">
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ditujukan Kepada:</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-1">Kepada Yth. Rekanan / Proyek</p>
            <p class="text-xs font-medium text-slate-600 leading-relaxed">Pelanggan Terhormat / Departemen Pengadaan</p>
            <p class="text-xs italic text-slate-400 mt-2">* Surat penawaran harga resmi dapat digunakan sebagai referensi RAB proyek & pengajuan anggaran kantor.</p>
        </div>
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-center space-y-3">
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Masa Berlaku</span>
                <span class="text-sm font-bold text-slate-800">14 Hari Kalender</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Ketersediaan Stok</span>
                <span class="text-sm font-bold text-slate-800">Konfirmasi Saat Pemesanan</span>
            </div>
            <div class="flex justify-between items-center pb-1">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Dokumen</span>
                <span class="text-sm font-bold text-emerald-600 uppercase tracking-wider font-mono">OFFICIAL QUOTATION</span>
            </div>
        </div>
    </div>

    <table class="w-full text-left text-sm text-slate-900 border-collapse mb-6">
        <thead>
            <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-xs">
                <th class="py-3 px-4 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
                <th class="py-3 px-4 border-r border-slate-700">Deskripsi Barang & Spesifikasi</th>
                <th class="py-3 px-4 text-center w-24 border-r border-slate-700">Qty</th>
                <th class="py-3 px-4 text-right w-32 border-r border-slate-700">Harga Satuan</th>
                <th class="py-3 px-4 rounded-tr-xl text-right w-32">Total Estimasi</th>
            </tr>
        </thead>
        <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">
            ${E.map((r,d)=>{let p=parseFloat(r.qty)||1,w=o(r),x=p*w;return n+=x,`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-3.5 px-4 text-center font-mono text-slate-500">${d+1}</td>
                    <td class="py-3.5 px-4 font-bold">
                        ${l(r.name)}
                        ${r.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${l(r.variantName)}</span>`:""}
                    </td>
                    <td class="py-3.5 px-4 text-center font-bold text-slate-700">${p} <span class="text-[10px] font-bold text-slate-400 uppercase">${l(r.unit||"pcs")}</span></td>
                    <td class="py-3.5 px-4 text-right font-mono font-medium">${g(w)}</td>
                    <td class="py-3.5 px-4 text-right font-mono font-bold">${g(x)}</td>
                </tr>`}).join("")}
        </tbody>
    </table>

    <div class="flex justify-end mb-8">
        <div class="w-1/2 md:w-[45%] space-y-2 text-sm font-bold text-slate-700">
            <div class="flex justify-between px-4"><span>Subtotal Estimasi</span><span class="font-mono">${g(n)}</span></div>
            <div class="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl mt-2 shadow-md">
                <span class="font-bold text-base uppercase tracking-widest">Total Penawaran</span>
                <span class="font-mono text-xl text-emerald-400 font-bold tracking-tight">${g(n)}</span>
            </div>
        </div>
    </div>

    <div class="border border-slate-200 bg-slate-50 p-4 rounded-xl text-left mb-8">
        <h4 class="font-bold text-slate-700 text-xs uppercase tracking-widest mb-1"><i class="fa-solid fa-circle-info mr-1 text-[var(--color-primary)]"></i> Syarat & Ketentuan Penawaran:</h4>
        <ul class="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
            <li>Harga penawaran berlaku selama <b>14 hari kalender</b> terhitung sejak tanggal dokumen diterbitkan.</li>
            <li>Ketersediaan dan fluktuasi stok dapat berubah sewaktu-waktu sampai diterbitkannya konfirmasi pesanan (PO) resmi.</li>
            <li>Biaya pengiriman dan penanganan disesuaikan dengan kuantitas dan jarak tempuh lokasi pengiriman.</li>
        </ul>
    </div>

    <div class="grid grid-cols-2 gap-8 text-center text-sm mt-auto pt-4">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Menyetujui / Klien Proyek</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900">Nama Terang & Stempel Perusahaan</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Hormat Kami,</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900 uppercase">${l(m.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `;O("doc-paper-content",c);const b=i("doc-preview-modal");b&&b.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),I("doc-preview-modal"),setTimeout(()=>{i("doc-preview-modal")&&i("doc-preview-modal").classList.remove("opacity-0"),i("doc-preview-modal-box")&&i("doc-preview-modal-box").classList.remove("scale-95"),B()},10)},B=()=>{const e=i("doc-paper-scroll-area"),a=i("doc-paper-content"),t=i("doc-paper-wrapper");if(!e||!a||!t)return;const s=794,n=e.clientWidth-16,c=Math.min(1,n/s);a.style.transform=`translateX(-50%) scale(${c})`,t.style.height=a.offsetHeight*c+"px"};window.addEventListener("resize",()=>{const e=i("doc-preview-modal");e&&!e.classList.contains("hidden")&&B()});const xt=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{i("doc-preview-modal")&&i("doc-preview-modal").classList.add("opacity-0"),i("doc-preview-modal-box")&&i("doc-preview-modal-box").classList.add("scale-95"),setTimeout(()=>A("doc-preview-modal"),300)}):(i("doc-preview-modal")&&i("doc-preview-modal").classList.add("opacity-0"),i("doc-preview-modal-box")&&i("doc-preview-modal-box").classList.add("scale-95"),setTimeout(()=>A("doc-preview-modal"),300))},ht=()=>{const e=i("doc-paper-content")?i("doc-paper-content").innerHTML:"";if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){let t=i("thermal-print-section");t||(t=document.createElement("div"),t.id="thermal-print-section",document.body.appendChild(t)),t.innerHTML=e,window.AndroidNativeApp.print();return}const a=window.open("","_blank");if(!a){let t=document.getElementById("a4-print-fallback-iframe");t||(t=document.createElement("iframe"),t.id="a4-print-fallback-iframe",t.style.position="fixed",t.style.right="0",t.style.bottom="0",t.style.width="0",t.style.height="0",t.style.border="0",t.style.opacity="0",document.body.appendChild(t));const s=t.contentWindow.document;s.open(),s.write(`<!DOCTYPE html><html><head><title>Cetak Dokumen A4</title>
        <style>@page{size:A4 portrait;margin:10mm}body{font-family:'Barlow',system-ui,sans-serif;background:#fff;margin:0;padding:16px;color:#0f172a;-webkit-print-color-adjust:exact;print-color-adjust:exact}.w-full{width:100%}</style>
        </head><body><div style="max-width:794px;margin:0 auto">${e}</div></body></html>`),s.close(),setTimeout(()=>{try{t.contentWindow.focus(),t.contentWindow.print()}catch(o){console.warn("[DocPrint] Fallback iframe print error:",o)}},500);return}a.document.write(`
        <html>
        <head>
            <title>Cetak Dokumen</title>
            <script src="https://cdn.tailwindcss.com"><\/script>
            <style>
                @page { size: A4 portrait; margin: 10mm; }
                body { font-family: 'Barlow', system-ui, sans-serif; background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            </style>
        </head>
        <body onload="setTimeout(() => { window.print(); }, 800)">
            <div class="w-full max-w-[794px] mx-auto p-4 text-sm leading-relaxed text-slate-900">
                ${e}
            </div>
        </body>
        </html>
    `),a.document.close()},vt=async e=>{if(!se){q(!0),ie(e==="image"?"Membuat Gambar HD...":"Menyusun PDF...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{G(),q(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const a=i("doc-paper-content");if(!a)throw new Error("Elemen dokumen tidak ditemukan.");const t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.left="-9999px",t.style.width=a.offsetWidth+"px",t.style.height="max-content",t.style.backgroundColor="#ffffff",t.style.overflow="visible";const s=a.cloneNode(!0);s.id="doc-clone-printing",s.style.margin="0 auto",s.style.boxShadow="none",s.classList.remove("absolute","top-0","left-1/2"),s.style.position="static",s.style.left="auto",s.style.top="auto",s.style.transform="none",s.style.height="max-content",s.style.maxHeight="none",s.style.overflow="visible",s.classList.add("h-max"),t.appendChild(s),document.body.appendChild(t);const o=Array.from(s.querySelectorAll("img"));if(await Promise.all(o.map(d=>d.complete?Promise.resolve():new Promise(p=>{d.addEventListener("load",p,{once:!0}),d.addEventListener("error",p,{once:!0})}))),await new Promise(d=>setTimeout(d,300)),t.offsetWidth===0||t.offsetHeight===0)throw new Error("Dokumen belum sepenuhnya ter-render. Coba lagi.");const n={scale:2,useCORS:!0,backgroundColor:"#ffffff",width:t.offsetWidth,height:t.offsetHeight,windowWidth:t.offsetWidth,windowHeight:t.offsetHeight},c=await html2canvas(t,n);if(document.body.removeChild(t),!c||c.width===0||c.height===0)throw new Error("Gagal menangkap gambar dokumen (canvas kosong).");const b=M||Date.now().toString(36).toUpperCase(),r=`${Y.toUpperCase()}_${b}`;if(e==="image"){const d=c.toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(d,`${r}.png`,"image/png");else{const p=document.createElement("a");p.download=`${r}.png`,p.href=d,p.click()}typeof window.showToast=="function"&&window.showToast("Gambar Berhasil Disimpan!")}else{const d=c.toDataURL("image/jpeg",1);if(!d||!d.startsWith("data:image/jpeg;base64,"))throw new Error("Data gambar hasil export tidak valid.");const p=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,w=210,x=c.height*w/c.width;if(!isFinite(x)||x<=0)throw new Error("Ukuran halaman PDF tidak valid.");const P=new p({orientation:"p",unit:"mm",format:[w,x]});P.addImage(d,"JPEG",0,0,w,x),window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"?window.AndroidNativeApp.saveOrShareFile(P.output("datauristring"),`${r}.pdf`,"application/pdf"):P.save(`${r}.pdf`),typeof window.showToast=="function"&&window.showToast("File PDF Berhasil Disimpan!")}}catch(a){console.error("Export Error: ",a),typeof window.showToast=="function"&&window.showToast(a&&a.message?`Gagal: ${a.message}`:"Gagal memproses dokumen.");const t=document.getElementById("doc-clone-printing");t&&t.parentElement&&document.body.removeChild(t.parentElement)}finally{G(),q(!1)}}};window.openDocPreview=wt;window.openCartSPHPreview=gt;window.fitDocPreview=B;window.closeDocPreviewModal=xt;window.printDocA4=ht;window.exportDocFile=vt;export{st as $,Se as A,Ae as B,it as C,Me as D,Vt as E,zt as F,at as G,Kt as H,Xe as I,ye as J,ke as K,Ot as L,be as M,ge as N,xe as O,we as P,he as Q,ve as R,Ct as S,Mt as T,It as U,Nt as V,Et as W,Rt as X,ne as Y,na as Z,oa as _,m as a,ce as a0,G as a1,nt as a2,ie as a3,Ne as a4,ea as a5,Ee as a6,ta as a7,Re as a8,aa as a9,D as aA,He as aB,kt as aC,Tt as aD,fe as aE,Bt as aF,Pe as aG,Te as aH,$e as aI,De as aJ,Le as aK,Ce as aL,Wt as aM,Ke as aN,yt as aO,Lt as aP,Ht as aQ,Ft as aR,qt as aS,Gt as aT,Qt as aU,Ue as aa,Zt as ab,jt as ac,K as ad,se as ae,q as af,M as ag,pa as ah,Q as ai,ra as aj,_t as ak,re as al,rt as am,Oe as an,je as ao,Xt as ap,Jt as aq,Ut as ar,T as as,Be as at,C as au,$t as av,St as aw,da as ax,la as ay,sa as az,O as b,E as c,pe as d,i as e,g as f,et as g,A as h,l as i,Yt as j,At as k,Dt as l,me as m,ue as n,Ie as o,Pt as p,ot as q,R as r,I as s,Ye as t,k as u,ca as v,ae as w,Ze as x,ia as y,tt as z};
