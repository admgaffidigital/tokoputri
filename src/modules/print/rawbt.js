/**
 * ============================================================
 * MODUL DRIVER PRINTER RAWBT & ESC/POS ENGINE UNIVERSAL
 * Menangani integrasi penuh aplikasi RawBT (Android Free/Pro),
 * pembuatan byte ESC/POS binary & teks thermal (58mm / 80mm),
 * cetak seketika (Direct Print) tanpa dialog browser, serta
 * manajemen koneksi printer Bluetooth, USB OTG, dan WiFi LAN.
 * ============================================================
 */

import { appData, gOrds, cVOrd, myOrders } from '../../core/state.js';
import { el, esc } from '../../core/utils.js';
import { showToast } from '../../core/ui.js';
import { getPrinterConfig } from './printer-settings.js';

// ─── Format Currency & Qty ───────────────────────────────────
const fRp = (n) => 'Rp ' + Math.round(Number(n || 0)).toLocaleString('id-ID');
const formatQty = (q) => {
    const num = parseFloat(q);
    if (isNaN(num)) return '0';
    return Number.isInteger(num) ? String(num) : num.toFixed(2).replace(/\.?0+$/, '');
};

/**
 * ============================================================
 * KELAS BUILDER ESC/POS & MONOSPACE THERMAL
 * Menghasilkan byte binary ESC/POS standar dan teks terformat.
 * ============================================================
 */
export class EscPosBuilder {
    constructor(cols = 32) {
        this.cols = cols === 48 ? 48 : 32;
        this.bytes = [];
        this.plainLines = [];
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
        return this;
    }

    /**
     * Atur ukuran font (GS ! n)
     * 'title' = Double Width & Double Height
     * 'total' = Double Height
     * 'normal' = Normal 1x
     */
    size(type = 'normal') {
        if (type === 'title') {
            this.bytes.push(0x1D, 0x21, 0x11); // Double width & height
        } else if (type === 'total') {
            this.bytes.push(0x1D, 0x21, 0x01); // Double height
        } else {
            this.bytes.push(0x1D, 0x21, 0x00); // Normal
        }
        return this;
    }

    /** Menambahkan teks mentah dengan encoding UTF-8 */
    text(str) {
        if (!str) return this;
        // Ganti karakter non-ASCII yang sering bermasalah di thermal
        const clean = str
            .replace(/[^\x00-\x7F]/g, ' ')
            .replace(/[\r]/g, '');
        
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
        return this;
    }

    /**
     * Dua kolom rata kiri & kanan (contoh: "TOTAL          Rp 50.000")
     */
    twoColumn(leftStr = '', rightStr = '', boldMode = false) {
        if (boldMode) this.bold(true);
        const l = String(leftStr);
        const r = String(rightStr);
        const padLen = this.cols - l.length - r.length;
        const lineStr = padLen > 0 ? l + ' '.repeat(padLen) + r : l + ' ' + r;
        this.line(lineStr, 'left');
        if (boldMode) this.bold(false);
        return this;
    }

    /** Garis pemisah putus-putus */
    separator(char = '-') {
        const sep = char.repeat(this.cols);
        this.line(sep, 'center');
        return this;
    }

    /** Garis ganda (===) */
    doubleSeparator() {
        return this.separator('=');
    }

