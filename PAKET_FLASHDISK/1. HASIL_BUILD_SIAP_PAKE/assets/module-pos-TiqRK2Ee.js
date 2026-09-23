const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pos-variant-sheet-D2tC43LA.js","assets/module-print-DoqR8CYY.js"])))=>i.map(i=>d[i]);
import{d as O,_ as z,a as J}from"./module-member-suypkGiY.js";import{a as p,e as b,i as d,t as k,b as D,f as ke,x as ee,u as qe}from"./module-print-DoqR8CYY.js";import{f as X}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";let me=!1;const Ve=()=>me?Promise.resolve():z(()=>import("./pos-variant-sheet-D2tC43LA.js"),__vite__mapDeps([0,1])).then(()=>{me=!0});let f=[],B="",I="",M="grid";try{const e=localStorage.getItem("pos_view_mode");(e==="list"||e==="grid")&&(M=e)}catch{}let u={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},w="cash",v=0,H=0,T="",xe=null,Z=null;const se=e=>{M=e;try{localStorage.setItem("pos_view_mode",e)}catch{}const t=b("pos-view-btn-grid"),s=b("pos-view-btn-list");t&&s&&(e==="grid"?(t.style.background="var(--color-primary)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs",s.style.removeProperty("background"),s.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400"):(s.style.background="var(--color-primary)",s.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs",t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")),_()},C=e=>Math.max(0,parseInt(e)||0),g=e=>ke(e),ae=()=>f.reduce((e,t)=>e+t.subtotal,0),y=()=>Math.max(0,ae()-C(H)),ye=()=>v-y(),A=()=>{try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,s=t.createOscillator(),a=t.createGain();s.type="sine",s.frequency.setValueAtTime(1400,t.currentTime),a.gain.setValueAtTime(.08,t.currentTime),a.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.08),s.connect(a),a.connect(t.destination),s.start(),s.stop(t.currentTime+.08),setTimeout(()=>{t.close().catch(()=>{})},150)}catch{}},Fe=(e,t)=>{if(!e||!e.wholesale||!e.wholesale.length)return null;const s=[...e.wholesale].sort((a,o)=>o.minQty-a.minQty);for(const a of s)if(t>=parseFloat(a.minQty))return parseFloat(a.price);return null},L=e=>{if(!e.isVariant){const t=(p.products||[]).find(a=>a&&String(a.id)===String(e.id)),s=t?Fe(t,e.qty):null;s!==null?(e.basePrice=e.basePrice||e.price,e.price=s,e.isWholesale=!0):(e.basePrice&&(e.price=e.basePrice),e.isWholesale=!1)}return e.subtotal=Math.max(0,e.price*e.qty-C(e.discount)),e},Ue=()=>{const e=new Date,t=s=>String(s).padStart(2,"0");return`POS-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},ve=()=>{Z&&clearInterval(Z);const e=()=>{const t=b("pos-live-clock");if(!t)return;const s=new Date;t.textContent=s.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB"};e(),Z=setInterval(e,1e3)},G=()=>{window.__posBarcodeFn&&(document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=null)},Se=()=>{G(),window.__posBarcodeFn=e=>{if(!e||typeof e.key!="string")return;const t=window.curViewName||"";if(!(t==="view-pos-cashier"||t==="view-admin"&&window.cTab==="pos"))return;const a=document.activeElement?.tagName?.toLowerCase();if(!(a==="input"||a==="textarea"||a==="select"))if(e.key==="Enter"){if(T&&T.length>=3){const o=T.trim().toLowerCase(),l=(p.products||[]).find(r=>r&&r.isActive!=="false"&&r.isActive!==!1&&(r.barcode&&r.barcode.toLowerCase()===o||r.sku&&r.sku.toLowerCase()===o||r.id&&String(r.id).toLowerCase()===o));if(l)re(l.id),A(),k(`Ditambahkan: ${l.name}`,"success");else{const r=b("pos-search-input");r&&(r.value=T,B=T,_()),k("Barcode tidak ditemukan di katalog","warning")}T=""}}else e.key&&e.key.length===1&&(T=(T||"")+e.key,clearTimeout(xe),xe=setTimeout(()=>{T=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},re=e=>{const t=(p.products||[]).find(o=>o&&String(o.id)===String(e));if(!t)return;if(t.variants&&t.variants.length>0){Ve().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(e)});return}const a=f.find(o=>String(o.id)===String(e)&&!o.isVariant);if(a)a.qty+=1,L(a);else{const o=parseFloat(t.price)||0;f.push(L({id:t.id,name:t.name,price:o,basePrice:o,qty:1,discount:0,subtotal:o,isVariant:!1,isWholesale:!1}))}A(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),S()},Pe=(e,t)=>{const s=(p.products||[]).find(o=>o&&String(o.id)===String(e));if(!s)return;const a=f.find(o=>String(o.id)===String(e)&&!o.isVariant);if(a)a.qty+=t,L(a);else{const o=parseFloat(s.price)||0,l=L({id:s.id,name:s.name,price:o,basePrice:o,qty:t,discount:0,subtotal:o*t,isVariant:!1,isWholesale:!1});f.push(l)}A(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),S()},$e=(e,t,s,a,o=1)=>{const l=`${e}__v${a}`,r=f.find(i=>i.cartKey===l);if(r)r.qty+=o,L(r);else{const n=`${(p.products||[]).find(c=>c&&String(c.id)===String(e))?.name||e} — ${t}`;f.push(L({id:e,cartKey:l,name:n,variantName:t,variantIdx:a,price:s,basePrice:s,qty:o,discount:0,subtotal:s*o,isVariant:!0,isWholesale:!1}))}A(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),S()},Te=(e,t)=>{const s=f.find(a=>(a.cartKey||String(a.id))===String(e));s&&(s.qty=Math.max(1,s.qty+t),L(s),t>0&&A(),S())},Me=(e,t)=>{const s=f.find(a=>(a.cartKey||String(a.id))===String(e));s&&(s.qty=Math.max(1,C(t)),L(s),S())},Ce=(e,t)=>{const s=f.find(a=>(a.cartKey||String(a.id))===String(e));s&&(s.discount=Math.min(C(t),s.price*s.qty),L(s),S())},Le=e=>{f=f.filter(t=>(t.cartKey||String(t.id))!==String(e)),S(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Oe=()=>{if(f.length===0)return;const e=()=>{f=[],H=0,S(),k("Keranjang kasir dikosongkan.")};typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Hapus semua item dari transaksi saat ini?",e,"Ya, Kosongkan",!0):e()},oe=()=>{const e=b("pos-mobile-cart-drawer"),t=b("pos-mobile-cart-sheet");e&&t&&(e.classList.remove("opacity-0","pointer-events-none"),e.classList.add("opacity-100"),t.classList.remove("translate-y-full"),t.classList.add("translate-y-0"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCartDrawer"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},E=(e=!1)=>{const t=b("pos-mobile-cart-drawer"),s=b("pos-mobile-cart-sheet");if(t&&s){const a=()=>{s.classList.add("translate-y-full"),s.classList.remove("translate-y-0"),t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100")};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCartDrawer",!1,a):a()}},ze=e=>{if(e.img&&typeof e.img=="string")return ee(e.img,"w150-rw");const t=(p.products||[]).find(s=>String(s.id)===String(e.id));return t&&t.img&&typeof t.img=="string"?ee(t.img,"w150-rw"):""},_=()=>{const e=(p.products||[]).filter(r=>{if(!r||r.isActive==="false"||r.isActive===!1||I&&r.category!==I)return!1;if(B){const i=B.toLowerCase();return(r.name||"").toLowerCase().includes(i)||(r.barcode||"").toLowerCase().includes(i)||(r.sku||"").toLowerCase().includes(i)}return!0}),s=["Semua",...new Set((p.products||[]).filter(r=>r&&r.isActive!=="false"&&r.category).map(r=>r.category))].map(r=>{const i=r==="Semua",n=i?!I:I===r;return`<button onclick="window.posCatFilter('${d(i?"":r)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs ${n?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}" style="${n?"background:var(--color-primary)":""}">${d(r)}</button>`}).join(""),a=e.length===0?`<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
             <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
               <i class="fa-solid fa-box-open text-2xl"></i>
             </div>
             <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
             <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
           </div>`:e.map(r=>{const i=!!(r.img&&typeof r.img=="string"&&r.img.trim()),n=i?ee(r.img,"w300-rw"):"",c=r.variants&&r.variants.length>0,m=r.wholesale&&r.wholesale.length>0,h=f.filter(R=>String(R.id)===String(r.id)).reduce((R,ue)=>R+ue.qty,0),$=d(String(r.id));return M==="list"?`
                <div class="pos-list-item${h>0?" in-cart":""}" onclick="window.posAddToCart('${$}')">
                    <div class="pos-list-thumb">
                        ${i?`<img width="52" height="52" loading="lazy" decoding="async" src="${d(n)}" alt="${d(r.name)}" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                               <div class="pos-img-placeholder" style="display:none;width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>`:'<div class="pos-img-placeholder" style="width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>'}
                        ${h>0?`<div class="pos-qty-badge" style="top:2px;right:2px;min-width:18px;height:18px;font-size:9px;border-width:1.5px">${h}</div>`:""}
                    </div>
                    <div style="flex:1;min-width:0">
                        <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;margin-bottom:3px">
                            ${r.category?`<span style="font-size:9px;text-transform:uppercase;letter-spacing:0.06em;font-weight:700;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px">${d(r.category)}</span>`:""}
                            ${c?'<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>':""}
                            ${m?'<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>':""}
                        </div>
                        <p style="font-size:12px;font-weight:700;color:#1e293b;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${d(r.name)}">${d(r.name)}</p>
                        <p style="font-size:12px;font-weight:900;color:var(--color-primary);margin-top:2px">${g(parseFloat(r.price)||0)}</p>
                    </div>
                    <button onclick="event.stopPropagation();window.posAddToCart('${$}')" class="pos-add-btn" title="Tambah ke keranjang">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>`:`
            <div class="pos-product-card${h>0?" in-cart":""}" onclick="window.posAddToCart('${$}')">
                <!-- Kotak Gambar Rasio 1:1 Anti-Collapse (aspect-ratio 1:1 + min-height 120px) -->
                <div class="pos-img-box">
                    <div class="pos-img-badges">
                        ${c?'<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>':""}
                        ${m?'<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>':""}
                    </div>
                    ${h>0?`<div class="pos-qty-badge">${h}</div>`:""}
                    ${i?`<img width="300" height="300" loading="lazy" decoding="async" src="${d(n)}" alt="${d(r.name)}"
                             onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                           <div class="pos-img-placeholder" style="display:none">
                             <i class="fa-solid fa-box-open"></i>
                             <span>${d(r.category||"Toko")}</span>
                           </div>`:`<div class="pos-img-placeholder">
                             <i class="fa-solid fa-box-open"></i>
                             <span>${d(r.category||"Produk")}</span>
                           </div>`}
                </div>
                <!-- Info Produk -->
                <div class="pos-card-info">
                    ${r.category?`<p class="pos-card-cat">${d(r.category)}</p>`:""}
                    <p class="pos-card-name" title="${d(r.name)}">${d(r.name)}</p>
                    <div class="pos-card-footer">
                        <span class="pos-card-price">${g(parseFloat(r.price)||0)}</span>
                        <button onclick="event.stopPropagation();window.posAddToCart('${$}')" class="pos-add-btn" title="Tambah ke keranjang">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>`}).join(""),o=b("pos-cat-filter"),l=b("pos-catalog-grid");o&&(o.innerHTML=s),l&&(l.className=M==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode",l.innerHTML=a)},S=()=>{const e=f.reduce((i,n)=>i+n.qty,0),t=ae(),s=y(),a=g(s),o=g(t),l=f.length===0?`<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`:f.map(i=>{const n=d(String(i.cartKey||i.id)),c=ze(i);return`
            <div class="group flex items-center gap-2.5 p-2 sm:p-2.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[var(--color-primary)] transition-all">
                <!-- 40px Thumbnail -->
                <div class="w-10 h-10 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                    ${c?`<img width="40" height="40" loading="lazy" src="${d(c)}" alt="${d(i.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                           <div class="hidden w-full h-full items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>`:'<div class="w-full h-full flex items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>'}
                </div>
                <!-- Details -->
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug">${d(i.name)}</p>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        ${i.isWholesale?'<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary)">GROSIR</span>':""}
                        ${i.isVariant?'<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded bg-indigo-600 text-white shadow-2xs">VARIAN</span>':""}
                        <span class="text-[10px] text-slate-500 font-medium">
                            ${i.isWholesale&&i.basePrice?`<span class="line-through text-slate-400">${g(i.basePrice)}</span> <span class="font-bold" style="color:var(--color-primary)">${g(i.price)}</span>`:g(i.price)}
                        </span>
                    </div>
                    <div class="flex items-center gap-1 mt-1">
                        <span class="text-[9px] text-slate-400 font-bold uppercase">Diskon:</span>
                        <input type="number" min="0" placeholder="0" value="${i.discount||""}" onchange="window.posSetItemDisc('${n}',this.value)"
                            class="w-16 text-[10px] font-bold border border-slate-200 dark:border-slate-600 rounded-lg px-1.5 py-0.5 bg-slate-50 dark:bg-slate-700 text-right focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                </div>
                <!-- Stepper & Subtotal -->
                <div class="flex flex-col items-end gap-1 shrink-0">
                    <div class="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-700/80 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600">
                        <button onclick="window.posUpdateQty('${n}',-1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90">−</button>
                        <input type="number" min="1" value="${i.qty}" onchange="window.posSetQty('${n}',this.value)"
                            class="w-6 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none">
                        <button onclick="window.posUpdateQty('${n}',1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90">+</button>
                    </div>
                    <p class="text-xs font-black" style="color:var(--color-primary)">${g(i.subtotal)}</p>
                    <button onclick="window.posRemoveItem('${n}')" class="text-slate-400 hover:text-rose-500 text-[11px] p-0.5 transition-colors" title="Hapus item">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>`}).join("");document.querySelectorAll(".pos-cart-items-target").forEach(i=>i.innerHTML=l),document.querySelectorAll(".pos-subtotal-target").forEach(i=>i.textContent=o),document.querySelectorAll(".pos-total-target").forEach(i=>i.textContent=a),document.querySelectorAll(".pos-item-count-target").forEach(i=>i.textContent=String(e)),document.querySelectorAll(".pos-global-disc-target").forEach(i=>{document.activeElement!==i&&(i.value=H||"")}),document.querySelectorAll(".pos-pay-btn-target").forEach(i=>{i.disabled=f.length===0;const n=i.querySelector(".btn-text");n&&(n.textContent=f.length>0?`BAYAR — ${a}`:"PROSES PEMBAYARAN")});const r=b("pos-mobile-floating-bar");r&&(f.length>0?(r.classList.remove("translate-y-32","opacity-0","pointer-events-none"),r.classList.add("translate-y-0","opacity-100")):(r.classList.add("translate-y-32","opacity-0","pointer-events-none"),r.classList.remove("translate-y-0","opacity-100"),E(!0)))},Ae=()=>{if(f.length===0){k("Keranjang masih kosong!","warning");return}typeof window.pushModalHistory=="function"&&window.pushModalHistory("posPayment"),u={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},w="cash",v=y(),j(),q(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-pay-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md max-h-[94vh] flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-800">
        <!-- Header -->
        <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <div>
            <h2 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-cash-register" style="color:var(--color-primary)"></i>
              <span>Proses Pembayaran Kasir</span>
            </h2>
            <p class="text-xs text-slate-500 mt-0.5">Total Tagihan: <span class="font-black text-sm" style="color:var(--color-primary)">${g(y())}</span></p>
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
    </div>`),te("cash")},ie=(e=!1)=>{const t=b("pos-pay-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posPayment",!1,()=>t.remove()):t.remove())},je=(e,t,s)=>{s.forEach(a=>{const o=b(`${e}-${a}`);o&&(a===t?(o.style.background="var(--color-primary)",o.style.color="white",o.style.borderColor="var(--color-primary)",o.classList.add("shadow-xs")):(o.style.removeProperty("background"),o.style.removeProperty("color"),o.style.removeProperty("border-color"),o.classList.remove("shadow-xs")))})},te=e=>{const t=b("pos-pay-detail");if(!t)return;const s=y(),a=`
      <div class="flex justify-between items-center py-2 px-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs">
        <span class="text-slate-500 font-medium">Total yang Harus Dibayar</span>
        <span class="font-black text-sm" style="color:var(--color-primary)">${g(s)}</span>
      </div>`;if(e==="cash"){const l=[{label:"Uang Pas",val:s,isPas:!0},{label:"10.000",val:1e4},{label:"20.000",val:2e4},{label:"50.000",val:5e4},{label:"100.000",val:1e5},{label:"200.000",val:2e5},{label:"500.000",val:5e5}].map(r=>`
            <button onclick="window.posSetQuickCash(${r.val})" type="button"
                class="px-2.5 py-1.5 rounded-xl text-[11px] font-black border transition-all active:scale-95 ${r.isPas?"text-white border-transparent shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]"}"
                style="${r.isPas?"background:var(--color-primary)":""}">
                ${r.isPas?"💵 Uang Pas":`Rp ${r.label}`}
            </button>
        `).join("");t.innerHTML=`
            ${a}
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-wider text-slate-400">Nominal Uang Diterima (Rp)</label>
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">Rp</span>
                    <input id="pos-paid-input" type="number" min="0" placeholder="${s}" value="${v||""}"
                        class="w-full border-2 rounded-2xl pl-10 pr-4 py-2.5 text-base sm:text-lg font-black bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none text-right transition-all"
                        style="border-color:var(--color-primary)" oninput="window.updatePosChange(this.value)">
                </div>

                <!-- Quick Cash Buttons Grid -->
                <div class="pt-1">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Pilihan Uang Cepat (1-Klik)</p>
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                        ${l}
                    </div>
                </div>

                <!-- Kembalian Box -->
                <div id="pos-change-box" class="mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${v>=s?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}">
                    <div>
                        <p class="text-[9px] font-black uppercase tracking-wider text-slate-400">Status Kembalian</p>
                        <p id="pos-change-label" class="text-xs font-bold ${v>=s?"text-emerald-700 dark:text-emerald-400":"text-rose-700 dark:text-rose-400"}">
                            ${v>=s?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"}
                        </p>
                    </div>
                    <span id="pos-change-display" class="text-base font-black ${v>=s?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">
                        ${g(Math.abs(ye()))}
                    </span>
                </div>
            </div>
        `}else if(e==="qris"){const o=p.payment?.qrisUrl||"";t.innerHTML=`
          ${a}
          ${o?`<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${d(o)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>`:'<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>'}`}else if(e==="transfer"){const l=(Array.isArray(p.banks)?p.banks:[]).filter(i=>i&&(i.bankName||i.name||i.bank));let r='<option value="">Rekening bank belum diatur di CMS Admin</option>';l.length>0&&(r=l.map(i=>{const n=i.bankName||i.name||i.bank||"Bank",c=i.bankAccount||i.number||i.noRekening||i.account||"",m=i.bankOwner||i.holder||i.atasNama||i.owner||"",x=`${n}${c?" — "+c:""}${m?" a/n "+m:""}`;return`<option value="${d(x)}">${d(x)}</option>`}).join("")),t.innerHTML=`
          ${a}
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rekening Tujuan Toko</label>
            <div class="relative">
              <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${r}
              </select>
            </div>
            ${l.length>0?`
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
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="0" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`)},Ie=e=>{u.isMember=e==="member",u.isNewTempo=e==="tempo",je("pos-ctype",e,["umum","member","tempo"]);const t=b("pos-customer-fields");t&&(e==="umum"?(u.name="",u.phone="",u.memberId=null,u.points=0,t.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">'):e==="member"?(t.innerHTML=`
          <div class="space-y-2">
            <div class="flex gap-2">
              <div class="relative flex-1">
                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input id="pos-cust-phone" type="text" placeholder="Ketik No. HP / Nama / ID Member..."
                  value="${u.isMember?d(u.phone||u.name||""):""}"
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
          </div>`,j().then(()=>{b("pos-cust-phone")?.value?.trim()&&V()})):e==="tempo"&&(u.isMember=!1,ne("tempo"),t.innerHTML=`
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`))},ne=e=>{w=e,je("pos-pay",e,["cash","qris","transfer","tempo"]),te(e),e==="transfer"&&(!p.banks||!p.banks.length)&&q().then(t=>{w==="transfer"&&t&&t.length>0&&te("transfer")})},le=e=>{v=C(e);const t=y(),s=v-t,a=b("pos-change-display"),o=b("pos-change-label"),l=b("pos-change-box"),r=b("pos-process-btn");a&&(a.textContent=g(Math.abs(s))),o&&(o.textContent=s>=0?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"),a&&(a.className=`text-base font-black ${s>=0?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`),l&&(l.className=`mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${s>=0?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}`),r&&w==="cash"&&(r.disabled=s<0,r.classList.toggle("opacity-50",s<0))},de=e=>{const t=b("pos-paid-input");t&&(t.value=e,le(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},q=async()=>{if(Array.isArray(p.banks)&&p.banks.length>0)return p.banks;try{const e=await O.collection("freshmart").doc("cms_data").get();if(e.exists){const t=e.data();if(Array.isArray(t?.banks)&&t.banks.length>0)return p.banks=t.banks,p.banks}}catch{}return p.banks||[]},j=async()=>{if(p.customers&&p.customers.length>0)return p.customers;try{const e=await O.collection("freshmart").doc("cms_data").collection("customers").get();return p.customers=e.docs.map(t=>({...t.data(),id:t.id,_docId:t.id})),p.customers}catch{return p.customers||[]}},De=(e,t)=>{if(!e||!t||!t.length)return[];const s=e.trim().toLowerCase(),a=s.replace(/\D/g,"");let o=a;o.startsWith("62")?o=o.slice(2):o.startsWith("0")&&(o=o.slice(1));const l=[],r=new Set;return t.forEach(i=>{if(!i)return;const n=String(i.id||i._docId||i.phone||"");if(r.has(n))return;const c=String(i.phone||"").replace(/\D/g,"");let m=c;m.startsWith("62")?m=m.slice(2):m.startsWith("0")&&(m=m.slice(1));const x=String(i.name||"").toLowerCase();let h=!1;o.length>=4&&m&&(m===o||m.endsWith(o)||o.endsWith(m)||c.includes(a))&&(h=!0),!h&&(n.toLowerCase()===s||n===a)&&(h=!0),!h&&s.length>=2&&x.includes(s)&&(h=!0),h&&(r.add(n),l.push(i))}),l},We=async e=>{if(!e)return null;const t=e.trim(),s=t.replace(/\D/g,"");let a=s;a.startsWith("62")?a=a.slice(2):a.startsWith("0")&&(a=a.slice(1));const o=O.collection("freshmart").doc("cms_data").collection("customers"),r=Array.from(new Set([a?"62"+a:null,a?"0"+a:null,a||null,a?"+62"+a:null,s||null,t].filter(Boolean))).map(async c=>{try{const m=await o.doc(c).get();if(m&&m.exists)return{...m.data(),id:m.id,_docId:m.id}}catch{}return null}),n=(await Promise.all(r)).find(Boolean);if(n){p.customers||(p.customers=[]);const c=p.customers.findIndex(m=>String(m.id||m.phone)===String(n.id||n.phone));return c>-1?p.customers[c]=n:p.customers.push(n),n}try{const c=await o.limit(300).get();if(!c.empty){p.customers=c.docs.map(x=>({...x.data(),id:x.id,_docId:x.id}));const m=De(e,p.customers);if(m.length>0)return m[0]}}catch{}return null},W=e=>{u.isMember=!0,u.name=e.name||"Member Toko",u.phone=e.phone||"",u.memberId=e.id||e._docId||e.phone,u.points=parseFloat(e.points)||0;const t=b("pos-cust-phone");t&&(t.value=e.phone||e.name||"");const s=u.points,a=typeof window.getMemberTier=="function"?window.getMemberTier(s):{badge:"MEMBER RESMI"},o=b("pos-member-result");o&&(o.innerHTML=`
        <div class="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 rounded-2xl border border-emerald-300 dark:border-emerald-700/60 shadow-xs flex items-center justify-between gap-2.5">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <i class="fa-solid fa-id-card text-base"></i>
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">${d(a.badge||"VIP")}</span>
                <span class="text-[10px] font-black text-amber-600 dark:text-amber-400 flex items-center gap-0.5"><i class="fa-solid fa-star text-[9px]"></i>${s} Poin</span>
              </div>
              <p class="text-xs font-black text-slate-800 dark:text-white truncate mt-0.5">${d(e.name||"Pelanggan Setia")}</p>
              <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${d(e.phone||"")}</p>
            </div>
          </div>
          <button onclick="window.resetPosMember()" type="button" class="shrink-0 px-2.5 py-1.5 rounded-xl text-[10px] font-bold text-slate-600 hover:text-rose-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer" title="Ganti Member">
            <i class="fa-solid fa-rotate-left mr-1"></i>Ganti
          </button>
        </div>`),k(`Member terdeteksi: ${e.name} (${s} Poin)`,"success")},ce=e=>{const s=(p.customers||[]).find(a=>a&&String(a.id||a._docId||a.phone)===String(e));s&&W(s)},pe=()=>{u.isMember=!1,u.name="",u.phone="",u.memberId=null,u.points=0;const e=b("pos-cust-phone");e&&(e.value="",e.focus());const t=b("pos-member-result");t&&(t.innerHTML="")};let fe=null;const be=()=>{clearTimeout(fe);const e=b("pos-cust-phone")?.value?.trim()||"";if(!e){if(!u.memberId){const a=b("pos-member-result");a&&(a.innerHTML="")}return}const t=e.replace(/\D/g,"");!(Array.isArray(p.customers)&&p.customers.length>0)&&t.length<10&&e.length<8||(fe=setTimeout(()=>{V()},350))},V=async()=>{const t=b("pos-cust-phone")?.value?.trim()||"";if(!t){k("Masukkan nomor HP atau nama member","warning");return}const s=b("pos-member-result"),a=b("pos-member-lookup-btn");a&&(a.disabled=!0,a.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>'),s&&(s.innerHTML='<div class="p-2.5 text-center text-xs text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-1.5"></i>Memeriksa database member...</div>');try{await j();const o=De(t,p.customers||[]);if(o.length===1)W(o[0]);else if(o.length>1)s.innerHTML=`
              <div class="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                <p class="text-[10px] font-bold text-slate-500 mb-1">Ditemukan ${o.length} member (klik untuk memilih):</p>
                ${o.map(l=>`
                  <button onclick="window.selectPosMember('${d(l.id||l._docId||l.phone)}')" type="button"
                    class="w-full text-left p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-all flex items-center justify-between gap-2 cursor-pointer">
                    <div class="min-w-0">
                      <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${d(l.name||"Member")}</p>
                      <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${d(l.phone||"")}</p>
                    </div>
                    <span class="text-[10px] font-black text-amber-500 shrink-0"><i class="fa-solid fa-star text-[9px]"></i> ${parseFloat(l.points)||0} Poin</span>
                  </button>
                `).join("")}
              </div>
            `;else{const l=await We(t);if(l)W(l);else{u.isMember=!1,u.name="",u.memberId=null,u.points=0;const i=t.replace(/\D/g,"").length>=8;s.innerHTML=`
                  <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs space-y-1">
                    <p class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-info"></i> Member Tidak Ditemukan</p>
                    <p class="text-[11px] text-amber-700 dark:text-amber-400">Tidak ada member ditemukan untuk "<b>${d(t)}</b>".</p>
                    ${i?"":`
                      <p class="text-[10px] text-amber-600/90 dark:text-amber-400/80 pt-1 border-t border-amber-200 dark:border-amber-800/60">
                        <i class="fa-solid fa-lightbulb mr-1 text-amber-500"></i><b>Tips Kasir:</b> Masukkan nomor WhatsApp/HP member (contoh: <code>0812...</code>) untuk verifikasi instan.
                      </p>
                    `}
                  </div>`}}}catch(o){console.error("[POS] Error lookupPosMember:",o),s&&(s.innerHTML=`<p class="text-xs text-rose-500 p-2">Gagal memeriksa data: ${d(o.message||"Koneksi error")}</p>`)}finally{a&&(a.disabled=!1,a.innerHTML='<i class="fa-solid fa-magnifying-glass mr-1.5"></i><span>Cek</span>')}},He=async()=>{if(f.length===0){k("Keranjang kosong!","warning");return}const e=u.isMember?u.name||"Member Toko":b("pos-cust-name")?.value?.trim()||"Pelanggan Umum",t=u.isMember?u.phone||b("pos-cust-phone")?.value?.trim()||"":b("pos-cust-phone")?.value?.trim()||"";if(u.isNewTempo&&!t){k("No. HP wajib diisi untuk tempo!","warning");return}if(w==="cash"&&(v=C(b("pos-paid-input")?.value||0),v<y())){k(`Uang kurang! Minimal ${g(y())}`,"warning");return}u.name=e,u.phone=t;const s=w==="tempo"?C(b("pos-dp-input")?.value||0):0,a=w==="transfer"&&b("pos-bank-sel")?.value||"",o=b("pos-process-btn");o&&(o.disabled=!0,o.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');try{const l=Ue(),r=typeof window.getCashierSession=="function"?window.getCashierSession():null,i=r?.name||p.store?.name||"Kasir",n=r?.uid||window.__currentAdminUid||"admin",c={txId:l,date:X.firestore.FieldValue.serverTimestamp(),dateMs:Date.now(),cashier:n,cashierName:i,customer:{name:e,phone:t,isMember:!!u.isMember,memberId:u.memberId||null,points:u.points||0},items:f.map(x=>({id:x.id,name:x.name,price:x.price,qty:x.qty,discount:x.discount||0,subtotal:x.subtotal,variantName:x.variantName||"",isVariant:x.isVariant||!1,isWholesale:x.isWholesale||!1})),subtotal:ae(),globalDiscount:C(H),total:y(),payment:{method:w,paid:w==="cash"?v:w==="tempo"?s:y(),change:w==="cash"?ye():0,bank:a,dp:s,tempoBalance:w==="tempo"?y()-s:0},status:w==="tempo"?"tempo":"paid",notes:"",source:"pos"};if(u.isMember&&t){const h=(typeof window.calculateCartPoints=="function"?window.calculateCartPoints(f,p.store):{totalPoints:0}).totalPoints||0;if(h>0){c.pointsEarned=h;try{const $=t.replace(/\D/g,""),R=String(u.memberId||$);if(await O.collection("freshmart").doc("cms_data").collection("customers").doc(R).set({points:X.firestore.FieldValue.increment(h),lastOrderAt:new Date().toISOString()},{merge:!0}),p.customers){const Q=p.customers.find(Y=>Y&&(String(Y.id)===R||String(Y.phone).replace(/\D/g,"")===$));Q&&(Q.points=(parseFloat(Q.points)||0)+h)}}catch($){console.warn("[POS] Gagal update poin member:",$)}}}await O.collection("freshmart").doc("cms_data").collection("pos_transactions").doc(l).set(c),w==="tempo"&&await O.collection("freshmart_orders").doc(l).set({orderId:l,source:"pos",dateString:new Date().toISOString(),customerName:c.customer.name,customerPhone:c.customer.phone,items:f.map(x=>({id:x.id,name:x.name,price:x.price,qty:x.qty})),total:y(),payment:{method:"tempo",paymentStatus:"hutang",paid:s,tempoBalance:y()-s,tempoDueDate:Date.now()+7*864e5,tempoPenaltyRate:1,tempoPenaltyStopped:!1},status:"Diproses",isTempo:!0,timestamp:X.firestore.FieldValue.serverTimestamp()}),ie(),E(!0);const m={...c};f=[],H=0,S(),_(),Ge(m)}catch(l){console.error("[POS] Error:",l),k("Gagal menyimpan transaksi. Coba lagi.","error"),o&&(o.disabled=!1,o.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi')}},Ge=e=>{const t=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${g(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,s=JSON.stringify(e).replace(/"/g,"&quot;");document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">${d(e.txId)}</p>
          <p class="text-2xl font-black mb-1" style="color:var(--color-primary)">${g(e.total)}</p>
          ${t}
          ${e.pointsEarned>0?`
          <div class="mt-2.5 p-2 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-star text-amber-500"></i>
            <span>+${e.pointsEarned} Poin Member Didapat!</span>
          </div>`:""}
        </div>
        <div class="px-6 pb-6 flex flex-col gap-2">
          <button onclick="window.printPOSReceipt(${s})" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)"><i class="fa-solid fa-print"></i> Cetak Struk Thermal</button>
          <button onclick="document.getElementById('pos-success-modal')?.remove()" class="w-full py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 transition-all cursor-pointer">Transaksi Baru</button>
        </div>
      </div>
    </div>`)},_e=e=>{document.getElementById("pos-success-modal")?.remove();const t=p.store?.name||"TOKO PUTRI",s=p.store?.wa||"",a=p.store?.address||"",o=new Date(e.dateMs).toLocaleString("id-ID"),l=(e.items||[]).map(i=>`<tr><td style="padding:2px 0;word-wrap:break-word">${d(i.name)}</td><td style="text-align:right;padding:2px 4px;white-space:nowrap">${i.qty}x ${g(i.price)}</td><td style="text-align:right;padding:2px 0;white-space:nowrap">${g(i.subtotal)}</td></tr>`).join(""),r=window.open("","_blank","width=420,height=720");if(!r){k("Izinkan popup untuk cetak struk","warning");return}r.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Struk POS</title>
    <style>*{box-sizing:border-box}body{font-family:'Courier New',monospace;font-size:12px;max-width:300px;margin:0 auto;padding:12px}
    h2{text-align:center;font-size:14px;font-weight:900;margin:2px 0;text-transform:uppercase}p{margin:1px 0;text-align:center;font-size:11px}.left{text-align:left}
    table{width:100%;border-collapse:collapse}.line{border-top:1px dashed #333;margin:6px 0}.total{font-weight:900;font-size:13px}
    </style></head><body>
    <h2>${t}</h2>${a?`<p>${d(a)}</p>`:""}${s?`<p>WA: ${d(s)}</p>`:""}
    <div class="line"></div>
    <p class="left">No: <b>${d(e.txId)}</b></p><p class="left">Tgl: ${d(o)}</p>
    <p class="left">Kasir: ${d(e.cashierName)}</p><p class="left">Pelanggan: ${d(e.customer?.name||"Umum")}</p>
    ${e.customer?.phone?`<p class="left">HP: ${d(e.customer.phone)}</p>`:""}
    <div class="line"></div><table>${l}</table><div class="line"></div>
    <table>
    <tr><td>Subtotal</td><td style="text-align:right">${g(e.subtotal)}</td></tr>
    ${(e.globalDiscount||0)>0?`<tr><td>Diskon</td><td style="text-align:right">- ${g(e.globalDiscount)}</td></tr>`:""}
    <tr class="total"><td>TOTAL</td><td style="text-align:right">${g(e.total)}</td></tr>
    ${e.payment.method==="cash"?`<tr><td>Bayar</td><td style="text-align:right">${g(e.payment.paid)}</td></tr><tr><td><b>Kembalian</b></td><td style="text-align:right"><b>${g(e.payment.change)}</b></td></tr>`:""}
    ${e.payment.method==="tempo"?`<tr><td>DP</td><td style="text-align:right">${g(e.payment.dp||0)}</td></tr><tr><td>Sisa Piutang</td><td style="text-align:right">${g(e.payment.tempoBalance||0)}</td></tr>`:""}
    <tr><td>Metode</td><td style="text-align:right">${d(e.payment.method.toUpperCase())}</td></tr>
    </table><div class="line"></div>
    <p style="text-align:center;font-size:10px">*** Terima Kasih ***</p>
    <p style="text-align:center;font-size:9px">Barang yang sudah dibeli tidak dapat dikembalikan</p>
    <script>window.onload=()=>{window.print();setTimeout(()=>window.close(),800)}<\/script>
    </body></html>`),r.document.close()},Re=({isStorefront:e})=>{const s=(typeof window.getCashierSession=="function"?window.getCashierSession():null)?.name||(e?"Kasir":"Admin Seller"),a=d(p.store?.name||"Toko Putri");return`
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
                            <span class="text-[10px] text-white/90 font-medium truncate">${d(s)}</span>
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
                            <button id="pos-view-btn-grid" onclick="window.setPOSViewMode('grid')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${M==="grid"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${M==="grid"?"background:var(--color-primary)":""}" title="Tampilan Grid Foto">
                                <i class="fa-solid fa-grip"></i>
                            </button>
                            <button id="pos-view-btn-list" onclick="window.setPOSViewMode('list')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${M==="list"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${M==="list"?"background:var(--color-primary)":""}" title="Tampilan List Baris Kompak">
                                <i class="fa-solid fa-list-ul"></i>
                            </button>
                        </div>
                    </div>
                    <!-- Kategori Chips -->
                    <div id="pos-cat-filter" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
                </div>

                <!-- Product Catalog Container -->
                <div id="pos-catalog-grid" class="${M==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode"}"></div>
            </div>

            <!-- PANEL KANAN: BILLING & KERANJANG (Hanya Desktop >= lg) -->
            <div class="hidden lg:flex flex-col lg:w-[37%] xl:w-[35%] bg-white dark:bg-slate-900 border-l border-slate-200/80 dark:border-slate-800 overflow-hidden shrink-0 shadow-sm">
                <!-- Header Keranjang Desktop -->
                <div class="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
                    <div class="flex items-center gap-2">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white shadow-xs" style="background:var(--color-primary)">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <h3 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white">
                            Keranjang Transaksi (<span class="pos-item-count-target">0</span>)
                        </h3>
                    </div>
                    <button onclick="window.posClearCart()" class="text-[10px] font-bold text-rose-500 hover:text-rose-600 px-2 py-1 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer">
                        <i class="fa-solid fa-trash-can mr-1"></i>Kosongkan
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
                    <div class="flex items-center gap-2">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white" style="background:var(--color-primary)"><i class="fa-solid fa-cart-shopping"></i></div>
                        <h3 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white">Keranjang Transaksi (<span class="pos-item-count-target">0</span>)</h3>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="window.posClearCart()" class="text-[10px] font-bold text-rose-500 hover:text-rose-600 px-2 py-1 rounded-lg hover:bg-rose-50 transition-all"><i class="fa-solid fa-trash-can mr-1"></i>Kosongkan</button>
                        <button onclick="window.closePOSCartDrawer()" class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 text-base flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
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
    `},Be=()=>{typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),B="",I="",f=[],H=0;const e=b("view-pos-cashier");e&&(e.innerHTML=Re({isStorefront:!0}),_(),S(),Se(),ve(),j(),Ne())},Ke=()=>{typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),B="",I="",b("admin-content")&&(D("admin-content",`<div style="height:calc(100vh - 105px)">${Re({isStorefront:!1})}</div>`),_(),S(),Se(),ve(),j(),Ne())},Ne=()=>{window.setPOSViewMode=se,window.posAddToCart=re,window.posAddToCartQty=Pe,window.addToCartPOSWithVariant=$e,window.posUpdateQty=Te,window.posSetQty=Me,window.posSetItemDisc=Ce,window.posRemoveItem=Le,window.posClearCart=Oe,window.openPayModal=Ae,window.closePayModal=ie,window.setPosCustomerType=Ie,window.setPosPayMethod=ne,window.updatePosChange=le,window.posSetQuickCash=de,window.ensureCustomersLoaded=j,window.ensureBanksLoaded=q,window.lookupPosMember=V,window.debouncedLookupPosMember=be,window.selectPosMember=ce,window.resetPosMember=pe,window.processPOSTx=He,window.printPOSReceipt=_e,window.posSetGlobalDisc=e=>{H=C(e),S()},window.posCatFilter=e=>{I=e,_()},window.posSearchFn=e=>{B=e,_()},window.openPOSCartDrawer=oe,window.closePOSCartDrawer=E,window.playCashierBeep=A,window.openPOSHistory=()=>z(()=>Promise.resolve().then(()=>Je),void 0).then(e=>e.renderPOSHistory()),window.destroyBarcodeListener=G};window.setPOSViewMode=se;window.renderPOSStorefront=Be;window.renderPOS=Ke;window.destroyBarcodeListener=G;window.openPOSCartDrawer=oe;window.closePOSCartDrawer=E;window.posSetQuickCash=de;window.playCashierBeep=A;window.ensureCustomersLoaded=j;window.ensureBanksLoaded=q;window.lookupPosMember=V;window.debouncedLookupPosMember=be;window.selectPosMember=ce;window.resetPosMember=pe;const ge=Object.freeze(Object.defineProperty({__proto__:null,addToCart:re,addToCartWithVariant:$e,applyMemberToPos:W,clearCart:Oe,closePOSCartDrawer:E,closePayModal:ie,debouncedLookupPosMember:be,destroyBarcodeListener:G,ensureBanksLoaded:q,ensureCustomersLoaded:j,lookupPosMember:V,openPOSCartDrawer:oe,openPayModal:Ae,playCashierBeep:A,posAddToCartQty:Pe,posSetQuickCash:de,printPOSReceipt:_e,processPOSTx:He,removeFromCart:Le,renderPOS:Ke,renderPOSStorefront:Be,resetPosMember:pe,selectPosMember:ce,setItemDisc:Ce,setPOSViewMode:se,setPosCustomerType:Ie,setPosPayMethod:ne,setQty:Me,updatePosChange:le,updateQty:Te},Symbol.toStringTag,{value:"Module"})),F=e=>ke(e),Qe=e=>new Date(e).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"});let K=new Date().toISOString().slice(0,10),P=[],U=null;const N=()=>{if(U){try{U()}catch{}U=null}};window.detachPOSHistoryListener=N;const he=()=>{const e=b("pos-hist-list");if(e&&D("pos-hist-list",'<div class="flex justify-center py-12"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),N(),!(!!J.currentUser||window.isAdm||window.__localIsAdm)){e&&D("pos-hist-list",`
                <div class="flex flex-col items-center justify-center py-16 text-slate-400">
                    <i class="fa-solid fa-lock text-3xl mb-2 text-slate-300 dark:text-slate-600"></i>
                    <p class="font-bold text-xs">Akses Riwayat Memerlukan Login</p>
                    <p class="text-[11px] text-slate-400 mt-1">Silakan masuk sebagai Admin atau Kasir untuk melihat riwayat transaksi.</p>
                </div>
            `),D("pos-hist-rekap","");return}const s=new Date(K);s.setHours(0,0,0,0);const a=new Date(K);a.setHours(23,59,59,999),U=O.collection("freshmart").doc("cms_data").collection("pos_transactions").where("dateMs",">=",s.getTime()).where("dateMs","<=",a.getTime()).onSnapshot(o=>{P=o.docs.map(l=>l.data()).sort((l,r)=>(r.dateMs||0)-(l.dateMs||0)),we()},o=>{o?.code==="permission-denied"&&(P=[],N(),!J.currentUser||!window.isAdm&&!window.__localIsAdm&&!window.getCashierSession?.())||(console.warn("[POS History] Peringatan akses riwayat:",o),J.currentUser&&(window.isAdm||window.__localIsAdm||window.getCashierSession?.())&&k("Gagal memuat riwayat kasir","error"),P=[],we())})},we=()=>{const e=P.reduce((n,c)=>n+(c.status!=="void"&&c.total||0),0),t=P.filter(n=>n.status!=="void").length,s=P.filter(n=>n.status==="void").length,a={};P.filter(n=>n.status!=="void").forEach(n=>{const c=n.payment?.method||"other";a[c]=(a[c]||0)+(n.total||0)});const o={cash:"Tunai",qris:"QRIS",transfer:"Transfer",tempo:"Tempo"},l=Object.entries(a).map(([n,c])=>`<div class="flex justify-between text-xs"><span class="text-slate-500">${o[n]||n}</span><span class="font-bold text-slate-700 dark:text-slate-200">${F(c)}</span></div>`).join(""),r=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Total Omset</p>
            <p class="text-base font-black" style="color:var(--color-primary)">${F(e)}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Transaksi</p>
            <p class="text-base font-black text-slate-800 dark:text-white">${t}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Produk Terjual</p>
            <p class="text-base font-black text-slate-800 dark:text-white">${P.filter(n=>n.status!=="void").reduce((n,c)=>n+(c.items||[]).reduce((m,x)=>m+x.qty,0),0)}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Void</p>
            <p class="text-base font-black text-red-500">${s}</p>
        </div>
    </div>
    ${l?`<div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 mb-4 space-y-1.5">${l}</div>`:""}`,i=P.length===0?`<div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600"><i class="fa-solid fa-receipt text-4xl mb-3"></i><p class="font-semibold text-sm">Belum ada transaksi</p><p class="text-xs mt-1">${K}</p></div>`:P.map(n=>{const c=n.status==="void",m={cash:"emerald",qris:"blue",transfer:"violet",tempo:"amber"}[n.payment?.method]||"slate",x={cash:"Tunai",qris:"QRIS",transfer:"Transfer",tempo:"Tempo"}[n.payment?.method]||n.payment?.method;return`<div class="bg-white dark:bg-slate-800 border ${c?"border-red-200 dark:border-red-800 opacity-60":"border-slate-200 dark:border-slate-700"} rounded-2xl p-3 space-y-2 ${c?"":"hover:shadow-sm"} transition-all">
                <div class="flex items-start justify-between gap-2">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[10px] font-bold text-slate-500">${d(n.txId)}</span>
                            <span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-${m}-100 dark:bg-${m}-900/30 text-${m}-700 dark:text-${m}-400">${x}</span>
                            ${c?'<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600">VOID</span>':""}
                        </div>
                        <p class="text-[10px] text-slate-400 mt-0.5">${Qe(n.dateMs)} · ${d(n.customer?.name||"Umum")}</p>
                    </div>
                    <div class="text-right shrink-0">
                        <p class="font-black text-sm ${c?"line-through text-slate-400":""}" style="${c?"":"color:var(--color-primary)"}">${F(n.total)}</p>
                        ${n.payment?.method==="cash"?`<p class="text-[10px] text-slate-400">Kembalian ${F(n.payment.change||0)}</p>`:""}
                    </div>
                </div>
                <div class="text-[10px] text-slate-400 flex flex-wrap gap-1">
                    ${(n.items||[]).map(h=>`<span class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded-md">${d(h.name)} ×${h.qty}</span>`).join("")}
                </div>
                ${c?"":`<div class="flex justify-end gap-2 pt-1">
                    <button onclick="window.printPOSReceiptFromHist(${JSON.stringify(n).replace(/"/g,"&quot;")})" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"><i class="fa-solid fa-print"></i>Cetak</button>
                    <button onclick="window.voidPOSTx('${d(n.txId)}')" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border border-red-200 dark:border-red-800 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"><i class="fa-solid fa-ban"></i>Void</button>
                </div>`}
            </div>`}).join("");D("pos-hist-rekap",r),D("pos-hist-list",i)},Ee=e=>{qe("Void Transaksi",`Void transaksi ${e}?
Transaksi akan ditandai batal dan tidak dihitung dalam laporan.`,async()=>{try{await O.collection("freshmart").doc("cms_data").collection("pos_transactions").doc(e).update({status:"void"}),k("Transaksi berhasil divoid","success")}catch{k("Gagal void transaksi","error")}},"Ya, Void")},Ye=()=>{D("admin-content",`
    <div class="max-w-full pb-10 fade-in-scale">
        <!-- Back + Title -->
        <div class="flex items-center gap-3 mb-5">
            <button onclick="window.__openPOSMain?.()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all text-sm"><i class="fa-solid fa-arrow-left"></i></button>
            <div>
                <h2 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Riwayat Transaksi Kasir</h2>
                <p class="text-[10px] text-slate-400">Rekap & detail transaksi POS harian</p>
            </div>
        </div>

        <!-- Filter Tanggal -->
        <div class="flex items-center gap-3 mb-4">
            <div class="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 shadow-xs">
                <i class="fa-solid fa-calendar-days text-slate-400 text-xs"></i>
                <input type="date" id="pos-hist-date" value="${K}"
                    class="text-sm font-bold text-slate-800 dark:text-white bg-transparent focus:outline-none"
                    onchange="window.posHistChangDate(this.value)">
            </div>
            <button onclick="window.posHistChangDate('${new Date().toISOString().slice(0,10)}')" class="px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Hari Ini</button>
        </div>

        <!-- Rekap -->
        <div id="pos-hist-rekap"></div>

        <!-- List Transaksi -->
        <div id="pos-hist-list" class="space-y-3"></div>
    </div>`),window.posHistChangDate=e=>{K=e;const t=b("pos-hist-date");t&&(t.value=e),he()},window.voidPOSTx=Ee,window.printPOSReceiptFromHist=e=>{z(()=>Promise.resolve().then(()=>ge),void 0).then(t=>t.printPOSReceipt(e))},window.__openPOSMain=()=>{N(),z(()=>Promise.resolve().then(()=>ge),void 0).then(e=>e.renderPOS())},he()},Je=Object.freeze(Object.defineProperty({__proto__:null,detachPOSHistoryListener:N,renderPOSHistory:Ye,voidPOSTx:Ee},Symbol.toStringTag,{value:"Module"}));export{re as addToCart,$e as addToCartWithVariant,W as applyMemberToPos,Oe as clearCart,E as closePOSCartDrawer,ie as closePayModal,be as debouncedLookupPosMember,G as destroyBarcodeListener,q as ensureBanksLoaded,j as ensureCustomersLoaded,V as lookupPosMember,oe as openPOSCartDrawer,Ae as openPayModal,A as playCashierBeep,Pe as posAddToCartQty,de as posSetQuickCash,_e as printPOSReceipt,He as processPOSTx,Le as removeFromCart,Ke as renderPOS,Be as renderPOSStorefront,pe as resetPosMember,ce as selectPosMember,Ce as setItemDisc,se as setPOSViewMode,Ie as setPosCustomerType,ne as setPosPayMethod,Me as setQty,le as updatePosChange,Te as updateQty};
