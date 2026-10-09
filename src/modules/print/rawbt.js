/**
 * ============================================================
 * MODUL DRIVER PRINTER RAWBT & ESC/POS ENGINE UNIVERSAL
 * Menangani integrasi penuh aplikasi RawBT (Android Free/Pro),
 * pembuatan byte ESC/POS binary & teks thermal (58mm / 80mm),
 * cetak seketika (Direct Print) tanpa dialog browser, serta
 * manajemen koneksi printer Bluetooth, USB OTG, dan WiFi LAN.
 * Didesain dengan presisi tinggi (Anti-Potong Tepi, Kalibrasi Kolom).
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { appData, gOrds, cVOrd, myOrders } from '../../core/state.js';
import { el, esc, extractOrderTaxInfo } from '../../core/utils.js';
import { showToast } from '../../core/ui.js';
import { getPrinterConfig, getPaperCols } from './printer-settings.js';
import { openThermalPrintPreview } from './print-preview.js';

// ─── Format Currency & Qty ───────────────────────────────────
export const fRp = (n) => 'Rp ' + Math.round(Number(n || 0)).toLocaleString('id-ID');
export const fRpNum = (n) => Math.round(Number(n || 0)).toLocaleString('id-ID');
export const formatQty = (q) => {
    const num = parseFloat(q);
    if (isNaN(num)) return '0';
    return Number.isInteger(num) ? String(num) : num.toFixed(3).replace(/\.?0+$/, '');
};

/**
 * Membersihkan string agar tepat 1 karakter per kolom cetak monospace:
 * - Menghapus emoji / surrogate pair yang sering merusak hitungan kolom thermal.
 * - Mengubah tab dan carriage return menjadi spasi.
 * - Membatasi hanya karakter ASCII yang didukung penuh printer kasir.
 */
export const cleanLineAscii = (str) => {
    if (!str) return '';
    return String(str)
        .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '') // Hapus emoji
        .replace(/[\r\t]/g, ' ')                        // Ganti tab / CR jadi spasi
        .replace(/[^\x20-\x7E\n]/g, ' ');               // Batasi karakter ASCII cetak
};

/**
 * Memecah teks panjang menjadi beberapa baris berdasarkan batas kata (Word Wrap),
 * mencegah kata terpotong di tengah-tengah pada baris thermal.
 */
