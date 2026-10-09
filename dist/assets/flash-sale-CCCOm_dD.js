import{e as p,a as i,i as x,f as k,k as b}from"./module-print-nOlEMvxU.js";import{S as I,p as A}from"./module-pos-DTeCCLvy.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-member-CBCNZ9CL.js";import"./module-faq-CLiTEV73.js";let M=null,n=[];const $=t=>{if(!t)return"";const e=new Date(t);if(isNaN(e.getTime()))return"";const a=u=>String(u).padStart(2,"0"),r=e.getFullYear(),o=a(e.getMonth()+1),d=a(e.getDate()),l=a(e.getHours()),c=a(e.getMinutes());return`${r}-${o}-${d}T${l}:${c}`},j=t=>{if(!t)return"-";const e=new Date(t);return isNaN(e.getTime())?"-":e.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})},v=()=>{const t=p("admin-content");if(!t)return;const e=Array.isArray(i.flashSales)?i.flashSales:[];let a=0,r=0,o=0;e.forEach(l=>{I(l)==="active"&&a++,(l.items||[]).forEach(u=>{r++,o+=parseFloat(u.soldCount)||0})});const d=e.length===0?`
        <div class="col-span-full py-16 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-8 bg-slate-50/50 dark:bg-slate-900/30">
            <div class="w-16 h-16 mx-auto mb-4 rounded-3xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center text-3xl shadow-sm">
                <i class="fa-solid fa-bolt"></i>
            </div>
            <h4 class="font-extrabold text-base text-slate-800 dark:text-white mb-1">Belum Ada Sesi Flash Sale</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-5 leading-relaxed">
                Buat sesi promo kilat untuk meningkatkan penjualan, cuci gudang barang lambat, atau memberikan diskon berbatas waktu dengan batas kuota khusus.
            </p>
            <button onclick="window.openFlashSaleModal()" class="px-5 py-2.5 rounded-xl text-white text-xs font-bold shadow-md shadow-rose-600/30 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-red-600">
                <i class="fa-solid fa-plus"></i>
                <span>Buat Sesi Flash Sale Pertama</span>
            </button>
        </div>`:e.map(l=>{const c=I(l),u=c==="active"?'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-300 dark:border-rose-800 animate-pulse"><i class="fa-solid fa-bolt text-rose-500"></i> SEDANG BERLANGSUNG</span>':c==="upcoming"?'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300 dark:border-amber-800"><i class="fa-solid fa-clock"></i> SEGERA HADIR</span>':'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"><i class="fa-solid fa-check"></i> SELESAI</span>',m=l.channel==="pos"?"Hanya Kasir POS":l.channel==="web"?"Hanya Etalase Web":"Web & Kasir POS",f=Array.isArray(l.items)?l.items:[];return`
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
                                <span><i class="fa-regular fa-clock text-rose-500 mr-1"></i>${j(l.endTime)}</span>
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
                            ${f.map(s=>{const h=(i.products||[]).find(P=>String(P.id)===String(s.productId)),T=h?h.name:s.productName||"Produk ID: "+s.productId,N=s.variantName?` (${s.variantName})`:"",S=parseFloat(s.quota)||0,D=parseFloat(s.soldCount)||0,w=parseFloat(s.normalPrice)||0,y=parseFloat(s.flashSalePrice)||0,B=w>0?Math.round((w-y)/w*100):s.discountPercent||0,F=h?s.variantName&&h.variants&&h.variants.find(P=>P.name===s.variantName)?.hpp||h.hpp:0,C=F>0&&y<F;return`
                                <div class="py-2.5 flex items-center justify-between gap-3 text-xs">
                                    <div class="min-w-0 flex-1">
                                        <p class="font-bold text-slate-800 dark:text-slate-100 truncate">${x(T+N)}</p>
                                        <div class="flex items-center gap-2 mt-0.5 flex-wrap">
                                            <span class="text-[11px] text-slate-400 line-through">${k(w)}</span>
                                            <span class="font-black text-rose-600 dark:text-rose-400">${k(y)} (-${B}%)</span>
                                            ${C?`<span class="text-[9px] font-black text-rose-600 bg-rose-100 dark:bg-rose-950/60 px-1.5 py-0.2 rounded border border-rose-300">⚠️ DI BAWAH HPP (${k(F)})</span>`:""}
                                        </div>
                                    </div>

                                    <!-- Indikator Kuota Terjual -->
                                    <div class="text-right shrink-0">
                                        <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400">Terjual ${D} / ${S||"∞"}</span>
                                        <div class="w-20 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1 border border-slate-200/50 dark:border-slate-700/50">
                                            <div class="h-full bg-gradient-to-r from-amber-500 to-rose-600 rounded-full" style="width: ${S>0?Math.min(100,Math.round(D/S*100)):100}%;"></div>
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
            </div>`}).join("");t.innerHTML=`
    <div class="space-y-6 max-w-6xl mx-auto">
        <!-- Top Bar Header -->
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center text-lg shadow-sm shadow-rose-600/30">
                        <i class="fa-solid fa-bolt"></i>
                    </div>
                    <span>Flash Sale &amp; Promo Kilat</span>
                </h2>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Atur jadwal diskon kilat berbatas waktu, pantau kuota persediaan khusus, dan picu lonjakan transaksi.
                </p>
            </div>

            <div class="flex items-center gap-2">
                <button onclick="window.openFlashSaleModal()" class="px-4 py-2.5 rounded-2xl text-white text-xs font-bold shadow-md shadow-rose-600/30 active:scale-95 transition-all cursor-pointer flex items-center gap-2 bg-gradient-to-r from-rose-600 via-red-600 to-amber-500">
                    <i class="fa-solid fa-plus text-sm"></i>
                    <span>Buat Sesi Flash Sale</span>
                </button>
            </div>
        </div>

        <!-- 3 Bento Metrik Ringkasan -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div class="bento-island-card p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-3.5 shadow-2xs">
                <div class="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900 flex items-center justify-center text-xl shrink-0">
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
                    <span class="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">${o} Unit</span>
                </div>
            </div>
        </div>

        <!-- Daftar Sesi Flash Sale Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            ${d}
        </div>
    </div>`},L=(t=null)=>{M=t;const e=t?(i.flashSales||[]).find(d=>d.id===t):null;n=e&&Array.isArray(e.items)?JSON.parse(JSON.stringify(e.items)):[];const a=e?e.startTime:new Date().toISOString(),r=e?e.endTime:new Date(Date.now()+4*3600*1e3).toISOString(),o=p("modal-flash-sale-form");o&&o.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="modal-flash-sale-form" class="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 transition-opacity duration-200 opacity-0" style="background: rgba(15, 23, 42, 0.75);">
        <div id="flash-sale-modal-card" class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden transform scale-95 transition-transform duration-200">
            <!-- Modal Header -->
            <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center text-lg shadow-sm">
                        <i class="fa-solid fa-bolt"></i>
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
                    <input type="text" id="fs-input-title" value="${x(e?.title||"Flash Sale Spesial Hari Ini")}" placeholder="Contoh: Flash Sale Akhir Pekan Alat Teknik" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-rose-500">
                </div>

                <!-- Rentang Waktu (Mulai & Selesai) -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                            Waktu Mulai <span class="text-rose-500">*</span>
                        </label>
                        <input type="datetime-local" id="fs-input-start" value="${$(a)}" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-rose-500">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                            Waktu Berakhir <span class="text-rose-500">*</span>
                        </label>
                        <input type="datetime-local" id="fs-input-end" value="${$(r)}" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-rose-500">
                    </div>
                </div>

                <!-- Preset Cepat Durasi -->
                <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mr-1">Preset Jam:</span>
                    <button type="button" onclick="window.setFlashSalePresetDuration(3)" class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                        +3 Jam
                    </button>
                    <button type="button" onclick="window.setFlashSalePresetDuration(6)" class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                        +6 Jam
                    </button>
                    <button type="button" onclick="window.setFlashSalePresetDuration(24)" class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                        1 Hari (24 Jam)
                    </button>
                    <button type="button" onclick="window.setFlashSalePresetDuration(48)" class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                        Akhir Pekan (2 Hari)
                    </button>
                </div>

                <!-- Saluran & Status -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                            Saluran Penjualan
                        </label>
                        <select id="fs-input-channel" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-rose-500">
                            <option value="both" ${e?.channel==="both"||!e?"selected":""}>Etalase Web &amp; Kasir POS (Semua)</option>
                            <option value="web" ${e?.channel==="web"?"selected":""}>Hanya Etalase Web / Online</option>
                            <option value="pos" ${e?.channel==="pos"?"selected":""}>Hanya Kasir POS Offline</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                            Status Sesi
                        </label>
                        <select id="fs-input-active" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-rose-500">
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
                                <i class="fa-solid fa-box text-rose-500"></i>
                                <span>Daftar Barang Flash Sale</span>
                            </h4>
                            <p class="text-[10px] text-slate-400">Tentukan harga diskon, kuota unit, dan proteksi margin modal.</p>
                        </div>
                        <button type="button" onclick="window.addFlashSaleItemRow()" class="px-3 py-1.5 rounded-xl text-white text-[11px] font-bold bg-rose-600 hover:bg-rose-700 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5">
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
                <button type="button" onclick="window.saveFlashSaleSession()" class="px-5 py-2.5 rounded-xl text-white font-black text-xs shadow-md shadow-rose-600/30 active:scale-95 transition-all cursor-pointer flex items-center gap-2 bg-gradient-to-r from-rose-600 to-red-600">
                    <i class="fa-solid fa-floppy-disk"></i>
                    <span>Simpan Sesi Flash Sale</span>
                </button>
            </div>
        </div>
    </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("flashSaleForm"),g(),requestAnimationFrame(()=>{const d=p("modal-flash-sale-form"),l=p("flash-sale-modal-card");d&&d.classList.remove("opacity-0"),l&&l.classList.remove("scale-95")})},H=(t=!1)=>{const e=p("modal-flash-sale-form"),a=p("flash-sale-modal-card");if(!e)return;const r=()=>{e.classList.add("opacity-0"),a&&a.classList.add("scale-95"),setTimeout(()=>e.remove(),200)};!t&&typeof window.requestCloseModal=="function"?window.requestCloseModal("flashSaleForm",!1,r):r()},g=()=>{const t=p("fs-items-container");if(!t)return;const e=Array.isArray(i.products)?i.products:[];if(n.length===0){t.innerHTML=`
        <div class="py-6 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-slate-400 text-xs">
            Belum ada produk yang dipilih. Klik tombol <b>"+ Tambah Produk"</b> di atas.
        </div>`;return}t.innerHTML=n.map((a,r)=>{const o=e.find(s=>String(s.id)===String(a.productId)),d=o&&Array.isArray(o.variants)?o.variants:[],l=parseFloat(a.normalPrice)||(o?parseFloat(o.price):0),c=parseFloat(a.flashSalePrice)||0,u=o?a.variantName&&d.length&&d.find(s=>s.name===a.variantName)?.hpp||o.hpp:0,m=u>0&&c>0&&c<u,f=l>0&&c>0?Math.round((l-c)/l*100):0;return`
        <div class="p-3.5 rounded-2xl border ${m?"border-rose-300 dark:border-rose-900 bg-rose-50/30 dark:bg-rose-950/20":"border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40"} space-y-2.5">
            <div class="flex items-center justify-between gap-2">
                <span class="text-[10px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    Item #${r+1}
                </span>
                <button type="button" onclick="window.removeFlashSaleItemRow(${r})" class="text-rose-500 hover:text-rose-700 text-xs font-bold cursor-pointer">
                    <i class="fa-solid fa-trash-can mr-1"></i> Hapus
                </button>
            </div>

            <!-- Pilihan Produk & Varian -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Pilih Produk</label>
                    <select onchange="window.updateFlashSaleItemProduct(${r}, this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-rose-500">
                        <option value="">-- Pilih Produk Katalog --</option>
                        ${e.map(s=>`
                            <option value="${x(s.id)}" ${String(s.id)===String(a.productId)?"selected":""}>
                                ${x(s.name)} (${k(s.price)})
                            </option>
                        `).join("")}
                    </select>
                </div>

                ${d.length>0?`
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Pilih Varian (Opsional)</label>
                    <select onchange="window.updateFlashSaleItemVariant(${r}, this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-rose-500">
                        <option value="">Semua Varian</option>
                        ${d.map(s=>`
                            <option value="${x(s.name)}" ${s.name===a.variantName?"selected":""}>
                                ${x(s.name)} (${k(s.price||o.price)})
                            </option>
                        `).join("")}
                    </select>
                </div>`:""}
            </div>

            <!-- Harga Normal, Harga Flash Sale, & Kuota -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Harga Normal (Rp)</label>
                    <input type="number" min="0" value="${l||""}" onchange="window.updateFlashSaleItemDraft(${r}, 'normalPrice', this.value)" class="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-white">
                </div>

                <div>
                    <label class="block text-[10px] font-bold text-rose-600 dark:text-rose-400 mb-1">
                        Harga Flash Sale (Rp) <span class="text-rose-500">*</span>
                    </label>
                    <input type="number" min="0" value="${c||""}" onchange="window.updateFlashSaleItemDraft(${r}, 'flashSalePrice', this.value)" placeholder="Harga Promo" class="w-full px-3 py-1.5 rounded-xl border border-rose-300 dark:border-rose-800 bg-white dark:bg-slate-900 text-xs font-black text-rose-600 dark:text-rose-400 focus:outline-none focus:border-rose-500">
                </div>

                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Kuota Promo (Qty Unit)</label>
                    <input type="number" min="1" value="${a.quota||10}" onchange="window.updateFlashSaleItemDraft(${r}, 'quota', this.value)" placeholder="Batas kuota" class="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-white">
                </div>
            </div>

            <!-- Margin Guard Alert -->
            <div class="flex items-center justify-between text-[10px] flex-wrap gap-2 pt-1">
                <div class="flex items-center gap-2">
                    ${f>0?`<span class="font-black text-rose-600">Diskon: -${f}%</span>`:""}
                    ${u>0?`<span class="text-slate-400">Modal HPP: ${k(u)}</span>`:""}
                </div>
                ${m?`
                <div class="text-rose-600 font-bold flex items-center gap-1">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span>Peringatan: Harga Flash Sale di bawah modal HPP!</span>
                </div>`:""}
            </div>
        </div>`}).join("")},E=()=>{n.push({productId:"",variantName:"",normalPrice:0,flashSalePrice:0,quota:10,soldCount:0,maxPerCustomer:2}),g()},O=t=>{n.splice(t,1),g()},R=(t,e)=>{if(!n[t])return;const a=(i.products||[]).find(r=>String(r.id)===String(e));n[t].productId=e,n[t].variantName="",a&&(n[t].normalPrice=parseFloat(a.price)||0,n[t].flashSalePrice=Math.round((parseFloat(a.price)||0)*.8)),g()},q=(t,e)=>{if(!n[t])return;n[t].variantName=e;const a=(i.products||[]).find(r=>String(r.id)===String(n[t].productId));if(a&&e&&a.variants){const r=a.variants.find(o=>o.name===e);r&&r.price&&(n[t].normalPrice=parseFloat(r.price)||0,n[t].flashSalePrice=Math.round((parseFloat(r.price)||0)*.8))}g()},G=(t,e,a)=>{n[t]&&(n[t][e]=parseFloat(a)||0,g())},J=t=>{const e=p("fs-input-start"),a=p("fs-input-end");if(!e||!a)return;const r=e.value?new Date(e.value):new Date,o=new Date(r.getTime()+t*3600*1e3);a.value=$(o)},K=async()=>{const t=(p("fs-input-title")?.value||"").trim(),e=p("fs-input-start")?.value,a=p("fs-input-end")?.value,r=p("fs-input-channel")?.value||"both",o=p("fs-input-active")?.value!=="false";if(!t){b("Judul sesi Flash Sale wajib diisi.","warning");return}if(!e||!a){b("Waktu mulai dan berakhir wajib ditentukan.","warning");return}const d=new Date(e),l=new Date(a);if(l<=d){b("Waktu berakhir harus setelah waktu mulai.","warning");return}const c=n.filter(s=>s.productId&&s.flashSalePrice>0);if(c.length===0){b("Minimal tentukan 1 produk dengan harga Flash Sale yang valid.","warning");return}Array.isArray(i.flashSales)||(i.flashSales=[]);const u=M||`FS-${Date.now().toString(36).toUpperCase()}`,m={id:u,title:t,startTime:d.toISOString(),endTime:l.toISOString(),channel:r,isActive:o,updatedAt:Date.now(),items:c.map(s=>({productId:String(s.productId),variantName:s.variantName||"",normalPrice:parseFloat(s.normalPrice)||0,flashSalePrice:parseFloat(s.flashSalePrice)||0,quota:parseFloat(s.quota)||10,soldCount:parseFloat(s.soldCount)||0,maxPerCustomer:parseFloat(s.maxPerCustomer)||2}))},f=i.flashSales.findIndex(s=>s.id===u);f>-1?i.flashSales[f]=m:i.flashSales.unshift(m);try{await A(["flashSales"]),H(),v(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),b("Sesi Flash Sale berhasil disimpan dan disinkronkan!","success")}catch(s){console.error("[FlashSale] Gagal simpan sesi:",s),b("Gagal menyimpan ke server. Coba lagi.","error")}},W=async t=>{if(!Array.isArray(i.flashSales))return;const e=i.flashSales.find(a=>a.id===t);if(e){e.isActive=e.isActive===!1;try{await A(["flashSales"]),v(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),b(`Status sesi "${e.title}" berhasil diubah!`,"success")}catch{b("Gagal mengubah status sesi.","error")}}},V=t=>{if(!Array.isArray(i.flashSales))return;const e=i.flashSales.find(r=>r.id===t);if(!e)return;const a=async()=>{i.flashSales=i.flashSales.filter(r=>r.id!==t);try{await A(["flashSales"]),v(),typeof window.renderStorefrontFlashSale=="function"&&window.renderStorefrontFlashSale(),b("Sesi Flash Sale berhasil dihapus.","success")}catch{b("Gagal menghapus sesi.","error")}};typeof window.showConfirm=="function"?window.showConfirm("Hapus Sesi Flash Sale",`Apakah Anda yakin ingin menghapus sesi promo "${e.title}"?`,a,"Ya, Hapus",!0):a()};window.renderFlashSaleAdminView=v;window.openFlashSaleModal=L;window.closeFlashSaleModal=H;window.renderFlashSaleDraftItems=g;window.addFlashSaleItemRow=E;window.removeFlashSaleItemRow=O;window.updateFlashSaleItemProduct=R;window.updateFlashSaleItemVariant=q;window.updateFlashSaleItemDraft=G;window.setFlashSalePresetDuration=J;window.saveFlashSaleSession=K;window.toggleFlashSaleActive=W;window.deleteFlashSaleSession=V;export{E as addFlashSaleItemRow,H as closeFlashSaleModal,V as deleteFlashSaleSession,L as openFlashSaleModal,O as removeFlashSaleItemRow,v as renderFlashSaleAdminView,g as renderFlashSaleDraftItems,K as saveFlashSaleSession,J as setFlashSalePresetDuration,W as toggleFlashSaleActive,G as updateFlashSaleItemDraft,R as updateFlashSaleItemProduct,q as updateFlashSaleItemVariant};
