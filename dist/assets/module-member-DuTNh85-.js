import{e as b,g as re,a as y,s as E,c as q,b as j,f as g,d as xe,h as w,i as x,r as ee,j as L,k as $,o as fe,l as be,m as ne,n as J,p as u,q as I,t as O,u as F,v,w as K,x as _,y as te}from"./module-print-BDAODMFO.js";const oe=()=>{b("voucher-input");const r=(re("voucher-input")||"").toUpperCase().trim(),e=(y.vouchers||[]).find(t=>(t.code||"").toUpperCase()===r);E("voucher-msg-container");const a=typeof window.getEffP=="function"?window.getEffP:t=>t.effectivePrice||t.price||0,s=q.reduce((t,n)=>t+(parseFloat(a(n))||0)*(parseFloat(n.qty)||0),0);if(e){let t=!0;e.targetProduct&&e.targetProduct!==""&&(t=q.some(n=>n&&String(n.id)===String(e.targetProduct))),e.targetProduct&&e.targetProduct!==""&&!t?(L(null),j("voucher-msg",'<i class="fa-solid fa-box mr-1"></i> Khusus Produk Tertentu!'),b("voucher-msg")&&(b("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):e.minPurchase&&parseFloat(e.minPurchase)>0&&s<parseFloat(e.minPurchase)?(L(null),j("voucher-msg",`<i class="fa-solid fa-circle-exclamation mr-1"></i> Minimal belanja ${g(e.minPurchase)}`),b("voucher-msg")&&(b("voucher-msg").className="text-sm font-bold text-amber-500 dark:text-amber-400")):e.type&&e.type.includes("shipping")&&xe.deliveryMethod!=="delivery"?(L(null),j("voucher-msg",'<i class="fa-solid fa-motorcycle mr-1"></i> Khusus pesanan dikirim kurir!'),b("voucher-msg")&&(b("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):(L(e),j("voucher-msg",'<i class="fa-solid fa-check-circle mr-1"></i> Voucher Diterapkan!'),b("voucher-msg")&&(b("voucher-msg").className="text-sm font-bold text-[var(--color-primary)]"))}else r===""?(L(null),w("voucher-msg-container"),typeof window.rPay=="function"&&window.rPay()):(L(null),j("voucher-msg",'<i class="fa-solid fa-times-circle mr-1"></i> Kode Tidak Valid'),b("voucher-msg")&&(b("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400"));typeof window.rPay=="function"&&window.rPay()},ge=()=>{let r=document.getElementById("voucher-modal");r||(r=document.createElement("div"),r.id="voucher-modal",r.className="fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",r.onclick=s=>{s.target===r&&Y()},document.body.appendChild(r));const e=(y.vouchers||[]).filter(s=>s.isShow!==!1&&s.isShow!=="false"),a=e.length?e.map(s=>{let t="";s.type==="percent"?t=`Diskon ${s.value}%`:s.type==="shipping_free"?t="Gratis Ongkir":s.type==="shipping_flat"?t=`Diskon Ongkir ${g(s.value)}`:t=`Potongan ${g(s.value)}`;const n=s.minPurchase&&parseFloat(s.minPurchase)>0?`Min. belanja ${g(s.minPurchase)}`:"Tanpa minimal belanja";return`
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:border-[var(--color-primary)] transition-all shadow-xs">
            <div class="flex items-start gap-3.5 min-w-0">
                <div class="w-11 h-11 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-lg shrink-0 shadow-sm mt-0.5">
                    <i class="fa-solid fa-ticket"></i>
                </div>
                <div class="min-w-0">
                    <div class="flex flex-wrap items-center gap-2 mb-1.5">
                        <span class="font-extrabold text-sm font-mono tracking-wider text-slate-800 dark:text-white bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700 select-all">${x(s.code)}</span>
                        <span class="primary-bg text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase whitespace-nowrap shadow-2xs">${t}</span>
                    </div>
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-[var(--color-primary)] text-xs"></i> ${n}</p>
                </div>
            </div>
            <div class="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-700">
                <button type="button" onclick="copyVoucherCode('${x(s.code)}')" class="flex-1 md:flex-initial bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-2xs">
                    <i class="fa-regular fa-copy"></i> Salin
                </button>
                <button type="button" onclick="useVoucherCode('${x(s.code)}')" class="flex-1 md:flex-initial primary-bg text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm">
                    Gunakan <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
            </div>
        </div>`}).join(""):`
        <div class="p-8 text-center">
            <div class="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mx-auto mb-3">
                <i class="fa-solid fa-ticket text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-800 dark:text-white mb-1">Belum Ada Kupon Promo</p>
            <p class="text-xs text-slate-500 dark:text-slate-400">Saat ini belum ada promo aktif. Silakan cek kembali nanti!</p>
        </div>
    `;r.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2">
                    <i class="fa-solid fa-ticket text-[var(--color-primary)]"></i> Kupon &amp; Voucher Promo
                </h3>
                <button onclick="closeVoucherModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3.5">
                ${a}
            </div>
        </div>`,r.style.opacity="0",r.style.display="flex",requestAnimationFrame(()=>{r.style.transition="opacity 0.25s ease",r.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("voucher")},he=r=>{navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(r).then(()=>{typeof window.showToast=="function"&&window.showToast(`✅ Kode "${r}" disalin ke clipboard!`)}).catch(()=>{typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${r}`)}):typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${r}`)},ye=r=>{Y();const e=b("voucher-input");e&&(e.value=r,oe()),q.length>0?typeof window.changeView=="function"&&window.changeView("view-checkout"):(typeof window.showToast=="function"&&window.showToast(`Kode "${r}" siap digunakan saat checkout belanja!`),typeof window.changeView=="function"&&window.changeView("view-catalog"))},Y=(r=!1)=>{const e=()=>{const a=document.getElementById("voucher-modal");!a||a.style.display==="none"||(a.style.opacity="0",a.style.transition="opacity 0.25s ease",setTimeout(()=>{a.style.display="none",a.style.opacity="",a.style.transition=""},250))};typeof ee=="function"?ee("voucher",r,e):typeof window.requestCloseModal=="function"?window.requestCloseModal("voucher",r,e):e()};window.applyVoucher=oe;window.openVoucherModal=ge;window.closeVoucherModal=Y;window.copyVoucherCode=he;window.useVoucherCode=ye;let k=null,C="bank",G=null,U=null,Q=[];const we=r=>{if(!r)return;const e=String(r).trim();navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>{$("Nomor rekening "+e+" berhasil disalin!","success")}).catch(()=>{prompt("Salin nomor rekening:",e)}):prompt("Salin nomor rekening:",e)},ke=(r,e=700,a=.6)=>new Promise(s=>{if(!r||!r.type.startsWith("image/"))return s(null);const t=new FileReader;t.readAsDataURL(r),t.onload=n=>{const o=new Image;o.onload=()=>{let{width:l,height:d}=o;(l>e||d>e)&&(l>d?(d=Math.round(d*e/l),l=e):(l=Math.round(l*e/d),d=e));const f=document.createElement("canvas");f.width=l,f.height=d,f.getContext("2d").drawImage(o,0,0,l,d);const m=f.toDataURL("image/jpeg",a);s(m)},o.onerror=()=>s(n.target.result),o.src=n.target.result},t.onerror=()=>s(null)}),ve=()=>{if(!b("modal-client-tempo-pay")){const e=document.createElement("div");e.id="modal-client-tempo-pay",e.className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/80 transition-opacity duration-300 opacity-0 pointer-events-none",e.onclick=a=>{a.target===e&&Z()},e.innerHTML=`
            <div id="modal-client-tempo-pay-box" class="bg-white dark:bg-slate-900 w-full sm:max-w-lg rounded-t-[2.25rem] sm:rounded-3xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden transform translate-y-full sm:translate-y-6 transition-transform duration-300" onclick="event.stopPropagation()">
                <!-- Isi Modal dirender reaktif oleh openClientPaymentModal() -->
            </div>
        `,document.body.appendChild(e)}},W=()=>{const r=[];Array.isArray(O)&&O.length&&r.push(...O),Array.isArray(F)&&F.length&&r.push(...F);try{const t=localStorage.getItem("freshmart_my_orders");if(t){const n=JSON.parse(t);Array.isArray(n)&&r.push(...n)}}catch{}const e=new Set,a=r.filter(t=>!t||!t.orderId||e.has(t.orderId)?!1:(e.add(t.orderId),!0)),s=(u?.phone||u?.id||"").toString().replace(/\D/g,"");return a.filter(t=>{if(!!!(t.isTempo||t.payment?.isPaylater||t.payment?.subMethod==="paylater"||t.payment?.method==="tempo")||t.status==="Batal"||t.payment?.paymentStatus==="lunas")return!1;const o=parseFloat(t.payment?.tempoBalance);if(isNaN(o)||o<=0)return!1;if(s){const l=(t.customer?.phone||t.customer?.wa||"").toString().replace(/\D/g,"");if(l&&!(l===s||l.endsWith(s)||s.endsWith(l)))return!1}return!0})},Pe=async(r=null)=>{try{let e=[];try{const s=localStorage.getItem("freshmart_pending_confirmations");s&&(e=JSON.parse(s)||[])}catch{}const a=(u?.phone||u?.id||"").toString().replace(/\D/g,"");if(a){const s=await I.collection("tempo_payment_confirmations").where("customerPhone","==",a).where("status","==","pending").get();if(!s.empty){const t=[];s.forEach(n=>t.push({id:n.id,...n.data()})),e=t;try{localStorage.setItem("freshmart_pending_confirmations",JSON.stringify(e))}catch{}}}return Q=e,r?e.filter(s=>s.orderId===r):e}catch(e){return console.warn("[ClientPay] Gagal muat konfirmasi pending:",e),Q}},Me=async(r=null,e=null)=>{ve();const a=b("modal-client-tempo-pay"),s=b("modal-client-tempo-pay-box");if(!a||!s)return;const t=W();if(!t.length){$("Tidak ada tagihan atau angsuran tempo aktif yang perlu dibayar.","info");return}k=(r?t.find(n=>n.orderId===r):null)||t[0],C="bank",G=null,U=null,await Pe(k.orderId),ie(t,e),fe(a,s)},Z=()=>{const r=b("modal-client-tempo-pay"),e=b("modal-client-tempo-pay-box");!r||!e||be(r,e)},ie=(r,e=null)=>{const a=b("modal-client-tempo-pay-box");if(!a)return;const s=k,t=!!(s.payment?.isPaylater||s.isPaylater||s.payment?.subMethod==="paylater"),n=Math.max(0,parseFloat(s.payment?.tempoBalance)||0),o=parseFloat(s.payment?.paylaterMonthlyInstallment)||(t&&s.payment?.paylaterMonths>0?Math.round(n/s.payment.paylaterMonths):n),l=parseInt(s.payment?.paylaterMonths)||(s.payment?.paylaterTenor==="2m"?2:s.payment?.paylaterTenor==="3m"?3:1),d=t?s.payment?.paylaterTenor==="2m"?"2 Bulan":s.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari":"Tempo Toko",f=e&&e>0?Math.min(n,e):t&&o>0&&o<n?o:n,m=Q.filter(c=>c.orderId===s.orderId&&c.status==="pending").reduce((c,A)=>c+(parseFloat(A.amount)||0),0),i=y.banks&&y.banks.length>0?y.banks:[{bankName:"BCA",bankAccount:"1234567890",bankOwner:y.store?.name||"Toko Putri"}],p=y.payment?.qrisUrl||"";a.innerHTML=`
        <!-- DRAG PULL MOBILE -->
        <div class="pull-indicator sm:hidden"></div>

        <!-- HEADER -->
        <div class="px-5 sm:px-6 pt-3.5 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 flex items-center justify-between shrink-0">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-black text-white shrink-0 shadow-xs" style="background: var(--color-primary);">
                    <i class="fa-solid fa-file-invoice-dollar text-sm"></i>
                </div>
                <div>
                    <h3 class="font-black text-sm sm:text-base text-slate-800 dark:text-white">Pembayaran Tagihan / Cicilan</h3>
                    <p class="text-[10px] text-slate-400 font-semibold">Konfirmasi Langsung ke Admin Toko Putri</p>
                </div>
            </div>
            <button type="button" onclick="window.closeClientPaymentModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" title="Tutup">
                <i class="fa-solid fa-xmark text-xs"></i>
            </button>
        </div>

        <!-- BODY SCROLLABLE -->
        <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-4 text-xs custom-scrollbar">
            <!-- PENDING BANNER JIKA ADA PENGAJUAN -->
            ${m>0?`
            <div class="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 flex items-center gap-2.5 text-amber-800 dark:text-amber-200">
                <i class="fa-solid fa-hourglass-half text-amber-500 text-sm animate-pulse shrink-0"></i>
                <div class="min-w-0 flex-1">
                    <p class="font-bold text-[11px]">Ada Pengajuan Pembayaran Sedang Diverifikasi: <b>${g(m)}</b></p>
                    <p class="text-[10px] text-amber-700/80 dark:text-amber-300/80 mt-0.5">Admin toko sedang memeriksa mutasi rekening Anda. Limit akan otomatis pulih setelah diverifikasi.</p>
                </div>
            </div>
            `:""}

            <!-- PILIH NOTA PESANAN (JIKA LEBIH DARI 1) -->
            ${r.length>1?`
            <div>
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Pilih Nota Tagihan</label>
                <select id="client-pay-order-select" onchange="window.switchClientPaymentOrder(this.value)" class="admin-input bg-slate-50 dark:bg-slate-900 rounded-2xl font-bold cursor-pointer">
                    ${r.map(c=>`
                        <option value="${c.orderId}" ${c.orderId===s.orderId?"selected":""}>
                            Nota #${c.orderId} — Sisa: ${g(c.payment?.tempoBalance||0)} (${c.payment?.isPaylater?"PayLater":"Tempo"})
                        </option>
                    `).join("")}
                </select>
            </div>
            `:""}

            <!-- KARTU RINGKASAN TAGIHAN TERPILIH -->
            <div class="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/60 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-2">
                <div class="flex items-center justify-between text-[11px]">
                    <span class="text-slate-400 font-bold">Nota Tagihan</span>
                    <span class="font-mono font-bold text-slate-800 dark:text-slate-200">#${x(s.orderId)}</span>
                </div>
                <div class="flex items-center justify-between text-[11px]">
                    <span class="text-slate-400 font-bold">Layanan / Tenor</span>
                    <span class="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <i class="fa-solid fa-bolt text-[10px]"></i> ${x(d)}
                    </span>
                </div>
                <div class="flex items-center justify-between text-[11px] pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                    <span class="text-slate-500 dark:text-slate-400 font-bold">Sisa Tagihan Belum Lunas</span>
                    <span class="text-sm font-black font-mono text-rose-600 dark:text-rose-400">${g(n)}</span>
                </div>
                ${t&&o>0&&o<n?`
                <div class="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
                    <span>Angsuran per Bulan (${l}x)</span>
                    <span class="font-mono font-bold text-slate-700 dark:text-slate-300">${g(o)} / bulan</span>
                </div>`:""}
            </div>

            <!-- PILIHAN NOMINAL PEMBAYARAN -->
            <div class="space-y-2">
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Nominal Pembayaran *</label>
                
                <!-- Quick Chips -->
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                    ${t&&o>0&&o<n?`
                    <button type="button" onclick="window.setClientPayAmount(${o}, 'angsuran')" class="py-2 px-2.5 rounded-xl border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold text-[10px] text-left active:scale-95 transition-all">
                        <span class="block text-[9px] uppercase tracking-wider opacity-75">1 Angsuran</span>
                        <span class="font-mono font-black">${g(o)}</span>
                    </button>
                    `:""}
                    <button type="button" onclick="window.setClientPayAmount(${n}, 'pelunasan')" class="py-2 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-200 font-bold text-[10px] text-left active:scale-95 transition-all">
                        <span class="block text-[9px] uppercase tracking-wider opacity-75 text-slate-400">Pelunasan Penuh</span>
                        <span class="font-mono font-black">${g(n)}</span>
                    </button>
                    <button type="button" onclick="window.focusCustomClientPay()" class="py-2 px-2.5 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 font-bold text-[10px] text-left active:scale-95 transition-all col-span-2 sm:col-span-1">
                        <span class="block text-[9px] uppercase tracking-wider opacity-75 text-slate-400">Titipan Bebas</span>
                        <span>Nominal Lain</span>
                    </button>
                </div>

                <!-- Input Nominal Rupiah -->
                <div class="relative">
                    <span class="absolute left-4 top-1/2 -translate-y-1/2 font-black text-xs text-slate-400">Rp</span>
                    <input type="number" id="client-pay-amount-input" min="1000" max="${n}" value="${f}" class="admin-input pl-10 text-sm font-black font-mono rounded-2xl" placeholder="0">
                </div>
            </div>

            <!-- PILIH SALURAN PEMBAYARAN TOKO (BANK VS QRIS) -->
            <div class="space-y-2.5 pt-1">
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Saluran Pembayaran Resmi Toko *</label>
                
                <div class="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                    <button type="button" onclick="window.switchClientPayChannel('bank')" id="tab-btn-client-bank" class="py-2 rounded-xl text-xs font-black transition-all ${C==="bank"?"bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white":"text-slate-500 hover:text-slate-800"}">
                        <i class="fa-solid fa-building-columns mr-1.5"></i> Transfer Bank
                    </button>
                    <button type="button" onclick="window.switchClientPayChannel('qris')" id="tab-btn-client-qris" class="py-2 rounded-xl text-xs font-black transition-all ${C==="qris"?"bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white":"text-slate-500 hover:text-slate-800"}">
                        <i class="fa-solid fa-qrcode mr-1.5"></i> QRIS Toko
                    </button>
                </div>

                <!-- CONTAINER CHANNEL BANK -->
                <div id="client-pay-channel-bank" class="${C==="bank"?"block":"hidden"} space-y-2">
                    <p class="text-[10px] text-slate-400">Silakan transfer ke salah satu rekening resmi Toko Putri di bawah ini:</p>
                    <div class="space-y-2">
                        ${i.map(c=>`
                            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3">
                                <div>
                                    <div class="flex items-center gap-1.5">
                                        <span class="px-2 py-0.5 rounded-md text-[9px] font-black uppercase bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-mono">${x(c.bankName||"BANK")}</span>
                                        <span class="text-xs font-bold text-slate-800 dark:text-white">${x(c.bankOwner||y.store?.name||"Toko Putri")}</span>
                                    </div>
                                    <p class="font-mono text-sm font-black text-slate-900 dark:text-slate-100 tracking-wider mt-1">${x(c.bankAccount||"-")}</p>
                                </div>
                                <button type="button" onclick="window.copyAccountNumber('${x(c.bankAccount||"")}')" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 text-slate-700 dark:text-slate-200 text-[10px] font-bold flex items-center gap-1.5 active:scale-95 transition-all shadow-2xs shrink-0 cursor-pointer">
                                    <i class="fa-regular fa-copy"></i> Salin
                                </button>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- CONTAINER CHANNEL QRIS -->
                <div id="client-pay-channel-qris" class="${C==="qris"?"block":"hidden"} space-y-2.5 text-center">
                    <p class="text-[10px] text-slate-400">Scan QRIS toko di bawah menggunakan aplikasi mobile banking atau e-wallet (BCA, Livin, GoPay, OVO, DANA, ShopeePay):</p>
                    ${p?`
                        <div class="inline-block p-3 rounded-2xl bg-white border border-slate-200 shadow-sm mx-auto">
                            <img src="${x(p)}" alt="QRIS Resmi Toko Putri" class="w-48 h-48 object-contain mx-auto rounded-lg">
                        </div>
                        <div>
                            <a href="${x(p)}" target="_blank" download="QRIS_Toko_Putri.jpg" class="inline-flex items-center gap-1.5 text-[10px] font-bold text-[var(--color-primary)] hover:underline">
                                <i class="fa-solid fa-arrow-down-to-bracket text-xs"></i> Unduh / Buka QRIS Penuh
                            </a>
                        </div>
                    `:`
                        <div class="p-4 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 text-slate-400 text-center">
                            <i class="fa-solid fa-qrcode text-2xl mb-1 text-slate-300"></i>
                            <p class="text-[10px]">QRIS belum diatur oleh toko. Silakan gunakan metode Transfer Bank di atas.</p>
                        </div>
                    `}
                </div>
            </div>

            <!-- UNGGAH BUKTI TRANSFER -->
            <div class="space-y-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Unggah Bukti Transfer / Resi *</label>
                
                <input type="file" id="client-pay-proof-input" accept="image/*" class="hidden" onchange="window.handleClientProofFileChange(event)">
                
                <div id="client-pay-proof-dropzone" onclick="document.getElementById('client-pay-proof-input').click()" class="p-4 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-[var(--color-primary)] transition-all cursor-pointer text-center bg-slate-50/60 dark:bg-slate-800/40 group">
                    <div id="client-pay-proof-placeholder">
                        <div class="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-transform">
                            <i class="fa-solid fa-camera text-base"></i>
                        </div>
                        <p class="text-xs font-bold text-slate-700 dark:text-slate-200">Klik untuk Ambil Foto / Pilih Screenshot</p>
                        <p class="text-[10px] text-slate-400 mt-0.5">Format JPG, PNG atau WebP (Otomatis dikompresi)</p>
                    </div>

                    <div id="client-pay-proof-preview-wrap" class="hidden">
                        <img id="client-pay-proof-img" src="" alt="Preview Bukti" class="max-h-48 mx-auto rounded-xl border border-slate-200 dark:border-slate-700 object-contain shadow-xs">
                        <p class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-2 flex items-center justify-center gap-1">
                            <i class="fa-solid fa-circle-check"></i> Foto siap dikirim (Klik untuk ganti)
                        </p>
                    </div>
                </div>

                <!-- Input Catatan Pengirim (Opsional) -->
                <div>
                    <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Catatan Tambahan (Opsional)</label>
                    <input type="text" id="client-pay-notes-input" placeholder="Contoh: Transfer via BCA a.n Putri / Ref 987654" class="admin-input rounded-xl text-xs bg-slate-50 dark:bg-slate-900">
                </div>
            </div>
        </div>

        <!-- STICKY ACTION FOOTER -->
        <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex items-center justify-end gap-2.5" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
            <button type="button" onclick="window.closeClientPaymentModal()" class="h-11 px-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">
                Batal
            </button>
            <button type="button" id="client-pay-submit-btn" onclick="window.submitClientPaymentConfirmation()" class="h-11 px-5 rounded-2xl text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                <i class="fa-solid fa-paper-plane"></i>
                <span>Kirim Konfirmasi Pembayaran</span>
            </button>
        </div>
    `},Te=r=>{const e=W(),a=e.find(s=>s.orderId===r);a&&(k=a,ie(e))},Ae=r=>{C=r;const e=b("tab-btn-client-bank"),a=b("tab-btn-client-qris"),s=b("client-pay-channel-bank"),t=b("client-pay-channel-qris");r==="bank"?(e&&(e.className="py-2 rounded-xl text-xs font-black transition-all bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white"),a&&(a.className="py-2 rounded-xl text-xs font-black transition-all text-slate-500 hover:text-slate-800"),s&&E(s),t&&w(t)):(a&&(a.className="py-2 rounded-xl text-xs font-black transition-all bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white"),e&&(e.className="py-2 rounded-xl text-xs font-black transition-all text-slate-500 hover:text-slate-800"),t&&E(t),s&&w(s))},Se=(r,e="angsuran")=>{const a=b("client-pay-amount-input");a&&(a.value=r,a.focus())},$e=()=>{const r=b("client-pay-amount-input");r&&(r.focus(),r.select())},Ce=async r=>{const e=r.target.files&&r.target.files[0];if(e){ne("Mengompresi foto bukti transfer...");try{U=e;const a=await ke(e);G=a;const s=b("client-pay-proof-preview-wrap"),t=b("client-pay-proof-img"),n=b("client-pay-proof-placeholder");t&&a&&(t.src=a),s&&E(s),n&&w(n)}catch(a){console.warn("Gagal memproses gambar:",a),$("Gagal memproses foto bukti transfer!","error")}finally{J()}}},Ie=async()=>{if(!k)return $("Pilih nota pesanan yang ingin dibayar!","error");const r=b("client-pay-amount-input"),e=parseFloat(r?.value)||0,a=Math.max(0,parseFloat(k.payment?.tempoBalance)||0);if(e<=0)return $("Masukkan nominal pembayaran yang valid!","error");if(e>a+100)return $("Nominal pembayaran melebihi sisa tagihan ("+g(a)+")!","error");if(!G)return $("Wajib melampirkan foto / screenshot bukti transfer!","error");const s=b("client-pay-submit-btn");s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-1"></i> Mengirim...'),ne("Mengirim konfirmasi pembayaran ke toko...");try{let t=G;if(U&&typeof window.uploadBuktiToGDrive=="function")try{const p=await window.uploadBuktiToGDrive(U,k.orderId);p&&(t=p)}catch(p){console.warn("[ClientPay] GDrive upload fallback to compressed image:",p)}const n=(u?.phone||u?.id||k.customer?.phone||k.customer?.wa||"").toString().replace(/\D/g,""),o=n.startsWith("0")?"62"+n.substring(1):n,l=u?.name||k.customer?.name||"Pelanggan",d="CONF-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase(),f=y.banks&&y.banks[0]?y.banks[0].bankName:"Transfer Bank",h=(b("client-pay-notes-input")?.value||"").trim(),m={confirmId:d,orderId:k.orderId,customerPhone:o,customerName:l,amount:e,channel:C,bankName:C==="bank"?f:"QRIS Toko",buktiUrl:t,notes:h,createdAt:Date.now(),status:"pending"};await I.collection("tempo_payment_confirmations").doc(d).set(m);let i=[];try{const p=localStorage.getItem("freshmart_pending_confirmations");p&&(i=JSON.parse(p)||[])}catch{}i.unshift(m);try{localStorage.setItem("freshmart_pending_confirmations",JSON.stringify(i))}catch{}J(),Z(),typeof window.showToast=="function"&&window.showToast("Bukti transfer "+g(e)+" berhasil dikirim ke Admin Toko Putri!","success"),typeof window.rMemberModalBody=="function"&&window.rMemberModalBody(),setTimeout(()=>{alert("Alhamdulillah! Konfirmasi pembayaran sebesar "+g(e)+" untuk nota #"+k.orderId+` telah berhasil dikirim ke Admin Toko Putri.

Admin akan memeriksa mutasi rekening dan menyetujui pembayaran Anda. Limit belanja PayLater Anda akan otomatis pulih segera setelah disetujui.`)},300)}catch(t){console.error("[ClientPay] Gagal kirim konfirmasi:",t),J(),s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-paper-plane mr-1"></i> Kirim Konfirmasi Pembayaran'),$("Gagal mengirim konfirmasi: "+(t.message||"Periksa koneksi internet"),"error")}},z=(r,e=[])=>{if(!r)return"";const a=!!(r.payment?.isPaylater||r.isPaylater||r.payment?.subMethod==="paylater"),s=Array.isArray(r.payment?.paylaterSchedule)&&r.payment.paylaterSchedule.length>0?r.payment.paylaterSchedule:null,t=Math.max(0,parseFloat(r.payment?.tempoBalance)||0);parseFloat(r.payment?.grandTotal||r.total);const o=(r.payment?.installments||[]).reduce((h,m)=>h+(parseFloat(m.amount)||0),0),d=(e||[]).filter(h=>h.orderId===r.orderId&&h.status==="pending").reduce((h,m)=>h+(parseFloat(m.amount)||0),0),f=a?r.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":r.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)":"Tempo Pembayaran Toko";if(s&&s.length>0){let h=0;const m=s.map((i,p)=>{const c=parseFloat(i.totalMonthly)||0;h+=c;const A=h;let M="",T="",B=!1;o>=A?(M="✓ LUNAS",T="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700",B=!0):d>0?(M="⏳ SEDANG DIVERIFIKASI",T="bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-300 dark:border-amber-700"):i.dueDate&&Date.now()>i.dueDate?(M="⚠️ TERLAMBAT",T="bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-300 dark:border-rose-700"):(M="MENUNGGU TEMPO",T="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700");const N=i.dueDateStr||(i.dueDate?new Date(i.dueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-");return`
                <tr class="text-[11px] ${B?"opacity-70 bg-slate-50/50 dark:bg-slate-900/20":""}">
                    <td class="py-2.5 px-3 font-bold text-slate-800 dark:text-slate-200">
                        Bulan ke-${i.installmentNo||p+1}
                    </td>
                    <td class="py-2.5 px-3 text-slate-600 dark:text-slate-400 font-mono text-[10px]">
                        ${N}
                    </td>
                    <td class="py-2.5 px-3 font-mono font-bold text-slate-800 dark:text-slate-200">
                        ${g(i.pokok||0)}
                    </td>
                    <td class="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                        +${g((i.adminFee||0)+(i.serviceFee||0))}
                    </td>
                    <td class="py-2.5 px-3 font-mono font-black text-slate-900 dark:text-white">
                        ${g(c)}
                    </td>
                    <td class="py-2.5 px-3 text-right">
                        <span class="inline-block px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${T}">
                            ${M}
                        </span>
                    </td>
                </tr>
            `}).join("");return`
            <div class="mt-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 overflow-hidden shadow-2xs space-y-2 p-3 sm:p-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <h4 class="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                            <i class="fa-solid fa-calendar-check text-[var(--color-primary)]"></i> Rincian Jadwal Angsuran Anda
                        </h4>
                        <p class="text-[10px] text-slate-400 font-medium">Nota #${x(r.orderId)} • ${x(f)}</p>
                    </div>
                    ${t>0?`
                    <button type="button" onclick="window.openClientPaymentModal('${x(r.orderId)}')" class="px-3 py-1.5 rounded-xl text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary);">
                        <i class="fa-solid fa-credit-card text-[9px]"></i> Bayar Angsuran Ini
                    </button>
                    `:""}
                </div>

                <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-800 custom-scrollbar">
                    <table class="w-full text-left whitespace-nowrap">
                        <thead class="bg-slate-100/80 dark:bg-slate-800/80 text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            <tr>
                                <th class="py-2 px-3">Angsuran</th>
                                <th class="py-2 px-3">Jatuh Tempo</th>
                                <th class="py-2 px-3">Pokok</th>
                                <th class="py-2 px-3">Biaya Tenor</th>
                                <th class="py-2 px-3">Wajib Bayar</th>
                                <th class="py-2 px-3 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900/40">
                            ${m}
                        </tbody>
                    </table>
                </div>

                <div class="pt-2 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 flex-wrap gap-2">
                    <span>Sudah Dibayar: <b class="font-mono text-emerald-600">${g(o)}</b></span>
                    <span>Sisa Wajib Bayar: <b class="font-mono text-rose-600 font-black">${g(t)}</b></span>
                </div>
            </div>
        `}return`
        <div class="mt-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3.5 sm:p-4 space-y-2.5">
            <div class="flex items-center justify-between flex-wrap gap-2">
                <div>
                    <h4 class="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                        <i class="fa-solid fa-file-invoice text-emerald-500"></i> Tagihan Tempo Berjalan
                    </h4>
                    <p class="text-[10px] text-slate-400 font-medium">Nota #${x(r.orderId)} • Jatuh Tempo: ${r.payment?.tempoDueDate?new Date(r.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"}</p>
                </div>
                ${t>0?`
                <button type="button" onclick="window.openClientPaymentModal('${x(r.orderId)}')" class="px-3 py-1.5 rounded-xl text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary);">
                    <i class="fa-solid fa-credit-card text-[9px]"></i> Bayar Sekarang
                </button>
                `:""}
            </div>

            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span class="text-slate-500 font-bold">Sisa Tagihan Tempo</span>
                <span class="font-mono font-black text-rose-600 dark:text-rose-400 text-sm">${g(t)}</span>
            </div>
        </div>
    `};typeof window<"u"&&(window.openClientPaymentModal=Me,window.closeClientPaymentModal=Z,window.switchClientPaymentOrder=Te,window.switchClientPayChannel=Ae,window.setClientPayAmount=Se,window.focusCustomClientPay=$e,window.handleClientProofFileChange=Ce,window.submitClientPaymentConfirmation=Ie,window.copyAccountNumber=we,window.renderClientInstallmentSchedule=z);const P=new Map,Be=3*60*1e3,D=new Map,Ne=2*60*1e3,Re="https://lh3.googleusercontent.com/d/1KHwsV5sK6aAH3-eP_vTJA4tE5MyRukLo",je=r=>{if(!r){P.clear(),D.clear();return}const e=r.toString().replace(/\D/g,"");let a=e,s=e.startsWith("0")?"62"+e.substring(1):e.startsWith("62")?e:"62"+e,t=e.startsWith("62")?"0"+e.substring(2):e;P.delete(e),P.delete(a),P.delete(s),P.delete(t),D.delete(e),D.delete(a),D.delete(s),D.delete(t)},X=async(r,e="")=>{try{let a=(r||"").toString().replace(/\D/g,"");if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),!a||a.length<9)return null;let s=[];try{const m=localStorage.getItem("freshmart_my_orders");m&&(s=JSON.parse(m)||[])}catch{}if(!s.length)return null;let t=0;const n=s.find(m=>m.finalMemberPoints!==void 0&&m.finalMemberPoints!==null);if(n?t=Math.max(0,parseFloat(n.finalMemberPoints)||0):t=s.reduce((m,i)=>m+(parseFloat(i.pointsEarned)||0),0),t<=0)return null;const o=I.collection("freshmart").doc("cms_data").collection("customers").doc(a),l=await o.get();if(!l.exists)return null;const d=e||u&&u.name||l.data().name||"Pelanggan Setia",f={id:a,phone:a,name:d,points:t,updatedAt:new Date().toISOString(),lastOrderAt:new Date().toISOString()};try{await o.set(f,{merge:!0})}catch(m){console.warn("[reconcilePointsFromOrders] Firestore set error:",m)}v(f);try{localStorage.setItem("freshmart_current_member",JSON.stringify(f)),localStorage.setItem("freshmart_member_wa",a)}catch{}return P.set(a,{data:f,timestamp:Date.now()}),document.getElementById("member-modal-body")&&S(),f}catch(a){return console.warn("[reconcilePointsFromOrders] Error:",a),null}},V=(r=0)=>{const e=Math.max(0,parseFloat(r)||0);return e>=1e3?{level:4,name:"PLATINUM VIP",badge:"💎 PLATINUM VIP",icon:"fa-gem",gradient:"from-slate-950 via-zinc-900 to-neutral-950 border-amber-400/40 text-amber-200",cardBg:"linear-gradient(135deg, #090d16 0%, #171f30 45%, #0d1322 75%, #050811 100%)",accentBg:"bg-amber-400/20",accentText:"text-amber-300",accentBorder:"border-amber-400/40",chipBorder:"#f59e0b",foilClass:"gold-foil-text",nextTier:null,ptsNeeded:0,progress:100,perks:["Cashback & Poin Belanja Maksimal (2x Lipat)","Akses Prioritas Antrean Kasir & Pengiriman","Klaim Semua Hadiah Katalog VIP","Layanan Konsultasi Khusus via WhatsApp"]}:e>=500?{level:3,name:"GOLD MEMBER",badge:"🥇 GOLD MEMBER",icon:"fa-crown",gradient:"from-amber-600 via-yellow-600 to-amber-700 border-yellow-300/40 text-yellow-100",cardBg:"linear-gradient(135deg, #78350f 0%, #b45309 35%, #d97706 70%, #92400e 100%)",accentBg:"bg-yellow-400/20",accentText:"text-amber-200",accentBorder:"border-yellow-300/40",chipBorder:"#fde047",foilClass:"gold-foil-text",nextTier:"Platinum VIP",ptsNeeded:1e3-e,progress:Math.min(100,Math.round((e-500)/500*100)),perks:["Diskon & Promo Spesial Member Gold","Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Menarik dari Katalog","Prioritas Penyiapan Pesanan"]}:e>=100?{level:2,name:"SILVER MEMBER",badge:"🥈 SILVER MEMBER",icon:"fa-medal",gradient:"from-slate-700 via-slate-600 to-slate-800 border-slate-300/40 text-slate-100",cardBg:"linear-gradient(135deg, #1e293b 0%, #334155 40%, #475569 70%, #0f172a 100%)",accentBg:"bg-slate-200/20",accentText:"text-slate-100",accentBorder:"border-slate-300/40",chipBorder:"#cbd5e1",foilClass:"silver-foil-text",nextTier:"Gold Member",ptsNeeded:500-e,progress:Math.min(100,Math.round((e-100)/400*100)),perks:["Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Langsung Tanpa Undian","Penawaran Diskon Tertentu"]}:{level:1,name:"BRONZE MEMBER",badge:"🥉 BRONZE MEMBER",icon:"fa-award",gradient:"from-stone-800 via-amber-950 to-stone-900 border-orange-400/30 text-orange-200",cardBg:"linear-gradient(135deg, #381a10 0%, #632917 40%, #7c2d12 70%, #292524 100%)",accentBg:"bg-orange-500/20",accentText:"text-orange-200",accentBorder:"border-orange-400/40",chipBorder:"#fb923c",foilClass:"bronze-foil-text",nextTier:"Silver Member",ptsNeeded:100-e,progress:Math.min(100,Math.round(e/100*100)),perks:["Kumpulkan Poin di Setiap Transaksi Belanja","Akses Penuh ke Katalog Hadiah Toko"]}},le=r=>{let e=(r||"").toString().replace(/\D/g,"");for(e.startsWith("62")?e=e.substring(2):e.startsWith("0")&&(e=e.substring(1));e.length<8;)e+="0";const a=[];for(let s=0;s<e.length&&a.length<3;s+=4)a.push(e.substring(s,s+4));return`PUTRI • ${a.join(" • ")}`},de=r=>{const e=String(r||"812345678901").replace(/\D/g,"");let a="",s=8;a+=`<rect x="${s}" y="3" width="2.5" height="34" fill="#0f172a"/>`,s+=4,a+=`<rect x="${s}" y="3" width="1.5" height="34" fill="#0f172a"/>`,s+=3.5,a+=`<rect x="${s}" y="3" width="3" height="34" fill="#0f172a"/>`,s+=5;for(let t=0;t<e.length;t++){const n=parseInt(e[t],10)||0,o=(n%3+1)*1.3,l=((n+2)%4+1)*1.1,d=(n%2+1)*1.8;a+=`<rect x="${s}" y="3" width="${o}" height="34" fill="#0f172a"/>`,s+=o+d,a+=`<rect x="${s}" y="3" width="${l}" height="34" fill="#0f172a"/>`,s+=l+2}return a+=`<rect x="${s}" y="3" width="3" height="34" fill="#0f172a"/>`,s+=5,a+=`<rect x="${s}" y="3" width="1.5" height="34" fill="#0f172a"/>`,s+=3.5,a+=`<rect x="${s}" y="3" width="2.5" height="34" fill="#0f172a"/>`,s+=4,`
    <svg class="w-full h-11 bg-white rounded-lg px-2 py-1 shadow-inner border border-slate-200" viewBox="0 0 ${Math.max(s+10,240)} 40" xmlns="http://www.w3.org/2000/svg">
        ${a}
    </svg>`},ae=r=>{const e=parseFloat(r?.points)||0,a=V(e),s=(y.store?.name||"Toko Putri").toUpperCase(),t=y.store?.logo&&y.store.logo!=="fa-store"?y.store.logo:Re,n=(r?.name||"PELANGGAN SETIA").toUpperCase(),o=(r?.phone||"81234567890").toString().replace(/\D/g,""),l=le(o),d=y.store?.wa||o;return`
    <div class="member-card-scene w-full max-w-[390px] mx-auto select-none my-1">
        <div id="member-card-inner" class="member-card-inner relative w-full aspect-[1.586/1] cursor-pointer rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10" onclick="flipMemberCard()" title="Klik untuk membalik kartu">
            
            <!-- ================= SISI DEPAN (FRONT CARD) ================= -->
            <div id="member-card-front-export" class="member-card-front rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-5 flex flex-col justify-between text-white border border-white/20" style="background: ${a.cardBg};">
                
                <!-- Ambient luxury light reflections (clean subtle overlay, zero blur spilling) -->
                <div class="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/15 pointer-events-none"></div>

                <!-- Header Kartu: Logo Toko, Nama Toko, & Gelombang Contactless -->
                <div class="relative z-10 flex items-center justify-between">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <div class="w-8 h-8 rounded-xl bg-white/95 p-1 flex items-center justify-center shadow-2xs shrink-0 border border-white/40">
                            <img src="${x(t)}" alt="Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <i class="fa-solid fa-store text-slate-800 text-xs hidden"></i>
                        </div>
                        <div class="min-w-0">
                            <h4 class="text-[11px] sm:text-xs font-black tracking-wider text-white uppercase truncate">${x(s)}</h4>
                            <p class="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] text-white/80 uppercase">VIP Loyalty Pass</p>
                        </div>
                    </div>
                    <!-- Contactless NFC & Tier Pill -->
                    <div class="flex items-center gap-2 shrink-0">
                        <span class="text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${a.accentBg} ${a.accentText} border ${a.accentBorder}">
                            ${a.badge}
                        </span>
                        <div class="opacity-80 flex items-center" title="Contactless Member">
                            <svg class="w-4 h-4 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                                <path d="M8.5 16.5a5 5 0 0 1 0-7"/>
                                <path d="M12 19a8.5 8.5 0 0 1 0-12"/>
                                <path d="M15.5 21.5a12 12 0 0 1 0-17"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Bagian Tengah: Smart Chip EMV Emas & Hologram Seal -->
                <div class="relative z-10 flex items-center justify-between my-auto py-1">
                    <!-- EMV Smart Chip (SVG) -->
                    <div class="flex items-center gap-3">
                        <svg class="w-11 h-8 rounded-md border border-amber-300/60 bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600 p-0.5 shrink-0" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="48" height="38" rx="5" fill="url(#chipGrad)" stroke="#b45309" stroke-width="0.8"/>
                            <path d="M1 13H18M1 27H18M32 13H49M32 27H49M18 1V39M32 1V39M18 20H32" stroke="#78350f" stroke-width="1" stroke-linecap="round"/>
                            <rect x="21" y="14" width="8" height="12" rx="2" fill="#d97706" stroke="#78350f" stroke-width="0.8"/>
                            <defs>
                                <linearGradient id="chipGrad" x1="0" y1="0" x2="50" y2="40" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#fef08a"/>
                                    <stop offset="0.5" stop-color="#f59e0b"/>
                                    <stop offset="1" stop-color="#b45309"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div class="w-7 h-7 rounded-full card-hologram-seal opacity-75 border border-white/30 hidden sm:block" title="Security Seal"></div>
                    </div>
                    <!-- Poin Saldo Member -->
                    <div class="text-right">
                        <p class="text-[8px] sm:text-[9px] font-bold tracking-widest text-white/70 uppercase">Saldo Poin</p>
                        <div class="flex items-center justify-end gap-1.5 mt-0.5">
                            <i class="fa-solid fa-star text-amber-300 text-xs sm:text-sm animate-pulse"></i>
                            <span class="text-base sm:text-xl font-black tracking-tight text-white">${e}</span>
                            <span class="text-[9px] font-bold text-white/80">PTS</span>
                        </div>
                        ${u&&(u.paylaterActive===!0||u.paylaterActive==="true")&&(parseFloat(u.paylaterLimit)||0)>0?`
                        <div class="mt-1 flex items-center justify-end gap-1 text-[8px] font-black text-emerald-300 uppercase tracking-wider">
                            <i class="fa-solid fa-bolt text-amber-300 text-[7px]"></i> PayLater: ${g(Math.max(0,(parseFloat(u.paylaterLimit)||0)-Math.max(0,parseFloat(u.paylaterUsed)||0)))}
                        </div>`:""}
                    </div>
                </div>

                <!-- Bagian Bawah: Nomor Kartu & Nama Pelanggan Embossed -->
                <div class="relative z-10">
                    <p class="text-[11px] sm:text-[13px] embossed-text text-white/95 font-mono tracking-[0.18em] mb-1.5">${x(l)}</p>
                    <div class="flex items-end justify-between gap-2">
                        <div class="min-w-0 flex-1">
                            <p class="text-[7px] sm:text-[8px] font-bold tracking-widest text-white/70 uppercase leading-none mb-0.5">Nama Pelanggan</p>
                            <p class="text-[11px] sm:text-[13px] font-bold text-white tracking-wider truncate uppercase">${x(n)}</p>
                        </div>
                        <div class="text-right shrink-0">
                            <p class="text-[7px] sm:text-[8px] font-bold tracking-widest text-white/70 uppercase leading-none mb-0.5">Status Member</p>
                            <p class="text-[9px] sm:text-[10px] font-extrabold text-emerald-300 tracking-wider flex items-center justify-end gap-1">
                                <i class="fa-solid fa-circle-check text-[8px]"></i> AKTIF
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Petunjuk Balik Kartu -->
                <div class="absolute bottom-1 right-3 text-[7px] text-white/40 tracking-wider font-semibold pointer-events-none flex items-center gap-1">
                    <i class="fa-solid fa-repeat text-[6px]"></i> Klik untuk balik
                </div>
            </div>

            <!-- ================= SISI BELAKANG (BACK CARD) ================= -->
            <div class="member-card-back rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between text-slate-800 border border-slate-700/60 bg-[#0f172a]">
                
                <!-- Pita Magnetik Hitam (Magnetic Stripe) -->
                <div class="w-full h-8 sm:h-10 bg-slate-950 mt-4 border-y border-white/10 relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                </div>

                <!-- Signature Strip & Keamanan -->
                <div class="px-4 sm:px-5 py-1">
                    <div class="flex items-center gap-2">
                        <div class="flex-1 h-6 bg-white/90 rounded border border-slate-300 px-2 flex items-center justify-between">
                            <span class="text-[9px] font-mono font-bold text-slate-500 italic truncate">${x(n)}</span>
                            <span class="text-[8px] font-mono font-black text-slate-800 tracking-widest">VERIFIED</span>
                        </div>
                        <div class="w-10 h-6 bg-amber-400 text-slate-950 font-black text-[9px] rounded flex items-center justify-center tracking-widest">
                            VIP
                        </div>
                    </div>

                    <!-- Barcode untuk Scanner Kasir Toko -->
                    <div class="mt-2 text-center">
                        <p class="text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                            <i class="fa-solid fa-barcode text-[var(--color-primary)]"></i> Scan Barcode di Kasir POS Toko:
                        </p>
                        ${de(o)}
                        <p class="text-[9px] font-mono font-bold tracking-[0.2em] text-slate-300 mt-1">*${x(o)}*</p>
                    </div>
                </div>

                <!-- Footer Sisi Belakang: Kontak & Info -->
                <div class="p-3 sm:p-4 bg-slate-950/80 border-t border-white/10 text-center">
                    <p class="text-[7.5px] sm:text-[8px] text-slate-400 leading-tight">
                        Kartu member digital resmi <b class="text-white">${x(s)}</b>. Tunjukkan saat transaksi untuk poin belanja.
                    </p>
                    <p class="text-[8px] font-bold text-emerald-400 mt-0.5">
                        <i class="fa-brands fa-whatsapp mr-1"></i>CS: +${x(d)}
                    </p>
                </div>
            </div>

        </div>
    </div>`},De=()=>{const r=document.getElementById("member-card-inner");r&&(r.classList.toggle("is-flipped"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),typeof window.playNativeSound=="function"&&window.playNativeSound("tick"))},Ee=async()=>{const r=document.getElementById("member-card-inner");r&&r.classList.contains("is-flipped")&&(r.classList.remove("is-flipped"),await new Promise(a=>setTimeout(a,450)));const e=document.getElementById("member-card-front-export");if(e){typeof window.showToast=="function"&&window.showToast("Menyiapkan file gambar Kartu Member HD...");try{if(typeof window.ensureScriptLoaded=="function"&&await window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),typeof html2canvas>"u")throw new Error("Modul html2canvas belum siap dimuat.");const a=await html2canvas(e,{scale:3,useCORS:!0,allowTaint:!0,backgroundColor:null}),t=`Kartu_Member_TokoPutri_${(u?.name||"Pelanggan").replace(/[^a-zA-Z0-9]/g,"_")}.png`,n=a.toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(n,t,"image/png");else{const o=document.createElement("a");o.download=t,o.href=n,document.body.appendChild(o),o.click(),document.body.removeChild(o)}typeof window.showToast=="function"&&window.showToast("Kartu Member Berhasil Disimpan ke Galeri! 🎉")}catch(a){console.error("Gagal menyimpan kartu member:",a),typeof window.showToast=="function"&&window.showToast("Gagal menyimpan kartu. Silakan coba kembali.")}}},Le=()=>{const r=b("reward-catalog-container");if(!r)return;const e=y.store.showRewardCatalog!==!1&&y.store.showRewardCatalog!=="false";e&&typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();const a=(y.rewards||[]).filter(t=>t.isActive!=="false"&&t.isActive!==!1);if(!e||a.length===0){r.classList.add("hidden"),r.innerHTML="";return}r.classList.remove("hidden");let s=`
    <div class="bento-island-card rounded-2xl p-3.5 sm:p-4 md:p-4.5 shadow-xs transition-all duration-300 hover:shadow-sm">
        <div class="mb-3 flex items-center justify-between border-b border-[rgba(var(--color-primary-rgb),0.12)] pb-2.5 dark:border-slate-700/50">
            <div class="flex items-center gap-2.5">
                <div class="flex h-7 w-7 items-center justify-center rounded-lg text-white shadow-2xs"
                     style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%);">
                    <i class="fa-solid fa-gift text-xs"></i>
                </div>
                <h3 class="text-xs font-extrabold uppercase tracking-tight text-slate-800 dark:text-white sm:text-sm">KATALOG REWARD POIN</h3>
            </div>
            <button type="button" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Gunakan poin Anda untuk menukar hadiah menarik!');" 
                    class="rounded-lg border border-[rgba(var(--color-primary-rgb),0.2)] bg-[rgba(var(--color-primary-rgb),0.08)] px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)] shadow-2xs transition-all hover:bg-[var(--color-primary)] hover:text-white active:scale-95 flex items-center gap-1 cursor-pointer">
                Lihat Kartu VIP <i class="fa-solid fa-chevron-right text-[8px]"></i>
            </button>
        </div>
        <div class="flex gap-2.5 sm:gap-3.5 overflow-x-auto hide-scrollbar snap-x pb-1 pt-1 md:flex-wrap md:overflow-visible">
            ${a.map(t=>`
                <div class="w-[130px] sm:w-[145px] shrink-0 snap-start md:shrink md:flex-1 md:min-w-[150px] md:max-w-[260px] relative group cursor-pointer active:scale-95 transition-all duration-200" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Tukarkan hadiah ini saat checkout menggunakan poin belanja Anda!');">
                    <div class="w-full h-full bg-slate-50/80 dark:bg-slate-900/60 rounded-2xl shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden border border-[rgba(var(--color-primary-rgb),0.15)] dark:border-slate-700/80 p-2 sm:p-2.5 text-slate-800 dark:text-slate-100">
                        <!-- Badges Row -->
                        <div class="flex items-center justify-between gap-1 mb-1.5">
                            <span class="text-white text-[7.5px] sm:text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs flex items-center gap-1"
                                  style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%);">
                                <i class="fa-solid fa-gift text-[7px]"></i> Gratis
                            </span>
                            <span class="bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-300/40 dark:border-amber-700/50 text-[7.5px] sm:text-[8px] font-black px-1.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                                <i class="fa-solid fa-coins text-amber-500 text-[7px]"></i> ${parseFloat(t.pointsCost||t.pointsRequired)||0} Poin
                            </span>
                        </div>
                        <!-- Reward Image -->
                        <div class="w-full aspect-square rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden relative border border-slate-100 dark:border-slate-700/60 p-2 group-hover:bg-[rgba(var(--color-primary-rgb),0.05)] transition-colors">
                            <img loading="lazy" src="${x(t.img)}" alt="${x(t.name)}" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-108" onerror="this.onerror=null;this.src='https://placehold.co/400?text=Hadiah'">
                        </div>
                        <!-- Details & Action -->
                        <div class="mt-2 flex-1 flex flex-col justify-between">
                            <h4 class="text-[9.5px] sm:text-[10px] font-black text-slate-800 dark:text-white leading-snug line-clamp-2 uppercase tracking-tight text-center drop-shadow-2xs">${x(t.name)}</h4>
                            <div class="mt-2 w-full py-1.5 rounded-xl text-white text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-wider text-center shadow-2xs transition-all flex items-center justify-center gap-1 group-hover:shadow-xs"
                                 style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%);">
                                <i class="fa-solid fa-hand-holding-dollar text-[8px]"></i> Tukar Poin
                            </div>
                        </div>
                    </div>
                </div>`).join("")}
        </div>
    </div>`;r.innerHTML=s};let se=null;const Oe=()=>{clearTimeout(se),se=setTimeout(async()=>{const e=(window.normalizeWA||(n=>(n||"").replace(/\D/g,"").replace(/^0/,"62")))(re("cust-wa")),a=b("member-status-banner");if(!a)return;if(!e||e.length<10){w(a),w("payment-option-tempo"),w("payment-option-paylater"),v(null),K(null);const n=document.querySelector('input[name="payment"][value="tempo"]');if(n&&n.checked){const o=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');o&&(o.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}return}const s=n=>{const o=parseFloat(n.points)||0,l=V(o);a.className="mt-3 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border border-[rgba(var(--color-primary-rgb),0.35)] shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",a.innerHTML=`
                <div class="flex items-center gap-3 relative z-10 min-w-0">
                    <div class="w-12 h-10 rounded-xl bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.35)] flex items-center justify-center shrink-0 shadow-inner">
                        <i class="fa-solid fa-id-card text-xl text-[var(--color-primary)]"></i>
                    </div>
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${l.accentBg} ${l.accentText} border ${l.accentBorder}">${l.badge}</span>
                            <span class="text-[10px] font-bold text-[var(--color-primary)] flex items-center gap-1"><i class="fa-solid fa-coins text-[9px]"></i>${o} Poin</span>
                        </div>
                        <p class="text-xs font-bold text-white mt-0.5 truncate flex items-center gap-1.5">
                            <span>${x(n.name||"Pelanggan")}</span>
                            <span class="text-[9px] font-normal text-slate-400">(Member Resmi)</span>
                        </p>
                    </div>
                </div>
                <button type="button" onclick="openMemberModal()" class="relative z-10 w-full sm:w-auto shrink-0 primary-bg hover:opacity-90 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-2.5 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-wallet"></i> Buka Kartu Member
                </button>`,E(a),E("payment-option-tempo"),n.paylaterActive===!0||n.paylaterActive==="true"?E("payment-option-paylater"):w("payment-option-paylater")},t=P.get(e);if(t&&Date.now()-t.timestamp<Be){if(t.data)v(t.data),s(t.data);else{v(null),K(null),w(a),w("payment-option-tempo"),w("payment-option-paylater");const n=document.querySelector('input[name="payment"][value="tempo"]');if(n&&n.checked){const o=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');o&&(o.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}return}try{const n=await I.collection("freshmart").doc("cms_data").collection("customers").doc(e).get();if(n.exists){const o=n.data();P.set(e,{data:o,timestamp:Date.now()}),v(o),s(o)}else{P.set(e,{data:null,timestamp:Date.now()}),v(null),K(null),w(a),w("payment-option-tempo"),w("payment-option-paylater");const o=document.querySelector('input[name="payment"][value="tempo"]');if(o&&o.checked){const l=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');l&&(l.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}}catch{}},500)},Fe=()=>{if(!u)try{const s=localStorage.getItem("freshmart_current_member");if(s){const t=JSON.parse(s);t&&(t.id||t.phone||t.name)&&v(t)}}catch{}const r=u?.phone||u?.id||localStorage.getItem("freshmart_member_wa");if(r){let s=r.toString().replace(/\D/g,"");s.startsWith("0")?s="62"+s.substring(1):s.startsWith("62")||(s="62"+s),I.collection("freshmart").doc("cms_data").collection("customers").doc(s).get().then(async t=>{if(t.exists){let n=t.data();if(parseFloat(n.paylaterUsed)<0&&(n.paylaterUsed=0),(parseFloat(n.points)||0)===0){const l=await X(s,n.name);l&&(n=l)}P.set(s,{data:n,timestamp:Date.now()}),v(n);try{localStorage.setItem("freshmart_current_member",JSON.stringify(n)),localStorage.setItem("freshmart_member_wa",s)}catch{}document.getElementById("member-modal-body")&&S()}else{P.set(s,{data:null,timestamp:Date.now()}),v(null);try{localStorage.removeItem("freshmart_current_member"),localStorage.removeItem("freshmart_member_wa")}catch{}document.getElementById("member-modal-body")&&S()}}).catch(()=>{})}typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();let e=document.getElementById("member-modal");e||(e=document.createElement("div"),e.id="member-modal",e.className="fixed inset-0 z-[115] bg-slate-900/75 flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=s=>{s.target===e&&me()},document.body.appendChild(e));const a=e.style.display!=="none"&&e.style.opacity==="1";e.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <!-- Header Modal -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-white dark:bg-slate-900">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl primary-bg flex items-center justify-center text-white shadow-sm shadow-[rgba(var(--color-primary-rgb),0.25)]">
                        <i class="fa-solid fa-id-card text-xs"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-slate-800 dark:text-white text-sm sm:text-base leading-tight">Kartu Member Digital</h3>
                        <p class="text-[9px] sm:text-[10px] font-semibold text-slate-400">Loyalty Pass &amp; Poin Hadiah Toko Putri</p>
                    </div>
                </div>
                <button onclick="closeMemberModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <!-- Body Modal -->
            <div class="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5" id="member-modal-body"></div>
        </div>`,S(),e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"}),!a&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("member")},ce=async(r,e=!1)=>{try{let a=(r||"").toString().replace(/\D/g,"");if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),!a||a.length<9)return[];const s=a,t=D.get(s);if(!e&&t&&Date.now()-t.timestamp<Ne)return t.data;const n=new Set([a,a.startsWith("62")?"0"+a.substring(2):a,a.startsWith("62")?a.substring(2):a]);let o=[];try{const i=localStorage.getItem("freshmart_my_orders");i&&(o=JSON.parse(i)||[])}catch{}let l=[];const d=i=>!!i&&(i.code==="permission-denied"||/insufficient permissions/i.test(i.message||""));if(!!(te&&te.currentUser))for(const i of["customerPhone","phone"])try{const p=await I.collection("freshmart_orders").where(i,"in",Array.from(n).slice(0,10)).limit(50).get();if(p&&!p.empty){l=p.docs.map(c=>({id:c.id,...c.data()}));break}}catch(p){if(d(p))break;console.warn(`[getMemberPointsHistory] Query ${i} gagal:`,p)}if(!l.length&&o.length){const i=[...new Set(o.filter(c=>c&&c.id).map(c=>String(c.id)))].slice(0,20);(await Promise.allSettled(i.map(c=>I.collection("freshmart_orders").doc(c).get()))).forEach(c=>{c.status==="fulfilled"&&c.value&&c.value.exists?l.push({id:c.value.id,...c.value.data()}):c.status==="rejected"&&!d(c.reason)&&console.warn("[getMemberPointsHistory] Gagal memuat pesanan:",c.reason)})}const h=new Map;[...l,...o].forEach(i=>{if(i&&i.id){const p=(i.customerPhone||i.phone||i.customer&&i.customer.phone||"").toString().replace(/\D/g,"");(n.has(p)||!p)&&h.set(i.id,i)}});const m=[];return h.forEach(i=>{const p=i.createdAt||i.date||i.timestamp||i.dateString;let c=new Date;p&&(typeof p.toDate=="function"?c=p.toDate():typeof p=="number"||!isNaN(Number(p))?c=new Date(Number(p)):c=new Date(p));const A=isNaN(c.getTime())?"-":c.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),M=isNaN(c.getTime())?0:c.getTime(),T=i.source==="pos",B=parseFloat(i.pointsEarned)||0;B>0&&m.push({id:`${i.id}-earn`,orderId:i.id,timestamp:M,dateStr:A,type:"earn",title:`Poin Belanja (${T?"Kasir POS":"Belanja Online"})`,desc:`Faktur #${i.id} • Total Belanja ${g(i.total||i.payment?.grandTotal||0)}`,points:B,sign:"+",colorClass:"text-emerald-500 dark:text-emerald-400",bgClass:"bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",icon:"fa-coins"});const N=parseFloat(i.pointDiscount||i.payment?.pointDiscount)||0,R=parseFloat(i.pointsRedeemed)||0;if(N>0||R>0&&!i.claimedReward){const H=R>0?R:Math.round(N/1e3);m.push({id:`${i.id}-discount`,orderId:i.id,timestamp:M+1,dateStr:A,type:"discount",title:"Diskon Poin di Kasir POS",desc:`Potongan belanja tunai -${g(N||H*1e3)} • #${i.id}`,points:H,sign:"-",colorClass:"text-rose-500 dark:text-rose-400",bgClass:"bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400",icon:"fa-percent"})}if(i.claimedReward&&(i.claimedReward.name||i.claimedReward.id)){const H=parseFloat(i.claimedReward.pointsCost)||0,ue=i.claimedReward.status==="ready"?"Tersedia / Diterima":i.claimedReward.status==="waiting_stock"?"Menunggu Stok Toko":"Sedang Diproses Toko";m.push({id:`${i.id}-reward`,orderId:i.id,timestamp:M+2,dateStr:A,type:"reward",title:`Tukar Hadiah: ${i.claimedReward.name}`,desc:`Status: ${ue}${i.claimedReward.note?` ("${i.claimedReward.note}")`:""} • #${i.id}`,points:H,sign:"-",colorClass:"text-amber-500 dark:text-amber-400",bgClass:"bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400",icon:"fa-gift"})}}),m.sort((i,p)=>p.timestamp-i.timestamp),D.set(s,{data:m,timestamp:Date.now()}),m}catch(a){return console.warn("[getMemberPointsHistory] Error:",a),[]}},pe=async(r,e=!1)=>{const a=document.getElementById("member-points-history-list");if(!a)return;e&&(a.innerHTML=`
            <div class="p-4 text-center text-slate-400 text-xs font-semibold">
                <i class="fa-solid fa-circle-notch fa-spin mr-1.5 text-[var(--color-primary)]"></i> Memperbarui riwayat poin...
            </div>
        `);const s=await ce(r,e);if(a){if(!s||!s.length){a.innerHTML=`
            <div class="p-4 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-center space-y-1.5 bg-slate-50/50 dark:bg-slate-900/30">
                <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto text-xs">
                    <i class="fa-solid fa-receipt"></i>
                </div>
                <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Belum Ada Riwayat Mutasi Poin</p>
                <p class="text-[10px] text-slate-400 max-w-xs mx-auto">
                    Kumpulkan poin di setiap belanja kasir POS atau pesanan online Toko Putri untuk menikmati diskon &amp; hadiah eksklusif.
                </p>
            </div>
        `;return}a.innerHTML=s.map(t=>`
        <div class="flex items-center gap-3 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 shadow-2xs hover:border-[var(--color-primary)]/40 transition-all">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs shrink-0 border ${t.bgClass}">
                <i class="fa-solid ${t.icon}"></i>
            </div>
            <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${x(t.title)}</p>
                    <span class="text-xs font-black ${t.colorClass} shrink-0">
                        ${t.sign}${t.points} Poin
                    </span>
                </div>
                <p class="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">${x(t.desc)}</p>
                <p class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5 flex items-center gap-1">
                    <i class="fa-regular fa-clock text-[8px]"></i> ${t.dateStr}
                </p>
            </div>
        </div>
    `).join("")}},Ke=r=>{if(!r)return{used:0,tagihanWajibBayar:0,totalPokok:0,totalFee:0,monthlyInstallment:0,tenorLabel:"",hasActiveOrder:!1};const e=Math.max(0,parseFloat(r.paylaterUsed)||0),a=(r.phone||r.id||"").toString().replace(/\D/g,""),s=[];Array.isArray(O)&&O.length&&s.push(...O),Array.isArray(F)&&F.length&&s.push(...F);try{const d=localStorage.getItem("freshmart_my_orders");if(d){const f=JSON.parse(d);Array.isArray(f)&&s.push(...f)}}catch{}const t=new Set,n=s.filter(d=>!d||!d.orderId||t.has(d.orderId)?!1:(t.add(d.orderId),!0)),o=d=>{if(!a)return!0;const f=(d.customer?.phone||d.customer?.wa||"").toString().replace(/\D/g,"");return f&&(f===a||f.endsWith(a)||a.endsWith(f))},l=n.filter(d=>{if(!!!(d.payment?.isPaylater||d.isPaylater||d.payment?.subMethod==="paylater")||d.status==="Batal"||d.payment?.paymentStatus==="lunas")return!1;const h=parseFloat(d.payment?.tempoBalance);return!(isNaN(h)||h<=0||!o(d))});if(l.length>0){let d=0,f=0,h=0,m=0,i=[];return l.forEach(p=>{const c=parseFloat(p.payment?.tempoBalance)||0,A=parseFloat(p.payment?.paylaterAdminFee)||0,M=parseFloat(p.payment?.paylaterServiceFee)||0,T=A+M,B=parseFloat(p.payment?.paylaterUsed)||Math.max(0,c-T),N=parseFloat(p.payment?.paylaterMonthlyInstallment)||c;d+=c,f+=B,h+=T,m+=N;const R=p.payment?.paylaterTenor==="2m"?"2 Bulan":p.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari";i.includes(R)||i.push(R)}),{used:e>0?e:f,tagihanWajibBayar:d,totalPokok:f>0?f:e,totalFee:h,monthlyInstallment:m>0?m:d,tenorLabel:i.join(", "),activeCount:l.length,hasActiveOrder:!0}}return{used:e,tagihanWajibBayar:e,totalPokok:e,totalFee:0,monthlyInstallment:e,tenorLabel:"",activeCount:0,hasActiveOrder:!1}},S=()=>{const r=(y.rewards||[]).filter(t=>t.isActive!=="false"&&t.isActive!==!1),e=u&&parseFloat(u.points)||0,a=V(e),s=r.length?r.map(t=>{const n=(parseFloat(t.stock)||0)>0,o=u&&e>=(parseFloat(t.pointsCost)||0)&&n,l=_&&_.id===t.id;return`
        <div class="flex items-center gap-3 p-3.5 rounded-2xl border ${l?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-xs":"border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40"} transition-all">
            ${t.img?`<img src="${x(t.img)}" class="w-14 h-14 rounded-xl object-contain bg-white p-1 border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.style.display='none'" loading="lazy">`:'<div class="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 shrink-0"><i class="fa-solid fa-gift text-xl"></i></div>'}
            <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${x(t.name)}</p>
                <p class="text-[11px] font-black text-[var(--color-primary)] mt-0.5 flex items-center gap-1">
                    <i class="fa-solid fa-star text-[10px]"></i> ${parseFloat(t.pointsCost)||0} Poin
                </p>
                ${n?"":'<p class="text-[10px] font-bold text-rose-500 mt-0.5">Stok hadiah habis</p>'}
            </div>
            ${u?l?'<button type="button" onclick="deselectReward()" class="shrink-0 bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-bold uppercase px-3 py-2 rounded-xl active:scale-95 transition-all whitespace-nowrap shadow-xs cursor-pointer">Batal</button>':`<button type="button" ${o?"":"disabled"} onclick="selectReward('${x(String(t.id))}')" class="shrink-0 ${o?"primary-bg hover:opacity-90 text-white active:scale-95 shadow-xs cursor-pointer":"bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"} text-[10px] font-bold uppercase px-3 py-2 rounded-xl transition-all whitespace-nowrap">Pilih Hadiah</button>`:`<span class="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg">${parseFloat(t.pointsCost)||0} Poin</span>`}
        </div>`}).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-3">Belum ada program hadiah yang tersedia.</p>';u?(j("member-modal-body",`
            <!-- KARTU MEMBER DIGITAL (3D INTERAKTIF) -->
            <div>
                ${ae(u)}
                
                <!-- Action Controls: Balik Kartu, Unduh Kartu & Tutup -->
                <div class="flex items-center justify-between gap-2 mt-3 max-w-[390px] mx-auto">
                    <button type="button" onclick="flipMemberCard()" class="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-95 transition-all shadow-2xs cursor-pointer">
                        <i class="fa-solid fa-repeat text-[11px] text-[var(--color-primary)]"></i> Balik Kartu
                    </button>
                    <button type="button" onclick="downloadMemberCard()" class="flex-1 py-2.5 px-3 rounded-xl primary-bg hover:opacity-95 text-white text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm shadow-[rgba(var(--color-primary-rgb),0.25)] cursor-pointer">
                        <i class="fa-solid fa-download text-[11px]"></i> Simpan ke Galeri
                    </button>
                    <button type="button" onclick="closeMemberModal()" class="py-2.5 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer" title="Tutup">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="text-center mt-2">
                    <button type="button" onclick="logoutMember()" class="text-[10px] text-slate-400 hover:text-[var(--color-primary)] font-semibold transition-colors cursor-pointer">
                        <i class="fa-solid fa-user-pen mr-1"></i>Bukan Anda? Cek nomor WhatsApp lain
                    </button>
                </div>
            </div>

            <!-- TIER STATUS & PROGRESS LEVEL -->
            <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-3">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Level Keanggotaan</p>
                        <h4 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white flex items-center gap-1.5 mt-0.5">
                            <i class="fa-solid ${a.icon} text-[var(--color-primary)]"></i> ${a.name}
                        </h4>
                    </div>
                    <div class="text-right">
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Total Saldo</p>
                        <p class="text-xs sm:text-sm font-black text-[var(--color-primary)] mt-0.5 flex items-center justify-end gap-1"><i class="fa-solid fa-coins text-[11px]"></i> ${e} Poin</p>
                    </div>
                </div>

                ${a.nextTier?`
                <div class="space-y-1.5 pt-1">
                    <div class="flex justify-between text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                        <span>Menuju <b>${a.nextTier}</b></span>
                        <span class="font-bold text-[var(--color-primary)]">${a.progress}%</span>
                    </div>
                    <div class="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <div class="h-full rounded-full primary-bg transition-all duration-500" style="width: ${a.progress}%"></div>
                    </div>
                    <p class="text-[9px] text-slate-500 dark:text-slate-400 font-medium">
                        Kumpulkan <b>${a.ptsNeeded} poin lagi</b> untuk otomatis naik tingkat ke <b>${a.nextTier}</b>!
                    </p>
                </div>`:`
                <p class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <i class="fa-solid fa-crown"></i> Anda telah mencapai level member tertinggi Toko Putri!
                </p>`}

                <!-- Member Privileges Pill -->
                <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Hak Istimewa Member Anda:</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        ${a.perks.map(t=>`
                        <div class="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid fa-check text-emerald-500 text-[9px] shrink-0"></i>
                            <span class="truncate">${x(t)}</span>
                        </div>`).join("")}
                    </div>
                </div>
            </div>

            <!-- PUTRI PAYLATER DIGITAL CREDIT LIMIT -->
            ${(()=>{const t=Math.max(0,parseFloat(u.paylaterLimit)||0),n=Ke(u),o=n.used,l=u.paylaterActive===!0||u.paylaterActive==="true",d=Math.max(0,t-o),f=t>0?Math.min(100,Math.max(0,Math.round(o/t*100))):0,h=u.paylaterDueDay||5;if(!l||t<=0)return`
                    <div class="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-slate-100/60 dark:from-slate-900/60 dark:to-slate-800/40 relative overflow-hidden">
                        <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2.5">
                                <div class="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20 shrink-0">
                                    <i class="fa-solid fa-bolt text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                                        Putri PayLater <span class="px-1.5 py-0.5 rounded text-[8px] font-black uppercase bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Belum Aktif</span>
                                    </h4>
                                    <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Belanja sekarang, bayar bulan depan (Limit Kredit Member VIP).</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-2.5 pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                            <span class="text-[10px] text-slate-400 font-semibold">Plafon limit hingga Rp 5.000.000</span>
                            <a href="https://wa.me/${(y.store?.wa||"").replace(/\D/g,"")}?text=Halo%20Admin%20Toko%20Putri,%20saya%20ingin%20mengajukan%20aktivasi%20fitur%20Putri%20PayLater%20untuk%20nomor%20${u.phone||""}" target="_blank" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline flex items-center gap-1">Ajukan Aktivasi <i class="fa-solid fa-arrow-right text-[8px]"></i></a>
                        </div>
                    </div>`;const m=n.monthlyInstallment>0&&n.monthlyInstallment<n.tagihanWajibBayar?n.monthlyInstallment:n.tagihanWajibBayar>0?n.tagihanWajibBayar:o;return`
                <div class="p-4 sm:p-5 rounded-2xl border border-emerald-500/30 dark:border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 dark:from-emerald-950/20 dark:to-slate-900 shadow-sm relative overflow-hidden space-y-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                                <i class="fa-solid fa-bolt text-xs"></i>
                            </div>
                            <div>
                                <div class="flex items-center gap-1.5">
                                    <span class="text-xs font-black text-slate-900 dark:text-white">Putri PayLater</span>
                                    <span class="px-1.5 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">Aktif</span>
                                </div>
                                <p class="text-[9px] text-slate-400 font-semibold">Limit Kredit Eksklusif Member Toko</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Sisa Limit Tersedia</p>
                            <p class="text-sm font-black text-emerald-600 dark:text-emerald-400 font-mono">${g(d)}</p>
                        </div>
                    </div>

                    <!-- Progress Bar Penggunaan Limit -->
                    <div class="space-y-1.5 pt-0.5">
                        <div class="flex justify-between text-[10px] font-bold text-slate-500 dark:text-slate-400">
                            <span>Terpakai: <b class="font-mono text-slate-800 dark:text-slate-200">${g(o)}</b> (${f}%)</span>
                            <span>Total Plafon: <b class="font-mono text-slate-800 dark:text-slate-200">${g(t)}</b></span>
                        </div>
                        <div class="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden p-0.5">
                            <div class="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500" style="width: ${f}%"></div>
                        </div>
                    </div>

                    <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <i class="fa-regular fa-calendar-check text-emerald-500"></i> Jatuh Tempo: <b>Tgl ${h} Bulan Depan</b>
                        </span>
                        <span class="text-emerald-600 dark:text-emerald-400 font-bold">1-Klik Checkout Siap Pakai</span>
                    </div>

                    ${n.tagihanWajibBayar>0||o>0?`
                        <div class="pt-2.5 border-t border-dashed border-slate-200 dark:border-slate-700 space-y-2.5">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div class="min-w-0">
                                    <p class="text-[9px] text-slate-400 uppercase font-black tracking-wider flex items-center gap-1">
                                        <i class="fa-solid fa-file-invoice-dollar text-emerald-500"></i> Tagihan Berjalan (Wajib Bayar)
                                    </p>
                                    <div class="flex items-baseline gap-1.5 mt-0.5 flex-wrap">
                                        <p class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 font-mono">${g(n.tagihanWajibBayar)}</p>
                                        ${n.monthlyInstallment>0&&n.monthlyInstallment<n.tagihanWajibBayar?`
                                            <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 font-mono">(${g(n.monthlyInstallment)}/bln)</span>
                                        `:""}
                                    </div>
                                    ${n.totalFee>0?`
                                        <p class="text-[9px] text-slate-400 font-medium mt-0.5">
                                            Pokok: <span class="font-mono text-slate-600 dark:text-slate-300 font-bold">${g(n.totalPokok)}</span> + Biaya Tenor: <span class="font-mono text-emerald-600 dark:text-emerald-400 font-bold">+${g(n.totalFee)}</span>
                                        </p>
                                    `:""}
                                </div>
                                <div class="flex items-center gap-2">
                                    <button type="button" onclick="if(typeof window.openClientPaymentModal==='function') window.openClientPaymentModal('', ${m}); else if(typeof openClientPaymentModal==='function') openClientPaymentModal('', ${m});" class="flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-95 cursor-pointer">
                                        <i class="fa-solid fa-qrcode text-xs"></i> Bayar Bank / QRIS
                                    </button>
                                    <a href="https://wa.me/${(y.store?.wa||"").replace(/\D/g,"")}?text=Halo%20Admin%20Toko%20Putri,%20saya%20ingin%20melakukan%20pembayaran%20tagihan%20Putri%20PayLater%20sebesar%20${encodeURIComponent(g(m))}%20untuk%20nomor%20${u.phone||""}" target="_blank" class="p-2.5 rounded-xl text-slate-500 hover:text-emerald-600 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center active:scale-95 transition-all shadow-2xs" title="Konfirmasi via WhatsApp">
                                        <i class="fa-brands fa-whatsapp text-sm text-emerald-500"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    `:""}
                </div>`})()}

            <!-- TABEL RINCIAN JADWAL ANGSURAN & TAGIHAN BERJALAN PELANGGAN -->
            ${(()=>{const t=typeof W=="function"?W():typeof window.getMemberActiveTempoOrders=="function"?window.getMemberActiveTempoOrders():[];if(!t||t.length===0)return"";let n=[];try{const l=localStorage.getItem("freshmart_pending_confirmations");l&&(n=JSON.parse(l)||[])}catch{}const o=typeof z=="function"?z:window.renderClientInstallmentSchedule;return typeof o!="function"?"":`
                <div class="space-y-3">
                    <div class="flex items-center justify-between">
                        <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                            <i class="fa-solid fa-list-check text-emerald-500"></i> Jadwal Angsuran &amp; Cicilan Anda
                        </p>
                        <span class="text-[10px] font-bold text-[var(--color-primary)]">${t.length} Tagihan Aktif</span>
                    </div>
                    ${t.map(l=>o(l,n)).join("")}
                </div>`})()}

            <!-- KATALOG REWARD / PENUKARAN HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${s}</div>
            </div>

            ${_?`<div class="bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[var(--color-primary)]/30 rounded-xl p-3.5 text-[11px] font-bold text-[var(--color-primary)] flex items-center gap-2"><i class="fa-solid fa-gift text-base shrink-0"></i><span>Hadiah "<b>${x(_.name)}</b>" telah dipilih dan akan otomatis diproses saat pesanan Anda selesai di checkout.</span></div>`:""}

            <!-- RIWAYAT MUTASI POIN & HADIAH (POINT LEDGER) -->
            <div class="space-y-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                <div class="flex items-center justify-between">
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Riwayat Mutasi Poin &amp; Hadiah</p>
                    <button type="button" onclick="loadMemberPointsHistory('${x(u.phone||u.id||"")}', true)" class="text-[10px] text-[var(--color-primary)] font-bold hover:underline cursor-pointer flex items-center gap-1 active:scale-95 transition-all">
                        <i class="fa-solid fa-arrows-rotate text-[9px]"></i> Refresh
                    </button>
                </div>
                <div id="member-points-history-list" class="space-y-2">
                    <div class="p-4 text-center text-slate-400 text-xs font-semibold">
                        <i class="fa-solid fa-circle-notch fa-spin mr-1.5 text-[var(--color-primary)]"></i> Memuat riwayat poin...
                    </div>
                </div>
            </div>
        `),setTimeout(()=>{u&&pe(u.phone||u.id)},50)):j("member-modal-body",`
            <!-- PREVIEW KARTU CONTOH (MEMIKAT PELANGGAN) -->
            <div class="opacity-95">
                ${ae({name:"CONTOH: PELANGGAN VIP",phone:"81234567890",points:500})}
            </div>

            <!-- FORM PENCARIAN / CEK KARTU MEMBER -->
            <div class="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-3">
                <div class="flex items-center gap-2 text-slate-800 dark:text-white font-bold text-xs sm:text-sm">
                    <div class="w-7 h-7 rounded-xl primary-bg text-white flex items-center justify-center text-xs shrink-0 shadow-2xs">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <span>Cek Kartu Member &amp; Saldo Poin Anda</span>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    Masukkan nomor WhatsApp yang pernah Anda gunakan saat berbelanja di Toko Putri:
                </p>
                <div class="flex gap-2">
                    <div class="relative flex-1">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">+62</span>
                        <input type="tel" id="member-lookup-input" class="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-3 text-xs font-bold text-slate-800 outline-none focus:border-[var(--color-primary)] dark:border-slate-700 dark:bg-slate-900 dark:text-white" placeholder="81234567890" inputmode="numeric" />
                    </div>
                    <button type="button" onclick="lookupMemberPoints()" class="primary-bg text-white px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 transition-all active:scale-95 shadow-sm cursor-pointer">
                        Cek Kartu
                    </button>
                </div>
                <div id="member-lookup-result" class="hidden text-xs font-bold mt-2"></div>
            </div>

            <!-- KEUNTUNGAN MENJADI MEMBER -->
            <div class="p-4 rounded-2xl border border-[rgba(var(--color-primary-rgb),0.25)] bg-[rgba(var(--color-primary-rgb),0.05)] dark:bg-[rgba(var(--color-primary-rgb),0.1)] text-xs space-y-2">
                <h4 class="font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                    <i class="fa-solid fa-sparkles text-[var(--color-primary)]"></i> Keuntungan Menjadi Member Toko Putri:
                </h4>
                <ul class="text-[11px] text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-4">
                    <li>Otomatis terdaftar menjadi member pada pesanan pertama Anda.</li>
                    <li>Kumpulkan poin di setiap transaksi belanja untuk ditukar hadiah gratis.</li>
                    <li>Mendapatkan kartu digital eksklusif yang bisa disimpan di galeri ponsel.</li>
                </ul>
            </div>

            <!-- KATALOG HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${s}</div>
            </div>
        `)},He=async()=>{const r=document.getElementById("member-lookup-input"),e=document.getElementById("member-lookup-result");if(!r||!e)return;let a=r.value.replace(/\D/g,"");if(!a||a.length<9){e.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",e.textContent="Masukkan minimal 9 digit nomor WhatsApp!",e.classList.remove("hidden");return}a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),e.className="text-xs font-bold text-[var(--color-primary)] p-2.5 primary-bg-soft rounded-xl",e.textContent="Memuat data kartu member...",e.classList.remove("hidden");try{const s=await I.collection("freshmart").doc("cms_data").collection("customers").doc(a).get();if(s.exists){let t=s.data();if((parseFloat(t.points)||0)===0){const n=await X(a,t.name);n&&(t=n)}P.set(a,{data:t,timestamp:Date.now()}),v(t);try{localStorage.setItem("freshmart_current_member",JSON.stringify(t)),localStorage.setItem("freshmart_member_wa",a)}catch{}S(),typeof window.showToast=="function"&&window.showToast(`Selamat datang kembali, ${t.name||"Pelanggan"}! 💳`)}else{e.className="text-xs font-bold text-amber-700 dark:text-amber-300 p-3.5 bg-amber-50 dark:bg-amber-900/20 rounded-xl leading-relaxed border border-amber-200 dark:border-amber-800/40 space-y-1.5";const t=(y.store&&y.store.wa||"").replace(/\D/g,""),n=t?`https://wa.me/${t}?text=Halo%20Admin%20Toko%20Putri,%20saya%20ingin%20mendaftarkan%20nomor%20saya%20(${a})%20sebagai%20Member%20Resmi.`:"#";e.innerHTML=`
                <div class="flex items-center gap-1.5 text-amber-800 dark:text-amber-200 font-extrabold text-[11px]">
                    <i class="fa-solid fa-circle-info text-amber-500"></i>
                    <span>Nomor Belum Terdaftar sebagai Member Resmi</span>
                </div>
                <p class="text-[11px] font-medium text-slate-600 dark:text-slate-300 leading-normal">
                    Nomor <b>+${x(a)}</b> saat ini tercatat sebagai <b>Pelanggan Umum</b>. Fitur Poin Hadiah dan fasilitas pembayaran <b>Cash Tempo</b> hanya dapat digunakan setelah nomor Anda dikonfirmasi & disimpan oleh Admin Toko di database CMS.
                </p>
                ${t?`
                <div class="pt-1">
                    <a href="${n}" target="_blank" class="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                        <i class="fa-brands fa-whatsapp text-emerald-500"></i> Hubungi Admin untuk Pendaftaran Member
                    </a>
                </div>`:""}
            `}}catch{e.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",e.textContent="Gagal mengecek data. Silakan periksa koneksi internet Anda."}},_e=r=>{const e=(y.rewards||[]).find(s=>s.id===r);if(!e)return;if((parseFloat(u?.points)||0)<(parseFloat(e.pointsCost)||0)){typeof window.showToast=="function"&&window.showToast("Poin Anda belum cukup untuk hadiah ini!");return}if((parseFloat(e.stock)||0)<=0){typeof window.showToast=="function"&&window.showToast("Maaf, stok hadiah ini sedang kosong!");return}K({id:e.id,name:e.name,pointsCost:parseFloat(e.pointsCost)||0}),S(),typeof window.showToast=="function"&&window.showToast(`Hadiah "${e.name}" dipilih! Lanjutkan checkout untuk menukarnya.`)},Ge=()=>{K(null),S()},me=(r=!1)=>{const e=document.getElementById("member-modal");if(!e||e.style.display==="none")return;const a=()=>{e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250)};typeof window.requestCloseModal=="function"?window.requestCloseModal("member",r,a):a()},Ue=()=>{v(null);try{localStorage.removeItem("freshmart_current_member"),localStorage.removeItem("freshmart_member_wa")}catch{}S()};window.renderRewardCatalog=Le;window.checkMemberStatus=Oe;window.openMemberModal=Fe;window.rMemberModalBody=S;window.lookupMemberPoints=He;window.selectReward=_e;window.deselectReward=Ge;window.closeMemberModal=me;window.flipMemberCard=De;window.downloadMemberCard=Ee;window.getMemberTier=V;window.formatMemberCardNumber=le;window.generateBarcodeSVG=de;window.setCurrentMember=v;window.logoutMember=Ue;window.invalidateMemberCache=je;window.reconcilePointsFromOrders=X;window.getMemberPointsHistory=ce;window.loadMemberPointsHistory=pe;
