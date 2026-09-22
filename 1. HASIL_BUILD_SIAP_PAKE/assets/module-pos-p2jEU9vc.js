const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pos-variant-sheet-D2tC43LA.js","assets/module-print-DoqR8CYY.js"])))=>i.map(i=>d[i]);
import{d as K,_ as E}from"./module-member-CSBoVu1N.js";import{a as m,e as c,t as h,i as d,b as H,f as le,x as F,u as Oe}from"./module-print-DoqR8CYY.js";import{f as ee}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";let te=!1;const De=()=>te?Promise.resolve():E(()=>import("./pos-variant-sheet-D2tC43LA.js"),__vite__mapDeps([0,1])).then(()=>{te=!0});let b=[],A="",O="",M="grid";try{const e=localStorage.getItem("pos_view_mode");(e==="list"||e==="grid")&&(M=e)}catch{}let w={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},f="cash",k=0,D=0,P="",ae=null,U=null;const Q=e=>{M=e;try{localStorage.setItem("pos_view_mode",e)}catch{}const t=c("pos-view-btn-grid"),a=c("pos-view-btn-list");t&&a&&(e==="grid"?(t.style.background="var(--color-primary)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs",a.style.removeProperty("background"),a.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400"):(a.style.background="var(--color-primary)",a.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs",t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")),L()},T=e=>Math.max(0,parseInt(e)||0),x=e=>le(e),G=()=>b.reduce((e,t)=>e+t.subtotal,0),g=()=>Math.max(0,G()-T(D)),ie=()=>k-g(),j=()=>{try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,a=t.createOscillator(),r=t.createGain();a.type="sine",a.frequency.setValueAtTime(1400,t.currentTime),r.gain.setValueAtTime(.08,t.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.08),a.connect(r),r.connect(t.destination),a.start(),a.stop(t.currentTime+.08),setTimeout(()=>{t.close().catch(()=>{})},150)}catch{}},Le=(e,t)=>{if(!e||!e.wholesale||!e.wholesale.length)return null;const a=[...e.wholesale].sort((r,o)=>o.minQty-r.minQty);for(const r of a)if(t>=parseFloat(r.minQty))return parseFloat(r.price);return null},C=e=>{if(!e.isVariant){const t=(m.products||[]).find(r=>r&&String(r.id)===String(e.id)),a=t?Le(t,e.qty):null;a!==null?(e.basePrice=e.basePrice||e.price,e.price=a,e.isWholesale=!0):(e.basePrice&&(e.price=e.basePrice),e.isWholesale=!1)}return e.subtotal=Math.max(0,e.price*e.qty-T(e.discount)),e},Ae=()=>{const e=new Date,t=a=>String(a).padStart(2,"0");return`POS-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},ne=()=>{U&&clearInterval(U);const e=()=>{const t=c("pos-live-clock");if(!t)return;const a=new Date;t.textContent=a.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB"};e(),U=setInterval(e,1e3)},V=()=>{window.__posBarcodeFn&&(document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=null)},de=()=>{V(),window.__posBarcodeFn=e=>{if(!e||typeof e.key!="string")return;const t=window.curViewName||"";if(!(t==="view-pos-cashier"||t==="view-admin"&&window.cTab==="pos"))return;const r=document.activeElement?.tagName?.toLowerCase();if(!(r==="input"||r==="textarea"||r==="select"))if(e.key==="Enter"){if(P&&P.length>=3){const o=P.trim().toLowerCase(),n=(m.products||[]).find(s=>s&&s.isActive!=="false"&&s.isActive!==!1&&(s.barcode&&s.barcode.toLowerCase()===o||s.sku&&s.sku.toLowerCase()===o||s.id&&String(s.id).toLowerCase()===o));if(n)z(n.id),j(),h(`Ditambahkan: ${n.name}`,"success");else{const s=c("pos-search-input");s&&(s.value=P,A=P,L()),h("Barcode tidak ditemukan di katalog","warning")}P=""}}else e.key&&e.key.length===1&&(P=(P||"")+e.key,clearTimeout(ae),ae=setTimeout(()=>{P=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},z=e=>{const t=(m.products||[]).find(o=>o&&String(o.id)===String(e));if(!t)return;if(t.variants&&t.variants.length>0){De().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(e)});return}const r=b.find(o=>String(o.id)===String(e)&&!o.isVariant);if(r)r.qty+=1,C(r);else{const o=parseFloat(t.price)||0;b.push(C({id:t.id,name:t.name,price:o,basePrice:o,qty:1,discount:0,subtotal:o,isVariant:!1,isWholesale:!1}))}j(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),v()},ce=(e,t)=>{const a=(m.products||[]).find(o=>o&&String(o.id)===String(e));if(!a)return;const r=b.find(o=>String(o.id)===String(e)&&!o.isVariant);if(r)r.qty+=t,C(r);else{const o=parseFloat(a.price)||0,n=C({id:a.id,name:a.name,price:o,basePrice:o,qty:t,discount:0,subtotal:o*t,isVariant:!1,isWholesale:!1});b.push(n)}j(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),v()},pe=(e,t,a,r,o=1)=>{const n=`${e}__v${r}`,s=b.find(l=>l.cartKey===n);if(s)s.qty+=o,C(s);else{const i=`${(m.products||[]).find(p=>p&&String(p.id)===String(e))?.name||e} — ${t}`;b.push(C({id:e,cartKey:n,name:i,variantName:t,variantIdx:r,price:a,basePrice:a,qty:o,discount:0,subtotal:a*o,isVariant:!0,isWholesale:!1}))}j(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),v()},be=(e,t)=>{const a=b.find(r=>(r.cartKey||String(r.id))===String(e));a&&(a.qty=Math.max(1,a.qty+t),C(a),t>0&&j(),v())},xe=(e,t)=>{const a=b.find(r=>(r.cartKey||String(r.id))===String(e));a&&(a.qty=Math.max(1,T(t)),C(a),v())},ue=(e,t)=>{const a=b.find(r=>(r.cartKey||String(r.id))===String(e));a&&(a.discount=Math.min(T(t),a.price*a.qty),C(a),v())},me=e=>{b=b.filter(t=>(t.cartKey||String(t.id))!==String(e)),v(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},fe=()=>{if(b.length===0)return;const e=()=>{b=[],D=0,v(),h("Keranjang kasir dikosongkan.")};typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Hapus semua item dari transaksi saat ini?",e,"Ya, Kosongkan",!0):e()},W=()=>{const e=c("pos-mobile-cart-drawer"),t=c("pos-mobile-cart-sheet");e&&t&&(e.classList.remove("opacity-0","pointer-events-none"),e.classList.add("opacity-100"),t.classList.remove("translate-y-full"),t.classList.add("translate-y-0"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCartDrawer"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},I=(e=!1)=>{const t=c("pos-mobile-cart-drawer"),a=c("pos-mobile-cart-sheet");if(t&&a){const r=()=>{a.classList.add("translate-y-full"),a.classList.remove("translate-y-0"),t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100")};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCartDrawer",!1,r):r()}},He=e=>{if(e.img&&typeof e.img=="string")return F(e.img,"w150-rw");const t=(m.products||[]).find(a=>String(a.id)===String(e.id));return t&&t.img&&typeof t.img=="string"?F(t.img,"w150-rw"):""},L=()=>{const e=(m.products||[]).filter(s=>{if(!s||s.isActive==="false"||s.isActive===!1||O&&s.category!==O)return!1;if(A){const l=A.toLowerCase();return(s.name||"").toLowerCase().includes(l)||(s.barcode||"").toLowerCase().includes(l)||(s.sku||"").toLowerCase().includes(l)}return!0}),a=["Semua",...new Set((m.products||[]).filter(s=>s&&s.isActive!=="false"&&s.category).map(s=>s.category))].map(s=>{const l=s==="Semua",i=l?!O:O===s;return`<button onclick="window.posCatFilter('${d(l?"":s)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs ${i?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}" style="${i?"background:var(--color-primary)":""}">${d(s)}</button>`}).join(""),r=e.length===0?`<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
             <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
               <i class="fa-solid fa-box-open text-2xl"></i>
             </div>
             <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
             <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
           </div>`:e.map(s=>{const l=!!(s.img&&typeof s.img=="string"&&s.img.trim()),i=l?F(s.img,"w300-rw"):"",p=s.variants&&s.variants.length>0,y=s.wholesale&&s.wholesale.length>0,S=b.filter(q=>String(q.id)===String(s.id)).reduce((q,je)=>q+je.qty,0),_=d(String(s.id));return M==="list"?`
                <div class="group flex items-center gap-3 p-2.5 sm:p-3 bg-white dark:bg-slate-800 border ${S>0?"border-[var(--color-primary)] ring-1 ring-[var(--color-primary)]/40 shadow-xs":"border-slate-200/90 dark:border-slate-700/80 shadow-2xs"} rounded-2xl hover:border-[var(--color-primary)] hover:shadow-sm active:scale-[0.99] transition-all cursor-pointer select-none" onclick="window.posAddToCart('${_}')">
                    <!-- 54px Thumbnail -->
                    <div class="relative w-14 h-14 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700/50 shrink-0 border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                        ${l?`<img width="56" height="56" loading="lazy" decoding="async" src="${d(i)}" alt="${d(s.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                               <div class="hidden w-full h-full items-center justify-center text-slate-400 bg-slate-100 dark:bg-slate-800"><i class="fa-solid fa-box-open text-base text-slate-300"></i></div>`:'<div class="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100 dark:bg-slate-800"><i class="fa-solid fa-box-open text-base text-slate-300"></i></div>'}
                        ${S>0?`<span class="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full text-white text-[9px] font-black flex items-center justify-center shadow-md border border-white" style="background:var(--color-primary)">${S}</span>`:""}
                    </div>

                    <!-- Details -->
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-1.5 mb-0.5 flex-wrap">
                            ${s.category?`<span class="text-[9px] uppercase tracking-wider font-bold text-slate-400 truncate">${d(s.category)}</span>`:""}
                            ${p?'<span class="inline-flex items-center px-1.5 py-0.2 rounded text-[8px] font-black uppercase bg-indigo-600 text-white">VARIAN</span>':""}
                            ${y?'<span class="inline-flex items-center px-1.5 py-0.2 rounded text-[8px] font-black uppercase bg-amber-500 text-white">GROSIR</span>':""}
                        </div>
                        <h4 class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 truncate" title="${d(s.name)}">${d(s.name)}</h4>
                        <p class="text-xs sm:text-sm font-black mt-0.5" style="color:var(--color-primary)">${x(parseFloat(s.price)||0)}</p>
                    </div>

                    <!-- Action -->
                    <button onclick="event.stopPropagation(); window.posAddToCart('${_}')" class="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-xs hover:scale-110 active:scale-90 transition-all shrink-0 cursor-pointer" style="background:var(--color-primary)" title="Tambah ke keranjang">
                        <i class="fa-solid fa-plus text-xs"></i>
                    </button>
                </div>`:`
            <div class="group relative flex flex-col bg-white dark:bg-slate-800 border ${S>0?"border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/30 shadow-md":"border-slate-200/90 dark:border-slate-700/80 shadow-2xs"} rounded-2xl p-2 sm:p-2.5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] cursor-pointer select-none overflow-hidden" onclick="window.posAddToCart('${_}')">
                
                <!-- Guaranteed Image Box (1:1 Ratio + Min Height) -->
                <div class="relative w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700/40 flex items-center justify-center shrink-0 mb-2 border border-slate-100 dark:border-slate-700/60" style="aspect-ratio: 1 / 1; min-height: 120px;">
                    <!-- Badges INSIDE photo container -->
                    <div class="absolute top-1.5 left-1.5 flex flex-col gap-1 z-10 pointer-events-none">
                        ${p?'<span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[8px] font-black uppercase tracking-wider bg-indigo-600 text-white shadow-xs"><i class="fa-solid fa-layer-group text-[7px]"></i> VARIAN</span>':""}
                        ${y?'<span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[8px] font-black uppercase tracking-wider bg-amber-500 text-white shadow-xs"><i class="fa-solid fa-tags text-[7px]"></i> GROSIR</span>':""}
                    </div>
                    ${S>0?`
                    <div class="absolute top-1.5 right-1.5 z-10 pointer-events-none">
                        <span class="w-6 h-6 rounded-full text-white flex items-center justify-center text-[10px] font-black shadow-md border-2 border-white dark:border-slate-800" style="background:var(--color-primary)">${S}</span>
                    </div>`:""}

                    ${l?`<img width="300" height="300" loading="lazy" decoding="async" src="${d(i)}" alt="${d(s.name)}" 
                             onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" 
                             class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
                           <div class="hidden w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-400 p-2 text-center">
                             <i class="fa-solid fa-box-open text-2xl text-slate-300 dark:text-slate-600 mb-1"></i>
                             <span class="text-[8px] font-bold uppercase text-slate-400 dark:text-slate-500 truncate max-w-full">${d(s.category||"Toko")}</span>
                           </div>`:`<div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 text-slate-400 p-2 text-center">
                             <div class="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 shadow-2xs flex items-center justify-center text-slate-400 dark:text-slate-500 mb-1">
                               <i class="fa-solid fa-box-open text-base"></i>
                             </div>
                             <span class="text-[8px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 truncate max-w-full">${d(s.category||"Produk")}</span>
                           </div>`}
                </div>

                <!-- Product Details -->
                <div class="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                        ${s.category?`<p class="text-[9px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 mb-0.5 truncate">${d(s.category)}</p>`:""}
                        <h4 class="text-xs sm:text-[13px] font-bold text-slate-800 dark:text-slate-100 line-clamp-2 leading-snug mb-1.5 min-h-[30px]" title="${d(s.name)}">${d(s.name)}</h4>
                    </div>
                    <div class="flex items-center justify-between pt-1.5 border-t border-slate-100 dark:border-slate-700/60 mt-auto gap-1">
                        <div class="min-w-0">
                            <p class="text-xs sm:text-sm font-black truncate" style="color:var(--color-primary)">${x(parseFloat(s.price)||0)}</p>
                        </div>
                        <button onclick="event.stopPropagation(); window.posAddToCart('${_}')" class="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-white shadow-xs hover:scale-110 active:scale-90 transition-all cursor-pointer shrink-0" style="background:var(--color-primary)" title="Tambah ke keranjang">
                            <i class="fa-solid fa-plus text-xs"></i>
                        </button>
                    </div>
                </div>
            </div>`}).join(""),o=c("pos-cat-filter"),n=c("pos-catalog-grid");o&&(o.innerHTML=a),n&&(M==="list"?n.className="flex flex-col gap-2 p-2.5 sm:p-3 overflow-y-auto flex-1 content-start pb-28 lg:pb-6":n.className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2.5 sm:gap-3 p-2.5 sm:p-3 overflow-y-auto flex-1 content-start pb-28 lg:pb-6",n.innerHTML=r)},v=()=>{const e=b.reduce((l,i)=>l+i.qty,0),t=G(),a=g(),r=x(a),o=x(t),n=b.length===0?`<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`:b.map(l=>{const i=d(String(l.cartKey||l.id)),p=He(l);return`
            <div class="group flex items-center gap-2.5 p-2 sm:p-2.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[var(--color-primary)] transition-all">
                <!-- 40px Thumbnail -->
                <div class="w-10 h-10 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                    ${p?`<img width="40" height="40" loading="lazy" src="${d(p)}" alt="${d(l.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                           <div class="hidden w-full h-full items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>`:'<div class="w-full h-full flex items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>'}
                </div>
                <!-- Details -->
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug">${d(l.name)}</p>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        ${l.isWholesale?'<span class="inline-flex items-center text-[8px] font-black px-1 rounded bg-amber-500 text-white shadow-2xs">GROSIR</span>':""}
                        ${l.isVariant?'<span class="inline-flex items-center text-[8px] font-black px-1 rounded bg-indigo-600 text-white shadow-2xs">VARIAN</span>':""}
                        <span class="text-[10px] text-slate-500 font-medium">
                            ${l.isWholesale&&l.basePrice?`<span class="line-through text-slate-400">${x(l.basePrice)}</span> <span class="text-amber-600 font-bold">${x(l.price)}</span>`:x(l.price)}
                        </span>
                    </div>
                    <div class="flex items-center gap-1 mt-1">
                        <span class="text-[9px] text-slate-400 font-bold uppercase">Diskon:</span>
                        <input type="number" min="0" placeholder="0" value="${l.discount||""}" onchange="window.posSetItemDisc('${i}',this.value)"
                            class="w-16 text-[10px] font-bold border border-slate-200 dark:border-slate-600 rounded-lg px-1.5 py-0.5 bg-slate-50 dark:bg-slate-700 text-right focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                </div>
                <!-- Stepper & Subtotal -->
                <div class="flex flex-col items-end gap-1 shrink-0">
                    <div class="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-700/80 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600">
                        <button onclick="window.posUpdateQty('${i}',-1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90">−</button>
                        <input type="number" min="1" value="${l.qty}" onchange="window.posSetQty('${i}',this.value)"
                            class="w-6 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none">
                        <button onclick="window.posUpdateQty('${i}',1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90">+</button>
                    </div>
                    <p class="text-xs font-black" style="color:var(--color-primary)">${x(l.subtotal)}</p>
                    <button onclick="window.posRemoveItem('${i}')" class="text-slate-400 hover:text-rose-500 text-[11px] p-0.5 transition-colors" title="Hapus item">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>`}).join("");document.querySelectorAll(".pos-cart-items-target").forEach(l=>l.innerHTML=n),document.querySelectorAll(".pos-subtotal-target").forEach(l=>l.textContent=o),document.querySelectorAll(".pos-total-target").forEach(l=>l.textContent=r),document.querySelectorAll(".pos-item-count-target").forEach(l=>l.textContent=String(e)),document.querySelectorAll(".pos-global-disc-target").forEach(l=>{document.activeElement!==l&&(l.value=D||"")}),document.querySelectorAll(".pos-pay-btn-target").forEach(l=>{l.disabled=b.length===0;const i=l.querySelector(".btn-text");i&&(i.textContent=b.length>0?`BAYAR — ${r}`:"PROSES PEMBAYARAN")});const s=c("pos-mobile-floating-bar");s&&(b.length>0?(s.classList.remove("translate-y-32","opacity-0","pointer-events-none"),s.classList.add("translate-y-0","opacity-100")):(s.classList.add("translate-y-32","opacity-0","pointer-events-none"),s.classList.remove("translate-y-0","opacity-100"),I(!0)))},ge=()=>{if(b.length===0){h("Keranjang masih kosong!","warning");return}typeof window.pushModalHistory=="function"&&window.pushModalHistory("posPayment"),w={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},f="cash",k=g(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-pay-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md max-h-[94vh] flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-800">
        <!-- Header -->
        <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <div>
            <h2 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-cash-register" style="color:var(--color-primary)"></i>
              <span>Proses Pembayaran Kasir</span>
            </h2>
            <p class="text-xs text-slate-500 mt-0.5">Total Tagihan: <span class="font-black text-sm" style="color:var(--color-primary)">${x(g())}</span></p>
          </div>
          <button onclick="window.closePayModal()" class="w-9 h-9 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 hover:text-slate-800 dark:hover:text-white text-lg flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
        </div>

        <!-- Body Scrollable -->
        <div class="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1">
          <!-- Pilih Pelanggan -->
          <div>
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Tipe Pelanggan</label>
            <div class="grid grid-cols-3 gap-2 mb-2.5">
              <button onclick="window.setPosCustomerType('umum')" id="pos-ctype-umum" type="button" class="py-2 rounded-xl text-[10px] font-black uppercase border transition-all" style="background:var(--color-primary);color:white;border-color:var(--color-primary)"><i class="fa-solid fa-user block text-sm mb-1"></i>Umum</button>
              <button onclick="window.setPosCustomerType('member')" id="pos-ctype-member" type="button" class="py-2 rounded-xl text-[10px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-id-card block text-sm mb-1"></i>Member</button>
              <button onclick="window.setPosCustomerType('tempo')" id="pos-ctype-tempo" type="button" class="py-2 rounded-xl text-[10px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-hourglass-half block text-sm mb-1"></i>Tempo</button>
            </div>
            <div id="pos-customer-fields">
              <input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">
            </div>
          </div>

          <!-- Metode Bayar -->
          <div>
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Metode Pembayaran</label>
            <div class="grid grid-cols-4 gap-1.5 mb-3">
              <button onclick="window.setPosPayMethod('cash')" id="pos-pay-cash" type="button" class="py-2 rounded-xl text-[9px] font-black uppercase border transition-all" style="background:var(--color-primary);color:white;border-color:var(--color-primary)"><i class="fa-solid fa-money-bill-wave block text-sm mb-1"></i>Tunai</button>
              <button onclick="window.setPosPayMethod('qris')" id="pos-pay-qris" type="button" class="py-2 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-qrcode block text-sm mb-1"></i>QRIS</button>
              <button onclick="window.setPosPayMethod('transfer')" id="pos-pay-transfer" type="button" class="py-2 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-building-columns block text-sm mb-1"></i>Bank</button>
              <button onclick="window.setPosPayMethod('tempo')" id="pos-pay-tempo" type="button" class="py-2 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-hourglass-half block text-sm mb-1"></i>Tempo</button>
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
    </div>`),we("cash")},Y=(e=!1)=>{const t=c("pos-pay-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posPayment",!1,()=>t.remove()):t.remove())},he=(e,t,a)=>{a.forEach(r=>{const o=c(`${e}-${r}`);o&&(r===t?(o.style.background="var(--color-primary)",o.style.color="white",o.style.borderColor="var(--color-primary)"):(o.style.removeProperty("background"),o.style.removeProperty("color"),o.style.removeProperty("border-color")))})},we=e=>{const t=c("pos-pay-detail");if(!t)return;const a=g(),r=`
      <div class="flex justify-between items-center py-2 px-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs">
        <span class="text-slate-500 font-medium">Total yang Harus Dibayar</span>
        <span class="font-black text-sm" style="color:var(--color-primary)">${x(a)}</span>
      </div>`;if(e==="cash"){const n=[{label:"Uang Pas",val:a,isPas:!0},{label:"10.000",val:1e4},{label:"20.000",val:2e4},{label:"50.000",val:5e4},{label:"100.000",val:1e5},{label:"200.000",val:2e5},{label:"500.000",val:5e5}].map(s=>`
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
                    <input id="pos-paid-input" type="number" min="0" placeholder="${a}" value="${k||""}"
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
                <div id="pos-change-box" class="mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${k>=a?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}">
                    <div>
                        <p class="text-[9px] font-black uppercase tracking-wider text-slate-400">Status Kembalian</p>
                        <p id="pos-change-label" class="text-xs font-bold ${k>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-700 dark:text-rose-400"}">
                            ${k>=a?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"}
                        </p>
                    </div>
                    <span id="pos-change-display" class="text-base font-black ${k>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">
                        ${x(Math.abs(ie()))}
                    </span>
                </div>
            </div>
        `}else if(e==="qris"){const o=m.payment?.qrisUrl||"";t.innerHTML=`
          ${r}
          ${o?`<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${d(o)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>`:'<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>'}`}else if(e==="transfer"){const o=(m.banks||[]).filter(n=>n&&n.name);t.innerHTML=`
          ${r}
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Rekening Tujuan Toko</label>
          <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 focus:outline-none">
            ${o.length?o.map(n=>`<option>${d(n.name)} — ${d(n.number||"")} a/n ${d(n.holder||"")}</option>`).join(""):"<option>Rekening bank belum diatur</option>"}
          </select>`}else e==="tempo"&&(t.innerHTML=`
          ${r}
          <div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-700/80 mb-2.5">
            <p class="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half"></i> Pembayaran Tempo / Piutang</p>
            <p class="text-[10px] text-amber-700 dark:text-amber-400 mt-1">Transaksi otomatis dicatat sebagai piutang di database toko.</p>
          </div>
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Uang Muka / DP (Rp) — opsional</label>
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="0" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`)},ke=e=>{w.isMember=e==="member",w.isNewTempo=e==="tempo",he("pos-ctype",e,["umum","member","tempo"]);const t=c("pos-customer-fields");t&&(e==="umum"?t.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">':e==="member"?t.innerHTML=`
          <div class="flex gap-2">
            <input id="pos-cust-phone" type="tel" placeholder="No. HP Member Toko" class="flex-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">
            <button onclick="window.lookupPosMember()" type="button" class="px-3.5 py-2 rounded-xl text-white text-xs font-bold" style="background:var(--color-primary)"><i class="fa-solid fa-magnifying-glass mr-1"></i>Cek</button>
          </div>
          <div id="pos-member-result" class="mt-2"></div>`:e==="tempo"&&(J("tempo"),t.innerHTML=`
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`))},J=e=>{f=e,he("pos-pay",e,["cash","qris","transfer","tempo"]),we(e)},X=e=>{k=T(e);const t=g(),a=k-t,r=c("pos-change-display"),o=c("pos-change-label"),n=c("pos-change-box"),s=c("pos-process-btn");r&&(r.textContent=x(Math.abs(a))),o&&(o.textContent=a>=0?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"),r&&(r.className=`text-base font-black ${a>=0?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`),n&&(n.className=`mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${a>=0?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}`),s&&f==="cash"&&(s.disabled=a<0,s.classList.toggle("opacity-50",a<0))},Z=e=>{const t=c("pos-paid-input");t&&(t.value=e,X(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},ve=()=>{const e=c("pos-cust-phone")?.value?.trim();if(!e){h("Masukkan nomor HP","warning");return}const t=e.replace(/\D/g,""),a=(m.customers||[]).find(o=>o&&o.phone&&o.phone.replace(/\D/g,"").endsWith(t)),r=c("pos-member-result");r&&(a?(w.name=a.name||"",w.memberId=a.id||a.phone,r.innerHTML=`<div class="flex items-center gap-2 p-2.5 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200"><i class="fa-solid fa-circle-check text-emerald-500"></i><div><p class="text-xs font-bold text-emerald-700">${d(a.name)}</p><p class="text-[10px] text-emerald-600">Member Terverifikasi ✓</p></div></div>`):r.innerHTML='<p class="text-xs text-rose-500 font-semibold p-2 bg-rose-50 rounded-xl border border-rose-200"><i class="fa-solid fa-circle-xmark mr-1"></i>Tidak ditemukan di database member</p>')},ye=async()=>{if(b.length===0){h("Keranjang kosong!","warning");return}const e=c("pos-cust-name")?.value?.trim()||"Pelanggan Umum",t=c("pos-cust-phone")?.value?.trim()||"";if(w.isNewTempo&&!t){h("No. HP wajib diisi untuk tempo!","warning");return}if(f==="cash"&&(k=T(c("pos-paid-input")?.value||0),k<g())){h(`Uang kurang! Minimal ${x(g())}`,"warning");return}w.name=e,w.phone=t;const a=f==="tempo"?T(c("pos-dp-input")?.value||0):0,r=f==="transfer"&&c("pos-bank-sel")?.value||"",o=c("pos-process-btn");o&&(o.disabled=!0,o.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');try{const n=Ae(),s=typeof window.getCashierSession=="function"?window.getCashierSession():null,l=s?.name||m.store?.name||"Kasir",i=s?.uid||window.__currentAdminUid||"admin",p={txId:n,date:ee.firestore.FieldValue.serverTimestamp(),dateMs:Date.now(),cashier:i,cashierName:l,customer:{name:w.name||"Pelanggan Umum",phone:w.phone||"",isMember:w.isMember||!1,memberId:w.memberId||null},items:b.map(u=>({id:u.id,name:u.name,price:u.price,qty:u.qty,discount:u.discount||0,subtotal:u.subtotal,variantName:u.variantName||"",isVariant:u.isVariant||!1,isWholesale:u.isWholesale||!1})),subtotal:G(),globalDiscount:T(D),total:g(),payment:{method:f,paid:f==="cash"?k:f==="tempo"?a:g(),change:f==="cash"?ie():0,bank:r,dp:a,tempoBalance:f==="tempo"?g()-a:0},status:f==="tempo"?"tempo":"paid",notes:"",source:"pos"};await K.collection("freshmart").doc("cms_data").collection("pos_transactions").doc(n).set(p),f==="tempo"&&await K.collection("freshmart_orders").doc(n).set({orderId:n,source:"pos",dateString:new Date().toISOString(),customerName:p.customer.name,customerPhone:p.customer.phone,items:b.map(u=>({id:u.id,name:u.name,price:u.price,qty:u.qty})),total:g(),payment:{method:"tempo",paymentStatus:"hutang",paid:a,tempoBalance:g()-a,tempoDueDate:Date.now()+7*864e5,tempoPenaltyRate:1,tempoPenaltyStopped:!1},status:"Diproses",isTempo:!0,timestamp:ee.firestore.FieldValue.serverTimestamp()}),Y(),I(!0);const y={...p};b=[],D=0,v(),L(),Re(y)}catch(n){console.error("[POS] Error:",n),h("Gagal menyimpan transaksi. Coba lagi.","error"),o&&(o.disabled=!1,o.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi')}},Re=e=>{const t=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${x(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,a=JSON.stringify(e).replace(/"/g,"&quot;");document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">${d(e.txId)}</p>
          <p class="text-2xl font-black mb-1" style="color:var(--color-primary)">${x(e.total)}</p>
          ${t}
        </div>
        <div class="px-6 pb-6 flex flex-col gap-2">
          <button onclick="window.printPOSReceipt(${a})" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)"><i class="fa-solid fa-print"></i> Cetak Struk Thermal</button>
          <button onclick="document.getElementById('pos-success-modal')?.remove()" class="w-full py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 transition-all cursor-pointer">Transaksi Baru</button>
        </div>
      </div>
    </div>`)},Se=e=>{document.getElementById("pos-success-modal")?.remove();const t=m.store?.name||"TOKO PUTRI",a=m.store?.wa||"",r=m.store?.address||"",o=new Date(e.dateMs).toLocaleString("id-ID"),n=(e.items||[]).map(l=>`<tr><td style="padding:2px 0;word-wrap:break-word">${d(l.name)}</td><td style="text-align:right;padding:2px 4px;white-space:nowrap">${l.qty}x ${x(l.price)}</td><td style="text-align:right;padding:2px 0;white-space:nowrap">${x(l.subtotal)}</td></tr>`).join(""),s=window.open("","_blank","width=420,height=720");if(!s){h("Izinkan popup untuk cetak struk","warning");return}s.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Struk POS</title>
    <style>*{box-sizing:border-box}body{font-family:'Courier New',monospace;font-size:12px;max-width:300px;margin:0 auto;padding:12px}
    h2{text-align:center;font-size:14px;font-weight:900;margin:2px 0;text-transform:uppercase}p{margin:1px 0;text-align:center;font-size:11px}.left{text-align:left}
    table{width:100%;border-collapse:collapse}.line{border-top:1px dashed #333;margin:6px 0}.total{font-weight:900;font-size:13px}
    </style></head><body>
    <h2>${t}</h2>${r?`<p>${d(r)}</p>`:""}${a?`<p>WA: ${d(a)}</p>`:""}
    <div class="line"></div>
    <p class="left">No: <b>${d(e.txId)}</b></p><p class="left">Tgl: ${d(o)}</p>
    <p class="left">Kasir: ${d(e.cashierName)}</p><p class="left">Pelanggan: ${d(e.customer?.name||"Umum")}</p>
    ${e.customer?.phone?`<p class="left">HP: ${d(e.customer.phone)}</p>`:""}
    <div class="line"></div><table>${n}</table><div class="line"></div>
    <table>
    <tr><td>Subtotal</td><td style="text-align:right">${x(e.subtotal)}</td></tr>
    ${(e.globalDiscount||0)>0?`<tr><td>Diskon</td><td style="text-align:right">- ${x(e.globalDiscount)}</td></tr>`:""}
    <tr class="total"><td>TOTAL</td><td style="text-align:right">${x(e.total)}</td></tr>
    ${e.payment.method==="cash"?`<tr><td>Bayar</td><td style="text-align:right">${x(e.payment.paid)}</td></tr><tr><td><b>Kembalian</b></td><td style="text-align:right"><b>${x(e.payment.change)}</b></td></tr>`:""}
    ${e.payment.method==="tempo"?`<tr><td>DP</td><td style="text-align:right">${x(e.payment.dp||0)}</td></tr><tr><td>Sisa Piutang</td><td style="text-align:right">${x(e.payment.tempoBalance||0)}</td></tr>`:""}
    <tr><td>Metode</td><td style="text-align:right">${d(e.payment.method.toUpperCase())}</td></tr>
    </table><div class="line"></div>
    <p style="text-align:center;font-size:10px">*** Terima Kasih ***</p>
    <p style="text-align:center;font-size:9px">Barang yang sudah dibeli tidak dapat dikembalikan</p>
    <script>window.onload=()=>{window.print();setTimeout(()=>window.close(),800)}<\/script>
    </body></html>`),s.document.close()},Pe=({isStorefront:e})=>{const a=(typeof window.getCashierSession=="function"?window.getCashierSession():null)?.name||(e?"Kasir":"Admin Seller"),r=d(m.store?.name||"Toko Putri");return`
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
                            <span class="text-[10px] text-white/90 font-medium truncate">${d(a)}</span>
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
                <div id="pos-catalog-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2.5 sm:gap-3 p-2.5 sm:p-3 overflow-y-auto flex-1 content-start pb-28 lg:pb-6"></div>
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
                <div class="p-3.5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 space-y-2 shrink-0">
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
    `},$e=()=>{A="",O="",b=[],D=0;const e=c("view-pos-cashier");e&&(e.innerHTML=Pe({isStorefront:!0}),L(),v(),de(),ne(),Ce())},Te=()=>{A="",O="",c("admin-content")&&(H("admin-content",`<div style="height:calc(100vh - 105px)">${Pe({isStorefront:!1})}</div>`),L(),v(),de(),ne(),Ce())},Ce=()=>{window.setPOSViewMode=Q,window.posAddToCart=z,window.posAddToCartQty=ce,window.addToCartPOSWithVariant=pe,window.posUpdateQty=be,window.posSetQty=xe,window.posSetItemDisc=ue,window.posRemoveItem=me,window.posClearCart=fe,window.openPayModal=ge,window.closePayModal=Y,window.setPosCustomerType=ke,window.setPosPayMethod=J,window.updatePosChange=X,window.posSetQuickCash=Z,window.lookupPosMember=ve,window.processPOSTx=ye,window.printPOSReceipt=Se,window.posSetGlobalDisc=e=>{D=T(e),v()},window.posCatFilter=e=>{O=e,L()},window.posSearchFn=e=>{A=e,L()},window.openPOSCartDrawer=W,window.closePOSCartDrawer=I,window.playCashierBeep=j,window.openPOSHistory=()=>E(()=>Promise.resolve().then(()=>Ne),void 0).then(e=>e.renderPOSHistory()),window.destroyBarcodeListener=V};window.setPOSViewMode=Q;window.renderPOSStorefront=$e;window.renderPOS=Te;window.destroyBarcodeListener=V;window.openPOSCartDrawer=W;window.closePOSCartDrawer=I;window.posSetQuickCash=Z;window.playCashierBeep=j;const se=Object.freeze(Object.defineProperty({__proto__:null,addToCart:z,addToCartWithVariant:pe,clearCart:fe,closePOSCartDrawer:I,closePayModal:Y,destroyBarcodeListener:V,lookupPosMember:ve,openPOSCartDrawer:W,openPayModal:ge,playCashierBeep:j,posAddToCartQty:ce,posSetQuickCash:Z,printPOSReceipt:Se,processPOSTx:ye,removeFromCart:me,renderPOS:Te,renderPOSStorefront:$e,setItemDisc:ue,setPOSViewMode:Q,setPosCustomerType:ke,setPosPayMethod:J,setQty:xe,updatePosChange:X,updateQty:be},Symbol.toStringTag,{value:"Module"})),N=e=>le(e),Ie=e=>new Date(e).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"});let R=new Date().toISOString().slice(0,10),$=[],B=null;const re=()=>{c("pos-hist-list")&&H("pos-hist-list",'<div class="flex justify-center py-12"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),B&&(B(),B=null);const t=new Date(R);t.setHours(0,0,0,0);const a=new Date(R);a.setHours(23,59,59,999),B=K.collection("freshmart").doc("cms_data").collection("pos_transactions").where("dateMs",">=",t.getTime()).where("dateMs","<=",a.getTime()).onSnapshot(r=>{$=r.docs.map(o=>o.data()).sort((o,n)=>(n.dateMs||0)-(o.dateMs||0)),oe()},r=>{console.error("[POS History]",r),h("Gagal memuat riwayat kasir","error"),$=[],oe()})},oe=()=>{const e=$.reduce((i,p)=>i+(p.status!=="void"&&p.total||0),0),t=$.filter(i=>i.status!=="void").length,a=$.filter(i=>i.status==="void").length,r={};$.filter(i=>i.status!=="void").forEach(i=>{const p=i.payment?.method||"other";r[p]=(r[p]||0)+(i.total||0)});const o={cash:"Tunai",qris:"QRIS",transfer:"Transfer",tempo:"Tempo"},n=Object.entries(r).map(([i,p])=>`<div class="flex justify-between text-xs"><span class="text-slate-500">${o[i]||i}</span><span class="font-bold text-slate-700 dark:text-slate-200">${N(p)}</span></div>`).join(""),s=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Total Omset</p>
            <p class="text-base font-black" style="color:var(--color-primary)">${N(e)}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Transaksi</p>
            <p class="text-base font-black text-slate-800 dark:text-white">${t}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Produk Terjual</p>
            <p class="text-base font-black text-slate-800 dark:text-white">${$.filter(i=>i.status!=="void").reduce((i,p)=>i+(p.items||[]).reduce((y,u)=>y+u.qty,0),0)}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Void</p>
            <p class="text-base font-black text-red-500">${a}</p>
        </div>
    </div>
    ${n?`<div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 mb-4 space-y-1.5">${n}</div>`:""}`,l=$.length===0?`<div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600"><i class="fa-solid fa-receipt text-4xl mb-3"></i><p class="font-semibold text-sm">Belum ada transaksi</p><p class="text-xs mt-1">${R}</p></div>`:$.map(i=>{const p=i.status==="void",y={cash:"emerald",qris:"blue",transfer:"violet",tempo:"amber"}[i.payment?.method]||"slate",u={cash:"Tunai",qris:"QRIS",transfer:"Transfer",tempo:"Tempo"}[i.payment?.method]||i.payment?.method;return`<div class="bg-white dark:bg-slate-800 border ${p?"border-red-200 dark:border-red-800 opacity-60":"border-slate-200 dark:border-slate-700"} rounded-2xl p-3 space-y-2 ${p?"":"hover:shadow-sm"} transition-all">
                <div class="flex items-start justify-between gap-2">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[10px] font-bold text-slate-500">${d(i.txId)}</span>
                            <span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-${y}-100 dark:bg-${y}-900/30 text-${y}-700 dark:text-${y}-400">${u}</span>
                            ${p?'<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600">VOID</span>':""}
                        </div>
                        <p class="text-[10px] text-slate-400 mt-0.5">${Ie(i.dateMs)} · ${d(i.customer?.name||"Umum")}</p>
                    </div>
                    <div class="text-right shrink-0">
                        <p class="font-black text-sm ${p?"line-through text-slate-400":""}" style="${p?"":"color:var(--color-primary)"}">${N(i.total)}</p>
                        ${i.payment?.method==="cash"?`<p class="text-[10px] text-slate-400">Kembalian ${N(i.payment.change||0)}</p>`:""}
                    </div>
                </div>
                <div class="text-[10px] text-slate-400 flex flex-wrap gap-1">
                    ${(i.items||[]).map(S=>`<span class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded-md">${d(S.name)} ×${S.qty}</span>`).join("")}
                </div>
                ${p?"":`<div class="flex justify-end gap-2 pt-1">
                    <button onclick="window.printPOSReceiptFromHist(${JSON.stringify(i).replace(/"/g,"&quot;")})" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"><i class="fa-solid fa-print"></i>Cetak</button>
                    <button onclick="window.voidPOSTx('${d(i.txId)}')" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border border-red-200 dark:border-red-800 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"><i class="fa-solid fa-ban"></i>Void</button>
                </div>`}
            </div>`}).join("");H("pos-hist-rekap",s),H("pos-hist-list",l)},Me=e=>{Oe("Void Transaksi",`Void transaksi ${e}?
Transaksi akan ditandai batal dan tidak dihitung dalam laporan.`,async()=>{try{await K.collection("freshmart").doc("cms_data").collection("pos_transactions").doc(e).update({status:"void"}),h("Transaksi berhasil divoid","success")}catch{h("Gagal void transaksi","error")}},"Ya, Void")},_e=()=>{H("admin-content",`
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
                <input type="date" id="pos-hist-date" value="${R}"
                    class="text-sm font-bold text-slate-800 dark:text-white bg-transparent focus:outline-none"
                    onchange="window.posHistChangDate(this.value)">
            </div>
            <button onclick="window.posHistChangDate('${new Date().toISOString().slice(0,10)}')" class="px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Hari Ini</button>
        </div>

        <!-- Rekap -->
        <div id="pos-hist-rekap"></div>

        <!-- List Transaksi -->
        <div id="pos-hist-list" class="space-y-3"></div>
    </div>`),window.posHistChangDate=e=>{R=e;const t=c("pos-hist-date");t&&(t.value=e),re()},window.voidPOSTx=Me,window.printPOSReceiptFromHist=e=>{E(()=>Promise.resolve().then(()=>se),void 0).then(t=>t.printPOSReceipt(e))},window.__openPOSMain=()=>E(()=>Promise.resolve().then(()=>se),void 0).then(e=>e.renderPOS()),re()},Ne=Object.freeze(Object.defineProperty({__proto__:null,renderPOSHistory:_e,voidPOSTx:Me},Symbol.toStringTag,{value:"Module"}));export{z as addToCart,pe as addToCartWithVariant,fe as clearCart,I as closePOSCartDrawer,Y as closePayModal,V as destroyBarcodeListener,ve as lookupPosMember,W as openPOSCartDrawer,ge as openPayModal,j as playCashierBeep,ce as posAddToCartQty,Z as posSetQuickCash,Se as printPOSReceipt,ye as processPOSTx,me as removeFromCart,Te as renderPOS,$e as renderPOSStorefront,ue as setItemDisc,Q as setPOSViewMode,ke as setPosCustomerType,J as setPosPayMethod,xe as setQty,X as updatePosChange,be as updateQty};
