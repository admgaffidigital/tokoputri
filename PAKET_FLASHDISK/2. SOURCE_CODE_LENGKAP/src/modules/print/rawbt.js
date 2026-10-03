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
import { el, esc } from '../../core/utils.js';
import { showToast } from '../../core/ui.js';
import { getPrinterConfig, getPaperCols } from './printer-settings.js';
import { openThermalPrintPreview } from './print-preview.js';

// ─── Format Currency & Qty ───────────────────────────────────
export const fRp = (n) => 'Rp ' + Math.round(Number(n || 0)).toLocaleString('id-ID');
export const fRpNum = (n) => Math.round(Number(n || 0)).toLocaleString('id-ID');
export const formatQty = (q) => {
    const num = parseFloat(q);
    if (isNaN(num)) return '0';
    return Number.isInteger(num) ? String(num) : num.toFixed(2).replace(/\.?0+$/, '');
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
export class EscPosBuilder {
    constructor(cols = 32) {
        this.cols = Number(cols) || 32;
        this.bytes = [];
        this.plainLines = [];
        // Baris terformat untuk Preview WYSIWYG (perataan, tebal, ukuran)
        this.previewLines = [];
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
        this.previewLines.push({ t: cleanLineAscii(str), a: alignMode, b: this._bold, s: this._size });
        return this;
    }

    /** Mencetak teks di tengah dengan pembungkusan kata otomatis */
    centered(str = '') {
        const lines = wrapWords(str, this.cols);
        lines.forEach(l => this.line(l, 'center'));
        return this;
    }

    /**
     * Dua kolom rata kiri & kanan presisi tinggi
     */
    twoColumn(leftStr = '', rightStr = '', boldMode = false, truncateLeft = false) {
        if (boldMode) this.bold(true);
        const lines = formatTwoColumn(leftStr, rightStr, this.cols, truncateLeft);
        lines.forEach(l => this.line(l, 'left'));
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
        this.line(sep, 'left');
        return this;
    }

    /** Garis ganda (===) */
    doubleSeparator() {
        return this.separator('=');
    }

    /** Feed baris kosong agar kertas melewati pemotong (ESC d n) */
    feed(lines = 3) {
        this.bytes.push(0x1B, 0x64, Math.max(1, lines));
        for (let i = 0; i < lines; i++) {
            this.plainLines.push('');
            this.previewLines.push({ t: '', a: 'left', b: false, s: 'normal' });
        }
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
            showToast('Mencetak struk via RawBT... 🖨️');
            return true;
        } catch (e) {
            console.warn('[RawBT] AndroidNativeApp error, mencoba intent...', e);
        }
    }

    // 2. Prioritas 2: Browser Android / PWA via Android Intent URL
    if (isAndroid) {
        try {
            showToast('Membuka Printer RawBT... 🖨️');
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
    showToast('Mencetak struk kasir... 🖨️');
    renderThermalDOMAndPrint(htmlDomContent || plainText);
    return true;
};

/**
 * Render ke elemen thermal DOM tersembunyi dan panggil window.print()
 * dengan injeksi CSS dinamis sesuai ukuran kertas (58mm atau 80mm).
 */
export const renderThermalDOMAndPrint = (content) => {
    const config = getPrinterConfig();
    const cols = getPaperCols(config.paperSize);
    const is80 = cols >= 40;
    const paperWidth = is80 ? '80mm' : '58mm';

    let t = el('thermal-print-section');
    if (!t) {
        t = document.createElement('div');
        t.id = 'thermal-print-section';
        document.body.appendChild(t);
    }

    t.className = is80 ? 'paper-80mm' : 'paper-58mm';
    document.body.classList.remove('paper-58mm', 'paper-80mm');
    document.body.classList.add(is80 ? 'paper-80mm' : 'paper-58mm');

    // Injeksi aturan @page dinamis sesuai ukuran kertas yang dipilih
    let pageStyle = document.getElementById('dynamic-print-page-style');
    if (!pageStyle) {
        pageStyle = document.createElement('style');
        pageStyle.id = 'dynamic-print-page-style';
        document.head.appendChild(pageStyle);
    }
    pageStyle.innerHTML = `@media print { @page { margin: 0; size: ${paperWidth} auto; } html, body { width: ${paperWidth} !important; } }`;

    const isHTML = typeof content === 'string' && content.includes('<') && content.includes('>');
    const formatted = isHTML ? content : `<pre style="font-family:'Courier New',Courier,monospace;font-size:11px;margin:0;line-height:1.25;white-space:pre-wrap;word-break:break-word;">${esc(content)}</pre>`;

    t.innerHTML = `
        <div style="width:100%;font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.25;color:#000;background:#fff;padding:0;">
            ${formatted}
        </div>
    `;

    setTimeout(() => {
        window.print();
    }, 100);
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
    const storeAddr = cleanLineAscii(appData.store?.address || '').trim();
    const storeWa   = cleanLineAscii(appData.store?.wa || '').trim();

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

    if (storeAddr) {
        wrapWords(storeAddr, cols).forEach(l => builder.line(l, 'center'));
    }
    if (storeWa) {
        builder.line(`WA: ${storeWa}`, 'center');
    }
    const npwpStr = tx.payment?.taxNpwp || appData.store?.taxNpwp;
    if (npwpStr) {
        builder.line(`NPWP: ${npwpStr}`, 'center');
    }
    builder.separator('-');

    // 3. Metadata Transaksi
    const dateStr = formatCompactDate(tx.dateMs || Date.now(), is80);
    const txNo = `#${tx.txId}`;
    builder.twoColumn(`No : ${txNo}`, dateStr, false, true);

    const ksrName = (tx.cashierName || 'Kasir').substring(0, is80 ? 16 : 9);
    const plgName = (tx.customer?.name || 'Umum').substring(0, is80 ? 18 : 11);
    builder.twoColumn(`Ksr: ${ksrName}`, `Plg: ${plgName}`, false, true);

    if (tx.customer?.phone) {
        builder.line(`HP : ${tx.customer.phone}`, 'left');
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

    const showTxPpn = (tx.payment?.ppnEnabled || tx.payment?.ppnShowZero || (tx.payment?.ppnRate === 0) || (tx.payment?.ppnAmount && tx.payment.ppnAmount > 0)) && (appData.store?.ppnEnabled || tx.payment?.ppnEnabled);
    if (showTxPpn) {
        const isInc = tx.payment?.ppnType === 'inclusive';
        const rate = tx.payment?.ppnRate !== undefined ? tx.payment.ppnRate : (appData.store?.ppnRate || 0);
        const amt = tx.payment?.ppnAmount || 0;
        const lbl = tx.payment?.ppnLabel || `${isInc ? 'Inc. PPN' : 'PPN'} (${rate}%)`;
        const valStr = amt > 0 ? `${isInc ? '' : '+ '}${fRp(amt)}` : 'Rp 0';
        builder.twoColumn(lbl, valStr);
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
    } else if (tx.payment?.method === 'tempo') {
        if (isPaylater) {
            builder.twoColumn('Limit Terpakai', fRp(tx.payment?.paylaterUsed || tx.paylaterUsed || (tx.total - (tx.payment?.tempoDp ?? 0))));
        }
        builder.twoColumn('Uang Muka (DP)', fRp(tx.payment?.tempoDp ?? tx.payment?.dp ?? 0));
        builder.bold(true).twoColumn(isPaylater ? 'Tagihan PayLater' : 'Sisa Piutang', fRp(tx.payment.tempoBalance || 0)).bold(false);
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
        builder.align('center');
        builder.line(`*POS-${tx.txId}*`, 'center');
        builder.line('(SCAN DI KASIR)', 'center');
    }

    // 9. Pesan Footer Toko
    builder.separator('-');
    const footerText = cfg.footerText || 'Terima Kasih Atas Kunjungan Anda!';
    wrapWords(footerText, cols).forEach(l => builder.line(l, 'center'));

    // 10. Pengumpan Kertas & Pemotong
    builder.feed(cfg.feedLines || 3);
    if (cfg.autoCut) {
        builder.cut();
    }

    return {
        base64: builder.toBase64(),
        plainText: builder.toPlainText(),
        previewLines: builder.previewLines
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
    const totalSales    = parseFloat(shift.totalSales) || (cashSales + qrisSales + transferSales + tempoSales);
    const txCount       = shift.txCount || 0;

    builder.bold(true).line('RINGKASAN PENJUALAN', 'left').bold(false);
    builder.twoColumn('Modal Awal Laci', fRp(startingCash));
    builder.twoColumn('Penjualan Tunai', fRp(cashSales));
    if (qrisSales > 0)     builder.twoColumn('Penjualan QRIS', fRp(qrisSales));
    if (transferSales > 0) builder.twoColumn('Penjualan Transfer', fRp(transferSales));
    if (tempoSales > 0)    builder.twoColumn('Penjualan Tempo', fRp(tempoSales));
    builder.separator('-');
    builder.twoColumn('Total Transaksi', `${txCount} Trx`);
    builder.bold(true).size('tall').twoColumn('TOTAL OMSET', fRp(totalSales)).size('normal').bold(false);
    builder.doubleSeparator();

    // Rekonsiliasi Kas Laci (Z-Report)
    if (!isXReport) {
        const expectedCash = startingCash + cashSales;
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
        previewLines: builder.previewLines
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
    const npwpStrOrder = order.payment?.taxNpwp || appData.store?.taxNpwp;
    if (npwpStrOrder) builder.line(`NPWP: ${npwpStrOrder}`, 'center');
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

    const calcSubtotal = orderItems.reduce((acc, i) => acc + (parseFloat(i.qty || 1) * (parseFloat(i.effectivePrice || i.price) || 0)), 0);
    const subtotal = (order.payment && order.payment.subtotal !== undefined) ? order.payment.subtotal : (calcSubtotal || order.total || 0);
    const shipping = (order.payment && order.payment.shippingCost !== undefined) ? order.payment.shippingCost : 0;
    const grandTot = (order.payment && order.payment.grandTotal !== undefined) ? order.payment.grandTotal : (order.total || (subtotal + shipping));

    builder.twoColumn('Subtotal', fRp(subtotal));
    if (order.customer?.deliveryMethod === 'delivery' || order.deliveryMethod === 'delivery') {
        builder.twoColumn('Ongkos Kirim', fRp(shipping));
    }
    if (order.payment?.productDiscount) {
        builder.twoColumn('Potongan Harga', `- ${fRp(order.payment.productDiscount)}`);
    }
    if (order.payment?.shippingDiscount) {
        builder.twoColumn('Potongan Ongkir', `- ${fRp(order.payment.shippingDiscount)}`);
    }

    const showOrderPpn = (order.payment?.ppnEnabled || order.payment?.ppnShowZero || (order.payment?.ppnRate === 0) || (order.payment?.ppnAmount && order.payment.ppnAmount > 0)) && (appData.store?.ppnEnabled || order.payment?.ppnEnabled);
    if (showOrderPpn) {
        const isInc = order.payment?.ppnType === 'inclusive';
        const rate = order.payment?.ppnRate !== undefined ? order.payment.ppnRate : (appData.store?.ppnRate || 0);
        const amt = order.payment?.ppnAmount || 0;
        const lbl = order.payment?.ppnLabel || `${isInc ? 'Inc. PPN' : 'PPN'} (${rate}%)`;
        const valStr = amt > 0 ? `${isInc ? '' : '+ '}${fRp(amt)}` : 'Rp 0';
        builder.twoColumn(lbl, valStr);
    }

    builder.doubleSeparator();
    builder.bold(true).size('tall').twoColumn('TOTAL', fRp(grandTot)).size('normal').bold(false);
    builder.doubleSeparator();

    builder.twoColumn('Metode Bayar', (order.payment?.method || 'Tunai').toUpperCase());

    if (cfg.showPoints && (order.pointsEarned > 0 || order.finalMemberPoints !== undefined)) {
        builder.separator('-');
        if (order.pointsEarned > 0) builder.twoColumn('Poin Didapat', `+${order.pointsEarned} Poin`, true);
        if (order.finalMemberPoints !== undefined) builder.twoColumn('Saldo Poin', `${order.finalMemberPoints} Poin`);
    }

    if (cfg.showBarcode) {
        builder.separator('-');
        builder.align('center');
        builder.line(`*ORDER-${order.orderId}*`, 'center');
        builder.line('(SCAN DI KASIR)', 'center');
    }

    builder.separator('-');
    wrapWords(cfg.footerText || 'Terima Kasih Atas Kunjungan Anda!', cols).forEach(l => builder.line(l, 'center'));
    builder.feed(cfg.feedLines || 3);
    if (cfg.autoCut) builder.cut();

    return {
        base64: builder.toBase64(),
        plainText: builder.toPlainText(),
        previewLines: builder.previewLines
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
        builder.align('center');
        builder.line(isPaylater ? `*PAYLATER-${order.orderId}*` : `*TEMPO-${order.orderId}*`, 'center');
        builder.line(isPaylater ? '(PUTRI PAYLATER RESMI)' : '(NOTA TEMPO RESMI)', 'center');
    }

    builder.separator('-');
    wrapWords(cfg.footerText || 'Terima Kasih Atas Kerja Sama & Kepercayaannya!', cols).forEach(l => builder.line(l, 'center'));
    builder.feed(cfg.feedLines || 3);
    if (cfg.autoCut) builder.cut();

    return {
        base64: builder.toBase64(),
        plainText: builder.toPlainText(),
        previewLines: builder.previewLines
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
    const maxDoubleWidth = Math.floor(cols / 2);
    if (storeName.length <= maxDoubleWidth) {
        builder.align('center').bold(true).size('title').line(storeName.toUpperCase(), 'center');
        builder.size('normal').bold(false);
    } else {
        builder.align('center').bold(true).size('tall');
        wrapWords(storeName.toUpperCase(), cols).forEach(l => builder.line(l, 'center'));
        builder.size('normal').bold(false);
    }

    const storeWa = cleanLineAscii(appData.store?.wa || '').trim();
    if (storeWa) builder.line(`WA: ${storeWa}`, 'center');
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
        builder.align('center');
        builder.line(`*TEST-RAWBT-${Date.now().toString().slice(-6)}*`, 'center');
        builder.line('(BARCODE TEST BERHASIL)', 'center');
    }

    builder.separator('-');
    wrapWords(cfg.footerText || 'Terima kasih atas kunjungan Anda!', cols).forEach(l => builder.line(l, 'center'));
    wrapWords('Hasil cetak telah terkalibrasi presisi.', cols).forEach(l => builder.line(l, 'center'));

    builder.feed(cfg.feedLines || 3);
    if (cfg.autoCut) builder.cut();

    return {
        base64: builder.toBase64(),
        plainText: builder.toPlainText(),
        previewLines: builder.previewLines
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

    sendToRawBT(payload.base64, payload.plainText, '', {
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

    sendToRawBT(payload.base64, payload.plainText, '', {
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

    sendToRawBT(payload.base64, payload.plainText, '', {
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

    sendToRawBT(payload.base64, payload.plainText, '', {
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
    sendToRawBT(payload.base64, payload.plainText, '', {
        previewLines: payload.previewLines,
        title: 'Uji Coba Cetak Printer',
        rebuild: () => buildTestReceiptPayload(getPrinterConfig())
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
window.printPOSReceiptDirect      = printPOSReceiptDirect;
window.printShiftSettlementDirect = printShiftSettlementDirect;
window.printCustomerReceiptDirect = printCustomerReceiptDirect;
window.printTempoReceiptDirect    = printTempoReceiptDirect;
window.executeRawBTTestPrint      = executeRawBTTestPrint;
