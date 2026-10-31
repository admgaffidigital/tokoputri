const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./module-admin-DjN_Rq1a.js","./module-print-E_HtlGZ3.js","./vendor-firebase-core-D2OF5R23.js","./vendor-firebase-db-BIUZcnOd.js","./module-pos-BVj6x9nJ.js","./module-member-P3CVtlvo.js","./module-faq-BOfvqe00.js","./vendor-sortable-DzmX_rHT.js"])))=>i.map(i=>d[i]);
import{a as b,c as O,g as ge,d,e as l,aR as w,j as ye,h as R,a4 as le,f as y,a1 as se,b as we,i as x,ab as Bt,aa as Ut,y as Te,s as fe,U as st,aN as ze,ak as Be,V as ee,l as he,n as Z,p as I,q as W,t as N,aS as Ke,w as Je,aj as yt,G as Fe,aT as vt,x as Le,k as F,m as rt,aq as Nt,B as Pt,$ as it,H as Ht,Z as Gt,o as Me,v as Ae,r as ke,af as Se,ai as De,aA as St,aC as ot,aD as Tt,aw as Qe,au as Kt,aU as qt,av as Ze,aV as Vt,X as Wt,aW as zt,aX as Jt,ar as Qt,aK as Zt,aM as Xt,aL as Yt,aY as mt,aZ as Mt,_ as Ne,A as qe,J as Ee,F as Ve,R as _e,K as ut,a3 as ea,aO as nt,a2 as ta,a_ as aa,a$ as sa,b0 as ra,b1 as ia,al as oa,b2 as na,aH as la,aE as da,aI as ca,aF as pa,aJ as ma,aG as ua,ax as fa,b3 as wa,ay as ba,b4 as xa,b5 as ga,b6 as ha,ao as ka,am as ya,ap as va,an as Pa,b7 as Sa,b8 as Ta,b9 as Ma,at as Aa,as as Da,ba as $a,M as Ia,L as Fa,O as La,N as Ca,Q as Ra,P as Ea,a0 as Oa,u as _a,ag as ja,a7 as Ba,Y as Ua,W as Na,bb as Ha,a9 as Ga,a8 as Ka,S as qa,I as Va,bc as Wa,bd as za,T as Ja,ah as Qa,be as Za,bf as Xa,bg as Ya,bh as es,bi as ts}from"./module-print-E_HtlGZ3.js";import{f as Ce}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import{p as as}from"./vendor-utils-DqNA57iZ.js";import{g as At,w as ss,x as ft,h as rs,y as is,z as os,A as ns,u as ls,B as ds,e as Dt,C as cs,f as $t,D as ps,E as ms,v as us,F as fs,G as ws,H as wt,a as bt,d as bs,I as xs,J as gs,K as hs,L as ks,M as ys,N as vs,O as Ps,P as Ss}from"./module-pos-BVj6x9nJ.js";import{G as Ts,a as It,u as Ms}from"./module-member-P3CVtlvo.js";import{i as As,a as Ds,b as $s,d as Is}from"./module-admin-DjN_Rq1a.js";import{a as Xe,c as Fs}from"./module-faq-BOfvqe00.js";import"./vendor-sortable-DzmX_rHT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();const Ls=()=>{const e=l("toggle-droppoint"),t=l("droppoint-form");if(!(!e||!t))if(e.checked)t.classList.remove("hidden");else{t.classList.add("hidden"),d.dropPoint=null;const a=l("dp-location-status");a&&a.classList.add("hidden");const r=l("btn-dp-location");l("text-dp-location"),r&&(r.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>')}},Cs=()=>{if(!navigator.geolocation){typeof window.showToast=="function"&&window.showToast("GPS tidak didukung");return}const e=l("btn-dp-location");e&&(e.innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i> Mengambil GPS...'),navigator.geolocation.getCurrentPosition(t=>{d.dropPoint||(d.dropPoint={}),d.dropPoint.lat=t.coords.latitude,d.dropPoint.lng=t.coords.longitude;const a=l("dp-location-status");a&&a.classList.remove("hidden"),e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">GPS Berhasil! Tap untuk Update</span>'),typeof window.showToast=="function"&&window.showToast("GPS Lokasi Tujuan Berhasil!")},()=>{e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>'),typeof window.showToast=="function"&&window.showToast("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})},Ft=e=>{if(!e||e.trim().length<5)return;const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){d.dropPoint||(d.dropPoint={}),d.dropPoint.lat=parseFloat(a.lat),d.dropPoint.lng=parseFloat(a.lng);const r=l("dp-location-status");r&&r.classList.remove("hidden"),typeof window.showToast=="function"&&window.showToast("Koordinat Lokasi Tujuan berhasil!")}},Rs=async()=>{try{const e=await navigator.clipboard.readText(),t=l("dp-maps-input");t&&(t.value=e,Ft(e))}catch{typeof window.showToast=="function"&&window.showToast("Gagal membaca clipboard")}},Es=()=>{if(b.store.isDeliveryEnabled===!1&&b.store.isPickupEnabled===!1){typeof window.showToast=="function"&&window.showToast("Toko tutup!");return}if(!O||O.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}const e=b.store.useStock===!0||b.store.useStock==="true";for(const i of O){const s=b.products.find(g=>String(g.id)===String(i.id));if(!s||s.isActive===!1||s.isActive==="false"){typeof window.showToast=="function"&&window.showToast(`Produk "${i.name}" sedang tidak tersedia atau dinonaktifkan.`);return}if(!!(s.poTime&&String(s.poTime).trim()))continue;const c=parseFloat(i.qty)||0,o=parseFloat(i.unitMultiplier)||1,m=c*o;if(i.variantName){const g=(s.variants||[]).find(de=>de.name===i.variantName);if(!g||g.isActive===!1||g.isActive==="false"){typeof window.showToast=="function"&&window.showToast(`Varian "${i.variantName}" untuk produk "${i.name}" sedang tidak tersedia.`);return}const M=g.stock!=null&&g.stock!==""?g.stock:g.stok!=null&&g.stok!==""?g.stok:null,k=M!=null&&!isNaN(parseFloat(M)),v=k?parseFloat(M):0;if(e||k){if(v<=0){typeof window.showToast=="function"&&window.showToast(`Produk "${i.name} (${i.variantName})" stok habis, tidak dapat membuat transaksi.`);return}if(v<m){typeof window.showToast=="function"&&window.showToast(`Persediaan "${i.name} (${i.variantName})" tidak mencukupi (tersisa ${v} unit).`);return}}}else{const g=s.stock!=null&&s.stock!==""?s.stock:s.stok!=null&&s.stok!==""?s.stok:null,M=g!=null&&!isNaN(parseFloat(g)),k=M?parseFloat(g):0;if(e||M){if(k<=0){typeof window.showToast=="function"&&window.showToast(`Produk "${i.name}" stok habis, tidak dapat membuat transaksi.`);return}if(k<m){const _=o>1?Math.floor(k/o):k;typeof window.showToast=="function"&&window.showToast(`Persediaan "${i.name}" tidak mencukupi (tersisa ${_} ${i.unit||"unit"}).`);return}}}}const t=ge("cust-name"),a=(document.querySelector('input[name="delivery-method"]:checked')||{}).value;if(!t||!a){typeof window.showToast=="function"&&window.showToast("Lengkapi form nama!");return}let r=ge("cust-wa").replace(/\D/g,"");if(!r||r.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp wajib diisi! (min. 9 digit)");return}if(r.startsWith("0")?r="62"+r.substring(1):r.startsWith("62")||(r="62"+r),d.name=t,d.deliveryMethod=a,d.note=ge("cust-note"),d.wa=r,a==="delivery"){if(d.address=ge("cust-address"),!d.lat||!d.lng){const c=l("cust-maps-input")?.value;c&&typeof window.handleCustomerMapsInput=="function"&&window.handleCustomerMapsInput(c)}if(!d.address||!d.lat||!d.lng){typeof window.showToast=="function"&&window.showToast("Alamat & GPS wajib!");return}const i=typeof window.getDist=="function"?window.getDist:()=>0;d.distance=i(parseFloat(b.store.lat||0),parseFloat(b.store.lng||0),d.lat,d.lng)||0;const s=l("toggle-droppoint");if(s&&s.checked){let c=ge("dp-receiver-name").trim(),o=ge("dp-receiver-wa").replace(/\D/g,""),m=ge("dp-address").trim();if(!c){typeof window.showToast=="function"&&window.showToast("Nama penerima di lokasi tujuan wajib diisi!");return}if(!o||o.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WA penerima di lokasi tujuan wajib diisi (min. 9 digit)!");return}if(!m){typeof window.showToast=="function"&&window.showToast("Alamat lokasi tujuan wajib diisi!");return}if(!d.dropPoint||!d.dropPoint.lat||!d.dropPoint.lng){typeof window.showToast=="function"&&window.showToast("GPS / Koordinat lokasi tujuan wajib diisi untuk kalkulasi ongkir!");return}o.startsWith("0")?o="62"+o.substring(1):o.startsWith("62")||(o="62"+o),d.dropPoint.name=c,d.dropPoint.wa=o,d.dropPoint.address=m,d.distance=i(parseFloat(b.store.lat||0),parseFloat(b.store.lng||0),d.dropPoint.lat,d.dropPoint.lng)||0}else d.dropPoint=null}else d.address="Ambil di Toko",d.distance=0,d.dropPoint=null;w&&w.type&&w.type.includes("shipping")&&a!=="delivery"&&ye(null),l("voucher-input")&&!w&&(l("voucher-input").value="",R("voucher-msg-container")),typeof window.changeView=="function"&&window.changeView("view-payment")},lt=()=>{le("address-container","hidden",(document.querySelector('input[name="delivery-method"]:checked')||{}).value==="pickup")},Lt=()=>{const e=l("tnc-checkbox"),t=l("btn-process-order");!e||!t||(e.checked?t.classList.remove("btn-disabled"):t.classList.add("btn-disabled"))},Ct=()=>{if(!O.length){typeof window.showToast=="function"&&window.showToast("Keranjang belanja kosong!"),typeof window.changeView=="function"&&window.changeView("view-catalog",!0);return}if(!d.name){typeof window.showToast=="function"&&window.showToast("Lengkapi data pengiriman terlebih dahulu!"),typeof window.changeView=="function"&&window.changeView("view-checkout",!0);return}const e=typeof window.getEffP=="function"?window.getEffP:p=>p.price||0,t=O.reduce((p,C)=>p+(parseFloat(e(C))||0)*(parseFloat(C.qty)||0),0);let a=0,r=0,i=0;if(d.deliveryMethod==="delivery"&&(a=Math.ceil((parseFloat(d.distance)||0)*(parseFloat(b.store.costPerKm)||0)/500)*500),w&&(w.minPurchase&&parseFloat(w.minPurchase)>0&&t<parseFloat(w.minPurchase)?(ye(null),R("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast(`Voucher dibatalkan (min. belanja ${y(w.minPurchase)})`)):w.targetProduct&&!O.some(p=>p.id===parseInt(w.targetProduct))&&(ye(null),R("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast("Voucher dibatalkan (produk khusus dihapus)"))),w){let p=t;if(w.targetProduct&&w.targetProduct!==""){const C=parseInt(w.targetProduct);p=O.filter(G=>G.id===C).reduce((G,j)=>G+(parseFloat(e(j))||0)*(parseFloat(j.qty)||0),0)}if(w.type==="shipping_free")r=a;else if(w.type==="shipping_flat")r=parseFloat(w.value)||0;else if(w.type==="percent"){let C=p*((parseFloat(w.value)||0)/100);w.maxDiscount&&parseFloat(w.maxDiscount)>0&&(C=Math.min(C,parseFloat(w.maxDiscount))),i=C}else i=parseFloat(w.value)||0,i=Math.min(i,p)}const s=(b.store.freeShippingMinSpendEnabled===!0||b.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(b.store.freeShippingMinSpendAmount)||0)>0&&t>=(parseFloat(b.store.freeShippingMinSpendAmount)||0)&&d.deliveryMethod==="delivery";s&&(r=a),r=Math.min(r,a),i=Math.min(i,t);const n=Math.max(0,t-i+(a-r)),o=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(n),m=o.ppnAmount,g=n+o.grandTotalAdd;se("summary-subtotal",y(t)),le("summary-shipping-row","hidden",d.deliveryMethod!=="delivery");const M=l("summary-discount-row");if(M)if(i>0||r>0){M.classList.remove("hidden");let p="";i>0&&(p+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Promo</p><p class="text-[13px] font-bold text-rose-500">-${y(i)}</p></div>`),r>0&&(p+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">${s?"Gratis Ongkir (Promo Belanja)":"Diskon Ongkir"}</p><p class="text-[13px] font-bold text-rose-500">-${y(r)}</p></div>`),M.innerHTML=p}else M.classList.add("hidden");d.deliveryMethod==="delivery"&&(se("summary-shipping",y(a)),se("summary-distance",`(${d.distance.toFixed(1)}km)`)),se("summary-total",y(g)),l("btn-total-preview")&&se("btn-total-preview",y(g));const k=l("summary-ppn-row");if(k)if(o.ppnEnabled&&(m>0||o.ppnShowZero||o.ppnRate===0)){k.classList.remove("hidden");const C=o.ppnRate!==void 0?`${o.ppnRate}%`:"11%",X=o.ppnLabel||(o.ppnType==="inclusive"?`Termasuk PPN (${C})`:`PPN (${C})`);se("summary-ppn-label",X),o.ppnType==="inclusive"?se("summary-ppn",y(m)):se("summary-ppn",m>0?`+${y(m)}`:y(0))}else k.classList.add("hidden");se("payment-cust-name",d.name||"-"),l("payment-cust-wa")&&(l("payment-cust-wa").textContent=d.wa?"+"+d.wa:"-"),d.dropPoint&&d.dropPoint.lat?se("payment-cust-method",`Kirim ke Lokasi Berbeda (${d.distance.toFixed(1)}km dari Toko)`):se("payment-cust-method",d.deliveryMethod==="delivery"?`Dikirim (${d.distance.toFixed(1)}km)`:"Ambil di Toko"),se("payment-cust-address",d.address||"-");const v=l("payment-droppoint-info");if(v)if(d.dropPoint&&d.dropPoint.lat&&d.dropPoint.name){v.classList.remove("hidden"),se("payment-dp-name",d.dropPoint.name||"-");const p=l("payment-dp-wa");p&&(p.textContent=d.dropPoint.wa?"+"+d.dropPoint.wa:"-"),se("payment-dp-address",d.dropPoint.address||"-")}else v.classList.add("hidden");we("payment-items-preview",O.map(p=>{const C=p.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${x(p.variantName)}</span>`:"",X=p.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${x(p.poTime)}</span>`:"",G=!!(p.img&&typeof p.img=="string"&&p.img.trim()&&!Bt(p.img)),j=Ut(p,{size:"thumb"});return`
        <div class="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
            <div class="flex items-center gap-3.5 min-w-0">
                <div class="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0 overflow-hidden flex items-center justify-center">
                    ${G?`<img loading="lazy" src="${x(p.img)}" alt="${x(p.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${j}</div>`:j}
                </div>
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate mb-1" title="${x(p.name)}">${x(p.name)}</p>
                    ${p.variantName||p.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${C}
                        ${X}
                    </div>`:""}
                    <p class="text-[11px] text-[var(--color-primary)] font-bold">${parseFloat(p.qty)} ${x(p.unit||"pcs")} x ${y(e(p))}</p>
                </div>
            </div>
            <div class="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap ml-3 shrink-0">${y(e(p)*parseFloat(p.qty))}</div>
        </div>`}).join("")+(Te?`<div class="flex justify-between items-center bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] p-4 rounded-2xl border border-[var(--color-primary)]/30 shadow-sm min-w-0"><div class="flex items-center gap-3.5 min-w-0"><div class="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div><div class="min-w-0"><p class="text-sm font-bold text-[var(--color-primary)] truncate">${x(Te.name)}</p><p class="text-[11px] text-[var(--color-primary)] font-bold mt-1"><i class="fa-solid fa-star mr-1"></i>Tukar ${Te.pointsCost} Poin (Gratis)</p></div></div><button type="button" onclick="if(typeof deselectReward==='function') deselectReward(); rPay();" class="text-[10px] font-bold text-rose-500 uppercase shrink-0 ml-3">Batal</button></div>`:"")),d.note?(se("payment-note-text",`"${x(d.note)}"`),fe("payment-note-preview")):R("payment-note-preview"),we("dynamic-banks-container",b.banks?.length?b.banks.map(p=>`<div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Bank ${x(p.bankName)}</p><p class="text-lg font-bold text-[var(--color-primary)] tracking-wide">${x(p.bankAccount)}</p><p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1.5">a.n <span class="font-bold text-slate-700 dark:text-white">${x(p.bankOwner)}</span></p></div>`).join(""):'<div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 p-4 rounded-2xl text-center"><p class="text-sm text-rose-500 dark:text-rose-400 font-bold">Rekening belum diatur.</p></div>');const _=l("payment-option-cashier"),de=l("payment-option-cod");if(_&&de){if(d.deliveryMethod==="pickup"){if(fe("payment-option-cashier"),R("payment-option-cod"),(document.querySelector('input[name="payment"]:checked')||{}).value==="cod"){const p=document.querySelector('input[value="cashier"]');p&&(p.checked=!0)}}else{R("payment-option-cashier"),fe("payment-option-cod");const p=(document.querySelector('input[name="payment"]:checked')||{}).value;if(p==="cashier"||!p){const C=document.querySelector('input[value="cod"]');C&&(C.checked=!0)}}typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()}const L=l("tnc-checkbox");L&&(L.checked=!1,Lt())},Os=async()=>{if(!l("tnc-checkbox").checked||st)return;if(window.isAdm){typeof window.showToast=="function"&&window.showToast("Sesi Pengelola Aktif. Silakan keluar akun untuk membuat pesanan online.");return}const e=ze("freshmart_last_order");if(e&&Date.now()-parseInt(e)<6e4){typeof window.showToast=="function"&&window.showToast("Pesanan sebelumnya sedang kami proses. Mohon beri jeda 1 menit sebelum memesan kembali.");return}const t=typeof window.getEffP=="function"?window.getEffP:s=>s.price||0,a=typeof window.getEffHpp=="function"?window.getEffHpp:()=>0,r=typeof window.getEffPoin=="function"?window.getEffPoin:()=>0;let i=!1;if(O.forEach(s=>{const n=b.products.find(o=>o.id===s.id);if(!n)return;const c=s.variantName?((n.variants||[]).find(o=>o.name===s.variantName)||{}).price??n.price:n.price;c!==void 0&&Math.abs(s.price-c)>1&&(s.price=c,i=!0),s.poin=r(s)}),i){Be("freshmart_cart",JSON.stringify(O)),typeof window.renderCart=="function"&&window.renderCart(),Ct(),typeof window.showToast=="function"&&window.showToast("Katalog harga telah diperbarui. Mohon periksa kembali rincian belanja Anda.");return}ee(!0),he("Memproses Pesanan Anda...");try{const s=O.reduce((f,h)=>f+(parseFloat(t(h))||0)*(parseFloat(h.qty)||0),0);let n=0,c=0,o=0;d.deliveryMethod==="delivery"&&(n=Math.ceil((parseFloat(d.distance)||0)*(parseFloat(b.store.costPerKm)||0)/500)*500);const m=b.store.useStock===!0||b.store.useStock==="true";for(const f of O){const h=b.products.find($=>String($.id)===String(f.id));if(!h||h.isActive===!1||h.isActive==="false"){ee(!1),Z(),typeof window.showToast=="function"&&window.showToast(`Produk "${f.name}" sedang tidak tersedia atau dinonaktifkan.`);return}if(!!(h.poTime&&String(h.poTime).trim()))continue;const D=parseFloat(f.qty)||0,E=parseFloat(f.unitMultiplier)||1,K=D*E;if(f.variantName){const $=(h.variants||[]).find(ue=>ue.name===f.variantName);if(!$||$.isActive===!1||$.isActive==="false"){ee(!1),Z(),typeof window.showToast=="function"&&window.showToast(`Varian "${f.variantName}" untuk produk "${f.name}" sedang tidak tersedia.`);return}const Q=$.stock!=null&&$.stock!==""?$.stock:$.stok!=null&&$.stok!==""?$.stok:null,z=Q!=null&&!isNaN(parseFloat(Q)),q=z?parseFloat(Q):0;if(m||z){if(q<=0){ee(!1),Z(),typeof window.showToast=="function"&&window.showToast(`Pesanan ditolak! Persediaan "${f.name} (${f.variantName})" sedang habis.`);return}if(q<K){ee(!1),Z(),typeof window.showToast=="function"&&window.showToast(`Pesanan ditolak! Persediaan "${f.name} (${f.variantName})" tidak mencukupi (tersisa ${q} unit).`);return}}}else{const $=h.stock!=null&&h.stock!==""?h.stock:h.stok!=null&&h.stok!==""?h.stok:null,Q=$!=null&&!isNaN(parseFloat($)),z=Q?parseFloat($):0;if(m||Q){if(z<=0){ee(!1),Z(),typeof window.showToast=="function"&&window.showToast(`Pesanan ditolak! Persediaan "${f.name}" sedang habis.`);return}if(z<K){ee(!1),Z();const J=E>1?Math.floor(z/E):z;typeof window.showToast=="function"&&window.showToast(`Pesanan ditolak! Persediaan "${f.name}" tidak mencukupi (tersisa ${J} ${f.unit||"unit"}).`);return}}}}if(w){let f=s;if(w.targetProduct&&w.targetProduct!==""){const h=parseInt(w.targetProduct);f=O.filter(D=>D.id===h).reduce((D,E)=>D+(parseFloat(t(E))||0)*(parseFloat(E.qty)||0),0)}if(w.minPurchase&&parseFloat(w.minPurchase)>0&&s<parseFloat(w.minPurchase))ye(null);else if(w.targetProduct&&w.targetProduct!==""&&f===0)ye(null);else if(w.type&&w.type.includes("shipping")&&d.deliveryMethod!=="delivery")ye(null);else if(w.type==="shipping_free")c=n;else if(w.type==="shipping_flat")c=parseFloat(w.value)||0;else if(w.type==="percent"){let h=f*((parseFloat(w.value)||0)/100);w.maxDiscount&&parseFloat(w.maxDiscount)>0&&(h=Math.min(h,parseFloat(w.maxDiscount))),o=h}else o=parseFloat(w.value)||0,o=Math.min(o,f)}const g=(b.store.freeShippingMinSpendEnabled===!0||b.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(b.store.freeShippingMinSpendAmount)||0)>0&&s>=(parseFloat(b.store.freeShippingMinSpendAmount)||0)&&d.deliveryMethod==="delivery";g&&(c=n),c=Math.min(c,n),o=Math.min(o,s);const M=Math.max(0,s-o+(n-c)),v=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(M),_=v.ppnAmount,de=v.dppAmount,L=M+v.grandTotalAdd,p=(document.querySelector('input[name="payment"]:checked')||{}).value,C=parseFloat(document.getElementById("paylater-dp-input")?.value)||0,X=p==="transfer"||p==="qris"||p==="tempo"||p==="paylater"&&C>0,G=window.buktiGDriveUploaded&&window.buktiPaymentUrl&&!window.buktiPaymentUrl.startsWith("data:");if(X&&!G){if(ee(!1),Z(),!window.buktiPaymentFile){typeof window.showToast=="function"&&window.showToast("Mohon lampirkan foto struk / bukti pembayaran terlebih dahulu.");return}typeof window.showToast=="function"&&window.showToast("Sedang menyelesaikan unggahan bukti transaksi. Mohon tunggu...");return}const j="ORD-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase();if(window.buktiPaymentFile&&!window.buktiGDriveUploaded)try{he("Mengunggah Bukti Pembayaran...");const f=await window.uploadBuktiToFirebase(window.buktiPaymentFile,j);if(f&&!f.startsWith("data:"))window.buktiPaymentUrl=f,window.buktiGDriveUploaded=!0;else{ee(!1),Z(),typeof window.showToast=="function"&&window.showToast("Gagal mengunggah berkas bukti. Silakan pilih kembali foto bukti transfer Anda.");return}he("Memproses Pesanan Anda...")}catch{ee(!1),Z(),typeof window.showToast=="function"&&window.showToast("Koneksi unggah terganggu. Silakan periksa jaringan internet dan coba kembali.");return}const u={orderId:j,timestamp:Ce.firestore.FieldValue.serverTimestamp(),dateString:new Date().toISOString(),customer:d,isDropPoint:!!(d.dropPoint&&d.dropPoint.lat&&d.dropPoint.name),dropPoint:d.dropPoint&&d.dropPoint.lat&&d.dropPoint.name?{...d.dropPoint}:null,items:O.map(f=>({...f,qty:parseFloat(f.qty),effectivePrice:t(f),poTime:f.poTime||"",hpp:a(f),poin:r(f)})),payment:{method:p,subtotal:s,shippingCost:n,shippingDiscount:c,productDiscount:o,ppnAmount:_,dppAmount:de,ppnRate:v.ppnEnabled?v.ppnRate:0,ppnType:v.ppnEnabled?v.ppnType:"exclusive",ppnEnabled:!!v.ppnEnabled,ppnShowZero:!!v.ppnShowZero,ppnLabel:v.ppnLabel||"",taxNpwp:b.store?.taxNpwp||b.taxSettings?.npwp||"",grandTotal:L,isFreeShippingPromo:g||!1},status:"Baru",buktiPayment:window.buktiPaymentUrl||null};if(p==="tempo"){if(!d.wa){ee(!1),Z(),typeof window.showToast=="function"&&window.showToast("Pembayaran Cash Tempo hanya untuk Member Resmi terdaftar!");return}const f=document.getElementById("tempo-dp-input");let h=f&&parseFloat(f.value)||0;h>L&&(h=L),u.payment.dp=h,u.payment.tempoDp=h,u.payment.tempoBalance=Math.max(0,L-h),u.payment.tempoDueDate=Date.now()+30*24*60*60*1e3,u.payment.paymentStatus=L-h<=0?"lunas":"hutang"}if(p==="paylater"){if(!d.wa||!I||!(I.paylaterActive===!0||I.paylaterActive==="true")){ee(!1),Z(),typeof window.showToast=="function"&&window.showToast("Fitur Putri PayLater belum aktif untuk nomor Anda!");return}const f=parseFloat(I.paylaterLimit)||0,h=Math.max(0,parseFloat(I.paylaterUsed)||0),ie=Math.max(0,f-h),D=document.getElementById("paylater-dp-input");let E=D&&parseFloat(D.value)||0;if(L>ie&&E<L-ie){ee(!1),Z(),typeof window.showToast=="function"&&window.showToast("Limit PayLater tidak cukup! Wajib bayar DP minimal "+y(L-ie));return}const K=Math.min(ie,Math.max(0,L-E));u.payment.method="tempo",u.payment.subMethod="paylater",u.payment.isPaylater=!0,u.payment.paylaterUsed=K,u.payment.dp=E,u.payment.tempoDp=E;const $=I?.paylaterDueDay||5,Q=window.selectedCheckoutPaylaterTenor||window.currentPaylaterBreakdown?.tenorKey||"30d",z=At(),q=ss(K,Q,{...z,dueDay:$}),J=q.months,ue=q.totalAdminFee,Y=q.totalServiceFee,oe=q.totalPerMonth,U=q.schedule;u.payment.paylaterTenor=Q,u.payment.paylaterMonths=J,u.payment.paylaterAdminFee=ue,u.payment.paylaterServiceFee=Y,u.payment.paylaterMonthlyInstallment=oe,u.payment.paylaterSchedule=U;const ne=q.grandTotal;u.payment.tempoBalance=ne;const P=U.length>0?U[U.length-1].dueDate:Date.now()+J*30*24*60*60*1e3;if(u.payment.tempoDueDate=P,u.payment.paymentStatus=ne<=0?"lunas":"hutang",u.isTempo=!0,u.paylaterLimitTracked=!1,K>0){if(I){I.paylaterUsed=Math.max(0,parseFloat(I.paylaterUsed)||0)+K;try{localStorage.setItem("freshmart_current_member",JSON.stringify(I))}catch{}}const V=(I?.phone||d.wa||"").replace(/\D/g,""),ve=V.startsWith("0")?"62"+V.slice(1):V;try{await W.collection("freshmart").doc("cms_data").collection("customers").doc(ve).update({paylaterUsed:Ce.firestore.FieldValue.increment(K)}),u.paylaterLimitTracked=!0}catch(me){console.warn("[PayLater] Gagal update pemakaian limit di Firestore:",me.code||me.message||me)}}}const ce=W.collection("freshmart_orders").doc(j),A=typeof window.calculateCartPoints=="function"?window.calculateCartPoints(O,b.store):{totalPoints:0,directPoints:0,spendPoints:0},re=A.totalPoints;u.pointsEarned=re,u.pointsBreakdown={direct:A.directPoints,spend:A.spendPoints};const te=W.collection("freshmart").doc("cms_data"),ae=(I?.phone||d.wa||"").replace(/\D/g,""),S=ae?ae.startsWith("0")?"62"+ae.slice(1):ae:null,pe=S?te.collection("customers").doc(S):null,H=!!Te;let B=null;if(useStk){const f={};O.forEach(D=>{const E=D.id!=null?D.id.toString():null;if(!E)return;f[E]||(f[E]={main:0,variants:{}});const K=parseFloat(D.unitMultiplier)||1,$=(parseFloat(D.qty)||0)*K;D.variantName?f[E].variants[D.variantName]=(f[E].variants[D.variantName]||0)+$:f[E].main+=$});const h=Object.keys(f),ie=h.map(D=>W.collection("freshmart").doc("cms_data").collection("products").doc(D));await W.runTransaction(async D=>{const E=await Promise.all(ie.map(Y=>D.get(Y))),K=pe?await D.get(pe):null,$=!!(K&&K.exists),Q=$&&H?W.collection("freshmart").doc("cms_data").collection("rewards").doc(Te.id.toString()):null,z=Q?await D.get(Q):null,q=[];if(E.forEach((Y,oe)=>{if(!Y.exists)return;const U=Y.data(),ne=f[h[oe]];if(ne.main>0){const P=parseFloat(U.stock!==void 0?U.stock:0);P<ne.main&&q.push(`${U.name} (sisa ${P})`)}Object.keys(ne.variants).forEach(P=>{const V=(U.variants||[]).find(me=>me.name===P),ve=parseFloat(V&&V.stock!==void 0?V.stock:0);ve<ne.variants[P]&&q.push(`${U.name} (${P}, sisa ${ve})`)})}),q.length)throw new Error("STOK_TIDAK_CUKUP: "+q.join(", "));let J=null,ue=null;if($){const Y=parseFloat(K.data().points)||0;let oe=Y;if(H){if(!z||!z.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const U=z.data();if(Y<(parseFloat(U.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(U.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");J=(parseFloat(U.stock)||0)-1,oe-=parseFloat(U.pointsCost)||0,u.claimedReward={id:U.id,name:U.name,pointsCost:parseFloat(U.pointsCost)||0,status:"pending",note:""}}oe+=re,ue=oe,u.pointsEarned=re,u.customerPhone=d.wa,u.finalMemberPoints=ue,u.customerType="Member"}else{if(p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(H)throw new Error("MEMBER_TIDAK_DITEMUKAN");u.pointsEarned=0,u.pointsBreakdown={direct:0,spend:0},u.finalMemberPoints=null,u.customerType="Pelanggan Umum"}if(E.forEach((Y,oe)=>{if(!Y.exists)return;const U=h[oe],ne=f[U],P=JSON.parse(JSON.stringify(Y.data())),V={};ne.main>0&&(ft(P,ne.main),V.stock=P.stock,P.storeStock!==void 0&&(V.storeStock=P.storeStock),P.warehouseStock!==void 0&&(V.warehouseStock=P.warehouseStock),Array.isArray(P.stockBatches)&&(V.stockBatches=P.stockBatches),P.hpp&&(V.hpp=P.hpp),P.stock<=1e-4&&(P.stock=0,V.stock=0,P.isActive="false",V.isActive="false"),P.totalSold=(parseFloat(P.totalSold)||0)+ne.main,V.totalSold=P.totalSold),Object.keys(ne.variants).length>0&&P.variants&&(Object.keys(ne.variants).forEach(me=>{const pt=ne.variants[me];ft(P,pt,me);const $e=(P.variants||[]).findIndex(jt=>jt.name===me);$e>-1&&(P.variants[$e].stock<=1e-4&&(P.variants[$e].stock=0,P.variants[$e].isActive=!1),P.variants[$e].totalSold=(parseFloat(P.variants[$e].totalSold)||0)+pt)}),V.variants=P.variants,V.stock=P.stock,P.storeStock!==void 0&&(V.storeStock=P.storeStock),P.warehouseStock!==void 0&&(V.warehouseStock=P.warehouseStock),Array.isArray(P.stockBatches)&&(V.stockBatches=P.stockBatches));const ve=b.products.findIndex(me=>me.id.toString()===U);ve>-1&&(b.products[ve]=P),D.update(ie[oe],V)}),D.set(ce,u),$&&pe&&ue!==null){const Y=K.data().name||d.name||"Pelanggan Setia";u.customer&&(u.customer.name=Y);const oe={points:ue,name:Y,lastOrderAt:Date.now()};D.set(pe,oe,{merge:!0}),B=ue}J!==null&&D.set(Q,{stock:J},{merge:!0}),D.update(te,{lastUpdate:Ce.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:h})}),b.lastUpdate=(parseInt(ze("freshmart_last_update"))||b.lastUpdate||0)+1,Be("freshmart_last_update",b.lastUpdate.toString()),Be("freshmart_products",JSON.stringify(b.products)),typeof window.rCat=="function"&&window.rCat(),typeof window.refreshProdUI=="function"&&window.refreshProdUI()}else if(pe)await W.runTransaction(async f=>{const h=await f.get(pe),ie=h.exists,D=ie&&H?W.collection("freshmart").doc("cms_data").collection("rewards").doc(Te.id.toString()):null,E=D?await f.get(D):null;let K=null,$=null;if(ie){const Q=parseFloat(h.data().points)||0;let z=Q;if(H){if(!E||!E.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const J=E.data();if(Q<(parseFloat(J.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(J.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");K=(parseFloat(J.stock)||0)-1,z-=parseFloat(J.pointsCost)||0,u.claimedReward={id:J.id,name:J.name,pointsCost:parseFloat(J.pointsCost)||0,status:"pending",note:""}}z+=re,$=z,u.pointsEarned=re,u.customerPhone=d.wa,u.finalMemberPoints=$,u.customerType="Member";const q=h.data().name||d.name||"Pelanggan Setia";u.customer&&(u.customer.name=q),f.set(pe,{points:$,name:q,lastOrderAt:Date.now()},{merge:!0}),B=$,K!==null&&f.set(D,{stock:K},{merge:!0})}else{if(p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(H)throw new Error("MEMBER_TIDAK_DITEMUKAN");u.pointsEarned=0,u.pointsBreakdown={direct:0,spend:0},u.finalMemberPoints=null,u.customerType="Pelanggan Umum"}f.set(ce,u)});else{if(u.pointsEarned=0,u.pointsBreakdown={direct:0,spend:0},u.finalMemberPoints=null,u.customerType="Pelanggan Umum",p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");await ce.set(u)}let be=!1;if((u.items||[]).forEach(f=>{typeof window.recordFlashSaleSale=="function"&&window.recordFlashSaleSale(f.id,f.variantName,f.qty)&&(be=!0)}),be&&Array.isArray(b.flashSales))try{await W.collection("freshmart").doc("cms_data").update({flashSales:b.flashSales,lastUpdate:Ce.firestore.FieldValue.increment(1)})}catch(f){console.warn("[Checkout] Gagal update kuota Flash Sale:",f)}const xe={orderId:j,date:u.dateString||new Date().toISOString(),dateString:u.dateString||new Date().toISOString(),total:L,itemCount:O.reduce((f,h)=>f+parseFloat(h.qty),0),status:"Baru",pointsEarned:u.pointsEarned||0,claimedReward:u.claimedReward||null,finalMemberPoints:B,customerType:u.customerType||"Pelanggan Umum",customer:u.customer||d,items:u.items||[],payment:u.payment||{},isTempo:!!u.isTempo};N.unshift(xe),Ke(N),window.currentCustomerOrder=u,window.lastPrintedOrder=u;try{localStorage.setItem("freshmart_my_orders",JSON.stringify(N)),localStorage.setItem("freshmart_last_order",Date.now().toString())}catch{}if(typeof analytics<"u"&&analytics.logEvent("purchase",{transaction_id:j,value:L,currency:"IDR"}),d.wa&&B!==null){const f={id:d.wa,phone:d.wa,name:d.name||"Pelanggan Setia",points:B,paylaterActive:I?I.paylaterActive===!0||I.paylaterActive==="true":!1,paylaterLimit:I&&parseFloat(I.paylaterLimit)||0,paylaterUsed:I?Math.max(0,parseFloat(I.paylaterUsed)||0):0,paylaterDueDay:I&&I.paylaterDueDay||5};Je(f);try{localStorage.setItem("freshmart_current_member",JSON.stringify(f)),localStorage.setItem("freshmart_member_wa",d.wa)}catch{}typeof window.invalidateMemberCache=="function"&&window.invalidateMemberCache(d.wa)}else{Je(null);try{localStorage.removeItem("freshmart_current_member")}catch{}}u.claimedReward&&B!==null?typeof window.showToast=="function"&&window.showToast(`Hadiah eksklusif "${u.claimedReward.name}" berhasil ditukarkan! Sisa poin reward Anda: ${B}`):B!==null&&re>0?typeof window.showToast=="function"&&window.showToast(`Pesanan Anda berhasil dikonfirmasi! (+${re} Poin Member terkumpul)`):typeof window.showToast=="function"&&window.showToast("Pesanan Anda berhasil dikonfirmasi dan siap diproses!"),setTimeout(()=>{yt([]),Fe("cust-name",""),Fe("cust-address",""),Fe("cust-maps-input",""),Fe("cust-note",""),Fe("cust-wa",""),window.buktiPaymentUrl=null,window.buktiPaymentFile=null,window.buktiGDriveUploaded=!1;const f=l("bukti-preview-wrap"),h=l("bukti-placeholder");f&&f.classList.add("hidden"),h&&h.classList.remove("hidden"),R("bukti-uploading"),R("bukti-success"),R("bukti-gdrive-error");const ie=l("bukti-file-input");ie&&(ie.value=""),vt({name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:"",dropPoint:null}),ye(null),Le(null);const D=l("toggle-droppoint"),E=l("droppoint-form");D&&(D.checked=!1),E&&E.classList.add("hidden");const K=l("dp-location-status");K&&K.classList.add("hidden");const $=l("payment-droppoint-info");$&&$.classList.add("hidden");const Q=l("dp-receiver-name");Q&&(Q.value="");const z=l("dp-receiver-wa");z&&(z.value="");const q=l("dp-address");q&&(q.value="");const J=l("dp-maps-input");J&&(J.value="");const ue=l("btn-dp-location");ue&&(ue.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan Titik GPS Lokasi Proyek</span>');const Y=l("member-status-banner");Y&&R(Y),R("payment-option-tempo"),l("voucher-input")&&(l("voucher-input").value=""),R("voucher-msg-container"),R("location-status"),l("btn-location")&&fe("btn-location");const oe=document.querySelector('input[name="delivery-method"][value="delivery"]');oe&&(oe.checked=!0,lt());const U=document.querySelector('input[name="payment"][value="transfer"]');U&&(U.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()),typeof window.updCart=="function"&&window.updCart(),typeof window.renderCart=="function"&&window.renderCart(),typeof window.rCat=="function"&&window.rCat(),typeof window.refreshProdUI=="function"&&window.refreshProdUI();try{window.history.replaceState({view:"view-catalog"},"",window.location.pathname)}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog",!0),typeof window.showToast=="function"&&window.showToast("Pesanan Anda Berhasil Dibuat!")},2e3)}catch(s){const n=s.message||"Error";n.startsWith("STOK_TIDAK_CUKUP:")?typeof window.showToast=="function"&&window.showToast("Ketersediaan stok baru saja diperbarui: "+n.replace("STOK_TIDAK_CUKUP: ","")):n==="TEMPO_KHUSUS_MEMBER"?typeof window.showToast=="function"&&window.showToast("Fasilitas Cash Tempo khusus untuk Rekanan & Member VIP resmi terdaftar."):n==="POIN_TIDAK_CUKUP"?(typeof window.showToast=="function"&&window.showToast("Poin reward Anda belum mencukupi untuk penukaran hadiah ini."),Le(null)):n==="STOK_HADIAH_HABIS"?(typeof window.showToast=="function"&&window.showToast("Persediaan hadiah yang dipilih baru saja habis. Silakan pilih hadiah lainnya."),Le(null)):n==="HADIAH_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Hadiah yang dipilih sudah tidak aktif. Silakan pilih hadiah pengganti."),Le(null)):n==="MEMBER_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Data member tidak terverifikasi. Penukaran hadiah dibatalkan."),Le(null)):typeof window.showToast=="function"&&window.showToast(s.code==="resource-exhausted"?"Layanan server sedang padat. Mohon coba sesaat lagi.":"Gagal memproses pesanan: "+n)}finally{ee(!1),Z()}};window.validateAndGoToPayment=Es;window.toggleDeliveryMethod=lt;window.toggleDropPoint=Ls;window.getDPLocation=Cs;window.handleDPMapsInput=Ft;window.pasteDPMapsInput=Rs;window.toggleOrderButton=Lt;window.rPay=Ct;window.processOrder=Os;const He=e=>typeof window<"u"&&typeof window.getEffP=="function"?window.getEffP(e,"web"):e?.effectivePrice??e?.price??0;window.getLocation=()=>{if(!navigator.geolocation)return F("GPS tidak didukung");l("btn-location").innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i>',navigator.geolocation.getCurrentPosition(e=>{d.lat=e.coords.latitude,d.lng=e.coords.longitude,R("btn-location"),fe("location-status"),l("location-status").classList.add("flex"),F("GPS Didapatkan")},e=>{l("btn-location").innerHTML='<i class="fa-solid fa-location-crosshairs text-[var(--color-primary)]"></i> Set GPS Maps',F("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})};window.handleCustomerMapsInput=e=>{const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){d.lat=parseFloat(a.lat),d.lng=parseFloat(a.lng),R("btn-location"),fe("location-status");const r=l("location-status");return r&&(r.classList.add("flex"),r.innerHTML=`
                <i class="fa-solid fa-circle-check shrink-0 text-lg primary-text"></i>
                <div class="min-w-0">
                    <span class="text-[10px] font-bold uppercase leading-tight tracking-wide primary-text block">Koordinat Berhasil Disematkan!</span>
                    <span class="text-[9px] text-slate-500 dark:text-slate-400 font-mono">${a.lat}, ${a.lng}</span>
                </div>
            `),F("Titik lokasi Maps pembeli berhasil disematkan!"),typeof window.rPay=="function"&&window.rPay(),!0}return!1};window.pasteCustomerMapsInput=async()=>{const e=l("cust-maps-input");if(e){try{if(navigator.clipboard&&navigator.clipboard.readText){const t=await navigator.clipboard.readText();if(t){e.value=t,window.handleCustomerMapsInput(t)||F("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Maps");return}}}catch{}e.focus(),F("Silakan tekan Ctrl+V atau tahan untuk menempel")}};const _s=()=>{const e=b.store.isDeliveryEnabled!==!1,t=b.store.isPickupEnabled!==!1;le("delivery-option-container","hidden",!e),le("pickup-option-container","hidden",!t),le("no-delivery-warning","hidden",e||t),le("delivery-methods-grid","hidden",!(e||t));const a=l("btn-checkout-next");if(a)if(e||t){a.removeAttribute("disabled"),a.classList.remove("opacity-50");const i=(d.deliveryMethod||"delivery")==="pickup"&&t?"pickup":e?"delivery":"pickup",s=document.querySelector(`input[value="${i}"]`);s&&(s.checked=!0)}else a.setAttribute("disabled","true"),a.classList.add("opacity-50");lt()};window.rChck=_s;window.buktiPaymentUrl=null;window.buktiPaymentFile=null;window.buktiGDriveUploaded=!1;window.compressImageForUpload=(e,t=1600,a=.82)=>new Promise(r=>{const i=new FileReader;i.readAsDataURL(e),i.onload=s=>{const n=new Image;n.onload=()=>{let{width:c,height:o}=n;(c>t||o>t)&&(c>o?(o=Math.round(o*t/c),c=t):(c=Math.round(c*t/o),o=t));const m=document.createElement("canvas");m.width=c,m.height=o,m.getContext("2d").drawImage(n,0,0,c,o),m.toBlob(g=>{if(!g)return r(e);r(new File([g],e.name,{type:"image/jpeg",lastModified:Date.now()}))},"image/jpeg",a)},n.onerror=()=>r(e),n.src=s.target.result},i.onerror=()=>r(e)});window._doSingleGDriveUpload=async(e,t)=>{const a=new FileReader;return new Promise(r=>{a.readAsDataURL(e),a.onload=async()=>{try{const i=a.result.split(",")[1],s=(e.name||"bukti.jpg").replace(/[^a-zA-Z0-9.]/g,"_"),n={name:"BUKTI_"+t+"_"+Date.now()+"_"+s,mimeType:e.type||"image/jpeg",data:i,token:Ts},c=await fetch(It,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"});if(!c.ok)return console.warn("GDrive upload HTTP error:",c.status),r(null);const o=await c.text();let m;try{m=JSON.parse(o)}catch{return console.warn("GDrive response parse error"),r(null)}m&&m.status==="success"&&m.url?r(rt(m.url)):(console.warn("GDrive upload gagal:",m&&m.message),r(null))}catch(i){console.warn("GDrive upload exception:",i),r(null)}},a.onerror=()=>r(null)})};window.uploadBuktiToGDrive=async(e,t)=>{if(!e)return null;const a=l("bukti-uploading-text");a&&(a.textContent="Mengupload bukti ke Google Drive...");try{return await Ms(e,"BUKTI_"+(t||Date.now()))}catch(r){return console.warn("Gagal upload bukti ke GDrive via GAS:",r),null}};window.handleBuktiUpload=async e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/"))return F("Hanya file gambar yang diizinkan!");if(t.size>5*1024*1024)return F("Ukuran gambar max 5MB!");window.buktiPaymentFile=t,window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const a=new FileReader;a.onload=n=>{const c=l("bukti-preview-img"),o=l("bukti-preview-wrap"),m=l("bukti-placeholder");c&&(c.src=n.target.result),o&&o.classList.remove("hidden"),m&&m.classList.add("hidden")},a.readAsDataURL(t),R("bukti-success"),R("bukti-gdrive-error");const r=l("bukti-uploading");r&&(r.classList.remove("hidden"),r.style.display="flex");const i="TEMP_"+Date.now().toString(36).toUpperCase(),s=await window.uploadBuktiToGDrive(t,i);if(R("bukti-uploading"),s){window.buktiPaymentUrl=s,window.buktiGDriveUploaded=!0;const n=l("bukti-success"),c=l("bukti-success-text"),o=l("bukti-storage-info");c&&(c.textContent="Bukti berhasil disimpan!"),o&&(o.textContent="(tersimpan di Google Drive)"),n&&(n.classList.remove("hidden"),n.style.display="flex"),R("bukti-gdrive-error")}else{window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const n=l("bukti-gdrive-error");n&&(n.classList.remove("hidden"),n.style.display="flex"),R("bukti-success"),F("Upload ke Google Drive gagal. Coba lagi!")}};window.retryBuktiUpload=async()=>{if(!window.buktiPaymentFile)return F("Pilih gambar terlebih dahulu!");R("bukti-gdrive-error"),R("bukti-success");const e=l("bukti-uploading");e&&(e.classList.remove("hidden"),e.style.display="flex");const t="RETRY_"+Date.now().toString(36).toUpperCase(),a=await window.uploadBuktiToGDrive(window.buktiPaymentFile,t);if(R("bukti-uploading"),a){window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0;const r=l("bukti-success"),i=l("bukti-success-text"),s=l("bukti-storage-info");i&&(i.textContent="Bukti berhasil disimpan!"),s&&(s.textContent="(tersimpan di Google Drive)"),r&&(r.classList.remove("hidden"),r.style.display="flex"),F("Upload berhasil!")}else{const r=l("bukti-gdrive-error");r&&(r.classList.remove("hidden"),r.style.display="flex"),F("Masih gagal. Periksa koneksi internet Anda.")}};window.uploadBuktiToFirebase=async(e,t)=>{if(window.buktiGDriveUploaded&&window.buktiPaymentUrl)return window.buktiPaymentUrl;if(!e)return null;const a=await window.uploadBuktiToGDrive(e,t);return a&&(window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0),a};window.togglePaymentDetails=()=>{const e=(document.querySelector('input[name="payment"]:checked')||{}).value;if(le("detail-transfer","hidden",e!=="transfer"),le("detail-qris","hidden",e!=="qris"),le("detail-cashier","hidden",e!=="cashier"),le("detail-cod","hidden",e!=="cod"),le("detail-tempo","hidden",e!=="tempo"),le("detail-paylater","hidden",e!=="paylater"),e==="tempo"&&window.calculateTempoBalance(),e==="paylater"&&window.calculatePaylaterBalance?.(),e==="qris"){const r=l("dyn-qris-img");if(r){const i=b.payment?.qrisUrl||b.store?.qrisUrl||b.payment?.qris||b.store?.qris||b.qrisUrl||"";i&&(r.src=rt(i))}}const t=parseFloat(document.getElementById("paylater-dp-input")?.value)||0,a=e==="transfer"||e==="qris"||e==="tempo"||e==="paylater"&&t>0;le("bukti-payment-section","hidden",!a)};window.selectedCheckoutPaylaterTenor=window.selectedCheckoutPaylaterTenor||"30d";window.selectCheckoutPaylaterTenor=e=>{window.selectedCheckoutPaylaterTenor=e,typeof window.calculatePaylaterBalance=="function"&&window.calculatePaylaterBalance()};window.calculatePaylaterBalance=()=>{const e=I?Math.max(0,parseFloat(I.paylaterLimit)||0):0,t=I?Math.max(0,parseFloat(I.paylaterUsed)||0):0,a=Math.max(0,e-t),r=I?.paylaterDueDay||5,i=document.getElementById("paylater-limit-display"),s=document.getElementById("paylater-due-display"),n=document.getElementById("paylater-status-box"),c=document.getElementById("paylater-excess-dp-container"),o=document.getElementById("paylater-dp-input"),m=document.getElementById("paylater-tenor-chips-grid"),g=document.getElementById("paylater-tenor-breakdown-box");i&&(i.textContent=y(a)),s&&(s.textContent="Tgl "+r+" Tiap Bulan");let M=O.reduce((H,B)=>H+(parseFloat(He(B))||0)*(parseFloat(B.qty)||0),0),k=0,v=0,_=0;if(d.deliveryMethod==="delivery"&&(k=Math.ceil((parseFloat(d.distance)||0)*(parseFloat(b.store.costPerKm)||0)/500)*500),typeof w<"u"&&w){let H=M;if(w.targetProduct&&w.targetProduct!==""){const B=parseInt(w.targetProduct);H=O.filter(xe=>xe.id===B).reduce((xe,f)=>xe+(parseFloat(He(f))||0)*(parseFloat(f.qty)||0),0)}if(w.type==="shipping_free")_=k;else if(w.type==="shipping_flat")_=parseFloat(w.value)||0;else if(w.type==="percent"){let B=H*((parseFloat(w.value)||0)/100);w.maxDiscount&&parseFloat(w.maxDiscount)>0&&(B=Math.min(B,parseFloat(w.maxDiscount))),v=B}else v=parseFloat(w.value)||0,v=Math.min(v,H)}(b.store?.freeShippingMinSpendEnabled===!0||b.store?.freeShippingMinSpendEnabled==="true")&&(parseFloat(b.store?.freeShippingMinSpendAmount)||0)>0&&M>=(parseFloat(b.store?.freeShippingMinSpendAmount)||0)&&d.deliveryMethod==="delivery"&&(_=k),_=Math.min(_,k),v=Math.min(v,M);let L=Math.max(0,M-v),p=Math.max(0,k-_);const C=typeof window.calcTaxDetails=="function"?window.calcTaxDetails(L+p):{grandTotalAdd:0};let X=0;window.useMemberPoints&&I&&(X=Math.min(L+p+C.grandTotalAdd,parseFloat(I.points)||0));let G=Math.max(0,L+p+(C.grandTotalAdd||0)-X),j=0;const u=G>a;if(u){const H=G-a;j=parseFloat(o?.value)||0,j<H&&(j=H,o&&(o.value=j)),c&&c.classList.remove("hidden")}else c&&c.classList.add("hidden"),o&&(o.value=0),j=0;const ce=Math.min(a,Math.max(0,G-j)),A=At(),te=rs(ce>0?ce:G,{...A,dueDay:r}).results;let ae=window.selectedCheckoutPaylaterTenor||"30d";(!te[ae]||!te[ae].enabled)&&(ae=Object.keys(te).find(B=>te[B].enabled)||"30d",window.selectedCheckoutPaylaterTenor=ae);const S=te[ae];if(window.currentPaylaterBreakdown=S,m){const H=["30d","2m","3m"];m.innerHTML=H.map(B=>{const be=te[B];if(!be||!be.enabled)return"";const xe=B===ae;return`
                <button type="button" onclick="window.selectCheckoutPaylaterTenor('${B}')" 
                        class="p-2 sm:p-2.5 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 min-h-[46px] select-none touch-manipulation active:scale-95 ${xe?"border-2 text-[var(--color-primary)] shadow-sm":"border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600"}"
                        style="${xe?"border-color: var(--color-primary); background: rgba(var(--color-primary-rgb), 0.1); box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.15);":""}">
                    <span class="text-[9.5px] font-black uppercase tracking-wider block">${x(be.shortLabel)}</span>
                    <span class="text-[11px] sm:text-xs font-black block" ${xe?'style="color: var(--color-primary);"':""}>${y(be.totalPerMonth)}<span class="text-[8px] font-normal text-slate-400">/bln</span></span>
                </button>
            `}).filter(Boolean).join("")}if(g&&S&&(g.innerHTML=`
            <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 shadow-2xs space-y-1.5 text-xs" style="border-left: 3.5px solid var(--color-primary);">
                <div class="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-700">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                        <i class="fa-solid fa-receipt" style="color: var(--color-primary);"></i> Rincian Tenor ${x(S.label)}
                    </span>
                    <span class="text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                        <i class="fa-solid fa-shield-halved text-[9px] text-emerald-500"></i> Transparan
                    </span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span>Pokok Tagihan (${S.months} bulan)</span>
                    <span class="font-bold text-slate-800 dark:text-slate-200">${y(S.pokokPerMonth)} / bln</span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span class="flex items-center gap-1">Biaya Admin ${S.adminFeeType==="percent"&&S.adminFeeValue>0?`(${S.adminFeeValue}%)`:""}</span>
                    <span class="font-bold ${S.adminFeePerMonth===0?"text-emerald-600 dark:text-emerald-400":"text-slate-800 dark:text-slate-200"}">
                        ${S.adminFeePerMonth===0?"Rp 0 (Gratis)":`${y(S.adminFeePerMonth)} / bln`}
                    </span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span class="flex items-center gap-1">Biaya Penanganan ${S.serviceFeeType==="percent"&&S.serviceFeeValue>0?`(${S.serviceFeeValue}%)`:""}</span>
                    <span class="font-bold ${S.serviceFeePerMonth===0?"text-emerald-600 dark:text-emerald-400":"text-slate-800 dark:text-slate-200"}">
                        ${S.serviceFeePerMonth===0?"Rp 0 (Gratis)":`${y(S.serviceFeePerMonth)} / bln`}
                    </span>
                </div>
                <div class="pt-2 mt-1.5 border-t border-dashed border-slate-200 dark:border-slate-700 flex justify-between items-baseline">
                    <span class="text-[11px] font-black uppercase text-slate-800 dark:text-white">Tagihan per Bulan:</span>
                    <span class="text-sm font-black font-mono" style="color: var(--color-primary);">${y(S.totalPerMonth)} <span class="text-[10px] font-bold text-slate-400">/ bulan</span></span>
                </div>
                <div class="flex justify-between items-center text-[10px] text-slate-500 pt-0.5">
                    <span>Total Tagihan Seluruhnya:</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300">${y(S.grandTotal)}</span>
                </div>
            </div>
        `),!u)n&&(n.innerHTML='<div class="flex items-center gap-2 font-extrabold mb-1" style="color: var(--color-primary);"><i class="fa-solid fa-circle-check text-emerald-500 text-sm"></i><span>Limit PayLater Anda Sangat Cukup!</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Total belanja <b>'+y(G)+"</b> otomatis dipotong dari limit PayLater Anda. Anda <b>tidak perlu bayar sekarang</b> dan tanpa uang muka (DP Rp 0). Angsuran dicicil sesuai tenor "+x(S.label)+" ("+y(S.totalPerMonth)+"/bln) mulai tgl "+r+" bulan depan.</p>");else{const H=G-a;n&&(n.innerHTML='<div class="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-extrabold mb-1"><i class="fa-solid fa-triangle-exclamation text-amber-500 text-sm"></i><span>Total Belanja Melebihi Sisa Limit PayLater</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Sisa limit Anda <b>'+y(a)+"</b> akan digunakan maksimal untuk cicilan "+x(S.label)+" ("+y(S.totalPerMonth)+"/bln). Selisih kekurangan sebesar <b>"+y(H)+"</b> wajib dibayar sebagai DP via Transfer/QRIS.</p>")}const pe=(parseFloat(o?.value)||0)>0;le("bukti-payment-section","hidden",!pe)};window.calculateTempoBalance=()=>{const e=document.getElementById("tempo-dp-input");let t=parseFloat(e?.value)||0;t<0&&(t=0,e&&(e.value=0));let a=O.reduce((L,p)=>L+(parseFloat(He(p))||0)*(parseFloat(p.qty)||0),0),r=0,i=0,s=0;if(d.deliveryMethod==="delivery"&&(r=Math.ceil((parseFloat(d.distance)||0)*(parseFloat(b.store.costPerKm)||0)/500)*500),w){let L=a;if(w.targetProduct&&w.targetProduct!==""){const p=parseInt(w.targetProduct);L=O.filter(X=>X.id===p).reduce((X,G)=>X+(parseFloat(He(G))||0)*(parseFloat(G.qty)||0),0)}if(w.type==="shipping_free")s=r;else if(w.type==="shipping_flat")s=parseFloat(w.value)||0;else if(w.type==="percent"){let p=L*((parseFloat(w.value)||0)/100);w.maxDiscount&&parseFloat(w.maxDiscount)>0&&(p=Math.min(p,parseFloat(w.maxDiscount))),i=p}else i=parseFloat(w.value)||0,i=Math.min(i,L)}(b.store.freeShippingMinSpendEnabled===!0||b.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(b.store.freeShippingMinSpendAmount)||0)>0&&a>=(parseFloat(b.store.freeShippingMinSpendAmount)||0)&&d.deliveryMethod==="delivery"&&(s=r),s=Math.min(s,r),i=Math.min(i,a);let c=Math.max(0,a-i),o=Math.max(0,r-s);const g=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({grandTotalAdd:0}))(c+o)||{grandTotalAdd:0},M=parseFloat(g?.grandTotalAdd)||0;let k=0;window.useMemberPoints&&I&&(k=Math.min(c+o+M,parseFloat(I.points)||0));let v=Math.max(0,c+o+M-k);t>v&&(t=v,e&&(e.value=t));let _=Math.max(0,v-t);const de=document.getElementById("tempo-balance-display");de&&(de.innerText=y(_))};let Ie=null;const xt=e=>{if(e<=0)return{h:"00",m:"00",s:"00",totalSec:0};const t=Math.floor(e/1e3),a=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return{h:String(a).padStart(2,"0"),m:String(r).padStart(2,"0"),s:String(i).padStart(2,"0"),totalSec:t}},Rt=()=>{const e=l("dynamic-flashsale-container");if(!e)return;Ie&&(clearInterval(Ie),Ie=null);const t=is("web");if(!t||!Array.isArray(t.items)||t.items.length===0){e.innerHTML="",e.classList.add("hidden");return}const a=t.endTime?typeof window.parseSafeTimestamp=="function"?window.parseSafeTimestamp(t.endTime):new Date(t.endTime).getTime():0,r=Date.now(),i=Math.max(0,a-r);if(a&&i<=0){e.innerHTML="",e.classList.add("hidden");return}const s=xt(i),n=t.items.filter(o=>o&&o.productId);if(n.length===0){e.innerHTML="",e.classList.add("hidden");return}const c=n.map(o=>{const m=(b.products||[]).find(ce=>String(ce.id)===String(o.productId));if(!m||m.isActive===!1||m.isActive==="false")return"";const g=parseFloat(o.normalPrice)||parseFloat(m.price)||0,M=parseFloat(o.flashSalePrice)||0,k=parseFloat(o.quota)||0,v=parseFloat(o.soldCount)||0,_=k>0&&v>=k,de=k>0?Math.min(100,Math.round(v/k*100)):0,L=Math.max(0,k-v),p=g>0?Math.round((g-M)/g*100):o.discountPercent||0,C=o.variantName&&m.variants?m.variants.find(ce=>ce.name===o.variantName):null,X=C&&C.img?C.img:m.img,G=X?Nt(X,"w400-rw"):"/favicon.png",j=m.name||"Produk Promo",u=o.variantName?` (${o.variantName})`:"";return`
        <div class="snap-start shrink-0 flex flex-col w-[150px] sm:w-[172px] md:w-[188px] ${n.length<=4?"lg:w-[220px] xl:w-[240px]":""}">
            <div class="flash-sale-card group relative flex flex-1 flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left">
                <!-- Badge Diskon Petir (Shopify Clean Pill) -->
                <div class="absolute left-1.5 top-1.5 z-10 flex items-center gap-1 rounded-full px-2 py-0.5 text-[8.5px] sm:text-[9px] font-bold uppercase tracking-wide text-white bg-rose-600 shadow-xs">
                    <i class="fa-solid fa-bolt text-amber-300 text-[8px]"></i>
                    <span>-${Math.max(1,p)}%</span>
                </div>

                ${L<=3&&!_&&k>0?`
                <div class="absolute right-1.5 top-1.5 z-10 flex items-center gap-1 rounded-full bg-amber-500 text-slate-950 px-2 py-0.5 text-[8px] sm:text-[8.5px] font-bold shadow-xs">
                    <span><i class="fa-solid fa-fire text-rose-700 text-[7.5px]"></i> Sisa ${L}!</span>
                </div>`:""}

                <!-- Foto Produk / Varian: Presisi Full Frame 1:1 Tanpa Padding Menjorok -->
                <div class="relative aspect-square w-full cursor-pointer overflow-hidden bg-slate-50 dark:bg-slate-950 flex items-center justify-center border-b border-slate-200 dark:border-slate-800/80 shrink-0" onclick="window.openProductModal && window.openProductModal('${x(m.id)}', false, '${x(o.variantName||"")}')">
                    <img src="${x(G)}" alt="${x(j)}" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='/favicon.png'">
                    ${_?`
                    <div class="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center p-2 text-center text-white">
                        <span class="rounded-lg px-2 py-0.5 text-[9px] font-black uppercase tracking-widest shadow-md text-white bg-rose-700">HABIS</span>
                        <span class="mt-0.5 text-[8.5px] font-medium text-slate-300">Kuota terpenuhi</span>
                    </div>`:""}
                </div>

                <!-- Detail & Harga -->
                <div class="flex flex-1 flex-col justify-between p-2.5 sm:p-3 min-w-0 bg-white dark:bg-slate-900 relative z-10">
                    <div>
                        <h4 class="line-clamp-2 text-xs sm:text-[13px] font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[var(--color-primary)] transition-colors leading-snug min-h-[2rem] sm:min-h-[2.3rem] cursor-pointer" title="${x(j+u)}" onclick="window.openProductModal && window.openProductModal('${x(m.id)}', false, '${x(o.variantName||"")}')">
                            ${x(j)}
                        </h4>
                        
                        <!-- Baris Badge Varian Terdedikasi: Ramping, Proporsional & Lapang -->
                        <div class="mt-1 flex items-center min-h-[18px]">
                            ${o.variantName?`
                                <span class="flash-variant-badge inline-flex items-center gap-1 text-[8px] sm:text-[8.5px] font-semibold px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shrink-0 max-w-full truncate shadow-none">
                                    <i class="fa-solid fa-shapes text-[7.5px] text-[var(--color-primary)] shrink-0"></i>
                                    <span class="truncate">${x(o.variantName)}</span>
                                </span>
                            `:'<span class="invisible text-[8px] py-0.5 select-none" aria-hidden="true">&nbsp;</span>'}
                        </div>
                        
                        <!-- Coretan Harga & Harga Kilat Harmonis -->
                        <div class="mt-1.5 flex flex-col">
                            <span class="text-[9.5px] sm:text-[10px] font-semibold text-slate-400 dark:text-slate-500 line-through leading-tight">
                                ${y(g)}
                            </span>
                            <span class="text-xs sm:text-[14px] lg:text-[15px] font-black truncate leading-tight mt-0.5 text-rose-600 dark:text-rose-400">
                                ${y(M)}
                            </span>
                        </div>
                    </div>

                    <!-- Footer FOMO Progress Bar & Tombol Aksi Beli Kilat -->
                    <div class="mt-auto pt-2 border-t border-slate-100 dark:border-slate-800/80">
                        <div class="mb-1.5">
                            <div class="flex items-center justify-between text-[8px] sm:text-[8.5px] font-extrabold text-slate-500 dark:text-slate-400 mb-0.5">
                                <span class="flex items-center gap-1"><i class="fa-solid fa-fire text-amber-500 text-[8px]"></i> ${_?"Terjual Habis":`Terjual ${v}/${k||"∞"}`}</span>
                                <span class="${de>=80?"text-rose-600 dark:text-rose-400 font-black":""}">${k>0?de+"%":"Terbatas"}</span>
                            </div>
                            <div class="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                                <div class="h-full rounded-full transition-all duration-500 ${_?"bg-slate-400":""}" style="${_?"":"background: linear-gradient(90deg, #f59e0b 0%, #ef4444 100%);"} width: ${_?100:Math.max(8,de)}%;"></div>
                            </div>
                        </div>

                        ${_?`
                        <button type="button" disabled class="btn-flash-buy-disabled w-full">
                            <span>Kuota Habis</span>
                        </button>`:`
                        <button type="button" onclick="window.quickBuyFlashSaleItem('${x(m.id)}', '${x(o.variantName||"")}')" class="btn-flash-buy w-full">
                            <i class="fa-solid fa-bolt text-amber-300 text-[10.5px]"></i>
                            <span>Beli Kilat</span>
                        </button>`}
                    </div>
                </div>
            </div>
        </div>`}).join("");if(!c||!c.trim()){e.innerHTML="",e.classList.add("hidden");return}e.classList.remove("hidden"),e.innerHTML=`
    <div class="bento-island-card relative overflow-hidden rounded-[1.75rem] p-3.5 sm:p-5 shadow-sm border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300">
        <!-- Top Accent Subtle Line -->
        <div class="h-1 w-full bg-gradient-to-r from-rose-500 via-amber-500 to-[var(--color-primary)] -mx-3.5 -mt-3.5 mb-3 sm:-mx-5 sm:-mt-5 sm:mb-4"></div>

        <!-- Header Panggung Flash Sale -->
        <div class="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-b border-slate-100 dark:border-slate-800 pb-3 mb-3">
            <div class="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                <div class="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shadow-xs">
                    <i class="fa-solid fa-bolt text-xl sm:text-2xl animate-pulse"></i>
                </div>
                <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        <span class="rounded-full px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white bg-rose-600 shadow-xs">PROMO KILAT</span>
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-300 border border-rose-200 dark:border-rose-900">
                            <span class="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping"></span> LIVE
                        </span>
                    </div>
                    <h3 class="text-sm sm:text-base md:text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 truncate mt-0.5">
                        ${x(t.title||"Flash Sale Spesial Hari Ini")}
                    </h3>
                    <p class="text-[10px] sm:text-[11px] font-normal text-slate-500 dark:text-slate-400 truncate">
                        Harga spesial terbatas! Segera checkout sebelum waktu atau kuota habis.
                    </p>
                </div>
            </div>

            <!-- Countdown Timer & Navigasi Desktop -->
            <div class="flex items-center justify-between sm:justify-end gap-2 shrink-0 self-stretch sm:self-auto pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                <!-- Countdown Timer Block (Shopify Sleek Dark Pill) -->
                <div class="flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 px-3 py-1.5 shadow-sm">
                    <div class="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold uppercase text-amber-400">
                        <i class="fa-solid fa-stopwatch text-rose-500 animate-bounce"></i>
                        <span class="tracking-wider">BERAKHIR:</span>
                    </div>
                    <div class="flex items-center gap-1 font-mono font-bold">
                        <span id="fs-cd-h" class="min-w-[24px] sm:min-w-[26px] text-center rounded bg-slate-800 text-amber-300 px-1 py-0.5 text-xs sm:text-sm font-bold border border-slate-700/80">${s.h}</span>
                        <span class="text-slate-400 font-bold animate-pulse">:</span>
                        <span id="fs-cd-m" class="min-w-[24px] sm:min-w-[26px] text-center rounded bg-slate-800 text-amber-300 px-1 py-0.5 text-xs sm:text-sm font-bold border border-slate-700/80">${s.m}</span>
                        <span class="text-slate-400 font-bold animate-pulse">:</span>
                        <span id="fs-cd-s" class="min-w-[24px] sm:min-w-[26px] text-center rounded bg-rose-600 text-white px-1 py-0.5 text-xs sm:text-sm font-bold shadow-xs">${s.s}</span>
                    </div>
                </div>

                <!-- Desktop Nav Buttons (< >) -->
                <div class="hidden sm:flex items-center gap-1.5 ml-1">
                    <button type="button" onclick="window.scrollFlashSaleLeft && window.scrollFlashSaleLeft()" class="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 active:scale-95 transition-all shadow-xs cursor-pointer" title="Geser Kiri">
                        <i class="fa-solid fa-chevron-left text-xs"></i>
                    </button>
                    <button type="button" onclick="window.scrollFlashSaleRight && window.scrollFlashSaleRight()" class="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 active:scale-95 transition-all shadow-xs cursor-pointer" title="Geser Kanan">
                        <i class="fa-solid fa-chevron-right text-xs"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Slider List Produk Flash Sale -->
        <div id="fs-cards-slider" class="relative z-10 flex gap-3 sm:gap-4 overflow-x-auto pb-2.5 pt-1 hide-scrollbar snap-x -mx-1 px-1 sm:mx-0 sm:px-0 scroll-smooth ${n.length<=4?"sm:justify-start lg:gap-5":""}">
            ${c}
        </div>
    </div>`,a&&(Ie=setInterval(()=>{const o=Math.max(0,a-Date.now());if(o<=0){clearInterval(Ie),Ie=null,Rt(),typeof window.rCat=="function"&&window.rCat();return}const m=xt(o),g=l("fs-cd-h"),M=l("fs-cd-m"),k=l("fs-cd-s");g&&(g.innerText=m.h),M&&(M.innerText=m.m),k&&(k.innerText=m.s)},1e3))},js=(e,t="")=>{const a=(b.products||[]).find(m=>String(m.id)===String(e));if(!a)return;if(a.variants&&a.variants.length>0&&!t){os(e);return}const r=t||(a.variants&&a.variants[0]?a.variants[0].name:""),i=window.getEffP?window.getEffP({id:a.id,price:a.price,variantName:r},"web"):a.price,s=r&&a.variants?a.variants.find(m=>m.name===r):null,n=s&&s.img?s.img:a.img||"",c=s&&parseFloat(s.poin)>0?parseFloat(s.poin):parseFloat(a.poin)||0,o=O.findIndex(m=>String(m.id)===String(a.id)&&String(m.variantName||"")===String(r||""));o>-1?O[o].qty=(parseFloat(O[o].qty)||0)+1:O.push({id:a.id,name:a.name,variantName:r,price:i,img:n,qty:1,unit:s&&s.unit||a.unit||"pcs",colorCode:s&&s.colorCode||"",poin:c});try{localStorage.setItem("freshmart_cart",JSON.stringify(O))}catch{}ns(),F(`"${a.name}${r?` (${r})`:""}" berhasil dimasukkan ke keranjang dengan harga Flash Sale!`,"success")},Bs=()=>{const e=l("fs-cards-slider");e&&e.scrollBy({left:-220,behavior:"smooth"})},Us=()=>{const e=l("fs-cards-slider");e&&e.scrollBy({left:220,behavior:"smooth"})};window.renderStorefrontFlashSale=Rt;window.quickBuyFlashSaleItem=js;window.scrollFlashSaleLeft=Bs;window.scrollFlashSaleRight=Us;let Ye=[];const Re=()=>{try{localStorage.setItem("freshmart_my_orders",JSON.stringify(N))}catch(e){console.warn("[MyOrders] Gagal menyimpan ke localStorage:",e)}},Ns=()=>{try{const e=localStorage.getItem("freshmart_my_orders");if(e){const t=JSON.parse(e);Array.isArray(t)&&t.length>0&&Ke(t)}}catch(e){console.warn("[MyOrders] Gagal memuat dari localStorage:",e)}return N},Et=()=>{Ye.forEach(e=>{try{typeof e=="function"&&e()}catch{}}),Ye=[]},Ot=()=>{Et(),N.filter(a=>{const r=a.status==="Selesai"||a.status==="Dibatalkan",i=a.claimedReward&&(a.claimedReward.status==="Menunggu Persetujuan"||!a.claimedReward.status);return!r||i}).slice(0,10).forEach(a=>{const r=a.orderId;if(!r)return;const i=W.collection("freshmart_orders").doc(r).onSnapshot(s=>{if(!s.exists)return;const n=s.data(),c=n.status,o=n.claimedReward?n.claimedReward.status:null,m=n.claimedReward&&n.claimedReward.note||"";let g=!1,M="";const k=N.find(v=>v.orderId===r);if(k){if(c&&k.status!==c){const v=k.status;k.status=c,g=!0,v!==void 0&&(M=`Pesanan #${r.split("-").pop()} kini: ${c}`)}k.claimedReward&&o&&(k.claimedReward.status!==o||k.claimedReward.note!==m)&&(k.claimedReward.status=o,k.claimedReward.note=m,g=!0),g&&(Re(),window.curViewName==="view-orders"&&Oe(),M&&F(M))}},s=>{console.warn("[MyOrders Realtime] Snapshot error:",s.message)});Ye.push(i)})},Oe=async()=>{if(Ns(),!N.length){fe("orders-empty-state"),R("btn-clear-orders"),fe("spacer-orders"),we("orders-items-container","");return}R("orders-empty-state"),fe("btn-clear-orders"),R("spacer-orders"),Ot(),we("orders-items-container",N.map((e,t)=>{const r=Pt(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});let i="text-slate-500 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",s="fa-clock";return e.status==="Baru"?(i="text-rose-600 border-rose-200 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400",s="fa-asterisk"):e.status==="Diproses"?(i="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",s="fa-spinner fa-spin"):e.status==="Selesai"?(i="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",s="fa-check-double"):e.status==="Dibatalkan"&&(i="text-slate-400 border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400",s="fa-xmark"),`
        <div class="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800/80 shadow-sm relative overflow-hidden group min-w-0 transition-all hover:border-[var(--color-primary)]/40 hover:shadow-md">
            <div class="flex justify-between items-start mb-3 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                <div>
                    <span class="font-bold text-sm text-slate-800 dark:text-white tracking-tight">#${e.orderId.split("-").pop()}</span>
                    <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5"><i class="fa-regular fa-calendar-days mr-1"></i>${r}</p>
                </div>
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-lg border ${i} uppercase tracking-wider flex items-center shadow-xs"><i class="fa-solid ${s} mr-1.5 text-[9px]"></i> ${x(e.status)}</span>
            </div>
            ${e.pointsEarned>0||e.claimedReward?`
            <div class="flex flex-wrap gap-1.5 mb-3">
                ${e.pointsEarned>0?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-amber-50 text-amber-600 border border-amber-200/90 dark:bg-amber-900/20 dark:border-amber-800/60 dark:text-amber-400"><i class="fa-solid fa-star mr-1"></i>+${e.pointsEarned} Poin</span>`:""}
                ${e.claimedReward?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)]/40 dark:text-[var(--color-primary)]"><i class="fa-solid fa-gift mr-1"></i>Hadiah: ${x(e.claimedReward.name)} ${it(e.claimedReward)}</span>`:""}
                ${e.claimedReward&&e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-slate-100 text-slate-500 border border-slate-200/90 dark:bg-slate-800 dark:border-slate-700/80 dark:text-slate-400"><i class="fa-solid fa-wallet mr-1"></i>Sisa: ${e.finalMemberPoints} Poin</span>`:""}
            </div>`:""}
            <div class="flex justify-between items-end mt-2 pt-1">
                <div>
                    <p class="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Total Tagihan</p>
                    <p class="text-[var(--color-primary)] font-bold text-base tracking-tight">${y(e.total)} <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium ml-1">(${e.itemCount} Item)</span></p>
                </div>
                <div class="flex gap-2">
                    <button onclick="openCustomerOrderDetail('${e.orderId}')" class="min-h-[38px] sm:min-h-[40px] px-3.5 sm:px-4 py-2 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] hover:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.35)] text-xs font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5 cursor-pointer"><i class="fa-solid fa-file-invoice"></i> Detail</button>
                    <button onclick="checkOrderStatus('${e.orderId}', ${t})" class="min-h-[38px] sm:min-h-[40px] px-3.5 sm:px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-slate-800/80 text-xs font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5 cursor-pointer"><i class="fa-solid fa-rotate"></i> Status</button>
                </div>
            </div>
        </div>`}).join(""))},Hs=async(e,t)=>{he("Melacak Status...");try{const a=await W.collection("freshmart_orders").doc(e).get();if(a.exists){const r=a.data();if(N[t])N[t].status=r.status;else{const i=N.findIndex(s=>s.orderId===e);i>-1&&(N[i].status=r.status)}Re(),Oe(),F(`Status Pesanan: ${r.status}`)}else F("Pesanan tidak ditemukan di server.")}catch(a){console.error("Gagal cek status pesanan:",a),F("Gagal mengambil data sistem. Periksa koneksi.")}finally{Z()}},Gs=async()=>{const e=l("order-tracking-input"),t=e?e.value.trim():"";if(!t){F("Masukkan ID Pesanan terlebih dahulu!");return}let a=t.replace(/^#/,"").trim();const r=N.find(i=>i.orderId===a||i.orderId.endsWith(a));if(r){et(r.orderId);return}he("Mencari Pesanan...");try{let i=await W.collection("freshmart_orders").doc(a).get();if(!i.exists&&!a.startsWith("ORD-")){const s="ORD-"+a,n=await W.collection("freshmart_orders").doc(s).get();n.exists&&(i=n,a=s)}if(i.exists){const s=i.data();N.some(c=>c.orderId===a)||(N.unshift({orderId:a,date:s.dateString||(s.timestamp?s.timestamp.toDate().toISOString():new Date().toISOString()),dateString:s.dateString||(s.timestamp?s.timestamp.toDate().toISOString():new Date().toISOString()),total:s.payment&&s.payment.grandTotal?s.payment.grandTotal:s.total||0,itemCount:(s.items||[]).reduce((c,o)=>c+(parseFloat(o.qty)||0),0),status:s.status||"Baru",pointsEarned:s.pointsEarned||0,claimedReward:s.claimedReward||null,finalMemberPoints:s.finalMemberPoints||null,customerType:s.customerType||"Pelanggan Umum",customer:s.customer||{},items:s.items||[],payment:s.payment||{},isTempo:!!s.isTempo}),Re(),Oe()),e&&(e.value=""),F("Pesanan berhasil ditemukan!"),et(a)}else F("Pesanan dengan ID tersebut tidak ditemukan.")}catch(i){console.error("Gagal melacak pesanan:",i),F("Gagal menghubungi server. Pastikan ID Pesanan sudah benar.")}finally{Z()}},Ks=()=>{Ht("Hapus Riwayat","Riwayat pesanan di perangkat ini akan dihapus. Pesanan tetap tersimpan di sistem toko. Lanjutkan?",()=>{Ke([]),Re(),Oe(),F("Riwayat lokal dibersihkan")})},et=async e=>{const t=Array.isArray(N)?N.find(a=>a.orderId===e):null;if(t&&t.items&&t.items.length>0){window.currentCustomerOrder=t,window.lastPrintedOrder=t,Ue(e,t,[]),W.collection("freshmart_orders").doc(e).get().then(async a=>{if(a.exists){const r=a.data();r.orderId=r.orderId||a.id||e;let i=[];if(r.status==="Selesai")try{i=(await W.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(o=>`${o.data().productId}::${o.data().variantName||""}`)}catch{}window.currentCustomerOrder=r,window.lastPrintedOrder=r;const s=N.findIndex(c=>c.orderId===r.orderId);s!==-1&&(Object.assign(N[s],r),Re());const n=document.getElementById("order-detail-modal");n&&!n.classList.contains("hidden")&&!n.classList.contains("opacity-0")&&Ue(e,r,i,!0)}}).catch(a=>console.warn("[MyOrders] Silent background fetch error:",a));return}he("Memuat Rincian...");try{const a=await W.collection("freshmart_orders").doc(e).get();if(!a.exists){F("Pesanan tidak ditemukan.");return}const r=a.data();r.orderId=r.orderId||a.id||e;let i=[];if(r.status==="Selesai")try{i=(await W.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(n=>`${n.data().productId}::${n.data().variantName||""}`)}catch{}if(window.currentCustomerOrder=r,window.lastPrintedOrder=r,Array.isArray(N)){const s=N.findIndex(n=>n.orderId===r.orderId);s!==-1&&(Object.assign(N[s],r),Re())}Ue(e,r,i)}catch(a){console.error("Gagal mengambil data pesanan:",a),F("Gagal memuat rincian pesanan. Coba beberapa saat lagi.")}finally{Z()}},Ue=(e,t,a=[],r=!1)=>{try{t&&(t.orderId=t.orderId||e,window.currentCustomerOrder=t,window.lastPrintedOrder=t);let i=document.getElementById("order-detail-modal");i||(i=document.createElement("div"),i.id="order-detail-modal",i.className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 opacity-0 pointer-events-none transition-opacity duration-300",document.body.appendChild(i));const s=x(t.customer&&t.customer.name?t.customer.name:"-"),n=x(t.customer&&t.customer.wa?t.customer.wa:"-"),c=x(t.customer&&t.customer.address?t.customer.address:"-"),o=t.customer&&t.customer.deliveryMethod==="delivery"?"Dikirim ke Alamat":"Ambil di Toko (Pickup)",m=x(t.customer&&t.customer.note?t.customer.note:""),g=!!(t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"),M=g?"Putri PayLater":x(t.payment&&t.payment.method?t.payment.method:"Cash / COD"),k=t.items||[],v=k.some(A=>A.poTime&&A.poTime!==""),_=k.map(A=>{const re=parseFloat(A.qty)||0,te=parseFloat(A.effectivePrice||A.price)||0,ae=re*te,S=`${A.id}::${A.variantName||""}`,pe=t.status==="Selesai"&&!a.includes(S)&&A.id!==void 0&&A.id!==null;return`
            <div class="flex gap-3 items-center border-b border-slate-100 dark:border-slate-800/80 py-3 last:border-0">
                <div class="w-12 h-12 rounded-xl bg-white dark:bg-slate-950 bg-cover bg-center shrink-0 border border-slate-200/90 dark:border-slate-800/80" style="background-image:url('${x(A.img||(b&&b.store?b.store.logo:""))}')"></div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate mb-0.5" title="${x(A.name)}">${x(A.name)}</p>
                    ${A.variantName||A.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${A.variantName?`<span class="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded text-[9px] font-semibold border border-slate-200/80 dark:border-slate-700">${x(A.variantName)}</span>`:""}
                        ${A.poTime?`<span class="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">PO ${x(A.poTime)}</span>`:""}
                    </div>
                    `:""}
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400">${re} ${x(A.unit||"pcs")} x ${y(te)}</p>
                    ${pe?`<button type="button" onclick="openReviewModal('${e}',${A.id},'${encodeURIComponent(A.variantName||"")}','${encodeURIComponent(A.name||"")}','${encodeURIComponent(t.customer?.name||"")}')" class="mt-1.5 text-[10px] font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1 transition-colors"><i class="fa-solid fa-star"></i> Berikan Ulasan</button>`:""}
                </div>
                <div class="text-right shrink-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-[var(--color-primary)]">${y(ae)}</p>
                </div>
            </div>
            `}).join(""),L=Pt(t).toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),p=Gt(t),C=p.subtotal,X=p.shipping,G=p.productDiscount,j=p.shippingDiscount,u=p.pointDiscount,ce=p.grandTotal;i.innerHTML=`
            <div class="modal-bottom-sheet bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-3xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col shadow-2xl transform translate-y-full sm:translate-y-10 scale-100 transition-transform duration-300 border border-slate-200/90 dark:border-slate-800 overflow-hidden pointer-events-auto" id="order-detail-content">
                <!-- DRAG PULL INDICATOR MOBILE -->
                <div class="sm:hidden w-full pt-3 pb-1 flex justify-center items-center shrink-0">
                    <div class="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full pull-indicator"></div>
                </div>

                <div class="px-5 sm:px-6 pt-3.5 sm:pt-5 pb-4 border-b-2 border-slate-900 dark:border-slate-700 flex justify-between items-center shrink-0 bg-white dark:bg-slate-900">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 border border-slate-900 dark:border-slate-700 shadow-2xs" style="background: var(--color-primary);">
                            <i class="fa-solid fa-receipt text-base"></i>
                        </div>
                        <div>
                            <h3 class="font-black text-slate-800 dark:text-white text-base leading-tight">Rincian Pesanan</h3>
                            <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">ID: #${e.split("-").pop()}</p>
                        </div>
                    </div>
                    <button onclick="closeCustomerOrderDetailModal()" class="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-rose-100 hover:text-rose-500 transition-colors active:scale-95 cursor-pointer" title="Tutup"><i class="fa-solid fa-xmark"></i></button>
                </div>
                
                <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6 hide-scrollbar text-sm" style="padding-bottom: max(6rem, calc(5rem + env(safe-area-inset-bottom))); -webkit-overflow-scrolling: touch; overscroll-behavior-y: contain; touch-action: pan-y;">
                    <div class="bg-slate-50 dark:bg-slate-950/60 p-4 rounded-xl border border-slate-200/90 dark:border-slate-800/80 flex justify-between items-center">
                        <div>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status Pesanan</p>
                            <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40">${x(t.status||"Baru")}</span>
                        </div>
                        <div class="text-right">
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Waktu Pembelian</p>
                            <p class="text-[11px] font-bold text-slate-700 dark:text-slate-300">${L}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800/80">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-user text-slate-400"></i> Info Pelanggan</h4>
                            <div class="space-y-1 text-xs">
                                <p class="font-bold text-slate-800 dark:text-slate-200">${s}</p>
                                ${t.customer&&t.customer.wa?`<a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${n}'); else window.open('https://wa.me/${n}', '_blank', 'noopener,noreferrer');" class="flex items-center gap-1 text-[var(--color-primary)] font-bold hover:underline cursor-pointer"><i class="fa-brands fa-whatsapp"></i> +${n}</a>`:""}
                                ${t.customer&&t.customer.lat&&t.customer.deliveryMethod==="delivery"?`<a href="https://www.google.com/maps?q=${x(t.customer.lat)},${x(t.customer.lng)}" target="_blank" class="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"><i class="fa-solid fa-location-dot"></i> Lihat Peta</a>`:""}
                            </div>
                        </div>
                        <div class="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800/80">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-truck text-slate-400"></i> Pengiriman & Bayar</h4>
                            <div class="space-y-1 text-xs">
                                <p><span class="text-slate-500 inline-block w-14">Metode</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${o}</span></p>
                                <p><span class="text-slate-500 inline-block w-14">Bayar</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${M.toUpperCase()}</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2.5">
                        <div class="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800/80">
                            <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1">Alamat Tujuan</p>
                            <p class="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">${c}</p>
                        </div>
                        ${m?`<div class="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800/80"><p class="text-[9px] font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest mb-1">Catatan Pembeli</p><p class="text-xs font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic">"${m}"</p></div>`:""}
                    </div>

                    ${t.buktiPayment?`
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-image text-[var(--color-primary)]"></i> Bukti Pembayaran</h4>
                        <a href="${x(t.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border-2 border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] transition-colors shadow-xs">
                            <img src="${x(t.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-52 object-cover" onerror="this.style.display='none'" loading="lazy">
                            <div class="bg-[rgba(var(--color-primary-rgb),0.06)] p-2 flex items-center justify-center gap-1.5 text-[10px] font-bold text-[var(--color-primary)]"><i class="fa-solid fa-arrow-up-right-from-square"></i> Buka Ukuran Penuh</div>
                        </a>
                    </div>`:""}
                    
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-basket-shopping text-slate-400"></i> Daftar Produk</h4>
                        <div class="bg-slate-50 dark:bg-slate-950/60 rounded-xl px-3 py-1 border border-slate-200/90 dark:border-slate-800/80">
                            ${_}
                        </div>
                    </div>

                    ${v?`
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
                            <div class="flex items-center gap-2"><i class="fa-solid fa-gift text-[var(--color-primary)]"></i><p class="text-xs font-bold text-[var(--color-primary)]">Klaim Hadiah: <b>${x(t.claimedReward.name)}</b> (${t.claimedReward.pointsCost} Poin)</p></div>
                            <p class="text-[11px] font-semibold text-[var(--color-primary)] mt-1 ml-5">${it(t.claimedReward)}</p>
                            ${t.claimedReward.note?`<p class="text-[11px] text-[var(--color-primary)]/70 italic mt-0.5 ml-5">"${x(t.claimedReward.note)}"</p>`:""}
                        </div>`:""}
                    </div>`:""}

                    <div class="bg-slate-50 dark:bg-slate-950/60 p-4 rounded-xl border border-slate-200/90 dark:border-slate-800/80 space-y-2 text-xs">
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Subtotal Produk</p><p class="font-bold text-slate-800 dark:text-white">${y(C)}</p></div>
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Ongkos Kirim</p><p class="font-bold text-slate-800 dark:text-white">${y(X)}</p></div>
                        ${j>0?`<div class="flex justify-between text-[var(--color-primary)]"><p>Diskon Ongkir</p><p class="font-bold">-${y(j)}</p></div>`:""}
                        ${G>0?`<div class="flex justify-between text-rose-500"><p>Diskon Promo</p><p class="font-bold">-${y(G)}</p></div>`:""}
                        ${u>0?`<div class="flex justify-between text-emerald-600 dark:text-emerald-400"><p>Diskon Poin Member</p><p class="font-bold">-${y(u)}</p></div>`:""}
                        ${g&&p.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Biaya Admin PayLater</p><p class="font-bold text-slate-800 dark:text-white">+${y(p.paylaterAdminFee)}</p></div>`:""}
                        ${g&&p.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Biaya Penanganan / Layanan</p><p class="font-bold text-slate-800 dark:text-white">+${y(p.paylaterServiceFee)}</p></div>`:""}
                        ${p.hasPpn?`
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>DPP (Dasar Pengenaan Pajak)</p><p class="font-bold text-slate-800 dark:text-white">${y(p.dppAmount)}</p></div>
                        <div class="flex justify-between text-amber-600 dark:text-amber-400"><p>${x(p.ppnLabel)}</p><p class="font-bold">${p.ppnAmount>0?(p.isInclusive?"":"+")+y(p.ppnAmount):"Rp 0"}</p></div>
                        `:""}
                        <div class="flex justify-between items-center border-t border-dashed border-slate-300 dark:border-slate-700 pt-3 mt-2">
                            <p class="font-bold text-slate-800 dark:text-white uppercase tracking-wider">Total Tagihan</p>
                            <p class="text-lg font-bold text-[var(--color-primary)]">${y(ce)}</p>
                        </div>
                        ${(()=>{if(!g)return"";const A=Array.isArray(t.payment?.paylaterSchedule)&&t.payment.paylaterSchedule.length>0?t.payment.paylaterSchedule:null,re=t.payment?.paylaterMonths||(A?A.length:1),te=t.payment?.paylaterMonthlyInstallment||(re>0?Math.round(ce/re):ce);let ae="";return A&&A.length>0&&(ae=`
                                <div class="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-700/80 space-y-2">
                                    <p class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                        <i class="fa-solid fa-calendar-days text-[var(--color-primary)]"></i> Rencana Jadwal Angsuran Anda:
                                    </p>
                                    <div class="space-y-2">
                                        ${A.map((S,pe)=>{const H=S.installmentIndex||S.installmentNo||S.installmentNumber||S.month||pe+1,B=S.dueDateFormatted||S.dueDateStr||(S.dueDate?new Date(S.dueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"),be=parseFloat(S.total||S.totalMonthly||S.totalInstallment)||te;return`
                                            <div class="p-3 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200/90 dark:border-slate-800/80 flex items-center justify-between gap-3 shadow-2xs">
                                                <div class="flex items-center gap-2.5 min-w-0">
                                                    <div class="w-8 h-8 rounded-xl bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] font-black text-xs flex items-center justify-center shrink-0">
                                                        ${H}
                                                    </div>
                                                    <div class="min-w-0">
                                                        <p class="text-xs font-bold text-slate-800 dark:text-white leading-tight">Bulan ke-${H}</p>
                                                        <p class="text-[10px] text-slate-400 font-mono mt-0.5">Jatuh Tempo: ${B}</p>
                                                    </div>
                                                </div>
                                                <div class="text-right shrink-0">
                                                    <p class="text-xs font-black font-mono text-[var(--color-primary)]">${y(be)}</p>
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
                                ${te?`
                                <div class="flex justify-between text-[var(--color-primary)] font-black text-xs">
                                    <span>Angsuran per Bulan (${re}x)</span>
                                    <span class="font-mono text-sm">${y(te)}/bln</span>
                                </div>`:""}
                                <div class="flex justify-between text-slate-600 dark:text-slate-400 text-xs">
                                    <span>Jatuh Tempo Pertama</span>
                                    <span class="font-bold">${t.payment?.tempoDueDate?new Date(t.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"}</span>
                                </div>
                                ${ae}
                            </div>`})()}
                    </div>

                    <div class="pt-3 flex flex-col sm:flex-row gap-3">
                        ${parseFloat(t.payment?.tempoBalance)>0&&t.status!=="Batal"&&t.payment?.paymentStatus!=="lunas"?`
                        <button type="button" onclick="if(typeof window.openClientPaymentModal==='function') window.openClientPaymentModal('${t.orderId}'); else if(typeof window.showToast==='function') window.showToast('Memuat modul pembayaran...');" class="neo-btn flex-1 h-12 py-3 px-4 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer" style="background: var(--color-primary);">
                            <i class="fa-solid fa-qrcode text-white"></i> Bayar Angsuran / Cicilan
                        </button>
                        `:""}
                        <button type="button" onclick="if(typeof window.openReceiptPreview==='function') window.openReceiptPreview('${t.orderId}'); else if(typeof window.printCustomerReceiptDirect==='function') window.printCustomerReceiptDirect('${t.orderId}'); else window.openCustomerReceiptPreview('${t.orderId}');" class="flex-1 h-12 py-3 px-4 rounded-2xl btn-primary text-xs font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-md">
                            <i class="fa-solid fa-eye text-white/90"></i><i class="fa-solid fa-print"></i> Preview &amp; Cetak Struk
                        </button>
                    </div>
                </div>
            </div>
        `,r||(i.classList.contains("opacity-0")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("customerOrder"),document.body.classList.add("overflow-hidden"),Me(i,"order-detail-content"))}catch(i){console.error("Error Render HTML Modal:",i),F("Gagal menampilkan detail. Coba lagi.")}},qs=(e=!1)=>{const t=()=>{const a=document.getElementById("order-detail-modal"),r=document.getElementById("order-detail-content");Ae(a,r,()=>{document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none):not(#order-detail-modal)')||document.body.classList.remove("overflow-hidden")})};typeof window.requestCloseModal=="function"?window.requestCloseModal("customerOrder",e,t):t()};window.attachMyOrdersRealtime=Ot;window.detachMyOrdersRealtime=Et;window.renderMyOrders=Oe;window.checkOrderStatus=Hs;window.trackOrderManual=Gs;window.clearMyOrders=Ks;window.openCustomerOrderDetail=et;window.renderOrderDetailModal=Ue;window.closeCustomerOrderDetailModal=qs;window.reviewPhotoFile=null;window.reviewRating=0;const Vs=(e,t,a,r,i)=>{const s=decodeURIComponent(a||""),n=decodeURIComponent(r||""),c=decodeURIComponent(i||"");let o=document.getElementById("review-modal");o||(o=document.createElement("div"),o.id="review-modal",o.className="fixed inset-0 z-[120] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",o.onclick=m=>{m.target===o&&dt()},document.body.appendChild(o)),window.reviewPhotoFile=null,window.reviewRating=0,o.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div class="min-w-0">
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-star text-amber-400"></i> Berikan Ulasan</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest truncate">${x(n)}</p>
                </div>
                <button onclick="closeReviewModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all shrink-0"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5 custom-scrollbar">
                <div class="text-center">
                    <p class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Beri Bintang</p>
                    <div class="flex items-center justify-center gap-2" id="review-star-picker">
                        ${[1,2,3,4,5].map(m=>`<button type="button" onclick="setReviewRating(${m})" class="review-star text-3xl text-slate-300 dark:text-slate-600 transition-all hover:scale-110" data-star="${m}"><i class="fa-solid fa-star"></i></button>`).join("")}
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
        </div>`,l("review-submit-btn").onclick=()=>ct(e,t,s,n,c),o.style.opacity="0",o.style.display="flex",requestAnimationFrame(()=>{o.style.transition="opacity 0.25s ease",o.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("review")},Ws=e=>{window.reviewRating=e,document.querySelectorAll(".review-star").forEach(t=>{const a=parseInt(t.dataset.star);t.classList.toggle("text-amber-400",a<=e),t.classList.toggle("text-slate-300",a>e),t.classList.toggle("dark:text-slate-600",a>e)})},zs=e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/")){F("Hanya file gambar yang diizinkan!");return}if(t.size>5*1024*1024){F("Ukuran gambar max 5MB!");return}window.reviewPhotoFile=t;const a=new FileReader;a.onload=r=>{l("review-photo-preview").src=r.target.result,fe("review-photo-preview-wrap"),R("review-photo-btn")},a.readAsDataURL(t)},Js=()=>{window.reviewPhotoFile=null,R("review-photo-preview-wrap"),fe("review-photo-btn");const e=l("review-photo-input");e&&(e.value="")},dt=(e=!1)=>{const t=document.getElementById("review-modal");if(!t||t.style.display==="none")return;const a=()=>{t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250)};if(typeof ke=="function")ke("review",e,a);else if(typeof window.requestCloseModal=="function")window.requestCloseModal("review",e,a);else{if(!e&&Se.length&&Se[Se.length-1]==="review"){Se.pop();try{history.back()}catch{}}a()}},ct=async(e,t,a,r,i)=>{if(!window.reviewRating||window.reviewRating<1)return F("Silakan beri bintang terlebih dahulu!");if(!st){ee(!0),he("Mengirim ulasan...");try{let s="";if(window.reviewPhotoFile&&typeof window.uploadBuktiToGDrive=="function"){const o=await window.uploadBuktiToGDrive(window.reviewPhotoFile,"review-"+e);o?s=o:F("Foto gagal diupload, ulasan tetap dikirim tanpa foto.")}const n=Date.now(),c={id:n,orderId:e||"",productId:t??0,variantName:a||"",productName:r||"",customerName:i||"Pelanggan",rating:window.reviewRating,text:ge("review-text")||"",photoUrl:s||"",adminReply:"",isVisible:!0,createdAt:Ce.firestore.FieldValue.serverTimestamp()};await W.collection("freshmart").doc("cms_data").collection("reviews").doc(n.toString()).set(c),tt.delete(t),dt(),F("Terima kasih atas ulasan Anda!"),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(s){console.error("Gagal mengirim ulasan:",s),F("Gagal mengirim ulasan: "+(s.message||"Error tidak diketahui"))}finally{ee(!1),Z()}}},tt=new Map,Qs=5*60*1e3,Zs=async e=>{if(!l("product-modal-reviews-container"))return;const a=i=>{const s=i.length?i.reduce((m,g)=>m+(parseFloat(g.rating)||0),0)/i.length:0,n=m=>Array.from({length:5},(g,M)=>`<i class="fa-solid fa-star ${M<Math.round(m)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join("");let c=`
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2"><i class="fa-solid fa-comment-dots text-amber-400"></i> Ulasan Pelanggan</h4>
                ${i.length?`<div class="flex items-center gap-1.5"><span class="flex text-xs">${n(s)}</span><span class="text-xs font-bold text-slate-600 dark:text-slate-300">${s.toFixed(1)}</span><span class="text-[10px] font-bold text-slate-400">(${i.length})</span></div>`:""}
            </div>`;if(!i.length){we("product-modal-reviews-container",c+`
            <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 text-center space-y-2">
                <div class="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-500 flex items-center justify-center mx-auto text-sm border border-amber-200/80 dark:border-amber-900/40">
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Belum Ada Ulasan</p>
                <p class="text-[11px] text-slate-400 max-w-xs mx-auto">Jadilah yang pertama mencoba dan memberikan ulasan bintang 5 untuk produk ini!</p>
            </div>`);return}const o=i.map(m=>{let g="";try{m.createdAt&&m.createdAt.toDate&&(g=m.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}))}catch{}return`
            <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div class="flex items-center justify-between mb-1.5">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${x(m.customerName||"Pelanggan")}</p>
                    <span class="text-[9px] font-bold text-slate-400">${g}</span>
                </div>
                <div class="flex text-[11px] mb-2">${n(m.rating)}</div>
                ${m.variantName?`<p class="text-[10px] font-bold text-slate-400 mb-1.5">Varian: ${x(m.variantName)}</p>`:""}
                ${m.text?`<p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${x(m.text)}</p>`:""}
                ${m.photoUrl?`<div class="w-16 h-16 rounded-xl overflow-hidden mb-3 border border-slate-200 dark:border-slate-700"><img src="${x(m.photoUrl)}" class="w-full h-full object-cover cursor-pointer" onclick="window.open('${x(m.photoUrl)}','_blank')" alt="Foto ulasan"></div>`:""}
                ${m.adminReply?`
                <div class="mt-2.5 p-3 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.2)] rounded-xl">
                    <p class="text-[10px] font-bold text-[var(--color-primary-dark)] dark:text-[var(--color-primary)] mb-1 flex items-center gap-1"><i class="fa-solid fa-reply"></i> Balasan Penjual</p>
                    <p class="text-xs text-slate-600 dark:text-slate-300">${x(m.adminReply)}</p>
                </div>`:""}
            </div>`}).join("");we("product-modal-reviews-container",c+`<div class="space-y-3">${o}</div>`)},r=tt.get(e);if(r&&Date.now()-r.timestamp<Qs){a(r.data);return}we("product-modal-reviews-container",`
        <div class="space-y-3 pt-2">
            <div class="flex items-center justify-between mb-3">
                <div class="h-4 w-32 rounded-md skeleton-shimmer"></div>
                <div class="h-3 w-16 rounded-md skeleton-shimmer"></div>
            </div>
            <div class="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-2">
                <div class="flex items-center justify-between">
                    <div class="h-3 w-28 rounded-md skeleton-shimmer"></div>
                    <div class="h-2.5 w-16 rounded-md skeleton-shimmer"></div>
                </div>
                <div class="h-3 w-20 rounded-md skeleton-shimmer"></div>
                <div class="h-3 w-full rounded-md skeleton-shimmer"></div>
                <div class="h-3 w-3/4 rounded-md skeleton-shimmer"></div>
            </div>
        </div>`);try{let s=(await W.collection("freshmart").doc("cms_data").collection("reviews").where("productId","==",e).get()).docs.map(n=>n.data()).filter(n=>n.isVisible!==!1);s.sort((n,c)=>{const o=n.createdAt&&n.createdAt.toMillis?n.createdAt.toMillis():0;return(c.createdAt&&c.createdAt.toMillis?c.createdAt.toMillis():0)-o}),tt.set(e,{data:s,timestamp:Date.now()}),a(s)}catch(i){console.warn("Gagal memuat ulasan:",i),we("product-modal-reviews-container",`
        <div class="p-4 text-center text-slate-400 text-xs font-semibold rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800">
            <i class="fa-solid fa-circle-exclamation text-slate-400 mr-1.5"></i> Belum ada ulasan yang dapat dimuat.
        </div>`)}};window.openReviewModal=Vs;window.setReviewRating=Ws;window.handleReviewPhotoSelect=zs;window.removeReviewPhoto=Js;window.closeReviewModal=dt;window.submitReview=ct;window.submitProductReview=ct;window.loadProductReviews=Zs;const Xs="admgaffidigital/tokoputri",Ys=`https://api.github.com/repos/${Xs}/releases/latest`,at="https://github.com/admgaffidigital/tokoputri/releases/latest/download/TokoPutri.OfficialStore.apk";let Pe=null,We=!1;const er=e=>!e||isNaN(e)?"8.0 MB":`${(e/(1024*1024)).toFixed(1)} MB`,tr=e=>{if(!e)return"Terbaru";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return"Terbaru"}},ar=async()=>{if(Pe)return Pe;if(We)return null;const e=Xe(b)||"v1.19.6";We=!0;try{const t=await fetch(Ys,{headers:{Accept:"application/vnd.github.v3+json"},cache:"no-store"});if(t.ok){const a=await t.json(),r=a.assets?.find(c=>c.name?.toLowerCase().endsWith(".apk"))||a.assets?.[0],i=a.tag_name||e,s=Fs(i,e)>0,n=s?e:i;Pe={tagName:n,name:`Toko Putri ( Official Store ) ${n}`,publishedAt:s?"20 Okt 2026":tr(a.published_at),fileSize:r?er(r.size):"15.8 MB",downloadUrl:r?.browser_download_url||at,notes:a.body||"",isLiveFetched:!0}}else throw new Error(`GitHub API HTTP ${t.status}`)}catch{const a=Xe(b)||"v1.19.6";Pe={tagName:a,name:`Toko Putri ( Official Store ) ${a}`,publishedAt:"20 Okt 2026",fileSize:"15.8 MB",downloadUrl:at,notes:"",isLiveFetched:!1}}finally{We=!1}return Pe},sr=()=>{let e=l("app-download-modal");return e||(e=document.createElement("div"),e.id="app-download-modal",e.className="fixed inset-0 z-[125] bg-slate-950/85 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&_t()},e.innerHTML=`
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
                    <span id="btn-download-apk-text">Unduh &amp; Pasang APK (<span id="app-modal-version-tag">v1.19.6</span>)</span>
                </button>
                <div class="flex items-center justify-between px-1 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                    <span class="flex items-center gap-1.5">
                        <i class="fa-brands fa-android text-emerald-500 text-xs"></i>
                        <span>Kompatibel: Android 7.0 (Nougat) s/d Android 15</span>
                    </span>
                    <span id="app-modal-published-date" class="hidden sm:inline">Rilis: 20 Okt 2026</span>
                </div>
            </div>

            <!-- Kartu QR Code untuk Pengguna Desktop / Laptop -->
            <div id="app-desktop-qr-card" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-emerald-200/60 dark:border-emerald-800/40 flex flex-col sm:flex-row items-center gap-4">
                <div class="w-28 h-28 bg-white p-2 rounded-xl shadow-xs border border-slate-200/80 dark:border-slate-700 shrink-0 flex items-center justify-center">
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

            <!-- Apa yang Baru (Highlights Changelog v1.19.6) -->
            <div class="space-y-2.5">
                <div class="flex items-center justify-between">
                    <h3 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-sparkles text-amber-500"></i>
                        <span id="app-modal-whats-new-title">Apa yang Baru di v1.19.6</span>
                    </h3>
                    <button type="button" onclick="closeAppDownloadModal(); if(typeof window.openChangelogModal==='function') window.openChangelogModal();" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline cursor-pointer">
                        Lihat Semua Riwayat
                    </button>
                </div>

                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Universal Native App Visual Harmony (v1.19.6):</b> Standardisasi visual native app terpadu, touch target 44px, tactile feedback, bottom sheet squircle 2rem, dan hover frame responsif desktop.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Presisi Modal POS, Barcode &amp; Presensi:</b> Tata letak kotak kembalian instan kasir, SKU barcode anti-wrap pada strip (-), dan judul modal presensi lapang anti-terpotong.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Sistem HRD &amp; Penggajian (Payroll):</b> Mesin kompensasi hulu-ke-hilir untuk seluruh staf &amp; owner direksi dengan ID Karyawan (EMP-xxx/OWN-001), presensi kehadiran, buku kasbon cicilan multi-bulan, potongan barang hilang, dan integrasi otomatis ke beban operasional toko.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Multi-Format Slip Gaji Resmi:</b> Cetak dokumen A4 PDF berstandar akuntansi resmi, struk kasir thermal 58mm/80mm, serta pengiriman slip gaji 1-klik melalui pesan WhatsApp ke nomor HP staf.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Transformasi Antarmuka Full Native App:</b> Mengeliminasi total tampilan klasik bawaan browser dengan Universal Theme Micro-Scrollbar 6px slim, Brand Theme Selection, dan layout responsif di semua perangkat.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Theme-Aware Shimmer Skeleton Engine:</b> Mengganti seluruh indikator loading spinner dan teks polos dengan placeholder shimmer beraksen warna toko dinamis pada etalase, ulasan produk, shift kasir, dan poin reward.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Bento Island Empty State &amp; Action Chips:</b> Tampilan data kosong elegan dengan ambient glow dan chip tombol aksi cepat (Reset Filter, WhatsApp, Scan Barcode, Tambah Data Baru).
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Harmonisasi Flash Sale &amp; Hadiah Poin:</b> Tombol teks kompak 'Tukar Hadiah' dan 'Beli Kilat' yang lapang, bebas meluber, serta dukungan promo Flash Sale produk multi-varian.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Pustaka Master Produk &amp; Multi-Varian:</b> Akses 27+ template produk bahan bangunan &amp; perkakas terstandar lengkap dengan multi-varian dan impor selektif per-produk.
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
    </div>`,document.body.appendChild(e),e)},rr=async()=>{const e=sr();if(!e)return;De("appDownload"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const a=l("app-download-modal-box");a&&a.classList.remove("translate-y-full","sm:translate-y-8")}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light");const t=await ar();if(t){const a=l("app-modal-version-tag"),r=l("app-modal-filesize"),i=l("app-modal-published-date");a&&(a.textContent=t.tagName),r&&(r.innerHTML=`<span>${x(t.fileSize)}</span>`),i&&(i.textContent=`Rilis: ${x(t.publishedAt)}`)}},_t=(e=!1)=>{const t=l("app-download-modal");!t||t.style.display==="none"||ke("appDownload",e,()=>{t.classList.add("opacity-0");const a=l("app-download-modal-box");a&&a.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{t.style.display="none"},300)})},ir=()=>{const e=l("btn-download-apk-action"),t=l("btn-download-apk-icon"),a=l("btn-download-apk-text");e&&e.classList.add("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-spinner fa-spin"),a&&(a.textContent="Menghubungkan ke Server Rilis..."),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.showToast=="function"&&window.showToast("Memulai unduhan TokoPutri(OfficialStore).apk terbaru. Cek panel notifikasi HP Anda!");const r=Pe?.downloadUrl||at,i=document.createElement("a");i.href=r,i.setAttribute("download","TokoPutri(OfficialStore).apk"),i.target="_blank",i.rel="noopener noreferrer",document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>{if(e&&e.classList.remove("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-circle-check text-white"),a){const s=Pe?.tagName||Xe(b)||"v1.19.6";a.textContent=`Unduh Ulang APK (${s})`}},2500)};window.openAppDownloadModal=rr;window.closeAppDownloadModal=_t;window.downloadLatestApk=ir;window.setCat=e=>{St(e),ot(1),typeof window.rCat=="function"&&window.rCat()};window.setBrand=e=>{Tt(e),ot(1),typeof window.rCat=="function"&&window.rCat()};const or=()=>{let e="",t=Ze==="Semua Produk";e+=`
    <button onclick="setCat('Semua Produk'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-colors">
            <i class="fa-solid fa-layer-group text-base sm:text-lg"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA</span>
        <i class="fa-solid fa-circle-check text-base ${t?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
    </button>`,b.categories.forEach(s=>{let n=Ze===s.name,c=s.img?`<img loading="lazy" src="${x(s.img)}" alt="${x(s.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Cat'">`:'<i class="fa-solid fa-box text-base sm:text-lg"></i>';e+=`
        <button onclick="setCat('${x(s.name)}'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${n?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden border border-slate-200 dark:border-slate-600">
                ${c}
            </div>
            <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 line-clamp-1 ${n?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${x(s.name)}</span>
            <i class="fa-solid fa-circle-check text-base ${n?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
        </button>`});const a=l("modal-category-list");a&&(a.innerHTML=`<div class="flex flex-col gap-2.5 pb-6 w-full">${e}</div>`);const r=l("category-modal"),i=l("category-modal-content");r&&i&&(r.classList.contains("hidden")&&De("category"),Me(r,i))};window.openCategoryModal=or;window.openBrandModal=()=>{let e="",t=Qe==="Semua Merek";e+=`
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA MEREK</span>
    </button>`,b.brands.forEach(s=>{let n=Qe===s.name,c=s.img?`<img loading="lazy" src="${x(s.img)}" alt="${x(s.name)}" class="w-full h-full object-contain p-1.5" >`:'<i class="fa-solid fa-tag text-lg sm:text-xl"></i>';e+=`
        <button onclick="setBrand('${x(s.name)}'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${n?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-2.5 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600">
                ${c}
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${n?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${x(s.name)}</span>
        </button>`});const a=l("modal-brand-grid");a&&(a.innerHTML=e);const r=l("brand-modal"),i=l("brand-modal-content");r&&i&&(r.classList.contains("hidden")&&De("brand"),Me(r,i))};window.closeCategoryModal=(e=!1)=>{const t=l("category-modal"),a=l("category-modal-content");t&&a&&ke("category",e,()=>{Ae(t,a)})};window.closeBrandModal=(e=!1)=>{const t=l("brand-modal"),a=l("brand-modal-content");t&&a&&ke("brand",e,()=>{Ae(t,a)})};window.openQuickMenuModal=()=>{const e=l("quickmenu-modal"),t=l("quickmenu-modal-content");if(e&&t){const a=t.querySelector(".overflow-y-auto");a&&(a.scrollTop=0),e.classList.contains("hidden")&&De("quickmenu"),Me(e,t)}};window.openTermsModal=()=>{const e=`
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
    `,t=b?.store?.terms,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;we("terms-modal-content-body",a);const r=l("terms-modal"),i=l("terms-modal-content");r&&i&&(r.classList.contains("hidden")&&De("terms"),Me(r,i))};window.closeTermsModal=(e=!1)=>{const t=l("terms-modal"),a=l("terms-modal-content");t&&a&&ke("terms",e,()=>{Ae(t,a)})};window.openPrivacyModal=()=>{const e=`
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
    `,t=b?.store?.privacy,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;we("privacy-modal-content-body",a);const r=l("privacy-modal"),i=l("privacy-modal-content");r&&i&&(r.classList.contains("hidden")&&De("privacy"),Me(r,i))};window.closePrivacyModal=(e=!1)=>{const t=l("privacy-modal"),a=l("privacy-modal-content");t&&a&&ke("privacy",e,()=>{Ae(t,a)})};window.closeQuickMenuModal=(e=!1)=>{const t=l("quickmenu-modal"),a=l("quickmenu-modal-content");t&&a&&ke("quickmenu",e,()=>{Ae(t,a)})};window.switchGuideTab=(e="customer")=>{["customer","pos","admin"].forEach(r=>{const i=l(`guide-tab-btn-${r}`),s=l(`guide-section-${r}`);r===e?(i&&(i.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-extrabold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer primary-bg text-white"),s&&s.classList.remove("hidden")):(i&&(i.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"),s&&s.classList.add("hidden"))});const a=document.querySelector("#shopping-guide-modal .custom-scrollbar");a&&(a.scrollTop=0)};window.openShoppingGuideModal=(e="customer")=>{const t=l("shopping-guide-modal"),a=l("shopping-guide-modal-content");t&&a&&(typeof window.switchGuideTab=="function"&&window.switchGuideTab(e),t.classList.contains("hidden")&&De("guide"),Me(t,a))};window.closeShoppingGuideModal=(e=!1)=>{const t=l("shopping-guide-modal"),a=l("shopping-guide-modal-content");t&&a&&ke("guide",e,()=>{Ae(t,a)})};window.navigateFromQuickMenu=e=>{closeQuickMenuModal(!0);const t=Se.indexOf("quickmenu");t>-1&&Se.splice(t,1),typeof e=="function"?(history.replaceState({view:Kt},"",window.location.href),e()):(history.replaceState({view:e},"",window.location.href),qt(e,!0))};let gt=!1,je=null;const Ge=async()=>gt?!0:je||(je=Promise.all([Ne(()=>import("./module-admin-DjN_Rq1a.js").then(e=>e.j),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),Ne(()=>import("./module-admin-DjN_Rq1a.js").then(e=>e.k),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)]).then(()=>(gt=!0,!0)),je);window.ensureAdminLoaded=Ge;window.checkAdminAccess=async()=>{if(he("Membuka Panel Owner..."),await Ge(),Z(),typeof window.__checkAdminAccessReal=="function")return window.__checkAdminAccessReal()};typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);typeof window<"u"&&(window.AndroidNativeApp||window.Capacitor||window.location&&(window.location.protocol==="capacitor:"||window.location.protocol==="ionic:"))&&document.documentElement.classList.add("is-native-app");Vt();window.firebase=Ce;window.db=W;window.DOMPurify=as;window.ensureScriptLoaded=Wt;if(typeof window<"u"){const e=window.print?window.print.bind(window):null;window.print=function(){window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():e&&e()}}window.uiPalettes=ls;window.hexToRgb=ds;window.applyUITheme=Dt;window.toggleTheme=cs;window.applyBackgroundStyle=$t;ps();const nr=localStorage.getItem("freshmart_ui_theme")||"emerald";Dt(nr,localStorage.getItem("freshmart_theme_color"));const ht=()=>{Ps();const e=localStorage.getItem("freshmart_bg_style")||"minimalist",t=localStorage.getItem("freshmart_bg_custom_url")||"";$t(e,t),Ss()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ht):ht();window.onerror=function(e,t,a,r,i){return console.error("Global Error Caught:",e,"at",a,":",r),typeof showToast=="function"&&showToast("Ops, ada kendala sistem."),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Promise Rejection Sentinel:",e.reason)});window.addEventListener("vite:preloadError",function(e){console.warn("[Vite] Chunk preload failed (new deployment detected). Auto-reloading...",e);const t="freshmart_preload_reload",a=sessionStorage.getItem(t),r=Date.now();(!a||r-parseInt(a,10)>1e4)&&(sessionStorage.setItem(t,String(r)),window.location.reload())});window.updateSEO=zt;window.injectJSONLD=Jt;window.rewardStatusLabel=it;window.getYouTubeId=Qt;window.parseVideoUrl=Zt;window.fixDriveVideo=Xt;window.fixDriveVideoPreview=Yt;let kt=It;window.calcTaxDetails=e=>{const t=b?.store||{},a=t.ppnEnabled===!0||t.ppnEnabled==="true",r=t.ppnRate!==void 0&&t.ppnRate!==null&&!isNaN(parseFloat(t.ppnRate))?Math.max(0,parseFloat(t.ppnRate)):11,i=t.ppnType||"exclusive",s=t.ppnShowZero!==!1,n=t.ppnTaxLabel||"PPN";if(!a||e<=0)return{ppnEnabled:!1,ppnRate:0,ppnType:i,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0,ppnShowZero:!1,ppnLabel:"PPN"};if(r===0)return{ppnEnabled:!0,ppnRate:0,ppnType:i,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0,ppnShowZero:s,ppnLabel:n};if(i==="inclusive"){const c=Math.round(e*100/(100+r)),o=e-c;return{ppnEnabled:!0,ppnRate:r,ppnType:"inclusive",ppnAmount:o,dppAmount:c,grandTotalAdd:0,ppnShowZero:s,ppnLabel:n}}else{const c=Math.round(e*r/100);return{ppnEnabled:!0,ppnRate:r,ppnType:"exclusive",ppnAmount:c,dppAmount:Math.max(0,e),grandTotalAdd:c,ppnShowZero:s,ppnLabel:n}}};typeof requestIdleCallback<"u"?requestIdleCallback(mt,{timeout:5e3}):setTimeout(mt,3e3);window.isAdm=!1;history.replaceState({view:"view-catalog"},"","");window.addEventListener("DOMContentLoaded",async()=>{try{Mt()}catch(e){console.warn("[NativeMobile] Error:",e)}await ms();try{us()}catch(e){console.warn("[syncAppMeta] Error:",e)}fs(),ws(),wt(),window.attachRewardsRealtime=wt,Ne(()=>import("./module-pos-BVj6x9nJ.js").then(e=>e.X),__vite__mapDeps([4,1,2,3,5,6]),import.meta.url).then(e=>{typeof e.initPOSAuth=="function"&&e.initPOSAuth()}).catch(e=>console.warn("[POS Auth] Gagal inisialisasi:",e)),qe.onAuthStateChanged(async e=>{if(!As()){if(e&&e.uid!==Ee){try{const t=await W.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(e.uid).get();if(t.exists){const a=t.data()||{};if(a.isActive===!1){if(Ve(),typeof window.detachAllAdminListenersBeforeSignOut=="function")try{window.detachAllAdminListenersBeforeSignOut()}catch{}else{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}}await qe.signOut();return}const r={uid:e.uid,name:a.name||e.email,email:a.email||e.email,role:a.role||_e.CASHIER,permissions:a.permissions||null,isActive:!0};if(ut(r),r.role===_e.CASHIER){Ne(()=>import("./module-pos-BVj6x9nJ.js").then(s=>s.X),__vite__mapDeps([4,1,2,3,5,6]),import.meta.url).then(s=>{typeof s.setCashierSession=="function"&&s.setCashierSession(r)}).catch(()=>{}),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();return}await Ge(),window.isAdm=!0,window.__localIsAdm=!0,bt(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();let i=document.getElementById("view-admin-login");i&&!i.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu());return}}catch{}if(Ve(),typeof window.detachAllAdminListenersBeforeSignOut=="function")try{window.detachAllAdminListenersBeforeSignOut()}catch{}else{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}}await qe.signOut();return}if(e&&e.uid===Ee){ut({uid:Ee,name:"Owner Toko",email:e.email,role:_e.OWNER,isActive:!0});try{sessionStorage.setItem("pos_cashier_session",JSON.stringify({uid:Ee,name:"Owner Toko",email:e.email,role:_e.OWNER}))}catch{}await Ge(),await Ds(),$s(),window.isAdm=!0,window.__localIsAdm=!0,bt(),typeof window.updatePOSHeaderIcon=="function"?window.updatePOSHeaderIcon():typeof window.initPOSAuth=="function"&&window.initPOSAuth();let t=document.getElementById("view-admin-login");t&&!t.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu(),showToast("Sesi Owner Dipulihkan! Selamat Datang."))}else{if(Is(),localStorage.removeItem("freshmart_admin_session_id"),Ve(),window.isAdm=!1,window.__localIsAdm=!1,bs(),typeof window.detachAllAdminListenersBeforeSignOut=="function")try{window.detachAllAdminListenersBeforeSignOut()}catch{}else{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()}}})});window.el=l;window.show=fe;window.hide=R;window.toggleCls=le;window.setIn=se;window.setH=we;window.setV=Fe;window.getV=ge;window.esc=x;window.fixD=rt;window.fCur=y;window.fAccounting=ea;window.sL=ze;window.ssL=Be;window.defaultFbC=nt;window.fbC=nt;window.FIREBASE_CONFIG=nt;window.defApp=ta;window.ADMIN_UID=Ee;window.sLoad=he;window.hLoad=Z;window.sanitizeCart=xs;window.initNativeMobileEngine=Mt;window.triggerHaptic=aa;window.checkAndEnforceSubscriptionLockout=gs;window.renderSubscriptionNoticeInCMS=hs;window.openRenewalModal=ks;window.closeRenewalModal=ys;window.verifyAndApplyLicenseKey=vs;const T=(e,t,a)=>{try{Object.defineProperty(window,e,{get:t,set:a,configurable:!0})}catch{}};T("GAS_UPLOAD_URL",()=>kt,e=>{kt=e});T("confirmCb",()=>sa,e=>{Wa(e)});T("appData",()=>b,e=>{ra(e)});T("cart",()=>O,e=>{yt(e)});T("wishlist",()=>oa,e=>{ia(e)});T("myOrders",()=>N,e=>{Ke(e)});T("cust",()=>d,e=>{vt(e)});T("currentMember",()=>I,e=>{Je(e)});T("selectedReward",()=>Te,e=>{Le(e)});T("memberCheckTimer",()=>na,e=>{za(e)});T("aCat",()=>Ze,e=>{St(e)});T("aBrand",()=>Qe,e=>{Tt(e)});T("sQ",()=>da,e=>{la(e)});T("cSort",()=>pa,e=>{ca(e)});T("cView",()=>ua,e=>{ma(e)});T("cPage",()=>fa,e=>{ot(e)});T("iPP",()=>ba,e=>{wa(e)});T("cTab",()=>xa,e=>{Ja(e)});T("aSq",()=>ga,e=>{Qa(e)});T("eId",()=>ha,e=>{Za(e)});T("cProd",()=>ya,e=>{ka(e)});T("cVar",()=>Pa,e=>{va(e)});T("tVars",()=>Sa,e=>{Xa(e)});T("tWhol",()=>Ta,e=>{Ya(e)});T("tSpec",()=>Ma,e=>{es(e)});T("cQty",()=>Da,e=>{Aa(e)});T("oMods",()=>Se,e=>{$a(e)});T("aOrdLst",()=>Fa,e=>{Ia(e)});T("aCustLst",()=>Ca,e=>{La(e)});T("aRevLst",()=>Ea,e=>{Ra(e)});T("gOrds",()=>_a,e=>{Oa(e)});T("gReviews",()=>Ba,e=>{ja(e)});T("cVOrd",()=>Na,e=>{Ua(e)});T("vouch",()=>w,e=>{ye(e)});T("toastT",()=>Ha,e=>{ts(e)});T("isSaving",()=>st,e=>{ee(e)});T("reviewFilterMode",()=>Ka,e=>{Ga(e)});T("lastReportPeriod",()=>Va,e=>{qa(e)});
