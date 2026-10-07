/**
 * ============================================================
 * UNIVERSAL PRINT PREVIEW GATE (WAJIB PREVIEW SEBELUM CETAK)
 * ------------------------------------------------------------
 * Aturan sistem: TIDAK ADA dokumen yang boleh dicetak tanpa
 * melalui preview terlebih dahulu.
 *
 * 1. Struk Thermal (58mm / 80mm) — openThermalPrintPreview()
 *    Menampilkan hasil PERSIS seperti yang akan keluar dari
 *    printer (dibangun dari baris ESC/POS yang sama), lengkap
 *    dengan perataan, huruf tebal, dan ukuran font besar.
 *
 * 2. Dokumen HTML / A4 bebas — openHtmlPrintPreview()
 *    Untuk dokumen di luar mesin openDocPreview (mis. Bukti
 *    Kas Keluar), ditampilkan dalam lembar preview terisolasi.
 * ============================================================
 */

import { esc } from '../../core/utils.js';
import { showToast } from '../../core/ui.js';
import { getPrinterConfig, getPaperCols, savePrinterConfig } from './printer-settings.js';

const THERMAL_MODAL_ID = 'utp-thermal-modal';
const HTML_MODAL_ID    = 'utp-html-modal';

let _thermalJob   = null;
let _htmlJob      = null;
let _keyHandler   = null;
let _prevOverflow = null;

// ─── Style terpusat (diinjeksi sekali) ───────────────────────
const ensurePreviewStyles = () => {
    if (document.getElementById('utp-style')) return;
    const s = document.createElement('style');
    s.id = 'utp-style';
    s.textContent = `
        @keyframes utpSheetIn { from { transform: translateY(28px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .utp-sheet { animation: utpSheetIn .2s cubic-bezier(.2,.8,.2,1); }
        .utp-canvas {
            background-color: #e9edf2;
            background-image: radial-gradient(rgba(15,23,42,.07) 1px, transparent 1px);
            background-size: 14px 14px;
        }
        .dark .utp-canvas { background-color: #060b16; background-image: radial-gradient(rgba(148,163,184,.08) 1px, transparent 1px); }
        .utp-paper {
            position: relative; background: #fff; color: #0b0b0b;
            font-family: 'Courier New', Courier, ui-monospace, monospace;
            font-size: 12px; line-height: 1.32; padding: 16px 12px 18px;
            box-shadow: 0 1px 2px rgba(15,23,42,.08), 0 14px 32px -12px rgba(15,23,42,.35);
            margin-bottom: 14px; box-sizing: content-box;
        }
        .utp-paper::after {
            content: ""; position: absolute; left: 0; right: 0; bottom: -10px; height: 10px;
            background:
                linear-gradient(45deg, transparent 33.33%, #fff 33.33%, #fff 66.66%, transparent 66.66%),
                linear-gradient(-45deg, transparent 33.33%, #fff 33.33%, #fff 66.66%, transparent 66.66%);
            background-size: 14px 28px; background-position: 0 -14px;
        }
        .utp-line { white-space: pre; overflow: hidden; min-height: 1.32em; }
        .utp-line.utp-title { font-size: 2em; line-height: 1.12; }
        .utp-line.utp-tall { height: 2.64em; }
        .utp-line.utp-tall > span { display: block; transform: scaleY(2); transform-origin: top center; }
        .utp-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            width: 100%;
            line-height: 1.32;
        }
        .utp-col-left {
            text-align: left;
            word-break: break-word;
            flex: 1 1 auto;
        }
        .utp-col-right {
            text-align: right;
            white-space: nowrap;
            flex-shrink: 0;
            margin-left: 6px;
            font-variant-numeric: tabular-nums;
        }
        .utp-separator {
            border-bottom: 1px dashed #000;
            margin: 4px 0;
            width: 100%;
            height: 0;
        }
        .utp-double-separator {
            border-bottom: 3px double #000;
            margin: 4px 0;
            width: 100%;
            height: 0;
        }
        .utp-align-center { text-align: center; }
        .utp-align-right { text-align: right; }
        .utp-align-left { text-align: left; }
        .utp-empty-line { height: 0.65em; }
        .utp-barcode-wrap { display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 4px 0 2px; }
        .utp-barcode-bars {
            width: 80%; max-width: 240px; height: 38px;
            background: repeating-linear-gradient(
                90deg,
                #000 0px, #000 2px,
                transparent 2px, transparent 4px,
                #000 4px, #000 7px,
                transparent 7px, transparent 9px,
                #000 9px, #000 11px,
                transparent 11px, transparent 13px,
                #000 13px, #000 16px,
                transparent 16px, transparent 18px,
                #000 18px, #000 19px,
                transparent 19px, transparent 22px
            );
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
        }
        .utp-barcode-code {
            font-family: 'Courier New', Courier, ui-monospace, monospace;
            font-size: 11px; font-weight: 700; letter-spacing: 2px; margin-top: 3px;
        }
        .utp-chip {
            display: inline-flex; align-items: center; gap: 5px; white-space: nowrap;
            padding: 4px 9px; border-radius: 999px; font-size: 10.5px; font-weight: 700;
        }
        .utp-seg-btn { transition: all .15s ease; }
        .utp-seg-btn.is-active {
            background: var(--color-primary, #c59b27); color: #fff;
            box-shadow: 0 2px 8px rgba(var(--color-primary-rgb, 197,155,39), .35);
        }
        .utp-btn-primary {
            background: linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);
            box-shadow: 0 6px 16px -4px rgba(var(--color-primary-rgb,197,155,39), .5);
        }
        .utp-html-frame { width: 100%; border: 0; background: #fff; border-radius: 6px; box-shadow: 0 14px 32px -12px rgba(15,23,42,.35); }
    `;
    document.head.appendChild(s);
};