    /** Feed baris kosong agar kertas melewati pemotong (ESC d n) */
    feed(lines = 3) {
        this.bytes.push(0x1B, 0x64, Math.max(1, lines));
        for (let i = 0; i < lines; i++) this.plainLines.push('');
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
        // Batch conversion untuk performa optimal
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
export const sendToRawBT = (escPosBase64, plainText = '', htmlDomContent = '') => {
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
                if (document.hidden) return; // Pengguna sudah berpindah ke RawBT
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
 */
export const renderThermalDOMAndPrint = (content) => {
    const config = getPrinterConfig();
    const is80 = config.paperSize === '80mm';

    let t = el('thermal-print-section');
    if (!t) {
        t = document.createElement('div');
        t.id = 'thermal-print-section';
        document.body.appendChild(t);
    }

    const isHTML = typeof content === 'string' && content.includes('<') && content.includes('>');
    const formatted = isHTML ? content : `<pre style="font-family:'Courier New',Courier,monospace;font-size:11px;margin:0;line-height:1.2;">${esc(content)}</pre>`;

    t.innerHTML = `
        <div style="width:${is80 ? '80mm' : '58mm'};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">
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
        // Coba buka aplikasi lewat intent package
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
 * GENERATOR STRUK POS KASIR (ESC/POS & RAWBT)
 * ============================================================
 */
export const buildPOSReceiptPayload = (tx, config = null) => {
    const cfg = config || getPrinterConfig();
    const is80 = cfg.paperSize === '80mm';
    const cols = is80 ? 48 : 32;

    const builder = new EscPosBuilder(cols);
    builder.init();

    // Laci Kasir (Cash Drawer Kick) jika tunai dan opsi aktif
    if (cfg.openCashDrawer && tx.payment?.method === 'cash') {
        builder.openDrawer();
    }

    // Kop Toko
    const storeName = cfg.headerText || appData.store?.name || 'TOKO PUTRI';
    const storeAddr = appData.store?.address || '';
    const storeWa   = appData.store?.wa || '';

    builder.align('center').bold(true).size('title').line(storeName.toUpperCase(), 'center');
    builder.size('normal').bold(false);

    if (storeAddr) builder.line(storeAddr, 'center');
    if (storeWa) builder.line(`WA: ${storeWa}`, 'center');
    builder.separator('-');

    // Informasi Transaksi
    const dateStr = new Date(tx.dateMs || Date.now()).toLocaleString('id-ID', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });

    builder.twoColumn(`No  : #${tx.txId}`, `Tgl: ${dateStr}`);
    builder.twoColumn(`Ksr : ${tx.cashierName || 'Kasir'}`, `Plg: ${(tx.customer?.name || 'Umum').substring(0, 14)}`);
    if (tx.customer?.phone) {
        builder.line(`HP  : ${tx.customer.phone}`, 'left');
    }
    builder.separator('-');

    // Daftar Barang
    (tx.items || []).forEach(item => {
        let vText = item.variantName ? ` (${item.variantName}${item.colorCode ? ' ' + item.colorCode : ''})` : '';
        let itemName = item.name + vText + (item.poTime ? ' [PO]' : '');

        builder.bold(true).line(itemName, 'left').bold(false);
        const qStr = `  ${formatQty(item.qty)} ${item.unit || 'pcs'} x ${fRp(item.price)}`;
        const tStr = fRp(item.subtotal);
        builder.twoColumn(qStr, tStr);

        if (item.poTime) {
            builder.line(`  * Estimasi PO: ${item.poTime}`, 'left');
        }
    });

    builder.separator('-');

    // Ringkasan Pembayaran
    builder.twoColumn('Subtotal', fRp(tx.subtotal));

    if ((tx.globalDiscount || 0) > 0) {
        const discLabel = tx.discountType === 'percent' && tx.discountVal ? `Diskon (${tx.discountVal}%)` : 'Diskon';
        builder.twoColumn(discLabel, `- ${fRp(tx.globalDiscount)}`);
    }

    if (tx.payment?.ppnAmount && tx.payment.ppnAmount > 0) {
        const isInc = tx.payment.ppnType === 'inclusive';
        const rate = tx.payment.ppnRate || 11;
        builder.twoColumn(`${isInc ? 'Inc. PPN' : 'PPN'} (${rate}%)`, `${isInc ? '' : '+ '}${fRp(tx.payment.ppnAmount)}`);
    }

    builder.separator('=');
    builder.bold(true).size('total').twoColumn('TOTAL', fRp(tx.total), true).size('normal').bold(false);
    builder.separator('=');

    // Detail Pelunasan
    const pMethod = (tx.payment?.method || 'CASH').toUpperCase();
    builder.twoColumn('Metode Bayar', pMethod);

    if (tx.payment?.method === 'cash') {
        builder.twoColumn('Bayar Tunai', fRp(tx.payment.paid));
        builder.bold(true).twoColumn('Kembalian', fRp(tx.payment.change)).bold(false);
    } else if (tx.payment?.method === 'tempo') {
        builder.twoColumn('Uang Muka (DP)', fRp(tx.payment.dp || 0));
        builder.bold(true).twoColumn('Sisa Piutang', fRp(tx.payment.tempoBalance || 0)).bold(false);
        if (tx.payment.tempoDueDate) {
            builder.line(`Jatuh Tempo: ${tx.payment.tempoDueDate}`, 'left');
        }
    }

    // Poin Member
    if (cfg.showPoints && tx.pointsEarned > 0) {
        builder.separator('-');
        builder.twoColumn('Poin Didapat', `+${tx.pointsEarned} Poin`, true);
        if (tx.finalMemberPoints !== undefined && tx.finalMemberPoints !== null) {
            builder.twoColumn('Total Saldo Poin', `${tx.finalMemberPoints} Poin`);
        }
    }

    // Barcode / Nomor Transaksi
    if (cfg.showBarcode) {
        builder.separator('-');
        builder.align('center');
        builder.line(`*POS-${tx.txId}*`, 'center');
        builder.line('(SCAN DI KASIR)', 'center');
    }

    // Footer Pesan Toko
    builder.separator('-');
    const footer = cfg.footerText || 'Terima Kasih Atas Kunjungan Anda!';
    builder.line(footer, 'center');

    // Spasi & Pemotong Kertas
    builder.feed(cfg.feedLines || 3);
    if (cfg.autoCut) {
        builder.cut();
    }

    return {
        base64: builder.toBase64(),
        plainText: builder.toPlainText()
    };
};

/**
 * ============================================================
 * GENERATOR SLIP REKAP SHIFT KASIR (X/Z-REPORT)
 * ============================================================
 */
export const buildShiftReceiptPayload = (shift, isXReport = false, config = null) => {
    const cfg = config || getPrinterConfig();
    const is80 = cfg.paperSize === '80mm';
    const cols = is80 ? 48 : 32;

    const builder = new EscPosBuilder(cols);
    builder.init();

    const storeName = cfg.headerText || appData.store?.name || 'TOKO PUTRI';
    const storeAddr = appData.store?.address || '';
    const storeWa   = appData.store?.wa || '';

    builder.align('center').bold(true).size('title').line(storeName.toUpperCase(), 'center');
    builder.size('normal').bold(false);

    if (storeAddr) builder.line(storeAddr, 'center');
    if (storeWa) builder.line(`WA: ${storeWa}`, 'center');
    builder.separator('-');

    const titleStr = isXReport ? 'RINGKASAN SHIFT (X-REPORT)' : 'REKAP TUTUP SHIFT (Z-REPORT)';
    builder.bold(true).line(`*** ${titleStr} ***`, 'center').bold(false);
    builder.separator('-');

    const startDateStr = new Date(shift.startTime).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' });
    const endDateStr = shift.endTime ? new Date(shift.endTime).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' }) : new Date().toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' });

    builder.twoColumn('Shift ID', `#${shift.id || '-'}`);
    builder.twoColumn('Kasir', shift.cashierName || 'Kasir');
    builder.twoColumn('Mulai', startDateStr);
    builder.twoColumn('Selesai', endDateStr);
    builder.separator('-');

    // Ringkasan Penjualan
    const startingCash = parseFloat(shift.startingCash) || 0;
    const cashSales    = parseFloat(shift.cashSales) || 0;
    const qrisSales    = parseFloat(shift.qrisSales) || 0;
    const transferSales= parseFloat(shift.transferSales) || 0;
    const tempoSales   = parseFloat(shift.tempoSales) || 0;
    const totalSales   = parseFloat(shift.totalSales) || (cashSales + qrisSales + transferSales + tempoSales);
    const txCount      = shift.txCount || 0;

    builder.bold(true).line('RINGKASAN PENJUALAN', 'left').bold(false);
    builder.twoColumn('Modal Awal Laci', fRp(startingCash));
    builder.twoColumn('Penjualan Tunai', fRp(cashSales));
    if (qrisSales > 0)     builder.twoColumn('Penjualan QRIS', fRp(qrisSales));
    if (transferSales > 0) builder.twoColumn('Penjualan Transfer', fRp(transferSales));
    if (tempoSales > 0)    builder.twoColumn('Penjualan Tempo', fRp(tempoSales));
    builder.separator('-');
    builder.twoColumn('Total Transaksi', `${txCount} Transaksi`);
    builder.bold(true).size('total').twoColumn('TOTAL OMSET', fRp(totalSales), true).size('normal').bold(false);
    builder.separator('=');

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
            builder.line(`Catatan: ${shift.closingNotes}`, 'left');
        }
        builder.separator('-');

