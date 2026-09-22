const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pos-variant-sheet-D2tC43LA.js","assets/module-print-DoqR8CYY.js"])))=>i.map(i=>d[i]);
import{d as I,_ as A}from"./module-member-BNxoSmem.js";import{a as u,e as d,t as y,i as n,b as O,r as q,f as Y,x as he,u as we}from"./module-print-DoqR8CYY.js";import{f as F}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";let Q=!1;const ye=()=>Q?Promise.resolve():A(()=>import("./pos-variant-sheet-D2tC43LA.js"),__vite__mapDeps([0,1])).then(()=>{Q=!0});let m=[],j="",T="",w={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},h="cash",C=0,M=0,$="",U=null;const S=e=>Math.max(0,parseInt(e)||0),b=e=>Y(e),B=()=>m.reduce((e,a)=>e+a.subtotal,0),f=()=>Math.max(0,B()-S(M)),J=()=>Math.max(0,C-f()),ve=(e,a)=>{if(!e||!e.wholesale||!e.wholesale.length)return null;const s=[...e.wholesale].sort((o,t)=>t.minQty-o.minQty);for(const o of s)if(a>=parseFloat(o.minQty))return parseFloat(o.price);return null},P=e=>{if(!e.isVariant){const a=(u.products||[]).find(o=>o&&String(o.id)===String(e.id)),s=a?ve(a,e.qty):null;s!==null?(e.basePrice=e.basePrice||e.price,e.price=s,e.isWholesale=!0):(e.basePrice&&(e.price=e.basePrice),e.isWholesale=!1)}return e.subtotal=Math.max(0,e.price*e.qty-S(e.discount)),e},ke=()=>{const e=new Date,a=s=>String(s).padStart(2,"0");return`POS-${e.getFullYear()}${a(e.getMonth()+1)}${a(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},X=()=>{window.__posBarcodeFn&&document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=e=>{const a=document.activeElement?.tagName?.toLowerCase();if(!(a==="input"||a==="textarea"||a==="select"))if(e.key==="Enter"){if($.length>=3){const s=$.trim().toLowerCase(),o=(u.products||[]).find(t=>t&&t.isActive!=="false"&&t.isActive!==!1&&(t.barcode&&t.barcode.toLowerCase()===s||t.sku&&t.sku.toLowerCase()===s||t.id&&String(t.id).toLowerCase()===s));if(o)E(o.id),y(`Ditambahkan: ${o.name}`,"success");else{const t=d("pos-search-input-d");t&&(t.value=$,j=$,L()),y("Barcode tidak ditemukan di katalog","warning")}$=""}}else e.key.length===1&&($+=e.key,clearTimeout(U),U=setTimeout(()=>{$=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},E=e=>{const a=(u.products||[]).find(t=>t&&String(t.id)===String(e));if(!a)return;if(a.variants&&a.variants.length>0){ye().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(e)});return}const o=m.find(t=>String(t.id)===String(e)&&!t.isVariant);if(o)o.qty+=1,P(o);else{const t=parseFloat(a.price)||0;m.push(P({id:a.id,name:a.name,price:t,basePrice:t,qty:1,discount:0,subtotal:t,isVariant:!1,isWholesale:!1}))}v()},Z=(e,a)=>{const s=(u.products||[]).find(t=>t&&String(t.id)===String(e));if(!s)return;const o=m.find(t=>String(t.id)===String(e)&&!t.isVariant);if(o)o.qty+=a,P(o);else{const t=parseFloat(s.price)||0,i=P({id:s.id,name:s.name,price:t,basePrice:t,qty:a,discount:0,subtotal:t*a,isVariant:!1,isWholesale:!1});m.push(i)}v()},ee=(e,a,s,o,t=1)=>{const i=`${e}__v${o}`,r=m.find(p=>p.cartKey===i);if(r)r.qty+=t,P(r);else{const l=`${(u.products||[]).find(c=>c&&String(c.id)===String(e))?.name||e} — ${a}`;m.push(P({id:e,cartKey:i,name:l,variantName:a,variantIdx:o,price:s,basePrice:s,qty:t,discount:0,subtotal:s*t,isVariant:!0,isWholesale:!1}))}v()},te=(e,a)=>{const s=m.find(o=>(o.cartKey||String(o.id))===String(e));s&&(s.qty=Math.max(1,s.qty+a),P(s),v())},ae=(e,a)=>{const s=m.find(o=>(o.cartKey||String(o.id))===String(e));s&&(s.qty=Math.max(1,S(a)),P(s),v())},se=(e,a)=>{const s=m.find(o=>(o.cartKey||String(o.id))===String(e));s&&(s.discount=Math.min(S(a),s.price*s.qty),P(s),v())},oe=e=>{m=m.filter(a=>(a.cartKey||String(a.id))!==String(e)),v()},re=()=>{m=[],M=0,v()},L=()=>{const e=(u.products||[]).filter(r=>{if(!r||r.isActive==="false"||r.isActive===!1||T&&r.category!==T)return!1;if(j){const p=j.toLowerCase();return(r.name||"").toLowerCase().includes(p)||(r.barcode||"").toLowerCase().includes(p)||(r.sku||"").toLowerCase().includes(p)}return!0}),s=["Semua",...new Set((u.products||[]).filter(r=>r&&r.isActive!=="false"&&r.category).map(r=>r.category))].map(r=>{const p=r==="Semua",l=p?!T:T===r;return`<button onclick="window.posCatFilter('${n(p?"":r)}')" class="shrink-0 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all ${l?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}" style="${l?"background:var(--color-primary)":""}">${n(r)}</button>`}).join(""),o=e.length===0?'<div class="col-span-full flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600"><i class="fa-solid fa-box-open text-4xl mb-3"></i><p class="font-semibold text-sm">Produk tidak ditemukan</p></div>':e.map(r=>{const p=r.img?he(r.img,"w200-rw"):"",l=r.variants&&r.variants.length>0,g=m.filter(K=>String(K.id)===String(r.id)).reduce((K,ge)=>K+ge.qty,0),x=n(String(r.id)),R=r.wholesale&&r.wholesale.length>0;return`<button onclick="window.posAddToCart('${x}')" class="relative flex flex-col bg-white dark:bg-slate-800 border rounded-2xl p-2.5 text-left transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:scale-95 overflow-hidden ${g>0?"border-[var(--color-primary)] shadow-sm":"border-slate-200 dark:border-slate-700"}">
                ${g>0?`<div class="absolute top-1.5 right-1.5 w-5 h-5 rounded-full text-white flex items-center justify-center text-[9px] font-black z-10" style="background:var(--color-primary)">${g}</div>`:""}
                ${l?'<div class="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[7px] font-black bg-violet-500 text-white z-10">VARIAN</div>':""}
                ${R?`<div class="absolute ${l?"top-6":"top-1.5"} left-1.5 px-1.5 py-0.5 rounded text-[7px] font-black bg-amber-500 text-white z-10">GROSIR</div>`:""}
                <div class="w-full aspect-square rounded-xl bg-slate-100 dark:bg-slate-700 mb-2 overflow-hidden flex items-center justify-center">
                    ${p?`<img loading="lazy" src="${n(p)}" alt="${n(r.name)}" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<i class=\\'fa-solid fa-box text-slate-300 text-xl\\'></i>'">`:'<i class="fa-solid fa-box text-slate-300 text-xl"></i>'}
                </div>
                <p class="text-[10px] font-bold text-slate-800 dark:text-slate-100 line-clamp-2 leading-tight mb-1 flex-1">${n(r.name)}</p>
                <p class="text-xs font-black" style="color:var(--color-primary)">${b(parseFloat(r.price)||0)}</p>
            </button>`}).join(""),t=d("pos-cat-filter-d"),i=d("pos-catalog-grid-d");t&&(t.innerHTML=s),i&&(i.innerHTML=o)},v=()=>{if(!d("pos-cart-items"))return;const e=m.length===0?'<div class="flex flex-col items-center justify-center h-full py-10 text-slate-300 dark:text-slate-600 select-none"><i class="fa-solid fa-cart-shopping text-4xl mb-2"></i><p class="text-sm font-semibold">Keranjang kosong</p><p class="text-xs mt-0.5 text-center px-4">Klik produk untuk menambah</p></div>':m.map(t=>{const i=n(String(t.cartKey||t.id));return`<div class="flex items-start gap-2 p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-xs">
                <div class="flex-1 min-w-0">
                    <div class="flex items-start gap-1 flex-wrap">
                        <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 line-clamp-2 flex-1">${n(t.name)}</p>
                        ${t.isWholesale?'<span class="text-[7px] font-black px-1 py-0.5 rounded bg-amber-500 text-white shrink-0">GROSIR</span>':""}
                        ${t.isVariant?'<span class="text-[7px] font-black px-1 py-0.5 rounded bg-violet-500 text-white shrink-0">VARIAN</span>':""}
                    </div>
                    <p class="text-[10px] text-slate-400 mt-0.5">
                        ${t.isWholesale&&t.basePrice?`<span class="line-through text-slate-300">${b(t.basePrice)}</span> <span class="text-amber-600 font-bold">${b(t.price)}</span>`:b(t.price)} × ${t.qty}
                    </p>
                    <div class="flex items-center gap-1 mt-1">
                        <span class="text-[9px] text-slate-400 shrink-0">Diskon Rp:</span>
                        <input type="number" min="0" placeholder="0" value="${t.discount||""}" onchange="window.posSetItemDisc('${i}',this.value)"
                            class="w-20 text-[10px] font-bold border border-slate-200 dark:border-slate-600 rounded-lg px-1.5 py-0.5 bg-white dark:bg-slate-700 text-right focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                </div>
                <div class="flex flex-col items-center gap-1 shrink-0">
                    <div class="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-700/60 rounded-lg p-0.5">
                        <button onclick="window.posUpdateQty('${i}',-1)" class="w-6 h-6 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-600 font-black text-sm transition-all">−</button>
                        <input type="number" min="1" value="${t.qty}" onchange="window.posSetQty('${i}',this.value)"
                            class="w-8 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none">
                        <button onclick="window.posUpdateQty('${i}',1)" class="w-6 h-6 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-600 font-black text-sm transition-all">+</button>
                    </div>
                    <p class="text-[10px] font-black" style="color:var(--color-primary)">${b(t.subtotal)}</p>
                    <button onclick="window.posRemoveItem('${i}')" class="w-6 h-6 rounded-lg bg-red-50 dark:bg-red-900/30 text-red-400 hover:bg-red-500 hover:text-white transition-all text-xs"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>`}).join("");O("pos-cart-items",e),q("pos-subtotal",b(B()));const a=d("pos-global-disc");a&&document.activeElement!==a&&(a.value=M||""),q("pos-total-amount",b(f()));const s=d("pos-total-amount-m");s&&(s.textContent=b(f())),["pos-pay-btn","pos-pay-btn-m"].forEach(t=>{const i=d(t);i&&(i.disabled=m.length===0,i.innerHTML=m.length>0?`<i class="fa-solid fa-cash-register mr-2"></i>BAYAR — ${b(f())}`:'<i class="fa-solid fa-cash-register mr-2"></i>BAYAR')});const o=d("pos-cart-tab-badge");if(o){const t=m.reduce((i,r)=>i+r.qty,0);o.textContent=t>0?String(t):"",o.classList.toggle("hidden",t===0)}},le=()=>{if(m.length===0){y("Keranjang masih kosong!","warning");return}w={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},h="cash",C=0,document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-pay-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(0,0,0,0.5)">
      <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md max-h-[92vh] flex flex-col">
        <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
          <div>
            <h2 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2"><i class="fa-solid fa-cash-register" style="color:var(--color-primary)"></i>Proses Pembayaran</h2>
            <p class="text-xs text-slate-500 mt-0.5">Total: <span class="font-black" style="color:var(--color-primary)">${b(f())}</span></p>
          </div>
          <button onclick="window.closePayModal()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 text-xl transition-all leading-none">×</button>
        </div>
        <div class="p-5 space-y-5 overflow-y-auto flex-1">
          <div>
            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2 block">Pelanggan</label>
            <div class="grid grid-cols-3 gap-2 mb-3">
              <button onclick="window.setPosCustomerType('umum')" id="pos-ctype-umum" class="py-2.5 rounded-xl text-[10px] font-bold uppercase border transition-all" style="background:var(--color-primary);color:white;border-color:var(--color-primary)"><i class="fa-solid fa-user block text-base mb-1"></i>Umum</button>
              <button onclick="window.setPosCustomerType('member')" id="pos-ctype-member" class="py-2.5 rounded-xl text-[10px] font-bold uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-id-card block text-base mb-1"></i>Member</button>
              <button onclick="window.setPosCustomerType('tempo')" id="pos-ctype-tempo" class="py-2.5 rounded-xl text-[10px] font-bold uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-hourglass-half block text-base mb-1"></i>Tempo</button>
            </div>
            <div id="pos-customer-fields">
              <input id="pos-cust-name" type="text" placeholder="Nama pelanggan (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">
            </div>
          </div>
          <div>
            <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2 block">Metode Pembayaran</label>
            <div class="grid grid-cols-2 gap-2 mb-3">
              <button onclick="window.setPosPayMethod('cash')" id="pos-pay-cash" class="py-2.5 rounded-xl text-[10px] font-bold uppercase border transition-all" style="background:var(--color-primary);color:white;border-color:var(--color-primary)"><i class="fa-solid fa-money-bill-wave block text-base mb-1"></i>Tunai</button>
              <button onclick="window.setPosPayMethod('qris')" id="pos-pay-qris" class="py-2.5 rounded-xl text-[10px] font-bold uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-qrcode block text-base mb-1"></i>QRIS</button>
              <button onclick="window.setPosPayMethod('transfer')" id="pos-pay-transfer" class="py-2.5 rounded-xl text-[10px] font-bold uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-building-columns block text-base mb-1"></i>Transfer</button>
              <button onclick="window.setPosPayMethod('tempo')" id="pos-pay-tempo" class="py-2.5 rounded-xl text-[10px] font-bold uppercase border border-slate-200 dark:border-slate-700 text-slate-500 transition-all"><i class="fa-solid fa-hourglass-half block text-base mb-1"></i>Tempo</button>
            </div>
            <div id="pos-pay-detail"></div>
          </div>
        </div>
        <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0">
          <button onclick="window.closePayModal()" class="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 transition-all">Batal</button>
          <button onclick="window.processPOSTx()" id="pos-process-btn" class="flex-[2] py-3 rounded-xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2" style="background:var(--color-primary)"><i class="fa-solid fa-check-circle"></i> Proses & Simpan</button>
        </div>
      </div>
    </div>`),ne("cash")},N=()=>d("pos-pay-modal")?.remove(),ie=(e,a,s)=>{s.forEach(o=>{const t=d(`${e}-${o}`);t&&(o===a?(t.style.background="var(--color-primary)",t.style.color="white",t.style.borderColor="var(--color-primary)"):(t.style.removeProperty("background"),t.style.removeProperty("color"),t.style.removeProperty("border-color")))})},ne=e=>{const a=d("pos-pay-detail");if(!a)return;const s=f(),o=`<div class="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800 mb-3 text-sm"><span class="text-slate-500">Total Tagihan</span><span class="font-black" style="color:var(--color-primary)">${b(s)}</span></div>`;if(e==="cash")a.innerHTML=`${o}<label class="text-[10px] text-slate-500 font-semibold">Nominal Bayar (Rp)</label>
        <input id="pos-paid-input" type="number" min="0" placeholder="${s}" class="mt-1 w-full border-2 rounded-xl px-3 py-3 text-lg font-black bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none text-right" style="border-color:var(--color-primary)" oninput="window.updatePosChange(this.value)">
        <div class="flex justify-between mt-2 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl"><span class="text-sm font-bold text-emerald-700 dark:text-emerald-400">Kembalian</span><span id="pos-change-display" class="font-black text-sm text-emerald-700 dark:text-emerald-400">${b(0)}</span></div>`;else if(e==="qris"){const t=u.payment?.qrisUrl||"";a.innerHTML=`${o}${t?`<div class="flex justify-center"><img src="${n(t)}" class="w-44 h-44 object-contain rounded-xl border" alt="QRIS"></div><p class="text-center text-xs text-slate-500 mt-2">Scan QRIS untuk pembayaran</p>`:'<p class="text-center text-xs text-rose-500 font-semibold p-3 bg-rose-50 rounded-xl">QRIS belum diatur — buka Pengaturan → QRIS Pay</p>'}`}else if(e==="transfer"){const t=(u.banks||[]).filter(i=>i&&i.name);a.innerHTML=`${o}<label class="text-[10px] text-slate-500 font-semibold block mb-1">Pilih Rekening Tujuan</label>
        <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none">
            ${t.length?t.map(i=>`<option>${n(i.name)} — ${n(i.number||"")} a/n ${n(i.holder||"")}</option>`).join(""):"<option>Rekening belum diatur</option>"}</select>`}else e==="tempo"&&(a.innerHTML=`${o}<div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-3"><p class="text-xs font-bold text-amber-700 dark:text-amber-400"><i class="fa-solid fa-hourglass-half mr-1"></i>Pembayaran Tempo / Piutang</p><p class="text-[10px] text-amber-600 mt-1">Transaksi dicatat sebagai piutang. Jatuh tempo & cicilan diatur di tab Piutang Tempo.</p></div>
        <label class="text-[10px] text-slate-500 font-semibold block mb-1">Uang Muka / DP (Rp) — opsional</label>
        <input id="pos-dp-input" type="number" min="0" placeholder="0" value="0" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`)},de=e=>{w.isMember=e==="member",w.isNewTempo=e==="tempo",ie("pos-ctype",e,["umum","member","tempo"]);const a=d("pos-customer-fields");a&&(e==="umum"?a.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pelanggan (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">':e==="member"?a.innerHTML=`<div class="flex gap-2"><input id="pos-cust-phone" type="tel" placeholder="No. HP Member" class="flex-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">
        <button onclick="window.lookupPosMember()" class="px-3 py-2 rounded-xl text-white text-xs font-bold" style="background:var(--color-primary)"><i class="fa-solid fa-search"></i></button></div>
        <div id="pos-member-result" class="mt-2"></div>`:e==="tempo"&&(V("tempo"),a.innerHTML=`<p class="text-xs text-amber-600 font-semibold mb-2">⚠️ Transaksi masuk Piutang Tempo</p>
        <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none mb-2">
        <input id="pos-cust-phone" type="tel" placeholder="No. HP *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none">`))},V=e=>{h=e,ie("pos-pay",e,["cash","qris","transfer","tempo"]),ne(e)},ce=e=>{C=S(e);const a=d("pos-change-display");a&&(a.textContent=b(J()))},pe=()=>{const e=d("pos-cust-phone")?.value?.trim();if(!e){y("Masukkan nomor HP","warning");return}const a=e.replace(/\D/g,""),s=(u.customers||[]).find(t=>t&&t.phone&&t.phone.replace(/\D/g,"").endsWith(a)),o=d("pos-member-result");o&&(s?(w.name=s.name||"",w.memberId=s.id||s.phone,o.innerHTML=`<div class="flex items-center gap-2 p-2.5 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200"><i class="fa-solid fa-circle-check text-emerald-500"></i><div><p class="text-xs font-bold text-emerald-700">${n(s.name)}</p><p class="text-[10px] text-emerald-600">Member Terverifikasi ✓</p></div></div>`):o.innerHTML='<p class="text-xs text-rose-500 font-semibold p-2 bg-rose-50 rounded-xl border border-rose-200"><i class="fa-solid fa-circle-xmark mr-1"></i>Tidak ditemukan di database member</p>')},be=async()=>{if(m.length===0){y("Keranjang kosong!","warning");return}const e=d("pos-cust-name")?.value?.trim()||"Pelanggan Umum",a=d("pos-cust-phone")?.value?.trim()||"";if(w.isNewTempo&&!a){y("No. HP wajib diisi untuk tempo!","warning");return}if(h==="cash"&&(C=S(d("pos-paid-input")?.value||0),C<f())){y(`Uang kurang! Minimal ${b(f())}`,"warning");return}w.name=e,w.phone=a;const s=h==="tempo"?S(d("pos-dp-input")?.value||0):0,o=h==="transfer"&&d("pos-bank-sel")?.value||"",t=d("pos-process-btn");t&&(t.disabled=!0,t.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');try{const i=ke(),r=typeof window.getCashierSession=="function"?window.getCashierSession():null,p=r?.name||u.store?.name||"Kasir",l=r?.uid||window.__currentAdminUid||"admin",c={txId:i,date:F.firestore.FieldValue.serverTimestamp(),dateMs:Date.now(),cashier:l,cashierName:p,customer:{name:w.name||"Pelanggan Umum",phone:w.phone||"",isMember:w.isMember||!1,memberId:w.memberId||null},items:m.map(x=>({id:x.id,name:x.name,price:x.price,qty:x.qty,discount:x.discount||0,subtotal:x.subtotal,variantName:x.variantName||"",isVariant:x.isVariant||!1,isWholesale:x.isWholesale||!1})),subtotal:B(),globalDiscount:S(M),total:f(),payment:{method:h,paid:h==="cash"?C:h==="tempo"?s:f(),change:h==="cash"?J():0,bank:o,dp:s,tempoBalance:h==="tempo"?f()-s:0},status:h==="tempo"?"tempo":"paid",notes:"",source:"pos"};await I.collection("freshmart").doc("cms_data").collection("pos_transactions").doc(i).set(c),h==="tempo"&&await I.collection("freshmart_orders").doc(i).set({orderId:i,source:"pos",dateString:new Date().toISOString(),customerName:c.customer.name,customerPhone:c.customer.phone,items:m.map(x=>({id:x.id,name:x.name,price:x.price,qty:x.qty})),total:f(),payment:{method:"tempo",paymentStatus:"hutang",paid:s,tempoBalance:f()-s,tempoDueDate:Date.now()+7*864e5,tempoPenaltyRate:1,tempoPenaltyStopped:!1},status:"Diproses",isTempo:!0,timestamp:F.firestore.FieldValue.serverTimestamp()}),N();const g={...c};m=[],M=0,v(),L(),Se(g)}catch(i){console.error("[POS] Error:",i),y("Gagal menyimpan transaksi. Coba lagi.","error"),t&&(t.disabled=!1,t.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Proses & Simpan')}},Se=e=>{const a=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${b(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,s=JSON.stringify(e).replace(/"/g,"&quot;");document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(0,0,0,0.5)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">${n(e.txId)}</p>
          <p class="text-2xl font-black mb-1" style="color:var(--color-primary)">${b(e.total)}</p>
          ${a}
        </div>
        <div class="px-6 pb-6 flex flex-col gap-2">
          <button onclick="window.printPOSReceipt(${s})" class="w-full py-3 rounded-xl text-white font-bold text-sm shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2" style="background:var(--color-primary)"><i class="fa-solid fa-print"></i> Cetak Struk Thermal</button>
          <button onclick="document.getElementById('pos-success-modal')?.remove()" class="w-full py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 transition-all">Lewati — Transaksi Baru</button>
        </div>
      </div>
    </div>`)},me=e=>{document.getElementById("pos-success-modal")?.remove();const a=u.store?.name||"TOKO PUTRI",s=u.store?.wa||"",o=u.store?.address||"",t=new Date(e.dateMs).toLocaleString("id-ID"),i=(e.items||[]).map(p=>`<tr><td style="padding:2px 0;word-wrap:break-word">${n(p.name)}</td><td style="text-align:right;padding:2px 4px;white-space:nowrap">${p.qty}x ${b(p.price)}</td><td style="text-align:right;padding:2px 0;white-space:nowrap">${b(p.subtotal)}</td></tr>`).join(""),r=window.open("","_blank","width=420,height=720");if(!r){y("Izinkan popup untuk cetak struk","warning");return}r.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Struk POS</title>
    <style>*{box-sizing:border-box}body{font-family:'Courier New',monospace;font-size:12px;max-width:300px;margin:0 auto;padding:12px}
    h2{text-align:center;font-size:14px;font-weight:900;margin:2px 0;text-transform:uppercase}p{margin:1px 0;text-align:center;font-size:11px}.left{text-align:left}
    table{width:100%;border-collapse:collapse}.line{border-top:1px dashed #333;margin:6px 0}.total{font-weight:900;font-size:13px}
    </style></head><body>
    <h2>${a}</h2>${o?`<p>${n(o)}</p>`:""}${s?`<p>WA: ${n(s)}</p>`:""}
    <div class="line"></div>
    <p class="left">No: <b>${n(e.txId)}</b></p><p class="left">Tgl: ${n(t)}</p>
    <p class="left">Kasir: ${n(e.cashierName)}</p><p class="left">Pelanggan: ${n(e.customer?.name||"Umum")}</p>
    ${e.customer?.phone?`<p class="left">HP: ${n(e.customer.phone)}</p>`:""}
    <div class="line"></div><table>${i}</table><div class="line"></div>
    <table>
    <tr><td>Subtotal</td><td style="text-align:right">${b(e.subtotal)}</td></tr>
    ${(e.globalDiscount||0)>0?`<tr><td>Diskon</td><td style="text-align:right">- ${b(e.globalDiscount)}</td></tr>`:""}
    <tr class="total"><td>TOTAL</td><td style="text-align:right">${b(e.total)}</td></tr>
    ${e.payment.method==="cash"?`<tr><td>Bayar</td><td style="text-align:right">${b(e.payment.paid)}</td></tr><tr><td><b>Kembalian</b></td><td style="text-align:right"><b>${b(e.payment.change)}</b></td></tr>`:""}
    ${e.payment.method==="tempo"?`<tr><td>DP</td><td style="text-align:right">${b(e.payment.dp||0)}</td></tr><tr><td>Sisa Piutang</td><td style="text-align:right">${b(e.payment.tempoBalance||0)}</td></tr>`:""}
    <tr><td>Metode</td><td style="text-align:right">${n(e.payment.method.toUpperCase())}</td></tr>
    </table><div class="line"></div>
    <p style="text-align:center;font-size:10px">*** Terima Kasih ***</p>
    <p style="text-align:center;font-size:9px">Barang yang sudah dibeli tidak dapat dikembalikan</p>
    <script>window.onload=()=>{window.print();setTimeout(()=>window.close(),800)}<\/script>
    </body></html>`),r.document.close()},xe=()=>{window.posAddToCart=E,window.posAddToCartQty=Z,window.addToCartPOSWithVariant=ee,window.posUpdateQty=te,window.posSetQty=ae,window.posSetItemDisc=se,window.posRemoveItem=oe,window.posClearCart=re,window.openPayModal=le,window.closePayModal=N,window.setPosCustomerType=de,window.setPosPayMethod=V,window.updatePosChange=ce,window.lookupPosMember=pe,window.processPOSTx=be,window.printPOSReceipt=me,window.posSetGlobalDisc=e=>{M=S(e),v()},window.posCatFilter=e=>{T=e,L()},window.posSearchFn=e=>{j=e,L()},window.openPOSHistory=()=>A(()=>Promise.resolve().then(()=>Me),void 0).then(e=>e.renderPOSHistory())},ue=()=>{j="",T="",m=[],M=0;const a=(typeof window.getCashierSession=="function"?window.getCashierSession():null)?.name||"Kasir",s=n(u.store?.name||"Toko Putri");if(!document.getElementById("pos-storefront-css")){const r=document.createElement("style");r.id="pos-storefront-css",r.textContent=`
        #view-pos-cashier { display:flex; flex-direction:column; height:100dvh; overflow:hidden; }
        .pos-sf-header { background:var(--color-primary); color:#fff; }
        @media (max-width:767px) {
            .pos-sf-split { flex-direction:column; }
            .pos-sf-catalog { display:flex; flex-direction:column; height:100%; }
            .pos-sf-cart-panel { display:flex; flex-direction:column; height:100%; }
        }
        `,document.head.appendChild(r)}const o=d("view-pos-cashier");if(!o)return;let t="catalog";const i=()=>{const r=d("pos-tab-catalog"),p=d("pos-tab-cart"),l=d("pos-pane-catalog"),c=d("pos-pane-cart");r&&(r.className=`flex-1 py-2.5 flex items-center justify-center gap-1.5 text-xs font-bold transition-all ${t==="catalog"?"text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]":"text-slate-400"}`),p&&(p.className=`flex-1 py-2.5 flex items-center justify-center gap-1.5 text-xs font-bold transition-all ${t==="cart"?"text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]":"text-slate-400"}`),l&&l.classList.toggle("hidden",t!=="catalog"),c&&c.classList.toggle("hidden",t!=="cart")};o.innerHTML=`
    <!-- POS HEADER -->
    <div class="pos-sf-header flex items-center gap-3 px-4 py-3 shrink-0 shadow-md">
        <div class="flex items-center gap-2.5 flex-1 min-w-0">
            <div class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0 text-lg">
                <i class="fa-solid fa-cash-register"></i>
            </div>
            <div class="min-w-0">
                <p class="text-xs font-black uppercase tracking-wider leading-none truncate">${s}</p>
                <p class="text-[10px] text-white/75 mt-0.5 truncate">
                    <i class="fa-solid fa-user-tie mr-1"></i>${n(a)}
                </p>
            </div>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
            <button onclick="window.openPOSHistory()" class="h-8 px-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95">
                <i class="fa-solid fa-clock-rotate-left text-xs"></i>
                <span class="hidden sm:inline">Riwayat</span>
            </button>
            <button onclick="window.cashierLogout()" class="h-8 px-2.5 rounded-xl bg-white/20 hover:bg-rose-500/80 text-white text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95">
                <i class="fa-solid fa-right-from-bracket text-xs"></i>
                <span class="hidden sm:inline">Keluar</span>
            </button>
        </div>
    </div>

    <!-- MOBILE TAB TOGGLE (visible hanya di < md) -->
    <div class="md:hidden flex shrink-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <button id="pos-tab-catalog" onclick="window._posSFSwitchTab('catalog')"
            class="flex-1 py-2.5 flex items-center justify-center gap-1.5 text-xs font-bold text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] transition-all">
            <i class="fa-solid fa-box-open"></i> Katalog
        </button>
        <button id="pos-tab-cart" onclick="window._posSFSwitchTab('cart')"
            class="flex-1 py-2.5 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-400 transition-all">
            <i class="fa-solid fa-cart-shopping"></i> Keranjang
            <span id="pos-cart-tab-badge" class="hidden w-4 h-4 rounded-full bg-rose-500 text-white text-[8px] font-black flex items-center justify-center"></span>
        </button>
    </div>

    <!-- SPLIT PANEL: desktop side-by-side, mobile stacked -->
    <div class="flex flex-1 overflow-hidden pos-sf-split">

        <!-- KATALOG -->
        <div id="pos-pane-catalog" class="flex flex-col pos-sf-catalog md:w-[60%] md:border-r border-slate-200 dark:border-slate-800 overflow-hidden">
            <div class="p-3 space-y-2 shrink-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <div class="relative">
                    <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
                    <input id="pos-search-input-d" type="text" placeholder="Cari produk / scan barcode..." class="w-full pl-8 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:border-[var(--color-primary)]" oninput="window.posSearchFn(this.value)">
                </div>
                <div id="pos-cat-filter-d" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
            </div>
            <div id="pos-catalog-grid-d" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 p-3 overflow-y-auto flex-1 content-start"></div>
        </div>

        <!-- KERANJANG -->
        <div id="pos-pane-cart" class="hidden md:flex flex-col pos-sf-cart-panel md:w-[40%] bg-slate-50 dark:bg-slate-950 overflow-hidden">
            <div class="px-3 pt-3 pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0 bg-white dark:bg-slate-900">
                <p class="text-[11px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                    <i class="fa-solid fa-cart-shopping text-[var(--color-primary)]"></i> Keranjang Kasir
                </p>
                <button onclick="window.posClearCart()" class="text-[9px] font-bold text-red-400 hover:text-red-600 transition-colors flex items-center gap-1">
                    <i class="fa-solid fa-trash-can"></i> Kosongkan
                </button>
            </div>
            <div id="pos-cart-items" class="flex-1 overflow-y-auto p-2.5 space-y-2"></div>
            <div class="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 space-y-2">
                <div class="flex justify-between text-xs">
                    <span class="text-slate-500">Subtotal</span>
                    <span id="pos-subtotal" class="font-bold text-slate-700 dark:text-slate-200">Rp 0</span>
                </div>
                <div class="flex items-center gap-2 text-xs">
                    <span class="text-slate-500 shrink-0">Diskon Global Rp</span>
                    <input type="number" min="0" id="pos-global-disc" placeholder="0" class="flex-1 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-right text-xs font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]" oninput="window.posSetGlobalDisc(this.value)">
                </div>
                <div class="flex justify-between items-center pt-1.5 border-t border-slate-200 dark:border-slate-700">
                    <span class="text-sm font-black text-slate-800 dark:text-white">TOTAL</span>
                    <span id="pos-total-amount" class="text-lg font-black" style="color:var(--color-primary)">Rp 0</span>
                </div>
                <button id="pos-pay-btn" disabled onclick="window.openPayModal()"
                    class="w-full py-3.5 rounded-2xl text-white font-black text-sm shadow-lg disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-cash-register"></i> BAYAR
                </button>
            </div>
        </div>
    </div>

    <!-- MOBILE STICKY BOTTOM BAYAR (hanya saat tab keranjang) -->
    <div id="pos-mobile-pay-bar" class="md:hidden hidden shrink-0 p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div class="flex justify-between text-sm font-black mb-2">
            <span class="text-slate-700 dark:text-white">TOTAL</span>
            <span id="pos-total-amount-m" style="color:var(--color-primary)">Rp 0</span>
        </div>
        <button id="pos-pay-btn-m" disabled onclick="window.openPayModal()"
            class="w-full py-3.5 rounded-2xl text-white font-black text-sm shadow-lg disabled:opacity-40 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            style="background:var(--color-primary)">
            <i class="fa-solid fa-cash-register"></i> BAYAR
        </button>
    </div>`,window._posSFSwitchTab=r=>{t=r,i();const p=d("pos-mobile-pay-bar");p&&p.classList.toggle("hidden",r!=="cart");const l=d("pos-total-amount-m");l&&(l.textContent=b(f()))},L(),v(),X(),xe()},Pe=()=>{j="",T="",O("admin-content",`
    <div class="flex flex-col" style="height:calc(100vh - 56px)">
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-2.5 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0 gap-3">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm shrink-0" style="background:var(--color-primary)"><i class="fa-solid fa-cash-register"></i></div>
          <div><p class="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-wider leading-none">Kasir POS</p><p class="text-[9px] text-slate-400 mt-0.5">${n(u.store?.name||"Toko Putri")}</p></div>
        </div>
        <button onclick="window.openPOSHistory()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shrink-0">
          <i class="fa-solid fa-clock-rotate-left text-xs"></i><span>Riwayat</span>
        </button>
      </div>
      <!-- Split Panel -->
      <div class="flex flex-1 overflow-hidden">
        <!-- Kiri: Katalog -->
        <div class="flex flex-col border-r border-slate-200 dark:border-slate-800 overflow-hidden" style="width:60%;min-width:0">
          <div class="p-3 space-y-2 shrink-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
            <div class="relative">
              <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
              <input id="pos-search-input-d" type="text" placeholder="Cari produk / ketik kode barcode (scanner USB)..." class="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:border-[var(--color-primary)]" oninput="window.posSearchFn(this.value)">
            </div>
            <div id="pos-cat-filter-d" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
          </div>
          <div id="pos-catalog-grid-d" class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 p-3 overflow-y-auto flex-1 content-start"></div>
        </div>
        <!-- Kanan: Keranjang -->
        <div class="flex flex-col bg-slate-50 dark:bg-slate-950 overflow-hidden" style="width:40%;min-width:0">
          <div class="px-3 pt-2.5 pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0 bg-white dark:bg-slate-900">
            <p class="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5"><i class="fa-solid fa-cart-shopping"></i> Keranjang</p>
            <button onclick="window.posClearCart()" class="text-[9px] font-bold text-red-400 hover:text-red-600 transition-colors"><i class="fa-solid fa-trash-can mr-0.5"></i>Kosongkan</button>
          </div>
          <div id="pos-cart-items" class="flex-1 overflow-y-auto p-2 space-y-2"></div>
          <div class="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 space-y-2">
            <div class="flex justify-between text-xs"><span class="text-slate-500">Subtotal</span><span id="pos-subtotal" class="font-bold text-slate-700 dark:text-slate-200">Rp 0</span></div>
            <div class="flex items-center gap-2 text-xs">
              <span class="text-slate-500 shrink-0">Diskon Global Rp</span>
              <input type="number" min="0" id="pos-global-disc" placeholder="0" class="flex-1 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-right text-xs font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]" oninput="window.posSetGlobalDisc(this.value)">
            </div>
            <div class="flex justify-between items-center pt-1.5 border-t border-slate-200 dark:border-slate-700">
              <span class="text-sm font-black text-slate-800 dark:text-white">TOTAL</span>
              <span id="pos-total-amount" class="text-base font-black" style="color:var(--color-primary)">Rp 0</span>
            </div>
            <button id="pos-pay-btn" disabled onclick="window.openPayModal()" class="w-full py-3 rounded-xl text-white font-black text-sm shadow-lg disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2" style="background:var(--color-primary)">
              <i class="fa-solid fa-cash-register"></i> BAYAR
            </button>
          </div>
        </div>
      </div>
    </div>`),L(),v(),X(),xe()};window.renderPOSStorefront=ue;const z=Object.freeze(Object.defineProperty({__proto__:null,addToCart:E,addToCartWithVariant:ee,clearCart:re,closePayModal:N,lookupPosMember:pe,openPayModal:le,posAddToCartQty:Z,printPOSReceipt:me,processPOSTx:be,removeFromCart:oe,renderPOS:Pe,renderPOSStorefront:ue,setItemDisc:se,setPosCustomerType:de,setPosPayMethod:V,setQty:ae,updatePosChange:ce,updateQty:te},Symbol.toStringTag,{value:"Module"})),D=e=>Y(e),$e=e=>new Date(e).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"});let _=new Date().toISOString().slice(0,10),k=[],H=null;const G=()=>{d("pos-hist-list")&&O("pos-hist-list",'<div class="flex justify-center py-12"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),H&&(H(),H=null);const a=new Date(_);a.setHours(0,0,0,0);const s=new Date(_);s.setHours(23,59,59,999),H=I.collection("freshmart").doc("cms_data").collection("pos_transactions").where("dateMs",">=",a.getTime()).where("dateMs","<=",s.getTime()).onSnapshot(o=>{k=o.docs.map(t=>t.data()).sort((t,i)=>(i.dateMs||0)-(t.dateMs||0)),W()},o=>{console.error("[POS History]",o),y("Gagal memuat riwayat kasir","error"),k=[],W()})},W=()=>{const e=k.reduce((l,c)=>l+(c.status!=="void"&&c.total||0),0),a=k.filter(l=>l.status!=="void").length,s=k.filter(l=>l.status==="void").length,o={};k.filter(l=>l.status!=="void").forEach(l=>{const c=l.payment?.method||"other";o[c]=(o[c]||0)+(l.total||0)});const t={cash:"Tunai",qris:"QRIS",transfer:"Transfer",tempo:"Tempo"},i=Object.entries(o).map(([l,c])=>`<div class="flex justify-between text-xs"><span class="text-slate-500">${t[l]||l}</span><span class="font-bold text-slate-700 dark:text-slate-200">${D(c)}</span></div>`).join(""),r=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Total Omset</p>
            <p class="text-base font-black" style="color:var(--color-primary)">${D(e)}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Transaksi</p>
            <p class="text-base font-black text-slate-800 dark:text-white">${a}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Produk Terjual</p>
            <p class="text-base font-black text-slate-800 dark:text-white">${k.filter(l=>l.status!=="void").reduce((l,c)=>l+(c.items||[]).reduce((g,x)=>g+x.qty,0),0)}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Void</p>
            <p class="text-base font-black text-red-500">${s}</p>
        </div>
    </div>
    ${i?`<div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 mb-4 space-y-1.5">${i}</div>`:""}`,p=k.length===0?`<div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600"><i class="fa-solid fa-receipt text-4xl mb-3"></i><p class="font-semibold text-sm">Belum ada transaksi</p><p class="text-xs mt-1">${_}</p></div>`:k.map(l=>{const c=l.status==="void",g={cash:"emerald",qris:"blue",transfer:"violet",tempo:"amber"}[l.payment?.method]||"slate",x={cash:"Tunai",qris:"QRIS",transfer:"Transfer",tempo:"Tempo"}[l.payment?.method]||l.payment?.method;return`<div class="bg-white dark:bg-slate-800 border ${c?"border-red-200 dark:border-red-800 opacity-60":"border-slate-200 dark:border-slate-700"} rounded-2xl p-3 space-y-2 ${c?"":"hover:shadow-sm"} transition-all">
                <div class="flex items-start justify-between gap-2">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[10px] font-bold text-slate-500">${n(l.txId)}</span>
                            <span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-${g}-100 dark:bg-${g}-900/30 text-${g}-700 dark:text-${g}-400">${x}</span>
                            ${c?'<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600">VOID</span>':""}
                        </div>
                        <p class="text-[10px] text-slate-400 mt-0.5">${$e(l.dateMs)} · ${n(l.customer?.name||"Umum")}</p>
                    </div>
                    <div class="text-right shrink-0">
                        <p class="font-black text-sm ${c?"line-through text-slate-400":""}" style="${c?"":"color:var(--color-primary)"}">${D(l.total)}</p>
                        ${l.payment?.method==="cash"?`<p class="text-[10px] text-slate-400">Kembalian ${D(l.payment.change||0)}</p>`:""}
                    </div>
                </div>
                <div class="text-[10px] text-slate-400 flex flex-wrap gap-1">
                    ${(l.items||[]).map(R=>`<span class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded-md">${n(R.name)} ×${R.qty}</span>`).join("")}
                </div>
                ${c?"":`<div class="flex justify-end gap-2 pt-1">
                    <button onclick="window.printPOSReceiptFromHist(${JSON.stringify(l).replace(/"/g,"&quot;")})" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"><i class="fa-solid fa-print"></i>Cetak</button>
                    <button onclick="window.voidPOSTx('${n(l.txId)}')" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border border-red-200 dark:border-red-800 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"><i class="fa-solid fa-ban"></i>Void</button>
                </div>`}
            </div>`}).join("");O("pos-hist-rekap",r),O("pos-hist-list",p)},fe=e=>{we("Void Transaksi",`Void transaksi ${e}?
Transaksi akan ditandai batal dan tidak dihitung dalam laporan.`,async()=>{try{await I.collection("freshmart").doc("cms_data").collection("pos_transactions").doc(e).update({status:"void"}),y("Transaksi berhasil divoid","success")}catch{y("Gagal void transaksi","error")}},"Ya, Void")},Te=()=>{O("admin-content",`
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
                <input type="date" id="pos-hist-date" value="${_}"
                    class="text-sm font-bold text-slate-800 dark:text-white bg-transparent focus:outline-none"
                    onchange="window.posHistChangDate(this.value)">
            </div>
            <button onclick="window.posHistChangDate('${new Date().toISOString().slice(0,10)}')" class="px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Hari Ini</button>
        </div>

        <!-- Rekap -->
        <div id="pos-hist-rekap"></div>

        <!-- List Transaksi -->
        <div id="pos-hist-list" class="space-y-3"></div>
    </div>`),window.posHistChangDate=e=>{_=e;const a=d("pos-hist-date");a&&(a.value=e),G()},window.voidPOSTx=fe,window.printPOSReceiptFromHist=e=>{A(()=>Promise.resolve().then(()=>z),void 0).then(a=>a.printPOSReceipt(e))},window.__openPOSMain=()=>A(()=>Promise.resolve().then(()=>z),void 0).then(e=>e.renderPOS()),G()},Me=Object.freeze(Object.defineProperty({__proto__:null,renderPOSHistory:Te,voidPOSTx:fe},Symbol.toStringTag,{value:"Module"}));export{E as addToCart,ee as addToCartWithVariant,re as clearCart,N as closePayModal,pe as lookupPosMember,le as openPayModal,Z as posAddToCartQty,me as printPOSReceipt,be as processPOSTx,oe as removeFromCart,Pe as renderPOS,ue as renderPOSStorefront,se as setItemDisc,de as setPosCustomerType,V as setPosPayMethod,ae as setQty,ce as updatePosChange,te as updateQty};