// ─── Helper scroll lock & keyboard ───────────────────────────
const lockBody = () => {
    if (_prevOverflow === null) {
        _prevOverflow = document.body.style.overflow || '';
        document.body.style.overflow = 'hidden';
    }
};
const unlockBody = () => {
    if (_prevOverflow !== null && !document.getElementById(THERMAL_MODAL_ID) && !document.getElementById(HTML_MODAL_ID)) {
        document.body.style.overflow = _prevOverflow;
        _prevOverflow = null;
    }
};
const bindKeys = (onConfirm, onCancel) => {
    unbindKeys();
    _keyHandler = (e) => {
        const tag = (e.target && e.target.tagName) || '';
        if (e.key === 'Escape') { e.preventDefault(); onCancel(); }
        else if (e.key === 'Enter' && !/INPUT|TEXTAREA|SELECT/.test(tag)) { e.preventDefault(); onConfirm(); }
    };
    document.addEventListener('keydown', _keyHandler, true);
};
const unbindKeys = () => {
    if (_keyHandler) document.removeEventListener('keydown', _keyHandler, true);
    _keyHandler = null;
};

const deviceLabel = (cfg) => {
    const t = cfg.deviceType || 'rawbt';
    const isAndroid = /android/i.test(navigator.userAgent || '');
    if (t === 'rawbt') return isAndroid || window.AndroidNativeApp ? 'RawBT Android' : 'Printer Browser';
    if (t === 'bluetooth') return 'Bluetooth';
    if (t === 'usb') return 'USB OTG';
    if (t === 'network') return 'WiFi / LAN';
    return 'Printer Sistem';
};

