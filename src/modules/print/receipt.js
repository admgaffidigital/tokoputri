/**
 * ============================================================
 * MODUL CETAK STRUK THERMAL (58mm / 80mm ESC/POS)
 * Mengatur preview struk pesanan dan pencetakan printer thermal.
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { appData, gOrds, cVOrd, setCVOrd, myOrders } from '../../core/state.js';
import { el, show, hide, setH, esc, openModalAnim, closeModalAnim, extractOrderTaxInfo } from '../../core/utils.js';
import { getPrinterConfig, getPaperCols } from './printer-settings.js';
import { renderThermalDOMAndPrint, formatCompactDate, wrapWords } from './rawbt.js';

export const openReceiptPreview = async (orderId = null) => {
    if (orderId && typeof setCVOrd === 'function' && typeof orderId === 'string') {
        setCVOrd(orderId);
    }
    // Satu tampilan preview universal untuk seluruh sistem (konsisten dengan tema)
    if (typeof window.printCustomerReceiptDirect === 'function') {
        return window.printCustomerReceiptDirect(orderId);
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
    const sAddr = config.storeAddress !== undefined && config.storeAddress !== '' ? config.storeAddress : (appData.store.address || "");
    const sW = config.storePhone !== undefined && config.storePhone !== '' ? config.storePhone : (appData.store.wa || "");
    
    const pL = (l, r) => { 
        return `<div class="utp-row"><div class="utp-col-left">${esc(l)}</div><div class="utp-col-right">${esc(r)}</div></div>`;
    };
    
    const orderItems = Array.isArray(o.items) ? o.items : (Array.isArray(o.cart) ? o.cart : []);
    const taxInfo = extractOrderTaxInfo(o);
    const subtotal = taxInfo.subtotal;
    const shipping = taxInfo.shipping;
    const grandTotal = taxInfo.grandTotal;
    const payMethod = String(o.payment?.method || o.method || 'Tunai').toUpperCase();
    const custName = o.customer?.name || o.customerName || 'Guest';
    const isDelivery = o.customer?.deliveryMethod === 'delivery' || o.deliveryMethod === 'delivery';

    let h = `<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${esc(sN)}</div>`;
    if (config.showAddress !== false && sAddr) h += `<div class="text-center" style="font-size:10px;color:#475569;margin-bottom:2px;">${esc(sAddr)}</div>`;
    if (config.showPhone !== false && sW) h += `<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${esc(sW)}</div>`;
    const npwpStr = o.payment?.taxNpwp || appData.store?.taxNpwp;
    if (config.showNpwp !== false && npwpStr) h += `<div class="text-center" style="font-size:10px;font-family:monospace;margin-bottom:4px;">NPWP: ${esc(npwpStr)}</div>`;
    h += `<div class="utp-separator"></div>`;
    h += pL(`Order: #${o.orderId}`, d);
    h += pL(`Plg  : ${esc(custName).substring(0, is80 ? 18 : 10)}`, `Tipe: ${isDelivery ? 'Kirim' : 'Ambil'}`);
    if (o.customer?.phone || o.customerPhone) {
        h += `<div class="utp-line">HP   : ${esc(o.customer?.phone || o.customerPhone)}</div>`;
    }
    h += `<div class="utp-separator"></div>`;
    if (o.customer?.note) { 
        h += `<div style="white-space:pre-wrap;word-break:break-word;">Cat: ${esc(o.customer.note)}</div><div class="utp-separator"></div>`; 
    }
    
    // Daftar item barang (defensive guard untuk o.items / o.cart)
    if (orderItems.length > 0) {
        orderItems.forEach(i => {
            let vText = i.variantName ? ` (${esc(i.variantName)}${i.colorCode ? ' ' + esc(i.colorCode) : ''})` : '';
            const n = esc(i.name || 'Barang') + vText + (i.poTime ? ` [PO]` : '');
            const effPrice = i.effectivePrice || i.price || 0;
            const q = `  ${parseFloat(i.qty || 1)} ${esc(i.unit || 'pcs')} x ${Math.round(effPrice).toLocaleString('id-ID')}`;
            const t = (parseFloat(i.qty || 1) * effPrice).toLocaleString('id-ID');
            h += `<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;">${n}</div>${pL(q, t)}`;
            if (i.poTime) {
                h += `<div style="font-size:10px;font-style:italic;color:#4b5563;">  * Estimasi PO: ${esc(i.poTime)}</div>`;
            }
        });
    } else {
        h += `<div style="font-style:italic;color:#64748b;text-align:center;padding:4px 0;">- Tidak ada rincian barang -</div>`;
    }
    
    h += `<div class="utp-separator"></div>${pL('Subtotal', subtotal.toLocaleString('id-ID'))}`;
    if (isDelivery) h += pL('Ongkir', shipping.toLocaleString('id-ID'));
    if (taxInfo.shippingDiscount) h += pL('Pot.Ongkir', `-${taxInfo.shippingDiscount.toLocaleString('id-ID')}`);
    if (taxInfo.productDiscount) h += pL('Pot.Harga', `-${taxInfo.productDiscount.toLocaleString('id-ID')}`);
    if (taxInfo.pointDiscount > 0) h += pL('Pot.Poin', `-${taxInfo.pointDiscount.toLocaleString('id-ID')}`);
    if (taxInfo.paylaterAdminFee > 0) h += pL('Biaya Admin', `+${taxInfo.paylaterAdminFee.toLocaleString('id-ID')}`);
    if (taxInfo.paylaterServiceFee > 0) h += pL('Biaya Layanan', `+${taxInfo.paylaterServiceFee.toLocaleString('id-ID')}`);
    if (taxInfo.hasPpn) {
        const valStr = taxInfo.ppnAmount > 0 ? `${taxInfo.isInclusive ? '' : '+'}${taxInfo.ppnAmount.toLocaleString('id-ID')}` : '0';
        h += pL(taxInfo.ppnLabel, valStr);
    }
    h += `<div class="utp-double-separator"></div><div class="font-bold text-[12px]">${pL('TOTAL', 'Rp ' + grandTotal.toLocaleString('id-ID'))}</div>${pL('Metode Bayar', payMethod)}`;
    if (o.payment?.method === 'tempo' || o.payment?.isPaylater || o.payment?.subMethod === 'paylater') {
        const isPl = !!(o.payment?.isPaylater || o.payment?.subMethod === 'paylater');
        if (isPl) {
            if (o.payment?.paylaterMonths) {
                const tLbl = o.payment?.paylaterTenor === '2m' ? '2 Bulan' : (o.payment?.paylaterTenor === '3m' ? '3 Bulan' : '30 Hari');
                h += pL('Tenor Cicilan', `${tLbl} (${o.payment.paylaterMonths}x)`);
            }
            if (o.payment?.paylaterMonthlyInstallment) {
                h += `<div class="font-bold">${pL('Angsuran/Bln', 'Rp ' + Math.round(o.payment.paylaterMonthlyInstallment).toLocaleString('id-ID'))}</div>`;
            }
            if (o.payment?.tempoDp > 0) {
                h += pL('Uang Muka (DP)', 'Rp ' + Math.round(o.payment.tempoDp).toLocaleString('id-ID'));
            }
            h += `<div class="font-bold">${pL('Tagihan PayLater', 'Rp ' + Math.round(o.payment?.tempoBalance || grandTotal).toLocaleString('id-ID'))}</div>`;
        } else {
            if (o.payment?.tempoDp > 0) {
                h += pL('Uang Muka (DP)', 'Rp ' + Math.round(o.payment.tempoDp).toLocaleString('id-ID'));
            }
            h += `<div class="font-bold">${pL('Sisa Piutang', 'Rp ' + Math.round(o.payment?.tempoBalance || grandTotal).toLocaleString('id-ID'))}</div>`;
        }
        if (o.payment?.tempoDueDate) {
            const dStr = typeof o.payment.tempoDueDate === 'number' ? new Date(o.payment.tempoDueDate).toLocaleDateString('id-ID', {day:'numeric', month:'short', year:'numeric'}) : o.payment.tempoDueDate;
            h += pL('Jatuh Tempo', dStr);
        }
    }
    
    // Informasi loyalty poin & reward
    if (config.showPoints && (o.pointsEarned > 0 || o.finalMemberPoints !== undefined)) {
        h += `<div class="utp-separator"></div>`;
        if (o.pointsEarned > 0) h += pL('Poin Didapat', '+' + o.pointsEarned + ' Poin');
        if (o.finalMemberPoints !== undefined && o.finalMemberPoints !== null) h += `<div class="font-bold">${pL('Saldo Poin', String(o.finalMemberPoints) + ' Poin')}</div>`;
        if (o.claimedReward) h += `<div style="white-space:pre-wrap;font-weight:bold;word-break:break-word;margin-top:2px;">HADIAH: ${esc(o.claimedReward.name)}</div>`;
    }
    
    const hasPO = orderItems.some(i => i && i.poTime && i.poTime !== '');
    if (hasPO) {
        h += `<div class="utp-separator"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa tambahan biaya.</div>`;
    }

    // Barcode kasir
    if (config.showBarcode) {
        h += `<div class="utp-separator"></div>
        <div style="text-align:center;margin:6px 0 3px;">
            <div style="width:75%;max-width:200px;height:32px;margin:0 auto;background:repeating-linear-gradient(90deg,#000 0px,#000 2px,transparent 2px,transparent 4px,#000 4px,#000 7px,transparent 7px,transparent 9px,#000 9px,#000 11px,transparent 11px,transparent 13px,#000 13px,#000 16px,transparent 16px,transparent 18px,#000 18px,#000 19px,transparent 19px,transparent 22px);border-top:1px solid #000;border-bottom:1px solid #000;"></div>
            <div style="font-family:monospace;letter-spacing:2px;font-size:10.5px;font-weight:bold;margin-top:3px;">*ORDER-${esc(o.orderId)}*</div>
            <div style="font-size:8px;color:#666;">SCAN DI KASIR</div>
        </div>`;
    }

    h += `<div class="utp-separator"></div><div class="text-center my-2" style="font-size:10px;line-height:1.3;">${esc(config.footerText || 'Terima Kasih Atas Kunjungan Anda')}</div>`;
    if (config.footerPolicyNote) {
        h += `<div class="text-center my-1" style="font-size:9px;line-height:1.25;color:#475569;">${esc(config.footerPolicyNote)}</div>`;
    }
    h += `<div class="utp-separator"></div><div style="height:15px;"></div>`;
    
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


