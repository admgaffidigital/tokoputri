const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pos-variant-sheet-DWhoZtix.js","assets/module-print-C2-MjUR_.js"])))=>i.map(i=>d[i]);
import{d as Q,_ as ct}from"./module-member-CX-6tf_7.js";import{a as p,t as w,e as d,i,ar as oe,b as pt,f as bt,x as me}from"./module-print-C2-MjUR_.js";import{f as be}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";let $e=!1;const De=()=>$e?Promise.resolve():ct(()=>import("./pos-variant-sheet-DWhoZtix.js"),__vite__mapDeps([0,1])).then(()=>{$e=!0});let m=[],W="",z="",N="grid";try{const e=localStorage.getItem("pos_view_mode");(e==="list"||e==="grid")&&(N=e)}catch{}let u={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},$="cash",D=0,O=0,C="rp",M=0,R="",Te=null,ue=null,U=null,se=null,J=null,re=!0,xe="environment",ee=!1,q=null,Me="",Ce=0;const He=e=>{N=e;try{localStorage.setItem("pos_view_mode",e)}catch{}const t=d("pos-view-btn-grid"),a=d("pos-view-btn-list");t&&a&&(e==="grid"?(t.style.background="var(--color-primary)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs",a.style.removeProperty("background"),a.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400"):(a.style.background="var(--color-primary)",a.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs",t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")),j()},V=e=>Math.max(0,parseInt(e)||0),f=e=>bt(e),_=()=>m.reduce((e,t)=>e+t.subtotal,0),F=()=>{if(C==="percent"){const e=Math.min(100,Math.max(0,parseFloat(M)||0));return Math.round(_()*e/100)}return Math.min(_(),V(M||O))},T=()=>Math.max(0,_()-F()),Le=()=>D-T(),te=e=>{if(!(p.store?.useStock!==!1))return{isManaged:!1,totalStock:9999,isOutOfStock:!1,isLowStock:!1};let a=0;return e.variants&&e.variants.length>0?a=e.variants.reduce((s,r)=>s+(parseFloat(r.stock)||0),0):a=parseFloat(e.stock)||0,{isManaged:!0,totalStock:a,isOutOfStock:a<=0,isLowStock:a>0&&a<=5}},K=()=>{try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,a=t.createOscillator(),s=t.createGain();a.type="sine",a.frequency.setValueAtTime(1400,t.currentTime),s.gain.setValueAtTime(.08,t.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.08),a.connect(s),s.connect(t.destination),a.start(),a.stop(t.currentTime+.08),setTimeout(()=>{t.close().catch(()=>{})},150)}catch{}},ut=(e,t)=>{if(!e||!e.wholesale||!e.wholesale.length)return null;const a=[...e.wholesale].sort((s,r)=>r.minQty-s.minQty);for(const s of a)if(t>=parseFloat(s.minQty))return parseFloat(s.price);return null},E=e=>{if(!e.isVariant){const t=(p.products||[]).find(s=>s&&String(s.id)===String(e.id)),a=t?ut(t,e.qty):null;a!==null?(e.basePrice=e.basePrice||e.price,e.price=a,e.isWholesale=!0):(e.basePrice&&(e.price=e.basePrice),e.isWholesale=!1)}return e.subtotal=Math.max(0,e.price*e.qty-V(e.discount)),e},mt=()=>{const e=new Date,t=a=>String(a).padStart(2,"0");return`POS-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},Oe=()=>{ue&&clearInterval(ue);const e=()=>{const t=d("pos-live-clock");if(!t)return;const a=new Date;t.textContent=a.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB"};e(),ue=setInterval(e,1e3)},he=()=>{window.__posBarcodeFn&&(document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=null)},je=()=>{he(),window.__posBarcodeFn=e=>{if(!e||typeof e.key!="string")return;const t=window.curViewName||"";if(!(t==="view-pos-cashier"||t==="view-admin"&&window.cTab==="pos"))return;if(e.key==="F4"){e.preventDefault();const r=d("pos-search-input");r&&(r.focus(),r.select());return}if(e.key==="F6"||e.key==="F7"){e.preventDefault(),ve();return}if(e.key==="F8"){e.preventDefault(),ie();return}if(e.key==="F9"){e.preventDefault(),d("pos-camera-scanner-modal")?Y():Pe();return}const s=document.activeElement?.tagName?.toLowerCase();if(!(s==="input"||s==="textarea"||s==="select"))if(e.key==="Enter"){if(R&&R.length>=3){const r=R.trim().toLowerCase(),n=(p.products||[]).find(o=>o&&o.isActive!=="false"&&o.isActive!==!1&&(o.barcode&&o.barcode.toLowerCase()===r||o.sku&&o.sku.toLowerCase()===r||o.id&&String(o.id).toLowerCase()===r));if(n)ke(n.id),K(),w(`Ditambahkan: ${n.name}`,"success");else{const o=d("pos-search-input");o&&(o.value=R,W=R,j()),w("Barcode tidak ditemukan di katalog","warning")}R=""}}else e.key&&e.key.length===1&&(R=(R||"")+e.key,clearTimeout(Te),Te=setTimeout(()=>{R=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},ke=e=>{const t=(p.products||[]).find(n=>n&&String(n.id)===String(e));if(!t)return;if(t.variants&&t.variants.length>0){De().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(e)});return}const s=te(t);s.isManaged&&s.isOutOfStock&&w(`Peringatan: Stok "${t.name}" habis di etalase/gudang!`,"warning");const r=m.find(n=>String(n.id)===String(e)&&!n.isVariant);if(r){if(s.isManaged&&r.qty+1>s.totalStock){w(`Stok maksimal "${t.name}" hanya ${s.totalStock} ${t.unit||"pcs"}`,"warning");return}r.qty+=1,E(r)}else{const n=parseFloat(t.price)||0;m.push(E({id:t.id,name:t.name,price:n,basePrice:n,qty:1,discount:0,subtotal:n,isVariant:!1,isWholesale:!1}))}K(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),S()},xt=(e,t)=>{const a=(p.products||[]).find(n=>n&&String(n.id)===String(e));if(!a)return;const s=te(a),r=m.find(n=>String(n.id)===String(e)&&!n.isVariant);if(r){if(s.isManaged&&r.qty+t>s.totalStock){w(`Stok maksimal "${a.name}" hanya ${s.totalStock} ${a.unit||"pcs"}`,"warning");return}r.qty+=t,E(r)}else{const n=parseFloat(a.price)||0,o=E({id:a.id,name:a.name,price:n,basePrice:n,qty:t,discount:0,subtotal:n*t,isVariant:!1,isWholesale:!1});m.push(o)}K(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),S()},ft=(e,t,a,s,r=1)=>{const n=`${e}__v${s}`,o=m.find(c=>c.cartKey===n);if(o)o.qty+=r,E(o);else{const x=`${(p.products||[]).find(b=>b&&String(b.id)===String(e))?.name||e} — ${t}`;m.push(E({id:e,cartKey:n,name:x,variantName:t,variantIdx:s,price:a,basePrice:a,qty:r,discount:0,subtotal:a*r,isVariant:!0,isWholesale:!1}))}K(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),S()},gt=(e,t)=>{const a=m.find(s=>(s.cartKey||String(s.id))===String(e));if(a){if(t>0&&!a.isVariant){const s=(p.products||[]).find(r=>r&&String(r.id)===String(a.id));if(s){const r=te(s);if(r.isManaged&&a.qty+t>r.totalStock){w(`Stok maksimal tersedia: ${r.totalStock} ${s.unit||"pcs"}`,"warning");return}}}a.qty=Math.max(1,a.qty+t),E(a),t>0&&K(),S()}},wt=(e,t)=>{const a=m.find(r=>(r.cartKey||String(r.id))===String(e));if(!a)return;let s=Math.max(1,V(t));if(!a.isVariant){const r=(p.products||[]).find(n=>n&&String(n.id)===String(a.id));if(r){const n=te(r);n.isManaged&&s>n.totalStock&&(w(`Stok maksimal tersedia: ${n.totalStock} ${r.unit||"pcs"}`,"warning"),s=n.totalStock)}}a.qty=s,E(a),S()},ht=(e,t)=>{const a=m.find(s=>(s.cartKey||String(s.id))===String(e));a&&(a.discount=Math.min(V(t),a.price*a.qty),E(a),S())},kt=e=>{m=m.filter(t=>(t.cartKey||String(t.id))!==String(e)),S(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},vt=()=>{if(m.length===0)return;const e=()=>{m=[],O=0,M=0,C="rp",S(),w("Keranjang kasir dikosongkan.")};typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Hapus semua item dari transaksi saat ini?",e,"Ya, Kosongkan",!0):e()},ne=(e="hold")=>{try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.createOscillator(),r=a.createGain();s.type="sine";const n=a.currentTime;e==="hold"?(s.frequency.setValueAtTime(659.25,n),s.frequency.exponentialRampToValueAtTime(880,n+.1)):(s.frequency.setValueAtTime(880,n),s.frequency.exponentialRampToValueAtTime(1174.66,n+.1)),r.gain.setValueAtTime(.08,n),r.gain.exponentialRampToValueAtTime(1e-4,n+.16),s.connect(r),r.connect(a.destination),s.start(),s.stop(n+.16),setTimeout(()=>{a.close().catch(()=>{})},200)}catch{}},yt=e=>{if(!e)return"";const t=Math.floor((Date.now()-e)/1e3);if(t<45)return"Baru saja";const a=Math.floor(t/60);if(a<60)return`${a} mnt lalu`;const s=Math.floor(a/60);return s<24?`${s} jam lalu`:new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})};let h=[];try{const e=localStorage.getItem("pos_held_carts");if(e){const t=JSON.parse(e);Array.isArray(t)&&(h=t)}}catch{h=[]}const le=()=>{try{localStorage.setItem("pos_held_carts",JSON.stringify(h))}catch{}X()},X=()=>{const e=h.length,t=d("pos-held-btn-storefront"),a=d("pos-held-btn-admin");t&&(e>0?t.innerHTML=`
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black flex items-center gap-1.5 transition-all active:scale-95 shadow-md cursor-pointer animate-pulse" title="Ada ${e} transaksi antrean tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span>${e} Parkir</span>
            </button>`:t.innerHTML=`
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-white/90 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer" title="Daftar Transaksi Tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span class="hidden sm:inline">Parkir (0)</span>
            </button>`),a&&(e>0?a.innerHTML=`
            <button onclick="window.openPOSHeldModal()" class="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-[10px] font-black flex items-center gap-1 shadow-xs transition-all active:scale-95 cursor-pointer animate-pulse" title="Ada ${e} transaksi antrean tertahan (F8)">
                <i class="fa-solid fa-hourglass-half"></i>
                <span>${e} Parkir</span>
            </button>`:a.innerHTML=`
            <button onclick="window.openPOSHeldModal()" class="px-2 py-1 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-[10px] font-bold flex items-center gap-1 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer" title="Daftar Transaksi Tertahan (F8)">
                <i class="fa-solid fa-hourglass-half"></i>
                <span>Parkir</span>
            </button>`)},ve=()=>{if(m.length===0){w("Keranjang masih kosong, tidak ada transaksi untuk ditahan.","warning");return}const e=u?.name?`Antrean #${h.length+1} — ${u.name}`:`Antrean #${h.length+1}`,t=m.reduce((s,r)=>s+(r.qty||1),0),a=T();ae(!0),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHoldPrompt"),document.getElementById("pos-hold-prompt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-hold-prompt-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800 overflow-hidden transform transition-all animate-scaleIn">
            <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-800/40">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-bold shadow-2xs">
                        <i class="fa-solid fa-pause"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white leading-tight">Parkir / Tahan Transaksi</h3>
                        <p class="text-[10px] text-slate-400">Simpan antrean sementara (F6)</p>
                    </div>
                </div>
                <button onclick="window.closePOSHoldPrompt()" class="w-7 h-7 rounded-lg bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 hover:text-slate-800 dark:hover:text-white text-base flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
            </div>
            <div class="p-5 space-y-3.5">
                <div class="p-3 bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 rounded-2xl flex items-center justify-between text-xs">
                    <div>
                        <p class="text-[10px] font-bold text-amber-700 dark:text-amber-300">Total Belanjaan</p>
                        <p class="font-black text-slate-800 dark:text-slate-100 text-sm mt-0.5">${t} item</p>
                    </div>
                    <div class="text-right">
                        <p class="text-[10px] font-bold text-amber-700 dark:text-amber-300">Total Tagihan</p>
                        <p class="font-black text-sm" style="color:var(--color-primary)">${f(a)}</p>
                    </div>
                </div>
                <div>
                    <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Label / Catatan Antrean Pelanggan</label>
                    <input id="pos-hold-note-input" type="text" value="${i(e)}" placeholder="Contoh: Bpk Budi (ambil barang lagi)..."
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs font-bold bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white dark:focus:bg-slate-900 transition-all"
                        onkeydown="if(event.key==='Enter') window.posConfirmHoldCart();">
                </div>
            </div>
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex gap-2">
                <button onclick="window.closePOSHoldPrompt()" class="w-1/3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">Batal</button>
                <button onclick="window.posConfirmHoldCart()" class="w-2/3 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-pause"></i>
                    <span>Tahan Transaksi</span>
                </button>
            </div>
        </div>
    </div>`),setTimeout(()=>{const s=d("pos-hold-note-input");s&&(s.focus(),s.select())},50)},ye=(e=!1)=>{const t=d("pos-hold-prompt-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHoldPrompt",!1,()=>t.remove()):t.remove())},Ie=()=>{if(m.length===0)return;const t=(d("pos-hold-note-input")?.value||"").trim()||`Antrean #${h.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(m)),globalDisc:F(),discountType:C,discountVal:M,customer:{...u},total:T(),subtotal:_(),itemCount:m.reduce((s,r)=>s+(r.qty||1),0)};h.unshift(a),le(),m=[],O=0,M=0,C="rp",u={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},ye(),S(),j(),ne("hold"),w(`Antrean "${t}" berhasil diparkir!`,"success")},ie=(e=!1)=>{!e&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHeldModal"),document.getElementById("pos-held-list-modal")?.remove();const t=h.length,a=t===0?`
        <div class="py-12 px-4 text-center">
            <div class="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-amber-500 flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner">
                <i class="fa-solid fa-hourglass-half"></i>
            </div>
            <h4 class="font-bold text-sm text-slate-800 dark:text-slate-200">Tidak Ada Transaksi Tertahan</h4>
            <p class="text-xs text-slate-400 mt-1 max-w-xs mx-auto leading-relaxed">
                Gunakan tombol <span class="font-bold text-amber-600 dark:text-amber-400">"Tahan"</span> di keranjang kasir (atau tekan F6) untuk memarkir antrean saat pelanggan mengambil barang tambahan.
            </p>
        </div>`:`
        <div class="divide-y divide-slate-100 dark:divide-slate-800">
            ${h.map((s,r)=>{const n=i(s.id),o=(s.cart||[]).slice(0,3).map(x=>`${i(x.name)} (${x.qty}x)`).join(", "),c=(s.cart||[]).length>3?` +${s.cart.length-3} lainnya`:"";return`
                <div class="p-3.5 sm:p-4 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 mb-1 flex-wrap">
                            <span class="px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-black text-[10px] uppercase">
                                #${r+1}
                            </span>
                            <h4 class="font-black text-xs sm:text-sm text-slate-900 dark:text-white truncate" title="${i(s.note)}">
                                ${i(s.note)}
                            </h4>
                            <span class="text-[10px] text-slate-400">• ${yt(s.time)}</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            <i class="fa-solid fa-box-open mr-1 text-[10px] opacity-70"></i>
                            <span>${o}${c}</span>
                        </p>
                        <div class="flex items-center gap-3 mt-1.5 text-xs">
                            <span class="text-slate-500 font-medium">${s.itemCount} item</span>
                            <span class="text-slate-300 dark:text-slate-700">•</span>
                            <span class="font-black" style="color:var(--color-primary)">${f(s.total)}</span>
                            ${(s.globalDisc||0)>0?`<span class="text-[10px] text-rose-500 font-bold">(Disc: ${f(s.globalDisc)})</span>`:""}
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        <button onclick="window.posDeleteHeldCart('${n}')" class="w-8 h-8 rounded-xl border border-rose-200 dark:border-rose-900/50 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center justify-center text-xs transition-all active:scale-95 cursor-pointer" title="Hapus Antrean">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                        <button onclick="window.posRecallHeldCart('${n}')" class="px-3.5 py-2 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer" style="background:var(--color-primary)">
                            <i class="fa-solid fa-play text-[10px]"></i>
                            <span>Panggil Antrean</span>
                        </button>
                    </div>
                </div>`}).join("")}
        </div>`;document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-held-list-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
        <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-lg max-h-[85vh] flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-800">
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-bold shadow-2xs">
                        <i class="fa-solid fa-hourglass-half"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white leading-tight flex items-center gap-2">
                            <span>Daftar Transaksi Tertahan (Parkir)</span>
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500 text-white">${t}</span>
                        </h3>
                        <p class="text-[10px] text-slate-400">Panggil kembali belanjaan pelanggan yang diparkir (F8)</p>
                    </div>
                </div>
                <button onclick="window.closePOSHeldModal()" class="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 hover:text-slate-800 dark:hover:text-white text-lg flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
            </div>
            <div class="overflow-y-auto flex-1 max-h-[55vh]">
                ${a}
            </div>
            <div class="p-3 sm:p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex justify-between items-center shrink-0">
                <p class="text-[11px] text-slate-400 font-medium">
                    <i class="fa-solid fa-keyboard mr-1"></i>Tekan <kbd class="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[9px] font-mono">F6</kbd> Tahan, <kbd class="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[9px] font-mono">F8</kbd> Antrean
                </p>
                <button onclick="window.closePOSHeldModal()" class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Tutup
                </button>
            </div>
        </div>
    </div>`)},de=(e=!1)=>{const t=d("pos-held-list-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHeldModal",!1,()=>t.remove()):t.remove())},Be=e=>{const t=h.findIndex(a=>a.id===e);if(t===-1){w("Transaksi tertahan tidak ditemukan.","warning");return}if(m.length>0){document.getElementById("pos-recall-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
        <div id="pos-recall-confirm-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(4px)">
            <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800 overflow-hidden">
                <div class="p-5 text-center">
                    <div class="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <h3 class="font-black text-sm text-slate-900 dark:text-white mb-1">Keranjang Masih Berisi Item</h3>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        Ada <span class="font-bold text-slate-800 dark:text-slate-200">${m.length} jenis item</span> di transaksi aktif saat ini. Ingin tahan transaksi aktif ke antrean baru atau menimpa?
                    </p>
                    <div class="flex flex-col gap-2">
                        <button onclick="window.posHoldCurrentAndRecall('${i(e)}')" class="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5">
                            <i class="fa-solid fa-floppy-disk"></i>
                            <span>Tahan Transaksi Aktif & Panggil</span>
                        </button>
                        <button onclick="window.posOverwriteAndRecall('${i(e)}')" class="w-full py-2 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 font-bold text-xs hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer">
                            Timpa Transaksi Aktif
                        </button>
                        <button onclick="document.getElementById('pos-recall-confirm-modal')?.remove()" class="w-full py-2 rounded-xl text-slate-400 text-xs font-medium hover:text-slate-600 transition-all cursor-pointer">
                            Batal
                        </button>
                    </div>
                </div>
            </div>
        </div>`);return}Se(t)},Se=e=>{const t=h[e];t&&(m=JSON.parse(JSON.stringify(t.cart||[])),C=t.discountType||"rp",M=t.discountVal!==void 0?t.discountVal:t.globalDisc||0,O=F(),u=t.customer?{...t.customer}:{name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},h.splice(e,1),le(),de(),S(),j(),ne("recall"),w(`Antrean "${t.note}" berhasil dipanggil kembali!`,"success"))},Re=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=u?.name?`Antrean #${h.length+1} — ${u.name}`:`Antrean #${h.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(m)),globalDisc:F(),discountType:C,discountVal:M,customer:{...u},total:T(),subtotal:_(),itemCount:m.reduce((r,n)=>r+(n.qty||1),0)};h.unshift(a);const s=h.findIndex(r=>r.id===e);s!==-1?Se(s):(le(),de())},Ne=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=h.findIndex(a=>a.id===e);t!==-1&&Se(t)},Ee=e=>{const t=h.find(a=>a.id===e);t&&(document.getElementById("pos-delete-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-delete-confirm-modal" class="fixed inset-0 z-[10005] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75);backdrop-filter:blur(4px)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-xs border border-slate-200 dark:border-slate-800 p-6 text-center transform transition-all">
            <div class="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900/50 flex items-center justify-center mx-auto mb-3.5 text-2xl shadow-inner">
                <i class="fa-solid fa-trash-can"></i>
            </div>
            <h4 class="font-black text-sm text-slate-900 dark:text-white mb-1.5">Hapus Antrean Ini?</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                Antrean <span class="font-bold text-slate-800 dark:text-slate-200">"${i(t.note)}"</span> (${t.itemCount} item • ${f(t.total)}) akan dihapus permanen.
            </p>
            <div class="flex gap-2.5">
                <button onclick="document.getElementById('pos-delete-confirm-modal')?.remove()" class="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.posExecuteDeleteHeld('${i(e)}')" class="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 active:scale-95 text-xs font-bold text-white shadow-md shadow-rose-600/30 transition-all cursor-pointer flex items-center justify-center gap-1.5">
                    <i class="fa-solid fa-trash-can text-[11px]"></i>
                    <span>Ya, Hapus</span>
                </button>
            </div>
        </div>
    </div>`))},Fe=e=>{document.getElementById("pos-delete-confirm-modal")?.remove();const t=h.find(a=>a.id===e);h=h.filter(a=>a.id!==e),le(),w(`Antrean "${t?.note||""}" berhasil dihapus.`,"info"),ie(!0)},Ke=()=>{const e=d("pos-mobile-cart-drawer"),t=d("pos-mobile-cart-sheet");e&&t&&(e.classList.remove("opacity-0","pointer-events-none"),e.classList.add("opacity-100"),t.classList.remove("translate-y-full"),t.classList.add("translate-y-0"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCartDrawer"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},ae=(e=!1)=>{const t=d("pos-mobile-cart-drawer"),a=d("pos-mobile-cart-sheet");if(t&&a){const s=()=>{a.classList.add("translate-y-full"),a.classList.remove("translate-y-0"),t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100")};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCartDrawer",!1,s):s()}},St=e=>{if(e.img&&typeof e.img=="string")return me(e.img,"w150-rw");const t=(p.products||[]).find(a=>String(a.id)===String(e.id));return t&&t.img&&typeof t.img=="string"?me(t.img,"w150-rw"):""},j=()=>{const e=(p.products||[]).filter(o=>{if(!o||o.isActive==="false"||o.isActive===!1||z&&o.category!==z)return!1;if(W){const c=W.toLowerCase();return(o.name||"").toLowerCase().includes(c)||(o.barcode||"").toLowerCase().includes(c)||(o.sku||"").toLowerCase().includes(c)}return!0}),a=["Semua",...new Set((p.products||[]).filter(o=>o&&o.isActive!=="false"&&o.category).map(o=>o.category))].map(o=>{const c=o==="Semua",x=c?!z:z===o;return`<button onclick="window.posCatFilter('${i(c?"":o)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs ${x?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}" style="${x?"background:var(--color-primary)":""}">${i(o)}</button>`}).join(""),s=e.length===0?`<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
             <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
               <i class="fa-solid fa-box-open text-2xl"></i>
             </div>
             <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
             <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
           </div>`:e.map(o=>{const c=!!(o.img&&typeof o.img=="string"&&o.img.trim()),x=c?me(o.img,"w300-rw"):"",b=o.variants&&o.variants.length>0,l=o.wholesale&&o.wholesale.length>0,y=m.filter(k=>String(k.id)===String(o.id)).reduce((k,A)=>k+A.qty,0),H=i(String(o.id)),L=te(o);return N==="list"?`
                <div class="pos-list-item${y>0?" in-cart":""}${L.isOutOfStock?" opacity-75":""}" onclick="window.posAddToCart('${H}')">
                    <div class="pos-list-thumb">
                        ${c?`<img width="52" height="52" loading="lazy" decoding="async" src="${i(x)}" alt="${i(o.name)}" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                               <div class="pos-img-placeholder" style="display:none;width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>`:'<div class="pos-img-placeholder" style="width:100%;height:100%"><i class="fa-solid fa-box" style="font-size:16px;margin:0"></i></div>'}
                        ${y>0?`<div class="pos-qty-badge" style="top:2px;right:2px;min-width:18px;height:18px;font-size:9px;border-width:1.5px">${y}</div>`:""}
                    </div>
                    <div style="flex:1;min-width:0">
                        <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;margin-bottom:3px">
                            ${o.category?`<span style="font-size:9px;text-transform:uppercase;letter-spacing:0.06em;font-weight:700;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px">${i(o.category)}</span>`:""}
                            ${b?'<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>':""}
                            ${l?'<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>':""}
                            ${L.isOutOfStock?'<span class="pos-badge pos-badge-habis"><i class="fa-solid fa-ban" style="font-size:6px"></i> HABIS</span>':""}
                            ${L.isLowStock?`<span class="pos-badge pos-badge-low"><i class="fa-solid fa-triangle-exclamation" style="font-size:6px"></i> SISA ${L.totalStock}</span>`:""}
                        </div>
                        <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate" title="${i(o.name)}">${i(o.name)}</p>
                        <p style="font-size:12px;font-weight:900;color:var(--color-primary);margin-top:2px">${f(parseFloat(o.price)||0)}</p>
                    </div>
                    <button onclick="event.stopPropagation();window.posAddToCart('${H}')" class="pos-add-btn" title="Tambah ke keranjang">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>`:`
            <div class="pos-product-card${y>0?" in-cart":""}${L.isOutOfStock?" opacity-75":""}" onclick="window.posAddToCart('${H}')">
                <!-- Kotak Gambar Rasio 1:1 Anti-Collapse (aspect-ratio 1:1 + min-height 120px) -->
                <div class="pos-img-box">
                    <div class="pos-img-badges">
                        ${b?'<span class="pos-badge pos-badge-varian"><i class="fa-solid fa-layer-group" style="font-size:6px"></i> VARIAN</span>':""}
                        ${l?'<span class="pos-badge pos-badge-grosir"><i class="fa-solid fa-tags" style="font-size:6px"></i> GROSIR</span>':""}
                        ${L.isOutOfStock?'<span class="pos-badge pos-badge-habis"><i class="fa-solid fa-ban" style="font-size:6px"></i> HABIS</span>':""}
                        ${L.isLowStock?`<span class="pos-badge pos-badge-low"><i class="fa-solid fa-triangle-exclamation" style="font-size:6px"></i> SISA ${L.totalStock}</span>`:""}
                    </div>
                    ${y>0?`<div class="pos-qty-badge">${y}</div>`:""}
                    ${c?`<img width="300" height="300" loading="lazy" decoding="async" src="${i(x)}" alt="${i(o.name)}"
                             onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                           <div class="pos-img-placeholder" style="display:none">
                             <i class="fa-solid fa-box-open"></i>
                             <span>${i(o.category||"Toko")}</span>
                           </div>`:`<div class="pos-img-placeholder">
                             <i class="fa-solid fa-box-open"></i>
                             <span>${i(o.category||"Produk")}</span>
                           </div>`}
                </div>
                <!-- Info Produk -->
                <div class="pos-card-info">
                    ${o.category?`<p class="pos-card-cat">${i(o.category)}</p>`:""}
                    <p class="pos-card-name" title="${i(o.name)}">${i(o.name)}</p>
                    <div class="pos-card-footer">
                        <span class="pos-card-price">${f(parseFloat(o.price)||0)}</span>
                        <button onclick="event.stopPropagation();window.posAddToCart('${H}')" class="pos-add-btn" title="Tambah ke keranjang">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>`}).join(""),r=d("pos-cat-filter"),n=d("pos-catalog-grid");r&&(r.innerHTML=a),n&&(n.className=N==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode",n.innerHTML=s)},S=()=>{const e=m.reduce((l,g)=>l+g.qty,0),t=_(),a=T(),s=f(a),r=f(t),n=m.length===0?`<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`:m.map(l=>{const g=i(String(l.cartKey||l.id)),y=St(l),H=l.isVariant&&l.variantName?i(l.name.replace(` — ${l.variantName}`,"")):i(l.name);return`
            <div class="group flex items-center gap-2.5 p-2 sm:p-2.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[var(--color-primary)] transition-all">
                <!-- 40px Thumbnail -->
                <div class="w-10 h-10 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                    ${y?`<img width="40" height="40" loading="lazy" src="${i(y)}" alt="${i(l.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                           <div class="hidden w-full h-full items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>`:'<div class="w-full h-full flex items-center justify-center text-slate-400"><i class="fa-solid fa-box text-xs"></i></div>'}
                </div>
                <!-- Details -->
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug" title="${i(l.name)}">${H}</p>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        ${l.isWholesale?'<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary)">GROSIR</span>':""}
                        ${l.isVariant?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary);opacity:0.95"><i class="fa-solid fa-layer-group text-[7px]"></i>${i(l.variantName||"VARIAN")}</span>`:""}
                        <span class="text-[10px] text-slate-500 font-medium">
                            ${l.isWholesale&&l.basePrice?`<span class="line-through text-slate-400">${f(l.basePrice)}</span> <span class="font-bold" style="color:var(--color-primary)">${f(l.price)}</span>`:f(l.price)}
                        </span>
                    </div>
                    <div class="flex items-center gap-1 mt-1">
                        <span class="text-[9px] text-slate-400 font-bold uppercase">Diskon:</span>
                        <input type="number" min="0" placeholder="0" value="${l.discount||""}" onchange="window.posSetItemDisc('${g}',this.value)"
                            class="w-16 text-[10px] font-bold border border-slate-200 dark:border-slate-600 rounded-lg px-1.5 py-0.5 bg-slate-50 dark:bg-slate-700 text-right focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                </div>
                <!-- Stepper & Subtotal -->
                <div class="flex flex-col items-end gap-1 shrink-0">
                    <div class="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-700/80 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600">
                        <button onclick="window.posUpdateQty('${g}',-1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90">−</button>
                        <input type="number" min="1" value="${l.qty}" onchange="window.posSetQty('${g}',this.value)"
                            class="w-6 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none">
                        <button onclick="window.posUpdateQty('${g}',1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90">+</button>
                    </div>
                    <p class="text-xs font-black" style="color:var(--color-primary)">${f(l.subtotal)}</p>
                    <button onclick="window.posRemoveItem('${g}')" class="text-slate-400 hover:text-rose-500 text-[11px] p-0.5 transition-colors" title="Hapus item">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>`}).join("");document.querySelectorAll(".pos-cart-items-target").forEach(l=>l.innerHTML=n),document.querySelectorAll(".pos-subtotal-target").forEach(l=>l.textContent=r),document.querySelectorAll(".pos-total-target").forEach(l=>l.textContent=s),document.querySelectorAll(".pos-item-count-target").forEach(l=>l.textContent=String(e));const o=F(),c=f(o);document.querySelectorAll(".pos-disc-val-input").forEach(l=>{document.activeElement!==l&&(l.value=M||"")}),document.querySelectorAll(".pos-global-disc-target").forEach(l=>{document.activeElement!==l&&(l.value=M||"")}),document.querySelectorAll(".pos-disc-preview-target").forEach(l=>{l.textContent=o>0?`- ${c}`:"Rp 0",o>0?(l.classList.remove("text-slate-400"),l.classList.add("text-rose-500")):(l.classList.add("text-slate-400"),l.classList.remove("text-rose-500"))}),document.querySelectorAll(".pos-disc-type-rp").forEach(l=>{C==="rp"?l.className="pos-disc-type-rp px-2 py-0.5 rounded-md transition-all cursor-pointer bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-xs font-black":l.className="pos-disc-type-rp px-2 py-0.5 rounded-md transition-all cursor-pointer text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-bold"}),document.querySelectorAll(".pos-disc-type-pct").forEach(l=>{C==="percent"?l.className="pos-disc-type-pct px-2 py-0.5 rounded-md transition-all cursor-pointer bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-xs font-black":l.className="pos-disc-type-pct px-2 py-0.5 rounded-md transition-all cursor-pointer text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-bold"}),document.querySelectorAll(".pos-disc-prefix").forEach(l=>{l.textContent=C==="percent"?"%":"Rp"});const x=C==="percent"?`
        <button onclick="window.posApplyQuickDiscount(5,'percent')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">5%</button>
        <button onclick="window.posApplyQuickDiscount(10,'percent')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">10%</button>
        <button onclick="window.posApplyQuickDiscount(15,'percent')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">15%</button>
        <button onclick="window.posApplyQuickDiscount(20,'percent')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">20%</button>
        <button onclick="window.posApplyQuickDiscount(50,'percent')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">50%</button>
        ${M>0?`<button onclick="window.posApplyQuickDiscount(0,'percent')" class="px-2 py-0.5 rounded-md bg-rose-100 hover:bg-rose-200 dark:bg-rose-950/40 text-[9px] font-black text-rose-600 cursor-pointer transition-all">Reset</button>`:""}
        `:`
        <button onclick="window.posApplyQuickDiscount(2000,'rp')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">2rb</button>
        <button onclick="window.posApplyQuickDiscount(5000,'rp')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">5rb</button>
        <button onclick="window.posApplyQuickDiscount(10000,'rp')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">10rb</button>
        <button onclick="window.posApplyQuickDiscount(25000,'rp')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">25rb</button>
        <button onclick="window.posApplyQuickDiscount(50000,'rp')" class="px-2 py-0.5 rounded-md bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-700 dark:hover:bg-slate-600 text-[9px] font-black text-slate-700 dark:text-slate-200 cursor-pointer transition-all">50rb</button>
        ${M>0?`<button onclick="window.posApplyQuickDiscount(0,'rp')" class="px-2 py-0.5 rounded-md bg-rose-100 hover:bg-rose-200 dark:bg-rose-950/40 text-[9px] font-black text-rose-600 cursor-pointer transition-all">Reset</button>`:""}
        `;document.querySelectorAll(".pos-disc-chips-target").forEach(l=>l.innerHTML=x),document.querySelectorAll(".pos-pay-btn-target").forEach(l=>{l.disabled=m.length===0;const g=l.querySelector(".btn-text");g&&(g.textContent=m.length>0?`BAYAR — ${s}`:"PROSES PEMBAYARAN")}),document.querySelectorAll(".pos-hold-btn-target").forEach(l=>{l.disabled=m.length===0,m.length===0?l.classList.add("opacity-40","cursor-not-allowed"):l.classList.remove("opacity-40","cursor-not-allowed")}),X();const b=d("pos-mobile-floating-bar");b&&(m.length>0?(b.classList.remove("translate-y-32","opacity-0","pointer-events-none"),b.classList.add("translate-y-0","opacity-100")):(b.classList.add("translate-y-32","opacity-0","pointer-events-none"),b.classList.remove("translate-y-0","opacity-100"),ae(!0)))},Pt=()=>{if(m.length===0){w("Keranjang masih kosong!","warning");return}typeof window.pushModalHistory=="function"&&window.pushModalHistory("posPayment"),u={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},$="cash",D=T(),G(),ce(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-pay-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md max-h-[94vh] flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-800">
        <!-- Header -->
        <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <div>
            <h2 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-cash-register" style="color:var(--color-primary)"></i>
              <span>Proses Pembayaran Kasir</span>
            </h2>
            <p class="text-xs text-slate-500 mt-0.5">Total Tagihan: <span class="font-black text-sm" style="color:var(--color-primary)">${f(T())}</span></p>
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
    </div>`),fe("cash")},qe=(e=!1)=>{const t=d("pos-pay-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posPayment",!1,()=>t.remove()):t.remove())},Ve=(e,t,a)=>{a.forEach(s=>{const r=d(`${e}-${s}`);r&&(s===t?(r.style.background="var(--color-primary)",r.style.color="white",r.style.borderColor="var(--color-primary)",r.classList.add("shadow-xs")):(r.style.removeProperty("background"),r.style.removeProperty("color"),r.style.removeProperty("border-color"),r.classList.remove("shadow-xs")))})},fe=e=>{const t=d("pos-pay-detail");if(!t)return;const a=T(),s=`
      <div class="flex justify-between items-center py-2 px-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs">
        <span class="text-slate-500 font-medium">Total yang Harus Dibayar</span>
        <span class="font-black text-sm" style="color:var(--color-primary)">${f(a)}</span>
      </div>`;if(e==="cash"){const n=[{label:"Uang Pas",val:a,isPas:!0},{label:"10.000",val:1e4},{label:"20.000",val:2e4},{label:"50.000",val:5e4},{label:"100.000",val:1e5},{label:"200.000",val:2e5},{label:"500.000",val:5e5}].map(o=>`
            <button onclick="window.posSetQuickCash(${o.val})" type="button"
                class="px-2.5 py-1.5 rounded-xl text-[11px] font-black border transition-all active:scale-95 ${o.isPas?"text-white border-transparent shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]"}"
                style="${o.isPas?"background:var(--color-primary)":""}">
                ${o.isPas?"💵 Uang Pas":`Rp ${o.label}`}
            </button>
        `).join("");t.innerHTML=`
            ${s}
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-wider text-slate-400">Nominal Uang Diterima (Rp)</label>
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">Rp</span>
                    <input id="pos-paid-input" type="number" min="0" placeholder="${a}" value="${D||""}"
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
                <div id="pos-change-box" class="mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${D>=a?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}">
                    <div>
                        <p class="text-[9px] font-black uppercase tracking-wider text-slate-400">Status Kembalian</p>
                        <p id="pos-change-label" class="text-xs font-bold ${D>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-700 dark:text-rose-400"}">
                            ${D>=a?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"}
                        </p>
                    </div>
                    <span id="pos-change-display" class="text-base font-black ${D>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">
                        ${f(Math.abs(Le()))}
                    </span>
                </div>
            </div>
        `}else if(e==="qris"){const r=p.payment?.qrisUrl||"";t.innerHTML=`
          ${s}
          ${r?`<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${i(r)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>`:'<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>'}`}else if(e==="transfer"){const n=(Array.isArray(p.banks)?p.banks:[]).filter(c=>c&&(c.bankName||c.name||c.bank));let o='<option value="">Rekening bank belum diatur di CMS Admin</option>';n.length>0&&(o=n.map(c=>{const x=c.bankName||c.name||c.bank||"Bank",b=c.bankAccount||c.number||c.noRekening||c.account||"",l=c.bankOwner||c.holder||c.atasNama||c.owner||"",g=`${x}${b?" — "+b:""}${l?" a/n "+l:""}`;return`<option value="${i(g)}">${i(g)}</option>`}).join("")),t.innerHTML=`
          ${s}
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rekening Tujuan Toko</label>
            <div class="relative">
              <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${o}
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
          ${s}
          <div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-700/80 mb-2.5">
            <p class="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half"></i> Pembayaran Tempo / Piutang</p>
            <p class="text-[10px] text-amber-700 dark:text-amber-400 mt-1">Transaksi otomatis dicatat sebagai piutang di database toko.</p>
          </div>
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Uang Muka / DP (Rp) — opsional</label>
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="0" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`)},$t=e=>{u.isMember=e==="member",u.isNewTempo=e==="tempo",Ve("pos-ctype",e,["umum","member","tempo"]);const t=d("pos-customer-fields");t&&(e==="umum"?(u.name="",u.phone="",u.memberId=null,u.points=0,t.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">'):e==="member"?(t.innerHTML=`
          <div class="space-y-2">
            <div class="flex gap-2">
              <div class="relative flex-1">
                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input id="pos-cust-phone" type="text" placeholder="Ketik No. HP / Nama / ID Member..."
                  value="${u.isMember?i(u.phone||u.name||""):""}"
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
          </div>`,G().then(()=>{d("pos-cust-phone")?.value?.trim()&&pe()})):e==="tempo"&&(u.isMember=!1,_e("tempo"),t.innerHTML=`
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`))},_e=e=>{$=e,Ve("pos-pay",e,["cash","qris","transfer","tempo"]),fe(e),e==="transfer"&&(!p.banks||!p.banks.length)&&ce().then(t=>{$==="transfer"&&t&&t.length>0&&fe("transfer")})},Qe=e=>{D=V(e);const t=T(),a=D-t,s=d("pos-change-display"),r=d("pos-change-label"),n=d("pos-change-box"),o=d("pos-process-btn");s&&(s.textContent=f(Math.abs(a))),r&&(r.textContent=a>=0?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"),s&&(s.className=`text-base font-black ${a>=0?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`),n&&(n.className=`mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${a>=0?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}`),o&&$==="cash"&&(o.disabled=a<0,o.classList.toggle("opacity-50",a<0))},ze=e=>{const t=d("pos-paid-input");t&&(t.value=e,Qe(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},ce=async()=>{if(Array.isArray(p.banks)&&p.banks.length>0)return p.banks;try{const e=await Q.collection("freshmart").doc("cms_data").get();if(e.exists){const t=e.data();if(Array.isArray(t?.banks)&&t.banks.length>0)return p.banks=t.banks,p.banks}}catch{}return p.banks||[]},G=async()=>{if(p.customers&&p.customers.length>0)return p.customers;try{const e=await Q.collection("freshmart").doc("cms_data").collection("customers").get();return p.customers=e.docs.map(t=>({...t.data(),id:t.id,_docId:t.id})),p.customers}catch{return p.customers||[]}},Ue=(e,t)=>{if(!e||!t||!t.length)return[];const a=e.trim().toLowerCase(),s=a.replace(/\D/g,"");let r=s;r.startsWith("62")?r=r.slice(2):r.startsWith("0")&&(r=r.slice(1));const n=[],o=new Set;return t.forEach(c=>{if(!c)return;const x=String(c.id||c._docId||c.phone||"");if(o.has(x))return;const b=String(c.phone||"").replace(/\D/g,"");let l=b;l.startsWith("62")?l=l.slice(2):l.startsWith("0")&&(l=l.slice(1));const g=String(c.name||"").toLowerCase();let y=!1;r.length>=4&&l&&(l===r||l.endsWith(r)||r.endsWith(l)||b.includes(s))&&(y=!0),!y&&(x.toLowerCase()===a||x===s)&&(y=!0),!y&&a.length>=2&&g.includes(a)&&(y=!0),y&&(o.add(x),n.push(c))}),n},Tt=async e=>{if(!e)return null;const t=e.trim(),a=t.replace(/\D/g,"");let s=a;s.startsWith("62")?s=s.slice(2):s.startsWith("0")&&(s=s.slice(1));const r=Q.collection("freshmart").doc("cms_data").collection("customers"),o=Array.from(new Set([s?"62"+s:null,s?"0"+s:null,s||null,s?"+62"+s:null,a||null,t].filter(Boolean))).map(async b=>{try{const l=await r.doc(b).get();if(l&&l.exists)return{...l.data(),id:l.id,_docId:l.id}}catch{}return null}),x=(await Promise.all(o)).find(Boolean);if(x){p.customers||(p.customers=[]);const b=p.customers.findIndex(l=>String(l.id||l.phone)===String(x.id||x.phone));return b>-1?p.customers[b]=x:p.customers.push(x),x}try{const b=await r.limit(300).get();if(!b.empty){p.customers=b.docs.map(g=>({...g.data(),id:g.id,_docId:g.id}));const l=Ue(e,p.customers);if(l.length>0)return l[0]}}catch{}return null},ge=e=>{u.isMember=!0,u.name=e.name||"Member Toko",u.phone=e.phone||"",u.memberId=e.id||e._docId||e.phone,u.points=parseFloat(e.points)||0;const t=d("pos-cust-phone");t&&(t.value=e.phone||e.name||"");const a=u.points,s=typeof window.getMemberTier=="function"?window.getMemberTier(a):{badge:"MEMBER RESMI"},r=d("pos-member-result");r&&(r.innerHTML=`
        <div class="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 rounded-2xl border border-emerald-300 dark:border-emerald-700/60 shadow-xs flex items-center justify-between gap-2.5">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <i class="fa-solid fa-id-card text-base"></i>
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">${i(s.badge||"VIP")}</span>
                <span class="text-[10px] font-black text-amber-600 dark:text-amber-400 flex items-center gap-0.5"><i class="fa-solid fa-star text-[9px]"></i>${a} Poin</span>
              </div>
              <p class="text-xs font-black text-slate-800 dark:text-white truncate mt-0.5">${i(e.name||"Pelanggan Setia")}</p>
              <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${i(e.phone||"")}</p>
            </div>
          </div>
          <button onclick="window.resetPosMember()" type="button" class="shrink-0 px-2.5 py-1.5 rounded-xl text-[10px] font-bold text-slate-600 hover:text-rose-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer" title="Ganti Member">
            <i class="fa-solid fa-rotate-left mr-1"></i>Ganti
          </button>
        </div>`),w(`Member terdeteksi: ${e.name} (${a} Poin)`,"success")},We=e=>{const a=(p.customers||[]).find(s=>s&&String(s.id||s._docId||s.phone)===String(e));a&&ge(a)},Ge=()=>{u.isMember=!1,u.name="",u.phone="",u.memberId=null,u.points=0;const e=d("pos-cust-phone");e&&(e.value="",e.focus());const t=d("pos-member-result");t&&(t.innerHTML="")};let Ae=null;const Je=()=>{clearTimeout(Ae);const e=d("pos-cust-phone")?.value?.trim()||"";if(!e){if(!u.memberId){const s=d("pos-member-result");s&&(s.innerHTML="")}return}const t=e.replace(/\D/g,"");!(Array.isArray(p.customers)&&p.customers.length>0)&&t.length<10&&e.length<8||(Ae=setTimeout(()=>{pe()},350))},pe=async()=>{const t=d("pos-cust-phone")?.value?.trim()||"";if(!t){w("Masukkan nomor HP atau nama member","warning");return}const a=d("pos-member-result"),s=d("pos-member-lookup-btn");s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>'),a&&(a.innerHTML='<div class="p-2.5 text-center text-xs text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-1.5"></i>Memeriksa database member...</div>');try{await G();const r=Ue(t,p.customers||[]);if(r.length===1)ge(r[0]);else if(r.length>1)a.innerHTML=`
              <div class="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                <p class="text-[10px] font-bold text-slate-500 mb-1">Ditemukan ${r.length} member (klik untuk memilih):</p>
                ${r.map(n=>`
                  <button onclick="window.selectPosMember('${i(n.id||n._docId||n.phone)}')" type="button"
                    class="w-full text-left p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-all flex items-center justify-between gap-2 cursor-pointer">
                    <div class="min-w-0">
                      <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${i(n.name||"Member")}</p>
                      <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${i(n.phone||"")}</p>
                    </div>
                    <span class="text-[10px] font-black text-amber-500 shrink-0"><i class="fa-solid fa-star text-[9px]"></i> ${parseFloat(n.points)||0} Poin</span>
                  </button>
                `).join("")}
              </div>
            `;else{const n=await Tt(t);if(n)ge(n);else{u.isMember=!1,u.name="",u.memberId=null,u.points=0;const c=t.replace(/\D/g,"").length>=8;a.innerHTML=`
                  <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs space-y-1">
                    <p class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-info"></i> Member Tidak Ditemukan</p>
                    <p class="text-[11px] text-amber-700 dark:text-amber-400">Tidak ada member ditemukan untuk "<b>${i(t)}</b>".</p>
                    ${c?"":`
                      <p class="text-[10px] text-amber-600/90 dark:text-amber-400/80 pt-1 border-t border-amber-200 dark:border-amber-800/60">
                        <i class="fa-solid fa-lightbulb mr-1 text-amber-500"></i><b>Tips Kasir:</b> Masukkan nomor WhatsApp/HP member (contoh: <code>0812...</code>) untuk verifikasi instan.
                      </p>
                    `}
                  </div>`}}}catch(r){console.error("[POS] Error lookupPosMember:",r),a&&(a.innerHTML=`<p class="text-xs text-rose-500 p-2">Gagal memeriksa data: ${i(r.message||"Koneksi error")}</p>`)}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-magnifying-glass mr-1.5"></i><span>Cek</span>')}},Mt=async()=>{if(m.length===0){w("Keranjang kosong!","warning");return}const e=u.isMember?u.name||"Member Toko":d("pos-cust-name")?.value?.trim()||"Pelanggan Umum",t=u.isMember?u.phone||d("pos-cust-phone")?.value?.trim()||"":d("pos-cust-phone")?.value?.trim()||"";if(u.isNewTempo&&!t){w("No. HP wajib diisi untuk tempo!","warning");return}if($==="cash"&&(D=V(d("pos-paid-input")?.value||0),D<T())){w(`Uang kurang! Minimal ${f(T())}`,"warning");return}u.name=e,u.phone=t;const a=$==="tempo"?V(d("pos-dp-input")?.value||0):0,s=$==="transfer"&&d("pos-bank-sel")?.value||"",r=d("pos-process-btn");r&&(r.disabled=!0,r.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');const n=p.store?.useStock===!0||p.store?.useStock==="true";if(n)for(const o of m){const c=(p.products||[]).find(b=>String(b.id)===String(o.id));if(!c)continue;const x=parseFloat(o.qty)||0;if(o.variantName&&c.variants){const b=(c.variants||[]).find(g=>g.name===o.variantName),l=parseFloat(b&&b.stock!==void 0?b.stock:0);if(l<x){w(`Stok ${o.name} (${o.variantName}) tidak cukup! Sisa: ${l}`,"warning"),r&&(r.disabled=!1,r.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}else{const b=parseFloat(c.stock!==void 0?c.stock:0);if(b<x){w(`Stok ${o.name} tidak cukup! Sisa: ${b}`,"warning"),r&&(r.disabled=!1,r.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}}try{const o=mt(),c=typeof window.getCashierSession=="function"?window.getCashierSession():null,x=c?.name||p.store?.name||"Kasir",b=c?.uid||window.__currentAdminUid||"admin",l=new Date().toISOString(),g=be.firestore.FieldValue.serverTimestamp(),H={orderId:o,txId:o,source:"pos",channel:"pos",status:$==="tempo"?"Diproses":"Selesai",timestamp:g,dateString:l,dateMs:Date.now(),cashier:b,cashierName:x,customer:{name:e,phone:t,wa:t,address:"Beli Langsung di Kasir (POS)",deliveryMethod:"takeaway",isMember:!!u.isMember,memberId:u.memberId||null},customerName:e,customerPhone:t,customerType:u.isMember?"Member":"Pelanggan Umum",items:m.map(k=>({id:k.id,name:k.name,price:parseFloat(k.price)||0,basePrice:parseFloat(k.basePrice||k.price)||0,qty:parseFloat(k.qty)||1,discount:parseFloat(k.discount)||0,subtotal:parseFloat(k.subtotal)||0,variantName:k.variantName||"",isVariant:!!k.isVariant,isWholesale:!!k.isWholesale,effectivePrice:parseFloat(k.price)||0})),payment:{method:$,subtotal:_(),productDiscount:V(O),shippingCost:0,grandTotal:T(),paid:$==="cash"?D:$==="tempo"?a:T(),change:$==="cash"?Le():0,bank:s,paymentStatus:$==="tempo"?"hutang":"lunas",tempoDp:a,tempoBalance:$==="tempo"?T()-a:0,tempoDueDate:Date.now()+30*24*60*60*1e3,tempoPenaltyRate:1,tempoPenaltyStopped:!1},subtotal:_(),globalDiscount:F(),discountType:C,discountVal:M,total:T(),isTempo:$==="tempo",pointsEarned:0,notes:""};if(u.isMember&&t){const A=(typeof window.calculateCartPoints=="function"?window.calculateCartPoints(m,p.store):{totalPoints:0}).totalPoints||0;if(A>0){H.pointsEarned=A;try{const I=t.replace(/\D/g,""),v=String(u.memberId||I);if(await Q.collection("freshmart").doc("cms_data").collection("customers").doc(v).set({points:be.firestore.FieldValue.increment(A),lastOrderAt:l},{merge:!0}),p.customers){const B=p.customers.find(P=>P&&(String(P.id)===v||String(P.phone).replace(/\D/g,"")===I));B&&(B.points=(parseFloat(B.points)||0)+A)}}catch(I){console.warn("[POS] Gagal update poin member:",I)}}}if(await Q.collection("freshmart_orders").doc(o).set(H),n){const k=[];for(const A of m){const I=String(A.id),v=(p.products||[]).find(P=>String(P.id)===I);if(!v)continue;const Z=parseFloat(A.qty)||0,B={};if(A.variantName&&v.variants){const P=v.variants.findIndex(dt=>dt.name===A.variantName);P>-1&&(v.variants[P].stock=Math.max(0,(parseFloat(v.variants[P].stock)||0)-Z),v.variants[P].stock===0&&(v.variants[P].isActive=!1),v.variants[P].totalSold=(parseFloat(v.variants[P].totalSold)||0)+Z,B.variants=v.variants)}else v.stock=Math.max(0,(parseFloat(v.stock)||0)-Z),B.stock=v.stock,v.stock===0&&(v.isActive="false",B.isActive="false"),v.totalSold=(parseFloat(v.totalSold)||0)+Z,B.totalSold=v.totalSold;try{await Q.collection("freshmart").doc("cms_data").collection("products").doc(I).update(B),k.push(I)}catch(P){console.warn("[POS] Gagal update stok produk di Firestore:",I,P)}}if(k.length>0)try{await Q.collection("freshmart").doc("cms_data").update({lastUpdate:be.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:k})}catch{}}qe(),ae(!0);const L={...H};m=[],O=0,M=0,C="rp",S(),j(),Ct(L)}catch(o){console.error("[POS] Error:",o),w("Gagal menyimpan transaksi. Coba lagi.","error"),r&&(r.disabled=!1,r.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi')}},Ct=e=>{const t=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${f(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,a=JSON.stringify(e).replace(/"/g,"&quot;"),s=!!document.getElementById("pos-admin-container")||typeof window.cTab=="function"&&window.cTab()==="pos";document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.65);backdrop-filter:blur(4px)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">#${i(e.txId)}</p>
          <p class="text-2xl font-black mb-1" style="color:var(--color-primary)">${f(e.total)}</p>
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
          ${s?`
          <button onclick="document.getElementById('pos-success-modal')?.remove(); if(typeof window.openAdminTab==='function') window.openAdminTab('orders');" class="w-full py-2.5 rounded-xl text-slate-500 dark:text-slate-400 text-xs font-bold hover:text-[var(--color-primary)] transition-all flex items-center justify-center gap-1.5 cursor-pointer">
            <i class="fa-solid fa-receipt"></i> Buka Menu Pesanan Toko
          </button>`:""}
        </div>
      </div>
    </div>`)},At=e=>{document.getElementById("pos-success-modal")?.remove();const t=typeof oe=="function"?oe():{paperSize:"58mm"},a=t.paperSize==="80mm",s=t.headerText||p.store?.name||"TOKO PUTRI",r=p.store?.wa||"",n=p.store?.address||"",o=t.footerText||"Terima Kasih Atas Kunjungan Anda!",c=new Date(e.dateMs||Date.now()).toLocaleString("id-ID"),x=(e.items||[]).map(g=>`<tr><td style="padding:2px 0;word-wrap:break-word">${i(g.name)}</td><td style="text-align:right;padding:2px 4px;white-space:nowrap">${g.qty}x ${f(g.price)}</td><td style="text-align:right;padding:2px 0;white-space:nowrap;font-weight:bold">${f(g.subtotal)}</td></tr>`).join(""),b=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon",l=window.open("","_blank",`width=${a?460:360},height=720`);if(!l){document.getElementById("pos-receipt-fallback-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
        <div id="pos-receipt-fallback-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.7);backdrop-filter:blur(4px)">
            <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${a?"max-w-md":"max-w-sm"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
                <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                    <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-amber-500"></i>Struk Thermal POS (${a?"80mm":"58mm"})</span>
                    <button onclick="document.getElementById('pos-receipt-fallback-modal')?.remove()" class="w-7 h-7 rounded-lg bg-slate-200/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 text-sm leading-none flex items-center justify-center cursor-pointer">×</button>
                </div>
                <div id="pos-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-2 select-text">
                    <div class="text-center font-bold text-sm uppercase">${i(s)}</div>
                    ${n?`<div class="text-center text-[10px] text-slate-500">${i(n)}</div>`:""}
                    ${r?`<div class="text-center text-[10px] text-slate-500">WA: ${i(r)}</div>`:""}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div>No : <b>#${i(e.txId)}</b></div>
                    <div>Tgl: ${i(c)}</div>
                    <div>Kasir: ${i(e.cashierName||"Kasir")}</div>
                    <div>Plg : ${i(e.customer?.name||"Umum")}</div>
                    ${e.customer?.phone?`<div>HP  : ${i(e.customer.phone)}</div>`:""}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <table class="w-full text-[11px]">
                        ${x}
                    </table>
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="flex justify-between"><span>Subtotal</span><span>${f(e.subtotal)}</span></div>
                    ${(e.globalDiscount||0)>0?`<div class="flex justify-between text-rose-500 font-bold"><span>${b}</span><span>- ${f(e.globalDiscount)}</span></div>`:""}
                    <div class="flex justify-between font-black text-sm pt-1 border-t border-slate-200 dark:border-slate-700"><span>TOTAL</span><span style="color:var(--color-primary)">${f(e.total)}</span></div>
                    ${e.payment.method==="cash"?`<div class="flex justify-between"><span>Bayar</span><span>${f(e.payment.paid)}</span></div><div class="flex justify-between font-bold text-emerald-600"><span>Kembalian</span><span>${f(e.payment.change)}</span></div>`:""}
                    ${e.payment.method==="tempo"?`<div class="flex justify-between"><span>DP</span><span>${f(e.payment.dp||0)}</span></div><div class="flex justify-between font-bold text-amber-600"><span>Sisa Piutang</span><span>${f(e.payment.tempoBalance||0)}</span></div>`:""}
                    <div class="flex justify-between"><span>Metode</span><span>${i(e.payment.method.toUpperCase())}</span></div>
                    ${e.pointsEarned>0?`
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="flex justify-between text-amber-600 dark:text-amber-400 font-bold"><span>Poin Member:</span><span>+${e.pointsEarned} Poin</span></div>`:""}
                    <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                    <div class="text-center text-[10px] text-slate-400 my-1">${i(o)}</div>
                </div>
                <div class="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex gap-2">
                    <button onclick="window.executePOSPrintDirect()" class="flex-1 py-2.5 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-95" style="background:var(--color-primary)">
                        <i class="fa-solid fa-print"></i> Cetak Struk
                    </button>
                    <button onclick="if(typeof window.openPrinterSettingsModal==='function') window.openPrinterSettingsModal();" class="px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs flex items-center gap-1 cursor-pointer transition-all" title="Pengaturan Printer">
                        <i class="fa-solid fa-gear"></i>
                    </button>
                </div>
            </div>
        </div>`);return}l.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Struk POS</title>
    <style>*{box-sizing:border-box}body{font-family:'Courier New',monospace;font-size:12px;max-width:${a?"330px":"260px"};margin:0 auto;padding:12px}
    h2{text-align:center;font-size:14px;font-weight:900;margin:2px 0;text-transform:uppercase}p{margin:1px 0;text-align:center;font-size:11px}.left{text-align:left}
    table{width:100%;border-collapse:collapse}.line{border-top:1px dashed #333;margin:6px 0}.total{font-weight:900;font-size:13px}
    </style></head><body>
    <h2>${s}</h2>${n?`<p>${i(n)}</p>`:""}${r?`<p>WA: ${i(r)}</p>`:""}
    <div class="line"></div>
    <p class="left">No: <b>#${i(e.txId)}</b></p><p class="left">Tgl: ${i(c)}</p>
    <p class="left">Kasir: ${i(e.cashierName||"Kasir")}</p><p class="left">Pelanggan: ${i(e.customer?.name||"Umum")}</p>
    ${e.customer?.phone?`<p class="left">HP: ${i(e.customer.phone)}</p>`:""}
    <div class="line"></div><table>${x}</table><div class="line"></div>
    <table>
    <tr><td>Subtotal</td><td style="text-align:right">${f(e.subtotal)}</td></tr>
    ${(e.globalDiscount||0)>0?`<tr><td>${b}</td><td style="text-align:right">- ${f(e.globalDiscount)}</td></tr>`:""}
    <tr class="total"><td>TOTAL</td><td style="text-align:right">${f(e.total)}</td></tr>
    ${e.payment.method==="cash"?`<tr><td>Bayar</td><td style="text-align:right">${f(e.payment.paid)}</td></tr><tr><td><b>Kembalian</b></td><td style="text-align:right"><b>${f(e.payment.change)}</b></td></tr>`:""}
    ${e.payment.method==="tempo"?`<tr><td>DP</td><td style="text-align:right">${f(e.payment.dp||0)}</td></tr><tr><td>Sisa Piutang</td><td style="text-align:right">${f(e.payment.tempoBalance||0)}</td></tr>`:""}
    <tr><td>Metode</td><td style="text-align:right">${i(e.payment.method.toUpperCase())}</td></tr>
    ${e.pointsEarned>0?`<tr><td>Poin Member</td><td style="text-align:right">+${e.pointsEarned}</td></tr>`:""}
    </table><div class="line"></div>
    <p style="text-align:center;font-size:10px">${i(o)}</p>
    <p style="text-align:center;font-size:9px">Barang yang sudah dibeli tidak dapat ditukar/dikembalikan</p>
    <script>window.onload=()=>{window.print();setTimeout(()=>window.close(),800)}<\/script>
    </body></html>`),l.document.close()},Ye=()=>{const e=typeof oe=="function"?oe():{deviceType:"system"},t=d("pos-receipt-paper-box");if(t)if(e.deviceType==="rawbt"&&window.AndroidNativeApp&&typeof window.AndroidNativeApp.printRawBT=="function"){const a=t.innerText,s=btoa(unescape(encodeURIComponent(a)));window.AndroidNativeApp.printRawBT(s)}else window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():window.print()},Xe=({isStorefront:e})=>{const a=(typeof window.getCashierSession=="function"?window.getCashierSession():null)?.name||(e?"Kasir":"Admin Seller"),s=i(p.store?.name||"Toko Putri");return`
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
                        <h1 class="text-xs font-black uppercase tracking-wider leading-none text-white truncate">${s}</h1>
                        <div class="flex items-center gap-1.5 mt-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                            <span class="text-[10px] text-white/90 font-medium truncate">${i(a)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span id="pos-live-clock" class="hidden sm:inline-block text-[10px] font-mono text-white/90 px-2.5 py-1 bg-black/15 rounded-lg border border-white/20">--:--:--</span>
                <span class="hidden md:inline-flex items-center gap-1.5 text-[10px] font-bold text-white bg-black/20 px-2.5 py-1 rounded-lg">
                    <i class="fa-solid fa-barcode text-xs"></i> USB Scanner Aktif
                </span>
                <div id="pos-held-btn-storefront" class="flex items-center"></div>
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
                <div id="pos-held-btn-admin" class="flex items-center"></div>
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
                            <input id="pos-search-input" type="text" placeholder="Cari barang, barcode USB, atau SKU (F4)..." 
                                class="w-full pl-9 pr-9 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white dark:focus:bg-slate-900 transition-all"
                                oninput="window.posSearchFn(this.value)">
                            <button onclick="el('pos-search-input').value=''; window.posSearchFn('');" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs p-1 cursor-pointer" title="Hapus pencarian">
                                <i class="fa-solid fa-circle-xmark"></i>
                            </button>
                        </div>
                        <!-- Tombol Scan Barcode Kamera HP / Laptop (F9) -->
                        <button onclick="window.openPOSCameraScanner()" class="h-9 px-2.5 sm:px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 border border-emerald-200 dark:border-emerald-800/80 shrink-0 cursor-pointer shadow-2xs" title="Scan Barcode Kamera (F9)">
                            <i class="fa-solid fa-camera text-emerald-600 dark:text-emerald-400 text-xs"></i>
                            <span class="hidden sm:inline">Scan (F9)</span>
                        </button>
                        <!-- View Switcher (Grid vs List) -->
                        <div class="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shrink-0">
                            <button id="pos-view-btn-grid" onclick="window.setPOSViewMode('grid')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${N==="grid"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${N==="grid"?"background:var(--color-primary)":""}" title="Tampilan Grid Foto">
                                <i class="fa-solid fa-grip"></i>
                            </button>
                            <button id="pos-view-btn-list" onclick="window.setPOSViewMode('list')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${N==="list"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${N==="list"?"background:var(--color-primary)":""}" title="Tampilan List Baris Kompak">
                                <i class="fa-solid fa-list-ul"></i>
                            </button>
                        </div>
                    </div>
                    <!-- Kategori Chips -->
                    <div id="pos-cat-filter" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
                </div>

                <!-- Product Catalog Container -->
                <div id="pos-catalog-grid" class="${N==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode"}"></div>
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
                    <div class="flex items-center gap-1.5 shrink-0">
                        <button onclick="window.posHoldCurrentCart()" class="pos-hold-btn-target text-[10px] font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 px-2 py-1 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-all cursor-pointer flex items-center gap-1 whitespace-nowrap" title="Tahan transaksi sementara (F6)">
                            <i class="fa-solid fa-pause"></i><span>Tahan</span>
                        </button>
                        <button onclick="window.posClearCart()" class="text-[10px] font-bold text-rose-500 hover:text-rose-600 px-2 py-1 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer flex items-center gap-1 shrink-0 whitespace-nowrap">
                            <i class="fa-solid fa-trash-can"></i><span>Kosongkan</span>
                        </button>
                    </div>
                </div>

                <!-- Items List Desktop -->
                <div class="pos-cart-items-target flex-1 overflow-y-auto p-3 space-y-2"></div>

                <!-- Summary & Bayar Desktop -->
                <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 shrink-0 space-y-2.5">
                    <div class="flex justify-between text-xs text-slate-500 font-medium">
                        <span>Subtotal Item</span>
                        <span class="pos-subtotal-target font-bold text-slate-800 dark:text-slate-200">Rp 0</span>
                    </div>
                    <!-- Smart Diskon Transaksi Kasir (Rp / %) -->
                    <div class="space-y-1.5 p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700/60 text-xs">
                        <div class="flex items-center justify-between">
                            <span class="text-slate-600 dark:text-slate-300 font-bold flex items-center gap-1.5">
                                <i class="fa-solid fa-tags text-[var(--color-primary)] text-[11px]"></i>
                                <span>Diskon Transaksi</span>
                            </span>
                            <div class="flex items-center bg-slate-200 dark:bg-slate-700 rounded-lg p-0.5 text-[10px]">
                                <button onclick="window.posSetDiscountType('rp')" class="pos-disc-type-rp px-2 py-0.5 rounded-md transition-all cursor-pointer font-black">Rp</button>
                                <button onclick="window.posSetDiscountType('percent')" class="pos-disc-type-pct px-2 py-0.5 rounded-md transition-all cursor-pointer font-bold">%</button>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="flex-1 relative">
                                <span class="pos-disc-prefix absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold">Rp</span>
                                <input type="number" min="0" placeholder="0" class="pos-disc-val-input w-full border border-slate-200 dark:border-slate-700 rounded-lg pl-8 pr-2.5 py-1 text-right text-xs font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]" oninput="window.posSetDiscountVal(this.value)">
                            </div>
                            <div class="pos-disc-preview-target text-[10px] font-black text-rose-500 whitespace-nowrap min-w-[70px] text-right">Rp 0</div>
                        </div>
                        <div class="pos-disc-chips-target flex gap-1 overflow-x-auto hide-scrollbar pt-0.5"></div>
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
                        <button onclick="window.posHoldCurrentCart()" class="pos-hold-btn-target text-[10px] font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 px-2 py-1 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer" title="Tahan transaksi sementara"><i class="fa-solid fa-pause"></i><span>Tahan</span></button>
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
                    <!-- Smart Diskon Transaksi Kasir (Rp / %) di Mobile Drawer -->
                    <div class="space-y-1.5 p-2 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700/60 text-xs">
                        <div class="flex items-center justify-between">
                            <span class="text-slate-600 dark:text-slate-300 font-bold flex items-center gap-1.5">
                                <i class="fa-solid fa-tags text-[var(--color-primary)] text-[11px]"></i>
                                <span>Diskon Transaksi</span>
                            </span>
                            <div class="flex items-center bg-slate-200 dark:bg-slate-700 rounded-lg p-0.5 text-[10px]">
                                <button onclick="window.posSetDiscountType('rp')" class="pos-disc-type-rp px-2 py-0.5 rounded-md transition-all cursor-pointer font-black">Rp</button>
                                <button onclick="window.posSetDiscountType('percent')" class="pos-disc-type-pct px-2 py-0.5 rounded-md transition-all cursor-pointer font-bold">%</button>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="flex-1 relative">
                                <span class="pos-disc-prefix absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold">Rp</span>
                                <input type="number" min="0" placeholder="0" class="pos-disc-val-input w-full border border-slate-200 dark:border-slate-700 rounded-lg pl-8 pr-2.5 py-1 text-right text-xs font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]" oninput="window.posSetDiscountVal(this.value)">
                            </div>
                            <div class="pos-disc-preview-target text-[10px] font-black text-rose-500 whitespace-nowrap min-w-[70px] text-right">Rp 0</div>
                        </div>
                        <div class="pos-disc-chips-target flex gap-1 overflow-x-auto hide-scrollbar pt-0.5"></div>
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
    `},Dt=()=>{W="",z="",m=[],O=0;const e=d("view-pos-cashier");e&&(e.innerHTML=Xe({isStorefront:!0}),j(),S(),X(),je(),Oe(),G(),Ze())},Ht=()=>{W="",z="";const e=d("view-admin");e&&e.classList.add("admin-pos-mode"),d("admin-content")&&(pt("admin-content",`<div class="h-full w-full flex flex-col overflow-hidden">${Xe({isStorefront:!1})}</div>`),j(),S(),X(),je(),Oe(),G(),Ze())},Ze=()=>{window.setPOSViewMode=He,window.posAddToCart=ke,window.posAddToCartQty=xt,window.addToCartPOSWithVariant=ft,window.posUpdateQty=gt,window.posSetQty=wt,window.posSetItemDisc=ht,window.posRemoveItem=kt,window.posClearCart=vt,window.openPayModal=Pt,window.closePayModal=qe,window.setPosCustomerType=$t,window.setPosPayMethod=_e,window.updatePosChange=Qe,window.posSetQuickCash=ze,window.ensureCustomersLoaded=G,window.ensureBanksLoaded=ce,window.lookupPosMember=pe,window.debouncedLookupPosMember=Je,window.selectPosMember=We,window.resetPosMember=Ge,window.processPOSTx=Mt,window.printPOSReceipt=At,window.posSetGlobalDisc=e=>{we(e)},window.posSetDiscountType=et,window.posSetDiscountVal=we,window.posApplyQuickDiscount=tt,window.openPOSCameraScanner=Pe,window.closePOSCameraScanner=Y,window.togglePOSScannerFacing=ot,window.togglePOSScannerTorch=rt,window.togglePOSScannerMode=nt,window.posProcessManualBarcode=lt,window.posSearchScannedCode=it,window.executePOSPrintDirect=Ye,window.posCatFilter=e=>{z=e,j()},window.posSearchFn=e=>{W=e,j()},window.openPOSCartDrawer=Ke,window.closePOSCartDrawer=ae,window.playCashierBeep=K,window.openPOSHistory=()=>{typeof window.openAdminTab=="function"?window.openAdminTab("orders"):typeof window.showToast=="function"&&window.showToast("Semua transaksi kasir terpusat di menu Pesanan CMS Admin")},window.destroyBarcodeListener=he,window.playCashierChime=ne,window.posHoldCurrentCart=ve,window.closePOSHoldPrompt=ye,window.posConfirmHoldCart=Ie,window.openPOSHeldModal=ie,window.closePOSHeldModal=de,window.posRecallHeldCart=Be,window.posHoldCurrentAndRecall=Re,window.posOverwriteAndRecall=Ne,window.posDeleteHeldCart=Ee,window.posExecuteDeleteHeld=Fe,window.renderHeldBadges=X},et=e=>{C=e==="percent"?"percent":"rp",O=F(),S()},we=e=>{M=Math.max(0,parseFloat(e)||0),O=F(),S()},tt=(e,t)=>{t&&(C=t),M=e,O=F(),S(),K()},Pe=async()=>{if(d("pos-camera-scanner-modal"))return;typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCameraScanner"),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-camera-scanner-modal" class="fixed inset-0 z-[10010] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.85);backdrop-filter:blur(8px)">
        <div class="bg-slate-900 text-white rounded-3xl shadow-2xl w-full max-w-md border border-slate-700/80 overflow-hidden flex flex-col max-h-[92vh]">
            <!-- Modal Header -->
            <div class="p-3.5 sm:p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 shrink-0">
                <div class="flex items-center gap-2 min-w-0">
                    <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold shadow-inner">
                        <i class="fa-solid fa-camera"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-xs sm:text-sm text-white leading-tight">Pemindai Barcode Kamera</h3>
                        <p class="text-[10px] text-slate-400">Arahkan kamera ke barcode / QR produk</p>
                    </div>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                    <!-- Toggle Torch (Flash) -->
                    <button id="pos-scanner-torch-btn" onclick="window.togglePOSScannerTorch()" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center justify-center transition-all cursor-pointer" title="Lampu Flash / Senter">
                        <i class="fa-solid fa-bolt"></i>
                    </button>
                    <!-- Switch Camera -->
                    <button onclick="window.togglePOSScannerFacing()" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center justify-center transition-all cursor-pointer" title="Putar Kamera">
                        <i class="fa-solid fa-camera-rotate"></i>
                    </button>
                    <!-- Close -->
                    <button onclick="window.closePOSCameraScanner()" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-rose-900/50 text-slate-400 hover:text-rose-400 text-base flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
                </div>
            </div>

            <!-- Viewport Kamera -->
            <div class="relative w-full bg-black flex items-center justify-center overflow-hidden aspect-[4/3] sm:h-72">
                <video id="pos-camera-video" playsinline autoplay muted class="w-full h-full object-cover"></video>
                
                <!-- Reticle Target Aiming Box -->
                <div id="pos-scanner-reticle" class="absolute w-[72%] max-w-[260px] aspect-[1.3/1] border-2 border-emerald-400/90 rounded-2xl shadow-[0_0_0_9999px_rgba(15,23,42,0.55)] pointer-events-none transition-all duration-200">
                    <!-- Corner Brackets -->
                    <span class="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-emerald-400 rounded-tl-lg"></span>
                    <span class="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-emerald-400 rounded-tr-lg"></span>
                    <span class="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-emerald-400 rounded-bl-lg"></span>
                    <span class="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-emerald-400 rounded-br-lg"></span>
                    
                    <!-- Laser Scanline Animation -->
                    <div class="pos-scanline"></div>
                </div>

                <!-- Floating Feedback Pill -->
                <div id="pos-scanner-status-pill" class="absolute bottom-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-bold text-slate-300 flex items-center gap-1.5 shadow-md">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Menunggu barcode...</span>
                </div>
            </div>

            <!-- Action Strip & Options -->
            <div class="p-3 bg-slate-950/80 border-t border-slate-800 space-y-2.5 shrink-0">
                <!-- Mode Continuous vs Single -->
                <div class="flex items-center justify-between text-xs px-1">
                    <span class="text-slate-400 text-[11px] font-medium flex items-center gap-1.5">
                        <i class="fa-solid fa-repeat text-emerald-400 text-xs"></i>
                        Mode Pemindaian:
                    </span>
                    <button onclick="window.togglePOSScannerMode()" id="pos-scanner-mode-btn" class="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-400 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer">
                        Terus-menerus
                    </button>
                </div>

                <!-- Fallback Input Manual Barcode -->
                <div class="flex items-center gap-1.5">
                    <div class="relative flex-1">
                        <i class="fa-solid fa-barcode absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
                        <input id="pos-manual-barcode-input" type="text" placeholder="Atau ketik/scan nomor barcode..."
                            class="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-700 bg-slate-800 text-xs font-mono font-bold text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all"
                            onkeydown="if(event.key==='Enter') window.posProcessManualBarcode(this.value)">
                    </div>
                    <button onclick="window.posProcessManualBarcode(document.getElementById('pos-manual-barcode-input')?.value)"
                        class="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all active:scale-95 shadow-md cursor-pointer">
                        Tambah
                    </button>
                </div>

                <!-- Last Scanned Banner -->
                <div id="pos-last-scanned-banner" class="hidden p-2 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-[11px] text-emerald-300 flex items-center justify-between">
                    <div class="flex items-center gap-1.5 min-w-0">
                        <i class="fa-solid fa-circle-check text-emerald-400 shrink-0"></i>
                        <span id="pos-last-scanned-text" class="truncate font-bold">-</span>
                    </div>
                    <span id="pos-last-scanned-price" class="font-black text-emerald-400 shrink-0 ml-2">-</span>
                </div>
            </div>
        </div>
    </div>`),await at()},at=async()=>{const e=d("pos-camera-video");if(e)try{const t={video:{facingMode:{ideal:xe},width:{ideal:1280},height:{ideal:720}},audio:!1},a=await navigator.mediaDevices.getUserMedia(t);U=a,e.srcObject=a,await e.play();const s=a.getVideoTracks();if(s.length>0){q=s[0];const r=q.getCapabilities?q.getCapabilities():{},n=d("pos-scanner-torch-btn");n&&(r.torch?n.classList.remove("hidden"):n.classList.add("opacity-40"))}if(typeof window.BarcodeDetector<"u")try{se=new BarcodeDetector({formats:["ean_13","ean_8","upc_a","upc_e","code_128","code_39","code_93","qr_code","data_matrix"]})}catch{se=null}J&&clearInterval(J),J=setInterval(async()=>{if(!(!se||!e||e.readyState<2))try{const r=await se.detect(e);if(r&&r.length>0){const n=r[0].rawValue?.trim();n&&st(n)}}catch{}},180)}catch(t){console.warn("[POS Scanner] Gagal akses kamera:",t);const a=d("pos-scanner-status-pill");a&&(a.innerHTML='<span class="text-rose-400 font-bold"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Kamera tidak dapat diakses</span>'),w("Izin kamera ditolak atau kamera sedang digunakan aplikasi lain.","warning")}},st=e=>{const t=Date.now();if(e===Me&&t-Ce<1800)return;Me=e,Ce=t;const a=e.toLowerCase(),s=(p.products||[]).find(b=>b&&b.isActive!=="false"&&b.isActive!==!1&&(b.barcode&&b.barcode.toLowerCase()===a||b.sku&&b.sku.toLowerCase()===a||b.id&&String(b.id).toLowerCase()===a)),r=d("pos-scanner-reticle"),n=d("pos-scanner-status-pill"),o=d("pos-last-scanned-banner"),c=d("pos-last-scanned-text"),x=d("pos-last-scanned-price");if(s){if(r&&(r.classList.add("border-emerald-300","scale-105","bg-emerald-500/20"),setTimeout(()=>{r.classList.remove("border-emerald-300","scale-105","bg-emerald-500/20")},300)),K(),s.variants&&s.variants.length>0){n&&(n.innerHTML='<span class="text-amber-300 font-bold">Buka pilihan varian...</span>'),Y(),De().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(s.id)});return}ke(s.id),o&&c&&x&&(c.textContent=s.name,x.textContent=f(parseFloat(s.price)||0),o.classList.remove("hidden")),n&&(n.innerHTML=`<span class="text-emerald-300 font-black"><i class="fa-solid fa-check mr-1"></i>${i(s.name)} (+1)</span>`,setTimeout(()=>{n&&(n.innerHTML='<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>')},1500)),re||(Y(),w(`Ditambahkan: ${s.name}`,"success"))}else r&&(r.classList.add("border-rose-500","bg-rose-500/20"),setTimeout(()=>{r.classList.remove("border-rose-500","bg-rose-500/20")},400)),n&&(n.innerHTML=`<span class="text-rose-400 font-bold"><i class="fa-solid fa-xmark mr-1"></i>Barcode "${e}" tidak ditemukan</span>`)},Y=(e=!1)=>{if(J&&(clearInterval(J),J=null),U){try{U.getTracks().forEach(a=>a.stop())}catch{}U=null}q=null,ee=!1;const t=d("pos-camera-scanner-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCameraScanner",!1,()=>t.remove()):t.remove())},rt=async()=>{if(q)try{if(!(q.getCapabilities?q.getCapabilities():{}).torch){w("Lampu senter (torch) tidak didukung kamera ini.");return}ee=!ee,await q.applyConstraints({advanced:[{torch:ee}]});const t=d("pos-scanner-torch-btn");t&&(ee?(t.classList.add("bg-amber-500","text-white"),t.classList.remove("bg-slate-800","text-slate-300")):(t.classList.remove("bg-amber-500","text-white"),t.classList.add("bg-slate-800","text-slate-300")))}catch(e){console.warn("Gagal toggle torch:",e)}},ot=async()=>{xe=xe==="environment"?"user":"environment",U&&(U.getTracks().forEach(e=>e.stop()),U=null),await at()},nt=()=>{re=!re;const e=d("pos-scanner-mode-btn");e&&(re?(e.textContent="Terus-menerus",e.className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-400 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"):(e.textContent="Scan Sekali",e.className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"))},lt=e=>{if(!e||!e.trim())return;st(e.trim());const t=d("pos-manual-barcode-input");t&&(t.value="")},it=e=>{Y();const t=d("pos-search-input");t&&(t.value=e,W=e,j())};window.setPOSViewMode=He;window.renderPOSStorefront=Dt;window.renderPOS=Ht;window.destroyBarcodeListener=he;window.openPOSCartDrawer=Ke;window.closePOSCartDrawer=ae;window.posSetQuickCash=ze;window.playCashierBeep=K;window.playCashierChime=ne;window.posHoldCurrentCart=ve;window.closePOSHoldPrompt=ye;window.posConfirmHoldCart=Ie;window.openPOSHeldModal=ie;window.closePOSHeldModal=de;window.posRecallHeldCart=Be;window.posHoldCurrentAndRecall=Re;window.posOverwriteAndRecall=Ne;window.posDeleteHeldCart=Ee;window.posExecuteDeleteHeld=Fe;window.renderHeldBadges=X;window.ensureCustomersLoaded=G;window.ensureBanksLoaded=ce;window.lookupPosMember=pe;window.debouncedLookupPosMember=Je;window.selectPosMember=We;window.resetPosMember=Ge;window.posSetDiscountType=et;window.posSetDiscountVal=we;window.posApplyQuickDiscount=tt;window.openPOSCameraScanner=Pe;window.closePOSCameraScanner=Y;window.togglePOSScannerFacing=ot;window.togglePOSScannerTorch=rt;window.togglePOSScannerMode=nt;window.posProcessManualBarcode=lt;window.posSearchScannedCode=it;window.executePOSPrintDirect=Ye;export{ke as addToCart,ft as addToCartWithVariant,ge as applyMemberToPos,vt as clearCart,Y as closePOSCameraScanner,ae as closePOSCartDrawer,de as closePOSHeldModal,ye as closePOSHoldPrompt,qe as closePayModal,Je as debouncedLookupPosMember,he as destroyBarcodeListener,ce as ensureBanksLoaded,G as ensureCustomersLoaded,Ye as executePOSPrintDirect,te as getProductStockInfo,pe as lookupPosMember,Pe as openPOSCameraScanner,Ke as openPOSCartDrawer,ie as openPOSHeldModal,Pt as openPayModal,K as playCashierBeep,ne as playCashierChime,xt as posAddToCartQty,tt as posApplyQuickDiscount,Ie as posConfirmHoldCart,Ee as posDeleteHeldCart,F as posDiscountAmount,Fe as posExecuteDeleteHeld,Re as posHoldCurrentAndRecall,ve as posHoldCurrentCart,Ne as posOverwriteAndRecall,lt as posProcessManualBarcode,Be as posRecallHeldCart,it as posSearchScannedCode,et as posSetDiscountType,we as posSetDiscountVal,ze as posSetQuickCash,At as printPOSReceipt,Mt as processPOSTx,kt as removeFromCart,X as renderHeldBadges,Ht as renderPOS,Dt as renderPOSStorefront,Ge as resetPosMember,We as selectPosMember,ht as setItemDisc,He as setPOSViewMode,$t as setPosCustomerType,_e as setPosPayMethod,wt as setQty,ot as togglePOSScannerFacing,nt as togglePOSScannerMode,rt as togglePOSScannerTorch,Qe as updatePosChange,gt as updateQty};
