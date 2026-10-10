const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/module-admin-fQZJT0TA.js","assets/module-print-Bzvjq5h7.js","assets/vendor-firebase-core-D2OF5R23.js","assets/vendor-firebase-db-BIUZcnOd.js","assets/module-pos-DHcwy1vP.js","assets/module-member-BtPdKwFK.js","assets/module-faq-BATpuAcF.js","assets/vendor-sortable-DzmX_rHT.js"])))=>i.map(i=>d[i]);
import{a as b,g as ve,d,e as n,aQ as h,j as Te,h as I,a2 as de,c as U,f as w,a0 as ae,b as xe,i as f,a9 as Qt,a8 as Zt,y as Ae,s as fe,T as dt,aM as et,ah as qe,U as me,l as ye,n as le,p as F,q as W,t as K,aR as Je,w as tt,ag as Ft,F as Ie,aS as Lt,x as Ce,k as M,m as ct,aj as Yt,A as It,Z as pt,G as Xt,Y as ea,o as De,v as Ee,r as Pe,ak as $e,af as Fe,aC as Ct,av as ut,aE as Bt,ax as at,as as ta,aT as aa,aw as st,aU as sa,W as ra,aV as oa,aW as ia,an as na,aI as la,aK as da,aJ as ca,aX as vt,aY as Rt,_ as We,z as Qe,O as _e,E as Ze,R as He,P as yt,a1 as pa,aL as mt,aN as ua,aZ as ma,a_ as ba,a$ as fa,b0 as xa,ai as wa,b1 as ga,aF as ha,ay as ka,aG as va,aA as ya,aH as Pa,aB as Ta,at as Sa,b2 as Ma,au as $a,b3 as Aa,b4 as Da,b5 as Ea,ar as Fa,al as La,aq as Ia,am as Ca,b6 as Ba,b7 as Ra,b8 as Oa,ap as ja,ao as _a,b9 as Ua,I as Ka,H as Na,K as Ha,J as Ga,M as qa,L as Va,$ as Wa,u as za,ad as Ja,a5 as Qa,X as Za,V as Ya,ba as Xa,a7 as es,a6 as ts,Q as as,N as ss,bb as rs,bc as os,S as is,ae as ns,bd as ls,be as ds,bf as cs,bg as ps,bh as us}from"./module-print-Bzvjq5h7.js";import{f as Be}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import{p as ms}from"./vendor-utils-DqNA57iZ.js";import{g as Ot,w as bs,x as Pt,h as fs,y as xs,z as ws,A as gs,u as hs,B as ks,e as jt,C as vs,f as _t,D as ys,E as Ps,v as Ts,F as Ss,G as Ms,H as Tt,a as St,d as $s,I as As,J as Ds,K as Es,L as Fs,M as Ls,N as Is,O as Cs,P as Bs}from"./module-pos-DHcwy1vP.js";import{G as Rs,a as Ut,u as Os}from"./module-member-BtPdKwFK.js";import{i as js,a as _s,b as Us,d as Ks}from"./module-admin-fQZJT0TA.js";import{a as rt,c as Ns}from"./module-faq-BATpuAcF.js";import"./vendor-sortable-DzmX_rHT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const Hs=()=>{const e=n("toggle-droppoint"),t=n("droppoint-form");if(!(!e||!t))if(e.checked)t.classList.remove("hidden");else{t.classList.add("hidden"),d.dropPoint=null;const a=n("dp-location-status");a&&a.classList.add("hidden");const s=n("btn-dp-location");n("text-dp-location"),s&&(s.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>')}},Gs=()=>{if(!navigator.geolocation){typeof window.showToast=="function"&&window.showToast("GPS tidak didukung");return}const e=n("btn-dp-location");e&&(e.innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i> Mengambil GPS...'),navigator.geolocation.getCurrentPosition(t=>{d.dropPoint||(d.dropPoint={}),d.dropPoint.lat=t.coords.latitude,d.dropPoint.lng=t.coords.longitude;const a=n("dp-location-status");a&&a.classList.remove("hidden"),e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">GPS Berhasil! Tap untuk Update</span>'),typeof window.showToast=="function"&&window.showToast("GPS Lokasi Tujuan Berhasil!")},()=>{e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>'),typeof window.showToast=="function"&&window.showToast("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})},Kt=e=>{if(!e||e.trim().length<5)return;const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){d.dropPoint||(d.dropPoint={}),d.dropPoint.lat=parseFloat(a.lat),d.dropPoint.lng=parseFloat(a.lng);const s=n("dp-location-status");s&&s.classList.remove("hidden"),typeof window.showToast=="function"&&window.showToast("Koordinat Lokasi Tujuan berhasil!")}},qs=async()=>{try{const e=await navigator.clipboard.readText(),t=n("dp-maps-input");t&&(t.value=e,Kt(e))}catch{typeof window.showToast=="function"&&window.showToast("Gagal membaca clipboard")}},Vs=()=>{if(b.store.isDeliveryEnabled===!1&&b.store.isPickupEnabled===!1){typeof window.showToast=="function"&&window.showToast("Toko tutup!");return}const e=ve("cust-name"),t=(document.querySelector('input[name="delivery-method"]:checked')||{}).value;if(!e||!t){typeof window.showToast=="function"&&window.showToast("Lengkapi form nama!");return}let a=ve("cust-wa").replace(/\D/g,"");if(!a||a.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp wajib diisi! (min. 9 digit)");return}if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),d.name=e,d.deliveryMethod=t,d.note=ve("cust-note"),d.wa=a,t==="delivery"){if(d.address=ve("cust-address"),!d.lat||!d.lng){const i=n("cust-maps-input")?.value;i&&typeof window.handleCustomerMapsInput=="function"&&window.handleCustomerMapsInput(i)}if(!d.address||!d.lat||!d.lng){typeof window.showToast=="function"&&window.showToast("Alamat & GPS wajib!");return}const s=typeof window.getDist=="function"?window.getDist:()=>0;d.distance=s(parseFloat(b.store.lat||0),parseFloat(b.store.lng||0),d.lat,d.lng)||0;const o=n("toggle-droppoint");if(o&&o.checked){let i=ve("dp-receiver-name").trim(),c=ve("dp-receiver-wa").replace(/\D/g,""),l=ve("dp-address").trim();if(!i){typeof window.showToast=="function"&&window.showToast("Nama penerima di lokasi tujuan wajib diisi!");return}if(!c||c.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WA penerima di lokasi tujuan wajib diisi (min. 9 digit)!");return}if(!l){typeof window.showToast=="function"&&window.showToast("Alamat lokasi tujuan wajib diisi!");return}if(!d.dropPoint||!d.dropPoint.lat||!d.dropPoint.lng){typeof window.showToast=="function"&&window.showToast("GPS / Koordinat lokasi tujuan wajib diisi untuk kalkulasi ongkir!");return}c.startsWith("0")?c="62"+c.substring(1):c.startsWith("62")||(c="62"+c),d.dropPoint.name=i,d.dropPoint.wa=c,d.dropPoint.address=l,d.distance=s(parseFloat(b.store.lat||0),parseFloat(b.store.lng||0),d.dropPoint.lat,d.dropPoint.lng)||0}else d.dropPoint=null}else d.address="Ambil di Toko",d.distance=0,d.dropPoint=null;h&&h.type&&h.type.includes("shipping")&&t!=="delivery"&&Te(null),n("voucher-input")&&!h&&(n("voucher-input").value="",I("voucher-msg-container")),typeof window.changeView=="function"&&window.changeView("view-payment")},bt=()=>{de("address-container","hidden",(document.querySelector('input[name="delivery-method"]:checked')||{}).value==="pickup")},Nt=()=>{const e=n("tnc-checkbox"),t=n("btn-process-order");!e||!t||(e.checked?t.classList.remove("btn-disabled"):t.classList.add("btn-disabled"))},Ht=()=>{if(!U.length){typeof window.showToast=="function"&&window.showToast("Keranjang belanja kosong!"),typeof window.changeView=="function"&&window.changeView("view-catalog",!0);return}if(!d.name){typeof window.showToast=="function"&&window.showToast("Lengkapi data pengiriman terlebih dahulu!"),typeof window.changeView=="function"&&window.changeView("view-checkout",!0);return}const e=typeof window.getEffP=="function"?window.getEffP:p=>p.price||0,t=U.reduce((p,L)=>p+(parseFloat(e(L))||0)*(parseFloat(L.qty)||0),0);let a=0,s=0,o=0;if(d.deliveryMethod==="delivery"&&(a=Math.ceil((parseFloat(d.distance)||0)*(parseFloat(b.store.costPerKm)||0)/500)*500),h&&(h.minPurchase&&parseFloat(h.minPurchase)>0&&t<parseFloat(h.minPurchase)?(Te(null),I("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast(`Voucher dibatalkan (min. belanja ${w(h.minPurchase)})`)):h.targetProduct&&!U.some(p=>p.id===parseInt(h.targetProduct))&&(Te(null),I("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast("Voucher dibatalkan (produk khusus dihapus)"))),h){let p=t;if(h.targetProduct&&h.targetProduct!==""){const L=parseInt(h.targetProduct);p=U.filter(z=>z.id===L).reduce((z,N)=>z+(parseFloat(e(N))||0)*(parseFloat(N.qty)||0),0)}if(h.type==="shipping_free")s=a;else if(h.type==="shipping_flat")s=parseFloat(h.value)||0;else if(h.type==="percent"){let L=p*((parseFloat(h.value)||0)/100);h.maxDiscount&&parseFloat(h.maxDiscount)>0&&(L=Math.min(L,parseFloat(h.maxDiscount))),o=L}else o=parseFloat(h.value)||0,o=Math.min(o,p)}const r=(b.store.freeShippingMinSpendEnabled===!0||b.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(b.store.freeShippingMinSpendAmount)||0)>0&&t>=(parseFloat(b.store.freeShippingMinSpendAmount)||0)&&d.deliveryMethod==="delivery";r&&(s=a),s=Math.min(s,a),o=Math.min(o,t);const i=Math.max(0,t-o+(a-s)),l=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(i),u=l.ppnAmount,k=i+l.grandTotalAdd;ae("summary-subtotal",w(t)),de("summary-shipping-row","hidden",d.deliveryMethod!=="delivery");const E=n("summary-discount-row");if(E)if(o>0||s>0){E.classList.remove("hidden");let p="";o>0&&(p+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Promo</p><p class="text-[13px] font-bold text-rose-500">-${w(o)}</p></div>`),s>0&&(p+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">${r?"Gratis Ongkir (Promo Belanja)":"Diskon Ongkir"}</p><p class="text-[13px] font-bold text-rose-500">-${w(s)}</p></div>`),E.innerHTML=p}else E.classList.add("hidden");d.deliveryMethod==="delivery"&&(ae("summary-shipping",w(a)),ae("summary-distance",`(${d.distance.toFixed(1)}km)`)),ae("summary-total",w(k)),n("btn-total-preview")&&ae("btn-total-preview",w(k));const P=n("summary-ppn-row");if(P)if(l.ppnEnabled&&(u>0||l.ppnShowZero||l.ppnRate===0)){P.classList.remove("hidden");const L=l.ppnRate!==void 0?`${l.ppnRate}%`:"11%",se=l.ppnLabel||(l.ppnType==="inclusive"?`Termasuk PPN (${L})`:`PPN (${L})`);ae("summary-ppn-label",se),l.ppnType==="inclusive"?ae("summary-ppn",w(u)):ae("summary-ppn",u>0?`+${w(u)}`:w(0))}else P.classList.add("hidden");ae("payment-cust-name",d.name||"-"),n("payment-cust-wa")&&(n("payment-cust-wa").textContent=d.wa?"+"+d.wa:"-"),d.dropPoint&&d.dropPoint.lat?ae("payment-cust-method",`Kirim ke Lokasi Berbeda (${d.distance.toFixed(1)}km dari Toko)`):ae("payment-cust-method",d.deliveryMethod==="delivery"?`Dikirim (${d.distance.toFixed(1)}km)`:"Ambil di Toko"),ae("payment-cust-address",d.address||"-");const $=n("payment-droppoint-info");if($)if(d.dropPoint&&d.dropPoint.lat&&d.dropPoint.name){$.classList.remove("hidden"),ae("payment-dp-name",d.dropPoint.name||"-");const p=n("payment-dp-wa");p&&(p.textContent=d.dropPoint.wa?"+"+d.dropPoint.wa:"-"),ae("payment-dp-address",d.dropPoint.address||"-")}else $.classList.add("hidden");xe("payment-items-preview",U.map(p=>{const L=p.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${f(p.variantName)}</span>`:"",se=p.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${f(p.poTime)}</span>`:"",z=!!(p.img&&typeof p.img=="string"&&p.img.trim()&&!Qt(p.img)),N=Zt(p,{size:"thumb"});return`
        <div class="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
            <div class="flex items-center gap-3.5 min-w-0">
                <div class="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0 overflow-hidden flex items-center justify-center">
                    ${z?`<img loading="lazy" src="${f(p.img)}" alt="${f(p.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${N}</div>`:N}
                </div>
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate mb-1" title="${f(p.name)}">${f(p.name)}</p>
                    ${p.variantName||p.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${L}
                        ${se}
                    </div>`:""}
                    <p class="text-[11px] text-[var(--color-primary)] font-bold">${parseFloat(p.qty)} ${f(p.unit||"pcs")} x ${w(e(p))}</p>
                </div>
            </div>
            <div class="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap ml-3 shrink-0">${w(e(p)*parseFloat(p.qty))}</div>
        </div>`}).join("")+(Ae?`<div class="flex justify-between items-center bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] p-4 rounded-2xl border border-[var(--color-primary)]/30 shadow-sm min-w-0"><div class="flex items-center gap-3.5 min-w-0"><div class="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div><div class="min-w-0"><p class="text-sm font-bold text-[var(--color-primary)] truncate">${f(Ae.name)}</p><p class="text-[11px] text-[var(--color-primary)] font-bold mt-1"><i class="fa-solid fa-star mr-1"></i>Tukar ${Ae.pointsCost} Poin (Gratis)</p></div></div><button type="button" onclick="if(typeof deselectReward==='function') deselectReward(); rPay();" class="text-[10px] font-bold text-rose-500 uppercase shrink-0 ml-3">Batal</button></div>`:"")),d.note?(ae("payment-note-text",`"${f(d.note)}"`),fe("payment-note-preview")):I("payment-note-preview"),xe("dynamic-banks-container",b.banks?.length?b.banks.map(p=>`<div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Bank ${f(p.bankName)}</p><p class="text-lg font-bold text-[var(--color-primary)] tracking-wide">${f(p.bankAccount)}</p><p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1.5">a.n <span class="font-bold text-slate-700 dark:text-white">${f(p.bankOwner)}</span></p></div>`).join(""):'<div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 p-4 rounded-2xl text-center"><p class="text-sm text-rose-500 dark:text-rose-400 font-bold">Rekening belum diatur.</p></div>');const B=n("payment-option-cashier"),Z=n("payment-option-cod");if(B&&Z){if(d.deliveryMethod==="pickup"){if(fe("payment-option-cashier"),I("payment-option-cod"),(document.querySelector('input[name="payment"]:checked')||{}).value==="cod"){const p=document.querySelector('input[value="cashier"]');p&&(p.checked=!0)}}else{I("payment-option-cashier"),fe("payment-option-cod");const p=(document.querySelector('input[name="payment"]:checked')||{}).value;if(p==="cashier"||!p){const L=document.querySelector('input[value="cod"]');L&&(L.checked=!0)}}typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()}const j=n("tnc-checkbox");j&&(j.checked=!1,Nt())},Ws=async()=>{if(!n("tnc-checkbox").checked||dt)return;if(window.isAdm){typeof window.showToast=="function"&&window.showToast("Sesi Pengelola Aktif. Silakan keluar akun untuk membuat pesanan online.");return}const e=et("freshmart_last_order");if(e&&Date.now()-parseInt(e)<6e4){typeof window.showToast=="function"&&window.showToast("Pesanan sebelumnya sedang kami proses. Mohon beri jeda 1 menit sebelum memesan kembali.");return}const t=typeof window.getEffP=="function"?window.getEffP:r=>r.price||0,a=typeof window.getEffHpp=="function"?window.getEffHpp:()=>0,s=typeof window.getEffPoin=="function"?window.getEffPoin:()=>0;let o=!1;if(U.forEach(r=>{const i=b.products.find(l=>l.id===r.id);if(!i)return;const c=r.variantName?((i.variants||[]).find(l=>l.name===r.variantName)||{}).price??i.price:i.price;c!==void 0&&Math.abs(r.price-c)>1&&(r.price=c,o=!0),r.poin=s(r)}),o){qe("freshmart_cart",JSON.stringify(U)),typeof window.renderCart=="function"&&window.renderCart(),Ht(),typeof window.showToast=="function"&&window.showToast("Katalog harga telah diperbarui. Mohon periksa kembali rincian belanja Anda.");return}me(!0),ye("Memproses Pesanan Anda...");try{const r=U.reduce((x,g)=>x+(parseFloat(t(g))||0)*(parseFloat(g.qty)||0),0);let i=0,c=0,l=0;d.deliveryMethod==="delivery"&&(i=Math.ceil((parseFloat(d.distance)||0)*(parseFloat(b.store.costPerKm)||0)/500)*500);const u=b.store.useStock===!0||b.store.useStock==="true";if(u)for(const x of U){const g=b.products.find(T=>T.id===x.id);if(!g||!!(g.poTime&&String(g.poTime).trim()))continue;const D=parseFloat(x.qty)||0;if(x.variantName){const T=(g.variants||[]).find(ce=>ce.name===x.variantName),R=T?T.stock!=null&&T.stock!==""?T.stock:T.stok!=null&&T.stok!==""?T.stok:null:null,J=R!=null&&!isNaN(parseFloat(R))?parseFloat(R):0;if(J<D){me(!1),le(),typeof window.showToast=="function"&&window.showToast(`Persediaan ${x.name} (${x.variantName}) tidak mencukupi (tersisa ${J} unit).`);return}}else{const T=g.stock!=null&&g.stock!==""?g.stock:g.stok!=null&&g.stok!==""?g.stok:null,R=T!=null&&!isNaN(parseFloat(T))?parseFloat(T):0;if(R<D){me(!1),le(),typeof window.showToast=="function"&&window.showToast(`Persediaan ${x.name} tidak mencukupi (tersisa ${R} unit).`);return}}}if(h){let x=r;if(h.targetProduct&&h.targetProduct!==""){const g=parseInt(h.targetProduct);x=U.filter(D=>D.id===g).reduce((D,T)=>D+(parseFloat(t(T))||0)*(parseFloat(T.qty)||0),0)}if(h.minPurchase&&parseFloat(h.minPurchase)>0&&r<parseFloat(h.minPurchase))Te(null);else if(h.targetProduct&&h.targetProduct!==""&&x===0)Te(null);else if(h.type&&h.type.includes("shipping")&&d.deliveryMethod!=="delivery")Te(null);else if(h.type==="shipping_free")c=i;else if(h.type==="shipping_flat")c=parseFloat(h.value)||0;else if(h.type==="percent"){let g=x*((parseFloat(h.value)||0)/100);h.maxDiscount&&parseFloat(h.maxDiscount)>0&&(g=Math.min(g,parseFloat(h.maxDiscount))),l=g}else l=parseFloat(h.value)||0,l=Math.min(l,x)}const k=(b.store.freeShippingMinSpendEnabled===!0||b.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(b.store.freeShippingMinSpendAmount)||0)>0&&r>=(parseFloat(b.store.freeShippingMinSpendAmount)||0)&&d.deliveryMethod==="delivery";k&&(c=i),c=Math.min(c,i),l=Math.min(l,r);const E=Math.max(0,r-l+(i-c)),$=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(E),B=$.ppnAmount,Z=$.dppAmount,j=E+$.grandTotalAdd,p=(document.querySelector('input[name="payment"]:checked')||{}).value,L=parseFloat(document.getElementById("paylater-dp-input")?.value)||0,se=p==="transfer"||p==="qris"||p==="tempo"||p==="paylater"&&L>0,z=window.buktiGDriveUploaded&&window.buktiPaymentUrl&&!window.buktiPaymentUrl.startsWith("data:");if(se&&!z){if(me(!1),le(),!window.buktiPaymentFile){typeof window.showToast=="function"&&window.showToast("Mohon lampirkan foto struk / bukti pembayaran terlebih dahulu.");return}typeof window.showToast=="function"&&window.showToast("Sedang menyelesaikan unggahan bukti transaksi. Mohon tunggu...");return}const N="ORD-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase();if(window.buktiPaymentFile&&!window.buktiGDriveUploaded)try{ye("Mengunggah Bukti Pembayaran...");const x=await window.uploadBuktiToFirebase(window.buktiPaymentFile,N);if(x&&!x.startsWith("data:"))window.buktiPaymentUrl=x,window.buktiGDriveUploaded=!0;else{me(!1),le(),typeof window.showToast=="function"&&window.showToast("Gagal mengunggah berkas bukti. Silakan pilih kembali foto bukti transfer Anda.");return}ye("Memproses Pesanan Anda...")}catch{me(!1),le(),typeof window.showToast=="function"&&window.showToast("Koneksi unggah terganggu. Silakan periksa jaringan internet dan coba kembali.");return}const m={orderId:N,timestamp:Be.firestore.FieldValue.serverTimestamp(),dateString:new Date().toISOString(),customer:d,isDropPoint:!!(d.dropPoint&&d.dropPoint.lat&&d.dropPoint.name),dropPoint:d.dropPoint&&d.dropPoint.lat&&d.dropPoint.name?{...d.dropPoint}:null,items:U.map(x=>({...x,qty:parseFloat(x.qty),effectivePrice:t(x),poTime:x.poTime||"",hpp:a(x),poin:s(x)})),payment:{method:p,subtotal:r,shippingCost:i,shippingDiscount:c,productDiscount:l,ppnAmount:B,dppAmount:Z,ppnRate:$.ppnEnabled?$.ppnRate:0,ppnType:$.ppnEnabled?$.ppnType:"exclusive",ppnEnabled:!!$.ppnEnabled,ppnShowZero:!!$.ppnShowZero,ppnLabel:$.ppnLabel||"",taxNpwp:b.store?.taxNpwp||b.taxSettings?.npwp||"",grandTotal:j,isFreeShippingPromo:k||!1},status:"Baru",buktiPayment:window.buktiPaymentUrl||null};if(p==="tempo"){if(!d.wa){me(!1),le(),typeof window.showToast=="function"&&window.showToast("Pembayaran Cash Tempo hanya untuk Member Resmi terdaftar!");return}const x=document.getElementById("tempo-dp-input");let g=x&&parseFloat(x.value)||0;g>j&&(g=j),m.payment.dp=g,m.payment.tempoDp=g,m.payment.tempoBalance=Math.max(0,j-g),m.payment.tempoDueDate=Date.now()+30*24*60*60*1e3,m.payment.paymentStatus=j-g<=0?"lunas":"hutang"}if(p==="paylater"){if(!d.wa||!F||!(F.paylaterActive===!0||F.paylaterActive==="true")){me(!1),le(),typeof window.showToast=="function"&&window.showToast("Fitur Putri PayLater belum aktif untuk nomor Anda!");return}const x=parseFloat(F.paylaterLimit)||0,g=Math.max(0,parseFloat(F.paylaterUsed)||0),oe=Math.max(0,x-g),D=document.getElementById("paylater-dp-input");let T=D&&parseFloat(D.value)||0;if(j>oe&&T<j-oe){me(!1),le(),typeof window.showToast=="function"&&window.showToast("Limit PayLater tidak cukup! Wajib bayar DP minimal "+w(j-oe));return}const R=Math.min(oe,Math.max(0,j-T));m.payment.method="tempo",m.payment.subMethod="paylater",m.payment.isPaylater=!0,m.payment.paylaterUsed=R,m.payment.dp=T,m.payment.tempoDp=T;const J=F?.paylaterDueDay||5,ce=window.selectedCheckoutPaylaterTenor||window.currentPaylaterBreakdown?.tenorKey||"30d",be=Ot(),Y=bs(R,ce,{...be,dueDay:J}),X=Y.months,he=Y.totalAdminFee,Q=Y.totalServiceFee,ie=Y.totalPerMonth,_=Y.schedule;m.payment.paylaterTenor=ce,m.payment.paylaterMonths=X,m.payment.paylaterAdminFee=he,m.payment.paylaterServiceFee=Q,m.payment.paylaterMonthlyInstallment=ie,m.payment.paylaterSchedule=_;const ne=Y.grandTotal;m.payment.tempoBalance=ne;const y=_.length>0?_[_.length-1].dueDate:Date.now()+X*30*24*60*60*1e3;if(m.payment.tempoDueDate=y,m.payment.paymentStatus=ne<=0?"lunas":"hutang",m.isTempo=!0,m.paylaterLimitTracked=!1,R>0){if(F){F.paylaterUsed=Math.max(0,parseFloat(F.paylaterUsed)||0)+R;try{localStorage.setItem("freshmart_current_member",JSON.stringify(F))}catch{}}const q=(F?.phone||d.wa||"").replace(/\D/g,""),Se=q.startsWith("0")?"62"+q.slice(1):q;try{await W.collection("freshmart").doc("cms_data").collection("customers").doc(Se).update({paylaterUsed:Be.firestore.FieldValue.increment(R)}),m.paylaterLimitTracked=!0}catch(ue){console.warn("[PayLater] Gagal update pemakaian limit di Firestore:",ue.code||ue.message||ue)}}}const we=W.collection("freshmart_orders").doc(N),A=typeof window.calculateCartPoints=="function"?window.calculateCartPoints(U,b.store):{totalPoints:0,directPoints:0,spendPoints:0},re=A.totalPoints;m.pointsEarned=re,m.pointsBreakdown={direct:A.directPoints,spend:A.spendPoints};const ee=W.collection("freshmart").doc("cms_data"),te=(F?.phone||d.wa||"").replace(/\D/g,""),v=te?te.startsWith("0")?"62"+te.slice(1):te:null,pe=v?ee.collection("customers").doc(v):null,H=!!Ae;let O=null;if(u){const x={};U.forEach(D=>{const T=D.id!=null?D.id.toString():null;if(!T)return;x[T]||(x[T]={main:0,variants:{}});const R=parseFloat(D.unitMultiplier)||1,J=(parseFloat(D.qty)||0)*R;D.variantName?x[T].variants[D.variantName]=(x[T].variants[D.variantName]||0)+J:x[T].main+=J});const g=Object.keys(x),oe=g.map(D=>W.collection("freshmart").doc("cms_data").collection("products").doc(D));await W.runTransaction(async D=>{const T=await Promise.all(oe.map(Q=>D.get(Q))),R=pe?await D.get(pe):null,J=!!(R&&R.exists),ce=J&&H?W.collection("freshmart").doc("cms_data").collection("rewards").doc(Ae.id.toString()):null,be=ce?await D.get(ce):null,Y=[];if(T.forEach((Q,ie)=>{if(!Q.exists)return;const _=Q.data(),ne=x[g[ie]];if(ne.main>0){const y=parseFloat(_.stock!==void 0?_.stock:0);y<ne.main&&Y.push(`${_.name} (sisa ${y})`)}Object.keys(ne.variants).forEach(y=>{const q=(_.variants||[]).find(ue=>ue.name===y),Se=parseFloat(q&&q.stock!==void 0?q.stock:0);Se<ne.variants[y]&&Y.push(`${_.name} (${y}, sisa ${Se})`)})}),Y.length)throw new Error("STOK_TIDAK_CUKUP: "+Y.join(", "));let X=null,he=null;if(J){const Q=parseFloat(R.data().points)||0;let ie=Q;if(H){if(!be||!be.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const _=be.data();if(Q<(parseFloat(_.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(_.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");X=(parseFloat(_.stock)||0)-1,ie-=parseFloat(_.pointsCost)||0,m.claimedReward={id:_.id,name:_.name,pointsCost:parseFloat(_.pointsCost)||0,status:"pending",note:""}}ie+=re,he=ie,m.pointsEarned=re,m.customerPhone=d.wa,m.finalMemberPoints=he,m.customerType="Member"}else{if(p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(H)throw new Error("MEMBER_TIDAK_DITEMUKAN");m.pointsEarned=0,m.pointsBreakdown={direct:0,spend:0},m.finalMemberPoints=null,m.customerType="Pelanggan Umum"}if(T.forEach((Q,ie)=>{if(!Q.exists)return;const _=g[ie],ne=x[_],y=JSON.parse(JSON.stringify(Q.data())),q={};ne.main>0&&(Pt(y,ne.main),q.stock=y.stock,y.storeStock!==void 0&&(q.storeStock=y.storeStock),y.warehouseStock!==void 0&&(q.warehouseStock=y.warehouseStock),Array.isArray(y.stockBatches)&&(q.stockBatches=y.stockBatches),y.hpp&&(q.hpp=y.hpp),y.stock===0&&(y.isActive="false",q.isActive="false"),y.totalSold=(parseFloat(y.totalSold)||0)+ne.main,q.totalSold=y.totalSold),Object.keys(ne.variants).length>0&&y.variants&&(Object.keys(ne.variants).forEach(ue=>{const kt=ne.variants[ue];Pt(y,kt,ue);const je=(y.variants||[]).findIndex(Jt=>Jt.name===ue);je>-1&&(y.variants[je].stock===0&&(y.variants[je].isActive=!1),y.variants[je].totalSold=(parseFloat(y.variants[je].totalSold)||0)+kt)}),q.variants=y.variants,q.stock=y.stock,y.storeStock!==void 0&&(q.storeStock=y.storeStock),y.warehouseStock!==void 0&&(q.warehouseStock=y.warehouseStock),Array.isArray(y.stockBatches)&&(q.stockBatches=y.stockBatches));const Se=b.products.findIndex(ue=>ue.id.toString()===_);Se>-1&&(b.products[Se]=y),D.update(oe[ie],q)}),D.set(we,m),J&&pe&&he!==null){const Q=R.data().name||d.name||"Pelanggan Setia";m.customer&&(m.customer.name=Q);const ie={points:he,name:Q,lastOrderAt:Date.now()};D.set(pe,ie,{merge:!0}),O=he}X!==null&&D.set(ce,{stock:X},{merge:!0}),D.update(ee,{lastUpdate:Be.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:g})}),b.lastUpdate=(parseInt(et("freshmart_last_update"))||b.lastUpdate||0)+1,qe("freshmart_last_update",b.lastUpdate.toString()),qe("freshmart_products",JSON.stringify(b.products))}else if(pe)await W.runTransaction(async x=>{const g=await x.get(pe),oe=g.exists,D=oe&&H?W.collection("freshmart").doc("cms_data").collection("rewards").doc(Ae.id.toString()):null,T=D?await x.get(D):null;let R=null,J=null;if(oe){const ce=parseFloat(g.data().points)||0;let be=ce;if(H){if(!T||!T.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const X=T.data();if(ce<(parseFloat(X.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(X.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");R=(parseFloat(X.stock)||0)-1,be-=parseFloat(X.pointsCost)||0,m.claimedReward={id:X.id,name:X.name,pointsCost:parseFloat(X.pointsCost)||0,status:"pending",note:""}}be+=re,J=be,m.pointsEarned=re,m.customerPhone=d.wa,m.finalMemberPoints=J,m.customerType="Member";const Y=g.data().name||d.name||"Pelanggan Setia";m.customer&&(m.customer.name=Y),x.set(pe,{points:J,name:Y,lastOrderAt:Date.now()},{merge:!0}),O=J,R!==null&&x.set(D,{stock:R},{merge:!0})}else{if(p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(H)throw new Error("MEMBER_TIDAK_DITEMUKAN");m.pointsEarned=0,m.pointsBreakdown={direct:0,spend:0},m.finalMemberPoints=null,m.customerType="Pelanggan Umum"}x.set(we,m)});else{if(m.pointsEarned=0,m.pointsBreakdown={direct:0,spend:0},m.finalMemberPoints=null,m.customerType="Pelanggan Umum",p==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");await we.set(m)}let ge=!1;if((m.items||[]).forEach(x=>{typeof window.recordFlashSaleSale=="function"&&window.recordFlashSaleSale(x.id,x.variantName,x.qty)&&(ge=!0)}),ge&&Array.isArray(b.flashSales))try{await W.collection("freshmart").doc("cms_data").update({flashSales:b.flashSales,lastUpdate:Be.firestore.FieldValue.increment(1)})}catch(x){console.warn("[Checkout] Gagal update kuota Flash Sale:",x)}const ke={orderId:N,date:m.dateString||new Date().toISOString(),dateString:m.dateString||new Date().toISOString(),total:j,itemCount:U.reduce((x,g)=>x+parseFloat(g.qty),0),status:"Baru",pointsEarned:m.pointsEarned||0,claimedReward:m.claimedReward||null,finalMemberPoints:O,customerType:m.customerType||"Pelanggan Umum",customer:m.customer||d,items:m.items||[],payment:m.payment||{},isTempo:!!m.isTempo};K.unshift(ke),Je(K),window.currentCustomerOrder=m,window.lastPrintedOrder=m;try{localStorage.setItem("freshmart_my_orders",JSON.stringify(K)),localStorage.setItem("freshmart_last_order",Date.now().toString())}catch{}if(typeof analytics<"u"&&analytics.logEvent("purchase",{transaction_id:N,value:j,currency:"IDR"}),d.wa&&O!==null){const x={id:d.wa,phone:d.wa,name:d.name||"Pelanggan Setia",points:O,paylaterActive:F?F.paylaterActive===!0||F.paylaterActive==="true":!1,paylaterLimit:F&&parseFloat(F.paylaterLimit)||0,paylaterUsed:F?Math.max(0,parseFloat(F.paylaterUsed)||0):0,paylaterDueDay:F&&F.paylaterDueDay||5};tt(x);try{localStorage.setItem("freshmart_current_member",JSON.stringify(x)),localStorage.setItem("freshmart_member_wa",d.wa)}catch{}typeof window.invalidateMemberCache=="function"&&window.invalidateMemberCache(d.wa)}else{tt(null);try{localStorage.removeItem("freshmart_current_member")}catch{}}m.claimedReward&&O!==null?typeof window.showToast=="function"&&window.showToast(`Hadiah eksklusif "${m.claimedReward.name}" berhasil ditukarkan! Sisa poin reward Anda: ${O}`):O!==null&&re>0?typeof window.showToast=="function"&&window.showToast(`Pesanan Anda berhasil dikonfirmasi! (+${re} Poin Member terkumpul)`):typeof window.showToast=="function"&&window.showToast("Pesanan Anda berhasil dikonfirmasi dan siap diproses!"),setTimeout(()=>{Ft([]),Ie("cust-name",""),Ie("cust-address",""),Ie("cust-maps-input",""),Ie("cust-note",""),Ie("cust-wa",""),window.buktiPaymentUrl=null,window.buktiPaymentFile=null,window.buktiGDriveUploaded=!1;const x=n("bukti-preview-wrap"),g=n("bukti-placeholder");x&&x.classList.add("hidden"),g&&g.classList.remove("hidden"),I("bukti-uploading"),I("bukti-success"),I("bukti-gdrive-error");const oe=n("bukti-file-input");oe&&(oe.value=""),Lt({name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:"",dropPoint:null}),Te(null),Ce(null);const D=n("toggle-droppoint"),T=n("droppoint-form");D&&(D.checked=!1),T&&T.classList.add("hidden");const R=n("dp-location-status");R&&R.classList.add("hidden");const J=n("payment-droppoint-info");J&&J.classList.add("hidden");const ce=n("dp-receiver-name");ce&&(ce.value="");const be=n("dp-receiver-wa");be&&(be.value="");const Y=n("dp-address");Y&&(Y.value="");const X=n("dp-maps-input");X&&(X.value="");const he=n("btn-dp-location");he&&(he.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan Titik GPS Lokasi Proyek</span>');const Q=n("member-status-banner");Q&&I(Q),I("payment-option-tempo"),n("voucher-input")&&(n("voucher-input").value=""),I("voucher-msg-container"),I("location-status"),n("btn-location")&&fe("btn-location");const ie=document.querySelector('input[name="delivery-method"][value="delivery"]');ie&&(ie.checked=!0,bt());const _=document.querySelector('input[name="payment"][value="transfer"]');_&&(_.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()),typeof window.updCart=="function"&&window.updCart(),typeof window.renderCart=="function"&&window.renderCart();try{window.history.replaceState({view:"view-catalog"},"",window.location.pathname)}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog",!0),typeof window.showToast=="function"&&window.showToast("Pesanan Anda Berhasil Dibuat!")},2e3)}catch(r){const i=r.message||"Error";i.startsWith("STOK_TIDAK_CUKUP:")?typeof window.showToast=="function"&&window.showToast("Ketersediaan stok baru saja diperbarui: "+i.replace("STOK_TIDAK_CUKUP: ","")):i==="TEMPO_KHUSUS_MEMBER"?typeof window.showToast=="function"&&window.showToast("Fasilitas Cash Tempo khusus untuk Rekanan & Member VIP resmi terdaftar."):i==="POIN_TIDAK_CUKUP"?(typeof window.showToast=="function"&&window.showToast("Poin reward Anda belum mencukupi untuk penukaran hadiah ini."),Ce(null)):i==="STOK_HADIAH_HABIS"?(typeof window.showToast=="function"&&window.showToast("Persediaan hadiah yang dipilih baru saja habis. Silakan pilih hadiah lainnya."),Ce(null)):i==="HADIAH_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Hadiah yang dipilih sudah tidak aktif. Silakan pilih hadiah pengganti."),Ce(null)):i==="MEMBER_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Data member tidak terverifikasi. Penukaran hadiah dibatalkan."),Ce(null)):typeof window.showToast=="function"&&window.showToast(r.code==="resource-exhausted"?"Layanan server sedang padat. Mohon coba sesaat lagi.":"Gagal memproses pesanan: "+i)}finally{me(!1),le()}};window.validateAndGoToPayment=Vs;window.toggleDeliveryMethod=bt;window.toggleDropPoint=Hs;window.getDPLocation=Gs;window.handleDPMapsInput=Kt;window.pasteDPMapsInput=qs;window.toggleOrderButton=Nt;window.rPay=Ht;window.processOrder=Ws;window.getLocation=()=>{if(!navigator.geolocation)return M("GPS tidak didukung");n("btn-location").innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i>',navigator.geolocation.getCurrentPosition(e=>{d.lat=e.coords.latitude,d.lng=e.coords.longitude,I("btn-location"),fe("location-status"),n("location-status").classList.add("flex"),M("GPS Didapatkan")},e=>{n("btn-location").innerHTML='<i class="fa-solid fa-location-crosshairs text-[var(--color-primary)]"></i> Set GPS Maps',M("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})};window.handleCustomerMapsInput=e=>{const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){d.lat=parseFloat(a.lat),d.lng=parseFloat(a.lng),I("btn-location"),fe("location-status");const s=n("location-status");return s&&(s.classList.add("flex"),s.innerHTML=`
                <i class="fa-solid fa-circle-check shrink-0 text-lg primary-text"></i>
                <div class="min-w-0">
                    <span class="text-[10px] font-bold uppercase leading-tight tracking-wide primary-text block">Koordinat Berhasil Disematkan!</span>
                    <span class="text-[9px] text-slate-500 dark:text-slate-400 font-mono">${a.lat}, ${a.lng}</span>
                </div>
            `),M("Titik lokasi Maps pembeli berhasil disematkan!"),typeof window.rPay=="function"&&window.rPay(),!0}return!1};window.pasteCustomerMapsInput=async()=>{const e=n("cust-maps-input");if(e){try{if(navigator.clipboard&&navigator.clipboard.readText){const t=await navigator.clipboard.readText();if(t){e.value=t,window.handleCustomerMapsInput(t)||M("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Maps");return}}}catch{}e.focus(),M("Silakan tekan Ctrl+V atau tahan untuk menempel")}};const zs=()=>{const e=b.store.isDeliveryEnabled!==!1,t=b.store.isPickupEnabled!==!1;de("delivery-option-container","hidden",!e),de("pickup-option-container","hidden",!t),de("no-delivery-warning","hidden",e||t),de("delivery-methods-grid","hidden",!(e||t));const a=n("btn-checkout-next");if(a)if(e||t){a.removeAttribute("disabled"),a.classList.remove("opacity-50");const o=(d.deliveryMethod||"delivery")==="pickup"&&t?"pickup":e?"delivery":"pickup",r=document.querySelector(`input[value="${o}"]`);r&&(r.checked=!0)}else a.setAttribute("disabled","true"),a.classList.add("opacity-50");bt()};window.rChck=zs;window.buktiPaymentUrl=null;window.buktiPaymentFile=null;window.buktiGDriveUploaded=!1;window.compressImageForUpload=(e,t=1600,a=.82)=>new Promise(s=>{const o=new FileReader;o.readAsDataURL(e),o.onload=r=>{const i=new Image;i.onload=()=>{let{width:c,height:l}=i;(c>t||l>t)&&(c>l?(l=Math.round(l*t/c),c=t):(c=Math.round(c*t/l),l=t));const u=document.createElement("canvas");u.width=c,u.height=l,u.getContext("2d").drawImage(i,0,0,c,l),u.toBlob(k=>{if(!k)return s(e);s(new File([k],e.name,{type:"image/jpeg",lastModified:Date.now()}))},"image/jpeg",a)},i.onerror=()=>s(e),i.src=r.target.result},o.onerror=()=>s(e)});window._doSingleGDriveUpload=async(e,t)=>{const a=new FileReader;return new Promise(s=>{a.readAsDataURL(e),a.onload=async()=>{try{const o=a.result.split(",")[1],r=(e.name||"bukti.jpg").replace(/[^a-zA-Z0-9.]/g,"_"),i={name:"BUKTI_"+t+"_"+Date.now()+"_"+r,mimeType:e.type||"image/jpeg",data:o,token:Rs},c=await fetch(Ut,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"});if(!c.ok)return console.warn("GDrive upload HTTP error:",c.status),s(null);const l=await c.text();let u;try{u=JSON.parse(l)}catch{return console.warn("GDrive response parse error"),s(null)}u&&u.status==="success"&&u.url?s(ct(u.url)):(console.warn("GDrive upload gagal:",u&&u.message),s(null))}catch(o){console.warn("GDrive upload exception:",o),s(null)}},a.onerror=()=>s(null)})};window.uploadBuktiToGDrive=async(e,t)=>{if(!e)return null;const a=n("bukti-uploading-text");a&&(a.textContent="Mengupload bukti ke Google Drive...");try{return await Os(e,"BUKTI_"+(t||Date.now()))}catch(s){return console.warn("Gagal upload bukti ke GDrive via GAS:",s),null}};window.handleBuktiUpload=async e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/"))return M("Hanya file gambar yang diizinkan!");if(t.size>5*1024*1024)return M("Ukuran gambar max 5MB!");window.buktiPaymentFile=t,window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const a=new FileReader;a.onload=i=>{const c=n("bukti-preview-img"),l=n("bukti-preview-wrap"),u=n("bukti-placeholder");c&&(c.src=i.target.result),l&&l.classList.remove("hidden"),u&&u.classList.add("hidden")},a.readAsDataURL(t),I("bukti-success"),I("bukti-gdrive-error");const s=n("bukti-uploading");s&&(s.classList.remove("hidden"),s.style.display="flex");const o="TEMP_"+Date.now().toString(36).toUpperCase(),r=await window.uploadBuktiToGDrive(t,o);if(I("bukti-uploading"),r){window.buktiPaymentUrl=r,window.buktiGDriveUploaded=!0;const i=n("bukti-success"),c=n("bukti-success-text"),l=n("bukti-storage-info");c&&(c.textContent="Bukti berhasil disimpan!"),l&&(l.textContent="(tersimpan di Google Drive)"),i&&(i.classList.remove("hidden"),i.style.display="flex"),I("bukti-gdrive-error")}else{window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const i=n("bukti-gdrive-error");i&&(i.classList.remove("hidden"),i.style.display="flex"),I("bukti-success"),M("Upload ke Google Drive gagal. Coba lagi!")}};window.retryBuktiUpload=async()=>{if(!window.buktiPaymentFile)return M("Pilih gambar terlebih dahulu!");I("bukti-gdrive-error"),I("bukti-success");const e=n("bukti-uploading");e&&(e.classList.remove("hidden"),e.style.display="flex");const t="RETRY_"+Date.now().toString(36).toUpperCase(),a=await window.uploadBuktiToGDrive(window.buktiPaymentFile,t);if(I("bukti-uploading"),a){window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0;const s=n("bukti-success"),o=n("bukti-success-text"),r=n("bukti-storage-info");o&&(o.textContent="Bukti berhasil disimpan!"),r&&(r.textContent="(tersimpan di Google Drive)"),s&&(s.classList.remove("hidden"),s.style.display="flex"),M("Upload berhasil!")}else{const s=n("bukti-gdrive-error");s&&(s.classList.remove("hidden"),s.style.display="flex"),M("Masih gagal. Periksa koneksi internet Anda.")}};window.uploadBuktiToFirebase=async(e,t)=>{if(window.buktiGDriveUploaded&&window.buktiPaymentUrl)return window.buktiPaymentUrl;if(!e)return null;const a=await window.uploadBuktiToGDrive(e,t);return a&&(window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0),a};window.togglePaymentDetails=()=>{const e=(document.querySelector('input[name="payment"]:checked')||{}).value;if(de("detail-transfer","hidden",e!=="transfer"),de("detail-qris","hidden",e!=="qris"),de("detail-cashier","hidden",e!=="cashier"),de("detail-cod","hidden",e!=="cod"),de("detail-tempo","hidden",e!=="tempo"),de("detail-paylater","hidden",e!=="paylater"),e==="tempo"&&window.calculateTempoBalance(),e==="paylater"&&window.calculatePaylaterBalance?.(),e==="qris"){const s=n("dyn-qris-img");if(s){const o=b.payment?.qrisUrl||b.store?.qrisUrl||b.payment?.qris||b.store?.qris||b.qrisUrl||"";o&&(s.src=ct(o))}}const t=parseFloat(document.getElementById("paylater-dp-input")?.value)||0,a=e==="transfer"||e==="qris"||e==="tempo"||e==="paylater"&&t>0;de("bukti-payment-section","hidden",!a)};window.selectedCheckoutPaylaterTenor=window.selectedCheckoutPaylaterTenor||"30d";window.selectCheckoutPaylaterTenor=e=>{window.selectedCheckoutPaylaterTenor=e,typeof window.calculatePaylaterBalance=="function"&&window.calculatePaylaterBalance()};window.calculatePaylaterBalance=()=>{const e=F?Math.max(0,parseFloat(F.paylaterLimit)||0):0,t=F?Math.max(0,parseFloat(F.paylaterUsed)||0):0,a=Math.max(0,e-t),s=F?.paylaterDueDay||5,o=document.getElementById("paylater-limit-display"),r=document.getElementById("paylater-due-display"),i=document.getElementById("paylater-status-box"),c=document.getElementById("paylater-excess-dp-container"),l=document.getElementById("paylater-dp-input"),u=document.getElementById("paylater-tenor-chips-grid"),k=document.getElementById("paylater-tenor-breakdown-box");o&&(o.textContent=w(a)),r&&(r.textContent="Tgl "+s+" Tiap Bulan");let E=U.reduce((H,O)=>H+(parseFloat(getEffP(O))||0)*(parseFloat(O.qty)||0),0),P=0,$=0,B=0;if(d.deliveryMethod==="delivery"&&(P=Math.ceil((parseFloat(d.distance)||0)*(parseFloat(b.store.costPerKm)||0)/500)*500),typeof vouch<"u"&&vouch){let H=E;if(vouch.targetProduct&&vouch.targetProduct!==""){const O=parseInt(vouch.targetProduct);H=U.filter(ke=>ke.id===O).reduce((ke,x)=>ke+(parseFloat(getEffP(x))||0)*(parseFloat(x.qty)||0),0)}if(vouch.type==="shipping_free")B=P;else if(vouch.type==="shipping_flat")B=parseFloat(vouch.value)||0;else if(vouch.type==="percent"){let O=H*((parseFloat(vouch.value)||0)/100);vouch.maxDiscount&&parseFloat(vouch.maxDiscount)>0&&(O=Math.min(O,parseFloat(vouch.maxDiscount))),$=O}else $=parseFloat(vouch.value)||0,$=Math.min($,H)}(b.store?.freeShippingMinSpendEnabled===!0||b.store?.freeShippingMinSpendEnabled==="true")&&(parseFloat(b.store?.freeShippingMinSpendAmount)||0)>0&&E>=(parseFloat(b.store?.freeShippingMinSpendAmount)||0)&&d.deliveryMethod==="delivery"&&(B=P),B=Math.min(B,P),$=Math.min($,E);let j=Math.max(0,E-$),p=Math.max(0,P-B);const L=typeof window.calcTaxDetails=="function"?window.calcTaxDetails(j+p):{grandTotalAdd:0};let se=0;window.useMemberPoints&&F&&(se=Math.min(j+p+L.grandTotalAdd,parseFloat(F.points)||0));let z=Math.max(0,j+p+(L.grandTotalAdd||0)-se),N=0;const m=z>a;if(m){const H=z-a;N=parseFloat(l?.value)||0,N<H&&(N=H,l&&(l.value=N)),c&&c.classList.remove("hidden")}else c&&c.classList.add("hidden"),l&&(l.value=0),N=0;const we=Math.min(a,Math.max(0,z-N)),A=Ot(),ee=fs(we>0?we:z,{...A,dueDay:s}).results;let te=window.selectedCheckoutPaylaterTenor||"30d";(!ee[te]||!ee[te].enabled)&&(te=Object.keys(ee).find(O=>ee[O].enabled)||"30d",window.selectedCheckoutPaylaterTenor=te);const v=ee[te];if(window.currentPaylaterBreakdown=v,u){const H=["30d","2m","3m"];u.innerHTML=H.map(O=>{const ge=ee[O];if(!ge||!ge.enabled)return"";const ke=O===te;return`
                <button type="button" onclick="window.selectCheckoutPaylaterTenor('${O}')" 
                        class="p-2 sm:p-2.5 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 min-h-[46px] select-none touch-manipulation active:scale-95 ${ke?"border-2 text-[var(--color-primary)] shadow-sm":"border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600"}"
                        style="${ke?"border-color: var(--color-primary); background: rgba(var(--color-primary-rgb), 0.1); box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.15);":""}">
                    <span class="text-[9.5px] font-black uppercase tracking-wider block">${f(ge.shortLabel)}</span>
                    <span class="text-[11px] sm:text-xs font-black block" ${ke?'style="color: var(--color-primary);"':""}>${w(ge.totalPerMonth)}<span class="text-[8px] font-normal text-slate-400">/bln</span></span>
                </button>
            `}).filter(Boolean).join("")}if(k&&v&&(k.innerHTML=`
            <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 shadow-2xs space-y-1.5 text-xs" style="border-left: 3.5px solid var(--color-primary);">
                <div class="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-700">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                        <i class="fa-solid fa-receipt" style="color: var(--color-primary);"></i> Rincian Tenor ${f(v.label)}
                    </span>
                    <span class="text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                        <i class="fa-solid fa-shield-halved text-[9px] text-emerald-500"></i> Transparan
                    </span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span>Pokok Tagihan (${v.months} bulan)</span>
                    <span class="font-bold text-slate-800 dark:text-slate-200">${w(v.pokokPerMonth)} / bln</span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span class="flex items-center gap-1">Biaya Admin ${v.adminFeeType==="percent"&&v.adminFeeValue>0?`(${v.adminFeeValue}%)`:""}</span>
                    <span class="font-bold ${v.adminFeePerMonth===0?"text-emerald-600 dark:text-emerald-400":"text-slate-800 dark:text-slate-200"}">
                        ${v.adminFeePerMonth===0?"Rp 0 (Gratis)":`${w(v.adminFeePerMonth)} / bln`}
                    </span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span class="flex items-center gap-1">Biaya Penanganan ${v.serviceFeeType==="percent"&&v.serviceFeeValue>0?`(${v.serviceFeeValue}%)`:""}</span>
                    <span class="font-bold ${v.serviceFeePerMonth===0?"text-emerald-600 dark:text-emerald-400":"text-slate-800 dark:text-slate-200"}">
                        ${v.serviceFeePerMonth===0?"Rp 0 (Gratis)":`${w(v.serviceFeePerMonth)} / bln`}
                    </span>
                </div>
                <div class="pt-2 mt-1.5 border-t border-dashed border-slate-200 dark:border-slate-700 flex justify-between items-baseline">
                    <span class="text-[11px] font-black uppercase text-slate-800 dark:text-white">Tagihan per Bulan:</span>
                    <span class="text-sm font-black font-mono" style="color: var(--color-primary);">${w(v.totalPerMonth)} <span class="text-[10px] font-bold text-slate-400">/ bulan</span></span>
                </div>
                <div class="flex justify-between items-center text-[10px] text-slate-500 pt-0.5">
                    <span>Total Tagihan Seluruhnya:</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300">${w(v.grandTotal)}</span>
                </div>
            </div>
        `),!m)i&&(i.innerHTML='<div class="flex items-center gap-2 font-extrabold mb-1" style="color: var(--color-primary);"><i class="fa-solid fa-circle-check text-emerald-500 text-sm"></i><span>Limit PayLater Anda Sangat Cukup!</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Total belanja <b>'+w(z)+"</b> otomatis dipotong dari limit PayLater Anda. Anda <b>tidak perlu bayar sekarang</b> dan tanpa uang muka (DP Rp 0). Angsuran dicicil sesuai tenor "+f(v.label)+" ("+w(v.totalPerMonth)+"/bln) mulai tgl "+s+" bulan depan.</p>");else{const H=z-a;i&&(i.innerHTML='<div class="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-extrabold mb-1"><i class="fa-solid fa-triangle-exclamation text-amber-500 text-sm"></i><span>Total Belanja Melebihi Sisa Limit PayLater</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Sisa limit Anda <b>'+w(a)+"</b> akan digunakan maksimal untuk cicilan "+f(v.label)+" ("+w(v.totalPerMonth)+"/bln). Selisih kekurangan sebesar <b>"+w(H)+"</b> wajib dibayar sebagai DP via Transfer/QRIS.</p>")}const pe=(parseFloat(l?.value)||0)>0;de("bukti-payment-section","hidden",!pe)};window.calculateTempoBalance=()=>{const e=document.getElementById("tempo-dp-input");let t=parseFloat(e?.value)||0;t<0&&(t=0,e&&(e.value=0));let a=U.reduce((B,Z)=>B+(parseFloat(getEffP(Z))||0)*(parseFloat(Z.qty)||0),0),s=0,o=0,r=0;if(d.deliveryMethod==="delivery"&&(s=Math.ceil((parseFloat(d.distance)||0)*(parseFloat(b.store.costPerKm)||0)/500)*500),vouch){let B=a;if(vouch.targetProduct&&vouch.targetProduct!==""){const Z=parseInt(vouch.targetProduct);B=U.filter(p=>p.id===Z).reduce((p,L)=>p+(parseFloat(getEffP(L))||0)*(parseFloat(L.qty)||0),0)}if(vouch.type==="shipping_free")r=s;else if(vouch.type==="shipping_flat")r=parseFloat(vouch.value)||0;else if(vouch.type==="percent"){let Z=B*((parseFloat(vouch.value)||0)/100);vouch.maxDiscount&&parseFloat(vouch.maxDiscount)>0&&(Z=Math.min(Z,parseFloat(vouch.maxDiscount))),o=Z}else o=parseFloat(vouch.value)||0,o=Math.min(o,B)}(b.store.freeShippingMinSpendEnabled===!0||b.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(b.store.freeShippingMinSpendAmount)||0)>0&&a>=(parseFloat(b.store.freeShippingMinSpendAmount)||0)&&d.deliveryMethod==="delivery"&&(r=s),r=Math.min(r,s),o=Math.min(o,a);let c=Math.max(0,a-o),l=Math.max(0,s-r);const u=window.calcTaxDetails(c+l);let k=0;window.useMemberPoints&&F&&(k=Math.min(c+l+u.grandTotalAdd,parseFloat(F.points)||0));let E=c+l+u.grandTotalAdd-k;t>E&&(t=E,e&&(e.value=t));let P=E-t;const $=document.getElementById("tempo-balance-display");$&&($.innerText=w(P))};let Ue="paint",Ke="storefront",C={mode:"room",length:4,width:3,height:3,openings:4,ceiling:!0,coats:2,directArea:30,includeSealer:!0},G={length:4,width:3,tileSize:"40x40",wastePercent:10,includeAdhesive:!0,includeGrout:!0},V={length:6,height:3,sides:1,openings:2,brickType:"hebel10",includeMortar:!0};const Mt={"30x30":{name:"30 x 30 cm",coveragePerBox:1,piecesPerBox:11},"40x40":{name:"40 x 40 cm",coveragePerBox:.96,piecesPerBox:6},"50x50":{name:"50 x 50 cm",coveragePerBox:1,piecesPerBox:4},"60x60":{name:"60 x 60 cm",coveragePerBox:1.44,piecesPerBox:4},"80x80":{name:"80 x 80 cm",coveragePerBox:1.92,piecesPerBox:3}},ft=()=>{let e=0,t=0;if(C.mode==="room"){const P=2*(parseFloat(C.length)+parseFloat(C.width))*parseFloat(C.height);e=Math.max(0,P-(parseFloat(C.openings)||0)),C.ceiling&&(t=parseFloat(C.length)*parseFloat(C.width))}else e=parseFloat(C.directArea)||0;const a=e+t,s=parseInt(C.coats)||2,r=parseFloat((a*s/11).toFixed(2)),i=Math.floor(r/20),c=r%20,l=Math.ceil(c/2.5),u=C.includeSealer?parseFloat((a/12).toFixed(2)):0,k=C.includeSealer?Math.ceil(u/2.5):0;return{totalWallArea:parseFloat(e.toFixed(2)),ceilingArea:parseFloat(t.toFixed(2)),grandArea:parseFloat(a.toFixed(2)),coats:s,totalVolumeLiters:r,pails:i,gallons:l,sealerVolume:u,sealerGallons:k}},xt=()=>{const e=parseFloat(G.length)*parseFloat(G.width),t=1+parseFloat(G.wastePercent)/100,a=parseFloat((e*t).toFixed(2)),s=Mt[G.tileSize]||Mt["40x40"],o=Math.ceil(a/s.coveragePerBox),r=G.includeAdhesive?Math.ceil(a/8):0,i=G.includeGrout?Math.ceil(a/4):0;return{rawArea:parseFloat(e.toFixed(2)),wastePercent:G.wastePercent,totalAreaWithWaste:a,spec:s,totalBoxes:o,adhesiveBags:r,groutBags:i}},wt=()=>{const e=parseFloat(V.length)*parseFloat(V.height)*parseInt(V.sides||1),t=Math.max(0,parseFloat((e-(parseFloat(V.openings)||0)).toFixed(2)));let a=0,s=0,o=0,r=0,i=0;return V.brickType==="hebel10"?(a=Math.ceil(t*8.33),s=parseFloat((t/10).toFixed(2)),o=Math.ceil(t/10)):V.brickType==="hebel75"?(a=Math.ceil(t*8.33),s=parseFloat((t/13.3).toFixed(2)),o=Math.ceil(t/13)):(a=Math.ceil(t*70),i=Math.ceil(t*.45),r=parseFloat((t*.04).toFixed(2))),{rawWallArea:parseFloat(e.toFixed(2)),netArea:t,brickType:V.brickType,brickPcs:a,brickCubic:s,mortarBags:o,cementBags:i,sandCubic:r}},Ye=e=>{const t=Array.isArray(b.products)?b.products:[];return e==="paint"?t.filter(a=>{if(!a||a.isActive===!1||a.isActive==="false")return!1;const s=`${a.name||""} ${a.category||""} ${a.subCategory||""}`.toLowerCase();return s.includes("cat")||s.includes("mowilex")||s.includes("dulux")||s.includes("avitex")||s.includes("no drop")||s.includes("plamir")||s.includes("alkali")||s.includes("sealer")}).slice(0,4):e==="tile"?t.filter(a=>{if(!a||a.isActive===!1||a.isActive==="false")return!1;const s=`${a.name||""} ${a.category||""} ${a.subCategory||""}`.toLowerCase();return s.includes("keramik")||s.includes("granit")||s.includes("tile")||s.includes("nat")||s.includes("perekat")}).slice(0,4):e==="brick"?t.filter(a=>{if(!a||a.isActive===!1||a.isActive==="false")return!1;const s=`${a.name||""} ${a.category||""} ${a.subCategory||""}`.toLowerCase();return s.includes("hebel")||s.includes("bata")||s.includes("mortar")||s.includes("semen")||s.includes("pasir")}).slice(0,4):[]},Oe=()=>{const e=n("modal-material-estimator-body");if(!e)return;let t="";if(Ue==="paint"){const a=ft(),s=Ye("paint");t=`
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <!-- Kolom Kiri: Formulir Input Dimensi (5 Kolom Desktop) -->
            <div class="lg:col-span-5 space-y-4">
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
                    <div class="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                            <i class="fa-solid fa-paintbrush text-[var(--color-primary)]"></i> Parameter Dinding
                        </span>
                        <div class="inline-flex p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-700 text-[10px] font-bold">
                            <button type="button" onclick="window.setEstimatorPaintMode('room')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${C.mode==="room"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs":"text-slate-500"}">Ruangan</button>
                            <button type="button" onclick="window.setEstimatorPaintMode('area')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${C.mode==="area"?"bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs":"text-slate-500"}">Luas M²</button>
                        </div>
                    </div>

                    ${C.mode==="room"?`
                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Ruang (m)</label>
                            <input type="number" step="0.5" min="1" max="100" value="${C.length}" oninput="window.updateEstimatorPaintField('length', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Lebar Ruang (m)</label>
                            <input type="number" step="0.5" min="1" max="100" value="${C.width}" oninput="window.updateEstimatorPaintField('width', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Tinggi Dinding (m)</label>
                            <input type="number" step="0.25" min="1" max="20" value="${C.height}" oninput="window.updateEstimatorPaintField('height', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase" title="Area pintu dan jendela yang tidak dicat">Pintu/Jendela (m²)</label>
                            <input type="number" step="0.5" min="0" max="50" value="${C.openings}" oninput="window.updateEstimatorPaintField('openings', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>
                    <div class="flex items-center justify-between pt-1">
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Cat Plafon Sekalian?</span>
                        <input type="checkbox" ${C.ceiling?"checked":""} onchange="window.updateEstimatorPaintField('ceiling', this.checked)"
                            class="w-4 h-4 rounded text-[var(--color-primary)] accent-[var(--color-primary)] cursor-pointer">
                    </div>
                    `:`
                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase">Total Luas Bidang Cat (m²)</label>
                        <input type="number" step="1" min="1" max="10000" value="${C.directArea}" oninput="window.updateEstimatorPaintField('directArea', this.value)"
                            class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                    `}

                    <!-- Layer Pengecatan -->
                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Jumlah Lapisan Pengecatan</label>
                        <div class="grid grid-cols-3 gap-2">
                            <button type="button" onclick="window.updateEstimatorPaintField('coats', 1)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${C.coats===1?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}">1x Lapis</button>
                            <button type="button" onclick="window.updateEstimatorPaintField('coats', 2)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${C.coats===2?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}">2x Rekomendasi</button>
                            <button type="button" onclick="window.updateEstimatorPaintField('coats', 3)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${C.coats===3?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}">3x Warna Gelap</button>
                        </div>
                    </div>

                    <div class="flex items-center justify-between pt-1">
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Termasuk Cat Dasar (Alkali)?</span>
                        <input type="checkbox" ${C.includeSealer?"checked":""} onchange="window.updateEstimatorPaintField('includeSealer', this.checked)"
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
                    ${Ke==="pos"?`
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
                        ${s.map(o=>`
                        <div class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 flex items-center gap-2 shadow-2xs">
                            <div class="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 flex items-center justify-center text-xs">
                                ${o.img?`<img src="${f(o.img)}" class="w-full h-full object-cover">`:'<i class="fa-solid fa-paint-roller text-slate-400"></i>'}
                            </div>
                            <div class="min-w-0 flex-1">
                                <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">${f(o.name)}</p>
                                <p class="text-[10px] font-extrabold text-[var(--color-primary)]">${w(o.price)}</p>
                            </div>
                            <button type="button" onclick="window.addStoreProductFromEstimator('${o.id}')" class="btn-native-icon w-9 h-9 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-xs hover:opacity-95 active:scale-95 transition-all cursor-pointer shrink-0 shadow-2xs" style="box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);" title="Tambah ke Belanja">
                                <i class="fa-solid fa-plus text-xs"></i>
                            </button>
                        </div>
                        `).join("")}
                    </div>
                </div>
                `:""}
            </div>
        </div>`}else if(Ue==="tile"){const a=xt(),s=Ye("tile");t=`
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
                            <input type="number" step="0.5" min="1" max="100" value="${G.length}" oninput="window.updateEstimatorTileField('length', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Lebar Lantai (m)</label>
                            <input type="number" step="0.5" min="1" max="100" value="${G.width}" oninput="window.updateEstimatorTileField('width', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>

                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Ukuran Keramik / Granit</label>
                        <select onchange="window.updateEstimatorTileField('tileSize', this.value)"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                            <option value="30x30" ${G.tileSize==="30x30"?"selected":""}>30 x 30 cm (1 Dus = 1.00 m² / 11 keping)</option>
                            <option value="40x40" ${G.tileSize==="40x40"?"selected":""}>40 x 40 cm (1 Dus = 0.96 m² / 6 keping)</option>
                            <option value="50x50" ${G.tileSize==="50x50"?"selected":""}>50 x 50 cm (1 Dus = 1.00 m² / 4 keping)</option>
                            <option value="60x60" ${G.tileSize==="60x60"?"selected":""}>60 x 60 cm (1 Dus = 1.44 m² / 4 keping)</option>
                            <option value="80x80" ${G.tileSize==="80x80"?"selected":""}>80 x 80 cm (1 Dus = 1.92 m² / 3 keping)</option>
                        </select>
                    </div>

                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Cadangan Potongan / Waste Factor</label>
                        <div class="grid grid-cols-3 gap-2">
                            <button type="button" onclick="window.updateEstimatorTileField('wastePercent', 5)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${G.wastePercent===5?"border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" style="${G.wastePercent===5?"background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);":""}">5% Minimal</button>
                            <button type="button" onclick="window.updateEstimatorTileField('wastePercent', 10)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${G.wastePercent===10?"border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" style="${G.wastePercent===10?"background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);":""}">10% Standar</button>
                            <button type="button" onclick="window.updateEstimatorTileField('wastePercent', 15)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${G.wastePercent===15?"border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"}" style="${G.wastePercent===15?"background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);":""}">15% Diagonal</button>
                        </div>
                    </div>

                    <div class="space-y-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Semen Perekat Keramik (Adhesive)?</span>
                            <input type="checkbox" ${G.includeAdhesive?"checked":""} onchange="window.updateEstimatorTileField('includeAdhesive', this.checked)"
                                class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Semen Pengisi Nat (Tile Grout)?</span>
                            <input type="checkbox" ${G.includeGrout?"checked":""} onchange="window.updateEstimatorTileField('includeGrout', this.checked)"
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
                    ${Ke==="pos"?`
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
                        ${s.map(o=>`
                        <div class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 flex items-center gap-2 shadow-2xs">
                            <div class="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 flex items-center justify-center text-xs">
                                ${o.img?`<img src="${f(o.img)}" class="w-full h-full object-cover">`:'<i class="fa-solid fa-border-all text-slate-400"></i>'}
                            </div>
                            <div class="min-w-0 flex-1">
                                <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">${f(o.name)}</p>
                                <p class="text-[10px] font-extrabold text-[var(--color-primary)]">${w(o.price)}</p>
                            </div>
                            <button type="button" onclick="window.addStoreProductFromEstimator('${o.id}')" class="btn-native-icon w-9 h-9 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-xs hover:opacity-95 active:scale-95 transition-all cursor-pointer shrink-0 shadow-2xs" style="box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);" title="Tambah ke Belanja">
                                <i class="fa-solid fa-plus text-xs"></i>
                            </button>
                        </div>
                        `).join("")}
                    </div>
                </div>
                `:""}
            </div>
        </div>`}else if(Ue==="brick"){const a=wt(),s=Ye("brick");t=`
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
                            <input type="number" step="0.5" min="1" max="200" value="${V.length}" oninput="window.updateEstimatorBrickField('length', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Tinggi Dinding (m)</label>
                            <input type="number" step="0.25" min="1" max="20" value="${V.height}" oninput="window.updateEstimatorBrickField('height', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Jumlah Sisi Tembok</label>
                            <input type="number" min="1" max="20" value="${V.sides}" oninput="window.updateEstimatorBrickField('sides', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Bukaan Pintu/Jendela (m²)</label>
                            <input type="number" step="0.5" min="0" max="50" value="${V.openings}" oninput="window.updateEstimatorBrickField('openings', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>

                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Pilihan Material Dinding</label>
                        <select onchange="window.updateEstimatorBrickField('brickType', this.value)"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                            <option value="hebel10" ${V.brickType==="hebel10"?"selected":""}>Bata Ringan / Hebel Tebal 10 cm (60x20x10)</option>
                            <option value="hebel75" ${V.brickType==="hebel75"?"selected":""}>Bata Ringan / Hebel Tebal 7.5 cm (60x20x7.5)</option>
                            <option value="redbrick" ${V.brickType==="redbrick"?"selected":""}>Bata Merah Bakar Standar</option>
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
                                ${V.brickType.startsWith("hebel")?`${a.brickPcs} Pcs (${a.brickCubic} m³)`:`${a.brickPcs} Buah Bata Merah`}
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
                                ${V.brickType.startsWith("hebel")?`${a.mortarBags} Sak Mortar (40kg)`:`${a.cementBags} Sak Semen (50kg)`}
                            </p>
                        </div>
                        <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                            <p class="text-[10px] text-amber-300 font-bold uppercase">Pasir Pasang</p>
                            <p class="text-sm font-black text-amber-300 mt-0.5">
                                ${V.brickType.startsWith("hebel")?"Cukup Lem Mortar":`${a.sandCubic} m³ Pasir`}
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
                    ${Ke==="pos"?`
                    <button type="button" onclick="window.addEstimatorToPOSCart('${V.brickType.startsWith("hebel")?"Bata Ringan Hebel (Estimasi)":"Bata Merah (Estimasi)"}', ${a.brickPcs}, 'pcs')" class="w-full py-3 px-4 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
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
                        ${s.map(o=>`
                        <div class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 flex items-center gap-2 shadow-2xs">
                            <div class="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 flex items-center justify-center text-xs">
                                ${o.img?`<img src="${f(o.img)}" class="w-full h-full object-cover">`:'<i class="fa-solid fa-cubes text-slate-400"></i>'}
                            </div>
                            <div class="min-w-0 flex-1">
                                <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">${f(o.name)}</p>
                                <p class="text-[10px] font-extrabold text-[var(--color-primary)]">${w(o.price)}</p>
                            </div>
                            <button type="button" onclick="window.addStoreProductFromEstimator('${o.id}')" class="btn-native-icon w-9 h-9 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-xs hover:opacity-95 active:scale-95 transition-all cursor-pointer shrink-0 shadow-2xs" style="box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);" title="Tambah ke Belanja">
                                <i class="fa-solid fa-plus text-xs"></i>
                            </button>
                        </div>
                        `).join("")}
                    </div>
                </div>
                `:""}
            </div>
        </div>`}e.innerHTML=t,Js()},Js=()=>{["paint","tile","brick"].forEach(t=>{const a=n(`estimator-tab-btn-${t}`);a&&(t===Ue?a.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-black text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer primary-bg text-white":a.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white")})},Qs=e=>{Ue=e,Oe()},Zs=e=>{C.mode=e,Oe()},Ys=(e,t)=>{C[e]=t,Oe()},Xs=(e,t)=>{G[e]=t,Oe()},er=(e,t)=>{V[e]=t,Oe()},tr=e=>{let t="";const a=b.store?.name||"TOKO PUTRI";if(e==="paint"){const s=ft();t=`*ESTIMASI KEBUTUHAN CAT TEMBOK — ${a}*
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
Dihitung otomatis via Sistem Toko Putri`}else if(e==="tile"){const s=xt();t=`*ESTIMASI KEBUTUHAN KERAMIK / GRANIT — ${a}*
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
Dihitung otomatis via Sistem Toko Putri`}else if(e==="brick"){const s=wt();t=`*ESTIMASI PASANGAN DINDING — ${a}*
--------------------------------------
• Material Dinding: ${V.brickType.startsWith("hebel")?"Bata Ringan Hebel":"Bata Merah Bakar"}
• Luas Dinding Efektif: ${s.netArea} m²
--------------------------------------
*REKOMENDASI KEBUTUHAN:*
✓ Kebutuhan Bata: ${s.brickPcs} Pcs ${s.brickCubic>0?`(~${s.brickCubic} m³)`:""}
`+(s.mortarBags>0?`✓ Semen Mortar Thinbed: ${s.mortarBags} Sak (40kg)
`:"")+(s.cementBags>0?`✓ Semen Plester/Pasang: ${s.cementBags} Sak (50kg)
`:"")+(s.sandCubic>0?`✓ Pasir Pasang: ~${s.sandCubic} m³
`:"")+`--------------------------------------
Dihitung otomatis via Sistem Toko Putri`}navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t).then(()=>{M("Rincian estimasi berhasil disalin ke clipboard!","success")}).catch(()=>{M("Gagal menyalin rincian.","warning")}):M("Clipboard browser tidak didukung.","warning")},ar=e=>{let t="";const a=b.store?.name||"Toko Putri",s=(b.store?.wa||"").replace(/[^0-9]/g,"");if(e==="paint"){const r=ft();t=`Halo ${a}, saya ingin konsultasi kebutuhan cat dinding:

• Luas Bidang Cat: ${r.grandArea} m² (${r.coats}x lapis)
• Estimasi Kebutuhan: ${r.pails>0?`${r.pails} Pail `:""}${r.gallons>0?`${r.gallons} Galon`:""} (${r.totalVolumeLiters} Liter)
`+(r.sealerGallons>0?`• Alkali Sealer: ${r.sealerGallons} Galon
`:"")+`
Mohon info ketersediaan stok & rekomendasi merk cat terbaik. Terima kasih!`}else if(e==="tile"){const r=xt();t=`Halo ${a}, saya ingin konsultasi kebutuhan keramik:

• Ukuran Keramik: ${r.spec.name}
• Luas Bersih + Waste: ${r.totalAreaWithWaste} m²
• Estimasi Kebutuhan: ${r.totalBoxes} Dus
`+(r.adhesiveBags>0?`• Semen Perekat: ${r.adhesiveBags} Sak
`:"")+`
Mohon info pilihan motif & harga terbaik. Terima kasih!`}else if(e==="brick"){const r=wt();t=`Halo ${a}, saya ingin konsultasi pasangan dinding:

• Jenis: ${V.brickType.startsWith("hebel")?"Bata Ringan Hebel":"Bata Merah"}
• Luas Bersih: ${r.netArea} m²
• Kebutuhan: ${r.brickPcs} Pcs ${r.brickCubic>0?`(${r.brickCubic} m³)`:""}
`+(r.mortarBags>0?`• Mortar: ${r.mortarBags} Sak
`:"")+`
Mohon info pengiriman armada ke lokasi proyek. Terima kasih!`}const o=`https://wa.me/${s}?text=${encodeURIComponent(t)}`;window.open(o,"_blank")},sr=(e,t,a)=>{typeof window.posAddToCartQty=="function"&&(M(`Estimasi ${e} (${t} ${a}) siap dimasukkan ke kasir.`),Gt())},rr=e=>{Ke==="pos"?typeof window.posAddToCart=="function"&&(window.posAddToCart(e),M("Produk ditambahkan ke kasir POS!","success")):typeof window.addToCart=="function"&&(window.addToCart(e),M("Produk ditambahkan ke keranjang belanja!","success"))},or=(e="storefront")=>{Ke=e,typeof window.pushModalHistory=="function"&&window.pushModalHistory("materialEstimator");const t=n("modal-material-estimator");t&&(t.classList.remove("hidden"),setTimeout(()=>{t.classList.remove("opacity-0");const a=n("modal-material-estimator-content");a&&(a.classList.remove("translate-y-full","sm:translate-y-10"),a.classList.add("translate-y-0"))},10),Oe(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Gt=(e=!1)=>{const t=n("modal-material-estimator"),a=n("modal-material-estimator-content"),s=()=>{a&&(a.classList.add("translate-y-full","sm:translate-y-10"),a.classList.remove("translate-y-0")),t&&t.classList.add("opacity-0"),setTimeout(()=>{t&&t.classList.add("hidden")},280)};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("materialEstimator",!1,s):s()};typeof window<"u"&&(window.openMaterialEstimatorModal=or,window.closeMaterialEstimatorModal=Gt,window.switchEstimatorTab=Qs,window.setEstimatorPaintMode=Zs,window.updateEstimatorPaintField=Ys,window.updateEstimatorTileField=Xs,window.updateEstimatorBrickField=er,window.copyEstimatorSummary=tr,window.shareEstimatorToWA=ar,window.addEstimatorToPOSCart=sr,window.addStoreProductFromEstimator=rr);let Le=null;const $t=e=>{if(e<=0)return{h:"00",m:"00",s:"00",totalSec:0};const t=Math.floor(e/1e3),a=Math.floor(t/3600),s=Math.floor(t%3600/60),o=t%60;return{h:String(a).padStart(2,"0"),m:String(s).padStart(2,"0"),s:String(o).padStart(2,"0"),totalSec:t}},qt=()=>{const e=n("dynamic-flashsale-container");if(!e)return;Le&&(clearInterval(Le),Le=null);const t=xs("web");if(!t||!Array.isArray(t.items)||t.items.length===0){e.innerHTML="",e.classList.add("hidden");return}const a=t.endTime?new Date(t.endTime).getTime():0,s=Date.now(),o=Math.max(0,a-s);if(a&&o<=0){e.innerHTML="",e.classList.add("hidden");return}const r=$t(o),i=t.items.filter(l=>l&&l.productId);if(i.length===0){e.innerHTML="",e.classList.add("hidden");return}e.classList.remove("hidden");const c=i.map(l=>{const u=(b.products||[]).find(N=>String(N.id)===String(l.productId));if(!u||u.isActive===!1||u.isActive==="false")return"";const k=parseFloat(l.normalPrice)||parseFloat(u.price)||0,E=parseFloat(l.flashSalePrice)||0,P=parseFloat(l.quota)||0,$=parseFloat(l.soldCount)||0,B=P>0&&$>=P,Z=P>0?Math.min(100,Math.round($/P*100)):0,j=Math.max(0,P-$),p=k>0?Math.round((k-E)/k*100):l.discountPercent||0,L=u.img?Yt(u.img,"w400-rw"):"/favicon.png",se=u.name||"Produk Promo",z=l.variantName?` (${l.variantName})`:"";return`
        <div class="group relative flex w-[172px] sm:w-[205px] md:w-[220px] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md snap-start" style="transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;">
            <!-- Badge Diskon Petir Harmonis Tema -->
            <div class="absolute left-2.5 top-2.5 z-10 flex items-center gap-1 rounded-lg px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-2xs" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);">
                <i class="fa-solid fa-bolt text-amber-300 text-[10px]"></i>
                <span>-${Math.max(1,p)}%</span>
            </div>

            ${j<=3&&!B&&P>0?`
            <div class="absolute right-2.5 top-2.5 z-10 flex items-center gap-1 rounded-lg bg-amber-500/95 backdrop-blur-xs px-1.5 py-0.5 text-[9px] font-black text-white shadow-2xs">
                <span>🔥 Sisa ${j}!</span>
            </div>`:""}

            <!-- Foto Produk -->
            <div class="relative aspect-square w-full cursor-pointer overflow-hidden bg-slate-50 dark:bg-slate-800/50 p-2.5 flex items-center justify-center border-b border-slate-100 dark:border-slate-800" onclick="window.openProductModal && window.openProductModal('${f(u.id)}')">
                <img src="${f(L)}" alt="${f(se)}" loading="lazy" decoding="async" class="h-full w-full object-contain transition-transform duration-500 group-hover:scale-108" onerror="this.src='/favicon.png'">
                ${B?`
                <div class="absolute inset-0 bg-slate-950/75 backdrop-blur-2xs flex flex-col items-center justify-center p-2 text-center text-white">
                    <span class="rounded-lg px-2.5 py-1 text-[10px] font-black uppercase tracking-widest shadow-md text-white" style="background: var(--color-primary-dark);">HABIS TERJUAL</span>
                    <span class="mt-1 text-[9px] font-medium text-slate-300">Kuota promo terpenuhi</span>
                </div>`:""}
            </div>

            <!-- Detail & Harga -->
            <div class="flex flex-1 flex-col justify-between p-3">
                <div>
                    <h4 class="line-clamp-2 text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-[var(--color-primary)] transition-colors" title="${f(se+z)}">
                        ${f(se+z)}
                    </h4>
                    
                    <!-- Coretan Harga & Harga Kilat Harmonis -->
                    <div class="mt-2 flex flex-col">
                        <span class="text-[10px] font-semibold text-slate-400 dark:text-slate-500 line-through leading-tight">
                            ${w(k)}
                        </span>
                        <span class="text-sm sm:text-base font-black truncate leading-tight" style="color: var(--color-primary);">
                            ${w(E)}
                        </span>
                    </div>
                </div>

                <!-- FOMO Progress Bar Kuota -->
                <div class="mt-3">
                    <div class="flex items-center justify-between text-[9px] font-bold text-slate-500 dark:text-slate-400 mb-1">
                        <span>${B?"Terjual Habis":`Terjual ${$}/${P||"∞"}`}</span>
                        <span>${P>0?Z+"%":"Terbatas"}</span>
                    </div>
                    <div class="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                        <div class="h-full rounded-full transition-all duration-500 ${B?"bg-slate-400":""}" style="${B?"":"background: linear-gradient(90deg, #f59e0b 0%, var(--color-primary) 100%);"} width: ${B?100:Math.max(8,Z)}%;"></div>
                    </div>

                    <!-- Tombol Aksi Beli Kilat -->
                    <div class="mt-3">
                        ${B?`
                        <button type="button" disabled class="btn-native-action w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs font-bold cursor-not-allowed">
                            Kuota Habis
                        </button>`:`
                        <button type="button" onclick="window.quickBuyFlashSaleItem('${f(u.id)}', '${f(l.variantName||"")}')" class="btn-native-action w-full py-2.5 rounded-xl text-white text-xs font-black active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-bolt text-amber-300 text-xs"></i>
                            <span>Beli Kilat</span>
                        </button>`}
                    </div>
                </div>
            </div>
        </div>`}).join("");e.innerHTML=`
    <div class="bento-island-card relative overflow-hidden rounded-[1.75rem] p-4 sm:p-5 shadow-xs border transition-all duration-300" style="border-color: rgba(var(--color-primary-rgb), 0.22);">
        <!-- Dekorasi Efek Cahaya Latar Harmonis Tema -->
        <div class="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-35 dark:opacity-20" style="background: var(--color-primary);"></div>
        <div class="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-amber-500/20 blur-3xl dark:bg-amber-500/10"></div>

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

            <!-- Countdown Timer Block Harmonis Tema -->
            <div class="flex items-center gap-2 self-start sm:self-auto rounded-2xl bg-white/90 dark:bg-slate-800/90 border px-3 py-1.5 shadow-2xs backdrop-blur-xs" style="border-color: rgba(var(--color-primary-rgb), 0.25);">
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
            ${c}
        </div>
    </div>`,a&&(Le=setInterval(()=>{const l=Math.max(0,a-Date.now());if(l<=0){clearInterval(Le),Le=null,qt(),typeof window.rCat=="function"&&window.rCat();return}const u=$t(l),k=n("fs-cd-h"),E=n("fs-cd-m"),P=n("fs-cd-s");k&&(k.innerText=u.h),E&&(E.innerText=u.m),P&&(P.innerText=u.s)},1e3))},ir=(e,t="")=>{const a=(b.products||[]).find(i=>String(i.id)===String(e));if(!a)return;if(a.variants&&a.variants.length>0&&!t){ws(e);return}const s=t||(a.variants&&a.variants[0]?a.variants[0].name:""),o=window.getEffP?window.getEffP({id:a.id,price:a.price,variantName:s}):a.price,r=U.findIndex(i=>String(i.id)===String(a.id)&&String(i.variantName||"")===String(s||""));r>-1?U[r].qty=(parseFloat(U[r].qty)||0)+1:U.push({id:a.id,name:a.name,variantName:s,price:o,img:a.img||"",qty:1,unit:a.unit||"pcs"});try{localStorage.setItem("freshmart_cart",JSON.stringify(U))}catch{}gs(),M(`"${a.name}" berhasil dimasukkan ke keranjang dengan harga Flash Sale!`,"success")};window.renderStorefrontFlashSale=qt;window.quickBuyFlashSaleItem=ir;let ot=[];const Re=()=>{try{localStorage.setItem("freshmart_my_orders",JSON.stringify(K))}catch(e){console.warn("[MyOrders] Gagal menyimpan ke localStorage:",e)}},nr=()=>{try{const e=localStorage.getItem("freshmart_my_orders");if(e){const t=JSON.parse(e);Array.isArray(t)&&t.length>0&&Je(t)}}catch(e){console.warn("[MyOrders] Gagal memuat dari localStorage:",e)}return K},Vt=()=>{ot.forEach(e=>{try{typeof e=="function"&&e()}catch{}}),ot=[]},Wt=()=>{Vt(),K.filter(a=>{const s=a.status==="Selesai"||a.status==="Dibatalkan",o=a.claimedReward&&(a.claimedReward.status==="Menunggu Persetujuan"||!a.claimedReward.status);return!s||o}).slice(0,10).forEach(a=>{const s=a.orderId;if(!s)return;const o=W.collection("freshmart_orders").doc(s).onSnapshot(r=>{if(!r.exists)return;const i=r.data(),c=i.status,l=i.claimedReward?i.claimedReward.status:null,u=i.claimedReward&&i.claimedReward.note||"";let k=!1,E="";const P=K.find($=>$.orderId===s);if(P){if(c&&P.status!==c){const $=P.status;P.status=c,k=!0,$!==void 0&&(E=`Pesanan #${s.split("-").pop()} kini: ${c}`)}P.claimedReward&&l&&(P.claimedReward.status!==l||P.claimedReward.note!==u)&&(P.claimedReward.status=l,P.claimedReward.note=u,k=!0),k&&(Re(),window.curViewName==="view-orders"&&Ne(),E&&M(E))}},r=>{console.warn("[MyOrders Realtime] Snapshot error:",r.message)});ot.push(o)})},Ne=async()=>{if(nr(),!K.length){fe("orders-empty-state"),I("btn-clear-orders"),fe("spacer-orders"),xe("orders-items-container","");return}I("orders-empty-state"),fe("btn-clear-orders"),I("spacer-orders"),Wt(),xe("orders-items-container",K.map((e,t)=>{const s=It(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});let o="text-slate-500 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",r="fa-clock";return e.status==="Baru"?(o="text-rose-600 border-rose-200 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400",r="fa-asterisk"):e.status==="Diproses"?(o="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",r="fa-spinner fa-spin"):e.status==="Selesai"?(o="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",r="fa-check-double"):e.status==="Dibatalkan"&&(o="text-slate-400 border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400",r="fa-xmark"),`
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
                ${e.claimedReward?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)]/40 dark:text-[var(--color-primary)]"><i class="fa-solid fa-gift mr-1"></i>Hadiah: ${f(e.claimedReward.name)} ${pt(e.claimedReward)}</span>`:""}
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
        </div>`}).join(""))},lr=async(e,t)=>{ye("Melacak Status...");try{const a=await W.collection("freshmart_orders").doc(e).get();if(a.exists){const s=a.data();if(K[t])K[t].status=s.status;else{const o=K.findIndex(r=>r.orderId===e);o>-1&&(K[o].status=s.status)}Re(),Ne(),M(`Status Pesanan: ${s.status}`)}else M("Pesanan tidak ditemukan di server.")}catch(a){console.error("Gagal cek status pesanan:",a),M("Gagal mengambil data sistem. Periksa koneksi.")}finally{le()}},dr=async()=>{const e=n("order-tracking-input"),t=e?e.value.trim():"";if(!t){M("Masukkan ID Pesanan terlebih dahulu!");return}let a=t.replace(/^#/,"").trim();const s=K.find(o=>o.orderId===a||o.orderId.endsWith(a));if(s){it(s.orderId);return}ye("Mencari Pesanan...");try{let o=await W.collection("freshmart_orders").doc(a).get();if(!o.exists&&!a.startsWith("ORD-")){const r="ORD-"+a,i=await W.collection("freshmart_orders").doc(r).get();i.exists&&(o=i,a=r)}if(o.exists){const r=o.data();K.some(c=>c.orderId===a)||(K.unshift({orderId:a,date:r.dateString||(r.timestamp?r.timestamp.toDate().toISOString():new Date().toISOString()),dateString:r.dateString||(r.timestamp?r.timestamp.toDate().toISOString():new Date().toISOString()),total:r.payment&&r.payment.grandTotal?r.payment.grandTotal:r.total||0,itemCount:(r.items||[]).reduce((c,l)=>c+(parseFloat(l.qty)||0),0),status:r.status||"Baru",pointsEarned:r.pointsEarned||0,claimedReward:r.claimedReward||null,finalMemberPoints:r.finalMemberPoints||null,customerType:r.customerType||"Pelanggan Umum",customer:r.customer||{},items:r.items||[],payment:r.payment||{},isTempo:!!r.isTempo}),Re(),Ne()),e&&(e.value=""),M("Pesanan berhasil ditemukan!"),it(a)}else M("Pesanan dengan ID tersebut tidak ditemukan.")}catch(o){console.error("Gagal melacak pesanan:",o),M("Gagal menghubungi server. Pastikan ID Pesanan sudah benar.")}finally{le()}},cr=()=>{Xt("Hapus Riwayat","Riwayat pesanan di perangkat ini akan dihapus. Pesanan tetap tersimpan di sistem toko. Lanjutkan?",()=>{Je([]),Re(),Ne(),M("Riwayat lokal dibersihkan")})},it=async e=>{const t=Array.isArray(K)?K.find(a=>a.orderId===e):null;if(t&&t.items&&t.items.length>0){window.currentCustomerOrder=t,window.lastPrintedOrder=t,Ve(e,t,[]),W.collection("freshmart_orders").doc(e).get().then(async a=>{if(a.exists){const s=a.data();s.orderId=s.orderId||a.id||e;let o=[];if(s.status==="Selesai")try{o=(await W.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(l=>`${l.data().productId}::${l.data().variantName||""}`)}catch{}window.currentCustomerOrder=s,window.lastPrintedOrder=s;const r=K.findIndex(c=>c.orderId===s.orderId);r!==-1&&(Object.assign(K[r],s),Re());const i=document.getElementById("order-detail-modal");i&&!i.classList.contains("hidden")&&!i.classList.contains("opacity-0")&&Ve(e,s,o,!0)}}).catch(a=>console.warn("[MyOrders] Silent background fetch error:",a));return}ye("Memuat Rincian...");try{const a=await W.collection("freshmart_orders").doc(e).get();if(!a.exists){M("Pesanan tidak ditemukan.");return}const s=a.data();s.orderId=s.orderId||a.id||e;let o=[];if(s.status==="Selesai")try{o=(await W.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(i=>`${i.data().productId}::${i.data().variantName||""}`)}catch{}if(window.currentCustomerOrder=s,window.lastPrintedOrder=s,Array.isArray(K)){const r=K.findIndex(i=>i.orderId===s.orderId);r!==-1&&(Object.assign(K[r],s),Re())}Ve(e,s,o)}catch(a){console.error("Gagal mengambil data pesanan:",a),M("Gagal memuat rincian pesanan. Coba beberapa saat lagi.")}finally{le()}},Ve=(e,t,a=[],s=!1)=>{try{t&&(t.orderId=t.orderId||e,window.currentCustomerOrder=t,window.lastPrintedOrder=t);let o=document.getElementById("order-detail-modal");o||(o=document.createElement("div"),o.id="order-detail-modal",o.className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 opacity-0 pointer-events-none transition-opacity duration-300",document.body.appendChild(o));const r=f(t.customer&&t.customer.name?t.customer.name:"-"),i=f(t.customer&&t.customer.wa?t.customer.wa:"-"),c=f(t.customer&&t.customer.address?t.customer.address:"-"),l=t.customer&&t.customer.deliveryMethod==="delivery"?"Dikirim ke Alamat":"Ambil di Toko (Pickup)",u=f(t.customer&&t.customer.note?t.customer.note:""),k=!!(t.payment?.isPaylater||t.isPaylater||t.payment?.subMethod==="paylater"),E=k?"Putri PayLater":f(t.payment&&t.payment.method?t.payment.method:"Cash / COD"),P=t.items||[],$=P.some(A=>A.poTime&&A.poTime!==""),B=P.map(A=>{const re=parseFloat(A.qty)||0,ee=parseFloat(A.effectivePrice||A.price)||0,te=re*ee,v=`${A.id}::${A.variantName||""}`,pe=t.status==="Selesai"&&!a.includes(v)&&A.id!==void 0&&A.id!==null;return`
            <div class="flex gap-3 items-center border-b border-slate-100 dark:border-slate-700/50 py-3 last:border-0">
                <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-700" style="background-image:url('${f(A.img||(b&&b.store?b.store.logo:""))}')"></div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate mb-0.5" title="${f(A.name)}">${f(A.name)}</p>
                    ${A.variantName||A.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${A.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded text-[9px] font-semibold">${f(A.variantName)}</span>`:""}
                        ${A.poTime?`<span class="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">PO ${f(A.poTime)}</span>`:""}
                    </div>
                    `:""}
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400">${re} ${f(A.unit||"pcs")} x ${w(ee)}</p>
                    ${pe?`<button type="button" onclick="openReviewModal('${e}',${A.id},'${encodeURIComponent(A.variantName||"")}','${encodeURIComponent(A.name||"")}','${encodeURIComponent(t.customer?.name||"")}')" class="mt-1.5 text-[10px] font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1 transition-colors"><i class="fa-solid fa-star"></i> Berikan Ulasan</button>`:""}
                </div>
                <div class="text-right shrink-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-[var(--color-primary)]">${w(te)}</p>
                </div>
            </div>
            `}).join(""),j=It(t).toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),p=ea(t),L=p.subtotal,se=p.shipping,z=p.productDiscount,N=p.shippingDiscount,m=p.pointDiscount,we=p.grandTotal;o.innerHTML=`
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
                            <p class="text-[11px] font-bold text-slate-700 dark:text-slate-300">${j}</p>
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
                                <p><span class="text-slate-500 inline-block w-14">Metode</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${l}</span></p>
                                <p><span class="text-slate-500 inline-block w-14">Bayar</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${E.toUpperCase()}</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2.5">
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1">Alamat Tujuan</p>
                            <p class="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">${c}</p>
                        </div>
                        ${u?`<div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60"><p class="text-[9px] font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest mb-1">Catatan Pembeli</p><p class="text-xs font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic">"${u}"</p></div>`:""}
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
                            <div class="flex items-center gap-2"><i class="fa-solid fa-gift text-[var(--color-primary)]"></i><p class="text-xs font-bold text-[var(--color-primary)]">Klaim Hadiah: <b>${f(t.claimedReward.name)}</b> (${t.claimedReward.pointsCost} Poin)</p></div>
                            <p class="text-[11px] font-semibold text-[var(--color-primary)] mt-1 ml-5">${pt(t.claimedReward)}</p>
                            ${t.claimedReward.note?`<p class="text-[11px] text-[var(--color-primary)]/70 italic mt-0.5 ml-5">"${f(t.claimedReward.note)}"</p>`:""}
                        </div>`:""}
                    </div>`:""}

                    <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl space-y-2 text-xs">
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Subtotal Produk</p><p class="font-bold text-slate-800 dark:text-white">${w(L)}</p></div>
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Ongkos Kirim</p><p class="font-bold text-slate-800 dark:text-white">${w(se)}</p></div>
                        ${N>0?`<div class="flex justify-between text-[var(--color-primary)]"><p>Diskon Ongkir</p><p class="font-bold">-${w(N)}</p></div>`:""}
                        ${z>0?`<div class="flex justify-between text-rose-500"><p>Diskon Promo</p><p class="font-bold">-${w(z)}</p></div>`:""}
                        ${m>0?`<div class="flex justify-between text-emerald-600 dark:text-emerald-400"><p>Diskon Poin Member</p><p class="font-bold">-${w(m)}</p></div>`:""}
                        ${k&&p.paylaterAdminFee>0?`<div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Biaya Admin PayLater</p><p class="font-bold text-slate-800 dark:text-white">+${w(p.paylaterAdminFee)}</p></div>`:""}
                        ${k&&p.paylaterServiceFee>0?`<div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Biaya Penanganan / Layanan</p><p class="font-bold text-slate-800 dark:text-white">+${w(p.paylaterServiceFee)}</p></div>`:""}
                        ${p.hasPpn?`
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>DPP (Dasar Pengenaan Pajak)</p><p class="font-bold text-slate-800 dark:text-white">${w(p.dppAmount)}</p></div>
                        <div class="flex justify-between text-amber-600 dark:text-amber-400"><p>${f(p.ppnLabel)}</p><p class="font-bold">${p.ppnAmount>0?(p.isInclusive?"":"+")+w(p.ppnAmount):"Rp 0"}</p></div>
                        `:""}
                        <div class="flex justify-between items-center border-t border-dashed border-slate-300 dark:border-slate-700 pt-3 mt-2">
                            <p class="font-bold text-slate-800 dark:text-white uppercase tracking-wider">Total Tagihan</p>
                            <p class="text-lg font-bold text-[var(--color-primary)]">${w(we)}</p>
                        </div>
                        ${(()=>{if(!k)return"";const A=Array.isArray(t.payment?.paylaterSchedule)&&t.payment.paylaterSchedule.length>0?t.payment.paylaterSchedule:null,re=t.payment?.paylaterMonths||(A?A.length:1),ee=t.payment?.paylaterMonthlyInstallment||(re>0?Math.round(we/re):we);let te="";return A&&A.length>0&&(te=`
                                <div class="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-700/80 space-y-2">
                                    <p class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                        <i class="fa-solid fa-calendar-days text-[var(--color-primary)]"></i> Rencana Jadwal Angsuran Anda:
                                    </p>
                                    <div class="space-y-2">
                                        ${A.map((v,pe)=>{const H=v.installmentIndex||v.installmentNo||v.installmentNumber||v.month||pe+1,O=v.dueDateFormatted||v.dueDateStr||(v.dueDate?new Date(v.dueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"),ge=parseFloat(v.total||v.totalMonthly||v.totalInstallment)||ee;return`
                                            <div class="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 flex items-center justify-between gap-3 shadow-2xs">
                                                <div class="flex items-center gap-2.5 min-w-0">
                                                    <div class="w-8 h-8 rounded-xl bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] font-black text-xs flex items-center justify-center shrink-0">
                                                        ${H}
                                                    </div>
                                                    <div class="min-w-0">
                                                        <p class="text-xs font-bold text-slate-800 dark:text-white leading-tight">Bulan ke-${H}</p>
                                                        <p class="text-[10px] text-slate-400 font-mono mt-0.5">Jatuh Tempo: ${O}</p>
                                                    </div>
                                                </div>
                                                <div class="text-right shrink-0">
                                                    <p class="text-xs font-black font-mono text-[var(--color-primary)]">${w(ge)}</p>
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
                                    <span>Angsuran per Bulan (${re}x)</span>
                                    <span class="font-mono text-sm">${w(ee)}/bln</span>
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
        `,s||(o.classList.contains("opacity-0")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("customerOrder"),document.body.classList.add("overflow-hidden"),De(o,"order-detail-content"))}catch(o){console.error("Error Render HTML Modal:",o),M("Gagal menampilkan detail. Coba lagi.")}},pr=(e=!1)=>{const t=()=>{const a=document.getElementById("order-detail-modal"),s=document.getElementById("order-detail-content");Ee(a,s,()=>{document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none):not(#order-detail-modal)')||document.body.classList.remove("overflow-hidden")})};typeof window.requestCloseModal=="function"?window.requestCloseModal("customerOrder",e,t):t()};window.attachMyOrdersRealtime=Wt;window.detachMyOrdersRealtime=Vt;window.renderMyOrders=Ne;window.checkOrderStatus=lr;window.trackOrderManual=dr;window.clearMyOrders=cr;window.openCustomerOrderDetail=it;window.renderOrderDetailModal=Ve;window.closeCustomerOrderDetailModal=pr;window.reviewPhotoFile=null;window.reviewRating=0;const ur=(e,t,a,s,o)=>{const r=decodeURIComponent(a||""),i=decodeURIComponent(s||""),c=decodeURIComponent(o||"");let l=document.getElementById("review-modal");l||(l=document.createElement("div"),l.id="review-modal",l.className="fixed inset-0 z-[120] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",l.onclick=u=>{u.target===l&&gt()},document.body.appendChild(l)),window.reviewPhotoFile=null,window.reviewRating=0,l.innerHTML=`
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
        </div>`,n("review-submit-btn").onclick=()=>ht(e,t,r,i,c),l.style.opacity="0",l.style.display="flex",requestAnimationFrame(()=>{l.style.transition="opacity 0.25s ease",l.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("review")},mr=e=>{window.reviewRating=e,document.querySelectorAll(".review-star").forEach(t=>{const a=parseInt(t.dataset.star);t.classList.toggle("text-amber-400",a<=e),t.classList.toggle("text-slate-300",a>e),t.classList.toggle("dark:text-slate-600",a>e)})},br=e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/")){M("Hanya file gambar yang diizinkan!");return}if(t.size>5*1024*1024){M("Ukuran gambar max 5MB!");return}window.reviewPhotoFile=t;const a=new FileReader;a.onload=s=>{n("review-photo-preview").src=s.target.result,fe("review-photo-preview-wrap"),I("review-photo-btn")},a.readAsDataURL(t)},fr=()=>{window.reviewPhotoFile=null,I("review-photo-preview-wrap"),fe("review-photo-btn");const e=n("review-photo-input");e&&(e.value="")},gt=(e=!1)=>{const t=document.getElementById("review-modal");if(!t||t.style.display==="none")return;const a=()=>{t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250)};if(typeof Pe=="function")Pe("review",e,a);else if(typeof window.requestCloseModal=="function")window.requestCloseModal("review",e,a);else{if(!e&&$e.length&&$e[$e.length-1]==="review"){$e.pop();try{history.back()}catch{}}a()}},ht=async(e,t,a,s,o)=>{if(!window.reviewRating||window.reviewRating<1)return M("Silakan beri bintang terlebih dahulu!");if(!dt){me(!0),ye("Mengirim ulasan...");try{let r="";if(window.reviewPhotoFile&&typeof window.uploadBuktiToGDrive=="function"){const l=await window.uploadBuktiToGDrive(window.reviewPhotoFile,"review-"+e);l?r=l:M("Foto gagal diupload, ulasan tetap dikirim tanpa foto.")}const i=Date.now(),c={id:i,orderId:e||"",productId:t??0,variantName:a||"",productName:s||"",customerName:o||"Pelanggan",rating:window.reviewRating,text:ve("review-text")||"",photoUrl:r||"",adminReply:"",isVisible:!0,createdAt:Be.firestore.FieldValue.serverTimestamp()};await W.collection("freshmart").doc("cms_data").collection("reviews").doc(i.toString()).set(c),nt.delete(t),gt(),M("Terima kasih atas ulasan Anda!"),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(r){console.error("Gagal mengirim ulasan:",r),M("Gagal mengirim ulasan: "+(r.message||"Error tidak diketahui"))}finally{me(!1),le()}}},nt=new Map,xr=5*60*1e3,wr=async e=>{if(!n("product-modal-reviews-container"))return;const a=o=>{const r=o.length?o.reduce((u,k)=>u+(parseFloat(k.rating)||0),0)/o.length:0,i=u=>Array.from({length:5},(k,E)=>`<i class="fa-solid fa-star ${E<Math.round(u)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join("");let c=`
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2"><i class="fa-solid fa-comment-dots text-amber-400"></i> Ulasan Pelanggan</h4>
                ${o.length?`<div class="flex items-center gap-1.5"><span class="flex text-xs">${i(r)}</span><span class="text-xs font-bold text-slate-600 dark:text-slate-300">${r.toFixed(1)}</span><span class="text-[10px] font-bold text-slate-400">(${o.length})</span></div>`:""}
            </div>`;if(!o.length){xe("product-modal-reviews-container",c+'<p class="text-[11px] font-bold text-slate-400 text-center py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">Belum ada ulasan untuk produk ini.</p>');return}const l=o.map(u=>{let k="";try{u.createdAt&&u.createdAt.toDate&&(k=u.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}))}catch{}return`
            <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div class="flex items-center justify-between mb-1.5">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${f(u.customerName||"Pelanggan")}</p>
                    <span class="text-[9px] font-bold text-slate-400">${k}</span>
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
            </div>`}).join("");xe("product-modal-reviews-container",c+`<div class="space-y-3">${l}</div>`)},s=nt.get(e);if(s&&Date.now()-s.timestamp<xr){a(s.data);return}xe("product-modal-reviews-container",'<div class="text-center py-6"><i class="fa-solid fa-spinner fa-spin text-xl text-slate-300"></i></div>');try{let r=(await W.collection("freshmart").doc("cms_data").collection("reviews").where("productId","==",e).get()).docs.map(i=>i.data()).filter(i=>i.isVisible!==!1);r.sort((i,c)=>{const l=i.createdAt&&i.createdAt.toMillis?i.createdAt.toMillis():0;return(c.createdAt&&c.createdAt.toMillis?c.createdAt.toMillis():0)-l}),nt.set(e,{data:r,timestamp:Date.now()}),a(r)}catch(o){console.warn("Gagal memuat ulasan:",o),xe("product-modal-reviews-container",'<p class="text-[11px] text-slate-400 text-center py-4">Belum ada ulasan yang dapat dimuat.</p>')}};window.openReviewModal=ur;window.setReviewRating=mr;window.handleReviewPhotoSelect=br;window.removeReviewPhoto=fr;window.closeReviewModal=gt;window.submitReview=ht;window.submitProductReview=ht;window.loadProductReviews=wr;const gr="admgaffidigital/tokoputri",hr=`https://api.github.com/repos/${gr}/releases/latest`,lt="https://github.com/admgaffidigital/tokoputri/releases/latest/download/TokoPutri.OfficialStore.apk";let Me=null,Xe=!1;const kr=e=>!e||isNaN(e)?"8.0 MB":`${(e/(1024*1024)).toFixed(1)} MB`,vr=e=>{if(!e)return"Terbaru";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return"Terbaru"}},yr=async()=>{if(Me)return Me;if(Xe)return null;const e=rt(b)||"v1.10.92";Xe=!0;try{const t=await fetch(hr,{headers:{Accept:"application/vnd.github.v3+json"},cache:"no-store"});if(t.ok){const a=await t.json(),s=a.assets?.find(c=>c.name?.toLowerCase().endsWith(".apk"))||a.assets?.[0],o=a.tag_name||e,r=Ns(o,e)>0,i=r?e:o;Me={tagName:i,name:`Toko Putri ( Official Store ) ${i}`,publishedAt:r?"08 Okt 2026":vr(a.published_at),fileSize:s?kr(s.size):"16.3 MB",downloadUrl:s?.browser_download_url||lt,notes:a.body||"",isLiveFetched:!0}}else throw new Error(`GitHub API HTTP ${t.status}`)}catch{const a=rt(b)||"v1.10.92";Me={tagName:a,name:`Toko Putri ( Official Store ) ${a}`,publishedAt:"08 Okt 2026",fileSize:"16.3 MB",downloadUrl:lt,notes:"",isLiveFetched:!1}}finally{Xe=!1}return Me},Pr=()=>{let e=n("app-download-modal");return e||(e=document.createElement("div"),e.id="app-download-modal",e.className="fixed inset-0 z-[125] bg-slate-950/85 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&zt()},e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e)},Tr=async()=>{const e=Pr();if(!e)return;Fe("appDownload"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const a=n("app-download-modal-box");a&&a.classList.remove("translate-y-full","sm:translate-y-8")}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light");const t=await yr();if(t){const a=n("app-modal-version-tag"),s=n("app-modal-filesize"),o=n("app-modal-published-date");a&&(a.textContent=t.tagName),s&&(s.innerHTML=`<span>${f(t.fileSize)}</span>`),o&&(o.textContent=`Rilis: ${f(t.publishedAt)}`)}},zt=(e=!1)=>{const t=n("app-download-modal");!t||t.style.display==="none"||Pe("appDownload",e,()=>{t.classList.add("opacity-0");const a=n("app-download-modal-box");a&&a.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{t.style.display="none"},300)})},Sr=()=>{const e=n("btn-download-apk-action"),t=n("btn-download-apk-icon"),a=n("btn-download-apk-text");e&&e.classList.add("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-spinner fa-spin"),a&&(a.textContent="Menghubungkan ke Server Rilis..."),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.showToast=="function"&&window.showToast("Memulai unduhan TokoPutri(OfficialStore).apk terbaru. Cek panel notifikasi HP Anda!");const s=Me?.downloadUrl||lt,o=document.createElement("a");o.href=s,o.setAttribute("download","TokoPutri(OfficialStore).apk"),o.target="_blank",o.rel="noopener noreferrer",document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>{if(e&&e.classList.remove("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-circle-check text-white"),a){const r=Me?.tagName||rt(b)||"v1.9.49";a.textContent=`Unduh Ulang APK (${r})`}},2500)};window.openAppDownloadModal=Tr;window.closeAppDownloadModal=zt;window.downloadLatestApk=Sr;window.setCat=e=>{Ct(e),ut(1),typeof window.rCat=="function"&&window.rCat()};window.setBrand=e=>{Bt(e),ut(1),typeof window.rCat=="function"&&window.rCat()};const Mr=()=>{let e="",t=st==="Semua Produk";e+=`
    <button onclick="setCat('Semua Produk'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-colors">
            <i class="fa-solid fa-layer-group text-base sm:text-lg"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA</span>
        <i class="fa-solid fa-circle-check text-base ${t?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
    </button>`,b.categories.forEach(r=>{let i=st===r.name,c=r.img?`<img loading="lazy" src="${f(r.img)}" alt="${f(r.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Cat'">`:'<i class="fa-solid fa-box text-base sm:text-lg"></i>';e+=`
        <button onclick="setCat('${f(r.name)}'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden border border-slate-200 dark:border-slate-600">
                ${c}
            </div>
            <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 line-clamp-1 ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${f(r.name)}</span>
            <i class="fa-solid fa-circle-check text-base ${i?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
        </button>`});const a=n("modal-category-list");a&&(a.innerHTML=`<div class="flex flex-col gap-2.5 pb-6 w-full">${e}</div>`);const s=n("category-modal"),o=n("category-modal-content");s&&o&&(s.classList.contains("hidden")&&Fe("category"),De(s,o))};window.openCategoryModal=Mr;window.openBrandModal=()=>{let e="",t=at==="Semua Merek";e+=`
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA MEREK</span>
    </button>`,b.brands.forEach(r=>{let i=at===r.name,c=r.img?`<img loading="lazy" src="${f(r.img)}" alt="${f(r.name)}" class="w-full h-full object-contain p-1.5" >`:'<i class="fa-solid fa-tag text-lg sm:text-xl"></i>';e+=`
        <button onclick="setBrand('${f(r.name)}'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-2.5 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600">
                ${c}
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${f(r.name)}</span>
        </button>`});const a=n("modal-brand-grid");a&&(a.innerHTML=e);const s=n("brand-modal"),o=n("brand-modal-content");s&&o&&(s.classList.contains("hidden")&&Fe("brand"),De(s,o))};window.closeCategoryModal=(e=!1)=>{const t=n("category-modal"),a=n("category-modal-content");t&&a&&Pe("category",e,()=>{Ee(t,a)})};window.closeBrandModal=(e=!1)=>{const t=n("brand-modal"),a=n("brand-modal-content");t&&a&&Pe("brand",e,()=>{Ee(t,a)})};window.openQuickMenuModal=()=>{const e=n("quickmenu-modal"),t=n("quickmenu-modal-content");e&&t&&(e.classList.contains("hidden")&&Fe("quickmenu"),De(e,t))};window.openTermsModal=()=>{const e=`
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
    `,t=b?.store?.terms,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;xe("terms-modal-content-body",a);const s=n("terms-modal"),o=n("terms-modal-content");s&&o&&(s.classList.contains("hidden")&&Fe("terms"),De(s,o))};window.closeTermsModal=(e=!1)=>{const t=n("terms-modal"),a=n("terms-modal-content");t&&a&&Pe("terms",e,()=>{Ee(t,a)})};window.openPrivacyModal=()=>{const e=`
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
    `,t=b?.store?.privacy,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;xe("privacy-modal-content-body",a);const s=n("privacy-modal"),o=n("privacy-modal-content");s&&o&&(s.classList.contains("hidden")&&Fe("privacy"),De(s,o))};window.closePrivacyModal=(e=!1)=>{const t=n("privacy-modal"),a=n("privacy-modal-content");t&&a&&Pe("privacy",e,()=>{Ee(t,a)})};window.closeQuickMenuModal=(e=!1)=>{const t=n("quickmenu-modal"),a=n("quickmenu-modal-content");t&&a&&Pe("quickmenu",e,()=>{Ee(t,a)})};window.switchGuideTab=(e="customer")=>{["customer","pos","admin"].forEach(s=>{const o=n(`guide-tab-btn-${s}`),r=n(`guide-section-${s}`);s===e?(o&&(o.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-extrabold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer primary-bg text-white"),r&&r.classList.remove("hidden")):(o&&(o.className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"),r&&r.classList.add("hidden"))});const a=document.querySelector("#shopping-guide-modal .custom-scrollbar");a&&(a.scrollTop=0)};window.openShoppingGuideModal=(e="customer")=>{const t=n("shopping-guide-modal"),a=n("shopping-guide-modal-content");t&&a&&(typeof window.switchGuideTab=="function"&&window.switchGuideTab(e),t.classList.contains("hidden")&&Fe("guide"),De(t,a))};window.closeShoppingGuideModal=(e=!1)=>{const t=n("shopping-guide-modal"),a=n("shopping-guide-modal-content");t&&a&&Pe("guide",e,()=>{Ee(t,a)})};window.navigateFromQuickMenu=e=>{closeQuickMenuModal(!0);const t=$e.indexOf("quickmenu");t>-1&&$e.splice(t,1),typeof e=="function"?(history.replaceState({view:ta},"",window.location.href),e()):(history.replaceState({view:e},"",window.location.href),aa(e,!0))};let At=!1,Ge=null;const ze=async()=>At?!0:Ge||(Ge=Promise.all([We(()=>import("./module-admin-fQZJT0TA.js").then(e=>e.e),__vite__mapDeps([0,1,2,3,4,5,6,7])),We(()=>import("./module-admin-fQZJT0TA.js").then(e=>e.h),__vite__mapDeps([0,1,2,3,4,5,6,7]))]).then(()=>(At=!0,!0)),Ge);window.ensureAdminLoaded=ze;window.checkAdminAccess=async()=>{if(ye("Membuka Panel Owner..."),await ze(),le(),typeof window.__checkAdminAccessReal=="function")return window.__checkAdminAccessReal()};typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);typeof window<"u"&&(window.AndroidNativeApp||window.Capacitor||window.location&&(window.location.protocol==="capacitor:"||window.location.protocol==="ionic:"))&&document.documentElement.classList.add("is-native-app");sa();window.firebase=Be;window.db=W;window.DOMPurify=ms;window.ensureScriptLoaded=ra;if(typeof window<"u"){const e=window.print?window.print.bind(window):null;window.print=function(){window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():e&&e()}}window.uiPalettes=hs;window.hexToRgb=ks;window.applyUITheme=jt;window.toggleTheme=vs;window.applyBackgroundStyle=_t;ys();const $r=localStorage.getItem("freshmart_ui_theme")||"emerald";jt($r,localStorage.getItem("freshmart_theme_color"));const Dt=()=>{Cs();const e=localStorage.getItem("freshmart_bg_style")||"minimalist",t=localStorage.getItem("freshmart_bg_custom_url")||"";_t(e,t),Bs()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Dt):Dt();window.onerror=function(e,t,a,s,o){return console.error("Global Error Caught:",e,"at",a,":",s),typeof showToast=="function"&&showToast("Ops, ada kendala sistem."),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Promise Rejection Sentinel:",e.reason)});window.addEventListener("vite:preloadError",function(e){console.warn("[Vite] Chunk preload failed (new deployment detected). Auto-reloading...",e);const t="freshmart_preload_reload",a=sessionStorage.getItem(t),s=Date.now();(!a||s-parseInt(a,10)>1e4)&&(sessionStorage.setItem(t,String(s)),window.location.reload())});window.updateSEO=oa;window.injectJSONLD=ia;window.rewardStatusLabel=pt;window.getYouTubeId=na;window.parseVideoUrl=la;window.fixDriveVideo=da;window.fixDriveVideoPreview=ca;let Et=Ut;window.calcTaxDetails=e=>{const t=b?.store||{},a=t.ppnEnabled===!0||t.ppnEnabled==="true",s=t.ppnRate!==void 0&&t.ppnRate!==null&&!isNaN(parseFloat(t.ppnRate))?Math.max(0,parseFloat(t.ppnRate)):11,o=t.ppnType||"exclusive",r=t.ppnShowZero!==!1,i=t.ppnTaxLabel||"PPN";if(!a||e<=0)return{ppnEnabled:!1,ppnRate:0,ppnType:o,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0,ppnShowZero:!1,ppnLabel:"PPN"};if(s===0)return{ppnEnabled:!0,ppnRate:0,ppnType:o,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0,ppnShowZero:r,ppnLabel:i};if(o==="inclusive"){const c=Math.round(e*100/(100+s)),l=e-c;return{ppnEnabled:!0,ppnRate:s,ppnType:"inclusive",ppnAmount:l,dppAmount:c,grandTotalAdd:0,ppnShowZero:r,ppnLabel:i}}else{const c=Math.round(e*s/100);return{ppnEnabled:!0,ppnRate:s,ppnType:"exclusive",ppnAmount:c,dppAmount:Math.max(0,e),grandTotalAdd:c,ppnShowZero:r,ppnLabel:i}}};typeof requestIdleCallback<"u"?requestIdleCallback(vt,{timeout:5e3}):setTimeout(vt,3e3);window.isAdm=!1;history.replaceState({view:"view-catalog"},"","");window.addEventListener("DOMContentLoaded",async()=>{try{Rt()}catch(e){console.warn("[NativeMobile] Error:",e)}await Ps();try{Ts()}catch(e){console.warn("[syncAppMeta] Error:",e)}Ss(),Ms(),Tt(),window.attachRewardsRealtime=Tt,We(()=>import("./module-pos-DHcwy1vP.js").then(e=>e.U),__vite__mapDeps([4,1,2,3,5,6])).then(e=>{typeof e.initPOSAuth=="function"&&e.initPOSAuth()}).catch(e=>console.warn("[POS Auth] Gagal inisialisasi:",e)),Qe.onAuthStateChanged(async e=>{if(!js()){if(e&&e.uid!==_e){try{const t=await W.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(e.uid).get();if(t.exists){const a=t.data()||{};if(a.isActive===!1){Ze(),await Qe.signOut();return}const s={uid:e.uid,name:a.name||e.email,email:a.email||e.email,role:a.role||He.CASHIER,permissions:a.permissions||null,isActive:!0};if(yt(s),s.role===He.CASHIER){We(()=>import("./module-pos-DHcwy1vP.js").then(r=>r.U),__vite__mapDeps([4,1,2,3,5,6])).then(r=>{typeof r.setCashierSession=="function"&&r.setCashierSession(s)}).catch(()=>{}),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();return}await ze(),window.isAdm=!0,window.__localIsAdm=!0,St(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon();let o=document.getElementById("view-admin-login");o&&!o.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu());return}}catch{}Ze(),await Qe.signOut();return}if(e&&e.uid===_e){yt({uid:_e,name:"Owner Toko",email:e.email,role:He.OWNER,isActive:!0});try{sessionStorage.setItem("pos_cashier_session",JSON.stringify({uid:_e,name:"Owner Toko",email:e.email,role:He.OWNER}))}catch{}await ze(),await _s(),Us(),window.isAdm=!0,window.__localIsAdm=!0,St(),typeof window.updatePOSHeaderIcon=="function"?window.updatePOSHeaderIcon():typeof window.initPOSAuth=="function"&&window.initPOSAuth();let t=document.getElementById("view-admin-login");t&&!t.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu(),showToast("Sesi Owner Dipulihkan! Selamat Datang."))}else Ks(),localStorage.removeItem("freshmart_admin_session_id"),Ze(),window.isAdm=!1,window.__localIsAdm=!1,$s(),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()}})});window.el=n;window.show=fe;window.hide=I;window.toggleCls=de;window.setIn=ae;window.setH=xe;window.setV=Ie;window.getV=ve;window.esc=f;window.fixD=ct;window.fCur=w;window.fAccounting=pa;window.sL=et;window.ssL=qe;window.defaultFbC=mt;window.fbC=mt;window.FIREBASE_CONFIG=mt;window.defApp=ua;window.ADMIN_UID=_e;window.sLoad=ye;window.hLoad=le;window.sanitizeCart=As;window.initNativeMobileEngine=Rt;window.triggerHaptic=ma;window.checkAndEnforceSubscriptionLockout=Ds;window.renderSubscriptionNoticeInCMS=Es;window.openRenewalModal=Fs;window.closeRenewalModal=Ls;window.verifyAndApplyLicenseKey=Is;const S=(e,t,a)=>{try{Object.defineProperty(window,e,{get:t,set:a,configurable:!0})}catch{}};S("GAS_UPLOAD_URL",()=>Et,e=>{Et=e});S("confirmCb",()=>ba,e=>{rs(e)});S("appData",()=>b,e=>{fa(e)});S("cart",()=>U,e=>{Ft(e)});S("wishlist",()=>wa,e=>{xa(e)});S("myOrders",()=>K,e=>{Je(e)});S("cust",()=>d,e=>{Lt(e)});S("currentMember",()=>F,e=>{tt(e)});S("selectedReward",()=>Ae,e=>{Ce(e)});S("memberCheckTimer",()=>ga,e=>{os(e)});S("aCat",()=>st,e=>{Ct(e)});S("aBrand",()=>at,e=>{Bt(e)});S("sQ",()=>ka,e=>{ha(e)});S("cSort",()=>ya,e=>{va(e)});S("cView",()=>Ta,e=>{Pa(e)});S("cPage",()=>Sa,e=>{ut(e)});S("iPP",()=>$a,e=>{Ma(e)});S("cTab",()=>Aa,e=>{is(e)});S("aSq",()=>Da,e=>{ns(e)});S("eId",()=>Ea,e=>{ls(e)});S("cProd",()=>La,e=>{Fa(e)});S("cVar",()=>Ca,e=>{Ia(e)});S("tVars",()=>Ba,e=>{ds(e)});S("tWhol",()=>Ra,e=>{cs(e)});S("tSpec",()=>Oa,e=>{ps(e)});S("cQty",()=>_a,e=>{ja(e)});S("oMods",()=>$e,e=>{Ua(e)});S("aOrdLst",()=>Na,e=>{Ka(e)});S("aCustLst",()=>Ga,e=>{Ha(e)});S("aRevLst",()=>Va,e=>{qa(e)});S("gOrds",()=>za,e=>{Wa(e)});S("gReviews",()=>Qa,e=>{Ja(e)});S("cVOrd",()=>Ya,e=>{Za(e)});S("vouch",()=>h,e=>{Te(e)});S("toastT",()=>Xa,e=>{us(e)});S("isSaving",()=>dt,e=>{me(e)});S("reviewFilterMode",()=>ts,e=>{es(e)});S("lastReportPeriod",()=>ss,e=>{as(e)});