// ─── Render baris struk thermal (WYSIWYG ESC/POS & HTML) ─────
const renderThermalLines = (job) => {
    // 1. Prioritas 1: Jika job.html sudah ada, render HTML Flexbox langsung (WYSIWYG 100% presisi)
    if (job.html && /<[a-z][\s\S]*>/i.test(job.html)) {
        return `<div class="utp-html-rendered" style="white-space:normal;width:100%;">${job.html}</div>`;
    }

    let lines = Array.isArray(job.previewLines) && job.previewLines.length ? job.previewLines : null;
    if (!lines) {
        lines = String(job.plainText || '').split('\n').map(t => ({ t, a: 'left', b: false, s: 'normal' }));
    }

    // Buang baris kosong berlebih di ekor (feed kertas) agar preview ringkas
    const trimmed = [...lines];
    while (trimmed.length > 1 && !String(trimmed[trimmed.length - 1].t || '').trim()) trimmed.pop();

    return trimmed.map(l => {
        if (l.type === 'two-column') {
            const bClass = l.b ? 'font-bold' : '';
            return `<div class="utp-row ${bClass}"><div class="utp-col-left">${esc(l.left)}</div><div class="utp-col-right">${esc(l.right)}</div></div>`;
        }
        if (l.type === 'separator') {
            return `<div class="utp-separator"></div>`;
        }
        if (l.type === 'double-separator') {
            return `<div class="utp-double-separator"></div>`;
        }
        if (l.isBarcode || l.s === 'barcode' || l.type === 'barcode') {
            const code = esc(l.code || l.t || '');
            return `
            <div class="utp-barcode-wrap" style="text-align:center;">
                <div class="utp-barcode-bars mx-auto" aria-hidden="true"></div>
                <div class="utp-barcode-code">*${code}*</div>
            </div>`;
        }

        const txt = esc(String(l.t ?? '')) || '&nbsp;';
        const align = l.a === 'center' ? 'center' : (l.a === 'right' ? 'right' : 'left');
        const weight = l.b ? 800 : 400;

        if (l.s === 'title' || l.s === 'wide') {
            return `<div class="utp-line utp-title" style="text-align:${align};font-weight:${weight}">${txt}</div>`;
        }
        if (l.s === 'tall' || l.s === 'total') {
            return `<div class="utp-line utp-tall" style="text-align:${align};font-weight:${weight}"><span>${txt}</span></div>`;
        }
        return `<div class="utp-line" style="text-align:${align};font-weight:${weight}">${txt}</div>`;
    }).join('');
};