export const wrapWords = (text, maxWidth) => {
    if (!text) return [];
    const clean = cleanLineAscii(text).replace(/ +/g, ' ').trim();
    if (!clean) return [];
    if (clean.length <= maxWidth) return [clean];

    const words = clean.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
        if (!word) continue;
        if (word.length > maxWidth) {
            // Jika kata tunggal lebih panjang dari batas kolom, potong presisi
            if (currentLine) {
                lines.push(currentLine);
                currentLine = '';
            }
            for (let i = 0; i < word.length; i += maxWidth) {
                const chunk = word.substring(i, i + maxWidth);
                if (chunk.length === maxWidth) {
                    lines.push(chunk);
                } else {
                    currentLine = chunk;
                }
            }
        } else if ((currentLine ? currentLine.length + 1 + word.length : word.length) <= maxWidth) {
            currentLine = currentLine ? currentLine + ' ' + word : word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
};

/**
 * Format tanggal ringkas presisi (contoh: 27/09/26 21:45)
 */
export const formatCompactDate = (dateVal, is80 = false) => {
    const d = dateVal ? new Date(dateVal) : new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = is80 ? d.getFullYear() : String(d.getFullYear()).slice(-2);
    const hour = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hour}:${min}`;
};

/**
 * Format dua kolom rata kiri dan rata kanan dengan kalkulasi spasi matematika presisi.
 * Jika teks kiri terlalu panjang:
 * - Jika truncateLeft=true: Teks kiri dipotong rapi agar sisi kanan tetap di baris yang sama.
 * - Jika truncateLeft=false: Teks kiri dibungkus rapi dan nilai kanan diletakkan di sisi kanan tanpa terpotong.
 */
export const formatTwoColumn = (leftStr, rightStr, cols, truncateLeft = false) => {
    const l = cleanLineAscii(String(leftStr || '')).trimEnd();
    const r = cleanLineAscii(String(rightStr || '')).trim();

    // 1. Muat sempurna dalam 1 baris
    const gap = cols - l.length - r.length;
    if (gap >= 0) {
        return [l + ' '.repeat(gap) + r];
    }

    // 2. Mode potong kiri (untuk header / label metadata seperti No Transaksi & Tanggal)
    if (truncateLeft) {
        const maxL = Math.max(0, cols - r.length - 1);
        const truncL = l.substring(0, maxL).trimEnd();
        const pad = Math.max(1, cols - truncL.length - r.length);
        return [truncL + ' '.repeat(pad) + r];
    }

    // 3. Mode multi-baris (untuk item belanja atau label finansial panjang)
    const leftLines = wrapWords(l, cols);
    const lastLeft = leftLines[leftLines.length - 1] || '';
    if (lastLeft.length + 1 + r.length <= cols) {
        const pad = cols - lastLeft.length - r.length;
        leftLines[leftLines.length - 1] = lastLeft + ' '.repeat(pad) + r;
        return leftLines;
    } else {
        const rightPad = Math.max(0, cols - r.length);
        return [...leftLines, ' '.repeat(rightPad) + r];
    }
};

/**
 * ============================================================
 * KELAS BUILDER ESC/POS & MONOSPACE THERMAL
 * Menghasilkan byte binary ESC/POS standar dan teks terformat.
 * ============================================================
 */
export const escReceipt = (str) => {
    if (!str) return '';
    return esc(String(str)).replace(/^ +/gm, (m) => '&nbsp;'.repeat(m.length));
};

export class EscPosBuilder {
    constructor(cols = 32) {
        this.cols = Number(cols) || 32;
        this.bytes = [];
        this.plainLines = [];
        // Baris terformat untuk Preview WYSIWYG (perataan, tebal, ukuran)
        this.previewLines = [];
        // Item terstruktur untuk rendering HTML Flexbox presisi
        this.items = [];
        this._bold = false;
        this._size = 'normal';
    }

    /** Reset/Inisialisasi printer (ESC @) */
    init() {
        this.bytes.push(0x1B, 0x40);
        return this;
    }

    /** Atur perataan teks (ESC a n: 0=Kiri, 1=Tengah, 2=Kanan) */
    align(alignment = 'left') {
        const val = alignment === 'center' ? 1 : alignment === 'right' ? 2 : 0;
        this.bytes.push(0x1B, 0x61, val);
        return this;
    }

    /** Mode tebal / bold (ESC E n) */
    bold(enable = true) {
        this.bytes.push(0x1B, 0x45, enable ? 1 : 0);
        this._bold = !!enable;
        return this;
    }

    /**
     * Atur ukuran font (GS ! n)
     * 'tall' / 'total' = Double Height (Tinggi 2x, Lebar 1x -> Kolom tetap penuh & presisi)
     * 'wide'           = Double Width (Lebar 2x, Tinggi 1x)
     * 'title'          = Double Width & Double Height (2x2)
     * 'normal'         = Normal 1x
     */
    size(type = 'normal') {
        this._size = type || 'normal';
        if (type === 'title') {
            this.bytes.push(0x1D, 0x21, 0x11); // Double width & height
        } else if (type === 'tall' || type === 'total') {
            this.bytes.push(0x1D, 0x21, 0x01); // Double height (tinggi 2x, lebar 1x)
        } else if (type === 'wide') {
            this.bytes.push(0x1D, 0x21, 0x10); // Double width
        } else {
            this.bytes.push(0x1D, 0x21, 0x00); // Normal
        }
        return this;
    }

    /** Menambahkan teks mentah dengan sanitasi ASCII */
    text(str) {
        if (!str) return this;
        const clean = cleanLineAscii(str);
        for (let i = 0; i < clean.length; i++) {
            this.bytes.push(clean.charCodeAt(i));
        }
        return this;
    }

    /** Menambahkan 1 baris teks diakhiri line-feed */
    line(str = '', alignMode = 'left') {
        this.align(alignMode);
        this.text(str);
        this.bytes.push(0x0A); // LF
        this.plainLines.push(str);
        const clean = cleanLineAscii(str);
        this.previewLines.push({ t: clean, a: alignMode, b: this._bold, s: this._size });
        this.items.push({ type: 'line', text: clean, align: alignMode, bold: this._bold, size: this._size });
        return this;
    }

    /** Mencetak teks di tengah dengan pembungkusan kata otomatis */
    centered(str = '') {
        const lines = wrapWords(str, this.cols);
        lines.forEach(l => this.line(l, 'center'));
        return this;
    }

    /**
     * Dua kolom rata kiri & kanan presisi tinggi (Flexbox HTML + Monospace ESC/POS)
     */
    twoColumn(leftStr = '', rightStr = '', boldMode = false, truncateLeft = false) {
        if (boldMode) this.bold(true);
        const lines = formatTwoColumn(leftStr, rightStr, this.cols, truncateLeft);
        lines.forEach(l => {
            this.align('left');
            this.text(l);
            this.bytes.push(0x0A);
            this.plainLines.push(l);
        });
        const cleanL = cleanLineAscii(String(leftStr || ''));
        const cleanR = cleanLineAscii(String(rightStr || ''));
        this.previewLines.push({ type: 'two-column', left: cleanL, right: cleanR, t: lines[0], a: 'left', b: !!boldMode, s: this._size });
        this.items.push({ type: 'two-column', left: cleanL, right: cleanR, bold: !!boldMode, size: this._size });
        if (boldMode) this.bold(false);
        return this;
    }

    /**
     * Format baris item barang POS kasir presisi tinggi:
     * - Baris 1: Nama barang + varian (word-wrap rapi, bold)
     * - Baris 2: Qty x Harga satuan di kiri, Subtotal di kanan rata tepi
     * - Baris 3: Diskon item jika ada
     * - Baris 4: Info PO jika ada
     */
    itemRow(item) {
        const vText = item.variantName ? ` (${item.variantName}${item.colorCode ? ' ' + item.colorCode : ''})` : '';
        const itemName = (item.name || 'Barang') + vText + (item.poTime ? ' [PO]' : '');

        // Baris 1: Nama Barang
        this.bold(true);
        const nameLines = wrapWords(itemName, this.cols);
        nameLines.forEach(l => this.line(l, 'left'));
        this.bold(false);

        // Baris 2: Qty x Harga di kiri, Subtotal di kanan
        const effPrice = item.effectivePrice || item.price || 0;
        const subtotal = item.subtotal !== undefined ? item.subtotal : (parseFloat(item.qty || 1) * effPrice);
        const qStr = `  ${formatQty(item.qty)} ${item.unit || 'pcs'} x ${fRpNum(effPrice)}`;
        const tStr = fRpNum(subtotal);

        this.twoColumn(qStr, tStr, false, false);

        // Baris 3: Diskon per item jika ada
        if (item.discount && item.discount > 0) {
            this.twoColumn('  (Pot. Diskon)', `-${fRpNum(item.discount)}`, false, true);
        }

        // Baris 4: Info PO jika ada
        if (item.poTime) {
            this.line(`  * Estimasi PO: ${item.poTime}`, 'left');
        }

        return this;
    }

    /** Garis pemisah putus-putus presisi rata kiri (mencegah overflow margin printer) */
    separator(char = '-') {
        const sep = char.repeat(this.cols);
        this.align('left');
        this.text(sep);
        this.bytes.push(0x0A);
        this.plainLines.push(sep);
        this.previewLines.push({ type: 'separator', t: sep, a: 'left', b: false, s: 'normal' });
        this.items.push({ type: 'separator', char });
        return this;
    }

    /** Garis ganda (===) */
    doubleSeparator() {
        const sep = '='.repeat(this.cols);
        this.align('left');
        this.text(sep);
        this.bytes.push(0x0A);
        this.plainLines.push(sep);
        this.previewLines.push({ type: 'double-separator', t: sep, a: 'left', b: false, s: 'normal' });
        this.items.push({ type: 'double-separator' });
        return this;
    }

    /** Feed baris kosong agar kertas melewati pemotong (ESC d n) */
    feed(lines = 3) {
        this.bytes.push(0x1B, 0x64, Math.max(1, lines));
        for (let i = 0; i < lines; i++) {
            this.plainLines.push('');
            this.previewLines.push({ t: '', a: 'left', b: false, s: 'normal' });
        }
        this.items.push({ type: 'feed', lines });
        return this;
    }

    /** Potong kertas otomatis (GS V A 3) */
    cut() {
        this.bytes.push(0x1D, 0x56, 0x41, 0x03);
        return this;
    }

    /** Buka laci kasir (Cash Drawer Kick: ESC p 0 25 250) */
    openDrawer() {
        this.bytes.push(0x1B, 0x70, 0x00, 0x19, 0xFA);
        return this;
    }

    /**
     * Cetak Barcode Hardware ESC/POS (GS k) & pratinjau visual
     * Mendukung CODE128 (default) dan CODE39
     */
    barcode(codeStr, type = 'CODE128', height = 45) {
        if (!codeStr) return this;
        const clean = cleanLineAscii(String(codeStr)).trim();
        if (!clean) return this;

        this.align('center');

        // GS h n : Tinggi barcode (default 45 dots)
        this.bytes.push(0x1D, 0x68, Math.max(30, Math.min(100, height)));

        // GS w n : Lebar modul barcode (2 = standar)
        this.bytes.push(0x1D, 0x77, 0x02);

        // GS H n : Posisi karakter teks HRI (0 = tidak cetak via hardware, dicetak manual agar seragam)
        this.bytes.push(0x1D, 0x48, 0x00);

        if (type === 'CODE39') {
            this.bytes.push(0x1D, 0x6B, 0x04);
            for (let i = 0; i < clean.length; i++) {
                this.bytes.push(clean.charCodeAt(i));
            }
            this.bytes.push(0x00);
        } else {
            // CODE128 Subtipe B
            const rawBytes = [];
            for (let i = 0; i < clean.length; i++) {
                rawBytes.push(clean.charCodeAt(i));
            }
            this.bytes.push(0x1D, 0x6B, 0x49, rawBytes.length + 2, 0x7B, 0x42, ...rawBytes);
        }

        this.plainLines.push(`[BARCODE: ${clean}]`);
        this.previewLines.push({ type: 'barcode', code: clean, t: clean, a: 'center', b: false, s: 'barcode', isBarcode: true });
        this.items.push({ type: 'barcode', code: clean });
        return this;
    }

    /** Konversi byte ESC/POS ke format Base64 untuk RawBT */
    toBase64() {
        const u8 = new Uint8Array(this.bytes);
        let binary = '';
        const len = u8.length;
        const chunkSize = 8192;
        for (let i = 0; i < len; i += chunkSize) {
            const sub = u8.subarray(i, i + chunkSize);
            binary += String.fromCharCode.apply(null, sub);
        }
        return btoa(binary);
    }

    /** Konversi ke teks polos untuk fallback atau preview */
    toPlainText() {
        return this.plainLines.join('\n');
    }

    /**
     * Konversi item terstruktur ke markup HTML Flexbox presisi tinggi (WYSIWYG)
     * Anti-Potong, Anti-Wrap Angka Rupiah, dan 100% sejajar rapi pada printer desktop/browser.
     */
    toHtml() {
        let html = '';
        for (const item of this.items) {
            if (item.type === 'line') {
                const align = item.align === 'center' ? 'utp-align-center' : (item.align === 'right' ? 'utp-align-right' : 'utp-align-left');
                const bClass = item.bold ? 'font-bold' : '';
                let sClass = '';
                if (item.size === 'title' || item.size === 'wide') sClass = 'utp-title';
                else if (item.size === 'tall' || item.size === 'total') sClass = 'utp-tall';
                
                if (!item.text || !item.text.trim()) {
                    html += '<div class="utp-empty-line">&nbsp;</div>';
                } else {
                    html += `<div class="utp-line ${align} ${bClass} ${sClass}">${escReceipt(item.text)}</div>`;
                }
            } else if (item.type === 'two-column') {
                const bClass = item.bold ? 'font-bold' : '';
                let sClass = '';
                if (item.size === 'title' || item.size === 'wide') sClass = 'utp-title';
                else if (item.size === 'tall' || item.size === 'total') sClass = 'utp-tall';

                html += `<div class="utp-row ${bClass} ${sClass}"><div class="utp-col-left">${escReceipt(item.left)}</div><div class="utp-col-right">${escReceipt(item.right)}</div></div>`;
            } else if (item.type === 'separator') {
                html += '<div class="utp-separator"></div>';
            } else if (item.type === 'double-separator') {
                html += '<div class="utp-double-separator"></div>';
            } else if (item.type === 'barcode') {
                html += `
                <div class="utp-barcode-wrap">
                    <div class="utp-barcode-bars" aria-hidden="true"></div>
                    <div class="utp-barcode-code">*${esc(item.code)}*</div>
                </div>`;
            } else if (item.type === 'feed') {
                const h = Math.max(1, item.lines || 1) * 6;
                html += `<div style="height:${h}px;"></div>`;
            }
        }
        return html;
    }
}

/**
 * ============================================================
 * ENGINE PENGIRIMAN DOKUMEN KE DRIVER RAWBT (ANDROID FREE/PRO)
 * ============================================================
 */
/**
 * GERBANG CETAK WAJIB PREVIEW
 * Setiap permintaan cetak thermal SELALU ditampilkan preview dulu.
 * Cetak fisik hanya terjadi setelah user menekan "Cetak Sekarang".
 * options.skipPreview = true HANYA dipakai bila user sudah berada di
 * jendela preview lain (mis. preview visual POS/shift/struk pesanan).
 */
export const sendToRawBT = (escPosBase64, plainText = '', htmlDomContent = '', options = {}) => {
    if (!options.skipPreview) {
        return openThermalPrintPreview({
            base64: escPosBase64,
            plainText,
            html: htmlDomContent,
            previewLines: options.previewLines,
            title: options.title,
            rebuild: options.rebuild,
            onConfirm: options.onConfirm,
            onCancel: options.onCancel,
            dispatch: (b64, txt, html) => dispatchToThermalPrinter(b64, txt, html)
        });
    }
    if (typeof options.onConfirm === 'function') {
        try { options.onConfirm(); } catch (e) {}
    }
    return dispatchToThermalPrinter(escPosBase64, plainText, htmlDomContent);
};

/**
 * Kirim payload ke printer (dipanggil SETELAH preview dikonfirmasi)
 */
const dispatchToThermalPrinter = (escPosBase64, plainText = '', htmlDomContent = '') => {
    const isAndroid = /android/i.test(navigator.userAgent || '');

    // 1. Prioritas 1: Aplikasi Android Native (Capacitor Bridge)
    if (window.AndroidNativeApp && typeof window.AndroidNativeApp.printRawBT === 'function') {
        try {
            window.AndroidNativeApp.printRawBT(escPosBase64);
            showToast('Mencetak struk via RawBT...');
            return true;
        } catch (e) {
            console.warn('[RawBT] AndroidNativeApp error, mencoba intent...', e);
        }
    }

    // 2. Prioritas 2: Browser Android / PWA via Android Intent URL
    if (isAndroid) {
        try {
            showToast('Membuka Printer RawBT...');
            const intentUri = `intent:base64,${escPosBase64}#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;end;`;
            window.location.href = intentUri;

            // Cadangan jika intent terblokir di beberapa browser tertentu
            setTimeout(() => {
                if (document.hidden) return;
                try {
                    window.location.href = `rawbt:base64,${escPosBase64}`;
                } catch (err) {}
            }, 800);
            return true;
        } catch (e) {
            console.warn('[RawBT] Intent trigger failed:', e);
        }
    }

    // 3. Fallback: Browser Print (Laptop/Desktop/iOS/Fallback Non-Android)
    showToast('Mencetak struk kasir...');
    renderThermalDOMAndPrint(htmlDomContent || plainText);
    return true;
};

/**
 * Render dokumen thermal ke iframe terisolasi atau elemen DOM dan panggil print dialog.
 * Menggunakan lebar cetak thermal head presisi (48mm untuk 58mm, 72mm untuk 80mm),
 * Flexbox anti-wrap, dan font Courier New yang pas agar harga tidak anjlok ke baris baru.
 */
