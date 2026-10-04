import{e as w,g as ge,a as y,s as G,c as ne,b as _,f as h,d as Me,h as A,i as f,r as ue,j as V,k as E,o as Ie,l as Se,m as he,n as oe,p as b,q as O,t as J,u as q,v as $,w as Q,x as ee,y as xe}from"./module-print-BSCIOr2K.js";const ye=()=>{w("voucher-input");const s=(ge("voucher-input")||"").toUpperCase().trim(),e=(y.vouchers||[]).find(a=>(a.code||"").toUpperCase()===s);G("voucher-msg-container");const t=typeof window.getEffP=="function"?window.getEffP:a=>a.effectivePrice||a.price||0,r=ne.reduce((a,n)=>a+(parseFloat(t(n))||0)*(parseFloat(n.qty)||0),0);if(e){let a=!0;e.targetProduct&&e.targetProduct!==""&&(a=ne.some(n=>n&&String(n.id)===String(e.targetProduct))),e.targetProduct&&e.targetProduct!==""&&!a?(V(null),_("voucher-msg",'<i class="fa-solid fa-box mr-1"></i> Khusus Produk Tertentu!'),w("voucher-msg")&&(w("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):e.minPurchase&&parseFloat(e.minPurchase)>0&&r<parseFloat(e.minPurchase)?(V(null),_("voucher-msg",`<i class="fa-solid fa-circle-exclamation mr-1"></i> Minimal belanja ${h(e.minPurchase)}`),w("voucher-msg")&&(w("voucher-msg").className="text-sm font-bold text-amber-500 dark:text-amber-400")):e.type&&e.type.includes("shipping")&&Me.deliveryMethod!=="delivery"?(V(null),_("voucher-msg",'<i class="fa-solid fa-motorcycle mr-1"></i> Khusus pesanan dikirim kurir!'),w("voucher-msg")&&(w("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):(V(e),_("voucher-msg",'<i class="fa-solid fa-check-circle mr-1"></i> Voucher Diterapkan!'),w("voucher-msg")&&(w("voucher-msg").className="text-sm font-bold text-[var(--color-primary)]"))}else s===""?(V(null),A("voucher-msg-container"),typeof window.rPay=="function"&&window.rPay()):(V(null),_("voucher-msg",'<i class="fa-solid fa-times-circle mr-1"></i> Kode Tidak Valid'),w("voucher-msg")&&(w("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400"));typeof window.rPay=="function"&&window.rPay()},$e=()=>{let s=document.getElementById("voucher-modal");s||(s=document.createElement("div"),s.id="voucher-modal",s.className="fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=r=>{r.target===s&&de()},document.body.appendChild(s));const e=(y.vouchers||[]).filter(r=>r.isShow!==!1&&r.isShow!=="false"),t=e.length?e.map(r=>{let a="";r.type==="percent"?a=`Diskon ${r.value}%`:r.type==="shipping_free"?a="Gratis Ongkir":r.type==="shipping_flat"?a=`Diskon Ongkir ${h(r.value)}`:a=`Potongan ${h(r.value)}`;const n=r.minPurchase&&parseFloat(r.minPurchase)>0?`Min. belanja ${h(r.minPurchase)}`:"Tanpa minimal belanja";return`
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:border-[var(--color-primary)] transition-all shadow-xs">
            <div class="flex items-start gap-3.5 min-w-0">
                <div class="w-11 h-11 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-lg shrink-0 shadow-sm mt-0.5">
                    <i class="fa-solid fa-ticket"></i>
                </div>
                <div class="min-w-0">
                    <div class="flex flex-wrap items-center gap-2 mb-1.5">
                        <span class="font-extrabold text-sm font-mono tracking-wider text-slate-800 dark:text-white bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700 select-all">${f(r.code)}</span>
                        <span class="primary-bg text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase whitespace-nowrap shadow-2xs">${a}</span>
                    </div>
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-[var(--color-primary)] text-xs"></i> ${n}</p>
                </div>
            </div>
            <div class="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-700">
                <button type="button" onclick="copyVoucherCode('${f(r.code)}')" class="flex-1 md:flex-initial bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-2xs">
                    <i class="fa-regular fa-copy"></i> Salin
                </button>
                <button type="button" onclick="useVoucherCode('${f(r.code)}')" class="flex-1 md:flex-initial primary-bg text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm">
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
    `;s.innerHTML=`
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
                ${t}
            </div>
        </div>`,s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("voucher")},Be=s=>{navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(s).then(()=>{typeof window.showToast=="function"&&window.showToast(`✅ Kode "${s}" disalin ke clipboard!`)}).catch(()=>{typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${s}`)}):typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${s}`)},Ne=s=>{de();const e=w("voucher-input");e&&(e.value=s,ye()),ne.length>0?typeof window.changeView=="function"&&window.changeView("view-checkout"):(typeof window.showToast=="function"&&window.showToast(`Kode "${s}" siap digunakan saat checkout belanja!`),typeof window.changeView=="function"&&window.changeView("view-catalog"))},de=(s=!1)=>{const e=()=>{const t=document.getElementById("voucher-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250))};typeof ue=="function"?ue("voucher",s,e):typeof window.requestCloseModal=="function"?window.requestCloseModal("voucher",s,e):e()};window.applyVoucher=ye;window.openVoucherModal=$e;window.closeVoucherModal=de;window.copyVoucherCode=Be;window.useVoucherCode=Ne;let S=null,F="bank",te=null,ae=null,ie=[];const Ce=s=>{if(!s)return;const e=String(s).trim();navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>{E("Nomor rekening "+e+" berhasil disalin!","success")}).catch(()=>{prompt("Salin nomor rekening:",e)}):prompt("Salin nomor rekening:",e)},De=(s,e=700,t=.6)=>new Promise(r=>{if(!s||!s.type.startsWith("image/"))return r(null);const a=new FileReader;a.readAsDataURL(s),a.onload=n=>{const i=new Image;i.onload=()=>{let{width:l,height:c}=i;(l>e||c>e)&&(l>c?(c=Math.round(c*e/l),l=e):(l=Math.round(l*e/c),c=e));const g=document.createElement("canvas");g.width=l,g.height=c,g.getContext("2d").drawImage(i,0,0,l,c);const u=g.toDataURL("image/jpeg",t);r(u)},i.onerror=()=>r(n.target.result),i.src=n.target.result},a.onerror=()=>r(null)}),je=()=>{if(!w("modal-client-tempo-pay")){const e=document.createElement("div");e.id="modal-client-tempo-pay",e.className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/80 transition-opacity duration-300 opacity-0 pointer-events-none",e.onclick=t=>{t.target===e&&ce()},e.innerHTML=`
            <div id="modal-client-tempo-pay-box" class="bg-white dark:bg-slate-900 w-full sm:max-w-lg rounded-t-[2.25rem] sm:rounded-3xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden transform translate-y-full sm:translate-y-6 transition-transform duration-300" onclick="event.stopPropagation()">
                <!-- Isi Modal dirender reaktif oleh openClientPaymentModal() -->
            </div>
        `,document.body.appendChild(e)}},re=()=>{const s=[];Array.isArray(J)&&J.length&&s.push(...J),Array.isArray(q)&&q.length&&s.push(...q);try{const a=localStorage.getItem("freshmart_my_orders");if(a){const n=JSON.parse(a);Array.isArray(n)&&s.push(...n)}}catch{}const e=new Set,t=s.filter(a=>!a||!a.orderId||e.has(a.orderId)?!1:(e.add(a.orderId),!0)),r=(b?.phone||b?.id||"").toString().replace(/\D/g,"");return t.filter(a=>{if(!!!(a.isTempo||a.payment?.isPaylater||a.payment?.subMethod==="paylater"||a.payment?.method==="tempo")||a.status==="Batal"||a.payment?.paymentStatus==="lunas")return!1;const i=parseFloat(a.payment?.tempoBalance);if(isNaN(i)||i<=0)return!1;if(r){const l=(a.customer?.phone||a.customer?.wa||"").toString().replace(/\D/g,"");if(l&&!(l===r||l.endsWith(r)||r.endsWith(l)))return!1}return!0})},Re=async(s=null)=>{try{let e=[];try{const r=localStorage.getItem("freshmart_pending_confirmations");r&&(e=JSON.parse(r)||[])}catch{}const t=(b?.phone||b?.id||"").toString().replace(/\D/g,"");if(t){const r=await O.collection("tempo_payment_confirmations").where("customerPhone","==",t).where("status","==","pending").get();if(!r.empty){const a=[];r.forEach(n=>a.push({id:n.id,...n.data()})),e=a;try{localStorage.setItem("freshmart_pending_confirmations",JSON.stringify(e))}catch{}}}return ie=e,s?e.filter(r=>r.orderId===s):e}catch(e){return console.warn("[ClientPay] Gagal muat konfirmasi pending:",e),ie}},Le=async(s=null,e=null)=>{je();const t=w("modal-client-tempo-pay"),r=w("modal-client-tempo-pay-box");if(!t||!r)return;const a=re();if(!a.length){E("Tidak ada tagihan atau angsuran tempo aktif yang perlu dibayar.","info");return}S=(s?a.find(n=>n.orderId===s):null)||a[0],F="bank",te=null,ae=null,await Re(S.orderId),we(a,e),Ie(t,r)},ce=()=>{const s=w("modal-client-tempo-pay"),e=w("modal-client-tempo-pay-box");!s||!e||Se(s,e)},we=(s,e=null)=>{const t=w("modal-client-tempo-pay-box");if(!t)return;const r=S,a=!!(r.payment?.isPaylater||r.isPaylater||r.payment?.subMethod==="paylater"),n=Math.max(0,parseFloat(r.payment?.tempoBalance)||0),i=Array.isArray(r.payment?.paylaterSchedule)&&r.payment.paylaterSchedule.length>0?r.payment.paylaterSchedule:null,c=(r.payment?.installments||[]).reduce((m,M)=>m+(parseFloat(M.amount)||0),0);parseInt(r.payment?.paylaterMonths)||(i?i.length:r.payment?.paylaterTenor==="2m"||r.payment?.paylaterTenor);const g=a?r.payment?.paylaterTenor==="2m"?"2 Bulan":r.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari":"Tempo Toko";let x=0,u="-",o=0,d=1,p=!1;const T=[];if(i&&i.length>0){let m=0,M=!1;i.forEach((k,H)=>{const W=k.installmentIndex||k.installmentNo||k.installmentNumber||k.month||H+1,L=parseFloat(k.pokok||k.principal)||0,I=parseFloat((k.adminFee||0)+(k.serviceFee||0))||0,z=parseFloat(k.total||k.totalMonthly||k.totalInstallment)||L+I;m+=z;const Y=m,D=k.dueDate||0,Z=k.dueDateFormatted||k.dueDateStr||(D?new Date(D).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-");let X="upcoming",me=0;c>=Y?X="paid":M?X="upcoming":(M=!0,X="current",d=W,u=Z,o=D,p=D&&Date.now()>D,me=Math.max(0,Y-c),x=Math.min(me,z)),T.push({monthIndex:W,dueStr:Z,dueTime:D,pokok:L,fee:I,total:z,statusType:X})}),M||(x=n)}else x=n,o=r.payment?.tempoDueDate||0,u=o?new Date(o).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-",p=o&&Date.now()>o;const N=e&&e>0?Math.min(n,e):x>0&&x<n?x:n,C=ie.filter(m=>m.orderId===r.orderId&&m.status==="pending").reduce((m,M)=>m+(parseFloat(M.amount)||0),0);let P=(Array.isArray(y.banks)?y.banks:[]).filter(m=>m&&(m.bankName||m.bank||m.bankAccount||m.number));P.length===0&&y.store?.bankName&&(y.store?.bankAccount||y.store?.bankNumber)&&(P=[{bankName:y.store.bankName,bankAccount:y.store.bankAccount||y.store.bankNumber,bankOwner:y.store.bankOwner||y.store.name||"Toko Putri"}]),P.length===0&&(P=[{bankName:"BCA",bankAccount:"1234567890",bankOwner:y.store?.name||"Toko Putri"}]);const v=y.payment?.qrisUrl||"";t.innerHTML=`
        <!-- DRAG PULL MOBILE -->
        <div class="pull-indicator sm:hidden"></div>

        <!-- HEADER -->
        <div class="px-5 sm:px-6 pt-3.5 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 flex items-center justify-between shrink-0">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-black text-white shrink-0 shadow-xs" style="background: var(--color-primary);">
                    <i class="fa-solid fa-file-invoice-dollar text-sm"></i>
                </div>
                <div>
                    <h3 class="font-black text-sm sm:text-base text-slate-800 dark:text-white">Pembayaran Tagihan Cicilan</h3>
                    <p class="text-[10px] text-slate-400 font-semibold">Konfirmasi Langsung &amp; Real-Time ke Toko Putri</p>
                </div>
            </div>
            <button type="button" onclick="window.closeClientPaymentModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" title="Tutup">
                <i class="fa-solid fa-xmark text-xs"></i>
            </button>
        </div>

        <!-- BODY SCROLLABLE DENGAN PADDING LEGA ANTI-TERTUTUP FOOTER -->
        <div class="p-5 sm:p-6 pb-24 sm:pb-28 overflow-y-auto flex-1 space-y-6 text-xs custom-scrollbar">
            <!-- PENDING BANNER JIKA ADA PENGAJUAN -->
            ${C>0?`
            <div class="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 flex items-start sm:items-center gap-3 text-amber-800 dark:text-amber-200 shadow-2xs">
                <i class="fa-solid fa-hourglass-half text-amber-500 text-base animate-pulse shrink-0 mt-0.5 sm:mt-0"></i>
                <div class="min-w-0 flex-1">
                    <p class="font-bold text-xs sm:text-sm">Ada Pengajuan Pembayaran Sedang Diverifikasi: <b class="font-mono text-amber-900 dark:text-amber-100">${h(C)}</b></p>
                    <p class="text-[11px] text-amber-700/80 dark:text-amber-300/80 mt-1 leading-relaxed">Admin toko sedang memeriksa mutasi rekening Anda. Limit kredit belanja Anda akan otomatis pulih segera setelah diverifikasi.</p>
                </div>
            </div>
            `:""}

            <!-- PILIH NOTA PESANAN (JIKA LEBIH DARI 1) -->
            ${s.length>1?`
            <div class="space-y-2">
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Pilih Nota Tagihan</label>
                <select id="client-pay-order-select" onchange="window.switchClientPaymentOrder(this.value)" class="admin-input bg-slate-50 dark:bg-slate-900 rounded-2xl font-bold cursor-pointer h-12 text-xs">
                    ${s.map(m=>`
                        <option value="${m.orderId}" ${m.orderId===r.orderId?"selected":""}>
                            Nota #${m.orderId} — Sisa: ${h(m.payment?.tempoBalance||0)} (${m.payment?.isPaylater?"PayLater":"Tempo"})
                        </option>
                    `).join("")}
                </select>
            </div>
            `:""}

            <!-- KARTU MODEL ANGSURAN: BULAN INI VS BULAN BERIKUTNYA -->
            <div class="space-y-3">
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/60 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-2xs">
                    <div class="flex items-center justify-between text-xs">
                        <div class="flex items-center gap-2">
                            <span class="font-mono font-bold text-slate-800 dark:text-slate-200 text-sm">Nota #${f(r.orderId)}</span>
                            <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold">
                                ${f(g)}
                            </span>
                        </div>
                        <span class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Total: ${h(r.payment?.grandTotal||r.total||n)}</span>
                    </div>

                    ${T.length>1?`
                    <!-- HIGHLIGHT UTAMA: TAGIHAN BULAN INI -->
                    <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 space-y-1.5 shadow-2xs">
                        <div class="flex items-center justify-between flex-wrap gap-1">
                            <span class="text-[10px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                                <i class="fa-solid fa-calendar-check text-emerald-600"></i> Angsuran Bulan Ini (Termin Ke-${d} dari ${T.length})
                            </span>
                            <span class="px-2 py-0.5 rounded-md text-[9.5px] font-black font-mono ${p?"bg-rose-100 text-rose-700 border border-rose-300":"bg-emerald-200/70 dark:bg-emerald-800/70 text-emerald-900 dark:text-emerald-100"}">
                                ${p?"Lewat Jatuh Tempo":"Jatuh Tempo: "+u}
                            </span>
                        </div>
                        <div class="flex items-baseline justify-between pt-1">
                            <span class="text-xs font-bold text-emerald-700 dark:text-emerald-300">Wajib Dibayar:</span>
                            <span class="font-mono font-black text-2xl text-emerald-900 dark:text-white tracking-tight">${h(x)}</span>
                        </div>
                    </div>

                    <!-- TABEL MINI RINCIAN JADWAL TIAP BULAN -->
                    <div class="space-y-1.5 pt-1">
                        <p class="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center justify-between">
                            <span>Jadwal Angsuran Per Bulan</span>
                            <span class="text-[9px] font-semibold text-slate-500">Transparan &amp; Jelas</span>
                        </p>
                        <div class="rounded-xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden bg-white dark:bg-slate-900/60 text-xs">
                            <div class="divide-y divide-slate-100 dark:divide-slate-800">
                                ${T.map(m=>`
                                    <div class="p-2.5 sm:p-3 flex items-center justify-between gap-2 ${m.statusType==="paid"?"bg-slate-50/50 dark:bg-slate-800/20 opacity-60":m.statusType==="current"?"bg-emerald-50/30 dark:bg-emerald-950/20 font-bold":""}">
                                        <div class="min-w-0">
                                            <p class="font-bold text-slate-800 dark:text-slate-200 text-xs">Bulan Ke-${m.monthIndex}</p>
                                            <p class="text-[10px] text-slate-400 font-mono mt-0.5">Jatuh Tempo: ${m.dueStr}</p>
                                        </div>
                                        <div class="text-right shrink-0">
                                            <p class="font-mono font-black text-xs sm:text-sm text-slate-900 dark:text-white">${h(m.total)}</p>
                                            <div class="mt-0.5">
                                                ${m.statusType==="paid"?`
                                                    <span class="px-2 py-0.5 rounded text-[8.5px] font-black uppercase bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">✓ Lunas</span>
                                                `:m.statusType==="current"?`
                                                    <span class="px-2 py-0.5 rounded text-[8.5px] font-black uppercase bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">★ Bayar Bulan Ini</span>
                                                `:`
                                                    <span class="px-2 py-0.5 rounded text-[8.5px] font-medium uppercase bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">Bulan Depan</span>
                                                `}
                                            </div>
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    </div>

                    <!-- RINGKASAN SISA KESELURUHAN -->
                    <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span>Total Sisa Seluruh Tenor (Pelunasan Penuh):</span>
                        <span class="font-mono font-black text-slate-800 dark:text-slate-200 text-sm">${h(n)}</span>
                    </div>
                    `:`
                    <!-- SINGLE TEMPO / 1 BULAN -->
                    <div class="pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 space-y-2">
                        <div class="flex items-center justify-between text-xs">
                            <span class="text-slate-500 dark:text-slate-400 font-bold">Tanggal Jatuh Tempo:</span>
                            <span class="font-mono font-bold ${p?"text-rose-600":"text-slate-800 dark:text-slate-200"}">${u}</span>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-1">
                            <span class="text-slate-500 dark:text-slate-400 font-bold">Sisa Tagihan Wajib Bayar:</span>
                            <span class="text-base sm:text-lg font-black font-mono text-rose-600 dark:text-rose-400">${h(n)}</span>
                        </div>
                    </div>
                    `}
                </div>
            </div>

            <!-- PILIHAN NOMINAL PEMBAYARAN -->
            <div class="space-y-3">
                <div class="flex items-center justify-between">
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Pilih Nominal Pembayaran *</label>
                    <span class="text-[10px] text-slate-400 italic">Bebas cicil atau lunas</span>
                </div>
                
                <!-- Quick Chips -->
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    ${T.length>1&&x>0&&x<n?`
                    <button type="button" onclick="window.setClientPayAmount(${x}, 'angsuran')" class="p-3.5 rounded-2xl border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] font-bold text-xs text-left active:scale-95 transition-all shadow-xs relative overflow-hidden group">
                        <div class="absolute top-1.5 right-2 px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider bg-[var(--color-primary)] text-white">Rekomendasi</div>
                        <span class="block text-[9px] uppercase tracking-wider opacity-90 font-bold">Angsuran Bulan Ini</span>
                        <span class="font-mono font-black text-sm sm:text-base mt-1 block">${h(x)}</span>
                        <span class="block text-[9px] opacity-75 mt-0.5 font-normal">Termin Ke-${d}</span>
                    </button>
                    `:""}
                    <button type="button" onclick="window.setClientPayAmount(${n}, 'pelunasan')" class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-bold text-xs text-left active:scale-95 transition-all shadow-2xs">
                        <span class="block text-[9px] uppercase tracking-wider opacity-75 text-slate-400">Pelunasan Penuh</span>
                        <span class="font-mono font-black text-sm mt-0.5 block">${h(n)}</span>
                        <span class="block text-[9px] opacity-75 mt-0.5 font-normal">Lunas Seluruhnya</span>
                    </button>
                    <button type="button" onclick="window.focusCustomClientPay()" class="p-3.5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 font-bold text-xs text-left active:scale-95 transition-all col-span-2 sm:col-span-1 shadow-2xs">
                        <span class="block text-[9px] uppercase tracking-wider opacity-75 text-slate-400">Nominal Lain</span>
                        <span class="text-xs mt-0.5 block font-bold">Titipan Bebas</span>
                        <span class="block text-[9px] opacity-75 mt-0.5 font-normal">Ketik Nominal</span>
                    </button>
                </div>

                <!-- Input Nominal Rupiah -->
                <div class="space-y-1.5">
                    <div class="relative">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 font-black text-base text-slate-400">Rp</span>
                        <input type="number" id="client-pay-amount-input" min="1000" max="${n}" value="${N}" class="admin-input pl-12 h-13 text-base sm:text-lg font-black font-mono rounded-2xl focus:border-[var(--color-primary)]" placeholder="0">
                    </div>
                    <p class="text-[10px] text-slate-400 leading-relaxed">
                        Default terisi nominal <b>Angsuran Bulan Ini (${h(N)})</b>. Anda juga dapat memilih Pelunasan Penuh di atas jika ingin melunasi seluruhnya sekaligus.
                    </p>
                </div>
            </div>

            <!-- PILIH SALURAN PEMBAYARAN TOKO (BANK VS QRIS) -->
            <div class="space-y-3.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Saluran Pembayaran Resmi Toko Putri *</label>
                
                <div class="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                    <button type="button" onclick="window.switchClientPayChannel('bank')" id="tab-btn-client-bank" class="py-2.5 rounded-xl text-xs font-black transition-all ${F==="bank"?"bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white":"text-slate-500 hover:text-slate-800"}">
                        <i class="fa-solid fa-building-columns mr-1.5"></i> Transfer Bank
                    </button>
                    <button type="button" onclick="window.switchClientPayChannel('qris')" id="tab-btn-client-qris" class="py-2.5 rounded-xl text-xs font-black transition-all ${F==="qris"?"bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white":"text-slate-500 hover:text-slate-800"}">
                        <i class="fa-solid fa-qrcode mr-1.5"></i> QRIS Toko
                    </button>
                </div>

                <!-- CONTAINER CHANNEL BANK -->
                <div id="client-pay-channel-bank" class="${F==="bank"?"block":"hidden"} space-y-3">
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">Silakan transfer nominal di atas ke salah satu rekening resmi Toko Putri:</p>
                    <div class="space-y-3">
                        ${P.map(m=>{const M=m.bankName||m.bank||"BANK",k=m.bankAccount||m.number||"-",H=m.bankOwner||m.name||y.store?.name||"Toko Putri";return`
                            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 shadow-2xs">
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-mono">${f(M)}</span>
                                        <span class="text-xs font-bold text-slate-800 dark:text-white">${f(H)}</span>
                                    </div>
                                    <p class="font-mono text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 tracking-wider mt-1.5">${f(k)}</p>
                                </div>
                                <button type="button" onclick="window.copyAccountNumber('${f(k)}')" class="h-11 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-2xs shrink-0 cursor-pointer">
                                    <i class="fa-regular fa-copy text-xs"></i> Salin Rekening
                                </button>
                            </div>`}).join("")}
                    </div>
                </div>

                <!-- CONTAINER CHANNEL QRIS -->
                <div id="client-pay-channel-qris" class="${F==="qris"?"block":"hidden"} space-y-3.5 text-center">
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">Scan QRIS toko di bawah menggunakan BCA Mobile, Livin, GoPay, OVO, DANA, atau ShopeePay:</p>
                    ${v?`
                        <div class="inline-block p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 shadow-sm mx-auto">
                            <img src="${f(v)}" alt="QRIS Resmi Toko Putri" class="w-56 h-56 sm:w-64 sm:h-64 object-contain mx-auto rounded-2xl">
                        </div>
                        <div>
                            <a href="${f(v)}" target="_blank" download="QRIS_Toko_Putri.jpg" class="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:underline py-1.5 px-3 rounded-xl bg-[rgba(var(--color-primary-rgb),0.06)]">
                                <i class="fa-solid fa-arrow-down-to-bracket text-sm"></i> Unduh / Buka Gambar QRIS Penuh
                            </a>
                        </div>
                    `:`
                        <div class="p-8 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 text-slate-400 text-center space-y-1.5">
                            <i class="fa-solid fa-qrcode text-3xl text-slate-300"></i>
                            <p class="text-xs">QRIS belum diatur oleh toko. Silakan gunakan metode Transfer Bank di atas.</p>
                        </div>
                    `}
                </div>
            </div>

            <!-- UNGGAH BUKTI TRANSFER -->
            <div class="space-y-3.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Unggah Bukti Transfer / Resi *</label>
                    <p class="text-[11px] text-slate-400 mt-0.5">Lampirkan tangkapan layar (screenshot) atau foto struk bukti mutasi</p>
                </div>
                
                <input type="file" id="client-pay-proof-input" accept="image/*" class="hidden" onchange="window.handleClientProofFileChange(event)">
                
                <div id="client-pay-proof-dropzone" onclick="document.getElementById('client-pay-proof-input').click()" class="p-6 sm:p-8 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-[var(--color-primary)] transition-all cursor-pointer text-center bg-slate-50/60 dark:bg-slate-800/40 group">
                    <div id="client-pay-proof-placeholder">
                        <div class="w-13 h-13 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                            <i class="fa-solid fa-camera text-2xl"></i>
                        </div>
                        <p class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">Klik untuk Ambil Foto / Pilih Bukti Transfer</p>
                        <p class="text-[11px] text-slate-400 mt-1">Format JPG, PNG atau WebP (Otomatis dikompresi ringan)</p>
                    </div>

                    <div id="client-pay-proof-preview-wrap" class="hidden">
                        <img id="client-pay-proof-img" src="" alt="Preview Bukti" class="max-h-60 sm:max-h-72 mx-auto rounded-2xl border border-slate-200 dark:border-slate-700 object-contain shadow-sm">
                        <p class="text-xs font-bold text-[var(--color-primary)] mt-3 flex items-center justify-center gap-1.5">
                            <i class="fa-solid fa-circle-check"></i> Foto siap dikirim (Klik untuk ganti)
                        </p>
                    </div>
                </div>

                <!-- Input Catatan Pengirim (Opsional) -->
                <div class="space-y-1.5">
                    <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Catatan Tambahan (Opsional)</label>
                    <input type="text" id="client-pay-notes-input" placeholder="Contoh: Transfer dari rekening an. Putri / No. Referensi 987654" class="admin-input rounded-2xl text-xs h-12 bg-slate-50 dark:bg-slate-900 focus:border-[var(--color-primary)]">
                </div>
            </div>
        </div>

        <!-- STICKY ACTION FOOTER (LEGA, SOLID & DOCKING AMAN ANTI-TERTUTUP) -->
        <div class="p-4 sm:p-5 border-t border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex items-center justify-end gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.35)]" style="padding-bottom: max(1.25rem, env(safe-area-inset-bottom))">
            <button type="button" onclick="window.closeClientPaymentModal()" class="h-12 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">
                Batal
            </button>
            <button type="button" id="client-pay-submit-btn" onclick="window.submitClientPaymentConfirmation()" class="h-12 px-6 rounded-2xl text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                <i class="fa-solid fa-paper-plane text-xs"></i>
                <span>Kirim Konfirmasi Pembayaran</span>
            </button>
        </div>
    `},Ee=s=>{const e=re(),t=e.find(r=>r.orderId===s);t&&(S=t,we(e))},Fe=s=>{F=s;const e=w("tab-btn-client-bank"),t=w("tab-btn-client-qris"),r=w("client-pay-channel-bank"),a=w("client-pay-channel-qris");s==="bank"?(e&&(e.className="py-2 rounded-xl text-xs font-black transition-all bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white"),t&&(t.className="py-2 rounded-xl text-xs font-black transition-all text-slate-500 hover:text-slate-800"),r&&G(r),a&&A(a)):(t&&(t.className="py-2 rounded-xl text-xs font-black transition-all bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white"),e&&(e.className="py-2 rounded-xl text-xs font-black transition-all text-slate-500 hover:text-slate-800"),a&&G(a),r&&A(r))},Oe=(s,e="angsuran")=>{const t=w("client-pay-amount-input");t&&(t.value=s,t.focus())},Ke=()=>{const s=w("client-pay-amount-input");s&&(s.focus(),s.select())},He=async s=>{const e=s.target.files&&s.target.files[0];if(e){he("Mengompresi foto bukti transfer...");try{ae=e;const t=await De(e);te=t;const r=w("client-pay-proof-preview-wrap"),a=w("client-pay-proof-img"),n=w("client-pay-proof-placeholder");a&&t&&(a.src=t),r&&G(r),n&&A(n)}catch(t){console.warn("Gagal memproses gambar:",t),E("Gagal memproses foto bukti transfer!","error")}finally{oe()}}},_e=async()=>{if(!S)return E("Pilih nota pesanan yang ingin dibayar!","error");const s=w("client-pay-amount-input"),e=parseFloat(s?.value)||0,t=Math.max(0,parseFloat(S.payment?.tempoBalance)||0);if(e<=0)return E("Masukkan nominal pembayaran yang valid!","error");if(e>t+100)return E("Nominal pembayaran melebihi sisa tagihan ("+h(t)+")!","error");if(!te)return E("Wajib melampirkan foto / screenshot bukti transfer!","error");const r=w("client-pay-submit-btn");r&&(r.disabled=!0,r.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-1"></i> Mengirim...'),he("Mengirim konfirmasi pembayaran ke toko...");try{let a=te;if(ae&&typeof window.uploadBuktiToGDrive=="function")try{const d=await window.uploadBuktiToGDrive(ae,S.orderId);d&&(a=d)}catch(d){console.warn("[ClientPay] GDrive upload fallback to compressed image:",d)}const n=(b?.phone||b?.id||S.customer?.phone||S.customer?.wa||"").toString().replace(/\D/g,""),i=n.startsWith("0")?"62"+n.substring(1):n,l=b?.name||S.customer?.name||"Pelanggan",c="CONF-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase(),g=y.banks&&y.banks[0]?y.banks[0].bankName:"Transfer Bank",x=(w("client-pay-notes-input")?.value||"").trim(),u={confirmId:c,orderId:S.orderId,customerPhone:i,customerName:l,amount:e,channel:F,bankName:F==="bank"?g:"QRIS Toko",buktiUrl:a,notes:x,createdAt:Date.now(),status:"pending"};await O.collection("tempo_payment_confirmations").doc(c).set(u);let o=[];try{const d=localStorage.getItem("freshmart_pending_confirmations");d&&(o=JSON.parse(d)||[])}catch{}o.unshift(u);try{localStorage.setItem("freshmart_pending_confirmations",JSON.stringify(o))}catch{}oe(),ce(),typeof window.showToast=="function"&&window.showToast("Bukti transfer "+h(e)+" berhasil dikirim ke Admin Toko Putri!","success"),typeof window.rMemberModalBody=="function"&&window.rMemberModalBody(),setTimeout(()=>{alert("Alhamdulillah! Konfirmasi pembayaran sebesar "+h(e)+" untuk nota #"+S.orderId+` telah berhasil dikirim ke Admin Toko Putri.

Admin akan memeriksa mutasi rekening dan menyetujui pembayaran Anda. Limit belanja PayLater Anda akan otomatis pulih segera setelah disetujui.`)},300)}catch(a){console.error("[ClientPay] Gagal kirim konfirmasi:",a),oe(),r&&(r.disabled=!1,r.innerHTML='<i class="fa-solid fa-paper-plane mr-1"></i> Kirim Konfirmasi Pembayaran'),E("Gagal mengirim konfirmasi: "+(a.message||"Periksa koneksi internet"),"error")}},le=(s,e=[])=>{if(!s)return"";const t=!!(s.payment?.isPaylater||s.isPaylater||s.payment?.subMethod==="paylater"),r=Array.isArray(s.payment?.paylaterSchedule)&&s.payment.paylaterSchedule.length>0?s.payment.paylaterSchedule:null,a=Math.max(0,parseFloat(s.payment?.tempoBalance)||0);parseFloat(s.payment?.grandTotal||s.total);const i=(s.payment?.installments||[]).reduce((x,u)=>x+(parseFloat(u.amount)||0),0),c=(e||[]).filter(x=>x.orderId===s.orderId&&x.status==="pending").reduce((x,u)=>x+(parseFloat(u.amount)||0),0),g=t?s.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":s.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)":"Tempo Pembayaran Toko";if(r&&r.length>0){let x=0,u=!1;const o=r.map((d,p)=>{const T=d.installmentIndex||d.installmentNo||d.installmentNumber||d.month||p+1,N=parseFloat(d.pokok||d.principal)||0,K=parseFloat((d.adminFee||0)+(d.serviceFee||0))||0,C=parseFloat(d.total||d.totalMonthly||d.totalInstallment)||N+K;x+=C;const R=x;let P="",v="",m=!1;i>=R?(P="✓ LUNAS",v="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700",m=!0):c>0?(P="⏳ SEDANG DIVERIFIKASI",v="bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-300 dark:border-amber-700"):u?(P="BULAN DEPAN",v="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"):(u=!0,d.dueDate&&Date.now()>d.dueDate?(P="⚠️ JATUH TEMPO",v="bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-300 dark:border-rose-700"):(P="★ WAJIB BULAN INI",v="bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700 font-bold"));const M=d.dueDateFormatted||d.dueDateStr||(d.dueDate?new Date(d.dueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-");return`
                <tr class="text-xs ${m?"opacity-70 bg-slate-50/50 dark:bg-slate-900/20":""}">
                    <td class="py-3 px-4 font-bold text-slate-800 dark:text-slate-200">
                        Bulan ke-${T}
                    </td>
                    <td class="py-3 px-4 text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                        ${M}
                    </td>
                    <td class="py-3 px-4 font-mono font-bold text-slate-800 dark:text-slate-200">
                        ${h(N)}
                    </td>
                    <td class="py-3 px-4 font-mono text-slate-700 dark:text-slate-300 font-bold">
                        +${h(K)}
                    </td>
                    <td class="py-3 px-4 font-mono font-black text-slate-900 dark:text-white">
                        ${h(C)}
                    </td>
                    <td class="py-3 px-4 text-right">
                        <span class="inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${v}">
                            ${P}
                        </span>
                    </td>
                </tr>
            `}).join("");return`
            <div class="mt-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 overflow-hidden shadow-2xs space-y-3 p-4 sm:p-5">
                <div class="flex items-center justify-between flex-wrap gap-2.5">
                    <div>
                        <h4 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                            <i class="fa-solid fa-calendar-check text-[var(--color-primary)]"></i> Rincian Jadwal Angsuran Anda
                        </h4>
                        <p class="text-[11px] text-slate-400 font-medium mt-0.5">Nota #${f(s.orderId)} • ${f(g)}</p>
                    </div>
                    ${a>0?`
                    <button type="button" onclick="window.openClientPaymentModal('${f(s.orderId)}')" class="px-3.5 py-2 rounded-xl text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);">
                        <i class="fa-solid fa-credit-card text-[10px]"></i> Bayar Angsuran Ini
                    </button>
                    `:""}
                </div>

                <div class="overflow-x-auto rounded-xl border border-slate-200/80 dark:border-slate-800 custom-scrollbar">
                    <table class="w-full text-left whitespace-nowrap min-w-[540px]">
                        <thead class="bg-slate-100/90 dark:bg-slate-800/90 text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            <tr>
                                <th class="py-3 px-4">Angsuran</th>
                                <th class="py-3 px-4">Jatuh Tempo</th>
                                <th class="py-3 px-4">Pokok</th>
                                <th class="py-3 px-4">Biaya Tenor</th>
                                <th class="py-3 px-4">Wajib Bayar</th>
                                <th class="py-3 px-4 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900/40">
                            ${o}
                        </tbody>
                    </table>
                </div>

                <div class="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 flex-wrap gap-2.5">
                    <span>Sudah Dibayar: <b class="font-mono text-emerald-600 dark:text-emerald-400">${h(i)}</b></span>
                    <span>Sisa Wajib Bayar: <b class="font-mono text-rose-600 dark:text-rose-400 font-black">${h(a)}</b></span>
                </div>
            </div>
        `}return`
        <div class="mt-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3.5 sm:p-4 space-y-2.5">
            <div class="flex items-center justify-between flex-wrap gap-2">
                <div>
                    <h4 class="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                        <i class="fa-solid fa-file-invoice text-[var(--color-primary)]"></i> Tagihan Tempo Berjalan
                    </h4>
                    <p class="text-[10px] text-slate-400 font-medium">Nota #${f(s.orderId)} • Jatuh Tempo: ${s.payment?.tempoDueDate?new Date(s.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"}</p>
                </div>
                ${a>0?`
                <button type="button" onclick="window.openClientPaymentModal('${f(s.orderId)}')" class="px-3 py-1.5 rounded-xl text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);">
                    <i class="fa-solid fa-credit-card text-[9px]"></i> Bayar Sekarang
                </button>
                `:""}
            </div>

            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span class="text-slate-500 font-bold">Sisa Tagihan Tempo</span>
                <span class="font-mono font-black text-rose-600 dark:text-rose-400 text-sm">${h(a)}</span>
            </div>
        </div>
    `};typeof window<"u"&&(window.openClientPaymentModal=Le,window.closeClientPaymentModal=ce,window.switchClientPaymentOrder=Ee,window.switchClientPayChannel=Fe,window.setClientPayAmount=Oe,window.focusCustomClientPay=Ke,window.handleClientProofFileChange=He,window.submitClientPaymentConfirmation=_e,window.copyAccountNumber=Ce,window.renderClientInstallmentSchedule=le);const B=new Map,Ue=3*60*1e3,U=new Map,Ge=2*60*1e3,We="https://lh3.googleusercontent.com/d/1KHwsV5sK6aAH3-eP_vTJA4tE5MyRukLo",Ve=s=>{if(!s){B.clear(),U.clear();return}const e=s.toString().replace(/\D/g,"");let t=e,r=e.startsWith("0")?"62"+e.substring(1):e.startsWith("62")?e:"62"+e,a=e.startsWith("62")?"0"+e.substring(2):e;B.delete(e),B.delete(t),B.delete(r),B.delete(a),U.delete(e),U.delete(t),U.delete(r),U.delete(a)},pe=async(s,e="")=>{try{let t=(s||"").toString().replace(/\D/g,"");if(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),!t||t.length<9)return null;let r=[];try{const u=localStorage.getItem("freshmart_my_orders");u&&(r=JSON.parse(u)||[])}catch{}if(!r.length)return null;let a=0;const n=r.find(u=>u.finalMemberPoints!==void 0&&u.finalMemberPoints!==null);if(n?a=Math.max(0,parseFloat(n.finalMemberPoints)||0):a=r.reduce((u,o)=>u+(parseFloat(o.pointsEarned)||0),0),a<=0)return null;const i=O.collection("freshmart").doc("cms_data").collection("customers").doc(t),l=await i.get();if(!l.exists)return null;const c=e||b&&b.name||l.data().name||"Pelanggan Setia",g={id:t,phone:t,name:c,points:a,updatedAt:new Date().toISOString(),lastOrderAt:new Date().toISOString()};try{await i.set(g,{merge:!0})}catch(u){console.warn("[reconcilePointsFromOrders] Firestore set error:",u)}$(g);try{localStorage.setItem("freshmart_current_member",JSON.stringify(g)),localStorage.setItem("freshmart_member_wa",t)}catch{}return B.set(t,{data:g,timestamp:Date.now()}),document.getElementById("member-modal-body")&&j(),g}catch(t){return console.warn("[reconcilePointsFromOrders] Error:",t),null}},se=(s=0)=>{const e=Math.max(0,parseFloat(s)||0);return e>=1e3?{level:4,name:"PLATINUM VIP",badge:"💎 PLATINUM VIP",icon:"fa-gem",gradient:"from-slate-950 via-zinc-900 to-neutral-950 border-amber-400/40 text-amber-200",cardBg:"linear-gradient(135deg, #090d16 0%, #171f30 45%, #0d1322 75%, #050811 100%)",accentBg:"bg-amber-400/20",accentText:"text-amber-300",accentBorder:"border-amber-400/40",chipBorder:"#f59e0b",foilClass:"gold-foil-text",nextTier:null,ptsNeeded:0,progress:100,perks:["Cashback & Poin Belanja Maksimal (2x Lipat)","Akses Prioritas Antrean Kasir & Pengiriman","Klaim Semua Hadiah Katalog VIP","Layanan Konsultasi Khusus via WhatsApp"]}:e>=500?{level:3,name:"GOLD MEMBER",badge:"🥇 GOLD MEMBER",icon:"fa-crown",gradient:"from-amber-600 via-yellow-600 to-amber-700 border-yellow-300/40 text-yellow-100",cardBg:"linear-gradient(135deg, #78350f 0%, #b45309 35%, #d97706 70%, #92400e 100%)",accentBg:"bg-yellow-400/20",accentText:"text-amber-200",accentBorder:"border-yellow-300/40",chipBorder:"#fde047",foilClass:"gold-foil-text",nextTier:"Platinum VIP",ptsNeeded:1e3-e,progress:Math.min(100,Math.round((e-500)/500*100)),perks:["Diskon & Promo Spesial Member Gold","Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Menarik dari Katalog","Prioritas Penyiapan Pesanan"]}:e>=100?{level:2,name:"SILVER MEMBER",badge:"🥈 SILVER MEMBER",icon:"fa-medal",gradient:"from-slate-700 via-slate-600 to-slate-800 border-slate-300/40 text-slate-100",cardBg:"linear-gradient(135deg, #1e293b 0%, #334155 40%, #475569 70%, #0f172a 100%)",accentBg:"bg-slate-200/20",accentText:"text-slate-100",accentBorder:"border-slate-300/40",chipBorder:"#cbd5e1",foilClass:"silver-foil-text",nextTier:"Gold Member",ptsNeeded:500-e,progress:Math.min(100,Math.round((e-100)/400*100)),perks:["Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Langsung Tanpa Undian","Penawaran Diskon Tertentu"]}:{level:1,name:"BRONZE MEMBER",badge:"🥉 BRONZE MEMBER",icon:"fa-award",gradient:"from-stone-800 via-amber-950 to-stone-900 border-orange-400/30 text-orange-200",cardBg:"linear-gradient(135deg, #381a10 0%, #632917 40%, #7c2d12 70%, #292524 100%)",accentBg:"bg-orange-500/20",accentText:"text-orange-200",accentBorder:"border-orange-400/40",chipBorder:"#fb923c",foilClass:"bronze-foil-text",nextTier:"Silver Member",ptsNeeded:100-e,progress:Math.min(100,Math.round(e/100*100)),perks:["Kumpulkan Poin di Setiap Transaksi Belanja","Akses Penuh ke Katalog Hadiah Toko"]}},ke=s=>{let e=(s||"").toString().replace(/\D/g,"");for(e.startsWith("62")?e=e.substring(2):e.startsWith("0")&&(e=e.substring(1));e.length<8;)e+="0";const t=[];for(let r=0;r<e.length&&t.length<3;r+=4)t.push(e.substring(r,r+4));return`PUTRI • ${t.join(" • ")}`},ve=s=>{const e=String(s||"812345678901").replace(/\D/g,"");let t="",r=8;t+=`<rect x="${r}" y="3" width="2.5" height="34" fill="#0f172a"/>`,r+=4,t+=`<rect x="${r}" y="3" width="1.5" height="34" fill="#0f172a"/>`,r+=3.5,t+=`<rect x="${r}" y="3" width="3" height="34" fill="#0f172a"/>`,r+=5;for(let a=0;a<e.length;a++){const n=parseInt(e[a],10)||0,i=(n%3+1)*1.3,l=((n+2)%4+1)*1.1,c=(n%2+1)*1.8;t+=`<rect x="${r}" y="3" width="${i}" height="34" fill="#0f172a"/>`,r+=i+c,t+=`<rect x="${r}" y="3" width="${l}" height="34" fill="#0f172a"/>`,r+=l+2}return t+=`<rect x="${r}" y="3" width="3" height="34" fill="#0f172a"/>`,r+=5,t+=`<rect x="${r}" y="3" width="1.5" height="34" fill="#0f172a"/>`,r+=3.5,t+=`<rect x="${r}" y="3" width="2.5" height="34" fill="#0f172a"/>`,r+=4,`
    <svg class="w-full h-11 bg-white rounded-lg px-2 py-1 shadow-inner border border-slate-200" viewBox="0 0 ${Math.max(r+10,240)} 40" xmlns="http://www.w3.org/2000/svg">
        ${t}
    </svg>`},be=s=>{const e=parseFloat(s?.points)||0,t=se(e),r=(y.store?.name||"Toko Putri").toUpperCase(),a=y.store?.logo&&y.store.logo!=="fa-store"?y.store.logo:We,n=(s?.name||"PELANGGAN SETIA").toUpperCase(),i=(s?.phone||"81234567890").toString().replace(/\D/g,""),l=ke(i),c=y.store?.wa||i;return`
    <div class="member-card-scene w-full max-w-[390px] mx-auto select-none my-1">
        <div id="member-card-inner" class="member-card-inner relative w-full aspect-[1.586/1] cursor-pointer rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10" onclick="flipMemberCard()" title="Klik untuk membalik kartu">
            
            <!-- ================= SISI DEPAN (FRONT CARD) ================= -->
            <div id="member-card-front-export" class="member-card-front rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-5 flex flex-col justify-between text-white border border-white/20" style="background: ${t.cardBg};">
                
                <!-- Ambient luxury light reflections (clean subtle overlay, zero blur spilling) -->
                <div class="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/15 pointer-events-none"></div>

                <!-- Header Kartu: Logo Toko, Nama Toko, & Gelombang Contactless -->
                <div class="relative z-10 flex items-center justify-between">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <div class="w-8 h-8 rounded-xl bg-white/95 p-1 flex items-center justify-center shadow-2xs shrink-0 border border-white/40">
                            <img src="${f(a)}" alt="Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <i class="fa-solid fa-store text-slate-800 text-xs hidden"></i>
                        </div>
                        <div class="min-w-0">
                            <h4 class="text-[11px] sm:text-xs font-black tracking-wider text-white uppercase truncate">${f(r)}</h4>
                            <p class="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] text-white/80 uppercase">VIP Loyalty Pass</p>
                        </div>
                    </div>
                    <!-- Contactless NFC & Tier Pill -->
                    <div class="flex items-center gap-2 shrink-0">
                        <span class="text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${t.accentBg} ${t.accentText} border ${t.accentBorder}">
                            ${t.badge}
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
                        ${b&&(b.paylaterActive===!0||b.paylaterActive==="true")&&(parseFloat(b.paylaterLimit)||0)>0?`
                        <div class="mt-1 flex items-center justify-end gap-1 text-[8px] font-black text-emerald-300 uppercase tracking-wider">
                            <i class="fa-solid fa-bolt text-amber-300 text-[7px]"></i> PayLater: ${h(Math.max(0,(parseFloat(b.paylaterLimit)||0)-Math.max(0,parseFloat(b.paylaterUsed)||0)))}
                        </div>`:""}
                    </div>
                </div>

                <!-- Bagian Bawah: Nomor Kartu & Nama Pelanggan Embossed -->
                <div class="relative z-10">
                    <p class="text-[11px] sm:text-[13px] embossed-text text-white/95 font-mono tracking-[0.18em] mb-1.5">${f(l)}</p>
                    <div class="flex items-end justify-between gap-2">
                        <div class="min-w-0 flex-1">
                            <p class="text-[7px] sm:text-[8px] font-bold tracking-widest text-white/70 uppercase leading-none mb-0.5">Nama Pelanggan</p>
                            <p class="text-[11px] sm:text-[13px] font-bold text-white tracking-wider truncate uppercase">${f(n)}</p>
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
                            <span class="text-[9px] font-mono font-bold text-slate-500 italic truncate">${f(n)}</span>
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
                        ${ve(i)}
                        <p class="text-[9px] font-mono font-bold tracking-[0.2em] text-slate-300 mt-1">*${f(i)}*</p>
                    </div>
                </div>

                <!-- Footer Sisi Belakang: Kontak & Info -->
                <div class="p-3 sm:p-4 bg-slate-950/80 border-t border-white/10 text-center">
                    <p class="text-[7.5px] sm:text-[8px] text-slate-400 leading-tight">
                        Kartu member digital resmi <b class="text-white">${f(r)}</b>. Tunjukkan saat transaksi untuk poin belanja.
                    </p>
                    <p class="text-[8px] font-bold text-emerald-400 mt-0.5">
                        <i class="fa-brands fa-whatsapp mr-1"></i>CS: +${f(c)}
                    </p>
                </div>
            </div>

        </div>
    </div>`},Je=()=>{const s=document.getElementById("member-card-inner");s&&(s.classList.toggle("is-flipped"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),typeof window.playNativeSound=="function"&&window.playNativeSound("tick"))},qe=async()=>{const s=document.getElementById("member-card-inner");s&&s.classList.contains("is-flipped")&&(s.classList.remove("is-flipped"),await new Promise(t=>setTimeout(t,450)));const e=document.getElementById("member-card-front-export");if(e){typeof window.showToast=="function"&&window.showToast("Menyiapkan file gambar Kartu Member HD...");try{if(typeof window.ensureScriptLoaded=="function"&&await window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),typeof html2canvas>"u")throw new Error("Modul html2canvas belum siap dimuat.");const t=await html2canvas(e,{scale:3,useCORS:!0,allowTaint:!0,backgroundColor:null}),a=`Kartu_Member_TokoPutri_${(b?.name||"Pelanggan").replace(/[^a-zA-Z0-9]/g,"_")}.png`,n=t.toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(n,a,"image/png");else{const i=document.createElement("a");i.download=a,i.href=n,document.body.appendChild(i),i.click(),document.body.removeChild(i)}typeof window.showToast=="function"&&window.showToast("Kartu Member Berhasil Disimpan ke Galeri! 🎉")}catch(t){console.error("Gagal menyimpan kartu member:",t),typeof window.showToast=="function"&&window.showToast("Gagal menyimpan kartu. Silakan coba kembali.")}}},ze=()=>{const s=w("reward-catalog-container");if(!s)return;const e=y.store.showRewardCatalog!==!1&&y.store.showRewardCatalog!=="false";e&&typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();const t=(y.rewards||[]).filter(a=>a.isActive!=="false"&&a.isActive!==!1);if(!e||t.length===0){s.classList.add("hidden"),s.innerHTML="";return}s.classList.remove("hidden");let r=`
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
            ${t.map(a=>`
                <div class="w-[130px] sm:w-[145px] shrink-0 snap-start md:shrink md:flex-1 md:min-w-[150px] md:max-w-[260px] relative group cursor-pointer active:scale-95 transition-all duration-200" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Tukarkan hadiah ini saat checkout menggunakan poin belanja Anda!');">
                    <div class="w-full h-full bg-slate-50/80 dark:bg-slate-900/60 rounded-2xl shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden border border-[rgba(var(--color-primary-rgb),0.15)] dark:border-slate-700/80 p-2 sm:p-2.5 text-slate-800 dark:text-slate-100">
                        <!-- Badges Row -->
                        <div class="flex items-center justify-between gap-1 mb-1.5">
                            <span class="text-white text-[7.5px] sm:text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs flex items-center gap-1"
                                  style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%);">
                                <i class="fa-solid fa-gift text-[7px]"></i> Gratis
                            </span>
                            <span class="bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-300/40 dark:border-amber-700/50 text-[7.5px] sm:text-[8px] font-black px-1.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                                <i class="fa-solid fa-coins text-amber-500 text-[7px]"></i> ${parseFloat(a.pointsCost||a.pointsRequired)||0} Poin
                            </span>
                        </div>
                        <!-- Reward Image -->
                        <div class="w-full aspect-square rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden relative border border-slate-100 dark:border-slate-700/60 p-2 group-hover:bg-[rgba(var(--color-primary-rgb),0.05)] transition-colors">
                            <img loading="lazy" src="${f(a.img)}" alt="${f(a.name)}" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-108" onerror="this.onerror=null;this.src='https://placehold.co/400?text=Hadiah'">
                        </div>
                        <!-- Details & Action -->
                        <div class="mt-2 flex-1 flex flex-col justify-between">
                            <h4 class="text-[9.5px] sm:text-[10px] font-black text-slate-800 dark:text-white leading-snug line-clamp-2 uppercase tracking-tight text-center drop-shadow-2xs">${f(a.name)}</h4>
                            <div class="mt-2 w-full py-1.5 rounded-xl text-white text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-wider text-center shadow-2xs transition-all flex items-center justify-center gap-1 group-hover:shadow-xs"
                                 style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%);">
                                <i class="fa-solid fa-hand-holding-dollar text-[8px]"></i> Tukar Poin
                            </div>
                        </div>
                    </div>
                </div>`).join("")}
        </div>
    </div>`;s.innerHTML=r};let fe=null;const Qe=()=>{clearTimeout(fe),fe=setTimeout(async()=>{const e=(window.normalizeWA||(n=>(n||"").replace(/\D/g,"").replace(/^0/,"62")))(ge("cust-wa")),t=w("member-status-banner");if(!t)return;if(!e||e.length<10){A(t),A("payment-option-tempo"),A("payment-option-paylater"),$(null),Q(null);const n=document.querySelector('input[name="payment"][value="tempo"]');if(n&&n.checked){const i=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');i&&(i.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}return}const r=n=>{const i=parseFloat(n.points)||0,l=se(i);t.className="mt-3 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border border-[rgba(var(--color-primary-rgb),0.35)] shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",t.innerHTML=`
                <div class="flex items-center gap-3 relative z-10 min-w-0">
                    <div class="w-12 h-10 rounded-xl bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.35)] flex items-center justify-center shrink-0 shadow-inner">
                        <i class="fa-solid fa-id-card text-xl text-[var(--color-primary)]"></i>
                    </div>
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${l.accentBg} ${l.accentText} border ${l.accentBorder}">${l.badge}</span>
                            <span class="text-[10px] font-bold text-[var(--color-primary)] flex items-center gap-1"><i class="fa-solid fa-coins text-[9px]"></i>${i} Poin</span>
                        </div>
                        <p class="text-xs font-bold text-white mt-0.5 truncate flex items-center gap-1.5">
                            <span>${f(n.name||"Pelanggan")}</span>
                            <span class="text-[9px] font-normal text-slate-400">(Member Resmi)</span>
                        </p>
                    </div>
                </div>
                <button type="button" onclick="openMemberModal()" class="relative z-10 w-full sm:w-auto shrink-0 primary-bg hover:opacity-90 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-2.5 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-wallet"></i> Buka Kartu Member
                </button>`,G(t),G("payment-option-tempo"),n.paylaterActive===!0||n.paylaterActive==="true"?G("payment-option-paylater"):A("payment-option-paylater")},a=B.get(e);if(a&&Date.now()-a.timestamp<Ue){if(a.data)$(a.data),r(a.data);else{$(null),Q(null),A(t),A("payment-option-tempo"),A("payment-option-paylater");const n=document.querySelector('input[name="payment"][value="tempo"]');if(n&&n.checked){const i=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');i&&(i.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}return}try{const n=await O.collection("freshmart").doc("cms_data").collection("customers").doc(e).get();if(n.exists){const i=n.data();B.set(e,{data:i,timestamp:Date.now()}),$(i),r(i)}else{B.set(e,{data:null,timestamp:Date.now()}),$(null),Q(null),A(t),A("payment-option-tempo"),A("payment-option-paylater");const i=document.querySelector('input[name="payment"][value="tempo"]');if(i&&i.checked){const l=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');l&&(l.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}}catch{}},500)},Ye=()=>{if(!b)try{const r=localStorage.getItem("freshmart_current_member");if(r){const a=JSON.parse(r);a&&(a.id||a.phone||a.name)&&$(a)}}catch{}const s=b?.phone||b?.id||localStorage.getItem("freshmart_member_wa");if(s){let r=s.toString().replace(/\D/g,"");r.startsWith("0")?r="62"+r.substring(1):r.startsWith("62")||(r="62"+r),O.collection("freshmart").doc("cms_data").collection("customers").doc(r).get().then(async a=>{if(a.exists){let n=a.data();if(parseFloat(n.paylaterUsed)<0&&(n.paylaterUsed=0),(parseFloat(n.points)||0)===0){const l=await pe(r,n.name);l&&(n=l)}B.set(r,{data:n,timestamp:Date.now()}),$(n);try{localStorage.setItem("freshmart_current_member",JSON.stringify(n)),localStorage.setItem("freshmart_member_wa",r)}catch{}document.getElementById("member-modal-body")&&j()}else{B.set(r,{data:null,timestamp:Date.now()}),$(null);try{localStorage.removeItem("freshmart_current_member"),localStorage.removeItem("freshmart_member_wa")}catch{}document.getElementById("member-modal-body")&&j()}}).catch(()=>{})}typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();let e=document.getElementById("member-modal");e||(e=document.createElement("div"),e.id="member-modal",e.className="fixed inset-0 z-[115] bg-slate-900/75 flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=r=>{r.target===e&&Ae()},document.body.appendChild(e));const t=e.style.display!=="none"&&e.style.opacity==="1";e.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2.25rem] sm:rounded-3xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col shadow-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden">
            <!-- DRAG PULL MOBILE -->
            <div class="pull-indicator sm:hidden"></div>

            <!-- Header Modal -->
            <div class="px-5 sm:px-6 pt-3.5 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-white dark:bg-slate-900">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-2xl flex items-center justify-center text-white shadow-xs" style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.3);">
                        <i class="fa-solid fa-id-card text-xs"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-slate-800 dark:text-white text-sm sm:text-base leading-tight">Kartu Member Digital</h3>
                        <p class="text-[10px] font-semibold text-slate-400">Loyalty Pass &amp; Poin Hadiah Toko Putri</p>
                    </div>
                </div>
                <button onclick="closeMemberModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" title="Tutup">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <!-- Body Modal (Spacious Scroll Clearance) -->
            <div class="p-5 sm:p-6 pb-20 sm:pb-24 overflow-y-auto flex-1 space-y-6 custom-scrollbar" id="member-modal-body"></div>
        </div>`,j(),e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"}),!t&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("member")},Pe=async(s,e=!1)=>{try{let t=(s||"").toString().replace(/\D/g,"");if(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),!t||t.length<9)return[];const r=t,a=U.get(r);if(!e&&a&&Date.now()-a.timestamp<Ge)return a.data;const n=new Set([t,t.startsWith("62")?"0"+t.substring(2):t,t.startsWith("62")?t.substring(2):t]);let i=[];try{const o=localStorage.getItem("freshmart_my_orders");o&&(i=JSON.parse(o)||[])}catch{}let l=[];const c=o=>!!o&&(o.code==="permission-denied"||/insufficient permissions/i.test(o.message||""));if(!!(xe&&xe.currentUser))for(const o of["customerPhone","phone"])try{const d=await O.collection("freshmart_orders").where(o,"in",Array.from(n).slice(0,10)).limit(50).get();if(d&&!d.empty){l=d.docs.map(p=>({id:p.id,...p.data()}));break}}catch(d){if(c(d))break;console.warn(`[getMemberPointsHistory] Query ${o} gagal:`,d)}if(!l.length&&i.length){const o=[...new Set(i.filter(p=>p&&p.id).map(p=>String(p.id)))].slice(0,20);(await Promise.allSettled(o.map(p=>O.collection("freshmart_orders").doc(p).get()))).forEach(p=>{p.status==="fulfilled"&&p.value&&p.value.exists?l.push({id:p.value.id,...p.value.data()}):p.status==="rejected"&&!c(p.reason)&&console.warn("[getMemberPointsHistory] Gagal memuat pesanan:",p.reason)})}const x=new Map;[...l,...i].forEach(o=>{if(o&&o.id){const d=(o.customerPhone||o.phone||o.customer&&o.customer.phone||"").toString().replace(/\D/g,"");(n.has(d)||!d)&&x.set(o.id,o)}});const u=[];return x.forEach(o=>{const d=o.createdAt||o.date||o.timestamp||o.dateString;let p=new Date;d&&(typeof d.toDate=="function"?p=d.toDate():typeof d=="number"||!isNaN(Number(d))?p=new Date(Number(d)):p=new Date(d));const T=isNaN(p.getTime())?"-":p.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),N=isNaN(p.getTime())?0:p.getTime(),K=o.source==="pos",C=parseFloat(o.pointsEarned)||0;C>0&&u.push({id:`${o.id}-earn`,orderId:o.id,timestamp:N,dateStr:T,type:"earn",title:`Poin Belanja (${K?"Kasir POS":"Belanja Online"})`,desc:`Faktur #${o.id} • Total Belanja ${h(o.total||o.payment?.grandTotal||0)}`,points:C,sign:"+",colorClass:"text-emerald-500 dark:text-emerald-400",bgClass:"bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",icon:"fa-coins"});const R=parseFloat(o.pointDiscount||o.payment?.pointDiscount)||0,P=parseFloat(o.pointsRedeemed)||0;if(R>0||P>0&&!o.claimedReward){const v=P>0?P:Math.round(R/1e3);u.push({id:`${o.id}-discount`,orderId:o.id,timestamp:N+1,dateStr:T,type:"discount",title:"Diskon Poin di Kasir POS",desc:`Potongan belanja tunai -${h(R||v*1e3)} • #${o.id}`,points:v,sign:"-",colorClass:"text-rose-500 dark:text-rose-400",bgClass:"bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400",icon:"fa-percent"})}if(o.claimedReward&&(o.claimedReward.name||o.claimedReward.id)){const v=parseFloat(o.claimedReward.pointsCost)||0,m=o.claimedReward.status==="ready"?"Tersedia / Diterima":o.claimedReward.status==="waiting_stock"?"Menunggu Stok Toko":"Sedang Diproses Toko";u.push({id:`${o.id}-reward`,orderId:o.id,timestamp:N+2,dateStr:T,type:"reward",title:`Tukar Hadiah: ${o.claimedReward.name}`,desc:`Status: ${m}${o.claimedReward.note?` ("${o.claimedReward.note}")`:""} • #${o.id}`,points:v,sign:"-",colorClass:"text-amber-500 dark:text-amber-400",bgClass:"bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400",icon:"fa-gift"})}}),u.sort((o,d)=>d.timestamp-o.timestamp),U.set(r,{data:u,timestamp:Date.now()}),u}catch(t){return console.warn("[getMemberPointsHistory] Error:",t),[]}},Te=async(s,e=!1)=>{const t=document.getElementById("member-points-history-list");if(!t)return;e&&(t.innerHTML=`
            <div class="p-4 text-center text-slate-400 text-xs font-semibold">
                <i class="fa-solid fa-circle-notch fa-spin mr-1.5 text-[var(--color-primary)]"></i> Memperbarui riwayat poin...
            </div>
        `);const r=await Pe(s,e);if(t){if(!r||!r.length){t.innerHTML=`
            <div class="p-4 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-center space-y-1.5 bg-slate-50/50 dark:bg-slate-900/30">
                <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto text-xs">
                    <i class="fa-solid fa-receipt"></i>
                </div>
                <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Belum Ada Riwayat Mutasi Poin</p>
                <p class="text-[10px] text-slate-400 max-w-xs mx-auto">
                    Kumpulkan poin di setiap belanja kasir POS atau pesanan online Toko Putri untuk menikmati diskon &amp; hadiah eksklusif.
                </p>
            </div>
        `;return}t.innerHTML=r.map(a=>`
        <div class="flex items-center gap-3 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 shadow-2xs hover:border-[var(--color-primary)]/40 transition-all">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs shrink-0 border ${a.bgClass}">
                <i class="fa-solid ${a.icon}"></i>
            </div>
            <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${f(a.title)}</p>
                    <span class="text-xs font-black ${a.colorClass} shrink-0">
                        ${a.sign}${a.points} Poin
                    </span>
                </div>
                <p class="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">${f(a.desc)}</p>
                <p class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5 flex items-center gap-1">
                    <i class="fa-regular fa-clock text-[8px]"></i> ${a.dateStr}
                </p>
            </div>
        </div>
    `).join("")}},Ze=s=>{if(!s)return{used:0,tagihanWajibBayar:0,totalPokok:0,totalFee:0,monthlyInstallment:0,tenorLabel:"",hasActiveOrder:!1};const e=Math.max(0,parseFloat(s.paylaterUsed)||0),t=(s.phone||s.id||"").toString().replace(/\D/g,""),r=[];Array.isArray(J)&&J.length&&r.push(...J),Array.isArray(q)&&q.length&&r.push(...q);try{const c=localStorage.getItem("freshmart_my_orders");if(c){const g=JSON.parse(c);Array.isArray(g)&&r.push(...g)}}catch{}const a=new Set,n=r.filter(c=>!c||!c.orderId||a.has(c.orderId)?!1:(a.add(c.orderId),!0)),i=c=>{if(!t)return!0;const g=(c.customer?.phone||c.customer?.wa||"").toString().replace(/\D/g,"");return g&&(g===t||g.endsWith(t)||t.endsWith(g))},l=n.filter(c=>{if(!!!(c.payment?.isPaylater||c.isPaylater||c.payment?.subMethod==="paylater")||c.status==="Batal"||c.payment?.paymentStatus==="lunas")return!1;const x=parseFloat(c.payment?.tempoBalance);return!(isNaN(x)||x<=0||!i(c))});if(l.length>0){let c=0,g=0,x=0,u=0,o=0,d=[];return l.forEach(p=>{const T=Math.max(0,parseFloat(p.payment?.tempoBalance)||0);g+=T;const N=parseFloat(p.payment?.paylaterAdminFee)||0,K=parseFloat(p.payment?.paylaterServiceFee)||0,C=N+K,R=parseFloat(p.payment?.paylaterUsed)||Math.max(0,T-C),P=parseFloat(p.payment?.paylaterMonthlyInstallment)||T;x+=R,u+=C,o+=P;const v=Array.isArray(p.payment?.paylaterSchedule)&&p.payment.paylaterSchedule.length>0?p.payment.paylaterSchedule:null;if(v&&v.length>1){const k=(p.payment?.installments||[]).reduce((L,I)=>L+(parseFloat(I.amount)||0),0);let H=0,W=0;for(let L=0;L<v.length;L++){const I=v[L],z=parseFloat(I.pokok||I.principal)||0,Y=parseFloat((I.adminFee||0)+(I.serviceFee||0))||0,D=parseFloat(I.total||I.totalMonthly||I.totalInstallment)||z+Y;if(H+=D,k<H){const Z=Math.max(0,H-k);W=Math.min(Z,D);break}}c+=W>0?W:T}else c+=T;const m=p.payment?.paylaterTenor==="2m"?"2 Bulan":p.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari";d.includes(m)||d.push(m)}),{used:e>0?e:x,tagihanBulanIni:c>0?c:g,tagihanWajibBayar:g,tagihanMendatang:Math.max(0,g-c),totalPokok:x>0?x:e,totalFee:u,monthlyInstallment:o>0?o:g,tenorLabel:d.join(", "),activeCount:l.length,hasActiveOrder:!0}}return{used:e,tagihanBulanIni:e,tagihanWajibBayar:e,tagihanMendatang:0,totalPokok:e,totalFee:0,monthlyInstallment:e,tenorLabel:"",activeCount:0,hasActiveOrder:!1}},j=()=>{const s=(y.rewards||[]).filter(a=>a.isActive!=="false"&&a.isActive!==!1),e=b&&parseFloat(b.points)||0,t=se(e),r=s.length?s.map(a=>{const n=(parseFloat(a.stock)||0)>0,i=b&&e>=(parseFloat(a.pointsCost)||0)&&n,l=ee&&ee.id===a.id;return`
        <div class="flex items-center gap-3 p-3.5 rounded-2xl border ${l?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-xs":"border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40"} transition-all">
            ${a.img?`<img src="${f(a.img)}" class="w-14 h-14 rounded-xl object-contain bg-white p-1 border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.style.display='none'" loading="lazy">`:'<div class="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 shrink-0"><i class="fa-solid fa-gift text-xl"></i></div>'}
            <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${f(a.name)}</p>
                <p class="text-[11px] font-black text-[var(--color-primary)] mt-0.5 flex items-center gap-1">
                    <i class="fa-solid fa-star text-[10px]"></i> ${parseFloat(a.pointsCost)||0} Poin
                </p>
                ${n?"":'<p class="text-[10px] font-bold text-rose-500 mt-0.5">Stok hadiah habis</p>'}
            </div>
            ${b?l?'<button type="button" onclick="deselectReward()" class="shrink-0 bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-bold uppercase px-3 py-2 rounded-xl active:scale-95 transition-all whitespace-nowrap shadow-xs cursor-pointer">Batal</button>':`<button type="button" ${i?"":"disabled"} onclick="selectReward('${f(String(a.id))}')" class="shrink-0 ${i?"primary-bg hover:opacity-90 text-white active:scale-95 shadow-xs cursor-pointer":"bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"} text-[10px] font-bold uppercase px-3 py-2 rounded-xl transition-all whitespace-nowrap">Pilih Hadiah</button>`:`<span class="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg">${parseFloat(a.pointsCost)||0} Poin</span>`}
        </div>`}).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-3">Belum ada program hadiah yang tersedia.</p>';b?(_("member-modal-body",`
            <!-- KARTU MEMBER DIGITAL (3D INTERAKTIF) -->
            <div>
                ${be(b)}
                
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
                            <i class="fa-solid ${t.icon} text-[var(--color-primary)]"></i> ${t.name}
                        </h4>
                    </div>
                    <div class="text-right">
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Total Saldo</p>
                        <p class="text-xs sm:text-sm font-black text-[var(--color-primary)] mt-0.5 flex items-center justify-end gap-1"><i class="fa-solid fa-coins text-[11px]"></i> ${e} Poin</p>
                    </div>
                </div>

                ${t.nextTier?`
                <div class="space-y-1.5 pt-1">
                    <div class="flex justify-between text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                        <span>Menuju <b>${t.nextTier}</b></span>
                        <span class="font-bold text-[var(--color-primary)]">${t.progress}%</span>
                    </div>
                    <div class="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <div class="h-full rounded-full primary-bg transition-all duration-500" style="width: ${t.progress}%"></div>
                    </div>
                    <p class="text-[9px] text-slate-500 dark:text-slate-400 font-medium">
                        Kumpulkan <b>${t.ptsNeeded} poin lagi</b> untuk otomatis naik tingkat ke <b>${t.nextTier}</b>!
                    </p>
                </div>`:`
                <p class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <i class="fa-solid fa-crown"></i> Anda telah mencapai level member tertinggi Toko Putri!
                </p>`}

                <!-- Member Privileges Pill -->
                <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Hak Istimewa Member Anda:</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        ${t.perks.map(a=>`
                        <div class="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid fa-check text-emerald-500 text-[9px] shrink-0"></i>
                            <span class="truncate">${f(a)}</span>
                        </div>`).join("")}
                    </div>
                </div>
            </div>

            <!-- PUTRI PAYLATER DIGITAL CREDIT LIMIT -->
            ${(()=>{const a=Math.max(0,parseFloat(b.paylaterLimit)||0),n=Ze(b),i=n.used,l=b.paylaterActive===!0||b.paylaterActive==="true",c=Math.max(0,a-i),g=a>0?Math.min(100,Math.max(0,Math.round(i/a*100))):0,x=b.paylaterDueDay||5;if(!l||a<=0)return`
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
                            <a href="https://wa.me/${(y.store?.wa||"").replace(/\D/g,"")}?text=Halo%20Admin%20Toko%20Putri,%20saya%20ingin%20mengajukan%20aktivasi%20fitur%20Putri%20PayLater%20untuk%20nomor%20${b.phone||""}" target="_blank" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline flex items-center gap-1">Ajukan Aktivasi <i class="fa-solid fa-arrow-right text-[8px]"></i></a>
                        </div>
                    </div>`;const u=n.tagihanBulanIni>0?n.tagihanBulanIni:n.monthlyInstallment>0?n.monthlyInstallment:n.tagihanWajibBayar,o=n.tagihanBulanIni>0&&n.tagihanBulanIni<n.tagihanWajibBayar;return`
                <div class="p-4 sm:p-5 rounded-2xl border border-[var(--color-primary)]/25 dark:border-[var(--color-primary)]/35 bg-gradient-to-br from-[rgba(var(--color-primary-rgb),0.06)] via-transparent to-[rgba(var(--color-primary-rgb),0.02)] dark:from-[rgba(var(--color-primary-rgb),0.12)] dark:to-slate-900 shadow-sm relative overflow-hidden space-y-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-xl text-white flex items-center justify-center shadow-xs" style="background: var(--color-primary);">
                                <i class="fa-solid fa-bolt text-xs"></i>
                            </div>
                            <div>
                                <div class="flex items-center gap-1.5">
                                    <span class="text-xs font-black text-slate-900 dark:text-white">Putri PayLater</span>
                                    <span class="px-1.5 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 font-bold">Aktif</span>
                                </div>
                                <p class="text-[9px] text-slate-400 font-semibold">Limit Kredit Eksklusif Member Toko</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Sisa Limit Tersedia</p>
                            <p class="text-sm font-black text-[var(--color-primary)] font-mono">${h(c)}</p>
                        </div>
                    </div>

                    <!-- Progress Bar Penggunaan Limit -->
                    <div class="space-y-1.5 pt-0.5">
                        <div class="flex justify-between text-[10px] font-bold text-slate-500 dark:text-slate-400">
                            <span>Terpakai: <b class="font-mono text-slate-800 dark:text-slate-200">${h(i)}</b> (${g}%)</span>
                            <span>Total Plafon: <b class="font-mono text-slate-800 dark:text-slate-200">${h(a)}</b></span>
                        </div>
                        <div class="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden p-0.5">
                            <div class="h-full rounded-full transition-all duration-500" style="background: var(--color-primary); width: ${g}%;"></div>
                        </div>
                    </div>

                    <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <i class="fa-regular fa-calendar-check text-[var(--color-primary)]"></i> Jatuh Tempo: <b>Tgl ${x} Bulan Depan</b>
                        </span>
                        <span class="text-[var(--color-primary)] font-bold">1-Klik Checkout Siap Pakai</span>
                    </div>

                    ${n.tagihanWajibBayar>0||i>0?`
                        <div class="pt-2.5 border-t border-dashed border-slate-200 dark:border-slate-700 space-y-2.5">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div class="min-w-0 space-y-0.5">
                                    <p class="text-[9px] text-slate-400 uppercase font-black tracking-wider flex items-center gap-1">
                                        <i class="fa-solid fa-file-invoice-dollar text-[var(--color-primary)]"></i> ${o?"Angsuran Bulan Ini (Wajib Bayar)":"Tagihan Berjalan (Wajib Bayar)"}
                                    </p>
                                    <div class="flex items-baseline gap-1.5 flex-wrap">
                                        <p class="text-base sm:text-lg font-black text-rose-600 dark:text-rose-400 font-mono">${h(u)}</p>
                                        ${o?`
                                            <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">dari total ${h(n.tagihanWajibBayar)}</span>
                                        `:""}
                                    </div>
                                    ${o?`
                                        <p class="text-[9.5px] text-slate-500 dark:text-slate-400 font-medium">
                                            Sisa Termin Bulan Depan: <b class="font-mono text-slate-700 dark:text-slate-300">${h(n.tagihanMendatang)}</b>
                                        </p>
                                    `:n.totalFee>0?`
                                        <p class="text-[9px] text-slate-400 font-medium mt-0.5">
                                            Pokok: <span class="font-mono text-slate-600 dark:text-slate-300 font-bold">${h(n.totalPokok)}</span> + Biaya Tenor: <span class="font-mono text-[var(--color-primary)] font-bold">+${h(n.totalFee)}</span>
                                        </p>
                                    `:""}
                                </div>
                                <div class="flex items-center gap-2 shrink-0">
                                    <button type="button" onclick="if(typeof window.openClientPaymentModal==='function') window.openClientPaymentModal('', ${u}); else if(typeof openClientPaymentModal==='function') openClientPaymentModal('', ${u});" class="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-white flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                                        <i class="fa-solid fa-credit-card text-xs"></i> Bayar ${o?"Bulan Ini":"Tagihan"}
                                    </button>
                                    <a href="https://wa.me/${(y.store?.wa||"").replace(/\D/g,"")}?text=Halo%20Admin%20Toko%20Putri,%20saya%20ingin%20melakukan%20pembayaran%20tagihan%20Putri%20PayLater%20sebesar%20${encodeURIComponent(h(u))}%20untuk%20nomor%20${b.phone||""}" target="_blank" class="p-2.5 rounded-xl text-slate-500 hover:text-[var(--color-primary)] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center active:scale-95 transition-all shadow-2xs" title="Konfirmasi via WhatsApp">
                                        <i class="fa-brands fa-whatsapp text-sm text-[var(--color-primary)]"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    `:""}
                </div>`})()}

            <!-- TABEL RINCIAN JADWAL ANGSURAN & TAGIHAN BERJALAN PELANGGAN -->
            ${(()=>{const a=typeof re=="function"?re():typeof window.getMemberActiveTempoOrders=="function"?window.getMemberActiveTempoOrders():[];if(!a||a.length===0)return"";let n=[];try{const l=localStorage.getItem("freshmart_pending_confirmations");l&&(n=JSON.parse(l)||[])}catch{}const i=typeof le=="function"?le:window.renderClientInstallmentSchedule;return typeof i!="function"?"":`
                <div class="space-y-3.5">
                    <div class="flex items-center justify-between">
                        <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                            <i class="fa-solid fa-list-check text-[var(--color-primary)]"></i> Jadwal Angsuran &amp; Cicilan Anda
                        </p>
                        <span class="text-[10px] font-bold text-[var(--color-primary)]">${a.length} Tagihan Aktif</span>
                    </div>
                    ${a.map(l=>i(l,n)).join("")}
                </div>`})()}

            <!-- KATALOG REWARD / PENUKARAN HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${r}</div>
            </div>

            ${ee?`<div class="bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[var(--color-primary)]/30 rounded-xl p-3.5 text-[11px] font-bold text-[var(--color-primary)] flex items-center gap-2"><i class="fa-solid fa-gift text-base shrink-0"></i><span>Hadiah "<b>${f(ee.name)}</b>" telah dipilih dan akan otomatis diproses saat pesanan Anda selesai di checkout.</span></div>`:""}

            <!-- RIWAYAT MUTASI POIN & HADIAH (POINT LEDGER) -->
            <div class="space-y-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                <div class="flex items-center justify-between">
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Riwayat Mutasi Poin &amp; Hadiah</p>
                    <button type="button" onclick="loadMemberPointsHistory('${f(b.phone||b.id||"")}', true)" class="text-[10px] text-[var(--color-primary)] font-bold hover:underline cursor-pointer flex items-center gap-1 active:scale-95 transition-all">
                        <i class="fa-solid fa-arrows-rotate text-[9px]"></i> Refresh
                    </button>
                </div>
                <div id="member-points-history-list" class="space-y-2">
                    <div class="p-4 text-center text-slate-400 text-xs font-semibold">
                        <i class="fa-solid fa-circle-notch fa-spin mr-1.5 text-[var(--color-primary)]"></i> Memuat riwayat poin...
                    </div>
                </div>
            </div>
        `),setTimeout(()=>{b&&Te(b.phone||b.id)},50)):_("member-modal-body",`
            <!-- PREVIEW KARTU CONTOH (MEMIKAT PELANGGAN) -->
            <div class="opacity-95">
                ${be({name:"CONTOH: PELANGGAN VIP",phone:"81234567890",points:500})}
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
                <div class="space-y-2.5">${r}</div>
            </div>
        `)},Xe=async()=>{const s=document.getElementById("member-lookup-input"),e=document.getElementById("member-lookup-result");if(!s||!e)return;let t=s.value.replace(/\D/g,"");if(!t||t.length<9){e.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",e.textContent="Masukkan minimal 9 digit nomor WhatsApp!",e.classList.remove("hidden");return}t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),e.className="text-xs font-bold text-[var(--color-primary)] p-2.5 primary-bg-soft rounded-xl",e.textContent="Memuat data kartu member...",e.classList.remove("hidden");try{const r=await O.collection("freshmart").doc("cms_data").collection("customers").doc(t).get();if(r.exists){let a=r.data();if((parseFloat(a.points)||0)===0){const n=await pe(t,a.name);n&&(a=n)}B.set(t,{data:a,timestamp:Date.now()}),$(a);try{localStorage.setItem("freshmart_current_member",JSON.stringify(a)),localStorage.setItem("freshmart_member_wa",t)}catch{}j(),typeof window.showToast=="function"&&window.showToast(`Selamat datang kembali, ${a.name||"Pelanggan"}! 💳`)}else{e.className="text-xs font-bold text-amber-700 dark:text-amber-300 p-3.5 bg-amber-50 dark:bg-amber-900/20 rounded-xl leading-relaxed border border-amber-200 dark:border-amber-800/40 space-y-1.5";const a=(y.store&&y.store.wa||"").replace(/\D/g,""),n=a?`https://wa.me/${a}?text=Halo%20Admin%20Toko%20Putri,%20saya%20ingin%20mendaftarkan%20nomor%20saya%20(${t})%20sebagai%20Member%20Resmi.`:"#";e.innerHTML=`
                <div class="flex items-center gap-1.5 text-amber-800 dark:text-amber-200 font-extrabold text-[11px]">
                    <i class="fa-solid fa-circle-info text-amber-500"></i>
                    <span>Nomor Belum Terdaftar sebagai Member Resmi</span>
                </div>
                <p class="text-[11px] font-medium text-slate-600 dark:text-slate-300 leading-normal">
                    Nomor <b>+${f(t)}</b> saat ini tercatat sebagai <b>Pelanggan Umum</b>. Fitur Poin Hadiah dan fasilitas pembayaran <b>Cash Tempo</b> hanya dapat digunakan setelah nomor Anda dikonfirmasi & disimpan oleh Admin Toko di database CMS.
                </p>
                ${a?`
                <div class="pt-1">
                    <a href="${n}" target="_blank" class="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                        <i class="fa-brands fa-whatsapp text-emerald-500"></i> Hubungi Admin untuk Pendaftaran Member
                    </a>
                </div>`:""}
            `}}catch{e.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",e.textContent="Gagal mengecek data. Silakan periksa koneksi internet Anda."}},et=s=>{const e=(y.rewards||[]).find(r=>r.id===s);if(!e)return;if((parseFloat(b?.points)||0)<(parseFloat(e.pointsCost)||0)){typeof window.showToast=="function"&&window.showToast("Poin Anda belum cukup untuk hadiah ini!");return}if((parseFloat(e.stock)||0)<=0){typeof window.showToast=="function"&&window.showToast("Maaf, stok hadiah ini sedang kosong!");return}Q({id:e.id,name:e.name,pointsCost:parseFloat(e.pointsCost)||0}),j(),typeof window.showToast=="function"&&window.showToast(`Hadiah "${e.name}" dipilih! Lanjutkan checkout untuk menukarnya.`)},tt=()=>{Q(null),j()},Ae=(s=!1)=>{const e=document.getElementById("member-modal");if(!e||e.style.display==="none")return;const t=()=>{e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250)};typeof window.requestCloseModal=="function"?window.requestCloseModal("member",s,t):t()},at=()=>{$(null);try{localStorage.removeItem("freshmart_current_member"),localStorage.removeItem("freshmart_member_wa")}catch{}j()};window.renderRewardCatalog=ze;window.checkMemberStatus=Qe;window.openMemberModal=Ye;window.rMemberModalBody=j;window.lookupMemberPoints=Xe;window.selectReward=et;window.deselectReward=tt;window.closeMemberModal=Ae;window.flipMemberCard=Je;window.downloadMemberCard=qe;window.getMemberTier=se;window.formatMemberCardNumber=ke;window.generateBarcodeSVG=ve;window.setCurrentMember=$;window.logoutMember=at;window.invalidateMemberCache=Ve;window.reconcilePointsFromOrders=pe;window.getMemberPointsHistory=Pe;window.loadMemberPointsHistory=Te;