        // Kolom Tanda Tangan
        builder.line('Tanda Tangan & Verifikasi:', 'left');
        builder.feed(2);
        builder.twoColumn('( Kasir )', '( Supervisor/Owner )');
        builder.separator('-');
    }

    const footer = cfg.footerText || 'Laporan Kasir Resmi Toko Putri';
    builder.line(footer, 'center');
    builder.feed(cfg.feedLines || 3);
    if (cfg.autoCut) builder.cut();

    return {
        base64: builder.toBase64(),
        plainText: builder.toPlainText()
    };
};

/**
 * ============================================================
 * GENERATOR STRUK PESANAN PELANGGAN / STOREFRONT & ADMIN
 * ============================================================
 */
export const buildOrderReceiptPayload = (order, config = null) => {
    const cfg = config || getPrinterConfig();
    const is80 = cfg.paperSize === '80mm';
    const cols = is80 ? 48 : 32;

    const builder = new EscPosBuilder(cols);
    builder.init();

    const storeName = cfg.headerText || appData.store?.name || 'TOKO PUTRI';
    const storeAddr = appData.store?.address || '';
    const storeWa   = appData.store?.wa || '';

    builder.align('center').bold(true).size('title').line(storeName.toUpperCase(), 'center');
    builder.size('normal').bold(false);

    if (storeAddr) builder.line(storeAddr, 'center');
    if (storeWa) builder.line(`WA: ${storeWa}`, 'center');
    builder.separator('-');

    const dateStr = order.dateString ? new Date(order.dateString).toLocaleString('id-ID', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    }) : new Date().toLocaleString('id-ID');

    builder.twoColumn(`Order: #${order.orderId}`, `Tgl: ${dateStr}`);
    builder.twoColumn(`Plg  : ${(order.customer?.name || 'Guest').substring(0, 14)}`, `Tipe: ${order.customer?.deliveryMethod === 'delivery' ? 'Kirim' : 'Ambil'}`);
    if (order.customer?.phone) {
        builder.line(`HP   : ${order.customer.phone}`, 'left');
    }
    if (order.customer?.note) {
        builder.line(`Cat  : ${order.customer.note}`, 'left');
    }
    builder.separator('-');

    // Items
    (order.items || []).forEach(item => {
        let vText = item.variantName ? ` (${item.variantName})` : '';
        let itemName = (item.name || 'Barang') + vText + (item.poTime ? ' [PO]' : '');

        builder.bold(true).line(itemName, 'left').bold(false);
        const effPrice = item.effectivePrice || item.price || 0;
        const qStr = `  ${formatQty(item.qty)} ${item.unit || 'pcs'} x ${fRp(effPrice)}`;
        const tStr = fRp(parseFloat(item.qty || 1) * effPrice);
        builder.twoColumn(qStr, tStr);

        if (item.poTime) {
            builder.line(`  * Estimasi PO: ${item.poTime}`, 'left');
        }
    });

    builder.separator('-');

    const subtotal = order.payment?.subtotal || 0;
    const shipping = order.payment?.shippingCost || 0;
    const grandTot = order.payment?.grandTotal || (subtotal + shipping);

    builder.twoColumn('Subtotal', fRp(subtotal));
    if (order.customer?.deliveryMethod === 'delivery') {
        builder.twoColumn('Ongkos Kirim', fRp(shipping));
    }
    if (order.payment?.productDiscount) {
        builder.twoColumn('Potongan Harga', `- ${fRp(order.payment.productDiscount)}`);
    }
    if (order.payment?.shippingDiscount) {
        builder.twoColumn('Potongan Ongkir', `- ${fRp(order.payment.shippingDiscount)}`);
    }

    builder.separator('=');
    builder.bold(true).size('total').twoColumn('TOTAL', fRp(grandTot), true).size('normal').bold(false);
    builder.separator('=');

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
    builder.line(cfg.footerText || 'Terima Kasih Atas Kunjungan Anda!', 'center');
    builder.feed(cfg.feedLines || 3);
    if (cfg.autoCut) builder.cut();

    return {
        base64: builder.toBase64(),
        plainText: builder.toPlainText()
    };
};