export const renderThermalDOMAndPrint = (content) => {
    const config = getPrinterConfig();
    const cols = getPaperCols(config.paperSize);
    const is80 = cols >= 40;
    const paperWidth = is80 ? '80mm' : '58mm';
    // Kalibrasi zona cetak aman (Zero Edge Clipping): 44mm untuk roll 58mm & 68mm untuk roll 80mm
    const contentWidth = is80 ? '68mm' : '44mm';
    const fontSize = is80 ? '10.5px' : '8.8px';

    const isHTML = typeof content === 'string' && content.includes('<') && content.includes('>');

    // Jika content bukan HTML (plain text fallback), konversi secara cerdas ke Flexbox HTML
    let htmlContent = content;
    if (!isHTML) {
        const rawLines = String(content || '').split('\n');
        htmlContent = rawLines.map(line => {
            const trimmed = line.trim();
            if (!trimmed) return '<div class="utp-empty-line">&nbsp;</div>';
            if (/^[-]{8,}$/.test(trimmed)) return '<div class="utp-separator"></div>';
            if (/^[=]{8,}$/.test(trimmed)) return '<div class="utp-double-separator"></div>';
            if (/^\[BARCODE:\s*(.+)\]$/i.test(trimmed)) {
                const bCode = trimmed.replace(/^\[BARCODE:\s*/i, '').replace(/\]$/, '').trim();
                return `
                <div class="utp-barcode-wrap">
                    <div class="utp-barcode-bars" aria-hidden="true"></div>
                    <div class="utp-barcode-code">*${esc(bCode)}*</div>
                </div>`;
            }
            // Deteksi baris 2-kolom jika ada 3+ spasi berturutan
            const colMatch = line.match(/^(\s{0,4}.+?)\s{3,}(.+)$/);
            if (colMatch && colMatch[1] && colMatch[2]) {
                return `<div class="utp-row"><div class="utp-col-left">${escReceipt(colMatch[1])}</div><div class="utp-col-right">${escReceipt(colMatch[2])}</div></div>`;
            }
            return `<div class="utp-line">${escReceipt(line)}</div>`;
        }).join('');
    }

    // 1. Coba cetak melalui Hidden Isolated Iframe (Solusi paling bersih & presisi)
    try {
        let iframe = document.getElementById('thermal-print-iframe');
        if (iframe) iframe.remove();

        iframe = document.createElement('iframe');
        iframe.id = 'thermal-print-iframe';
        iframe.style.position = 'fixed';
        iframe.style.right = '0';
        iframe.style.bottom = '0';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = '0';
        iframe.style.visibility = 'hidden';
        iframe.style.zIndex = '-9999';
        document.body.appendChild(iframe);

        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Cetak Struk Thermal</title>
  <style>
    @page {
      margin: 0mm !important;
      size: ${paperWidth} auto;
    }
    * {
      box-sizing: border-box !important;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      width: ${contentWidth} !important;
      max-width: ${contentWidth} !important;
      background: #fff;
      color: #000;
      font-family: 'Courier New', Courier, monospace;
      font-size: ${fontSize};
      line-height: 1.25;
      overflow: hidden;
    }
    .utp-thermal-wrap {
      width: ${contentWidth} !important;
      max-width: ${contentWidth} !important;
      box-sizing: border-box !important;
      padding: 0 ${is80 ? '2.5mm' : '1.5mm'} 4mm ${is80 ? '1mm' : '0.5mm'} !important;
      margin: 0 !important;
    }
    .utp-row {
      display: flex !important;
      justify-content: space-between !important;
      align-items: baseline !important;
      width: 100% !important;
      margin: 0.5px 0 !important;
      line-height: 1.25 !important;
      box-sizing: border-box !important;
    }
    .utp-col-left {
      text-align: left !important;
      word-break: break-word !important;
      flex: 1 1 auto !important;
      min-width: 0 !important;
    }
    .utp-col-right {
      text-align: right !important;
      white-space: nowrap !important;
      flex-shrink: 0 !important;
      margin-left: 5px !important;
      padding-right: ${is80 ? '2.5mm' : '1.5mm'} !important;
      font-variant-numeric: tabular-nums !important;
    }
    .utp-line {
      line-height: 1.25 !important;
      word-break: break-word !important;
      margin: 0.5px 0 !important;
    }
    .utp-align-center { text-align: center !important; }
    .utp-align-right { text-align: right !important; }
    .utp-align-left { text-align: left !important; }
    .font-bold { font-weight: bold !important; }
    .utp-title { font-size: 1.2em !important; font-weight: bold !important; line-height: 1.15 !important; }
    .utp-tall { font-size: 1.12em !important; font-weight: bold !important; }
    .utp-empty-line { height: 0.6em !important; }
    .utp-separator {
      border-bottom: 1px dashed #000 !important;
      margin: 2.5px 0 !important;
      width: 100% !important;
      height: 0 !important;
    }
    .utp-double-separator {
      border-bottom: 3px double #000 !important;
      margin: 2.5px 0 !important;
      width: 100% !important;
      height: 0 !important;
    }
    .utp-barcode-wrap {
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
      margin: 4px 0 2px !important;
      text-align: center !important;
      width: 100% !important;
    }
    .utp-barcode-bars {
      width: 82% !important;
      max-width: ${is80 ? '220px' : '150px'} !important;
      height: ${is80 ? '36px' : '30px'} !important;
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
      ) !important;
      border-top: 1px solid #000 !important;
      border-bottom: 1px solid #000 !important;
    }
    .utp-barcode-code {
      font-family: 'Courier New', Courier, monospace !important;
      font-size: 9.5px !important;
      font-weight: bold !important;
      letter-spacing: 2px !important;
      margin-top: 2px !important;
      text-align: center !important;
    }
  </style>
</head>
<body>
  <div class="utp-thermal-wrap">
    ${htmlContent}
  </div>
</body>
</html>`);
        iframeDoc.close();

        setTimeout(() => {
            try {
                iframe.contentWindow.focus();
                iframe.contentWindow.print();
            } catch (errIframe) {
                console.warn('[RawBT] Iframe print gagal, fallback ke direct print:', errIframe);
                fallbackDOMPrint(htmlContent, paperWidth, contentWidth);
            }
        }, 120);
        return;
    } catch (e) {
        console.warn('[RawBT] Gagal membuat isolated print iframe:', e);
    }

    // Fallback jika iframe tidak diizinkan oleh sandbox browser
    fallbackDOMPrint(htmlContent, paperWidth, contentWidth);
};

const fallbackDOMPrint = (htmlContent, paperWidth, contentWidth) => {
    let t = el('thermal-print-section');
    if (!t) {
        t = document.createElement('div');
        t.id = 'thermal-print-section';
        document.body.appendChild(t);
    }
    const is80 = paperWidth === '80mm';
    t.className = is80 ? 'paper-80mm' : 'paper-58mm';
    document.body.classList.remove('paper-58mm', 'paper-80mm');
    document.body.classList.add(is80 ? 'paper-80mm' : 'paper-58mm');

    let pageStyle = document.getElementById('dynamic-print-page-style');
    if (!pageStyle) {
        pageStyle = document.createElement('style');
        pageStyle.id = 'dynamic-print-page-style';
        document.head.appendChild(pageStyle);
    }
    pageStyle.innerHTML = `@media print { @page { margin: 0 !important; size: ${paperWidth} auto; } html, body { width: ${contentWidth} !important; margin: 0 !important; } }`;

    t.innerHTML = `
        <div class="utp-thermal-wrap" style="width:${contentWidth};max-width:${contentWidth};font-family:'Courier New',Courier,monospace;font-size:${is80 ? '10.5px' : '8.8px'};line-height:1.25;color:#000;background:#fff;padding:0 ${is80 ? '2.5mm' : '1.5mm'} 4mm ${is80 ? '1mm' : '0.5mm'};margin:0;box-sizing:border-box;">
            ${htmlContent}
        </div>
    `;

    setTimeout(() => {
        window.print();
    }, 120);
};

/**
 * Buka aplikasi RawBT atau arahkan ke Google Play Store (Gratis)
 */
export const openRawBTApp = () => {
    if (window.AndroidNativeApp && typeof window.AndroidNativeApp.openRawBT === 'function') {
        window.AndroidNativeApp.openRawBT();
        return;
    }

    const isAndroid = /android/i.test(navigator.userAgent || '');
    if (isAndroid) {
        window.location.href = "intent:#Intent;package=ru.a402d.rawbtprinter;end;";
        setTimeout(() => {
            if (!document.hidden) {
                window.location.href = "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter";
            }
        }, 1200);
    } else {
        window.open('https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter', '_blank');
    }
};

/**
 * ============================================================
 * GENERATOR STRUK POS KASIR (ESC/POS & RAWBT) — PRESISI 100%
 * ============================================================
 */
export const buildPOSReceiptPayload = (tx, config = null) => {
    const cfg = config || getPrinterConfig();
    const cols = getPaperCols(cfg.paperSize);
    const is80 = cols >= 40;

    const builder = new EscPosBuilder(cols);
    builder.init();

    // 1. Laci Kasir (Cash Drawer Kick)
    if (cfg.openCashDrawer && tx.payment?.method === 'cash') {
        builder.openDrawer();
    }

    // 2. Kop Toko (Header)
    const storeName = cleanLineAscii(cfg.headerText || appData.store?.name || 'TOKO PUTRI').trim();
    const storeAddr = cleanLineAscii(cfg.storeAddress !== undefined && cfg.storeAddress !== '' ? cfg.storeAddress : (appData.store?.address || '')).trim();
    const storeWa   = cleanLineAscii(cfg.storePhone !== undefined && cfg.storePhone !== '' ? cfg.storePhone : (appData.store?.wa || '')).trim();

    // Logika pemilihan ukuran judul agar tidak terpotong atau wrap sembarangan:
    const maxDoubleWidth = Math.floor(cols / 2);
    if (storeName.length <= maxDoubleWidth) {
        builder.align('center').bold(true).size('title').line(storeName.toUpperCase(), 'center');
        builder.size('normal').bold(false);
    } else {
        builder.align('center').bold(true).size('tall');
        wrapWords(storeName.toUpperCase(), cols).forEach(l => builder.line(l, 'center'));
        builder.size('normal').bold(false);
    }

    if (cfg.showAddress !== false && storeAddr) {
        wrapWords(storeAddr, cols).forEach(l => builder.line(l, 'center'));
    }
    if (cfg.showPhone !== false && storeWa) {
        builder.line(`WA: ${storeWa}`, 'center');
    }
    const npwpStr = tx.payment?.taxNpwp || appData.store?.taxNpwp;
    if (cfg.showNpwp !== false && npwpStr) {
        builder.line(`NPWP: ${npwpStr}`, 'center');
    }
    builder.separator('-');

    // 3. Metadata Transaksi
    const dateStr = formatCompactDate(tx.dateMs || Date.now(), is80);
    const txNo = `#${tx.txId}`;
    builder.twoColumn(`No : ${txNo}`, dateStr, false, true);

    const ksrName = cleanLineAscii(tx.cashierName || 'Kasir').trim();
    const isMember = !!(tx.customer?.isMember || tx.customerType === 'Member');
    const plgRaw = cleanLineAscii(tx.customer?.name || 'Umum').trim();
    const plgName = isMember ? `${plgRaw} (Member)` : plgRaw;

    const ksrLabel = `Ksr: ${ksrName}`;
    const plgLabel = `Plg: ${plgName}`;

    // Cek apakah muat dalam 1 baris atau 2 baris (mencegah teks terpotong kaku)
    if (ksrLabel.length + 1 + plgLabel.length <= cols) {
        builder.twoColumn(ksrLabel, plgLabel, false, false);
    } else {
        builder.line(ksrLabel, 'left');
        builder.line(plgLabel, 'left');
    }

    if (tx.customer?.phone) {
        builder.line(`HP : ${tx.customer.phone}`, 'left');
    }
    if (isMember && tx.customer?.memberId) {
        builder.line(`ID : ${tx.customer.memberId}`, 'left');
    }
    builder.separator('-');

    // 4. Daftar Item Barang
    (tx.items || []).forEach(item => {
        builder.itemRow(item);
    });

    builder.separator('-');

    // 5. Ringkasan Keuangan & Total
    builder.twoColumn('Subtotal', fRp(tx.subtotal));

    if ((tx.globalDiscount || 0) > 0) {
        const discLabel = tx.discountType === 'percent' && tx.discountVal ? `Diskon (${tx.discountVal}%)` : 'Diskon Toko';
        builder.twoColumn(discLabel, `- ${fRp(tx.globalDiscount)}`);
    }

    if ((tx.pointDiscount || 0) > 0) {
        builder.twoColumn(`Diskon Poin (${tx.pointsRedeemed || 0} Poin)`, `- ${fRp(tx.pointDiscount)}`);
    }

    if (tx.claimedReward && tx.claimedReward.name) {
        builder.separator('-');
        builder.bold(true).line(`[KLAIM HADIAH: ${cleanLineAscii(tx.claimedReward.name)}]`, 'left').bold(false);
        builder.twoColumn('Poin Reward Ditukar', `-${tx.claimedReward.pointsCost || 0} Poin`);
    }

    const taxInfo = extractOrderTaxInfo(tx);
    if (taxInfo.hasPpn) {
        const valStr = taxInfo.ppnAmount > 0 ? `${taxInfo.isInclusive ? '' : '+ '}${fRp(taxInfo.ppnAmount)}` : 'Rp 0';
        builder.twoColumn(taxInfo.ppnLabel, valStr);
    }

    builder.doubleSeparator();
    // Gunakan 'tall' (tinggi 2x, lebar 1x) agar baris TOTAL tetap memiliki 32/48 kolom penuh & tidak overflow
    builder.bold(true).size('tall').twoColumn('TOTAL', fRp(tx.total)).size('normal').bold(false);
    builder.doubleSeparator();

    // 6. Rincian Pelunasan
    const isPaylater = tx.payment?.isPaylater || tx.isPaylater || tx.payment?.subMethod === 'paylater';
    const pMethod = isPaylater ? 'PUTRI PAYLATER' : (tx.payment?.method || 'CASH').toUpperCase();
    builder.twoColumn('Metode Bayar', pMethod);

    if (tx.payment?.method === 'cash') {
        builder.twoColumn('Bayar Tunai', fRp(tx.payment.paid));
        builder.bold(true).twoColumn('Kembalian', fRp(tx.payment.change)).bold(false);
    } else if (tx.payment?.method === 'transfer') {
        if (tx.payment?.bank) {
            builder.twoColumn('Bank Penerima', tx.payment.bank);
        }
    } else if (tx.payment?.method === 'qris') {
        builder.twoColumn('Kanal QRIS', 'QRIS Dinamis (Lunas)');
    } else if (tx.payment?.method === 'tempo') {
        if (isPaylater) {
            builder.twoColumn('Limit Terpakai', fRp(tx.payment?.paylaterUsed || tx.paylaterUsed || (tx.total - (tx.payment?.tempoDp ?? 0))));
            if (tx.payment?.paylaterMonths) {
                const tenorLbl = tx.payment.paylaterTenor === '2m' ? '2 Bulan' : (tx.payment.paylaterTenor === '3m' ? '3 Bulan' : '30 Hari');
                builder.twoColumn('Tenor Cicilan', `${tenorLbl} (${tx.payment.paylaterMonths}x)`);
            }
            if (tx.payment?.paylaterAdminFee > 0) {
                builder.twoColumn('Biaya Admin', `+ ${fRp(tx.payment.paylaterAdminFee)}`);
            }
            if (tx.payment?.paylaterServiceFee > 0) {
                builder.twoColumn('Biaya Layanan', `+ ${fRp(tx.payment.paylaterServiceFee)}`);
            }
        }
        builder.twoColumn('Uang Muka (DP)', fRp(tx.payment?.tempoDp ?? tx.payment?.dp ?? 0));
        builder.bold(true).twoColumn(isPaylater ? 'Tagihan PayLater' : 'Sisa Piutang', fRp(tx.payment.tempoBalance || 0)).bold(false);
        if (isPaylater && tx.payment?.paylaterMonthlyInstallment) {
            builder.twoColumn('Angsuran/Bln', `${fRp(tx.payment.paylaterMonthlyInstallment)} (${tx.payment.paylaterMonths || 1}x)`);
        }
        if (tx.payment.tempoDueDate) {
            const dueStr = typeof tx.payment.tempoDueDate === 'number'
                ? new Date(tx.payment.tempoDueDate).toLocaleDateString('id-ID', {day: 'numeric', month: 'short', year: 'numeric'})
                : tx.payment.tempoDueDate;
            builder.line(`Jatuh Tempo: ${dueStr}`, 'left');
        }
    }

    // 7. Poin Loyalitas Member
    if (cfg.showPoints) {
        if (tx.pointsEarned > 0 || (tx.pointsRedeemed || 0) > 0) {
            builder.separator('-');
            if (tx.pointsEarned > 0) {
                builder.twoColumn('Poin Didapat', `+${tx.pointsEarned} Poin`, true);
            }
            if ((tx.pointsRedeemed || 0) > 0) {
                builder.twoColumn('Poin Ditukar', `-${tx.pointsRedeemed} Poin`);
            }
            if (tx.finalMemberPoints !== undefined && tx.finalMemberPoints !== null) {
                builder.twoColumn('Sisa Saldo Poin', `${tx.finalMemberPoints} Poin`);
            }
        }
    }

    // 8. Barcode Transaksi
    if (cfg.showBarcode) {
        builder.separator('-');
        builder.barcode(`POS-${tx.txId}`, 'CODE128', 45);
        builder.line(`*POS-${tx.txId}*`, 'center');
        builder.line('(SCAN DI KASIR)', 'center');
    }

    // 9. Pesan Footer Toko & Catatan Kebijakan
    builder.separator('-');
    const footerText = cleanLineAscii(cfg.footerText || 'Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.').trim();
    if (footerText) {
        wrapWords(footerText, cols).forEach(l => builder.line(l, 'center'));
    }
    const policyNote = cleanLineAscii(cfg.footerPolicyNote !== undefined ? cfg.footerPolicyNote : 'Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi.').trim();
    if (policyNote) {
        builder.line('', 'center');
        wrapWords(policyNote, cols).forEach(l => builder.line(l, 'center'));
    }

    // 10. Pengumpan Kertas & Pemotong
    builder.feed(cfg.feedLines || 3);
    if (cfg.autoCut) {
        builder.cut();
    }

    return {
        base64: builder.toBase64(),
        plainText: builder.toPlainText(),
        previewLines: builder.previewLines,
        html: builder.toHtml()
    };
};

