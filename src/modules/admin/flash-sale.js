/**
 * ============================================================
 * MODUL ADMIN CMS: MANAJEMEN FLASH SALE & PROMO KILAT
 * Mengatur pembuatan sesi promo berbatas waktu, alokasi kuota khusus,
 * proteksi margin HPP (Margin Guard), dan pelacakan penjualan kilat.
 * ============================================================
 */

import { appData } from '../../core/state.js';
import { el, setH, esc, fCur, showToast, getOptImg } from '../../core/utils.js';
import { checkFlashSaleStatus } from '../../core/pricing.js';
import { saveApp } from '../../services/storage.js';

let editingSessionId = null;
let sessionItemDrafts = [];

/**
 * Format datetime ke format input HTML (YYYY-MM-DDTHH:mm)
 */
const toDatetimeLocal = (dateVal) => {
    if (!dateVal) return '';
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return '';
    const pad = (n) => String(n).padStart(2, '0');
    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1);
    const date = pad(d.getDate());
    const hours = pad(d.getHours());
    const minutes = pad(d.getMinutes());
    return `${year}-${month}-${date}T${hours}:${minutes}`;
};

/**
 * Format tanggal untuk tampilan Indonesia yang mudah dibaca
 */
const formatDisplayDate = (dateVal) => {
    if (!dateVal) return '-';
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return '-';
    return d.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

/**
 * Render Halaman Utama Manajemen Flash Sale di CMS Admin
 */
export const renderFlashSaleAdminView = () => {
    const content = el('admin-content');
    if (!content) return;

    const list = Array.isArray(appData.flashSales) ? appData.flashSales : [];

    // Hitung statistik
    let totalActive = 0;
    let totalItems = 0;
    let totalSold = 0;

    list.forEach(sess => {
        const st = checkFlashSaleStatus(sess);
        if (st === 'active') totalActive++;
        (sess.items || []).forEach(it => {
            totalItems++;
            totalSold += (parseFloat(it.soldCount) || 0);
        });
    });

    const sessionsHtml = list.length === 0
        ? `
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
        </div>`
        : list.map(sess => {
            const status = checkFlashSaleStatus(sess);
            const statusBadge = status === 'active'
                ? `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-300 dark:border-rose-800 animate-pulse"><i class="fa-solid fa-bolt text-rose-500"></i> SEDANG BERLANGSUNG</span>`
                : status === 'upcoming'
                    ? `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300 dark:border-amber-800"><i class="fa-solid fa-clock"></i> SEGERA HADIR</span>`
                    : `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"><i class="fa-solid fa-check"></i> SELESAI</span>`;

            const channelLabel = sess.channel === 'pos' ? 'Hanya Kasir POS' : (sess.channel === 'web' ? 'Hanya Etalase Web' : 'Web & Kasir POS');
            const items = Array.isArray(sess.items) ? sess.items : [];

            return `
            <div class="bento-island-card rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4">
                <div>
                    <!-- Header Card Sesi -->
                    <div class="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div>
                            <div class="flex items-center gap-2 mb-1.5 flex-wrap">
                                ${statusBadge}
                                <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-store mr-1"></i>${channelLabel}</span>
                            </div>
                            <h3 class="font-extrabold text-base text-slate-900 dark:text-white leading-snug">
                                ${esc(sess.title || 'Sesi Flash Sale')}
                            </h3>
                            <div class="flex items-center gap-3 mt-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium flex-wrap">
                                <span><i class="fa-regular fa-calendar-check text-[var(--color-primary)] mr-1"></i>${formatDisplayDate(sess.startTime)}</span>
                                <span class="text-slate-300 dark:text-slate-700">•</span>
                                <span><i class="fa-regular fa-clock text-rose-500 mr-1"></i>${formatDisplayDate(sess.endTime)}</span>
                            </div>
                        </div>

                        <!-- Aksi Tombol -->
                        <div class="flex items-center gap-1.5 shrink-0">
                            <button onclick="window.openFlashSaleModal('${esc(sess.id)}')" title="Edit Sesi" class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button onclick="window.deleteFlashSaleSession('${esc(sess.id)}')" title="Hapus Sesi" class="w-9 h-9 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xs active:scale-95 transition-all cursor-pointer">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Item Produk yang Diikutsertakan -->
                    <div class="mt-3.5 space-y-2.5">
                        <p class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Produk Promo (${items.length} Barang):
                        </p>
                        <div class="divide-y divide-slate-100 dark:divide-slate-800/80">
                            ${items.map(it => {
                                const prod = (appData.products || []).find(p => String(p.id) === String(it.productId));
                                const pName = prod ? prod.name : (it.productName || 'Produk ID: ' + it.productId);
                                const vName = it.variantName ? ` (${it.variantName})` : '';
                                const quota = parseFloat(it.quota) || 0;
                                const sold = parseFloat(it.soldCount) || 0;
                                const normP = parseFloat(it.normalPrice) || 0;
                                const fsP = parseFloat(it.flashSalePrice) || 0;
                                const discountPct = normP > 0 ? Math.round(((normP - fsP) / normP) * 100) : (it.discountPercent || 0);
                                const hpp = prod ? (it.variantName && prod.variants ? (prod.variants.find(v => v.name === it.variantName)?.hpp || prod.hpp) : prod.hpp) : 0;
                                const isMarginLoss = hpp > 0 && fsP < hpp;

                                return `
                                <div class="py-2.5 flex items-center justify-between gap-3 text-xs">
                                    <div class="min-w-0 flex-1">
                                        <p class="font-bold text-slate-800 dark:text-slate-100 truncate">${esc(pName + vName)}</p>
                                        <div class="flex items-center gap-2 mt-0.5 flex-wrap">
                                            <span class="text-[11px] text-slate-400 line-through">${fCur(normP)}</span>
                                            <span class="font-black text-rose-600 dark:text-rose-400">${fCur(fsP)} (-${discountPct}%)</span>
                                            ${isMarginLoss ? `<span class="text-[9px] font-black text-rose-600 bg-rose-100 dark:bg-rose-950/60 px-1.5 py-0.2 rounded border border-rose-300">⚠️ DI BAWAH HPP (${fCur(hpp)})</span>` : ''}
                                        </div>
                                    </div>

                                    <!-- Indikator Kuota Terjual -->
                                    <div class="text-right shrink-0">
                                        <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400">Terjual ${sold} / ${quota || '∞'}</span>
                                        <div class="w-20 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1 border border-slate-200/50 dark:border-slate-700/50">
                                            <div class="h-full bg-gradient-to-r from-amber-500 to-rose-600 rounded-full" style="width: ${quota > 0 ? Math.min(100, Math.round((sold / quota) * 100)) : 100}%;"></div>
                                        </div>
                                    </div>
                                </div>`;
                            }).join('')}
                        </div>
                    </div>
                </div>

                <!-- Footer Status Toggle -->
                <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span class="text-[11px] font-semibold text-slate-400">Status Saklar:</span>
                    <button onclick="window.toggleFlashSaleActive('${esc(sess.id)}')" class="px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${sess.isActive !== false ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border border-slate-200'}">
                        <i class="fa-solid fa-power-off mr-1"></i> ${sess.isActive !== false ? 'Sesi Aktif' : 'Dinonaktifkan'}
                    </button>
                </div>
            </div>`;
        }).join('');

    content.innerHTML = `
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
                    <span class="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">${totalActive} Sesi</span>
                </div>
            </div>

            <div class="bento-island-card p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-3.5 shadow-2xs">
                <div class="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-500 border border-amber-200 dark:border-amber-900 flex items-center justify-center text-xl shrink-0">
                    <i class="fa-solid fa-box-open"></i>
                </div>
                <div>
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Produk Promo</span>
                    <span class="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">${totalItems} Item</span>
                </div>
            </div>

            <div class="bento-island-card p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-3.5 shadow-2xs">
                <div class="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 border border-emerald-200 dark:border-emerald-900 flex items-center justify-center text-xl shrink-0">
                    <i class="fa-solid fa-fire"></i>
                </div>
                <div>
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Unit Terjual</span>
                    <span class="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">${totalSold} Unit</span>
                </div>
            </div>
        </div>

        <!-- Daftar Sesi Flash Sale Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            ${sessionsHtml}
        </div>
    </div>`;
};

/**
 * Buka Modal Pembuat / Editor Sesi Flash Sale
 */
export const openFlashSaleModal = (sessionId = null) => {
    editingSessionId = sessionId;
    const existing = sessionId
        ? (appData.flashSales || []).find(s => s.id === sessionId)
        : null;

    // Inisialisasi draft items
    sessionItemDrafts = existing && Array.isArray(existing.items)
        ? JSON.parse(JSON.stringify(existing.items))
        : [];

    const defaultStart = existing ? existing.startTime : new Date().toISOString();
    const defaultEnd = existing ? existing.endTime : new Date(Date.now() + 4 * 3600 * 1000).toISOString(); // Default 4 jam

    const existingModal = el('modal-flash-sale-form');
    if (existingModal) existingModal.remove();

    document.body.insertAdjacentHTML('beforeend', `
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
                            ${existing ? 'Edit Sesi Flash Sale' : 'Buat Sesi Flash Sale Baru'}
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
                    <input type="text" id="fs-input-title" value="${esc(existing?.title || 'Flash Sale Spesial Hari Ini')}" placeholder="Contoh: Flash Sale Akhir Pekan Alat Teknik" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-rose-500">
                </div>

                <!-- Rentang Waktu (Mulai & Selesai) -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                            Waktu Mulai <span class="text-rose-500">*</span>
                        </label>
                        <input type="datetime-local" id="fs-input-start" value="${toDatetimeLocal(defaultStart)}" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-rose-500">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                            Waktu Berakhir <span class="text-rose-500">*</span>
                        </label>
                        <input type="datetime-local" id="fs-input-end" value="${toDatetimeLocal(defaultEnd)}" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-rose-500">
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
                            <option value="both" ${existing?.channel === 'both' || !existing ? 'selected' : ''}>Etalase Web &amp; Kasir POS (Semua)</option>
                            <option value="web" ${existing?.channel === 'web' ? 'selected' : ''}>Hanya Etalase Web / Online</option>
                            <option value="pos" ${existing?.channel === 'pos' ? 'selected' : ''}>Hanya Kasir POS Offline</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                            Status Sesi
                        </label>
                        <select id="fs-input-active" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-rose-500">
                            <option value="true" ${existing?.isActive !== false ? 'selected' : ''}>Aktif (Berjalan Sesuai Jam)</option>
                            <option value="false" ${existing?.isActive === false ? 'selected' : ''}>Nonaktifkan Sementara</option>
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
    </div>`);

    // Daftarkan modal ke history router
    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('flashSaleForm');
    }

    renderFlashSaleDraftItems();

    requestAnimationFrame(() => {
        const m = el('modal-flash-sale-form');
        const c = el('flash-sale-modal-card');
        if (m) m.classList.remove('opacity-0');
        if (c) c.classList.remove('scale-95');
    });
};

