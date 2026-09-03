/**
 * ============================================================
 * MODUL RIWAYAT PESANAN PELANGGAN
 * Menangani daftar riwayat pesanan lokal, listener realtime status Firestore,
 * rincian pesanan modal pop-up, invoice link, dan pelacakan status.
 * ============================================================
 */

import { db, firebase } from '../../config/firebase.js';
import { appData, myOrders, setMyOrders } from '../../core/state.js';
import { 
    el, show, hide, setIn, setH, esc, fCur, 
    showToast, showConfirm, sLoad, hLoad, ssL,
    rewardStatusLabel 
} from '../../core/utils.js';


let unsubMyOrdersRealtime = [];

/**
 * Melepaskan semua listener realtime status pesanan
 */
export const detachMyOrdersRealtime = () => {
    unsubMyOrdersRealtime.forEach(unsub => {
        try { if (typeof unsub === 'function') unsub(); } catch(e) {}
    });
    unsubMyOrdersRealtime = [];
};

/**
 * Memasang listener realtime Firestore untuk memantau perubahan status pesanan
 */
export const attachMyOrdersRealtime = () => {
    detachMyOrdersRealtime();
    const MAX_LIVE_ORDERS = 10;
    // OPTIMASI KUOTA FIRESTORE: Hanya pantau pesanan yang masih berjalan (Baru, Diproses, Dikirim).
    // Pesanan yang sudah 'Selesai' atau 'Dibatalkan' statusnya bersifat permanen dan tidak akan berubah lagi.
    const activeOrders = myOrders.filter(o => {
        const isFinished = o.status === 'Selesai' || o.status === 'Dibatalkan';
        const hasPendingReward = o.claimedReward && (o.claimedReward.status === 'Menunggu Persetujuan' || !o.claimedReward.status);
        return !isFinished || hasPendingReward;
    }).slice(0, MAX_LIVE_ORDERS);

    activeOrders.forEach((o) => {
        const targetOrderId = o.orderId;
        const unsub = db.collection("freshmart_orders").doc(targetOrderId).onSnapshot(doc => {
            if (!doc.exists) return;
            const data = doc.data();
            const newStatus = data.status;
            const newRewardStatus = data.claimedReward ? data.claimedReward.status : null;
            const newRewardNote = data.claimedReward ? (data.claimedReward.note || '') : '';
            let changed = false; 
            let notifMsg = '';

            const orderEntry = myOrders.find(mo => mo.orderId === targetOrderId);
            if (!orderEntry) return;

            if (newStatus && orderEntry.status !== newStatus) {
                const oldStatus = orderEntry.status;
                orderEntry.status = newStatus;
                changed = true;
                if (oldStatus !== undefined) notifMsg = `Pesanan #${targetOrderId.split('-').pop()} kini: ${newStatus}`;
            }

            if (orderEntry.claimedReward && newRewardStatus &&
                (orderEntry.claimedReward.status !== newRewardStatus || orderEntry.claimedReward.note !== newRewardNote)) {
                orderEntry.claimedReward.status = newRewardStatus;
                orderEntry.claimedReward.note = newRewardNote;
                changed = true;
            }

            if (changed) {
                ssL('freshmart_my_orders', JSON.stringify(myOrders));
                if (window.curViewName === 'view-orders') renderMyOrders();
                if (notifMsg) showToast(notifMsg);
            }
        }, err => {
            console.warn('[MyOrders Realtime] Snapshot error:', err.message);
        });
        unsubMyOrdersRealtime.push(unsub);
    });
};

/**
 * Render daftar riwayat pesanan pelanggan
 */
