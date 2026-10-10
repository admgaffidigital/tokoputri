const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/module-admin-X4BdD0OJ.js","assets/module-print-ZZAQkdEQ.js","assets/vendor-firebase-core-D2OF5R23.js","assets/vendor-firebase-db-BIUZcnOd.js","assets/module-pos-Dn18FYRz.js","assets/module-member-RI4QgE6w.js","assets/module-faq-CpiysInO.js","assets/vendor-sortable-DzmX_rHT.js"])))=>i.map(i=>d[i]);
import{a as f,g as ye,d as c,e as n,aQ as k,j as Me,h as C,a3 as ce,c as N,f as w,a1 as re,b as ge,i as b,aa as Xt,a9 as ea,y as Le,s as xe,U as pt,aM as at,ah as Ve,V as be,l as Pe,n as de,p as I,q as Q,t as H,aR as Ye,w as st,ag as Rt,G as Be,aS as Bt,x as Ce,k as D,m as ut,aj as ta,B as Ct,$ as mt,H as aa,Z as sa,o as Ee,v as Fe,r as Se,ak as De,af as Ie,aC as jt,av as bt,aE as Ot,ax as rt,as as ra,aT as oa,aw as ot,aU as ia,X as na,aV as la,aW as da,an as ca,aI as pa,aK as ua,aJ as ma,aX as St,aY as _t,_ as Je,A as Xe,P as Ne,F as et,R as Ge,Q as Tt,a2 as ba,aL as ft,aN as fa,aZ as xa,a_ as ga,a$ as wa,b0 as ha,ai as ka,b1 as va,aF as ya,ay as Pa,aG as Sa,aA as Ta,aH as Ma,aB as $a,at as Aa,b2 as Da,au as La,b3 as Ea,b4 as Fa,b5 as Ia,ar as Ra,al as Ba,aq as Ca,am as ja,b6 as Oa,b7 as _a,b8 as Ka,ap as Ua,ao as Na,b9 as Ha,J as Ga,I as qa,L as Wa,K as Va,N as za,M as Ja,a0 as Qa,u as Za,ad as Ya,a6 as Xa,Y as es,W as ts,ba as as,a8 as ss,a7 as rs,S as os,O as is,bb as ns,bc as ls,T as ds,ae as cs,bd as ps,be as us,bf as ms,bg as bs,bh as fs}from"./module-print-ZZAQkdEQ.js";import{f as je}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import{p as xs}from"./vendor-utils-DqNA57iZ.js";import{g as Kt,w as gs,x as Mt,h as ws,y as hs,z as ks,A as vs,u as ys,B as Ps,e as Ut,C as Ss,f as Nt,D as Ts,E as Ms,v as $s,F as As,G as Ds,H as $t,a as At,d as Ls,I as Es,J as Fs,K as Is,L as Rs,M as Bs,N as Cs,O as js,P as Os}from"./module-pos-Dn18FYRz.js";import{G as _s,a as Ht,u as Ks}from"./module-member-RI4QgE6w.js";import{i as Us,a as Ns,b as Hs,d as Gs}from"./module-admin-X4BdD0OJ.js";import{a as it,c as qs}from"./module-faq-CpiysInO.js";import"./vendor-sortable-DzmX_rHT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const Ws=()=>{const e=n("toggle-droppoint"),t=n("droppoint-form");if(!(!e||!t))if(e.checked)t.classList.remove("hidden");else{t.classList.add("hidden"),c.dropPoint=null;const a=n("dp-location-status");a&&a.classList.add("hidden");const s=n("btn-dp-location");n("text-dp-location"),s&&(s.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>')}},Vs=()=>{if(!navigator.geolocation){typeof window.showToast=="function"&&window.showToast("GPS tidak didukung");return}const e=n("btn-dp-location");e&&(e.innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i> Mengambil GPS...'),navigator.geolocation.getCurrentPosition(t=>{c.dropPoint||(c.dropPoint={}),c.dropPoint.lat=t.coords.latitude,c.dropPoint.lng=t.coords.longitude;const a=n("dp-location-status");a&&a.classList.remove("hidden"),e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">GPS Berhasil! Tap untuk Update</span>'),typeof window.showToast=="function"&&window.showToast("GPS Lokasi Tujuan Berhasil!")},()=>{e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>'),typeof window.showToast=="function"&&window.showToast("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})},Gt=e=>{if(!e||e.trim().length<5)return;const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){c.dropPoint||(c.dropPoint={}),c.dropPoint.lat=parseFloat(a.lat),c.dropPoint.lng=parseFloat(a.lng);const s=n("dp-location-status");s&&s.classList.remove("hidden"),typeof window.showToast=="function"&&window.showToast("Koordinat Lokasi Tujuan berhasil!")}},zs=async()=>{try{const e=await navigator.clipboard.readText(),t=n("dp-maps-input");t&&(t.value=e,Gt(e))}catch{typeof window.showToast=="function"&&window.showToast("Gagal membaca clipboard")}},Js=()=>{if(f.store.isDeliveryEnabled===!1&&f.store.isPickupEnabled===!1){typeof window.showToast=="function"&&window.showToast("Toko tutup!");return}const e=ye("cust-name"),t=(document.querySelector('input[name="delivery-method"]:checked')||{}).value;if(!e||!t){typeof window.showToast=="function"&&window.showToast("Lengkapi form nama!");return}let a=ye("cust-wa").replace(/\D/g,"");if(!a||a.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp wajib diisi! (min. 9 digit)");return}if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),c.name=e,c.deliveryMethod=t,c.note=ye("cust-note"),c.wa=a,t==="delivery"){if(c.address=ye("cust-address"),!c.lat||!c.lng){const i=n("cust-maps-input")?.value;i&&typeof window.handleCustomerMapsInput=="function"&&window.handleCustomerMapsInput(i)}if(!c.address||!c.lat||!c.lng){typeof window.showToast=="function"&&window.showToast("Alamat & GPS wajib!");return}const s=typeof window.getDist=="function"?window.getDist:()=>0;c.distance=s(parseFloat(f.store.lat||0),parseFloat(f.store.lng||0),c.lat,c.lng)||0;const r=n("toggle-droppoint");if(r&&r.checked){let i=ye("dp-receiver-name").trim(),d=ye("dp-receiver-wa").replace(/\D/g,""),l=ye("dp-address").trim();if(!i){typeof window.showToast=="function"&&window.showToast("Nama penerima di lokasi tujuan wajib diisi!");return}if(!d||d.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WA penerima di lokasi tujuan wajib diisi (min. 9 digit)!");return}if(!l){typeof window.showToast=="function"&&window.showToast("Alamat lokasi tujuan wajib diisi!");return}if(!c.dropPoint||!c.dropPoint.lat||!c.dropPoint.lng){typeof window.showToast=="function"&&window.showToast("GPS / Koordinat lokasi tujuan wajib diisi untuk kalkulasi ongkir!");return}d.startsWith("0")?d="62"+d.substring(1):d.startsWith("62")||(d="62"+d),c.dropPoint.name=i,c.dropPoint.wa=d,c.dropPoint.address=l,c.distance=s(parseFloat(f.store.lat||0),parseFloat(f.store.lng||0),c.dropPoint.lat,c.dropPoint.lng)||0}else c.dropPoint=null}else c.address="Ambil di Toko",c.distance=0,c.dropPoint=null;k&&k.type&&k.type.includes("shipping")&&t!=="delivery"&&Me(null),n("voucher-input")&&!k&&(n("voucher-input").value="",C("voucher-msg-container")),typeof window.changeView=="function"&&window.changeView("view-payment")},xt=()=>{ce("address-container","hidden",(document.querySelector('input[name="delivery-method"]:checked')||{}).value==="pickup")},qt=()=>{const e=n("tnc-checkbox"),t=n("btn-process-order");!e||!t||(e.checked?t.classList.remove("btn-disabled"):t.classList.add("btn-disabled"))},Wt=()=>{if(!N.length){typeof window.showToast=="function"&&window.showToast("Keranjang belanja kosong!"),typeof window.changeView=="function"&&window.changeView("view-catalog",!0);return}if(!c.name){typeof window.showToast=="function"&&window.showToast("Lengkapi data pengiriman terlebih dahulu!"),typeof window.changeView=="function"&&window.changeView("view-checkout",!0);return}const e=typeof window.getEffP=="function"?window.getEffP:p=>p.price||0,t=N.reduce((p,F)=>p+(parseFloat(e(F))||0)*(parseFloat(F.qty)||0),0);let a=0,s=0,r=0;if(c.deliveryMethod==="delivery"&&(a=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(f.store.costPerKm)||0)/500)*500),k&&(k.minPurchase&&parseFloat(k.minPurchase)>0&&t<parseFloat(k.minPurchase)?(Me(null),C("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast(`Voucher dibatalkan (min. belanja ${w(k.minPurchase)})`)):k.targetProduct&&!N.some(p=>p.id===parseInt(k.targetProduct))&&(Me(null),C("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast("Voucher dibatalkan (produk khusus dihapus)"))),k){let p=t;if(k.targetProduct&&k.targetProduct!==""){const F=parseInt(k.targetProduct);p=N.filter(G=>G.id===F).reduce((G,j)=>G+(parseFloat(e(j))||0)*(parseFloat(j.qty)||0),0)}if(k.type==="shipping_free")s=a;else if(k.type==="shipping_flat")s=parseFloat(k.value)||0;else if(k.type==="percent"){let F=p*((parseFloat(k.value)||0)/100);k.maxDiscount&&parseFloat(k.maxDiscount)>0&&(F=Math.min(F,parseFloat(k.maxDiscount))),r=F}else r=parseFloat(k.value)||0,r=Math.min(r,p)}const o=(f.store.freeShippingMinSpendEnabled===!0||f.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(f.store.freeShippingMinSpendAmount)||0)>0&&t>=(parseFloat(f.store.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery";o&&(s=a),s=Math.min(s,a),r=Math.min(r,t);const i=Math.max(0,t-r+(a-s)),l=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(i),u=l.ppnAmount,g=i+l.grandTotalAdd;re("summary-subtotal",w(t)),ce("summary-shipping-row","hidden",c.deliveryMethod!=="delivery");const A=n("summary-discount-row");if(A)if(r>0||s>0){A.classList.remove("hidden");let p="";r>0&&(p+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Promo</p><p class="text-[13px] font-bold text-rose-500">-${w(r)}</p></div>`),s>0&&(p+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">${o?"Gratis Ongkir (Promo Belanja)":"Diskon Ongkir"}</p><p class="text-[13px] font-bold text-rose-500">-${w(s)}</p></div>`),A.innerHTML=p}else A.classList.add("hidden");c.deliveryMethod==="delivery"&&(re("summary-shipping",w(a)),re("summary-distance",`(${c.distance.toFixed(1)}km)`)),re("summary-total",w(g)),n("btn-total-preview")&&re("btn-total-preview",w(g));const y=n("summary-ppn-row");if(y)if(l.ppnEnabled&&(u>0||l.ppnShowZero||l.ppnRate===0)){y.classList.remove("hidden");const F=l.ppnRate!==void 0?`${l.ppnRate}%`:"11%",Z=l.ppnLabel||(l.ppnType==="inclusive"?`Termasuk PPN (${F})`:`PPN (${F})`);re("summary-ppn-label",Z),l.ppnType==="inclusive"?re("summary-ppn",w(u)):re("summary-ppn",u>0?`+${w(u)}`:w(0))}else y.classList.add("hidden");re("payment-cust-name",c.name||"-"),n("payment-cust-wa")&&(n("payment-cust-wa").textContent=c.wa?"+"+c.wa:"-"),c.dropPoint&&c.dropPoint.lat?re("payment-cust-method",`Kirim ke Lokasi Berbeda (${c.distance.toFixed(1)}km dari Toko)`):re("payment-cust-method",c.deliveryMethod==="delivery"?`Dikirim (${c.distance.toFixed(1)}km)`:"Ambil di Toko"),re("payment-cust-address",c.address||"-");const T=n("payment-droppoint-info");if(T)if(c.dropPoint&&c.dropPoint.lat&&c.dropPoint.name){T.classList.remove("hidden"),re("payment-dp-name",c.dropPoint.name||"-");const p=n("payment-dp-wa");p&&(p.textContent=c.dropPoint.wa?"+"+c.dropPoint.wa:"-"),re("payment-dp-address",c.dropPoint.address||"-")}else T.classList.add("hidden");ge("payment-items-preview",N.map(p=>{const F=p.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${b(p.variantName)}</span>`:"",Z=p.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${b(p.poTime)}</span>`:"",G=!!(p.img&&typeof p.img=="string"&&p.img.trim()&&!Xt(p.img)),j=ea(p,{size:"thumb"});return`
        <div class="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
            <div class="flex items-center gap-3.5 min-w-0">
                <div class="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0 overflow-hidden flex items-center justify-center">
                    ${G?`<img loading="lazy" src="${b(p.img)}" alt="${b(p.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${j}</div>`:j}
                </div>
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate mb-1" title="${b(p.name)}">${b(p.name)}</p>
                    ${p.variantName||p.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${F}
                        ${Z}
                    </div>`:""}
                    <p class="text-[11px] text-[var(--color-primary)] font-bold">${parseFloat(p.qty)} ${b(p.unit||"pcs")} x ${w(e(p))}</p>
                </div>
            </div>
            <div class="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap ml-3 shrink-0">${w(e(p)*parseFloat(p.qty))}</div>
        </div>`}).join("")+(Le?`<div class="flex justify-between items-center bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] p-4 rounded-2xl border border-[var(--color-primary)]/30 shadow-sm min-w-0"><div class="flex items-center gap-3.5 min-w-0"><div class="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div><div class="min-w-0"><p class="text-sm font-bold text-[var(--color-primary)] truncate">${b(Le.name)}</p><p class="text-[11px] text-[var(--color-primary)] font-bold mt-1"><i class="fa-solid fa-star mr-1"></i>Tukar ${Le.pointsCost} Poin (Gratis)</p></div></div><button type="button" onclick="if(typeof deselectReward==='function') deselectReward(); rPay();" class="text-[10px] font-bold text-rose-500 uppercase shrink-0 ml-3">Batal</button></div>`:"")),c.note?(re("payment-note-text",`"${b(c.note)}"`),xe("payment-note-preview")):C("payment-note-preview"),ge("dynamic-banks-container",f.banks?.length?f.banks.map(p=>`<div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Bank ${b(p.bankName)}</p><p class="text-lg font-bold text-[var(--color-primary)] tracking-wide">${b(p.bankAccount)}</p><p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1.5">a.n <span class="font-bold text-slate-700 dark:text-white">${b(p.bankOwner)}</span></p></div>`).join(""):'<div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 p-4 rounded-2xl text-center"><p class="text-sm text-rose-500 dark:text-rose-400 font-bold">Rekening belum diatur.</p></div>');const B=n("payment-option-cashier"),V=n("payment-option-cod");if(B&&V){if(c.deliveryMethod==="pickup"){if(xe("payment-option-cashier"),C("payment-option-cod"),(document.querySelector('input[name="payment"]:checked')||{}).value==="cod"){const p=document.querySelector('input[value="cashier"]');p&&(p.checked=!0)}}else{C("payment-option-cashier"),xe("payment-option-cod");const p=(document.querySelector('input[name="payment"]:checked')||{}).value;if(p==="cashier"||!p){const F=document.querySelector('input[value="cod"]');F&&(F.checked=!0)}}typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()}const R=n("tnc-checkbox");R&&(R.checked=!1,qt())},Qs=async()=>{if(!n("tnc-checkbox").checked||pt)return;if(window.isAdm){typeof window.showToast=="function"&&window.showToast("Sesi Pengelola Aktif. Silakan keluar akun untuk membuat pesanan online.");return}const e=at("freshmart_last_order");if(e&&Date.now()-parseInt(e)<6e4){typeof window.showToast=="function"&&window.showToast("Pesanan sebelumnya sedang kami proses. Mohon beri jeda 1 menit sebelum memesan kembali.");return}const t=typeof window.getEffP=="function"?window.getEffP:o=>o.price||0,a=typeof window.getEffHpp=="function"?window.getEffHpp:()=>0,s=typeof window.getEffPoin=="function"?window.getEffPoin:()=>0;let r=!1;if(N.forEach(o=>{const i=f.products.find(l=>l.id===o.id);if(!i)return;const d=o.variantName?((i.variants||[]).find(l=>l.name===o.variantName)||{}).price??i.price:i.price;d!==void 0&&Math.abs(o.price-d)>1&&(o.price=d,r=!0),o.poin=s(o)}),r){Ve("freshmart_cart",JSON.stringify(N)),typeof window.renderCart=="function"&&window.renderCart(),Wt(),typeof window.showToast=="function"&&window.showToast("Katalog harga telah diperbarui. Mohon periksa kembali rincian belanja Anda.");return}be(!0),Pe("Memproses Pesanan Anda...");try{const o=N.reduce((x,h)=>x+(parseFloat(t(h))||0)*(parseFloat(h.qty)||0),0);let i=0,d=0,l=0;c.deliveryMethod==="delivery"&&(i=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(f.store.costPerKm)||0)/500)*500);const u=f.store.useStock===!0||f.store.useStock==="true";if(u)for(const x of N){const h=f.products.find(M=>M.id===x.id);if(!h||!!(h.poTime&&String(h.poTime).trim()))continue;const E=parseFloat(x.qty)||0;if(x.variantName){const M=(h.variants||[]).find(pe=>pe.name===x.variantName),_=M?M.stock!=null&&M.stock!==""?M.stock:M.stok!=null&&M.stok!==""?M.stok:null:null,Y=_!=null&&!isNaN(parseFloat(_))?parseFloat(_):0;if(Y<E){be(!1),de(),typeof window.showToast=="function"&&window.showToast(`Persediaan ${x.name} (${x.variantName}) tidak mencukupi (tersisa ${Y} unit).`);return}}else{const M=h.stock!=null&&h.stock!==""?h.stock:h.stok!=null&&h.stok!==""?h.stok:null,_=M!=null&&!isNaN(parseFloat(M))?parseFloat(M):0;if(_<E){be(!1),de(),typeof window.showToast=="function"&&window.showToast(`Persediaan ${x.name} tidak mencukupi (tersisa ${_} unit).`);return}}}if(k){let x=o;if(k.targetProduct&&k.targetProduct!==""){const h=parseInt(k.targetProduct);x=N.filter(E=>E.id===h).reduce((E,M)=>E+(parseFloat(t(M))||0)*(parseFloat(M.qty)||0),0)}if(k.minPurchase&&parseFloat(k.minPurchase)>0&&o<parseFloat(k.minPurchase))Me(null);else if(k.targetProduct&&k.targetProduct!==""&&x===0)Me(null);else if(k.type&&k.type.includes("shipping")&&c.deliveryMethod!=="delivery")Me(null);else if(k.type==="shipping_free")d=i;else if(k.type==="shipping_flat")d=parseFloat(k.value)||0;else if(k.type==="percent"){let h=x*((parseFloat(k.value)||0)/100);k.maxDiscount&&parseFloat(k.maxDiscount)>0&&(h=Math.min(h,parseFloat(k.maxDiscount))),l=h}else l=parseFloat(k.value)||0,l=Math.min(l,x)}const g=(f.store.freeShippingMinSpendEnabled===!0||f.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(f.store.freeShippingMinSpendAmount)||0)>0&&o>=(parseFloat(f.store.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery";g&&(d=i),d=Math.min(d,i),l=Math.min(l,o);const A=Math.max(0,o-l+(i-d)),T=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(A),B=T.ppnAmount,V=T.dppAmount,R=A+T.grandTotalAdd,p=(document.querySelector('input[name="payment"]:checked')||{}).value,F=parseFloat(document.getElementById("paylater-dp-input")?.value)||0,Z=p==="transfer"||p==="qris"||p==="tempo"||p==="paylater"&&F>0,G=window.buktiGDriveUploaded&&window.buktiPaymentUrl&&!window.buktiPaymentUrl.startsWith("data:");if(Z&&!G){if(be(!1),de(),!window.buktiPaymentFile){typeof window.showToast=="function"&&window.showToast("Mohon lampirkan foto struk / bukti pembayaran terlebih dahulu.");return}typeof window.showToast=="function"&&window.showToast("Sedang menyelesaikan unggahan bukti transaksi. Mohon tunggu...");return}const j="ORD-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase();if(window.buktiPaymentFile&&!window.buktiGDriveUploaded)try{Pe("Mengunggah Bukti Pembayaran...");const x=await window.uploadBuktiToFirebase(window.buktiPaymentFile,j);if(x&&!x.startsWith("data:"))window.buktiPaymentUrl=x,window.buktiGDriveUploaded=!0;else{be(!1),de(),typeof window.showToast=="function"&&window.showToast("Gagal mengunggah berkas bukti. Silakan pilih kembali foto bukti transfer Anda.");return}Pe("Memproses Pesanan Anda...")}catch{be(!1),de(),typeof window.showToast=="function"&&window.showToast("Koneksi unggah terganggu. Silakan periksa jaringan internet dan coba kembali.");return}const m={orderId:j,timestamp:je.firestore.FieldValue.serverTimestamp(),dateString:new Date().toISOString(),customer:c,isDropPoint:!!(c.dropPoint&&c.dropPoint.lat&&c.dropPoint.name),dropPoint:c.dropPoint&&c.dropPoint.lat&&c.dropPoint.name?{...c.dropPoint}:null,items:N.map(x=>({...x,qty:parseFloat(x.qty),effectivePrice:t(x),poTime:x.poTime||"",hpp:a(x),poin:s(x)})),payment:{method:p,subtotal:o,shippingCost:i,shippingDiscount:d,productDiscount:l,ppnAmount:B,dppAmount:V,ppnRate:T.ppnEnabled?T.ppnRate:0,ppnType:T.ppnEnabled?T.ppnType:"exclusive",ppnEnabled:!!T.ppnEnabled,ppnShowZero:!!T.ppnShowZero,ppnLabel:T.ppnLabel||"",taxNpwp:f.store?.taxNpwp||f.taxSettings?.npwp||"",grandTotal:R,isFreeShippingPromo:g||!1},status:"Baru",buktiPayment:window.buktiPaymentUrl||null};if(p==="tempo"){if(!c.wa){be(!1),de(),typeof window.showToast=="function"&&window.showToast("Pembayaran Cash Tempo hanya untuk Member Resmi terdaftar!");return}const x=document.getElementById("tempo-dp-input");let h=x&&parseFloat(x.value)||0;h>R&&(h=R),m.payment.dp=h,m.payment.tempoDp=h,m.payment.tempoBalance=Math.max(0,R-h),m.payment.tempoDueDate=Date.now()+30*24*60*60*1e3,m.payment.paymentStatus=R-h<=0?"lunas":"hutang"}if(p==="paylater"){if(!c.wa||!I||!(I.paylaterActive===!0||I.paylaterActive==="true")){be(!1),de(),typeof window.showToast=="function"&&window.showToast("Fitur Putri PayLater belum aktif untuk nomor Anda!");return}const x=parseFloat(I.paylaterLimit)||0,h=Math.max(0,parseFloat(I.paylaterUsed)||0),ie=Math.max(0,x-h),E=document.getElementById("paylater-dp-input");let M=E&&parseFloat(E.value)||0;if(R>ie&&M<R-ie){be(!1),de(),typeof window.showToast=="function"&&window.showToast("Limit PayLater tidak cukup! Wajib bayar DP minimal "+w(R-ie));return}const _=Math.min(ie,Math.max(0,R-M));m.payment.method="tempo",m.payment.subMethod="paylater",m.payment.isPaylater=!0,m.payment.paylaterUsed=_,m.payment.dp=M,m.payment.tempoDp=M;const Y=I?.paylaterDueDay||5,pe=window.selectedCheckoutPaylaterTenor||window.currentPaylaterBreakdown?.tenorKey||"30d",fe=Kt(),ee=gs(_,pe,{...fe,dueDay:Y}),te=ee.months,ke=ee.totalAdminFee,X=ee.totalServiceFee,ne=ee.totalPerMonth,U=ee.schedule;m.payment.paylaterTenor=pe,m.payment.paylaterMonths=te,m.payment.paylaterAdminFee=ke,m.payment.paylaterServiceFee=X,m.payment.paylaterMonthlyInstallment=ne,m.payment.paylaterSchedule=U;const le=ee.grandTotal;m.payment.tempoBalance=le;const S=U.length>0?U[U.length-1].dueDate:Date.now()+te*30*24*60*60*1e3;if(m.payment.tempoDueDate=S,m.payment.paymentStatus=le<=0?"lunas":"hutang",m.isTempo=!0,m.paylaterLimitTracked=!1,_>0){if(I){I.paylaterUsed=Math.max(0,parseFloat(I.paylaterUsed)||0)+_;try{localStorage.setItem("freshmart_current_member",JSON.stringify(I))}catch{}}const z=(I?.phone||c.wa||"").replace(/\D/g,""),$e=z.startsWith("0")?"62"+z.slice(1):z;try{await Q.collection("freshmart").doc("cms_data").collection("customers").doc($e).update({paylaterUsed:je.firestore.FieldValue.increment(_)}),m.paylaterLimitTracked=!0}catch(me){console.warn("[PayLater] Gagal update pemakaian limit di Firestore:",me.code||me.message||me)}}}const we=Q.collection("freshmart_orders").doc(j),L=typeof window.calculateCartPoints=="function"?window.calculateCartPoints(N,f.store):{totalPoints:0,directPoints:0,spendPoints:0},oe=L.totalPoints;m.pointsEarned=oe,m.pointsBreakdown={direct:L.directPoints,spend:L.spendPoints};const ae=Q.collection("freshmart").doc("cms_data"),se=(I?.phone||c.wa||"").replace(/\D/g,""),P=se?se.startsWith("0")?"62"+se.slice(1):se:null,ue=P?ae.collection("customers").doc(P):null,q=!!Le;let K=null;if(u){const x={};N.forEach(E=>{const M=E.id!=null?E.id.toString():null;if(!M)return;x[M]||(x[M]={main:0,variants:{}});const _=parseFloat(E.unitMultiplier)||1,Y=(parseFloat(E.qty)||0)*_;E.variantName?x[M].variants[E.variantName]=(x[M].variants[E.variantName]||0)+Y:x[M].main+=Y});const h=Object.keys(x),ie=h.map(E=>Q.collection("freshmart").doc("cms_data").collection("products").doc(E));await Q.runTransaction(async E=>{const M=await Promise.all(ie.map(X=>E.get(X))),_=ue?await E.get(ue):null,Y=!!(_&&_.exists),pe=Y&&q?Q.collection("freshmart").doc("cms_data").collection("rewards").doc(Le.id.toString()):null,fe=pe?await E.get(pe):null,ee=[];if(M.forEach((X,ne)=>{if(!X.exists)return;const U=X.data(),le=x[h[ne]];if(le.main>0){const S=parseFloat(U.stock!==void 0?U.stock:0);S<le.main&&ee.push(`${U.name} (sisa ${S})`)}Object.keys(le.variants).forEach(S=>{const z=(U.variants||[]).find(me=>me.name===S),$e=parseFloat(z&&z.stock!==void 0?z.stock:0);$e<le.variants[S]&&ee.push(`${U.name} (${S}, sisa ${$e})`)})}),ee.length)throw new Error("STOK_TIDAK_CUKUP: "+ee.join(", "));let te=null,ke=null;if(Y){const X=parseFloat(_.data().points)||0;let ne=X;if(q){if(!fe||!fe.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const U=fe.data();if(X<(parseFloat(U.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(U.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");te=(parseFloat(U.stock)||0)-1,ne-=parseFloat(U.pointsCost)||0,m.claimedReward={id:U.id,name:U.name,pointsCost:parseFloat(U.pointsCost)||0,status:"pending",note:""}}ne+=oe,ke=ne,m.pointsEarned=oe,m.customerPhone=c.wa,m.finalMemberPoints=ke,m.customerType="Member"}else{if(p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(q)throw new Error("MEMBER_TIDAK_DITEMUKAN");m.pointsEarned=0,m.pointsBreakdown={direct:0,spend:0},m.finalMemberPoints=null,m.customerType="Pelanggan Umum"}if(M.forEach((X,ne)=>{if(!X.exists)return;const U=h[ne],le=x[U],S=JSON.parse(JSON.stringify(X.data())),z={};le.main>0&&(Mt(S,le.main),z.stock=S.stock,S.storeStock!==void 0&&(z.storeStock=S.storeStock),S.warehouseStock!==void 0&&(z.warehouseStock=S.warehouseStock),Array.isArray(S.stockBatches)&&(z.stockBatches=S.stockBatches),S.hpp&&(z.hpp=S.hpp),S.stock===0&&(S.isActive="false",z.isActive="false"),S.totalSold=(parseFloat(S.totalSold)||0)+le.main,z.totalSold=S.totalSold),Object.keys(le.variants).length>0&&S.variants&&(Object.keys(le.variants).forEach(me=>{const Pt=le.variants[me];Mt(S,Pt,me);const Ue=(S.variants||[]).findIndex(Yt=>Yt.name===me);Ue>-1&&(S.variants[Ue].stock===0&&(S.variants[Ue].isActive=!1),S.variants[Ue].totalSold=(parseFloat(S.variants[Ue].totalSold)||0)+Pt)}),z.variants=S.variants,z.stock=S.stock,S.storeStock!==void 0&&(z.storeStock=S.storeStock),S.warehouseStock!==void 0&&(z.warehouseStock=S.warehouseStock),Array.isArray(S.stockBatches)&&(z.stockBatches=S.stockBatches));const $e=f.products.findIndex(me=>me.id.toString()===U);$e>-1&&(f.products[$e]=S),E.update(ie[ne],z)}),E.set(we,m),Y&&ue&&ke!==null){const X=_.data().name||c.name||"Pelanggan Setia";m.customer&&(m.customer.name=X);const ne={points:ke,name:X,lastOrderAt:Date.now()};E.set(ue,ne,{merge:!0}),K=ke}te!==null&&E.set(pe,{stock:te},{merge:!0}),E.update(ae,{lastUpdate:je.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:h})}),f.lastUpdate=(parseInt(at("freshmart_last_update"))||f.lastUpdate||0)+1,Ve("freshmart_last_update",f.lastUpdate.toString()),Ve("freshmart_products",JSON.stringify(f.products))}else if(ue)await Q.runTransaction(async x=>{const h=await x.get(ue),ie=h.exists,E=ie&&q?Q.collection("freshmart").doc("cms_data").collection("rewards").doc(Le.id.toString()):null,M=E?await x.get(E):null;let _=null,Y=null;if(ie){const pe=parseFloat(h.data().points)||0;let fe=pe;if(q){if(!M||!M.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const te=M.data();if(pe<(parseFloat(te.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(te.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");_=(parseFloat(te.stock)||0)-1,fe-=parseFloat(te.pointsCost)||0,m.claimedReward={id:te.id,name:te.name,pointsCost:parseFloat(te.pointsCost)||0,status:"pending",note:""}}fe+=oe,Y=fe,m.pointsEarned=oe,m.customerPhone=c.wa,m.finalMemberPoints=Y,m.customerType="Member";const ee=h.data().name||c.name||"Pelanggan Setia";m.customer&&(m.customer.name=ee),x.set(ue,{points:Y,name:ee,lastOrderAt:Date.now()},{merge:!0}),K=Y,_!==null&&x.set(E,{stock:_},{merge:!0})}else{if(p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(q)throw new Error("MEMBER_TIDAK_DITEMUKAN");m.pointsEarned=0,m.pointsBreakdown={direct:0,spend:0},m.finalMemberPoints=null,m.customerType="Pelanggan Umum"}x.set(we,m)});else{if(m.pointsEarned=0,m.pointsBreakdown={direct:0,spend:0},m.finalMemberPoints=null,m.customerType="Pelanggan Umum",p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");await we.set(m)}let he=!1;if((m.items||[]).forEach(x=>{typeof window.recordFlashSaleSale=="function"&&window.recordFlashSaleSale(x.id,x.variantName,x.qty)&&(he=!0)}),he&&Array.isArray(f.flashSales))try{await Q.collection("freshmart").doc("cms_data").update({flashSales:f.flashSales,lastUpdate:je.firestore.FieldValue.increment(1)})}catch(x){console.warn("[Checkout] Gagal update kuota Flash Sale:",x)}const ve={orderId:j,date:m.dateString||new Date().toISOString(),dateString:m.dateString||new Date().toISOString(),total:R,itemCount:N.reduce((x,h)=>x+parseFloat(h.qty),0),status:"Baru",pointsEarned:m.pointsEarned||0,claimedReward:m.claimedReward||null,finalMemberPoints:K,customerType:m.customerType||"Pelanggan Umum",customer:m.customer||c,items:m.items||[],payment:m.payment||{},isTempo:!!m.isTempo};H.unshift(ve),Ye(H),window.currentCustomerOrder=m,window.lastPrintedOrder=m;try{localStorage.setItem("freshmart_my_orders",JSON.stringify(H)),localStorage.setItem("freshmart_last_order",Date.now().toString())}catch{}if(typeof analytics<"u"&&analytics.logEvent("purchase",{transaction_id:j,value:R,currency:"IDR"}),c.wa&&K!==null){const x={id:c.wa,phone:c.wa,name:c.name||"Pelanggan Setia",points:K,paylaterActive:I?I.paylaterActive===!0||I.paylaterActive==="true":!1,paylaterLimit:I&&parseFloat(I.paylaterLimit)||0,paylaterUsed:I?Math.max(0,parseFloat(I.paylaterUsed)||0):0,paylaterDueDay:I&&I.paylaterDueDay||5};st(x);try{localStorage.setItem("freshmart_current_member",JSON.stringify(x)),localStorage.setItem("freshmart_member_wa",c.wa)}catch{}typeof window.invalidateMemberCache=="function"&&window.invalidateMemberCache(c.wa)}else{st(null);try{localStorage.removeItem("freshmart_current_member")}catch{}}m.claimedReward&&K!==null?typeof window.showToast=="function"&&window.showToast(`Hadiah eksklusif "${m.claimedReward.name}" berhasil ditukarkan! Sisa poin reward Anda: ${K}`):K!==null&&oe>0?typeof window.showToast=="function"&&window.showToast(`Pesanan Anda berhasil dikonfirmasi! (+${oe} Poin Member terkumpul)`):typeof window.showToast=="function"&&window.showToast("Pesanan Anda berhasil dikonfirmasi dan siap diproses!"),setTimeout(()=>{Rt([]),Be("cust-name",""),Be("cust-address",""),Be("cust-maps-input",""),Be("cust-note",""),Be("cust-wa",""),window.buktiPaymentUrl=null,window.buktiPaymentFile=null,window.buktiGDriveUploaded=!1;const x=n("bukti-preview-wrap"),h=n("bukti-placeholder");x&&x.classList.add("hidden"),h&&h.classList.remove("hidden"),C("bukti-uploading"),C("bukti-success"),C("bukti-gdrive-error");const ie=n("bukti-file-input");ie&&(ie.value=""),Bt({name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:"",dropPoint:null}),Me(null),Ce(null);const E=n("toggle-droppoint"),M=n("droppoint-form");E&&(E.checked=!1),M&&M.classList.add("hidden");const _=n("dp-location-status");_&&_.classList.add("hidden");const Y=n("payment-droppoint-info");Y&&Y.classList.add("hidden");const pe=n("dp-receiver-name");pe&&(pe.value="");const fe=n("dp-receiver-wa");fe&&(fe.value="");const ee=n("dp-address");ee&&(ee.value="");const te=n("dp-maps-input");te&&(te.value="");const ke=n("btn-dp-location");ke&&(ke.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan Titik GPS Lokasi Proyek</span>');const X=n("member-status-banner");X&&C(X),C("payment-option-tempo"),n("voucher-input")&&(n("voucher-input").value=""),C("voucher-msg-container"),C("location-status"),n("btn-location")&&xe("btn-location");const ne=document.querySelector('input[name="delivery-method"][value="delivery"]');ne&&(ne.checked=!0,xt());const U=document.querySelector('input[name="payment"][value="transfer"]');U&&(U.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()),typeof window.updCart=="function"&&window.updCart(),typeof window.renderCart=="function"&&window.renderCart();try{window.history.replaceState({view:"view-catalog"},"",window.location.pathname)}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog",!0),typeof window.showToast=="function"&&window.showToast("Pesanan Anda Berhasil Dibuat!")},2e3)}catch(o){const i=o.message||"Error";i.startsWith("STOK_TIDAK_CUKUP:")?typeof window.showToast=="function"&&window.showToast("Ketersediaan stok baru saja diperbarui: "+i.replace("STOK_TIDAK_CUKUP: ","")):i==="TEMPO_KHUSUS_MEMBER"?typeof window.showToast=="function"&&window.showToast("Fasilitas Cash Tempo khusus untuk Rekanan & Member VIP resmi terdaftar."):i==="POIN_TIDAK_CUKUP"?(typeof window.showToast=="function"&&window.showToast("Poin reward Anda belum mencukupi untuk penukaran hadiah ini."),Ce(null)):i==="STOK_HADIAH_HABIS"?(typeof window.showToast=="function"&&window.showToast("Persediaan hadiah yang dipilih baru saja habis. Silakan pilih hadiah lainnya."),Ce(null)):i==="HADIAH_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Hadiah yang dipilih sudah tidak aktif. Silakan pilih hadiah pengganti."),Ce(null)):i==="MEMBER_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Data member tidak terverifikasi. Penukaran hadiah dibatalkan."),Ce(null)):typeof window.showToast=="function"&&window.showToast(o.code==="resource-exhausted"?"Layanan server sedang padat. Mohon coba sesaat lagi.":"Gagal memproses pesanan: "+i)}finally{be(!1),de()}};window.validateAndGoToPayment=Js;window.toggleDeliveryMethod=xt;window.toggleDropPoint=Ws;window.getDPLocation=Vs;window.handleDPMapsInput=Gt;window.pasteDPMapsInput=zs;window.toggleOrderButton=qt;window.rPay=Wt;window.processOrder=Qs;window.getLocation=()=>{if(!navigator.geolocation)return D("GPS tidak didukung");n("btn-location").innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i>',navigator.geolocation.getCurrentPosition(e=>{c.lat=e.coords.latitude,c.lng=e.coords.longitude,C("btn-location"),xe("location-status"),n("location-status").classList.add("flex"),D("GPS Didapatkan")},e=>{n("btn-location").innerHTML='<i class="fa-solid fa-location-crosshairs text-[var(--color-primary)]"></i> Set GPS Maps',D("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})};window.handleCustomerMapsInput=e=>{const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){c.lat=parseFloat(a.lat),c.lng=parseFloat(a.lng),C("btn-location"),xe("location-status");const s=n("location-status");return s&&(s.classList.add("flex"),s.innerHTML=`
                <i class="fa-solid fa-circle-check shrink-0 text-lg primary-text"></i>
                <div class="min-w-0">
                    <span class="text-[10px] font-bold uppercase leading-tight tracking-wide primary-text block">Koordinat Berhasil Disematkan!</span>
                    <span class="text-[9px] text-slate-500 dark:text-slate-400 font-mono">${a.lat}, ${a.lng}</span>
                </div>
            `),D("Titik lokasi Maps pembeli berhasil disematkan!"),typeof window.rPay=="function"&&window.rPay(),!0}return!1};window.pasteCustomerMapsInput=async()=>{const e=n("cust-maps-input");if(e){try{if(navigator.clipboard&&navigator.clipboard.readText){const t=await navigator.clipboard.readText();if(t){e.value=t,window.handleCustomerMapsInput(t)||D("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Maps");return}}}catch{}e.focus(),D("Silakan tekan Ctrl+V atau tahan untuk menempel")}};const Zs=()=>{const e=f.store.isDeliveryEnabled!==!1,t=f.store.isPickupEnabled!==!1;ce("delivery-option-container","hidden",!e),ce("pickup-option-container","hidden",!t),ce("no-delivery-warning","hidden",e||t),ce("delivery-methods-grid","hidden",!(e||t));const a=n("btn-checkout-next");if(a)if(e||t){a.removeAttribute("disabled"),a.classList.remove("opacity-50");const r=(c.deliveryMethod||"delivery")==="pickup"&&t?"pickup":e?"delivery":"pickup",o=document.querySelector(`input[value="${r}"]`);o&&(o.checked=!0)}else a.setAttribute("disabled","true"),a.classList.add("opacity-50");xt()};window.rChck=Zs;window.buktiPaymentUrl=null;window.buktiPaymentFile=null;window.buktiGDriveUploaded=!1;window.compressImageForUpload=(e,t=1600,a=.82)=>new Promise(s=>{const r=new FileReader;r.readAsDataURL(e),r.onload=o=>{const i=new Image;i.onload=()=>{let{width:d,height:l}=i;(d>t||l>t)&&(d>l?(l=Math.round(l*t/d),d=t):(d=Math.round(d*t/l),l=t));const u=document.createElement("canvas");u.width=d,u.height=l,u.getContext("2d").drawImage(i,0,0,d,l),u.toBlob(g=>{if(!g)return s(e);s(new File([g],e.name,{type:"image/jpeg",lastModified:Date.now()}))},"image/jpeg",a)},i.onerror=()=>s(e),i.src=o.target.result},r.onerror=()=>s(e)});window._doSingleGDriveUpload=async(e,t)=>{const a=new FileReader;return new Promise(s=>{a.readAsDataURL(e),a.onload=async()=>{try{const r=a.result.split(",")[1],o=(e.name||"bukti.jpg").replace(/[^a-zA-Z0-9.]/g,"_"),i={name:"BUKTI_"+t+"_"+Date.now()+"_"+o,mimeType:e.type||"image/jpeg",data:r,token:_s},d=await fetch(Ht,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"});if(!d.ok)return console.warn("GDrive upload HTTP error:",d.status),s(null);const l=await d.text();let u;try{u=JSON.parse(l)}catch{return console.warn("GDrive response parse error"),s(null)}u&&u.status==="success"&&u.url?s(ut(u.url)):(console.warn("GDrive upload gagal:",u&&u.message),s(null))}catch(r){console.warn("GDrive upload exception:",r),s(null)}},a.onerror=()=>s(null)})};window.uploadBuktiToGDrive=async(e,t)=>{if(!e)return null;const a=n("bukti-uploading-text");a&&(a.textContent="Mengupload bukti ke Google Drive...");try{return await Ks(e,"BUKTI_"+(t||Date.now()))}catch(s){return console.warn("Gagal upload bukti ke GDrive via GAS:",s),null}};window.handleBuktiUpload=async e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/"))return D("Hanya file gambar yang diizinkan!");if(t.size>5*1024*1024)return D("Ukuran gambar max 5MB!");window.buktiPaymentFile=t,window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const a=new FileReader;a.onload=i=>{const d=n("bukti-preview-img"),l=n("bukti-preview-wrap"),u=n("bukti-placeholder");d&&(d.src=i.target.result),l&&l.classList.remove("hidden"),u&&u.classList.add("hidden")},a.readAsDataURL(t),C("bukti-success"),C("bukti-gdrive-error");const s=n("bukti-uploading");s&&(s.classList.remove("hidden"),s.style.display="flex");const r="TEMP_"+Date.now().toString(36).toUpperCase(),o=await window.uploadBuktiToGDrive(t,r);if(C("bukti-uploading"),o){window.buktiPaymentUrl=o,window.buktiGDriveUploaded=!0;const i=n("bukti-success"),d=n("bukti-success-text"),l=n("bukti-storage-info");d&&(d.textContent="Bukti berhasil disimpan!"),l&&(l.textContent="(tersimpan di Google Drive)"),i&&(i.classList.remove("hidden"),i.style.display="flex"),C("bukti-gdrive-error")}else{window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const i=n("bukti-gdrive-error");i&&(i.classList.remove("hidden"),i.style.display="flex"),C("bukti-success"),D("Upload ke Google Drive gagal. Coba lagi!")}};window.retryBuktiUpload=async()=>{if(!window.buktiPaymentFile)return D("Pilih gambar terlebih dahulu!");C("bukti-gdrive-error"),C("bukti-success");const e=n("bukti-uploading");e&&(e.classList.remove("hidden"),e.style.display="flex");const t="RETRY_"+Date.now().toString(36).toUpperCase(),a=await window.uploadBuktiToGDrive(window.buktiPaymentFile,t);if(C("bukti-uploading"),a){window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0;const s=n("bukti-success"),r=n("bukti-success-text"),o=n("bukti-storage-info");r&&(r.textContent="Bukti berhasil disimpan!"),o&&(o.textContent="(tersimpan di Google Drive)"),s&&(s.classList.remove("hidden"),s.style.display="flex"),D("Upload berhasil!")}else{const s=n("bukti-gdrive-error");s&&(s.classList.remove("hidden"),s.style.display="flex"),D("Masih gagal. Periksa koneksi internet Anda.")}};window.uploadBuktiToFirebase=async(e,t)=>{if(window.buktiGDriveUploaded&&window.buktiPaymentUrl)return window.buktiPaymentUrl;if(!e)return null;const a=await window.uploadBuktiToGDrive(e,t);return a&&(window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0),a};window.togglePaymentDetails=()=>{const e=(document.querySelector('input[name="payment"]:checked')||{}).value;if(ce("detail-transfer","hidden",e!=="transfer"),ce("detail-qris","hidden",e!=="qris"),ce("detail-cashier","hidden",e!=="cashier"),ce("detail-cod","hidden",e!=="cod"),ce("detail-tempo","hidden",e!=="tempo"),ce("detail-paylater","hidden",e!=="paylater"),e==="tempo"&&window.calculateTempoBalance(),e==="paylater"&&window.calculatePaylaterBalance?.(),e==="qris"){const s=n("dyn-qris-img");if(s){const r=f.payment?.qrisUrl||f.store?.qrisUrl||f.payment?.qris||f.store?.qris||f.qrisUrl||"";r&&(s.src=ut(r))}}const t=parseFloat(document.getElementById("paylater-dp-input")?.value)||0,a=e==="transfer"||e==="qris"||e==="tempo"||e==="paylater"&&t>0;ce("bukti-payment-section","hidden",!a)};window.selectedCheckoutPaylaterTenor=window.selectedCheckoutPaylaterTenor||"30d";window.selectCheckoutPaylaterTenor=e=>{window.selectedCheckoutPaylaterTenor=e,typeof window.calculatePaylaterBalance=="function"&&window.calculatePaylaterBalance()};window.calculatePaylaterBalance=()=>{const e=I?Math.max(0,parseFloat(I.paylaterLimit)||0):0,t=I?Math.max(0,parseFloat(I.paylaterUsed)||0):0,a=Math.max(0,e-t),s=I?.paylaterDueDay||5,r=document.getElementById("paylater-limit-display"),o=document.getElementById("paylater-due-display"),i=document.getElementById("paylater-status-box"),d=document.getElementById("paylater-excess-dp-container"),l=document.getElementById("paylater-dp-input"),u=document.getElementById("paylater-tenor-chips-grid"),g=document.getElementById("paylater-tenor-breakdown-box");r&&(r.textContent=w(a)),o&&(o.textContent="Tgl "+s+" Tiap Bulan");let A=N.reduce((q,K)=>q+(parseFloat(getEffP(K))||0)*(parseFloat(K.qty)||0),0),y=0,T=0,B=0;if(c.deliveryMethod==="delivery"&&(y=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(f.store.costPerKm)||0)/500)*500),typeof vouch<"u"&&vouch){let q=A;if(vouch.targetProduct&&vouch.targetProduct!==""){const K=parseInt(vouch.targetProduct);q=N.filter(ve=>ve.id===K).reduce((ve,x)=>ve+(parseFloat(getEffP(x))||0)*(parseFloat(x.qty)||0),0)}if(vouch.type==="shipping_free")B=y;else if(vouch.type==="shipping_flat")B=parseFloat(vouch.value)||0;else if(vouch.type==="percent"){let K=q*((parseFloat(vouch.value)||0)/100);vouch.maxDiscount&&parseFloat(vouch.maxDiscount)>0&&(K=Math.min(K,parseFloat(vouch.maxDiscount))),T=K}else T=parseFloat(vouch.value)||0,T=Math.min(T,q)}(f.store?.freeShippingMinSpendEnabled===!0||f.store?.freeShippingMinSpendEnabled==="true")&&(parseFloat(f.store?.freeShippingMinSpendAmount)||0)>0&&A>=(parseFloat(f.store?.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery"&&(B=y),B=Math.min(B,y),T=Math.min(T,A);let R=Math.max(0,A-T),p=Math.max(0,y-B);const F=typeof window.calcTaxDetails=="function"?window.calcTaxDetails(R+p):{grandTotalAdd:0};let Z=0;window.useMemberPoints&&I&&(Z=Math.min(R+p+F.grandTotalAdd,parseFloat(I.points)||0));let G=Math.max(0,R+p+(F.grandTotalAdd||0)-Z),j=0;const m=G>a;if(m){const q=G-a;j=parseFloat(l?.value)||0,j<q&&(j=q,l&&(l.value=j)),d&&d.classList.remove("hidden")}else d&&d.classList.add("hidden"),l&&(l.value=0),j=0;const we=Math.min(a,Math.max(0,G-j)),L=Kt(),ae=ws(we>0?we:G,{...L,dueDay:s}).results;let se=window.selectedCheckoutPaylaterTenor||"30d";(!ae[se]||!ae[se].enabled)&&(se=Object.keys(ae).find(K=>ae[K].enabled)||"30d",window.selectedCheckoutPaylaterTenor=se);const P=ae[se];if(window.currentPaylaterBreakdown=P,u){const q=["30d","2m","3m"];u.innerHTML=q.map(K=>{const he=ae[K];if(!he||!he.enabled)return"";const ve=K===se;return`
                <button type="button" onclick="window.selectCheckoutPaylaterTenor('${K}')" 
                        class="p-2 sm:p-2.5 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 min-h-[46px] select-none touch-manipulation active:scale-95 ${ve?"border-2 text-[var(--color-primary)] shadow-sm":"border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600"}"
                        style="${ve?"border-color: var(--color-primary); background: rgba(var(--color-primary-rgb), 0.1); box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.15);":""}">
                    <span class="text-[9.5px] font-black uppercase tracking-wider block">${b(he.shortLabel)}</span>
                    <span class="text-[11px] sm:text-xs font-black block" ${ve?'style="color: var(--color-primary);"':""}>${w(he.totalPerMonth)}<span class="text-[8px] font-normal text-slate-400">/bln</span></span>
                </button>
            `}).filter(Boolean).join("")}if(g&&P&&(g.innerHTML=`
            <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 shadow-2xs space-y-1.5 text-xs" style="border-left: 3.5px solid var(--color-primary);">
                <div class="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-700">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                        <i class="fa-solid fa-receipt" style="color: var(--color-primary);"></i> Rincian Tenor ${b(P.label)}
                    </span>
                    <span class="text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                        <i class="fa-solid fa-shield-halved text-[9px] text-emerald-500"></i> Transparan
                    </span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span>Pokok Tagihan (${P.months} bulan)</span>
                    <span class="font-bold text-slate-800 dark:text-slate-200">${w(P.pokokPerMonth)} / bln</span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span class="flex items-center gap-1">Biaya Admin ${P.adminFeeType==="percent"&&P.adminFeeValue>0?`(${P.adminFeeValue}%)`:""}</span>
                    <span class="font-bold ${P.adminFeePerMonth===0?"text-emerald-600 dark:text-emerald-400":"text-slate-800 dark:text-slate-200"}">
                        ${P.adminFeePerMonth===0?"Rp 0 (Gratis)":`${w(P.adminFeePerMonth)} / bln`}
                    </span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span class="flex items-center gap-1">Biaya Penanganan ${P.serviceFeeType==="percent"&&P.serviceFeeValue>0?`(${P.serviceFeeValue}%)`:""}</span>
                    <span class="font-bold ${P.serviceFeePerMonth===0?"text-emerald-600 dark:text-emerald-400":"text-slate-800 dark:text-slate-200"}">
                        ${P.serviceFeePerMonth===0?"Rp 0 (Gratis)":`${w(P.serviceFeePerMonth)} / bln`}
                    </span>
                </div>
                <div class="pt-2 mt-1.5 border-t border-dashed border-slate-200 dark:border-slate-700 flex justify-between items-baseline">
                    <span class="text-[11px] font-black uppercase text-slate-800 dark:text-white">Tagihan per Bulan:</span>
                    <span class="text-sm font-black font-mono" style="color: var(--color-primary);">${w(P.totalPerMonth)} <span class="text-[10px] font-bold text-slate-400">/ bulan</span></span>
                </div>
                <div class="flex justify-between items-center text-[10px] text-slate-500 pt-0.5">
                    <span>Total Tagihan Seluruhnya:</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300">${w(P.grandTotal)}</span>
                </div>
            </div>
        `),!m)i&&(i.innerHTML='<div class="flex items-center gap-2 font-extrabold mb-1" style="color: var(--color-primary);"><i class="fa-solid fa-circle-check text-emerald-500 text-sm"></i><span>Limit PayLater Anda Sangat Cukup!</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Total belanja <b>'+w(G)+"</b> otomatis dipotong dari limit PayLater Anda. Anda <b>tidak perlu bayar sekarang</b> dan tanpa uang muka (DP Rp 0). Angsuran dicicil sesuai tenor "+b(P.label)+" ("+w(P.totalPerMonth)+"/bln) mulai tgl "+s+" bulan depan.</p>");else{const q=G-a;i&&(i.innerHTML='<div class="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-extrabold mb-1"><i class="fa-solid fa-triangle-exclamation text-amber-500 text-sm"></i><span>Total Belanja Melebihi Sisa Limit PayLater</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Sisa limit Anda <b>'+w(a)+"</b> akan digunakan maksimal untuk cicilan "+b(P.label)+" ("+w(P.totalPerMonth)+"/bln). Selisih kekurangan sebesar <b>"+w(q)+"</b> wajib dibayar sebagai DP via Transfer/QRIS.</p>")}const ue=(parseFloat(l?.value)||0)>0;ce("bukti-payment-section","hidden",!ue)};window.calculateTempoBalance=()=>{const e=document.getElementById("tempo-dp-input");let t=parseFloat(e?.value)||0;t<0&&(t=0,e&&(e.value=0));let a=N.reduce((B,V)=>B+(parseFloat(getEffP(V))||0)*(parseFloat(V.qty)||0),0),s=0,r=0,o=0;if(c.deliveryMethod==="delivery"&&(s=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(f.store.costPerKm)||0)/500)*500),vouch){let B=a;if(vouch.targetProduct&&vouch.targetProduct!==""){const V=parseInt(vouch.targetProduct);B=N.filter(p=>p.id===V).reduce((p,F)=>p+(parseFloat(getEffP(F))||0)*(parseFloat(F.qty)||0),0)}if(vouch.type==="shipping_free")o=s;else if(vouch.type==="shipping_flat")o=parseFloat(vouch.value)||0;else if(vouch.type==="percent"){let V=B*((parseFloat(vouch.value)||0)/100);vouch.maxDiscount&&parseFloat(vouch.maxDiscount)>0&&(V=Math.min(V,parseFloat(vouch.maxDiscount))),r=V}else r=parseFloat(vouch.value)||0,r=Math.min(r,B)}(f.store.freeShippingMinSpendEnabled===!0||f.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(f.store.freeShippingMinSpendAmount)||0)>0&&a>=(parseFloat(f.store.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery"&&(o=s),o=Math.min(o,s),r=Math.min(r,a);let d=Math.max(0,a-r),l=Math.max(0,s-o);const u=window.calcTaxDetails(d+l);let g=0;window.useMemberPoints&&I&&(g=Math.min(d+l+u.grandTotalAdd,parseFloat(I.points)||0));let A=d+l+u.grandTotalAdd-g;t>A&&(t=A,e&&(e.value=t));let y=A-t;const T=document.getElementById("tempo-balance-display");T&&(T.innerText=w(y))};let Oe="paint",_e="storefront",O={mode:"room",length:4,width:3,height:3,openings:4,ceiling:!0,coats:2,directArea:30,includeSealer:!0},W={length:4,width:3,tileSize:"40x40",wastePercent:10,includeAdhesive:!0,includeGrout:!0},J={length:6,height:3,sides:1,openings:2,brickType:"hebel10",includeMortar:!0},v={roofType:"spandek",mode:"gable",length:8,width:6,slopeAngle:20,overhang:.6,sheetLength:4,directArea:60,includeRidge:!0,includeFasteners:!0};const Dt={"30x30":{name:"30 x 30 cm",coveragePerBox:1,piecesPerBox:11},"40x40":{name:"40 x 40 cm",coveragePerBox:.96,piecesPerBox:6},"50x50":{name:"50 x 50 cm",coveragePerBox:1,piecesPerBox:4},"60x60":{name:"60 x 60 cm",coveragePerBox:1.44,piecesPerBox:4},"80x80":{name:"80 x 80 cm",coveragePerBox:1.92,piecesPerBox:3}},Qe={spandek:{id:"spandek",name:"Atap Spandek Galvalum (Zincalume)",shortName:"Spandek Galvalum",effectiveWidth:.75,standardLengths:[{val:3,label:"3.0 Meter"},{val:4,label:"4.0 Meter"},{val:5,label:"5.0 Meter"},{val:6,label:"6.0 Meter"}],defaultLength:4,fastenerName:"Baut Roofing SDS 12-14x50mm",fastenerPackaging:"Box (100 Pcs)",fastenerBoxSize:100,ridgeUnit:"Batang Nok Spandek (1m)"},seng:{id:"seng",name:"Seng Gelombang BJLS / Galvalum",shortName:"Seng Gelombang",effectiveWidth:.75,standardLengths:[{val:1.5,label:"1.5 Meter (5 Kaki)"},{val:1.8,label:"1.8 Meter (6 Kaki)"},{val:2.1,label:"2.1 Meter (7 Kaki)"},{val:2.4,label:"2.4 Meter (8 Kaki)"},{val:3,label:"3.0 Meter (10 Kaki)"}],defaultLength:2.1,fastenerName:"Paku Payung Seng Galvanis",fastenerPackaging:"Kg (isi ~70 Pcs/kg)",fastenerBoxSize:70,ridgeUnit:"Batang Nok Seng BJLS (1m)"},asbes:{id:"asbes",name:"Asbes Gelombang (Fiber Semen)",shortName:"Asbes Gelombang",effectiveWidth:.95,standardLengths:[{val:1.5,label:"1.5 Meter (5 Kaki)"},{val:1.8,label:"1.8 Meter (6 Kaki)"},{val:2.1,label:"2.1 Meter (7 Kaki)"},{val:2.4,label:"2.4 Meter (8 Kaki)"},{val:3,label:"3.0 Meter (10 Kaki)"}],defaultLength:2.1,fastenerName:"Paku Asbes Khusus Karet",fastenerPackaging:"Pack (isi 50 Pcs)",fastenerBoxSize:50,ridgeUnit:"Pasang Nok Asbes Stel"}},gt=()=>{let e=0,t=0;if(O.mode==="room"){const y=2*(parseFloat(O.length)+parseFloat(O.width))*parseFloat(O.height);e=Math.max(0,y-(parseFloat(O.openings)||0)),O.ceiling&&(t=parseFloat(O.length)*parseFloat(O.width))}else e=parseFloat(O.directArea)||0;const a=e+t,s=parseInt(O.coats)||2,o=parseFloat((a*s/11).toFixed(2)),i=Math.floor(o/20),d=o%20,l=Math.ceil(d/2.5),u=O.includeSealer?parseFloat((a/12).toFixed(2)):0,g=O.includeSealer?Math.ceil(u/2.5):0;return{totalWallArea:parseFloat(e.toFixed(2)),ceilingArea:parseFloat(t.toFixed(2)),grandArea:parseFloat(a.toFixed(2)),coats:s,totalVolumeLiters:o,pails:i,gallons:l,sealerVolume:u,sealerGallons:g}},wt=()=>{const e=parseFloat(W.length)*parseFloat(W.width),t=1+parseFloat(W.wastePercent)/100,a=parseFloat((e*t).toFixed(2)),s=Dt[W.tileSize]||Dt["40x40"],r=Math.ceil(a/s.coveragePerBox),o=W.includeAdhesive?Math.ceil(a/8):0,i=W.includeGrout?Math.ceil(a/4):0;return{rawArea:parseFloat(e.toFixed(2)),wastePercent:W.wastePercent,totalAreaWithWaste:a,spec:s,totalBoxes:r,adhesiveBags:o,groutBags:i}},ht=()=>{const e=parseFloat(J.length)*parseFloat(J.height)*parseInt(J.sides||1),t=Math.max(0,parseFloat((e-(parseFloat(J.openings)||0)).toFixed(2)));let a=0,s=0,r=0,o=0,i=0;return J.brickType==="hebel10"?(a=Math.ceil(t*8.33),s=parseFloat((t/10).toFixed(2)),r=Math.ceil(t/10)):J.brickType==="hebel75"?(a=Math.ceil(t*8.33),s=parseFloat((t/13.3).toFixed(2)),r=Math.ceil(t/13)):(a=Math.ceil(t*70),i=Math.ceil(t*.45),o=parseFloat((t*.04).toFixed(2))),{rawWallArea:parseFloat(e.toFixed(2)),netArea:t,brickType:J.brickType,brickPcs:a,brickCubic:s,mortarBags:r,cementBags:i,sandCubic:o}},kt=()=>{const e=Qe[v.roofType]||Qe.spandek,t=e.effectiveWidth,a=parseFloat(v.sheetLength)||e.defaultLength;let s=0,r=0,o=0,i=0,d=0,l=0,u=0,g=0,A=0;const y=Math.max(5,Math.min(60,parseFloat(v.slopeAngle)||20)),T=y*Math.PI/180,B=Math.cos(T),V=Math.max(0,parseFloat(v.overhang)||0);if(v.mode==="gable"){const R=Math.max(1,parseFloat(v.length)||1),F=Math.max(1,parseFloat(v.width)||1)/2+V;if(r=parseFloat((F/B).toFixed(2)),o=parseFloat((R+2*V).toFixed(2)),s=parseFloat((2*(o*r)).toFixed(2)),i=Math.ceil(o/t),a>=r)d=1;else{const G=r-a,j=Math.max(.2,a-.2);d=1+Math.ceil(G/j)}l=i*d*2,v.includeRidge&&(u=Math.ceil(o/.9))}else if(v.mode==="monopitch"){const R=Math.max(1,parseFloat(v.length)||1),F=Math.max(1,parseFloat(v.width)||1)+V;r=parseFloat((F/B).toFixed(2));const Z=parseFloat((R+2*V).toFixed(2));if(s=parseFloat((Z*r).toFixed(2)),i=Math.ceil(Z/t),a>=r)d=1;else{const j=r-a,m=Math.max(.2,a-.2);d=1+Math.ceil(j/m)}l=i*d,u=0}else{s=Math.max(1,parseFloat(v.directArea)||1),r=0,o=0,i=0,d=0;const R=t*Math.max(.5,a-.2);l=Math.ceil(s*1.05/R),u=0}return v.includeFasteners&&(v.roofType==="spandek"?(g=Math.max(Math.ceil(s*5),l*8),A=Math.ceil(g/e.fastenerBoxSize)):v.roofType==="seng"?(g=l*8,A=Math.ceil(g/e.fastenerBoxSize)):(g=l*6,A=Math.ceil(g/e.fastenerBoxSize))),{roofType:v.roofType,mode:v.mode,spec:e,sheetLength:a,slopeAngle:y,slopeLength:r,ridgeLength:o,totalRoofArea:s,sheetsAcross:i,sheetsPerSlope:d,totalSheets:l,ridgePieces:u,fastenerPcs:g,fastenerPacks:A}},qe=e=>{const t=Array.isArray(f.products)?f.products:[];return e==="paint"?t.filter(a=>{if(!a||a.isActive===!1||a.isActive==="false")return!1;const s=`${a.name||""} ${a.category||""} ${a.subCategory||""}`.toLowerCase();return s.includes("cat")||s.includes("mowilex")||s.includes("dulux")||s.includes("avitex")||s.includes("no drop")||s.includes("plamir")||s.includes("alkali")||s.includes("sealer")}).slice(0,4):e==="tile"?t.filter(a=>{if(!a||a.isActive===!1||a.isActive==="false")return!1;const s=`${a.name||""} ${a.category||""} ${a.subCategory||""}`.toLowerCase();return s.includes("keramik")||s.includes("granit")||s.includes("tile")||s.includes("nat")||s.includes("perekat")}).slice(0,4):e==="brick"?t.filter(a=>{if(!a||a.isActive===!1||a.isActive==="false")return!1;const s=`${a.name||""} ${a.category||""} ${a.subCategory||""}`.toLowerCase();return s.includes("hebel")||s.includes("bata")||s.includes("mortar")||s.includes("semen")||s.includes("pasir")}).slice(0,4):e==="roof"?t.filter(a=>{if(!a||a.isActive===!1||a.isActive==="false")return!1;const s=`${a.name||""} ${a.category||""} ${a.subCategory||""}`.toLowerCase();return s.includes("spandek")||s.includes("spandex")||s.includes("seng")||s.includes("asbes")||s.includes("atap")||s.includes("zincalume")||s.includes("galvalum")||s.includes("roofing")||s.includes("paku payung")||s.includes("nok")||s.includes("bubungan")||s.includes("baja ringan")||s.includes("reng")}).slice(0,4):[]},Te=()=>{if(typeof document>"u")return;const e=n("modal-material-estimator-body");if(!e)return;let t="";if(Oe==="paint"){const a=gt(),s=qe("paint");t=`
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <!-- Kolom Kiri: Formulir Input Dimensi (5 Kolom Desktop) -->
            <div class="lg:col-span-5 space-y-4">
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
                    <div class="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                            <i class="fa-solid fa-paintbrush text-[var(--color-primary)]"></i> Parameter Dinding
                        </span>
                        <div class="inline-flex p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-700 text-[10px] font-bold">
                            <button type="button" onclick="window.setEstimatorPaintMode('room')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${O.mode==="room"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs":"text-slate-500"}">Ruangan</button>
                            <button type="button" onclick="window.setEstimatorPaintMode('area')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${O.mode==="area"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs":"text-slate-500"}">Luas M²</button>
                        </div>
                    </div>

                    ${O.mode==="room"?`
                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Ruang (m)</label>
                            <input type="number" step="0.5" min="1" max="100" value="${O.length}" oninput="window.updateEstimatorPaintField('length', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Lebar Ruang (m)</label>
                            <input type="number" step="0.5" min="1" max="100" value="${O.width}" oninput="window.updateEstimatorPaintField('width', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Tinggi Dinding (m)</label>
                            <input type="number" step="0.25" min="1" max="20" value="${O.height}" oninput="window.updateEstimatorPaintField('height', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase" title="Area pintu dan jendela yang tidak dicat">Pintu/Jendela (m²)</label>
                            <input type="number" step="0.5" min="0" max="50" value="${O.openings}" oninput="window.updateEstimatorPaintField('openings', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>
                    <div class="flex items-center justify-between pt-1">
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Cat Plafon Sekalian?</span>
                        <input type="checkbox" ${O.ceiling?"checked":""} onchange="window.updateEstimatorPaintField('ceiling', this.checked)"
                            class="w-4 h-4 rounded text-[var(--color-primary)] accent-[var(--color-primary)] cursor-pointer">
                    </div>
                    `:`
                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase">Total Luas Bidang Cat (m²)</label>
                        <input type="number" step="1" min="1" max="10000" value="${O.directArea}" oninput="window.updateEstimatorPaintField('directArea', this.value)"
                            class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                    `}

                    <!-- Layer Pengecatan -->
                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Jumlah Lapisan Pengecatan</label>
                        <div class="grid grid-cols-3 gap-2">
                            <button type="button" onclick="window.updateEstimatorPaintField('coats', 1)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${O.coats===1?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}">1x Lapis</button>
                            <button type="button" onclick="window.updateEstimatorPaintField('coats', 2)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${O.coats===2?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}">2x Rekomendasi</button>
                            <button type="button" onclick="window.updateEstimatorPaintField('coats', 3)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${O.coats===3?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}">3x Warna Gelap</button>
                        </div>
                    </div>

                    <div class="flex items-center justify-between pt-1">
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Termasuk Cat Dasar (Alkali)?</span>
                        <input type="checkbox" ${O.includeSealer?"checked":""} onchange="window.updateEstimatorPaintField('includeSealer', this.checked)"
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
                        <div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-xl text-amber-400 border border-slate-700 shrink-0">
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
                        ${s.map(r=>`
                        <div class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 flex items-center gap-2 shadow-2xs">
                            <div class="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 flex items-center justify-center text-xs">
                                ${r.img?`<img src="${b(r.img)}" class="w-full h-full object-cover">`:'<i class="fa-solid fa-paint-roller text-slate-400"></i>'}
                            </div>
                            <div class="min-w-0 flex-1">
                                <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">${b(r.name)}</p>
                                <p class="text-[10px] font-extrabold text-[var(--color-primary)]">${w(r.price)}</p>
                            </div>
                            <button type="button" onclick="window.addStoreProductFromEstimator('${r.id}')" class="btn-native-icon w-9 h-9 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-xs hover:opacity-95 active:scale-95 transition-all cursor-pointer shrink-0 shadow-2xs" style="box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);" title="Tambah ke Belanja">
                                <i class="fa-solid fa-plus text-xs"></i>
                            </button>
                        </div>
                        `).join("")}
                    </div>
                </div>
                `:""}
            </div>
        </div>`}else if(Oe==="tile"){const a=wt(),s=qe("tile");t=`
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
                            <input type="number" step="0.5" min="1" max="100" value="${W.length}" oninput="window.updateEstimatorTileField('length', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Lebar Lantai (m)</label>
                            <input type="number" step="0.5" min="1" max="100" value="${W.width}" oninput="window.updateEstimatorTileField('width', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>

                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Ukuran Keramik / Granit</label>
                        <select onchange="window.updateEstimatorTileField('tileSize', this.value)"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                            <option value="30x30" ${W.tileSize==="30x30"?"selected":""}>30 x 30 cm (1 Dus = 1.00 m² / 11 keping)</option>
                            <option value="40x40" ${W.tileSize==="40x40"?"selected":""}>40 x 40 cm (1 Dus = 0.96 m² / 6 keping)</option>
                            <option value="50x50" ${W.tileSize==="50x50"?"selected":""}>50 x 50 cm (1 Dus = 1.00 m² / 4 keping)</option>
                            <option value="60x60" ${W.tileSize==="60x60"?"selected":""}>60 x 60 cm (1 Dus = 1.44 m² / 4 keping)</option>
                            <option value="80x80" ${W.tileSize==="80x80"?"selected":""}>80 x 80 cm (1 Dus = 1.92 m² / 3 keping)</option>
                        </select>
                    </div>

                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Cadangan Potongan / Waste Factor</label>
                        <div class="grid grid-cols-3 gap-2">
                            <button type="button" onclick="window.updateEstimatorTileField('wastePercent', 5)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${W.wastePercent===5?"border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" style="${W.wastePercent===5?"background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);":""}">5% Minimal</button>
                            <button type="button" onclick="window.updateEstimatorTileField('wastePercent', 10)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${W.wastePercent===10?"border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" style="${W.wastePercent===10?"background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);":""}">10% Standar</button>
                            <button type="button" onclick="window.updateEstimatorTileField('wastePercent', 15)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${W.wastePercent===15?"border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" style="${W.wastePercent===15?"background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);":""}">15% Diagonal</button>
                        </div>
                    </div>

                    <div class="space-y-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Semen Perekat Keramik (Adhesive)?</span>
                            <input type="checkbox" ${W.includeAdhesive?"checked":""} onchange="window.updateEstimatorTileField('includeAdhesive', this.checked)"
                                class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Semen Pengisi Nat (Tile Grout)?</span>
                            <input type="checkbox" ${W.includeGrout?"checked":""} onchange="window.updateEstimatorTileField('includeGrout', this.checked)"
                                class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
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
                        <div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-xl text-indigo-300 border border-slate-700 shrink-0">
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
                        ${s.map(r=>`
                        <div class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 flex items-center gap-2 shadow-2xs">
                            <div class="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 flex items-center justify-center text-xs">
                                ${r.img?`<img src="${b(r.img)}" class="w-full h-full object-cover">`:'<i class="fa-solid fa-border-all text-slate-400"></i>'}
                            </div>
                            <div class="min-w-0 flex-1">
                                <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">${b(r.name)}</p>
                                <p class="text-[10px] font-extrabold text-[var(--color-primary)]">${w(r.price)}</p>
                            </div>
                            <button type="button" onclick="window.addStoreProductFromEstimator('${r.id}')" class="btn-native-icon w-9 h-9 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-xs hover:opacity-95 active:scale-95 transition-all cursor-pointer shrink-0 shadow-2xs" style="box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);" title="Tambah ke Belanja">
                                <i class="fa-solid fa-plus text-xs"></i>
                            </button>
                        </div>
                        `).join("")}
                    </div>
                </div>
                `:""}
            </div>
        </div>`}else if(Oe==="brick"){const a=ht(),s=qe("brick");t=`
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
                            <input type="number" step="0.5" min="1" max="200" value="${J.length}" oninput="window.updateEstimatorBrickField('length', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Tinggi Dinding (m)</label>
                            <input type="number" step="0.25" min="1" max="20" value="${J.height}" oninput="window.updateEstimatorBrickField('height', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Jumlah Sisi Tembok</label>
                            <input type="number" min="1" max="20" value="${J.sides}" oninput="window.updateEstimatorBrickField('sides', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Bukaan Pintu/Jendela (m²)</label>
                            <input type="number" step="0.5" min="0" max="50" value="${J.openings}" oninput="window.updateEstimatorBrickField('openings', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>

                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Pilihan Material Dinding</label>
                        <select onchange="window.updateEstimatorBrickField('brickType', this.value)"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                            <option value="hebel10" ${J.brickType==="hebel10"?"selected":""}>Bata Ringan / Hebel Tebal 10 cm (60x20x10)</option>
                            <option value="hebel75" ${J.brickType==="hebel75"?"selected":""}>Bata Ringan / Hebel Tebal 7.5 cm (60x20x7.5)</option>
                            <option value="redbrick" ${J.brickType==="redbrick"?"selected":""}>Bata Merah Bakar Standar</option>
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
                                ${J.brickType.startsWith("hebel")?`${a.brickPcs} Pcs (${a.brickCubic} m³)`:`${a.brickPcs} Buah Bata Merah`}
                            </h4>
                            <p class="text-xs text-amber-200 mt-1">Luas Dinding Bersih: <b>${a.netArea} m²</b></p>
                        </div>
                        <div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-xl text-amber-300 border border-slate-700 shrink-0">
                            <i class="fa-solid fa-trowel-bricks"></i>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-2.5 mt-4 pt-4 border-t border-white/15 relative z-10 text-xs">
                        <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                            <p class="text-[10px] text-slate-400 font-bold uppercase">Semen Perekat / Mortar</p>
                            <p class="text-sm font-black text-white mt-0.5">
                                ${J.brickType.startsWith("hebel")?`${a.mortarBags} Sak Mortar (40kg)`:`${a.cementBags} Sak Semen (50kg)`}
                            </p>
                        </div>
                        <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                            <p class="text-[10px] text-amber-300 font-bold uppercase">Pasir Pasang</p>
                            <p class="text-sm font-black text-amber-300 mt-0.5">
                                ${J.brickType.startsWith("hebel")?"Cukup Lem Mortar":`${a.sandCubic} m³ Pasir`}
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
                    <button type="button" onclick="window.addEstimatorToPOSCart('${J.brickType.startsWith("hebel")?"Bata Ringan Hebel (Estimasi)":"Bata Merah (Estimasi)"}', ${a.brickPcs}, 'pcs')" class="w-full py-3 px-4 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
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
                        ${s.map(r=>`
                        <div class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 flex items-center gap-2 shadow-2xs">
                            <div class="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 flex items-center justify-center text-xs">
                                ${r.img?`<img src="${b(r.img)}" class="w-full h-full object-cover">`:'<i class="fa-solid fa-cubes text-slate-400"></i>'}
                            </div>
                            <div class="min-w-0 flex-1">
                                <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">${b(r.name)}</p>
                                <p class="text-[10px] font-extrabold text-[var(--color-primary)]">${w(r.price)}</p>
                            </div>
                            <button type="button" onclick="window.addStoreProductFromEstimator('${r.id}')" class="btn-native-icon w-9 h-9 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-xs hover:opacity-95 active:scale-95 transition-all cursor-pointer shrink-0 shadow-2xs" style="box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);" title="Tambah ke Belanja">
                                <i class="fa-solid fa-plus text-xs"></i>
                            </button>
                        </div>
                        `).join("")}
                    </div>
                </div>
                `:""}
            </div>
        </div>`}else if(Oe==="roof"){const a=kt(),s=qe("roof");t=`
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <!-- Kolom Kiri: Input Dimensi & Spesifikasi Atap (5 Kolom Desktop) -->
            <div class="lg:col-span-5 space-y-4">
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
                    <!-- Header Parameter & Mode Atap -->
                    <div class="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                            <i class="fa-solid fa-house-chimney text-sky-500"></i> Parameter Bidang Atap
                        </span>
                        <div class="inline-flex p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-700 text-[10px] font-bold">
                            <button type="button" onclick="window.setEstimatorRoofMode('gable')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${v.mode==="gable"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs":"text-slate-500"}">Pelana</button>
                            <button type="button" onclick="window.setEstimatorRoofMode('monopitch')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${v.mode==="monopitch"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs":"text-slate-500"}">Kanopi</button>
                            <button type="button" onclick="window.setEstimatorRoofMode('area')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${v.mode==="area"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs":"text-slate-500"}">Luas M²</button>
                        </div>
                    </div>

                    <!-- Pilihan Jenis Material Atap (Spandek, Seng, Asbes) -->
                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Jenis Material Atap / Penutup</label>
                        <div class="grid grid-cols-3 gap-1.5">
                            <button type="button" onclick="window.setEstimatorRoofType('spandek')" class="py-2 px-1.5 rounded-xl text-[11px] font-extrabold transition-all border cursor-pointer text-center ${v.roofType==="spandek"?"border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}">
                                <i class="fa-solid fa-layer-group block text-xs mb-1 ${v.roofType==="spandek"?"text-sky-500":"text-slate-400"}"></i>
                                Spandek
                            </button>
                            <button type="button" onclick="window.setEstimatorRoofType('seng')" class="py-2 px-1.5 rounded-xl text-[11px] font-extrabold transition-all border cursor-pointer text-center ${v.roofType==="seng"?"border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}">
                                <i class="fa-solid fa-water block text-xs mb-1 ${v.roofType==="seng"?"text-amber-500":"text-slate-400"}"></i>
                                Seng
                            </button>
                            <button type="button" onclick="window.setEstimatorRoofType('asbes')" class="py-2 px-1.5 rounded-xl text-[11px] font-extrabold transition-all border cursor-pointer text-center ${v.roofType==="asbes"?"border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}">
                                <i class="fa-solid fa-bars-staggered block text-xs mb-1 ${v.roofType==="asbes"?"text-emerald-500":"text-slate-400"}"></i>
                                Asbes
                            </button>
                        </div>
                    </div>

                    <!-- Pilihan Panjang Lembar -->
                    <div>
                        <div class="flex items-center justify-between mb-1">
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Lembar Pilihan</label>
                            <span class="text-[10px] font-mono font-bold text-sky-600 dark:text-sky-400">Lebar Efektif: ${a.spec.effectiveWidth*100} cm</span>
                        </div>
                        <select onchange="window.updateEstimatorRoofField('sheetLength', this.value)"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                            ${a.spec.standardLengths.map(r=>`
                                <option value="${r.val}" ${parseFloat(v.sheetLength)===r.val?"selected":""}>${r.label}</option>
                            `).join("")}
                        </select>
                    </div>

                    ${v.mode!=="area"?`
                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">${v.mode==="gable"?"P. Bangunan (m)":"Lebar Kanopi (m)"}</label>
                            <input type="number" step="0.5" min="1" max="100" value="${v.length}" oninput="window.updateEstimatorRoofField('length', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">${v.mode==="gable"?"Bentang Lebar (m)":"P. Jatuh Air (m)"}</label>
                            <input type="number" step="0.5" min="1" max="100" value="${v.width}" oninput="window.updateEstimatorRoofField('width', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Sudut Miring (°)</label>
                            <input type="number" step="1" min="5" max="60" value="${v.slopeAngle}" oninput="window.updateEstimatorRoofField('slopeAngle', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase" title="Lebar cucuran atap keluar dinding">Overstek (m)</label>
                            <input type="number" step="0.1" min="0" max="3" value="${v.overhang}" oninput="window.updateEstimatorRoofField('overhang', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>

                    <!-- Preset Sudut Cepat -->
                    <div class="pt-0.5">
                        <label class="text-[9px] font-bold text-slate-400 uppercase mb-1 block">Preset Sudut Kemiringan</label>
                        <div class="grid grid-cols-4 gap-1.5">
                            ${[15,20,25,30].map(r=>`
                                <button type="button" onclick="window.updateEstimatorRoofField('slopeAngle', ${r})" class="py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer ${parseFloat(v.slopeAngle)===r?"bg-sky-50 dark:bg-sky-950/60 border-sky-400 text-sky-700 dark:text-sky-300":"bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500"}">${r}°</button>
                            `).join("")}
                        </div>
                    </div>
                    `:`
                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase">Total Luas Bidang Atap (m²)</label>
                        <input type="number" step="1" min="1" max="10000" value="${v.directArea}" oninput="window.updateEstimatorRoofField('directArea', this.value)"
                            class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                    `}

                    <!-- Checkboxes Nok & Pengencang -->
                    <div class="space-y-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                        ${v.mode==="gable"?`
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Sertakan Nok Bubungan Puncak?</span>
                            <input type="checkbox" ${v.includeRidge?"checked":""} onchange="window.updateEstimatorRoofField('includeRidge', this.checked)"
                                class="w-4 h-4 rounded text-sky-600 accent-sky-600 cursor-pointer">
                        </div>
                        `:""}
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Sertakan Baut / Paku?</span>
                            <input type="checkbox" ${v.includeFasteners?"checked":""} onchange="window.updateEstimatorRoofField('includeFasteners', this.checked)"
                                class="w-4 h-4 rounded text-sky-600 accent-sky-600 cursor-pointer">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Kolom Kanan: Hasil Kalkulasi Atap (7 Kolom Desktop) -->
            <div class="lg:col-span-7 space-y-4">
                <!-- Bento Result Card -->
                <div class="p-5 rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white shadow-xl border border-sky-900/60 relative overflow-hidden">
                    <div class="flex items-start justify-between gap-3 relative z-10">
                        <div>
                            <span class="text-[10px] font-black uppercase tracking-widest text-sky-400">Hasil Estimasi ${b(a.spec.shortName)}</span>
                            <h4 class="text-2xl sm:text-3xl font-black mt-1 tracking-tight text-white flex items-baseline gap-2">
                                <span>${a.totalSheets} Lembar</span>
                                <span class="text-sm font-bold text-sky-300">(${a.sheetLength} Meter)</span>
                            </h4>
                            <p class="text-xs text-sky-200/90 mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                                <span>Total Luas Atap: <b>${a.totalRoofArea} m²</b></span>
                                ${a.slopeLength>0?`<span>• Panjang Lereng: <b>${a.slopeLength} m</b></span>`:""}
                            </p>
                        </div>
                        <div class="w-12 h-12 rounded-2xl bg-slate-800/90 flex items-center justify-center text-xl text-sky-400 border border-sky-800/80 shrink-0">
                            <i class="fa-solid fa-roof-chimney"></i>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-white/15 relative z-10 text-xs">
                        <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                            <p class="text-[10px] text-slate-400 font-bold uppercase truncate" title="${b(a.spec.fastenerName)}">${b(a.spec.fastenerName.split(" ")[0])} / Pengencang</p>
                            <p class="text-sm font-black text-white mt-0.5">
                                ${a.fastenerPacks>0?`${a.fastenerPacks} ${a.spec.fastenerPackaging}`:"-"}
                            </p>
                            <p class="text-[10px] text-sky-300 font-semibold mt-0.5">${a.fastenerPcs} Pcs</p>
                        </div>
                        <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                            <p class="text-[10px] text-slate-400 font-bold uppercase">Nok Bubungan</p>
                            <p class="text-sm font-black text-white mt-0.5">
                                ${a.ridgePieces>0?`${a.ridgePieces} Batang`:a.mode==="monopitch"?"Tidak Perlu":"-"}
                            </p>
                            <p class="text-[10px] text-sky-300 font-semibold mt-0.5">${a.mode==="gable"?`Bentang ${a.ridgeLength}m`:"Kanopi 1 Sisi"}</p>
                        </div>
                        <div class="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-white/5 border border-white/10">
                            <p class="text-[10px] text-slate-400 font-bold uppercase">Susunan Lembar</p>
                            <p class="text-sm font-black text-sky-300 mt-0.5">
                                ${a.sheetsAcross>0?`${a.sheetsAcross} Kolom × ${a.sheetsPerSlope} Susun`:`${a.totalSheets} Lbr`}
                            </p>
                            <p class="text-[10px] text-slate-300 font-semibold mt-0.5">${a.mode==="gable"?"2 Sisi Miring":a.mode==="monopitch"?"1 Sisi Miring":"Hitungan Luas"}</p>
                        </div>
                    </div>

                    <!-- Panduan Teknis Lapangan -->
                    <div class="mt-3 p-2.5 rounded-xl bg-sky-950/70 border border-sky-800/60 text-[10px] text-sky-200 flex items-center gap-2">
                        <i class="fa-solid fa-circle-info text-sky-400 shrink-0"></i>
                        <span>Lebar efektif <b>${a.spec.effectiveWidth*100} cm</b> (overlap samping 1 gelombang). Overlap sambungan ujung: 20 cm.</span>
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
                    ${_e==="pos"?`
                    <button type="button" onclick="window.addEstimatorToPOSCart('${b(a.spec.shortName)} (Estimasi)', ${a.totalSheets}, 'lembar')" class="w-full py-3 px-4 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-cart-plus"></i> Masukkan ${a.totalSheets} Lembar ke Transaksi Kasir
                    </button>
                    `:""}
                </div>

                <!-- Rekomendasi Produk Terkait Toko -->
                ${s.length>0?`
                <div class="pt-2">
                    <p class="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                        <i class="fa-solid fa-tags text-sky-500"></i> Rekomendasi Atap, Seng &amp; Nok di Toko:
                    </p>
                    <div class="grid grid-cols-2 gap-2">
                        ${s.map(r=>`
                        <div class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 flex items-center gap-2 shadow-2xs">
                            <div class="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 flex items-center justify-center text-xs">
                                ${r.img?`<img src="${b(r.img)}" class="w-full h-full object-cover">`:'<i class="fa-solid fa-house-chimney text-slate-400"></i>'}
                            </div>
                            <div class="min-w-0 flex-1">
                                <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">${b(r.name)}</p>
                                <p class="text-[10px] font-extrabold text-[var(--color-primary)]">${w(r.price)}</p>
                            </div>
                            <button type="button" onclick="window.addStoreProductFromEstimator('${r.id}')" class="btn-native-icon w-9 h-9 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-xs hover:opacity-95 active:scale-95 transition-all cursor-pointer shrink-0 shadow-2xs" style="box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);" title="Tambah ke Belanja">
                                <i class="fa-solid fa-plus text-xs"></i>
                            </button>
                        </div>
                        `).join("")}
                    </div>
                </div>
                `:""}
            </div>
        </div>`}e.innerHTML=t,Ys()},Ys=()=>{["paint","tile","brick","roof"].forEach(t=>{const a=n(`estimator-tab-btn-${t}`);a&&(t===Oe?a.className="shrink-0 sm:flex-1 py-2 sm:py-2.5 px-3 sm:px-3.5 rounded-xl font-black text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer primary-bg text-white":a.className="shrink-0 sm:flex-1 py-2 sm:py-2.5 px-3 sm:px-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white")})},Xs=e=>{Oe=e,Te()},er=e=>{O.mode=e,Te()},tr=(e,t)=>{O[e]=t,Te()},ar=(e,t)=>{W[e]=t,Te()},sr=(e,t)=>{J[e]=t,Te()},rr=e=>{v.mode=e,Te()},or=e=>{v.roofType=e;const t=Qe[e]||Qe.spandek;t.standardLengths.some(s=>s.val===parseFloat(v.sheetLength))||(v.sheetLength=t.defaultLength),Te()},ir=(e,t)=>{v[e]=t,Te()},nr=e=>{let t="";const a=f.store?.name||"TOKO PUTRI";if(e==="paint"){const s=gt();t=`*ESTIMASI KEBUTUHAN CAT TEMBOK — ${a}*
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
Dihitung otomatis via Sistem Toko Putri`}else if(e==="tile"){const s=wt();t=`*ESTIMASI KEBUTUHAN KERAMIK / GRANIT — ${a}*
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
Dihitung otomatis via Sistem Toko Putri`}else if(e==="brick"){const s=ht();t=`*ESTIMASI PASANGAN DINDING — ${a}*
--------------------------------------
• Material Dinding: ${J.brickType.startsWith("hebel")?"Bata Ringan Hebel":"Bata Merah Bakar"}
• Luas Dinding Efektif: ${s.netArea} m²
--------------------------------------
*REKOMENDASI KEBUTUHAN:*
✓ Kebutuhan Bata: ${s.brickPcs} Pcs ${s.brickCubic>0?`(~${s.brickCubic} m³)`:""}
`+(s.mortarBags>0?`✓ Semen Mortar Thinbed: ${s.mortarBags} Sak (40kg)
`:"")+(s.cementBags>0?`✓ Semen Plester/Pasang: ${s.cementBags} Sak (50kg)
`:"")+(s.sandCubic>0?`✓ Pasir Pasang: ~${s.sandCubic} m³
`:"")+`--------------------------------------
Dihitung otomatis via Sistem Toko Putri`}else if(e==="roof"){const s=kt();t=`*ESTIMASI KEBUTUHAN ATAP & PENUTUP — ${a}*
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
Dihitung otomatis via Sistem Toko Putri`}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t).then(()=>{D("Rincian estimasi berhasil disalin ke clipboard!","success")}).catch(()=>{D("Gagal menyalin rincian.","warning")}):D("Clipboard browser tidak didukung.","warning")},lr=e=>{let t="";const a=f.store?.name||"Toko Putri",s=(f.store?.wa||"").replace(/[^0-9]/g,"");if(e==="paint"){const o=gt();t=`Halo ${a}, saya ingin konsultasi kebutuhan cat dinding:

• Luas Bidang Cat: ${o.grandArea} m² (${o.coats}x lapis)
• Estimasi Kebutuhan: ${o.pails>0?`${o.pails} Pail `:""}${o.gallons>0?`${o.gallons} Galon`:""} (${o.totalVolumeLiters} Liter)
`+(o.sealerGallons>0?`• Alkali Sealer: ${o.sealerGallons} Galon
`:"")+`
Mohon info ketersediaan stok & rekomendasi merk cat terbaik. Terima kasih!`}else if(e==="tile"){const o=wt();t=`Halo ${a}, saya ingin konsultasi kebutuhan keramik:

• Ukuran Keramik: ${o.spec.name}
• Luas Bersih + Waste: ${o.totalAreaWithWaste} m²
• Estimasi Kebutuhan: ${o.totalBoxes} Dus
`+(o.adhesiveBags>0?`• Semen Perekat: ${o.adhesiveBags} Sak
`:"")+`
Mohon info pilihan motif & harga terbaik. Terima kasih!`}else if(e==="brick"){const o=ht();t=`Halo ${a}, saya ingin konsultasi pasangan dinding:

• Jenis: ${J.brickType.startsWith("hebel")?"Bata Ringan Hebel":"Bata Merah"}
• Luas Bersih: ${o.netArea} m²
• Kebutuhan: ${o.brickPcs} Pcs ${o.brickCubic>0?`(${o.brickCubic} m³)`:""}
`+(o.mortarBags>0?`• Mortar: ${o.mortarBags} Sak
`:"")+`
Mohon info pengiriman armada ke lokasi proyek. Terima kasih!`}else if(e==="roof"){const o=kt();t=`Halo ${a}, saya ingin konsultasi kebutuhan atap:

• Jenis Atap: ${o.spec.name} (${o.sheetLength}m)
• Luas Bidang Atap: ${o.totalRoofArea} m²
• Estimasi Kebutuhan: ${o.totalSheets} Lembar
`+(o.ridgePieces>0?`• Nok Bubungan: ${o.ridgePieces} Batang
`:"")+(o.fastenerPacks>0?`• Pengencang: ${o.fastenerPacks} ${o.spec.fastenerPackaging} (${o.fastenerPcs} Pcs)
`:"")+`
Mohon info ketersediaan stok & rekomendasi pengiriman ke lokasi. Terima kasih!`}const r=`https://wa.me/${s}?text=${encodeURIComponent(t)}`;window.open(r,"_blank")},dr=(e,t,a)=>{typeof window.posAddToCartQty=="function"&&(D(`Estimasi ${e} (${t} ${a}) siap dimasukkan ke kasir.`),Vt())},cr=e=>{_e==="pos"?typeof window.posAddToCart=="function"&&(window.posAddToCart(e),D("Produk ditambahkan ke kasir POS!","success")):typeof window.addToCart=="function"&&(window.addToCart(e),D("Produk ditambahkan ke keranjang belanja!","success"))},pr=(e="storefront")=>{_e=e,typeof window.pushModalHistory=="function"&&window.pushModalHistory("materialEstimator");const t=n("modal-material-estimator");t&&(t.classList.remove("hidden"),setTimeout(()=>{t.classList.remove("opacity-0");const a=n("modal-material-estimator-content");a&&(a.classList.remove("translate-y-full","sm:translate-y-10"),a.classList.add("translate-y-0"))},10),Te(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Vt=(e=!1)=>{const t=n("modal-material-estimator"),a=n("modal-material-estimator-content"),s=()=>{a&&(a.classList.add("translate-y-full","sm:translate-y-10"),a.classList.remove("translate-y-0")),t&&t.classList.add("opacity-0"),setTimeout(()=>{t&&t.classList.add("hidden")},280)};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("materialEstimator",!1,s):s()};typeof window<"u"&&(window.openMaterialEstimatorModal=pr,window.closeMaterialEstimatorModal=Vt,window.switchEstimatorTab=Xs,window.setEstimatorPaintMode=er,window.updateEstimatorPaintField=tr,window.updateEstimatorTileField=ar,window.updateEstimatorBrickField=sr,window.setEstimatorRoofMode=rr,window.setEstimatorRoofType=or,window.updateEstimatorRoofField=ir,window.copyEstimatorSummary=nr,window.shareEstimatorToWA=lr,window.addEstimatorToPOSCart=dr,window.addStoreProductFromEstimator=cr);let Re=null;const Lt=e=>{if(e<=0)return{h:"00",m:"00",s:"00",totalSec:0};const t=Math.floor(e/1e3),a=Math.floor(t/3600),s=Math.floor(t%3600/60),r=t%60;return{h:String(a).padStart(2,"0"),m:String(s).padStart(2,"0"),s:String(r).padStart(2,"0"),totalSec:t}},zt=()=>{const e=n("dynamic-flashsale-container");if(!e)return;Re&&(clearInterval(Re),Re=null);const t=hs("web");if(!t||!Array.isArray(t.items)||t.items.length===0){e.innerHTML="",e.classList.add("hidden");return}const a=t.endTime?new Date(t.endTime).getTime():0,s=Date.now(),r=Math.max(0,a-s);if(a&&r<=0){e.innerHTML="",e.classList.add("hidden");return}const o=Lt(r),i=t.items.filter(l=>l&&l.productId);if(i.length===0){e.innerHTML="",e.classList.add("hidden");return}e.classList.remove("hidden");const d=i.map(l=>{const u=(f.products||[]).find(j=>String(j.id)===String(l.productId));if(!u||u.isActive===!1||u.isActive==="false")return"";const g=parseFloat(l.normalPrice)||parseFloat(u.price)||0,A=parseFloat(l.flashSalePrice)||0,y=parseFloat(l.quota)||0,T=parseFloat(l.soldCount)||0,B=y>0&&T>=y,V=y>0?Math.min(100,Math.round(T/y*100)):0,R=Math.max(0,y-T),p=g>0?Math.round((g-A)/g*100):l.discountPercent||0,F=u.img?ta(u.img,"w400-rw"):"/favicon.png",Z=u.name||"Produk Promo",G=l.variantName?` (${l.variantName})`:"";return`
        <div class="group relative flex w-[172px] sm:w-[205px] md:w-[220px] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md snap-start" style="transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;">
            <!-- Badge Diskon Petir Harmonis Tema -->
            <div class="absolute left-2.5 top-2.5 z-10 flex items-center gap-1 rounded-lg px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-2xs" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);">
                <i class="fa-solid fa-bolt text-amber-300 text-[10px]"></i>
                <span>-${Math.max(1,p)}%</span>
            </div>

            ${R<=3&&!B&&y>0?`
            <div class="absolute right-2.5 top-2.5 z-10 flex items-center gap-1 rounded-lg bg-amber-500 px-1.5 py-0.5 text-[9px] font-black text-white shadow-2xs">
                <span>🔥 Sisa ${R}!</span>
            </div>`:""}

            <!-- Foto Produk -->
            <div class="relative aspect-square w-full cursor-pointer overflow-hidden bg-slate-50 dark:bg-slate-800/50 p-2.5 flex items-center justify-center border-b border-slate-100 dark:border-slate-800" onclick="window.openProductModal && window.openProductModal('${b(u.id)}')">
                <img src="${b(F)}" alt="${b(Z)}" loading="lazy" decoding="async" class="h-full w-full object-contain transition-transform duration-500 group-hover:scale-108" onerror="this.src='/favicon.png'">
                ${B?`
                <div class="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center p-2 text-center text-white">
                    <span class="rounded-lg px-2.5 py-1 text-[10px] font-black uppercase tracking-widest shadow-md text-white" style="background: var(--color-primary-dark);">HABIS TERJUAL</span>
                    <span class="mt-1 text-[9px] font-medium text-slate-300">Kuota promo terpenuhi</span>
                </div>`:""}
            </div>

            <!-- Detail & Harga -->
            <div class="flex flex-1 flex-col justify-between p-3">
                <div>
                    <h4 class="line-clamp-2 text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-[var(--color-primary)] transition-colors" title="${b(Z+G)}">
                        ${b(Z+G)}
                    </h4>
                    
                    <!-- Coretan Harga & Harga Kilat Harmonis -->
                    <div class="mt-2 flex flex-col">
                        <span class="text-[10px] font-semibold text-slate-400 dark:text-slate-500 line-through leading-tight">
                            ${w(g)}
                        </span>
                        <span class="text-sm sm:text-base font-black truncate leading-tight" style="color: var(--color-primary);">
                            ${w(A)}
                        </span>
                    </div>
                </div>

                <!-- FOMO Progress Bar Kuota -->
                <div class="mt-3">
                    <div class="flex items-center justify-between text-[9px] font-bold text-slate-500 dark:text-slate-400 mb-1">
                        <span>${B?"Terjual Habis":`Terjual ${T}/${y||"∞"}`}</span>
                        <span>${y>0?V+"%":"Terbatas"}</span>
                    </div>
                    <div class="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                        <div class="h-full rounded-full transition-all duration-500 ${B?"bg-slate-400":""}" style="${B?"":"background: linear-gradient(90deg, #f59e0b 0%, var(--color-primary) 100%);"} width: ${B?100:Math.max(8,V)}%;"></div>
                    </div>

                    <!-- Tombol Aksi Beli Kilat -->
                    <div class="mt-3">
                        ${B?`
                        <button type="button" disabled class="btn-native-action w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs font-bold cursor-not-allowed">
                            Kuota Habis
                        </button>`:`
                        <button type="button" onclick="window.quickBuyFlashSaleItem('${b(u.id)}', '${b(l.variantName||"")}')" class="btn-native-action w-full py-2.5 rounded-xl text-white text-xs font-black active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
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
                            ${b(t.title||"FLASH SALE KILAT")}
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
                    <span id="fs-cd-h" class="min-w-[24px] text-center rounded-lg px-1.5 py-0.5 text-xs sm:text-sm font-bold shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.08); border: 1px solid rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary);">${o.h}</span>
                    <span>:</span>
                    <span id="fs-cd-m" class="min-w-[24px] text-center rounded-lg px-1.5 py-0.5 text-xs sm:text-sm font-bold shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.08); border: 1px solid rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary);">${o.m}</span>
                    <span>:</span>
                    <span id="fs-cd-s" class="min-w-[24px] text-center rounded-lg px-1.5 py-0.5 text-xs sm:text-sm font-bold shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.08); border: 1px solid rgba(var(--color-primary-rgb), 0.22); color: var(--color-primary);">${o.s}</span>
                </div>
            </div>
        </div>

        <!-- Slider List Produk Flash Sale -->
        <div class="relative z-10 flex gap-3 sm:gap-4 overflow-x-auto pb-2 pt-1 hide-scrollbar snap-x">
            ${d}
        </div>
    </div>`,a&&(Re=setInterval(()=>{const l=Math.max(0,a-Date.now());if(l<=0){clearInterval(Re),Re=null,zt(),typeof window.rCat=="function"&&window.rCat();return}const u=Lt(l),g=n("fs-cd-h"),A=n("fs-cd-m"),y=n("fs-cd-s");g&&(g.innerText=u.h),A&&(A.innerText=u.m),y&&(y.innerText=u.s)},1e3))},ur=(e,t="")=>{const a=(f.products||[]).find(i=>String(i.id)===String(e));if(!a)return;if(a.variants&&a.variants.length>0&&!t){ks(e);return}const s=t||(a.variants&&a.variants[0]?a.variants[0].name:""),r=window.getEffP?window.getEffP({id:a.id,price:a.price,variantName:s}):a.price,o=N.findIndex(i=>String(i.id)===String(a.id)&&String(i.variantName||"")===String(s||""));o>-1?N[o].qty=(parseFloat(N[o].qty)||0)+1:N.push({id:a.id,name:a.name,variantName:s,price:r,img:a.img||"",qty:1,unit:a.unit||"pcs"});try{localStorage.setItem("freshmart_cart",JSON.stringify(N))}catch{}vs(),D(`"${a.name}" berhasil dimasukkan ke keranjang dengan harga Flash Sale!`,"success")};window.renderStorefrontFlashSale=zt;window.quickBuyFlashSaleItem=ur;let nt=[];const Ke=()=>{try{localStorage.setItem("freshmart_my_orders",JSON.stringify(H))}catch(e){console.warn("[MyOrders] Gagal menyimpan ke localStorage:",e)}},mr=()=>{try{const e=localStorage.getItem("freshmart_my_orders");if(e){const t=JSON.parse(e);Array.isArray(t)&&t.length>0&&Ye(t)}}catch(e){console.warn("[MyOrders] Gagal memuat dari localStorage:",e)}return H},Jt=()=>{nt.forEach(e=>{try{typeof e=="function"&&e()}catch{}}),nt=[]},Qt=()=>{Jt(),H.filter(a=>{const s=a.status==="Selesai"||a.status==="Dibatalkan",r=a.claimedReward&&(a.claimedReward.status==="Menunggu Persetujuan"||!a.claimedReward.status);return!s||r}).slice(0,10).forEach(a=>{const s=a.orderId;if(!s)return;const r=Q.collection("freshmart_orders").doc(s).onSnapshot(o=>{if(!o.exists)return;const i=o.data(),d=i.status,l=i.claimedReward?i.claimedReward.status:null,u=i.claimedReward&&i.claimedReward.note||"";let g=!1,A="";const y=H.find(T=>T.orderId===s);if(y){if(d&&y.status!==d){const T=y.status;y.status=d,g=!0,T!==void 0&&(A=`Pesanan #${s.split("-").pop()} kini: ${d}`)}y.claimedReward&&l&&(y.claimedReward.status!==l||y.claimedReward.note!==u)&&(y.claimedReward.status=l,y.claimedReward.note=u,g=!0),g&&(Ke(),window.curViewName==="view-orders"&&He(),A&&D(A))}},o=>{console.warn("[MyOrders Realtime] Snapshot error:",o.message)});nt.push(r)})},He=async()=>{if(mr(),!H.length){xe("orders-empty-state"),C("btn-clear-orders"),xe("spacer-orders"),ge("orders-items-container","");return}C("orders-empty-state"),xe("btn-clear-orders"),C("spacer-orders"),Qt(),ge("orders-items-container",H.map((e,t)=>{const s=Ct(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});let r="text-slate-500 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",o="fa-clock";return e.status==="Baru"?(r="text-rose-600 border-rose-200 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400",o="fa-asterisk"):e.status==="Diproses"?(r="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",o="fa-spinner fa-spin"):e.status==="Selesai"?(r="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",o="fa-check-double"):e.status==="Dibatalkan"&&(r="text-slate-400 border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400",o="fa-xmark"),`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group min-w-0 transition-all hover:border-[var(--color-primary)]/40">
            <div class="flex justify-between items-start mb-3 border-b border-slate-100 dark:border-slate-700/60 pb-3">
                <div>
                    <span class="font-bold text-sm text-slate-800 dark:text-white tracking-tight">#${e.orderId.split("-").pop()}</span>
                    <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5"><i class="fa-regular fa-calendar-days mr-1"></i>${s}</p>
                </div>
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-lg border ${r} uppercase tracking-wider flex items-center shadow-xs"><i class="fa-solid ${o} mr-1.5 text-[9px]"></i> ${b(e.status)}</span>
            </div>
            ${e.pointsEarned>0||e.claimedReward?`
            <div class="flex flex-wrap gap-1.5 mb-3">
                ${e.pointsEarned>0?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400"><i class="fa-solid fa-star mr-1"></i>+${e.pointsEarned} Poin</span>`:""}
                ${e.claimedReward?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)]/40 dark:text-[var(--color-primary)]"><i class="fa-solid fa-gift mr-1"></i>Hadiah: ${b(e.claimedReward.name)} ${mt(e.claimedReward)}</span>`:""}
                ${e.claimedReward&&e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-slate-100 text-slate-500 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"><i class="fa-solid fa-wallet mr-1"></i>Sisa: ${e.finalMemberPoints} Poin</span>`:""}
            </div>`:""}
            <div class="flex justify-between items-end mt-2 pt-1">
                <div>
                    <p class="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Total Tagihan</p>
                    <p class="text-[var(--color-primary)] font-bold text-base tracking-tight">${w(e.total)} <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium ml-1">(${e.itemCount} Item)</span></p>
                </div>
                <div class="flex gap-2">
                    <button onclick="openCustomerOrderDetail('${e.orderId}')" class="h-8 px-3.5 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] hover:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.35)] text-[11px] font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5"><i class="fa-solid fa-file-invoice"></i> Detail</button>
                    <button onclick="checkOrderStatus('${e.orderId}', ${t})" class="h-8 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-[11px] font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5"><i class="fa-solid fa-rotate"></i> Status</button>
                </div>
            </div>
        </div>`}).join(""))},br=async(e,t)=>{Pe("Melacak Status...");try{const a=await Q.collection("freshmart_orders").doc(e).get();if(a.exists){const s=a.data();if(H[t])H[t].status=s.status;else{const r=H.findIndex(o=>o.orderId===e);r>-1&&(H[r].status=s.status)}Ke(),He(),D(`Status Pesanan: ${s.status}`)}else D("Pesanan tidak ditemukan di server.")}catch(a){console.error("Gagal cek status pesanan:",a),D("Gagal mengambil data sistem. Periksa koneksi.")}finally{de()}},fr=async()=>{const e=n("order-tracking-input"),t=e?e.value.trim():"";if(!t){D("Masukkan ID Pesanan terlebih dahulu!");return}let a=t.replace(/^#/,"").trim();const s=H.find(r=>r.orderId===a||r.orderId.endsWith(a));if(s){lt(s.orderId);return}Pe("Mencari Pesanan...");try{let r=await Q.collection("freshmart_orders").doc(a).get();if(!r.exists&&!a.startsWith("ORD-")){const o="ORD-"+a,i=await Q.collection("freshmart_orders").doc(o).get();i.exists&&(r=i,a=o)}if(r.exists){const o=r.data();H.some(d=>d.orderId===a)||(H.unshift({orderId:a,date:o.dateString||(o.timestamp?o.timestamp.toDate().toISOString():new Date().toISOString()),dateString:o.dateString||(o.timestamp?o.timestamp.toDate().toISOString():new Date().toISOString()),total:o.payment&&o.payment.grandTotal?o.payment.grandTotal:o.total||0,itemCount:(o.items||[]).reduce((d,l)=>d+(parseFloat(l.qty)||0),0),status:o.status||"Baru",pointsEarned:o.pointsEarned||0,claimedReward:o.claimedReward||null,finalMemberPoints:o.finalMemberPoints||null,customerType:o.customerType||"Pelanggan Umum",customer:o.customer||{},items:o.items||[],payment:o.payment||{},isTempo:!!o.isTempo}),Ke(),He()),e&&(e.value=""),D("Pesanan berhasil ditemukan!"),lt(a)}else D("Pesanan dengan ID tersebut tidak ditemukan.")}catch(r){console.error("Gagal melacak pesanan:",r),D("Gagal menghubungi server. Pastikan ID Pesanan sudah benar.")}finally{de()}},xr=()=>{aa("Hapus Riwayat","Riwayat pesanan di perangkat ini akan dihapus. Pesanan tetap tersimpan di sistem toko. Lanjutkan?",()=>{Ye([]),Ke(),He(),D("Riwayat lokal dibersihkan")})},lt=async e=>{const t=Array.isArray(H)?H.find(a=>a.orderId===e):null;if(t&&t.items&&t.items.length>0){window.currentCustomerOrder=t,window.lastPrintedOrder=t,ze(e,t,[]),Q.collection("freshmart_orders").doc(e).get().then(async a=>{if(a.exists){const s=a.data();s.orderId=s.orderId||a.id||e;let r=[];if(s.status==="Selesai")try{r=(await Q.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(l=>`${l.data().productId}::${l.data().variantName||""}`)}catch{}window.currentCustomerOrder=s,window.lastPrintedOrder=s;const o=H.findIndex(d=>d.orderId===s.orderId);o!==-1&&(Object.assign(H[o],s),Ke());const i=document.getElementById("order-detail-modal");i&&!i.classList.contains("hidden")&&!i.classList.contains("opacity-0")&&ze(e,s,r,!0)}}).catch(a=>console.warn("[MyOrders] Silent background fetch error:",a));return}Pe("Memuat Rincian...");try{const a=await Q.collection("freshmart_orders").doc(e).get();if(!a.exists){D("Pesanan tidak ditemukan.");return}const s=a.data();s.orderId=s.orderId||a.id||e;let r=[];if(s.status==="Selesai")try{r=(await Q.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(i=>`${i.data().productId}::${i.data().variantName||""}`)}catch{}if(window.currentCustomerOrder=s,window.lastPrintedOrder=s,Array.isArray(H)){const o=H.findIndex(i=>i.orderId===s.orderId);o!==-1&&(Object.assign(H[o],s),Ke())}ze(e,s,r)}catch(a){console.error("Gagal mengambil data pesanan:",a),D("Gagal memuat rincian pesanan. Coba beberapa saat lagi.")}finally{de()}},ze=(e,t,a=[],s=!1)=>{try{t&&(t.orderId=t.orderId||e,window.currentCustomerOrder=t,window.lastPrintedOrder=t);let r=document.getElementById("order-detail-modal");r||(r=document.createElement("div"),r.id="order-detail-modal",r.className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 opacity-0 pointer-events-none transition-opacity duration-300",document.body.appendChild(r));const o=b(t.customer&&t.customer.name?t.customer.name:"-"),i=b(t.customer&&t.customer.wa?t.customer.wa:"-"),d=b(t.customer&&t.customer.address?t.customer.address:"-"),l=t.customer&&t.customer.deliveryMethod==="delivery"?"Dikirim ke Alamat":"Ambil di Toko (Pickup)",u=b(t.customer&&t.customer.note?t.customer.note:""),g=!!(t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"),A=g?"Putri PayLater":b(t.payment&&t.payment.method?t.payment.method:"Cash / COD"),y=t.items||[],T=y.some(L=>L.poTime&&L.poTime!==""),B=y.map(L=>{const oe=parseFloat(L.qty)||0,ae=parseFloat(L.effectivePrice||L.price)||0,se=oe*ae,P=`${L.id}::${L.variantName||""}`,ue=t.status==="Selesai"&&!a.includes(P)&&L.id!==void 0&&L.id!==null;return`
            <div class="flex gap-3 items-center border-b border-slate-100 dark:border-slate-700/50 py-3 last:border-0">
                <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-700" style="background-image:url('${b(L.img||(f&&f.store?f.store.logo:""))}')"></div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate mb-0.5" title="${b(L.name)}">${b(L.name)}</p>
                    ${L.variantName||L.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${L.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded text-[9px] font-semibold">${b(L.variantName)}</span>`:""}
                        ${L.poTime?`<span class="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">PO ${b(L.poTime)}</span>`:""}
                    </div>
                    `:""}
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400">${oe} ${b(L.unit||"pcs")} x ${w(ae)}</p>
                    ${ue?`<button type="button" onclick="openReviewModal('${e}',${L.id},'${encodeURIComponent(L.variantName||"")}','${encodeURIComponent(L.name||"")}','${encodeURIComponent(t.customer?.name||"")}')" class="mt-1.5 text-[10px] font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1 transition-colors"><i class="fa-solid fa-star"></i> Berikan Ulasan</button>`:""}
                </div>
                <div class="text-right shrink-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-[var(--color-primary)]">${w(se)}</p>
                </div>
            </div>
            `}).join(""),R=Ct(t).toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),p=sa(t),F=p.subtotal,Z=p.shipping,G=p.productDiscount,j=p.shippingDiscount,m=p.pointDiscount,we=p.grandTotal;r.innerHTML=`
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
                            <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40">${b(t.status||"Baru")}</span>
                        </div>
                        <div class="text-right">
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Waktu Pembelian</p>
                            <p class="text-[11px] font-bold text-slate-700 dark:text-slate-300">${R}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-user text-slate-400"></i> Info Pelanggan</h4>
                            <div class="space-y-1 text-xs">
                                <p class="font-bold text-slate-800 dark:text-slate-200">${o}</p>
                                ${t.customer&&t.customer.wa?`<a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${i}'); else window.open('https://wa.me/${i}', '_blank', 'noopener,noreferrer');" class="flex items-center gap-1 text-[var(--color-primary)] font-bold hover:underline cursor-pointer"><i class="fa-brands fa-whatsapp"></i> +${i}</a>`:""}
                                ${t.customer&&t.customer.lat&&t.customer.deliveryMethod==="delivery"?`<a href="https://www.google.com/maps?q=${b(t.customer.lat)},${b(t.customer.lng)}" target="_blank" class="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"><i class="fa-solid fa-location-dot"></i> Lihat Peta</a>`:""}
                            </div>
                        </div>
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-truck text-slate-400"></i> Pengiriman & Bayar</h4>
                            <div class="space-y-1 text-xs">
                                <p><span class="text-slate-500 inline-block w-14">Metode</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${l}</span></p>
                                <p><span class="text-slate-500 inline-block w-14">Bayar</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${A.toUpperCase()}</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2.5">
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1">Alamat Tujuan</p>
                            <p class="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">${d}</p>
                        </div>
                        ${u?`<div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60"><p class="text-[9px] font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest mb-1">Catatan Pembeli</p><p class="text-xs font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic">"${u}"</p></div>`:""}
                    </div>

                    ${t.buktiPayment?`
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-image text-[var(--color-primary)]"></i> Bukti Pembayaran</h4>
                        <a href="${b(t.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border-2 border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] transition-colors shadow-xs">
                            <img src="${b(t.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-52 object-cover" onerror="this.style.display='none'" loading="lazy">
                            <div class="bg-[rgba(var(--color-primary-rgb),0.06)] p-2 flex items-center justify-center gap-1.5 text-[10px] font-bold text-[var(--color-primary)]"><i class="fa-solid fa-arrow-up-right-from-square"></i> Buka Ukuran Penuh</div>
                        </a>
                    </div>`:""}
                    
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-basket-shopping text-slate-400"></i> Daftar Produk</h4>
                        <div class="bg-slate-50 dark:bg-slate-800/30 rounded-xl px-3 py-1 border border-slate-200 dark:border-slate-700/80">
                            ${B}
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
                            <div class="flex items-center gap-2"><i class="fa-solid fa-gift text-[var(--color-primary)]"></i><p class="text-xs font-bold text-[var(--color-primary)]">Klaim Hadiah: <b>${b(t.claimedReward.name)}</b> (${t.claimedReward.pointsCost} Poin)</p></div>
                            <p class="text-[11px] font-semibold text-[var(--color-primary)] mt-1 ml-5">${mt(t.claimedReward)}</p>
                            ${t.claimedReward.note?`<p class="text-[11px] text-[var(--color-primary)]/70 italic mt-0.5 ml-5">"${b(t.claimedReward.note)}"</p>`:""}
                        </div>`:""}
                    </div>`:""}

                    <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl space-y-2 text-xs">
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Subtotal Produk</p><p class="font-bold text-slate-800 dark:text-white">${w(F)}</p></div>
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Ongkos Kirim</p><p class="font-bold text-slate-800 dark:text-white">${w(Z)}</p></div>
                        ${j>0?`<div class="flex justify-between text-[var(--color-primary)]"><p>Diskon Ongkir</p><p class="font-bold">-${w(j)}</p></div>`:""}
                        ${G>0?`<div class="flex justify-between text-rose-500"><p>Diskon Promo</p><p class="font-bold">-${w(G)}</p></div>`:""}
                        ${m>0?`<div class="flex justify-between text-emerald-600 dark:text-emerald-400"><p>Diskon Poin Member</p><p class="font-bold">-${w(m)}</p></div>`:""}
                        ${g&&p.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Biaya Admin PayLater</p><p class="font-bold text-slate-800 dark:text-white">+${w(p.paylaterAdminFee)}</p></div>`:""}
                        ${g&&p.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Biaya Penanganan / Layanan</p><p class="font-bold text-slate-800 dark:text-white">+${w(p.paylaterServiceFee)}</p></div>`:""}
                        ${p.hasPpn?`
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>DPP (Dasar Pengenaan Pajak)</p><p class="font-bold text-slate-800 dark:text-white">${w(p.dppAmount)}</p></div>
                        <div class="flex justify-between text-amber-600 dark:text-amber-400"><p>${b(p.ppnLabel)}</p><p class="font-bold">${p.ppnAmount>0?(p.isInclusive?"":"+")+w(p.ppnAmount):"Rp 0"}</p></div>
                        `:""}
                        <div class="flex justify-between items-center border-t border-dashed border-slate-300 dark:border-slate-700 pt-3 mt-2">
                            <p class="font-bold text-slate-800 dark:text-white uppercase tracking-wider">Total Tagihan</p>
                            <p class="text-lg font-bold text-[var(--color-primary)]">${w(we)}</p>
                        </div>
                        ${(()=>{if(!g)return"";const L=Array.isArray(t.payment?.paylaterSchedule)&&t.payment.paylaterSchedule.length>0?t.payment.paylaterSchedule:null,oe=t.payment?.paylaterMonths||(L?L.length:1),ae=t.payment?.paylaterMonthlyInstallment||(oe>0?Math.round(we/oe):we);let se="";return L&&L.length>0&&(se=`
                                <div class="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-700/80 space-y-2">
                                    <p class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                        <i class="fa-solid fa-calendar-days text-[var(--color-primary)]"></i> Rencana Jadwal Angsuran Anda:
                                    </p>
                                    <div class="space-y-2">
                                        ${L.map((P,ue)=>{const q=P.installmentIndex||P.installmentNo||P.installmentNumber||P.month||ue+1,K=P.dueDateFormatted||P.dueDateStr||(P.dueDate?new Date(P.dueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"),he=parseFloat(P.total||P.totalMonthly||P.totalInstallment)||ae;return`
                                            <div class="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 flex items-center justify-between gap-3 shadow-2xs">
                                                <div class="flex items-center gap-2.5 min-w-0">
                                                    <div class="w-8 h-8 rounded-xl bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] font-black text-xs flex items-center justify-center shrink-0">
                                                        ${q}
                                                    </div>
                                                    <div class="min-w-0">
                                                        <p class="text-xs font-bold text-slate-800 dark:text-white leading-tight">Bulan ke-${q}</p>
                                                        <p class="text-[10px] text-slate-400 font-mono mt-0.5">Jatuh Tempo: ${K}</p>
                                                    </div>
                                                </div>
                                                <div class="text-right shrink-0">
                                                    <p class="text-xs font-black font-mono text-[var(--color-primary)]">${w(he)}</p>
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
                                    <span class="font-mono text-sm">${w(ae)}/bln</span>
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
        `,s||(r.classList.contains("opacity-0")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("customerOrder"),document.body.classList.add("overflow-hidden"),Ee(r,"order-detail-content"))}catch(r){console.error("Error Render HTML Modal:",r),D("Gagal menampilkan detail. Coba lagi.")}},gr=(e=!1)=>{const t=()=>{const a=document.getElementById("order-detail-modal"),s=document.getElementById("order-detail-content");Fe(a,s,()=>{document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none):not(#order-detail-modal)')||document.body.classList.remove("overflow-hidden")})};typeof window.requestCloseModal=="function"?window.requestCloseModal("customerOrder",e,t):t()};window.attachMyOrdersRealtime=Qt;window.detachMyOrdersRealtime=Jt;window.renderMyOrders=He;window.checkOrderStatus=br;window.trackOrderManual=fr;window.clearMyOrders=xr;window.openCustomerOrderDetail=lt;window.renderOrderDetailModal=ze;window.closeCustomerOrderDetailModal=gr;window.reviewPhotoFile=null;window.reviewRating=0;const wr=(e,t,a,s,r)=>{const o=decodeURIComponent(a||""),i=decodeURIComponent(s||""),d=decodeURIComponent(r||"");let l=document.getElementById("review-modal");l||(l=document.createElement("div"),l.id="review-modal",l.className="fixed inset-0 z-[120] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",l.onclick=u=>{u.target===l&&vt()},document.body.appendChild(l)),window.reviewPhotoFile=null,window.reviewRating=0,l.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div class="min-w-0">
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-star text-amber-400"></i> Berikan Ulasan</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest truncate">${b(i)}</p>
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
        </div>`,n("review-submit-btn").onclick=()=>yt(e,t,o,i,d),l.style.opacity="0",l.style.display="flex",requestAnimationFrame(()=>{l.style.transition="opacity 0.25s ease",l.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("review")},hr=e=>{window.reviewRating=e,document.querySelectorAll(".review-star").forEach(t=>{const a=parseInt(t.dataset.star);t.classList.toggle("text-amber-400",a<=e),t.classList.toggle("text-slate-300",a>e),t.classList.toggle("dark:text-slate-600",a>e)})},kr=e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/")){D("Hanya file gambar yang diizinkan!");return}if(t.size>5*1024*1024){D("Ukuran gambar max 5MB!");return}window.reviewPhotoFile=t;const a=new FileReader;a.onload=s=>{n("review-photo-preview").src=s.target.result,xe("review-photo-preview-wrap"),C("review-photo-btn")},a.readAsDataURL(t)},vr=()=>{window.reviewPhotoFile=null,C("review-photo-preview-wrap"),xe("review-photo-btn");const e=n("review-photo-input");e&&(e.value="")},vt=(e=!1)=>{const t=document.getElementById("review-modal");if(!t||t.style.display==="none")return;const a=()=>{t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250)};if(typeof Se=="function")Se("review",e,a);else if(typeof window.requestCloseModal=="function")window.requestCloseModal("review",e,a);else{if(!e&&De.length&&De[De.length-1]==="review"){De.pop();try{history.back()}catch{}}a()}},yt=async(e,t,a,s,r)=>{if(!window.reviewRating||window.reviewRating<1)return D("Silakan beri bintang terlebih dahulu!");if(!pt){be(!0),Pe("Mengirim ulasan...");try{let o="";if(window.reviewPhotoFile&&typeof window.uploadBuktiToGDrive=="function"){const l=await window.uploadBuktiToGDrive(window.reviewPhotoFile,"review-"+e);l?o=l:D("Foto gagal diupload, ulasan tetap dikirim tanpa foto.")}const i=Date.now(),d={id:i,orderId:e||"",productId:t??0,variantName:a||"",productName:s||"",customerName:r||"Pelanggan",rating:window.reviewRating,text:ye("review-text")||"",photoUrl:o||"",adminReply:"",isVisible:!0,createdAt:je.firestore.FieldValue.serverTimestamp()};await Q.collection("freshmart").doc("cms_data").collection("reviews").doc(i.toString()).set(d),dt.delete(t),vt(),D("Terima kasih atas ulasan Anda!"),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(o){console.error("Gagal mengirim ulasan:",o),D("Gagal mengirim ulasan: "+(o.message||"Error tidak diketahui"))}finally{be(!1),de()}}},dt=new Map,yr=5*60*1e3,Pr=async e=>{if(!n("product-modal-reviews-container"))return;const a=r=>{const o=r.length?r.reduce((u,g)=>u+(parseFloat(g.rating)||0),0)/r.length:0,i=u=>Array.from({length:5},(g,A)=>`<i class="fa-solid fa-star ${A<Math.round(u)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join("");let d=`
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2"><i class="fa-solid fa-comment-dots text-amber-400"></i> Ulasan Pelanggan</h4>
                ${r.length?`<div class="flex items-center gap-1.5"><span class="flex text-xs">${i(o)}</span><span class="text-xs font-bold text-slate-600 dark:text-slate-300">${o.toFixed(1)}</span><span class="text-[10px] font-bold text-slate-400">(${r.length})</span></div>`:""}
            </div>`;if(!r.length){ge("product-modal-reviews-container",d+'<p class="text-[11px] font-bold text-slate-400 text-center py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">Belum ada ulasan untuk produk ini.</p>');return}const l=r.map(u=>{let g="";try{u.createdAt&&u.createdAt.toDate&&(g=u.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}))}catch{}return`
            <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div class="flex items-center justify-between mb-1.5">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${b(u.customerName||"Pelanggan")}</p>
                    <span class="text-[9px] font-bold text-slate-400">${g}</span>
                </div>
                <div class="flex text-[11px] mb-2">${i(u.rating)}</div>
                ${u.variantName?`<p class="text-[10px] font-bold text-slate-400 mb-1.5">Varian: ${b(u.variantName)}</p>`:""}
                ${u.text?`<p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${b(u.text)}</p>`:""}
                ${u.photoUrl?`<div class="w-16 h-16 rounded-xl overflow-hidden mb-3 border border-slate-200 dark:border-slate-700"><img src="${b(u.photoUrl)}" class="w-full h-full object-cover cursor-pointer" onclick="window.open('${b(u.photoUrl)}','_blank')" alt="Foto ulasan"></div>`:""}
                ${u.adminReply?`
                <div class="mt-2.5 p-3 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.2)] rounded-xl">
                    <p class="text-[10px] font-bold text-[var(--color-primary-dark)] dark:text-[var(--color-primary)] mb-1 flex items-center gap-1"><i class="fa-solid fa-reply"></i> Balasan Penjual</p>
                    <p class="text-xs text-slate-600 dark:text-slate-300">${b(u.adminReply)}</p>
                </div>`:""}
            </div>`}).join("");ge("product-modal-reviews-container",d+`<div class="space-y-3">${l}</div>`)},s=dt.get(e);if(s&&Date.now()-s.timestamp<yr){a(s.data);return}ge("product-modal-reviews-container",'<div class="text-center py-6"><i class="fa-solid fa-spinner fa-spin text-xl text-slate-300"></i></div>');try{let o=(await Q.collection("freshmart").doc("cms_data").collection("reviews").where("productId","==",e).get()).docs.map(i=>i.data()).filter(i=>i.isVisible!==!1);o.sort((i,d)=>{const l=i.createdAt&&i.createdAt.toMillis?i.createdAt.toMillis():0;return(d.createdAt&&d.createdAt.toMillis?d.createdAt.toMillis():0)-l}),dt.set(e,{data:o,timestamp:Date.now()}),a(o)}catch(r){console.warn("Gagal memuat ulasan:",r),ge("product-modal-reviews-container",'<p class="text-[11px] text-slate-400 text-center py-4">Belum ada ulasan yang dapat dimuat.</p>')}};window.openReviewModal=wr;window.setReviewRating=hr;window.handleReviewPhotoSelect=kr;window.removeReviewPhoto=vr;window.closeReviewModal=vt;window.submitReview=yt;window.submitProductReview=yt;window.loadProductReviews=Pr;const Sr="admgaffidigital/tokoputri",Tr=`https://api.github.com/repos/${Sr}/releases/latest`,ct="https://github.com/admgaffidigital/tokoputri/releases/latest/download/TokoPutri.OfficialStore.apk";let Ae=null,tt=!1;const Mr=e=>!e||isNaN(e)?"8.0 MB":`${(e/(1024*1024)).toFixed(1)} MB`,$r=e=>{if(!e)return"Terbaru";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return"Terbaru"}},Ar=async()=>{if(Ae)return Ae;if(tt)return null;const e=it(f)||"v1.10.92";tt=!0;try{const t=await fetch(Tr,{headers:{Accept:"application/vnd.github.v3+json"},cache:"no-store"});if(t.ok){const a=await t.json(),s=a.assets?.find(d=>d.name?.toLowerCase().endsWith(".apk"))||a.assets?.[0],r=a.tag_name||e,o=qs(r,e)>0,i=o?e:r;Ae={tagName:i,name:`Toko Putri ( Official Store ) ${i}`,publishedAt:o?"08 Okt 2026":$r(a.published_at),fileSize:s?Mr(s.size):"16.3 MB",downloadUrl:s?.browser_download_url||ct,notes:a.body||"",isLiveFetched:!0}}else throw new Error(`GitHub API HTTP ${t.status}`)}catch{const a=it(f)||"v1.10.92";Ae={tagName:a,name:`Toko Putri ( Official Store ) ${a}`,publishedAt:"08 Okt 2026",fileSize:"16.3 MB",downloadUrl:ct,notes:"",isLiveFetched:!1}}finally{tt=!1}return Ae},Dr=()=>{let e=n("app-download-modal");return e||(e=document.createElement("div"),e.id="app-download-modal",e.className="fixed inset-0 z-[125] bg-slate-950/85 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&Zt()},e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e)},Lr=async()=>{const e=Dr();if(!e)return;Ie("appDownload"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const a=n("app-download-modal-box");a&&a.classList.remove("translate-y-full","sm:translate-y-8")}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light");const t=await Ar();if(t){const a=n("app-modal-version-tag"),s=n("app-modal-filesize"),r=n("app-modal-published-date");a&&(a.textContent=t.tagName),s&&(s.innerHTML=`<span>${b(t.fileSize)}</span>`),r&&(r.textContent=`Rilis: ${b(t.publishedAt)}`)}},Zt=(e=!1)=>{const t=n("app-download-modal");!t||t.style.display==="none"||Se("appDownload",e,()=>{t.classList.add("opacity-0");const a=n("app-download-modal-box");a&&a.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{t.style.display="none"},300)})},Er=()=>{const e=n("btn-download-apk-action"),t=n("btn-download-apk-icon"),a=n("btn-download-apk-text");e&&e.classList.add("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-spinner fa-spin"),a&&(a.textContent="Menghubungkan ke Server Rilis..."),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.showToast=="function"&&window.showToast("Memulai unduhan TokoPutri(OfficialStore).apk terbaru. Cek panel notifikasi HP Anda!");const s=Ae?.downloadUrl||ct,r=document.createElement("a");r.href=s,r.setAttribute("download","TokoPutri(OfficialStore).apk"),r.target="_blank",r.rel="noopener noreferrer",document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>{if(e&&e.classList.remove("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-circle-check text-white"),a){const o=Ae?.tagName||it(f)||"v1.9.49";a.textContent=`Unduh Ulang APK (${o})`}},2500)};window.openAppDownloadModal=Lr;window.closeAppDownloadModal=Zt;window.downloadLatestApk=Er;window.setCat=e=>{jt(e),bt(1),typeof window.rCat=="function"&&window.rCat()};window.setBrand=e=>{Ot(e),bt(1),typeof window.rCat=="function"&&window.rCat()};const Fr=()=>{let e="",t=ot==="Semua Produk";e+=`
    <button onclick="setCat('Semua Produk'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-colors">
            <i class="fa-solid fa-layer-group text-base sm:text-lg"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA</span>
        <i class="fa-solid fa-circle-check text-base ${t?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
    </button>`,f.categories.forEach(o=>{let i=ot===o.name,d=o.img?`<img loading="lazy" src="${b(o.img)}" alt="${b(o.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Cat'">`:'<i class="fa-solid fa-box text-base sm:text-lg"></i>';e+=`
        <button onclick="setCat('${b(o.name)}'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden border border-slate-200 dark:border-slate-600">
                ${d}
            </div>
            <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 line-clamp-1 ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${b(o.name)}</span>
            <i class="fa-solid fa-circle-check text-base ${i?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
        </button>`});const a=n("modal-category-list");a&&(a.innerHTML=`<div class="flex flex-col gap-2.5 pb-6 w-full">${e}</div>`);const s=n("category-modal"),r=n("category-modal-content");s&&r&&(s.classList.contains("hidden")&&Ie("category"),Ee(s,r))};window.openCategoryModal=Fr;window.openBrandModal=()=>{let e="",t=rt==="Semua Merek";e+=`
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA MEREK</span>
    </button>`,f.brands.forEach(o=>{let i=rt===o.name,d=o.img?`<img loading="lazy" src="${b(o.img)}" alt="${b(o.name)}" class="w-full h-full object-contain p-1.5" >`:'<i class="fa-solid fa-tag text-lg sm:text-xl"></i>';e+=`
        <button onclick="setBrand('${b(o.name)}'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-2.5 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600">
                ${d}
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${b(o.name)}</span>
        </button>`});const a=n("modal-brand-grid");a&&(a.innerHTML=e);const s=n("brand-modal"),r=n("brand-modal-content");s&&r&&(s.classList.contains("hidden")&&Ie("brand"),Ee(s,r))};window.closeCategoryModal=(e=!1)=>{const t=n("category-modal"),a=n("category-modal-content");t&&a&&Se("category",e,()=>{Fe(t,a)})};window.closeBrandModal=(e=!1)=>{const t=n("brand-modal"),a=n("brand-modal-content");t&&a&&Se("brand",e,()=>{Fe(t,a)})};window.openQuickMenuModal=()=>{const e=n("quickmenu-modal"),t=n("quickmenu-modal-content");e&&t&&(e.classList.contains("hidden")&&Ie("quickmenu"),Ee(e,t))};window.openTermsModal=()=>{const e=`
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
    `,t=f?.store?.terms,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;ge("terms-modal-content-body",a);const s=n("terms-modal"),r=n("terms-modal-content");s&&r&&(s.classList.contains("hidden")&&Ie("terms"),Ee(s,r))};window.closeTermsModal=(e=!1)=>{const t=n("terms-modal"),a=n("terms-modal-content");t&&a&&Se("terms",e,()=>{Fe(t,a)})};window.openPrivacyModal=()=>{const e=`
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
    `,t=f?.store?.privacy,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;ge("privacy-modal-content-body",a);const s=n("privacy-modal"),r=n("privacy-modal-content");s&&r&&(s.classList.contains("hidden")&&Ie("privacy"),Ee(s,r))};window.closePrivacyModal=(e=!1)=>{const t=n("privacy-modal"),a=n("privacy-modal-content");t&&a&&Se("privacy",e,()=>{Fe(t,a)})};window.closeQuickMenuModal=(e=!1)=>{const t=n("quickmenu-modal"),a=n("quickmenu-modal-content");t&&a&&Se("quickmenu",e,()=>{Fe(t,a)})};window.switchGuideTab=(e="customer")=>{["customer","pos","admin"].forEach(s=>{const r=n(`guide-tab-btn-${s}`),o=n(`guide-section-${s}`);s===e?(r&&(r.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-extrabold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer primary-bg text-white"),o&&o.classList.remove("hidden")):(r&&(r.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"),o&&o.classList.add("hidden"))});const a=document.querySelector("#shopping-guide-modal .custom-scrollbar");a&&(a.scrollTop=0)};window.openShoppingGuideModal=(e="customer")=>{const t=n("shopping-guide-modal"),a=n("shopping-guide-modal-content");t&&a&&(typeof window.switchGuideTab=="function"&&window.switchGuideTab(e),t.classList.contains("hidden")&&Ie("guide"),Ee(t,a))};window.closeShoppingGuideModal=(e=!1)=>{const t=n("shopping-guide-modal"),a=n("shopping-guide-modal-content");t&&a&&Se("guide",e,()=>{Fe(t,a)})};window.navigateFromQuickMenu=e=>{closeQuickMenuModal(!0);const t=De.indexOf("quickmenu");t>-1&&De.splice(t,1),typeof e=="function"?(history.replaceState({view:ra},"",window.location.href),e()):(history.replaceState({view:e},"",window.location.href),oa(e,!0))};let Et=!1,We=null;const Ze=async()=>Et?!0:We||(We=Promise.all([Je(()=>import("./module-admin-X4BdD0OJ.js").then(e=>e.e),__vite__mapDeps([0,1,2,3,4,5,6,7])),Je(()=>import("./module-admin-X4BdD0OJ.js").then(e=>e.h),__vite__mapDeps([0,1,2,3,4,5,6,7]))]).then(()=>(Et=!0,!0)),We);window.ensureAdminLoaded=Ze;window.checkAdminAccess=async()=>{if(Pe("Membuka Panel Owner..."),await Ze(),de(),typeof window.__checkAdminAccessReal=="function")return window.__checkAdminAccessReal()};typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);typeof window<"u"&&(window.AndroidNativeApp||window.Capacitor||window.location&&(window.location.protocol==="capacitor:"||window.location.protocol==="ionic:"))&&document.documentElement.classList.add("is-native-app");ia();window.firebase=je;window.db=Q;window.DOMPurify=xs;window.ensureScriptLoaded=na;if(typeof window<"u"){const e=window.print?window.print.bind(window):null;window.print=function(){window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():e&&e()}}window.uiPalettes=ys;window.hexToRgb=Ps;window.applyUITheme=Ut;window.toggleTheme=Ss;window.applyBackgroundStyle=Nt;Ts();const Ir=localStorage.getItem("freshmart_ui_theme")||"emerald";Ut(Ir,localStorage.getItem("freshmart_theme_color"));const Ft=()=>{js();const e=localStorage.getItem("freshmart_bg_style")||"minimalist",t=localStorage.getItem("freshmart_bg_custom_url")||"";Nt(e,t),Os()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ft):Ft();window.onerror=function(e,t,a,s,r){return console.error("Global Error Caught:",e,"at",a,":",s),typeof showToast=="function"&&showToast("Ops, ada kendala sistem."),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Promise Rejection Sentinel:",e.reason)});window.addEventListener("vite:preloadError",function(e){console.warn("[Vite] Chunk preload failed (new deployment detected). Auto-reloading...",e);const t="freshmart_preload_reload",a=sessionStorage.getItem(t),s=Date.now();(!a||s-parseInt(a,10)>1e4)&&(sessionStorage.setItem(t,String(s)),window.location.reload())});window.updateSEO=la;window.injectJSONLD=da;window.rewardStatusLabel=mt;window.getYouTubeId=ca;window.parseVideoUrl=pa;window.fixDriveVideo=ua;window.fixDriveVideoPreview=ma;let It=Ht;window.calcTaxDetails=e=>{const t=f?.store||{},a=t.ppnEnabled===!0||t.ppnEnabled==="true",s=t.ppnRate!==void 0&&t.ppnRate!==null&&!isNaN(parseFloat(t.ppnRate))?Math.max(0,parseFloat(t.ppnRate)):11,r=t.ppnType||"exclusive",o=t.ppnShowZero!==!1,i=t.ppnTaxLabel||"PPN";if(!a||e<=0)return{ppnEnabled:!1,ppnRate:0,ppnType:r,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0,ppnShowZero:!1,ppnLabel:"PPN"};if(s===0)return{ppnEnabled:!0,ppnRate:0,ppnType:r,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0,ppnShowZero:o,ppnLabel:i};if(r==="inclusive"){const d=Math.round(e*100/(100+s)),l=e-d;return{ppnEnabled:!0,ppnRate:s,ppnType:"inclusive",ppnAmount:l,dppAmount:d,grandTotalAdd:0,ppnShowZero:o,ppnLabel:i}}else{const d=Math.round(e*s/100);return{ppnEnabled:!0,ppnRate:s,ppnType:"exclusive",ppnAmount:d,dppAmount:Math.max(0,e),grandTotalAdd:d,ppnShowZero:o,ppnLabel:i}}};typeof requestIdleCallback<"u"?requestIdleCallback(St,{timeout:5e3}):setTimeout(St,3e3);window.isAdm=!1;history.replaceState({view:"view-catalog"},"","");window.addEventListener("DOMContentLoaded",async()=>{try{_t()}catch(e){console.warn("[NativeMobile] Error:",e)}await Ms();try{$s()}catch(e){console.warn("[syncAppMeta] Error:",e)}As(),Ds(),$t(),window.attachRewardsRealtime=$t,Je(()=>import("./module-pos-Dn18FYRz.js").then(e=>e.U),__vite__mapDeps([4,1,2,3,5,6])).then(e=>{typeof e.initPOSAuth=="function"&&e.initPOSAuth()}).catch(e=>console.warn("[POS Auth] Gagal inisialisasi:",e)),Xe.onAuthStateChanged(async e=>{if(!Us()){if(e&&e.uid!==Ne){try{const t=await Q.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(e.uid).get();if(t.exists){const a=t.data()||{};if(a.isActive===!1){et(),await Xe.signOut();return}const s={uid:e.uid,name:a.name||e.email,email:a.email||e.email,role:a.role||Ge.CASHIER,permissions:a.permissions||null,isActive:!0};if(Tt(s),s.role===Ge.CASHIER){Je(()=>import("./module-pos-Dn18FYRz.js").then(o=>o.U),__vite__mapDeps([4,1,2,3,5,6])).then(o=>{typeof o.setCashierSession=="function"&&o.setCashierSession(s)}).catch(()=>{}),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();return}await Ze(),window.isAdm=!0,window.__localIsAdm=!0,At(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();let r=document.getElementById("view-admin-login");r&&!r.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu());return}}catch{}et(),await Xe.signOut();return}if(e&&e.uid===Ne){Tt({uid:Ne,name:"Owner Toko",email:e.email,role:Ge.OWNER,isActive:!0});try{sessionStorage.setItem("pos_cashier_session",JSON.stringify({uid:Ne,name:"Owner Toko",email:e.email,role:Ge.OWNER}))}catch{}await Ze(),await Ns(),Hs(),window.isAdm=!0,window.__localIsAdm=!0,At(),typeof window.updatePOSHeaderIcon=="function"?window.updatePOSHeaderIcon():typeof window.initPOSAuth=="function"&&window.initPOSAuth();let t=document.getElementById("view-admin-login");t&&!t.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu(),showToast("Sesi Owner Dipulihkan! Selamat Datang."))}else Gs(),localStorage.removeItem("freshmart_admin_session_id"),et(),window.isAdm=!1,window.__localIsAdm=!1,Ls(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()}})});window.el=n;window.show=xe;window.hide=C;window.toggleCls=ce;window.setIn=re;window.setH=ge;window.setV=Be;window.getV=ye;window.esc=b;window.fixD=ut;window.fCur=w;window.fAccounting=ba;window.sL=at;window.ssL=Ve;window.defaultFbC=ft;window.fbC=ft;window.FIREBASE_CONFIG=ft;window.defApp=fa;window.ADMIN_UID=Ne;window.sLoad=Pe;window.hLoad=de;window.sanitizeCart=Es;window.initNativeMobileEngine=_t;window.triggerHaptic=xa;window.checkAndEnforceSubscriptionLockout=Fs;window.renderSubscriptionNoticeInCMS=Is;window.openRenewalModal=Rs;window.closeRenewalModal=Bs;window.verifyAndApplyLicenseKey=Cs;const $=(e,t,a)=>{try{Object.defineProperty(window,e,{get:t,set:a,configurable:!0})}catch{}};$("GAS_UPLOAD_URL",()=>It,e=>{It=e});$("confirmCb",()=>ga,e=>{ns(e)});$("appData",()=>f,e=>{wa(e)});$("cart",()=>N,e=>{Rt(e)});$("wishlist",()=>ka,e=>{ha(e)});$("myOrders",()=>H,e=>{Ye(e)});$("cust",()=>c,e=>{Bt(e)});$("currentMember",()=>I,e=>{st(e)});$("selectedReward",()=>Le,e=>{Ce(e)});$("memberCheckTimer",()=>va,e=>{ls(e)});$("aCat",()=>ot,e=>{jt(e)});$("aBrand",()=>rt,e=>{Ot(e)});$("sQ",()=>Pa,e=>{ya(e)});$("cSort",()=>Ta,e=>{Sa(e)});$("cView",()=>$a,e=>{Ma(e)});$("cPage",()=>Aa,e=>{bt(e)});$("iPP",()=>La,e=>{Da(e)});$("cTab",()=>Ea,e=>{ds(e)});$("aSq",()=>Fa,e=>{cs(e)});$("eId",()=>Ia,e=>{ps(e)});$("cProd",()=>Ba,e=>{Ra(e)});$("cVar",()=>ja,e=>{Ca(e)});$("tVars",()=>Oa,e=>{us(e)});$("tWhol",()=>_a,e=>{ms(e)});$("tSpec",()=>Ka,e=>{bs(e)});$("cQty",()=>Na,e=>{Ua(e)});$("oMods",()=>De,e=>{Ha(e)});$("aOrdLst",()=>qa,e=>{Ga(e)});$("aCustLst",()=>Va,e=>{Wa(e)});$("aRevLst",()=>Ja,e=>{za(e)});$("gOrds",()=>Za,e=>{Qa(e)});$("gReviews",()=>Xa,e=>{Ya(e)});$("cVOrd",()=>ts,e=>{es(e)});$("vouch",()=>k,e=>{Me(e)});$("toastT",()=>as,e=>{fs(e)});$("isSaving",()=>pt,e=>{be(e)});$("reviewFilterMode",()=>rs,e=>{ss(e)});$("lastReportPeriod",()=>is,e=>{os(e)});
