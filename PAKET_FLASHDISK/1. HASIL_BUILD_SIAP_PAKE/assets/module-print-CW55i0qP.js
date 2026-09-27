const X={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"text",brandStyle:"image",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showRewardCatalog:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],productOrder:[],suppliers:[],purchases:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let m=JSON.parse(JSON.stringify(X)),C=[],G=[],S=[];try{const e=localStorage.getItem("freshmart_cart");e&&(C=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(G=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(S=JSON.parse(e)||[])}catch{}let ee={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},te=null,ae=null,se=null,oe="Semua Produk",ne="Semua Jenis",ie="Semua Merek",re="",de="newest",le="grid",ce=1,pe=12,me="orders",fe="",be=null,ue=null,ge=0,xe=[],we=[],he=[],ve=1,ye=[],ke=null,Pe=null,$e=null,R=[],Te=[],A=null,Se=null,q=!1,Ae="all",De="today",Ce=null,Le=null;const ot=e=>{Ce=e},nt=e=>{m=e},it=e=>{C=e},rt=e=>{G=e},dt=e=>{S=e},lt=e=>{ee=e},ct=e=>{te=e},pt=e=>{ae=e},mt=e=>{se=e},ft=e=>{oe=e},bt=e=>{ne=e},ut=e=>{ie=e},gt=e=>{re=e},xt=e=>{de=e},wt=e=>{le=e},ht=e=>{ce=e},vt=e=>{pe=e},yt=e=>{me=e},kt=e=>{fe=e},Pt=e=>{be=e},$t=e=>{ue=e},Tt=e=>{ge=e},St=e=>{xe=e},At=e=>{we=e},Dt=e=>{he=e},Ct=e=>{ve=e},Lt=e=>{ye=e},It=e=>{R=e},Nt=e=>{Te=e},F=e=>{A=e},Mt=e=>{Se=e},E=e=>{q=e},Rt=e=>{Le=e},jt=e=>{Ae=e},Ot=e=>{De=e},Et=e=>{ke=e},Bt=e=>{Pe=e},Ut=e=>{$e=e},Ie=[{id:"paint",keywords:["cat","paint","politur","thinner","kuas","roll","vernis","woodstain","pewarna","bocor","waterproof","pelapis","nodrop","no drop","aquaproof","avian","dulux","jotun"],icon:"fa-paint-roller",subIcon:"fa-fill-drip",label:"Cat & Pelapis",bg:"linear-gradient(135deg, #6366f1 0%, #4338ca 50%, #312e81 100%)",accent:"#c7d2fe",badgeBg:"rgba(99, 102, 241, 0.35)"},{id:"tools",keywords:["paku","baut","sekrup","mur","nail","screw","bolt","alat","perkakas","tang","obeng","palu","gergaji","kunci pas","meteran","waterpass","tool","amplas","mata bor","bor","gerinda"],icon:"fa-screwdriver-wrench",subIcon:"fa-hammer",label:"Paku & Perkakas",bg:"linear-gradient(135deg, #334155 0%, #1e293b 50%, #0f172a 100%)",accent:"#cbd5e1",badgeBg:"rgba(148, 163, 184, 0.25)"},{id:"plumbing",keywords:["pipa","pvc","paralon","sambungan","knee","tee","socket","faucet","kran","sanitair","water","air","selang","talang","toren","drat","rucika","onda","saringan","afur","siphon"],icon:"fa-faucet-drip",subIcon:"fa-droplet",label:"Pipa & Sanitair",bg:"linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #1e3a8a 100%)",accent:"#bae6fd",badgeBg:"rgba(56, 189, 248, 0.3)"},{id:"building",keywords:["semen","mortar","pasir","bata","hebel","plester","acian","beton","cor","batu","keramik","granit","nat","semen putih","gypsum","tiga roda","gresik","holcim","dynamix"],icon:"fa-trowel-bricks",subIcon:"fa-cubes",label:"Bahan Bangunan",bg:"linear-gradient(135deg, #78716c 0%, #57534e 50%, #292524 100%)",accent:"#e7e5e4",badgeBg:"rgba(168, 162, 158, 0.3)"},{id:"electric",keywords:["listrik","kabel","lampu","saklar","stop kontak","steker","fitting","mcb","led","bohlam","elektronik","kawat","electric","isolasi","broco","panasonic","philips","kabel supreme"],icon:"fa-bolt",subIcon:"fa-lightbulb",label:"Kelistrikan",bg:"linear-gradient(135deg, #d97706 0%, #b45309 50%, #7c2d12 100%)",accent:"#fef08a",badgeBg:"rgba(245, 158, 11, 0.35)"},{id:"wood",keywords:["kayu","papan","triplek","plywood","kasau","reng","bambu","balok","rotan","mdf","multiplek","lis","profil"],icon:"fa-tree",subIcon:"fa-ruler-combined",label:"Kayu & Papan",bg:"linear-gradient(135deg, #059669 0%, #047857 50%, #064e3b 100%)",accent:"#a7f3d0",badgeBg:"rgba(16, 185, 129, 0.3)"},{id:"lock",keywords:["kunci","gembok","handle","engsel","slot","hak angin","tarikan","door","lock","silinder","dekson","solid","paloma"],icon:"fa-lock",subIcon:"fa-key",label:"Kunci & Engsel",bg:"linear-gradient(135deg, #ca8a04 0%, #a16207 50%, #713f12 100%)",accent:"#fef08a",badgeBg:"rgba(234, 179, 8, 0.35)"},{id:"roof",keywords:["besi","baja","hollow","seng","atap","galvalum","spandek","wiremesh","plat","pipa besi","asbes","genteng","nok","alderon"],icon:"fa-shield-halved",subIcon:"fa-bars",label:"Besi & Atap",bg:"linear-gradient(135deg, #0891b2 0%, #0e7490 50%, #164e63 100%)",accent:"#a5f3fc",badgeBg:"rgba(6, 182, 212, 0.3)"},{id:"adhesive",keywords:["lem","silikon","sealant","perekat","lakban","solasi","tape","glue","fox","alteco","dextone","sika"],icon:"fa-spray-can",subIcon:"fa-vial",label:"Lem & Perekat",bg:"linear-gradient(135deg, #e11d48 0%, #be123c 50%, #881337 100%)",accent:"#fecdd3",badgeBg:"rgba(244, 63, 94, 0.35)"}],Ne={id:"default",icon:"fa-box-open",subIcon:"fa-cube",label:"Produk Toko",bg:"linear-gradient(135deg, #a16207 0%, #854d0e 50%, #422006 100%)",accent:"#fde047",badgeBg:"rgba(234, 179, 8, 0.35)"},U=(e,a="",t="")=>{let s="",d="",i="";typeof e=="object"&&e!==null?(s=String(e.name||""),d=String(e.category||e.subCategory||""),i=String(e.brand||"")):(s=String(e||""),d=String(a||""),i=String(t||""));const p=`${s} ${d} ${i}`.toLowerCase();for(const u of Ie)for(const n of u.keywords)if(p.includes(n))return u;return Ne},H=e=>{if(!e||typeof e!="string")return"TP";const t=e.replace(/[^a-zA-Z0-9\s]/g," ").trim().split(/\s+/).filter(i=>i.length>0),s=t.filter(i=>/[a-zA-Z]/.test(i)),d=s.length>0?s:t;if(d.length>=2)return(d[0][0]+d[1][0]).toUpperCase();if(d.length===1){const i=d[0];return(i.length>=2?i.slice(0,2):i+"P").toUpperCase()}return"TP"},Me=(e,a={})=>{const t=a.size||"md",s=a.showBadge!==void 0?a.showBadge:t==="lg"||t==="md",d=a.className||"",i=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk"),p=typeof e=="object"&&e!==null&&(e.category||e.subCategory)||"",u=typeof e=="object"&&e!==null&&e.brand||"",n=U(e,p,u),r=H(i),c=l(p||n.label);return`
    <div class="pos-smart-cover cover-${t} ${d}" style="background: ${n.bg};" title="${l(i)}">
        <!-- Ambient Radial Glow -->
        <div class="cover-glow" style="background: radial-gradient(circle, ${n.accent}33 0%, transparent 70%);"></div>
        <!-- Decorative Geometric Rings -->
        <div class="cover-ring cover-ring-1"></div>
        <div class="cover-ring cover-ring-2"></div>
        
        <!-- Central Icon & Monogram -->
        <div class="cover-center">
            <div class="cover-icon-circle" style="border-color: ${n.accent}4d; box-shadow: 0 4px 14px rgba(0,0,0,0.3);">
                <i class="fa-solid ${n.icon}" style="color: ${n.accent};"></i>
            </div>
            <div class="cover-monogram">
                ${r}
            </div>
        </div>
        
        <!-- Category Pill & Store Watermark (untuk ukuran md & lg) -->
        ${s?`
        <div class="cover-pill" style="border-color: ${n.accent}33; background: ${n.badgeBg};">
            <i class="fa-solid ${n.subIcon||n.icon} text-[7px]" style="color: ${n.accent};"></i>
            <span>${c}</span>
        </div>`:""}

        ${t==="lg"||t==="md"?`
        <div class="cover-watermark">PUTRI UTAMA TEKNIK</div>`:""}
    </div>`},Re=e=>{const a=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk");U(e);const s=`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
        <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#475569"/>
                <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
        </defs>
        <rect width="300" height="300" fill="url(#bg)"/>
        <circle cx="150" cy="130" r="45" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <text x="150" y="210" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="34" fill="#ffffff" text-anchor="middle" letter-spacing="3">${H(a)}</text>
        <text x="150" y="270" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="10" fill="rgba(255,255,255,0.5)" text-anchor="middle" letter-spacing="2">PUTRI UTAMA TEKNIK</text>
    </svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`},o=e=>document.getElementById(e),D=e=>{const a=o(e);a&&a.classList.remove("hidden")},$=e=>{const a=o(e);a&&a.classList.add("hidden")},je=(e,a,t)=>{const s=o(e);s&&s.classList.toggle(a,t)},L=(e,a)=>{const t=o(e);t&&(t.innerText=a)},I=(e,a)=>{const t=o(e);t&&(t.innerHTML=a)},Oe=(e,a)=>{const t=o(e);t&&(t.value=a)},Ee=e=>{const a=o(e);return a?a.value:""},Be=(e,a)=>{const t=typeof e=="string"?o(e):e,s=typeof a=="string"?o(a):a;t&&(t.classList.remove("hidden"),t.offsetWidth,requestAnimationFrame(()=>{t.classList.remove("opacity-0"),s&&s.classList.remove("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95")}))},Ue=(e,a,t)=>{const s=typeof e=="string"?o(e):e,d=typeof a=="string"?o(a):a;if(!s){typeof t=="function"&&t();return}s.classList.add("opacity-0"),d&&d.classList.add("translate-y-full","sm:translate-y-10","sm:translate-y-8"),setTimeout(()=>{s.classList.add("hidden"),typeof t=="function"&&t()},280)};window.openModalAnim=Be;window.closeModalAnim=Ue;const He=e=>{try{return localStorage.getItem(e)}catch{return null}},Ke=(e,a)=>{try{localStorage.setItem(e,a)}catch{}},l=e=>e==null?"":e.toString().replace(/[&<>'"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[a]),x=e=>{const a=Number(e);return isNaN(a)||e===null?"Rp 0":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(Math.abs(a)).replace(/^/,a<0?"-":"")},ze=e=>{if(typeof e!="string")return e;const a=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);return a?`https://lh3.googleusercontent.com/d/${a[1]}`:e},Fe=e=>{if(!e||typeof e!="string")return null;const a=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(a))return a;const t=a.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return t?t[1]:null},_=e=>{if(typeof e!="string"||!e.trim())return null;const a=e.trim(),t=Fe(a);if(t)return{type:"youtube",id:t,embedUrl:`https://www.youtube.com/embed/${t}?autoplay=1&mute=1&muted=1&loop=1&playlist=${t}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const s=a.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(s&&s[1]){const d=s[1];return{type:"gdrive",id:d,streamUrl:`https://drive.google.com/uc?export=download&id=${d}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${d}`,directUrl:`https://drive.google.com/uc?export=download&id=${d}`,embedUrl:`https://drive.google.com/file/d/${d}/preview?autoplay=1`}}return{type:"direct",directUrl:a,embedUrl:a}},Ht=e=>{const a=_(e);return a?a.embedUrl:e},Kt=e=>{const a=_(e);return a?a.embedUrl:e},zt=(e,a)=>typeof e!="string"||!e?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${a}`:e.includes("googleusercontent.com")&&!e.includes("=")?`${e}=${a}`:e,Ft=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",Wt=(e,a,t,s)=>{document.title=e||"Toko Putri";const d=(i,p,u=!1)=>{const n=u?"property":"name";let r=document.querySelector(`meta[${n}="${i}"]`);r||(r=document.createElement("meta"),r.setAttribute(n,i),document.head.appendChild(r)),r.setAttribute("content",p)};a&&d("description",a),e&&d("og:title",e,!0),a&&d("og:description",a,!0),t&&d("og:image",t,!0),s&&d("og:url",s,!0)},Gt=(e,a)=>{let t=document.getElementById(e);t||(t=document.createElement("script"),t.id=e,t.type="application/ld+json",document.head.appendChild(t)),t.textContent=JSON.stringify(a)},V=e=>{e&&L("loader-text",e);const a=o("global-loader");a&&(a.style.opacity="1",a.style.display="flex")},B=()=>{const e=o("global-loader");e&&(e.style.pointerEvents="none",e.style.transition="opacity 0.25s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250))},v=(e,a,t,s)=>{typeof window.showToast=="function"&&window.showToast(e,a,t,s)},qt=(e,a,t,s)=>{if(typeof window.showConfirm=="function")return window.showConfirm(e,a,t,s)},T={};window.loadedScripts=T;const _t=(e,a)=>a&&a()?Promise.resolve():(T[e]||(T[e]=new Promise((t,s)=>{const d=document.createElement("script");d.src=e,d.onload=()=>t(),d.onerror=()=>{delete T[e],s(new Error("Gagal memuat: "+e))},document.head.appendChild(d)})),T[e]),J=e=>{let a=(e||"").toString().replace(/\D/g,"");return a?(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),a):""},We=(e,a="")=>{const t=J(e);if(!t){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp tidak valid!");return}const s=a?encodeURIComponent(a):"",d=`https://wa.me/${t}${s?`?text=${s}`:""}`;window.AndroidNativeApp&&typeof window.AndroidNativeApp.openWhatsApp=="function"?window.AndroidNativeApp.openWhatsApp(d):window.open(d,"_blank","noopener,noreferrer")},Q=(e="light")=>{try{typeof navigator<"u"&&typeof navigator.vibrate=="function"&&(e==="light"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="success"?navigator.vibrate([15,30,20]):e==="warning"&&navigator.vibrate([30,40,30]))}catch{}},Ge=(e,a=null,t=null)=>{try{const s=(typeof a=="string"?document.querySelector(a):a)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!s)return;const d=e.getBoundingClientRect(),i=s.getBoundingClientRect(),p=document.createElement("div");p.className="flying-cart-item",t?p.innerHTML=`<img src="${t}" alt="Product" class="w-full h-full object-cover rounded-full" />`:p.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const u=d.left+d.width/2-20,n=d.top+d.height/2-20,r=i.left+i.width/2-20,c=i.top+i.height/2-20;p.style.cssText=`
            position: fixed;
            left: ${u}px;
            top: ${n}px;
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
        `,document.body.appendChild(p),requestAnimationFrame(()=>{const g=r-u,w=c-n;p.style.transform=`translate3d(${g}px, ${w}px, 0) scale(0.25) rotate(18deg)`,p.style.opacity="0.4"}),setTimeout(()=>{p&&p.parentNode&&p.parentNode.removeChild(p),Q("medium");const g=document.getElementById("bottom-nav-cart-badge")||s.querySelector(".cart-count-badge");g&&(g.classList.remove("cart-bounce-pop"),g.offsetWidth,g.classList.add("cart-bounce-pop")),s.classList.remove("cart-bounce-pop"),s.offsetWidth,s.classList.add("cart-bounce-pop"),setTimeout(()=>{g&&g.classList.remove("cart-bounce-pop"),s.classList.remove("cart-bounce-pop")},600)},500)}catch(s){console.error("flyToCart error",s)}};window.normalizeWA=J;window.openWhatsApp=We;window.sLoad=V;window.hLoad=B;window.el=o;window.show=D;window.hide=$;window.toggleCls=je;window.setIn=L;window.setH=I;window.setV=Oe;window.getV=Ee;window.esc=l;window.fixD=ze;window.fCur=x;window.sL=He;window.ssL=Ke;window.triggerHaptic=Q;window.flyToCartAnimation=Ge;window.renderProductCoverHtml=Me;window.getProductTheme=U;window.getMonogram=H;window.getProductCoverSvgDataUri=Re;const W={deviceType:"bluetooth",deviceName:"Printer Thermal POS (Default)",deviceId:"",paperSize:"58mm",feedLines:2,autoCut:!1,openCashDrawer:!1,autoPrintOrder:!1,headerText:"",footerText:"Terima kasih atas kunjungan Anda!",showLogo:!0,showPoints:!0,showBarcode:!0,networkIp:"192.168.1.200:9100"},k=()=>{try{const e=localStorage.getItem("freshmart_printer_config");if(e)return{...W,...JSON.parse(e)}}catch(e){console.warn("Gagal membaca konfigurasi printer lokal:",e)}return{...W}},j=e=>{try{const t={...k(),...e};return localStorage.setItem("freshmart_printer_config",JSON.stringify(t)),t}catch(a){return console.error("Gagal menyimpan konfigurasi printer:",a),k()}},qe=()=>{const e=k(),a=(d,i)=>{const p=o(d);p&&(p.checked=!!i)},t=(d,i)=>{const p=o(d);p&&(p.value=i||"")};t("printer-device-name-display",e.deviceName),t("printer-paper-size",e.paperSize),t("printer-network-ip",e.networkIp),t("printer-header-custom",e.headerText),t("printer-footer-custom",e.footerText),a("printer-opt-points",e.showPoints),a("printer-opt-barcode",e.showBarcode),a("printer-opt-autocut",e.autoCut),a("printer-opt-drawer",e.openCashDrawer),a("printer-opt-autoprint",e.autoPrintOrder),Z(e.deviceType);const s=o("printer-settings-modal");s&&s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("printerSettings"),D("printer-settings-modal"),setTimeout(()=>{o("printer-settings-modal")&&o("printer-settings-modal").classList.remove("opacity-0"),o("printer-settings-modal-box")&&o("printer-settings-modal-box").classList.remove("scale-95")},10)},Y=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("printerSettings",e,()=>{o("printer-settings-modal")&&o("printer-settings-modal").classList.add("opacity-0"),o("printer-settings-modal-box")&&o("printer-settings-modal-box").classList.add("scale-95"),setTimeout(()=>$("printer-settings-modal"),300)}):(o("printer-settings-modal")&&o("printer-settings-modal").classList.add("opacity-0"),o("printer-settings-modal-box")&&o("printer-settings-modal-box").classList.add("scale-95"),setTimeout(()=>$("printer-settings-modal"),300))},Z=e=>{window._selectedPrinterType=e,document.querySelectorAll(".printer-type-card").forEach(t=>{if(t.getAttribute("data-type")===e){t.classList.add("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),t.classList.remove("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const d=t.querySelector(".printer-check-badge");d&&d.classList.remove("hidden")}else{t.classList.remove("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),t.classList.add("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const d=t.querySelector(".printer-check-badge");d&&d.classList.add("hidden")}});const a=o("printer-network-box");a&&(e==="network"?a.classList.remove("hidden"):a.classList.add("hidden"))},_e=()=>{const e=(s,d="")=>{const i=o(s);return i?i.value:d},a=(s,d=!1)=>{const i=o(s);return i?i.checked:d},t={deviceType:window._selectedPrinterType||"bluetooth",paperSize:e("printer-paper-size","58mm"),networkIp:e("printer-network-ip","192.168.1.200:9100"),headerText:e("printer-header-custom",""),footerText:e("printer-footer-custom","Terima kasih atas kunjungan Anda!"),showPoints:a("printer-opt-points",!0),showBarcode:a("printer-opt-barcode",!0),autoCut:a("printer-opt-autocut",!1),openCashDrawer:a("printer-opt-drawer",!1),autoPrintOrder:a("printer-opt-autoprint",!1)};j(t),v("Pengaturan printer berhasil disimpan! ✅"),Y()},Ve=async()=>{if(!navigator.bluetooth){v("Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.");return}try{v("Mencari printer bluetooth di sekitar...");const e=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["000018f0-0000-1000-8000-00805f9b34fb","e7810a71-73ae-499d-8c15-faa9aef0c3f2","00001101-0000-1000-8000-00805f9b34fb"]});if(e){j({deviceType:"bluetooth",deviceName:e.name||"Bluetooth POS Printer",deviceId:e.id});const a=o("printer-device-name-display");a&&(a.value=e.name||"Bluetooth POS Printer"),v(`Printer "${e.name||"Bluetooth POS"}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&v("Koneksi bluetooth dibatalkan atau tidak tersedia.")}},Je=async()=>{if(!navigator.usb){v("Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.");return}try{v("Mencari printer USB...");const e=await navigator.usb.requestDevice({filters:[]});if(e){const a=(e.productName||"USB Thermal Printer")+" (USB)";j({deviceType:"usb",deviceName:a,deviceId:String(e.vendorId)+":"+String(e.productId)});const t=o("printer-device-name-display");t&&(t.value=a),v(`Printer USB "${a}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&v("Koneksi USB dibatalkan atau tidak ditemukan.")}},Qe=()=>{const e=k(),a=e.paperSize==="80mm",t=a?48:32,s=m.store.name||"TOKO PUTRI",d=m.store.wa||"",i=(r,c,g=t)=>{const w=g-r.length-c.length;return r+(w>0?" ".repeat(w):" ")+c},p=new Date().toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let u=`
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${l(s)}</div>
    ${d?`<div style="text-align:center;font-size:11px;margin-bottom:4px;">WA: ${l(d)}</div>`:""}
    <div style="text-align:center;font-weight:bold;font-size:12px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:3px 0;margin:6px 0;">
        *** UJI COBA CETAK STRUK ***
    </div>
    <div style="white-space:pre;font-size:11px;">Tgl   : ${p}</div>
    <div style="white-space:pre;font-size:11px;">Format: Thermal ${a?"80mm (48 Kolom)":"58mm (32 Kolom)"}</div>
    <div style="white-space:pre;font-size:11px;">Koneksi: ${e.deviceType.toUpperCase()}</div>
    <div style="white-space:pre;font-size:11px;">Status : KONEKSI BERHASIL</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:11px;font-weight:bold;">${i("TES ITEM UJI COBA","HARGA",t)}</div>
    <div style="white-space:pre;font-size:10px;">${i("1x Produk Percobaan","Rp 25.000",t)}</div>
    <div style="white-space:pre;font-size:10px;">${i("2x Kertas Thermal Kasir","Rp 15.000",t)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:12px;font-weight:bold;">${i("TOTAL UJI","Rp 40.000",t)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    `;e.showPoints&&(u+=`<div style="white-space:pre;font-size:11px;">${i("Simulasi Poin Member","+10 Poin",t)}</div>`,u+='<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>'),e.showBarcode&&(u+=`<div style="text-align:center;margin:6px 0;">
            <div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*TEST-POS-${Date.now().toString().slice(-6)}*</div>
            <div style="font-size:9px;color:#333;">(BARCODE TEST OK)</div>
        </div><div style="border-bottom:1px dashed #000;margin:6px 0;"></div>`),u+=`
    <div style="text-align:center;font-size:10px;margin-top:6px;line-height:1.3;">
        ${l(e.footerText||"Terima kasih atas kunjungan Anda!")}
    </div>
    <div style="text-align:center;font-size:9px;font-style:italic;margin-top:4px;">
        Printer siap digunakan untuk operasional kasir Toko Putri.
    </div>
    <div style="height:25px;"></div>
    `;let n=o("thermal-print-section");if(n||(n=document.createElement("div"),n.id="thermal-print-section",document.body.appendChild(n)),n.innerHTML=`<div style="width:${a?"80mm":"58mm"};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${u}</div>`,e.deviceType==="rawbt"&&window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function"){const r=n.innerText,c=btoa(unescape(encodeURIComponent(r)));window.AndroidNativeApp.printRawBT(c)}else window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():window.print();v("Perintah uji cetak berhasil dikirim! 🖨️")};window.getPrinterConfig=k;window.savePrinterConfig=j;window.openPrinterSettingsModal=qe;window.closePrinterSettingsModal=Y;window.selectPrinterDeviceTypeUI=Z;window.savePrinterSettingsFromModal=_e;window.scanBluetoothPrinter=Ve;window.scanUsbPrinter=Je;window.executeTestPrint=Qe;const K=(e=null)=>{e&&typeof F=="function"&&F(e);const a=e||A;let t=(R||[]).find(f=>f.orderId===a);if(!t&&Array.isArray(S)&&(t=S.find(f=>f.orderId===a)),!t&&window.lastPrintedOrder&&window.lastPrintedOrder.orderId===a&&(t=window.lastPrintedOrder),!t)return;window.lastPrintedOrder=t;const s=typeof k=="function"?k():{paperSize:"58mm",showPoints:!0,showBarcode:!0},d=s.paperSize==="80mm",i=d?48:32,p=t.dateString?new Date(t.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",u=s.headerText||m.store.name||"Toko Putri",n=m.store.wa||"",r=(f,b,h=i)=>{const P=h-f.length-b.length;return f+(P>0?" ".repeat(P):" ")+b};let c=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${l(u)}</div>`;if(n&&(c+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${l(n)}</div>`),c+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">Order: #${t.orderId}</div><div style="white-space:pre;">Tgl  : ${p}</div><div style="white-space:pre;">Plg  : ${l(t.customer?.name||"Guest").substring(0,i-10)}</div><div style="white-space:pre;">Tipe : ${t.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko"}</div><div class="border-b border-dashed border-black my-2"></div>`,t.customer?.note&&(c+=`<div style="white-space:pre-wrap;word-break:break-all;">Cat: ${l(t.customer.note)}</div><div class="border-b border-dashed border-black my-2"></div>`),t.items.forEach(f=>{let b=f.variantName?` (${l(f.variantName)}${f.colorCode?" "+l(f.colorCode):""})`:"";const h=(l(f.name)+b+(f.poTime?" [PO]":"")).substring(0,i),P=`${parseFloat(f.qty)} ${l(f.unit||"pcs")} x ${f.effectivePrice.toLocaleString("id-ID")}`,O=(parseFloat(f.qty)*f.effectivePrice).toLocaleString("id-ID");c+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${h}</div><div style="white-space:pre;font-size:11px;">${r(P,O,i)}</div>`,f.poTime&&(c+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${l(f.poTime)}</div>`)}),c+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">${r("Subtotal",(t.payment?.subtotal||0).toLocaleString("id-ID"),i)}</div>`,t.customer?.deliveryMethod==="delivery"&&(c+=`<div style="white-space:pre;">${r("Ongkir",(t.payment?.shippingCost||0).toLocaleString("id-ID"),i)}</div>`),t.payment?.shippingDiscount&&(c+=`<div style="white-space:pre;">${r("Pot.Ongkir",`-${t.payment.shippingDiscount.toLocaleString("id-ID")}`,i)}</div>`),t.payment?.productDiscount&&(c+=`<div style="white-space:pre;">${r("Pot.Harga",`-${t.payment.productDiscount.toLocaleString("id-ID")}`,i)}</div>`),t.payment?.ppnAmount&&t.payment.ppnAmount>0){const f=t.payment.ppnType==="inclusive",b=t.payment.ppnRate||11,h=t.payment.ppnAmount||0,P=(t.payment.subtotal||0)-(t.payment.productDiscount||0)+(t.payment.shippingCost||0)-(t.payment.shippingDiscount||0),O=t.payment.dppAmount||(f?Math.round(P*100/(100+b)):Math.max(0,P));c+=`<div style="white-space:pre;">${r("DPP",O.toLocaleString("id-ID"),i)}</div>`,c+=`<div style="white-space:pre;">${r(`${f?"Inc. PPN":"PPN"} (${b}%)`,(f?"":"+")+h.toLocaleString("id-ID"),i)}</div>`}c+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-weight:bold;font-size:12px;">${r("TOTAL","Rp "+(t.payment?.grandTotal||0).toLocaleString("id-ID"),i)}</div><div style="white-space:pre;">${r("Bayar:",String(t.payment?.method||"").toUpperCase(),i)}</div>`,s.showPoints&&(t.pointsEarned>0||t.finalMemberPoints!==void 0)&&(c+='<div class="border-b border-dashed border-black my-2"></div>',t.pointsEarned>0&&(c+=`<div style="white-space:pre;">${r("Poin Didapat:","+"+t.pointsEarned,i)}</div>`),t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null&&(c+=`<div style="white-space:pre;font-weight:bold;">${r("Saldo Poin:",String(t.finalMemberPoints),i)}</div>`),t.claimedReward&&(c+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;margin-top:2px;">HADIAH: ${l(t.claimedReward.name)}</div><div style="white-space:pre;font-size:10px;">(${t.claimedReward.status==="ready"?"Kirim bersama pesanan":t.claimedReward.status==="waiting_stock"?"Stok kosong-ditunda":"Menunggu konfirmasi"})</div>`)),t.items.some(f=>f.poTime&&f.poTime!=="")&&(c+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),s.showBarcode&&(c+=`<div class="border-b border-dashed border-black my-2"></div><div style="text-align:center;margin:4px 0;"><div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*ORDER-${l(t.orderId)}*</div><div style="font-size:8px;color:#666;">SCAN DI KASIR</div></div>`),c+=`<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${l(s.footerText||"Terima Kasih Atas Kunjungan Anda")}</div><div class="border-b border-dashed border-black my-2"></div><div style="height:15px;"></div>`,I("receipt-paper-content",c);const w=o("receipt-paper-content");w&&(w.style.width=d?"330px":"260px");const y=o("receipt-preview-modal-box");y&&(y.classList.remove("max-w-[320px]","max-w-[390px]"),y.classList.add(d?"max-w-[390px]":"max-w-[320px]"));const M=o("receipt-preview-modal");M&&M.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),D("receipt-preview-modal"),setTimeout(()=>{o("receipt-preview-modal")&&o("receipt-preview-modal").classList.remove("opacity-0"),o("receipt-preview-modal-box")&&o("receipt-preview-modal-box").classList.remove("scale-95")},10)},Ye=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{o("receipt-preview-modal")&&o("receipt-preview-modal").classList.add("opacity-0"),o("receipt-preview-modal-box")&&o("receipt-preview-modal-box").classList.add("scale-95"),setTimeout(()=>$("receipt-preview-modal"),300)}):(o("receipt-preview-modal")&&o("receipt-preview-modal").classList.add("opacity-0"),o("receipt-preview-modal-box")&&o("receipt-preview-modal-box").classList.add("scale-95"),setTimeout(()=>$("receipt-preview-modal"),300))},Ze=()=>{if(!((R||[]).find(i=>i.orderId===A)||(Array.isArray(S)?S.find(i=>i.orderId===A):null)||window.lastPrintedOrder))return;const a=o("receipt-paper-content")?o("receipt-paper-content").innerHTML:"";let t=o("thermal-print-section");t||(t=document.createElement("div"),t.id="thermal-print-section",document.body.appendChild(t));const s=typeof k=="function"?k():{paperSize:"58mm",deviceType:"system"},d=s.paperSize==="80mm";if(t.innerHTML=`<div style="width:${d?"80mm":"58mm"};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${a}</div>`,s.deviceType==="rawbt"&&window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function"){const i=t.innerText,p=btoa(unescape(encodeURIComponent(i)));window.AndroidNativeApp.printRawBT(p)}else window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():window.print()};window.openReceiptPreview=K;window.openCustomerReceiptPreview=K;window.closeReceiptPreviewModal=Ye;window.executePrintReceipt=Ze;window.checkProPrint=()=>{K()};let z="invoice";const Xe=(e,a=null)=>{if(z=e,e==="po"){const n=m.purchases||[],r=n.find(b=>String(b.id)===String(a))||(window.currentActivePoId?n.find(b=>String(b.id)===String(window.currentActivePoId)):n[0]);if(!r){typeof window.showToast=="function"&&window.showToast("Data PO tidak ditemukan!");return}L("doc-modal-title","Preview Purchase Order (PO)");let c="";m.store.logo&&(m.store.logo.includes("http")||m.store.logo.includes("data:"))?c=`<img loading="eager" src="${l(m.store.logo)}" class="w-16 h-16 object-contain">`:c='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';const g=b=>{if(!b)return"-";try{return(b.toDate?b.toDate():new Date(b)).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})}catch{return"-"}},w=b=>{const h=parseFloat(b);return isNaN(h)?"0":Number.isInteger(h)?String(h):h.toFixed(2).replace(/\.?0+$/,"")},y=r.paymentType==="tempo"?`Tempo ${r.tempoDays||14} Hari (Jatuh Tempo: ${g(r.tempoDueDate)})`:r.paymentType==="konsinyasi"?"Konsinyasi":"Cash / Tunai";let M=`
        <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
            <div class="flex items-center gap-4">
                ${c}
                <div>
                    <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${l(m.store.name||"TOKO PUTRI")}</h1>
                    <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${l(m.store.slogan||"Pusat Alat Teknik, Bangunan & Perlengkapan")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${l(m.store.address||"Alamat fisik toko belum diatur.")}</p>
                    <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${l(m.store.wa||m.store.phone||"-")}</p>
                </div>
            </div>
            <div class="text-right">
                <h2 class="font-bold text-3xl tracking-widest text-slate-900 uppercase">PURCHASE ORDER</h2>
                <p class="text-sm font-bold text-slate-600 mt-2 font-mono">#${l(r.poNumber||r.id)}</p>
                <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${g(r.date||r.createdAt)}</p>
                <p class="text-xs font-bold mt-1 text-[var(--color-primary)]">Status: ${r.status==="ordered"?"DIPESAN":r.status==="received"?"DITERIMA":"SELESAI"}</p>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-8 mb-8">
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Kepada Rekanan / Supplier:</h3>
                <p class="font-bold text-base text-slate-900 uppercase mb-1">${l(r.supplierName||"Supplier")}</p>
                ${r.supplierPhone?`<p class="text-xs font-medium text-slate-600"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${l(r.supplierPhone)}</p>`:""}
                ${r.supplierAddress?`<p class="text-xs font-medium text-slate-600 mt-1 leading-relaxed">${l(r.supplierAddress)}</p>`:""}
            </div>
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ketentuan & Pembayaran:</h3>
                <p class="text-xs font-semibold text-slate-700 mb-1.5"><span class="text-slate-500">Termin Pembayaran:</span> <b class="text-slate-900">${y}</b></p>
                <p class="text-xs font-semibold text-slate-700 mb-1.5"><span class="text-slate-500">Tujuan Pengiriman:</span> <b class="text-slate-900">${l(m.store.name||"Gudang Utama Toko")}</b></p>
                ${r.notes?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-2"><i class="fa-solid fa-note-sticky mr-1"></i> ${l(r.notes)}</p>`:""}
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
                ${(r.items||[]).map((b,h)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-3 px-4 text-center font-mono text-slate-500">${h+1}</td>
                    <td class="py-3 px-4 font-bold text-slate-900 uppercase">
                        ${l(b.name)}
                        ${b.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1.5">Varian: ${l(b.variantName)}</span>`:""}
                        ${b.sku?`<span class="text-slate-400 text-[10px] font-mono block mt-0.5">SKU: ${l(b.sku)}</span>`:""}
                    </td>
                    <td class="py-3 px-4 text-center font-bold text-base text-slate-800">${w(b.qty)} <span class="text-xs font-normal text-slate-500">${l(b.unit||"pcs")}</span></td>
                    <td class="py-3 px-4 text-right font-mono text-slate-600">${x(b.unitPrice)}</td>
                    <td class="py-3 px-4 text-right font-bold font-mono text-slate-900">${x(Math.round((parseFloat(b.qty)||0)*(parseFloat(b.unitPrice)||0)))}</td>
                </tr>
                `).join("")}
            </tbody>
        </table>

        <div class="flex justify-end mb-8">
            <div class="w-80 bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs space-y-2.5">
                <div class="flex justify-between text-slate-600"><span>Subtotal Produk:</span><span class="font-bold text-slate-800">${x(r.subtotal)}</span></div>
                ${r.discount>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Potongan Diskon:</span><span>-${x(r.discount)}</span></div>`:""}
                ${r.shippingFee>0?`<div class="flex justify-between text-slate-600"><span>Ongkos Kirim:</span><span>+${x(r.shippingFee)}</span></div>`:""}
                <div class="flex justify-between items-center border-t-2 border-slate-800 pt-2.5 mt-2 font-bold text-base text-slate-900">
                    <span>TOTAL ORDER (PO):</span>
                    <span class="text-[var(--color-primary)] font-black">${x(r.total)}</span>
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
                <span class="font-bold text-slate-900 uppercase">${l(r.supplierName||"Rekanan / Supplier")}</span>
            </div>
        </div>
        `;I("doc-paper-content",M);const f=o("doc-preview-modal");f&&f.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),D("doc-preview-modal"),setTimeout(()=>{o("doc-preview-modal")&&o("doc-preview-modal").classList.remove("opacity-0"),o("doc-preview-modal-box")&&o("doc-preview-modal-box").classList.remove("scale-95"),N()},10);return}const t=R.find(n=>n.orderId===A);if(!t)return;L("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const s=t.dateString?new Date(t.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"";let d="";m.store.logo&&(m.store.logo.includes("http")||m.store.logo.includes("data:"))?d=`<img loading="eager" src="${l(m.store.logo)}" class="w-16 h-16 object-contain">`:d='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';let i=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${d}
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
    `;if(e==="invoice"?i+=`
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
                ${t.items.map((n,r)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${r+1}</td>
                    <td class="py-4 px-4 font-bold flex items-center gap-2">
                        ${l(n.name)} 
                        ${n.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${l(n.variantName)}</span> ${n.colorCode?`<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${l(n.colorCode)};"></span>`:""}`:""}
                        ${n.poTime?`<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${l(n.poTime)}</span>`:""}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-slate-700">${parseFloat(n.qty)} <span class="text-[10px] font-bold text-slate-400 uppercase">${l(n.unit||"pcs")}</span></td>
                    <td class="py-4 px-4 text-right font-mono font-medium">${x(n.effectivePrice)}</td>
                    <td class="py-4 px-4 text-right font-mono font-bold">${x(n.effectivePrice*parseFloat(n.qty))}</td>
                </tr>`).join("")}
            </tbody>
        </table>

        <div class="flex justify-end mb-10">
            <div class="w-1/2 md:w-[45%] space-y-3 text-sm font-bold text-slate-700">
                <div class="flex justify-between px-4"><span>Subtotal Produk</span><span class="font-mono">${x(t.payment?.subtotal)}</span></div>
                ${t.payment?.shippingCost?`<div class="flex justify-between px-4"><span>Ongkos Kirim</span><span class="font-mono">${x(t.payment.shippingCost)}</span></div>`:""}
                ${t.payment?.shippingDiscount?`<div class="flex justify-between px-4 text-emerald-600"><span>Diskon Ongkir</span><span class="font-mono">-${x(t.payment.shippingDiscount)}</span></div>`:""}
                ${t.payment?.productDiscount?`<div class="flex justify-between px-4 text-rose-600"><span>Diskon Produk</span><span class="font-mono">-${x(t.payment.productDiscount)}</span></div>`:""}
                ${(()=>{if(!t.payment?.ppnAmount||t.payment.ppnAmount<=0)return"";const n=t.payment.ppnType==="inclusive",r=t.payment.ppnRate||11,c=t.payment.ppnAmount,g=(t.payment.subtotal||0)-(t.payment.productDiscount||0)+(t.payment.shippingCost||0)-(t.payment.shippingDiscount||0),w=t.payment.dppAmount||(n?Math.round(g*100/(100+r)):Math.max(0,g));return`
                    <div class="flex justify-between px-4 text-slate-600"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-mono">${x(w)}</span></div>
                    <div class="flex justify-between px-4 text-amber-600"><span>${n?"Termasuk PPN":"PPN"} (${r}%)</span><span class="font-mono">${n?"":"+"}${x(c)}</span></div>
                    `})()}
                
                <div class="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl mt-4 shadow-md">
                    <span class="font-bold text-base uppercase tracking-widest">Grand Total</span>
                    <span class="font-mono text-xl text-emerald-400 font-bold tracking-tight">${x(t.payment?.grandTotal)}</span>
                </div>
                ${t.payment?.method==="tempo"?`
                <div class="flex justify-between px-4 mt-4 text-emerald-600"><span>Uang Muka (DP)</span><span class="font-mono">${x(t.payment?.tempoDp||0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-4 rounded-xl mt-2 border border-rose-200">
                    <span class="font-bold text-base uppercase tracking-widest">Sisa Tagihan</span>
                    <span class="font-mono text-xl font-bold tracking-tight">${x(t.payment?.tempoBalance||0)}</span>
                </div>
                `:""}
            </div>
        </div>`:i+=`
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
                ${t.items.map((n,r)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${r+1}</td>
                    <td class="py-4 px-4 font-bold uppercase flex items-center gap-2">
                        ${l(n.name)} 
                        ${n.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${l(n.variantName)}</span> ${n.colorCode?`<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${l(n.colorCode)};"></span>`:""}`:""}
                        ${n.poTime?`<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${l(n.poTime)}</span>`:""}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-lg text-slate-800">${parseFloat(n.qty)}</td>
                    <td class="py-4 px-4 text-center text-slate-500 font-bold uppercase text-xs">${l(n.unit||"pcs")}</td>
                    <td class="py-4 px-4 text-center"><div class="w-5 h-5 border-2 border-slate-300 mx-auto rounded shadow-inner"></div></td>
                </tr>`).join("")}
            </tbody>
        </table>
        `,(t.pointsEarned>0||t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null)&&(i+=`
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5 flex items-center gap-6">
            <div class="w-10 h-10 rounded-xl bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
            ${t.pointsEarned>0?`<div><p class="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-lg text-amber-700">+${t.pointsEarned}</p></div>`:""}
            ${t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null?`<div><p class="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Terkumpul</p><p class="font-bold text-lg text-amber-700">${t.finalMemberPoints}</p></div>`:""}
        </div>`),t.claimedReward){const n=t.claimedReward.status==="ready"?"SERTAKAN BERSAMA PENGIRIMAN INI":t.claimedReward.status==="waiting_stock"?"STOK KOSONG — KIRIM SUSULAN":"MENUNGGU KONFIRMASI GUDANG";i+=`
        <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-5 mb-8 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                <div>
                    <p class="text-[10px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${t.claimedReward.pointsCost} Poin)</p>
                    <p class="font-bold text-base text-violet-800 uppercase">${l(t.claimedReward.name)}</p>
                    ${t.claimedReward.note?`<p class="text-xs italic text-violet-600 mt-1">"${l(t.claimedReward.note)}"</p>`:""}
                </div>
            </div>
            <span class="text-[10px] font-bold px-3 py-2 rounded-xl bg-violet-600 text-white uppercase tracking-widest text-center shrink-0">${n}</span>
        </div>`}t.payment?.method==="tempo"&&(i+=`
        <div class="mt-6 mb-8 border border-pink-200 bg-pink-50 p-4 rounded-xl text-left">
            <h4 class="font-bold text-pink-700 text-xs uppercase tracking-widest mb-1"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo</h4>
            <p class="text-[10px] text-pink-600 font-bold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${t.payment.tempoDueDate?new Date(t.payment.tempoDueDate).toLocaleDateString("id-ID"):"-"}). Keterlambatan pembayaran akan dikenakan denda sebesar 1% dari sisa tagihan untuk setiap harinya.</p>
        </div>`),t.items.some(n=>n.poTime&&n.poTime!=="")&&(i+=`
        <div class="mt-6 mb-8 border border-amber-200 bg-amber-50 p-4 rounded-xl text-left flex gap-3 items-start">
            <i class="fa-solid fa-clock text-amber-500 mt-0.5 animate-pulse"></i>
            <div>
                <h4 class="font-bold text-amber-700 text-xs uppercase tracking-widest mb-1">Informasi Produk Pre-Order (PO)</h4>
                <p class="text-[10px] text-amber-600 font-bold leading-relaxed">Pesanan ini mengandung produk Pre-Order (PO). Khusus untuk produk berlabel PO akan dikirimkan menyusul tanpa dikenakan biaya tambahan.</p>
            </div>
        </div>`),i+=`
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
    `,I("doc-paper-content",i);const u=o("doc-preview-modal");u&&u.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),D("doc-preview-modal"),setTimeout(()=>{o("doc-preview-modal")&&o("doc-preview-modal").classList.remove("opacity-0"),o("doc-preview-modal-box")&&o("doc-preview-modal-box").classList.remove("scale-95"),N()},10)},et=()=>{if(!C||C.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}z="sph";const e="SPH-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.floor(1e3+Math.random()*9e3),a=new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}),t=new Date(Date.now()+14*24*60*60*1e3).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"});L("doc-modal-title","Surat Penawaran Harga (SPH)");let s="";m.store?.logo&&(m.store.logo.includes("http")||m.store.logo.includes("data:"))?s=`<img loading="eager" src="${l(m.store.logo)}" class="w-16 h-16 object-contain">`:s='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';const d=typeof window.getEffP=="function"?window.getEffP:n=>n.price||0;let i=0,p=`
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
            ${C.map((n,r)=>{let c=parseFloat(n.qty)||1,g=d(n),w=c*g;return i+=w,`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-3.5 px-4 text-center font-mono text-slate-500">${r+1}</td>
                    <td class="py-3.5 px-4 font-bold">
                        ${l(n.name)}
                        ${n.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${l(n.variantName)}</span>`:""}
                    </td>
                    <td class="py-3.5 px-4 text-center font-bold text-slate-700">${c} <span class="text-[10px] font-bold text-slate-400 uppercase">${l(n.unit||"pcs")}</span></td>
                    <td class="py-3.5 px-4 text-right font-mono font-medium">${x(g)}</td>
                    <td class="py-3.5 px-4 text-right font-mono font-bold">${x(w)}</td>
                </tr>`}).join("")}
        </tbody>
    </table>

    <div class="flex justify-end mb-8">
        <div class="w-1/2 md:w-[45%] space-y-2 text-sm font-bold text-slate-700">
            <div class="flex justify-between px-4"><span>Subtotal Estimasi</span><span class="font-mono">${x(i)}</span></div>
            <div class="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl mt-2 shadow-md">
                <span class="font-bold text-base uppercase tracking-widest">Total Penawaran</span>
                <span class="font-mono text-xl text-emerald-400 font-bold tracking-tight">${x(i)}</span>
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
    `;I("doc-paper-content",p);const u=o("doc-preview-modal");u&&u.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),D("doc-preview-modal"),setTimeout(()=>{o("doc-preview-modal")&&o("doc-preview-modal").classList.remove("opacity-0"),o("doc-preview-modal-box")&&o("doc-preview-modal-box").classList.remove("scale-95"),N()},10)},N=()=>{const e=o("doc-paper-scroll-area"),a=o("doc-paper-content"),t=o("doc-paper-wrapper");if(!e||!a||!t)return;const s=794,i=e.clientWidth-16,p=Math.min(1,i/s);a.style.transform=`translateX(-50%) scale(${p})`,t.style.height=a.offsetHeight*p+"px"};window.addEventListener("resize",()=>{const e=o("doc-preview-modal");e&&!e.classList.contains("hidden")&&N()});const tt=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{o("doc-preview-modal")&&o("doc-preview-modal").classList.add("opacity-0"),o("doc-preview-modal-box")&&o("doc-preview-modal-box").classList.add("scale-95"),setTimeout(()=>$("doc-preview-modal"),300)}):(o("doc-preview-modal")&&o("doc-preview-modal").classList.add("opacity-0"),o("doc-preview-modal-box")&&o("doc-preview-modal-box").classList.add("scale-95"),setTimeout(()=>$("doc-preview-modal"),300))},at=()=>{const e=o("doc-paper-content")?o("doc-paper-content").innerHTML:"";if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){let t=o("thermal-print-section");t||(t=document.createElement("div"),t.id="thermal-print-section",document.body.appendChild(t)),t.innerHTML=e,window.AndroidNativeApp.print();return}const a=window.open("","_blank");if(!a){let t=document.getElementById("a4-print-fallback-iframe");t||(t=document.createElement("iframe"),t.id="a4-print-fallback-iframe",t.style.position="fixed",t.style.right="0",t.style.bottom="0",t.style.width="0",t.style.height="0",t.style.border="0",t.style.opacity="0",document.body.appendChild(t));const s=t.contentWindow.document;s.open(),s.write(`<!DOCTYPE html><html><head><title>Cetak Dokumen A4</title>
        <style>@page{size:A4 portrait;margin:10mm}body{font-family:'Barlow',system-ui,sans-serif;background:#fff;margin:0;padding:16px;color:#0f172a;-webkit-print-color-adjust:exact;print-color-adjust:exact}.w-full{width:100%}</style>
        </head><body><div style="max-width:794px;margin:0 auto">${e}</div></body></html>`),s.close(),setTimeout(()=>{try{t.contentWindow.focus(),t.contentWindow.print()}catch(d){console.warn("[DocPrint] Fallback iframe print error:",d)}},500);return}a.document.write(`
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
    `),a.document.close()},st=async e=>{if(!q){E(!0),V(e==="image"?"Membuat Gambar HD...":"Menyusun PDF...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{B(),E(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const a=o("doc-paper-content");if(!a)throw new Error("Elemen dokumen tidak ditemukan.");const t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.left="-9999px",t.style.width=a.offsetWidth+"px",t.style.height="max-content",t.style.backgroundColor="#ffffff",t.style.overflow="visible";const s=a.cloneNode(!0);s.id="doc-clone-printing",s.style.margin="0 auto",s.style.boxShadow="none",s.classList.remove("absolute","top-0","left-1/2"),s.style.position="static",s.style.left="auto",s.style.top="auto",s.style.transform="none",s.style.height="max-content",s.style.maxHeight="none",s.style.overflow="visible",s.classList.add("h-max"),t.appendChild(s),document.body.appendChild(t);const d=Array.from(s.querySelectorAll("img"));if(await Promise.all(d.map(r=>r.complete?Promise.resolve():new Promise(c=>{r.addEventListener("load",c,{once:!0}),r.addEventListener("error",c,{once:!0})}))),await new Promise(r=>setTimeout(r,300)),t.offsetWidth===0||t.offsetHeight===0)throw new Error("Dokumen belum sepenuhnya ter-render. Coba lagi.");const i={scale:2,useCORS:!0,backgroundColor:"#ffffff",width:t.offsetWidth,height:t.offsetHeight,windowWidth:t.offsetWidth,windowHeight:t.offsetHeight},p=await html2canvas(t,i);if(document.body.removeChild(t),!p||p.width===0||p.height===0)throw new Error("Gagal menangkap gambar dokumen (canvas kosong).");const u=A||Date.now().toString(36).toUpperCase(),n=`${z.toUpperCase()}_${u}`;if(e==="image"){const r=p.toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(r,`${n}.png`,"image/png");else{const c=document.createElement("a");c.download=`${n}.png`,c.href=r,c.click()}typeof window.showToast=="function"&&window.showToast("Gambar Berhasil Disimpan!")}else{const r=p.toDataURL("image/jpeg",1);if(!r||!r.startsWith("data:image/jpeg;base64,"))throw new Error("Data gambar hasil export tidak valid.");const c=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,g=210,w=p.height*g/p.width;if(!isFinite(w)||w<=0)throw new Error("Ukuran halaman PDF tidak valid.");const y=new c({orientation:"p",unit:"mm",format:[g,w]});y.addImage(r,"JPEG",0,0,g,w),window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"?window.AndroidNativeApp.saveOrShareFile(y.output("datauristring"),`${n}.pdf`,"application/pdf"):y.save(`${n}.pdf`),typeof window.showToast=="function"&&window.showToast("File PDF Berhasil Disimpan!")}}catch(a){console.error("Export Error: ",a),typeof window.showToast=="function"&&window.showToast(a&&a.message?`Gagal: ${a.message}`:"Gagal memproses dokumen.");const t=document.getElementById("doc-clone-printing");t&&t.parentElement&&document.body.removeChild(t.parentElement)}finally{B(),E(!1)}}};window.openDocPreview=Xe;window.openCartSPHPreview=et;window.fitDocPreview=N;window.closeDocPreviewModal=tt;window.printDocA4=at;window.exportDocFile=st;export{He as $,ue as A,ge as B,Fe as C,ve as D,Ct as E,Tt as F,Ue as G,$t as H,je as I,ce as J,pe as K,ht as L,oe as M,ie as N,re as O,ne as P,de as Q,le as R,ft as S,bt as T,ut as U,gt as V,xt as W,wt as X,_ as Y,Kt as Z,Ht as _,m as a,X as a0,B as a1,ze as a2,V as a3,ke as a4,Et as a5,Pe as a6,Bt as a7,$e as a8,Ut as a9,nt as aA,rt as aB,se as aC,vt as aD,me as aE,fe as aF,be as aG,xe as aH,we as aI,he as aJ,Lt as aK,Le as aL,ot as aM,mt as aN,Pt as aO,St as aP,At as aQ,Dt as aR,Rt as aS,De as aa,Ot as ab,yt as ac,R as ad,q as ae,E as af,A as ag,_t as ah,F as ai,Ft as aj,It as ak,J as al,We as am,Te as an,Ae as ao,jt as ap,Nt as aq,kt as ar,k as as,Se as at,S as au,dt as av,lt as aw,Wt as ax,Gt as ay,Ce as az,I as b,C as c,ee as d,o as e,x as f,Ee as g,$ as h,l as i,Mt as j,ct as k,pt as l,te as m,ae as n,ye as o,it as p,Ke as q,L as r,D as s,Me as t,v as u,qt as v,G as w,Oe as x,zt as y,Be as z};
