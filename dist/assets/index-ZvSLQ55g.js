const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/module-admin-O131Bx8L.js","assets/module-print-B46u5dXP.js","assets/vendor-firebase-core-D2OF5R23.js","assets/vendor-firebase-db-BIUZcnOd.js","assets/module-pos-C4P3NrE3.js","assets/module-member-DMlLXnT8.js","assets/module-faq-DWvp31M1.js","assets/vendor-sortable-DzmX_rHT.js"])))=>i.map(i=>d[i]);
import{a as m,g as ke,d as l,e as n,aP as g,j as Pe,h as E,a2 as ne,c as V,f as h,a0 as ae,b as we,i as w,a9 as Vt,a8 as Wt,y as Ae,s as fe,T as nt,aL as Ye,ag as Ge,U as ue,l as ve,n as oe,p as D,q,t as j,aQ as We,w as Xe,af as $t,F as Fe,aR as Dt,x as Le,k as T,m as lt,A as Et,Z as dt,G as zt,Y as Jt,o as $e,v as De,r as ye,aj as Me,ae as Ee,aB as Ft,au as ct,aD as Lt,aw as et,ar as Qt,aS as Zt,av as tt,aT as Yt,W as Xt,aU as ea,aV as ta,am as aa,aH as sa,aJ as ra,aI as ia,aW as ht,aX as Ct,_ as qe,z as ze,O as Be,E as Je,R as Ke,P as kt,a1 as oa,aK as pt,aM as na,aY as la,aZ as da,a_ as ca,a$ as pa,ah as ua,b0 as ma,aE as fa,ax as ba,aF as wa,az as xa,aG as ga,aA as ha,as as ka,b1 as va,at as ya,b2 as Pa,b3 as Ta,b4 as Sa,aq as Ma,ak as Aa,ap as $a,al as Da,b5 as Ea,b6 as Fa,b7 as La,ao as Ca,an as Ia,b8 as Ra,I as Ba,H as Oa,K as ja,J as _a,M as Ua,L as Ka,$ as Na,u as Ga,ac as Ha,a5 as qa,X as Va,V as Wa,b9 as za,a7 as Ja,a6 as Qa,Q as Za,N as Ya,ba as Xa,bb as es,S as ts,ad as as,bc as ss,bd as rs,be as is,bf as os,bg as ns}from"./module-print-B46u5dXP.js";import{f as Oe}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import{p as ls}from"./vendor-utils-DqNA57iZ.js";import{g as It,v as ds,w as vt,h as cs,u as ps,x as us,e as Rt,y as ms,f as Bt,z as fs,A as bs,q as ws,B as xs,C as gs,D as yt,a as Pt,d as hs,E as ks,F as vs,G as ys,H as Ps,I as Ts,J as Ss,K as Ms,L as As}from"./module-pos-C4P3NrE3.js";import{G as $s,a as Ot,u as Ds}from"./module-member-DMlLXnT8.js";import{i as Es,a as Fs,b as Ls,d as Cs}from"./module-admin-O131Bx8L.js";import{a as at,c as Is}from"./module-faq-DWvp31M1.js";import"./vendor-sortable-DzmX_rHT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();const Rs=()=>{const e=n("toggle-droppoint"),t=n("droppoint-form");if(!(!e||!t))if(e.checked)t.classList.remove("hidden");else{t.classList.add("hidden"),l.dropPoint=null;const a=n("dp-location-status");a&&a.classList.add("hidden");const s=n("btn-dp-location");n("text-dp-location"),s&&(s.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>')}},Bs=()=>{if(!navigator.geolocation){typeof window.showToast=="function"&&window.showToast("GPS tidak didukung");return}const e=n("btn-dp-location");e&&(e.innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i> Mengambil GPS...'),navigator.geolocation.getCurrentPosition(t=>{l.dropPoint||(l.dropPoint={}),l.dropPoint.lat=t.coords.latitude,l.dropPoint.lng=t.coords.longitude;const a=n("dp-location-status");a&&a.classList.remove("hidden"),e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">GPS Berhasil! Tap untuk Update</span>'),typeof window.showToast=="function"&&window.showToast("GPS Lokasi Tujuan Berhasil!")},()=>{e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>'),typeof window.showToast=="function"&&window.showToast("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})},jt=e=>{if(!e||e.trim().length<5)return;const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){l.dropPoint||(l.dropPoint={}),l.dropPoint.lat=parseFloat(a.lat),l.dropPoint.lng=parseFloat(a.lng);const s=n("dp-location-status");s&&s.classList.remove("hidden"),typeof window.showToast=="function"&&window.showToast("Koordinat Lokasi Tujuan berhasil!")}},Os=async()=>{try{const e=await navigator.clipboard.readText(),t=n("dp-maps-input");t&&(t.value=e,jt(e))}catch{typeof window.showToast=="function"&&window.showToast("Gagal membaca clipboard")}},js=()=>{if(m.store.isDeliveryEnabled===!1&&m.store.isPickupEnabled===!1){typeof window.showToast=="function"&&window.showToast("Toko tutup!");return}const e=ke("cust-name"),t=(document.querySelector('input[name="delivery-method"]:checked')||{}).value;if(!e||!t){typeof window.showToast=="function"&&window.showToast("Lengkapi form nama!");return}let a=ke("cust-wa").replace(/\D/g,"");if(!a||a.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp wajib diisi! (min. 9 digit)");return}if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),l.name=e,l.deliveryMethod=t,l.note=ke("cust-note"),l.wa=a,t==="delivery"){if(l.address=ke("cust-address"),!l.lat||!l.lng){const o=n("cust-maps-input")?.value;o&&typeof window.handleCustomerMapsInput=="function"&&window.handleCustomerMapsInput(o)}if(!l.address||!l.lat||!l.lng){typeof window.showToast=="function"&&window.showToast("Alamat & GPS wajib!");return}const s=typeof window.getDist=="function"?window.getDist:()=>0;l.distance=s(parseFloat(m.store.lat||0),parseFloat(m.store.lng||0),l.lat,l.lng)||0;const i=n("toggle-droppoint");if(i&&i.checked){let o=ke("dp-receiver-name").trim(),d=ke("dp-receiver-wa").replace(/\D/g,""),c=ke("dp-address").trim();if(!o){typeof window.showToast=="function"&&window.showToast("Nama penerima di lokasi tujuan wajib diisi!");return}if(!d||d.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WA penerima di lokasi tujuan wajib diisi (min. 9 digit)!");return}if(!c){typeof window.showToast=="function"&&window.showToast("Alamat lokasi tujuan wajib diisi!");return}if(!l.dropPoint||!l.dropPoint.lat||!l.dropPoint.lng){typeof window.showToast=="function"&&window.showToast("GPS / Koordinat lokasi tujuan wajib diisi untuk kalkulasi ongkir!");return}d.startsWith("0")?d="62"+d.substring(1):d.startsWith("62")||(d="62"+d),l.dropPoint.name=o,l.dropPoint.wa=d,l.dropPoint.address=c,l.distance=s(parseFloat(m.store.lat||0),parseFloat(m.store.lng||0),l.dropPoint.lat,l.dropPoint.lng)||0}else l.dropPoint=null}else l.address="Ambil di Toko",l.distance=0,l.dropPoint=null;g&&g.type&&g.type.includes("shipping")&&t!=="delivery"&&Pe(null),n("voucher-input")&&!g&&(n("voucher-input").value="",E("voucher-msg-container")),typeof window.changeView=="function"&&window.changeView("view-payment")},ut=()=>{ne("address-container","hidden",(document.querySelector('input[name="delivery-method"]:checked')||{}).value==="pickup")},_t=()=>{const e=n("tnc-checkbox"),t=n("btn-process-order");!e||!t||(e.checked?t.classList.remove("btn-disabled"):t.classList.add("btn-disabled"))},Ut=()=>{if(!V.length){typeof window.showToast=="function"&&window.showToast("Keranjang belanja kosong!"),typeof window.changeView=="function"&&window.changeView("view-catalog",!0);return}if(!l.name){typeof window.showToast=="function"&&window.showToast("Lengkapi data pengiriman terlebih dahulu!"),typeof window.changeView=="function"&&window.changeView("view-checkout",!0);return}const e=typeof window.getEffP=="function"?window.getEffP:p=>p.price||0,t=V.reduce((p,L)=>p+(parseFloat(e(L))||0)*(parseFloat(L.qty)||0),0);let a=0,s=0,i=0;if(l.deliveryMethod==="delivery"&&(a=Math.ceil((parseFloat(l.distance)||0)*(parseFloat(m.store.costPerKm)||0)/500)*500),g&&(g.minPurchase&&parseFloat(g.minPurchase)>0&&t<parseFloat(g.minPurchase)?(Pe(null),E("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast(`Voucher dibatalkan (min. belanja ${h(g.minPurchase)})`)):g.targetProduct&&!V.some(p=>p.id===parseInt(g.targetProduct))&&(Pe(null),E("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast("Voucher dibatalkan (produk khusus dihapus)"))),g){let p=t;if(g.targetProduct&&g.targetProduct!==""){const L=parseInt(g.targetProduct);p=V.filter(J=>J.id===L).reduce((J,K)=>J+(parseFloat(e(K))||0)*(parseFloat(K.qty)||0),0)}if(g.type==="shipping_free")s=a;else if(g.type==="shipping_flat")s=parseFloat(g.value)||0;else if(g.type==="percent"){let L=p*((parseFloat(g.value)||0)/100);g.maxDiscount&&parseFloat(g.maxDiscount)>0&&(L=Math.min(L,parseFloat(g.maxDiscount))),i=L}else i=parseFloat(g.value)||0,i=Math.min(i,p)}const r=(m.store.freeShippingMinSpendEnabled===!0||m.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(m.store.freeShippingMinSpendAmount)||0)>0&&t>=(parseFloat(m.store.freeShippingMinSpendAmount)||0)&&l.deliveryMethod==="delivery";r&&(s=a),s=Math.min(s,a),i=Math.min(i,t);const o=Math.max(0,t-i+(a-s)),c=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(o),b=c.ppnAmount,A=o+c.grandTotalAdd;ae("summary-subtotal",h(t)),ne("summary-shipping-row","hidden",l.deliveryMethod!=="delivery");const R=n("summary-discount-row");if(R)if(i>0||s>0){R.classList.remove("hidden");let p="";i>0&&(p+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Promo</p><p class="text-[13px] font-bold text-rose-500">-${h(i)}</p></div>`),s>0&&(p+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">${r?"Gratis Ongkir (Promo Belanja)":"Diskon Ongkir"}</p><p class="text-[13px] font-bold text-rose-500">-${h(s)}</p></div>`),R.innerHTML=p}else R.classList.add("hidden");l.deliveryMethod==="delivery"&&(ae("summary-shipping",h(a)),ae("summary-distance",`(${l.distance.toFixed(1)}km)`)),ae("summary-total",h(A)),n("btn-total-preview")&&ae("btn-total-preview",h(A));const F=n("summary-ppn-row");if(F)if(c.ppnEnabled&&(b>0||c.ppnShowZero||c.ppnRate===0)){F.classList.remove("hidden");const L=c.ppnRate!==void 0?`${c.ppnRate}%`:"11%",be=c.ppnLabel||(c.ppnType==="inclusive"?`Termasuk PPN (${L})`:`PPN (${L})`);ae("summary-ppn-label",be),c.ppnType==="inclusive"?ae("summary-ppn",h(b)):ae("summary-ppn",b>0?`+${h(b)}`:h(0))}else F.classList.add("hidden");ae("payment-cust-name",l.name||"-"),n("payment-cust-wa")&&(n("payment-cust-wa").textContent=l.wa?"+"+l.wa:"-"),l.dropPoint&&l.dropPoint.lat?ae("payment-cust-method",`Kirim ke Lokasi Berbeda (${l.distance.toFixed(1)}km dari Toko)`):ae("payment-cust-method",l.deliveryMethod==="delivery"?`Dikirim (${l.distance.toFixed(1)}km)`:"Ambil di Toko"),ae("payment-cust-address",l.address||"-");const $=n("payment-droppoint-info");if($)if(l.dropPoint&&l.dropPoint.lat&&l.dropPoint.name){$.classList.remove("hidden"),ae("payment-dp-name",l.dropPoint.name||"-");const p=n("payment-dp-wa");p&&(p.textContent=l.dropPoint.wa?"+"+l.dropPoint.wa:"-"),ae("payment-dp-address",l.dropPoint.address||"-")}else $.classList.add("hidden");we("payment-items-preview",V.map(p=>{const L=p.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${w(p.variantName)}</span>`:"",be=p.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${w(p.poTime)}</span>`:"",J=!!(p.img&&typeof p.img=="string"&&p.img.trim()&&!Vt(p.img)),K=Wt(p,{size:"thumb"});return`
        <div class="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
            <div class="flex items-center gap-3.5 min-w-0">
                <div class="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0 overflow-hidden flex items-center justify-center">
                    ${J?`<img loading="lazy" src="${w(p.img)}" alt="${w(p.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${K}</div>`:K}
                </div>
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate mb-1" title="${w(p.name)}">${w(p.name)}</p>
                    ${p.variantName||p.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${L}
                        ${be}
                    </div>`:""}
                    <p class="text-[11px] text-[var(--color-primary)] font-bold">${parseFloat(p.qty)} ${w(p.unit||"pcs")} x ${h(e(p))}</p>
                </div>
            </div>
            <div class="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap ml-3 shrink-0">${h(e(p)*parseFloat(p.qty))}</div>
        </div>`}).join("")+(Ae?`<div class="flex justify-between items-center bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] p-4 rounded-2xl border border-[var(--color-primary)]/30 shadow-sm min-w-0"><div class="flex items-center gap-3.5 min-w-0"><div class="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div><div class="min-w-0"><p class="text-sm font-bold text-[var(--color-primary)] truncate">${w(Ae.name)}</p><p class="text-[11px] text-[var(--color-primary)] font-bold mt-1"><i class="fa-solid fa-star mr-1"></i>Tukar ${Ae.pointsCost} Poin (Gratis)</p></div></div><button type="button" onclick="if(typeof deselectReward==='function') deselectReward(); rPay();" class="text-[10px] font-bold text-rose-500 uppercase shrink-0 ml-3">Batal</button></div>`:"")),l.note?(ae("payment-note-text",`"${w(l.note)}"`),fe("payment-note-preview")):E("payment-note-preview"),we("dynamic-banks-container",m.banks?.length?m.banks.map(p=>`<div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Bank ${w(p.bankName)}</p><p class="text-lg font-bold text-[var(--color-primary)] tracking-wide">${w(p.bankAccount)}</p><p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1.5">a.n <span class="font-bold text-slate-700 dark:text-white">${w(p.bankOwner)}</span></p></div>`).join(""):'<div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 p-4 rounded-2xl text-center"><p class="text-sm text-rose-500 dark:text-rose-400 font-bold">Rekening belum diatur.</p></div>');const W=n("payment-option-cashier"),le=n("payment-option-cod");if(W&&le){if(l.deliveryMethod==="pickup"){if(fe("payment-option-cashier"),E("payment-option-cod"),(document.querySelector('input[name="payment"]:checked')||{}).value==="cod"){const p=document.querySelector('input[value="cashier"]');p&&(p.checked=!0)}}else{E("payment-option-cashier"),fe("payment-option-cod");const p=(document.querySelector('input[name="payment"]:checked')||{}).value;if(p==="cashier"||!p){const L=document.querySelector('input[value="cod"]');L&&(L.checked=!0)}}typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()}const U=n("tnc-checkbox");U&&(U.checked=!1,_t())},_s=async()=>{if(!n("tnc-checkbox").checked||nt)return;if(window.isAdm){typeof window.showToast=="function"&&window.showToast("Sesi Pengelola Aktif. Silakan keluar akun untuk membuat pesanan online.");return}const e=Ye("freshmart_last_order");if(e&&Date.now()-parseInt(e)<6e4){typeof window.showToast=="function"&&window.showToast("Pesanan sebelumnya sedang kami proses. Mohon beri jeda 1 menit sebelum memesan kembali.");return}const t=typeof window.getEffP=="function"?window.getEffP:r=>r.price||0,a=typeof window.getEffHpp=="function"?window.getEffHpp:()=>0,s=typeof window.getEffPoin=="function"?window.getEffPoin:()=>0;let i=!1;if(V.forEach(r=>{const o=m.products.find(c=>c.id===r.id);if(!o)return;const d=r.variantName?((o.variants||[]).find(c=>c.name===r.variantName)||{}).price??o.price:o.price;d!==void 0&&Math.abs(r.price-d)>1&&(r.price=d,i=!0),r.poin=s(r)}),i){Ge("freshmart_cart",JSON.stringify(V)),typeof window.renderCart=="function"&&window.renderCart(),Ut(),typeof window.showToast=="function"&&window.showToast("Katalog harga telah diperbarui. Mohon periksa kembali rincian belanja Anda.");return}ue(!0),ve("Memproses Pesanan Anda...");try{const r=V.reduce((f,x)=>f+(parseFloat(t(x))||0)*(parseFloat(x.qty)||0),0);let o=0,d=0,c=0;l.deliveryMethod==="delivery"&&(o=Math.ceil((parseFloat(l.distance)||0)*(parseFloat(m.store.costPerKm)||0)/500)*500);const b=m.store.useStock===!0||m.store.useStock==="true";if(b)for(const f of V){const x=m.products.find(y=>y.id===f.id);if(!x||!!(x.poTime&&String(x.poTime).trim()))continue;const M=parseFloat(f.qty)||0;if(f.variantName){const y=(x.variants||[]).find(de=>de.name===f.variantName),C=y?y.stock!=null&&y.stock!==""?y.stock:y.stok!=null&&y.stok!==""?y.stok:null:null,te=C!=null&&!isNaN(parseFloat(C))?parseFloat(C):0;if(te<M){ue(!1),oe(),typeof window.showToast=="function"&&window.showToast(`Persediaan ${f.name} (${f.variantName}) tidak mencukupi (tersisa ${te} unit).`);return}}else{const y=x.stock!=null&&x.stock!==""?x.stock:x.stok!=null&&x.stok!==""?x.stok:null,C=y!=null&&!isNaN(parseFloat(y))?parseFloat(y):0;if(C<M){ue(!1),oe(),typeof window.showToast=="function"&&window.showToast(`Persediaan ${f.name} tidak mencukupi (tersisa ${C} unit).`);return}}}if(g){let f=r;if(g.targetProduct&&g.targetProduct!==""){const x=parseInt(g.targetProduct);f=V.filter(M=>M.id===x).reduce((M,y)=>M+(parseFloat(t(y))||0)*(parseFloat(y.qty)||0),0)}if(g.minPurchase&&parseFloat(g.minPurchase)>0&&r<parseFloat(g.minPurchase))Pe(null);else if(g.targetProduct&&g.targetProduct!==""&&f===0)Pe(null);else if(g.type&&g.type.includes("shipping")&&l.deliveryMethod!=="delivery")Pe(null);else if(g.type==="shipping_free")d=o;else if(g.type==="shipping_flat")d=parseFloat(g.value)||0;else if(g.type==="percent"){let x=f*((parseFloat(g.value)||0)/100);g.maxDiscount&&parseFloat(g.maxDiscount)>0&&(x=Math.min(x,parseFloat(g.maxDiscount))),c=x}else c=parseFloat(g.value)||0,c=Math.min(c,f)}const A=(m.store.freeShippingMinSpendEnabled===!0||m.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(m.store.freeShippingMinSpendAmount)||0)>0&&r>=(parseFloat(m.store.freeShippingMinSpendAmount)||0)&&l.deliveryMethod==="delivery";A&&(d=o),d=Math.min(d,o),c=Math.min(c,r);const R=Math.max(0,r-c+(o-d)),$=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(R),W=$.ppnAmount,le=$.dppAmount,U=R+$.grandTotalAdd,p=(document.querySelector('input[name="payment"]:checked')||{}).value,L=parseFloat(document.getElementById("paylater-dp-input")?.value)||0,be=p==="transfer"||p==="qris"||p==="tempo"||p==="paylater"&&L>0,J=window.buktiGDriveUploaded&&window.buktiPaymentUrl&&!window.buktiPaymentUrl.startsWith("data:");if(be&&!J){if(ue(!1),oe(),!window.buktiPaymentFile){typeof window.showToast=="function"&&window.showToast("Mohon lampirkan foto struk / bukti pembayaran terlebih dahulu.");return}typeof window.showToast=="function"&&window.showToast("Sedang menyelesaikan unggahan bukti transaksi. Mohon tunggu...");return}const K="ORD-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase();if(window.buktiPaymentFile&&!window.buktiGDriveUploaded)try{ve("Mengunggah Bukti Pembayaran...");const f=await window.uploadBuktiToFirebase(window.buktiPaymentFile,K);if(f&&!f.startsWith("data:"))window.buktiPaymentUrl=f,window.buktiGDriveUploaded=!0;else{ue(!1),oe(),typeof window.showToast=="function"&&window.showToast("Gagal mengunggah berkas bukti. Silakan pilih kembali foto bukti transfer Anda.");return}ve("Memproses Pesanan Anda...")}catch{ue(!1),oe(),typeof window.showToast=="function"&&window.showToast("Koneksi unggah terganggu. Silakan periksa jaringan internet dan coba kembali.");return}const u={orderId:K,timestamp:Oe.firestore.FieldValue.serverTimestamp(),dateString:new Date().toISOString(),customer:l,isDropPoint:!!(l.dropPoint&&l.dropPoint.lat&&l.dropPoint.name),dropPoint:l.dropPoint&&l.dropPoint.lat&&l.dropPoint.name?{...l.dropPoint}:null,items:V.map(f=>({...f,qty:parseFloat(f.qty),effectivePrice:t(f),poTime:f.poTime||"",hpp:a(f),poin:s(f)})),payment:{method:p,subtotal:r,shippingCost:o,shippingDiscount:d,productDiscount:c,ppnAmount:W,dppAmount:le,ppnRate:$.ppnEnabled?$.ppnRate:0,ppnType:$.ppnEnabled?$.ppnType:"exclusive",ppnEnabled:!!$.ppnEnabled,ppnShowZero:!!$.ppnShowZero,ppnLabel:$.ppnLabel||"",taxNpwp:m.store?.taxNpwp||m.taxSettings?.npwp||"",grandTotal:U,isFreeShippingPromo:A||!1},status:"Baru",buktiPayment:window.buktiPaymentUrl||null};if(p==="tempo"){if(!l.wa){ue(!1),oe(),typeof window.showToast=="function"&&window.showToast("Pembayaran Cash Tempo hanya untuk Member Resmi terdaftar!");return}const f=document.getElementById("tempo-dp-input");let x=f&&parseFloat(f.value)||0;x>U&&(x=U),u.payment.dp=x,u.payment.tempoDp=x,u.payment.tempoBalance=Math.max(0,U-x),u.payment.tempoDueDate=Date.now()+30*24*60*60*1e3,u.payment.paymentStatus=U-x<=0?"lunas":"hutang"}if(p==="paylater"){if(!l.wa||!D||!(D.paylaterActive===!0||D.paylaterActive==="true")){ue(!1),oe(),typeof window.showToast=="function"&&window.showToast("Fitur Putri PayLater belum aktif untuk nomor Anda!");return}const f=parseFloat(D.paylaterLimit)||0,x=Math.max(0,parseFloat(D.paylaterUsed)||0),ee=Math.max(0,f-x),M=document.getElementById("paylater-dp-input");let y=M&&parseFloat(M.value)||0;if(U>ee&&y<U-ee){ue(!1),oe(),typeof window.showToast=="function"&&window.showToast("Limit PayLater tidak cukup! Wajib bayar DP minimal "+h(U-ee));return}const C=Math.min(ee,Math.max(0,U-y));u.payment.method="tempo",u.payment.subMethod="paylater",u.payment.isPaylater=!0,u.payment.paylaterUsed=C,u.payment.dp=y,u.payment.tempoDp=y;const te=D?.paylaterDueDay||5,de=window.selectedCheckoutPaylaterTenor||window.currentPaylaterBreakdown?.tenorKey||"30d",me=It(),Q=ds(C,de,{...me,dueDay:te}),Z=Q.months,ge=Q.totalAdminFee,z=Q.totalServiceFee,re=Q.totalPerMonth,O=Q.schedule;u.payment.paylaterTenor=de,u.payment.paylaterMonths=Z,u.payment.paylaterAdminFee=ge,u.payment.paylaterServiceFee=z,u.payment.paylaterMonthlyInstallment=re,u.payment.paylaterSchedule=O;const ie=Q.grandTotal;u.payment.tempoBalance=ie;const v=O.length>0?O[O.length-1].dueDate:Date.now()+Z*30*24*60*60*1e3;if(u.payment.tempoDueDate=v,u.payment.paymentStatus=ie<=0?"lunas":"hutang",u.isTempo=!0,u.paylaterLimitTracked=!1,C>0){if(D){D.paylaterUsed=Math.max(0,parseFloat(D.paylaterUsed)||0)+C;try{localStorage.setItem("freshmart_current_member",JSON.stringify(D))}catch{}}const N=(D?.phone||l.wa||"").replace(/\D/g,""),Te=N.startsWith("0")?"62"+N.slice(1):N;try{await q.collection("freshmart").doc("cms_data").collection("customers").doc(Te).update({paylaterUsed:Oe.firestore.FieldValue.increment(C)}),u.paylaterLimitTracked=!0}catch(pe){console.warn("[PayLater] Gagal update pemakaian limit di Firestore:",pe.code||pe.message||pe)}}}const xe=q.collection("freshmart_orders").doc(K),S=typeof window.calculateCartPoints=="function"?window.calculateCartPoints(V,m.store):{totalPoints:0,directPoints:0,spendPoints:0},se=S.totalPoints;u.pointsEarned=se,u.pointsBreakdown={direct:S.directPoints,spend:S.spendPoints};const Y=q.collection("freshmart").doc("cms_data"),X=(D?.phone||l.wa||"").replace(/\D/g,""),k=X?X.startsWith("0")?"62"+X.slice(1):X:null,ce=k?Y.collection("customers").doc(k):null,_=!!Ae;let B=null;if(b){const f={};V.forEach(M=>{const y=M.id!=null?M.id.toString():null;if(!y)return;f[y]||(f[y]={main:0,variants:{}});const C=parseFloat(M.qty)||0;M.variantName?f[y].variants[M.variantName]=(f[y].variants[M.variantName]||0)+C:f[y].main+=C});const x=Object.keys(f),ee=x.map(M=>q.collection("freshmart").doc("cms_data").collection("products").doc(M));await q.runTransaction(async M=>{const y=await Promise.all(ee.map(z=>M.get(z))),C=ce?await M.get(ce):null,te=!!(C&&C.exists),de=te&&_?q.collection("freshmart").doc("cms_data").collection("rewards").doc(Ae.id.toString()):null,me=de?await M.get(de):null,Q=[];if(y.forEach((z,re)=>{if(!z.exists)return;const O=z.data(),ie=f[x[re]];if(ie.main>0){const v=parseFloat(O.stock!==void 0?O.stock:0);v<ie.main&&Q.push(`${O.name} (sisa ${v})`)}Object.keys(ie.variants).forEach(v=>{const N=(O.variants||[]).find(pe=>pe.name===v),Te=parseFloat(N&&N.stock!==void 0?N.stock:0);Te<ie.variants[v]&&Q.push(`${O.name} (${v}, sisa ${Te})`)})}),Q.length)throw new Error("STOK_TIDAK_CUKUP: "+Q.join(", "));let Z=null,ge=null;if(te){const z=parseFloat(C.data().points)||0;let re=z;if(_){if(!me||!me.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const O=me.data();if(z<(parseFloat(O.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(O.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");Z=(parseFloat(O.stock)||0)-1,re-=parseFloat(O.pointsCost)||0,u.claimedReward={id:O.id,name:O.name,pointsCost:parseFloat(O.pointsCost)||0,status:"pending",note:""}}re+=se,ge=re,u.pointsEarned=se,u.customerPhone=l.wa,u.finalMemberPoints=ge,u.customerType="Member"}else{if(p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(_)throw new Error("MEMBER_TIDAK_DITEMUKAN");u.pointsEarned=0,u.pointsBreakdown={direct:0,spend:0},u.finalMemberPoints=null,u.customerType="Pelanggan Umum"}if(y.forEach((z,re)=>{if(!z.exists)return;const O=x[re],ie=f[O],v=JSON.parse(JSON.stringify(z.data())),N={};ie.main>0&&(vt(v,ie.main),N.stock=v.stock,v.storeStock!==void 0&&(N.storeStock=v.storeStock),v.warehouseStock!==void 0&&(N.warehouseStock=v.warehouseStock),Array.isArray(v.stockBatches)&&(N.stockBatches=v.stockBatches),v.hpp&&(N.hpp=v.hpp),v.stock===0&&(v.isActive="false",N.isActive="false"),v.totalSold=(parseFloat(v.totalSold)||0)+ie.main,N.totalSold=v.totalSold),Object.keys(ie.variants).length>0&&v.variants&&(Object.keys(ie.variants).forEach(pe=>{const gt=ie.variants[pe];vt(v,gt,pe);const Re=(v.variants||[]).findIndex(qt=>qt.name===pe);Re>-1&&(v.variants[Re].stock===0&&(v.variants[Re].isActive=!1),v.variants[Re].totalSold=(parseFloat(v.variants[Re].totalSold)||0)+gt)}),N.variants=v.variants,N.stock=v.stock,v.storeStock!==void 0&&(N.storeStock=v.storeStock),v.warehouseStock!==void 0&&(N.warehouseStock=v.warehouseStock),Array.isArray(v.stockBatches)&&(N.stockBatches=v.stockBatches));const Te=m.products.findIndex(pe=>pe.id.toString()===O);Te>-1&&(m.products[Te]=v),M.update(ee[re],N)}),M.set(xe,u),te&&ce&&ge!==null){const z=C.data().name||l.name||"Pelanggan Setia";u.customer&&(u.customer.name=z);const re={points:ge,name:z,lastOrderAt:Date.now()};M.set(ce,re,{merge:!0}),B=ge}Z!==null&&M.set(de,{stock:Z},{merge:!0}),M.update(Y,{lastUpdate:Oe.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:x})}),m.lastUpdate=(parseInt(Ye("freshmart_last_update"))||m.lastUpdate||0)+1,Ge("freshmart_last_update",m.lastUpdate.toString()),Ge("freshmart_products",JSON.stringify(m.products))}else if(ce)await q.runTransaction(async f=>{const x=await f.get(ce),ee=x.exists,M=ee&&_?q.collection("freshmart").doc("cms_data").collection("rewards").doc(Ae.id.toString()):null,y=M?await f.get(M):null;let C=null,te=null;if(ee){const de=parseFloat(x.data().points)||0;let me=de;if(_){if(!y||!y.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const Z=y.data();if(de<(parseFloat(Z.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(Z.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");C=(parseFloat(Z.stock)||0)-1,me-=parseFloat(Z.pointsCost)||0,u.claimedReward={id:Z.id,name:Z.name,pointsCost:parseFloat(Z.pointsCost)||0,status:"pending",note:""}}me+=se,te=me,u.pointsEarned=se,u.customerPhone=l.wa,u.finalMemberPoints=te,u.customerType="Member";const Q=x.data().name||l.name||"Pelanggan Setia";u.customer&&(u.customer.name=Q),f.set(ce,{points:te,name:Q,lastOrderAt:Date.now()},{merge:!0}),B=te,C!==null&&f.set(M,{stock:C},{merge:!0})}else{if(p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(_)throw new Error("MEMBER_TIDAK_DITEMUKAN");u.pointsEarned=0,u.pointsBreakdown={direct:0,spend:0},u.finalMemberPoints=null,u.customerType="Pelanggan Umum"}f.set(xe,u)});else{if(u.pointsEarned=0,u.pointsBreakdown={direct:0,spend:0},u.finalMemberPoints=null,u.customerType="Pelanggan Umum",p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");await xe.set(u)}const he={orderId:K,date:u.dateString||new Date().toISOString(),dateString:u.dateString||new Date().toISOString(),total:U,itemCount:V.reduce((f,x)=>f+parseFloat(x.qty),0),status:"Baru",pointsEarned:u.pointsEarned||0,claimedReward:u.claimedReward||null,finalMemberPoints:B,customerType:u.customerType||"Pelanggan Umum",customer:u.customer||l,items:u.items||[],payment:u.payment||{},isTempo:!!u.isTempo};j.unshift(he),We(j),window.currentCustomerOrder=u,window.lastPrintedOrder=u;try{localStorage.setItem("freshmart_my_orders",JSON.stringify(j)),localStorage.setItem("freshmart_last_order",Date.now().toString())}catch{}if(typeof analytics<"u"&&analytics.logEvent("purchase",{transaction_id:K,value:U,currency:"IDR"}),l.wa&&B!==null){const f={id:l.wa,phone:l.wa,name:l.name||"Pelanggan Setia",points:B,paylaterActive:D?D.paylaterActive===!0||D.paylaterActive==="true":!1,paylaterLimit:D&&parseFloat(D.paylaterLimit)||0,paylaterUsed:D?Math.max(0,parseFloat(D.paylaterUsed)||0):0,paylaterDueDay:D&&D.paylaterDueDay||5};Xe(f);try{localStorage.setItem("freshmart_current_member",JSON.stringify(f)),localStorage.setItem("freshmart_member_wa",l.wa)}catch{}typeof window.invalidateMemberCache=="function"&&window.invalidateMemberCache(l.wa)}else{Xe(null);try{localStorage.removeItem("freshmart_current_member")}catch{}}u.claimedReward&&B!==null?typeof window.showToast=="function"&&window.showToast(`Hadiah eksklusif "${u.claimedReward.name}" berhasil ditukarkan! Sisa poin reward Anda: ${B}`):B!==null&&se>0?typeof window.showToast=="function"&&window.showToast(`Pesanan Anda berhasil dikonfirmasi! (+${se} Poin Member terkumpul)`):typeof window.showToast=="function"&&window.showToast("Pesanan Anda berhasil dikonfirmasi dan siap diproses!"),setTimeout(()=>{$t([]),Fe("cust-name",""),Fe("cust-address",""),Fe("cust-maps-input",""),Fe("cust-note",""),Fe("cust-wa",""),window.buktiPaymentUrl=null,window.buktiPaymentFile=null,window.buktiGDriveUploaded=!1;const f=n("bukti-preview-wrap"),x=n("bukti-placeholder");f&&f.classList.add("hidden"),x&&x.classList.remove("hidden"),E("bukti-uploading"),E("bukti-success"),E("bukti-gdrive-error");const ee=n("bukti-file-input");ee&&(ee.value=""),Dt({name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:"",dropPoint:null}),Pe(null),Le(null);const M=n("toggle-droppoint"),y=n("droppoint-form");M&&(M.checked=!1),y&&y.classList.add("hidden");const C=n("dp-location-status");C&&C.classList.add("hidden");const te=n("payment-droppoint-info");te&&te.classList.add("hidden");const de=n("dp-receiver-name");de&&(de.value="");const me=n("dp-receiver-wa");me&&(me.value="");const Q=n("dp-address");Q&&(Q.value="");const Z=n("dp-maps-input");Z&&(Z.value="");const ge=n("btn-dp-location");ge&&(ge.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan Titik GPS Lokasi Proyek</span>');const z=n("member-status-banner");z&&E(z),E("payment-option-tempo"),n("voucher-input")&&(n("voucher-input").value=""),E("voucher-msg-container"),E("location-status"),n("btn-location")&&fe("btn-location");const re=document.querySelector('input[name="delivery-method"][value="delivery"]');re&&(re.checked=!0,ut());const O=document.querySelector('input[name="payment"][value="transfer"]');O&&(O.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()),typeof window.updCart=="function"&&window.updCart(),typeof window.renderCart=="function"&&window.renderCart();try{window.history.replaceState({view:"view-catalog"},"",window.location.pathname)}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog",!0),typeof window.showToast=="function"&&window.showToast("Pesanan Anda Berhasil Dibuat!")},2e3)}catch(r){const o=r.message||"Error";o.startsWith("STOK_TIDAK_CUKUP:")?typeof window.showToast=="function"&&window.showToast("Ketersediaan stok baru saja diperbarui: "+o.replace("STOK_TIDAK_CUKUP: ","")):o==="TEMPO_KHUSUS_MEMBER"?typeof window.showToast=="function"&&window.showToast("Fasilitas Cash Tempo khusus untuk Rekanan & Member VIP resmi terdaftar."):o==="POIN_TIDAK_CUKUP"?(typeof window.showToast=="function"&&window.showToast("Poin reward Anda belum mencukupi untuk penukaran hadiah ini."),Le(null)):o==="STOK_HADIAH_HABIS"?(typeof window.showToast=="function"&&window.showToast("Persediaan hadiah yang dipilih baru saja habis. Silakan pilih hadiah lainnya."),Le(null)):o==="HADIAH_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Hadiah yang dipilih sudah tidak aktif. Silakan pilih hadiah pengganti."),Le(null)):o==="MEMBER_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Data member tidak terverifikasi. Penukaran hadiah dibatalkan."),Le(null)):typeof window.showToast=="function"&&window.showToast(r.code==="resource-exhausted"?"Layanan server sedang padat. Mohon coba sesaat lagi.":"Gagal memproses pesanan: "+o)}finally{ue(!1),oe()}};window.validateAndGoToPayment=js;window.toggleDeliveryMethod=ut;window.toggleDropPoint=Rs;window.getDPLocation=Bs;window.handleDPMapsInput=jt;window.pasteDPMapsInput=Os;window.toggleOrderButton=_t;window.rPay=Ut;window.processOrder=_s;window.getLocation=()=>{if(!navigator.geolocation)return T("GPS tidak didukung");n("btn-location").innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i>',navigator.geolocation.getCurrentPosition(e=>{l.lat=e.coords.latitude,l.lng=e.coords.longitude,E("btn-location"),fe("location-status"),n("location-status").classList.add("flex"),T("GPS Didapatkan")},e=>{n("btn-location").innerHTML='<i class="fa-solid fa-location-crosshairs text-[var(--color-primary)]"></i> Set GPS Maps',T("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})};window.handleCustomerMapsInput=e=>{const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){l.lat=parseFloat(a.lat),l.lng=parseFloat(a.lng),E("btn-location"),fe("location-status");const s=n("location-status");return s&&(s.classList.add("flex"),s.innerHTML=`
                <i class="fa-solid fa-circle-check shrink-0 text-lg primary-text"></i>
                <div class="min-w-0">
                    <span class="text-[10px] font-bold uppercase leading-tight tracking-wide primary-text block">Koordinat Berhasil Disematkan!</span>
                    <span class="text-[9px] text-slate-500 dark:text-slate-400 font-mono">${a.lat}, ${a.lng}</span>
                </div>
            `),T("Titik lokasi Maps pembeli berhasil disematkan!"),typeof window.rPay=="function"&&window.rPay(),!0}return!1};window.pasteCustomerMapsInput=async()=>{const e=n("cust-maps-input");if(e){try{if(navigator.clipboard&&navigator.clipboard.readText){const t=await navigator.clipboard.readText();if(t){e.value=t,window.handleCustomerMapsInput(t)||T("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Maps");return}}}catch{}e.focus(),T("Silakan tekan Ctrl+V atau tahan untuk menempel")}};const Us=()=>{const e=m.store.isDeliveryEnabled!==!1,t=m.store.isPickupEnabled!==!1;ne("delivery-option-container","hidden",!e),ne("pickup-option-container","hidden",!t),ne("no-delivery-warning","hidden",e||t),ne("delivery-methods-grid","hidden",!(e||t));const a=n("btn-checkout-next");if(a)if(e||t){a.removeAttribute("disabled"),a.classList.remove("opacity-50");const i=(l.deliveryMethod||"delivery")==="pickup"&&t?"pickup":e?"delivery":"pickup",r=document.querySelector(`input[value="${i}"]`);r&&(r.checked=!0)}else a.setAttribute("disabled","true"),a.classList.add("opacity-50");ut()};window.rChck=Us;window.buktiPaymentUrl=null;window.buktiPaymentFile=null;window.buktiGDriveUploaded=!1;window.compressImageForUpload=(e,t=1600,a=.82)=>new Promise(s=>{const i=new FileReader;i.readAsDataURL(e),i.onload=r=>{const o=new Image;o.onload=()=>{let{width:d,height:c}=o;(d>t||c>t)&&(d>c?(c=Math.round(c*t/d),d=t):(d=Math.round(d*t/c),c=t));const b=document.createElement("canvas");b.width=d,b.height=c,b.getContext("2d").drawImage(o,0,0,d,c),b.toBlob(A=>{if(!A)return s(e);s(new File([A],e.name,{type:"image/jpeg",lastModified:Date.now()}))},"image/jpeg",a)},o.onerror=()=>s(e),o.src=r.target.result},i.onerror=()=>s(e)});window._doSingleGDriveUpload=async(e,t)=>{const a=new FileReader;return new Promise(s=>{a.readAsDataURL(e),a.onload=async()=>{try{const i=a.result.split(",")[1],r=(e.name||"bukti.jpg").replace(/[^a-zA-Z0-9.]/g,"_"),o={name:"BUKTI_"+t+"_"+Date.now()+"_"+r,mimeType:e.type||"image/jpeg",data:i,token:$s},d=await fetch(Ot,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"});if(!d.ok)return console.warn("GDrive upload HTTP error:",d.status),s(null);const c=await d.text();let b;try{b=JSON.parse(c)}catch{return console.warn("GDrive response parse error"),s(null)}b&&b.status==="success"&&b.url?s(lt(b.url)):(console.warn("GDrive upload gagal:",b&&b.message),s(null))}catch(i){console.warn("GDrive upload exception:",i),s(null)}},a.onerror=()=>s(null)})};window.uploadBuktiToGDrive=async(e,t)=>{if(!e)return null;const a=n("bukti-uploading-text");a&&(a.textContent="Mengupload bukti ke Google Drive...");try{return await Ds(e,"BUKTI_"+(t||Date.now()))}catch(s){return console.warn("Gagal upload bukti ke GDrive via GAS:",s),null}};window.handleBuktiUpload=async e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/"))return T("Hanya file gambar yang diizinkan!");if(t.size>5*1024*1024)return T("Ukuran gambar max 5MB!");window.buktiPaymentFile=t,window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const a=new FileReader;a.onload=o=>{const d=n("bukti-preview-img"),c=n("bukti-preview-wrap"),b=n("bukti-placeholder");d&&(d.src=o.target.result),c&&c.classList.remove("hidden"),b&&b.classList.add("hidden")},a.readAsDataURL(t),E("bukti-success"),E("bukti-gdrive-error");const s=n("bukti-uploading");s&&(s.classList.remove("hidden"),s.style.display="flex");const i="TEMP_"+Date.now().toString(36).toUpperCase(),r=await window.uploadBuktiToGDrive(t,i);if(E("bukti-uploading"),r){window.buktiPaymentUrl=r,window.buktiGDriveUploaded=!0;const o=n("bukti-success"),d=n("bukti-success-text"),c=n("bukti-storage-info");d&&(d.textContent="Bukti berhasil disimpan!"),c&&(c.textContent="(tersimpan di Google Drive)"),o&&(o.classList.remove("hidden"),o.style.display="flex"),E("bukti-gdrive-error")}else{window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const o=n("bukti-gdrive-error");o&&(o.classList.remove("hidden"),o.style.display="flex"),E("bukti-success"),T("Upload ke Google Drive gagal. Coba lagi!")}};window.retryBuktiUpload=async()=>{if(!window.buktiPaymentFile)return T("Pilih gambar terlebih dahulu!");E("bukti-gdrive-error"),E("bukti-success");const e=n("bukti-uploading");e&&(e.classList.remove("hidden"),e.style.display="flex");const t="RETRY_"+Date.now().toString(36).toUpperCase(),a=await window.uploadBuktiToGDrive(window.buktiPaymentFile,t);if(E("bukti-uploading"),a){window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0;const s=n("bukti-success"),i=n("bukti-success-text"),r=n("bukti-storage-info");i&&(i.textContent="Bukti berhasil disimpan!"),r&&(r.textContent="(tersimpan di Google Drive)"),s&&(s.classList.remove("hidden"),s.style.display="flex"),T("Upload berhasil!")}else{const s=n("bukti-gdrive-error");s&&(s.classList.remove("hidden"),s.style.display="flex"),T("Masih gagal. Periksa koneksi internet Anda.")}};window.uploadBuktiToFirebase=async(e,t)=>{if(window.buktiGDriveUploaded&&window.buktiPaymentUrl)return window.buktiPaymentUrl;if(!e)return null;const a=await window.uploadBuktiToGDrive(e,t);return a&&(window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0),a};window.togglePaymentDetails=()=>{const e=(document.querySelector('input[name="payment"]:checked')||{}).value;if(ne("detail-transfer","hidden",e!=="transfer"),ne("detail-qris","hidden",e!=="qris"),ne("detail-cashier","hidden",e!=="cashier"),ne("detail-cod","hidden",e!=="cod"),ne("detail-tempo","hidden",e!=="tempo"),ne("detail-paylater","hidden",e!=="paylater"),e==="tempo"&&window.calculateTempoBalance(),e==="paylater"&&window.calculatePaylaterBalance?.(),e==="qris"){const s=n("dyn-qris-img");if(s){const i=m.payment?.qrisUrl||m.store?.qrisUrl||m.payment?.qris||m.store?.qris||m.qrisUrl||"";i&&(s.src=lt(i))}}const t=parseFloat(document.getElementById("paylater-dp-input")?.value)||0,a=e==="transfer"||e==="qris"||e==="tempo"||e==="paylater"&&t>0;ne("bukti-payment-section","hidden",!a)};window.selectedCheckoutPaylaterTenor=window.selectedCheckoutPaylaterTenor||"30d";window.selectCheckoutPaylaterTenor=e=>{window.selectedCheckoutPaylaterTenor=e,typeof window.calculatePaylaterBalance=="function"&&window.calculatePaylaterBalance()};window.calculatePaylaterBalance=()=>{const e=D?Math.max(0,parseFloat(D.paylaterLimit)||0):0,t=D?Math.max(0,parseFloat(D.paylaterUsed)||0):0,a=Math.max(0,e-t),s=D?.paylaterDueDay||5,i=document.getElementById("paylater-limit-display"),r=document.getElementById("paylater-due-display"),o=document.getElementById("paylater-status-box"),d=document.getElementById("paylater-excess-dp-container"),c=document.getElementById("paylater-dp-input"),b=document.getElementById("paylater-tenor-chips-grid"),A=document.getElementById("paylater-tenor-breakdown-box");i&&(i.textContent=h(a)),r&&(r.textContent="Tgl "+s+" Tiap Bulan");let R=V.reduce((_,B)=>_+(parseFloat(getEffP(B))||0)*(parseFloat(B.qty)||0),0),F=0,$=0,W=0;if(l.deliveryMethod==="delivery"&&(F=Math.ceil((parseFloat(l.distance)||0)*(parseFloat(m.store.costPerKm)||0)/500)*500),typeof vouch<"u"&&vouch){let _=R;if(vouch.targetProduct&&vouch.targetProduct!==""){const B=parseInt(vouch.targetProduct);_=V.filter(f=>f.id===B).reduce((f,x)=>f+(parseFloat(getEffP(x))||0)*(parseFloat(x.qty)||0),0)}if(vouch.type==="shipping_free")W=F;else if(vouch.type==="shipping_flat")W=parseFloat(vouch.value)||0;else if(vouch.type==="percent"){let B=_*((parseFloat(vouch.value)||0)/100);vouch.maxDiscount&&parseFloat(vouch.maxDiscount)>0&&(B=Math.min(B,parseFloat(vouch.maxDiscount))),$=B}else $=parseFloat(vouch.value)||0,$=Math.min($,_)}(m.store?.freeShippingMinSpendEnabled===!0||m.store?.freeShippingMinSpendEnabled==="true")&&(parseFloat(m.store?.freeShippingMinSpendAmount)||0)>0&&R>=(parseFloat(m.store?.freeShippingMinSpendAmount)||0)&&l.deliveryMethod==="delivery"&&(W=F),W=Math.min(W,F),$=Math.min($,R);let U=Math.max(0,R-$),p=Math.max(0,F-W);const L=typeof window.calcTaxDetails=="function"?window.calcTaxDetails(U+p):{grandTotalAdd:0};let be=0;window.useMemberPoints&&D&&(be=Math.min(U+p+L.grandTotalAdd,parseFloat(D.points)||0));let J=Math.max(0,U+p+(L.grandTotalAdd||0)-be),K=0;const u=J>a;if(u){const _=J-a;K=parseFloat(c?.value)||0,K<_&&(K=_,c&&(c.value=K)),d&&d.classList.remove("hidden")}else d&&d.classList.add("hidden"),c&&(c.value=0),K=0;const xe=Math.min(a,Math.max(0,J-K)),S=It(),Y=cs(xe>0?xe:J,{...S,dueDay:s}).results;let X=window.selectedCheckoutPaylaterTenor||"30d";(!Y[X]||!Y[X].enabled)&&(X=Object.keys(Y).find(B=>Y[B].enabled)||"30d",window.selectedCheckoutPaylaterTenor=X);const k=Y[X];if(window.currentPaylaterBreakdown=k,b){const _=["30d","2m","3m"];b.innerHTML=_.map(B=>{const he=Y[B];if(!he||!he.enabled)return"";const f=B===X;return`
                <button type="button" onclick="window.selectCheckoutPaylaterTenor('${B}')" 
                        class="p-2 sm:p-2.5 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 min-h-[46px] select-none touch-manipulation active:scale-95 ${f?"border-2 text-[var(--color-primary)] shadow-sm":"border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600"}"
                        style="${f?"border-color: var(--color-primary); background: rgba(var(--color-primary-rgb), 0.1); box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.15);":""}">
                    <span class="text-[9.5px] font-black uppercase tracking-wider block">${w(he.shortLabel)}</span>
                    <span class="text-[11px] sm:text-xs font-black block" ${f?'style="color: var(--color-primary);"':""}>${h(he.totalPerMonth)}<span class="text-[8px] font-normal text-slate-400">/bln</span></span>
                </button>
            `}).filter(Boolean).join("")}if(A&&k&&(A.innerHTML=`
            <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 shadow-2xs space-y-1.5 text-xs" style="border-left: 3.5px solid var(--color-primary);">
                <div class="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-700">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                        <i class="fa-solid fa-receipt" style="color: var(--color-primary);"></i> Rincian Tenor ${w(k.label)}
                    </span>
                    <span class="text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                        <i class="fa-solid fa-shield-halved text-[9px] text-emerald-500"></i> Transparan
                    </span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span>Pokok Tagihan (${k.months} bulan)</span>
                    <span class="font-bold text-slate-800 dark:text-slate-200">${h(k.pokokPerMonth)} / bln</span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span class="flex items-center gap-1">Biaya Admin ${k.adminFeeType==="percent"&&k.adminFeeValue>0?`(${k.adminFeeValue}%)`:""}</span>
                    <span class="font-bold ${k.adminFeePerMonth===0?"text-emerald-600 dark:text-emerald-400":"text-slate-800 dark:text-slate-200"}">
                        ${k.adminFeePerMonth===0?"Rp 0 (Gratis)":`${h(k.adminFeePerMonth)} / bln`}
                    </span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span class="flex items-center gap-1">Biaya Penanganan ${k.serviceFeeType==="percent"&&k.serviceFeeValue>0?`(${k.serviceFeeValue}%)`:""}</span>
                    <span class="font-bold ${k.serviceFeePerMonth===0?"text-emerald-600 dark:text-emerald-400":"text-slate-800 dark:text-slate-200"}">
                        ${k.serviceFeePerMonth===0?"Rp 0 (Gratis)":`${h(k.serviceFeePerMonth)} / bln`}
                    </span>
                </div>
                <div class="pt-2 mt-1.5 border-t border-dashed border-slate-200 dark:border-slate-700 flex justify-between items-baseline">
                    <span class="text-[11px] font-black uppercase text-slate-800 dark:text-white">Tagihan per Bulan:</span>
                    <span class="text-sm font-black font-mono" style="color: var(--color-primary);">${h(k.totalPerMonth)} <span class="text-[10px] font-bold text-slate-400">/ bulan</span></span>
                </div>
                <div class="flex justify-between items-center text-[10px] text-slate-500 pt-0.5">
                    <span>Total Tagihan Seluruhnya:</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300">${h(k.grandTotal)}</span>
                </div>
            </div>
        `),!u)o&&(o.innerHTML='<div class="flex items-center gap-2 font-extrabold mb-1" style="color: var(--color-primary);"><i class="fa-solid fa-circle-check text-emerald-500 text-sm"></i><span>Limit PayLater Anda Sangat Cukup!</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Total belanja <b>'+h(J)+"</b> otomatis dipotong dari limit PayLater Anda. Anda <b>tidak perlu bayar sekarang</b> dan tanpa uang muka (DP Rp 0). Angsuran dicicil sesuai tenor "+w(k.label)+" ("+h(k.totalPerMonth)+"/bln) mulai tgl "+s+" bulan depan.</p>");else{const _=J-a;o&&(o.innerHTML='<div class="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-extrabold mb-1"><i class="fa-solid fa-triangle-exclamation text-amber-500 text-sm"></i><span>Total Belanja Melebihi Sisa Limit PayLater</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Sisa limit Anda <b>'+h(a)+"</b> akan digunakan maksimal untuk cicilan "+w(k.label)+" ("+h(k.totalPerMonth)+"/bln). Selisih kekurangan sebesar <b>"+h(_)+"</b> wajib dibayar sebagai DP via Transfer/QRIS.</p>")}const ce=(parseFloat(c?.value)||0)>0;ne("bukti-payment-section","hidden",!ce)};window.calculateTempoBalance=()=>{const e=document.getElementById("tempo-dp-input");let t=parseFloat(e?.value)||0;t<0&&(t=0,e&&(e.value=0));let a=V.reduce((W,le)=>W+(parseFloat(getEffP(le))||0)*(parseFloat(le.qty)||0),0),s=0,i=0,r=0;if(l.deliveryMethod==="delivery"&&(s=Math.ceil((parseFloat(l.distance)||0)*(parseFloat(m.store.costPerKm)||0)/500)*500),vouch){let W=a;if(vouch.targetProduct&&vouch.targetProduct!==""){const le=parseInt(vouch.targetProduct);W=V.filter(p=>p.id===le).reduce((p,L)=>p+(parseFloat(getEffP(L))||0)*(parseFloat(L.qty)||0),0)}if(vouch.type==="shipping_free")r=s;else if(vouch.type==="shipping_flat")r=parseFloat(vouch.value)||0;else if(vouch.type==="percent"){let le=W*((parseFloat(vouch.value)||0)/100);vouch.maxDiscount&&parseFloat(vouch.maxDiscount)>0&&(le=Math.min(le,parseFloat(vouch.maxDiscount))),i=le}else i=parseFloat(vouch.value)||0,i=Math.min(i,W)}(m.store.freeShippingMinSpendEnabled===!0||m.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(m.store.freeShippingMinSpendAmount)||0)>0&&a>=(parseFloat(m.store.freeShippingMinSpendAmount)||0)&&l.deliveryMethod==="delivery"&&(r=s),r=Math.min(r,s),i=Math.min(i,a);let d=Math.max(0,a-i),c=Math.max(0,s-r);const b=window.calcTaxDetails(d+c);let A=0;window.useMemberPoints&&D&&(A=Math.min(d+c+b.grandTotalAdd,parseFloat(D.points)||0));let R=d+c+b.grandTotalAdd-A;t>R&&(t=R,e&&(e.value=t));let F=R-t;const $=document.getElementById("tempo-balance-display");$&&($.innerText=h(F))};let je="paint",_e="storefront",I={mode:"room",length:4,width:3,height:3,openings:4,ceiling:!0,coats:2,directArea:30,includeSealer:!0},H={length:4,width:3,tileSize:"40x40",wastePercent:10,includeAdhesive:!0,includeGrout:!0},G={length:6,height:3,sides:1,openings:2,brickType:"hebel10",includeMortar:!0};const Tt={"30x30":{name:"30 x 30 cm",coveragePerBox:1,piecesPerBox:11},"40x40":{name:"40 x 40 cm",coveragePerBox:.96,piecesPerBox:6},"50x50":{name:"50 x 50 cm",coveragePerBox:1,piecesPerBox:4},"60x60":{name:"60 x 60 cm",coveragePerBox:1.44,piecesPerBox:4},"80x80":{name:"80 x 80 cm",coveragePerBox:1.92,piecesPerBox:3}},mt=()=>{let e=0,t=0;if(I.mode==="room"){const F=2*(parseFloat(I.length)+parseFloat(I.width))*parseFloat(I.height);e=Math.max(0,F-(parseFloat(I.openings)||0)),I.ceiling&&(t=parseFloat(I.length)*parseFloat(I.width))}else e=parseFloat(I.directArea)||0;const a=e+t,s=parseInt(I.coats)||2,r=parseFloat((a*s/11).toFixed(2)),o=Math.floor(r/20),d=r%20,c=Math.ceil(d/2.5),b=I.includeSealer?parseFloat((a/12).toFixed(2)):0,A=I.includeSealer?Math.ceil(b/2.5):0;return{totalWallArea:parseFloat(e.toFixed(2)),ceilingArea:parseFloat(t.toFixed(2)),grandArea:parseFloat(a.toFixed(2)),coats:s,totalVolumeLiters:r,pails:o,gallons:c,sealerVolume:b,sealerGallons:A}},ft=()=>{const e=parseFloat(H.length)*parseFloat(H.width),t=1+parseFloat(H.wastePercent)/100,a=parseFloat((e*t).toFixed(2)),s=Tt[H.tileSize]||Tt["40x40"],i=Math.ceil(a/s.coveragePerBox),r=H.includeAdhesive?Math.ceil(a/8):0,o=H.includeGrout?Math.ceil(a/4):0;return{rawArea:parseFloat(e.toFixed(2)),wastePercent:H.wastePercent,totalAreaWithWaste:a,spec:s,totalBoxes:i,adhesiveBags:r,groutBags:o}},bt=()=>{const e=parseFloat(G.length)*parseFloat(G.height)*parseInt(G.sides||1),t=Math.max(0,parseFloat((e-(parseFloat(G.openings)||0)).toFixed(2)));let a=0,s=0,i=0,r=0,o=0;return G.brickType==="hebel10"?(a=Math.ceil(t*8.33),s=parseFloat((t/10).toFixed(2)),i=Math.ceil(t/10)):G.brickType==="hebel75"?(a=Math.ceil(t*8.33),s=parseFloat((t/13.3).toFixed(2)),i=Math.ceil(t/13)):(a=Math.ceil(t*70),o=Math.ceil(t*.45),r=parseFloat((t*.04).toFixed(2))),{rawWallArea:parseFloat(e.toFixed(2)),netArea:t,brickType:G.brickType,brickPcs:a,brickCubic:s,mortarBags:i,cementBags:o,sandCubic:r}},Qe=e=>{const t=Array.isArray(m.products)?m.products:[];return e==="paint"?t.filter(a=>{if(!a||a.isActive===!1||a.isActive==="false")return!1;const s=`${a.name||""} ${a.category||""} ${a.subCategory||""}`.toLowerCase();return s.includes("cat")||s.includes("mowilex")||s.includes("dulux")||s.includes("avitex")||s.includes("no drop")||s.includes("plamir")||s.includes("alkali")||s.includes("sealer")}).slice(0,4):e==="tile"?t.filter(a=>{if(!a||a.isActive===!1||a.isActive==="false")return!1;const s=`${a.name||""} ${a.category||""} ${a.subCategory||""}`.toLowerCase();return s.includes("keramik")||s.includes("granit")||s.includes("tile")||s.includes("nat")||s.includes("perekat")}).slice(0,4):e==="brick"?t.filter(a=>{if(!a||a.isActive===!1||a.isActive==="false")return!1;const s=`${a.name||""} ${a.category||""} ${a.subCategory||""}`.toLowerCase();return s.includes("hebel")||s.includes("bata")||s.includes("mortar")||s.includes("semen")||s.includes("pasir")}).slice(0,4):[]},Ie=()=>{const e=n("modal-material-estimator-body");if(!e)return;let t="";if(je==="paint"){const a=mt(),s=Qe("paint");t=`
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <!-- Kolom Kiri: Formulir Input Dimensi (5 Kolom Desktop) -->
            <div class="lg:col-span-5 space-y-4">
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
                    <div class="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                            <i class="fa-solid fa-paintbrush text-[var(--color-primary)]"></i> Parameter Dinding
                        </span>
                        <div class="inline-flex p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-700 text-[10px] font-bold">
                            <button type="button" onclick="window.setEstimatorPaintMode('room')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${I.mode==="room"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs":"text-slate-500"}">Ruangan</button>
                            <button type="button" onclick="window.setEstimatorPaintMode('area')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${I.mode==="area"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs":"text-slate-500"}">Luas M²</button>
                        </div>
                    </div>

                    ${I.mode==="room"?`
                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Ruang (m)</label>
                            <input type="number" step="0.5" min="1" max="100" value="${I.length}" oninput="window.updateEstimatorPaintField('length', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Lebar Ruang (m)</label>
                            <input type="number" step="0.5" min="1" max="100" value="${I.width}" oninput="window.updateEstimatorPaintField('width', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Tinggi Dinding (m)</label>
                            <input type="number" step="0.25" min="1" max="20" value="${I.height}" oninput="window.updateEstimatorPaintField('height', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase" title="Area pintu dan jendela yang tidak dicat">Pintu/Jendela (m²)</label>
                            <input type="number" step="0.5" min="0" max="50" value="${I.openings}" oninput="window.updateEstimatorPaintField('openings', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>
                    <div class="flex items-center justify-between pt-1">
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Cat Plafon Sekalian?</span>
                        <input type="checkbox" ${I.ceiling?"checked":""} onchange="window.updateEstimatorPaintField('ceiling', this.checked)"
                            class="w-4 h-4 rounded text-[var(--color-primary)] accent-[var(--color-primary)] cursor-pointer">
                    </div>
                    `:`
                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase">Total Luas Bidang Cat (m²)</label>
                        <input type="number" step="1" min="1" max="10000" value="${I.directArea}" oninput="window.updateEstimatorPaintField('directArea', this.value)"
                            class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                    `}

                    <!-- Layer Pengecatan -->
                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Jumlah Lapisan Pengecatan</label>
                        <div class="grid grid-cols-3 gap-2">
                            <button type="button" onclick="window.updateEstimatorPaintField('coats', 1)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${I.coats===1?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}">1x Lapis</button>
                            <button type="button" onclick="window.updateEstimatorPaintField('coats', 2)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${I.coats===2?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}">2x Rekomendasi</button>
                            <button type="button" onclick="window.updateEstimatorPaintField('coats', 3)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${I.coats===3?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}">3x Warna Gelap</button>
                        </div>
                    </div>

                    <div class="flex items-center justify-between pt-1">
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Termasuk Cat Dasar (Alkali)?</span>
                        <input type="checkbox" ${I.includeSealer?"checked":""} onchange="window.updateEstimatorPaintField('includeSealer', this.checked)"
                            class="w-4 h-4 rounded text-[var(--color-primary)] accent-[var(--color-primary)] cursor-pointer">
                    </div>
                </div>
            </div>

            <!-- Kolom Kanan: Hasil Kalkulasi & Rekomendasi (7 Kolom Desktop) -->
            <div class="lg:col-span-7 space-y-4">
                <!-- Bento Result Card -->
                <div class="p-5 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl border border-slate-700/80 relative overflow-hidden">
                    <div class="flex items-start justify-between gap-3 relative z-10">
                        <div>
                            <span class="text-[10px] font-black uppercase tracking-widest text-amber-400">Hasil Estimasi Cat Resmi</span>
                            <h4 class="text-2xl sm:text-3xl font-black mt-1 tracking-tight text-white">
                                ${a.pails>0?`${a.pails} Pail (20L) `:""}${a.gallons>0?`+ ${a.gallons} Galon (2.5L)`:a.pails===0?"1 Galon":""}
                            </h4>
                            <p class="text-xs text-slate-300 mt-1">Total kebutuhan volume: <b class="text-white">${a.totalVolumeLiters} Liter / Kg</b> (${a.coats}x lapis)</p>
                        </div>
                        <div class="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-xl text-amber-400 border border-white/20 shrink-0">
                            <i class="fa-solid fa-bucket"></i>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-white/15 relative z-10 text-xs">
                        <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                            <p class="text-[10px] text-slate-400 font-bold uppercase">Luas Dinding</p>
                            <p class="text-sm font-black text-white mt-0.5">${a.totalWallArea} m²</p>
                        </div>
                        <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                            <p class="text-[10px] text-slate-400 font-bold uppercase">Luas Plafon</p>
                            <p class="text-sm font-black text-white mt-0.5">${a.ceilingArea} m²</p>
                        </div>
                        <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                            <p class="text-[10px] text-amber-300 font-bold uppercase">Alkali Sealer</p>
                            <p class="text-sm font-black text-amber-300 mt-0.5">${a.sealerGallons>0?`${a.sealerGallons} Galon (${a.sealerVolume}L)`:"Tidak dipilih"}</p>
                        </div>
                    </div>
                </div>

                <!-- Tombol Aksi Cepat -->
                <div class="flex flex-wrap gap-2.5">
                    <button type="button" onclick="window.copyEstimatorSummary('paint')" class="flex-1 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                        <i class="fa-solid fa-copy"></i> Salin Rincian
                    </button>
                    <button type="button" onclick="window.shareEstimatorToWA('paint')" class="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                        <i class="fa-brands fa-whatsapp text-sm"></i> Konsultasi WA
                    </button>
                    ${_e==="pos"?`
                    <button type="button" onclick="window.addEstimatorToPOSCart('Cat Dinding (Estimasi)', ${a.totalVolumeLiters}, 'liter')" class="w-full py-3 px-4 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-cart-plus"></i> Masukkan Estimasi Cat ke Transaksi Kasir
                    </button>
                    `:""}
                </div>

                <!-- Katalog Produk Terkait di Toko -->
                ${s.length>0?`
                <div class="pt-2">
                    <p class="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                        <i class="fa-solid fa-tags text-[var(--color-primary)]"></i> Rekomendasi Produk Cat di Toko Kami:
                    </p>
                    <div class="grid grid-cols-2 gap-2">
                        ${s.map(i=>`
                        <div class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 flex items-center gap-2 shadow-2xs">
                            <div class="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 flex items-center justify-center text-xs">
                                ${i.img?`<img src="${w(i.img)}" class="w-full h-full object-cover">`:'<i class="fa-solid fa-paint-roller text-slate-400"></i>'}
                            </div>
                            <div class="min-w-0 flex-1">
                                <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">${w(i.name)}</p>
                                <p class="text-[10px] font-extrabold text-[var(--color-primary)]">${h(i.price)}</p>
                            </div>
                            <button type="button" onclick="window.addStoreProductFromEstimator('${i.id}')" class="w-7 h-7 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center text-xs hover:opacity-90 active:scale-90 transition-all cursor-pointer shrink-0" title="Tambah ke Belanja">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        `).join("")}
                    </div>
                </div>
                `:""}
            </div>
        </div>`}else if(je==="tile"){const a=ft(),s=Qe("tile");t=`
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <!-- Kolom Kiri: Input Dimensi Lantai -->
            <div class="lg:col-span-5 space-y-4">
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
                    <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                        <i class="fa-solid fa-table-cells text-indigo-500"></i> Parameter Keramik / Granit
                    </span>

                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Lantai (m)</label>
                            <input type="number" step="0.5" min="1" max="100" value="${H.length}" oninput="window.updateEstimatorTileField('length', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Lebar Lantai (m)</label>
                            <input type="number" step="0.5" min="1" max="100" value="${H.width}" oninput="window.updateEstimatorTileField('width', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>

                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Ukuran Keramik / Granit</label>
                        <select onchange="window.updateEstimatorTileField('tileSize', this.value)"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                            <option value="30x30" ${H.tileSize==="30x30"?"selected":""}>30 x 30 cm (1 Dus = 1.00 m² / 11 keping)</option>
                            <option value="40x40" ${H.tileSize==="40x40"?"selected":""}>40 x 40 cm (1 Dus = 0.96 m² / 6 keping)</option>
                            <option value="50x50" ${H.tileSize==="50x50"?"selected":""}>50 x 50 cm (1 Dus = 1.00 m² / 4 keping)</option>
                            <option value="60x60" ${H.tileSize==="60x60"?"selected":""}>60 x 60 cm (1 Dus = 1.44 m² / 4 keping)</option>
                            <option value="80x80" ${H.tileSize==="80x80"?"selected":""}>80 x 80 cm (1 Dus = 1.92 m² / 3 keping)</option>
                        </select>
                    </div>

                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Cadangan Potongan / Waste Factor</label>
                        <div class="grid grid-cols-3 gap-2">
                            <button type="button" onclick="window.updateEstimatorTileField('wastePercent', 5)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${H.wastePercent===5?"border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}">5% Minimal</button>
                            <button type="button" onclick="window.updateEstimatorTileField('wastePercent', 10)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${H.wastePercent===10?"border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}">10% Standar</button>
                            <button type="button" onclick="window.updateEstimatorTileField('wastePercent', 15)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${H.wastePercent===15?"border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}">15% Diagonal</button>
                        </div>
                    </div>

                    <div class="space-y-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Semen Perekat Keramik (Adhesive)?</span>
                            <input type="checkbox" ${H.includeAdhesive?"checked":""} onchange="window.updateEstimatorTileField('includeAdhesive', this.checked)"
                                class="w-4 h-4 rounded text-indigo-600 accent-indigo-600 cursor-pointer">
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Semen Pengisi Nat (Tile Grout)?</span>
                            <input type="checkbox" ${H.includeGrout?"checked":""} onchange="window.updateEstimatorTileField('includeGrout', this.checked)"
                                class="w-4 h-4 rounded text-indigo-600 accent-indigo-600 cursor-pointer">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Kolom Kanan: Hasil Kalkulasi Keramik -->
            <div class="lg:col-span-7 space-y-4">
                <div class="p-5 rounded-3xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white shadow-xl border border-indigo-900/60 relative overflow-hidden">
                    <div class="flex items-start justify-between gap-3 relative z-10">
                        <div>
                            <span class="text-[10px] font-black uppercase tracking-widest text-indigo-300">Hasil Estimasi Keramik Lantai</span>
                            <h4 class="text-3xl font-black mt-1 tracking-tight text-white">${a.totalBoxes} Dus Keramik</h4>
                            <p class="text-xs text-indigo-200 mt-1">Ukuran: <b>${a.spec.name}</b> (Coverage: ${a.spec.coveragePerBox} m²/dus)</p>
                        </div>
                        <div class="w-12 h-12 rounded-2xl bg-indigo-500/20 backdrop-blur-md flex items-center justify-center text-xl text-indigo-300 border border-indigo-400/30 shrink-0">
                            <i class="fa-solid fa-border-all"></i>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-white/15 relative z-10 text-xs">
                        <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                            <p class="text-[10px] text-slate-400 font-bold uppercase">Luas Bersih</p>
                            <p class="text-sm font-black text-white mt-0.5">${a.rawArea} m²</p>
                        </div>
                        <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                            <p class="text-[10px] text-indigo-300 font-bold uppercase">+ Cadangan (${a.wastePercent}%)</p>
                            <p class="text-sm font-black text-white mt-0.5">${a.totalAreaWithWaste} m²</p>
                        </div>
                        <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                            <p class="text-[10px] text-emerald-300 font-bold uppercase">Perekat &amp; Nat</p>
                            <p class="text-sm font-black text-emerald-300 mt-0.5">${a.adhesiveBags} Sak / ${a.groutBags} Bks</p>
                        </div>
                    </div>
                </div>

                <!-- Tombol Aksi Cepat -->
                <div class="flex flex-wrap gap-2.5">
                    <button type="button" onclick="window.copyEstimatorSummary('tile')" class="flex-1 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                        <i class="fa-solid fa-copy"></i> Salin Rincian
                    </button>
                    <button type="button" onclick="window.shareEstimatorToWA('tile')" class="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                        <i class="fa-brands fa-whatsapp text-sm"></i> Konsultasi WA
                    </button>
                    ${_e==="pos"?`
                    <button type="button" onclick="window.addEstimatorToPOSCart('Keramik ${a.spec.name} (Estimasi)', ${a.totalBoxes}, 'dus')" class="w-full py-3 px-4 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-cart-plus"></i> Masukkan ${a.totalBoxes} Dus Keramik ke Transaksi Kasir
                    </button>
                    `:""}
                </div>

                <!-- Produk Terkait -->
                ${s.length>0?`
                <div class="pt-2">
                    <p class="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                        <i class="fa-solid fa-tags text-indigo-500"></i> Rekomendasi Keramik &amp; Semen di Toko:
                    </p>
                    <div class="grid grid-cols-2 gap-2">
                        ${s.map(i=>`
                        <div class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 flex items-center gap-2 shadow-2xs">
                            <div class="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 flex items-center justify-center text-xs">
                                ${i.img?`<img src="${w(i.img)}" class="w-full h-full object-cover">`:'<i class="fa-solid fa-border-all text-slate-400"></i>'}
                            </div>
                            <div class="min-w-0 flex-1">
                                <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">${w(i.name)}</p>
                                <p class="text-[10px] font-extrabold text-[var(--color-primary)]">${h(i.price)}</p>
                            </div>
                            <button type="button" onclick="window.addStoreProductFromEstimator('${i.id}')" class="w-7 h-7 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center text-xs hover:opacity-90 active:scale-90 transition-all cursor-pointer shrink-0" title="Tambah ke Belanja">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        `).join("")}
                    </div>
                </div>
                `:""}
            </div>
        </div>`}else if(je==="brick"){const a=bt(),s=Qe("brick");t=`
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <!-- Kolom Kiri: Input Dimensi Tembok -->
            <div class="lg:col-span-5 space-y-4">
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
                    <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                        <i class="fa-solid fa-cubes-stacked text-amber-600"></i> Parameter Pasangan Dinding
                    </span>

                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Dinding (m)</label>
                            <input type="number" step="0.5" min="1" max="200" value="${G.length}" oninput="window.updateEstimatorBrickField('length', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Tinggi Dinding (m)</label>
                            <input type="number" step="0.25" min="1" max="20" value="${G.height}" oninput="window.updateEstimatorBrickField('height', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Jumlah Sisi Tembok</label>
                            <input type="number" min="1" max="20" value="${G.sides}" oninput="window.updateEstimatorBrickField('sides', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Bukaan Pintu/Jendela (m²)</label>
                            <input type="number" step="0.5" min="0" max="50" value="${G.openings}" oninput="window.updateEstimatorBrickField('openings', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>

                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Pilihan Material Dinding</label>
                        <select onchange="window.updateEstimatorBrickField('brickType', this.value)"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                            <option value="hebel10" ${G.brickType==="hebel10"?"selected":""}>Bata Ringan / Hebel Tebal 10 cm (60x20x10)</option>
                            <option value="hebel75" ${G.brickType==="hebel75"?"selected":""}>Bata Ringan / Hebel Tebal 7.5 cm (60x20x7.5)</option>
                            <option value="redbrick" ${G.brickType==="redbrick"?"selected":""}>Bata Merah Bakar Standar</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Kolom Kanan: Hasil Kalkulasi Bata -->
            <div class="lg:col-span-7 space-y-4">
                <div class="p-5 rounded-3xl bg-gradient-to-br from-amber-950 to-slate-900 text-white shadow-xl border border-amber-900/60 relative overflow-hidden">
                    <div class="flex items-start justify-between gap-3 relative z-10">
                        <div>
                            <span class="text-[10px] font-black uppercase tracking-widest text-amber-300">Hasil Estimasi Pasangan Dinding</span>
                            <h4 class="text-2xl sm:text-3xl font-black mt-1 tracking-tight text-white">
                                ${G.brickType.startsWith("hebel")?`${a.brickPcs} Pcs (${a.brickCubic} m³)`:`${a.brickPcs} Buah Bata Merah`}
                            </h4>
                            <p class="text-xs text-amber-200 mt-1">Luas Dinding Bersih: <b>${a.netArea} m²</b></p>
                        </div>
                        <div class="w-12 h-12 rounded-2xl bg-amber-500/20 backdrop-blur-md flex items-center justify-center text-xl text-amber-300 border border-amber-400/30 shrink-0">
                            <i class="fa-solid fa-trowel-bricks"></i>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-2.5 mt-4 pt-4 border-t border-white/15 relative z-10 text-xs">
                        <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                            <p class="text-[10px] text-slate-400 font-bold uppercase">Semen Perekat / Mortar</p>
                            <p class="text-sm font-black text-white mt-0.5">
                                ${G.brickType.startsWith("hebel")?`${a.mortarBags} Sak Mortar (40kg)`:`${a.cementBags} Sak Semen (50kg)`}
                            </p>
                        </div>
                        <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                            <p class="text-[10px] text-amber-300 font-bold uppercase">Pasir Pasang</p>
                            <p class="text-sm font-black text-amber-300 mt-0.5">
                                ${G.brickType.startsWith("hebel")?"Cukup Lem Mortar":`${a.sandCubic} m³ Pasir`}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Tombol Aksi Cepat -->
                <div class="flex flex-wrap gap-2.5">
                    <button type="button" onclick="window.copyEstimatorSummary('brick')" class="flex-1 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                        <i class="fa-solid fa-copy"></i> Salin Rincian
                    </button>
                    <button type="button" onclick="window.shareEstimatorToWA('brick')" class="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                        <i class="fa-brands fa-whatsapp text-sm"></i> Konsultasi WA
                    </button>
                    ${_e==="pos"?`
                    <button type="button" onclick="window.addEstimatorToPOSCart('${G.brickType.startsWith("hebel")?"Bata Ringan Hebel (Estimasi)":"Bata Merah (Estimasi)"}', ${a.brickPcs}, 'pcs')" class="w-full py-3 px-4 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-cart-plus"></i> Masukkan ${a.brickPcs} Pcs ke Transaksi Kasir
                    </button>
                    `:""}
                </div>

                <!-- Produk Terkait -->
                ${s.length>0?`
                <div class="pt-2">
                    <p class="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                        <i class="fa-solid fa-tags text-amber-500"></i> Rekomendasi Bata &amp; Semen Mortar di Toko:
                    </p>
                    <div class="grid grid-cols-2 gap-2">
                        ${s.map(i=>`
                        <div class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 flex items-center gap-2 shadow-2xs">
                            <div class="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 flex items-center justify-center text-xs">
                                ${i.img?`<img src="${w(i.img)}" class="w-full h-full object-cover">`:'<i class="fa-solid fa-cubes text-slate-400"></i>'}
                            </div>
                            <div class="min-w-0 flex-1">
                                <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">${w(i.name)}</p>
                                <p class="text-[10px] font-extrabold text-[var(--color-primary)]">${h(i.price)}</p>
                            </div>
                            <button type="button" onclick="window.addStoreProductFromEstimator('${i.id}')" class="w-7 h-7 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center text-xs hover:opacity-90 active:scale-90 transition-all cursor-pointer shrink-0" title="Tambah ke Belanja">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        `).join("")}
                    </div>
                </div>
                `:""}
            </div>
        </div>`}e.innerHTML=t,Ks()},Ks=()=>{["paint","tile","brick"].forEach(t=>{const a=n(`estimator-tab-btn-${t}`);a&&(t===je?a.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-black text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer primary-bg text-white":a.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white")})},Ns=e=>{je=e,Ie()},Gs=e=>{I.mode=e,Ie()},Hs=(e,t)=>{I[e]=t,Ie()},qs=(e,t)=>{H[e]=t,Ie()},Vs=(e,t)=>{G[e]=t,Ie()},Ws=e=>{let t="";const a=m.store?.name||"TOKO PUTRI";if(e==="paint"){const s=mt();t=`*ESTIMASI KEBUTUHAN CAT TEMBOK — ${a}*
--------------------------------------
• Luas Dinding: ${s.totalWallArea} m²
• Luas Plafon: ${s.ceilingArea} m²
• Total Luas Bidang: ${s.grandArea} m²
• Lapisan Pengecatan: ${s.coats}x Lapis
--------------------------------------
*REKOMENDASI KEBUTUHAN:*
✓ Total Cat Topcoat: ${s.totalVolumeLiters} Liter/Kg
  → ${s.pails>0?`${s.pails} Pail (20L) `:""}${s.gallons>0?`+ ${s.gallons} Galon (2.5L)`:""}
`+(s.sealerGallons>0?`✓ Cat Dasar Alkali Sealer: ${s.sealerGallons} Galon (${s.sealerVolume} Liter)
`:"")+`--------------------------------------
Dihitung otomatis via Sistem Toko Putri`}else if(e==="tile"){const s=ft();t=`*ESTIMASI KEBUTUHAN KERAMIK / GRANIT — ${a}*
--------------------------------------
• Ukuran Keramik: ${s.spec.name}
• Luas Bersih: ${s.rawArea} m²
• Cadangan Potongan: ${s.wastePercent}%
• Total Luas Dihitung: ${s.totalAreaWithWaste} m²
--------------------------------------
*REKOMENDASI KEBUTUHAN:*
✓ Keramik Wajib Dibeli: ${s.totalBoxes} Dus
`+(s.adhesiveBags>0?`✓ Semen Perekat Keramik: ${s.adhesiveBags} Sak (40kg)
`:"")+(s.groutBags>0?`✓ Semen Pengisi Nat: ${s.groutBags} Bungkus (1kg)
`:"")+`--------------------------------------
Dihitung otomatis via Sistem Toko Putri`}else if(e==="brick"){const s=bt();t=`*ESTIMASI PASANGAN DINDING — ${a}*
--------------------------------------
• Material Dinding: ${G.brickType.startsWith("hebel")?"Bata Ringan Hebel":"Bata Merah Bakar"}
• Luas Dinding Efektif: ${s.netArea} m²
--------------------------------------
*REKOMENDASI KEBUTUHAN:*
✓ Kebutuhan Bata: ${s.brickPcs} Pcs ${s.brickCubic>0?`(~${s.brickCubic} m³)`:""}
`+(s.mortarBags>0?`✓ Semen Mortar Thinbed: ${s.mortarBags} Sak (40kg)
`:"")+(s.cementBags>0?`✓ Semen Plester/Pasang: ${s.cementBags} Sak (50kg)
`:"")+(s.sandCubic>0?`✓ Pasir Pasang: ~${s.sandCubic} m³
`:"")+`--------------------------------------
Dihitung otomatis via Sistem Toko Putri`}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t).then(()=>{T("Rincian estimasi berhasil disalin ke clipboard!","success")}).catch(()=>{T("Gagal menyalin rincian.","warning")}):T("Clipboard browser tidak didukung.","warning")},zs=e=>{let t="";const a=m.store?.name||"Toko Putri",s=(m.store?.wa||"").replace(/[^0-9]/g,"");if(e==="paint"){const r=mt();t=`Halo ${a}, saya ingin konsultasi kebutuhan cat dinding:

• Luas Bidang Cat: ${r.grandArea} m² (${r.coats}x lapis)
• Estimasi Kebutuhan: ${r.pails>0?`${r.pails} Pail `:""}${r.gallons>0?`${r.gallons} Galon`:""} (${r.totalVolumeLiters} Liter)
`+(r.sealerGallons>0?`• Alkali Sealer: ${r.sealerGallons} Galon
`:"")+`
Mohon info ketersediaan stok & rekomendasi merk cat terbaik. Terima kasih!`}else if(e==="tile"){const r=ft();t=`Halo ${a}, saya ingin konsultasi kebutuhan keramik:

• Ukuran Keramik: ${r.spec.name}
• Luas Bersih + Waste: ${r.totalAreaWithWaste} m²
• Estimasi Kebutuhan: ${r.totalBoxes} Dus
`+(r.adhesiveBags>0?`• Semen Perekat: ${r.adhesiveBags} Sak
`:"")+`
Mohon info pilihan motif & harga terbaik. Terima kasih!`}else if(e==="brick"){const r=bt();t=`Halo ${a}, saya ingin konsultasi pasangan dinding:

• Jenis: ${G.brickType.startsWith("hebel")?"Bata Ringan Hebel":"Bata Merah"}
• Luas Bersih: ${r.netArea} m²
• Kebutuhan: ${r.brickPcs} Pcs ${r.brickCubic>0?`(${r.brickCubic} m³)`:""}
`+(r.mortarBags>0?`• Mortar: ${r.mortarBags} Sak
`:"")+`
Mohon info pengiriman armada ke lokasi proyek. Terima kasih!`}const i=`https://wa.me/${s}?text=${encodeURIComponent(t)}`;window.open(i,"_blank")},Js=(e,t,a)=>{typeof window.posAddToCartQty=="function"&&(T(`Estimasi ${e} (${t} ${a}) siap dimasukkan ke kasir.`),Kt())},Qs=e=>{_e==="pos"?typeof window.posAddToCart=="function"&&(window.posAddToCart(e),T("Produk ditambahkan ke kasir POS!","success")):typeof window.addToCart=="function"&&(window.addToCart(e),T("Produk ditambahkan ke keranjang belanja!","success"))},Zs=(e="storefront")=>{_e=e,typeof window.pushModalHistory=="function"&&window.pushModalHistory("materialEstimator");const t=n("modal-material-estimator");t&&(t.classList.remove("hidden"),setTimeout(()=>{t.classList.remove("opacity-0");const a=n("modal-material-estimator-content");a&&(a.classList.remove("translate-y-full","sm:translate-y-10"),a.classList.add("translate-y-0"))},10),Ie(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Kt=(e=!1)=>{const t=n("modal-material-estimator"),a=n("modal-material-estimator-content"),s=()=>{a&&(a.classList.add("translate-y-full","sm:translate-y-10"),a.classList.remove("translate-y-0")),t&&t.classList.add("opacity-0"),setTimeout(()=>{t&&t.classList.add("hidden")},280)};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("materialEstimator",!1,s):s()};typeof window<"u"&&(window.openMaterialEstimatorModal=Zs,window.closeMaterialEstimatorModal=Kt,window.switchEstimatorTab=Ns,window.setEstimatorPaintMode=Gs,window.updateEstimatorPaintField=Hs,window.updateEstimatorTileField=qs,window.updateEstimatorBrickField=Vs,window.copyEstimatorSummary=Ws,window.shareEstimatorToWA=zs,window.addEstimatorToPOSCart=Js,window.addStoreProductFromEstimator=Qs);let st=[];const Ce=()=>{try{localStorage.setItem("freshmart_my_orders",JSON.stringify(j))}catch(e){console.warn("[MyOrders] Gagal menyimpan ke localStorage:",e)}},Ys=()=>{try{const e=localStorage.getItem("freshmart_my_orders");if(e){const t=JSON.parse(e);Array.isArray(t)&&t.length>0&&We(t)}}catch(e){console.warn("[MyOrders] Gagal memuat dari localStorage:",e)}return j},Nt=()=>{st.forEach(e=>{try{typeof e=="function"&&e()}catch{}}),st=[]},Gt=()=>{Nt(),j.filter(a=>{const s=a.status==="Selesai"||a.status==="Dibatalkan",i=a.claimedReward&&(a.claimedReward.status==="Menunggu Persetujuan"||!a.claimedReward.status);return!s||i}).slice(0,10).forEach(a=>{const s=a.orderId;if(!s)return;const i=q.collection("freshmart_orders").doc(s).onSnapshot(r=>{if(!r.exists)return;const o=r.data(),d=o.status,c=o.claimedReward?o.claimedReward.status:null,b=o.claimedReward&&o.claimedReward.note||"";let A=!1,R="";const F=j.find($=>$.orderId===s);if(F){if(d&&F.status!==d){const $=F.status;F.status=d,A=!0,$!==void 0&&(R=`Pesanan #${s.split("-").pop()} kini: ${d}`)}F.claimedReward&&c&&(F.claimedReward.status!==c||F.claimedReward.note!==b)&&(F.claimedReward.status=c,F.claimedReward.note=b,A=!0),A&&(Ce(),window.curViewName==="view-orders"&&Ue(),R&&T(R))}},r=>{console.warn("[MyOrders Realtime] Snapshot error:",r.message)});st.push(i)})},Ue=async()=>{if(Ys(),!j.length){fe("orders-empty-state"),E("btn-clear-orders"),fe("spacer-orders"),we("orders-items-container","");return}E("orders-empty-state"),fe("btn-clear-orders"),E("spacer-orders"),Gt(),we("orders-items-container",j.map((e,t)=>{const s=Et(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});let i="text-slate-500 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",r="fa-clock";return e.status==="Baru"?(i="text-rose-600 border-rose-200 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400",r="fa-asterisk"):e.status==="Diproses"?(i="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",r="fa-spinner fa-spin"):e.status==="Selesai"?(i="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",r="fa-check-double"):e.status==="Dibatalkan"&&(i="text-slate-400 border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400",r="fa-xmark"),`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group min-w-0 transition-all hover:border-[var(--color-primary)]/40">
            <div class="flex justify-between items-start mb-3 border-b border-slate-100 dark:border-slate-700/60 pb-3">
                <div>
                    <span class="font-bold text-sm text-slate-800 dark:text-white tracking-tight">#${e.orderId.split("-").pop()}</span>
                    <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5"><i class="fa-regular fa-calendar-days mr-1"></i>${s}</p>
                </div>
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-lg border ${i} uppercase tracking-wider flex items-center shadow-xs"><i class="fa-solid ${r} mr-1.5 text-[9px]"></i> ${w(e.status)}</span>
            </div>
            ${e.pointsEarned>0||e.claimedReward?`
            <div class="flex flex-wrap gap-1.5 mb-3">
                ${e.pointsEarned>0?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400"><i class="fa-solid fa-star mr-1"></i>+${e.pointsEarned} Poin</span>`:""}
                ${e.claimedReward?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)]/40 dark:text-[var(--color-primary)]"><i class="fa-solid fa-gift mr-1"></i>Hadiah: ${w(e.claimedReward.name)} ${dt(e.claimedReward)}</span>`:""}
                ${e.claimedReward&&e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-slate-100 text-slate-500 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"><i class="fa-solid fa-wallet mr-1"></i>Sisa: ${e.finalMemberPoints} Poin</span>`:""}
            </div>`:""}
            <div class="flex justify-between items-end mt-2 pt-1">
                <div>
                    <p class="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Total Tagihan</p>
                    <p class="text-[var(--color-primary)] font-bold text-base tracking-tight">${h(e.total)} <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium ml-1">(${e.itemCount} Item)</span></p>
                </div>
                <div class="flex gap-2">
                    <button onclick="openCustomerOrderDetail('${e.orderId}')" class="h-8 px-3.5 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] hover:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.35)] text-[11px] font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5"><i class="fa-solid fa-file-invoice"></i> Detail</button>
                    <button onclick="checkOrderStatus('${e.orderId}', ${t})" class="h-8 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-[11px] font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5"><i class="fa-solid fa-rotate"></i> Status</button>
                </div>
            </div>
        </div>`}).join(""))},Xs=async(e,t)=>{ve("Melacak Status...");try{const a=await q.collection("freshmart_orders").doc(e).get();if(a.exists){const s=a.data();if(j[t])j[t].status=s.status;else{const i=j.findIndex(r=>r.orderId===e);i>-1&&(j[i].status=s.status)}Ce(),Ue(),T(`Status Pesanan: ${s.status}`)}else T("Pesanan tidak ditemukan di server.")}catch(a){console.error("Gagal cek status pesanan:",a),T("Gagal mengambil data sistem. Periksa koneksi.")}finally{oe()}},er=async()=>{const e=n("order-tracking-input"),t=e?e.value.trim():"";if(!t){T("Masukkan ID Pesanan terlebih dahulu!");return}let a=t.replace(/^#/,"").trim();const s=j.find(i=>i.orderId===a||i.orderId.endsWith(a));if(s){rt(s.orderId);return}ve("Mencari Pesanan...");try{let i=await q.collection("freshmart_orders").doc(a).get();if(!i.exists&&!a.startsWith("ORD-")){const r="ORD-"+a,o=await q.collection("freshmart_orders").doc(r).get();o.exists&&(i=o,a=r)}if(i.exists){const r=i.data();j.some(d=>d.orderId===a)||(j.unshift({orderId:a,date:r.dateString||(r.timestamp?r.timestamp.toDate().toISOString():new Date().toISOString()),dateString:r.dateString||(r.timestamp?r.timestamp.toDate().toISOString():new Date().toISOString()),total:r.payment&&r.payment.grandTotal?r.payment.grandTotal:r.total||0,itemCount:(r.items||[]).reduce((d,c)=>d+(parseFloat(c.qty)||0),0),status:r.status||"Baru",pointsEarned:r.pointsEarned||0,claimedReward:r.claimedReward||null,finalMemberPoints:r.finalMemberPoints||null,customerType:r.customerType||"Pelanggan Umum",customer:r.customer||{},items:r.items||[],payment:r.payment||{},isTempo:!!r.isTempo}),Ce(),Ue()),e&&(e.value=""),T("Pesanan berhasil ditemukan!"),rt(a)}else T("Pesanan dengan ID tersebut tidak ditemukan.")}catch(i){console.error("Gagal melacak pesanan:",i),T("Gagal menghubungi server. Pastikan ID Pesanan sudah benar.")}finally{oe()}},tr=()=>{zt("Hapus Riwayat","Riwayat pesanan di perangkat ini akan dihapus. Pesanan tetap tersimpan di sistem toko. Lanjutkan?",()=>{We([]),Ce(),Ue(),T("Riwayat lokal dibersihkan")})},rt=async e=>{const t=Array.isArray(j)?j.find(a=>a.orderId===e):null;if(t&&t.items&&t.items.length>0){window.currentCustomerOrder=t,window.lastPrintedOrder=t,He(e,t,[]),q.collection("freshmart_orders").doc(e).get().then(async a=>{if(a.exists){const s=a.data();s.orderId=s.orderId||a.id||e;let i=[];if(s.status==="Selesai")try{i=(await q.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(c=>`${c.data().productId}::${c.data().variantName||""}`)}catch{}window.currentCustomerOrder=s,window.lastPrintedOrder=s;const r=j.findIndex(d=>d.orderId===s.orderId);r!==-1&&(Object.assign(j[r],s),Ce());const o=document.getElementById("order-detail-modal");o&&!o.classList.contains("hidden")&&!o.classList.contains("opacity-0")&&He(e,s,i,!0)}}).catch(a=>console.warn("[MyOrders] Silent background fetch error:",a));return}ve("Memuat Rincian...");try{const a=await q.collection("freshmart_orders").doc(e).get();if(!a.exists){T("Pesanan tidak ditemukan.");return}const s=a.data();s.orderId=s.orderId||a.id||e;let i=[];if(s.status==="Selesai")try{i=(await q.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(o=>`${o.data().productId}::${o.data().variantName||""}`)}catch{}if(window.currentCustomerOrder=s,window.lastPrintedOrder=s,Array.isArray(j)){const r=j.findIndex(o=>o.orderId===s.orderId);r!==-1&&(Object.assign(j[r],s),Ce())}He(e,s,i)}catch(a){console.error("Gagal mengambil data pesanan:",a),T("Gagal memuat rincian pesanan. Coba beberapa saat lagi.")}finally{oe()}},He=(e,t,a=[],s=!1)=>{try{t&&(t.orderId=t.orderId||e,window.currentCustomerOrder=t,window.lastPrintedOrder=t);let i=document.getElementById("order-detail-modal");i||(i=document.createElement("div"),i.id="order-detail-modal",i.className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 opacity-0 pointer-events-none transition-opacity duration-300",document.body.appendChild(i));const r=w(t.customer&&t.customer.name?t.customer.name:"-"),o=w(t.customer&&t.customer.wa?t.customer.wa:"-"),d=w(t.customer&&t.customer.address?t.customer.address:"-"),c=t.customer&&t.customer.deliveryMethod==="delivery"?"Dikirim ke Alamat":"Ambil di Toko (Pickup)",b=w(t.customer&&t.customer.note?t.customer.note:""),A=!!(t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"),R=A?"Putri PayLater":w(t.payment&&t.payment.method?t.payment.method:"Cash / COD"),F=t.items||[],$=F.some(S=>S.poTime&&S.poTime!==""),W=F.map(S=>{const se=parseFloat(S.qty)||0,Y=parseFloat(S.effectivePrice||S.price)||0,X=se*Y,k=`${S.id}::${S.variantName||""}`,ce=t.status==="Selesai"&&!a.includes(k)&&S.id!==void 0&&S.id!==null;return`
            <div class="flex gap-3 items-center border-b border-slate-100 dark:border-slate-700/50 py-3 last:border-0">
                <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-700" style="background-image:url('${w(S.img||(m&&m.store?m.store.logo:""))}')"></div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate mb-0.5" title="${w(S.name)}">${w(S.name)}</p>
                    ${S.variantName||S.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${S.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded text-[9px] font-semibold">${w(S.variantName)}</span>`:""}
                        ${S.poTime?`<span class="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">PO ${w(S.poTime)}</span>`:""}
                    </div>
                    `:""}
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400">${se} ${w(S.unit||"pcs")} x ${h(Y)}</p>
                    ${ce?`<button type="button" onclick="openReviewModal('${e}',${S.id},'${encodeURIComponent(S.variantName||"")}','${encodeURIComponent(S.name||"")}','${encodeURIComponent(t.customer?.name||"")}')" class="mt-1.5 text-[10px] font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1 transition-colors"><i class="fa-solid fa-star"></i> Berikan Ulasan</button>`:""}
                </div>
                <div class="text-right shrink-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-[var(--color-primary)]">${h(X)}</p>
                </div>
            </div>
            `}).join(""),U=Et(t).toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),p=Jt(t),L=p.subtotal,be=p.shipping,J=p.productDiscount,K=p.shippingDiscount,u=p.pointDiscount,xe=p.grandTotal;i.innerHTML=`
            <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2.25rem] sm:rounded-3xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col shadow-2xl transform translate-y-full sm:translate-y-10 scale-100 transition-transform duration-300 border border-slate-200/90 dark:border-slate-800 overflow-hidden pointer-events-auto" id="order-detail-content">
                <!-- DRAG PULL MOBILE -->
                <div class="pull-indicator w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mx-auto my-2.5 sm:hidden shrink-0"></div>

                <div class="px-5 sm:px-6 pt-3.5 sm:pt-5 pb-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50 dark:bg-slate-800/80">
                    <div>
                        <h3 class="font-black text-slate-800 dark:text-white text-base">Rincian Pesanan</h3>
                        <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">ID: #${e.split("-").pop()}</p>
                    </div>
                    <button onclick="closeCustomerOrderDetailModal()" class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-rose-100 hover:text-rose-500 transition-colors active:scale-95 cursor-pointer" title="Tutup"><i class="fa-solid fa-xmark"></i></button>
                </div>
                
                <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6 hide-scrollbar text-sm" style="padding-bottom: max(6rem, calc(5rem + env(safe-area-inset-bottom))); -webkit-overflow-scrolling: touch; overscroll-behavior-y: contain; touch-action: pan-y;">
                    <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                        <div>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status Pesanan</p>
                            <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40">${w(t.status||"Baru")}</span>
                        </div>
                        <div class="text-right">
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Waktu Pembelian</p>
                            <p class="text-[11px] font-bold text-slate-700 dark:text-slate-300">${U}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-user text-slate-400"></i> Info Pelanggan</h4>
                            <div class="space-y-1 text-xs">
                                <p class="font-bold text-slate-800 dark:text-slate-200">${r}</p>
                                ${t.customer&&t.customer.wa?`<a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${o}'); else window.open('https://wa.me/${o}', '_blank', 'noopener,noreferrer');" class="flex items-center gap-1 text-[var(--color-primary)] font-bold hover:underline cursor-pointer"><i class="fa-brands fa-whatsapp"></i> +${o}</a>`:""}
                                ${t.customer&&t.customer.lat&&t.customer.deliveryMethod==="delivery"?`<a href="https://www.google.com/maps?q=${w(t.customer.lat)},${w(t.customer.lng)}" target="_blank" class="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"><i class="fa-solid fa-location-dot"></i> Lihat Peta</a>`:""}
                            </div>
                        </div>
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-truck text-slate-400"></i> Pengiriman & Bayar</h4>
                            <div class="space-y-1 text-xs">
                                <p><span class="text-slate-500 inline-block w-14">Metode</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${c}</span></p>
                                <p><span class="text-slate-500 inline-block w-14">Bayar</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${R.toUpperCase()}</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2.5">
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1">Alamat Tujuan</p>
                            <p class="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">${d}</p>
                        </div>
                        ${b?`<div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60"><p class="text-[9px] font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest mb-1">Catatan Pembeli</p><p class="text-xs font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic">"${b}"</p></div>`:""}
                    </div>

                    ${t.buktiPayment?`
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-image text-[var(--color-primary)]"></i> Bukti Pembayaran</h4>
                        <a href="${w(t.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border-2 border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] transition-colors shadow-xs">
                            <img src="${w(t.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-52 object-cover" onerror="this.style.display='none'" loading="lazy">
                            <div class="bg-[rgba(var(--color-primary-rgb),0.06)] p-2 flex items-center justify-center gap-1.5 text-[10px] font-bold text-[var(--color-primary)]"><i class="fa-solid fa-arrow-up-right-from-square"></i> Buka Ukuran Penuh</div>
                        </a>
                    </div>`:""}
                    
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-basket-shopping text-slate-400"></i> Daftar Produk</h4>
                        <div class="bg-slate-50 dark:bg-slate-800/30 rounded-xl px-3 py-1 border border-slate-200 dark:border-slate-700/80">
                            ${W}
                        </div>
                    </div>

                    ${$?`
                    <div class="bg-amber-50 dark:bg-amber-900/15 p-3.5 rounded-xl border border-amber-200 dark:border-amber-800/40 flex gap-2.5 items-start">
                        <i class="fa-solid fa-clock text-amber-500 mt-0.5 animate-pulse"></i>
                        <p class="text-[11px] font-semibold text-amber-800 dark:text-amber-300 leading-relaxed">Catatan: Pesanan ini mengandung produk Pre-Order (PO). Khusus produk PO akan dikirimkan menyusul (estimasi sesuai label) tanpa biaya tambahan.</p>
                    </div>`:""}

                    ${t.pointsEarned>0||t.claimedReward||t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null?`
                    <div class="space-y-2">
                        ${t.pointsEarned>0?`<div class="bg-amber-50 dark:bg-amber-900/15 p-3 rounded-xl border border-amber-200 dark:border-amber-800/30 flex items-center gap-2"><i class="fa-solid fa-star text-amber-500"></i><p class="text-xs font-bold text-amber-700 dark:text-amber-400">Mendapat <b>+${t.pointsEarned} Poin</b> dari pesanan ini!</p></div>`:""}
                        ${t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null?`<div class="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2"><i class="fa-solid fa-wallet text-slate-400"></i><p class="text-xs font-semibold text-slate-600 dark:text-slate-300">Saldo Poin Member: <b>${t.finalMemberPoints}</b></p></div>`:""}
                        ${t.claimedReward?`
                        <div class="bg-[rgba(var(--color-primary-rgb),0.06)] p-3 rounded-xl border border-[var(--color-primary)]/20">
                            <div class="flex items-center gap-2"><i class="fa-solid fa-gift text-[var(--color-primary)]"></i><p class="text-xs font-bold text-[var(--color-primary)]">Klaim Hadiah: <b>${w(t.claimedReward.name)}</b> (${t.claimedReward.pointsCost} Poin)</p></div>
                            <p class="text-[11px] font-semibold text-[var(--color-primary)] mt-1 ml-5">${dt(t.claimedReward)}</p>
                            ${t.claimedReward.note?`<p class="text-[11px] text-[var(--color-primary)]/70 italic mt-0.5 ml-5">"${w(t.claimedReward.note)}"</p>`:""}
                        </div>`:""}
                    </div>`:""}

                    <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl space-y-2 text-xs">
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Subtotal Produk</p><p class="font-bold text-slate-800 dark:text-white">${h(L)}</p></div>
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Ongkos Kirim</p><p class="font-bold text-slate-800 dark:text-white">${h(be)}</p></div>
                        ${K>0?`<div class="flex justify-between text-[var(--color-primary)]"><p>Diskon Ongkir</p><p class="font-bold">-${h(K)}</p></div>`:""}
                        ${J>0?`<div class="flex justify-between text-rose-500"><p>Diskon Promo</p><p class="font-bold">-${h(J)}</p></div>`:""}
                        ${u>0?`<div class="flex justify-between text-emerald-600 dark:text-emerald-400"><p>Diskon Poin Member</p><p class="font-bold">-${h(u)}</p></div>`:""}
                        ${A&&p.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Biaya Admin PayLater</p><p class="font-bold text-slate-800 dark:text-white">+${h(p.paylaterAdminFee)}</p></div>`:""}
                        ${A&&p.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Biaya Penanganan / Layanan</p><p class="font-bold text-slate-800 dark:text-white">+${h(p.paylaterServiceFee)}</p></div>`:""}
                        ${p.hasPpn?`
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>DPP (Dasar Pengenaan Pajak)</p><p class="font-bold text-slate-800 dark:text-white">${h(p.dppAmount)}</p></div>
                        <div class="flex justify-between text-amber-600 dark:text-amber-400"><p>${w(p.ppnLabel)}</p><p class="font-bold">${p.ppnAmount>0?(p.isInclusive?"":"+")+h(p.ppnAmount):"Rp 0"}</p></div>
                        `:""}
                        <div class="flex justify-between items-center border-t border-dashed border-slate-300 dark:border-slate-700 pt-3 mt-2">
                            <p class="font-bold text-slate-800 dark:text-white uppercase tracking-wider">Total Tagihan</p>
                            <p class="text-lg font-bold text-[var(--color-primary)]">${h(xe)}</p>
                        </div>
                        ${(()=>{if(!A)return"";const S=Array.isArray(t.payment?.paylaterSchedule)&&t.payment.paylaterSchedule.length>0?t.payment.paylaterSchedule:null,se=t.payment?.paylaterMonths||(S?S.length:1),Y=t.payment?.paylaterMonthlyInstallment||(se>0?Math.round(xe/se):xe);let X="";return S&&S.length>0&&(X=`
                                <div class="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-700/80 space-y-2">
                                    <p class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                        <i class="fa-solid fa-calendar-days text-[var(--color-primary)]"></i> Rencana Jadwal Angsuran Anda:
                                    </p>
                                    <div class="space-y-2">
                                        ${S.map((k,ce)=>{const _=k.installmentIndex||k.installmentNo||k.installmentNumber||k.month||ce+1,B=k.dueDateFormatted||k.dueDateStr||(k.dueDate?new Date(k.dueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"),he=parseFloat(k.total||k.totalMonthly||k.totalInstallment)||Y;return`
                                            <div class="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 flex items-center justify-between gap-3 shadow-2xs">
                                                <div class="flex items-center gap-2.5 min-w-0">
                                                    <div class="w-8 h-8 rounded-xl bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] font-black text-xs flex items-center justify-center shrink-0">
                                                        ${_}
                                                    </div>
                                                    <div class="min-w-0">
                                                        <p class="text-xs font-bold text-slate-800 dark:text-white leading-tight">Bulan ke-${_}</p>
                                                        <p class="text-[10px] text-slate-400 font-mono mt-0.5">Jatuh Tempo: ${B}</p>
                                                    </div>
                                                </div>
                                                <div class="text-right shrink-0">
                                                    <p class="text-xs font-black font-mono text-[var(--color-primary)]">${h(he)}</p>
                                                    <span class="inline-block mt-0.5 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-[9px] font-bold uppercase text-slate-500 dark:text-slate-300">Wajib Bayar</span>
                                                </div>
                                            </div>`}).join("")}
                                    </div>
                                </div>`),`
                            <div class="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-700/80 space-y-2">
                                <div class="flex justify-between text-[var(--color-primary)] font-bold text-xs">
                                    <span>Tenor Cicilan PayLater</span>
                                    <span>${t.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":t.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)"}</span>
                                </div>
                                ${Y?`
                                <div class="flex justify-between text-[var(--color-primary)] font-black text-xs">
                                    <span>Angsuran per Bulan (${se}x)</span>
                                    <span class="font-mono text-sm">${h(Y)}/bln</span>
                                </div>`:""}
                                <div class="flex justify-between text-slate-600 dark:text-slate-400 text-xs">
                                    <span>Jatuh Tempo Pertama</span>
                                    <span class="font-bold">${t.payment?.tempoDueDate?new Date(t.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"}</span>
                                </div>
                                ${X}
                            </div>`})()}
                    </div>

                    <div class="pt-3 flex flex-col sm:flex-row gap-3">
                        ${parseFloat(t.payment?.tempoBalance)>0&&t.status!=="Batal"&&t.payment?.paymentStatus!=="lunas"?`
                        <button type="button" onclick="if(typeof window.openClientPaymentModal==='function') window.openClientPaymentModal('${t.orderId}'); else if(typeof window.showToast==='function') window.showToast('Memuat modul pembayaran...');" class="flex-1 h-12 py-3 px-4 rounded-2xl text-white text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer shadow-md" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-qrcode text-white"></i> Bayar Angsuran / Cicilan
                        </button>
                        `:""}
                        <button type="button" onclick="if(typeof window.openReceiptPreview==='function') window.openReceiptPreview('${t.orderId}'); else if(typeof window.printCustomerReceiptDirect==='function') window.printCustomerReceiptDirect('${t.orderId}'); else window.openCustomerReceiptPreview('${t.orderId}');" class="flex-1 h-12 py-3 px-4 rounded-2xl btn-primary text-xs font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-md">
                            <i class="fa-solid fa-eye text-white/90"></i><i class="fa-solid fa-print"></i> Preview &amp; Cetak Struk
                        </button>
                    </div>
                </div>
            </div>
        `,s||(i.classList.contains("opacity-0")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("customerOrder"),document.body.classList.add("overflow-hidden"),$e(i,"order-detail-content"))}catch(i){console.error("Error Render HTML Modal:",i),T("Gagal menampilkan detail. Coba lagi.")}},ar=(e=!1)=>{const t=()=>{const a=document.getElementById("order-detail-modal"),s=document.getElementById("order-detail-content");De(a,s,()=>{document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none):not(#order-detail-modal)')||document.body.classList.remove("overflow-hidden")})};typeof window.requestCloseModal=="function"?window.requestCloseModal("customerOrder",e,t):t()};window.attachMyOrdersRealtime=Gt;window.detachMyOrdersRealtime=Nt;window.renderMyOrders=Ue;window.checkOrderStatus=Xs;window.trackOrderManual=er;window.clearMyOrders=tr;window.openCustomerOrderDetail=rt;window.renderOrderDetailModal=He;window.closeCustomerOrderDetailModal=ar;window.reviewPhotoFile=null;window.reviewRating=0;const sr=(e,t,a,s,i)=>{const r=decodeURIComponent(a||""),o=decodeURIComponent(s||""),d=decodeURIComponent(i||"");let c=document.getElementById("review-modal");c||(c=document.createElement("div"),c.id="review-modal",c.className="fixed inset-0 z-[120] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",c.onclick=b=>{b.target===c&&wt()},document.body.appendChild(c)),window.reviewPhotoFile=null,window.reviewRating=0,c.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div class="min-w-0">
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-star text-amber-400"></i> Berikan Ulasan</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest truncate">${w(o)}</p>
                </div>
                <button onclick="closeReviewModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all shrink-0"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5 custom-scrollbar">
                <div class="text-center">
                    <p class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Beri Bintang</p>
                    <div class="flex items-center justify-center gap-2" id="review-star-picker">
                        ${[1,2,3,4,5].map(b=>`<button type="button" onclick="setReviewRating(${b})" class="review-star text-3xl text-slate-300 dark:text-slate-600 transition-all hover:scale-110" data-star="${b}"><i class="fa-solid fa-star"></i></button>`).join("")}
                    </div>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Ceritakan Pengalaman Anda</label>
                    <textarea id="review-text" rows="4" placeholder="Bagaimana kualitas produknya?" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 shadow-inner rounded-2xl custom-scrollbar resize-none"></textarea>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Unggah Foto (Opsional)</label>
                    <input type="file" accept="image/*" id="review-photo-input" onchange="handleReviewPhotoSelect(event)" class="hidden">
                    <div id="review-photo-preview-wrap" class="hidden mb-2.5 relative w-24 h-24">
                        <img id="review-photo-preview" class="w-24 h-24 rounded-xl object-cover border border-slate-200 dark:border-slate-700" loading="lazy">
                        <button type="button" onclick="removeReviewPhoto()" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px] shadow"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <button type="button" onclick="document.getElementById('review-photo-input').click()" id="review-photo-btn" class="w-full py-3 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-slate-400 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all cursor-pointer"><i class="fa-solid fa-camera"></i> Tambah Foto Bukti</button>
                </div>
            </div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button id="review-submit-btn" class="btn-primary py-3.5 text-sm shadow-glow !rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"><i class="fa-solid fa-paper-plane"></i> Kirim Ulasan</button>
            </div>
        </div>`,n("review-submit-btn").onclick=()=>xt(e,t,r,o,d),c.style.opacity="0",c.style.display="flex",requestAnimationFrame(()=>{c.style.transition="opacity 0.25s ease",c.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("review")},rr=e=>{window.reviewRating=e,document.querySelectorAll(".review-star").forEach(t=>{const a=parseInt(t.dataset.star);t.classList.toggle("text-amber-400",a<=e),t.classList.toggle("text-slate-300",a>e),t.classList.toggle("dark:text-slate-600",a>e)})},ir=e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/")){T("Hanya file gambar yang diizinkan!");return}if(t.size>5*1024*1024){T("Ukuran gambar max 5MB!");return}window.reviewPhotoFile=t;const a=new FileReader;a.onload=s=>{n("review-photo-preview").src=s.target.result,fe("review-photo-preview-wrap"),E("review-photo-btn")},a.readAsDataURL(t)},or=()=>{window.reviewPhotoFile=null,E("review-photo-preview-wrap"),fe("review-photo-btn");const e=n("review-photo-input");e&&(e.value="")},wt=(e=!1)=>{const t=document.getElementById("review-modal");if(!t||t.style.display==="none")return;const a=()=>{t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250)};if(typeof ye=="function")ye("review",e,a);else if(typeof window.requestCloseModal=="function")window.requestCloseModal("review",e,a);else{if(!e&&Me.length&&Me[Me.length-1]==="review"){Me.pop();try{history.back()}catch{}}a()}},xt=async(e,t,a,s,i)=>{if(!window.reviewRating||window.reviewRating<1)return T("Silakan beri bintang terlebih dahulu!");if(!nt){ue(!0),ve("Mengirim ulasan...");try{let r="";if(window.reviewPhotoFile&&typeof window.uploadBuktiToGDrive=="function"){const c=await window.uploadBuktiToGDrive(window.reviewPhotoFile,"review-"+e);c?r=c:T("Foto gagal diupload, ulasan tetap dikirim tanpa foto.")}const o=Date.now(),d={id:o,orderId:e||"",productId:t??0,variantName:a||"",productName:s||"",customerName:i||"Pelanggan",rating:window.reviewRating,text:ke("review-text")||"",photoUrl:r||"",adminReply:"",isVisible:!0,createdAt:Oe.firestore.FieldValue.serverTimestamp()};await q.collection("freshmart").doc("cms_data").collection("reviews").doc(o.toString()).set(d),it.delete(t),wt(),T("Terima kasih atas ulasan Anda!"),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(r){console.error("Gagal mengirim ulasan:",r),T("Gagal mengirim ulasan: "+(r.message||"Error tidak diketahui"))}finally{ue(!1),oe()}}},it=new Map,nr=5*60*1e3,lr=async e=>{if(!n("product-modal-reviews-container"))return;const a=i=>{const r=i.length?i.reduce((b,A)=>b+(parseFloat(A.rating)||0),0)/i.length:0,o=b=>Array.from({length:5},(A,R)=>`<i class="fa-solid fa-star ${R<Math.round(b)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join("");let d=`
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2"><i class="fa-solid fa-comment-dots text-amber-400"></i> Ulasan Pelanggan</h4>
                ${i.length?`<div class="flex items-center gap-1.5"><span class="flex text-xs">${o(r)}</span><span class="text-xs font-bold text-slate-600 dark:text-slate-300">${r.toFixed(1)}</span><span class="text-[10px] font-bold text-slate-400">(${i.length})</span></div>`:""}
            </div>`;if(!i.length){we("product-modal-reviews-container",d+'<p class="text-[11px] font-bold text-slate-400 text-center py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">Belum ada ulasan untuk produk ini.</p>');return}const c=i.map(b=>{let A="";try{b.createdAt&&b.createdAt.toDate&&(A=b.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}))}catch{}return`
            <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div class="flex items-center justify-between mb-1.5">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${w(b.customerName||"Pelanggan")}</p>
                    <span class="text-[9px] font-bold text-slate-400">${A}</span>
                </div>
                <div class="flex text-[11px] mb-2">${o(b.rating)}</div>
                ${b.variantName?`<p class="text-[10px] font-bold text-slate-400 mb-1.5">Varian: ${w(b.variantName)}</p>`:""}
                ${b.text?`<p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${w(b.text)}</p>`:""}
                ${b.photoUrl?`<div class="w-16 h-16 rounded-xl overflow-hidden mb-3 border border-slate-200 dark:border-slate-700"><img src="${w(b.photoUrl)}" class="w-full h-full object-cover cursor-pointer" onclick="window.open('${w(b.photoUrl)}','_blank')" alt="Foto ulasan"></div>`:""}
                ${b.adminReply?`
                <div class="mt-2.5 p-3 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.2)] rounded-xl">
                    <p class="text-[10px] font-bold text-[var(--color-primary-dark)] dark:text-[var(--color-primary)] mb-1 flex items-center gap-1"><i class="fa-solid fa-reply"></i> Balasan Penjual</p>
                    <p class="text-xs text-slate-600 dark:text-slate-300">${w(b.adminReply)}</p>
                </div>`:""}
            </div>`}).join("");we("product-modal-reviews-container",d+`<div class="space-y-3">${c}</div>`)},s=it.get(e);if(s&&Date.now()-s.timestamp<nr){a(s.data);return}we("product-modal-reviews-container",'<div class="text-center py-6"><i class="fa-solid fa-spinner fa-spin text-xl text-slate-300"></i></div>');try{let r=(await q.collection("freshmart").doc("cms_data").collection("reviews").where("productId","==",e).get()).docs.map(o=>o.data()).filter(o=>o.isVisible!==!1);r.sort((o,d)=>{const c=o.createdAt&&o.createdAt.toMillis?o.createdAt.toMillis():0;return(d.createdAt&&d.createdAt.toMillis?d.createdAt.toMillis():0)-c}),it.set(e,{data:r,timestamp:Date.now()}),a(r)}catch(i){console.warn("Gagal memuat ulasan:",i),we("product-modal-reviews-container",'<p class="text-[11px] text-slate-400 text-center py-4">Belum ada ulasan yang dapat dimuat.</p>')}};window.openReviewModal=sr;window.setReviewRating=rr;window.handleReviewPhotoSelect=ir;window.removeReviewPhoto=or;window.closeReviewModal=wt;window.submitReview=xt;window.submitProductReview=xt;window.loadProductReviews=lr;const dr="admgaffidigital/tokoputri",cr=`https://api.github.com/repos/${dr}/releases/latest`,ot="https://github.com/admgaffidigital/tokoputri/releases/latest/download/TokoPutri.OfficialStore.apk";let Se=null,Ze=!1;const pr=e=>!e||isNaN(e)?"8.0 MB":`${(e/(1024*1024)).toFixed(1)} MB`,ur=e=>{if(!e)return"Terbaru";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return"Terbaru"}},mr=async()=>{if(Se)return Se;if(Ze)return null;const e=at(m)||"v1.10.92";Ze=!0;try{const t=await fetch(cr,{headers:{Accept:"application/vnd.github.v3+json"},cache:"no-store"});if(t.ok){const a=await t.json(),s=a.assets?.find(d=>d.name?.toLowerCase().endsWith(".apk"))||a.assets?.[0],i=a.tag_name||e,r=Is(i,e)>0,o=r?e:i;Se={tagName:o,name:`Toko Putri ( Official Store ) ${o}`,publishedAt:r?"08 Okt 2026":ur(a.published_at),fileSize:s?pr(s.size):"16.3 MB",downloadUrl:s?.browser_download_url||ot,notes:a.body||"",isLiveFetched:!0}}else throw new Error(`GitHub API HTTP ${t.status}`)}catch{const a=at(m)||"v1.10.92";Se={tagName:a,name:`Toko Putri ( Official Store ) ${a}`,publishedAt:"08 Okt 2026",fileSize:"16.3 MB",downloadUrl:ot,notes:"",isLiveFetched:!1}}finally{Ze=!1}return Se},fr=()=>{let e=n("app-download-modal");return e||(e=document.createElement("div"),e.id="app-download-modal",e.className="fixed inset-0 z-[125] bg-slate-950/85 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&Ht()},e.innerHTML=`
    <div id="app-download-modal-box" class="relative w-full max-w-xl max-h-[92dvh] sm:max-h-[88dvh] bg-white dark:bg-[#0b1121] rounded-t-3xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden shadow-2xl transform translate-y-full sm:translate-y-8 transition-transform duration-300">
        
        <!-- Header Gaya Google Play Store -->
        <div class="px-4 sm:px-6 py-3.5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-[#0b1121]/90">
            <div class="flex items-center gap-2">
                <!-- Ikon Google Play Store Segitiga Vektor -->
                <div class="w-7 h-7 rounded-lg bg-slate-900 dark:bg-slate-800 flex items-center justify-center p-1 shadow-2xs">
                    <svg class="w-4 h-4" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M54.7 13.9C46.8 18.2 41.5 26.5 41.5 36.4V475.6C41.5 485.5 46.8 493.8 54.7 498.1L277.6 256L54.7 13.9Z" fill="#2196F3"/>
                        <path d="M352.3 181.3L277.6 256L352.3 330.7L436.4 282.8C454.1 272.8 454.1 239.2 436.4 229.2L352.3 181.3Z" fill="#FFC107"/>
                        <path d="M277.6 256L54.7 498.1C61.4 501.7 69.5 502.2 77.2 497.8L352.3 330.7L277.6 256Z" fill="#4CAF50"/>
                        <path d="M277.6 256L352.3 181.3L77.2 14.2C69.5 9.8 61.4 10.3 54.7 13.9L277.6 256Z" fill="#F44336"/>
                    </svg>
                </div>
                <div>
                    <div class="flex items-center gap-1.5">
                        <span class="text-xs font-black tracking-tight text-slate-800 dark:text-white uppercase">Google Play</span>
                        <span class="text-[9px] font-bold text-slate-400 dark:text-slate-500">• Storefront Resmi</span>
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-2">
                <!-- Badge Play Protect -->
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 text-[10px] font-extrabold text-emerald-700 dark:text-emerald-300 shadow-2xs">
                    <i class="fa-solid fa-shield-halved text-emerald-500"></i>
                    <span>Play Protect</span>
                </div>
                <!-- Tombol Tutup -->
                <button type="button" onclick="closeAppDownloadModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer" aria-label="Tutup">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
        </div>

        <!-- Scrollable Modal Body -->
        <div class="p-4 sm:p-6 overflow-y-auto flex-1 custom-scrollbar space-y-5">
            
            <!-- Kartu Identitas Aplikasi (Play Store Layout) -->
            <div class="flex items-start gap-4">
                <!-- App Icon HD -->
                <div class="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl sm:rounded-3xl bg-[#0f172a] p-1 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700 shrink-0 overflow-hidden flex items-center justify-center">
                    <img src="/official_logo.png" alt="Logo Resmi Toko Putri" class="w-full h-full object-contain p-0.5" onerror="this.src='/logo.png'">
                    <span class="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" title="Status: Online & Ready"></span>
                </div>

                <!-- Info Nama & Developer -->
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h2 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                            Toko Putri ( Official Store )
                        </h2>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 text-[9px] font-black uppercase tracking-wider">
                            <i class="fa-solid fa-crown text-[8px]"></i> Pilihan Kasir
                        </span>
                    </div>
                    <p class="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                        Adm Gaffi Digital • Official Partner
                    </p>
                    <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        Aplikasi resmi kasir, katalog grosir teknik, cetak struk POS, dan belanja online Toko Putri ( Official Store ).
                    </p>
                </div>
            </div>

            <!-- Strip Metrik Google Play Store (4 Kolom Interaktif) -->
            <div class="grid grid-cols-4 gap-2 py-3 px-2 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-center">
                <!-- Rating -->
                <div class="flex flex-col items-center justify-center">
                    <div class="flex items-center gap-1 text-slate-900 dark:text-white text-xs sm:text-sm font-black">
                        <span>4.9</span>
                        <i class="fa-solid fa-star text-[10px] text-amber-400"></i>
                    </div>
                    <span class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">1.2 rb ulasan</span>
                </div>
                <!-- Unduhan -->
                <div class="flex flex-col items-center justify-center border-l border-slate-200 dark:border-slate-800">
                    <div class="flex items-center gap-1 text-slate-900 dark:text-white text-xs sm:text-sm font-black">
                        <span>10 rb+</span>
                    </div>
                    <span class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Unduhan</span>
                </div>
                <!-- Ukuran APK -->
                <div class="flex flex-col items-center justify-center border-l border-slate-200 dark:border-slate-800">
                    <div class="flex items-center gap-1 text-slate-900 dark:text-white text-xs sm:text-sm font-black" id="app-modal-filesize">
                        <span>8.0 MB</span>
                    </div>
                    <span class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Ukuran APK</span>
                </div>
                <!-- Rating Konten -->
                <div class="flex flex-col items-center justify-center border-l border-slate-200 dark:border-slate-800">
                    <div class="inline-flex items-center justify-center w-5 h-5 rounded border border-slate-400 dark:border-slate-600 text-[10px] font-black text-slate-700 dark:text-slate-300">
                        3+
                    </div>
                    <span class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Semua Umur</span>
                </div>
            </div>

            <!-- Tombol CTA Utama Gaya Google Play Store (Hijau Emerald Signature) -->
            <div class="space-y-2">
                <button id="btn-download-apk-action" onclick="downloadLatestApk()" class="w-full py-3.5 px-6 rounded-2xl bg-[#01875f] hover:bg-[#01704f] active:scale-[0.98] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/25 transition-all cursor-pointer group">
                    <i class="fa-solid fa-download group-hover:translate-y-0.5 transition-transform" id="btn-download-apk-icon"></i>
                    <span id="btn-download-apk-text">Unduh &amp; Pasang APK (<span id="app-modal-version-tag">v1.9.49</span>)</span>
                </button>
                <div class="flex items-center justify-between px-1 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                    <span class="flex items-center gap-1.5">
                        <i class="fa-brands fa-android text-emerald-500 text-xs"></i>
                        <span>Kompatibel: Android 7.0 (Nougat) s/d Android 15</span>
                    </span>
                    <span id="app-modal-published-date" class="hidden sm:inline">Rilis: 26 Sep 2026</span>
                </div>
            </div>

            <!-- Kartu QR Code untuk Pengguna Desktop / Laptop -->
            <div id="app-desktop-qr-card" class="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/40 dark:from-slate-900/60 dark:to-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 flex flex-col sm:flex-row items-center gap-4">
                <div class="w-28 h-28 bg-white p-2 rounded-xl shadow-md border border-slate-200/80 dark:border-slate-700 shrink-0 flex items-center justify-center">
                    <img id="app-download-qr-img" src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fgithub.com%2Fadmgaffidigital%2Ftokoputri%2Freleases%2Flatest%2Fdownload%2FTokoPutri.OfficialStore.apk" alt="QR Code Unduh APK" class="w-full h-full object-contain" loading="lazy">
                </div>
                <div class="flex-1 text-center sm:text-left">
                    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-black text-slate-800 dark:text-white">
                        <i class="fa-solid fa-qrcode text-emerald-600 dark:text-emerald-400"></i>
                        <span>Scan untuk Unduh di Ponsel</span>
                    </div>
                    <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        Buka kamera HP Android Anda dan arahkan ke kode QR ini untuk mengunduh langsung ke ponsel tanpa perlu memindahkan file dari komputer.
                    </p>
                    <div class="mt-2 inline-flex items-center gap-2 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                        <i class="fa-solid fa-bolt-lightning text-amber-500"></i>
                        <span>Tautan Otomatis Selalu Versi Terkini</span>
                    </div>
                </div>
            </div>

            <!-- Apa yang Baru (Highlights Changelog v1.9.61) -->
            <div class="space-y-2.5">
                <div class="flex items-center justify-between">
                    <h3 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-sparkles text-amber-500"></i>
                        <span id="app-modal-whats-new-title">Apa yang Baru di v1.9.61</span>
                    </h3>
                    <button type="button" onclick="closeAppDownloadModal(); if(typeof window.openChangelogModal==='function') window.openChangelogModal();" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline cursor-pointer">
                        Lihat Semua Riwayat
                    </button>
                </div>

                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Audit Menyeluruh &amp; Stabilitas State:</b> Memperbaiki referensi state member di sinkronisasi hadiah &amp; piutang tempo, mencegah error saat checkout maupun akses member.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Back Button Android 6 Modal Tambahan:</b> Tombol kembali fisik Android kini menutup modal parkir antrean kasir, scanner POS, dan semua modal piutang tempo secara mulus.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Optimasi Ekstrem Performa Katalog:</b> Mengeliminasi overhead sortir produk di storefront sehingga pencarian dan filter di HP menjadi 5x lebih responsif dan ringan.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Fix Ghost Item Keranjang &amp; PO Restock:</b> Mengeliminasi item berkategori kuantitas 0 saat stok kosong serta deduplikasi batch write produk saat penerimaan barang supplier.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Badge Stok Anti-Tabrakan &amp; Sisa Aktual:</b> Badge stok diposisikan rapi di sudut bawah dan menampilkan sisa stok aktual kasir setelah dikurangi keranjang.
                        </span>
                    </div>
                </div>
            </div>

            <!-- 3 Langkah Mudah Instalasi APK -->
            <div class="space-y-2">
                <h3 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-circle-info text-blue-500"></i>
                    <span>Cara Pasang Aplikasi (APK) di Android</span>
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                        <div class="w-6 h-6 rounded-lg bg-blue-500 text-white text-[11px] font-black flex items-center justify-center mb-1.5">1</div>
                        <h4 class="text-[11px] font-bold text-slate-800 dark:text-white">Unduh APK</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">Ketuk tombol hijau di atas untuk mengunduh TokoPutri(OfficialStore).apk.</p>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                        <div class="w-6 h-6 rounded-lg bg-blue-500 text-white text-[11px] font-black flex items-center justify-center mb-1.5">2</div>
                        <h4 class="text-[11px] font-bold text-slate-800 dark:text-white">Buka File</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">Ketuk notifikasi unduhan selesai di HP Anda.</p>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                        <div class="w-6 h-6 rounded-lg bg-blue-500 text-white text-[11px] font-black flex items-center justify-center mb-1.5">3</div>
                        <h4 class="text-[11px] font-bold text-slate-800 dark:text-white">Izinkan & Pasang</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">Pilih 'Tetap Pasang' jika muncul peringatan sumber tidak dikenal.</p>
                    </div>
                </div>
            </div>

            <!-- Jaminan Keamanan & Privasi -->
            <div class="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                <i class="fa-solid fa-certificate text-emerald-500 text-xl shrink-0"></i>
                <div class="text-[10px] sm:text-[11px] font-semibold text-emerald-900 dark:text-emerald-200">
                    <span class="font-extrabold">100% Bebas Malware &amp; Iklan:</span> File APK ini dikompilasi secara otomatis langsung dari repository resmi GitHub Toko Putri menggunakan GitHub Actions.
                </div>
            </div>

        </div>

        <!-- Footer Modal -->
        <div class="p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#0b1121]/90 flex items-center justify-between shrink-0">
            <div class="flex items-center gap-2 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Server Rilis: GitHub CDN Aktif</span>
            </div>
            <button type="button" onclick="closeAppDownloadModal()" class="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer">
                Tutup
            </button>
        </div>
    </div>`,document.body.appendChild(e),e)},br=async()=>{const e=fr();if(!e)return;Ee("appDownload"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const a=n("app-download-modal-box");a&&a.classList.remove("translate-y-full","sm:translate-y-8")}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light");const t=await mr();if(t){const a=n("app-modal-version-tag"),s=n("app-modal-filesize"),i=n("app-modal-published-date");a&&(a.textContent=t.tagName),s&&(s.innerHTML=`<span>${w(t.fileSize)}</span>`),i&&(i.textContent=`Rilis: ${w(t.publishedAt)}`)}},Ht=(e=!1)=>{const t=n("app-download-modal");!t||t.style.display==="none"||ye("appDownload",e,()=>{t.classList.add("opacity-0");const a=n("app-download-modal-box");a&&a.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{t.style.display="none"},300)})},wr=()=>{const e=n("btn-download-apk-action"),t=n("btn-download-apk-icon"),a=n("btn-download-apk-text");e&&e.classList.add("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-spinner fa-spin"),a&&(a.textContent="Menghubungkan ke Server Rilis..."),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.showToast=="function"&&window.showToast("Memulai unduhan TokoPutri(OfficialStore).apk terbaru. Cek panel notifikasi HP Anda!");const s=Se?.downloadUrl||ot,i=document.createElement("a");i.href=s,i.setAttribute("download","TokoPutri(OfficialStore).apk"),i.target="_blank",i.rel="noopener noreferrer",document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>{if(e&&e.classList.remove("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-circle-check text-white"),a){const r=Se?.tagName||at(m)||"v1.9.49";a.textContent=`Unduh Ulang APK (${r})`}},2500)};window.openAppDownloadModal=br;window.closeAppDownloadModal=Ht;window.downloadLatestApk=wr;window.setCat=e=>{Ft(e),ct(1),typeof window.rCat=="function"&&window.rCat()};window.setBrand=e=>{Lt(e),ct(1),typeof window.rCat=="function"&&window.rCat()};const xr=()=>{let e="",t=tt==="Semua Produk";e+=`
    <button onclick="setCat('Semua Produk'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-colors">
            <i class="fa-solid fa-layer-group text-base sm:text-lg"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA</span>
        <i class="fa-solid fa-circle-check text-base ${t?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
    </button>`,m.categories.forEach(r=>{let o=tt===r.name,d=r.img?`<img loading="lazy" src="${w(r.img)}" alt="${w(r.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Cat'">`:'<i class="fa-solid fa-box text-base sm:text-lg"></i>';e+=`
        <button onclick="setCat('${w(r.name)}'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${o?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden border border-slate-200 dark:border-slate-600">
                ${d}
            </div>
            <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 line-clamp-1 ${o?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${w(r.name)}</span>
            <i class="fa-solid fa-circle-check text-base ${o?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
        </button>`});const a=n("modal-category-list");a&&(a.innerHTML=`<div class="flex flex-col gap-2.5 pb-6 w-full">${e}</div>`);const s=n("category-modal"),i=n("category-modal-content");s&&i&&(s.classList.contains("hidden")&&Ee("category"),$e(s,i))};window.openCategoryModal=xr;window.openBrandModal=()=>{let e="",t=et==="Semua Merek";e+=`
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA MEREK</span>
    </button>`,m.brands.forEach(r=>{let o=et===r.name,d=r.img?`<img loading="lazy" src="${w(r.img)}" alt="${w(r.name)}" class="w-full h-full object-contain p-1.5" >`:'<i class="fa-solid fa-tag text-lg sm:text-xl"></i>';e+=`
        <button onclick="setBrand('${w(r.name)}'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${o?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-2.5 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600">
                ${d}
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${o?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${w(r.name)}</span>
        </button>`});const a=n("modal-brand-grid");a&&(a.innerHTML=e);const s=n("brand-modal"),i=n("brand-modal-content");s&&i&&(s.classList.contains("hidden")&&Ee("brand"),$e(s,i))};window.closeCategoryModal=(e=!1)=>{const t=n("category-modal"),a=n("category-modal-content");t&&a&&ye("category",e,()=>{De(t,a)})};window.closeBrandModal=(e=!1)=>{const t=n("brand-modal"),a=n("brand-modal-content");t&&a&&ye("brand",e,()=>{De(t,a)})};window.openQuickMenuModal=()=>{const e=n("quickmenu-modal"),t=n("quickmenu-modal-content");e&&t&&(e.classList.contains("hidden")&&Ee("quickmenu"),$e(e,t))};window.openTermsModal=()=>{const e=`
      <div class="space-y-3">
        <div class="p-3.5 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.06)] border border-[rgba(var(--color-primary-rgb),0.2)] flex items-start gap-3">
          <i class="fa-solid fa-file-shield text-[var(--color-primary)] text-base shrink-0 mt-0.5"></i>
          <p class="text-xs leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
            Dengan mengakses dan bertransaksi di website <b>Toko Putri</b>, Anda menyetujui seluruh syarat dan ketentuan layanan yang berlaku berikut ini:
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">1</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Ketentuan Umum</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Layanan website Toko Putri diperuntukkan bagi pelanggan yang ingin memesan perkakas, alat teknik, dan perlengkapan pertukangan secara online.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">2</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Pemesanan &amp; Hubungi Admin</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Setiap pesanan yang dibuat melalui keranjang belanja akan diteruskan secara otomatis ke nomor WhatsApp admin untuk konfirmasi akhir dan pengiriman.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">3</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Kebijakan Pembayaran</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Kami mendukung pembayaran Tunai (Cash), COD, Transfer Bank, QRIS, dan sistem Tempo (Kredit) untuk pelanggan dengan limit piutang aktif.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">4</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Kebijakan Retur &amp; Barang PO</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Barang Pre-Order (PO) dikirim sesuai estimasi. Khusus produk cat bangunan yang dicampur (tinting) tidak dapat dibatalkan atau diretur.
          </p>
        </div>
      </div>
    `,t=m?.store?.terms,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;we("terms-modal-content-body",a);const s=n("terms-modal"),i=n("terms-modal-content");s&&i&&(s.classList.contains("hidden")&&Ee("terms"),$e(s,i))};window.closeTermsModal=(e=!1)=>{const t=n("terms-modal"),a=n("terms-modal-content");t&&a&&ye("terms",e,()=>{De(t,a)})};window.openPrivacyModal=()=>{const e=`
      <div class="space-y-3">
        <div class="p-3.5 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.06)] border border-[rgba(var(--color-primary-rgb),0.2)] flex items-start gap-3">
          <i class="fa-solid fa-user-shield text-[var(--color-primary)] text-base shrink-0 mt-0.5"></i>
          <p class="text-xs leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
            Keamanan data dan privasi Anda adalah prioritas utama kami di <b>Toko Putri</b>. Berikut komitmen perlindungan data pelanggan:
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">1</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Data Yang Kami Kumpulkan</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Kami mengumpulkan data berupa Nama, Nomor WhatsApp, dan Alamat Pengiriman Anda saat membuat pesanan untuk keperluan pengantaran barang.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">2</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Kerahasiaan Data</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Toko Putri berkomitmen penuh untuk menjaga kerahasiaan data pribadi pelanggan dan tidak akan membagikannya ke pihak ketiga manapun.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">3</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Keamanan Data Transaksi</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Semua file bukti pembayaran yang diunggah diproses melalui server terenkripsi yang aman untuk mencegah kebocoran data sensitif.
          </p>
        </div>
      </div>
    `,t=m?.store?.privacy,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;we("privacy-modal-content-body",a);const s=n("privacy-modal"),i=n("privacy-modal-content");s&&i&&(s.classList.contains("hidden")&&Ee("privacy"),$e(s,i))};window.closePrivacyModal=(e=!1)=>{const t=n("privacy-modal"),a=n("privacy-modal-content");t&&a&&ye("privacy",e,()=>{De(t,a)})};window.closeQuickMenuModal=(e=!1)=>{const t=n("quickmenu-modal"),a=n("quickmenu-modal-content");t&&a&&ye("quickmenu",e,()=>{De(t,a)})};window.switchGuideTab=(e="customer")=>{["customer","pos","admin"].forEach(s=>{const i=n(`guide-tab-btn-${s}`),r=n(`guide-section-${s}`);s===e?(i&&(i.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-extrabold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer primary-bg text-white"),r&&r.classList.remove("hidden")):(i&&(i.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"),r&&r.classList.add("hidden"))});const a=document.querySelector("#shopping-guide-modal .custom-scrollbar");a&&(a.scrollTop=0)};window.openShoppingGuideModal=(e="customer")=>{const t=n("shopping-guide-modal"),a=n("shopping-guide-modal-content");t&&a&&(typeof window.switchGuideTab=="function"&&window.switchGuideTab(e),t.classList.contains("hidden")&&Ee("guide"),$e(t,a))};window.closeShoppingGuideModal=(e=!1)=>{const t=n("shopping-guide-modal"),a=n("shopping-guide-modal-content");t&&a&&ye("guide",e,()=>{De(t,a)})};window.navigateFromQuickMenu=e=>{closeQuickMenuModal(!0);const t=Me.indexOf("quickmenu");t>-1&&Me.splice(t,1),typeof e=="function"?(history.replaceState({view:Qt},"",window.location.href),e()):(history.replaceState({view:e},"",window.location.href),Zt(e,!0))};let St=!1,Ne=null;const Ve=async()=>St?!0:Ne||(Ne=Promise.all([qe(()=>import("./module-admin-O131Bx8L.js").then(e=>e.e),__vite__mapDeps([0,1,2,3,4,5,6,7])),qe(()=>import("./module-admin-O131Bx8L.js").then(e=>e.h),__vite__mapDeps([0,1,2,3,4,5,6,7]))]).then(()=>(St=!0,!0)),Ne);window.ensureAdminLoaded=Ve;window.checkAdminAccess=async()=>{if(ve("Membuka Panel Owner..."),await Ve(),oe(),typeof window.__checkAdminAccessReal=="function")return window.__checkAdminAccessReal()};typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);typeof window<"u"&&(window.AndroidNativeApp||window.Capacitor||window.location&&(window.location.protocol==="capacitor:"||window.location.protocol==="ionic:"))&&document.documentElement.classList.add("is-native-app");Yt();window.firebase=Oe;window.db=q;window.DOMPurify=ls;window.ensureScriptLoaded=Xt;if(typeof window<"u"){const e=window.print?window.print.bind(window):null;window.print=function(){window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():e&&e()}}window.uiPalettes=ps;window.hexToRgb=us;window.applyUITheme=Rt;window.toggleTheme=ms;window.applyBackgroundStyle=Bt;fs();const gr=localStorage.getItem("freshmart_ui_theme")||"emerald";Rt(gr,localStorage.getItem("freshmart_theme_color"));const Mt=()=>{Ms();const e=localStorage.getItem("freshmart_bg_style")||"minimalist",t=localStorage.getItem("freshmart_bg_custom_url")||"";Bt(e,t),As()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Mt):Mt();window.onerror=function(e,t,a,s,i){return console.error("Global Error Caught:",e,"at",a,":",s),typeof showToast=="function"&&showToast("Ops, ada kendala sistem."),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Promise Rejection Sentinel:",e.reason)});window.addEventListener("vite:preloadError",function(e){console.warn("[Vite] Chunk preload failed (new deployment detected). Auto-reloading...",e);const t="freshmart_preload_reload",a=sessionStorage.getItem(t),s=Date.now();(!a||s-parseInt(a,10)>1e4)&&(sessionStorage.setItem(t,String(s)),window.location.reload())});window.updateSEO=ea;window.injectJSONLD=ta;window.rewardStatusLabel=dt;window.getYouTubeId=aa;window.parseVideoUrl=sa;window.fixDriveVideo=ra;window.fixDriveVideoPreview=ia;let At=Ot;window.calcTaxDetails=e=>{const t=m?.store||{},a=t.ppnEnabled===!0||t.ppnEnabled==="true",s=t.ppnRate!==void 0&&t.ppnRate!==null&&!isNaN(parseFloat(t.ppnRate))?Math.max(0,parseFloat(t.ppnRate)):11,i=t.ppnType||"exclusive",r=t.ppnShowZero!==!1,o=t.ppnTaxLabel||"PPN";if(!a||e<=0)return{ppnEnabled:!1,ppnRate:0,ppnType:i,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0,ppnShowZero:!1,ppnLabel:"PPN"};if(s===0)return{ppnEnabled:!0,ppnRate:0,ppnType:i,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0,ppnShowZero:r,ppnLabel:o};if(i==="inclusive"){const d=Math.round(e*100/(100+s)),c=e-d;return{ppnEnabled:!0,ppnRate:s,ppnType:"inclusive",ppnAmount:c,dppAmount:d,grandTotalAdd:0,ppnShowZero:r,ppnLabel:o}}else{const d=Math.round(e*s/100);return{ppnEnabled:!0,ppnRate:s,ppnType:"exclusive",ppnAmount:d,dppAmount:Math.max(0,e),grandTotalAdd:d,ppnShowZero:r,ppnLabel:o}}};typeof requestIdleCallback<"u"?requestIdleCallback(ht,{timeout:5e3}):setTimeout(ht,3e3);window.isAdm=!1;history.replaceState({view:"view-catalog"},"","");window.addEventListener("DOMContentLoaded",async()=>{try{Ct()}catch(e){console.warn("[NativeMobile] Error:",e)}await bs();try{ws()}catch(e){console.warn("[syncAppMeta] Error:",e)}xs(),gs(),yt(),window.attachRewardsRealtime=yt,qe(()=>import("./module-pos-C4P3NrE3.js").then(e=>e.P),__vite__mapDeps([4,1,2,3,5,6])).then(e=>{typeof e.initPOSAuth=="function"&&e.initPOSAuth()}).catch(e=>console.warn("[POS Auth] Gagal inisialisasi:",e)),ze.onAuthStateChanged(async e=>{if(!Es()){if(e&&e.uid!==Be){try{const t=await q.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(e.uid).get();if(t.exists){const a=t.data()||{};if(a.isActive===!1){Je(),await ze.signOut();return}const s={uid:e.uid,name:a.name||e.email,email:a.email||e.email,role:a.role||Ke.CASHIER,permissions:a.permissions||null,isActive:!0};if(kt(s),s.role===Ke.CASHIER){qe(()=>import("./module-pos-C4P3NrE3.js").then(r=>r.P),__vite__mapDeps([4,1,2,3,5,6])).then(r=>{typeof r.setCashierSession=="function"&&r.setCashierSession(s)}).catch(()=>{}),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();return}await Ve(),window.isAdm=!0,window.__localIsAdm=!0,Pt(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();let i=document.getElementById("view-admin-login");i&&!i.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu());return}}catch{}Je(),await ze.signOut();return}if(e&&e.uid===Be){kt({uid:Be,name:"Owner Toko",email:e.email,role:Ke.OWNER,isActive:!0});try{sessionStorage.setItem("pos_cashier_session",JSON.stringify({uid:Be,name:"Owner Toko",email:e.email,role:Ke.OWNER}))}catch{}await Ve(),await Fs(),Ls(),window.isAdm=!0,window.__localIsAdm=!0,Pt(),typeof window.updatePOSHeaderIcon=="function"?window.updatePOSHeaderIcon():typeof window.initPOSAuth=="function"&&window.initPOSAuth();let t=document.getElementById("view-admin-login");t&&!t.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu(),showToast("Sesi Owner Dipulihkan! Selamat Datang."))}else Cs(),localStorage.removeItem("freshmart_admin_session_id"),Je(),window.isAdm=!1,window.__localIsAdm=!1,hs(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()}})});window.el=n;window.show=fe;window.hide=E;window.toggleCls=ne;window.setIn=ae;window.setH=we;window.setV=Fe;window.getV=ke;window.esc=w;window.fixD=lt;window.fCur=h;window.fAccounting=oa;window.sL=Ye;window.ssL=Ge;window.defaultFbC=pt;window.fbC=pt;window.FIREBASE_CONFIG=pt;window.defApp=na;window.ADMIN_UID=Be;window.sLoad=ve;window.hLoad=oe;window.sanitizeCart=ks;window.initNativeMobileEngine=Ct;window.triggerHaptic=la;window.checkAndEnforceSubscriptionLockout=vs;window.renderSubscriptionNoticeInCMS=ys;window.openRenewalModal=Ps;window.closeRenewalModal=Ts;window.verifyAndApplyLicenseKey=Ss;const P=(e,t,a)=>{try{Object.defineProperty(window,e,{get:t,set:a,configurable:!0})}catch{}};P("GAS_UPLOAD_URL",()=>At,e=>{At=e});P("confirmCb",()=>da,e=>{Xa(e)});P("appData",()=>m,e=>{ca(e)});P("cart",()=>V,e=>{$t(e)});P("wishlist",()=>ua,e=>{pa(e)});P("myOrders",()=>j,e=>{We(e)});P("cust",()=>l,e=>{Dt(e)});P("currentMember",()=>D,e=>{Xe(e)});P("selectedReward",()=>Ae,e=>{Le(e)});P("memberCheckTimer",()=>ma,e=>{es(e)});P("aCat",()=>tt,e=>{Ft(e)});P("aBrand",()=>et,e=>{Lt(e)});P("sQ",()=>ba,e=>{fa(e)});P("cSort",()=>xa,e=>{wa(e)});P("cView",()=>ha,e=>{ga(e)});P("cPage",()=>ka,e=>{ct(e)});P("iPP",()=>ya,e=>{va(e)});P("cTab",()=>Pa,e=>{ts(e)});P("aSq",()=>Ta,e=>{as(e)});P("eId",()=>Sa,e=>{ss(e)});P("cProd",()=>Aa,e=>{Ma(e)});P("cVar",()=>Da,e=>{$a(e)});P("tVars",()=>Ea,e=>{rs(e)});P("tWhol",()=>Fa,e=>{is(e)});P("tSpec",()=>La,e=>{os(e)});P("cQty",()=>Ia,e=>{Ca(e)});P("oMods",()=>Me,e=>{Ra(e)});P("aOrdLst",()=>Oa,e=>{Ba(e)});P("aCustLst",()=>_a,e=>{ja(e)});P("aRevLst",()=>Ka,e=>{Ua(e)});P("gOrds",()=>Ga,e=>{Na(e)});P("gReviews",()=>qa,e=>{Ha(e)});P("cVOrd",()=>Wa,e=>{Va(e)});P("vouch",()=>g,e=>{Pe(e)});P("toastT",()=>za,e=>{ns(e)});P("isSaving",()=>nt,e=>{ue(e)});P("reviewFilterMode",()=>Qa,e=>{Ja(e)});P("lastReportPeriod",()=>Ya,e=>{Za(e)});
