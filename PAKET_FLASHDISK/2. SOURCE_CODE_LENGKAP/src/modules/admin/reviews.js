/**
 * ============================================================
 * MODUL ADMIN: MODERASI ULASAN PELANGGAN
 * Mengatur filter ulasan (semua/tampil/sembunyi), balas ulasan,
 * toggle visibilitas testimoni pembeli, dan hapus ulasan.
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { gReviews, reviewFilterMode, setReviewFilterMode } from '../../core/state.js';
import { setH, esc, showToast, showConfirm, sLoad, hLoad } from '../../core/utils.js';

/**
 * Filter mode ulasan admin ('all', 'visible', 'hidden')
 */
export const filterReviews = (mode) => {
    setReviewFilterMode(mode);
    rAdmReviews();
};

/**
 * Render daftar ulasan di panel admin
 */
export const rAdmReviews = () => {
    const currentFilter = reviewFilterMode || 'all';
    const filtered = (gReviews || []).filter(r => {
        if (currentFilter === 'visible') return r.isVisible !== false;
        if (currentFilter === 'hidden') return r.isVisible === false;
        return true;
    });

    const filterTabs = `
        <div class="flex gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-5 w-fit">
            ${[{k: 'all', l: 'Semua'}, {k: 'visible', l: 'Ditampilkan'}, {k: 'hidden', l: 'Disembunyikan'}].map(f => `
                <button onclick="filterReviews('${f.k}')" class="px-3.5 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${currentFilter === f.k ? 'shadow-sm' : 'text-slate-500 dark:text-slate-400'}" style="${currentFilter === f.k ? 'background:var(--color-primary);color:#fff' : ''}">${f.l}</button>
            `).join('')}
        </div>`;

    if (!filtered.length) {
        setH('admin-content', filterTabs + `<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-comment-slash text-5xl mb-4 opacity-30"></i>Belum ada ulasan</div>`);
        return;
    }

    const starRow = (n) => Array.from({length: 5}, (_, idx) => `<i class="fa-solid fa-star ${idx < Math.round(n) ? 'text-amber-400' : 'text-slate-200 dark:text-slate-700'}"></i>`).join('');

    const list = filtered.map(r => {
        let dateStr = '';
        try { 
            if (r.createdAt && r.createdAt.toDate) {
                dateStr = r.createdAt.toDate().toLocaleDateString('id-ID', {day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'}); 
            }
        } catch(e) {}
        const hidden = r.isVisible === false;
        return `
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border shadow-sm ${hidden ? 'border-rose-200 bg-rose-50/40 dark:border-rose-900/40 dark:bg-rose-900/10' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800'} mb-3">
            <div class="flex items-start justify-between gap-3 mb-2">
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate">${esc(r.customerName || 'Pelanggan')}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">${esc(r.productName || '')}${r.variantName ? ' · ' + esc(r.variantName) : ''}</p>
                </div>
                <span class="text-[9px] font-bold text-slate-400 whitespace-nowrap">${dateStr}</span>
            </div>
            <div class="flex text-xs mb-2.5">${starRow(r.rating)}</div>
            ${r.text ? `<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2.5">${esc(r.text)}</p>` : ''}
            ${r.photoUrl ? `<img src="${esc(r.photoUrl)}" onclick="window.open('${esc(r.photoUrl)}','_blank')" class="w-20 h-20 rounded-xl object-cover border border-slate-200 dark:border-slate-700 cursor-pointer mb-2.5" onerror="this.style.display='none'" loading="lazy">` : ''}
            ${r.adminReply ? `<div class="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-3 mb-2.5"><p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1"><i class="fa-solid fa-store mr-1"></i>Balasan Anda</p><p class="text-[11px] text-slate-600 dark:text-slate-300">${esc(r.adminReply)}</p></div>` : ''}
            <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                <button onclick="replyToReview(${r.id})" class="px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-blue-100 transition-all"><i class="fa-solid fa-reply"></i> ${r.adminReply ? 'Edit Balasan' : 'Balas'}</button>
                <button onclick="toggleReviewVisibility(${r.id})" class="px-3 py-2 rounded-xl ${hidden ? 'bg-emerald-50 dark:bg-emerald-900/20 text-[var(--color-primary)] hover:bg-emerald-100' : 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100'} text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all"><i class="fa-solid ${hidden ? 'fa-eye' : 'fa-eye-slash'}"></i> ${hidden ? 'Tampilkan' : 'Sembunyikan'}</button>
                <button onclick="deleteReview(${r.id})" class="px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-rose-100 transition-all"><i class="fa-solid fa-trash"></i> Hapus</button>
            </div>
        </div>`;
    }).join('');

    setH('admin-content', filterTabs + list);
};

/**
 * Balas ulasan pelanggan
 */
export const replyToReview = async (reviewId) => {
    const r = (gReviews || []).find(x => x.id === reviewId);
    if (!r) return;
    
    if (typeof window.customPrompt === 'function') {
        window.customPrompt("Tulis balasan untuk ulasan ini:", r.adminReply || '', async (reply) => {
            sLoad('Menyimpan balasan...');
            try {
                await db.collection("freshmart").doc("cms_data").collection("reviews").doc(reviewId.toString()).update({ adminReply: reply });
                showToast("Balasan tersimpan!");
            } catch(e) { 
                showToast("Gagal menyimpan balasan!"); 
            } finally { 
                hLoad(); 
            }
        });
    }
};

/**
 * Sembunyikan atau tampilkan ulasan di storefront
 */
export const toggleReviewVisibility = async (reviewId) => {
    const r = (gReviews || []).find(x => x.id === reviewId);
    if (!r) return;
    const newVisible = r.isVisible === false ? true : false;
    sLoad('Menyimpan...');
    try {
        await db.collection("freshmart").doc("cms_data").collection("reviews").doc(reviewId.toString()).update({ isVisible: newVisible });
        showToast(newVisible ? "Ulasan ditampilkan lagi!" : "Ulasan disembunyikan dari halaman produk!");
    } catch(e) { 
        showToast("Gagal mengubah status ulasan!"); 
    } finally { 
        hLoad(); 
    }
};

/**
 * Hapus ulasan permanen
 */
export const deleteReview = (reviewId) => {
    showConfirm("Hapus Ulasan", "Ulasan yang dihapus tidak bisa dikembalikan lagi.", async () => {
        sLoad('Menghapus...');
        try {
            await db.collection("freshmart").doc("cms_data").collection("reviews").doc(reviewId.toString()).delete();
            showToast("Ulasan dihapus!");
        } catch(e) { 
            showToast("Gagal menghapus ulasan!"); 
        } finally { 
            hLoad(); 
        }
    });
};

// ─── Expose ke window untuk atribut onclick di HTML ──────
window.filterReviews = filterReviews;
window.rAdmReviews = rAdmReviews;
window.replyToReview = replyToReview;
window.toggleReviewVisibility = toggleReviewVisibility;
window.deleteReview = deleteReview;