/**
 * ============================================================
 * GENERATOR SLIP REKAP SHIFT KASIR (X/Z-REPORT) — PRESISI 100%
 * ============================================================
 */
export const buildShiftReceiptPayload = (shift, isXReport = false, config = null) => {
    const cfg = config || getPrinterConfig();
    const cols = getPaperCols(cfg.paperSize);
    const is80 = cols >= 40;

    const builder = new EscPosBuilder(cols);
    builder.init();

    const storeName = cleanLineAscii(cfg.headerText || appData.store?.name || 'TOKO PUTRI').trim();
    const storeAddr = cleanLineAscii(appData.store?.address || '').trim();
    const storeWa   = cleanLineAscii(appData.store?.wa || '').trim();

    const maxDoubleWidth = Math.floor(cols / 2);
    if (storeName.length <= maxDoubleWidth) {
        builder.align('center').bold(true).size('title').line(storeName.toUpperCase(), 'center');
        builder.size('normal').bold(false);
    } else {
        builder.align('center').bold(true).size('tall');
        wrapWords(storeName.toUpperCase(), cols).forEach(l => builder.line(l, 'center'));
        builder.size('normal').bold(false);
    }

    if (storeAddr) wrapWords(storeAddr, cols).forEach(l => builder.line(l, 'center'));
    if (storeWa) builder.line(`WA: ${storeWa}`, 'center');
    builder.separator('-');

    const titleStr = is80
        ? (isXReport ? '*** RINGKASAN SHIFT (X-REPORT) ***' : '*** REKAP TUTUP SHIFT (Z-REPORT) ***')
        : (isXReport ? '** RINGKASAN SHIFT (X) **' : '** REKAP TUTUP SHIFT (Z) **');

    builder.bold(true).line(titleStr, 'center').bold(false);
    builder.separator('-');

    const startDateStr = formatCompactDate(shift.startTime, is80);
    const endDateStr = formatCompactDate(shift.endTime || Date.now(), is80);

    builder.twoColumn('Shift ID', `#${shift.shiftNo || shift.id || '-'}`, false, true);
    builder.twoColumn('Kasir', (shift.cashierName || 'Kasir').substring(0, is80 ? 20 : 12), false, true);
    builder.twoColumn('Mulai', startDateStr, false, true);
    builder.twoColumn('Selesai', endDateStr, false, true);
    builder.separator('-');

    // Ringkasan Penjualan
    const startingCash  = parseFloat(shift.startingCash) || 0;
    const cashSales     = parseFloat(shift.cashSales) || 0;
    const qrisSales     = parseFloat(shift.qrisSales) || 0;
    const transferSales = parseFloat(shift.bankSales || shift.transferSales) || 0;
    const tempoSales    = parseFloat(shift.tempoSales) || 0;
    const cashIn        = parseFloat(shift.cashIn) || 0;
    const cashOut       = parseFloat(shift.cashOut) || 0;
    const totalSales    = parseFloat(shift.totalSales) || (cashSales + qrisSales + transferSales + tempoSales);
    const txCount       = shift.txCount || 0;

    builder.bold(true).line('RINGKASAN PENJUALAN', 'left').bold(false);
    builder.twoColumn('Modal Awal Laci', fRp(startingCash));
    builder.twoColumn('Penjualan Tunai', fRp(cashSales));
    if (qrisSales > 0)     builder.twoColumn('Penjualan QRIS', fRp(qrisSales));
    if (transferSales > 0) builder.twoColumn('Penjualan Transfer', fRp(transferSales));
    if (tempoSales > 0)    builder.twoColumn('Penjualan Tempo', fRp(tempoSales));
    if (cashIn > 0)        builder.twoColumn('Kas Masuk (In)', `+${fRp(cashIn)}`);
    if (cashOut > 0)       builder.twoColumn('Kas Keluar (Out)', `-${fRp(cashOut)}`);
    builder.separator('-');
    builder.twoColumn('Total Transaksi', `${txCount} Trx`);
    builder.bold(true).size('tall').twoColumn('TOTAL OMSET', fRp(totalSales)).size('normal').bold(false);
    builder.doubleSeparator();

    // Rekonsiliasi Kas Laci
    const expectedCash = Math.max(0, startingCash + cashSales + cashIn - cashOut);

    if (isXReport) {
        builder.bold(true).line('STATUS KAS LACI SAAT INI', 'left').bold(false);
        builder.twoColumn('Uang Kas Seharusnya', fRp(expectedCash));
        builder.separator('-');
    } else {
        const actualCash   = shift.actualCash !== undefined ? parseFloat(shift.actualCash) : expectedCash;
        const diff         = actualCash - expectedCash;
        const diffStr      = diff === 0 ? 'PAS (0)' : (diff > 0 ? `+${fRp(diff)}` : `-${fRp(Math.abs(diff))}`);

        builder.bold(true).line('REKONSILIASI KAS FISIK', 'left').bold(false);
        builder.twoColumn('Kas Diharapkan', fRp(expectedCash));
        builder.twoColumn('Kas Fisik Aktual', fRp(actualCash));
        builder.bold(true).twoColumn('Selisih Kas', diffStr, true).bold(false);
        if (shift.closingNotes) {
            wrapWords(`Catatan: ${shift.closingNotes}`, cols).forEach(l => builder.line(l, 'left'));
        }
        builder.separator('-');

        // Kolom Tanda Tangan Kasir & Supervisor (Diposisikan simetris)
        builder.line('Verifikasi & Tanda Tangan:', 'left');
        builder.feed(2);

        const half = Math.floor(cols / 2);
        const sig1 = '( Kasir )';
        const sig2 = is80 ? '( Supervisor/Owner )' : '( Supervisor )';
        const p1 = Math.max(0, Math.floor((half - sig1.length) / 2));
        const p2 = Math.max(0, Math.floor((half - sig2.length) / 2));
        const sigLine = ' '.repeat(p1) + sig1 + ' '.repeat(Math.max(1, half - p1 - sig1.length)) + ' '.repeat(p2) + sig2;
        builder.line(sigLine, 'left');
        builder.separator('-');
    }

    const footer = cfg.footerText || 'Laporan Kasir Resmi Toko Putri';
    wrapWords(footer, cols).forEach(l => builder.line(l, 'center'));
    builder.feed(cfg.feedLines || 3);
    if (cfg.autoCut) builder.cut();

    return {
        base64: builder.toBase64(),
        plainText: builder.toPlainText(),
        previewLines: builder.previewLines,
        html: builder.toHtml()
    };
};

