import{d as H,_ as R}from"./module-member-CGh5W0Mi.js";import{a as h,e as c,t as g,i,b as S,r as K,f as V,x as de,u as ce}from"./module-print-DoqR8CYY.js";import{f as pe}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";let p=[],O="",P="",x={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},u="cash",T=0,M=0,$="",F=null;const k=e=>Math.max(0,parseInt(e)||0),d=e=>V(e),q=()=>p.reduce((e,t)=>e+t.subtotal,0),f=()=>Math.max(0,q()-k(M)),G=()=>Math.max(0,T-f()),j=e=>(e.subtotal=Math.max(0,e.price*e.qty-k(e.discount)),e),be=()=>{const e=new Date,t=a=>String(a).padStart(2,"0");return`POS-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},me=()=>{window.__posBarcodeFn&&document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=e=>{const t=document.activeElement?.tagName?.toLowerCase();if(!(t==="input"||t==="textarea"||t==="select"))if(e.key==="Enter"){if($.length>=3){const a=$.trim().toLowerCase(),o=(h.products||[]).find(s=>s&&s.isActive!=="false"&&s.isActive!==!1&&(s.barcode&&s.barcode.toLowerCase()===a||s.sku&&s.sku.toLowerCase()===a||s.id&&String(s.id).toLowerCase()===a));if(o)A(o.id),g(`Ditambahkan: ${o.name}`,"success");else{const s=c("pos-search-input-d");s&&(s.value=$,O=$,C()),g("Barcode tidak ditemukan di katalog","warning")}$=""}}else e.key.length===1&&($+=e.key,clearTimeout(F),F=setTimeout(()=>{$=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},A=e=>{const t=(h.products||[]).find(o=>o&&String(o.id)===String(e));if(!t)return;const a=p.find(o=>String(o.id)===String(e));if(a)a.qty+=1,j(a);else{const o=parseFloat(t.price)||0;p.push(j({id:t.id,name:t.name,price:o,qty:1,discount:0,subtotal:o}))}y()},Y=(e,t)=>{const a=p.find(o=>String(o.id)===String(e));a&&(a.qty=Math.max(1,a.qty+t),j(a),y())},J=(e,t)=>{const a=p.find(o=>String(o.id)===String(e));a&&(a.qty=Math.max(1,k(t)),j(a),y())},W=(e,t)=>{const a=p.find(o=>String(o.id)===String(e));a&&(a.discount=Math.min(k(t),a.price*a.qty),j(a),y())},X=e=>{p=p.filter(t=>String(t.id)!==String(e)),y()},Z=()=>{p=[],M=0,y()},C=()=>{const e=(h.products||[]).filter(l=>{if(!l||l.isActive==="false"||l.isActive===!1||P&&l.category!==P)return!1;if(O){const b=O.toLowerCase();return(l.name||"").toLowerCase().includes(b)||(l.barcode||"").toLowerCase().includes(b)||(l.sku||"").toLowerCase().includes(b)}return!0}),a=["Semua",...new Set((h.products||[]).filter(l=>l&&l.isActive!=="false"&&l.category).map(l=>l.category))].map(l=>{const b=l==="Semua",r=b?!P:P===l;return`<button onclick="window.posCatFilter('${i(b?"":l)}')" class="shrink-0 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all ${r?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}" style="${r?"background:var(--color-primary)":""}">${i(l)}</button>`}).join(""),o=e.length===0?'<div class="col-span-full flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600"><i class="fa-solid fa-box-open text-4xl mb-3"></i><p class="font-semibold text-sm">Produk tidak ditemukan</p></div>':e.map(l=>{const b=l.img?de(l.img,"w200-rw"):"",r=p.find(v=>String(v.id)===String(l.id));return`<button onclick="window.posAddToCart('${i(String(l.id))}')" class="relative flex flex-col bg-white dark:bg-slate-800 border rounded-2xl p-2.5 text-left transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:scale-95 overflow-hidden ${r?"border-[var(--color-primary)] shadow-sm":"border-slate-200 dark:border-slate-700"}">
                ${r?`<div class="absolute top-1.5 right-1.5 w-5 h-5 rounded-full text-white flex items-center justify-center text-[9px] font-black z-10" style="background:var(--color-primary)">${r.qty}</div>`:""}
                <div class="w-full aspect-square rounded-xl bg-slate-100 dark:bg-slate-700 mb-2 overflow-hidden flex items-center justify-center">
                    ${b?`<img loading="lazy" src="${i(b)}" alt="${i(l.name)}" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<i class=\\'fa-solid fa-box text-slate-300 text-xl\\'></i>'">`:'<i class="fa-solid fa-box text-slate-300 text-xl"></i>'}
                </div>
                <p class="text-[10px] font-bold text-slate-800 dark:text-slate-100 line-clamp-2 leading-tight mb-1 flex-1">${i(l.name)}</p>
                <p class="text-xs font-black" style="color:var(--color-primary)">${d(parseFloat(l.price)||0)}</p>
            </button>`}).join(""),s=c("pos-cat-filter-d"),n=c("pos-catalog-grid-d");s&&(s.innerHTML=a),n&&(n.innerHTML=o)},y=()=>{if(!c("pos-cart-items"))return;const e=p.length===0?'<div class="flex flex-col items-center justify-center h-full py-10 text-slate-300 dark:text-slate-600 select-none"><i class="fa-solid fa-cart-shopping text-4xl mb-2"></i><p class="text-sm font-semibold">Keranjang kosong</p><p class="text-xs mt-0.5 text-center px-4">Klik produk untuk menambah</p></div>':p.map(o=>{const s=i(String(o.id));return`<div class="flex items-start gap-2 p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-xs">
                <div class="flex-1 min-w-0">
                    <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 line-clamp-1">${i(o.name)}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${d(o.price)} × ${o.qty}</p>
                    <div class="flex items-center gap-1 mt-1">
                        <span class="text-[9px] text-slate-400 shrink-0">Diskon Rp:</span>
                        <input type="number" min="0" placeholder="0" value="${o.discount||""}" onchange="window.posSetItemDisc('${s}',this.value)"
                            class="w-20 text-[10px] font-bold border border-slate-200 dark:border-slate-600 rounded-lg px-1.5 py-0.5 bg-white dark:bg-slate-700 text-right focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                </div>
                <div class="flex flex-col items-center gap-1 shrink-0">
                    <div class="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-700/60 rounded-lg p-0.5">
                        <button onclick="window.posUpdateQty('${s}',-1)" class="w-6 h-6 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-600 font-black text-sm transition-all">−</button>
                        <input type="number" min="1" value="${o.qty}" onchange="window.posSetQty('${s}',this.value)"
                            class="w-8 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none">
                        <button onclick="window.posUpdateQty('${s}',1)" class="w-6 h-6 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-600 font-black text-sm transition-all">+</button>
                    </div>
                    <p class="text-[10px] font-black" style="color:var(--color-primary)">${d(o.subtotal)}</p>
                    <button onclick="window.posRemoveItem('${s}')" class="w-6 h-6 rounded-lg bg-red-50 dark:bg-red-900/30 text-red-400 hover:bg-red-500 hover:text-white transition-all text-xs"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>`}).join("");S("pos-cart-items",e),K("pos-subtotal",d(q()));const t=c("pos-global-disc");t&&document.activeElement!==t&&(t.value=M||""),K("pos-total-amount",d(f()));const a=c("pos-pay-btn");a&&(a.disabled=p.length===0,a.innerHTML=p.length>0?`<i class="fa-solid fa-cash-register mr-2"></i>BAYAR — ${d(f())}`:'<i class="fa-solid fa-cash-register mr-2"></i>BAYAR')},ee=()=>{if(p.length===0){g("Keranjang masih kosong!","warning");return}x={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},u="cash",T=0,document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-pay-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(0,0,0,0.5)">
      <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md max-h-[92vh] flex flex-col">
        <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
          <div>
            <h2 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2"><i class="fa-solid fa-cash-register" style="color:var(--color-primary)"></i>Proses Pembayaran</h2>
            <p class="text-xs text-slate-500 mt-0.5">Total: <span class="font-black" style="color:var(--color-primary)">${d(f())}</span></p>
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
    </div>`),ae("cash")},B=()=>c("pos-pay-modal")?.remove(),te=(e,t,a)=>{a.forEach(o=>{const s=c(`${e}-${o}`);s&&(o===t?(s.style.background="var(--color-primary)",s.style.color="white",s.style.borderColor="var(--color-primary)"):(s.style.removeProperty("background"),s.style.removeProperty("color"),s.style.removeProperty("border-color")))})},ae=e=>{const t=c("pos-pay-detail");if(!t)return;const a=f(),o=`<div class="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800 mb-3 text-sm"><span class="text-slate-500">Total Tagihan</span><span class="font-black" style="color:var(--color-primary)">${d(a)}</span></div>`;if(e==="cash")t.innerHTML=`${o}<label class="text-[10px] text-slate-500 font-semibold">Nominal Bayar (Rp)</label>
        <input id="pos-paid-input" type="number" min="0" placeholder="${a}" class="mt-1 w-full border-2 rounded-xl px-3 py-3 text-lg font-black bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none text-right" style="border-color:var(--color-primary)" oninput="window.updatePosChange(this.value)">
        <div class="flex justify-between mt-2 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl"><span class="text-sm font-bold text-emerald-700 dark:text-emerald-400">Kembalian</span><span id="pos-change-display" class="font-black text-sm text-emerald-700 dark:text-emerald-400">${d(0)}</span></div>`;else if(e==="qris"){const s=h.payment?.qrisUrl||"";t.innerHTML=`${o}${s?`<div class="flex justify-center"><img src="${i(s)}" class="w-44 h-44 object-contain rounded-xl border" alt="QRIS"></div><p class="text-center text-xs text-slate-500 mt-2">Scan QRIS untuk pembayaran</p>`:'<p class="text-center text-xs text-rose-500 font-semibold p-3 bg-rose-50 rounded-xl">QRIS belum diatur — buka Pengaturan → QRIS Pay</p>'}`}else if(e==="transfer"){const s=(h.banks||[]).filter(n=>n&&n.name);t.innerHTML=`${o}<label class="text-[10px] text-slate-500 font-semibold block mb-1">Pilih Rekening Tujuan</label>
        <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none">
            ${s.length?s.map(n=>`<option>${i(n.name)} — ${i(n.number||"")} a/n ${i(n.holder||"")}</option>`).join(""):"<option>Rekening belum diatur</option>"}</select>`}else e==="tempo"&&(t.innerHTML=`${o}<div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-700 mb-3"><p class="text-xs font-bold text-amber-700 dark:text-amber-400"><i class="fa-solid fa-hourglass-half mr-1"></i>Pembayaran Tempo / Piutang</p><p class="text-[10px] text-amber-600 mt-1">Transaksi dicatat sebagai piutang. Jatuh tempo & cicilan diatur di tab Piutang Tempo.</p></div>
        <label class="text-[10px] text-slate-500 font-semibold block mb-1">Uang Muka / DP (Rp) — opsional</label>
        <input id="pos-dp-input" type="number" min="0" placeholder="0" value="0" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`)},se=e=>{x.isMember=e==="member",x.isNewTempo=e==="tempo",te("pos-ctype",e,["umum","member","tempo"]);const t=c("pos-customer-fields");t&&(e==="umum"?t.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pelanggan (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">':e==="member"?t.innerHTML=`<div class="flex gap-2"><input id="pos-cust-phone" type="tel" placeholder="No. HP Member" class="flex-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">
        <button onclick="window.lookupPosMember()" class="px-3 py-2 rounded-xl text-white text-xs font-bold" style="background:var(--color-primary)"><i class="fa-solid fa-search"></i></button></div>
        <div id="pos-member-result" class="mt-2"></div>`:e==="tempo"&&(N("tempo"),t.innerHTML=`<p class="text-xs text-amber-600 font-semibold mb-2">⚠️ Transaksi masuk Piutang Tempo</p>
        <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none mb-2">
        <input id="pos-cust-phone" type="tel" placeholder="No. HP *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none">`))},N=e=>{u=e,te("pos-pay",e,["cash","qris","transfer","tempo"]),ae(e)},oe=e=>{T=k(e);const t=c("pos-change-display");t&&(t.textContent=d(G()))},re=()=>{const e=c("pos-cust-phone")?.value?.trim();if(!e){g("Masukkan nomor HP","warning");return}const t=e.replace(/\D/g,""),a=(h.customers||[]).find(s=>s&&s.phone&&s.phone.replace(/\D/g,"").endsWith(t)),o=c("pos-member-result");o&&(a?(x.name=a.name||"",x.memberId=a.id||a.phone,o.innerHTML=`<div class="flex items-center gap-2 p-2.5 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200"><i class="fa-solid fa-circle-check text-emerald-500"></i><div><p class="text-xs font-bold text-emerald-700">${i(a.name)}</p><p class="text-[10px] text-emerald-600">Member Terverifikasi ✓</p></div></div>`):o.innerHTML='<p class="text-xs text-rose-500 font-semibold p-2 bg-rose-50 rounded-xl border border-rose-200"><i class="fa-solid fa-circle-xmark mr-1"></i>Tidak ditemukan di database member</p>')},le=async()=>{if(p.length===0){g("Keranjang kosong!","warning");return}const e=c("pos-cust-name")?.value?.trim()||"Pelanggan Umum",t=c("pos-cust-phone")?.value?.trim()||"";if(x.isNewTempo&&!t){g("No. HP wajib diisi untuk tempo!","warning");return}if(u==="cash"&&(T=k(c("pos-paid-input")?.value||0),T<f())){g(`Uang kurang! Minimal ${d(f())}`,"warning");return}x.name=e,x.phone=t;const a=u==="tempo"?k(c("pos-dp-input")?.value||0):0,o=u==="transfer"&&c("pos-bank-sel")?.value||"",s=c("pos-process-btn");s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');try{const n=be(),l={txId:n,date:pe.firestore.FieldValue.serverTimestamp(),dateMs:Date.now(),cashier:window.__currentAdminUid||"admin",cashierName:h.store?.name||"Kasir",customer:{name:x.name||"Pelanggan Umum",phone:x.phone||"",isMember:x.isMember||!1,memberId:x.memberId||null},items:p.map(r=>({...r})),subtotal:q(),globalDiscount:k(M),total:f(),payment:{method:u,paid:u==="cash"?T:u==="tempo"?a:f(),change:u==="cash"?G():0,bank:o,dp:a,tempoBalance:u==="tempo"?f()-a:0},status:u==="tempo"?"tempo":"paid",notes:"",source:"pos"};await H.collection("freshmart").doc("cms_data").collection("pos_transactions").doc(n).set(l),u==="tempo"&&await H.collection("freshmart").doc("cms_data").collection("orders").doc(n).set({orderId:n,source:"pos",dateString:new Date().toISOString(),customerName:l.customer.name,customerPhone:l.customer.phone,items:p.map(r=>({id:r.id,name:r.name,price:r.price,qty:r.qty})),total:f(),payment:{method:"tempo",paid:a,tempoBalance:f()-a,tempoDueDate:0,tempoPenaltyRate:1,tempoPenaltyStopped:!1},status:"processing",isTempo:!0}),B();const b={...l};p=[],M=0,y(),C(),ue(b)}catch(n){console.error("[POS] Error:",n),g("Gagal menyimpan transaksi. Coba lagi.","error"),s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Proses & Simpan')}},ue=e=>{const t=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${d(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold">⚠️ Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,a=JSON.stringify(e).replace(/"/g,"&quot;");document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(0,0,0,0.5)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">${i(e.txId)}</p>
          <p class="text-2xl font-black mb-1" style="color:var(--color-primary)">${d(e.total)}</p>
          ${t}
        </div>
        <div class="px-6 pb-6 flex flex-col gap-2">
          <button onclick="window.printPOSReceipt(${a})" class="w-full py-3 rounded-xl text-white font-bold text-sm shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2" style="background:var(--color-primary)"><i class="fa-solid fa-print"></i> Cetak Struk Thermal</button>
          <button onclick="document.getElementById('pos-success-modal')?.remove()" class="w-full py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 transition-all">Lewati — Transaksi Baru</button>
        </div>
      </div>
    </div>`)},ie=e=>{document.getElementById("pos-success-modal")?.remove();const t=h.store?.name||"TOKO PUTRI",a=h.store?.wa||"",o=h.store?.address||"",s=new Date(e.dateMs).toLocaleString("id-ID"),n=(e.items||[]).map(b=>`<tr><td style="padding:2px 0;word-wrap:break-word">${i(b.name)}</td><td style="text-align:right;padding:2px 4px;white-space:nowrap">${b.qty}x ${d(b.price)}</td><td style="text-align:right;padding:2px 0;white-space:nowrap">${d(b.subtotal)}</td></tr>`).join(""),l=window.open("","_blank","width=420,height=720");if(!l){g("Izinkan popup untuk cetak struk","warning");return}l.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Struk POS</title>
    <style>*{box-sizing:border-box}body{font-family:'Courier New',monospace;font-size:12px;max-width:300px;margin:0 auto;padding:12px}
    h2{text-align:center;font-size:14px;font-weight:900;margin:2px 0;text-transform:uppercase}p{margin:1px 0;text-align:center;font-size:11px}.left{text-align:left}
    table{width:100%;border-collapse:collapse}.line{border-top:1px dashed #333;margin:6px 0}.total{font-weight:900;font-size:13px}
    </style></head><body>
    <h2>${t}</h2>${o?`<p>${i(o)}</p>`:""}${a?`<p>WA: ${i(a)}</p>`:""}
    <div class="line"></div>
    <p class="left">No: <b>${i(e.txId)}</b></p><p class="left">Tgl: ${i(s)}</p>
    <p class="left">Kasir: ${i(e.cashierName)}</p><p class="left">Pelanggan: ${i(e.customer?.name||"Umum")}</p>
    ${e.customer?.phone?`<p class="left">HP: ${i(e.customer.phone)}</p>`:""}
    <div class="line"></div><table>${n}</table><div class="line"></div>
    <table>
    <tr><td>Subtotal</td><td style="text-align:right">${d(e.subtotal)}</td></tr>
    ${(e.globalDiscount||0)>0?`<tr><td>Diskon</td><td style="text-align:right">- ${d(e.globalDiscount)}</td></tr>`:""}
    <tr class="total"><td>TOTAL</td><td style="text-align:right">${d(e.total)}</td></tr>
    ${e.payment.method==="cash"?`<tr><td>Bayar</td><td style="text-align:right">${d(e.payment.paid)}</td></tr><tr><td><b>Kembalian</b></td><td style="text-align:right"><b>${d(e.payment.change)}</b></td></tr>`:""}
    ${e.payment.method==="tempo"?`<tr><td>DP</td><td style="text-align:right">${d(e.payment.dp||0)}</td></tr><tr><td>Sisa Piutang</td><td style="text-align:right">${d(e.payment.tempoBalance||0)}</td></tr>`:""}
    <tr><td>Metode</td><td style="text-align:right">${i(e.payment.method.toUpperCase())}</td></tr>
    </table><div class="line"></div>
    <p style="text-align:center;font-size:10px">*** Terima Kasih ***</p>
    <p style="text-align:center;font-size:9px">Barang yang sudah dibeli tidak dapat dikembalikan</p>
    <script>window.onload=()=>{window.print();setTimeout(()=>window.close(),800)}<\/script>
    </body></html>`),l.document.close()},xe=()=>{O="",P="",S("admin-content",`
    <div class="flex flex-col" style="height:calc(100vh - 56px)">
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-2.5 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0 gap-3">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm shrink-0" style="background:var(--color-primary)"><i class="fa-solid fa-cash-register"></i></div>
          <div><p class="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-wider leading-none">Kasir POS</p><p class="text-[9px] text-slate-400 mt-0.5">${i(h.store?.name||"Toko Putri")}</p></div>
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
    </div>`),C(),y(),me(),window.posAddToCart=A,window.posUpdateQty=Y,window.posSetQty=J,window.posSetItemDisc=W,window.posRemoveItem=X,window.posClearCart=Z,window.openPayModal=ee,window.closePayModal=B,window.setPosCustomerType=se,window.setPosPayMethod=N,window.updatePosChange=oe,window.lookupPosMember=re,window.processPOSTx=le,window.printPOSReceipt=ie,window.posSetGlobalDisc=e=>{M=k(e),y()},window.posCatFilter=e=>{P=e,C()},window.posSearchFn=e=>{O=e,C()},window.openPOSHistory=()=>R(()=>Promise.resolve().then(()=>he),void 0).then(e=>e.renderPOSHistory())},U=Object.freeze(Object.defineProperty({__proto__:null,addToCart:A,clearCart:Z,closePayModal:B,lookupPosMember:re,openPayModal:ee,printPOSReceipt:ie,processPOSTx:le,removeFromCart:X,renderPOS:xe,setItemDisc:W,setPosCustomerType:se,setPosPayMethod:N,setQty:J,updatePosChange:oe,updateQty:Y},Symbol.toStringTag,{value:"Module"})),L=e=>V(e),fe=e=>new Date(e).toLocaleString("id-ID",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"});let _=new Date().toISOString().slice(0,10),w=[],D=null;const z=()=>{c("pos-hist-list")&&S("pos-hist-list",'<div class="flex justify-center py-12"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>'),D&&(D(),D=null);const t=new Date(_);t.setHours(0,0,0,0);const a=new Date(_);a.setHours(23,59,59,999),D=H.collection("freshmart").doc("cms_data").collection("pos_transactions").where("dateMs",">=",t.getTime()).where("dateMs","<=",a.getTime()).onSnapshot(o=>{w=o.docs.map(s=>s.data()).sort((s,n)=>(n.dateMs||0)-(s.dateMs||0)),Q()},o=>{console.error("[POS History]",o),g("Gagal memuat riwayat kasir","error"),w=[],Q()})},Q=()=>{const e=w.reduce((r,m)=>r+(m.status!=="void"&&m.total||0),0),t=w.filter(r=>r.status!=="void").length,a=w.filter(r=>r.status==="void").length,o={};w.filter(r=>r.status!=="void").forEach(r=>{const m=r.payment?.method||"other";o[m]=(o[m]||0)+(r.total||0)});const s={cash:"Tunai",qris:"QRIS",transfer:"Transfer",tempo:"Tempo"},n=Object.entries(o).map(([r,m])=>`<div class="flex justify-between text-xs"><span class="text-slate-500">${s[r]||r}</span><span class="font-bold text-slate-700 dark:text-slate-200">${L(m)}</span></div>`).join(""),l=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Total Omset</p>
            <p class="text-base font-black" style="color:var(--color-primary)">${L(e)}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Transaksi</p>
            <p class="text-base font-black text-slate-800 dark:text-white">${t}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Produk Terjual</p>
            <p class="text-base font-black text-slate-800 dark:text-white">${w.filter(r=>r.status!=="void").reduce((r,m)=>r+(m.items||[]).reduce((v,I)=>v+I.qty,0),0)}</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 text-center">
            <p class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Void</p>
            <p class="text-base font-black text-red-500">${a}</p>
        </div>
    </div>
    ${n?`<div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 mb-4 space-y-1.5">${n}</div>`:""}`,b=w.length===0?`<div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600"><i class="fa-solid fa-receipt text-4xl mb-3"></i><p class="font-semibold text-sm">Belum ada transaksi</p><p class="text-xs mt-1">${_}</p></div>`:w.map(r=>{const m=r.status==="void",v={cash:"emerald",qris:"blue",transfer:"violet",tempo:"amber"}[r.payment?.method]||"slate",I={cash:"Tunai",qris:"QRIS",transfer:"Transfer",tempo:"Tempo"}[r.payment?.method]||r.payment?.method;return`<div class="bg-white dark:bg-slate-800 border ${m?"border-red-200 dark:border-red-800 opacity-60":"border-slate-200 dark:border-slate-700"} rounded-2xl p-3 space-y-2 ${m?"":"hover:shadow-sm"} transition-all">
                <div class="flex items-start justify-between gap-2">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[10px] font-bold text-slate-500">${i(r.txId)}</span>
                            <span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-${v}-100 dark:bg-${v}-900/30 text-${v}-700 dark:text-${v}-400">${I}</span>
                            ${m?'<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600">VOID</span>':""}
                        </div>
                        <p class="text-[10px] text-slate-400 mt-0.5">${fe(r.dateMs)} · ${i(r.customer?.name||"Umum")}</p>
                    </div>
                    <div class="text-right shrink-0">
                        <p class="font-black text-sm ${m?"line-through text-slate-400":""}" style="${m?"":"color:var(--color-primary)"}">${L(r.total)}</p>
                        ${r.payment?.method==="cash"?`<p class="text-[10px] text-slate-400">Kembalian ${L(r.payment.change||0)}</p>`:""}
                    </div>
                </div>
                <div class="text-[10px] text-slate-400 flex flex-wrap gap-1">
                    ${(r.items||[]).map(E=>`<span class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded-md">${i(E.name)} ×${E.qty}</span>`).join("")}
                </div>
                ${m?"":`<div class="flex justify-end gap-2 pt-1">
                    <button onclick="window.printPOSReceiptFromHist(${JSON.stringify(r).replace(/"/g,"&quot;")})" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"><i class="fa-solid fa-print"></i>Cetak</button>
                    <button onclick="window.voidPOSTx('${i(r.txId)}')" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border border-red-200 dark:border-red-800 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"><i class="fa-solid fa-ban"></i>Void</button>
                </div>`}
            </div>`}).join("");S("pos-hist-rekap",l),S("pos-hist-list",b)},ne=e=>{ce("Void Transaksi",`Void transaksi ${e}?
Transaksi akan ditandai batal dan tidak dihitung dalam laporan.`,async()=>{try{await H.collection("freshmart").doc("cms_data").collection("pos_transactions").doc(e).update({status:"void"}),g("Transaksi berhasil divoid","success")}catch{g("Gagal void transaksi","error")}},"Ya, Void")},ge=()=>{S("admin-content",`
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
    </div>`),window.posHistChangDate=e=>{_=e;const t=c("pos-hist-date");t&&(t.value=e),z()},window.voidPOSTx=ne,window.printPOSReceiptFromHist=e=>{R(()=>Promise.resolve().then(()=>U),void 0).then(t=>t.printPOSReceipt(e))},window.__openPOSMain=()=>R(()=>Promise.resolve().then(()=>U),void 0).then(e=>e.renderPOS()),z()},he=Object.freeze(Object.defineProperty({__proto__:null,renderPOSHistory:ge,voidPOSTx:ne},Symbol.toStringTag,{value:"Module"}));export{A as addToCart,Z as clearCart,B as closePayModal,re as lookupPosMember,ee as openPayModal,ie as printPOSReceipt,le as processPOSTx,X as removeFromCart,xe as renderPOS,W as setItemDisc,se as setPosCustomerType,N as setPosPayMethod,J as setQty,oe as updatePosChange,Y as updateQty};