export const renderMyOrders = async () => {
    if (!myOrders.length) { 
        show('orders-empty-state'); 
        hide('btn-clear-orders'); 
        show('spacer-orders'); 
        setH('orders-items-container', ''); 
        return; 
    }
    hide('orders-empty-state'); 
    show('btn-clear-orders'); 
    hide('spacer-orders');

    attachMyOrdersRealtime();

    setH('orders-items-container', myOrders.map((o, x) => {
        const dStr = new Date(o.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
        
        let bC = "text-slate-500 border-slate-200", iC = "fa-clock";
        if (o.status === 'Baru') { 
            bC = "text-rose-500 border-rose-200 bg-rose-50 dark:bg-rose-900/20 dark:border-rose-800"; 
            iC = "fa-asterisk"; 
        } else if (o.status === 'Diproses') { 
            bC = "text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30"; 
            iC = "fa-spinner fa-spin"; 
        } else if (o.status === 'Selesai') { 
            bC = "text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] dark:border-[var(--color-primary)]/30"; 
            iC = "fa-check-double"; 
        } else if (o.status === 'Dibatalkan') { 
            bC = "text-slate-400 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700"; 
            iC = "fa-xmark"; 
        }

        return `
        <div class="bg-white dark:bg-slate-800 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group min-w-0">
            <div class="flex justify-between items-start mb-3 border-b border-slate-100 dark:border-slate-700/50 pb-3">
                <div>
                    <span class="font-bold text-sm text-slate-800 dark:text-white tracking-tight">#${o.orderId.split('-').pop()}</span>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">${dStr}</p>
                </div>
                <span class="text-[9px] font-bold px-2 py-1 rounded border ${bC} uppercase tracking-widest flex items-center"><i class="fa-solid ${iC} mr-1"></i> ${esc(o.status)}</span>
            </div>
            ${(o.pointsEarned > 0 || o.claimedReward) ? `
            <div class="flex flex-wrap gap-1.5 mb-3">
                ${o.pointsEarned > 0 ? `<span class="text-[9px] font-bold px-2 py-1 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400"><i class="fa-solid fa-star mr-1"></i>+${o.pointsEarned} Poin</span>` : ''}
                ${o.claimedReward ? `<span class="text-[9px] font-bold px-2 py-1 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)]/40 dark:text-[var(--color-primary)]"><i class="fa-solid fa-gift mr-1"></i>Hadiah: ${esc(o.claimedReward.name)} ${rewardStatusLabel(o.claimedReward)}</span>` : ''}
                ${(o.claimedReward && o.finalMemberPoints !== undefined && o.finalMemberPoints !== null) ? `<span class="text-[9px] font-bold px-2 py-1 rounded-xl bg-slate-100 text-slate-500 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"><i class="fa-solid fa-wallet mr-1"></i>Sisa Poin: ${o.finalMemberPoints}</span>` : ''}
            </div>` : ''}
            <div class="flex justify-between items-end mt-2">
                <div>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-0.5">Total Tagihan</p>
                    <p class="text-[var(--color-primary)] font-bold text-base tracking-tight">${fCur(o.total)} <span class="text-[10px] text-slate-500 dark:text-slate-400 font-bold ml-1">(${o.itemCount} Item)</span></p>
                </div>
                <div class="flex gap-2">
                    <button onclick="openCustomerOrderDetail('${o.orderId}')" class="h-8 px-4 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] hover:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.35)] text-[10px] font-bold transition-colors active:scale-95 shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-file-invoice"></i> Detail</button>
                    <button onclick="checkOrderStatus('${o.orderId}', ${x})" class="h-8 px-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-[10px] font-bold transition-colors active:scale-95 shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-rotate"></i> Status</button>
                </div>
            </div>
        </div>`;
    }).join(''));
};

/**
 * Cek status pesanan manual dari server
 */
export const checkOrderStatus = async (orderId, index) => {
    sLoad('Melacak Status...');
    try {
        const doc = await db.collection("freshmart_orders").doc(orderId).get();
        if (doc.exists) {
            myOrders[index].status = doc.data().status;
            ssL('freshmart_my_orders', JSON.stringify(myOrders));
            renderMyOrders(); 
            showToast("Status Diperbarui!");
        } else {
            showToast("Pesanan tidak ditemukan.");
        }
    } catch (e) { 
        showToast("Gagal mengambil data sistem."); 
    } finally { 
        hLoad(); 
    }
};

/**
 * Kosongkan riwayat pesanan lokal
 */
export const clearMyOrders = () => { 
    showConfirm("Hapus Riwayat", "Riwayat pesanan di perangkat ini akan dihapus. Lanjutkan?", () => { 
        setMyOrders([]); 
        ssL('freshmart_my_orders', JSON.stringify(myOrders)); 
        renderMyOrders(); 
        showToast("Riwayat dibersihkan"); 
    }); 
};

/**
 * Buka modal rincian pesanan pelanggan
 */
export const openCustomerOrderDetail = async (orderId) => {
    sLoad('Memuat Rincian...');
    try {
        const doc = await db.collection("freshmart_orders").doc(orderId).get();
        if (!doc.exists) { 
            showToast('Pesanan tidak ditemukan.');
            hLoad();
            return; 
        }
        
        const d = doc.data();
        let reviewedKeys = [];
        if (d.status === 'Selesai') {
            try {
                const revSnap = await db.collection("freshmart").doc("cms_data").collection("reviews").where("orderId", "==", orderId).get();
                reviewedKeys = revSnap.docs.map(r => `${r.data().productId}::${r.data().variantName || ''}`);
            } catch(e) {}
        }
        renderOrderDetailModal(orderId, d, reviewedKeys);
    } catch (e) {
        console.error("Gagal mengambil data:", e);
        showToast('Gagal memuat data. Coba beberapa saat lagi.');
    } finally { 
        hLoad(); 
    }
};

/**
 * Render konten HTML modal rincian pesanan
 */
export const renderOrderDetailModal = (orderId, d, reviewedKeys = []) => {
    try {
        let m = document.getElementById('order-detail-modal');
        if (!m) {
            m = document.createElement('div');
            m.id = 'order-detail-modal';
            m.className = 'fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300';
            document.body.appendChild(m);
        }

        const cName = esc((d.customer && d.customer.name) ? d.customer.name : '-');
        const cWa = esc((d.customer && d.customer.wa) ? d.customer.wa : '-');
        const cAddr = esc((d.customer && d.customer.address) ? d.customer.address : '-');
        
        const dMethod = (d.customer && d.customer.deliveryMethod === 'delivery') ? 'Dikirim' : 'Ambil di Toko';
        const dNotes = esc((d.customer && d.customer.note) ? d.customer.note : '');
        const pMethod = esc((d.payment && d.payment.method) ? d.payment.method : 'Cash / COD');
        
        const cartData = d.items || [];
        const hasPO = cartData.some(i => i.poTime && i.poTime !== '');
        const itemsHtml = cartData.map((i) => {
            const qty = parseFloat(i.qty) || 0;
            const price = parseFloat(i.effectivePrice || i.price) || 0;
            const itemTotal = qty * price;
            const reviewKey = `${i.id}::${i.variantName || ''}`;
            const canReview = d.status === 'Selesai' && !reviewedKeys.includes(reviewKey) && i.id !== undefined && i.id !== null;

            return `
            <div class="flex gap-3 items-center border-b border-slate-100 dark:border-slate-700/50 py-3 last:border-0">
                <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-700" style="background-image:url('${esc(i.img || (appData && appData.store ? appData.store.logo : ''))}')"></div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate mb-1" title="${esc(i.name)}">${esc(i.name)}</p>
                    ${(i.variantName || i.poTime) ? `
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${i.variantName ? `<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${esc(i.variantName)}</span>` : ''}
                        ${i.poTime ? `<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${esc(i.poTime)}</span>` : ''}
                    </div>
                    ` : ''}
                    <p class="text-[10px] text-slate-500">${qty} ${esc(i.unit || 'pcs')} x ${fCur(price)}</p>
                    ${canReview ? `<button type="button" onclick="openReviewModal('${orderId}',${i.id},'${encodeURIComponent(i.variantName||'')}','${encodeURIComponent(i.name||'')}','${encodeURIComponent(d.customer?.name||'')}')" class="mt-1.5 text-[10px] font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1"><i class="fa-solid fa-star"></i> Berikan Ulasan</button>` : ''}
                </div>
                <div class="text-right shrink-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-[var(--color-primary)]">${fCur(itemTotal)}</p>
                </div>
            </div>
            `;
        }).join('');

        let dStr = "Tanggal Tidak Tersedia";
        try {
            let dateObj;
            if (d.timestamp && typeof d.timestamp.toDate === 'function') {
                dateObj = d.timestamp.toDate();
            } else {
                const rawDate = d.timestamp || d.dateString || Date.now();
                if (typeof rawDate === 'number') {
                    dateObj = new Date(rawDate);
                } else if (!isNaN(Number(rawDate)) && String(rawDate).trim() !== '') {
                    dateObj = new Date(Number(rawDate));
                } else {
                    const safeIso = String(rawDate).replace(/-/g, '/').replace('T', ' ').replace(/\..*$/, '');
                    dateObj = new Date(rawDate);
                    if (isNaN(dateObj.getTime())) dateObj = new Date(safeIso);
                }
            }
            
            if (dateObj && !isNaN(dateObj.getTime())) {
                dStr = dateObj.toLocaleString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            }
        } catch(e) {
            console.error("Gagal memproses tanggal:", e);
        }
        
        const subtotal = (d.payment && d.payment.subtotal) ? d.payment.subtotal : 0;
        const shipping = (d.payment && d.payment.shippingCost) ? d.payment.shippingCost : 0;
        const discount = (d.payment && d.payment.productDiscount) ? d.payment.productDiscount : 0;
        const shippingDiscount = (d.payment && d.payment.shippingDiscount) ? d.payment.shippingDiscount : 0;
        const ppnAmt = (d.payment && d.payment.ppnAmount) ? d.payment.ppnAmount : 0;
        const ppnRt = (d.payment && d.payment.ppnRate) ? d.payment.ppnRate : 0;
        const grandTotal = (d.payment && d.payment.grandTotal) ? d.payment.grandTotal : 0;

        m.innerHTML = `
            <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl transform translate-y-full sm:translate-y-10 scale-100 transition-transform duration-300 border border-slate-200 dark:border-slate-700" id="order-detail-content">
                
                <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50/50 dark:bg-slate-800/50 rounded-t-[2rem]">
                    <div>
                        <h3 class="font-bold text-slate-800 dark:text-white text-base">Rincian Pesanan</h3>
                        <p class="text-[10px] font-bold text-slate-500 mt-0.5">ID: #${orderId.split('-').pop()}</p>
                    </div>
                    <button onclick="closeCustomerOrderDetailModal()" class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-rose-100 hover:text-rose-500 transition-colors active:scale-95"><i class="fa-solid fa-xmark"></i></button>
                </div>
                
                <div class="p-5 overflow-y-auto flex-1 space-y-6 custom-scrollbar text-sm">
                    <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                        <div>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                            <span class="text-xs font-bold px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">${esc(d.status || 'Baru')}</span>
                        </div>
                        <div class="text-right">
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Waktu Pembelian</p>
                            <p class="text-[11px] font-bold text-slate-700 dark:text-slate-300">${dStr}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5"><i class="fa-solid fa-user text-slate-300"></i> Info Pelanggan</h4>
                            <div class="space-y-1.5 text-xs">
                                <p class="font-bold text-slate-800 dark:text-slate-200">${cName}</p>
                                ${(d.customer && d.customer.wa) ? `<a href="https://wa.me/${cWa}" target="_blank" class="flex items-center gap-1.5 text-[var(--color-primary)] font-bold hover:underline"><i class="fa-brands fa-whatsapp"></i> +${cWa}</a>` : ''}
                                ${(d.customer && d.customer.lat && d.customer.deliveryMethod === 'delivery') ? `<a href="https://www.google.com/maps?q=${esc(d.customer.lat)},${esc(d.customer.lng)}" target="_blank" class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold hover:underline"><i class="fa-solid fa-location-dot"></i> Lihat di Peta</a>` : ''}
                            </div>
                        </div>
                        <div>
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5"><i class="fa-solid fa-truck text-slate-300"></i> Kirim & Bayar</h4>
                            <div class="space-y-1.5 text-xs">
                                <p><span class="text-slate-500 inline-block w-16">Metode</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${dMethod}</span></p>
                                <p><span class="text-slate-500 inline-block w-16">Bayar</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${pMethod.toUpperCase()}</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1">Alamat Tujuan</p>
                            <p class="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">${cAddr}</p>
                        </div>
                        ${dNotes ? `<div class="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700/60"><p class="text-[9px] font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest mb-1">Catatan Pembeli</p><p class="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed italic">"${dNotes}"</p></div>` : ''}
                    </div>

                    ${d.buktiPayment ? `
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5"><i class="fa-solid fa-image text-[var(--color-primary)]"></i> Bukti Pembayaran</h4>
                        <a href="${esc(d.buktiPayment)}" target="_blank" class="block rounded-2xl overflow-hidden border-2 border-[var(--color-primary)]/30 dark:border-[var(--color-primary)]/40 hover:border-[var(--color-primary)] transition-colors shadow-sm">
                            <img src="${esc(d.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-56 object-cover" onerror="this.style.display='none'" loading="lazy">
                            <div class="bg-[rgba(var(--color-primary-rgb),0.06)] p-2 flex items-center justify-center gap-1.5 text-[10px] font-bold text-[var(--color-primary)]"><i class="fa-solid fa-arrow-up-right-from-square"></i> Tap untuk buka full screen</div>
                        </a>
                    </div>` : ''}
                    
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5"><i class="fa-solid fa-basket-shopping text-slate-300"></i> Daftar Belanja</h4>
                        <div class="bg-slate-50 dark:bg-slate-800/30 rounded-2xl px-3 py-1 border border-slate-200 dark:border-slate-700/80">
                            ${itemsHtml}
                        </div>
                    </div>

                    ${hasPO ? `
                    <div class="bg-amber-50 dark:bg-amber-900/10 p-3.5 rounded-xl border border-amber-200 dark:border-amber-800/30 flex gap-2.5 items-start">
                        <i class="fa-solid fa-clock text-amber-500 mt-0.5 animate-pulse"></i>
                        <p class="text-[11px] font-bold text-amber-700 dark:text-amber-400 leading-relaxed">Catatan: Pesanan ini mengandung produk Pre-Order (PO). Khusus untuk produk berlabel PO akan dikirimkan menyusul (estimasi sesuai label) tanpa dikenakan biaya tambahan.</p>
                    </div>` : ''}

                    ${(d.pointsEarned > 0 || d.claimedReward || (d.finalMemberPoints !== undefined && d.finalMemberPoints !== null)) ? `
                    <div class="space-y-2.5">
                        ${d.pointsEarned > 0 ? `<div class="bg-amber-50 dark:bg-amber-900/10 p-3.5 rounded-xl border border-amber-100 dark:border-amber-900/30 flex items-center gap-2.5"><i class="fa-solid fa-star text-amber-400 text-lg"></i><p class="text-xs font-bold text-amber-700 dark:text-amber-400">Anda mendapat <b>+${d.pointsEarned} Poin</b> dari pesanan ini!</p></div>` : ''}
                        ${(d.finalMemberPoints !== undefined && d.finalMemberPoints !== null) ? `<div class="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2.5"><i class="fa-solid fa-wallet text-slate-400 text-lg"></i><p class="text-xs font-bold text-slate-600 dark:text-slate-300">Saldo Poin Anda saat ini: <b>${d.finalMemberPoints}</b></p></div>` : ''}
                        ${d.claimedReward ? `
                        <div class="bg-[rgba(var(--color-primary-rgb),0.06)] p-3.5 rounded-xl border border-[var(--color-primary)]/15">
                            <div class="flex items-center gap-2.5"><i class="fa-solid fa-gift text-[var(--color-primary)] text-lg"></i><p class="text-xs font-bold text-[var(--color-primary)]">Klaim Hadiah: <b>${esc(d.claimedReward.name)}</b> (${d.claimedReward.pointsCost} Poin)</p></div>
                            <p class="text-[11px] font-bold text-[var(--color-primary)] mt-1.5 ml-6">${rewardStatusLabel(d.claimedReward)}</p>
                            ${d.claimedReward.note ? `<p class="text-[11px] text-[var(--color-primary)]/70 italic mt-0.5 ml-6">"${esc(d.claimedReward.note)}"</p>` : ''}
                        </div>` : ''}
                    </div>` : ''}

                    <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl space-y-2 text-xs">
                        <div class="flex justify-between text-slate-500 dark:text-slate-400"><p>Subtotal Produk</p><p class="font-bold">${fCur(subtotal)}</p></div>
                        <div class="flex justify-between text-slate-500 dark:text-slate-400"><p>Ongkos Kirim</p><p class="font-bold">${fCur(shipping)}</p></div>
                        ${shippingDiscount > 0 ? `<div class="flex justify-between text-[var(--color-primary)]"><p>Diskon Ongkir</p><p class="font-bold">-${fCur(shippingDiscount)}</p></div>` : ''}
                        ${discount > 0 ? `<div class="flex justify-between text-rose-500"><p>Diskon Promo</p><p class="font-bold">-${fCur(discount)}</p></div>` : ''}
                        ${(() => {
                            if (ppnAmt <= 0) return '';
                            const isInc = d.payment?.ppnType === 'inclusive';
                            const baseBeforeTax = (subtotal - discount) + (shipping - shippingDiscount);
                            const dppAmt = d.payment?.dppAmount || (isInc ? Math.round((baseBeforeTax * 100) / (100 + ppnRt)) : Math.max(0, baseBeforeTax));

                            return `
                            <div class="flex justify-between text-slate-500 dark:text-slate-400"><p>DPP (Dasar Pengenaan Pajak)</p><p class="font-bold">${fCur(dppAmt)}</p></div>
                            <div class="flex justify-between text-amber-500"><p>${isInc ? 'Termasuk PPN' : 'PPN'} (${ppnRt}%)</p><p class="font-bold">${isInc ? '' : '+'}${fCur(ppnAmt)}</p></div>
                            `;
                        })()}
                        <div class="flex justify-between items-center border-t border-dashed border-slate-300 dark:border-slate-600 pt-3 mt-2">
                            <p class="font-bold text-slate-800 dark:text-white uppercase tracking-widest">Total Bayar</p>
                            <p class="text-lg font-bold text-[var(--color-primary)]">${fCur(grandTotal)}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        if (m.classList.contains('opacity-0') && typeof window.pushModalHistory === 'function') {
            window.pushModalHistory('customerOrder');
        }
        m.classList.remove('opacity-0', 'pointer-events-none');
        setTimeout(() => {
            const c = document.getElementById('order-detail-content');
            if (c) {
                c.classList.remove('translate-y-full', 'sm:translate-y-10');
                c.classList.add('translate-y-0', 'sm:translate-y-0');
            }
        }, 50);

    } catch (err) {
        console.error("Error Render HTML Modal:", err);
        showToast('Gagal menampilkan detail. Coba lagi.');
    }
};

export const closeCustomerOrderDetailModal = (fH = false) => {
    const doClose = () => {
        const m = document.getElementById('order-detail-modal');
        const c = document.getElementById('order-detail-content');
        if (c) {
            c.classList.remove('translate-y-0', 'sm:translate-y-0');
            c.classList.add('translate-y-full', 'sm:translate-y-10');
        }
        setTimeout(() => {
            if (m) m.classList.add('opacity-0', 'pointer-events-none');
        }, 300);
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('customerOrder', fH, doClose);
    } else {
        doClose();
    }
};

// ─── Expose ke window untuk onclick di HTML ───────────────
window.attachMyOrdersRealtime = attachMyOrdersRealtime;
window.detachMyOrdersRealtime = detachMyOrdersRealtime;
window.renderMyOrders = renderMyOrders;
window.checkOrderStatus = checkOrderStatus;
window.clearMyOrders = clearMyOrders;
window.openCustomerOrderDetail = openCustomerOrderDetail;
window.renderOrderDetailModal = renderOrderDetailModal;
window.closeCustomerOrderDetailModal = closeCustomerOrderDetailModal;
