const V={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"text",brandStyle:"image",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showRewardCatalog:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],productOrder:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let b=JSON.parse(JSON.stringify(V)),T=[],B=[],U=[];try{const e=localStorage.getItem("freshmart_cart");e&&(T=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(B=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(U=JSON.parse(e)||[])}catch{}let J={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},Q=null,Y=null,X=null,Z="Semua Produk",ee="Semua Jenis",te="Semua Merek",ae="",se="newest",oe="grid",ie=1,ne=12,re="orders",de="",le=null,ce=null,pe=0,me=[],fe=[],ue=[],be=1,we=[],xe=null,ge=null,he=null,D=[],ve=[],S=null,ye=null,H=!1,ke="all",Pe="today",$e=null,Te=null;const Je=e=>{$e=e},Qe=e=>{b=e},Ye=e=>{T=e},Xe=e=>{B=e},Ze=e=>{U=e},et=e=>{J=e},tt=e=>{Q=e},at=e=>{Y=e},st=e=>{X=e},ot=e=>{Z=e},it=e=>{ee=e},nt=e=>{te=e},rt=e=>{ae=e},dt=e=>{se=e},lt=e=>{oe=e},ct=e=>{ie=e},pt=e=>{ne=e},mt=e=>{re=e},ft=e=>{de=e},ut=e=>{le=e},bt=e=>{ce=e},wt=e=>{pe=e},xt=e=>{me=e},gt=e=>{fe=e},ht=e=>{ue=e},vt=e=>{be=e},yt=e=>{we=e},kt=e=>{D=e},Pt=e=>{ve=e},$t=e=>{S=e},Tt=e=>{ye=e},O=e=>{H=e},St=e=>{Te=e},At=e=>{ke=e},Dt=e=>{Pe=e},Lt=e=>{xe=e},Ct=e=>{ge=e},It=e=>{he=e},o=e=>document.getElementById(e),A=e=>{const t=o(e);t&&t.classList.remove("hidden")},k=e=>{const t=o(e);t&&t.classList.add("hidden")},Se=(e,t,a)=>{const s=o(e);s&&s.classList.toggle(t,a)},L=(e,t)=>{const a=o(e);a&&(a.innerText=t)},C=(e,t)=>{const a=o(e);a&&(a.innerHTML=t)},Ae=(e,t)=>{const a=o(e);a&&(a.value=t)},De=e=>{const t=o(e);return t?t.value:""},Le=(e,t)=>{const a=typeof e=="string"?o(e):e,s=typeof t=="string"?o(t):t;a&&(a.classList.remove("hidden"),a.offsetWidth,requestAnimationFrame(()=>{a.classList.remove("opacity-0"),s&&s.classList.remove("translate-y-full","sm:translate-y-10","sm:translate-y-8","scale-95")}))},Ce=(e,t,a)=>{const s=typeof e=="string"?o(e):e,i=typeof t=="string"?o(t):t;if(!s){typeof a=="function"&&a();return}s.classList.add("opacity-0"),i&&i.classList.add("translate-y-full","sm:translate-y-10","sm:translate-y-8"),setTimeout(()=>{s.classList.add("hidden"),typeof a=="function"&&a()},280)};window.openModalAnim=Le;window.closeModalAnim=Ce;const Ie=e=>{try{return localStorage.getItem(e)}catch{return null}},Ne=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},d=e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),w=e=>{const t=Number(e);return isNaN(t)||e===null?"Rp 0":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(Math.abs(t)).replace(/^/,t<0?"-":"")},Me=e=>{if(typeof e!="string")return e;const t=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);return t?`https://lh3.googleusercontent.com/d/${t[1]}`:e},Oe=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(t))return t;const a=t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return a?a[1]:null},z=e=>{if(typeof e!="string"||!e.trim())return null;const t=e.trim(),a=Oe(t);if(a)return{type:"youtube",id:a,embedUrl:`https://www.youtube.com/embed/${a}?autoplay=1&mute=1&muted=1&loop=1&playlist=${a}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const s=t.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(s&&s[1]){const i=s[1];return{type:"gdrive",id:i,streamUrl:`https://drive.google.com/uc?export=download&id=${i}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${i}`,directUrl:`https://drive.google.com/uc?export=download&id=${i}`,embedUrl:`https://drive.google.com/file/d/${i}/preview?autoplay=1`}}return{type:"direct",directUrl:t,embedUrl:t}},Nt=e=>{const t=z(e);return t?t.embedUrl:e},Mt=e=>{const t=z(e);return t?t.embedUrl:e},Ot=(e,t)=>typeof e!="string"||!e?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${t}`:e.includes("googleusercontent.com")&&!e.includes("=")?`${e}=${t}`:e,Rt=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",jt=(e,t,a,s)=>{document.title=e||"Toko Putri";const i=(c,l,n=!1)=>{const r=n?"property":"name";let p=document.querySelector(`meta[${r}="${c}"]`);p||(p=document.createElement("meta"),p.setAttribute(r,c),document.head.appendChild(p)),p.setAttribute("content",l)};t&&i("description",t),e&&i("og:title",e,!0),t&&i("og:description",t,!0),a&&i("og:image",a,!0),s&&i("og:url",s,!0)},Et=(e,t)=>{let a=document.getElementById(e);a||(a=document.createElement("script"),a.id=e,a.type="application/ld+json",document.head.appendChild(a)),a.textContent=JSON.stringify(t)},K=e=>{e&&L("loader-text",e);const t=o("global-loader");t&&(t.style.opacity="1",t.style.display="flex")},R=()=>{const e=o("global-loader");e&&(e.style.pointerEvents="none",e.style.transition="opacity 0.25s ease",e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250))},g=(e,t,a,s)=>{typeof window.showToast=="function"&&window.showToast(e,t,a,s)},Bt=(e,t,a,s)=>{typeof window.showConfirm=="function"&&window.showConfirm(e,t,a,s)},P={};window.loadedScripts=P;const Ut=(e,t)=>t&&t()?Promise.resolve():(P[e]||(P[e]=new Promise((a,s)=>{const i=document.createElement("script");i.src=e,i.onload=()=>a(),i.onerror=()=>{delete P[e],s(new Error("Gagal memuat: "+e))},document.head.appendChild(i)})),P[e]),F=e=>{let t=(e||"").toString().replace(/\D/g,"");return t?(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),t):""},Re=(e,t="")=>{const a=F(e);if(!a){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp tidak valid!");return}const s=t?encodeURIComponent(t):"",i=`https://wa.me/${a}${s?`?text=${s}`:""}`;window.AndroidNativeApp&&typeof window.AndroidNativeApp.openWhatsApp=="function"?window.AndroidNativeApp.openWhatsApp(i):window.open(i,"_blank","noopener,noreferrer")},W=(e="light")=>{try{typeof navigator<"u"&&typeof navigator.vibrate=="function"&&(e==="light"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="success"?navigator.vibrate([15,30,20]):e==="warning"&&navigator.vibrate([30,40,30]))}catch{}},je=(e,t=null,a=null)=>{try{const s=(typeof t=="string"?document.querySelector(t):t)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!s)return;const i=e.getBoundingClientRect(),c=s.getBoundingClientRect(),l=document.createElement("div");l.className="flying-cart-item",a?l.innerHTML=`<img src="${a}" alt="Product" class="w-full h-full object-cover rounded-full" />`:l.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const n=i.left+i.width/2-20,r=i.top+i.height/2-20,p=c.left+c.width/2-20,f=c.top+c.height/2-20;l.style.cssText=`
            position: fixed;
            left: ${n}px;
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
        `,document.body.appendChild(l),requestAnimationFrame(()=>{const u=p-n,x=f-r;l.style.transform=`translate3d(${u}px, ${x}px, 0) scale(0.25) rotate(18deg)`,l.style.opacity="0.4"}),setTimeout(()=>{l&&l.parentNode&&l.parentNode.removeChild(l),W("medium");const u=document.getElementById("bottom-nav-cart-badge")||s.querySelector(".cart-count-badge");u&&(u.classList.remove("cart-bounce-pop"),u.offsetWidth,u.classList.add("cart-bounce-pop")),s.classList.remove("cart-bounce-pop"),s.offsetWidth,s.classList.add("cart-bounce-pop"),setTimeout(()=>{u&&u.classList.remove("cart-bounce-pop"),s.classList.remove("cart-bounce-pop")},600)},500)}catch(s){console.error("flyToCart error",s)}};window.normalizeWA=F;window.openWhatsApp=Re;window.sLoad=K;window.hLoad=R;window.el=o;window.show=A;window.hide=k;window.toggleCls=Se;window.setIn=L;window.setH=C;window.setV=Ae;window.getV=De;window.esc=d;window.fixD=Me;window.fCur=w;window.sL=Ie;window.ssL=Ne;window.triggerHaptic=W;window.flyToCartAnimation=je;const E={deviceType:"bluetooth",deviceName:"Printer Thermal POS (Default)",deviceId:"",paperSize:"58mm",feedLines:2,autoCut:!1,openCashDrawer:!1,autoPrintOrder:!1,headerText:"",footerText:"Terima kasih atas kunjungan Anda!",showLogo:!0,showPoints:!0,showBarcode:!0,networkIp:"192.168.1.200:9100"},h=()=>{try{const e=localStorage.getItem("freshmart_printer_config");if(e)return{...E,...JSON.parse(e)}}catch(e){console.warn("Gagal membaca konfigurasi printer lokal:",e)}return{...E}},I=e=>{try{const a={...h(),...e};return localStorage.setItem("freshmart_printer_config",JSON.stringify(a)),a}catch(t){return console.error("Gagal menyimpan konfigurasi printer:",t),h()}},Ee=()=>{const e=h(),t=(i,c)=>{const l=o(i);l&&(l.checked=!!c)},a=(i,c)=>{const l=o(i);l&&(l.value=c||"")};a("printer-device-name-display",e.deviceName),a("printer-paper-size",e.paperSize),a("printer-network-ip",e.networkIp),a("printer-header-custom",e.headerText),a("printer-footer-custom",e.footerText),t("printer-opt-points",e.showPoints),t("printer-opt-barcode",e.showBarcode),t("printer-opt-autocut",e.autoCut),t("printer-opt-drawer",e.openCashDrawer),t("printer-opt-autoprint",e.autoPrintOrder),G(e.deviceType);const s=o("printer-settings-modal");s&&s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("printerSettings"),A("printer-settings-modal"),setTimeout(()=>{o("printer-settings-modal")&&o("printer-settings-modal").classList.remove("opacity-0"),o("printer-settings-modal-box")&&o("printer-settings-modal-box").classList.remove("scale-95")},10)},q=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("printerSettings",e,()=>{o("printer-settings-modal")&&o("printer-settings-modal").classList.add("opacity-0"),o("printer-settings-modal-box")&&o("printer-settings-modal-box").classList.add("scale-95"),setTimeout(()=>k("printer-settings-modal"),300)}):(o("printer-settings-modal")&&o("printer-settings-modal").classList.add("opacity-0"),o("printer-settings-modal-box")&&o("printer-settings-modal-box").classList.add("scale-95"),setTimeout(()=>k("printer-settings-modal"),300))},G=e=>{window._selectedPrinterType=e,document.querySelectorAll(".printer-type-card").forEach(a=>{if(a.getAttribute("data-type")===e){a.classList.add("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),a.classList.remove("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const i=a.querySelector(".printer-check-badge");i&&i.classList.remove("hidden")}else{a.classList.remove("border-[var(--color-primary)]","bg-[rgba(var(--color-primary-rgb),0.06)]","ring-2","ring-[var(--color-primary)]/20"),a.classList.add("border-slate-200","dark:border-slate-700","bg-white","dark:bg-slate-800");const i=a.querySelector(".printer-check-badge");i&&i.classList.add("hidden")}});const t=o("printer-network-box");t&&(e==="network"?t.classList.remove("hidden"):t.classList.add("hidden"))},Be=()=>{const e=(s,i="")=>{const c=o(s);return c?c.value:i},t=(s,i=!1)=>{const c=o(s);return c?c.checked:i},a={deviceType:window._selectedPrinterType||"bluetooth",paperSize:e("printer-paper-size","58mm"),networkIp:e("printer-network-ip","192.168.1.200:9100"),headerText:e("printer-header-custom",""),footerText:e("printer-footer-custom","Terima kasih atas kunjungan Anda!"),showPoints:t("printer-opt-points",!0),showBarcode:t("printer-opt-barcode",!0),autoCut:t("printer-opt-autocut",!1),openCashDrawer:t("printer-opt-drawer",!1),autoPrintOrder:t("printer-opt-autoprint",!1)};I(a),g("Pengaturan printer berhasil disimpan! ✅"),q()},Ue=async()=>{if(!navigator.bluetooth){g("Web Bluetooth tidak didukung browser ini. Untuk Android, gunakan Android System Print atau driver RawBT.");return}try{g("Mencari printer bluetooth di sekitar...");const e=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["000018f0-0000-1000-8000-00805f9b34fb","e7810a71-73ae-499d-8c15-faa9aef0c3f2","00001101-0000-1000-8000-00805f9b34fb"]});if(e){I({deviceType:"bluetooth",deviceName:e.name||"Bluetooth POS Printer",deviceId:e.id});const t=o("printer-device-name-display");t&&(t.value=e.name||"Bluetooth POS Printer"),g(`Printer "${e.name||"Bluetooth POS"}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&g("Koneksi bluetooth dibatalkan atau tidak tersedia.")}},He=async()=>{if(!navigator.usb){g("Web USB tidak didukung browser ini. Gunakan Android System Print untuk kabel OTG.");return}try{g("Mencari printer USB...");const e=await navigator.usb.requestDevice({filters:[]});if(e){const t=(e.productName||"USB Thermal Printer")+" (USB)";I({deviceType:"usb",deviceName:t,deviceId:String(e.vendorId)+":"+String(e.productId)});const a=o("printer-device-name-display");a&&(a.value=t),g(`Printer USB "${t}" tersambung! ✅`)}}catch(e){e.name!=="NotFoundError"&&g("Koneksi USB dibatalkan atau tidak ditemukan.")}},ze=()=>{const e=h(),t=e.paperSize==="80mm",a=t?48:32,s=b.store.name||"TOKO PUTRI",i=b.store.wa||"",c=(p,f,u=a)=>{const x=u-p.length-f.length;return p+(x>0?" ".repeat(x):" ")+f},l=new Date().toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let n=`
    <div style="text-align:center;font-weight:bold;font-size:14px;margin-bottom:3px;">${d(s)}</div>
    ${i?`<div style="text-align:center;font-size:11px;margin-bottom:4px;">WA: ${d(i)}</div>`:""}
    <div style="text-align:center;font-weight:bold;font-size:12px;border-top:1px dashed #000;border-bottom:1px dashed #000;padding:3px 0;margin:6px 0;">
        *** UJI COBA CETAK STRUK ***
    </div>
    <div style="white-space:pre;font-size:11px;">Tgl   : ${l}</div>
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
    `;e.showPoints&&(n+=`<div style="white-space:pre;font-size:11px;">${c("Simulasi Poin Member","+10 Poin",a)}</div>`,n+='<div style="border-bottom:1px dashed #000;margin:6px 0;"></div>'),e.showBarcode&&(n+=`<div style="text-align:center;margin:6px 0;">
            <div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*TEST-POS-${Date.now().toString().slice(-6)}*</div>
            <div style="font-size:9px;color:#333;">(BARCODE TEST OK)</div>
        </div><div style="border-bottom:1px dashed #000;margin:6px 0;"></div>`),n+=`
    <div style="text-align:center;font-size:10px;margin-top:6px;line-height:1.3;">
        ${d(e.footerText||"Terima kasih atas kunjungan Anda!")}
    </div>
    <div style="text-align:center;font-size:9px;font-style:italic;margin-top:4px;">
        Printer siap digunakan untuk operasional kasir Toko Putri.
    </div>
    <div style="height:25px;"></div>
    `;let r=o("thermal-print-section");if(r||(r=document.createElement("div"),r.id="thermal-print-section",document.body.appendChild(r)),r.innerHTML=`<div style="width:${t?"80mm":"58mm"};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${n}</div>`,e.deviceType==="rawbt"&&window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function"){const p=r.innerText,f=btoa(unescape(encodeURIComponent(p)));window.AndroidNativeApp.printRawBT(f)}else window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():window.print();g("Perintah uji cetak berhasil dikirim! 🖨️")};window.getPrinterConfig=h;window.savePrinterConfig=I;window.openPrinterSettingsModal=Ee;window.closePrinterSettingsModal=q;window.selectPrinterDeviceTypeUI=G;window.savePrinterSettingsFromModal=Be;window.scanBluetoothPrinter=Ue;window.scanUsbPrinter=He;window.executeTestPrint=ze;const _=()=>{const e=D.find(m=>m.orderId===S);if(!e)return;const t=typeof h=="function"?h():{paperSize:"58mm",showPoints:!0,showBarcode:!0},a=t.paperSize==="80mm",s=a?48:32,i=e.dateString?new Date(e.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",c=t.headerText||b.store.name||"Toko Putri",l=b.store.wa||"",n=(m,v,$=s)=>{const y=$-m.length-v.length;return m+(y>0?" ".repeat(y):" ")+v};let r=`<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${d(c)}</div>`;if(l&&(r+=`<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${d(l)}</div>`),r+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">Order: #${e.orderId}</div><div style="white-space:pre;">Tgl  : ${i}</div><div style="white-space:pre;">Plg  : ${d(e.customer?.name||"Guest").substring(0,s-10)}</div><div style="white-space:pre;">Tipe : ${e.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko"}</div><div class="border-b border-dashed border-black my-2"></div>`,e.customer?.note&&(r+=`<div style="white-space:pre-wrap;word-break:break-all;">Cat: ${d(e.customer.note)}</div><div class="border-b border-dashed border-black my-2"></div>`),e.items.forEach(m=>{let v=m.variantName?` (${d(m.variantName)}${m.colorCode?" "+d(m.colorCode):""})`:"";const $=(d(m.name)+v+(m.poTime?" [PO]":"")).substring(0,s),y=`${parseFloat(m.qty)} ${d(m.unit||"pcs")} x ${m.effectivePrice.toLocaleString("id-ID")}`,M=(parseFloat(m.qty)*m.effectivePrice).toLocaleString("id-ID");r+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${$}</div><div style="white-space:pre;font-size:11px;">${n(y,M,s)}</div>`,m.poTime&&(r+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${d(m.poTime)}</div>`)}),r+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">${n("Subtotal",(e.payment?.subtotal||0).toLocaleString("id-ID"),s)}</div>`,e.customer?.deliveryMethod==="delivery"&&(r+=`<div style="white-space:pre;">${n("Ongkir",(e.payment?.shippingCost||0).toLocaleString("id-ID"),s)}</div>`),e.payment?.shippingDiscount&&(r+=`<div style="white-space:pre;">${n("Pot.Ongkir",`-${e.payment.shippingDiscount.toLocaleString("id-ID")}`,s)}</div>`),e.payment?.productDiscount&&(r+=`<div style="white-space:pre;">${n("Pot.Harga",`-${e.payment.productDiscount.toLocaleString("id-ID")}`,s)}</div>`),e.payment?.ppnAmount&&e.payment.ppnAmount>0){const m=e.payment.ppnType==="inclusive",v=e.payment.ppnRate||11,$=e.payment.ppnAmount||0,y=(e.payment.subtotal||0)-(e.payment.productDiscount||0)+(e.payment.shippingCost||0)-(e.payment.shippingDiscount||0),M=e.payment.dppAmount||(m?Math.round(y*100/(100+v)):Math.max(0,y));r+=`<div style="white-space:pre;">${n("DPP",M.toLocaleString("id-ID"),s)}</div>`,r+=`<div style="white-space:pre;">${n(`${m?"Inc. PPN":"PPN"} (${v}%)`,(m?"":"+")+$.toLocaleString("id-ID"),s)}</div>`}r+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-weight:bold;font-size:12px;">${n("TOTAL","Rp "+(e.payment?.grandTotal||0).toLocaleString("id-ID"),s)}</div><div style="white-space:pre;">${n("Bayar:",String(e.payment?.method||"").toUpperCase(),s)}</div>`,t.showPoints&&(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(r+='<div class="border-b border-dashed border-black my-2"></div>',e.pointsEarned>0&&(r+=`<div style="white-space:pre;">${n("Poin Didapat:","+"+e.pointsEarned,s)}</div>`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&(r+=`<div style="white-space:pre;font-weight:bold;">${n("Saldo Poin:",String(e.finalMemberPoints),s)}</div>`),e.claimedReward&&(r+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;margin-top:2px;">HADIAH: ${d(e.claimedReward.name)}</div><div style="white-space:pre;font-size:10px;">(${e.claimedReward.status==="ready"?"Kirim bersama pesanan":e.claimedReward.status==="waiting_stock"?"Stok kosong-ditunda":"Menunggu konfirmasi"})</div>`)),e.items.some(m=>m.poTime&&m.poTime!=="")&&(r+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),t.showBarcode&&(r+=`<div class="border-b border-dashed border-black my-2"></div><div style="text-align:center;margin:4px 0;"><div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*ORDER-${d(e.orderId)}*</div><div style="font-size:8px;color:#666;">SCAN DI KASIR</div></div>`),r+=`<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${d(t.footerText||"Terima Kasih Atas Kunjungan Anda")}</div><div class="border-b border-dashed border-black my-2"></div><div style="height:15px;"></div>`,C("receipt-paper-content",r);const f=o("receipt-paper-content");f&&(f.style.width=a?"330px":"260px");const u=o("receipt-preview-modal-box");u&&(u.classList.remove("max-w-[320px]","max-w-[390px]"),u.classList.add(a?"max-w-[390px]":"max-w-[320px]"));const x=o("receipt-preview-modal");x&&x.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),A("receipt-preview-modal"),setTimeout(()=>{o("receipt-preview-modal")&&o("receipt-preview-modal").classList.remove("opacity-0"),o("receipt-preview-modal-box")&&o("receipt-preview-modal-box").classList.remove("scale-95")},10)},Ke=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{o("receipt-preview-modal")&&o("receipt-preview-modal").classList.add("opacity-0"),o("receipt-preview-modal-box")&&o("receipt-preview-modal-box").classList.add("scale-95"),setTimeout(()=>k("receipt-preview-modal"),300)}):(o("receipt-preview-modal")&&o("receipt-preview-modal").classList.add("opacity-0"),o("receipt-preview-modal-box")&&o("receipt-preview-modal-box").classList.add("scale-95"),setTimeout(()=>k("receipt-preview-modal"),300))},Fe=()=>{if(!D.find(c=>c.orderId===S))return;const t=o("receipt-paper-content")?o("receipt-paper-content").innerHTML:"";let a=o("thermal-print-section");a||(a=document.createElement("div"),a.id="thermal-print-section",document.body.appendChild(a));const s=typeof h=="function"?h():{paperSize:"58mm",deviceType:"system"},i=s.paperSize==="80mm";if(a.innerHTML=`<div style="width:${i?"80mm":"58mm"};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${t}</div>`,s.deviceType==="rawbt"&&window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function"){const c=a.innerText,l=btoa(unescape(encodeURIComponent(c)));window.AndroidNativeApp.printRawBT(l)}else window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():window.print()};window.openReceiptPreview=_;window.closeReceiptPreviewModal=Ke;window.executePrintReceipt=Fe;window.checkProPrint=()=>{_()};let j="invoice";const We=e=>{j=e;const t=D.find(n=>n.orderId===S);if(!t)return;L("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const a=t.dateString?new Date(t.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"";let s="";b.store.logo&&(b.store.logo.includes("http")||b.store.logo.includes("data:"))?s=`<img loading="eager" src="${d(b.store.logo)}" class="w-16 h-16 object-contain">`:s='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';let i=`
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
                ${t.items.map((n,r)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${r+1}</td>
                    <td class="py-4 px-4 font-bold flex items-center gap-2">
                        ${d(n.name)} 
                        ${n.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${d(n.variantName)}</span> ${n.colorCode?`<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${d(n.colorCode)};"></span>`:""}`:""}
                        ${n.poTime?`<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${d(n.poTime)}</span>`:""}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-slate-700">${parseFloat(n.qty)} <span class="text-[10px] font-bold text-slate-400 uppercase">${d(n.unit||"pcs")}</span></td>
                    <td class="py-4 px-4 text-right font-mono font-medium">${w(n.effectivePrice)}</td>
                    <td class="py-4 px-4 text-right font-mono font-bold">${w(n.effectivePrice*parseFloat(n.qty))}</td>
                </tr>`).join("")}
            </tbody>
        </table>

        <div class="flex justify-end mb-10">
            <div class="w-1/2 md:w-[45%] space-y-3 text-sm font-bold text-slate-700">
                <div class="flex justify-between px-4"><span>Subtotal Produk</span><span class="font-mono">${w(t.payment?.subtotal)}</span></div>
                ${t.payment?.shippingCost?`<div class="flex justify-between px-4"><span>Ongkos Kirim</span><span class="font-mono">${w(t.payment.shippingCost)}</span></div>`:""}
                ${t.payment?.shippingDiscount?`<div class="flex justify-between px-4 text-emerald-600"><span>Diskon Ongkir</span><span class="font-mono">-${w(t.payment.shippingDiscount)}</span></div>`:""}
                ${t.payment?.productDiscount?`<div class="flex justify-between px-4 text-rose-600"><span>Diskon Produk</span><span class="font-mono">-${w(t.payment.productDiscount)}</span></div>`:""}
                ${(()=>{if(!t.payment?.ppnAmount||t.payment.ppnAmount<=0)return"";const n=t.payment.ppnType==="inclusive",r=t.payment.ppnRate||11,p=t.payment.ppnAmount,f=(t.payment.subtotal||0)-(t.payment.productDiscount||0)+(t.payment.shippingCost||0)-(t.payment.shippingDiscount||0),u=t.payment.dppAmount||(n?Math.round(f*100/(100+r)):Math.max(0,f));return`
                    <div class="flex justify-between px-4 text-slate-600"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-mono">${w(u)}</span></div>
                    <div class="flex justify-between px-4 text-amber-600"><span>${n?"Termasuk PPN":"PPN"} (${r}%)</span><span class="font-mono">${n?"":"+"}${w(p)}</span></div>
                    `})()}
                
                <div class="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl mt-4 shadow-md">
                    <span class="font-bold text-base uppercase tracking-widest">Grand Total</span>
                    <span class="font-mono text-xl text-emerald-400 font-bold tracking-tight">${w(t.payment?.grandTotal)}</span>
                </div>
                ${t.payment?.method==="tempo"?`
                <div class="flex justify-between px-4 mt-4 text-emerald-600"><span>Uang Muka (DP)</span><span class="font-mono">${w(t.payment?.tempoDp||0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-4 rounded-xl mt-2 border border-rose-200">
                    <span class="font-bold text-base uppercase tracking-widest">Sisa Tagihan</span>
                    <span class="font-mono text-xl font-bold tracking-tight">${w(t.payment?.tempoBalance||0)}</span>
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
                        ${d(n.name)} 
                        ${n.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${d(n.variantName)}</span> ${n.colorCode?`<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${d(n.colorCode)};"></span>`:""}`:""}
                        ${n.poTime?`<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${d(n.poTime)}</span>`:""}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-lg text-slate-800">${parseFloat(n.qty)}</td>
                    <td class="py-4 px-4 text-center text-slate-500 font-bold uppercase text-xs">${d(n.unit||"pcs")}</td>
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
                    <p class="font-bold text-base text-violet-800 uppercase">${d(t.claimedReward.name)}</p>
                    ${t.claimedReward.note?`<p class="text-xs italic text-violet-600 mt-1">"${d(t.claimedReward.note)}"</p>`:""}
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
    `,C("doc-paper-content",i);const l=o("doc-preview-modal");l&&l.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),A("doc-preview-modal"),setTimeout(()=>{o("doc-preview-modal")&&o("doc-preview-modal").classList.remove("opacity-0"),o("doc-preview-modal-box")&&o("doc-preview-modal-box").classList.remove("scale-95"),N()},10)},qe=()=>{if(!T||T.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}j="sph";const e="SPH-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.floor(1e3+Math.random()*9e3),t=new Date().toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}),a=new Date(Date.now()+14*24*60*60*1e3).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"});L("doc-modal-title","Surat Penawaran Harga (SPH)");let s="";b.store?.logo&&(b.store.logo.includes("http")||b.store.logo.includes("data:"))?s=`<img loading="eager" src="${d(b.store.logo)}" class="w-16 h-16 object-contain">`:s='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';const i=typeof window.getEffP=="function"?window.getEffP:r=>r.price||0;let c=0,l=`
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
            ${T.map((r,p)=>{let f=parseFloat(r.qty)||1,u=i(r),x=f*u;return c+=x,`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-3.5 px-4 text-center font-mono text-slate-500">${p+1}</td>
                    <td class="py-3.5 px-4 font-bold">
                        ${d(r.name)}
                        ${r.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 ml-1 whitespace-nowrap">${d(r.variantName)}</span>`:""}
                    </td>
                    <td class="py-3.5 px-4 text-center font-bold text-slate-700">${f} <span class="text-[10px] font-bold text-slate-400 uppercase">${d(r.unit||"pcs")}</span></td>
                    <td class="py-3.5 px-4 text-right font-mono font-medium">${w(u)}</td>
                    <td class="py-3.5 px-4 text-right font-mono font-bold">${w(x)}</td>
                </tr>`}).join("")}
        </tbody>
    </table>

    <div class="flex justify-end mb-8">
        <div class="w-1/2 md:w-[45%] space-y-2 text-sm font-bold text-slate-700">
            <div class="flex justify-between px-4"><span>Subtotal Estimasi</span><span class="font-mono">${w(c)}</span></div>
            <div class="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl mt-2 shadow-md">
                <span class="font-bold text-base uppercase tracking-widest">Total Penawaran</span>
                <span class="font-mono text-xl text-emerald-400 font-bold tracking-tight">${w(c)}</span>
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
    `;C("doc-paper-content",l);const n=o("doc-preview-modal");n&&n.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),A("doc-preview-modal"),setTimeout(()=>{o("doc-preview-modal")&&o("doc-preview-modal").classList.remove("opacity-0"),o("doc-preview-modal-box")&&o("doc-preview-modal-box").classList.remove("scale-95"),N()},10)},N=()=>{const e=o("doc-paper-scroll-area"),t=o("doc-paper-content"),a=o("doc-paper-wrapper");if(!e||!t||!a)return;const s=794,c=e.clientWidth-16,l=Math.min(1,c/s);t.style.transform=`translateX(-50%) scale(${l})`,a.style.height=t.offsetHeight*l+"px"};window.addEventListener("resize",()=>{const e=o("doc-preview-modal");e&&!e.classList.contains("hidden")&&N()});const Ge=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{o("doc-preview-modal")&&o("doc-preview-modal").classList.add("opacity-0"),o("doc-preview-modal-box")&&o("doc-preview-modal-box").classList.add("scale-95"),setTimeout(()=>k("doc-preview-modal"),300)}):(o("doc-preview-modal")&&o("doc-preview-modal").classList.add("opacity-0"),o("doc-preview-modal-box")&&o("doc-preview-modal-box").classList.add("scale-95"),setTimeout(()=>k("doc-preview-modal"),300))},_e=()=>{const e=o("doc-paper-content")?o("doc-paper-content").innerHTML:"";if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"){let a=o("thermal-print-section");a||(a=document.createElement("div"),a.id="thermal-print-section",document.body.appendChild(a)),a.innerHTML=e,window.AndroidNativeApp.print();return}const t=window.open("","_blank");if(!t){let a=document.getElementById("a4-print-fallback-iframe");a||(a=document.createElement("iframe"),a.id="a4-print-fallback-iframe",a.style.position="fixed",a.style.right="0",a.style.bottom="0",a.style.width="0",a.style.height="0",a.style.border="0",a.style.opacity="0",document.body.appendChild(a));const s=a.contentWindow.document;s.open(),s.write(`<!DOCTYPE html><html><head><title>Cetak Dokumen A4</title>
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
    `),t.document.close()},Ve=async e=>{if(!H){O(!0),K(e==="image"?"Membuat Gambar HD...":"Menyusun PDF...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{R(),O(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const t=o("doc-paper-content");if(!t)throw new Error("Elemen dokumen tidak ditemukan.");const a=document.createElement("div");a.style.position="absolute",a.style.top="-9999px",a.style.left="-9999px",a.style.width=t.offsetWidth+"px",a.style.height="max-content",a.style.backgroundColor="#ffffff",a.style.overflow="visible";const s=t.cloneNode(!0);s.id="doc-clone-printing",s.style.margin="0 auto",s.style.boxShadow="none",s.classList.remove("absolute","top-0","left-1/2"),s.style.position="static",s.style.left="auto",s.style.top="auto",s.style.transform="none",s.style.height="max-content",s.style.maxHeight="none",s.style.overflow="visible",s.classList.add("h-max"),a.appendChild(s),document.body.appendChild(a);const i=Array.from(s.querySelectorAll("img"));if(await Promise.all(i.map(p=>p.complete?Promise.resolve():new Promise(f=>{p.addEventListener("load",f,{once:!0}),p.addEventListener("error",f,{once:!0})}))),await new Promise(p=>setTimeout(p,300)),a.offsetWidth===0||a.offsetHeight===0)throw new Error("Dokumen belum sepenuhnya ter-render. Coba lagi.");const c={scale:2,useCORS:!0,backgroundColor:"#ffffff",width:a.offsetWidth,height:a.offsetHeight,windowWidth:a.offsetWidth,windowHeight:a.offsetHeight},l=await html2canvas(a,c);if(document.body.removeChild(a),!l||l.width===0||l.height===0)throw new Error("Gagal menangkap gambar dokumen (canvas kosong).");const n=S||Date.now().toString(36).toUpperCase(),r=`${j.toUpperCase()}_${n}`;if(e==="image"){const p=l.toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(p,`${r}.png`,"image/png");else{const f=document.createElement("a");f.download=`${r}.png`,f.href=p,f.click()}typeof window.showToast=="function"&&window.showToast("Gambar Berhasil Disimpan!")}else{const p=l.toDataURL("image/jpeg",1);if(!p||!p.startsWith("data:image/jpeg;base64,"))throw new Error("Data gambar hasil export tidak valid.");const f=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,u=210,x=l.height*u/l.width;if(!isFinite(x)||x<=0)throw new Error("Ukuran halaman PDF tidak valid.");const m=new f({orientation:"p",unit:"mm",format:[u,x]});m.addImage(p,"JPEG",0,0,u,x),window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function"?window.AndroidNativeApp.saveOrShareFile(m.output("datauristring"),`${r}.pdf`,"application/pdf"):m.save(`${r}.pdf`),typeof window.showToast=="function"&&window.showToast("File PDF Berhasil Disimpan!")}}catch(t){console.error("Export Error: ",t),typeof window.showToast=="function"&&window.showToast(t&&t.message?`Gagal: ${t.message}`:"Gagal memproses dokumen.");const a=document.getElementById("doc-clone-printing");a&&a.parentElement&&document.body.removeChild(a.parentElement)}finally{R(),O(!1)}}};window.openDocPreview=We;window.openCartSPHPreview=qe;window.fitDocPreview=N;window.closeDocPreviewModal=Ge;window.printDocA4=_e;window.exportDocFile=Ve;export{V as $,pe as A,Oe as B,be as C,vt as D,wt as E,Ce as F,bt as G,Se as H,ie as I,ne as J,ct as K,Z as L,te as M,ae as N,ee as O,se as P,oe as Q,ot as R,it as S,nt as T,rt as U,dt as V,lt as W,z as X,Mt as Y,Nt as Z,Ie as _,b as a,R as a0,Me as a1,K as a2,xe as a3,Lt as a4,ge as a5,Ct as a6,he as a7,It as a8,Pe as a9,Xe as aA,X as aB,pt as aC,re as aD,de as aE,le as aF,me as aG,fe as aH,ue as aI,yt as aJ,Te as aK,Je as aL,st as aM,ut as aN,xt as aO,gt as aP,ht as aQ,St as aR,Dt as aa,mt as ab,D as ac,H as ad,O as ae,S as af,Ut as ag,$t as ah,Rt as ai,kt as aj,F as ak,Re as al,ve as am,ke as an,At as ao,Pt as ap,ft as aq,h as ar,ye as as,U as at,Ze as au,et as av,jt as aw,Et as ax,$e as ay,Qe as az,C as b,T as c,J as d,o as e,w as f,De as g,k as h,d as i,Tt as j,tt as k,at as l,Q as m,Y as n,we as o,Ye as p,Ne as q,L as r,A as s,g as t,Bt as u,Ae as v,B as w,Ot as x,Le as y,ce as z};
