const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/module-admin-C7m5adIG.js","assets/module-print-B3ZXxPmt.js","assets/vendor-firebase-core-D2OF5R23.js","assets/vendor-firebase-db-BIUZcnOd.js","assets/module-pos-DXxDEEkv.js","assets/module-member-CZLX0usU.js","assets/module-faq-BgPS5sqP.js","assets/vendor-sortable-DzmX_rHT.js"])))=>i.map(i=>d[i]);
import{a as b,g as ve,d as c,e as l,aQ as y,j as Me,h as I,a3 as ce,c as H,f as g,a1 as re,b as we,i as f,aa as ra,a9 as oa,y as De,s as xe,U as ft,aM as ot,ah as Qe,V as fe,l as Pe,n as de,p as R,q as J,t as G,aR as tt,w as it,ag as Ot,G as Ie,aS as jt,x as Oe,k as A,m as bt,aj as ia,B as _t,$ as xt,H as na,Z as la,o as Fe,v as Ce,r as Se,ak as Ee,af as Re,aC as Nt,av as wt,aE as Ut,ax as nt,as as da,aT as ca,aw as lt,aU as pa,X as ua,aV as ma,aW as fa,an as ba,aI as xa,aK as wa,aJ as ga,aX as At,aY as Kt,_ as Xe,A as at,J as He,F as st,R as Ve,K as $t,a2 as ha,aL as gt,aN as ka,aZ as ya,a_ as va,a$ as Pa,b0 as Sa,ai as Ta,b1 as Ma,aF as Aa,ay as $a,aG as La,aA as Ea,aH as Da,aB as Fa,at as Ca,b2 as Ra,au as Ba,b3 as Ia,b4 as Oa,b5 as ja,ar as _a,al as Na,aq as Ua,am as Ka,b6 as Ha,b7 as Ga,b8 as qa,ap as Wa,ao as Va,b9 as za,M as Ja,L as Qa,O as Za,N as Ya,Q as Xa,P as es,a0 as ts,u as as,ad as ss,a6 as rs,Y as os,W as is,ba as ns,a8 as ls,a7 as ds,S as cs,I as ps,bb as us,bc as ms,T as fs,ae as bs,bd as xs,be as ws,bf as gs,bg as hs,bh as ks}from"./module-print-B3ZXxPmt.js";import{f as je}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import{p as ys}from"./vendor-utils-DqNA57iZ.js";import{g as Ht,w as vs,x as Lt,h as Ps,y as Ss,z as Ts,A as Ms,u as As,B as $s,e as Gt,C as Ls,f as qt,D as Es,E as Ds,v as Fs,F as Cs,G as Rs,H as Et,a as Dt,d as Bs,I as Is,J as Os,K as js,L as _s,M as Ns,N as Us,O as Ks,P as Hs}from"./module-pos-DXxDEEkv.js";import{G as Gs,a as Wt,u as qs}from"./module-member-CZLX0usU.js";import{i as Ws,a as Vs,b as zs,d as Js}from"./module-admin-C7m5adIG.js";import{a as dt,c as Qs}from"./module-faq-BgPS5sqP.js";import"./vendor-sortable-DzmX_rHT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const Zs=()=>{const e=l("toggle-droppoint"),t=l("droppoint-form");if(!(!e||!t))if(e.checked)t.classList.remove("hidden");else{t.classList.add("hidden"),c.dropPoint=null;const a=l("dp-location-status");a&&a.classList.add("hidden");const s=l("btn-dp-location");l("text-dp-location"),s&&(s.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>')}},Ys=()=>{if(!navigator.geolocation){typeof window.showToast=="function"&&window.showToast("GPS tidak didukung");return}const e=l("btn-dp-location");e&&(e.innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i> Mengambil GPS...'),navigator.geolocation.getCurrentPosition(t=>{c.dropPoint||(c.dropPoint={}),c.dropPoint.lat=t.coords.latitude,c.dropPoint.lng=t.coords.longitude;const a=l("dp-location-status");a&&a.classList.remove("hidden"),e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">GPS Berhasil! Tap untuk Update</span>'),typeof window.showToast=="function"&&window.showToast("GPS Lokasi Tujuan Berhasil!")},()=>{e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>'),typeof window.showToast=="function"&&window.showToast("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})},Vt=e=>{if(!e||e.trim().length<5)return;const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){c.dropPoint||(c.dropPoint={}),c.dropPoint.lat=parseFloat(a.lat),c.dropPoint.lng=parseFloat(a.lng);const s=l("dp-location-status");s&&s.classList.remove("hidden"),typeof window.showToast=="function"&&window.showToast("Koordinat Lokasi Tujuan berhasil!")}},Xs=async()=>{try{const e=await navigator.clipboard.readText(),t=l("dp-maps-input");t&&(t.value=e,Vt(e))}catch{typeof window.showToast=="function"&&window.showToast("Gagal membaca clipboard")}},er=()=>{if(b.store.isDeliveryEnabled===!1&&b.store.isPickupEnabled===!1){typeof window.showToast=="function"&&window.showToast("Toko tutup!");return}const e=ve("cust-name"),t=(document.querySelector('input[name="delivery-method"]:checked')||{}).value;if(!e||!t){typeof window.showToast=="function"&&window.showToast("Lengkapi form nama!");return}let a=ve("cust-wa").replace(/\D/g,"");if(!a||a.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp wajib diisi! (min. 9 digit)");return}if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),c.name=e,c.deliveryMethod=t,c.note=ve("cust-note"),c.wa=a,t==="delivery"){if(c.address=ve("cust-address"),!c.lat||!c.lng){const i=l("cust-maps-input")?.value;i&&typeof window.handleCustomerMapsInput=="function"&&window.handleCustomerMapsInput(i)}if(!c.address||!c.lat||!c.lng){typeof window.showToast=="function"&&window.showToast("Alamat & GPS wajib!");return}const s=typeof window.getDist=="function"?window.getDist:()=>0;c.distance=s(parseFloat(b.store.lat||0),parseFloat(b.store.lng||0),c.lat,c.lng)||0;const o=l("toggle-droppoint");if(o&&o.checked){let i=ve("dp-receiver-name").trim(),d=ve("dp-receiver-wa").replace(/\D/g,""),n=ve("dp-address").trim();if(!i){typeof window.showToast=="function"&&window.showToast("Nama penerima di lokasi tujuan wajib diisi!");return}if(!d||d.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WA penerima di lokasi tujuan wajib diisi (min. 9 digit)!");return}if(!n){typeof window.showToast=="function"&&window.showToast("Alamat lokasi tujuan wajib diisi!");return}if(!c.dropPoint||!c.dropPoint.lat||!c.dropPoint.lng){typeof window.showToast=="function"&&window.showToast("GPS / Koordinat lokasi tujuan wajib diisi untuk kalkulasi ongkir!");return}d.startsWith("0")?d="62"+d.substring(1):d.startsWith("62")||(d="62"+d),c.dropPoint.name=i,c.dropPoint.wa=d,c.dropPoint.address=n,c.distance=s(parseFloat(b.store.lat||0),parseFloat(b.store.lng||0),c.dropPoint.lat,c.dropPoint.lng)||0}else c.dropPoint=null}else c.address="Ambil di Toko",c.distance=0,c.dropPoint=null;y&&y.type&&y.type.includes("shipping")&&t!=="delivery"&&Me(null),l("voucher-input")&&!y&&(l("voucher-input").value="",I("voucher-msg-container")),typeof window.changeView=="function"&&window.changeView("view-payment")},ht=()=>{ce("address-container","hidden",(document.querySelector('input[name="delivery-method"]:checked')||{}).value==="pickup")},zt=()=>{const e=l("tnc-checkbox"),t=l("btn-process-order");!e||!t||(e.checked?t.classList.remove("btn-disabled"):t.classList.add("btn-disabled"))},Jt=()=>{if(!H.length){typeof window.showToast=="function"&&window.showToast("Keranjang belanja kosong!"),typeof window.changeView=="function"&&window.changeView("view-catalog",!0);return}if(!c.name){typeof window.showToast=="function"&&window.showToast("Lengkapi data pengiriman terlebih dahulu!"),typeof window.changeView=="function"&&window.changeView("view-checkout",!0);return}const e=typeof window.getEffP=="function"?window.getEffP:u=>u.price||0,t=H.reduce((u,F)=>u+(parseFloat(e(F))||0)*(parseFloat(F.qty)||0),0);let a=0,s=0,o=0;if(c.deliveryMethod==="delivery"&&(a=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(b.store.costPerKm)||0)/500)*500),y&&(y.minPurchase&&parseFloat(y.minPurchase)>0&&t<parseFloat(y.minPurchase)?(Me(null),I("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast(`Voucher dibatalkan (min. belanja ${g(y.minPurchase)})`)):y.targetProduct&&!H.some(u=>u.id===parseInt(y.targetProduct))&&(Me(null),I("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast("Voucher dibatalkan (produk khusus dihapus)"))),y){let u=t;if(y.targetProduct&&y.targetProduct!==""){const F=parseInt(y.targetProduct);u=H.filter(q=>q.id===F).reduce((q,O)=>q+(parseFloat(e(O))||0)*(parseFloat(O.qty)||0),0)}if(y.type==="shipping_free")s=a;else if(y.type==="shipping_flat")s=parseFloat(y.value)||0;else if(y.type==="percent"){let F=u*((parseFloat(y.value)||0)/100);y.maxDiscount&&parseFloat(y.maxDiscount)>0&&(F=Math.min(F,parseFloat(y.maxDiscount))),o=F}else o=parseFloat(y.value)||0,o=Math.min(o,u)}const r=(b.store.freeShippingMinSpendEnabled===!0||b.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(b.store.freeShippingMinSpendAmount)||0)>0&&t>=(parseFloat(b.store.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery";r&&(s=a),s=Math.min(s,a),o=Math.min(o,t);const i=Math.max(0,t-o+(a-s)),n=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(i),p=n.ppnAmount,w=i+n.grandTotalAdd;re("summary-subtotal",g(t)),ce("summary-shipping-row","hidden",c.deliveryMethod!=="delivery");const P=l("summary-discount-row");if(P)if(o>0||s>0){P.classList.remove("hidden");let u="";o>0&&(u+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Promo</p><p class="text-[13px] font-bold text-rose-500">-${g(o)}</p></div>`),s>0&&(u+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">${r?"Gratis Ongkir (Promo Belanja)":"Diskon Ongkir"}</p><p class="text-[13px] font-bold text-rose-500">-${g(s)}</p></div>`),P.innerHTML=u}else P.classList.add("hidden");c.deliveryMethod==="delivery"&&(re("summary-shipping",g(a)),re("summary-distance",`(${c.distance.toFixed(1)}km)`)),re("summary-total",g(w)),l("btn-total-preview")&&re("btn-total-preview",g(w));const v=l("summary-ppn-row");if(v)if(n.ppnEnabled&&(p>0||n.ppnShowZero||n.ppnRate===0)){v.classList.remove("hidden");const F=n.ppnRate!==void 0?`${n.ppnRate}%`:"11%",Z=n.ppnLabel||(n.ppnType==="inclusive"?`Termasuk PPN (${F})`:`PPN (${F})`);re("summary-ppn-label",Z),n.ppnType==="inclusive"?re("summary-ppn",g(p)):re("summary-ppn",p>0?`+${g(p)}`:g(0))}else v.classList.add("hidden");re("payment-cust-name",c.name||"-"),l("payment-cust-wa")&&(l("payment-cust-wa").textContent=c.wa?"+"+c.wa:"-"),c.dropPoint&&c.dropPoint.lat?re("payment-cust-method",`Kirim ke Lokasi Berbeda (${c.distance.toFixed(1)}km dari Toko)`):re("payment-cust-method",c.deliveryMethod==="delivery"?`Dikirim (${c.distance.toFixed(1)}km)`:"Ambil di Toko"),re("payment-cust-address",c.address||"-");const S=l("payment-droppoint-info");if(S)if(c.dropPoint&&c.dropPoint.lat&&c.dropPoint.name){S.classList.remove("hidden"),re("payment-dp-name",c.dropPoint.name||"-");const u=l("payment-dp-wa");u&&(u.textContent=c.dropPoint.wa?"+"+c.dropPoint.wa:"-"),re("payment-dp-address",c.dropPoint.address||"-")}else S.classList.add("hidden");we("payment-items-preview",H.map(u=>{const F=u.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${f(u.variantName)}</span>`:"",Z=u.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${f(u.poTime)}</span>`:"",q=!!(u.img&&typeof u.img=="string"&&u.img.trim()&&!ra(u.img)),O=oa(u,{size:"thumb"});return`
        <div class="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
            <div class="flex items-center gap-3.5 min-w-0">
                <div class="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0 overflow-hidden flex items-center justify-center">
                    ${q?`<img loading="lazy" src="${f(u.img)}" alt="${f(u.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${O}</div>`:O}
                </div>
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate mb-1" title="${f(u.name)}">${f(u.name)}</p>
                    ${u.variantName||u.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${F}
                        ${Z}
                    </div>`:""}
                    <p class="text-[11px] text-[var(--color-primary)] font-bold">${parseFloat(u.qty)} ${f(u.unit||"pcs")} x ${g(e(u))}</p>
                </div>
            </div>
            <div class="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap ml-3 shrink-0">${g(e(u)*parseFloat(u.qty))}</div>
        </div>`}).join("")+(De?`<div class="flex justify-between items-center bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] p-4 rounded-2xl border border-[var(--color-primary)]/30 shadow-sm min-w-0"><div class="flex items-center gap-3.5 min-w-0"><div class="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div><div class="min-w-0"><p class="text-sm font-bold text-[var(--color-primary)] truncate">${f(De.name)}</p><p class="text-[11px] text-[var(--color-primary)] font-bold mt-1"><i class="fa-solid fa-star mr-1"></i>Tukar ${De.pointsCost} Poin (Gratis)</p></div></div><button type="button" onclick="if(typeof deselectReward==='function') deselectReward(); rPay();" class="text-[10px] font-bold text-rose-500 uppercase shrink-0 ml-3">Batal</button></div>`:"")),c.note?(re("payment-note-text",`"${f(c.note)}"`),xe("payment-note-preview")):I("payment-note-preview"),we("dynamic-banks-container",b.banks?.length?b.banks.map(u=>`<div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Bank ${f(u.bankName)}</p><p class="text-lg font-bold text-[var(--color-primary)] tracking-wide">${f(u.bankAccount)}</p><p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1.5">a.n <span class="font-bold text-slate-700 dark:text-white">${f(u.bankOwner)}</span></p></div>`).join(""):'<div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 p-4 rounded-2xl text-center"><p class="text-sm text-rose-500 dark:text-rose-400 font-bold">Rekening belum diatur.</p></div>');const B=l("payment-option-cashier"),U=l("payment-option-cod");if(B&&U){if(c.deliveryMethod==="pickup"){if(xe("payment-option-cashier"),I("payment-option-cod"),(document.querySelector('input[name="payment"]:checked')||{}).value==="cod"){const u=document.querySelector('input[value="cashier"]');u&&(u.checked=!0)}}else{I("payment-option-cashier"),xe("payment-option-cod");const u=(document.querySelector('input[name="payment"]:checked')||{}).value;if(u==="cashier"||!u){const F=document.querySelector('input[value="cod"]');F&&(F.checked=!0)}}typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()}const C=l("tnc-checkbox");C&&(C.checked=!1,zt())},tr=async()=>{if(!l("tnc-checkbox").checked||ft)return;if(window.isAdm){typeof window.showToast=="function"&&window.showToast("Sesi Pengelola Aktif. Silakan keluar akun untuk membuat pesanan online.");return}const e=ot("freshmart_last_order");if(e&&Date.now()-parseInt(e)<6e4){typeof window.showToast=="function"&&window.showToast("Pesanan sebelumnya sedang kami proses. Mohon beri jeda 1 menit sebelum memesan kembali.");return}const t=typeof window.getEffP=="function"?window.getEffP:r=>r.price||0,a=typeof window.getEffHpp=="function"?window.getEffHpp:()=>0,s=typeof window.getEffPoin=="function"?window.getEffPoin:()=>0;let o=!1;if(H.forEach(r=>{const i=b.products.find(n=>n.id===r.id);if(!i)return;const d=r.variantName?((i.variants||[]).find(n=>n.name===r.variantName)||{}).price??i.price:i.price;d!==void 0&&Math.abs(r.price-d)>1&&(r.price=d,o=!0),r.poin=s(r)}),o){Qe("freshmart_cart",JSON.stringify(H)),typeof window.renderCart=="function"&&window.renderCart(),Jt(),typeof window.showToast=="function"&&window.showToast("Katalog harga telah diperbarui. Mohon periksa kembali rincian belanja Anda.");return}fe(!0),Pe("Memproses Pesanan Anda...");try{const r=H.reduce((x,k)=>x+(parseFloat(t(k))||0)*(parseFloat(k.qty)||0),0);let i=0,d=0,n=0;c.deliveryMethod==="delivery"&&(i=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(b.store.costPerKm)||0)/500)*500);const p=b.store.useStock===!0||b.store.useStock==="true";if(p)for(const x of H){const k=b.products.find($=>$.id===x.id);if(!k||!!(k.poTime&&String(k.poTime).trim()))continue;const D=parseFloat(x.qty)||0;if(x.variantName){const $=(k.variants||[]).find(pe=>pe.name===x.variantName),j=$?$.stock!=null&&$.stock!==""?$.stock:$.stok!=null&&$.stok!==""?$.stok:null:null,Y=j!=null&&!isNaN(parseFloat(j))?parseFloat(j):0;if(Y<D){fe(!1),de(),typeof window.showToast=="function"&&window.showToast(`Persediaan ${x.name} (${x.variantName}) tidak mencukupi (tersisa ${Y} unit).`);return}}else{const $=k.stock!=null&&k.stock!==""?k.stock:k.stok!=null&&k.stok!==""?k.stok:null,j=$!=null&&!isNaN(parseFloat($))?parseFloat($):0;if(j<D){fe(!1),de(),typeof window.showToast=="function"&&window.showToast(`Persediaan ${x.name} tidak mencukupi (tersisa ${j} unit).`);return}}}if(y){let x=r;if(y.targetProduct&&y.targetProduct!==""){const k=parseInt(y.targetProduct);x=H.filter(D=>D.id===k).reduce((D,$)=>D+(parseFloat(t($))||0)*(parseFloat($.qty)||0),0)}if(y.minPurchase&&parseFloat(y.minPurchase)>0&&r<parseFloat(y.minPurchase))Me(null);else if(y.targetProduct&&y.targetProduct!==""&&x===0)Me(null);else if(y.type&&y.type.includes("shipping")&&c.deliveryMethod!=="delivery")Me(null);else if(y.type==="shipping_free")d=i;else if(y.type==="shipping_flat")d=parseFloat(y.value)||0;else if(y.type==="percent"){let k=x*((parseFloat(y.value)||0)/100);y.maxDiscount&&parseFloat(y.maxDiscount)>0&&(k=Math.min(k,parseFloat(y.maxDiscount))),n=k}else n=parseFloat(y.value)||0,n=Math.min(n,x)}const w=(b.store.freeShippingMinSpendEnabled===!0||b.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(b.store.freeShippingMinSpendAmount)||0)>0&&r>=(parseFloat(b.store.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery";w&&(d=i),d=Math.min(d,i),n=Math.min(n,r);const P=Math.max(0,r-n+(i-d)),S=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(P),B=S.ppnAmount,U=S.dppAmount,C=P+S.grandTotalAdd,u=(document.querySelector('input[name="payment"]:checked')||{}).value,F=parseFloat(document.getElementById("paylater-dp-input")?.value)||0,Z=u==="transfer"||u==="qris"||u==="tempo"||u==="paylater"&&F>0,q=window.buktiGDriveUploaded&&window.buktiPaymentUrl&&!window.buktiPaymentUrl.startsWith("data:");if(Z&&!q){if(fe(!1),de(),!window.buktiPaymentFile){typeof window.showToast=="function"&&window.showToast("Mohon lampirkan foto struk / bukti pembayaran terlebih dahulu.");return}typeof window.showToast=="function"&&window.showToast("Sedang menyelesaikan unggahan bukti transaksi. Mohon tunggu...");return}const O="ORD-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase();if(window.buktiPaymentFile&&!window.buktiGDriveUploaded)try{Pe("Mengunggah Bukti Pembayaran...");const x=await window.uploadBuktiToFirebase(window.buktiPaymentFile,O);if(x&&!x.startsWith("data:"))window.buktiPaymentUrl=x,window.buktiGDriveUploaded=!0;else{fe(!1),de(),typeof window.showToast=="function"&&window.showToast("Gagal mengunggah berkas bukti. Silakan pilih kembali foto bukti transfer Anda.");return}Pe("Memproses Pesanan Anda...")}catch{fe(!1),de(),typeof window.showToast=="function"&&window.showToast("Koneksi unggah terganggu. Silakan periksa jaringan internet dan coba kembali.");return}const m={orderId:O,timestamp:je.firestore.FieldValue.serverTimestamp(),dateString:new Date().toISOString(),customer:c,isDropPoint:!!(c.dropPoint&&c.dropPoint.lat&&c.dropPoint.name),dropPoint:c.dropPoint&&c.dropPoint.lat&&c.dropPoint.name?{...c.dropPoint}:null,items:H.map(x=>({...x,qty:parseFloat(x.qty),effectivePrice:t(x),poTime:x.poTime||"",hpp:a(x),poin:s(x)})),payment:{method:u,subtotal:r,shippingCost:i,shippingDiscount:d,productDiscount:n,ppnAmount:B,dppAmount:U,ppnRate:S.ppnEnabled?S.ppnRate:0,ppnType:S.ppnEnabled?S.ppnType:"exclusive",ppnEnabled:!!S.ppnEnabled,ppnShowZero:!!S.ppnShowZero,ppnLabel:S.ppnLabel||"",taxNpwp:b.store?.taxNpwp||b.taxSettings?.npwp||"",grandTotal:C,isFreeShippingPromo:w||!1},status:"Baru",buktiPayment:window.buktiPaymentUrl||null};if(u==="tempo"){if(!c.wa){fe(!1),de(),typeof window.showToast=="function"&&window.showToast("Pembayaran Cash Tempo hanya untuk Member Resmi terdaftar!");return}const x=document.getElementById("tempo-dp-input");let k=x&&parseFloat(x.value)||0;k>C&&(k=C),m.payment.dp=k,m.payment.tempoDp=k,m.payment.tempoBalance=Math.max(0,C-k),m.payment.tempoDueDate=Date.now()+30*24*60*60*1e3,m.payment.paymentStatus=C-k<=0?"lunas":"hutang"}if(u==="paylater"){if(!c.wa||!R||!(R.paylaterActive===!0||R.paylaterActive==="true")){fe(!1),de(),typeof window.showToast=="function"&&window.showToast("Fitur Putri PayLater belum aktif untuk nomor Anda!");return}const x=parseFloat(R.paylaterLimit)||0,k=Math.max(0,parseFloat(R.paylaterUsed)||0),ie=Math.max(0,x-k),D=document.getElementById("paylater-dp-input");let $=D&&parseFloat(D.value)||0;if(C>ie&&$<C-ie){fe(!1),de(),typeof window.showToast=="function"&&window.showToast("Limit PayLater tidak cukup! Wajib bayar DP minimal "+g(C-ie));return}const j=Math.min(ie,Math.max(0,C-$));m.payment.method="tempo",m.payment.subMethod="paylater",m.payment.isPaylater=!0,m.payment.paylaterUsed=j,m.payment.dp=$,m.payment.tempoDp=$;const Y=R?.paylaterDueDay||5,pe=window.selectedCheckoutPaylaterTenor||window.currentPaylaterBreakdown?.tenorKey||"30d",be=Ht(),ee=vs(j,pe,{...be,dueDay:Y}),te=ee.months,ke=ee.totalAdminFee,X=ee.totalServiceFee,ne=ee.totalPerMonth,K=ee.schedule;m.payment.paylaterTenor=pe,m.payment.paylaterMonths=te,m.payment.paylaterAdminFee=ke,m.payment.paylaterServiceFee=X,m.payment.paylaterMonthlyInstallment=ne,m.payment.paylaterSchedule=K;const le=ee.grandTotal;m.payment.tempoBalance=le;const M=K.length>0?K[K.length-1].dueDate:Date.now()+te*30*24*60*60*1e3;if(m.payment.tempoDueDate=M,m.payment.paymentStatus=le<=0?"lunas":"hutang",m.isTempo=!0,m.paylaterLimitTracked=!1,j>0){if(R){R.paylaterUsed=Math.max(0,parseFloat(R.paylaterUsed)||0)+j;try{localStorage.setItem("freshmart_current_member",JSON.stringify(R))}catch{}}const z=(R?.phone||c.wa||"").replace(/\D/g,""),$e=z.startsWith("0")?"62"+z.slice(1):z;try{await J.collection("freshmart").doc("cms_data").collection("customers").doc($e).update({paylaterUsed:je.firestore.FieldValue.increment(j)}),m.paylaterLimitTracked=!0}catch(me){console.warn("[PayLater] Gagal update pemakaian limit di Firestore:",me.code||me.message||me)}}}const ge=J.collection("freshmart_orders").doc(O),E=typeof window.calculateCartPoints=="function"?window.calculateCartPoints(H,b.store):{totalPoints:0,directPoints:0,spendPoints:0},oe=E.totalPoints;m.pointsEarned=oe,m.pointsBreakdown={direct:E.directPoints,spend:E.spendPoints};const ae=J.collection("freshmart").doc("cms_data"),se=(R?.phone||c.wa||"").replace(/\D/g,""),T=se?se.startsWith("0")?"62"+se.slice(1):se:null,ue=T?ae.collection("customers").doc(T):null,W=!!De;let N=null;if(p){const x={};H.forEach(D=>{const $=D.id!=null?D.id.toString():null;if(!$)return;x[$]||(x[$]={main:0,variants:{}});const j=parseFloat(D.unitMultiplier)||1,Y=(parseFloat(D.qty)||0)*j;D.variantName?x[$].variants[D.variantName]=(x[$].variants[D.variantName]||0)+Y:x[$].main+=Y});const k=Object.keys(x),ie=k.map(D=>J.collection("freshmart").doc("cms_data").collection("products").doc(D));await J.runTransaction(async D=>{const $=await Promise.all(ie.map(X=>D.get(X))),j=ue?await D.get(ue):null,Y=!!(j&&j.exists),pe=Y&&W?J.collection("freshmart").doc("cms_data").collection("rewards").doc(De.id.toString()):null,be=pe?await D.get(pe):null,ee=[];if($.forEach((X,ne)=>{if(!X.exists)return;const K=X.data(),le=x[k[ne]];if(le.main>0){const M=parseFloat(K.stock!==void 0?K.stock:0);M<le.main&&ee.push(`${K.name} (sisa ${M})`)}Object.keys(le.variants).forEach(M=>{const z=(K.variants||[]).find(me=>me.name===M),$e=parseFloat(z&&z.stock!==void 0?z.stock:0);$e<le.variants[M]&&ee.push(`${K.name} (${M}, sisa ${$e})`)})}),ee.length)throw new Error("STOK_TIDAK_CUKUP: "+ee.join(", "));let te=null,ke=null;if(Y){const X=parseFloat(j.data().points)||0;let ne=X;if(W){if(!be||!be.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const K=be.data();if(X<(parseFloat(K.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(K.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");te=(parseFloat(K.stock)||0)-1,ne-=parseFloat(K.pointsCost)||0,m.claimedReward={id:K.id,name:K.name,pointsCost:parseFloat(K.pointsCost)||0,status:"pending",note:""}}ne+=oe,ke=ne,m.pointsEarned=oe,m.customerPhone=c.wa,m.finalMemberPoints=ke,m.customerType="Member"}else{if(u==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(W)throw new Error("MEMBER_TIDAK_DITEMUKAN");m.pointsEarned=0,m.pointsBreakdown={direct:0,spend:0},m.finalMemberPoints=null,m.customerType="Pelanggan Umum"}if($.forEach((X,ne)=>{if(!X.exists)return;const K=k[ne],le=x[K],M=JSON.parse(JSON.stringify(X.data())),z={};le.main>0&&(Lt(M,le.main),z.stock=M.stock,M.storeStock!==void 0&&(z.storeStock=M.storeStock),M.warehouseStock!==void 0&&(z.warehouseStock=M.warehouseStock),Array.isArray(M.stockBatches)&&(z.stockBatches=M.stockBatches),M.hpp&&(z.hpp=M.hpp),M.stock===0&&(M.isActive="false",z.isActive="false"),M.totalSold=(parseFloat(M.totalSold)||0)+le.main,z.totalSold=M.totalSold),Object.keys(le.variants).length>0&&M.variants&&(Object.keys(le.variants).forEach(me=>{const Mt=le.variants[me];Lt(M,Mt,me);const Ke=(M.variants||[]).findIndex(sa=>sa.name===me);Ke>-1&&(M.variants[Ke].stock===0&&(M.variants[Ke].isActive=!1),M.variants[Ke].totalSold=(parseFloat(M.variants[Ke].totalSold)||0)+Mt)}),z.variants=M.variants,z.stock=M.stock,M.storeStock!==void 0&&(z.storeStock=M.storeStock),M.warehouseStock!==void 0&&(z.warehouseStock=M.warehouseStock),Array.isArray(M.stockBatches)&&(z.stockBatches=M.stockBatches));const $e=b.products.findIndex(me=>me.id.toString()===K);$e>-1&&(b.products[$e]=M),D.update(ie[ne],z)}),D.set(ge,m),Y&&ue&&ke!==null){const X=j.data().name||c.name||"Pelanggan Setia";m.customer&&(m.customer.name=X);const ne={points:ke,name:X,lastOrderAt:Date.now()};D.set(ue,ne,{merge:!0}),N=ke}te!==null&&D.set(pe,{stock:te},{merge:!0}),D.update(ae,{lastUpdate:je.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:k})}),b.lastUpdate=(parseInt(ot("freshmart_last_update"))||b.lastUpdate||0)+1,Qe("freshmart_last_update",b.lastUpdate.toString()),Qe("freshmart_products",JSON.stringify(b.products))}else if(ue)await J.runTransaction(async x=>{const k=await x.get(ue),ie=k.exists,D=ie&&W?J.collection("freshmart").doc("cms_data").collection("rewards").doc(De.id.toString()):null,$=D?await x.get(D):null;let j=null,Y=null;if(ie){const pe=parseFloat(k.data().points)||0;let be=pe;if(W){if(!$||!$.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const te=$.data();if(pe<(parseFloat(te.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(te.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");j=(parseFloat(te.stock)||0)-1,be-=parseFloat(te.pointsCost)||0,m.claimedReward={id:te.id,name:te.name,pointsCost:parseFloat(te.pointsCost)||0,status:"pending",note:""}}be+=oe,Y=be,m.pointsEarned=oe,m.customerPhone=c.wa,m.finalMemberPoints=Y,m.customerType="Member";const ee=k.data().name||c.name||"Pelanggan Setia";m.customer&&(m.customer.name=ee),x.set(ue,{points:Y,name:ee,lastOrderAt:Date.now()},{merge:!0}),N=Y,j!==null&&x.set(D,{stock:j},{merge:!0})}else{if(u==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(W)throw new Error("MEMBER_TIDAK_DITEMUKAN");m.pointsEarned=0,m.pointsBreakdown={direct:0,spend:0},m.finalMemberPoints=null,m.customerType="Pelanggan Umum"}x.set(ge,m)});else{if(m.pointsEarned=0,m.pointsBreakdown={direct:0,spend:0},m.finalMemberPoints=null,m.customerType="Pelanggan Umum",u==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");await ge.set(m)}let he=!1;if((m.items||[]).forEach(x=>{typeof window.recordFlashSaleSale=="function"&&window.recordFlashSaleSale(x.id,x.variantName,x.qty)&&(he=!0)}),he&&Array.isArray(b.flashSales))try{await J.collection("freshmart").doc("cms_data").update({flashSales:b.flashSales,lastUpdate:je.firestore.FieldValue.increment(1)})}catch(x){console.warn("[Checkout] Gagal update kuota Flash Sale:",x)}const ye={orderId:O,date:m.dateString||new Date().toISOString(),dateString:m.dateString||new Date().toISOString(),total:C,itemCount:H.reduce((x,k)=>x+parseFloat(k.qty),0),status:"Baru",pointsEarned:m.pointsEarned||0,claimedReward:m.claimedReward||null,finalMemberPoints:N,customerType:m.customerType||"Pelanggan Umum",customer:m.customer||c,items:m.items||[],payment:m.payment||{},isTempo:!!m.isTempo};G.unshift(ye),tt(G),window.currentCustomerOrder=m,window.lastPrintedOrder=m;try{localStorage.setItem("freshmart_my_orders",JSON.stringify(G)),localStorage.setItem("freshmart_last_order",Date.now().toString())}catch{}if(typeof analytics<"u"&&analytics.logEvent("purchase",{transaction_id:O,value:C,currency:"IDR"}),c.wa&&N!==null){const x={id:c.wa,phone:c.wa,name:c.name||"Pelanggan Setia",points:N,paylaterActive:R?R.paylaterActive===!0||R.paylaterActive==="true":!1,paylaterLimit:R&&parseFloat(R.paylaterLimit)||0,paylaterUsed:R?Math.max(0,parseFloat(R.paylaterUsed)||0):0,paylaterDueDay:R&&R.paylaterDueDay||5};it(x);try{localStorage.setItem("freshmart_current_member",JSON.stringify(x)),localStorage.setItem("freshmart_member_wa",c.wa)}catch{}typeof window.invalidateMemberCache=="function"&&window.invalidateMemberCache(c.wa)}else{it(null);try{localStorage.removeItem("freshmart_current_member")}catch{}}m.claimedReward&&N!==null?typeof window.showToast=="function"&&window.showToast(`Hadiah eksklusif "${m.claimedReward.name}" berhasil ditukarkan! Sisa poin reward Anda: ${N}`):N!==null&&oe>0?typeof window.showToast=="function"&&window.showToast(`Pesanan Anda berhasil dikonfirmasi! (+${oe} Poin Member terkumpul)`):typeof window.showToast=="function"&&window.showToast("Pesanan Anda berhasil dikonfirmasi dan siap diproses!"),setTimeout(()=>{Ot([]),Ie("cust-name",""),Ie("cust-address",""),Ie("cust-maps-input",""),Ie("cust-note",""),Ie("cust-wa",""),window.buktiPaymentUrl=null,window.buktiPaymentFile=null,window.buktiGDriveUploaded=!1;const x=l("bukti-preview-wrap"),k=l("bukti-placeholder");x&&x.classList.add("hidden"),k&&k.classList.remove("hidden"),I("bukti-uploading"),I("bukti-success"),I("bukti-gdrive-error");const ie=l("bukti-file-input");ie&&(ie.value=""),jt({name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:"",dropPoint:null}),Me(null),Oe(null);const D=l("toggle-droppoint"),$=l("droppoint-form");D&&(D.checked=!1),$&&$.classList.add("hidden");const j=l("dp-location-status");j&&j.classList.add("hidden");const Y=l("payment-droppoint-info");Y&&Y.classList.add("hidden");const pe=l("dp-receiver-name");pe&&(pe.value="");const be=l("dp-receiver-wa");be&&(be.value="");const ee=l("dp-address");ee&&(ee.value="");const te=l("dp-maps-input");te&&(te.value="");const ke=l("btn-dp-location");ke&&(ke.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan Titik GPS Lokasi Proyek</span>');const X=l("member-status-banner");X&&I(X),I("payment-option-tempo"),l("voucher-input")&&(l("voucher-input").value=""),I("voucher-msg-container"),I("location-status"),l("btn-location")&&xe("btn-location");const ne=document.querySelector('input[name="delivery-method"][value="delivery"]');ne&&(ne.checked=!0,ht());const K=document.querySelector('input[name="payment"][value="transfer"]');K&&(K.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()),typeof window.updCart=="function"&&window.updCart(),typeof window.renderCart=="function"&&window.renderCart();try{window.history.replaceState({view:"view-catalog"},"",window.location.pathname)}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog",!0),typeof window.showToast=="function"&&window.showToast("Pesanan Anda Berhasil Dibuat!")},2e3)}catch(r){const i=r.message||"Error";i.startsWith("STOK_TIDAK_CUKUP:")?typeof window.showToast=="function"&&window.showToast("Ketersediaan stok baru saja diperbarui: "+i.replace("STOK_TIDAK_CUKUP: ","")):i==="TEMPO_KHUSUS_MEMBER"?typeof window.showToast=="function"&&window.showToast("Fasilitas Cash Tempo khusus untuk Rekanan & Member VIP resmi terdaftar."):i==="POIN_TIDAK_CUKUP"?(typeof window.showToast=="function"&&window.showToast("Poin reward Anda belum mencukupi untuk penukaran hadiah ini."),Oe(null)):i==="STOK_HADIAH_HABIS"?(typeof window.showToast=="function"&&window.showToast("Persediaan hadiah yang dipilih baru saja habis. Silakan pilih hadiah lainnya."),Oe(null)):i==="HADIAH_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Hadiah yang dipilih sudah tidak aktif. Silakan pilih hadiah pengganti."),Oe(null)):i==="MEMBER_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Data member tidak terverifikasi. Penukaran hadiah dibatalkan."),Oe(null)):typeof window.showToast=="function"&&window.showToast(r.code==="resource-exhausted"?"Layanan server sedang padat. Mohon coba sesaat lagi.":"Gagal memproses pesanan: "+i)}finally{fe(!1),de()}};window.validateAndGoToPayment=er;window.toggleDeliveryMethod=ht;window.toggleDropPoint=Zs;window.getDPLocation=Ys;window.handleDPMapsInput=Vt;window.pasteDPMapsInput=Xs;window.toggleOrderButton=zt;window.rPay=Jt;window.processOrder=tr;window.getLocation=()=>{if(!navigator.geolocation)return A("GPS tidak didukung");l("btn-location").innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i>',navigator.geolocation.getCurrentPosition(e=>{c.lat=e.coords.latitude,c.lng=e.coords.longitude,I("btn-location"),xe("location-status"),l("location-status").classList.add("flex"),A("GPS Didapatkan")},e=>{l("btn-location").innerHTML='<i class="fa-solid fa-location-crosshairs text-[var(--color-primary)]"></i> Set GPS Maps',A("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})};window.handleCustomerMapsInput=e=>{const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){c.lat=parseFloat(a.lat),c.lng=parseFloat(a.lng),I("btn-location"),xe("location-status");const s=l("location-status");return s&&(s.classList.add("flex"),s.innerHTML=`
                <i class="fa-solid fa-circle-check shrink-0 text-lg primary-text"></i>
                <div class="min-w-0">
                    <span class="text-[10px] font-bold uppercase leading-tight tracking-wide primary-text block">Koordinat Berhasil Disematkan!</span>
                    <span class="text-[9px] text-slate-500 dark:text-slate-400 font-mono">${a.lat}, ${a.lng}</span>
                </div>
            `),A("Titik lokasi Maps pembeli berhasil disematkan!"),typeof window.rPay=="function"&&window.rPay(),!0}return!1};window.pasteCustomerMapsInput=async()=>{const e=l("cust-maps-input");if(e){try{if(navigator.clipboard&&navigator.clipboard.readText){const t=await navigator.clipboard.readText();if(t){e.value=t,window.handleCustomerMapsInput(t)||A("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Maps");return}}}catch{}e.focus(),A("Silakan tekan Ctrl+V atau tahan untuk menempel")}};const ar=()=>{const e=b.store.isDeliveryEnabled!==!1,t=b.store.isPickupEnabled!==!1;ce("delivery-option-container","hidden",!e),ce("pickup-option-container","hidden",!t),ce("no-delivery-warning","hidden",e||t),ce("delivery-methods-grid","hidden",!(e||t));const a=l("btn-checkout-next");if(a)if(e||t){a.removeAttribute("disabled"),a.classList.remove("opacity-50");const o=(c.deliveryMethod||"delivery")==="pickup"&&t?"pickup":e?"delivery":"pickup",r=document.querySelector(`input[value="${o}"]`);r&&(r.checked=!0)}else a.setAttribute("disabled","true"),a.classList.add("opacity-50");ht()};window.rChck=ar;window.buktiPaymentUrl=null;window.buktiPaymentFile=null;window.buktiGDriveUploaded=!1;window.compressImageForUpload=(e,t=1600,a=.82)=>new Promise(s=>{const o=new FileReader;o.readAsDataURL(e),o.onload=r=>{const i=new Image;i.onload=()=>{let{width:d,height:n}=i;(d>t||n>t)&&(d>n?(n=Math.round(n*t/d),d=t):(d=Math.round(d*t/n),n=t));const p=document.createElement("canvas");p.width=d,p.height=n,p.getContext("2d").drawImage(i,0,0,d,n),p.toBlob(w=>{if(!w)return s(e);s(new File([w],e.name,{type:"image/jpeg",lastModified:Date.now()}))},"image/jpeg",a)},i.onerror=()=>s(e),i.src=r.target.result},o.onerror=()=>s(e)});window._doSingleGDriveUpload=async(e,t)=>{const a=new FileReader;return new Promise(s=>{a.readAsDataURL(e),a.onload=async()=>{try{const o=a.result.split(",")[1],r=(e.name||"bukti.jpg").replace(/[^a-zA-Z0-9.]/g,"_"),i={name:"BUKTI_"+t+"_"+Date.now()+"_"+r,mimeType:e.type||"image/jpeg",data:o,token:Gs},d=await fetch(Wt,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"});if(!d.ok)return console.warn("GDrive upload HTTP error:",d.status),s(null);const n=await d.text();let p;try{p=JSON.parse(n)}catch{return console.warn("GDrive response parse error"),s(null)}p&&p.status==="success"&&p.url?s(bt(p.url)):(console.warn("GDrive upload gagal:",p&&p.message),s(null))}catch(o){console.warn("GDrive upload exception:",o),s(null)}},a.onerror=()=>s(null)})};window.uploadBuktiToGDrive=async(e,t)=>{if(!e)return null;const a=l("bukti-uploading-text");a&&(a.textContent="Mengupload bukti ke Google Drive...");try{return await qs(e,"BUKTI_"+(t||Date.now()))}catch(s){return console.warn("Gagal upload bukti ke GDrive via GAS:",s),null}};window.handleBuktiUpload=async e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/"))return A("Hanya file gambar yang diizinkan!");if(t.size>5*1024*1024)return A("Ukuran gambar max 5MB!");window.buktiPaymentFile=t,window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const a=new FileReader;a.onload=i=>{const d=l("bukti-preview-img"),n=l("bukti-preview-wrap"),p=l("bukti-placeholder");d&&(d.src=i.target.result),n&&n.classList.remove("hidden"),p&&p.classList.add("hidden")},a.readAsDataURL(t),I("bukti-success"),I("bukti-gdrive-error");const s=l("bukti-uploading");s&&(s.classList.remove("hidden"),s.style.display="flex");const o="TEMP_"+Date.now().toString(36).toUpperCase(),r=await window.uploadBuktiToGDrive(t,o);if(I("bukti-uploading"),r){window.buktiPaymentUrl=r,window.buktiGDriveUploaded=!0;const i=l("bukti-success"),d=l("bukti-success-text"),n=l("bukti-storage-info");d&&(d.textContent="Bukti berhasil disimpan!"),n&&(n.textContent="(tersimpan di Google Drive)"),i&&(i.classList.remove("hidden"),i.style.display="flex"),I("bukti-gdrive-error")}else{window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const i=l("bukti-gdrive-error");i&&(i.classList.remove("hidden"),i.style.display="flex"),I("bukti-success"),A("Upload ke Google Drive gagal. Coba lagi!")}};window.retryBuktiUpload=async()=>{if(!window.buktiPaymentFile)return A("Pilih gambar terlebih dahulu!");I("bukti-gdrive-error"),I("bukti-success");const e=l("bukti-uploading");e&&(e.classList.remove("hidden"),e.style.display="flex");const t="RETRY_"+Date.now().toString(36).toUpperCase(),a=await window.uploadBuktiToGDrive(window.buktiPaymentFile,t);if(I("bukti-uploading"),a){window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0;const s=l("bukti-success"),o=l("bukti-success-text"),r=l("bukti-storage-info");o&&(o.textContent="Bukti berhasil disimpan!"),r&&(r.textContent="(tersimpan di Google Drive)"),s&&(s.classList.remove("hidden"),s.style.display="flex"),A("Upload berhasil!")}else{const s=l("bukti-gdrive-error");s&&(s.classList.remove("hidden"),s.style.display="flex"),A("Masih gagal. Periksa koneksi internet Anda.")}};window.uploadBuktiToFirebase=async(e,t)=>{if(window.buktiGDriveUploaded&&window.buktiPaymentUrl)return window.buktiPaymentUrl;if(!e)return null;const a=await window.uploadBuktiToGDrive(e,t);return a&&(window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0),a};window.togglePaymentDetails=()=>{const e=(document.querySelector('input[name="payment"]:checked')||{}).value;if(ce("detail-transfer","hidden",e!=="transfer"),ce("detail-qris","hidden",e!=="qris"),ce("detail-cashier","hidden",e!=="cashier"),ce("detail-cod","hidden",e!=="cod"),ce("detail-tempo","hidden",e!=="tempo"),ce("detail-paylater","hidden",e!=="paylater"),e==="tempo"&&window.calculateTempoBalance(),e==="paylater"&&window.calculatePaylaterBalance?.(),e==="qris"){const s=l("dyn-qris-img");if(s){const o=b.payment?.qrisUrl||b.store?.qrisUrl||b.payment?.qris||b.store?.qris||b.qrisUrl||"";o&&(s.src=bt(o))}}const t=parseFloat(document.getElementById("paylater-dp-input")?.value)||0,a=e==="transfer"||e==="qris"||e==="tempo"||e==="paylater"&&t>0;ce("bukti-payment-section","hidden",!a)};window.selectedCheckoutPaylaterTenor=window.selectedCheckoutPaylaterTenor||"30d";window.selectCheckoutPaylaterTenor=e=>{window.selectedCheckoutPaylaterTenor=e,typeof window.calculatePaylaterBalance=="function"&&window.calculatePaylaterBalance()};window.calculatePaylaterBalance=()=>{const e=R?Math.max(0,parseFloat(R.paylaterLimit)||0):0,t=R?Math.max(0,parseFloat(R.paylaterUsed)||0):0,a=Math.max(0,e-t),s=R?.paylaterDueDay||5,o=document.getElementById("paylater-limit-display"),r=document.getElementById("paylater-due-display"),i=document.getElementById("paylater-status-box"),d=document.getElementById("paylater-excess-dp-container"),n=document.getElementById("paylater-dp-input"),p=document.getElementById("paylater-tenor-chips-grid"),w=document.getElementById("paylater-tenor-breakdown-box");o&&(o.textContent=g(a)),r&&(r.textContent="Tgl "+s+" Tiap Bulan");let P=H.reduce((W,N)=>W+(parseFloat(getEffP(N))||0)*(parseFloat(N.qty)||0),0),v=0,S=0,B=0;if(c.deliveryMethod==="delivery"&&(v=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(b.store.costPerKm)||0)/500)*500),typeof vouch<"u"&&vouch){let W=P;if(vouch.targetProduct&&vouch.targetProduct!==""){const N=parseInt(vouch.targetProduct);W=H.filter(ye=>ye.id===N).reduce((ye,x)=>ye+(parseFloat(getEffP(x))||0)*(parseFloat(x.qty)||0),0)}if(vouch.type==="shipping_free")B=v;else if(vouch.type==="shipping_flat")B=parseFloat(vouch.value)||0;else if(vouch.type==="percent"){let N=W*((parseFloat(vouch.value)||0)/100);vouch.maxDiscount&&parseFloat(vouch.maxDiscount)>0&&(N=Math.min(N,parseFloat(vouch.maxDiscount))),S=N}else S=parseFloat(vouch.value)||0,S=Math.min(S,W)}(b.store?.freeShippingMinSpendEnabled===!0||b.store?.freeShippingMinSpendEnabled==="true")&&(parseFloat(b.store?.freeShippingMinSpendAmount)||0)>0&&P>=(parseFloat(b.store?.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery"&&(B=v),B=Math.min(B,v),S=Math.min(S,P);let C=Math.max(0,P-S),u=Math.max(0,v-B);const F=typeof window.calcTaxDetails=="function"?window.calcTaxDetails(C+u):{grandTotalAdd:0};let Z=0;window.useMemberPoints&&R&&(Z=Math.min(C+u+F.grandTotalAdd,parseFloat(R.points)||0));let q=Math.max(0,C+u+(F.grandTotalAdd||0)-Z),O=0;const m=q>a;if(m){const W=q-a;O=parseFloat(n?.value)||0,O<W&&(O=W,n&&(n.value=O)),d&&d.classList.remove("hidden")}else d&&d.classList.add("hidden"),n&&(n.value=0),O=0;const ge=Math.min(a,Math.max(0,q-O)),E=Ht(),ae=Ps(ge>0?ge:q,{...E,dueDay:s}).results;let se=window.selectedCheckoutPaylaterTenor||"30d";(!ae[se]||!ae[se].enabled)&&(se=Object.keys(ae).find(N=>ae[N].enabled)||"30d",window.selectedCheckoutPaylaterTenor=se);const T=ae[se];if(window.currentPaylaterBreakdown=T,p){const W=["30d","2m","3m"];p.innerHTML=W.map(N=>{const he=ae[N];if(!he||!he.enabled)return"";const ye=N===se;return`
                <button type="button" onclick="window.selectCheckoutPaylaterTenor('${N}')" 
                        class="p-2 sm:p-2.5 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 min-h-[46px] select-none touch-manipulation active:scale-95 ${ye?"border-2 text-[var(--color-primary)] shadow-sm":"border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600"}"
                        style="${ye?"border-color: var(--color-primary); background: rgba(var(--color-primary-rgb), 0.1); box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.15);":""}">
                    <span class="text-[9.5px] font-black uppercase tracking-wider block">${f(he.shortLabel)}</span>
                    <span class="text-[11px] sm:text-xs font-black block" ${ye?'style="color: var(--color-primary);"':""}>${g(he.totalPerMonth)}<span class="text-[8px] font-normal text-slate-400">/bln</span></span>
                </button>
            `}).filter(Boolean).join("")}if(w&&T&&(w.innerHTML=`
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
                    <span class="font-bold text-slate-800 dark:text-slate-200">${g(T.pokokPerMonth)} / bln</span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span class="flex items-center gap-1">Biaya Admin ${T.adminFeeType==="percent"&&T.adminFeeValue>0?`(${T.adminFeeValue}%)`:""}</span>
                    <span class="font-bold ${T.adminFeePerMonth===0?"text-emerald-600 dark:text-emerald-400":"text-slate-800 dark:text-slate-200"}">
                        ${T.adminFeePerMonth===0?"Rp 0 (Gratis)":`${g(T.adminFeePerMonth)} / bln`}
                    </span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span class="flex items-center gap-1">Biaya Penanganan ${T.serviceFeeType==="percent"&&T.serviceFeeValue>0?`(${T.serviceFeeValue}%)`:""}</span>
                    <span class="font-bold ${T.serviceFeePerMonth===0?"text-emerald-600 dark:text-emerald-400":"text-slate-800 dark:text-slate-200"}">
                        ${T.serviceFeePerMonth===0?"Rp 0 (Gratis)":`${g(T.serviceFeePerMonth)} / bln`}
                    </span>
                </div>
                <div class="pt-2 mt-1.5 border-t border-dashed border-slate-200 dark:border-slate-700 flex justify-between items-baseline">
                    <span class="text-[11px] font-black uppercase text-slate-800 dark:text-white">Tagihan per Bulan:</span>
                    <span class="text-sm font-black font-mono" style="color: var(--color-primary);">${g(T.totalPerMonth)} <span class="text-[10px] font-bold text-slate-400">/ bulan</span></span>
                </div>
                <div class="flex justify-between items-center text-[10px] text-slate-500 pt-0.5">
                    <span>Total Tagihan Seluruhnya:</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300">${g(T.grandTotal)}</span>
                </div>
            </div>
        `),!m)i&&(i.innerHTML='<div class="flex items-center gap-2 font-extrabold mb-1" style="color: var(--color-primary);"><i class="fa-solid fa-circle-check text-emerald-500 text-sm"></i><span>Limit PayLater Anda Sangat Cukup!</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Total belanja <b>'+g(q)+"</b> otomatis dipotong dari limit PayLater Anda. Anda <b>tidak perlu bayar sekarang</b> dan tanpa uang muka (DP Rp 0). Angsuran dicicil sesuai tenor "+f(T.label)+" ("+g(T.totalPerMonth)+"/bln) mulai tgl "+s+" bulan depan.</p>");else{const W=q-a;i&&(i.innerHTML='<div class="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-extrabold mb-1"><i class="fa-solid fa-triangle-exclamation text-amber-500 text-sm"></i><span>Total Belanja Melebihi Sisa Limit PayLater</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Sisa limit Anda <b>'+g(a)+"</b> akan digunakan maksimal untuk cicilan "+f(T.label)+" ("+g(T.totalPerMonth)+"/bln). Selisih kekurangan sebesar <b>"+g(W)+"</b> wajib dibayar sebagai DP via Transfer/QRIS.</p>")}const ue=(parseFloat(n?.value)||0)>0;ce("bukti-payment-section","hidden",!ue)};window.calculateTempoBalance=()=>{const e=document.getElementById("tempo-dp-input");let t=parseFloat(e?.value)||0;t<0&&(t=0,e&&(e.value=0));let a=H.reduce((B,U)=>B+(parseFloat(getEffP(U))||0)*(parseFloat(U.qty)||0),0),s=0,o=0,r=0;if(c.deliveryMethod==="delivery"&&(s=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(b.store.costPerKm)||0)/500)*500),vouch){let B=a;if(vouch.targetProduct&&vouch.targetProduct!==""){const U=parseInt(vouch.targetProduct);B=H.filter(u=>u.id===U).reduce((u,F)=>u+(parseFloat(getEffP(F))||0)*(parseFloat(F.qty)||0),0)}if(vouch.type==="shipping_free")r=s;else if(vouch.type==="shipping_flat")r=parseFloat(vouch.value)||0;else if(vouch.type==="percent"){let U=B*((parseFloat(vouch.value)||0)/100);vouch.maxDiscount&&parseFloat(vouch.maxDiscount)>0&&(U=Math.min(U,parseFloat(vouch.maxDiscount))),o=U}else o=parseFloat(vouch.value)||0,o=Math.min(o,B)}(b.store.freeShippingMinSpendEnabled===!0||b.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(b.store.freeShippingMinSpendAmount)||0)>0&&a>=(parseFloat(b.store.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery"&&(r=s),r=Math.min(r,s),o=Math.min(o,a);let d=Math.max(0,a-o),n=Math.max(0,s-r);const p=window.calcTaxDetails(d+n);let w=0;window.useMemberPoints&&R&&(w=Math.min(d+n+p.grandTotalAdd,parseFloat(R.points)||0));let P=d+n+p.grandTotalAdd-w;t>P&&(t=P,e&&(e.value=t));let v=P-t;const S=document.getElementById("tempo-balance-display");S&&(S.innerText=g(v))};let qe="paint",Ae="storefront",_={mode:"room",length:4,width:3,height:3,openings:4,ceiling:!0,coats:2,directArea:30,includeSealer:!0},V={length:4,width:3,tileSize:"40x40",wastePercent:10,includeAdhesive:!0,includeGrout:!0},Q={length:6,height:3,sides:1,openings:2,brickType:"hebel10",includeMortar:!0},h={roofType:"spandek",mode:"gable",length:8,width:6,slopeAngle:20,overhang:.6,sheetLength:4,directArea:60,includeRidge:!0,includeFasteners:!0};const Ft={"30x30":{name:"30 x 30 cm",coveragePerBox:1,piecesPerBox:11},"40x40":{name:"40 x 40 cm",coveragePerBox:.96,piecesPerBox:6},"50x50":{name:"50 x 50 cm",coveragePerBox:1,piecesPerBox:4},"60x60":{name:"60 x 60 cm",coveragePerBox:1.44,piecesPerBox:4},"80x80":{name:"80 x 80 cm",coveragePerBox:1.92,piecesPerBox:3}},_e={spandek:{id:"spandek",name:"Atap Spandek Galvalum (Zincalume)",shortName:"Spandek Galvalum",effectiveWidth:.75,standardLengths:[{val:3,label:"3.0 Meter"},{val:4,label:"4.0 Meter"},{val:5,label:"5.0 Meter"},{val:6,label:"6.0 Meter"}],defaultLength:4,fastenerName:"Baut Roofing SDS 12-14x50mm",fastenerPackaging:"Box (100 Pcs)",fastenerBoxSize:100,ridgeUnit:"Batang Nok Spandek (1m)"},seng:{id:"seng",name:"Seng Gelombang BJLS / Galvalum",shortName:"Seng Gelombang",effectiveWidth:.75,standardLengths:[{val:1.5,label:"1.5 Meter (5 Kaki)"},{val:1.8,label:"1.8 Meter (6 Kaki)"},{val:2.1,label:"2.1 Meter (7 Kaki)"},{val:2.4,label:"2.4 Meter (8 Kaki)"},{val:3,label:"3.0 Meter (10 Kaki)"}],defaultLength:2.1,fastenerName:"Paku Payung Seng Galvanis",fastenerPackaging:"Kg (isi ~70 Pcs/kg)",fastenerBoxSize:70,ridgeUnit:"Batang Nok Seng BJLS (1m)"},asbes:{id:"asbes",name:"Asbes Gelombang (Fiber Semen)",shortName:"Asbes Gelombang",effectiveWidth:.95,standardLengths:[{val:1.5,label:"1.5 Meter (5 Kaki)"},{val:1.8,label:"1.8 Meter (6 Kaki)"},{val:2.1,label:"2.1 Meter (7 Kaki)"},{val:2.4,label:"2.4 Meter (8 Kaki)"},{val:3,label:"3.0 Meter (10 Kaki)"}],defaultLength:2.1,fastenerName:"Paku Asbes Khusus Karet",fastenerPackaging:"Pack (isi 50 Pcs)",fastenerBoxSize:50,ridgeUnit:"Pasang Nok Asbes Stel"}},kt=()=>{let e=0,t=0;if(_.mode==="room"){const P=Math.max(0,parseFloat(_.length)||0),v=Math.max(0,parseFloat(_.width)||0),S=Math.max(0,parseFloat(_.height)||0),U=2*(P+v)*S,C=Math.max(0,parseFloat(_.openings)||0);e=Math.max(0,U-C),_.ceiling&&(t=P*v)}else e=Math.max(0,parseFloat(_.directArea)||0);const a=e+t,s=Math.max(1,parseInt(_.coats,10)||2),r=parseFloat((a*s/11).toFixed(2)),i=Math.floor(r/20),d=r%20,n=Math.ceil(d/2.5),p=_.includeSealer?parseFloat((a/12).toFixed(2)):0,w=_.includeSealer?Math.ceil(p/2.5):0;return{totalWallArea:parseFloat(e.toFixed(2)),ceilingArea:parseFloat(t.toFixed(2)),grandArea:parseFloat(a.toFixed(2)),coats:s,totalVolumeLiters:r,pails:i,gallons:n,sealerVolume:p,sealerGallons:w}},yt=()=>{const e=Math.max(0,parseFloat(V.length)||0),t=Math.max(0,parseFloat(V.width)||0),a=e*t,s=Math.max(0,parseFloat(V.wastePercent)||0),o=1+s/100,r=parseFloat((a*o).toFixed(2)),i=Ft[V.tileSize]||Ft["40x40"],d=i.coveragePerBox>0?Math.ceil(r/i.coveragePerBox):0,n=V.includeAdhesive?Math.ceil(r/8):0,p=V.includeGrout?Math.ceil(r/4):0;return{rawArea:parseFloat(a.toFixed(2)),wastePercent:s,totalAreaWithWaste:r,spec:i,totalBoxes:d,adhesiveBags:n,groutBags:p}},vt=()=>{const e=Math.max(0,parseFloat(Q.length)||0),t=Math.max(0,parseFloat(Q.height)||0),a=Math.max(1,parseInt(Q.sides,10)||1),s=e*t*a,o=Math.max(0,parseFloat(Q.openings)||0),r=Math.max(0,parseFloat((s-o).toFixed(2)));let i=0,d=0,n=0,p=0,w=0;return Q.brickType==="hebel10"?(i=Math.ceil(r*8.33),d=parseFloat((r/10).toFixed(2)),n=Math.ceil(r/10)):Q.brickType==="hebel75"?(i=Math.ceil(r*8.33),d=parseFloat((r/13.3).toFixed(2)),n=Math.ceil(r/13)):(i=Math.ceil(r*70),w=Math.ceil(r*.45),p=parseFloat((r*.04).toFixed(2))),{rawWallArea:parseFloat(s.toFixed(2)),netArea:r,brickType:Q.brickType,brickPcs:i,brickCubic:d,mortarBags:n,cementBags:w,sandCubic:p}},Pt=()=>{const e=_e[h.roofType]||_e.spandek,t=e.effectiveWidth,a=parseFloat(h.sheetLength)||e.defaultLength;let s=0,o=0,r=0,i=0,d=0,n=0,p=0,w=0,P=0;const v=Math.max(5,Math.min(60,parseFloat(h.slopeAngle)||20)),S=v*Math.PI/180,B=Math.cos(S),U=Math.max(0,parseFloat(h.overhang)||0);if(h.mode==="gable"){const C=Math.max(1,parseFloat(h.length)||1),F=Math.max(1,parseFloat(h.width)||1)/2+U;if(o=parseFloat((F/B).toFixed(2)),r=parseFloat((C+2*U).toFixed(2)),s=parseFloat((2*(r*o)).toFixed(2)),i=Math.ceil(r/t),a>=o)d=1;else{const q=o-a,O=Math.max(.2,a-.2);d=1+Math.ceil(q/O)}n=i*d*2,h.includeRidge&&(p=Math.ceil(r/.9))}else if(h.mode==="monopitch"){const C=Math.max(1,parseFloat(h.length)||1),F=Math.max(1,parseFloat(h.width)||1)+U;o=parseFloat((F/B).toFixed(2));const Z=parseFloat((C+2*U).toFixed(2));if(s=parseFloat((Z*o).toFixed(2)),i=Math.ceil(Z/t),a>=o)d=1;else{const O=o-a,m=Math.max(.2,a-.2);d=1+Math.ceil(O/m)}n=i*d,p=0}else{s=Math.max(1,parseFloat(h.directArea)||1),o=0,r=0,i=0,d=0;const C=t*Math.max(.5,a-.2);n=Math.ceil(s*1.05/C),p=0}return h.includeFasteners&&(h.roofType==="spandek"?(w=Math.max(Math.ceil(s*5),n*8),P=Math.ceil(w/e.fastenerBoxSize)):h.roofType==="seng"?(w=n*8,P=Math.ceil(w/e.fastenerBoxSize)):(w=n*6,P=Math.ceil(w/e.fastenerBoxSize))),{roofType:h.roofType,mode:h.mode,spec:e,sheetLength:a,slopeAngle:v,slopeLength:o,ridgeLength:r,totalRoofArea:s,sheetsAcross:i,sheetsPerSlope:d,totalSheets:n,ridgePieces:p,fastenerPcs:w,fastenerPacks:P}},Ge=e=>{const t=Array.isArray(b.products)?b.products:[];if(e==="paint"){const a=["cat","mowilex","dulux","avitex","no drop","nodrop","plamir","plamur","alkali","sealer","wall sealer","kuas","rol","kuas rol","bak cat","thinner","nippon","aquaproof","danapaint","vinilex","waterproofing","cat tembok","cat kayu","cat besi","cat minyak","propan","jotun","amplas"];return t.filter(s=>{if(!s||s.isActive===!1||s.isActive==="false")return!1;const o=`${s.name||""} ${s.category||""} ${s.subCategory||""}`.toLowerCase();return a.some(r=>o.includes(r))}).slice(0,4)}if(e==="tile"){const a=["keramik","granit","tile","nat","semen nat","tile grout","perekat","perekat keramik","granite","marmer","m-400","mu-400","plint","stepnosing","batu alam","spacer","tile spacer","waterpass","sika","lem keramik"];return t.filter(s=>{if(!s||s.isActive===!1||s.isActive==="false")return!1;const o=`${s.name||""} ${s.category||""} ${s.subCategory||""}`.toLowerCase();return a.some(r=>o.includes(r))}).slice(0,4)}if(e==="brick"){const a=["hebel","bata","bata ringan","bata merah","mortar","semen","semen instan","pasir","thinbed","tiga roda","gresik","padang","semen padang","holcim","dynamix","plester","acian","mu-380","perekat hebel","besi beton","kolom praktis"];return t.filter(s=>{if(!s||s.isActive===!1||s.isActive==="false")return!1;const o=`${s.name||""} ${s.category||""} ${s.subCategory||""}`.toLowerCase();return a.some(r=>o.includes(r))}).slice(0,4)}if(e==="roof"){const a=["spandek","spandex","seng","asbes","atap","zincalume","galvalum","roofing","baut roofing","paku payung","nok","bubungan","nok spandek","baja ringan","reng","baut","sds","genteng","genteng metal","onduline","alderon","polycarbonate","talang","insulasi","alumunium foil","drilling"];return t.filter(s=>{if(!s||s.isActive===!1||s.isActive==="false")return!1;const o=`${s.name||""} ${s.category||""} ${s.subCategory||""}`.toLowerCase();return a.some(r=>o.includes(r))}).slice(0,4)}return[]},ze=(e,t,a,s="fa-tags")=>{const o=Ge(e);return o.length>0?`
        <div class="pt-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                <i class="${t} text-[var(--color-primary)]"></i> ${a}:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${o.map(r=>{const i=!!(r.hasVariants&&Array.isArray(r.variants)&&r.variants.length>0);let d=g(r.price||0);if(i){const p=r.variants.map(w=>parseFloat(w.price)).filter(w=>!isNaN(w)&&w>0);if(p.length>0){const w=Math.min(...p),P=Math.max(...p);d=w===P?g(w):`${g(w)} - ${g(P)}`}}const n=Ae==="pos";return`
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
    </div>`},sr=e=>{if(e==="paint")return`
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
            <div class="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <i class="fa-solid fa-paintbrush text-[var(--color-primary)]"></i> Parameter Dinding
                </span>
                <div class="inline-flex p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-700 text-[10px] font-bold">
                    <button type="button" onclick="window.setEstimatorPaintMode('room')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${_.mode==="room"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-extrabold":"text-slate-500"}">Ruangan</button>
                    <button type="button" onclick="window.setEstimatorPaintMode('area')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${_.mode==="area"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-extrabold":"text-slate-500"}">Luas M²</button>
                </div>
            </div>

            ${_.mode==="room"?`
            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Ruang (m)</label>
                    <input type="number" id="paint-input-length" step="0.5" min="1" max="100" value="${_.length}" oninput="window.updateEstimatorPaintField('length', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Lebar Ruang (m)</label>
                    <input type="number" id="paint-input-width" step="0.5" min="1" max="100" value="${_.width}" oninput="window.updateEstimatorPaintField('width', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Tinggi Dinding (m)</label>
                    <input type="number" id="paint-input-height" step="0.25" min="1" max="20" value="${_.height}" oninput="window.updateEstimatorPaintField('height', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase" title="Area pintu dan jendela yang tidak dicat">Pintu/Jendela (m²)</label>
                    <input type="number" id="paint-input-openings" step="0.5" min="0" max="50" value="${_.openings}" oninput="window.updateEstimatorPaintField('openings', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>
            <div class="flex items-center justify-between pt-1">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Cat Plafon Sekalian?</span>
                <input type="checkbox" id="paint-input-ceiling" ${_.ceiling?"checked":""} onchange="window.updateEstimatorPaintField('ceiling', this.checked)"
                    class="w-4 h-4 rounded text-[var(--color-primary)] accent-[var(--color-primary)] cursor-pointer">
            </div>
            `:`
            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase">Total Luas Bidang Cat (m²)</label>
                <input type="number" id="paint-input-directArea" step="1" min="1" max="10000" value="${_.directArea}" oninput="window.updateEstimatorPaintField('directArea', this.value)"
                    class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
            </div>
            `}

            <!-- Layer Pengecatan (Preset Buttons Cerdas Tanpa Rebuild Input) -->
            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Jumlah Lapisan Pengecatan</label>
                <div class="grid grid-cols-3 gap-2" id="paint-coats-button-group">
                    <button type="button" onclick="window.setEstimatorPaintCoats(1)" class="paint-coat-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${_.coats===1?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" data-coats="1">1x Lapis</button>
                    <button type="button" onclick="window.setEstimatorPaintCoats(2)" class="paint-coat-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${_.coats===2?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" data-coats="2">2x Rekomendasi</button>
                    <button type="button" onclick="window.setEstimatorPaintCoats(3)" class="paint-coat-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${_.coats===3?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" data-coats="3">3x Warna Gelap</button>
                </div>
            </div>

            <div class="flex items-center justify-between pt-1">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Termasuk Cat Dasar (Alkali)?</span>
                <input type="checkbox" id="paint-input-sealer" ${_.includeSealer?"checked":""} onchange="window.updateEstimatorPaintField('includeSealer', this.checked)"
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
        </div>`;if(e==="roof"){const t=_e[h.roofType]||_e.spandek;return`
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
            <!-- Header Parameter & Mode Atap -->
            <div class="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <i class="fa-solid fa-house-chimney text-sky-500"></i> Parameter Bidang Atap
                </span>
                <div class="inline-flex p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-700 text-[10px] font-bold">
                    <button type="button" onclick="window.setEstimatorRoofMode('gable')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${h.mode==="gable"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-extrabold":"text-slate-500"}">Pelana</button>
                    <button type="button" onclick="window.setEstimatorRoofMode('monopitch')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${h.mode==="monopitch"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-extrabold":"text-slate-500"}">Kanopi</button>
                    <button type="button" onclick="window.setEstimatorRoofMode('area')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${h.mode==="area"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-extrabold":"text-slate-500"}">Luas M²</button>
                </div>
            </div>

            <!-- Pilihan Jenis Material Atap (Spandek, Seng, Asbes) -->
            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Jenis Material Atap / Penutup</label>
                <div class="grid grid-cols-3 gap-1.5" id="roof-type-button-group">
                    <button type="button" onclick="window.setEstimatorRoofType('spandek')" class="roof-type-btn py-2 px-1.5 rounded-xl text-[11px] font-extrabold transition-all border cursor-pointer text-center ${h.roofType==="spandek"?"border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" data-rooftype="spandek">
                        <i class="fa-solid fa-layer-group block text-xs mb-1 ${h.roofType==="spandek"?"text-sky-500":"text-slate-400"}"></i>
                        Spandek
                    </button>
                    <button type="button" onclick="window.setEstimatorRoofType('seng')" class="roof-type-btn py-2 px-1.5 rounded-xl text-[11px] font-extrabold transition-all border cursor-pointer text-center ${h.roofType==="seng"?"border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" data-rooftype="seng">
                        <i class="fa-solid fa-water block text-xs mb-1 ${h.roofType==="seng"?"text-amber-500":"text-slate-400"}"></i>
                        Seng
                    </button>
                    <button type="button" onclick="window.setEstimatorRoofType('asbes')" class="roof-type-btn py-2 px-1.5 rounded-xl text-[11px] font-extrabold transition-all border cursor-pointer text-center ${h.roofType==="asbes"?"border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" data-rooftype="asbes">
                        <i class="fa-solid fa-bars-staggered block text-xs mb-1 ${h.roofType==="asbes"?"text-emerald-500":"text-slate-400"}"></i>
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
                        <option value="${a.val}" ${parseFloat(h.sheetLength)===a.val?"selected":""}>${a.label}</option>
                    `).join("")}
                </select>
            </div>

            ${h.mode!=="area"?`
            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">${h.mode==="gable"?"P. Bangunan (m)":"Lebar Kanopi (m)"}</label>
                    <input type="number" id="roof-input-length" step="0.5" min="1" max="100" value="${h.length}" oninput="window.updateEstimatorRoofField('length', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">${h.mode==="gable"?"Bentang Lebar (m)":"P. Jatuh Air (m)"}</label>
                    <input type="number" id="roof-input-width" step="0.5" min="1" max="100" value="${h.width}" oninput="window.updateEstimatorRoofField('width', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>

            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Sudut Miring (°)</label>
                    <input type="number" id="roof-input-slopeAngle" step="1" min="5" max="60" value="${h.slopeAngle}" oninput="window.updateEstimatorRoofField('slopeAngle', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase" title="Lebar cucuran atap keluar dinding">Overstek (m)</label>
                    <input type="number" id="roof-input-overhang" step="0.1" min="0" max="3" value="${h.overhang}" oninput="window.updateEstimatorRoofField('overhang', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>

            <!-- Preset Sudut Cepat (Tanpa Rebuild Input) -->
            <div class="pt-0.5">
                <label class="text-[9px] font-bold text-slate-400 uppercase mb-1 block">Preset Sudut Kemiringan</label>
                <div class="grid grid-cols-4 gap-1.5" id="roof-angle-button-group">
                    ${[15,20,25,30].map(a=>`
                        <button type="button" onclick="window.setEstimatorRoofAngle(${a})" class="roof-angle-btn py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer ${parseFloat(h.slopeAngle)===a?"bg-sky-50 dark:bg-sky-950/60 border-sky-400 text-sky-700 dark:text-sky-300 shadow-2xs":"bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500"}" data-angle="${a}">${a}°</button>
                    `).join("")}
                </div>
            </div>
            `:`
            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase">Total Luas Bidang Atap (m²)</label>
                <input type="number" id="roof-input-directArea" step="1" min="1" max="10000" value="${h.directArea}" oninput="window.updateEstimatorRoofField('directArea', this.value)"
                    class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 h-11 text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
            </div>
            `}

            <!-- Checkboxes Nok & Pengencang -->
            <div class="space-y-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                ${h.mode==="gable"?`
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Sertakan Nok Bubungan Puncak?</span>
                    <input type="checkbox" id="roof-input-ridge" ${h.includeRidge?"checked":""} onchange="window.updateEstimatorRoofField('includeRidge', this.checked)"
                        class="w-4 h-4 rounded text-sky-600 accent-sky-600 cursor-pointer">
                </div>
                `:""}
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Sertakan Baut / Paku?</span>
                    <input type="checkbox" id="roof-input-fasteners" ${h.includeFasteners?"checked":""} onchange="window.updateEstimatorRoofField('includeFasteners', this.checked)"
                        class="w-4 h-4 rounded text-sky-600 accent-sky-600 cursor-pointer">
                </div>
            </div>
        </div>`}return""},Qt=e=>{if(e==="paint"){const t=kt();return Ge("paint"),`
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
        ${ze("paint","fa-solid fa-paintbrush","Rekomendasi Produk Cat di Toko Kami","fa-paint-roller")}`}if(e==="tile"){const t=yt();return Ge("tile"),`
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
        ${ze("tile","fa-solid fa-border-all","Rekomendasi Keramik & Semen di Toko","fa-border-all")}`}if(e==="brick"){const t=vt();return Ge("brick"),`
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
        ${ze("brick","fa-solid fa-trowel-bricks","Rekomendasi Bata & Semen Mortar di Toko","fa-cubes")}`}if(e==="roof"){const t=Pt();return Ge("roof"),`
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
            ${sr(qe)}
        </div>
        <!-- Kolom Kanan: Hasil Kalkulasi & Rekomendasi (7 Kolom Desktop) -->
        <div class="lg:col-span-7 space-y-4" id="estimator-results-container">
            ${Qt(qe)}
        </div>
    </div>`,rr())},Te=(e=qe)=>{if(typeof document>"u")return;const t=l("estimator-results-container");if(!t){Ue();return}t.innerHTML=Qt(e)},rr=()=>{["paint","tile","brick","roof"].forEach(t=>{const a=l(`estimator-tab-btn-${t}`);a&&(t===qe?a.className="shrink-0 sm:flex-1 py-2 sm:py-2.5 px-3 sm:px-3.5 rounded-xl font-black text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer primary-bg text-white":a.className="shrink-0 sm:flex-1 py-2 sm:py-2.5 px-3 sm:px-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white")})},or=e=>{qe=e,Ue()},Zt=e=>{_.coats=e,typeof document<"u"&&document.querySelectorAll(".paint-coat-btn").forEach(t=>{parseInt(t.getAttribute("data-coats"),10)===e?t.className="paint-coat-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":t.className="paint-coat-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}),Te("paint")},Yt=e=>{V.wastePercent=e,typeof document<"u"&&document.querySelectorAll(".tile-waste-btn").forEach(t=>{parseInt(t.getAttribute("data-waste"),10)===e?(t.className="tile-waste-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs",t.style.cssText="background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);"):(t.className="tile-waste-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400",t.style.cssText="")}),Te("tile")},ir=e=>{if(h.slopeAngle=e,typeof document<"u"){const t=l("roof-input-slopeAngle");t&&(t.value=e),document.querySelectorAll(".roof-angle-btn").forEach(a=>{parseFloat(a.getAttribute("data-angle"))===e?a.className="roof-angle-btn py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer bg-sky-50 dark:bg-sky-950/60 border-sky-400 text-sky-700 dark:text-sky-300 shadow-2xs":a.className="roof-angle-btn py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500"})}Te("roof")},nr=e=>{_.mode=e,Ue()},lr=(e,t)=>{if(e==="coats"){Zt(parseInt(t,10)||2);return}_[e]=t,Te("paint")},dr=(e,t)=>{if(e==="wastePercent"){Yt(parseInt(t,10)||10);return}V[e]=t,Te("tile")},cr=(e,t)=>{Q[e]=t,Te("brick")},pr=e=>{h.mode=e,Ue()},ur=e=>{h.roofType=e;const t=_e[e]||_e.spandek;t.standardLengths.some(s=>s.val===parseFloat(h.sheetLength))||(h.sheetLength=t.defaultLength),Ue()},mr=(e,t)=>{if(e==="slopeAngle"){h.slopeAngle=t;const a=parseFloat(t);typeof document<"u"&&document.querySelectorAll(".roof-angle-btn").forEach(s=>{parseFloat(s.getAttribute("data-angle"))===a?s.className="roof-angle-btn py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer bg-sky-50 dark:bg-sky-950/60 border-sky-400 text-sky-700 dark:text-sky-300 shadow-2xs":s.className="roof-angle-btn py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500"}),Te("roof");return}h[e]=t,Te("roof")},fr=e=>{let t="";const a=b.store?.name||"TOKO PUTRI";if(e==="paint"){const s=kt();t=`*ESTIMASI KEBUTUHAN CAT TEMBOK — ${a}*
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
Dihitung otomatis via Sistem Toko Putri`}else if(e==="tile"){const s=yt();t=`*ESTIMASI KEBUTUHAN KERAMIK / GRANIT — ${a}*
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
Dihitung otomatis via Sistem Toko Putri`}else if(e==="brick"){const s=vt();t=`*ESTIMASI PASANGAN DINDING — ${a}*
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
Dihitung otomatis via Sistem Toko Putri`}else if(e==="roof"){const s=Pt();t=`*ESTIMASI KEBUTUHAN ATAP & PENUTUP — ${a}*
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
Dihitung otomatis via Sistem Toko Putri`}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t).then(()=>{A("Rincian estimasi berhasil disalin ke clipboard!","success")}).catch(()=>{A("Gagal menyalin rincian.","warning")}):A("Clipboard browser tidak didukung.","warning")},br=e=>{let t="";const a=b.store?.name||"Toko Putri",s=(b.store?.wa||"").replace(/[^0-9]/g,"");if(e==="paint"){const r=kt();t=`Halo ${a}, saya ingin konsultasi kebutuhan cat dinding:

• Luas Bidang Cat: ${r.grandArea} m² (${r.coats}x lapis)
• Estimasi Kebutuhan: ${r.pails>0?`${r.pails} Pail `:""}${r.gallons>0?`${r.gallons} Galon`:""} (${r.totalVolumeLiters} Liter)
`+(r.sealerGallons>0?`• Alkali Sealer: ${r.sealerGallons} Galon
`:"")+`
Mohon info ketersediaan stok & rekomendasi merk cat terbaik. Terima kasih!`}else if(e==="tile"){const r=yt();t=`Halo ${a}, saya ingin konsultasi kebutuhan keramik:

• Ukuran Keramik: ${r.spec.name}
• Luas Bersih + Waste: ${r.totalAreaWithWaste} m²
• Estimasi Kebutuhan: ${r.totalBoxes} Dus
`+(r.adhesiveBags>0?`• Semen Perekat: ${r.adhesiveBags} Sak
`:"")+`
Mohon info pilihan motif & harga terbaik. Terima kasih!`}else if(e==="brick"){const r=vt();t=`Halo ${a}, saya ingin konsultasi pasangan dinding:

• Jenis: ${Q.brickType.startsWith("hebel")?"Bata Ringan Hebel":"Bata Merah"}
• Luas Bersih: ${r.netArea} m²
• Kebutuhan: ${r.brickPcs} Pcs ${r.brickCubic>0?`(${r.brickCubic} m³)`:""}
`+(r.mortarBags>0?`• Mortar: ${r.mortarBags} Sak
`:"")+`
Mohon info pengiriman armada ke lokasi proyek. Terima kasih!`}else if(e==="roof"){const r=Pt();t=`Halo ${a}, saya ingin konsultasi kebutuhan atap:

• Jenis Atap: ${r.spec.name} (${r.sheetLength}m)
• Luas Bidang Atap: ${r.totalRoofArea} m²
• Estimasi Kebutuhan: ${r.totalSheets} Lembar
`+(r.ridgePieces>0?`• Nok Bubungan: ${r.ridgePieces} Batang
`:"")+(r.fastenerPacks>0?`• Pengencang: ${r.fastenerPacks} ${r.spec.fastenerPackaging} (${r.fastenerPcs} Pcs)
`:"")+`
Mohon info ketersediaan stok & rekomendasi pengiriman ke lokasi. Terima kasih!`}const o=`https://wa.me/${s}?text=${encodeURIComponent(t)}`;window.open(o,"_blank")},xr=(e,t,a,s=0)=>{typeof window.posAddEstimatorToCart=="function"?(window.posAddEstimatorToCart(e,t,a,s),Ze()):typeof window.posAddToCartQty=="function"?(A(`Estimasi ${e} (${t} ${a}) dimasukkan ke kasir.`),Ze()):(A(`Estimasi ${e} (${t} ${a}) siap dimasukkan ke kasir.`),Ze())},wr=e=>{if(Ae==="pos"){const t=(b.products||[]).find(a=>String(a.id)===String(e));if(t&&t.hasVariants&&Array.isArray(t.variants)&&t.variants.length>0&&typeof window.openPOSVariantSheet=="function"){window.openPOSVariantSheet(e);return}typeof window.posAddToCart=="function"?(window.posAddToCart(e),A("Produk ditambahkan ke kasir POS!","success")):typeof window.quickAddOrOpenProduct=="function"&&window.quickAddOrOpenProduct(null,e)}else typeof window.quickAddOrOpenProduct=="function"?window.quickAddOrOpenProduct(null,e):typeof window.addToCart=="function"?(window.addToCart(e),A("Produk ditambahkan ke keranjang belanja!","success")):typeof window.openProductModal=="function"&&window.openProductModal(e)},gr=e=>{if(Ae==="pos"){const t=(b.products||[]).find(a=>String(a.id)===String(e));if(t&&t.hasVariants&&Array.isArray(t.variants)&&t.variants.length>0&&typeof window.openPOSVariantSheet=="function"){window.openPOSVariantSheet(e);return}typeof window.posAddToCart=="function"?(window.posAddToCart(e),A("Produk ditambahkan ke kasir POS!","success")):typeof window.quickAddOrOpenProduct=="function"&&window.quickAddOrOpenProduct(null,e)}else typeof window.openProductModal=="function"&&window.openProductModal(e)},hr=(e="storefront")=>{if(Ae=e,typeof window<"u"&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("materialEstimator"),typeof document>"u")return;const t=l("modal-material-estimator");t&&(t.classList.remove("hidden"),setTimeout(()=>{t.classList.remove("opacity-0");const a=l("modal-material-estimator-content");a&&(a.classList.remove("translate-y-full","sm:translate-y-10"),a.classList.add("translate-y-0"))},10),Ue(),typeof window<"u"&&typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Ze=(e=!1)=>{if(typeof document>"u")return;const t=l("modal-material-estimator"),a=l("modal-material-estimator-content"),s=l("quick-variant-modal");s&&!s.classList.contains("hidden")&&typeof window.closeQuickVariantSheet=="function"&&window.closeQuickVariantSheet(!0);const o=()=>{a&&(a.classList.add("translate-y-full","sm:translate-y-10"),a.classList.remove("translate-y-0")),t&&t.classList.add("opacity-0"),setTimeout(()=>{t&&t.classList.add("hidden")},280)};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("materialEstimator",!1,o):o()};typeof window<"u"&&(window.openMaterialEstimatorModal=hr,window.closeMaterialEstimatorModal=Ze,window.switchEstimatorTab=or,window.setEstimatorPaintMode=nr,window.updateEstimatorPaintField=lr,window.updateEstimatorTileField=dr,window.updateEstimatorBrickField=cr,window.setEstimatorRoofMode=pr,window.setEstimatorRoofType=ur,window.updateEstimatorRoofField=mr,window.copyEstimatorSummary=fr,window.shareEstimatorToWA=br,window.addEstimatorToPOSCart=xr,window.addStoreProductFromEstimator=wr,window.handleEstimatorProductCardClick=gr,window.updateEstimatorResultOnly=Te,window.setEstimatorPaintCoats=Zt,window.setEstimatorTileWaste=Yt,window.setEstimatorRoofAngle=ir);let Be=null;const Ct=e=>{if(e<=0)return{h:"00",m:"00",s:"00",totalSec:0};const t=Math.floor(e/1e3),a=Math.floor(t/3600),s=Math.floor(t%3600/60),o=t%60;return{h:String(a).padStart(2,"0"),m:String(s).padStart(2,"0"),s:String(o).padStart(2,"0"),totalSec:t}},Xt=()=>{const e=l("dynamic-flashsale-container");if(!e)return;Be&&(clearInterval(Be),Be=null);const t=Ss("web");if(!t||!Array.isArray(t.items)||t.items.length===0){e.innerHTML="",e.classList.add("hidden");return}const a=t.endTime?new Date(t.endTime).getTime():0,s=Date.now(),o=Math.max(0,a-s);if(a&&o<=0){e.innerHTML="",e.classList.add("hidden");return}const r=Ct(o),i=t.items.filter(n=>n&&n.productId);if(i.length===0){e.innerHTML="",e.classList.add("hidden");return}e.classList.remove("hidden");const d=i.map(n=>{const p=(b.products||[]).find(O=>String(O.id)===String(n.productId));if(!p||p.isActive===!1||p.isActive==="false")return"";const w=parseFloat(n.normalPrice)||parseFloat(p.price)||0,P=parseFloat(n.flashSalePrice)||0,v=parseFloat(n.quota)||0,S=parseFloat(n.soldCount)||0,B=v>0&&S>=v,U=v>0?Math.min(100,Math.round(S/v*100)):0,C=Math.max(0,v-S),u=w>0?Math.round((w-P)/w*100):n.discountPercent||0,F=p.img?ia(p.img,"w400-rw"):"/favicon.png",Z=p.name||"Produk Promo",q=n.variantName?` (${n.variantName})`:"";return`
        <div class="group relative flex w-[172px] sm:w-[205px] md:w-[220px] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md snap-start" style="transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;">
            <!-- Badge Diskon Petir Harmonis Tema -->
            <div class="absolute left-2.5 top-2.5 z-10 flex items-center gap-1 rounded-lg px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-2xs" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);">
                <i class="fa-solid fa-bolt text-amber-300 text-[10px]"></i>
                <span>-${Math.max(1,u)}%</span>
            </div>

            ${C<=3&&!B&&v>0?`
            <div class="absolute right-2.5 top-2.5 z-10 flex items-center gap-1 rounded-lg bg-amber-500 px-1.5 py-0.5 text-[9px] font-black text-white shadow-2xs">
                <span><i class="fa-solid fa-fire text-amber-200 text-[8.5px]"></i> Sisa ${C}!</span>
            </div>`:""}

            <!-- Foto Produk -->
            <div class="relative aspect-square w-full cursor-pointer overflow-hidden bg-slate-50 dark:bg-slate-800/50 p-2.5 flex items-center justify-center border-b border-slate-100 dark:border-slate-800" onclick="window.openProductModal && window.openProductModal('${f(p.id)}')">
                <img src="${f(F)}" alt="${f(Z)}" loading="lazy" decoding="async" class="h-full w-full object-contain transition-transform duration-500 group-hover:scale-108" onerror="this.src='/favicon.png'">
                ${B?`
                <div class="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center p-2 text-center text-white">
                    <span class="rounded-lg px-2.5 py-1 text-[10px] font-black uppercase tracking-widest shadow-md text-white" style="background: var(--color-primary-dark);">HABIS TERJUAL</span>
                    <span class="mt-1 text-[9px] font-medium text-slate-300">Kuota promo terpenuhi</span>
                </div>`:""}
            </div>

            <!-- Detail & Harga -->
            <div class="flex flex-1 flex-col justify-between p-3">
                <div>
                    <h4 class="line-clamp-2 text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-[var(--color-primary)] transition-colors" title="${f(Z+q)}">
                        ${f(Z+q)}
                    </h4>
                    
                    <!-- Coretan Harga & Harga Kilat Harmonis -->
                    <div class="mt-2 flex flex-col">
                        <span class="text-[10px] font-semibold text-slate-400 dark:text-slate-500 line-through leading-tight">
                            ${g(w)}
                        </span>
                        <span class="text-sm sm:text-base font-black truncate leading-tight" style="color: var(--color-primary);">
                            ${g(P)}
                        </span>
                    </div>
                </div>

                <!-- FOMO Progress Bar Kuota -->
                <div class="mt-3">
                    <div class="flex items-center justify-between text-[9px] font-bold text-slate-500 dark:text-slate-400 mb-1">
                        <span>${B?"Terjual Habis":`Terjual ${S}/${v||"∞"}`}</span>
                        <span>${v>0?U+"%":"Terbatas"}</span>
                    </div>
                    <div class="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                        <div class="h-full rounded-full transition-all duration-500 ${B?"bg-slate-400":""}" style="${B?"":"background: linear-gradient(90deg, #f59e0b 0%, var(--color-primary) 100%);"} width: ${B?100:Math.max(8,U)}%;"></div>
                    </div>

                    <!-- Tombol Aksi Beli Kilat -->
                    <div class="mt-3">
                        ${B?`
                        <button type="button" disabled class="btn-native-action w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs font-bold cursor-not-allowed">
                            Kuota Habis
                        </button>`:`
                        <button type="button" onclick="window.quickBuyFlashSaleItem('${f(p.id)}', '${f(n.variantName||"")}')" class="btn-native-action w-full py-2.5 rounded-xl text-white text-xs font-black active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-bolt text-amber-300 text-xs"></i>
                            <span>Beli Kilat</span>
                        </button>`}
                    </div>
                </div>
            </div>
        </div>`}).join("");e.innerHTML=`
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
                    <span id="fs-cd-h" class="min-w-[24px] text-center rounded-lg px-1.5 py-0.5 text-xs sm:text-sm font-bold shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.08); border: 1px solid rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary);">${r.h}</span>
                    <span>:</span>
                    <span id="fs-cd-m" class="min-w-[24px] text-center rounded-lg px-1.5 py-0.5 text-xs sm:text-sm font-bold shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.08); border: 1px solid rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary);">${r.m}</span>
                    <span>:</span>
                    <span id="fs-cd-s" class="min-w-[24px] text-center rounded-lg px-1.5 py-0.5 text-xs sm:text-sm font-bold shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.08); border: 1px solid rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary);">${r.s}</span>
                </div>
            </div>
        </div>

        <!-- Slider List Produk Flash Sale -->
        <div class="relative z-10 flex gap-3 sm:gap-4 overflow-x-auto pb-2 pt-1 hide-scrollbar snap-x">
            ${d}
        </div>
    </div>`,a&&(Be=setInterval(()=>{const n=Math.max(0,a-Date.now());if(n<=0){clearInterval(Be),Be=null,Xt(),typeof window.rCat=="function"&&window.rCat();return}const p=Ct(n),w=l("fs-cd-h"),P=l("fs-cd-m"),v=l("fs-cd-s");w&&(w.innerText=p.h),P&&(P.innerText=p.m),v&&(v.innerText=p.s)},1e3))},kr=(e,t="")=>{const a=(b.products||[]).find(i=>String(i.id)===String(e));if(!a)return;if(a.variants&&a.variants.length>0&&!t){Ts(e);return}const s=t||(a.variants&&a.variants[0]?a.variants[0].name:""),o=window.getEffP?window.getEffP({id:a.id,price:a.price,variantName:s}):a.price,r=H.findIndex(i=>String(i.id)===String(a.id)&&String(i.variantName||"")===String(s||""));r>-1?H[r].qty=(parseFloat(H[r].qty)||0)+1:H.push({id:a.id,name:a.name,variantName:s,price:o,img:a.img||"",qty:1,unit:a.unit||"pcs"});try{localStorage.setItem("freshmart_cart",JSON.stringify(H))}catch{}Ms(),A(`"${a.name}" berhasil dimasukkan ke keranjang dengan harga Flash Sale!`,"success")};window.renderStorefrontFlashSale=Xt;window.quickBuyFlashSaleItem=kr;let ct=[];const Ne=()=>{try{localStorage.setItem("freshmart_my_orders",JSON.stringify(G))}catch(e){console.warn("[MyOrders] Gagal menyimpan ke localStorage:",e)}},yr=()=>{try{const e=localStorage.getItem("freshmart_my_orders");if(e){const t=JSON.parse(e);Array.isArray(t)&&t.length>0&&tt(t)}}catch(e){console.warn("[MyOrders] Gagal memuat dari localStorage:",e)}return G},ea=()=>{ct.forEach(e=>{try{typeof e=="function"&&e()}catch{}}),ct=[]},ta=()=>{ea(),G.filter(a=>{const s=a.status==="Selesai"||a.status==="Dibatalkan",o=a.claimedReward&&(a.claimedReward.status==="Menunggu Persetujuan"||!a.claimedReward.status);return!s||o}).slice(0,10).forEach(a=>{const s=a.orderId;if(!s)return;const o=J.collection("freshmart_orders").doc(s).onSnapshot(r=>{if(!r.exists)return;const i=r.data(),d=i.status,n=i.claimedReward?i.claimedReward.status:null,p=i.claimedReward&&i.claimedReward.note||"";let w=!1,P="";const v=G.find(S=>S.orderId===s);if(v){if(d&&v.status!==d){const S=v.status;v.status=d,w=!0,S!==void 0&&(P=`Pesanan #${s.split("-").pop()} kini: ${d}`)}v.claimedReward&&n&&(v.claimedReward.status!==n||v.claimedReward.note!==p)&&(v.claimedReward.status=n,v.claimedReward.note=p,w=!0),w&&(Ne(),window.curViewName==="view-orders"&&We(),P&&A(P))}},r=>{console.warn("[MyOrders Realtime] Snapshot error:",r.message)});ct.push(o)})},We=async()=>{if(yr(),!G.length){xe("orders-empty-state"),I("btn-clear-orders"),xe("spacer-orders"),we("orders-items-container","");return}I("orders-empty-state"),xe("btn-clear-orders"),I("spacer-orders"),ta(),we("orders-items-container",G.map((e,t)=>{const s=_t(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});let o="text-slate-500 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",r="fa-clock";return e.status==="Baru"?(o="text-rose-600 border-rose-200 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400",r="fa-asterisk"):e.status==="Diproses"?(o="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",r="fa-spinner fa-spin"):e.status==="Selesai"?(o="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",r="fa-check-double"):e.status==="Dibatalkan"&&(o="text-slate-400 border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400",r="fa-xmark"),`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group min-w-0 transition-all hover:border-[var(--color-primary)]/40">
            <div class="flex justify-between items-start mb-3 border-b border-slate-100 dark:border-slate-700/60 pb-3">
                <div>
                    <span class="font-bold text-sm text-slate-800 dark:text-white tracking-tight">#${e.orderId.split("-").pop()}</span>
                    <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5"><i class="fa-regular fa-calendar-days mr-1"></i>${s}</p>
                </div>
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-lg border ${o} uppercase tracking-wider flex items-center shadow-xs"><i class="fa-solid ${r} mr-1.5 text-[9px]"></i> ${f(e.status)}</span>
            </div>
            ${e.pointsEarned>0||e.claimedReward?`
            <div class="flex flex-wrap gap-1.5 mb-3">
                ${e.pointsEarned>0?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400"><i class="fa-solid fa-star mr-1"></i>+${e.pointsEarned} Poin</span>`:""}
                ${e.claimedReward?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)]/40 dark:text-[var(--color-primary)]"><i class="fa-solid fa-gift mr-1"></i>Hadiah: ${f(e.claimedReward.name)} ${xt(e.claimedReward)}</span>`:""}
                ${e.claimedReward&&e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-slate-100 text-slate-500 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"><i class="fa-solid fa-wallet mr-1"></i>Sisa: ${e.finalMemberPoints} Poin</span>`:""}
            </div>`:""}
            <div class="flex justify-between items-end mt-2 pt-1">
                <div>
                    <p class="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Total Tagihan</p>
                    <p class="text-[var(--color-primary)] font-bold text-base tracking-tight">${g(e.total)} <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium ml-1">(${e.itemCount} Item)</span></p>
                </div>
                <div class="flex gap-2">
                    <button onclick="openCustomerOrderDetail('${e.orderId}')" class="h-8 px-3.5 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] hover:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.35)] text-[11px] font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5"><i class="fa-solid fa-file-invoice"></i> Detail</button>
                    <button onclick="checkOrderStatus('${e.orderId}', ${t})" class="h-8 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-[11px] font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5"><i class="fa-solid fa-rotate"></i> Status</button>
                </div>
            </div>
        </div>`}).join(""))},vr=async(e,t)=>{Pe("Melacak Status...");try{const a=await J.collection("freshmart_orders").doc(e).get();if(a.exists){const s=a.data();if(G[t])G[t].status=s.status;else{const o=G.findIndex(r=>r.orderId===e);o>-1&&(G[o].status=s.status)}Ne(),We(),A(`Status Pesanan: ${s.status}`)}else A("Pesanan tidak ditemukan di server.")}catch(a){console.error("Gagal cek status pesanan:",a),A("Gagal mengambil data sistem. Periksa koneksi.")}finally{de()}},Pr=async()=>{const e=l("order-tracking-input"),t=e?e.value.trim():"";if(!t){A("Masukkan ID Pesanan terlebih dahulu!");return}let a=t.replace(/^#/,"").trim();const s=G.find(o=>o.orderId===a||o.orderId.endsWith(a));if(s){pt(s.orderId);return}Pe("Mencari Pesanan...");try{let o=await J.collection("freshmart_orders").doc(a).get();if(!o.exists&&!a.startsWith("ORD-")){const r="ORD-"+a,i=await J.collection("freshmart_orders").doc(r).get();i.exists&&(o=i,a=r)}if(o.exists){const r=o.data();G.some(d=>d.orderId===a)||(G.unshift({orderId:a,date:r.dateString||(r.timestamp?r.timestamp.toDate().toISOString():new Date().toISOString()),dateString:r.dateString||(r.timestamp?r.timestamp.toDate().toISOString():new Date().toISOString()),total:r.payment&&r.payment.grandTotal?r.payment.grandTotal:r.total||0,itemCount:(r.items||[]).reduce((d,n)=>d+(parseFloat(n.qty)||0),0),status:r.status||"Baru",pointsEarned:r.pointsEarned||0,claimedReward:r.claimedReward||null,finalMemberPoints:r.finalMemberPoints||null,customerType:r.customerType||"Pelanggan Umum",customer:r.customer||{},items:r.items||[],payment:r.payment||{},isTempo:!!r.isTempo}),Ne(),We()),e&&(e.value=""),A("Pesanan berhasil ditemukan!"),pt(a)}else A("Pesanan dengan ID tersebut tidak ditemukan.")}catch(o){console.error("Gagal melacak pesanan:",o),A("Gagal menghubungi server. Pastikan ID Pesanan sudah benar.")}finally{de()}},Sr=()=>{na("Hapus Riwayat","Riwayat pesanan di perangkat ini akan dihapus. Pesanan tetap tersimpan di sistem toko. Lanjutkan?",()=>{tt([]),Ne(),We(),A("Riwayat lokal dibersihkan")})},pt=async e=>{const t=Array.isArray(G)?G.find(a=>a.orderId===e):null;if(t&&t.items&&t.items.length>0){window.currentCustomerOrder=t,window.lastPrintedOrder=t,Ye(e,t,[]),J.collection("freshmart_orders").doc(e).get().then(async a=>{if(a.exists){const s=a.data();s.orderId=s.orderId||a.id||e;let o=[];if(s.status==="Selesai")try{o=(await J.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(n=>`${n.data().productId}::${n.data().variantName||""}`)}catch{}window.currentCustomerOrder=s,window.lastPrintedOrder=s;const r=G.findIndex(d=>d.orderId===s.orderId);r!==-1&&(Object.assign(G[r],s),Ne());const i=document.getElementById("order-detail-modal");i&&!i.classList.contains("hidden")&&!i.classList.contains("opacity-0")&&Ye(e,s,o,!0)}}).catch(a=>console.warn("[MyOrders] Silent background fetch error:",a));return}Pe("Memuat Rincian...");try{const a=await J.collection("freshmart_orders").doc(e).get();if(!a.exists){A("Pesanan tidak ditemukan.");return}const s=a.data();s.orderId=s.orderId||a.id||e;let o=[];if(s.status==="Selesai")try{o=(await J.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(i=>`${i.data().productId}::${i.data().variantName||""}`)}catch{}if(window.currentCustomerOrder=s,window.lastPrintedOrder=s,Array.isArray(G)){const r=G.findIndex(i=>i.orderId===s.orderId);r!==-1&&(Object.assign(G[r],s),Ne())}Ye(e,s,o)}catch(a){console.error("Gagal mengambil data pesanan:",a),A("Gagal memuat rincian pesanan. Coba beberapa saat lagi.")}finally{de()}},Ye=(e,t,a=[],s=!1)=>{try{t&&(t.orderId=t.orderId||e,window.currentCustomerOrder=t,window.lastPrintedOrder=t);let o=document.getElementById("order-detail-modal");o||(o=document.createElement("div"),o.id="order-detail-modal",o.className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 opacity-0 pointer-events-none transition-opacity duration-300",document.body.appendChild(o));const r=f(t.customer&&t.customer.name?t.customer.name:"-"),i=f(t.customer&&t.customer.wa?t.customer.wa:"-"),d=f(t.customer&&t.customer.address?t.customer.address:"-"),n=t.customer&&t.customer.deliveryMethod==="delivery"?"Dikirim ke Alamat":"Ambil di Toko (Pickup)",p=f(t.customer&&t.customer.note?t.customer.note:""),w=!!(t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"),P=w?"Putri PayLater":f(t.payment&&t.payment.method?t.payment.method:"Cash / COD"),v=t.items||[],S=v.some(E=>E.poTime&&E.poTime!==""),B=v.map(E=>{const oe=parseFloat(E.qty)||0,ae=parseFloat(E.effectivePrice||E.price)||0,se=oe*ae,T=`${E.id}::${E.variantName||""}`,ue=t.status==="Selesai"&&!a.includes(T)&&E.id!==void 0&&E.id!==null;return`
            <div class="flex gap-3 items-center border-b border-slate-100 dark:border-slate-700/50 py-3 last:border-0">
                <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-700" style="background-image:url('${f(E.img||(b&&b.store?b.store.logo:""))}')"></div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate mb-0.5" title="${f(E.name)}">${f(E.name)}</p>
                    ${E.variantName||E.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${E.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded text-[9px] font-semibold">${f(E.variantName)}</span>`:""}
                        ${E.poTime?`<span class="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">PO ${f(E.poTime)}</span>`:""}
                    </div>
                    `:""}
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400">${oe} ${f(E.unit||"pcs")} x ${g(ae)}</p>
                    ${ue?`<button type="button" onclick="openReviewModal('${e}',${E.id},'${encodeURIComponent(E.variantName||"")}','${encodeURIComponent(E.name||"")}','${encodeURIComponent(t.customer?.name||"")}')" class="mt-1.5 text-[10px] font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1 transition-colors"><i class="fa-solid fa-star"></i> Berikan Ulasan</button>`:""}
                </div>
                <div class="text-right shrink-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-[var(--color-primary)]">${g(se)}</p>
                </div>
            </div>
            `}).join(""),C=_t(t).toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),u=la(t),F=u.subtotal,Z=u.shipping,q=u.productDiscount,O=u.shippingDiscount,m=u.pointDiscount,ge=u.grandTotal;o.innerHTML=`
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
                            <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40">${f(t.status||"Baru")}</span>
                        </div>
                        <div class="text-right">
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Waktu Pembelian</p>
                            <p class="text-[11px] font-bold text-slate-700 dark:text-slate-300">${C}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-user text-slate-400"></i> Info Pelanggan</h4>
                            <div class="space-y-1 text-xs">
                                <p class="font-bold text-slate-800 dark:text-slate-200">${r}</p>
                                ${t.customer&&t.customer.wa?`<a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${i}'); else window.open('https://wa.me/${i}', '_blank', 'noopener,noreferrer');" class="flex items-center gap-1 text-[var(--color-primary)] font-bold hover:underline cursor-pointer"><i class="fa-brands fa-whatsapp"></i> +${i}</a>`:""}
                                ${t.customer&&t.customer.lat&&t.customer.deliveryMethod==="delivery"?`<a href="https://www.google.com/maps?q=${f(t.customer.lat)},${f(t.customer.lng)}" target="_blank" class="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"><i class="fa-solid fa-location-dot"></i> Lihat Peta</a>`:""}
                            </div>
                        </div>
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-truck text-slate-400"></i> Pengiriman & Bayar</h4>
                            <div class="space-y-1 text-xs">
                                <p><span class="text-slate-500 inline-block w-14">Metode</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${n}</span></p>
                                <p><span class="text-slate-500 inline-block w-14">Bayar</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${P.toUpperCase()}</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2.5">
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1">Alamat Tujuan</p>
                            <p class="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">${d}</p>
                        </div>
                        ${p?`<div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60"><p class="text-[9px] font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest mb-1">Catatan Pembeli</p><p class="text-xs font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic">"${p}"</p></div>`:""}
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
                        <div class="bg-slate-50 dark:bg-slate-800/30 rounded-xl px-3 py-1 border border-slate-200 dark:border-slate-700/80">
                            ${B}
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
                            <p class="text-[11px] font-semibold text-[var(--color-primary)] mt-1 ml-5">${xt(t.claimedReward)}</p>
                            ${t.claimedReward.note?`<p class="text-[11px] text-[var(--color-primary)]/70 italic mt-0.5 ml-5">"${f(t.claimedReward.note)}"</p>`:""}
                        </div>`:""}
                    </div>`:""}

                    <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl space-y-2 text-xs">
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Subtotal Produk</p><p class="font-bold text-slate-800 dark:text-white">${g(F)}</p></div>
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Ongkos Kirim</p><p class="font-bold text-slate-800 dark:text-white">${g(Z)}</p></div>
                        ${O>0?`<div class="flex justify-between text-[var(--color-primary)]"><p>Diskon Ongkir</p><p class="font-bold">-${g(O)}</p></div>`:""}
                        ${q>0?`<div class="flex justify-between text-rose-500"><p>Diskon Promo</p><p class="font-bold">-${g(q)}</p></div>`:""}
                        ${m>0?`<div class="flex justify-between text-emerald-600 dark:text-emerald-400"><p>Diskon Poin Member</p><p class="font-bold">-${g(m)}</p></div>`:""}
                        ${w&&u.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Biaya Admin PayLater</p><p class="font-bold text-slate-800 dark:text-white">+${g(u.paylaterAdminFee)}</p></div>`:""}
                        ${w&&u.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Biaya Penanganan / Layanan</p><p class="font-bold text-slate-800 dark:text-white">+${g(u.paylaterServiceFee)}</p></div>`:""}
                        ${u.hasPpn?`
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>DPP (Dasar Pengenaan Pajak)</p><p class="font-bold text-slate-800 dark:text-white">${g(u.dppAmount)}</p></div>
                        <div class="flex justify-between text-amber-600 dark:text-amber-400"><p>${f(u.ppnLabel)}</p><p class="font-bold">${u.ppnAmount>0?(u.isInclusive?"":"+")+g(u.ppnAmount):"Rp 0"}</p></div>
                        `:""}
                        <div class="flex justify-between items-center border-t border-dashed border-slate-300 dark:border-slate-700 pt-3 mt-2">
                            <p class="font-bold text-slate-800 dark:text-white uppercase tracking-wider">Total Tagihan</p>
                            <p class="text-lg font-bold text-[var(--color-primary)]">${g(ge)}</p>
                        </div>
                        ${(()=>{if(!w)return"";const E=Array.isArray(t.payment?.paylaterSchedule)&&t.payment.paylaterSchedule.length>0?t.payment.paylaterSchedule:null,oe=t.payment?.paylaterMonths||(E?E.length:1),ae=t.payment?.paylaterMonthlyInstallment||(oe>0?Math.round(ge/oe):ge);let se="";return E&&E.length>0&&(se=`
                                <div class="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-700/80 space-y-2">
                                    <p class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                        <i class="fa-solid fa-calendar-days text-[var(--color-primary)]"></i> Rencana Jadwal Angsuran Anda:
                                    </p>
                                    <div class="space-y-2">
                                        ${E.map((T,ue)=>{const W=T.installmentIndex||T.installmentNo||T.installmentNumber||T.month||ue+1,N=T.dueDateFormatted||T.dueDateStr||(T.dueDate?new Date(T.dueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"),he=parseFloat(T.total||T.totalMonthly||T.totalInstallment)||ae;return`
                                            <div class="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 flex items-center justify-between gap-3 shadow-2xs">
                                                <div class="flex items-center gap-2.5 min-w-0">
                                                    <div class="w-8 h-8 rounded-xl bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] font-black text-xs flex items-center justify-center shrink-0">
                                                        ${W}
                                                    </div>
                                                    <div class="min-w-0">
                                                        <p class="text-xs font-bold text-slate-800 dark:text-white leading-tight">Bulan ke-${W}</p>
                                                        <p class="text-[10px] text-slate-400 font-mono mt-0.5">Jatuh Tempo: ${N}</p>
                                                    </div>
                                                </div>
                                                <div class="text-right shrink-0">
                                                    <p class="text-xs font-black font-mono text-[var(--color-primary)]">${g(he)}</p>
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
                                    <span class="font-mono text-sm">${g(ae)}/bln</span>
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
        `,s||(o.classList.contains("opacity-0")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("customerOrder"),document.body.classList.add("overflow-hidden"),Fe(o,"order-detail-content"))}catch(o){console.error("Error Render HTML Modal:",o),A("Gagal menampilkan detail. Coba lagi.")}},Tr=(e=!1)=>{const t=()=>{const a=document.getElementById("order-detail-modal"),s=document.getElementById("order-detail-content");Ce(a,s,()=>{document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none):not(#order-detail-modal)')||document.body.classList.remove("overflow-hidden")})};typeof window.requestCloseModal=="function"?window.requestCloseModal("customerOrder",e,t):t()};window.attachMyOrdersRealtime=ta;window.detachMyOrdersRealtime=ea;window.renderMyOrders=We;window.checkOrderStatus=vr;window.trackOrderManual=Pr;window.clearMyOrders=Sr;window.openCustomerOrderDetail=pt;window.renderOrderDetailModal=Ye;window.closeCustomerOrderDetailModal=Tr;window.reviewPhotoFile=null;window.reviewRating=0;const Mr=(e,t,a,s,o)=>{const r=decodeURIComponent(a||""),i=decodeURIComponent(s||""),d=decodeURIComponent(o||"");let n=document.getElementById("review-modal");n||(n=document.createElement("div"),n.id="review-modal",n.className="fixed inset-0 z-[120] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",n.onclick=p=>{p.target===n&&St()},document.body.appendChild(n)),window.reviewPhotoFile=null,window.reviewRating=0,n.innerHTML=`
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
                        ${[1,2,3,4,5].map(p=>`<button type="button" onclick="setReviewRating(${p})" class="review-star text-3xl text-slate-300 dark:text-slate-600 transition-all hover:scale-110" data-star="${p}"><i class="fa-solid fa-star"></i></button>`).join("")}
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
        </div>`,l("review-submit-btn").onclick=()=>Tt(e,t,r,i,d),n.style.opacity="0",n.style.display="flex",requestAnimationFrame(()=>{n.style.transition="opacity 0.25s ease",n.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("review")},Ar=e=>{window.reviewRating=e,document.querySelectorAll(".review-star").forEach(t=>{const a=parseInt(t.dataset.star);t.classList.toggle("text-amber-400",a<=e),t.classList.toggle("text-slate-300",a>e),t.classList.toggle("dark:text-slate-600",a>e)})},$r=e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/")){A("Hanya file gambar yang diizinkan!");return}if(t.size>5*1024*1024){A("Ukuran gambar max 5MB!");return}window.reviewPhotoFile=t;const a=new FileReader;a.onload=s=>{l("review-photo-preview").src=s.target.result,xe("review-photo-preview-wrap"),I("review-photo-btn")},a.readAsDataURL(t)},Lr=()=>{window.reviewPhotoFile=null,I("review-photo-preview-wrap"),xe("review-photo-btn");const e=l("review-photo-input");e&&(e.value="")},St=(e=!1)=>{const t=document.getElementById("review-modal");if(!t||t.style.display==="none")return;const a=()=>{t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250)};if(typeof Se=="function")Se("review",e,a);else if(typeof window.requestCloseModal=="function")window.requestCloseModal("review",e,a);else{if(!e&&Ee.length&&Ee[Ee.length-1]==="review"){Ee.pop();try{history.back()}catch{}}a()}},Tt=async(e,t,a,s,o)=>{if(!window.reviewRating||window.reviewRating<1)return A("Silakan beri bintang terlebih dahulu!");if(!ft){fe(!0),Pe("Mengirim ulasan...");try{let r="";if(window.reviewPhotoFile&&typeof window.uploadBuktiToGDrive=="function"){const n=await window.uploadBuktiToGDrive(window.reviewPhotoFile,"review-"+e);n?r=n:A("Foto gagal diupload, ulasan tetap dikirim tanpa foto.")}const i=Date.now(),d={id:i,orderId:e||"",productId:t??0,variantName:a||"",productName:s||"",customerName:o||"Pelanggan",rating:window.reviewRating,text:ve("review-text")||"",photoUrl:r||"",adminReply:"",isVisible:!0,createdAt:je.firestore.FieldValue.serverTimestamp()};await J.collection("freshmart").doc("cms_data").collection("reviews").doc(i.toString()).set(d),ut.delete(t),St(),A("Terima kasih atas ulasan Anda!"),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(r){console.error("Gagal mengirim ulasan:",r),A("Gagal mengirim ulasan: "+(r.message||"Error tidak diketahui"))}finally{fe(!1),de()}}},ut=new Map,Er=5*60*1e3,Dr=async e=>{if(!l("product-modal-reviews-container"))return;const a=o=>{const r=o.length?o.reduce((p,w)=>p+(parseFloat(w.rating)||0),0)/o.length:0,i=p=>Array.from({length:5},(w,P)=>`<i class="fa-solid fa-star ${P<Math.round(p)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join("");let d=`
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2"><i class="fa-solid fa-comment-dots text-amber-400"></i> Ulasan Pelanggan</h4>
                ${o.length?`<div class="flex items-center gap-1.5"><span class="flex text-xs">${i(r)}</span><span class="text-xs font-bold text-slate-600 dark:text-slate-300">${r.toFixed(1)}</span><span class="text-[10px] font-bold text-slate-400">(${o.length})</span></div>`:""}
            </div>`;if(!o.length){we("product-modal-reviews-container",d+'<p class="text-[11px] font-bold text-slate-400 text-center py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">Belum ada ulasan untuk produk ini.</p>');return}const n=o.map(p=>{let w="";try{p.createdAt&&p.createdAt.toDate&&(w=p.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}))}catch{}return`
            <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div class="flex items-center justify-between mb-1.5">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${f(p.customerName||"Pelanggan")}</p>
                    <span class="text-[9px] font-bold text-slate-400">${w}</span>
                </div>
                <div class="flex text-[11px] mb-2">${i(p.rating)}</div>
                ${p.variantName?`<p class="text-[10px] font-bold text-slate-400 mb-1.5">Varian: ${f(p.variantName)}</p>`:""}
                ${p.text?`<p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${f(p.text)}</p>`:""}
                ${p.photoUrl?`<div class="w-16 h-16 rounded-xl overflow-hidden mb-3 border border-slate-200 dark:border-slate-700"><img src="${f(p.photoUrl)}" class="w-full h-full object-cover cursor-pointer" onclick="window.open('${f(p.photoUrl)}','_blank')" alt="Foto ulasan"></div>`:""}
                ${p.adminReply?`
                <div class="mt-2.5 p-3 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.2)] rounded-xl">
                    <p class="text-[10px] font-bold text-[var(--color-primary-dark)] dark:text-[var(--color-primary)] mb-1 flex items-center gap-1"><i class="fa-solid fa-reply"></i> Balasan Penjual</p>
                    <p class="text-xs text-slate-600 dark:text-slate-300">${f(p.adminReply)}</p>
                </div>`:""}
            </div>`}).join("");we("product-modal-reviews-container",d+`<div class="space-y-3">${n}</div>`)},s=ut.get(e);if(s&&Date.now()-s.timestamp<Er){a(s.data);return}we("product-modal-reviews-container",'<div class="text-center py-6"><i class="fa-solid fa-spinner fa-spin text-xl text-slate-300"></i></div>');try{let r=(await J.collection("freshmart").doc("cms_data").collection("reviews").where("productId","==",e).get()).docs.map(i=>i.data()).filter(i=>i.isVisible!==!1);r.sort((i,d)=>{const n=i.createdAt&&i.createdAt.toMillis?i.createdAt.toMillis():0;return(d.createdAt&&d.createdAt.toMillis?d.createdAt.toMillis():0)-n}),ut.set(e,{data:r,timestamp:Date.now()}),a(r)}catch(o){console.warn("Gagal memuat ulasan:",o),we("product-modal-reviews-container",'<p class="text-[11px] text-slate-400 text-center py-4">Belum ada ulasan yang dapat dimuat.</p>')}};window.openReviewModal=Mr;window.setReviewRating=Ar;window.handleReviewPhotoSelect=$r;window.removeReviewPhoto=Lr;window.closeReviewModal=St;window.submitReview=Tt;window.submitProductReview=Tt;window.loadProductReviews=Dr;const Fr="admgaffidigital/tokoputri",Cr=`https://api.github.com/repos/${Fr}/releases/latest`,mt="https://github.com/admgaffidigital/tokoputri/releases/latest/download/TokoPutri.OfficialStore.apk";let Le=null,rt=!1;const Rr=e=>!e||isNaN(e)?"8.0 MB":`${(e/(1024*1024)).toFixed(1)} MB`,Br=e=>{if(!e)return"Terbaru";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return"Terbaru"}},Ir=async()=>{if(Le)return Le;if(rt)return null;const e=dt(b)||"v1.10.92";rt=!0;try{const t=await fetch(Cr,{headers:{Accept:"application/vnd.github.v3+json"},cache:"no-store"});if(t.ok){const a=await t.json(),s=a.assets?.find(d=>d.name?.toLowerCase().endsWith(".apk"))||a.assets?.[0],o=a.tag_name||e,r=Qs(o,e)>0,i=r?e:o;Le={tagName:i,name:`Toko Putri ( Official Store ) ${i}`,publishedAt:r?"08 Okt 2026":Br(a.published_at),fileSize:s?Rr(s.size):"16.3 MB",downloadUrl:s?.browser_download_url||mt,notes:a.body||"",isLiveFetched:!0}}else throw new Error(`GitHub API HTTP ${t.status}`)}catch{const a=dt(b)||"v1.10.92";Le={tagName:a,name:`Toko Putri ( Official Store ) ${a}`,publishedAt:"08 Okt 2026",fileSize:"16.3 MB",downloadUrl:mt,notes:"",isLiveFetched:!1}}finally{rt=!1}return Le},Or=()=>{let e=l("app-download-modal");return e||(e=document.createElement("div"),e.id="app-download-modal",e.className="fixed inset-0 z-[125] bg-slate-950/85 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&aa()},e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e)},jr=async()=>{const e=Or();if(!e)return;Re("appDownload"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const a=l("app-download-modal-box");a&&a.classList.remove("translate-y-full","sm:translate-y-8")}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light");const t=await Ir();if(t){const a=l("app-modal-version-tag"),s=l("app-modal-filesize"),o=l("app-modal-published-date");a&&(a.textContent=t.tagName),s&&(s.innerHTML=`<span>${f(t.fileSize)}</span>`),o&&(o.textContent=`Rilis: ${f(t.publishedAt)}`)}},aa=(e=!1)=>{const t=l("app-download-modal");!t||t.style.display==="none"||Se("appDownload",e,()=>{t.classList.add("opacity-0");const a=l("app-download-modal-box");a&&a.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{t.style.display="none"},300)})},_r=()=>{const e=l("btn-download-apk-action"),t=l("btn-download-apk-icon"),a=l("btn-download-apk-text");e&&e.classList.add("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-spinner fa-spin"),a&&(a.textContent="Menghubungkan ke Server Rilis..."),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.showToast=="function"&&window.showToast("Memulai unduhan TokoPutri(OfficialStore).apk terbaru. Cek panel notifikasi HP Anda!");const s=Le?.downloadUrl||mt,o=document.createElement("a");o.href=s,o.setAttribute("download","TokoPutri(OfficialStore).apk"),o.target="_blank",o.rel="noopener noreferrer",document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>{if(e&&e.classList.remove("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-circle-check text-white"),a){const r=Le?.tagName||dt(b)||"v1.9.49";a.textContent=`Unduh Ulang APK (${r})`}},2500)};window.openAppDownloadModal=jr;window.closeAppDownloadModal=aa;window.downloadLatestApk=_r;window.setCat=e=>{Nt(e),wt(1),typeof window.rCat=="function"&&window.rCat()};window.setBrand=e=>{Ut(e),wt(1),typeof window.rCat=="function"&&window.rCat()};const Nr=()=>{let e="",t=lt==="Semua Produk";e+=`
    <button onclick="setCat('Semua Produk'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-colors">
            <i class="fa-solid fa-layer-group text-base sm:text-lg"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA</span>
        <i class="fa-solid fa-circle-check text-base ${t?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
    </button>`,b.categories.forEach(r=>{let i=lt===r.name,d=r.img?`<img loading="lazy" src="${f(r.img)}" alt="${f(r.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Cat'">`:'<i class="fa-solid fa-box text-base sm:text-lg"></i>';e+=`
        <button onclick="setCat('${f(r.name)}'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden border border-slate-200 dark:border-slate-600">
                ${d}
            </div>
            <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 line-clamp-1 ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${f(r.name)}</span>
            <i class="fa-solid fa-circle-check text-base ${i?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
        </button>`});const a=l("modal-category-list");a&&(a.innerHTML=`<div class="flex flex-col gap-2.5 pb-6 w-full">${e}</div>`);const s=l("category-modal"),o=l("category-modal-content");s&&o&&(s.classList.contains("hidden")&&Re("category"),Fe(s,o))};window.openCategoryModal=Nr;window.openBrandModal=()=>{let e="",t=nt==="Semua Merek";e+=`
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA MEREK</span>
    </button>`,b.brands.forEach(r=>{let i=nt===r.name,d=r.img?`<img loading="lazy" src="${f(r.img)}" alt="${f(r.name)}" class="w-full h-full object-contain p-1.5" >`:'<i class="fa-solid fa-tag text-lg sm:text-xl"></i>';e+=`
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
    `,t=b?.store?.terms,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;we("terms-modal-content-body",a);const s=l("terms-modal"),o=l("terms-modal-content");s&&o&&(s.classList.contains("hidden")&&Re("terms"),Fe(s,o))};window.closeTermsModal=(e=!1)=>{const t=l("terms-modal"),a=l("terms-modal-content");t&&a&&Se("terms",e,()=>{Ce(t,a)})};window.openPrivacyModal=()=>{const e=`
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
    `,t=b?.store?.privacy,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;we("privacy-modal-content-body",a);const s=l("privacy-modal"),o=l("privacy-modal-content");s&&o&&(s.classList.contains("hidden")&&Re("privacy"),Fe(s,o))};window.closePrivacyModal=(e=!1)=>{const t=l("privacy-modal"),a=l("privacy-modal-content");t&&a&&Se("privacy",e,()=>{Ce(t,a)})};window.closeQuickMenuModal=(e=!1)=>{const t=l("quickmenu-modal"),a=l("quickmenu-modal-content");t&&a&&Se("quickmenu",e,()=>{Ce(t,a)})};window.switchGuideTab=(e="customer")=>{["customer","pos","admin"].forEach(s=>{const o=l(`guide-tab-btn-${s}`),r=l(`guide-section-${s}`);s===e?(o&&(o.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-extrabold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer primary-bg text-white"),r&&r.classList.remove("hidden")):(o&&(o.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"),r&&r.classList.add("hidden"))});const a=document.querySelector("#shopping-guide-modal .custom-scrollbar");a&&(a.scrollTop=0)};window.openShoppingGuideModal=(e="customer")=>{const t=l("shopping-guide-modal"),a=l("shopping-guide-modal-content");t&&a&&(typeof window.switchGuideTab=="function"&&window.switchGuideTab(e),t.classList.contains("hidden")&&Re("guide"),Fe(t,a))};window.closeShoppingGuideModal=(e=!1)=>{const t=l("shopping-guide-modal"),a=l("shopping-guide-modal-content");t&&a&&Se("guide",e,()=>{Ce(t,a)})};window.navigateFromQuickMenu=e=>{closeQuickMenuModal(!0);const t=Ee.indexOf("quickmenu");t>-1&&Ee.splice(t,1),typeof e=="function"?(history.replaceState({view:da},"",window.location.href),e()):(history.replaceState({view:e},"",window.location.href),ca(e,!0))};let Rt=!1,Je=null;const et=async()=>Rt?!0:Je||(Je=Promise.all([Xe(()=>import("./module-admin-C7m5adIG.js").then(e=>e.h),__vite__mapDeps([0,1,2,3,4,5,6,7])),Xe(()=>import("./module-admin-C7m5adIG.js").then(e=>e.j),__vite__mapDeps([0,1,2,3,4,5,6,7]))]).then(()=>(Rt=!0,!0)),Je);window.ensureAdminLoaded=et;window.checkAdminAccess=async()=>{if(Pe("Membuka Panel Owner..."),await et(),de(),typeof window.__checkAdminAccessReal=="function")return window.__checkAdminAccessReal()};typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);typeof window<"u"&&(window.AndroidNativeApp||window.Capacitor||window.location&&(window.location.protocol==="capacitor:"||window.location.protocol==="ionic:"))&&document.documentElement.classList.add("is-native-app");pa();window.firebase=je;window.db=J;window.DOMPurify=ys;window.ensureScriptLoaded=ua;if(typeof window<"u"){const e=window.print?window.print.bind(window):null;window.print=function(){window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():e&&e()}}window.uiPalettes=As;window.hexToRgb=$s;window.applyUITheme=Gt;window.toggleTheme=Ls;window.applyBackgroundStyle=qt;Es();const Ur=localStorage.getItem("freshmart_ui_theme")||"emerald";Gt(Ur,localStorage.getItem("freshmart_theme_color"));const Bt=()=>{Ks();const e=localStorage.getItem("freshmart_bg_style")||"minimalist",t=localStorage.getItem("freshmart_bg_custom_url")||"";qt(e,t),Hs()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Bt):Bt();window.onerror=function(e,t,a,s,o){return console.error("Global Error Caught:",e,"at",a,":",s),typeof showToast=="function"&&showToast("Ops, ada kendala sistem."),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Promise Rejection Sentinel:",e.reason)});window.addEventListener("vite:preloadError",function(e){console.warn("[Vite] Chunk preload failed (new deployment detected). Auto-reloading...",e);const t="freshmart_preload_reload",a=sessionStorage.getItem(t),s=Date.now();(!a||s-parseInt(a,10)>1e4)&&(sessionStorage.setItem(t,String(s)),window.location.reload())});window.updateSEO=ma;window.injectJSONLD=fa;window.rewardStatusLabel=xt;window.getYouTubeId=ba;window.parseVideoUrl=xa;window.fixDriveVideo=wa;window.fixDriveVideoPreview=ga;let It=Wt;window.calcTaxDetails=e=>{const t=b?.store||{},a=t.ppnEnabled===!0||t.ppnEnabled==="true",s=t.ppnRate!==void 0&&t.ppnRate!==null&&!isNaN(parseFloat(t.ppnRate))?Math.max(0,parseFloat(t.ppnRate)):11,o=t.ppnType||"exclusive",r=t.ppnShowZero!==!1,i=t.ppnTaxLabel||"PPN";if(!a||e<=0)return{ppnEnabled:!1,ppnRate:0,ppnType:o,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0,ppnShowZero:!1,ppnLabel:"PPN"};if(s===0)return{ppnEnabled:!0,ppnRate:0,ppnType:o,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0,ppnShowZero:r,ppnLabel:i};if(o==="inclusive"){const d=Math.round(e*100/(100+s)),n=e-d;return{ppnEnabled:!0,ppnRate:s,ppnType:"inclusive",ppnAmount:n,dppAmount:d,grandTotalAdd:0,ppnShowZero:r,ppnLabel:i}}else{const d=Math.round(e*s/100);return{ppnEnabled:!0,ppnRate:s,ppnType:"exclusive",ppnAmount:d,dppAmount:Math.max(0,e),grandTotalAdd:d,ppnShowZero:r,ppnLabel:i}}};typeof requestIdleCallback<"u"?requestIdleCallback(At,{timeout:5e3}):setTimeout(At,3e3);window.isAdm=!1;history.replaceState({view:"view-catalog"},"","");window.addEventListener("DOMContentLoaded",async()=>{try{Kt()}catch(e){console.warn("[NativeMobile] Error:",e)}await Ds();try{Fs()}catch(e){console.warn("[syncAppMeta] Error:",e)}Cs(),Rs(),Et(),window.attachRewardsRealtime=Et,Xe(()=>import("./module-pos-DXxDEEkv.js").then(e=>e.W),__vite__mapDeps([4,1,2,3,5,6])).then(e=>{typeof e.initPOSAuth=="function"&&e.initPOSAuth()}).catch(e=>console.warn("[POS Auth] Gagal inisialisasi:",e)),at.onAuthStateChanged(async e=>{if(!Ws()){if(e&&e.uid!==He){try{const t=await J.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(e.uid).get();if(t.exists){const a=t.data()||{};if(a.isActive===!1){if(st(),typeof window.detachAllAdminListenersBeforeSignOut=="function")try{window.detachAllAdminListenersBeforeSignOut()}catch{}else{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}}await at.signOut();return}const s={uid:e.uid,name:a.name||e.email,email:a.email||e.email,role:a.role||Ve.CASHIER,permissions:a.permissions||null,isActive:!0};if($t(s),s.role===Ve.CASHIER){Xe(()=>import("./module-pos-DXxDEEkv.js").then(r=>r.W),__vite__mapDeps([4,1,2,3,5,6])).then(r=>{typeof r.setCashierSession=="function"&&r.setCashierSession(s)}).catch(()=>{}),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();return}await et(),window.isAdm=!0,window.__localIsAdm=!0,Dt(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();let o=document.getElementById("view-admin-login");o&&!o.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu());return}}catch{}if(st(),typeof window.detachAllAdminListenersBeforeSignOut=="function")try{window.detachAllAdminListenersBeforeSignOut()}catch{}else{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}}await at.signOut();return}if(e&&e.uid===He){$t({uid:He,name:"Owner Toko",email:e.email,role:Ve.OWNER,isActive:!0});try{sessionStorage.setItem("pos_cashier_session",JSON.stringify({uid:He,name:"Owner Toko",email:e.email,role:Ve.OWNER}))}catch{}await et(),await Vs(),zs(),window.isAdm=!0,window.__localIsAdm=!0,Dt(),typeof window.updatePOSHeaderIcon=="function"?window.updatePOSHeaderIcon():typeof window.initPOSAuth=="function"&&window.initPOSAuth();let t=document.getElementById("view-admin-login");t&&!t.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu(),showToast("Sesi Owner Dipulihkan! Selamat Datang."))}else{if(Js(),localStorage.removeItem("freshmart_admin_session_id"),st(),window.isAdm=!1,window.__localIsAdm=!1,Bs(),typeof window.detachAllAdminListenersBeforeSignOut=="function")try{window.detachAllAdminListenersBeforeSignOut()}catch{}else{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()}}})});window.el=l;window.show=xe;window.hide=I;window.toggleCls=ce;window.setIn=re;window.setH=we;window.setV=Ie;window.getV=ve;window.esc=f;window.fixD=bt;window.fCur=g;window.fAccounting=ha;window.sL=ot;window.ssL=Qe;window.defaultFbC=gt;window.fbC=gt;window.FIREBASE_CONFIG=gt;window.defApp=ka;window.ADMIN_UID=He;window.sLoad=Pe;window.hLoad=de;window.sanitizeCart=Is;window.initNativeMobileEngine=Kt;window.triggerHaptic=ya;window.checkAndEnforceSubscriptionLockout=Os;window.renderSubscriptionNoticeInCMS=js;window.openRenewalModal=_s;window.closeRenewalModal=Ns;window.verifyAndApplyLicenseKey=Us;const L=(e,t,a)=>{try{Object.defineProperty(window,e,{get:t,set:a,configurable:!0})}catch{}};L("GAS_UPLOAD_URL",()=>It,e=>{It=e});L("confirmCb",()=>va,e=>{us(e)});L("appData",()=>b,e=>{Pa(e)});L("cart",()=>H,e=>{Ot(e)});L("wishlist",()=>Ta,e=>{Sa(e)});L("myOrders",()=>G,e=>{tt(e)});L("cust",()=>c,e=>{jt(e)});L("currentMember",()=>R,e=>{it(e)});L("selectedReward",()=>De,e=>{Oe(e)});L("memberCheckTimer",()=>Ma,e=>{ms(e)});L("aCat",()=>lt,e=>{Nt(e)});L("aBrand",()=>nt,e=>{Ut(e)});L("sQ",()=>$a,e=>{Aa(e)});L("cSort",()=>Ea,e=>{La(e)});L("cView",()=>Fa,e=>{Da(e)});L("cPage",()=>Ca,e=>{wt(e)});L("iPP",()=>Ba,e=>{Ra(e)});L("cTab",()=>Ia,e=>{fs(e)});L("aSq",()=>Oa,e=>{bs(e)});L("eId",()=>ja,e=>{xs(e)});L("cProd",()=>Na,e=>{_a(e)});L("cVar",()=>Ka,e=>{Ua(e)});L("tVars",()=>Ha,e=>{ws(e)});L("tWhol",()=>Ga,e=>{gs(e)});L("tSpec",()=>qa,e=>{hs(e)});L("cQty",()=>Va,e=>{Wa(e)});L("oMods",()=>Ee,e=>{za(e)});L("aOrdLst",()=>Qa,e=>{Ja(e)});L("aCustLst",()=>Ya,e=>{Za(e)});L("aRevLst",()=>es,e=>{Xa(e)});L("gOrds",()=>as,e=>{ts(e)});L("gReviews",()=>rs,e=>{ss(e)});L("cVOrd",()=>is,e=>{os(e)});L("vouch",()=>y,e=>{Me(e)});L("toastT",()=>ns,e=>{ks(e)});L("isSaving",()=>ft,e=>{fe(e)});L("reviewFilterMode",()=>ds,e=>{ls(e)});L("lastReportPeriod",()=>ps,e=>{cs(e)});
