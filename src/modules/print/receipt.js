/**
 * ============================================================
 * MODUL CETAK STRUK THERMAL (58mm / 80mm ESC/POS)
 * Mengatur preview struk pesanan dan pencetakan printer thermal.
 * ============================================================
 */

import { appData, gOrds, cVOrd, setCVOrd, myOrders } from '../../core/state.js';
import { el, show, hide, setH, esc } from '../../core/utils.js';
import { getPrinterConfig, getPaperCols } from './printer-settings.js';
import { renderThermalDOMAndPrint, formatCompactDate, wrapWords } from './rawbt.js';

export const openReceiptPreview = (orderId = null) => {
    if (orderId && typeof setCVOrd === 'function') {
        setCVOrd(orderId);
    }
    const targetId = orderId || cVOrd;
    let o = (gOrds || []).find(x => x.orderId === targetId); 
    if (!o && Array.isArray(myOrders)) {
        o = myOrders.find(x => x.orderId === targetId);
    }
    if (!o && window.lastPrintedOrder && window.lastPrintedOrder.orderId === targetId) {
        o = window.lastPrintedOrder;
    }
    if (!o) return;
    window.lastPrintedOrder = o;
    
    const config = typeof getPrinterConfig === 'function' ? getPrinterConfig() : { paperSize: '58mm', showPoints: true, showBarcode: true };
    const cols = getPaperCols(config.paperSize);
    const is80 = cols >= 40;

    const d = formatCompactDate(o.dateString, is80);
    const sN = config.headerText || appData.store.name || "Toko Putri";
    const sW = appData.store.wa || "";
    
    const pL = (l, r, len = cols) => { 
        const left = String(l || '');
        const right = String(r || '');
        const p = len - left.length - right.length; 
        return left + (p > 0 ? ' '.repeat(p) : ' ') + right; 
    };
    
    let h = `<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${esc(sN)}</div>`;
    if (sW) h += `<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${esc(sW)}</div>`;
    h += `<div class="border-b border-dashed border-black my-2"></div>`;
    h += `<div style="white-space:pre;font-family:monospace;">${pL(`Order: #${o.orderId}`, d, cols)}</div>`;
    h += `<div style="white-space:pre;font-family:monospace;">${pL(`Plg  : ${esc(o.customer?.name || 'Guest').substring(0, is80 ? 18 : 10)}`, `Tipe: ${o.customer?.deliveryMethod === 'delivery' ? 'Kirim' : 'Ambil'}`, cols)}</div>`;
    if (o.customer?.phone) {
        h += `<div style="white-space:pre;font-family:monospace;">HP   : ${esc(o.customer.phone)}</div>`;
    }
    h += `<div class="border-b border-dashed border-black my-2"></div>`;
    if (o.customer?.note) { 
        h += `<div style="white-space:pre-wrap;word-break:break-word;">Cat: ${esc(o.customer.note)}</div><div class="border-b border-dashed border-black my-2"></div>`; 
    }
    
    // Daftar item barang
    o.items.forEach(i => {
        let vText = i.variantName ? ` (${esc(i.variantName)}${i.colorCode ? ' ' + esc(i.colorCode) : ''})` : '';
        const n = esc(i.name) + vText + (i.poTime ? ` [PO]` : '');
        const effPrice = i.effectivePrice || i.price || 0;
        const q = `  ${parseFloat(i.qty)} ${esc(i.unit || 'pcs')} x ${Math.round(effPrice).toLocaleString('id-ID')}`;
        const t = (parseFloat(i.qty) * effPrice).toLocaleString('id-ID');
        h += `<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;">${n}</div><div style="white-space:pre;font-family:monospace;font-size:11px;">${pL(q, t, cols)}</div>`;
        if (i.poTime) {
            h += `<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">  * Estimasi PO: ${esc(i.poTime)}</div>`;
        }
    });
    
    h += `<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-family:monospace;">${pL('Subtotal', (o.payment?.subtotal || 0).toLocaleString('id-ID'), cols)}</div>`;
    if (o.customer?.deliveryMethod === 'delivery') h += `<div style="white-space:pre;font-family:monospace;">${pL('Ongkir', (o.payment?.shippingCost || 0).toLocaleString('id-ID'), cols)}</div>`;
    if (o.payment?.shippingDiscount) h += `<div style="white-space:pre;font-family:monospace;">${pL('Pot.Ongkir', `-${o.payment.shippingDiscount.toLocaleString('id-ID')}`, cols)}</div>`;
    if (o.payment?.productDiscount) h += `<div style="white-space:pre;font-family:monospace;">${pL('Pot.Harga', `-${o.payment.productDiscount.toLocaleString('id-ID')}`, cols)}</div>`;
    if (o.payment?.ppnAmount && o.payment.ppnAmount > 0) {
        const isInc = o.payment.ppnType === 'inclusive';
        const ppnRate = o.payment.ppnRate || 11;
        const ppnAmt = o.payment.ppnAmount || 0;
        h += `<div style="white-space:pre;font-family:monospace;">${pL(`${isInc ? 'Inc. PPN' : 'PPN'} (${ppnRate}%)`, (isInc ? '' : '+') + ppnAmt.toLocaleString('id-ID'), cols)}</div>`;
    }
    h += `<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-family:monospace;font-weight:bold;font-size:12px;">${pL('TOTAL', 'Rp ' + (o.payment?.grandTotal || 0).toLocaleString('id-ID'), cols)}</div><div style="white-space:pre;font-family:monospace;">${pL('Metode Bayar', String(o.payment?.method || 'Tunai').toUpperCase(), cols)}</div>`;
    
    // Informasi loyalty poin & reward
    if (config.showPoints && (o.pointsEarned > 0 || o.finalMemberPoints !== undefined)) {
        h += `<div class="border-b border-dashed border-black my-2"></div>`;
        if (o.pointsEarned > 0) h += `<div style="white-space:pre;font-family:monospace;">${pL('Poin Didapat', '+' + o.pointsEarned + ' Poin', cols)}</div>`;
        if (o.finalMemberPoints !== undefined && o.finalMemberPoints !== null) h += `<div style="white-space:pre;font-family:monospace;font-weight:bold;">${pL('Saldo Poin', String(o.finalMemberPoints) + ' Poin', cols)}</div>`;
        if (o.claimedReward) h += `<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;margin-top:2px;">HADIAH: ${esc(o.claimedReward.name)}</div>`;
    }
    
    const hasPO = o.items.some(i => i.poTime && i.poTime !== '');
    if (hasPO) {
        h += `<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>`;
    }

    // Barcode kasir
    if (config.showBarcode) {
        h += `<div class="border-b border-dashed border-black my-2"></div><div style="text-align:center;margin:4px 0;"><div style="font-family:monospace;letter-spacing:2px;font-size:11px;font-weight:bold;">*ORDER-${esc(o.orderId)}*</div><div style="font-size:8px;color:#666;">SCAN DI KASIR</div></div>`;
    }

    h += `<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${esc(config.footerText || 'Terima Kasih Atas Kunjungan Anda')}</div><div class="border-b border-dashed border-black my-2"></div><div style="height:15px;"></div>`;
    
    setH('receipt-paper-content', h);

    // Sesuaikan lebar kertas pada kotak modal
    const paperEl = el('receipt-paper-content');
    if (paperEl) paperEl.style.width = is80 ? '340px' : '260px';
    const boxEl = el('receipt-preview-modal-box');
    if (boxEl) {
        boxEl.classList.remove('max-w-[320px]', 'max-w-[400px]');
        boxEl.classList.add(is80 ? 'max-w-[400px]' : 'max-w-[320px]');
    }

    const mRec = el('receipt-preview-modal');
    if (mRec && mRec.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('receipt');
    }
    show('receipt-preview-modal');
    setTimeout(() => { 
        if (el('receipt-preview-modal')) el('receipt-preview-modal').classList.remove('opacity-0'); 
        if (el('receipt-preview-modal-box')) el('receipt-preview-modal-box').classList.remove('scale-95'); 
    }, 10);
};

