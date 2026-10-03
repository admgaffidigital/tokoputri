/**
 * ============================================================
 * MODUL CETAK STRUK THERMAL (58mm / 80mm ESC/POS)
 * Mengatur preview struk pesanan dan pencetakan printer thermal.
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { appData, gOrds, cVOrd, setCVOrd, myOrders } from '../../core/state.js';
import { el, show, hide, setH, esc, openModalAnim, closeModalAnim } from '../../core/utils.js';
import { getPrinterConfig, getPaperCols } from './printer-settings.js';
import { renderThermalDOMAndPrint, formatCompactDate, wrapWords } from './rawbt.js';

export const openReceiptPreview = async (orderId = null) => {
    if (orderId && typeof setCVOrd === 'function') {
        setCVOrd(orderId);
    }
    const rawTarget = (typeof orderId === 'string' ? orderId : (orderId && orderId.orderId ? orderId.orderId : null)) || cVOrd;
    const targetId = String(rawTarget || '').replace(/^#/, '').trim();

    const isOrderMatch = (cand) => {
        if (!cand) return false;
        const cid = String(cand.orderId || '').replace(/^#/, '').trim();
        if (!targetId) return true;
        return cid === targetId || cid.endsWith(targetId) || targetId.endsWith(cid);
    };

    let o = null;
    if (typeof orderId === 'object' && orderId !== null && (Array.isArray(orderId.items) && orderId.items.length > 0)) {
        o = orderId;
    }
    if ((!o || !o.items || o.items.length === 0) && isOrderMatch(window.currentCustomerOrder)) {
        o = window.currentCustomerOrder;
    }
    if ((!o || !o.items || o.items.length === 0) && isOrderMatch(window.lastPrintedOrder)) {
        o = window.lastPrintedOrder;
    }
    if ((!o || !o.items || o.items.length === 0) && (gOrds || []).length > 0) {
        const found = gOrds.find(isOrderMatch);
        if (found && Array.isArray(found.items) && found.items.length > 0) o = found;
    }
    if ((!o || !o.items || o.items.length === 0) && Array.isArray(myOrders)) {
        const mO = myOrders.find(isOrderMatch);
        if (mO && Array.isArray(mO.items) && mO.items.length > 0) o = mO;
    }

    // Jika data belum memiliki rincian items, ambil langsung dari database Firestore freshmart_orders!
    if ((!o || !o.items || o.items.length === 0) && targetId) {
        try {
            const _db = (typeof db !== 'undefined' && db) ? db : window.db;
            if (_db) {
                let snap = await _db.collection("freshmart_orders").doc(targetId).get();
                if (!snap.exists && !targetId.startsWith('ORD-')) {
                    const snap2 = await _db.collection("freshmart_orders").doc('ORD-' + targetId).get();
                    if (snap2.exists) snap = snap2;
                }
                if (snap && snap.exists) {
                    o = snap.data();
                    o.orderId = o.orderId || snap.id;
                    window.currentCustomerOrder = o;
                    window.lastPrintedOrder = o;

                    if (Array.isArray(myOrders)) {
                        const idx = myOrders.findIndex(isOrderMatch);
                        if (idx !== -1) {
                            myOrders[idx].items = o.items || [];
                            myOrders[idx].payment = o.payment || {};
                            myOrders[idx].customer = o.customer || {};
                            try { localStorage.setItem('freshmart_my_orders', JSON.stringify(myOrders)); } catch(e) {}
                        }
                    }
                }
            }
        } catch (errF) {
            console.warn('[Receipt] Gagal fetch order detail from Firestore:', errF);
        }
    }

    // Jika masih null, baru fallback ke ringkasan myOrders
    if (!o && Array.isArray(myOrders)) {
        o = myOrders.find(isOrderMatch);
    }
    if (!o) return;
    window.lastPrintedOrder = o;
    
    const config = typeof getPrinterConfig === 'function' ? getPrinterConfig() : { paperSize: '58mm', showPoints: true, showBarcode: true };
    const cols = getPaperCols(config.paperSize);
    const is80 = cols >= 40;

    const d = formatCompactDate(o.dateString || o.date || Date.now(), is80);
    const sN = config.headerText || appData.store.name || "Toko Putri";
    const sW = appData.store.wa || "";
    
    const pL = (l, r, len = cols) => { 
        const left = String(l || '');
        const right = String(r || '');
        const p = len - left.length - right.length; 
        return left + (p > 0 ? ' '.repeat(p) : ' ') + right; 
    };
    
    const orderItems = Array.isArray(o.items) ? o.items : (Array.isArray(o.cart) ? o.cart : []);
    const calcSubtotal = orderItems.reduce((acc, i) => acc + (parseFloat(i.qty || 1) * (parseFloat(i.effectivePrice || i.price) || 0)), 0);
    const subtotal = (o.payment && o.payment.subtotal !== undefined) ? o.payment.subtotal : (calcSubtotal || o.total || 0);
    const shipping = (o.payment && o.payment.shippingCost !== undefined) ? o.payment.shippingCost : 0;
    const grandTotal = (o.payment && o.payment.grandTotal !== undefined) ? o.payment.grandTotal : (o.total || (subtotal + shipping));
    const payMethod = String(o.payment?.method || o.method || 'Tunai').toUpperCase();
    const custName = o.customer?.name || o.customerName || 'Guest';
    const isDelivery = o.customer?.deliveryMethod === 'delivery' || o.deliveryMethod === 'delivery';

    let h = `<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${esc(sN)}</div>`;
    if (sW) h += `<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${esc(sW)}</div>`;
    const npwpStr = o.payment?.taxNpwp || appData.store?.taxNpwp;
    if (npwpStr) h += `<div class="text-center" style="font-size:10px;font-family:monospace;margin-bottom:4px;">NPWP: ${esc(npwpStr)}</div>`;
    h += `<div class="border-b border-dashed border-black my-2"></div>`;
    h += `<div style="white-space:pre;font-family:monospace;">${pL(`Order: #${o.orderId}`, d, cols)}</div>`;
    h += `<div style="white-space:pre;font-family:monospace;">${pL(`Plg  : ${esc(custName).substring(0, is80 ? 18 : 10)}`, `Tipe: ${isDelivery ? 'Kirim' : 'Ambil'}`, cols)}</div>`;
    if (o.customer?.phone || o.customerPhone) {
        h += `<div style="white-space:pre;font-family:monospace;">HP   : ${esc(o.customer?.phone || o.customerPhone)}</div>`;
    }
    h += `<div class="border-b border-dashed border-black my-2"></div>`;
    if (o.customer?.note) { 
        h += `<div style="white-space:pre-wrap;word-break:break-word;">Cat: ${esc(o.customer.note)}</div><div class="border-b border-dashed border-black my-2"></div>`; 
    }
    
    // Daftar item barang (defensive guard untuk o.items / o.cart)
    if (orderItems.length > 0) {
        orderItems.forEach(i => {
            let vText = i.variantName ? ` (${esc(i.variantName)}${i.colorCode ? ' ' + esc(i.colorCode) : ''})` : '';
            const n = esc(i.name || 'Barang') + vText + (i.poTime ? ` [PO]` : '');
            const effPrice = i.effectivePrice || i.price || 0;
            const q = `  ${parseFloat(i.qty || 1)} ${esc(i.unit || 'pcs')} x ${Math.round(effPrice).toLocaleString('id-ID')}`;
            const t = (parseFloat(i.qty || 1) * effPrice).toLocaleString('id-ID');
            h += `<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;">${n}</div><div style="white-space:pre;font-family:monospace;font-size:11px;">${pL(q, t, cols)}</div>`;
            if (i.poTime) {
                h += `<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">  * Estimasi PO: ${esc(i.poTime)}</div>`;
            }
        });
    } else {
        h += `<div style="white-space:pre;font-style:italic;color:#64748b;text-align:center;padding:4px 0;">- Tidak ada rincian barang -</div>`;
    }
    
    h += `<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-family:monospace;">${pL('Subtotal', subtotal.toLocaleString('id-ID'), cols)}</div>`;
    if (isDelivery) h += `<div style="white-space:pre;font-family:monospace;">${pL('Ongkir', shipping.toLocaleString('id-ID'), cols)}</div>`;
    if (o.payment?.shippingDiscount) h += `<div style="white-space:pre;font-family:monospace;">${pL('Pot.Ongkir', `-${o.payment.shippingDiscount.toLocaleString('id-ID')}`, cols)}</div>`;
    if (o.payment?.productDiscount) h += `<div style="white-space:pre;font-family:monospace;">${pL('Pot.Harga', `-${o.payment.productDiscount.toLocaleString('id-ID')}`, cols)}</div>`;
    const showPpn = (o.payment?.ppnEnabled || o.payment?.ppnShowZero || (o.payment?.ppnRate === 0) || (o.payment?.ppnAmount && o.payment.ppnAmount > 0)) && (appData.store?.ppnEnabled || o.payment?.ppnEnabled);
    if (showPpn) {
        const isInc = o.payment?.ppnType === 'inclusive';
        const ppnRate = o.payment?.ppnRate !== undefined ? o.payment.ppnRate : (appData.store?.ppnRate || 0);
        const ppnAmt = o.payment?.ppnAmount || 0;
        const ppnLbl = o.payment?.ppnLabel || `${isInc ? 'Inc. PPN' : 'PPN'} (${ppnRate}%)`;
        const valStr = ppnAmt > 0 ? `${isInc ? '' : '+'}${ppnAmt.toLocaleString('id-ID')}` : '0';
        h += `<div style="white-space:pre;font-family:monospace;">${pL(ppnLbl, valStr, cols)}</div>`;
    }
    h += `<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-family:monospace;font-weight:bold;font-size:12px;">${pL('TOTAL', 'Rp ' + grandTotal.toLocaleString('id-ID'), cols)}</div><div style="white-space:pre;font-family:monospace;">${pL('Metode Bayar', payMethod, cols)}</div>`;
    
    // Informasi loyalty poin & reward
    if (config.showPoints && (o.pointsEarned > 0 || o.finalMemberPoints !== undefined)) {
        h += `<div class="border-b border-dashed border-black my-2"></div>`;
        if (o.pointsEarned > 0) h += `<div style="white-space:pre;font-family:monospace;">${pL('Poin Didapat', '+' + o.pointsEarned + ' Poin', cols)}</div>`;
        if (o.finalMemberPoints !== undefined && o.finalMemberPoints !== null) h += `<div style="white-space:pre;font-family:monospace;font-weight:bold;">${pL('Saldo Poin', String(o.finalMemberPoints) + ' Poin', cols)}</div>`;
        if (o.claimedReward) h += `<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;margin-top:2px;">HADIAH: ${esc(o.claimedReward.name)}</div>`;
    }
    
    const hasPO = orderItems.some(i => i && i.poTime && i.poTime !== '');
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
    const bRec = el('receipt-preview-modal-box');
    if (mRec && mRec.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('receipt');
    }
    openModalAnim(mRec, bRec);
};

export const closeReceiptPreviewModal = (fH = false) => {
    const mRec = el('receipt-preview-modal');
    const bRec = el('receipt-preview-modal-box');
    if (!mRec) return;
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('receipt', fH, () => {
            closeModalAnim(mRec, bRec);
        });
    } else {
        closeModalAnim(mRec, bRec);
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
window.openCustomerReceiptPreview = (orderId) => {
    // Selalu buka preview struk terlebih dahulu sebelum cetak
    openReceiptPreview(orderId);
};
window.closeReceiptPreviewModal = closeReceiptPreviewModal;
window.executePrintReceipt = executePrintReceipt;
window.checkProPrint = () => { openReceiptPreview(); };


