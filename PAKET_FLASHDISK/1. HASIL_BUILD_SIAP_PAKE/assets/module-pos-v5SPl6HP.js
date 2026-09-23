const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pos-variant-sheet-D2tC43LA.js","assets/module-print-DoqR8CYY.js"])))=>i.map(i=>d[i]);
import{d as P,_ as G,a as Qe}from"./module-member-BePJLVLb.js";import{a as p,e as u,i as b,t as S,b as F,f as Me,x as ne,u as Ye,a2 as Je,a0 as ke}from"./module-print-DoqR8CYY.js";import{f as re}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";let ye=!1;const Xe=()=>ye?Promise.resolve():G(()=>import("./pos-variant-sheet-D2tC43LA.js"),__vite__mapDeps([0,1])).then(()=>{ye=!0});let x=[],U="",K="",_="grid";try{const e=localStorage.getItem("pos_view_mode");(e==="list"||e==="grid")&&(_=e)}catch{}let m={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},v="cash",M=0,N=0,j="",ve=null,oe=null;const ce=e=>{_=e;try{localStorage.setItem("pos_view_mode",e)}catch{}const t=u("pos-view-btn-grid"),r=u("pos-view-btn-list");t&&r&&(e==="grid"?(t.style.background="var(--color-primary)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs",r.style.removeProperty("background"),r.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400"):(r.style.background="var(--color-primary)",r.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs",t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")),q()},I=e=>Math.max(0,parseInt(e)||0),f=e=>Me(e),ee=()=>x.reduce((e,t)=>e+t.subtotal,0),$=()=>Math.max(0,ee()-I(N)),Te=()=>M-$(),B=()=>{try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,r=t.createOscillator(),a=t.createGain();r.type="sine",r.frequency.setValueAtTime(1400,t.currentTime),a.gain.setValueAtTime(.08,t.currentTime),a.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.08),r.connect(a),a.connect(t.destination),r.start(),r.stop(t.currentTime+.08),setTimeout(()=>{t.close().catch(()=>{})},150)}catch{}},Ze=(e,t)=>{if(!e||!e.wholesale||!e.wholesale.length)return null;const r=[...e.wholesale].sort((a,i)=>i.minQty-a.minQty);for(const a of r)if(t>=parseFloat(a.minQty))return parseFloat(a.price);return null},H=e=>{if(!e.isVariant){const t=(p.products||[]).find(a=>a&&String(a.id)===String(e.id)),r=t?Ze(t,e.qty):null;r!==null?(e.basePrice=e.basePrice||e.price,e.price=r,e.isWholesale=!0):(e.basePrice&&(e.price=e.basePrice),e.isWholesale=!1)}return e.subtotal=Math.max(0,e.price*e.qty-I(e.discount)),e},et=()=>{const e=new Date,t=r=>String(r).padStart(2,"0");return`POS-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},Ce=()=>{oe&&clearInterval(oe);const e=()=>{const t=u("pos-live-clock");if(!t)return;const r=new Date;t.textContent=r.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB"};e(),oe=setInterval(e,1e3)},ae=()=>{window.__posBarcodeFn&&(document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=null)},Le=()=>{ae(),window.__posBarcodeFn=e=>{if(!e||typeof e.key!="string")return;const t=window.curViewName||"";if(!(t==="view-pos-cashier"||t==="view-admin"&&window.cTab==="pos"))return;const a=document.activeElement?.tagName?.toLowerCase();if(!(a==="input"||a==="textarea"||a==="select"))if(e.key==="Enter"){if(j&&j.length>=3){const i=j.trim().toLowerCase(),n=(p.products||[]).find(s=>s&&s.isActive!=="false"&&s.isActive!==!1&&(s.barcode&&s.barcode.toLowerCase()===i||s.sku&&s.sku.toLowerCase()===i||s.id&&String(s.id).toLowerCase()===i));if(n)pe(n.id),B(),S(`Ditambahkan: ${n.name}`,"success");else{const s=u("pos-search-input");s&&(s.value=j,U=j,q()),S("Barcode tidak ditemukan di katalog","warning")}j=""}}else e.key&&e.key.length===1&&(j=(j||"")+e.key,clearTimeout(ve),ve=setTimeout(()=>{j=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},pe=e=>{const t=(p.products||[]).find(i=>i&&String(i.id)===String(e));if(!t)return;if(t.variants&&t.variants.length>0){Xe().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(e)});return}const a=x.find(i=>String(i.id)===String(e)&&!i.isVariant);if(a)a.qty+=1,H(a);else{const i=parseFloat(t.price)||0;x.push(H({id:t.id,name:t.name,price:i,basePrice:i,qty:1,discount:0,subtotal:i,isVariant:!1,isWholesale:!1}))}B(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),T()},Oe=(e,t)=>{const r=(p.products||[]).find(i=>i&&String(i.id)===String(e));if(!r)return;const a=x.find(i=>String(i.id)===String(e)&&!i.isVariant);if(a)a.qty+=t,H(a);else{const i=parseFloat(r.price)||0,n=H({id:r.id,name:r.name,price:i,basePrice:i,qty:t,discount:0,subtotal:i*t,isVariant:!1,isWholesale:!1});x.push(n)}B(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),T()},Ie=(e,t,r,a,i=1)=>{const n=`${e}__v${a}`,s=x.find(o=>o.cartKey===n);if(s)s.qty+=i,H(s);else{const d=`${(p.products||[]).find(l=>l&&String(l.id)===String(e))?.name||e} — ${t}`;x.push(H({id:e,cartKey:n,name:d,variantName:t,variantIdx:a,price:r,basePrice:r,qty:i,discount:0,subtotal:r*i,isVariant:!0,isWholesale:!1}))}B(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),T()},Ae=(e,t)=>{const r=x.find(a=>(a.cartKey||String(a.id))===String(e));r&&(r.qty=Math.max(1,r.qty+t),H(r),t>0&&B(),T())},De=(e,t)=>{const r=x.find(a=>(a.cartKey||String(a.id))===String(e));r&&(r.qty=Math.max(1,I(t)),H(r),T())},je=(e,t)=>{const r=x.find(a=>(a.cartKey||String(a.id))===String(e));r&&(r.discount=Math.min(I(t),r.price*r.qty),H(r),T())},_e=e=>{x=x.filter(t=>(t.cartKey||String(t.id))!==String(e)),T(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},He=()=>{if(x.length===0)return;const e=()=>{x=[],N=0,T(),S("Keranjang kasir dikosongkan.")};typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Hapus semua item dari transaksi saat ini?",e,"Ya, Kosongkan",!0):e()},be=()=>{const e=u("pos-mobile-cart-drawer"),t=u("pos-mobile-cart-sheet");e&&t&&(e.classList.remove("opacity-0","pointer-events-none"),e.classList.add("opacity-100"),t.classList.remove("translate-y-full"),t.classList.add("translate-y-0"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCartDrawer"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Q=(e=!1)=>{const t=u("pos-mobile-cart-drawer"),r=u("pos-mobile-cart-sheet");if(t&&r){const a=()=>{r.classList.add("translate-y-full"),r.classList.remove("translate-y-0"),t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100")};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCartDrawer",!1,a):a()}},tt=e=>{if(e.img&&typeof e.img=="string")return ne(e.img,"w150-rw");const t=(p.products||[]).find(r=>String(r.id)===String(e.id));return t&&t.img&&typeof t.img=="string"?ne(t.img,"w150-rw"):""},q=()=>{const e=(p.products||[]).filter(s=>{if(!s||s.isActive==="false"||s.isActive===!1||K&&s.category!==K)return!1;if(U){const o=U.toLowerCase();return(s.name||"").toLowerCase().includes(o)||(s.barcode||"").toLowerCase().includes(o)||(s.sku||"").toLowerCase().includes(o)}return!0}),r=["Semua",...new Set((p.products||[]).filter(s=>s&&s.isActive!=="false"&&s.category).map(s=>s.category))].map(s=>{const o=s==="Semua",d=o?!K:K===s;return`<button onclick="window.posCatFilter('${b(o?"":s)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs ${d?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}" style="${d?"background:var(--color-primary)":""}">${b(s)}</button>`}).join(""),a=e.length===0?`<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
             <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
               <i class="fa-solid fa-box-open text-2xl"></i>
             </div>
             <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
             <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
           </div>`:e.map(s=>{const o=!!(s.img&&typeof s.img=="string"&&s.img.trim()),d=o?ne(s.img,"w300-rw"):"",l=s.variants&&s.variants.length>0,c=s.wholesale&&s.wholesale.length>0,g=x.filter(R=>String(R.id)===String(s.id)).reduce((R,h)=>R+h.qty,0),C=b(String(s.id));return _==="list"?`
                <div class="pos-list-item${g>0?" in-cart":""}" onclick="window.posAddToCart('${C}')">
                    <div class="pos-list-thumb">
                        ${o?`<img width="52" height="52" loading="lazy" decoding="async" src="${b(d)}" alt="${b(s.name)}" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                               <div class="pos-img-placeholder" style="display:none;width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>`:'<div class="pos-img-placeholder" style="width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>'}
                        ${g>0?`<div class="pos-qty-badge" style="top:2px;right:2px;min-width:18px;height:18px;font-size:9px;border-width:1.5px">${g}</div>`:""}
                    </div>
                    <div style="flex:1;min-width:0">
                        <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;margin-bottom:3px">
                            ${s.category?`<span style="font-size:9px;text-transform:uppercase;letter-spacing:0.06em;font-weight:700;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px">${b(s.category)}</span>`:""}
                            ${l?'<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>':""}
                            ${c?'<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>':""}
                        </div>
                        <p style="font-size:12px;font-weight:700;color:#1e293b;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${b(s.name)}">${b(s.name)}</p>
                        <p style="font-size:12px;font-weight:900;color:var(--color-primary);margin-top:2px">${f(parseFloat(s.price)||0)}</p>
                    </div>
                    <button onclick="event.stopPropagation();window.posAddToCart('${C}')" class="pos-add-btn" title="Tambah ke keranjang">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>`:`
            <div class="pos-product-card${g>0?" in-cart":""}" onclick="window.posAddToCart('${C}')">
                <!-- Kotak Gambar Rasio 1:1 Anti-Collapse (aspect-ratio 1:1 + min-height 120px) -->
                <div class="pos-img-box">
                    <div class="pos-img-badges">
                        ${l?'<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>':""}
                        ${c?'<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>':""}
                    </div>
                    ${g>0?`<div class="pos-qty-badge">${g}</div>`:""}
                    ${o?`<img width="300" height="300" loading="lazy" decoding="async" src="${b(d)}" alt="${b(s.name)}"
                             onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                           <div class="pos-img-placeholder" style="display:none">
                             <i class="fa-solid fa-box-open"></i>
                             <span>${b(s.category||"Toko")}</span>
                           </div>`:`<div class="pos-img-placeholder">
                             <i class="fa-solid fa-box-open"></i>
                             <span>${b(s.category||"Produk")}</span>
                           </div>`}
                </div>
                <!-- Info Produk -->
                <div class="pos-card-info">
                    ${s.category?`<p class="pos-card-cat">${b(s.category)}</p>`:""}
                    <p class="pos-card-name" title="${b(s.name)}">${b(s.name)}</p>
                    <div class="pos-card-footer">
                        <span class="pos-card-price">${f(parseFloat(s.price)||0)}</span>
                        <button onclick="event.stopPropagation();window.posAddToCart('${C}')" class="pos-add-btn" title="Tambah ke keranjang">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>`}).join(""),i=u("pos-cat-filter"),n=u("pos-catalog-grid");i&&(i.innerHTML=r),n&&(n.className=_==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode",n.innerHTML=a)},T=()=>{const e=x.reduce((o,d)=>o+d.qty,0),t=ee(),r=$(),a=f(r),i=f(t),n=x.length===0?`<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`:x.map(o=>{const d=b(String(o.cartKey||o.id)),l=tt(o),c=o.isVariant&&o.variantName?b(o.name.replace(` — ${o.variantName}`,"")):b(o.name);return`
            <div class="group flex items-center gap-2.5 p-2 sm:p-2.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[var(--color-primary)] transition-all">
                <!-- 40px Thumbnail -->
                <div class="w-10 h-10 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                    ${l?`<img width="40" height="40" loading="lazy" src="${b(l)}" alt="${b(o.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                           <div class="hidden w-full h-full items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>`:'<div class="w-full h-full flex items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>'}
                </div>
                <!-- Details -->
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug" title="${b(o.name)}">${c}</p>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        ${o.isWholesale?'<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary)">GROSIR</span>':""}
                        ${o.isVariant?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary);opacity:0.95"><i class="fa-solid fa-layer-group text-[7px]"></i>${b(o.variantName||"VARIAN")}</span>`:""}
                        <span class="text-[10px] text-slate-500 font-medium">
                            ${o.isWholesale&&o.basePrice?`<span class="line-through text-slate-400">${f(o.basePrice)}</span> <span class="font-bold" style="color:var(--color-primary)">${f(o.price)}</span>`:f(o.price)}
                        </span>
                    </div>
                    <div class="flex items-center gap-1 mt-1">
                        <span class="text-[9px] text-slate-400 font-bold uppercase">Diskon:</span>
                        <input type="number" min="0" placeholder="0" value="${o.discount||""}" onchange="window.posSetItemDisc('${d}',this.value)"
                            class="w-16 text-[10px] font-bold border border-slate-200 dark:border-slate-600 rounded-lg px-1.5 py-0.5 bg-slate-50 dark:bg-slate-700 text-right focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                </div>
                <!-- Stepper & Subtotal -->
                <div class="flex flex-col items-end gap-1 shrink-0">
                    <div class="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-700/80 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600">
                        <button onclick="window.posUpdateQty('${d}',-1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90">−</button>
                        <input type="number" min="1" value="${o.qty}" onchange="window.posSetQty('${d}',this.value)"
                            class="w-6 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none">
                        <button onclick="window.posUpdateQty('${d}',1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90">+</button>
                    </div>
                    <p class="text-xs font-black" style="color:var(--color-primary)">${f(o.subtotal)}</p>
                    <button onclick="window.posRemoveItem('${d}')" class="text-slate-400 hover:text-rose-500 text-[11px] p-0.5 transition-colors" title="Hapus item">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>`}).join("");document.querySelectorAll(".pos-cart-items-target").forEach(o=>o.innerHTML=n),document.querySelectorAll(".pos-subtotal-target").forEach(o=>o.textContent=i),document.querySelectorAll(".pos-total-target").forEach(o=>o.textContent=a),document.querySelectorAll(".pos-item-count-target").forEach(o=>o.textContent=String(e)),document.querySelectorAll(".pos-global-disc-target").forEach(o=>{document.activeElement!==o&&(o.value=N||"")}),document.querySelectorAll(".pos-pay-btn-target").forEach(o=>{o.disabled=x.length===0;const d=o.querySelector(".btn-text");d&&(d.textContent=x.length>0?`BAYAR — ${a}`:"PROSES PEMBAYARAN")});const s=u("pos-mobile-floating-bar");s&&(x.length>0?(s.classList.remove("translate-y-32","opacity-0","pointer-events-none"),s.classList.add("translate-y-0","opacity-100")):(s.classList.add("translate-y-32","opacity-0","pointer-events-none"),s.classList.remove("translate-y-0","opacity-100"),Q(!0)))},Re=()=>{if(x.length===0){S("Keranjang masih kosong!","warning");return}typeof window.pushModalHistory=="function"&&window.pushModalHistory("posPayment"),m={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},v="cash",M=$(),E(),Y(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-pay-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md max-h-[94vh] flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-800">
        <!-- Header -->
        <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <div>
            <h2 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-cash-register" style="color:var(--color-primary)"></i>
              <span>Proses Pembayaran Kasir</span>
            </h2>
            <p class="text-xs text-slate-500 mt-0.5">Total Tagihan: <span class="font-black text-sm" style="color:var(--color-primary)">${f($())}</span></p>
          </div>
          <button onclick="window.closePayModal()" class="w-9 h-9 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 hover:text-slate-800 dark:hover:text-white text-lg flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
        </div>

        <!-- Body Scrollable -->
        <div class="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1">
          <!-- Pilih Pelanggan -->
          <div>
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Tipe Pelanggan</label>
            <div class="grid grid-cols-3 gap-2 mb-2.5">
              <button onclick="window.setPosCustomerType('umum')" id="pos-ctype-umum" type="button" class="flex flex-col items-center justify-center text-center py-2.5 px-2 rounded-xl text-[10px] font-black uppercase border transition-all cursor-pointer shadow-xs" style="background:var(--color-primary);color:white;border-color:var(--color-primary)"><i class="fa-solid fa-user text-base leading-none mb-1 text-center"></i><span>Umum</span></button>
              <button onclick="window.setPosCustomerType('member')" id="pos-ctype-member" type="button" class="flex flex-col items-center justify-center text-center py-2.5 px-2 rounded-xl text-[10px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-id-card text-base leading-none mb-1 text-center"></i><span>Member</span></button>
              <button onclick="window.setPosCustomerType('tempo')" id="pos-ctype-tempo" type="button" class="flex flex-col items-center justify-center text-center py-2.5 px-2 rounded-xl text-[10px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-hourglass-half text-base leading-none mb-1 text-center"></i><span>Tempo</span></button>
            </div>
            <div id="pos-customer-fields">
              <input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">
            </div>
          </div>

          <!-- Metode Bayar -->
          <div>
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Metode Pembayaran</label>
            <div class="grid grid-cols-4 gap-1.5 mb-3">
              <button onclick="window.setPosPayMethod('cash')" id="pos-pay-cash" type="button" class="flex flex-col items-center justify-center text-center py-2 px-1 rounded-xl text-[9px] font-black uppercase border transition-all cursor-pointer shadow-xs" style="background:var(--color-primary);color:white;border-color:var(--color-primary)"><i class="fa-solid fa-money-bill-wave text-base leading-none mb-1 text-center"></i><span>Tunai</span></button>
              <button onclick="window.setPosPayMethod('qris')" id="pos-pay-qris" type="button" class="flex flex-col items-center justify-center text-center py-2 px-1 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-qrcode text-base leading-none mb-1 text-center"></i><span>QRIS</span></button>
              <button onclick="window.setPosPayMethod('transfer')" id="pos-pay-transfer" type="button" class="flex flex-col items-center justify-center text-center py-2 px-1 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-building-columns text-base leading-none mb-1 text-center"></i><span>Bank</span></button>
              <button onclick="window.setPosPayMethod('tempo')" id="pos-pay-tempo" type="button" class="flex flex-col items-center justify-center text-center py-2 px-1 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-hourglass-half text-base leading-none mb-1 text-center"></i><span>Tempo</span></button>
            </div>
            <div id="pos-pay-detail"></div>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-2.5 shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <button onclick="window.closePayModal()" class="w-1/3 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">Batal</button>
          <button onclick="window.processPOSTx()" id="pos-process-btn" class="w-2/3 py-3 rounded-2xl text-white font-black text-xs sm:text-sm shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
            <i class="fa-solid fa-check-circle"></i>
            <span>Selesaikan Transaksi</span>
          </button>
        </div>
      </div>
    </div>`),le("cash")},ue=(e=!1)=>{const t=u("pos-pay-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posPayment",!1,()=>t.remove()):t.remove())},Ne=(e,t,r)=>{r.forEach(a=>{const i=u(`${e}-${a}`);i&&(a===t?(i.style.background="var(--color-primary)",i.style.color="white",i.style.borderColor="var(--color-primary)",i.classList.add("shadow-xs")):(i.style.removeProperty("background"),i.style.removeProperty("color"),i.style.removeProperty("border-color"),i.classList.remove("shadow-xs")))})},le=e=>{const t=u("pos-pay-detail");if(!t)return;const r=$(),a=`
      <div class="flex justify-between items-center py-2 px-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs">
        <span class="text-slate-500 font-medium">Total yang Harus Dibayar</span>
        <span class="font-black text-sm" style="color:var(--color-primary)">${f(r)}</span>
      </div>`;if(e==="cash"){const n=[{label:"Uang Pas",val:r,isPas:!0},{label:"10.000",val:1e4},{label:"20.000",val:2e4},{label:"50.000",val:5e4},{label:"100.000",val:1e5},{label:"200.000",val:2e5},{label:"500.000",val:5e5}].map(s=>`
            <button onclick="window.posSetQuickCash(${s.val})" type="button"
                class="px-2.5 py-1.5 rounded-xl text-[11px] font-black border transition-all active:scale-95 ${s.isPas?"text-white border-transparent shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]"}"
                style="${s.isPas?"background:var(--color-primary)":""}">
                ${s.isPas?"💵 Uang Pas":`Rp ${s.label}`}
            </button>
        `).join("");t.innerHTML=`
            ${a}
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-wider text-slate-400">Nominal Uang Diterima (Rp)</label>
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">Rp</span>
                    <input id="pos-paid-input" type="number" min="0" placeholder="${r}" value="${M||""}"
                        class="w-full border-2 rounded-2xl pl-10 pr-4 py-2.5 text-base sm:text-lg font-black bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none text-right transition-all"
                        style="border-color:var(--color-primary)" oninput="window.updatePosChange(this.value)">
                </div>

                <!-- Quick Cash Buttons Grid -->
                <div class="pt-1">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Pilihan Uang Cepat (1-Klik)</p>
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                        ${n}
                    </div>
                </div>

                <!-- Kembalian Box -->
                <div id="pos-change-box" class="mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${M>=r?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}">
                    <div>
                        <p class="text-[9px] font-black uppercase tracking-wider text-slate-400">Status Kembalian</p>
                        <p id="pos-change-label" class="text-xs font-bold ${M>=r?"text-emerald-700 dark:text-emerald-400":"text-rose-700 dark:text-rose-400"}">
                            ${M>=r?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"}
                        </p>
                    </div>
                    <span id="pos-change-display" class="text-base font-black ${M>=r?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">
                        ${f(Math.abs(Te()))}
                    </span>
                </div>
            </div>
        `}else if(e==="qris"){const i=p.payment?.qrisUrl||"";t.innerHTML=`
          ${a}
          ${i?`<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${b(i)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>`:'<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>'}`}else if(e==="transfer"){const n=(Array.isArray(p.banks)?p.banks:[]).filter(o=>o&&(o.bankName||o.name||o.bank));let s='<option value="">Rekening bank belum diatur di CMS Admin</option>';n.length>0&&(s=n.map(o=>{const d=o.bankName||o.name||o.bank||"Bank",l=o.bankAccount||o.number||o.noRekening||o.account||"",c=o.bankOwner||o.holder||o.atasNama||o.owner||"",k=`${d}${l?" — "+l:""}${c?" a/n "+c:""}`;return`<option value="${b(k)}">${b(k)}</option>`}).join("")),t.innerHTML=`
          ${a}
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rekening Tujuan Toko</label>
            <div class="relative">
              <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${s}
              </select>
            </div>
            ${n.length>0?`
              <div class="p-2.5 bg-emerald-50/80 dark:bg-emerald-950/30 rounded-xl border border-emerald-200/80 dark:border-emerald-800/60 text-[11px] text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <i class="fa-solid fa-building-columns text-emerald-600 dark:text-emerald-400 shrink-0 text-xs"></i>
                <span>Pastikan pembeli telah mentransfer sesuai tagihan ke rekening di atas sebelum menyelesaikan transaksi.</span>
              </div>
            `:`
              <div class="p-2.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-[11px] text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <i class="fa-solid fa-triangle-exclamation text-amber-600 dark:text-amber-400 shrink-0 text-xs"></i>
                <span>Rekening bank belum diatur di menu CMS Admin > Rekening.</span>
              </div>
            `}
          </div>`}else e==="tempo"&&(t.innerHTML=`
          ${a}
          <div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-700/80 mb-2.5">
            <p class="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half"></i> Pembayaran Tempo / Piutang</p>
            <p class="text-[10px] text-amber-700 dark:text-amber-400 mt-1">Transaksi otomatis dicatat sebagai piutang di database toko.</p>
          </div>
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Uang Muka / DP (Rp) — opsional</label>
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="0" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`)},Be=e=>{m.isMember=e==="member",m.isNewTempo=e==="tempo",Ne("pos-ctype",e,["umum","member","tempo"]);const t=u("pos-customer-fields");t&&(e==="umum"?(m.name="",m.phone="",m.memberId=null,m.points=0,t.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">'):e==="member"?(t.innerHTML=`
          <div class="space-y-2">
            <div class="flex gap-2">
              <div class="relative flex-1">
                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input id="pos-cust-phone" type="text" placeholder="Ketik No. HP / Nama / ID Member..."
                  value="${m.isMember?b(m.phone||m.name||""):""}"
                  class="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all"
                  oninput="window.debouncedLookupPosMember()"
                  onkeydown="if(event.key==='Enter'){event.preventDefault();window.lookupPosMember();}">
              </div>
              <button onclick="window.lookupPosMember()" id="pos-member-lookup-btn" type="button"
                class="px-4 py-2 rounded-xl text-white text-xs font-bold transition-all active:scale-95 flex items-center justify-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
                style="background:var(--color-primary)">
                <i class="fa-solid fa-magnifying-glass"></i>
                <span>Cek</span>
              </button>
            </div>
            <div id="pos-member-result"></div>
          </div>`,E().then(()=>{u("pos-cust-phone")?.value?.trim()&&J()})):e==="tempo"&&(m.isMember=!1,me("tempo"),t.innerHTML=`
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`))},me=e=>{v=e,Ne("pos-pay",e,["cash","qris","transfer","tempo"]),le(e),e==="transfer"&&(!p.banks||!p.banks.length)&&Y().then(t=>{v==="transfer"&&t&&t.length>0&&le("transfer")})},xe=e=>{M=I(e);const t=$(),r=M-t,a=u("pos-change-display"),i=u("pos-change-label"),n=u("pos-change-box"),s=u("pos-process-btn");a&&(a.textContent=f(Math.abs(r))),i&&(i.textContent=r>=0?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"),a&&(a.className=`text-base font-black ${r>=0?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`),n&&(n.className=`mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${r>=0?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}`),s&&v==="cash"&&(s.disabled=r<0,s.classList.toggle("opacity-50",r<0))},fe=e=>{const t=u("pos-paid-input");t&&(t.value=e,xe(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Y=async()=>{if(Array.isArray(p.banks)&&p.banks.length>0)return p.banks;try{const e=await P.collection("freshmart").doc("cms_data").get();if(e.exists){const t=e.data();if(Array.isArray(t?.banks)&&t.banks.length>0)return p.banks=t.banks,p.banks}}catch{}return p.banks||[]},E=async()=>{if(p.customers&&p.customers.length>0)return p.customers;try{const e=await P.collection("freshmart").doc("cms_data").collection("customers").get();return p.customers=e.docs.map(t=>({...t.data(),id:t.id,_docId:t.id})),p.customers}catch{return p.customers||[]}},Ee=(e,t)=>{if(!e||!t||!t.length)return[];const r=e.trim().toLowerCase(),a=r.replace(/\D/g,"");let i=a;i.startsWith("62")?i=i.slice(2):i.startsWith("0")&&(i=i.slice(1));const n=[],s=new Set;return t.forEach(o=>{if(!o)return;const d=String(o.id||o._docId||o.phone||"");if(s.has(d))return;const l=String(o.phone||"").replace(/\D/g,"");let c=l;c.startsWith("62")?c=c.slice(2):c.startsWith("0")&&(c=c.slice(1));const k=String(o.name||"").toLowerCase();let g=!1;i.length>=4&&c&&(c===i||c.endsWith(i)||i.endsWith(c)||l.includes(a))&&(g=!0),!g&&(d.toLowerCase()===r||d===a)&&(g=!0),!g&&r.length>=2&&k.includes(r)&&(g=!0),g&&(s.add(d),n.push(o))}),n},at=async e=>{if(!e)return null;const t=e.trim(),r=t.replace(/\D/g,"");let a=r;a.startsWith("62")?a=a.slice(2):a.startsWith("0")&&(a=a.slice(1));const i=P.collection("freshmart").doc("cms_data").collection("customers"),s=Array.from(new Set([a?"62"+a:null,a?"0"+a:null,a||null,a?"+62"+a:null,r||null,t].filter(Boolean))).map(async l=>{try{const c=await i.doc(l).get();if(c&&c.exists)return{...c.data(),id:c.id,_docId:c.id}}catch{}return null}),d=(await Promise.all(s)).find(Boolean);if(d){p.customers||(p.customers=[]);const l=p.customers.findIndex(c=>String(c.id||c.phone)===String(d.id||d.phone));return l>-1?p.customers[l]=d:p.customers.push(d),d}try{const l=await i.limit(300).get();if(!l.empty){p.customers=l.docs.map(k=>({...k.data(),id:k.id,_docId:k.id}));const c=Ee(e,p.customers);if(c.length>0)return c[0]}}catch{}return null},te=e=>{m.isMember=!0,m.name=e.name||"Member Toko",m.phone=e.phone||"",m.memberId=e.id||e._docId||e.phone,m.points=parseFloat(e.points)||0;const t=u("pos-cust-phone");t&&(t.value=e.phone||e.name||"");const r=m.points,a=typeof window.getMemberTier=="function"?window.getMemberTier(r):{badge:"MEMBER RESMI"},i=u("pos-member-result");i&&(i.innerHTML=`
        <div class="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 rounded-2xl border border-emerald-300 dark:border-emerald-700/60 shadow-xs flex items-center justify-between gap-2.5">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <i class="fa-solid fa-id-card text-base"></i>
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">${b(a.badge||"VIP")}</span>
                <span class="text-[10px] font-black text-amber-600 dark:text-amber-400 flex items-center gap-0.5"><i class="fa-solid fa-star text-[9px]"></i>${r} Poin</span>
              </div>
              <p class="text-xs font-black text-slate-800 dark:text-white truncate mt-0.5">${b(e.name||"Pelanggan Setia")}</p>
              <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${b(e.phone||"")}</p>
            </div>
          </div>
          <button onclick="window.resetPosMember()" type="button" class="shrink-0 px-2.5 py-1.5 rounded-xl text-[10px] font-bold text-slate-600 hover:text-rose-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer" title="Ganti Member">
            <i class="fa-solid fa-rotate-left mr-1"></i>Ganti
          </button>
        </div>`),S(`Member terdeteksi: ${e.name} (${r} Poin)`,"success")},ge=e=>{const r=(p.customers||[]).find(a=>a&&String(a.id||a._docId||a.phone)===String(e));r&&te(r)},he=()=>{m.isMember=!1,m.name="",m.phone="",m.memberId=null,m.points=0;const e=u("pos-cust-phone");e&&(e.value="",e.focus());const t=u("pos-member-result");t&&(t.innerHTML="")};let Se=null;const we=()=>{clearTimeout(Se);const e=u("pos-cust-phone")?.value?.trim()||"";if(!e){if(!m.memberId){const a=u("pos-member-result");a&&(a.innerHTML="")}return}const t=e.replace(/\D/g,"");!(Array.isArray(p.customers)&&p.customers.length>0)&&t.length<10&&e.length<8||(Se=setTimeout(()=>{J()},350))},J=async()=>{const t=u("pos-cust-phone")?.value?.trim()||"";if(!t){S("Masukkan nomor HP atau nama member","warning");return}const r=u("pos-member-result"),a=u("pos-member-lookup-btn");a&&(a.disabled=!0,a.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>'),r&&(r.innerHTML='<div class="p-2.5 text-center text-xs text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-1.5"></i>Memeriksa database member...</div>');try{await E();const i=Ee(t,p.customers||[]);if(i.length===1)te(i[0]);else if(i.length>1)r.innerHTML=`
              <div class="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                <p class="text-[10px] font-bold text-slate-500 mb-1">Ditemukan ${i.length} member (klik untuk memilih):</p>
                ${i.map(n=>`
                  <button onclick="window.selectPosMember('${b(n.id||n._docId||n.phone)}')" type="button"
                    class="w-full text-left p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-all flex items-center justify-between gap-2 cursor-pointer">
                    <div class="min-w-0">
                      <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${b(n.name||"Member")}</p>
                      <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${b(n.phone||"")}</p>
                    </div>
                    <span class="text-[10px] font-black text-amber-500 shrink-0"><i class="fa-solid fa-star text-[9px]"></i> ${parseFloat(n.points)||0} Poin</span>
                  </button>
                `).join("")}
              </div>
            `;else{const n=await at(t);if(n)te(n);else{m.isMember=!1,m.name="",m.memberId=null,m.points=0;const o=t.replace(/\D/g,"").length>=8;r.innerHTML=`
                  <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs space-y-1">
                    <p class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-info"></i> Member Tidak Ditemukan</p>
                    <p class="text-[11px] text-amber-700 dark:text-amber-400">Tidak ada member ditemukan untuk "<b>${b(t)}</b>".</p>
                    ${o?"":`
                      <p class="text-[10px] text-amber-600/90 dark:text-amber-400/80 pt-1 border-t border-amber-200 dark:border-amber-800/60">
                        <i class="fa-solid fa-lightbulb mr-1 text-amber-500"></i><b>Tips Kasir:</b> Masukkan nomor WhatsApp/HP member (contoh: <code>0812...</code>) untuk verifikasi instan.
                      </p>
                    `}
                  </div>`}}}catch(i){console.error("[POS] Error lookupPosMember:",i),r&&(r.innerHTML=`<p class="text-xs text-rose-500 p-2">Gagal memeriksa data: ${b(i.message||"Koneksi error")}</p>`)}finally{a&&(a.disabled=!1,a.innerHTML='<i class="fa-solid fa-magnifying-glass mr-1.5"></i><span>Cek</span>')}},Ke=async()=>{if(x.length===0){S("Keranjang kosong!","warning");return}const e=m.isMember?m.name||"Member Toko":u("pos-cust-name")?.value?.trim()||"Pelanggan Umum",t=m.isMember?m.phone||u("pos-cust-phone")?.value?.trim()||"":u("pos-cust-phone")?.value?.trim()||"";if(m.isNewTempo&&!t){S("No. HP wajib diisi untuk tempo!","warning");return}if(v==="cash"&&(M=I(u("pos-paid-input")?.value||0),M<$())){S(`Uang kurang! Minimal ${f($())}`,"warning");return}m.name=e,m.phone=t;const r=v==="tempo"?I(u("pos-dp-input")?.value||0):0,a=v==="transfer"&&u("pos-bank-sel")?.value||"",i=u("pos-process-btn");i&&(i.disabled=!0,i.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');const n=p.store?.useStock===!0||p.store?.useStock==="true";if(n)for(const s of x){const o=(p.products||[]).find(l=>String(l.id)===String(s.id));if(!o)continue;const d=parseFloat(s.qty)||0;if(s.variantName&&o.variants){const l=(o.variants||[]).find(k=>k.name===s.variantName),c=parseFloat(l&&l.stock!==void 0?l.stock:0);if(c<d){S(`Stok ${s.name} (${s.variantName}) tidak cukup! Sisa: ${c}`,"warning"),i&&(i.disabled=!1,i.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}else{const l=parseFloat(o.stock!==void 0?o.stock:0);if(l<d){S(`Stok ${s.name} tidak cukup! Sisa: ${l}`,"warning"),i&&(i.disabled=!1,i.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}}try{const s=et(),o=typeof window.getCashierSession=="function"?window.getCashierSession():null,d=o?.name||p.store?.name||"Kasir",l=o?.uid||window.__currentAdminUid||"admin",c=new Date().toISOString(),k=re.firestore.FieldValue.serverTimestamp(),C={orderId:s,txId:s,source:"pos",channel:"pos",status:v==="tempo"?"Diproses":"Selesai",timestamp:k,dateString:c,dateMs:Date.now(),cashier:l,cashierName:d,customer:{name:e,phone:t,wa:t,address:"Beli Langsung di Kasir (POS)",deliveryMethod:"takeaway",isMember:!!m.isMember,memberId:m.memberId||null},customerName:e,customerPhone:t,customerType:m.isMember?"Member":"Pelanggan Umum",items:x.map(h=>({id:h.id,name:h.name,price:parseFloat(h.price)||0,basePrice:parseFloat(h.basePrice||h.price)||0,qty:parseFloat(h.qty)||1,discount:parseFloat(h.discount)||0,subtotal:parseFloat(h.subtotal)||0,variantName:h.variantName||"",isVariant:!!h.isVariant,isWholesale:!!h.isWholesale,effectivePrice:parseFloat(h.price)||0})),payment:{method:v,subtotal:ee(),productDiscount:I(N),shippingCost:0,grandTotal:$(),paid:v==="cash"?M:v==="tempo"?r:$(),change:v==="cash"?Te():0,bank:a,paymentStatus:v==="tempo"?"hutang":"lunas",tempoDp:r,tempoBalance:v==="tempo"?$()-r:0,tempoDueDate:Date.now()+30*24*60*60*1e3,tempoPenaltyRate:1,tempoPenaltyStopped:!1},subtotal:ee(),globalDiscount:I(N),total:$(),isTempo:v==="tempo",pointsEarned:0,notes:""};if(m.isMember&&t){const O=(typeof window.calculateCartPoints=="function"?window.calculateCartPoints(x,p.store):{totalPoints:0}).totalPoints||0;if(O>0){C.pointsEarned=O;try{const A=t.replace(/\D/g,""),w=String(m.memberId||A);if(await P.collection("freshmart").doc("cms_data").collection("customers").doc(w).set({points:re.firestore.FieldValue.increment(O),lastOrderAt:c},{merge:!0}),p.customers){const D=p.customers.find(y=>y&&(String(y.id)===w||String(y.phone).replace(/\D/g,"")===A));D&&(D.points=(parseFloat(D.points)||0)+O)}}catch(A){console.warn("[POS] Gagal update poin member:",A)}}}await P.collection("freshmart_orders").doc(s).set(C);try{await P.collection("freshmart").doc("cms_data").collection("pos_transactions").doc(s).set(C)}catch(h){console.warn("[POS] Mirror pos_transactions notice:",h)}if(n){const h=[];for(const O of x){const A=String(O.id),w=(p.products||[]).find(y=>String(y.id)===A);if(!w)continue;const z=parseFloat(O.qty)||0,D={};if(O.variantName&&w.variants){const y=w.variants.findIndex(We=>We.name===O.variantName);y>-1&&(w.variants[y].stock=Math.max(0,(parseFloat(w.variants[y].stock)||0)-z),w.variants[y].stock===0&&(w.variants[y].isActive=!1),w.variants[y].totalSold=(parseFloat(w.variants[y].totalSold)||0)+z,D.variants=w.variants)}else w.stock=Math.max(0,(parseFloat(w.stock)||0)-z),D.stock=w.stock,w.stock===0&&(w.isActive="false",D.isActive="false"),w.totalSold=(parseFloat(w.totalSold)||0)+z,D.totalSold=w.totalSold;try{await P.collection("freshmart").doc("cms_data").collection("products").doc(A).update(D),h.push(A)}catch(y){console.warn("[POS] Gagal update stok produk di Firestore:",A,y)}}if(h.length>0)try{await P.collection("freshmart").doc("cms_data").update({lastUpdate:re.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:h})}catch{}}ue(),Q(!0);const R={...C};x=[],N=0,T(),q(),st(R)}catch(s){console.error("[POS] Error:",s),S("Gagal menyimpan transaksi. Coba lagi.","error"),i&&(i.disabled=!1,i.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi')}},st=e=>{const t=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${f(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,r=JSON.stringify(e).replace(/"/g,"&quot;");document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">${b(e.txId)}</p>
          <p class="text-2xl font-black mb-1" style="color:var(--color-primary)">${f(e.total)}</p>
          ${t}
          ${e.pointsEarned>0?`
          <div class="mt-2.5 p-2 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-star text-amber-500"></i>
            <span>+${e.pointsEarned} Poin Member Didapat!</span>
          </div>`:""}
        </div>
        <div class="px-6 pb-6 flex flex-col gap-2">
          <button onclick="window.printPOSReceipt(${r})" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)"><i class="fa-solid fa-print"></i> Cetak Struk Thermal</button>
          <button onclick="document.getElementById('pos-success-modal')?.remove()" class="w-full py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 transition-all cursor-pointer">Transaksi Baru</button>
        </div>
      </div>
    </div>`)},Fe=e=>{document.getElementById("pos-success-modal")?.remove();const t=p.store?.name||"TOKO PUTRI",r=p.store?.wa||"",a=p.store?.address||"",i=new Date(e.dateMs).toLocaleString("id-ID"),n=(e.items||[]).map(o=>`<tr><td style="padding:2px 0;word-wrap:break-word">${b(o.name)}</td><td style="text-align:right;padding:2px 4px;white-space:nowrap">${o.qty}x ${f(o.price)}</td><td style="text-align:right;padding:2px 0;white-space:nowrap">${f(o.subtotal)}</td></tr>`).join(""),s=window.open("","_blank","width=420,height=720");if(!s){S("Izinkan popup untuk cetak struk","warning");return}s.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Struk POS</title>
    <style>*{box-sizing:border-box}body{font-family:'Courier New',monospace;font-size:12px;max-width:300px;margin:0 auto;padding:12px}
    h2{text-align:center;font-size:14px;font-weight:900;margin:2px 0;text-transform:uppercase}p{margin:1px 0;text-align:center;font-size:11px}.left{text-align:left}
    table{width:100%;border-collapse:collapse}.line{border-top:1px dashed #333;margin:6px 0}.total{font-weight:900;font-size:13px}
    </style></head><body>
    <h2>${t}</h2>${a?`<p>${b(a)}</p>`:""}${r?`<p>WA: ${b(r)}</p>`:""}
    <div class="line"></div>
    <p class="left">No: <b>${b(e.txId)}</b></p><p class="left">Tgl: ${b(i)}</p>
    <p class="left">Kasir: ${b(e.cashierName)}</p><p class="left">Pelanggan: ${b(e.customer?.name||"Umum")}</p>
    ${e.customer?.phone?`<p class="left">HP: ${b(e.customer.phone)}</p>`:""}
    <div class="line"></div><table>${n}</table><div class="line"></div>
    <table>
    <tr><td>Subtotal</td><td style="text-align:right">${f(e.subtotal)}</td></tr>
    ${(e.globalDiscount||0)>0?`<tr><td>Diskon</td><td style="text-align:right">- ${f(e.globalDiscount)}</td></tr>`:""}
    <tr class="total"><td>TOTAL</td><td style="text-align:right">${f(e.total)}</td></tr>
    ${e.payment.method==="cash"?`<tr><td>Bayar</td><td style="text-align:right">${f(e.payment.paid)}</td></tr><tr><td><b>Kembalian</b></td><td style="text-align:right"><b>${f(e.payment.change)}</b></td></tr>`:""}
    ${e.payment.method==="tempo"?`<tr><td>DP</td><td style="text-align:right">${f(e.payment.dp||0)}</td></tr><tr><td>Sisa Piutang</td><td style="text-align:right">${f(e.payment.tempoBalance||0)}</td></tr>`:""}
    <tr><td>Metode</td><td style="text-align:right">${b(e.payment.method.toUpperCase())}</td></tr>
    </table><div class="line"></div>
    <p style="text-align:center;font-size:10px">*** Terima Kasih ***</p>
    <p style="text-align:center;font-size:9px">Barang yang sudah dibeli tidak dapat dikembalikan</p>
    <script>window.onload=()=>{window.print();setTimeout(()=>window.close(),800)}<\/script>
    </body></html>`),s.document.close()},qe=({isStorefront:e})=>{const r=(typeof window.getCashierSession=="function"?window.getCashierSession():null)?.name||(e?"Kasir":"Admin Seller"),a=b(p.store?.name||"Toko Putri");return`
    <div class="flex flex-col h-full w-full overflow-hidden bg-slate-100/70 dark:bg-slate-950">
        ${e?`
        <!-- STOREFRONT POS HEADER (52px) -->
        <header class="h-[52px] shrink-0 text-white flex items-center justify-between px-3 sm:px-4 z-30 shadow-md" style="background:var(--color-primary)">
            <div class="flex items-center gap-2.5 min-w-0">
                <button onclick="window.exitPOSMode()" class="w-8 h-8 rounded-xl bg-black/15 hover:bg-black/25 text-white flex items-center justify-center text-xs transition-all active:scale-90 cursor-pointer" title="Kembali ke Etalase Toko">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <div class="flex items-center gap-2 min-w-0">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm shrink-0 shadow-xs bg-black/20">
                        <i class="fa-solid fa-cash-register"></i>
                    </div>
                    <div class="min-w-0">
                        <h1 class="text-xs font-black uppercase tracking-wider leading-none text-white truncate">${a}</h1>
                        <div class="flex items-center gap-1.5 mt-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                            <span class="text-[10px] text-white/90 font-medium truncate">${b(r)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span id="pos-live-clock" class="hidden sm:inline-block text-[10px] font-mono text-white/90 px-2.5 py-1 bg-black/15 rounded-lg border border-white/20">--:--:--</span>
                <span class="hidden md:inline-flex items-center gap-1.5 text-[10px] font-bold text-white bg-black/20 px-2.5 py-1 rounded-lg">
                    <i class="fa-solid fa-barcode text-xs"></i> USB Scanner Aktif
                </span>
                <button onclick="window.openPOSHistory()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-black/15 hover:bg-black/25 text-white text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer" title="Riwayat Transaksi">
                    <i class="fa-solid fa-clock-rotate-left text-xs"></i>
                    <span class="hidden sm:inline">Riwayat</span>
                </button>
                <button onclick="window.cashierLogout()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer" title="Keluar Mode Kasir">
                    <i class="fa-solid fa-power-off text-xs"></i>
                    <span class="hidden sm:inline">Keluar</span>
                </button>
            </div>
        </header>`:`
        <!-- ADMIN POS ACTION STRIP (kompak & menyatu tanpa double header) -->
        <div class="h-10 shrink-0 bg-slate-100 dark:bg-slate-800/70 px-3 sm:px-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-700/60 text-xs">
            <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200">Terminal Kasir POS</span>
                <span class="hidden sm:inline text-slate-400">•</span>
                <span id="pos-live-clock" class="hidden sm:inline text-[10px] font-mono text-slate-500 dark:text-slate-400">--:--:--</span>
            </div>
            <div class="flex items-center gap-2">
                <span class="hidden md:inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    <i class="fa-solid fa-barcode"></i> Scanner Otomatis
                </span>
                <button onclick="window.openPOSHistory()" class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-[10px] font-bold flex items-center gap-1 hover:bg-slate-50 transition-all cursor-pointer">
                    <i class="fa-solid fa-clock-rotate-left"></i> Riwayat
                </button>
                <button onclick="window.posClearCart()" class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-rose-500 text-[10px] font-bold flex items-center gap-1 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer">
                    <i class="fa-solid fa-trash-can"></i> Reset
                </button>
            </div>
        </div>`}

        <!-- MAIN SPLIT WORKSPACE: Desktop side-by-side, Mobile full catalog -->
        <div class="flex flex-1 overflow-hidden">
            <!-- PANEL KIRI: KATALOG (Mobile 100%, Desktop 63%-65%) -->
            <div class="flex flex-col flex-1 lg:w-[63%] xl:w-[65%] border-r border-slate-200/80 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
                <!-- Search & Category Bar with View Switcher -->
                <div class="p-2.5 sm:p-3 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 space-y-2 shrink-0 shadow-2xs">
                    <div class="flex items-center gap-2">
                        <div class="relative flex-1">
                            <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
                            <input id="pos-search-input" type="text" placeholder="Cari nama barang, barcode scanner USB, atau SKU..." 
                                class="w-full pl-9 pr-9 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white dark:focus:bg-slate-900 transition-all"
                                oninput="window.posSearchFn(this.value)">
                            <button onclick="el('pos-search-input').value=''; window.posSearchFn('');" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs p-1 cursor-pointer" title="Hapus pencarian">
                                <i class="fa-solid fa-circle-xmark"></i>
                            </button>
                        </div>
                        <!-- View Switcher (Grid vs List) -->
                        <div class="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shrink-0">
                            <button id="pos-view-btn-grid" onclick="window.setPOSViewMode('grid')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${_==="grid"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${_==="grid"?"background:var(--color-primary)":""}" title="Tampilan Grid Foto">
                                <i class="fa-solid fa-grip"></i>
                            </button>
                            <button id="pos-view-btn-list" onclick="window.setPOSViewMode('list')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${_==="list"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${_==="list"?"background:var(--color-primary)":""}" title="Tampilan List Baris Kompak">
                                <i class="fa-solid fa-list-ul"></i>
                            </button>
                        </div>
                    </div>
                    <!-- Kategori Chips -->
                    <div id="pos-cat-filter" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
                </div>

                <!-- Product Catalog Container -->
                <div id="pos-catalog-grid" class="${_==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode"}"></div>
            </div>

            <!-- PANEL KANAN: BILLING & KERANJANG (Hanya Desktop >= lg) -->
            <div class="hidden lg:flex flex-col lg:w-[37%] xl:w-[35%] bg-white dark:bg-slate-900 border-l border-slate-200/80 dark:border-slate-800 overflow-hidden shrink-0 shadow-sm">
                <!-- Header Keranjang Desktop -->
                <div class="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
                    <div class="flex items-center gap-2 min-w-0">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background:var(--color-primary)">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <h3 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white truncate whitespace-nowrap">
                            Keranjang Transaksi (<span class="pos-item-count-target">0</span>)
                        </h3>
                    </div>
                    <button onclick="window.posClearCart()" class="text-[10px] font-bold text-rose-500 hover:text-rose-600 px-2 py-1 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer flex items-center gap-1 shrink-0 whitespace-nowrap">
                        <i class="fa-solid fa-trash-can"></i><span>Kosongkan</span>
                    </button>
                </div>

                <!-- Items List Desktop -->
                <div class="pos-cart-items-target flex-1 overflow-y-auto p-3 space-y-2"></div>

                <!-- Summary & Bayar Desktop -->
                <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 shrink-0 space-y-2.5">
                    <div class="flex justify-between text-xs text-slate-500 font-medium">
                        <span>Subtotal Item</span>
                        <span class="pos-subtotal-target font-bold text-slate-800 dark:text-slate-200">Rp 0</span>
                    </div>
                    <div class="flex items-center gap-2 text-xs">
                        <span class="text-slate-500 shrink-0 font-medium">Diskon Global</span>
                        <div class="flex-1 relative">
                            <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold">Rp</span>
                            <input type="number" min="0" placeholder="0" class="pos-global-disc-target w-full border border-slate-200 dark:border-slate-700 rounded-lg pl-7 pr-2.5 py-1 text-right text-xs font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]" oninput="window.posSetGlobalDisc(this.value)">
                        </div>
                    </div>
                    <div class="flex justify-between items-center pt-2 border-t border-slate-200/80 dark:border-slate-800">
                        <div>
                            <p class="text-[9px] uppercase tracking-wider font-bold text-slate-400">Total Akhir</p>
                            <p class="pos-total-target text-xl font-black" style="color:var(--color-primary)">Rp 0</p>
                        </div>
                        <span class="text-[10px] font-bold px-2 py-1 rounded-md bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60">Siap Bayar</span>
                    </div>
                    <button onclick="window.openPayModal()" class="pos-pay-btn-target w-full py-3.5 rounded-2xl text-white font-black text-sm shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-cash-register"></i>
                        <span class="btn-text">PROSES PEMBAYARAN</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- FLOATING CART BAR (Khusus Mobile < lg saat keranjang ada isi) -->
        <div id="pos-mobile-floating-bar" class="lg:hidden fixed bottom-3 left-3 right-3 z-40 transition-all duration-300 transform translate-y-32 opacity-0 pointer-events-none">
            <div class="bg-slate-900/95 dark:bg-slate-950/95 text-white p-3 rounded-2xl shadow-2xl backdrop-blur-md flex items-center justify-between border border-slate-700/80 cursor-pointer active:scale-[0.99] transition-all" onclick="window.openPOSCartDrawer()">
                <div class="flex items-center gap-2.5">
                    <div class="relative w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-md shrink-0" style="background:var(--color-primary)">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="pos-item-count-target absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center border-2 border-slate-900 shadow-xs">0</span>
                    </div>
                    <div>
                        <div class="flex items-center gap-1.5">
                            <span class="text-[11px] font-bold text-slate-300">Total Transaksi</span>
                        </div>
                        <p class="pos-total-target text-sm font-black text-emerald-400">Rp 0</p>
                    </div>
                </div>
                <button onclick="event.stopPropagation(); window.openPOSCartDrawer();" class="px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-white shadow-lg active:scale-95 transition-all flex items-center gap-1.5 shrink-0" style="background:var(--color-primary)">
                    <span>Lihat Keranjang</span>
                    <i class="fa-solid fa-chevron-up text-xs"></i>
                </button>
            </div>
        </div>

        <!-- MOBILE CART DRAWER (Bottom Sheet Slide-up) -->
        <div id="pos-mobile-cart-drawer" class="lg:hidden fixed inset-0 z-50 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(3px)">
            <div id="pos-mobile-cart-sheet" class="absolute bottom-0 left-0 right-0 max-h-[85vh] bg-white dark:bg-slate-900 rounded-t-3xl shadow-2xl flex flex-col transition-transform duration-300 transform translate-y-full overflow-hidden border-t border-slate-200 dark:border-slate-800">
                <!-- Handle -->
                <div class="pt-2 pb-1 flex justify-center shrink-0 cursor-pointer" onclick="window.closePOSCartDrawer()">
                    <div class="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                </div>
                <!-- Header -->
                <div class="px-4 py-2.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
                    <div class="flex items-center gap-2 min-w-0">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white shrink-0" style="background:var(--color-primary)"><i class="fa-solid fa-cart-shopping"></i></div>
                        <h3 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white truncate whitespace-nowrap">Keranjang Transaksi (<span class="pos-item-count-target">0</span>)</h3>
                    </div>
                    <div class="flex items-center gap-1.5 shrink-0">
                        <button onclick="window.posClearCart()" class="text-[10px] font-bold text-rose-500 hover:text-rose-600 px-2 py-1 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer"><i class="fa-solid fa-trash-can"></i><span>Kosongkan</span></button>
                        <button onclick="window.closePOSCartDrawer()" class="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 text-base flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
                    </div>
                </div>

                <!-- Items Container -->
                <div class="pos-cart-items-target flex-1 overflow-y-auto p-3 space-y-2 min-h-[160px]"></div>

                <!-- Footer Summary & Pay -->
                <div class="p-3.5 pb-[calc(1rem+env(safe-area-inset-bottom))] border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 space-y-2 shrink-0">
                    <div class="flex justify-between text-xs text-slate-500 font-medium">
                        <span>Subtotal Item</span>
                        <span class="pos-subtotal-target font-bold text-slate-700 dark:text-slate-200">Rp 0</span>
                    </div>
                    <div class="flex items-center gap-2 text-xs">
                        <span class="text-slate-500 shrink-0 font-medium">Diskon Global Rp</span>
                        <input type="number" min="0" placeholder="0" class="pos-global-disc-target flex-1 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1 text-right text-xs font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]" oninput="window.posSetGlobalDisc(this.value)">
                    </div>
                    <div class="flex justify-between items-center pt-1.5 border-t border-slate-200/80 dark:border-slate-800">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-white">Total Tagihan</span>
                        <span class="pos-total-target text-base font-black" style="color:var(--color-primary)">Rp 0</span>
                    </div>
                    <button onclick="window.closePOSCartDrawer(); window.openPayModal();" class="pos-pay-btn-target w-full py-3.5 rounded-2xl text-white font-black text-xs sm:text-sm shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-cash-register"></i>
                        <span class="btn-text">LANJUT KE PEMBAYARAN</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `},Ve=()=>{typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),U="",K="",x=[],N=0;const e=u("view-pos-cashier");e&&(e.innerHTML=qe({isStorefront:!0}),q(),T(),Le(),Ce(),E(),ze())},Ue=()=>{typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),U="",K="";const e=u("view-admin");e&&e.classList.add("admin-pos-mode"),u("admin-content")&&(F("admin-content",`<div class="h-full w-full flex flex-col overflow-hidden">${qe({isStorefront:!1})}</div>`),q(),T(),Le(),Ce(),E(),ze())},ze=()=>{window.setPOSViewMode=ce,window.posAddToCart=pe,window.posAddToCartQty=Oe,window.addToCartPOSWithVariant=Ie,window.posUpdateQty=Ae,window.posSetQty=De,window.posSetItemDisc=je,window.posRemoveItem=_e,window.posClearCart=He,window.openPayModal=Re,window.closePayModal=ue,window.setPosCustomerType=Be,window.setPosPayMethod=me,window.updatePosChange=xe,window.posSetQuickCash=fe,window.ensureCustomersLoaded=E,window.ensureBanksLoaded=Y,window.lookupPosMember=J,window.debouncedLookupPosMember=we,window.selectPosMember=ge,window.resetPosMember=he,window.processPOSTx=Ke,window.printPOSReceipt=Fe,window.posSetGlobalDisc=e=>{N=I(e),T()},window.posCatFilter=e=>{K=e,q()},window.posSearchFn=e=>{U=e,q()},window.openPOSCartDrawer=be,window.closePOSCartDrawer=Q,window.playCashierBeep=B,window.openPOSHistory=()=>G(()=>Promise.resolve().then(()=>it),void 0).then(e=>e.renderPOSHistory()),window.destroyBarcodeListener=ae};window.setPOSViewMode=ce;window.renderPOSStorefront=Ve;window.renderPOS=Ue;window.destroyBarcodeListener=ae;window.openPOSCartDrawer=be;window.closePOSCartDrawer=Q;window.posSetQuickCash=fe;window.playCashierBeep=B;window.ensureCustomersLoaded=E;window.ensureBanksLoaded=Y;window.lookupPosMember=J;window.debouncedLookupPosMember=we;window.selectPosMember=ge;window.resetPosMember=he;const ie=Object.freeze(Object.defineProperty({__proto__:null,addToCart:pe,addToCartWithVariant:Ie,applyMemberToPos:te,clearCart:He,closePOSCartDrawer:Q,closePayModal:ue,debouncedLookupPosMember:we,destroyBarcodeListener:ae,ensureBanksLoaded:Y,ensureCustomersLoaded:E,lookupPosMember:J,openPOSCartDrawer:be,openPayModal:Re,playCashierBeep:B,posAddToCartQty:Oe,posSetQuickCash:fe,printPOSReceipt:Fe,processPOSTx:Ke,removeFromCart:_e,renderPOS:Ue,renderPOSStorefront:Ve,resetPosMember:he,selectPosMember:ge,setItemDisc:je,setPOSViewMode:ce,setPosCustomerType:Be,setPosPayMethod:me,setQty:De,updatePosChange:xe,updateQty:Ae},Symbol.toStringTag,{value:"Module"})),X=e=>Me(e),rt=e=>new Date(e).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),W=(e=new Date)=>{const t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${a}`};let V=W(),L=[],Z=null;const se=()=>{if(Z){try{Z()}catch{}Z=null}};window.detachPOSHistoryListener=se;const Pe=()=>{const e=u("pos-hist-list");if(e&&F("pos-hist-list",'<div class="flex justify-center py-12"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),se(),!(!!u("view-admin")||!!Qe.currentUser||window.isAdm||window.__localIsAdm||!!window.getCashierSession?.())){e&&F("pos-hist-list",`
                <div class="flex flex-col items-center justify-center py-16 text-slate-400">
                    <i class="fa-solid fa-lock text-3xl mb-2 text-slate-300 dark:text-slate-600"></i>
                    <p class="font-bold text-xs">Akses Riwayat Memerlukan Login</p>
                    <p class="text-[11px] text-slate-400 mt-1">Silakan masuk sebagai Admin atau Kasir untuk melihat riwayat transaksi.</p>
                </div>
            `),F("pos-hist-rekap","");return}try{Z=P.collection("freshmart_orders").where("source","==","pos").onSnapshot(async a=>{let i=a.docs.map(n=>{const s=n.data(),o=s.dateMs||(s.timestamp?.toMillis?s.timestamp.toMillis():s.dateString?new Date(s.dateString).getTime():0);return{...s,txId:s.orderId||s.txId||n.id,dateMs:o,total:s.payment?.grandTotal??s.total??0}});try{const n=await P.collection("freshmart").doc("cms_data").collection("pos_transactions").get();if(!n.empty){const s=new Set(i.map(o=>o.txId));n.docs.forEach(o=>{const d=o.data(),l=d.txId||d.orderId||o.id;s.has(l)||i.push({...d,txId:l,dateMs:d.dateMs||(d.timestamp?.toMillis?d.timestamp.toMillis():Date.now()),total:d.total||d.payment?.grandTotal||0})})}}catch{}L=i.filter(n=>n.dateMs?W(new Date(n.dateMs))===V:!1).sort((n,s)=>(s.dateMs||0)-(n.dateMs||0)),de()},a=>{console.warn("[POS History] onSnapshot freshmart_orders gagal, fallback ke pos_transactions:",a),$e()})}catch(a){console.warn("[POS History] Listener gagal inisialisasi, fallback:",a),$e()}},$e=()=>{P.collection("freshmart").doc("cms_data").collection("pos_transactions").get().then(e=>{L=e.docs.map(r=>{const a=r.data();return{...a,txId:a.txId||a.orderId||r.id,dateMs:a.dateMs||(a.timestamp?.toMillis?a.timestamp.toMillis():Date.now()),total:a.total||a.payment?.grandTotal||0}}).filter(r=>W(new Date(r.dateMs))===V).sort((r,a)=>(a.dateMs||0)-(r.dateMs||0)),de()}).catch(e=>{console.error("[POS History] Gagal memuat data fallback:",e),L=[],de()})},de=()=>{const e=l=>l.status!=="void"&&l.status!=="Dibatalkan",t=L.reduce((l,c)=>l+(e(c)&&c.total||0),0),r=L.filter(e).length,a=L.filter(l=>!e(l)).length,i={};L.filter(e).forEach(l=>{const c=l.payment?.method||"other";i[c]=(i[c]||0)+(l.total||0)});const n={cash:"Tunai",qris:"QRIS",transfer:"Transfer",tempo:"Tempo"},s=Object.entries(i).map(([l,c])=>`<div class="flex justify-between text-xs"><span class="text-slate-500">${n[l]||l}</span><span class="font-bold text-slate-700 dark:text-slate-200">${X(c)}</span></div>`).join(""),o=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Total Omset</p>
            <p class="text-base font-black" style="color:var(--color-primary)">${X(t)}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Transaksi</p>
            <p class="text-base font-black text-slate-800 dark:text-white">${r}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Produk Terjual</p>
            <p class="text-base font-black text-slate-800 dark:text-white">${L.filter(e).reduce((l,c)=>l+(c.items||[]).reduce((k,g)=>k+(parseFloat(g.qty)||0),0),0)}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Void / Batal</p>
            <p class="text-base font-black text-red-500">${a}</p>
        </div>
    </div>
    ${s?`<div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 mb-4 space-y-1.5">${s}</div>`:""}`,d=L.length===0?`<div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600"><i class="fa-solid fa-receipt text-4xl mb-3"></i><p class="font-semibold text-sm">Belum ada transaksi</p><p class="text-xs mt-1">${V}</p></div>`:L.map(l=>{const c=!e(l),k=l.payment?.method||"cash",g={cash:"emerald",qris:"purple",transfer:"blue",tempo:"amber"}[k]||"slate",C=n[k]||k.toUpperCase();return`<div class="bg-white dark:bg-slate-800 border ${c?"border-red-200 dark:border-red-800 opacity-60":"border-slate-200 dark:border-slate-700"} rounded-2xl p-3 space-y-2 ${c?"":"hover:shadow-sm"} transition-all">
                <div class="flex items-start justify-between gap-2">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[10px] font-bold text-slate-500">${b(l.txId)}</span>
                            <span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-${g}-100 dark:bg-${g}-900/30 text-${g}-700 dark:text-${g}-400">${C}</span>
                            ${c?'<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600">VOID / BATAL</span>':""}
                        </div>
                        <p class="text-[10px] text-slate-400 mt-0.5">${rt(l.dateMs)} · ${b(l.customer?.name||l.customerName||"Pelanggan Umum")}</p>
                    </div>
                    <div class="text-right shrink-0">
                        <p class="font-black text-sm ${c?"line-through text-slate-400":""}" style="${c?"":"color:var(--color-primary)"}">${X(l.total)}</p>
                        ${l.payment?.method==="cash"?`<p class="text-[10px] text-slate-400">Kembalian ${X(l.payment.change||0)}</p>`:""}
                    </div>
                </div>
                <div class="text-[10px] text-slate-400 flex flex-wrap gap-1">
                    ${(l.items||[]).map(R=>`<span class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded-md">${b(R.name)} ×${R.qty}</span>`).join("")}
                </div>
                ${c?"":`<div class="flex justify-end gap-2 pt-1">
                    <button onclick="window.printPOSReceiptFromHist(${JSON.stringify(l).replace(/"/g,"&quot;")})" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer"><i class="fa-solid fa-print"></i>Cetak</button>
                    <button onclick="window.voidPOSTx('${b(l.txId)}')" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border border-red-200 dark:border-red-800 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all cursor-pointer"><i class="fa-solid fa-ban"></i>Void</button>
                </div>`}
            </div>`}).join("");F("pos-hist-rekap",o),F("pos-hist-list",d)},Ge=e=>{Ye("Void Transaksi",`Batalkan transaksi ${e}?
Transaksi akan ditandai batal dan tidak dihitung dalam laporan penjualan toko.`,async()=>{try{Je("Memproses Void...");try{await P.collection("freshmart_orders").doc(e).update({status:"Dibatalkan","payment.paymentStatus":"batal"})}catch{}try{await P.collection("freshmart").doc("cms_data").collection("pos_transactions").doc(e).update({status:"void"})}catch{}const t=L.find(a=>a.txId===e);if((p.store?.useStock===!0||p.store?.useStock==="true")&&t&&t.items)for(const a of t.items){const i=String(a.id),n=(p.products||[]).find(d=>String(d.id)===i);if(!n)continue;const s=parseFloat(a.qty)||0,o={};if(a.variantName&&n.variants){const d=n.variants.findIndex(l=>l.name===a.variantName);d>-1&&(n.variants[d].stock=(parseFloat(n.variants[d].stock)||0)+s,n.variants[d].totalSold=Math.max(0,(parseFloat(n.variants[d].totalSold)||0)-s),o.variants=n.variants)}else n.stock=(parseFloat(n.stock)||0)+s,n.totalSold=Math.max(0,(parseFloat(n.totalSold)||0)-s),o.stock=n.stock;try{await P.collection("freshmart").doc("cms_data").collection("products").doc(i).update(o)}catch{}}ke(),S("Transaksi berhasil dibatalkan (void)","success")}catch{ke(),S("Gagal membatalkan transaksi","error")}},"Ya, Batalkan")},ot=()=>{const e=u("admin-content")&&!u("view-pos-cashier")?.classList.contains("active")?"admin-content":u("view-pos-cashier")?"view-pos-cashier":"admin-content";F(e,`
    <div class="max-w-full h-full flex flex-col overflow-y-auto p-4 sm:p-6 pb-24 fade-in-scale">
        <!-- Back + Title -->
        <div class="flex items-center gap-3 mb-5">
            <button onclick="window.__openPOSMain?.()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all text-sm cursor-pointer flex items-center justify-center"><i class="fa-solid fa-arrow-left"></i></button>
            <div>
                <h2 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Riwayat Transaksi Kasir</h2>
                <p class="text-[10px] text-slate-400">Rekap & detail transaksi kasir toko harian</p>
            </div>
        </div>

        <!-- Filter Tanggal -->
        <div class="flex items-center gap-3 mb-4">
            <div class="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 shadow-xs">
                <i class="fa-solid fa-calendar-days text-slate-400 text-xs"></i>
                <input type="date" id="pos-hist-date" value="${V}"
                    class="text-sm font-bold text-slate-800 dark:text-white bg-transparent focus:outline-none"
                    onchange="window.posHistChangDate(this.value)">
            </div>
            <button onclick="window.posHistChangDate('${W()}')" class="px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer">Hari Ini</button>
        </div>

        <!-- Rekap -->
        <div id="pos-hist-rekap"></div>

        <!-- List Transaksi -->
        <div id="pos-hist-list" class="space-y-3"></div>
    </div>`),window.posHistChangDate=t=>{V=t||W();const r=u("pos-hist-date");r&&(r.value=V),Pe()},window.voidPOSTx=Ge,window.printPOSReceiptFromHist=t=>{G(()=>Promise.resolve().then(()=>ie),void 0).then(r=>r.printPOSReceipt(t))},window.__openPOSMain=()=>{se(),u("view-pos-cashier")?.style.display!=="none"&&!u("view-admin")?.classList.contains("active")?G(()=>Promise.resolve().then(()=>ie),void 0).then(t=>t.renderPOSStorefront()):G(()=>Promise.resolve().then(()=>ie),void 0).then(t=>t.renderPOS())},Pe()},it=Object.freeze(Object.defineProperty({__proto__:null,detachPOSHistoryListener:se,renderPOSHistory:ot,voidPOSTx:Ge},Symbol.toStringTag,{value:"Module"}));export{pe as addToCart,Ie as addToCartWithVariant,te as applyMemberToPos,He as clearCart,Q as closePOSCartDrawer,ue as closePayModal,we as debouncedLookupPosMember,ae as destroyBarcodeListener,Y as ensureBanksLoaded,E as ensureCustomersLoaded,J as lookupPosMember,be as openPOSCartDrawer,Re as openPayModal,B as playCashierBeep,Oe as posAddToCartQty,fe as posSetQuickCash,Fe as printPOSReceipt,Ke as processPOSTx,_e as removeFromCart,Ue as renderPOS,Ve as renderPOSStorefront,he as resetPosMember,ge as selectPosMember,je as setItemDisc,ce as setPOSViewMode,Be as setPosCustomerType,me as setPosPayMethod,De as setQty,xe as updatePosChange,Ae as updateQty};