const renderThermalModal = () => {
    const job = _thermalJob;
    if (!job) return;
    const cfg = getPrinterConfig();
    const cols = getPaperCols(cfg.paperSize);
    const is80 = cols >= 40;
    const lineCount = Array.isArray(job.previewLines) ? job.previewLines.length : String(job.plainText || '').split('\n').length;

    const paperSwitch = typeof job.rebuild === 'function' ? `
        <div class="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70" role="group" aria-label="Ukuran kertas">
            <button type="button" id="utp-paper-58" onclick="window.setThermalPreviewPaper('58mm')" class="utp-seg-btn ${!is80 ? 'is-active' : 'text-slate-600 dark:text-slate-300'} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">58mm</button>
            <button type="button" id="utp-paper-80" onclick="window.setThermalPreviewPaper('80mm')" class="utp-seg-btn ${is80 ? 'is-active' : 'text-slate-600 dark:text-slate-300'} px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer">80mm</button>
        </div>` : '';

    const html = `
    <div id="${THERMAL_MODAL_ID}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-thermal-title" onclick="if(event.target===this) window.closeThermalPrintPreview()">
        <div class="utp-sheet bg-white dark:bg-slate-900 w-full ${is80 ? 'sm:max-w-[500px]' : 'sm:max-w-[440px]'} rounded-t-[2rem] sm:rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col max-h-[94dvh] overflow-hidden">
            <div class="sm:hidden flex justify-center pt-2.5"><span class="w-10 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span></div>

            <div class="px-4 sm:px-5 pt-3 sm:pt-4 pb-3 flex items-start gap-3 border-b border-slate-100 dark:border-slate-800">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-white shrink-0 utp-btn-primary"><i class="fa-solid fa-eye"></i></div>
                <div class="flex-1 min-w-0">
                    <h2 id="utp-thermal-title" class="font-black text-[15px] text-slate-900 dark:text-white leading-tight">Preview Sebelum Cetak</h2>
                    <p class="text-[11.5px] text-slate-500 dark:text-slate-400 truncate mt-0.5">${esc(job.title || 'Struk Thermal')}</p>
                </div>
                <button type="button" id="utp-thermal-close" onclick="window.closeThermalPrintPreview()" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center cursor-pointer transition-colors shrink-0" aria-label="Tutup preview"><i class="fa-solid fa-xmark"></i></button>
            </div>

            <div class="px-4 sm:px-5 py-2.5 flex items-center justify-between gap-2 flex-wrap border-b border-slate-100 dark:border-slate-800">
                <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-scroll text-[var(--color-primary)]"></i>${is80 ? '80mm' : '58mm'} · ${cols} kolom</span>
                    <span class="utp-chip bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"><i class="fa-solid fa-print text-slate-400"></i>${esc(deviceLabel(cfg))}</span>
                    <span class="utp-chip bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300"><i class="fa-solid fa-check"></i>${lineCount} baris</span>
                </div>
                ${paperSwitch}
            </div>

            <div class="utp-canvas flex-1 overflow-auto px-3 py-5 sm:px-5 custom-scrollbar">
                <div class="utp-paper mx-auto" style="width:${cols}ch;">
                    ${renderThermalLines(job)}
                </div>
            </div>

            <div class="px-4 sm:px-5 pt-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900" style="padding-bottom:max(14px, env(safe-area-inset-bottom));">
                <p class="text-[11px] text-slate-500 dark:text-slate-400 mb-2.5 flex items-start gap-1.5"><i class="fa-solid fa-circle-info text-[var(--color-primary)] mt-0.5"></i><span>Periksa kembali isi struk di atas. Tekan <b class="text-slate-700 dark:text-slate-200">Cetak Sekarang</b> untuk mengirim ke printer.</span></p>
                <div class="flex gap-2">
                    <button type="button" id="utp-thermal-cancel" onclick="window.closeThermalPrintPreview()" class="px-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold text-xs cursor-pointer active:scale-95 transition-all">Batal</button>
                    <button type="button" id="utp-thermal-settings" onclick="window.openPrinterSettingsFromPreview()" class="w-12 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center cursor-pointer active:scale-95 transition-all" title="Pengaturan Printer" aria-label="Pengaturan Printer"><i class="fa-solid fa-gear"></i></button>
                    <button type="button" id="utp-thermal-confirm" onclick="window.confirmThermalPrint()" class="utp-btn-primary flex-1 py-3.5 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all hover:brightness-105"><i class="fa-solid fa-print"></i> Cetak Sekarang</button>
                </div>
            </div>
        </div>
    </div>`;

    document.getElementById(THERMAL_MODAL_ID)?.remove();
    document.body.insertAdjacentHTML('beforeend', html);
    setTimeout(() => document.getElementById('utp-thermal-confirm')?.focus({ preventScroll: true }), 60);
};

/**
 * Buka preview struk thermal. Cetak hanya terjadi setelah user
 * menekan "Cetak Sekarang".
 * @param {Object} job
 * @param {string}   job.base64        Payload ESC/POS base64
 * @param {string}   job.plainText     Teks polos struk
 * @param {string}   [job.html]        Konten HTML (fallback non-ESC/POS)
 * @param {Array}    [job.previewLines] Baris {t,a,b,s} dari EscPosBuilder
 * @param {string}   [job.title]       Judul dokumen
 * @param {Function} [job.rebuild]     () => payload baru (saat ukuran kertas diganti)
 * @param {Function} [job.onConfirm]   Dipanggil sebelum dispatch ke printer
 * @param {Function} job.dispatch      (base64, plainText, html) => kirim ke printer
 */
export const openThermalPrintPreview = (job) => {
    if (!job || typeof job.dispatch !== 'function') return false;
    ensurePreviewStyles();
    _thermalJob = { ...job };
    renderThermalModal();
    lockBody();
    bindKeys(() => confirmThermalPrint(), () => closeThermalPrintPreview());
    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('thermalPreview');
    }
    return true;
};

export const closeThermalPrintPreview = (fH = false) => {
    const doClose = () => {
        const job = _thermalJob;
        document.getElementById(THERMAL_MODAL_ID)?.remove();
        _thermalJob = null;
        unbindKeys();
        unlockBody();
        if (job && typeof job.onCancel === 'function') {
            try { job.onCancel(); } catch (e) {}
        }
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('thermalPreview', fH, doClose);
    } else {
        doClose();
    }
};