/**
 * ============================================================
 * GENERATOR STRUK UJI COBA CETAK (TEST PRINT)
 * ============================================================
 */
export const buildTestReceiptPayload = (config = null) => {
    const cfg = config || getPrinterConfig();
    const is80 = cfg.paperSize === '80mm';
    const cols = is80 ? 48 : 32;

    const builder = new EscPosBuilder(cols);
    builder.init();

    const storeName = cfg.headerText || appData.store?.name || 'TOKO PUTRI';
    const storeWa   = appData.store?.wa || '';

    builder.align('center').bold(true).size('title').line(storeName.toUpperCase(), 'center');
    builder.size('normal').bold(false);

    if (storeWa) builder.line(`WA: ${storeWa}`, 'center');
    builder.separator('-');

    builder.bold(true).line('*** UJI COBA CETAK STRUK RAWBT ***', 'center').bold(false);
    builder.separator('-');

    const dateStr = new Date().toLocaleString('id-ID', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });

    builder.line(`Tgl     : ${dateStr}`, 'left');
    builder.line(`Format  : Thermal ${is80 ? '80mm (48 Kolom)' : '58mm (32 Kolom)'}`, 'left');
    builder.line(`Driver  : RAWBT FREE PRINT SERVICE`, 'left');
    builder.line(`Status  : KONEKSI BERHASIL 100%`, 'left');
    builder.separator('-');

    builder.bold(true).twoColumn('ITEM UJI COBA', 'HARGA').bold(false);
    builder.twoColumn('1x Kertas Kasir Thermal', 'Rp 15.000');
    builder.twoColumn('2x Tes Cetak RawBT POS', 'Rp 25.000');
    builder.separator('-');
    builder.bold(true).size('total').twoColumn('TOTAL TES', 'Rp 40.000', true).size('normal').bold(false);
    builder.separator('=');

    if (cfg.showPoints) {
        builder.twoColumn('Simulasi Poin Member', '+10 Poin');
        builder.separator('-');
    }

    if (cfg.showBarcode) {
        builder.align('center');
        builder.line(`*TEST-RAWBT-${Date.now().toString().slice(-6)}*`, 'center');
        builder.line('(BARCODE TEST BERHASIL)', 'center');
        builder.separator('-');
    }

    builder.line(cfg.footerText || 'Terima kasih atas kunjungan Anda!', 'center');
    builder.line('Printer siap untuk transaksi kasir Toko Putri.', 'center');

    builder.feed(cfg.feedLines || 3);
    if (cfg.autoCut) builder.cut();

    return {
        base64: builder.toBase64(),
        plainText: builder.toPlainText()
    };
};