/**
 * Tutup Modal Form Flash Sale
 */
export const closeFlashSaleModal = (skipHistory = false) => {
    const m = el('modal-flash-sale-form');
    const c = el('flash-sale-modal-card');
    if (!m) return;

    const performClose = () => {
        m.classList.add('opacity-0');
        if (c) c.classList.add('scale-95');
        setTimeout(() => m.remove(), 200);
    };

    if (!skipHistory && typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('flashSaleForm', false, performClose);
    } else {
        performClose();
    }
};

/**
 * Render Baris-Baris Produk dalam Formulir Sesi
 */
export const renderFlashSaleDraftItems = () => {
    const container = el('fs-items-container');
    if (!container) return;

    const products = Array.isArray(appData.products) ? appData.products : [];

    if (sessionItemDrafts.length === 0) {
        container.innerHTML = `
        <div class="py-6 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-slate-400 text-xs">
            Belum ada produk yang dipilih. Klik tombol <b>"+ Tambah Produk"</b> di atas.
        </div>`;
        return;
    }

    container.innerHTML = sessionItemDrafts.map((item, idx) => {
        const selectedProd = products.find(p => String(p.id) === String(item.productId));
        const variants = selectedProd && Array.isArray(selectedProd.variants) ? selectedProd.variants : [];
        const normalPrice = parseFloat(item.normalPrice) || (selectedProd ? parseFloat(selectedProd.price) : 0);
        const flashPrice = parseFloat(item.flashSalePrice) || 0;
        const hpp = selectedProd ? (item.variantName && variants.length ? (variants.find(v => v.name === item.variantName)?.hpp || selectedProd.hpp) : selectedProd.hpp) : 0;
        const isLoss = hpp > 0 && flashPrice > 0 && flashPrice < hpp;
        const discountPct = normalPrice > 0 && flashPrice > 0 ? Math.round(((normalPrice - flashPrice) / normalPrice) * 100) : 0;

        return `
        <div class="p-3.5 rounded-2xl border ${isLoss ? 'border-rose-300 dark:border-rose-900 bg-rose-50/30 dark:bg-rose-950/20' : 'border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40'} space-y-2.5">
            <div class="flex items-center justify-between gap-2">
                <span class="text-[10px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    Item #${idx + 1}
                </span>
                <button type="button" onclick="window.removeFlashSaleItemRow(${idx})" class="text-rose-500 hover:text-rose-700 text-xs font-bold cursor-pointer">
                    <i class="fa-solid fa-trash-can mr-1"></i> Hapus
                </button>
            </div>

            <!-- Pilihan Produk & Varian -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Pilih Produk</label>
                    <select onchange="window.updateFlashSaleItemProduct(${idx}, this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-rose-500">
                        <option value="">-- Pilih Produk Katalog --</option>
                        ${products.map(p => `
                            <option value="${esc(p.id)}" ${String(p.id) === String(item.productId) ? 'selected' : ''}>
                                ${esc(p.name)} (${fCur(p.price)})
                            </option>
                        `).join('')}
                    </select>
                </div>

                ${variants.length > 0 ? `
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Pilih Varian (Opsional)</label>
                    <select onchange="window.updateFlashSaleItemVariant(${idx}, this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-rose-500">
                        <option value="">Semua Varian</option>
                        ${variants.map(v => `
                            <option value="${esc(v.name)}" ${v.name === item.variantName ? 'selected' : ''}>
                                ${esc(v.name)} (${fCur(v.price || selectedProd.price)})
                            </option>
                        `).join('')}
                    </select>
                </div>` : ''}
            </div>

            <!-- Harga Normal, Harga Flash Sale, & Kuota -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Harga Normal (Rp)</label>
                    <input type="number" min="0" value="${normalPrice || ''}" onchange="window.updateFlashSaleItemDraft(${idx}, 'normalPrice', this.value)" class="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-white">
                </div>

                <div>
                    <label class="block text-[10px] font-bold text-rose-600 dark:text-rose-400 mb-1">
                        Harga Flash Sale (Rp) <span class="text-rose-500">*</span>
                    </label>
                    <input type="number" min="0" value="${flashPrice || ''}" onchange="window.updateFlashSaleItemDraft(${idx}, 'flashSalePrice', this.value)" placeholder="Harga Promo" class="w-full px-3 py-1.5 rounded-xl border border-rose-300 dark:border-rose-800 bg-white dark:bg-slate-900 text-xs font-black text-rose-600 dark:text-rose-400 focus:outline-none focus:border-rose-500">
                </div>

                <div>
                    <label class="block text-[10px] font-bold text-slate-500 mb-1">Kuota Promo (Qty Unit)</label>
                    <input type="number" min="1" value="${item.quota || 10}" onchange="window.updateFlashSaleItemDraft(${idx}, 'quota', this.value)" placeholder="Batas kuota" class="w-full px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-white">
                </div>
            </div>

            <!-- Margin Guard Alert -->
            <div class="flex items-center justify-between text-[10px] flex-wrap gap-2 pt-1">
                <div class="flex items-center gap-2">
                    ${discountPct > 0 ? `<span class="font-black text-rose-600">Diskon: -${discountPct}%</span>` : ''}
                    ${hpp > 0 ? `<span class="text-slate-400">Modal HPP: ${fCur(hpp)}</span>` : ''}
                </div>
                ${isLoss ? `
                <div class="text-rose-600 font-bold flex items-center gap-1">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span>Peringatan: Harga Flash Sale di bawah modal HPP!</span>
                </div>` : ''}
            </div>
        </div>`;
    }).join('');
};