/**
 * ============================================================
 * GENERATOR STRUK PESANAN PELANGGAN / STOREFRONT — PRESISI 100%
 * ============================================================
 */
export const buildOrderReceiptPayload = (order, config = null) => {
    const cfg = config || getPrinterConfig();
    const cols = getPaperCols(cfg.paperSize);
    const is80 = cols >= 40;

    const builder = new EscPosBuilder(cols);
    builder.init();

    const storeName = cleanLineAscii(cfg.headerText || appData.store?.name || 'TOKO PUTRI').trim();
    const storeAddr = cleanLineAscii(cfg.storeAddress !== undefined && cfg.storeAddress !== '' ? cfg.storeAddress : (appData.store?.address || '')).trim();
    const storeWa   = cleanLineAscii(cfg.storePhone !== undefined && cfg.storePhone !== '' ? cfg.storePhone : (appData.store?.wa || '')).trim();

    const maxDoubleWidth = Math.floor(cols / 2);
    if (storeName.length <= maxDoubleWidth) {
        builder.align('center').bold(true).size('title').line(storeName.toUpperCase(), 'center');
        builder.size('normal').bold(false);
    } else {
        builder.align('center').bold(true).size('tall');
        wrapWords(storeName.toUpperCase(), cols).forEach(l => builder.line(l, 'center'));
        builder.size('normal').bold(false);
    }

    if (cfg.showAddress !== false && storeAddr) wrapWords(storeAddr, cols).forEach(l => builder.line(l, 'center'));
    if (cfg.showPhone !== false && storeWa) builder.line(`WA: ${storeWa}`, 'center');
    const npwpStrOrder = order.payment?.taxNpwp || appData.store?.taxNpwp;
    if (cfg.showNpwp !== false && npwpStrOrder) builder.line(`NPWP: ${npwpStrOrder}`, 'center');
    builder.separator('-');

    const dateStr = formatCompactDate(order.dateString || order.dateMs || Date.now(), is80);
    builder.twoColumn(`Order: #${order.orderId}`, dateStr, false, true);

    const custName = (order.customer?.name || 'Guest').substring(0, is80 ? 18 : 11);
    const dMethod = order.customer?.deliveryMethod === 'delivery' ? 'Kirim' : 'Ambil';
    builder.twoColumn(`Plg  : ${custName}`, `Tipe: ${dMethod}`, false, true);

    if (order.customer?.phone) {
        builder.line(`HP   : ${order.customer.phone}`, 'left');
    }
    if (order.customer?.note) {
        wrapWords(`Cat  : ${order.customer.note}`, cols).forEach(l => builder.line(l, 'left'));
    }
    builder.separator('-');

    // Daftar Barang
    const orderItems = Array.isArray(order.items) ? order.items : (Array.isArray(order.cart) ? order.cart : []);
    if (orderItems.length > 0) {
        orderItems.forEach(item => {
            builder.itemRow(item);
        });
    } else {
        builder.line('- Tidak ada rincian barang -', 'center');
    }

    builder.separator('-');

    const taxInfo = extractOrderTaxInfo(order);
    const subtotal = taxInfo.subtotal;
    const shipping = taxInfo.shipping;
    const grandTot = taxInfo.grandTotal;

    builder.twoColumn('Subtotal', fRp(subtotal));
    if (order.customer?.deliveryMethod === 'delivery' || order.deliveryMethod === 'delivery') {
        builder.twoColumn('Ongkos Kirim', fRp(shipping));
    }
    if (taxInfo.productDiscount) {
        builder.twoColumn('Potongan Harga', `- ${fRp(taxInfo.productDiscount)}`);
    }
    if (taxInfo.shippingDiscount) {
        builder.twoColumn('Potongan Ongkir', `- ${fRp(taxInfo.shippingDiscount)}`);
    }
    if (taxInfo.pointDiscount > 0) {
        builder.twoColumn('Potongan Poin', `- ${fRp(taxInfo.pointDiscount)}`);
    }
    if (taxInfo.paylaterAdminFee > 0) {
        builder.twoColumn('Biaya Admin', `+ ${fRp(taxInfo.paylaterAdminFee)}`);
    }
    if (taxInfo.paylaterServiceFee > 0) {
        builder.twoColumn('Biaya Layanan', `+ ${fRp(taxInfo.paylaterServiceFee)}`);
    }

    if (taxInfo.hasPpn) {
        const valStr = taxInfo.ppnAmount > 0 ? `${taxInfo.isInclusive ? '' : '+ '}${fRp(taxInfo.ppnAmount)}` : 'Rp 0';
        builder.twoColumn(taxInfo.ppnLabel, valStr);
    }

    builder.doubleSeparator();
    builder.bold(true).size('tall').twoColumn('TOTAL', fRp(grandTot)).size('normal').bold(false);
    builder.doubleSeparator();
    const isOrderPaylater = order.payment?.isPaylater || order.isPaylater || order.payment?.subMethod === 'paylater';
    builder.twoColumn('Metode Bayar', isOrderPaylater ? 'PUTRI PAYLATER' : (order.payment?.method || 'Tunai').toUpperCase());
    if (isOrderPaylater) {
        if (order.payment?.paylaterMonths) {
            const tLbl = order.payment.paylaterTenor === '2m' ? '2 Bulan' : (order.payment.paylaterTenor === '3m' ? '3 Bulan' : '30 Hari');
            builder.twoColumn('Tenor Cicilan', `${tLbl} (${order.payment.paylaterMonths}x)`);
        }
        if (order.payment?.paylaterAdminFee > 0) {
            builder.twoColumn('Biaya Admin', `+ ${fRp(order.payment.paylaterAdminFee)}`);
        }
        if (order.payment?.paylaterServiceFee > 0) {
            builder.twoColumn('Biaya Layanan', `+ ${fRp(order.payment.paylaterServiceFee)}`);
        }
        if (order.payment?.paylaterMonthlyInstallment) {
            builder.twoColumn('Angsuran/Bln', `${fRp(order.payment.paylaterMonthlyInstallment)} (${order.payment.paylaterMonths || 1}x)`);
        }
    }

    if (cfg.showPoints && (order.pointsEarned > 0 || order.finalMemberPoints !== undefined)) {
        builder.separator('-');
        if (order.pointsEarned > 0) builder.twoColumn('Poin Didapat', `+${order.pointsEarned} Poin`, true);
        if (order.finalMemberPoints !== undefined) builder.twoColumn('Saldo Poin', `${order.finalMemberPoints} Poin`);
    }

    if (cfg.showBarcode) {
        builder.separator('-');
        builder.barcode(`ORDER-${order.orderId}`, 'CODE128', 45);
        builder.line(`*ORDER-${order.orderId}*`, 'center');
        builder.line('(SCAN DI KASIR)', 'center');
    }

    builder.separator('-');
    const footerText = cleanLineAscii(cfg.footerText || 'Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.').trim();
    if (footerText) {
        wrapWords(footerText, cols).forEach(l => builder.line(l, 'center'));
    }
    const policyNote = cleanLineAscii(cfg.footerPolicyNote !== undefined ? cfg.footerPolicyNote : 'Barang yang sudah dibeli tidak dapat ditukar/dikembalikan tanpa nota/struk resmi.').trim();
    if (policyNote) {
        builder.line('', 'center');
        wrapWords(policyNote, cols).forEach(l => builder.line(l, 'center'));
    }

    builder.feed(cfg.feedLines || 3);
    if (cfg.autoCut) builder.cut();

    return {
        base64: builder.toBase64(),
        plainText: builder.toPlainText(),
        previewLines: builder.previewLines,
        html: builder.toHtml()
    };
};

