import{e as p,a as i,i as x,f as v,k as b}from"./module-print-QlsUd1Gt.js";import{S as I,k as A}from"./module-pos-CzmrLGjZ.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-member-Dk07kuDE.js";import"./module-faq-DKw5inma.js";let H=null,n=[];const $=a=>{if(!a)return"";const e=new Date(a);if(isNaN(e.getTime()))return"";const t=u=>String(u).padStart(2,"0"),s=e.getFullYear(),o=t(e.getMonth()+1),d=t(e.getDate()),l=t(e.getHours()),c=t(e.getMinutes());return`${s}-${o}-${d}T${l}:${c}`},j=a=>{if(!a)return"-";const e=new Date(a);return isNaN(e.getTime())?"-":e.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})},w=()=>{const a=p("admin-content");if(!a)return;const e=Array.isArray(i.flashSales)?i.flashSales:[];let t=0,s=0,o=0;e.forEach(l=>{I(l)==="active"&&t++,(l.items||[]).forEach(u=>{s++,o+=parseFloat(u.soldCount)||0})});const d=e.length===0?`
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
        </div>`:e.map(l=>{const c=I(l),u=c==="active"?'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider animate-pulse" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.3);"><i class="fa-solid fa-bolt" style="color: var(--color-primary);"></i> SEDANG BERLANGSUNG</span>':c==="upcoming"?'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300 dark:border-amber-800"><i class="fa-solid fa-clock"></i> SEGERA HADIR</span>':'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"><i class="fa-solid fa-check"></i> SELESAI</span>',m=l.channel==="pos"?"Hanya Kasir POS":l.channel==="web"?"Hanya Etalase Web":"Web & Kasir POS",f=Array.isArray(l.items)?l.items:[];return`
            <div class="bento-island-card rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4">
                <div>
                    <!-- Header Card Sesi -->
                    <div class="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div>
                            <div class="flex items-center gap-2 mb-1.5 flex-wrap">
                                ${u}
                                <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-store mr-1"></i>${m}</span>
                            </div>
                            <h3 class="font-extrabold text-base text-slate-900 dark:text-white leading-snug">
                                ${x(l.title||"Sesi Flash Sale")}
                            </h3>
                            <div class="flex items-center gap-3 mt-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium flex-wrap">
                                <span><i class="fa-regular fa-calendar-check text-[var(--color-primary)] mr-1"></i>${j(l.startTime)}</span>
                                <span class="text-slate-300 dark:text-slate-700">•</span>
                                <span><i class="fa-regular fa-clock text-amber-500 mr-1"></i>${j(l.endTime)}</span>
                            </div>
                        </div>

                        <!-- Aksi Tombol -->
                        <div class="flex items-center gap-1.5 shrink-0">
                            <button onclick="window.openFlashSaleModal('${x(l.id)}')" title="Edit Sesi" class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button onclick="window.deleteFlashSaleSession('${x(l.id)}')" title="Hapus Sesi" class="w-9 h-9 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Item Produk yang Diikutsertakan -->
                    <div class="mt-3.5 space-y-2.5">
                        <p class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Produk Promo (${f.length} Barang):
                        </p>
                        <div class="divide-y divide-slate-100 dark:divide-slate-800/80">
                            ${f.map(r=>{const h=(i.products||[]).find(P=>String(P.id)===String(r.productId)),T=h?h.name:r.productName||"Produk ID: "+r.productId,N=r.variantName?` (${r.variantName})`:"",S=parseFloat(r.quota)||0,D=parseFloat(r.soldCount)||0,k=parseFloat(r.normalPrice)||0,y=parseFloat(r.flashSalePrice)||0,B=k>0?Math.round((k-y)/k*100):r.discountPercent||0,F=h?r.variantName&&h.variants&&h.variants.find(P=>P.name===r.variantName)?.hpp||h.hpp:0,C=F>0&&y<F;return`
                                <div class="py-2.5 flex items-center justify-between gap-3 text-xs">
                                    <div class="min-w-0 flex-1">
                                        <p class="font-bold text-slate-800 dark:text-slate-100 truncate">${x(T+N)}</p>
                                        <div class="flex items-center gap-2 mt-0.5 flex-wrap">
                                            <span class="text-[11px] text-slate-400 line-through">${v(k)}</span>
                                            <span class="font-black" style="color: var(--color-primary);">${v(y)} (-${B}%)</span>
                                            ${C?`<span class="text-[9px] font-black text-rose-600 bg-rose-100 dark:bg-rose-950/60 px-1.5 py-0.2 rounded border border-rose-300">⚠️ DI BAWAH HPP (${v(F)})</span>`:""}
                                        </div>
                                    </div>

                                    <!-- Indikator Kuota Terjual Harmonis -->
                                    <div class="text-right shrink-0">
                                        <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400">Terjual ${D} / ${S||"∞"}</span>
                                        <div class="w-20 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1 border border-slate-200/50 dark:border-slate-700/50">
                                            <div class="h-full rounded-full" style="background: linear-gradient(90deg, #f59e0b 0%, var(--color-primary) 100%); width: ${S>0?Math.min(100,Math.round(D/S*100)):100}%;"></div>
                                        </div>
                                    </div>
                                </div>`}).join("")}
                        </div>
                    </div>
                </div>

                <!-- Footer Status Toggle -->
                <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span class="text-[11px] font-semibold text-slate-400">Status Saklar:</span>
                    <button onclick="window.toggleFlashSaleActive('${x(l.id)}')" class="px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${l.isActive!==!1?"bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800":"bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border border-slate-200"}">
                        <i class="fa-solid fa-power-off mr-1"></i> ${l.isActive!==!1?"Sesi Aktif":"Dinonaktifkan"}
                    </button>
                </div>
            </div>`}).join("");a.innerHTML=`
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
                    <span class="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">${t} Sesi</span>
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
                    <span class="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">${o} Unit</span>
                </div>
            </div>
        </div>

        <!-- Daftar Sesi Flash Sale Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            ${d}
        </div>
    </div>`},L=(a=null)=>{H=a;const e=a?(i.flashSales||[]).find(d=>d.id===a):null;n=e&&Array.isArray(e.items)?JSON.parse(JSON.stringify(e.items)):[];const t=e?e.startTime:new Date().toISOString(),s=e?e.endTime:new Date(Date.now()+4*3600*1e3).toISOString(),o=p("modal-flash-sale-form");o&&o.remove(),document.body.insertAdjacentHTML("beforeend",`
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
                <!-- Judul Sesi -->
                <div>
                    <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                        Judul Sesi Promo <span class="text-rose-500">*</span>
                    </label>
                    <input type="text" id="fs-input-title" value="${x(e?.title||"Flash Sale Spesial Hari Ini")}" placeholder="Contoh: Flash Sale Akhir Pekan Alat Teknik" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>

                <!-- Rentang Waktu (Mulai & Selesai) -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                            Waktu Mulai <span class="text-rose-500">*</span>
                        </label>
                        <input type="datetime-local" id="fs-input-start" value="${$(t)}" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                            Waktu Berakhir <span class="text-rose-500">*</span>
                        </label>
                        <input type="datetime-local" id="fs-input-end" value="${$(s)}" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
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
                        <button type="button" onclick="window.addFlashSaleItemRow()" class="btn-native-action px-3 py-1.5 rounded-xl text-white text-[11px] font-bold active:scale-95 transition-all cursor-pointer flex items-center gap-1.5" style="background: var(--color-primary);">
                            <i class="fa-solid fa-plus"></i>
                            <span>Tambah Produk</span>
                        </button>
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
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("flashSaleForm"),g(),requestAnimationFrame(()=>{const d=p("modal-flash-sale-form"),l=p("flash-sale-modal-card");d&&d.classList.remove("opacity-0"),l&&l.classList.remove("scale-95")})},M=(a=!1)=>{const e=p("modal-flash-sale-form"),t=p("flash-sale-modal-card");if(!e)return;const s=()=>{e.classList.add("opacity-0"),t&&t.classList.add("scale-95"),setTimeout(()=>e.remove(),200)};!a&&typeof window.requestCloseModal=="function"?window.requestCloseModal("flashSaleForm",!1,s):s()},g=()=>{const a=p("fs-items-container");if(!a)return;const e=Array.isArray(i.products)?i.products:[];if(n.length===0){a.innerHTML=`
        <div class="py-6 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-slate-400 text-xs">
            Belum ada produk yang dipilih. Klik tombol <b>"+ Tambah Produk"</b> di atas.
        </div>`;return}a.innerHTML=n.map((t,s)=>{const o=e.find(r=>String(r.id)===String(t.productId)),d=o&&Array.isArray(o.variants)?o.variants:[],l=parseFloat(t.normalPrice)||(o?parseFloat(o.price):0),c=parseFloat(t.flashSalePrice)||0,u=o?t.variantName&&d.length&&d.find(r=>r.name===t.variantName)?.hpp||o.hpp:0,m=u>0&&c>0&&c<u,f=l>0&&c>0?Math.round((l-c)/l*100):0;return`
        <div class="p-3.5 rounded-2xl border ${m?"border-rose-300 dark:border-rose-900 bg-rose-50/30 dark:bg-rose-950/20":"border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40"} space-y-2.5">
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
                        ${e.map(r=>`
                            <option value="${x(r.id)}" ${String(r.id)===String(t.productId)?"selected":""}>
                                ${x(r.name)} (${v(r.price)})
                            </option>
                        `).join("")}
                    </select>
                </div>

                ${d.length>0?`
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Pilih Varian (Opsional)</label>
                    <select onchange="window.updateFlashSaleItemVariant(${s}, this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        <option value="">Semua Varian</option>
                        ${d.map(r=>`
                            <option value="${x(r.name)}" ${r.name===t.variantName?"selected":""}>
                                ${x(r.name)} (${v(r.price||o.price)})
                            </option>
                        `).join("")}
                    </select>
                </div>`:""}
            </div>

            <!-- Harga Normal, Harga Flash Sale, & Kuota -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Harga Normal (Rp)</label>
                    <input type="number" min="0" value="${l||""}" onchange="window.updateFlashSaleItemDraft(${s}, 'normalPrice', this.value)" class="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>

                <div>
                    <label class="block text-[10px] font-bold mb-1" style="color: var(--color-primary);">
                        Harga Flash Sale (Rp) <span class="text-rose-500">*</span>
                    </label>
                    <input type="number" min="0" value="${c||""}" onchange="window.updateFlashSaleItemDraft(${s}, 'flashSalePrice', this.value)" placeholder="Harga Promo" class="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-black focus:outline-none focus:border-[var(--color-primary)]" style="color: var(--color-primary);">
                </div>

                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Kuota Promo (Qty Unit)</label>
                    <input type="number" min="1" value="${t.quota||10}" onchange="window.updateFlashSaleItemDraft(${s}, 'quota', this.value)" placeholder="Batas kuota" class="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>

            <!-- Margin Guard Alert -->
            <div class="flex items-center justify-between text-[10px] flex-wrap gap-2 pt-1">
                <div class="flex items-center gap-2">
                    ${f>0?`<span class="font-black" style="color: var(--color-primary);">Diskon: -${f}%</span>`:""}
                    ${u>0?`<span class="text-slate-400">Modal HPP: ${v(u)}</span>`:""}
                </div>
                ${m?`
                <div class="text-rose-600 font-bold flex items-center gap-1">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span>Peringatan: Harga Flash Sale di bawah modal HPP!</span>
                </div>`:""}
            </div>
        </div>`}).join("")},E=()=>{n.push({productId:"",variantName:"",normalPrice:0,flashSalePrice:0,quota:10,soldCount:0,maxPerCustomer:2}),g()},O=a=>{n.splice(a,1),g()},R=(a,e)=>{if(!n[a])return;const t=(i.products||[]).find(s=>String(s.id)===String(e));n[a].productId=e,n[a].variantName="",t&&(n[a].normalPrice=parseFloat(t.price)||0,n[a].flashSalePrice=Math.round((parseFloat(t.price)||0)*.8)),g()},q=(a,e)=>{if(!n[a])return;n[a].variantName=e;const t=(i.products||[]).find(s=>String(s.id)===String(n[a].productId));if(t&&e&&t.variants){const s=t.variants.find(o=>o.name===e);s&&s.price&&(n[a].normalPrice=parseFloat(s.price)||0,n[a].flashSalePrice=Math.round((parseFloat(s.price)||0)*.8))}g()},G=(a,e,t)=>{n[a]&&(n[a][e]=parseFloat(t)||0,g())},J=a=>{const e=p("fs-input-start"),t=p("fs-input-end");if(!e||!t)return;const s=e.value?new Date(e.value):new Date,o=new Date(s.getTime()+a*3600*1e3);t.value=$(o)},K=async()=>{const a=(p("fs-input-title")?.value||"").trim(),e=p("fs-input-start")?.value,t=p("fs-input-end")?.value,s=p("fs-input-channel")?.value||"both",o=p("fs-input-active")?.value!=="false";if(!a){b("Judul sesi Flash Sale wajib diisi.","warning");return}if(!e||!t){b("Waktu mulai dan berakhir wajib ditentukan.","warning");return}const d=new Date(e),l=new Date(t);if(l<=d){b("Waktu berakhir harus setelah waktu mulai.","warning");return}const c=n.filter(r=>r.productId&&r.flashSalePrice>0);if(c.length===0){b("Minimal tentukan 1 produk dengan harga Flash Sale yang valid.","warning");return}Array.isArray(i.flashSales)||(i.flashSales=[]);const u=H||`FS-${Date.now().toString(36).toUpperCase()}`,m={id:u,title:a,startTime:d.toISOString(),endTime:l.toISOString(),channel:s,isActive:o,updatedAt:Date.now(),items:c.map(r=>({productId:String(r.productId),variantName:r.variantName||"",normalPrice:parseFloat(r.normalPrice)||0,flashSalePrice:parseFloat(r.flashSalePrice)||0,quota:parseFloat(r.quota)||10,soldCount:parseFloat(r.soldCount)||0,maxPerCustomer:parseFloat(r.maxPerCustomer)||2}))},f=i.flashSales.findIndex(r=>r.id===u);f>-1?i.flashSales[f]=m:i.flashSales.unshift(m);try{await A(["flashSales"]),M(),w(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),b("Sesi Flash Sale berhasil disimpan dan disinkronkan!","success")}catch(r){console.error("[FlashSale] Gagal simpan sesi:",r),b("Gagal menyimpan ke server. Coba lagi.","error")}},W=async a=>{if(!Array.isArray(i.flashSales))return;const e=i.flashSales.find(t=>t.id===a);if(e){e.isActive=e.isActive===!1;try{await A(["flashSales"]),w(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),b(`Status sesi "${e.title}" berhasil diubah!`,"success")}catch{b("Gagal mengubah status sesi.","error")}}},V=a=>{if(!Array.isArray(i.flashSales))return;const e=i.flashSales.find(s=>s.id===a);if(!e)return;const t=async()=>{i.flashSales=i.flashSales.filter(s=>s.id!==a);try{await A(["flashSales"]),w(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),b("Sesi Flash Sale berhasil dihapus.","success")}catch{b("Gagal menghapus sesi.","error")}};typeof window.showConfirm=="function"?window.showConfirm("Hapus Sesi Flash Sale",`Apakah Anda yakin ingin menghapus sesi promo "${e.title}"?`,t,"Ya, Hapus",!0):t()};window.renderFlashSaleAdminView=w;window.openFlashSaleModal=L;window.closeFlashSaleModal=M;window.renderFlashSaleDraftItems=g;window.addFlashSaleItemRow=E;window.removeFlashSaleItemRow=O;window.updateFlashSaleItemProduct=R;window.updateFlashSaleItemVariant=q;window.updateFlashSaleItemDraft=G;window.setFlashSalePresetDuration=J;window.saveFlashSaleSession=K;window.toggleFlashSaleActive=W;window.deleteFlashSaleSession=V;export{E as addFlashSaleItemRow,M as closeFlashSaleModal,V as deleteFlashSaleSession,L as openFlashSaleModal,O as removeFlashSaleItemRow,w as renderFlashSaleAdminView,g as renderFlashSaleDraftItems,K as saveFlashSaleSession,J as setFlashSalePresetDuration,W as toggleFlashSaleActive,G as updateFlashSaleItemDraft,R as updateFlashSaleItemProduct,q as updateFlashSaleItemVariant};
