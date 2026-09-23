const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pos-variant-sheet-D2tC43LA.js","assets/module-print-DoqR8CYY.js"])))=>i.map(i=>d[i]);
import{d as I,_ as F}from"./module-member-DnpfIH11.js";import{a as m,e as p,i as d,t as w,b as K,f as fe,x as J,u as Ee}from"./module-print-DoqR8CYY.js";import{f as Q}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";let ce=!1;const Ne=()=>ce?Promise.resolve():F(()=>import("./pos-variant-sheet-D2tC43LA.js"),__vite__mapDeps([0,1])).then(()=>{ce=!0});let x=[],_="",D="",M="grid";try{const e=localStorage.getItem("pos_view_mode");(e==="list"||e==="grid")&&(M=e)}catch{}let b={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},k="cash",v=0,A=0,$="",pe=null,Y=null;const X=e=>{M=e;try{localStorage.setItem("pos_view_mode",e)}catch{}const t=p("pos-view-btn-grid"),s=p("pos-view-btn-list");t&&s&&(e==="grid"?(t.style.background="var(--color-primary)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs",s.style.removeProperty("background"),s.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400"):(s.style.background="var(--color-primary)",s.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs",t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")),H()},C=e=>Math.max(0,parseInt(e)||0),g=e=>fe(e),Z=()=>x.reduce((e,t)=>e+t.subtotal,0),y=()=>Math.max(0,Z()-C(A)),ge=()=>v-y(),j=()=>{try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,s=t.createOscillator(),a=t.createGain();s.type="sine",s.frequency.setValueAtTime(1400,t.currentTime),a.gain.setValueAtTime(.08,t.currentTime),a.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.08),s.connect(a),a.connect(t.destination),s.start(),s.stop(t.currentTime+.08),setTimeout(()=>{t.close().catch(()=>{})},150)}catch{}},Be=(e,t)=>{if(!e||!e.wholesale||!e.wholesale.length)return null;const s=[...e.wholesale].sort((a,r)=>r.minQty-a.minQty);for(const a of s)if(t>=parseFloat(a.minQty))return parseFloat(a.price);return null},L=e=>{if(!e.isVariant){const t=(m.products||[]).find(a=>a&&String(a.id)===String(e.id)),s=t?Be(t,e.qty):null;s!==null?(e.basePrice=e.basePrice||e.price,e.price=s,e.isWholesale=!0):(e.basePrice&&(e.price=e.basePrice),e.isWholesale=!1)}return e.subtotal=Math.max(0,e.price*e.qty-C(e.discount)),e},qe=()=>{const e=new Date,t=s=>String(s).padStart(2,"0");return`POS-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},he=()=>{Y&&clearInterval(Y);const e=()=>{const t=p("pos-live-clock");if(!t)return;const s=new Date;t.textContent=s.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB"};e(),Y=setInterval(e,1e3)},z=()=>{window.__posBarcodeFn&&(document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=null)},we=()=>{z(),window.__posBarcodeFn=e=>{if(!e||typeof e.key!="string")return;const t=window.curViewName||"";if(!(t==="view-pos-cashier"||t==="view-admin"&&window.cTab==="pos"))return;const a=document.activeElement?.tagName?.toLowerCase();if(!(a==="input"||a==="textarea"||a==="select"))if(e.key==="Enter"){if($&&$.length>=3){const r=$.trim().toLowerCase(),l=(m.products||[]).find(o=>o&&o.isActive!=="false"&&o.isActive!==!1&&(o.barcode&&o.barcode.toLowerCase()===r||o.sku&&o.sku.toLowerCase()===r||o.id&&String(o.id).toLowerCase()===r));if(l)ee(l.id),j(),w(`Ditambahkan: ${l.name}`,"success");else{const o=p("pos-search-input");o&&(o.value=$,_=$,H()),w("Barcode tidak ditemukan di katalog","warning")}$=""}}else e.key&&e.key.length===1&&($=($||"")+e.key,clearTimeout(pe),pe=setTimeout(()=>{$=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},ee=e=>{const t=(m.products||[]).find(r=>r&&String(r.id)===String(e));if(!t)return;if(t.variants&&t.variants.length>0){Ne().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(e)});return}const a=x.find(r=>String(r.id)===String(e)&&!r.isVariant);if(a)a.qty+=1,L(a);else{const r=parseFloat(t.price)||0;x.push(L({id:t.id,name:t.name,price:r,basePrice:r,qty:1,discount:0,subtotal:r,isVariant:!1,isWholesale:!1}))}j(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),S()},ke=(e,t)=>{const s=(m.products||[]).find(r=>r&&String(r.id)===String(e));if(!s)return;const a=x.find(r=>String(r.id)===String(e)&&!r.isVariant);if(a)a.qty+=t,L(a);else{const r=parseFloat(s.price)||0,l=L({id:s.id,name:s.name,price:r,basePrice:r,qty:t,discount:0,subtotal:r*t,isVariant:!1,isWholesale:!1});x.push(l)}j(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),S()},ye=(e,t,s,a,r=1)=>{const l=`${e}__v${a}`,o=x.find(i=>i.cartKey===l);if(o)o.qty+=r,L(o);else{const n=`${(m.products||[]).find(c=>c&&String(c.id)===String(e))?.name||e} — ${t}`;x.push(L({id:e,cartKey:l,name:n,variantName:t,variantIdx:a,price:s,basePrice:s,qty:r,discount:0,subtotal:s*r,isVariant:!0,isWholesale:!1}))}j(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),S()},ve=(e,t)=>{const s=x.find(a=>(a.cartKey||String(a.id))===String(e));s&&(s.qty=Math.max(1,s.qty+t),L(s),t>0&&j(),S())},Se=(e,t)=>{const s=x.find(a=>(a.cartKey||String(a.id))===String(e));s&&(s.qty=Math.max(1,C(t)),L(s),S())},Pe=(e,t)=>{const s=x.find(a=>(a.cartKey||String(a.id))===String(e));s&&(s.discount=Math.min(C(t),s.price*s.qty),L(s),S())},$e=e=>{x=x.filter(t=>(t.cartKey||String(t.id))!==String(e)),S(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Te=()=>{if(x.length===0)return;const e=()=>{x=[],A=0,S(),w("Keranjang kasir dikosongkan.")};typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Hapus semua item dari transaksi saat ini?",e,"Ya, Kosongkan",!0):e()},te=()=>{const e=p("pos-mobile-cart-drawer"),t=p("pos-mobile-cart-sheet");e&&t&&(e.classList.remove("opacity-0","pointer-events-none"),e.classList.add("opacity-100"),t.classList.remove("translate-y-full"),t.classList.add("translate-y-0"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCartDrawer"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},N=(e=!1)=>{const t=p("pos-mobile-cart-drawer"),s=p("pos-mobile-cart-sheet");if(t&&s){const a=()=>{s.classList.add("translate-y-full"),s.classList.remove("translate-y-0"),t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100")};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCartDrawer",!1,a):a()}},Ve=e=>{if(e.img&&typeof e.img=="string")return J(e.img,"w150-rw");const t=(m.products||[]).find(s=>String(s.id)===String(e.id));return t&&t.img&&typeof t.img=="string"?J(t.img,"w150-rw"):""},H=()=>{const e=(m.products||[]).filter(o=>{if(!o||o.isActive==="false"||o.isActive===!1||D&&o.category!==D)return!1;if(_){const i=_.toLowerCase();return(o.name||"").toLowerCase().includes(i)||(o.barcode||"").toLowerCase().includes(i)||(o.sku||"").toLowerCase().includes(i)}return!0}),s=["Semua",...new Set((m.products||[]).filter(o=>o&&o.isActive!=="false"&&o.category).map(o=>o.category))].map(o=>{const i=o==="Semua",n=i?!D:D===o;return`<button onclick="window.posCatFilter('${d(i?"":o)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs ${n?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}" style="${n?"background:var(--color-primary)":""}">${d(o)}</button>`}).join(""),a=e.length===0?`<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
             <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
               <i class="fa-solid fa-box-open text-2xl"></i>
             </div>
             <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
             <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
           </div>`:e.map(o=>{const i=!!(o.img&&typeof o.img=="string"&&o.img.trim()),n=i?J(o.img,"w300-rw"):"",c=o.variants&&o.variants.length>0,u=o.wholesale&&o.wholesale.length>0,h=x.filter(R=>String(R.id)===String(o.id)).reduce((R,de)=>R+de.qty,0),P=d(String(o.id));return M==="list"?`
                <div class="pos-list-item${h>0?" in-cart":""}" onclick="window.posAddToCart('${P}')">
                    <div class="pos-list-thumb">
                        ${i?`<img width="52" height="52" loading="lazy" decoding="async" src="${d(n)}" alt="${d(o.name)}" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                               <div class="pos-img-placeholder" style="display:none;width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>`:'<div class="pos-img-placeholder" style="width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>'}
                        ${h>0?`<div class="pos-qty-badge" style="top:2px;right:2px;min-width:18px;height:18px;font-size:9px;border-width:1.5px">${h}</div>`:""}
                    </div>
                    <div style="flex:1;min-width:0">
                        <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;margin-bottom:3px">
                            ${o.category?`<span style="font-size:9px;text-transform:uppercase;letter-spacing:0.06em;font-weight:700;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px">${d(o.category)}</span>`:""}
                            ${c?'<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>':""}
                            ${u?'<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>':""}
                        </div>
                        <p style="font-size:12px;font-weight:700;color:#1e293b;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${d(o.name)}">${d(o.name)}</p>
                        <p style="font-size:12px;font-weight:900;color:var(--color-primary);margin-top:2px">${g(parseFloat(o.price)||0)}</p>
                    </div>
                    <button onclick="event.stopPropagation();window.posAddToCart('${P}')" class="pos-add-btn" title="Tambah ke keranjang">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>`:`
            <div class="pos-product-card${h>0?" in-cart":""}" onclick="window.posAddToCart('${P}')">
                <!-- Kotak Gambar Rasio 1:1 Anti-Collapse (aspect-ratio 1:1 + min-height 120px) -->
                <div class="pos-img-box">
                    <div class="pos-img-badges">
                        ${c?'<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>':""}
                        ${u?'<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>':""}
                    </div>
                    ${h>0?`<div class="pos-qty-badge">${h}</div>`:""}
                    ${i?`<img width="300" height="300" loading="lazy" decoding="async" src="${d(n)}" alt="${d(o.name)}"
                             onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                           <div class="pos-img-placeholder" style="display:none">
                             <i class="fa-solid fa-box-open"></i>
                             <span>${d(o.category||"Toko")}</span>
                           </div>`:`<div class="pos-img-placeholder">
                             <i class="fa-solid fa-box-open"></i>
                             <span>${d(o.category||"Produk")}</span>
                           </div>`}
                </div>
                <!-- Info Produk -->
                <div class="pos-card-info">
                    ${o.category?`<p class="pos-card-cat">${d(o.category)}</p>`:""}
                    <p class="pos-card-name" title="${d(o.name)}">${d(o.name)}</p>
                    <div class="pos-card-footer">
                        <span class="pos-card-price">${g(parseFloat(o.price)||0)}</span>
                        <button onclick="event.stopPropagation();window.posAddToCart('${P}')" class="pos-add-btn" title="Tambah ke keranjang">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>`}).join(""),r=p("pos-cat-filter"),l=p("pos-catalog-grid");r&&(r.innerHTML=s),l&&(l.className=M==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode",l.innerHTML=a)},S=()=>{const e=x.reduce((i,n)=>i+n.qty,0),t=Z(),s=y(),a=g(s),r=g(t),l=x.length===0?`<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`:x.map(i=>{const n=d(String(i.cartKey||i.id)),c=Ve(i);return`
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
            </div>`}).join("");document.querySelectorAll(".pos-cart-items-target").forEach(i=>i.innerHTML=l),document.querySelectorAll(".pos-subtotal-target").forEach(i=>i.textContent=r),document.querySelectorAll(".pos-total-target").forEach(i=>i.textContent=a),document.querySelectorAll(".pos-item-count-target").forEach(i=>i.textContent=String(e)),document.querySelectorAll(".pos-global-disc-target").forEach(i=>{document.activeElement!==i&&(i.value=A||"")}),document.querySelectorAll(".pos-pay-btn-target").forEach(i=>{i.disabled=x.length===0;const n=i.querySelector(".btn-text");n&&(n.textContent=x.length>0?`BAYAR — ${a}`:"PROSES PEMBAYARAN")});const o=p("pos-mobile-floating-bar");o&&(x.length>0?(o.classList.remove("translate-y-32","opacity-0","pointer-events-none"),o.classList.add("translate-y-0","opacity-100")):(o.classList.add("translate-y-32","opacity-0","pointer-events-none"),o.classList.remove("translate-y-0","opacity-100"),N(!0)))},Me=()=>{if(x.length===0){w("Keranjang masih kosong!","warning");return}typeof window.pushModalHistory=="function"&&window.pushModalHistory("posPayment"),b={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},k="cash",v=y(),O(),document.body.insertAdjacentHTML("beforeend",`
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
    </div>`),Le("cash")},se=(e=!1)=>{const t=p("pos-pay-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posPayment",!1,()=>t.remove()):t.remove())},Ce=(e,t,s)=>{s.forEach(a=>{const r=p(`${e}-${a}`);r&&(a===t?(r.style.background="var(--color-primary)",r.style.color="white",r.style.borderColor="var(--color-primary)",r.classList.add("shadow-xs")):(r.style.removeProperty("background"),r.style.removeProperty("color"),r.style.removeProperty("border-color"),r.classList.remove("shadow-xs")))})},Le=e=>{const t=p("pos-pay-detail");if(!t)return;const s=y(),a=`
      <div class="flex justify-between items-center py-2 px-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs">
        <span class="text-slate-500 font-medium">Total yang Harus Dibayar</span>
        <span class="font-black text-sm" style="color:var(--color-primary)">${g(s)}</span>
      </div>`;if(e==="cash"){const l=[{label:"Uang Pas",val:s,isPas:!0},{label:"10.000",val:1e4},{label:"20.000",val:2e4},{label:"50.000",val:5e4},{label:"100.000",val:1e5},{label:"200.000",val:2e5},{label:"500.000",val:5e5}].map(o=>`
            <button onclick="window.posSetQuickCash(${o.val})" type="button"
                class="px-2.5 py-1.5 rounded-xl text-[11px] font-black border transition-all active:scale-95 ${o.isPas?"text-white border-transparent shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]"}"
                style="${o.isPas?"background:var(--color-primary)":""}">
                ${o.isPas?"💵 Uang Pas":`Rp ${o.label}`}
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
                        ${g(Math.abs(ge()))}
                    </span>
                </div>
            </div>
        `}else if(e==="qris"){const r=m.payment?.qrisUrl||"";t.innerHTML=`
          ${a}
          ${r?`<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${d(r)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>`:'<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>'}`}else if(e==="transfer"){const r=(m.banks||[]).filter(l=>l&&l.name);t.innerHTML=`
          ${a}
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Rekening Tujuan Toko</label>
          <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 focus:outline-none">
            ${r.length?r.map(l=>`<option>${d(l.name)} — ${d(l.number||"")} a/n ${d(l.holder||"")}</option>`).join(""):"<option>Rekening bank belum diatur</option>"}
          </select>`}else e==="tempo"&&(t.innerHTML=`
          ${a}
          <div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-700/80 mb-2.5">
            <p class="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half"></i> Pembayaran Tempo / Piutang</p>
            <p class="text-[10px] text-amber-700 dark:text-amber-400 mt-1">Transaksi otomatis dicatat sebagai piutang di database toko.</p>
          </div>
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Uang Muka / DP (Rp) — opsional</label>
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="0" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`)},je=e=>{b.isMember=e==="member",b.isNewTempo=e==="tempo",Ce("pos-ctype",e,["umum","member","tempo"]);const t=p("pos-customer-fields");t&&(e==="umum"?(b.name="",b.phone="",b.memberId=null,b.points=0,t.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">'):e==="member"?(t.innerHTML=`
          <div class="space-y-2">
            <div class="flex gap-2">
              <div class="relative flex-1">
                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input id="pos-cust-phone" type="text" placeholder="Ketik No. HP / Nama / ID Member..."
                  value="${b.isMember?d(b.phone||b.name||""):""}"
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
          </div>`,O().then(()=>{p("pos-cust-phone")?.value?.trim()&&B()})):e==="tempo"&&(b.isMember=!1,ae("tempo"),t.innerHTML=`
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`))},ae=e=>{k=e,Ce("pos-pay",e,["cash","qris","transfer","tempo"]),Le(e)},re=e=>{v=C(e);const t=y(),s=v-t,a=p("pos-change-display"),r=p("pos-change-label"),l=p("pos-change-box"),o=p("pos-process-btn");a&&(a.textContent=g(Math.abs(s))),r&&(r.textContent=s>=0?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"),a&&(a.className=`text-base font-black ${s>=0?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`),l&&(l.className=`mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${s>=0?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}`),o&&k==="cash"&&(o.disabled=s<0,o.classList.toggle("opacity-50",s<0))},oe=e=>{const t=p("pos-paid-input");t&&(t.value=e,re(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},O=async()=>{if(m.customers&&m.customers.length>0)return m.customers;try{const e=await I.collection("freshmart").doc("cms_data").collection("customers").get();return m.customers=e.docs.map(t=>({...t.data(),id:t.id,_docId:t.id})),m.customers}catch{return m.customers||[]}},Oe=(e,t)=>{if(!e||!t||!t.length)return[];const s=e.trim().toLowerCase(),a=s.replace(/\D/g,"");let r=a;r.startsWith("62")?r=r.slice(2):r.startsWith("0")&&(r=r.slice(1));const l=[],o=new Set;return t.forEach(i=>{if(!i)return;const n=String(i.id||i._docId||i.phone||"");if(o.has(n))return;const c=String(i.phone||"").replace(/\D/g,"");let u=c;u.startsWith("62")?u=u.slice(2):u.startsWith("0")&&(u=u.slice(1));const f=String(i.name||"").toLowerCase();let h=!1;r.length>=4&&u&&(u===r||u.endsWith(r)||r.endsWith(u)||c.includes(a))&&(h=!0),!h&&(n.toLowerCase()===s||n===a)&&(h=!0),!h&&s.length>=2&&f.includes(s)&&(h=!0),h&&(o.add(n),l.push(i))}),l},Fe=async e=>{if(!e)return null;const t=e.trim(),s=t.replace(/\D/g,"");let a=s;a.startsWith("62")?a=a.slice(2):a.startsWith("0")&&(a=a.slice(1));const r=I.collection("freshmart").doc("cms_data").collection("customers"),o=Array.from(new Set([a?"62"+a:null,a?"0"+a:null,a||null,a?"+62"+a:null,s||null,t].filter(Boolean))).map(async c=>{try{const u=await r.doc(c).get();if(u&&u.exists)return{...u.data(),id:u.id,_docId:u.id}}catch{}return null}),n=(await Promise.all(o)).find(Boolean);if(n){m.customers||(m.customers=[]);const c=m.customers.findIndex(u=>String(u.id||u.phone)===String(n.id||n.phone));return c>-1?m.customers[c]=n:m.customers.push(n),n}try{const c=await r.limit(300).get();if(!c.empty){m.customers=c.docs.map(f=>({...f.data(),id:f.id,_docId:f.id}));const u=Oe(e,m.customers);if(u.length>0)return u[0]}}catch{}return null},U=e=>{b.isMember=!0,b.name=e.name||"Member Toko",b.phone=e.phone||"",b.memberId=e.id||e._docId||e.phone,b.points=parseFloat(e.points)||0;const t=p("pos-cust-phone");t&&(t.value=e.phone||e.name||"");const s=b.points,a=typeof window.getMemberTier=="function"?window.getMemberTier(s):{badge:"MEMBER RESMI"},r=p("pos-member-result");r&&(r.innerHTML=`
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
        </div>`),w(`Member terdeteksi: ${e.name} (${s} Poin)`,"success")},ie=e=>{const s=(m.customers||[]).find(a=>a&&String(a.id||a._docId||a.phone)===String(e));s&&U(s)},ne=()=>{b.isMember=!1,b.name="",b.phone="",b.memberId=null,b.points=0;const e=p("pos-cust-phone");e&&(e.value="",e.focus());const t=p("pos-member-result");t&&(t.innerHTML="")};let be=null;const le=()=>{clearTimeout(be);const e=p("pos-cust-phone")?.value?.trim()||"";if(!e){if(!b.memberId){const a=p("pos-member-result");a&&(a.innerHTML="")}return}const t=e.replace(/\D/g,"");!(Array.isArray(m.customers)&&m.customers.length>0)&&t.length<10&&e.length<8||(be=setTimeout(()=>{B()},350))},B=async()=>{const t=p("pos-cust-phone")?.value?.trim()||"";if(!t){w("Masukkan nomor HP atau nama member","warning");return}const s=p("pos-member-result"),a=p("pos-member-lookup-btn");a&&(a.disabled=!0,a.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>'),s&&(s.innerHTML='<div class="p-2.5 text-center text-xs text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-1.5"></i>Memeriksa database member...</div>');try{await O();const r=Oe(t,m.customers||[]);if(r.length===1)U(r[0]);else if(r.length>1)s.innerHTML=`
              <div class="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                <p class="text-[10px] font-bold text-slate-500 mb-1">Ditemukan ${r.length} member (klik untuk memilih):</p>
                ${r.map(l=>`
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
            `;else{const l=await Fe(t);if(l)U(l);else{b.isMember=!1,b.name="",b.memberId=null,b.points=0;const i=t.replace(/\D/g,"").length>=8;s.innerHTML=`
                  <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs space-y-1">
                    <p class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-info"></i> Member Tidak Ditemukan</p>
                    <p class="text-[11px] text-amber-700 dark:text-amber-400">Tidak ada member ditemukan untuk "<b>${d(t)}</b>".</p>
                    ${i?"":`
                      <p class="text-[10px] text-amber-600/90 dark:text-amber-400/80 pt-1 border-t border-amber-200 dark:border-amber-800/60">
                        <i class="fa-solid fa-lightbulb mr-1 text-amber-500"></i><b>Tips Kasir:</b> Masukkan nomor WhatsApp/HP member (contoh: <code>0812...</code>) untuk verifikasi instan.
                      </p>
                    `}
                  </div>`}}}catch(r){console.error("[POS] Error lookupPosMember:",r),s&&(s.innerHTML=`<p class="text-xs text-rose-500 p-2">Gagal memeriksa data: ${d(r.message||"Koneksi error")}</p>`)}finally{a&&(a.disabled=!1,a.innerHTML='<i class="fa-solid fa-magnifying-glass mr-1.5"></i><span>Cek</span>')}},De=async()=>{if(x.length===0){w("Keranjang kosong!","warning");return}const e=b.isMember?b.name||"Member Toko":p("pos-cust-name")?.value?.trim()||"Pelanggan Umum",t=b.isMember?b.phone||p("pos-cust-phone")?.value?.trim()||"":p("pos-cust-phone")?.value?.trim()||"";if(b.isNewTempo&&!t){w("No. HP wajib diisi untuk tempo!","warning");return}if(k==="cash"&&(v=C(p("pos-paid-input")?.value||0),v<y())){w(`Uang kurang! Minimal ${g(y())}`,"warning");return}b.name=e,b.phone=t;const s=k==="tempo"?C(p("pos-dp-input")?.value||0):0,a=k==="transfer"&&p("pos-bank-sel")?.value||"",r=p("pos-process-btn");r&&(r.disabled=!0,r.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');try{const l=qe(),o=typeof window.getCashierSession=="function"?window.getCashierSession():null,i=o?.name||m.store?.name||"Kasir",n=o?.uid||window.__currentAdminUid||"admin",c={txId:l,date:Q.firestore.FieldValue.serverTimestamp(),dateMs:Date.now(),cashier:n,cashierName:i,customer:{name:e,phone:t,isMember:!!b.isMember,memberId:b.memberId||null,points:b.points||0},items:x.map(f=>({id:f.id,name:f.name,price:f.price,qty:f.qty,discount:f.discount||0,subtotal:f.subtotal,variantName:f.variantName||"",isVariant:f.isVariant||!1,isWholesale:f.isWholesale||!1})),subtotal:Z(),globalDiscount:C(A),total:y(),payment:{method:k,paid:k==="cash"?v:k==="tempo"?s:y(),change:k==="cash"?ge():0,bank:a,dp:s,tempoBalance:k==="tempo"?y()-s:0},status:k==="tempo"?"tempo":"paid",notes:"",source:"pos"};if(b.isMember&&t){const h=(typeof window.calculateCartPoints=="function"?window.calculateCartPoints(x,m.store):{totalPoints:0}).totalPoints||0;if(h>0){c.pointsEarned=h;try{const P=t.replace(/\D/g,""),R=String(b.memberId||P);if(await I.collection("freshmart").doc("cms_data").collection("customers").doc(R).set({points:Q.firestore.FieldValue.increment(h),lastOrderAt:new Date().toISOString()},{merge:!0}),m.customers){const W=m.customers.find(G=>G&&(String(G.id)===R||String(G.phone).replace(/\D/g,"")===P));W&&(W.points=(parseFloat(W.points)||0)+h)}}catch(P){console.warn("[POS] Gagal update poin member:",P)}}}await I.collection("freshmart").doc("cms_data").collection("pos_transactions").doc(l).set(c),k==="tempo"&&await I.collection("freshmart_orders").doc(l).set({orderId:l,source:"pos",dateString:new Date().toISOString(),customerName:c.customer.name,customerPhone:c.customer.phone,items:x.map(f=>({id:f.id,name:f.name,price:f.price,qty:f.qty})),total:y(),payment:{method:"tempo",paymentStatus:"hutang",paid:s,tempoBalance:y()-s,tempoDueDate:Date.now()+7*864e5,tempoPenaltyRate:1,tempoPenaltyStopped:!1},status:"Diproses",isTempo:!0,timestamp:Q.firestore.FieldValue.serverTimestamp()}),se(),N(!0);const u={...c};x=[],A=0,S(),H(),Ue(u)}catch(l){console.error("[POS] Error:",l),w("Gagal menyimpan transaksi. Coba lagi.","error"),r&&(r.disabled=!1,r.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi')}},Ue=e=>{const t=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${g(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,s=JSON.stringify(e).replace(/"/g,"&quot;");document.body.insertAdjacentHTML("beforeend",`
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
    </div>`)},Ie=e=>{document.getElementById("pos-success-modal")?.remove();const t=m.store?.name||"TOKO PUTRI",s=m.store?.wa||"",a=m.store?.address||"",r=new Date(e.dateMs).toLocaleString("id-ID"),l=(e.items||[]).map(i=>`<tr><td style="padding:2px 0;word-wrap:break-word">${d(i.name)}</td><td style="text-align:right;padding:2px 4px;white-space:nowrap">${i.qty}x ${g(i.price)}</td><td style="text-align:right;padding:2px 0;white-space:nowrap">${g(i.subtotal)}</td></tr>`).join(""),o=window.open("","_blank","width=420,height=720");if(!o){w("Izinkan popup untuk cetak struk","warning");return}o.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Struk POS</title>
    <style>*{box-sizing:border-box}body{font-family:'Courier New',monospace;font-size:12px;max-width:300px;margin:0 auto;padding:12px}
    h2{text-align:center;font-size:14px;font-weight:900;margin:2px 0;text-transform:uppercase}p{margin:1px 0;text-align:center;font-size:11px}.left{text-align:left}
    table{width:100%;border-collapse:collapse}.line{border-top:1px dashed #333;margin:6px 0}.total{font-weight:900;font-size:13px}
    </style></head><body>
    <h2>${t}</h2>${a?`<p>${d(a)}</p>`:""}${s?`<p>WA: ${d(s)}</p>`:""}
    <div class="line"></div>
    <p class="left">No: <b>${d(e.txId)}</b></p><p class="left">Tgl: ${d(r)}</p>
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
    </body></html>`),o.document.close()},Ae=({isStorefront:e})=>{const s=(typeof window.getCashierSession=="function"?window.getCashierSession():null)?.name||(e?"Kasir":"Admin Seller"),a=d(m.store?.name||"Toko Putri");return`
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
    `},He=()=>{_="",D="",x=[],A=0;const e=p("view-pos-cashier");e&&(e.innerHTML=Ae({isStorefront:!0}),H(),S(),we(),he(),O(),_e())},Re=()=>{_="",D="",p("admin-content")&&(K("admin-content",`<div style="height:calc(100vh - 105px)">${Ae({isStorefront:!1})}</div>`),H(),S(),we(),he(),O(),_e())},_e=()=>{window.setPOSViewMode=X,window.posAddToCart=ee,window.posAddToCartQty=ke,window.addToCartPOSWithVariant=ye,window.posUpdateQty=ve,window.posSetQty=Se,window.posSetItemDisc=Pe,window.posRemoveItem=$e,window.posClearCart=Te,window.openPayModal=Me,window.closePayModal=se,window.setPosCustomerType=je,window.setPosPayMethod=ae,window.updatePosChange=re,window.posSetQuickCash=oe,window.ensureCustomersLoaded=O,window.lookupPosMember=B,window.debouncedLookupPosMember=le,window.selectPosMember=ie,window.resetPosMember=ne,window.processPOSTx=De,window.printPOSReceipt=Ie,window.posSetGlobalDisc=e=>{A=C(e),S()},window.posCatFilter=e=>{D=e,H()},window.posSearchFn=e=>{_=e,H()},window.openPOSCartDrawer=te,window.closePOSCartDrawer=N,window.playCashierBeep=j,window.openPOSHistory=()=>F(()=>Promise.resolve().then(()=>Ge),void 0).then(e=>e.renderPOSHistory()),window.destroyBarcodeListener=z};window.setPOSViewMode=X;window.renderPOSStorefront=He;window.renderPOS=Re;window.destroyBarcodeListener=z;window.openPOSCartDrawer=te;window.closePOSCartDrawer=N;window.posSetQuickCash=oe;window.playCashierBeep=j;window.ensureCustomersLoaded=O;window.lookupPosMember=B;window.debouncedLookupPosMember=le;window.selectPosMember=ie;window.resetPosMember=ne;const ue=Object.freeze(Object.defineProperty({__proto__:null,addToCart:ee,addToCartWithVariant:ye,applyMemberToPos:U,clearCart:Te,closePOSCartDrawer:N,closePayModal:se,debouncedLookupPosMember:le,destroyBarcodeListener:z,ensureCustomersLoaded:O,lookupPosMember:B,openPOSCartDrawer:te,openPayModal:Me,playCashierBeep:j,posAddToCartQty:ke,posSetQuickCash:oe,printPOSReceipt:Ie,processPOSTx:De,removeFromCart:$e,renderPOS:Re,renderPOSStorefront:He,resetPosMember:ne,selectPosMember:ie,setItemDisc:Pe,setPOSViewMode:X,setPosCustomerType:je,setPosPayMethod:ae,setQty:Se,updatePosChange:re,updateQty:ve},Symbol.toStringTag,{value:"Module"})),q=e=>fe(e),ze=e=>new Date(e).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"});let E=new Date().toISOString().slice(0,10),T=[],V=null;const me=()=>{p("pos-hist-list")&&K("pos-hist-list",'<div class="flex justify-center py-12"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),V&&(V(),V=null);const t=new Date(E);t.setHours(0,0,0,0);const s=new Date(E);s.setHours(23,59,59,999),V=I.collection("freshmart").doc("cms_data").collection("pos_transactions").where("dateMs",">=",t.getTime()).where("dateMs","<=",s.getTime()).onSnapshot(a=>{T=a.docs.map(r=>r.data()).sort((r,l)=>(l.dateMs||0)-(r.dateMs||0)),xe()},a=>{console.error("[POS History]",a),w("Gagal memuat riwayat kasir","error"),T=[],xe()})},xe=()=>{const e=T.reduce((n,c)=>n+(c.status!=="void"&&c.total||0),0),t=T.filter(n=>n.status!=="void").length,s=T.filter(n=>n.status==="void").length,a={};T.filter(n=>n.status!=="void").forEach(n=>{const c=n.payment?.method||"other";a[c]=(a[c]||0)+(n.total||0)});const r={cash:"Tunai",qris:"QRIS",transfer:"Transfer",tempo:"Tempo"},l=Object.entries(a).map(([n,c])=>`<div class="flex justify-between text-xs"><span class="text-slate-500">${r[n]||n}</span><span class="font-bold text-slate-700 dark:text-slate-200">${q(c)}</span></div>`).join(""),o=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Total Omset</p>
            <p class="text-base font-black" style="color:var(--color-primary)">${q(e)}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Transaksi</p>
            <p class="text-base font-black text-slate-800 dark:text-white">${t}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Produk Terjual</p>
            <p class="text-base font-black text-slate-800 dark:text-white">${T.filter(n=>n.status!=="void").reduce((n,c)=>n+(c.items||[]).reduce((u,f)=>u+f.qty,0),0)}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Void</p>
            <p class="text-base font-black text-red-500">${s}</p>
        </div>
    </div>
    ${l?`<div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 mb-4 space-y-1.5">${l}</div>`:""}`,i=T.length===0?`<div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600"><i class="fa-solid fa-receipt text-4xl mb-3"></i><p class="font-semibold text-sm">Belum ada transaksi</p><p class="text-xs mt-1">${E}</p></div>`:T.map(n=>{const c=n.status==="void",u={cash:"emerald",qris:"blue",transfer:"violet",tempo:"amber"}[n.payment?.method]||"slate",f={cash:"Tunai",qris:"QRIS",transfer:"Transfer",tempo:"Tempo"}[n.payment?.method]||n.payment?.method;return`<div class="bg-white dark:bg-slate-800 border ${c?"border-red-200 dark:border-red-800 opacity-60":"border-slate-200 dark:border-slate-700"} rounded-2xl p-3 space-y-2 ${c?"":"hover:shadow-sm"} transition-all">
                <div class="flex items-start justify-between gap-2">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[10px] font-bold text-slate-500">${d(n.txId)}</span>
                            <span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-${u}-100 dark:bg-${u}-900/30 text-${u}-700 dark:text-${u}-400">${f}</span>
                            ${c?'<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600">VOID</span>':""}
                        </div>
                        <p class="text-[10px] text-slate-400 mt-0.5">${ze(n.dateMs)} · ${d(n.customer?.name||"Umum")}</p>
                    </div>
                    <div class="text-right shrink-0">
                        <p class="font-black text-sm ${c?"line-through text-slate-400":""}" style="${c?"":"color:var(--color-primary)"}">${q(n.total)}</p>
                        ${n.payment?.method==="cash"?`<p class="text-[10px] text-slate-400">Kembalian ${q(n.payment.change||0)}</p>`:""}
                    </div>
                </div>
                <div class="text-[10px] text-slate-400 flex flex-wrap gap-1">
                    ${(n.items||[]).map(h=>`<span class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded-md">${d(h.name)} ×${h.qty}</span>`).join("")}
                </div>
                ${c?"":`<div class="flex justify-end gap-2 pt-1">
                    <button onclick="window.printPOSReceiptFromHist(${JSON.stringify(n).replace(/"/g,"&quot;")})" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"><i class="fa-solid fa-print"></i>Cetak</button>
                    <button onclick="window.voidPOSTx('${d(n.txId)}')" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border border-red-200 dark:border-red-800 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"><i class="fa-solid fa-ban"></i>Void</button>
                </div>`}
            </div>`}).join("");K("pos-hist-rekap",o),K("pos-hist-list",i)},Ke=e=>{Ee("Void Transaksi",`Void transaksi ${e}?
Transaksi akan ditandai batal dan tidak dihitung dalam laporan.`,async()=>{try{await I.collection("freshmart").doc("cms_data").collection("pos_transactions").doc(e).update({status:"void"}),w("Transaksi berhasil divoid","success")}catch{w("Gagal void transaksi","error")}},"Ya, Void")},We=()=>{K("admin-content",`
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
                <input type="date" id="pos-hist-date" value="${E}"
                    class="text-sm font-bold text-slate-800 dark:text-white bg-transparent focus:outline-none"
                    onchange="window.posHistChangDate(this.value)">
            </div>
            <button onclick="window.posHistChangDate('${new Date().toISOString().slice(0,10)}')" class="px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Hari Ini</button>
        </div>

        <!-- Rekap -->
        <div id="pos-hist-rekap"></div>

        <!-- List Transaksi -->
        <div id="pos-hist-list" class="space-y-3"></div>
    </div>`),window.posHistChangDate=e=>{E=e;const t=p("pos-hist-date");t&&(t.value=e),me()},window.voidPOSTx=Ke,window.printPOSReceiptFromHist=e=>{F(()=>Promise.resolve().then(()=>ue),void 0).then(t=>t.printPOSReceipt(e))},window.__openPOSMain=()=>F(()=>Promise.resolve().then(()=>ue),void 0).then(e=>e.renderPOS()),me()},Ge=Object.freeze(Object.defineProperty({__proto__:null,renderPOSHistory:We,voidPOSTx:Ke},Symbol.toStringTag,{value:"Module"}));export{ee as addToCart,ye as addToCartWithVariant,U as applyMemberToPos,Te as clearCart,N as closePOSCartDrawer,se as closePayModal,le as debouncedLookupPosMember,z as destroyBarcodeListener,O as ensureCustomersLoaded,B as lookupPosMember,te as openPOSCartDrawer,Me as openPayModal,j as playCashierBeep,ke as posAddToCartQty,oe as posSetQuickCash,Ie as printPOSReceipt,De as processPOSTx,$e as removeFromCart,Re as renderPOS,He as renderPOSStorefront,ne as resetPosMember,ie as selectPosMember,Pe as setItemDisc,X as setPOSViewMode,je as setPosCustomerType,ae as setPosPayMethod,Se as setQty,re as updatePosChange,ve as updateQty};