/**
 * ============================================================
 * GENERATOR STRUK NOTA TAGIHAN TEMPO / PIUTANG — PRESISI 100%
 * ============================================================
 */
export const buildTempoReceiptPayload = (order, config = null) => {
    const cfg = config || getPrinterConfig();
    const cols = getPaperCols(cfg.paperSize);
    const is80 = cols >= 40;

    const builder = new EscPosBuilder(cols);
    builder.init();

    const storeName = cleanLineAscii(cfg.headerText || appData.store?.name || 'TOKO PUTRI').trim();
    const storeAddr = cleanLineAscii(cfg.storeAddress !== undefined && cfg.storeAddress !== '' ? cfg.storeAddress : (appData.store?.address || '')).trim();
    const storeWa   = cleanLineAscii(cfg.storePhone !== undefined && cfg.storePhone !== '' ? cfg.storePhone : (appData.store?.wa || '')).trim();

    const maxDoubleWidth = Math.floor(cols / 2);
    if (storeName.length <= maxDoubleWidth) {
        builder.align('center').bold(true).size('title').line(storeName.toUpperCase(), 'center');
        builder.size('normal').bold(false);
    } else {
        builder.align('center').bold(true).size('tall');
        wrapWords(storeName.toUpperCase(), cols).forEach(l => builder.line(l, 'center'));
        builder.size('normal').bold(false);
    }

    if (cfg.showAddress !== false && storeAddr) wrapWords(storeAddr, cols).forEach(l => builder.line(l, 'center'));
    if (cfg.showPhone !== false && storeWa) builder.line(`WA: ${storeWa}`, 'center');
    const npwpStrTempo = order.payment?.taxNpwp || appData.store?.taxNpwp;
    if (cfg.showNpwp !== false && npwpStrTempo) builder.line(`NPWP: ${npwpStrTempo}`, 'center');
    builder.separator('-');

    const isPaylater = order.payment?.isPaylater || order.isPaylater || order.payment?.subMethod === 'paylater';
    const isLunas = order.payment?.paymentStatus === 'lunas' || parseFloat(order.payment?.tempoBalance || 0) <= 0;
    const title = is80
        ? (isPaylater
            ? (isLunas ? '*** NOTA PUTRI PAYLATER (LUNAS) ***' : '*** NOTA TAGIHAN PUTRI PAYLATER ***')
            : (isLunas ? '*** NOTA TEMPO (LUNAS) ***' : '*** NOTA TAGIHAN TEMPO (PIUTANG) ***'))
        : (isPaylater
            ? (isLunas ? '** PAYLATER (LUNAS) **' : '** NOTA PUTRI PAYLATER **')
            : (isLunas ? '** NOTA TEMPO (LUNAS) **' : '** NOTA TAGIHAN TEMPO **'));

    builder.bold(true).line(title, 'center').bold(false);
    builder.separator('-');

    const dateStr = formatCompactDate(order.dateString || order.timestamp || Date.now(), is80);
    builder.twoColumn(`Order: #${order.orderId}`, dateStr, false, true);

    const custName = (order.customer?.name || 'Pelanggan').substring(0, is80 ? 18 : 11);
    builder.twoColumn(`Plg  : ${custName}`, isPaylater ? 'Tipe: PayLater' : 'Tipe: Tempo', false, true);
    if (isPaylater && order.payment?.paylaterMonths) {
        const tLbl = order.payment.paylaterTenor === '2m' ? '2 Bulan' : (order.payment.paylaterTenor === '3m' ? '3 Bulan' : '30 Hari');
        builder.twoColumn('Tenor Cicilan', `${tLbl} (${order.payment.paylaterMonths}x)`, false, true);
    }

    if (order.customer?.phone || order.customer?.wa) {
        builder.line(`HP   : ${order.customer.wa || order.customer.phone}`, 'left');
    }

    // Kalkulasi finansial piutang
    let sisa = parseFloat(order.payment?.tempoBalance) || 0;
    let rate = order.payment?.tempoPenaltyRate !== undefined ? parseFloat(order.payment.tempoPenaltyRate) : 1;
    let isStopped = order.payment?.tempoPenaltyStopped === true;
    let latePenalty = 0;
    let dueDate = order.payment?.tempoDueDate || 0;
    let daysLate = 0;
    let daysLeft = 0;
    let isLate = false;
    let isDueSoon = false;
    const now = Date.now();

    if (dueDate > 0) {
        if (now > dueDate) {
            daysLate = Math.floor((now - dueDate) / (24 * 60 * 60 * 1000));
            if (daysLate > 0) isLate = true;
        } else {
            daysLeft = Math.ceil((dueDate - now) / (24 * 60 * 60 * 1000));
            if (daysLeft <= 3) isDueSoon = true;
        }
    }

    if (isStopped) {
        latePenalty = parseFloat(order.payment?.tempoFixedPenalty) || 0;
    } else if (isLate) {
        latePenalty = (rate / 100 * sisa) * daysLate;
    }

    let totalAkhir = sisa + latePenalty;
    const installments = order.payment?.installments || [];
    const totalPaid = installments.reduce((sum, ins) => sum + (parseFloat(ins.amount) || 0), 0);
    const grandTotalAwal = order.payment?.grandTotal || (sisa + totalPaid);

    if (dueDate > 0) {
        const dueStr = formatCompactDate(dueDate, is80);
        let statusKeterlambatan = '';
        if (isLunas) statusKeterlambatan = 'LUNAS';
        else if (isLate) statusKeterlambatan = `Telat ${daysLate} Hari`;
        else if (isDueSoon) statusKeterlambatan = `H-${daysLeft <= 0 ? 0 : daysLeft}`;
        else statusKeterlambatan = `Sisa ${daysLeft} Hari`;
        builder.twoColumn(`J.Tmp: ${dueStr}`, statusKeterlambatan, false, true);
    }

    builder.separator('-');

    // Daftar Barang
    (order.items || []).forEach(item => {
        builder.itemRow(item);
    });

    builder.separator('-');

    builder.twoColumn('Total Transaksi', fRp(grandTotalAwal));
    if (isPaylater) {
        if (order.payment?.paylaterAdminFee > 0) {
            builder.twoColumn('Biaya Admin', `+ ${fRp(order.payment.paylaterAdminFee)}`);
        }
        if (order.payment?.paylaterServiceFee > 0) {
            builder.twoColumn('Biaya Penanganan', `+ ${fRp(order.payment.paylaterServiceFee)}`);
        }
    }

    // Histori Cicilan
    if (installments.length > 0) {
        builder.separator('-');
        builder.bold(true).line('HISTORI PEMBAYARAN CICILAN:', 'left').bold(false);
        installments.forEach((ins, idx) => {
            const insDate = formatCompactDate(ins.date, is80);
            builder.twoColumn(`${idx + 1}. ${insDate}`, fRp(ins.amount));
        });
        builder.twoColumn('Total Terbayar', fRp(totalPaid), true);
    }

    builder.twoColumn('Sisa Pokok', fRp(sisa));
    if (isPaylater && order.payment?.paylaterMonthlyInstallment) {
        builder.twoColumn('Angsuran/Bln', `${fRp(order.payment.paylaterMonthlyInstallment)} (${order.payment.paylaterMonths || 1}x)`);
    }
    if (latePenalty > 0) {
        builder.twoColumn(`Denda (${daysLate} Hari)`, `+ ${fRp(latePenalty)}`);
    }

    builder.doubleSeparator();
    builder.bold(true).size('tall').twoColumn(isPaylater ? 'TAGIHAN PAYLATER' : 'SISA TAGIHAN', fRp(isLunas ? 0 : totalAkhir)).size('normal').bold(false);
    builder.doubleSeparator();

    if (!isLunas && appData.banks && appData.banks.length > 0) {
        builder.line('REKENING TRANSFER RESMI:', 'left');
        (appData.banks || []).forEach(b => {
            builder.line(`${b.bank || b.bankName || 'Bank'}: ${b.number || b.bankAccount || '-'}`, 'left');
            builder.line(`a/n ${b.name || b.bankOwner || '-'}`, 'left');
        });
        builder.separator('-');
    }

    if (cfg.showBarcode) {
        builder.separator('-');
        builder.barcode(isPaylater ? `PAYLATER-${order.orderId}` : `TEMPO-${order.orderId}`, 'CODE128', 45);
        builder.line(isPaylater ? `*PAYLATER-${order.orderId}*` : `*TEMPO-${order.orderId}*`, 'center');
        builder.line(isPaylater ? '(PUTRI PAYLATER RESMI)' : '(NOTA TEMPO RESMI)', 'center');
    }

    builder.separator('-');
    const footerTempo = cleanLineAscii(cfg.footerText || 'Terima kasih atas kerja sama dan kepercayaan Anda.').trim();
    if (footerTempo) {
        wrapWords(footerTempo, cols).forEach(l => builder.line(l, 'center'));
    }
    const policyTempo = cleanLineAscii(cfg.footerPolicyNote !== undefined ? cfg.footerPolicyNote : '').trim();
    if (policyTempo) {
        builder.line('', 'center');
        wrapWords(policyTempo, cols).forEach(l => builder.line(l, 'center'));
    }

    builder.feed(cfg.feedLines || 3);
    if (cfg.autoCut) builder.cut();

    return {
        base64: builder.toBase64(),
        plainText: builder.toPlainText(),
        previewLines: builder.previewLines,
        html: builder.toHtml()
    };
};

/**
 * ============================================================
 * GENERATOR STRUK UJI COBA CETAK (TEST PRINT) DENGAN MISTAR PRESISI
 * ============================================================
 */
