/**
 * ============================================================
 * MODUL CHANGELOG: STOREFRONT MODAL & VERSION VIEWER
 * Menampilkan catatan rilis, riwayat pemeliharaan sistem,
 * dan pembaharuan fitur secara interaktif dan real-time.
 * ============================================================
 */

import { appData } from '../../core/state.js';
import { esc, el } from '../../core/utils.js';
import { getCombinedChangelog, getLatestVersion } from '../../config/changelog.js';

let currentChangelogFilter = 'all';

/**
 * Format tanggal YYYY-MM-DD ke format Indonesia (contoh: 15 Sep 2026)
 */
const formatChangelogDate = (dateStr) => {
    if (!dateStr) return '';
    try {
        const parts = dateStr.split('-');
        if (parts.length === 3) {
            const date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
            return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
        }
        return dateStr;
    } catch(e) {
        return dateStr;
    }
};

/**
 * Konfigurasi badge & icon berdasarkan kategori log
 */
const getCategoryMeta = (cat) => {
    switch (cat) {
        case 'feature':
            return {
                label: 'Fitur Baru',
                icon: 'fa-rocket',
                colorClass: 'bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80',
                iconColor: 'text-[var(--color-primary)]'
            };
        case 'optimization':
            return {
                label: 'Optimasi',
                icon: 'fa-bolt-lightning',
                colorClass: 'bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80',
                iconColor: 'text-[var(--color-primary)]'
            };
        case 'maintenance':
            return {
                label: 'Maintenance',
                icon: 'fa-wrench',
                colorClass: 'bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80',
                iconColor: 'text-[var(--color-primary)]'
            };
        case 'bugfix':
            return {
                label: 'Perbaikan',
                icon: 'fa-bug-slash',
                colorClass: 'bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80',
                iconColor: 'text-[var(--color-primary)]'
            };
        default:
            return {
                label: 'Update',
                icon: 'fa-tag',
                colorClass: 'bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80',
                iconColor: 'text-[var(--color-primary)]'
            };
    }
};

/**
 * Render isi daftar log di dalam modal
 */