export const confirmThermalPrint = () => {
    const job = _thermalJob;
    if (!job) return;
    _thermalJob = null;
    document.getElementById(THERMAL_MODAL_ID)?.remove();
    unbindKeys();
    unlockBody();
    if (typeof job.onConfirm === 'function') {
        try { job.onConfirm(); } catch (e) { console.warn('[PrintPreview] onConfirm error:', e); }
    }
    job.dispatch(job.base64, job.plainText, job.html || '');
};

export const setThermalPreviewPaper = (size) => {
    if (!_thermalJob || typeof _thermalJob.rebuild !== 'function') return;
    savePrinterConfig({ paperSize: size });
    try {
        const p = _thermalJob.rebuild();
        if (p) {
            _thermalJob.base64 = p.base64;
            _thermalJob.plainText = p.plainText;
            _thermalJob.previewLines = p.previewLines;
            _thermalJob.html = p.html || '';
        }
    } catch (e) {
        console.warn('[PrintPreview] Gagal rebuild payload:', e);
    }
    renderThermalModal();
    showToast(`Ukuran kertas diubah ke ${size} ✅`);
};

export const openPrinterSettingsFromPreview = () => {
    closeThermalPrintPreview();
    if (typeof window.openPrinterSettingsModal === 'function') {
        window.openPrinterSettingsModal();
        showToast('Atur printer, lalu tekan Cetak lagi untuk melihat preview terbaru.');
    }
};

/**
 * ============================================================
 * PREVIEW DOKUMEN HTML / A4 BEBAS
 * ============================================================
 * @param {Object} opts
 * @param {string} opts.title     Judul preview
 * @param {string} opts.html      Dokumen HTML lengkap (<!DOCTYPE html>...)
 * @param {string} [opts.paper]   'a4' | 'slip' (lebar preview)
 */
export const openHtmlPrintPreview = (opts = {}) => {
    if (!opts.html) return false;
    ensurePreviewStyles();
    _htmlJob = { ...opts };
    const isA4 = (opts.paper || 'a4') === 'a4';

    document.getElementById(HTML_MODAL_ID)?.remove();
    document.body.insertAdjacentHTML('beforeend', `
    <div id="${HTML_MODAL_ID}" class="fixed inset-0 z-[10080] flex items-end sm:items-center justify-center sm:p-4" style="background:rgba(15,23,42,0.82)" role="dialog" aria-modal="true" aria-labelledby="utp-html-title" onclick="if(event.target===this) window.closeHtmlPrintPreview()">
        <div class="utp-sheet bg-white dark:bg-slate-900 w-full ${isA4 ? 'sm:max-w-[880px]' : 'sm:max-w-[680px]'} rounded-t-[2rem] sm:rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col h-[94dvh] sm:h-[90dvh] overflow-hidden">
            <div class="sm:hidden flex justify-center pt-2.5"><span class="w-10 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span></div>
            <div class="px-4 sm:px-5 pt-3 sm:pt-4 pb-3 flex items-start gap-3 border-b border-slate-100 dark:border-slate-800">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-white shrink-0 utp-btn-primary"><i class="fa-solid fa-file-lines"></i></div>
                <div class="flex-1 min-w-0">
                    <h2 id="utp-html-title" class="font-black text-[15px] text-slate-900 dark:text-white leading-tight">Preview Dokumen Sebelum Cetak</h2>
                    <p class="text-[11.5px] text-slate-500 dark:text-slate-400 truncate mt-0.5">${esc(opts.title || 'Dokumen')}</p>
                </div>
                <button type="button" id="utp-html-close" onclick="window.closeHtmlPrintPreview()" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center cursor-pointer transition-colors shrink-0" aria-label="Tutup preview"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="utp-canvas flex-1 overflow-hidden p-3 sm:p-5 flex">
                <iframe id="utp-html-frame" class="utp-html-frame flex-1 h-full" title="Preview dokumen"></iframe>
            </div>
            <div class="px-4 sm:px-5 pt-3 border-t border-slate-100 dark:border-slate-800" style="padding-bottom:max(14px, env(safe-area-inset-bottom));">
                <p class="text-[11px] text-slate-500 dark:text-slate-400 mb-2.5 flex items-start gap-1.5"><i class="fa-solid fa-circle-info text-[var(--color-primary)] mt-0.5"></i><span>Pastikan isi dokumen sudah benar sebelum dicetak.</span></p>
                <div class="flex gap-2">
                    <button type="button" id="utp-html-cancel" onclick="window.closeHtmlPrintPreview()" class="px-5 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold text-xs cursor-pointer active:scale-95 transition-all">Batal</button>
                    <button type="button" id="utp-html-confirm" onclick="window.confirmHtmlPrint()" class="utp-btn-primary flex-1 py-3.5 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all hover:brightness-105"><i class="fa-solid fa-print"></i> Cetak Sekarang</button>
                </div>
            </div>
        </div>
    </div>`);

    const frame = document.getElementById('utp-html-frame');
    if (frame) {
        const doc = frame.contentWindow.document;
        doc.open();
        doc.write(opts.html);
        doc.close();
    }
    lockBody();
    bindKeys(() => confirmHtmlPrint(), () => closeHtmlPrintPreview());
    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('htmlPreview');
    }
    return true;
};

