/**
 * ============================================================
 * MODUL CETAK STRUK THERMAL (58mm / 80mm ESC/POS)
 * Mengatur preview struk pesanan dan pencetakan printer thermal.
 * ============================================================
 */

import { appData, gOrds, cVOrd } from '../../core/state.js';
import { el, show, hide, setH, esc } from '../../core/utils.js';
import { getPrinterConfig } from './printer-settings.js';

export const openReceiptPreview = () => {
    const o = gOrds.find(x => x.orderId === cVOrd); 
    if (!o) return;
    
    const config = typeof getPrinterConfig === 'function' ? getPrinterConfig() : { paperSize: '58mm', showPoints: true, showBarcode: true };
    const is80 = config.paperSize === '80mm';
    const cols = is80 ? 48 : 32;

    const d = o.dateString ? new Date(o.dateString).toLocaleString('id-ID', {
        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    }) : '';
    const sN = config.headerText || appData.store.name || "Toko Putri";
    const sW = appData.store.wa || "";
    
    const pL = (l, r, len = cols) => { 
        const p = len - l.length - r.length; 
        return l + (p > 0 ? ' '.repeat(p) : ' ') + r; 
    };
    
    let h = `<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${esc(sN)}</div>`;
    if (sW) h += `<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${esc(sW)}</div>`;
    h += `<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">Order: #${o.orderId}</div><div style="white-space:pre;">Tgl  : ${d}</div><div style="white-space:pre;">Plg  : ${esc(o.customer?.name || 'Guest').substring(0, cols - 10)}</div><div style="white-space:pre;">Tipe : ${o.customer?.deliveryMethod === 'delivery' ? 'Dikirim' : 'Ambil di Toko'}</div><div class="border-b border-dashed border-black my-2"></div>`;
    if (o.customer?.note) { 
        h += `<div style="white-space:pre-wrap;word-break:break-all;">Cat: ${esc(o.customer.note)}</div><div class="border-b border-dashed border-black my-2"></div>`; 
    }
    
    // Daftar item barang
    o.items.forEach(i => {
        let vText = i.variantName ? ` (${esc(i.variantName)}${i.colorCode ? ' ' + esc(i.colorCode) : ''})` : '';
        const n = (esc(i.name) + vText + (i.poTime ? ` [PO]` : '')).substring(0, cols);
        const q = `${parseFloat(i.qty)} ${esc(i.unit || 'pcs')} x ${i.effectivePrice.toLocaleString('id-ID')}`;
        const t = (parseFloat(i.qty) * i.effectivePrice).toLocaleString('id-ID');
        h += `<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${n}</div><div style="white-space:pre;font-size:11px;">${pL(q, t, cols)}</div>`;
        if (i.poTime) {
            h += `<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${esc(i.poTime)}</div>`;
        }
    });
    
    h += `<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">${pL('Subtotal', (o.payment?.subtotal || 0).toLocaleString('id-ID'), cols)}</div>`;
    if (o.customer?.deliveryMethod === 'delivery') h += `<div style="white-space:pre;">${pL('Ongkir', (o.payment?.shippingCost || 0).toLocaleString('id-ID'), cols)}</div>`;
    if (o.payment?.shippingDiscount) h += `<div style="white-space:pre;">${pL('Pot.Ongkir', `-${o.payment.shippingDiscount.toLocaleString('id-ID')}`, cols)}</div>`;
    if (o.payment?.productDiscount) h += `<div style="white-space:pre;">${pL('Pot.Harga', `-${o.payment.productDiscount.toLocaleString('id-ID')}`, cols)}</div>`;
    if (o.payment?.ppnAmount && o.payment.ppnAmount > 0) {
        const isInc = o.payment.ppnType === 'inclusive';
        const ppnRate = o.payment.ppnRate || 11;
        const ppnAmt = o.payment.ppnAmount || 0;
        const baseBeforeTax = (o.payment.subtotal || 0) - (o.payment.productDiscount || 0) + (o.payment.shippingCost || 0) - (o.payment.shippingDiscount || 0);
        const dppAmt = o.payment.dppAmount || (isInc ? Math.round((baseBeforeTax * 100) / (100 + ppnRate)) : Math.max(0, baseBeforeTax));

        h += `<div style="white-space:pre;">${pL('DPP', dppAmt.toLocaleString('id-ID'), cols)}</div>`;
        h += `<div style="white-space:pre;">${pL(`${isInc ? 'Inc. PPN' : 'PPN'} (${ppnRate}%)`, (isInc ? '' : '+') + ppnAmt.toLocaleString('id-ID'), cols)}</div>`;
    }
    h += `<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-weight:bold;font-size:12px;">${pL('TOTAL', 'Rp ' + (o.payment?.grandTotal || 0).toLocaleString('id-ID'), cols)}</div><div style="white-space:pre;">${pL('Bayar:', String(o.payment?.method || '').toUpperCase(), cols)}</div>`;
    
    // Informasi loyalty poin & reward
    if (config.showPoints && (o.pointsEarned > 0 || o.finalMemberPoints !== undefined)) {
        h += `<div class="border-b border-dashed border-black my-2"></div>`;
        if (o.pointsEarned > 0) h += `<div style="white-space:pre;">${pL('Poin Didapat:', '+' + o.pointsEarned, cols)}</div>`;
        if (o.finalMemberPoints !== undefined && o.finalMemberPoints !== null) h += `<div style="white-space:pre;font-weight:bold;">${pL('Saldo Poin:', String(o.finalMemberPoints), cols)}</div>`;
        if (o.claimedReward) h += `<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;margin-top:2px;">HADIAH: ${esc(o.claimedReward.name)}</div><div style="white-space:pre;font-size:10px;">(${o.claimedReward.status === 'ready' ? 'Kirim bersama pesanan' : o.claimedReward.status === 'waiting_stock' ? 'Stok kosong-ditunda' : 'Menunggu konfirmasi'})</div>`;
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
    if (paperEl) paperEl.style.width = is80 ? '330px' : '260px';
    const boxEl = el('receipt-preview-modal-box');
    if (boxEl) {
        boxEl.classList.remove('max-w-[320px]', 'max-w-[390px]');
        boxEl.classList.add(is80 ? 'max-w-[390px]' : 'max-w-[320px]');
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
    const o = gOrds.find(x => x.orderId === cVOrd); 
    if (!o) return; 
    const p = el('receipt-paper-content') ? el('receipt-paper-content').innerHTML : ''; 
    let t = el('thermal-print-section'); 
    if (!t) {
        t = document.createElement('div');
        t.id = 'thermal-print-section';
        document.body.appendChild(t);
    }
    const config = typeof getPrinterConfig === 'function' ? getPrinterConfig() : { paperSize: '58mm', deviceType: 'system' };
    const is80 = config.paperSize === '80mm';
    t.innerHTML = `<div style="width:${is80 ? '80mm' : '58mm'};font-family:'Courier New',Courier,monospace;font-size:11px;line-height:1.2;color:#000;background:#fff;padding:4px;">${p}</div>`; 
    
    if (config.deviceType === 'rawbt' && window.AndroidNativeApp && typeof window.AndroidNativeApp.printRawBT === 'function') {
        const rawHtml = t.innerText;
        const b64 = btoa(unescape(encodeURIComponent(rawHtml)));
        window.AndroidNativeApp.printRawBT(b64);
    } else if (window.AndroidNativeApp && typeof window.AndroidNativeApp.print === 'function') {
        window.AndroidNativeApp.print();
    } else {
        window.print(); 
    }
};

// ─── Expose ke window untuk kompatibilitas onclick di HTML ──────
window.openReceiptPreview = openReceiptPreview;
window.closeReceiptPreviewModal = closeReceiptPreviewModal;
window.executePrintReceipt = executePrintReceipt;
window.checkProPrint = () => { openReceiptPreview(); };

