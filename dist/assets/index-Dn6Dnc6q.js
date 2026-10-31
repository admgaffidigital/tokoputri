const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./module-admin-DhEXO2g6.js","./module-print-Dp_lwsDu.js","./vendor-firebase-core-D2OF5R23.js","./vendor-firebase-db-BIUZcnOd.js","./module-pos-Bnzlk-Xf.js","./module-member-Bkcjq_j1.js","./module-faq-DvYW0NgV.js","./vendor-sortable-DzmX_rHT.js"])))=>i.map(i=>d[i]);
import{a as f,c as O,g as xe,d as c,e as l,aR as u,j as ye,h as C,a4 as ie,f as k,a1 as ae,b as ue,i as w,ab as Ut,aa as Nt,y as Ce,s as pe,U as rt,aN as Je,ak as Ue,V as Y,l as he,n as V,p as D,q as W,t as U,aS as qe,w as Qe,aj as vt,G as Ie,aT as Pt,x as Le,k as $,m as it,aq as Ht,B as St,$ as ot,H as Gt,Z as Kt,o as Te,v as Me,r as ge,af as Se,ai as Ae,aA as Tt,aC as nt,aD as Mt,aw as Ze,au as qt,aU as Vt,av as Xe,aV as Wt,X as zt,aW as Jt,aX as Qt,ar as Zt,aK as Xt,aM as Yt,aL as ea,aY as ut,aZ as At,_ as He,A as Ve,J as Ee,F as We,R as je,K as ft,a3 as ta,aO as lt,a2 as aa,a_ as sa,a$ as ra,b0 as ia,b1 as oa,al as na,b2 as la,aH as da,aE as ca,aI as pa,aF as ma,aJ as ua,aG as fa,ax as wa,b3 as ba,ay as xa,b4 as ha,b5 as ga,b6 as ka,ao as ya,am as va,ap as Pa,an as Sa,b7 as Ta,b8 as Ma,b9 as Aa,at as Da,as as $a,ba as Ia,M as La,L as Fa,O as Ca,N as Ra,Q as Oa,P as Ea,a0 as _a,u as ja,ag as Ba,a7 as Ua,Y as Na,W as Ha,bb as Ga,a9 as Ka,a8 as qa,S as Va,I as Wa,bc as za,bd as Ja,T as Qa,ah as Za,be as Xa,bf as Ya,bg as es,bh as ts,bi as as}from"./module-print-Dp_lwsDu.js";import{f as Fe}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import{p as ss}from"./vendor-utils-DqNA57iZ.js";import{g as Dt,w as rs,x as wt,h as is,y as os,z as ns,A as ls,u as ds,B as cs,e as $t,C as ps,f as It,D as ms,E as us,v as fs,F as ws,G as bs,H as bt,a as xt,d as xs,I as hs,J as gs,K as ks,L as ys,M as vs,N as Ps,O as Ss,P as Ts}from"./module-pos-Bnzlk-Xf.js";import{G as Ms,a as Lt,u as As}from"./module-member-Bkcjq_j1.js";import{i as Ds,a as $s,b as Is,d as Ls}from"./module-admin-DhEXO2g6.js";import{a as Ye,c as Fs}from"./module-faq-DvYW0NgV.js";import"./vendor-sortable-DzmX_rHT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();const Cs=()=>{const e=l("toggle-droppoint"),t=l("droppoint-form");if(!(!e||!t))if(e.checked)t.classList.remove("hidden");else{t.classList.add("hidden"),c.dropPoint=null;const a=l("dp-location-status");a&&a.classList.add("hidden");const s=l("btn-dp-location");l("text-dp-location"),s&&(s.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>')}},Rs=()=>{if(!navigator.geolocation){typeof window.showToast=="function"&&window.showToast("GPS tidak didukung");return}const e=l("btn-dp-location");e&&(e.innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i> Mengambil GPS...'),navigator.geolocation.getCurrentPosition(t=>{c.dropPoint||(c.dropPoint={}),c.dropPoint.lat=t.coords.latitude,c.dropPoint.lng=t.coords.longitude;const a=l("dp-location-status");a&&a.classList.remove("hidden"),e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">GPS Berhasil! Tap untuk Update</span>'),typeof window.showToast=="function"&&window.showToast("GPS Lokasi Tujuan Berhasil!")},()=>{e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>'),typeof window.showToast=="function"&&window.showToast("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})},Ft=e=>{if(!e||e.trim().length<5)return;const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){c.dropPoint||(c.dropPoint={}),c.dropPoint.lat=parseFloat(a.lat),c.dropPoint.lng=parseFloat(a.lng);const s=l("dp-location-status");s&&s.classList.remove("hidden"),typeof window.showToast=="function"&&window.showToast("Koordinat Lokasi Tujuan berhasil!")}},Os=async()=>{try{const e=await navigator.clipboard.readText(),t=l("dp-maps-input");t&&(t.value=e,Ft(e))}catch{typeof window.showToast=="function"&&window.showToast("Gagal membaca clipboard")}},Es=()=>{if(f.store.isDeliveryEnabled===!1&&f.store.isPickupEnabled===!1){typeof window.showToast=="function"&&window.showToast("Toko tutup!");return}if(!O||O.length===0){typeof window.showToast=="function"&&window.showToast("Keranjang belanja masih kosong!");return}f.store.useStock===!0||f.store.useStock;for(const s of O){const r=f.products.find(p=>String(p.id)===String(s.id));if(!r||r.isActive===!1||r.isActive==="false"){typeof window.showToast=="function"&&window.showToast(`Produk "${s.name}" sedang tidak tersedia atau dinonaktifkan.`);return}if(!!(r.poTime&&String(r.poTime).trim()))continue;const o=parseFloat(s.qty)||0,d=parseFloat(s.unitMultiplier)||1,n=o*d;if(s.variantName){const p=(r.variants||[]).find(T=>T.name===s.variantName);if(!p||p.isActive===!1||p.isActive==="false"){typeof window.showToast=="function"&&window.showToast(`Varian "${s.variantName}" untuk produk "${s.name}" sedang tidak tersedia.`);return}const h=p.stock!=null&&p.stock!==""?p.stock:p.stok!=null&&p.stok!==""?p.stok:null,S=h!=null&&!isNaN(parseFloat(h)),g=S?parseFloat(h):0;if(S&&g<=0){typeof window.showToast=="function"&&window.showToast(`Produk "${s.name} (${s.variantName})" stok habis, tidak dapat membuat transaksi.`);return}if(S&&g<n){typeof window.showToast=="function"&&window.showToast(`Persediaan "${s.name} (${s.variantName})" tidak mencukupi (tersisa ${g} unit).`);return}}else{const p=r.stock!=null&&r.stock!==""?r.stock:r.stok!=null&&r.stok!==""?r.stok:null,h=p!=null&&!isNaN(parseFloat(p)),S=h?parseFloat(p):0;if(h&&S<=0){typeof window.showToast=="function"&&window.showToast(`Produk "${s.name}" stok habis, tidak dapat membuat transaksi.`);return}if(h&&S<n){const g=d>1?Math.floor(S/d):S;typeof window.showToast=="function"&&window.showToast(`Persediaan "${s.name}" tidak mencukupi (tersisa ${g} ${s.unit||"unit"}).`);return}}}const e=xe("cust-name"),t=(document.querySelector('input[name="delivery-method"]:checked')||{}).value;if(!e||!t){typeof window.showToast=="function"&&window.showToast("Lengkapi form nama!");return}let a=xe("cust-wa").replace(/\D/g,"");if(!a||a.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp wajib diisi! (min. 9 digit)");return}if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),c.name=e,c.deliveryMethod=t,c.note=xe("cust-note"),c.wa=a,t==="delivery"){if(c.address=xe("cust-address"),!c.lat||!c.lng){const o=l("cust-maps-input")?.value;o&&typeof window.handleCustomerMapsInput=="function"&&window.handleCustomerMapsInput(o)}if(!c.address||!c.lat||!c.lng){typeof window.showToast=="function"&&window.showToast("Alamat & GPS wajib!");return}const s=typeof window.getDist=="function"?window.getDist:()=>0;c.distance=s(parseFloat(f.store.lat||0),parseFloat(f.store.lng||0),c.lat,c.lng)||0;const r=l("toggle-droppoint");if(r&&r.checked){let o=xe("dp-receiver-name").trim(),d=xe("dp-receiver-wa").replace(/\D/g,""),n=xe("dp-address").trim();if(!o){typeof window.showToast=="function"&&window.showToast("Nama penerima di lokasi tujuan wajib diisi!");return}if(!d||d.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WA penerima di lokasi tujuan wajib diisi (min. 9 digit)!");return}if(!n){typeof window.showToast=="function"&&window.showToast("Alamat lokasi tujuan wajib diisi!");return}if(!c.dropPoint||!c.dropPoint.lat||!c.dropPoint.lng){typeof window.showToast=="function"&&window.showToast("GPS / Koordinat lokasi tujuan wajib diisi untuk kalkulasi ongkir!");return}d.startsWith("0")?d="62"+d.substring(1):d.startsWith("62")||(d="62"+d),c.dropPoint.name=o,c.dropPoint.wa=d,c.dropPoint.address=n,c.distance=s(parseFloat(f.store.lat||0),parseFloat(f.store.lng||0),c.dropPoint.lat,c.dropPoint.lng)||0}else c.dropPoint=null}else c.address="Ambil di Toko",c.distance=0,c.dropPoint=null;u&&u.type&&u.type.includes("shipping")&&t!=="delivery"&&ye(null),l("voucher-input")&&!u&&(l("voucher-input").value="",C("voucher-msg-container")),typeof window.changeView=="function"&&window.changeView("view-payment")},dt=()=>{ie("address-container","hidden",(document.querySelector('input[name="delivery-method"]:checked')||{}).value==="pickup")},Ct=()=>{const e=l("tnc-checkbox"),t=l("btn-process-order");!e||!t||(e.checked?t.classList.remove("btn-disabled"):t.classList.add("btn-disabled"))},Rt=()=>{if(!O.length){typeof window.showToast=="function"&&window.showToast("Keranjang belanja kosong!"),typeof window.changeView=="function"&&window.changeView("view-catalog",!0);return}if(!c.name){typeof window.showToast=="function"&&window.showToast("Lengkapi data pengiriman terlebih dahulu!"),typeof window.changeView=="function"&&window.changeView("view-checkout",!0);return}const e=typeof window.getEffP=="function"?window.getEffP:m=>m.price||0,t=O.reduce((m,F)=>m+(parseFloat(e(F))||0)*(parseFloat(F.qty)||0),0);let a=0,s=0,r=0;if(c.deliveryMethod==="delivery"&&(a=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(f.store.costPerKm)||0)/500)*500),u&&(u.minPurchase&&parseFloat(u.minPurchase)>0&&t<parseFloat(u.minPurchase)?(ye(null),C("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast(`Voucher dibatalkan (min. belanja ${k(u.minPurchase)})`)):u.targetProduct&&!O.some(m=>m.id===parseInt(u.targetProduct))&&(ye(null),C("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast("Voucher dibatalkan (produk khusus dihapus)"))),u){let m=t;if(u.targetProduct&&u.targetProduct!==""){const F=parseInt(u.targetProduct);m=O.filter(H=>H.id===F).reduce((H,E)=>H+(parseFloat(e(E))||0)*(parseFloat(E.qty)||0),0)}if(u.type==="shipping_free")s=a;else if(u.type==="shipping_flat")s=parseFloat(u.value)||0;else if(u.type==="percent"){let F=m*((parseFloat(u.value)||0)/100);u.maxDiscount&&parseFloat(u.maxDiscount)>0&&(F=Math.min(F,parseFloat(u.maxDiscount))),r=F}else r=parseFloat(u.value)||0,r=Math.min(r,m)}const i=(f.store.freeShippingMinSpendEnabled===!0||f.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(f.store.freeShippingMinSpendAmount)||0)>0&&t>=(parseFloat(f.store.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery";i&&(s=a),s=Math.min(s,a),r=Math.min(r,t);const o=Math.max(0,t-r+(a-s)),n=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(o),p=n.ppnAmount,h=o+n.grandTotalAdd;ae("summary-subtotal",k(t)),ie("summary-shipping-row","hidden",c.deliveryMethod!=="delivery");const S=l("summary-discount-row");if(S)if(r>0||s>0){S.classList.remove("hidden");let m="";r>0&&(m+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Promo</p><p class="text-[13px] font-bold text-rose-500">-${k(r)}</p></div>`),s>0&&(m+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">${i?"Gratis Ongkir (Promo Belanja)":"Diskon Ongkir"}</p><p class="text-[13px] font-bold text-rose-500">-${k(s)}</p></div>`),S.innerHTML=m}else S.classList.add("hidden");c.deliveryMethod==="delivery"&&(ae("summary-shipping",k(a)),ae("summary-distance",`(${c.distance.toFixed(1)}km)`)),ae("summary-total",k(h)),l("btn-total-preview")&&ae("btn-total-preview",k(h));const g=l("summary-ppn-row");if(g)if(n.ppnEnabled&&(p>0||n.ppnShowZero||n.ppnRate===0)){g.classList.remove("hidden");const F=n.ppnRate!==void 0?`${n.ppnRate}%`:"11%",z=n.ppnLabel||(n.ppnType==="inclusive"?`Termasuk PPN (${F})`:`PPN (${F})`);ae("summary-ppn-label",z),n.ppnType==="inclusive"?ae("summary-ppn",k(p)):ae("summary-ppn",p>0?`+${k(p)}`:k(0))}else g.classList.add("hidden");ae("payment-cust-name",c.name||"-"),l("payment-cust-wa")&&(l("payment-cust-wa").textContent=c.wa?"+"+c.wa:"-"),c.dropPoint&&c.dropPoint.lat?ae("payment-cust-method",`Kirim ke Lokasi Berbeda (${c.distance.toFixed(1)}km dari Toko)`):ae("payment-cust-method",c.deliveryMethod==="delivery"?`Dikirim (${c.distance.toFixed(1)}km)`:"Ambil di Toko"),ae("payment-cust-address",c.address||"-");const T=l("payment-droppoint-info");if(T)if(c.dropPoint&&c.dropPoint.lat&&c.dropPoint.name){T.classList.remove("hidden"),ae("payment-dp-name",c.dropPoint.name||"-");const m=l("payment-dp-wa");m&&(m.textContent=c.dropPoint.wa?"+"+c.dropPoint.wa:"-"),ae("payment-dp-address",c.dropPoint.address||"-")}else T.classList.add("hidden");ue("payment-items-preview",O.map(m=>{const F=m.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${w(m.variantName)}</span>`:"",z=m.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${w(m.poTime)}</span>`:"",H=!!(m.img&&typeof m.img=="string"&&m.img.trim()&&!Ut(m.img)),E=Nt(m,{size:"thumb"});return`
        <div class="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
            <div class="flex items-center gap-3.5 min-w-0">
                <div class="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0 overflow-hidden flex items-center justify-center">
                    ${H?`<img loading="lazy" src="${w(m.img)}" alt="${w(m.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${E}</div>`:E}
                </div>
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate mb-1" title="${w(m.name)}">${w(m.name)}</p>
                    ${m.variantName||m.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${F}
                        ${z}
                    </div>`:""}
                    <p class="text-[11px] text-[var(--color-primary)] font-bold">${parseFloat(m.qty)} ${w(m.unit||"pcs")} x ${k(e(m))}</p>
                </div>
            </div>
            <div class="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap ml-3 shrink-0">${k(e(m)*parseFloat(m.qty))}</div>
        </div>`}).join("")+(Ce?`<div class="flex justify-between items-center bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] p-4 rounded-2xl border border-[var(--color-primary)]/30 shadow-sm min-w-0"><div class="flex items-center gap-3.5 min-w-0"><div class="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div><div class="min-w-0"><p class="text-sm font-bold text-[var(--color-primary)] truncate">${w(Ce.name)}</p><p class="text-[11px] text-[var(--color-primary)] font-bold mt-1"><i class="fa-solid fa-star mr-1"></i>Tukar ${Ce.pointsCost} Poin (Gratis)</p></div></div><button type="button" onclick="if(typeof deselectReward==='function') deselectReward(); rPay();" class="text-[10px] font-bold text-rose-500 uppercase shrink-0 ml-3">Batal</button></div>`:"")),c.note?(ae("payment-note-text",`"${w(c.note)}"`),pe("payment-note-preview")):C("payment-note-preview"),ue("dynamic-banks-container",f.banks?.length?f.banks.map(m=>`<div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Bank ${w(m.bankName)}</p><p class="text-lg font-bold text-[var(--color-primary)] tracking-wide">${w(m.bankAccount)}</p><p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1.5">a.n <span class="font-bold text-slate-700 dark:text-white">${w(m.bankOwner)}</span></p></div>`).join(""):'<div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 p-4 rounded-2xl text-center"><p class="text-sm text-rose-500 dark:text-rose-400 font-bold">Rekening belum diatur.</p></div>');const N=l("payment-option-cashier"),le=l("payment-option-cod");if(N&&le){if(c.deliveryMethod==="pickup"){if(pe("payment-option-cashier"),C("payment-option-cod"),(document.querySelector('input[name="payment"]:checked')||{}).value==="cod"){const m=document.querySelector('input[value="cashier"]');m&&(m.checked=!0)}}else{C("payment-option-cashier"),pe("payment-option-cod");const m=(document.querySelector('input[name="payment"]:checked')||{}).value;if(m==="cashier"||!m){const F=document.querySelector('input[value="cod"]');F&&(F.checked=!0)}}typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()}const L=l("tnc-checkbox");L&&(L.checked=!1,Ct())},_s=async()=>{if(!l("tnc-checkbox").checked||rt)return;if(window.isAdm){typeof window.showToast=="function"&&window.showToast("Sesi Pengelola Aktif. Silakan keluar akun untuk membuat pesanan online.");return}const e=Je("freshmart_last_order");if(e&&Date.now()-parseInt(e)<6e4){typeof window.showToast=="function"&&window.showToast("Pesanan sebelumnya sedang kami proses. Mohon beri jeda 1 menit sebelum memesan kembali.");return}const t=typeof window.getEffP=="function"?window.getEffP:i=>i.price||0,a=typeof window.getEffHpp=="function"?window.getEffHpp:()=>0,s=typeof window.getEffPoin=="function"?window.getEffPoin:()=>0;let r=!1;if(O.forEach(i=>{const o=f.products.find(n=>n.id===i.id);if(!o)return;const d=i.variantName?((o.variants||[]).find(n=>n.name===i.variantName)||{}).price??o.price:o.price;d!==void 0&&Math.abs(i.price-d)>1&&(i.price=d,r=!0),i.poin=s(i)}),r){Ue("freshmart_cart",JSON.stringify(O)),typeof window.renderCart=="function"&&window.renderCart(),Rt(),typeof window.showToast=="function"&&window.showToast("Katalog harga telah diperbarui. Mohon periksa kembali rincian belanja Anda.");return}Y(!0),he("Memproses Pesanan Anda...");try{const i=O.reduce((b,y)=>b+(parseFloat(t(y))||0)*(parseFloat(y.qty)||0),0);let o=0,d=0,n=0;c.deliveryMethod==="delivery"&&(o=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(f.store.costPerKm)||0)/500)*500);const p=f.store.useStock===!0||f.store.useStock==="true";for(const b of O){const y=f.products.find(R=>String(R.id)===String(b.id));if(!y||y.isActive===!1||y.isActive==="false"){Y(!1),V(),typeof window.showToast=="function"&&window.showToast(`Produk "${b.name}" sedang tidak tersedia atau dinonaktifkan.`);return}if(!!(y.poTime&&String(y.poTime).trim()))continue;const I=parseFloat(b.qty)||0,j=parseFloat(b.unitMultiplier)||1,J=I*j;if(b.variantName){const R=(y.variants||[]).find(me=>me.name===b.variantName);if(!R||R.isActive===!1||R.isActive==="false"){Y(!1),V(),typeof window.showToast=="function"&&window.showToast(`Varian "${b.variantName}" untuk produk "${b.name}" sedang tidak tersedia.`);return}const Z=R.stock!=null&&R.stock!==""?R.stock:R.stok!=null&&R.stok!==""?R.stok:null,X=Z!=null&&!isNaN(parseFloat(Z)),q=X?parseFloat(Z):0;if(X&&q<=0){Y(!1),V(),typeof window.showToast=="function"&&window.showToast(`Pesanan ditolak! Persediaan "${b.name} (${b.variantName})" sedang habis.`);return}if(X&&q<J){Y(!1),V(),typeof window.showToast=="function"&&window.showToast(`Pesanan ditolak! Persediaan "${b.name} (${b.variantName})" tidak mencukupi (tersisa ${q} unit).`);return}}else{const R=y.stock!=null&&y.stock!==""?y.stock:y.stok!=null&&y.stok!==""?y.stok:null,Z=R!=null&&!isNaN(parseFloat(R)),X=Z?parseFloat(R):0;if(Z&&X<=0){Y(!1),V(),typeof window.showToast=="function"&&window.showToast(`Pesanan ditolak! Persediaan "${b.name}" sedang habis.`);return}if(Z&&X<J){Y(!1),V();const q=j>1?Math.floor(X/j):X;typeof window.showToast=="function"&&window.showToast(`Pesanan ditolak! Persediaan "${b.name}" tidak mencukupi (tersisa ${q} ${b.unit||"unit"}).`);return}}}if(u){let b=i;if(u.targetProduct&&u.targetProduct!==""){const y=parseInt(u.targetProduct);b=O.filter(I=>I.id===y).reduce((I,j)=>I+(parseFloat(t(j))||0)*(parseFloat(j.qty)||0),0)}if(u.minPurchase&&parseFloat(u.minPurchase)>0&&i<parseFloat(u.minPurchase))ye(null);else if(u.targetProduct&&u.targetProduct!==""&&b===0)ye(null);else if(u.type&&u.type.includes("shipping")&&c.deliveryMethod!=="delivery")ye(null);else if(u.type==="shipping_free")d=o;else if(u.type==="shipping_flat")d=parseFloat(u.value)||0;else if(u.type==="percent"){let y=b*((parseFloat(u.value)||0)/100);u.maxDiscount&&parseFloat(u.maxDiscount)>0&&(y=Math.min(y,parseFloat(u.maxDiscount))),n=y}else n=parseFloat(u.value)||0,n=Math.min(n,b)}const h=(f.store.freeShippingMinSpendEnabled===!0||f.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(f.store.freeShippingMinSpendAmount)||0)>0&&i>=(parseFloat(f.store.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery";h&&(d=o),d=Math.min(d,o),n=Math.min(n,i);const S=Math.max(0,i-n+(o-d)),T=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(S),N=T.ppnAmount,le=T.dppAmount,L=S+T.grandTotalAdd,m=(document.querySelector('input[name="payment"]:checked')||{}).value,F=parseFloat(document.getElementById("paylater-dp-input")?.value)||0,z=m==="transfer"||m==="qris"||m==="tempo"||m==="paylater"&&F>0,H=window.buktiGDriveUploaded&&window.buktiPaymentUrl&&!window.buktiPaymentUrl.startsWith("data:");if(z&&!H){if(Y(!1),V(),!window.buktiPaymentFile){typeof window.showToast=="function"&&window.showToast("Mohon lampirkan foto struk / bukti pembayaran terlebih dahulu.");return}typeof window.showToast=="function"&&window.showToast("Sedang menyelesaikan unggahan bukti transaksi. Mohon tunggu...");return}const E="ORD-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase();if(window.buktiPaymentFile&&!window.buktiGDriveUploaded)try{he("Mengunggah Bukti Pembayaran...");const b=await window.uploadBuktiToFirebase(window.buktiPaymentFile,E);if(b&&!b.startsWith("data:"))window.buktiPaymentUrl=b,window.buktiGDriveUploaded=!0;else{Y(!1),V(),typeof window.showToast=="function"&&window.showToast("Gagal mengunggah berkas bukti. Silakan pilih kembali foto bukti transfer Anda.");return}he("Memproses Pesanan Anda...")}catch{Y(!1),V(),typeof window.showToast=="function"&&window.showToast("Koneksi unggah terganggu. Silakan periksa jaringan internet dan coba kembali.");return}const x={orderId:E,timestamp:Fe.firestore.FieldValue.serverTimestamp(),dateString:new Date().toISOString(),customer:c,isDropPoint:!!(c.dropPoint&&c.dropPoint.lat&&c.dropPoint.name),dropPoint:c.dropPoint&&c.dropPoint.lat&&c.dropPoint.name?{...c.dropPoint}:null,items:O.map(b=>({...b,qty:parseFloat(b.qty),effectivePrice:t(b),poTime:b.poTime||"",hpp:a(b),poin:s(b)})),payment:{method:m,subtotal:i,shippingCost:o,shippingDiscount:d,productDiscount:n,ppnAmount:N,dppAmount:le,ppnRate:T.ppnEnabled?T.ppnRate:0,ppnType:T.ppnEnabled?T.ppnType:"exclusive",ppnEnabled:!!T.ppnEnabled,ppnShowZero:!!T.ppnShowZero,ppnLabel:T.ppnLabel||"",taxNpwp:f.store?.taxNpwp||f.taxSettings?.npwp||"",grandTotal:L,isFreeShippingPromo:h||!1},status:"Baru",buktiPayment:window.buktiPaymentUrl||null};if(m==="tempo"){if(!c.wa){Y(!1),V(),typeof window.showToast=="function"&&window.showToast("Pembayaran Cash Tempo hanya untuk Member Resmi terdaftar!");return}const b=document.getElementById("tempo-dp-input");let y=b&&parseFloat(b.value)||0;y>L&&(y=L),x.payment.dp=y,x.payment.tempoDp=y,x.payment.tempoBalance=Math.max(0,L-y),x.payment.tempoDueDate=Date.now()+30*24*60*60*1e3,x.payment.paymentStatus=L-y<=0?"lunas":"hutang"}if(m==="paylater"){if(!c.wa||!D||!(D.paylaterActive===!0||D.paylaterActive==="true")){Y(!1),V(),typeof window.showToast=="function"&&window.showToast("Fitur Putri PayLater belum aktif untuk nomor Anda!");return}const b=parseFloat(D.paylaterLimit)||0,y=Math.max(0,parseFloat(D.paylaterUsed)||0),ce=Math.max(0,b-y),I=document.getElementById("paylater-dp-input");let j=I&&parseFloat(I.value)||0;if(L>ce&&j<L-ce){Y(!1),V(),typeof window.showToast=="function"&&window.showToast("Limit PayLater tidak cukup! Wajib bayar DP minimal "+k(L-ce));return}const J=Math.min(ce,Math.max(0,L-j));x.payment.method="tempo",x.payment.subMethod="paylater",x.payment.isPaylater=!0,x.payment.paylaterUsed=J,x.payment.dp=j,x.payment.tempoDp=j;const R=D?.paylaterDueDay||5,Z=window.selectedCheckoutPaylaterTenor||window.currentPaylaterBreakdown?.tenorKey||"30d",X=Dt(),q=rs(J,Z,{...X,dueDay:R}),me=q.months,be=q.totalAdminFee,Q=q.totalServiceFee,se=q.totalPerMonth,B=q.schedule;x.payment.paylaterTenor=Z,x.payment.paylaterMonths=me,x.payment.paylaterAdminFee=be,x.payment.paylaterServiceFee=Q,x.payment.paylaterMonthlyInstallment=se,x.payment.paylaterSchedule=B;const re=q.grandTotal;x.payment.tempoBalance=re;const v=B.length>0?B[B.length-1].dueDate:Date.now()+me*30*24*60*60*1e3;if(x.payment.tempoDueDate=v,x.payment.paymentStatus=re<=0?"lunas":"hutang",x.isTempo=!0,x.paylaterLimitTracked=!1,J>0){if(D){D.paylaterUsed=Math.max(0,parseFloat(D.paylaterUsed)||0)+J;try{localStorage.setItem("freshmart_current_member",JSON.stringify(D))}catch{}}const G=(D?.phone||c.wa||"").replace(/\D/g,""),ve=G.startsWith("0")?"62"+G.slice(1):G;try{await W.collection("freshmart").doc("cms_data").collection("customers").doc(ve).update({paylaterUsed:Fe.firestore.FieldValue.increment(J)}),x.paylaterLimitTracked=!0}catch(ne){console.warn("[PayLater] Gagal update pemakaian limit di Firestore:",ne.code||ne.message||ne)}}}const de=W.collection("freshmart_orders").doc(E),A=typeof window.calculateCartPoints=="function"?window.calculateCartPoints(O,f.store):{totalPoints:0,directPoints:0,spendPoints:0},oe=A.totalPoints;x.pointsEarned=oe,x.pointsBreakdown={direct:A.directPoints,spend:A.spendPoints};const ee=W.collection("freshmart").doc("cms_data"),te=(D?.phone||c.wa||"").replace(/\D/g,""),P=te?te.startsWith("0")?"62"+te.slice(1):te:null,fe=P?ee.collection("customers").doc(P):null,K=!!Ce;let _=null;if(!0){const b={};O.forEach(I=>{const j=I.id!=null?I.id.toString():null;if(!j)return;b[j]||(b[j]={main:0,variants:{}});const J=parseFloat(I.unitMultiplier)||1,R=(parseFloat(I.qty)||0)*J;I.variantName?b[j].variants[I.variantName]=(b[j].variants[I.variantName]||0)+R:b[j].main+=R});const y=Object.keys(b),ce=y.map(I=>W.collection("freshmart").doc("cms_data").collection("products").doc(I));await W.runTransaction(async I=>{const j=await Promise.all(ce.map(Q=>I.get(Q))),J=fe?await I.get(fe):null,R=!!(J&&J.exists),Z=R&&K?W.collection("freshmart").doc("cms_data").collection("rewards").doc(Ce.id.toString()):null,X=Z?await I.get(Z):null,q=[];if(j.forEach((Q,se)=>{if(!Q.exists)return;const B=Q.data(),re=b[y[se]];if(re.main>0){const v=parseFloat(B.stock!==void 0?B.stock:0);v<re.main&&q.push(`${B.name} (sisa ${v})`)}Object.keys(re.variants).forEach(v=>{const G=(B.variants||[]).find(ne=>ne.name===v),ve=parseFloat(G&&G.stock!==void 0?G.stock:0);ve<re.variants[v]&&q.push(`${B.name} (${v}, sisa ${ve})`)})}),q.length)throw new Error("STOK_TIDAK_CUKUP: "+q.join(", "));let me=null,be=null;if(R){const Q=parseFloat(J.data().points)||0;let se=Q;if(K){if(!X||!X.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const B=X.data();if(Q<(parseFloat(B.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(B.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");me=(parseFloat(B.stock)||0)-1,se-=parseFloat(B.pointsCost)||0,x.claimedReward={id:B.id,name:B.name,pointsCost:parseFloat(B.pointsCost)||0,status:"pending",note:""}}se+=oe,be=se,x.pointsEarned=oe,x.customerPhone=c.wa,x.finalMemberPoints=be,x.customerType="Member"}else{if(m==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(K)throw new Error("MEMBER_TIDAK_DITEMUKAN");x.pointsEarned=0,x.pointsBreakdown={direct:0,spend:0},x.finalMemberPoints=null,x.customerType="Pelanggan Umum"}if(j.forEach((Q,se)=>{if(!Q.exists)return;const B=y[se],re=b[B],v=JSON.parse(JSON.stringify(Q.data())),G={};re.main>0&&(wt(v,re.main),G.stock=v.stock,v.storeStock!==void 0&&(G.storeStock=v.storeStock),v.warehouseStock!==void 0&&(G.warehouseStock=v.warehouseStock),Array.isArray(v.stockBatches)&&(G.stockBatches=v.stockBatches),v.hpp&&(G.hpp=v.hpp),v.stock<=1e-4&&(v.stock=0,G.stock=0,v.isActive="false",G.isActive="false"),v.totalSold=(parseFloat(v.totalSold)||0)+re.main,G.totalSold=v.totalSold),Object.keys(re.variants).length>0&&v.variants&&(Object.keys(re.variants).forEach(ne=>{const mt=re.variants[ne];wt(v,mt,ne);const De=(v.variants||[]).findIndex(Bt=>Bt.name===ne);De>-1&&(v.variants[De].stock<=1e-4&&(v.variants[De].stock=0,v.variants[De].isActive=!1),v.variants[De].totalSold=(parseFloat(v.variants[De].totalSold)||0)+mt)}),G.variants=v.variants,G.stock=v.stock,v.storeStock!==void 0&&(G.storeStock=v.storeStock),v.warehouseStock!==void 0&&(G.warehouseStock=v.warehouseStock),Array.isArray(v.stockBatches)&&(G.stockBatches=v.stockBatches));const ve=f.products.findIndex(ne=>ne.id.toString()===B);ve>-1&&(f.products[ve]=v),I.update(ce[se],G)}),I.set(de,x),R&&fe&&be!==null){const Q=J.data().name||c.name||"Pelanggan Setia";x.customer&&(x.customer.name=Q);const se={points:be,name:Q,lastOrderAt:Date.now()};I.set(fe,se,{merge:!0}),_=be}me!==null&&I.set(Z,{stock:me},{merge:!0}),I.update(ee,{lastUpdate:Fe.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:y})}),f.lastUpdate=(parseInt(Je("freshmart_last_update"))||f.lastUpdate||0)+1,Ue("freshmart_last_update",f.lastUpdate.toString()),Ue("freshmart_products",JSON.stringify(f.products)),typeof window.rCat=="function"&&window.rCat(),typeof window.refreshProdUI=="function"&&window.refreshProdUI()}let we=!1;if((x.items||[]).forEach(b=>{typeof window.recordFlashSaleSale=="function"&&window.recordFlashSaleSale(b.id,b.variantName,b.qty)&&(we=!0)}),we&&Array.isArray(f.flashSales))try{await W.collection("freshmart").doc("cms_data").update({flashSales:f.flashSales,lastUpdate:Fe.firestore.FieldValue.increment(1)})}catch(b){console.warn("[Checkout] Gagal update kuota Flash Sale:",b)}const Oe={orderId:E,date:x.dateString||new Date().toISOString(),dateString:x.dateString||new Date().toISOString(),total:L,itemCount:O.reduce((b,y)=>b+parseFloat(y.qty),0),status:"Baru",pointsEarned:x.pointsEarned||0,claimedReward:x.claimedReward||null,finalMemberPoints:_,customerType:x.customerType||"Pelanggan Umum",customer:x.customer||c,items:x.items||[],payment:x.payment||{},isTempo:!!x.isTempo};U.unshift(Oe),qe(U),window.currentCustomerOrder=x,window.lastPrintedOrder=x;try{localStorage.setItem("freshmart_my_orders",JSON.stringify(U)),localStorage.setItem("freshmart_last_order",Date.now().toString())}catch{}if(typeof analytics<"u"&&analytics.logEvent("purchase",{transaction_id:E,value:L,currency:"IDR"}),c.wa&&_!==null){const b={id:c.wa,phone:c.wa,name:c.name||"Pelanggan Setia",points:_,paylaterActive:D?D.paylaterActive===!0||D.paylaterActive==="true":!1,paylaterLimit:D&&parseFloat(D.paylaterLimit)||0,paylaterUsed:D?Math.max(0,parseFloat(D.paylaterUsed)||0):0,paylaterDueDay:D&&D.paylaterDueDay||5};Qe(b);try{localStorage.setItem("freshmart_current_member",JSON.stringify(b)),localStorage.setItem("freshmart_member_wa",c.wa)}catch{}typeof window.invalidateMemberCache=="function"&&window.invalidateMemberCache(c.wa)}else{Qe(null);try{localStorage.removeItem("freshmart_current_member")}catch{}}x.claimedReward&&_!==null?typeof window.showToast=="function"&&window.showToast(`Hadiah eksklusif "${x.claimedReward.name}" berhasil ditukarkan! Sisa poin reward Anda: ${_}`):_!==null&&oe>0?typeof window.showToast=="function"&&window.showToast(`Pesanan Anda berhasil dikonfirmasi! (+${oe} Poin Member terkumpul)`):typeof window.showToast=="function"&&window.showToast("Pesanan Anda berhasil dikonfirmasi dan siap diproses!"),setTimeout(()=>{vt([]),Ie("cust-name",""),Ie("cust-address",""),Ie("cust-maps-input",""),Ie("cust-note",""),Ie("cust-wa",""),window.buktiPaymentUrl=null,window.buktiPaymentFile=null,window.buktiGDriveUploaded=!1;const b=l("bukti-preview-wrap"),y=l("bukti-placeholder");b&&b.classList.add("hidden"),y&&y.classList.remove("hidden"),C("bukti-uploading"),C("bukti-success"),C("bukti-gdrive-error");const ce=l("bukti-file-input");ce&&(ce.value=""),Pt({name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:"",dropPoint:null}),ye(null),Le(null);const I=l("toggle-droppoint"),j=l("droppoint-form");I&&(I.checked=!1),j&&j.classList.add("hidden");const J=l("dp-location-status");J&&J.classList.add("hidden");const R=l("payment-droppoint-info");R&&R.classList.add("hidden");const Z=l("dp-receiver-name");Z&&(Z.value="");const X=l("dp-receiver-wa");X&&(X.value="");const q=l("dp-address");q&&(q.value="");const me=l("dp-maps-input");me&&(me.value="");const be=l("btn-dp-location");be&&(be.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan Titik GPS Lokasi Proyek</span>');const Q=l("member-status-banner");Q&&C(Q),C("payment-option-tempo"),l("voucher-input")&&(l("voucher-input").value=""),C("voucher-msg-container"),C("location-status"),l("btn-location")&&pe("btn-location");const se=document.querySelector('input[name="delivery-method"][value="delivery"]');se&&(se.checked=!0,dt());const B=document.querySelector('input[name="payment"][value="transfer"]');B&&(B.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()),typeof window.updCart=="function"&&window.updCart(),typeof window.renderCart=="function"&&window.renderCart(),typeof window.rCat=="function"&&window.rCat(),typeof window.refreshProdUI=="function"&&window.refreshProdUI();try{window.history.replaceState({view:"view-catalog"},"",window.location.pathname)}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog",!0),typeof window.showToast=="function"&&window.showToast("Pesanan Anda Berhasil Dibuat!")},2e3)}catch(i){const o=i.message||"Error";o.startsWith("STOK_TIDAK_CUKUP:")?typeof window.showToast=="function"&&window.showToast("Ketersediaan stok baru saja diperbarui: "+o.replace("STOK_TIDAK_CUKUP: ","")):o==="TEMPO_KHUSUS_MEMBER"?typeof window.showToast=="function"&&window.showToast("Fasilitas Cash Tempo khusus untuk Rekanan & Member VIP resmi terdaftar."):o==="POIN_TIDAK_CUKUP"?(typeof window.showToast=="function"&&window.showToast("Poin reward Anda belum mencukupi untuk penukaran hadiah ini."),Le(null)):o==="STOK_HADIAH_HABIS"?(typeof window.showToast=="function"&&window.showToast("Persediaan hadiah yang dipilih baru saja habis. Silakan pilih hadiah lainnya."),Le(null)):o==="HADIAH_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Hadiah yang dipilih sudah tidak aktif. Silakan pilih hadiah pengganti."),Le(null)):o==="MEMBER_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Data member tidak terverifikasi. Penukaran hadiah dibatalkan."),Le(null)):typeof window.showToast=="function"&&window.showToast(i.code==="resource-exhausted"?"Layanan server sedang padat. Mohon coba sesaat lagi.":"Gagal memproses pesanan: "+o)}finally{Y(!1),V()}};window.validateAndGoToPayment=Es;window.toggleDeliveryMethod=dt;window.toggleDropPoint=Cs;window.getDPLocation=Rs;window.handleDPMapsInput=Ft;window.pasteDPMapsInput=Os;window.toggleOrderButton=Ct;window.rPay=Rt;window.processOrder=_s;const Ge=e=>typeof window<"u"&&typeof window.getEffP=="function"?window.getEffP(e,"web"):e?.effectivePrice??e?.price??0;window.getLocation=()=>{if(!navigator.geolocation)return $("GPS tidak didukung");l("btn-location").innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i>',navigator.geolocation.getCurrentPosition(e=>{c.lat=e.coords.latitude,c.lng=e.coords.longitude,C("btn-location"),pe("location-status"),l("location-status").classList.add("flex"),$("GPS Didapatkan")},e=>{l("btn-location").innerHTML='<i class="fa-solid fa-location-crosshairs text-[var(--color-primary)]"></i> Set GPS Maps',$("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})};window.handleCustomerMapsInput=e=>{const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){c.lat=parseFloat(a.lat),c.lng=parseFloat(a.lng),C("btn-location"),pe("location-status");const s=l("location-status");return s&&(s.classList.add("flex"),s.innerHTML=`
                <i class="fa-solid fa-circle-check shrink-0 text-lg primary-text"></i>
                <div class="min-w-0">
                    <span class="text-[10px] font-bold uppercase leading-tight tracking-wide primary-text block">Koordinat Berhasil Disematkan!</span>
                    <span class="text-[9px] text-slate-500 dark:text-slate-400 font-mono">${a.lat}, ${a.lng}</span>
                </div>
            `),$("Titik lokasi Maps pembeli berhasil disematkan!"),typeof window.rPay=="function"&&window.rPay(),!0}return!1};window.pasteCustomerMapsInput=async()=>{const e=l("cust-maps-input");if(e){try{if(navigator.clipboard&&navigator.clipboard.readText){const t=await navigator.clipboard.readText();if(t){e.value=t,window.handleCustomerMapsInput(t)||$("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Maps");return}}}catch{}e.focus(),$("Silakan tekan Ctrl+V atau tahan untuk menempel")}};const js=()=>{const e=f.store.isDeliveryEnabled!==!1,t=f.store.isPickupEnabled!==!1;ie("delivery-option-container","hidden",!e),ie("pickup-option-container","hidden",!t),ie("no-delivery-warning","hidden",e||t),ie("delivery-methods-grid","hidden",!(e||t));const a=l("btn-checkout-next");if(a)if(e||t){a.removeAttribute("disabled"),a.classList.remove("opacity-50");const r=(c.deliveryMethod||"delivery")==="pickup"&&t?"pickup":e?"delivery":"pickup",i=document.querySelector(`input[value="${r}"]`);i&&(i.checked=!0)}else a.setAttribute("disabled","true"),a.classList.add("opacity-50");dt()};window.rChck=js;window.buktiPaymentUrl=null;window.buktiPaymentFile=null;window.buktiGDriveUploaded=!1;window.compressImageForUpload=(e,t=1600,a=.82)=>new Promise(s=>{const r=new FileReader;r.readAsDataURL(e),r.onload=i=>{const o=new Image;o.onload=()=>{let{width:d,height:n}=o;(d>t||n>t)&&(d>n?(n=Math.round(n*t/d),d=t):(d=Math.round(d*t/n),n=t));const p=document.createElement("canvas");p.width=d,p.height=n,p.getContext("2d").drawImage(o,0,0,d,n),p.toBlob(h=>{if(!h)return s(e);s(new File([h],e.name,{type:"image/jpeg",lastModified:Date.now()}))},"image/jpeg",a)},o.onerror=()=>s(e),o.src=i.target.result},r.onerror=()=>s(e)});window._doSingleGDriveUpload=async(e,t)=>{const a=new FileReader;return new Promise(s=>{a.readAsDataURL(e),a.onload=async()=>{try{const r=a.result.split(",")[1],i=(e.name||"bukti.jpg").replace(/[^a-zA-Z0-9.]/g,"_"),o={name:"BUKTI_"+t+"_"+Date.now()+"_"+i,mimeType:e.type||"image/jpeg",data:r,token:Ms},d=await fetch(Lt,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"});if(!d.ok)return console.warn("GDrive upload HTTP error:",d.status),s(null);const n=await d.text();let p;try{p=JSON.parse(n)}catch{return console.warn("GDrive response parse error"),s(null)}p&&p.status==="success"&&p.url?s(it(p.url)):(console.warn("GDrive upload gagal:",p&&p.message),s(null))}catch(r){console.warn("GDrive upload exception:",r),s(null)}},a.onerror=()=>s(null)})};window.uploadBuktiToGDrive=async(e,t)=>{if(!e)return null;const a=l("bukti-uploading-text");a&&(a.textContent="Mengupload bukti ke Google Drive...");try{return await As(e,"BUKTI_"+(t||Date.now()))}catch(s){return console.warn("Gagal upload bukti ke GDrive via GAS:",s),null}};window.handleBuktiUpload=async e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/"))return $("Hanya file gambar yang diizinkan!");if(t.size>5*1024*1024)return $("Ukuran gambar max 5MB!");window.buktiPaymentFile=t,window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const a=new FileReader;a.onload=o=>{const d=l("bukti-preview-img"),n=l("bukti-preview-wrap"),p=l("bukti-placeholder");d&&(d.src=o.target.result),n&&n.classList.remove("hidden"),p&&p.classList.add("hidden")},a.readAsDataURL(t),C("bukti-success"),C("bukti-gdrive-error");const s=l("bukti-uploading");s&&(s.classList.remove("hidden"),s.style.display="flex");const r="TEMP_"+Date.now().toString(36).toUpperCase(),i=await window.uploadBuktiToGDrive(t,r);if(C("bukti-uploading"),i){window.buktiPaymentUrl=i,window.buktiGDriveUploaded=!0;const o=l("bukti-success"),d=l("bukti-success-text"),n=l("bukti-storage-info");d&&(d.textContent="Bukti berhasil disimpan!"),n&&(n.textContent="(tersimpan di Google Drive)"),o&&(o.classList.remove("hidden"),o.style.display="flex"),C("bukti-gdrive-error")}else{window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const o=l("bukti-gdrive-error");o&&(o.classList.remove("hidden"),o.style.display="flex"),C("bukti-success"),$("Upload ke Google Drive gagal. Coba lagi!")}};window.retryBuktiUpload=async()=>{if(!window.buktiPaymentFile)return $("Pilih gambar terlebih dahulu!");C("bukti-gdrive-error"),C("bukti-success");const e=l("bukti-uploading");e&&(e.classList.remove("hidden"),e.style.display="flex");const t="RETRY_"+Date.now().toString(36).toUpperCase(),a=await window.uploadBuktiToGDrive(window.buktiPaymentFile,t);if(C("bukti-uploading"),a){window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0;const s=l("bukti-success"),r=l("bukti-success-text"),i=l("bukti-storage-info");r&&(r.textContent="Bukti berhasil disimpan!"),i&&(i.textContent="(tersimpan di Google Drive)"),s&&(s.classList.remove("hidden"),s.style.display="flex"),$("Upload berhasil!")}else{const s=l("bukti-gdrive-error");s&&(s.classList.remove("hidden"),s.style.display="flex"),$("Masih gagal. Periksa koneksi internet Anda.")}};window.uploadBuktiToFirebase=async(e,t)=>{if(window.buktiGDriveUploaded&&window.buktiPaymentUrl)return window.buktiPaymentUrl;if(!e)return null;const a=await window.uploadBuktiToGDrive(e,t);return a&&(window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0),a};window.togglePaymentDetails=()=>{const e=(document.querySelector('input[name="payment"]:checked')||{}).value;if(ie("detail-transfer","hidden",e!=="transfer"),ie("detail-qris","hidden",e!=="qris"),ie("detail-cashier","hidden",e!=="cashier"),ie("detail-cod","hidden",e!=="cod"),ie("detail-tempo","hidden",e!=="tempo"),ie("detail-paylater","hidden",e!=="paylater"),e==="tempo"&&window.calculateTempoBalance(),e==="paylater"&&window.calculatePaylaterBalance?.(),e==="qris"){const s=l("dyn-qris-img");if(s){const r=f.payment?.qrisUrl||f.store?.qrisUrl||f.payment?.qris||f.store?.qris||f.qrisUrl||"";r&&(s.src=it(r))}}const t=parseFloat(document.getElementById("paylater-dp-input")?.value)||0,a=e==="transfer"||e==="qris"||e==="tempo"||e==="paylater"&&t>0;ie("bukti-payment-section","hidden",!a)};window.selectedCheckoutPaylaterTenor=window.selectedCheckoutPaylaterTenor||"30d";window.selectCheckoutPaylaterTenor=e=>{window.selectedCheckoutPaylaterTenor=e,typeof window.calculatePaylaterBalance=="function"&&window.calculatePaylaterBalance()};window.calculatePaylaterBalance=()=>{const e=D?Math.max(0,parseFloat(D.paylaterLimit)||0):0,t=D?Math.max(0,parseFloat(D.paylaterUsed)||0):0,a=Math.max(0,e-t),s=D?.paylaterDueDay||5,r=document.getElementById("paylater-limit-display"),i=document.getElementById("paylater-due-display"),o=document.getElementById("paylater-status-box"),d=document.getElementById("paylater-excess-dp-container"),n=document.getElementById("paylater-dp-input"),p=document.getElementById("paylater-tenor-chips-grid"),h=document.getElementById("paylater-tenor-breakdown-box");r&&(r.textContent=k(a)),i&&(i.textContent="Tgl "+s+" Tiap Bulan");let S=O.reduce((K,_)=>K+(parseFloat(Ge(_))||0)*(parseFloat(_.qty)||0),0),g=0,T=0,N=0;if(c.deliveryMethod==="delivery"&&(g=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(f.store.costPerKm)||0)/500)*500),typeof u<"u"&&u){let K=S;if(u.targetProduct&&u.targetProduct!==""){const _=parseInt(u.targetProduct);K=O.filter(we=>we.id===_).reduce((we,Oe)=>we+(parseFloat(Ge(Oe))||0)*(parseFloat(Oe.qty)||0),0)}if(u.type==="shipping_free")N=g;else if(u.type==="shipping_flat")N=parseFloat(u.value)||0;else if(u.type==="percent"){let _=K*((parseFloat(u.value)||0)/100);u.maxDiscount&&parseFloat(u.maxDiscount)>0&&(_=Math.min(_,parseFloat(u.maxDiscount))),T=_}else T=parseFloat(u.value)||0,T=Math.min(T,K)}(f.store?.freeShippingMinSpendEnabled===!0||f.store?.freeShippingMinSpendEnabled==="true")&&(parseFloat(f.store?.freeShippingMinSpendAmount)||0)>0&&S>=(parseFloat(f.store?.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery"&&(N=g),N=Math.min(N,g),T=Math.min(T,S);let L=Math.max(0,S-T),m=Math.max(0,g-N);const F=typeof window.calcTaxDetails=="function"?window.calcTaxDetails(L+m):{grandTotalAdd:0};let z=0;window.useMemberPoints&&D&&(z=Math.min(L+m+F.grandTotalAdd,parseFloat(D.points)||0));let H=Math.max(0,L+m+(F.grandTotalAdd||0)-z),E=0;const x=H>a;if(x){const K=H-a;E=parseFloat(n?.value)||0,E<K&&(E=K,n&&(n.value=E)),d&&d.classList.remove("hidden")}else d&&d.classList.add("hidden"),n&&(n.value=0),E=0;const de=Math.min(a,Math.max(0,H-E)),A=Dt(),ee=is(de>0?de:H,{...A,dueDay:s}).results;let te=window.selectedCheckoutPaylaterTenor||"30d";(!ee[te]||!ee[te].enabled)&&(te=Object.keys(ee).find(_=>ee[_].enabled)||"30d",window.selectedCheckoutPaylaterTenor=te);const P=ee[te];if(window.currentPaylaterBreakdown=P,p){const K=["30d","2m","3m"];p.innerHTML=K.map(_=>{const ke=ee[_];if(!ke||!ke.enabled)return"";const we=_===te;return`
                <button type="button" onclick="window.selectCheckoutPaylaterTenor('${_}')" 
                        class="p-2 sm:p-2.5 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 min-h-[46px] select-none touch-manipulation active:scale-95 ${we?"border-2 text-[var(--color-primary)] shadow-sm":"border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600"}"
                        style="${we?"border-color: var(--color-primary); background: rgba(var(--color-primary-rgb), 0.1); box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.15);":""}">
                    <span class="text-[9.5px] font-black uppercase tracking-wider block">${w(ke.shortLabel)}</span>
                    <span class="text-[11px] sm:text-xs font-black block" ${we?'style="color: var(--color-primary);"':""}>${k(ke.totalPerMonth)}<span class="text-[8px] font-normal text-slate-400">/bln</span></span>
                </button>
            `}).filter(Boolean).join("")}if(h&&P&&(h.innerHTML=`
            <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 shadow-2xs space-y-1.5 text-xs" style="border-left: 3.5px solid var(--color-primary);">
                <div class="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-700">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                        <i class="fa-solid fa-receipt" style="color: var(--color-primary);"></i> Rincian Tenor ${w(P.label)}
                    </span>
                    <span class="text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                        <i class="fa-solid fa-shield-halved text-[9px] text-emerald-500"></i> Transparan
                    </span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span>Pokok Tagihan (${P.months} bulan)</span>
                    <span class="font-bold text-slate-800 dark:text-slate-200">${k(P.pokokPerMonth)} / bln</span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span class="flex items-center gap-1">Biaya Admin ${P.adminFeeType==="percent"&&P.adminFeeValue>0?`(${P.adminFeeValue}%)`:""}</span>
                    <span class="font-bold ${P.adminFeePerMonth===0?"text-emerald-600 dark:text-emerald-400":"text-slate-800 dark:text-slate-200"}">
                        ${P.adminFeePerMonth===0?"Rp 0 (Gratis)":`${k(P.adminFeePerMonth)} / bln`}
                    </span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span class="flex items-center gap-1">Biaya Penanganan ${P.serviceFeeType==="percent"&&P.serviceFeeValue>0?`(${P.serviceFeeValue}%)`:""}</span>
                    <span class="font-bold ${P.serviceFeePerMonth===0?"text-emerald-600 dark:text-emerald-400":"text-slate-800 dark:text-slate-200"}">
                        ${P.serviceFeePerMonth===0?"Rp 0 (Gratis)":`${k(P.serviceFeePerMonth)} / bln`}
                    </span>
                </div>
                <div class="pt-2 mt-1.5 border-t border-dashed border-slate-200 dark:border-slate-700 flex justify-between items-baseline">
                    <span class="text-[11px] font-black uppercase text-slate-800 dark:text-white">Tagihan per Bulan:</span>
                    <span class="text-sm font-black font-mono" style="color: var(--color-primary);">${k(P.totalPerMonth)} <span class="text-[10px] font-bold text-slate-400">/ bulan</span></span>
                </div>
                <div class="flex justify-between items-center text-[10px] text-slate-500 pt-0.5">
                    <span>Total Tagihan Seluruhnya:</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300">${k(P.grandTotal)}</span>
                </div>
            </div>
        `),!x)o&&(o.innerHTML='<div class="flex items-center gap-2 font-extrabold mb-1" style="color: var(--color-primary);"><i class="fa-solid fa-circle-check text-emerald-500 text-sm"></i><span>Limit PayLater Anda Sangat Cukup!</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Total belanja <b>'+k(H)+"</b> otomatis dipotong dari limit PayLater Anda. Anda <b>tidak perlu bayar sekarang</b> dan tanpa uang muka (DP Rp 0). Angsuran dicicil sesuai tenor "+w(P.label)+" ("+k(P.totalPerMonth)+"/bln) mulai tgl "+s+" bulan depan.</p>");else{const K=H-a;o&&(o.innerHTML='<div class="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-extrabold mb-1"><i class="fa-solid fa-triangle-exclamation text-amber-500 text-sm"></i><span>Total Belanja Melebihi Sisa Limit PayLater</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Sisa limit Anda <b>'+k(a)+"</b> akan digunakan maksimal untuk cicilan "+w(P.label)+" ("+k(P.totalPerMonth)+"/bln). Selisih kekurangan sebesar <b>"+k(K)+"</b> wajib dibayar sebagai DP via Transfer/QRIS.</p>")}const fe=(parseFloat(n?.value)||0)>0;ie("bukti-payment-section","hidden",!fe)};window.calculateTempoBalance=()=>{const e=document.getElementById("tempo-dp-input");let t=parseFloat(e?.value)||0;t<0&&(t=0,e&&(e.value=0));let a=O.reduce((L,m)=>L+(parseFloat(Ge(m))||0)*(parseFloat(m.qty)||0),0),s=0,r=0,i=0;if(c.deliveryMethod==="delivery"&&(s=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(f.store.costPerKm)||0)/500)*500),u){let L=a;if(u.targetProduct&&u.targetProduct!==""){const m=parseInt(u.targetProduct);L=O.filter(z=>z.id===m).reduce((z,H)=>z+(parseFloat(Ge(H))||0)*(parseFloat(H.qty)||0),0)}if(u.type==="shipping_free")i=s;else if(u.type==="shipping_flat")i=parseFloat(u.value)||0;else if(u.type==="percent"){let m=L*((parseFloat(u.value)||0)/100);u.maxDiscount&&parseFloat(u.maxDiscount)>0&&(m=Math.min(m,parseFloat(u.maxDiscount))),r=m}else r=parseFloat(u.value)||0,r=Math.min(r,L)}(f.store.freeShippingMinSpendEnabled===!0||f.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(f.store.freeShippingMinSpendAmount)||0)>0&&a>=(parseFloat(f.store.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery"&&(i=s),i=Math.min(i,s),r=Math.min(r,a);let d=Math.max(0,a-r),n=Math.max(0,s-i);const h=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({grandTotalAdd:0}))(d+n)||{grandTotalAdd:0},S=parseFloat(h?.grandTotalAdd)||0;let g=0;window.useMemberPoints&&D&&(g=Math.min(d+n+S,parseFloat(D.points)||0));let T=Math.max(0,d+n+S-g);t>T&&(t=T,e&&(e.value=t));let N=Math.max(0,T-t);const le=document.getElementById("tempo-balance-display");le&&(le.innerText=k(N))};let $e=null;const ht=e=>{if(e<=0)return{h:"00",m:"00",s:"00",totalSec:0};const t=Math.floor(e/1e3),a=Math.floor(t/3600),s=Math.floor(t%3600/60),r=t%60;return{h:String(a).padStart(2,"0"),m:String(s).padStart(2,"0"),s:String(r).padStart(2,"0"),totalSec:t}},Ot=()=>{const e=l("dynamic-flashsale-container");if(!e)return;$e&&(clearInterval($e),$e=null);const t=os("web");if(!t||!Array.isArray(t.items)||t.items.length===0){e.innerHTML="",e.classList.add("hidden");return}const a=t.endTime?typeof window.parseSafeTimestamp=="function"?window.parseSafeTimestamp(t.endTime):new Date(t.endTime).getTime():0,s=Date.now(),r=Math.max(0,a-s);if(a&&r<=0){e.innerHTML="",e.classList.add("hidden");return}const i=ht(r),o=t.items.filter(n=>n&&n.productId);if(o.length===0){e.innerHTML="",e.classList.add("hidden");return}const d=o.map(n=>{const p=(f.products||[]).find(de=>String(de.id)===String(n.productId));if(!p||p.isActive===!1||p.isActive==="false")return"";const h=parseFloat(n.normalPrice)||parseFloat(p.price)||0,S=parseFloat(n.flashSalePrice)||0,g=parseFloat(n.quota)||0,T=parseFloat(n.soldCount)||0,N=g>0&&T>=g,le=g>0?Math.min(100,Math.round(T/g*100)):0,L=Math.max(0,g-T),m=h>0?Math.round((h-S)/h*100):n.discountPercent||0,F=n.variantName&&p.variants?p.variants.find(de=>de.name===n.variantName):null,z=F&&F.img?F.img:p.img,H=z?Ht(z,"w400-rw"):"/favicon.png",E=p.name||"Produk Promo",x=n.variantName?` (${n.variantName})`:"";return`
        <div class="snap-start shrink-0 flex flex-col w-[150px] sm:w-[172px] md:w-[188px] ${o.length<=4?"lg:w-[220px] xl:w-[240px]":""}">
            <div class="flash-sale-card group relative flex flex-1 flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left">
                <!-- Badge Diskon Petir (Shopify Clean Pill) -->
                <div class="absolute left-1.5 top-1.5 z-10 flex items-center gap-1 rounded-full px-2 py-0.5 text-[8.5px] sm:text-[9px] font-bold uppercase tracking-wide text-white bg-rose-600 shadow-xs">
                    <i class="fa-solid fa-bolt text-amber-300 text-[8px]"></i>
                    <span>-${Math.max(1,m)}%</span>
                </div>

                ${L<=3&&!N&&g>0?`
                <div class="absolute right-1.5 top-1.5 z-10 flex items-center gap-1 rounded-full bg-amber-500 text-slate-950 px-2 py-0.5 text-[8px] sm:text-[8.5px] font-bold shadow-xs">
                    <span><i class="fa-solid fa-fire text-rose-700 text-[7.5px]"></i> Sisa ${L}!</span>
                </div>`:""}

                <!-- Foto Produk / Varian: Presisi Full Frame 1:1 Tanpa Padding Menjorok -->
                <div class="relative aspect-square w-full cursor-pointer overflow-hidden bg-slate-50 dark:bg-slate-950 flex items-center justify-center border-b border-slate-200 dark:border-slate-800/80 shrink-0" onclick="window.openProductModal && window.openProductModal('${w(p.id)}', false, '${w(n.variantName||"")}')">
                    <img src="${w(H)}" alt="${w(E)}" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='/favicon.png'">
                    ${N?`
                    <div class="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center p-2 text-center text-white">
                        <span class="rounded-lg px-2 py-0.5 text-[9px] font-black uppercase tracking-widest shadow-md text-white bg-rose-700">HABIS</span>
                        <span class="mt-0.5 text-[8.5px] font-medium text-slate-300">Kuota terpenuhi</span>
                    </div>`:""}
                </div>

                <!-- Detail & Harga -->
                <div class="flex flex-1 flex-col justify-between p-2.5 sm:p-3 min-w-0 bg-white dark:bg-slate-900 relative z-10">
                    <div>
                        <h4 class="line-clamp-2 text-xs sm:text-[13px] font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[var(--color-primary)] transition-colors leading-snug min-h-[2rem] sm:min-h-[2.3rem] cursor-pointer" title="${w(E+x)}" onclick="window.openProductModal && window.openProductModal('${w(p.id)}', false, '${w(n.variantName||"")}')">
                            ${w(E)}
                        </h4>
                        
                        <!-- Baris Badge Varian Terdedikasi: Ramping, Proporsional & Lapang -->
                        <div class="mt-1 flex items-center min-h-[18px]">
                            ${n.variantName?`
                                <span class="flash-variant-badge inline-flex items-center gap-1 text-[8px] sm:text-[8.5px] font-semibold px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shrink-0 max-w-full truncate shadow-none">
                                    <i class="fa-solid fa-shapes text-[7.5px] text-[var(--color-primary)] shrink-0"></i>
                                    <span class="truncate">${w(n.variantName)}</span>
                                </span>
                            `:'<span class="invisible text-[8px] py-0.5 select-none" aria-hidden="true">&nbsp;</span>'}
                        </div>
                        
                        <!-- Coretan Harga & Harga Kilat Harmonis -->
                        <div class="mt-1.5 flex flex-col">
                            <span class="text-[9.5px] sm:text-[10px] font-semibold text-slate-400 dark:text-slate-500 line-through leading-tight">
                                ${k(h)}
                            </span>
                            <span class="text-xs sm:text-[14px] lg:text-[15px] font-black truncate leading-tight mt-0.5 text-rose-600 dark:text-rose-400">
                                ${k(S)}
                            </span>
                        </div>
                    </div>

                    <!-- Footer FOMO Progress Bar & Tombol Aksi Beli Kilat -->
                    <div class="mt-auto pt-2 border-t border-slate-100 dark:border-slate-800/80">
                        <div class="mb-1.5">
                            <div class="flex items-center justify-between text-[8px] sm:text-[8.5px] font-extrabold text-slate-500 dark:text-slate-400 mb-0.5">
                                <span class="flex items-center gap-1"><i class="fa-solid fa-fire text-amber-500 text-[8px]"></i> ${N?"Terjual Habis":`Terjual ${T}/${g||"∞"}`}</span>
                                <span class="${le>=80?"text-rose-600 dark:text-rose-400 font-black":""}">${g>0?le+"%":"Terbatas"}</span>
                            </div>
                            <div class="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                                <div class="h-full rounded-full transition-all duration-500 ${N?"bg-slate-400":""}" style="${N?"":"background: linear-gradient(90deg, #f59e0b 0%, #ef4444 100%);"} width: ${N?100:Math.max(8,le)}%;"></div>
                            </div>
                        </div>

                        ${N?`
                        <button type="button" disabled class="btn-flash-buy-disabled w-full">
                            <span>Kuota Habis</span>
                        </button>`:`
                        <button type="button" onclick="window.quickBuyFlashSaleItem('${w(p.id)}', '${w(n.variantName||"")}')" class="btn-flash-buy w-full">
                            <i class="fa-solid fa-bolt text-amber-300 text-[10.5px]"></i>
                            <span>Beli Kilat</span>
                        </button>`}
                    </div>
                </div>
            </div>
        </div>`}).join("");if(!d||!d.trim()){e.innerHTML="",e.classList.add("hidden");return}e.classList.remove("hidden"),e.innerHTML=`
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
                        ${w(t.title||"Flash Sale Spesial Hari Ini")}
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
                        <span id="fs-cd-h" class="min-w-[24px] sm:min-w-[26px] text-center rounded bg-slate-800 text-amber-300 px-1 py-0.5 text-xs sm:text-sm font-bold border border-slate-700/80">${i.h}</span>
                        <span class="text-slate-400 font-bold animate-pulse">:</span>
                        <span id="fs-cd-m" class="min-w-[24px] sm:min-w-[26px] text-center rounded bg-slate-800 text-amber-300 px-1 py-0.5 text-xs sm:text-sm font-bold border border-slate-700/80">${i.m}</span>
                        <span class="text-slate-400 font-bold animate-pulse">:</span>
                        <span id="fs-cd-s" class="min-w-[24px] sm:min-w-[26px] text-center rounded bg-rose-600 text-white px-1 py-0.5 text-xs sm:text-sm font-bold shadow-xs">${i.s}</span>
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
        <div id="fs-cards-slider" class="relative z-10 flex gap-3 sm:gap-4 overflow-x-auto pb-2.5 pt-1 hide-scrollbar snap-x -mx-1 px-1 sm:mx-0 sm:px-0 scroll-smooth ${o.length<=4?"sm:justify-start lg:gap-5":""}">
            ${d}
        </div>
    </div>`,a&&($e=setInterval(()=>{const n=Math.max(0,a-Date.now());if(n<=0){clearInterval($e),$e=null,Ot(),typeof window.rCat=="function"&&window.rCat();return}const p=ht(n),h=l("fs-cd-h"),S=l("fs-cd-m"),g=l("fs-cd-s");h&&(h.innerText=p.h),S&&(S.innerText=p.m),g&&(g.innerText=p.s)},1e3))},Bs=(e,t="")=>{const a=(f.products||[]).find(p=>String(p.id)===String(e));if(!a)return;if(a.variants&&a.variants.length>0&&!t){ns(e);return}const s=t||(a.variants&&a.variants[0]?a.variants[0].name:""),r=window.getEffP?window.getEffP({id:a.id,price:a.price,variantName:s},"web"):a.price,i=s&&a.variants?a.variants.find(p=>p.name===s):null,o=i&&i.img?i.img:a.img||"",d=i&&parseFloat(i.poin)>0?parseFloat(i.poin):parseFloat(a.poin)||0,n=O.findIndex(p=>String(p.id)===String(a.id)&&String(p.variantName||"")===String(s||""));n>-1?O[n].qty=(parseFloat(O[n].qty)||0)+1:O.push({id:a.id,name:a.name,variantName:s,price:r,img:o,qty:1,unit:i&&i.unit||a.unit||"pcs",colorCode:i&&i.colorCode||"",poin:d});try{localStorage.setItem("freshmart_cart",JSON.stringify(O))}catch{}ls(),$(`"${a.name}${s?` (${s})`:""}" berhasil dimasukkan ke keranjang dengan harga Flash Sale!`,"success")},Us=()=>{const e=l("fs-cards-slider");e&&e.scrollBy({left:-220,behavior:"smooth"})},Ns=()=>{const e=l("fs-cards-slider");e&&e.scrollBy({left:220,behavior:"smooth"})};window.renderStorefrontFlashSale=Ot;window.quickBuyFlashSaleItem=Bs;window.scrollFlashSaleLeft=Us;window.scrollFlashSaleRight=Ns;let et=[];const Re=()=>{try{localStorage.setItem("freshmart_my_orders",JSON.stringify(U))}catch(e){console.warn("[MyOrders] Gagal menyimpan ke localStorage:",e)}},Hs=()=>{try{const e=localStorage.getItem("freshmart_my_orders");if(e){const t=JSON.parse(e);Array.isArray(t)&&t.length>0&&qe(t)}}catch(e){console.warn("[MyOrders] Gagal memuat dari localStorage:",e)}return U},Et=()=>{et.forEach(e=>{try{typeof e=="function"&&e()}catch{}}),et=[]},_t=()=>{Et(),U.filter(a=>{const s=a.status==="Selesai"||a.status==="Dibatalkan",r=a.claimedReward&&(a.claimedReward.status==="Menunggu Persetujuan"||!a.claimedReward.status);return!s||r}).slice(0,10).forEach(a=>{const s=a.orderId;if(!s)return;const r=W.collection("freshmart_orders").doc(s).onSnapshot(i=>{if(!i.exists)return;const o=i.data(),d=o.status,n=o.claimedReward?o.claimedReward.status:null,p=o.claimedReward&&o.claimedReward.note||"";let h=!1,S="";const g=U.find(T=>T.orderId===s);if(g){if(d&&g.status!==d){const T=g.status;g.status=d,h=!0,T!==void 0&&(S=`Pesanan #${s.split("-").pop()} kini: ${d}`)}g.claimedReward&&n&&(g.claimedReward.status!==n||g.claimedReward.note!==p)&&(g.claimedReward.status=n,g.claimedReward.note=p,h=!0),h&&(Re(),window.curViewName==="view-orders"&&_e(),S&&$(S))}},i=>{console.warn("[MyOrders Realtime] Snapshot error:",i.message)});et.push(r)})},_e=async()=>{if(Hs(),!U.length){pe("orders-empty-state"),C("btn-clear-orders"),pe("spacer-orders"),ue("orders-items-container","");return}C("orders-empty-state"),pe("btn-clear-orders"),C("spacer-orders"),_t(),ue("orders-items-container",U.map((e,t)=>{const s=St(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});let r="text-slate-500 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",i="fa-clock";return e.status==="Baru"?(r="text-rose-600 border-rose-200 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400",i="fa-asterisk"):e.status==="Diproses"?(r="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",i="fa-spinner fa-spin"):e.status==="Selesai"?(r="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",i="fa-check-double"):e.status==="Dibatalkan"&&(r="text-slate-400 border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400",i="fa-xmark"),`
        <div class="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800/80 shadow-sm relative overflow-hidden group min-w-0 transition-all hover:border-[var(--color-primary)]/40 hover:shadow-md">
            <div class="flex justify-between items-start mb-3 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                <div>
                    <span class="font-bold text-sm text-slate-800 dark:text-white tracking-tight">#${e.orderId.split("-").pop()}</span>
                    <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5"><i class="fa-regular fa-calendar-days mr-1"></i>${s}</p>
                </div>
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-lg border ${r} uppercase tracking-wider flex items-center shadow-xs"><i class="fa-solid ${i} mr-1.5 text-[9px]"></i> ${w(e.status)}</span>
            </div>
            ${e.pointsEarned>0||e.claimedReward?`
            <div class="flex flex-wrap gap-1.5 mb-3">
                ${e.pointsEarned>0?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-amber-50 text-amber-600 border border-amber-200/90 dark:bg-amber-900/20 dark:border-amber-800/60 dark:text-amber-400"><i class="fa-solid fa-star mr-1"></i>+${e.pointsEarned} Poin</span>`:""}
                ${e.claimedReward?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)]/40 dark:text-[var(--color-primary)]"><i class="fa-solid fa-gift mr-1"></i>Hadiah: ${w(e.claimedReward.name)} ${ot(e.claimedReward)}</span>`:""}
                ${e.claimedReward&&e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-slate-100 text-slate-500 border border-slate-200/90 dark:bg-slate-800 dark:border-slate-700/80 dark:text-slate-400"><i class="fa-solid fa-wallet mr-1"></i>Sisa: ${e.finalMemberPoints} Poin</span>`:""}
            </div>`:""}
            <div class="flex justify-between items-end mt-2 pt-1">
                <div>
                    <p class="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Total Tagihan</p>
                    <p class="text-[var(--color-primary)] font-bold text-base tracking-tight">${k(e.total)} <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium ml-1">(${e.itemCount} Item)</span></p>
                </div>
                <div class="flex gap-2">
                    <button onclick="openCustomerOrderDetail('${e.orderId}')" class="min-h-[38px] sm:min-h-[40px] px-3.5 sm:px-4 py-2 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] hover:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.35)] text-xs font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5 cursor-pointer"><i class="fa-solid fa-file-invoice"></i> Detail</button>
                    <button onclick="checkOrderStatus('${e.orderId}', ${t})" class="min-h-[38px] sm:min-h-[40px] px-3.5 sm:px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-slate-800/80 text-xs font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5 cursor-pointer"><i class="fa-solid fa-rotate"></i> Status</button>
                </div>
            </div>
        </div>`}).join(""))},Gs=async(e,t)=>{he("Melacak Status...");try{const a=await W.collection("freshmart_orders").doc(e).get();if(a.exists){const s=a.data();if(U[t])U[t].status=s.status;else{const r=U.findIndex(i=>i.orderId===e);r>-1&&(U[r].status=s.status)}Re(),_e(),$(`Status Pesanan: ${s.status}`)}else $("Pesanan tidak ditemukan di server.")}catch(a){console.error("Gagal cek status pesanan:",a),$("Gagal mengambil data sistem. Periksa koneksi.")}finally{V()}},Ks=async()=>{const e=l("order-tracking-input"),t=e?e.value.trim():"";if(!t){$("Masukkan ID Pesanan terlebih dahulu!");return}let a=t.replace(/^#/,"").trim();const s=U.find(r=>r.orderId===a||r.orderId.endsWith(a));if(s){tt(s.orderId);return}he("Mencari Pesanan...");try{let r=await W.collection("freshmart_orders").doc(a).get();if(!r.exists&&!a.startsWith("ORD-")){const i="ORD-"+a,o=await W.collection("freshmart_orders").doc(i).get();o.exists&&(r=o,a=i)}if(r.exists){const i=r.data();U.some(d=>d.orderId===a)||(U.unshift({orderId:a,date:i.dateString||(i.timestamp?i.timestamp.toDate().toISOString():new Date().toISOString()),dateString:i.dateString||(i.timestamp?i.timestamp.toDate().toISOString():new Date().toISOString()),total:i.payment&&i.payment.grandTotal?i.payment.grandTotal:i.total||0,itemCount:(i.items||[]).reduce((d,n)=>d+(parseFloat(n.qty)||0),0),status:i.status||"Baru",pointsEarned:i.pointsEarned||0,claimedReward:i.claimedReward||null,finalMemberPoints:i.finalMemberPoints||null,customerType:i.customerType||"Pelanggan Umum",customer:i.customer||{},items:i.items||[],payment:i.payment||{},isTempo:!!i.isTempo}),Re(),_e()),e&&(e.value=""),$("Pesanan berhasil ditemukan!"),tt(a)}else $("Pesanan dengan ID tersebut tidak ditemukan.")}catch(r){console.error("Gagal melacak pesanan:",r),$("Gagal menghubungi server. Pastikan ID Pesanan sudah benar.")}finally{V()}},qs=()=>{Gt("Hapus Riwayat","Riwayat pesanan di perangkat ini akan dihapus. Pesanan tetap tersimpan di sistem toko. Lanjutkan?",()=>{qe([]),Re(),_e(),$("Riwayat lokal dibersihkan")})},tt=async e=>{const t=Array.isArray(U)?U.find(a=>a.orderId===e):null;if(t&&t.items&&t.items.length>0){window.currentCustomerOrder=t,window.lastPrintedOrder=t,Ne(e,t,[]),W.collection("freshmart_orders").doc(e).get().then(async a=>{if(a.exists){const s=a.data();s.orderId=s.orderId||a.id||e;let r=[];if(s.status==="Selesai")try{r=(await W.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(n=>`${n.data().productId}::${n.data().variantName||""}`)}catch{}window.currentCustomerOrder=s,window.lastPrintedOrder=s;const i=U.findIndex(d=>d.orderId===s.orderId);i!==-1&&(Object.assign(U[i],s),Re());const o=document.getElementById("order-detail-modal");o&&!o.classList.contains("hidden")&&!o.classList.contains("opacity-0")&&Ne(e,s,r,!0)}}).catch(a=>console.warn("[MyOrders] Silent background fetch error:",a));return}he("Memuat Rincian...");try{const a=await W.collection("freshmart_orders").doc(e).get();if(!a.exists){$("Pesanan tidak ditemukan.");return}const s=a.data();s.orderId=s.orderId||a.id||e;let r=[];if(s.status==="Selesai")try{r=(await W.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(o=>`${o.data().productId}::${o.data().variantName||""}`)}catch{}if(window.currentCustomerOrder=s,window.lastPrintedOrder=s,Array.isArray(U)){const i=U.findIndex(o=>o.orderId===s.orderId);i!==-1&&(Object.assign(U[i],s),Re())}Ne(e,s,r)}catch(a){console.error("Gagal mengambil data pesanan:",a),$("Gagal memuat rincian pesanan. Coba beberapa saat lagi.")}finally{V()}},Ne=(e,t,a=[],s=!1)=>{try{t&&(t.orderId=t.orderId||e,window.currentCustomerOrder=t,window.lastPrintedOrder=t);let r=document.getElementById("order-detail-modal");r||(r=document.createElement("div"),r.id="order-detail-modal",r.className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 opacity-0 pointer-events-none transition-opacity duration-300",document.body.appendChild(r));const i=w(t.customer&&t.customer.name?t.customer.name:"-"),o=w(t.customer&&t.customer.wa?t.customer.wa:"-"),d=w(t.customer&&t.customer.address?t.customer.address:"-"),n=t.customer&&t.customer.deliveryMethod==="delivery"?"Dikirim ke Alamat":"Ambil di Toko (Pickup)",p=w(t.customer&&t.customer.note?t.customer.note:""),h=!!(t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"),S=h?"Putri PayLater":w(t.payment&&t.payment.method?t.payment.method:"Cash / COD"),g=t.items||[],T=g.some(A=>A.poTime&&A.poTime!==""),N=g.map(A=>{const oe=parseFloat(A.qty)||0,ee=parseFloat(A.effectivePrice||A.price)||0,te=oe*ee,P=`${A.id}::${A.variantName||""}`,fe=t.status==="Selesai"&&!a.includes(P)&&A.id!==void 0&&A.id!==null;return`
            <div class="flex gap-3 items-center border-b border-slate-100 dark:border-slate-800/80 py-3 last:border-0">
                <div class="w-12 h-12 rounded-xl bg-white dark:bg-slate-950 bg-cover bg-center shrink-0 border border-slate-200/90 dark:border-slate-800/80" style="background-image:url('${w(A.img||(f&&f.store?f.store.logo:""))}')"></div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate mb-0.5" title="${w(A.name)}">${w(A.name)}</p>
                    ${A.variantName||A.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${A.variantName?`<span class="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded text-[9px] font-semibold border border-slate-200/80 dark:border-slate-700">${w(A.variantName)}</span>`:""}
                        ${A.poTime?`<span class="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">PO ${w(A.poTime)}</span>`:""}
                    </div>
                    `:""}
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400">${oe} ${w(A.unit||"pcs")} x ${k(ee)}</p>
                    ${fe?`<button type="button" onclick="openReviewModal('${e}',${A.id},'${encodeURIComponent(A.variantName||"")}','${encodeURIComponent(A.name||"")}','${encodeURIComponent(t.customer?.name||"")}')" class="mt-1.5 text-[10px] font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1 transition-colors"><i class="fa-solid fa-star"></i> Berikan Ulasan</button>`:""}
                </div>
                <div class="text-right shrink-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-[var(--color-primary)]">${k(te)}</p>
                </div>
            </div>
            `}).join(""),L=St(t).toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),m=Kt(t),F=m.subtotal,z=m.shipping,H=m.productDiscount,E=m.shippingDiscount,x=m.pointDiscount,de=m.grandTotal;r.innerHTML=`
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
                            <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40">${w(t.status||"Baru")}</span>
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
                                <p class="font-bold text-slate-800 dark:text-slate-200">${i}</p>
                                ${t.customer&&t.customer.wa?`<a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${o}'); else window.open('https://wa.me/${o}', '_blank', 'noopener,noreferrer');" class="flex items-center gap-1 text-[var(--color-primary)] font-bold hover:underline cursor-pointer"><i class="fa-brands fa-whatsapp"></i> +${o}</a>`:""}
                                ${t.customer&&t.customer.lat&&t.customer.deliveryMethod==="delivery"?`<a href="https://www.google.com/maps?q=${w(t.customer.lat)},${w(t.customer.lng)}" target="_blank" class="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"><i class="fa-solid fa-location-dot"></i> Lihat Peta</a>`:""}
                            </div>
                        </div>
                        <div class="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800/80">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-truck text-slate-400"></i> Pengiriman & Bayar</h4>
                            <div class="space-y-1 text-xs">
                                <p><span class="text-slate-500 inline-block w-14">Metode</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${n}</span></p>
                                <p><span class="text-slate-500 inline-block w-14">Bayar</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${S.toUpperCase()}</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2.5">
                        <div class="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800/80">
                            <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1">Alamat Tujuan</p>
                            <p class="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">${d}</p>
                        </div>
                        ${p?`<div class="bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800/80"><p class="text-[9px] font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest mb-1">Catatan Pembeli</p><p class="text-xs font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic">"${p}"</p></div>`:""}
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
                            ${N}
                        </div>
                    </div>

                    ${T?`
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
                            <p class="text-[11px] font-semibold text-[var(--color-primary)] mt-1 ml-5">${ot(t.claimedReward)}</p>
                            ${t.claimedReward.note?`<p class="text-[11px] text-[var(--color-primary)]/70 italic mt-0.5 ml-5">"${w(t.claimedReward.note)}"</p>`:""}
                        </div>`:""}
                    </div>`:""}

                    <div class="bg-slate-50 dark:bg-slate-950/60 p-4 rounded-xl border border-slate-200/90 dark:border-slate-800/80 space-y-2 text-xs">
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Subtotal Produk</p><p class="font-bold text-slate-800 dark:text-white">${k(F)}</p></div>
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Ongkos Kirim</p><p class="font-bold text-slate-800 dark:text-white">${k(z)}</p></div>
                        ${E>0?`<div class="flex justify-between text-[var(--color-primary)]"><p>Diskon Ongkir</p><p class="font-bold">-${k(E)}</p></div>`:""}
                        ${H>0?`<div class="flex justify-between text-rose-500"><p>Diskon Promo</p><p class="font-bold">-${k(H)}</p></div>`:""}
                        ${x>0?`<div class="flex justify-between text-emerald-600 dark:text-emerald-400"><p>Diskon Poin Member</p><p class="font-bold">-${k(x)}</p></div>`:""}
                        ${h&&m.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Biaya Admin PayLater</p><p class="font-bold text-slate-800 dark:text-white">+${k(m.paylaterAdminFee)}</p></div>`:""}
                        ${h&&m.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Biaya Penanganan / Layanan</p><p class="font-bold text-slate-800 dark:text-white">+${k(m.paylaterServiceFee)}</p></div>`:""}
                        ${m.hasPpn?`
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>DPP (Dasar Pengenaan Pajak)</p><p class="font-bold text-slate-800 dark:text-white">${k(m.dppAmount)}</p></div>
                        <div class="flex justify-between text-amber-600 dark:text-amber-400"><p>${w(m.ppnLabel)}</p><p class="font-bold">${m.ppnAmount>0?(m.isInclusive?"":"+")+k(m.ppnAmount):"Rp 0"}</p></div>
                        `:""}
                        <div class="flex justify-between items-center border-t border-dashed border-slate-300 dark:border-slate-700 pt-3 mt-2">
                            <p class="font-bold text-slate-800 dark:text-white uppercase tracking-wider">Total Tagihan</p>
                            <p class="text-lg font-bold text-[var(--color-primary)]">${k(de)}</p>
                        </div>
                        ${(()=>{if(!h)return"";const A=Array.isArray(t.payment?.paylaterSchedule)&&t.payment.paylaterSchedule.length>0?t.payment.paylaterSchedule:null,oe=t.payment?.paylaterMonths||(A?A.length:1),ee=t.payment?.paylaterMonthlyInstallment||(oe>0?Math.round(de/oe):de);let te="";return A&&A.length>0&&(te=`
                                <div class="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-700/80 space-y-2">
                                    <p class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                        <i class="fa-solid fa-calendar-days text-[var(--color-primary)]"></i> Rencana Jadwal Angsuran Anda:
                                    </p>
                                    <div class="space-y-2">
                                        ${A.map((P,fe)=>{const K=P.installmentIndex||P.installmentNo||P.installmentNumber||P.month||fe+1,_=P.dueDateFormatted||P.dueDateStr||(P.dueDate?new Date(P.dueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"),ke=parseFloat(P.total||P.totalMonthly||P.totalInstallment)||ee;return`
                                            <div class="p-3 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200/90 dark:border-slate-800/80 flex items-center justify-between gap-3 shadow-2xs">
                                                <div class="flex items-center gap-2.5 min-w-0">
                                                    <div class="w-8 h-8 rounded-xl bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] font-black text-xs flex items-center justify-center shrink-0">
                                                        ${K}
                                                    </div>
                                                    <div class="min-w-0">
                                                        <p class="text-xs font-bold text-slate-800 dark:text-white leading-tight">Bulan ke-${K}</p>
                                                        <p class="text-[10px] text-slate-400 font-mono mt-0.5">Jatuh Tempo: ${_}</p>
                                                    </div>
                                                </div>
                                                <div class="text-right shrink-0">
                                                    <p class="text-xs font-black font-mono text-[var(--color-primary)]">${k(ke)}</p>
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
                                ${ee?`
                                <div class="flex justify-between text-[var(--color-primary)] font-black text-xs">
                                    <span>Angsuran per Bulan (${oe}x)</span>
                                    <span class="font-mono text-sm">${k(ee)}/bln</span>
                                </div>`:""}
                                <div class="flex justify-between text-slate-600 dark:text-slate-400 text-xs">
                                    <span>Jatuh Tempo Pertama</span>
                                    <span class="font-bold">${t.payment?.tempoDueDate?new Date(t.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"}</span>
                                </div>
                                ${te}
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
        `,s||(r.classList.contains("opacity-0")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("customerOrder"),document.body.classList.add("overflow-hidden"),Te(r,"order-detail-content"))}catch(r){console.error("Error Render HTML Modal:",r),$("Gagal menampilkan detail. Coba lagi.")}},Vs=(e=!1)=>{const t=()=>{const a=document.getElementById("order-detail-modal"),s=document.getElementById("order-detail-content");Me(a,s,()=>{document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none):not(#order-detail-modal)')||document.body.classList.remove("overflow-hidden")})};typeof window.requestCloseModal=="function"?window.requestCloseModal("customerOrder",e,t):t()};window.attachMyOrdersRealtime=_t;window.detachMyOrdersRealtime=Et;window.renderMyOrders=_e;window.checkOrderStatus=Gs;window.trackOrderManual=Ks;window.clearMyOrders=qs;window.openCustomerOrderDetail=tt;window.renderOrderDetailModal=Ne;window.closeCustomerOrderDetailModal=Vs;window.reviewPhotoFile=null;window.reviewRating=0;const Ws=(e,t,a,s,r)=>{const i=decodeURIComponent(a||""),o=decodeURIComponent(s||""),d=decodeURIComponent(r||"");let n=document.getElementById("review-modal");n||(n=document.createElement("div"),n.id="review-modal",n.className="fixed inset-0 z-[120] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",n.onclick=p=>{p.target===n&&ct()},document.body.appendChild(n)),window.reviewPhotoFile=null,window.reviewRating=0,n.innerHTML=`
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
        </div>`,l("review-submit-btn").onclick=()=>pt(e,t,i,o,d),n.style.opacity="0",n.style.display="flex",requestAnimationFrame(()=>{n.style.transition="opacity 0.25s ease",n.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("review")},zs=e=>{window.reviewRating=e,document.querySelectorAll(".review-star").forEach(t=>{const a=parseInt(t.dataset.star);t.classList.toggle("text-amber-400",a<=e),t.classList.toggle("text-slate-300",a>e),t.classList.toggle("dark:text-slate-600",a>e)})},Js=e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/")){$("Hanya file gambar yang diizinkan!");return}if(t.size>5*1024*1024){$("Ukuran gambar max 5MB!");return}window.reviewPhotoFile=t;const a=new FileReader;a.onload=s=>{l("review-photo-preview").src=s.target.result,pe("review-photo-preview-wrap"),C("review-photo-btn")},a.readAsDataURL(t)},Qs=()=>{window.reviewPhotoFile=null,C("review-photo-preview-wrap"),pe("review-photo-btn");const e=l("review-photo-input");e&&(e.value="")},ct=(e=!1)=>{const t=document.getElementById("review-modal");if(!t||t.style.display==="none")return;const a=()=>{t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250)};if(typeof ge=="function")ge("review",e,a);else if(typeof window.requestCloseModal=="function")window.requestCloseModal("review",e,a);else{if(!e&&Se.length&&Se[Se.length-1]==="review"){Se.pop();try{history.back()}catch{}}a()}},pt=async(e,t,a,s,r)=>{if(!window.reviewRating||window.reviewRating<1)return $("Silakan beri bintang terlebih dahulu!");if(!rt){Y(!0),he("Mengirim ulasan...");try{let i="";if(window.reviewPhotoFile&&typeof window.uploadBuktiToGDrive=="function"){const n=await window.uploadBuktiToGDrive(window.reviewPhotoFile,"review-"+e);n?i=n:$("Foto gagal diupload, ulasan tetap dikirim tanpa foto.")}const o=Date.now(),d={id:o,orderId:e||"",productId:t??0,variantName:a||"",productName:s||"",customerName:r||"Pelanggan",rating:window.reviewRating,text:xe("review-text")||"",photoUrl:i||"",adminReply:"",isVisible:!0,createdAt:Fe.firestore.FieldValue.serverTimestamp()};await W.collection("freshmart").doc("cms_data").collection("reviews").doc(o.toString()).set(d),at.delete(t),ct(),$("Terima kasih atas ulasan Anda!"),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(i){console.error("Gagal mengirim ulasan:",i),$("Gagal mengirim ulasan: "+(i.message||"Error tidak diketahui"))}finally{Y(!1),V()}}},at=new Map,Zs=5*60*1e3,Xs=async e=>{if(!l("product-modal-reviews-container"))return;const a=r=>{const i=r.length?r.reduce((p,h)=>p+(parseFloat(h.rating)||0),0)/r.length:0,o=p=>Array.from({length:5},(h,S)=>`<i class="fa-solid fa-star ${S<Math.round(p)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join("");let d=`
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2"><i class="fa-solid fa-comment-dots text-amber-400"></i> Ulasan Pelanggan</h4>
                ${r.length?`<div class="flex items-center gap-1.5"><span class="flex text-xs">${o(i)}</span><span class="text-xs font-bold text-slate-600 dark:text-slate-300">${i.toFixed(1)}</span><span class="text-[10px] font-bold text-slate-400">(${r.length})</span></div>`:""}
            </div>`;if(!r.length){ue("product-modal-reviews-container",d+`
            <div class="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 text-center space-y-2">
                <div class="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-500 flex items-center justify-center mx-auto text-sm border border-amber-200/80 dark:border-amber-900/40">
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Belum Ada Ulasan</p>
                <p class="text-[11px] text-slate-400 max-w-xs mx-auto">Jadilah yang pertama mencoba dan memberikan ulasan bintang 5 untuk produk ini!</p>
            </div>`);return}const n=r.map(p=>{let h="";try{p.createdAt&&p.createdAt.toDate&&(h=p.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}))}catch{}return`
            <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div class="flex items-center justify-between mb-1.5">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${w(p.customerName||"Pelanggan")}</p>
                    <span class="text-[9px] font-bold text-slate-400">${h}</span>
                </div>
                <div class="flex text-[11px] mb-2">${o(p.rating)}</div>
                ${p.variantName?`<p class="text-[10px] font-bold text-slate-400 mb-1.5">Varian: ${w(p.variantName)}</p>`:""}
                ${p.text?`<p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${w(p.text)}</p>`:""}
                ${p.photoUrl?`<div class="w-16 h-16 rounded-xl overflow-hidden mb-3 border border-slate-200 dark:border-slate-700"><img src="${w(p.photoUrl)}" class="w-full h-full object-cover cursor-pointer" onclick="window.open('${w(p.photoUrl)}','_blank')" alt="Foto ulasan"></div>`:""}
                ${p.adminReply?`
                <div class="mt-2.5 p-3 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.2)] rounded-xl">
                    <p class="text-[10px] font-bold text-[var(--color-primary-dark)] dark:text-[var(--color-primary)] mb-1 flex items-center gap-1"><i class="fa-solid fa-reply"></i> Balasan Penjual</p>
                    <p class="text-xs text-slate-600 dark:text-slate-300">${w(p.adminReply)}</p>
                </div>`:""}
            </div>`}).join("");ue("product-modal-reviews-container",d+`<div class="space-y-3">${n}</div>`)},s=at.get(e);if(s&&Date.now()-s.timestamp<Zs){a(s.data);return}ue("product-modal-reviews-container",`
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
        </div>`);try{let i=(await W.collection("freshmart").doc("cms_data").collection("reviews").where("productId","==",e).get()).docs.map(o=>o.data()).filter(o=>o.isVisible!==!1);i.sort((o,d)=>{const n=o.createdAt&&o.createdAt.toMillis?o.createdAt.toMillis():0;return(d.createdAt&&d.createdAt.toMillis?d.createdAt.toMillis():0)-n}),at.set(e,{data:i,timestamp:Date.now()}),a(i)}catch(r){console.warn("Gagal memuat ulasan:",r),ue("product-modal-reviews-container",`
        <div class="p-4 text-center text-slate-400 text-xs font-semibold rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800">
            <i class="fa-solid fa-circle-exclamation text-slate-400 mr-1.5"></i> Belum ada ulasan yang dapat dimuat.
        </div>`)}};window.openReviewModal=Ws;window.setReviewRating=zs;window.handleReviewPhotoSelect=Js;window.removeReviewPhoto=Qs;window.closeReviewModal=ct;window.submitReview=pt;window.submitProductReview=pt;window.loadProductReviews=Xs;const Ys="admgaffidigital/tokoputri",er=`https://api.github.com/repos/${Ys}/releases/latest`,st="https://github.com/admgaffidigital/tokoputri/releases/latest/download/TokoPutri.OfficialStore.apk";let Pe=null,ze=!1;const tr=e=>!e||isNaN(e)?"8.0 MB":`${(e/(1024*1024)).toFixed(1)} MB`,ar=e=>{if(!e)return"Terbaru";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return"Terbaru"}},sr=async()=>{if(Pe)return Pe;if(ze)return null;const e=Ye(f)||"v1.19.6";ze=!0;try{const t=await fetch(er,{headers:{Accept:"application/vnd.github.v3+json"},cache:"no-store"});if(t.ok){const a=await t.json(),s=a.assets?.find(d=>d.name?.toLowerCase().endsWith(".apk"))||a.assets?.[0],r=a.tag_name||e,i=Fs(r,e)>0,o=i?e:r;Pe={tagName:o,name:`Toko Putri ( Official Store ) ${o}`,publishedAt:i?"20 Okt 2026":ar(a.published_at),fileSize:s?tr(s.size):"15.8 MB",downloadUrl:s?.browser_download_url||st,notes:a.body||"",isLiveFetched:!0}}else throw new Error(`GitHub API HTTP ${t.status}`)}catch{const a=Ye(f)||"v1.19.6";Pe={tagName:a,name:`Toko Putri ( Official Store ) ${a}`,publishedAt:"20 Okt 2026",fileSize:"15.8 MB",downloadUrl:st,notes:"",isLiveFetched:!1}}finally{ze=!1}return Pe},rr=()=>{let e=l("app-download-modal");return e||(e=document.createElement("div"),e.id="app-download-modal",e.className="fixed inset-0 z-[125] bg-slate-950/85 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&jt()},e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e)},ir=async()=>{const e=rr();if(!e)return;Ae("appDownload"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const a=l("app-download-modal-box");a&&a.classList.remove("translate-y-full","sm:translate-y-8")}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light");const t=await sr();if(t){const a=l("app-modal-version-tag"),s=l("app-modal-filesize"),r=l("app-modal-published-date");a&&(a.textContent=t.tagName),s&&(s.innerHTML=`<span>${w(t.fileSize)}</span>`),r&&(r.textContent=`Rilis: ${w(t.publishedAt)}`)}},jt=(e=!1)=>{const t=l("app-download-modal");!t||t.style.display==="none"||ge("appDownload",e,()=>{t.classList.add("opacity-0");const a=l("app-download-modal-box");a&&a.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{t.style.display="none"},300)})},or=()=>{const e=l("btn-download-apk-action"),t=l("btn-download-apk-icon"),a=l("btn-download-apk-text");e&&e.classList.add("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-spinner fa-spin"),a&&(a.textContent="Menghubungkan ke Server Rilis..."),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.showToast=="function"&&window.showToast("Memulai unduhan TokoPutri(OfficialStore).apk terbaru. Cek panel notifikasi HP Anda!");const s=Pe?.downloadUrl||st,r=document.createElement("a");r.href=s,r.setAttribute("download","TokoPutri(OfficialStore).apk"),r.target="_blank",r.rel="noopener noreferrer",document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>{if(e&&e.classList.remove("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-circle-check text-white"),a){const i=Pe?.tagName||Ye(f)||"v1.19.6";a.textContent=`Unduh Ulang APK (${i})`}},2500)};window.openAppDownloadModal=ir;window.closeAppDownloadModal=jt;window.downloadLatestApk=or;window.setCat=e=>{Tt(e),nt(1),typeof window.rCat=="function"&&window.rCat()};window.setBrand=e=>{Mt(e),nt(1),typeof window.rCat=="function"&&window.rCat()};const nr=()=>{let e="",t=Xe==="Semua Produk";e+=`
    <button onclick="setCat('Semua Produk'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-colors">
            <i class="fa-solid fa-layer-group text-base sm:text-lg"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA</span>
        <i class="fa-solid fa-circle-check text-base ${t?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
    </button>`,f.categories.forEach(i=>{let o=Xe===i.name,d=i.img?`<img loading="lazy" src="${w(i.img)}" alt="${w(i.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Cat'">`:'<i class="fa-solid fa-box text-base sm:text-lg"></i>';e+=`
        <button onclick="setCat('${w(i.name)}'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${o?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden border border-slate-200 dark:border-slate-600">
                ${d}
            </div>
            <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 line-clamp-1 ${o?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${w(i.name)}</span>
            <i class="fa-solid fa-circle-check text-base ${o?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
        </button>`});const a=l("modal-category-list");a&&(a.innerHTML=`<div class="flex flex-col gap-2.5 pb-6 w-full">${e}</div>`);const s=l("category-modal"),r=l("category-modal-content");s&&r&&(s.classList.contains("hidden")&&Ae("category"),Te(s,r))};window.openCategoryModal=nr;window.openBrandModal=()=>{let e="",t=Ze==="Semua Merek";e+=`
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA MEREK</span>
    </button>`,f.brands.forEach(i=>{let o=Ze===i.name,d=i.img?`<img loading="lazy" src="${w(i.img)}" alt="${w(i.name)}" class="w-full h-full object-contain p-1.5" >`:'<i class="fa-solid fa-tag text-lg sm:text-xl"></i>';e+=`
        <button onclick="setBrand('${w(i.name)}'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${o?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-2.5 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600">
                ${d}
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${o?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${w(i.name)}</span>
        </button>`});const a=l("modal-brand-grid");a&&(a.innerHTML=e);const s=l("brand-modal"),r=l("brand-modal-content");s&&r&&(s.classList.contains("hidden")&&Ae("brand"),Te(s,r))};window.closeCategoryModal=(e=!1)=>{const t=l("category-modal"),a=l("category-modal-content");t&&a&&ge("category",e,()=>{Me(t,a)})};window.closeBrandModal=(e=!1)=>{const t=l("brand-modal"),a=l("brand-modal-content");t&&a&&ge("brand",e,()=>{Me(t,a)})};window.openQuickMenuModal=()=>{const e=l("quickmenu-modal"),t=l("quickmenu-modal-content");if(e&&t){const a=t.querySelector(".overflow-y-auto");a&&(a.scrollTop=0),e.classList.contains("hidden")&&Ae("quickmenu"),Te(e,t)}};window.openTermsModal=()=>{const e=`
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
    `,t=f?.store?.terms,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;ue("terms-modal-content-body",a);const s=l("terms-modal"),r=l("terms-modal-content");s&&r&&(s.classList.contains("hidden")&&Ae("terms"),Te(s,r))};window.closeTermsModal=(e=!1)=>{const t=l("terms-modal"),a=l("terms-modal-content");t&&a&&ge("terms",e,()=>{Me(t,a)})};window.openPrivacyModal=()=>{const e=`
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
    `,t=f?.store?.privacy,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;ue("privacy-modal-content-body",a);const s=l("privacy-modal"),r=l("privacy-modal-content");s&&r&&(s.classList.contains("hidden")&&Ae("privacy"),Te(s,r))};window.closePrivacyModal=(e=!1)=>{const t=l("privacy-modal"),a=l("privacy-modal-content");t&&a&&ge("privacy",e,()=>{Me(t,a)})};window.closeQuickMenuModal=(e=!1)=>{const t=l("quickmenu-modal"),a=l("quickmenu-modal-content");t&&a&&ge("quickmenu",e,()=>{Me(t,a)})};window.switchGuideTab=(e="customer")=>{["customer","pos","admin"].forEach(s=>{const r=l(`guide-tab-btn-${s}`),i=l(`guide-section-${s}`);s===e?(r&&(r.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-extrabold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer primary-bg text-white"),i&&i.classList.remove("hidden")):(r&&(r.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"),i&&i.classList.add("hidden"))});const a=document.querySelector("#shopping-guide-modal .custom-scrollbar");a&&(a.scrollTop=0)};window.openShoppingGuideModal=(e="customer")=>{const t=l("shopping-guide-modal"),a=l("shopping-guide-modal-content");t&&a&&(typeof window.switchGuideTab=="function"&&window.switchGuideTab(e),t.classList.contains("hidden")&&Ae("guide"),Te(t,a))};window.closeShoppingGuideModal=(e=!1)=>{const t=l("shopping-guide-modal"),a=l("shopping-guide-modal-content");t&&a&&ge("guide",e,()=>{Me(t,a)})};window.navigateFromQuickMenu=e=>{closeQuickMenuModal(!0);const t=Se.indexOf("quickmenu");t>-1&&Se.splice(t,1),typeof e=="function"?(history.replaceState({view:qt},"",window.location.href),e()):(history.replaceState({view:e},"",window.location.href),Vt(e,!0))};let gt=!1,Be=null;const Ke=async()=>gt?!0:Be||(Be=Promise.all([He(()=>import("./module-admin-DhEXO2g6.js").then(e=>e.j),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),He(()=>import("./module-admin-DhEXO2g6.js").then(e=>e.k),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)]).then(()=>(gt=!0,!0)),Be);window.ensureAdminLoaded=Ke;window.checkAdminAccess=async()=>{if(he("Membuka Panel Owner..."),await Ke(),V(),typeof window.__checkAdminAccessReal=="function")return window.__checkAdminAccessReal()};typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);typeof window<"u"&&(window.AndroidNativeApp||window.Capacitor||window.location&&(window.location.protocol==="capacitor:"||window.location.protocol==="ionic:"))&&document.documentElement.classList.add("is-native-app");Wt();window.firebase=Fe;window.db=W;window.DOMPurify=ss;window.ensureScriptLoaded=zt;if(typeof window<"u"){const e=window.print?window.print.bind(window):null;window.print=function(){window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():e&&e()}}window.uiPalettes=ds;window.hexToRgb=cs;window.applyUITheme=$t;window.toggleTheme=ps;window.applyBackgroundStyle=It;ms();const lr=localStorage.getItem("freshmart_ui_theme")||"emerald";$t(lr,localStorage.getItem("freshmart_theme_color"));const kt=()=>{Ss();const e=localStorage.getItem("freshmart_bg_style")||"minimalist",t=localStorage.getItem("freshmart_bg_custom_url")||"";It(e,t),Ts()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",kt):kt();window.onerror=function(e,t,a,s,r){return console.error("Global Error Caught:",e,"at",a,":",s),typeof showToast=="function"&&showToast("Ops, ada kendala sistem."),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Promise Rejection Sentinel:",e.reason)});window.addEventListener("vite:preloadError",function(e){console.warn("[Vite] Chunk preload failed (new deployment detected). Auto-reloading...",e);const t="freshmart_preload_reload",a=sessionStorage.getItem(t),s=Date.now();(!a||s-parseInt(a,10)>1e4)&&(sessionStorage.setItem(t,String(s)),window.location.reload())});window.updateSEO=Jt;window.injectJSONLD=Qt;window.rewardStatusLabel=ot;window.getYouTubeId=Zt;window.parseVideoUrl=Xt;window.fixDriveVideo=Yt;window.fixDriveVideoPreview=ea;let yt=Lt;window.calcTaxDetails=e=>{const t=f?.store||{},a=t.ppnEnabled===!0||t.ppnEnabled==="true",s=t.ppnRate!==void 0&&t.ppnRate!==null&&!isNaN(parseFloat(t.ppnRate))?Math.max(0,parseFloat(t.ppnRate)):11,r=t.ppnType||"exclusive",i=t.ppnShowZero!==!1,o=t.ppnTaxLabel||"PPN";if(!a||e<=0)return{ppnEnabled:!1,ppnRate:0,ppnType:r,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0,ppnShowZero:!1,ppnLabel:"PPN"};if(s===0)return{ppnEnabled:!0,ppnRate:0,ppnType:r,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0,ppnShowZero:i,ppnLabel:o};if(r==="inclusive"){const d=Math.round(e*100/(100+s)),n=e-d;return{ppnEnabled:!0,ppnRate:s,ppnType:"inclusive",ppnAmount:n,dppAmount:d,grandTotalAdd:0,ppnShowZero:i,ppnLabel:o}}else{const d=Math.round(e*s/100);return{ppnEnabled:!0,ppnRate:s,ppnType:"exclusive",ppnAmount:d,dppAmount:Math.max(0,e),grandTotalAdd:d,ppnShowZero:i,ppnLabel:o}}};typeof requestIdleCallback<"u"?requestIdleCallback(ut,{timeout:5e3}):setTimeout(ut,3e3);window.isAdm=!1;history.replaceState({view:"view-catalog"},"","");window.addEventListener("DOMContentLoaded",async()=>{try{At()}catch(e){console.warn("[NativeMobile] Error:",e)}await us();try{fs()}catch(e){console.warn("[syncAppMeta] Error:",e)}ws(),bs(),bt(),window.attachRewardsRealtime=bt,He(()=>import("./module-pos-Bnzlk-Xf.js").then(e=>e.X),__vite__mapDeps([4,1,2,3,5,6]),import.meta.url).then(e=>{typeof e.initPOSAuth=="function"&&e.initPOSAuth()}).catch(e=>console.warn("[POS Auth] Gagal inisialisasi:",e)),Ve.onAuthStateChanged(async e=>{if(!Ds()){if(e&&e.uid!==Ee){try{const t=await W.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(e.uid).get();if(t.exists){const a=t.data()||{};if(a.isActive===!1){if(We(),typeof window.detachAllAdminListenersBeforeSignOut=="function")try{window.detachAllAdminListenersBeforeSignOut()}catch{}else{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}}await Ve.signOut();return}const s={uid:e.uid,name:a.name||e.email,email:a.email||e.email,role:a.role||je.CASHIER,permissions:a.permissions||null,isActive:!0};if(ft(s),s.role===je.CASHIER){He(()=>import("./module-pos-Bnzlk-Xf.js").then(i=>i.X),__vite__mapDeps([4,1,2,3,5,6]),import.meta.url).then(i=>{typeof i.setCashierSession=="function"&&i.setCashierSession(s)}).catch(()=>{}),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();return}await Ke(),window.isAdm=!0,window.__localIsAdm=!0,xt(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();let r=document.getElementById("view-admin-login");r&&!r.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu());return}}catch{}if(We(),typeof window.detachAllAdminListenersBeforeSignOut=="function")try{window.detachAllAdminListenersBeforeSignOut()}catch{}else{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}}await Ve.signOut();return}if(e&&e.uid===Ee){ft({uid:Ee,name:"Owner Toko",email:e.email,role:je.OWNER,isActive:!0});try{sessionStorage.setItem("pos_cashier_session",JSON.stringify({uid:Ee,name:"Owner Toko",email:e.email,role:je.OWNER}))}catch{}await Ke(),await $s(),Is(),window.isAdm=!0,window.__localIsAdm=!0,xt(),typeof window.updatePOSHeaderIcon=="function"?window.updatePOSHeaderIcon():typeof window.initPOSAuth=="function"&&window.initPOSAuth();let t=document.getElementById("view-admin-login");t&&!t.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu(),showToast("Sesi Owner Dipulihkan! Selamat Datang."))}else{if(Ls(),localStorage.removeItem("freshmart_admin_session_id"),We(),window.isAdm=!1,window.__localIsAdm=!1,xs(),typeof window.detachAllAdminListenersBeforeSignOut=="function")try{window.detachAllAdminListenersBeforeSignOut()}catch{}else{if(typeof window.detachActiveShiftListener=="function")try{window.detachActiveShiftListener()}catch{}if(typeof window.detachPOSHistoryListener=="function")try{window.detachPOSHistoryListener()}catch{}}typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()}}})});window.el=l;window.show=pe;window.hide=C;window.toggleCls=ie;window.setIn=ae;window.setH=ue;window.setV=Ie;window.getV=xe;window.esc=w;window.fixD=it;window.fCur=k;window.fAccounting=ta;window.sL=Je;window.ssL=Ue;window.defaultFbC=lt;window.fbC=lt;window.FIREBASE_CONFIG=lt;window.defApp=aa;window.ADMIN_UID=Ee;window.sLoad=he;window.hLoad=V;window.sanitizeCart=hs;window.initNativeMobileEngine=At;window.triggerHaptic=sa;window.checkAndEnforceSubscriptionLockout=gs;window.renderSubscriptionNoticeInCMS=ks;window.openRenewalModal=ys;window.closeRenewalModal=vs;window.verifyAndApplyLicenseKey=Ps;const M=(e,t,a)=>{try{Object.defineProperty(window,e,{get:t,set:a,configurable:!0})}catch{}};M("GAS_UPLOAD_URL",()=>yt,e=>{yt=e});M("confirmCb",()=>ra,e=>{za(e)});M("appData",()=>f,e=>{ia(e)});M("cart",()=>O,e=>{vt(e)});M("wishlist",()=>na,e=>{oa(e)});M("myOrders",()=>U,e=>{qe(e)});M("cust",()=>c,e=>{Pt(e)});M("currentMember",()=>D,e=>{Qe(e)});M("selectedReward",()=>Ce,e=>{Le(e)});M("memberCheckTimer",()=>la,e=>{Ja(e)});M("aCat",()=>Xe,e=>{Tt(e)});M("aBrand",()=>Ze,e=>{Mt(e)});M("sQ",()=>ca,e=>{da(e)});M("cSort",()=>ma,e=>{pa(e)});M("cView",()=>fa,e=>{ua(e)});M("cPage",()=>wa,e=>{nt(e)});M("iPP",()=>xa,e=>{ba(e)});M("cTab",()=>ha,e=>{Qa(e)});M("aSq",()=>ga,e=>{Za(e)});M("eId",()=>ka,e=>{Xa(e)});M("cProd",()=>va,e=>{ya(e)});M("cVar",()=>Sa,e=>{Pa(e)});M("tVars",()=>Ta,e=>{Ya(e)});M("tWhol",()=>Ma,e=>{es(e)});M("tSpec",()=>Aa,e=>{ts(e)});M("cQty",()=>$a,e=>{Da(e)});M("oMods",()=>Se,e=>{Ia(e)});M("aOrdLst",()=>Fa,e=>{La(e)});M("aCustLst",()=>Ra,e=>{Ca(e)});M("aRevLst",()=>Ea,e=>{Oa(e)});M("gOrds",()=>ja,e=>{_a(e)});M("gReviews",()=>Ua,e=>{Ba(e)});M("cVOrd",()=>Ha,e=>{Na(e)});M("vouch",()=>u,e=>{ye(e)});M("toastT",()=>Ga,e=>{as(e)});M("isSaving",()=>rt,e=>{Y(e)});M("reviewFilterMode",()=>qa,e=>{Ka(e)});M("lastReportPeriod",()=>Wa,e=>{Va(e)});