export const closeHtmlPrintPreview = (fH = false) => {
    const doClose = () => {
        document.getElementById(HTML_MODAL_ID)?.remove();
        _htmlJob = null;
        unbindKeys();
        unlockBody();
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('htmlPreview', fH, doClose);
    } else {
        doClose();
    }
};

export const confirmHtmlPrint = () => {
    const frame = document.getElementById('utp-html-frame');
    if (!frame || !_htmlJob) return;

    // Aplikasi Android Native: cetak via jembatan native (WebView tidak mendukung iframe.print)
    if (window.AndroidNativeApp && typeof window.AndroidNativeApp.print === 'function') {
        try {
            const d = frame.contentWindow.document;
            const styles = Array.from(d.querySelectorAll('style')).map(s => s.outerHTML).join('');
            let section = document.getElementById('a4-print-section');
            if (!section) {
                section = document.createElement('div');
                section.id = 'a4-print-section';
                document.body.appendChild(section);
            }
            section.innerHTML = styles + d.body.innerHTML;
            document.body.classList.add('printing-a4');
            window.AndroidNativeApp.print();
            setTimeout(() => document.body.classList.remove('printing-a4'), 2500);
        } catch (e) {
            console.warn('[PrintPreview] Native print error:', e);
        }
        closeHtmlPrintPreview();
        return;
    }

    try {
        frame.contentWindow.focus();
        frame.contentWindow.print();
    } catch (e) {
        console.warn('[PrintPreview] iframe print error:', e);
        showToast('Gagal membuka dialog cetak. Coba lagi.', 'error');
    }
};

// ─── Expose ke window untuk atribut onclick ──────────────────
// Style preview diinjeksi sejak awal agar modal A4 (doc-preview-modal)
// memakai token desain yang sama persis dengan preview struk.
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ensurePreviewStyles, { once: true });
    } else {
        ensurePreviewStyles();
    }
}
export { ensurePreviewStyles };
window.openThermalPrintPreview       = openThermalPrintPreview;
window.closeThermalPrintPreview      = closeThermalPrintPreview;
window.closeThermalPreviewModal      = closeThermalPrintPreview;
window.confirmThermalPrint           = confirmThermalPrint;
window.setThermalPreviewPaper        = setThermalPreviewPaper;
window.openPrinterSettingsFromPreview = openPrinterSettingsFromPreview;
window.openHtmlPrintPreview          = openHtmlPrintPreview;
window.closeHtmlPrintPreview         = closeHtmlPrintPreview;
window.closeHtmlPreviewModal         = closeHtmlPrintPreview;
window.confirmHtmlPrint              = confirmHtmlPrint;