export const closeReceiptPreviewModal = (fH = false) => {
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('receipt', fH, () => {
            if (el('receipt-preview-modal')) el('receipt-preview-modal').classList.add('opacity-0');
            if (el('receipt-preview-modal-box')) el('receipt-preview-modal-box').classList.add('scale-95');
            setTimeout(() => hide('receipt-preview-modal'), 300);
        });
    } else {
        if (el('receipt-preview-modal')) el('receipt-preview-modal').classList.add('opacity-0');
        if (el('receipt-preview-modal-box')) el('receipt-preview-modal-box').classList.add('scale-95');
        setTimeout(() => hide('receipt-preview-modal'), 300);
    }
};

export const executePrintReceipt = () => { 
    const targetId = cVOrd || (window.lastPrintedOrder ? window.lastPrintedOrder.orderId : null);
    if (typeof window.printCustomerReceiptDirect === 'function') {
        window.printCustomerReceiptDirect(targetId);
        return;
    }

    const o = (gOrds || []).find(x => x.orderId === cVOrd) || (Array.isArray(myOrders) ? myOrders.find(x => x.orderId === cVOrd) : null) || window.lastPrintedOrder; 
    if (!o) return; 
    const p = el('receipt-paper-content') ? el('receipt-paper-content').innerHTML : ''; 
    renderThermalDOMAndPrint(p);
};

// ─── Expose ke window untuk kompatibilitas onclick di HTML ──────
window.openReceiptPreview = openReceiptPreview;
window.openCustomerReceiptPreview = (orderId, forceDirect = false) => {
    const config = typeof getPrinterConfig === 'function' ? getPrinterConfig() : {};
    if (forceDirect || config.directPrint) {
        if (typeof window.printCustomerReceiptDirect === 'function') {
            window.printCustomerReceiptDirect(orderId);
            return;
        }
    }
    openReceiptPreview(orderId);
};
window.closeReceiptPreviewModal = closeReceiptPreviewModal;
window.executePrintReceipt = executePrintReceipt;
window.checkProPrint = () => { openReceiptPreview(); };


