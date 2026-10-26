import{a as n,k as p,e as f,i as x,f as S,am as R}from"./module-print-or1hfJTm.js";import{s as y,U as M}from"./module-pos-D7jr6ILt.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-member-BY1UCWtM.js";import"./module-faq-D5zWKgSG.js";let H=null,i=[];const j=t=>{if(!t)return"";const e=new Date(t);if(isNaN(e.getTime()))return"";const a=c=>String(c).padStart(2,"0"),r=e.getFullYear(),l=a(e.getMonth()+1),d=a(e.getDate()),s=a(e.getHours()),o=a(e.getMinutes());return`${r}-${l}-${d}T${s}:${o}`},C=t=>{if(!t)return"-";const e=new Date(t);return isNaN(e.getTime())?"-":e.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})},v=()=>{const t=f("admin-content");if(!t)return;const e=Array.isArray(n.flashSales)?n.flashSales:[];let a=0,r=0,l=0;e.forEach(s=>{M(s)==="active"&&a++,(s.items||[]).forEach(c=>{r++,l+=parseFloat(c.soldCount)||0})});const d=e.length===0?`
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
        </div>`:e.map(s=>{const o=M(s),c=o==="active"?'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider animate-pulse" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.3);"><i class="fa-solid fa-bolt" style="color: var(--color-primary);"></i> SEDANG BERLANGSUNG</span>':o==="upcoming"?'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300 dark:border-amber-800"><i class="fa-solid fa-clock"></i> SEGERA HADIR</span>':'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"><i class="fa-solid fa-check"></i> SELESAI</span>',g=s.channel==="pos"?"Hanya Kasir POS":s.channel==="web"?"Hanya Etalase Web":"Web & Kasir POS",w=Array.isArray(s.items)?s.items:[];return`
            <div class="bento-island-card rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4">
                <div>
                    <!-- Header Card Sesi -->
                    <div class="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div>
                            <div class="flex items-center gap-2 mb-1.5 flex-wrap">
                                ${c}
                                <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-store mr-1"></i>${g}</span>
                            </div>
                            <h3 class="font-extrabold text-base text-slate-900 dark:text-white leading-snug">
                                ${x(s.title||"Sesi Flash Sale")}
                            </h3>
                            <div class="flex items-center gap-3 mt-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium flex-wrap">
                                <span><i class="fa-regular fa-calendar-check text-[var(--color-primary)] mr-1"></i>${C(s.startTime)}</span>
                                <span class="text-slate-300 dark:text-slate-700">•</span>
                                <span><i class="fa-regular fa-clock text-amber-500 mr-1"></i>${C(s.endTime)}</span>
                            </div>
                        </div>

                        <!-- Aksi Tombol -->
                        <div class="flex items-center gap-1.5 shrink-0">
                            ${o==="ended"?`
                            <button onclick="window.reactivateFlashSaleSession('${x(s.id)}', 4)" title="Naikkan kembali ke Flash Sale sekarang (+4 Jam)" class="btn-native-action px-2.5 py-1.5 rounded-xl text-white text-[11px] font-black active:scale-95 transition-all cursor-pointer flex items-center gap-1 shadow-xs" style="background: var(--color-primary);">
                                <i class="fa-solid fa-bolt text-amber-300"></i>
                                <span>Naikkan Lagi</span>
                            </button>`:""}
                            <button onclick="window.openFlashSaleModal('${x(s.id)}')" title="Edit Sesi" class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button onclick="window.deleteFlashSaleSession('${x(s.id)}')" title="Hapus Sesi" class="w-9 h-9 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Item Produk yang Diikutsertakan -->
                    <div class="mt-3.5 space-y-2.5">
                        <div class="flex items-center justify-between">
                            <p class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                Produk Promo (${w.length} Barang):
                            </p>
                            ${w.some(u=>(parseFloat(u.soldCount)||0)>0)?`
                            <button type="button" onclick="window.resetAllSessionItemsSold('${x(s.id)}')" class="text-[10px] text-amber-600 hover:text-amber-700 dark:text-amber-400 font-bold flex items-center gap-1 cursor-pointer">
                                <i class="fa-solid fa-rotate-left text-[9px]"></i> Reset Semua Kuota
                            </button>`:""}
                        </div>
                        <div class="divide-y divide-slate-100 dark:divide-slate-800/80">
                            ${w.map((u,b)=>{const k=(n.products||[]).find(I=>String(I.id)===String(u.productId)),m=k?k.name:u.productName||"Produk ID: "+u.productId,B=u.variantName?` (${u.variantName})`:"",F=parseFloat(u.quota)||0,$=parseFloat(u.soldCount)||0,P=F>0&&$>=F,A=parseFloat(u.normalPrice)||0,D=parseFloat(u.flashSalePrice)||0,E=A>0?Math.round((A-D)/A*100):u.discountPercent||0,T=k?u.variantName&&k.variants&&k.variants.find(I=>I.name===u.variantName)?.hpp||k.hpp:0,O=T>0&&D<T;return`
                                <div class="py-2.5 flex items-center justify-between gap-3 text-xs">
                                    <div class="min-w-0 flex-1">
                                        <div class="flex items-center gap-1.5">
                                            <p class="font-bold text-slate-800 dark:text-slate-100 truncate">${x(m+B)}</p>
                                            ${P?'<span class="shrink-0 px-1.5 py-0.2 rounded text-[9px] font-black uppercase tracking-wider bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400">HABIS</span>':""}
                                        </div>
                                        <div class="flex items-center gap-2 mt-0.5 flex-wrap">
                                            <span class="text-[11px] text-slate-400 line-through">${S(A)}</span>
                                            <span class="font-black" style="color: var(--color-primary);">${S(D)} (-${E}%)</span>
                                            ${O?`<span class="text-[9px] font-black text-rose-600 bg-rose-100 dark:bg-rose-950/60 px-1.5 py-0.2 rounded border border-rose-300 inline-flex items-center gap-1"><i class="fa-solid fa-triangle-exclamation text-[8.5px]"></i> DI BAWAH HPP (${S(T)})</span>`:""}
                                        </div>
                                    </div>

                                    <!-- Indikator Kuota Terjual Harmonis -->
                                    <div class="text-right shrink-0">
                                        <div class="flex items-center justify-end gap-1">
                                            <span class="text-[10px] font-bold ${P?"text-rose-500":"text-slate-500 dark:text-slate-400"}">Terjual ${$} / ${F||"∞"}</span>
                                            ${$>0?`
                                            <button onclick="window.resetSessionItemSold('${x(s.id)}', ${b})" title="Reset kuota terjual produk ini ke 0" class="text-amber-500 hover:text-amber-600 text-[10px] font-black cursor-pointer ml-1 p-0.5">
                                                <i class="fa-solid fa-rotate-left"></i>
                                            </button>`:""}
                                        </div>
                                        <div class="w-20 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1 border border-slate-200/50 dark:border-slate-700/50">
                                            <div class="h-full rounded-full ${P?"bg-rose-500":""}" style="${P?"":"background: linear-gradient(90deg, #f59e0b 0%, var(--color-primary) 100%);"} width: ${F>0?Math.min(100,Math.round($/F*100)):100}%;"></div>
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
                            ${o==="active"?"Tayang di Etalase":o==="upcoming"?"Menunggu Jadwal":s.isActive!==!1?"Waktu Telah Selesai":"Dinonaktifkan"}
                        </span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        ${o==="ended"?`
                        <button onclick="window.reactivateFlashSaleSession('${x(s.id)}', 4)" class="btn-native-action px-3 py-1 rounded-xl text-white text-xs font-black active:scale-95 transition-all cursor-pointer flex items-center gap-1 shadow-xs" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);">
                            <i class="fa-solid fa-bolt text-amber-300"></i>
                            <span>Naikkan Lagi</span>
                        </button>`:""}
                        <button onclick="window.toggleFlashSaleActive('${x(s.id)}')" class="px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${s.isActive!==!1&&o==="active"?"bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800":"bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border border-slate-200"}">
                            <i class="fa-solid fa-power-off mr-1"></i> ${s.isActive!==!1&&o==="active"?"Sesi Aktif":s.isActive!==!1?"Aktifkan (Perpanjang)":"Dinonaktifkan"}
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
                    <span class="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">${r} Item</span>
                </div>
            </div>

            <div class="bento-island-card p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-3.5 shadow-2xs">
                <div class="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 border border-emerald-200 dark:border-emerald-900 flex items-center justify-center text-xl shrink-0">
                    <i class="fa-solid fa-fire"></i>
                </div>
                <div>
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Unit Terjual</span>
                    <span class="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">${l} Unit</span>
                </div>
            </div>
        </div>

        <!-- Daftar Sesi Flash Sale Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            ${d}
        </div>
    </div>`},L=(t=null)=>{H=t;const e=t?(n.flashSales||[]).find(c=>c.id===t):null;i=e&&Array.isArray(e.items)?JSON.parse(JSON.stringify(e.items)):[];const a=Date.now(),r=e?.endTime?typeof window.parseSafeTimestamp=="function"?window.parseSafeTimestamp(e.endTime):new Date(e.endTime).getTime():0,l=e&&(!r||r<=a);let d=e?e.startTime:new Date(a).toISOString(),s=e?e.endTime:new Date(a+4*3600*1e3).toISOString();if(l){const c=e.startTime&&e.endTime?Math.max(36e5,(typeof window.parseSafeTimestamp=="function"?window.parseSafeTimestamp(e.endTime):new Date(e.endTime).getTime())-(typeof window.parseSafeTimestamp=="function"?window.parseSafeTimestamp(e.startTime):new Date(e.startTime).getTime())):144e5;d=new Date(a).toISOString(),s=new Date(a+c).toISOString()}const o=f("modal-flash-sale-form");o&&o.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-flash-sale-form" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 transition-opacity duration-300 opacity-0 overflow-hidden" onclick="if(event.target===this) window.closeFlashSaleModal()">
        <div id="modal-flash-sale-form-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-3xl translate-y-full sm:translate-y-8 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-transform duration-300" onclick="event.stopPropagation()">
            <!-- Pull Indicator for Mobile Bottom Sheet -->
            <div class="pull-indicator sm:hidden" style="margin: 8px auto 2px; width: 44px; height: 5px; border-radius: 9999px; background: rgba(148, 163, 184, 0.4);"></div>

            <!-- Modal Header -->
            <div class="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-white dark:bg-slate-900">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl text-white flex items-center justify-center text-base sm:text-lg shrink-0 shadow-xs" style="background: var(--color-primary);">
                        <i class="fa-solid fa-bolt text-amber-300"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                            ${e?"Edit Sesi Flash Sale":"Buat Sesi Flash Sale Baru"}
                        </h3>
                        <p class="text-[11px] sm:text-xs text-slate-400 font-medium">Atur judul, jadwal tayang, dan daftar barang promo kilat.</p>
                    </div>
                </div>
                <button type="button" onclick="window.closeFlashSaleModal()" class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-700 dark:hover:text-white flex items-center justify-center text-sm cursor-pointer transition-colors leading-none">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <!-- Modal Body Scrollable -->
            <div class="p-4 sm:p-6 overflow-y-auto overflow-x-hidden space-y-4 sm:space-y-5 flex-1 custom-scrollbar min-h-0">
                ${l?`
                <div class="p-3.5 sm:p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-800 dark:text-amber-200 flex items-center justify-between gap-2.5 flex-wrap shadow-2xs">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid fa-clock-rotate-left text-amber-500 text-base shrink-0"></i>
                        <span class="font-medium">Sesi ini sebelumnya telah selesai. Waktu promo otomatis disesuaikan ke jam sekarang agar langsung tayang saat disimpan.</span>
                    </div>
                    <button type="button" onclick="window.resetAllDraftItemsSold()" class="shrink-0 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black cursor-pointer shadow-xs active:scale-95 transition-all">
                        <i class="fa-solid fa-rotate-left mr-1"></i> Reset Kuota Terjual
                    </button>
                </div>`:""}

                <!-- Judul Sesi -->
                <div>
                    <label class="block text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-heading text-[10px]" style="color: var(--color-primary);"></i>
                        <span>Judul Sesi Promo</span>
                        <span style="color: var(--color-primary);">*</span>
                    </label>
                    <input type="text" id="fs-input-title" value="${x(e?.title||"Flash Sale Spesial Hari Ini")}" placeholder="Contoh: Flash Sale Akhir Pekan Alat Teknik" class="w-full h-11 text-xs sm:text-sm font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] transition-all">
                </div>

                <!-- Rentang Waktu (Mulai & Selesai) -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                        <label class="block text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <i class="fa-regular fa-calendar-plus text-[10px]" style="color: var(--color-primary);"></i>
                            <span>Waktu Mulai</span>
                            <span style="color: var(--color-primary);">*</span>
                        </label>
                        <input type="datetime-local" id="fs-input-start" value="${j(d)}" class="w-full h-11 text-xs sm:text-sm font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] transition-all">
                    </div>
                    <div>
                        <label class="block text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <i class="fa-regular fa-calendar-check text-[10px]" style="color: var(--color-primary);"></i>
                            <span>Waktu Berakhir</span>
                            <span style="color: var(--color-primary);">*</span>
                        </label>
                        <input type="datetime-local" id="fs-input-end" value="${j(s)}" class="w-full h-11 text-xs sm:text-sm font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] transition-all">
                    </div>
                </div>

                <!-- Preset Cepat Durasi -->
                <div class="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2 flex-wrap">
                    <span class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mr-1 flex items-center gap-1">
                        <i class="fa-solid fa-bolt text-amber-500"></i> Preset Jam:
                    </span>
                    <button type="button" onclick="window.setFlashSalePresetDuration(3)" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all cursor-pointer active:scale-95 shadow-2xs">
                        +3 Jam
                    </button>
                    <button type="button" onclick="window.setFlashSalePresetDuration(6)" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all cursor-pointer active:scale-95 shadow-2xs">
                        +6 Jam
                    </button>
                    <button type="button" onclick="window.setFlashSalePresetDuration(24)" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all cursor-pointer active:scale-95 shadow-2xs">
                        1 Hari (24 Jam)
                    </button>
                    <button type="button" onclick="window.setFlashSalePresetDuration(48)" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all cursor-pointer active:scale-95 shadow-2xs">
                        Akhir Pekan (2 Hari)
                    </button>
                </div>

                <!-- Saluran & Status -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                        <label class="block text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <i class="fa-solid fa-store text-[10px]" style="color: var(--color-primary);"></i>
                            <span>Saluran Penjualan</span>
                        </label>
                        <select id="fs-input-channel" class="w-full h-11 text-xs sm:text-sm font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] transition-all cursor-pointer">
                            <option value="both" ${e?.channel==="both"||!e?"selected":""}>Etalase Web &amp; Kasir POS (Semua)</option>
                            <option value="web" ${e?.channel==="web"?"selected":""}>Hanya Etalase Web / Online</option>
                            <option value="pos" ${e?.channel==="pos"?"selected":""}>Hanya Kasir POS Offline</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <i class="fa-solid fa-power-off text-[10px]" style="color: var(--color-primary);"></i>
                            <span>Status Sesi</span>
                        </label>
                        <select id="fs-input-active" class="w-full h-11 text-xs sm:text-sm font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] transition-all cursor-pointer">
                            <option value="true" ${e?.isActive!==!1?"selected":""}>Aktif (Berjalan Sesuai Jam)</option>
                            <option value="false" ${e?.isActive===!1?"selected":""}>Nonaktifkan Sementara</option>
                        </select>
                    </div>
                </div>

                <!-- Bagian Item Produk Flash Sale -->
                <div class="pt-4 border-t border-slate-200/80 dark:border-slate-800">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                        <div class="min-w-0 flex-1">
                            <h4 class="font-black text-xs sm:text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[11px]" style="background: var(--color-primary);">
                                    <i class="fa-solid fa-box-open"></i>
                                </span>
                                <span>Daftar Barang Flash Sale</span>
                            </h4>
                            <p class="text-[11px] text-slate-400 mt-0.5">Tentukan harga diskon kilat, kuota promo, dan proteksi margin modal.</p>
                        </div>
                        <div class="flex items-center gap-2 shrink-0 self-start sm:self-auto">
                            ${i.some(c=>(parseFloat(c.soldCount)||0)>0)?`
                            <button type="button" onclick="window.resetAllDraftItemsSold()" title="Reset semua kuota terjual ke 0" class="btn-native-action h-9 px-3 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-bold active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs">
                                <i class="fa-solid fa-rotate-left text-amber-500"></i>
                                <span>Reset Kuota</span>
                            </button>`:""}
                            <button type="button" onclick="window.addFlashSaleItemRow()" class="btn-native-action h-9 sm:h-10 px-4 rounded-xl text-white text-xs font-bold active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 shadow-xs" style="background: var(--color-primary);">
                                <i class="fa-solid fa-plus text-xs"></i>
                                <span>Tambah Produk</span>
                            </button>
                        </div>
                    </div>

                    <!-- Container Baris Produk -->
                    <div id="fs-items-container" class="space-y-3 overflow-x-hidden">
                        <!-- Diisi via renderFlashSaleDraftItems() -->
                    </div>
                </div>
            </div>

            <!-- Modal Footer -->
            <div class="px-4 sm:px-6 py-3 sm:py-3.5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-end gap-2.5 shrink-0 z-10" style="padding-bottom: max(0.85rem, env(safe-area-inset-bottom))">
                <button type="button" onclick="window.closeFlashSaleModal()" class="h-10 sm:h-11 px-5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer">
                    Batal
                </button>
                <button type="button" onclick="window.saveFlashSaleSession()" class="btn-native-action h-10 sm:h-11 px-6 rounded-xl text-white font-black text-xs active:scale-95 transition-all cursor-pointer flex items-center gap-2 shadow-xs hover:opacity-95" style="background: var(--color-primary);">
                    <i class="fa-solid fa-floppy-disk text-xs"></i>
                    <span>Simpan Sesi Flash Sale</span>
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("flashSaleForm"),h(),requestAnimationFrame(()=>{const c=f("modal-flash-sale-form"),g=f("modal-flash-sale-form-box")||f("flash-sale-modal-card");c&&c.classList.remove("opacity-0"),g&&(g.classList.remove("translate-y-full"),g.classList.remove("sm:translate-y-8"),g.classList.remove("scale-95"))})},N=(t=!1)=>{const e=f("modal-flash-sale-form"),a=f("modal-flash-sale-form-box")||f("flash-sale-modal-card");if(!e)return;const r=()=>{e.classList.add("opacity-0"),a&&(a.classList.add("translate-y-full"),a.classList.add("sm:translate-y-8"),a.classList.add("scale-95")),setTimeout(()=>e.remove(),250)};!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("flashSaleForm",!1,r):r()},h=()=>{const t=f("fs-items-container");if(!t)return;const e=Array.isArray(n.products)?n.products:[];if(i.length===0){t.innerHTML=`
        <div class="py-8 px-4 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-50/60 dark:bg-slate-850/40 my-1">
            <div class="w-14 h-14 mx-auto mb-3 rounded-2xl flex items-center justify-center text-2xl shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.2);">
                <i class="fa-solid fa-bolt"></i>
            </div>
            <h5 class="font-extrabold text-sm text-slate-800 dark:text-white mb-1">Belum Ada Produk Promo Terpilih</h5>
            <p class="text-xs text-slate-400 max-w-sm mx-auto mb-4 leading-relaxed">
                Pilih produk katalog untuk diskon kilat berbatas waktu dan alokasikan kuota promo.
            </p>
            <button type="button" onclick="window.addFlashSaleItemRow()" class="btn-native-action h-10 px-4 rounded-xl text-white text-xs font-bold active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2 shadow-sm" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 3px 10px rgba(var(--color-primary-rgb), 0.35);">
                <i class="fa-solid fa-plus text-xs"></i>
                <span>Tambah Produk Pertama</span>
            </button>
        </div>`;return}t.innerHTML=i.map((a,r)=>{const l=e.find(m=>String(m.id)===String(a.productId)),d=l&&Array.isArray(l.variants)?l.variants:[],s=a.variantName&&d.length?d.find(m=>m.name===a.variantName):null,o=parseFloat(a.normalPrice)||(s?parseFloat(s.price):l?parseFloat(l.price):0),c=parseFloat(a.flashSalePrice)||0,g=s?parseFloat(s.hpp)||parseFloat(l.hpp)||0:l&&parseFloat(l.hpp)||0,w=g>0&&c>0&&c<g,u=o>0&&c>0?Math.round((o-c)/o*100):0,b=s?parseFloat(s.stock)||0:l&&parseFloat(l.stock)||0,k=s&&s.img?s.img:l?l.img:"";return`
        <div class="p-3.5 sm:p-4 rounded-2xl border ${w?"border-rose-300 dark:border-rose-900 bg-rose-50/40 dark:bg-rose-950/20":"border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800/60"} space-y-3 shadow-2xs overflow-hidden">
            <div class="flex items-center justify-between gap-2 flex-wrap">
                <div class="flex items-center gap-2 flex-wrap min-w-0">
                    ${k?`<img src="${R(k,"w100-rw")}" alt="Thumb" class="w-8 h-8 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0 shadow-2xs">`:""}
                    <span class="px-2.5 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                        Item #${r+1}
                    </span>
                    ${a.variantName?`
                    <span class="px-2.5 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 flex items-center gap-1 shadow-2xs">
                        <i class="fa-solid fa-shapes text-[9px]"></i> Varian: ${x(a.variantName)}
                    </span>`:d.length>0?'<span class="px-2 py-0.5 rounded-lg text-[9.5px] font-bold bg-slate-200/70 text-slate-600 dark:bg-slate-700 dark:text-slate-300">Semua Varian</span>':""}
                    ${l?`<span class="text-[11px] text-slate-400 font-medium ml-1">Stok: <b>${b}</b> ${l.unit||"unit"}</span>`:""}
                </div>
                <button type="button" onclick="window.removeFlashSaleItemRow(${r})" class="btn-native-action h-8 px-2.5 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-xs font-bold cursor-pointer transition-all flex items-center gap-1 active:scale-95 shadow-2xs">
                    <i class="fa-solid fa-trash-can text-[11px]"></i>
                    <span>Hapus</span>
                </button>
            </div>

            <!-- Pilihan Produk & Varian Multi-Varian -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                        Pilih Produk Katalog
                    </label>
                    <select onchange="window.updateFlashSaleItemProduct(${r}, this.value)" class="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] transition-all cursor-pointer">
                        <option value="">-- Pilih Produk Katalog --</option>
                        ${e.map(m=>`
                            <option value="${x(m.id)}" ${String(m.id)===String(a.productId)?"selected":""}>
                                ${x(m.name)} (${S(m.price)})${m.variants&&m.variants.length>0?` [${m.variants.length} Varian]`:""}
                            </option>
                        `).join("")}
                    </select>
                </div>

                ${d.length>0?`
                <div>
                    <div class="flex items-center justify-between mb-1">
                        <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Pilih Varian
                        </label>
                        <button type="button" onclick="window.addAllVariantsToFlashSaleDraft(${r})" class="text-[10px] font-black cursor-pointer hover:underline flex items-center gap-1 active:scale-95" style="color: var(--color-primary);" title="Otomatis pecah menjadi baris tersendiri untuk setiap varian">
                            <i class="fa-solid fa-shapes"></i> Muat Semua (${d.length})
                        </button>
                    </div>
                    <select onchange="window.updateFlashSaleItemVariant(${r}, this.value)" class="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] transition-all cursor-pointer">
                        <option value="">Semua Varian (Produk Global)</option>
                        ${d.map(m=>`
                            <option value="${x(m.name)}" ${m.name===a.variantName?"selected":""}>
                                ${x(m.name)} (${S(m.price||l.price)})${m.stock!=null?` - Stok: ${m.stock}`:""}
                            </option>
                        `).join("")}
                    </select>
                </div>`:""}
            </div>

            <!-- Harga Normal, Diskon %, Harga Flash Sale, & Kuota -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                        Harga Normal
                    </label>
                    <input type="number" min="0" value="${o||""}" onchange="window.updateFlashSaleItemDraft(${r}, 'normalPrice', this.value)" class="w-full h-10 sm:h-11 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] transition-all">
                </div>

                <div>
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                        Diskon (%)
                    </label>
                    <input type="number" min="1" max="99" value="${u||""}" onchange="window.updateFlashSaleItemDiscountPct(${r}, this.value)" placeholder="20" class="w-full h-10 sm:h-11 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] transition-all">
                </div>

                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider mb-1" style="color: var(--color-primary);">
                        Harga Kilat (Rp) <span class="text-rose-500">*</span>
                    </label>
                    <input type="number" min="0" value="${c||""}" onchange="window.updateFlashSaleItemDraft(${r}, 'flashSalePrice', this.value)" placeholder="Harga Promo" class="w-full h-10 sm:h-11 px-3 rounded-xl border-2 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm font-black focus:outline-hidden transition-all" style="color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.45);">
                </div>

                <div>
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                        Kuota Promo (Qty)
                    </label>
                    <input type="number" min="1" value="${a.quota||10}" onchange="window.updateFlashSaleItemDraft(${r}, 'quota', this.value)" placeholder="10" class="w-full h-10 sm:h-11 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] transition-all">
                </div>
            </div>

            <!-- Kuota Terjual & Reset Helper -->
            <div class="flex items-center justify-between text-[11px] bg-slate-50 dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 flex-wrap gap-2">
                <span class="font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                    <i class="fa-solid fa-fire text-amber-500"></i>
                    <span>Keterjualan:</span>
                    <b class="${(parseFloat(a.soldCount)||0)>=(parseFloat(a.quota)||10)?"text-rose-500":"font-black"}" style="${(parseFloat(a.soldCount)||0)>=(parseFloat(a.quota)||10)?"":"color: var(--color-primary);"}">${a.soldCount||0} / ${a.quota||10} Unit Terjual</b>
                </span>
                ${(parseFloat(a.soldCount)||0)>0?`
                <button type="button" onclick="window.resetDraftItemSold(${r})" class="btn-native-action px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-[10px] font-black flex items-center gap-1 cursor-pointer active:scale-95 transition-all shadow-xs">
                    <i class="fa-solid fa-rotate-left text-[9px]"></i> Reset ke 0
                </button>`:'<span class="text-[10px] font-medium text-slate-400">Kuota promo penuh tersedia</span>'}
            </div>

            <!-- Margin Guard Alert -->
            <div class="flex items-center justify-between text-xs flex-wrap gap-2 pt-0.5">
                <div class="flex items-center gap-2">
                    ${u>0?`<span class="px-2 py-0.5 rounded-lg text-[10px] font-black" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">Diskon -${u}%</span>`:""}
                    ${g>0?`<span class="text-[11px] text-slate-400 font-medium">Modal HPP: <b>${S(g)}</b></span>`:""}
                </div>
                ${w?`
                <div class="text-rose-600 dark:text-rose-400 font-bold text-xs flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900">
                    <i class="fa-solid fa-triangle-exclamation text-rose-500"></i>
                    <span>Peringatan: Harga Flash Sale di bawah modal HPP!</span>
                </div>`:""}
            </div>
        </div>`}).join("")},K=t=>{if(!i[t])return;const e=i[t],a=(n.products||[]).find(d=>String(d.id)===String(e.productId));if(!a||!Array.isArray(a.variants)||a.variants.length===0){p("Produk ini tidak memiliki daftar varian.","info");return}const r=parseFloat(e.quota)||10,l=a.variants.map(d=>{const s=parseFloat(d.price)||parseFloat(a.price)||0,o=Math.round(s*.8);return{productId:String(a.id),variantName:d.name||"",normalPrice:s,flashSalePrice:o,quota:r,soldCount:0,maxPerCustomer:e.maxPerCustomer||2}});i.splice(t,1,...l),h(),p(`Berhasil memuat ${l.length} varian produk "${a.name}" ke draft Flash Sale!`,"success")},q=(t,e)=>{if(!i[t])return;const a=parseFloat(e)||0,r=parseFloat(i[t].normalPrice)||0;r>0&&a>=0&&a<100&&(i[t].flashSalePrice=Math.round(r*(1-a/100)),h())},V=t=>{i[t]&&(i[t].soldCount=0,h(),p("Kuota terjual produk ini berhasil di-reset ke 0!","success"))},G=()=>{i.forEach(t=>{t&&(t.soldCount=0)}),h(),p("Seluruh kuota terjual berhasil di-reset ke 0! Produk siap dinaikkan kembali.","success")},J=()=>{i.push({productId:"",variantName:"",normalPrice:0,flashSalePrice:0,quota:10,soldCount:0,maxPerCustomer:2}),h()},W=t=>{i.splice(t,1),h()},U=(t,e)=>{if(!i[t])return;const a=(n.products||[]).find(r=>String(r.id)===String(e));i[t].productId=e,i[t].variantName="",a&&(i[t].normalPrice=parseFloat(a.price)||0,i[t].flashSalePrice=Math.round((parseFloat(a.price)||0)*.8)),h()},z=(t,e)=>{if(!i[t])return;i[t].variantName=e;const a=(n.products||[]).find(r=>String(r.id)===String(i[t].productId));if(a)if(e&&a.variants){const r=a.variants.find(l=>l.name===e);r&&r.price&&(i[t].normalPrice=parseFloat(r.price)||0,i[t].flashSalePrice=Math.round((parseFloat(r.price)||0)*.8))}else i[t].normalPrice=parseFloat(a.price)||0,i[t].flashSalePrice=Math.round((parseFloat(a.price)||0)*.8);h()},Q=(t,e,a)=>{i[t]&&(i[t][e]=parseFloat(a)||0,h())},Y=t=>{const e=f("fs-input-start"),a=f("fs-input-end");if(!e||!a)return;const r=e.value?new Date(e.value):new Date,l=new Date(r.getTime()+t*3600*1e3);a.value=j(l)},X=async()=>{const t=(f("fs-input-title")?.value||"").trim(),e=f("fs-input-start")?.value,a=f("fs-input-end")?.value,r=f("fs-input-channel")?.value||"both",l=f("fs-input-active")?.value!=="false";if(!t){p("Judul sesi Flash Sale wajib diisi.","warning");return}if(!e||!a){p("Waktu mulai dan berakhir wajib ditentukan.","warning");return}const d=new Date(e),s=new Date(a);if(s<=d){p("Waktu berakhir harus setelah waktu mulai.","warning");return}const o=Date.now();if(l&&s.getTime()<=o){p("Waktu berakhir sudah lewat dari waktu saat ini. Gunakan preset jam (+3 Jam / +6 Jam) agar sesi langsung aktif di etalase toko.","warning");return}const c=i.filter(b=>b.productId&&b.flashSalePrice>0);if(c.length===0){p("Minimal tentukan 1 produk dengan harga Flash Sale yang valid.","warning");return}Array.isArray(n.flashSales)||(n.flashSales=[]);const g=H||`FS-${Date.now().toString(36).toUpperCase()}`,w={id:g,title:t,startTime:d.toISOString(),endTime:s.toISOString(),channel:r,isActive:l,updatedAt:o,items:c.map(b=>({productId:String(b.productId),variantName:b.variantName||"",normalPrice:parseFloat(b.normalPrice)||0,flashSalePrice:parseFloat(b.flashSalePrice)||0,quota:parseFloat(b.quota)||10,soldCount:parseFloat(b.soldCount)||0,maxPerCustomer:parseFloat(b.maxPerCustomer)||2}))},u=n.flashSales.findIndex(b=>b.id===g);u>-1?n.flashSales[u]=w:n.flashSales.unshift(w);try{await y(["flashSales"]),N(),v(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),typeof window.rCat=="function"&&window.rCat(),p("Sesi Flash Sale berhasil disimpan dan disinkronkan!","success")}catch(b){console.error("[FlashSale] Gagal simpan sesi:",b),p("Gagal menyimpan ke server. Coba lagi.","error")}},Z=async t=>{if(!Array.isArray(n.flashSales))return;const e=n.flashSales.find(o=>o.id===t);if(!e)return;const a=e.isActive===!1;e.isActive=a;const r=Date.now(),l=e.endTime?typeof window.parseSafeTimestamp=="function"?window.parseSafeTimestamp(e.endTime):new Date(e.endTime).getTime():0,d=!l||l<=r;let s=!1;if(a&&d){const o=e.startTime&&e.endTime?Math.max(36e5,(typeof window.parseSafeTimestamp=="function"?window.parseSafeTimestamp(e.endTime):new Date(e.endTime).getTime())-(typeof window.parseSafeTimestamp=="function"?window.parseSafeTimestamp(e.startTime):new Date(e.startTime).getTime())):144e5;e.startTime=new Date(r).toISOString(),e.endTime=new Date(r+o).toISOString(),e.updatedAt=r,s=!0,Array.isArray(e.items)&&e.items.forEach(c=>{c&&(c.soldCount=0)})}else e.updatedAt=r;try{await y(["flashSales"]),v(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),typeof window.rCat=="function"&&window.rCat(),a?p(s?`Sesi "${e.title}" berhasil diaktifkan kembali! Waktu diperpanjang dan produk langsung aktif di etalase toko.`:`Sesi "${e.title}" kini aktif!`,"success"):p(`Sesi "${e.title}" telah dinonaktifkan.`,"info")}catch{p("Gagal mengubah status sesi.","error")}},_=async(t,e=4)=>{if(!Array.isArray(n.flashSales))return;const a=n.flashSales.find(s=>s.id===t);if(!a)return;const r=Date.now(),l=e*3600*1e3;a.startTime=new Date(r).toISOString(),a.endTime=new Date(r+l).toISOString(),a.isActive=!0,a.updatedAt=r,Array.isArray(a.items)&&a.items.forEach(s=>{s&&(s.soldCount=0)});const d=n.flashSales.findIndex(s=>s.id===t);d>0&&(n.flashSales.splice(d,1),n.flashSales.unshift(a));try{await y(["flashSales"]),v(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),typeof window.rCat=="function"&&window.rCat(),p(`Sesi Flash Sale "${a.title}" berhasil dinaikkan kembali! Aktif selama ${e} jam dan langsung tayang di etalase toko.`,"success")}catch{p("Gagal menaikkan sesi Flash Sale.","error")}},ee=async(t,e)=>{if(!Array.isArray(n.flashSales))return;const a=n.flashSales.find(r=>r.id===t);if(!(!a||!Array.isArray(a.items)||!a.items[e])){a.items[e].soldCount=0,a.updatedAt=Date.now();try{await y(["flashSales"]),v(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),typeof window.rCat=="function"&&window.rCat();const r=a.items[e].productName||"Produk Promo";p(`Kuota produk "${r}" berhasil di-reset ke 0!`,"success")}catch{p("Gagal mereset kuota produk.","error")}}},ae=async t=>{if(!Array.isArray(n.flashSales))return;const e=n.flashSales.find(a=>a.id===t);if(!(!e||!Array.isArray(e.items))){e.items.forEach(a=>{a&&(a.soldCount=0)}),e.updatedAt=Date.now();try{await y(["flashSales"]),v(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),typeof window.rCat=="function"&&window.rCat(),p(`Seluruh kuota produk di sesi "${e.title}" berhasil di-reset ke 0!`,"success")}catch{p("Gagal mereset kuota produk.","error")}}},te=t=>{if(!Array.isArray(n.flashSales))return;const e=n.flashSales.find(r=>r.id===t);if(!e)return;const a=async()=>{n.flashSales=n.flashSales.filter(r=>r.id!==t);try{await y(["flashSales"]),v(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),typeof window.rCat=="function"&&window.rCat(),p("Sesi Flash Sale berhasil dihapus.","success")}catch{p("Gagal menghapus sesi.","error")}};typeof window.showConfirm=="function"?window.showConfirm("Hapus Sesi Flash Sale",`Apakah Anda yakin ingin menghapus sesi promo "${e.title}"?`,a,"Ya, Hapus",!0):a()};window.renderFlashSaleAdminView=v;window.openFlashSaleModal=L;window.closeFlashSaleModal=N;window.renderFlashSaleDraftItems=h;window.addFlashSaleItemRow=J;window.removeFlashSaleItemRow=W;window.updateFlashSaleItemProduct=U;window.updateFlashSaleItemVariant=z;window.updateFlashSaleItemDraft=Q;window.setFlashSalePresetDuration=Y;window.saveFlashSaleSession=X;window.toggleFlashSaleActive=Z;window.deleteFlashSaleSession=te;window.reactivateFlashSaleSession=_;window.resetSessionItemSold=ee;window.resetAllSessionItemsSold=ae;window.resetDraftItemSold=V;window.resetAllDraftItemsSold=G;window.addAllVariantsToFlashSaleDraft=K;window.updateFlashSaleItemDiscountPct=q;export{K as addAllVariantsToFlashSaleDraft,J as addFlashSaleItemRow,N as closeFlashSaleModal,te as deleteFlashSaleSession,L as openFlashSaleModal,_ as reactivateFlashSaleSession,W as removeFlashSaleItemRow,v as renderFlashSaleAdminView,h as renderFlashSaleDraftItems,G as resetAllDraftItemsSold,ae as resetAllSessionItemsSold,V as resetDraftItemSold,ee as resetSessionItemSold,X as saveFlashSaleSession,Y as setFlashSalePresetDuration,Z as toggleFlashSaleActive,q as updateFlashSaleItemDiscountPct,Q as updateFlashSaleItemDraft,U as updateFlashSaleItemProduct,z as updateFlashSaleItemVariant};