/**
 * Tambah Baris Produk Baru di Draft
 */
export const addFlashSaleItemRow = () => {
    sessionItemDrafts.push({
        productId: '',
        variantName: '',
        normalPrice: 0,
        flashSalePrice: 0,
        quota: 10,
        soldCount: 0,
        maxPerCustomer: 2
    });
    renderFlashSaleDraftItems();
};

/**
 * Hapus Baris Produk dari Draft
 */
export const removeFlashSaleItemRow = (idx) => {
    sessionItemDrafts.splice(idx, 1);
    renderFlashSaleDraftItems();
};

/**
 * Handler Pemilihan Produk di Baris
 */
export const updateFlashSaleItemProduct = (idx, prodId) => {
    if (!sessionItemDrafts[idx]) return;
    const prod = (appData.products || []).find(p => String(p.id) === String(prodId));
    sessionItemDrafts[idx].productId = prodId;
    sessionItemDrafts[idx].variantName = '';
    if (prod) {
        sessionItemDrafts[idx].normalPrice = parseFloat(prod.price) || 0;
        sessionItemDrafts[idx].flashSalePrice = Math.round((parseFloat(prod.price) || 0) * 0.8); // Default diskon 20%
    }
    renderFlashSaleDraftItems();
};

/**
 * Handler Pemilihan Varian di Baris
 */
