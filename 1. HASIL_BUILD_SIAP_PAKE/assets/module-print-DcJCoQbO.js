const n=e=>document.getElementById(e),$=e=>{const t=n(e);t&&t.classList.remove("hidden")},g=e=>{const t=n(e);t&&t.classList.add("hidden")},N=(e,t,s)=>{const o=n(e);o&&o.classList.toggle(t,s)},P=(e,t)=>{const s=n(e);s&&(s.innerText=t)},S=(e,t)=>{const s=n(e);s&&(s.innerHTML=t)},O=(e,t)=>{const s=n(e);s&&(s.value=t)},H=e=>{const t=n(e);return t?t.value:""},U=e=>{try{return localStorage.getItem(e)}catch{return null}},B=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},d=e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),f=e=>{const t=Number(e);return isNaN(t)||e===null?"Rp 0":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(Math.abs(t)).replace(/^/,t<0?"-":"")},F=e=>{if(typeof e!="string")return e;const t=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);return t?`https://lh3.googleusercontent.com/d/${t[1]}`:e},G=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(t))return t;const s=t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return s?s[1]:null},D=e=>{if(typeof e!="string"||!e.trim())return null;const t=e.trim(),s=G(t);if(s)return{type:"youtube",id:s,embedUrl:`https://www.youtube.com/embed/${s}?autoplay=1&mute=1&muted=1&loop=1&playlist=${s}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const o=t.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(o&&o[1]){const i=o[1];return{type:"gdrive",id:i,streamUrl:`https://drive.google.com/uc?export=download&id=${i}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${i}`,directUrl:`https://drive.google.com/uc?export=download&id=${i}`,embedUrl:`https://drive.google.com/file/d/${i}/preview?autoplay=1`}}return{type:"direct",directUrl:t,embedUrl:t}},Le=e=>{const t=D(e);return t?t.embedUrl:e},Me=e=>{const t=D(e);return t?t.embedUrl:e},Ie=(e,t)=>typeof e!="string"?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${t}`:e,Ae=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",Re=(e,t,s,o)=>{document.title=e||"Toko Putri";const i=(l,c,r=!1)=>{const a=r?"property":"name";let m=document.querySelector(`meta[${a}="${l}"]`);m||(m=document.createElement("meta"),m.setAttribute(a,l),document.head.appendChild(m)),m.setAttribute("content",c)};t&&i("description",t),e&&i("og:title",e,!0),t&&i("og:description",t,!0),s&&i("og:image",s,!0),o&&i("og:url",o,!0)},je=(e,t)=>{let s=document.getElementById(e);s||(s=document.createElement("script"),s.id=e,s.type="application/ld+json",document.head.appendChild(s)),s.textContent=JSON.stringify(t)},C=e=>{e&&P("loader-text",e);const t=n("global-loader");t&&(t.style.display="flex")},k=()=>{const e=n("global-loader");e&&(e.style.display="none")},Ee=(e,t,s,o)=>{typeof window.showToast=="function"&&window.showToast(e,t,s,o)},Ne=(e,t,s,o)=>{typeof window.showConfirm=="function"&&window.showConfirm(e,t,s,o)},x={};window.loadedScripts=x;const Oe=(e,t)=>t&&t()?Promise.resolve():(x[e]||(x[e]=new Promise((s,o)=>{const i=document.createElement("script");i.src=e,i.onload=()=>s(),i.onerror=()=>{delete x[e],o(new Error("Gagal memuat: "+e))},document.head.appendChild(i)})),x[e]),W=e=>{let t=(e||"").toString().replace(/\D/g,"");return t?(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),t):""},L=(e="light")=>{try{typeof navigator<"u"&&typeof navigator.vibrate=="function"&&(e==="light"?navigator.vibrate(10):e==="medium"?navigator.vibrate(25):e==="success"?navigator.vibrate([15,30,20]):e==="warning"&&navigator.vibrate([30,40,30]))}catch{}},q=(e,t=null,s=null)=>{try{const o=(typeof t=="string"?document.querySelector(t):t)||document.getElementById("bnav-cart")||document.getElementById("bottom-nav-tab-cart")||document.getElementById("floating-cart-container")||document.querySelector(`[onclick*="changeView('view-cart')"]`);if(!e||!o)return;const i=e.getBoundingClientRect(),l=o.getBoundingClientRect(),c=document.createElement("div");c.className="flying-cart-item",s?c.innerHTML=`<img src="${s}" alt="Product" class="w-full h-full object-cover rounded-full" />`:c.innerHTML='<div class="w-full h-full primary-bg text-white flex items-center justify-center rounded-full text-xs shadow-lg"><i class="fa-solid fa-cart-shopping"></i></div>';const r=i.left+i.width/2-20,a=i.top+i.height/2-20,m=l.left+l.width/2-20,u=l.top+l.height/2-20;c.style.cssText=`
            position: fixed;
            left: ${r}px;
            top: ${a}px;
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
        `,document.body.appendChild(c),requestAnimationFrame(()=>{const p=m-r,w=u-a;c.style.transform=`translate3d(${p}px, ${w}px, 0) scale(0.25) rotate(18deg)`,c.style.opacity="0.4"}),setTimeout(()=>{c&&c.parentNode&&c.parentNode.removeChild(c),L("medium");const p=document.getElementById("bottom-nav-cart-badge")||o.querySelector(".cart-count-badge");p&&(p.classList.remove("cart-bounce-pop"),p.offsetWidth,p.classList.add("cart-bounce-pop")),o.classList.remove("cart-bounce-pop"),o.offsetWidth,o.classList.add("cart-bounce-pop"),setTimeout(()=>{p&&p.classList.remove("cart-bounce-pop"),o.classList.remove("cart-bounce-pop")},600)},500)}catch(o){console.error("flyToCart error",o)}};window.normalizeWA=W;window.sLoad=C;window.hLoad=k;window.el=n;window.show=$;window.hide=g;window.toggleCls=N;window.setIn=P;window.setH=S;window.setV=O;window.getV=H;window.esc=d;window.fixD=F;window.fCur=f;window.sL=U;window.ssL=B;window.triggerHaptic=L;window.flyToCartAnimation=q;const K={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"text",brandStyle:"image",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showRewardCatalog:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,spendPointsEnabled:!1,spendPointsThreshold:1e5,spendPointsPerThreshold:1,terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],deletedChangelogIds:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let b=JSON.parse(JSON.stringify(K)),M=[],I=[],A=[];try{const e=localStorage.getItem("freshmart_cart");e&&(M=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(I=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(A=JSON.parse(e)||[])}catch{}let V={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},z=null,_=null,J=null,Q="Semua Produk",X="Semua Jenis",Y="Semua Merek",Z="",ee="newest",te="grid",se=1,ae=12,oe="orders",ne="",ie=null,re=null,de=0,le=[],ce=[],pe=[],me=1,ue=[],fe=null,be=null,we=null,v=[],xe=[],h=null,ge=null,R=!1,he="all",ve="today",ye=null,ke=null;const He=e=>{ye=e},Ue=e=>{b=e},Be=e=>{M=e},Fe=e=>{I=e},Ge=e=>{A=e},We=e=>{V=e},qe=e=>{z=e},Ke=e=>{_=e},Ve=e=>{J=e},ze=e=>{Q=e},_e=e=>{X=e},Je=e=>{Y=e},Qe=e=>{Z=e},Xe=e=>{ee=e},Ye=e=>{te=e},Ze=e=>{se=e},et=e=>{ae=e},tt=e=>{oe=e},st=e=>{ne=e},at=e=>{ie=e},ot=e=>{re=e},nt=e=>{de=e},it=e=>{le=e},rt=e=>{ce=e},dt=e=>{pe=e},lt=e=>{me=e},ct=e=>{ue=e},pt=e=>{v=e},mt=e=>{xe=e},ut=e=>{h=e},ft=e=>{ge=e},y=e=>{R=e},bt=e=>{ke=e},wt=e=>{he=e},xt=e=>{ve=e},gt=e=>{fe=e},ht=e=>{be=e},vt=e=>{we=e},j=()=>{const e=v.find(a=>a.orderId===h);if(!e)return;const t=e.dateString?new Date(e.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",s=b.store.name||"Toko",o=b.store.wa||"",i=(a,m,u=32)=>{const p=u-a.length-m.length;return a+(p>0?" ".repeat(p):" ")+m};let l=`<div class="text-center font-bold" style="font-size:13px;margin-bottom:2px;">${d(s)}</div>`;if(o&&(l+=`<div class="text-center" style="margin-bottom:4px;">WA: ${d(o)}</div>`),l+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">Order: #${e.orderId}</div><div style="white-space:pre;">Tgl  : ${t}</div><div style="white-space:pre;">Plg  : ${d(e.customer?.name||"Guest").substring(0,20)}</div><div style="white-space:pre;">Tipe : ${e.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko"}</div><div class="border-b border-dashed border-black my-2"></div>`,e.customer?.note&&(l+=`<div style="white-space:pre-wrap;word-break:break-all;">Cat: ${d(e.customer.note)}</div><div class="border-b border-dashed border-black my-2"></div>`),e.items.forEach(a=>{let m=a.variantName?` (${d(a.variantName)}${a.colorCode?" "+d(a.colorCode):""})`:"";const u=(d(a.name)+m+(a.poTime?" [PO]":"")).substring(0,32),p=`${parseFloat(a.qty)} ${d(a.unit||"pcs")} x ${a.effectivePrice.toLocaleString("id-ID")}`,w=(parseFloat(a.qty)*a.effectivePrice).toLocaleString("id-ID");l+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${u}</div><div style="white-space:pre;font-size:11px;">${i(p,w)}</div>`,a.poTime&&(l+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${d(a.poTime)}</div>`)}),l+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">${i("Subtotal",(e.payment?.subtotal||0).toLocaleString("id-ID"))}</div>`,e.customer?.deliveryMethod==="delivery"&&(l+=`<div style="white-space:pre;">${i("Ongkir",(e.payment?.shippingCost||0).toLocaleString("id-ID"))}</div>`),e.payment?.shippingDiscount&&(l+=`<div style="white-space:pre;">${i("Pot.Ongkir",`-${e.payment.shippingDiscount.toLocaleString("id-ID")}`)}</div>`),e.payment?.productDiscount&&(l+=`<div style="white-space:pre;">${i("Pot.Harga",`-${e.payment.productDiscount.toLocaleString("id-ID")}`)}</div>`),e.payment?.ppnAmount&&e.payment.ppnAmount>0){const a=e.payment.ppnType==="inclusive",m=e.payment.ppnRate||11,u=e.payment.ppnAmount||0,p=(e.payment.subtotal||0)-(e.payment.productDiscount||0)+(e.payment.shippingCost||0)-(e.payment.shippingDiscount||0),w=e.payment.dppAmount||(a?Math.round(p*100/(100+m)):Math.max(0,p));l+=`<div style="white-space:pre;">${i("DPP",w.toLocaleString("id-ID"))}</div>`,l+=`<div style="white-space:pre;">${i(`${a?"Inc. PPN":"PPN"} (${m}%)`,(a?"":"+")+u.toLocaleString("id-ID"))}</div>`}l+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-weight:bold;font-size:12px;">${i("TOTAL","Rp "+(e.payment?.grandTotal||0).toLocaleString("id-ID"))}</div><div style="white-space:pre;">${i("Bayar:",String(e.payment?.method||"").toUpperCase())}</div>`,(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(l+='<div class="border-b border-dashed border-black my-2"></div>',e.pointsEarned>0&&(l+=`<div style="white-space:pre;">${i("Poin Didapat:","+"+e.pointsEarned)}</div>`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&(l+=`<div style="white-space:pre;font-weight:bold;">${i("Saldo Poin:",String(e.finalMemberPoints))}</div>`),e.claimedReward&&(l+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;margin-top:2px;">HADIAH: ${d(e.claimedReward.name)}</div><div style="white-space:pre;font-size:10px;">(${e.claimedReward.status==="ready"?"Kirim bersama pesanan":e.claimedReward.status==="waiting_stock"?"Stok kosong-ditunda":"Menunggu konfirmasi"})</div>`)),e.items.some(a=>a.poTime&&a.poTime!=="")&&(l+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),l+='<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;">Terima Kasih</div><div class="border-b border-dashed border-black my-2"></div><div style="height:15px;"></div>',S("receipt-paper-content",l);const r=n("receipt-preview-modal");r&&r.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),$("receipt-preview-modal"),setTimeout(()=>{n("receipt-preview-modal")&&n("receipt-preview-modal").classList.remove("opacity-0"),n("receipt-preview-modal-box")&&n("receipt-preview-modal-box").classList.remove("scale-95")},10)},$e=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{n("receipt-preview-modal")&&n("receipt-preview-modal").classList.add("opacity-0"),n("receipt-preview-modal-box")&&n("receipt-preview-modal-box").classList.add("scale-95"),setTimeout(()=>g("receipt-preview-modal"),300)}):(n("receipt-preview-modal")&&n("receipt-preview-modal").classList.add("opacity-0"),n("receipt-preview-modal-box")&&n("receipt-preview-modal-box").classList.add("scale-95"),setTimeout(()=>g("receipt-preview-modal"),300))},Pe=()=>{if(!v.find(o=>o.orderId===h))return;const t=n("receipt-paper-content")?n("receipt-paper-content").innerHTML:"",s=n("thermal-print-section");s&&(s.innerHTML=t,window.print())};window.openReceiptPreview=j;window.closeReceiptPreviewModal=$e;window.executePrintReceipt=Pe;window.checkProPrint=()=>{j()};let E="invoice";const Se=e=>{E=e;const t=v.find(r=>r.orderId===h);if(!t)return;P("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const s=t.dateString?new Date(t.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"";let o="";b.store.logo&&(b.store.logo.includes("http")||b.store.logo.includes("data:"))?o=`<img loading="eager" src="${d(b.store.logo)}" class="w-16 h-16 object-contain">`:o='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';let i=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${o}
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
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${s}</p>
        </div>
    </div>

    <div class="grid grid-cols-2 gap-8 mb-8">
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ditagihkan / Dikirim Kepada:</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-1">${d(t.customer?.name||"Guest")}</p>
            <p class="text-sm font-medium text-slate-700 leading-relaxed mb-3">${d(t.customer?.address||"-")}</p>
            ${t.customer?.note?`<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200"><i class="fa-solid fa-note-sticky"></i> Catatan: ${d(t.customer.note)}</p>`:""}
        </div>
        
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-center space-y-3">
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Metode Pengiriman</span>
                <span class="text-sm font-bold text-slate-800 uppercase">${d(t.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko")}</span>
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
                ${t.items.map((r,a)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${a+1}</td>
                    <td class="py-4 px-4 font-bold flex items-center gap-2">
                        ${d(r.name)} 
                        ${r.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${d(r.variantName)}</span> ${r.colorCode?`<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${d(r.colorCode)};"></span>`:""}`:""}
                        ${r.poTime?`<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${d(r.poTime)}</span>`:""}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-slate-700">${parseFloat(r.qty)} <span class="text-[10px] font-bold text-slate-400 uppercase">${d(r.unit||"pcs")}</span></td>
                    <td class="py-4 px-4 text-right font-mono font-medium">${f(r.effectivePrice)}</td>
                    <td class="py-4 px-4 text-right font-mono font-bold">${f(r.effectivePrice*parseFloat(r.qty))}</td>
                </tr>`).join("")}
            </tbody>
        </table>

        <div class="flex justify-end mb-10">
            <div class="w-1/2 md:w-[45%] space-y-3 text-sm font-bold text-slate-700">
                <div class="flex justify-between px-4"><span>Subtotal Produk</span><span class="font-mono">${f(t.payment?.subtotal)}</span></div>
                ${t.payment?.shippingCost?`<div class="flex justify-between px-4"><span>Ongkos Kirim</span><span class="font-mono">${f(t.payment.shippingCost)}</span></div>`:""}
                ${t.payment?.shippingDiscount?`<div class="flex justify-between px-4 text-emerald-600"><span>Diskon Ongkir</span><span class="font-mono">-${f(t.payment.shippingDiscount)}</span></div>`:""}
                ${t.payment?.productDiscount?`<div class="flex justify-between px-4 text-rose-600"><span>Diskon Produk</span><span class="font-mono">-${f(t.payment.productDiscount)}</span></div>`:""}
                ${(()=>{if(!t.payment?.ppnAmount||t.payment.ppnAmount<=0)return"";const r=t.payment.ppnType==="inclusive",a=t.payment.ppnRate||11,m=t.payment.ppnAmount,u=(t.payment.subtotal||0)-(t.payment.productDiscount||0)+(t.payment.shippingCost||0)-(t.payment.shippingDiscount||0),p=t.payment.dppAmount||(r?Math.round(u*100/(100+a)):Math.max(0,u));return`
                    <div class="flex justify-between px-4 text-slate-600"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-mono">${f(p)}</span></div>
                    <div class="flex justify-between px-4 text-amber-600"><span>${r?"Termasuk PPN":"PPN"} (${a}%)</span><span class="font-mono">${r?"":"+"}${f(m)}</span></div>
                    `})()}
                
                <div class="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl mt-4 shadow-md">
                    <span class="font-bold text-base uppercase tracking-widest">Grand Total</span>
                    <span class="font-mono text-xl text-emerald-400 font-bold tracking-tight">${f(t.payment?.grandTotal)}</span>
                </div>
                ${t.payment?.method==="tempo"?`
                <div class="flex justify-between px-4 mt-4 text-emerald-600"><span>Uang Muka (DP)</span><span class="font-mono">${f(t.payment?.tempoDp||0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-4 rounded-xl mt-2 border border-rose-200">
                    <span class="font-bold text-base uppercase tracking-widest">Sisa Tagihan</span>
                    <span class="font-mono text-xl font-bold tracking-tight">${f(t.payment?.tempoBalance||0)}</span>
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
                ${t.items.map((r,a)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${a+1}</td>
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
    `,S("doc-paper-content",i);const c=n("doc-preview-modal");c&&c.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),$("doc-preview-modal"),setTimeout(()=>{n("doc-preview-modal")&&n("doc-preview-modal").classList.remove("opacity-0"),n("doc-preview-modal-box")&&n("doc-preview-modal-box").classList.remove("scale-95"),T()},10)},T=()=>{const e=n("doc-paper-scroll-area"),t=n("doc-paper-content"),s=n("doc-paper-wrapper");if(!e||!t||!s)return;const o=794,l=e.clientWidth-16,c=Math.min(1,l/o);t.style.transform=`translateX(-50%) scale(${c})`,s.style.height=t.offsetHeight*c+"px"};window.addEventListener("resize",()=>{const e=n("doc-preview-modal");e&&!e.classList.contains("hidden")&&T()});const Te=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{n("doc-preview-modal")&&n("doc-preview-modal").classList.add("opacity-0"),n("doc-preview-modal-box")&&n("doc-preview-modal-box").classList.add("scale-95"),setTimeout(()=>g("doc-preview-modal"),300)}):(n("doc-preview-modal")&&n("doc-preview-modal").classList.add("opacity-0"),n("doc-preview-modal-box")&&n("doc-preview-modal-box").classList.add("scale-95"),setTimeout(()=>g("doc-preview-modal"),300))},De=()=>{const e=n("doc-paper-content")?n("doc-paper-content").innerHTML:"",t=window.open("","_blank");if(!t){typeof window.showToast=="function"&&window.showToast("Gagal membuka tab baru. Izinkan pop-up di browser Anda!");return}t.document.write(`
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
    `),t.document.close()},Ce=async e=>{if(!R){y(!0),C(e==="image"?"Membuat Gambar HD...":"Menyusun PDF...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{k(),y(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const t=n("doc-paper-content");if(!t)throw new Error("Elemen dokumen tidak ditemukan.");const s=document.createElement("div");s.style.position="absolute",s.style.top="-9999px",s.style.left="-9999px",s.style.width=t.offsetWidth+"px",s.style.height="max-content",s.style.backgroundColor="#ffffff",s.style.overflow="visible";const o=t.cloneNode(!0);o.id="doc-clone-printing",o.style.margin="0 auto",o.style.boxShadow="none",o.classList.remove("absolute","top-0","left-1/2"),o.style.position="static",o.style.left="auto",o.style.top="auto",o.style.transform="none",o.style.height="max-content",o.style.maxHeight="none",o.style.overflow="visible",o.classList.add("h-max"),s.appendChild(o),document.body.appendChild(s);const i=Array.from(o.querySelectorAll("img"));if(await Promise.all(i.map(a=>a.complete?Promise.resolve():new Promise(m=>{a.addEventListener("load",m,{once:!0}),a.addEventListener("error",m,{once:!0})}))),await new Promise(a=>setTimeout(a,300)),s.offsetWidth===0||s.offsetHeight===0)throw new Error("Dokumen belum sepenuhnya ter-render. Coba lagi.");const l={scale:2,useCORS:!0,backgroundColor:"#ffffff",width:s.offsetWidth,height:s.offsetHeight,windowWidth:s.offsetWidth,windowHeight:s.offsetHeight},c=await html2canvas(s,l);if(document.body.removeChild(s),!c||c.width===0||c.height===0)throw new Error("Gagal menangkap gambar dokumen (canvas kosong).");const r=`${E.toUpperCase()}_${h}`;if(e==="image"){const a=document.createElement("a");a.download=`${r}.png`,a.href=c.toDataURL("image/png",1),a.click(),typeof window.showToast=="function"&&window.showToast("Gambar Berhasil Disimpan!")}else{const a=c.toDataURL("image/jpeg",1);if(!a||!a.startsWith("data:image/jpeg;base64,"))throw new Error("Data gambar hasil export tidak valid.");const m=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,u=210,p=c.height*u/c.width;if(!isFinite(p)||p<=0)throw new Error("Ukuran halaman PDF tidak valid.");const w=new m({orientation:"p",unit:"mm",format:[u,p]});w.addImage(a,"JPEG",0,0,u,p),w.save(`${r}.pdf`),typeof window.showToast=="function"&&window.showToast("File PDF Berhasil Disimpan!")}}catch(t){console.error("Export Error: ",t),typeof window.showToast=="function"&&window.showToast(t&&t.message?`Gagal: ${t.message}`:"Gagal memproses dokumen.");const s=document.getElementById("doc-clone-printing");s&&s.parentElement&&document.body.removeChild(s.parentElement)}finally{k(),y(!1)}}};window.openDocPreview=Se;window.fitDocPreview=T;window.closeDocPreviewModal=Te;window.printDocA4=De;window.exportDocFile=Ce;export{ut as $,ae as A,Ze as B,Q as C,Y as D,Z as E,X as F,ee as G,te as H,ze as I,_e as J,Je as K,Qe as L,Xe as M,Ye as N,H as O,C as P,k as Q,fe as R,gt as S,be as T,ht as U,we as V,vt as W,ve as X,xt as Y,v as Z,Oe as _,b as a,Ae as a0,R as a1,y as a2,h as a3,pt as a4,F as a5,xe as a6,he as a7,wt as a8,D as a9,ie as aA,le as aB,ce as aC,pe as aD,ct as aE,ke as aF,He as aG,Ve as aH,at as aI,it as aJ,rt as aK,dt as aL,bt as aM,Me as aa,Le as ab,U as ac,K as ad,mt as ae,tt as af,st as ag,V as ah,ft as ai,qe as aj,Ke as ak,z as al,_ as am,ge as an,A as ao,Ge as ap,We as aq,Re as ar,je as as,ye as at,Ue as au,Fe as av,J as aw,et as ax,oe as ay,ne as az,B as b,M as c,P as d,n as e,f,$ as g,g as h,S as i,d as j,Ee as k,Ne as l,O as m,Ie as n,re as o,de as p,G as q,me as r,Be as s,lt as t,nt as u,ot as v,I as w,ue as x,N as y,se as z};
