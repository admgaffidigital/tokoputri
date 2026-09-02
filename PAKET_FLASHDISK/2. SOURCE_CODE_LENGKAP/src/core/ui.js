/**
 * ============================================================
 * MODUL UI: TOAST, MODAL KONFIRMASI, THEME & CUSTOM PROMPT
 * Mengatur notifikasi pop-up cerdas (Toast), dialog konfirmasi,
 * prompt dialog input, pergantian tema gelap/terang, dan copy voucher.
 * ============================================================
 */

import { el, show, hide, setIn } from './utils.js';
import { pushModalHistory, requestCloseModal } from './router.js';

export let toastT = null;
export let confirmCb = null;

/**
 * Salin kode voucher ke clipboard
 */
export const copyVoucher = async (code) => {
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(code);
        } else {
            const e = document.createElement('textarea');
            e.value = code;
            e.style.position = 'fixed';
            e.style.opacity = '0';
            document.body.appendChild(e);
            e.select();
            document.execCommand('copy');
            document.body.removeChild(e);
        }
        showToast("Kode " + code + " berhasil disalin!");
    } catch(err) {
        showToast("Gagal menyalin. Kode: " + code);
    }
};

/**
 * Tampilkan notifikasi Toast cerdas
 */
export const showToast = (m, type, title, duration) => {
    const t = el('toast');
    if (!t) return;

    if (!type) {
        const low = m.toLowerCase();
        if (/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(low)) type = 'success';
        else if (/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(low)) type = 'error';
        else if (/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(low)) type = 'warning';
        else if (/upload|proses|memuat|loading|sedang/.test(low)) type = 'loading';
        else type = 'info';
    }

    const style = getComputedStyle(document.documentElement);
    const pRgb  = style.getPropertyValue('--color-primary-rgb').trim() || '16,185,129';
    const pMain = style.getPropertyValue('--color-primary').trim() || '#10b981';
    const pDark = style.getPropertyValue('--color-primary-dark').trim() || '#047857';

    const cfg = {
        success: { icon: 'fa-circle-check',   label: 'Berhasil',   accent: pMain,     iconBg: `rgba(${pRgb},0.12)`,   border: `rgba(${pRgb},0.35)` },
        error:   { icon: 'fa-circle-xmark',   label: 'Gagal',      accent: '#ef4444', iconBg: 'rgba(239,68,68,0.12)', border: 'rgba(239,68,68,0.35)' },
        warning: { icon: 'fa-triangle-exclamation', label: 'Perhatian', accent: '#f59e0b', iconBg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.35)' },
        loading: { icon: 'fa-spinner fa-spin',label: 'Memproses', accent: pDark,     iconBg: `rgba(${pRgb},0.12)`,   border: `rgba(${pRgb},0.35)` },
        info:    { icon: 'fa-circle-info',    label: 'Informasi',  accent: '#3b82f6', iconBg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.35)' }
    };
    const c = cfg[type] || cfg.info;

    const iconEl = el('toast-icon');
    if (iconEl) iconEl.className = 'fa-solid ' + c.icon;
    const titleEl = el('toast-title');
    if (titleEl) { titleEl.textContent = title || c.label; titleEl.style.display = 'block'; titleEl.style.color = c.accent; }
    const iconWrap = el('toast-icon-wrap');
    if (iconWrap) { iconWrap.style.background = c.iconBg; iconWrap.style.color = c.accent; }
    setIn('toast-message', m.replace(/^[✅❌⚠️🎉🔔]\s*/, ''));

    let prog = el('toast-progress');
    if (!prog) { prog = document.createElement('div'); prog.id = 'toast-progress'; t.appendChild(prog); }
    prog.style.background  = c.accent;
    prog.style.transition  = 'none';
    prog.style.width       = '100%';
    prog.style.opacity     = '0.7';

    clearTimeout(toastT);
    t.style.top = 'calc(max(env(safe-area-inset-top), 16px) + 8px)';

    const dur = duration || (type === 'loading' ? 8000 : type === 'error' ? 4500 : 3000);
    requestAnimationFrame(() => requestAnimationFrame(() => {
        prog.style.transition = `width ${dur}ms linear`;
        prog.style.width = '0%';
    }));
    toastT = setTimeout(() => { t.style.top = '-160px'; }, dur);
};

export const showToastLoading = (m) => showToast(m, 'loading', 'Memproses...', 8000);
export const hideToast = () => { clearTimeout(toastT); const t = el('toast'); if(t) t.style.top = '-160px'; };