/**
 * ============================================================
 * FUNGSI EKSEKUSI CETAK LANGSUNG (DIRECT PRINT)
 * Menjalankan pencetakan seketika ke printer tanpa popup tambahan
 * ============================================================
 */

/**
 * Cetak Struk POS Kasir Seketika (Direct Print)
 */
export const printPOSReceiptDirect = (tx) => {
    if (!tx) {
        showToast('Data transaksi kasir tidak ditemukan.', 'warning');
        return;
    }
    const cfg = getPrinterConfig();
    const payload = buildPOSReceiptPayload(tx, cfg);

    // Hapus modal sukses atau preview jika sedang terbuka
    document.getElementById('pos-success-modal')?.remove();
    document.getElementById('pos-receipt-fallback-modal')?.remove();

    sendToRawBT(payload.base64, payload.plainText);
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

    document.getElementById('pos-shift-receipt-modal')?.remove();
    sendToRawBT(payload.base64, payload.plainText);
};

/**
 * Cetak Struk Pesanan Pelanggan Seketika (Direct Print)
 */
export const printCustomerReceiptDirect = (orderId = null) => {
    const targetId = orderId || cVOrd;
    let order = (gOrds || []).find(x => x.orderId === targetId);
    if (!order && Array.isArray(myOrders)) {
        order = myOrders.find(x => x.orderId === targetId);
    }
    if (!order && window.lastPrintedOrder && window.lastPrintedOrder.orderId === targetId) {
        order = window.lastPrintedOrder;
    }
    if (!order) {
        showToast('Data pesanan tidak ditemukan.', 'warning');
        return;
    }

    const cfg = getPrinterConfig();
    const payload = buildOrderReceiptPayload(order, cfg);

    if (typeof window.closeReceiptPreviewModal === 'function') {
        window.closeReceiptPreviewModal();
    }

    sendToRawBT(payload.base64, payload.plainText);
};

/**
 * Uji Coba Cetak RawBT Seketika
 */
export const executeRawBTTestPrint = () => {
    const cfg = getPrinterConfig();
    const payload = buildTestReceiptPayload(cfg);
    sendToRawBT(payload.base64, payload.plainText);
};

// ─── Expose Global ke window ──────────────────────────────────
window.EscPosBuilder              = EscPosBuilder;
window.sendToRawBT                = sendToRawBT;
window.openRawBTApp               = openRawBTApp;
window.buildPOSReceiptPayload     = buildPOSReceiptPayload;
window.buildShiftReceiptPayload   = buildShiftReceiptPayload;
window.buildOrderReceiptPayload   = buildOrderReceiptPayload;
window.buildTestReceiptPayload    = buildTestReceiptPayload;
window.printPOSReceiptDirect      = printPOSReceiptDirect;
window.printShiftSettlementDirect = printShiftSettlementDirect;
window.printCustomerReceiptDirect = printCustomerReceiptDirect;
window.executeRawBTTestPrint      = executeRawBTTestPrint;