export const buildTestReceiptPayload = (config = null) => {
    const cfg = config || getPrinterConfig();
    const cols = getPaperCols(cfg.paperSize);
    const is80 = cols >= 40;

    const builder = new EscPosBuilder(cols);
    builder.init();

    const storeName = cleanLineAscii(cfg.headerText || appData.store?.name || 'TOKO PUTRI').trim();
    const storeAddr = cleanLineAscii(cfg.storeAddress !== undefined && cfg.storeAddress !== '' ? cfg.storeAddress : (appData.store?.address || '')).trim();
    const storeWa   = cleanLineAscii(cfg.storePhone !== undefined && cfg.storePhone !== '' ? cfg.storePhone : (appData.store?.wa || '')).trim();

    const maxDoubleWidth = Math.floor(cols / 2);
    if (storeName.length <= maxDoubleWidth) {
        builder.align('center').bold(true).size('title').line(storeName.toUpperCase(), 'center');
        builder.size('normal').bold(false);
    } else {
        builder.align('center').bold(true).size('tall');
        wrapWords(storeName.toUpperCase(), cols).forEach(l => builder.line(l, 'center'));
        builder.size('normal').bold(false);
    }

    if (cfg.showAddress !== false && storeAddr) wrapWords(storeAddr, cols).forEach(l => builder.line(l, 'center'));
    if (cfg.showPhone !== false && storeWa) builder.line(`WA: ${storeWa}`, 'center');
    builder.separator('-');

    const testHeader = is80
        ? `*** UJI COBA CETAK STRUK THERMAL ${cols} KOLOM ***`
        : `** UJI CETAK THERMAL ${cols} KOLOM **`;
    builder.bold(true).line(testHeader, 'center').bold(false);
    builder.separator('-');

    // MISTAR KALIBRASI PRESISI KERTAS (RULER)
    builder.line('MISTAR KALIBRASI TEPI KERTAS:', 'left');
    let rulerDigits = '';
    for (let i = 1; i <= cols; i++) {
        rulerDigits += String(i % 10);
    }
    builder.line(rulerDigits, 'left');

    let rulerTicks = '';
    for (let i = 1; i <= cols; i++) {
        if (i === cols) rulerTicks += '|';
        else if (i % 10 === 0) rulerTicks += '|';
        else if (i % 5 === 0) rulerTicks += ':';
        else rulerTicks += '.';
    }
    builder.line(rulerTicks, 'left');
    builder.line(`(Pastikan angka ${cols % 10} paling kanan tercetak utuh)`, 'left');
    builder.separator('-');

    // Info Perangkat & Driver
    const dateStr = formatCompactDate(Date.now(), is80);
    builder.line(`Waktu   : ${dateStr}`, 'left');
    builder.line(`Format  : Thermal ${cols} Kolom (${cfg.paperSize})`, 'left');
    builder.line(`Driver  : RAWBT FREE PRINT SERVICE`, 'left');
    builder.line(`Status  : 100% PRESISI & SIAP PAKAI`, 'left');
    builder.separator('-');

    // Simulasi Item
    builder.bold(true).twoColumn('ITEM SIMULASI', 'HARGA').bold(false);
    builder.itemRow({ name: 'Kertas Thermal Kasir Roll', qty: 2, unit: 'roll', price: 15000, subtotal: 30000 });
    builder.itemRow({ name: 'Semen Portland Komposit 40kg', qty: 1, unit: 'sak', price: 65000, subtotal: 65000 });
    builder.separator('-');
    builder.twoColumn('Subtotal', fRp(95000));
    builder.twoColumn('Diskon Uji Coba', `- ${fRp(5000)}`);
    builder.doubleSeparator();
    builder.bold(true).size('tall').twoColumn('TOTAL TES', fRp(90000)).size('normal').bold(false);
    builder.doubleSeparator();
    builder.twoColumn('Bayar Tunai', fRp(100000));
    builder.bold(true).twoColumn('Kembalian', fRp(10000)).bold(false);

    if (cfg.showPoints) {
        builder.separator('-');
        builder.twoColumn('Simulasi Poin Member', '+10 Poin');
    }

    if (cfg.showBarcode) {
        builder.separator('-');
        const testBarcodeVal = `TEST-${Date.now().toString().slice(-6)}`;
        builder.barcode(testBarcodeVal, 'CODE128', 45);
        builder.line(`*${testBarcodeVal}*`, 'center');
        builder.line('(BARCODE TEST BERHASIL)', 'center');
    }

    builder.separator('-');
    wrapWords(cfg.footerText || 'Terima kasih telah mempercayakan kebutuhan bangunan Anda kepada kami.', cols).forEach(l => builder.line(l, 'center'));
    if (cfg.footerPolicyNote) {
        builder.line('', 'center');
        wrapWords(cfg.footerPolicyNote, cols).forEach(l => builder.line(l, 'center'));
    }
    wrapWords('Hasil cetak telah terkalibrasi presisi.', cols).forEach(l => builder.line(l, 'center'));

    builder.feed(cfg.feedLines || 3);
    if (cfg.autoCut) builder.cut();

    return {
        base64: builder.toBase64(),
        plainText: builder.toPlainText(),
        previewLines: builder.previewLines,
        html: builder.toHtml()
    };
};

/**
 * ============================================================
 * FUNGSI EKSEKUSI CETAK (MELALUI GERBANG PREVIEW WAJIB)
 * Setiap fungsi di bawah SELALU menampilkan preview struk dulu.
 * Preview dilewati HANYA jika user menekan Cetak dari jendela
 * preview visual yang sudah terbuka (sudah melihat preview).
 * ============================================================
 */

/** Cek apakah modal preview tertentu sedang terlihat */
const isPreviewModalOpen = (id) => {
    const m = document.getElementById(id);
    return !!m && !m.classList.contains('hidden');
};

/**
 * Cetak Struk POS Kasir (Preview → Cetak)
 */
export const printPOSReceiptDirect = (tx) => {
    if (!tx) {
        showToast('Data transaksi kasir tidak ditemukan.', 'warning');
        return;
    }
    const cfg = getPrinterConfig();
    const payload = buildPOSReceiptPayload(tx, cfg);
    const fromPreview = isPreviewModalOpen('pos-receipt-fallback-modal');

    sendToRawBT(payload.base64, payload.plainText, payload.html, {
        skipPreview: fromPreview,
        previewLines: payload.previewLines,
        title: `Struk Kasir #${tx.txId || ''}`,
        rebuild: () => buildPOSReceiptPayload(tx, getPrinterConfig()),
        onConfirm: () => {
            // Tutup modal sukses / preview hanya setelah cetak dikonfirmasi
            document.getElementById('pos-success-modal')?.remove();
            document.getElementById('pos-receipt-fallback-modal')?.remove();
        }
    });
};

/**
 * Cetak Slip Rekap Shift Seketika (Direct Print)
 */
export const printShiftSettlementDirect = (shift, isXReport = false) => {
    if (!shift) {
        showToast('Data shift tidak ditemukan.', 'warning');
        return;
    }
    const cfg = getPrinterConfig();
    const payload = buildShiftReceiptPayload(shift, isXReport, cfg);
    const fromPreview = isPreviewModalOpen('pos-shift-receipt-modal');

    sendToRawBT(payload.base64, payload.plainText, payload.html, {
        skipPreview: fromPreview,
        previewLines: payload.previewLines,
        title: `${isXReport ? 'Ringkasan Shift (X-Report)' : 'Rekap Tutup Shift (Z-Report)'} #${shift.shiftNo || shift.id || ''}`,
        rebuild: () => buildShiftReceiptPayload(shift, isXReport, getPrinterConfig()),
        onConfirm: () => document.getElementById('pos-shift-receipt-modal')?.remove()
    });
};

/**
 * Cetak Struk Pesanan Pelanggan Seketika (Direct Print)
 */