/**
 * Toggle Tema Gelap / Terang (Dark Mode)
 */
export const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('freshmart_theme', isDark ? 'dark' : 'light');
    const icon = document.getElementById('icon-theme') || document.getElementById('theme-toggle-icon');
    if (icon) icon.className = isDark ? 'fa-solid fa-sun text-sm text-amber-400' : 'fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300';
};

/**
 * Dialog Konfirmasi Aksi (Custom Confirm Modal)
 */
export const showConfirm = (t, m, cb, btnText = "Ya, Hapus", isDanger = true) => {
    setIn('confirm-title', t);
    setIn('confirm-msg', m);
    const b = el('confirm-yes-btn');
    if (b) {
        b.innerText = btnText;
        if (isDanger) {
            b.className = 'flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 active:scale-95 transition-all text-sm shadow-md shadow-rose-500/30';
            el('confirm-icon-box').className = 'w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800';
            el('confirm-icon').className = 'fa-solid fa-triangle-exclamation';
        } else {
            b.className = 'flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-sm';
            el('confirm-icon-box').className = 'w-16 h-16 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-[var(--color-primary)]/20';
            el('confirm-icon').className = 'fa-solid fa-copy';
        }
    }
    confirmCb = cb;
    const m2 = el('custom-confirm-modal');
    if (m2 && m2.classList.contains('hidden')) pushModalHistory('confirm');
    show('custom-confirm-modal');
    setTimeout(() => {
        el('custom-confirm-modal').classList.remove('opacity-0');
        el('custom-confirm-box').classList.remove('scale-95');
    }, 10);
};

export const closeConfirm = (fH = false) => {
    requestCloseModal('confirm', fH, () => {
        el('custom-confirm-modal').classList.add('opacity-0');
        el('custom-confirm-box').classList.add('scale-95');
        setTimeout(() => hide('custom-confirm-modal'), 300);
    });
};

export const executeConfirm = () => {
    if (confirmCb) {
        const cb = confirmCb;
        confirmCb = null;
        closeConfirm();
        setTimeout(() => { cb(); }, 150);
    }
};

/**
 * Custom Input Prompt Modal
 */
export const customPrompt = (title, defaultVal, callback) => {
    let div = document.createElement('div');
    div.className = 'fixed inset-0 z-[9999] bg-slate-900/80 flex items-center justify-center p-4 backdrop-blur-sm opacity-0 transition-opacity duration-300';
    div.innerHTML = `
        <div class="bg-white dark:bg-slate-800 rounded-[2rem] w-full max-w-[320px] p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative transform scale-95 transition-all duration-300 flex flex-col text-center">
            <h3 class="font-bold text-slate-900 dark:text-white text-lg mb-4">${title}</h3>
            <input type="text" id="prompt-input" value="${defaultVal}" class="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 mb-6 focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-center font-bold text-xl tracking-wider" autocomplete="off" />
            <div class="flex gap-3">
                <button id="prompt-cancel" class="flex-1 py-3.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 active:scale-95 transition-all text-sm">Batal</button>
                <button id="prompt-ok" class="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-md">Simpan</button>
            </div>
        </div>
    `;
    document.body.appendChild(div);
    const box = div.querySelector('div');
    
    pushModalHistory('prompt');
    
    setTimeout(() => { div.classList.remove('opacity-0'); box.classList.remove('scale-95'); }, 10);
    const input = div.querySelector('#prompt-input');
    input.focus();
    input.select();
    
    window.closePrompt = (fH = false) => {
        if (!div || !div.parentNode) return;
        requestCloseModal('prompt', fH, () => {
            div.classList.add('opacity-0'); box.classList.add('scale-95');
            setTimeout(() => div.remove(), 300);
            window.closePrompt = null;
        });
    };
    
    div.querySelector('#prompt-cancel').onclick = () => window.closePrompt();
    div.querySelector('#prompt-ok').onclick = () => {
        let val = input.value;
        window.closePrompt();
        callback(val);
    };
};

export const checkProPrint = () => {
    if (typeof window.openReceiptPreview === 'function') window.openReceiptPreview();
};

// ─── Expose ke window untuk atribut inline HTML ──────
window.copyVoucher = copyVoucher;
window.showToast = showToast;
window.showToastLoading = showToastLoading;
window.hideToast = hideToast;
window.toggleTheme = toggleTheme;
window.showConfirm = showConfirm;
window.closeConfirm = closeConfirm;
window.executeConfirm = executeConfirm;
window.customPrompt = customPrompt;
window.checkProPrint = checkProPrint;
