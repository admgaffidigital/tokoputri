const o=e=>document.getElementById(e),$=e=>{const t=o(e);t&&t.classList.remove("hidden")},g=e=>{const t=o(e);t&&t.classList.add("hidden")},O=(e,t,s)=>{const n=o(e);n&&n.classList.toggle(t,s)},P=(e,t)=>{const s=o(e);s&&(s.innerText=t)},D=(e,t)=>{const s=o(e);s&&(s.innerHTML=t)},E=(e,t)=>{const s=o(e);s&&(s.value=t)},N=e=>{const t=o(e);return t?t.value:""},U=e=>{try{return localStorage.getItem(e)}catch{return null}},H=(e,t)=>{try{localStorage.setItem(e,t)}catch{}},d=e=>e==null?"":e.toString().replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]),f=e=>{const t=Number(e);return isNaN(t)||e===null?"Rp 0":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(Math.abs(t)).replace(/^/,t<0?"-":"")},G=e=>{if(typeof e!="string")return e;const t=e.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);return t?`https://lh3.googleusercontent.com/d/${t[1]}`:e},F=e=>{if(!e||typeof e!="string")return null;const t=e.trim();if(/^[a-zA-Z0-9_-]{11}$/.test(t))return t;const s=t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);return s?s[1]:null},T=e=>{if(typeof e!="string"||!e.trim())return null;const t=e.trim(),s=F(t);if(s)return{type:"youtube",id:s,embedUrl:`https://www.youtube.com/embed/${s}?autoplay=1&mute=1&muted=1&loop=1&playlist=${s}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1`};const n=t.match(/(?:drive\.google\.com.*(?:id=|\/d\/)|googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/);if(n&&n[1]){const r=n[1];return{type:"gdrive",id:r,streamUrl:`https://drive.google.com/uc?export=download&id=${r}`,streamUrl2:`https://docs.google.com/uc?export=download&id=${r}`,directUrl:`https://drive.google.com/uc?export=download&id=${r}`,embedUrl:`https://drive.google.com/file/d/${r}/preview?autoplay=1`}}return{type:"direct",directUrl:t,embedUrl:t}},Se=e=>{const t=T(e);return t?t.embedUrl:e},Te=e=>{const t=T(e);return t?t.embedUrl:e},Ce=(e,t)=>typeof e!="string"?e:e.includes("lh3.googleusercontent.com/d/")?`${e.split("=")[0]}=${t}`:e,Le=e=>e?e.status==="ready"?"(Dikirim Bersama Pesanan)":e.status==="waiting_stock"?"(Stok Kosong - Ditunda)":"(Menunggu Konfirmasi)":"",Me=(e,t,s,n)=>{document.title=e||"Toko Putri";const r=(l,p,i=!1)=>{const a=i?"property":"name";let c=document.querySelector(`meta[${a}="${l}"]`);c||(c=document.createElement("meta"),c.setAttribute(a,l),document.head.appendChild(c)),c.setAttribute("content",p)};t&&r("description",t),e&&r("og:title",e,!0),t&&r("og:description",t,!0),s&&r("og:image",s,!0),n&&r("og:url",n,!0)},Ie=(e,t)=>{let s=document.getElementById(e);s||(s=document.createElement("script"),s.id=e,s.type="application/ld+json",document.head.appendChild(s)),s.textContent=JSON.stringify(t)},C=e=>{e&&P("loader-text",e);const t=o("global-loader");t&&(t.style.display="flex")},k=()=>{const e=o("global-loader");e&&(e.style.display="none")},Ae=(e,t,s,n)=>{typeof window.showToast=="function"&&window.showToast(e,t,s,n)},Re=(e,t,s,n)=>{typeof window.showConfirm=="function"&&window.showConfirm(e,t,s,n)},x={};window.loadedScripts=x;const je=(e,t)=>t&&t()?Promise.resolve():(x[e]||(x[e]=new Promise((s,n)=>{const r=document.createElement("script");r.src=e,r.onload=()=>s(),r.onerror=()=>{delete x[e],n(new Error("Gagal memuat: "+e))},document.head.appendChild(r)})),x[e]),K=e=>{let t=(e||"").toString().replace(/\D/g,"");return t?(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),t):""};window.normalizeWA=K;window.sLoad=C;window.hLoad=k;window.el=o;window.show=$;window.hide=g;window.toggleCls=O;window.setIn=P;window.setH=D;window.setV=E;window.getV=N;window.esc=d;window.fixD=G;window.fCur=f;window.sL=U;window.ssL=H;const W={store:{name:"Toko Putri",slogan:"Toko Online & Kasir Resmi",logo:"fa-store",wa:"",address:"",lat:"-7.82308507053985",lng:"112.0988374794464",costPerKm:0,isDeliveryEnabled:!0,isPickupEnabled:!0,freeShippingMinSpendEnabled:!1,freeShippingMinSpendAmount:0,allProductsIcon:"",allBrandsIcon:"",categoryStyle:"text",brandStyle:"image",showCategories:!0,showBrands:!0,themeColor:"#10b981",uiTheme:"emerald",bgStyle:"minimalist",bgCustomUrl:"",showRewardCatalog:!0,useStock:!1,ppnEnabled:!1,ppnType:"exclusive",ppnRate:11,terms:"",privacy:""},payment:{qrisUrl:""},config:{gasUrl:""},banks:[],banners:[],categories:[],brands:[],products:[],vouchers:[],colors:[],rewards:[],faqs:[],customers:[],changelog:[],taxSettings:{companyName:"",npwp:"",taxScheme:"umkm_final",customTaxRate:.5,monthlyExpenses:{},balanceSheet:{kas:0,piutang:0,hutang:0,modalDisetor:0}}};let b=JSON.parse(JSON.stringify(W)),L=[],M=[],I=[];try{const e=localStorage.getItem("freshmart_cart");e&&(L=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_wishlist");e&&(M=JSON.parse(e)||[])}catch{}try{const e=localStorage.getItem("freshmart_my_orders");e&&(I=JSON.parse(e)||[])}catch{}let B={name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""},V=null,q=null,_=null,z="Semua Produk",J="Semua Merek",Q="",Z="newest",X="grid",Y=1,ee=12,te="orders",se="",ae=null,oe=null,ne=0,ie=[],re=[],de=[],le=1,ce=[],pe=null,me=null,ue=null,v=[],fe=[],h=null,be=null,A=!1,we="all",xe="today",ge=null,he=null;const Oe=e=>{ge=e},Ee=e=>{b=e},Ne=e=>{L=e},Ue=e=>{M=e},He=e=>{I=e},Ge=e=>{B=e},Fe=e=>{V=e},Ke=e=>{q=e},We=e=>{_=e},Be=e=>{z=e},Ve=e=>{J=e},qe=e=>{Q=e},_e=e=>{Z=e},ze=e=>{X=e},Je=e=>{Y=e},Qe=e=>{ee=e},Ze=e=>{te=e},Xe=e=>{se=e},Ye=e=>{ae=e},et=e=>{oe=e},tt=e=>{ne=e},st=e=>{ie=e},at=e=>{re=e},ot=e=>{de=e},nt=e=>{le=e},it=e=>{ce=e},rt=e=>{v=e},dt=e=>{fe=e},lt=e=>{h=e},ct=e=>{be=e},y=e=>{A=e},pt=e=>{he=e},mt=e=>{we=e},ut=e=>{xe=e},ft=e=>{pe=e},bt=e=>{me=e},wt=e=>{ue=e},R=()=>{const e=v.find(a=>a.orderId===h);if(!e)return;const t=e.dateString?new Date(e.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",s=b.store.name||"Toko",n=b.store.wa||"",r=(a,c,u=32)=>{const m=u-a.length-c.length;return a+(m>0?" ".repeat(m):" ")+c};let l=`<div class="text-center font-bold" style="font-size:13px;margin-bottom:2px;">${d(s)}</div>`;if(n&&(l+=`<div class="text-center" style="margin-bottom:4px;">WA: ${d(n)}</div>`),l+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">Order: #${e.orderId}</div><div style="white-space:pre;">Tgl  : ${t}</div><div style="white-space:pre;">Plg  : ${d(e.customer?.name||"Guest").substring(0,20)}</div><div style="white-space:pre;">Tipe : ${e.customer?.deliveryMethod==="delivery"?"Dikirim":"Ambil di Toko"}</div><div class="border-b border-dashed border-black my-2"></div>`,e.customer?.note&&(l+=`<div style="white-space:pre-wrap;word-break:break-all;">Cat: ${d(e.customer.note)}</div><div class="border-b border-dashed border-black my-2"></div>`),e.items.forEach(a=>{let c=a.variantName?` (${d(a.variantName)}${a.colorCode?" "+d(a.colorCode):""})`:"";const u=(d(a.name)+c+(a.poTime?" [PO]":"")).substring(0,32),m=`${parseFloat(a.qty)} ${d(a.unit||"pcs")} x ${a.effectivePrice.toLocaleString("id-ID")}`,w=(parseFloat(a.qty)*a.effectivePrice).toLocaleString("id-ID");l+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${u}</div><div style="white-space:pre;font-size:11px;">${r(m,w)}</div>`,a.poTime&&(l+=`<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${d(a.poTime)}</div>`)}),l+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">${r("Subtotal",(e.payment?.subtotal||0).toLocaleString("id-ID"))}</div>`,e.customer?.deliveryMethod==="delivery"&&(l+=`<div style="white-space:pre;">${r("Ongkir",(e.payment?.shippingCost||0).toLocaleString("id-ID"))}</div>`),e.payment?.shippingDiscount&&(l+=`<div style="white-space:pre;">${r("Pot.Ongkir",`-${e.payment.shippingDiscount.toLocaleString("id-ID")}`)}</div>`),e.payment?.productDiscount&&(l+=`<div style="white-space:pre;">${r("Pot.Harga",`-${e.payment.productDiscount.toLocaleString("id-ID")}`)}</div>`),e.payment?.ppnAmount&&e.payment.ppnAmount>0){const a=e.payment.ppnType==="inclusive",c=e.payment.ppnRate||11,u=e.payment.ppnAmount||0,m=(e.payment.subtotal||0)-(e.payment.productDiscount||0)+(e.payment.shippingCost||0)-(e.payment.shippingDiscount||0),w=e.payment.dppAmount||(a?Math.round(m*100/(100+c)):Math.max(0,m));l+=`<div style="white-space:pre;">${r("DPP",w.toLocaleString("id-ID"))}</div>`,l+=`<div style="white-space:pre;">${r(`${a?"Inc. PPN":"PPN"} (${c}%)`,(a?"":"+")+u.toLocaleString("id-ID"))}</div>`}l+=`<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-weight:bold;font-size:12px;">${r("TOTAL","Rp "+(e.payment?.grandTotal||0).toLocaleString("id-ID"))}</div><div style="white-space:pre;">${r("Bayar:",String(e.payment?.method||"").toUpperCase())}</div>`,(e.pointsEarned>0||e.finalMemberPoints!==void 0)&&(l+='<div class="border-b border-dashed border-black my-2"></div>',e.pointsEarned>0&&(l+=`<div style="white-space:pre;">${r("Poin Didapat:","+"+e.pointsEarned)}</div>`),e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null&&(l+=`<div style="white-space:pre;font-weight:bold;">${r("Saldo Poin:",String(e.finalMemberPoints))}</div>`),e.claimedReward&&(l+=`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;margin-top:2px;">HADIAH: ${d(e.claimedReward.name)}</div><div style="white-space:pre;font-size:10px;">(${e.claimedReward.status==="ready"?"Kirim bersama pesanan":e.claimedReward.status==="waiting_stock"?"Stok kosong-ditunda":"Menunggu konfirmasi"})</div>`)),e.items.some(a=>a.poTime&&a.poTime!=="")&&(l+='<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>'),l+='<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;">Terima Kasih</div><div class="border-b border-dashed border-black my-2"></div><div style="height:15px;"></div>',D("receipt-paper-content",l);const i=o("receipt-preview-modal");i&&i.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("receipt"),$("receipt-preview-modal"),setTimeout(()=>{o("receipt-preview-modal")&&o("receipt-preview-modal").classList.remove("opacity-0"),o("receipt-preview-modal-box")&&o("receipt-preview-modal-box").classList.remove("scale-95")},10)},ve=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("receipt",e,()=>{o("receipt-preview-modal")&&o("receipt-preview-modal").classList.add("opacity-0"),o("receipt-preview-modal-box")&&o("receipt-preview-modal-box").classList.add("scale-95"),setTimeout(()=>g("receipt-preview-modal"),300)}):(o("receipt-preview-modal")&&o("receipt-preview-modal").classList.add("opacity-0"),o("receipt-preview-modal-box")&&o("receipt-preview-modal-box").classList.add("scale-95"),setTimeout(()=>g("receipt-preview-modal"),300))},ye=()=>{if(!v.find(n=>n.orderId===h))return;const t=o("receipt-paper-content")?o("receipt-paper-content").innerHTML:"",s=o("thermal-print-section");s&&(s.innerHTML=t,window.print())};window.openReceiptPreview=R;window.closeReceiptPreviewModal=ve;window.executePrintReceipt=ye;window.checkProPrint=()=>{R()};let j="invoice";const ke=e=>{j=e;const t=v.find(i=>i.orderId===h);if(!t)return;P("doc-modal-title",e==="invoice"?"Preview Faktur Invoice":"Preview Surat Jalan");const s=t.dateString?new Date(t.dateString).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric"}):"";let n="";b.store.logo&&(b.store.logo.includes("http")||b.store.logo.includes("data:"))?n=`<img loading="eager" src="${d(b.store.logo)}" class="w-16 h-16 object-contain">`:n='<div class="w-16 h-16 primary-bg flex items-center justify-center rounded-xl text-white"><i class="fa-solid fa-store text-3xl"></i></div>';let r=`
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${n}
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
    `;if(e==="invoice"?r+=`
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
                ${t.items.map((i,a)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${a+1}</td>
                    <td class="py-4 px-4 font-bold flex items-center gap-2">
                        ${d(i.name)} 
                        ${i.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${d(i.variantName)}</span> ${i.colorCode?`<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${d(i.colorCode)};"></span>`:""}`:""}
                        ${i.poTime?`<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${d(i.poTime)}</span>`:""}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-slate-700">${parseFloat(i.qty)} <span class="text-[10px] font-bold text-slate-400 uppercase">${d(i.unit||"pcs")}</span></td>
                    <td class="py-4 px-4 text-right font-mono font-medium">${f(i.effectivePrice)}</td>
                    <td class="py-4 px-4 text-right font-mono font-bold">${f(i.effectivePrice*parseFloat(i.qty))}</td>
                </tr>`).join("")}
            </tbody>
        </table>

        <div class="flex justify-end mb-10">
            <div class="w-1/2 md:w-[45%] space-y-3 text-sm font-bold text-slate-700">
                <div class="flex justify-between px-4"><span>Subtotal Produk</span><span class="font-mono">${f(t.payment?.subtotal)}</span></div>
                ${t.payment?.shippingCost?`<div class="flex justify-between px-4"><span>Ongkos Kirim</span><span class="font-mono">${f(t.payment.shippingCost)}</span></div>`:""}
                ${t.payment?.shippingDiscount?`<div class="flex justify-between px-4 text-emerald-600"><span>Diskon Ongkir</span><span class="font-mono">-${f(t.payment.shippingDiscount)}</span></div>`:""}
                ${t.payment?.productDiscount?`<div class="flex justify-between px-4 text-rose-600"><span>Diskon Produk</span><span class="font-mono">-${f(t.payment.productDiscount)}</span></div>`:""}
                ${(()=>{if(!t.payment?.ppnAmount||t.payment.ppnAmount<=0)return"";const i=t.payment.ppnType==="inclusive",a=t.payment.ppnRate||11,c=t.payment.ppnAmount,u=(t.payment.subtotal||0)-(t.payment.productDiscount||0)+(t.payment.shippingCost||0)-(t.payment.shippingDiscount||0),m=t.payment.dppAmount||(i?Math.round(u*100/(100+a)):Math.max(0,u));return`
                    <div class="flex justify-between px-4 text-slate-600"><span>DPP (Dasar Pengenaan Pajak)</span><span class="font-mono">${f(m)}</span></div>
                    <div class="flex justify-between px-4 text-amber-600"><span>${i?"Termasuk PPN":"PPN"} (${a}%)</span><span class="font-mono">${i?"":"+"}${f(c)}</span></div>
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
        </div>`:r+=`
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
                ${t.items.map((i,a)=>`
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${a+1}</td>
                    <td class="py-4 px-4 font-bold uppercase flex items-center gap-2">
                        ${d(i.name)} 
                        ${i.variantName?`<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${d(i.variantName)}</span> ${i.colorCode?`<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${d(i.colorCode)};"></span>`:""}`:""}
                        ${i.poTime?`<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${d(i.poTime)}</span>`:""}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-lg text-slate-800">${parseFloat(i.qty)}</td>
                    <td class="py-4 px-4 text-center text-slate-500 font-bold uppercase text-xs">${d(i.unit||"pcs")}</td>
                    <td class="py-4 px-4 text-center"><div class="w-5 h-5 border-2 border-slate-300 mx-auto rounded shadow-inner"></div></td>
                </tr>`).join("")}
            </tbody>
        </table>
        `,(t.pointsEarned>0||t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null)&&(r+=`
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5 flex items-center gap-6">
            <div class="w-10 h-10 rounded-xl bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
            ${t.pointsEarned>0?`<div><p class="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-lg text-amber-700">+${t.pointsEarned}</p></div>`:""}
            ${t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null?`<div><p class="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Terkumpul</p><p class="font-bold text-lg text-amber-700">${t.finalMemberPoints}</p></div>`:""}
        </div>`),t.claimedReward){const i=t.claimedReward.status==="ready"?"SERTAKAN BERSAMA PENGIRIMAN INI":t.claimedReward.status==="waiting_stock"?"STOK KOSONG — KIRIM SUSULAN":"MENUNGGU KONFIRMASI GUDANG";r+=`
        <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-5 mb-8 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                <div>
                    <p class="text-[10px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${t.claimedReward.pointsCost} Poin)</p>
                    <p class="font-bold text-base text-violet-800 uppercase">${d(t.claimedReward.name)}</p>
                    ${t.claimedReward.note?`<p class="text-xs italic text-violet-600 mt-1">"${d(t.claimedReward.note)}"</p>`:""}
                </div>
            </div>
            <span class="text-[10px] font-bold px-3 py-2 rounded-xl bg-violet-600 text-white uppercase tracking-widest text-center shrink-0">${i}</span>
        </div>`}t.payment?.method==="tempo"&&(r+=`
        <div class="mt-6 mb-8 border border-pink-200 bg-pink-50 p-4 rounded-xl text-left">
            <h4 class="font-bold text-pink-700 text-xs uppercase tracking-widest mb-1"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo</h4>
            <p class="text-[10px] text-pink-600 font-bold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${t.payment.tempoDueDate?new Date(t.payment.tempoDueDate).toLocaleDateString("id-ID"):"-"}). Keterlambatan pembayaran akan dikenakan denda sebesar 1% dari sisa tagihan untuk setiap harinya.</p>
        </div>`),t.items.some(i=>i.poTime&&i.poTime!=="")&&(r+=`
        <div class="mt-6 mb-8 border border-amber-200 bg-amber-50 p-4 rounded-xl text-left flex gap-3 items-start">
            <i class="fa-solid fa-clock text-amber-500 mt-0.5 animate-pulse"></i>
            <div>
                <h4 class="font-bold text-amber-700 text-xs uppercase tracking-widest mb-1">Informasi Produk Pre-Order (PO)</h4>
                <p class="text-[10px] text-amber-600 font-bold leading-relaxed">Pesanan ini mengandung produk Pre-Order (PO). Khusus untuk produk berlabel PO akan dikirimkan menyusul tanpa dikenakan biaya tambahan.</p>
            </div>
        </div>`),r+=`
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
    `,D("doc-paper-content",r);const p=o("doc-preview-modal");p&&p.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("docPreview"),$("doc-preview-modal"),setTimeout(()=>{o("doc-preview-modal")&&o("doc-preview-modal").classList.remove("opacity-0"),o("doc-preview-modal-box")&&o("doc-preview-modal-box").classList.remove("scale-95"),S()},10)},S=()=>{const e=o("doc-paper-scroll-area"),t=o("doc-paper-content"),s=o("doc-paper-wrapper");if(!e||!t||!s)return;const n=794,l=e.clientWidth-16,p=Math.min(1,l/n);t.style.transform=`translateX(-50%) scale(${p})`,s.style.height=t.offsetHeight*p+"px"};window.addEventListener("resize",()=>{const e=o("doc-preview-modal");e&&!e.classList.contains("hidden")&&S()});const $e=(e=!1)=>{typeof window.requestCloseModal=="function"?window.requestCloseModal("docPreview",e,()=>{o("doc-preview-modal")&&o("doc-preview-modal").classList.add("opacity-0"),o("doc-preview-modal-box")&&o("doc-preview-modal-box").classList.add("scale-95"),setTimeout(()=>g("doc-preview-modal"),300)}):(o("doc-preview-modal")&&o("doc-preview-modal").classList.add("opacity-0"),o("doc-preview-modal-box")&&o("doc-preview-modal-box").classList.add("scale-95"),setTimeout(()=>g("doc-preview-modal"),300))},Pe=()=>{const e=o("doc-paper-content")?o("doc-paper-content").innerHTML:"",t=window.open("","_blank");if(!t){typeof window.showToast=="function"&&window.showToast("Gagal membuka tab baru. Izinkan pop-up di browser Anda!");return}t.document.write(`
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
    `),t.document.close()},De=async e=>{if(!A){y(!0),C(e==="image"?"Membuat Gambar HD...":"Menyusun PDF...");try{typeof window.ensureScriptLoaded=="function"&&await Promise.all([window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",()=>typeof window.jspdf<"u"||typeof window.jsPDF<"u")])}catch{k(),y(!1),typeof window.showToast=="function"&&window.showToast("Gagal memuat modul export. Cek koneksi internet Anda.");return}try{const t=o("doc-paper-content");if(!t)throw new Error("Elemen dokumen tidak ditemukan.");const s=document.createElement("div");s.style.position="absolute",s.style.top="-9999px",s.style.left="-9999px",s.style.width=t.offsetWidth+"px",s.style.height="max-content",s.style.backgroundColor="#ffffff",s.style.overflow="visible";const n=t.cloneNode(!0);n.id="doc-clone-printing",n.style.margin="0 auto",n.style.boxShadow="none",n.classList.remove("absolute","top-0","left-1/2"),n.style.position="static",n.style.left="auto",n.style.top="auto",n.style.transform="none",n.style.height="max-content",n.style.maxHeight="none",n.style.overflow="visible",n.classList.add("h-max"),s.appendChild(n),document.body.appendChild(s);const r=Array.from(n.querySelectorAll("img"));if(await Promise.all(r.map(a=>a.complete?Promise.resolve():new Promise(c=>{a.addEventListener("load",c,{once:!0}),a.addEventListener("error",c,{once:!0})}))),await new Promise(a=>setTimeout(a,300)),s.offsetWidth===0||s.offsetHeight===0)throw new Error("Dokumen belum sepenuhnya ter-render. Coba lagi.");const l={scale:2,useCORS:!0,backgroundColor:"#ffffff",width:s.offsetWidth,height:s.offsetHeight,windowWidth:s.offsetWidth,windowHeight:s.offsetHeight},p=await html2canvas(s,l);if(document.body.removeChild(s),!p||p.width===0||p.height===0)throw new Error("Gagal menangkap gambar dokumen (canvas kosong).");const i=`${j.toUpperCase()}_${h}`;if(e==="image"){const a=document.createElement("a");a.download=`${i}.png`,a.href=p.toDataURL("image/png",1),a.click(),typeof window.showToast=="function"&&window.showToast("Gambar Berhasil Disimpan!")}else{const a=p.toDataURL("image/jpeg",1);if(!a||!a.startsWith("data:image/jpeg;base64,"))throw new Error("Data gambar hasil export tidak valid.");const c=window.jspdf&&window.jspdf.jsPDF?window.jspdf.jsPDF:window.jsPDF,u=210,m=p.height*u/p.width;if(!isFinite(m)||m<=0)throw new Error("Ukuran halaman PDF tidak valid.");const w=new c({orientation:"p",unit:"mm",format:[u,m]});w.addImage(a,"JPEG",0,0,u,m),w.save(`${i}.pdf`),typeof window.showToast=="function"&&window.showToast("File PDF Berhasil Disimpan!")}}catch(t){console.error("Export Error: ",t),typeof window.showToast=="function"&&window.showToast(t&&t.message?`Gagal: ${t.message}`:"Gagal memproses dokumen.");const s=document.getElementById("doc-clone-printing");s&&s.parentElement&&document.body.removeChild(s.parentElement)}finally{k(),y(!1)}}};window.openDocPreview=ke;window.fitDocPreview=S;window.closeDocPreviewModal=$e;window.printDocA4=Pe;window.exportDocFile=De;export{T as $,qe as A,_e as B,ze as C,E as D,N as E,C as F,k as G,pe as H,ft as I,me as J,bt as K,ue as L,wt as M,xe as N,ut as O,v as P,je as Q,lt as R,Le as S,A as T,y as U,h as V,rt as W,G as X,fe as Y,we as Z,mt as _,b as a,Te as a0,Se as a1,U as a2,W as a3,dt as a4,Ze as a5,Xe as a6,B as a7,ct as a8,Fe as a9,re as aA,de as aB,it as aC,he as aD,Oe as aE,We as aF,Ye as aG,st as aH,at as aI,ot as aJ,pt as aK,Ke as aa,V as ab,q as ac,be as ad,I as ae,He as af,Ge as ag,oe as ah,ne as ai,F as aj,le as ak,nt as al,tt as am,et as an,ce as ao,Me as ap,Ie as aq,ge as ar,Ee as as,Ue as at,_ as au,Qe as av,te as aw,se as ax,ae as ay,ie as az,H as b,L as c,P as d,o as e,f,$ as g,g as h,D as i,d as j,Ae as k,Re as l,Y as m,ee as n,Ce as o,Je as p,z as q,J as r,Ne as s,O as t,Q as u,Z as v,M as w,X as x,Be as y,Ve as z};
