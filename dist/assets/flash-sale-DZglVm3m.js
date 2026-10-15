import{e as m,a as n,i as b,k as p,f as v}from"./module-print-BeOv9tOf.js";import{s as S,U as j}from"./module-pos-BMYmEEPL.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-member-fHDEG7Xo.js";import"./module-faq-VtqUbuN0.js";let M=null,c=[];const I=t=>{if(!t)return"";const e=new Date(t);if(isNaN(e.getTime()))return"";const a=d=>String(d).padStart(2,"0"),s=e.getFullYear(),i=a(e.getMonth()+1),u=a(e.getDate()),r=a(e.getHours()),o=a(e.getMinutes());return`${s}-${i}-${u}T${r}:${o}`},C=t=>{if(!t)return"-";const e=new Date(t);return isNaN(e.getTime())?"-":e.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})},w=()=>{const t=m("admin-content");if(!t)return;const e=Array.isArray(n.flashSales)?n.flashSales:[];let a=0,s=0,i=0;e.forEach(r=>{j(r)==="active"&&a++,(r.items||[]).forEach(d=>{s++,i+=parseFloat(d.soldCount)||0})});const u=e.length===0?`
        <div class="col-span-full py-16 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-8 bg-slate-50/50 dark:bg-slate-900/30">
            <div class="w-16 h-16 mx-auto mb-4 rounded-3xl flex items-center justify-center text-3xl shadow-sm" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary);">
                <i class="fa-solid fa-bolt"></i>
            </div>
            <h4 class="font-extrabold text-base text-slate-800 dark:text-white mb-1">Belum Ada Sesi Flash Sale</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-5 leading-relaxed">
                Buat sesi promo kilat untuk meningkatkan penjualan, cuci gudang barang lambat, atau memberikan diskon berbatas waktu dengan batas kuota khusus.
            </p>
            <button onclick="window.openFlashSaleModal()" class="btn-native-action px-5 py-2.5 rounded-xl text-white text-xs font-bold active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                <i class="fa-solid fa-plus"></i>
                <span>Buat Sesi Flash Sale Pertama</span>
            </button>
        </div>`:e.map(r=>{const o=j(r),d=o==="active"?'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider animate-pulse" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.3);"><i class="fa-solid fa-bolt" style="color: var(--color-primary);"></i> SEDANG BERLANGSUNG</span>':o==="upcoming"?'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300 dark:border-amber-800"><i class="fa-solid fa-clock"></i> SEGERA HADIR</span>':'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"><i class="fa-solid fa-check"></i> SELESAI</span>',x=r.channel==="pos"?"Hanya Kasir POS":r.channel==="web"?"Hanya Etalase Web":"Web & Kasir POS",g=Array.isArray(r.items)?r.items:[];return`
            <div class="bento-island-card rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4">
                <div>
                    <!-- Header Card Sesi -->
                    <div class="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div>
                            <div class="flex items-center gap-2 mb-1.5 flex-wrap">
                                ${d}
                                <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-store mr-1"></i>${x}</span>
                            </div>
                            <h3 class="font-extrabold text-base text-slate-900 dark:text-white leading-snug">
                                ${b(r.title||"Sesi Flash Sale")}
                            </h3>
                            <div class="flex items-center gap-3 mt-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium flex-wrap">
                                <span><i class="fa-regular fa-calendar-check text-[var(--color-primary)] mr-1"></i>${C(r.startTime)}</span>
                                <span class="text-slate-300 dark:text-slate-700">•</span>
                                <span><i class="fa-regular fa-clock text-amber-500 mr-1"></i>${C(r.endTime)}</span>
                            </div>
                        </div>

                        <!-- Aksi Tombol -->
                        <div class="flex items-center gap-1.5 shrink-0">
                            ${o==="ended"?`
                            <button onclick="window.reactivateFlashSaleSession('${b(r.id)}', 4)" title="Naikkan kembali ke Flash Sale sekarang (+4 Jam)" class="btn-native-action px-2.5 py-1.5 rounded-xl text-white text-[11px] font-black active:scale-95 transition-all cursor-pointer flex items-center gap-1 shadow-sm" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);">
                                <i class="fa-solid fa-bolt text-amber-300"></i>
                                <span>Naikkan Lagi</span>
                            </button>`:""}
                            <button onclick="window.openFlashSaleModal('${b(r.id)}')" title="Edit Sesi" class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button onclick="window.deleteFlashSaleSession('${b(r.id)}')" title="Hapus Sesi" class="w-9 h-9 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Item Produk yang Diikutsertakan -->
                    <div class="mt-3.5 space-y-2.5">
                        <div class="flex items-center justify-between">
                            <p class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                Produk Promo (${g.length} Barang):
                            </p>
                            ${g.some(l=>(parseFloat(l.soldCount)||0)>0)?`
                            <button type="button" onclick="window.resetAllSessionItemsSold('${b(r.id)}')" class="text-[10px] text-amber-600 hover:text-amber-700 dark:text-amber-400 font-bold flex items-center gap-1 cursor-pointer">
                                <i class="fa-solid fa-rotate-left text-[9px]"></i> Reset Semua Kuota
                            </button>`:""}
                        </div>
                        <div class="divide-y divide-slate-100 dark:divide-slate-800/80">
                            ${g.map((l,f)=>{const k=(n.products||[]).find(D=>String(D.id)===String(l.productId)),N=k?k.name:l.productName||"Produk ID: "+l.productId,E=l.variantName?` (${l.variantName})`:"",y=parseFloat(l.quota)||0,F=parseFloat(l.soldCount)||0,$=y>0&&F>=y,A=parseFloat(l.normalPrice)||0,P=parseFloat(l.flashSalePrice)||0,B=A>0?Math.round((A-P)/A*100):l.discountPercent||0,T=k?l.variantName&&k.variants&&k.variants.find(D=>D.name===l.variantName)?.hpp||k.hpp:0,R=T>0&&P<T;return`
                                <div class="py-2.5 flex items-center justify-between gap-3 text-xs">
                                    <div class="min-w-0 flex-1">
                                        <div class="flex items-center gap-1.5">
                                            <p class="font-bold text-slate-800 dark:text-slate-100 truncate">${b(N+E)}</p>
                                            ${$?'<span class="shrink-0 px-1.5 py-0.2 rounded text-[9px] font-black uppercase tracking-wider bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400">HABIS</span>':""}
                                        </div>
                                        <div class="flex items-center gap-2 mt-0.5 flex-wrap">
                                            <span class="text-[11px] text-slate-400 line-through">${v(A)}</span>
                                            <span class="font-black" style="color: var(--color-primary);">${v(P)} (-${B}%)</span>
                                            ${R?`<span class="text-[9px] font-black text-rose-600 bg-rose-100 dark:bg-rose-950/60 px-1.5 py-0.2 rounded border border-rose-300 inline-flex items-center gap-1"><i class="fa-solid fa-triangle-exclamation text-[8.5px]"></i> DI BAWAH HPP (${v(T)})</span>`:""}
                                        </div>
                                    </div>

                                    <!-- Indikator Kuota Terjual Harmonis -->
                                    <div class="text-right shrink-0">
                                        <div class="flex items-center justify-end gap-1">
                                            <span class="text-[10px] font-bold ${$?"text-rose-500":"text-slate-500 dark:text-slate-400"}">Terjual ${F} / ${y||"∞"}</span>
                                            ${F>0?`
                                            <button onclick="window.resetSessionItemSold('${b(r.id)}', ${f})" title="Reset kuota terjual produk ini ke 0" class="text-amber-500 hover:text-amber-600 text-[10px] font-black cursor-pointer ml-1 p-0.5">
                                                <i class="fa-solid fa-rotate-left"></i>
                                            </button>`:""}
                                        </div>
                                        <div class="w-20 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1 border border-slate-200/50 dark:border-slate-700/50">
                                            <div class="h-full rounded-full ${$?"bg-rose-500":""}" style="${$?"":"background: linear-gradient(90deg, #f59e0b 0%, var(--color-primary) 100%);"} width: ${y>0?Math.min(100,Math.round(F/y*100)):100}%;"></div>
                                        </div>
                                    </div>
                                </div>`}).join("")}
                        </div>
                    </div>
                </div>

                <!-- Footer Status Toggle & Fast Re-activation -->
                <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs gap-2 flex-wrap">
                    <div>
                        <span class="text-[11px] font-semibold text-slate-400">Status:</span>
                        <span class="ml-1 text-[11px] font-bold ${o==="active"?"text-emerald-600 dark:text-emerald-400":o==="upcoming"?"text-amber-500":"text-slate-500"}">
                            ${o==="active"?"Tayang di Etalase":o==="upcoming"?"Menunggu Jadwal":r.isActive!==!1?"Waktu Telah Selesai":"Dinonaktifkan"}
                        </span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        ${o==="ended"?`
                        <button onclick="window.reactivateFlashSaleSession('${b(r.id)}', 4)" class="btn-native-action px-3 py-1 rounded-xl text-white text-xs font-black active:scale-95 transition-all cursor-pointer flex items-center gap-1 shadow-xs" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);">
                            <i class="fa-solid fa-bolt text-amber-300"></i>
                            <span>Naikkan Lagi</span>
                        </button>`:""}
                        <button onclick="window.toggleFlashSaleActive('${b(r.id)}')" class="px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${r.isActive!==!1&&o==="active"?"bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800":"bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border border-slate-200"}">
                            <i class="fa-solid fa-power-off mr-1"></i> ${r.isActive!==!1&&o==="active"?"Sesi Aktif":r.isActive!==!1?"Aktifkan (Perpanjang)":"Dinonaktifkan"}
                        </button>
                    </div>
                </div>
            </div>`}).join("");t.innerHTML=`
    <div class="space-y-6 max-w-6xl mx-auto">
        <!-- Top Bar Header Harmonis Tema -->
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-2xl text-white flex items-center justify-center text-lg shadow-sm" style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.3);">
                        <i class="fa-solid fa-bolt text-amber-300"></i>
                    </div>
                    <span>Flash Sale &amp; Promo Kilat</span>
                </h2>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Atur jadwal diskon kilat berbatas waktu, pantau kuota persediaan khusus, dan picu lonjakan transaksi.
                </p>
            </div>

            <div class="flex items-center gap-2">
                <button onclick="window.openFlashSaleModal()" class="btn-native-action px-4 py-2.5 rounded-2xl text-white text-xs font-bold active:scale-95 transition-all cursor-pointer flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-plus text-sm"></i>
                    <span>Buat Sesi Flash Sale</span>
                </button>
            </div>
        </div>

        <!-- 3 Bento Metrik Ringkasan Harmonis Tema -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div class="bento-island-card p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-3.5 shadow-2xs">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.2);">
                    <i class="fa-solid fa-bolt"></i>
                </div>
                <div>
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Sesi Sedang Aktif</span>
                    <span class="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">${a} Sesi</span>
                </div>
            </div>

            <div class="bento-island-card p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-3.5 shadow-2xs">
                <div class="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-500 border border-amber-200 dark:border-amber-900 flex items-center justify-center text-xl shrink-0">
                    <i class="fa-solid fa-box-open"></i>
                </div>
                <div>
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Produk Promo</span>
                    <span class="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">${s} Item</span>
                </div>
            </div>

            <div class="bento-island-card p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-3.5 shadow-2xs">
                <div class="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 border border-emerald-200 dark:border-emerald-900 flex items-center justify-center text-xl shrink-0">
                    <i class="fa-solid fa-fire"></i>
                </div>
                <div>
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Unit Terjual</span>
                    <span class="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">${i} Unit</span>
                </div>
            </div>
        </div>

        <!-- Daftar Sesi Flash Sale Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            ${u}
        </div>
    </div>`},O=(t=null)=>{M=t;const e=t?(n.flashSales||[]).find(d=>d.id===t):null;c=e&&Array.isArray(e.items)?JSON.parse(JSON.stringify(e.items)):[];const a=Date.now(),s=e?.endTime?typeof window.parseSafeTimestamp=="function"?window.parseSafeTimestamp(e.endTime):new Date(e.endTime).getTime():0,i=e&&(!s||s<=a);let u=e?e.startTime:new Date(a).toISOString(),r=e?e.endTime:new Date(a+4*3600*1e3).toISOString();if(i){const d=e.startTime&&e.endTime?Math.max(36e5,(typeof window.parseSafeTimestamp=="function"?window.parseSafeTimestamp(e.endTime):new Date(e.endTime).getTime())-(typeof window.parseSafeTimestamp=="function"?window.parseSafeTimestamp(e.startTime):new Date(e.startTime).getTime())):144e5;u=new Date(a).toISOString(),r=new Date(a+d).toISOString()}const o=m("modal-flash-sale-form");o&&o.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-flash-sale-form" class="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 transition-opacity duration-200 opacity-0" style="background: rgba(15, 23, 42, 0.75);">
        <div id="flash-sale-modal-card" class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden transform scale-95 transition-transform duration-200">
            <!-- Modal Header -->
            <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl text-white flex items-center justify-center text-lg shadow-sm" style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%);">
                        <i class="fa-solid fa-bolt text-amber-300"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-base text-slate-900 dark:text-white leading-snug">
                            ${e?"Edit Sesi Flash Sale":"Buat Sesi Flash Sale Baru"}
                        </h3>
                        <p class="text-xs text-slate-400">Atur judul, jadwal tayang, dan daftar barang promo kilat.</p>
                    </div>
                </div>
                <button type="button" onclick="window.closeFlashSaleModal()" class="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center text-sm cursor-pointer transition-colors leading-none">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <!-- Modal Body Scrollable -->
            <div class="p-5 overflow-y-auto space-y-4 flex-1">
                ${i?`
                <div class="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-800 dark:text-amber-200 flex items-center justify-between gap-2.5 flex-wrap">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid fa-clock-rotate-left text-amber-500 text-base shrink-0"></i>
                        <span>Sesi ini sebelumnya telah selesai. Waktu promo otomatis disesuaikan ke jam sekarang agar langsung tayang saat disimpan.</span>
                    </div>
                    <button type="button" onclick="window.resetAllDraftItemsSold()" class="shrink-0 px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-[10px] font-black cursor-pointer shadow-xs">
                        <i class="fa-solid fa-rotate-left mr-1"></i> Reset Kuota Terjual
                    </button>
                </div>`:""}

                <!-- Judul Sesi -->
                <div>
                    <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                        Judul Sesi Promo <span class="text-rose-500">*</span>
                    </label>
                    <input type="text" id="fs-input-title" value="${b(e?.title||"Flash Sale Spesial Hari Ini")}" placeholder="Contoh: Flash Sale Akhir Pekan Alat Teknik" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>

                <!-- Rentang Waktu (Mulai & Selesai) -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                            Waktu Mulai <span class="text-rose-500">*</span>
                        </label>
                        <input type="datetime-local" id="fs-input-start" value="${I(u)}" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                            Waktu Berakhir <span class="text-rose-500">*</span>
                        </label>
                        <input type="datetime-local" id="fs-input-end" value="${I(r)}" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                </div>

                <!-- Preset Cepat Durasi -->
                <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mr-1">Preset Jam:</span>
                    <button type="button" onclick="window.setFlashSalePresetDuration(3)" class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 hover:bg-[rgba(var(--color-primary-rgb),0.1)] hover:text-[var(--color-primary)] dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                        +3 Jam
                    </button>
                    <button type="button" onclick="window.setFlashSalePresetDuration(6)" class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 hover:bg-[rgba(var(--color-primary-rgb),0.1)] hover:text-[var(--color-primary)] dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                        +6 Jam
                    </button>
                    <button type="button" onclick="window.setFlashSalePresetDuration(24)" class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 hover:bg-[rgba(var(--color-primary-rgb),0.1)] hover:text-[var(--color-primary)] dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                        1 Hari (24 Jam)
                    </button>
                    <button type="button" onclick="window.setFlashSalePresetDuration(48)" class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 hover:bg-[rgba(var(--color-primary-rgb),0.1)] hover:text-[var(--color-primary)] dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                        Akhir Pekan (2 Hari)
                    </button>
                </div>

                <!-- Saluran & Status -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                            Saluran Penjualan
                        </label>
                        <select id="fs-input-channel" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                            <option value="both" ${e?.channel==="both"||!e?"selected":""}>Etalase Web &amp; Kasir POS (Semua)</option>
                            <option value="web" ${e?.channel==="web"?"selected":""}>Hanya Etalase Web / Online</option>
                            <option value="pos" ${e?.channel==="pos"?"selected":""}>Hanya Kasir POS Offline</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                            Status Sesi
                        </label>
                        <select id="fs-input-active" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                            <option value="true" ${e?.isActive!==!1?"selected":""}>Aktif (Berjalan Sesuai Jam)</option>
                            <option value="false" ${e?.isActive===!1?"selected":""}>Nonaktifkan Sementara</option>
                        </select>
                    </div>
                </div>

                <!-- Bagian Item Produk Flash Sale -->
                <div class="pt-3 border-t border-slate-200/80 dark:border-slate-800">
                    <div class="flex items-center justify-between mb-3">
                        <div>
                            <h4 class="font-extrabold text-xs text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                                <i class="fa-solid fa-box" style="color: var(--color-primary);"></i>
                                <span>Daftar Barang Flash Sale</span>
                            </h4>
                            <p class="text-[10px] text-slate-400">Tentukan harga diskon, kuota unit, dan proteksi margin modal.</p>
                        </div>
                        <div class="flex items-center gap-2">
                            ${c.some(d=>(parseFloat(d.soldCount)||0)>0)?`
                            <button type="button" onclick="window.resetAllDraftItemsSold()" title="Reset semua kuota terjual ke 0" class="btn-native-action px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-[11px] font-bold active:scale-95 transition-all cursor-pointer flex items-center gap-1">
                                <i class="fa-solid fa-rotate-left text-amber-500"></i>
                                <span>Reset Kuota</span>
                            </button>`:""}
                            <button type="button" onclick="window.addFlashSaleItemRow()" class="btn-native-action px-3 py-1.5 rounded-xl text-white text-[11px] font-bold active:scale-95 transition-all cursor-pointer flex items-center gap-1.5" style="background: var(--color-primary);">
                                <i class="fa-solid fa-plus"></i>
                                <span>Tambah Produk</span>
                            </button>
                        </div>
                    </div>

                    <!-- Container Baris Produk -->
                    <div id="fs-items-container" class="space-y-3">
                        <!-- Diisi via renderFlashSaleDraftItems() -->
                    </div>
                </div>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex items-center justify-end gap-2.5 shrink-0">
                <button type="button" onclick="window.closeFlashSaleModal()" class="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button type="button" onclick="window.saveFlashSaleSession()" class="btn-native-action px-5 py-2.5 rounded-xl text-white font-black text-xs active:scale-95 transition-all cursor-pointer flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-floppy-disk"></i>
                    <span>Simpan Sesi Flash Sale</span>
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("flashSaleForm"),h(),requestAnimationFrame(()=>{const d=m("modal-flash-sale-form"),x=m("flash-sale-modal-card");d&&d.classList.remove("opacity-0"),x&&x.classList.remove("scale-95")})},H=(t=!1)=>{const e=m("modal-flash-sale-form"),a=m("flash-sale-modal-card");if(!e)return;const s=()=>{e.classList.add("opacity-0"),a&&a.classList.add("scale-95"),setTimeout(()=>e.remove(),200)};!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("flashSaleForm",!1,s):s()},h=()=>{const t=m("fs-items-container");if(!t)return;const e=Array.isArray(n.products)?n.products:[];if(c.length===0){t.innerHTML=`
        <div class="py-6 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-slate-400 text-xs">
            Belum ada produk yang dipilih. Klik tombol <b>"+ Tambah Produk"</b> di atas.
        </div>`;return}t.innerHTML=c.map((a,s)=>{const i=e.find(l=>String(l.id)===String(a.productId)),u=i&&Array.isArray(i.variants)?i.variants:[],r=parseFloat(a.normalPrice)||(i?parseFloat(i.price):0),o=parseFloat(a.flashSalePrice)||0,d=i?a.variantName&&u.length&&u.find(l=>l.name===a.variantName)?.hpp||i.hpp:0,x=d>0&&o>0&&o<d,g=r>0&&o>0?Math.round((r-o)/r*100):0;return`
        <div class="p-3.5 rounded-2xl border ${x?"border-rose-300 dark:border-rose-900 bg-rose-50/30 dark:bg-rose-950/20":"border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40"} space-y-2.5">
            <div class="flex items-center justify-between gap-2">
                <span class="text-[10px] font-black uppercase tracking-wider" style="color: var(--color-primary);">
                    Item #${s+1}
                </span>
                <button type="button" onclick="window.removeFlashSaleItemRow(${s})" class="text-rose-500 hover:text-rose-700 text-xs font-bold cursor-pointer">
                    <i class="fa-solid fa-trash-can mr-1"></i> Hapus
                </button>
            </div>

            <!-- Pilihan Produk & Varian -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Pilih Produk</label>
                    <select onchange="window.updateFlashSaleItemProduct(${s}, this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        <option value="">-- Pilih Produk Katalog --</option>
                        ${e.map(l=>`
                            <option value="${b(l.id)}" ${String(l.id)===String(a.productId)?"selected":""}>
                                ${b(l.name)} (${v(l.price)})
                            </option>
                        `).join("")}
                    </select>
                </div>

                ${u.length>0?`
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Pilih Varian (Opsional)</label>
                    <select onchange="window.updateFlashSaleItemVariant(${s}, this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        <option value="">Semua Varian</option>
                        ${u.map(l=>`
                            <option value="${b(l.name)}" ${l.name===a.variantName?"selected":""}>
                                ${b(l.name)} (${v(l.price||i.price)})
                            </option>
                        `).join("")}
                    </select>
                </div>`:""}
            </div>

            <!-- Harga Normal, Harga Flash Sale, & Kuota -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Harga Normal (Rp)</label>
                    <input type="number" min="0" value="${r||""}" onchange="window.updateFlashSaleItemDraft(${s}, 'normalPrice', this.value)" class="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>

                <div>
                    <label class="block text-[10px] font-bold mb-1" style="color: var(--color-primary);">
                        Harga Flash Sale (Rp) <span class="text-rose-500">*</span>
                    </label>
                    <input type="number" min="0" value="${o||""}" onchange="window.updateFlashSaleItemDraft(${s}, 'flashSalePrice', this.value)" placeholder="Harga Promo" class="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-black focus:outline-none focus:border-[var(--color-primary)]" style="color: var(--color-primary);">
                </div>

                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Kuota Promo (Qty Unit)</label>
                    <input type="number" min="1" value="${a.quota||10}" onchange="window.updateFlashSaleItemDraft(${s}, 'quota', this.value)" placeholder="Batas kuota" class="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>

            <!-- Kuota Terjual & Reset Helper -->
            <div class="flex items-center justify-between text-[10px] bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200/60 dark:border-slate-700/60 flex-wrap gap-2">
                <span class="font-bold text-slate-500 dark:text-slate-400">
                    Keterjualan Saat Ini: <b class="${(parseFloat(a.soldCount)||0)>=(parseFloat(a.quota)||10)?"text-rose-500":"text-slate-800 dark:text-slate-200"}">${a.soldCount||0} Unit Terjual</b>
                </span>
                ${(parseFloat(a.soldCount)||0)>0?`
                <button type="button" onclick="window.resetDraftItemSold(${s})" class="text-[10px] text-amber-600 hover:text-amber-700 dark:text-amber-400 font-black flex items-center gap-1 cursor-pointer">
                    <i class="fa-solid fa-rotate-left"></i> Reset ke 0 (Naikkan Lagi)
                </button>`:'<span class="text-[9px] text-slate-400">Kuota promo penuh tersedia</span>'}
            </div>

            <!-- Margin Guard Alert -->
            <div class="flex items-center justify-between text-[10px] flex-wrap gap-2 pt-1">
                <div class="flex items-center gap-2">
                    ${g>0?`<span class="font-black" style="color: var(--color-primary);">Diskon: -${g}%</span>`:""}
                    ${d>0?`<span class="text-slate-400">Modal HPP: ${v(d)}</span>`:""}
                </div>
                ${x?`
                <div class="text-rose-600 font-bold flex items-center gap-1">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span>Peringatan: Harga Flash Sale di bawah modal HPP!</span>
                </div>`:""}
            </div>
        </div>`}).join("")},K=t=>{c[t]&&(c[t].soldCount=0,h(),p("Kuota terjual produk ini berhasil di-reset ke 0!","success"))},L=()=>{c.forEach(t=>{t&&(t.soldCount=0)}),h(),p("Seluruh kuota terjual berhasil di-reset ke 0! Produk siap dinaikkan kembali.","success")},G=()=>{c.push({productId:"",variantName:"",normalPrice:0,flashSalePrice:0,quota:10,soldCount:0,maxPerCustomer:2}),h()},J=t=>{c.splice(t,1),h()},W=(t,e)=>{if(!c[t])return;const a=(n.products||[]).find(s=>String(s.id)===String(e));c[t].productId=e,c[t].variantName="",a&&(c[t].normalPrice=parseFloat(a.price)||0,c[t].flashSalePrice=Math.round((parseFloat(a.price)||0)*.8)),h()},q=(t,e)=>{if(!c[t])return;c[t].variantName=e;const a=(n.products||[]).find(s=>String(s.id)===String(c[t].productId));if(a&&e&&a.variants){const s=a.variants.find(i=>i.name===e);s&&s.price&&(c[t].normalPrice=parseFloat(s.price)||0,c[t].flashSalePrice=Math.round((parseFloat(s.price)||0)*.8))}h()},V=(t,e,a)=>{c[t]&&(c[t][e]=parseFloat(a)||0,h())},U=t=>{const e=m("fs-input-start"),a=m("fs-input-end");if(!e||!a)return;const s=e.value?new Date(e.value):new Date,i=new Date(s.getTime()+t*3600*1e3);a.value=I(i)},Y=async()=>{const t=(m("fs-input-title")?.value||"").trim(),e=m("fs-input-start")?.value,a=m("fs-input-end")?.value,s=m("fs-input-channel")?.value||"both",i=m("fs-input-active")?.value!=="false";if(!t){p("Judul sesi Flash Sale wajib diisi.","warning");return}if(!e||!a){p("Waktu mulai dan berakhir wajib ditentukan.","warning");return}const u=new Date(e),r=new Date(a);if(r<=u){p("Waktu berakhir harus setelah waktu mulai.","warning");return}const o=Date.now();if(i&&r.getTime()<=o){p("Waktu berakhir sudah lewat dari waktu saat ini. Gunakan preset jam (+3 Jam / +6 Jam) agar sesi langsung aktif di etalase toko.","warning");return}const d=c.filter(f=>f.productId&&f.flashSalePrice>0);if(d.length===0){p("Minimal tentukan 1 produk dengan harga Flash Sale yang valid.","warning");return}Array.isArray(n.flashSales)||(n.flashSales=[]);const x=M||`FS-${Date.now().toString(36).toUpperCase()}`,g={id:x,title:t,startTime:u.toISOString(),endTime:r.toISOString(),channel:s,isActive:i,updatedAt:o,items:d.map(f=>({productId:String(f.productId),variantName:f.variantName||"",normalPrice:parseFloat(f.normalPrice)||0,flashSalePrice:parseFloat(f.flashSalePrice)||0,quota:parseFloat(f.quota)||10,soldCount:parseFloat(f.soldCount)||0,maxPerCustomer:parseFloat(f.maxPerCustomer)||2}))},l=n.flashSales.findIndex(f=>f.id===x);l>-1?n.flashSales[l]=g:n.flashSales.unshift(g);try{await S(["flashSales"]),H(),w(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),typeof window.rCat=="function"&&window.rCat(),p("Sesi Flash Sale berhasil disimpan dan disinkronkan!","success")}catch(f){console.error("[FlashSale] Gagal simpan sesi:",f),p("Gagal menyimpan ke server. Coba lagi.","error")}},z=async t=>{if(!Array.isArray(n.flashSales))return;const e=n.flashSales.find(o=>o.id===t);if(!e)return;const a=e.isActive===!1;e.isActive=a;const s=Date.now(),i=e.endTime?typeof window.parseSafeTimestamp=="function"?window.parseSafeTimestamp(e.endTime):new Date(e.endTime).getTime():0,u=!i||i<=s;let r=!1;if(a&&u){const o=e.startTime&&e.endTime?Math.max(36e5,(typeof window.parseSafeTimestamp=="function"?window.parseSafeTimestamp(e.endTime):new Date(e.endTime).getTime())-(typeof window.parseSafeTimestamp=="function"?window.parseSafeTimestamp(e.startTime):new Date(e.startTime).getTime())):144e5;e.startTime=new Date(s).toISOString(),e.endTime=new Date(s+o).toISOString(),e.updatedAt=s,r=!0,Array.isArray(e.items)&&e.items.forEach(d=>{d&&(d.soldCount=0)})}else e.updatedAt=s;try{await S(["flashSales"]),w(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),typeof window.rCat=="function"&&window.rCat(),a?p(r?`Sesi "${e.title}" berhasil diaktifkan kembali! Waktu diperpanjang dan produk langsung aktif di etalase toko.`:`Sesi "${e.title}" kini aktif!`,"success"):p(`Sesi "${e.title}" telah dinonaktifkan.`,"info")}catch{p("Gagal mengubah status sesi.","error")}},Q=async(t,e=4)=>{if(!Array.isArray(n.flashSales))return;const a=n.flashSales.find(r=>r.id===t);if(!a)return;const s=Date.now(),i=e*3600*1e3;a.startTime=new Date(s).toISOString(),a.endTime=new Date(s+i).toISOString(),a.isActive=!0,a.updatedAt=s,Array.isArray(a.items)&&a.items.forEach(r=>{r&&(r.soldCount=0)});const u=n.flashSales.findIndex(r=>r.id===t);u>0&&(n.flashSales.splice(u,1),n.flashSales.unshift(a));try{await S(["flashSales"]),w(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),typeof window.rCat=="function"&&window.rCat(),p(`Sesi Flash Sale "${a.title}" berhasil dinaikkan kembali! Aktif selama ${e} jam dan langsung tayang di etalase toko.`,"success")}catch{p("Gagal menaikkan sesi Flash Sale.","error")}},X=async(t,e)=>{if(!Array.isArray(n.flashSales))return;const a=n.flashSales.find(s=>s.id===t);if(!(!a||!Array.isArray(a.items)||!a.items[e])){a.items[e].soldCount=0,a.updatedAt=Date.now();try{await S(["flashSales"]),w(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),typeof window.rCat=="function"&&window.rCat();const s=a.items[e].productName||"Produk Promo";p(`Kuota produk "${s}" berhasil di-reset ke 0!`,"success")}catch{p("Gagal mereset kuota produk.","error")}}},Z=async t=>{if(!Array.isArray(n.flashSales))return;const e=n.flashSales.find(a=>a.id===t);if(!(!e||!Array.isArray(e.items))){e.items.forEach(a=>{a&&(a.soldCount=0)}),e.updatedAt=Date.now();try{await S(["flashSales"]),w(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),typeof window.rCat=="function"&&window.rCat(),p(`Seluruh kuota produk di sesi "${e.title}" berhasil di-reset ke 0!`,"success")}catch{p("Gagal mereset kuota produk.","error")}}},_=t=>{if(!Array.isArray(n.flashSales))return;const e=n.flashSales.find(s=>s.id===t);if(!e)return;const a=async()=>{n.flashSales=n.flashSales.filter(s=>s.id!==t);try{await S(["flashSales"]),w(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),typeof window.rCat=="function"&&window.rCat(),p("Sesi Flash Sale berhasil dihapus.","success")}catch{p("Gagal menghapus sesi.","error")}};typeof window.showConfirm=="function"?window.showConfirm("Hapus Sesi Flash Sale",`Apakah Anda yakin ingin menghapus sesi promo "${e.title}"?`,a,"Ya, Hapus",!0):a()};window.renderFlashSaleAdminView=w;window.openFlashSaleModal=O;window.closeFlashSaleModal=H;window.renderFlashSaleDraftItems=h;window.addFlashSaleItemRow=G;window.removeFlashSaleItemRow=J;window.updateFlashSaleItemProduct=W;window.updateFlashSaleItemVariant=q;window.updateFlashSaleItemDraft=V;window.setFlashSalePresetDuration=U;window.saveFlashSaleSession=Y;window.toggleFlashSaleActive=z;window.deleteFlashSaleSession=_;window.reactivateFlashSaleSession=Q;window.resetSessionItemSold=X;window.resetAllSessionItemsSold=Z;window.resetDraftItemSold=K;window.resetAllDraftItemsSold=L;export{G as addFlashSaleItemRow,H as closeFlashSaleModal,_ as deleteFlashSaleSession,O as openFlashSaleModal,Q as reactivateFlashSaleSession,J as removeFlashSaleItemRow,w as renderFlashSaleAdminView,h as renderFlashSaleDraftItems,L as resetAllDraftItemsSold,Z as resetAllSessionItemsSold,K as resetDraftItemSold,X as resetSessionItemSold,Y as saveFlashSaleSession,U as setFlashSalePresetDuration,z as toggleFlashSaleActive,V as updateFlashSaleItemDraft,W as updateFlashSaleItemProduct,q as updateFlashSaleItemVariant};