export const updateFlashSaleItemVariant = (idx, vName) => {
    if (!sessionItemDrafts[idx]) return;
    sessionItemDrafts[idx].variantName = vName;
    const prod = (appData.products || []).find(p => String(p.id) === String(sessionItemDrafts[idx].productId));
    if (prod && vName && prod.variants) {
        const v = prod.variants.find(vv => vv.name === vName);
        if (v && v.price) {
            sessionItemDrafts[idx].normalPrice = parseFloat(v.price) || 0;
            sessionItemDrafts[idx].flashSalePrice = Math.round((parseFloat(v.price) || 0) * 0.8);
        }
    }
    renderFlashSaleDraftItems();
};

/**
 * Update Field Angka / Teks di Draft
 */
export const updateFlashSaleItemDraft = (idx, field, val) => {
    if (!sessionItemDrafts[idx]) return;
    sessionItemDrafts[idx][field] = parseFloat(val) || 0;
    renderFlashSaleDraftItems();
};

/**
 * Preset Cepat Durasi
 */
export const setFlashSalePresetDuration = (hours) => {
    const startInp = el('fs-input-start');
    const endInp = el('fs-input-end');
    if (!startInp || !endInp) return;

    const startDate = startInp.value ? new Date(startInp.value) : new Date();
    const endDate = new Date(startDate.getTime() + hours * 3600 * 1000);
    endInp.value = toDatetimeLocal(endDate);
};

