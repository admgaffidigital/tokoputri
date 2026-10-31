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
            <div class="w-16 h-16 mx-auto mb-4 rounded-3xl flex items-center justify-center text-3xl shadow-sm" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary);">
                <i class="fa-solid fa-bolt"></i>
            </div>
            <h4 class="font-extrabold text-base text-slate-800 dark:text-white mb-1">Belum Ada Sesi Flash Sale</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-5 leading-relaxed">
                Buat sesi promo kilat untuk meningkatkan penjualan, cuci gudang barang lambat, atau memberikan diskon berbatas waktu dengan batas kuota khusus.
            </p>
            <button onclick="window.openFlashSaleModal()" class="btn-native-action neo-btn px-5 py-2.5 rounded-xl text-white text-xs font-bold cursor-pointer inline-flex items-center gap-2" style="background: var(--color-primary);">
                <i class="fa-solid fa-plus"></i>
                <span>Buat Sesi Flash Sale Pertama</span>
            </button>
        </div>`
        : list.map(sess => {
            const status = checkFlashSaleStatus(sess);
            const statusBadge = status === 'active'
                ? `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider animate-pulse" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.3);"><i class="fa-solid fa-bolt" style="color: var(--color-primary);"></i> SEDANG BERLANGSUNG</span>`
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
                                <span><i class="fa-regular fa-clock text-amber-500 mr-1"></i>${formatDisplayDate(sess.endTime)}</span>
                            </div>
                        </div>

                        <!-- Aksi Tombol -->
                        <div class="flex items-center gap-1.5 shrink-0">
                            ${status === 'ended' ? `
                            <button onclick="window.reactivateFlashSaleSession('${esc(sess.id)}', 4)" title="Naikkan kembali ke Flash Sale sekarang (+4 Jam)" class="btn-native-action px-2.5 py-1.5 rounded-xl text-white text-[11px] font-black active:scale-95 transition-all cursor-pointer flex items-center gap-1 shadow-xs" style="background: var(--color-primary);">
                                <i class="fa-solid fa-bolt text-amber-300"></i>
                                <span>Naikkan Lagi</span>
                            </button>` : ''}
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
                        <div class="flex items-center justify-between">
                            <p class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                Produk Promo (${items.length} Barang):
                            </p>
                            ${items.some(it => (parseFloat(it.soldCount) || 0) > 0) ? `
                            <button type="button" onclick="window.resetAllSessionItemsSold('${esc(sess.id)}')" class="text-[10px] text-amber-600 hover:text-amber-700 dark:text-amber-400 font-bold flex items-center gap-1 cursor-pointer">
                                <i class="fa-solid fa-rotate-left text-[9px]"></i> Reset Semua Kuota
                            </button>` : ''}
                        </div>
                        <div class="divide-y divide-slate-100 dark:divide-slate-800/80">
                            ${items.map((it, itIdx) => {
                                const prod = (appData.products || []).find(p => String(p.id) === String(it.productId));
                                const pName = prod ? prod.name : (it.productName || 'Produk ID: ' + it.productId);
                                const vName = it.variantName ? ` (${it.variantName})` : '';
                                const quota = parseFloat(it.quota) || 0;
                                const sold = parseFloat(it.soldCount) || 0;
                                const isSoldOut = quota > 0 && sold >= quota;
                                const normP = parseFloat(it.normalPrice) || 0;
                                const fsP = parseFloat(it.flashSalePrice) || 0;
                                const discountPct = normP > 0 ? Math.round(((normP - fsP) / normP) * 100) : (it.discountPercent || 0);
                                const hpp = prod ? (it.variantName && prod.variants ? (prod.variants.find(v => v.name === it.variantName)?.hpp || prod.hpp) : prod.hpp) : 0;
                                const isMarginLoss = hpp > 0 && fsP < hpp;

                                return `
                                <div class="py-2.5 flex items-center justify-between gap-3 text-xs">
                                    <div class="min-w-0 flex-1">
                                        <div class="flex items-center gap-1.5">
                                            <p class="font-bold text-slate-800 dark:text-slate-100 truncate">${esc(pName + vName)}</p>
                                            ${isSoldOut ? `<span class="shrink-0 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400">HABIS</span>` : ''}
                                        </div>
                                        <div class="flex items-center gap-2 mt-0.5 flex-wrap">
                                            <span class="text-[11px] text-slate-400 line-through">${fCur(normP)}</span>
                                            <span class="font-black" style="color: var(--color-primary);">${fCur(fsP)} (-${discountPct}%)</span>
                                            ${isMarginLoss ? `<span class="text-[9px] font-black text-rose-600 bg-rose-100 dark:bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-300 inline-flex items-center gap-1"><i class="fa-solid fa-triangle-exclamation text-[8.5px]"></i> DI BAWAH HPP (${fCur(hpp)})</span>` : ''}
                                        </div>
                                    </div>

                                    <!-- Indikator Kuota Terjual Harmonis -->
                                    <div class="text-right shrink-0">
                                        <div class="flex items-center justify-end gap-1">
                                            <span class="text-[10px] font-bold ${isSoldOut ? 'text-rose-500' : 'text-slate-500 dark:text-slate-400'}">Terjual ${sold} / ${quota || '∞'}</span>
                                            ${sold > 0 ? `
                                            <button onclick="window.resetSessionItemSold('${esc(sess.id)}', ${itIdx})" title="Reset kuota terjual produk ini ke 0" class="text-amber-500 hover:text-amber-600 text-[10px] font-black cursor-pointer ml-1 p-0.5">
                                                <i class="fa-solid fa-rotate-left"></i>
                                            </button>` : ''}
                                        </div>
                                        <div class="w-20 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1 border border-slate-200/50 dark:border-slate-700/50">
                                            <div class="h-full rounded-full ${isSoldOut ? 'bg-rose-500' : ''}" style="${isSoldOut ? '' : 'background: var(--color-primary);'} width: ${quota > 0 ? Math.min(100, Math.round((sold / quota) * 100)) : 100}%;"></div>
                                        </div>
                                    </div>
                                </div>`;
                            }).join('')}
                        </div>
                    </div>
                </div>

                <!-- Footer Status Toggle & Fast Re-activation -->
                <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs gap-2 flex-wrap">
                    <div>
                        <span class="text-[11px] font-semibold text-slate-400">Status:</span>
                        <span class="ml-1 text-[11px] font-bold ${status === 'active' ? 'text-emerald-600 dark:text-emerald-400' : (status === 'upcoming' ? 'text-amber-500' : 'text-slate-500')}">
                            ${status === 'active' ? 'Tayang di Etalase' : (status === 'upcoming' ? 'Menunggu Jadwal' : (sess.isActive !== false ? 'Waktu Telah Selesai' : 'Dinonaktifkan'))}
                        </span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        ${status === 'ended' ? `
                        <button onclick="window.reactivateFlashSaleSession('${esc(sess.id)}', 4)" class="btn-native-action neo-btn px-3 py-1 rounded-xl text-white text-xs font-black cursor-pointer flex items-center gap-1" style="background: var(--color-primary);">
                            <i class="fa-solid fa-bolt text-amber-300"></i>
                            <span>Naikkan Lagi</span>
                        </button>` : ''}
                        <button onclick="window.toggleFlashSaleActive('${esc(sess.id)}')" class="px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${sess.isActive !== false && status === 'active' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border border-slate-200'}">
                            <i class="fa-solid fa-power-off mr-1"></i> ${sess.isActive !== false && status === 'active' ? 'Sesi Aktif' : (sess.isActive !== false ? 'Aktifkan (Perpanjang)' : 'Dinonaktifkan')}
                        </button>
                    </div>
                </div>
            </div>`;
        }).join('');

    content.innerHTML = `
    <div class="space-y-6 max-w-6xl mx-auto">
        <!-- Top Bar Header Harmonis Tema -->
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl text-white flex items-center justify-center text-lg border border-slate-900 dark:border-slate-700 shadow-2xs" style="background: var(--color-primary);">
                        <i class="fa-solid fa-bolt text-amber-300"></i>
                    </div>
                    <span>Flash Sale &amp; Promo Kilat</span>
                </h2>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Atur jadwal diskon kilat berbatas waktu, pantau kuota persediaan khusus, dan picu lonjakan transaksi.
                </p>
            </div>

            <div class="flex items-center gap-2">
                <button onclick="window.openFlashSaleModal()" class="btn-native-action neo-btn px-4 py-2.5 rounded-xl text-white text-xs font-bold cursor-pointer flex items-center gap-2" style="background: var(--color-primary);">
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

    const nowMs = Date.now();
    const existingEndMs = existing?.endTime ? (typeof window.parseSafeTimestamp === 'function' ? window.parseSafeTimestamp(existing.endTime) : new Date(existing.endTime).getTime()) : 0;
    const isExistingExpired = existing && (!existingEndMs || existingEndMs <= nowMs);

    let defaultStart = existing ? existing.startTime : new Date(nowMs).toISOString();
    let defaultEnd = existing ? existing.endTime : new Date(nowMs + 4 * 3600 * 1000).toISOString(); // Default 4 jam

    if (isExistingExpired) {
        // Sesi lama sudah selesai: otomatis tawarkan waktu mulai sekarang + 4 jam (atau durasi sebelumnya)
        const prevDuration = (existing.startTime && existing.endTime) 
            ? Math.max(3600000, (typeof window.parseSafeTimestamp === 'function' ? window.parseSafeTimestamp(existing.endTime) : new Date(existing.endTime).getTime()) - (typeof window.parseSafeTimestamp === 'function' ? window.parseSafeTimestamp(existing.startTime) : new Date(existing.startTime).getTime())) 
            : (4 * 3600 * 1000);
        defaultStart = new Date(nowMs).toISOString();
        defaultEnd = new Date(nowMs + prevDuration).toISOString();
    }

    const existingModal = el('modal-flash-sale-form');
    if (existingModal) existingModal.remove();

    document.body.insertAdjacentHTML('beforeend', `
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
                            ${existing ? 'Edit Sesi Flash Sale' : 'Buat Sesi Flash Sale Baru'}
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
                ${isExistingExpired ? `
                <div class="p-3.5 sm:p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-800 dark:text-amber-200 flex items-center justify-between gap-2.5 flex-wrap shadow-2xs">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid fa-clock-rotate-left text-amber-500 text-base shrink-0"></i>
                        <span class="font-medium">Sesi ini sebelumnya telah selesai. Waktu promo otomatis disesuaikan ke jam sekarang agar langsung tayang saat disimpan.</span>
                    </div>
                    <button type="button" onclick="window.resetAllDraftItemsSold()" class="shrink-0 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black cursor-pointer shadow-xs active:scale-95 transition-all">
                        <i class="fa-solid fa-rotate-left mr-1"></i> Reset Kuota Terjual
                    </button>
                </div>` : ''}

                <!-- Judul Sesi -->
                <div>
                    <label class="block text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-heading text-[10px]" style="color: var(--color-primary);"></i>
                        <span>Judul Sesi Promo</span>
                        <span style="color: var(--color-primary);">*</span>
                    </label>
                    <input type="text" id="fs-input-title" value="${esc(existing?.title || 'Flash Sale Spesial Hari Ini')}" placeholder="Contoh: Flash Sale Akhir Pekan Alat Teknik" class="w-full h-11 text-xs sm:text-sm font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] transition-all">
                </div>

                <!-- Rentang Waktu (Mulai & Selesai) -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                        <label class="block text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <i class="fa-regular fa-calendar-plus text-[10px]" style="color: var(--color-primary);"></i>
                            <span>Waktu Mulai</span>
                            <span style="color: var(--color-primary);">*</span>
                        </label>
                        <input type="datetime-local" id="fs-input-start" value="${toDatetimeLocal(defaultStart)}" class="w-full h-11 text-xs sm:text-sm font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] transition-all">
                    </div>
                    <div>
                        <label class="block text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <i class="fa-regular fa-calendar-check text-[10px]" style="color: var(--color-primary);"></i>
                            <span>Waktu Berakhir</span>
                            <span style="color: var(--color-primary);">*</span>
                        </label>
                        <input type="datetime-local" id="fs-input-end" value="${toDatetimeLocal(defaultEnd)}" class="w-full h-11 text-xs sm:text-sm font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] transition-all">
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
                            <option value="both" ${existing?.channel === 'both' || !existing ? 'selected' : ''}>Etalase Web &amp; Kasir POS (Semua)</option>
                            <option value="web" ${existing?.channel === 'web' ? 'selected' : ''}>Hanya Etalase Web / Online</option>
                            <option value="pos" ${existing?.channel === 'pos' ? 'selected' : ''}>Hanya Kasir POS Offline</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <i class="fa-solid fa-power-off text-[10px]" style="color: var(--color-primary);"></i>
                            <span>Status Sesi</span>
                        </label>
                        <select id="fs-input-active" class="w-full h-11 text-xs sm:text-sm font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] transition-all cursor-pointer">
                            <option value="true" ${existing?.isActive !== false ? 'selected' : ''}>Aktif (Berjalan Sesuai Jam)</option>
                            <option value="false" ${existing?.isActive === false ? 'selected' : ''}>Nonaktifkan Sementara</option>
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
                            ${sessionItemDrafts.some(it => (parseFloat(it.soldCount) || 0) > 0) ? `
                            <button type="button" onclick="window.resetAllDraftItemsSold()" title="Reset semua kuota terjual ke 0" class="btn-native-action h-9 px-3 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-bold active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs">
                                <i class="fa-solid fa-rotate-left text-amber-500"></i>
                                <span>Reset Kuota</span>
                            </button>` : ''}
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
    </div>`);

    // Daftarkan modal ke history router
    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('flashSaleForm');
    }

    renderFlashSaleDraftItems();

    requestAnimationFrame(() => {
        const m = el('modal-flash-sale-form');
        const c = el('modal-flash-sale-form-box') || el('flash-sale-modal-card');
        if (m) m.classList.remove('opacity-0');
        if (c) {
            c.classList.remove('translate-y-full');
            c.classList.remove('sm:translate-y-8');
            c.classList.remove('scale-95');
        }
    });
};

/**
 * Tutup Modal Form Flash Sale
 */
export const closeFlashSaleModal = (skipHistory = false) => {
    const m = el('modal-flash-sale-form');
    const c = el('modal-flash-sale-form-box') || el('flash-sale-modal-card');
    if (!m) return;

    const performClose = () => {
        m.classList.add('opacity-0');
        if (c) {
            c.classList.add('translate-y-full');
            c.classList.add('sm:translate-y-8');
            c.classList.add('scale-95');
        }
        setTimeout(() => m.remove(), 250);
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
        <div class="py-8 px-4 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-50/60 dark:bg-slate-850/40 my-1">
            <div class="w-14 h-14 mx-auto mb-3 rounded-2xl flex items-center justify-center text-2xl shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.2);">
                <i class="fa-solid fa-bolt"></i>
            </div>
            <h5 class="font-extrabold text-sm text-slate-800 dark:text-white mb-1">Belum Ada Produk Promo Terpilih</h5>
            <p class="text-xs text-slate-400 max-w-sm mx-auto mb-4 leading-relaxed">
                Pilih produk katalog untuk diskon kilat berbatas waktu dan alokasikan kuota promo.
            </p>
            <button type="button" onclick="window.addFlashSaleItemRow()" class="btn-native-action neo-btn h-10 px-4 rounded-xl text-white text-xs font-bold cursor-pointer inline-flex items-center gap-2" style="background: var(--color-primary);">
                <i class="fa-solid fa-plus text-xs"></i>
                <span>Tambah Produk Pertama</span>
            </button>
        </div>`;
        return;
    }

    container.innerHTML = sessionItemDrafts.map((item, idx) => {
        const selectedProd = products.find(p => String(p.id) === String(item.productId));
        const variants = selectedProd && Array.isArray(selectedProd.variants) ? selectedProd.variants : [];
        const selectedVariantObj = item.variantName && variants.length ? variants.find(v => v.name === item.variantName) : null;

        const normalPrice = parseFloat(item.normalPrice) || (selectedVariantObj ? parseFloat(selectedVariantObj.price) : (selectedProd ? parseFloat(selectedProd.price) : 0));
        const flashPrice = parseFloat(item.flashSalePrice) || 0;
        const hpp = selectedVariantObj ? (parseFloat(selectedVariantObj.hpp) || parseFloat(selectedProd.hpp) || 0) : (selectedProd ? parseFloat(selectedProd.hpp) || 0 : 0);
        const isLoss = hpp > 0 && flashPrice > 0 && flashPrice < hpp;
        const discountPct = normalPrice > 0 && flashPrice > 0 ? Math.round(((normalPrice - flashPrice) / normalPrice) * 100) : 0;
        const varStock = selectedVariantObj ? (parseFloat(selectedVariantObj.stock) || 0) : (selectedProd ? parseFloat(selectedProd.stock) || 0 : 0);
        const itemImg = (selectedVariantObj && selectedVariantObj.img) ? selectedVariantObj.img : (selectedProd ? selectedProd.img : '');

        return `
        <div class="p-3.5 sm:p-4 rounded-2xl border ${isLoss ? 'border-rose-300 dark:border-rose-900 bg-rose-50/40 dark:bg-rose-950/20' : 'border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800/60'} space-y-3 shadow-2xs overflow-hidden">
            <div class="flex items-center justify-between gap-2 flex-wrap">
                <div class="flex items-center gap-2 flex-wrap min-w-0">
                    ${itemImg ? `<img src="${getOptImg(itemImg, 'w100-rw')}" alt="Thumb" class="w-8 h-8 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0 shadow-2xs">` : ''}
                    <span class="px-2.5 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                        Item #${idx + 1}
                    </span>
                    ${item.variantName ? `
                    <span class="px-2.5 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 flex items-center gap-1 shadow-2xs">
                        <i class="fa-solid fa-shapes text-[9px]"></i> Varian: ${esc(item.variantName)}
                    </span>` : (variants.length > 0 ? `<span class="px-2 py-0.5 rounded-lg text-[9.5px] font-bold bg-slate-200/70 text-slate-600 dark:bg-slate-700 dark:text-slate-300">Semua Varian</span>` : '')}
                    ${selectedProd ? `<span class="text-[11px] text-slate-400 font-medium ml-1">Stok: <b>${varStock}</b> ${selectedProd.unit || 'unit'}</span>` : ''}
                </div>
                <button type="button" onclick="window.removeFlashSaleItemRow(${idx})" class="btn-native-action h-8 px-2.5 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-xs font-bold cursor-pointer transition-all flex items-center gap-1 active:scale-95 shadow-2xs">
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
                    <select onchange="window.updateFlashSaleItemProduct(${idx}, this.value)" class="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] transition-all cursor-pointer">
                        <option value="">-- Pilih Produk Katalog --</option>
                        ${products.map(p => `
                            <option value="${esc(p.id)}" ${String(p.id) === String(item.productId) ? 'selected' : ''}>
                                ${esc(p.name)} (${fCur(p.price)})${p.variants && p.variants.length > 0 ? ` [${p.variants.length} Varian]` : ''}
                            </option>
                        `).join('')}
                    </select>
                </div>

                ${variants.length > 0 ? `
                <div>
                    <div class="flex items-center justify-between mb-1">
                        <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Pilih Varian
                        </label>
                        <button type="button" onclick="window.addAllVariantsToFlashSaleDraft(${idx})" class="text-[10px] font-black cursor-pointer hover:underline flex items-center gap-1 active:scale-95" style="color: var(--color-primary);" title="Otomatis pecah menjadi baris tersendiri untuk setiap varian">
                            <i class="fa-solid fa-shapes"></i> Muat Semua (${variants.length})
                        </button>
                    </div>
                    <select onchange="window.updateFlashSaleItemVariant(${idx}, this.value)" class="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.2)] transition-all cursor-pointer">
                        <option value="">Semua Varian (Produk Global)</option>
                        ${variants.map(v => `
                            <option value="${esc(v.name)}" ${v.name === item.variantName ? 'selected' : ''}>
                                ${esc(v.name)} (${fCur(v.price || selectedProd.price)})${v.stock != null ? ` - Stok: ${v.stock}` : ''}
                            </option>
                        `).join('')}
                    </select>
                </div>` : ''}
            </div>

            <!-- Harga Normal, Diskon %, Harga Flash Sale, & Kuota -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                <div>
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                        Harga Normal
                    </label>
                    <input type="number" min="0" value="${normalPrice || ''}" onchange="window.updateFlashSaleItemDraft(${idx}, 'normalPrice', this.value)" class="w-full h-10 sm:h-11 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] transition-all">
                </div>

                <div>
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                        Diskon (%)
                    </label>
                    <input type="number" min="1" max="99" value="${discountPct || ''}" onchange="window.updateFlashSaleItemDiscountPct(${idx}, this.value)" placeholder="20" class="w-full h-10 sm:h-11 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] transition-all">
                </div>

                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider mb-1" style="color: var(--color-primary);">
                        Harga Kilat (Rp) <span class="text-rose-500">*</span>
                    </label>
                    <input type="number" min="0" value="${flashPrice || ''}" onchange="window.updateFlashSaleItemDraft(${idx}, 'flashSalePrice', this.value)" placeholder="Harga Promo" class="w-full h-10 sm:h-11 px-3 rounded-xl border-2 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm font-black focus:outline-hidden transition-all" style="color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.45);">
                </div>

                <div>
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                        Kuota Promo (Qty)
                    </label>
                    <input type="number" min="1" value="${item.quota || 10}" onchange="window.updateFlashSaleItemDraft(${idx}, 'quota', this.value)" placeholder="10" class="w-full h-10 sm:h-11 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm font-bold text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)] transition-all">
                </div>
            </div>

            <!-- Kuota Terjual & Reset Helper -->
            <div class="flex items-center justify-between text-[11px] bg-slate-50 dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 flex-wrap gap-2">
                <span class="font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                    <i class="fa-solid fa-fire text-amber-500"></i>
                    <span>Keterjualan:</span>
                    <b class="${(parseFloat(item.soldCount) || 0) >= (parseFloat(item.quota) || 10) ? 'text-rose-500' : 'font-black'}" style="${(parseFloat(item.soldCount) || 0) >= (parseFloat(item.quota) || 10) ? '' : 'color: var(--color-primary);'}">${item.soldCount || 0} / ${item.quota || 10} Unit Terjual</b>
                </span>
                ${(parseFloat(item.soldCount) || 0) > 0 ? `
                <button type="button" onclick="window.resetDraftItemSold(${idx})" class="btn-native-action px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-[10px] font-black flex items-center gap-1 cursor-pointer active:scale-95 transition-all shadow-xs">
                    <i class="fa-solid fa-rotate-left text-[9px]"></i> Reset ke 0
                </button>` : `<span class="text-[10px] font-medium text-slate-400">Kuota promo penuh tersedia</span>`}
            </div>

            <!-- Margin Guard Alert -->
            <div class="flex items-center justify-between text-xs flex-wrap gap-2 pt-0.5">
                <div class="flex items-center gap-2">
                    ${discountPct > 0 ? `<span class="px-2 py-0.5 rounded-lg text-[10px] font-black" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">Diskon -${discountPct}%</span>` : ''}
                    ${hpp > 0 ? `<span class="text-[11px] text-slate-400 font-medium">Modal HPP: <b>${fCur(hpp)}</b></span>` : ''}
                </div>
                ${isLoss ? `
                <div class="text-rose-600 dark:text-rose-400 font-bold text-xs flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900">
                    <i class="fa-solid fa-triangle-exclamation text-rose-500"></i>
                    <span>Peringatan: Harga Flash Sale di bawah modal HPP!</span>
                </div>` : ''}
            </div>
        </div>`;
    }).join('');
};

/**
 * Muat Semua Varian dari Suatu Produk ke Draft Sekaligus (Multi-Varian Batch)
 */
export const addAllVariantsToFlashSaleDraft = (idx) => {
    if (!sessionItemDrafts[idx]) return;
    const item = sessionItemDrafts[idx];
    const prod = (appData.products || []).find(p => String(p.id) === String(item.productId));
    if (!prod || !Array.isArray(prod.variants) || prod.variants.length === 0) {
        showToast('Produk ini tidak memiliki daftar varian.', 'info');
        return;
    }

    const defaultQuota = parseFloat(item.quota) || 10;
    const newRows = prod.variants.map(v => {
        const vPrice = parseFloat(v.price) || parseFloat(prod.price) || 0;
        const vFlashPrice = Math.round(vPrice * 0.8); // 20% diskon default
        return {
            productId: String(prod.id),
            variantName: v.name || '',
            normalPrice: vPrice,
            flashSalePrice: vFlashPrice,
            quota: defaultQuota,
            soldCount: 0,
            maxPerCustomer: item.maxPerCustomer || 2
        };
    });

    sessionItemDrafts.splice(idx, 1, ...newRows);
    renderFlashSaleDraftItems();
    showToast(`Berhasil memuat ${newRows.length} varian produk "${prod.name}" ke draft Flash Sale!`, 'success');
};

/**
 * Update Persentase Diskon di Draft (Otomatis Menghitung Harga Flash Sale)
 */
export const updateFlashSaleItemDiscountPct = (idx, pct) => {
    if (!sessionItemDrafts[idx]) return;
    const p = parseFloat(pct) || 0;
    const normal = parseFloat(sessionItemDrafts[idx].normalPrice) || 0;
    if (normal > 0 && p >= 0 && p < 100) {
        sessionItemDrafts[idx].flashSalePrice = Math.round(normal * (1 - p / 100));
        renderFlashSaleDraftItems();
    }
};

/**
 * Reset Kuota Terjual Baris Tertentu di Draft Formulir
 */
export const resetDraftItemSold = (idx) => {
    if (sessionItemDrafts[idx]) {
        sessionItemDrafts[idx].soldCount = 0;
        renderFlashSaleDraftItems();
        showToast('Kuota terjual produk ini berhasil di-reset ke 0!', 'success');
    }
};

/**
 * Reset Seluruh Kuota Terjual di Draft Formulir
 */
export const resetAllDraftItemsSold = () => {
    sessionItemDrafts.forEach(it => {
        if (it) it.soldCount = 0;
    });
    renderFlashSaleDraftItems();
    showToast('Seluruh kuota terjual berhasil di-reset ke 0! Produk siap dinaikkan kembali.', 'success');
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
    if (prod) {
        if (vName && prod.variants) {
            const v = prod.variants.find(vv => vv.name === vName);
            if (v && v.price) {
                sessionItemDrafts[idx].normalPrice = parseFloat(v.price) || 0;
                sessionItemDrafts[idx].flashSalePrice = Math.round((parseFloat(v.price) || 0) * 0.8);
            }
        } else {
            sessionItemDrafts[idx].normalPrice = parseFloat(prod.price) || 0;
            sessionItemDrafts[idx].flashSalePrice = Math.round((parseFloat(prod.price) || 0) * 0.8);
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

    const now = Date.now();
    if (isActive && endDate.getTime() <= now) {
        showToast('Waktu berakhir sudah lewat dari waktu saat ini. Gunakan preset jam (+3 Jam / +6 Jam) agar sesi langsung aktif di etalase toko.', 'warning');
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
        updatedAt: now,
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
        if (typeof window.rCat === 'function') {
            window.rCat();
        }
        showToast('Sesi Flash Sale berhasil disimpan dan disinkronkan!', 'success');
    } catch (err) {
        console.error('[FlashSale] Gagal simpan sesi:', err);
        showToast('Gagal menyimpan ke server. Coba lagi.', 'error');
    }
};

/**
 * Toggle Status Aktif Sesi dengan Auto-Extend Pintar & Kuota Refresh
 */
export const toggleFlashSaleActive = async (sessionId) => {
    if (!Array.isArray(appData.flashSales)) return;
    const sess = appData.flashSales.find(s => s.id === sessionId);
    if (!sess) return;

    const willBeActive = sess.isActive === false;
    sess.isActive = willBeActive;

    const now = Date.now();
    const endMs = sess.endTime ? (typeof window.parseSafeTimestamp === 'function' ? window.parseSafeTimestamp(sess.endTime) : new Date(sess.endTime).getTime()) : 0;
    const isExpired = !endMs || endMs <= now;

    let isAutoExtended = false;
    if (willBeActive && isExpired) {
        // Sesi ini sebelumnya sudah selesai. Ketika admin mengaktifkan kembali sesi ini dengan maksud menaikkan kembali ke flash sale:
        // Otomatis perpanjang jadwal mulai sekarang dan segarkan kuota produk yang sudah habis!
        const prevDuration = (sess.startTime && sess.endTime)
            ? Math.max(3600000, (typeof window.parseSafeTimestamp === 'function' ? window.parseSafeTimestamp(sess.endTime) : new Date(sess.endTime).getTime()) - (typeof window.parseSafeTimestamp === 'function' ? window.parseSafeTimestamp(sess.startTime) : new Date(sess.startTime).getTime()))
            : (4 * 3600 * 1000);
        sess.startTime = new Date(now).toISOString();
        sess.endTime = new Date(now + prevDuration).toISOString();
        sess.updatedAt = now;
        isAutoExtended = true;

        if (Array.isArray(sess.items)) {
            sess.items.forEach(it => {
                if (it) it.soldCount = 0;
            });
        }
    } else {
        sess.updatedAt = now;
    }

    try {
        await saveApp(['flashSales']);
        renderFlashSaleAdminView();
        if (typeof window.renderStorefrontFlashSale === 'function') {
            window.renderStorefrontFlashSale();
        }
        if (typeof window.rCat === 'function') {
            window.rCat();
        }
        if (willBeActive) {
            showToast(isAutoExtended 
                ? `Sesi "${sess.title}" berhasil diaktifkan kembali! Waktu diperpanjang dan produk langsung aktif di etalase toko.`
                : `Sesi "${sess.title}" kini aktif!`, 'success');
        } else {
            showToast(`Sesi "${sess.title}" telah dinonaktifkan.`, 'info');
        }
    } catch (e) {
        showToast('Gagal mengubah status sesi.', 'error');
    }
};

/**
 * Naikkan Kembali Sesi Flash Sale yang Telah Selesai (Re-activate & Refresh Kuota)
 */
export const reactivateFlashSaleSession = async (sessionId, durationHours = 4) => {
    if (!Array.isArray(appData.flashSales)) return;
    const sess = appData.flashSales.find(s => s.id === sessionId);
    if (!sess) return;

    const now = Date.now();
    const durationMs = durationHours * 3600 * 1000;

    sess.startTime = new Date(now).toISOString();
    sess.endTime = new Date(now + durationMs).toISOString();
    sess.isActive = true;
    sess.updatedAt = now;

    // Reset seluruh kuota terjual agar produk bisa langsung dibeli promo kembali
    if (Array.isArray(sess.items)) {
        sess.items.forEach(it => {
            if (it) it.soldCount = 0;
        });
    }

    // Posisikan sesi ini ke urutan teratas array agar prioritas utama di storefront
    const idx = appData.flashSales.findIndex(s => s.id === sessionId);
    if (idx > 0) {
        appData.flashSales.splice(idx, 1);
        appData.flashSales.unshift(sess);
    }

    try {
        await saveApp(['flashSales']);
        renderFlashSaleAdminView();
        if (typeof window.renderStorefrontFlashSale === 'function') {
            window.renderStorefrontFlashSale();
        }
        if (typeof window.rCat === 'function') {
            window.rCat();
        }
        showToast(`Sesi Flash Sale "${sess.title}" berhasil dinaikkan kembali! Aktif selama ${durationHours} jam dan langsung tayang di etalase toko.`, 'success');
    } catch (e) {
        showToast('Gagal menaikkan sesi Flash Sale.', 'error');
    }
};

/**
 * Reset Kuota Terjual Produk Tertentu pada Sesi Flash Sale
 */
export const resetSessionItemSold = async (sessionId, itemIdx) => {
    if (!Array.isArray(appData.flashSales)) return;
    const sess = appData.flashSales.find(s => s.id === sessionId);
    if (!sess || !Array.isArray(sess.items) || !sess.items[itemIdx]) return;

    sess.items[itemIdx].soldCount = 0;
    sess.updatedAt = Date.now();

    try {
        await saveApp(['flashSales']);
        renderFlashSaleAdminView();
        if (typeof window.renderStorefrontFlashSale === 'function') {
            window.renderStorefrontFlashSale();
        }
        if (typeof window.rCat === 'function') {
            window.rCat();
        }
        const pName = sess.items[itemIdx].productName || 'Produk Promo';
        showToast(`Kuota produk "${pName}" berhasil di-reset ke 0!`, 'success');
    } catch (e) {
        showToast('Gagal mereset kuota produk.', 'error');
    }
};

/**
 * Reset Seluruh Kuota Terjual pada Sesi Tertentu
 */
export const resetAllSessionItemsSold = async (sessionId) => {
    if (!Array.isArray(appData.flashSales)) return;
    const sess = appData.flashSales.find(s => s.id === sessionId);
    if (!sess || !Array.isArray(sess.items)) return;

    sess.items.forEach(it => {
        if (it) it.soldCount = 0;
    });
    sess.updatedAt = Date.now();

    try {
        await saveApp(['flashSales']);
        renderFlashSaleAdminView();
        if (typeof window.renderStorefrontFlashSale === 'function') {
            window.renderStorefrontFlashSale();
        }
        if (typeof window.rCat === 'function') {
            window.rCat();
        }
        showToast(`Seluruh kuota produk di sesi "${sess.title}" berhasil di-reset ke 0!`, 'success');
    } catch (e) {
        showToast('Gagal mereset kuota produk.', 'error');
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
            if (typeof window.rCat === 'function') {
                window.rCat();
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
window.reactivateFlashSaleSession = reactivateFlashSaleSession;
window.resetSessionItemSold = resetSessionItemSold;
window.resetAllSessionItemsSold = resetAllSessionItemsSold;
window.resetDraftItemSold = resetDraftItemSold;
window.resetAllDraftItemsSold = resetAllDraftItemsSold;
window.addAllVariantsToFlashSaleDraft = addAllVariantsToFlashSaleDraft;
window.updateFlashSaleItemDiscountPct = updateFlashSaleItemDiscountPct;
