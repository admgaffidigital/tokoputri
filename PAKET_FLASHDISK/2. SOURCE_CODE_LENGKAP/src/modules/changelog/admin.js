/**
 * ============================================================
 * MODUL CHANGELOG ADMIN: PANEL KELOLA LOG PEMBARUAN SISTEM
 * Mengatur antarmuka CMS bagi pemilik toko untuk mencatat,
 * menambah, mengedit, dan menghapus log rilis pembaruan secara real-time.
 * ============================================================
 */

import { appData } from '../../core/state.js';
import { el, setH, getV, setV, esc, showToast, showConfirm, sLoad, hLoad } from '../../core/utils.js';
import { saveApp } from '../../services/storage.js';
import { getCombinedChangelog, getLatestVersion } from '../../config/changelog.js';
import { openChangelogModal } from './index.js';

let isAddingLog = false;
let editingLogId = null;

/**
 * Dapatkan tanggal hari ini dalam format YYYY-MM-DD
 */
const getTodayDateString = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

/**
 * Format tanggal YYYY-MM-DD ke format Indonesia
 */
const formatDateIndo = (dateStr) => {
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
 * Render halaman Admin Tab Changelog
 */
export const rAdmChangelog = () => {
    const container = el('admin-content');
    if (!container) return;

    const dynamicLogs = appData.changelog || [];
    const allLogs = getCombinedChangelog(appData);
    const latestVer = getLatestVersion(appData);

    let logsHtml = '';
    if (allLogs.length === 0) {
        logsHtml = `
        <div class="text-center py-12 text-slate-400">
            <i class="fa-solid fa-clipboard-list text-3xl mb-2 opacity-50"></i>
            <p class="text-xs font-bold">Belum ada catatan pembaruan</p>
        </div>`;
    } else {
        logsHtml = allLogs.map(log => {
            const isDynamic = dynamicLogs.some(d => d.id === log.id);
            const isLatest = log.version === latestVer;
            const itemsList = (log.items || []).map(it => `
                <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                    <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[10px] mt-1 shrink-0"></i>
                    <span>${esc(it)}</span>
                </li>
            `).join('');

            let catLabel = 'Update';
            let catIcon = 'fa-tag';

            if (log.category === 'feature') {
                catLabel = 'Fitur Baru';
                catIcon = 'fa-rocket';
            } else if (log.category === 'optimization') {
                catLabel = 'Optimasi';
                catIcon = 'fa-bolt-lightning';
            } else if (log.category === 'maintenance') {
                catLabel = 'Maintenance';
                catIcon = 'fa-wrench';
            } else if (log.category === 'bugfix') {
                catLabel = 'Perbaikan';
                catIcon = 'fa-bug-slash';
            }

            return `
            <div class="p-4 sm:p-5 rounded-2xl border ${isLatest ? 'border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.02)] dark:bg-[rgba(var(--color-primary-rgb),0.05)] shadow-sm' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'} space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="px-2.5 py-1 rounded-lg text-xs font-black tracking-wider uppercase ${isLatest ? 'bg-[var(--color-primary)] text-white shadow-xs' : 'bg-slate-800 text-white dark:bg-slate-700'}">
                            ${esc(log.version)}
                        </span>
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-slate-200/80 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid ${catIcon} text-[9px] text-[var(--color-primary)]"></i> ${esc(catLabel)}
                        </span>
                        ${isLatest ? '<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[9px] font-extrabold uppercase"><span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span> Versi Aktif</span>' : ''}
                        ${!isDynamic ? '<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 text-[9px] font-bold">Sistem Bawaan</span>' : '<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] text-[9px] font-bold">Kustom Toko</span>'}
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500">
                            <i class="fa-regular fa-calendar mr-1"></i> ${esc(formatDateIndo(log.date))}
                        </span>
                        ${isDynamic ? `
                        <button onclick="window.editChangelogEntry('${esc(log.id)}')" class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs transition-all" title="Edit Catatan">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button onclick="window.deleteChangelogEntry('${esc(log.id)}')" class="w-7 h-7 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center text-xs transition-all" title="Hapus Catatan">
                            <i class="fa-solid fa-trash"></i>
                        </button>` : ''}
                    </div>
                </div>

                <div>
                    <h4 class="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                        ${esc(log.title)}
                    </h4>
                </div>

                <ul class="space-y-1.5 pt-1">
                    ${itemsList}
                </ul>
            </div>`;
        }).join('');
    }

    container.innerHTML = `
    <div class="max-w-4xl mx-auto space-y-6 pb-12">
        <!-- Top Action Card -->
        <div class="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.12)] border border-[rgba(var(--color-primary-rgb),0.22)] text-[var(--color-primary)] flex items-center justify-center text-xl shadow-2xs shrink-0">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <h3 class="text-base font-extrabold text-slate-900 dark:text-white">
                            Log Pembaruan Sistem (Changelog)
                        </h3>
                        <span class="px-2 py-0.5 rounded-md primary-bg text-white text-[10px] font-black uppercase">
                            ${esc(latestVer)}
                        </span>
                    </div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Setiap pembaruan akan langsung tampil secara real-time di antarmuka toko pengunjung
                    </p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="window.openChangelogModal()" class="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-eye text-slate-400"></i> Preview Etalase
                </button>
                <button onclick="window.toggleChangelogForm()" class="px-4 py-2 rounded-xl primary-bg text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95">
                    <i class="fa-solid fa-plus"></i> Tambah Catatan Baru
                </button>
            </div>
        </div>

        <!-- Form Tambah / Edit Catatan Pembaruan (Dinamis) -->
        <div id="changelog-form-box" class="${isAddingLog ? 'block' : 'hidden'} p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-[var(--color-primary)]/40 shadow-lg space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h4 id="changelog-form-title" class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-circle-plus text-[var(--color-primary)]"></i> Tambah Catatan Pembaruan Baru
                </h4>
                <button onclick="window.toggleChangelogForm(false)" class="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 flex items-center justify-center text-xs">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Nomor Versi</label>
                    <input id="form-log-version" type="text" placeholder="Cth: v1.2.1" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none" />
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Kategori Update</label>
                    <select id="form-log-category" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none">
                        <option value="feature">Fitur Baru (Feature)</option>
                        <option value="optimization">Optimasi Performa (Optimization)</option>
                        <option value="maintenance">Pemeliharaan &amp; Maintenance</option>
                        <option value="bugfix">Perbaikan Bug (Bugfix)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Tanggal Rilis</label>
                    <input id="form-log-date" type="date" value="${getTodayDateString()}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none" />
                </div>
            </div>

            <div>
                <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Judul Ringkas Pembaruan</label>
                <input id="form-log-title" type="text" placeholder="Cth: Penambahan Fitur Cetak Invoice A4 & Perbaikan Kecepatan Katalog" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none" />
            </div>

            <div>
                <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Rincian Perubahan (Tulis 1 Poin per Baris)
                </label>
                <textarea id="form-log-items" rows="4" placeholder="- Memperbarui sistem pencarian nama produk&#10;- Mempercepat loading keranjang belanja&#10;- Menambahkan tombol cetak invoice baru" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium text-slate-800 dark:text-white focus:border-[var(--color-primary)] focus:outline-none leading-relaxed"></textarea>
                <p class="text-[10px] text-slate-400 mt-1">Setiap baris baru otomatis menjadi 1 poin checklist pada tampilan kartu rilis.</p>
            </div>

            <div class="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button onclick="window.toggleChangelogForm(false)" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold transition-all">
                    Batal
                </button>
                <button onclick="window.saveChangelogEntry()" class="px-5 py-2 rounded-xl primary-bg text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95">
                    <i class="fa-solid fa-cloud-arrow-up"></i> Simpan &amp; Publikasikan
                </button>
            </div>
        </div>

        <!-- Daftar Riwayat Pembaruan -->
        <div class="space-y-3.5">
            <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-1">
                Riwayat Rilis &amp; Log Perubahan (${allLogs.length} Versi)
            </h4>
            <div class="space-y-3">
                ${logsHtml}
            </div>
        </div>
    </div>`;
};

/**
 * Toggle form tambah/edit catatan changelog
 */
export const toggleChangelogForm = (showState = null) => {
    isAddingLog = showState !== null ? showState : !isAddingLog;
    if (!isAddingLog) {
        editingLogId = null;
    }
    rAdmChangelog();
};

/**
 * Buka form edit catatan kustom
 */
export const editChangelogEntry = (id) => {
    const entry = (appData.changelog || []).find(x => x.id === id);
    if (!entry) return;

    editingLogId = id;
    isAddingLog = true;
    rAdmChangelog();

    setV('form-log-version', entry.version || '');
    setV('form-log-category', entry.category || 'feature');
    setV('form-log-date', entry.date || getTodayDateString());
    setV('form-log-title', entry.title || '');
    setV('form-log-items', (entry.items || []).join('\n'));

    const titleEl = el('changelog-form-title');
    if (titleEl) {
        titleEl.innerHTML = `<i class="fa-solid fa-pen text-[var(--color-primary)]"></i> Edit Catatan Pembaruan (${esc(entry.version)})`;
    }

    const box = el('changelog-form-box');
    if (box) box.scrollIntoView({ behavior: 'smooth' });
};

/**
 * Simpan catatan pembaruan baru atau edit catatan ke Firestore
 */
export const saveChangelogEntry = async () => {
    const version = (getV('form-log-version') || '').trim();
    const category = getV('form-log-category') || 'feature';
    const date = getV('form-log-date') || getTodayDateString();
    const title = (getV('form-log-title') || '').trim();
    const rawItems = (getV('form-log-items') || '').trim();

    if (!version) return showToast('Nomor versi harus diisi (contoh: v1.2.1)!');
    if (!title) return showToast('Judul pembaruan harus diisi!');
    if (!rawItems) return showToast('Tuliskan minimal 1 poin rincian perubahan!');

    // Format list items dari textarea
    const items = rawItems
        .split('\n')
        .map(s => s.replace(/^[-*•]\s*/, '').trim())
        .filter(s => s.length > 0);

    if (items.length === 0) return showToast('Rincian perubahan tidak boleh kosong!');

    sLoad('Menyimpan catatan pembaruan...');

    const logEntry = {
        id: editingLogId || ('log-' + Date.now().toString(36)),
        version: version.startsWith('v') ? version : 'v' + version,
        category: category,
        date: date,
        title: title,
        items: items,
        updatedAt: new Date().toISOString()
    };

    appData.changelog = appData.changelog || [];

    if (editingLogId) {
        const idx = appData.changelog.findIndex(x => x.id === editingLogId);
        if (idx !== -1) {
            appData.changelog[idx] = logEntry;
        } else {
            appData.changelog.unshift(logEntry);
        }
    } else {
        appData.changelog.unshift(logEntry);
    }

    try {
        await saveApp(['changelog']);
        showToast('Catatan pembaruan berhasil dipublikasikan secara real-time!', 'success');
        isAddingLog = false;
        editingLogId = null;
        rAdmChangelog();
    } catch (e) {
        showToast('Gagal menyimpan log pembaruan: ' + e.message, 'error');
    } finally {
        hLoad();
    }
};

/**
 * Hapus catatan pembaruan kustom
 */
export const deleteChangelogEntry = (id) => {
    const entry = (appData.changelog || []).find(x => x.id === id);
    if (!entry) return;

    showConfirm(
        `Hapus catatan pembaruan versi "${entry.version}"?`,
        async () => {
            sLoad('Menghapus catatan...');
            appData.changelog = (appData.changelog || []).filter(x => x.id !== id);
            try {
                await saveApp(['changelog']);
                showToast('Catatan berhasil dihapus!', 'success');
                rAdmChangelog();
            } catch (e) {
                showToast('Gagal menghapus catatan: ' + e.message, 'error');
            } finally {
                hLoad();
            }
        },
        'Ya, Hapus',
        'Konfirmasi Hapus'
    );
};

// Expose ke global window untuk kemudahan pemanggilan dari atribut HTML onclick
window.rAdmChangelog = rAdmChangelog;
window.toggleChangelogForm = toggleChangelogForm;
window.editChangelogEntry = editChangelogEntry;
window.saveChangelogEntry = saveChangelogEntry;
window.deleteChangelogEntry = deleteChangelogEntry;