/**
 * Simpan Sesi Flash Sale ke Firestore & State
 */
export const saveFlashSaleSession = async () => {
    const title = (el('fs-input-title')?.value || '').trim();
    const startTimeVal = el('fs-input-start')?.value;
    const endTimeVal = el('fs-input-end')?.value;
    const channel = el('fs-input-channel')?.value || 'both';
    const isActive = el('fs-input-active')?.value !== 'false';

    if (!title) {
        showToast('Judul sesi Flash Sale wajib diisi.', 'warning');
        return;
    }
    if (!startTimeVal || !endTimeVal) {
        showToast('Waktu mulai dan berakhir wajib ditentukan.', 'warning');
        return;
    }

    const startDate = new Date(startTimeVal);
    const endDate = new Date(endTimeVal);
    if (endDate <= startDate) {
        showToast('Waktu berakhir harus setelah waktu mulai.', 'warning');
        return;
    }

    const validItems = sessionItemDrafts.filter(it => it.productId && it.flashSalePrice > 0);
    if (validItems.length === 0) {
        showToast('Minimal tentukan 1 produk dengan harga Flash Sale yang valid.', 'warning');
        return;
    }

    if (!Array.isArray(appData.flashSales)) {
        appData.flashSales = [];
    }

    const sessionId = editingSessionId || `FS-${Date.now().toString(36).toUpperCase()}`;
    const payload = {
        id: sessionId,
        title,
        startTime: startDate.toISOString(),
        endTime: endDate.toISOString(),
        channel,
        isActive,
        updatedAt: Date.now(),
        items: validItems.map(it => ({
            productId: String(it.productId),
            variantName: it.variantName || '',
            normalPrice: parseFloat(it.normalPrice) || 0,
            flashSalePrice: parseFloat(it.flashSalePrice) || 0,
            quota: parseFloat(it.quota) || 10,
            soldCount: parseFloat(it.soldCount) || 0,
            maxPerCustomer: parseFloat(it.maxPerCustomer) || 2
        }))
    };

    const existingIdx = appData.flashSales.findIndex(s => s.id === sessionId);
    if (existingIdx > -1) {
        appData.flashSales[existingIdx] = payload;
    } else {
        appData.flashSales.unshift(payload);
    }

    try {
        await saveApp(['flashSales']);
        closeFlashSaleModal();
        renderFlashSaleAdminView();
        if (typeof window.renderStorefrontFlashSale === 'function') {
            window.renderStorefrontFlashSale();
        }
        showToast('Sesi Flash Sale berhasil disimpan dan disinkronkan!', 'success');
    } catch (err) {
        console.error('[FlashSale] Gagal simpan sesi:', err);
        showToast('Gagal menyimpan ke server. Coba lagi.', 'error');
    }
};