export const printCustomerReceiptDirect = async (orderId = null) => {
    const rawTarget = (typeof orderId === 'string' ? orderId : (orderId && orderId.orderId ? orderId.orderId : null)) || cVOrd;
    const targetId = String(rawTarget || '').replace(/^#/, '').trim();

    const isOrderMatch = (cand) => {
        if (!cand) return false;
        const cid = String(cand.orderId || '').replace(/^#/, '').trim();
        if (!targetId) return true;
        return cid === targetId || cid.endsWith(targetId) || targetId.endsWith(cid);
    };

    let order = null;
    if (typeof orderId === 'object' && orderId !== null && (Array.isArray(orderId.items) && orderId.items.length > 0)) {
        order = orderId;
    }
    if ((!order || !order.items || order.items.length === 0) && isOrderMatch(window.currentCustomerOrder)) {
        order = window.currentCustomerOrder;
    }
    if ((!order || !order.items || order.items.length === 0) && isOrderMatch(window.lastPrintedOrder)) {
        order = window.lastPrintedOrder;
    }
    if ((!order || !order.items || order.items.length === 0) && (gOrds || []).length > 0) {
        const found = gOrds.find(isOrderMatch);
        if (found && Array.isArray(found.items) && found.items.length > 0) order = found;
    }
    if ((!order || !order.items || order.items.length === 0) && Array.isArray(myOrders)) {
        const mO = myOrders.find(isOrderMatch);
        if (mO && Array.isArray(mO.items) && mO.items.length > 0) order = mO;
    }

    // Jika data belum memiliki rincian items, ambil langsung dari database Firestore freshmart_orders!
    if ((!order || !order.items || order.items.length === 0) && targetId) {
        try {
            const _db = (typeof db !== 'undefined' && db) ? db : window.db;
            if (_db) {
                let snap = await _db.collection("freshmart_orders").doc(targetId).get();
                if (!snap.exists && !targetId.startsWith('ORD-')) {
                    const snap2 = await _db.collection("freshmart_orders").doc('ORD-' + targetId).get();
                    if (snap2.exists) snap = snap2;
                }
                if (snap && snap.exists) {
                    order = snap.data();
                    order.orderId = order.orderId || snap.id;
                    window.currentCustomerOrder = order;
                    window.lastPrintedOrder = order;

                    if (Array.isArray(myOrders)) {
                        const idx = myOrders.findIndex(isOrderMatch);
                        if (idx !== -1) {
                            myOrders[idx].items = order.items || [];
                            myOrders[idx].payment = order.payment || {};
                            myOrders[idx].customer = order.customer || {};
                            try { localStorage.setItem('freshmart_my_orders', JSON.stringify(myOrders)); } catch(e) {}
                        }
                    }
                }
            }
        } catch (errF) {
            console.warn('[RawBT] Gagal fetch order detail from Firestore:', errF);
        }
    }

    if (!order && Array.isArray(myOrders)) {
        order = myOrders.find(isOrderMatch);
    }
    if (!order) {
        showToast('Data pesanan tidak ditemukan.', 'warning');
        return;
    }
    window.lastPrintedOrder = order;

    const cfg = getPrinterConfig();
    const payload = buildOrderReceiptPayload(order, cfg);
    const fromPreview = isPreviewModalOpen('receipt-preview-modal');

    sendToRawBT(payload.base64, payload.plainText, payload.html, {
        skipPreview: fromPreview,
        previewLines: payload.previewLines,
        title: `Struk Pesanan #${order.orderId || ''}`,
        rebuild: () => buildOrderReceiptPayload(order, getPrinterConfig()),
        onConfirm: () => {
            if (typeof window.closeReceiptPreviewModal === 'function' && fromPreview) {
                window.closeReceiptPreviewModal();
            }
        }
    });
};

/**
 * Cetak Struk Nota Tagihan Tempo Seketika (Direct Print)
 */
export const printTempoReceiptDirect = (orderId = null) => {
    const targetId = orderId || cVOrd;
    const piutangList = window.cachedPiutangOrders || [];
    let order = piutangList.find(x => String(x.orderId) === String(targetId))
        || (gOrds || []).find(x => String(x.orderId) === String(targetId));
    if (!order && window.lastPrintedOrder && String(window.lastPrintedOrder.orderId) === String(targetId)) {
        order = window.lastPrintedOrder;
    }

    if (!order) {
        if (typeof window.previewTempoReceipt === 'function' && targetId && !window.__tempoReceiptFetching) {
            window.__tempoReceiptFetching = true;
            Promise.resolve(window.previewTempoReceipt(targetId)).finally(() => { window.__tempoReceiptFetching = false; });
            return;
        }
        showToast('Data nota piutang tidak ditemukan.', 'warning');
        return;
    }

    const cfg = getPrinterConfig();
    const payload = buildTempoReceiptPayload(order, cfg);
    const fromPreview = isPreviewModalOpen('receipt-preview-modal');

    sendToRawBT(payload.base64, payload.plainText, payload.html, {
        skipPreview: fromPreview,
        previewLines: payload.previewLines,
        title: `Nota Tagihan Tempo #${order.orderId || ''}`,
        rebuild: () => buildTempoReceiptPayload(order, getPrinterConfig()),
        onConfirm: () => {
            if (typeof window.closeReceiptPreviewModal === 'function' && fromPreview) {
                window.closeReceiptPreviewModal();
            }
        }
    });
};

/**
 * Uji Coba Cetak RawBT (Preview → Cetak)
 */
export const executeRawBTTestPrint = () => {
    const cfg = getPrinterConfig();
    const payload = buildTestReceiptPayload(cfg);
    sendToRawBT(payload.base64, payload.plainText, payload.html, {
        previewLines: payload.previewLines,
        title: 'Uji Coba Cetak Printer',
        rebuild: () => buildTestReceiptPayload(getPrinterConfig())
    });
};

/**
 * ============================================================
 * GENERATOR STRUK NOTA RETUR PENJUALAN (RMA) — THERMAL 58/80MM
 * ============================================================
 */
export const buildSalesReturnReceiptPayload = (record, config = null) => {
    const cfg = config || getPrinterConfig();
    const cols = getPaperCols(cfg.paperSize);
    const is80 = cols >= 40;

    const builder = new EscPosBuilder(cols);
    builder.init();

    const storeName = cleanLineAscii(cfg.headerText || appData.store?.name || 'TOKO PUTRI').trim();
    const storeAddr = cleanLineAscii(cfg.storeAddress !== undefined && cfg.storeAddress !== '' ? cfg.storeAddress : (appData.store?.address || '')).trim();
    const storeWa   = cleanLineAscii(cfg.storePhone !== undefined && cfg.storePhone !== '' ? cfg.storePhone : (appData.store?.wa || '')).trim();

    const maxDoubleWidth = Math.floor(cols / 2);
    if (storeName.length <= maxDoubleWidth) {
        builder.align('center').bold(true).size('title').line(storeName.toUpperCase(), 'center');
        builder.size('normal').bold(false);
    } else {
        builder.align('center').bold(true).size('tall');
        wrapWords(storeName.toUpperCase(), cols).forEach(l => builder.line(l, 'center'));
        builder.size('normal').bold(false);
    }

    if (cfg.showAddress !== false && storeAddr) wrapWords(storeAddr, cols).forEach(l => builder.line(l, 'center'));
    if (cfg.showPhone !== false && storeWa) builder.line(`WA: ${storeWa}`, 'center');
    const npwpStr = appData.store?.taxNpwp;
    if (cfg.showNpwp !== false && npwpStr) builder.line(`NPWP: ${npwpStr}`, 'center');
    builder.separator('-');

    const title = is80 ? '*** NOTA RETUR PENJUALAN (RMA) ***' : '** NOTA RETUR PENJUALAN **';
    builder.bold(true).line(title, 'center').bold(false);
    builder.separator('-');

    const dateStr = formatCompactDate(record.createdAt || Date.now(), is80);
    builder.twoColumn(`No Retur: #${record.id}`, dateStr, false, true);
    builder.twoColumn(`No Nota : #${record.orderId || '-'}`, `Ksr: ${(record.cashierName || 'Kasir').substring(0, is80 ? 14 : 8)}`, false, true);

    const custName = (record.customerName || 'Pelanggan Umum').substring(0, is80 ? 22 : 14);
    builder.twoColumn(`Plg     : ${custName}`, 'Status: Selesai', false, true);
    if (record.customerPhone) {
        builder.line(`HP      : ${record.customerPhone}`, 'left');
    }

    builder.separator('-');

    // Daftar Barang Diretur
    (record.items || []).forEach(it => {
        const vText = it.variantName ? ` (${it.variantName})` : '';
        const itemName = (it.name || 'Barang') + vText;

        builder.bold(true);
        wrapWords(itemName, cols).forEach(l => builder.line(l, 'left'));
        builder.bold(false);

        const qStr = `  ${formatQty(it.qty)} ${it.unit || 'pcs'} x ${fRpNum(it.soldPrice)}`;
        const tStr = fRpNum(it.subtotalRefund);
        builder.twoColumn(qStr, tStr, false, false);

        if (it.reason) {
            builder.line(`  * Alasan: ${it.reason}`, 'left');
        }
        const condLabel = it.condition === 'bad' ? 'Cacat/Rusak (Karantina)' : 'Kondisi Baik (Rak Toko)';
        builder.line(`  * ${condLabel}`, 'left');
    });

    builder.doubleSeparator();
    builder.bold(true).size('tall').twoColumn('TOTAL RETUR', fRp(record.totalRefund)).size('normal').bold(false);
    builder.doubleSeparator();

    let methodLabel = 'REFUND TUNAI';
    if (record.refundMethod === 'credit') methodLabel = 'SALDO KREDIT TOKO';
    else if (record.refundMethod === 'exchange') methodLabel = 'TUKAR BARANG LAIN';
    else if (record.refundMethod) methodLabel = String(record.refundMethod).toUpperCase();

    builder.twoColumn('Kompensasi', methodLabel);

    if (record.notes) {
        builder.separator('-');
        wrapWords(`Catatan: ${record.notes}`, cols).forEach(l => builder.line(l, 'left'));
    }

    if (cfg.showBarcode) {
        builder.separator('-');
        builder.barcode(`RMA-${record.id}`, 'CODE128', 45);
        builder.line(`*RMA-${record.id}*`, 'center');
        builder.line('(BUKTI RETUR RESMI)', 'center');
    }

    builder.separator('-');
    builder.line('Barang retur telah diverifikasi oleh toko.', 'center');
    builder.line('Terima kasih atas kerja samanya.', 'center');

    builder.feed(cfg.feedLines || 3);
    if (cfg.autoCut) builder.cut();

    return {
        base64: builder.toBase64(),
        plainText: builder.toPlainText(),
        previewLines: builder.previewLines,
        html: builder.toHtml()
    };
};

/**
 * Cetak Struk Nota Retur Penjualan Seketika (Direct Print)
 */
export const printSalesReturnReceiptDirect = (returnId = null) => {
    const list = appData.salesReturns || [];
    let record = null;
    if (typeof returnId === 'object' && returnId !== null) {
        record = returnId;
    } else if (returnId) {
        record = list.find(r => String(r.id) === String(returnId));
    }
    if (!record) {
        showToast('Data nota retur tidak ditemukan.', 'warning');
        return;
    }

    const cfg = getPrinterConfig();
    const payload = buildSalesReturnReceiptPayload(record, cfg);
    const fromPreview = isPreviewModalOpen('receipt-preview-modal');

    sendToRawBT(payload.base64, payload.plainText, payload.html, {
        skipPreview: fromPreview,
        previewLines: payload.previewLines,
        title: `Nota Retur Penjualan #${record.id}`,
        rebuild: () => buildSalesReturnReceiptPayload(record, getPrinterConfig()),
        onConfirm: () => {
            if (typeof window.closeReceiptPreviewModal === 'function' && fromPreview) {
                window.closeReceiptPreviewModal();
            }
        }
    });
};

// ─── Expose Global ke window ──────────────────────────────────
window.cleanLineAscii             = cleanLineAscii;
window.wrapWords                  = wrapWords;
window.formatTwoColumn            = formatTwoColumn;
window.formatCompactDate          = formatCompactDate;
window.EscPosBuilder              = EscPosBuilder;
window.sendToRawBT                = sendToRawBT;
window.renderThermalDOMAndPrint   = renderThermalDOMAndPrint;
window.openRawBTApp               = openRawBTApp;
window.buildPOSReceiptPayload     = buildPOSReceiptPayload;
window.buildShiftReceiptPayload   = buildShiftReceiptPayload;
window.buildOrderReceiptPayload   = buildOrderReceiptPayload;
window.buildTempoReceiptPayload   = buildTempoReceiptPayload;
window.buildTestReceiptPayload    = buildTestReceiptPayload;
window.buildSalesReturnReceiptPayload = buildSalesReturnReceiptPayload;
window.printPOSReceiptDirect      = printPOSReceiptDirect;
window.printShiftSettlementDirect = printShiftSettlementDirect;
window.printCustomerReceiptDirect = printCustomerReceiptDirect;
window.printTempoReceiptDirect    = printTempoReceiptDirect;
window.printSalesReturnReceiptDirect = printSalesReturnReceiptDirect;
window.executeRawBTTestPrint      = executeRawBTTestPrint;

