const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/module-admin-P168LFo6.js","assets/module-print-Cvn90pLT.js","assets/vendor-firebase-core-D2OF5R23.js","assets/vendor-firebase-db-BIUZcnOd.js","assets/module-pos-QknI03nH.js","assets/module-member-JeJkYOU_.js","assets/module-faq-BOzito_i.js","assets/vendor-sortable-DzmX_rHT.js"])))=>i.map(i=>d[i]);
import{a as x,g as ve,d as c,e as l,aQ as b,j as Me,h as B,a4 as ce,c as H,f as h,a1 as re,b as we,i as f,ab as oa,aa as ia,y as Ee,s as xe,U as bt,aN as it,ai as Qe,V as fe,l as Pe,n as de,p as R,q as J,t as G,aR as at,w as nt,ah as jt,G as Ie,aS as _t,x as Oe,k as A,m as xt,ak as na,B as Nt,$ as wt,H as la,Z as da,o as Fe,v as Ce,r as Se,al as De,ag as Re,aD as Ut,aw as gt,aF as Kt,ay as lt,at as ca,aT as pa,ax as dt,aU as ua,X as ma,aV as fa,aW as ba,ao as xa,aJ as wa,aL as ga,aK as ha,aX as $t,aY as Ht,_ as Xe,A as st,J as He,F as rt,R as Ve,K as Lt,a3 as ka,aM as ht,a2 as ya,aZ as va,a_ as Pa,a$ as Sa,b0 as Ta,aj as Ma,b1 as Aa,aG as $a,az as La,aH as Da,aB as Ea,aI as Fa,aC as Ca,au as Ra,b2 as Ba,av as Ia,b3 as Oa,b4 as ja,b5 as _a,as as Na,am as Ua,ar as Ka,an as Ha,b6 as Ga,b7 as qa,b8 as Wa,aq as Va,ap as za,b9 as Ja,M as Qa,L as Za,O as Ya,N as Xa,Q as es,P as ts,a0 as as,u as ss,ae as rs,a7 as os,Y as is,W as ns,ba as ls,a9 as ds,a8 as cs,S as ps,I as us,bb as ms,bc as fs,T as bs,af as xs,bd as ws,be as gs,bf as hs,bg as ks,bh as ys}from"./module-print-Cvn90pLT.js";import{f as je}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import{p as vs}from"./vendor-utils-DqNA57iZ.js";import{g as Gt,w as Ps,x as Dt,h as Ss,y as Ts,z as Ms,A as As,u as $s,B as Ls,e as qt,C as Ds,f as Wt,D as Es,E as Fs,v as Cs,F as Rs,G as Bs,H as Et,a as Ft,d as Is,I as Os,J as js,K as _s,L as Ns,M as Us,N as Ks,O as Hs,P as Gs}from"./module-pos-QknI03nH.js";import{G as qs,a as Vt,u as Ws}from"./module-member-JeJkYOU_.js";import{i as Vs,a as zs,b as Js,d as Qs}from"./module-admin-P168LFo6.js";import{a as ct,c as Zs}from"./module-faq-BOzito_i.js";import"./vendor-sortable-DzmX_rHT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const Ys=()=>{const e=l("toggle-droppoint"),t=l("droppoint-form");if(!(!e||!t))if(e.checked)t.classList.remove("hidden");else{t.classList.add("hidden"),c.dropPoint=null;const a=l("dp-location-status");a&&a.classList.add("hidden");const s=l("btn-dp-location");l("text-dp-location"),s&&(s.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>')}},Xs=()=>{if(!navigator.geolocation){typeof window.showToast=="function"&&window.showToast("GPS tidak didukung");return}const e=l("btn-dp-location");e&&(e.innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i> Mengambil GPS...'),navigator.geolocation.getCurrentPosition(t=>{c.dropPoint||(c.dropPoint={}),c.dropPoint.lat=t.coords.latitude,c.dropPoint.lng=t.coords.longitude;const a=l("dp-location-status");a&&a.classList.remove("hidden"),e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">GPS Berhasil! Tap untuk Update</span>'),typeof window.showToast=="function"&&window.showToast("GPS Lokasi Tujuan Berhasil!")},()=>{e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>'),typeof window.showToast=="function"&&window.showToast("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})},zt=e=>{if(!e||e.trim().length<5)return;const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){c.dropPoint||(c.dropPoint={}),c.dropPoint.lat=parseFloat(a.lat),c.dropPoint.lng=parseFloat(a.lng);const s=l("dp-location-status");s&&s.classList.remove("hidden"),typeof window.showToast=="function"&&window.showToast("Koordinat Lokasi Tujuan berhasil!")}},er=async()=>{try{const e=await navigator.clipboard.readText(),t=l("dp-maps-input");t&&(t.value=e,zt(e))}catch{typeof window.showToast=="function"&&window.showToast("Gagal membaca clipboard")}},tr=()=>{if(x.store.isDeliveryEnabled===!1&&x.store.isPickupEnabled===!1){typeof window.showToast=="function"&&window.showToast("Toko tutup!");return}const e=ve("cust-name"),t=(document.querySelector('input[name="delivery-method"]:checked')||{}).value;if(!e||!t){typeof window.showToast=="function"&&window.showToast("Lengkapi form nama!");return}let a=ve("cust-wa").replace(/\D/g,"");if(!a||a.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp wajib diisi! (min. 9 digit)");return}if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),c.name=e,c.deliveryMethod=t,c.note=ve("cust-note"),c.wa=a,t==="delivery"){if(c.address=ve("cust-address"),!c.lat||!c.lng){const i=l("cust-maps-input")?.value;i&&typeof window.handleCustomerMapsInput=="function"&&window.handleCustomerMapsInput(i)}if(!c.address||!c.lat||!c.lng){typeof window.showToast=="function"&&window.showToast("Alamat & GPS wajib!");return}const s=typeof window.getDist=="function"?window.getDist:()=>0;c.distance=s(parseFloat(x.store.lat||0),parseFloat(x.store.lng||0),c.lat,c.lng)||0;const o=l("toggle-droppoint");if(o&&o.checked){let i=ve("dp-receiver-name").trim(),d=ve("dp-receiver-wa").replace(/\D/g,""),n=ve("dp-address").trim();if(!i){typeof window.showToast=="function"&&window.showToast("Nama penerima di lokasi tujuan wajib diisi!");return}if(!d||d.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WA penerima di lokasi tujuan wajib diisi (min. 9 digit)!");return}if(!n){typeof window.showToast=="function"&&window.showToast("Alamat lokasi tujuan wajib diisi!");return}if(!c.dropPoint||!c.dropPoint.lat||!c.dropPoint.lng){typeof window.showToast=="function"&&window.showToast("GPS / Koordinat lokasi tujuan wajib diisi untuk kalkulasi ongkir!");return}d.startsWith("0")?d="62"+d.substring(1):d.startsWith("62")||(d="62"+d),c.dropPoint.name=i,c.dropPoint.wa=d,c.dropPoint.address=n,c.distance=s(parseFloat(x.store.lat||0),parseFloat(x.store.lng||0),c.dropPoint.lat,c.dropPoint.lng)||0}else c.dropPoint=null}else c.address="Ambil di Toko",c.distance=0,c.dropPoint=null;b&&b.type&&b.type.includes("shipping")&&t!=="delivery"&&Me(null),l("voucher-input")&&!b&&(l("voucher-input").value="",B("voucher-msg-container")),typeof window.changeView=="function"&&window.changeView("view-payment")},kt=()=>{ce("address-container","hidden",(document.querySelector('input[name="delivery-method"]:checked')||{}).value==="pickup")},Jt=()=>{const e=l("tnc-checkbox"),t=l("btn-process-order");!e||!t||(e.checked?t.classList.remove("btn-disabled"):t.classList.add("btn-disabled"))},Qt=()=>{if(!H.length){typeof window.showToast=="function"&&window.showToast("Keranjang belanja kosong!"),typeof window.changeView=="function"&&window.changeView("view-catalog",!0);return}if(!c.name){typeof window.showToast=="function"&&window.showToast("Lengkapi data pengiriman terlebih dahulu!"),typeof window.changeView=="function"&&window.changeView("view-checkout",!0);return}const e=typeof window.getEffP=="function"?window.getEffP:p=>p.price||0,t=H.reduce((p,C)=>p+(parseFloat(e(C))||0)*(parseFloat(C.qty)||0),0);let a=0,s=0,o=0;if(c.deliveryMethod==="delivery"&&(a=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(x.store.costPerKm)||0)/500)*500),b&&(b.minPurchase&&parseFloat(b.minPurchase)>0&&t<parseFloat(b.minPurchase)?(Me(null),B("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast(`Voucher dibatalkan (min. belanja ${h(b.minPurchase)})`)):b.targetProduct&&!H.some(p=>p.id===parseInt(b.targetProduct))&&(Me(null),B("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast("Voucher dibatalkan (produk khusus dihapus)"))),b){let p=t;if(b.targetProduct&&b.targetProduct!==""){const C=parseInt(b.targetProduct);p=H.filter(j=>j.id===C).reduce((j,I)=>j+(parseFloat(e(I))||0)*(parseFloat(I.qty)||0),0)}if(b.type==="shipping_free")s=a;else if(b.type==="shipping_flat")s=parseFloat(b.value)||0;else if(b.type==="percent"){let C=p*((parseFloat(b.value)||0)/100);b.maxDiscount&&parseFloat(b.maxDiscount)>0&&(C=Math.min(C,parseFloat(b.maxDiscount))),o=C}else o=parseFloat(b.value)||0,o=Math.min(o,p)}const r=(x.store.freeShippingMinSpendEnabled===!0||x.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(x.store.freeShippingMinSpendAmount)||0)>0&&t>=(parseFloat(x.store.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery";r&&(s=a),s=Math.min(s,a),o=Math.min(o,t);const i=Math.max(0,t-o+(a-s)),n=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(i),u=n.ppnAmount,g=i+n.grandTotalAdd;re("summary-subtotal",h(t)),ce("summary-shipping-row","hidden",c.deliveryMethod!=="delivery");const P=l("summary-discount-row");if(P)if(o>0||s>0){P.classList.remove("hidden");let p="";o>0&&(p+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Promo</p><p class="text-[13px] font-bold text-rose-500">-${h(o)}</p></div>`),s>0&&(p+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">${r?"Gratis Ongkir (Promo Belanja)":"Diskon Ongkir"}</p><p class="text-[13px] font-bold text-rose-500">-${h(s)}</p></div>`),P.innerHTML=p}else P.classList.add("hidden");c.deliveryMethod==="delivery"&&(re("summary-shipping",h(a)),re("summary-distance",`(${c.distance.toFixed(1)}km)`)),re("summary-total",h(g)),l("btn-total-preview")&&re("btn-total-preview",h(g));const v=l("summary-ppn-row");if(v)if(n.ppnEnabled&&(u>0||n.ppnShowZero||n.ppnRate===0)){v.classList.remove("hidden");const C=n.ppnRate!==void 0?`${n.ppnRate}%`:"11%",q=n.ppnLabel||(n.ppnType==="inclusive"?`Termasuk PPN (${C})`:`PPN (${C})`);re("summary-ppn-label",q),n.ppnType==="inclusive"?re("summary-ppn",h(u)):re("summary-ppn",u>0?`+${h(u)}`:h(0))}else v.classList.add("hidden");re("payment-cust-name",c.name||"-"),l("payment-cust-wa")&&(l("payment-cust-wa").textContent=c.wa?"+"+c.wa:"-"),c.dropPoint&&c.dropPoint.lat?re("payment-cust-method",`Kirim ke Lokasi Berbeda (${c.distance.toFixed(1)}km dari Toko)`):re("payment-cust-method",c.deliveryMethod==="delivery"?`Dikirim (${c.distance.toFixed(1)}km)`:"Ambil di Toko"),re("payment-cust-address",c.address||"-");const S=l("payment-droppoint-info");if(S)if(c.dropPoint&&c.dropPoint.lat&&c.dropPoint.name){S.classList.remove("hidden"),re("payment-dp-name",c.dropPoint.name||"-");const p=l("payment-dp-wa");p&&(p.textContent=c.dropPoint.wa?"+"+c.dropPoint.wa:"-"),re("payment-dp-address",c.dropPoint.address||"-")}else S.classList.add("hidden");we("payment-items-preview",H.map(p=>{const C=p.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${f(p.variantName)}</span>`:"",q=p.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${f(p.poTime)}</span>`:"",j=!!(p.img&&typeof p.img=="string"&&p.img.trim()&&!oa(p.img)),I=ia(p,{size:"thumb"});return`
        <div class="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
            <div class="flex items-center gap-3.5 min-w-0">
                <div class="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0 overflow-hidden flex items-center justify-center">
                    ${j?`<img loading="lazy" src="${f(p.img)}" alt="${f(p.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${I}</div>`:I}
                </div>
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate mb-1" title="${f(p.name)}">${f(p.name)}</p>
                    ${p.variantName||p.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${C}
                        ${q}
                    </div>`:""}
                    <p class="text-[11px] text-[var(--color-primary)] font-bold">${parseFloat(p.qty)} ${f(p.unit||"pcs")} x ${h(e(p))}</p>
                </div>
            </div>
            <div class="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap ml-3 shrink-0">${h(e(p)*parseFloat(p.qty))}</div>
        </div>`}).join("")+(Ee?`<div class="flex justify-between items-center bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] p-4 rounded-2xl border border-[var(--color-primary)]/30 shadow-sm min-w-0"><div class="flex items-center gap-3.5 min-w-0"><div class="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div><div class="min-w-0"><p class="text-sm font-bold text-[var(--color-primary)] truncate">${f(Ee.name)}</p><p class="text-[11px] text-[var(--color-primary)] font-bold mt-1"><i class="fa-solid fa-star mr-1"></i>Tukar ${Ee.pointsCost} Poin (Gratis)</p></div></div><button type="button" onclick="if(typeof deselectReward==='function') deselectReward(); rPay();" class="text-[10px] font-bold text-rose-500 uppercase shrink-0 ml-3">Batal</button></div>`:"")),c.note?(re("payment-note-text",`"${f(c.note)}"`),xe("payment-note-preview")):B("payment-note-preview"),we("dynamic-banks-container",x.banks?.length?x.banks.map(p=>`<div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Bank ${f(p.bankName)}</p><p class="text-lg font-bold text-[var(--color-primary)] tracking-wide">${f(p.bankAccount)}</p><p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1.5">a.n <span class="font-bold text-slate-700 dark:text-white">${f(p.bankOwner)}</span></p></div>`).join(""):'<div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 p-4 rounded-2xl text-center"><p class="text-sm text-rose-500 dark:text-rose-400 font-bold">Rekening belum diatur.</p></div>');const O=l("payment-option-cashier"),Y=l("payment-option-cod");if(O&&Y){if(c.deliveryMethod==="pickup"){if(xe("payment-option-cashier"),B("payment-option-cod"),(document.querySelector('input[name="payment"]:checked')||{}).value==="cod"){const p=document.querySelector('input[value="cashier"]');p&&(p.checked=!0)}}else{B("payment-option-cashier"),xe("payment-option-cod");const p=(document.querySelector('input[name="payment"]:checked')||{}).value;if(p==="cashier"||!p){const C=document.querySelector('input[value="cod"]');C&&(C.checked=!0)}}typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()}const D=l("tnc-checkbox");D&&(D.checked=!1,Jt())},ar=async()=>{if(!l("tnc-checkbox").checked||bt)return;if(window.isAdm){typeof window.showToast=="function"&&window.showToast("Sesi Pengelola Aktif. Silakan keluar akun untuk membuat pesanan online.");return}const e=it("freshmart_last_order");if(e&&Date.now()-parseInt(e)<6e4){typeof window.showToast=="function"&&window.showToast("Pesanan sebelumnya sedang kami proses. Mohon beri jeda 1 menit sebelum memesan kembali.");return}const t=typeof window.getEffP=="function"?window.getEffP:r=>r.price||0,a=typeof window.getEffHpp=="function"?window.getEffHpp:()=>0,s=typeof window.getEffPoin=="function"?window.getEffPoin:()=>0;let o=!1;if(H.forEach(r=>{const i=x.products.find(n=>n.id===r.id);if(!i)return;const d=r.variantName?((i.variants||[]).find(n=>n.name===r.variantName)||{}).price??i.price:i.price;d!==void 0&&Math.abs(r.price-d)>1&&(r.price=d,o=!0),r.poin=s(r)}),o){Qe("freshmart_cart",JSON.stringify(H)),typeof window.renderCart=="function"&&window.renderCart(),Qt(),typeof window.showToast=="function"&&window.showToast("Katalog harga telah diperbarui. Mohon periksa kembali rincian belanja Anda.");return}fe(!0),Pe("Memproses Pesanan Anda...");try{const r=H.reduce((w,y)=>w+(parseFloat(t(y))||0)*(parseFloat(y.qty)||0),0);let i=0,d=0,n=0;c.deliveryMethod==="delivery"&&(i=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(x.store.costPerKm)||0)/500)*500);const u=x.store.useStock===!0||x.store.useStock==="true";if(u)for(const w of H){const y=x.products.find($=>$.id===w.id);if(!y||!!(y.poTime&&String(y.poTime).trim()))continue;const F=parseFloat(w.qty)||0;if(w.variantName){const $=(y.variants||[]).find(pe=>pe.name===w.variantName),_=$?$.stock!=null&&$.stock!==""?$.stock:$.stok!=null&&$.stok!==""?$.stok:null:null,Z=_!=null&&!isNaN(parseFloat(_))?parseFloat(_):0;if(Z<F){fe(!1),de(),typeof window.showToast=="function"&&window.showToast(`Persediaan ${w.name} (${w.variantName}) tidak mencukupi (tersisa ${Z} unit).`);return}}else{const $=y.stock!=null&&y.stock!==""?y.stock:y.stok!=null&&y.stok!==""?y.stok:null,_=$!=null&&!isNaN(parseFloat($))?parseFloat($):0;if(_<F){fe(!1),de(),typeof window.showToast=="function"&&window.showToast(`Persediaan ${w.name} tidak mencukupi (tersisa ${_} unit).`);return}}}if(b){let w=r;if(b.targetProduct&&b.targetProduct!==""){const y=parseInt(b.targetProduct);w=H.filter(F=>F.id===y).reduce((F,$)=>F+(parseFloat(t($))||0)*(parseFloat($.qty)||0),0)}if(b.minPurchase&&parseFloat(b.minPurchase)>0&&r<parseFloat(b.minPurchase))Me(null);else if(b.targetProduct&&b.targetProduct!==""&&w===0)Me(null);else if(b.type&&b.type.includes("shipping")&&c.deliveryMethod!=="delivery")Me(null);else if(b.type==="shipping_free")d=i;else if(b.type==="shipping_flat")d=parseFloat(b.value)||0;else if(b.type==="percent"){let y=w*((parseFloat(b.value)||0)/100);b.maxDiscount&&parseFloat(b.maxDiscount)>0&&(y=Math.min(y,parseFloat(b.maxDiscount))),n=y}else n=parseFloat(b.value)||0,n=Math.min(n,w)}const g=(x.store.freeShippingMinSpendEnabled===!0||x.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(x.store.freeShippingMinSpendAmount)||0)>0&&r>=(parseFloat(x.store.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery";g&&(d=i),d=Math.min(d,i),n=Math.min(n,r);const P=Math.max(0,r-n+(i-d)),S=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(P),O=S.ppnAmount,Y=S.dppAmount,D=P+S.grandTotalAdd,p=(document.querySelector('input[name="payment"]:checked')||{}).value,C=parseFloat(document.getElementById("paylater-dp-input")?.value)||0,q=p==="transfer"||p==="qris"||p==="tempo"||p==="paylater"&&C>0,j=window.buktiGDriveUploaded&&window.buktiPaymentUrl&&!window.buktiPaymentUrl.startsWith("data:");if(q&&!j){if(fe(!1),de(),!window.buktiPaymentFile){typeof window.showToast=="function"&&window.showToast("Mohon lampirkan foto struk / bukti pembayaran terlebih dahulu.");return}typeof window.showToast=="function"&&window.showToast("Sedang menyelesaikan unggahan bukti transaksi. Mohon tunggu...");return}const I="ORD-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase();if(window.buktiPaymentFile&&!window.buktiGDriveUploaded)try{Pe("Mengunggah Bukti Pembayaran...");const w=await window.uploadBuktiToFirebase(window.buktiPaymentFile,I);if(w&&!w.startsWith("data:"))window.buktiPaymentUrl=w,window.buktiGDriveUploaded=!0;else{fe(!1),de(),typeof window.showToast=="function"&&window.showToast("Gagal mengunggah berkas bukti. Silakan pilih kembali foto bukti transfer Anda.");return}Pe("Memproses Pesanan Anda...")}catch{fe(!1),de(),typeof window.showToast=="function"&&window.showToast("Koneksi unggah terganggu. Silakan periksa jaringan internet dan coba kembali.");return}const m={orderId:I,timestamp:je.firestore.FieldValue.serverTimestamp(),dateString:new Date().toISOString(),customer:c,isDropPoint:!!(c.dropPoint&&c.dropPoint.lat&&c.dropPoint.name),dropPoint:c.dropPoint&&c.dropPoint.lat&&c.dropPoint.name?{...c.dropPoint}:null,items:H.map(w=>({...w,qty:parseFloat(w.qty),effectivePrice:t(w),poTime:w.poTime||"",hpp:a(w),poin:s(w)})),payment:{method:p,subtotal:r,shippingCost:i,shippingDiscount:d,productDiscount:n,ppnAmount:O,dppAmount:Y,ppnRate:S.ppnEnabled?S.ppnRate:0,ppnType:S.ppnEnabled?S.ppnType:"exclusive",ppnEnabled:!!S.ppnEnabled,ppnShowZero:!!S.ppnShowZero,ppnLabel:S.ppnLabel||"",taxNpwp:x.store?.taxNpwp||x.taxSettings?.npwp||"",grandTotal:D,isFreeShippingPromo:g||!1},status:"Baru",buktiPayment:window.buktiPaymentUrl||null};if(p==="tempo"){if(!c.wa){fe(!1),de(),typeof window.showToast=="function"&&window.showToast("Pembayaran Cash Tempo hanya untuk Member Resmi terdaftar!");return}const w=document.getElementById("tempo-dp-input");let y=w&&parseFloat(w.value)||0;y>D&&(y=D),m.payment.dp=y,m.payment.tempoDp=y,m.payment.tempoBalance=Math.max(0,D-y),m.payment.tempoDueDate=Date.now()+30*24*60*60*1e3,m.payment.paymentStatus=D-y<=0?"lunas":"hutang"}if(p==="paylater"){if(!c.wa||!R||!(R.paylaterActive===!0||R.paylaterActive==="true")){fe(!1),de(),typeof window.showToast=="function"&&window.showToast("Fitur Putri PayLater belum aktif untuk nomor Anda!");return}const w=parseFloat(R.paylaterLimit)||0,y=Math.max(0,parseFloat(R.paylaterUsed)||0),ie=Math.max(0,w-y),F=document.getElementById("paylater-dp-input");let $=F&&parseFloat(F.value)||0;if(D>ie&&$<D-ie){fe(!1),de(),typeof window.showToast=="function"&&window.showToast("Limit PayLater tidak cukup! Wajib bayar DP minimal "+h(D-ie));return}const _=Math.min(ie,Math.max(0,D-$));m.payment.method="tempo",m.payment.subMethod="paylater",m.payment.isPaylater=!0,m.payment.paylaterUsed=_,m.payment.dp=$,m.payment.tempoDp=$;const Z=R?.paylaterDueDay||5,pe=window.selectedCheckoutPaylaterTenor||window.currentPaylaterBreakdown?.tenorKey||"30d",be=Gt(),ee=Ps(_,pe,{...be,dueDay:Z}),te=ee.months,ke=ee.totalAdminFee,X=ee.totalServiceFee,ne=ee.totalPerMonth,K=ee.schedule;m.payment.paylaterTenor=pe,m.payment.paylaterMonths=te,m.payment.paylaterAdminFee=ke,m.payment.paylaterServiceFee=X,m.payment.paylaterMonthlyInstallment=ne,m.payment.paylaterSchedule=K;const le=ee.grandTotal;m.payment.tempoBalance=le;const M=K.length>0?K[K.length-1].dueDate:Date.now()+te*30*24*60*60*1e3;if(m.payment.tempoDueDate=M,m.payment.paymentStatus=le<=0?"lunas":"hutang",m.isTempo=!0,m.paylaterLimitTracked=!1,_>0){if(R){R.paylaterUsed=Math.max(0,parseFloat(R.paylaterUsed)||0)+_;try{localStorage.setItem("freshmart_current_member",JSON.stringify(R))}catch{}}const z=(R?.phone||c.wa||"").replace(/\D/g,""),$e=z.startsWith("0")?"62"+z.slice(1):z;try{await J.collection("freshmart").doc("cms_data").collection("customers").doc($e).update({paylaterUsed:je.firestore.FieldValue.increment(_)}),m.paylaterLimitTracked=!0}catch(me){console.warn("[PayLater] Gagal update pemakaian limit di Firestore:",me.code||me.message||me)}}}const ge=J.collection("freshmart_orders").doc(I),E=typeof window.calculateCartPoints=="function"?window.calculateCartPoints(H,x.store):{totalPoints:0,directPoints:0,spendPoints:0},oe=E.totalPoints;m.pointsEarned=oe,m.pointsBreakdown={direct:E.directPoints,spend:E.spendPoints};const ae=J.collection("freshmart").doc("cms_data"),se=(R?.phone||c.wa||"").replace(/\D/g,""),T=se?se.startsWith("0")?"62"+se.slice(1):se:null,ue=T?ae.collection("customers").doc(T):null,W=!!Ee;let U=null;if(u){const w={};H.forEach(F=>{const $=F.id!=null?F.id.toString():null;if(!$)return;w[$]||(w[$]={main:0,variants:{}});const _=parseFloat(F.unitMultiplier)||1,Z=(parseFloat(F.qty)||0)*_;F.variantName?w[$].variants[F.variantName]=(w[$].variants[F.variantName]||0)+Z:w[$].main+=Z});const y=Object.keys(w),ie=y.map(F=>J.collection("freshmart").doc("cms_data").collection("products").doc(F));await J.runTransaction(async F=>{const $=await Promise.all(ie.map(X=>F.get(X))),_=ue?await F.get(ue):null,Z=!!(_&&_.exists),pe=Z&&W?J.collection("freshmart").doc("cms_data").collection("rewards").doc(Ee.id.toString()):null,be=pe?await F.get(pe):null,ee=[];if($.forEach((X,ne)=>{if(!X.exists)return;const K=X.data(),le=w[y[ne]];if(le.main>0){const M=parseFloat(K.stock!==void 0?K.stock:0);M<le.main&&ee.push(`${K.name} (sisa ${M})`)}Object.keys(le.variants).forEach(M=>{const z=(K.variants||[]).find(me=>me.name===M),$e=parseFloat(z&&z.stock!==void 0?z.stock:0);$e<le.variants[M]&&ee.push(`${K.name} (${M}, sisa ${$e})`)})}),ee.length)throw new Error("STOK_TIDAK_CUKUP: "+ee.join(", "));let te=null,ke=null;if(Z){const X=parseFloat(_.data().points)||0;let ne=X;if(W){if(!be||!be.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const K=be.data();if(X<(parseFloat(K.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(K.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");te=(parseFloat(K.stock)||0)-1,ne-=parseFloat(K.pointsCost)||0,m.claimedReward={id:K.id,name:K.name,pointsCost:parseFloat(K.pointsCost)||0,status:"pending",note:""}}ne+=oe,ke=ne,m.pointsEarned=oe,m.customerPhone=c.wa,m.finalMemberPoints=ke,m.customerType="Member"}else{if(p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(W)throw new Error("MEMBER_TIDAK_DITEMUKAN");m.pointsEarned=0,m.pointsBreakdown={direct:0,spend:0},m.finalMemberPoints=null,m.customerType="Pelanggan Umum"}if($.forEach((X,ne)=>{if(!X.exists)return;const K=y[ne],le=w[K],M=JSON.parse(JSON.stringify(X.data())),z={};le.main>0&&(Dt(M,le.main),z.stock=M.stock,M.storeStock!==void 0&&(z.storeStock=M.storeStock),M.warehouseStock!==void 0&&(z.warehouseStock=M.warehouseStock),Array.isArray(M.stockBatches)&&(z.stockBatches=M.stockBatches),M.hpp&&(z.hpp=M.hpp),M.stock===0&&(M.isActive=!1,z.isActive=!1),M.totalSold=(parseFloat(M.totalSold)||0)+le.main,z.totalSold=M.totalSold),Object.keys(le.variants).length>0&&M.variants&&(Object.keys(le.variants).forEach(me=>{const At=le.variants[me];Dt(M,At,me);const Ke=(M.variants||[]).findIndex(ra=>ra.name===me);Ke>-1&&(M.variants[Ke].stock===0&&(M.variants[Ke].isActive=!1),M.variants[Ke].totalSold=(parseFloat(M.variants[Ke].totalSold)||0)+At)}),z.variants=M.variants,z.stock=M.stock,M.storeStock!==void 0&&(z.storeStock=M.storeStock),M.warehouseStock!==void 0&&(z.warehouseStock=M.warehouseStock),Array.isArray(M.stockBatches)&&(z.stockBatches=M.stockBatches));const $e=x.products.findIndex(me=>me.id.toString()===K);$e>-1&&(x.products[$e]=M),F.update(ie[ne],z)}),F.set(ge,m),Z&&ue&&ke!==null){const X=_.data().name||c.name||"Pelanggan Setia";m.customer&&(m.customer.name=X);const ne={points:ke,name:X,lastOrderAt:Date.now()};F.set(ue,ne,{merge:!0}),U=ke}te!==null&&F.set(pe,{stock:te},{merge:!0}),F.update(ae,{lastUpdate:je.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:y})}),x.lastUpdate=(parseInt(it("freshmart_last_update"))||x.lastUpdate||0)+1,Qe("freshmart_last_update",x.lastUpdate.toString()),Qe("freshmart_products",JSON.stringify(x.products))}else if(ue)await J.runTransaction(async w=>{const y=await w.get(ue),ie=y.exists,F=ie&&W?J.collection("freshmart").doc("cms_data").collection("rewards").doc(Ee.id.toString()):null,$=F?await w.get(F):null;let _=null,Z=null;if(ie){const pe=parseFloat(y.data().points)||0;let be=pe;if(W){if(!$||!$.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const te=$.data();if(pe<(parseFloat(te.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(te.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");_=(parseFloat(te.stock)||0)-1,be-=parseFloat(te.pointsCost)||0,m.claimedReward={id:te.id,name:te.name,pointsCost:parseFloat(te.pointsCost)||0,status:"pending",note:""}}be+=oe,Z=be,m.pointsEarned=oe,m.customerPhone=c.wa,m.finalMemberPoints=Z,m.customerType="Member";const ee=y.data().name||c.name||"Pelanggan Setia";m.customer&&(m.customer.name=ee),w.set(ue,{points:Z,name:ee,lastOrderAt:Date.now()},{merge:!0}),U=Z,_!==null&&w.set(F,{stock:_},{merge:!0})}else{if(p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(W)throw new Error("MEMBER_TIDAK_DITEMUKAN");m.pointsEarned=0,m.pointsBreakdown={direct:0,spend:0},m.finalMemberPoints=null,m.customerType="Pelanggan Umum"}w.set(ge,m)});else{if(m.pointsEarned=0,m.pointsBreakdown={direct:0,spend:0},m.finalMemberPoints=null,m.customerType="Pelanggan Umum",p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");await ge.set(m)}let he=!1;if((m.items||[]).forEach(w=>{typeof window.recordFlashSaleSale=="function"&&window.recordFlashSaleSale(w.id,w.variantName,w.qty)&&(he=!0)}),he&&Array.isArray(x.flashSales))try{await J.collection("freshmart").doc("cms_data").update({flashSales:x.flashSales,lastUpdate:je.firestore.FieldValue.increment(1)})}catch(w){console.warn("[Checkout] Gagal update kuota Flash Sale:",w)}const ye={orderId:I,date:m.dateString||new Date().toISOString(),dateString:m.dateString||new Date().toISOString(),total:D,itemCount:H.reduce((w,y)=>w+parseFloat(y.qty),0),status:"Baru",pointsEarned:m.pointsEarned||0,claimedReward:m.claimedReward||null,finalMemberPoints:U,customerType:m.customerType||"Pelanggan Umum",customer:m.customer||c,items:m.items||[],payment:m.payment||{},isTempo:!!m.isTempo};G.unshift(ye),at(G),window.currentCustomerOrder=m,window.lastPrintedOrder=m;try{localStorage.setItem("freshmart_my_orders",JSON.stringify(G)),localStorage.setItem("freshmart_last_order",Date.now().toString())}catch{}if(typeof analytics<"u"&&analytics.logEvent("purchase",{transaction_id:I,value:D,currency:"IDR"}),c.wa&&U!==null){const w={id:c.wa,phone:c.wa,name:c.name||"Pelanggan Setia",points:U,paylaterActive:R?R.paylaterActive===!0||R.paylaterActive==="true":!1,paylaterLimit:R&&parseFloat(R.paylaterLimit)||0,paylaterUsed:R?Math.max(0,parseFloat(R.paylaterUsed)||0):0,paylaterDueDay:R&&R.paylaterDueDay||5};nt(w);try{localStorage.setItem("freshmart_current_member",JSON.stringify(w)),localStorage.setItem("freshmart_member_wa",c.wa)}catch{}typeof window.invalidateMemberCache=="function"&&window.invalidateMemberCache(c.wa)}else{nt(null);try{localStorage.removeItem("freshmart_current_member")}catch{}}m.claimedReward&&U!==null?typeof window.showToast=="function"&&window.showToast(`Hadiah eksklusif "${m.claimedReward.name}" berhasil ditukarkan! Sisa poin reward Anda: ${U}`):U!==null&&oe>0?typeof window.showToast=="function"&&window.showToast(`Pesanan Anda berhasil dikonfirmasi! (+${oe} Poin Member terkumpul)`):typeof window.showToast=="function"&&window.showToast("Pesanan Anda berhasil dikonfirmasi dan siap diproses!"),setTimeout(()=>{jt([]),Ie("cust-name",""),Ie("cust-address",""),Ie("cust-maps-input",""),Ie("cust-note",""),Ie("cust-wa",""),window.buktiPaymentUrl=null,window.buktiPaymentFile=null,window.buktiGDriveUploaded=!1;const w=l("bukti-preview-wrap"),y=l("bukti-placeholder");w&&w.classList.add("hidden"),y&&y.classList.remove("hidden"),B("bukti-uploading"),B("bukti-success"),B("bukti-gdrive-error");const ie=l("bukti-file-input");ie&&(ie.value=""),_t({name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:"",dropPoint:null}),Me(null),Oe(null);const F=l("toggle-droppoint"),$=l("droppoint-form");F&&(F.checked=!1),$&&$.classList.add("hidden");const _=l("dp-location-status");_&&_.classList.add("hidden");const Z=l("payment-droppoint-info");Z&&Z.classList.add("hidden");const pe=l("dp-receiver-name");pe&&(pe.value="");const be=l("dp-receiver-wa");be&&(be.value="");const ee=l("dp-address");ee&&(ee.value="");const te=l("dp-maps-input");te&&(te.value="");const ke=l("btn-dp-location");ke&&(ke.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan Titik GPS Lokasi Proyek</span>');const X=l("member-status-banner");X&&B(X),B("payment-option-tempo"),l("voucher-input")&&(l("voucher-input").value=""),B("voucher-msg-container"),B("location-status"),l("btn-location")&&xe("btn-location");const ne=document.querySelector('input[name="delivery-method"][value="delivery"]');ne&&(ne.checked=!0,kt());const K=document.querySelector('input[name="payment"][value="transfer"]');K&&(K.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()),typeof window.updCart=="function"&&window.updCart(),typeof window.renderCart=="function"&&window.renderCart();try{window.history.replaceState({view:"view-catalog"},"",window.location.pathname)}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog",!0),typeof window.showToast=="function"&&window.showToast("Pesanan Anda Berhasil Dibuat!")},2e3)}catch(r){const i=r.message||"Error";i.startsWith("STOK_TIDAK_CUKUP:")?typeof window.showToast=="function"&&window.showToast("Ketersediaan stok baru saja diperbarui: "+i.replace("STOK_TIDAK_CUKUP: ","")):i==="TEMPO_KHUSUS_MEMBER"?typeof window.showToast=="function"&&window.showToast("Fasilitas Cash Tempo khusus untuk Rekanan & Member VIP resmi terdaftar."):i==="POIN_TIDAK_CUKUP"?(typeof window.showToast=="function"&&window.showToast("Poin reward Anda belum mencukupi untuk penukaran hadiah ini."),Oe(null)):i==="STOK_HADIAH_HABIS"?(typeof window.showToast=="function"&&window.showToast("Persediaan hadiah yang dipilih baru saja habis. Silakan pilih hadiah lainnya."),Oe(null)):i==="HADIAH_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Hadiah yang dipilih sudah tidak aktif. Silakan pilih hadiah pengganti."),Oe(null)):i==="MEMBER_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Data member tidak terverifikasi. Penukaran hadiah dibatalkan."),Oe(null)):typeof window.showToast=="function"&&window.showToast(r.code==="resource-exhausted"?"Layanan server sedang padat. Mohon coba sesaat lagi.":"Gagal memproses pesanan: "+i)}finally{fe(!1),de()}};window.validateAndGoToPayment=tr;window.toggleDeliveryMethod=kt;window.toggleDropPoint=Ys;window.getDPLocation=Xs;window.handleDPMapsInput=zt;window.pasteDPMapsInput=er;window.toggleOrderButton=Jt;window.rPay=Qt;window.processOrder=ar;const et=e=>typeof window<"u"&&typeof window.getEffP=="function"?window.getEffP(e,"web"):e?.effectivePrice??e?.price??0;window.getLocation=()=>{if(!navigator.geolocation)return A("GPS tidak didukung");l("btn-location").innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i>',navigator.geolocation.getCurrentPosition(e=>{c.lat=e.coords.latitude,c.lng=e.coords.longitude,B("btn-location"),xe("location-status"),l("location-status").classList.add("flex"),A("GPS Didapatkan")},e=>{l("btn-location").innerHTML='<i class="fa-solid fa-location-crosshairs text-[var(--color-primary)]"></i> Set GPS Maps',A("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})};window.handleCustomerMapsInput=e=>{const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){c.lat=parseFloat(a.lat),c.lng=parseFloat(a.lng),B("btn-location"),xe("location-status");const s=l("location-status");return s&&(s.classList.add("flex"),s.innerHTML=`
                <i class="fa-solid fa-circle-check shrink-0 text-lg primary-text"></i>
                <div class="min-w-0">
                    <span class="text-[10px] font-bold uppercase leading-tight tracking-wide primary-text block">Koordinat Berhasil Disematkan!</span>
                    <span class="text-[9px] text-slate-500 dark:text-slate-400 font-mono">${a.lat}, ${a.lng}</span>
                </div>
            `),A("Titik lokasi Maps pembeli berhasil disematkan!"),typeof window.rPay=="function"&&window.rPay(),!0}return!1};window.pasteCustomerMapsInput=async()=>{const e=l("cust-maps-input");if(e){try{if(navigator.clipboard&&navigator.clipboard.readText){const t=await navigator.clipboard.readText();if(t){e.value=t,window.handleCustomerMapsInput(t)||A("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Maps");return}}}catch{}e.focus(),A("Silakan tekan Ctrl+V atau tahan untuk menempel")}};const sr=()=>{const e=x.store.isDeliveryEnabled!==!1,t=x.store.isPickupEnabled!==!1;ce("delivery-option-container","hidden",!e),ce("pickup-option-container","hidden",!t),ce("no-delivery-warning","hidden",e||t),ce("delivery-methods-grid","hidden",!(e||t));const a=l("btn-checkout-next");if(a)if(e||t){a.removeAttribute("disabled"),a.classList.remove("opacity-50");const o=(c.deliveryMethod||"delivery")==="pickup"&&t?"pickup":e?"delivery":"pickup",r=document.querySelector(`input[value="${o}"]`);r&&(r.checked=!0)}else a.setAttribute("disabled","true"),a.classList.add("opacity-50");kt()};window.rChck=sr;window.buktiPaymentUrl=null;window.buktiPaymentFile=null;window.buktiGDriveUploaded=!1;window.compressImageForUpload=(e,t=1600,a=.82)=>new Promise(s=>{const o=new FileReader;o.readAsDataURL(e),o.onload=r=>{const i=new Image;i.onload=()=>{let{width:d,height:n}=i;(d>t||n>t)&&(d>n?(n=Math.round(n*t/d),d=t):(d=Math.round(d*t/n),n=t));const u=document.createElement("canvas");u.width=d,u.height=n,u.getContext("2d").drawImage(i,0,0,d,n),u.toBlob(g=>{if(!g)return s(e);s(new File([g],e.name,{type:"image/jpeg",lastModified:Date.now()}))},"image/jpeg",a)},i.onerror=()=>s(e),i.src=r.target.result},o.onerror=()=>s(e)});window._doSingleGDriveUpload=async(e,t)=>{const a=new FileReader;return new Promise(s=>{a.readAsDataURL(e),a.onload=async()=>{try{const o=a.result.split(",")[1],r=(e.name||"bukti.jpg").replace(/[^a-zA-Z0-9.]/g,"_"),i={name:"BUKTI_"+t+"_"+Date.now()+"_"+r,mimeType:e.type||"image/jpeg",data:o,token:qs},d=await fetch(Vt,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"});if(!d.ok)return console.warn("GDrive upload HTTP error:",d.status),s(null);const n=await d.text();let u;try{u=JSON.parse(n)}catch{return console.warn("GDrive response parse error"),s(null)}u&&u.status==="success"&&u.url?s(xt(u.url)):(console.warn("GDrive upload gagal:",u&&u.message),s(null))}catch(o){console.warn("GDrive upload exception:",o),s(null)}},a.onerror=()=>s(null)})};window.uploadBuktiToGDrive=async(e,t)=>{if(!e)return null;const a=l("bukti-uploading-text");a&&(a.textContent="Mengupload bukti ke Google Drive...");try{return await Ws(e,"BUKTI_"+(t||Date.now()))}catch(s){return console.warn("Gagal upload bukti ke GDrive via GAS:",s),null}};window.handleBuktiUpload=async e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/"))return A("Hanya file gambar yang diizinkan!");if(t.size>5*1024*1024)return A("Ukuran gambar max 5MB!");window.buktiPaymentFile=t,window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const a=new FileReader;a.onload=i=>{const d=l("bukti-preview-img"),n=l("bukti-preview-wrap"),u=l("bukti-placeholder");d&&(d.src=i.target.result),n&&n.classList.remove("hidden"),u&&u.classList.add("hidden")},a.readAsDataURL(t),B("bukti-success"),B("bukti-gdrive-error");const s=l("bukti-uploading");s&&(s.classList.remove("hidden"),s.style.display="flex");const o="TEMP_"+Date.now().toString(36).toUpperCase(),r=await window.uploadBuktiToGDrive(t,o);if(B("bukti-uploading"),r){window.buktiPaymentUrl=r,window.buktiGDriveUploaded=!0;const i=l("bukti-success"),d=l("bukti-success-text"),n=l("bukti-storage-info");d&&(d.textContent="Bukti berhasil disimpan!"),n&&(n.textContent="(tersimpan di Google Drive)"),i&&(i.classList.remove("hidden"),i.style.display="flex"),B("bukti-gdrive-error")}else{window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const i=l("bukti-gdrive-error");i&&(i.classList.remove("hidden"),i.style.display="flex"),B("bukti-success"),A("Upload ke Google Drive gagal. Coba lagi!")}};window.retryBuktiUpload=async()=>{if(!window.buktiPaymentFile)return A("Pilih gambar terlebih dahulu!");B("bukti-gdrive-error"),B("bukti-success");const e=l("bukti-uploading");e&&(e.classList.remove("hidden"),e.style.display="flex");const t="RETRY_"+Date.now().toString(36).toUpperCase(),a=await window.uploadBuktiToGDrive(window.buktiPaymentFile,t);if(B("bukti-uploading"),a){window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0;const s=l("bukti-success"),o=l("bukti-success-text"),r=l("bukti-storage-info");o&&(o.textContent="Bukti berhasil disimpan!"),r&&(r.textContent="(tersimpan di Google Drive)"),s&&(s.classList.remove("hidden"),s.style.display="flex"),A("Upload berhasil!")}else{const s=l("bukti-gdrive-error");s&&(s.classList.remove("hidden"),s.style.display="flex"),A("Masih gagal. Periksa koneksi internet Anda.")}};window.uploadBuktiToFirebase=async(e,t)=>{if(window.buktiGDriveUploaded&&window.buktiPaymentUrl)return window.buktiPaymentUrl;if(!e)return null;const a=await window.uploadBuktiToGDrive(e,t);return a&&(window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0),a};window.togglePaymentDetails=()=>{const e=(document.querySelector('input[name="payment"]:checked')||{}).value;if(ce("detail-transfer","hidden",e!=="transfer"),ce("detail-qris","hidden",e!=="qris"),ce("detail-cashier","hidden",e!=="cashier"),ce("detail-cod","hidden",e!=="cod"),ce("detail-tempo","hidden",e!=="tempo"),ce("detail-paylater","hidden",e!=="paylater"),e==="tempo"&&window.calculateTempoBalance(),e==="paylater"&&window.calculatePaylaterBalance?.(),e==="qris"){const s=l("dyn-qris-img");if(s){const o=x.payment?.qrisUrl||x.store?.qrisUrl||x.payment?.qris||x.store?.qris||x.qrisUrl||"";o&&(s.src=xt(o))}}const t=parseFloat(document.getElementById("paylater-dp-input")?.value)||0,a=e==="transfer"||e==="qris"||e==="tempo"||e==="paylater"&&t>0;ce("bukti-payment-section","hidden",!a)};window.selectedCheckoutPaylaterTenor=window.selectedCheckoutPaylaterTenor||"30d";window.selectCheckoutPaylaterTenor=e=>{window.selectedCheckoutPaylaterTenor=e,typeof window.calculatePaylaterBalance=="function"&&window.calculatePaylaterBalance()};window.calculatePaylaterBalance=()=>{const e=R?Math.max(0,parseFloat(R.paylaterLimit)||0):0,t=R?Math.max(0,parseFloat(R.paylaterUsed)||0):0,a=Math.max(0,e-t),s=R?.paylaterDueDay||5,o=document.getElementById("paylater-limit-display"),r=document.getElementById("paylater-due-display"),i=document.getElementById("paylater-status-box"),d=document.getElementById("paylater-excess-dp-container"),n=document.getElementById("paylater-dp-input"),u=document.getElementById("paylater-tenor-chips-grid"),g=document.getElementById("paylater-tenor-breakdown-box");o&&(o.textContent=h(a)),r&&(r.textContent="Tgl "+s+" Tiap Bulan");let P=H.reduce((W,U)=>W+(parseFloat(et(U))||0)*(parseFloat(U.qty)||0),0),v=0,S=0,O=0;if(c.deliveryMethod==="delivery"&&(v=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(x.store.costPerKm)||0)/500)*500),typeof b<"u"&&b){let W=P;if(b.targetProduct&&b.targetProduct!==""){const U=parseInt(b.targetProduct);W=H.filter(ye=>ye.id===U).reduce((ye,w)=>ye+(parseFloat(et(w))||0)*(parseFloat(w.qty)||0),0)}if(b.type==="shipping_free")O=v;else if(b.type==="shipping_flat")O=parseFloat(b.value)||0;else if(b.type==="percent"){let U=W*((parseFloat(b.value)||0)/100);b.maxDiscount&&parseFloat(b.maxDiscount)>0&&(U=Math.min(U,parseFloat(b.maxDiscount))),S=U}else S=parseFloat(b.value)||0,S=Math.min(S,W)}(x.store?.freeShippingMinSpendEnabled===!0||x.store?.freeShippingMinSpendEnabled==="true")&&(parseFloat(x.store?.freeShippingMinSpendAmount)||0)>0&&P>=(parseFloat(x.store?.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery"&&(O=v),O=Math.min(O,v),S=Math.min(S,P);let D=Math.max(0,P-S),p=Math.max(0,v-O);const C=typeof window.calcTaxDetails=="function"?window.calcTaxDetails(D+p):{grandTotalAdd:0};let q=0;window.useMemberPoints&&R&&(q=Math.min(D+p+C.grandTotalAdd,parseFloat(R.points)||0));let j=Math.max(0,D+p+(C.grandTotalAdd||0)-q),I=0;const m=j>a;if(m){const W=j-a;I=parseFloat(n?.value)||0,I<W&&(I=W,n&&(n.value=I)),d&&d.classList.remove("hidden")}else d&&d.classList.add("hidden"),n&&(n.value=0),I=0;const ge=Math.min(a,Math.max(0,j-I)),E=Gt(),ae=Ss(ge>0?ge:j,{...E,dueDay:s}).results;let se=window.selectedCheckoutPaylaterTenor||"30d";(!ae[se]||!ae[se].enabled)&&(se=Object.keys(ae).find(U=>ae[U].enabled)||"30d",window.selectedCheckoutPaylaterTenor=se);const T=ae[se];if(window.currentPaylaterBreakdown=T,u){const W=["30d","2m","3m"];u.innerHTML=W.map(U=>{const he=ae[U];if(!he||!he.enabled)return"";const ye=U===se;return`
                <button type="button" onclick="window.selectCheckoutPaylaterTenor('${U}')" 
                        class="p-2 sm:p-2.5 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 min-h-[46px] select-none touch-manipulation active:scale-95 ${ye?"border-2 text-[var(--color-primary)] shadow-sm":"border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600"}"
                        style="${ye?"border-color: var(--color-primary); background: rgba(var(--color-primary-rgb), 0.1); box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.15);":""}">
                    <span class="text-[9.5px] font-black uppercase tracking-wider block">${f(he.shortLabel)}</span>
                    <span class="text-[11px] sm:text-xs font-black block" ${ye?'style="color: var(--color-primary);"':""}>${h(he.totalPerMonth)}<span class="text-[8px] font-normal text-slate-400">/bln</span></span>
                </button>
            `}).filter(Boolean).join("")}if(g&&T&&(g.innerHTML=`
            <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 shadow-2xs space-y-1.5 text-xs" style="border-left: 3.5px solid var(--color-primary);">
                <div class="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-700">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                        <i class="fa-solid fa-receipt" style="color: var(--color-primary);"></i> Rincian Tenor ${f(T.label)}
                    </span>
                    <span class="text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                        <i class="fa-solid fa-shield-halved text-[9px] text-emerald-500"></i> Transparan
                    </span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span>Pokok Tagihan (${T.months} bulan)</span>
                    <span class="font-bold text-slate-800 dark:text-slate-200">${h(T.pokokPerMonth)} / bln</span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span class="flex items-center gap-1">Biaya Admin ${T.adminFeeType==="percent"&&T.adminFeeValue>0?`(${T.adminFeeValue}%)`:""}</span>
                    <span class="font-bold ${T.adminFeePerMonth===0?"text-emerald-600 dark:text-emerald-400":"text-slate-800 dark:text-slate-200"}">
                        ${T.adminFeePerMonth===0?"Rp 0 (Gratis)":`${h(T.adminFeePerMonth)} / bln`}
                    </span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span class="flex items-center gap-1">Biaya Penanganan ${T.serviceFeeType==="percent"&&T.serviceFeeValue>0?`(${T.serviceFeeValue}%)`:""}</span>
                    <span class="font-bold ${T.serviceFeePerMonth===0?"text-emerald-600 dark:text-emerald-400":"text-slate-800 dark:text-slate-200"}">
                        ${T.serviceFeePerMonth===0?"Rp 0 (Gratis)":`${h(T.serviceFeePerMonth)} / bln`}
                    </span>
                </div>
                <div class="pt-2 mt-1.5 border-t border-dashed border-slate-200 dark:border-slate-700 flex justify-between items-baseline">
                    <span class="text-[11px] font-black uppercase text-slate-800 dark:text-white">Tagihan per Bulan:</span>
                    <span class="text-sm font-black font-mono" style="color: var(--color-primary);">${h(T.totalPerMonth)} <span class="text-[10px] font-bold text-slate-400">/ bulan</span></span>
                </div>
                <div class="flex justify-between items-center text-[10px] text-slate-500 pt-0.5">
                    <span>Total Tagihan Seluruhnya:</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300">${h(T.grandTotal)}</span>
                </div>
            </div>
        `),!m)i&&(i.innerHTML='<div class="flex items-center gap-2 font-extrabold mb-1" style="color: var(--color-primary);"><i class="fa-solid fa-circle-check text-emerald-500 text-sm"></i><span>Limit PayLater Anda Sangat Cukup!</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Total belanja <b>'+h(j)+"</b> otomatis dipotong dari limit PayLater Anda. Anda <b>tidak perlu bayar sekarang</b> dan tanpa uang muka (DP Rp 0). Angsuran dicicil sesuai tenor "+f(T.label)+" ("+h(T.totalPerMonth)+"/bln) mulai tgl "+s+" bulan depan.</p>");else{const W=j-a;i&&(i.innerHTML='<div class="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-extrabold mb-1"><i class="fa-solid fa-triangle-exclamation text-amber-500 text-sm"></i><span>Total Belanja Melebihi Sisa Limit PayLater</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Sisa limit Anda <b>'+h(a)+"</b> akan digunakan maksimal untuk cicilan "+f(T.label)+" ("+h(T.totalPerMonth)+"/bln). Selisih kekurangan sebesar <b>"+h(W)+"</b> wajib dibayar sebagai DP via Transfer/QRIS.</p>")}const ue=(parseFloat(n?.value)||0)>0;ce("bukti-payment-section","hidden",!ue)};window.calculateTempoBalance=()=>{const e=document.getElementById("tempo-dp-input");let t=parseFloat(e?.value)||0;t<0&&(t=0,e&&(e.value=0));let a=H.reduce((D,p)=>D+(parseFloat(et(p))||0)*(parseFloat(p.qty)||0),0),s=0,o=0,r=0;if(c.deliveryMethod==="delivery"&&(s=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(x.store.costPerKm)||0)/500)*500),b){let D=a;if(b.targetProduct&&b.targetProduct!==""){const p=parseInt(b.targetProduct);D=H.filter(q=>q.id===p).reduce((q,j)=>q+(parseFloat(et(j))||0)*(parseFloat(j.qty)||0),0)}if(b.type==="shipping_free")r=s;else if(b.type==="shipping_flat")r=parseFloat(b.value)||0;else if(b.type==="percent"){let p=D*((parseFloat(b.value)||0)/100);b.maxDiscount&&parseFloat(b.maxDiscount)>0&&(p=Math.min(p,parseFloat(b.maxDiscount))),o=p}else o=parseFloat(b.value)||0,o=Math.min(o,D)}(x.store.freeShippingMinSpendEnabled===!0||x.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(x.store.freeShippingMinSpendAmount)||0)>0&&a>=(parseFloat(x.store.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery"&&(r=s),r=Math.min(r,s),o=Math.min(o,a);let d=Math.max(0,a-o),n=Math.max(0,s-r);const g=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({grandTotalAdd:0}))(d+n)||{grandTotalAdd:0},P=parseFloat(g?.grandTotalAdd)||0;let v=0;window.useMemberPoints&&R&&(v=Math.min(d+n+P,parseFloat(R.points)||0));let S=Math.max(0,d+n+P-v);t>S&&(t=S,e&&(e.value=t));let O=Math.max(0,S-t);const Y=document.getElementById("tempo-balance-display");Y&&(Y.innerText=h(O))};let qe="paint",Ae="storefront",N={mode:"room",length:4,width:3,height:3,openings:4,ceiling:!0,coats:2,directArea:30,includeSealer:!0},V={length:4,width:3,tileSize:"40x40",wastePercent:10,includeAdhesive:!0,includeGrout:!0},Q={length:6,height:3,sides:1,openings:2,brickType:"hebel10",includeMortar:!0},k={roofType:"spandek",mode:"gable",length:8,width:6,slopeAngle:20,overhang:.6,sheetLength:4,directArea:60,includeRidge:!0,includeFasteners:!0};const Ct={"30x30":{name:"30 x 30 cm",coveragePerBox:1,piecesPerBox:11},"40x40":{name:"40 x 40 cm",coveragePerBox:.96,piecesPerBox:6},"50x50":{name:"50 x 50 cm",coveragePerBox:1,piecesPerBox:4},"60x60":{name:"60 x 60 cm",coveragePerBox:1.44,piecesPerBox:4},"80x80":{name:"80 x 80 cm",coveragePerBox:1.92,piecesPerBox:3}},_e={spandek:{id:"spandek",name:"Atap Spandek Galvalum (Zincalume)",shortName:"Spandek Galvalum",effectiveWidth:.75,standardLengths:[{val:3,label:"3.0 Meter"},{val:4,label:"4.0 Meter"},{val:5,label:"5.0 Meter"},{val:6,label:"6.0 Meter"}],defaultLength:4,fastenerName:"Baut Roofing SDS 12-14x50mm",fastenerPackaging:"Box (100 Pcs)",fastenerBoxSize:100,ridgeUnit:"Batang Nok Spandek (1m)"},seng:{id:"seng",name:"Seng Gelombang BJLS / Galvalum",shortName:"Seng Gelombang",effectiveWidth:.75,standardLengths:[{val:1.5,label:"1.5 Meter (5 Kaki)"},{val:1.8,label:"1.8 Meter (6 Kaki)"},{val:2.1,label:"2.1 Meter (7 Kaki)"},{val:2.4,label:"2.4 Meter (8 Kaki)"},{val:3,label:"3.0 Meter (10 Kaki)"}],defaultLength:2.1,fastenerName:"Paku Payung Seng Galvanis",fastenerPackaging:"Kg (isi ~70 Pcs/kg)",fastenerBoxSize:70,ridgeUnit:"Batang Nok Seng BJLS (1m)"},asbes:{id:"asbes",name:"Asbes Gelombang (Fiber Semen)",shortName:"Asbes Gelombang",effectiveWidth:.95,standardLengths:[{val:1.5,label:"1.5 Meter (5 Kaki)"},{val:1.8,label:"1.8 Meter (6 Kaki)"},{val:2.1,label:"2.1 Meter (7 Kaki)"},{val:2.4,label:"2.4 Meter (8 Kaki)"},{val:3,label:"3.0 Meter (10 Kaki)"}],defaultLength:2.1,fastenerName:"Paku Asbes Khusus Karet",fastenerPackaging:"Pack (isi 50 Pcs)",fastenerBoxSize:50,ridgeUnit:"Pasang Nok Asbes Stel"}},yt=()=>{let e=0,t=0;if(N.mode==="room"){const P=Math.max(0,parseFloat(N.length)||0),v=Math.max(0,parseFloat(N.width)||0),S=Math.max(0,parseFloat(N.height)||0),Y=2*(P+v)*S,D=Math.max(0,parseFloat(N.openings)||0);e=Math.max(0,Y-D),N.ceiling&&(t=P*v)}else e=Math.max(0,parseFloat(N.directArea)||0);const a=e+t,s=Math.max(1,parseInt(N.coats,10)||2),r=parseFloat((a*s/11).toFixed(2)),i=Math.floor(r/20),d=r%20,n=Math.ceil(d/2.5),u=N.includeSealer?parseFloat((a/12).toFixed(2)):0,g=N.includeSealer?Math.ceil(u/2.5):0;return{totalWallArea:parseFloat(e.toFixed(2)),ceilingArea:parseFloat(t.toFixed(2)),grandArea:parseFloat(a.toFixed(2)),coats:s,totalVolumeLiters:r,pails:i,gallons:n,sealerVolume:u,sealerGallons:g}},vt=()=>{const e=Math.max(0,parseFloat(V.length)||0),t=Math.max(0,parseFloat(V.width)||0),a=e*t,s=Math.max(0,parseFloat(V.wastePercent)||0),o=1+s/100,r=parseFloat((a*o).toFixed(2)),i=Ct[V.tileSize]||Ct["40x40"],d=i.coveragePerBox>0?Math.ceil(r/i.coveragePerBox):0,n=V.includeAdhesive?Math.ceil(r/8):0,u=V.includeGrout?Math.ceil(r/4):0;return{rawArea:parseFloat(a.toFixed(2)),wastePercent:s,totalAreaWithWaste:r,spec:i,totalBoxes:d,adhesiveBags:n,groutBags:u}},Pt=()=>{const e=Math.max(0,parseFloat(Q.length)||0),t=Math.max(0,parseFloat(Q.height)||0),a=Math.max(1,parseInt(Q.sides,10)||1),s=e*t*a,o=Math.max(0,parseFloat(Q.openings)||0),r=Math.max(0,parseFloat((s-o).toFixed(2)));let i=0,d=0,n=0,u=0,g=0;return Q.brickType==="hebel10"?(i=Math.ceil(r*8.33),d=parseFloat((r/10).toFixed(2)),n=Math.ceil(r/10)):Q.brickType==="hebel75"?(i=Math.ceil(r*8.33),d=parseFloat((r/13.3).toFixed(2)),n=Math.ceil(r/13)):(i=Math.ceil(r*70),g=Math.ceil(r*.45),u=parseFloat((r*.04).toFixed(2))),{rawWallArea:parseFloat(s.toFixed(2)),netArea:r,brickType:Q.brickType,brickPcs:i,brickCubic:d,mortarBags:n,cementBags:g,sandCubic:u}},St=()=>{const e=_e[k.roofType]||_e.spandek,t=e.effectiveWidth,a=parseFloat(k.sheetLength)||e.defaultLength;let s=0,o=0,r=0,i=0,d=0,n=0,u=0,g=0,P=0;const v=Math.max(5,Math.min(60,parseFloat(k.slopeAngle)||20)),S=v*Math.PI/180,O=Math.cos(S),Y=Math.max(0,parseFloat(k.overhang)||0);if(k.mode==="gable"){const D=Math.max(1,parseFloat(k.length)||1),C=Math.max(1,parseFloat(k.width)||1)/2+Y;if(o=parseFloat((C/O).toFixed(2)),r=parseFloat((D+2*Y).toFixed(2)),s=parseFloat((2*(r*o)).toFixed(2)),i=Math.ceil(r/t),a>=o)d=1;else{const j=o-a,I=Math.max(.2,a-.2);d=1+Math.ceil(j/I)}n=i*d*2,k.includeRidge&&(u=Math.ceil(r/.9))}else if(k.mode==="monopitch"){const D=Math.max(1,parseFloat(k.length)||1),C=Math.max(1,parseFloat(k.width)||1)+Y;o=parseFloat((C/O).toFixed(2));const q=parseFloat((D+2*Y).toFixed(2));if(s=parseFloat((q*o).toFixed(2)),i=Math.ceil(q/t),a>=o)d=1;else{const I=o-a,m=Math.max(.2,a-.2);d=1+Math.ceil(I/m)}n=i*d,u=0}else{s=Math.max(1,parseFloat(k.directArea)||1),o=0,r=0,i=0,d=0;const D=t*Math.max(.5,a-.2);n=Math.ceil(s*1.05/D),u=0}return k.includeFasteners&&(k.roofType==="spandek"?(g=Math.max(Math.ceil(s*5),n*8),P=Math.ceil(g/e.fastenerBoxSize)):k.roofType==="seng"?(g=n*8,P=Math.ceil(g/e.fastenerBoxSize)):(g=n*6,P=Math.ceil(g/e.fastenerBoxSize))),{roofType:k.roofType,mode:k.mode,spec:e,sheetLength:a,slopeAngle:v,slopeLength:o,ridgeLength:r,totalRoofArea:s,sheetsAcross:i,sheetsPerSlope:d,totalSheets:n,ridgePieces:u,fastenerPcs:g,fastenerPacks:P}},Ge=e=>{const t=Array.isArray(x.products)?x.products:[];if(e==="paint"){const a=["cat","mowilex","dulux","avitex","no drop","nodrop","plamir","plamur","alkali","sealer","wall sealer","kuas","rol","kuas rol","bak cat","thinner","nippon","aquaproof","danapaint","vinilex","waterproofing","cat tembok","cat kayu","cat besi","cat minyak","propan","jotun","amplas"];return t.filter(s=>{if(!s||s.isActive===!1||s.isActive==="false")return!1;const o=`${s.name||""} ${s.category||""} ${s.subCategory||""}`.toLowerCase();return a.some(r=>o.includes(r))}).slice(0,4)}if(e==="tile"){const a=["keramik","granit","tile","nat","semen nat","tile grout","perekat","perekat keramik","granite","marmer","m-400","mu-400","plint","stepnosing","batu alam","spacer","tile spacer","waterpass","sika","lem keramik"];return t.filter(s=>{if(!s||s.isActive===!1||s.isActive==="false")return!1;const o=`${s.name||""} ${s.category||""} ${s.subCategory||""}`.toLowerCase();return a.some(r=>o.includes(r))}).slice(0,4)}if(e==="brick"){const a=["hebel","bata","bata ringan","bata merah","mortar","semen","semen instan","pasir","thinbed","tiga roda","gresik","padang","semen padang","holcim","dynamix","plester","acian","mu-380","perekat hebel","besi beton","kolom praktis"];return t.filter(s=>{if(!s||s.isActive===!1||s.isActive==="false")return!1;const o=`${s.name||""} ${s.category||""} ${s.subCategory||""}`.toLowerCase();return a.some(r=>o.includes(r))}).slice(0,4)}if(e==="roof"){const a=["spandek","spandex","seng","asbes","atap","zincalume","galvalum","roofing","baut roofing","paku payung","nok","bubungan","nok spandek","baja ringan","reng","baut","sds","genteng","genteng metal","onduline","alderon","polycarbonate","talang","insulasi","alumunium foil","drilling"];return t.filter(s=>{if(!s||s.isActive===!1||s.isActive==="false")return!1;const o=`${s.name||""} ${s.category||""} ${s.subCategory||""}`.toLowerCase();return a.some(r=>o.includes(r))}).slice(0,4)}return[]},ze=(e,t,a,s="fa-tags")=>{const o=Ge(e);return o.length>0?`
        <div class="pt-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                <i class="${t} text-[var(--color-primary)]"></i> ${a}:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${o.map(r=>{const i=!!(r.hasVariants&&Array.isArray(r.variants)&&r.variants.length>0);let d=h(r.price||0);if(i){const u=r.variants.map(g=>parseFloat(g.price)).filter(g=>!isNaN(g)&&g>0);if(u.length>0){const g=Math.min(...u),P=Math.max(...u);d=g===P?h(g):`${h(g)} - ${h(P)}`}}const n=Ae==="pos";return`
                <div class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 flex items-center gap-2 shadow-2xs hover:border-[var(--color-primary)] transition-all">
                    <div onclick="window.handleEstimatorProductCardClick('${f(r.id)}')" class="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 flex items-center justify-center text-xs cursor-pointer" title="Lihat detail ${f(r.name)}">
                        ${r.img?`<img src="${f(r.img)}" class="w-full h-full object-cover">`:`<i class="fa-solid ${s} text-slate-400"></i>`}
                    </div>
                    <div onclick="window.handleEstimatorProductCardClick('${f(r.id)}')" class="min-w-0 flex-1 cursor-pointer" title="Lihat detail ${f(r.name)}">
                        <div class="flex items-center gap-1 min-w-0">
                            ${i?'<span class="px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shrink-0 leading-tight">Varian</span>':""}
                            <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate hover:text-[var(--color-primary)]">${f(r.name)}</p>
                        </div>
                        <p class="text-[10px] font-extrabold text-[var(--color-primary)] truncate mt-0.5">${d}</p>
                    </div>
                    <button type="button" onclick="window.addStoreProductFromEstimator('${f(r.id)}')" class="btn-native-icon w-9 h-9 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-xs hover:opacity-95 active:scale-95 transition-all cursor-pointer shrink-0 shadow-2xs" style="box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);" title="Tambah ${f(r.name)} ke ${n?"Kasir":"Keranjang"}">
                        <i class="fa-solid ${i&&n?"fa-layer-group":"fa-plus"} text-xs"></i>
                    </button>
                </div>
                    `}).join("")}
            </div>
        </div>`:`
    <div class="pt-2">
        <div class="p-3 rounded-xl border border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2.5">
            <i class="fa-solid fa-cubes-stacked text-amber-500 text-sm shrink-0"></i>
            <div class="min-w-0">
                <p class="font-bold text-[11px] text-slate-700 dark:text-slate-200">Katalog Toko Terhubung Otomatis</p>
                <p class="text-[10px] text-slate-500 dark:text-slate-400">Produk yang Anda daftarkan di Master Produk Toko (kategori ${e}) akan otomatis muncul dan dapat dibeli langsung di sini.</p>
            </div>
        </div>
    </div>`},rr=e=>{if(e==="paint")return`
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
            <div class="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <i class="fa-solid fa-paintbrush text-[var(--color-primary)]"></i> Parameter Dinding
                </span>
                <div class="inline-flex p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-700 text-[10px] font-bold">
                    <button type="button" onclick="window.setEstimatorPaintMode('room')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${N.mode==="room"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-extrabold":"text-slate-500"}">Ruangan</button>
                    <button type="button" onclick="window.setEstimatorPaintMode('area')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${N.mode==="area"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-extrabold":"text-slate-500"}">Luas M²</button>
                </div>
            </div>

            ${N.mode==="room"?`
            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Ruang (m)</label>
                    <input type="number" id="paint-input-length" step="0.5" min="1" max="100" value="${N.length}" oninput="window.updateEstimatorPaintField('length', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Lebar Ruang (m)</label>
                    <input type="number" id="paint-input-width" step="0.5" min="1" max="100" value="${N.width}" oninput="window.updateEstimatorPaintField('width', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Tinggi Dinding (m)</label>
                    <input type="number" id="paint-input-height" step="0.25" min="1" max="20" value="${N.height}" oninput="window.updateEstimatorPaintField('height', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase" title="Area pintu dan jendela yang tidak dicat">Pintu/Jendela (m²)</label>
                    <input type="number" id="paint-input-openings" step="0.5" min="0" max="50" value="${N.openings}" oninput="window.updateEstimatorPaintField('openings', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>
            <div class="flex items-center justify-between pt-1">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Cat Plafon Sekalian?</span>
                <input type="checkbox" id="paint-input-ceiling" ${N.ceiling?"checked":""} onchange="window.updateEstimatorPaintField('ceiling', this.checked)"
                    class="w-4 h-4 rounded text-[var(--color-primary)] accent-[var(--color-primary)] cursor-pointer">
            </div>
            `:`
            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase">Total Luas Bidang Cat (m²)</label>
                <input type="number" id="paint-input-directArea" step="1" min="1" max="10000" value="${N.directArea}" oninput="window.updateEstimatorPaintField('directArea', this.value)"
                    class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
            </div>
            `}

            <!-- Layer Pengecatan (Preset Buttons Cerdas Tanpa Rebuild Input) -->
            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Jumlah Lapisan Pengecatan</label>
                <div class="grid grid-cols-3 gap-2" id="paint-coats-button-group">
                    <button type="button" onclick="window.setEstimatorPaintCoats(1)" class="paint-coat-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${N.coats===1?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" data-coats="1">1x Lapis</button>
                    <button type="button" onclick="window.setEstimatorPaintCoats(2)" class="paint-coat-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${N.coats===2?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" data-coats="2">2x Rekomendasi</button>
                    <button type="button" onclick="window.setEstimatorPaintCoats(3)" class="paint-coat-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${N.coats===3?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" data-coats="3">3x Warna Gelap</button>
                </div>
            </div>

            <div class="flex items-center justify-between pt-1">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Termasuk Cat Dasar (Alkali)?</span>
                <input type="checkbox" id="paint-input-sealer" ${N.includeSealer?"checked":""} onchange="window.updateEstimatorPaintField('includeSealer', this.checked)"
                    class="w-4 h-4 rounded text-[var(--color-primary)] accent-[var(--color-primary)] cursor-pointer">
            </div>
        </div>`;if(e==="tile")return`
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
            <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-solid fa-table-cells text-[var(--color-primary)]"></i> Parameter Keramik / Granit
            </span>

            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Lantai (m)</label>
                    <input type="number" id="tile-input-length" step="0.5" min="1" max="100" value="${V.length}" oninput="window.updateEstimatorTileField('length', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Lebar Lantai (m)</label>
                    <input type="number" id="tile-input-width" step="0.5" min="1" max="100" value="${V.width}" oninput="window.updateEstimatorTileField('width', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>

            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Ukuran Keramik / Granit</label>
                <select id="tile-input-size" onchange="window.updateEstimatorTileField('tileSize', this.value)"
                    class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                    <option value="30x30" ${V.tileSize==="30x30"?"selected":""}>30 x 30 cm (1 Dus = 1.00 m² / 11 keping)</option>
                    <option value="40x40" ${V.tileSize==="40x40"?"selected":""}>40 x 40 cm (1 Dus = 0.96 m² / 6 keping)</option>
                    <option value="50x50" ${V.tileSize==="50x50"?"selected":""}>50 x 50 cm (1 Dus = 1.00 m² / 4 keping)</option>
                    <option value="60x60" ${V.tileSize==="60x60"?"selected":""}>60 x 60 cm (1 Dus = 1.44 m² / 4 keping)</option>
                    <option value="80x80" ${V.tileSize==="80x80"?"selected":""}>80 x 80 cm (1 Dus = 1.92 m² / 3 keping)</option>
                </select>
            </div>

            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Cadangan Potongan / Waste Factor</label>
                <div class="grid grid-cols-3 gap-2" id="tile-waste-button-group">
                    <button type="button" onclick="window.setEstimatorTileWaste(5)" class="tile-waste-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${V.wastePercent===5?"border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" style="${V.wastePercent===5?"background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);":""}" data-waste="5">5% Minimal</button>
                    <button type="button" onclick="window.setEstimatorTileWaste(10)" class="tile-waste-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${V.wastePercent===10?"border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" style="${V.wastePercent===10?"background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);":""}" data-waste="10">10% Standar</button>
                    <button type="button" onclick="window.setEstimatorTileWaste(15)" class="tile-waste-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${V.wastePercent===15?"border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" style="${V.wastePercent===15?"background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);":""}" data-waste="15">15% Diagonal</button>
                </div>
            </div>

            <div class="space-y-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Semen Perekat Keramik (Adhesive)?</span>
                    <input type="checkbox" id="tile-input-adhesive" ${V.includeAdhesive?"checked":""} onchange="window.updateEstimatorTileField('includeAdhesive', this.checked)"
                        class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Semen Pengisi Nat (Tile Grout)?</span>
                    <input type="checkbox" id="tile-input-grout" ${V.includeGrout?"checked":""} onchange="window.updateEstimatorTileField('includeGrout', this.checked)"
                        class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                </div>
            </div>
        </div>`;if(e==="brick")return`
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
            <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-solid fa-cubes-stacked text-amber-600"></i> Parameter Pasangan Dinding
            </span>

            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Dinding (m)</label>
                    <input type="number" id="brick-input-length" step="0.5" min="1" max="200" value="${Q.length}" oninput="window.updateEstimatorBrickField('length', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Tinggi Dinding (m)</label>
                    <input type="number" id="brick-input-height" step="0.25" min="1" max="20" value="${Q.height}" oninput="window.updateEstimatorBrickField('height', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>

            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Jumlah Sisi Tembok</label>
                    <input type="number" id="brick-input-sides" min="1" max="20" value="${Q.sides}" oninput="window.updateEstimatorBrickField('sides', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Bukaan Pintu/Jendela (m²)</label>
                    <input type="number" id="brick-input-openings" step="0.5" min="0" max="50" value="${Q.openings}" oninput="window.updateEstimatorBrickField('openings', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>

            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Pilihan Material Dinding</label>
                <select id="brick-input-type" onchange="window.updateEstimatorBrickField('brickType', this.value)"
                    class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                    <option value="hebel10" ${Q.brickType==="hebel10"?"selected":""}>Bata Ringan / Hebel Tebal 10 cm (60x20x10)</option>
                    <option value="hebel75" ${Q.brickType==="hebel75"?"selected":""}>Bata Ringan / Hebel Tebal 7.5 cm (60x20x7.5)</option>
                    <option value="redbrick" ${Q.brickType==="redbrick"?"selected":""}>Bata Merah Bakar Standar</option>
                </select>
            </div>
        </div>`;if(e==="roof"){const t=_e[k.roofType]||_e.spandek;return`
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
            <!-- Header Parameter & Mode Atap -->
            <div class="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <i class="fa-solid fa-house-chimney text-sky-500"></i> Parameter Bidang Atap
                </span>
                <div class="inline-flex p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-700 text-[10px] font-bold">
                    <button type="button" onclick="window.setEstimatorRoofMode('gable')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${k.mode==="gable"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-extrabold":"text-slate-500"}">Pelana</button>
                    <button type="button" onclick="window.setEstimatorRoofMode('monopitch')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${k.mode==="monopitch"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-extrabold":"text-slate-500"}">Kanopi</button>
                    <button type="button" onclick="window.setEstimatorRoofMode('area')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${k.mode==="area"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-extrabold":"text-slate-500"}">Luas M²</button>
                </div>
            </div>

            <!-- Pilihan Jenis Material Atap (Spandek, Seng, Asbes) -->
            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Jenis Material Atap / Penutup</label>
                <div class="grid grid-cols-3 gap-1.5" id="roof-type-button-group">
                    <button type="button" onclick="window.setEstimatorRoofType('spandek')" class="roof-type-btn py-2 px-1.5 rounded-xl text-[11px] font-extrabold transition-all border cursor-pointer text-center ${k.roofType==="spandek"?"border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" data-rooftype="spandek">
                        <i class="fa-solid fa-layer-group block text-xs mb-1 ${k.roofType==="spandek"?"text-sky-500":"text-slate-400"}"></i>
                        Spandek
                    </button>
                    <button type="button" onclick="window.setEstimatorRoofType('seng')" class="roof-type-btn py-2 px-1.5 rounded-xl text-[11px] font-extrabold transition-all border cursor-pointer text-center ${k.roofType==="seng"?"border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" data-rooftype="seng">
                        <i class="fa-solid fa-water block text-xs mb-1 ${k.roofType==="seng"?"text-amber-500":"text-slate-400"}"></i>
                        Seng
                    </button>
                    <button type="button" onclick="window.setEstimatorRoofType('asbes')" class="roof-type-btn py-2 px-1.5 rounded-xl text-[11px] font-extrabold transition-all border cursor-pointer text-center ${k.roofType==="asbes"?"border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" data-rooftype="asbes">
                        <i class="fa-solid fa-bars-staggered block text-xs mb-1 ${k.roofType==="asbes"?"text-emerald-500":"text-slate-400"}"></i>
                        Asbes
                    </button>
                </div>
            </div>

            <!-- Pilihan Panjang Lembar -->
            <div>
                <div class="flex items-center justify-between mb-1">
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Lembar Pilihan</label>
                    <span class="text-[10px] font-mono font-bold text-sky-600 dark:text-sky-400" id="roof-effective-width-badge">Lebar Efektif: ${t.effectiveWidth*100} cm</span>
                </div>
                <select id="roof-input-sheetLength" onchange="window.updateEstimatorRoofField('sheetLength', this.value)"
                    class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                    ${t.standardLengths.map(a=>`
                        <option value="${a.val}" ${parseFloat(k.sheetLength)===a.val?"selected":""}>${a.label}</option>
                    `).join("")}
                </select>
            </div>

            ${k.mode!=="area"?`
            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">${k.mode==="gable"?"P. Bangunan (m)":"Lebar Kanopi (m)"}</label>
                    <input type="number" id="roof-input-length" step="0.5" min="1" max="100" value="${k.length}" oninput="window.updateEstimatorRoofField('length', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">${k.mode==="gable"?"Bentang Lebar (m)":"P. Jatuh Air (m)"}</label>
                    <input type="number" id="roof-input-width" step="0.5" min="1" max="100" value="${k.width}" oninput="window.updateEstimatorRoofField('width', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>

            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Sudut Miring (°)</label>
                    <input type="number" id="roof-input-slopeAngle" step="1" min="5" max="60" value="${k.slopeAngle}" oninput="window.updateEstimatorRoofField('slopeAngle', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase" title="Lebar cucuran atap keluar dinding">Overstek (m)</label>
                    <input type="number" id="roof-input-overhang" step="0.1" min="0" max="3" value="${k.overhang}" oninput="window.updateEstimatorRoofField('overhang', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>

            <!-- Preset Sudut Cepat (Tanpa Rebuild Input) -->
            <div class="pt-0.5">
                <label class="text-[9px] font-bold text-slate-400 uppercase mb-1 block">Preset Sudut Kemiringan</label>
                <div class="grid grid-cols-4 gap-1.5" id="roof-angle-button-group">
                    ${[15,20,25,30].map(a=>`
                        <button type="button" onclick="window.setEstimatorRoofAngle(${a})" class="roof-angle-btn py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer ${parseFloat(k.slopeAngle)===a?"bg-sky-50 dark:bg-sky-950/60 border-sky-400 text-sky-700 dark:text-sky-300 shadow-2xs":"bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500"}" data-angle="${a}">${a}°</button>
                    `).join("")}
                </div>
            </div>
            `:`
            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase">Total Luas Bidang Atap (m²)</label>
                <input type="number" id="roof-input-directArea" step="1" min="1" max="10000" value="${k.directArea}" oninput="window.updateEstimatorRoofField('directArea', this.value)"
                    class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
            </div>
            `}

            <!-- Checkboxes Nok & Pengencang -->
            <div class="space-y-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                ${k.mode==="gable"?`
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Sertakan Nok Bubungan Puncak?</span>
                    <input type="checkbox" id="roof-input-ridge" ${k.includeRidge?"checked":""} onchange="window.updateEstimatorRoofField('includeRidge', this.checked)"
                        class="w-4 h-4 rounded text-sky-600 accent-sky-600 cursor-pointer">
                </div>
                `:""}
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Sertakan Baut / Paku?</span>
                    <input type="checkbox" id="roof-input-fasteners" ${k.includeFasteners?"checked":""} onchange="window.updateEstimatorRoofField('includeFasteners', this.checked)"
                        class="w-4 h-4 rounded text-sky-600 accent-sky-600 cursor-pointer">
                </div>
            </div>
        </div>`}return""},Zt=e=>{if(e==="paint"){const t=yt();return Ge("paint"),`
        <!-- Bento Result Card -->
        <div class="p-5 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl border border-slate-700/80 relative overflow-hidden">
            <div class="flex items-start justify-between gap-3 relative z-10">
                <div>
                    <span class="text-[10px] font-black uppercase tracking-widest text-amber-400">Hasil Estimasi Cat Resmi</span>
                    <h4 class="text-2xl sm:text-3xl font-black mt-1 tracking-tight text-white">
                        ${t.pails>0?`${t.pails} Pail (20L) `:""}${t.gallons>0?`+ ${t.gallons} Galon (2.5L)`:t.pails===0?"1 Galon":""}
                    </h4>
                    <p class="text-xs text-slate-300 mt-1">Total kebutuhan volume: <b class="text-white">${t.totalVolumeLiters} Liter / Kg</b> (${t.coats}x lapis)</p>
                </div>
                <div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-xl text-amber-400 border border-slate-700 shrink-0">
                    <i class="fa-solid fa-bucket"></i>
                </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-white/15 relative z-10 text-xs">
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-slate-400 font-bold uppercase">Luas Dinding</p>
                    <p class="text-sm font-black text-white mt-0.5">${t.totalWallArea} m²</p>
                </div>
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-slate-400 font-bold uppercase">Luas Plafon</p>
                    <p class="text-sm font-black text-white mt-0.5">${t.ceilingArea} m²</p>
                </div>
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                    <p class="text-[10px] text-amber-300 font-bold uppercase">Alkali Sealer</p>
                    <p class="text-sm font-black text-amber-300 mt-0.5">${t.sealerGallons>0?`${t.sealerGallons} Galon (${t.sealerVolume}L)`:"Tidak dipilih"}</p>
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
            ${Ae==="pos"?`
            <button type="button" onclick="window.addEstimatorToPOSCart('Cat Dinding (Estimasi)', ${t.totalVolumeLiters}, 'liter')" class="w-full py-3 px-4 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                <i class="fa-solid fa-cart-plus"></i> Masukkan Estimasi Cat ke Transaksi Kasir
            </button>
            `:""}
        </div>

        <!-- Katalog Produk Terkait di Toko -->
        ${ze("paint","fa-solid fa-paintbrush","Rekomendasi Produk Cat di Toko Kami","fa-paint-roller")}`}if(e==="tile"){const t=vt();return Ge("tile"),`
        <!-- Bento Result Card -->
        <div class="p-5 rounded-3xl bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 text-white shadow-xl border border-cyan-900/60 relative overflow-hidden">
            <div class="flex items-start justify-between gap-3 relative z-10">
                <div>
                    <span class="text-[10px] font-black uppercase tracking-widest text-cyan-300">Hasil Estimasi Keramik Lantai</span>
                    <h4 class="text-3xl font-black mt-1 tracking-tight text-white">${t.totalBoxes} Dus Keramik</h4>
                    <p class="text-xs text-cyan-200 mt-1">Ukuran: <b>${t.spec.name}</b> (Coverage: ${t.spec.coveragePerBox} m²/dus)</p>
                </div>
                <div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-xl text-cyan-300 border border-slate-700 shrink-0">
                    <i class="fa-solid fa-border-all"></i>
                </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-white/15 relative z-10 text-xs">
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-slate-400 font-bold uppercase">Luas Bersih</p>
                    <p class="text-sm font-black text-white mt-0.5">${t.rawArea} m²</p>
                </div>
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-cyan-300 font-bold uppercase">+ Cadangan (${t.wastePercent}%)</p>
                    <p class="text-sm font-black text-white mt-0.5">${t.totalAreaWithWaste} m²</p>
                </div>
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                    <p class="text-[10px] text-emerald-300 font-bold uppercase">Perekat &amp; Nat</p>
                    <p class="text-sm font-black text-emerald-300 mt-0.5">${t.adhesiveBags} Sak / ${t.groutBags} Bks</p>
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
            ${Ae==="pos"?`
            <button type="button" onclick="window.addEstimatorToPOSCart('Keramik ${t.spec.name} (Estimasi)', ${t.totalBoxes}, 'dus')" class="w-full py-3 px-4 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                <i class="fa-solid fa-cart-plus"></i> Masukkan ${t.totalBoxes} Dus Keramik ke Transaksi Kasir
            </button>
            `:""}
        </div>

        <!-- Produk Terkait -->
        ${ze("tile","fa-solid fa-border-all","Rekomendasi Keramik & Semen di Toko","fa-border-all")}`}if(e==="brick"){const t=Pt();return Ge("brick"),`
        <!-- Bento Result Card -->
        <div class="p-5 rounded-3xl bg-gradient-to-br from-amber-950 to-slate-900 text-white shadow-xl border border-amber-900/60 relative overflow-hidden">
            <div class="flex items-start justify-between gap-3 relative z-10">
                <div>
                    <span class="text-[10px] font-black uppercase tracking-widest text-amber-300">Hasil Estimasi Pasangan Dinding</span>
                    <h4 class="text-2xl sm:text-3xl font-black mt-1 tracking-tight text-white">
                        ${Q.brickType.startsWith("hebel")?`${t.brickPcs} Pcs (${t.brickCubic} m³)`:`${t.brickPcs} Buah Bata Merah`}
                    </h4>
                    <p class="text-xs text-amber-200 mt-1">Luas Dinding Bersih: <b>${t.netArea} m²</b></p>
                </div>
                <div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-xl text-amber-300 border border-slate-700 shrink-0">
                    <i class="fa-solid fa-trowel-bricks"></i>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-2.5 mt-4 pt-4 border-t border-white/15 relative z-10 text-xs">
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-slate-400 font-bold uppercase">Semen Perekat / Mortar</p>
                    <p class="text-sm font-black text-white mt-0.5">
                        ${Q.brickType.startsWith("hebel")?`${t.mortarBags} Sak Mortar (40kg)`:`${t.cementBags} Sak Semen (50kg)`}
                    </p>
                </div>
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-amber-300 font-bold uppercase">Pasir Pasang</p>
                    <p class="text-sm font-black text-amber-300 mt-0.5">
                        ${Q.brickType.startsWith("hebel")?"Cukup Lem Mortar":`${t.sandCubic} m³ Pasir`}
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
            ${Ae==="pos"?`
            <button type="button" onclick="window.addEstimatorToPOSCart('${Q.brickType.startsWith("hebel")?"Bata Ringan Hebel (Estimasi)":"Bata Merah (Estimasi)"}', ${t.brickPcs}, 'pcs')" class="w-full py-3 px-4 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                <i class="fa-solid fa-cart-plus"></i> Masukkan ${t.brickPcs} Pcs ke Transaksi Kasir
            </button>
            `:""}
        </div>

        <!-- Produk Terkait -->
        ${ze("brick","fa-solid fa-trowel-bricks","Rekomendasi Bata & Semen Mortar di Toko","fa-cubes")}`}if(e==="roof"){const t=St();return Ge("roof"),`
        <!-- Bento Result Card -->
        <div class="p-5 rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white shadow-xl border border-sky-900/60 relative overflow-hidden">
            <div class="flex items-start justify-between gap-3 relative z-10">
                <div>
                    <span class="text-[10px] font-black uppercase tracking-widest text-sky-400">Hasil Estimasi ${f(t.spec.shortName)}</span>
                    <h4 class="text-2xl sm:text-3xl font-black mt-1 tracking-tight text-white flex items-baseline gap-2">
                        <span>${t.totalSheets} Lembar</span>
                        <span class="text-sm font-bold text-sky-300">(${t.sheetLength} Meter)</span>
                    </h4>
                    <p class="text-xs text-sky-200/90 mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <span>Total Luas Atap: <b>${t.totalRoofArea} m²</b></span>
                        ${t.slopeLength>0?`<span>• Panjang Lereng: <b>${t.slopeLength} m</b></span>`:""}
                    </p>
                </div>
                <div class="w-12 h-12 rounded-2xl bg-slate-800/90 flex items-center justify-center text-xl text-sky-400 border border-sky-800/80 shrink-0">
                    <i class="fa-solid fa-roof-chimney"></i>
                </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-white/15 relative z-10 text-xs">
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-slate-400 font-bold uppercase truncate" title="${f(t.spec.fastenerName)}">${f(t.spec.fastenerName.split(" ")[0])} / Pengencang</p>
                    <p class="text-sm font-black text-white mt-0.5">
                        ${t.fastenerPacks>0?`${t.fastenerPacks} ${t.spec.fastenerPackaging}`:"-"}
                    </p>
                    <p class="text-[10px] text-sky-300 font-semibold mt-0.5">${t.fastenerPcs} Pcs</p>
                </div>
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-slate-400 font-bold uppercase">Nok Bubungan</p>
                    <p class="text-sm font-black text-white mt-0.5">
                        ${t.ridgePieces>0?`${t.ridgePieces} Batang`:t.mode==="monopitch"?"Tidak Perlu":"-"}
                    </p>
                    <p class="text-[10px] text-sky-300 font-semibold mt-0.5">${t.mode==="gable"?`Bentang ${t.ridgeLength}m`:"Kanopi 1 Sisi"}</p>
                </div>
                <div class="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-slate-400 font-bold uppercase">Susunan Lembar</p>
                    <p class="text-sm font-black text-sky-300 mt-0.5">
                        ${t.sheetsAcross>0?`${t.sheetsAcross} Kolom × ${t.sheetsPerSlope} Susun`:`${t.totalSheets} Lbr`}
                    </p>
                    <p class="text-[10px] text-slate-300 font-semibold mt-0.5">${t.mode==="gable"?"2 Sisi Miring":t.mode==="monopitch"?"1 Sisi Miring":"Hitungan Luas"}</p>
                </div>
            </div>

            <!-- Panduan Teknis Lapangan -->
            <div class="mt-3 p-2.5 rounded-xl bg-sky-950/70 border border-sky-800/60 text-[10px] text-sky-200 flex items-center gap-2">
                <i class="fa-solid fa-circle-info text-sky-400 shrink-0"></i>
                <span>Lebar efektif <b>${t.spec.effectiveWidth*100} cm</b> (overlap samping 1 gelombang). Overlap sambungan ujung: 20 cm.</span>
            </div>
        </div>

        <!-- Tombol Aksi Cepat -->
        <div class="flex flex-wrap gap-2.5">
            <button type="button" onclick="window.copyEstimatorSummary('roof')" class="flex-1 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                <i class="fa-solid fa-copy"></i> Salin Rincian
            </button>
            <button type="button" onclick="window.shareEstimatorToWA('roof')" class="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                <i class="fa-brands fa-whatsapp text-sm"></i> Konsultasi WA
            </button>
            ${Ae==="pos"?`
            <button type="button" onclick="window.addEstimatorToPOSCart('${f(t.spec.shortName)} (Estimasi)', ${t.totalSheets}, 'lembar')" class="w-full py-3 px-4 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                <i class="fa-solid fa-cart-plus"></i> Masukkan ${t.totalSheets} Lembar ke Transaksi Kasir
            </button>
            `:""}
        </div>

        <!-- Rekomendasi Produk Terkait Toko -->
        ${ze("roof","fa-solid fa-roof-chimney","Rekomendasi Atap, Seng & Nok di Toko","fa-house-chimney")}`}return""},Ue=()=>{if(typeof document>"u")return;const e=l("modal-material-estimator-body");e&&(e.innerHTML=`
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <!-- Kolom Kiri: Formulir Input Dimensi (5 Kolom Desktop) -->
        <div class="lg:col-span-5 space-y-4" id="estimator-form-container">
            ${rr(qe)}
        </div>
        <!-- Kolom Kanan: Hasil Kalkulasi & Rekomendasi (7 Kolom Desktop) -->
        <div class="lg:col-span-7 space-y-4" id="estimator-results-container">
            ${Zt(qe)}
        </div>
    </div>`,or())},Te=(e=qe)=>{if(typeof document>"u")return;const t=l("estimator-results-container");if(!t){Ue();return}t.innerHTML=Zt(e)},or=()=>{["paint","tile","brick","roof"].forEach(t=>{const a=l(`estimator-tab-btn-${t}`);a&&(t===qe?a.className="shrink-0 sm:flex-1 py-2 sm:py-2.5 px-3 sm:px-3.5 rounded-xl font-black text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer primary-bg text-white":a.className="shrink-0 sm:flex-1 py-2 sm:py-2.5 px-3 sm:px-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white")})},ir=e=>{qe=e,Ue()},Yt=e=>{N.coats=e,typeof document<"u"&&document.querySelectorAll(".paint-coat-btn").forEach(t=>{parseInt(t.getAttribute("data-coats"),10)===e?t.className="paint-coat-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":t.className="paint-coat-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}),Te("paint")},Xt=e=>{V.wastePercent=e,typeof document<"u"&&document.querySelectorAll(".tile-waste-btn").forEach(t=>{parseInt(t.getAttribute("data-waste"),10)===e?(t.className="tile-waste-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs",t.style.cssText="background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);"):(t.className="tile-waste-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400",t.style.cssText="")}),Te("tile")},nr=e=>{if(k.slopeAngle=e,typeof document<"u"){const t=l("roof-input-slopeAngle");t&&(t.value=e),document.querySelectorAll(".roof-angle-btn").forEach(a=>{parseFloat(a.getAttribute("data-angle"))===e?a.className="roof-angle-btn py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer bg-sky-50 dark:bg-sky-950/60 border-sky-400 text-sky-700 dark:text-sky-300 shadow-2xs":a.className="roof-angle-btn py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500"})}Te("roof")},lr=e=>{N.mode=e,Ue()},dr=(e,t)=>{if(e==="coats"){Yt(parseInt(t,10)||2);return}N[e]=t,Te("paint")},cr=(e,t)=>{if(e==="wastePercent"){Xt(parseInt(t,10)||10);return}V[e]=t,Te("tile")},pr=(e,t)=>{Q[e]=t,Te("brick")},ur=e=>{k.mode=e,Ue()},mr=e=>{k.roofType=e;const t=_e[e]||_e.spandek;t.standardLengths.some(s=>s.val===parseFloat(k.sheetLength))||(k.sheetLength=t.defaultLength),Ue()},fr=(e,t)=>{if(e==="slopeAngle"){k.slopeAngle=t;const a=parseFloat(t);typeof document<"u"&&document.querySelectorAll(".roof-angle-btn").forEach(s=>{parseFloat(s.getAttribute("data-angle"))===a?s.className="roof-angle-btn py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer bg-sky-50 dark:bg-sky-950/60 border-sky-400 text-sky-700 dark:text-sky-300 shadow-2xs":s.className="roof-angle-btn py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500"}),Te("roof");return}k[e]=t,Te("roof")},br=e=>{let t="";const a=x.store?.name||"TOKO PUTRI";if(e==="paint"){const s=yt();t=`*ESTIMASI KEBUTUHAN CAT TEMBOK — ${a}*
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
Dihitung otomatis via Sistem Toko Putri`}else if(e==="tile"){const s=vt();t=`*ESTIMASI KEBUTUHAN KERAMIK / GRANIT — ${a}*
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
Dihitung otomatis via Sistem Toko Putri`}else if(e==="brick"){const s=Pt();t=`*ESTIMASI PASANGAN DINDING — ${a}*
--------------------------------------
• Material Dinding: ${Q.brickType.startsWith("hebel")?"Bata Ringan Hebel":"Bata Merah Bakar"}
• Luas Dinding Efektif: ${s.netArea} m²
--------------------------------------
*REKOMENDASI KEBUTUHAN:*
✓ Kebutuhan Bata: ${s.brickPcs} Pcs ${s.brickCubic>0?`(~${s.brickCubic} m³)`:""}
`+(s.mortarBags>0?`✓ Semen Mortar Thinbed: ${s.mortarBags} Sak (40kg)
`:"")+(s.cementBags>0?`✓ Semen Plester/Pasang: ${s.cementBags} Sak (50kg)
`:"")+(s.sandCubic>0?`✓ Pasir Pasang: ~${s.sandCubic} m³
`:"")+`--------------------------------------
Dihitung otomatis via Sistem Toko Putri`}else if(e==="roof"){const s=St();t=`*ESTIMASI KEBUTUHAN ATAP & PENUTUP — ${a}*
--------------------------------------
• Jenis Atap: ${s.spec.name}
• Ukuran Lembar: ${s.sheetLength} Meter (Lebar Efektif: ${s.spec.effectiveWidth*100} cm)
• Model Bidang: ${s.mode==="gable"?"Pelana (2 Sisi Miring)":s.mode==="monopitch"?"Kanopi (1 Sisi Miring)":"Hitungan Luas Langsung"}
• Total Luas Bidang Atap: ${s.totalRoofArea} m²
`+(s.slopeLength>0?`• Panjang Lereng Miring: ${s.slopeLength} Meter
`:"")+`--------------------------------------
*REKOMENDASI KEBUTUHAN UTAMA:*
✓ Total Kebutuhan Atap: *${s.totalSheets} Lembar*
`+(s.sheetsAcross>0?`  → Susunan: ${s.sheetsAcross} Kolom Jajar × ${s.sheetsPerSlope} Susun Sambung ${s.mode==="gable"?"(2 Sisi)":""}
`:"")+(s.ridgePieces>0?`✓ Nok Bubungan Puncak: ${s.ridgePieces} Batang (Bentang ${s.ridgeLength}m)
`:"")+(s.fastenerPacks>0?`✓ ${s.spec.fastenerName}: ${s.fastenerPacks} ${s.spec.fastenerPackaging} (~${s.fastenerPcs} Pcs)
`:"")+`--------------------------------------
Dihitung otomatis via Sistem Toko Putri`}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t).then(()=>{A("Rincian estimasi berhasil disalin ke clipboard!","success")}).catch(()=>{A("Gagal menyalin rincian.","warning")}):A("Clipboard browser tidak didukung.","warning")},xr=e=>{let t="";const a=x.store?.name||"Toko Putri",s=(x.store?.wa||"").replace(/[^0-9]/g,"");if(e==="paint"){const r=yt();t=`Halo ${a}, saya ingin konsultasi kebutuhan cat dinding:

• Luas Bidang Cat: ${r.grandArea} m² (${r.coats}x lapis)
• Estimasi Kebutuhan: ${r.pails>0?`${r.pails} Pail `:""}${r.gallons>0?`${r.gallons} Galon`:""} (${r.totalVolumeLiters} Liter)
`+(r.sealerGallons>0?`• Alkali Sealer: ${r.sealerGallons} Galon
`:"")+`
Mohon info ketersediaan stok & rekomendasi merk cat terbaik. Terima kasih!`}else if(e==="tile"){const r=vt();t=`Halo ${a}, saya ingin konsultasi kebutuhan keramik:

• Ukuran Keramik: ${r.spec.name}
• Luas Bersih + Waste: ${r.totalAreaWithWaste} m²
• Estimasi Kebutuhan: ${r.totalBoxes} Dus
`+(r.adhesiveBags>0?`• Semen Perekat: ${r.adhesiveBags} Sak
`:"")+`
Mohon info pilihan motif & harga terbaik. Terima kasih!`}else if(e==="brick"){const r=Pt();t=`Halo ${a}, saya ingin konsultasi pasangan dinding:

• Jenis: ${Q.brickType.startsWith("hebel")?"Bata Ringan Hebel":"Bata Merah"}
• Luas Bersih: ${r.netArea} m²
• Kebutuhan: ${r.brickPcs} Pcs ${r.brickCubic>0?`(${r.brickCubic} m³)`:""}
`+(r.mortarBags>0?`• Mortar: ${r.mortarBags} Sak
`:"")+`
Mohon info pengiriman armada ke lokasi proyek. Terima kasih!`}else if(e==="roof"){const r=St();t=`Halo ${a}, saya ingin konsultasi kebutuhan atap:

• Jenis Atap: ${r.spec.name} (${r.sheetLength}m)
• Luas Bidang Atap: ${r.totalRoofArea} m²
• Estimasi Kebutuhan: ${r.totalSheets} Lembar
`+(r.ridgePieces>0?`• Nok Bubungan: ${r.ridgePieces} Batang
`:"")+(r.fastenerPacks>0?`• Pengencang: ${r.fastenerPacks} ${r.spec.fastenerPackaging} (${r.fastenerPcs} Pcs)
`:"")+`
Mohon info ketersediaan stok & rekomendasi pengiriman ke lokasi. Terima kasih!`}const o=`https://wa.me/${s}?text=${encodeURIComponent(t)}`;window.open(o,"_blank")},wr=(e,t,a,s=0)=>{typeof window.posAddEstimatorToCart=="function"?(window.posAddEstimatorToCart(e,t,a,s),Ze()):typeof window.posAddToCartQty=="function"?(A(`Estimasi ${e} (${t} ${a}) dimasukkan ke kasir.`),Ze()):(A(`Estimasi ${e} (${t} ${a}) siap dimasukkan ke kasir.`),Ze())},gr=e=>{if(Ae==="pos"){const t=(x.products||[]).find(a=>String(a.id)===String(e));if(t&&t.hasVariants&&Array.isArray(t.variants)&&t.variants.length>0&&typeof window.openPOSVariantSheet=="function"){window.openPOSVariantSheet(e);return}typeof window.posAddToCart=="function"?(window.posAddToCart(e),A("Produk ditambahkan ke kasir POS!","success")):typeof window.quickAddOrOpenProduct=="function"&&window.quickAddOrOpenProduct(null,e)}else typeof window.quickAddOrOpenProduct=="function"?window.quickAddOrOpenProduct(null,e):typeof window.addToCart=="function"?(window.addToCart(e),A("Produk ditambahkan ke keranjang belanja!","success")):typeof window.openProductModal=="function"&&window.openProductModal(e)},hr=e=>{if(Ae==="pos"){const t=(x.products||[]).find(a=>String(a.id)===String(e));if(t&&t.hasVariants&&Array.isArray(t.variants)&&t.variants.length>0&&typeof window.openPOSVariantSheet=="function"){window.openPOSVariantSheet(e);return}typeof window.posAddToCart=="function"?(window.posAddToCart(e),A("Produk ditambahkan ke kasir POS!","success")):typeof window.quickAddOrOpenProduct=="function"&&window.quickAddOrOpenProduct(null,e)}else typeof window.openProductModal=="function"&&window.openProductModal(e)},kr=(e="storefront")=>{if(Ae=e,typeof window<"u"&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("materialEstimator"),typeof document>"u")return;const t=l("modal-material-estimator");t&&(t.classList.remove("hidden"),setTimeout(()=>{t.classList.remove("opacity-0");const a=l("modal-material-estimator-content");a&&(a.classList.remove("translate-y-full","sm:translate-y-10"),a.classList.add("translate-y-0"))},10),Ue(),typeof window<"u"&&typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Ze=(e=!1)=>{if(typeof document>"u")return;const t=l("modal-material-estimator"),a=l("modal-material-estimator-content"),s=l("quick-variant-modal");s&&!s.classList.contains("hidden")&&typeof window.closeQuickVariantSheet=="function"&&window.closeQuickVariantSheet(!0);const o=()=>{a&&(a.classList.add("translate-y-full","sm:translate-y-10"),a.classList.remove("translate-y-0")),t&&t.classList.add("opacity-0"),setTimeout(()=>{t&&t.classList.add("hidden")},280)};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("materialEstimator",!1,o):o()};typeof window<"u"&&(window.openMaterialEstimatorModal=kr,window.closeMaterialEstimatorModal=Ze,window.switchEstimatorTab=ir,window.setEstimatorPaintMode=lr,window.updateEstimatorPaintField=dr,window.updateEstimatorTileField=cr,window.updateEstimatorBrickField=pr,window.setEstimatorRoofMode=ur,window.setEstimatorRoofType=mr,window.updateEstimatorRoofField=fr,window.copyEstimatorSummary=br,window.shareEstimatorToWA=xr,window.addEstimatorToPOSCart=wr,window.addStoreProductFromEstimator=gr,window.handleEstimatorProductCardClick=hr,window.updateEstimatorResultOnly=Te,window.setEstimatorPaintCoats=Yt,window.setEstimatorTileWaste=Xt,window.setEstimatorRoofAngle=nr);let Be=null;const Rt=e=>{if(e<=0)return{h:"00",m:"00",s:"00",totalSec:0};const t=Math.floor(e/1e3),a=Math.floor(t/3600),s=Math.floor(t%3600/60),o=t%60;return{h:String(a).padStart(2,"0"),m:String(s).padStart(2,"0"),s:String(o).padStart(2,"0"),totalSec:t}},ea=()=>{const e=l("dynamic-flashsale-container");if(!e)return;Be&&(clearInterval(Be),Be=null);const t=Ts("web");if(!t||!Array.isArray(t.items)||t.items.length===0){e.innerHTML="",e.classList.add("hidden");return}const a=t.endTime?typeof window.parseSafeTimestamp=="function"?window.parseSafeTimestamp(t.endTime):new Date(t.endTime).getTime():0,s=Date.now(),o=Math.max(0,a-s);if(a&&o<=0){e.innerHTML="",e.classList.add("hidden");return}const r=Rt(o),i=t.items.filter(n=>n&&n.productId);if(i.length===0){e.innerHTML="",e.classList.add("hidden");return}const d=i.map(n=>{const u=(x.products||[]).find(I=>String(I.id)===String(n.productId));if(!u||u.isActive===!1||u.isActive==="false")return"";const g=parseFloat(n.normalPrice)||parseFloat(u.price)||0,P=parseFloat(n.flashSalePrice)||0,v=parseFloat(n.quota)||0,S=parseFloat(n.soldCount)||0,O=v>0&&S>=v,Y=v>0?Math.min(100,Math.round(S/v*100)):0,D=Math.max(0,v-S),p=g>0?Math.round((g-P)/g*100):n.discountPercent||0,C=u.img?na(u.img,"w400-rw"):"/favicon.png",q=u.name||"Produk Promo",j=n.variantName?` (${n.variantName})`:"";return`
        <div class="group relative flex w-[180px] sm:w-[215px] md:w-[228px] shrink-0 flex-col overflow-hidden rounded-[1.25rem] sm:rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md snap-start" style="transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;">
            <!-- Badge Diskon Petir Harmonis Tema -->
            <div class="absolute left-2.5 top-2.5 z-10 flex items-center gap-1 rounded-lg px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-2xs" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);">
                <i class="fa-solid fa-bolt text-amber-300 text-[10px]"></i>
                <span>-${Math.max(1,p)}%</span>
            </div>

            ${D<=3&&!O&&v>0?`
            <div class="absolute right-2.5 top-2.5 z-10 flex items-center gap-1 rounded-lg bg-amber-500 px-1.5 py-0.5 text-[9px] font-black text-white shadow-2xs">
                <span><i class="fa-solid fa-fire text-amber-200 text-[8.5px]"></i> Sisa ${D}!</span>
            </div>`:""}

            <!-- Foto Produk: Presisi Full Frame 1:1 Tanpa Padding Menjorok -->
            <div class="relative aspect-square w-full cursor-pointer overflow-hidden bg-white dark:bg-slate-950 flex items-center justify-center border-b border-slate-100 dark:border-slate-800/80 shrink-0" onclick="window.openProductModal && window.openProductModal('${f(u.id)}')">
                <img src="${f(C)}" alt="${f(q)}" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='/favicon.png'">
                ${O?`
                <div class="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center p-2 text-center text-white">
                    <span class="rounded-lg px-2.5 py-1 text-[10px] font-black uppercase tracking-widest shadow-md text-white" style="background: var(--color-primary-dark);">HABIS TERJUAL</span>
                    <span class="mt-1 text-[9px] font-medium text-slate-300">Kuota promo terpenuhi</span>
                </div>`:""}
            </div>

            <!-- Detail & Harga -->
            <div class="flex flex-1 flex-col justify-between p-3.5">
                <div>
                    <h4 class="line-clamp-2 text-xs sm:text-[13px] font-bold text-slate-800 dark:text-slate-100 group-hover:text-[var(--color-primary)] transition-colors leading-snug" title="${f(q+j)}">
                        ${f(q+j)}
                    </h4>
                    
                    <!-- Coretan Harga & Harga Kilat Harmonis -->
                    <div class="mt-2 flex flex-col">
                        <span class="text-[10px] font-semibold text-slate-400 dark:text-slate-500 line-through leading-tight">
                            ${h(g)}
                        </span>
                        <span class="text-sm sm:text-base font-black truncate leading-tight mt-0.5" style="color: var(--color-primary);">
                            ${h(P)}
                        </span>
                    </div>
                </div>

                <!-- FOMO Progress Bar Kuota -->
                <div class="mt-3">
                    <div class="flex items-center justify-between text-[9px] font-bold text-slate-500 dark:text-slate-400 mb-1">
                        <span>${O?"Terjual Habis":`Terjual ${S}/${v||"∞"}`}</span>
                        <span>${v>0?Y+"%":"Terbatas"}</span>
                    </div>
                    <div class="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                        <div class="h-full rounded-full transition-all duration-500 ${O?"bg-slate-400":""}" style="${O?"":"background: linear-gradient(90deg, #f59e0b 0%, var(--color-primary) 100%);"} width: ${O?100:Math.max(8,Y)}%;"></div>
                    </div>

                    <!-- Tombol Aksi Beli Kilat -->
                    <div class="mt-3">
                        ${O?`
                        <button type="button" disabled class="btn-native-action w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs font-bold cursor-not-allowed">
                            Kuota Habis
                        </button>`:`
                        <button type="button" onclick="window.quickBuyFlashSaleItem('${f(u.id)}', '${f(n.variantName||"")}')" class="btn-native-action w-full py-2.5 rounded-xl text-white text-xs font-black active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-bolt text-amber-300 text-xs"></i>
                            <span>Beli Kilat</span>
                        </button>`}
                    </div>
                </div>
            </div>
        </div>`}).join("");if(!d||!d.trim()){e.innerHTML="",e.classList.add("hidden");return}e.classList.remove("hidden"),e.innerHTML=`
    <div class="bento-island-card relative overflow-hidden rounded-[1.75rem] p-4 sm:p-5 shadow-xs border transition-all duration-300" style="border-color: rgba(var(--color-primary-rgb), 0.22);">
        <!-- Header Panggung Flash Sale -->
        <div class="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b pb-3.5 mb-3.5" style="border-color: rgba(var(--color-primary-rgb), 0.12);">
            <div class="flex items-center gap-3">
                <div class="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-sm" style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-bolt text-xl sm:text-2xl text-amber-300 animate-pulse"></i>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <span class="rounded-md px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-2xs" style="background: var(--color-primary);">PROMO KILAT</span>
                        <h3 class="text-base sm:text-lg font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-1.5">
                            ${f(t.title||"FLASH SALE KILAT")}
                        </h3>
                    </div>
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        Harga spesial terbatas! Segera checkout sebelum waktu atau kuota habis.
                    </p>
                </div>
            </div>

            <!-- Countdown Timer Block Harmonis Tema (Solid & Bebas Kaca) -->
            <div class="flex items-center gap-2 self-start sm:self-auto rounded-2xl bg-white dark:bg-slate-800 border px-3 py-1.5 shadow-2xs" style="border-color: rgba(var(--color-primary-rgb), 0.25);">
                <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden sm:inline">Berakhir:</span>
                <div class="flex items-center gap-1 font-mono font-black" style="color: var(--color-primary);">
                    <span id="fs-cd-h" class="min-w-[28px] text-center rounded-lg px-1.5 py-0.5 text-xs sm:text-sm font-bold shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.08); border: 1px solid rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary);">${r.h}</span>
                    <span>:</span>
                    <span id="fs-cd-m" class="min-w-[28px] text-center rounded-lg px-1.5 py-0.5 text-xs sm:text-sm font-bold shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.08); border: 1px solid rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary);">${r.m}</span>
                    <span>:</span>
                    <span id="fs-cd-s" class="min-w-[28px] text-center rounded-lg px-1.5 py-0.5 text-xs sm:text-sm font-bold shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.08); border: 1px solid rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary);">${r.s}</span>
                </div>
            </div>
        </div>

        <!-- Slider List Produk Flash Sale -->
        <div class="relative z-10 flex gap-3 sm:gap-4 overflow-x-auto pb-2 pt-1 hide-scrollbar snap-x">
            ${d}
        </div>
    </div>`,a&&(Be=setInterval(()=>{const n=Math.max(0,a-Date.now());if(n<=0){clearInterval(Be),Be=null,ea(),typeof window.rCat=="function"&&window.rCat();return}const u=Rt(n),g=l("fs-cd-h"),P=l("fs-cd-m"),v=l("fs-cd-s");g&&(g.innerText=u.h),P&&(P.innerText=u.m),v&&(v.innerText=u.s)},1e3))},yr=(e,t="")=>{const a=(x.products||[]).find(i=>String(i.id)===String(e));if(!a)return;if(a.variants&&a.variants.length>0&&!t){Ms(e);return}const s=t||(a.variants&&a.variants[0]?a.variants[0].name:""),o=window.getEffP?window.getEffP({id:a.id,price:a.price,variantName:s}):a.price,r=H.findIndex(i=>String(i.id)===String(a.id)&&String(i.variantName||"")===String(s||""));r>-1?H[r].qty=(parseFloat(H[r].qty)||0)+1:H.push({id:a.id,name:a.name,variantName:s,price:o,img:a.img||"",qty:1,unit:a.unit||"pcs"});try{localStorage.setItem("freshmart_cart",JSON.stringify(H))}catch{}As(),A(`"${a.name}" berhasil dimasukkan ke keranjang dengan harga Flash Sale!`,"success")};window.renderStorefrontFlashSale=ea;window.quickBuyFlashSaleItem=yr;let pt=[];const Ne=()=>{try{localStorage.setItem("freshmart_my_orders",JSON.stringify(G))}catch(e){console.warn("[MyOrders] Gagal menyimpan ke localStorage:",e)}},vr=()=>{try{const e=localStorage.getItem("freshmart_my_orders");if(e){const t=JSON.parse(e);Array.isArray(t)&&t.length>0&&at(t)}}catch(e){console.warn("[MyOrders] Gagal memuat dari localStorage:",e)}return G},ta=()=>{pt.forEach(e=>{try{typeof e=="function"&&e()}catch{}}),pt=[]},aa=()=>{ta(),G.filter(a=>{const s=a.status==="Selesai"||a.status==="Dibatalkan",o=a.claimedReward&&(a.claimedReward.status==="Menunggu Persetujuan"||!a.claimedReward.status);return!s||o}).slice(0,10).forEach(a=>{const s=a.orderId;if(!s)return;const o=J.collection("freshmart_orders").doc(s).onSnapshot(r=>{if(!r.exists)return;const i=r.data(),d=i.status,n=i.claimedReward?i.claimedReward.status:null,u=i.claimedReward&&i.claimedReward.note||"";let g=!1,P="";const v=G.find(S=>S.orderId===s);if(v){if(d&&v.status!==d){const S=v.status;v.status=d,g=!0,S!==void 0&&(P=`Pesanan #${s.split("-").pop()} kini: ${d}`)}v.claimedReward&&n&&(v.claimedReward.status!==n||v.claimedReward.note!==u)&&(v.claimedReward.status=n,v.claimedReward.note=u,g=!0),g&&(Ne(),window.curViewName==="view-orders"&&We(),P&&A(P))}},r=>{console.warn("[MyOrders Realtime] Snapshot error:",r.message)});pt.push(o)})},We=async()=>{if(vr(),!G.length){xe("orders-empty-state"),B("btn-clear-orders"),xe("spacer-orders"),we("orders-items-container","");return}B("orders-empty-state"),xe("btn-clear-orders"),B("spacer-orders"),aa(),we("orders-items-container",G.map((e,t)=>{const s=Nt(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});let o="text-slate-500 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",r="fa-clock";return e.status==="Baru"?(o="text-rose-600 border-rose-200 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400",r="fa-asterisk"):e.status==="Diproses"?(o="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",r="fa-spinner fa-spin"):e.status==="Selesai"?(o="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",r="fa-check-double"):e.status==="Dibatalkan"&&(o="text-slate-400 border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400",r="fa-xmark"),`
        <div class="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800/80 shadow-sm relative overflow-hidden group min-w-0 transition-all hover:border-[var(--color-primary)]/40 hover:shadow-md">
            <div class="flex justify-between items-start mb-3 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                <div>
                    <span class="font-bold text-sm text-slate-800 dark:text-white tracking-tight">#${e.orderId.split("-").pop()}</span>
                    <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5"><i class="fa-regular fa-calendar-days mr-1"></i>${s}</p>
                </div>
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-lg border ${o} uppercase tracking-wider flex items-center shadow-xs"><i class="fa-solid ${r} mr-1.5 text-[9px]"></i> ${f(e.status)}</span>
            </div>
            ${e.pointsEarned>0||e.claimedReward?`
            <div class="flex flex-wrap gap-1.5 mb-3">
                ${e.pointsEarned>0?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-amber-50 text-amber-600 border border-amber-200/90 dark:bg-amber-900/20 dark:border-amber-800/60 dark:text-amber-400"><i class="fa-solid fa-star mr-1"></i>+${e.pointsEarned} Poin</span>`:""}
                ${e.claimedReward?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)]/40 dark:text-[var(--color-primary)]"><i class="fa-solid fa-gift mr-1"></i>Hadiah: ${f(e.claimedReward.name)} ${wt(e.claimedReward)}</span>`:""}
                ${e.claimedReward&&e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-slate-100 text-slate-500 border border-slate-200/90 dark:bg-slate-800 dark:border-slate-700/80 dark:text-slate-400"><i class="fa-solid fa-wallet mr-1"></i>Sisa: ${e.finalMemberPoints} Poin</span>`:""}
            </div>`:""}
            <div class="flex justify-between items-end mt-2 pt-1">
                <div>
                    <p class="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Total Tagihan</p>
                    <p class="text-[var(--color-primary)] font-bold text-base tracking-tight">${h(e.total)} <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium ml-1">(${e.itemCount} Item)</span></p>
                </div>
                <div class="flex gap-2">
                    <button onclick="openCustomerOrderDetail('${e.orderId}')" class="min-h-[38px] sm:min-h-[40px] px-3.5 sm:px-4 py-2 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] hover:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.35)] text-xs font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5 cursor-pointer"><i class="fa-solid fa-file-invoice"></i> Detail</button>
                    <button onclick="checkOrderStatus('${e.orderId}', ${t})" class="min-h-[38px] sm:min-h-[40px] px-3.5 sm:px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-slate-800/80 text-xs font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5 cursor-pointer"><i class="fa-solid fa-rotate"></i> Status</button>
                </div>
            </div>
        </div>`}).join(""))},Pr=async(e,t)=>{Pe("Melacak Status...");try{const a=await J.collection("freshmart_orders").doc(e).get();if(a.exists){const s=a.data();if(G[t])G[t].status=s.status;else{const o=G.findIndex(r=>r.orderId===e);o>-1&&(G[o].status=s.status)}Ne(),We(),A(`Status Pesanan: ${s.status}`)}else A("Pesanan tidak ditemukan di server.")}catch(a){console.error("Gagal cek status pesanan:",a),A("Gagal mengambil data sistem. Periksa koneksi.")}finally{de()}},Sr=async()=>{const e=l("order-tracking-input"),t=e?e.value.trim():"";if(!t){A("Masukkan ID Pesanan terlebih dahulu!");return}let a=t.replace(/^#/,"").trim();const s=G.find(o=>o.orderId===a||o.orderId.endsWith(a));if(s){ut(s.orderId);return}Pe("Mencari Pesanan...");try{let o=await J.collection("freshmart_orders").doc(a).get();if(!o.exists&&!a.startsWith("ORD-")){const r="ORD-"+a,i=await J.collection("freshmart_orders").doc(r).get();i.exists&&(o=i,a=r)}if(o.exists){const r=o.data();G.some(d=>d.orderId===a)||(G.unshift({orderId:a,date:r.dateString||(r.timestamp?r.timestamp.toDate().toISOString():new Date().toISOString()),dateString:r.dateString||(r.timestamp?r.timestamp.toDate().toISOString():new Date().toISOString()),total:r.payment&&r.payment.grandTotal?r.payment.grandTotal:r.total||0,itemCount:(r.items||[]).reduce((d,n)=>d+(parseFloat(n.qty)||0),0),status:r.status||"Baru",pointsEarned:r.pointsEarned||0,claimedReward:r.claimedReward||null,finalMemberPoints:r.finalMemberPoints||null,customerType:r.customerType||"Pelanggan Umum",customer:r.customer||{},items:r.items||[],payment:r.payment||{},isTempo:!!r.isTempo}),Ne(),We()),e&&(e.value=""),A("Pesanan berhasil ditemukan!"),ut(a)}else A("Pesanan dengan ID tersebut tidak ditemukan.")}catch(o){console.error("Gagal melacak pesanan:",o),A("Gagal menghubungi server. Pastikan ID Pesanan sudah benar.")}finally{de()}},Tr=()=>{la("Hapus Riwayat","Riwayat pesanan di perangkat ini akan dihapus. Pesanan tetap tersimpan di sistem toko. Lanjutkan?",()=>{at([]),Ne(),We(),A("Riwayat lokal dibersihkan")})},ut=async e=>{const t=Array.isArray(G)?G.find(a=>a.orderId===e):null;if(t&&t.items&&t.items.length>0){window.currentCustomerOrder=t,window.lastPrintedOrder=t,Ye(e,t,[]),J.collection("freshmart_orders").doc(e).get().then(async a=>{if(a.exists){const s=a.data();s.orderId=s.orderId||a.id||e;let o=[];if(s.status==="Selesai")try{o=(await J.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(n=>`${n.data().productId}::${n.data().variantName||""}`)}catch{}window.currentCustomerOrder=s,window.lastPrintedOrder=s;const r=G.findIndex(d=>d.orderId===s.orderId);r!==-1&&(Object.assign(G[r],s),Ne());const i=document.getElementById("order-detail-modal");i&&!i.classList.contains("hidden")&&!i.classList.contains("opacity-0")&&Ye(e,s,o,!0)}}).catch(a=>console.warn("[MyOrders] Silent background fetch error:",a));return}Pe("Memuat Rincian...");try{const a=await J.collection("freshmart_orders").doc(e).get();if(!a.exists){A("Pesanan tidak ditemukan.");return}const s=a.data();s.orderId=s.orderId||a.id||e;let o=[];if(s.status==="Selesai")try{o=(await J.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(i=>`${i.data().productId}::${i.data().variantName||""}`)}catch{}if(window.currentCustomerOrder=s,window.lastPrintedOrder=s,Array.isArray(G)){const r=G.findIndex(i=>i.orderId===s.orderId);r!==-1&&(Object.assign(G[r],s),Ne())}Ye(e,s,o)}catch(a){console.error("Gagal mengambil data pesanan:",a),A("Gagal memuat rincian pesanan. Coba beberapa saat lagi.")}finally{de()}},Ye=(e,t,a=[],s=!1)=>{try{t&&(t.orderId=t.orderId||e,window.currentCustomerOrder=t,window.lastPrintedOrder=t);let o=document.getElementById("order-detail-modal");o||(o=document.createElement("div"),o.id="order-detail-modal",o.className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 opacity-0 pointer-events-none transition-opacity duration-300",document.body.appendChild(o));const r=f(t.customer&&t.customer.name?t.customer.name:"-"),i=f(t.customer&&t.customer.wa?t.customer.wa:"-"),d=f(t.customer&&t.customer.address?t.customer.address:"-"),n=t.customer&&t.customer.deliveryMethod==="delivery"?"Dikirim ke Alamat":"Ambil di Toko (Pickup)",u=f(t.customer&&t.customer.note?t.customer.note:""),g=!!(t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"),P=g?"Putri PayLater":f(t.payment&&t.payment.method?t.payment.method:"Cash / COD"),v=t.items||[],S=v.some(E=>E.poTime&&E.poTime!==""),O=v.map(E=>{const oe=parseFloat(E.qty)||0,ae=parseFloat(E.effectivePrice||E.price)||0,se=oe*ae,T=`${E.id}::${E.variantName||""}`,ue=t.status==="Selesai"&&!a.includes(T)&&E.id!==void 0&&E.id!==null;return`
            <div class="flex gap-3 items-center border-b border-slate-100 dark:border-slate-800/80 py-3 last:border-0">
                <div class="w-12 h-12 rounded-xl bg-white dark:bg-slate-950 bg-cover bg-center shrink-0 border border-slate-200/90 dark:border-slate-800/80" style="background-image:url('${f(E.img||(x&&x.store?x.store.logo:""))}')"></div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate mb-0.5" title="${f(E.name)}">${f(E.name)}</p>
                    ${E.variantName||E.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${E.variantName?`<span class="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded text-[9px] font-semibold border border-slate-200/80 dark:border-slate-700">${f(E.variantName)}</span>`:""}
                        ${E.poTime?`<span class="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">PO ${f(E.poTime)}</span>`:""}
                    </div>
                    `:""}
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400">${oe} ${f(E.unit||"pcs")} x ${h(ae)}</p>
                    ${ue?`<button type="button" onclick="openReviewModal('${e}',${E.id},'${encodeURIComponent(E.variantName||"")}','${encodeURIComponent(E.name||"")}','${encodeURIComponent(t.customer?.name||"")}')" class="mt-1.5 text-[10px] font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1 transition-colors"><i class="fa-solid fa-star"></i> Berikan Ulasan</button>`:""}
                </div>
                <div class="text-right shrink-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-[var(--color-primary)]">${h(se)}</p>
                </div>
            </div>
            `}).join(""),D=Nt(t).toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),p=da(t),C=p.subtotal,q=p.shipping,j=p.productDiscount,I=p.shippingDiscount,m=p.pointDiscount,ge=p.grandTotal;o.innerHTML=`
            <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2.25rem] sm:rounded-3xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col shadow-2xl transform translate-y-full sm:translate-y-10 scale-100 transition-transform duration-300 border border-slate-200/90 dark:border-slate-800 overflow-hidden pointer-events-auto" id="order-detail-content">
                <!-- DRAG PULL MOBILE -->
                <div class="pull-indicator w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mx-auto my-2.5 sm:hidden shrink-0"></div>

                <div class="px-5 sm:px-6 pt-3.5 sm:pt-5 pb-4 border-b border-slate-200/90 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50 dark:bg-slate-900">
                    <div>
                        <h3 class="font-black text-slate-800 dark:text-white text-base">Rincian Pesanan</h3>
                        <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">ID: #${e.split("-").pop()}</p>
                    </div>
                    <button onclick="closeCustomerOrderDetailModal()" class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-rose-100 hover:text-rose-500 transition-colors active:scale-95 cursor-pointer" title="Tutup"><i class="fa-solid fa-xmark"></i></button>
                </div>
                
                <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6 hide-scrollbar text-sm" style="padding-bottom: max(6rem, calc(5rem + env(safe-area-inset-bottom))); -webkit-overflow-scrolling: touch; overscroll-behavior-y: contain; touch-action: pan-y;">
                    <div class="bg-slate-50 dark:bg-slate-950/60 p-4 rounded-xl border border-slate-200/90 dark:border-slate-800/80 flex justify-between items-center">
                        <div>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status Pesanan</p>
                            <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40">${f(t.status||"Baru")}</span>
                        </div>
                        <div class="text-right">
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Waktu Pembelian</p>
                            <p class="text-[11px] font-bold text-slate-700 dark:text-slate-300">${D}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800/80">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-user text-slate-400"></i> Info Pelanggan</h4>
                            <div class="space-y-1 text-xs">
                                <p class="font-bold text-slate-800 dark:text-slate-200">${r}</p>
                                ${t.customer&&t.customer.wa?`<a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${i}'); else window.open('https://wa.me/${i}', '_blank', 'noopener,noreferrer');" class="flex items-center gap-1 text-[var(--color-primary)] font-bold hover:underline cursor-pointer"><i class="fa-brands fa-whatsapp"></i> +${i}</a>`:""}
                                ${t.customer&&t.customer.lat&&t.customer.deliveryMethod==="delivery"?`<a href="https://www.google.com/maps?q=${f(t.customer.lat)},${f(t.customer.lng)}" target="_blank" class="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"><i class="fa-solid fa-location-dot"></i> Lihat Peta</a>`:""}
                            </div>
                        </div>
                        <div class="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800/80">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-truck text-slate-400"></i> Pengiriman & Bayar</h4>
                            <div class="space-y-1 text-xs">
                                <p><span class="text-slate-500 inline-block w-14">Metode</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${n}</span></p>
                                <p><span class="text-slate-500 inline-block w-14">Bayar</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${P.toUpperCase()}</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2.5">
                        <div class="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800/80">
                            <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1">Alamat Tujuan</p>
                            <p class="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">${d}</p>
                        </div>
                        ${u?`<div class="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800/80"><p class="text-[9px] font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest mb-1">Catatan Pembeli</p><p class="text-xs font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic">"${u}"</p></div>`:""}
                    </div>

                    ${t.buktiPayment?`
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-image text-[var(--color-primary)]"></i> Bukti Pembayaran</h4>
                        <a href="${f(t.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border-2 border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] transition-colors shadow-xs">
                            <img src="${f(t.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-52 object-cover" onerror="this.style.display='none'" loading="lazy">
                            <div class="bg-[rgba(var(--color-primary-rgb),0.06)] p-2 flex items-center justify-center gap-1.5 text-[10px] font-bold text-[var(--color-primary)]"><i class="fa-solid fa-arrow-up-right-from-square"></i> Buka Ukuran Penuh</div>
                        </a>
                    </div>`:""}
                    
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-basket-shopping text-slate-400"></i> Daftar Produk</h4>
                        <div class="bg-slate-50 dark:bg-slate-950/60 rounded-xl px-3 py-1 border border-slate-200/90 dark:border-slate-800/80">
                            ${O}
                        </div>
                    </div>

                    ${S?`
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
                            <div class="flex items-center gap-2"><i class="fa-solid fa-gift text-[var(--color-primary)]"></i><p class="text-xs font-bold text-[var(--color-primary)]">Klaim Hadiah: <b>${f(t.claimedReward.name)}</b> (${t.claimedReward.pointsCost} Poin)</p></div>
                            <p class="text-[11px] font-semibold text-[var(--color-primary)] mt-1 ml-5">${wt(t.claimedReward)}</p>
                            ${t.claimedReward.note?`<p class="text-[11px] text-[var(--color-primary)]/70 italic mt-0.5 ml-5">"${f(t.claimedReward.note)}"</p>`:""}
                        </div>`:""}
                    </div>`:""}

                    <div class="bg-slate-50 dark:bg-slate-950/60 p-4 rounded-xl border border-slate-200/90 dark:border-slate-800/80 space-y-2 text-xs">
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Subtotal Produk</p><p class="font-bold text-slate-800 dark:text-white">${h(C)}</p></div>
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Ongkos Kirim</p><p class="font-bold text-slate-800 dark:text-white">${h(q)}</p></div>
                        ${I>0?`<div class="flex justify-between text-[var(--color-primary)]"><p>Diskon Ongkir</p><p class="font-bold">-${h(I)}</p></div>`:""}
                        ${j>0?`<div class="flex justify-between text-rose-500"><p>Diskon Promo</p><p class="font-bold">-${h(j)}</p></div>`:""}
                        ${m>0?`<div class="flex justify-between text-emerald-600 dark:text-emerald-400"><p>Diskon Poin Member</p><p class="font-bold">-${h(m)}</p></div>`:""}
                        ${g&&p.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Biaya Admin PayLater</p><p class="font-bold text-slate-800 dark:text-white">+${h(p.paylaterAdminFee)}</p></div>`:""}
                        ${g&&p.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Biaya Penanganan / Layanan</p><p class="font-bold text-slate-800 dark:text-white">+${h(p.paylaterServiceFee)}</p></div>`:""}
                        ${p.hasPpn?`
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>DPP (Dasar Pengenaan Pajak)</p><p class="font-bold text-slate-800 dark:text-white">${h(p.dppAmount)}</p></div>
                        <div class="flex justify-between text-amber-600 dark:text-amber-400"><p>${f(p.ppnLabel)}</p><p class="font-bold">${p.ppnAmount>0?(p.isInclusive?"":"+")+h(p.ppnAmount):"Rp 0"}</p></div>
                        `:""}
                        <div class="flex justify-between items-center border-t border-dashed border-slate-300 dark:border-slate-700 pt-3 mt-2">
                            <p class="font-bold text-slate-800 dark:text-white uppercase tracking-wider">Total Tagihan</p>
                            <p class="text-lg font-bold text-[var(--color-primary)]">${h(ge)}</p>
                        </div>
                        ${(()=>{if(!g)return"";const E=Array.isArray(t.payment?.paylaterSchedule)&&t.payment.paylaterSchedule.length>0?t.payment.paylaterSchedule:null,oe=t.payment?.paylaterMonths||(E?E.length:1),ae=t.payment?.paylaterMonthlyInstallment||(oe>0?Math.round(ge/oe):ge);let se="";return E&&E.length>0&&(se=`
                                <div class="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-700/80 space-y-2">
                                    <p class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                        <i class="fa-solid fa-calendar-days text-[var(--color-primary)]"></i> Rencana Jadwal Angsuran Anda:
                                    </p>
                                    <div class="space-y-2">
                                        ${E.map((T,ue)=>{const W=T.installmentIndex||T.installmentNo||T.installmentNumber||T.month||ue+1,U=T.dueDateFormatted||T.dueDateStr||(T.dueDate?new Date(T.dueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"),he=parseFloat(T.total||T.totalMonthly||T.totalInstallment)||ae;return`
                                            <div class="p-3 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200/90 dark:border-slate-800/80 flex items-center justify-between gap-3 shadow-2xs">
                                                <div class="flex items-center gap-2.5 min-w-0">
                                                    <div class="w-8 h-8 rounded-xl bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] font-black text-xs flex items-center justify-center shrink-0">
                                                        ${W}
                                                    </div>
                                                    <div class="min-w-0">
                                                        <p class="text-xs font-bold text-slate-800 dark:text-white leading-tight">Bulan ke-${W}</p>
                                                        <p class="text-[10px] text-slate-400 font-mono mt-0.5">Jatuh Tempo: ${U}</p>
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
                                ${ae?`
                                <div class="flex justify-between text-[var(--color-primary)] font-black text-xs">
                                    <span>Angsuran per Bulan (${oe}x)</span>
                                    <span class="font-mono text-sm">${h(ae)}/bln</span>
                                </div>`:""}
                                <div class="flex justify-between text-slate-600 dark:text-slate-400 text-xs">
                                    <span>Jatuh Tempo Pertama</span>
                                    <span class="font-bold">${t.payment?.tempoDueDate?new Date(t.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"}</span>
                                </div>
                                ${se}
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
        `,s||(o.classList.contains("opacity-0")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("customerOrder"),document.body.classList.add("overflow-hidden"),Fe(o,"order-detail-content"))}catch(o){console.error("Error Render HTML Modal:",o),A("Gagal menampilkan detail. Coba lagi.")}},Mr=(e=!1)=>{const t=()=>{const a=document.getElementById("order-detail-modal"),s=document.getElementById("order-detail-content");Ce(a,s,()=>{document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none):not(#order-detail-modal)')||document.body.classList.remove("overflow-hidden")})};typeof window.requestCloseModal=="function"?window.requestCloseModal("customerOrder",e,t):t()};window.attachMyOrdersRealtime=aa;window.detachMyOrdersRealtime=ta;window.renderMyOrders=We;window.checkOrderStatus=Pr;window.trackOrderManual=Sr;window.clearMyOrders=Tr;window.openCustomerOrderDetail=ut;window.renderOrderDetailModal=Ye;window.closeCustomerOrderDetailModal=Mr;window.reviewPhotoFile=null;window.reviewRating=0;const Ar=(e,t,a,s,o)=>{const r=decodeURIComponent(a||""),i=decodeURIComponent(s||""),d=decodeURIComponent(o||"");let n=document.getElementById("review-modal");n||(n=document.createElement("div"),n.id="review-modal",n.className="fixed inset-0 z-[120] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",n.onclick=u=>{u.target===n&&Tt()},document.body.appendChild(n)),window.reviewPhotoFile=null,window.reviewRating=0,n.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div class="min-w-0">
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-star text-amber-400"></i> Berikan Ulasan</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest truncate">${f(i)}</p>
                </div>
                <button onclick="closeReviewModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all shrink-0"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5 custom-scrollbar">
                <div class="text-center">
                    <p class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Beri Bintang</p>
                    <div class="flex items-center justify-center gap-2" id="review-star-picker">
                        ${[1,2,3,4,5].map(u=>`<button type="button" onclick="setReviewRating(${u})" class="review-star text-3xl text-slate-300 dark:text-slate-600 transition-all hover:scale-110" data-star="${u}"><i class="fa-solid fa-star"></i></button>`).join("")}
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
        </div>`,l("review-submit-btn").onclick=()=>Mt(e,t,r,i,d),n.style.opacity="0",n.style.display="flex",requestAnimationFrame(()=>{n.style.transition="opacity 0.25s ease",n.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("review")},$r=e=>{window.reviewRating=e,document.querySelectorAll(".review-star").forEach(t=>{const a=parseInt(t.dataset.star);t.classList.toggle("text-amber-400",a<=e),t.classList.toggle("text-slate-300",a>e),t.classList.toggle("dark:text-slate-600",a>e)})},Lr=e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/")){A("Hanya file gambar yang diizinkan!");return}if(t.size>5*1024*1024){A("Ukuran gambar max 5MB!");return}window.reviewPhotoFile=t;const a=new FileReader;a.onload=s=>{l("review-photo-preview").src=s.target.result,xe("review-photo-preview-wrap"),B("review-photo-btn")},a.readAsDataURL(t)},Dr=()=>{window.reviewPhotoFile=null,B("review-photo-preview-wrap"),xe("review-photo-btn");const e=l("review-photo-input");e&&(e.value="")},Tt=(e=!1)=>{const t=document.getElementById("review-modal");if(!t||t.style.display==="none")return;const a=()=>{t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250)};if(typeof Se=="function")Se("review",e,a);else if(typeof window.requestCloseModal=="function")window.requestCloseModal("review",e,a);else{if(!e&&De.length&&De[De.length-1]==="review"){De.pop();try{history.back()}catch{}}a()}},Mt=async(e,t,a,s,o)=>{if(!window.reviewRating||window.reviewRating<1)return A("Silakan beri bintang terlebih dahulu!");if(!bt){fe(!0),Pe("Mengirim ulasan...");try{let r="";if(window.reviewPhotoFile&&typeof window.uploadBuktiToGDrive=="function"){const n=await window.uploadBuktiToGDrive(window.reviewPhotoFile,"review-"+e);n?r=n:A("Foto gagal diupload, ulasan tetap dikirim tanpa foto.")}const i=Date.now(),d={id:i,orderId:e||"",productId:t??0,variantName:a||"",productName:s||"",customerName:o||"Pelanggan",rating:window.reviewRating,text:ve("review-text")||"",photoUrl:r||"",adminReply:"",isVisible:!0,createdAt:je.firestore.FieldValue.serverTimestamp()};await J.collection("freshmart").doc("cms_data").collection("reviews").doc(i.toString()).set(d),mt.delete(t),Tt(),A("Terima kasih atas ulasan Anda!"),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(r){console.error("Gagal mengirim ulasan:",r),A("Gagal mengirim ulasan: "+(r.message||"Error tidak diketahui"))}finally{fe(!1),de()}}},mt=new Map,Er=5*60*1e3,Fr=async e=>{if(!l("product-modal-reviews-container"))return;const a=o=>{const r=o.length?o.reduce((u,g)=>u+(parseFloat(g.rating)||0),0)/o.length:0,i=u=>Array.from({length:5},(g,P)=>`<i class="fa-solid fa-star ${P<Math.round(u)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join("");let d=`
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2"><i class="fa-solid fa-comment-dots text-amber-400"></i> Ulasan Pelanggan</h4>
                ${o.length?`<div class="flex items-center gap-1.5"><span class="flex text-xs">${i(r)}</span><span class="text-xs font-bold text-slate-600 dark:text-slate-300">${r.toFixed(1)}</span><span class="text-[10px] font-bold text-slate-400">(${o.length})</span></div>`:""}
            </div>`;if(!o.length){we("product-modal-reviews-container",d+'<p class="text-[11px] font-bold text-slate-400 text-center py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">Belum ada ulasan untuk produk ini.</p>');return}const n=o.map(u=>{let g="";try{u.createdAt&&u.createdAt.toDate&&(g=u.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}))}catch{}return`
            <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div class="flex items-center justify-between mb-1.5">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${f(u.customerName||"Pelanggan")}</p>
                    <span class="text-[9px] font-bold text-slate-400">${g}</span>
                </div>
                <div class="flex text-[11px] mb-2">${i(u.rating)}</div>
                ${u.variantName?`<p class="text-[10px] font-bold text-slate-400 mb-1.5">Varian: ${f(u.variantName)}</p>`:""}
                ${u.text?`<p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${f(u.text)}</p>`:""}
                ${u.photoUrl?`<div class="w-16 h-16 rounded-xl overflow-hidden mb-3 border border-slate-200 dark:border-slate-700"><img src="${f(u.photoUrl)}" class="w-full h-full object-cover cursor-pointer" onclick="window.open('${f(u.photoUrl)}','_blank')" alt="Foto ulasan"></div>`:""}
                ${u.adminReply?`
                <div class="mt-2.5 p-3 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.2)] rounded-xl">
                    <p class="text-[10px] font-bold text-[var(--color-primary-dark)] dark:text-[var(--color-primary)] mb-1 flex items-center gap-1"><i class="fa-solid fa-reply"></i> Balasan Penjual</p>
                    <p class="text-xs text-slate-600 dark:text-slate-300">${f(u.adminReply)}</p>
                </div>`:""}
            </div>`}).join("");we("product-modal-reviews-container",d+`<div class="space-y-3">${n}</div>`)},s=mt.get(e);if(s&&Date.now()-s.timestamp<Er){a(s.data);return}we("product-modal-reviews-container",'<div class="text-center py-6"><i class="fa-solid fa-spinner fa-spin text-xl text-slate-300"></i></div>');try{let r=(await J.collection("freshmart").doc("cms_data").collection("reviews").where("productId","==",e).get()).docs.map(i=>i.data()).filter(i=>i.isVisible!==!1);r.sort((i,d)=>{const n=i.createdAt&&i.createdAt.toMillis?i.createdAt.toMillis():0;return(d.createdAt&&d.createdAt.toMillis?d.createdAt.toMillis():0)-n}),mt.set(e,{data:r,timestamp:Date.now()}),a(r)}catch(o){console.warn("Gagal memuat ulasan:",o),we("product-modal-reviews-container",'<p class="text-[11px] text-slate-400 text-center py-4">Belum ada ulasan yang dapat dimuat.</p>')}};window.openReviewModal=Ar;window.setReviewRating=$r;window.handleReviewPhotoSelect=Lr;window.removeReviewPhoto=Dr;window.closeReviewModal=Tt;window.submitReview=Mt;window.submitProductReview=Mt;window.loadProductReviews=Fr;const Cr="admgaffidigital/tokoputri",Rr=`https://api.github.com/repos/${Cr}/releases/latest`,ft="https://github.com/admgaffidigital/tokoputri/releases/latest/download/TokoPutri.OfficialStore.apk";let Le=null,ot=!1;const Br=e=>!e||isNaN(e)?"8.0 MB":`${(e/(1024*1024)).toFixed(1)} MB`,Ir=e=>{if(!e)return"Terbaru";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return"Terbaru"}},Or=async()=>{if(Le)return Le;if(ot)return null;const e=ct(x)||"v1.18.1";ot=!0;try{const t=await fetch(Rr,{headers:{Accept:"application/vnd.github.v3+json"},cache:"no-store"});if(t.ok){const a=await t.json(),s=a.assets?.find(d=>d.name?.toLowerCase().endsWith(".apk"))||a.assets?.[0],o=a.tag_name||e,r=Zs(o,e)>0,i=r?e:o;Le={tagName:i,name:`Toko Putri ( Official Store ) ${i}`,publishedAt:r?"16 Okt 2026":Ir(a.published_at),fileSize:s?Br(s.size):"16.3 MB",downloadUrl:s?.browser_download_url||ft,notes:a.body||"",isLiveFetched:!0}}else throw new Error(`GitHub API HTTP ${t.status}`)}catch{const a=ct(x)||"v1.18.1";Le={tagName:a,name:`Toko Putri ( Official Store ) ${a}`,publishedAt:"16 Okt 2026",fileSize:"16.3 MB",downloadUrl:ft,notes:"",isLiveFetched:!1}}finally{ot=!1}return Le},jr=()=>{let e=l("app-download-modal");return e||(e=document.createElement("div"),e.id="app-download-modal",e.className="fixed inset-0 z-[125] bg-slate-950/85 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&sa()},e.innerHTML=`
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
                    <span id="btn-download-apk-text">Unduh &amp; Pasang APK (<span id="app-modal-version-tag">v1.18.0</span>)</span>
                </button>
                <div class="flex items-center justify-between px-1 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                    <span class="flex items-center gap-1.5">
                        <i class="fa-brands fa-android text-emerald-500 text-xs"></i>
                        <span>Kompatibel: Android 7.0 (Nougat) s/d Android 15</span>
                    </span>
                    <span id="app-modal-published-date" class="hidden sm:inline">Rilis: 15 Okt 2026</span>
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

            <!-- Apa yang Baru (Highlights Changelog v1.18.0) -->
            <div class="space-y-2.5">
                <div class="flex items-center justify-between">
                    <h3 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-sparkles text-amber-500"></i>
                        <span id="app-modal-whats-new-title">Apa yang Baru di v1.18.0</span>
                    </h3>
                    <button type="button" onclick="closeAppDownloadModal(); if(typeof window.openChangelogModal==='function') window.openChangelogModal();" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline cursor-pointer">
                        Lihat Semua Riwayat
                    </button>
                </div>

                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Pustaka Master Produk &amp; Multi-Varian:</b> Akses 27+ template produk bahan bangunan &amp; perkakas terstandar lengkap dengan multi-varian dan impor selektif per-produk.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Kustomisasi Harga Toko Mandiri:</b> Sesuaikan harga jual toko, harga modal (HPP), dan stok awal rak/gudang secara mandiri saat mengimpor master produk.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Stabilitas Penuh Kolom Pencarian:</b> Menuntaskan masalah keyboard Android yang membuka-menutup sendiri di search bar melalui standardisasi font 16px, zero-shift CSS, dan native placeholder.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Pusat Reset ke Setelan Awal Eksklusif Pemilik:</b> Fitur pembersihan data terpadu aman dengan Triple-Guard Security &amp; cadangan darurat otomatis (JSON).
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Pusat Reset ke Setelan Awal Eksklusif Pemilik:</b> Fitur pembersihan data terpadu aman dengan Triple-Guard Security &amp; cadangan darurat otomatis (JSON).
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Re-Aktivasi Realtime Flash Sale:</b> Otomatis memperpanjang jadwal sesi selesai &amp; mereset kuota keterjualan produk langsung dari panel CMS Admin.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Unifikasi Kasir POS Layar Penuh:</b> Akses mesin kasir point-of-sales terdedikasi dengan hotkey kasir cepat dan proteksi sesi shift aman.
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
    </div>`,document.body.appendChild(e),e)},_r=async()=>{const e=jr();if(!e)return;Re("appDownload"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const a=l("app-download-modal-box");a&&a.classList.remove("translate-y-full","sm:translate-y-8")}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light");const t=await Or();if(t){const a=l("app-modal-version-tag"),s=l("app-modal-filesize"),o=l("app-modal-published-date");a&&(a.textContent=t.tagName),s&&(s.innerHTML=`<span>${f(t.fileSize)}</span>`),o&&(o.textContent=`Rilis: ${f(t.publishedAt)}`)}},sa=(e=!1)=>{const t=l("app-download-modal");!t||t.style.display==="none"||Se("appDownload",e,()=>{t.classList.add("opacity-0");const a=l("app-download-modal-box");a&&a.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{t.style.display="none"},300)})},Nr=()=>{const e=l("btn-download-apk-action"),t=l("btn-download-apk-icon"),a=l("btn-download-apk-text");e&&e.classList.add("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-spinner fa-spin"),a&&(a.textContent="Menghubungkan ke Server Rilis..."),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.showToast=="function"&&window.showToast("Memulai unduhan TokoPutri(OfficialStore).apk terbaru. Cek panel notifikasi HP Anda!");const s=Le?.downloadUrl||ft,o=document.createElement("a");o.href=s,o.setAttribute("download","TokoPutri(OfficialStore).apk"),o.target="_blank",o.rel="noopener noreferrer",document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>{if(e&&e.classList.remove("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-circle-check text-white"),a){const r=Le?.tagName||ct(x)||"v1.18.0";a.textContent=`Unduh Ulang APK (${r})`}},2500)};window.openAppDownloadModal=_r;window.closeAppDownloadModal=sa;window.downloadLatestApk=Nr;window.setCat=e=>{Ut(e),gt(1),typeof window.rCat=="function"&&window.rCat()};window.setBrand=e=>{Kt(e),gt(1),typeof window.rCat=="function"&&window.rCat()};const Ur=()=>{let e="",t=dt==="Semua Produk";e+=`
    <button onclick="setCat('Semua Produk'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-colors">
            <i class="fa-solid fa-layer-group text-base sm:text-lg"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA</span>
        <i class="fa-solid fa-circle-check text-base ${t?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
    </button>`,x.categories.forEach(r=>{let i=dt===r.name,d=r.img?`<img loading="lazy" src="${f(r.img)}" alt="${f(r.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Cat'">`:'<i class="fa-solid fa-box text-base sm:text-lg"></i>';e+=`
        <button onclick="setCat('${f(r.name)}'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden border border-slate-200 dark:border-slate-600">
                ${d}
            </div>
            <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 line-clamp-1 ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${f(r.name)}</span>
            <i class="fa-solid fa-circle-check text-base ${i?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
        </button>`});const a=l("modal-category-list");a&&(a.innerHTML=`<div class="flex flex-col gap-2.5 pb-6 w-full">${e}</div>`);const s=l("category-modal"),o=l("category-modal-content");s&&o&&(s.classList.contains("hidden")&&Re("category"),Fe(s,o))};window.openCategoryModal=Ur;window.openBrandModal=()=>{let e="",t=lt==="Semua Merek";e+=`
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA MEREK</span>
    </button>`,x.brands.forEach(r=>{let i=lt===r.name,d=r.img?`<img loading="lazy" src="${f(r.img)}" alt="${f(r.name)}" class="w-full h-full object-contain p-1.5" >`:'<i class="fa-solid fa-tag text-lg sm:text-xl"></i>';e+=`
        <button onclick="setBrand('${f(r.name)}'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-2.5 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600">
                ${d}
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${f(r.name)}</span>
        </button>`});const a=l("modal-brand-grid");a&&(a.innerHTML=e);const s=l("brand-modal"),o=l("brand-modal-content");s&&o&&(s.classList.contains("hidden")&&Re("brand"),Fe(s,o))};window.closeCategoryModal=(e=!1)=>{const t=l("category-modal"),a=l("category-modal-content");t&&a&&Se("category",e,()=>{Ce(t,a)})};window.closeBrandModal=(e=!1)=>{const t=l("brand-modal"),a=l("brand-modal-content");t&&a&&Se("brand",e,()=>{Ce(t,a)})};window.openQuickMenuModal=()=>{const e=l("quickmenu-modal"),t=l("quickmenu-modal-content");e&&t&&(e.classList.contains("hidden")&&Re("quickmenu"),Fe(e,t))};window.openTermsModal=()=>{const e=`
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
    `,t=x?.store?.terms,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;we("terms-modal-content-body",a);const s=l("terms-modal"),o=l("terms-modal-content");s&&o&&(s.classList.contains("hidden")&&Re("terms"),Fe(s,o))};window.closeTermsModal=(e=!1)=>{const t=l("terms-modal"),a=l("terms-modal-content");t&&a&&Se("terms",e,()=>{Ce(t,a)})};window.openPrivacyModal=()=>{const e=`
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
    `,t=x?.store?.privacy,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;we("privacy-modal-content-body",a);const s=l("privacy-modal"),o=l("privacy-modal-content");s&&o&&(s.classList.contains("hidden")&&Re("privacy"),Fe(s,o))};window.closePrivacyModal=(e=!1)=>{const t=l("privacy-modal"),a=l("privacy-modal-content");t&&a&&Se("privacy",e,()=>{Ce(t,a)})};window.closeQuickMenuModal=(e=!1)=>{const t=l("quickmenu-modal"),a=l("quickmenu-modal-content");t&&a&&Se("quickmenu",e,()=>{Ce(t,a)})};window.switchGuideTab=(e="customer")=>{["customer","pos","admin"].forEach(s=>{const o=l(`guide-tab-btn-${s}`),r=l(`guide-section-${s}`);s===e?(o&&(o.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-extrabold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer primary-bg text-white"),r&&r.classList.remove("hidden")):(o&&(o.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"),r&&r.classList.add("hidden"))});const a=document.querySelector("#shopping-guide-modal .custom-scrollbar");a&&(a.scrollTop=0)};window.openShoppingGuideModal=(e="customer")=>{const t=l("shopping-guide-modal"),a=l("shopping-guide-modal-content");t&&a&&(typeof window.switchGuideTab=="function"&&window.switchGuideTab(e),t.classList.contains("hidden")&&Re("guide"),Fe(t,a))};window.closeShoppingGuideModal=(e=!1)=>{const t=l("shopping-guide-modal"),a=l("shopping-guide-modal-content");t&&a&&Se("guide",e,()=>{Ce(t,a)})};window.navigateFromQuickMenu=e=>{closeQuickMenuModal(!0);const t=De.indexOf("quickmenu");t>-1&&De.splice(t,1),typeof e=="function"?(history.replaceState({view:ca},"",window.location.href),e()):(history.replaceState({view:e},"",window.location.href),pa(e,!0))};let Bt=!1,Je=null;const tt=async()=>Bt?!0:Je||(Je=Promise.all([Xe(()=>import("./module-admin-P168LFo6.js").then(e=>e.j),__vite__mapDeps([0,1,2,3,4,5,6,7])),Xe(()=>import("./module-admin-P168LFo6.js").then(e=>e.k),__vite__mapDeps([0,1,2,3,4,5,6,7]))]).then(()=>(Bt=!0,!0)),Je);window.ensureAdminLoaded=tt;window.checkAdminAccess=async()=>{if(Pe("Membuka Panel Owner..."),await tt(),de(),typeof window.__checkAdminAccessReal=="function")return window.__checkAdminAccessReal()};typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);typeof window<"u"&&(window.AndroidNativeApp||window.Capacitor||window.location&&(window.location.protocol==="capacitor:"||window.location.protocol==="ionic:"))&&document.documentElement.classList.add("is-native-app");ua();window.firebase=je;window.db=J;window.DOMPurify=vs;window.ensureScriptLoaded=ma;if(typeof window<"u"){const e=window.print?window.print.bind(window):null;window.print=function(){window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():e&&e()}}window.uiPalettes=$s;window.hexToRgb=Ls;window.applyUITheme=qt;window.toggleTheme=Ds;window.applyBackgroundStyle=Wt;Es();const Kr=localStorage.getItem("freshmart_ui_theme")||"emerald";qt(Kr,localStorage.getItem("freshmart_theme_color"));const It=()=>{Hs();const e=localStorage.getItem("freshmart_bg_style")||"minimalist",t=localStorage.getItem("freshmart_bg_custom_url")||"";Wt(e,t),Gs()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",It):It();window.onerror=function(e,t,a,s,o){return console.error("Global Error Caught:",e,"at",a,":",s),typeof showToast=="function"&&showToast("Ops, ada kendala sistem."),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Promise Rejection Sentinel:",e.reason)});window.addEventListener("vite:preloadError",function(e){console.warn("[Vite] Chunk preload failed (new deployment detected). Auto-reloading...",e);const t="freshmart_preload_reload",a=sessionStorage.getItem(t),s=Date.now();(!a||s-parseInt(a,10)>1e4)&&(sessionStorage.setItem(t,String(s)),window.location.reload())});window.updateSEO=fa;window.injectJSONLD=ba;window.rewardStatusLabel=wt;window.getYouTubeId=xa;window.parseVideoUrl=wa;window.fixDriveVideo=ga;window.fixDriveVideoPreview=ha;let Ot=Vt;window.calcTaxDetails=e=>{const t=x?.store||{},a=t.ppnEnabled===!0||t.ppnEnabled==="true",s=t.ppnRate!==void 0&&t.ppnRate!==null&&!isNaN(parseFloat(t.ppnRate))?Math.max(0,parseFloat(t.ppnRate)):11,o=t.ppnType||"exclusive",r=t.ppnShowZero!==!1,i=t.ppnTaxLabel||"PPN";if(!a||e<=0)return{ppnEnabled:!1,ppnRate:0,ppnType:o,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0,ppnShowZero:!1,ppnLabel:"PPN"};if(s===0)return{ppnEnabled:!0,ppnRate:0,ppnType:o,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0,ppnShowZero:r,ppnLabel:i};if(o==="inclusive"){const d=Math.round(e*100/(100+s)),n=e-d;return{ppnEnabled:!0,ppnRate:s,ppnType:"inclusive",ppnAmount:n,dppAmount:d,grandTotalAdd:0,ppnShowZero:r,ppnLabel:i}}else{const d=Math.round(e*s/100);return{ppnEnabled:!0,ppnRate:s,ppnType:"exclusive",ppnAmount:d,dppAmount:Math.max(0,e),grandTotalAdd:d,ppnShowZero:r,ppnLabel:i}}};typeof requestIdleCallback<"u"?requestIdleCallback($t,{timeout:5e3}):setTimeout($t,3e3);window.isAdm=!1;history.replaceState({view:"view-catalog"},"","");window.addEventListener("DOMContentLoaded",async()=>{try{Ht()}catch(e){console.warn("[NativeMobile] Error:",e)}await Fs();try{Cs()}catch(e){console.warn("[syncAppMeta] Error:",e)}Rs(),Bs(),Et(),window.attachRewardsRealtime=Et,Xe(()=>import("./module-pos-QknI03nH.js").then(e=>e.W),__vite__mapDeps([4,1,2,3,5,6])).then(e=>{typeof e.initPOSAuth=="function"&&e.initPOSAuth()}).catch(e=>console.warn("[POS Auth] Gagal inisialisasi:",e)),st.onAuthStateChanged(async e=>{if(!Vs()){if(e&&e.uid!==He){try{const t=await J.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(e.uid).get();if(t.exists){const a=t.data()||{};if(a.isActive===!1){if(rt(),typeof window.detachAllAdminListenersBeforeSignOut=="function")try{window.detachAllAdminListenersBeforeSignOut()}catch{}else{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}}await st.signOut();return}const s={uid:e.uid,name:a.name||e.email,email:a.email||e.email,role:a.role||Ve.CASHIER,permissions:a.permissions||null,isActive:!0};if(Lt(s),s.role===Ve.CASHIER){Xe(()=>import("./module-pos-QknI03nH.js").then(r=>r.W),__vite__mapDeps([4,1,2,3,5,6])).then(r=>{typeof r.setCashierSession=="function"&&r.setCashierSession(s)}).catch(()=>{}),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();return}await tt(),window.isAdm=!0,window.__localIsAdm=!0,Ft(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();let o=document.getElementById("view-admin-login");o&&!o.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu());return}}catch{}if(rt(),typeof window.detachAllAdminListenersBeforeSignOut=="function")try{window.detachAllAdminListenersBeforeSignOut()}catch{}else{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}}await st.signOut();return}if(e&&e.uid===He){Lt({uid:He,name:"Owner Toko",email:e.email,role:Ve.OWNER,isActive:!0});try{sessionStorage.setItem("pos_cashier_session",JSON.stringify({uid:He,name:"Owner Toko",email:e.email,role:Ve.OWNER}))}catch{}await tt(),await zs(),Js(),window.isAdm=!0,window.__localIsAdm=!0,Ft(),typeof window.updatePOSHeaderIcon=="function"?window.updatePOSHeaderIcon():typeof window.initPOSAuth=="function"&&window.initPOSAuth();let t=document.getElementById("view-admin-login");t&&!t.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu(),showToast("Sesi Owner Dipulihkan! Selamat Datang."))}else{if(Qs(),localStorage.removeItem("freshmart_admin_session_id"),rt(),window.isAdm=!1,window.__localIsAdm=!1,Is(),typeof window.detachAllAdminListenersBeforeSignOut=="function")try{window.detachAllAdminListenersBeforeSignOut()}catch{}else{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()}}})});window.el=l;window.show=xe;window.hide=B;window.toggleCls=ce;window.setIn=re;window.setH=we;window.setV=Ie;window.getV=ve;window.esc=f;window.fixD=xt;window.fCur=h;window.fAccounting=ka;window.sL=it;window.ssL=Qe;window.defaultFbC=ht;window.fbC=ht;window.FIREBASE_CONFIG=ht;window.defApp=ya;window.ADMIN_UID=He;window.sLoad=Pe;window.hLoad=de;window.sanitizeCart=Os;window.initNativeMobileEngine=Ht;window.triggerHaptic=va;window.checkAndEnforceSubscriptionLockout=js;window.renderSubscriptionNoticeInCMS=_s;window.openRenewalModal=Ns;window.closeRenewalModal=Us;window.verifyAndApplyLicenseKey=Ks;const L=(e,t,a)=>{try{Object.defineProperty(window,e,{get:t,set:a,configurable:!0})}catch{}};L("GAS_UPLOAD_URL",()=>Ot,e=>{Ot=e});L("confirmCb",()=>Pa,e=>{ms(e)});L("appData",()=>x,e=>{Sa(e)});L("cart",()=>H,e=>{jt(e)});L("wishlist",()=>Ma,e=>{Ta(e)});L("myOrders",()=>G,e=>{at(e)});L("cust",()=>c,e=>{_t(e)});L("currentMember",()=>R,e=>{nt(e)});L("selectedReward",()=>Ee,e=>{Oe(e)});L("memberCheckTimer",()=>Aa,e=>{fs(e)});L("aCat",()=>dt,e=>{Ut(e)});L("aBrand",()=>lt,e=>{Kt(e)});L("sQ",()=>La,e=>{$a(e)});L("cSort",()=>Ea,e=>{Da(e)});L("cView",()=>Ca,e=>{Fa(e)});L("cPage",()=>Ra,e=>{gt(e)});L("iPP",()=>Ia,e=>{Ba(e)});L("cTab",()=>Oa,e=>{bs(e)});L("aSq",()=>ja,e=>{xs(e)});L("eId",()=>_a,e=>{ws(e)});L("cProd",()=>Ua,e=>{Na(e)});L("cVar",()=>Ha,e=>{Ka(e)});L("tVars",()=>Ga,e=>{gs(e)});L("tWhol",()=>qa,e=>{hs(e)});L("tSpec",()=>Wa,e=>{ks(e)});L("cQty",()=>za,e=>{Va(e)});L("oMods",()=>De,e=>{Ja(e)});L("aOrdLst",()=>Za,e=>{Qa(e)});L("aCustLst",()=>Xa,e=>{Ya(e)});L("aRevLst",()=>ts,e=>{es(e)});L("gOrds",()=>ss,e=>{as(e)});L("gReviews",()=>os,e=>{rs(e)});L("cVOrd",()=>ns,e=>{is(e)});L("vouch",()=>b,e=>{Me(e)});L("toastT",()=>ls,e=>{ys(e)});L("isSaving",()=>bt,e=>{fe(e)});L("reviewFilterMode",()=>cs,e=>{ds(e)});L("lastReportPeriod",()=>us,e=>{ps(e)});
