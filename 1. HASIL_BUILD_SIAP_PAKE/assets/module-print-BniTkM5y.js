const Q={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"text",brandStyle:"image",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showRewardCatalog:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],productOrder:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let b=JSON.parse(JSON.stringify(Q)),T=[],z=[],H=[];try{const e=localStorage.getItem("freshmart_cart");e&&(T=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(z=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(H=JSON.parse(e)||[])}catch{}let Y={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},Z=null,X=null,ee=null,te="Semua Produk",ae="Semua Jenis",se="Semua Merek",oe="",ie="newest",ne="grid",re=1,de=12,le="orders",ce="",pe=null,me=null,fe=0,ue=[],be=[],ge=[],we=1,xe=[],he=null,ve=null,ye=null,D=[],ke=[],S=null,Pe=null,K=!1,$e="all",Te="today",Se=null,Ae=null;const tt=e=>{Se=e},at=e=>{b=e},st=e=>{T=e},ot=e=>{z=e},it=e=>{H=e},nt=e=>{Y=e},rt=e=>{Z=e},dt=e=>{X=e},lt=e=>{ee=e},ct=e=>{te=e},pt=e=>{ae=e},mt=e=>{se=e},ft=e=>{oe=e},ut=e=>{ie=e},bt=e=>{ne=e},gt=e=>{re=e},wt=e=>{de=e},xt=e=>{le=e},ht=e=>{ce=e},vt=e=>{pe=e},yt=e=>{me=e},kt=e=>{fe=e},Pt=e=>{ue=e},$t=e=>{be=e},Tt=e=>{ge=e},St=e=>{we=e},At=e=>{xe=e},Dt=e=>{D=e},Ct=e=>{ke=e},Lt=e=>{S=e},It=e=>{Pe=e},R=e=>{K=e},Mt=e=>{Ae=e},Nt=e=>{$e=e},Rt=e=>{Te=e},jt=e=>{he=e},Bt=e=>{ve=e},Et=e=>{ye=e},De=[{id:"paint",keywords:["cat","paint","politur","thinner","kuas","roll","vernis","woodstain","pewarna","bocor","waterproof","pelapis","nodrop","no drop","aquaproof","avian","dulux","jotun"],icon:"fa-paint-roller",subIcon:"fa-fill-drip",label:"Cat & Pelapis",bg:"linear-gradient(135deg, #6366f1 0%, #4338ca 50%, #312e81 100%)",accent:"#c7d2fe",badgeBg:"rgba(99, 102, 241, 0.35)"},{id:"tools",keywords:["paku","baut","sekrup","mur","nail","screw","bolt","alat","perkakas","tang","obeng","palu","gergaji","kunci pas","meteran","waterpass","tool","amplas","mata bor","bor","gerinda"],icon:"fa-screwdriver-wrench",subIcon:"fa-hammer",label:"Paku & Perkakas",bg:"linear-gradient(135deg, #334155 0%, #1e293b 50%, #0f172a 100%)",accent:"#cbd5e1",badgeBg:"rgba(148, 163, 184, 0.25)"},{id:"plumbing",keywords:["pipa","pvc","paralon","sambungan","knee","tee","socket","faucet","kran","sanitair","water","air","selang","talang","toren","drat","rucika","onda","saringan","afur","siphon"],icon:"fa-faucet-drip",subIcon:"fa-droplet",label:"Pipa & Sanitair",bg:"linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #1e3a8a 100%)",accent:"#bae6fd",badgeBg:"rgba(56, 189, 248, 0.3)"},{id:"building",keywords:["semen","mortar","pasir","bata","hebel","plester","acian","beton","cor","batu","keramik","granit","nat","semen putih","gypsum","tiga roda","gresik","holcim","dynamix"],icon:"fa-trowel-bricks",subIcon:"fa-cubes",label:"Bahan Bangunan",bg:"linear-gradient(135deg, #78716c 0%, #57534e 50%, #292524 100%)",accent:"#e7e5e4",badgeBg:"rgba(168, 162, 158, 0.3)"},{id:"electric",keywords:["listrik","kabel","lampu","saklar","stop kontak","steker","fitting","mcb","led","bohlam","elektronik","kawat","electric","isolasi","broco","panasonic","philips","kabel supreme"],icon:"fa-bolt",subIcon:"fa-lightbulb",label:"Kelistrikan",bg:"linear-gradient(135deg, #d97706 0%, #b45309 50%, #7c2d12 100%)",accent:"#fef08a",badgeBg:"rgba(245, 158, 11, 0.35)"},{id:"wood",keywords:["kayu","papan","triplek","plywood","kasau","reng","bambu","balok","rotan","mdf","multiplek","lis","profil"],icon:"fa-tree",subIcon:"fa-ruler-combined",label:"Kayu & Papan",bg:"linear-gradient(135deg, #059669 0%, #047857 50%, #064e3b 100%)",accent:"#a7f3d0",badgeBg:"rgba(16, 185, 129, 0.3)"},{id:"lock",keywords:["kunci","gembok","handle","engsel","slot","hak angin","tarikan","door","lock","silinder","dekson","solid","paloma"],icon:"fa-lock",subIcon:"fa-key",label:"Kunci & Engsel",bg:"linear-gradient(135deg, #ca8a04 0%, #a16207 50%, #713f12 100%)",accent:"#fef08a",badgeBg:"rgba(234, 179, 8, 0.35)"},{id:"roof",keywords:["besi","baja","hollow","seng","atap","galvalum","spandek","wiremesh","plat","pipa besi","asbes","genteng","nok","alderon"],icon:"fa-shield-halved",subIcon:"fa-bars",label:"Besi & Atap",bg:"linear-gradient(135deg, #0891b2 0%, #0e7490 50%, #164e63 100%)",accent:"#a5f3fc",badgeBg:"rgba(6, 182, 212, 0.3)"},{id:"adhesive",keywords:["lem","silikon","sealant","perekat","lakban","solasi","tape","glue","fox","alteco","dextone","sika"],icon:"fa-spray-can",subIcon:"fa-vial",label:"Lem & Perekat",bg:"linear-gradient(135deg, #e11d48 0%, #be123c 50%, #881337 100%)",accent:"#fecdd3",badgeBg:"rgba(244, 63, 94, 0.35)"}],Ce={id:"default",icon:"fa-box-open",subIcon:"fa-cube",label:"Produk Toko",bg:"linear-gradient(135deg, #a16207 0%, #854d0e 50%, #422006 100%)",accent:"#fde047",badgeBg:"rgba(234, 179, 8, 0.35)"},B=(e,t="",a="")=>{let s="",i="",l="";typeof e=="object"&&e!==null?(s=String(e.name||""),i=String(e.category||e.subCategory||""),l=String(e.brand||"")):(s=String(e||""),i=String(t||""),l=String(a||""));const c=`${s} ${i} ${l}`.toLowerCase();for(const r of De)for(const n of r.keywords)if(c.includes(n))return r;return Ce},E=e=>{if(!e||typeof e!="string")return"TP";const a=e.replace(/[^a-zA-Z0-9\s]/g," ").trim().split(/\s+/).filter(l=>l.length>0),s=a.filter(l=>/[a-zA-Z]/.test(l)),i=s.length>0?s:a;if(i.length>=2)return(i[0][0]+i[1][0]).toUpperCase();if(i.length===1){const l=i[0];return(l.length>=2?l.slice(0,2):l+"P").toUpperCase()}return"TP"},Le=(e,t={})=>{const a=t.size||"md",s=t.showBadge!==void 0?t.showBadge:a==="lg"||a==="md",i=t.className||"",l=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk"),c=typeof e=="object"&&e!==null&&(e.category||e.subCategory)||"",r=typeof e=="object"&&e!==null&&e.brand||"",n=B(e,c,r),p=E(l),f=d(c||n.label);return`
    <div class="pos-smart-cover cover-${a} ${i}" style="background: ${n.bg};" title="${d(l)}">
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
                ${p}
            </div>
        </div>
        
        <!-- Category Pill & Store Watermark (untuk ukuran md & lg) -->
        ${s?`
        <div class="cover-pill" style="border-color: ${n.accent}33; background: ${n.badgeBg};">
            <i class="fa-solid ${n.subIcon||n.icon} text-[7px]" style="color: ${n.accent};"></i>
            <span>${f}</span>
        </div>`:""}

        ${a==="lg"||a==="md"?`
        <div class="cover-watermark">PUTRI UTAMA TEKNIK</div>`:""}
    </div>`},Ie=e=>{const t=typeof e=="object"&&e!==null?e.name||"Produk":String(e||"Produk");B(e);const s=`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
        <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#475569"/>
                <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
        </defs>
        <rect width="300" height="300" fill="url(#bg)"/>
        <circle cx="150" cy="130" r="45" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <text x="150" y="210" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="34" fill="#ffffff" text-anchor="middle" letter-spacing="3">${E(t)}</text>
        <text x="150" y="270" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="10" fill="rgba(255,255,255,0.5)" text-anchor="middle" letter-spacing="2">PUTRI UTAMA TEKNIK</text>
    </svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`},o=e=>document.getElementById(e),A=e=>{const t=o(e);t&&t.classList.remove("hidden")},k=e=>{const t=o(e);t&&t.classList.add("hidden")},Me=(e,t,a)=>{const s=o(e);s&&s.classList.toggle(t,a)},C=(e,t)=>{const a=o(e);a&&(a.innerText=t)},L=(e,t)=>{const a=o(e);a&&(a.innerHTML=t)},Ne=(e,t)=>{const a=o(e);a&&(a.value=t)},Re=e=>{const t=o(e);return t?t.value:""},je=(e,t)=>{const a=typeof e=="string"?o(e):e,s=typeof t=="string"?o(t):t;a&&(a.classList.remove("hidden"),a.offsetWidth,requestAnimationFrame(()=>{a.classList.remove("opacity-0"),s&&s.classList.remove("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95")}))},Be=(e,t,a)=>{const s=typeof e=="string"?o(e):e,i=typeof t=="string"?o(t):t;if(!s){typeof a=="function"&&a();return}s.classList.add("opacity-0"),i&&i.classList.add("translate-y-full","sm:translate-y-10","sm:translate-y-8"),setTimeout(()=>{s.classList.add("hidden"),typeof a=="function"&&a()},280)};window.openModalAnim=je;window.closeModalAnim=Be;const Ee=e=>{try{return localStorage.getItem(e)}catch{return null}},Oe=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},d=e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),g=e=>{const t=Number(e);return isNaN(t)||e===null?"Rp 0":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(Math.abs(t)).replace(/^/,t<0?"-":"")},Ue=e=>{if(typeof e!="string")return e;const t=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);return t?`https://lh3.googleusercontent.com/d/${t[1]}`:e},ze=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(t))return t;const a=t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return a?a[1]:null},F=e=>{if(typeof e!="string"||!e.trim())return null;const t=e.trim(),a=ze(t);if(a)return{type:"youtube",id:a,embedUrl:`https://www.youtube.com/embed/${a}?autoplay=1&mute=1&muted=1&loop=1&playlist=${a}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const s=t.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(s&&s[1]){const i=s[1];return{type:"gdrive",id:i,streamUrl:`https://drive.google.com/uc?export=download&id=${i}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${i}`,directUrl:`https://drive.google.com/uc?export=download&id=${i}`,embedUrl:`https://drive.google.com/file/d/${i}/preview?autoplay=1`}}return{type:"direct",directUrl:t,embedUrl:t}},Ot=e=>{const t=F(e);return t?t.embedUrl:e},Ut=e=>{const t=F(e);return t?t.embedUrl:e},zt=(e,t)=>typeof e!="string"||!e?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${t}`:e.includes("googleusercontent.com")&&!e.includes("=")?`${e}=${t}`:e,Ht=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",Kt=(e,t,a,s)=>{document.title=e||"Toko Putri";const i=(l,c,r=!1)=>{const n=r?"property":"name";let p=document.querySelector(`meta[${n}="${l}"]`);p||(p=document.createElement("meta"),p.setAttribute(n,l),document.head.appendChild(p)),p.setAttribute("content",c)};t&&i("description",t),e&&i("og:title",e,!0),t&&i("og:description",t,!0),a&&i("og:image",a,!0),s&&i("og:url",s,!0)},Ft=(e,t)=>{let a=document.getElementById(e);a||(a=document.createElement("script"),a.id=e,a.type="application/ld+json",document.head.appendChild(a)),a.textContent=JSON.stringify(t)},W=e=>{e&&C("loader-text",e);const t=o("global-loader");t&&(t.style.opacity="1",t.style.display="flex")},j=()=>{const e=o("global-loader");e&&(e.style.pointerEvents="none",e.style.transition="opacity 0.25s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250))},x=(e,t,a,s)=>{typeof window.showToast=="function"&&window.showToast(e,t,a,s)},Wt=(e,t,a,s)=>{typeof window.showConfirm=="function"&&window.showConfirm(e,t,a,s)},P={};window.loadedScripts=P;const Gt=(e,t)=>t&&t()?Promise.resolve():(P[e]||(P[e]=new Promise((a,s)=>{const i=document.createElement("script");i.src=e,i.onload=()=>a(),i.onerror=()=>{delete P[e],s(new Error("Gagal memuat: "+e))},document.head.appendChild(i)})),P[e]),G=e=>{let t=(e||"").toString().replace(/\D/g,"");return t?(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),t):""},He=(e,t="")=>{const a=G(e);if(!a){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp tidak valid!");return}const s=t?encodeURIComponent(t):"",i=`https://wa.me/${a}${s?`?text=${s}`:""}`;window.AndroidNativeApp&&typeof window.AndroidNativeApp.openWhatsApp=="function"?window.AndroidNativeApp.openWhatsApp(i):window.open(i,"_blank","noopener,noreferrer")},q=(e="light")=>{try{typeof navigator<"u"&&typeof navigator.vibrate=="function"&&(e==="light"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="success"?navigator.vibrate([15,30,20]):e==="warning"&&navigator.vibrate([30,40,30]))}catch{}},Ke=(e,t=null,a=null)=>{try{const s=(typeof t=="string"?document.querySelector(t):t)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!s)return;const i=e.getBoundingClientRect(),l=s.getBoundingClientRect(),c=document.createElement("div");c.className="flying-cart-item",a?c.innerHTML=`<img src="${a}" alt="Product" class="w-full h-full object-cover rounded-full" />`:c.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const r=i.left+i.width/2-20,n=i.top+i.height/2-20,p=l.left+l.width/2-20,f=l.top+l.height/2-20;c.style.cssText=`
            position: fixed;
            left: ${r}px;
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
        `,document.body.appendChild(c),requestAnimationFrame(()=>{const u=p-r,w=f-n;c.style.transform=`translate3d(${u}px, ${w}px, 0) scale(0.25) rotate(18deg)`,c.style.opacity="0.4"}),setTimeout(()=>{c&&c.parentNode&&c.parentNode.removeChild(c),q("medium");const u=document.getElementById("bottom-nav-cart-badge")||s.querySelector(".cart-count-badge");u&&(u.classList.remove("cart-bounce-pop"),u.offsetWidth,u.classList.add("cart-bounce-pop")),s.classList.remove("cart-bounce-pop"),s.offsetWidth,s.classList.add("cart-bounce-pop"),setTimeout(()=>{u&&u.classList.remove("cart-bounce-pop"),s.classList.remove("cart-bounce-pop")},600)},500)}catch(s){console.error("flyToCart error",s)}};window.normalizeWA=G;window.openWhatsApp=He;window.sLoad=W;window.hLoad=j;window.el=o;window.show=A;window.hide=k;window.toggleCls=Me;window.setIn=C;window.setH=L;window.setV=Ne;window.getV=Re;window.esc=d;window.fixD=Ue;window.fCur=g;window.sL=Ee;window.ssL=Oe;window.triggerHaptic=q;window.flyToCartAnimation=Ke;window.renderProductCoverHtml=Le;window.getProductTheme=B;window.getMonogram=E;window.getProductCoverSvgDataUri=Ie;const U={deviceType:"bluetooth",deviceName:"Printer Thermal POS (Default)",deviceId:"",paperSize:"58mm",feedLines:2,autoCut:!1,openCashDrawer:!1,autoPrintOrder:!1,headerText:"",footerText:"Terima kasih atas kunjungan Anda!",showLogo:!0,showPoints:!0,showBarcode:!0,networkIp:"192.168.1.200:9100"},h=()=>{try{const e=localStorage.getItem("freshmart_printer_config");if(e)return{...U,...JSON.parse(e)}}catch(e){console.warn("Gagal membaca konfigurasi printer lokal:",e)}return{...U}},I=e=>{try{const a={...h(),...e};return localStorage.setItem("freshmart_printer_config",JSON.stringify(a)),a}catch(t){return console.error("Gagal menyimpan konfigurasi printer:",t),h()}},Fe=()=>{const e=h(),t=(i,l)=>{const c=o(i);c&&(c.checked=!!l)},a=(i,l)=>{const c=o(i);c&&(c.value=l||"")};a("printer-device-name-display",e.deviceName),a("printer-paper-size",e.paperSize),a("printer-network-ip",e.networkIp),a("printer-header-custom",e.headerText),a("printer-footer-custom",e.footerText),t("printer-opt-points",e.showPoints),t("printer-opt-barcode",e.showBarcode),t("printer-opt-autocut",e.autoCut),t("printer-opt-drawer",e.openCashDrawer),t("printer-opt-autoprint",e.autoPrintOrder),V(e.deviceType);const s=o("printer-settings-modal");s&&s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("printerSettings"),A("printer-settings-modal"),setTimeout(()=>{o("printer-settings-modal")&&o("printer-settings-modal").classList.remove("opacity-0"),o("printer-settings-modal-box")&&o("printer-settings-modal-box").classList.remove("scale-95")},10)},_=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("printerSettings",e,()=>{o("printer-settings-modal")&&o("printer-settings-modal").classList.add("opacity-0"),o("printer-settings-modal-box")&&o("printer-settings-modal-box").classList.add("scale-95"),setTimeout(()=>k("printer-settings-modal"),300)}):(o("printer-settings-modal")&&o("printer-settings-modal").classList.add("opacity-0"),o("printer-settings-modal-box")&&o("printer-settings-modal-box").classList.add("scale-95"),setTimeout(()=>k("printer-settings-modal"),300))},V=e=>{window._selectedPrinterType=e,document.querySelectorAll(".printer-type-card").forEach(a=>{if(a.getAttribute("data-type")===e){a.classList.add("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),a.classList.remove("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const i=a.querySelector(".printer-check-badge");i&&i.classList.remove("hidden")}else{a.classList.remove("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),a.classList.add("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const i=a.querySelector(".printer-check-badge");i&&i.classList.add("hidden")}});const t=o("printer-network-box");t&&(e==="network"?t.classList.remove("hidden"):t.classList.add("hidden"))},We=()=>{const e=(s,i="")=>{const l=o(s);return l?l.value:i},t=(s,i=!1)=>{const l=o(s);return l?l.checked:i},a={deviceType:window._selectedPrinterType||"bluetooth",paperSize:e("printer-paper-size","58mm"),networkIp:e("printer-network-ip","192.168.1.200:9100"),headerText:e("printer-header-custom",""),footerText:e("printer-footer-custom","Terima kasih atas kunjungan Anda!"),showPoints:t("printer-opt-points",!0),showBarcode:t("printer-opt-barcode",!0),autoCut:t("printer-opt-autocut",!1),openCashDrawer:t("printer-opt-drawer",!1),autoPrintOrder:t("printer-opt-autoprint",!1)};I(a),x("Pengaturan printer berhasil disimpan! ✅"),_()},Ge=async()=>{if(!navigator.bluetooth){x("Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.");return}try{x("Mencari printer bluetooth di sekitar...");const e=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["000018f0-0000-1000-8000-00805f9b34fb","e7810a71-73ae-499d-8c15-faa9aef0c3f2","00001101-0000-1000-8000-00805f9b34fb"]});if(e){I({deviceType:"bluetooth",deviceName:e.name||"Bluetooth POS Printer",deviceId:e.id});const t=o("printer-device-name-display");t&&(t.value=e.name||"Bluetooth POS Printer"),x(`Printer "${e.name||"Bluetooth POS"}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&x("Koneksi bluetooth dibatalkan atau tidak tersedia.")}},qe=async()=>{if(!navigator.usb){x("Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.");return}try{x("Mencari printer USB...");const e=await navigator.usb.requestDevice({filters:[]});if(e){const t=(e.productName||"USB Thermal Printer")+" (USB)";I({deviceType:"usb",deviceName:t,deviceId:String(e.vendorId)+":"+String(e.productId)});const a=o("printer-device-name-display");a&&(a.value=t),x(`Printer USB "${t}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&x("Koneksi USB dibatalkan atau tidak ditemukan.")}},_e=()=>{const e=h(),t=e.paperSize==="80mm",a=t?48:32,s=b.store.name||"TOKO PUTRI",i=b.store.wa||"",l=(p,f,u=a)=>{const w=u-p.length-f.length;return p+(w>0?" ".repeat(w):" ")+f},c=new Date().toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let r=`
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${d(s)}</div>
    ${i?`<div style="text-align:center;font-size:11px;margin-bottom:4px;">WA: ${d(i)}</div>`:""}
    <div style="text-align:center;font-weight:bold;font-size:12px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:3px 0;margin:6px 0;">
        *** UJI COBA CETAK STRUK ***
    </div>
    <div style="white-space:pre;font-size:11px;">Tgl   : ${c}</div>
    <div style="white-space:pre;font-size:11px;">Format: Thermal ${t?"80mm (48 Kolom)":"58mm (32 Kolom)"}</div>
    <div style="white-space:pre;font-size:11px;">Koneksi: ${e.deviceType.toUpperCase()}</div>
    <div style="white-space:pre;font-size:11px;">Status : KONEKSI BERHASIL</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:11px;font-weight:bold;">${l("TES ITEM UJI COBA","HARGA",a)}</div>
    <div style="white-space:pre;font-size:10px;">${l("1x Produk Percobaan","Rp 25.000",a)}</div>
    <div style="white-space:pre;font-size:10px;">${l("2x Kertas Thermal Kasir","Rp 15.000",a)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    <div style="white-space:pre;font-size:12px;font-weight:bold;">${l("TOTAL UJI","Rp 40.000",a)}</div>
    <div style="border-bottom:1px dashed #000;margin:6px 0;"></div>
    `;e.showPoints&&(r+=`<div style="white-space:pre;font-size:11px;">${l("Simulasi Poin Member","+10 Poin",a)}</div>`,r+='<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>'),e.showBarcode&&(r+=`<div style="text-align:center;margin:6px 0;">
            <div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*TEST-POS-${Date.now().toString().slice(-6)}*</div>
            <div style="font-size:9px;color:#333;">(BARCODE TEST OK)</div>
        </div><div style="border-bottom:1px dashed #000;margin:6px 0;"></div>`),r+=`
    <div style="text-align:center;font-size:10px;margin-top:6px;line-height:1.3;">
        ${d(e.footerText||"Terima kasih atas kunjungan Anda!")}
    </div>
    <div style="text-align:center;font-size:9px;font-style:italic;margin-top:4px;">
        Printer siap digunakan untuk operasional kasir Toko Putri.
    </div>
    <div style="height:25px;"></div>
    `;let n=o("thermal-print-section");if(n||(n=document.createElement("div"),n.id="thermal-print-section",document.body.appendChild(n)),n.innerHTML=`<div style="width:${t?"80mm":"58mm"};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${r}</div>`,e.deviceType==="rawbt"&&window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function"){const p=n.innerText,f=btoa(unescape(encodeURIComponent(p)));window.AndroidNativeApp.printRawBT(f)}else window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():window.print();x("Perintah uji cetak berhasil dikirim! 🖨️")};window.getPrinterConfig=h;window.savePrinterConfig=I;window.openPrinterSettingsModal=Fe;window.closePrinterSettingsModal=_;window.selectPrinterDeviceTypeUI=V;window.savePrinterSettingsFromModal=We;window.scanBluetoothPrinter=Ge;window.scanUsbPrinter=qe;window.executeTestPrint=_e;const J=()=>{const e=D.find(m=>m.orderId===S);if(!e)return;const t=typeof h=="function"?h():{paperSize:"58mm",showPoints:!0,showBarcode:!0},a=t.paperSize==="80mm",s=a?48:32,i=e.dateString?new Date(e.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",l=t.headerText||b.store.name||"Toko Putri",c=b.store.wa||"",r=(m,v,$=s)=>{const y=$-m.length-v.length;return m+(y>0?" ".repeat(y):" ")+v};let n=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${d(l)}</div>`;if(c&&(n+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${d(c)}</div>`),n+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">Order: #${e.orderId}</div><div style="white-space:pre;">Tgl  : ${i}</div><div style="white-space:pre;">Plg  : ${d(e.customer?.name||"Guest").substring(0,s-10)}</div><div style="white-space:pre;">Tipe : ${e.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko"}</div><div class="border-b border-dashed border-black my-2"></div>`,e.customer?.note&&(n+=`<div style="white-space:pre-wrap;word-break:break-all;">Cat: ${d(e.customer.note)}</div><div class="border-b border-dashed border-black my-2"></div>`),e.items.forEach(m=>{let v=m.variantName?` (${d(m.variantName)}${m.colorCode?" "+d(m.colorCode):""})`:"";const $=(d(m.name)+v+(m.poTime?" [PO]":"")).substring(0,s),y=`${parseFloat(m.qty)} ${d(m.unit||"pcs")} x ${m.effectivePrice.toLocaleString("id-ID")}`,N=(parseFloat(m.qty)*m.effectivePrice).toLocaleString("id-ID");n+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${$}</div><div style="white-space:pre;font-size:11px;">${r(y,N,s)}</div>`,m.poTime&&(n+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${d(m.poTime)}</div>`)}),n+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">${r("Subtotal",(e.payment?.subtotal||0).toLocaleString("id-ID"),s)}</div>`,e.customer?.deliveryMethod==="delivery"&&(n+=`<div style="white-space:pre;">${r("Ongkir",(e.payment?.shippingCost||0).toLocaleString("id-ID"),s)}</div>`),e.payment?.shippingDiscount&&(n+=`<div style="white-space:pre;">${r("Pot.Ongkir",`-${e.payment.shippingDiscount.toLocaleString("id-ID")}`,s)}</div>`),e.payment?.productDiscount&&(n+=`<div style="white-space:pre;">${r("Pot.Harga",`-${e.payment.productDiscount.toLocaleString("id-ID")}`,s)}</div>`),e.payment?.ppnAmount&&e.payment.ppnAmount>0){const m=e.payment.ppnType==="inclusive",v=e.payment.ppnRate||11,$=e.payment.ppnAmount||0,y=(e.payment.subtotal||0)-(e.payment.productDiscount||0)+(e.payment.shippingCost||0)-(e.payment.shippingDiscount||0),N=e.payment.dppAmount||(m?Math.round(y*100/(100+v)):Math.max(0,y));n+=`<div style="white-space:pre;">${r("DPP",N.toLocaleString("id-ID"),s)}</div>`,n+=`<div style="white-space:pre;">${r(`${m?"Inc. PPN":"PPN"} (${v}%)`,(m?"":"+")+$.toLocaleString("id-ID"),s)}</div>`}n+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-weight:bold;font-size:12px;">${r("TOTAL","Rp "+(e.payment?.grandTotal||0).toLocaleString("id-ID"),s)}</div><div style="white-space:pre;">${r("Bayar:",String(e.payment?.method||"").toUpperCase(),s)}</div>`,t.showPoints&&(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(n+='<div class="border-b border-dashed border-black my-2"></div>',e.pointsEarned>0&&(n+=`<div style="white-space:pre;">${r("Poin Didapat:","+"+e.pointsEarned,s)}</div>`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&(n+=`<div style="white-space:pre;font-weight:bold;">${r("Saldo Poin:",String(e.finalMemberPoints),s)}</div>`),e.claimedReward&&(n+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;margin-top:2px;">HADIAH: ${d(e.claimedReward.name)}</div><div style="white-space:pre;font-size:10px;">(${e.claimedReward.status==="ready"?"Kirim bersama pesanan":e.claimedReward.status==="waiting_stock"?"Stok kosong-ditunda":"Menunggu konfirmasi"})</div>`)),e.items.some(m=>m.poTime&&m.poTime!=="")&&(n+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),t.showBarcode&&(n+=`<div class="border-b border-dashed border-black my-2"></div><div style="text-align:center;margin:4px 0;"><div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*ORDER-${d(e.orderId)}*</div><div style="font-size:8px;color:#666;">SCAN DI KASIR</div></div>`),n+=`<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${d(t.footerText||"Terima Kasih Atas Kunjungan Anda")}</div><div class="border-b border-dashed border-black my-2"></div><div style="height:15px;"></div>`,L("receipt-paper-content",n);const f=o("receipt-paper-content");f&&(f.style.width=a?"330px":"260px");const u=o("receipt-preview-modal-box");u&&(u.classList.remove("max-w-[320px]","max-w-[390px]"),u.classList.add(a?"max-w-[390px]":"max-w-[320px]"));const w=o("receipt-preview-modal");w&&w.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),A("receipt-preview-modal"),setTimeout(()=>{o("receipt-preview-modal")&&o("receipt-preview-modal").classList.remove("opacity-0"),o("receipt-preview-modal-box")&&o("receipt-preview-modal-box").classList.remove("scale-95")},10)},Ve=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{o("receipt-preview-modal")&&o("receipt-preview-modal").classList.add("opacity-0"),o("receipt-preview-modal-box")&&o("receipt-preview-modal-box").classList.add("scale-95"),setTimeout(()=>k("receipt-preview-modal"),300)}):(o("receipt-preview-modal")&&o("receipt-preview-modal").classList.add("opacity-0"),o("receipt-preview-modal-box")&&o("receipt-preview-modal-box").classList.add("scale-95"),setTimeout(()=>k("receipt-preview-modal"),300))},Je=()=>{if(!D.find(l=>l.orderId===S))return;const t=o("receipt-paper-content")?o("receipt-paper-content").innerHTML:"";let a=o("thermal-print-section");a||(a=document.createElement("div"),a.id="thermal-print-section",document.body.appendChild(a));const s=typeof h=="function"?h():{paperSize:"58mm",deviceType:"system"},i=s.paperSize==="80mm";if(a.innerHTML=`<div style="width:${i?"80mm":"58mm"};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${t}</div>`,s.deviceType==="rawbt"&&window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function"){const l=a.innerText,c=btoa(unescape(encodeURIComponent(l)));window.AndroidNativeApp.printRawBT(c)}else window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():window.print()};window.openReceiptPreview=J;window.closeReceiptPreviewModal=Ve;window.executePrintReceipt=Je;window.checkProPrint=()=>{J()};let O="invoice";const Qe=e=>{O=e;const t=D.find(r=>r.orderId===S);if(!t)return;C("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const a=t.dateString?new Date(t.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"";let s="";b.store.logo&&(b.store.logo.includes("http")||b.store.logo.includes("data:"))?s=`<img loading="eager" src="${d(b.store.logo)}" class="w-16 h-16 object-contain">`:s='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';let i=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${s}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${d(b.store.name)}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${d(b.store.slogan||"General Supplier")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${d(b.store.address||"Alamat fisik toko belum diatur.")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${d(b.store.wa||"-")}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-3xl tracking-widest ${e==="invoice"?"text-blue-600":"text-amber-600"} uppercase">${e==="invoice"?t.payment?.method==="tempo"?"PROFORMA INVOICE":"INVOICE":"SURAT JALAN"}</h2>
            <p class="text-sm font-bold text-slate-600 mt-2 font-mono">#${t.orderId}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${a}</p>
        </div>
    </div>

    <div class="grid grid-cols-2 gap-8 mb-8">
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ditagihkan Kepada (Pemesan):</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-1">${d(t.customer?.name||"Guest")}${t.customer?.wa?` <span class="text-xs font-mono font-medium text-slate-500">(+${d(t.customer.wa)})</span>`:""}</p>
            <p class="text-sm font-medium text-slate-700 leading-relaxed mb-2">${d(t.customer?.address||"-")}</p>
            ${t.isDropPoint&&t.dropPoint?`
            <div class="mt-3 pt-3 border-t border-rose-200 bg-rose-50/80 p-3 rounded-xl border border-dashed text-left">
                <div class="flex items-center gap-1.5 text-rose-700 font-bold text-xs uppercase tracking-wider mb-1">
                    <i class="fa-solid fa-location-dot"></i> Pengantaran ke Lokasi Berbeda (Drop-Point):
                </div>
                <p class="font-bold text-sm text-slate-900 uppercase">${d(t.dropPoint.name||"-")}${t.dropPoint.wa?` <span class="font-mono text-xs font-semibold text-rose-600">(+${d(t.dropPoint.wa)})</span>`:""}</p>
                <p class="text-xs font-medium text-slate-700 mt-0.5 leading-relaxed">${d(t.dropPoint.address||"-")}</p>
            </div>
            `:""}
            ${t.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200 mt-2"><i class="fa-solid fa-note-sticky"></i> Catatan: ${d(t.customer.note)}</p>`:""}
        </div>
        
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-center space-y-3">
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Metode Pengiriman</span>
                <span class="text-sm font-bold text-slate-800 uppercase">${d(t.isDropPoint?"Drop-Point (Lokasi Berbeda)":t.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko")}</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Sistem Pembayaran</span>
                <span class="text-sm font-bold text-slate-800 uppercase">${d(t.payment?.method||"cash")}</span>
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
                ${t.items.map((r,n)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${n+1}</td>
                    <td class="py-4 px-4 font-bold flex items-center gap-2">
                        ${d(r.name)} 
                        ${r.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${d(r.variantName)}</span> ${r.colorCode?`<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${d(r.colorCode)};"></span>`:""}`:""}
                        ${r.poTime?`<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${d(r.poTime)}</span>`:""}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-slate-700">${parseFloat(r.qty)} <span class="text-[10px] font-bold text-slate-400 uppercase">${d(r.unit||"pcs")}</span></td>
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
                ${(()=>{if(!t.payment?.ppnAmount||t.payment.ppnAmount<=0)return"";const r=t.payment.ppnType==="inclusive",n=t.payment.ppnRate||11,p=t.payment.ppnAmount,f=(t.payment.subtotal||0)-(t.payment.productDiscount||0)+(t.payment.shippingCost||0)-(t.payment.shippingDiscount||0),u=t.payment.dppAmount||(r?Math.round(f*100/(100+n)):Math.max(0,f));return`
                    <div class="flex justify-between px-4 text-slate-600"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-mono">${g(u)}</span></div>
                    <div class="flex justify-between px-4 text-amber-600"><span>${r?"Termasuk PPN":"PPN"} (${n}%)</span><span class="font-mono">${r?"":"+"}${g(p)}</span></div>
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
                ${t.items.map((r,n)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${n+1}</td>
                    <td class="py-4 px-4 font-bold uppercase flex items-center gap-2">
                        ${d(r.name)} 
                        ${r.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${d(r.variantName)}</span> ${r.colorCode?`<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${d(r.colorCode)};"></span>`:""}`:""}
                        ${r.poTime?`<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${d(r.poTime)}</span>`:""}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-lg text-slate-800">${parseFloat(r.qty)}</td>
                    <td class="py-4 px-4 text-center text-slate-500 font-bold uppercase text-xs">${d(r.unit||"pcs")}</td>
                    <td class="py-4 px-4 text-center"><div class="w-5 h-5 border-2 border-slate-300 mx-auto rounded shadow-inner"></div></td>
                </tr>`).join("")}
            </tbody>
        </table>
        `,(t.pointsEarned>0||t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null)&&(i+=`
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5 flex items-center gap-6">
            <div class="w-10 h-10 rounded-xl bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
            ${t.pointsEarned>0?`<div><p class="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-lg text-amber-700">+${t.pointsEarned}</p></div>`:""}
            ${t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null?`<div><p class="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Terkumpul</p><p class="font-bold text-lg text-amber-700">${t.finalMemberPoints}</p></div>`:""}
        </div>`),t.claimedReward){const r=t.claimedReward.status==="ready"?"SERTAKAN BERSAMA PENGIRIMAN INI":t.claimedReward.status==="waiting_stock"?"STOK KOSONG — KIRIM SUSULAN":"MENUNGGU KONFIRMASI GUDANG";i+=`
        <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-5 mb-8 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                <div>
                    <p class="text-[10px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${t.claimedReward.pointsCost} Poin)</p>
                    <p class="font-bold text-base text-violet-800 uppercase">${d(t.claimedReward.name)}</p>
                    ${t.claimedReward.note?`<p class="text-xs italic text-violet-600 mt-1">"${d(t.claimedReward.note)}"</p>`:""}
                </div>
            </div>
            <span class="text-[10px] font-bold px-3 py-2 rounded-xl bg-violet-600 text-white uppercase tracking-widest text-center shrink-0">${r}</span>
        </div>`}t.payment?.method==="tempo"&&(i+=`
        <div class="mt-6 mb-8 border border-pink-200 bg-pink-50 p-4 rounded-xl text-left">
            <h4 class="font-bold text-pink-700 text-xs uppercase tracking-widest mb-1"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo</h4>
            <p class="text-[10px] text-pink-600 font-bold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${t.payment.tempoDueDate?new Date(t.payment.tempoDueDate).toLocaleDateString("id-ID"):"-"}). Keterlambatan pembayaran akan dikenakan denda sebesar 1% dari sisa tagihan untuk setiap harinya.</p>
        </div>`),t.items.some(r=>r.poTime&&r.poTime!=="")&&(i+=`
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
            <span class="font-bold text-slate-900">${d(t.customer?.name||"Nama Terang & TTD")}</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Sopir / Pengantar</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900">Nama Terang & TTD</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Hormat Kami,</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900 uppercase">${d(b.store.name)}</span>
        </div>
    </div>
    `,L("doc-paper-content",i);const c=o("doc-preview-modal");c&&c.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),A("doc-preview-modal"),setTimeout(()=>{o("doc-preview-modal")&&o("doc-preview-modal").classList.remove("opacity-0"),o("doc-preview-modal-box")&&o("doc-preview-modal-box").classList.remove("scale-95"),M()},10)},Ye=()=>{if(!T||T.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}O="sph";const e="SPH-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.floor(1e3+Math.random()*9e3),t=new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}),a=new Date(Date.now()+14*24*60*60*1e3).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"});C("doc-modal-title","Surat Penawaran Harga (SPH)");let s="";b.store?.logo&&(b.store.logo.includes("http")||b.store.logo.includes("data:"))?s=`<img loading="eager" src="${d(b.store.logo)}" class="w-16 h-16 object-contain">`:s='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';const i=typeof window.getEffP=="function"?window.getEffP:n=>n.price||0;let l=0,c=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${s}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${d(b.store?.name||"Toko Putri")}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${d(b.store?.slogan||"General Supplier & Alat Teknik")}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${d(b.store?.address||"Alamat fisik toko belum diatur.")}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${d(b.store?.wa||"-")}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl md:text-3xl tracking-widest text-emerald-600 uppercase">PENAWARAN HARGA</h2>
            <p class="text-sm font-bold text-slate-600 mt-2 font-mono">#${e}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${t}</p>
            <span class="inline-block mt-2 px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-300 rounded text-[10px] font-bold uppercase tracking-wider">
                Berlaku s/d: ${a}
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
            ${T.map((n,p)=>{let f=parseFloat(n.qty)||1,u=i(n),w=f*u;return l+=w,`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-3.5 px-4 text-center font-mono text-slate-500">${p+1}</td>
                    <td class="py-3.5 px-4 font-bold">
                        ${d(n.name)}
                        ${n.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${d(n.variantName)}</span>`:""}
                    </td>
                    <td class="py-3.5 px-4 text-center font-bold text-slate-700">${f} <span class="text-[10px] font-bold text-slate-400 uppercase">${d(n.unit||"pcs")}</span></td>
                    <td class="py-3.5 px-4 text-right font-mono font-medium">${g(u)}</td>
                    <td class="py-3.5 px-4 text-right font-mono font-bold">${g(w)}</td>
                </tr>`}).join("")}
        </tbody>
    </table>

    <div class="flex justify-end mb-8">
        <div class="w-1/2 md:w-[45%] space-y-2 text-sm font-bold text-slate-700">
            <div class="flex justify-between px-4"><span>Subtotal Estimasi</span><span class="font-mono">${g(l)}</span></div>
            <div class="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl mt-2 shadow-md">
                <span class="font-bold text-base uppercase tracking-widest">Total Penawaran</span>
                <span class="font-mono text-xl text-emerald-400 font-bold tracking-tight">${g(l)}</span>
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
            <span class="font-bold text-slate-900 uppercase">${d(b.store?.name||"Toko Putri")}</span>
        </div>
    </div>
    `;L("doc-paper-content",c);const r=o("doc-preview-modal");r&&r.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),A("doc-preview-modal"),setTimeout(()=>{o("doc-preview-modal")&&o("doc-preview-modal").classList.remove("opacity-0"),o("doc-preview-modal-box")&&o("doc-preview-modal-box").classList.remove("scale-95"),M()},10)},M=()=>{const e=o("doc-paper-scroll-area"),t=o("doc-paper-content"),a=o("doc-paper-wrapper");if(!e||!t||!a)return;const s=794,l=e.clientWidth-16,c=Math.min(1,l/s);t.style.transform=`translateX(-50%) scale(${c})`,a.style.height=t.offsetHeight*c+"px"};window.addEventListener("resize",()=>{const e=o("doc-preview-modal");e&&!e.classList.contains("hidden")&&M()});const Ze=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{o("doc-preview-modal")&&o("doc-preview-modal").classList.add("opacity-0"),o("doc-preview-modal-box")&&o("doc-preview-modal-box").classList.add("scale-95"),setTimeout(()=>k("doc-preview-modal"),300)}):(o("doc-preview-modal")&&o("doc-preview-modal").classList.add("opacity-0"),o("doc-preview-modal-box")&&o("doc-preview-modal-box").classList.add("scale-95"),setTimeout(()=>k("doc-preview-modal"),300))},Xe=()=>{const e=o("doc-paper-content")?o("doc-paper-content").innerHTML:"";if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){let a=o("thermal-print-section");a||(a=document.createElement("div"),a.id="thermal-print-section",document.body.appendChild(a)),a.innerHTML=e,window.AndroidNativeApp.print();return}const t=window.open("","_blank");if(!t){let a=document.getElementById("a4-print-fallback-iframe");a||(a=document.createElement("iframe"),a.id="a4-print-fallback-iframe",a.style.position="fixed",a.style.right="0",a.style.bottom="0",a.style.width="0",a.style.height="0",a.style.border="0",a.style.opacity="0",document.body.appendChild(a));const s=a.contentWindow.document;s.open(),s.write(`<!DOCTYPE html><html><head><title>Cetak Dokumen A4</title>
        <style>@page{size:A4 portrait;margin:10mm}body{font-family:'Barlow',system-ui,sans-serif;background:#fff;margin:0;padding:16px;color:#0f172a;-webkit-print-color-adjust:exact;print-color-adjust:exact}.w-full{width:100%}</style>
        </head><body><div style="max-width:794px;margin:0 auto">${e}</div></body></html>`),s.close(),setTimeout(()=>{try{a.contentWindow.focus(),a.contentWindow.print()}catch(i){console.warn("[DocPrint] Fallback iframe print error:",i)}},500);return}t.document.write(`
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
    `),t.document.close()},et=async e=>{if(!K){R(!0),W(e==="image"?"Membuat Gambar HD...":"Menyusun PDF...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{j(),R(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const t=o("doc-paper-content");if(!t)throw new Error("Elemen dokumen tidak ditemukan.");const a=document.createElement("div");a.style.position="absolute",a.style.top="-9999px",a.style.left="-9999px",a.style.width=t.offsetWidth+"px",a.style.height="max-content",a.style.backgroundColor="#ffffff",a.style.overflow="visible";const s=t.cloneNode(!0);s.id="doc-clone-printing",s.style.margin="0 auto",s.style.boxShadow="none",s.classList.remove("absolute","top-0","left-1/2"),s.style.position="static",s.style.left="auto",s.style.top="auto",s.style.transform="none",s.style.height="max-content",s.style.maxHeight="none",s.style.overflow="visible",s.classList.add("h-max"),a.appendChild(s),document.body.appendChild(a);const i=Array.from(s.querySelectorAll("img"));if(await Promise.all(i.map(p=>p.complete?Promise.resolve():new Promise(f=>{p.addEventListener("load",f,{once:!0}),p.addEventListener("error",f,{once:!0})}))),await new Promise(p=>setTimeout(p,300)),a.offsetWidth===0||a.offsetHeight===0)throw new Error("Dokumen belum sepenuhnya ter-render. Coba lagi.");const l={scale:2,useCORS:!0,backgroundColor:"#ffffff",width:a.offsetWidth,height:a.offsetHeight,windowWidth:a.offsetWidth,windowHeight:a.offsetHeight},c=await html2canvas(a,l);if(document.body.removeChild(a),!c||c.width===0||c.height===0)throw new Error("Gagal menangkap gambar dokumen (canvas kosong).");const r=S||Date.now().toString(36).toUpperCase(),n=`${O.toUpperCase()}_${r}`;if(e==="image"){const p=c.toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(p,`${n}.png`,"image/png");else{const f=document.createElement("a");f.download=`${n}.png`,f.href=p,f.click()}typeof window.showToast=="function"&&window.showToast("Gambar Berhasil Disimpan!")}else{const p=c.toDataURL("image/jpeg",1);if(!p||!p.startsWith("data:image/jpeg;base64,"))throw new Error("Data gambar hasil export tidak valid.");const f=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,u=210,w=c.height*u/c.width;if(!isFinite(w)||w<=0)throw new Error("Ukuran halaman PDF tidak valid.");const m=new f({orientation:"p",unit:"mm",format:[u,w]});m.addImage(p,"JPEG",0,0,u,w),window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"?window.AndroidNativeApp.saveOrShareFile(m.output("datauristring"),`${n}.pdf`,"application/pdf"):m.save(`${n}.pdf`),typeof window.showToast=="function"&&window.showToast("File PDF Berhasil Disimpan!")}}catch(t){console.error("Export Error: ",t),typeof window.showToast=="function"&&window.showToast(t&&t.message?`Gagal: ${t.message}`:"Gagal memproses dokumen.");const a=document.getElementById("doc-clone-printing");a&&a.parentElement&&document.body.removeChild(a.parentElement)}finally{j(),R(!1)}}};window.openDocPreview=Qe;window.openCartSPHPreview=Ye;window.fitDocPreview=M;window.closeDocPreviewModal=Ze;window.printDocA4=Xe;window.exportDocFile=et;export{Ee as $,me as A,fe as B,ze as C,we as D,St as E,kt as F,Be as G,yt as H,Me as I,re as J,de as K,gt as L,te as M,se as N,oe as O,ae as P,ie as Q,ne as R,ct as S,pt as T,mt as U,ft as V,ut as W,bt as X,F as Y,Ut as Z,Ot as _,b as a,Q as a0,j as a1,Ue as a2,W as a3,he as a4,jt as a5,ve as a6,Bt as a7,ye as a8,Et as a9,at as aA,ot as aB,ee as aC,wt as aD,le as aE,ce as aF,pe as aG,ue as aH,be as aI,ge as aJ,At as aK,Ae as aL,tt as aM,lt as aN,vt as aO,Pt as aP,$t as aQ,Tt as aR,Mt as aS,Te as aa,Rt as ab,xt as ac,D as ad,K as ae,R as af,S as ag,Gt as ah,Lt as ai,Ht as aj,Dt as ak,G as al,He as am,ke as an,$e as ao,Nt as ap,Ct as aq,ht as ar,h as as,Pe as at,H as au,it as av,nt as aw,Kt as ax,Ft as ay,Se as az,L as b,T as c,Y as d,o as e,g as f,Re as g,k as h,d as i,It as j,rt as k,dt as l,Z as m,X as n,xe as o,st as p,Oe as q,C as r,A as s,Le as t,x as u,Wt as v,z as w,Ne as x,zt as y,je as z};