export const renderChangelogList = () => {
    const listContainer = el('changelog-items-container');
    if (!listContainer) return;

    const allLogs = getCombinedChangelog(appData);
    const filteredLogs = currentChangelogFilter === 'all' 
        ? allLogs 
        : allLogs.filter(item => item.category === currentChangelogFilter);

    if (filteredLogs.length === 0) {
        listContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3">
                <i class="fa-solid fa-clipboard-list opacity-60"></i>
            </div>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan pada kategori ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Pilih filter kategori lain di atas</p>
        </div>`;
        return;
    }

    let html = ``;
    filteredLogs.forEach((log, index) => {
        const isLatest = index === 0 && currentChangelogFilter === 'all';
        const meta = getCategoryMeta(log.category);
        const formattedDate = formatChangelogDate(log.date);

        const itemsHtml = (log.items || []).map(item => `
            <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[11px] mt-1 shrink-0"></i>
                <span>${esc(item)}</span>
            </li>
        `).join('');

        html += `
        <div class="relative pl-6 sm:pl-8 pb-6 border-l-2 ${isLatest ? 'border-[var(--color-primary)]' : 'border-slate-200 dark:border-slate-700'} last:border-l-transparent last:pb-2">
            <!-- Timeline Node Indicator -->
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full ${isLatest ? 'bg-[var(--color-primary)] ring-4 ring-[rgba(var(--color-primary-rgb),0.2)]' : 'bg-slate-300 dark:bg-slate-600'} flex items-center justify-center transition-all">
                ${isLatest ? '<span class="w-1.5 h-1.5 rounded-full bg-white"></span>' : ''}
            </div>

            <!-- Card Box -->
            <div class="rounded-2xl border ${isLatest ? 'border-[var(--color-primary)]/40 bg-[rgba(var(--color-primary-rgb),0.03)] dark:bg-[rgba(var(--color-primary-rgb),0.06)] shadow-sm' : 'border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40'} p-4 sm:p-5 transition-all">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[11px] font-black tracking-wider uppercase ${isLatest ? 'bg-[var(--color-primary)] text-white shadow-xs' : 'bg-slate-800 text-white dark:bg-slate-700'}">
                            ${esc(log.version || 'v1.0.0')}
                        </span>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${meta.colorClass}">
                            <i class="fa-solid ${meta.icon} text-[9px] ${meta.iconColor}"></i> ${esc(meta.label)}
                        </span>
                        ${isLatest ? `
                        <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[9px] font-black uppercase tracking-wider">
                            <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span> Versi Terbaru
                        </span>` : ''}
                    </div>
                    <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                        <i class="fa-regular fa-calendar text-[10px]"></i> ${esc(formattedDate)}
                    </span>
                </div>

                <h4 class="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-white leading-snug mb-3">
                    ${esc(log.title || 'Pembaruan Sistem')}
                </h4>

                <ul class="space-y-2">
                    ${itemsHtml}
                </ul>
            </div>
        </div>`;
    });

    listContainer.innerHTML = html;
};

/**
 * Mengganti filter kategori changelog
 */
export const filterChangelog = (category) => {
    currentChangelogFilter = category;
    
    // Update tombol filter UI
    document.querySelectorAll('.btn-changelog-filter').forEach(btn => {
        const cat = btn.getAttribute('data-category');
        const icon = btn.querySelector('i');
        if (cat === category) {
            btn.className = 'btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent';
            if (icon) icon.className = icon.className.replace(/text-\[[^\]]+\]/g, '').trim() + ' text-white';
        } else {
            btn.className = 'btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer';
            if (icon && cat !== 'all') icon.className = icon.className.replace(/\btext-white\b/g, '').trim() + ' text-[var(--color-primary)]';
            else if (icon && cat === 'all') icon.className = icon.className.replace(/\btext-white\b/g, '').trim() + ' text-slate-400';
        }
    });

    renderChangelogList();
};

/**
 * Buka modal catatan rilis changelog
 */
export const openChangelogModal = (initialCategory = 'all') => {
    let m = el('changelog-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'changelog-modal';
        m.className = 'fixed inset-0 z-[125] bg-slate-900/80 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300';
        m.onclick = (e) => { if (e.target === m) closeChangelogModal(); };
        
        m.innerHTML = `
        <div id="changelog-modal-box" class="w-full max-w-xl max-h-[90dvh] sm:max-h-[85dvh] bg-white dark:bg-[#0b1121] rounded-t-[2rem] sm:rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden shadow-2xl transform translate-y-full sm:translate-y-8 transition-transform duration-300">
            <!-- Header Modal -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between shrink-0 bg-white/80 dark:bg-[#0b1121]/80 backdrop-blur-md">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.12)] border border-[rgba(var(--color-primary-rgb),0.22)] text-[var(--color-primary)] flex items-center justify-center text-base sm:text-lg shadow-2xs shrink-0">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                                Log Pembaruan Sistem
                            </h3>
                            <span id="changelog-header-ver" class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider primary-bg text-white">
                                v1.3.0
                            </span>
                        </div>
                        <p class="text-[10px] sm:text-[11px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">
                            Transparansi riwayat perbaikan, fitur, dan performa Toko Putri
                        </p>
                    </div>
                </div>
                <button onclick="closeChangelogModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Filter Kategori Kancing (Horizontal Scroll) -->
            <div class="px-4 sm:px-5 py-2.5 border-b border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 sm:gap-2 overflow-x-auto hide-scrollbar shrink-0 bg-slate-50/60 dark:bg-slate-900/40">
                <button onclick="window.filterChangelog('all')" data-category="all" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent">
                    <i class="fa-solid fa-list-check text-[10px]"></i>
                    <span>Semua</span>
                </button>
                <button onclick="window.filterChangelog('feature')" data-category="feature" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-rocket text-[10px] text-[var(--color-primary)]"></i>
                    <span>Fitur Baru</span>
                </button>
                <button onclick="window.filterChangelog('optimization')" data-category="optimization" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-bolt-lightning text-[10px] text-[var(--color-primary)]"></i>
                    <span>Optimasi</span>
                </button>
                <button onclick="window.filterChangelog('maintenance')" data-category="maintenance" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-wrench text-[10px] text-[var(--color-primary)]"></i>
                    <span>Maintenance</span>
                </button>
                <button onclick="window.filterChangelog('bugfix')" data-category="bugfix" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-bug-slash text-[10px] text-[var(--color-primary)]"></i>
                    <span>Perbaikan</span>
                </button>
            </div>

            <!-- List Content Timeline -->
            <div class="p-4 sm:p-6 overflow-y-auto flex-1 hide-scrollbar">
                <div id="changelog-items-container" class="space-y-1"></div>
            </div>

            <!-- Footer Modal -->
            <div class="p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#0b1121]/90 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-2 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                    <span class="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
                    <span>Real-Time Sync Active</span>
                </div>
                <button onclick="closeChangelogModal()" class="px-5 py-2 rounded-xl primary-bg text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm">
                    Tutup
                </button>
            </div>
        </div>`;
        document.body.appendChild(m);
    }

    // Set versi di header
    const latestVer = getLatestVersion(appData);
    const verEl = el('changelog-header-ver');
    if (verEl) verEl.textContent = latestVer;

    // Reset filter
    currentChangelogFilter = initialCategory;
    filterChangelog(initialCategory);

    // Animasi tampil
    m.style.display = 'flex';
    requestAnimationFrame(() => {
        m.classList.remove('opacity-0');
        const box = el('changelog-modal-box');
        if (box) box.classList.remove('translate-y-full', 'sm:translate-y-8');
    });
};

/**
 * Tutup modal catatan rilis
 */
export const closeChangelogModal = () => {
    const m = el('changelog-modal');
    if (!m || m.style.display === 'none') return;

    m.classList.add('opacity-0');
    const box = el('changelog-modal-box');
    if (box) box.classList.add('translate-y-full', 'sm:translate-y-8');

    setTimeout(() => {
        m.style.display = 'none';
    }, 300);
};

// Expose ke global window
window.openChangelogModal = openChangelogModal;
window.closeChangelogModal = closeChangelogModal;
window.filterChangelog = filterChangelog;