/**
 * Toggle Status Aktif Sesi
 */
export const toggleFlashSaleActive = async (sessionId) => {
    if (!Array.isArray(appData.flashSales)) return;
    const sess = appData.flashSales.find(s => s.id === sessionId);
    if (!sess) return;

    sess.isActive = sess.isActive === false;
    try {
        await saveApp(['flashSales']);
        renderFlashSaleAdminView();
        if (typeof window.renderStorefrontFlashSale === 'function') {
            window.renderStorefrontFlashSale();
        }
        showToast(`Status sesi "${sess.title}" berhasil diubah!`, 'success');
    } catch (e) {
        showToast('Gagal mengubah status sesi.', 'error');
    }
};

/**
 * Hapus Sesi Flash Sale
 */
export const deleteFlashSaleSession = (sessionId) => {
    if (!Array.isArray(appData.flashSales)) return;
    const sess = appData.flashSales.find(s => s.id === sessionId);
    if (!sess) return;

    const executeDelete = async () => {
        appData.flashSales = appData.flashSales.filter(s => s.id !== sessionId);
        try {
            await saveApp(['flashSales']);
            renderFlashSaleAdminView();
            if (typeof window.renderStorefrontFlashSale === 'function') {
                window.renderStorefrontFlashSale();
            }
            showToast('Sesi Flash Sale berhasil dihapus.', 'success');
        } catch (e) {
            showToast('Gagal menghapus sesi.', 'error');
        }
    };

    if (typeof window.showConfirm === 'function') {
        window.showConfirm(
            'Hapus Sesi Flash Sale',
            `Apakah Anda yakin ingin menghapus sesi promo "${sess.title}"?`,
            executeDelete,
            'Ya, Hapus',
            true
        );
    } else {
        executeDelete();
    }
};

// Expose ke window
window.renderFlashSaleAdminView = renderFlashSaleAdminView;
window.openFlashSaleModal = openFlashSaleModal;
window.closeFlashSaleModal = closeFlashSaleModal;
window.renderFlashSaleDraftItems = renderFlashSaleDraftItems;
window.addFlashSaleItemRow = addFlashSaleItemRow;
window.removeFlashSaleItemRow = removeFlashSaleItemRow;
window.updateFlashSaleItemProduct = updateFlashSaleItemProduct;
window.updateFlashSaleItemVariant = updateFlashSaleItemVariant;
window.updateFlashSaleItemDraft = updateFlashSaleItemDraft;
window.setFlashSalePresetDuration = setFlashSalePresetDuration;
window.saveFlashSaleSession = saveFlashSaleSession;
window.toggleFlashSaleActive = toggleFlashSaleActive;
window.deleteFlashSaleSession = deleteFlashSaleSession;
