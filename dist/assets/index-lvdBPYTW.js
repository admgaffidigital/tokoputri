const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./module-admin-CH34RU7u.js","./module-print-DqLQhhAD.js","./vendor-firebase-core-D2OF5R23.js","./vendor-firebase-db-BIUZcnOd.js","./module-pos-DgTC3RP6.js","./module-member-DqB1jc8p.js","./module-faq-CEX-NgnC.js","./vendor-sortable-DzmX_rHT.js"])))=>i.map(i=>d[i]);
import{a as x,g as ge,d,e as l,aR as f,j as ke,h as R,a4 as ie,c as B,f as h,a1 as Y,b as fe,i as w,ab as Bt,aa as Ut,y as Te,s as ue,U as st,aN as ze,ak as Be,V as ce,l as he,n as re,p as I,q,t as U,aS as Ke,w as Je,aj as kt,G as Le,aT as vt,x as Fe,k as $,m as rt,am as Nt,B as Pt,$ as it,H as Ht,Z as Gt,o as Me,v as Ae,r as ye,af as Se,ai as De,aA as St,aC as ot,aD as Tt,aw as Qe,au as Kt,aU as qt,av as Ze,aV as Vt,X as Wt,aW as zt,aX as Jt,ap as Qt,aK as Zt,aM as Xt,aL as Yt,aY as mt,aZ as Mt,_ as Ne,A as qe,J as Ee,F as Ve,R as _e,K as ut,a3 as ea,aO as nt,a2 as ta,a_ as aa,a$ as sa,b0 as ra,b1 as ia,al as oa,b2 as na,aH as la,aE as da,aI as ca,aF as pa,aJ as ma,aG as ua,ax as fa,b3 as wa,ay as ba,b4 as xa,b5 as ga,b6 as ha,at as ya,an as ka,as as va,ao as Pa,b7 as Sa,b8 as Ta,b9 as Ma,ar as Aa,aq as Da,ba as Ia,M as $a,L as La,O as Fa,N as Ca,Q as Ra,P as Ea,a0 as Oa,u as _a,ag as ja,a7 as Ba,Y as Ua,W as Na,bb as Ha,a9 as Ga,a8 as Ka,S as qa,I as Va,bc as Wa,bd as za,T as Ja,ah as Qa,be as Za,bf as Xa,bg as Ya,bh as es,bi as ts}from"./module-print-DqLQhhAD.js";import{f as Ce}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import{p as as}from"./vendor-utils-DqNA57iZ.js";import{g as At,w as ss,x as ft,h as rs,y as is,z as os,A as ns,u as ls,B as ds,e as Dt,C as cs,f as It,D as ps,E as ms,v as us,F as fs,G as ws,H as wt,a as bt,d as bs,I as xs,J as gs,K as hs,L as ys,M as ks,N as vs,O as Ps,P as Ss}from"./module-pos-DgTC3RP6.js";import{G as Ts,a as $t,u as Ms}from"./module-member-DqB1jc8p.js";import{i as As,a as Ds,b as Is,d as $s}from"./module-admin-CH34RU7u.js";import{a as Xe,c as Ls}from"./module-faq-CEX-NgnC.js";import"./vendor-sortable-DzmX_rHT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();const Fs=()=>{const e=l("toggle-droppoint"),t=l("droppoint-form");if(!(!e||!t))if(e.checked)t.classList.remove("hidden");else{t.classList.add("hidden"),d.dropPoint=null;const a=l("dp-location-status");a&&a.classList.add("hidden");const s=l("btn-dp-location");l("text-dp-location"),s&&(s.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>')}},Cs=()=>{if(!navigator.geolocation){typeof window.showToast=="function"&&window.showToast("GPS tidak didukung");return}const e=l("btn-dp-location");e&&(e.innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i> Mengambil GPS...'),navigator.geolocation.getCurrentPosition(t=>{d.dropPoint||(d.dropPoint={}),d.dropPoint.lat=t.coords.latitude,d.dropPoint.lng=t.coords.longitude;const a=l("dp-location-status");a&&a.classList.remove("hidden"),e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">GPS Berhasil! Tap untuk Update</span>'),typeof window.showToast=="function"&&window.showToast("GPS Lokasi Tujuan Berhasil!")},()=>{e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>'),typeof window.showToast=="function"&&window.showToast("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})},Lt=e=>{if(!e||e.trim().length<5)return;const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){d.dropPoint||(d.dropPoint={}),d.dropPoint.lat=parseFloat(a.lat),d.dropPoint.lng=parseFloat(a.lng);const s=l("dp-location-status");s&&s.classList.remove("hidden"),typeof window.showToast=="function"&&window.showToast("Koordinat Lokasi Tujuan berhasil!")}},Rs=async()=>{try{const e=await navigator.clipboard.readText(),t=l("dp-maps-input");t&&(t.value=e,Lt(e))}catch{typeof window.showToast=="function"&&window.showToast("Gagal membaca clipboard")}},Es=()=>{if(x.store.isDeliveryEnabled===!1&&x.store.isPickupEnabled===!1){typeof window.showToast=="function"&&window.showToast("Toko tutup!");return}const e=ge("cust-name"),t=(document.querySelector('input[name="delivery-method"]:checked')||{}).value;if(!e||!t){typeof window.showToast=="function"&&window.showToast("Lengkapi form nama!");return}let a=ge("cust-wa").replace(/\D/g,"");if(!a||a.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp wajib diisi! (min. 9 digit)");return}if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),d.name=e,d.deliveryMethod=t,d.note=ge("cust-note"),d.wa=a,t==="delivery"){if(d.address=ge("cust-address"),!d.lat||!d.lng){const o=l("cust-maps-input")?.value;o&&typeof window.handleCustomerMapsInput=="function"&&window.handleCustomerMapsInput(o)}if(!d.address||!d.lat||!d.lng){typeof window.showToast=="function"&&window.showToast("Alamat & GPS wajib!");return}const s=typeof window.getDist=="function"?window.getDist:()=>0;d.distance=s(parseFloat(x.store.lat||0),parseFloat(x.store.lng||0),d.lat,d.lng)||0;const i=l("toggle-droppoint");if(i&&i.checked){let o=ge("dp-receiver-name").trim(),c=ge("dp-receiver-wa").replace(/\D/g,""),n=ge("dp-address").trim();if(!o){typeof window.showToast=="function"&&window.showToast("Nama penerima di lokasi tujuan wajib diisi!");return}if(!c||c.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WA penerima di lokasi tujuan wajib diisi (min. 9 digit)!");return}if(!n){typeof window.showToast=="function"&&window.showToast("Alamat lokasi tujuan wajib diisi!");return}if(!d.dropPoint||!d.dropPoint.lat||!d.dropPoint.lng){typeof window.showToast=="function"&&window.showToast("GPS / Koordinat lokasi tujuan wajib diisi untuk kalkulasi ongkir!");return}c.startsWith("0")?c="62"+c.substring(1):c.startsWith("62")||(c="62"+c),d.dropPoint.name=o,d.dropPoint.wa=c,d.dropPoint.address=n,d.distance=s(parseFloat(x.store.lat||0),parseFloat(x.store.lng||0),d.dropPoint.lat,d.dropPoint.lng)||0}else d.dropPoint=null}else d.address="Ambil di Toko",d.distance=0,d.dropPoint=null;f&&f.type&&f.type.includes("shipping")&&t!=="delivery"&&ke(null),l("voucher-input")&&!f&&(l("voucher-input").value="",R("voucher-msg-container")),typeof window.changeView=="function"&&window.changeView("view-payment")},lt=()=>{ie("address-container","hidden",(document.querySelector('input[name="delivery-method"]:checked')||{}).value==="pickup")},Ft=()=>{const e=l("tnc-checkbox"),t=l("btn-process-order");!e||!t||(e.checked?t.classList.remove("btn-disabled"):t.classList.add("btn-disabled"))},Ct=()=>{if(!B.length){typeof window.showToast=="function"&&window.showToast("Keranjang belanja kosong!"),typeof window.changeView=="function"&&window.changeView("view-catalog",!0);return}if(!d.name){typeof window.showToast=="function"&&window.showToast("Lengkapi data pengiriman terlebih dahulu!"),typeof window.changeView=="function"&&window.changeView("view-checkout",!0);return}const e=typeof window.getEffP=="function"?window.getEffP:p=>p.price||0,t=B.reduce((p,C)=>p+(parseFloat(e(C))||0)*(parseFloat(C.qty)||0),0);let a=0,s=0,i=0;if(d.deliveryMethod==="delivery"&&(a=Math.ceil((parseFloat(d.distance)||0)*(parseFloat(x.store.costPerKm)||0)/500)*500),f&&(f.minPurchase&&parseFloat(f.minPurchase)>0&&t<parseFloat(f.minPurchase)?(ke(null),R("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast(`Voucher dibatalkan (min. belanja ${h(f.minPurchase)})`)):f.targetProduct&&!B.some(p=>p.id===parseInt(f.targetProduct))&&(ke(null),R("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast("Voucher dibatalkan (produk khusus dihapus)"))),f){let p=t;if(f.targetProduct&&f.targetProduct!==""){const C=parseInt(f.targetProduct);p=B.filter(G=>G.id===C).reduce((G,O)=>G+(parseFloat(e(O))||0)*(parseFloat(O.qty)||0),0)}if(f.type==="shipping_free")s=a;else if(f.type==="shipping_flat")s=parseFloat(f.value)||0;else if(f.type==="percent"){let C=p*((parseFloat(f.value)||0)/100);f.maxDiscount&&parseFloat(f.maxDiscount)>0&&(C=Math.min(C,parseFloat(f.maxDiscount))),i=C}else i=parseFloat(f.value)||0,i=Math.min(i,p)}const r=(x.store.freeShippingMinSpendEnabled===!0||x.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(x.store.freeShippingMinSpendAmount)||0)>0&&t>=(parseFloat(x.store.freeShippingMinSpendAmount)||0)&&d.deliveryMethod==="delivery";r&&(s=a),s=Math.min(s,a),i=Math.min(i,t);const o=Math.max(0,t-i+(a-s)),n=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(o),m=n.ppnAmount,T=o+n.grandTotalAdd;Y("summary-subtotal",h(t)),ie("summary-shipping-row","hidden",d.deliveryMethod!=="delivery");const L=l("summary-discount-row");if(L)if(i>0||s>0){L.classList.remove("hidden");let p="";i>0&&(p+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Promo</p><p class="text-[13px] font-bold text-rose-500">-${h(i)}</p></div>`),s>0&&(p+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">${r?"Gratis Ongkir (Promo Belanja)":"Diskon Ongkir"}</p><p class="text-[13px] font-bold text-rose-500">-${h(s)}</p></div>`),L.innerHTML=p}else L.classList.add("hidden");d.deliveryMethod==="delivery"&&(Y("summary-shipping",h(a)),Y("summary-distance",`(${d.distance.toFixed(1)}km)`)),Y("summary-total",h(T)),l("btn-total-preview")&&Y("btn-total-preview",h(T));const v=l("summary-ppn-row");if(v)if(n.ppnEnabled&&(m>0||n.ppnShowZero||n.ppnRate===0)){v.classList.remove("hidden");const C=n.ppnRate!==void 0?`${n.ppnRate}%`:"11%",W=n.ppnLabel||(n.ppnType==="inclusive"?`Termasuk PPN (${C})`:`PPN (${C})`);Y("summary-ppn-label",W),n.ppnType==="inclusive"?Y("summary-ppn",h(m)):Y("summary-ppn",m>0?`+${h(m)}`:h(0))}else v.classList.add("hidden");Y("payment-cust-name",d.name||"-"),l("payment-cust-wa")&&(l("payment-cust-wa").textContent=d.wa?"+"+d.wa:"-"),d.dropPoint&&d.dropPoint.lat?Y("payment-cust-method",`Kirim ke Lokasi Berbeda (${d.distance.toFixed(1)}km dari Toko)`):Y("payment-cust-method",d.deliveryMethod==="delivery"?`Dikirim (${d.distance.toFixed(1)}km)`:"Ambil di Toko"),Y("payment-cust-address",d.address||"-");const M=l("payment-droppoint-info");if(M)if(d.dropPoint&&d.dropPoint.lat&&d.dropPoint.name){M.classList.remove("hidden"),Y("payment-dp-name",d.dropPoint.name||"-");const p=l("payment-dp-wa");p&&(p.textContent=d.dropPoint.wa?"+"+d.dropPoint.wa:"-"),Y("payment-dp-address",d.dropPoint.address||"-")}else M.classList.add("hidden");fe("payment-items-preview",B.map(p=>{const C=p.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${w(p.variantName)}</span>`:"",W=p.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${w(p.poTime)}</span>`:"",G=!!(p.img&&typeof p.img=="string"&&p.img.trim()&&!Bt(p.img)),O=Ut(p,{size:"thumb"});return`
        <div class="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
            <div class="flex items-center gap-3.5 min-w-0">
                <div class="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0 overflow-hidden flex items-center justify-center">
                    ${G?`<img loading="lazy" src="${w(p.img)}" alt="${w(p.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${O}</div>`:O}
                </div>
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate mb-1" title="${w(p.name)}">${w(p.name)}</p>
                    ${p.variantName||p.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${C}
                        ${W}
                    </div>`:""}
                    <p class="text-[11px] text-[var(--color-primary)] font-bold">${parseFloat(p.qty)} ${w(p.unit||"pcs")} x ${h(e(p))}</p>
                </div>
            </div>
            <div class="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap ml-3 shrink-0">${h(e(p)*parseFloat(p.qty))}</div>
        </div>`}).join("")+(Te?`<div class="flex justify-between items-center bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] p-4 rounded-2xl border border-[var(--color-primary)]/30 shadow-sm min-w-0"><div class="flex items-center gap-3.5 min-w-0"><div class="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div><div class="min-w-0"><p class="text-sm font-bold text-[var(--color-primary)] truncate">${w(Te.name)}</p><p class="text-[11px] text-[var(--color-primary)] font-bold mt-1"><i class="fa-solid fa-star mr-1"></i>Tukar ${Te.pointsCost} Poin (Gratis)</p></div></div><button type="button" onclick="if(typeof deselectReward==='function') deselectReward(); rPay();" class="text-[10px] font-bold text-rose-500 uppercase shrink-0 ml-3">Batal</button></div>`:"")),d.note?(Y("payment-note-text",`"${w(d.note)}"`),ue("payment-note-preview")):R("payment-note-preview"),fe("dynamic-banks-container",x.banks?.length?x.banks.map(p=>`<div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Bank ${w(p.bankName)}</p><p class="text-lg font-bold text-[var(--color-primary)] tracking-wide">${w(p.bankAccount)}</p><p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1.5">a.n <span class="font-bold text-slate-700 dark:text-white">${w(p.bankOwner)}</span></p></div>`).join(""):'<div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 p-4 rounded-2xl text-center"><p class="text-sm text-rose-500 dark:text-rose-400 font-bold">Rekening belum diatur.</p></div>');const H=l("payment-option-cashier"),pe=l("payment-option-cod");if(H&&pe){if(d.deliveryMethod==="pickup"){if(ue("payment-option-cashier"),R("payment-option-cod"),(document.querySelector('input[name="payment"]:checked')||{}).value==="cod"){const p=document.querySelector('input[value="cashier"]');p&&(p.checked=!0)}}else{R("payment-option-cashier"),ue("payment-option-cod");const p=(document.querySelector('input[name="payment"]:checked')||{}).value;if(p==="cashier"||!p){const C=document.querySelector('input[value="cod"]');C&&(C.checked=!0)}}typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()}const F=l("tnc-checkbox");F&&(F.checked=!1,Ft())},Os=async()=>{if(!l("tnc-checkbox").checked||st)return;if(window.isAdm){typeof window.showToast=="function"&&window.showToast("Sesi Pengelola Aktif. Silakan keluar akun untuk membuat pesanan online.");return}const e=ze("freshmart_last_order");if(e&&Date.now()-parseInt(e)<6e4){typeof window.showToast=="function"&&window.showToast("Pesanan sebelumnya sedang kami proses. Mohon beri jeda 1 menit sebelum memesan kembali.");return}const t=typeof window.getEffP=="function"?window.getEffP:r=>r.price||0,a=typeof window.getEffHpp=="function"?window.getEffHpp:()=>0,s=typeof window.getEffPoin=="function"?window.getEffPoin:()=>0;let i=!1;if(B.forEach(r=>{const o=x.products.find(n=>n.id===r.id);if(!o)return;const c=r.variantName?((o.variants||[]).find(n=>n.name===r.variantName)||{}).price??o.price:o.price;c!==void 0&&Math.abs(r.price-c)>1&&(r.price=c,i=!0),r.poin=s(r)}),i){Be("freshmart_cart",JSON.stringify(B)),typeof window.renderCart=="function"&&window.renderCart(),Ct(),typeof window.showToast=="function"&&window.showToast("Katalog harga telah diperbarui. Mohon periksa kembali rincian belanja Anda.");return}ce(!0),he("Memproses Pesanan Anda...");try{const r=B.reduce((b,g)=>b+(parseFloat(t(g))||0)*(parseFloat(g.qty)||0),0);let o=0,c=0,n=0;d.deliveryMethod==="delivery"&&(o=Math.ceil((parseFloat(d.distance)||0)*(parseFloat(x.store.costPerKm)||0)/500)*500);const m=x.store.useStock===!0||x.store.useStock==="true";if(m)for(const b of B){const g=x.products.find(P=>P.id===b.id);if(!g||!!(g.poTime&&String(g.poTime).trim()))continue;const D=parseFloat(b.qty)||0;if(b.variantName){const P=(g.variants||[]).find(ne=>ne.name===b.variantName),E=P?P.stock!=null&&P.stock!==""?P.stock:P.stok!=null&&P.stok!==""?P.stok:null:null,V=E!=null&&!isNaN(parseFloat(E))?parseFloat(E):0;if(V<D){ce(!1),re(),typeof window.showToast=="function"&&window.showToast(`Persediaan ${b.name} (${b.variantName}) tidak mencukupi (tersisa ${V} unit).`);return}}else{const P=g.stock!=null&&g.stock!==""?g.stock:g.stok!=null&&g.stok!==""?g.stok:null,E=P!=null&&!isNaN(parseFloat(P))?parseFloat(P):0;if(E<D){ce(!1),re(),typeof window.showToast=="function"&&window.showToast(`Persediaan ${b.name} tidak mencukupi (tersisa ${E} unit).`);return}}}if(f){let b=r;if(f.targetProduct&&f.targetProduct!==""){const g=parseInt(f.targetProduct);b=B.filter(D=>D.id===g).reduce((D,P)=>D+(parseFloat(t(P))||0)*(parseFloat(P.qty)||0),0)}if(f.minPurchase&&parseFloat(f.minPurchase)>0&&r<parseFloat(f.minPurchase))ke(null);else if(f.targetProduct&&f.targetProduct!==""&&b===0)ke(null);else if(f.type&&f.type.includes("shipping")&&d.deliveryMethod!=="delivery")ke(null);else if(f.type==="shipping_free")c=o;else if(f.type==="shipping_flat")c=parseFloat(f.value)||0;else if(f.type==="percent"){let g=b*((parseFloat(f.value)||0)/100);f.maxDiscount&&parseFloat(f.maxDiscount)>0&&(g=Math.min(g,parseFloat(f.maxDiscount))),n=g}else n=parseFloat(f.value)||0,n=Math.min(n,b)}const T=(x.store.freeShippingMinSpendEnabled===!0||x.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(x.store.freeShippingMinSpendAmount)||0)>0&&r>=(parseFloat(x.store.freeShippingMinSpendAmount)||0)&&d.deliveryMethod==="delivery";T&&(c=o),c=Math.min(c,o),n=Math.min(n,r);const L=Math.max(0,r-n+(o-c)),M=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(L),H=M.ppnAmount,pe=M.dppAmount,F=L+M.grandTotalAdd,p=(document.querySelector('input[name="payment"]:checked')||{}).value,C=parseFloat(document.getElementById("paylater-dp-input")?.value)||0,W=p==="transfer"||p==="qris"||p==="tempo"||p==="paylater"&&C>0,G=window.buktiGDriveUploaded&&window.buktiPaymentUrl&&!window.buktiPaymentUrl.startsWith("data:");if(W&&!G){if(ce(!1),re(),!window.buktiPaymentFile){typeof window.showToast=="function"&&window.showToast("Mohon lampirkan foto struk / bukti pembayaran terlebih dahulu.");return}typeof window.showToast=="function"&&window.showToast("Sedang menyelesaikan unggahan bukti transaksi. Mohon tunggu...");return}const O="ORD-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase();if(window.buktiPaymentFile&&!window.buktiGDriveUploaded)try{he("Mengunggah Bukti Pembayaran...");const b=await window.uploadBuktiToFirebase(window.buktiPaymentFile,O);if(b&&!b.startsWith("data:"))window.buktiPaymentUrl=b,window.buktiGDriveUploaded=!0;else{ce(!1),re(),typeof window.showToast=="function"&&window.showToast("Gagal mengunggah berkas bukti. Silakan pilih kembali foto bukti transfer Anda.");return}he("Memproses Pesanan Anda...")}catch{ce(!1),re(),typeof window.showToast=="function"&&window.showToast("Koneksi unggah terganggu. Silakan periksa jaringan internet dan coba kembali.");return}const u={orderId:O,timestamp:Ce.firestore.FieldValue.serverTimestamp(),dateString:new Date().toISOString(),customer:d,isDropPoint:!!(d.dropPoint&&d.dropPoint.lat&&d.dropPoint.name),dropPoint:d.dropPoint&&d.dropPoint.lat&&d.dropPoint.name?{...d.dropPoint}:null,items:B.map(b=>({...b,qty:parseFloat(b.qty),effectivePrice:t(b),poTime:b.poTime||"",hpp:a(b),poin:s(b)})),payment:{method:p,subtotal:r,shippingCost:o,shippingDiscount:c,productDiscount:n,ppnAmount:H,dppAmount:pe,ppnRate:M.ppnEnabled?M.ppnRate:0,ppnType:M.ppnEnabled?M.ppnType:"exclusive",ppnEnabled:!!M.ppnEnabled,ppnShowZero:!!M.ppnShowZero,ppnLabel:M.ppnLabel||"",taxNpwp:x.store?.taxNpwp||x.taxSettings?.npwp||"",grandTotal:F,isFreeShippingPromo:T||!1},status:"Baru",buktiPayment:window.buktiPaymentUrl||null};if(p==="tempo"){if(!d.wa){ce(!1),re(),typeof window.showToast=="function"&&window.showToast("Pembayaran Cash Tempo hanya untuk Member Resmi terdaftar!");return}const b=document.getElementById("tempo-dp-input");let g=b&&parseFloat(b.value)||0;g>F&&(g=F),u.payment.dp=g,u.payment.tempoDp=g,u.payment.tempoBalance=Math.max(0,F-g),u.payment.tempoDueDate=Date.now()+30*24*60*60*1e3,u.payment.paymentStatus=F-g<=0?"lunas":"hutang"}if(p==="paylater"){if(!d.wa||!I||!(I.paylaterActive===!0||I.paylaterActive==="true")){ce(!1),re(),typeof window.showToast=="function"&&window.showToast("Fitur Putri PayLater belum aktif untuk nomor Anda!");return}const b=parseFloat(I.paylaterLimit)||0,g=Math.max(0,parseFloat(I.paylaterUsed)||0),te=Math.max(0,b-g),D=document.getElementById("paylater-dp-input");let P=D&&parseFloat(D.value)||0;if(F>te&&P<F-te){ce(!1),re(),typeof window.showToast=="function"&&window.showToast("Limit PayLater tidak cukup! Wajib bayar DP minimal "+h(F-te));return}const E=Math.min(te,Math.max(0,F-P));u.payment.method="tempo",u.payment.subMethod="paylater",u.payment.isPaylater=!0,u.payment.paylaterUsed=E,u.payment.dp=P,u.payment.tempoDp=P;const V=I?.paylaterDueDay||5,ne=window.selectedCheckoutPaylaterTenor||window.currentPaylaterBreakdown?.tenorKey||"30d",me=At(),J=ss(E,ne,{...me,dueDay:V}),Q=J.months,be=J.totalAdminFee,z=J.totalServiceFee,ae=J.totalPerMonth,j=J.schedule;u.payment.paylaterTenor=ne,u.payment.paylaterMonths=Q,u.payment.paylaterAdminFee=be,u.payment.paylaterServiceFee=z,u.payment.paylaterMonthlyInstallment=ae,u.payment.paylaterSchedule=j;const se=J.grandTotal;u.payment.tempoBalance=se;const y=j.length>0?j[j.length-1].dueDate:Date.now()+Q*30*24*60*60*1e3;if(u.payment.tempoDueDate=y,u.payment.paymentStatus=se<=0?"lunas":"hutang",u.isTempo=!0,u.paylaterLimitTracked=!1,E>0){if(I){I.paylaterUsed=Math.max(0,parseFloat(I.paylaterUsed)||0)+E;try{localStorage.setItem("freshmart_current_member",JSON.stringify(I))}catch{}}const K=(I?.phone||d.wa||"").replace(/\D/g,""),ve=K.startsWith("0")?"62"+K.slice(1):K;try{await q.collection("freshmart").doc("cms_data").collection("customers").doc(ve).update({paylaterUsed:Ce.firestore.FieldValue.increment(E)}),u.paylaterLimitTracked=!0}catch(de){console.warn("[PayLater] Gagal update pemakaian limit di Firestore:",de.code||de.message||de)}}}const oe=q.collection("freshmart_orders").doc(O),A=typeof window.calculateCartPoints=="function"?window.calculateCartPoints(B,x.store):{totalPoints:0,directPoints:0,spendPoints:0},ee=A.totalPoints;u.pointsEarned=ee,u.pointsBreakdown={direct:A.directPoints,spend:A.spendPoints};const Z=q.collection("freshmart").doc("cms_data"),X=(I?.phone||d.wa||"").replace(/\D/g,""),k=X?X.startsWith("0")?"62"+X.slice(1):X:null,le=k?Z.collection("customers").doc(k):null,N=!!Te;let _=null;if(m){const b={};B.forEach(D=>{const P=D.id!=null?D.id.toString():null;if(!P)return;b[P]||(b[P]={main:0,variants:{}});const E=parseFloat(D.unitMultiplier)||1,V=(parseFloat(D.qty)||0)*E;D.variantName?b[P].variants[D.variantName]=(b[P].variants[D.variantName]||0)+V:b[P].main+=V});const g=Object.keys(b),te=g.map(D=>q.collection("freshmart").doc("cms_data").collection("products").doc(D));await q.runTransaction(async D=>{const P=await Promise.all(te.map(z=>D.get(z))),E=le?await D.get(le):null,V=!!(E&&E.exists),ne=V&&N?q.collection("freshmart").doc("cms_data").collection("rewards").doc(Te.id.toString()):null,me=ne?await D.get(ne):null,J=[];if(P.forEach((z,ae)=>{if(!z.exists)return;const j=z.data(),se=b[g[ae]];if(se.main>0){const y=parseFloat(j.stock!==void 0?j.stock:0);y<se.main&&J.push(`${j.name} (sisa ${y})`)}Object.keys(se.variants).forEach(y=>{const K=(j.variants||[]).find(de=>de.name===y),ve=parseFloat(K&&K.stock!==void 0?K.stock:0);ve<se.variants[y]&&J.push(`${j.name} (${y}, sisa ${ve})`)})}),J.length)throw new Error("STOK_TIDAK_CUKUP: "+J.join(", "));let Q=null,be=null;if(V){const z=parseFloat(E.data().points)||0;let ae=z;if(N){if(!me||!me.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const j=me.data();if(z<(parseFloat(j.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(j.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");Q=(parseFloat(j.stock)||0)-1,ae-=parseFloat(j.pointsCost)||0,u.claimedReward={id:j.id,name:j.name,pointsCost:parseFloat(j.pointsCost)||0,status:"pending",note:""}}ae+=ee,be=ae,u.pointsEarned=ee,u.customerPhone=d.wa,u.finalMemberPoints=be,u.customerType="Member"}else{if(p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(N)throw new Error("MEMBER_TIDAK_DITEMUKAN");u.pointsEarned=0,u.pointsBreakdown={direct:0,spend:0},u.finalMemberPoints=null,u.customerType="Pelanggan Umum"}if(P.forEach((z,ae)=>{if(!z.exists)return;const j=g[ae],se=b[j],y=JSON.parse(JSON.stringify(z.data())),K={};se.main>0&&(ft(y,se.main),K.stock=y.stock,y.storeStock!==void 0&&(K.storeStock=y.storeStock),y.warehouseStock!==void 0&&(K.warehouseStock=y.warehouseStock),Array.isArray(y.stockBatches)&&(K.stockBatches=y.stockBatches),y.hpp&&(K.hpp=y.hpp),y.stock<=1e-4&&(y.stock=0,K.stock=0,y.isActive="false",K.isActive="false"),y.totalSold=(parseFloat(y.totalSold)||0)+se.main,K.totalSold=y.totalSold),Object.keys(se.variants).length>0&&y.variants&&(Object.keys(se.variants).forEach(de=>{const pt=se.variants[de];ft(y,pt,de);const Ie=(y.variants||[]).findIndex(jt=>jt.name===de);Ie>-1&&(y.variants[Ie].stock<=1e-4&&(y.variants[Ie].stock=0,y.variants[Ie].isActive=!1),y.variants[Ie].totalSold=(parseFloat(y.variants[Ie].totalSold)||0)+pt)}),K.variants=y.variants,K.stock=y.stock,y.storeStock!==void 0&&(K.storeStock=y.storeStock),y.warehouseStock!==void 0&&(K.warehouseStock=y.warehouseStock),Array.isArray(y.stockBatches)&&(K.stockBatches=y.stockBatches));const ve=x.products.findIndex(de=>de.id.toString()===j);ve>-1&&(x.products[ve]=y),D.update(te[ae],K)}),D.set(oe,u),V&&le&&be!==null){const z=E.data().name||d.name||"Pelanggan Setia";u.customer&&(u.customer.name=z);const ae={points:be,name:z,lastOrderAt:Date.now()};D.set(le,ae,{merge:!0}),_=be}Q!==null&&D.set(ne,{stock:Q},{merge:!0}),D.update(Z,{lastUpdate:Ce.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:g})}),x.lastUpdate=(parseInt(ze("freshmart_last_update"))||x.lastUpdate||0)+1,Be("freshmart_last_update",x.lastUpdate.toString()),Be("freshmart_products",JSON.stringify(x.products))}else if(le)await q.runTransaction(async b=>{const g=await b.get(le),te=g.exists,D=te&&N?q.collection("freshmart").doc("cms_data").collection("rewards").doc(Te.id.toString()):null,P=D?await b.get(D):null;let E=null,V=null;if(te){const ne=parseFloat(g.data().points)||0;let me=ne;if(N){if(!P||!P.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const Q=P.data();if(ne<(parseFloat(Q.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(Q.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");E=(parseFloat(Q.stock)||0)-1,me-=parseFloat(Q.pointsCost)||0,u.claimedReward={id:Q.id,name:Q.name,pointsCost:parseFloat(Q.pointsCost)||0,status:"pending",note:""}}me+=ee,V=me,u.pointsEarned=ee,u.customerPhone=d.wa,u.finalMemberPoints=V,u.customerType="Member";const J=g.data().name||d.name||"Pelanggan Setia";u.customer&&(u.customer.name=J),b.set(le,{points:V,name:J,lastOrderAt:Date.now()},{merge:!0}),_=V,E!==null&&b.set(D,{stock:E},{merge:!0})}else{if(p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(N)throw new Error("MEMBER_TIDAK_DITEMUKAN");u.pointsEarned=0,u.pointsBreakdown={direct:0,spend:0},u.finalMemberPoints=null,u.customerType="Pelanggan Umum"}b.set(oe,u)});else{if(u.pointsEarned=0,u.pointsBreakdown={direct:0,spend:0},u.finalMemberPoints=null,u.customerType="Pelanggan Umum",p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");await oe.set(u)}let we=!1;if((u.items||[]).forEach(b=>{typeof window.recordFlashSaleSale=="function"&&window.recordFlashSaleSale(b.id,b.variantName,b.qty)&&(we=!0)}),we&&Array.isArray(x.flashSales))try{await q.collection("freshmart").doc("cms_data").update({flashSales:x.flashSales,lastUpdate:Ce.firestore.FieldValue.increment(1)})}catch(b){console.warn("[Checkout] Gagal update kuota Flash Sale:",b)}const xe={orderId:O,date:u.dateString||new Date().toISOString(),dateString:u.dateString||new Date().toISOString(),total:F,itemCount:B.reduce((b,g)=>b+parseFloat(g.qty),0),status:"Baru",pointsEarned:u.pointsEarned||0,claimedReward:u.claimedReward||null,finalMemberPoints:_,customerType:u.customerType||"Pelanggan Umum",customer:u.customer||d,items:u.items||[],payment:u.payment||{},isTempo:!!u.isTempo};U.unshift(xe),Ke(U),window.currentCustomerOrder=u,window.lastPrintedOrder=u;try{localStorage.setItem("freshmart_my_orders",JSON.stringify(U)),localStorage.setItem("freshmart_last_order",Date.now().toString())}catch{}if(typeof analytics<"u"&&analytics.logEvent("purchase",{transaction_id:O,value:F,currency:"IDR"}),d.wa&&_!==null){const b={id:d.wa,phone:d.wa,name:d.name||"Pelanggan Setia",points:_,paylaterActive:I?I.paylaterActive===!0||I.paylaterActive==="true":!1,paylaterLimit:I&&parseFloat(I.paylaterLimit)||0,paylaterUsed:I?Math.max(0,parseFloat(I.paylaterUsed)||0):0,paylaterDueDay:I&&I.paylaterDueDay||5};Je(b);try{localStorage.setItem("freshmart_current_member",JSON.stringify(b)),localStorage.setItem("freshmart_member_wa",d.wa)}catch{}typeof window.invalidateMemberCache=="function"&&window.invalidateMemberCache(d.wa)}else{Je(null);try{localStorage.removeItem("freshmart_current_member")}catch{}}u.claimedReward&&_!==null?typeof window.showToast=="function"&&window.showToast(`Hadiah eksklusif "${u.claimedReward.name}" berhasil ditukarkan! Sisa poin reward Anda: ${_}`):_!==null&&ee>0?typeof window.showToast=="function"&&window.showToast(`Pesanan Anda berhasil dikonfirmasi! (+${ee} Poin Member terkumpul)`):typeof window.showToast=="function"&&window.showToast("Pesanan Anda berhasil dikonfirmasi dan siap diproses!"),setTimeout(()=>{kt([]),Le("cust-name",""),Le("cust-address",""),Le("cust-maps-input",""),Le("cust-note",""),Le("cust-wa",""),window.buktiPaymentUrl=null,window.buktiPaymentFile=null,window.buktiGDriveUploaded=!1;const b=l("bukti-preview-wrap"),g=l("bukti-placeholder");b&&b.classList.add("hidden"),g&&g.classList.remove("hidden"),R("bukti-uploading"),R("bukti-success"),R("bukti-gdrive-error");const te=l("bukti-file-input");te&&(te.value=""),vt({name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:"",dropPoint:null}),ke(null),Fe(null);const D=l("toggle-droppoint"),P=l("droppoint-form");D&&(D.checked=!1),P&&P.classList.add("hidden");const E=l("dp-location-status");E&&E.classList.add("hidden");const V=l("payment-droppoint-info");V&&V.classList.add("hidden");const ne=l("dp-receiver-name");ne&&(ne.value="");const me=l("dp-receiver-wa");me&&(me.value="");const J=l("dp-address");J&&(J.value="");const Q=l("dp-maps-input");Q&&(Q.value="");const be=l("btn-dp-location");be&&(be.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan Titik GPS Lokasi Proyek</span>');const z=l("member-status-banner");z&&R(z),R("payment-option-tempo"),l("voucher-input")&&(l("voucher-input").value=""),R("voucher-msg-container"),R("location-status"),l("btn-location")&&ue("btn-location");const ae=document.querySelector('input[name="delivery-method"][value="delivery"]');ae&&(ae.checked=!0,lt());const j=document.querySelector('input[name="payment"][value="transfer"]');j&&(j.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()),typeof window.updCart=="function"&&window.updCart(),typeof window.renderCart=="function"&&window.renderCart();try{window.history.replaceState({view:"view-catalog"},"",window.location.pathname)}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog",!0),typeof window.showToast=="function"&&window.showToast("Pesanan Anda Berhasil Dibuat!")},2e3)}catch(r){const o=r.message||"Error";o.startsWith("STOK_TIDAK_CUKUP:")?typeof window.showToast=="function"&&window.showToast("Ketersediaan stok baru saja diperbarui: "+o.replace("STOK_TIDAK_CUKUP: ","")):o==="TEMPO_KHUSUS_MEMBER"?typeof window.showToast=="function"&&window.showToast("Fasilitas Cash Tempo khusus untuk Rekanan & Member VIP resmi terdaftar."):o==="POIN_TIDAK_CUKUP"?(typeof window.showToast=="function"&&window.showToast("Poin reward Anda belum mencukupi untuk penukaran hadiah ini."),Fe(null)):o==="STOK_HADIAH_HABIS"?(typeof window.showToast=="function"&&window.showToast("Persediaan hadiah yang dipilih baru saja habis. Silakan pilih hadiah lainnya."),Fe(null)):o==="HADIAH_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Hadiah yang dipilih sudah tidak aktif. Silakan pilih hadiah pengganti."),Fe(null)):o==="MEMBER_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Data member tidak terverifikasi. Penukaran hadiah dibatalkan."),Fe(null)):typeof window.showToast=="function"&&window.showToast(r.code==="resource-exhausted"?"Layanan server sedang padat. Mohon coba sesaat lagi.":"Gagal memproses pesanan: "+o)}finally{ce(!1),re()}};window.validateAndGoToPayment=Es;window.toggleDeliveryMethod=lt;window.toggleDropPoint=Fs;window.getDPLocation=Cs;window.handleDPMapsInput=Lt;window.pasteDPMapsInput=Rs;window.toggleOrderButton=Ft;window.rPay=Ct;window.processOrder=Os;const He=e=>typeof window<"u"&&typeof window.getEffP=="function"?window.getEffP(e,"web"):e?.effectivePrice??e?.price??0;window.getLocation=()=>{if(!navigator.geolocation)return $("GPS tidak didukung");l("btn-location").innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i>',navigator.geolocation.getCurrentPosition(e=>{d.lat=e.coords.latitude,d.lng=e.coords.longitude,R("btn-location"),ue("location-status"),l("location-status").classList.add("flex"),$("GPS Didapatkan")},e=>{l("btn-location").innerHTML='<i class="fa-solid fa-location-crosshairs text-[var(--color-primary)]"></i> Set GPS Maps',$("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})};window.handleCustomerMapsInput=e=>{const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){d.lat=parseFloat(a.lat),d.lng=parseFloat(a.lng),R("btn-location"),ue("location-status");const s=l("location-status");return s&&(s.classList.add("flex"),s.innerHTML=`
                <i class="fa-solid fa-circle-check shrink-0 text-lg primary-text"></i>
                <div class="min-w-0">
                    <span class="text-[10px] font-bold uppercase leading-tight tracking-wide primary-text block">Koordinat Berhasil Disematkan!</span>
                    <span class="text-[9px] text-slate-500 dark:text-slate-400 font-mono">${a.lat}, ${a.lng}</span>
                </div>
            `),$("Titik lokasi Maps pembeli berhasil disematkan!"),typeof window.rPay=="function"&&window.rPay(),!0}return!1};window.pasteCustomerMapsInput=async()=>{const e=l("cust-maps-input");if(e){try{if(navigator.clipboard&&navigator.clipboard.readText){const t=await navigator.clipboard.readText();if(t){e.value=t,window.handleCustomerMapsInput(t)||$("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Maps");return}}}catch{}e.focus(),$("Silakan tekan Ctrl+V atau tahan untuk menempel")}};const _s=()=>{const e=x.store.isDeliveryEnabled!==!1,t=x.store.isPickupEnabled!==!1;ie("delivery-option-container","hidden",!e),ie("pickup-option-container","hidden",!t),ie("no-delivery-warning","hidden",e||t),ie("delivery-methods-grid","hidden",!(e||t));const a=l("btn-checkout-next");if(a)if(e||t){a.removeAttribute("disabled"),a.classList.remove("opacity-50");const i=(d.deliveryMethod||"delivery")==="pickup"&&t?"pickup":e?"delivery":"pickup",r=document.querySelector(`input[value="${i}"]`);r&&(r.checked=!0)}else a.setAttribute("disabled","true"),a.classList.add("opacity-50");lt()};window.rChck=_s;window.buktiPaymentUrl=null;window.buktiPaymentFile=null;window.buktiGDriveUploaded=!1;window.compressImageForUpload=(e,t=1600,a=.82)=>new Promise(s=>{const i=new FileReader;i.readAsDataURL(e),i.onload=r=>{const o=new Image;o.onload=()=>{let{width:c,height:n}=o;(c>t||n>t)&&(c>n?(n=Math.round(n*t/c),c=t):(c=Math.round(c*t/n),n=t));const m=document.createElement("canvas");m.width=c,m.height=n,m.getContext("2d").drawImage(o,0,0,c,n),m.toBlob(T=>{if(!T)return s(e);s(new File([T],e.name,{type:"image/jpeg",lastModified:Date.now()}))},"image/jpeg",a)},o.onerror=()=>s(e),o.src=r.target.result},i.onerror=()=>s(e)});window._doSingleGDriveUpload=async(e,t)=>{const a=new FileReader;return new Promise(s=>{a.readAsDataURL(e),a.onload=async()=>{try{const i=a.result.split(",")[1],r=(e.name||"bukti.jpg").replace(/[^a-zA-Z0-9.]/g,"_"),o={name:"BUKTI_"+t+"_"+Date.now()+"_"+r,mimeType:e.type||"image/jpeg",data:i,token:Ts},c=await fetch($t,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"});if(!c.ok)return console.warn("GDrive upload HTTP error:",c.status),s(null);const n=await c.text();let m;try{m=JSON.parse(n)}catch{return console.warn("GDrive response parse error"),s(null)}m&&m.status==="success"&&m.url?s(rt(m.url)):(console.warn("GDrive upload gagal:",m&&m.message),s(null))}catch(i){console.warn("GDrive upload exception:",i),s(null)}},a.onerror=()=>s(null)})};window.uploadBuktiToGDrive=async(e,t)=>{if(!e)return null;const a=l("bukti-uploading-text");a&&(a.textContent="Mengupload bukti ke Google Drive...");try{return await Ms(e,"BUKTI_"+(t||Date.now()))}catch(s){return console.warn("Gagal upload bukti ke GDrive via GAS:",s),null}};window.handleBuktiUpload=async e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/"))return $("Hanya file gambar yang diizinkan!");if(t.size>5*1024*1024)return $("Ukuran gambar max 5MB!");window.buktiPaymentFile=t,window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const a=new FileReader;a.onload=o=>{const c=l("bukti-preview-img"),n=l("bukti-preview-wrap"),m=l("bukti-placeholder");c&&(c.src=o.target.result),n&&n.classList.remove("hidden"),m&&m.classList.add("hidden")},a.readAsDataURL(t),R("bukti-success"),R("bukti-gdrive-error");const s=l("bukti-uploading");s&&(s.classList.remove("hidden"),s.style.display="flex");const i="TEMP_"+Date.now().toString(36).toUpperCase(),r=await window.uploadBuktiToGDrive(t,i);if(R("bukti-uploading"),r){window.buktiPaymentUrl=r,window.buktiGDriveUploaded=!0;const o=l("bukti-success"),c=l("bukti-success-text"),n=l("bukti-storage-info");c&&(c.textContent="Bukti berhasil disimpan!"),n&&(n.textContent="(tersimpan di Google Drive)"),o&&(o.classList.remove("hidden"),o.style.display="flex"),R("bukti-gdrive-error")}else{window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const o=l("bukti-gdrive-error");o&&(o.classList.remove("hidden"),o.style.display="flex"),R("bukti-success"),$("Upload ke Google Drive gagal. Coba lagi!")}};window.retryBuktiUpload=async()=>{if(!window.buktiPaymentFile)return $("Pilih gambar terlebih dahulu!");R("bukti-gdrive-error"),R("bukti-success");const e=l("bukti-uploading");e&&(e.classList.remove("hidden"),e.style.display="flex");const t="RETRY_"+Date.now().toString(36).toUpperCase(),a=await window.uploadBuktiToGDrive(window.buktiPaymentFile,t);if(R("bukti-uploading"),a){window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0;const s=l("bukti-success"),i=l("bukti-success-text"),r=l("bukti-storage-info");i&&(i.textContent="Bukti berhasil disimpan!"),r&&(r.textContent="(tersimpan di Google Drive)"),s&&(s.classList.remove("hidden"),s.style.display="flex"),$("Upload berhasil!")}else{const s=l("bukti-gdrive-error");s&&(s.classList.remove("hidden"),s.style.display="flex"),$("Masih gagal. Periksa koneksi internet Anda.")}};window.uploadBuktiToFirebase=async(e,t)=>{if(window.buktiGDriveUploaded&&window.buktiPaymentUrl)return window.buktiPaymentUrl;if(!e)return null;const a=await window.uploadBuktiToGDrive(e,t);return a&&(window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0),a};window.togglePaymentDetails=()=>{const e=(document.querySelector('input[name="payment"]:checked')||{}).value;if(ie("detail-transfer","hidden",e!=="transfer"),ie("detail-qris","hidden",e!=="qris"),ie("detail-cashier","hidden",e!=="cashier"),ie("detail-cod","hidden",e!=="cod"),ie("detail-tempo","hidden",e!=="tempo"),ie("detail-paylater","hidden",e!=="paylater"),e==="tempo"&&window.calculateTempoBalance(),e==="paylater"&&window.calculatePaylaterBalance?.(),e==="qris"){const s=l("dyn-qris-img");if(s){const i=x.payment?.qrisUrl||x.store?.qrisUrl||x.payment?.qris||x.store?.qris||x.qrisUrl||"";i&&(s.src=rt(i))}}const t=parseFloat(document.getElementById("paylater-dp-input")?.value)||0,a=e==="transfer"||e==="qris"||e==="tempo"||e==="paylater"&&t>0;ie("bukti-payment-section","hidden",!a)};window.selectedCheckoutPaylaterTenor=window.selectedCheckoutPaylaterTenor||"30d";window.selectCheckoutPaylaterTenor=e=>{window.selectedCheckoutPaylaterTenor=e,typeof window.calculatePaylaterBalance=="function"&&window.calculatePaylaterBalance()};window.calculatePaylaterBalance=()=>{const e=I?Math.max(0,parseFloat(I.paylaterLimit)||0):0,t=I?Math.max(0,parseFloat(I.paylaterUsed)||0):0,a=Math.max(0,e-t),s=I?.paylaterDueDay||5,i=document.getElementById("paylater-limit-display"),r=document.getElementById("paylater-due-display"),o=document.getElementById("paylater-status-box"),c=document.getElementById("paylater-excess-dp-container"),n=document.getElementById("paylater-dp-input"),m=document.getElementById("paylater-tenor-chips-grid"),T=document.getElementById("paylater-tenor-breakdown-box");i&&(i.textContent=h(a)),r&&(r.textContent="Tgl "+s+" Tiap Bulan");let L=B.reduce((N,_)=>N+(parseFloat(He(_))||0)*(parseFloat(_.qty)||0),0),v=0,M=0,H=0;if(d.deliveryMethod==="delivery"&&(v=Math.ceil((parseFloat(d.distance)||0)*(parseFloat(x.store.costPerKm)||0)/500)*500),typeof f<"u"&&f){let N=L;if(f.targetProduct&&f.targetProduct!==""){const _=parseInt(f.targetProduct);N=B.filter(xe=>xe.id===_).reduce((xe,b)=>xe+(parseFloat(He(b))||0)*(parseFloat(b.qty)||0),0)}if(f.type==="shipping_free")H=v;else if(f.type==="shipping_flat")H=parseFloat(f.value)||0;else if(f.type==="percent"){let _=N*((parseFloat(f.value)||0)/100);f.maxDiscount&&parseFloat(f.maxDiscount)>0&&(_=Math.min(_,parseFloat(f.maxDiscount))),M=_}else M=parseFloat(f.value)||0,M=Math.min(M,N)}(x.store?.freeShippingMinSpendEnabled===!0||x.store?.freeShippingMinSpendEnabled==="true")&&(parseFloat(x.store?.freeShippingMinSpendAmount)||0)>0&&L>=(parseFloat(x.store?.freeShippingMinSpendAmount)||0)&&d.deliveryMethod==="delivery"&&(H=v),H=Math.min(H,v),M=Math.min(M,L);let F=Math.max(0,L-M),p=Math.max(0,v-H);const C=typeof window.calcTaxDetails=="function"?window.calcTaxDetails(F+p):{grandTotalAdd:0};let W=0;window.useMemberPoints&&I&&(W=Math.min(F+p+C.grandTotalAdd,parseFloat(I.points)||0));let G=Math.max(0,F+p+(C.grandTotalAdd||0)-W),O=0;const u=G>a;if(u){const N=G-a;O=parseFloat(n?.value)||0,O<N&&(O=N,n&&(n.value=O)),c&&c.classList.remove("hidden")}else c&&c.classList.add("hidden"),n&&(n.value=0),O=0;const oe=Math.min(a,Math.max(0,G-O)),A=At(),Z=rs(oe>0?oe:G,{...A,dueDay:s}).results;let X=window.selectedCheckoutPaylaterTenor||"30d";(!Z[X]||!Z[X].enabled)&&(X=Object.keys(Z).find(_=>Z[_].enabled)||"30d",window.selectedCheckoutPaylaterTenor=X);const k=Z[X];if(window.currentPaylaterBreakdown=k,m){const N=["30d","2m","3m"];m.innerHTML=N.map(_=>{const we=Z[_];if(!we||!we.enabled)return"";const xe=_===X;return`
                <button type="button" onclick="window.selectCheckoutPaylaterTenor('${_}')" 
                        class="p-2 sm:p-2.5 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 min-h-[46px] select-none touch-manipulation active:scale-95 ${xe?"border-2 text-[var(--color-primary)] shadow-sm":"border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600"}"
                        style="${xe?"border-color: var(--color-primary); background: rgba(var(--color-primary-rgb), 0.1); box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.15);":""}">
                    <span class="text-[9.5px] font-black uppercase tracking-wider block">${w(we.shortLabel)}</span>
                    <span class="text-[11px] sm:text-xs font-black block" ${xe?'style="color: var(--color-primary);"':""}>${h(we.totalPerMonth)}<span class="text-[8px] font-normal text-slate-400">/bln</span></span>
                </button>
            `}).filter(Boolean).join("")}if(T&&k&&(T.innerHTML=`
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
        `),!u)o&&(o.innerHTML='<div class="flex items-center gap-2 font-extrabold mb-1" style="color: var(--color-primary);"><i class="fa-solid fa-circle-check text-emerald-500 text-sm"></i><span>Limit PayLater Anda Sangat Cukup!</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Total belanja <b>'+h(G)+"</b> otomatis dipotong dari limit PayLater Anda. Anda <b>tidak perlu bayar sekarang</b> dan tanpa uang muka (DP Rp 0). Angsuran dicicil sesuai tenor "+w(k.label)+" ("+h(k.totalPerMonth)+"/bln) mulai tgl "+s+" bulan depan.</p>");else{const N=G-a;o&&(o.innerHTML='<div class="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-extrabold mb-1"><i class="fa-solid fa-triangle-exclamation text-amber-500 text-sm"></i><span>Total Belanja Melebihi Sisa Limit PayLater</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Sisa limit Anda <b>'+h(a)+"</b> akan digunakan maksimal untuk cicilan "+w(k.label)+" ("+h(k.totalPerMonth)+"/bln). Selisih kekurangan sebesar <b>"+h(N)+"</b> wajib dibayar sebagai DP via Transfer/QRIS.</p>")}const le=(parseFloat(n?.value)||0)>0;ie("bukti-payment-section","hidden",!le)};window.calculateTempoBalance=()=>{const e=document.getElementById("tempo-dp-input");let t=parseFloat(e?.value)||0;t<0&&(t=0,e&&(e.value=0));let a=B.reduce((F,p)=>F+(parseFloat(He(p))||0)*(parseFloat(p.qty)||0),0),s=0,i=0,r=0;if(d.deliveryMethod==="delivery"&&(s=Math.ceil((parseFloat(d.distance)||0)*(parseFloat(x.store.costPerKm)||0)/500)*500),f){let F=a;if(f.targetProduct&&f.targetProduct!==""){const p=parseInt(f.targetProduct);F=B.filter(W=>W.id===p).reduce((W,G)=>W+(parseFloat(He(G))||0)*(parseFloat(G.qty)||0),0)}if(f.type==="shipping_free")r=s;else if(f.type==="shipping_flat")r=parseFloat(f.value)||0;else if(f.type==="percent"){let p=F*((parseFloat(f.value)||0)/100);f.maxDiscount&&parseFloat(f.maxDiscount)>0&&(p=Math.min(p,parseFloat(f.maxDiscount))),i=p}else i=parseFloat(f.value)||0,i=Math.min(i,F)}(x.store.freeShippingMinSpendEnabled===!0||x.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(x.store.freeShippingMinSpendAmount)||0)>0&&a>=(parseFloat(x.store.freeShippingMinSpendAmount)||0)&&d.deliveryMethod==="delivery"&&(r=s),r=Math.min(r,s),i=Math.min(i,a);let c=Math.max(0,a-i),n=Math.max(0,s-r);const T=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({grandTotalAdd:0}))(c+n)||{grandTotalAdd:0},L=parseFloat(T?.grandTotalAdd)||0;let v=0;window.useMemberPoints&&I&&(v=Math.min(c+n+L,parseFloat(I.points)||0));let M=Math.max(0,c+n+L-v);t>M&&(t=M,e&&(e.value=t));let H=Math.max(0,M-t);const pe=document.getElementById("tempo-balance-display");pe&&(pe.innerText=h(H))};let $e=null;const xt=e=>{if(e<=0)return{h:"00",m:"00",s:"00",totalSec:0};const t=Math.floor(e/1e3),a=Math.floor(t/3600),s=Math.floor(t%3600/60),i=t%60;return{h:String(a).padStart(2,"0"),m:String(s).padStart(2,"0"),s:String(i).padStart(2,"0"),totalSec:t}},Rt=()=>{const e=l("dynamic-flashsale-container");if(!e)return;$e&&(clearInterval($e),$e=null);const t=is("web");if(!t||!Array.isArray(t.items)||t.items.length===0){e.innerHTML="",e.classList.add("hidden");return}const a=t.endTime?typeof window.parseSafeTimestamp=="function"?window.parseSafeTimestamp(t.endTime):new Date(t.endTime).getTime():0,s=Date.now(),i=Math.max(0,a-s);if(a&&i<=0){e.innerHTML="",e.classList.add("hidden");return}const r=xt(i),o=t.items.filter(n=>n&&n.productId);if(o.length===0){e.innerHTML="",e.classList.add("hidden");return}const c=o.map(n=>{const m=(x.products||[]).find(oe=>String(oe.id)===String(n.productId));if(!m||m.isActive===!1||m.isActive==="false")return"";const T=parseFloat(n.normalPrice)||parseFloat(m.price)||0,L=parseFloat(n.flashSalePrice)||0,v=parseFloat(n.quota)||0,M=parseFloat(n.soldCount)||0,H=v>0&&M>=v,pe=v>0?Math.min(100,Math.round(M/v*100)):0,F=Math.max(0,v-M),p=T>0?Math.round((T-L)/T*100):n.discountPercent||0,C=n.variantName&&m.variants?m.variants.find(oe=>oe.name===n.variantName):null,W=C&&C.img?C.img:m.img,G=W?Nt(W,"w400-rw"):"/favicon.png",O=m.name||"Produk Promo",u=n.variantName?` (${n.variantName})`:"";return`
        <div class="snap-start shrink-0 flex flex-col w-[150px] sm:w-[172px] md:w-[188px] ${o.length<=4?"lg:w-[220px] xl:w-[240px]":""}">
            <div class="flash-sale-card group relative flex flex-1 flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left">
                <!-- Badge Diskon Petir Harmonis Tema Neo-Brutalist -->
                <div class="absolute left-2 top-2 z-10 flex items-center gap-1 rounded-lg px-2 py-0.5 text-[9.5px] font-black uppercase tracking-wider text-slate-950 bg-amber-400 border border-slate-950 shadow-[1.5px_1.5px_0px_#0f172a]">
                    <i class="fa-solid fa-bolt text-slate-950 text-[8.5px]"></i>
                    <span>-${Math.max(1,p)}%</span>
                </div>

                ${F<=3&&!H&&v>0?`
                <div class="absolute right-2 top-2 z-10 flex items-center gap-1 rounded-lg bg-rose-600 px-1.5 py-0.5 text-[8.5px] font-black text-white shadow-[1.5px_1.5px_0px_#0f172a] border border-rose-700">
                    <span><i class="fa-solid fa-fire text-amber-200 text-[8px]"></i> Sisa ${F}!</span>
                </div>`:""}

                <!-- Foto Produk / Varian: Presisi Full Frame 1:1 Tanpa Padding Menjorok -->
                <div class="relative aspect-square w-full cursor-pointer overflow-hidden bg-slate-50 dark:bg-slate-950 flex items-center justify-center border-b border-slate-200 dark:border-slate-800/80 shrink-0" onclick="window.openProductModal && window.openProductModal('${w(m.id)}', false, '${w(n.variantName||"")}')">
                    <img src="${w(G)}" alt="${w(O)}" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='/favicon.png'">
                    ${H?`
                    <div class="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center p-2 text-center text-white">
                        <span class="rounded-lg px-2 py-0.5 text-[9px] font-black uppercase tracking-widest shadow-md text-white bg-rose-700">HABIS</span>
                        <span class="mt-0.5 text-[8.5px] font-medium text-slate-300">Kuota terpenuhi</span>
                    </div>`:""}
                </div>

                <!-- Detail & Harga -->
                <div class="flex flex-1 flex-col justify-between p-2.5 sm:p-3 min-w-0 bg-white dark:bg-slate-900 relative z-10">
                    <div>
                        <h4 class="line-clamp-2 text-xs sm:text-[13px] font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[var(--color-primary)] transition-colors leading-snug min-h-[2rem] sm:min-h-[2.3rem] cursor-pointer" title="${w(O+u)}" onclick="window.openProductModal && window.openProductModal('${w(m.id)}', false, '${w(n.variantName||"")}')">
                            ${w(O)}
                            ${n.variantName?`<span class="inline-flex items-center gap-1 mt-0.5 text-[8.5px] font-black px-1.5 py-0.2 rounded-md uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"><i class="fa-solid fa-shapes text-[8px] text-[var(--color-primary)]"></i>${w(n.variantName)}</span>`:""}
                        </h4>
                        
                        <!-- Coretan Harga & Harga Kilat Harmonis -->
                        <div class="mt-1.5 flex flex-col">
                            <span class="text-[9.5px] sm:text-[10px] font-semibold text-slate-400 dark:text-slate-500 line-through leading-tight">
                                ${h(T)}
                            </span>
                            <span class="text-xs sm:text-[14px] lg:text-[15px] font-black truncate leading-tight mt-0.5 text-rose-600 dark:text-rose-400">
                                ${h(L)}
                            </span>
                        </div>
                    </div>

                    <!-- Footer FOMO Progress Bar & Tombol Aksi Beli Kilat -->
                    <div class="mt-auto pt-2 border-t border-slate-100 dark:border-slate-800/80">
                        <div class="mb-1.5">
                            <div class="flex items-center justify-between text-[8px] sm:text-[8.5px] font-extrabold text-slate-500 dark:text-slate-400 mb-0.5">
                                <span class="flex items-center gap-1"><i class="fa-solid fa-fire text-amber-500 text-[8px]"></i> ${H?"Terjual Habis":`Terjual ${M}/${v||"∞"}`}</span>
                                <span class="${pe>=80?"text-rose-600 dark:text-rose-400 font-black":""}">${v>0?pe+"%":"Terbatas"}</span>
                            </div>
                            <div class="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                                <div class="h-full rounded-full transition-all duration-500 ${H?"bg-slate-400":""}" style="${H?"":"background: linear-gradient(90deg, #f59e0b 0%, #ef4444 100%);"} width: ${H?100:Math.max(8,pe)}%;"></div>
                            </div>
                        </div>

                        ${H?`
                        <button type="button" disabled class="btn-flash-buy-disabled w-full">
                            <span>Kuota Habis</span>
                        </button>`:`
                        <button type="button" onclick="window.quickBuyFlashSaleItem('${w(m.id)}', '${w(n.variantName||"")}')" class="btn-flash-buy w-full">
                            <i class="fa-solid fa-bolt text-amber-300 text-[10.5px]"></i>
                            <span>Beli Kilat</span>
                        </button>`}
                    </div>
                </div>
            </div>
        </div>`}).join("");if(!c||!c.trim()){e.innerHTML="",e.classList.add("hidden");return}e.classList.remove("hidden"),e.innerHTML=`
    <div class="bento-island-card relative overflow-hidden rounded-[1.75rem] p-3.5 sm:p-5 shadow-xs border transition-all duration-300" style="border-color: rgba(var(--color-primary-rgb), 0.22);">
        <!-- Top Caution/Hazard Stripe Accent -->
        <div class="neo-hazard-stripe-subtle h-1.5 w-full -mx-3.5 -mt-3.5 mb-3 sm:-mx-5 sm:-mt-5 sm:mb-4"></div>

        <!-- Header Panggung Flash Sale -->
        <div class="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-b pb-3 mb-3" style="border-color: rgba(var(--color-primary-rgb), 0.12);">
            <div class="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                <div class="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 border-2 border-slate-950 shadow-[2px_2px_0px_#0f172a]">
                    <i class="fa-solid fa-bolt text-xl sm:text-2xl text-slate-950 animate-pulse"></i>
                </div>
                <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        <span class="rounded-md px-2 py-0.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white shadow-2xs bg-rose-600 border border-slate-950">PROMO KILAT</span>
                        <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
                            <span class="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping"></span> LIVE
                        </span>
                    </div>
                    <h3 class="text-sm sm:text-base md:text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 truncate mt-0.5">
                        ${w(t.title||"Flash Sale Spesial Hari Ini")}
                    </h3>
                    <p class="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 truncate">
                        Harga spesial terbatas! Segera checkout sebelum waktu atau kuota habis.
                    </p>
                </div>
            </div>

            <!-- Countdown Timer & Navigasi Desktop -->
            <div class="flex items-center justify-between sm:justify-end gap-2 shrink-0 self-stretch sm:self-auto pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                <!-- Countdown Timer Block Harmonis Tema (Digital LED Clock) -->
                <div class="flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-black text-white border-2 border-slate-900 dark:border-slate-700 px-3 py-1.5 shadow-[2px_2px_0px_#0f172a]">
                    <div class="flex items-center gap-1 text-[10px] sm:text-[11px] font-black uppercase text-amber-300">
                        <i class="fa-solid fa-stopwatch text-rose-500 animate-bounce"></i>
                        <span class="tracking-wider">BERAKHIR:</span>
                    </div>
                    <div class="flex items-center gap-1 font-mono font-black">
                        <span id="fs-cd-h" class="min-w-[24px] sm:min-w-[26px] text-center rounded bg-slate-800 text-amber-300 px-1 py-0.5 text-xs sm:text-sm font-black border border-slate-700">${r.h}</span>
                        <span class="text-slate-400 font-bold animate-pulse">:</span>
                        <span id="fs-cd-m" class="min-w-[24px] sm:min-w-[26px] text-center rounded bg-slate-800 text-amber-300 px-1 py-0.5 text-xs sm:text-sm font-black border border-slate-700">${r.m}</span>
                        <span class="text-slate-400 font-bold animate-pulse">:</span>
                        <span id="fs-cd-s" class="min-w-[24px] sm:min-w-[26px] text-center rounded bg-rose-600 text-white px-1 py-0.5 text-xs sm:text-sm font-black border border-rose-500">${r.s}</span>
                    </div>
                </div>

                <!-- Desktop Nav Buttons (< >) -->
                <div class="hidden sm:flex items-center gap-1.5 ml-1">
                    <button type="button" onclick="window.scrollFlashSaleLeft && window.scrollFlashSaleLeft()" class="flex h-8 w-8 items-center justify-center rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 active:translate-x-0.5 active:translate-y-0.5 transition-all shadow-[1.5px_1.5px_0px_#0f172a] cursor-pointer" title="Geser Kiri">
                        <i class="fa-solid fa-chevron-left text-xs"></i>
                    </button>
                    <button type="button" onclick="window.scrollFlashSaleRight && window.scrollFlashSaleRight()" class="flex h-8 w-8 items-center justify-center rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 active:translate-x-0.5 active:translate-y-0.5 transition-all shadow-[1.5px_1.5px_0px_#0f172a] cursor-pointer" title="Geser Kanan">
                        <i class="fa-solid fa-chevron-right text-xs"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Slider List Produk Flash Sale -->
        <div id="fs-cards-slider" class="relative z-10 flex gap-3 sm:gap-4 overflow-x-auto pb-2.5 pt-1 hide-scrollbar snap-x -mx-1 px-1 sm:mx-0 sm:px-0 scroll-smooth ${o.length<=4?"sm:justify-start lg:gap-5":""}">
            ${c}
        </div>
    </div>`,a&&($e=setInterval(()=>{const n=Math.max(0,a-Date.now());if(n<=0){clearInterval($e),$e=null,Rt(),typeof window.rCat=="function"&&window.rCat();return}const m=xt(n),T=l("fs-cd-h"),L=l("fs-cd-m"),v=l("fs-cd-s");T&&(T.innerText=m.h),L&&(L.innerText=m.m),v&&(v.innerText=m.s)},1e3))},js=(e,t="")=>{const a=(x.products||[]).find(m=>String(m.id)===String(e));if(!a)return;if(a.variants&&a.variants.length>0&&!t){os(e);return}const s=t||(a.variants&&a.variants[0]?a.variants[0].name:""),i=window.getEffP?window.getEffP({id:a.id,price:a.price,variantName:s},"web"):a.price,r=s&&a.variants?a.variants.find(m=>m.name===s):null,o=r&&r.img?r.img:a.img||"",c=r&&parseFloat(r.poin)>0?parseFloat(r.poin):parseFloat(a.poin)||0,n=B.findIndex(m=>String(m.id)===String(a.id)&&String(m.variantName||"")===String(s||""));n>-1?B[n].qty=(parseFloat(B[n].qty)||0)+1:B.push({id:a.id,name:a.name,variantName:s,price:i,img:o,qty:1,unit:r&&r.unit||a.unit||"pcs",colorCode:r&&r.colorCode||"",poin:c});try{localStorage.setItem("freshmart_cart",JSON.stringify(B))}catch{}ns(),$(`"${a.name}${s?` (${s})`:""}" berhasil dimasukkan ke keranjang dengan harga Flash Sale!`,"success")},Bs=()=>{const e=l("fs-cards-slider");e&&e.scrollBy({left:-220,behavior:"smooth"})},Us=()=>{const e=l("fs-cards-slider");e&&e.scrollBy({left:220,behavior:"smooth"})};window.renderStorefrontFlashSale=Rt;window.quickBuyFlashSaleItem=js;window.scrollFlashSaleLeft=Bs;window.scrollFlashSaleRight=Us;let Ye=[];const Re=()=>{try{localStorage.setItem("freshmart_my_orders",JSON.stringify(U))}catch(e){console.warn("[MyOrders] Gagal menyimpan ke localStorage:",e)}},Ns=()=>{try{const e=localStorage.getItem("freshmart_my_orders");if(e){const t=JSON.parse(e);Array.isArray(t)&&t.length>0&&Ke(t)}}catch(e){console.warn("[MyOrders] Gagal memuat dari localStorage:",e)}return U},Et=()=>{Ye.forEach(e=>{try{typeof e=="function"&&e()}catch{}}),Ye=[]},Ot=()=>{Et(),U.filter(a=>{const s=a.status==="Selesai"||a.status==="Dibatalkan",i=a.claimedReward&&(a.claimedReward.status==="Menunggu Persetujuan"||!a.claimedReward.status);return!s||i}).slice(0,10).forEach(a=>{const s=a.orderId;if(!s)return;const i=q.collection("freshmart_orders").doc(s).onSnapshot(r=>{if(!r.exists)return;const o=r.data(),c=o.status,n=o.claimedReward?o.claimedReward.status:null,m=o.claimedReward&&o.claimedReward.note||"";let T=!1,L="";const v=U.find(M=>M.orderId===s);if(v){if(c&&v.status!==c){const M=v.status;v.status=c,T=!0,M!==void 0&&(L=`Pesanan #${s.split("-").pop()} kini: ${c}`)}v.claimedReward&&n&&(v.claimedReward.status!==n||v.claimedReward.note!==m)&&(v.claimedReward.status=n,v.claimedReward.note=m,T=!0),T&&(Re(),window.curViewName==="view-orders"&&Oe(),L&&$(L))}},r=>{console.warn("[MyOrders Realtime] Snapshot error:",r.message)});Ye.push(i)})},Oe=async()=>{if(Ns(),!U.length){ue("orders-empty-state"),R("btn-clear-orders"),ue("spacer-orders"),fe("orders-items-container","");return}R("orders-empty-state"),ue("btn-clear-orders"),R("spacer-orders"),Ot(),fe("orders-items-container",U.map((e,t)=>{const s=Pt(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});let i="text-slate-500 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",r="fa-clock";return e.status==="Baru"?(i="text-rose-600 border-rose-200 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400",r="fa-asterisk"):e.status==="Diproses"?(i="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",r="fa-spinner fa-spin"):e.status==="Selesai"?(i="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",r="fa-check-double"):e.status==="Dibatalkan"&&(i="text-slate-400 border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400",r="fa-xmark"),`
        <div class="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800/80 shadow-sm relative overflow-hidden group min-w-0 transition-all hover:border-[var(--color-primary)]/40 hover:shadow-md">
            <div class="flex justify-between items-start mb-3 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                <div>
                    <span class="font-bold text-sm text-slate-800 dark:text-white tracking-tight">#${e.orderId.split("-").pop()}</span>
                    <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5"><i class="fa-regular fa-calendar-days mr-1"></i>${s}</p>
                </div>
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-lg border ${i} uppercase tracking-wider flex items-center shadow-xs"><i class="fa-solid ${r} mr-1.5 text-[9px]"></i> ${w(e.status)}</span>
            </div>
            ${e.pointsEarned>0||e.claimedReward?`
            <div class="flex flex-wrap gap-1.5 mb-3">
                ${e.pointsEarned>0?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-amber-50 text-amber-600 border border-amber-200/90 dark:bg-amber-900/20 dark:border-amber-800/60 dark:text-amber-400"><i class="fa-solid fa-star mr-1"></i>+${e.pointsEarned} Poin</span>`:""}
                ${e.claimedReward?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)]/40 dark:text-[var(--color-primary)]"><i class="fa-solid fa-gift mr-1"></i>Hadiah: ${w(e.claimedReward.name)} ${it(e.claimedReward)}</span>`:""}
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
        </div>`}).join(""))},Hs=async(e,t)=>{he("Melacak Status...");try{const a=await q.collection("freshmart_orders").doc(e).get();if(a.exists){const s=a.data();if(U[t])U[t].status=s.status;else{const i=U.findIndex(r=>r.orderId===e);i>-1&&(U[i].status=s.status)}Re(),Oe(),$(`Status Pesanan: ${s.status}`)}else $("Pesanan tidak ditemukan di server.")}catch(a){console.error("Gagal cek status pesanan:",a),$("Gagal mengambil data sistem. Periksa koneksi.")}finally{re()}},Gs=async()=>{const e=l("order-tracking-input"),t=e?e.value.trim():"";if(!t){$("Masukkan ID Pesanan terlebih dahulu!");return}let a=t.replace(/^#/,"").trim();const s=U.find(i=>i.orderId===a||i.orderId.endsWith(a));if(s){et(s.orderId);return}he("Mencari Pesanan...");try{let i=await q.collection("freshmart_orders").doc(a).get();if(!i.exists&&!a.startsWith("ORD-")){const r="ORD-"+a,o=await q.collection("freshmart_orders").doc(r).get();o.exists&&(i=o,a=r)}if(i.exists){const r=i.data();U.some(c=>c.orderId===a)||(U.unshift({orderId:a,date:r.dateString||(r.timestamp?r.timestamp.toDate().toISOString():new Date().toISOString()),dateString:r.dateString||(r.timestamp?r.timestamp.toDate().toISOString():new Date().toISOString()),total:r.payment&&r.payment.grandTotal?r.payment.grandTotal:r.total||0,itemCount:(r.items||[]).reduce((c,n)=>c+(parseFloat(n.qty)||0),0),status:r.status||"Baru",pointsEarned:r.pointsEarned||0,claimedReward:r.claimedReward||null,finalMemberPoints:r.finalMemberPoints||null,customerType:r.customerType||"Pelanggan Umum",customer:r.customer||{},items:r.items||[],payment:r.payment||{},isTempo:!!r.isTempo}),Re(),Oe()),e&&(e.value=""),$("Pesanan berhasil ditemukan!"),et(a)}else $("Pesanan dengan ID tersebut tidak ditemukan.")}catch(i){console.error("Gagal melacak pesanan:",i),$("Gagal menghubungi server. Pastikan ID Pesanan sudah benar.")}finally{re()}},Ks=()=>{Ht("Hapus Riwayat","Riwayat pesanan di perangkat ini akan dihapus. Pesanan tetap tersimpan di sistem toko. Lanjutkan?",()=>{Ke([]),Re(),Oe(),$("Riwayat lokal dibersihkan")})},et=async e=>{const t=Array.isArray(U)?U.find(a=>a.orderId===e):null;if(t&&t.items&&t.items.length>0){window.currentCustomerOrder=t,window.lastPrintedOrder=t,Ue(e,t,[]),q.collection("freshmart_orders").doc(e).get().then(async a=>{if(a.exists){const s=a.data();s.orderId=s.orderId||a.id||e;let i=[];if(s.status==="Selesai")try{i=(await q.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(n=>`${n.data().productId}::${n.data().variantName||""}`)}catch{}window.currentCustomerOrder=s,window.lastPrintedOrder=s;const r=U.findIndex(c=>c.orderId===s.orderId);r!==-1&&(Object.assign(U[r],s),Re());const o=document.getElementById("order-detail-modal");o&&!o.classList.contains("hidden")&&!o.classList.contains("opacity-0")&&Ue(e,s,i,!0)}}).catch(a=>console.warn("[MyOrders] Silent background fetch error:",a));return}he("Memuat Rincian...");try{const a=await q.collection("freshmart_orders").doc(e).get();if(!a.exists){$("Pesanan tidak ditemukan.");return}const s=a.data();s.orderId=s.orderId||a.id||e;let i=[];if(s.status==="Selesai")try{i=(await q.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(o=>`${o.data().productId}::${o.data().variantName||""}`)}catch{}if(window.currentCustomerOrder=s,window.lastPrintedOrder=s,Array.isArray(U)){const r=U.findIndex(o=>o.orderId===s.orderId);r!==-1&&(Object.assign(U[r],s),Re())}Ue(e,s,i)}catch(a){console.error("Gagal mengambil data pesanan:",a),$("Gagal memuat rincian pesanan. Coba beberapa saat lagi.")}finally{re()}},Ue=(e,t,a=[],s=!1)=>{try{t&&(t.orderId=t.orderId||e,window.currentCustomerOrder=t,window.lastPrintedOrder=t);let i=document.getElementById("order-detail-modal");i||(i=document.createElement("div"),i.id="order-detail-modal",i.className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 opacity-0 pointer-events-none transition-opacity duration-300",document.body.appendChild(i));const r=w(t.customer&&t.customer.name?t.customer.name:"-"),o=w(t.customer&&t.customer.wa?t.customer.wa:"-"),c=w(t.customer&&t.customer.address?t.customer.address:"-"),n=t.customer&&t.customer.deliveryMethod==="delivery"?"Dikirim ke Alamat":"Ambil di Toko (Pickup)",m=w(t.customer&&t.customer.note?t.customer.note:""),T=!!(t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"),L=T?"Putri PayLater":w(t.payment&&t.payment.method?t.payment.method:"Cash / COD"),v=t.items||[],M=v.some(A=>A.poTime&&A.poTime!==""),H=v.map(A=>{const ee=parseFloat(A.qty)||0,Z=parseFloat(A.effectivePrice||A.price)||0,X=ee*Z,k=`${A.id}::${A.variantName||""}`,le=t.status==="Selesai"&&!a.includes(k)&&A.id!==void 0&&A.id!==null;return`
            <div class="flex gap-3 items-center border-b border-slate-100 dark:border-slate-800/80 py-3 last:border-0">
                <div class="w-12 h-12 rounded-xl bg-white dark:bg-slate-950 bg-cover bg-center shrink-0 border border-slate-200/90 dark:border-slate-800/80" style="background-image:url('${w(A.img||(x&&x.store?x.store.logo:""))}')"></div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate mb-0.5" title="${w(A.name)}">${w(A.name)}</p>
                    ${A.variantName||A.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${A.variantName?`<span class="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded text-[9px] font-semibold border border-slate-200/80 dark:border-slate-700">${w(A.variantName)}</span>`:""}
                        ${A.poTime?`<span class="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">PO ${w(A.poTime)}</span>`:""}
                    </div>
                    `:""}
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400">${ee} ${w(A.unit||"pcs")} x ${h(Z)}</p>
                    ${le?`<button type="button" onclick="openReviewModal('${e}',${A.id},'${encodeURIComponent(A.variantName||"")}','${encodeURIComponent(A.name||"")}','${encodeURIComponent(t.customer?.name||"")}')" class="mt-1.5 text-[10px] font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1 transition-colors"><i class="fa-solid fa-star"></i> Berikan Ulasan</button>`:""}
                </div>
                <div class="text-right shrink-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-[var(--color-primary)]">${h(X)}</p>
                </div>
            </div>
            `}).join(""),F=Pt(t).toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),p=Gt(t),C=p.subtotal,W=p.shipping,G=p.productDiscount,O=p.shippingDiscount,u=p.pointDiscount,oe=p.grandTotal;i.innerHTML=`
            <div class="modal-bottom-sheet bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-3xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col shadow-2xl transform translate-y-full sm:translate-y-10 scale-100 transition-transform duration-300 border border-slate-200/90 dark:border-slate-800 overflow-hidden pointer-events-auto" id="order-detail-content">
                <!-- DRAG PULL INDICATOR MOBILE -->
                <div class="sm:hidden w-full pt-3 pb-1 flex justify-center items-center shrink-0">
                    <div class="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full pull-indicator"></div>
                </div>

                <div class="px-5 sm:px-6 pt-3.5 sm:pt-5 pb-4 border-b border-slate-200/90 dark:border-slate-800 flex justify-between items-center shrink-0" style="background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08) 0%, rgba(var(--color-primary-rgb), 0.02) 100%);">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-xs shrink-0" style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.3);">
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
                            <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40">${w(t.status||"Baru")}</span>
                        </div>
                        <div class="text-right">
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Waktu Pembelian</p>
                            <p class="text-[11px] font-bold text-slate-700 dark:text-slate-300">${F}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800/80">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-user text-slate-400"></i> Info Pelanggan</h4>
                            <div class="space-y-1 text-xs">
                                <p class="font-bold text-slate-800 dark:text-slate-200">${r}</p>
                                ${t.customer&&t.customer.wa?`<a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${o}'); else window.open('https://wa.me/${o}', '_blank', 'noopener,noreferrer');" class="flex items-center gap-1 text-[var(--color-primary)] font-bold hover:underline cursor-pointer"><i class="fa-brands fa-whatsapp"></i> +${o}</a>`:""}
                                ${t.customer&&t.customer.lat&&t.customer.deliveryMethod==="delivery"?`<a href="https://www.google.com/maps?q=${w(t.customer.lat)},${w(t.customer.lng)}" target="_blank" class="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"><i class="fa-solid fa-location-dot"></i> Lihat Peta</a>`:""}
                            </div>
                        </div>
                        <div class="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800/80">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-truck text-slate-400"></i> Pengiriman & Bayar</h4>
                            <div class="space-y-1 text-xs">
                                <p><span class="text-slate-500 inline-block w-14">Metode</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${n}</span></p>
                                <p><span class="text-slate-500 inline-block w-14">Bayar</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${L.toUpperCase()}</span></p>
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
                        <a href="${w(t.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border-2 border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] transition-colors shadow-xs">
                            <img src="${w(t.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-52 object-cover" onerror="this.style.display='none'" loading="lazy">
                            <div class="bg-[rgba(var(--color-primary-rgb),0.06)] p-2 flex items-center justify-center gap-1.5 text-[10px] font-bold text-[var(--color-primary)]"><i class="fa-solid fa-arrow-up-right-from-square"></i> Buka Ukuran Penuh</div>
                        </a>
                    </div>`:""}
                    
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-basket-shopping text-slate-400"></i> Daftar Produk</h4>
                        <div class="bg-slate-50 dark:bg-slate-950/60 rounded-xl px-3 py-1 border border-slate-200/90 dark:border-slate-800/80">
                            ${H}
                        </div>
                    </div>

                    ${M?`
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
                            <p class="text-[11px] font-semibold text-[var(--color-primary)] mt-1 ml-5">${it(t.claimedReward)}</p>
                            ${t.claimedReward.note?`<p class="text-[11px] text-[var(--color-primary)]/70 italic mt-0.5 ml-5">"${w(t.claimedReward.note)}"</p>`:""}
                        </div>`:""}
                    </div>`:""}

                    <div class="bg-slate-50 dark:bg-slate-950/60 p-4 rounded-xl border border-slate-200/90 dark:border-slate-800/80 space-y-2 text-xs">
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Subtotal Produk</p><p class="font-bold text-slate-800 dark:text-white">${h(C)}</p></div>
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Ongkos Kirim</p><p class="font-bold text-slate-800 dark:text-white">${h(W)}</p></div>
                        ${O>0?`<div class="flex justify-between text-[var(--color-primary)]"><p>Diskon Ongkir</p><p class="font-bold">-${h(O)}</p></div>`:""}
                        ${G>0?`<div class="flex justify-between text-rose-500"><p>Diskon Promo</p><p class="font-bold">-${h(G)}</p></div>`:""}
                        ${u>0?`<div class="flex justify-between text-emerald-600 dark:text-emerald-400"><p>Diskon Poin Member</p><p class="font-bold">-${h(u)}</p></div>`:""}
                        ${T&&p.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Biaya Admin PayLater</p><p class="font-bold text-slate-800 dark:text-white">+${h(p.paylaterAdminFee)}</p></div>`:""}
                        ${T&&p.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Biaya Penanganan / Layanan</p><p class="font-bold text-slate-800 dark:text-white">+${h(p.paylaterServiceFee)}</p></div>`:""}
                        ${p.hasPpn?`
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>DPP (Dasar Pengenaan Pajak)</p><p class="font-bold text-slate-800 dark:text-white">${h(p.dppAmount)}</p></div>
                        <div class="flex justify-between text-amber-600 dark:text-amber-400"><p>${w(p.ppnLabel)}</p><p class="font-bold">${p.ppnAmount>0?(p.isInclusive?"":"+")+h(p.ppnAmount):"Rp 0"}</p></div>
                        `:""}
                        <div class="flex justify-between items-center border-t border-dashed border-slate-300 dark:border-slate-700 pt-3 mt-2">
                            <p class="font-bold text-slate-800 dark:text-white uppercase tracking-wider">Total Tagihan</p>
                            <p class="text-lg font-bold text-[var(--color-primary)]">${h(oe)}</p>
                        </div>
                        ${(()=>{if(!T)return"";const A=Array.isArray(t.payment?.paylaterSchedule)&&t.payment.paylaterSchedule.length>0?t.payment.paylaterSchedule:null,ee=t.payment?.paylaterMonths||(A?A.length:1),Z=t.payment?.paylaterMonthlyInstallment||(ee>0?Math.round(oe/ee):oe);let X="";return A&&A.length>0&&(X=`
                                <div class="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-700/80 space-y-2">
                                    <p class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                        <i class="fa-solid fa-calendar-days text-[var(--color-primary)]"></i> Rencana Jadwal Angsuran Anda:
                                    </p>
                                    <div class="space-y-2">
                                        ${A.map((k,le)=>{const N=k.installmentIndex||k.installmentNo||k.installmentNumber||k.month||le+1,_=k.dueDateFormatted||k.dueDateStr||(k.dueDate?new Date(k.dueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"),we=parseFloat(k.total||k.totalMonthly||k.totalInstallment)||Z;return`
                                            <div class="p-3 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200/90 dark:border-slate-800/80 flex items-center justify-between gap-3 shadow-2xs">
                                                <div class="flex items-center gap-2.5 min-w-0">
                                                    <div class="w-8 h-8 rounded-xl bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] font-black text-xs flex items-center justify-center shrink-0">
                                                        ${N}
                                                    </div>
                                                    <div class="min-w-0">
                                                        <p class="text-xs font-bold text-slate-800 dark:text-white leading-tight">Bulan ke-${N}</p>
                                                        <p class="text-[10px] text-slate-400 font-mono mt-0.5">Jatuh Tempo: ${_}</p>
                                                    </div>
                                                </div>
                                                <div class="text-right shrink-0">
                                                    <p class="text-xs font-black font-mono text-[var(--color-primary)]">${h(we)}</p>
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
                                ${Z?`
                                <div class="flex justify-between text-[var(--color-primary)] font-black text-xs">
                                    <span>Angsuran per Bulan (${ee}x)</span>
                                    <span class="font-mono text-sm">${h(Z)}/bln</span>
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
        `,s||(i.classList.contains("opacity-0")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("customerOrder"),document.body.classList.add("overflow-hidden"),Me(i,"order-detail-content"))}catch(i){console.error("Error Render HTML Modal:",i),$("Gagal menampilkan detail. Coba lagi.")}},qs=(e=!1)=>{const t=()=>{const a=document.getElementById("order-detail-modal"),s=document.getElementById("order-detail-content");Ae(a,s,()=>{document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none):not(#order-detail-modal)')||document.body.classList.remove("overflow-hidden")})};typeof window.requestCloseModal=="function"?window.requestCloseModal("customerOrder",e,t):t()};window.attachMyOrdersRealtime=Ot;window.detachMyOrdersRealtime=Et;window.renderMyOrders=Oe;window.checkOrderStatus=Hs;window.trackOrderManual=Gs;window.clearMyOrders=Ks;window.openCustomerOrderDetail=et;window.renderOrderDetailModal=Ue;window.closeCustomerOrderDetailModal=qs;window.reviewPhotoFile=null;window.reviewRating=0;const Vs=(e,t,a,s,i)=>{const r=decodeURIComponent(a||""),o=decodeURIComponent(s||""),c=decodeURIComponent(i||"");let n=document.getElementById("review-modal");n||(n=document.createElement("div"),n.id="review-modal",n.className="fixed inset-0 z-[120] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",n.onclick=m=>{m.target===n&&dt()},document.body.appendChild(n)),window.reviewPhotoFile=null,window.reviewRating=0,n.innerHTML=`
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
        </div>`,l("review-submit-btn").onclick=()=>ct(e,t,r,o,c),n.style.opacity="0",n.style.display="flex",requestAnimationFrame(()=>{n.style.transition="opacity 0.25s ease",n.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("review")},Ws=e=>{window.reviewRating=e,document.querySelectorAll(".review-star").forEach(t=>{const a=parseInt(t.dataset.star);t.classList.toggle("text-amber-400",a<=e),t.classList.toggle("text-slate-300",a>e),t.classList.toggle("dark:text-slate-600",a>e)})},zs=e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/")){$("Hanya file gambar yang diizinkan!");return}if(t.size>5*1024*1024){$("Ukuran gambar max 5MB!");return}window.reviewPhotoFile=t;const a=new FileReader;a.onload=s=>{l("review-photo-preview").src=s.target.result,ue("review-photo-preview-wrap"),R("review-photo-btn")},a.readAsDataURL(t)},Js=()=>{window.reviewPhotoFile=null,R("review-photo-preview-wrap"),ue("review-photo-btn");const e=l("review-photo-input");e&&(e.value="")},dt=(e=!1)=>{const t=document.getElementById("review-modal");if(!t||t.style.display==="none")return;const a=()=>{t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250)};if(typeof ye=="function")ye("review",e,a);else if(typeof window.requestCloseModal=="function")window.requestCloseModal("review",e,a);else{if(!e&&Se.length&&Se[Se.length-1]==="review"){Se.pop();try{history.back()}catch{}}a()}},ct=async(e,t,a,s,i)=>{if(!window.reviewRating||window.reviewRating<1)return $("Silakan beri bintang terlebih dahulu!");if(!st){ce(!0),he("Mengirim ulasan...");try{let r="";if(window.reviewPhotoFile&&typeof window.uploadBuktiToGDrive=="function"){const n=await window.uploadBuktiToGDrive(window.reviewPhotoFile,"review-"+e);n?r=n:$("Foto gagal diupload, ulasan tetap dikirim tanpa foto.")}const o=Date.now(),c={id:o,orderId:e||"",productId:t??0,variantName:a||"",productName:s||"",customerName:i||"Pelanggan",rating:window.reviewRating,text:ge("review-text")||"",photoUrl:r||"",adminReply:"",isVisible:!0,createdAt:Ce.firestore.FieldValue.serverTimestamp()};await q.collection("freshmart").doc("cms_data").collection("reviews").doc(o.toString()).set(c),tt.delete(t),dt(),$("Terima kasih atas ulasan Anda!"),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(r){console.error("Gagal mengirim ulasan:",r),$("Gagal mengirim ulasan: "+(r.message||"Error tidak diketahui"))}finally{ce(!1),re()}}},tt=new Map,Qs=5*60*1e3,Zs=async e=>{if(!l("product-modal-reviews-container"))return;const a=i=>{const r=i.length?i.reduce((m,T)=>m+(parseFloat(T.rating)||0),0)/i.length:0,o=m=>Array.from({length:5},(T,L)=>`<i class="fa-solid fa-star ${L<Math.round(m)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join("");let c=`
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2"><i class="fa-solid fa-comment-dots text-amber-400"></i> Ulasan Pelanggan</h4>
                ${i.length?`<div class="flex items-center gap-1.5"><span class="flex text-xs">${o(r)}</span><span class="text-xs font-bold text-slate-600 dark:text-slate-300">${r.toFixed(1)}</span><span class="text-[10px] font-bold text-slate-400">(${i.length})</span></div>`:""}
            </div>`;if(!i.length){fe("product-modal-reviews-container",c+`
            <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 text-center space-y-2">
                <div class="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-500 flex items-center justify-center mx-auto text-sm border border-amber-200/80 dark:border-amber-900/40">
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Belum Ada Ulasan</p>
                <p class="text-[11px] text-slate-400 max-w-xs mx-auto">Jadilah yang pertama mencoba dan memberikan ulasan bintang 5 untuk produk ini!</p>
            </div>`);return}const n=i.map(m=>{let T="";try{m.createdAt&&m.createdAt.toDate&&(T=m.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}))}catch{}return`
            <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div class="flex items-center justify-between mb-1.5">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${w(m.customerName||"Pelanggan")}</p>
                    <span class="text-[9px] font-bold text-slate-400">${T}</span>
                </div>
                <div class="flex text-[11px] mb-2">${o(m.rating)}</div>
                ${m.variantName?`<p class="text-[10px] font-bold text-slate-400 mb-1.5">Varian: ${w(m.variantName)}</p>`:""}
                ${m.text?`<p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${w(m.text)}</p>`:""}
                ${m.photoUrl?`<div class="w-16 h-16 rounded-xl overflow-hidden mb-3 border border-slate-200 dark:border-slate-700"><img src="${w(m.photoUrl)}" class="w-full h-full object-cover cursor-pointer" onclick="window.open('${w(m.photoUrl)}','_blank')" alt="Foto ulasan"></div>`:""}
                ${m.adminReply?`
                <div class="mt-2.5 p-3 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.2)] rounded-xl">
                    <p class="text-[10px] font-bold text-[var(--color-primary-dark)] dark:text-[var(--color-primary)] mb-1 flex items-center gap-1"><i class="fa-solid fa-reply"></i> Balasan Penjual</p>
                    <p class="text-xs text-slate-600 dark:text-slate-300">${w(m.adminReply)}</p>
                </div>`:""}
            </div>`}).join("");fe("product-modal-reviews-container",c+`<div class="space-y-3">${n}</div>`)},s=tt.get(e);if(s&&Date.now()-s.timestamp<Qs){a(s.data);return}fe("product-modal-reviews-container",`
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
        </div>`);try{let r=(await q.collection("freshmart").doc("cms_data").collection("reviews").where("productId","==",e).get()).docs.map(o=>o.data()).filter(o=>o.isVisible!==!1);r.sort((o,c)=>{const n=o.createdAt&&o.createdAt.toMillis?o.createdAt.toMillis():0;return(c.createdAt&&c.createdAt.toMillis?c.createdAt.toMillis():0)-n}),tt.set(e,{data:r,timestamp:Date.now()}),a(r)}catch(i){console.warn("Gagal memuat ulasan:",i),fe("product-modal-reviews-container",`
        <div class="p-4 text-center text-slate-400 text-xs font-semibold rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800">
            <i class="fa-solid fa-circle-exclamation text-slate-400 mr-1.5"></i> Belum ada ulasan yang dapat dimuat.
        </div>`)}};window.openReviewModal=Vs;window.setReviewRating=Ws;window.handleReviewPhotoSelect=zs;window.removeReviewPhoto=Js;window.closeReviewModal=dt;window.submitReview=ct;window.submitProductReview=ct;window.loadProductReviews=Zs;const Xs="admgaffidigital/tokoputri",Ys=`https://api.github.com/repos/${Xs}/releases/latest`,at="https://github.com/admgaffidigital/tokoputri/releases/latest/download/TokoPutri.OfficialStore.apk";let Pe=null,We=!1;const er=e=>!e||isNaN(e)?"8.0 MB":`${(e/(1024*1024)).toFixed(1)} MB`,tr=e=>{if(!e)return"Terbaru";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return"Terbaru"}},ar=async()=>{if(Pe)return Pe;if(We)return null;const e=Xe(x)||"v1.19.6";We=!0;try{const t=await fetch(Ys,{headers:{Accept:"application/vnd.github.v3+json"},cache:"no-store"});if(t.ok){const a=await t.json(),s=a.assets?.find(c=>c.name?.toLowerCase().endsWith(".apk"))||a.assets?.[0],i=a.tag_name||e,r=Ls(i,e)>0,o=r?e:i;Pe={tagName:o,name:`Toko Putri ( Official Store ) ${o}`,publishedAt:r?"20 Okt 2026":tr(a.published_at),fileSize:s?er(s.size):"15.8 MB",downloadUrl:s?.browser_download_url||at,notes:a.body||"",isLiveFetched:!0}}else throw new Error(`GitHub API HTTP ${t.status}`)}catch{const a=Xe(x)||"v1.19.6";Pe={tagName:a,name:`Toko Putri ( Official Store ) ${a}`,publishedAt:"20 Okt 2026",fileSize:"15.8 MB",downloadUrl:at,notes:"",isLiveFetched:!1}}finally{We=!1}return Pe},sr=()=>{let e=l("app-download-modal");return e||(e=document.createElement("div"),e.id="app-download-modal",e.className="fixed inset-0 z-[125] bg-slate-950/85 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&_t()},e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e)},rr=async()=>{const e=sr();if(!e)return;De("appDownload"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const a=l("app-download-modal-box");a&&a.classList.remove("translate-y-full","sm:translate-y-8")}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light");const t=await ar();if(t){const a=l("app-modal-version-tag"),s=l("app-modal-filesize"),i=l("app-modal-published-date");a&&(a.textContent=t.tagName),s&&(s.innerHTML=`<span>${w(t.fileSize)}</span>`),i&&(i.textContent=`Rilis: ${w(t.publishedAt)}`)}},_t=(e=!1)=>{const t=l("app-download-modal");!t||t.style.display==="none"||ye("appDownload",e,()=>{t.classList.add("opacity-0");const a=l("app-download-modal-box");a&&a.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{t.style.display="none"},300)})},ir=()=>{const e=l("btn-download-apk-action"),t=l("btn-download-apk-icon"),a=l("btn-download-apk-text");e&&e.classList.add("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-spinner fa-spin"),a&&(a.textContent="Menghubungkan ke Server Rilis..."),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.showToast=="function"&&window.showToast("Memulai unduhan TokoPutri(OfficialStore).apk terbaru. Cek panel notifikasi HP Anda!");const s=Pe?.downloadUrl||at,i=document.createElement("a");i.href=s,i.setAttribute("download","TokoPutri(OfficialStore).apk"),i.target="_blank",i.rel="noopener noreferrer",document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>{if(e&&e.classList.remove("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-circle-check text-white"),a){const r=Pe?.tagName||Xe(x)||"v1.19.6";a.textContent=`Unduh Ulang APK (${r})`}},2500)};window.openAppDownloadModal=rr;window.closeAppDownloadModal=_t;window.downloadLatestApk=ir;window.setCat=e=>{St(e),ot(1),typeof window.rCat=="function"&&window.rCat()};window.setBrand=e=>{Tt(e),ot(1),typeof window.rCat=="function"&&window.rCat()};const or=()=>{let e="",t=Ze==="Semua Produk";e+=`
    <button onclick="setCat('Semua Produk'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-colors">
            <i class="fa-solid fa-layer-group text-base sm:text-lg"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA</span>
        <i class="fa-solid fa-circle-check text-base ${t?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
    </button>`,x.categories.forEach(r=>{let o=Ze===r.name,c=r.img?`<img loading="lazy" src="${w(r.img)}" alt="${w(r.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Cat'">`:'<i class="fa-solid fa-box text-base sm:text-lg"></i>';e+=`
        <button onclick="setCat('${w(r.name)}'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${o?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden border border-slate-200 dark:border-slate-600">
                ${c}
            </div>
            <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 line-clamp-1 ${o?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${w(r.name)}</span>
            <i class="fa-solid fa-circle-check text-base ${o?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
        </button>`});const a=l("modal-category-list");a&&(a.innerHTML=`<div class="flex flex-col gap-2.5 pb-6 w-full">${e}</div>`);const s=l("category-modal"),i=l("category-modal-content");s&&i&&(s.classList.contains("hidden")&&De("category"),Me(s,i))};window.openCategoryModal=or;window.openBrandModal=()=>{let e="",t=Qe==="Semua Merek";e+=`
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA MEREK</span>
    </button>`,x.brands.forEach(r=>{let o=Qe===r.name,c=r.img?`<img loading="lazy" src="${w(r.img)}" alt="${w(r.name)}" class="w-full h-full object-contain p-1.5" >`:'<i class="fa-solid fa-tag text-lg sm:text-xl"></i>';e+=`
        <button onclick="setBrand('${w(r.name)}'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${o?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-2.5 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600">
                ${c}
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${o?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${w(r.name)}</span>
        </button>`});const a=l("modal-brand-grid");a&&(a.innerHTML=e);const s=l("brand-modal"),i=l("brand-modal-content");s&&i&&(s.classList.contains("hidden")&&De("brand"),Me(s,i))};window.closeCategoryModal=(e=!1)=>{const t=l("category-modal"),a=l("category-modal-content");t&&a&&ye("category",e,()=>{Ae(t,a)})};window.closeBrandModal=(e=!1)=>{const t=l("brand-modal"),a=l("brand-modal-content");t&&a&&ye("brand",e,()=>{Ae(t,a)})};window.openQuickMenuModal=()=>{const e=l("quickmenu-modal"),t=l("quickmenu-modal-content");if(e&&t){const a=t.querySelector(".overflow-y-auto");a&&(a.scrollTop=0),e.classList.contains("hidden")&&De("quickmenu"),Me(e,t)}};window.openTermsModal=()=>{const e=`
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
    `,t=x?.store?.terms,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;fe("terms-modal-content-body",a);const s=l("terms-modal"),i=l("terms-modal-content");s&&i&&(s.classList.contains("hidden")&&De("terms"),Me(s,i))};window.closeTermsModal=(e=!1)=>{const t=l("terms-modal"),a=l("terms-modal-content");t&&a&&ye("terms",e,()=>{Ae(t,a)})};window.openPrivacyModal=()=>{const e=`
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
    `,t=x?.store?.privacy,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;fe("privacy-modal-content-body",a);const s=l("privacy-modal"),i=l("privacy-modal-content");s&&i&&(s.classList.contains("hidden")&&De("privacy"),Me(s,i))};window.closePrivacyModal=(e=!1)=>{const t=l("privacy-modal"),a=l("privacy-modal-content");t&&a&&ye("privacy",e,()=>{Ae(t,a)})};window.closeQuickMenuModal=(e=!1)=>{const t=l("quickmenu-modal"),a=l("quickmenu-modal-content");t&&a&&ye("quickmenu",e,()=>{Ae(t,a)})};window.switchGuideTab=(e="customer")=>{["customer","pos","admin"].forEach(s=>{const i=l(`guide-tab-btn-${s}`),r=l(`guide-section-${s}`);s===e?(i&&(i.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-extrabold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer primary-bg text-white"),r&&r.classList.remove("hidden")):(i&&(i.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"),r&&r.classList.add("hidden"))});const a=document.querySelector("#shopping-guide-modal .custom-scrollbar");a&&(a.scrollTop=0)};window.openShoppingGuideModal=(e="customer")=>{const t=l("shopping-guide-modal"),a=l("shopping-guide-modal-content");t&&a&&(typeof window.switchGuideTab=="function"&&window.switchGuideTab(e),t.classList.contains("hidden")&&De("guide"),Me(t,a))};window.closeShoppingGuideModal=(e=!1)=>{const t=l("shopping-guide-modal"),a=l("shopping-guide-modal-content");t&&a&&ye("guide",e,()=>{Ae(t,a)})};window.navigateFromQuickMenu=e=>{closeQuickMenuModal(!0);const t=Se.indexOf("quickmenu");t>-1&&Se.splice(t,1),typeof e=="function"?(history.replaceState({view:Kt},"",window.location.href),e()):(history.replaceState({view:e},"",window.location.href),qt(e,!0))};let gt=!1,je=null;const Ge=async()=>gt?!0:je||(je=Promise.all([Ne(()=>import("./module-admin-CH34RU7u.js").then(e=>e.j),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),Ne(()=>import("./module-admin-CH34RU7u.js").then(e=>e.k),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)]).then(()=>(gt=!0,!0)),je);window.ensureAdminLoaded=Ge;window.checkAdminAccess=async()=>{if(he("Membuka Panel Owner..."),await Ge(),re(),typeof window.__checkAdminAccessReal=="function")return window.__checkAdminAccessReal()};typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);typeof window<"u"&&(window.AndroidNativeApp||window.Capacitor||window.location&&(window.location.protocol==="capacitor:"||window.location.protocol==="ionic:"))&&document.documentElement.classList.add("is-native-app");Vt();window.firebase=Ce;window.db=q;window.DOMPurify=as;window.ensureScriptLoaded=Wt;if(typeof window<"u"){const e=window.print?window.print.bind(window):null;window.print=function(){window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():e&&e()}}window.uiPalettes=ls;window.hexToRgb=ds;window.applyUITheme=Dt;window.toggleTheme=cs;window.applyBackgroundStyle=It;ps();const nr=localStorage.getItem("freshmart_ui_theme")||"emerald";Dt(nr,localStorage.getItem("freshmart_theme_color"));const ht=()=>{Ps();const e=localStorage.getItem("freshmart_bg_style")||"minimalist",t=localStorage.getItem("freshmart_bg_custom_url")||"";It(e,t),Ss()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ht):ht();window.onerror=function(e,t,a,s,i){return console.error("Global Error Caught:",e,"at",a,":",s),typeof showToast=="function"&&showToast("Ops, ada kendala sistem."),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Promise Rejection Sentinel:",e.reason)});window.addEventListener("vite:preloadError",function(e){console.warn("[Vite] Chunk preload failed (new deployment detected). Auto-reloading...",e);const t="freshmart_preload_reload",a=sessionStorage.getItem(t),s=Date.now();(!a||s-parseInt(a,10)>1e4)&&(sessionStorage.setItem(t,String(s)),window.location.reload())});window.updateSEO=zt;window.injectJSONLD=Jt;window.rewardStatusLabel=it;window.getYouTubeId=Qt;window.parseVideoUrl=Zt;window.fixDriveVideo=Xt;window.fixDriveVideoPreview=Yt;let yt=$t;window.calcTaxDetails=e=>{const t=x?.store||{},a=t.ppnEnabled===!0||t.ppnEnabled==="true",s=t.ppnRate!==void 0&&t.ppnRate!==null&&!isNaN(parseFloat(t.ppnRate))?Math.max(0,parseFloat(t.ppnRate)):11,i=t.ppnType||"exclusive",r=t.ppnShowZero!==!1,o=t.ppnTaxLabel||"PPN";if(!a||e<=0)return{ppnEnabled:!1,ppnRate:0,ppnType:i,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0,ppnShowZero:!1,ppnLabel:"PPN"};if(s===0)return{ppnEnabled:!0,ppnRate:0,ppnType:i,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0,ppnShowZero:r,ppnLabel:o};if(i==="inclusive"){const c=Math.round(e*100/(100+s)),n=e-c;return{ppnEnabled:!0,ppnRate:s,ppnType:"inclusive",ppnAmount:n,dppAmount:c,grandTotalAdd:0,ppnShowZero:r,ppnLabel:o}}else{const c=Math.round(e*s/100);return{ppnEnabled:!0,ppnRate:s,ppnType:"exclusive",ppnAmount:c,dppAmount:Math.max(0,e),grandTotalAdd:c,ppnShowZero:r,ppnLabel:o}}};typeof requestIdleCallback<"u"?requestIdleCallback(mt,{timeout:5e3}):setTimeout(mt,3e3);window.isAdm=!1;history.replaceState({view:"view-catalog"},"","");window.addEventListener("DOMContentLoaded",async()=>{try{Mt()}catch(e){console.warn("[NativeMobile] Error:",e)}await ms();try{us()}catch(e){console.warn("[syncAppMeta] Error:",e)}fs(),ws(),wt(),window.attachRewardsRealtime=wt,Ne(()=>import("./module-pos-DgTC3RP6.js").then(e=>e.X),__vite__mapDeps([4,1,2,3,5,6]),import.meta.url).then(e=>{typeof e.initPOSAuth=="function"&&e.initPOSAuth()}).catch(e=>console.warn("[POS Auth] Gagal inisialisasi:",e)),qe.onAuthStateChanged(async e=>{if(!As()){if(e&&e.uid!==Ee){try{const t=await q.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(e.uid).get();if(t.exists){const a=t.data()||{};if(a.isActive===!1){if(Ve(),typeof window.detachAllAdminListenersBeforeSignOut=="function")try{window.detachAllAdminListenersBeforeSignOut()}catch{}else{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}}await qe.signOut();return}const s={uid:e.uid,name:a.name||e.email,email:a.email||e.email,role:a.role||_e.CASHIER,permissions:a.permissions||null,isActive:!0};if(ut(s),s.role===_e.CASHIER){Ne(()=>import("./module-pos-DgTC3RP6.js").then(r=>r.X),__vite__mapDeps([4,1,2,3,5,6]),import.meta.url).then(r=>{typeof r.setCashierSession=="function"&&r.setCashierSession(s)}).catch(()=>{}),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();return}await Ge(),window.isAdm=!0,window.__localIsAdm=!0,bt(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();let i=document.getElementById("view-admin-login");i&&!i.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu());return}}catch{}if(Ve(),typeof window.detachAllAdminListenersBeforeSignOut=="function")try{window.detachAllAdminListenersBeforeSignOut()}catch{}else{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}}await qe.signOut();return}if(e&&e.uid===Ee){ut({uid:Ee,name:"Owner Toko",email:e.email,role:_e.OWNER,isActive:!0});try{sessionStorage.setItem("pos_cashier_session",JSON.stringify({uid:Ee,name:"Owner Toko",email:e.email,role:_e.OWNER}))}catch{}await Ge(),await Ds(),Is(),window.isAdm=!0,window.__localIsAdm=!0,bt(),typeof window.updatePOSHeaderIcon=="function"?window.updatePOSHeaderIcon():typeof window.initPOSAuth=="function"&&window.initPOSAuth();let t=document.getElementById("view-admin-login");t&&!t.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu(),showToast("Sesi Owner Dipulihkan! Selamat Datang."))}else{if($s(),localStorage.removeItem("freshmart_admin_session_id"),Ve(),window.isAdm=!1,window.__localIsAdm=!1,bs(),typeof window.detachAllAdminListenersBeforeSignOut=="function")try{window.detachAllAdminListenersBeforeSignOut()}catch{}else{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()}}})});window.el=l;window.show=ue;window.hide=R;window.toggleCls=ie;window.setIn=Y;window.setH=fe;window.setV=Le;window.getV=ge;window.esc=w;window.fixD=rt;window.fCur=h;window.fAccounting=ea;window.sL=ze;window.ssL=Be;window.defaultFbC=nt;window.fbC=nt;window.FIREBASE_CONFIG=nt;window.defApp=ta;window.ADMIN_UID=Ee;window.sLoad=he;window.hLoad=re;window.sanitizeCart=xs;window.initNativeMobileEngine=Mt;window.triggerHaptic=aa;window.checkAndEnforceSubscriptionLockout=gs;window.renderSubscriptionNoticeInCMS=hs;window.openRenewalModal=ys;window.closeRenewalModal=ks;window.verifyAndApplyLicenseKey=vs;const S=(e,t,a)=>{try{Object.defineProperty(window,e,{get:t,set:a,configurable:!0})}catch{}};S("GAS_UPLOAD_URL",()=>yt,e=>{yt=e});S("confirmCb",()=>sa,e=>{Wa(e)});S("appData",()=>x,e=>{ra(e)});S("cart",()=>B,e=>{kt(e)});S("wishlist",()=>oa,e=>{ia(e)});S("myOrders",()=>U,e=>{Ke(e)});S("cust",()=>d,e=>{vt(e)});S("currentMember",()=>I,e=>{Je(e)});S("selectedReward",()=>Te,e=>{Fe(e)});S("memberCheckTimer",()=>na,e=>{za(e)});S("aCat",()=>Ze,e=>{St(e)});S("aBrand",()=>Qe,e=>{Tt(e)});S("sQ",()=>da,e=>{la(e)});S("cSort",()=>pa,e=>{ca(e)});S("cView",()=>ua,e=>{ma(e)});S("cPage",()=>fa,e=>{ot(e)});S("iPP",()=>ba,e=>{wa(e)});S("cTab",()=>xa,e=>{Ja(e)});S("aSq",()=>ga,e=>{Qa(e)});S("eId",()=>ha,e=>{Za(e)});S("cProd",()=>ka,e=>{ya(e)});S("cVar",()=>Pa,e=>{va(e)});S("tVars",()=>Sa,e=>{Xa(e)});S("tWhol",()=>Ta,e=>{Ya(e)});S("tSpec",()=>Ma,e=>{es(e)});S("cQty",()=>Da,e=>{Aa(e)});S("oMods",()=>Se,e=>{Ia(e)});S("aOrdLst",()=>La,e=>{$a(e)});S("aCustLst",()=>Ca,e=>{Fa(e)});S("aRevLst",()=>Ea,e=>{Ra(e)});S("gOrds",()=>_a,e=>{Oa(e)});S("gReviews",()=>Ba,e=>{ja(e)});S("cVOrd",()=>Na,e=>{Ua(e)});S("vouch",()=>f,e=>{ke(e)});S("toastT",()=>Ha,e=>{ts(e)});S("isSaving",()=>st,e=>{ce(e)});S("reviewFilterMode",()=>Ka,e=>{Ga(e)});S("lastReportPeriod",()=>Va,e=>{qa(e)});
