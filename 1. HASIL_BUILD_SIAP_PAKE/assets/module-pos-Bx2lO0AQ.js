const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pos-variant-sheet-D2tC43LA.js","assets/module-print-DoqR8CYY.js"])))=>i.map(i=>d[i]);
import{d as R,_ as ye}from"./module-member-C5rtf9mR.js";import{a as i,e as c,i as l,t as S,b as ve,f as Se,x as Y}from"./module-print-DoqR8CYY.js";import{f as G}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";let ee=!1;const Pe=()=>ee?Promise.resolve():ye(()=>import("./pos-variant-sheet-D2tC43LA.js"),__vite__mapDeps([0,1])).then(()=>{ee=!0});let f=[],q="",H="",j="grid";try{const e=localStorage.getItem("pos_view_mode");(e==="list"||e==="grid")&&(j=e)}catch{}let p={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},k="cash",$=0,N=0,I="",te=null,Q=null;const se=e=>{j=e;try{localStorage.setItem("pos_view_mode",e)}catch{}const t=c("pos-view-btn-grid"),a=c("pos-view-btn-list");t&&a&&(e==="grid"?(t.style.background="var(--color-primary)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs",a.style.removeProperty("background"),a.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400"):(a.style.background="var(--color-primary)",a.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs",t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")),B()},C=e=>Math.max(0,parseInt(e)||0),x=e=>Se(e),V=()=>f.reduce((e,t)=>e+t.subtotal,0),P=()=>Math.max(0,V()-C(N)),re=()=>$-P(),K=()=>{try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,a=t.createOscillator(),r=t.createGain();a.type="sine",a.frequency.setValueAtTime(1400,t.currentTime),r.gain.setValueAtTime(.08,t.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.08),a.connect(r),r.connect(t.destination),a.start(),a.stop(t.currentTime+.08),setTimeout(()=>{t.close().catch(()=>{})},150)}catch{}},$e=(e,t)=>{if(!e||!e.wholesale||!e.wholesale.length)return null;const a=[...e.wholesale].sort((r,o)=>o.minQty-r.minQty);for(const r of a)if(t>=parseFloat(r.minQty))return parseFloat(r.price);return null},D=e=>{if(!e.isVariant){const t=(i.products||[]).find(r=>r&&String(r.id)===String(e.id)),a=t?$e(t,e.qty):null;a!==null?(e.basePrice=e.basePrice||e.price,e.price=a,e.isWholesale=!0):(e.basePrice&&(e.price=e.basePrice),e.isWholesale=!1)}return e.subtotal=Math.max(0,e.price*e.qty-C(e.discount)),e},Me=()=>{const e=new Date,t=a=>String(a).padStart(2,"0");return`POS-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},oe=()=>{Q&&clearInterval(Q);const e=()=>{const t=c("pos-live-clock");if(!t)return;const a=new Date;t.textContent=a.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB"};e(),Q=setInterval(e,1e3)},Z=()=>{window.__posBarcodeFn&&(document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=null)},ne=()=>{Z(),window.__posBarcodeFn=e=>{if(!e||typeof e.key!="string")return;const t=window.curViewName||"";if(!(t==="view-pos-cashier"||t==="view-admin"&&window.cTab==="pos"))return;const r=document.activeElement?.tagName?.toLowerCase();if(!(r==="input"||r==="textarea"||r==="select"))if(e.key==="Enter"){if(I&&I.length>=3){const o=I.trim().toLowerCase(),d=(i.products||[]).find(s=>s&&s.isActive!=="false"&&s.isActive!==!1&&(s.barcode&&s.barcode.toLowerCase()===o||s.sku&&s.sku.toLowerCase()===o||s.id&&String(s.id).toLowerCase()===o));if(d)ie(d.id),K(),S(`Ditambahkan: ${d.name}`,"success");else{const s=c("pos-search-input");s&&(s.value=I,q=I,B()),S("Barcode tidak ditemukan di katalog","warning")}I=""}}else e.key&&e.key.length===1&&(I=(I||"")+e.key,clearTimeout(te),te=setTimeout(()=>{I=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},ie=e=>{const t=(i.products||[]).find(o=>o&&String(o.id)===String(e));if(!t)return;if(t.variants&&t.variants.length>0){Pe().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(e)});return}const r=f.find(o=>String(o.id)===String(e)&&!o.isVariant);if(r)r.qty+=1,D(r);else{const o=parseFloat(t.price)||0;f.push(D({id:t.id,name:t.name,price:o,basePrice:o,qty:1,discount:0,subtotal:o,isVariant:!1,isWholesale:!1}))}K(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),M()},Te=(e,t)=>{const a=(i.products||[]).find(o=>o&&String(o.id)===String(e));if(!a)return;const r=f.find(o=>String(o.id)===String(e)&&!o.isVariant);if(r)r.qty+=t,D(r);else{const o=parseFloat(a.price)||0,d=D({id:a.id,name:a.name,price:o,basePrice:o,qty:t,discount:0,subtotal:o*t,isVariant:!1,isWholesale:!1});f.push(d)}K(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),M()},Ce=(e,t,a,r,o=1)=>{const d=`${e}__v${r}`,s=f.find(n=>n.cartKey===d);if(s)s.qty+=o,D(s);else{const b=`${(i.products||[]).find(m=>m&&String(m.id)===String(e))?.name||e} — ${t}`;f.push(D({id:e,cartKey:d,name:b,variantName:t,variantIdx:r,price:a,basePrice:a,qty:o,discount:0,subtotal:a*o,isVariant:!0,isWholesale:!1}))}K(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),M()},Ae=(e,t)=>{const a=f.find(r=>(r.cartKey||String(r.id))===String(e));a&&(a.qty=Math.max(1,a.qty+t),D(a),t>0&&K(),M())},Le=(e,t)=>{const a=f.find(r=>(r.cartKey||String(r.id))===String(e));a&&(a.qty=Math.max(1,C(t)),D(a),M())},Ie=(e,t)=>{const a=f.find(r=>(r.cartKey||String(r.id))===String(e));a&&(a.discount=Math.min(C(t),a.price*a.qty),D(a),M())},je=e=>{f=f.filter(t=>(t.cartKey||String(t.id))!==String(e)),M(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},De=()=>{if(f.length===0)return;const e=()=>{f=[],N=0,M(),S("Keranjang kasir dikosongkan.")};typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Hapus semua item dari transaksi saat ini?",e,"Ya, Kosongkan",!0):e()},le=()=>{const e=c("pos-mobile-cart-drawer"),t=c("pos-mobile-cart-sheet");e&&t&&(e.classList.remove("opacity-0","pointer-events-none"),e.classList.add("opacity-100"),t.classList.remove("translate-y-full"),t.classList.add("translate-y-0"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCartDrawer"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},U=(e=!1)=>{const t=c("pos-mobile-cart-drawer"),a=c("pos-mobile-cart-sheet");if(t&&a){const r=()=>{a.classList.add("translate-y-full"),a.classList.remove("translate-y-0"),t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100")};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCartDrawer",!1,r):r()}},Oe=e=>{if(e.img&&typeof e.img=="string")return Y(e.img,"w150-rw");const t=(i.products||[]).find(a=>String(a.id)===String(e.id));return t&&t.img&&typeof t.img=="string"?Y(t.img,"w150-rw"):""},B=()=>{const e=(i.products||[]).filter(s=>{if(!s||s.isActive==="false"||s.isActive===!1||H&&s.category!==H)return!1;if(q){const n=q.toLowerCase();return(s.name||"").toLowerCase().includes(n)||(s.barcode||"").toLowerCase().includes(n)||(s.sku||"").toLowerCase().includes(n)}return!0}),a=["Semua",...new Set((i.products||[]).filter(s=>s&&s.isActive!=="false"&&s.category).map(s=>s.category))].map(s=>{const n=s==="Semua",b=n?!H:H===s;return`<button onclick="window.posCatFilter('${l(n?"":s)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs ${b?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}" style="${b?"background:var(--color-primary)":""}">${l(s)}</button>`}).join(""),r=e.length===0?`<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
             <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
               <i class="fa-solid fa-box-open text-2xl"></i>
             </div>
             <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
             <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
           </div>`:e.map(s=>{const n=!!(s.img&&typeof s.img=="string"&&s.img.trim()),b=n?Y(s.img,"w300-rw"):"",m=s.variants&&s.variants.length>0,u=s.wholesale&&s.wholesale.length>0,y=f.filter(F=>String(F.id)===String(s.id)).reduce((F,w)=>F+w.qty,0),O=l(String(s.id));return j==="list"?`
                <div class="pos-list-item${y>0?" in-cart":""}" onclick="window.posAddToCart('${O}')">
                    <div class="pos-list-thumb">
                        ${n?`<img width="52" height="52" loading="lazy" decoding="async" src="${l(b)}" alt="${l(s.name)}" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                               <div class="pos-img-placeholder" style="display:none;width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>`:'<div class="pos-img-placeholder" style="width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>'}
                        ${y>0?`<div class="pos-qty-badge" style="top:2px;right:2px;min-width:18px;height:18px;font-size:9px;border-width:1.5px">${y}</div>`:""}
                    </div>
                    <div style="flex:1;min-width:0">
                        <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;margin-bottom:3px">
                            ${s.category?`<span style="font-size:9px;text-transform:uppercase;letter-spacing:0.06em;font-weight:700;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px">${l(s.category)}</span>`:""}
                            ${m?'<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>':""}
                            ${u?'<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>':""}
                        </div>
                        <p style="font-size:12px;font-weight:700;color:#1e293b;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${l(s.name)}">${l(s.name)}</p>
                        <p style="font-size:12px;font-weight:900;color:var(--color-primary);margin-top:2px">${x(parseFloat(s.price)||0)}</p>
                    </div>
                    <button onclick="event.stopPropagation();window.posAddToCart('${O}')" class="pos-add-btn" title="Tambah ke keranjang">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>`:`
            <div class="pos-product-card${y>0?" in-cart":""}" onclick="window.posAddToCart('${O}')">
                <!-- Kotak Gambar Rasio 1:1 Anti-Collapse (aspect-ratio 1:1 + min-height 120px) -->
                <div class="pos-img-box">
                    <div class="pos-img-badges">
                        ${m?'<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>':""}
                        ${u?'<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>':""}
                    </div>
                    ${y>0?`<div class="pos-qty-badge">${y}</div>`:""}
                    ${n?`<img width="300" height="300" loading="lazy" decoding="async" src="${l(b)}" alt="${l(s.name)}"
                             onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                           <div class="pos-img-placeholder" style="display:none">
                             <i class="fa-solid fa-box-open"></i>
                             <span>${l(s.category||"Toko")}</span>
                           </div>`:`<div class="pos-img-placeholder">
                             <i class="fa-solid fa-box-open"></i>
                             <span>${l(s.category||"Produk")}</span>
                           </div>`}
                </div>
                <!-- Info Produk -->
                <div class="pos-card-info">
                    ${s.category?`<p class="pos-card-cat">${l(s.category)}</p>`:""}
                    <p class="pos-card-name" title="${l(s.name)}">${l(s.name)}</p>
                    <div class="pos-card-footer">
                        <span class="pos-card-price">${x(parseFloat(s.price)||0)}</span>
                        <button onclick="event.stopPropagation();window.posAddToCart('${O}')" class="pos-add-btn" title="Tambah ke keranjang">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>`}).join(""),o=c("pos-cat-filter"),d=c("pos-catalog-grid");o&&(o.innerHTML=a),d&&(d.className=j==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode",d.innerHTML=r)},M=()=>{const e=f.reduce((n,b)=>n+b.qty,0),t=V(),a=P(),r=x(a),o=x(t),d=f.length===0?`<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`:f.map(n=>{const b=l(String(n.cartKey||n.id)),m=Oe(n),u=n.isVariant&&n.variantName?l(n.name.replace(` — ${n.variantName}`,"")):l(n.name);return`
            <div class="group flex items-center gap-2.5 p-2 sm:p-2.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[var(--color-primary)] transition-all">
                <!-- 40px Thumbnail -->
                <div class="w-10 h-10 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                    ${m?`<img width="40" height="40" loading="lazy" src="${l(m)}" alt="${l(n.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                           <div class="hidden w-full h-full items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>`:'<div class="w-full h-full flex items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>'}
                </div>
                <!-- Details -->
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug" title="${l(n.name)}">${u}</p>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        ${n.isWholesale?'<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary)">GROSIR</span>':""}
                        ${n.isVariant?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary);opacity:0.95"><i class="fa-solid fa-layer-group text-[7px]"></i>${l(n.variantName||"VARIAN")}</span>`:""}
                        <span class="text-[10px] text-slate-500 font-medium">
                            ${n.isWholesale&&n.basePrice?`<span class="line-through text-slate-400">${x(n.basePrice)}</span> <span class="font-bold" style="color:var(--color-primary)">${x(n.price)}</span>`:x(n.price)}
                        </span>
                    </div>
                    <div class="flex items-center gap-1 mt-1">
                        <span class="text-[9px] text-slate-400 font-bold uppercase">Diskon:</span>
                        <input type="number" min="0" placeholder="0" value="${n.discount||""}" onchange="window.posSetItemDisc('${b}',this.value)"
                            class="w-16 text-[10px] font-bold border border-slate-200 dark:border-slate-600 rounded-lg px-1.5 py-0.5 bg-slate-50 dark:bg-slate-700 text-right focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                </div>
                <!-- Stepper & Subtotal -->
                <div class="flex flex-col items-end gap-1 shrink-0">
                    <div class="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-700/80 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600">
                        <button onclick="window.posUpdateQty('${b}',-1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90">−</button>
                        <input type="number" min="1" value="${n.qty}" onchange="window.posSetQty('${b}',this.value)"
                            class="w-6 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none">
                        <button onclick="window.posUpdateQty('${b}',1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90">+</button>
                    </div>
                    <p class="text-xs font-black" style="color:var(--color-primary)">${x(n.subtotal)}</p>
                    <button onclick="window.posRemoveItem('${b}')" class="text-slate-400 hover:text-rose-500 text-[11px] p-0.5 transition-colors" title="Hapus item">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>`}).join("");document.querySelectorAll(".pos-cart-items-target").forEach(n=>n.innerHTML=d),document.querySelectorAll(".pos-subtotal-target").forEach(n=>n.textContent=o),document.querySelectorAll(".pos-total-target").forEach(n=>n.textContent=r),document.querySelectorAll(".pos-item-count-target").forEach(n=>n.textContent=String(e)),document.querySelectorAll(".pos-global-disc-target").forEach(n=>{document.activeElement!==n&&(n.value=N||"")}),document.querySelectorAll(".pos-pay-btn-target").forEach(n=>{n.disabled=f.length===0;const b=n.querySelector(".btn-text");b&&(b.textContent=f.length>0?`BAYAR — ${r}`:"PROSES PEMBAYARAN")});const s=c("pos-mobile-floating-bar");s&&(f.length>0?(s.classList.remove("translate-y-32","opacity-0","pointer-events-none"),s.classList.add("translate-y-0","opacity-100")):(s.classList.add("translate-y-32","opacity-0","pointer-events-none"),s.classList.remove("translate-y-0","opacity-100"),U(!0)))},Ne=()=>{if(f.length===0){S("Keranjang masih kosong!","warning");return}typeof window.pushModalHistory=="function"&&window.pushModalHistory("posPayment"),p={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},k="cash",$=P(),E(),W(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-pay-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md max-h-[94vh] flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-800">
        <!-- Header -->
        <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <div>
            <h2 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-cash-register" style="color:var(--color-primary)"></i>
              <span>Proses Pembayaran Kasir</span>
            </h2>
            <p class="text-xs text-slate-500 mt-0.5">Total Tagihan: <span class="font-black text-sm" style="color:var(--color-primary)">${x(P())}</span></p>
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
    </div>`),J("cash")},de=(e=!1)=>{const t=c("pos-pay-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posPayment",!1,()=>t.remove()):t.remove())},ce=(e,t,a)=>{a.forEach(r=>{const o=c(`${e}-${r}`);o&&(r===t?(o.style.background="var(--color-primary)",o.style.color="white",o.style.borderColor="var(--color-primary)",o.classList.add("shadow-xs")):(o.style.removeProperty("background"),o.style.removeProperty("color"),o.style.removeProperty("border-color"),o.classList.remove("shadow-xs")))})},J=e=>{const t=c("pos-pay-detail");if(!t)return;const a=P(),r=`
      <div class="flex justify-between items-center py-2 px-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs">
        <span class="text-slate-500 font-medium">Total yang Harus Dibayar</span>
        <span class="font-black text-sm" style="color:var(--color-primary)">${x(a)}</span>
      </div>`;if(e==="cash"){const d=[{label:"Uang Pas",val:a,isPas:!0},{label:"10.000",val:1e4},{label:"20.000",val:2e4},{label:"50.000",val:5e4},{label:"100.000",val:1e5},{label:"200.000",val:2e5},{label:"500.000",val:5e5}].map(s=>`
            <button onclick="window.posSetQuickCash(${s.val})" type="button"
                class="px-2.5 py-1.5 rounded-xl text-[11px] font-black border transition-all active:scale-95 ${s.isPas?"text-white border-transparent shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]"}"
                style="${s.isPas?"background:var(--color-primary)":""}">
                ${s.isPas?"💵 Uang Pas":`Rp ${s.label}`}
            </button>
        `).join("");t.innerHTML=`
            ${r}
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-wider text-slate-400">Nominal Uang Diterima (Rp)</label>
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">Rp</span>
                    <input id="pos-paid-input" type="number" min="0" placeholder="${a}" value="${$||""}"
                        class="w-full border-2 rounded-2xl pl-10 pr-4 py-2.5 text-base sm:text-lg font-black bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none text-right transition-all"
                        style="border-color:var(--color-primary)" oninput="window.updatePosChange(this.value)">
                </div>

                <!-- Quick Cash Buttons Grid -->
                <div class="pt-1">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Pilihan Uang Cepat (1-Klik)</p>
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                        ${d}
                    </div>
                </div>

                <!-- Kembalian Box -->
                <div id="pos-change-box" class="mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${$>=a?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}">
                    <div>
                        <p class="text-[9px] font-black uppercase tracking-wider text-slate-400">Status Kembalian</p>
                        <p id="pos-change-label" class="text-xs font-bold ${$>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-700 dark:text-rose-400"}">
                            ${$>=a?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"}
                        </p>
                    </div>
                    <span id="pos-change-display" class="text-base font-black ${$>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">
                        ${x(Math.abs(re()))}
                    </span>
                </div>
            </div>
        `}else if(e==="qris"){const o=i.payment?.qrisUrl||"";t.innerHTML=`
          ${r}
          ${o?`<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${l(o)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>`:'<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>'}`}else if(e==="transfer"){const d=(Array.isArray(i.banks)?i.banks:[]).filter(n=>n&&(n.bankName||n.name||n.bank));let s='<option value="">Rekening bank belum diatur di CMS Admin</option>';d.length>0&&(s=d.map(n=>{const b=n.bankName||n.name||n.bank||"Bank",m=n.bankAccount||n.number||n.noRekening||n.account||"",u=n.bankOwner||n.holder||n.atasNama||n.owner||"",v=`${b}${m?" — "+m:""}${u?" a/n "+u:""}`;return`<option value="${l(v)}">${l(v)}</option>`}).join("")),t.innerHTML=`
          ${r}
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rekening Tujuan Toko</label>
            <div class="relative">
              <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${s}
              </select>
            </div>
            ${d.length>0?`
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
          ${r}
          <div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-700/80 mb-2.5">
            <p class="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half"></i> Pembayaran Tempo / Piutang</p>
            <p class="text-[10px] text-amber-700 dark:text-amber-400 mt-1">Transaksi otomatis dicatat sebagai piutang di database toko.</p>
          </div>
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Uang Muka / DP (Rp) — opsional</label>
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="0" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`)},Re=e=>{p.isMember=e==="member",p.isNewTempo=e==="tempo",ce("pos-ctype",e,["umum","member","tempo"]);const t=c("pos-customer-fields");t&&(e==="umum"?(p.name="",p.phone="",p.memberId=null,p.points=0,t.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">'):e==="member"?(t.innerHTML=`
          <div class="space-y-2">
            <div class="flex gap-2">
              <div class="relative flex-1">
                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input id="pos-cust-phone" type="text" placeholder="Ketik No. HP / Nama / ID Member..."
                  value="${p.isMember?l(p.phone||p.name||""):""}"
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
          </div>`,E().then(()=>{c("pos-cust-phone")?.value?.trim()&&z()})):e==="tempo"&&(p.isMember=!1,pe("tempo"),t.innerHTML=`
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`))},pe=e=>{k=e,ce("pos-pay",e,["cash","qris","transfer","tempo"]),J(e),e==="transfer"&&(!i.banks||!i.banks.length)&&W().then(t=>{k==="transfer"&&t&&t.length>0&&J("transfer")})},be=e=>{$=C(e);const t=P(),a=$-t,r=c("pos-change-display"),o=c("pos-change-label"),d=c("pos-change-box"),s=c("pos-process-btn");r&&(r.textContent=x(Math.abs(a))),o&&(o.textContent=a>=0?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"),r&&(r.className=`text-base font-black ${a>=0?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`),d&&(d.className=`mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${a>=0?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}`),s&&k==="cash"&&(s.disabled=a<0,s.classList.toggle("opacity-50",a<0))},ue=e=>{const t=c("pos-paid-input");t&&(t.value=e,be(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},W=async()=>{if(Array.isArray(i.banks)&&i.banks.length>0)return i.banks;try{const e=await R.collection("freshmart").doc("cms_data").get();if(e.exists){const t=e.data();if(Array.isArray(t?.banks)&&t.banks.length>0)return i.banks=t.banks,i.banks}}catch{}return i.banks||[]},E=async()=>{if(i.customers&&i.customers.length>0)return i.customers;try{const e=await R.collection("freshmart").doc("cms_data").collection("customers").get();return i.customers=e.docs.map(t=>({...t.data(),id:t.id,_docId:t.id})),i.customers}catch{return i.customers||[]}},me=(e,t)=>{if(!e||!t||!t.length)return[];const a=e.trim().toLowerCase(),r=a.replace(/\D/g,"");let o=r;o.startsWith("62")?o=o.slice(2):o.startsWith("0")&&(o=o.slice(1));const d=[],s=new Set;return t.forEach(n=>{if(!n)return;const b=String(n.id||n._docId||n.phone||"");if(s.has(b))return;const m=String(n.phone||"").replace(/\D/g,"");let u=m;u.startsWith("62")?u=u.slice(2):u.startsWith("0")&&(u=u.slice(1));const v=String(n.name||"").toLowerCase();let y=!1;o.length>=4&&u&&(u===o||u.endsWith(o)||o.endsWith(u)||m.includes(r))&&(y=!0),!y&&(b.toLowerCase()===a||b===r)&&(y=!0),!y&&a.length>=2&&v.includes(a)&&(y=!0),y&&(s.add(b),d.push(n))}),d},He=async e=>{if(!e)return null;const t=e.trim(),a=t.replace(/\D/g,"");let r=a;r.startsWith("62")?r=r.slice(2):r.startsWith("0")&&(r=r.slice(1));const o=R.collection("freshmart").doc("cms_data").collection("customers"),s=Array.from(new Set([r?"62"+r:null,r?"0"+r:null,r||null,r?"+62"+r:null,a||null,t].filter(Boolean))).map(async m=>{try{const u=await o.doc(m).get();if(u&&u.exists)return{...u.data(),id:u.id,_docId:u.id}}catch{}return null}),b=(await Promise.all(s)).find(Boolean);if(b){i.customers||(i.customers=[]);const m=i.customers.findIndex(u=>String(u.id||u.phone)===String(b.id||b.phone));return m>-1?i.customers[m]=b:i.customers.push(b),b}try{const m=await o.limit(300).get();if(!m.empty){i.customers=m.docs.map(v=>({...v.data(),id:v.id,_docId:v.id}));const u=me(e,i.customers);if(u.length>0)return u[0]}}catch{}return null},X=e=>{p.isMember=!0,p.name=e.name||"Member Toko",p.phone=e.phone||"",p.memberId=e.id||e._docId||e.phone,p.points=parseFloat(e.points)||0;const t=c("pos-cust-phone");t&&(t.value=e.phone||e.name||"");const a=p.points,r=typeof window.getMemberTier=="function"?window.getMemberTier(a):{badge:"MEMBER RESMI"},o=c("pos-member-result");o&&(o.innerHTML=`
        <div class="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 rounded-2xl border border-emerald-300 dark:border-emerald-700/60 shadow-xs flex items-center justify-between gap-2.5">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <i class="fa-solid fa-id-card text-base"></i>
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">${l(r.badge||"VIP")}</span>
                <span class="text-[10px] font-black text-amber-600 dark:text-amber-400 flex items-center gap-0.5"><i class="fa-solid fa-star text-[9px]"></i>${a} Poin</span>
              </div>
              <p class="text-xs font-black text-slate-800 dark:text-white truncate mt-0.5">${l(e.name||"Pelanggan Setia")}</p>
              <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${l(e.phone||"")}</p>
            </div>
          </div>
          <button onclick="window.resetPosMember()" type="button" class="shrink-0 px-2.5 py-1.5 rounded-xl text-[10px] font-bold text-slate-600 hover:text-rose-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer" title="Ganti Member">
            <i class="fa-solid fa-rotate-left mr-1"></i>Ganti
          </button>
        </div>`),S(`Member terdeteksi: ${e.name} (${a} Poin)`,"success")},fe=e=>{const a=(i.customers||[]).find(r=>r&&String(r.id||r._docId||r.phone)===String(e));a&&X(a)},xe=()=>{p.isMember=!1,p.name="",p.phone="",p.memberId=null,p.points=0;const e=c("pos-cust-phone");e&&(e.value="",e.focus());const t=c("pos-member-result");t&&(t.innerHTML="")};let ae=null;const ge=()=>{clearTimeout(ae);const e=c("pos-cust-phone")?.value?.trim()||"";if(!e){if(!p.memberId){const r=c("pos-member-result");r&&(r.innerHTML="")}return}const t=e.replace(/\D/g,"");!(Array.isArray(i.customers)&&i.customers.length>0)&&t.length<10&&e.length<8||(ae=setTimeout(()=>{z()},350))},z=async()=>{const t=c("pos-cust-phone")?.value?.trim()||"";if(!t){S("Masukkan nomor HP atau nama member","warning");return}const a=c("pos-member-result"),r=c("pos-member-lookup-btn");r&&(r.disabled=!0,r.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>'),a&&(a.innerHTML='<div class="p-2.5 text-center text-xs text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-1.5"></i>Memeriksa database member...</div>');try{await E();const o=me(t,i.customers||[]);if(o.length===1)X(o[0]);else if(o.length>1)a.innerHTML=`
              <div class="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                <p class="text-[10px] font-bold text-slate-500 mb-1">Ditemukan ${o.length} member (klik untuk memilih):</p>
                ${o.map(d=>`
                  <button onclick="window.selectPosMember('${l(d.id||d._docId||d.phone)}')" type="button"
                    class="w-full text-left p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-all flex items-center justify-between gap-2 cursor-pointer">
                    <div class="min-w-0">
                      <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${l(d.name||"Member")}</p>
                      <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${l(d.phone||"")}</p>
                    </div>
                    <span class="text-[10px] font-black text-amber-500 shrink-0"><i class="fa-solid fa-star text-[9px]"></i> ${parseFloat(d.points)||0} Poin</span>
                  </button>
                `).join("")}
              </div>
            `;else{const d=await He(t);if(d)X(d);else{p.isMember=!1,p.name="",p.memberId=null,p.points=0;const n=t.replace(/\D/g,"").length>=8;a.innerHTML=`
                  <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs space-y-1">
                    <p class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-info"></i> Member Tidak Ditemukan</p>
                    <p class="text-[11px] text-amber-700 dark:text-amber-400">Tidak ada member ditemukan untuk "<b>${l(t)}</b>".</p>
                    ${n?"":`
                      <p class="text-[10px] text-amber-600/90 dark:text-amber-400/80 pt-1 border-t border-amber-200 dark:border-amber-800/60">
                        <i class="fa-solid fa-lightbulb mr-1 text-amber-500"></i><b>Tips Kasir:</b> Masukkan nomor WhatsApp/HP member (contoh: <code>0812...</code>) untuk verifikasi instan.
                      </p>
                    `}
                  </div>`}}}catch(o){console.error("[POS] Error lookupPosMember:",o),a&&(a.innerHTML=`<p class="text-xs text-rose-500 p-2">Gagal memeriksa data: ${l(o.message||"Koneksi error")}</p>`)}finally{r&&(r.disabled=!1,r.innerHTML='<i class="fa-solid fa-magnifying-glass mr-1.5"></i><span>Cek</span>')}},Be=async()=>{if(f.length===0){S("Keranjang kosong!","warning");return}const e=p.isMember?p.name||"Member Toko":c("pos-cust-name")?.value?.trim()||"Pelanggan Umum",t=p.isMember?p.phone||c("pos-cust-phone")?.value?.trim()||"":c("pos-cust-phone")?.value?.trim()||"";if(p.isNewTempo&&!t){S("No. HP wajib diisi untuk tempo!","warning");return}if(k==="cash"&&($=C(c("pos-paid-input")?.value||0),$<P())){S(`Uang kurang! Minimal ${x(P())}`,"warning");return}p.name=e,p.phone=t;const a=k==="tempo"?C(c("pos-dp-input")?.value||0):0,r=k==="transfer"&&c("pos-bank-sel")?.value||"",o=c("pos-process-btn");o&&(o.disabled=!0,o.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');const d=i.store?.useStock===!0||i.store?.useStock==="true";if(d)for(const s of f){const n=(i.products||[]).find(m=>String(m.id)===String(s.id));if(!n)continue;const b=parseFloat(s.qty)||0;if(s.variantName&&n.variants){const m=(n.variants||[]).find(v=>v.name===s.variantName),u=parseFloat(m&&m.stock!==void 0?m.stock:0);if(u<b){S(`Stok ${s.name} (${s.variantName}) tidak cukup! Sisa: ${u}`,"warning"),o&&(o.disabled=!1,o.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}else{const m=parseFloat(n.stock!==void 0?n.stock:0);if(m<b){S(`Stok ${s.name} tidak cukup! Sisa: ${m}`,"warning"),o&&(o.disabled=!1,o.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}}try{const s=Me(),n=typeof window.getCashierSession=="function"?window.getCashierSession():null,b=n?.name||i.store?.name||"Kasir",m=n?.uid||window.__currentAdminUid||"admin",u=new Date().toISOString(),v=G.firestore.FieldValue.serverTimestamp(),O={orderId:s,txId:s,source:"pos",channel:"pos",status:k==="tempo"?"Diproses":"Selesai",timestamp:v,dateString:u,dateMs:Date.now(),cashier:m,cashierName:b,customer:{name:e,phone:t,wa:t,address:"Beli Langsung di Kasir (POS)",deliveryMethod:"takeaway",isMember:!!p.isMember,memberId:p.memberId||null},customerName:e,customerPhone:t,customerType:p.isMember?"Member":"Pelanggan Umum",items:f.map(w=>({id:w.id,name:w.name,price:parseFloat(w.price)||0,basePrice:parseFloat(w.basePrice||w.price)||0,qty:parseFloat(w.qty)||1,discount:parseFloat(w.discount)||0,subtotal:parseFloat(w.subtotal)||0,variantName:w.variantName||"",isVariant:!!w.isVariant,isWholesale:!!w.isWholesale,effectivePrice:parseFloat(w.price)||0})),payment:{method:k,subtotal:V(),productDiscount:C(N),shippingCost:0,grandTotal:P(),paid:k==="cash"?$:k==="tempo"?a:P(),change:k==="cash"?re():0,bank:r,paymentStatus:k==="tempo"?"hutang":"lunas",tempoDp:a,tempoBalance:k==="tempo"?P()-a:0,tempoDueDate:Date.now()+30*24*60*60*1e3,tempoPenaltyRate:1,tempoPenaltyStopped:!1},subtotal:V(),globalDiscount:C(N),total:P(),isTempo:k==="tempo",pointsEarned:0,notes:""};if(p.isMember&&t){const T=(typeof window.calculateCartPoints=="function"?window.calculateCartPoints(f,i.store):{totalPoints:0}).totalPoints||0;if(T>0){O.pointsEarned=T;try{const A=t.replace(/\D/g,""),g=String(p.memberId||A);if(await R.collection("freshmart").doc("cms_data").collection("customers").doc(g).set({points:G.firestore.FieldValue.increment(T),lastOrderAt:u},{merge:!0}),i.customers){const L=i.customers.find(h=>h&&(String(h.id)===g||String(h.phone).replace(/\D/g,"")===A));L&&(L.points=(parseFloat(L.points)||0)+T)}}catch(A){console.warn("[POS] Gagal update poin member:",A)}}}if(await R.collection("freshmart_orders").doc(s).set(O),d){const w=[];for(const T of f){const A=String(T.id),g=(i.products||[]).find(h=>String(h.id)===A);if(!g)continue;const _=parseFloat(T.qty)||0,L={};if(T.variantName&&g.variants){const h=g.variants.findIndex(ke=>ke.name===T.variantName);h>-1&&(g.variants[h].stock=Math.max(0,(parseFloat(g.variants[h].stock)||0)-_),g.variants[h].stock===0&&(g.variants[h].isActive=!1),g.variants[h].totalSold=(parseFloat(g.variants[h].totalSold)||0)+_,L.variants=g.variants)}else g.stock=Math.max(0,(parseFloat(g.stock)||0)-_),L.stock=g.stock,g.stock===0&&(g.isActive="false",L.isActive="false"),g.totalSold=(parseFloat(g.totalSold)||0)+_,L.totalSold=g.totalSold;try{await R.collection("freshmart").doc("cms_data").collection("products").doc(A).update(L),w.push(A)}catch(h){console.warn("[POS] Gagal update stok produk di Firestore:",A,h)}}if(w.length>0)try{await R.collection("freshmart").doc("cms_data").update({lastUpdate:G.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:w})}catch{}}de(),U(!0);const F={...O};f=[],N=0,M(),B(),Ke(F)}catch(s){console.error("[POS] Error:",s),S("Gagal menyimpan transaksi. Coba lagi.","error"),o&&(o.disabled=!1,o.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi')}},Ke=e=>{const t=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${x(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,a=JSON.stringify(e).replace(/"/g,"&quot;"),r=!!document.getElementById("pos-admin-container")||typeof window.cTab=="function"&&window.cTab()==="pos";document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">#${l(e.txId)}</p>
          <p class="text-2xl font-black mb-1" style="color:var(--color-primary)">${x(e.total)}</p>
          ${t}
          <div class="mt-2.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-[11px] font-bold text-slate-600 dark:text-slate-300 flex items-center justify-center gap-1.5 border border-slate-200/60 dark:border-slate-700/60">
            <i class="fa-solid fa-check-double text-emerald-500"></i>
            <span>Tercatat Resmi di Menu Pesanan CMS</span>
          </div>
          ${e.pointsEarned>0?`
          <div class="mt-2 p-2 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-star text-amber-500"></i>
            <span>+${e.pointsEarned} Poin Member Didapat!</span>
          </div>`:""}
        </div>
        <div class="px-6 pb-6 flex flex-col gap-2">
          <button onclick="window.printPOSReceipt(${a})" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)"><i class="fa-solid fa-print"></i> Cetak Struk Thermal</button>
          <button onclick="document.getElementById('pos-success-modal')?.remove()" class="w-full py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer">Transaksi Baru</button>
          ${r?`
          <button onclick="document.getElementById('pos-success-modal')?.remove(); if(typeof window.openAdminTab==='function') window.openAdminTab('orders');" class="w-full py-2.5 rounded-xl text-slate-500 dark:text-slate-400 text-xs font-bold hover:text-[var(--color-primary)] transition-all flex items-center justify-center gap-1.5 cursor-pointer">
            <i class="fa-solid fa-receipt"></i> Buka Menu Pesanan Toko
          </button>`:""}
        </div>
      </div>
    </div>`)},Ee=e=>{document.getElementById("pos-success-modal")?.remove();const t=i.store?.name||"TOKO PUTRI",a=i.store?.wa||"",r=i.store?.address||"",o=new Date(e.dateMs).toLocaleString("id-ID"),d=(e.items||[]).map(n=>`<tr><td style="padding:2px 0;word-wrap:break-word">${l(n.name)}</td><td style="text-align:right;padding:2px 4px;white-space:nowrap">${n.qty}x ${x(n.price)}</td><td style="text-align:right;padding:2px 0;white-space:nowrap">${x(n.subtotal)}</td></tr>`).join(""),s=window.open("","_blank","width=420,height=720");if(!s){S("Izinkan popup untuk cetak struk","warning");return}s.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Struk POS</title>
    <style>*{box-sizing:border-box}body{font-family:'Courier New',monospace;font-size:12px;max-width:300px;margin:0 auto;padding:12px}
    h2{text-align:center;font-size:14px;font-weight:900;margin:2px 0;text-transform:uppercase}p{margin:1px 0;text-align:center;font-size:11px}.left{text-align:left}
    table{width:100%;border-collapse:collapse}.line{border-top:1px dashed #333;margin:6px 0}.total{font-weight:900;font-size:13px}
    </style></head><body>
    <h2>${t}</h2>${r?`<p>${l(r)}</p>`:""}${a?`<p>WA: ${l(a)}</p>`:""}
    <div class="line"></div>
    <p class="left">No: <b>${l(e.txId)}</b></p><p class="left">Tgl: ${l(o)}</p>
    <p class="left">Kasir: ${l(e.cashierName)}</p><p class="left">Pelanggan: ${l(e.customer?.name||"Umum")}</p>
    ${e.customer?.phone?`<p class="left">HP: ${l(e.customer.phone)}</p>`:""}
    <div class="line"></div><table>${d}</table><div class="line"></div>
    <table>
    <tr><td>Subtotal</td><td style="text-align:right">${x(e.subtotal)}</td></tr>
    ${(e.globalDiscount||0)>0?`<tr><td>Diskon</td><td style="text-align:right">- ${x(e.globalDiscount)}</td></tr>`:""}
    <tr class="total"><td>TOTAL</td><td style="text-align:right">${x(e.total)}</td></tr>
    ${e.payment.method==="cash"?`<tr><td>Bayar</td><td style="text-align:right">${x(e.payment.paid)}</td></tr><tr><td><b>Kembalian</b></td><td style="text-align:right"><b>${x(e.payment.change)}</b></td></tr>`:""}
    ${e.payment.method==="tempo"?`<tr><td>DP</td><td style="text-align:right">${x(e.payment.dp||0)}</td></tr><tr><td>Sisa Piutang</td><td style="text-align:right">${x(e.payment.tempoBalance||0)}</td></tr>`:""}
    <tr><td>Metode</td><td style="text-align:right">${l(e.payment.method.toUpperCase())}</td></tr>
    </table><div class="line"></div>
    <p style="text-align:center;font-size:10px">*** Terima Kasih ***</p>
    <p style="text-align:center;font-size:9px">Barang yang sudah dibeli tidak dapat dikembalikan</p>
    <script>window.onload=()=>{window.print();setTimeout(()=>window.close(),800)}<\/script>
    </body></html>`),s.document.close()},we=({isStorefront:e})=>{const a=(typeof window.getCashierSession=="function"?window.getCashierSession():null)?.name||(e?"Kasir":"Admin Seller"),r=l(i.store?.name||"Toko Putri");return`
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
                        <h1 class="text-xs font-black uppercase tracking-wider leading-none text-white truncate">${r}</h1>
                        <div class="flex items-center gap-1.5 mt-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                            <span class="text-[10px] text-white/90 font-medium truncate">${l(a)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span id="pos-live-clock" class="hidden sm:inline-block text-[10px] font-mono text-white/90 px-2.5 py-1 bg-black/15 rounded-lg border border-white/20">--:--:--</span>
                <span class="hidden md:inline-flex items-center gap-1.5 text-[10px] font-bold text-white bg-black/20 px-2.5 py-1 rounded-lg">
                    <i class="fa-solid fa-barcode text-xs"></i> USB Scanner Aktif
                </span>
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
                            <button id="pos-view-btn-grid" onclick="window.setPOSViewMode('grid')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${j==="grid"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${j==="grid"?"background:var(--color-primary)":""}" title="Tampilan Grid Foto">
                                <i class="fa-solid fa-grip"></i>
                            </button>
                            <button id="pos-view-btn-list" onclick="window.setPOSViewMode('list')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${j==="list"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${j==="list"?"background:var(--color-primary)":""}" title="Tampilan List Baris Kompak">
                                <i class="fa-solid fa-list-ul"></i>
                            </button>
                        </div>
                    </div>
                    <!-- Kategori Chips -->
                    <div id="pos-cat-filter" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
                </div>

                <!-- Product Catalog Container -->
                <div id="pos-catalog-grid" class="${j==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode"}"></div>
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
    `},qe=()=>{q="",H="",f=[],N=0;const e=c("view-pos-cashier");e&&(e.innerHTML=we({isStorefront:!0}),B(),M(),ne(),oe(),E(),he())},Fe=()=>{q="",H="";const e=c("view-admin");e&&e.classList.add("admin-pos-mode"),c("admin-content")&&(ve("admin-content",`<div class="h-full w-full flex flex-col overflow-hidden">${we({isStorefront:!1})}</div>`),B(),M(),ne(),oe(),E(),he())},he=()=>{window.setPOSViewMode=se,window.posAddToCart=ie,window.posAddToCartQty=Te,window.addToCartPOSWithVariant=Ce,window.posUpdateQty=Ae,window.posSetQty=Le,window.posSetItemDisc=Ie,window.posRemoveItem=je,window.posClearCart=De,window.openPayModal=Ne,window.closePayModal=de,window.setPosCustomerType=Re,window.setPosPayMethod=pe,window.updatePosChange=be,window.posSetQuickCash=ue,window.ensureCustomersLoaded=E,window.ensureBanksLoaded=W,window.lookupPosMember=z,window.debouncedLookupPosMember=ge,window.selectPosMember=fe,window.resetPosMember=xe,window.processPOSTx=Be,window.printPOSReceipt=Ee,window.posSetGlobalDisc=e=>{N=C(e),M()},window.posCatFilter=e=>{H=e,B()},window.posSearchFn=e=>{q=e,B()},window.openPOSCartDrawer=le,window.closePOSCartDrawer=U,window.playCashierBeep=K,window.openPOSHistory=()=>{typeof window.openAdminTab=="function"?window.openAdminTab("orders"):typeof window.showToast=="function"&&window.showToast("Semua transaksi kasir terpusat di menu Pesanan CMS Admin")},window.destroyBarcodeListener=Z};window.setPOSViewMode=se;window.renderPOSStorefront=qe;window.renderPOS=Fe;window.destroyBarcodeListener=Z;window.openPOSCartDrawer=le;window.closePOSCartDrawer=U;window.posSetQuickCash=ue;window.playCashierBeep=K;window.ensureCustomersLoaded=E;window.ensureBanksLoaded=W;window.lookupPosMember=z;window.debouncedLookupPosMember=ge;window.selectPosMember=fe;window.resetPosMember=xe;export{ie as addToCart,Ce as addToCartWithVariant,X as applyMemberToPos,De as clearCart,U as closePOSCartDrawer,de as closePayModal,ge as debouncedLookupPosMember,Z as destroyBarcodeListener,W as ensureBanksLoaded,E as ensureCustomersLoaded,z as lookupPosMember,le as openPOSCartDrawer,Ne as openPayModal,K as playCashierBeep,Te as posAddToCartQty,ue as posSetQuickCash,Ee as printPOSReceipt,Be as processPOSTx,je as removeFromCart,Fe as renderPOS,qe as renderPOSStorefront,xe as resetPosMember,fe as selectPosMember,Ie as setItemDisc,se as setPOSViewMode,Re as setPosCustomerType,pe as setPosPayMethod,Le as setQty,be as updatePosChange,Ae as updateQty};
